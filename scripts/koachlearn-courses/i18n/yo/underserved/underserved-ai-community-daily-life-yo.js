"use strict";

// Koach Learn course (Yoruba translation of underserved/underserved-ai-community-daily-life.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-community-daily-life-yo",
  lang: "yo",
  translationOf: "underserved-ai-community-daily-life",
  category: "Undeserved Community",
  name: "AI fún Àwùjọ àti Ìgbésí Ayé Ojoojúmọ́",
  skills: "Ṣíṣètò ọ̀sẹ̀ ẹbí, Ṣíṣe ètò oúnjẹ tí ó bá owó mu, Wíwá àti ṣíṣàyẹ̀wò ìrànlọ́wọ́ àdúgbò, Ṣíṣe ìpàdé àwùjọ, Kíkọ ọ̀rọ̀ tó yé sí ẹgbẹ́",
  outcome: "lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti ṣètò ìgbésí ayé ojoojúmọ́ àti iṣẹ́ àwùjọ: ṣètò ọ̀sẹ̀ ẹbí rẹ àti oúnjẹ tí ó bá owó rẹ mu, wá ìrànlọ́wọ́ àdúgbò kí o sì ṣàyẹ̀wò rẹ̀, kí o sì ṣètò ìpàdé àwùjọ kékeré pẹ̀lú ètò ìpàdé (agenda), ọ̀rọ̀ ìrántí àti àkọsílẹ̀ ibi ìrànlọ́wọ́.",
  about: [
    "Ìgbésí ayé máa ń kún fún iṣẹ́: àkókò iṣẹ́, gbígbé ọmọ láti ilé-ìwé, àdéhùn, ṣọ́ọ̀ṣì, eré ìdárayá, àti ríran àwọn aládùúgbò lọ́wọ́. Olùrànlọ́wọ́ AI ọ̀fẹ́ lè bá ọ gbé díẹ̀ lára ẹrù ìṣètò yìí.",
    "Ní Orí 1, o máa ṣètò ọ̀sẹ̀ ẹbí àti ètò oúnjẹ tí ó bá owó mu, o sì máa wá ìrànlọ́wọ́ àdúgbò nígbà tí owó bá há. Ní Orí 2, o máa lo AI láti kó àwùjọ rẹ jọ: ètò ìpàdé, ọ̀rọ̀ tó yé sí ẹgbẹ́, àti àkọsílẹ̀ àwọn ibi ìrànlọ́wọ́ àdúgbò.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣètò ìpàdé kékeré fún ẹgbẹ́ kan tí o wà nínú rẹ̀ (ẹgbẹ́ àdúgbò, ẹgbẹ́ òbí, ẹgbẹ́ ṣọ́ọ̀ṣì tàbí ẹgbẹ́ ayálégbé). Lo olùrànlọ́wọ́ AI láti kọ ètò ìpàdé ojú-ewé kan àti ọ̀rọ̀ ìrántí kúkúrú, lẹ́yìn náà ṣe àkọsílẹ̀ ibi ìrànlọ́wọ́ àdúgbò mẹ́ta (fún àpẹẹrẹ oúnjẹ, owó iná àti omi, àti ìrànlọ́wọ́ iṣẹ́) tí ìwọ fúnra rẹ ti ṣàyẹ̀wò lórí ojú-òpó wẹ́ẹ̀bù ìjọba tàbí nípasẹ̀ 211.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà ní àwùjọ tí kò ní ànító, tí wọ́n ń ṣe iṣẹ́, ojúṣe ẹbí àti ti àwùjọ pọ̀: àwọn òbí, àwọn olùtọ́jú, àti àwọn ọmọ ẹgbẹ́ tàbí olórí ẹgbẹ́ àdúgbò, ẹgbẹ́ òbí, ẹgbẹ́ ṣọ́ọ̀ṣì àti ẹgbẹ́ ayálégbé.",
    startingPoint: "Wọ́n ń lo fóònù fún ìpè, ọ̀rọ̀ (text) àti àwọn app kan, wọ́n sì ń ṣètò ọ̀sẹ̀ wọn lọ́kàn tàbí lórí ìwé. Díẹ̀ ló ti lo olùrànlọ́wọ́ AI láti ṣètò, ọ̀pọ̀ kò sì mọ̀ nípa 211.",
    gap: "Àwọn ẹbí tí ọwọ́ wọn dí máa ń pàdánù àdéhùn, wọ́n máa ń ná owó púpọ̀ jù lórí oúnjẹ, ó sì máa ń ṣòro fún wọn láti rí ìrànlọ́wọ́ àdúgbò; àwọn ẹgbẹ́ àwùjọ sì máa ń fi àkókò ṣòfò nínú ìpàdé tí kò ní ètò. Olùrànlọ́wọ́ AI ọ̀fẹ́ lè ṣe ìṣètò yìí, ṣùgbọ́n àwọn akẹ́kọ̀ọ́ nílò láti lò ó láìléwu, kí wọ́n sì ṣàyẹ̀wò ohunkóhun tí ó bá sọ nípa àwọn ètò ìrànlọ́wọ́ àdúgbò.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 5 sí 6)",
      "Ẹ̀rọ: smartphone tàbí kọ̀mpútà ilé-ìkàwé",
      "Owó: irinṣẹ́ ọ̀fẹ́ nìkan",
      "AI kò mọ iye owó ọjà lónìí, kò sì mọ àwọn ètò tí ó ṣí sílẹ̀; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò 211 àti àwọn orísun ìjọba",
      "Ìkọ̀kọ̀: orúkọ àkọ́kọ́ tàbí ipò nìkan, kò sì sí ìsọfúnni ìlera tàbí owó àwọn ẹlòmíì nínú prompt"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí wọn kò tíì lo olùrànlọ́wọ́ AI rí lè kọ́kọ́ ṣe \"Ìfihàn sí AI àti Agbára Ẹ̀rọ Ayélujára\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ní ọ̀sẹ̀ tí ó kún fún iṣẹ́, ilé-ìwé àti àdéhùn", action: "lo olùrànlọ́wọ́ AI láti yí àkọsílẹ̀ rẹ padà sí ètò ọjọ́ kọ̀ọ̀kan, kí o sì yanjú ìkọlura èyíkéyìí", standard: "ní lílo orúkọ àkọ́kọ́ tàbí ipò nìkan, tí ìwọ sì ń ṣe ìpinnu ìkẹyìn" },
    { id: "O2", condition: "Tí o bá mọ iye ènìyàn ilé rẹ, owó rẹ àti oúnjẹ tí o ní", action: "ṣe ètò oúnjẹ alẹ́ márùn-ún àti àkọsílẹ̀ ọjà pẹ̀lú olùrànlọ́wọ́ AI", standard: "kí o sì fi iye owó náà wé iye owó gidi ní ṣọ́ọ̀bù rẹ" },
    { id: "O3", condition: "Tí o bá ní àìní gidi bí oúnjẹ, owó ilé tàbí owó iná àti omi", action: "wá ètò ìrànlọ́wọ́ àdúgbò kan nípasẹ̀ 211 kí o sì fìdí rẹ̀ múlẹ̀ pẹ̀lú orísun ìjọba", standard: "kí o sì kọ nọ́mbà fóònù gidi rẹ̀ sílẹ̀ kí o tó lọ" },
    { id: "O4", condition: "Fún ẹgbẹ́ kan tí o wà nínú rẹ̀", action: "kọ ètò ìpàdé ojú-ewé kan pẹ̀lú olùrànlọ́wọ́ AI", standard: "pẹ̀lú àwọn kókó ní ìtẹ̀léra, àkókò, kókó tó ṣe pàtàkì jù ní ìbẹ̀rẹ̀, àti àkókò fún ìbéèrè" },
    { id: "O5", condition: "Ṣáájú àti lẹ́yìn ìpàdé ẹgbẹ́", action: "kọ ọ̀rọ̀ ìrántí, kí o sì yí àkọsílẹ̀ ìpàdé padà sí àkópọ̀ pẹ̀lú àwọn iṣẹ́ tí a yàn", standard: "láìsí ìsọfúnni àdáni, tí ẹnì kan tí ó wà níbẹ̀ sì ti ṣàyẹ̀wò rẹ̀" },
    { id: "O6", condition: "Fún àìní mẹ́ta ní àwùjọ rẹ", action: "ṣe àkọsílẹ̀ ibi ìrànlọ́wọ́ ojú-ewé kan pẹ̀lú nọ́mbà gidi àti àkókò ìṣí tí ìwọ fúnra rẹ ṣàyẹ̀wò", standard: "pẹ̀lú ọjọ́ tí o ṣàyẹ̀wò rẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: AI nílé",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣètò ọ̀sẹ̀ ẹbí rẹ",
          minutes: 5,
          goal: "Lo olùrànlọ́wọ́ AI láti yí ọ̀sẹ̀ tí ó rúdurùdu padà sí ètò tó yé.",
          text: [
            "Nígbà tí iṣẹ́, ilé-ìwé, àdéhùn àti ìrìn àjò kékeré bá pọ̀ jọ, ó rọrùn láti gbàgbé nǹkan kan. Olùrànlọ́wọ́ AI lè to àkọsílẹ̀ rẹ sí ètò ọjọ́ kọ̀ọ̀kan.",
            "Tẹ gbogbo ohun tí o ní láti ṣe ní ọ̀sẹ̀ yìí, ní ìtẹ̀léra èyíkéyìí, pẹ̀lú àkókò tí o ti mọ̀. Lo orúkọ àkọ́kọ́ tàbí ipò (\"àkọ́bí mi\", \"Ìyá-àgbà\") dípò orúkọ ní kíkún. Lẹ́yìn náà béèrè: \"Fi èyí sínú ètò ọjọ́ kọ̀ọ̀kan. Fi ìkọlura hàn.\"",
            "Wá ìkọlura, ìyẹn nígbà tí nǹkan méjì bá wà ní àkókò kan náà. Béèrè èrò lọ́wọ́ AI, bí kí ẹ jọ wọ ọkọ̀ tàbí kí o sún ìrìn àjò kan síwájú, ṣùgbọ́n ìwọ ni o máa ṣe ìpinnu ìkẹyìn."
          ],
          steps: ["Kọ gbogbo nǹkan ọ̀sẹ̀ náà sílẹ̀, ní ìtẹ̀léra èyíkéyìí, pẹ̀lú àkókò tí o mọ̀.", "Ní kí AI tò ó sí ètò ọjọ́ kọ̀ọ̀kan kí ó sì fi ìkọlura hàn.", "Béèrè èrò láti yanjú ìkọlura kọ̀ọ̀kan.", "Da ètò ìkẹyìn kọ sínú kàlẹ́ńdà fóònù rẹ tàbí sórí ìwé lára fìríìjì."],
          words: [["Ètò ọjọ́ (schedule)", "ètò tí ó fi ohun tí ó ń ṣẹlẹ̀ ní ọjọ́ kọ̀ọ̀kan àti àkókò rẹ̀ hàn."], ["Ìkọlura", "nígbà tí a bá ṣètò nǹkan méjì sí àkókò kan náà."]],
          slides: [
            { title: "Ohun tí o fẹ́ rántí ti pọ̀ jù?", bullets: ["Iṣẹ́, ilé-ìwé, àdéhùn, ìrìn àjò kékeré", "AI lè tò ó sí ètò kan"] },
            { title: "Bí o ṣe lè béèrè", bullets: ["Kọ gbogbo rẹ̀, ní ìtẹ̀léra èyíkéyìí", "Lo orúkọ àkọ́kọ́ tàbí ipò, kì í ṣe orúkọ ní kíkún", "\"Ṣe ètò ọjọ́ kọ̀ọ̀kan. Fi ìkọlura hàn.\""] },
            { title: "Yanjú ìkọlura", bullets: ["Béèrè èrò: wíwọ ọkọ̀ pọ̀, sísún ìrìn àjò síwájú", "Ìwọ ni o máa ṣe ìpinnu ìkẹyìn", "Fi sínú kàlẹ́ńdà rẹ tàbí lára fìríìjì"] }
          ],
          tryIt: "Kọ gbogbo ohun tí ilé rẹ ní láti ṣe ní ọ̀sẹ̀ yìí sílẹ̀. Ní kí olùrànlọ́wọ́ AI yí i padà sí ètò ọjọ́ kọ̀ọ̀kan kí ó sì fi ìkọlura èyíkéyìí hàn.",
          youCanNow: "yí ọ̀sẹ̀ tí ó kún fún iṣẹ́ padà sí ètò tó yé, kí o sì rí ìkọlura ní kùtùkùtù.",
          quickCheck: [
            { objective: "O1", q: "Kí ni o máa kọ́kọ́ tẹ nígbà tí o bá ń fi AI ṣètò ọ̀sẹ̀ rẹ?", options: ["Gbogbo ohun tí o ní láti ṣe, pẹ̀lú àkókò tí o mọ̀", "Orúkọ ní kíkún àti ọjọ́ ìbí àwọn ẹbí rẹ", "Ọjọ́ tí ó le jù nìkan", "Ọ̀rọ̀ aṣínà iṣẹ́ rẹ"], answer: 0, why: "AI nílò gbogbo àkọsílẹ̀ rẹ àti àkókò tí o mọ̀ láti tò ó sí ètò." },
            { objective: "O1", q: "AI dábàá pé kí o fi ìbẹ̀wò dókítà ọmọ rẹ sílẹ̀ láti yanjú ìkọlura. Kí ni o máa ṣe?", options: ["Ṣe ohun tí AI sọ", "Béèrè èrò míì, bí wíwọ ọkọ̀ pọ̀, kí o sì yan fúnra rẹ", "Fagilé gbogbo nǹkan ọjọ́ yẹn", "Má ṣe lo ètò náà mọ́"], answer: 1, why: "AI ń fúnni ní èrò, ṣùgbọ́n ìwọ ni o máa ṣe ìpinnu ìkẹyìn fún ẹbí rẹ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣe ètò oúnjẹ tí ó bá owó mu",
          minutes: 5,
          goal: "Ṣe ètò oúnjẹ ọ̀sẹ̀ kan àti àkọsílẹ̀ ọjà tí ó bá owó rẹ mu.",
          text: [
            "Olùrànlọ́wọ́ AI lè ṣètò oúnjẹ ní ìbámu pẹ̀lú ohun tí o ti ní, ohun tí ẹbí rẹ fẹ́ràn, àti iye tí o lè ná.",
            "Sọ fún un: iye ènìyàn, iye owó rẹ, oúnjẹ tí ẹbí rẹ fẹ́ràn tàbí tí wọn kò lè jẹ, ohun tí ó wà nínú ilé ìdáná rẹ, àti iye àkókò tí o ní láti se oúnjẹ. Béèrè àkọsílẹ̀ ọjà tí a pín sí apá ṣọ́ọ̀bù.",
            "AI kò mọ iye owó ọjà lónìí ní ṣọ́ọ̀bù rẹ, nítorí náà ka iye tí ó méfò sí ìṣirò lásán. Ṣàyẹ̀wò ìpolówó ọ̀sẹ̀ ṣọ́ọ̀bù náà tàbí app rẹ̀. Fún àìní ìlera bí ìtọ̀ ṣúgà (diabetes) tàbí àléjì (allergy), tẹ̀lé ìmọ̀ràn dókítà rẹ tàbí onímọ̀ oúnjẹ (dietitian)."
          ],
          steps: ["Wo oúnjẹ tí o ti ní nílé.", "Sọ fún AI iye ènìyàn, owó, ohun tí ẹ fẹ́ràn, àléjì àti àkókò ìdáná.", "Béèrè oúnjẹ alẹ́ márùn-ún àti àkọsílẹ̀ ọjà tí a pín sí apá ṣọ́ọ̀bù.", "Fi wé iye owó gidi ní ṣọ́ọ̀bù rẹ, kí o sì ṣe àtúnṣe."],
          words: [["Ìṣúná (budget)", "iye owó tí o pinnu láti ná."], ["Oúnjẹ ìpìlẹ̀ (staples)", "oúnjẹ ìpìlẹ̀ tí o máa ń lò déédéé, bí ìrẹsì, ẹ̀wà, ìyẹ̀fun àti òróró."]],
          slides: [
            { title: "AI lè ṣètò oúnjẹ", bullets: ["Ní ìbámu pẹ̀lú ohun tí o ti ní", "Ní ìbámu pẹ̀lú ohun tí ẹbí rẹ fẹ́ràn", "Ní ìbámu pẹ̀lú owó rẹ"] },
            { title: "Sọ fún un", bullets: ["Iye ènìyàn àti iye owó", "Ohun tí ẹ fẹ́ràn, àléjì, àkókò ìdáná", "Ohun tí ó ti wà nínú ilé ìdáná rẹ"] },
            { title: "Ṣàyẹ̀wò kí o tó ra ọjà", bullets: ["AI kò mọ iye owó ọjà lónìí", "Ṣàyẹ̀wò ìpolówó tàbí app ṣọ́ọ̀bù", "Àìní ìlera: tẹ̀lé dókítà rẹ"] }
          ],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún oúnjẹ alẹ́ márùn-ún fún ilé rẹ, ní lílo oúnjẹ tí o ti ní àti iye owó tí o yàn, pẹ̀lú àkọsílẹ̀ ọjà tí a pín sí apá ṣọ́ọ̀bù.",
          youCanNow: "ṣe ètò oúnjẹ tí ó bá owó mu àti àkọsílẹ̀ ọjà pẹ̀lú AI, kí o sì fi wé iye owó gidi.",
          quickCheck: [
            { objective: "O2", q: "Kí ló dé tí a fi ń pín àkọsílẹ̀ ọjà sí apá ṣọ́ọ̀bù?", options: ["Ó ń jẹ́ kí oúnjẹ dín owó kù", "AI nílò rẹ̀", "Ó ń jẹ́ kí rírajà yára", "Ṣọ́ọ̀bù ní kí a ṣe bẹ́ẹ̀"], answer: 2, why: "Pínpín sí apá, bí èso àti ewébẹ̀ tàbí wàrà, ń dín àkókò kù nínú ṣọ́ọ̀bù." },
            { objective: "O2", q: "O ní ìrẹsì, ẹ̀wà àti ẹyin nílé. Kí ni o máa sọ fún AI?", options: ["Kò sí nǹkan; ó máa méfò", "Iye owó rẹ nìkan", "Ilé oúnjẹ tí o fẹ́ràn jù", "Oúnjẹ tí o ti ní, kí ó lè ṣètò ní ìbámu pẹ̀lú wọn"], answer: 3, why: "Ṣíṣètò ní ìbámu pẹ̀lú oúnjẹ tí o ní ń fi owó pamọ́, ó sì ń dín ìfiṣòfò kù." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wíwá ìrànlọ́wọ́ àdúgbò nígbà tí owó bá há",
          minutes: 5,
          goal: "Wá ibi ìrànlọ́wọ́ àdúgbò fún àìní gidi kan kí o sì ṣàyẹ̀wò rẹ̀ pẹ̀lú orísun ìjọba.",
          text: [
            "Ọ̀pọ̀ ẹbí nílò ìrànlọ́wọ́ nígbà míì: fún oúnjẹ, owó ilé, owó iná àti omi, ìtọ́jú ọmọ tàbí iṣẹ́. Bíbéèrè ìrànlọ́wọ́ jẹ́ apá kan lára títọ́jú ẹbí rẹ.",
            "211 jẹ́ nọ́mbà ìkọ̀kọ̀ tí ó ń so àwọn ènìyàn pọ̀ mọ́ ìrànlọ́wọ́ àdúgbò fún ilé gbígbé, oúnjẹ, ọkọ̀, ìtọ́jú ìlera àti àwọn míì. O lè pe 211, ọ̀pọ̀ agbègbè sì tún ní ọ̀rọ̀ (text) tàbí ìjíròrò lórí wẹ́ẹ̀bù. Ilé-ìkàwé rẹ àti ibùdó àwùjọ àdúgbò náà ní àkọsílẹ̀ ìrànlọ́wọ́ àdúgbò.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti mọ irú ìrànlọ́wọ́ tí ó wà àti ìbéèrè tí o lè béèrè. Ṣùgbọ́n ó lè dárúkọ ibi tí ó ti tì tàbí ètò tí ó ti yí padà. Máa fìdí rẹ̀ múlẹ̀ nígbà gbogbo pẹ̀lú 211, ojú-òpó wẹ́ẹ̀bù ìjọba ètò náà, tàbí ìpè fóònù."
          ],
          steps: ["Dárúkọ àìní náà: oúnjẹ, owó ilé, owó iná àti omi, ìtọ́jú ọmọ tàbí iṣẹ́.", "Béèrè lọ́wọ́ AI irú ètò tí ó sábà máa ń ṣèrànwọ́ àti ohun tí o máa béèrè lọ́wọ́ wọn.", "Pe 211 tàbí lọ sí 211.org láti rí ètò àdúgbò gidi.", "Pè tàbí ṣàyẹ̀wò ojú-òpó wẹ́ẹ̀bù ìjọba ètò náà kí o tó lọ."],
          words: [["Ibi ìrànlọ́wọ́ (resource)", "ibì kan, ètò kan tàbí ènìyàn kan tí ó lè ṣèrànwọ́ fún àìní kan."], ["Ìkọ̀kọ̀ (confidential)", "a pa á mọ́; a kì í pín in láìsí àṣẹ rẹ."]],
          sources: [{ name: "211.org: Nípa 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Bíbéèrè ìrànlọ́wọ́ jẹ́ agbára", bullets: ["Oúnjẹ, owó ilé, iná àti omi, ìtọ́jú ọmọ, iṣẹ́", "Ọ̀pọ̀ ètò ìrànlọ́wọ́ àdúgbò ló wà"] },
            { title: "211 ń so ọ́ pọ̀ mọ́ ìrànlọ́wọ́", bullets: ["Pe 211, nígbàkúùgbà", "Ìkọ̀kọ̀ ni, o sì lè má sọ orúkọ rẹ", "Àti: àkọsílẹ̀ ilé-ìkàwé àti ibùdó àwùjọ"] },
            { title: "Lo AI, lẹ́yìn náà fìdí rẹ̀ múlẹ̀", bullets: ["AI ń ṣàlàyé irú ìrànlọ́wọ́ tí ó wà", "Ó lè dárúkọ ibi tí ó ti tì", "Fìdí rẹ̀ múlẹ̀ pẹ̀lú 211 tàbí ojú-òpó ìjọba"] }
          ],
          tryIt: "Yan àìní kan tí ẹbí rẹ tàbí aládùúgbò kan ní. Béèrè lọ́wọ́ AI irú ètò tí ó ń ṣèrànwọ́ fún un. Lẹ́yìn náà wá ètò àdúgbò gidi kan nípasẹ̀ 211.org tàbí nípa pípe 211, kí o sì kọ nọ́mbà fóònù gidi rẹ̀ sílẹ̀.",
          youCanNow: "wá ibi ìrànlọ́wọ́ àdúgbò fún àìní gidi kan, kí o sì fìdí rẹ̀ múlẹ̀ pẹ̀lú orísun ìjọba.",
          quickCheck: [
            { objective: "O3", q: "Yàtọ̀ sí pípe 211, ọ̀nà míì wo ni o sábà máa ń lè dé ọ̀dọ̀ wọn?", options: ["Nípa ọ̀rọ̀ (text), ìjíròrò wẹ́ẹ̀bù tàbí 211.org", "Ní ojúkojú nìkan", "Nípa fífi lẹ́tà ránṣẹ́", "Nípasẹ̀ app tí a ń sanwó fún"], answer: 0, why: "Ọ̀pọ̀ agbègbè ní 211 nípa ọ̀rọ̀ (text) tàbí ìjíròrò wẹ́ẹ̀bù, àti lórí ayélujára ní 211.org." },
            { objective: "O3", q: "Aládùúgbò kan nílò ìrànlọ́wọ́ láti san owó iná. Kí ni ìgbésẹ̀ àkọ́kọ́ tó dára pẹ̀lú AI?", options: ["Ní kí AI san owó náà", "Béèrè irú ètò tí ó ń ṣèrànwọ́ àti ohun tí o máa béèrè lọ́wọ́ wọn", "Fi ìwé owó aládùúgbò náà sórí ayélujára", "Dúró títí wọn yóò fi gé iná"], answer: 1, why: "AI lè ṣàlàyé irú ìrànlọ́wọ́ àti ìbéèrè tí o lè béèrè; lẹ́yìn náà o máa rí ètò gidi nípasẹ̀ 211." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: AI nílé",
        questions: [
          { objective: "O1", q: "Nígbà tí o bá ń kọ ọ̀sẹ̀ ẹbí rẹ fún AI, báwo ni o ṣe máa dárúkọ àwọn ènìyàn?", options: ["Orúkọ ní kíkún pẹ̀lú ọjọ́ ìbí", "Orúkọ àkọ́kọ́ tàbí ipò bí \"àkọ́bí mi\"", "Nọ́mbà Social Security", "Àdírẹ́sì ilé ẹnì kọ̀ọ̀kan"], answer: 1, why: "Orúkọ àkọ́kọ́ tàbí ipò ń pa ìsọfúnni àdáni mọ́." },
          { objective: "O1", q: "Kí ni ìkọlura nínú ètò ọjọ́?", options: ["Nǹkan méjì tí a ṣètò sí àkókò kan náà", "Ọjọ́ tí ó ṣófo", "Ọjọ́ ìsinmi", "Ètò tí a fagilé"], answer: 0, why: "Ìkọlura ni nígbà tí ètò méjì bá bọ́ sí àkókò kan náà." },
          { objective: "O2", q: "AI sọ pé àkọsílẹ̀ ọjà rẹ máa ná ọ $42. Kí ni o máa ṣe?", options: ["Gbà á gbọ́ bí ó ti rí gẹ́lẹ́", "San $42 kí o tó ra ọjà", "Kà á sí ìṣirò lásán kí o sì ṣàyẹ̀wò iye owó ṣọ́ọ̀bù", "Má ṣe ka àkọsílẹ̀ náà sí"], answer: 2, why: "AI kò mọ iye owó ọjà lónìí ní ṣọ́ọ̀bù rẹ." },
          { objective: "O2", q: "Ọmọ rẹ ní àléjì oúnjẹ. Ìmọ̀ràn ta ni ó kọ́kọ́ ṣe pàtàkì fún ètò oúnjẹ?", options: ["AI", "Ọ̀rọ̀ kan lórí ìkànnì àjọlò", "Ojú-òpó wẹ́ẹ̀bù èyíkéyìí", "Dókítà rẹ tàbí onímọ̀ oúnjẹ"], answer: 3, why: "Àìní ìlera ń tẹ̀lé ìmọ̀ràn onímọ̀." },
          { objective: "O3", q: "AI dárúkọ ibi ìpínoúnjẹ (food pantry) kan nítòsí rẹ. Kí ni o yẹ kí o ṣe kí o tó lọ?", options: ["Fìdí rẹ̀ múlẹ̀ pẹ̀lú 211, ojú-òpó ìjọba rẹ̀, tàbí ìpè fóònù", "Kàn lọ", "Fi í sórí ayélujára", "Tún béèrè lọ́wọ́ AI"], answer: 0, why: "AI lè dárúkọ ibi tí ó ti tì; kọ́kọ́ fìdí rẹ̀ múlẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: AI fún àwùjọ rẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe ètò ìpàdé (agenda)",
          minutes: 5,
          goal: "Lo olùrànlọ́wọ́ AI láti kọ ètò ìpàdé ojú-ewé kan tó yé.",
          text: [
            "Àwọn ẹgbẹ́ àwùjọ máa ń ṣe púpọ̀ sí i nígbà tí ìpàdé bá ní ètò. Ètò ìpàdé (agenda) jẹ́ àkọsílẹ̀ kúkúrú ohun tí ìpàdé máa sọ̀rọ̀ lé lórí, ní ìtẹ̀léra, pẹ̀lú iye àkókò fún apá kọ̀ọ̀kan.",
            "Sọ fún AI ẹgbẹ́ náà, èrò ìpàdé, bí ìpàdé ṣe gùn tó, àti àwọn kókó. Fún àpẹẹrẹ: \"Ṣe ètò ìpàdé wákàtí kan fún ẹgbẹ́ ayálégbé wa. Kókó: ẹ̀rọ ìfọṣọ tí ó bàjẹ́, àsè ìgbà ẹ̀rùn, àti yíyan akọ̀wé tuntun. Fi àkókò sílẹ̀ fún ìbéèrè.\"",
            "Kà á pẹ̀lú àìní ẹgbẹ́ rẹ lọ́kàn. Yí àwọn kókó padà sí ibi tí ó yẹ, fi ìkíni kún un, kí o sì rí i dájú pé kókó tó ṣe pàtàkì jù kò há sí ìparí."
          ],
          steps: ["Kọ ẹgbẹ́ náà, èrò ìpàdé, gígùn rẹ̀ àti àwọn kókó sílẹ̀.", "Béèrè lọ́wọ́ AI fún ètò ìpàdé ojú-ewé kan pẹ̀lú àkókò fún kókó kọ̀ọ̀kan.", "Fi kókó tó ṣe pàtàkì jù sí ìbẹ̀rẹ̀.", "Fi ìkíni àti àkókò fún ìbéèrè kún un, lẹ́yìn náà pín in ṣáájú ìpàdé."],
          words: [["Ètò ìpàdé (agenda)", "àkọsílẹ̀ àwọn kókó ìpàdé, ní ìtẹ̀léra, pẹ̀lú àkókò."], ["Akọ̀wé (secretary)", "ẹni tí ó ń kọ àkọsílẹ̀ ìpàdé, tí ó sì ń tọ́jú ìwé ẹgbẹ́."]],
          slides: [
            { title: "Ìpàdé nílò ètò", bullets: ["Ètò ìpàdé ń to àwọn kókó ní ìtẹ̀léra", "Kókó kọ̀ọ̀kan ní àkókò tirẹ̀"] },
            { title: "Sọ fún AI", bullets: ["Ẹgbẹ́ náà àti èrò ìpàdé", "Bí ìpàdé ṣe gùn tó", "Àwọn kókó"] },
            { title: "Jẹ́ kí ó bá ọ mu", bullets: ["Kókó tó ṣe pàtàkì jù ní ìbẹ̀rẹ̀", "Fi ìkíni àti ìbéèrè kún un", "Pín in ṣáájú ìpàdé"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI kọ ètò ìpàdé wákàtí kan fún ẹgbẹ́ gidi kan tí o wà nínú rẹ̀, pẹ̀lú kókó mẹ́ta àti àkókò fún ìbéèrè.",
          youCanNow: "ṣe ètò ìpàdé tó yé pẹ̀lú olùrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O4", q: "Nǹkan mẹ́rin wo ni prompt ètò ìpàdé gbọ́dọ̀ sọ fún AI?", options: ["Nọ́mbà fóònù àwọn ọmọ ẹgbẹ́", "Ọjọ́ nìkan", "Ẹgbẹ́ náà, èrò ìpàdé, gígùn rẹ̀ àti àwọn kókó", "Àkọsílẹ̀ ìpanu ìpàdé"], answer: 2, why: "Pẹ̀lú ẹgbẹ́ náà, èrò, gígùn àti àwọn kókó, AI lè ṣe ètò ìpàdé tó wúlò." },
            { objective: "O4", q: "AI fi yíyan akọ̀wé tuntun sí ìkẹyìn, pẹ̀lú ìṣẹ́jú 5. Òun ni kókó pàtàkì rẹ. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ bẹ́ẹ̀", "Yọ ọ́ kúrò", "Jẹ́ kí ìpàdé kúrú sí i", "Gbé e wá síwájú kí o sì fún un ní àkókò púpọ̀ sí i"], answer: 3, why: "Kókó tó ṣe pàtàkì jù gbọ́dọ̀ wà ní ìbẹ̀rẹ̀ kí ó má bàa há sí ìparí." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíkọ ọ̀rọ̀ tó yé sí ẹgbẹ́ àti àkọsílẹ̀ ìpàdé",
          minutes: 5,
          goal: "Kọ ọ̀rọ̀ ìrántí ìpàdé, kí o sì yí àkọsílẹ̀ ìpàdé padà sí àkópọ̀ kúkúrú.",
          text: [
            "Ọ̀rọ̀ ìrántí tó dára máa ń sọ kí ni, ìgbà wo, ibo, àti ohun tí a máa mú wá, ní ìlà kúkúrú díẹ̀. Ní kí AI kọ ọ̀kan ní ohùn ọ̀rẹ́, àti ẹ̀dà kejì ní èdè míì tí ẹgbẹ́ rẹ bá nílò rẹ̀.",
            "Lẹ́yìn ìpàdé, AI lè yí àkọsílẹ̀ rẹ tí kò mọ́ padà sí àkópọ̀ tó mọ́: ohun tí a pinnu, ta ni yóò ṣe kí ni, àti ní ìgbà wo. Yọ ìsọfúnni àdáni kúrò, bí ìṣòro ìlera tàbí owó ẹnìkan.",
            "Kí o tó fi ránṣẹ́, ṣàyẹ̀wò orúkọ, ọjọ́ àti ìpinnu pẹ̀lú ẹnì kan tí ó wà níbẹ̀. Àkópọ̀ gbọ́dọ̀ bá ohun tí ó ṣẹlẹ̀ gan-an mu."
          ],
          steps: ["Béèrè ọ̀rọ̀ ìrántí ní ohùn ọ̀rẹ́ pẹ̀lú kí ni, ìgbà wo, ibo àti ohun tí a máa mú wá.", "Béèrè ẹ̀dà ní èdè kejì tí ó bá pọn dandan.", "Lẹ́yìn ìpàdé, lẹ̀ àkọsílẹ̀ rẹ mọ́ ọn láìsí ìsọfúnni àdáni.", "Béèrè àkópọ̀: ìpinnu, ta ni yóò ṣe kí ni, àti ní ìgbà wo.", "Ṣàyẹ̀wò rẹ̀ pẹ̀lú ẹnì kan tí ó wà níbẹ̀, lẹ́yìn náà fi ránṣẹ́."],
          words: [["Àkópọ̀ (summary)", "ẹ̀dà kúkúrú tí ó ní àwọn kókó pàtàkì nìkan."], ["Iṣẹ́ tí a yàn (action item)", "iṣẹ́ tí ẹnì kan gbà láti ṣe lẹ́yìn ìpàdé."]],
          slides: [
            { title: "Ọ̀rọ̀ ìrántí tó dára", bullets: ["Kí ni, ìgbà wo, ibo, kí ni a máa mú wá", "Kúkúrú, ní ohùn ọ̀rẹ́", "Èdè kejì tí ó bá pọn dandan"] },
            { title: "Láti àkọsílẹ̀ sí àkópọ̀", bullets: ["Lẹ̀ àkọsílẹ̀ mọ́ ọn, láìsí ìsọfúnni àdáni", "Béèrè ìpinnu àti iṣẹ́ tí a yàn", "Ta ni yóò ṣe kí ni, ní ìgbà wo"] },
            { title: "Ṣàyẹ̀wò kí o tó fi ránṣẹ́", bullets: ["Orúkọ, ọjọ́ àti ìpinnu", "Béèrè lọ́wọ́ ẹnì kan tí ó wà níbẹ̀"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI kọ ọ̀rọ̀ ìrántí ìlà mẹ́ta fún ìpàdé láti Ẹ̀kọ́ 4. Lẹ́yìn náà kọ àkọsílẹ̀ àṣeṣe márùn-ún, kí o sì ní kí ó yí wọn padà sí àkópọ̀ pẹ̀lú iṣẹ́ tí a yàn.",
          youCanNow: "kọ ọ̀rọ̀ ìrántí ìpàdé tó yé, kí o sì yí àkọsílẹ̀ padà sí àkópọ̀ pẹ̀lú iṣẹ́ tí a yàn.",
          quickCheck: [
            { objective: "O5", q: "Kí ni àkópọ̀ ìpàdé ń kọ sílẹ̀?", options: ["Ìpinnu, ta ni yóò ṣe kí ni, àti ní ìgbà wo", "Ìṣòro àdáni gbogbo ènìyàn", "Ìpanu nìkan", "Gbogbo ọ̀rọ̀ tí a sọ"], answer: 0, why: "Àkópọ̀ ń fi ohun tí a pinnu hàn, àti ẹni tí yóò ṣe kí ni ní ìgbà wo." },
            { objective: "O5", q: "Àkọsílẹ̀ rẹ sọ pé owó ilé ọmọ ẹgbẹ́ kan ti pẹ́. Kí ni o máa ṣe kí o tó lẹ̀ ẹ́ mọ́ AI?", options: ["Fi í sílẹ̀; ó wúlò", "Yọ ìsọfúnni àdáni yẹn kúrò", "Fi orúkọ rẹ̀ ní kíkún kún un", "Fi àkọsílẹ̀ náà ránṣẹ́ sí gbogbo òpópónà"], answer: 1, why: "Ìsọfúnni àdáni nípa owó tàbí ìlera ẹnìkan kì í wọ inú prompt AI tàbí àkópọ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣe àkọsílẹ̀ ibi ìrànlọ́wọ́ àwùjọ",
          minutes: 5,
          goal: "Ṣe àkọsílẹ̀ ojú-ewé kan ti ìrànlọ́wọ́ àdúgbò tí ìwọ fúnra rẹ ti ṣàyẹ̀wò.",
          text: [
            "Àkọsílẹ̀ ibi ìrànlọ́wọ́ ń ran àwọn aládùúgbò lọ́wọ́ láti rí ìrànlọ́wọ́ kíákíá. Jẹ́ kí ó jẹ́ ojú-ewé kan: irú ìrànlọ́wọ́, orúkọ ètò náà, nọ́mbà fóònù gidi tàbí ojú-òpó wẹ́ẹ̀bù rẹ̀, àti àkókò ìṣí.",
            "Lo AI láti ṣètò bí ojú-ewé náà ṣe máa rí, kí ó sì ṣàlàyé ètò kọ̀ọ̀kan ní gbólóhùn kan tó rọrùn. Gba orúkọ, nọ́mbà àti àkókò gidi láti 211, ojú-òpó wẹ́ẹ̀bù ìjọba ètò náà, tàbí ìpè fóònù, kì í ṣe láti AI.",
            "Kọ ọjọ́ sí ìsàlẹ̀ (\"A ṣàyẹ̀wò rẹ̀ ní ...\"). Àwọn ètò máa ń yí padà, nítorí náà tún àkọsílẹ̀ náà ṣàyẹ̀wò ní gbogbo oṣù díẹ̀."
          ],
          steps: ["Yan àìní mẹ́ta tí àwùjọ rẹ ní.", "Wá ètò gidi kan fún ọ̀kọ̀ọ̀kan nípasẹ̀ 211 tàbí ojú-òpó wẹ́ẹ̀bù ìjọba.", "Béèrè lọ́wọ́ AI fún ìṣètò ojú-ewé kan tó rọrùn àti àlàyé ìlà kan tó rọrùn fún ọ̀kọ̀ọ̀kan.", "Ìwọ fúnra rẹ ni kí o kọ nọ́mbà gidi àti àkókò ìṣí sí i.", "Fi ọjọ́ tí o ṣàyẹ̀wò rẹ̀ kún un."],
          words: [["Ìṣètò ojú-ewé (layout)", "bí ọ̀rọ̀ àti àpótí ṣe wà ní ìtò lórí ojú-ewé kan."]],
          sources: [{ name: "211.org: wá 211 àdúgbò rẹ", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Àkọsílẹ̀ ibi ìrànlọ́wọ́ ojú-ewé kan", bullets: ["Irú ìrànlọ́wọ́ àti orúkọ ètò", "Fóònù gidi tàbí ojú-òpó wẹ́ẹ̀bù", "Àkókò ìṣí"] },
            { title: "Ta ni ń ṣe kí ni", bullets: ["AI: ìṣètò ojú-ewé àti àlàyé tó rọrùn", "Ìwọ: orúkọ, nọ́mbà, àkókò gidi láti orísun ìjọba"] },
            { title: "Jẹ́ kí ó máa jẹ́ tuntun", bullets: ["Kọ \"A ṣàyẹ̀wò rẹ̀ ní\" àti ọjọ́", "Tún un ṣàyẹ̀wò ní gbogbo oṣù díẹ̀"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣètò ìpàdé kékeré fún ẹgbẹ́ rẹ pẹ̀lú ètò ìpàdé àti ọ̀rọ̀ ìrántí tí AI kọ, kí o sì ṣe àkọsílẹ̀ ojú-ewé kan ti ibi ìrànlọ́wọ́ àdúgbò mẹ́ta tí ìwọ fúnra rẹ ti ṣàyẹ̀wò.",
          youCanNow: "ṣètò ìpàdé àwùjọ, kí o sì pín àkọsílẹ̀ ìrànlọ́wọ́ àdúgbò tí a ti ṣàyẹ̀wò.",
          quickCheck: [
            { objective: "O6", q: "Nǹkan mẹ́rin wo ló máa ń wà lórí ìlà kọ̀ọ̀kan nínú àkọsílẹ̀ ibi ìrànlọ́wọ́?", options: ["Orúkọ, ọjọ́ orí, àdírẹ́sì àti iṣẹ́", "Iye owó, àwọ̀, ìwọ̀n àti orúkọ ọjà", "Irú ìrànlọ́wọ́, orúkọ ètò, fóònù gidi tàbí ojú-òpó wẹ́ẹ̀bù, àti àkókò ìṣí", "Orúkọ ètò nìkan"], answer: 2, why: "Nǹkan mẹ́rin wọ̀nyí ń jẹ́ kí àwọn aládùúgbò rí ìrànlọ́wọ́ kí wọ́n sì kàn sí i kíákíá." },
            { objective: "O6", q: "AI kọ nọ́mbà fóònù kan fún ibi ìpínoúnjẹ. Kí ni o máa ṣe?", options: ["Lò ó bí ó ti rí", "Yọ ibi ìpínoúnjẹ náà kúrò nínú àkọsílẹ̀", "Tún béèrè lọ́wọ́ AI", "Fi nọ́mbà láti 211 tàbí ojú-òpó ìjọba rọ́pò rẹ̀"], answer: 3, why: "Nọ́mbà àti àkókò gidi ń wá láti 211 tàbí orísun ìjọba, kì í ṣe láti AI." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: AI fún àwùjọ rẹ",
        questions: [
          { objective: "O4", q: "Kí ni ètò ìpàdé (agenda)?", options: ["Àkọsílẹ̀ kókó ìpàdé, ní ìtẹ̀léra, pẹ̀lú àkókò", "Ìwé owó", "Ìjíròrò ẹgbẹ́ lórí fóònù", "Ìwé ìforúkọsílẹ̀"], answer: 0, why: "Ètò ìpàdé ń ṣètò ohun tí ìpàdé máa sọ̀rọ̀ lé lórí." },
          { objective: "O4", q: "Níbo ni kókó tó ṣe pàtàkì jù gbọ́dọ̀ wà nínú ètò ìpàdé?", options: ["Ní ìparí pátápátá", "Ní ìbẹ̀rẹ̀ ìpàdé", "Kò gbọ́dọ̀ sí nínú ètò", "Nínú ìpàdé míì ní ọdún tó ń bọ̀"], answer: 1, why: "Àwọn kókó ìbẹ̀rẹ̀ ló máa ń rí àkókò àti àfiyèsí jù." },
          { objective: "O5", q: "Ọ̀rọ̀ ìrántí ìpàdé tó dára ní:", options: ["Nọ́mbà fóònù gbogbo ènìyàn", "Àdírẹ́sì ilé àwọn ọmọ ẹgbẹ́", "Kí ni, ìgbà wo, ibo àti ohun tí a máa mú wá", "Ìtàn gígùn ẹgbẹ́ náà"], answer: 2, why: "Nǹkan mẹ́rin wọ̀nyẹn ni àwọn ènìyàn nílò." },
          { objective: "O5", q: "Àkọsílẹ̀ rẹ sọ nípa àìsàn ọmọ ẹgbẹ́ kan. Kí o tó fi fún AI, o máa:", options: ["Fi í sílẹ̀ nínú rẹ̀", "Fi àlàyé púpọ̀ sí i kún un", "Pín in nínú ìjíròrò ẹgbẹ́", "Yọ ìsọfúnni àdáni yẹn kúrò"], answer: 3, why: "Ìsọfúnni àdáni àwọn ẹlòmíì kì í wọ inú irinṣẹ́ AI." },
          { objective: "O6", q: "Níbo ni nọ́mbà fóònù inú àkọsílẹ̀ ibi ìrànlọ́wọ́ gbọ́dọ̀ ti wá?", options: ["211 tàbí ojú-òpó wẹ́ẹ̀bù ìjọba ètò náà", "Ohunkóhun tí AI bá sọ", "Ìméfò", "Ìwé ìpolówó àtijọ́ láti ọ̀pọ̀ ọdún sẹ́yìn"], answer: 0, why: "AI lè fúnni ní nọ́mbà tí kò tọ́; orísun ìjọba ló tọ̀nà." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Àwùjọ àti Ìgbésí Ayé Ojoojúmọ́",
    questions: [
      { objective: "O1", q: "Láti fi AI ṣètò ọ̀sẹ̀ ẹbí rẹ, kọ́kọ́:", options: ["Kọ gbogbo ohun tí o ní láti ṣe, pẹ̀lú àkókò tí o mọ̀", "Tẹ nọ́mbà báńkì rẹ", "Ra app ìṣètò", "Pe 211"], answer: 0, why: "AI nílò àkọsílẹ̀ rẹ láti tò ó." },
      { objective: "O1", q: "Ọ̀nà wo ni kò léwu láti dárúkọ àwọn ẹbí nínú prompt?", options: ["Orúkọ ní kíkún àti ọjọ́ ìbí", "\"Àkọ́bí mi\" tàbí orúkọ àkọ́kọ́", "Nọ́mbà ìdánimọ̀ ilé-ìwé", "Nọ́mbà Social Security"], answer: 1, why: "Ipò tàbí orúkọ àkọ́kọ́ ń pa ìsọfúnni mọ́ ní ìkọ̀kọ̀." },
      { objective: "O1", q: "Nígbà tí AI bá rí ìkọlura, ìwọ máa:", options: ["Jẹ́ kí AI pinnu", "Má ṣe kà á sí", "Béèrè èrò, lẹ́yìn náà ṣe ìpinnu ìkẹyìn", "Fagilé gbogbo nǹkan"], answer: 2, why: "AI ń dábàá; ìwọ ni o ń pinnu." },
      { objective: "O2", q: "Prompt ètò oúnjẹ gbọ́dọ̀ ní:", options: ["Ọ̀rọ̀ aṣínà rẹ", "Àdírẹ́sì rẹ", "PIN báńkì rẹ", "Iye ènìyàn, owó, ohun tí ẹ fẹ́ràn àti àléjì"], answer: 3, why: "Àwọn nǹkan wọ̀nyẹn ló ń jẹ́ kí ètò náà wúlò." },
      { objective: "O2", q: "Kí ló dé tí o fi máa ṣàyẹ̀wò ìpolówó ọ̀sẹ̀ ṣọ́ọ̀bù lẹ́yìn tí AI bá ṣe àkọsílẹ̀ rẹ?", options: ["AI kò mọ iye owó ọjà lónìí", "AI máa ń ka owó jù nígbà gbogbo", "Ṣọ́ọ̀bù ní kí a ṣe bẹ́ẹ̀", "Òfin ni"], answer: 0, why: "Ìṣirò owó AI jẹ́ ìméfò lásán." },
      { objective: "O2", q: "Oúnjẹ ìpìlẹ̀ (staples) ni:", options: ["Ohun èlò ọ́fíìsì nìkan", "Oúnjẹ ìpìlẹ̀ tí o máa ń lò déédéé, bí ìrẹsì àti ẹ̀wà", "Oúnjẹ dídùn olówó ńlá", "Oúnjẹ ilé oúnjẹ"], answer: 1, why: "Oúnjẹ ìpìlẹ̀ ni oúnjẹ ojoojúmọ́ tí a máa ń lò." },
      { objective: "O3", q: "211 ni:", options: ["App AI kan", "Ṣọ́ọ̀bù kan", "Nọ́mbà ìkọ̀kọ̀ tí ó ń so àwọn ènìyàn pọ̀ mọ́ ìrànlọ́wọ́ àdúgbò", "Báńkì kan"], answer: 2, why: "211 ń so ọ́ pọ̀ mọ́ ìrànlọ́wọ́ àdúgbò." },
      { objective: "O3", q: "Ìpè sí 211:", options: ["Ni a ń pín lórí ayélujára", "Ni a ń gbà sílẹ̀ fún ìpolówó", "Wà fún ilé-iṣẹ́ nìkan", "Jẹ́ ìkọ̀kọ̀, o sì lè má sọ orúkọ rẹ"], answer: 3, why: "211 sọ pé ìpè jẹ́ ìkọ̀kọ̀, ẹni tí ó pè sì lè má sọ orúkọ rẹ̀." },
      { objective: "O3", q: "AI fún ọ ní àkọsílẹ̀ ibi ìpínoúnjẹ. Kí o tó lọ, o máa:", options: ["Fìdí ọ̀kan múlẹ̀ pẹ̀lú 211, ojú-òpó ìjọba rẹ̀ tàbí ìpè", "Lọ sí gbogbo wọn", "Gbà á gbọ́ pátápátá", "Fi àkọsílẹ̀ náà sórí ayélujára"], answer: 0, why: "Àwọn ètò máa ń tì tàbí yí padà; kọ́kọ́ fìdí rẹ̀ múlẹ̀." },
      { objective: "O3", q: "Bíbéèrè ìrànlọ́wọ́ fún oúnjẹ tàbí owó ìnáwó jẹ́:", options: ["Ohun tí a gbọ́dọ̀ fi pamọ́", "Apá kan lára títọ́jú ẹbí rẹ", "Ohun tí a kò gbà láàyè", "Fún àwọn ẹlòmíì nìkan"], answer: 1, why: "Lílo ìrànlọ́wọ́ àdúgbò jẹ́ ìgbésẹ̀ ọlọ́gbọ́n, tí ó sì wọ́pọ̀." },
      { objective: "O4", q: "Ètò ìpàdé gbọ́dọ̀ ní:", options: ["Ọjọ́ nìkan", "Nọ́mbà fóònù àwọn ọmọ ẹgbẹ́", "Àwọn kókó ní ìtẹ̀léra pẹ̀lú àkókò", "Àdírẹ́sì gbogbo ènìyàn"], answer: 2, why: "Kókó àti àkókò ń jẹ́ kí ìpàdé má yà kúrò lójú ọ̀nà." },
      { objective: "O4", q: "Prompt ètò ìpàdé tó dára ń sọ fún AI:", options: ["Kò sí nǹkan", "Ọ̀rọ̀ aṣínà rẹ", "Báńkì rẹ", "Ẹgbẹ́ náà, èrò ìpàdé, gígùn rẹ̀ àti àwọn kókó"], answer: 3, why: "Àwọn nǹkan wọ̀nyẹn ló ń jẹ́ kí ètò ìpàdé wúlò." },
      { objective: "O4", q: "Ìgbà wo ni o yẹ kí o pín ètò ìpàdé?", options: ["Ṣáájú ìpàdé", "Láéláé", "Oṣù kan lẹ́yìn rẹ̀", "Sí alága nìkan"], answer: 0, why: "Pínpín in ní kùtùkùtù ń jẹ́ kí àwọn ènìyàn wá ní ìmúrasílẹ̀." },
      { objective: "O5", q: "Ẹgbẹ́ rẹ ní àwọn ọmọ ẹgbẹ́ tí ń sọ èdè Spanish. Fún ọ̀rọ̀ ìrántí, o lè:", options: ["Fi wọ́n sílẹ̀", "Béèrè lọ́wọ́ AI fún ẹ̀dà ní èdè kejì", "Lo àwòrán nìkan", "Má ṣe fi nǹkan ránṣẹ́"], answer: 1, why: "Ẹ̀dà ní èdè kejì ń jẹ́ kí ọ̀pọ̀ ọmọ ẹgbẹ́ sí i kópa." },
      { objective: "O5", q: "Iṣẹ́ tí a yàn (action item) ni:", options: ["Fíìmù kan", "Irú app kan", "Iṣẹ́ tí ẹnì kan gbà láti ṣe lẹ́yìn ìpàdé", "Ìpanu kan"], answer: 2, why: "Iṣẹ́ tí a yàn ń sọ ta ni yóò ṣe kí ni, ní ìgbà wo." },
      { objective: "O5", q: "Kí o tó fi àkópọ̀ ìpàdé ránṣẹ́, o yẹ kí o:", options: ["Fi ìsọfúnni àdáni kún un", "Fi ránṣẹ́ láìkà á", "Pa àkọsílẹ̀ rẹ́", "Ṣàyẹ̀wò rẹ̀ pẹ̀lú ẹnì kan tí ó wà níbẹ̀"], answer: 3, why: "Àkópọ̀ gbọ́dọ̀ bá ohun tí ó ṣẹlẹ̀ mu." },
      { objective: "O6", q: "Nínú àkọsílẹ̀ ibi ìrànlọ́wọ́, ta ni yóò kọ nọ́mbà fóònù àti àkókò ìṣí?", options: ["Ìwọ, láti orísun ìjọba", "AI", "Kò sí ẹnìkan", "Ìpolówó tí ó yọ jáde lójijì"], answer: 0, why: "Orísun ìjọba ló ń fúnni ní nọ́mbà tó tọ̀nà." },
      { objective: "O6", q: "Kí ló dé tí o fi máa kọ \"A ṣàyẹ̀wò rẹ̀ ní\" àti ọjọ́ sórí àkọsílẹ̀ rẹ?", options: ["Ó ń mú un rẹwà", "Àwọn ètò máa ń yí padà, nítorí náà àwọn ènìyàn máa mọ bí ó ṣe jẹ́ tuntun tó", "Òfin ní kí a ṣe bẹ́ẹ̀", "Láti jẹ́ kí ó gùn sí i"], answer: 1, why: "Ọjọ́ ń fi ìgbà tí a fìdí rẹ̀ múlẹ̀ kẹ́yìn hàn." },
      { objective: "O6", q: "Ìgbà mélòó ni o yẹ kí o tún àkọsílẹ̀ ibi ìrànlọ́wọ́ ṣàyẹ̀wò?", options: ["Láéláé", "Ní gbogbo ọdún mẹ́wàá", "Ní gbogbo oṣù díẹ̀", "Nígbà tí ẹnìkan bá ráhùn nìkan"], answer: 2, why: "Àwọn ètò máa ń yí padà, nítorí náà máa tún un ṣàyẹ̀wò déédéé." },
      { objective: "O6", q: "Nínú iṣẹ́ ìkẹyìn, àkọsílẹ̀ ibi ìrànlọ́wọ́ ní:", options: ["Ibi mẹ́wàá tí AI hùmọ̀", "Àdírẹ́sì ilé àwọn ọmọ ẹgbẹ́", "Ibì kan ṣoṣo", "Ibi ìrànlọ́wọ́ àdúgbò mẹ́ta tí ìwọ fúnra rẹ ṣàyẹ̀wò"], answer: 3, why: "Iṣẹ́ náà jẹ́ ibi ìrànlọ́wọ́ mẹ́ta tí o ti fìdí wọn múlẹ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 3, 6, 8, 10, 13, 14, 16, 17]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ètò ìpàdé",
        objective: "O4",
        notYet: "Kò sí ètò ìpàdé, tàbí àwọn kókó kò ní ìtẹ̀léra tàbí àkókò.",
        meets: "Ojú-ewé kan pẹ̀lú àwọn kókó ní ìtẹ̀léra, àkókò, àti àkókò fún ìbéèrè.",
        exceeds: "Kókó tó ṣe pàtàkì jù wà ní ìbẹ̀rẹ̀, ìkíni sì wà níbẹ̀."
      },
      {
        name: "Ọ̀rọ̀ ìrántí",
        objective: "O5",
        notYet: "Kí ni, ìgbà wo tàbí ibo kò sí níbẹ̀.",
        meets: "Ọ̀rọ̀ ìrántí kúkúrú ní ohùn ọ̀rẹ́ pẹ̀lú kí ni, ìgbà wo, ibo àti ohun tí a máa mú wá.",
        exceeds: "Ó tún ní ẹ̀dà ní èdè kejì tí ẹgbẹ́ náà nílò."
      },
      {
        name: "A ṣàyẹ̀wò àwọn ibi ìrànlọ́wọ́",
        objective: "O3",
        notYet: "Àwọn ètò tàbí nọ́mbà wá láti AI, a kò sì ṣàyẹ̀wò wọn.",
        meets: "Ètò àdúgbò gidi mẹ́ta, tí a fìdí ọ̀kọ̀ọ̀kan múlẹ̀ nípasẹ̀ 211, ojú-òpó ìjọba tàbí ìpè.",
        exceeds: "Ó lè sọ bí a ṣe ṣàyẹ̀wò ọ̀kọ̀ọ̀kan."
      },
      {
        name: "Ìṣètò àkọsílẹ̀ ibi ìrànlọ́wọ́",
        objective: "O6",
        notYet: "Nọ́mbà fóònù, àkókò ìṣí tàbí ọjọ́ kò sí níbẹ̀.",
        meets: "Ojú-ewé kan pẹ̀lú irú ìrànlọ́wọ́, ètò, nọ́mbà gidi tàbí ojú-òpó, àkókò ìṣí, àti ọjọ́ \"A ṣàyẹ̀wò rẹ̀ ní\".",
        exceeds: "Ètò kọ̀ọ̀kan ní àlàyé ìlà kan tó rọrùn."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ìpàdé ẹgbẹ́ tí a ṣètò pẹ̀lú ètò ìpàdé láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tàbí aládùúgbò tí wọ́n kàn sí ètò ìrànlọ́wọ́ àdúgbò tí wọ́n rí nípasẹ̀ 211",
      "Àwọn alábàáṣiṣẹ́ àwùjọ ń ròyìn pé a ń pín àkọsílẹ̀ ibi ìrànlọ́wọ́, a sì ń mú wọn wà ní tuntun"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní íńtánẹ́ẹ̀tì, tàbí kọ̀mpútà ilé-ìkàwé tàbí ti ibùdó àwùjọ",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: Microsoft Copilot, ChatGPT tàbí Google Gemini",
      "Ọ̀nà láti dé 211 nípa fóònù, ọ̀rọ̀ (text) tàbí 211.org",
      "Ìwé àti gègé, tàbí kàlẹ́ńdà fóònù, fún ètò ọjọ́ àti àwọn àkọsílẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣe ẹ̀kọ́ náà pẹ̀lú ẹgbẹ́ gidi kan, bí ẹgbẹ́ òbí tàbí ẹgbẹ́ ayálégbé, kí ètò ìpàdé àti àkọsílẹ̀ ibi ìrànlọ́wọ́ lè wúlò lójú ẹsẹ̀.",
      "Fi 211 hàn ní tààrà, kí o sì rán àwọn akẹ́kọ̀ọ́ létí pé bíbéèrè ìrànlọ́wọ́ jẹ́ ohun tí ó wọ́pọ̀.",
      "Ṣàyẹ̀wò àwọn prompt fún ìsọfúnni àdáni: orúkọ àkọ́kọ́ tàbí ipò nìkan, kò sì sí nǹkan kan nípa ìlera tàbí owó àwọn ẹlòmíì.",
      "Kó àwọn àkọsílẹ̀ ibi ìrànlọ́wọ́ tí a ti ṣàyẹ̀wò jọ sí àkọsílẹ̀ kan tí ẹgbẹ́ ń pín, pẹ̀lú ọjọ́ tí a ṣàyẹ̀wò rẹ̀.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
