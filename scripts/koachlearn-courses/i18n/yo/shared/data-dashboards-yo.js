"use strict";

// Koach Learn course (Yoruba translation of shared/data-dashboards.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const PL300 = { name: "Microsoft Learn: Power BI Data Analyst Associate (ìdánwò PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const DATAPLUS = { name: "CompTIA Data+ (ìdánwò DA0-002)", url: "https://www.comptia.org/certifications/data" };
const PBI_DESKTOP = { name: "Microsoft: Power BI Desktop (gbígbà sílẹ̀ lọ́fẹ̀ẹ́)", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop" };
const DATA_STUDIO = { name: "Google Cloud: ìrànlọ́wọ́ Data Studio (Looker Studio tẹ́lẹ̀)", url: "https://docs.cloud.google.com/looker/docs/studio" };
const DS_SHEETS = { name: "Google Cloud: So Data Studio pọ̀ mọ́ Google Sheets", url: "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-sheets" };

module.exports = {
  id: "data-dashboards-yo",
  lang: "yo",
  translationOf: "data-dashboards",
  category: "Workforce Development",
  name: "Kíkọ́ Dashboard Dátà (Power BI àti Data Studio)",
  skills: "Ṣíṣètò dashboard àti àwọn nọ́mbà pàtàkì rẹ̀, Títún dátà ṣe sí tábìlì tó wà létòlétò, Yíyan àwòrán-àtẹ (chart) tó tọ́, Kíkọ́ dashboard ojú-ìwé kan pẹ̀lú àwọn àlẹ̀mọ́ (filter), Ṣíṣàyẹ̀wò àti pínpín dashboard láìléwu",
  outcome: "ṣètò, kọ́, ṣàyẹ̀wò, kí o sì pín dashboard ojú-ìwé kan nínú Power BI Desktop tàbí Looker Studio (Data Studio), tí ó dáhùn ìbéèrè òwò kan tó yé pẹ̀lú nọ́mbà pàtàkì 3 sí 5, àwọn chart tó tọ́ àti àwọn àlẹ̀mọ́ tó rọrùn.",
  about: [
    "Àwọn ilé-iṣẹ́ òwò, àjọ aláàánú, ilé ìwòsàn àti àwọn ológun ń lo dashboard: ojú-iboju kan tí ó fi àwọn nọ́mbà tí ènìyàn nílò láti ṣe ìpinnu hàn. Kíkọ́ wọn jẹ́ ọgbọ́n pàtàkì fún iṣẹ́ olùtúpalẹ̀ dátà (data analyst), iṣẹ́ ìròyìn àti iṣẹ́ ìṣàkóso. Ẹ̀kọ́ yìí wà fún àwọn tó ń wá iṣẹ́, àwọn ológun tẹ́lẹ̀ (veterans), àwọn olówò kékeré àti ẹnikẹ́ni tí ó ti lo spreadsheet tí ó sì fẹ́ gbé ìgbésẹ̀ tó kàn.",
    "O máa ṣètò dashboard, tún dátà àṣeṣe kékeré kan ṣe nínú Google Sheets, gbé e sínú irinṣẹ́ ọ̀fẹ́ kan, yan àwọn chart tó tọ́, fi káàdì nọ́mbà pàtàkì àti àwọn àlẹ̀mọ́ kún un, ṣàyẹ̀wò gbogbo nọ́mbà, kí o sì pín in láìléwu. O lè lo Power BI Desktop (ètò Windows ọ̀fẹ́ láti ọ̀dọ̀ Microsoft) tàbí Looker Studio, tí Google ń pè ní Data Studio báyìí (ọ̀fẹ́ nínú browser èyíkéyìí).",
    "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀ fún iṣẹ́ dashboard àti fún apá ìròyìn ti ìdánwò gidi méjì: PL-300 ti Microsoft (Power BI Data Analyst Associate) àti CompTIA Data+ (DA0-002). Kò fún ọ ní ìwé-ẹ̀rí kankan nínú méjèèjì. Wo àwọn ojú-ìwé ìjọba wọn nínú àwọn orísun láti mọ ohun tí ìdánwò kọ̀ọ̀kan ní, bí o ṣe lè forúkọ sílẹ̀ fún un àti iye tí ó ń ná lónìí.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, lẹ́yìn náà iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" wà. Àyẹ̀wò kíákíá ìbéèrè 2 wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ ló ń parí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì ló ń parí ẹ̀kọ́ náà. Gbogbo dátà àṣeṣe jẹ́ èyí tí a ṣe sílẹ̀ lásán."
  ],
  finalTask: "Kọ́ dashboard ojú-ìwé kan fún ọ̀nà iṣẹ́ tìrẹ: lo dátà títà ilé-búrẹ́dì àṣeṣe láti inú ẹ̀kọ́ yìí tàbí dátà kékeré tí o ṣe sílẹ̀ láti inú iṣẹ́ tí o fẹ́ (fún àpẹẹrẹ àṣẹ ọjà ní ilé-ìkẹ́rùsí tàbí àbẹ̀wò ilé ìwòsàn). Kọ ìbéèrè dashboard náà àti nọ́mbà pàtàkì 3 sí 5, tún dátà náà ṣe sí tábìlì tó wà létòlétò, kọ́ ó kéré tán káàdì nọ́mbà pàtàkì 3 àti chart 2 tó bá ìbéèrè náà mu, fi àlẹ̀mọ́ ọjọ́ àti àlẹ̀mọ́ míì kan kún un, ṣàyẹ̀wò àpapọ̀ 3 pẹ̀lú dátà orísun, lẹ́yìn náà pín in tàbí kó o jáde (export) pẹ̀lú àkópọ̀ gbólóhùn 3 nípa ohun tí ó fihàn. Fi pamọ́ bí iṣẹ́ àpẹẹrẹ (portfolio) tí o lè fihàn níbi ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà oríṣiríṣi: àwọn tó ń wá iṣẹ́ dátà, ìròyìn tàbí ìṣàkóso, àwọn ológun tẹ́lẹ̀ tí ń lọ sí iṣẹ́ alágbádá, àwọn olówò kékeré, àwọn ọ̀dọ́, àti àwọn tí ń padà sílé láti ẹ̀wọ̀n tí wọ́n ń tún ọgbọ́n iṣẹ́ wọn kọ́. Ọ̀pọ̀ ti lo spreadsheet; díẹ̀ ló ti kọ́ dashboard rí.",
    startingPoint: "Wọ́n lè tẹ dátà sínú spreadsheet, ṣe àpapọ̀ pẹ̀lú SUM, kí wọ́n sì ṣe chart tó rọrùn (tàbí wọ́n ti ṣe \"Excel àti Spreadsheet fún Iṣẹ́\"). Wọn kò tíì lo Power BI tàbí Looker Studio rí. Àwọn kan kò dá wọn lójú chart wo ni kí wọ́n lò tàbí ìdí tí nọ́mbà lórí ìròyìn fi lè jẹ́ àṣìṣe.",
    gap: "Àwọn agbanisíṣẹ́ fẹ́ ẹni tí ó lè sọ dátà aláìtò di ojú-ìwé kan tó yé, tí ó dáhùn ìbéèrè òwò, tí a sì lè gbẹ́kẹ̀lé. Àwọn akẹ́kọ̀ọ́ nílò láti ṣètò, tún dátà ṣe, kọ́, ṣàyẹ̀wò àti pín dashboard, kí wọ́n sì lè fi ọ̀kan hàn níbi ìfọ̀rọ̀wánilẹ́nuwò. Èyí ni ọgbọ́n ìròyìn tí PL-300 àti CompTIA Data+ ń dánwò pẹ̀lú.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ dátà",
      "Ẹ̀rọ: Power BI Desktop nílò kọ̀mpútà Windows; lórí Mac, Chromebook tàbí kọ̀mpútà ilé-ìkàwé, lo Data Studio nínú browser",
      "Irinṣẹ́ ọ̀fẹ́ nìkan: Google Sheets, Power BI Desktop, Data Studio (Looker Studio)",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5 sí 6 tí ó bá àkókò iṣẹ́ àti wíwá iṣẹ́ mu",
      "Ìpamọ́: dátà àṣeṣe jẹ́ èyí tí a ṣe sílẹ̀; má ṣe gbé dátà gidi ti oníbàárà, aláìsàn tàbí òṣìṣẹ́ sínú rẹ̀ fún àṣeṣe láéláé"
    ],
    prerequisites: "Lílo spreadsheet ìpìlẹ̀: títẹ dátà, SUM, títò (sort) àti chart tó rọrùn. Tí èyí bá jẹ́ tuntun sí ọ, kọ́kọ́ ṣe \"Excel àti Spreadsheet fún Iṣẹ́\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ohun tí òwò kan nílò, bí \"Àwọn ọjà wo ló ń tà jù?\"", action: "kọ ìbéèrè dashboard gbólóhùn kan, dárúkọ àwọn tí yóò wò ó, kí o sì yan nọ́mbà pàtàkì 3 sí 5 (KPI)", standard: "pẹ̀lú orúkọ nọ́mbà pàtàkì kọ̀ọ̀kan, bí a ṣe ń ṣírò rẹ̀ àti àkókò rẹ̀" },
    { id: "O2", condition: "Tí a bá fún ọ ní ìwé títà àṣeṣe tí kò wà létòlétò", action: "tún dátà náà ṣe sí tábìlì tó wà létòlétò pẹ̀lú ìlà kan fún àkọsílẹ̀ kọ̀ọ̀kan àti òpó kan fún pápá kọ̀ọ̀kan", standard: "láìsí àkọlé òfo, láìsí ìlà àdàkọ, àti pẹ̀lú ìrísí kan ṣoṣo fún òpó kọ̀ọ̀kan" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìbéèrè nípa ìyípadà lórí àkókò, ìfiwéra, tàbí ìpín nínú àpapọ̀", action: "yan kí o sì kọ́ irú chart tó bá ìbéèrè náà mu nínú Power BI Desktop tàbí Data Studio", standard: "kí o sì yan ó kéré tán 4 nínú àwọn chart 5 tọ̀nà" },
    { id: "O4", condition: "Ní lílo dátà rẹ tí o ti tún ṣe nínú Power BI Desktop tàbí Data Studio", action: "kọ́ dashboard ojú-ìwé kan pẹ̀lú àwọn káàdì nọ́mbà pàtàkì, ó kéré tán chart 2, àlẹ̀mọ́ ọjọ́ àti àlẹ̀mọ́ míì kan", standard: "kí ẹni tí ó ń wò ó lè dáhùn ìbéèrè dashboard náà láàárín ìṣẹ́jú kan" },
    { id: "O5", condition: "Tí a bá fún ọ ní dashboard tí ó ti parí àti dátà orísun rẹ̀", action: "ṣàyẹ̀wò ó kéré tán àpapọ̀ 3 lórí dashboard pẹ̀lú dátà orísun, kí o sì tún èyíkéyìí tí kò bá dọ́gba ṣe", standard: "kí ẹlòmíì tó rí i" },
    { id: "O6", condition: "Nígbà tí dashboard rẹ bá ti ṣetán", action: "pín tàbí kó dashboard náà jáde pẹ̀lú àṣẹ wíwò nìkan, kí o sì kọ àkópọ̀ gbólóhùn 3 nípa ohun tí ó fihàn", standard: "láìpín ìsọfúnni àdáni kankan" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò dashboard àti mímú dátà ṣetán",
      lessons: [
        {
          title: "Bíbẹ̀rẹ̀ pẹ̀lú ìbéèrè àti àwọn nọ́mbà pàtàkì",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọ ìbéèrè dashboard, dárúkọ àwọn tí yóò wò ó, kí o sì yan nọ́mbà pàtàkì 3 sí 5.",
          text: [
            "Dashboard jẹ́ ojú-iboju kan ti àwọn nọ́mbà àti chart tí ó ń ran ẹnìkan lọ́wọ́ láti ṣe ìpinnu. Èyí tó dára ń bẹ̀rẹ̀ pẹ̀lú ìbéèrè, kì í ṣe pẹ̀lú chart. Béèrè pé: ta ni yóò wò ó, kí ni wọ́n sì nílò láti pinnu?",
            "Àpẹẹrẹ: ẹni tí ó ni ilé-búrẹ́dì kékeré kan béèrè pé, \"Àwọn ọjà wo àti àwọn ọjọ́ wo ló ń mú owó wọlé jù lóṣooṣù?\" Ẹni tí yóò wò ó ni olówó ilé-búrẹ́dì náà. Ìpinnu náà ni ohun tí ó yẹ kí ó ṣe púpọ̀ sí i àti ìgbà tí ó yẹ kí àwọn òṣìṣẹ́ wá.",
            "Lẹ́yìn náà, yan nọ́mbà pàtàkì 3 sí 5, tí a ń pè ní KPI. Fún ilé-búrẹ́dì náà: àpapọ̀ títà ní dọ́là, iye ọjà tí a tà, ìwọ̀n àárín títà fún àṣẹ kọ̀ọ̀kan, àti ọjà tí ó tà jù. Kọ bí a ṣe ń ṣírò ọ̀kọ̀ọ̀kan àti fún àkókò wo, fún àpẹẹrẹ \"Àpapọ̀ títà = àpapọ̀ òpó Total, oṣù yìí\".",
            "Nọ́mbà tí ó pọ̀ jù máa ń bo àwọn pàtàkì mọ́lẹ̀. Tí nọ́mbà kan kò bá ràn ọ́ lọ́wọ́ láti dáhùn ìbéèrè náà, fi í sílẹ̀."
          ],
          steps: ["Dárúkọ àwọn tí yóò wò ó: ta ni yóò lo dashboard náà?", "Kọ ìbéèrè náà ní gbólóhùn kan.", "Dárúkọ ìpinnu tí ó ń ràn wọ́n lọ́wọ́ láti ṣe.", "Yan nọ́mbà pàtàkì 3 sí 5 tí ó dáhùn rẹ̀.", "Fún ọ̀kọ̀ọ̀kan, kọ orúkọ rẹ̀, bí a ṣe ń ṣírò rẹ̀ àti àkókò rẹ̀."],
          words: [["Dashboard", "ojú-iboju kan ti àwọn nọ́mbà pàtàkì àti chart tí ó ń ran ẹnìkan lọ́wọ́ láti ṣe ìpinnu."], ["KPI (key performance indicator)", "ọ̀kan nínú àwọn nọ́mbà díẹ̀ tí ó fihàn bóyá nǹkan ń lọ dáadáa, bí àpapọ̀ títà oṣù yìí."], ["Àwọn olùwò (audience)", "àwọn ènìyàn tí yóò wo dashboard náà."], ["Metric", "nọ́mbà èyíkéyìí tí o ń wọ̀n, bí iye ọjà tí a tà tàbí ìwọ̀n àárín títà."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú ìbéèrè, kì í ṣe chart", bullets: ["Ta ni yóò wò ó?", "Kí ni wọ́n nílò láti pinnu?", "Kọ ìbéèrè náà ní gbólóhùn kan"] },
            { title: "Àpẹẹrẹ: ilé-búrẹ́dì kékeré kan", bullets: ["Ìbéèrè: àwọn ọjà àti ọjọ́ wo ló ń mú owó wọlé jù?", "Olùwò: olówó ilé-búrẹ́dì", "Ìpinnu: kí ni láti ṣe àti ìgbà wo ni òṣìṣẹ́ yóò wá"] },
            { title: "Yan nọ́mbà pàtàkì 3 sí 5 (KPI)", bullets: ["Àpapọ̀ títà, iye ọjà tí a tà, ìwọ̀n àárín títà, èyí tó tà jù", "Kọ bí a ṣe ń ṣírò ọ̀kọ̀ọ̀kan", "Kọ àkókò rẹ̀: oṣù yìí, ọ̀sẹ̀ yìí"] },
            { title: "Díẹ̀ ló dára jù", bullets: ["Nọ́mbà tí ó pọ̀ jù máa ń bo àwọn pàtàkì mọ́lẹ̀", "Tí kò bá dáhùn ìbéèrè náà, fi í sílẹ̀"] }
          ],
          tryIt: "Yan iṣẹ́ kan tí o fẹ́ (fún àpẹẹrẹ ilé-ìkẹ́rùsí, iwájú ọ́fíìsì ilé ìwòsàn, alákòóso ṣọ́ọ̀bù tàbí àpẹẹrẹ ilé-búrẹ́dì). Lórí ìwé, kọ àwọn olùwò, ìbéèrè gbólóhùn kan, ìpinnu náà, àti nọ́mbà pàtàkì 3 sí 5 pẹ̀lú bí a ṣe ń ṣírò ọ̀kọ̀ọ̀kan àti àkókò rẹ̀. Pa ìwé yìí mọ́: òun ni ètò fún dashboard ìkẹyìn rẹ.",
          youCanNow: "kọ ìbéèrè dashboard fún àwọn olùwò gidi, kí o sì yan nọ́mbà pàtàkì 3 sí 5 tí ó dáhùn rẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Kí ni o yẹ kí o KỌ́KỌ́ ṣe nígbà tí o bá ń kọ́ dashboard?", options: ["Kọ ìbéèrè náà àti ẹni tí ó wà fún", "Yan àwọ̀ fún àwọn chart", "Fi gbogbo chart tí irinṣẹ́ náà ní kún un", "Yan irú lẹ́tà (font)"], answer: 0, why: "Ìbéèrè àti àwọn olùwò ló ń pinnu àwọn nọ́mbà àti chart tí ó yẹ kí ó wà lójú-ìwé náà." },
            { objective: "O1", q: "Èwo ni nọ́mbà pàtàkì tó dára jù fún \"Àwọn ọjà wo ló ń mú owó wọlé jù lóṣooṣù?\"", options: ["Iye àwọn òṣìṣẹ́", "Àdírẹ́sì òpópónà ilé-búrẹ́dì náà", "Àpapọ̀ títà ní dọ́là fún ọjà kọ̀ọ̀kan, oṣù yìí", "Ojú ọjọ́ lójoojúmọ́"], answer: 2, why: "Títà fún ọjà kọ̀ọ̀kan nínú oṣù dáhùn ìbéèrè náà tààrà." }
          ],
          sources: [PL300, DATAPLUS]
        },
        {
          title: "Títún dátà ṣe sí tábìlì tó wà létòlétò",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tún ìwé aláìtò ṣe sí tábìlì tó wà létòlétò pẹ̀lú ìlà kan fún àkọsílẹ̀ kọ̀ọ̀kan àti òpó kan fún pápá kọ̀ọ̀kan.",
          text: [
            "Àwọn irinṣẹ́ dashboard ń ṣiṣẹ́ dáadáa jù pẹ̀lú tábìlì tó wà létòlétò: ìlà àkọlé kan, ìlà kan fún àkọsílẹ̀ kọ̀ọ̀kan (títà kọ̀ọ̀kan, àṣẹ kọ̀ọ̀kan) àti òpó kan fún pápá kọ̀ọ̀kan (Date, Product, Units). Kò sí sẹ́ẹ̀lì tí a dàpọ̀ (merged), kò sí ìlà òfo, kò sì sí àpapọ̀ tí a tẹ sí àárín dátà.",
            "Dátà aláìtò máa ń fúnni ní nọ́mbà tí kò tọ́. Àwọn ìṣòro tí ó wọ́pọ̀: títà kan náà tí a tẹ lẹ́ẹ̀mejì (àdàkọ), sẹ́ẹ̀lì òfo, ọjọ́ tí a kọ ní ọ̀nà oríṣiríṣi (10/3/26 àti Oct 3), nọ́mbà tí a fi pamọ́ bí ọ̀rọ̀ (\"$4.50\" tí a tẹ pẹ̀lú àlàfo), àti ìyàtọ̀ nínú sípẹ́lì (\"Muffin\" àti \"muffins\").",
            "Nínú Google Sheets o lè tún èyí tó pọ̀ jù ṣe: Data > Data cleanup > Remove duplicates, Format > Number láti ṣètò ọjọ́ àti owó, àti Edit > Find and replace láti tún sípẹ́lì ṣe. Pa ìwé àkọ́kọ́ mọ́ kí o sì tún ẹ̀dà rẹ̀ ṣe, kí o lè padà sẹ́yìn nígbàkigbà.",
            "Dátà àṣeṣe fún ẹ̀kọ́ yìí (a ṣe é sílẹ̀ lásán): àwọn òpó Date, Product, Category, Units, Price, Total. Fún àpẹẹrẹ 10/1/2026, Muffin, Pastry, 12, 2.50, 30.00."
          ],
          steps: ["Ṣe ẹ̀dà ìwé náà kí o sì ṣiṣẹ́ lórí ẹ̀dà náà.", "Rí i dájú pé ìlà àkọlé kan ṣoṣo ló wà, pẹ̀lú orúkọ tó yé ní gbogbo òpó.", "Yọ àwọn ìlà òfo, sẹ́ẹ̀lì tí a dàpọ̀ àti ìlà àpapọ̀ èyíkéyìí tí ó wà nínú dátà kúrò.", "Yọ àwọn ìlà àdàkọ kúrò.", "Fún òpó kọ̀ọ̀kan ní ìrísí kan: ọjọ́ bí ọjọ́, owó bí owó, ọ̀rọ̀ pẹ̀lú sípẹ́lì kan náà.", "Fi ọwọ́ ṣàyẹ̀wò ìlà kan: Units lọ́nà Price gbọ́dọ̀ dọ́gba pẹ̀lú Total."],
          words: [["Tábìlì tó wà létòlétò (tidy table)", "dátà tí ó ní ìlà àkọlé kan, ìlà kan fún àkọsílẹ̀ kọ̀ọ̀kan àti òpó kan fún pápá kọ̀ọ̀kan."], ["Àkọsílẹ̀ (record)", "ìlà dátà kan, bí títà kan."], ["Pápá (field)", "òpó dátà kan, bí Date tàbí Product."], ["Àdàkọ (duplicate)", "àkọsílẹ̀ kan náà tí a tẹ lẹ́ẹ̀mejì."], ["Irú dátà (data type)", "irú ohun tí òpó kan ní: nọ́mbà, ọjọ́, owó tàbí ọ̀rọ̀."]],
          slides: [
            { title: "Tábìlì tó wà létòlétò", bullets: ["Ìlà àkọlé kan", "Ìlà kan fún àkọsílẹ̀ kọ̀ọ̀kan, òpó kan fún pápá kọ̀ọ̀kan", "Kò sí sẹ́ẹ̀lì àdàpọ̀, ìlà òfo tàbí àpapọ̀ tí a tẹ sí i"] },
            { title: "Àwọn ìṣòro tí ó wọ́pọ̀", bullets: ["Ìlà àdàkọ", "Ọjọ́ tí a kọ ní ọ̀nà oríṣiríṣi", "Nọ́mbà tí a fi pamọ́ bí ọ̀rọ̀", "Sípẹ́lì oríṣiríṣi fún ohun kan náà"] },
            { title: "Àtúnṣe nínú Google Sheets", bullets: ["Data > Data cleanup > Remove duplicates", "Format > Number fún ọjọ́ àti owó", "Edit > Find and replace fún sípẹ́lì"] },
            { title: "Ṣiṣẹ́ láìléwu", bullets: ["Tún ẹ̀dà ṣe, pa èyí àkọ́kọ́ mọ́", "Fi ọwọ́ ṣàyẹ̀wò ìlà kan: Units x Price = Total"] }
          ],
          tryIt: "Nínú Google Sheets, tẹ ìlà 15 ti títà ilé-búrẹ́dì tí o ṣe sílẹ̀ (Date, Product, Category, Units, Price, Total) fún ọ̀sẹ̀ méjì. Mọ̀ọ́mọ̀ fi ìlà àdàkọ 1, ìlà òfo 1, ọjọ́ 1 tí a kọ bí ọ̀rọ̀ (Oct 5) àti ìyàtọ̀ sípẹ́lì 1 (\"muffins\") kún un. Lẹ́yìn náà ṣe ẹ̀dà kí o sì tún un ṣe pẹ̀lú àwọn ìgbésẹ̀ náà. Ka iye ìṣòro tí o tún ṣe.",
          youCanNow: "rí àwọn àdàkọ, sẹ́ẹ̀lì òfo, ìrísí àdàlù àti ìyàtọ̀ sípẹ́lì, kí o sì tún wọn ṣe láti ṣe tábìlì tó wà létòlétò.",
          quickCheck: [
            { objective: "O2", q: "Ìwé rẹ fi \"Muffin\" àti \"muffins\" hàn bí ọjà méjì. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀; irinṣẹ́ náà yóò fojú dá a", "Pa gbogbo ìlà muffin rẹ́", "Fi sípẹ́lì kẹta kún un", "Lo Find and replace kí gbogbo ìlà lè kọ \"Muffin\""], answer: 3, why: "Sípẹ́lì kan fún ọjà kọ̀ọ̀kan túmọ̀ sí pé irinṣẹ́ náà yóò ṣe àròpọ̀ wọn dáadáa." },
            { objective: "O2", q: "Èwo ló ṣàpèjúwe tábìlì tó wà létòlétò?", options: ["Sẹ́ẹ̀lì àkọlé tí a dàpọ̀ lórí dátà", "Ìlà àkọlé kan, ìlà kan fún àkọsílẹ̀ kọ̀ọ̀kan, òpó kan fún pápá kọ̀ọ̀kan", "Ìlà àpapọ̀ kan ní àárín dátà", "Ìlà àkọlé méjì pẹ̀lú sẹ́ẹ̀lì òfo"], answer: 1, why: "Àwọn irinṣẹ́ dashboard ń ka tábìlì tó wà létòlétò dáadáa; sẹ́ẹ̀lì àdàpọ̀ àti àpapọ̀ tí a tẹ sí i ń da wọ́n rú." }
          ],
          sources: [{ name: "Google Docs Editors Help: Pín ọ̀rọ̀, yọ àdàkọ kúrò, tàbí gé àlàfo", url: "https://support.google.com/docs/answer/6325535" }]
        },
        {
          title: "Gbígbé dátà sínú Power BI Desktop tàbí Data Studio",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gbé tábìlì tó wà létòlétò sínú Power BI Desktop tàbí Data Studio, kí o sì ṣàyẹ̀wò irú dátà òpó kọ̀ọ̀kan.",
          text: [
            "Yan irinṣẹ́ rẹ. Power BI Desktop jẹ́ ọ̀fẹ́ láti ọ̀dọ̀ Microsoft, ó sì ń ṣiṣẹ́ lórí kọ̀mpútà Windows. Looker Studio, tí Google ń pè ní Data Studio báyìí, jẹ́ ọ̀fẹ́, ó sì ń ṣiṣẹ́ nínú browser, nítorí náà ó ń ṣiṣẹ́ lórí Mac, Chromebook tàbí kọ̀mpútà ilé-ìkàwé. A ń lo méjèèjì níbi iṣẹ́ gidi; ọgbọ́n láti ọ̀kan ń wúlò fún èkejì.",
            "Power BI Desktop: gbà á sílẹ̀ láti ojú-òpó wẹ́ẹ̀bù gidi ti Microsoft nìkan. Fi ìwé rẹ tí o ti tún ṣe pamọ́ bí fáìlì Excel tàbí CSV. Yan Get data, yan fáìlì náà, kí o sì wo àyẹ̀wò ṣáájú (preview). Yan Transform data tí òpó kan bá nílò àtúnṣe; èyí ṣí Power Query Editor, níbi tí o ti lè ṣètò irú dátà òpó kan.",
            "Data Studio: wọlé pẹ̀lú àkáǹtì Google, yan Create, lẹ́yìn náà Data source, yan Google Sheets connector, yan spreadsheet àti worksheet rẹ, kí o sì yan Connect. O máa rí àwọn pápá rẹ pẹ̀lú irú wọn.",
            "Nínú irinṣẹ́ méjèèjì, ṣàyẹ̀wò gbogbo òpó: Date gbọ́dọ̀ jẹ́ ọjọ́, Units àti Total gbọ́dọ̀ jẹ́ nọ́mbà, Product gbọ́dọ̀ jẹ́ ọ̀rọ̀. Nọ́mbà tí a fi pamọ́ bí ọ̀rọ̀ kò ṣeé ṣe àròpọ̀. Àwọn pápá tí o ń kà tàbí ṣe àròpọ̀ (Units, Total) ni a sábà máa ń pè ní measure tàbí metric; àwọn pápá tí o fi ń pín sí ẹgbẹ́ (Product, Date) ni a ń pè ní dimension."
          ],
          steps: ["Yan Power BI Desktop (Windows) tàbí Data Studio (browser èyíkéyìí).", "Power BI: Get data, yan fáìlì Excel tàbí CSV rẹ, wo preview, yan Load tàbí Transform data.", "Data Studio: Create, Data source, Google Sheets connector, yan ìwé náà, Connect.", "Ṣàyẹ̀wò irú òpó kọ̀ọ̀kan: ọjọ́, nọ́mbà, ọ̀rọ̀.", "Tún irú tí kò tọ́ èyíkéyìí ṣe kí o tó kọ́ chart."],
          words: [["Power BI Desktop", "ètò ọ̀fẹ́ ti Microsoft fún Windows tí ó ń kọ́ ìròyìn àti dashboard."], ["Data Studio (Looker Studio)", "irinṣẹ́ browser ọ̀fẹ́ ti Google fún ìròyìn àti dashboard; Google yí orúkọ Looker Studio padà sí Data Studio."], ["Orísun dátà (data source)", "fáìlì tàbí ìwé tí dashboard ń ka dátà rẹ̀ láti inú rẹ̀."], ["Power Query Editor", "apá Power BI níbi tí o ti ń tún dátà ṣe tí o sì ń tò ó kí o tó kọ́ àwòrán."], ["Dimension", "pápá tí o fi ń pín sí ẹgbẹ́, bí Product tàbí Date."], ["Measure (metric)", "nọ́mbà tí o ń ṣe àròpọ̀, kà tàbí wá ìwọ̀n àárín rẹ̀, bí àpapọ̀ títà."], ["Fáìlì CSV", "fáìlì ọ̀rọ̀ lásán ti dátà tí a fi kọ́mà (,) ya àwọn iye rẹ̀ sọ́tọ̀."]],
          slides: [
            { title: "Irinṣẹ́ ọ̀fẹ́ méjì", bullets: ["Power BI Desktop: ọ̀fẹ́, Windows", "Data Studio (Looker Studio tẹ́lẹ̀): ọ̀fẹ́, browser èyíkéyìí", "Ọgbọ́n láti ọ̀kan ń wúlò fún èkejì"] },
            { title: "Power BI Desktop", bullets: ["Get data, yan fáìlì Excel tàbí CSV rẹ", "Ṣàyẹ̀wò preview", "Transform data ń ṣí Power Query Editor"] },
            { title: "Data Studio", bullets: ["Create, lẹ́yìn náà Data source", "Google Sheets connector, yan ìwé náà", "Connect, lẹ́yìn náà ṣàyẹ̀wò àkọsílẹ̀ àwọn pápá"] },
            { title: "Ṣàyẹ̀wò gbogbo irú dátà", bullets: ["Ọjọ́ bí ọjọ́, nọ́mbà bí nọ́mbà", "Measure: ohun tí o ń ṣe àròpọ̀, bí Total", "Dimension: ohun tí o fi ń pín sí ẹgbẹ́, bí Product"] }
          ],
          tryIt: "Gbé ìwé ilé-búrẹ́dì rẹ tí o ti tún ṣe sínú Power BI Desktop tàbí Data Studio. Kọ òpó kọ̀ọ̀kan àti irú dátà rẹ̀ sílẹ̀. Tí nọ́mbà èyíkéyìí bá fihàn bí ọ̀rọ̀, tún un ṣe nínú irinṣẹ́ náà tàbí nínú ìwé náà, lẹ́yìn náà tún un gbé wọlé. Lẹ́yìn náà dárúkọ àwọn pápá tí ó jẹ́ dimension àti àwọn tí ó jẹ́ measure.",
          youCanNow: "gbé tábìlì tó wà létòlétò sínú Power BI Desktop tàbí Data Studio, kí o sì rí i dájú pé gbogbo òpó ní irú dátà tó tọ́.",
          quickCheck: [
            { objective: "O2", q: "Òpó Total rẹ wọlé bí ọ̀rọ̀. Kí ló máa ṣẹlẹ̀ tí o bá fi í sílẹ̀?", options: ["Irinṣẹ́ náà kò ní lè ṣe àròpọ̀ àwọn àpapọ̀ náà dáadáa", "Kò sí nǹkan; ọ̀rọ̀ àti nọ́mbà ń ṣiṣẹ́ bákan náà", "Dashboard náà yóò ní àwọ̀ púpọ̀ sí i", "Fáìlì náà yóò kéré sí i"], answer: 0, why: "Òpó nọ́mbà nìkan ló ṣeé ṣe àròpọ̀ tàbí wá ìwọ̀n àárín rẹ̀." },
            { objective: "O2", q: "Chromebook nìkan ni o ní. Irinṣẹ́ wo ni o lè lò fún ẹ̀kọ́ yìí?", options: ["Power BI Desktop", "Kò sí irinṣẹ́ tí yóò ṣiṣẹ́", "Data Studio nínú browser", "Ìwé nìkan"], answer: 2, why: "Data Studio ń ṣiṣẹ́ nínú browser; Power BI Desktop nílò Windows." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO, DS_SHEETS]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò dashboard àti mímú dátà ṣetán",
        questions: [
          { objective: "O1", q: "Alákòóso ṣọ́ọ̀bù kan fẹ́ mọ ọjọ́ wo nínú ọ̀sẹ̀ ló nílò òṣìṣẹ́ púpọ̀ sí i. Nọ́mbà pàtàkì wo ló ràn án lọ́wọ́ jù?", options: ["Nọ́mbà fóònù ṣọ́ọ̀bù náà", "Iye ọjà tí ó wà nínú àkọsílẹ̀ ọjà", "Iye oníbàárà fún ọjọ́ kọ̀ọ̀kan nínú ọ̀sẹ̀", "Ọjọ́ tí alákòóso náà bẹ̀rẹ̀ iṣẹ́"], answer: 2, why: "Oníbàárà fún ọjọ́ kọ̀ọ̀kan fihàn tààrà àwọn ọjọ́ tí èrò pọ̀ jù." },
          { objective: "O1", q: "Nọ́mbà pàtàkì mélòó ni dashboard ojú-ìwé kan sábà máa ń fihàn?", options: ["3 sí 5", "1 nìkan", "Bí ó ti lè pọ̀ tó", "Ó kéré tán 20"], answer: 0, why: "Nọ́mbà pàtàkì díẹ̀ ń jẹ́ kí àwọn pàtàkì rọrùn láti rí." },
          { objective: "O2", q: "Ìṣòro wo ni yóò mú kí àpapọ̀ títà ga jù?", options: ["Ìlà àkọlé tó yé", "Ọjọ́ tí a ṣètò bí ọjọ́", "Sípẹ́lì kan fún ọjà kọ̀ọ̀kan", "Títà kan náà tí a tẹ lẹ́ẹ̀mejì"], answer: 3, why: "Ìlà àdàkọ ń ka títà kan náà lẹ́ẹ̀mejì." },
          { objective: "O2", q: "Kí o tó tún ìwé kan ṣe, kí ni o yẹ kí o ṣe?", options: ["Pa ìlà àkọlé rẹ́", "Ṣe ẹ̀dà kí o sì tún ẹ̀dà náà ṣe", "Da gbogbo sẹ́ẹ̀lì pọ̀", "Tẹ àpapọ̀ sínú dátà"], answer: 1, why: "Pípa èyí àkọ́kọ́ mọ́ ń jẹ́ kí o lè padà sẹ́yìn tí àtúnṣe kan bá bà jẹ́." },
          { objective: "O2", q: "Product àti Date jẹ́ pápá tí o fi ń pín sí ẹgbẹ́. Kí ni a ń pè wọ́n?", options: ["Measure", "Ọ̀rọ̀ aṣínà", "Dimension", "Àlẹ̀mọ́ (filter)"], answer: 2, why: "Dimension ni àwọn pápá tí o fi ń pín sí ẹgbẹ́; measure ni àwọn nọ́mbà tí o ń ṣe àròpọ̀ tàbí wá ìwọ̀n àárín rẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ́, ṣíṣàyẹ̀wò àti pínpín",
      lessons: [
        {
          title: "Yíyan chart tó tọ́",
          objectives: ["O3"],
          minutes: 6,
          goal: "Yan kí o sì kọ́ chart tó bá irú ìbéèrè kọ̀ọ̀kan mu.",
          text: [
            "Jẹ́ kí chart bá ìbéèrè mu. Ìyípadà lórí àkókò (títà lójoojúmọ́ tàbí lóṣooṣù) jẹ́ line chart. Ìfiwéra láàárín ẹgbẹ́ (títà fún ọjà kọ̀ọ̀kan) jẹ́ bar chart tàbí column chart, tí a tò láti èyí tó tóbi jù sí èyí tó kéré jù. Ìpín nínú odidi (ìpín títà fún ẹ̀ka kọ̀ọ̀kan) lè jẹ́ pie chart tàbí donut chart, ṣùgbọ́n pẹ̀lú ìpín díẹ̀ nìkan; bar chart sábà máa ń yé jù.",
            "Nọ́mbà pàtàkì kan ṣoṣo jẹ́ card nínú Power BI tàbí scorecard nínú Data Studio. Àwọn iye gangan tí ènìyàn nílò láti wá ń lọ sínú tábìlì. Máàpù wúlò nìkan nígbà tí ibi tí nǹkan wà bá ṣe pàtàkì.",
            "Láti kọ́ ọ: nínú Power BI Desktop, tẹ àwòrán (visual) kan nínú Visualizations pane, lẹ́yìn náà fa dimension kan (Product) àti measure kan (Total) sínú àwọn pápá rẹ̀. Nínú Data Studio, yan Add a chart, yan irú rẹ̀, lẹ́yìn náà ṣètò dimension àti metric.",
            "Jẹ́ kí chart jẹ́ olóòótọ́: bar chart ń bẹ̀rẹ̀ láti òdo, gbogbo chart ní àkọlé tó yé tí ó sọ ohun tí ó fihàn (\"Títà fún ọjà kọ̀ọ̀kan, October\"), o sì ń lo àwọ̀ kan àyàfi tí àwọ̀ bá ní ìtumọ̀."
          ],
          steps: ["Ka ìbéèrè náà: ṣé nípa àkókò ni, ìfiwéra ẹgbẹ́, ìpín nínú odidi, tàbí nọ́mbà kan?", "Àkókò: line chart. Ìfiwéra: bar chart tí a tò. Ìpín: pie pẹ̀lú ìpín díẹ̀, tàbí bar. Nọ́mbà kan: card tàbí scorecard.", "Fi chart náà kún un kí o sì ṣètò dimension àti measure.", "Fún un ní àkọlé tí ó sọ ohun tí ó fihàn àti àkókò rẹ̀.", "Ṣàyẹ̀wò pé àwọn bar bẹ̀rẹ̀ láti òdo."],
          words: [["Line chart", "chart tí ó fihàn bí nọ́mbà kan ṣe ń yí padà lórí àkókò."], ["Bar chart", "chart ti àwọn ọ̀pá tí ó ń fi àwọn ẹgbẹ́ wéra; column chart jẹ́ bar chart tí ó dúró ṣánṣán."], ["Pie chart", "òbìrí tí a gé sí ìpín tí ó fihàn àwọn apá nínú odidi."], ["Card / scorecard", "àpótí tí ó fi nọ́mbà ńlá kan hàn, bí àpapọ̀ títà."], ["Visual", "ọ̀rọ̀ Power BI fún chart, card, tábìlì tàbí máàpù."]],
          slides: [
            { title: "Jẹ́ kí chart bá ìbéèrè mu", bullets: ["Lórí àkókò: line chart", "Ìfiwéra ẹgbẹ́: bar chart tí a tò", "Ìpín nínú odidi: ìpín díẹ̀, tàbí bar", "Nọ́mbà kan: card tàbí scorecard"] },
            { title: "Kọ́ ọ", bullets: ["Power BI: yan visual kan, fa àwọn pápá sínú rẹ̀", "Data Studio: Add a chart, ṣètò dimension àti metric"] },
            { title: "Jẹ́ olóòótọ́", bullets: ["Àwọn bar ń bẹ̀rẹ̀ láti òdo", "Àkọlé sọ ohun tí ó fihàn àti ìgbà wo", "Àwọ̀ kan àyàfi tí àwọ̀ bá ní ìtumọ̀"] }
          ],
          tryIt: "Ní lílo dátà ilé-búrẹ́dì rẹ, kọ́ chart mẹ́ta: (1) àpapọ̀ títà fún ọjọ́ kọ̀ọ̀kan bí line chart, (2) àpapọ̀ títà fún ọjà kọ̀ọ̀kan bí bar chart tí a tò láti èyí tó tóbi jù, (3) àpapọ̀ títà bí card tàbí scorecard kan. Fún ọ̀kọ̀ọ̀kan ní àkọlé tó yé. Lẹ́yìn náà kọ gbólóhùn kan nípa ohun tí chart kọ̀ọ̀kan sọ fún ọ.",
          youCanNow: "yan line, bar, pie, card tàbí tábìlì tó bá ìbéèrè kan mu, kí o sì kọ́ ọ pẹ̀lú àkọlé tó yé.",
          quickCheck: [
            { objective: "O3", q: "Chart wo ló fihàn dáadáa jù bí títà ṣe yí padà lójoojúmọ́ ní oṣù yìí?", options: ["Pie chart", "Máàpù", "Card kan ṣoṣo", "Line chart"], answer: 3, why: "Line chart ń fi ìyípadà lórí àkókò hàn." },
            { objective: "O3", q: "O fẹ́ fi títà ọjà 8 wéra. Èwo ló yé jù?", options: ["Pie chart pẹ̀lú ìpín 8", "Bar chart tí a tò láti èyí tó tóbi jù sí èyí tó kéré jù", "Máàpù", "Tábìlì àwọn ọjọ́"], answer: 1, why: "Bar chart tí a tò ń mú ìfiwéra rọrùn; ìpín pie 8 ṣòro láti kà." }
          ],
          sources: [DATAPLUS, PL300]
        },
        {
          title: "Ṣíṣètò dashboard pẹ̀lú àwọn card àti àlẹ̀mọ́",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ́ dashboard ojú-ìwé kan pẹ̀lú àwọn card nọ́mbà pàtàkì, àwọn chart, àlẹ̀mọ́ ọjọ́ àti àlẹ̀mọ́ míì kan.",
          text: [
            "Àwọn ènìyàn máa ń ka ojú-iboju láti òkè lápá òsì. Fi àwọn card nọ́mbà pàtàkì sí ìlà kan ní òkè, chart tó ṣe pàtàkì jù sí abẹ́ wọn, àti àwọn àlàyé kíkún sísàlẹ̀. Fi àkọlé kún gbogbo ojú-ìwé náà àti àwọn ọjọ́ tí ó bò.",
            "Àlẹ̀mọ́ (filter) ń jẹ́ kí àwọn olùwò yí ohun tí wọ́n ń rí padà. Nínú Power BI, a ń pè wọ́n ní slicer: fi Slicer visual kún un kí o sì fi Date sínú rẹ̀, lẹ́yìn náà fi òmíì kún un fún Category. Nínú Data Studio, a ń pè wọ́n ní control: yan Add a control, yan Date range control, lẹ́yìn náà fi Drop-down list control kún un fún Category.",
            "Dán àwọn àlẹ̀mọ́ wò: yan ẹ̀ka kan kí o sì rí i dájú pé gbogbo card àti chart yí padà. Tí ọ̀kan kò bá yí padà, kò so mọ́ dátà kan náà.",
            "Fi àyè òfo sílẹ̀, to nǹkan dọ́gba, kí o sì yọ ohunkóhun tí kò ràn lọ́wọ́ láti dáhùn ìbéèrè náà kúrò. Lẹ́yìn náà ṣe ìdánwò ìṣẹ́jú kan: fi ojú-ìwé náà han ọ̀rẹ́ kan kí o sì béèrè ìbéèrè dashboard náà. Ṣé wọ́n lè dáhùn rẹ̀ láàárín ìṣẹ́jú kan?"
          ],
          steps: ["Fi àkọlé ojú-ìwé àti àwọn ọjọ́ tí ó bò kún un.", "Fi card nọ́mbà pàtàkì 3 sí 5 sí ìlà kan ní òkè.", "Fi chart pàtàkì sí abẹ́ àwọn card, àwọn chart míì sì sísàlẹ̀.", "Fi àlẹ̀mọ́ ọjọ́ kún un (slicer tàbí date range control).", "Fi àlẹ̀mọ́ míì kan kún un, bí Category.", "Dán an wò: yí àlẹ̀mọ́ kọ̀ọ̀kan padà kí o sì wo bí gbogbo card àti chart ṣe ń yí padà.", "Ṣe ìdánwò ìṣẹ́jú kan pẹ̀lú ẹlòmíì."],
          words: [["Ìṣètò ojú-ìwé (layout)", "ibi tí card àti chart kọ̀ọ̀kan wà lójú-ìwé."], ["Àlẹ̀mọ́ (filter)", "ohun èlò tí ó jẹ́ kí olùwò fi apá kan dátà nìkan hàn, bí oṣù kan."], ["Slicer", "orúkọ Power BI fún àlẹ̀mọ́ lójú-ìwé."], ["Control", "orúkọ Data Studio fún àlẹ̀mọ́ lójú-ìwé, bí date range control."]],
          slides: [
            { title: "Ìṣètò ojú-ìwé", bullets: ["Àwọn card nọ́mbà pàtàkì ní òkè", "Chart pàtàkì sí abẹ́ wọn, àlàyé kíkún sísàlẹ̀", "Àkọlé ojú-ìwé pẹ̀lú àwọn ọjọ́ tí ó bò"] },
            { title: "Àwọn àlẹ̀mọ́", bullets: ["Power BI: Slicer visual fún Date àti Category", "Data Studio: Date range control àti Drop-down list"] },
            { title: "Dán an wò", bullets: ["Yí àlẹ̀mọ́ kan padà: ṣé gbogbo nǹkan yí padà?", "Yọ ohunkóhun tí kò ràn lọ́wọ́ kúrò", "Ìdánwò ìṣẹ́jú kan pẹ̀lú ọ̀rẹ́ kan"] }
          ],
          tryIt: "Fi chart mẹ́ta rẹ láti Ẹ̀kọ́ 4 sí ojú-ìwé kan. Fi ó kéré tán card nọ́mbà pàtàkì kan míì kún un (fún àpẹẹrẹ iye ọjà tí a tà tàbí ìwọ̀n àárín títà), àlẹ̀mọ́ ọjọ́ àti àlẹ̀mọ́ Category. To gbogbo nǹkan dọ́gba. Lẹ́yìn náà béèrè ìbéèrè dashboard rẹ lọ́wọ́ ẹnìkan kí o sì ka àkókò tí ó gbà wọ́n láti dáhùn láti inú ojú-ìwé náà.",
          youCanNow: "ṣètò dashboard ojú-ìwé kan pẹ̀lú àwọn card nọ́mbà pàtàkì, chart àti àlẹ̀mọ́ tí ń ṣiṣẹ́, tí ẹnìkan lè kà láàárín ìṣẹ́jú kan.",
          quickCheck: [
            { objective: "O4", q: "Ibo ni àwọn card nọ́mbà pàtàkì sábà máa ń lọ?", options: ["Ní ìlà kan ní òkè", "Ní ìpamọ́ lójú-ìwé kejì", "Ní ìsàlẹ̀ pátápátá", "Nínú pie chart"], answer: 0, why: "Àwọn ènìyàn ń kà láti òkè lápá òsì, nítorí náà nọ́mbà pàtàkì ló ń kọ́kọ́ wá." },
            { objective: "O4", q: "O yan ẹ̀ka kan nínú àlẹ̀mọ́, ṣùgbọ́n chart kan kò yí padà. Kí ni ìyẹn túmọ̀ sí?", options: ["Dashboard náà ti parí", "Chart yẹn kò so mọ́ dátà tàbí àlẹ̀mọ́ kan náà", "Àlẹ̀mọ́ kì í yí chart padà láéláé", "O nílò ojú-iboju tó tóbi jù"], answer: 1, why: "Gbogbo card àti chart gbọ́dọ̀ dáhùn; èyí tí kò bá dáhùn nílò àtúnṣe." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO]
        },
        {
          title: "Ṣíṣàyẹ̀wò àwọn nọ́mbà àti pínpín láìléwu",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò àpapọ̀ 3 lórí dashboard pẹ̀lú dátà orísun, lẹ́yìn náà pín in pẹ̀lú àṣẹ wíwò nìkan àti àkópọ̀ kúkúrú.",
          text: [
            "Dashboard wúlò nìkan tí a bá lè gbẹ́kẹ̀lé e. Kí ẹnikẹ́ni tó rí i, ṣàyẹ̀wò ó kéré tán nọ́mbà 3. Àpẹẹrẹ: card náà sọ pé àpapọ̀ títà jẹ́ $1,240. Nínú ìwé rẹ, lo SUM lórí òpó Total fún àwọn ọjọ́ kan náà. Ṣé wọ́n dọ́gba? Lẹ́yìn náà ṣàyẹ̀wò ọjà kan àti ọjọ́ kan ní ọ̀nà kan náà.",
            "Tí nọ́mbà kan kò bá dọ́gba, wá àwọn ohun tí ó sábà máa ń fà á: àlẹ̀mọ́ kan ṣì wà lórí rẹ̀, àwọn àdàkọ ti padà wá, òpó kan jẹ́ ọ̀rọ̀ dípò nọ́mbà, àwọn ọjọ́ yàtọ̀, tàbí card náà ń lo Count dípò Sum.",
            "Pín in láìléwu. Nínú Data Studio, lo bọ́tìnnì Share kí o sì fún àwọn ènìyàn ní àṣẹ wíwò (view), kì í ṣe àṣẹ àtúnṣe (edit). Pẹ̀lú Power BI Desktop, kó ojú-ìwé náà jáde sí PDF tàbí fi fáìlì náà pamọ́ kí o sì fi ránṣẹ́ sí ẹni tó yẹ nìkan; títẹ̀jáde lórí ayélujára lè nílò àkáǹtì iṣẹ́ tàbí ti ilé-ìwé. Má ṣe fi ìsọfúnni gidi ti oníbàárà, aláìsàn tàbí òṣìṣẹ́ sínú dashboard àṣeṣe láéláé.",
            "Fi àkópọ̀ gbólóhùn 3 kún un: ohun tí dashboard náà fihàn, ohun pàtàkì jù tí o rí, àti ìgbésẹ̀ kan tí o dábàá. Àpẹẹrẹ: \"Èyí fi títà ilé-búrẹ́dì hàn fún October. Muffin ló mú owó wọlé jù, Sátidé sì ni ọjọ́ tí èrò pọ̀ jù. A lè ṣe muffin púpọ̀ sí i kí a sì fi òṣìṣẹ́ kan kún un ní Sátidé.\""
          ],
          steps: ["Mú gbogbo àlẹ̀mọ́ kúrò.", "Ṣàyẹ̀wò nọ́mbà 3 pẹ̀lú ìwé orísun: àpapọ̀, ọjà kan àti ọjọ́ kan.", "Tí ọ̀kan kò bá tọ́, ṣàyẹ̀wò àlẹ̀mọ́, àdàkọ, irú dátà, ọjọ́, àti Sum tàbí Count.", "Pín in pẹ̀lú àṣẹ wíwò nìkan, tàbí kó o jáde sí PDF.", "Kọ àkópọ̀ gbólóhùn 3: ohun tí ó fihàn, ohun pàtàkì tí o rí, ìgbésẹ̀ kan."],
          words: [["Ṣàyẹ̀wò òótọ́ (validate)", "rí i dájú pé nọ́mbà kan tọ́ nípa fífi í wé orísun rẹ̀."], ["Àṣẹ wíwò nìkan (view-only)", "àwọn ènìyàn lè wo dashboard náà ṣùgbọ́n wọn kò lè yí i padà."], ["Kó jáde (export)", "fi ẹ̀dà kan pamọ́ ní ìrísí míì, bí PDF."], ["Òye (insight)", "ohun tó wúlò tí o rí, tí ó ń ran ẹnìkan lọ́wọ́ láti pinnu ohun tí yóò ṣe."]],
          slides: [
            { title: "Ṣàyẹ̀wò kí o tó pín in", bullets: ["Mú àwọn àlẹ̀mọ́ kúrò", "Ṣàyẹ̀wò nọ́mbà 3 pẹ̀lú ìwé orísun", "Àpapọ̀, ọjà kan, ọjọ́ kan"] },
            { title: "Tí nọ́mbà kan kò bá tọ́", bullets: ["Àlẹ̀mọ́ kan ṣì wà lórí rẹ̀", "Àdàkọ tàbí nọ́mbà tí ó jẹ́ ọ̀rọ̀", "Ọjọ́ tí ó yàtọ̀, tàbí Count dípò Sum"] },
            { title: "Pín in láìléwu", bullets: ["Àṣẹ wíwò nìkan, kì í ṣe àtúnṣe", "Tàbí kó o jáde sí PDF", "Kò sí ìsọfúnni àdáni gidi nínú iṣẹ́ àṣeṣe"] },
            { title: "Kọ àkópọ̀ gbólóhùn 3", bullets: ["Ohun tí ó fihàn", "Ohun pàtàkì tí o rí", "Ìgbésẹ̀ kan tí o dábàá"] }
          ],
          tryIt: "Parí iṣẹ́ ìkẹyìn rẹ: ṣàyẹ̀wò nọ́mbà 3 lórí dashboard rẹ pẹ̀lú ìwé rẹ kí o sì kọ méjì-méjì kọ̀ọ̀kan sílẹ̀. Tún èyí tí kò dọ́gba ṣe. Lẹ́yìn náà pín in pẹ̀lú àṣẹ wíwò nìkan (Data Studio) tàbí kó PDF jáde (Power BI), kí o sì kọ àkópọ̀ gbólóhùn 3 rẹ. Fi rubric ṣe àmì fún ara rẹ kí o tó sọ pé o ti parí.",
          youCanNow: "ṣàyẹ̀wò àwọn nọ́mbà dashboard pẹ̀lú orísun rẹ̀, pín in láìléwu, kí o sì ṣàlàyé ohun tí ó fihàn ní gbólóhùn mẹ́ta.",
          quickCheck: [
            { objective: "O5", q: "Card rẹ sọ pé a ta ọjà 340, ṣùgbọ́n SUM ti Units nínú ìwé sọ 310. Kí ni o yẹ kí o kọ́kọ́ ṣàyẹ̀wò?", options: ["Àwọ̀ àwọn chart", "Font àkọlé ojú-ìwé", "Bóyá àlẹ̀mọ́ kan wà lórí rẹ̀ tàbí àwọn àdàkọ ti padà wá", "Ìmọ́lẹ̀ ojú-iboju"], answer: 2, why: "Àlẹ̀mọ́ àti àdàkọ ló sábà máa ń fa àpapọ̀ tí kò dọ́gba." },
            { objective: "O6", q: "Ọ̀gá rẹ nílò láti wo dashboard náà nìkan. Àṣẹ wo ni o máa fún un?", options: ["Ọ̀rọ̀ aṣínà rẹ", "Àṣẹ àtúnṣe", "Àṣẹ olówó", "Àṣẹ wíwò nìkan"], answer: 3, why: "Àṣẹ wíwò nìkan ń jẹ́ kí wọ́n rí i láìyí i padà lásìṣe." }
          ],
          sources: [DATA_STUDIO, DATAPLUS]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ́, ṣíṣàyẹ̀wò àti pínpín",
        questions: [
          { objective: "O3", q: "Chart wo ló ń fi nọ́mbà ńlá KAN hàn, bí àpapọ̀ títà oṣù yìí?", options: ["Line chart", "Card tàbí scorecard", "Máàpù", "Tábìlì ìlà 100"], answer: 1, why: "Card (Power BI) tàbí scorecard (Data Studio) ń fi nọ́mbà pàtàkì kan hàn." },
          { objective: "O3", q: "Àwọn ọ̀pá bar chart kan bẹ̀rẹ̀ láti 900 dípò 0. Kí ni ìṣòro rẹ̀?", options: ["Ìyàtọ̀ kékeré dà bí ẹni pé ó tóbi ju bí ó ti rí lọ", "Kò sí nǹkan; ó rẹwà jù", "Àwọn àwọ̀ kò tọ́", "Àkọlé ti gùn jù"], answer: 0, why: "Bar tí kò bẹ̀rẹ̀ láti òdo ń mú ìyàtọ̀ dà bí ẹni pé ó tóbi jù." },
          { objective: "O4", q: "Nínú Power BI, kí ni a ń pè àlẹ̀mọ́ lójú-ìwé?", options: ["Card", "Orísun", "Metric", "Slicer"], answer: 3, why: "Power BI ń pe àlẹ̀mọ́ ojú-ìwé ní slicer; Data Studio ń pè wọ́n ní control." },
          { objective: "O5", q: "Nọ́mbà mélòó ni o yẹ kí o ṣàyẹ̀wò pẹ̀lú orísun kí o tó pín in?", options: ["Kò sí; irinṣẹ́ náà máa ń tọ̀nà nígbà gbogbo", "Àkọlé ojú-ìwé nìkan", "Ó kéré tán 3, bí àpapọ̀, ọjà kan àti ọjọ́ kan", "Àwọn nọ́mbà tí ọ̀gá rẹ béèrè nípa wọn nìkan"], answer: 2, why: "Ṣíṣàyẹ̀wò nọ́mbà púpọ̀ ń mú àṣìṣe àlẹ̀mọ́, àdàkọ àti irú dátà." },
          { objective: "O6", q: "Gbólóhùn àkópọ̀ wo ló dára jù láti pín pẹ̀lú dashboard?", options: ["\"Àwọn chart kan nìyí.\"", "\"Muffin ló mú owó wọlé jù ní October, nítorí náà a lè ṣe púpọ̀ sí i ní Sátidé.\"", "\"Mo lo àwọ̀ púpọ̀.\"", "\"Wò ó fúnra rẹ.\""], answer: 1, why: "Àkópọ̀ tó dára sọ ohun tí a rí àti ìgbésẹ̀ tí a dábàá." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Kíkọ́ Dashboard Dátà (Power BI àti Data Studio)",
    questions: [
      { objective: "O1", q: "Kí ni dashboard?", options: ["Àkọsílẹ̀ ọ̀rọ̀ aṣínà", "Ojú-iboju kan ti nọ́mbà pàtàkì àti chart tí ó ń ran ẹnìkan lọ́wọ́ láti pinnu", "Irú àgbékalẹ̀ ìṣirò (formula) spreadsheet kan", "Ètò ẹ̀rọ ìtẹ̀wé"], answer: 1, why: "Dashboard ń fi àwọn nọ́mbà pàtàkì fún ìpinnu kan sí ojú-iboju kan." },
      { objective: "O1", q: "Èwo ni ìbéèrè dashboard tó yé?", options: ["\"Fi dátà hàn mí.\"", "\"Jẹ́ kí ó rẹwà.\"", "\"Gbogbo nǹkan nípa òwò náà.\"", "\"Àwọn ọjà wo ló ń mú owó wọlé jù lóṣooṣù?\""], answer: 3, why: "Ìbéèrè pàtó kan ni, tí dashboard lè dáhùn." },
      { objective: "O1", q: "Fún nọ́mbà pàtàkì kọ̀ọ̀kan, o ń kọ orúkọ rẹ̀, bí a ṣe ń ṣírò rẹ̀ àti:", options: ["Àkókò rẹ̀", "Àwọ̀ tí ó fẹ́ràn jù", "Iye owó irinṣẹ́ náà", "Ọ̀rọ̀ aṣínà rẹ"], answer: 0, why: "Nọ́mbà pàtàkì nílò àkókò, bí oṣù yìí, kí ó tó ní ìtumọ̀." },
      { objective: "O2", q: "Nínú tábìlì tó wà létòlétò, ìlà kọ̀ọ̀kan jẹ́:", options: ["Chart kan", "Àpapọ̀ kan", "Àkọsílẹ̀ kan, bí títà kan", "Àkọlé kan"], answer: 2, why: "Ìlà kan fún àkọsílẹ̀ kọ̀ọ̀kan àti òpó kan fún pápá kọ̀ọ̀kan ni tábìlì tó wà létòlétò." },
      { objective: "O2", q: "A kọ àwọn ọjọ́ inú ìwé rẹ bí \"10/3/26\" àti \"Oct 3\". Kí ni o máa ṣe?", options: ["Fi méjèèjì sílẹ̀", "Pa òpó ọjọ́ rẹ́", "Fi ọ̀nà kẹta kún un", "Ṣètò òpó náà kí gbogbo ọjọ́ jẹ́ ọjọ́ gidi ní ọ̀nà kan"], answer: 3, why: "Ìrísí ọjọ́ kan ń jẹ́ kí irinṣẹ́ náà pín sí ẹgbẹ́ kí ó sì ṣe àlẹ̀mọ́ nípa ọjọ́ dáadáa." },
      { objective: "O2", q: "Ibo ni o ti máa gba Power BI Desktop?", options: ["Ojú-òpó wẹ́ẹ̀bù gidi ti Microsoft", "Ìjápọ̀ nínú ọ̀rọ̀ ìránṣẹ́ láti ọ̀dọ̀ àjèjì", "Ojú-òpó ìgbàsílẹ̀ ọ̀fẹ́ èyíkéyìí", "Ìpolówó tí ó yọjú lójijì (pop-up)"], answer: 0, why: "Gba ètò kọ̀mpútà sílẹ̀ láti ojú-òpó gidi ti ilé-iṣẹ́ náà nìkan." },
      { objective: "O2", q: "Nínú Data Studio, báwo ni o ṣe ń so Google Sheet pọ̀?", options: ["Fi ìwé náà ránṣẹ́ sí Google lórí ímeèlì", "Ṣẹ̀dá data source pẹ̀lú Google Sheets connector", "Tẹ̀ ẹ́ jáde kí o sì ṣe àyẹ̀wò (scan) rẹ̀", "Tún gbogbo nọ́mbà tẹ̀ lẹ́ẹ̀kan sí i"], answer: 1, why: "Google Sheets connector ń so ìwé náà pọ̀ bí orísun dátà." },
      { objective: "O3", q: "Ìbéèrè wo ló bá line chart mu?", options: ["Ìpín wo nínú títà ni búrẹ́dì?", "Kí ni nọ́mbà fóònù wa?", "Báwo ni títà ọ̀sẹ̀ kọ̀ọ̀kan ṣe yí padà ní oṣù 3?", "Ṣọ́ọ̀bù wo ló wà ní ìlú wo?"], answer: 2, why: "Line chart ń fi ìyípadà lórí àkókò hàn." },
      { objective: "O3", q: "Ìbéèrè wo ló bá bar chart tí a tò mu?", options: ["Èwo nínú ọjà 6 wa ló tà jù?", "Kí ni àpapọ̀ títà lónìí?", "Aago mélòó ni ṣọ́ọ̀bù ń ṣí?", "Báwo ni títà ṣe yí padà ní wákàtí kọ̀ọ̀kan?"], answer: 0, why: "Bar chart ń fi àwọn ẹgbẹ́ wéra; títò ń jẹ́ kí èyí tó tóbi jù rọrùn láti rí." },
      { objective: "O3", q: "Ìgbà wo ni pie chart jẹ́ àṣàyàn tó bọ́gbọ́n mu?", options: ["Láti fi ìyípadà hàn ní oṣù 12", "Láti fi ìpín nínú àpapọ̀ hàn pẹ̀lú ìpín díẹ̀ nìkan", "Láti fi ọjà 15 wéra", "Láti fi nọ́mbà kan hàn"], answer: 1, why: "Pie ń fi àwọn apá nínú odidi hàn, ó sì ṣeé kà nìkan pẹ̀lú ìpín díẹ̀." },
      { objective: "O3", q: "Àkọlé chart tó dára:", options: ["Sọ pé \"Chart 1\"", "Wà ní òfo", "Wà ní font tí ó kéré jọjọ", "Sọ ohun tí ó fihàn àti àkókò rẹ̀"], answer: 3, why: "\"Títà fún ọjà kọ̀ọ̀kan, October\" sọ fún olùwò ohun tí ó ń rí gan-an." },
      { objective: "O4", q: "Nínú Data Studio, àlẹ̀mọ́ lójú-ìwé ni a ń pè ní:", options: ["Slicer", "Irú dátà", "Control", "Measure"], answer: 2, why: "Data Studio ń pe àlẹ̀mọ́ ojú-ìwé ní control, bí date range control." },
      { objective: "O4", q: "Kí ni ìdánwò ìṣẹ́jú kan?", options: ["Béèrè ìbéèrè dashboard lọ́wọ́ ẹnìkan kí o sì wò bóyá ó lè dáhùn rẹ̀ láti ojú-ìwé náà láàárín ìṣẹ́jú kan", "Kọ́ dashboard náà láàárín ìṣẹ́jú kan", "Fi ojú-ìwé náà hàn fún ìṣẹ́jú-àáyá kan", "Tún kọ̀mpútà bẹ̀rẹ̀"], answer: 0, why: "Tí olùwò bá lè dáhùn kíákíá, ìṣètò ojú-ìwé náà ń ṣiṣẹ́." },
      { objective: "O4", q: "O yí àlẹ̀mọ́ Category padà, gbogbo card àti chart sì yí padà. Èyí fihàn pé:", options: ["Dátà náà kò tọ́", "Àwọn àlẹ̀mọ́ ń ṣiṣẹ́ jákèjádò ojú-ìwé náà", "Dashboard náà nílò ojú-ìwé púpọ̀ sí i", "Àwọn àwọ̀ ti bà jẹ́"], answer: 1, why: "Gbogbo nǹkan tí ń yí padà pọ̀ túmọ̀ sí pé àlẹ̀mọ́ náà so mọ́ gbogbo visual." },
      { objective: "O5", q: "Àpapọ̀ dashboard jẹ́ $1,240, SUM nínú ìwé fún àwọn ọjọ́ kan náà sì jẹ́ $1,240. Èyí túmọ̀ sí pé:", options: ["A ti ṣàyẹ̀wò àpapọ̀ náà, ó sì dọ́gba", "Dashboard náà kò tọ́", "O yẹ kí o pa ìwé náà rẹ́", "O nílò irinṣẹ́ tuntun"], answer: 0, why: "Dídọ́gba pẹ̀lú orísun ni bí o ṣe ń fi ìdí òótọ́ nọ́mbà kan múlẹ̀." },
      { objective: "O5", q: "Card kan fi 52 hàn nígbà tí o ń retí àpapọ̀ títà $1,240. Ohun tí ó ṣeé ṣe kí ó fà á ni:", options: ["Àkọlé ojú-ìwé", "Àwọ̀ àwọn bar", "A ṣètò card náà sí Count dípò Sum", "Ìwọ̀n font"], answer: 2, why: "Count ń fúnni ní iye ìlà, kì í ṣe àpapọ̀ àwọn iye." },
      { objective: "O5", q: "Ìgbà wo ni o yẹ kí o ṣàyẹ̀wò àwọn nọ́mbà?", options: ["Kò yẹ rárá", "Lẹ́yìn tí ọ̀gá bá rí àṣìṣe nìkan", "Ẹ̀ẹ̀kan lọ́dún nìkan", "Kí ẹlòmíì tó rí dashboard náà"], answer: 3, why: "Ṣíṣàyẹ̀wò ṣáájú ń dènà nọ́mbà tí kò tọ́ láti yọrí sí ìpinnu tí kò tọ́." },
      { objective: "O6", q: "Kí ni kò gbọ́dọ̀ wọ inú dashboard àṣeṣe LÁÉLÁÉ?", options: ["Títà ilé-búrẹ́dì tí a ṣe sílẹ̀", "Orúkọ àti nọ́mbà fóònù àwọn oníbàárà gidi", "Àwọn ẹ̀ka ọjà", "Àwọn ọjọ́"], answer: 1, why: "Dátà àṣeṣe gbọ́dọ̀ jẹ́ èyí tí a ṣe sílẹ̀; a gbọ́dọ̀ dáàbò bo ìsọfúnni àdáni gidi." },
      { objective: "O6", q: "Kí ni ẹ̀kọ́ yìí ń fún ọ?", options: ["Ìwé-ẹ̀rí PL-300", "Ìwé-ẹ̀rí CompTIA Data+", "Ìwé àṣẹ ìwakọ̀", "Ìmúrasílẹ̀ àti dashboard àpẹẹrẹ (portfolio); ìdánwò náà ni a ń ṣe lọ́tọ̀"], answer: 3, why: "Ẹ̀kọ́ náà ń múra rẹ sílẹ̀; Microsoft àti CompTIA ló ń fúnni ní ìwé-ẹ̀rí wọn lẹ́yìn ìdánwò tiwọn." },
      { objective: "O6", q: "Àkópọ̀ gbólóhùn 3 tó dára ní ohun tí dashboard fihàn, ohun pàtàkì tí a rí àti:", options: ["Ìgbésẹ̀ kan tí a dábàá", "Àdírẹ́sì ilé rẹ", "Ìtàn irinṣẹ́ náà", "Àkọsílẹ̀ gbogbo ìlà"], answer: 0, why: "Ìgbésẹ̀ ń sọ ohun tí a rí di ìpinnu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 3, 6, 7, 9, 11, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      { name: "Ìbéèrè àti nọ́mbà pàtàkì", objective: "O1", notYet: "Kò sí ìbéèrè tó yé, tàbí nọ́mbà tí ó ju 5 lọ láìsí àkókò.", meets: "Ìbéèrè gbólóhùn kan, a dárúkọ àwọn olùwò, nọ́mbà pàtàkì 3 sí 5, ọ̀kọ̀ọ̀kan pẹ̀lú bí a ṣe ń ṣírò rẹ̀ àti àkókò rẹ̀.", exceeds: "Ó tún dárúkọ ìpinnu tí dashboard náà ń tì lẹ́yìn àti ìdí tí nọ́mbà kọ̀ọ̀kan fi ṣe pàtàkì sí i." },
      { name: "Dátà tó wà létòlétò", objective: "O2", notYet: "Àdàkọ, ìlà òfo, ìrísí ọjọ́ àdàlù tàbí nọ́mbà tí a fi pamọ́ bí ọ̀rọ̀ ṣì wà.", meets: "Ìlà àkọlé kan, ìlà kan fún àkọsílẹ̀ kọ̀ọ̀kan, irú dátà tó tọ́, kò sí àdàkọ.", exceeds: "Ó pa ìwé àkọ́kọ́ mọ́, ó sì kọ àkọsílẹ̀ kúkúrú ti gbogbo àtúnṣe tí ó ṣe." },
      { name: "Chart tó tọ́", objective: "O3", notYet: "Irú chart kò bá àwọn ìbéèrè mu, tàbí àkọlé kò sí.", meets: "Ó kéré tán chart 2 tí ó bá ìbéèrè wọn mu, pẹ̀lú àkọlé tó yé; àwọn bar bẹ̀rẹ̀ láti òdo.", exceeds: "Ó lè ṣàlàyé ìdí tí ó fi yan irú chart kọ̀ọ̀kan dípò òmíì." },
      { name: "Ìṣètò ojú-ìwé àti àlẹ̀mọ́", objective: "O4", notYet: "Àwọn card kò sí, tàbí àwọn àlẹ̀mọ́ kò yí gbogbo visual padà.", meets: "Card nọ́mbà pàtàkì 3 tàbí jù bẹ́ẹ̀ lọ ní òkè, àlẹ̀mọ́ ọjọ́ àti àlẹ̀mọ́ míì kan tí ń yí gbogbo nǹkan padà; ó yege ìdánwò ìṣẹ́jú kan.", exceeds: "Ìṣètò tó mọ́, tó dọ́gba, láìsí ohun àfikún; olùwò dáhùn ní ìṣẹ́jú tí ó kéré jù ìṣẹ́jú kan lọ gan-an." },
      { name: "A ṣàyẹ̀wò àwọn nọ́mbà", objective: "O5", notYet: "Kò sí nọ́mbà tí a ṣàyẹ̀wò pẹ̀lú orísun.", meets: "A ṣàyẹ̀wò nọ́mbà 3, a sì kọ wọ́n sílẹ̀; a tún èyí tí kò dọ́gba èyíkéyìí ṣe.", exceeds: "Ó ṣàlàyé ohun tí ó fa àìdọ́gba kan tí ó rí àti bí ó ṣe tún un ṣe." },
      { name: "A pín in láìléwu pẹ̀lú àkópọ̀", objective: "O6", notYet: "A pín in pẹ̀lú àṣẹ àtúnṣe, ó ní ìsọfúnni àdáni, tàbí kò sí àkópọ̀.", meets: "A pín in pẹ̀lú àṣẹ wíwò nìkan tàbí a kó o jáde sí PDF, kò sí ìsọfúnni àdáni, àkópọ̀ gbólóhùn 3 pẹ̀lú ohun tí a rí àti ìgbésẹ̀ kan.", exceeds: "Àkópọ̀ náà ti ṣetán láti kà sókè níbi ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́ bí iṣẹ́ àpẹẹrẹ (portfolio)." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì kọ́ dashboard tí ó dé ìpele rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi dashboard náà kún résumé, portfolio tàbí profaili LinkedIn wọn láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ fún tàbí yege PL-300 tàbí CompTIA Data+, tàbí bẹ̀rẹ̀ iṣẹ́ dátà tàbí ìròyìn, láàárín oṣù 6 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ olówò kékeré tí wọ́n lo dashboard láti ṣe ìpinnu nípa ọjà ìpamọ́, òṣìṣẹ́ tàbí iye owó"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì: Windows fún Power BI Desktop, tàbí kọ̀mpútà èyíkéyìí tí ó ní browser fún Data Studio",
      "Àkáǹtì Google ọ̀fẹ́ (Google Sheets àti Data Studio), àti Power BI Desktop láti ojú-òpó gidi ti Microsoft tí o bá ń lo Windows",
      "Dátà títà ilé-búrẹ́dì tí a ṣe sílẹ̀ (àwọn akẹ́kọ̀ọ́ ń tẹ ìlà 15 tàbí jù bẹ́ẹ̀ lọ) tàbí dátà míì tí a ṣe sílẹ̀ fún ẹ̀ka iṣẹ́ tiwọn",
      "Ìwé àti gègé fún ètò dashboard",
      "Nǹkan bí wákàtí 2 sí 3 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Kọ́kọ́ ṣàyẹ̀wò àwọn ẹ̀rọ: àwọn akẹ́kọ̀ọ́ tí ó ń lo Mac, Chromebook tàbí kọ̀mpútà ilé-ìkàwé ń lo Data Studio; àwọn tí ó ń lo Windows lè yan èyíkéyìí nínú irinṣẹ́ méjèèjì.",
      "Fún wọn ní ìdánwò ṣáájú kí Ẹ̀kọ́ 1 tó bẹ̀rẹ̀, kí o sì fi wé ìdánwò ìkẹyìn.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ pa ìwé ètò wọn láti Ẹ̀kọ́ 1 mọ́; òun ló ń darí gbogbo iṣẹ́ ìkẹyìn.",
      "Má ṣe lo dátà gidi ti oníbàárà, aláìsàn tàbí òṣìṣẹ́ nínú kíláàsì láéláé. Rán àwọn ológun tẹ́lẹ̀ àti àwọn tó ń wá iṣẹ́ létí láti lo nọ́mbà tí a ṣe sílẹ̀ nínú iṣẹ́ portfolio pẹ̀lú.",
      "Fi rubric ṣe àmì fún dashboard ìkẹyìn, kí o sì jẹ́ kí akẹ́kọ̀ọ́ kọ̀ọ̀kan gbé e kalẹ̀ láàárín ìṣẹ́jú-àáyá 60, bí àṣeṣe fún ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́.",
      "Tọ́ àwọn akẹ́kọ̀ọ́ sí àwọn ojú-ìwé gidi ti PL-300 àti CompTIA Data+ fún ohun tí ìdánwò ní lọ́wọ́lọ́wọ́, ìforúkọsílẹ̀ àti iye owó; má ṣe sọ iye owó láti orí."
    ]
  }
};
