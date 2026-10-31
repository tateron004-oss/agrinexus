"use strict";

// Koach Learn course (Yoruba translation of shared/excel-spreadsheets.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Menu and button names (Data tab, Freeze Panes, Share, Viewer...) stay in English because the apps show them in English. Formulas stay exactly as written.

module.exports = {
  id: "excel-spreadsheets-yo",
  lang: "yo",
  translationOf: "excel-spreadsheets",
  category: "Small Business",
  name: "Excel àti Spreadsheet fún Iṣẹ́",
  skills: "Títẹ̀ dátà sílẹ̀ àti ṣíṣe ìrísí rẹ̀, Ṣíṣírò àpapọ̀ àti ààrin pẹ̀lú SUM àti AVERAGE, Ṣíṣe ìpinnu pẹ̀lú IF, Títò lẹ́sẹẹsẹ àti síṣẹ́ dátà, Ṣíṣe chart tó rọrùn, Dídi ìlà àkọlé mú àti pínpín spreadsheet",
  outcome: "ṣe spreadsheet iṣẹ́ tó mọ́ tónítóní nínú Excel tàbí Google Sheets: tẹ dátà sílẹ̀ kí o sì ṣe ìrísí rẹ̀, ṣírò àpapọ̀ àti ààrin pẹ̀lú formula, fi IF sàmì sí àwọn ìlà, tò wọ́n lẹ́sẹẹsẹ kí o sì ṣẹ́ wọn, ṣe chart tó rọrùn, di ìlà àkọlé mú, kí o sì pín in láìléwu pẹ̀lú ẹnìkan níbi iṣẹ́.",
  about: [
    "Wọ́n ń lo spreadsheet ní fẹ́rẹ̀ẹ́ gbogbo ibi iṣẹ́: ṣọ́ọ̀bù ń kọ ọjà tí ó tà sílẹ̀, àjọ aláàánú ń kọ ẹ̀bùn àti wákàtí àwọn olùyọ̀ǹda sílẹ̀, olórí àwọn òṣìṣẹ́ ń kọ àkókò iṣẹ́ (shift) sílẹ̀, ìdílé sì ń kọ ètò owó wọn sílẹ̀. Mímọ̀ ọ́n dáadáa jẹ́ ọgbọ́n tí àwọn agbanisíṣẹ́ ń béèrè fún.",
    "Ẹ̀kọ́ yìí ń ṣiṣẹ́ nínú Microsoft Excel (lórí kọ̀mpútà, tàbí lọ́fẹ̀ẹ́ lórí wẹ́ẹ̀bù ní office.com pẹ̀lú àkáǹtì Microsoft) àti nínú Google Sheets (ọ̀fẹ́ pẹ̀lú àkáǹtì Google ní sheets.google.com). Formula kan náà ni nínú méjèèjì. Tí orúkọ àwọn mẹ́nù bá yàtọ̀, ẹ̀kọ́ náà máa sọ méjèèjì fún ọ tàbí ṣàlàyé ohun tí o máa ṣe.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ka ẹ̀kọ́ náà, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" nínú spreadsheet gidi. O máa kọ́ spreadsheet àṣeṣe kan ṣoṣo láti ìbẹ̀rẹ̀ dé òpin ẹ̀kọ́ náà. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe spreadsheet \"Ọjà tí a tà lọ́sẹ̀\" (tàbí \"Wákàtí àwọn olùyọ̀ǹda\" tàbí \"Wákàtí iṣẹ́\") tí ó ní ó kéré tán ìlà 8: àkọlé tí a kọ ní kedere (bold), owó tí ó hàn bí currency, àpapọ̀ pẹ̀lú SUM àti ààrin pẹ̀lú AVERAGE, ọ̀wọ̀n IF tí ó sàmì sí ìlà kọ̀ọ̀kan (fún àpẹẹrẹ \"Goal met\" tàbí \"Below goal\"), dátà tí a tò láti èyí tó ga jù dé èyí tó kéré jù, filter lórí ìlà àkọlé, column chart, ìlà òkè tí a dì mú, àti fáìlì tí a pín fún ẹnìkan gẹ́gẹ́ bí Viewer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olókòwò kékeré, àwọn òṣìṣẹ́ wọn, àwọn tí ń wá iṣẹ́ àti àwọn olùyọ̀ǹda tí wọ́n nílò láti kọ ọjà tí wọ́n tà, wákàtí iṣẹ́, ọjà inú ilé ìkẹ́rùsí tàbí ẹ̀bùn sílẹ̀ níbi iṣẹ́. Ọ̀pọ̀ lára wọn ti rí spreadsheet rí ṣùgbọ́n wọn kò tíì ṣe ọ̀kan láti ìbẹ̀rẹ̀.",
    startingPoint: "Wọ́n lè lo kọ̀mpútà tàbí fóònù, tẹ ọ̀rọ̀, kí wọ́n sì ṣí browser wẹ́ẹ̀bù. Wọn kò fi bẹ́ẹ̀ lo formula, títò lẹ́sẹẹsẹ, chart tàbí ètò pínpín rí.",
    gap: "Ọ̀pọ̀ iṣẹ́ àti òwò kékeré ń retí ọgbọ́n spreadsheet ìpìlẹ̀, àkọsílẹ̀ orí ìwé tàbí spreadsheet tí kò mọ́ sì ń fa àṣìṣe. Ṣíṣe spreadsheet tó mọ́, tí ó ní àpapọ̀, àmì, chart àti pínpín láìléwu ń fi àkókò pamọ́, ó sì ń mú kí agbanisíṣẹ́ fẹ́ gba akẹ́kọ̀ọ́ síṣẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti ìgbésẹ̀ kúkúrú",
      "Ẹ̀rọ: kọ̀mpútà tí ó ní Excel, Excel lórí wẹ́ẹ̀bù tàbí Google Sheets ló dára jù; fóònù le jù",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan pẹ̀lú àṣeṣe ọwọ́",
      "Àwọn mẹ́nù yàtọ̀ díẹ̀ láàárín Excel àti Google Sheets; a fi méjèèjì hàn",
      "Ìsọfúnni àdáni: kò sí ọ̀rọ̀ aṣínà, nọ́mbà Social Security tàbí ìsọfúnni báńkì nínú spreadsheet àṣeṣe tàbí èyí tí a pín"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí wọ́n jẹ́ tuntun sí kọ̀mpútà lè kọ́kọ́ ṣe ẹ̀kọ́ ọgbọ́n kọ̀mpútà ìpìlẹ̀."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Nínú fáìlì Excel tàbí Google Sheets òfìfo", action: "tẹ tábìlì kékeré kan sílẹ̀ pẹ̀lú àkọlé ní ìlà 1 àti àkọsílẹ̀ kan ní ìlà kọ̀ọ̀kan", standard: "pẹ̀lú irú dátà kan ṣoṣo nínú ọ̀wọ̀n kọ̀ọ̀kan" },
    { id: "O2", condition: "Tí a bá fún ọ ní tábìlì dátà kan", action: "ṣe àwọn àkọlé ní bold, owó bí currency, kí o sì mú kí àwọn ọ̀wọ̀n gbà ohun tó wà nínú wọn", standard: "tí ó fi máa yé ènìyàn ní ìwò kan" },
    { id: "O3", condition: "Tí a bá fún ọ ní ọ̀wọ̀n nọ́mbà kan", action: "kọ SUM, AVERAGE àti formula fún ìlà kọ̀ọ̀kan, kí o sì fi fill handle da wọ́n kọ sísàlẹ̀", standard: "pẹ̀lú èsì tó tọ̀nà láìsí ìkìlọ̀ àṣìṣe kankan" },
    { id: "O4", condition: "Tí a bá fún ọ ní òfin kan bí àfojúsùn ọjà títà tàbí wákàtí 40", action: "kọ formula IF tí ó sàmì sí ìlà kọ̀ọ̀kan", standard: "pẹ̀lú àmì tó tọ̀nà lórí gbogbo ìlà" },
    { id: "O5", condition: "Tí a bá fún ọ ní tábìlì tí ó ní ó kéré tán ìlà 8", action: "tò gbogbo tábìlì náà lẹ́sẹẹsẹ, fi filter kún un, kí o sì di ìlà àkọlé mú", standard: "láìdà ìlà kankan rú" },
    { id: "O6", condition: "Tí a bá fún ọ ní àwọn orúkọ àti nọ́mbà", action: "ṣe column chart kí o sì pín fáìlì náà pẹ̀lú àṣẹ tó kéré jù tí ẹni náà nílò", standard: "láìsí ìsọfúnni àdáni kankan nínú spreadsheet tí a pín" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíkọ́ spreadsheet rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cell, ìlà, ọ̀wọ̀n àti títẹ̀ dátà sílẹ̀",
          minutes: 5,
          goal: "Ṣí spreadsheet tuntun kí o sì tẹ tábìlì dátà kékeré kan sílẹ̀ pẹ̀lú àkọlé.",
          text: [
            "Spreadsheet jẹ́ àwọn àpótí tí a tò bí àwọ̀n. Ọ̀wọ̀n (column) ń lọ láti òkè dé ìsàlẹ̀, wọ́n sì ní lẹ́tà (A, B, C). Ìlà (row) ń lọ láti òsì sí ọ̀tún, wọ́n sì ní nọ́mbà (1, 2, 3). Àpótí kọ̀ọ̀kan ni cell, a sì ń pè é ní orúkọ ọ̀wọ̀n àti ìlà rẹ̀: cell tó wà ní òkè lápá òsì ni A1. Fáìlì kan lè ní ọ̀pọ̀ sheet, tí ó hàn bí táàbù ní ìsàlẹ̀.",
            "Láti tẹ dátà, tẹ cell kan, tẹ ọ̀rọ̀ rẹ, kí o sì tẹ Enter láti lọ sísàlẹ̀ tàbí Tab láti lọ sí ọ̀tún. Fi àkọlé sí ìlà 1, bí Date, Item, Quantity àti Price, àti àkọsílẹ̀ kan ní ìlà kọ̀ọ̀kan nísàlẹ̀. Fi irú dátà kan ṣoṣo sí ọ̀wọ̀n kọ̀ọ̀kan: ọjọ́ nìkan nínú ọ̀wọ̀n Date, nọ́mbà nìkan nínú Price.",
            "Láti tún cell kan ṣe, tẹ ẹ́ kí o sì tẹ ọ̀rọ̀ tuntun lé e lórí, tàbí tẹ ẹ́ lẹ́ẹ̀mejì láti tún apá kan ṣe. Undo (Ctrl+Z lórí Windows, Cmd+Z lórí Mac) máa ń mú ìyípadà tó kẹ́yìn kúrò. Excel lórí wẹ́ẹ̀bù àti Google Sheets máa ń fi iṣẹ́ pamọ́ bí o ṣe ń ṣiṣẹ́; nínú Excel orí kọ̀mpútà, máa fi pamọ́ (save) lóòrèkóòrè.",
            "Láti bẹ̀rẹ̀: nínú Google Sheets, lọ sí sheets.google.com kí o sì yan spreadsheet òfìfo (blank). Nínú Excel, ṣí Excel (tàbí Excel lórí wẹ́ẹ̀bù ní office.com) kí o sì yan workbook òfìfo."
          ],
          steps: ["Ṣí spreadsheet òfìfo nínú Google Sheets tàbí Excel.", "Tẹ cell A1 kí o sì tẹ àkọlé àkọ́kọ́ rẹ. Tẹ Tab láti lọ sí ọ̀tún.", "Tẹ àwọn àkọlé yòókù sí ìlà 1.", "Tẹ àkọsílẹ̀ kan sí ìlà kọ̀ọ̀kan, bẹ̀rẹ̀ láti ìlà 2.", "Fún fáìlì náà ní orúkọ tó yé, bí \"Weekly Sales - March\"."],
          words: [["Cell", "àpótí kan nínú àwọ̀n náà, tí a ń pè ní lẹ́tà ọ̀wọ̀n àti nọ́mbà ìlà, bí B3."], ["Àkọlé (header)", "orúkọ tó wà lókè ọ̀wọ̀n tí ó sọ ohun tó wà nínú rẹ̀."], ["Workbook", "fáìlì Excel; ó lè ní ọ̀pọ̀ sheet."]],
          slides: [
            { title: "Àwọ̀n náà", bullets: ["Ọ̀wọ̀n ní lẹ́tà; ìlà ní nọ́mbà", "A ń pe cell bí A1 tàbí B3", "Táàbù ní ìsàlẹ̀ jẹ́ sheet ọ̀tọ̀ọ̀tọ̀"] },
            { title: "Títẹ̀ dátà sílẹ̀", bullets: ["Tẹ cell, tẹ ọ̀rọ̀, lẹ́yìn náà Enter (sísàlẹ̀) tàbí Tab (sí ọ̀tún)", "Àkọlé ní ìlà 1", "Àkọsílẹ̀ kan ní ìlà kan, irú dátà kan ní ọ̀wọ̀n kan"] },
            { title: "Títún ṣe àti fífi pamọ́", bullets: ["Tẹ ọ̀rọ̀ tuntun lé cell lórí tàbí tẹ ẹ́ lẹ́ẹ̀mejì láti tún un ṣe", "Undo: Ctrl+Z (Windows) tàbí Cmd+Z (Mac)", "Àwọn ẹ̀yà wẹ́ẹ̀bù ń fi pamọ́ fúnra wọn"] }
          ],
          tryIt: "Ṣí spreadsheet òfìfo. Ní ìlà 1, tẹ àwọn àkọlé Day, Item, Quantity, Price. Tẹ ìlà 8 ti ọjà àṣeṣe tí a tà (fún àpẹẹrẹ Mon, Coffee, 12, 3.50). Pe fáìlì náà ní \"Practice Sales\".",
          youCanNow: "ṣí spreadsheet, rí cell èyíkéyìí nípa orúkọ rẹ̀, kí o sì tẹ tábìlì tó mọ́ sílẹ̀ pẹ̀lú àkọlé.",
          quickCheck: [
            { objective: "O1", q: "Kí ni cell?", options: ["Odindi ọ̀wọ̀n kan", "Táàbù kan ní ìsàlẹ̀ fáìlì", "Àpótí kan nínú àwọ̀n, tí a ń pè ní orúkọ ọ̀wọ̀n àti ìlà rẹ̀", "Orúkọ fáìlì náà"], answer: 2, why: "Àpótí kọ̀ọ̀kan nínú àwọ̀n ni cell, a sì ń pè é ní lẹ́tà ọ̀wọ̀n àti nọ́mbà ìlà rẹ̀, bí A1." },
            { objective: "O1", q: "O ń ṣe àkọsílẹ̀ iye owó ọjà. Kí ló yẹ kí ó wà nínú ọ̀wọ̀n Price?", options: ["Iye owó àti orúkọ ọjà pọ̀ mọ́ ara wọn", "Iye owó nìkan", "Iye owó àti àkọsílẹ̀ nípa oníbàárà kọ̀ọ̀kan", "Ohunkóhun tí ó bá wọ̀ ọ́"], answer: 1, why: "Fi irú dátà kan ṣoṣo sí ọ̀wọ̀n kọ̀ọ̀kan, kí ọ̀wọ̀n Price lè ní nọ́mbà nìkan." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣe ìrísí kí ó lè rọrùn láti kà",
          minutes: 4,
          goal: "Ṣe ìrísí àwọn àkọlé, owó àti fífẹ̀ ọ̀wọ̀n kí spreadsheet lè yé.",
          text: [
            "Ṣíṣe ìrísí (formatting) ń yí bí dátà ṣe rí padà, kì í ṣe ohun tí ó jẹ́. Ìrísí tó dára ń jẹ́ kí spreadsheet yé ní ìwò kan.",
            "Ṣe àkọlé ní bold: yan ìlà 1 kí o sì tẹ bọ́tìnnì B (Bold) lórí ọ̀pá irinṣẹ́ (toolbar), tàbí tẹ Ctrl+B (Cmd+B lórí Mac). O tún lè fi àwọ̀ kún ìlà àkọlé.",
            "Fi owó hàn bí currency: yan ọ̀wọ̀n Price, ṣí mẹ́nù ìrísí nọ́mbà (number format) kí o sì yan Currency. Nínú Excel, ó wà lórí táàbù Home; nínú Google Sheets, ó wà lábẹ́ Format, lẹ́yìn náà Number, bọ́tìnnì $ sì tún wà lórí toolbar.",
            "Mú kí ọ̀wọ̀n gbà ohun tó wà nínú wọn: tẹ ìlà tó wà láàárín lẹ́tà ọ̀wọ̀n méjì lókè lẹ́ẹ̀mejì, ọ̀wọ̀n tó wà lápá òsì máa fẹ̀ tàbí dín kù láti gba ohun tó gùn jù nínú rẹ̀. Èyí ń ṣiṣẹ́ nínú Excel àti Google Sheets."
          ],
          steps: ["Yan ìlà 1 nípa títẹ nọ́mbà 1 lápá òsì.", "Tẹ Bold (B) tàbí tẹ Ctrl+B.", "Yan ọ̀wọ̀n Price nípa títẹ lẹ́tà rẹ̀.", "Yan Currency nínú mẹ́nù ìrísí nọ́mbà (Excel: táàbù Home; Sheets: Format > Number, tàbí bọ́tìnnì $).", "Tẹ ààlà láàárín lẹ́tà ọ̀wọ̀n lẹ́ẹ̀mejì láti mú fífẹ̀ rẹ̀ bá a mu fúnra rẹ̀."],
          words: [["Ṣíṣe ìrísí (formatting)", "yíyí bí dátà ṣe rí padà (bold, àwọ̀, currency) láìyí iye rẹ̀ padà."], ["Yan (select)", "tẹ tàbí fà kọjá àwọn cell láti yàn wọ́n kí o tó ṣe nǹkan sí wọn."]],
          slides: [
            { title: "Ìrísí ń yí bí ó ṣe rí padà", bullets: ["Kì í ṣe iye tó wà nínú rẹ̀", "Ó ń jẹ́ kí spreadsheet rọrùn láti kà"] },
            { title: "Àkọlé ní bold", bullets: ["Yan ìlà 1", "Tẹ B tàbí Ctrl+B (Cmd+B lórí Mac)", "Fi àwọ̀ kún un tí o bá fẹ́"] },
            { title: "Owó bí currency", bullets: ["Yan ọ̀wọ̀n náà", "Excel: mẹ́nù ìrísí nọ́mbà lórí táàbù Home", "Sheets: Format > Number, tàbí bọ́tìnnì $"] },
            { title: "Mú ọ̀wọ̀n bá a mu", bullets: ["Tẹ ìlà láàárín lẹ́tà ọ̀wọ̀n lẹ́ẹ̀mejì", "Ó ń ṣiṣẹ́ nínú Excel àti Google Sheets"] }
          ],
          tryIt: "Nínú spreadsheet Practice Sales rẹ, ṣe ìlà 1 ní bold pẹ̀lú àwọ̀ fẹ́ẹ́rẹ́fẹ́, fi ọ̀wọ̀n Price hàn bí currency, kí o sì mú kí gbogbo ọ̀wọ̀n gbà ohun tó wà nínú wọn.",
          youCanNow: "ṣe ìrísí àwọn àkọlé, owó àti fífẹ̀ ọ̀wọ̀n kí spreadsheet lè yé kí ó sì rí bí ti akọ́ṣẹ́mọṣẹ́.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ṣíṣe ìrísí ń yí padà?", options: ["Bí dátà ṣe rí, kì í ṣe ohun tí ó jẹ́", "Àwọn nọ́mbà inú cell rẹ", "Àwọn formula inú spreadsheet rẹ", "Àwọn tí ó lè ṣí fáìlì náà"], answer: 0, why: "Ìrísí ń yí bí dátà ṣe rí padà, bí bold tàbí currency, kì í ṣe iye rẹ̀." },
            { objective: "O2", q: "Ọ̀wọ̀n kan kéré jù, ó sì ń gé ọ̀rọ̀ inú rẹ̀ kúrò. Kí lo máa ṣe?", options: ["Pa àwọn ọ̀rọ̀ tó gùn rẹ́", "Sọ lẹ́tà di kékeré púpọ̀", "Tún ọ̀rọ̀ náà tẹ sínú cell méjì", "Tẹ ìlà láàárín lẹ́tà ọ̀wọ̀n lókè lẹ́ẹ̀mejì"], answer: 3, why: "Títẹ ààlà náà lẹ́ẹ̀mejì máa mú kí ọ̀wọ̀n náà fẹ̀ tó ohun tó gùn jù nínú rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Àpapọ̀ àti ààrin pẹ̀lú SUM àti AVERAGE",
          minutes: 5,
          goal: "Kọ formula SUM àti AVERAGE kí o sì da formula kan kọ sísàlẹ̀ ọ̀wọ̀n kan.",
          text: [
            "Formula máa ń bẹ̀rẹ̀ pẹ̀lú àmì dọ́gba (=) nígbà gbogbo. Ó lè ṣe ìṣirò pẹ̀lú orúkọ cell: =C2*D2 ń fi iye ọjà (quantity) inú C2 sọdipúpọ̀ iye owó (price) inú D2. Tí o bá yí C2 padà, ìdáhùn máa yí padà fúnra rẹ̀.",
            "SUM ń ro àwọn cell inú range kan pọ̀. A ń kọ range bí cell àkọ́kọ́, colon (:), cell ìkẹyìn: =SUM(E2:E9) ń ro E2 dé E9 pọ̀. AVERAGE ń wá ààrin: =AVERAGE(E2:E9). Méjèèjì ń ṣiṣẹ́ bákan náà nínú Excel àti Google Sheets.",
            "Láti da formula kọ sísàlẹ̀ ọ̀wọ̀n, tẹ cell tí formula wà, lẹ́yìn náà fa àpótí kékeré tó wà ní igun ìsàlẹ̀ lápá ọ̀tún rẹ̀ (fill handle) sísàlẹ̀. Orúkọ cell máa yí padà fún ìlà kọ̀ọ̀kan: E2 máa di E3, E4 àti bẹ́ẹ̀ bẹ́ẹ̀ lọ.",
            "Ṣàyẹ̀wò iṣẹ́ rẹ: tí formula bá fi àṣìṣe hàn bí #NAME? tàbí #VALUE!, wá àṣìṣe sípẹ́lì nínú orúkọ function tàbí ọ̀rọ̀ tó wà nínú ọ̀wọ̀n nọ́mbà."
          ],
          steps: ["Ní E1, tẹ àkọlé Total.", "Ní E2, tẹ =C2*D2 kí o sì tẹ Enter.", "Fa fill handle láti E2 sísàlẹ̀ dé ìlà ìkẹyìn.", "Nísàlẹ̀ ìlà ìkẹyìn, tẹ =SUM(E2:E9) fún àpapọ̀ gbogbo rẹ̀.", "Nísàlẹ̀ ìyẹn, tẹ =AVERAGE(E2:E9) fún ààrin ọjà tí a tà."],
          words: [["Formula", "ìṣirò nínú cell tí ó bẹ̀rẹ̀ pẹ̀lú =, tí ó sì ń yí padà nígbà tí dátà bá yí padà."], ["Range", "àwọn cell tí ó tẹ̀lé ara wọn, tí a kọ bí àkọ́kọ́:ìkẹyìn, bí E2:E9."], ["Fill handle", "àpótí kékeré ní igun ìsàlẹ̀ lápá ọ̀tún cell tí a yàn, tí o ń fà láti dà á kọ."]],
          slides: [
            { title: "Formula ń bẹ̀rẹ̀ pẹ̀lú =", bullets: ["=C2*D2 ń sọ cell méjì dipúpọ̀", "Yí dátà padà, ìdáhùn á sì yí padà"] },
            { title: "SUM àti AVERAGE", bullets: ["=SUM(E2:E9) ń ro range kan pọ̀", "=AVERAGE(E2:E9) ń wá ààrin", "Bákan náà ni nínú Excel àti Google Sheets"] },
            { title: "Da formula kọ sísàlẹ̀", bullets: ["Fa fill handle ní igun cell náà", "Orúkọ cell ń yí padà fún ìlà kọ̀ọ̀kan"] },
            { title: "Àṣìṣe", bullets: ["#NAME?: ṣàyẹ̀wò sípẹ́lì", "#VALUE!: ọ̀rọ̀ wà níbi tí nọ́mbà yẹ kí ó wà"] }
          ],
          tryIt: "Nínú spreadsheet rẹ, fi ọ̀wọ̀n Total kún un pẹ̀lú =C2*D2 tí a dà kọ sísàlẹ̀, lẹ́yìn náà fi àpapọ̀ gbogbo rẹ̀ pẹ̀lú SUM àti ààrin ọjà tí a tà pẹ̀lú AVERAGE sí abẹ́ ọ̀wọ̀n náà. Yí iye ọjà kan padà kí o sì wo bí àpapọ̀ ṣe yí padà.",
          youCanNow: "kọ formula SUM àti AVERAGE, sọ cell dipúpọ̀, kí o sì da formula kọ sísàlẹ̀ ọ̀wọ̀n kan.",
          quickCheck: [
            { objective: "O3", q: "Kí ni =C2*D2 ń ṣe?", options: ["Ó ń ro C2 àti D2 pọ̀", "Ó ń fi iye inú C2 sọdipúpọ̀ iye inú D2", "Ó ń da C2 kọ sínú D2", "Ó ń fi àṣìṣe hàn"], answer: 1, why: "Àmì * ń sọdipúpọ̀, nítorí náà =C2*D2 ń fi iye ọjà sọdipúpọ̀ iye owó." },
            { objective: "O3", q: "O nílò àpapọ̀ E2 dé E9. Kí lo máa tẹ?", options: ["SUM E2 to E9", "=E2+E9", "=SUM(E2:E9)", "=TOTAL E2-E9"], answer: 2, why: "SUM ń ro range tí a kọ bí cell àkọ́kọ́, colon, cell ìkẹyìn pọ̀, gbogbo formula sì ń bẹ̀rẹ̀ pẹ̀lú =." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíkọ́ spreadsheet rẹ",
        questions: [
          { objective: "O1", q: "Kí ni orúkọ cell tó wà ní ọ̀wọ̀n C, ìlà 4?", options: ["4C", "C4", "Row C", "Cell 34"], answer: 1, why: "A ń pe cell ní lẹ́tà ọ̀wọ̀n rẹ̀ kọ́kọ́, lẹ́yìn náà nọ́mbà ìlà rẹ̀." },
          { objective: "O1", q: "Ibo ló yẹ kí àwọn àkọlé rẹ wà?", options: ["Ní ìlà 1, ọ̀kan fún ọ̀wọ̀n kọ̀ọ̀kan", "Ní ìsàlẹ̀", "Nínú cell èyíkéyìí láìní ètò", "Nínú fáìlì ọ̀tọ̀"], answer: 0, why: "Àkọlé ní ìlà 1 ń sọ ohun tó wà nínú ọ̀wọ̀n dátà kọ̀ọ̀kan nísàlẹ̀." },
          { objective: "O2", q: "O fẹ́ kí iye owó hàn pẹ̀lú àmì dọ́là ($). Kí lo máa ṣe?", options: ["Tẹ $ ṣáájú gbogbo nọ́mbà", "Ṣe ọ̀wọ̀n náà ní bold", "Pa àwọn iye owó rẹ́", "Yan Currency nínú mẹ́nù ìrísí nọ́mbà"], answer: 3, why: "Ìrísí Currency ń fi àmì owó àti ìdá-mẹ́wàá (decimal) kún gbogbo cell." },
          { objective: "O3", q: "Formula wo ló ń ro cell B2 dé B10 pọ̀?", options: ["SUM B2-B10", "=ADD(B2,B10)", "=SUM(B2:B10)", "B2+B10"], answer: 2, why: "Formula ń bẹ̀rẹ̀ pẹ̀lú =, range sì ń lo colon." },
          { objective: "O3", q: "Kí ló ń ṣẹlẹ̀ tí o bá fa fill handle sísàlẹ̀ láti cell tí ó ní =C2*D2?", options: ["A da formula náà kọ, ó sì yí padà fún ìlà kọ̀ọ̀kan", "A pa cell náà rẹ́", "Gbogbo ìlà ní =C2*D2 gẹ́lẹ́", "A pín spreadsheet náà"], answer: 0, why: "Orúkọ cell ń yí padà ní ìlà kọ̀ọ̀kan: C3*D3, C4*D4 àti bẹ́ẹ̀ bẹ́ẹ̀ lọ." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣiṣẹ́ pẹ̀lú dátà rẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe ìpinnu pẹ̀lú IF",
          minutes: 5,
          goal: "Kọ formula IF tí ó sàmì sí ìlà kọ̀ọ̀kan gẹ́gẹ́ bí òfin kan.",
          text: [
            "IF ń ṣàyẹ̀wò ipò kan, ó sì ń fi èsì kan hàn tí ó bá jẹ́ òótọ́ àti èsì mìíràn tí kò bá jẹ́ òótọ́. Àpẹẹrẹ rẹ̀ ni =IF(ìdánwò, èsì tí ó bá jẹ́ òótọ́, èsì tí kò bá jẹ́ òótọ́).",
            "Àpẹẹrẹ: =IF(E2>=50,\"Goal met\",\"Below goal\") ń sàmì sí ọjà tí a tà. =IF(C2>40,\"Overtime\",\"Regular\") ń sàmì sí wákàtí iṣẹ́ ọ̀sẹ̀ kan. =IF(D2=\"\",\"Missing\",\"OK\") ń fi cell òfìfo hàn. Èsì tí ó jẹ́ ọ̀rọ̀ ń lọ sínú àmì àyọlò méjì (\" \"); nọ́mbà kì í lọ.",
            "Àwọn àmì ìfiwéra: > ó tóbi ju, < ó kéré ju, >= ó tóbi ju tàbí ó dọ́gba, <= ó kéré ju tàbí ó dọ́gba, = ó dọ́gba, <> kò dọ́gba.",
            "IF ń ṣiṣẹ́ bákan náà nínú Excel àti Google Sheets. Tí ètò agbègbè (region) spreadsheet rẹ bá ń lo kọ́mà fún decimal, àmì ìyàsọ́tọ̀ náà lè jẹ́ semicolon (;) dípò kọ́mà; app náà máa fi àpẹẹrẹ rẹ̀ hàn ọ́ bí o ṣe ń tẹ ọ̀rọ̀."
          ],
          steps: ["Fi àkọlé kan, bí Status, kún ọ̀wọ̀n òfìfo tó kàn.", "Ní ìlà 2, tẹ =IF(", "Tẹ ìdánwò náà, bí E2>=50, lẹ́yìn náà kọ́mà.", "Tẹ èsì òótọ́ nínú àmì àyọlò, kọ́mà, èsì tí kò jẹ́ òótọ́ nínú àmì àyọlò, àti ).", "Tẹ Enter kí o sì fi fill handle da formula náà kọ sísàlẹ̀."],
          words: [["IF", "function tí ó ń fi èsì kan hàn nígbà tí ìdánwò bá jẹ́ òótọ́ àti èsì mìíràn nígbà tí kò bá jẹ́ òótọ́."], ["Ipò (condition)", "ìdánwò inú formula IF, bí E2>=50."]],
          slides: [
            { title: "Àpẹẹrẹ IF", bullets: ["=IF(ìdánwò, tí ó bá jẹ́ òótọ́, tí kò bá jẹ́ òótọ́)", "Bákan náà ni nínú Excel àti Google Sheets"] },
            { title: "Àpẹẹrẹ", bullets: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(C2>40,\"Overtime\",\"Regular\")", "Ọ̀rọ̀ nínú àmì àyọlò méjì; nọ́mbà láìsí wọn"] },
            { title: "Àwọn àmì ìfiwéra", bullets: ["> ó tóbi ju, < ó kéré ju", ">= ó kéré tán, <= ó pọ̀ jù lọ", "= ó dọ́gba, <> kò dọ́gba"] }
          ],
          tryIt: "Fi ọ̀wọ̀n Status kún spreadsheet rẹ pẹ̀lú =IF(E2>=50,\"Goal met\",\"Below goal\") kí o sì dà á kọ sísàlẹ̀. Yí àpapọ̀ kan padà kí ó kọjá 50, kí o sì wo bí àmì náà ṣe yí padà.",
          youCanNow: "kọ formula IF tí ó ń sàmì sí àwọn ìlà fúnra rẹ̀ gẹ́gẹ́ bí òfin kan.",
          quickCheck: [
            { objective: "O4", q: "Kí ni function IF ń ṣe?", options: ["Ó ń ro ọ̀wọ̀n nọ́mbà pọ̀", "Ó ń tò tábìlì lẹ́sẹẹsẹ", "Ó ń ṣe chart", "Ó ń fi èsì kan hàn tí ìdánwò bá jẹ́ òótọ́ àti èsì mìíràn tí kò bá jẹ́ òótọ́"], answer: 3, why: "Àpẹẹrẹ rẹ̀ ni =IF(ìdánwò, èsì tí ó bá jẹ́ òótọ́, èsì tí kò bá jẹ́ òótọ́)." },
            { objective: "O4", q: "O fẹ́ sàmì sí ọjà tí a tà tí ó jẹ́ 50 tàbí jù bẹ́ẹ̀ lọ gẹ́gẹ́ bí \"Goal met\". Formula wo lo máa tẹ ní ìlà 2?", options: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(E2<50,Goal met,Below goal)", "=SUM(E2>=50)", "=IF(\"Goal met\")"], answer: 0, why: "Ìdánwò E2>=50 ló kọ́kọ́ wá, èsì tí ó jẹ́ ọ̀rọ̀ sì ń lọ sínú àmì àyọlò méjì." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Títò lẹ́sẹẹsẹ, síṣẹ́ àti dídi ìlà àkọlé mú",
          minutes: 5,
          goal: "Tò dátà rẹ lẹ́sẹẹsẹ, ṣẹ́ ẹ láti fi àwọn ìlà kan nìkan hàn, kí o sì di ìlà àkọlé mú.",
          text: [
            "Títò lẹ́sẹẹsẹ (sort) ń to àwọn ìlà, bí ọjà tí a tà jù lọ ní àkọ́kọ́ tàbí orúkọ láti A dé Z. Síṣẹ́ (filter) ń fi àwọn ìlà tí o kò nílò báyìí pamọ́, bí fífi àwọn ìlà \"Below goal\" nìkan hàn. Kò sí ọ̀kan nínú wọn tí ó ń pa dátà rẹ́.",
            "Excel: tẹ cell èyíkéyìí nínú tábìlì rẹ, lọ sí táàbù Data, kí o sì yan Sort láti yan ọ̀wọ̀n àti ètò, tàbí yan Filter láti fi ọfà (arrow) kún ìlà àkọlé. Google Sheets: yan dátà rẹ, ṣí mẹ́nù Data kí o sì yan Sort range (sàmì pé dátà náà ní ìlà àkọlé), tàbí yan Create a filter láti fi àwọn ọfà kún un. Tẹ ọfà kan nínú àkọlé láti tò lẹ́sẹẹsẹ tàbí láti yan àwọn iye tí o fẹ́ rí nìkan.",
            "Máa tò gbogbo tábìlì lẹ́sẹẹsẹ nígbà gbogbo, kì í ṣe ọ̀wọ̀n kan nìkan, bí bẹ́ẹ̀ kọ́ àwọn ìlà máa dà rú. Yíyan cell kan nínú tábìlì nínú Excel, tàbí gbogbo range nínú Sheets, ń jẹ́ kí àwọn ìlà dúró papọ̀.",
            "Dídi mú (freeze) ń jẹ́ kí ìlà àkọlé wà lójú iboju nígbà tí o bá ń yí lọ sísàlẹ̀ àkọsílẹ̀ gígùn. Excel: táàbù View, Freeze Panes, lẹ́yìn náà Freeze Top Row. Google Sheets: mẹ́nù View, Freeze, lẹ́yìn náà 1 row."
          ],
          steps: ["Tẹ inú tábìlì rẹ (Excel) tàbí yan gbogbo tábìlì (Sheets).", "Sort: Excel Data tab > Sort; Sheets Data > Sort range, pẹ̀lú ìlà àkọlé.", "Filter: Excel Data tab > Filter; Sheets Data > Create a filter.", "Lo ọfà inú àkọlé láti fi àwọn ìlà tí o fẹ́ nìkan hàn.", "Freeze: Excel View > Freeze Panes > Freeze Top Row; Sheets View > Freeze > 1 row."],
          words: [["Sort", "to àwọn ìlà lẹ́sẹẹsẹ gẹ́gẹ́ bí ọ̀wọ̀n kan, kí ìlà kọ̀ọ̀kan sì dúró papọ̀."], ["Filter", "fi àwọn ìlà tí kò bá ohun tí o yàn mu pamọ́, láìpa wọ́n rẹ́."], ["Freeze", "jẹ́ kí àwọn ìlà tàbí ọ̀wọ̀n dúró lójú iboju nígbà tí o bá ń yí lọ."]],
          slides: [
            { title: "Sort àti filter", bullets: ["Sort: to àwọn ìlà lẹ́sẹẹsẹ", "Filter: fi àwọn ìlà tí o fẹ́ nìkan hàn", "Kò sí èyí tí ó ń pa dátà rẹ́"] },
            { title: "Nínú Excel", bullets: ["Data tab > Sort", "Data tab > Filter ń fi ọfà kún àkọlé", "View > Freeze Panes > Freeze Top Row"] },
            { title: "Nínú Google Sheets", bullets: ["Data > Sort range (dátà ní ìlà àkọlé)", "Data > Create a filter", "View > Freeze > 1 row"] },
            { title: "Jẹ́ kí àwọn ìlà dúró papọ̀", bullets: ["Tò gbogbo tábìlì, má ṣe tò ọ̀wọ̀n kan nìkan láé"] }
          ],
          tryIt: "Tò spreadsheet rẹ gẹ́gẹ́ bí Total, láti èyí tó tóbi jù dé èyí tó kéré jù. Fi filter kún un kí o sì fi àwọn ìlà \"Below goal\" nìkan hàn, lẹ́yìn náà mú filter náà kúrò. Di ìlà òkè mú kí o sì yí lọ sísàlẹ̀ láti rí i pé àwọn àkọlé dúró.",
          youCanNow: "tò dátà lẹ́sẹẹsẹ kí o sì ṣẹ́ ẹ láìléwu, kí o sì di ìlà àkọlé mú.",
          quickCheck: [
            { objective: "O5", q: "Kí ni dídi ìlà àkọlé mú ń ṣe?", options: ["Ó ń ti fáìlì pa kí ẹnikẹ́ni má lè ṣàtúnṣe", "Ó ń jẹ́ kí ìlà àkọlé wà lójú iboju nígbà tí o bá ń yí lọ sísàlẹ̀", "Ó ń pa àwọn ìlà nísàlẹ̀ rẹ́", "Ó ń sọ àkọlé di aláwọ̀ búlúù"], answer: 1, why: "Dídi mú ń jẹ́ kí àkọlé hàn nígbà tí o bá ń yí lọ nínú àkọsílẹ̀ gígùn." },
            { objective: "O5", q: "O fẹ́ rí àwọn ìlà \"Below goal\" nìkan fún ìsinsìnyí, láìpàdánù dátà kankan. Kí lo máa lò?", options: ["Pa àwọn ìlà yòókù rẹ́", "Tò ọ̀wọ̀n kan nìkan", "Filter lórí ìlà àkọlé", "Freeze Panes"], answer: 2, why: "Filter ń fi àwọn ìlà tí o kò nílò báyìí pamọ́, kò sì pa nǹkan kan rẹ́." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣe chart àti pínpín spreadsheet rẹ",
          minutes: 5,
          goal: "Ṣe column chart tó rọrùn kí o sì pín spreadsheet náà pẹ̀lú àṣẹ tó tọ́.",
          text: [
            "Chart ń sọ nọ́mbà di àwòrán. Column chart dára fún fífi iye wéra, bí ọjà tí a tà lójoojúmọ́ tàbí wákàtí olùyọ̀ǹda kọ̀ọ̀kan.",
            "Yan ọ̀wọ̀n méjì: àwọn orúkọ (bí Day) àti àwọn nọ́mbà (bí Total), pẹ̀lú àwọn àkọlé. Láti yan ọ̀wọ̀n méjì tí kò sún mọ́ ara wọn, di Ctrl mú (Cmd lórí Mac) bí o ṣe ń yan èkejì. Excel: lọ sí táàbù Insert kí o sì yan column chart (tàbí Recommended Charts). Google Sheets: ṣí mẹ́nù Insert kí o sì yan Chart; chart editor máa ṣí lápá ọ̀tún, níbi tí o ti lè yan Column chart. Tẹ àkọlé chart láti yí orúkọ rẹ̀ padà.",
            "Láti pín in: nínú Google Sheets, tẹ bọ́tìnnì Share lókè lápá ọ̀tún, tẹ ímeèlì ẹni náà, kí o sì yan Viewer, Commenter tàbí Editor. Nínú Excel, fáìlì náà gbọ́dọ̀ wà lórí OneDrive tàbí SharePoint; lẹ́yìn náà tẹ Share, fi ímeèlì kún un, kí o sì yan bóyá wọ́n lè ṣàtúnṣe tàbí wò ó nìkan.",
            "Pín in láìléwu: fún ẹni náà ní àṣẹ tó kéré jù tí ó nílò (wíwò nìkan tí ó bá kàn fẹ́ kà á), má sì fi ọ̀rọ̀ aṣínà, nọ́mbà Social Security tàbí ìsọfúnni báńkì sínú spreadsheet tí o pín láé."
          ],
          steps: ["Yan ọ̀wọ̀n orúkọ àti ọ̀wọ̀n nọ́mbà, pẹ̀lú àkọlé.", "Excel: Insert tab > column chart. Sheets: Insert > Chart, lẹ́yìn náà yan Column chart.", "Yí àkọlé chart padà.", "Tẹ Share, fi ímeèlì ẹni náà kún un.", "Yan wíwò nìkan (view) àyàfi tí ó bá nílò láti ṣàtúnṣe, lẹ́yìn náà fi ránṣẹ́."],
          words: [["Column chart", "chart tí ó ní àwọn ọ̀pá tí ó dúró ṣánṣán, tí ó dára fún fífi iye wéra."], ["Viewer", "ẹni tí ó lè rí fáìlì tí a pín ṣùgbọ́n tí kò lè yí i padà."], ["Editor", "ẹni tí ó lè yí fáìlì tí a pín padà."]],
          slides: [
            { title: "Yan chart tó tọ́", bullets: ["Column chart: fi iye wéra", "Àpẹẹrẹ: ọjà tí a tà lójoojúmọ́, wákàtí ẹnìkọ̀ọ̀kan"] },
            { title: "Ṣe chart náà", bullets: ["Yan orúkọ àti nọ́mbà pẹ̀lú àkọlé", "Excel: Insert tab > column chart", "Sheets: Insert > Chart > Column chart"] },
            { title: "Pín in", bullets: ["Tẹ Share, fi ímeèlì kún un", "Yan wíwò (view) tàbí ṣíṣàtúnṣe (edit)", "Fáìlì Excel gbọ́dọ̀ wà lórí OneDrive tàbí SharePoint"] },
            { title: "Pín in láìléwu", bullets: ["Fún ní àṣẹ tó kéré jù tí wọ́n nílò", "Kò sí ọ̀rọ̀ aṣínà, nọ́mbà ìdánimọ̀ tàbí nọ́mbà báńkì nínú spreadsheet tí a pín"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí spreadsheet rẹ pẹ̀lú ó kéré tán ìlà 8, àkọlé ní bold, currency, SUM àti AVERAGE, ọ̀wọ̀n Status pẹ̀lú IF, títò láti èyí tó ga jù dé èyí tó kéré jù, filter, column chart ti Day àti Total, àti ìlà òkè tí a dì mú. Lẹ́yìn náà pín in fún ẹnìkan gẹ́gẹ́ bí Viewer.",
          youCanNow: "ṣe column chart láti inú dátà rẹ kí o sì pín spreadsheet pẹ̀lú àṣẹ tó tọ́.",
          quickCheck: [
            { objective: "O6", q: "Chart wo ló dára fún fífi iye wéra, bí wákàtí ẹnìkọ̀ọ̀kan?", options: ["Column chart", "Spreadsheet òfìfo", "Filter", "Ìlà tí a dì mú"], answer: 0, why: "Ẹ̀kọ́ náà sọ pé column chart dára fún fífi iye wéra." },
            { objective: "O6", q: "Ọ̀gá rẹ kàn nílò láti ka spreadsheet rẹ ni. Àṣẹ wo lo máa fún un nígbà tí o bá pín in?", options: ["Editor", "Owner", "Ẹnikẹ́ni tí ó ní link lè ṣàtúnṣe", "Viewer"], answer: 3, why: "Fún ẹni náà ní àṣẹ tó kéré jù tí ó nílò; wíwò nìkan tí ó bá kàn fẹ́ kà á." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣiṣẹ́ pẹ̀lú dátà rẹ",
        questions: [
          { objective: "O4", q: "Kí ni =IF(C2>40,\"Overtime\",\"Regular\") máa fi hàn nígbà tí C2 bá jẹ́ 45?", options: ["Regular", "45", "Overtime", "Àṣìṣe"], answer: 2, why: "45 tóbi ju 40 lọ, nítorí náà èsì òótọ́ ló máa hàn." },
          { objective: "O4", q: "Nínú formula IF, ibo ni èsì tí ó jẹ́ ọ̀rọ̀ ń lọ?", options: ["Sínú àmì àyọlò méjì", "Sínú àkámọ́", "Lẹ́yìn àmì #", "Kò lọ síbìkankan"], answer: 0, why: "Èsì tí ó jẹ́ ọ̀rọ̀ gbọ́dọ̀ wà nínú àmì àyọlò méjì." },
          { objective: "O5", q: "Kí ni filter ń ṣe?", options: ["Ó ń pa àwọn ìlà rẹ́", "Ó ń yí àwọn nọ́mbà padà", "Ó ń pín fáìlì náà", "Ó ń fi àwọn ìlà tí kò bá a mu pamọ́, láìpa wọ́n rẹ́"], answer: 3, why: "Filter kàn ń fi àwọn ìlà pamọ́ ni; tí o bá mú un kúrò, wọ́n á tún hàn." },
          { objective: "O5", q: "Báwo lo ṣe máa jẹ́ kí ìlà àkọlé wà lójú iboju nínú Google Sheets?", options: ["Format > Bold", "View > Freeze > 1 row", "Insert > Chart", "Data > Sort range"], answer: 1, why: "Dídi ìlà 1 mú ń jẹ́ kí ó hàn bí o ṣe ń yí lọ." },
          { objective: "O6", q: "Olùyọ̀ǹda kan kàn nílò láti ka spreadsheet rẹ ni. Àṣẹ wo lo máa fún un?", options: ["Editor", "Owner", "Viewer", "Kò sí; fi ọ̀rọ̀ aṣínà rẹ ránṣẹ́"], answer: 2, why: "Fún ẹni náà ní àṣẹ tó kéré jù tí ó nílò." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Excel àti Spreadsheet fún Iṣẹ́",
    questions: [
      { objective: "O1", q: "Nínú spreadsheet, kí ni a fi ń pe àwọn ọ̀wọ̀n?", options: ["Nọ́mbà", "Lẹ́tà", "Àwọ̀", "Ọjọ́"], answer: 1, why: "Ọ̀wọ̀n ń lo lẹ́tà; ìlà ń lo nọ́mbà." },
      { objective: "O1", q: "Bọ́tìnnì wo ló ń gbé ọ lọ sí cell kan lápá ọ̀tún lẹ́yìn tí o bá tẹ ọ̀rọ̀?", options: ["Tab", "Enter", "Shift", "Esc"], answer: 0, why: "Tab ń lọ sí ọ̀tún; Enter ń lọ sísàlẹ̀." },
      { objective: "O1", q: "Ètò wo ló dára jù fún àkọsílẹ̀ ẹ̀bùn?", options: ["Ẹ̀bùn kọ̀ọ̀kan nínú fáìlì ọ̀tọ̀", "Gbogbo dátà nínú cell kan", "Cell èyíkéyìí káàkiri spreadsheet láìní ètò", "Àkọlé ní ìlà 1 àti ẹ̀bùn kan ní ìlà kọ̀ọ̀kan"], answer: 3, why: "Àkọsílẹ̀ kan ní ìlà kan lábẹ́ àkọlé tó yé ń jẹ́ kí dátà wúlò." },
      { objective: "O1", q: "O tẹ nọ́mbà tí kò tọ́. Ọ̀nà tó yára jù láti mú ìyípadà tó kẹ́yìn kúrò ni:", options: ["Pa fáìlì náà dé", "Undo: Ctrl+Z (Cmd+Z lórí Mac)", "Pa ọ̀wọ̀n náà rẹ́", "Bẹ̀rẹ̀ fáìlì tuntun"], answer: 1, why: "Undo ń mú ohun tí o ṣe kẹ́yìn kúrò." },
      { objective: "O2", q: "Ṣíṣe ìrísí nọ́mbà bí currency:", options: ["Ń yí bí ó ṣe rí padà, kì í ṣe iye rẹ̀", "Ń sọ iye rẹ̀ di ìlọ́po méjì", "Ń pa nọ́mbà náà rẹ́", "Ń sọ ọ́ di ọ̀rọ̀ tí o kò lè rò pọ̀"], answer: 0, why: "Ìrísí ń yí bí nǹkan ṣe rí padà nìkan." },
      { objective: "O2", q: "Báwo lo ṣe máa mú kí ọ̀wọ̀n kan gba ohun tó gùn jù nínú rẹ̀?", options: ["Tẹ àlàfo (space)", "Pa àkọlé rẹ́", "Tẹ ìlà láàárín lẹ́tà ọ̀wọ̀n lẹ́ẹ̀mejì", "Tẹ Enter lẹ́ẹ̀mejì"], answer: 2, why: "Títẹ ààlà náà lẹ́ẹ̀mejì ń mú fífẹ̀ ọ̀wọ̀n bá a mu fúnra rẹ̀." },
      { objective: "O3", q: "Gbogbo formula ń bẹ̀rẹ̀ pẹ̀lú:", options: ["Àmì àròpọ̀ (+) nìkan", "Àmì dọ́là", "Lẹ́tà kan", "Àmì dọ́gba"], answer: 3, why: "Àmì = ń sọ fún app náà pé formula ni." },
      { objective: "O3", q: "Èwo ló ń wá ààrin D2 dé D20?", options: ["=AVERAGE(D2:D20)", "=AVG D2 D20", "AVERAGE=D2:D20", "=SUM(D2:D20)"], answer: 0, why: "AVERAGE pẹ̀lú range tí a kọ bí àkọ́kọ́:ìkẹyìn." },
      { objective: "O3", q: "O yí iye ọjà kan tí formula SUM ń lò padà. Kí ló ṣẹlẹ̀ sí àpapọ̀?", options: ["Kò sí nǹkan", "Ó yí padà fúnra rẹ̀", "Ó fi àṣìṣe hàn", "A pa á rẹ́"], answer: 1, why: "Formula ń tún ìṣirò ṣe nígbà tí dátà rẹ̀ bá yí padà." },
      { objective: "O3", q: "Cell kan fi #NAME? hàn. Kí ló ṣeé ṣe kí ó fà á?", options: ["A ti pín fáìlì náà", "Ọ̀wọ̀n náà wà ní bold", "Sípẹ́lì orúkọ function kò tọ̀nà", "A ti di spreadsheet náà mú"], answer: 2, why: "#NAME? sábà máa ń túmọ̀ sí pé app náà kò mọ orúkọ function náà." },
      { objective: "O3", q: "Kí ni fill handle?", options: ["Mẹ́nù kan", "Àpótí kékeré ní igun ìsàlẹ̀ lápá ọ̀tún cell tí a fi ń da nǹkan kọ", "Bọ́tìnnì Share", "Irú chart kan"], answer: 1, why: "Fífà á ń da formula kọ, ó sì ń yí orúkọ cell padà." },
      { objective: "O4", q: "Formula wo ló ń fi \"Missing\" hàn nígbà tí D2 bá ṣófo, àti \"OK\" nígbà tí kò bá ṣófo?", options: ["=IF(D2=\"\",\"Missing\",\"OK\")", "=SUM(D2)", "=IF(D2,OK,Missing)", "=AVERAGE(\"Missing\")"], answer: 0, why: "Ìdánwò D2=\"\" ń ṣàyẹ̀wò bóyá cell ṣófo." },
      { objective: "O4", q: "Kí ni <> túmọ̀ sí nínú formula?", options: ["Ó tóbi ju", "Ó dọ́gba", "Ó kéré ju", "Kò dọ́gba"], answer: 3, why: "<> túmọ̀ sí kò dọ́gba." },
      { objective: "O5", q: "Nínú Excel, ibo ni Sort àti Filter wà?", options: ["Táàbù File", "Táàbù Data", "Táàbù Help", "Táàbù Draw"], answer: 1, why: "Sort àti Filter wà lórí táàbù Data nínú Excel." },
      { objective: "O5", q: "Nínú Google Sheets, báwo lo ṣe máa fi ọfà filter kún ìlà àkọlé?", options: ["Data > Create a filter", "Insert > Chart", "Format > Number", "File > Share"], answer: 0, why: "Create a filter ń fi ọfà kún àkọlé kọ̀ọ̀kan." },
      { objective: "O5", q: "Kí ló dé tí o kò gbọ́dọ̀ tò ọ̀wọ̀n kan ṣoṣo nínú tábìlì lẹ́sẹẹsẹ láé?", options: ["Ó ń lọ́ra jù", "Ó ń pa spreadsheet rẹ́", "Àwọn ìlà máa dà rú", "Ó ń pín fáìlì náà"], answer: 2, why: "Títò ọ̀wọ̀n kan nìkan ń ya àwọn iye kúrò lára ìyókù ìlà wọn." },
      { objective: "O5", q: "Nínú Excel, báwo lo ṣe máa jẹ́ kí ìlà 1 hàn bí o ṣe ń yí lọ?", options: ["Insert > Chart", "Home > Bold", "Data > Filter", "View > Freeze Panes > Freeze Top Row"], answer: 3, why: "Freeze Top Row ń jẹ́ kí àkọlé wà lójú iboju." },
      { objective: "O6", q: "Chart wo ló dára jù fún fífi ọjà tí a tà lójoojúmọ́ wéra?", options: ["Column chart", "Kò sí chart", "Chart tí kò ní orúkọ kankan", "Àwòrán pie tí o yà fúnra rẹ"], answer: 0, why: "Column chart ń fi iye wéra lẹ́gbẹ̀ẹ́ ara wọn." },
      { objective: "O6", q: "Nínú Google Sheets, báwo lo ṣe máa bẹ̀rẹ̀ chart?", options: ["Data > Sort range", "Insert > Chart", "View > Freeze", "Format > Bold"], answer: 1, why: "Insert > Chart ń ṣí chart editor." },
      { objective: "O6", q: "Kí ni kò gbọ́dọ̀ wà LÁÉ nínú spreadsheet tí o pín?", options: ["Àpapọ̀ ọjà tí a tà", "Orúkọ ọjà", "Ọ̀rọ̀ aṣínà àti nọ́mbà Social Security", "Ọjọ́"], answer: 2, why: "Àwọn nọ́mbà àdáni lè di lílò ní ọ̀nà burúkú tí a bá pín fáìlì náà." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      4,
      6,
      8,
      11,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Tábìlì dátà tó mọ́",
        objective: "O1",
        notYet: "Ìlà tí kò tó 8, àkọlé tí kò sí, tàbí oríṣiríṣi dátà tí ó dàpọ̀ nínú ọ̀wọ̀n kan.",
        meets: "Àkọlé ní ìlà 1, ó kéré tán ìlà 8, irú dátà kan ní ọ̀wọ̀n kọ̀ọ̀kan.",
        exceeds: "Fáìlì àti táàbù sheet ní orúkọ tó yé."
      },
      {
        name: "Ó rọrùn láti kà",
        objective: "O2",
        notYet: "Àkọlé kò ní ìrísí kankan, owó kò ní ìrísí currency, tàbí ọ̀rọ̀ ti gé kúrò.",
        meets: "Àkọlé ní bold, owó hàn bí currency, àwọn ọ̀wọ̀n gba ohun tó wà nínú wọn.",
        exceeds: "Ìlà àkọlé tún ní àwọ̀, spreadsheet náà sì wà ní mímọ́."
      },
      {
        name: "Àpapọ̀ àti ààrin",
        objective: "O3",
        notYet: "A fi ọwọ́ tẹ àpapọ̀, tàbí formula kan fi àṣìṣe hàn.",
        meets: "Àpapọ̀ SUM àti AVERAGE tí ó fún ni ní èsì tó tọ̀nà.",
        exceeds: "Àpapọ̀ ìlà kọ̀ọ̀kan ń lo formula tí a fi fill handle dà kọ sísàlẹ̀."
      },
      {
        name: "Àmì IF",
        objective: "O4",
        notYet: "Kò sí ọ̀wọ̀n IF, tàbí àwọn àmì kò tọ̀nà.",
        meets: "Ọ̀wọ̀n IF kan sàmì sí gbogbo ìlà lọ́nà tó tọ̀nà, bí \"Goal met\" tàbí \"Below goal\".",
        exceeds: "Ó lè ṣàlàyé ìdánwò náà kí ó sì yí nọ́mbà àfojúsùn padà láti yí àwọn àmì padà."
      },
      {
        name: "A tò ó, a ṣẹ́ ẹ, a sì dì í mú",
        objective: "O5",
        notYet: "Àwọn ìlà ti dà rú, tàbí sort, filter tàbí freeze kò sí.",
        meets: "Dátà tí a tò láti èyí tó ga jù dé èyí tó kéré jù, filter lórí ìlà àkọlé, àti ìlà òkè tí a dì mú.",
        exceeds: "Ó lè lo filter láti fi àmì kan ṣoṣo hàn, lẹ́yìn náà kí ó mú un kúrò."
      },
      {
        name: "Chart àti pínpín láìléwu",
        objective: "O6",
        notYet: "Kò sí chart, tàbí a pín in pẹ̀lú àṣẹ ṣíṣàtúnṣe láìronú tàbí pẹ̀lú dátà àdáni.",
        meets: "Column chart tí ó ní àkọlé, àti fáìlì tí a pín fún ẹnìkan gẹ́gẹ́ bí Viewer, láìsí dátà àdáni.",
        exceeds: "Ó lè sọ ìdí tí ó fi yan ìpele àṣẹ yẹn."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn lo spreadsheet níbi iṣẹ́ tàbí nínú òwò wọn láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kọ ọgbọ́n spreadsheet sínú résumé wọn tàbí tí wọ́n rí iṣẹ́ tí ó ń lò ó",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Koach Learn mìíràn láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní Excel, Excel lórí wẹ́ẹ̀bù tàbí Google Sheets (ọ̀fẹ́ pẹ̀lú àkáǹtì Google)",
      "Dátà àpẹẹrẹ: ọjà tí a tà fún ọ̀sẹ̀ kan, wákàtí iṣẹ́ tàbí wákàtí olùyọ̀ǹda pẹ̀lú ó kéré tán ìlà 8",
      "Àdírẹ́sì ímeèlì ẹnìkan láti pín spreadsheet tí a parí fún",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àkókò kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Fi ìgbésẹ̀ kọ̀ọ̀kan hàn lẹ́ẹ̀kan lórí iboju ńlá nínú Excel àti Google Sheets, lẹ́yìn náà jẹ́ kí àwọn akẹ́kọ̀ọ́ tún un ṣe.",
      "Fún àwọn akẹ́kọ̀ọ́ ní dátà àpẹẹrẹ tí a ti pèsè sílẹ̀ kí ẹnikẹ́ni má bàa lo dátà oníbàárà gidi tàbí dátà àdáni.",
      "Ṣọ́ àwọn akẹ́kọ̀ọ́ tí wọ́n ń tò ọ̀wọ̀n kan nìkan; jẹ́ kí wọ́n ṣe Undo kí wọ́n sì tò gbogbo tábìlì.",
      "Rán àwọn akẹ́kọ̀ọ́ létí láti pín in gẹ́gẹ́ bí Viewer àyàfi tí ẹni náà bá nílò láti ṣàtúnṣe, kí wọ́n má sì fi ọ̀rọ̀ aṣínà tàbí nọ́mbà ìdánimọ̀ sínú spreadsheet tí a pín láé.",
      "Fi rubric ṣe àmì iṣẹ́ ìkẹyìn, kí o sì fún wọn ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
