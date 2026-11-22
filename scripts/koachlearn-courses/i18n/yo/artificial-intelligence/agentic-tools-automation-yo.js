"use strict";

// Koach Learn course (Yoruba translation of artificial-intelligence/agentic-tools-automation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-tools-automation-yo",
  lang: "yo",
  translationOf: "agentic-tools-automation",
  category: "Artificial Intelligence",
  name: "Lílo Irinṣẹ́ àti Automation pẹ̀lú Aṣojú AI",
  skills: "Ṣíṣàpèjúwe irinṣẹ́ pẹ̀lú schema, Ṣíṣàyẹ̀wò argument irinṣẹ́, Fífi irinṣẹ́ kíkọ sẹ́yìn ìfọwọ́sí, Dry run àti ṣíṣe é lẹ́ẹ̀kan sí i láìléwu, Sísopọ̀ irinṣẹ́ pẹ̀lú MCP, Ṣíṣe aṣojú ní àkókò tí a ṣètò",
  outcome: "fún aṣojú AI ní irinṣẹ́ gidi láìléwu: ṣàpèjúwe irinṣẹ́ kọ̀ọ̀kan pẹ̀lú schema, ṣàyẹ̀wò gbogbo argument, fi iṣẹ́ kíkọ sẹ́yìn dry run àti \"bẹ́ẹ̀ ni\" láti ọ̀dọ̀ ènìyàn, kí o sì ṣe aṣojú náà bí automation tí a lè tún ṣe, tí ó ń ka fáìlì tí ó sì ń kọ ìjábọ̀.",
  about: [
    "Èyí ni ẹ̀kọ́ 4 nínú ètò Design, Build, and Deploy Autonomous AI Agents (Ṣíṣe Aṣojú AI Aládàáṣe). Aṣojú rẹ ní ẹ̀kọ́ 3 ní irinṣẹ́ méjì tí kò léwu. Àwọn aṣojú gidi ń ka fáìlì, ń pe iṣẹ́ wẹ́ẹ̀bù, wọ́n sì ń kọ èsì sílẹ̀, ibẹ̀ sì ni ọ̀pọ̀ jàǹbá aṣojú ti ń ṣẹlẹ̀. Ẹ̀kọ́ yìí kọ́ ọ bí o ṣe lè fi irinṣẹ́ gidi kún un láìpàdánù ìdarí.",
    "Orí 1 jẹ́ nípa irinṣẹ́: ṣíṣàpèjúwe wọn pẹ̀lú schema tí model yé, ṣíṣàyẹ̀wò gbogbo argument tí kóòdù rẹ gbà, àti fífi iṣẹ́ èyíkéyìí tí ó ń yí nǹkan padà sẹ́yìn dry run àti ìfọwọ́sí ènìyàn. Orí 2 jẹ́ nípa automation: trigger àti àkókò tí a ṣètò, ṣíṣe é lẹ́ẹ̀kan sí i láìléwu, Model Context Protocol (MCP) fún sísopọ̀ irinṣẹ́, àti yíyí aṣojú rẹ padà sí iṣẹ́ tí ó ń ṣe ara rẹ̀.",
    "O máa ṣiṣẹ́ pẹ̀lú Python nínú Google Colab tàbí lórí kọ̀mpútà tìrẹ. A fi kóòdù hàn bí ìlà kúkúrú nínú àwọn ẹ̀kọ́. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe aṣojú \"ìjábọ̀ ọ̀sẹ̀\". Ó ń ka fáìlì CSV ti tita tàbí ìnáwó àṣeṣe pẹ̀lú irinṣẹ́ kíkà, ó ń lo irinṣẹ́ calculator láti ṣírò àròpọ̀, ó sì ń kọ àkópọ̀ kúkúrú. Irinṣẹ́ kíkọ rẹ̀ kan ṣoṣo, save_report(filename, text), gbọ́dọ̀ ṣàyẹ̀wò argument rẹ̀ (fáìlì .txt tàbí .md nìkan, nínú fódà reports nìkan), ṣiṣẹ́ ní ipò dry run láìyípadà, kí ó sì béèrè \"Save report? yes/no\" kí ó tó kọ nǹkan. Ṣíṣe é lẹ́ẹ̀mejì fún ọ̀sẹ̀ kan náà kò gbọdọ̀ ṣe ìjábọ̀ ẹlẹ́ẹ̀mejì. Fi log ìṣiṣẹ́ kíkún kan hàn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà nínú ètò Design, Build, and Deploy Autonomous AI Agents tí wọ́n ti parí ẹ̀kọ́ 1 sí 3: àwọn oníṣòwò kékeré, àwọn tí ń yí iṣẹ́ padà, àwọn akẹ́kọ̀ọ́ àti òṣìṣẹ́ tí wọ́n fẹ́ aṣojú tí ń ṣe iṣẹ́ gidi ní àkókò tí a ṣètò.",
    startingPoint: "Wọ́n ti ṣe loop aṣojú oní irinṣẹ́ méjì nínú Python, pẹ̀lú òdiwọ̀n ìgbésẹ̀, ìtọ́jú àṣìṣe àti log ìṣiṣẹ́. Wọn kò tíì fún aṣojú ní irinṣẹ́ tí ó ń ka fáìlì tàbí tí ó ń yí nǹkan padà, wọn kò sì tíì ṣe ọ̀kan bí automation.",
    gap: "Ọ̀pọ̀ jàǹbá aṣojú ń ṣẹlẹ̀ nígbà tí aṣojú bá gba irinṣẹ́ gidi tí ó ń kà tí ó sì ń kọ. Àwọn akẹ́kọ̀ọ́ nílò láti ṣàpèjúwe irinṣẹ́ dáadáa, ṣàyẹ̀wò gbogbo argument, fi iṣẹ́ kíkọ sẹ́yìn dry run àti \"bẹ́ẹ̀ ni\" láti ọ̀dọ̀ ènìyàn, kí wọ́n sì jẹ́ kí automation ṣeé tún ṣe láìléwu, kí aṣojú wọn lè ṣèrànwọ́ láìfa ìbàjẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; kóòdù jẹ́ ìlà kúkúrú láti dà kọ",
      "Ẹ̀rọ: kọ̀mpútà tí ó ní browser; Colab wà fún ṣíṣe é, kì í ṣe fún ṣíṣe é ní àkókò tí a ṣètò",
      "Àṣeṣe ń lo dátà CSV àṣeṣe nìkan, kì í ṣe àkọsílẹ̀ oníbàárà tàbí ti owó gidi láéláé",
      "Iṣẹ́ kíkọ máa wà ní ipò dry run títí ènìyàn yóò fi fọwọ́ sí i",
      "MCP server tí a gbẹ́kẹ̀ lé nìkan, pẹ̀lú ìwọlé tó kéré jù tí ó nílò"
    ],
    prerequisites: "Ẹ̀kọ́ 3 nínú Design, Build, and Deploy Autonomous AI Agents (\"Kíkọ́ Àwọn Agent AI\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún irinṣẹ́ kọ̀ọ̀kan tí aṣojú rẹ ń lò", action: "kọ schema irinṣẹ́ tí ó ní orúkọ tó yé, ète rẹ̀ àti àwọn input tí a sọ irú wọn", standard: "kí model lè yan irinṣẹ́ àti argument tó tọ́" },
    { id: "O2", condition: "Tí a bá fún ọ ní argument tí model fi ránṣẹ́", action: "ṣàyẹ̀wò gbogbo argument pẹ̀lú allow list kí irinṣẹ́ tó lò ó", standard: "kí o sì kọ irú fáìlì tí kò tọ́, ẹ̀tàn ọ̀nà fódà (path) àti irú tí kò tọ́ pẹ̀lú ìkìlọ̀ àṣìṣe tó yé" },
    { id: "O3", condition: "Fún irinṣẹ́ èyíkéyìí tí ó ń yí nǹkan padà", action: "fi iṣẹ́ náà sẹ́yìn dry run àti ìfọwọ́sí bẹ́ẹ̀ ni/rárá tí ó fi àwọn kúlẹ̀kúlẹ̀ gangan hàn", standard: "kí a má kọ nǹkankan títí ènìyàn yóò fi sọ bẹ́ẹ̀ ni" },
    { id: "O4", condition: "Tí a bá fún ọ ní iṣẹ́ tí ó ń ṣẹlẹ̀ déédéé", action: "yan trigger kí o sì jẹ́ kí automation náà ṣeé tún ṣe láìléwu", standard: "kí ìṣiṣẹ́ kejì fún àkókò kan náà má ṣe ẹ̀dà kejì" },
    { id: "O5", condition: "Tí o bá ní irinṣẹ́ tí o fẹ́ pín pẹ̀lú àwọn app AI", action: "ṣàlàyé ohun tí MCP server ń ṣe kí o sì pinnu ìgbà tí o máa lo ọ̀kan", standard: "kí o sì dárúkọ àwọn òfin ìfọwọ́sí àti àyẹ̀wò tí o máa pa mọ́" },
    { id: "O6", condition: "Tí a bá fún ọ ní irinṣẹ́ kíkà, calculator àti fífi pamọ́", action: "ṣe automation ìjábọ̀ ọ̀sẹ̀ kí o sì dán an wò láti ìbẹ̀rẹ̀ dé òpin", standard: "pẹ̀lú log ìṣiṣẹ́ kíkún, kí a sì ròyìn dátà búburú dípò kí a fojú fò ó" }
  ],
  chapters: [
    {
      name: "Orí 1: Fífún aṣojú ní irinṣẹ́ gidi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣàpèjúwe irinṣẹ́ pẹ̀lú schema",
          minutes: 5,
          goal: "Kọ àpèjúwe irinṣẹ́ tí ó ní orúkọ, ète àti àwọn input tí a sọ irú wọn.",
          text: [
            "Model máa ń yan irinṣẹ́ láti inú àpèjúwe wọn. Schema irinṣẹ́ jẹ́ àpèjúwe tó péye: orúkọ kan, gbólóhùn kan tàbí méjì nípa ohun tí ó ń ṣe àti ìgbà tí a máa lò ó, àti input kọ̀ọ̀kan pẹ̀lú irú rẹ̀ àti ìtumọ̀ rẹ̀. Ọ̀pọ̀ ilé-iṣẹ́ AI ń kọ àwọn input ní JSON Schema, ọ̀nà tí gbogbo ènìyàn gbà láti ṣàpèjúwe dátà.",
            "Àpẹẹrẹ: orúkọ read_csv; àpèjúwe \"Read a CSV file from the data folder and return its first 50 rows as text. Use when you need the numbers in a file.\" (Ó ń ka fáìlì CSV láti inú fódà data, ó sì ń dá ìlà 50 àkọ́kọ́ padà bí ọ̀rọ̀. Lò ó nígbà tí o bá nílò àwọn nọ́mbà inú fáìlì.); input: filename (string, ó pọndandan, orúkọ fáìlì kan nínú fódà data bí sales-week-42.csv).",
            "Schema tó dára kéré, ó sì ṣe pàtó. Irinṣẹ́ kan, iṣẹ́ kan. Sọ ohun tí irinṣẹ́ náà ń dá padà àti ìgbà tí a kò gbọdọ̀ lò ó. Lo orúkọ tí ó dà bí iṣẹ́: read_csv, save_report, kì í ṣe tool1."
          ],
          steps: ["Fún irinṣẹ́ náà ní orúkọ tí ó jẹ́ ọ̀rọ̀ iṣẹ́.", "Ṣàpèjúwe ohun tí ó ń ṣe, ìgbà tí a máa lò ó àti ohun tí ó ń dá padà.", "Kọ input kọ̀ọ̀kan pẹ̀lú irú rẹ̀ àti bóyá ó pọndandan.", "Jẹ́ kí ó ṣe iṣẹ́ kan ṣoṣo.", "Dán an wò: fún model ní àfojúsùn kan kí o sì wò bóyá ó yan irinṣẹ́ náà dáadáa."],
          words: [["Schema irinṣẹ́ (tool schema)", "àpèjúwe tó péye nípa irinṣẹ́ kan: orúkọ rẹ̀, ète rẹ̀ àti àwọn input rẹ̀."], ["JSON Schema", "ọ̀nà tí gbogbo ènìyàn gbà láti ṣàpèjúwe bí dátà ṣe rí, bí àwọn apá wo ló jẹ́ ọ̀rọ̀ tàbí nọ́mbà."], ["Argument", "iye kan tí a fi ránṣẹ́ sínú irinṣẹ́ tàbí function."]],
          slides: [
            { title: "Model ń yan láti inú àpèjúwe", bullets: ["Orúkọ, ète, àwọn input", "A sábà máa ń kọ input ní JSON Schema"] },
            { title: "Àpẹẹrẹ: read_csv", bullets: ["Ó ń ka CSV láti inú fódà data", "Ó ń dá ìlà 50 àkọ́kọ́ padà bí ọ̀rọ̀", "Input: filename (string, ó pọndandan)"] },
            { title: "Schema tó dára", bullets: ["Irinṣẹ́ kan, iṣẹ́ kan", "Orúkọ iṣẹ́: read_csv, save_report", "Sọ ohun tí ó ń dá padà àti ìgbà tí a kò gbọdọ̀ lò ó"] }
          ],
          tryIt: "Kọ schema fún irinṣẹ́ mẹ́ta: read_csv, calculator àti save_report. Fún chatbot ọ̀fẹ́ kan ní schema mẹ́ta náà àti àfojúsùn \"Ṣírò àròpọ̀ tita ọ̀sẹ̀ tó kọjá kí o sì fi ìjábọ̀ pamọ́\", kí o sì béèrè irinṣẹ́ wo ni yóò kọ́kọ́ pè àti pẹ̀lú argument wo.",
          youCanNow: "ṣàpèjúwe irinṣẹ́ kan kí model lè yàn án kí ó sì kọ àwọn input rẹ̀ dáadáa.",
          quickCheck: [
            { objective: "O1", q: "Kí ni àwọn input tí a sọ irú wọn nínú schema irinṣẹ́ ń sọ fún model?", options: ["Bí irinṣẹ́ náà ṣe ń yára tó", "Ẹni tí ó kọ irinṣẹ́ náà", "Irú iye tí input kọ̀ọ̀kan gbọ́dọ̀ jẹ́, bí ọ̀rọ̀ tàbí nọ́mbà", "Model wo ni kí a lò"], answer: 2, why: "Irú input ń ṣàpèjúwe bí input kọ̀ọ̀kan ṣe rí, kí model lè fi argument tó tọ́ ránṣẹ́." },
            { objective: "O1", q: "O fẹ́ irinṣẹ́ kan tí ó ń ka fáìlì, ń fi ímeèlì ránṣẹ́, tí ó sì ń pa ìjábọ̀ àtijọ́ rẹ́. Kí ni o máa ṣe dípò rẹ̀?", options: ["Pín in sí irinṣẹ́ ọ̀tọ̀ọ̀tọ̀ tí ọ̀kọ̀ọ̀kan ń ṣe iṣẹ́ kan tó yé", "Fi í sílẹ̀ bẹ́ẹ̀, nítorí irinṣẹ́ kan rọrùn jù", "Fún un ní àpèjúwe tó gùn jù", "Fi apá pípa rẹ́ pamọ́ kúrò nínú schema"], answer: 0, why: "Irinṣẹ́ tó dára ń ṣe iṣẹ́ kan tó yé, èyí sì ń jẹ́ kí ó rọrùn láti ṣàpèjúwe, ṣàyẹ̀wò àti fọwọ́ sí." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Má ṣe gbẹ́kẹ̀ lé argument láéláé: ṣíṣàyẹ̀wò input irinṣẹ́",
          minutes: 6,
          goal: "Ṣàyẹ̀wò gbogbo argument tí model fi ránṣẹ́ kí irinṣẹ́ tó lò ó.",
          text: [
            "Model ló ń kọ argument irinṣẹ́ rẹ, model sì lè ṣàṣìṣe tàbí kí prompt injection tàn án jẹ. Nítorí náà irinṣẹ́ náà, kì í ṣe model, ló gbọ́dọ̀ fi agbára mú àwọn òfin. Ka argument sí bí input láti ọ̀dọ̀ àjèjì lórí íńtánẹ́ẹ̀tì.",
            "Ṣàyẹ̀wò irú àti ìrísí: ṣé string ni filename? Ṣàyẹ̀wò iye tí a gbà láàyè: orúkọ tí ó parí sí .csv nìkan, nínú fódà data nìkan. Dènà ẹ̀tàn ọ̀nà fódà: orúkọ bí ../../secrets.txt ń gbìyànjú láti gun jáde kúrò nínú fódà náà. Nínú Python: from pathlib import Path, lẹ́yìn náà p = (DATA_DIR / filename).resolve(), kí o sì kọ̀ ọ́ tí DATA_DIR.resolve() kò bá sí nínú p.parents.",
            "Tí àyẹ̀wò kan bá kùnà, dá ìkìlọ̀ tó yé padà, kì í ṣe kí ètò dá dúró lójijì: \"read_csv error: only .csv files in the data folder are allowed\". Má ṣe ṣe ọ̀rọ̀ tí model kọ bí kóòdù tàbí àṣẹ shell láéláé; bẹ́ẹ̀ ni àṣìṣe kékeré ṣe ń di ńlá."
          ],
          steps: ["Ṣàyẹ̀wò irú argument kọ̀ọ̀kan.", "Ṣàyẹ̀wò iye tí a gbà láàyè: irú fáìlì, fódà, ààlà nọ́mbà.", "Yanjú ọ̀nà fáìlì (resolve) kí o sì kọ ohunkóhun tí ó wà lẹ́yìn fódà tí a gbà láàyè.", "Dá ìkìlọ̀ àṣìṣe tó yé padà tí ó bá kùnà.", "Má ṣe ṣe ọ̀rọ̀ tí model kọ bí kóòdù tàbí àṣẹ shell láéláé."],
          words: [["Validation (àyẹ̀wò input)", "ṣíṣàyẹ̀wò pé input jẹ́ irú tó tọ́, tí ó sì wà láàárín iye tí a gbà láàyè kí a tó lò ó."], ["Path traversal", "ẹ̀tàn tí ó ń lo ../ nínú orúkọ fáìlì láti dé àwọn fáìlì tí ó wà lẹ́yìn fódà tí a gbà láàyè."], ["Allow list", "àkọsílẹ̀ àwọn iye kan ṣoṣo tí a gbà láàyè."]],
          slides: [
            { title: "Irinṣẹ́ ló ń fi agbára mú àwọn òfin", bullets: ["Model lè ṣàṣìṣe tàbí kí wọ́n tàn án jẹ", "Ka argument sí input láti ọ̀dọ̀ àjèjì"] },
            { title: "Ṣàyẹ̀wò gbogbo argument", bullets: ["Irú: ṣé string ni tàbí nọ́mbà?", "Iye tí a gbà láàyè: .csv nìkan, fódà data nìkan", "Dènà ẹ̀tàn ọ̀nà ../"] },
            { title: "Tí ó bá kùnà", bullets: ["Dá ìkìlọ̀ àṣìṣe tó yé padà", "Má ṣe jẹ́ kí ó dá dúró lójijì, má ṣe méfò", "Má ṣe ṣe ọ̀rọ̀ model bí kóòdù tàbí àṣẹ láéláé"] }
          ],
          tryIt: "Kọ read_csv pẹ̀lú validation. Dán an wò fúnra rẹ pẹ̀lú: 'sales.csv', 'notes.exe', '../secret.txt' àti 42. Èkíní nìkan ló yẹ kí ó ka fáìlì; àwọn yòókù gbọ́dọ̀ dá ìkìlọ̀ àṣìṣe tó yé padà.",
          youCanNow: "kọ irinṣẹ́ tí ó ń ṣàyẹ̀wò gbogbo argument kí ó tó ṣe nǹkan.",
          quickCheck: [
            { objective: "O2", q: "Kí ló dé tí kóòdù irinṣẹ́ fúnra rẹ̀ fi gbọ́dọ̀ ṣàyẹ̀wò argument rẹ̀?", options: ["Schema ti dènà gbogbo iye búburú tẹ́lẹ̀", "Model lè fi nǹkan tí kò léwu tàbí tí kò tọ́ ránṣẹ́", "Ó ń mú kí model gbọ́n sí i", "Irinṣẹ́ kíkọ nìkan ló nílò rẹ̀"], answer: 1, why: "Kóòdù irinṣẹ́ nìkan ló lè fi agbára mú àwọn òfin rẹ̀; model lè ṣàṣìṣe tàbí kí wọ́n tàn án jẹ." },
            { objective: "O2", q: "read_csv gba nọ́mbà 42 bí orúkọ fáìlì. Kí ló yẹ kí ó ṣẹlẹ̀?", options: ["Ka fáìlì tí orúkọ rẹ̀ ń jẹ́ 42.csv", "Yí i padà sí ọ̀rọ̀ kí o sì máa bá a lọ", "Ní kí model méfò fáìlì tó tọ́", "Dá ìkìlọ̀ àṣìṣe tó yé padà pé orúkọ fáìlì gbọ́dọ̀ jẹ́ ọ̀rọ̀ tí ó parí sí .csv"], answer: 3, why: "A máa ń kọ irú tí kò tọ́ pẹ̀lú ìkìlọ̀ àṣìṣe tó yé tí model lè lò." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Irinṣẹ́ kíkọ: dry run àti ìfọwọ́sí ènìyàn",
          minutes: 6,
          goal: "Fi iṣẹ́ kíkọ sẹ́yìn dry run àti ìfọwọ́sí bẹ́ẹ̀ ni/rárá.",
          text: [
            "Irinṣẹ́ kíkọ ń yí nǹkan padà: ó ń fi fáìlì pamọ́, ó ń fi ọ̀rọ̀ ránṣẹ́, ó ń ṣe àtúnṣe sí sheet, ó ń ná owó. Fún irinṣẹ́ kíkọ ní àgádágodo méjì. Èkíní, dry run: irinṣẹ́ náà sọ ohun tí yóò ṣe gangan, ṣùgbọ́n kò ṣe é. Jẹ́ kí dry run jẹ́ ipò àkọ́kọ́, pẹ̀lú DRY_RUN = True ní òkè kóòdù rẹ.",
            "Èkejì, ìfọwọ́sí ènìyàn: kí ìkọ̀wé gidi tó ṣẹlẹ̀, fi ohun tí yóò ṣẹlẹ̀ han ẹni náà kí o sì béèrè. Nínú notebook: answer = input('Save report to reports/week-42.md? yes/no '), kí o sì tẹ̀síwájú nìkan tí answer == 'yes'. Nínú app gidi, èyí ni bọ́tìnnì Approve.",
            "Fi àwọn kúlẹ̀kúlẹ̀ gidi hàn nínú ìfọwọ́sí, kì í ṣe àkópọ̀ tí model kọ: orúkọ fáìlì, ẹni tí yóò gbà á, iye owó. Kọ gbogbo ìfọwọ́sí àti gbogbo ìkọ̀ sínú log. Tí model bá tún béèrè ìkọ̀wé kan náà lẹ́yìn tí o sọ rárá, àmì ni pé kí o dá ìṣiṣẹ́ náà dúró."
          ],
          steps: ["Sàmì sí irinṣẹ́ kọ̀ọ̀kan pé READ (kíkà) tàbí WRITE (kíkọ).", "Fún gbogbo irinṣẹ́ kíkọ ní ipò dry run, tí ó wà ní títàn láìyípadà.", "Kí ìkọ̀wé gidi tó ṣẹlẹ̀, fi àwọn kúlẹ̀kúlẹ̀ gangan hàn kí o sì béèrè bẹ́ẹ̀ ni tàbí rárá.", "Kọ nǹkan nìkan tí ìdáhùn bá jẹ́ bẹ́ẹ̀ ni, kí o sì kọ ìdáhùn náà sínú log.", "Dá ìṣiṣẹ́ dúró tí model bá tún gbìyànjú ìkọ̀wé tí a ti kọ̀."],
          words: [["Dry run", "ìṣiṣẹ́ àṣeṣe tí ó ń fi ohun tí yóò ṣẹlẹ̀ hàn láìṣe é."], ["Approval gate (ẹnu-ọ̀nà ìfọwọ́sí)", "ibi tí ènìyàn gbọ́dọ̀ sọ bẹ́ẹ̀ ni kí iṣẹ́ kan tó ṣẹlẹ̀."]],
          slides: [
            { title: "Irinṣẹ́ kíkọ ń yí nǹkan padà", bullets: ["Fi pamọ́, fi ránṣẹ́, ṣe àtúnṣe, ná owó", "Wọ́n nílò àgádágodo méjì"] },
            { title: "Àgádágodo 1: dry run láìyípadà", bullets: ["DRY_RUN = True", "Ó fi ohun tí yóò ṣẹlẹ̀ gangan hàn", "Kò ṣe é"] },
            { title: "Àgádágodo 2: ìfọwọ́sí ènìyàn", bullets: ["Fi kúlẹ̀kúlẹ̀ gidi hàn: fáìlì, ẹni tí yóò gbà á, iye owó", "Béèrè bẹ́ẹ̀ ni tàbí rárá", "Kọ nǹkan nìkan lórí bẹ́ẹ̀ ni; kọ ìdáhùn sínú log"] }
          ],
          tryIt: "Kọ save_report(filename, text) pẹ̀lú validation (.md tàbí .txt nìkan, nínú fódà reports nìkan), dry run láìyípadà àti ìfọwọ́sí bẹ́ẹ̀ ni/rárá. Dán an wò pẹ̀lú DRY_RUN ní títàn, lẹ́yìn náà ní pípa, kí o dáhùn rárá lẹ́ẹ̀kan àti bẹ́ẹ̀ ni lẹ́ẹ̀kan.",
          youCanNow: "fi irinṣẹ́ kíkọ kún un tí wọ́n ń ṣe nǹkan nìkan lẹ́yìn dry run àti \"bẹ́ẹ̀ ni\" láti ọ̀dọ̀ ènìyàn.",
          quickCheck: [
            { objective: "O3", q: "Kí ni dry run ń ṣe?", options: ["Ó ń fi ohun tí yóò ṣẹlẹ̀ hàn láìṣe é", "Ó ń ṣe iṣẹ́ náà lẹ́ẹ̀mejì kí ó lè dá ni lójú", "Ó ń kọ́kọ́ pa fáìlì àtijọ́ rẹ́", "Ó ń fi ẹ̀dà model pamọ́"], answer: 0, why: "Dry run ń jẹ́ kí ènìyàn rí èsì kí ohunkóhun tó yí padà." },
            { objective: "O3", q: "Ìbéèrè ìfọwọ́sí náà kàn sọ \"Proceed? yes/no\" nìkan. Kí ni o máa yí padà?", options: ["Kò sí nǹkan, ó kúrú ó sì yé", "Jẹ́ kí aṣojú náà dáhùn bẹ́ẹ̀ ni fúnra rẹ̀", "Fi orúkọ fáìlì gangan àti ọ̀rọ̀ tí a máa fi pamọ́ hàn", "Yọ ìfọwọ́sí kúrò kí àkókò lè dín kù"], answer: 2, why: "Ènìyàn lè fọwọ́ sí nǹkan dáadáa nìkan nígbà tí ó bá rí àwọn kúlẹ̀kúlẹ̀ gangan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Fífún aṣojú ní irinṣẹ́ gidi",
        questions: [
          { objective: "O1", q: "Kí ni schema irinṣẹ́ ń fún model?", options: ["API key rẹ", "Kóòdù orísun irinṣẹ́ náà", "Orúkọ irinṣẹ́ náà, ète rẹ̀ àti àwọn input rẹ̀", "Àṣẹ láti ṣe ohunkóhun"], answer: 2, why: "Model ń yan irinṣẹ́ ó sì ń kọ input wọn láti inú schema wọn." },
          { objective: "O1", q: "Orúkọ irinṣẹ́ wo ló dára jù?", options: ["save_report", "doStuff", "tool1", "x"], answer: 0, why: "Orúkọ iṣẹ́ ń sọ fún model ohun tí irinṣẹ́ náà ń ṣe." },
          { objective: "O2", q: "Model fi orúkọ fáìlì '../../passwords.txt' ránṣẹ́ sí read_csv. Irinṣẹ́ náà yẹ kí ó:", options: ["Kà á, model ló béèrè", "Ní kí model ṣèlérí pé kò léwu", "Ka ìdajì rẹ̀", "Kọ̀ ọ́ pẹ̀lú ìkìlọ̀ àṣìṣe tó yé"], answer: 3, why: "Irinṣẹ́ gbọ́dọ̀ dènà ẹ̀tàn ọ̀nà tí ó ń lọ sí ẹ̀yìn fódà tí a gbà láàyè." },
          { objective: "O3", q: "Kí ló dé tí DRY_RUN fi yẹ kí ó wà ní títàn láìyípadà?", options: ["Ó yára jù", "Kò sí ohun tí yóò yí padà títí ẹnìkan yóò fi mọ̀ọ́mọ̀ pa á", "Àwọn model fẹ́ràn rẹ̀", "Ó ń dín token kù"], answer: 1, why: "Ipò àkọ́kọ́ tí kò léwu ń dènà ìkọ̀wé àìròtẹ́lẹ̀." },
          { objective: "O3", q: "Kí ló yẹ kí ìbéèrè ìfọwọ́sí fi hàn?", options: ["Àkópọ̀ tí model kọ", "Kò sí nǹkan, \"OK?\" nìkan", "Orúkọ model náà", "Àwọn kúlẹ̀kúlẹ̀ gangan: orúkọ fáìlì, ẹni tí yóò gbà á tàbí iye owó"], answer: 3, why: "Ènìyàn gbọ́dọ̀ fọwọ́ sí ohun tí yóò ṣẹlẹ̀ gan-an." }
        ]
      }
    },
    {
      name: "Orí 2: Láti aṣojú sí automation",
      lessons: [
        {
          objectives: ["O4"],
          title: "Trigger, àkókò tí a ṣètò àti ṣíṣe é lẹ́ẹ̀kan sí i láìléwu",
          minutes: 5,
          goal: "Yan trigger fún aṣojú kí o sì jẹ́ kí ṣíṣe é lẹ́ẹ̀kan sí i má léwu.",
          text: [
            "Automation jẹ́ aṣojú tí ó ń bẹ̀rẹ̀ fúnra rẹ̀. Trigger ló ń bẹ̀rẹ̀ rẹ̀: àkókò tí a ṣètò (gbogbo ọjọ́ Ajé ní agogo 8 àárọ̀), ìṣẹ̀lẹ̀ kan (fáìlì tuntun nínú fódà, ìdáhùn fọ́ọ̀mù tuntun) tàbí bọ́tìnnì tí ẹnìkan tẹ̀.",
            "A máa ń tún automation ṣe: àkókò tí a ṣètò lè bẹ̀rẹ̀ lẹ́ẹ̀mejì, ìṣiṣẹ́ kan lè kùnà ní àárín, kí o sì tún bẹ̀rẹ̀ rẹ̀. Ṣètò fún èyí. Idempotent túmọ̀ sí pé ṣíṣe é lẹ́ẹ̀mejì ń fún ọ ní èsì kan náà bí ẹ̀ẹ̀kan. Sọ èsì lórúkọ àkókò rẹ̀ (reports/week-42.md) kí o sì ṣàyẹ̀wò kí o tó kọ nǹkan: tí ìjábọ̀ náà bá ti wà, dúró tàbí béèrè, dípò kí o ṣe ẹ̀dà míì.",
            "Ọ̀nà láti ṣètò àkókò: lórí kọ̀mpútà tìrẹ, Windows Task Scheduler, tàbí cron lórí Mac àti Linux, lè ṣe script Python; àwọn irinṣẹ́ tí kò nílò kóòdù bí Zapier, Make àti n8n ń ṣe iṣẹ́ nígbà tí trigger bá dé; àwọn iṣẹ́ cloud náà ní scheduler. Colab wà fún ṣíṣe àti dídánwò, kì í ṣe fún ṣíṣe nǹkan ní àkókò tí a ṣètò. Ṣàyẹ̀wò òdiwọ̀n ọ̀fẹ́ irinṣẹ́ kọ̀ọ̀kan lórí ojú-òpó wẹ́ẹ̀bù tirẹ̀."
          ],
          steps: ["Yan trigger: àkókò tí a ṣètò, ìṣẹ̀lẹ̀ tàbí bọ́tìnnì.", "Sọ èsì kọ̀ọ̀kan lórúkọ àkókò rẹ̀, bí week-42.", "Kí o tó kọ nǹkan, ṣàyẹ̀wò bóyá èsì náà ti wà tẹ́lẹ̀.", "Tí ó bá ti wà, dúró tàbí béèrè; má ṣe ṣe ẹ̀dà kejì láéláé.", "Yan ibi tí yóò ti máa ṣiṣẹ́, kí o sì ṣàyẹ̀wò òdiwọ̀n irinṣẹ́ yẹn."],
          words: [["Trigger", "ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ automation."], ["Idempotent", "ó ṣeé ṣe ju ẹ̀ẹ̀kan lọ láìléwu: ìṣiṣẹ́ kejì kò yí nǹkan míì padà."], ["Cron", "scheduler lórí Mac àti Linux tí ó ń ṣe àṣẹ ní àkókò tí a ṣètò."]],
          slides: [
            { title: "Irú trigger mẹ́ta", bullets: ["Àkókò tí a ṣètò: gbogbo ọjọ́ Ajé ní agogo 8 àárọ̀", "Ìṣẹ̀lẹ̀: fáìlì tuntun tàbí ìdáhùn fọ́ọ̀mù", "Bọ́tìnnì: ènìyàn ló ń bẹ̀rẹ̀ rẹ̀"] },
            { title: "Ṣètò fún ṣíṣe é lẹ́ẹ̀kan sí i", bullets: ["Idempotent: ẹ̀ẹ̀mejì = ẹ̀ẹ̀kan", "Sọ èsì lórúkọ àkókò: week-42", "Ṣàyẹ̀wò kí o tó kọ; má ṣe ṣe ẹ̀dà kejì láéláé"] },
            { title: "Ibi tí ó ti lè ṣiṣẹ́", bullets: ["Task Scheduler tàbí cron lórí kọ̀mpútà rẹ", "Láìsí kóòdù: Zapier, Make, n8n", "Colab wà fún ṣíṣe é, kì í ṣe fún ṣíṣètò àkókò"] }
          ],
          tryIt: "Yí save_report padà kí orúkọ fáìlì ní nọ́mbà ọ̀sẹ̀ nínú, kí ìṣiṣẹ́ kejì fún ọ̀sẹ̀ kan náà sì dúró pẹ̀lú \"Report for week 42 already exists\". Ṣe é lẹ́ẹ̀mejì láti fi hàn pé ó ṣiṣẹ́.",
          youCanNow: "yan trigger kí o sì jẹ́ kí automation ṣeé ṣe ju ẹ̀ẹ̀kan lọ láìléwu.",
          quickCheck: [
            { objective: "O4", q: "Kí ló túmọ̀ sí pé automation jẹ́ idempotent?", options: ["Ó ń ṣiṣẹ́ lẹ́ẹ̀kan ṣoṣo lọ́dún", "Ṣíṣe é lẹ́ẹ̀mejì ń fún ọ ní èsì kan náà bí ṣíṣe é lẹ́ẹ̀kan", "Kò nílò trigger láéláé", "Ó máa ń béèrè ìfọwọ́sí nígbà gbogbo"], answer: 1, why: "A lè tún iṣẹ́ idempotent ṣe láìléwu láìṣe ẹ̀dà kejì." },
            { objective: "O4", q: "Iṣẹ́ ọ̀sẹ̀ rẹ ṣiṣẹ́ lẹ́ẹ̀mejì láìmọ̀ọ́mọ̀, ó sì ṣe ìjábọ̀ méjì. Kí ni o máa yí padà?", options: ["Máa ṣe é ní ìgbà díẹ̀ sí i", "Máa pa ìjábọ̀ rẹ́ fúnra rẹ lọ́sẹ̀ọ̀sẹ̀", "Pa log náà", "Sọ ìjábọ̀ lórúkọ ọ̀sẹ̀ kí o sì dúró tí ìjábọ̀ ọ̀sẹ̀ yẹn bá ti wà"], answer: 3, why: "Orúkọ tí ó ní ọ̀sẹ̀ pẹ̀lú àyẹ̀wò bóyá ó ti wà ń jẹ́ kí ṣíṣe é lẹ́ẹ̀kan sí i má léwu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sísopọ̀ irinṣẹ́ pẹ̀lú MCP",
          minutes: 5,
          goal: "Ṣàlàyé ohun tí MCP jẹ́ kí o sì pinnu ìgbà tí o máa lo MCP server.",
          text: [
            "Model Context Protocol (MCP) jẹ́ ìlànà open-source tí ó ń so àwọn app AI pọ̀ mọ́ ètò ìta: fáìlì, database, kàlẹ́ńdà, irinṣẹ́ ìwákiri. Ojú-òpó wẹ́ẹ̀bù tirẹ̀ fi wé ihò USB-C fún AI: ṣe ìsopọ̀ lẹ́ẹ̀kan, ọ̀pọ̀ app AI sì lè lò ó.",
            "Nínú MCP, server kan ń pèsè irinṣẹ́ àti dátà; client kan (nínú app AI bí Claude, ChatGPT tàbí ètò ìkọ kóòdù bí VS Code) ń sopọ̀ mọ́ ọn, ó sì ń jẹ́ kí model lò wọ́n. O lè lo server tí a ti ṣe tán tàbí kọ server kékeré tìrẹ nínú Python tí ó ń gbé irinṣẹ́ bí read_csv rẹ.",
            "MCP fúnra rẹ̀ kò ní jẹ́ kí irinṣẹ́ wà láìléwu. Gbogbo òfin láti Orí 1 ṣì wúlò: ṣàyẹ̀wò argument, àṣẹ tó kéré jù, ìfọwọ́sí fún ìkọ̀wé. Fi server sórí ẹ̀rọ láti orísun tí o gbẹ́kẹ̀ lé nìkan, nítorí server ń ṣiṣẹ́ pẹ̀lú ìwọlé èyíkéyìí tí o bá fún un. Ka ojú-ewé àwọn ìlànà ààbò MCP (security best practices) kí o tó so ohunkóhun àdáni pọ̀."
          ],
          words: [["MCP", "Model Context Protocol: ìlànà ṣíṣí sílẹ̀ fún sísopọ̀ àwọn app AI mọ́ irinṣẹ́ àti dátà."], ["MCP server", "ètò tí ó ń pèsè irinṣẹ́ tàbí dátà fún àwọn app AI nípasẹ̀ MCP."], ["MCP client", "apá app AI tí ó ń sopọ̀ mọ́ MCP server."]],
          slides: [
            { title: "Ohun tí MCP jẹ́", bullets: ["Ìlànà ṣíṣí sílẹ̀ láti so app AI mọ́ irinṣẹ́ àti dátà", "Bí ihò USB-C fún AI", "Ṣe é lẹ́ẹ̀kan, lò ó nínú ọ̀pọ̀ app AI"] },
            { title: "Server àti client", bullets: ["Server: ó ń pèsè irinṣẹ́ àti dátà", "Client: nínú app AI, ó ń sopọ̀ mọ́ server", "O lè kọ server kékeré nínú Python"] },
            { title: "Iṣẹ́ rẹ ṣì ni", bullets: ["Ṣàyẹ̀wò argument, àṣẹ tó kéré jù", "Ìfọwọ́sí fún ìkọ̀wé", "Fi server sórí ẹ̀rọ láti orísun tí o gbẹ́kẹ̀ lé nìkan"] }
          ],
          sources: [{ name: "Model Context Protocol: What is MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }],
          tryIt: "Ka ojú-ewé ìfihàn MCP. Lẹ́yìn náà kọ gbólóhùn mẹ́ta: irinṣẹ́ rẹ wo ni o máa pèsè nípasẹ̀ MCP server, app AI wo ni yóò lò ó, àti òfin ìfọwọ́sí wo ni o máa pa mọ́.",
          youCanNow: "ṣàlàyé MCP server àti client, kí o sì pinnu ìgbà tí sísopọ̀ irinṣẹ́ nípasẹ̀ MCP bọ́gbọ́n mu.",
          quickCheck: [
            { objective: "O5", q: "Kí ni MCP server?", options: ["Ètò tí ó ń pèsè irinṣẹ́ àti dátà fún àwọn app AI ní ọ̀nà kan tí gbogbo wọn gbà", "Model tí ó ń kọ kóòdù", "Fódà cloud fún ìjábọ̀", "Irú API key kan"], answer: 0, why: "MCP, Model Context Protocol, jẹ́ ọ̀nà tí gbogbo ènìyàn gbà láti so irinṣẹ́ àti dátà mọ́ àwọn app AI." },
            { objective: "O5", q: "O pèsè save_report nípasẹ̀ MCP server. Kí ló ń ṣẹlẹ̀ sí àyẹ̀wò argument àti ìfọwọ́sí rẹ̀?", options: ["A lè yọ wọ́n kúrò, nítorí MCP ń bójú tó ààbò", "Wọ́n kó lọ sínú app AI", "O pa wọ́n mọ́ nínú irinṣẹ́ náà", "Ìfọwọ́sí nìkan ló kù"], answer: 2, why: "MCP ń so irinṣẹ́ pọ̀; kò rọ́pò àyẹ̀wò àti ìfọwọ́sí inú kóòdù tìrẹ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣe automation ìjábọ̀ ọ̀sẹ̀",
          minutes: 6,
          goal: "Kó àwọn irinṣẹ́, loop àti àwọn òfin ààbò papọ̀ sínú automation kan.",
          text: [
            "Báyìí, kó gbogbo rẹ̀ papọ̀. Irinṣẹ́: read_csv (kíkà, a ti ṣàyẹ̀wò rẹ̀), calculator (kíkà, a ti ṣàyẹ̀wò rẹ̀), save_report (kíkọ: a ti ṣàyẹ̀wò rẹ̀, dry run, ìfọwọ́sí, kò sí ẹ̀dà kejì). Loop láti ẹ̀kọ́ 3 pẹ̀lú òdiwọ̀n ìgbésẹ̀ àti log. System prompt láti ẹ̀kọ́ 2 pẹ̀lú àfojúsùn: ṣe àkópọ̀ ọ̀sẹ̀ náà kí o sì fi ìjábọ̀ pamọ́.",
            "Ṣe fáìlì àṣeṣe kékeré láti fi dánwò, bí data/sales-week-42.csv pẹ̀lú àwọn kọ́lọ́ọ̀mù day, item, amount. Má ṣe fi dátà oníbàárà tàbí dátà àdáni gidi dánwò láéláé.",
            "Ṣe é láti ìbẹ̀rẹ̀ dé òpin. Ka log náà: ṣé ó kà kí ó tó ṣírò? Ṣé ó béèrè kí ó tó fi pamọ́? Ṣe é lẹ́ẹ̀kejì fún ọ̀sẹ̀ kan náà: kò gbọdọ̀ ṣe ẹ̀dà kejì. Lẹ́yìn náà gbìyànjú fáìlì tí ó ní ìlà búburú kan (ọ̀rọ̀ níbi tí nọ́mbà yẹ kí ó wà), kí o sì wò bóyá ó ròyìn ìṣòro náà dípò kí ó méfò."
          ],
          steps: ["Ṣe CSV àṣeṣe kan nínú fódà data.", "Forúkọ irinṣẹ́ mẹ́ta náà sílẹ̀ pẹ̀lú schema wọn.", "Ṣe loop náà pẹ̀lú òdiwọ̀n ìgbésẹ̀ àti log.", "Fọwọ́ sí fífi pamọ́ lẹ́ẹ̀kan; ṣe é lẹ́ẹ̀kan sí i láti dán an wò pé kò sí ẹ̀dà kejì.", "Dán fáìlì tí ó ní ìlà búburú wò."],
          words: [["Dátà ìdánwò (test data)", "dátà àṣeṣe tí a fi ń ṣàyẹ̀wò ètò láìfi ìsọfúnni gidi wewu."], ["Ìdánwò láti ìbẹ̀rẹ̀ dé òpin (end-to-end test)", "ṣíṣe gbogbo automation náà láti ìbẹ̀rẹ̀ dé òpin."]],
          slides: [
            { title: "Kó o papọ̀", bullets: ["read_csv, calculator, save_report", "Loop pẹ̀lú òdiwọ̀n ìgbésẹ̀ àti log", "Prompt pẹ̀lú àfojúsùn ọ̀sẹ̀"] },
            { title: "Dánwò pẹ̀lú dátà àṣeṣe", bullets: ["data/sales-week-42.csv", "Kì í ṣe dátà oníbàárà tàbí dátà àdáni gidi láéláé"] },
            { title: "Ṣàyẹ̀wò ìṣiṣẹ́ náà", bullets: ["Ṣé ó kà kí ó tó ṣírò?", "Ṣé ó béèrè kí ó tó fi pamọ́?", "Ìṣiṣẹ́ kejì: kò sí ẹ̀dà kejì", "Ìlà búburú: ó ròyìn rẹ̀, kò méfò"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe aṣojú ìjábọ̀ ọ̀sẹ̀ pẹ̀lú read_csv, calculator àti save_report (a ti ṣàyẹ̀wò rẹ̀, dry run láìyípadà, ìfọwọ́sí bẹ́ẹ̀ ni/rárá, kò sí ẹ̀dà kejì). Ṣe é lórí CSV àṣeṣe, tún un ṣe fún ọ̀sẹ̀ kan náà, kí o sì fi log ìṣiṣẹ́ kíkún pamọ́.",
          youCanNow: "yí aṣojú padà sí automation tí kò léwu, tí a lè tún ṣe, pẹ̀lú irinṣẹ́ gidi.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ìdánwò láti ìbẹ̀rẹ̀ dé òpin fún automation rẹ?", options: ["Dídán calculator nìkan wò", "Ṣíṣe gbogbo automation náà láti ìbẹ̀rẹ̀ dé òpin", "Kíka kóòdù náà sókè", "Dídán model wò nínú chatbot"], answer: 1, why: "Láti ìbẹ̀rẹ̀ dé òpin túmọ̀ sí pé gbogbo apá ń ṣiṣẹ́ papọ̀, bí yóò ṣe ṣe é gan-an." },
            { objective: "O6", q: "CSV rẹ ní ọ̀rọ̀ \"none\" níbi tí nọ́mbà tita yẹ kí ó wà. Kí ló yẹ kí aṣojú náà ṣe?", options: ["Ròyìn ìṣòro náà nínú àkópọ̀ rẹ̀", "Kà á sí òdo láìsọ fún ẹnikẹ́ni", "Fo gbogbo fáìlì náà", "Méfò nọ́mbà kan"], answer: 0, why: "Aṣojú tó dára ń ròyìn dátà búburú dípò kí ó fi í pamọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Láti aṣojú sí automation",
        questions: [
          { objective: "O4", q: "Èwo ni trigger ìṣẹ̀lẹ̀?", options: ["Ẹnìkan ka log náà", "Gbogbo ọjọ́ Ajé ní agogo 8 àárọ̀", "Fáìlì tuntun dé sínú fódà kan", "Òdiwọ̀n ìgbésẹ̀"], answer: 2, why: "Ìṣẹ̀lẹ̀ kan, bí fáìlì tuntun, ló ń bẹ̀rẹ̀ ìṣiṣẹ́ náà." },
          { objective: "O4", q: "Automation jẹ́ idempotent nígbà tí:", options: ["Ṣíṣe é lẹ́ẹ̀mejì ń fún ọ ní èsì kan náà bí ẹ̀ẹ̀kan", "Ó ń ṣiṣẹ́ kíákíá gan-an", "Kì í kùnà láéláé", "Kò lo irinṣẹ́ kankan"], answer: 0, why: "Ṣíṣe é lẹ́ẹ̀kan sí i láìléwu kò ní ṣe iṣẹ́ ẹlẹ́ẹ̀mejì." },
          { objective: "O5", q: "Kí ni MCP server ń ṣe?", options: ["Ó ń kọ́ model", "Ó ń pèsè irinṣẹ́ àti dátà fún àwọn app AI", "Ó ń tọ́jú ọ̀rọ̀ aṣínà rẹ", "Ó ń rọ́pò àyẹ̀wò argument"], answer: 1, why: "Server ń pèsè irinṣẹ́ àti dátà; client inú app AI ń sopọ̀ mọ́ wọn." },
          { objective: "O5", q: "O rí MCP server kan lórí ojú-òpó wẹ́ẹ̀bù tí o kò mọ̀, ó sì fẹ́ ìwọlé sí àwọn fáìlì rẹ. Kí ni ìgbésẹ̀ tó dára jù?", options: ["Lo server láti orísun tí o gbẹ́kẹ̀ lé nìkan, pẹ̀lú ìwọlé tó kéré jù tí ó nílò", "Fún un ní ìwọlé sí gbogbo nǹkan", "Fi í sórí ẹ̀rọ lẹ́sẹ̀kẹsẹ̀", "Pa àwọn ìfọwọ́sí"], answer: 0, why: "Server ń ṣiṣẹ́ pẹ̀lú ìwọlé èyíkéyìí tí o bá fún un." },
          { objective: "O6", q: "Dátà wo ló yẹ kí o fi dán automation rẹ wò?", options: ["Àkọsílẹ̀ oníbàárà gidi", "Ìwé àkọsílẹ̀ báńkì rẹ", "Ímeèlì ọ̀rẹ́ rẹ", "Dátà ìdánwò àṣeṣe"], answer: 3, why: "Dátà ìdánwò ń dáàbò bo ìsọfúnni gidi kúrò nínú ewu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Lílo Irinṣẹ́ àti Automation pẹ̀lú Aṣojú AI",
    questions: [
      { objective: "O1", q: "Schema irinṣẹ́ ní:", options: ["Dátà tí a fi kọ́ model", "Orúkọ, ète àti àwọn input", "Ọ̀rọ̀ aṣínà", "Àkọsílẹ̀ iye owó"], answer: 1, why: "Ìyẹn ni ohun tí model ń kà láti yan irinṣẹ́ kí ó sì lò ó." },
      { objective: "O1", q: "A ń lo JSON Schema láti:", options: ["Tọ́jú API key", "Ṣe àwòrán", "Ṣàpèjúwe bí input irinṣẹ́ ṣe rí", "Kọ́ model"], answer: 2, why: "Ó ń ṣàpèjúwe irú input àti àwọn apá tí ó pọndandan." },
      { objective: "O1", q: "Irinṣẹ́ tó dára ń ṣe:", options: ["Ohunkóhun tí model bá sọ", "Gbogbo iṣẹ́ lẹ́ẹ̀kan náà", "Iṣẹ́ kan tó yé", "Kò sí nǹkan"], answer: 2, why: "Irinṣẹ́ kékeré tí ó ṣe pàtó rọrùn láti yàn, kò sì léwu tó." },
      { objective: "O2", q: "Ta ló gbọ́dọ̀ fi agbára mú àwọn òfin irinṣẹ́?", options: ["Kóòdù irinṣẹ́ náà fúnra rẹ̀", "Model náà", "Browser olùlò", "Kò sí ẹnikẹ́ni"], answer: 0, why: "Model lè ṣàṣìṣe tàbí kí wọ́n tàn án jẹ." },
      { objective: "O2", q: "Orúkọ fáìlì '../secret.txt' jẹ́ àpẹẹrẹ:", options: ["Fáìlì lásán", "Trigger", "Schema", "Path traversal"], answer: 3, why: "../ ń gbìyànjú láti kúrò nínú fódà tí a gbà láàyè." },
      { objective: "O2", q: "Allow list jẹ́:", options: ["Àkọsílẹ̀ àwọn olùlò tí a dènà", "Àkọsílẹ̀ àwọn iye kan ṣoṣo tí a gbà láàyè", "Àkọsílẹ̀ ohun tí a ó ṣe", "Ètò model kan"], answer: 1, why: "Àwọn iye tí ó wà nínú àkọsílẹ̀ nìkan la gbà." },
      { objective: "O2", q: "Ṣé aṣojú yẹ kí ó ṣe ọ̀rọ̀ tí model kọ bí àṣẹ shell?", options: ["Bẹ́ẹ̀ ni, nígbà gbogbo", "Ní òpin ọ̀sẹ̀ nìkan", "Tí ó bá kúrú nìkan", "Rárá, láéláé"], answer: 3, why: "Ìyẹn ń sọ àṣìṣe model di ìṣòro fún gbogbo ẹ̀rọ." },
      { objective: "O3", q: "Dry run:", options: ["Ń pa fáìlì ìdánwò rẹ́", "Ń ṣiṣẹ́ láìsí model", "Ń fi ohun tí yóò ṣẹlẹ̀ hàn láìṣe é", "Ń ṣiṣẹ́ lẹ́ẹ̀mejì"], answer: 2, why: "Ó ń fi iṣẹ́ náà hàn ṣáájú láìléwu." },
      { objective: "O3", q: "Èwo ni irinṣẹ́ kíkọ?", options: ["save_report", "calculator", "read_csv", "search"], answer: 0, why: "Fífi pamọ́ ń yí nǹkan padà." },
      { objective: "O3", q: "Kí ìkọ̀wé gidi tó ṣẹlẹ̀, ẹni náà yẹ kí ó rí:", options: ["Àmì àtàǹpàkò sókè nìkan", "Fáìlì, ẹni tí yóò gbà á tàbí iye owó gangan", "API key náà", "Kò sí nǹkan"], answer: 1, why: "Ìfọwọ́sí gbọ́dọ̀ jẹ́ nípa àwọn kúlẹ̀kúlẹ̀ gidi." },
      { objective: "O3", q: "Model tún béèrè láti fi pamọ́ lẹ́sẹ̀kẹsẹ̀ lẹ́yìn tí o sọ rárá. O yẹ kí o:", options: ["Dá ìṣiṣẹ́ náà dúró kí o sì ka log", "Sọ bẹ́ẹ̀ ni kí ó lè dákẹ́", "Pa ìfọwọ́sí", "Fún un ní irinṣẹ́ sí i"], answer: 0, why: "Títún ìkọ̀wé tí a ti kọ̀ gbìyànjú jẹ́ àmì ìkìlọ̀." },
      { objective: "O4", q: "Èwo ni trigger àkókò tí a ṣètò?", options: ["Ìlà búburú kan", "Ìdáhùn fọ́ọ̀mù tuntun", "Títẹ bọ́tìnnì", "Gbogbo ọjọ́ Ajé ní agogo 8 àárọ̀"], answer: 3, why: "Àkókò tí a ṣètò ń bẹ̀rẹ̀ ìṣiṣẹ́ ní àkókò pàtó." },
      { objective: "O4", q: "Sísọ ìjábọ̀ lórúkọ ọ̀sẹ̀ (week-42) ń ràn wá lọ́wọ́ láti:", options: ["Mú kí model gbọ́n sí i", "Yẹra fún ìjábọ̀ ẹlẹ́ẹ̀mejì nígbà tí a bá tún un ṣe", "Fi ìjábọ̀ pamọ́", "Dín token kù"], answer: 1, why: "Aṣojú lè ṣàyẹ̀wò bóyá ìjábọ̀ ọ̀sẹ̀ yẹn ti wà." },
      { objective: "O4", q: "Ṣé Google Colab ni ibi tó tọ́ láti ṣe iṣẹ́ ọ̀sẹ̀ ní àkókò tí a ṣètò?", options: ["Bẹ́ẹ̀ ni, ó ń ṣiṣẹ́ títí láé", "Bẹ́ẹ̀ ni, ó ní kàlẹ́ńdà nínú", "Rárá, ó wà fún ṣíṣe àti dídánwò", "Fún àwọn tí ó sanwó nìkan"], answer: 2, why: "Lo scheduler tàbí iṣẹ́ automation fún ìṣiṣẹ́ ní àkókò tí a ṣètò." },
      { objective: "O4", q: "A ń lo cron àti Windows Task Scheduler láti:", options: ["Ṣàyẹ̀wò JSON", "Kọ prompt", "Ṣe ètò ní àkókò tí a ṣètò", "Kọ́ model"], answer: 2, why: "Scheduler ni wọ́n." },
      { objective: "O5", q: "MCP dúró fún:", options: ["Model Context Protocol", "Main Control Program", "Multi Cloud Platform", "Model Copy Process"], answer: 0, why: "Ìlànà ṣíṣí sílẹ̀ ni fún sísopọ̀ app AI mọ́ irinṣẹ́." },
      { objective: "O5", q: "Ojú-òpó wẹ́ẹ̀bù MCP fúnra rẹ̀ fi MCP wé:", options: ["Okùn ìgbàná fóònù fún Apple nìkan", "Ètò tí ó ń tọ́jú ọ̀rọ̀ aṣínà", "Spreadsheet", "Ihò USB-C fún àwọn app AI"], answer: 3, why: "Ìsopọ̀ kan tí gbogbo ènìyàn gbà tí ọ̀pọ̀ app lè lò." },
      { objective: "O5", q: "Lílo MCP túmọ̀ sí pé àyẹ̀wò argument rẹ:", options: ["Kò pọndandan mọ́", "Ṣì pọndandan", "Ojú-òpó wẹ́ẹ̀bù server ló ń ṣe é", "Model ló ń ṣe é"], answer: 1, why: "MCP ń so irinṣẹ́ pọ̀; kò jẹ́ kí wọ́n wà láìléwu fúnra rẹ̀." },
      { objective: "O6", q: "Ìlà kan nínú CSV ní ọ̀rọ̀ níbi tí nọ́mbà yẹ kí ó wà. Aṣojú tó dára:", options: ["Ń méfò nọ́mbà kan", "Ń fo gbogbo ìjábọ̀ láìsọ nǹkan", "Ń pa fáìlì náà rẹ́", "Ń ròyìn ìṣòro náà"], answer: 3, why: "Ròyìn ìṣòro dátà; má ṣe méfò láéláé." },
      { objective: "O6", q: "Ìdánwò láti ìbẹ̀rẹ̀ dé òpin túmọ̀ sí:", options: ["Dídán function kan wò", "Kíka schema", "Ṣíṣe gbogbo automation náà láti ìbẹ̀rẹ̀ dé òpin", "Ṣíṣàyẹ̀wò ìdáhùn ìkẹyìn nìkan"], answer: 2, why: "Ó ń ṣàyẹ̀wò gbogbo apá bí wọ́n ṣe ń ṣiṣẹ́ papọ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 4, 7, 9, 11, 12, 15, 17, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "A ṣàpèjúwe irinṣẹ́", objective: "O1", notYet: "Irinṣẹ́ kan kò ní schema, tàbí orúkọ tàbí ète rẹ̀ kò yé.", meets: "read_csv, calculator àti save_report ọ̀kọ̀ọ̀kan ní orúkọ, ète àti input tí a sọ irú wọn.", exceeds: "Àpèjúwe náà yé débi pé model yan irinṣẹ́ tó tọ́ ní ìgbà àkọ́kọ́." },
      { name: "A ṣàyẹ̀wò argument", objective: "O2", notYet: "save_report gba orúkọ fáìlì tàbí fódà èyíkéyìí.", meets: "Fáìlì .txt tàbí .md nìkan, nínú fódà reports nìkan; input búburú gba ìkìlọ̀ àṣìṣe tó yé.", exceeds: "A ṣàyẹ̀wò read_csv ní ọ̀nà kan náà, a sì dán àwọn ìkìlọ̀ àṣìṣe wò." },
      { name: "Dry run àti ìfọwọ́sí", objective: "O3", notYet: "A kọ ìjábọ̀ náà láìsí dry run tàbí bẹ́ẹ̀ ni.", meets: "Dry run wà ní títàn láìyípadà, a sì béèrè \"Save report? yes/no\" kí a tó kọ nǹkan.", exceeds: "Ìfọwọ́sí fi orúkọ fáìlì gangan àti àpẹẹrẹ ọ̀rọ̀ náà hàn." },
      { name: "Ṣíṣe é lẹ́ẹ̀kan sí i láìléwu", objective: "O4", notYet: "Ìṣiṣẹ́ kejì fún ọ̀sẹ̀ kan náà ṣe ìjábọ̀ ẹlẹ́ẹ̀mejì.", meets: "Ìṣiṣẹ́ kejì fún ọ̀sẹ̀ kan náà dúró láìṣe ẹ̀dà kejì.", exceeds: "Ó sọ kedere ìjábọ̀ ọ̀sẹ̀ wo ló ti wà tẹ́lẹ̀." },
      { name: "A kọ ìṣiṣẹ́ kíkún sínú log", objective: "O6", notYet: "Kò sí log, tàbí ìṣiṣẹ́ náà kò parí.", meets: "Log fi ìṣiṣẹ́ kíkún kan hàn láti kíka CSV dé ìfọwọ́sí.", exceeds: "Àkópọ̀ náà ròyìn àwọn ìlà búburú èyíkéyìí nínú dátà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí ẹ̀kọ́ 5 nínú ètò aṣojú láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń ṣe automation ní àkókò tí a ṣètò pẹ̀lú ìfọwọ́sí fún iṣẹ́ kíkọ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé kò sí ìkọ̀wé tí a kò fẹ́ tàbí ẹ̀dà ẹlẹ́ẹ̀mejì láti inú automation wọn (ìwádìí àtẹ̀lé)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní browser àti íńtánẹ́ẹ̀tì; Colab tàbí Python lórí kọ̀mpútà tìrẹ",
      "API key model láti ẹ̀kọ́ 2 tàbí model ọ̀fẹ́ tí ó ń ṣiṣẹ́ lórí kọ̀mpútà rẹ",
      "Fáìlì CSV àṣeṣe ti tita tàbí ìnáwó",
      "Loop aṣojú rẹ láti ẹ̀kọ́ 3",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe ìpele ààbò kọ̀ọ̀kan lójú ẹsẹ̀: schema, àyẹ̀wò, dry run, ìfọwọ́sí.",
      "Fún gbogbo ènìyàn ní CSV àṣeṣe kan náà kí ẹ lè fi èsì wéra; má ṣe lo àkọsílẹ̀ oníbàárà tàbí ti owó gidi láéláé.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ gbìyànjú àwọn orúkọ fáìlì búburú láti Ẹ̀kọ́ 2 sókè gẹ́gẹ́ bí ẹgbẹ́ kí wọ́n lè rí ìkìlọ̀ àṣìṣe kọ̀ọ̀kan.",
      "Tẹnu mọ́ ọn pé MCP server tí a gbẹ́kẹ̀ lé nìkan ni kí a lò, pẹ̀lú ìwọlé tó kéré jù tí ó nílò.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì ní kí akẹ́kọ̀ọ́ kọ̀ọ̀kan fi hàn pé ìṣiṣẹ́ kejì wọn dúró láìṣe ẹ̀dà kejì."
    ]
  }
};
