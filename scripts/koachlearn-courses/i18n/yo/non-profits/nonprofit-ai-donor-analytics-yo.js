"use strict";

// Koach Learn course (Yoruba translation of non-profits/nonprofit-ai-donor-analytics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-donor-analytics-yo",
  lang: "yo",
  translationOf: "nonprofit-ai-donor-analytics",
  category: "Non Profits",
  name: "Ìtúpalẹ̀ Ìsọfúnni Olùfúnni pẹ̀lú AI",
  skills: "Ṣíṣe ìwé spreadsheet olùfúnni tí kò léwu, Ṣíṣírò ìpín ìdádúró àti ẹ̀bùn àròpín, Pínpín àwọn olùfúnni sí ẹgbẹ́, Lílo AI láti ṣàlàyé nọ́mbà, Yíyí ohun tí o rí padà sí ètò ìkówójọ",
  outcome: "mú spreadsheet olùfúnni tí a ti yọ orúkọ kúrò, ṣírò ìpín ìdádúró olùfúnni, ẹ̀bùn àròpín àti àwọn ẹgbẹ́ olùfúnni rẹ, lo olùrànlọ́wọ́ AI láti ṣàlàyé ohun tí àwọn nọ́mbà náà túmọ̀ sí, kí o sì kọ ètò ojú-ewé kan fún ìpè ẹ̀bùn rẹ tó kàn.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn òṣìṣẹ́ àjọ aláìlérè àti àjọ ẹ̀sìn, àwọn òṣìṣẹ́ ìkówójọ, àwọn ọmọ ìgbìmọ̀ àti àwọn olùyọ̀ǹda tí wọ́n ní àkọsílẹ̀ àwọn olùfúnni, tí wọ́n sì fẹ́ kó owó púpọ̀ sí i nípa òye rẹ̀.",
    "O máa kọ́ àwọn nọ́mbà olùfúnni díẹ̀ tó rọrùn, bí o ṣe lè ṣírò wọn nínú spreadsheet bí Google Sheets tàbí Microsoft Excel, bí o ṣe lè lo AI láti ṣàlàyé wọn kí o sì ṣe àwòrán àtẹ (chart) láìfi ìsọfúnni àdáni ẹnikẹ́ni hàn, àti bí o ṣe lè yí ohun tí o rí padà sí iṣẹ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ka ẹ̀kọ́ náà, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ kúkúrú wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe ẹ̀dà àkọsílẹ̀ olùfúnni rẹ tí kò léwu (tàbí àkọsílẹ̀ àṣeṣe láti Ẹ̀kọ́ 1), tí a fi nọ́mbà ìdánimọ̀ olùfúnni (ID) rọ́pò orúkọ àti ìsọfúnni olùbásọ̀rọ̀. Ṣírò ìpín ìdádúró olùfúnni àti ẹ̀bùn àròpín, pín àwọn olùfúnni sí ó kéré tán ẹgbẹ́ mẹ́ta, ní kí olùrànlọ́wọ́ AI ṣàlàyé èsì náà kí ó sì dábàá iṣẹ́ kan fún ẹgbẹ́ kọ̀ọ̀kan, kí o sì kọ ètò ìpè ẹ̀bùn ojú-ewé kan tí ìwọ fúnra rẹ ṣàyẹ̀wò.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn òṣìṣẹ́ àjọ aláìlérè àti àjọ ẹ̀sìn, àwọn òṣìṣẹ́ ìkówójọ, àwọn ọmọ ìgbìmọ̀ àti àwọn olùyọ̀ǹda tí wọ́n ní àkọsílẹ̀ àwọn olùfúnni, tí wọ́n sì fẹ́ kó owó púpọ̀ sí i nípa òye rẹ̀.",
    startingPoint: "Wọ́n ń tọ́jú àkọsílẹ̀ olùfúnni sínú spreadsheet tàbí ètò olùfúnni, wọ́n sì ń fi ìpè ẹ̀bùn ránṣẹ́. Ọ̀pọ̀ kò tíì ṣírò ìpín ìdádúró olùfúnni rí, kò tíì pín àwọn olùfúnni sí ẹgbẹ́ rí, tàbí lo AI láti ṣàlàyé àwọn nọ́mbà wọn.",
    gap: "Láìmọ ẹni tí ó ń padà wá àti ẹni tí ó ń lọ díẹ̀díẹ̀, àwọn àjọ máa ń fi ìpè kan náà ránṣẹ́ sí gbogbo ènìyàn, wọ́n sì ń pàdánù àwọn olùfúnni tí wọ́n ì bá ti pa mọ́. Àwọn akẹ́kọ̀ọ́ nílò láti yí àkọsílẹ̀ tiwọn padà sí nọ́mbà pàtàkì díẹ̀ àti ètò kan, kí wọ́n sì lo AI láìléwu láìfi ìsọfúnni olùfúnni hàn.",
    constraints: [
      "Ìsọfúnni àdáni: a yọ orúkọ, ìsọfúnni olùbásọ̀rọ̀ àti àkọsílẹ̀ kúrò ṣáájú ìtúpalẹ̀ kankan; nọ́mbà àkópọ̀ nìkan ló ń lọ sínú AI",
      "Ọgbọ́n spreadsheet ìpìlẹ̀: SUM, AVERAGE, sort, filter àti chart tó rọrùn",
      "AI lè ṣàṣìṣe nínú ìṣirò, ó sì lè hùmọ̀ nọ́mbà ìfiwéra (benchmark), nítorí náà a máa ń tún gbogbo nọ́mbà ṣàyẹ̀wò",
      "Àwọn òfin nípa kíkàn sí olùfúnni àti yíyọ ara ẹni kúrò (opt-out), àti ìlànà ìpamọ́ ìsọfúnni àjọ náà ló ń darí iṣẹ́ yìí",
      "Àkókò: nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní ẹ̀kọ́ ìṣẹ́jú 5"
    ],
    prerequisites: "Lílo spreadsheet ìpìlẹ̀. \"Ìfihàn sí AI fún Àwọn Àjọ Aláìlérè\" máa wúlò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ olùfúnni", action: "ṣe ẹ̀dà iṣẹ́ tí kò dárúkọ ẹnikẹ́ni, tí a fi ID rọ́pò orúkọ, tí a sì pa ìsọfúnni olùbásọ̀rọ̀ rẹ́", standard: "kí ó ní ID, ọjọ́ ẹ̀bùn, iye owó àti ìpolongo nìkan" },
    { id: "O2", condition: "Tí a bá fún ọ ní spreadsheet olùfúnni tí kò dárúkọ ẹnikẹ́ni", action: "ṣírò àpapọ̀ owó tí a kó jọ, ẹ̀bùn àròpín àti ìpín ìdádúró olùfúnni", standard: "kí nọ́mbà kọ̀ọ̀kan tọ̀nà" },
    { id: "O3", condition: "Tí o bá ní àwọn ID olùfúnni rẹ àti ìtàn ẹ̀bùn wọn", action: "pín àwọn olùfúnni sí ẹgbẹ́ Tuntun, Àtúnfúnni, Àwọn tí ó dáwọ́ dúró àti Olùfúnni ńlá, kí o sì ka iye ẹgbẹ́ kọ̀ọ̀kan", standard: "kí gbogbo ID olùfúnni wà nínú ẹgbẹ́ kan" },
    { id: "O4", condition: "Tí o bá ní àwọn nọ́mbà àkópọ̀ rẹ", action: "ní kí olùrànlọ́wọ́ AI ṣàlàyé wọn ní ọ̀rọ̀ tó rọrùn, kí o sì tún ìṣirò tàbí nọ́mbà ìfiwéra èyíkéyìí tí ó fún ọ ṣàyẹ̀wò", standard: "ní fífi nọ́mbà àkópọ̀ nìkan sínú rẹ̀, kì í ṣe àkọsílẹ̀ olùfúnni láéláé" },
    { id: "O5", condition: "Tí o bá ní iye olùfúnni nínú ẹgbẹ́ kọ̀ọ̀kan", action: "ṣe bar chart tí ó ní àkọlé tó yé nínú Google Sheets tàbí Excel", standard: "tí ó ń fi ọ̀rọ̀ kan ṣoṣo hàn" },
    { id: "O6", condition: "Tí o bá ní ohun tí o rí", action: "kọ ètò ìpè ẹ̀bùn ojú-ewé kan tí ó ní iṣẹ́ kan, ẹni tí yóò ṣe é àti ọjọ́ fún ẹgbẹ́ kọ̀ọ̀kan", standard: "ní lílo àmì ìdúrópò fún orúkọ olùfúnni, tí olùdarí rẹ sì ti ṣàyẹ̀wò rẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Mọ àwọn nọ́mbà olùfúnni rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣe ìsọfúnni olùfúnni rẹ ní ìmúrasílẹ̀, láìléwu",
          minutes: 5,
          goal: "Ṣe ẹ̀dà àkọsílẹ̀ olùfúnni tí ó mọ́, tí kò dárúkọ ẹnikẹ́ni, tí kò sì léwu láti túpalẹ̀.",
          text: [
            "Ìtúpalẹ̀ ìsọfúnni olùfúnni (donor analytics) túmọ̀ sí wíwo àkọsílẹ̀ ẹ̀bùn rẹ láti mọ ẹni tí ó ń fúnni, iye tí wọ́n ń fún, ìgbà mélòó, àti bóyá wọ́n ń padà wá. Spreadsheet nìkan ni o nílò.",
            "Orúkọ olùfúnni, àdírẹ́sì, email àti iye ẹ̀bùn jẹ́ ìsọfúnni àdáni tí a gbọ́dọ̀ dáàbò bò. Kí o tó fi AI túpalẹ̀ ohunkóhun, ṣe ẹ̀dà kan kí o sì fi ID bí D001 rọ́pò orúkọ kọ̀ọ̀kan. Pa àdírẹ́sì, nọ́mbà fóònù, email àti àkọsílẹ̀ rẹ́. Pa ID, ọjọ́ ẹ̀bùn, iye ẹ̀bùn àti, tí o bá ní in, ìpolongo tàbí owó-àkànṣe (fund) mọ́ nìkan.",
            "Tọ́jú àkọsílẹ̀ gidi sínú ètò olùfúnni rẹ tàbí fáìlì tí a dáàbò bò. Ẹ̀dà tí kò dárúkọ ẹnikẹ́ni ni o máa fi ṣiṣẹ́. Tẹ̀lé ìlànà ìpamọ́ ìsọfúnni àjọ rẹ àti ìlérí èyíkéyìí tí o ti ṣe fún àwọn olùfúnni."
          ],
          steps: ["Gbé àkọsílẹ̀ olùfúnni rẹ jáde tàbí dà á kọ sínú spreadsheet.", "Fi ẹ̀dà ọ̀tọ̀ kan pamọ́ ní orúkọ \"donors-anonymous\".", "Fi ID bí D001, D002 rọ́pò orúkọ kọ̀ọ̀kan.", "Pa àdírẹ́sì, nọ́mbà fóònù, email àti àkọsílẹ̀ rẹ́.", "Pa ID, ọjọ́ ẹ̀bùn, iye owó àti ìpolongo mọ́ nìkan."],
          words: [["Ìtúpalẹ̀ ìsọfúnni olùfúnni (donor analytics)", "kíkẹ́kọ̀ọ́ àkọsílẹ̀ ẹ̀bùn láti mọ ẹni tí ó ń fúnni, iye, ìgbà mélòó, àti bóyá wọ́n ń padà wá."], ["Tí kò dárúkọ ẹnikẹ́ni (anonymous)", "tí a ti yọ orúkọ àti ìsọfúnni olùbásọ̀rọ̀ kúrò, kí ẹnikẹ́ni má lè mọ ẹni tí í ṣe ta."], ["Spreadsheet", "tábìlì ìlà àti òpó, bí Google Sheets tàbí Microsoft Excel."]],
          slides: [
            { title: "Ohun tí ìtúpalẹ̀ ìsọfúnni olùfúnni jẹ́", bullets: ["Ta ló ń fúnni, iye wo, ìgbà mélòó", "Bóyá àwọn olùfúnni ń padà wá", "Spreadsheet nìkan ni o nílò"] },
            { title: "Kọ́kọ́ dáàbò bo àwọn olùfúnni", bullets: ["Ṣe ẹ̀dà ọ̀tọ̀ kan", "Fi ID bí D001 rọ́pò orúkọ", "Pa àdírẹ́sì, fóònù, email àti àkọsílẹ̀ rẹ́"] },
            { title: "Pa wọ̀nyí mọ́ nìkan", bullets: ["ID olùfúnni", "Ọjọ́ àti iye ẹ̀bùn", "Ìpolongo tàbí owó-àkànṣe (fund)"] }
          ],
          tryIt: "Ṣe àkọsílẹ̀ àṣeṣe nínú spreadsheet pẹ̀lú ìlà 12: ID (D001 sí D010, àwọn kan ń tún farahàn), ọjọ́ ẹ̀bùn (ọdún tó kọjá àti ọdún yìí) àti iye owó. Tàbí ṣe ẹ̀dà àkọsílẹ̀ gidi rẹ tí kò dárúkọ ẹnikẹ́ni ní títẹ̀lé àwọn ìgbésẹ̀ náà.",
          youCanNow: "ṣe àkọsílẹ̀ olùfúnni tí kò léwu láti túpalẹ̀, tí a ti yọ orúkọ àti ìsọfúnni olùbásọ̀rọ̀ kúrò.",
          quickCheck: [
            { objective: "O1", q: "Kí ni o máa pa rẹ́ kúrò nínú ẹ̀dà tí kò dárúkọ ẹnikẹ́ni?", options: ["Àdírẹ́sì, nọ́mbà fóònù, email àti àkọsílẹ̀", "Iye ẹ̀bùn", "Ọjọ́ ẹ̀bùn", "ID olùfúnni"], answer: 0, why: "Pa ìsọfúnni olùbásọ̀rọ̀ àti àkọsílẹ̀ rẹ́; pa ID, ọjọ́, iye owó àti ìpolongo mọ́." },
            { objective: "O1", q: "Olùyọ̀ǹda kan fẹ́ túpalẹ̀ àkọsílẹ̀ olùfúnni gidi lórí kọ̀mpútà ara rẹ̀. Kí ni o máa ṣe?", options: ["Fi àkọsílẹ̀ gidi ránṣẹ́ sí i ní email", "Fún un ní ẹ̀dà tí kò dárúkọ ẹnikẹ́ni, kí o sì pa àkọsílẹ̀ gidi mọ́ sínú fáìlì tí a dáàbò bò", "Tẹ àkọsílẹ̀ gidi jáde fún un", "Fi àkọsílẹ̀ gidi sínú AI fún un"], answer: 1, why: "Dáàbò bo àkọsílẹ̀ gidi; ẹ̀dà tí kò dárúkọ ẹnikẹ́ni ni kí ẹ fi ṣiṣẹ́." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nọ́mbà mẹ́ta tí gbogbo àjọ aláìlérè yẹ kí ó mọ̀",
          minutes: 6,
          goal: "Ṣírò àpapọ̀ owó tí a kó jọ, ẹ̀bùn àròpín àti ìpín ìdádúró olùfúnni.",
          text: [
            "Àpapọ̀ owó tí a kó jọ ni gbogbo ẹ̀bùn tí a ròpọ̀. Ẹ̀bùn àròpín ni àpapọ̀ owó tí a pín sí iye ẹ̀bùn. Nínú spreadsheet, =SUM() ń ro òpó kan pọ̀, =AVERAGE() sì ń fúnni ní àròpín.",
            "Ìpín ìdádúró olùfúnni (retention rate) ń sọ fún ọ iye nínú àwọn olùfúnni ọdún tó kọjá tí wọ́n tún fúnni lọ́dún yìí. Ka àwọn olùfúnni tí wọ́n fúnni lọ́dún tó kọjá. Ka iye nínú wọn tí wọ́n tún fúnni lọ́dún yìí. Pín nọ́mbà kejì sí èkíní kí o sì fi 100 sọ ọ́ di púpọ̀. Tí olùfúnni 40 bá fúnni lọ́dún tó kọjá, tí 18 nínú wọn sì tún fúnni, ìpín ìdádúró jẹ́ 18 / 40 = 45 nínú ọgọ́rùn-ún.",
            "Ìpín ìdádúró ṣe pàtàkì nítorí pé pípa olùfúnni kan mọ́ sábà máa ń náni ní owó tí ó kéré ju wíwá olùfúnni tuntun lọ. Ìpín tí ó kéré jẹ́ àmì pé o gbọ́dọ̀ dúpẹ́ lọ́wọ́ àwọn olùfúnni kí o sì máa sọ ìròyìn fún wọn dáadáa sí i."
          ],
          steps: ["Àpapọ̀ owó tí a kó jọ: =SUM() ti òpó iye owó.", "Ẹ̀bùn àròpín: =AVERAGE() ti òpó iye owó.", "Ka àwọn olùfúnni (láìtún ẹnìkan kà) tí wọ́n fúnni lọ́dún tó kọjá.", "Ka iye nínú wọn tí wọ́n tún fúnni lọ́dún yìí.", "Ìpín ìdádúró = àwọn tí wọ́n tún fúnni lọ́dún yìí / olùfúnni ọdún tó kọjá x 100."],
          words: [["Ẹ̀bùn àròpín (average gift)", "àpapọ̀ owó tí a kó jọ tí a pín sí iye ẹ̀bùn."], ["Ìpín ìdádúró (retention rate)", "ìdá nínú ọgọ́rùn-ún àwọn olùfúnni ọdún tó kọjá tí wọ́n tún fúnni lọ́dún yìí."], ["Formula", "ìṣirò tí a tẹ sínú àpótí spreadsheet kan, tí ó bẹ̀rẹ̀ pẹ̀lú =."]],
          slides: [
            { title: "Àpapọ̀ àti àròpín", bullets: ["Àpapọ̀ owó tí a kó jọ: =SUM(amounts)", "Ẹ̀bùn àròpín: =AVERAGE(amounts)"] },
            { title: "Ìpín ìdádúró olùfúnni", bullets: ["Àwọn olùfúnni ọdún tó kọjá tí wọ́n tún fúnni", "Pín sí gbogbo olùfúnni ọdún tó kọjá", "Sọ ọ́ di púpọ̀ ní 100 = ìdá nínú ọgọ́rùn-ún"] },
            { title: "Àpẹẹrẹ", bullets: ["Olùfúnni 40 lọ́dún tó kọjá", "18 nínú wọn tún fúnni", "18 / 40 = ìpín ìdádúró 45 nínú ọgọ́rùn-ún"] },
            { title: "Ìdí tí ó fi ṣe pàtàkì", bullets: ["Pípa olùfúnni mọ́ kò wọ́n tó wíwá tuntun", "Ìpín ìdádúró tí ó kéré = dúpẹ́ kí o sì sọ ìròyìn dáadáa sí i"] }
          ],
          tryIt: "Pẹ̀lú àkọsílẹ̀ àṣeṣe rẹ tàbí èyí tí kò dárúkọ ẹnikẹ́ni, ṣírò àpapọ̀ owó tí a kó jọ, ẹ̀bùn àròpín àti ìpín ìdádúró. Kọ nọ́mbà mẹ́ta náà sílẹ̀.",
          youCanNow: "ṣírò àpapọ̀ owó tí a kó jọ, ẹ̀bùn àròpín àti ìpín ìdádúró olùfúnni nínú spreadsheet.",
          quickCheck: [
            { objective: "O2", q: "Formula wo ló ń ro òpó ẹ̀bùn kan pọ̀?", options: ["=AVERAGE()", "=COUNT()", "=SUM()", "=IF()"], answer: 2, why: "=SUM() ń ro òpó kan pọ̀; =AVERAGE() ń fúnni ní àròpín." },
            { objective: "O2", q: "Olùfúnni 20 fúnni lọ́dún tó kọjá, 10 nínú wọn sì tún fúnni. Kí ni ìpín ìdádúró rẹ?", options: ["10 nínú ọgọ́rùn-ún", "20 nínú ọgọ́rùn-ún", "200 nínú ọgọ́rùn-ún", "50 nínú ọgọ́rùn-ún"], answer: 3, why: "10 / 20 = 0.5, tí a bá sọ ọ́ di púpọ̀ ní 100 = 50 nínú ọgọ́rùn-ún." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pínpín àwọn olùfúnni sí ẹgbẹ́",
          minutes: 5,
          goal: "Pín àwọn olùfúnni sí ẹgbẹ́ tó rọrùn kí ẹgbẹ́ kọ̀ọ̀kan lè gba ọ̀rọ̀ tó tọ́.",
          text: [
            "Ẹgbẹ́ olùfúnni (segment) jẹ́ àwọn olùfúnni tí wọ́n jọra ní ọ̀nà kan tí ó ṣe pàtàkì. Ẹgbẹ́ tó yàtọ̀ síra nílò ọ̀rọ̀ tó yàtọ̀ síra.",
            "Àwọn ẹgbẹ́ tó rọrùn láti fi bẹ̀rẹ̀: Tuntun (ẹ̀bùn àkọ́kọ́ wọn jẹ́ ọdún yìí), Àtúnfúnni (wọ́n fúnni lọ́dún tó kọjá àti ọdún yìí), Àwọn tí ó dáwọ́ dúró (wọ́n fúnni lọ́dún tó kọjá ṣùgbọ́n kò fúnni lọ́dún yìí), àti Olùfúnni ńlá (ẹ̀bùn tí ó ju iye kan tí o yàn lọ, bí ìdá 10 nínú ọgọ́rùn-ún tí ó ga jù lọ).",
            "Fi òpó kan kún un tí a ń pè ní Segment kí o sì kọ ẹgbẹ́ fún ID olùfúnni kọ̀ọ̀kan. O lè lo filter tàbí sort spreadsheet láti kó wọn jọ. Ka iye olùfúnni tí ó wà nínú ẹgbẹ́ kọ̀ọ̀kan."
          ],
          steps: ["Fi òpó kan tí a ń pè ní Segment kún un.", "Sàmì sí ID olùfúnni kọ̀ọ̀kan gẹ́gẹ́ bí Tuntun, Àtúnfúnni, Àwọn tí ó dáwọ́ dúró tàbí Olùfúnni ńlá.", "Lo sort tàbí filter láti kó wọn jọ.", "Ka iye olùfúnni nínú ẹgbẹ́ kọ̀ọ̀kan."],
          words: [["Ẹgbẹ́ olùfúnni (segment)", "àwọn olùfúnni tí wọ́n jọra ní ọ̀nà kan tí ó ṣe pàtàkì, bí tuntun tàbí àwọn tí ó dáwọ́ dúró."], ["Olùfúnni tí ó dáwọ́ dúró (lapsed donor)", "ẹni tí ó ti fúnni rí ṣùgbọ́n tí kò tíì fúnni lọ́dún yìí."]],
          slides: [
            { title: "Ohun tí ẹgbẹ́ olùfúnni jẹ́", bullets: ["Àwọn olùfúnni tí wọ́n jọra", "Ẹgbẹ́ kọ̀ọ̀kan ń gba ọ̀rọ̀ tó tọ́"] },
            { title: "Ẹgbẹ́ mẹ́rin láti fi bẹ̀rẹ̀", bullets: ["Tuntun: ẹ̀bùn àkọ́kọ́ ní ọdún yìí", "Àtúnfúnni: fúnni lọ́dún tó kọjá àti ọdún yìí", "Àwọn tí ó dáwọ́ dúró: fúnni lọ́dún tó kọjá, kì í ṣe ọdún yìí", "Olùfúnni ńlá: ju iye kan tí o yàn lọ"] },
            { title: "Nínú spreadsheet", bullets: ["Fi òpó Segment kún un", "Lo sort tàbí filter láti kó wọn jọ", "Ka ẹgbẹ́ kọ̀ọ̀kan"] }
          ],
          tryIt: "Fi òpó Segment kún àkọsílẹ̀ rẹ. Sàmì sí gbogbo ID olùfúnni kí o sì ka iye Tuntun, Àtúnfúnni, Àwọn tí ó dáwọ́ dúró àti Olùfúnni ńlá.",
          youCanNow: "pín àwọn olùfúnni sí ẹgbẹ́ kí o sì ka iye ẹgbẹ́ kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O3", q: "Ẹgbẹ́ wo ni olùfúnni tí ó fúnni lọ́dún tó kọjá àti ọdún yìí wà?", options: ["Àtúnfúnni", "Tuntun", "Àwọn tí ó dáwọ́ dúró", "Olùfúnni ńlá"], answer: 0, why: "Àwọn Àtúnfúnni fúnni lọ́dún tó kọjá àti ọdún yìí." },
            { objective: "O3", q: "O fẹ́ rí gbogbo àwọn olùfúnni tí ó dáwọ́ dúró pa pọ̀. Kí ni o máa ṣe nínú spreadsheet?", options: ["Tún wọn tẹ sí ojú-ewé tuntun", "Lo filter tàbí sort lórí òpó Segment", "Pa gbogbo àwọn yòókù rẹ́", "Ní kí AI méfò wọn"], answer: 1, why: "Lo filter tàbí sort spreadsheet láti kó wọn jọ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mọ àwọn nọ́mbà olùfúnni rẹ",
        questions: [
          { objective: "O1", q: "Kí o tó fi AI túpalẹ̀ ìsọfúnni olùfúnni, kí ni o yẹ kí o ṣe?", options: ["Fi gbogbo àkọsílẹ̀ pẹ̀lú orúkọ sínú rẹ̀", "Fi í ránṣẹ́ sí àwọn olùyọ̀ǹda ní email", "Ṣe ẹ̀dà tí a fi ID rọ́pò orúkọ, tí a sì pa ìsọfúnni olùbásọ̀rọ̀ rẹ́", "Gbé e sórí ayélujára"], answer: 2, why: "Ẹ̀dà tí kò dárúkọ ẹnikẹ́ni ń dáàbò bo ìsọfúnni àdáni àwọn olùfúnni." },
          { objective: "O2", q: "Olùfúnni 40 fúnni lọ́dún tó kọjá, 18 nínú wọn sì tún fúnni lọ́dún yìí. Kí ni ìpín ìdádúró?", options: ["18 nínú ọgọ́rùn-ún", "40 nínú ọgọ́rùn-ún", "45 nínú ọgọ́rùn-ún", "58 nínú ọgọ́rùn-ún"], answer: 2, why: "18 tí a pín sí 40 jẹ́ 0.45, ìyẹn 45 nínú ọgọ́rùn-ún." },
          { objective: "O2", q: "Formula spreadsheet wo ló ń fúnni ní ẹ̀bùn àròpín?", options: ["=COUNT()", "=TODAY()", "=MAX()", "=AVERAGE()"], answer: 3, why: "=AVERAGE() ń pín àpapọ̀ sí iye ẹ̀bùn." },
          { objective: "O3", q: "Olùfúnni kan fúnni lọ́dún tó kọjá ṣùgbọ́n kò fúnni lọ́dún yìí. Ẹgbẹ́ wo ni ó wà?", options: ["Tuntun", "Àwọn tí ó dáwọ́ dúró", "Àtúnfúnni", "Olùfúnni ńlá"], answer: 1, why: "Àwọn tí ó dáwọ́ dúró ti fúnni rí ṣùgbọ́n kò fúnni lọ́dún yìí." },
          { objective: "O2", q: "Kí ló dé tí ìpín ìdádúró fi ṣe pàtàkì?", options: ["AI ló ń béèrè fún un", "Pípa olùfúnni mọ́ sábà máa ń kéré ní owó ju wíwá tuntun lọ", "Ó ń mú spreadsheet tóbi sí i", "Ó ń pinnu iye owó-orí"], answer: 1, why: "Ìpín ìdádúró tó dára ń jẹ́ kí ẹ̀bùn máa wọlé déédéé pẹ̀lú owó tí ó kéré." }
        ]
      }
    },
    {
      name: "Orí 2: Láti nọ́mbà sí iṣẹ́",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lílo AI láti ṣàlàyé àwọn nọ́mbà rẹ",
          minutes: 5,
          goal: "Ní kí olùrànlọ́wọ́ AI ṣàlàyé àwọn nọ́mbà olùfúnni tí kò dárúkọ ẹnikẹ́ni ní ọ̀rọ̀ tó rọrùn.",
          text: [
            "O lè fi àwọn nọ́mbà àkópọ̀ rẹ, kì í ṣe àkọsílẹ̀ olùfúnni rẹ, sínú olùrànlọ́wọ́ AI bí ChatGPT, Microsoft Copilot tàbí Google Gemini, kí o sì béèrè ohun tí wọ́n túmọ̀ sí.",
            "Fún àpẹẹrẹ: \"Mo ń darí ilé ìpèsè oúnjẹ (food bank) kékeré kan. Olùfúnni 40 lọ́dún tó kọjá, 35 lọ́dún yìí. Ìpín ìdádúró 45 nínú ọgọ́rùn-ún. Ẹ̀bùn àròpín $85. Àwọn ẹgbẹ́: 17 tuntun, 18 àtúnfúnni, 22 tí ó dáwọ́ dúró, 4 olùfúnni ńlá. Ṣàlàyé ohun tí àwọn nọ́mbà wọ̀nyí ń sọ fún mi ní ọ̀rọ̀ tó rọrùn, àti àwọn ìbéèrè tí mo yẹ kí n béèrè tókàn.\"",
            "AI tún lè dábàá formula tàbí irú chart tí o bá dí. Ṣàyẹ̀wò ìṣirò èyíkéyìí tí ó bá ṣe fúnra rẹ; AI lè ṣàṣìṣe nínú ìṣirò, ó sì lè hùmọ̀ nọ́mbà ìfiwéra (benchmark) tí ó dún bí òótọ́."
          ],
          steps: ["Kọ àwọn nọ́mbà àkópọ̀ rẹ, kì í ṣe ti olùfúnni kọ̀ọ̀kan.", "Sọ irú àjọ tí o jẹ́.", "Ní kí AI ṣàlàyé àwọn nọ́mbà náà ní ọ̀rọ̀ tó rọrùn.", "Béèrè àwọn ìbéèrè tí o yẹ kí o béèrè tókàn.", "Tún ìṣirò èyíkéyìí ṣàyẹ̀wò fúnra rẹ."],
          words: [["Nọ́mbà àkópọ̀ (summary numbers)", "àpapọ̀, àròpín àti iye, kì í ṣe ìsọfúnni nípa ẹnìkan ṣoṣo."], ["Nọ́mbà ìfiwéra (benchmark)", "nọ́mbà tí ó wọ́pọ̀ tí a fi ń ṣe ìfiwéra; AI lè hùmọ̀ irú rẹ̀, nítorí náà ṣàyẹ̀wò orísun rẹ̀."]],
          slides: [
            { title: "Pín àkópọ̀, kì í ṣe ènìyàn", bullets: ["Àpapọ̀, àròpín, iye", "Kò sí orúkọ tàbí ẹ̀bùn kan pẹ̀lú orúkọ láéláé"] },
            { title: "Prompt tó dára", bullets: ["Ohun tí àjọ rẹ ń ṣe", "Àwọn nọ́mbà àkópọ̀ rẹ", "\"Ṣàlàyé ní ọ̀rọ̀ tó rọrùn; kí ni mo yẹ kí n béèrè tókàn?\""] },
            { title: "Ṣàyẹ̀wò AI", bullets: ["Tún ìṣirò rẹ̀ ṣe fúnra rẹ", "Ṣọ́ra fún nọ́mbà ìfiwéra (benchmark)", "Béèrè ibi tí nọ́mbà kan ti wá"] }
          ],
          tryIt: "Fi àwọn nọ́mbà àkópọ̀ rẹ nìkan (àpapọ̀, ìpín ìdádúró, ẹ̀bùn àròpín, iye ẹgbẹ́ kọ̀ọ̀kan) sínú olùrànlọ́wọ́ AI, kí o sì ní kí ó ṣàlàyé wọn kí ó sì dábàá ìbéèrè mẹ́ta tí o máa béèrè tókàn.",
          youCanNow: "lo olùrànlọ́wọ́ AI láti ṣàlàyé àwọn nọ́mbà olùfúnni láìfi ìsọfúnni àdáni olùfúnni kankan hàn.",
          quickCheck: [
            { objective: "O4", q: "Yàtọ̀ sí ṣíṣàlàyé nọ́mbà, kí ni nǹkan míì tí AI lè ràn ọ́ lọ́wọ́ nínú ẹ̀kọ́ yìí?", options: ["Wíwá àdírẹ́sì ilé àwọn olùfúnni", "Pípinnu iye ẹ̀bùn fún àwọn olùfúnni", "Dídábàá formula tàbí irú chart", "Fífi ìpè ẹ̀bùn ránṣẹ́ fúnra rẹ̀"], answer: 2, why: "AI lè dábàá formula tàbí irú chart tí o bá dí." },
            { objective: "O4", q: "AI sọ pé ẹ̀bùn àròpín rẹ jẹ́ $95, ṣùgbọ́n spreadsheet rẹ sọ pé $85 ni. Kí ni o máa ṣe?", options: ["Lo $95", "Lo àròpín méjèèjì", "Ní kí AI gbà pẹ̀lú rẹ", "Tún ìṣirò náà ṣàyẹ̀wò fúnra rẹ kí o sì lo nọ́mbà tó tọ̀nà"], answer: 3, why: "AI lè ṣàṣìṣe nínú ìṣirò, nítorí náà ṣàyẹ̀wò ìṣirò rẹ̀ fúnra rẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe chart tó rọrùn",
          minutes: 4,
          goal: "Ṣe chart kan tí ó fi àwọn ẹgbẹ́ olùfúnni rẹ hàn kedere.",
          text: [
            "Chart ń ran ìgbìmọ̀ rẹ àti ẹgbẹ́ rẹ lọ́wọ́ láti rí ìtàn náà kíákíá. Bar chart (àtẹ ọ̀pá) dára fún àwọn ẹgbẹ́: ọ̀pá kan fún Tuntun, Àtúnfúnni, Àwọn tí ó dáwọ́ dúró àti Olùfúnni ńlá.",
            "Nínú Google Sheets tàbí Excel, kọ orúkọ àwọn ẹgbẹ́ sínú òpó kan àti iye wọn sínú òpó tó tẹ̀lé e. Yan òpó méjèèjì, lẹ́yìn náà lo àkójọ Insert láti fi chart kún un kí o sì yan bar chart tàbí column chart.",
            "Fún chart náà ní àkọlé tó yé bí \"Àwọn olùfúnni wa lọ́dún yìí ní ẹgbẹ́-ẹgbẹ́\". Jẹ́ kí ó rọrùn: ọ̀rọ̀ kan ṣoṣo nínú chart kọ̀ọ̀kan."
          ],
          steps: ["Ṣe tábìlì kékeré: orúkọ ẹgbẹ́ àti iye.", "Yan òpó méjèèjì.", "Fi chart kún un (Insert) kí o sì yan bar chart tàbí column chart.", "Fún un ní àkọlé tó yé.", "Ṣàyẹ̀wò pé àwọn nọ́mbà bá tábìlì rẹ mu."],
          words: [["Bar chart (àtẹ ọ̀pá)", "chart tí ó ń fi iye wéra pẹ̀lú ọ̀pá tí gígùn wọn yàtọ̀ síra."]],
          slides: [
            { title: "Ìdí tí a fi ń lo chart", bullets: ["Ìgbìmọ̀ rẹ ń rí ìtàn náà kíákíá", "Ọ̀rọ̀ kan ṣoṣo nínú chart kọ̀ọ̀kan"] },
            { title: "Ṣe é", bullets: ["Tábìlì: ẹgbẹ́ àti iye", "Yan òpó méjèèjì", "Insert, lẹ́yìn náà yan bar chart"] },
            { title: "Parí rẹ̀", bullets: ["Fi àkọlé tó yé kún un", "Ṣàyẹ̀wò pé àwọn nọ́mbà bára mu"] }
          ],
          tryIt: "Ṣe bar chart ti iye ẹgbẹ́ mẹ́rẹ̀ẹ̀rin rẹ pẹ̀lú àkọlé tó yé.",
          youCanNow: "ṣe bar chart tó yé ti àwọn ẹgbẹ́ olùfúnni fún ẹgbẹ́ rẹ tàbí ìgbìmọ̀ rẹ.",
          quickCheck: [
            { objective: "O5", q: "Kí ni o máa yàn kí o tó fi chart kún un?", options: ["Orúkọ àwọn ẹgbẹ́ àti iye wọn", "Gbogbo àkọsílẹ̀ olùfúnni pẹ̀lú orúkọ", "Àkọlé nìkan", "Òpó tí kò ní nǹkan"], answer: 0, why: "Yan òpó orúkọ ẹgbẹ́ àti òpó iye, lẹ́yìn náà fi chart kún un." },
            { objective: "O5", q: "Chart rẹ ń gbìyànjú láti fi ẹgbẹ́, ìwọ̀n ẹ̀bùn àti oṣù hàn lẹ́ẹ̀kan náà. Kí ni o máa ṣe?", options: ["Fi àwọ̀ púpọ̀ sí i kún un", "Jẹ́ kí ó jẹ́ ọ̀rọ̀ kan ṣoṣo nínú chart kọ̀ọ̀kan", "Yọ àkọlé kúrò", "Lo chart 3D"], answer: 1, why: "Jẹ́ kí ó rọrùn: ọ̀rọ̀ kan ṣoṣo nínú chart kọ̀ọ̀kan." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yíyí ohun tí o rí padà sí ètò ìpè ẹ̀bùn",
          minutes: 6,
          goal: "Kọ ètò ojú-ewé kan tí ó ní iṣẹ́ kan fún ẹgbẹ́ olùfúnni kọ̀ọ̀kan.",
          text: [
            "Nọ́mbà ṣe pàtàkì kìkì tí ó bá yí ohun tí o ń ṣe padà. Fún ẹgbẹ́ kọ̀ọ̀kan, yan iṣẹ́ kan. Olùfúnni tuntun: ìkíni káàbọ̀ tó lọ́yàyà àti ìtàn nípa ohun tí ẹ̀bùn wọn ṣe. Àtúnfúnni: ọpẹ́ àti ìpè láti máa fúnni lóṣooṣù. Àwọn tí ó dáwọ́ dúró: ọ̀rọ̀ \"a ń ṣàárò rẹ\" pẹ̀lú ìròyìn tuntun. Olùfúnni ńlá: ìpè fóònù tàbí àbẹ̀wò láti ọ̀dọ̀ olórí kan fúnra rẹ̀.",
            "AI lè kọ àkọ́pẹrẹ ọ̀rọ̀ kọ̀ọ̀kan. Lo àmì ìdúrópò bí [donor name] àti [program result], lẹ́yìn náà kọ àwọn ìsọfúnni gidi sí i fúnra rẹ nínú ètò olùfúnni rẹ tàbí mail merge.",
            "Kọ ètò ojú-ewé kan: nọ́mbà pàtàkì mẹ́ta rẹ, chart náà, iṣẹ́ kan fún ẹgbẹ́ kọ̀ọ̀kan, ẹni tí yóò ṣe é àti ọjọ́ tí yóò fi parí. Jẹ́ kí olùdarí rẹ ṣàyẹ̀wò rẹ̀ kí o tó fi ohunkóhun ránṣẹ́. Tẹ̀lé òfin èyíkéyìí tí àjọ rẹ ní nípa kíkàn sí olùfúnni àti yíyọ ara ẹni kúrò (opt-out)."
          ],
          steps: ["Kọ nọ́mbà pàtàkì mẹ́ta rẹ sí òkè.", "Fi chart rẹ kún un.", "Yan iṣẹ́ kan fún ẹgbẹ́ kọ̀ọ̀kan.", "Ní kí AI kọ àkọ́pẹrẹ ọ̀rọ̀ kọ̀ọ̀kan pẹ̀lú àmì ìdúrópò.", "Kọ ẹni tí yóò ṣe kí ni àti ọjọ́ wo, kí o sì gba ìfọwọ́sí."],
          words: [["Ìpè ẹ̀bùn (appeal)", "ìbéèrè tí ó ń ní kí àwọn alátìlẹ́yìn fúnni."], ["Mail merge", "irinṣẹ́ tí ó ń kọ ìsọfúnni ẹnìkọ̀ọ̀kan láti inú àkọsílẹ̀ sínú lẹ́tà tàbí email kọ̀ọ̀kan."]],
          slides: [
            { title: "Iṣẹ́ kan fún ẹgbẹ́ kọ̀ọ̀kan", bullets: ["Tuntun: ìkíni káàbọ̀ àti ìtàn kan", "Àtúnfúnni: ọpẹ́ àti ìpè láti máa fúnni lóṣooṣù", "Àwọn tí ó dáwọ́ dúró: \"a ń ṣàárò rẹ\" àti ìròyìn tuntun", "Olùfúnni ńlá: ìpè fóònù láti ọ̀dọ̀ olórí kan"] },
            { title: "Kíkọ àkọ́pẹrẹ pẹ̀lú AI", bullets: ["Lo [donor name] àti [program result]", "Kọ àwọn ìsọfúnni gidi sí i fúnra rẹ"] },
            { title: "Ètò ojú-ewé kan rẹ", bullets: ["Nọ́mbà pàtàkì mẹ́ta àti chart", "Iṣẹ́ kan fún ẹgbẹ́ kọ̀ọ̀kan", "Ẹni tí yóò ṣe é àti ọjọ́", "A fọwọ́ sí i kí a tó fi ránṣẹ́"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìpè ẹ̀bùn ojú-ewé kan rẹ pẹ̀lú nọ́mbà mẹ́ta rẹ, chart, iṣẹ́ kan fún ẹgbẹ́ kọ̀ọ̀kan àti àwọn tí yóò ṣe é. Ní kí AI kọ àkọ́pẹrẹ ọ̀rọ̀ \"a ń ṣàárò rẹ\" pẹ̀lú àmì ìdúrópò, lẹ́yìn náà tún un kọ ní ọ̀rọ̀ ara rẹ.",
          youCanNow: "yí àwọn nọ́mbà olùfúnni padà sí ètò ìpè ẹ̀bùn tó wúlò tí ó bọ̀wọ̀ fún ìsọfúnni àdáni àwọn olùfúnni.",
          quickCheck: [
            { objective: "O6", q: "Kí ni iṣẹ́ tó dára fún àwọn olùfúnni tuntun?", options: ["Fojú fò wọ́n títí di ọdún tó ń bọ̀", "Ní kí wọ́n máa fúnni lóṣooṣù lẹ́sẹ̀kẹsẹ̀", "Ìkíni káàbọ̀ tó lọ́yàyà àti ìtàn nípa ohun tí ẹ̀bùn wọn ṣe", "Ọ̀rọ̀ \"a ń ṣàárò rẹ\""], answer: 2, why: "Àwọn olùfúnni tuntun ń gba ìkíni káàbọ̀ tó lọ́yàyà àti ìtàn nípa ohun tí ẹ̀bùn wọn ṣe." },
            { objective: "O6", q: "O ti kọ ètò ìpè ẹ̀bùn rẹ tán. Kí ni o máa ṣe kí o tó fi ohunkóhun ránṣẹ́?", options: ["Fi ránṣẹ́ sí gbogbo olùfúnni lẹ́ẹ̀kan náà", "Gbé e sórí ìkànnì àjọlò", "Ní kí AI fọwọ́ sí i", "Jẹ́ kí olùdarí rẹ ṣàyẹ̀wò rẹ̀ kí o sì tẹ̀lé òfin kíkàn sí olùfúnni àti opt-out rẹ"], answer: 3, why: "Jẹ́ kí olùdarí rẹ ṣàyẹ̀wò rẹ̀, kí o sì tẹ̀lé òfin rẹ nípa kíkàn sí olùfúnni àti opt-out." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Láti nọ́mbà sí iṣẹ́",
        questions: [
          { objective: "O4", q: "Kí ni kò léwu láti fi sínú olùrànlọ́wọ́ AI?", options: ["Gbogbo àkọsílẹ̀ olùfúnni rẹ", "Email àwọn olùfúnni", "Àdírẹ́sì ilé àwọn olùfúnni", "Nọ́mbà àkópọ̀ bí ìpín ìdádúró àti iye ẹgbẹ́ kọ̀ọ̀kan"], answer: 3, why: "Àkópọ̀ kò fi ẹnìkan ṣoṣo hàn." },
          { objective: "O4", q: "AI sọ pé \"ọ̀pọ̀ jù lọ ilé ìpèsè oúnjẹ ń pa 70 nínú ọgọ́rùn-ún àwọn olùfúnni wọn mọ́\". Kí ni o máa ṣe?", options: ["Béèrè orísun rẹ̀ kí o sì ṣàyẹ̀wò rẹ̀ kí o tó lò ó", "Fi í sínú ìròyìn ìgbìmọ̀ lẹ́sẹ̀kẹsẹ̀", "Gbà pé òótọ́ ni", "Pa àwọn nọ́mbà tìrẹ rẹ́"], answer: 0, why: "AI lè hùmọ̀ nọ́mbà ìfiwéra; ṣàyẹ̀wò orísun rẹ̀." },
          { objective: "O5", q: "Chart wo ló dára láti fi iye àwọn ẹgbẹ́ wéra?", options: ["Máàpù", "Fọ́tò", "Bar chart", "Kàlẹ́ńdà"], answer: 2, why: "Ọ̀pá ń jẹ́ kí ó rọrùn láti fi ìwọ̀n àwọn ẹgbẹ́ wéra." },
          { objective: "O6", q: "Kí ni iṣẹ́ tó dára fún àwọn olùfúnni tí ó dáwọ́ dúró?", options: ["Yọ wọ́n kúrò títí láé", "Béèrè nọ́mbà báńkì wọn", "Má ṣe fi nǹkan kan ránṣẹ́", "Ọ̀rọ̀ \"a ń ṣàárò rẹ\" pẹ̀lú ìròyìn tuntun"], answer: 3, why: "Ìròyìn tó lọ́yàyà ń pè wọ́n padà." },
          { objective: "O6", q: "Nígbà tí AI bá ń kọ àkọ́pẹrẹ lẹ́tà sí olùfúnni, báwo ni orúkọ ṣe máa farahàn?", options: ["Orúkọ gidi tí a tẹ sínú prompt", "Kò sí orúkọ rárá, kódà nínú lẹ́tà ìkẹyìn", "Àmì ìdúrópò bí [donor name] tí a máa kọ orúkọ sí lẹ́yìn náà", "Orúkọ ìdílé nìkan"], answer: 2, why: "Àmì ìdúrópò ń pa orúkọ mọ́ kúrò nínú irinṣẹ́ AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìtúpalẹ̀ Ìsọfúnni Olùfúnni pẹ̀lú AI",
    questions: [
      { objective: "O1", q: "Ìtúpalẹ̀ ìsọfúnni olùfúnni jẹ́:", options: ["Títa àkọsílẹ̀ olùfúnni", "Kíkẹ́kọ̀ọ́ àkọsílẹ̀ ẹ̀bùn láti mọ ẹni tí ó ń fúnni, iye àti ìgbà mélòó", "Míméfò ẹni tí ó lè fúnni", "Irú app AI kan"], answer: 1, why: "Ó ń lo àkọsílẹ̀ tìrẹ láti darí ìkówójọ." },
      { objective: "O1", q: "Kí ni o máa fi rọ́pò orúkọ olùfúnni nínú ẹ̀dà iṣẹ́ rẹ?", options: ["ID bí D001", "Orúkọ àpèjẹ", "Nọ́mbà fóònù", "Kò sí nǹkan"], answer: 0, why: "ID ń jẹ́ kí o túpalẹ̀ láìfi ẹni tí í ṣe ta hàn." },
      { objective: "O1", q: "Àwọn òpó wo ni ẹ̀dà tí kò dárúkọ ẹnikẹ́ni yẹ kí ó pa mọ́?", options: ["Àdírẹ́sì ilé àti email", "Fóònù àti àkọsílẹ̀", "ID, ọjọ́ ẹ̀bùn, iye owó àti ìpolongo", "Ìsọfúnni báńkì"], answer: 2, why: "Ìwọ̀nyẹn nìkan ni o nílò fún àwọn nọ́mbà náà." },
      { objective: "O1", q: "Níbo ni àkọsílẹ̀ olùfúnni gidi yẹ kí ó wà?", options: ["Nínú ètò olùfúnni rẹ tàbí fáìlì tí a dáàbò bò", "Nínú fóldà tí gbogbo ènìyàn lè ṣí", "Nínú ìjíròrò AI", "Nínú text ẹgbẹ́"], answer: 0, why: "Àkọsílẹ̀ àdáni gbọ́dọ̀ wà ní ààbò." },
      { objective: "O2", q: "Bí a ṣe ń rí àpapọ̀ owó tí a kó jọ ni:", options: ["=TODAY()", "=COUNT() ti àwọn ọjọ́", "Míméfò", "=SUM() ti iye owó"], answer: 3, why: "=SUM() ń ro gbogbo ẹ̀bùn pọ̀." },
      { objective: "O2", q: "Ẹ̀bùn àròpín dọ́gba pẹ̀lú:", options: ["Ẹ̀bùn tí ó tóbi jù", "Àpapọ̀ owó tí a kó jọ tí a pín sí iye ẹ̀bùn", "Iye olùfúnni", "Ẹ̀bùn tí ó kéré jù ní ìlọ́po méjì"], answer: 1, why: "Ìyẹn ni ìtumọ̀ àròpín." },
      { objective: "O2", q: "Olùfúnni 50 fúnni lọ́dún tó kọjá; 30 nínú wọn tún fúnni. Ìpín ìdádúró jẹ́:", options: ["30 nínú ọgọ́rùn-ún", "50 nínú ọgọ́rùn-ún", "60 nínú ọgọ́rùn-ún", "80 nínú ọgọ́rùn-ún"], answer: 2, why: "30 / 50 = 0.6, ìyẹn 60 nínú ọgọ́rùn-ún." },
      { objective: "O2", q: "Ìpín ìdádúró tí ó kéré fi hàn pé o yẹ kí o:", options: ["Dáwọ́ ìkówójọ dúró", "Gbé iye owó sókè", "Pa àwọn olùfúnni àtijọ́ rẹ́", "Dúpẹ́ lọ́wọ́ àwọn olùfúnni kí o sì máa sọ ìròyìn fún wọn dáadáa sí i"], answer: 3, why: "Títọ́jú àwọn olùfúnni dáadáa ń mú wọn padà wá." },
      { objective: "O3", q: "Ẹ̀bùn àkọ́kọ́ olùfúnni kan jẹ́ ọdún yìí. Ẹgbẹ́ rẹ̀ ni:", options: ["Tuntun", "Àwọn tí ó dáwọ́ dúró", "Àtúnfúnni", "Olùfúnni ńlá"], answer: 0, why: "Àwọn olùfúnni tuntun fúnni fún ìgbà àkọ́kọ́ lọ́dún yìí." },
      { objective: "O3", q: "Ẹgbẹ́ olùfúnni (segment) jẹ́:", options: ["Olùfúnni kan ṣoṣo", "Irú chart kan", "Àwọn olùfúnni tí wọ́n jọra ní ọ̀nà kan tí ó ṣe pàtàkì", "Fọ́ọ̀mù owó-orí kan"], answer: 2, why: "Àwọn ẹgbẹ́ ń jẹ́ kí o fi ọ̀rọ̀ tó tọ́ ránṣẹ́ sí ẹgbẹ́ kọ̀ọ̀kan." },
      { objective: "O3", q: "Láti kó àwọn olùfúnni jọ ní ẹgbẹ́-ẹgbẹ́ nínú spreadsheet, o lè:", options: ["Tẹ ìwé jáde kí o sì gé e", "Ní kí àwọn olùfúnni pín ara wọn", "Pa àwọn ìlà rẹ́", "Fi òpó Segment kún un kí o sì lo sort tàbí filter"], answer: 3, why: "Sort àti filter ń kó àwọn ìlà jọ ní ẹgbẹ́-ẹgbẹ́." },
      { objective: "O4", q: "Prompt wo ni kò léwu tí ó sì wúlò?", options: ["\"Orúkọ àti ẹ̀bùn gbogbo àwọn olùfúnni wa nìyí...\"", "\"Ọ̀rọ̀ aṣínà báńkì wa nìyí.\"", "\"Ìpín ìdádúró 45 nínú ọgọ́rùn-ún, ẹ̀bùn àròpín $85, 22 tí ó dáwọ́ dúró. Ṣàlàyé ní ọ̀rọ̀ tó rọrùn.\"", "\"Méfò àwọn olùfúnni wa.\""], answer: 2, why: "Ó ń pín nọ́mbà àkópọ̀ nìkan, ó sì ń béèrè ìbéèrè tó yé." },
      { objective: "O4", q: "AI ṣe ìṣirò kan lórí àwọn nọ́mbà rẹ. O yẹ kí o:", options: ["Gbẹ́kẹ̀ lé e pátápátá", "Tún un ṣàyẹ̀wò fúnra rẹ", "Fi ránṣẹ́ sí ìgbìmọ̀ láìṣàyẹ̀wò", "Fojú fo gbogbo nọ́mbà"], answer: 1, why: "AI lè ṣàṣìṣe nínú ìṣirò." },
      { objective: "O4", q: "Nọ́mbà ìfiwéra (benchmark) láti ọ̀dọ̀ AI tí kò ní orísun yẹ kí ó jẹ́:", options: ["Èyí tí a ṣàyẹ̀wò kí a tó lò ó", "Èyí tí a lò nínú ìròyìn grant rẹ", "Èyí tí a tẹ sórí ojú-òpó wẹ́ẹ̀bù rẹ", "Èyí tí a pín pẹ̀lú àwọn olùfúnni"], answer: 0, why: "AI lè hùmọ̀ nọ́mbà tí ó dún bí òótọ́." },
      { objective: "O5", q: "Láti ṣe chart nínú Sheets tàbí Excel, o kọ́kọ́:", options: ["Pa fáìlì náà dé", "Tẹ ọ̀rọ̀ aṣínà", "Yan tábìlì orúkọ ẹgbẹ́ àti iye wọn", "Pa ìsọfúnni náà rẹ́"], answer: 2, why: "Láti inú ìsọfúnni tí o yàn ni a ti ń kọ́ chart." },
      { objective: "O5", q: "Àkọlé chart tó dára ni:", options: ["\"Àwọn olùfúnni wa lọ́dún yìí ní ẹgbẹ́-ẹgbẹ́\"", "\"Chart 1\"", "Kò sí àkọlé", "\"Ìsọfúnni\""], answer: 0, why: "Àkọlé tó yé ń sọ ọ̀rọ̀ náà fún àwọn òǹkàwé." },
      { objective: "O6", q: "Iṣẹ́ tó dára fún àwọn àtúnfúnni ni:", options: ["Fífojú fò wọ́n", "Bíbéèrè ọ̀rọ̀ aṣínà wọn", "Yíyọ wọ́n kúrò nínú àkọsílẹ̀", "Ọpẹ́ àti ìpè láti máa fúnni lóṣooṣù"], answer: 3, why: "Àwọn olùfúnni olóòótọ́ ni ó ṣeé ṣe jù kí wọ́n bẹ̀rẹ̀ sí í fúnni lóṣooṣù." },
      { objective: "O6", q: "Fún àwọn olùfúnni ńlá, iṣẹ́ tó dára ni:", options: ["Lẹ́tà kan náà fún gbogbo ènìyàn nìkan", "Ìpè fóònù tàbí àbẹ̀wò láti ọ̀dọ̀ olórí kan fúnra rẹ̀", "Kò sí ìbánisọ̀rọ̀", "Text tí ó ń béèrè nọ́mbà káàdì"], answer: 1, why: "Ìbánisọ̀rọ̀ ojúkojú ń bọ̀wọ̀ fún ẹ̀bùn ńlá." },
      { objective: "O6", q: "Ètò ojú-ewé kan rẹ yẹ kí ó ní:", options: ["Àdírẹ́sì gbogbo olùfúnni", "Nọ́mbà pàtàkì, chart, iṣẹ́, àwọn tí yóò ṣe é àti ọjọ́", "Chart nìkan", "Èrò AI nìkan"], answer: 1, why: "Ètò ń sọ ohun tí a máa ṣe, ẹni tí yóò ṣe é àti ìgbà." },
      { objective: "O6", q: "Kí o tó fi ìpè ẹ̀bùn èyíkéyìí ránṣẹ́, o yẹ kí o:", options: ["Fi ránṣẹ́ sí gbogbo ènìyàn lẹ́ẹ̀kan náà láìṣàyẹ̀wò", "Jẹ́ kí AI fi ránṣẹ́", "Má ṣe ka á láti wá àṣìṣe", "Gba ìfọwọ́sí kí o sì tẹ̀lé òfin kíkàn sí olùfúnni àti opt-out rẹ"], answer: 3, why: "Ìfọwọ́sí àti bíbọ̀wọ̀ fún opt-out ń dáàbò bo ìgbẹ́kẹ̀lé àwọn olùfúnni." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 6, 8, 11, 14, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ẹ̀dà tí kò léwu", objective: "O1", notYet: "Orúkọ, àdírẹ́sì, fóònù, email tàbí àkọsílẹ̀ ṣì wà nínú ẹ̀dà náà.", meets: "A ti fi ID rọ́pò orúkọ; ID, ọjọ́, iye owó àti ìpolongo nìkan ni ó kù.", exceeds: "Ó kọ ibi tí àkọsílẹ̀ gidi wà àti ẹni tí ó lè ṣí i." },
      { name: "Nọ́mbà pàtàkì", objective: "O2", notYet: "Ìṣirò ìpín ìdádúró tàbí ẹ̀bùn àròpín kò tọ̀nà.", meets: "Àpapọ̀ owó tí a kó jọ, ẹ̀bùn àròpín àti ìpín ìdádúró tọ̀nà gbogbo.", exceeds: "Ó fi formula tàbí ìṣirò fún nọ́mbà kọ̀ọ̀kan hàn." },
      { name: "Ẹgbẹ́ olùfúnni", objective: "O3", notYet: "Ẹgbẹ́ kò tó mẹ́ta, tàbí àwọn olùfúnni kan kò sí nínú ẹgbẹ́ kankan.", meets: "Ó kéré tán ẹgbẹ́ mẹ́ta, gbogbo ID olùfúnni wà nínú ọ̀kan, pẹ̀lú iye wọn.", exceeds: "Ó lo ẹgbẹ́ mẹ́rẹ̀ẹ̀rin, ó sì sọ iye owó tí ó ń ya Olùfúnni ńlá sọ́tọ̀." },
      { name: "A ṣàyẹ̀wò àlàyé AI", objective: "O4", notYet: "Ó fi ìsọfúnni olùfúnni kọ̀ọ̀kan sínú AI, tàbí ó lo ìṣirò tàbí nọ́mbà ìfiwéra AI láìṣàyẹ̀wò.", meets: "Nọ́mbà àkópọ̀ nìkan ló fi sínú rẹ̀; ó tún ìṣirò AI àti nọ́mbà ìfiwéra èyíkéyìí ṣàyẹ̀wò.", exceeds: "Ó kọ àwọn ìbéèrè tí AI dábàá pé kí ó béèrè tókàn àti ìdáhùn wọn." },
      { name: "Ètò ìpè ẹ̀bùn", objective: "O6", notYet: "Kò sí iṣẹ́ fún ẹgbẹ́ kan, tàbí kò sí ẹni tí yóò ṣe é tàbí ọjọ́.", meets: "Ojú-ewé kan pẹ̀lú nọ́mbà pàtàkì, chart, iṣẹ́ kan fún ẹgbẹ́ kọ̀ọ̀kan, ẹni tí yóò ṣe é àti ọjọ́.", exceeds: "Àwọn àkọ́pẹrẹ ọ̀rọ̀ lo àmì ìdúrópò, olùdarí sì ti fọwọ́ sí ètò náà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn àjọ tí wọ́n ṣírò ìpín ìdádúró olùfúnni wọn fún ìgbà àkọ́kọ́ (ìwádìí àtẹ̀lé)",
      "Ìyípadà nínú ìpín ìdádúró olùfúnni lẹ́yìn ọdún kan, gẹ́gẹ́ bí àwọn àjọ ṣe ròyìn",
      "Àwọn olùfúnni tí ó dáwọ́ dúró tí wọ́n tún fúnni lẹ́yìn ọ̀rọ̀ \"a ń ṣàárò rẹ\""
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní Google Sheets tàbí Excel",
      "Ẹ̀dà àkọsílẹ̀ olùfúnni rẹ tí kò dárúkọ ẹnikẹ́ni, tàbí àkọsílẹ̀ àṣeṣe láti Ẹ̀kọ́ 1",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́, tí a ń lò pẹ̀lú nọ́mbà àkópọ̀ nìkan",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Lo àkọsílẹ̀ àṣeṣe nínú kíláàsì; àwọn akẹ́kọ̀ọ́ máa ń ṣiṣẹ́ lórí ìsọfúnni gidi nínú fáìlì tiwọn tí a dáàbò bò nìkan.",
      "Ẹ jọ ṣe ìṣirò ìpín ìdádúró pọ̀ kí àwọn akẹ́kọ̀ọ́ tó gbìyànjú tiwọn.",
      "Fi àpẹẹrẹ kan hàn níbi tí ìṣirò AI kò ti tọ̀nà, kí àwọn akẹ́kọ̀ọ́ lè rí ìdí tí wọ́n fi ń tún un ṣàyẹ̀wò.",
      "Pe olùdarí tàbí olórí ìkówójọ kí wọ́n lè fọwọ́ sí ètò ìpè ẹ̀bùn lójú ẹsẹ̀.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
