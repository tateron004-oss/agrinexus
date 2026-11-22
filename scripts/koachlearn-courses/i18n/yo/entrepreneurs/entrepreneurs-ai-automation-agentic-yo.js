"use strict";

// Koach Learn course (Yoruba translation of entrepreneurs/entrepreneurs-ai-automation-agentic.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-automation-agentic-yo",
  lang: "yo",
  translationOf: "entrepreneurs-ai-automation-agentic",
  category: "Entrepreneurs",
  name: "Iṣẹ́ Aládàáṣe pẹ̀lú AI àti Àwọn Aṣojú AI (Agentic Workflows)",
  skills: "Yíyà àwòrán ìlànà iṣẹ́, Èrò ohun-ìbẹ̀rẹ̀ àti ìgbésẹ̀, Kíkọ́ iṣẹ́ aládàáṣe láìsí kóòdù, Fífi ìgbésẹ̀ AI kún un, Fífi ààlà sí àwọn aṣojú AI, Ṣíṣọ́ àti títún iṣẹ́ aládàáṣe ṣe",
  outcome: "ya àwòrán ìlànà iṣẹ́ kan tí o máa ń tún ṣe nínú òwò rẹ, kọ́ iṣẹ́ aládàáṣe tí ó ń ṣiṣẹ́ fún un láìsí kóòdù pẹ̀lú ìgbésẹ̀ AI, fi ìgbésẹ̀ ìfọwọ́sí láti ọ̀dọ̀ ènìyàn kún un, kí o sì dán an wò, kí o sì máa ṣọ́ ọ kí ó lè dúró láìléwu tí nǹkan bá bàjẹ́.",
  about: [
    "Iṣẹ́ aládàáṣe (automation) túmọ̀ sí pé kọ̀mpútà ń ṣe iṣẹ́ kan tí a máa ń tún ṣe fún ọ nígbà tí nǹkan kan bá ṣẹlẹ̀: ẹnì kan kún fọ́ọ̀mù, ímeèlì kan dé, tàbí ẹnì kan sanwó fún ọjà. AI ń jẹ́ kí iṣẹ́ yẹn lè kà, tò, kí ó sì kọ̀wé. Àwọn irinṣẹ́ \"agentic\" (aṣojú AI) tún lọ jù bẹ́ẹ̀ lọ: o fún wọn ní àfojúsùn kan, wọ́n sì ń ṣètò, wọ́n sì ń gbé ọ̀pọ̀ ìgbésẹ̀ fúnra wọn.",
    "Ẹ̀kọ́ yìí wà fún àwọn olówò tí ó fẹ́ dẹ́kun dída ìsọfúnni kan náà kọ (copy àti paste) láti àárọ̀ di alẹ́. O máa ya àwòrán ìlànà iṣẹ́ kan, kọ́ èrò ohun-ìbẹ̀rẹ̀ àti ìgbésẹ̀, kọ́ iṣẹ́ aládàáṣe gidi pẹ̀lú irinṣẹ́ tí kò nílò kóòdù (bí Zapier, Make tàbí Microsoft Power Automate), fi ìgbésẹ̀ AI kún un, kí o sì fi ààlà sí i kí ohun pàtàkì kankan má ṣẹlẹ̀ láìjẹ́ pé o fọwọ́ sí i.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, pẹ̀lú iṣẹ́ tí o máa fi ọwọ́ ara rẹ ṣe. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Àwọn ohun tí irinṣẹ́ kọ̀ọ̀kan ń ṣe àti ààlà ètò ọ̀fẹ́ wọn máa ń yí padà lọ́pọ̀ ìgbà, nítorí náà ṣàyẹ̀wò ojú-ewé owó àti ìrànlọ́wọ́ irinṣẹ́ kọ̀ọ̀kan fúnra rẹ̀."
  ],
  finalTask: "Kọ́ iṣẹ́ aládàáṣe kan fún òwò rẹ kí o sì dán an wò. Àpẹẹrẹ: nígbà tí oníbàárà bá kún fọ́ọ̀mù ìbéèrè rẹ, fi ìbéèrè rẹ̀ sínú spreadsheet, jẹ́ kí AI kọ àkọ́pẹrẹ èsì, kí o sì fi àkọ́pẹrẹ náà ránṣẹ́ sí ọ fún ìfọwọ́sí kí ohunkóhun tó lọ sọ́dọ̀ oníbàárà. Kọ àkọsílẹ̀ ojú-ewé kan: àwòrán ìlànà iṣẹ́, ohun-ìbẹ̀rẹ̀ àti àwọn ìgbésẹ̀, ìtọ́ni AI, ìgbésẹ̀ ìfọwọ́sí, èsì ìdánwò mẹ́ta àti ohun tí o máa ṣàyẹ̀wò lọ́sọ̀ọ̀sẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olówò kékeré tí wọ́n ń lo ọ̀pọ̀ wákàtí láti da ìsọfúnni kan náà kọ láàárín fọ́ọ̀mù, ímeèlì àti spreadsheet, tí wọ́n sì fẹ́ kí kọ̀mpútà máa ṣe é fún wọn.",
    startingPoint: "Wọ́n ń lo fọ́ọ̀mù orí ayélujára, ímeèlì àti spreadsheet, wọ́n sì ti lo olùrànlọ́wọ́ AI rí. Díẹ̀ ló ti kọ́ iṣẹ́ aládàáṣe rí, tàbí tí wọ́n ti ronú nípa ohun tí aṣojú AI gbọ́dọ̀ ṣe fúnra rẹ̀ àti ohun tí kò gbọ́dọ̀ ṣe.",
    gap: "Dída nǹkan kan náà kọ léraléra ń fi wákàtí ṣòfò, ó sì ń fa àṣìṣe. Ṣùgbọ́n iṣẹ́ aládàáṣe àti àwọn aṣojú tí ń ṣiṣẹ́ láìsí ààlà lè fi èsì tí kò tọ́ ránṣẹ́, ná owó, tàbí jẹ́ kí ìsọfúnni oníbàárà jò jáde. Àwọn olówò nílò láti kọ́ iṣẹ́ aládàáṣe kékeré kan pẹ̀lú ìgbésẹ̀ AI, ààlà ìfọwọ́sí, ìdánwò àti àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀, kí ó lè dín àkókò kù kí ó sì dúró láìléwu tí nǹkan bá bàjẹ́.",
    constraints: [
      "Kò sí kóòdù; ọ̀rọ̀ tó rọrùn àti ètò ọ̀fẹ́ irinṣẹ́ tí kò nílò kóòdù",
      "Ẹ̀rọ: kọ̀mpútà tí ó ní irinṣẹ́ fọ́ọ̀mù, spreadsheet àti ímeèlì",
      "Àkókò: nǹkan bí ìṣẹ́jú márùn-ún fún ẹ̀kọ́ kọ̀ọ̀kan, pẹ̀lú àkókò kíkọ́ àti ìdánwò",
      "Àwọn ohun tí irinṣẹ́ ń ṣe àti ààlà ètò ọ̀fẹ́ máa ń yí padà; ṣàyẹ̀wò ojú-ewé owó àti ìrànlọ́wọ́ irinṣẹ́ kọ̀ọ̀kan",
      "Fi ìsọfúnni àfọwọ́ṣe dán an wò, kí o sì pa nọ́mbà káàdì àti ìsọfúnni àdáni míì mọ́ kúrò nínú ìgbésẹ̀ AI"
    ],
    prerequisites: "\"Àwọn Irinṣẹ́ AI Tí Gbogbo Oníṣòwò Gbọ́dọ̀ Mọ̀\", tàbí kí o mọ fọ́ọ̀mù orí ayélujára àti spreadsheet lò dáadáa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ní ìlànà iṣẹ́ kan tí o máa ń tún ṣe lọ́sọ̀ọ̀sẹ̀", action: "ya àwòrán rẹ̀ bí àwọn ìgbésẹ̀ láti ìbẹ̀rẹ̀ dé òpin, kí o sì sàmì sí ọ̀kọ̀ọ̀kan bí dída-kọ, ìpinnu tàbí kíkọ̀wé", standard: "lẹ́yìn tí o bá ti tún ohunkóhun tí AI ṣì ṣe" },
    { id: "O2", condition: "Tí o bá ní àwòrán ìlànà iṣẹ́ rẹ", action: "kọ ìlànà iṣẹ́ náà bí ohun-ìbẹ̀rẹ̀ kan àti àkọsílẹ̀ àwọn ìgbésẹ̀", standard: "pẹ̀lú ìgbésẹ̀ AI àti ìgbésẹ̀ ìfọwọ́sí tí a sàmì sí" },
    { id: "O3", condition: "Ní lílo ètò ọ̀fẹ́ irinṣẹ́ tí kò nílò kóòdù", action: "kọ́ iṣẹ́ aládàáṣe tí ó ń gbé ìdáhùn fọ́ọ̀mù lọ sínú spreadsheet, tí ó sì ń fi ìfitónilétí ránṣẹ́ sí ọ", standard: "tí a ti fi ìsọfúnni àfọwọ́ṣe dán wò, tí ó sì ń ṣiṣẹ́" },
    { id: "O4", condition: "Tí o bá ní iṣẹ́ aládàáṣe rẹ tí ó ń ṣiṣẹ́", action: "fi ìgbésẹ̀ AI kún un tí ó ń kọ àkọ́pẹrẹ èsì tàbí tí ó ń tò ìbéèrè, tí ó sì ń fi ránṣẹ́ sí ọ", standard: "pẹ̀lú òfin tó yé, tí a dán wò lórí ìbéèrè mẹ́ta tó yàtọ̀, láìsí ìsọfúnni àdáni kankan tí ó gba ibẹ̀ kọjá" },
    { id: "O5", condition: "Fún iṣẹ́ aládàáṣe rẹ tàbí aṣojú AI èyíkéyìí", action: "kọ àkọsílẹ̀ ààlà ohun tí ó lè ṣe fúnra rẹ̀ àti ohun tí ó gbọ́dọ̀ gba ìfọwọ́sí rẹ nígbà gbogbo", standard: "níbi tí fífi nǹkan ránṣẹ́ sí oníbàárà àti níná owó máa ń nílò ìfọwọ́sí nígbà gbogbo" },
    { id: "O6", condition: "Kí o tó tan iṣẹ́ aládàáṣe rẹ àti lẹ́yìn tí o bá tàn án", action: "dán an wò pẹ̀lú ìsọfúnni àjèjì, tan ìkìlọ̀ ìkùnà, kí o sì ṣètò àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀", standard: "kí ó lè dúró kí ó sì kìlọ̀ fún ọ nígbà tí nǹkan bá bàjẹ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Ronú ní ìlànà iṣẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yíya àwòrán ìlànà iṣẹ́ tí o máa ń tún ṣe",
          minutes: 5,
          goal: "Kọ ìlànà iṣẹ́ òwò kan tí o máa ń tún ṣe sílẹ̀ bí àkọsílẹ̀ àwọn ìgbésẹ̀ láti ìbẹ̀rẹ̀ dé òpin.",
          text: [
            "Kí o tó sọ ohunkóhun di aládàáṣe, kọ ọ́ sílẹ̀. Ìlànà iṣẹ́ (workflow) ni àwọn ìgbésẹ̀ tí iṣẹ́ kan ń gbà kọjá láti ìbẹ̀rẹ̀ dé òpin. Àpẹẹrẹ, ìbéèrè oníbàárà tuntun: fọ́ọ̀mù dé, o da àwọn ìsọfúnni kọ sínú spreadsheet, o kọ èsì, o sì ṣe ìránnilétí láti tún kàn sí i.",
            "Yan ìlànà iṣẹ́ kan tí ó máa ń ṣẹlẹ̀ lọ́pọ̀ ìgbà, tí ó ń tẹ̀lé ìgbésẹ̀ kan náà ní gbogbo ìgbà, tí ó sì ń fi àkókò rẹ ṣòfò pẹ̀lú dída-kọ, lílẹ̀ (paste) tàbí títẹ̀ nǹkan léraléra. Àwọn wọ̀nyí ló dára jù láti sọ di aládàáṣe.",
            "AI lè ràn ọ́ lọ́wọ́ láti ya àwòrán rẹ̀. Ṣàlàyé ohun tí o ń ṣe ní ọ̀rọ̀ ara rẹ, kí o sì béèrè pé: \"Sọ èyí di ìlànà iṣẹ́ tí ó ní nọ́mbà. Sàmì sí àwọn ìgbésẹ̀ tí ó jẹ́ dída ìsọfúnni kọ, àwọn tí ó nílò ìpinnu, àti àwọn tí ó nílò kíkọ̀wé.\""
          ],
          steps: ["Yan ìlànà iṣẹ́ kan tí o máa ń ṣe ó kéré tán lẹ́ẹ̀kan lọ́sẹ̀.", "Ṣàlàyé rẹ̀ fún olùrànlọ́wọ́ AI ní ọ̀rọ̀ ara rẹ.", "Béèrè ìlànà iṣẹ́ tí ó ní nọ́mbà, tí ó sàmì sí dída-kọ, ìpinnu àti kíkọ̀wé.", "Fi àwòrán náà wé ohun tí o ń ṣe gan-an, kí o sì tún un ṣe."],
          words: [["Ìlànà iṣẹ́ (workflow)", "àwọn ìgbésẹ̀ tí iṣẹ́ kan ń gbà kọjá láti ìbẹ̀rẹ̀ dé òpin."], ["Sọ di aládàáṣe (automate)", "ṣètò kọ̀mpútà láti máa ṣe iṣẹ́ kan tí a ń tún ṣe, láìjẹ́ pé ìwọ ló ń ṣe ìgbésẹ̀ kọ̀ọ̀kan."]],
          slides: [
            { title: "Kọ ọ́ sílẹ̀ ná", bullets: ["Ìlànà iṣẹ́ = àwọn ìgbésẹ̀ láti ìbẹ̀rẹ̀ dé òpin", "Àpẹẹrẹ: fọ́ọ̀mù, spreadsheet, èsì, ìránnilétí"] },
            { title: "Àwọn ìlànà tó dára jù láti sọ di aládàáṣe", bullets: ["Ó máa ń ṣẹlẹ̀ lọ́pọ̀ ìgbà", "Ìgbésẹ̀ kan náà ní gbogbo ìgbà", "Ọ̀pọ̀ dída-kọ àti títẹ̀ léraléra"] },
            { title: "Fi AI ya àwòrán rẹ̀", bullets: ["Ṣàlàyé ohun tí o ń ṣe", "Béèrè àwọn ìgbésẹ̀ tí ó ní nọ́mbà", "Sàmì sí dída-kọ, ìpinnu àti kíkọ̀wé"] }
          ],
          tryIt: "Fi ìrànlọ́wọ́ AI ya àwòrán ìlànà iṣẹ́ kan tí o máa ń tún ṣe lọ́sọ̀ọ̀sẹ̀. Sàmì sí ìgbésẹ̀ kọ̀ọ̀kan bí dída-kọ, ìpinnu tàbí kíkọ̀wé, kí o sì tún ohunkóhun tí AI ṣì ṣe.",
          youCanNow: "ya àwòrán ìlànà iṣẹ́ òwò tí o máa ń tún ṣe bí àwọn ìgbésẹ̀ tó yé.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ìlànà iṣẹ́ (workflow)?", options: ["Àwọn ìgbésẹ̀ tí iṣẹ́ ń gbà kọjá láti ìbẹ̀rẹ̀ dé òpin", "Irú spreadsheet kan", "Ẹ̀sùn oníbàárà", "App AI kan"], answer: 0, why: "Ìlànà iṣẹ́ ń to ìgbésẹ̀ kọ̀ọ̀kan nínú iṣẹ́ kan lẹ́sẹẹsẹ." },
            { objective: "O1", q: "Àwòrán tí AI ya fún ìlànà títà ọjà rẹ fi ìgbésẹ̀ tí o ti ń ṣàyẹ̀wò ọjà tó wà nílé sílẹ̀. Kí ni o máa ṣe?", options: ["Lo àwòrán náà bí ó ti rí", "Fi ìgbésẹ̀ tí ó kù kún un fúnra rẹ", "Bẹ̀rẹ̀ sí sọ ọ́ di aládàáṣe bẹ́ẹ̀ náà", "Pa gbogbo àwòrán náà rẹ́"], answer: 1, why: "Ìwọ lo mọ ìlànà iṣẹ́ rẹ jù, nítorí náà ìwọ lo máa tún àwòrán AI ṣe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ohun-ìbẹ̀rẹ̀ àti àwọn ìgbésẹ̀",
          minutes: 5,
          goal: "Sọ àwòrán ìlànà iṣẹ́ rẹ di ohun-ìbẹ̀rẹ̀ kan àti àkọsílẹ̀ àwọn ìgbésẹ̀.",
          text: [
            "Gbogbo iṣẹ́ aládàáṣe ní ohun-ìbẹ̀rẹ̀ (trigger) kan àti ìgbésẹ̀ (action) kan tàbí jù bẹ́ẹ̀ lọ. Ohun-ìbẹ̀rẹ̀ ni ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ rẹ̀: \"ìdáhùn fọ́ọ̀mù tuntun\", \"ímeèlì tuntun tí ó ní ọ̀rọ̀ invoice\", \"ọjà tuntun tí a ti sanwó fún\". Àwọn ìgbésẹ̀ ni ohun tí ó ń ṣẹlẹ̀ lẹ́yìn náà: \"fi ìlà kan kún spreadsheet\", \"fi ọ̀rọ̀ ránṣẹ́ sí mi\", \"ṣe ìṣẹ̀lẹ̀ kan sínú kàlẹ́ńdà\".",
            "Àwọn ìgbésẹ̀ dída-kọ máa ń di ìgbésẹ̀ aládàáṣe ní ìrọ̀rùn. Àwọn ìgbésẹ̀ kíkọ̀wé lè di ìgbésẹ̀ AI. Àwọn ìgbésẹ̀ ìpinnu sábà máa ń wà lọ́wọ́ rẹ, tàbí kí wọ́n di ìgbésẹ̀ ìfọwọ́sí, níbi tí iṣẹ́ aládàáṣe náà ti ń dúró de \"bẹ́ẹ̀ ni\" rẹ.",
            "Àwọn irinṣẹ́ tí kò nílò kóòdù bí Zapier, Make àti Microsoft Power Automate ń so àwọn app tí o ti ń lò pọ̀ pẹ̀lú ohun-ìbẹ̀rẹ̀ àti ìgbésẹ̀. Ọ̀pọ̀ nínú wọn ní ètò ọ̀fẹ́ tí ó ní ààlà; ṣàyẹ̀wò ojú-ewé owó irinṣẹ́ kọ̀ọ̀kan láti mọ ohun tí ó wà nínú rẹ̀ lónìí."
          ],
          steps: ["Wá ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ ìlànà iṣẹ́ rẹ: ìyẹn ni ohun-ìbẹ̀rẹ̀.", "Sọ ìgbésẹ̀ dída-kọ kọ̀ọ̀kan di ìgbésẹ̀ aládàáṣe.", "Sọ àwọn ìgbésẹ̀ kíkọ̀wé di ìgbésẹ̀ AI.", "Sọ àwọn ìgbésẹ̀ ìpinnu di ìgbésẹ̀ ìfọwọ́sí, tàbí kí o máa ṣe wọ́n fúnra rẹ.", "Kọ ọ́ báyìí: Nígbà tí [ohun-ìbẹ̀rẹ̀], nígbà náà [ìgbésẹ̀ 1], [ìgbésẹ̀ 2]..."],
          words: [["Ohun-ìbẹ̀rẹ̀ (trigger)", "ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ iṣẹ́ aládàáṣe."], ["Ìgbésẹ̀ (action)", "ohun tí iṣẹ́ aládàáṣe ń ṣe lẹ́yìn ohun-ìbẹ̀rẹ̀."], ["Irinṣẹ́ tí kò nílò kóòdù (no-code tool)", "irinṣẹ́ tí ó ń jẹ́ kí o kọ́ iṣẹ́ aládàáṣe nípa títẹ bọ́tìnnì àti yíyan nǹkan, kì í ṣe nípa kíkọ kóòdù."]],
          slides: [
            { title: "Ohun-ìbẹ̀rẹ̀ kan, ìgbésẹ̀ díẹ̀", bullets: ["Ohun-ìbẹ̀rẹ̀: ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ rẹ̀", "Àwọn ìgbésẹ̀: ohun tí ó ń ṣẹlẹ̀ lẹ́yìn náà"] },
            { title: "Sọ àwọn ìgbésẹ̀ di ìgbésẹ̀ aládàáṣe", bullets: ["Dída-kọ: ìgbésẹ̀ tí ó rọrùn", "Kíkọ̀wé: ìgbésẹ̀ AI", "Ìpinnu: ìgbésẹ̀ ìfọwọ́sí tàbí ìwọ fúnra rẹ"] },
            { title: "Àwọn irinṣẹ́ tí kò nílò kóòdù", bullets: ["Zapier, Make, Microsoft Power Automate", "Wọ́n ń so àwọn app tí o ti ń lò pọ̀", "Ṣàyẹ̀wò ààlà ètò ọ̀fẹ́ lórí ojú-òpó wẹ́ẹ̀bù wọn"] }
          ],
          sources: [{ name: "Zapier: Owó (Pricing)", url: "https://zapier.com/pricing" }, { name: "Make: Owó (Pricing)", url: "https://www.make.com/en/pricing" }],
          tryIt: "Kọ ìlànà iṣẹ́ rẹ báyìí: \"Nígbà tí [ohun-ìbẹ̀rẹ̀], nígbà náà [àwọn ìgbésẹ̀]\". Sàmì sí ìgbésẹ̀ tí ó jẹ́ ti AI àti ibi tí o fẹ́ ìgbésẹ̀ ìfọwọ́sí.",
          youCanNow: "ṣàpèjúwe iṣẹ́ aládàáṣe èyíkéyìí bí ohun-ìbẹ̀rẹ̀ pẹ̀lú àwọn ìgbésẹ̀, kí àwọn ìpinnu sì wà lábẹ́ àṣẹ rẹ.",
          quickCheck: [
            { objective: "O2", q: "Nínú \"Nígbà tí owó bá dé, fi ìwé-ẹ̀rí ìsanwó ránṣẹ́\", kí ni ìgbésẹ̀ náà?", options: ["Owó dé", "Oníbàárà", "Fi ìwé-ẹ̀rí ìsanwó ránṣẹ́", "Ilé-ìfowópamọ́"], answer: 2, why: "Ìgbésẹ̀ ni ohun tí ó ń ṣẹlẹ̀ lẹ́yìn ohun-ìbẹ̀rẹ̀." },
            { objective: "O2", q: "Ìgbésẹ̀ kan nínú ìlànà iṣẹ́ rẹ ni pípinnu bóyá kí o dá owó padà fún oníbàárà. Báwo ni o ṣe máa ṣe é?", options: ["Jẹ́ kí iṣẹ́ aládàáṣe pinnu", "Jẹ́ kí AI pinnu", "Yọ ìgbésẹ̀ náà kúrò", "Fi sílẹ̀ bí ìgbésẹ̀ ìfọwọ́sí fún ọ"], answer: 3, why: "Àwọn ìgbésẹ̀ ìpinnu máa ń di ìfọwọ́sí tàbí kí wọ́n wà lọ́wọ́ rẹ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíkọ́ iṣẹ́ aládàáṣe àkọ́kọ́ rẹ láìsí kóòdù",
          minutes: 6,
          goal: "Kọ́ iṣẹ́ aládàáṣe tí ó ń ṣiṣẹ́, tí ó ń gbé ìdáhùn fọ́ọ̀mù lọ sínú spreadsheet, tí ó sì ń fi ìfitónilétí ránṣẹ́ sí ọ.",
          text: [
            "Bẹ̀rẹ̀ pẹ̀lú iṣẹ́ aládàáṣe tí ó rọrùn tí kò sì léwu: nígbà tí ẹnì kan bá kún fọ́ọ̀mù ìbéèrè rẹ (fún àpẹẹrẹ Google Form tàbí Microsoft Form), fi ìdáhùn wọn kún spreadsheet kan, kí o sì gba ìfitónilétí. Kò sí ohun tí ó máa lọ sọ́dọ̀ oníbàárà síbẹ̀.",
            "Nínú irinṣẹ́ tí kò nílò kóòdù, ṣẹ̀dá iṣẹ́ aládàáṣe tuntun, yan app fọ́ọ̀mù bí ohun-ìbẹ̀rẹ̀, so àkọọ́lẹ̀ rẹ pọ̀, kí o sì yan fọ́ọ̀mù náà. Lẹ́yìn náà fi ìgbésẹ̀ kan kún un fún spreadsheet, kí o sì so ìbéèrè fọ́ọ̀mù kọ̀ọ̀kan mọ́ òpó kan. Fi ìgbésẹ̀ kejì kún un láti fi ímeèlì tàbí ọ̀rọ̀ ránṣẹ́ sí ọ.",
            "Dán an wò pẹ̀lú ìbéèrè àfọwọ́ṣe tí ó ní orúkọ àfọwọ́ṣe bí \"Test Customer\". Ṣàyẹ̀wò pé ìlà náà wọ inú àwọn òpó tó tọ́, àti pé ọ̀rọ̀ náà dé ọ̀dọ̀ rẹ. Ìgbà yẹn nìkan ni kí o tàn án."
          ],
          steps: ["Ṣe fọ́ọ̀mù ìbéèrè kúkúrú tí ó ní orúkọ, ímeèlì àti ìbéèrè.", "Nínú irinṣẹ́ tí kò nílò kóòdù, yan fọ́ọ̀mù náà bí ohun-ìbẹ̀rẹ̀.", "Fi ìgbésẹ̀ spreadsheet kún un, kí o sì so àwọn ìbéèrè mọ́ àwọn òpó.", "Fi ìgbésẹ̀ kan kún un láti fi ìfitónilétí ránṣẹ́ sí ọ.", "Dán an wò pẹ̀lú ìsọfúnni \"Test Customer\", ṣàyẹ̀wò èsì, lẹ́yìn náà tàn án."],
          words: [["So àkọọ́lẹ̀ pọ̀ (connect an account)", "fún irinṣẹ́ aládàáṣe ní àṣẹ láti lo ọ̀kan nínú àwọn app rẹ."], ["Ìsopọ̀ àwọn àpótí (field mapping)", "síso ìsọfúnni kọ̀ọ̀kan mọ́ ibi tí ó yẹ kí ó lọ, bí ìbéèrè fọ́ọ̀mù kan mọ́ òpó kan nínú spreadsheet."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú èyí tó rọrùn tí kò léwu", bullets: ["Ìdáhùn fọ́ọ̀mù sínú spreadsheet", "Ìfitónilétí sí ọ", "Kò sí ohun tí ó lọ sọ́dọ̀ oníbàárà síbẹ̀"] },
            { title: "Kọ́ ọ", bullets: ["Ohun-ìbẹ̀rẹ̀: ìdáhùn fọ́ọ̀mù tuntun", "Ìgbésẹ̀: fi ìlà kún spreadsheet, so àwọn àpótí pọ̀", "Ìgbésẹ̀: fi ìfitónilétí ránṣẹ́ sí ọ"] },
            { title: "Dán an wò kí o tó tàn án", bullets: ["Lo ìsọfúnni \"Test Customer\"", "Ṣàyẹ̀wò àwọn òpó àti ìfitónilétí", "Lẹ́yìn náà tàn án"] }
          ],
          tryIt: "Kọ́ iṣẹ́ aládàáṣe fọ́ọ̀mù-sí-spreadsheet pẹ̀lú ìfitónilétí nínú ètò ọ̀fẹ́ irinṣẹ́ tí kò nílò kóòdù. Dán an wò pẹ̀lú ìsọfúnni àfọwọ́ṣe, kí o sì rí i dájú pé ó ń ṣiṣẹ́.",
          youCanNow: "kọ́ iṣẹ́ aládàáṣe tí ó rọrùn láìsí kóòdù láàárín àwọn app tí o ń lò, kí o sì dán an wò.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìsopọ̀ àwọn àpótí (field mapping) nínú irinṣẹ́ tí kò nílò kóòdù?", options: ["Síso ìsọfúnni kọ̀ọ̀kan mọ́ ibi tí ó yẹ kí ó lọ", "Yíya àwòrán ṣọ́ọ̀bù rẹ", "Yíyan irú lẹ́tà", "Sísanwó fún ètò kan"], answer: 0, why: "Ìsopọ̀ àwọn àpótí ń fi ìdáhùn kọ̀ọ̀kan ránṣẹ́ sí òpó tó tọ́." },
            { objective: "O3", q: "O ti kọ́ iṣẹ́ aládàáṣe rẹ tán. Kí ni o máa ṣe kí o tó tàn án?", options: ["Fi ránṣẹ́ sí gbogbo oníbàárà", "Dán an wò pẹ̀lú ìsọfúnni àfọwọ́ṣe bí \"Test Customer\"", "Pa fọ́ọ̀mù náà rẹ́", "Fo ìdánwò kọjá kí o lè fi àkókò pamọ́"], answer: 1, why: "Ìdánwò pẹ̀lú ìsọfúnni àfọwọ́ṣe ń rí ìṣòro láìsí ewu." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ronú ní ìlànà iṣẹ́",
        questions: [
          { objective: "O1", q: "Ìlànà iṣẹ́ wo ló dára jù láti kọ́kọ́ sọ di aládàáṣe?", options: ["Ìpinnu òfin tí a ṣe lẹ́ẹ̀kan ṣoṣo", "Èyí tí ó máa ń ṣẹlẹ̀ lọ́pọ̀ ìgbà pẹ̀lú ìgbésẹ̀ kan náà àti ọ̀pọ̀ dída-kọ", "Nǹkan tí o ń ṣe lẹ́ẹ̀kan lọ́dún", "Gbígba òṣìṣẹ́ àkọ́kọ́ rẹ"], answer: 1, why: "Iṣẹ́ dída-kọ tí ó ń ṣẹlẹ̀ léraléra ló ń fi àkókò pamọ́ jù." },
          { objective: "O2", q: "Nínú \"Nígbà tí ìdáhùn fọ́ọ̀mù tuntun bá dé, fi ìlà kan kún spreadsheet\", kí ni ohun-ìbẹ̀rẹ̀?", options: ["Ímeèlì rẹ", "Fi ìlà kan kún spreadsheet", "Spreadsheet náà", "Ìdáhùn fọ́ọ̀mù tuntun dé"], answer: 3, why: "Ohun-ìbẹ̀rẹ̀ ni ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ iṣẹ́ aládàáṣe." },
          { objective: "O2", q: "Kí ló sábà máa ń ṣẹlẹ̀ sí àwọn ìgbésẹ̀ ìpinnu nínú iṣẹ́ aládàáṣe?", options: ["Wọ́n máa ń di ìgbésẹ̀ ìfọwọ́sí tàbí kí wọ́n wà lọ́wọ́ rẹ", "Irinṣẹ́ náà máa ń ṣe àfojúsùn", "A máa ń pa wọ́n rẹ́", "Oníbàárà ló máa ń pinnu"], answer: 0, why: "Àwọn ìpinnu nílò òye rẹ." },
          { objective: "O3", q: "Kí ni ìsopọ̀ àwọn àpótí (field mapping)?", options: ["Yíyan irú lẹ́tà", "Yíya àwòrán oko", "Síso ìsọfúnni kọ̀ọ̀kan mọ́ ibi tí ó yẹ kí ó lọ", "Sísan owó ìwé-owó"], answer: 2, why: "Ó ń so àwọn ìbéèrè fọ́ọ̀mù mọ́ àwọn òpó spreadsheet." },
          { objective: "O3", q: "Ìsọfúnni wo ni o yẹ kí o fi dán iṣẹ́ aládàáṣe tuntun wò?", options: ["Ọ̀rọ̀ aṣínà rẹ", "Nọ́mbà káàdì oníbàárà gidi", "Ìsọfúnni àfọwọ́ṣe bí \"Test Customer\"", "Kò sí ìdánwò rárá"], answer: 2, why: "Ìsọfúnni àfọwọ́ṣe ń jẹ́ kí o dán an wò láìléwu." }
        ]
      }
    },
    {
      name: "Orí 2: Fi AI kún un, kí àṣẹ sì wà lọ́wọ́ rẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fífi ìgbésẹ̀ AI kún un",
          minutes: 5,
          goal: "Fi ìgbésẹ̀ AI kún un tí ó ń kọ àkọ́pẹrẹ èsì tàbí tí ó ń tò ìbéèrè.",
          text: [
            "Ọ̀pọ̀ irinṣẹ́ tí kò nílò kóòdù ń jẹ́ kí o fi ìgbésẹ̀ AI kún un: fi ọ̀rọ̀ ránṣẹ́ sí AI pẹ̀lú ìtọ́ni, kí o sì gba ìdáhùn rẹ̀ padà gẹ́gẹ́ bí apá kan iṣẹ́ aládàáṣe náà. Ìlò tí ó wọ́pọ̀: títo ìbéèrè sí ẹ̀ka kan, mímú àwọn kókó ìsọfúnni jáde, tàbí kíkọ àkọ́pẹrẹ èsì. Lórí àwọn irinṣẹ́ kan, ìgbésẹ̀ AI wà lórí ètò ìsanwó nìkan (nígbà tí a ṣàyẹ̀wò ní October 2026, ìgbésẹ̀ AI Zapier nílò ètò ìsanwó); ṣàyẹ̀wò ojú-ewé owó. Tí tìrẹ kò bá ní i, jẹ́ kí iṣẹ́ aládàáṣe náà fi ìbéèrè náà ránṣẹ́ sí ọ, kí o sì lẹ̀ ẹ́ sínú olùrànlọ́wọ́ AI ọ̀fẹ́ fúnra rẹ.",
            "Kọ ìtọ́ni AI dáadáa, bí prompt tí o máa lò léraléra: \"Ka ìbéèrè oníbàárà yìí. Fèsì ní ọ̀rọ̀ tí kò tó 100, pẹ̀lú ìwà ọ̀rẹ́ àti ọ̀rọ̀ tó yé. Lo ìsọfúnni òwò tí a fún ọ níbí nìkan: [àkókò iṣẹ́, àwọn iṣẹ́ tí a ń ṣe]. Má ṣe sọ iye owó kankan láéláé. Tí kò bá dá ọ lójú, kọ [CHECK].\"",
            "Fi àkọ́pẹrẹ AI ránṣẹ́ sí ÌWỌ, kì í ṣe sí oníbàárà. Ronú nípa ìsọfúnni oníbàárà tí ó ń lọ sí iṣẹ́ AI náà; ṣàyẹ̀wò òfin ìsọfúnni àti àṣírí irinṣẹ́ náà, má sì ṣe fi nọ́mbà káàdì, nọ́mbà ìdánimọ̀ tàbí ìsọfúnni ìlera ránṣẹ́ gbà á."
          ],
          steps: ["Fi ìgbésẹ̀ AI kún un lẹ́yìn ìgbésẹ̀ spreadsheet.", "Kọ ìtọ́ni tí a ronú dáadáa, pẹ̀lú òfin àti òtítọ́ nípa òwò rẹ.", "Fi ọ̀rọ̀ ìbéèrè tí AI nílò nìkan ránṣẹ́ sí i.", "Fi àkọ́pẹrẹ AI ránṣẹ́ sí ara rẹ fún àyẹ̀wò.", "Dán an wò pẹ̀lú ìbéèrè àfọwọ́ṣe mẹ́ta tó yàtọ̀."],
          words: [["Ìgbésẹ̀ AI (AI action)", "ìgbésẹ̀ kan nínú iṣẹ́ aládàáṣe tí ó ń fi ọ̀rọ̀ ránṣẹ́ sí AI, tí ó sì ń lo ìdáhùn rẹ̀."], ["Òfin ìsọfúnni (data terms)", "àwọn òfin nípa bí irinṣẹ́ kan ṣe ń tọ́jú àti lo ìsọfúnni tí o fi ránṣẹ́ sí i."]],
          slides: [
            { title: "Ohun tí ìgbésẹ̀ AI lè ṣe", bullets: ["Tò ìbéèrè sí ẹ̀ka kan", "Mú àwọn kókó ìsọfúnni jáde", "Kọ àkọ́pẹrẹ èsì", "Ó lè nílò ètò ìsanwó: ṣàyẹ̀wò ojú-ewé owó"] },
            { title: "Ìtọ́ni tí a ronú dáadáa", bullets: ["Gígùn àti ohùn ọ̀rọ̀", "Lo òtítọ́ tí a fún ọ nìkan", "Má sọ iye owó láéláé; kọ [CHECK] tí kò bá dá ọ lójú"] },
            { title: "Jẹ́ kí ó wà láìléwu", bullets: ["Àkọ́pẹrẹ lọ sọ́dọ̀ rẹ, kì í ṣe sọ́dọ̀ oníbàárà", "Fi ohun tí AI nílò nìkan ránṣẹ́", "Ṣàyẹ̀wò òfin ìsọfúnni irinṣẹ́ náà"] }
          ],
          sources: [{ name: "Zapier: Owó (ìgbésẹ̀ AI àti ààlà àwọn ètò)", url: "https://zapier.com/pricing" }],
          tryIt: "Fi ìgbésẹ̀ AI kún iṣẹ́ aládàáṣe rẹ, tí ó ń kọ àkọ́pẹrẹ èsì tí ó sì ń fi ránṣẹ́ sí ọ. Dán an wò pẹ̀lú ìbéèrè àfọwọ́ṣe mẹ́ta tó yàtọ̀, kí o sì kọ àṣìṣe èyíkéyìí sílẹ̀.",
          youCanNow: "fi ìgbésẹ̀ AI kún iṣẹ́ aládàáṣe pẹ̀lú òfin tó yé, kí ìsọfúnni àdáni sì wà lóde rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Òfin wo ló yẹ kí ó wà nínú ìtọ́ni ìgbésẹ̀ AI?", options: ["\"Dá iye owó kan sílẹ̀ tí kò bá dá ọ lójú\"", "\"Fi ránṣẹ́ tààrà sí oníbàárà\"", "\"Lo òtítọ́ tí a fún ọ nìkan; má sọ iye owó láéláé\"", "\"Fi nọ́mbà káàdì sínú rẹ̀\""], answer: 2, why: "Òfin tó yé ń jẹ́ kí àkọ́pẹrẹ AI péye kí ó sì wà láìléwu." },
            { objective: "O4", q: "Fọ́ọ̀mù rẹ ń béèrè nọ́mbà káàdì. Kí ni o máa ṣe nípa ìgbésẹ̀ AI?", options: ["Fi gbogbo nǹkan ránṣẹ́ sí AI", "Ní kí AI fi pamọ́", "Tọ́jú u sínú èsì", "Yọ àpótí yẹn kúrò nínú ohun tí ìgbésẹ̀ AI ń gbà"], answer: 3, why: "Nọ́mbà káàdì àti ìsọfúnni àdáni kò gbọ́dọ̀ gba inú ìgbésẹ̀ AI kọjá." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Àwọn aṣojú AI àti ààlà",
          minutes: 5,
          goal: "Pinnu ohun tí aṣojú AI lè ṣe fúnra rẹ̀ àti ohun tí ó nílò ìfọwọ́sí rẹ.",
          text: [
            "Aṣojú AI (AI agent) ni a fún ní àfojúsùn kan, ó sì ń ṣètò, ó sì ń gbé ọ̀pọ̀ ìgbésẹ̀ fúnra rẹ̀, bí wíwá nǹkan, kíkún fọ́ọ̀mù, tàbí lílo àwọn app rẹ. Àwọn aṣojú lè fi àkókò pamọ́, ṣùgbọ́n wọ́n tún lè ṣe àṣìṣe kíákíá, ní ọ̀pọ̀ ìgbà lẹ́ẹ̀kan náà.",
            "Ààlà (guardrails) ni àwọn òdiwọ̀n tí o fi lélẹ̀. Òfin kan tí ó rọrùn: aṣojú lè kà, tò, kí ó sì kọ àkọ́pẹrẹ fúnra rẹ̀, ṣùgbọ́n ó gbọ́dọ̀ gba ìfọwọ́sí rẹ kí ó tó fi ohunkóhun ránṣẹ́ sí oníbàárà, ná owó, pa ohunkóhun rẹ́, yí iye owó padà, tàbí forúkọ sílẹ̀ fún ohunkóhun. Fún un ní àṣẹ sí àwọn app àti fódà tí ó nílò nìkan.",
            "Pa àkọsílẹ̀ ohun tí aṣojú náà ṣe mọ́ (ọ̀pọ̀ irinṣẹ́ ní ìtàn tàbí log), kí o sì bẹ̀rẹ̀ pẹ̀lú iṣẹ́ kékeré tí kò léwu púpọ̀. Fún un ní òmìnira sí i lẹ́yìn tí ó bá ti ṣiṣẹ́ dáadáa fún ìgbà díẹ̀ nìkan."
          ],
          steps: ["Kọ ohun tí aṣojú náà máa ṣe sílẹ̀.", "Sàmì sí ìgbésẹ̀ kọ̀ọ̀kan: ó lè ṣe é fúnra rẹ̀, tàbí ó nílò ìfọwọ́sí rẹ.", "Béèrè ìfọwọ́sí fún fífi ránṣẹ́, níná owó, píparẹ́, iye owó àti fífi orúkọ sílẹ̀.", "Fún un ní àṣẹ sí àwọn app àti fódà tí ó nílò nìkan.", "Máa ṣàyẹ̀wò ìtàn tàbí log rẹ̀ déédéé."],
          words: [["Aṣojú AI (AI agent)", "irinṣẹ́ AI tí ó ń gbé ọ̀pọ̀ ìgbésẹ̀ fúnra rẹ̀ láti dé àfojúsùn kan."], ["Ààlà (guardrail)", "òdiwọ̀n tí ó ń dá iṣẹ́ aládàáṣe tàbí aṣojú dúró láti ṣe ohun tí ó léwu."], ["Log", "àkọsílẹ̀ ohun tí iṣẹ́ aládàáṣe tàbí aṣojú ṣe àti ìgbà tí ó ṣe é."]],
          slides: [
            { title: "Ohun tí aṣojú jẹ́", bullets: ["A fún un ní àfojúsùn kan", "Ó ń ṣètò, ó sì ń gbé ọ̀pọ̀ ìgbésẹ̀ fúnra rẹ̀", "Ó yára, títí kan àṣìṣe tí ó yára"] },
            { title: "Ó nílò ìfọwọ́sí rẹ", bullets: ["Fífi nǹkan ránṣẹ́ sí oníbàárà", "Níná owó tàbí yíyí iye owó padà", "Píparẹ́ nǹkan tàbí fífi orúkọ sílẹ̀ fún nǹkan"] },
            { title: "Dín in kù kí o sì máa ṣọ́ ọ", bullets: ["Àṣẹ sí ohun tí ó nílò nìkan", "Ṣàyẹ̀wò ìtàn tàbí log rẹ̀", "Bẹ̀rẹ̀ kékeré, fi òmìnira kún un díẹ̀díẹ̀"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ ààlà fún iṣẹ́ aládàáṣe rẹ: ohun tí ó lè ṣe fúnra rẹ̀, àti ohun márùn-ún tí ó gbọ́dọ̀ gba ìfọwọ́sí rẹ nígbà gbogbo. Fi ìgbésẹ̀ ìfọwọ́sí kún un tí irinṣẹ́ rẹ bá gbà á.",
          youCanNow: "fi ààlà lélẹ̀ kí iṣẹ́ aládàáṣe àti àwọn aṣojú má ṣe gbé ìgbésẹ̀ eléwu láìsí ọ láéláé.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ààlà (guardrail) nínú iṣẹ́ aládàáṣe?", options: ["Òdiwọ̀n tí ó ń dá ìgbésẹ̀ eléwu dúró", "Ohun-ìbẹ̀rẹ̀ tí ó yára jù", "Òpó kan nínú spreadsheet", "Ohun tí a ń sanwó fún"], answer: 0, why: "Ààlà ń dá iṣẹ́ aládàáṣe dúró láti ṣe ohun eléwu fúnra rẹ̀." },
            { objective: "O5", q: "Irinṣẹ́ aṣojú kan ń béèrè àṣẹ sí gbogbo fódà rẹ àti ilé-ìfowópamọ́ rẹ. Kí ni o máa fún un?", options: ["Gbogbo ohun tí ó béèrè", "Àwọn app àti fódà tí ó nílò nìkan", "Ọ̀rọ̀ aṣínà rẹ", "Àṣẹ alábòójútó (admin)"], answer: 1, why: "Àṣẹ tí ó kéré jù ń dín ìbàjẹ́ kù tí nǹkan bá lọ ní ọ̀nà tí kò tọ́." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ìdánwò, ìṣọ́ àti dídúró láìléwu",
          minutes: 5,
          goal: "Dán iṣẹ́ aládàáṣe rẹ wò fún ìṣòro, kí o sì ṣètò àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀.",
          text: [
            "Iṣẹ́ aládàáṣe máa ń bàjẹ́: app kan yí padà, a yí orúkọ ìbéèrè fọ́ọ̀mù kan padà, ọ̀rọ̀ aṣínà kan parí, tàbí AI fún ọ ní ìdáhùn àjèjì. Dán an wò pẹ̀lú ìsọfúnni àjèjì: àpótí tí ó ṣófo, ọ̀rọ̀ tí ó gùn gan-an, ọ̀rọ̀ ní èdè míì, ọ̀rọ̀ àrífín.",
            "Ṣètò rẹ̀ kí ó dúró láìléwu: tí nǹkan bá lọ ní ọ̀nà tí kò tọ́, iṣẹ́ aládàáṣe náà gbọ́dọ̀ dúró kí ó sì sọ fún ọ, kì í ṣe kí ó fi ọ̀rọ̀ tí kò tíì parí ránṣẹ́. Ọ̀pọ̀ irinṣẹ́ lè fi ímeèlì ránṣẹ́ sí ọ nígbà tí ìṣiṣẹ́ kan bá kùnà; tan èyí.",
            "Lẹ́ẹ̀kan lọ́sẹ̀, wo log náà: ìṣiṣẹ́ mélòó, mélòó ló kùnà, àti àkọ́pẹrẹ AI méjì tàbí mẹ́ta. Ka iye ìṣẹ́jú tí ó fi pamọ́. Tí ó bá ń fa iṣẹ́ púpọ̀ ju èyí tí ó ń fi pamọ́ lọ, yí i padà tàbí pa á."
          ],
          steps: ["Dán an wò pẹ̀lú àpótí tí ó ṣófo, ọ̀rọ̀ tí ó gùn gan-an àti ọ̀rọ̀ àjèjì.", "Tan ìkìlọ̀ ìkùnà.", "Rí i dájú pé ìkùnà ń dá ìṣiṣẹ́ dúró dípò kí ó fi nǹkan ránṣẹ́.", "Lọ́sọ̀ọ̀sẹ̀, ṣàyẹ̀wò ìṣiṣẹ́, ìkùnà àti àkọ́pẹrẹ AI díẹ̀.", "Pa á mọ́, yí i padà tàbí pa á, gẹ́gẹ́ bí àkókò tí ó fi pamọ́."],
          words: [["Dídúró láìléwu (fail safely)", "nígbà tí nǹkan bá lọ ní ọ̀nà tí kò tọ́, dúró kí o sì kìlọ̀ fún ènìyàn, dípò ṣíṣe ohun tí ó lè pani lára."], ["Ìṣiṣẹ́ (run)", "ìgbà kan tí iṣẹ́ aládàáṣe bẹ̀rẹ̀ tí ó sì ṣe àwọn ìgbésẹ̀ rẹ̀."]],
          slides: [
            { title: "Iṣẹ́ aládàáṣe máa ń bàjẹ́", bullets: ["Àwọn app ń yí padà", "A ń yí orúkọ ìbéèrè fọ́ọ̀mù padà", "AI ń fúnni ní ìdáhùn àjèjì"] },
            { title: "Dán an wò pẹ̀lú ìsọfúnni àjèjì", bullets: ["Àpótí tí ó ṣófo", "Ọ̀rọ̀ tí ó gùn gan-an", "Èdè míì tàbí ọ̀rọ̀ àrífín"] },
            { title: "Dúró láìléwu", bullets: ["Dúró kí o sì kìlọ̀ fún ọ", "Má fi ọ̀rọ̀ tí kò tíì parí ránṣẹ́ láéláé", "Tan ímeèlì ìkùnà"] },
            { title: "Àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀", bullets: ["Ìṣiṣẹ́ àti ìkùnà nínú log", "Ka àkọ́pẹrẹ AI díẹ̀", "Ka iye ìṣẹ́jú tí ó fi pamọ́"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: dán iṣẹ́ aládàáṣe rẹ wò pẹ̀lú ìsọfúnni àjèjì mẹ́ta, tan ìkìlọ̀ ìkùnà, kí o sì kọ àkọsílẹ̀ ojú-ewé kan: àwòrán ìlànà, ohun-ìbẹ̀rẹ̀ àti ìgbésẹ̀, ìtọ́ni AI, ìgbésẹ̀ ìfọwọ́sí, èsì ìdánwò àti àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀.",
          youCanNow: "kọ́ iṣẹ́ aládàáṣe AI fún òwò rẹ, fi ààlà sí i, dán an wò, kí o sì máa ṣọ́ ọ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ìdánwò pẹ̀lú ìsọfúnni àjèjì?", options: ["Ìdánwò ní òpin ọ̀sẹ̀ nìkan", "Ìdánwò pẹ̀lú oníbàárà rẹ tí ó dára jù", "Ìdánwò pẹ̀lú ìsọfúnni tí kò wọ́pọ̀, bí àpótí tí ó ṣófo", "Ìdánwò pẹ̀lú nọ́mbà káàdì gidi"], answer: 2, why: "Ìsọfúnni àjèjì ń fi hàn bí iṣẹ́ aládàáṣe ṣe ń bójú tó ìṣòro." },
            { objective: "O6", q: "Àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀ rẹ fi ìṣiṣẹ́ márùn-ún tí ó kùnà hàn. Kí ni o máa ṣe?", options: ["Fojú fò wọ́n", "Pa ìkìlọ̀ ìkùnà", "Fún iṣẹ́ aládàáṣe náà ní àṣẹ sí i", "Wá ohun tí ó fà á, tún un ṣe, kí o sì tún dán an wò"], answer: 3, why: "Ìṣọ́ wà fún rírí ìkùnà àti títún wọn ṣe." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Fi AI kún un, kí àṣẹ sì wà lọ́wọ́ rẹ",
        questions: [
          { objective: "O4", q: "Ibo ni àkọ́pẹrẹ èsì AI gbọ́dọ̀ lọ nínú iṣẹ́ aládàáṣe àkọ́kọ́ rẹ?", options: ["Sọ́dọ̀ rẹ fún àyẹ̀wò", "Tààrà sọ́dọ̀ oníbàárà", "Sí ẹ̀rọ ayélujára àwùjọ (social media)", "Kò sí ibì kankan"], answer: 0, why: "Ìwọ ló ń ṣàyẹ̀wò àkọ́pẹrẹ kí oníbàárà tó rí wọn." },
          { objective: "O4", q: "Ìsọfúnni wo ni KÒ gbọ́dọ̀ gba inú ìgbésẹ̀ AI kọjá?", options: ["Àkọsílẹ̀ àwọn iṣẹ́ tí o ń ṣe", "Ọ̀rọ̀ ìbéèrè náà", "Àkókò tí o ń ṣí", "Nọ́mbà káàdì oníbàárà"], answer: 3, why: "Nọ́mbà káàdì àti irú ìsọfúnni bẹ́ẹ̀ kò gbọ́dọ̀ lọ sí irinṣẹ́ AI láéláé." },
          { objective: "O5", q: "Ìgbésẹ̀ wo ló gbọ́dọ̀ nílò ìfọwọ́sí rẹ nígbà gbogbo?", options: ["Kíka ímeèlì", "Níná owó", "Títo ìbéèrè", "Kíkọ àkọ́pẹrẹ èsì fún ọ"], answer: 1, why: "Níná owó jẹ́ ìgbésẹ̀ tí ó léwu gan-an." },
          { objective: "O6", q: "Kí ni \"dídúró láìléwu\" túmọ̀ sí?", options: ["Dúró kí o sì kìlọ̀ fún ènìyàn nígbà tí nǹkan bá lọ ní ọ̀nà tí kò tọ́", "Máa bá a lọ ohun yòówù tí ó ṣẹlẹ̀", "Pa ìsọfúnni rẹ́", "Fi ímeèlì ránṣẹ́ sí gbogbo oníbàárà"], answer: 0, why: "Dídúró ń dènà ìgbésẹ̀ tí kò tíì parí tí ó lè pani lára." },
          { objective: "O6", q: "Iṣẹ́ aládàáṣe rẹ ń fa àtúnṣe púpọ̀ ju àkókò tí ó ń fi pamọ́ lọ. Kí ni o máa ṣe?", options: ["Fojú fò ó", "Fi ìgbésẹ̀ AI púpọ̀ sí i kún un", "Yí i padà tàbí pa á", "Fún un ní àṣẹ sí i"], answer: 2, why: "Iṣẹ́ aládàáṣe gbọ́dọ̀ fi àkókò pamọ́, kì í ṣe kí ó gba àkókò." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iṣẹ́ Aládàáṣe pẹ̀lú AI àti Àwọn Aṣojú AI (Agentic Workflows)",
    questions: [
      { objective: "O1", q: "Iṣẹ́ aládàáṣe (automation) túmọ̀ sí:", options: ["Gbígba ènìyàn púpọ̀ sí i síṣẹ́", "Kọ̀mpútà ń ṣe iṣẹ́ tí a ń tún ṣe nígbà tí nǹkan kan bá ṣẹlẹ̀", "Kíkọ gbogbo ímeèlì pẹ̀lú ọwọ́", "Pípa kọ̀mpútà rẹ"], answer: 1, why: "Èrò ìpìlẹ̀ rẹ̀ nìyẹn." },
      { objective: "O1", q: "Ìgbésẹ̀ àkọ́kọ́ kí o tó sọ nǹkan di aládàáṣe ni láti:", options: ["Pa ìsọfúnni àtijọ́ rẹ́", "Ra irinṣẹ́ tí ó wọ́n jù", "Fún aṣojú ní àṣẹ sí gbogbo nǹkan", "Ya àwòrán ìlànà iṣẹ́ náà bí àwọn ìgbésẹ̀"], answer: 3, why: "Ohun tí o bá yé ọ nìkan ni o lè sọ di aládàáṣe." },
      { objective: "O1", q: "Ìlànà iṣẹ́ (workflow) ni:", options: ["Ọ̀rọ̀ aṣínà", "Irú spreadsheet kan", "Ìsanwó kan", "Àwọn ìgbésẹ̀ tí iṣẹ́ ń gbà kọjá láti ìbẹ̀rẹ̀ dé òpin"], answer: 3, why: "Ìtumọ̀ rẹ̀ nìyẹn." },
      { objective: "O1", q: "Ìgbésẹ̀ wo ló rọrùn jù láti sọ di aládàáṣe?", options: ["Pípinnu bóyá kí o gba ẹnì kan síṣẹ́", "Dída ìdáhùn fọ́ọ̀mù kọ sínú spreadsheet", "Fífọwọ́ sí ìwé àdéhùn ilé", "Yíyan orúkọ òwò"], answer: 1, why: "Dída-kọ máa ń tún ara rẹ̀ ṣe, ó sì ń tẹ̀lé òfin." },
      { objective: "O2", q: "Ohun-ìbẹ̀rẹ̀ (trigger) ni:", options: ["Ètò AI", "Ìgbésẹ̀ ìkẹyìn", "Ìṣẹ̀lẹ̀ tí ó ń bẹ̀rẹ̀ iṣẹ́ aládàáṣe", "Iye owó"], answer: 2, why: "Ohun-ìbẹ̀rẹ̀ ló ń bẹ̀rẹ̀ iṣẹ́ aládàáṣe." },
      { objective: "O2", q: "Èwo ni ìgbésẹ̀ (action)?", options: ["Fi ìlà kan kún spreadsheet", "Ìdáhùn fọ́ọ̀mù tuntun", "Ọjà tuntun tí a ti sanwó fún", "Ímeèlì tuntun dé"], answer: 0, why: "Àwọn yòókù jẹ́ ohun-ìbẹ̀rẹ̀." },
      { objective: "O3", q: "Zapier, Make àti Microsoft Power Automate jẹ́:", options: ["Ẹ̀rọ ayélujára àwùjọ", "Ilé-ìfowópamọ́", "Irinṣẹ́ iṣẹ́ aládàáṣe tí kò nílò kóòdù", "Ẹ̀rọ ìtẹ̀wé"], answer: 2, why: "Wọ́n ń so àwọn app pọ̀ pẹ̀lú ohun-ìbẹ̀rẹ̀ àti ìgbésẹ̀." },
      { objective: "O3", q: "Ibo ni o ti yẹ kí o ṣàyẹ̀wò ààlà ètò ọ̀fẹ́ irinṣẹ́ tí kò nílò kóòdù?", options: ["Ojú-ewé owó tirẹ̀ fúnra rẹ̀", "Àfojúsùn", "Fídíò àtijọ́", "Oníbàárà kan"], answer: 0, why: "Àwọn ètò àti ààlà máa ń yí padà." },
      { objective: "O3", q: "Kí o tó tan iṣẹ́ aládàáṣe, o yẹ kí o:", options: ["Fi ránṣẹ́ sí gbogbo oníbàárà", "Dán an wò pẹ̀lú ìsọfúnni àfọwọ́ṣe", "Fo ìdánwò kọjá", "Yọ àwọn ìfitónilétí kúrò"], answer: 1, why: "Ìdánwò ń rí àṣìṣe láìléwu." },
      { objective: "O4", q: "Ìgbésẹ̀ AI nínú iṣẹ́ aládàáṣe lè:", options: ["Fọwọ́ sí ara rẹ̀", "Fọwọ́ sí ìwé àdéhùn", "San owó orí rẹ", "Tò ìbéèrè tàbí kọ àkọ́pẹrẹ èsì"], answer: 3, why: "Kíkà, títò àti kíkọ àkọ́pẹrẹ jẹ́ ìlò AI tí ó dára." },
      { objective: "O4", q: "Ìtọ́ni AI tí ó dára ní:", options: ["Òfin bí \"Lo òtítọ́ tí a fún ọ nìkan; má sọ iye owó láéláé\"", "\"Ṣe ohunkóhun tí o bá fẹ́\"", "Ọ̀rọ̀ aṣínà rẹ", "Nọ́mbà káàdì àwọn oníbàárà"], answer: 0, why: "Òfin ń dín àṣìṣe kù." },
      { objective: "O4", q: "Kí ló dé tí o fi gbọ́dọ̀ ṣàyẹ̀wò òfin ìsọfúnni irinṣẹ́ aládàáṣe?", options: ["Kò pọn dandan", "Láti yí àmì-ìdánimọ̀ (logo) rẹ padà", "Láti rí ẹ̀dínwó", "Láti mọ bí wọ́n ṣe ń tọ́jú àti lo ìsọfúnni oníbàárà tí o fi ránṣẹ́"], answer: 3, why: "Ìsọfúnni oníbàárà ń gba inú àwọn irinṣẹ́ wọ̀nyí kọjá." },
      { objective: "O5", q: "Aṣojú AI (AI agent) ni:", options: ["Spreadsheet kan", "Aṣojú ìtajà tí ó jẹ́ ènìyàn", "Irinṣẹ́ AI tí ó ń gbé ọ̀pọ̀ ìgbésẹ̀ fúnra rẹ̀ láti dé àfojúsùn kan", "Awakọ̀ tí ń kó ẹrù"], answer: 2, why: "Àwọn aṣojú ń ṣètò, wọ́n sì ń ṣiṣẹ́ fúnra wọn." },
      { objective: "O5", q: "Ààlà (guardrail) ni:", options: ["Irú ohun-ìbẹ̀rẹ̀ kan", "Òdiwọ̀n tí ó ń dá ìgbésẹ̀ eléwu dúró", "Íńtánẹ́ẹ̀tì tí ó yára", "App tuntun kan"], answer: 1, why: "Ààlà ń jẹ́ kí àṣẹ wà lọ́wọ́ rẹ." },
      { objective: "O5", q: "Aṣojú gbọ́dọ̀ gba ìfọwọ́sí rẹ kí ó tó:", options: ["Kọ àkọsílẹ̀ kan fún ọ", "Ka ímeèlì kan", "Tò àkọsílẹ̀ kan", "Fi ohunkóhun ránṣẹ́ sí oníbàárà"], answer: 3, why: "Fífi nǹkan ránṣẹ́ sí oníbàárà léwu gan-an." },
      { objective: "O5", q: "Àṣẹ tí ó tó báwo ni aṣojú gbọ́dọ̀ ní?", options: ["Ìwọlé sí àkọọ́lẹ̀ ilé-ìfowópamọ́ rẹ", "Gbogbo ohun tí o ní", "Àwọn app àti fódà tí ó nílò nìkan", "Gbogbo fáìlì oníbàárà"], answer: 2, why: "Àṣẹ tí ó ní ààlà ń dín ìbàjẹ́ láti inú àṣìṣe kù." },
      { objective: "O5", q: "Nígbà tí o bá ń fún aṣojú ní òmìnira sí i, o yẹ kí o:", options: ["Bẹ̀rẹ̀ kékeré, kí o sì fi òmìnira kún un lẹ́yìn tí ó bá ṣiṣẹ́ dáadáa", "Fún un ní òmìnira kíkún ní ọjọ́ àkọ́kọ́", "Má ṣe ṣàyẹ̀wò log rẹ̀ láéláé", "Pa àwọn ìkìlọ̀"], answer: 0, why: "Ìgbẹ́kẹ̀lé ń wá láti inú iṣẹ́ rere tí ó ti ṣe sẹ́yìn." },
      { objective: "O6", q: "Èwo ni ìdánwò ìsọfúnni àjèjì tí ó dára?", options: ["Ọ̀rọ̀ pípé nìkan", "Ọ̀rọ̀ tí ó ní àpótí tí ó ṣófo", "Kò sí ìdánwò", "Nọ́mbà káàdì oníbàárà rẹ gidi"], answer: 1, why: "Ìsọfúnni àjèjì ń fi ibi tí kò lágbára hàn." },
      { objective: "O6", q: "Tí ìṣiṣẹ́ iṣẹ́ aládàáṣe kan bá kùnà, ó yẹ kí ó:", options: ["Fi ọ̀rọ̀ tí kò tíì parí ránṣẹ́", "Dúró kí ó sì kìlọ̀ fún ọ", "Pa spreadsheet rẹ rẹ́", "Máa gbìyànjú títí láé ní ìdákẹ́jẹ́ẹ́"], answer: 1, why: "Ìyẹn ni dídúró láìléwu." },
      { objective: "O6", q: "Nínú àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀ rẹ, o máa wo:", options: ["Ìṣiṣẹ́, ìkùnà, àkọ́pẹrẹ AI díẹ̀ àti ìṣẹ́jú tí ó fi pamọ́", "Àmì-ìdánimọ̀ irinṣẹ́ náà nìkan", "Kò sí nǹkan", "Ọ̀rọ̀ aṣínà àwọn olùdíje rẹ"], answer: 0, why: "Èyí ń fi hàn bóyá iṣẹ́ aládàáṣe náà ṣì ń ṣiṣẹ́ àti bóyá ó ṣì wúlò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 1, 4, 6, 8, 9, 13, 14, 17, 18]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Àwòrán ìlànà iṣẹ́", objective: "O1", notYet: "Àwọn ìgbésẹ̀ kan kò sí, tàbí a kò sàmì sí wọn.", meets: "Gbogbo ìgbésẹ̀ láti ìbẹ̀rẹ̀ dé òpin, tí a sàmì sí bí dída-kọ, ìpinnu tàbí kíkọ̀wé.", exceeds: "Ó kọ ìgbà tí ìgbésẹ̀ kọ̀ọ̀kan ń gbà lónìí tí a bá fi ọwọ́ ṣe é." },
      { name: "Ohun-ìbẹ̀rẹ̀ àti àwọn ìgbésẹ̀", objective: "O2", notYet: "Ohun-ìbẹ̀rẹ̀ tàbí àwọn ìgbésẹ̀ kò yé.", meets: "Ohun-ìbẹ̀rẹ̀ kan tó yé àti àkọsílẹ̀ àwọn ìgbésẹ̀, pẹ̀lú ìgbésẹ̀ AI àti ìfọwọ́sí tí a sàmì sí.", exceeds: "A kọ ìsopọ̀ àwọn àpótí sílẹ̀ fún gbogbo ìsọfúnni." },
      { name: "Iṣẹ́ aládàáṣe tí ó ń ṣiṣẹ́", objective: "O3", notYet: "Kò ṣiṣẹ́, tàbí a fi ìsọfúnni oníbàárà gidi dán an wò.", meets: "Fọ́ọ̀mù sí spreadsheet pẹ̀lú ìfitónilétí ń ṣiṣẹ́, a sì fi ìsọfúnni àfọwọ́ṣe dán an wò.", exceeds: "Ó kọ ààlà ètò ọ̀fẹ́ tí ó ṣàyẹ̀wò lórí ojú-ewé owó irinṣẹ́ náà fúnra rẹ̀." },
      { name: "Ìgbésẹ̀ AI àti ààlà", objective: "O5", notYet: "AI lè fi nǹkan ránṣẹ́ sí oníbàárà tàbí gbé ìgbésẹ̀ eléwu láìsí ìfọwọ́sí.", meets: "Àkọ́pẹrẹ AI ń lọ sọ́dọ̀ olówò fún ìfọwọ́sí; àkọsílẹ̀ ààlà ní ohun márùn-ún tí ó nílò ìfọwọ́sí.", exceeds: "Ìtọ́ni AI ní òfin tó yé, a sì pa àwọn àpótí àdáni mọ́ kúrò nínú ìgbésẹ̀ AI." },
      { name: "Ìdánwò àti ìṣọ́", objective: "O6", notYet: "Ìdánwò kò tó mẹ́ta, tàbí kò sí ìkìlọ̀ ìkùnà.", meets: "Ìdánwò ìsọfúnni àjèjì mẹ́ta, ìkìlọ̀ ìkùnà wà ní títàn, a sì kọ àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀ sílẹ̀.", exceeds: "Àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀ ní ìṣẹ́jú tí ó fi pamọ́ àti òfin ìgbà tí a máa pa á." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn olówò tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olówò tí iṣẹ́ aládàáṣe wọn ṣì ń ṣiṣẹ́ láìléwu lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Ìṣẹ́jú tí a fi pamọ́ lọ́sọ̀ọ̀sẹ̀ lórí dída-kọ àti èsì, gẹ́gẹ́ bí àwọn olówò ṣe ròyìn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ olówò Koach Learn míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní irinṣẹ́ fọ́ọ̀mù ọ̀fẹ́, spreadsheet àti àkọọ́lẹ̀ ímeèlì",
      "Ètò ọ̀fẹ́ irinṣẹ́ tí kò nílò kóòdù bí Zapier, Make tàbí Microsoft Power Automate",
      "Ìsọfúnni àfọwọ́ṣe fún ìdánwò, fún àpẹẹrẹ \"Test Customer\"",
      "Nǹkan bí ìṣẹ́jú 75 lápapọ̀ fún ẹ̀kọ́, kíkọ́, ìdánwò àti àkọsílẹ̀ ojú-ewé kan"
    ],
    facilitatorNotes: [
      "Kọ́ iṣẹ́ aládàáṣe àpẹẹrẹ kan pọ̀ lójú gbogbo ènìyàn kí àwọn akẹ́kọ̀ọ́ tó kọ́ tiwọn.",
      "Ṣàyẹ̀wò ààlà ètò ọ̀fẹ́ lọ́wọ́lọ́wọ́ lórí ojú-ewé owó irinṣẹ́ kọ̀ọ̀kan kí ìpàdé tó bẹ̀rẹ̀.",
      "Má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ so àkọọ́lẹ̀ ilé-ìfowópamọ́ pọ̀ tàbí fi ohunkóhun ránṣẹ́ sí oníbàárà gidi nígbà ẹ̀kọ́ náà.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ pàṣípààrọ̀ àkọsílẹ̀ ààlà wọn, kí wọ́n sì wá ìgbésẹ̀ eléwu èyíkéyìí tí a fi sílẹ̀ láìsí ìfọwọ́sí.",
      "Fi rubric ṣe àmì fún àkọsílẹ̀ ojú-ewé kan, ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
