"use strict";

// Koach Learn course (Yoruba translation of shared/data-analytics-excel-sql.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Practice data labels (North, South, East, Coffee, Bagel, Juice), menu names, formulas and SQL stay in English, exactly as in the English course.

const DATAPLUS = { name: "Ojú-òpó CompTIA fúnra rẹ̀ fún Data+ (DA0-002)", url: "https://www.comptia.org/en-us/certifications/data/" };
const SQLITE_ONLINE = { name: "SQLite Online (ibi tí a ti ń kọ SQL nínú browser)", url: "https://sqliteonline.com/" };
const DB_BROWSER = { name: "DB Browser for SQLite (irinṣẹ́ ọ̀fẹ́ fún kọ̀mpútà)", url: "https://sqlitebrowser.org/" };

module.exports = {
  id: "data-analytics-excel-sql-yo",
  lang: "yo",
  translationOf: "data-analytics-excel-sql",
  category: "Workforce Development",
  name: "Ìtúpalẹ̀ Dátà pẹ̀lú Spreadsheet àti SQL",
  skills: "Bíbéèrè ìbéèrè dátà, Ṣíṣe ìmọ́tótó dátà, Pivot table àti COUNTIFS/SUMIFS, Kíkọ ìbéèrè SQL, Ṣíṣe àkójọpọ̀ àti dída tábìlì pọ̀, Ṣíṣe ìròyìn àbájáde",
  outcome: "ṣiṣẹ́ bí olùtúpalẹ̀ dátà ní ìpele ìbẹ̀rẹ̀: yí ohun tí iṣẹ́ kan nílò padà sí ìbéèrè tó yé, ṣe ìmọ́tótó spreadsheet tó dàrú, ṣe àkópọ̀ rẹ̀ pẹ̀lú pivot table àti SUMIFS, dáhùn ìbéèrè pẹ̀lú SQL (SELECT, WHERE, ORDER BY, GROUP BY àti JOIN), kí o sì kọ àbájáde kúkúrú tó jẹ́ òtítọ́ tí o lè fi han agbanisíṣẹ́.",
  about: [
    "Àwọn olùtúpalẹ̀ dátà ń yí ọ̀pọ̀ ìlà nọ́mbà padà sí ìdáhùn tí àwọn ènìyàn lè fi ṣe ìpinnu: ṣọ́ọ̀bù wo ló ń tà jù, ètò wo ló ń ran ènìyàn lọ́wọ́ jù, ibo ni owó ń lọ. Ó fẹ́rẹ̀ẹ́ jẹ́ pé gbogbo agbanisíṣẹ́ ló nílò èyí, láti ṣọ́ọ̀bù àti ilé-ìwòsàn dé ọ́fíìsì ìlú àti àwọn àjọ aláìlérè.",
    "O máa lo irinṣẹ́ méjì tí àwọn olùtúpalẹ̀ ń lò lójoojúmọ́: spreadsheet (Google Sheets, tí ó jẹ́ ọ̀fẹ́, tàbí Excel) àti SQL, èdè tí a fi ń béèrè ìbéèrè lọ́wọ́ database. O máa ṣe ìdánrawò SQL lọ́fẹ̀ẹ́ nínú browser rẹ. Gbogbo dátà ìdánrawò jẹ́ àtinúdá, ó sì kéré, kí o lè ṣàyẹ̀wò gbogbo ìdáhùn pẹ̀lú ọwọ́.",
    "Tí o bá fẹ́ ìwé-ẹ̀rí, CompTIA Data+ jẹ́ ọ̀kan fún àwọn olùtúpalẹ̀ dátà ìpele ìbẹ̀rẹ̀. Ẹ̀kọ́ yìí ń ràn ọ́ lọ́wọ́ láti múra sílẹ̀, ó sì ń kọ́ ọ ní àwọn ọgbọ́n tí ó bò, ṣùgbọ́n kò fún ọ ní Data+ tàbí ìwé-ẹ̀rí kankan; wo ojú-òpó CompTIA fúnra rẹ̀ fún ìdánwò, owó àti ọ̀nà ìdánwò lọ́wọ́lọ́wọ́.",
    "Ó dára kí o kọ́kọ́ mọ spreadsheet ìpìlẹ̀ (\"Excel àti Spreadsheet fún Iṣẹ́\"). Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" àti ìbéèrè kúkúrú méjì, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe iṣẹ́ ìtúpalẹ̀ ojú-ewé kan fún portfolio rẹ: (1) ìbéèrè tó yé nípa dátà ìtajà ìdánrawò (tàbí dátà gbogbogbò kékeré tí o yàn); (2) dátà tí o ti ṣe ìmọ́tótó rẹ̀ nínú Google Sheets tàbí Excel, pẹ̀lú òpó Revenue àti pivot table tí ó dáhùn ìbéèrè náà; (3) ó kéré tán ìbéèrè SQL méjì tí o ṣe, ọ̀kan pẹ̀lú WHERE àti ORDER BY, ọ̀kan pẹ̀lú GROUP BY, pẹ̀lú àbájáde wọn; (4) àbájáde mẹ́ta ní gbólóhùn tó rọrùn pẹ̀lú nọ́mbà, ààlà kan ti dátà náà, àti ìgbésẹ̀ tó kàn kan tí o dámọ̀ràn; àti (5) ìlà résumé kan tí ó ṣàpèjúwe iṣẹ́ náà.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ń wá iṣẹ́, àwọn ọ̀dọ́, àwọn ológun tẹ́lẹ̀ àti àwọn tí ń yí iṣẹ́ padà, tí wọ́n ń wá iṣẹ́ dátà ìpele ìbẹ̀rẹ̀ (olùtúpalẹ̀ dátà, olùrànlọ́wọ́ ìròyìn, olùtúpalẹ̀ iṣẹ́ tàbí okòwò), tàbí tí wọ́n fẹ́ ọgbọ́n dátà nínú iṣẹ́ wọn lọ́wọ́lọ́wọ́. Ìpìlẹ̀ wọn yàtọ̀ síra; ọ̀pọ̀ ti lo spreadsheet ṣùgbọ́n wọn kò tíì lo SQL rí.",
    startingPoint: "Wọ́n lè tẹ dátà sínú spreadsheet, lo SUM àti AVERAGE, kí wọ́n sì tò ó. Wọn kò tíì ṣe ìmọ́tótó dátà tó dàrú, ṣe pivot table tàbí kọ ìbéèrè SQL rí. Díẹ̀ ló mọ bí àwọn olùtúpalẹ̀ ṣe ń gbé àbájáde kalẹ̀.",
    gap: "Àwọn iṣẹ́ dátà ìpele ìbẹ̀rẹ̀ ń béèrè ìtúpalẹ̀ spreadsheet àti SQL ìpìlẹ̀, àti ṣíṣàlàyé àbájáde ní kedere. Àwọn akẹ́kọ̀ọ́ nílò ìdánrawò ọwọ́-sí-iṣẹ́ lórí dátà tó dàrú bí ti gidi, pẹ̀lú irinṣẹ́ ọ̀fẹ́, àti iṣẹ́ kékeré kan tí wọ́n lè fi han agbanisíṣẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ iṣẹ́",
      "Ẹ̀rọ: kọ̀mpútà tí ó ní browser; ojú fóònù ti kéré jù fún ìdánrawò SQL",
      "Irinṣẹ́ ọ̀fẹ́ nìkan: Google Sheets (tàbí Excel tí wọ́n bá ní i) àti ibi ọ̀fẹ́ láti kọ SQL nínú browser",
      "Dátà ìdánrawò jẹ́ àtinúdá; má ṣe fi dátà gidi ti oníbàárà, aláìsàn tàbí agbanisíṣẹ́ sínú irinṣẹ́ orí ayélujára láéláé",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6; iṣẹ́ ìkẹyìn gba wákàtí kan tàbí méjì sí i"
    ],
    prerequisites: "Ọgbọ́n spreadsheet ìpìlẹ̀. \"Excel àti Spreadsheet fún Iṣẹ́\" kọ́ni nípa wọn."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí ọ̀gá kan bá sọ ohun tí iṣẹ́ nílò fún ọ", action: "kọ ìbéèrè dátà tó yé tí a lè fi nọ́mbà dáhùn, kí o sì to dátà tí a nílò láti dáhùn rẹ̀", standard: "pẹ̀lú ta ni tàbí kí ni, ìwọ̀n kan àti àkókò kan" },
    { id: "O2", condition: "Tí a bá fún ọ ní spreadsheet tó dàrú", action: "ṣe ìmọ́tótó dátà náà nípa yíyọ àwọn ìlà àtúnwí, gígé àyè tó pọ̀ jù, àti ṣíṣe orúkọ àti ìrísí kí wọ́n jọra", standard: "láìsí ìlà àtúnwí tàbí orúkọ tí kò bá ara mu tó kù" },
    { id: "O3", condition: "Tí o bá ní dátà tó mọ́ nínú Google Sheets tàbí Excel", action: "ṣe pivot table àti fọ́múlà SUMIFS tàbí COUNTIFS tí ó dáhùn ìbéèrè náà", standard: "pẹ̀lú àròpọ̀ tí ó bá àyẹ̀wò ọwọ́ mu" },
    { id: "O4", condition: "Pẹ̀lú ibi ọ̀fẹ́ láti kọ SQL àti tábìlì ìdánrawò", action: "kọ ìbéèrè SELECT pẹ̀lú WHERE àti ORDER BY tí ó mú àwọn ìlà tí a béèrè wá", standard: "tí ó mú àwọn ìlà tó tọ́ gẹ́lẹ́ wá ní ètò tó tọ́" },
    { id: "O5", condition: "Pẹ̀lú tábìlì ìdánrawò méjì", action: "kọ ìbéèrè tí ó lo GROUP BY pẹ̀lú SUM, COUNT tàbí AVG, àti JOIN láàárín àwọn tábìlì náà", standard: "pẹ̀lú àbájáde tí ó bá àyẹ̀wò ọwọ́ mu" },
    { id: "O6", condition: "Tí o bá ní àbájáde ìtúpalẹ̀ rẹ", action: "kọ àbájáde mẹ́ta pẹ̀lú nọ́mbà, ààlà kan ti dátà náà àti ìgbésẹ̀ tó kàn kan", standard: "ní gbólóhùn tó rọrùn tí ọ̀gá lè fi ṣe ìpinnu" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìtúpalẹ̀ pẹ̀lú spreadsheet",
      lessons: [
        {
          title: "Iṣẹ́ olùtúpalẹ̀: láti ohun tí a nílò sí ìbéèrè tó yé",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọ ìbéèrè dátà tó yé tí a lè fi nọ́mbà dáhùn láti inú ohun tí ọ̀gá béèrè.",
          text: [
            "Àwọn olùtúpalẹ̀ ń tẹ̀lé ọ̀nà kan tó rọrùn: béèrè ìbéèrè tó yé, gba dátà, ṣe ìmọ́tótó rẹ̀, túpalẹ̀ rẹ̀, kí o sì sọ ohun tí ó túmọ̀ sí. Ìbéèrè ni ọ̀pọ̀ jù lọ iṣẹ́ ti bẹ̀rẹ̀. Ìbéèrè tí kò yé máa ń mú ìdáhùn tí kò yé wá.",
            "Ọ̀gá kan sọ pé, \"Báwo ni ìtajà ṣe ń lọ?\" Ohun tí ó nílò nìyẹn, kì í ṣe ìbéèrè. Ìbéèrè tó yé dárúkọ ta ni tàbí kí ni, ìwọ̀n kan àti àkókò kan: \"Èwo nínú ṣọ́ọ̀bù wa mẹ́ta ló ní owó tí ń wọlé (revenue) jù láti 1 sí 4 October?\" Báyìí o mọ dátà tí o nílò: ọjọ́, ṣọ́ọ̀bù, iye (quantity) àti iye owó (price).",
            "Ìbéèrè tó dára ṣeé wọ̀n (o lè fi nọ́mbà dáhùn rẹ̀), ó ṣe pàtó, ó sì wúlò (ìdáhùn rẹ̀ ń ran ẹnìkan lọ́wọ́ láti pinnu nǹkan). Kọ dátà tí o nílò sílẹ̀ kí o tó ṣí fáìlì kankan.",
            "Àwọn iṣẹ́ tí ó ń lo ọgbọ́n wọ̀nyí ni olùtúpalẹ̀ dátà, olùtúpalẹ̀ ìròyìn, olùtúpalẹ̀ iṣẹ́ àti olùtúpalẹ̀ okòwò. Tí o bá fẹ́ ìwé-ẹ̀rí, CompTIA Data+ (ìdánwò DA0-002 nígbà tí a ṣàyẹ̀wò ní October 2026) bo èrò dátà, mímúra dátà sílẹ̀, ìtúpalẹ̀, fífi dátà hàn ní àwòrán àti ìròyìn, àti ìṣàkóso dátà. Wo ojú-òpó CompTIA fúnra rẹ̀ fún ìsọfúnni lọ́wọ́lọ́wọ́."
          ],
          steps: ["Kọ ohun tí ọ̀gá nílò sílẹ̀ ní ọ̀rọ̀ tirẹ̀.", "Yí i padà sí ìbéèrè pẹ̀lú ta ni tàbí kí ni, ìwọ̀n kan àti àkókò kan.", "Ṣàyẹ̀wò: ṣé nọ́mbà lè dáhùn rẹ̀?", "To àwọn òpó dátà tí o nílò."],
          words: [["Olùtúpalẹ̀ dátà (data analyst)", "ẹni tí ó ń yí dátà padà sí ìdáhùn tí àwọn ènìyàn lè lò."], ["Ṣeé wọ̀n (measurable)", "a lè fi nọ́mbà tàbí iye dáhùn rẹ̀."], ["Dataset", "àkójọ dátà, tí ó sábà jẹ́ tábìlì pẹ̀lú ìlà àti òpó."], ["Revenue", "owó tí ń wọlé láti inú ìtajà: iye (quantity) lọ́nà iye owó (price)."]],
          slides: [
            { title: "Ọ̀nà olùtúpalẹ̀", bullets: ["Béèrè, gba dátà, ṣe ìmọ́tótó, túpalẹ̀, sọ ọ́ fún wọn", "Ìbéèrè tó yé ni ó ti bẹ̀rẹ̀"] },
            { title: "Ohun tí a nílò àti ìbéèrè", bullets: ["Ohun tí a nílò: \"Báwo ni ìtajà ṣe ń lọ?\"", "Ìbéèrè: \"Ṣọ́ọ̀bù wo ló ní revenue jù, 1 sí 4 October?\""] },
            { title: "Ìbéèrè tó yé ní", bullets: ["Ta ni tàbí kí ni", "Ìwọ̀n kan", "Àkókò kan"] },
            { title: "Ìwé-ẹ̀rí láti múra sílẹ̀ fún", bullets: ["CompTIA Data+ (DA0-002, a ṣàyẹ̀wò ní Oct 2026)", "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; CompTIA ló ń fúnni", "Wo comptia.org fún ìsọfúnni lọ́wọ́lọ́wọ́"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Yí ọ̀kọ̀ọ̀kan nínú ohun tí a nílò wọ̀nyí padà sí ìbéèrè tó yé, kí o sì to dátà tí a nílò: (a) \"Ṣé àwọn ènìyàn ń wá sí ibi ìpín oúnjẹ (food pantry) jù láìpẹ́ yìí?\" (b) \"Ọjà wo ló yẹ kí a pàṣẹ púpọ̀ sí i?\" Kọ ọ̀kọ̀ọ̀kan pẹ̀lú ta ni tàbí kí ni, ìwọ̀n kan àti àkókò kan.",
          youCanNow: "yí ìbéèrè tí kò yé padà sí ìbéèrè tó yé tí a lè fi nọ́mbà dáhùn, kí o sì to dátà tí ó nílò.",
          quickCheck: [
            { objective: "O1", q: "Èwo ni ìbéèrè dátà tó yé jù?", options: ["\"Báwo ni okòwò ṣe ń lọ?\"", "\"Sọ fún mi nípa ìtajà.\"", "\"Ṣé nǹkan dára?\"", "\"Ọjà wo ló tà jù ní iye nínú September ní ṣọ́ọ̀bù North?\""], answer: 3, why: "Ó dárúkọ kí ni (ọjà), ìwọ̀n (iye tí a tà), ibi àti àkókò." },
            { objective: "O1", q: "Ìbéèrè rẹ ni \"Ṣọ́ọ̀bù wo ló ní revenue jù ní ọ̀sẹ̀ tó kọjá?\" Dátà wo ni o nílò?", options: ["Ṣọ́ọ̀bù, ọjọ́, iye àti iye owó fún ìtajà kọ̀ọ̀kan", "Orúkọ àwọn ṣọ́ọ̀bù nìkan", "Àdírẹ́sì ilé àwọn òṣìṣẹ́", "Ojú ọjọ́"], answer: 0, why: "Revenue nílò iye àti iye owó; ṣọ́ọ̀bù àti ọjọ́ ń pín in ní ibi àti àkókò." }
          ]
        },
        {
          title: "Ṣíṣe ìmọ́tótó dátà tó dàrú nínú spreadsheet",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣe ìmọ́tótó tábìlì tó dàrú nípa yíyọ àtúnwí, gígé àyè àti títún orúkọ ṣe.",
          text: [
            "Dátà gidi máa ń dàrú. Wọ́n lè tẹ ṣọ́ọ̀bù kan náà ní \"North\", \"north\" àti \" North\" (pẹ̀lú àyè). Wọ́n lè tẹ ìtajà kan lẹ́ẹ̀mejì. Ọjọ́ lè wà ní ìrísí ọ̀tọ̀ọ̀tọ̀. Tí o kò bá ṣe ìmọ́tótó rẹ̀, àròpọ̀ rẹ máa ṣe àṣìṣe, nítorí spreadsheet ka \"North\" àti \"north \" sí ṣọ́ọ̀bù méjì ọ̀tọ̀ọ̀tọ̀.",
            "Nínú Google Sheets, yan dátà rẹ kí o sì lo Data > Data cleanup > Remove duplicates, àti Data > Data cleanup > Trim whitespace. Nínú Excel, lo Data > Remove Duplicates, àti iṣẹ́ TRIM láti yọ àyè tó pọ̀ jù. Lo Find and replace láti tún orúkọ ṣe, fún àpẹẹrẹ yí \"north\" padà sí \"North\".",
            "Jẹ́ kí òpó kọ̀ọ̀kan jẹ́ irú kan: ọjọ́ bí ọjọ́, nọ́mbà bí nọ́mbà (láìtẹ \"$\" sínú rẹ̀), ọ̀rọ̀ pẹ̀lú àkọtọ́ kan náà nígbà gbogbo. Lẹ́yìn náà, fi òpó tí o nílò kún un, bí Revenue = Qty lọ́nà Price (fún àpẹẹrẹ =D2*E2).",
            "Máa pa ẹ̀dà dátà àkọ́kọ́ (raw data) mọ́ sórí tab tirẹ̀ nígbà gbogbo, kí o sì ṣe ìmọ́tótó ẹ̀dà kan. Kọ ìyípadà kọ̀ọ̀kan tí o ṣe sílẹ̀, kí ẹlòmíì lè gbẹ́kẹ̀lé iṣẹ́ rẹ kí ó sì tún un ṣe."
          ],
          steps: ["Da dátà àkọ́kọ́ kọ sí tab tuntun tí a pè ní Clean.", "Yọ àwọn ìlà àtúnwí.", "Gé àwọn àyè tó pọ̀ jù.", "Tún orúkọ ṣe pẹ̀lú Find and replace kí orúkọ kọ̀ọ̀kan ní àkọtọ́ kan ṣoṣo.", "Jẹ́ kí òpó kọ̀ọ̀kan jẹ́ irú kan: ọjọ́, nọ́mbà tàbí ọ̀rọ̀.", "Fi àwọn òpó ìṣirò kún un, bí Revenue = Qty * Price.", "Kọ àkọsílẹ̀ kúkúrú ti àwọn ìyípadà tí o ṣe."],
          words: [["Ìmọ́tótó dátà (data cleaning)", "títún àṣìṣe, àtúnwí àti àwọn àkọsílẹ̀ tí kò bá ara mu ṣe, kí àbájáde lè tọ̀nà."], ["Àtúnwí (duplicate)", "ìlà tí ó farahàn ju ẹ̀ẹ̀kan lọ ní àṣìṣe."], ["Whitespace", "àyè tó pọ̀ jù ṣáájú tàbí lẹ́yìn ọ̀rọ̀, tí o kò lè rí bọ̀rọ̀."], ["Dátà àkọ́kọ́ (raw data)", "dátà gẹ́gẹ́ bí o ṣe gbà á, kí o tó yí ohunkóhun padà."]],
          slides: [
            { title: "Kí ló dé tí a fi ń ṣe ìmọ́tótó?", bullets: ["\"North\", \"north\" àti \" North\" di ọ̀tọ̀ọ̀tọ̀", "Ìlà àtúnwí ń ka ìtajà lẹ́ẹ̀mejì", "Dátà tó dàrú ń fúnni ní àròpọ̀ tí kò tọ́"] },
            { title: "Irinṣẹ́ ìmọ́tótó", bullets: ["Sheets: Data > Data cleanup > Remove duplicates", "Sheets: Data > Data cleanup > Trim whitespace", "Excel: Remove Duplicates àti TRIM", "Find and replace láti tún orúkọ ṣe"] },
            { title: "Irú kan fún òpó kọ̀ọ̀kan", bullets: ["Ọjọ́ bí ọjọ́, nọ́mbà bí nọ́mbà", "Fi Revenue = Qty * Price kún un"] },
            { title: "Ìwà rere", bullets: ["Pa dátà àkọ́kọ́ mọ́ sórí tab tirẹ̀", "Kọ gbogbo ìyípadà sílẹ̀"] }
          ],
          tryIt: "Nínú Google Sheets, tẹ tábìlì ìdánrawò yìí pẹ̀lú àwọn àkọlé Date, Store, Item, Qty, Price: 2026-10-01, North, Coffee, 3, 2.50 / 2026-10-01, South, Bagel, 5, 1.75 / 2026-10-02, north , Bagel, 2, 1.75 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-03, South, Coffee, 4, 2.50 / 2026-10-03, North, Juice, 1, 3.00 / 2026-10-04, East, Bagel, 8, 1.75 / 2026-10-04, South, Juice, 2, 3.00. Da á kọ sí tab Clean, yọ ìlà East tí ó tún ara rẹ̀ wí, yí \"north \" padà sí \"North\", kí o sì fi òpó Revenue kún un. Ó yẹ kí o ní ìlà 8.",
          youCanNow: "ṣe ìmọ́tótó tábìlì tó dàrú kí gbogbo àròpọ̀ tí o bá ṣe lé e lórí lè tọ̀nà.",
          quickCheck: [
            { objective: "O2", q: "Àròpọ̀ fún \"North\" kéré jù. Àwọn ìlà kan kọ \"north \" pẹ̀lú àyè. Kí ni o máa ṣe?", options: ["Pa àwọn ìlà yẹn rẹ́", "Gé àwọn àyè náà kí o sì jẹ́ kí orúkọ náà jẹ́ \"North\" níbi gbogbo", "Má ka á sí", "Mú kí lẹ́tà tóbi sí i"], answer: 1, why: "Gígé àyè àti títún orúkọ ṣe ń jẹ́ kí gbogbo ìlà North di kíkà pọ̀." },
            { objective: "O2", q: "Kí o tó ṣe ìmọ́tótó, kí ló yẹ kí o ṣe pẹ̀lú dátà àkọ́kọ́?", options: ["Pa á rẹ́", "Fi í ránṣẹ́ sí gbogbo ènìyàn lórí email", "Pa ẹ̀dà rẹ̀ mọ́ sórí tab tirẹ̀ kí o sì ṣe ìmọ́tótó ẹ̀dà kan", "Tẹ̀ ẹ́ jáde"], answer: 2, why: "Pípa dátà àkọ́kọ́ mọ́ jẹ́ kí o lè ṣàyẹ̀wò tàbí tún iṣẹ́ rẹ ṣe." }
          ]
        },
        {
          title: "Ṣíṣe àkópọ̀ pẹ̀lú pivot table, SUMIFS àti COUNTIFS",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ṣe pivot table àti fọ́múlà SUMIFS tí ó dáhùn ìbéèrè rẹ.",
          text: [
            "Pivot table ń ṣe àkópọ̀ tábìlì ńlá ní ìṣẹ́jú-àáyá díẹ̀: fún àpẹẹrẹ, àròpọ̀ revenue fún ṣọ́ọ̀bù kọ̀ọ̀kan. Nínú Google Sheets, yan dátà rẹ tó mọ́ kí o sì yan Insert > Pivot table. Nínú Excel, yan Insert > PivotTable. Fi Store sí abẹ́ Rows àti Revenue sí abẹ́ Values, pẹ̀lú àkópọ̀ SUM.",
            "Pẹ̀lú dátà ìdánrawò tó mọ́, pivot náà yẹ kí ó fi East 29.00, South 24.75 àti North 14.00 hàn. Nítorí náà East ló ní revenue jù láti 1 sí 4 October.",
            "Fọ́múlà lè dáhùn ìbéèrè kan lẹ́ẹ̀kan. SUMIFS ń ṣe àròpọ̀ àwọn nọ́mbà tí ó bá òfin kan mu: =SUMIFS(F:F, B:B, \"South\") ń ṣe àròpọ̀ òpó Revenue (F) níbi tí òpó Store (B) ti kọ South, ó sì fúnni ní 24.75. COUNTIFS ń ka àwọn ìlà tí ó bá òfin mu: =COUNTIFS(C:C, \"Coffee\") ń ka ìtajà Coffee, ó sì fúnni ní 3. AVERAGEIFS ń ṣiṣẹ́ bákan náà fún ìwọ̀n àárín (average).",
            "Máa ṣàyẹ̀wò nọ́mbà kan pẹ̀lú ọwọ́ nígbà gbogbo. Tí pivot àti àyẹ̀wò ọwọ́ rẹ kò bá bá ara mu, ó ṣeé ṣe kí dátà náà ṣì nílò ìmọ́tótó."
          ],
          steps: ["Yan dátà tó mọ́, pẹ̀lú àwọn àkọlé.", "Fi pivot table sórí sheet tuntun.", "Fi ẹ̀ka (Store) sí Rows.", "Fi ìwọ̀n (Revenue) sí Values, pẹ̀lú àkópọ̀ SUM.", "Tò ó láti tó tóbi jù sí tó kéré jù.", "Ṣàyẹ̀wò àròpọ̀ kan pẹ̀lú ọwọ́ tàbí pẹ̀lú SUMIFS."],
          words: [["Pivot table", "irinṣẹ́ tí ó ń kó tábìlì jọ ní ẹgbẹ́-ẹgbẹ́ tí ó sì ń ṣe àkópọ̀ rẹ̀, fún àpẹẹrẹ àròpọ̀ fún ṣọ́ọ̀bù kọ̀ọ̀kan."], ["SUMIFS", "fọ́múlà tí ó ń ṣe àròpọ̀ àwọn nọ́mbà tí ó bá òfin kan tàbí jù bẹ́ẹ̀ lọ mu."], ["COUNTIFS", "fọ́múlà tí ó ń ka àwọn ìlà tí ó bá òfin kan tàbí jù bẹ́ẹ̀ lọ mu."], ["Ìwọ̀n (measure)", "nọ́mbà tí o ń ṣe àròpọ̀ rẹ̀ tàbí tí o ń wá ìwọ̀n àárín rẹ̀, bí revenue."]],
          slides: [
            { title: "Pivot table", bullets: ["Sheets: Insert > Pivot table", "Excel: Insert > PivotTable", "Rows: Store; Values: SUM ti Revenue"] },
            { title: "Ìdáhùn ìdánrawò", bullets: ["East 29.00, South 24.75, North 14.00", "East ló ní revenue jù, 1 sí 4 October"] },
            { title: "Fọ́múlà pẹ̀lú òfin", bullets: ["=SUMIFS(F:F, B:B, \"South\") fúnni ní 24.75", "=COUNTIFS(C:C, \"Coffee\") fúnni ní 3", "AVERAGEIFS fún ìwọ̀n àárín"] },
            { title: "Ṣàyẹ̀wò pẹ̀lú ọwọ́", bullets: ["Ṣe àròpọ̀ ẹgbẹ́ kan fúnra rẹ", "Kò bá ara mu? Tún dátà náà ṣe ìmọ́tótó"] }
          ],
          tryIt: "Pẹ̀lú dátà ìdánrawò rẹ tó mọ́, ṣe pivot table ti revenue fún ṣọ́ọ̀bù kọ̀ọ̀kan kí o sì tò ó. Lẹ́yìn náà kọ SUMIFS fún East àti COUNTIFS fún Bagel. Ṣàyẹ̀wò: East yẹ kí ó jẹ́ 29.00, Bagel sì yẹ kí ó ka ìlà 3. Ṣe pivot kejì ti Qty fún Item kọ̀ọ̀kan.",
          youCanNow: "ṣe àkópọ̀ tábìlì pẹ̀lú pivot table kí o sì ṣàyẹ̀wò rẹ̀ pẹ̀lú SUMIFS àti COUNTIFS.",
          quickCheck: [
            { objective: "O3", q: "Nínú pivot table ti revenue fún ṣọ́ọ̀bù kọ̀ọ̀kan, ibo ni Store ń lọ?", options: ["Rows", "Values", "Filters nìkan", "A kò lò ó"], answer: 0, why: "Ẹ̀ka tí o fi ń kó wọn jọ ń lọ sí Rows; nọ́mbà tí o ń ṣe àròpọ̀ rẹ̀ ń lọ sí Values." },
            { objective: "O3", q: "Fọ́múlà wo ló ń ṣe àròpọ̀ Revenue (òpó F) fún ṣọ́ọ̀bù North (òpó B) nìkan?", options: ["=SUM(F:F)", "=COUNTIFS(B:B, \"North\")", "=AVERAGE(B:B)", "=SUMIFS(F:F, B:B, \"North\")"], answer: 3, why: "SUMIFS ń ṣe àròpọ̀ ibi àròpọ̀ (F) níbi tí ibi òfin (B) ti bá North mu." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìtúpalẹ̀ pẹ̀lú spreadsheet",
        questions: [
          { objective: "O1", q: "Èwo ni ohun tí a nílò, tí kò tíì di ìbéèrè tó yé?", options: ["\"Báwo ni a ṣe ń ṣe sí?\"", "\"Ṣọ́ọ̀bù wo ló ní revenue tó ga jù ní October?\"", "\"Ìtajà Coffee mélòó ló wà ní 2 October?\"", "\"Kí ni ìwọ̀n àárín ìwọ̀n ọjà tí a pàṣẹ ní ọ̀sẹ̀ tó kọjá?\""], answer: 0, why: "Kò ní ìwọ̀n tàbí àkókò, nítorí náà nọ́mbà kò lè dáhùn rẹ̀ síbẹ̀." },
          { objective: "O2", q: "Wọ́n tẹ ìtajà kan lẹ́ẹ̀mejì. Kí ló máa ṣẹlẹ̀ tí o kò bá yọ àtúnwí náà?", options: ["Kò sí ohun tí ó máa yí padà", "Àròpọ̀ máa ka ìtajà náà lẹ́ẹ̀mejì", "Spreadsheet máa tún un ṣe fúnra rẹ̀", "Ìtajà náà máa pòórá"], answer: 1, why: "Àtúnwí ń kà lẹ́ẹ̀mejì, nítorí náà àròpọ̀ máa ga jù." },
          { objective: "O2", q: "Àkójọ àṣàyàn (menu) wo nínú Google Sheets ló ń yọ àyè tó pọ̀ jù?", options: ["Insert > Chart", "Format > Theme", "Data > Data cleanup > Trim whitespace", "File > Print"], answer: 2, why: "Trim whitespace ń yọ àyè ṣáájú àti lẹ́yìn ọ̀rọ̀." },
          { objective: "O3", q: "Kí ni =COUNTIFS(C:C, \"Juice\") máa fúnni fún dátà ìdánrawò tó mọ́?", options: ["1", "3", "8", "2"], answer: 3, why: "Juice farahàn ní ìlà méjì (North ní 3 October àti South ní 4 October)." },
          { objective: "O3", q: "Àròpọ̀ pivot rẹ fún South kò bá àyẹ̀wò ọwọ́ rẹ mu. Kí ni ìdí tó ṣeé ṣe jù?", options: ["Dátà náà ṣì ní àtúnwí tàbí orúkọ tí kò bá ara mu", "Pivot table kò lè ṣe àròpọ̀", "O nílò ojú-iboju tó tóbi sí i", "Àyẹ̀wò ọwọ́ máa ń ṣe àṣìṣe nígbà gbogbo"], answer: 0, why: "Àìbáramu sábà máa ń fi hàn pé dátà ṣì nílò ìmọ́tótó." }
        ]
      }
    },
    {
      name: "Orí 2: SQL àti pínpín àbájáde",
      lessons: [
        {
          title: "Ìbéèrè SQL àkọ́kọ́ rẹ: SELECT, WHERE àti ORDER BY",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ ìbéèrè SELECT pẹ̀lú WHERE àti ORDER BY nínú ibi ọ̀fẹ́ láti kọ SQL.",
          text: [
            "Àwọn àjọ ńlá ń pa dátà mọ́ sínú database, kì í ṣe spreadsheet. SQL (tí wọ́n sábà máa ń pè ní \"sequel\") ni èdè tí a fi ń béèrè ìbéèrè lọ́wọ́ database. Ìbéèrè kan ni a ń pè ní query. SQL jọ Gẹ̀ẹ́sì lásán, ó sì fẹ́rẹ̀ẹ́ jẹ́ pé gbogbo iṣẹ́ dátà ló ń lò ó.",
            "O lè ṣe ìdánrawò lọ́fẹ̀ẹ́ nínú browser rẹ ní SQLite Online (sqliteonline.com): tẹ SQL sínú ibi ìkọ̀wé náà kí o sì tẹ Run. Ó lè fi àwọn nǹkan àfikún tí a ń sanwó fún hàn ọ́; o kò nílò wọn. DB Browser for SQLite jẹ́ àṣàyàn ọ̀fẹ́ fún kọ̀mpútà, tí kóòdù rẹ̀ wà ní gbangba. Lo dátà ìdánrawò nìkan nínú irinṣẹ́ orí ayélujára, má ṣe lo dátà oníbàárà gidi láéláé.",
            "Ṣe tábìlì ìdánrawò náà nípa ṣíṣe èyí: CREATE TABLE sales (id INTEGER, sale_date TEXT, store TEXT, item TEXT, qty INTEGER, price REAL); lẹ́yìn náà INSERT INTO sales VALUES (1,'2026-10-01','North','Coffee',3,2.50),(2,'2026-10-01','South','Bagel',5,1.75),(3,'2026-10-02','North','Bagel',2,1.75),(4,'2026-10-02','East','Coffee',6,2.50),(5,'2026-10-03','South','Coffee',4,2.50),(6,'2026-10-03','North','Juice',1,3.00),(7,'2026-10-04','East','Bagel',8,1.75),(8,'2026-10-04','South','Juice',2,3.00);",
            "Báyìí, béèrè. SELECT * FROM sales; fi gbogbo ìlà hàn. SELECT item, qty FROM sales WHERE store = 'North'; fi àwọn ọjà North nìkan hàn. SELECT * FROM sales WHERE qty >= 4 ORDER BY qty DESC; fi ìtajà mẹ́rin tó tóbi jù hàn, láti tó tóbi jù (8, 6, 5, 4). Ọ̀rọ̀ ń lọ sínú àmì ìfàyọ̀ kan ṣoṣo (' '); nọ́mbà kò ní."
          ],
          steps: ["Ṣí ibi ọ̀fẹ́ láti kọ SQL nínú browser rẹ.", "Ṣe ìlà CREATE TABLE, lẹ́yìn náà ìlà INSERT.", "Ṣe SELECT * FROM sales; láti rí gbogbo ìlà 8.", "Fi WHERE kún un láti mú àwọn ìlà tí o fẹ́ nìkan.", "Fi ORDER BY kún un láti tò wọ́n; fi DESC kún un fún tó tóbi jù lákọ̀ọ́kọ́.", "Ṣàyẹ̀wò àbájáde náà nípa wíwo àwọn ìlà fúnra rẹ."],
          words: [["Database", "ibi ìpamọ́ dátà tó wà létòlétò, nínú tábìlì."], ["SQL", "Structured Query Language: èdè tí a fi ń béèrè ìbéèrè lọ́wọ́ database."], ["Query", "ìbéèrè kan tí a kọ ní SQL."], ["SELECT / FROM", "SELECT dárúkọ àwọn òpó tí o fẹ́; FROM dárúkọ tábìlì."], ["WHERE", "ń mú àwọn ìlà tí ó bá òfin kan mu nìkan."], ["ORDER BY", "ń tò àbájáde; DESC túmọ̀ sí tó tóbi jù lákọ̀ọ́kọ́."]],
          slides: [
            { title: "SQL ní ọ̀rọ̀ tó rọrùn", bullets: ["Èdè tí a fi ń béèrè ìbéèrè lọ́wọ́ database", "Ìbéèrè kan = query kan", "Ó fẹ́rẹ̀ẹ́ jẹ́ pé gbogbo iṣẹ́ dátà ló ń lò ó"] },
            { title: "Ṣe ìdánrawò lọ́fẹ̀ẹ́", bullets: ["SQLite Online nínú browser rẹ: tẹ ọ̀rọ̀, lẹ́yìn náà Run", "DB Browser for SQLite lórí kọ̀mpútà rẹ", "Dátà ìdánrawò nìkan"] },
            { title: "Ìbéèrè mẹ́ta", bullets: ["SELECT * FROM sales;", "SELECT item, qty FROM sales WHERE store = 'North';", "... WHERE qty >= 4 ORDER BY qty DESC;"] },
            { title: "Òfin láti rántí", bullets: ["Ọ̀rọ̀ nínú àmì ìfàyọ̀ kan ṣoṣo: 'North'", "Nọ́mbà láìsí àmì ìfàyọ̀", "Fi ; parí ìbéèrè kọ̀ọ̀kan"] }
          ],
          sources: [SQLITE_ONLINE, DB_BROWSER],
          tryIt: "Ṣe tábìlì sales kí o sì ṣe ìbéèrè mẹ́ta náà. Lẹ́yìn náà kọ tìrẹ: gbogbo ìtajà Coffee, tí a tò ní qty láti tó tóbi jù sí tó kéré jù. Ó yẹ kí o rí ìlà 3: qty 6, 4 àti 3. Pa ìbéèrè kọ̀ọ̀kan àti àbájáde rẹ̀ mọ́ fún iṣẹ́ ìkẹyìn rẹ.",
          youCanNow: "ṣe tábìlì ìdánrawò kí o sì kọ ìbéèrè SQL tí ó ń ṣà àti tí ó ń tò àwọn ìlà.",
          quickCheck: [
            { objective: "O4", q: "Ìbéèrè wo ló fi ìtajà ṣọ́ọ̀bù South nìkan hàn?", options: ["SELECT * FROM sales ORDER BY store;", "SELECT * FROM sales WHERE store = 'South';", "SELECT South FROM sales;", "SELECT * WHERE sales = South;"], answer: 1, why: "WHERE store = 'South' ń mú àwọn ìlà ṣọ́ọ̀bù yẹn nìkan." },
            { objective: "O4", q: "Kí ni DESC ń ṣe nínú ORDER BY qty DESC?", options: ["Ó ń pa òpó náà rẹ́", "Ó ń ṣàpèjúwe tábìlì náà", "Ó ń tò láti tó tóbi jù sí tó kéré jù", "Ó ń mú ìlà kan ṣoṣo"], answer: 2, why: "DESC túmọ̀ sí láti òkè sí ìsàlẹ̀: tó tóbi jù lákọ̀ọ́kọ́." }
          ]
        },
        {
          title: "Àròpọ̀ pẹ̀lú GROUP BY, àti dída tábìlì méjì pọ̀",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kọ ìbéèrè GROUP BY pẹ̀lú SUM àti JOIN láàárín tábìlì méjì.",
          text: [
            "GROUP BY ń ṣe nínú SQL ohun tí pivot table ń ṣe nínú spreadsheet. SELECT store, SUM(qty * price) AS revenue FROM sales GROUP BY store ORDER BY revenue DESC; fúnni ní East 29.0, South 24.75, North 14.0, bákan náà pẹ̀lú pivot rẹ. AS ń fún òpó tuntun ní orúkọ.",
            "Àwọn iṣẹ́ àkópọ̀ míì: COUNT(*) ń ka àwọn ìlà, AVG(qty) ń fúnni ní ìwọ̀n àárín, MIN àti MAX ń fúnni ní tó kéré jù àti tó tóbi jù. SELECT item, SUM(qty) FROM sales GROUP BY item; fúnni ní Bagel 15, Coffee 13, Juice 3.",
            "Dátà sábà máa ń pín sí tábìlì púpọ̀. Tábìlì kejì lè ní ìlú ṣọ́ọ̀bù kọ̀ọ̀kan: CREATE TABLE stores (store TEXT, city TEXT); INSERT INTO stores VALUES ('North','Fresno'),('South','Bakersfield'),('East','Modesto'); JOIN ń so àwọn ìlà pọ̀ níbi tí òpó kan ti jọra nínú tábìlì méjèèjì.",
            "SELECT sales.item, sales.qty, stores.city FROM sales JOIN stores ON sales.store = stores.store; fi ìtajà kọ̀ọ̀kan hàn pẹ̀lú ìlú rẹ̀. Tí àkọtọ́ orúkọ ṣọ́ọ̀bù kan bá yàtọ̀ nínú tábìlì méjèèjì, JOIN kò ní rí i, ìdí míì nìyí tí ó fi yẹ kí o kọ́kọ́ ṣe ìmọ́tótó dátà."
          ],
          steps: ["Yan òpó tí o máa fi kó wọn jọ (store, item, date).", "Yan àkópọ̀: SUM, COUNT, AVG, MIN tàbí MAX.", "Kọ SELECT column, SUM(...) AS name FROM table GROUP BY column;", "Fi ORDER BY kún un láti to àwọn ẹgbẹ́ ní ipò.", "Fún JOIN, dárúkọ tábìlì méjèèjì àti òpó tí ó so wọ́n pọ̀ lẹ́yìn ON.", "Fi àbájáde wé pivot table rẹ."],
          words: [["GROUP BY", "ń kó àwọn ìlà tí ó ní iye kan náà jọ, kí o lè ṣe àròpọ̀ tàbí ka ẹgbẹ́ kọ̀ọ̀kan."], ["Iṣẹ́ àkópọ̀ (aggregate function)", "àkópọ̀ bí SUM, COUNT, AVG, MIN tàbí MAX."], ["AS", "ń fún òpó àbájáde ní orúkọ."], ["JOIN", "ń da àwọn ìlà láti tábìlì méjì pọ̀ tí wọ́n ní òpó kan tí ó bá ara mu."], ["Key", "òpó tí a fi ń so àwọn ìlà pọ̀ láàárín tábìlì."]],
          slides: [
            { title: "GROUP BY = pivot nínú SQL", bullets: ["SELECT store, SUM(qty * price) AS revenue", "FROM sales GROUP BY store ORDER BY revenue DESC;", "East 29.0, South 24.75, North 14.0"] },
            { title: "Àwọn iṣẹ́ àkópọ̀", bullets: ["COUNT(*), SUM, AVG, MIN, MAX", "Iye fún ọjà kọ̀ọ̀kan: Bagel 15, Coffee 13, Juice 3"] },
            { title: "Dída tábìlì méjì pọ̀", bullets: ["Tábìlì stores: store àti city", "JOIN stores ON sales.store = stores.store", "Ìtajà kọ̀ọ̀kan ti ń fi ìlú rẹ̀ hàn báyìí"] },
            { title: "Key tó mọ́ ṣe pàtàkì", bullets: ["Àkọtọ́ tó yàtọ̀: JOIN kò ní rí àwọn ìlà kan", "Kọ́kọ́ ṣe ìmọ́tótó, lẹ́yìn náà da wọ́n pọ̀"] }
          ],
          sources: [SQLITE_ONLINE],
          tryIt: "Ṣe ìbéèrè GROUP BY revenue náà kí o sì ṣàyẹ̀wò pé ó bá pivot table rẹ mu. Kọ ìbéèrè tí ó ka ìtajà ní ṣọ́ọ̀bù kọ̀ọ̀kan (COUNT(*)); ó yẹ kí o rí 3, 3 àti 2. Lẹ́yìn náà ṣe tábìlì stores kí o sì ṣe JOIN náà. Pa ìbéèrè kọ̀ọ̀kan àti àbájáde rẹ̀ mọ́.",
          youCanNow: "ṣe àròpọ̀ àti kíka ẹgbẹ́ pẹ̀lú GROUP BY, kí o sì da tábìlì méjì pọ̀ pẹ̀lú JOIN.",
          quickCheck: [
            { objective: "O5", q: "Ìbéèrè wo ló fúnni ní àròpọ̀ iye tí a tà fún ọjà kọ̀ọ̀kan?", options: ["SELECT item, SUM(qty) FROM sales GROUP BY item;", "SELECT * FROM sales;", "SELECT item FROM sales WHERE qty = SUM;", "SELECT SUM(item) FROM sales;"], answer: 0, why: "GROUP BY item ń ṣe ẹgbẹ́ kan fún ọjà kọ̀ọ̀kan, SUM(qty) sì ń ṣe àròpọ̀ ọ̀kọ̀ọ̀kan." },
            { objective: "O5", q: "JOIN láàárín sales àti stores kò rí àwọn ìlà North. Kí ni ìdí tó ṣeé ṣe jù?", options: ["SQL kò lè da ọ̀rọ̀ pọ̀", "Ìlà ti pọ̀ jù", "Àkọtọ́ orúkọ ṣọ́ọ̀bù náà yàtọ̀ nínú tábìlì méjèèjì", "JOIN ń ṣiṣẹ́ ní ọjọ́ Ajé nìkan"], answer: 2, why: "JOIN ń so iye tí ó jọra gẹ́lẹ́ pọ̀; àkọtọ́ tó yàtọ̀ kò ní bá ara mu." }
          ]
        },
        {
          title: "Yíyí àbájáde padà sí ohun tí a rí, àti iṣẹ́ rẹ",
          objectives: ["O6"],
          minutes: 6,
          goal: "Kọ àbájáde mẹ́ta pẹ̀lú nọ́mbà, ààlà kan àti ìgbésẹ̀ tó kàn kan.",
          text: [
            "Nọ́mbà nìkan kò ran ọ̀gá lọ́wọ́. Àbájáde (finding) jẹ́ gbólóhùn kan tí ó sọ ohun tí dátà fi hàn, pẹ̀lú nọ́mbà: \"East ló ní revenue jù láti 1 sí 4 October: $29.00, ó ju ìlọ́po méjì $14.00 ti North lọ.\"",
            "Sọ òtítọ́ nípa ààlà. Dátà ìdánrawò bo ọjọ́ 4 àti ìtajà 8 nìkan, nítorí náà kò lè sọ nǹkan kan fún ọ nípa odindi ọdún. Kí nǹkan méjì máa lọ pọ̀ (correlation) kò túmọ̀ sí pé ọ̀kan ló fa èkejì: tí Coffee bá tà jù ní ọjọ́ tí òtútù mú, dátà nìkan kò fi hàn pé ojú ọjọ́ ló fà á. Sọ ohun tí dátà kò lè sọ fún ọ.",
            "Parí pẹ̀lú ìgbésẹ̀ tó kàn tí ẹnìkan lè ṣe: \"Kó ìtajà odindi oṣù kan jọ kí a tó pinnu ibi tí a máa fi ọjà púpọ̀ sí i ránṣẹ́ sí.\" Jẹ́ kí ó jẹ́ ojú-ewé kan, pẹ̀lú àwòrán (chart) tàbí tábìlì kan tó yé láti inú pivot rẹ.",
            "Níkẹyìn, yí iṣẹ́ náà padà sí ìlà résumé kan: \"Cleaned and analyzed sales data in Google Sheets and SQL (GROUP BY, JOIN); found the top store by revenue and reported findings.\" (Ó túmọ̀ sí: mo ṣe ìmọ́tótó àti ìtúpalẹ̀ dátà ìtajà pẹ̀lú Google Sheets àti SQL, mo rí ṣọ́ọ̀bù tó ní revenue jù, mo sì ròyìn àbájáde.) Èyí ń fi ohun tí o lè ṣe han agbanisíṣẹ́. Lo dátà àtinúdá tàbí ti gbogbogbò nìkan nínú portfolio, má ṣe lo dátà àṣírí agbanisíṣẹ́ láéláé."
          ],
          steps: ["Kọ ìbéèrè náà sí òkè.", "Fi tábìlì tàbí àwòrán kan láti inú pivot rẹ kún un.", "Kọ àbájáde mẹ́ta, ọ̀kọ̀ọ̀kan pẹ̀lú nọ́mbà.", "Kọ ààlà kan: ohun tí dátà kò lè sọ fún ọ.", "Kọ ìgbésẹ̀ tó kàn kan.", "Fi àwọn ìbéèrè SQL rẹ àti àbájáde wọn kún un.", "Kọ ìlà résumé kan nípa iṣẹ́ náà."],
          words: [["Àbájáde (finding)", "gbólóhùn kan tí ó sọ ohun tí dátà fi hàn, pẹ̀lú nọ́mbà."], ["Ààlà (limitation)", "ohun tí dátà kò lè sọ fún ọ, tàbí ìdí láti ṣọ́ra pẹ̀lú rẹ̀."], ["Correlation", "nǹkan méjì tí ń yí padà pọ̀; kò fi hàn pé ọ̀kan ló fa èkejì."], ["Portfolio", "àkójọ àpẹẹrẹ iṣẹ́ rẹ tí o ń fi han agbanisíṣẹ́."]],
          slides: [
            { title: "Àbájáde tó dára", bullets: ["Gbólóhùn kan, nọ́mbà kan", "\"East ló ní revenue jù: $29.00, ìlọ́po méjì $14.00 ti North.\""] },
            { title: "Sọ òtítọ́ nípa ààlà", bullets: ["Ọjọ́ 4 àti ìtajà 8 nìkan", "Kí nǹkan lọ pọ̀ kò túmọ̀ sí pé ọ̀kan ló fa èkejì"] },
            { title: "Ojú-ewé kan", bullets: ["Ìbéèrè, àwòrán tàbí tábìlì kan", "Àbájáde mẹ́ta, ààlà kan, ìgbésẹ̀ tó kàn kan", "Àwọn ìbéèrè SQL rẹ àti àbájáde wọn"] },
            { title: "Fi hàn", bullets: ["Kọ ìlà résumé kan", "Lo dátà àtinúdá tàbí ti gbogbogbò nìkan"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe iṣẹ́ ojú-ewé kan rẹ pẹ̀lú ìbéèrè náà, dátà tó mọ́ àti pivot, ó kéré tán ìbéèrè SQL méjì pẹ̀lú àbájáde, àbájáde mẹ́ta pẹ̀lú nọ́mbà, ààlà kan, ìgbésẹ̀ tó kàn kan, àti ìlà résumé kan. Kà á sókè: ṣé ọ̀gá tí ọwọ́ rẹ̀ dí lè fi ṣe ìpinnu láàárín ìṣẹ́jú kan?",
          youCanNow: "yí ìtúpalẹ̀ padà sí àbájáde tó yé tí ó jẹ́ òtítọ́, àti iṣẹ́ tí o lè fi han agbanisíṣẹ́.",
          quickCheck: [
            { objective: "O6", q: "Èwo ni àbájáde tó dára jù?", options: ["\"Ìtajà ṣẹlẹ̀.\"", "\"Dátà náà dùn mọ́ni.\"", "\"South ta ohun jíjẹ àti mímu 11, ó sì pa $24.75, ipò kejì nínú ṣọ́ọ̀bù mẹ́ta.\"", "\"Nọ́mbà gòkè, ó sì sọ̀kalẹ̀.\""], answer: 2, why: "Ó sọ ohun tí ó ṣẹlẹ̀, pẹ̀lú nọ́mbà àti àfiwé." },
            { objective: "O6", q: "Juice tà jù ní ọjọ́ tí ooru mú jù nínú dátà rẹ. Kí ni o lè sọ ní òtítọ́?", options: ["Ooru ló ń fa ìtajà juice", "Juice àti ọjọ́ ooru lọ pọ̀ níbí, ṣùgbọ́n èyí kò fi hàn pé ọ̀kan ló fa èkejì", "Juice máa tà jù nígbà ooru nígbà gbogbo", "Dátà náà kò tọ́"], answer: 1, why: "Kí nǹkan lọ pọ̀ kò túmọ̀ sí pé ọ̀kan ló fa èkejì; dátà kékeré kò lè fi ìdí hàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: SQL àti pínpín àbájáde",
        questions: [
          { objective: "O4", q: "Kí ni SELECT * FROM sales; ń ṣe?", options: ["Ó ń pa tábìlì sales rẹ́", "Ó ń fi gbogbo òpó àti ìlà inú tábìlì sales hàn", "Ó ń ka àwọn ìlà", "Ó ń tò tábìlì náà"], answer: 1, why: "* túmọ̀ sí gbogbo òpó, láìsí WHERE sì, gbogbo ìlà ló máa jáde." },
          { objective: "O4", q: "Èwo ni a kọ dáadáa?", options: ["SELECT * FROM sales WHERE item = 'Bagel';", "SELECT * FROM sales WHERE item = Bagel", "FROM sales SELECT Bagel;", "SELECT Bagel WHERE sales;"], answer: 0, why: "Ọ̀rọ̀ ń lọ sínú àmì ìfàyọ̀ kan ṣoṣo, ètò rẹ̀ sì ni SELECT, FROM, WHERE." },
          { objective: "O5", q: "Apá SQL wo ló ń ṣe iṣẹ́ kan náà pẹ̀lú Rows nínú pivot table?", options: ["ORDER BY", "WHERE", "FROM", "GROUP BY"], answer: 3, why: "GROUP BY ń ṣe ẹgbẹ́ kan fún iye kọ̀ọ̀kan, bí àwọn ìlà nínú pivot table." },
          { objective: "O5", q: "Kí ni COUNT(*) ń fúnni fún ṣọ́ọ̀bù kọ̀ọ̀kan nínú dátà ìdánrawò?", options: ["Àròpọ̀ revenue", "Ìwọ̀n àárín iye owó", "Iye ìlà ìtajà", "Ìlú"], answer: 2, why: "COUNT(*) ń ka àwọn ìlà nínú ẹgbẹ́ kọ̀ọ̀kan." },
          { objective: "O6", q: "Èwo ló yẹ kí ó wà ní apá ààlà ìròyìn rẹ?", options: ["\"Dátà náà bo ọjọ́ 4 nìkan, nítorí náà kò lè fi àṣà ọdún hàn.\"", "\"East ni ṣọ́ọ̀bù tó dára jù títí láé.\"", "\"SQL le.\"", "\"Mo fẹ́ràn coffee.\""], answer: 0, why: "Ààlà ń sọ fún òǹkàwé ohun tí dátà kò lè fi hàn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìtúpalẹ̀ Dátà pẹ̀lú Spreadsheet àti SQL",
    questions: [
      { objective: "O1", q: "Ìbéèrè dátà tó yé ní:", options: ["Kókó ọ̀rọ̀ nìkan", "Ta ni tàbí kí ni, ìwọ̀n kan àti àkókò kan", "Àwòrán (chart) kan", "Ọ̀rọ̀ aṣínà kan"], answer: 1, why: "Apá mẹ́ta yẹn ló ń jẹ́ kí a lè fi nọ́mbà dáhùn rẹ̀." },
      { objective: "O1", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ nínú ọ̀nà olùtúpalẹ̀?", options: ["Ṣe àwòrán", "Kọ SQL", "Béèrè ìbéèrè tó yé", "Sọ àbájáde fún wọn"], answer: 2, why: "Ìbéèrè ló ń pinnu dátà tí o nílò àti bí o ṣe máa túpalẹ̀ rẹ̀." },
      { objective: "O1", q: "Ìwé-ẹ̀rí wo láti CompTIA ló wà fún àwọn olùtúpalẹ̀ dátà ìpele ìbẹ̀rẹ̀?", options: ["Data+", "A+", "Security+", "Network+"], answer: 0, why: "CompTIA Data+ bo èrò dátà, mímúra dátà sílẹ̀, ìtúpalẹ̀, fífi hàn ní àwòrán àti ìṣàkóso." },
      { objective: "O2", q: "Kí ló dé tí \"North\" àti \"north \" fi ń fa ìṣòro?", options: ["Ó ń mú kí fáìlì tóbi sí i", "Spreadsheet kò lè ka lẹ́tà kékeré", "Ó ń yí ìrísí lẹ́tà padà", "A ń kà wọ́n sí ṣọ́ọ̀bù méjì ọ̀tọ̀ọ̀tọ̀"], answer: 3, why: "Àkọtọ́ tó yàtọ̀ ń pín ẹgbẹ́ kan sí méjì, nítorí náà àròpọ̀ kò ní tọ́." },
      { objective: "O2", q: "Irinṣẹ́ Excel wo ló ń yọ àwọn ìlà tí a tún kọ?", options: ["Insert > Chart", "Data > Remove Duplicates", "View > Zoom", "File > Save As"], answer: 1, why: "Remove Duplicates ń pa àwọn ìlà tí ó farahàn ju ẹ̀ẹ̀kan lọ rẹ́." },
      { objective: "O2", q: "Èwo ni ìwà ìmọ́tótó tó dára?", options: ["Ṣe ìmọ́tótó ẹ̀dà kan ṣoṣo tí o ní ti dátà náà", "Pa dátà àkọ́kọ́ mọ́ kí o sì kọ ìyípadà kọ̀ọ̀kan sílẹ̀", "Pa ìlà èyíkéyìí tí ó dàbí àjèjì rẹ́", "Tẹ àmì $ sínú àwọn sẹ́ẹ̀lì nọ́mbà"], answer: 1, why: "Pípa dátà àkọ́kọ́ mọ́ àti àkọsílẹ̀ ìyípadà ń jẹ́ kí a lè ṣàyẹ̀wò iṣẹ́ rẹ." },
      { objective: "O3", q: "Nínú pivot table, ibo ni nọ́mbà tí o ń ṣe àròpọ̀ rẹ̀ ń lọ?", options: ["Values", "Rows", "Àkọlé", "Filters nìkan"], answer: 0, why: "Values ló ń gba ìwọ̀n náà, pẹ̀lú àkópọ̀ SUM, COUNT tàbí AVERAGE." },
      { objective: "O3", q: "Kí ni COUNTIFS ń ṣe?", options: ["Ó ń ṣe àròpọ̀ nọ́mbà", "Ó ń wá ìwọ̀n àárín", "Ó ń ka àwọn ìlà tí ó bá òfin kan tàbí jù bẹ́ẹ̀ lọ mu", "Ó ń tò òpó kan"], answer: 2, why: "COUNTIFS ń ka àwọn ìlà tí ó bá òfin tí o fún un mu." },
      { objective: "O3", q: "Nínú dátà ìdánrawò tó mọ́, ṣọ́ọ̀bù wo ló ní revenue jù?", options: ["North", "South", "Gbogbo wọn dọ́gba", "East"], answer: 3, why: "East ní 29.00, South 24.75, North sì ní 14.00." },
      { objective: "O4", q: "Kí ni a fi SQL ṣe?", options: ["Yíya àwòrán", "Bíbéèrè ìbéèrè lọ́wọ́ database", "Fífi email ránṣẹ́", "Ṣíṣe àwọn slide"], answer: 1, why: "SQL ni èdè tí a fi ń béèrè ìbéèrè lọ́wọ́ database." },
      { objective: "O4", q: "Èwo ló ń mú àwọn ìlà tí qty wọn jẹ́ 4 tàbí jù bẹ́ẹ̀ lọ nìkan?", options: ["ORDER BY qty", "GROUP BY qty", "WHERE qty >= 4", "SELECT qty"], answer: 2, why: "WHERE ń ṣà àwọn ìlà nípa òfin kan." },
      { objective: "O4", q: "Láti tò àbájáde pẹ̀lú tó tóbi jù lákọ̀ọ́kọ́, o máa kọ:", options: ["ORDER BY qty DESC", "ORDER BY qty ASC", "WHERE qty BIG", "SORT qty"], answer: 0, why: "DESC ń tò láti tó tóbi jù sí tó kéré jù." },
      { objective: "O4", q: "Dátà wo ló láìléwu láti fi sínú irinṣẹ́ ìdánrawò SQL orí ayélujára?", options: ["Àkọsílẹ̀ oníbàárà agbanisíṣẹ́ rẹ", "Àkọsílẹ̀ àwọn aláìsàn", "Dátà ìdánrawò àtinúdá", "Ìwé àkọsílẹ̀ báńkì rẹ"], answer: 2, why: "Lo dátà ìdánrawò tàbí ti gbogbogbò nìkan nínú irinṣẹ́ orí ayélujára." },
      { objective: "O5", q: "SELECT store, SUM(qty * price) FROM sales GROUP BY store; ń fúnni ní:", options: ["Gbogbo ìtajà", "Àròpọ̀ revenue fún ṣọ́ọ̀bù kọ̀ọ̀kan", "Iye àwọn ṣọ́ọ̀bù", "Ìlú ṣọ́ọ̀bù kọ̀ọ̀kan"], answer: 1, why: "GROUP BY store pẹ̀lú SUM ń fúnni ní àròpọ̀ revenue kan fún ṣọ́ọ̀bù kọ̀ọ̀kan." },
      { objective: "O5", q: "Iṣẹ́ wo ló ń fúnni ní ìwọ̀n àárín (average)?", options: ["COUNT", "MAX", "SUM", "AVG"], answer: 3, why: "AVG ń fúnni ní ìwọ̀n àárín òpó kan." },
      { objective: "O5", q: "JOIN ń so àwọn ìlà láti tábìlì méjì pọ̀ nípa:", options: ["Òpó kan tí ó ní iye kan náà nínú méjèèjì", "Àwọ̀ ìlà", "Ìtóbi tábìlì", "Ètò álífábẹ́ẹ̀tì nìkan"], answer: 0, why: "JOIN ... ON ń so àwọn ìlà pọ̀ níbi tí òpó key ti dọ́gba." },
      { objective: "O6", q: "Àbájáde yẹ kí ó ní:", options: ["Àwòrán nìkan láìsí ọ̀rọ̀", "Nọ́mbà kan àti ohun tí ó túmọ̀ sí", "Gbogbo ìlà dátà", "Èrò rẹ láìsí dátà"], answer: 1, why: "Àbájáde tó yé ń sọ ohun tí ó ṣẹlẹ̀ pẹ̀lú nọ́mbà." },
      { objective: "O6", q: "Dátà rẹ bo ọ̀sẹ̀ kan. Èwo ló jẹ́ òtítọ́?", options: ["\"Èyí fi àṣà ọdún hàn dájú.\"", "\"Èyí kò ní yí padà láéláé.\"", "\"Dátà náà pé pérépéré.\"", "\"Ọ̀sẹ̀ yìí nìkan ni; a nílò dátà púpọ̀ sí i láti rí àṣà kan.\""], answer: 3, why: "Dídárúkọ ààlà ń dènà àwọn òǹkàwé láti dé ìparí tí kò tọ́." },
      { objective: "O6", q: "Ìlà résumé wo ló fi iṣẹ́ yìí hàn jù?", options: ["\"Mo mọ kọ̀mpútà dáadáa.\"", "\"Mo ṣe ìmọ́tótó àti ìtúpalẹ̀ dátà ìtajà pẹ̀lú Google Sheets àti SQL (GROUP BY, JOIN), mo sì ròyìn àbájáde.\"", "\"Mo mọ díẹ̀ nípa dátà.\"", "\"Mo lo íńtánẹ́ẹ̀tì.\""], answer: 1, why: "Ó dárúkọ àwọn irinṣẹ́, àwọn ọgbọ́n àti àbájáde." },
      { objective: "O6", q: "Kí ló yẹ kí ó parí ìròyìn ojú-ewé kan rẹ?", options: ["Ìgbésẹ̀ tó kàn tó yé tí ẹnìkan lè ṣe", "Àkọsílẹ̀ gígùn ti dátà àkọ́kọ́", "Ọ̀rọ̀ aṣínà rẹ", "Kò sí nǹkan kan"], answer: 0, why: "Ìgbésẹ̀ tó kàn ń yí àbájáde padà sí ìṣe." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 8, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìbéèrè tó yé", objective: "O1", notYet: "Ìbéèrè náà kò yé, tàbí a kò lè fi nọ́mbà dáhùn rẹ̀.", meets: "Ìbéèrè náà dárúkọ ta ni tàbí kí ni, ìwọ̀n kan àti àkókò kan.", exceeds: "Ó tún sọ ẹni tí ó máa lo ìdáhùn náà àti ìpinnu tí ó ń ràn lọ́wọ́." },
      { name: "Dátà tó mọ́", objective: "O2", notYet: "Àtúnwí tàbí orúkọ tí kò bá ara mu ṣì wà, tàbí dátà àkọ́kọ́ ti sọnù.", meets: "Kò sí àtúnwí, orúkọ àti irú dátà bá ara mu, a pa dátà àkọ́kọ́ mọ́, a sì to àwọn ìyípadà.", exceeds: "Àkọsílẹ̀ ìyípadà yé tó bẹ́ẹ̀ tí ẹlòmíì lè tún ìmọ́tótó náà ṣe." },
      { name: "Pivot àti fọ́múlà", objective: "O3", notYet: "Kò sí pivot, tàbí àròpọ̀ kò bá àyẹ̀wò ọwọ́ mu.", meets: "Pivot kan dáhùn ìbéèrè náà, SUMIFS tàbí COUNTIFS kan sì bá a mu.", exceeds: "Pivot tàbí fọ́múlà kejì fi àfiwé tó wúlò kún un." },
      { name: "Ìbéèrè tí ó ń ṣà ìlà", objective: "O4", notYet: "Kò sí ìbéèrè tí ó ṣiṣẹ́, tàbí ó mú àwọn ìlà tí kò tọ́ wá.", meets: "Ìbéèrè kan pẹ̀lú WHERE àti ORDER BY mú àwọn ìlà tó tọ́ gẹ́lẹ́ wá.", exceeds: "A kọ àwọn ìbéèrè náà létòlétò, ọ̀kọ̀ọ̀kan sì ní àlàyé ìlà kan nípa ohun tí ó dáhùn." },
      { name: "Kíkó jọ àti dída pọ̀", objective: "O5", notYet: "Kò sí ìbéèrè GROUP BY, tàbí àròpọ̀ rẹ̀ kò tọ́.", meets: "Ìbéèrè GROUP BY pẹ̀lú SUM, COUNT tàbí AVG bá pivot náà mu.", exceeds: "Ó tún ní JOIN tí ó ṣiṣẹ́, ó sì ṣàlàyé òpó tí ó so wọ́n pọ̀." },
      { name: "Àbájáde àti ìlà résumé", objective: "O6", notYet: "Àbájáde kò ní nọ́mbà, tàbí kò sí ààlà tàbí ìgbésẹ̀ tó kàn.", meets: "Àbájáde mẹ́ta pẹ̀lú nọ́mbà, ààlà kan, ìgbésẹ̀ tó kàn kan àti ìlà résumé kan.", exceeds: "Ọ̀gá lè fi ṣe ìpinnu láàárín ìṣẹ́jú kan, a sì fi àmì sí àwòrán tàbí tábìlì náà ní kedere." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi iṣẹ́ náà kún résumé tàbí portfolio wọn láàárín ọjọ́ 30 (ìwádìí lẹ́yìn ẹ̀kọ́)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ sí í béèrè fún tàbí bẹ̀rẹ̀ iṣẹ́ dátà, ìròyìn tàbí olùtúpalẹ̀, tàbí tí wọ́n ń lo ọgbọ́n wọ̀nyí níbi iṣẹ́, láàárín oṣù 6",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ fún tàbí yege CompTIA Data+ tàbí ìwé-ẹ̀rí dátà míì láàárín oṣù 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní browser (ojú fóònù ti kéré jù fún ìdánrawò SQL)",
      "Àkáǹtì Google ọ̀fẹ́ fún Google Sheets, tàbí Excel tí ó bá wà",
      "Ibi ọ̀fẹ́ láti kọ SQL: SQLite Online nínú browser, tàbí DB Browser for SQLite tí a fi sórí kọ̀mpútà",
      "Nǹkan bí ìṣẹ́jú 90 fún àwọn ẹ̀kọ́, pẹ̀lú wákàtí 1 sí 2 fún iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣáájú ìpàdé, ṣí ibi tí a ti ń kọ SQL lórí àwọn kọ̀mpútà yàrá ẹ̀kọ́ kí o sì ṣàyẹ̀wò pé ó ń ṣí; àwọn nẹ́tíwọ̀ọ̀kì kan ń dí àwọn ojú-òpó kan.",
      "Fún àwọn akẹ́kọ̀ọ́ ní tábìlì ìdánrawò bí fáìlì tàbí bí ìwé tí a tẹ̀ jáde láti dín àkókò títẹ ọ̀rọ̀ kù; títẹ ọ̀rọ̀ fúnra rẹ̀ náà jẹ́ ìdánrawò tó dára.",
      "Pín àwọn akẹ́kọ̀ọ́ ní méjì-méjì fún Ẹ̀kọ́ 4 àti 5: ọ̀kan ń tẹ ìbéèrè, èkejì ń ṣàyẹ̀wò àbájáde pẹ̀lú ọwọ́, lẹ́yìn náà kí wọ́n pààrọ̀.",
      "Tẹnu mọ́ òfin ìsọfúnni àdáni: dátà àtinúdá tàbí ti gbogbogbò nìkan nínú irinṣẹ́ orí ayélujára àti portfolio.",
      "Tí àwọn akẹ́kọ̀ọ́ bá fẹ́ ìwé-ẹ̀rí, darí wọn sí ojú-òpó CompTIA fúnra rẹ̀ fún Data+; ẹ̀kọ́ yìí ń múra wọn sílẹ̀ ṣùgbọ́n kò fún wọn ní i.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
