"use strict";

// Koach Learn course (Yoruba translation of workforce/workforce-data-science-certificate.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const GOOGLE_DA = { name: "Coursera: Google Data Analytics Professional Certificate (ìwé-ẹ̀rí ọjọ́gbọ́n)", url: "https://www.coursera.org/professional-certificates/google-data-analytics" };
const IBM_DS = { name: "Coursera: IBM Data Science Professional Certificate (ìwé-ẹ̀rí ọjọ́gbọ́n)", url: "https://www.coursera.org/professional-certificates/ibm-data-science" };
const MS_PL300 = { name: "Microsoft Learn: Microsoft Certified: Power BI Data Analyst Associate (Ìdánwò PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const COLAB = { name: "Google Colab", url: "https://colab.research.google.com/" };

module.exports = {
  id: "workforce-data-science-certificate-yo",
  lang: "yo",
  translationOf: "workforce-data-science-certificate",
  category: "Workforce Development",
  name: "Ìmúra sílẹ̀ fún Ìwé-ẹ̀rí Ọjọ́gbọ́n nínú Ìmọ̀ Dátà (Data Science)",
  skills: "Yíyan ìwé-ẹ̀rí dátà tó tọ́, Ṣíṣe ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan, Fífọ dátà mọ́ àti ṣíṣe àkópọ̀ rẹ̀, Bíbéèrè ìbéèrè dátà àti dídáhùn rẹ̀ pẹ̀lú àwòrán àtẹ (chart), Kíkọ́ iṣẹ́ àkànṣe fún portfolio",
  outcome: "yan ìwé-ẹ̀rí dátà tí ó bá àfojúsùn rẹ mu, ṣe ètò ìkẹ́kọ̀ọ́ tí o lè tẹ̀lé, kí o sì parí iṣẹ́ àṣeṣe kékeré irú èyí tí àwọn ìwé-ẹ̀rí wọ̀nyí ń béèrè: mú dátà gidi kan, fọ̀ ọ́ mọ́, ṣe àkópọ̀ rẹ̀, ṣe àwòrán àtẹ kan tó yé, kí o sì kọ ohun tí ó túmọ̀ sí.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí ń wá iṣẹ́ àti àwọn òṣìṣẹ́ tí wọ́n fẹ́ bọ́ sí iṣẹ́ dátà, tàbí lo dátà nínú iṣẹ́ tí wọ́n ní, tí wọ́n sì ń ronú nípa ìwé-ẹ̀rí dátà orí ayélujára tí a mọ̀ dáadáa, bí Google Data Analytics Professional Certificate, IBM Data Science Professional Certificate, tàbí Power BI Data Analyst Associate ti Microsoft.",
    "Kò rọ́pò àwọn ètò yẹn. Ó ń múra rẹ sílẹ̀ fún wọn: o máa kọ́ ohun tí ọ̀kọ̀ọ̀kan ń kọ́ni, o máa yan èyí tó bá àfojúsùn rẹ àti ọ̀sẹ̀ rẹ mu, o sì máa ṣe àṣeṣe àwọn ọgbọ́n ìpìlẹ̀ tí gbogbo wọn ń lò, lórí iṣẹ́ àkànṣe kékeré tí o lè fi han àwọn agbanisíṣẹ́.",
    "Ìwé-ẹ̀rí jẹ́ ọ̀nà láti kọ́ ẹ̀kọ́ àti láti fi ohun tí o kọ́ hàn. Kò ṣèlérí iṣẹ́ tàbí àfikún owó oṣù. Ohun tó ń ṣèrànwọ́ jù ni pípa á mọ́, ṣíṣe àṣeṣe, àti ṣíṣàlàyé àwọn iṣẹ́ àkànṣe tìrẹ. Ṣàyẹ̀wò ojú-òpó ètò kọ̀ọ̀kan lónìí fún owó, àkókò àti ohun tí ó ń kọ́ni kí o tó forúkọ sílẹ̀.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, pẹ̀lú iṣẹ́ ọwọ́ kan. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Parí iṣẹ́ àkànṣe portfolio kékeré kan: yan dátà gbogbogbò ọ̀fẹ́ kan (tàbí tábìlì títà àpẹẹrẹ nínú Ẹ̀kọ́ 4), kọ ìbéèrè kan tó yé, fọ dátà náà mọ́ (tún àwọn àyè òfo, ìlà àdáwòkọ àti ìrísí ṣe), ṣe tábìlì àkópọ̀ kan, ṣe àwòrán àtẹ kan tí ó dáhùn ìbéèrè náà, kí o sì kọ àbájáde gbólóhùn mẹ́ta pẹ̀lú ààlà kan nínú dátà rẹ. Fi pamọ́ sínú Google Sheets, Excel tàbí Google Colab pẹ̀lú àkọlé kúkúrú àti àpèjúwe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ń wá iṣẹ́ àti àwọn òṣìṣẹ́ tí wọ́n fẹ́ bọ́ sí iṣẹ́ dátà, tàbí lo dátà nínú iṣẹ́ tí wọ́n ní, tí wọ́n sì ń ronú nípa ìwé-ẹ̀rí dátà orí ayélujára tí a mọ̀ dáadáa (Google Data Analytics, IBM Data Science tàbí Microsoft Power BI Data Analyst).",
    startingPoint: "Wọ́n lè lo kọ̀mpútà àti spreadsheet (ìwé-àtẹ ìṣirò) ìpìlẹ̀. Ọ̀pọ̀ jù lọ kò tíì fi àwọn ìwé-ẹ̀rí dátà wéra rí, kò tíì tẹ̀lé ètò ìkẹ́kọ̀ọ́ orí ayélujára gígùn, tàbí fọ dátà gidi mọ́, ṣe àkópọ̀ rẹ̀ kí wọ́n sì ṣe àwòrán àtẹ rẹ̀.",
    gap: "Ọgbọ́n dátà ń ṣí ọ̀pọ̀ iṣẹ́ sílẹ̀, ṣùgbọ́n àwọn ènìyàn sábà máa ń yan ìwé-ẹ̀rí tí kò tọ́, dúró ní agbedeméjì, tàbí parí láìní iṣẹ́ kankan láti fi hàn. Àwọn akẹ́kọ̀ọ́ nílò láti yan ìwé-ẹ̀rí tó bá àfojúsùn wọn mu, ṣe ètò ìkẹ́kọ̀ọ́ tí wọ́n lè tẹ̀lé, kí wọ́n sì parí iṣẹ́ àkànṣe portfolio kékeré irú èyí tí àwọn ìwé-ẹ̀rí wọ̀nyí ń béèrè.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé àwọn ọ̀rọ̀ dátà",
      "Ẹ̀rọ: a nílò kọ̀mpútà fún spreadsheet àti Google Colab; fóònù tó fún ṣíṣe ètò",
      "Owó àti àlàyé ẹ̀kọ́ máa ń yí padà, nítorí náà àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ojú-òpó àṣẹ ètò kọ̀ọ̀kan lónìí",
      "Ìsọfúnni àdáni: kò sí dátà àdáni oníbàárà nínú portfolio gbangba láìsí àṣẹ; dátà àpẹẹrẹ tàbí dátà gbogbogbò nìkan",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 pẹ̀lú àṣeṣe ọwọ́; àwọn ìwé-ẹ̀rí máa ń gba oṣù púpọ̀ lẹ́yìn ẹ̀kọ́ yìí"
    ],
    prerequisites: "Kò sí. Àṣeṣe spreadsheet ìpìlẹ̀ máa ṣèrànwọ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ibi iṣẹ́ kan tí o mọ̀", action: "ṣàpèjúwe ọ̀nà iṣẹ́ dátà kí o sì kọ ìbéèrè mẹ́ta tí dátà lè dáhùn níbẹ̀", standard: "kí o sì sàmì sí ọ̀kọ̀ọ̀kan bí iṣẹ́ analyst tàbí iṣẹ́ data scientist" },
    { id: "O2", condition: "Tí a bá fún ọ ní ìwé-ẹ̀rí dátà mẹ́ta tí a mọ̀ dáadáa", action: "fi ìpele, irinṣẹ́ pàtàkì, àkókò àti owó wọn wéra kí o sì yan èyí tó bá àfojúsùn rẹ mu", standard: "pẹ̀lú owó tí o mú láti ojú-òpó àṣẹ wọn lónìí" },
    { id: "O3", condition: "Fún ìwé-ẹ̀rí tí o yàn", action: "ṣe ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan pẹ̀lú àwọn àkókò ìkẹ́kọ̀ọ́ tó dájú àti àfojúsùn ọ̀sẹ̀ kan", standard: "tí ó bá iṣẹ́ àti ẹbí rẹ mu" },
    { id: "O4", condition: "Tí a bá fún ọ ní dátà kékeré kan tí ó ní ìṣòro", action: "wá àwọn àyè òfo, ìlà àdáwòkọ àti ìṣòro ìrísí, tún wọn ṣe, kí o sì kọ àkọsílẹ̀ ìfọmọ́", standard: "lẹ́yìn tí o ti kọ́kọ́ fi ẹ̀dà ti ìpilẹ̀ṣẹ̀ pamọ́" },
    { id: "O5", condition: "Tí a bá fún ọ ní dátà tí a ti fọ̀ mọ́ àti ìbéèrè kan", action: "ṣe tábìlì àkópọ̀ kan àti àwòrán àtẹ kan tí ó dáhùn ìbéèrè náà", standard: "pẹ̀lú irú àwòrán àtẹ tó tọ́ àti àkọlé tí ó sọ ìdáhùn" },
    { id: "O6", condition: "Ní lílo àwòrán àtẹ àti àkópọ̀ rẹ", action: "kọ àbájáde gbólóhùn mẹ́ta pẹ̀lú ààlà kan kí o sì fi pamọ́ bí iṣẹ́ àkànṣe portfolio", standard: "pẹ̀lú àkọlé kúkúrú àti àpèjúwe, láìsí dátà àdáni" }
  ],
  chapters: [
    {
      name: "Orí 1: Yíyan ìwé-ẹ̀rí rẹ àti ṣíṣe ètò láti parí",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí data analyst àti data scientist ń ṣe",
          minutes: 5,
          goal: "Ṣàpèjúwe ọ̀nà iṣẹ́ dátà kí o sì sọ apá tí ó wù ọ́ jù.",
          text: [
            "Iṣẹ́ dátà ń tẹ̀lé ọ̀nà tó rọrùn: béèrè ìbéèrè, kó dátà jọ, fọ̀ ọ́ mọ́, ṣàwárí kí o sì ṣe ìtúpalẹ̀ rẹ̀, fi hàn pẹ̀lú àwòrán àtẹ, kí o sì sọ ohun tí ó túmọ̀ sí fún àwọn ẹlòmíì. Ètò Google ṣàpèjúwe èrò kan náà ní àwọn ìgbésẹ̀ tirẹ̀.",
            "Data analyst (olùtúpalẹ̀ dátà) sábà máa ń ṣiṣẹ́ lórí ohun tí ó ti ṣẹlẹ̀: \"Ọjà wo ló tà jù ní oṣù tó kọjá?\" Wọ́n ń lo spreadsheet, SQL (èdè fún bíbéèrè ìbéèrè lọ́wọ́ database) àti àwọn irinṣẹ́ dashboard bí Tableau tàbí Power BI.",
            "Data scientist (onímọ̀ dátà) ń ṣe ìyẹn náà, ó sì tún ń kọ́ àwọn model tí ó ń sọ tẹ́lẹ̀ tàbí tí ó ń pín nǹkan sí ẹgbẹ́: \"Àwọn oníbàárà wo ló lè dẹ́kun rírà?\" Wọ́n sábà máa ń kọ kóòdù ní Python, wọ́n sì ń lo ìṣirò púpọ̀ sí i. Ọ̀pọ̀ ènìyàn bẹ̀rẹ̀ bí analyst, wọ́n sì dàgbà sí data science."
          ],
          words: [["Dátà (data set)", "àkójọ dátà, tí ó sábà máa ń jẹ́ tábìlì tí ó ní ìlà àti òpó."], ["SQL", "Structured Query Language: èdè fún yíyọ dátà jáde láti inú database."], ["Model", "ètò kọ̀mpútà tí ó ń kọ́ àpẹẹrẹ láti inú dátà láti sọ tẹ́lẹ̀ tàbí pín nǹkan sí ẹgbẹ́."], ["Dashboard", "ojú-ewé àwọn àwòrán àtẹ tí ó ń yí padà bí dátà ṣe ń yí padà."]],
          slides: [
            { title: "Ọ̀nà iṣẹ́ dátà", bullets: ["Béèrè ìbéèrè", "Kó dátà jọ kí o sì fọ̀ ọ́ mọ́", "Ṣe ìtúpalẹ̀ rẹ̀ kí o sì ṣe àwòrán àtẹ rẹ̀", "Sọ ohun tí ó túmọ̀ sí"] },
            { title: "Data analyst", bullets: ["Ó ń ṣàlàyé ohun tí ó ṣẹlẹ̀", "Spreadsheet, SQL, Tableau tàbí Power BI", "\"Ọjà wo ló tà jù ní oṣù tó kọjá?\""] },
            { title: "Data scientist", bullets: ["Ó tún ń sọ tẹ́lẹ̀ ó sì ń pín nǹkan pẹ̀lú model", "Python àti ìṣirò púpọ̀ sí i, ní ọ̀pọ̀ ìgbà", "\"Àwọn oníbàárà wo ló lè dẹ́kun rírà?\""] }
          ],
          tryIt: "Ronú nípa iṣẹ́ tí o ń ṣe báyìí tàbí èyí tí o ṣe kẹ́yìn (ṣọ́ọ̀bù, ilé ìkẹ́rùsí, ilé ìwòsàn, ilé oúnjẹ). Kọ ìbéèrè mẹ́ta tí dátà lè dáhùn níbẹ̀, bí \"Wákàtí wo ni èrò pọ̀ jù?\" Sàmì sí ọ̀kọ̀ọ̀kan \"analyst\" tàbí \"data scientist\".",
          youCanNow: "ṣàpèjúwe ọ̀nà iṣẹ́ dátà àti ìyàtọ̀ láàárín data analyst àti data scientist.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ tí ó wọ́pọ̀ nínú ọ̀nà iṣẹ́ dátà?", options: ["Ṣe àwòrán àtẹ", "Fọ dátà mọ́", "Kọ́ model", "Béèrè ìbéèrè"], answer: 3, why: "Iṣẹ́ dátà ń bẹ̀rẹ̀ pẹ̀lú ìbéèrè tó yé, èyí tí ó ń darí gbogbo ìgbésẹ̀ tó tẹ̀lé e." },
            { objective: "O1", q: "Ní ṣọ́ọ̀bù rẹ, o fẹ́ mọ wákàtí tí èrò pọ̀ jù. Iṣẹ́ ta ni irú èyí?", options: ["Data scientist nìkan", "Data analyst", "Kò sí ẹni kankan; a kò lè dáhùn rẹ̀", "Olùkọ kóòdù kọ̀mpútà nìkan"], answer: 1, why: "Ṣíṣàpèjúwe ohun tí ó ṣẹlẹ̀, bí àwọn wákàtí tí èrò pọ̀, jẹ́ iṣẹ́ analyst gan-an." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fífi àwọn ìwé-ẹ̀rí dátà tí a mọ̀ dáadáa wéra",
          minutes: 6,
          goal: "Fi ìwé-ẹ̀rí dátà mẹ́ta tí a mọ̀ káàkiri wéra kí o sì yan èyí tó bá àfojúsùn rẹ mu.",
          text: [
            "Google Data Analytics Professional Certificate (lórí Coursera): ẹ̀kọ́ 9 tí ó tẹ̀lé ara wọn fún àwọn olùbẹ̀rẹ̀, kò nílò ìrírí. Ojú-òpó rẹ̀ dárúkọ spreadsheet, SQL, Tableau àti ìgbékalẹ̀ (presentation), FAQ rẹ̀ sì sọ pé ó ń kọ́ni ní Python. Ó dábàá nǹkan bí oṣù 6 ní wákàtí 10 lọ́sẹ̀.",
            "IBM Data Science Professional Certificate (lórí Coursera): ẹ̀kọ́ 12 tí ó tẹ̀lé ara wọn fún àwọn olùbẹ̀rẹ̀. Ojú-òpó rẹ̀ dárúkọ Python, SQL, Jupyter àti àwọn library bí Pandas, NumPy, Matplotlib àti Scikit-learn, ó sì ń kọ́ni ní ìtúpalẹ̀ dátà, fífi dátà hàn ní àwòrán, àti àwọn model machine learning. Ó dábàá nǹkan bí oṣù 4 ní wákàtí 10 lọ́sẹ̀.",
            "Microsoft Certified: Power BI Data Analyst Associate: ìwé-ẹ̀rí ìpele àárín tí o máa gbà nípa yíyege Ìdánwò PL-300, ìdánwò tí olùbojútó ń ṣọ́ (proctored). Ó ń dán ṣíṣètò, ṣíṣe model, fífi hàn ní àwòrán àti ìtúpalẹ̀ dátà wò nínú Power BI, o sì máa ń sọ ọ́ dọ̀tun ní gbogbo oṣù 12 lọ́fẹ̀ẹ́ lórí Microsoft Learn.",
            "Owó, àkókò àti àkọsílẹ̀ ẹ̀kọ́ máa ń yí padà, àwọn ètò kan sì wà nínú subscription (owó ìforúkọsílẹ̀ oṣooṣù) tàbí wọ́n wà lọ́fẹ̀ẹ́ nípasẹ̀ ilé-ìkàwé, àjọ ìdàgbàsókè òṣìṣẹ́ tàbí ìrànlọ́wọ́ owó. Ṣí ojú-òpó àṣẹ ọ̀kọ̀ọ̀kan kí o sì ṣàyẹ̀wò kí o tó forúkọ sílẹ̀. Kò sí ìwé-ẹ̀rí kankan tí ó ṣe ìdánilójú iṣẹ́."
          ],
          steps: ["Kọ àfojúsùn rẹ: analyst, data scientist, tàbí lílo dátà nínú iṣẹ́ tí o ní báyìí.", "Ṣí ojú-òpó àṣẹ ìwé-ẹ̀rí kọ̀ọ̀kan.", "Kọ ìpele rẹ̀, àwọn irinṣẹ́, gígùn rẹ̀ àti owó rẹ̀ lónìí sílẹ̀.", "Béèrè lọ́wọ́ ibùdó ìrànlọ́wọ́ iṣẹ́ tàbí ilé-ìkàwé tó wà nítòsí rẹ nípa àǹfààní ọ̀fẹ́.", "Yan ọ̀kan, kí o sì kọ ìdí rẹ̀."],
          words: [["Professional certificate (ìwé-ẹ̀rí ọjọ́gbọ́n)", "àwọn ẹ̀kọ́ orí ayélujára tí ó tẹ̀lé ara wọn láti ilé-iṣẹ́ tàbí ilé-ẹ̀kọ́ kan, tí ó parí pẹ̀lú ìwé-ẹ̀rí."], ["Proctored exam", "ìdánwò tí olùbojútó kan ń ṣọ́, lójúkojú tàbí lórí ayélujára, láti dènà màgòmágó."], ["Python", "èdè kóòdù kọ̀mpútà tí ó gbajúmọ̀, tí a ń lò nínú data science."]],
          slides: [
            { title: "Google Data Analytics", bullets: ["Ẹ̀kọ́ 9 lórí Coursera, ìpele olùbẹ̀rẹ̀", "Spreadsheet, SQL, Tableau; FAQ sọ pé Python náà wà", "Nǹkan bí oṣù 6 ní wákàtí 10 lọ́sẹ̀ (gẹ́gẹ́ bí ojú-òpó rẹ̀)"] },
            { title: "IBM Data Science", bullets: ["Ẹ̀kọ́ 12 lórí Coursera, ìpele olùbẹ̀rẹ̀", "Python, SQL, Jupyter, Pandas, Scikit-learn", "Nǹkan bí oṣù 4 ní wákàtí 10 lọ́sẹ̀ (gẹ́gẹ́ bí ojú-òpó rẹ̀)"] },
            { title: "Microsoft Power BI Data Analyst", bullets: ["Ìpele àárín: yege Ìdánwò PL-300", "Ṣètò, ṣe model, fi hàn ní àwòrán, kí o sì túpalẹ̀ nínú Power BI", "Sọ ọ́ dọ̀tun lọ́fẹ̀ẹ́ ní gbogbo oṣù 12 lórí Microsoft Learn"] },
            { title: "Kí o tó forúkọ sílẹ̀", bullets: ["Ṣàyẹ̀wò owó àti àkókò lórí ojú-òpó àṣẹ", "Béèrè nípa àǹfààní ọ̀fẹ́: ilé-ìkàwé, ibùdó iṣẹ́, ìrànlọ́wọ́", "Kò sí ìwé-ẹ̀rí tí ó ṣe ìdánilójú iṣẹ́"] }
          ],
          sources: [GOOGLE_DA, IBM_DS, MS_PL300],
          tryIt: "Ṣe tábìlì ìfiwéra ìlà mẹ́ta: ìwé-ẹ̀rí, ìpele, irinṣẹ́ pàtàkì, àkókò, owó lónìí (láti ojú-òpó àṣẹ). Fa òbìrí yí èyí tó bá àfojúsùn rẹ mu, kí o sì kọ gbólóhùn kan tí ó sọ ìdí rẹ̀.",
          youCanNow: "fi àwọn ìwé-ẹ̀rí dátà Google, IBM àti Microsoft wéra kí o sì yan èyí tó bá àfojúsùn rẹ mu.",
          quickCheck: [
            { objective: "O2", q: "Kí ni gbígba ìwé-ẹ̀rí dátà ṣe ìdánilójú rẹ̀?", options: ["Kò sí nǹkan kan; ó ń fi ohun tí o kọ́ hàn", "Iṣẹ́ tí wọ́n fi lọ̀ ọ́", "Àfikún owó oṣù", "Oyè yunifásítì"], answer: 0, why: "Ìwé-ẹ̀rí ń fi ọgbọ́n hàn; kò ṣe ìdánilójú iṣẹ́." },
            { objective: "O2", q: "Ọ̀rẹ́ kan sọ pé ìwé-ẹ̀rí kan ń náni ní iye owó kan lóṣù. Kí ni o máa ṣe kí o tó forúkọ sílẹ̀?", options: ["Gba ọ̀rẹ́ rẹ gbọ́", "Béèrè iye owó lọ́wọ́ AI", "Ṣàyẹ̀wò owó náà lórí ojú-òpó àṣẹ ètò náà lónìí", "Forúkọ sílẹ̀ kí o sì mọ̀ ọ́n lẹ́yìn náà"], answer: 2, why: "Owó máa ń yí padà, nítorí náà o máa ṣàyẹ̀wò ojú-òpó àṣẹ ní àkókò tí o bá ń forúkọ sílẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe ètò ìkẹ́kọ̀ọ́ tí o máa tẹ̀lé",
          minutes: 5,
          goal: "Ṣe ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan tí ó bá iṣẹ́ àti ẹbí rẹ mu.",
          text: [
            "Ọ̀pọ̀ jù lọ àwọn tí kò parí ìwé-ẹ̀rí dúró nítorí pé ayé dí wọn lọ́wọ́, kì í ṣe nítorí pé ó le jù. Ètò tí a kọ sílẹ̀, pẹ̀lú àwọn àkókò tó dájú, ń jẹ́ kí ó rọrùn púpọ̀ láti parí.",
            "Bẹ̀rẹ̀ pẹ̀lú ọ̀sẹ̀ rẹ gan-an. Tí o bá ń ṣiṣẹ́ ní ìyípo (shift), yan àwọn àkókò ìkẹ́kọ̀ọ́ tó bá a mu: fún àpẹẹrẹ, àkókò ìṣẹ́jú 45 mẹ́ta láàárín ọ̀sẹ̀ àti àkókò wákàtí 2 kan ní òpin ọ̀sẹ̀. Ìkẹ́kọ̀ọ́ kúkúrú tí ó ń bá a lọ déédéé dára ju ìkẹ́kọ̀ọ́ gígùn kan ní òpin ọ̀sẹ̀.",
            "Ní ọ̀sẹ̀ kọ̀ọ̀kan, ní àfojúsùn kékeré kan tí o lè sàmì sí pé o ti ṣe: \"parí module 2 àti ìdánwò rẹ̀\". Kọ àkọsílẹ̀ ní ọ̀rọ̀ ara rẹ, kí o sì ṣe gbogbo lab ọwọ́: inú lab ni a ti ń kọ́ ọgbọ́n náà. Olùrànlọ́wọ́ AI lè ṣàlàyé èrò tó rú ọ lójú ní ọ̀rọ̀ tó rọrùn sí i tàbí bi ọ́ ní ìbéèrè, ṣùgbọ́n ìwọ fúnra rẹ ni kí o ṣe iṣẹ́ tí wọ́n ń fún ní máàkì, kí o sì tẹ̀lé òfin òtítọ́ ètò náà."
          ],
          steps: ["Kọ àwọn wákàtí rẹ tí kò ṣeé yí padà sílẹ̀: iṣẹ́, ẹbí, oorun.", "Yan àkókò ìkẹ́kọ̀ọ́ 3-5 lọ́sẹ̀ kí o sì fi wọ́n sínú kàlẹ́ńdà rẹ.", "Ní àfojúsùn ọ̀sẹ̀ kan tí o lè sàmì sí pé o ti ṣe.", "Ní kí ọ̀rẹ́ kan tàbí olùrànlọ́wọ́ AI bi ọ́ ní ìbéèrè lórí àkọsílẹ̀ rẹ.", "Ṣàtúnyẹ̀wò ní gbogbo ọjọ́ Àìkú kí o sì ṣe àtúnṣe."],
          words: [["Àkókò ìkẹ́kọ̀ọ́ (study block)", "àkókò tó dájú nínú kàlẹ́ńdà rẹ fún kíkẹ́kọ̀ọ́."], ["Lab", "iṣẹ́ àṣeṣe ọwọ́ níbi tí o ti ń ṣe àṣeṣe ọgbọ́n kan lórí dátà gidi tàbí kóòdù."]],
          slides: [
            { title: "Ìdí tí ètò fi ṣe pàtàkì", bullets: ["Àwọn ènìyàn máa ń dúró nígbà tí ayé bá dí wọn lọ́wọ́", "Ètò tí a kọ sílẹ̀ pẹ̀lú àkókò tó dájú ń ràn ọ́ lọ́wọ́ láti parí"] },
            { title: "Jẹ́ kí ó bá ọ̀sẹ̀ rẹ mu", bullets: ["Àkókò kúkúrú 3-5 dára ju ìkẹ́kọ̀ọ́ gígùn kan lọ", "Àpẹẹrẹ: àkókò ìṣẹ́jú 45 mẹ́ta láàárín ọ̀sẹ̀", "Pẹ̀lú àkókò wákàtí 2 kan ní òpin ọ̀sẹ̀"] },
            { title: "Ní ọ̀sẹ̀ kọ̀ọ̀kan", bullets: ["Àfojúsùn kékeré kan tí o lè sàmì sí", "Ṣe gbogbo lab ọwọ́", "AI lè bi ọ́ ní ìbéèrè; ìwọ fúnra rẹ ni kí o ṣe iṣẹ́ máàkì"] }
          ],
          tryIt: "Fi àkókò ìkẹ́kọ̀ọ́ mẹ́rin fún ọ̀sẹ̀ tó ń bọ̀ sínú kàlẹ́ńdà fóònù tàbí ti ìwé rẹ. Kọ àfojúsùn ọ̀sẹ̀ kan láti inú ìwé-ẹ̀rí tí o yàn, fún àpẹẹrẹ \"parí module àkọ́kọ́\".",
          youCanNow: "ṣe ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan pẹ̀lú àwọn àkókò tó dájú àti àfojúsùn tí o lè sàmì sí pé o ti ṣe.",
          quickCheck: [
            { objective: "O3", q: "Níbo ni a ti ń kọ́ ọgbọ́n gidi nínú ẹ̀kọ́ orí ayélujára?", options: ["Wíwo fídíò ní ìyára ìlọ́po méjì", "Kíka ìpolówó ẹ̀kọ́ náà", "Ṣíṣe àwọn lab ọwọ́", "Fífò lọ sí ìdánwò ìkẹyìn"], answer: 2, why: "Àṣeṣe nínú lab ló ń kọ́ ọgbọ́n tí àwọn agbanisíṣẹ́ fẹ́ rí." },
            { objective: "O3", q: "O ń ṣiṣẹ́ ìyípo alẹ́. Ètò ìkẹ́kọ̀ọ́ wo ni o máa kọ?", options: ["Àwọn àkókò ìkẹ́kọ̀ọ́ tó dájú nínú kàlẹ́ńdà rẹ tí ó bá ìyípo iṣẹ́ rẹ mu, pẹ̀lú àfojúsùn ọ̀sẹ̀ kan", "Kẹ́kọ̀ọ́ nígbàkígbà tí o bá ní ọjọ́ òfo", "Kẹ́kọ̀ọ́ fún wákàtí mẹ́jọ ní alẹ́ kan lóṣooṣù", "Dúró títí àkókò iṣẹ́ rẹ yóò fi yí padà"], answer: 0, why: "Àwọn àkókò déédéé nínú kàlẹ́ńdà rẹ pẹ̀lú àfojúsùn ni ètò tí ó ṣeé ṣe jù láti ṣiṣẹ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Yíyan ìwé-ẹ̀rí rẹ àti ṣíṣe ètò láti parí",
        questions: [
          { objective: "O1", q: "Ìbéèrè wo ló jọ iṣẹ́ data analyst jù?", options: ["Báwo ni mo ṣe lè tún ẹ́ńjìnnì mọ́tò ṣe?", "Ọjà wo ló tà jù ní oṣù tó kọjá?", "Kí ni kí n sè lálẹ́ òní?", "Ta ló máa borí nínú eré náà?"], answer: 1, why: "Àwọn analyst ń ṣàlàyé ohun tí ó ṣẹlẹ̀ ní lílo dátà tí ó ti wà." },
          { objective: "O2", q: "Ìwé-ẹ̀rí wo ni a ń gbà nípa yíyege Ìdánwò PL-300?", options: ["Google Data Analytics Professional Certificate", "IBM Data Science Professional Certificate", "Ìwé-ẹ̀rí ilé-ẹ̀kọ́ girama", "Microsoft Certified: Power BI Data Analyst Associate"], answer: 3, why: "Power BI Data Analyst Associate ti Microsoft ni a ń gbà nípa yíyege PL-300." },
          { objective: "O2", q: "Àfojúsùn rẹ ni láti kọ́ àwọn model tí ó ń sọ tẹ́lẹ̀ ní Python. Àwọn kókó ẹ̀kọ́ ètò wo ló bá a mu jù?", options: ["IBM Data Science Professional Certificate", "Ẹ̀kọ́ títẹ̀ ọ̀rọ̀ (typing)", "Ìwé-àṣẹ forklift", "Káàdì olùtọ́jú oúnjẹ"], answer: 0, why: "Ètò IBM ń kọ́ni ní Python, Scikit-learn àti àwọn model machine learning." },
          { objective: "O2", q: "Owó ètò kan jẹ́ $49 lóṣù ní ọdún tó kọjá. Kí ni o máa ṣe báyìí?", options: ["Rò pé ó ṣì jẹ́ bẹ́ẹ̀", "Béèrè lọ́wọ́ àjèjì kan lórí ayélujára", "Ṣàyẹ̀wò ojú-òpó àṣẹ lónìí", "Má ṣe ṣàyẹ̀wò"], answer: 2, why: "Owó máa ń yí padà; ojú-òpó àṣẹ ló ní owó ti ìsinsìnyí." },
          { objective: "O3", q: "Ètò ìkẹ́kọ̀ọ́ wo ló ṣeé ṣe jù láti ṣiṣẹ́ fún ẹni tí ń ṣiṣẹ́ ìyípo?", options: ["Kẹ́kọ̀ọ́ wákàtí 10 lẹ́ẹ̀kan lóṣù", "Kẹ́kọ̀ọ́ nígbà tí ó bá wù ọ́ nìkan", "Àkókò ìṣẹ́jú 45 mẹ́ta láàárín ọ̀sẹ̀ àti àkókò kan ní òpin ọ̀sẹ̀", "Fo àwọn lab kí o lè fi àkókò pamọ́"], answer: 2, why: "Àwọn àkókò kúkúrú déédéé nínú kàlẹ́ńdà rẹ rọrùn láti tẹ̀lé." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe àṣeṣe àwọn ọgbọ́n ìpìlẹ̀",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fífọ dátà mọ́",
          minutes: 6,
          goal: "Wá àwọn àyè òfo, ìlà àdáwòkọ àti ìṣòro ìrísí nínú dátà kékeré kan kí o sì tún wọn ṣe.",
          text: [
            "Dátà gidi máa ń dàrú. Kí o tó ṣe ìtúpalẹ̀, o máa fọ̀ ọ́ mọ́. Gbogbo ìwé-ẹ̀rí tí a sọ lókè ló ń lo àkókò lórí èyí, nítorí pé dátà tí kò tọ́ ń fúnni ní ìdáhùn tí kò tọ́.",
            "Àwọn ìṣòro tí ó wọ́pọ̀: àwọn sẹ́ẹ̀lì òfo, ìlà kan náà lẹ́ẹ̀méjì (àdáwòkọ), nǹkan kan náà tí a kọ ní ọ̀nà tí ó yàtọ̀ (\"CA\", \"Calif.\", \"California\"), nọ́mbà tí a fi pamọ́ bí ọ̀rọ̀, àti ọjọ́ tí a kọ ní ìrísí tí ó dàpọ̀.",
            "Nínú Google Sheets tàbí Excel, o lè to (sort) kí o sì sẹ́ (filter) láti wá àwọn ìṣòro, lo Remove duplicates, lo Find and replace láti mú kí orúkọ bá ara wọn mu, kí o sì yí ìrísí òpó kan padà sí nọ́mbà tàbí ọjọ́. Fi ẹ̀dà ti ìpilẹ̀ṣẹ̀ pamọ́, kí o sì kọ ìyípadà kọ̀ọ̀kan tí o ṣe sílẹ̀, kí àwọn ẹlòmíì lè gbẹ́kẹ̀lé iṣẹ́ rẹ."
          ],
          steps: ["Fi ẹ̀dà dátà ti ìpilẹ̀ṣẹ̀ pamọ́.", "To kí o sì sẹ́ òpó kọ̀ọ̀kan láti rí àwọn àyè òfo àti iye tí kò bá ìyókù mu.", "Yọ àwọn ìlà àdáwòkọ kúrò.", "Mú kí àwọn ìkọ̀wé bá ara wọn mu pẹ̀lú Find and replace.", "Ṣètò ìrísí nọ́mbà àti ọjọ́.", "Kọ àkọsílẹ̀ kúkúrú ti gbogbo ìyípadà."],
          words: [["Fífọ dátà mọ́ (data cleaning)", "títún àwọn àṣìṣe nínú dátà ṣe kí o tó ṣe ìtúpalẹ̀ rẹ̀."], ["Àdáwòkọ (duplicate)", "ìlà tí ó farahàn ju ẹ̀ẹ̀kan lọ."], ["Àkọsílẹ̀ ìfọmọ́ (cleaning log)", "àkọsílẹ̀ gbogbo ìyípadà tí o ṣe sí dátà náà."]],
          slides: [
            { title: "Ìdí tí a fi ń kọ́kọ́ fọ̀ ọ́ mọ́", bullets: ["Dátà tí ó dàrú ń fúnni ní ìdáhùn tí kò tọ́", "Gbogbo ìwé-ẹ̀rí dátà ló ń kọ́ni ní èyí"] },
            { title: "Àwọn ìṣòro tí ó wọ́pọ̀", bullets: ["Sẹ́ẹ̀lì òfo àti ìlà àdáwòkọ", "\"CA\", \"Calif.\", \"California\"", "Nọ́mbà bí ọ̀rọ̀; ìrísí ọjọ́ tí ó dàpọ̀"] },
            { title: "Bí a ṣe ń tún wọn ṣe", bullets: ["To kí o sì sẹ́ láti wá ìṣòro", "Remove duplicates; Find and replace", "Ṣètò ìrísí nọ́mbà àti ọjọ́"] },
            { title: "Jẹ́ ẹni tí a lè gbẹ́kẹ̀lé", bullets: ["Fi ẹ̀dà ti ìpilẹ̀ṣẹ̀ pamọ́", "Kọ àkọsílẹ̀ gbogbo ìyípadà"] }
          ],
          tryIt: "Ṣe tábìlì kékeré ti títà 15: Ọjọ́ (Date), Ọjà (Item), Ṣọ́ọ̀bù (Store), Iye owó (Amount). Fi ìlà àdáwòkọ 2, iye owó òfo kan àti ìkọ̀wé méjì ti ṣọ́ọ̀bù kan sínú rẹ̀. Lẹ́yìn náà fọ̀ ọ́ mọ́ kí o sì kọ àkọsílẹ̀ ìfọmọ́ rẹ.",
          youCanNow: "wá àwọn ìṣòro dátà tí ó wọ́pọ̀, tún wọn ṣe, kí o sì kọ àkọsílẹ̀ ìfọmọ́.",
          quickCheck: [
            { objective: "O4", q: "Kí ni àdáwòkọ nínú dátà?", options: ["Sẹ́ẹ̀lì òfo", "Ìlà tí ó farahàn ju ẹ̀ẹ̀kan lọ", "Àwòrán àtẹ", "Àkọlé òpó"], answer: 1, why: "Àdáwòkọ ń ka nǹkan kan náà lẹ́ẹ̀méjì, ó sì ń mú kí àròpọ̀ jẹ́ àṣìṣe." },
            { objective: "O4", q: "O fẹ́ fọ tábìlì títà kan mọ́. Kí ni o máa kọ́kọ́ ṣe?", options: ["Pa àwọn ìlà tí ó jọ àjèjì rẹ́", "Ṣe àwòrán àtẹ", "To ní ọjọ́ nìkan", "Fi ẹ̀dà ti ìpilẹ̀ṣẹ̀ pamọ́"], answer: 3, why: "Fífi ti ìpilẹ̀ṣẹ̀ pamọ́ ń jẹ́ kí o lè ṣàyẹ̀wò tàbí yí ìfọmọ́ rẹ padà." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe àkópọ̀ dátà àti àwòrán àtẹ kan tó yé",
          minutes: 5,
          goal: "Dáhùn ìbéèrè kan pẹ̀lú tábìlì àkópọ̀ àti àwòrán àtẹ kan.",
          text: [
            "Bẹ̀rẹ̀ pẹ̀lú ìbéèrè kan tó yé, bí \"Ṣọ́ọ̀bù wo ló tà jù ní oṣù tó kọjá?\" Ìbéèrè rere ló ń pinnu àwọn òpó tí o nílò.",
            "Tábìlì àkópọ̀ ń kó dátà jọ sí ẹgbẹ́, ó sì ń ṣe àròpọ̀ rẹ̀. Nínú Sheets tàbí Excel, pivot table ń ṣe èyí: fi Store sínú ìlà (rows) àti àròpọ̀ Amount sínú iye (values). Nínú Python, library Pandas ń ṣe ohun kan náà pẹ̀lú groupby. O lè gbìyànjú Python lọ́fẹ̀ẹ́ nínú Google Colab, èyí tí ó jọ àwọn irinṣẹ́ ètò IBM.",
            "Lẹ́yìn náà, yan àwòrán àtẹ tó bá a mu: bar chart láti fi àwọn ẹgbẹ́ wéra, line chart fún ìyípadà nínú àkókò, kí o sì yẹra fún pie chart tí ó ní ẹ̀ka púpọ̀. Fún un ní àkọlé tí ó sọ ìdáhùn, bí \"Eastside ló tà jù ní oṣù March\", kí o sì kọ orúkọ sí àwọn axis (ìlà ìwọ̀n)."
          ],
          steps: ["Kọ ìbéèrè kan.", "Ṣe pivot table (tàbí Pandas groupby).", "Yan àwòrán àtẹ: bar láti fi wéra, line fún àkókò.", "Kọ àkọlé tí ó sọ ìdáhùn.", "Kọ orúkọ sí àwọn axis."],
          words: [["Pivot table", "irinṣẹ́ spreadsheet tí ó ń kó dátà jọ sí ẹgbẹ́ tí ó sì ń ṣe àròpọ̀ rẹ̀."], ["Pandas", "library Python fún ṣíṣiṣẹ́ lórí tábìlì dátà."], ["Bar chart", "àwòrán àtẹ tí ó ń fi àwọn ẹgbẹ́ wéra pẹ̀lú ọ̀pá tí gígùn wọn yàtọ̀ síra."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú ìbéèrè", bullets: ["\"Ṣọ́ọ̀bù wo ló tà jù ní oṣù tó kọjá?\"", "Ìbéèrè náà ló ń yan àwọn òpó rẹ"] },
            { title: "Ṣe àkópọ̀", bullets: ["Spreadsheet: pivot table", "Python: Pandas groupby (gbìyànjú rẹ̀ nínú Google Colab)", "Rows: Store. Values: àròpọ̀ Amount"] },
            { title: "Ṣe àwòrán àtẹ tó yé", bullets: ["Bar láti fi wéra, line fún àkókò", "Àkọlé ń sọ ìdáhùn", "Kọ orúkọ sí àwọn axis"] }
          ],
          sources: [COLAB],
          tryIt: "Lo tábìlì tí o ti fọ̀ mọ́ láti Ẹ̀kọ́ 4. Ṣe pivot table ti àròpọ̀ Amount fún Store kọ̀ọ̀kan, lẹ́yìn náà ṣe bar chart pẹ̀lú àkọlé tí ó sọ ìdáhùn.",
          youCanNow: "yí ìbéèrè kan padà sí tábìlì àkópọ̀ àti àwòrán àtẹ tó yé.",
          quickCheck: [
            { objective: "O5", q: "Kí ni pivot table ń ṣe?", options: ["Ó ń ya máàpù", "Ó ń pa àwọn àdáwòkọ rẹ́", "Ó ń tún ìkọ̀wé ṣe", "Ó ń kó dátà jọ sí ẹgbẹ́ ó sì ń ṣe àròpọ̀"], answer: 3, why: "Pivot table ń kó àwọn ìlà jọ, bí nípa ṣọ́ọ̀bù, ó sì ń ṣe àròpọ̀ wọn." },
            { objective: "O5", q: "O fẹ́ fi àròpọ̀ títà ṣọ́ọ̀bù 5 wéra. Àwòrán àtẹ wo ni o máa ṣe?", options: ["Line chart", "Bar chart pẹ̀lú àkọlé tí ó sọ ìdáhùn", "Pie chart tí ó ní ẹ̀ka 50", "Kò sí àwòrán àtẹ"], answer: 1, why: "Bar chart ń fi àwọn ẹ̀ka wéra, àkọlé tí ó sọ ìdáhùn sì ń jẹ́ kí ó yé." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sísọ ìtàn dátà àti kíkọ́ iṣẹ́ àkànṣe portfolio",
          minutes: 5,
          goal: "Kọ àbájáde kúkúrú kí o sì kó iṣẹ́ rẹ jọ bí iṣẹ́ àkànṣe portfolio.",
          text: [
            "Àwọn agbanisíṣẹ́ fẹ́ rí i pé o lè ṣàlàyé dátà, kì í ṣe pé o kàn lè ṣe àwòrán àtẹ. Àbájáde rere jẹ́ gbólóhùn mẹ́ta: ohun tí o rí, ìdí tí ó fi ṣe pàtàkì, àti ààlà kan nínú dátà náà. Àpẹẹrẹ: \"Eastside ló ta 40% nínú títà oṣù March. Ó lè nílò òṣìṣẹ́ púpọ̀ sí i ní ọjọ́ Sátidé. Dátà náà jẹ́ ti oṣù kan ṣoṣo.\"",
            "Ọ̀pọ̀ jù lọ àwọn ìwé-ẹ̀rí wọ̀nyí ń parí pẹ̀lú capstone tàbí iṣẹ́ àkànṣe portfolio. O lè bẹ̀rẹ̀ ọ̀kan báyìí: àkọlé, ìbéèrè, ibi tí dátà ti wá, àkọsílẹ̀ ìfọmọ́ rẹ, àwòrán àtẹ àti àbájáde rẹ. Lo dátà gbogbogbò ọ̀fẹ́, bí ojú-òpó open data ti ìlú kan, tàbí tábìlì àṣeṣe rẹ. Má ṣe lo dátà àdáni oníbàárà tàbí ti ilé-iṣẹ́ láìsí àṣẹ láéláé.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti ṣàyẹ̀wò bóyá ìkọ̀wé rẹ yé, ṣùgbọ́n rí i dájú pé gbogbo nọ́mbà nínú àbájáde rẹ wá láti inú tábìlì tìrẹ."
          ],
          steps: ["Kọ àbájáde rẹ ní gbólóhùn mẹ́ta: èsì, ìdí tí ó fi ṣe pàtàkì, ààlà kan.", "Kó àkọlé, ìbéèrè, orísun dátà, àkọsílẹ̀ ìfọmọ́ àti àwòrán àtẹ jọ.", "Fi gbogbo nọ́mbà wé tábìlì rẹ.", "Fi pamọ́ sí ibì kan tí o lè pín, bí fódà Google Drive tàbí GitHub."],
          words: [["Capstone", "iṣẹ́ àkànṣe ìkẹyìn ní òpin ètò ẹ̀kọ́ kan."], ["Portfolio", "àkójọ iṣẹ́ rẹ tí o ń fi han àwọn agbanisíṣẹ́."], ["Ààlà (limitation)", "ohun kan nípa dátà náà tí ó fi hàn pé ìdáhùn náà lè má pé."]],
          slides: [
            { title: "Àbájáde gbólóhùn mẹ́ta", bullets: ["Ohun tí o rí", "Ìdí tí ó fi ṣe pàtàkì", "Ààlà kan nínú dátà náà"] },
            { title: "Iṣẹ́ àkànṣe portfolio rẹ", bullets: ["Àkọlé, ìbéèrè àti orísun dátà", "Àkọsílẹ̀ ìfọmọ́, àwòrán àtẹ àti àbájáde", "Dátà gbogbogbò tàbí dátà àṣeṣe nìkan"] },
            { title: "Kí o tó pín in", bullets: ["Fi gbogbo nọ́mbà wé tábìlì rẹ", "AI lè ṣàyẹ̀wò bóyá ó yé, kì í ṣe òtítọ́ rẹ", "Fi pamọ́ síbi tí o ti lè pín link"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí iṣẹ́ àkànṣe portfolio kékeré rẹ. Ìbéèrè, dátà tí a fọ̀ mọ́, àkọsílẹ̀ ìfọmọ́, tábìlì àkópọ̀, àwòrán àtẹ kan àti àbájáde gbólóhùn mẹ́ta pẹ̀lú ààlà kan. Fi pamọ́ pẹ̀lú àkọlé àti àpèjúwe kúkúrú.",
          youCanNow: "parí iṣẹ́ àkànṣe dátà kékeré irú èyí tí àwọn ìwé-ẹ̀rí dátà ń béèrè, kí o sì ṣàlàyé rẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí o fi máa fi ààlà kan sínú àbájáde rẹ?", options: ["Ó ń fi òtítọ́ hàn nípa ohun tí dátà náà lè sọ àti èyí tí kò lè sọ", "Ó ń mú kí àbájáde náà gùn sí i", "Òfin ló pa á láṣẹ", "Ó ń fi àṣìṣe pamọ́"], answer: 0, why: "Sísọ ààlà kan, bí pé ó jẹ́ ti oṣù kan ṣoṣo, ń jẹ́ kí àwọn ènìyàn gbẹ́kẹ̀lé iṣẹ́ rẹ." },
            { objective: "O6", q: "O fẹ́ lo àkọsílẹ̀ oníbàárà agbanisíṣẹ́ rẹ nínú portfolio gbangba rẹ. Kí ni o máa ṣe?", options: ["Gbé e jáde bí ó ti rí", "Yọ orúkọ nìkan kúrò", "Lo dátà gbogbogbò tàbí dátà àpẹẹrẹ dípò rẹ̀, àyàfi tí o bá ní àṣẹ", "Gbé e jáde kí o sì béèrè lẹ́yìn náà"], answer: 2, why: "Dátà àdáni oníbàárà kò gbọdọ̀ wọ inú portfolio gbangba láìsí àṣẹ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe àṣeṣe àwọn ọgbọ́n ìpìlẹ̀",
        questions: [
          { objective: "O4", q: "Dátà rẹ ní \"CA\", \"Calif.\" àti \"California\". Kí ni o máa ṣe?", options: ["Mú kí wọ́n bá ara wọn mu pẹ̀lú Find and replace", "Fi sílẹ̀ bẹ́ẹ̀", "Pa òpó náà rẹ́", "Fojú díwọ̀n àwọn àròpọ̀"], answer: 0, why: "Mímú kí ìkọ̀wé bá ara wọn mu ń dènà kí a ka ibì kan bí ibi mẹ́ta." },
          { objective: "O4", q: "Kí ló dé tí a fi ń kọ àkọsílẹ̀ ìfọmọ́?", options: ["Kò wúlò", "Láti mú kí fáìlì tóbi sí i", "Nítorí pé àwòrán àtẹ nílò rẹ̀", "Kí àwọn ẹlòmíì lè gbẹ́kẹ̀lé àwọn ìyípadà rẹ kí wọ́n sì tún wọn ṣe"], answer: 3, why: "Àkọsílẹ̀ ń fi ohun tí o yí padà hàn gẹ́lẹ́." },
          { objective: "O5", q: "Irinṣẹ́ wo ló ń kó dátà jọ sí ẹgbẹ́ tí ó sì ń ṣe àròpọ̀ nínú spreadsheet?", options: ["Spell check", "Pivot table", "Print preview", "Comments"], answer: 1, why: "Pivot table ń kó dátà jọ sí ẹgbẹ́ ó sì ń ṣe àkópọ̀." },
          { objective: "O5", q: "O fẹ́ fi bí títà ṣe ń yí padà fún oṣù 12 hàn. Àwòrán àtẹ wo?", options: ["Line chart", "Pie chart", "Kò sí àwòrán àtẹ", "Fọ́tò kan"], answer: 0, why: "Line chart ń fi ìyípadà nínú àkókò hàn." },
          { objective: "O6", q: "Èwo ni àbájáde gbólóhùn mẹ́ta tó dára?", options: ["\"Àwòrán àtẹ nìyí.\"", "\"Dátà dùn mọ́ni.\"", "\"Eastside ló tà jù ní oṣù March. Ó lè nílò òṣìṣẹ́ púpọ̀ sí i ní Sátidé. Dátà jẹ́ ti oṣù kan.\"", "\"Mo lo Excel.\""], answer: 2, why: "Ó sọ èsì, ìdí tí ó fi ṣe pàtàkì àti ààlà kan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmúra sílẹ̀ fún Ìwé-ẹ̀rí Ọjọ́gbọ́n nínú Ìmọ̀ Dátà (Data Science)",
    questions: [
      { objective: "O1", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ tí ó wọ́pọ̀ nínú ọ̀nà iṣẹ́ dátà?", options: ["Ṣe àwòrán àtẹ", "Béèrè ìbéèrè", "Ra software", "Pín èsì"], answer: 1, why: "Ìbéèrè tó yé ló ń darí gbogbo ohun tí ó tẹ̀lé e." },
      { objective: "O1", q: "Ju analyst lọ, data scientist sábà máa ń:", options: ["Lo ìwé nìkan", "Tẹ dátà nìkan", "Má lo dátà rárá", "Kọ́ àwọn model tí ó ń sọ tẹ́lẹ̀"], answer: 3, why: "Àwọn data scientist ń kọ́ model tí ó ń sọ tẹ́lẹ̀, ní ọ̀pọ̀ ìgbà ní Python." },
      { objective: "O1", q: "Kí ni a ń lo SQL fún?", options: ["Yíya àwòrán", "Ṣíṣàtúnṣe fídíò", "Fífi email ránṣẹ́", "Yíyọ dátà jáde láti inú database"], answer: 3, why: "SQL jẹ́ èdè fún bíbéèrè ìbéèrè lọ́wọ́ database." },
      { objective: "O2", q: "Níbo ni a ti ń pèsè Google Data Analytics Professional Certificate?", options: ["Microsoft Learn nìkan", "Coursera", "Ọ́fíìsì ìwé-àṣẹ ọkọ̀ (DMV)", "Ilé ìtajà app fóònù"], answer: 1, why: "Ojú-òpó àṣẹ rẹ̀ wà lórí Coursera." },
      { objective: "O2", q: "Gẹ́gẹ́ bí ojú-òpó rẹ̀, ẹ̀kọ́ mélòó ló wà nínú IBM Data Science Professional Certificate?", options: ["3", "9", "12", "20"], answer: 2, why: "Ojú-òpó Coursera ti IBM dárúkọ ẹ̀kọ́ 12 tí ó tẹ̀lé ara wọn." },
      { objective: "O2", q: "Irinṣẹ́ wo ni ìwé-ẹ̀rí Microsoft dá lé lórí?", options: ["Power BI", "Photoshop", "Word", "Tableau"], answer: 0, why: "Ó jẹ́ Power BI Data Analyst Associate." },
      { objective: "O2", q: "Kí ni gbígba ìwé-ẹ̀rí dátà ṣe ìdánilójú rẹ̀?", options: ["Iṣẹ́", "Àfikún owó oṣù", "Kò sí nǹkan kan; ó ń fi ohun tí o kọ́ hàn", "Oyè yunifásítì"], answer: 2, why: "Ìwé-ẹ̀rí ń fi ẹ̀kọ́ hàn; kò ṣe ìdánilójú èsì kankan." },
      { objective: "O2", q: "Kí o tó forúkọ sílẹ̀, ibo ni kí o ti ṣàyẹ̀wò owó rẹ̀?", options: ["Ojú-òpó àṣẹ ètò náà", "Ìpolówó orí ìkànnì àjọlò", "Àkọsílẹ̀ ọdún tó kọjá", "Ìrántí AI kan"], answer: 0, why: "Ojú-òpó àṣẹ ló ní owó àti àkóónú ti ìsinsìnyí." },
      { objective: "O3", q: "Ètò wo ló dára jù fún píparí ìwé-ẹ̀rí?", options: ["Kẹ́kọ̀ọ́ nígbàkígbà tí àyè bá wà", "Àwọn àkókò ìkẹ́kọ̀ọ́ tó dájú nínú kàlẹ́ńdà rẹ pẹ̀lú àfojúsùn ọ̀sẹ̀ kan", "Fo àwọn lab", "Kẹ́kọ̀ọ́ fún ọjọ́ kan lẹ́ẹ̀kan lóṣù"], answer: 1, why: "Àwọn àkókò déédéé tí a ṣètò pẹ̀lú àfojúsùn ń ràn ọ́ lọ́wọ́ láti parí." },
      { objective: "O3", q: "Nígbà tí o bá ń lo olùrànlọ́wọ́ AI nínú ẹ̀kọ́ ìwé-ẹ̀rí, o yẹ kí o:", options: ["Jẹ́ kí ó ṣe iṣẹ́ máàkì", "Yẹra fún un pátápátá, nígbà gbogbo", "Lẹ ìdánwò rẹ sínú rẹ̀", "Lò ó láti ṣàlàyé èrò kí ó sì bi ọ́ ní ìbéèrè, kí o sì tẹ̀lé òfin òtítọ́"], answer: 3, why: "AI lè ràn ọ́ lọ́wọ́ láti kẹ́kọ̀ọ́, ṣùgbọ́n iṣẹ́ máàkì gbọdọ̀ jẹ́ tìrẹ." },
      { objective: "O3", q: "Níbo ni a ti ń kọ́ ọgbọ́n gidi nínú ẹ̀kọ́ orí ayélujára?", options: ["Ṣíṣe àwọn lab ọwọ́", "Wíwo fídíò nìkan", "Kíka àkọlé", "Fífo àwọn ìdánwò"], answer: 0, why: "Lab jẹ́ àṣeṣe ọwọ́." },
      { objective: "O4", q: "Kí ni àdáwòkọ nínú dátà?", options: ["Sẹ́ẹ̀lì òfo", "Orúkọ òpó", "Àwòrán àtẹ", "Ìlà tí ó farahàn ju ẹ̀ẹ̀kan lọ"], answer: 3, why: "Àdáwòkọ jẹ́ àwọn ìlà tí ó tún farahàn." },
      { objective: "O4", q: "Kí o tó fọ dátà mọ́, o yẹ kí o:", options: ["Pa ti ìpilẹ̀ṣẹ̀ rẹ́", "Ṣe àwòrán àtẹ", "Fi ẹ̀dà ti ìpilẹ̀ṣẹ̀ pamọ́", "Fi ránṣẹ́ sí gbogbo ènìyàn ní email"], answer: 2, why: "Ẹ̀dà kan ń jẹ́ kí o lè tún bẹ̀rẹ̀ tàbí ṣàyẹ̀wò iṣẹ́ rẹ." },
      { objective: "O4", q: "Nọ́mbà tí a fi pamọ́ bí ọ̀rọ̀ lè fa:", options: ["Iṣẹ́ tí ó yára sí i", "Àròpọ̀ tí kò tọ́", "Àwòrán àtẹ tí ó dára sí i", "Kò sí nǹkan kan"], answer: 1, why: "Nọ́mbà ọ̀rọ̀ lè má ṣe àròpọ̀ dáadáa." },
      { objective: "O4", q: "Nínú Python, library wo ló ń ṣiṣẹ́ lórí tábìlì bí spreadsheet?", options: ["Outlook", "Paint", "Zoom", "Pandas"], answer: 3, why: "Pandas wà fún ṣíṣiṣẹ́ lórí tábìlì dátà." },
      { objective: "O5", q: "Irinṣẹ́ ọ̀fẹ́ wo ló ń jẹ́ kí o ṣiṣẹ́ Python nínú browser?", options: ["Ẹ̀rọ ìṣirò", "Notepad", "Google Colab", "Paint"], answer: 2, why: "Google Colab ń ṣiṣẹ́ àwọn notebook Python lórí ayélujára." },
      { objective: "O5", q: "Láti fi títà ṣọ́ọ̀bù 5 wéra, àwòrán àtẹ tó dára jù sábà máa ń jẹ́:", options: ["Bar chart", "Pie tí ó ní ẹ̀ka 20", "Máàpù", "Kò sí àwòrán àtẹ"], answer: 0, why: "Bar chart ń fi àwọn ẹgbẹ́ wéra kedere." },
      { objective: "O5", q: "Àkọlé àwòrán àtẹ tó dára:", options: ["\"Àwòrán àtẹ 1\"", "Ó ń sọ ìdáhùn, bí \"Eastside ló tà jù ní oṣù March\"", "A fi í sílẹ̀ ní òfo", "Ó gùn gan-an"], answer: 1, why: "Àkọlé tí ó sọ ìdáhùn ń ran àwọn òǹkàwé lọ́wọ́." },
      { objective: "O6", q: "Dátà wo ni o KÒ gbọdọ̀ lò nínú portfolio gbangba?", options: ["Open data ti ìlú", "Dátà àdáni oníbàárà láìsí àṣẹ", "Tábìlì àṣeṣe rẹ", "Dátà gbogbogbò ọ̀fẹ́"], answer: 1, why: "Dátà àdáni nílò àṣẹ, a kò sì gbọdọ̀ pín in." },
      { objective: "O6", q: "Àbájáde rẹ yẹ kí ó ní ààlà kan nítorí pé:", options: ["Ó ń fi òtítọ́ hàn nípa ohun tí dátà náà lè sọ àti èyí tí kò lè sọ", "Ó ń mú kí ó gùn sí i", "Àwọn agbanisíṣẹ́ kò fẹ́ràn rẹ̀", "Òfin ló pa á láṣẹ"], answer: 0, why: "Sísọ ààlà kan ń fi ìtúpalẹ̀ tí a ṣe pẹ̀lú ìṣọ́ra, tí a sì lè gbẹ́kẹ̀lé hàn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 6, 8, 10, 11, 12, 16, 17, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìbéèrè tó yé", objective: "O1", notYet: "Kò sí ìbéèrè, tàbí ìbéèrè tí dátà náà kò lè dáhùn.", meets: "Ìbéèrè kan tó yé tí dátà náà lè dáhùn.", exceeds: "Ìbéèrè náà ṣe pàtàkì sí ibi iṣẹ́ gidi kan, ó sì sọ ìdí rẹ̀." },
      { name: "Dátà tí a fọ̀ mọ́ àti àkọsílẹ̀", objective: "O4", notYet: "Àwọn àyè òfo, àdáwòkọ tàbí ìṣòro ìrísí ṣì wà, tàbí kò sí àkọsílẹ̀.", meets: "A ti tún àwọn àyè òfo, àdáwòkọ àti ìrísí ṣe, pẹ̀lú àkọsílẹ̀ ìfọmọ́, a sì ti fi ti ìpilẹ̀ṣẹ̀ pamọ́.", exceeds: "Àkọsílẹ̀ náà sọ iye ìlà tí àtúnṣe kọ̀ọ̀kan yí padà." },
      { name: "Àkópọ̀ àti àwòrán àtẹ", objective: "O5", notYet: "Kò sí tábìlì àkópọ̀, tàbí àwòrán àtẹ tí kò dáhùn ìbéèrè náà.", meets: "Tábìlì àkópọ̀ kan àti àwòrán àtẹ kan tí irú rẹ̀ tọ́, pẹ̀lú àkọlé tí ó sọ ìdáhùn.", exceeds: "A ti kọ orúkọ sí àwọn axis, àwòrán àtẹ náà sì rọrùn láti kà lójú kan." },
      { name: "Àbájáde àti ààlà", objective: "O6", notYet: "Kò sí àbájáde, tàbí kò sọ ààlà kankan.", meets: "Àbájáde gbólóhùn mẹ́ta pẹ̀lú ààlà kan nínú dátà náà.", exceeds: "Àbájáde náà dábàá ìgbésẹ̀ tó kàn tí ó ṣeé ṣe." },
      { name: "Ó ṣetán fún portfolio", objective: "O6", notYet: "A kò fi pamọ́, tàbí ó ní dátà àdáni nínú.", meets: "A fi pamọ́ sínú Google Sheets, Excel tàbí Google Colab pẹ̀lú àkọlé kúkúrú àti àpèjúwe, láìsí dátà àdáni.", exceeds: "A pín in bí link tí akẹ́kọ̀ọ́ lè fi kún résumé tàbí profaili rẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ fún ìwé-ẹ̀rí dátà láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ìwé-ẹ̀rí dátà láàárín oṣù 6",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n lo iṣẹ́ àkànṣe portfolio wọn nínú ìwé ìbéèrè iṣẹ́ tàbí tí wọ́n rí iṣẹ́ tí ó jẹmọ́ dátà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Spreadsheet ọ̀fẹ́ (Google Sheets tàbí Microsoft Excel orí ayélujára), àti Google Colab tí o bá fẹ́",
      "Dátà gbogbogbò ọ̀fẹ́ kan, tàbí tábìlì títà àpẹẹrẹ láti Ẹ̀kọ́ 4",
      "Kàlẹ́ńdà fóònù tàbí ti ìwé fún ètò ìkẹ́kọ̀ọ́",
      "Nǹkan bí ìṣẹ́jú 60 fún ẹ̀kọ́ àti ìdánwò, pẹ̀lú àkókò iṣẹ́ ọwọ́ fún iṣẹ́ àkànṣe náà"
    ],
    facilitatorNotes: [
      "Pèsè tábìlì títà àpẹẹrẹ tí a ti fi ìṣòro sínú rẹ̀ kí gbogbo akẹ́kọ̀ọ́ lè ṣe àṣeṣe fífọ dátà kan náà mọ́.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣàyẹ̀wò owó ìwé-ẹ̀rí lórí ojú-òpó àṣẹ lójú ẹsẹ̀ nínú kíláàsì dípò lílo nọ́mbà àtijọ́.",
      "Ṣe àfihàn pivot table kan àti àwòrán àtẹ kan ní ìgbésẹ̀ kọ̀ọ̀kan kí àwọn akẹ́kọ̀ọ́ tó ṣe tiwọn.",
      "Rán àwọn akẹ́kọ̀ọ́ létí láti lo dátà gbogbogbò tàbí dátà àpẹẹrẹ nìkan nínú portfolio.",
      "Fi rubric ṣe àmì fún iṣẹ́ àkànṣe portfolio, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
