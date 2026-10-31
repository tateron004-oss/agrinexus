"use strict";

// Koach Learn course (Yoruba translation of youth/youth-coding-with-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-coding-with-ai-yo",
  lang: "yo",
  translationOf: "youth-coding-with-ai",
  category: "Youth",
  name: "Ìfihàn sí Kíkọ Kóòdù pẹ̀lú AI",
  skills: "Ṣíṣe Python nínú notebook ọ̀fẹ́ lórí ayélujára, Lílo variable àti input, Ṣíṣe ìpinnu pẹ̀lú if, Títún nǹkan ṣe pẹ̀lú loop, Bíbéèrè lọ́wọ́ AI láti ṣàlàyé àti tún kóòdù ṣe",
  outcome: "kọ eré ìdánwò ìbéèrè kékeré ní Python kí o sì ṣe é nínú notebook ọ̀fẹ́ lórí ayélujára, lo olùrànlọ́wọ́ AI láti ṣàlàyé kóòdù àti láti ràn ọ́ lọ́wọ́ tún àṣìṣe ṣe, kí o sì ṣàlàyé ohun tí ìlà kọ̀ọ̀kan nínú ètò rẹ ń ṣe.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ọ̀dọ́ tí kò tíì kọ kóòdù rí, tàbí tí wọ́n gbìyànjú lẹ́ẹ̀kan tí ó sì há wọn. O kò nílò láti mọ ìṣirò dáadáa. O nílò ìfẹ́ láti mọ̀ nǹkan àti nǹkan bí ìṣẹ́jú márùn-ún fún ẹ̀kọ́ kọ̀ọ̀kan.",
    "O máa kọ kóòdù Python gidi nínú Google Colab, notebook ọ̀fẹ́ tí ó ń ṣiṣẹ́ nínú browser, nítorí náà o lè lo kọ̀mpútà ilé-ìwé tàbí ti ilé-ìkàwé. O máa kọ́ àwọn ìpìlẹ̀ kóòdù, lẹ́yìn náà o máa kọ́ bí o ṣe lè lo olùrànlọ́wọ́ AI bí olùkọ́ tí ó ní sùúrù: láti ṣàlàyé kóòdù, wá àṣìṣe àti dábàá èrò, nígbà tí ìwọ ṣì jẹ́ ẹni tí ó lóye ètò náà tí ó sì ń kọ ọ́.",
    "Kí o tó forúkọ sílẹ̀ fún irinṣẹ́ kankan, ṣàyẹ̀wò òfin ilé-ìwé rẹ nípa lílo AI àti ọjọ́ orí tó kéré jù tí irinṣẹ́ náà gbà, kí o sì kó òbí tàbí alágbàtọ́ rẹ mọ́ ọn. Ẹ̀kọ́ kọ̀ọ̀kan parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Kọ eré ìdánwò ìbéèrè ní Python nínú Google Colab, tí ó ní ó kéré tán ìbéèrè 5 nípa ohun tí o fẹ́ràn (eré kan, eré ìdárayá kan, ẹgbẹ́ olórin kan, tàbí ẹ̀kọ́ kan ní ilé-ìwé). Ó gbọ́dọ̀ béèrè orúkọ ẹni tí ń ṣeré, béèrè àwọn ìbéèrè náà, ka máàkì, kí ó sì kọ ọ̀rọ̀ ìparí jáde. Lo olùrànlọ́wọ́ AI láti ṣàlàyé tàbí tún apá kan ṣe ó kéré tán, lẹ́yìn náà kọ comment kan sókè apá kọ̀ọ̀kan tí ó sọ ní ọ̀rọ̀ ara rẹ ohun tí apá náà ń ṣe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ tí kò tíì kọ kóòdù rí, tàbí tí wọ́n gbìyànjú lẹ́ẹ̀kan tí ó sì há wọn, títí kan àwọn tí kò rò pé àwọn mọ ìṣirò dáadáa.",
    startingPoint: "Wọ́n ń lo fóònù, app àti eré lójoojúmọ́, wọ́n sì lè lo browser. Wọn kò tíì kọ tàbí ṣe ètò kọ̀mpútà kankan rí, ó sì lè jẹ́ pé wọ́n ti rí AI tí ó kọ kóòdù láìmọ bí ó ṣe ń ṣiṣẹ́.",
    gap: "Kíkọ kóòdù ń ṣí ọ̀nà sí iṣẹ́ ẹ̀rọ ìgbàlódé, ó sì ń jẹ́ kí AI má jẹ́ àdììtú mọ́, ṣùgbọ́n dída kóòdù AI kọ kò kọ́ni ní nǹkan kan, ó sì lòdì sí òfin ilé-ìwé ní ọ̀pọ̀ kíláàsì. Àwọn ọ̀dọ́ nílò láti kọ Python gidi kí wọ́n sì ṣe é fúnra wọn, kí wọ́n máa lo AI bí olùkọ́ láti ṣàlàyé kóòdù àti láti tún àṣìṣe ṣe.",
    constraints: [
      "Òdiwọ̀n ọjọ́ orí: Colab nílò àkáǹtì Google, àwọn irinṣẹ́ AI sì ní ọjọ́ orí tó kéré jù tí wọ́n gbà; òbí tàbí alágbàtọ́ máa ń wà níbẹ̀ fún àwọn tí kò tíì pé ọmọ ọdún 18",
      "Òfin AI ilé-ìwé yàtọ̀ síra; iṣẹ́ tí a ń fún ní máàkì lè má gba AI láàyè",
      "Ẹ̀rọ: kọ̀mpútà ilé-ìwé, ilé-ìkàwé tàbí ti ilé tí ó ní browser; kò sí nǹkan láti fi sórí ẹ̀rọ",
      "Ìsọfúnni àdáni: kò sí ọ̀rọ̀ aṣínà, àdírẹ́sì, nọ́mbà ìdánimọ̀ tàbí nọ́mbà fóònù tí a ó fi sínú irinṣẹ́ AI",
      "Àwọn olùbẹ̀rẹ̀: ọ̀rọ̀ tó rọrùn, àlàyé fún gbogbo ọ̀rọ̀ tuntun, nǹkan bí ìṣẹ́jú márùn-ún fún ẹ̀kọ́ kọ̀ọ̀kan"
    ],
    prerequisites: "Kò sí. \"Kí ni AI? (fún Àwọn Ọ̀dọ́)\" jẹ́ ẹ̀kọ́ àkọ́kọ́ tí ó wúlò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ní ọ̀rọ̀ ara rẹ", action: "ṣàlàyé ohun tí kóòdù àti ètò kọ̀mpútà jẹ́, àti bí o ṣe lè lo AI bí olùkọ́ dípò ẹni tí ó ń bá ọ ṣe iṣẹ́ rẹ, ní ìbámu pẹ̀lú òfin ilé-ìwé rẹ", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O2", condition: "Pẹ̀lú àkáǹtì Google tí a gbà ọ́ láàyè láti lò", action: "ṣí notebook Google Colab kí o sì ṣe kóòdù Python tí ó kọ ọ̀rọ̀ jáde", standard: "láìsí ìrànlọ́wọ́, kí èsì sì hàn lábẹ́ cell náà" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìdánwò ìbéèrè kan láti kọ", action: "kọ Python tí ó lo variable, input, if àti else, àti loop", standard: "tí ó fi ṣiṣẹ́ dáadáa pẹ̀lú ìdáhùn tó tọ̀nà àti èyí tí kò tọ̀nà" },
    { id: "O4", condition: "Tí a bá fún ọ ní ìlà kóòdù díẹ̀", action: "béèrè lọ́wọ́ olùrànlọ́wọ́ AI láti ṣàlàyé kóòdù náà ní ìlà kọ̀ọ̀kan, lẹ́yìn náà yí nǹkan kan padà, sọ ohun tí o rò pé yóò ṣẹlẹ̀, kí o sì ṣe é", standard: "láìfi ìsọfúnni àdáni kankan sínú rẹ̀" },
    { id: "O5", condition: "Tí a bá fún ọ ní ọ̀rọ̀ àṣìṣe (error message) Python", action: "wá ìlà tí ìṣòro wà, tún bug náà ṣe pẹ̀lú ìrànlọ́wọ́ AI tí ó bá yẹ, kí o sì ṣe àtúnṣe náà fúnra rẹ", standard: "títí ètò náà yóò fi ṣiṣẹ́ láìsí àṣìṣe" },
    { id: "O6", condition: "Bẹ̀rẹ̀ láti ètò tí a kọ bí comment", action: "kọ eré ìdánwò ìbéèrè 5 ní apá kan lẹ́ẹ̀kan, kí o sì sọ bí o ṣe lo AI", standard: "pẹ̀lú orúkọ ẹni tí ń ṣeré, máàkì, ọ̀rọ̀ ìparí àti comment sókè apá kọ̀ọ̀kan ní ọ̀rọ̀ ara rẹ" }
  ],
  chapters: [
    {
      name: "Orí 1: Àwọn ìlà kóòdù àkọ́kọ́ rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí kóòdù jẹ́, àti ibi tí AI ti wúlò",
          minutes: 4,
          goal: "Ṣàlàyé ohun tí ètò kọ̀mpútà jẹ́ àti bí olùrànlọ́wọ́ AI ṣe lè ràn ọ́ lọ́wọ́ láti kọ́ kíkọ kóòdù.",
          text: [
            "Kóòdù jẹ́ àkọsílẹ̀ ìtọ́ni tí kọ̀mpútà ń tẹ̀lé gẹ́lẹ́, ní ṣísẹ̀ntẹ̀lé. Ètò kọ̀mpútà (program) jẹ́ àkójọ irú ìtọ́ni bẹ́ẹ̀ tí ó ń ṣe iṣẹ́ kan, bí eré, app tàbí ẹ̀rọ ìṣirò. Python jẹ́ èdè kóòdù tí ọ̀pọ̀ ènìyàn ń lò nítorí pé àwọn ọ̀rọ̀ rẹ̀ jọ èdè Gẹ̀ẹ́sì gan-an.",
            "Àwọn olùrànlọ́wọ́ AI bí ChatGPT, Microsoft Copilot àti Google Gemini lè kọ kóòdù kí wọ́n sì ṣàlàyé rẹ̀. Ìyẹn wúlò, ṣùgbọ́n tí o bá da kóòdù tí kò yé ọ kọ, o kò kọ́ nǹkan kan, o kò sì ní lè tún un ṣe nígbà tí ó bá bàjẹ́. Nínú ẹ̀kọ́ yìí, AI ni olùkọ́ rẹ, kì í ṣe ẹni tí ó ń bá ọ ṣe iṣẹ́ rẹ.",
            "Òfin àwọn ilé-ìwé nípa AI yàtọ̀ síra. Àwọn kíláàsì kan gbà á láàyè fún àṣeṣe ṣùgbọ́n kì í ṣe fún iṣẹ́ tí a ń fún ní máàkì. Máa ṣàyẹ̀wò òfin olùkọ́ rẹ nígbà gbogbo, kí o sì sọ nígbà tí o bá lo AI. Ọ̀pọ̀ irinṣẹ́ AI tún ní ọjọ́ orí tó kéré jù tí wọ́n gbà, nítorí náà ka òfin irinṣẹ́ náà kí o sì béèrè lọ́wọ́ òbí tàbí alágbàtọ́ rẹ kí o tó forúkọ sílẹ̀."
          ],
          words: [["Kóòdù (code)", "ìtọ́ni tí a kọ fún kọ̀mpútà láti tẹ̀lé."], ["Ètò kọ̀mpútà (program)", "àkójọ ìtọ́ni tí ó ń ṣe iṣẹ́ kan."], ["Python", "èdè kóòdù tí ọ̀pọ̀ ènìyàn ń lò tí ó sì rọrùn láti kà."]],
          slides: [
            { title: "Kóòdù jẹ́ ìtọ́ni", bullets: ["Kọ̀mpútà ń tẹ̀lé e gẹ́lẹ́, ní ṣísẹ̀ntẹ̀lé", "Ètò kọ̀mpútà jẹ́ kóòdù tí ó ń ṣe iṣẹ́ kan", "Python jọ èdè Gẹ̀ẹ́sì gan-an"] },
            { title: "AI ni olùkọ́ rẹ", bullets: ["Ó lè ṣàlàyé kóòdù ní ìlà kọ̀ọ̀kan", "Ó lè ràn ọ́ lọ́wọ́ láti wá àṣìṣe", "Má ṣe da kóòdù tí kò yé ọ kọ"] },
            { title: "Kí o tó bẹ̀rẹ̀", bullets: ["Ṣàyẹ̀wò òfin AI ilé-ìwé rẹ", "Ṣàyẹ̀wò ọjọ́ orí tó kéré jù tí irinṣẹ́ náà gbà", "Béèrè lọ́wọ́ òbí tàbí alágbàtọ́ kí o tó forúkọ sílẹ̀"] }
          ],
          tryIt: "Kọ ètò kọ̀mpútà kékeré kan sílẹ̀ tí o fẹ́ kọ lọ́jọ́ kan, bí ìdánwò ìbéèrè nípa eré tí o fẹ́ràn jù, tàbí ẹ̀rọ ìṣirò owó ìmoore (tip) fún iṣẹ́ àkọ́kọ́ rẹ. Lẹ́yìn náà kọ gbólóhùn kan nípa bí AI ṣe lè ràn ọ́ lọ́wọ́ láti kọ́ ọ láìjẹ́ pé òun ló ṣe é fún ọ.",
          youCanNow: "sọ ohun tí kóòdù àti ètò kọ̀mpútà jẹ́, kí o sì ṣàlàyé bí o ṣe lè lo AI bí olùkọ́ dípò ọ̀nà àbùjá.",
          quickCheck: [
            { objective: "O1", q: "Kí ló dé tí Python fi jẹ́ èdè kóòdù àkọ́kọ́ tí ọ̀pọ̀ ènìyàn fẹ́ràn?", options: ["Lórí fóònù nìkan ni ó ń ṣiṣẹ́", "Kò nílò kọ̀mpútà", "Àwọn ọ̀rọ̀ rẹ̀ jọ èdè Gẹ̀ẹ́sì gan-an", "Ó ń kọ ara rẹ̀"], answer: 2, why: "Àwọn ọ̀rọ̀ Python jọ èdè Gẹ̀ẹ́sì gan-an, èyí sì jẹ́ kí ó rọrùn láti kà." },
            { objective: "O1", q: "Ọ̀rẹ́ kan sọ pé, \"Jẹ́ kí AI kọ gbogbo ètò rẹ kí o sì fi í sílẹ̀ fún olùkọ́.\" Kí ni o máa sọ?", options: ["Màá lo AI bí olùkọ́, màá sì kọ kóòdù náà fúnra mi, ní ìbámu pẹ̀lú òfin olùkọ́ mi", "Èrò dáadáa ni; kò sí ẹni tí yóò mọ̀", "Tí ó bá dà bí ẹni pé ó ṣòro nìkan", "Màá dà á kọ ṣùgbọ́n màá yí àwọn orúkọ padà"], answer: 0, why: "Dída kóòdù tí kò yé ọ kọ kò kọ́ ọ ní nǹkan kan, ó sì lè lòdì sí òfin ilé-ìwé." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣe kóòdù Python àkọ́kọ́ rẹ nínú Google Colab",
          minutes: 5,
          goal: "Ṣí notebook Colab ọ̀fẹ́ kí o sì ṣe ìlà Python kan.",
          text: [
            "Google Colab jẹ́ notebook ọ̀fẹ́ tí ó ń ṣe Python nínú browser rẹ. O kò nílò láti fi nǹkan kan sórí ẹ̀rọ. O nílò àkáǹtì Google. Ṣàyẹ̀wò òfin ọjọ́ orí rẹ̀, tí o kò bá sì tíì pé ọmọ ọdún 18, kọ́kọ́ béèrè lọ́wọ́ òbí tàbí alágbàtọ́ rẹ; àkáǹtì Google ilé-ìwé lè ṣiṣẹ́ tí ilé-ìwé rẹ bá gba Colab láàyè.",
            "Notebook ní àwọn cell nínú. Cell kóòdù jẹ́ àpótí tí o ti ń tẹ Python. O tẹ bọ́tìnnì play tí ó wà lẹ́gbẹ̀ẹ́ cell náà (tàbí Shift àti Enter) láti ṣe é, èsì rẹ̀ sì máa hàn nísàlẹ̀.",
            "Àṣẹ àkọ́kọ́ tí ọ̀pọ̀ àwọn tó ń kọ kóòdù ń kọ́ ni print. Ó ń fi ọ̀rọ̀ hàn lójú iboju. Ọ̀rọ̀ máa ń wà láàárín àmì ìfàyọ̀ (quotes), báyìí: print(\"Hello, I am learning Python\")."
          ],
          steps: ["Ṣí browser kí o sì lọ sí colab.research.google.com.", "Wọlé (sign in) pẹ̀lú àkáǹtì Google tí a gbà ọ́ láàyè láti lò.", "Ṣẹ̀dá notebook tuntun.", "Tẹ inú cell kóòdù àkọ́kọ́ kí o sì kọ: print(\"Hello, I am learning Python\")", "Tẹ bọ́tìnnì play tàbí Shift àti Enter. Ka èsì tí ó hàn lábẹ́ cell náà."],
          words: [["Notebook", "ojú-ewé tí o ti ń kọ kóòdù tí o sì ń ṣe é nínú àwọn àpótí kékeré tí a ń pè ní cell."], ["Cell", "àpótí kan nínú notebook tí o ti ń tẹ kóòdù."], ["Èsì (output)", "ohun tí ètò náà fi hàn lẹ́yìn tí ó ṣiṣẹ́."]],
          slides: [
            { title: "Google Colab", bullets: ["Python ọ̀fẹ́ nínú browser rẹ", "Kò sí nǹkan láti fi sórí ẹ̀rọ", "Ó nílò àkáǹtì Google tí a gbà ọ́ láàyè láti lò"] },
            { title: "Notebook àti cell", bullets: ["Tẹ kóòdù sínú cell", "Tẹ play tàbí Shift + Enter", "Èsì máa hàn nísàlẹ̀"] },
            { title: "Àṣẹ àkọ́kọ́ rẹ", bullets: ["print(\"Hello, I am learning Python\")", "Ọ̀rọ̀ máa ń wà láàárín àmì ìfàyọ̀ (quotes)", "print ń fi í hàn lójú iboju"] }
          ],
          tryIt: "Nínú notebook Colab tuntun, kọ ìlà mẹ́ta jáde pẹ̀lú print: orúkọ àkọ́kọ́ rẹ, orin tàbí eré tí o fẹ́ràn jù, àti àfojúsùn kan fún ẹ̀kọ́ yìí. Ṣe cell náà kí o sì ṣàyẹ̀wò pé gbogbo ìlà mẹ́tẹ̀ẹ̀ta hàn.",
          youCanNow: "ṣí notebook Colab, tẹ Python sínú cell, ṣe é, kí o sì ka èsì rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Nínú Python, kí ni print ń ṣe?", options: ["Ó ń fi kóòdù rẹ ránṣẹ́ sí ẹ̀rọ ìtẹ̀wé", "Ó ń fi ọ̀rọ̀ tàbí iye hàn lójú iboju", "Ó ń pa cell rẹ́", "Ó ń fi notebook pamọ́"], answer: 1, why: "print ń fi ọ̀rọ̀ tàbí iye hàn lábẹ́ cell nígbà tí ó bá ṣiṣẹ́." },
            { objective: "O2", q: "Ọmọ ọdún 14 ni ọ́, o sì fẹ́ lo Colab nílé. Kí ni o máa kọ́kọ́ ṣe?", options: ["Ṣe àkáǹtì pẹ̀lú ọjọ́ orí èké", "Lo àkáǹtì àjèjì kan", "Fi Colab sílẹ̀", "Ṣàyẹ̀wò òfin ọjọ́ orí kí o sì béèrè lọ́wọ́ òbí tàbí alágbàtọ́, tàbí lo àkáǹtì ilé-ìwé tí a gbà láàyè"], answer: 3, why: "Colab nílò àkáǹtì Google; ṣàyẹ̀wò òfin rẹ̀ kí o sì kó òbí tàbí alágbàtọ́ mọ́ ọn tí o kò bá tíì pé ọmọ ọdún 18." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Variable, input, if àti loop",
          minutes: 6,
          goal: "Lo variable, béèrè input, ṣe ìpinnu pẹ̀lú if, kí o sì tún nǹkan ṣe pẹ̀lú loop.",
          text: [
            "Variable jẹ́ àpótí tí ó ní orúkọ tí ó ń tọ́jú iye kan. score = 0 ń ṣe àpótí kan tí a ń pè ní score, ó sì fi 0 sínú rẹ̀. Lẹ́yìn náà, score = score + 1 ń fi máàkì kan kún un.",
            "input ń ní kí ẹni tí ń ṣeré tẹ nǹkan kan: name = input(\"What is your name? \"). Gbólóhùn if ń ṣe ìpinnu: if answer == \"Paris\": print(\"Correct!\") else: print(\"Not quite\"). Àmì ìdọ́gba méjì túmọ̀ sí \"jẹ́ ọ̀kan náà pẹ̀lú\". A máa ń ti àwọn ìlà tí ó wà lábẹ́ if àti else wọlé pẹ̀lú àlàfo; èyí ni a ń pè ní indentation, Python sì nílò rẹ̀.",
            "Loop ń tún kóòdù ṣe léraléra. for i in range(3): print(\"Go team!\") ń kọ ọ̀rọ̀ ìyìn náà jáde lẹ́ẹ̀mẹ́ta. Èrò mẹ́rin wọ̀nyí, variable, input, if àti loop, tó láti kọ eré ìdánwò ìbéèrè."
          ],
          steps: ["Ṣe variable kan: score = 0", "Béèrè input: name = input(\"What is your name? \")", "Ṣe ìpinnu pẹ̀lú if àti else, kí o sì ti àwọn ìlà tí ó wà lábẹ́ ọ̀kọ̀ọ̀kan wọlé.", "Tún nǹkan kan ṣe pẹ̀lú: for i in range(3):"],
          words: [["Variable", "àpótí tí ó ní orúkọ tí ó ń tọ́jú iye kan."], ["Input", "ohun tí olùlò tẹ̀ sínú ètò nígbà tí ó ń ṣiṣẹ́."], ["Gbólóhùn if (if statement)", "kóòdù tí ó ń ṣiṣẹ́ nìkan nígbà tí nǹkan kan bá jẹ́ òótọ́."], ["Loop", "kóòdù tí ó ń tún ara rẹ̀ ṣe."], ["Indentation", "àlàfo ní ìbẹ̀rẹ̀ ìlà tí ó ń fi hàn àwọn ìlà tí ó jẹ́ ti ara wọn."]],
          slides: [
            { title: "Variable ń tọ́jú iye", bullets: ["score = 0", "score = score + 1 ń fi máàkì kan kún un"] },
            { title: "Input àti if", bullets: ["name = input(\"What is your name? \")", "if answer == \"Paris\": lẹ́yìn náà kọ Correct jáde", "== túmọ̀ sí \"jẹ́ ọ̀kan náà pẹ̀lú\""] },
            { title: "Loop ń tún nǹkan ṣe", bullets: ["for i in range(3): ń tún nǹkan ṣe lẹ́ẹ̀mẹ́ta", "Ti àwọn ìlà tí ó wà nínú loop wọlé"] },
            { title: "Ìpìlẹ̀ mẹ́rin", bullets: ["Variable, input, if, loop", "Ó tó láti kọ eré ìdánwò ìbéèrè"] }
          ],
          tryIt: "Kọ ìdánwò ìbéèrè kan: béèrè orúkọ ẹni tí ń ṣeré, béèrè ìbéèrè kan nípa ẹ̀kọ́ tàbí eré tí o fẹ́ràn jù, kí o sì lo if àti else láti kọ \"Correct\" tàbí \"Not quite\" jáde. Ṣe é lẹ́ẹ̀mejì, ẹ̀ẹ̀kan pẹ̀lú ìdáhùn tó tọ̀nà àti ẹ̀ẹ̀kan pẹ̀lú èyí tí kò tọ̀nà.",
          youCanNow: "lo variable, input, gbólóhùn if àti loop nínú ètò Python kékeré kan.",
          quickCheck: [
            { objective: "O3", q: "Kí ni indentation nínú Python?", options: ["Irú àṣìṣe kan", "Àlàfo tí ó ń ti àwọn ìlà wọlé lábẹ́ if, else tàbí loop", "Ìlà comment", "Bọ́tìnnì play"], answer: 1, why: "Indentation ń fi hàn àwọn ìlà tí ó jẹ́ ti if, else tàbí loop, Python sì nílò rẹ̀." },
            { objective: "O3", q: "O fẹ́ kí ìdánwò náà fi máàkì kan kún un fún ìdáhùn tó tọ̀nà. Ìlà wo ni o máa kọ lábẹ́ if?", options: ["score = score + 1", "print(score)", "score == 1", "input(score)"], answer: 0, why: "score = score + 1 ń fi máàkì kan kún iye tí ó wà nínú score." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àwọn ìlà kóòdù àkọ́kọ́ rẹ",
        questions: [
          { objective: "O1", q: "Kí ni ètò kọ̀mpútà (program)?", options: ["Àkójọ ìtọ́ni tí ó ń ṣe iṣẹ́ kan", "Irú kíbọ́ọ̀dù kan", "Àdírẹ́sì ojú-òpó wẹ́ẹ̀bù", "Ẹ̀rọ eré fídíò"], answer: 0, why: "Ètò kọ̀mpútà jẹ́ kóòdù, àkójọ ìtọ́ni, tí ó ń ṣe iṣẹ́ kan." },
          { objective: "O1", q: "Kíláàsì rẹ gba AI láàyè fún àṣeṣe ṣùgbọ́n kì í ṣe fún iṣẹ́ àṣetiléwá tí a ń fún ní máàkì. Kí ni o máa ṣe?", options: ["Lo AI fún iṣẹ́ àṣetiléwá náà bákan náà", "Lo AI fún àṣeṣe, kí o sì ṣe iṣẹ́ tí a ń fún ní máàkì fúnra rẹ", "Má ṣe kọ kóòdù mọ́ láéláé", "Ní kí ọ̀rẹ́ kan lo AI fún ọ"], answer: 1, why: "Títẹ̀lé òfin olùkọ́ rẹ jẹ́ apá kan lílo AI pẹ̀lú òtítọ́." },
          { objective: "O2", q: "Nínú Colab, báwo ni o ṣe ń ṣe cell kóòdù?", options: ["Pa browser dé", "Tẹ ojú-ewé náà jáde", "Tẹ bọ́tìnnì play tàbí Shift àti Enter", "Tún kọ̀mpútà bẹ̀rẹ̀"], answer: 2, why: "Bọ́tìnnì play tàbí Shift àti Enter ló ń ṣe cell náà." },
          { objective: "O3", q: "Kí ni score = score + 1 ń ṣe?", options: ["Ó ń pa máàkì rẹ́", "Ó ń kọ ọ̀rọ̀ score jáde", "Ó ń béèrè máàkì lọ́wọ́ ẹni tí ń ṣeré", "Ó ń fi ọ̀kan kún iye tí ó wà nínú score"], answer: 3, why: "Ó ń mú máàkì tí ó wà báyìí, ó sì ń fi ọ̀kan kún un." },
          { objective: "O3", q: "Kí ni for i in range(3): ń ṣe?", options: ["Ó ń tún kóòdù tí a ti wọlé ṣe lẹ́ẹ̀mẹ́ta", "Ó ń béèrè ìbéèrè 3", "Ó ń ṣe variable 3", "Ó ń dá ètò náà dúró"], answer: 0, why: "Loop for pẹ̀lú range(3) ń tún kóòdù tí ó wà nínú rẹ̀ ṣe lẹ́ẹ̀mẹ́ta." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ kóòdù pẹ̀lú olùrànlọ́wọ́ AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bíbéèrè lọ́wọ́ AI láti ṣàlàyé kóòdù",
          minutes: 5,
          goal: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI láti ṣàlàyé kóòdù ní ìlà kọ̀ọ̀kan, kí o sì ṣàyẹ̀wò pé ó yé ọ.",
          text: [
            "Fi ìlà kóòdù díẹ̀ sínú olùrànlọ́wọ́ AI kí o sì béèrè pé: \"Ṣàlàyé kóòdù Python yìí ní ìlà kọ̀ọ̀kan fún olùbẹ̀rẹ̀. Lo ọ̀rọ̀ tó rọrùn.\" Àlàyé tó dára máa sọ ohun tí ìlà kọ̀ọ̀kan ń ṣe àti ìdí rẹ̀.",
            "Lẹ́yìn náà dán òye rẹ wò. Yí nǹkan kan padà nínú kóòdù náà, fojú sọ ohun tí yóò ṣẹlẹ̀, kí o sì ṣe é. Tí ohun tí o fojú sọ bá tọ̀nà, ó yé ọ. Tí kò bá rí bẹ́ẹ̀, béèrè lọ́wọ́ AI pé: \"Mo yí èyí padà, mo sì retí ìyẹn. Kí ló dé tí ó fi ṣe nǹkan míì?\"",
            "Má ṣe fi ìsọfúnni àdáni sínú irinṣẹ́ AI: kò sí ọ̀rọ̀ aṣínà, àdírẹ́sì ilé, nọ́mbà ìdánimọ̀ ilé-ìwé tàbí nọ́mbà fóònù. Kóòdù fún iṣẹ́ kíláàsì kò nílò èyíkéyìí nínú wọn."
          ],
          steps: ["Da ìlà kóòdù 3 sí 10 kọ.", "Béèrè pé: \"Ṣàlàyé kóòdù Python yìí ní ìlà kọ̀ọ̀kan fún olùbẹ̀rẹ̀.\"", "Yí nǹkan kan padà kí o sì fojú sọ ohun tí yóò ṣẹlẹ̀.", "Ṣe é kí o sì fi wé ohun tí o retí. Béèrè ìbéèrè àtẹ̀lé tí ohun tí o fojú sọ kò bá tọ̀nà."],
          words: [["Ṣàlàyé ní ìlà kọ̀ọ̀kan", "lọ nínú kóòdù ní ìlà kan lẹ́ẹ̀kan, kí o sì sọ ohun tí ọ̀kọ̀ọ̀kan ń ṣe."]],
          slides: [
            { title: "Béèrè àlàyé", bullets: ["Fi ìlà díẹ̀ sínú rẹ̀", "\"Ṣàlàyé èyí ní ìlà kọ̀ọ̀kan fún olùbẹ̀rẹ̀\"", "Béèrè fún ọ̀rọ̀ tó rọrùn"] },
            { title: "Dán òye rẹ wò", bullets: ["Yí nǹkan kan padà", "Fojú sọ ohun tí yóò ṣẹlẹ̀", "Ṣe é kí o sì fi wé e"] },
            { title: "Pa ìsọfúnni àdáni mọ́", bullets: ["Kò sí ọ̀rọ̀ aṣínà tàbí nọ́mbà ìdánimọ̀ ilé-ìwé", "Kò sí àdírẹ́sì ilé tàbí nọ́mbà fóònù"] }
          ],
          tryIt: "Fi ìdánwò ìbéèrè kan rẹ láti Ẹ̀kọ́ 3 sínú olùrànlọ́wọ́ AI kí o sì ní kí ó ṣàlàyé ìlà kọ̀ọ̀kan. Lẹ́yìn náà yí ìdáhùn tó tọ̀nà padà sí òmíràn, fojú sọ ohun tí yóò ṣẹlẹ̀, kí o sì ṣe é.",
          youCanNow: "gba àlàyé kóòdù tó yé ní ìlà kọ̀ọ̀kan lọ́wọ́ AI, kí o sì dán an wò pé ó yé ọ lóòótọ́.",
          quickCheck: [
            { objective: "O4", q: "Kí ló ń jẹ́ kí àlàyé kóòdù láti ọ̀dọ̀ AI dára?", options: ["Ó gùn tó bí ó ti lè gùn tó", "Ó ń fúnni ní ìdáhùn nìkan", "Ó ń sọ ohun tí ìlà kọ̀ọ̀kan ń ṣe àti ìdí rẹ̀", "Ó ń tún gbogbo rẹ̀ kọ"], answer: 2, why: "Àlàyé tó dára ń sọ ohun tí ìlà kọ̀ọ̀kan ń ṣe àti ìdí rẹ̀, ní ọ̀rọ̀ tó rọrùn." },
            { objective: "O4", q: "O yí ìlà kan padà, o fojú sọ èsì rẹ̀, ètò náà sì ṣe nǹkan míì. Kí ló kàn?", options: ["Pa ètò náà rẹ́", "Béèrè lọ́wọ́ AI pé: \"Mo yí èyí padà, mo sì retí ìyẹn. Kí ló dé tí ó fi ṣe nǹkan míì?\"", "Tún fojú sọ láìṣe é", "Fi ọ̀rọ̀ aṣínà rẹ sínú rẹ̀ kí AI lè ṣàyẹ̀wò"], answer: 1, why: "Ìbéèrè àtẹ̀lé tí ó ṣàlàyé ohun tí o retí ń jẹ́ kí kóòdù náà yé ọ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Wíwá àti títún àṣìṣe ṣe pẹ̀lú AI",
          minutes: 5,
          goal: "Ka ọ̀rọ̀ àṣìṣe kí o sì lo AI láti ràn ọ́ lọ́wọ́ tún bug ṣe.",
          text: [
            "Bug jẹ́ àṣìṣe nínú kóòdù. Nígbà tí Python kò bá lè ṣe ìlà kan, ó máa fi ọ̀rọ̀ àṣìṣe (error message) hàn. Ìlà ìkẹyìn ọ̀rọ̀ náà sábà máa ń dárúkọ ìṣòro náà, bí SyntaxError (a tẹ nǹkan kan lọ́nà tí kò tọ́) tàbí IndentationError (àlàfo ní ìbẹ̀rẹ̀ ìlà kan kò tọ́). Ó tún máa ń fi nọ́mbà ìlà náà hàn.",
            "Kọ́kọ́ gbìyànjú fúnra rẹ: wo ìlà yẹn bóyá àmì ìfàyọ̀ (quote), àkámọ́ (bracket), kọ́lọ̀nù (colon) tàbí àlàfo kan sọnù. Tí ó bá há ọ, fi kóòdù náà àti gbogbo ọ̀rọ̀ àṣìṣe náà sínú olùrànlọ́wọ́ AI kí o sì béèrè pé: \"Kí ni àṣìṣe yìí túmọ̀ sí, báwo ni mo ṣe lè tún un ṣe? Ṣàlàyé ìdí rẹ̀.\"",
            "AI náà lè ṣàṣìṣe nípa kóòdù. Ṣe ẹ̀dà tí a tún ṣe fúnra rẹ. Tí àṣìṣe náà bá yí padà tàbí tí ó bá ṣì wà, sọ ohun tí ó ṣẹlẹ̀ gẹ́lẹ́ fún AI."
          ],
          steps: ["Ka ìlà ìkẹyìn ọ̀rọ̀ àṣìṣe náà àti nọ́mbà ìlà.", "Ṣàyẹ̀wò ìlà yẹn bóyá àmì ìfàyọ̀, àkámọ́, kọ́lọ̀nù tàbí àlàfo sọnù.", "Tí ó bá há ọ, fi kóòdù náà àti gbogbo ọ̀rọ̀ àṣìṣe náà sínú olùrànlọ́wọ́ AI.", "Béèrè ohun tí ó túmọ̀ sí àti ìdí tí àtúnṣe náà fi ṣiṣẹ́.", "Ṣe àtúnṣe náà fúnra rẹ kí o sì ṣàyẹ̀wò pé ó ṣiṣẹ́."],
          words: [["Bug", "àṣìṣe nínú kóòdù."], ["Ọ̀rọ̀ àṣìṣe (error message)", "àkíyèsí Python tí ó ń sọ ohun tí kò lọ dáadáa àti ìlà tí ó ti ṣẹlẹ̀."], ["Debugging", "wíwá àti títún bug ṣe."]],
          slides: [
            { title: "Bug ń ṣẹlẹ̀ sí gbogbo ènìyàn", bullets: ["Ọ̀rọ̀ àṣìṣe jẹ́ àmì ìtọ́sọ́nà, kì í ṣe ìkùnà", "Ka ìlà ìkẹyìn àti nọ́mbà ìlà"] },
            { title: "Kọ́kọ́ gbìyànjú fúnra rẹ", bullets: ["Ṣé àmì ìfàyọ̀ tàbí àkámọ́ sọnù?", "Ṣé kọ́lọ̀nù sọnù lẹ́yìn if tàbí for?", "Ṣé àlàfo ní ìbẹ̀rẹ̀ ìlà kò tọ́?"] },
            { title: "Lẹ́yìn náà béèrè lọ́wọ́ AI", bullets: ["Fi kóòdù náà àti gbogbo àṣìṣe náà sínú rẹ̀", "Béèrè ohun tí ó túmọ̀ sí àti ìdí tí àtúnṣe fi ṣiṣẹ́", "Ṣe àtúnṣe náà fúnra rẹ"] }
          ],
          tryIt: "Nínú ìdánwò ìbéèrè rẹ, mọ̀ọ́mọ̀ pa kọ́lọ̀nù tí ó wà lẹ́yìn ìlà if rẹ́ kí o sì ṣe é. Ka àṣìṣe náà. Ní kí olùrànlọ́wọ́ AI ṣàlàyé rẹ̀, tún un ṣe, kí o sì tún ṣe ètò náà.",
          youCanNow: "ka ọ̀rọ̀ àṣìṣe Python, wá ìṣòro náà, kí o sì lo AI láti lóye bug kí o sì tún un ṣe.",
          quickCheck: [
            { objective: "O5", q: "Kí ni SyntaxError sábà máa ń túmọ̀ sí?", options: ["Kọ̀mpútà ti bàjẹ́", "Íńtánẹ́ẹ̀tì kò ṣiṣẹ́", "Ìdáhùn rẹ kò tọ̀nà", "A tẹ nǹkan kan lọ́nà tí kò tọ́, bí àmì ìfàyọ̀ tàbí kọ́lọ̀nù tí ó sọnù"], answer: 3, why: "SyntaxError túmọ̀ sí pé Python kò lè ka nǹkan kan tí o tẹ̀." },
            { objective: "O5", q: "Python fi àṣìṣe hàn ní ìlà 4. Kí ni o máa kọ́kọ́ ṣàyẹ̀wò?", options: ["Ìlà 4, bóyá àmì ìfàyọ̀, àkámọ́, kọ́lọ̀nù tàbí àlàfo sọnù", "Ìlà 1 nìkan", "Ìyára íńtánẹ́ẹ̀tì rẹ", "Kò sí nǹkan; tún kọ̀mpútà bẹ̀rẹ̀"], answer: 0, why: "Ọ̀rọ̀ náà ń fi nọ́mbà ìlà hàn; kọ́kọ́ ṣàyẹ̀wò ìlà yẹn fúnra rẹ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kíkọ eré ìdánwò ìbéèrè rẹ",
          minutes: 6,
          goal: "Ṣètò kí o sì kọ eré ìdánwò ìbéèrè 5 pẹ̀lú AI bí olùrànlọ́wọ́.",
          text: [
            "Àwọn ètò ńlá ni a fi àwọn apá kékeré kọ. Kọ́kọ́ ṣètò: ohun tí ètò náà máa kọ́kọ́ sọ, ohun tí ó máa béèrè, bí ó ṣe máa ka máàkì, àti ohun tí ó máa sọ ní ìparí. Kọ ètò náà bí comment kúkúrú. Comment máa ń bẹ̀rẹ̀ pẹ̀lú #, Python kì í sì ka á sí.",
            "Kọ apá kan lẹ́ẹ̀kan, kí o sì ṣe é lẹ́yìn apá kọ̀ọ̀kan. Tí o bá fẹ́ èrò kan, béèrè lọ́wọ́ AI pé: \"Báwo ni mo ṣe lè jẹ́ kí ìdánwò mi sọ máàkì ẹni tí ń ṣeré nínú 5?\" Lẹ́yìn náà kọ ọ́ fúnra rẹ kí o sì ní kí AI ṣàyẹ̀wò rẹ̀.",
            "Nígbà tí ó bá ṣiṣẹ́, ní kí ọ̀rẹ́ tàbí ẹnìkan nínú ẹbí rẹ ṣe é. Wo ibi tí ó ti rú wọn lójú, kí o sì mú un dára sí i. Tí o bá fi í sílẹ̀ fún ilé-ìwé, sọ bí o ṣe lo AI."
          ],
          steps: ["Kọ ètò kan bí comment #: ìkíni, àwọn ìbéèrè, máàkì, ìparí.", "Kọ kóòdù ìkíni kí o sì béèrè orúkọ ẹni tí ń ṣeré. Ṣe é.", "Fi ìbéèrè kan kún un pẹ̀lú if àti else tí ó ń yí máàkì padà. Ṣe é.", "Fi ìbéèrè mẹ́rin míì kún un. Ṣe é.", "Kọ máàkì ìkẹyìn àti ọ̀rọ̀ kan jáde. Jẹ́ kí ẹnìkan ṣe é."],
          words: [["Comment", "àkíyèsí nínú kóòdù tí ó bẹ̀rẹ̀ pẹ̀lú #, tí Python kò sì kà sí."], ["Ètò (plan)", "àkọsílẹ̀ kúkúrú ohun tí ètò kọ̀mpútà rẹ máa ṣe, ní ṣísẹ̀ntẹ̀lé."]],
          slides: [
            { title: "Ṣètò pẹ̀lú comment", bullets: ["# welcome", "# ask 5 questions", "# keep score", "# final message"] },
            { title: "Kọ ọ́ ní apá kékeré", bullets: ["Fi apá kan kún un", "Ṣe é", "Tún un ṣe, lẹ́yìn náà fi èyí tí ó kàn kún un"] },
            { title: "AI bí olùrànlọ́wọ́", bullets: ["Béèrè èrò, lẹ́yìn náà kọ ọ́ fúnra rẹ", "Ní kí AI ṣàyẹ̀wò kóòdù rẹ", "Sọ bí o ṣe lo AI nínú iṣẹ́ ilé-ìwé"] },
            { title: "Dán an wò pẹ̀lú ẹni gidi", bullets: ["Jẹ́ kí ọ̀rẹ́ kan ṣe é", "Wo ibi tí ó ti rú wọn lójú", "Mú un dára sí i"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ eré ìdánwò ìbéèrè ní Python nínú Colab tí ó ní ó kéré tán ìbéèrè 5 nípa ohun tí o fẹ́ràn. Béèrè orúkọ ẹni tí ń ṣeré, ka máàkì, kọ ọ̀rọ̀ ìparí jáde, lo AI láti ṣàlàyé tàbí tún apá kan ṣe, kí o sì kọ comment sókè apá kọ̀ọ̀kan ní ọ̀rọ̀ ara rẹ.",
          youCanNow: "ṣètò, kọ, dán wò, kí o sì ṣàlàyé ètò Python kékeré kan, ní lílo AI bí olùrànlọ́wọ́ kì í ṣe bí ẹni tí ó gba ipò rẹ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni comment nínú Python?", options: ["Ìlà tí ó ń kọ ọ̀rọ̀ jáde", "Irú loop kan", "Ìlà tí ó bẹ̀rẹ̀ pẹ̀lú # tí Python kò kà sí", "Ọ̀rọ̀ àṣìṣe"], answer: 2, why: "Comment máa ń bẹ̀rẹ̀ pẹ̀lú #, wọ́n sì jẹ́ àkíyèsí fún ènìyàn, kì í ṣe ìtọ́ni fún Python." },
            { objective: "O6", q: "O ti parí eré ìdánwò ìbéèrè náà. Kí ni ìgbésẹ̀ tó dára tí ó kàn?", options: ["Má ṣe é láéláé", "Pa àwọn comment rẹ́", "Ní kí AI tún gbogbo rẹ̀ kọ", "Jẹ́ kí ọ̀rẹ́ kan ṣe é kí o sì wo ibi tí ó ti rú wọn lójú"], answer: 3, why: "Wíwo ẹnìkan bí ó ṣe ń ṣe é ń fi ohun tí o yẹ kí o mú dára sí i hàn ọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ kóòdù pẹ̀lú olùrànlọ́wọ́ AI",
        questions: [
          { objective: "O4", q: "Kí ni ọ̀nà tó dára láti béèrè lọ́wọ́ AI nípa kóòdù tí kò yé ọ?", options: ["\"Ṣe iṣẹ́ àṣetiléwá mi\"", "\"Ṣàlàyé kóòdù Python yìí ní ìlà kọ̀ọ̀kan fún olùbẹ̀rẹ̀\"", "\"Kóòdù\"", "\"Jẹ́ kí ó gùn sí i\""], answer: 1, why: "Ìbéèrè tó yé fún àlàyé ní ìlà kọ̀ọ̀kan ń ràn ọ́ lọ́wọ́ láti kẹ́kọ̀ọ́." },
          { objective: "O4", q: "Báwo ni o ṣe lè ṣàyẹ̀wò pé kóòdù kan yé ọ lóòótọ́?", options: ["Yí nǹkan kan padà, fojú sọ èsì rẹ̀, lẹ́yìn náà ṣe é", "Kà á lẹ́ẹ̀kan kíákíá", "Pa á rẹ́", "Ní kí AI sọ pé ó yé ọ"], answer: 0, why: "Fífojú sọ èsì àti dídán an wò ń fi hàn bóyá ó yé ọ lóòótọ́." },
          { objective: "O5", q: "Python fi ọ̀rọ̀ àṣìṣe hàn. Ibo ni o máa kọ́kọ́ wò?", options: ["Ọ̀rọ̀ àkọ́kọ́ lójú iboju", "Ibi àdírẹ́sì browser", "Ìlà ìkẹyìn ọ̀rọ̀ náà àti nọ́mbà ìlà", "Kíbọ́ọ̀dù"], answer: 2, why: "Ìlà ìkẹyìn ń dárúkọ ìṣòro náà, nọ́mbà ìlà sì ń fi ibi tí ó wà hàn." },
          { objective: "O5", q: "AI fún ọ ní àtúnṣe fún bug rẹ. Kí ló kàn?", options: ["Gbà pé ó ṣiṣẹ́", "Fi í sílẹ̀ láìṣe é", "Pa ètò rẹ rẹ́", "Ṣe é fúnra rẹ kí o sì ṣàyẹ̀wò pé ó ṣiṣẹ́"], answer: 3, why: "AI lè ṣàṣìṣe, nítorí náà ìwọ fúnra rẹ ni o máa dán àtúnṣe náà wò." },
          { objective: "O6", q: "Nínú Python, kí ni ìlà tí ó bẹ̀rẹ̀ pẹ̀lú # ń ṣe?", options: ["Comment ni, Python kò sì kà á sí", "Ó ń kọ hashtag jáde", "Ó ń dá ètò náà dúró", "Ó ń ṣe loop"], answer: 0, why: "Àwọn ìlà tí ó bẹ̀rẹ̀ pẹ̀lú # jẹ́ comment fún ènìyàn, kì í ṣe ìtọ́ni." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí Kíkọ Kóòdù pẹ̀lú AI",
    questions: [
      { objective: "O1", q: "Àpèjúwe tó dára jù fún kóòdù ni:", options: ["Ìtọ́ni tí kọ̀mpútà ń tẹ̀lé gẹ́lẹ́", "Ọ̀rọ̀ aṣínà àṣírí", "Irú orin kan", "Máàkì ilé-ìwé"], answer: 0, why: "Kóòdù jẹ́ àkọsílẹ̀ ìtọ́ni fún kọ̀mpútà." },
      { objective: "O1", q: "Kí ló dé tí dída kóòdù AI tí kò yé ọ kọ fi jẹ́ ìṣòro?", options: ["Ó máa ń kúrú jù nígbà gbogbo", "O kò kọ́ nǹkan kan, o kò sì lè tún un ṣe nígbà tí ó bá bàjẹ́", "Kọ̀mpútà kò lè ṣe kóòdù AI", "Ó máa ń náni lówó"], answer: 1, why: "Òye ni ọgbọ́n náà; kóòdù tí a dà kọ máa ń jẹ́ kí ó há ọ." },
      { objective: "O1", q: "Kí o tó forúkọ sílẹ̀ fún irinṣẹ́ AI bí ọ̀dọ́, o yẹ kí o:", options: ["Lo ọjọ́ ìbí èké", "Pín ọ̀rọ̀ aṣínà rẹ pẹ̀lú àwọn ọ̀rẹ́", "Ṣàyẹ̀wò ọjọ́ orí tó kéré jù tí irinṣẹ́ náà gbà kí o sì béèrè lọ́wọ́ òbí tàbí alágbàtọ́", "Má ka nǹkan kankan"], answer: 2, why: "Òdiwọ̀n ọjọ́ orí àti kíkó òbí mọ́ ọn ń dáàbò bò ọ́, ó sì ń jẹ́ kí o wà nínú òfin." },
      { objective: "O2", q: "Google Colab jẹ́ kí o:", options: ["Wo fídíò nìkan", "Ra eré", "Fi ọ̀rọ̀ text ránṣẹ́", "Ṣe Python nínú browser láìfi nǹkan kan sórí ẹ̀rọ"], answer: 3, why: "Colab jẹ́ notebook ọ̀fẹ́ lórí ayélujára fún ṣíṣe Python." },
      { objective: "O2", q: "Nínú notebook, cell jẹ́:", options: ["Àpótí tí o ti ń tẹ kóòdù tí o sì ń ṣe é", "Bátìrì fóònù", "Irú àṣìṣe kan", "Loop kan"], answer: 0, why: "Notebook ní àwọn cell tí ó ń gbé kóòdù." },
      { objective: "O2", q: "Ìlà wo ni ó ń fi ọ̀rọ̀ hàn lójú iboju nínú Python?", options: ["show Hello", "print(\"Hello\")", "say = Hello", "run Hello"], answer: 1, why: "print pẹ̀lú ọ̀rọ̀ láàárín àmì ìfàyọ̀ ń fi ọ̀rọ̀ náà hàn." },
      { objective: "O3", q: "Variable jẹ́:", options: ["Ọ̀rọ̀ àṣìṣe", "Irú ojú-òpó wẹ́ẹ̀bù kan", "Àpótí tí ó ní orúkọ tí ó ń tọ́jú iye kan", "Loop tí kò ní parí"], answer: 2, why: "Variable ń tọ́jú iye lábẹ́ orúkọ kan, bí score." },
      { objective: "O3", q: "Ìlà wo ni ó ń ní kí ẹni tí ń ṣeré tẹ orúkọ rẹ̀?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"What is your name? \")"], answer: 3, why: "input ń ní kí olùlò tẹ nǹkan kan." },
      { objective: "O3", q: "Nínú Python, == túmọ̀ sí:", options: ["Jẹ́ ọ̀kan náà pẹ̀lú", "Ròpọ̀", "Tọ́jú iye kan", "Bẹ̀rẹ̀ comment"], answer: 0, why: "Àmì ìdọ́gba méjì ń fi iye méjì wéra." },
      { objective: "O3", q: "Kí ló dé tí indentation fi ṣe pàtàkì sí Python?", options: ["Ó ń jẹ́ kí kóòdù ní àwọ̀", "Ó ń fi hàn àwọn ìlà tí ó jẹ́ ti if tàbí loop", "Ó ń dín lílo bátìrì kù", "Ọ̀ṣọ́ lásán ni"], answer: 1, why: "Àwọn ìlà tí a ti wọlé jẹ́ ti if, else tàbí loop tí ó wà lókè wọn." },
      { objective: "O3", q: "O fẹ́ kọ \"Go team!\" jáde lẹ́ẹ̀márùn-ún. Èwo ló dára jù?", options: ["Gbólóhùn if", "Comment", "Loop for pẹ̀lú range(5)", "Variable tí a ń pè ní team"], answer: 2, why: "Loop ń tún kóòdù ṣe ní iye ìgbà kan pàtó." },
      { objective: "O4", q: "Èwo ni kò léwu láti fi sínú olùrànlọ́wọ́ AI?", options: ["Ọ̀rọ̀ aṣínà ilé-ìwé rẹ", "Àdírẹ́sì ilé rẹ", "Nọ́mbà fóònù rẹ", "Ìlà kóòdù ìdánwò ìbéèrè mẹ́wàá"], answer: 3, why: "Kóòdù fún iṣẹ́ kan kò ní ìsọfúnni àdáni nínú." },
      { objective: "O4", q: "Lẹ́yìn tí AI ṣàlàyé kóòdù rẹ, ọ̀nà tó dára láti dán òye rẹ wò ni láti:", options: ["Yí nǹkan kan padà, fojú sọ èsì rẹ̀, kí o sì ṣe é", "Pa notebook dé", "Béèrè àlàyé tí ó gùn sí i nìkan", "Dà á kọ sínú notebook míì láìyí nǹkan padà"], answer: 0, why: "Fífojú sọ èsì àti dídán an wò ń fi hàn pé ó yé ọ." },
      { objective: "O5", q: "Bug jẹ́:", options: ["Ohun tó dára nínú ètò", "Àṣìṣe nínú kóòdù", "Irú loop kan", "Notebook kan"], answer: 1, why: "Bug jẹ́ àṣìṣe; debugging ń tún wọn ṣe." },
      { objective: "O5", q: "IndentationError sábà máa ń túmọ̀ sí:", options: ["Íńtánẹ́ẹ̀tì rẹ kò ṣiṣẹ́", "O nílò kọ̀mpútà tuntun", "Àlàfo ní ìbẹ̀rẹ̀ ìlà kan kò tọ́", "Ètò náà ṣiṣẹ́"], answer: 2, why: "Ó ń tọ́ka sí àlàfo tí kò tọ́ ní ìbẹ̀rẹ̀ ìlà kan." },
      { objective: "O5", q: "Àṣìṣe kan há ọ. Kí ni o yẹ kí o fi sínú olùrànlọ́wọ́ AI?", options: ["Ọ̀rọ̀ náà error nìkan", "Ọ̀rọ̀ aṣínà rẹ", "Kò sí nǹkan; jáwọ́", "Kóòdù náà àti gbogbo ọ̀rọ̀ àṣìṣe náà"], answer: 3, why: "Kóòdù náà àti gbogbo àṣìṣe náà ń fún AI ní ohun tí ó nílò láti ṣàlàyé ìṣòro náà." },
      { objective: "O5", q: "AI dábàá àtúnṣe kan ṣùgbọ́n àṣìṣe náà yí padà. O yẹ kí o:", options: ["Sọ ohun tí ó ṣẹlẹ̀ báyìí gẹ́lẹ́ fún AI", "Jáwọ́", "Fi í sílẹ̀ bẹ́ẹ̀", "Pa Python rẹ́"], answer: 0, why: "Ìbéèrè àtẹ̀lé tó yé ń ràn ìwọ àti AI lọ́wọ́ láti rí ìṣòro gidi." },
      { objective: "O6", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ tó dára jù nígbà tí o bá ń kọ ètò tí ó tóbi jù?", options: ["Tẹ gbogbo rẹ̀ lẹ́ẹ̀kan náà", "Kọ ètò kúkúrú bí comment", "Ní kí AI kọ gbogbo rẹ̀", "Má ṣe dán an wò"], answer: 1, why: "Ètò ń pín ètò kọ̀mpútà náà sí àwọn apá kékeré." },
      { objective: "O6", q: "Kí ló dé tí o fi ń ṣe ètò rẹ lẹ́yìn tí o bá fi apá kékeré kọ̀ọ̀kan kún un?", options: ["Ó ń jẹ́ kí kóòdù gùn sí i", "Python ló ní kí a ṣe bẹ́ẹ̀", "O máa rí àṣìṣe ní kùtùkùtù, nígbà tí ó rọrùn láti tún un ṣe", "Ó ń fi fáìlì náà pamọ́"], answer: 2, why: "Ìgbésẹ̀ kékeré ń jẹ́ kí ó rọrùn láti rí bug." },
      { objective: "O6", q: "O lo AI láti ràn ọ́ lọ́wọ́ nínú iṣẹ́ kóòdù ilé-ìwé. Kí ni o yẹ kí o ṣe?", options: ["Fi í pamọ́", "Sọ pé ìwọ nìkan lo ṣe gbogbo rẹ̀", "Pa iṣẹ́ náà rẹ́", "Sọ bí o ṣe lo AI, ní ìbámu pẹ̀lú òfin olùkọ́ rẹ"], answer: 3, why: "Jíjẹ́ olóòótọ́ nípa lílo AI jẹ́ apá kan títẹ̀lé òfin ilé-ìwé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 3, 5, 6, 8, 11, 12, 14, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ètò náà ń ṣiṣẹ́", objective: "O2", notYet: "Ètò náà kò ṣiṣẹ́ nínú Colab, tàbí ó dúró pẹ̀lú àṣìṣe.", meets: "Ètò náà ń ṣiṣẹ́ láti ìbẹ̀rẹ̀ dé òpin nínú Colab.", exceeds: "Ó tún gba ìdáhùn tí ẹni tí ń ṣeré tẹ̀ lọ́nà míì, bí lẹ́tà ńlá." },
      { name: "Àwọn ìpìlẹ̀", objective: "O3", notYet: "Input, if àti else, tàbí variable máàkì kò sí nínú rẹ̀.", meets: "Ó béèrè orúkọ ẹni tí ń ṣeré, ó lo if àti else fún ó kéré tán ìbéèrè 5, ó sì ń ka máàkì nínú variable kan.", exceeds: "Ó tún lo loop láti tún apá kan nínú eré náà ṣe." },
      { name: "A kọ ọ́ ní apá-apá", objective: "O6", notYet: "Kò sí ètò tàbí ọ̀rọ̀ ìparí.", meets: "Ètò kan wà bí comment, ìbéèrè márùn-ún àti ọ̀rọ̀ ìparí pẹ̀lú máàkì.", exceeds: "Ọ̀rẹ́ kan ṣe é, akẹ́kọ̀ọ́ náà sì mú apá kan dára sí i nítorí ohun tí ó rí." },
      { name: "AI bí olùkọ́", objective: "O4", notYet: "AI ló kọ ètò náà, tàbí a kò sọ bí a ṣe lo AI.", meets: "AI ṣàlàyé tàbí ràn lọ́wọ́ láti tún apá kan ṣe ó kéré tán, akẹ́kọ̀ọ́ náà sì sọ bí a ṣe lò ó.", exceeds: "Akẹ́kọ̀ọ́ náà lè fi ìyípadà kan hàn tí ó fojú sọ èsì rẹ̀ tí ó sì dán an wò lẹ́yìn àlàyé AI." },
      { name: "Comment ní ọ̀rọ̀ ara ẹni", objective: "O5", notYet: "Kò sí comment, tàbí a dà wọ́n kọ láti ọ̀dọ̀ AI.", meets: "Comment kan wà sókè apá kọ̀ọ̀kan tí ó sọ ní ọ̀rọ̀ akẹ́kọ̀ọ́ fúnra rẹ̀ ohun tí apá náà ń ṣe.", exceeds: "Ó tún kọ bug kan tí ó tún ṣe àti bí ó ṣe tún un ṣe." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kọ ètò kọ̀mpútà kejì fúnra wọn láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n darapọ̀ mọ́ ẹgbẹ́ kóòdù, kíláàsì tàbí àgọ́ ẹ̀kọ́ láàárín ọjọ́ 90",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Koach Learn míì nípa kóòdù tàbí AI láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní browser àti íńtánẹ́ẹ̀tì (ilé-ìwé, ilé-ìkàwé tàbí ilé)",
      "Google Colab, pẹ̀lú àkáǹtì Google tí a gba akẹ́kọ̀ọ́ láàyè láti lò",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ tí a gba akẹ́kọ̀ọ́ láàyè láti lò",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣàyẹ̀wò òfin ọjọ́ orí Colab àti ti irinṣẹ́ AI àti ètò àkáǹtì ilé-ìwé kí kíláàsì tó bẹ̀rẹ̀; ní àkáǹtì àfihàn kan sílẹ̀ fún àwọn akẹ́kọ̀ọ́ tí kò lè forúkọ sílẹ̀.",
      "Kọ kóòdù lójú gbogbo ènìyàn lórí projector fún Ẹ̀kọ́ 2 àti 3 kí àwọn olùbẹ̀rẹ̀ lè tẹ̀lé ìgbésẹ̀ kọ̀ọ̀kan.",
      "Mọ̀ọ́mọ̀ fi kọ́lọ̀nù tàbí àmì ìfàyọ̀ kan sílẹ̀ kí gbogbo akẹ́kọ̀ọ́ lè ṣe àṣeṣe kíka ọ̀rọ̀ àṣìṣe.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé kí wọ́n má ṣe fi ìsọfúnni àdáni sínú irinṣẹ́ AI láéláé; kóòdù ìdánwò ìbéèrè kò nílò rẹ̀.",
      "Ṣe ìpàdé pàṣípààrọ̀ eré ìdánwò ìbéèrè níbi tí àwọn akẹ́kọ̀ọ́ ti ń ṣe eré ara wọn, lẹ́yìn náà kí wọ́n fi rubric ṣe àmì fún wọn."
    ]
  }
};
