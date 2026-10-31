"use strict";

// Koach Learn course (Yoruba translation of shared/ai-productivity-operations.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-productivity-operations-yo",
  lang: "yo",
  translationOf: "ai-productivity-operations",
  category: "Small Business",
  name: "AI fún Ìṣesí Iṣẹ́ àti Ìṣàkóso Ojoojúmọ́",
  skills: "Ṣíṣètò ọ̀sẹ̀ pẹ̀lú AI, Kíkọ ìlànà iṣẹ́ (SOP), Yíyí ìpàdé padà sí iṣẹ́ tí a ó ṣe, Ṣíṣe ètò àkókò iṣẹ́ fún òṣìṣẹ́ tàbí olùyọ̀ǹda, Títọpinpin ohun èlò àti àtúnrà, Kíkọ àyẹ̀wò iṣẹ́ ọ̀sẹ̀",
  outcome: "lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti ṣètò ọ̀sẹ̀, yí iṣẹ́ tí kò létò padà sí ìlànà ìgbésẹ̀-ní-ìgbésẹ̀ tó yé, rí àwọn iṣẹ́ tí a ó ṣe láti inú ìpàdé, ṣe ètò àkókò iṣẹ́, tọpinpin ohun èlò, kí o sì ṣàyẹ̀wò ọ̀sẹ̀, kí iṣẹ́ àjọ rẹ lè máa lọ dáadáa láìgba àkókò rẹ púpọ̀.",
  about: [
    "Ìṣàkóso iṣẹ́ ojoojúmọ́ (operations) ni iṣẹ́ tí ń jẹ́ kí àjọ kan máa lọ: ètò àkókò iṣẹ́, ohun èlò, ìlànà iṣẹ́, ìpàdé àti àtẹ̀lé. Tí kò bá létò, àwọn olórí máa ń lo òru láti fi parí iṣẹ́ tó kù. AI lè gbé ọ̀pọ̀ nínú ẹrù yìí.",
    "Ẹ̀kọ́ yìí wà fún àwọn tó ni iṣẹ́ kékeré àti àwọn alákòóso, àwọn olùdarí àjọ aláìlérè (nonprofit) àti àwọn tó ń ṣètò olùyọ̀ǹda. Àpẹẹrẹ ni ilé oúnjẹ, ibi ìtọ́jú ọmọdé, ẹgbẹ́ olùtọ́jú ọgbà, ṣọ́ọ̀bù ẹrù àlòkù àti ibi ìpín oúnjẹ ọ̀fẹ́.",
    "O máa lo ChatGPT, Microsoft Copilot tàbí Google Gemini pẹ̀lú Google Docs àti Sheets tàbí Microsoft 365. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àpò irinṣẹ́ iṣẹ́ ọ̀sẹ̀ fún àjọ gidi tàbí ti àṣeṣe: ètò ọ̀sẹ̀ tí a tò bí ó ṣe ṣe pàtàkì sí, ìlànà iṣẹ́ (SOP) kan fún iṣẹ́ tí a máa ń tún ṣe, àkọsílẹ̀ ìpàdé pẹ̀lú iṣẹ́ tí a ó ṣe, ẹni tó ni iṣẹ́ kọ̀ọ̀kan àti ọjọ́ tí ó gbọ́dọ̀ parí, ètò àkókò iṣẹ́ ọ̀sẹ̀ kan fún òṣìṣẹ́ tàbí olùyọ̀ǹda, ìwé ohun èlò pẹ̀lú ààlà àtúnrà, àti àyẹ̀wò kúkúrú ní òpin ọ̀sẹ̀ pẹ̀lú àtúnṣe kan fún ọ̀sẹ̀ tó ń bọ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tó ni iṣẹ́ kékeré, àwọn olórí ìyípo iṣẹ́ àti alákòóso ọ́fíìsì, àti àwọn olùṣètò àjọ aláìlérè, ṣọ́ọ̀ṣì àti ètò àwùjọ, tí wọ́n ń ṣe ọ̀pọ̀ iṣẹ́ pọ̀: òṣìṣẹ́ tàbí olùyọ̀ǹda, ìpàdé àti ohun èlò.",
    startingPoint: "Wọ́n ń darí ibi iṣẹ́ láti inú ìrántí, àkọsílẹ̀ lórí ìwé, ọ̀rọ̀ ìránṣẹ́ (text) àti kàlẹ́ńdà; àwọn kan ń lo spreadsheet, wọ́n sì ti gbìyànjú olùrànlọ́wọ́ AI. Díẹ̀ ni wọ́n ti kọ ìlànà iṣẹ́, àkọsílẹ̀ ìpàdé tó létò tàbí ààlà àtúnrà sílẹ̀.",
    gap: "Tí gbogbo nǹkan bá wà ní orí ẹnì kan ṣoṣo, iṣẹ́ máa ń bọ́, àwọn tuntun máa ń pẹ́ kí wọ́n tó kọ́ṣẹ́, ohun èlò sì máa ń tán. Àwọn akẹ́kọ̀ọ́ nílò àwọn irinṣẹ́ tó rọrùn tí AI ń ràn lọ́wọ́ fún ètò, ìlànà iṣẹ́, ìpàdé, ètò àkókò iṣẹ́, ohun èlò àti àyẹ̀wò ọ̀sẹ̀, kí iṣẹ́ lè máa lọ dáadáa, kí ó má sì gba àkókò wọn púpọ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà; kọ̀mpútà rọrùn jù fún spreadsheet",
      "Àṣírí: orúkọ àkọ́kọ́ tàbí àmì nìkan; kò sí ìsọfúnni ìlera, owó oṣù tàbí àṣírí òṣìṣẹ́ nínú irinṣẹ́ AI",
      "Òfin: òfin iṣẹ́ nípa ìsinmi àti wákàtí iṣẹ́ àwọn ọmọdé yàtọ̀ síra; akẹ́kọ̀ọ́ máa ṣàyẹ̀wò ẹ̀ka ìjọba tó ń bójú tó iṣẹ́ ní ìpínlẹ̀ wọn",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, nǹkan bí ìṣẹ́jú 60 lápapọ̀, pẹ̀lú àkókò láti ṣe àpò irinṣẹ́"
    ],
    prerequisites: "Kò sí. Àwọn tó jẹ́ tuntun sí olùrànlọ́wọ́ AI lè kọ́kọ́ ṣe ẹ̀kọ́ ìfihàn sí AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ iṣẹ́ tí kò létò àti wákàtí tí o ní lóòótọ́", action: "ṣe ètò ọ̀sẹ̀ ojoojúmọ́ tí a tò bí ó ṣe ṣe pàtàkì sí pẹ̀lú AI", standard: "pẹ̀lú àkókò fún iṣẹ́ mẹ́ta tó ṣe pàtàkì jù lórí kàlẹ́ńdà rẹ" },
    { id: "O2", condition: "Fún iṣẹ́ tí àjọ rẹ máa ń tún ṣe", action: "kọ ìlànà iṣẹ́ (SOP) oní-nọ́mbà pẹ̀lú èrèdí, ohun èlò, ìgbésẹ̀, ìkìlọ̀ ààbò àti àkọsílẹ̀ àyẹ̀wò", standard: "tí ẹni tuntun fi lè tẹ̀lé e láìdúró" },
    { id: "O3", condition: "Lẹ́yìn ìpàdé kúkúrú", action: "kọ àwọn ìpinnu, iṣẹ́ tí a ó ṣe àti ìbéèrè tí kò tíì ní ìdáhùn láti inú àkọsílẹ̀ ìpàdé", standard: "tí iṣẹ́ kọ̀ọ̀kan ní ẹni tó ni ín àti ọjọ́ ìparí tí a fohùn ṣọ̀kan lé, tí a sì fi ránṣẹ́ láàárín ọjọ́ kan" },
    { id: "O4", condition: "Tí a bá fún ọ ní ìyípo iṣẹ́, àkókò tí ènìyàn wà àti àwọn òfin", action: "ṣe ètò àkókò iṣẹ́ ọ̀sẹ̀ kan fún òṣìṣẹ́ tàbí olùyọ̀ǹda tí ó bo gbogbo ìyípo iṣẹ́", standard: "ní títẹ̀lé ààlà wákàtí, ọgbọ́n tí a nílò àti òfin iṣẹ́" },
    { id: "O5", condition: "Tí a bá fún ọ ní ohun èlò rẹ àti bí o ṣe ń lò wọ́n kíákíá tó", action: "ṣe ìwé ohun èlò pẹ̀lú ààlà àtúnrà àti àgbékalẹ̀ (formula) tí ó ń fi REORDER hàn", standard: "pẹ̀lú ààlà àtúnrà fún gbogbo ohun èlò" },
    { id: "O6", condition: "Ní òpin ọ̀sẹ̀", action: "kọ àyẹ̀wò kúkúrú nípa àṣeyọrí, ohun tí a kò ṣe àti ìṣòro, kí o sì yan àtúnṣe kan", standard: "láàárín nǹkan bí ìṣẹ́jú 15, pẹ̀lú àtúnṣe náà nínú ètò ọ̀sẹ̀ tó ń bọ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣe ètò iṣẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣètò ọ̀sẹ̀ rẹ pẹ̀lú AI",
          minutes: 5,
          goal: "Yí àkọsílẹ̀ iṣẹ́ tí kò létò padà sí ètò ọ̀sẹ̀ tí a tò bí ó ṣe ṣe pàtàkì sí.",
          text: [
            "Àkọsílẹ̀ iṣẹ́ gígùn tí ó dàrú máa ń jẹ́ kí gbogbo nǹkan dà bí ẹni pé ó kánjú. AI lè tò ó kíákíá. Kọ gbogbo iṣẹ́ sínú ìjíròrò (chat) náà, lẹ́yìn náà ní kí ó tò ó kí ó sì ṣe ètò.",
            "Prompt tó wúlò: \"Àkọsílẹ̀ iṣẹ́ mi fún ọ̀sẹ̀ yìí nìyí. Tò ó sí: dandan ní ọ̀sẹ̀ yìí, ó yẹ kí n ṣe, ó lè dúró, àti ẹlòmíì lè ṣe é. Lẹ́yìn náà ṣe ètò ọjọ́-dé-ọjọ́. Mo ní nǹkan bí wákàtí 3 lójoojúmọ́ fún iṣẹ́ ọ́fíìsì, ọjọ́ Ìṣẹ́gun (Tuesday) sì kún fún ìfijíṣẹ́ ẹrù.\"",
            "Ìwọ ni ọ̀gá ètò náà. Yí ohunkóhun tí AI ṣe ní àṣìṣe padà, ya àkókò sọ́tọ̀ lórí kàlẹ́ńdà rẹ fún iṣẹ́ mẹ́ta tó ṣe pàtàkì jù, kí o sì fi àyè sílẹ̀ fún ohun àìròtẹ́lẹ̀."
          ],
          steps: ["Kọ gbogbo iṣẹ́, ńlá àti kékeré, sínú àkọsílẹ̀ kan.", "Ní kí AI tò ó sí dandan, ó yẹ, ó lè dúró àti ẹlòmíì lè ṣe é.", "Sọ wákàtí tí o ní lóòótọ́ àti àwọn ọjọ́ tí ọwọ́ rẹ dí fún un.", "Tún ètò náà ṣe, lẹ́yìn náà ya àkókò sọ́tọ̀ lórí kàlẹ́ńdà fún mẹ́ta tó ṣe pàtàkì jù."],
          words: [["Ìtò bí ó ṣe ṣe pàtàkì sí (prioritize)", "pinnu ohun tó ṣe pàtàkì jù, kí o sì kọ́kọ́ ṣe é."], ["Fífi iṣẹ́ lé ẹlòmíì lọ́wọ́ (delegate)", "fi iṣẹ́ kan lé ẹlòmíì lọ́wọ́."]],
          slides: [
            { title: "Kọ gbogbo iṣẹ́ sílẹ̀", bullets: ["Gbogbo iṣẹ́, ńlá àti kékeré", "Ibì kan, àkọsílẹ̀ kan"] },
            { title: "Ní kí AI tò ó", bullets: ["Dandan, ó yẹ kí n ṣe", "Ó lè dúró, ẹlòmíì lè ṣe é", "Sọ wákàtí tí o ní lóòótọ́ fún un"] },
            { title: "Ètò náà jẹ́ tìrẹ", bullets: ["Tún ohun tí AI ṣe ní àṣìṣe ṣe", "Ya àkókò sọ́tọ̀ fún mẹ́ta tó ṣe pàtàkì jù", "Fi àyè sílẹ̀ fún ohun àìròtẹ́lẹ̀"] }
          ],
          tryIt: "Kọ gbogbo iṣẹ́ rẹ fún ọ̀sẹ̀ yìí sílẹ̀. Ní kí olùrànlọ́wọ́ AI tò ó kí ó sì ṣe ètò ọjọ́-dé-ọjọ́ pẹ̀lú wákàtí rẹ gidi, lẹ́yìn náà tún un ṣe, kí o sì ya àkókò sọ́tọ̀ fún iṣẹ́ mẹ́ta tó ṣe pàtàkì jù lórí kàlẹ́ńdà.",
          youCanNow: "yí àkọsílẹ̀ iṣẹ́ tí kò létò padà sí ètò ọ̀sẹ̀ tí a tò bí ó ṣe ṣe pàtàkì sí pẹ̀lú AI.",
          quickCheck: [
            { objective: "O1", q: "Nínú ètò ọ̀sẹ̀ ẹ̀kọ́ yìí, kí ni \"ẹlòmíì lè ṣe é\" túmọ̀ sí?", options: ["Iṣẹ́ tí o máa kọ́kọ́ ṣe", "Iṣẹ́ tí ẹlòmíì lè ṣe", "Iṣẹ́ tí o máa pa rẹ́", "Iṣẹ́ tí ó gbọ́dọ̀ parí lónìí"], answer: 1, why: "Iṣẹ́ \"ẹlòmíì lè ṣe é\" ni àwọn iṣẹ́ tí ẹlòmíì lè ṣe." },
            { objective: "O1", q: "Ètò AI fi iṣẹ́ rẹ tó tóbi jù sí ọjọ́ Ìṣẹ́gun, ọjọ́ tí ìfijíṣẹ́ ẹrù pọ̀ jù. Kí ni o máa ṣe?", options: ["Tẹ̀lé e; AI mọ̀ jù", "Pa iṣẹ́ náà rẹ́", "Ní kí AI fún ọ ní àkọsílẹ̀ iṣẹ́ tuntun", "Gbé iṣẹ́ náà lọ sí ọjọ́ tí ó dákẹ́ jù, kí o sì ya àkókò náà sọ́tọ̀ lórí kàlẹ́ńdà rẹ"], answer: 3, why: "Ìwọ ni ọ̀gá ètò náà; tún ohun tí AI ṣe ní àṣìṣe ṣe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìlànà iṣẹ́ (SOP)",
          minutes: 6,
          goal: "Yí bí o ṣe ń ṣe iṣẹ́ kan padà sí ìlànà ìgbésẹ̀-ní-ìgbésẹ̀ tó yé tí ẹnikẹ́ni lè tẹ̀lé.",
          text: [
            "Ìlànà iṣẹ́ (standard operating procedure, SOP) ni ìgbésẹ̀ tí a kọ sílẹ̀ fún iṣẹ́ tí a máa ń tún ṣe: ṣíṣí ṣọ́ọ̀bù, fífọ ilé ìdáná, gbígba oníbàárà wọlé, kíka owó inú àpótí owó. Pẹ̀lú SOP, òṣìṣẹ́ tàbí olùyọ̀ǹda tuntun máa ń kọ́ṣẹ́ kíákíá, iṣẹ́ sì máa ń lọ bákan náà nígbà gbogbo.",
            "Ọ̀nà tó yára jù: sọ ọ́ tàbí tẹ̀ ẹ́ bí o ṣe máa ṣàlàyé rẹ̀ fún ẹni tuntun, kódà tí kò bá létò. Lẹ́yìn náà sọ fún AI: \"Yí èyí padà sí SOP oní-nọ́mbà pẹ̀lú àkọlé, èrèdí, ohun èlò tí a nílò, ìgbésẹ̀ tí ọ̀kọ̀ọ̀kan ní ìṣe kan ṣoṣo, ìkìlọ̀ ààbò àti àkọsílẹ̀ àyẹ̀wò ìparí. Lo ọ̀rọ̀ tó rọrùn.\"",
            "Dán an wò: ní kí ẹni tí kò tíì ṣe iṣẹ́ náà rí tẹ̀lé e nígbà tí o ń wò ó láìsọ̀rọ̀. Ní gbogbo ìgbà tí ó bá dúró láti ronú, SOP náà nílò ìgbésẹ̀ tó yé jù. Kọ ọjọ́ sí i, kí o sì sọ ẹni tó ni ín."
          ],
          steps: ["Ṣàlàyé iṣẹ́ náà sókè tàbí ní kíkọ, kò burú tí kò bá létò.", "Ní kí AI yí i padà sí SOP oní-nọ́mbà pẹ̀lú èrèdí, ohun èlò, ìgbésẹ̀, ìkìlọ̀ ààbò àti àkọsílẹ̀ àyẹ̀wò.", "Ṣàyẹ̀wò ìgbésẹ̀ kọ̀ọ̀kan pé ó tọ̀nà.", "Ní kí ẹni tuntun dán an wò.", "Tún àwọn ìgbésẹ̀ tí kò yé ṣe, lẹ́yìn náà kọ ọjọ́ sí i kí o sì dárúkọ ẹni tó ni ín."],
          words: [["SOP", "standard operating procedure (ìlànà iṣẹ́): ìgbésẹ̀ tí a kọ sílẹ̀ fún iṣẹ́ tí a máa ń tún ṣe."], ["Àkọsílẹ̀ àyẹ̀wò (checklist)", "àkọsílẹ̀ nǹkan tí o máa sàmì sí kí ohunkóhun má bàa bọ́."]],
          slides: [
            { title: "Ìdí tí SOP fi wúlò", bullets: ["Àwọn tuntun máa ń kọ́ṣẹ́ kíákíá", "Iṣẹ́ máa ń lọ bákan náà nígbà gbogbo"] },
            { title: "Láti àkọsílẹ̀ tí kò létò sí SOP", bullets: ["Ṣàlàyé rẹ̀ bí ẹni pé fún ẹni tuntun", "AI ṣètò rẹ̀: èrèdí, ohun èlò, ìgbésẹ̀", "Fi ìkìlọ̀ ààbò àti àkọsílẹ̀ àyẹ̀wò kún un"] },
            { title: "Dán an wò", bullets: ["Ẹni tuntun tẹ̀lé e", "Ìdádúró kọ̀ọ̀kan = ìgbésẹ̀ tí ó yẹ ká ṣàlàyé dáadáa", "Kọ ọjọ́ sí i, kí o sì dárúkọ ẹni tó ni ín"] }
          ],
          tryIt: "Yan iṣẹ́ kan tí o máa ń ṣe lọ́sọ̀ọ̀sẹ̀. Ṣàlàyé rẹ̀ ní ọ̀rọ̀ ara rẹ, ní kí AI yí i padà sí SOP, ṣàyẹ̀wò rẹ̀, kí o sì ní kí ẹnì kan gbìyànjú láti tẹ̀lé e.",
          youCanNow: "kọ ìlànà iṣẹ́ (SOP) tó yé pẹ̀lú ìrànlọ́wọ́ AI, kí o sì dán an wò.",
          quickCheck: [
            { objective: "O2", q: "Kí ni SOP dúró fún?", options: ["Standard operating procedure (ìlànà iṣẹ́)", "Ètò iṣẹ́ àṣekún òṣìṣẹ́", "Ìlànà rírà ohun èlò", "Àkọsílẹ̀ àkókò àwọn ènìyàn"], answer: 0, why: "SOP ni standard operating procedure: ìgbésẹ̀ tí a kọ sílẹ̀ fún iṣẹ́ tí a máa ń tún ṣe." },
            { objective: "O2", q: "SOP tí AI kọ fún títi ṣọ́ọ̀bù sọ pé \"tì í pa\" ṣùgbọ́n kò mẹ́nu kan ilẹ̀kùn ẹ̀yìn. Kí ni o máa ṣe?", options: ["Lò ó bẹ́ẹ̀", "Ju SOP náà nù", "Ṣàyẹ̀wò ìgbésẹ̀ kọ̀ọ̀kan pé ó tọ̀nà, kí o sì fi ìgbésẹ̀ tó kù kún un", "Jẹ́ kí òṣìṣẹ́ tuntun fúnra wọn mọ̀ ọ́n"], answer: 2, why: "Ṣàyẹ̀wò gbogbo ìgbésẹ̀ pé ó tọ̀nà kí ẹnikẹ́ni tó lo SOP náà." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yíyí ìpàdé padà sí iṣẹ́ tí a ó ṣe",
          minutes: 5,
          goal: "Ṣe ìpàdé kúkúrú, kí o sì lo AI láti yí àkọsílẹ̀ padà sí ìpinnu àti iṣẹ́ tí a ó ṣe.",
          text: [
            "Ọ̀pọ̀ ìpàdé máa ń parí pẹ̀lú gbogbo ènìyàn tí ń mi orí, ṣùgbọ́n kò sí ohun tó ń ṣẹlẹ̀. Ojútùú rẹ̀ rọrùn: gbogbo ìpàdé gbọ́dọ̀ parí pẹ̀lú iṣẹ́ tí a ó ṣe, tí ọ̀kọ̀ọ̀kan ní ẹni tó ni ín àti ọjọ́ ìparí.",
            "Lo ètò ìpàdé (agenda) pẹ̀lú àkókò. Kọ àkọsílẹ̀ kúkúrú, tàbí lo àkọsílẹ̀ AI tí ó wà nínú irinṣẹ́ ìpàdé tí àjọ rẹ bá gbà á láàyè tí a sì ti sọ fún gbogbo ènìyàn. Lẹ́yìn náà lẹ àkọsílẹ̀ náà sínú AI: \"Láti inú àkọsílẹ̀ yìí, kọ àwọn ìpinnu tí a ṣe, iṣẹ́ tí a ó ṣe pẹ̀lú ẹni tó ni ín àti ọjọ́ ìparí, àti àwọn ìbéèrè tí kò tíì ní ìdáhùn.\"",
            "Ṣàyẹ̀wò àkọsílẹ̀ náà kí o tó fi ránṣẹ́, nítorí AI lè ṣèrò ẹni tó ni iṣẹ́ tàbí ọjọ́ tí a kò fohùn ṣọ̀kan lé rí. Yọ ohunkóhun tí ó jẹ́ àṣírí kúrò, bí ìlera tàbí owó oṣù òṣìṣẹ́, kí o tó pín in. Fi ránṣẹ́ láàárín ọjọ́ kan."
          ],
          steps: ["Kọ ètò ìpàdé kúkúrú pẹ̀lú àkókò.", "Kọ àkọsílẹ̀ tàbí lo àkọsílẹ̀ AI tí a fọwọ́ sí, pẹ̀lú gbogbo ènìyàn tí a ti sọ fún.", "Ní kí AI yọ àwọn ìpinnu, iṣẹ́ tí a ó ṣe àti ìbéèrè tí kò tíì ní ìdáhùn jáde.", "Ṣàyẹ̀wò ẹni tó ni iṣẹ́ àti ọjọ́; yọ ìsọfúnni àṣírí kúrò.", "Fi àkọsílẹ̀ iṣẹ́ ránṣẹ́ láàárín ọjọ́ kan."],
          words: [["Ètò ìpàdé (agenda)", "àkọsílẹ̀ àwọn kókó ọ̀rọ̀ ìpàdé, ní ìtẹ̀léra."], ["Iṣẹ́ tí a ó ṣe (action item)", "iṣẹ́ láti inú ìpàdé tí ó ní ẹni tó ni ín àti ọjọ́ ìparí."]],
          slides: [
            { title: "Parí pẹ̀lú iṣẹ́", bullets: ["Iṣẹ́ kọ̀ọ̀kan ní ẹni tó ni ín", "Iṣẹ́ kọ̀ọ̀kan ní ọjọ́ ìparí"] },
            { title: "Jẹ́ kí AI yọ ọ́ jáde", bullets: ["Ìpinnu tí a ṣe", "Iṣẹ́ tí a ó ṣe", "Ìbéèrè tí kò tíì ní ìdáhùn"] },
            { title: "Kí o tó fi ránṣẹ́", bullets: ["Ṣàyẹ̀wò ẹni tó ni iṣẹ́ àti ọjọ́", "Yọ ìsọfúnni àṣírí kúrò", "Fi ránṣẹ́ láàárín ọjọ́ kan"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ ní ìpàdé rẹ tó ń bọ̀, tàbí kọ àkọsílẹ̀ láti inú ìpàdé kan láìpẹ́ yìí. Lo AI láti yọ ìpinnu àti iṣẹ́ tí a ó ṣe jáde pẹ̀lú ẹni tó ni wọ́n àti ọjọ́, ṣàyẹ̀wò wọn, kí o sì kọ ọ̀rọ̀ tí o máa fi ránṣẹ́.",
          youCanNow: "yí àkọsílẹ̀ ìpàdé padà sí iṣẹ́ tí a ó ṣe tí a ti ṣàyẹ̀wò, pẹ̀lú ẹni tó ni wọ́n àti ọjọ́ ìparí.",
          quickCheck: [
            { objective: "O3", q: "Kí ló ń jẹ́ kí ìpàdé parí pẹ̀lú àtẹ̀lé gidi?", options: ["Ìjíròrò gígùn", "Gbogbo ènìyàn tí ń mi orí", "Ìpàdé míì lọ́jọ́ kejì", "Iṣẹ́ tí a ó ṣe, tí ọ̀kọ̀ọ̀kan ní ẹni tó ni ín àti ọjọ́ ìparí"], answer: 3, why: "Iṣẹ́ tí ó ní ẹni tó ni ín àti ọjọ́ ń yí ọ̀rọ̀ padà sí iṣẹ́." },
            { objective: "O3", q: "Àkọsílẹ̀ ìpàdé rẹ mẹ́nu kan ìsinmi àìsàn òṣìṣẹ́ kan. Kí ni o máa ṣe kí o tó pín àkópọ̀ AI?", options: ["Pín in bí ó ṣe wà", "Yọ ìsọfúnni ìlera àṣírí náà kúrò", "Fi ìsọfúnni púpọ̀ sí i kún un", "Lẹ̀ ẹ́ mọ́ pátákó ìkéde"], answer: 1, why: "Yọ ìsọfúnni àṣírí, bí ìlera tàbí owó oṣù, kúrò kí o tó pín àkọsílẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣe ètò iṣẹ́",
        questions: [
          { objective: "O1", q: "Nígbà tí o bá ní kí AI ṣètò ọ̀sẹ̀ rẹ, kí ni o yẹ kí o sọ fún un?", options: ["Ọ̀rọ̀ aṣínà báńkì rẹ", "Kò sí nǹkan; yóò ṣèrò", "Wákàtí tí o ní lóòótọ́ àti àwọn ọjọ́ tí ọwọ́ rẹ dí", "Àdírẹ́sì ilé àwọn òṣìṣẹ́ rẹ"], answer: 2, why: "Ààlà gidi ń jẹ́ kí ètò náà ṣeé ṣe." },
          { objective: "O2", q: "Kí ni SOP?", options: ["Ìgbésẹ̀ tí a kọ sílẹ̀ fún iṣẹ́ tí a máa ń tún ṣe", "Irú owó-orí owó oṣù kan", "Ìfiránṣẹ́ lórí ìkànnì àjọlò", "Ìròyìn títà ọjà"], answer: 0, why: "Ìlànà iṣẹ́ ń jẹ́ kí a lè tún iṣẹ́ ṣe bákan náà." },
          { objective: "O2", q: "Olùyọ̀ǹda tuntun kan dúró láti ronú ní ìgbésẹ̀ 4 SOP rẹ. Kí ni èyí sọ fún ọ?", options: ["Olùyọ̀ǹda náà kò gbọ́n", "SOP kì í ṣiṣẹ́ láé", "Pa SOP náà rẹ́", "Ìgbésẹ̀ 4 nílò láti yé dáadáa sí i"], answer: 3, why: "Ìdádúró ń fi ibi tí ìgbésẹ̀ kò ti yé hàn." },
          { objective: "O3", q: "Gbogbo iṣẹ́ tí a ó ṣe gbọ́dọ̀ ní:", options: ["Ìtàn gígùn", "Ẹni tó ni ín àti ọjọ́ ìparí", "Kóòdù àṣírí", "Kò sí àlàyé kankan"], answer: 1, why: "Ẹni tó ni iṣẹ́ àti ọjọ́ ń jẹ́ kí iṣẹ́ ṣẹlẹ̀." },
          { objective: "O3", q: "AI kọ pé \"Maria máa parí ìṣúná (budget) náà ní ọjọ́ Ẹtì\" ṣùgbọ́n kò sí ẹni tó fohùn ṣọ̀kan lé e. Kí ni o máa ṣe?", options: ["Fi ránṣẹ́ bẹ́ẹ̀", "Tún un ṣe kí o tó fi ránṣẹ́", "Fi lé Maria lọ́wọ́ láìbi í léèrè", "Pa gbogbo àkọsílẹ̀ rẹ́"], answer: 1, why: "AI lè ṣèrò; ṣàyẹ̀wò ẹni tó ni iṣẹ́ àti ọjọ́." }
        ]
      }
    },
    {
      name: "Orí 2: Mímú kí iṣẹ́ máa lọ dáadáa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe ètò àkókò iṣẹ́ fún òṣìṣẹ́ tàbí olùyọ̀ǹda",
          minutes: 5,
          goal: "Lo AI àti spreadsheet láti ṣe ètò àkókò iṣẹ́ ọ̀sẹ̀ kan tó tọ́ tí ó bo gbogbo ìyípo iṣẹ́.",
          text: [
            "Ṣíṣe ètò àkókò iṣẹ́ dà bí àdìtú: ta ló wà, ìyípo iṣẹ́ wo ló nílò ènìyàn mélòó, ta ló sì ní ọgbọ́n wo. AI lè kọ àkọ́kọ́ rẹ̀ láàárín ìṣẹ́jú-àáyá díẹ̀.",
            "Fún un ní àwọn òfin láìsí ìsọfúnni àṣírí: \"Ṣe tábìlì ètò àkókò iṣẹ́ ọ̀sẹ̀ kan. Ìyípo iṣẹ́: Mon-Fri 8-12 àti 12-4, ènìyàn méjì ní ọ̀kọ̀ọ̀kan. Saturday 9-1, ènìyàn mẹ́ta. Àkókò tí wọ́n wà: Ẹni A ní ọjọ́ iṣẹ́ nìkan, Ẹni B kì í ṣe ọjọ́ Monday... Kò sí ẹni tí ó gbọ́dọ̀ kọjá wákàtí 20. Ó kéré tán ẹnì kan tí ó ní ẹ̀kọ́ ìmójútó oúnjẹ (food-handler) ní ìyípo iṣẹ́ kọ̀ọ̀kan.\"",
            "Ṣàyẹ̀wò àkọ́kọ́ náà pẹ̀lú àwọn òfin rẹ àti òfin iṣẹ́ tí ó kàn ọ́, bí ìsinmi àti wákàtí iṣẹ́ àwọn ọmọdé; ẹ̀ka ìjọba tó ń bójú tó iṣẹ́ ní ìpínlẹ̀ rẹ (state labor department) ní àkọsílẹ̀ wọn. Fi ètò ìkẹyìn sínú spreadsheet àjọlò kí gbogbo ènìyàn lè rí àyípadà."
          ],
          steps: ["Kọ àwọn ìyípo iṣẹ́ àti iye ènìyàn tí ọ̀kọ̀ọ̀kan nílò.", "Kọ àkókò tí ẹnì kọ̀ọ̀kan wà, pẹ̀lú orúkọ àkọ́kọ́ tàbí àmì.", "Kọ àwọn òfin: wákàtí tó pọ̀ jù, ọgbọ́n tí a nílò.", "Ní kí AI ṣe tábìlì ètò àkókò iṣẹ́.", "Ṣàyẹ̀wò àwọn òfin àti òfin iṣẹ́, lẹ́yìn náà pín in nínú spreadsheet."],
          words: [["Ìyípo iṣẹ́ (shift)", "àkókò iṣẹ́ kan tí a ti yàn."], ["Àkókò tí ènìyàn wà (availability)", "àwọn àkókò tí ẹnì kan lè ṣiṣẹ́ tàbí yọ̀ǹda ara rẹ̀."]],
          slides: [
            { title: "Ètò àkókò iṣẹ́ dà bí àdìtú", bullets: ["Àkókò tí ènìyàn wà, ìyípo iṣẹ́, ọgbọ́n"] },
            { title: "Fún AI ní àwọn òfin", bullets: ["Ìyípo iṣẹ́ àti iye ènìyàn tí a nílò", "Àkókò tí wọ́n wà pẹ̀lú orúkọ àkọ́kọ́ tàbí àmì", "Wákàtí tó pọ̀ jù àti ọgbọ́n tí a nílò"] },
            { title: "Ṣàyẹ̀wò kí o sì pín in", bullets: ["Bá àwọn òfin rẹ mu", "Ṣàyẹ̀wò òfin iṣẹ́ ìpínlẹ̀: ìsinmi, ọmọdé", "Pín in nínú spreadsheet"] }
          ],
          tryIt: "Kọ àwọn ìyípo iṣẹ́, àkókò tí wọ́n wà àti òfin fún ẹgbẹ́ gidi tàbí ti àṣeṣe tí ó ní ó kéré tán ènìyàn mẹ́rin. Ní kí AI kọ ètò àkókò iṣẹ́ ọ̀sẹ̀ kan, ṣàyẹ̀wò gbogbo òfin, kí o sì tún ìṣòro èyíkéyìí ṣe.",
          youCanNow: "ṣe ètò àkókò iṣẹ́ ọ̀sẹ̀ tó tọ́ pẹ̀lú ìrànlọ́wọ́ AI, kí o sì ṣàyẹ̀wò rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni o yẹ kí o fún AI nígbà tí o bá ń béèrè ètò àkókò iṣẹ́?", options: ["Àdírẹ́sì ilé àti fóònù gbogbo ènìyàn", "Ọ̀rọ̀ náà \"ètò àkókò\" nìkan", "Ìyípo iṣẹ́, orúkọ àkọ́kọ́ tàbí àmì, àkókò tí wọ́n wà àti òfin", "Iye owó oṣù òṣìṣẹ́"], answer: 2, why: "AI nílò ìyípo iṣẹ́, àkókò tí wọ́n wà àti òfin, ṣùgbọ́n kò nílò ìsọfúnni àṣírí." },
            { objective: "O4", q: "Ètò AI fi ọjọ́ Saturday sílẹ̀ láìsí ẹni tí ó ní ẹ̀kọ́ ìmójútó oúnjẹ. Kí ni o máa ṣe?", options: ["Yí i padà kí ìyípo iṣẹ́ kọ̀ọ̀kan ní ẹni tí ó ti kọ́ ẹ̀kọ́ náà", "Fi sílẹ̀ bẹ́ẹ̀; ọjọ́ kan ṣoṣo ni", "Fagi lé ọjọ́ Saturday", "Ní kí òṣìṣẹ́ tí kò kọ́ ẹ̀kọ́ náà ṣèrò"], answer: 0, why: "Ṣàyẹ̀wò àkọ́kọ́ náà pẹ̀lú gbogbo òfin, títí kan ọgbọ́n tí a nílò." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Títọpinpin ohun èlò àti àtúnrà",
          minutes: 5,
          goal: "Ṣe ìwé ohun èlò pẹ̀lú ààlà àtúnrà kí ohun èlò má bàa tán mọ́ ọ lọ́wọ́.",
          text: [
            "Tí ife, ìbọ̀wọ́, ìyẹ̀fun tàbí ìlédìí ọmọ bá tán, iṣẹ́ máa dúró. Ìwé ohun èlò tó rọrùn ń dènà èyí. Àwọn òpó (columns): ohun èlò, ìwọ̀n, iye tó wà lọ́wọ́, iye tí a ń lò lọ́sẹ̀, ààlà àtúnrà, iye tí a ó tún rà àti olùpèsè.",
            "Ààlà àtúnrà ni iye tí ó ń sọ fún ọ pé kí o rà á báyìí. Òfin tó rọrùn: iye tí a ń lò lọ́sẹ̀ lọ́nà iye ọ̀sẹ̀ tí ìfijíṣẹ́ ń gbà, pẹ̀lú díẹ̀ sí i. Tí o bá ń lo àpótí 10 lọ́sẹ̀ tí ìfijíṣẹ́ sì ń gba ọ̀sẹ̀ 1, tún rà nígbà tí ó bá kù nǹkan bí àpótí 12.",
            "Ní kí AI kọ àgbékalẹ̀ (formula) tí ó ń sàmì sí ohun tí ó yẹ ká tún rà: \"Nínú Google Sheets, kọ formula tí ó ń fi REORDER hàn nígbà tí iye tó wà lọ́wọ́ bá dọ́gba pẹ̀lú ààlà àtúnrà tàbí tí ó kéré sí i.\" Ka ohun èlò ní ọjọ́ kan náà lọ́sọ̀ọ̀sẹ̀, kí o sì ṣe àtúnṣe ìwé náà."
          ],
          steps: ["Kọ àwọn ohun èlò pẹ̀lú ìwọ̀n àti olùpèsè.", "Ṣírò iye tí a ń lò lọ́sẹ̀ fún ọ̀kọ̀ọ̀kan.", "Ṣètò ààlà àtúnrà: iye tí a ń lò lọ́sẹ̀ x ọ̀sẹ̀ ìfijíṣẹ́ + díẹ̀ sí i.", "Ní kí AI kọ formula tí ó ń fi REORDER hàn.", "Ka á lọ́sọ̀ọ̀sẹ̀ ní ọjọ́ kan náà."],
          words: [["Ọjà tó wà lọ́wọ́ (inventory)", "ohun èlò tàbí ọjà tí o ní lọ́wọ́."], ["Ààlà àtúnrà (reorder point)", "iye tí ó ń sọ fún ọ pé àkókò ti tó láti rà sí i."]],
          slides: [
            { title: "Àwọn òpó ìwé ohun èlò", bullets: ["Ohun èlò, ìwọ̀n, iye tó wà lọ́wọ́", "Iye tí a ń lò lọ́sẹ̀, ààlà àtúnrà", "Iye tí a ó tún rà, olùpèsè"] },
            { title: "Ààlà àtúnrà", bullets: ["Iye lọ́sẹ̀ x ọ̀sẹ̀ ìfijíṣẹ́ + díẹ̀ sí i", "10 lọ́sẹ̀, ìfijíṣẹ́ ọ̀sẹ̀ 1: nǹkan bí 12"] },
            { title: "Jẹ́ kí ìwé náà kìlọ̀ fún ọ", bullets: ["Formula ń fi REORDER hàn", "Ka á ní ọjọ́ kan náà lọ́sọ̀ọ̀sẹ̀"] }
          ],
          tryIt: "Ṣe ìwé ohun èlò tí ó ní ó kéré tán ohun èlò mẹ́jọ, ṣètò ààlà àtúnrà, kí o sì fi formula tí AI kọ kún un tí ó ń sàmì sí ohun tí ó yẹ ká tún rà.",
          youCanNow: "tọpinpin ohun èlò pẹ̀lú ààlà àtúnrà àti àmì àtúnrà aládàáṣe.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ààlà àtúnrà?", options: ["Àdírẹ́sì olùpèsè", "Iye tó wà lọ́wọ́ tí ó ń sọ fún ọ pé kí o rà á báyìí", "Iye owó ohun èlò kan", "Ọjọ́ tí ṣọ́ọ̀bù ń ṣí"], answer: 1, why: "Ààlà àtúnrà ni iye tí ó ń sọ fún ọ pé kí o rà sí i." },
            { objective: "O5", q: "O ń lo àpò ìbọ̀wọ́ 20 lọ́sẹ̀, ìfijíṣẹ́ sì ń gba ọ̀sẹ̀ 1. Nígbà wo ni ó yẹ kí o tún rà?", options: ["Nígbà tí o bá ní àpò 0", "Nígbà tí o bá ní àpò 2", "Nígbà tí o bá ní àpò 100", "Nígbà tí o bá ní nǹkan bí àpò 22 sí 24"], answer: 3, why: "Iye lọ́sẹ̀ lọ́nà ọ̀sẹ̀ ìfijíṣẹ́, pẹ̀lú díẹ̀ sí i, jẹ́ nǹkan bí àpò 22 sí 24." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣàyẹ̀wò ọ̀sẹ̀ àti ṣíṣe àtúnṣe",
          minutes: 5,
          goal: "Kọ àyẹ̀wò kúkúrú ní òpin ọ̀sẹ̀, kí o sì yan àtúnṣe kan.",
          text: [
            "Àyẹ̀wò ìṣẹ́jú 15 ní òpin ọ̀sẹ̀ kọ̀ọ̀kan ń dènà ìṣòro kékeré láti dàgbà. Wo ohun tí a ṣe, ohun tí a kò ṣe, ohun tí ó lọ ní àṣìṣe, àti ohun tí ó yẹ ká yí padà.",
            "Fún AI ní ètò rẹ, àwọn iṣẹ́ tí o ti parí àti àkọsílẹ̀ díẹ̀, lẹ́yìn náà béèrè: \"Kọ àyẹ̀wò iṣẹ́ ọ̀sẹ̀ kúkúrú: àṣeyọrí, ohun tí a kò ṣe, ìṣòro, àti àtúnṣe kan fún ọ̀sẹ̀ tó ń bọ̀.\" Ṣàtúnṣe rẹ̀ kí ó jẹ́ òótọ́, kí ó sì tọ́ sí ẹgbẹ́ rẹ.",
            "Yan àtúnṣe kan ṣoṣo lọ́sẹ̀, bí SOP tuntun, àtúnṣe ètò àkókò iṣẹ́ tàbí àyípadà nínú àtúnrà. Àtúnṣe kékeré lọ́sọ̀ọ̀sẹ̀ máa ń kó jọ di iṣẹ́ tó ń lọ dáadáa jù láàárín oṣù díẹ̀."
          ],
          steps: ["Kó ètò ọ̀sẹ̀ rẹ, iṣẹ́ tí a ó ṣe àti àkọsílẹ̀ rẹ jọ.", "Ní kí AI kọ àyẹ̀wò kúkúrú: àṣeyọrí, ohun tí a kò ṣe, ìṣòro, àtúnṣe kan.", "Ṣàtúnṣe rẹ̀ kí ó jẹ́ òótọ́ kí ó sì tọ́.", "Yan àtúnṣe kan, kí o sì fi kún ètò ọ̀sẹ̀ tó ń bọ̀."],
          words: [["Àyẹ̀wò (review)", "wíwo ẹ̀yìn láti kọ́ ohun tí ó ṣiṣẹ́ àti ohun tí kò ṣiṣẹ́."], ["Àtúnṣe tí kò dúró (continuous improvement)", "ṣíṣe àyípadà kékeré déédéé láti máa dára sí i bí àkókò ti ń lọ."]],
          slides: [
            { title: "Ìṣẹ́jú 15 lọ́sẹ̀", bullets: ["Ohun tí a ṣe", "Ohun tí a kò ṣe", "Ohun tí ó lọ ní àṣìṣe"] },
            { title: "AI kọ àkọ́kọ́ àyẹ̀wò", bullets: ["Àṣeyọrí, ohun tí a kò ṣe, ìṣòro", "Àtúnṣe kan", "Ìwọ ṣàtúnṣe rẹ̀ kí ó jẹ́ òótọ́ kí ó sì tọ́"] },
            { title: "Àtúnṣe kan lọ́sẹ̀", bullets: ["SOP tuntun, àtúnṣe ètò àkókò tàbí àyípadà àtúnrà", "Àtúnṣe kékeré máa ń kó jọ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ àyẹ̀wò òpin ọ̀sẹ̀ rẹ pẹ̀lú ìrànlọ́wọ́ AI, kí o sì yan àtúnṣe kan. Pẹ̀lú ètò ọ̀sẹ̀ rẹ, SOP, iṣẹ́ tí a ó ṣe, ètò àkókò iṣẹ́ àti ìwé ohun èlò, èyí parí àpò irinṣẹ́ iṣẹ́ ọ̀sẹ̀ rẹ.",
          youCanNow: "darí iṣẹ́ ọ̀sẹ̀ kan pẹ̀lú ìrànlọ́wọ́ AI, kí o sì máa mú un dára sí i.",
          quickCheck: [
            { objective: "O6", q: "Kí ni àyẹ̀wò òpin ọ̀sẹ̀ máa ń sọ nípa rẹ̀?", options: ["Àṣeyọrí, ohun tí a kò ṣe, ìṣòro àti àtúnṣe kan", "Ohun tí ó lọ ní àṣìṣe nìkan", "Àṣìṣe gbogbo òṣìṣẹ́", "Ìṣúná ọdún tó ń bọ̀"], answer: 0, why: "Àyẹ̀wò kúkúrú máa ń sọ nípa àṣeyọrí, ohun tí a kò ṣe, ìṣòro àti àtúnṣe kan." },
            { objective: "O6", q: "Àyẹ̀wò AI dá olùyọ̀ǹda kan lẹ́bi fún ìfijíṣẹ́ tí ó pẹ́, ṣùgbọ́n ẹ̀bi olùpèsè ni. Kí ni o máa ṣe?", options: ["Fi ránṣẹ́ bí ó ṣe wà", "Yan àtúnṣe márùn-ún dípò", "Ṣàtúnṣe rẹ̀ kí ó jẹ́ òótọ́ kí ó sì tọ́ sí ẹgbẹ́", "Fo àyẹ̀wò ọ̀sẹ̀ yìí"], answer: 2, why: "Ṣàtúnṣe àkọ́kọ́ AI kí ó jẹ́ òótọ́ kí ó sì tọ́ kí o tó pín in." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Mímú kí iṣẹ́ máa lọ dáadáa",
        questions: [
          { objective: "O4", q: "Nígbà tí o bá ń fún AI ní ìsọfúnni ètò àkókò iṣẹ́, kí ni o yẹ kí o lò fún àwọn ènìyàn?", options: ["Nọ́mbà Social Security wọn lódindi", "Àdírẹ́sì ilé", "Àkọsílẹ̀ ìlera", "Orúkọ àkọ́kọ́ tàbí àmì, láìsí ìsọfúnni àṣírí"], answer: 3, why: "Ètò àkókò iṣẹ́ nílò àkókò tí ènìyàn wà, kì í ṣe ìsọfúnni àṣírí." },
          { objective: "O4", q: "Níbo ni o ti lè ṣàyẹ̀wò òfin nípa ìsinmi àti wákàtí iṣẹ́ àwọn ọmọdé?", options: ["Ẹ̀ka ìjọba tó ń bójú tó iṣẹ́ ní ìpínlẹ̀ rẹ", "Bùlọ́ọ̀gù èyíkéyìí", "Ìjíròrò AI nìkan", "Ọ̀dọ̀ olùdíje rẹ"], answer: 0, why: "Òfin iṣẹ́ ń wá láti ọ̀dọ̀ àwọn àjọ ìjọba tó ń bójú tó iṣẹ́." },
          { objective: "O5", q: "O ń lo àpótí 10 lọ́sẹ̀, ìfijíṣẹ́ sì ń gba ọ̀sẹ̀ 1. Ààlà àtúnrà tó bọ́gbọ́n mu jẹ́ nǹkan bí:", options: ["Àpótí 0", "Àpótí 1", "Àpótí 12", "Àpótí 100"], answer: 2, why: "Iye lọ́sẹ̀ x ọ̀sẹ̀ ìfijíṣẹ́, pẹ̀lú díẹ̀ sí i." },
          { objective: "O6", q: "Ìgbà mélòó ni àyẹ̀wò ọ̀sẹ̀ máa ń gbà nínú ẹ̀kọ́ yìí?", options: ["Odindi ọjọ́ kan", "Wákàtí mẹ́ta", "Kò gba àkókò; fò ó", "Nǹkan bí ìṣẹ́jú 15"], answer: 3, why: "Àyẹ̀wò ọ̀sẹ̀ kúkúrú ń jẹ́ kí ìṣòro wà ní kékeré." },
          { objective: "O6", q: "Àtúnṣe mélòó ni o yẹ kí o yàn lọ́sọ̀ọ̀sẹ̀?", options: ["Ogún", "Kò sí", "Ọ̀kan", "Gbogbo rẹ̀ lẹ́ẹ̀kan náà"], answer: 2, why: "Àtúnṣe kan lọ́sẹ̀ ṣeé ṣe, ó sì máa ń kó jọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ìṣesí Iṣẹ́ àti Ìṣàkóso Ojoojúmọ́",
    questions: [
      { objective: "O1", q: "Ìṣàkóso iṣẹ́ ojoojúmọ́ (operations) túmọ̀ sí:", options: ["Iṣẹ́ abẹ nìkan", "Iṣẹ́ ojoojúmọ́ tí ń jẹ́ kí àjọ kan máa lọ", "Títa ọjà nìkan", "Ìpolówó ọjà nìkan"], answer: 1, why: "Ètò àkókò iṣẹ́, ohun èlò, ìlànà iṣẹ́ àti àtẹ̀lé." },
      { objective: "O1", q: "Nígbà tí AI bá tò àkọsílẹ̀ iṣẹ́ rẹ, ẹgbẹ́ wo ni \"ẹlòmíì lè ṣe é\"?", options: ["Iṣẹ́ tí ẹlòmíì lè ṣe", "Iṣẹ́ tí o gbọ́dọ̀ ṣe lónìí", "Iṣẹ́ tí a ó pa rẹ́", "Iṣẹ́ tí AI máa dá ṣe"], answer: 0, why: "\"Ẹlòmíì lè ṣe é\" túmọ̀ sí fífi iṣẹ́ lé ẹlòmíì lọ́wọ́ (delegate)." },
      { objective: "O1", q: "Ta ló ní ọ̀rọ̀ ìkẹyìn lórí ètò ọ̀sẹ̀ rẹ?", options: ["AI", "Kò sí ẹnì kankan", "Ìwọ", "Olùpèsè rẹ"], answer: 2, why: "Ìwọ ló ń tún ètò náà ṣe, ìwọ ló sì ni ín." },
      { objective: "O2", q: "SOP wúlò nítorí pé:", options: ["Iṣẹ́ ń lọ bákan náà, àwọn tuntun sì ń kọ́ṣẹ́ kíákíá", "Ó rọ́pò gbogbo òṣìṣẹ́", "A nílò rẹ̀ fún gbogbo ímeèlì", "Ó ń mú kí iṣẹ́ lọ́ra"], answer: 0, why: "Ìyẹn ni èrèdí SOP." },
      { objective: "O2", q: "Ọ̀nà tó yára jù láti bẹ̀rẹ̀ SOP ni láti:", options: ["Ṣe ẹ̀dà SOP ilé-iṣẹ́ míì", "Dúró de olùgbaninímọ̀ràn", "Má kọ ọ́ rárá", "Ṣàlàyé iṣẹ́ náà ní ọ̀rọ̀ ara rẹ, lẹ́yìn náà jẹ́ kí AI ṣètò rẹ̀"], answer: 3, why: "Ìmọ̀ rẹ pẹ̀lú ètò AI máa ń yára." },
      { objective: "O2", q: "SOP tó dára ní:", options: ["Àkọlé nìkan", "Èrèdí, ohun èlò, ìgbésẹ̀ oní-nọ́mbà, ìkìlọ̀ ààbò àti àkọsílẹ̀ àyẹ̀wò", "Owó oṣù òṣìṣẹ́", "Nọ́mbà fóònù oníbàárà"], answer: 1, why: "Àwọn apá yẹn ló ń jẹ́ kí ó pé." },
      { objective: "O2", q: "Báwo ni o ṣe ń dán SOP wò?", options: ["Kà á lẹ́ẹ̀kan fúnra rẹ", "Ní kí ẹni tuntun tẹ̀lé e nígbà tí o ń wò ó", "Béèrè lọ́wọ́ AI bóyá ó dára", "Má dán an wò"], answer: 1, why: "Ẹni tuntun ń fi ìgbésẹ̀ tí kò yé hàn." },
      { objective: "O3", q: "Ètò ìpàdé (agenda) ni:", options: ["Àkọsílẹ̀ ìpanu ìpàdé", "Fọ́ọ̀mù owó oṣù", "Irú SOP kan", "Àkọsílẹ̀ àwọn kókó ọ̀rọ̀ ìpàdé, ní ìtẹ̀léra"], answer: 3, why: "Ètò ìpàdé ń jẹ́ kí ìpàdé dúró lórí kókó." },
      { objective: "O3", q: "Kí o tó lo àkọsílẹ̀ ìpàdé AI, o yẹ kí o:", options: ["Rí i dájú pé a gbà á láàyè, àti pé a ti sọ fún gbogbo ènìyàn", "Gbà á sílẹ̀ ní ìkọ̀kọ̀", "Pín ìsọfúnni owó oṣù òṣìṣẹ́", "Fo ètò ìpàdé"], answer: 0, why: "Ó yẹ kí àwọn ènìyàn mọ̀ nígbà tí a bá ń gba ìpàdé sílẹ̀ tàbí kọ ọ́ sílẹ̀." },
      { objective: "O3", q: "Kí o tó fi àkọsílẹ̀ ìpàdé tí AI kọ ránṣẹ́, yọ:", options: ["Gbogbo iṣẹ́ tí a ó ṣe", "Ọjọ́ ìpàdé", "Ìsọfúnni àṣírí bí ìlera tàbí owó oṣù òṣìṣẹ́", "Àwọn ìpinnu"], answer: 2, why: "Kò yẹ kí a pín ìsọfúnni àṣírí káàkiri." },
      { objective: "O3", q: "Ìgbà wo ni ó yẹ kí a fi iṣẹ́ tí a ó ṣe ránṣẹ́?", options: ["Oṣù kan lẹ́yìn", "Láéláé", "Tí wọ́n bá béèrè nìkan", "Láàárín ọjọ́ kan"], answer: 3, why: "Àtẹ̀lé kíákíá ń jẹ́ kí iṣẹ́ máa tẹ̀síwájú." },
      { objective: "O4", q: "Ìyípo iṣẹ́ (shift) ni:", options: ["Bọ́tìnnì kan lórí kíbọ́ọ̀dù nìkan", "Irú ohun èlò kan", "Àkókò iṣẹ́ kan tí a ti yàn", "Ìpàdé kan"], answer: 2, why: "Ìyípo iṣẹ́ ni a fi ń ṣe ètò àkókò iṣẹ́." },
      { objective: "O4", q: "Àkọ́kọ́ ètò AI fún ẹnì kan ní wákàtí 30, ṣùgbọ́n ààlà rẹ jẹ́ 20. O yẹ kí o:", options: ["Fi sílẹ̀ bẹ́ẹ̀", "Tún ètò náà ṣe kí ó tẹ̀lé òfin rẹ", "Ṣàìka òfin náà sí", "Yọ ẹni náà kúrò"], answer: 1, why: "Máa ṣàyẹ̀wò àkọ́kọ́ AI pẹ̀lú àwọn òfin rẹ nígbà gbogbo." },
      { objective: "O4", q: "Kí ló dé tí a fi ń pín ètò ìkẹyìn nínú spreadsheet?", options: ["Gbogbo ènìyàn ń rí àyípadà tuntun", "Láti fi pamọ́", "Òfin ní kí a lo spreadsheet", "Kí ẹnikẹ́ni má lè rí i"], answer: 0, why: "Ìwé àjọlò ń jẹ́ kí gbogbo ènìyàn mọ ohun tuntun." },
      { objective: "O5", q: "Ọjà tó wà lọ́wọ́ (inventory) túmọ̀ sí:", options: ["Àkọsílẹ̀ òṣìṣẹ́", "Àkọsílẹ̀ ìpàdé", "Ohun èlò tàbí ọjà tó wà lọ́wọ́", "Èrò àwọn oníbàárà"], answer: 2, why: "Inventory ni ohun tí o ní lọ́wọ́." },
      { objective: "O5", q: "Ààlà àtúnrà ń sọ fún ọ:", options: ["Ìgbà tí ó tó láti rà sí i", "Iye owó ohun èlò kan", "Ẹni tí olùpèsè jẹ́", "Bí a ṣe ń sè é"], answer: 0, why: "Ó ń jẹ́ kí a ṣe ìbéèrè ọjà tuntun." },
      { objective: "O5", q: "Formula tí ó ń fi REORDER hàn ń ràn ọ́ lọ́wọ́ nípa:", options: ["Rírà ohun èlò pẹ̀lú káàdì rẹ fúnra rẹ̀", "Pípa ìwé náà rẹ́", "Yíyí olùpèsè padà", "Sísàmì sí ohun tí ó ti kéré fúnra rẹ̀"], answer: 3, why: "Ìwé náà ń kìlọ̀ fún ọ nígbà tí ọjà bá ti kéré." },
      { objective: "O5", q: "Ìgbà mélòó ni o yẹ kí o ka ohun èlò?", options: ["Lẹ́ẹ̀kan lọ́dún", "Lọ́sọ̀ọ̀sẹ̀ ní ọjọ́ kan náà", "Láéláé", "Nígbà tí ó bá tán nìkan"], answer: 1, why: "Kíkà déédéé ń jẹ́ kí ìwé náà péye." },
      { objective: "O6", q: "Àyẹ̀wò ọ̀sẹ̀ máa ń sọ nípa:", options: ["Àṣeyọrí nìkan", "Àṣeyọrí, ohun tí a kò ṣe, ìṣòro àti àtúnṣe kan", "Ẹ̀bi nìkan", "Kò sí nǹkan ní kíkọ"], answer: 1, why: "Àyẹ̀wò tó dọ́gba máa ń yọrí sí àtúnṣe." },
      { objective: "O6", q: "Kí ni à ń pè ní ṣíṣe àyípadà kékeré déédéé láti máa dára sí i?", options: ["Fífi iṣẹ́ lé ẹlòmíì lọ́wọ́", "Ọjà tó wà lọ́wọ́", "Ṣíṣe ètò àkókò iṣẹ́", "Àtúnṣe tí kò dúró (continuous improvement)"], answer: 3, why: "Àtúnṣe kékeré déédéé máa ń kó jọ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [1, 2, 3, 6, 8, 9, 12, 15, 17, 18]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ètò ọ̀sẹ̀", objective: "O1", notYet: "A kò tò àwọn iṣẹ́, tàbí ètò náà kò ka wákàtí gidi tí ó wà sí.", meets: "A tò àwọn iṣẹ́ sí dandan, ó yẹ, ó lè dúró àti ẹlòmíì lè ṣe é, pẹ̀lú ètò ọjọ́-dé-ọjọ́ tí ó bá wákàtí gidi mu.", exceeds: "A ya àkókò sọ́tọ̀ lórí kàlẹ́ńdà fún iṣẹ́ mẹ́ta tó ṣe pàtàkì jù, pẹ̀lú àyè fún ohun àìròtẹ́lẹ̀." },
      { name: "Ìlànà iṣẹ́ (SOP)", objective: "O2", notYet: "Ìgbésẹ̀ kò ṣe kedere tàbí kò tò lẹ́sẹẹsẹ, tàbí kò sí àkọsílẹ̀ àyẹ̀wò.", meets: "Àkọlé, èrèdí, ohun èlò, ìgbésẹ̀ oní-nọ́mbà tí ọ̀kọ̀ọ̀kan ní ìṣe kan, ìkìlọ̀ ààbò, àkọsílẹ̀ àyẹ̀wò, ọjọ́ àti ẹni tó ni ín.", exceeds: "Ẹni tuntun dán an wò, a sì tún àwọn ìgbésẹ̀ tí kò yé ṣe." },
      { name: "Iṣẹ́ tí a ó ṣe láti ìpàdé", objective: "O3", notYet: "Iṣẹ́ tí a ó ṣe kò ní ẹni tó ni ín tàbí ọjọ́ ìparí.", meets: "Ìpinnu, iṣẹ́ tí a ó ṣe pẹ̀lú ẹni tó ni ín àti ọjọ́ tí a fohùn ṣọ̀kan lé, àti ìbéèrè tí kò tíì ní ìdáhùn, láìsí ìsọfúnni àṣírí.", exceeds: "A fi ránṣẹ́ láàárín ọjọ́ kan, a sì ṣàyẹ̀wò pé a ti tún ẹni tàbí ọjọ́ tí AI ṣèrò ṣe." },
      { name: "Ètò àkókò iṣẹ́", objective: "O4", notYet: "Ìyípo iṣẹ́ kan kò ní ẹni, tàbí a rú òfin kan.", meets: "Gbogbo ìyípo iṣẹ́ ní ẹni, a tẹ̀lé ààlà wákàtí àti ọgbọ́n tí a nílò, a sì pín in nínú spreadsheet.", exceeds: "Ó kọ àwọn òfin iṣẹ́ tí a ṣàyẹ̀wò lọ́dọ̀ ẹ̀ka ìjọba tó ń bójú tó iṣẹ́ ní ìpínlẹ̀." },
      { name: "Ìwé ohun èlò", objective: "O5", notYet: "Kò sí ààlà àtúnrà.", meets: "Gbogbo ohun èlò ní iye tí a ń lò lọ́sẹ̀, ààlà àtúnrà àti formula tí ó ń fi REORDER hàn.", exceeds: "Ó ní olùpèsè àti ọjọ́ kan pàtó lọ́sọ̀ọ̀sẹ̀ fún kíkà." },
      { name: "Àyẹ̀wò ọ̀sẹ̀", objective: "O6", notYet: "Kò sí àyẹ̀wò, tàbí a kò yan àtúnṣe kankan.", meets: "Àyẹ̀wò kúkúrú tó tọ́ nípa àṣeyọrí, ohun tí a kò ṣe àti ìṣòro, pẹ̀lú àtúnṣe kan.", exceeds: "Àtúnṣe náà ti wà nínú ètò ọ̀sẹ̀ tó ń bọ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn àjọ tí wọ́n ti kọ SOP mẹ́ta ó kéré tán, tí wọ́n sì ń lò wọ́n láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Ohun èlò pàtàkì tí ó tán dín kù láàárín ọjọ́ 60 lẹ́yìn ẹ̀kọ́ náà",
      "Àwọn tó ni iṣẹ́ àti alákòóso tí wọ́n ròyìn wákàtí tí wọ́n fi pamọ́ lọ́sọ̀ọ̀sẹ̀ lórí ètò àti ìṣètò iṣẹ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Kàlẹ́ńdà àti spreadsheet (Google Sheets tàbí Excel)",
      "Àkọsílẹ̀ iṣẹ́ gidi, iṣẹ́ kan tí a máa ń tún ṣe, àti àkọsílẹ̀ ohun èlò láti inú àjọ akẹ́kọ̀ọ́",
      "Nǹkan bí ìṣẹ́jú 60 fún ẹ̀kọ́ àti ìdánwò, pẹ̀lú àkókò láti ṣe àpò irinṣẹ́"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan; ẹ kọ formula àtúnrà lórí ojú-iboju àjọlò.",
      "Ní kí àwọn akẹ́kọ̀ọ́ pàṣípààrọ̀ SOP wọn, kí wọ́n sì tẹ̀lé ìgbésẹ̀ ara wọn láti rí àwọn tí kò yé.",
      "Rán àwọn akẹ́kọ̀ọ́ létí láti lo orúkọ àkọ́kọ́ tàbí àmì nìkan, kí wọ́n má sì fi ìsọfúnni ìlera tàbí owó oṣù òṣìṣẹ́ sínú AI láéláé.",
      "Darí àwọn akẹ́kọ̀ọ́ sí ẹ̀ka ìjọba tó ń bójú tó iṣẹ́ ní ìpínlẹ̀ wọn fún òfin ìsinmi àti wákàtí iṣẹ́ àwọn ọmọdé; má ṣe fúnni ní ìmọ̀ràn òfin.",
      "Fi rubric ṣe àmì fún àpò irinṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
