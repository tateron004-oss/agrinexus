"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-ai-coaching-assistants.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-coaching-assistants-yo",
  lang: "yo",
  translationOf: "athletes-ai-coaching-assistants",
  category: "Athletes",
  name: "Àwọn Olùrànlọ́wọ́ AI fún Olùkọ́ Eré",
  skills: "Ṣíṣètò olùrànlọ́wọ́ AI pẹ̀lú ìtọ́sọ́nà olùkọ́ eré, Ṣíṣètò ìdánrawò pẹ̀lú AI, Kíkọ ọ̀rọ̀ ìránṣẹ́ sí òbí àti eléré, Ṣíṣe káàdì ìdánrawò àti ìdánwò kékeré, Pípa ìsọfúnni eléré mọ́ àti fífi ìpinnu sí ọwọ́ ènìyàn",
  outcome: "ṣètò olùrànlọ́wọ́ AI gẹ́gẹ́ bí olùrànlọ́wọ́ olùkọ́ eré pẹ̀lú ìtọ́sọ́nà àyègbà tìrẹ, kí o sì lò ó láti ṣètò ìdánrawò ìṣẹ́jú 90, kọ ọ̀rọ̀ ìránṣẹ́ tó yé sí àwọn òbí, kí o sì ṣe káàdì ìdánrawò kan àti ìdánwò playbook ìbéèrè márùn-ún, tí o ti ṣàyẹ̀wò gbogbo rẹ̀, tí kò sì sí ìsọfúnni àdáni eléré kankan nínú rẹ̀.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olórí olùkọ́ eré (head coach), àwọn olùrànlọ́wọ́ olùkọ́ eré, àwọn olùdarí ẹgbẹ́ eré (club) àti àwọn eléré ìdárayá tí wọ́n ń ran àwọn ọmọdé lọ́wọ́ nínú eré. Àwọn olùkọ́ eré ń lo ọ̀pọ̀ wákàtí lórí ètò àti iṣẹ́ ìwé; olùrànlọ́wọ́ AI lè gbé díẹ̀ lára ẹrù yẹn.",
    "O máa ṣètò olùrànlọ́wọ́ AI ọ̀fẹ́ kan pẹ̀lú ìtọ́sọ́nà àyègbà nípa ẹgbẹ́ rẹ, lẹ́yìn náà o máa lò ó láti ṣètò ìdánrawò, kọ ọ̀rọ̀ ìránṣẹ́ àti ṣe ohun èlò ìkọ́ni. O tún máa ṣe òfin tó ṣe kedere: ohun tó máa wà ní àdáni, àti àwọn ìpinnu tó máa wà ní ọwọ́ ènìyàn.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ ọwọ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà. Tẹ̀lé òfin ilé-ìwé rẹ, ẹgbẹ́ eré rẹ tàbí ẹgbẹ́ ìdíje (league) rẹ lórí ẹ̀rọ ìgbàlódé, bíbá àwọn ọmọdé sọ̀rọ̀ àti ìsọfúnni akẹ́kọ̀ọ́."
  ],
  finalTask: "Kọ ìtọ́sọ́nà àyègbà olùrànlọ́wọ́ olùkọ́ eré rẹ (ìpele ẹgbẹ́, ọ̀nà ìkọ́ni, òfin ààbò, ohun tí kò gbọ́dọ̀ wà nínú rẹ̀), lẹ́yìn náà lò ó láti ṣe ètò ìdánrawò ìṣẹ́jú 90, ọ̀rọ̀ ìránṣẹ́ sí àwọn òbí nípa ètò àkókò ọ̀sẹ̀ tó ń bọ̀, káàdì ìdánrawò fún ìdánrawò kan, àti ìdánwò playbook ìbéèrè márùn-ún. Ṣàyẹ̀wò kí o sì tún gbogbo apá ṣe, kí o sì rí i dájú pé a kò lo ìsọfúnni àdáni eléré kankan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olórí olùkọ́ eré, àwọn olùrànlọ́wọ́ olùkọ́ eré, àwọn olùdarí ẹgbẹ́ eré àti àwọn eléré ìdárayá tí wọ́n ń ran àwọn ọmọdé lọ́wọ́, tí ọ̀pọ̀ wọn jẹ́ olùyọ̀ǹda ara ẹni tàbí olùkọ́ eré àbọ̀ àkókò tí kò ní àkókò púpọ̀ fún ètò.",
    startingPoint: "Wọ́n ti ń darí ìdánrawò, wọ́n sì ń fi ọ̀rọ̀ ìránṣẹ́ ránṣẹ́ sí ẹgbẹ́. Àwọn kan ti gbìyànjú olùrànlọ́wọ́ AI, ṣùgbọ́n díẹ̀ ló ń fún un ní ìtọ́sọ́nà àyègbà tàbí tí wọ́n ní òfin tí a kọ sílẹ̀ fún ìpamọ́ àti ààbò.",
    gap: "Ètò àti iṣẹ́ ìwé ń gba ọ̀pọ̀ wákàtí, lílo AI láìṣọ́ra sì lè tú ìsọfúnni àdáni eléré jáde, mú ìdánrawò tí kò láàbò wá, tàbí gba ipò ìpinnu tí olùkọ́ eré gbọ́dọ̀ ṣe. Àwọn olùkọ́ eré nílò láti lo AI gẹ́gẹ́ bí olùrànlọ́wọ́ tí a ń ṣàyẹ̀wò, pẹ̀lú ààlà tó ṣe kedere, kí wọ́n lè fi àkókò pamọ́ kí àwọn eléré sì wà láìléwu, kí a sì ṣe wọ́n lọ́nà tó tọ́.",
    constraints: [
      "Ọ̀rọ̀ tó rọrùn; kò nílò ìmọ̀ ẹ̀rọ kankan",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà tó ní olùrànlọ́wọ́ AI ọ̀fẹ́",
      "Àkókò: nǹkan bí ìṣẹ́jú márùn-ún fún ẹ̀kọ́ kọ̀ọ̀kan, láàárín ọ̀sẹ̀ olùkọ́ eré tó kún",
      "Òfin ilé-ìwé, ẹgbẹ́ eré àti ẹgbẹ́ ìdíje lórí ẹ̀rọ ìgbàlódé, fífi ọ̀rọ̀ ránṣẹ́ sí àwọn ọmọdé àti ìsọfúnni akẹ́kọ̀ọ́ ló kọ́kọ́ ṣe pàtàkì",
      "Kò gbọ́dọ̀ sí orúkọ eléré, ìsọfúnni ìlera tàbí ìsọfúnni àdáni eléré míì nínú ìbéèrè (prompt) kankan"
    ],
    prerequisites: "Kò sí. Àwọn olùkọ́ eré tí wọ́n jẹ́ tuntun sí olùrànlọ́wọ́ AI lè kọ́kọ́ gba ẹ̀kọ́ ìfáárà AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ àwọn iṣẹ́ olùkọ́ eré ọ̀sẹ̀ kọ̀ọ̀kan", action: "kọ àwọn iṣẹ́ olùkọ́ eré tí o lè fún olùrànlọ́wọ́ AI láti kọ àkọ́kọ́ rẹ̀, àti àwọn ìpinnu tí o máa ṣe fúnra rẹ", standard: "tí ìpinnu nípa àkókò eré, yíyan eléré àti ààbò wà ní ọwọ́ olùkọ́ eré" },
    { id: "O2", condition: "Fún ẹgbẹ́ tìrẹ", action: "kọ ìtọ́sọ́nà àyègbà pẹ̀lú ìpele ẹgbẹ́, gígùn ìdánrawò, ọ̀nà ìkọ́ni àti òfin ààbò", standard: "pẹ̀lú òfin pé kò gbọ́dọ̀ lo orúkọ eléré tàbí ìsọfúnni ìlera láéláé" },
    { id: "O3", condition: "Ní lílo ìtọ́sọ́nà àyègbà rẹ", action: "kọ ètò ìdánrawò ìṣẹ́jú 90 pẹ̀lú AI kí o sì tún un ṣe", standard: "kí àwọn àkókò dọ́gba, kí ìdánrawò bá ọjọ́ orí àti ohun èlò mu, kí o sì ṣe ó kéré tán àyípadà méjì" },
    { id: "O4", condition: "Tí ètò àkókò bá yí padà tàbí tí ìròyìn ẹgbẹ́ bá wà", action: "kọ ọ̀rọ̀ ìránṣẹ́ tó yé, tó sì jẹ́ onínúure sí òbí tàbí eléré pẹ̀lú AI, kí o sì fi ránṣẹ́ nípasẹ̀ ọ̀nà tí a fọwọ́ sí", standard: "tí o ti ṣàyẹ̀wò gbogbo ọjọ́, tí kò sì sí nǹkan kan nípa eléré kan ṣoṣo nínú ọ̀rọ̀ ìránṣẹ́ ẹgbẹ́" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìdánrawò kan àti eré (play) kan", action: "ṣe káàdì ìdánrawò kan àti ìdánwò playbook ìbéèrè márùn-ún pẹ̀lú AI", standard: "tí o ti ṣàyẹ̀wò gbogbo ìgbésẹ̀ àti ìdáhùn sí ìdánrawò àti eré rẹ gidi" },
    { id: "O6", condition: "Kí o tó lo AI fún iṣẹ́ olùkọ́ eré èyíkéyìí", action: "kọ ààlà fún ìpamọ́, ààbò àti òdodo, kí o sì tẹ̀lé wọn", standard: "kí o máa fi ìbéèrè nípa ìlera àti ooru ránṣẹ́ sí òṣìṣẹ́ tí a kọ́ àti ìtọ́sọ́nà àjọ tó ń darí eré náà" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò olùrànlọ́wọ́ olùkọ́ eré rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí olùrànlọ́wọ́ AI olùkọ́ eré lè ṣe",
          minutes: 4,
          goal: "Kọ àwọn iṣẹ́ olùkọ́ eré tí o lè fún AI, àti àwọn ìpinnu tí o máa ṣe fúnra rẹ.",
          text: [
            "Olùrànlọ́wọ́ AI olùkọ́ eré jẹ́ olùrànlọ́wọ́ AI gbogbogbò, bíi ChatGPT, Microsoft Copilot tàbí Google Gemini, tí o ń lò fún iṣẹ́ olùkọ́ eré. Ó lè kọ àkọ́kọ́ ètò ìdánrawò, kọ ímeèlì, ṣàlàyé òfin eré, ṣe àpèjúwe ìdánrawò, ìdánwò kékeré àti ètò àkókò, kí ó sì ṣe àkópọ̀ àkọsílẹ̀ rẹ.",
            "Kò lè rí àwọn eléré rẹ, kò mọ ìlera wọn tàbí bí ọkàn wọn ṣe rí, kò sì lè gba ojúṣe. Àkókò eré, ìbáwí, ìfarapa àti ìpinnu ìgbà tí eléré lè padà sí eré, ìpinnu ààbò, àti ohunkóhun nípa àlàáfíà eléré máa wà ní ọwọ́ rẹ àti àwọn akọ́ṣẹ́mọṣẹ́ tó yẹ.",
            "Òfin tó dára: AI ń kọ àkọ́kọ́, olùkọ́ eré ló ń pinnu. Gbogbo ohun tí ó kọ jẹ́ àkọ́kọ́ tí o gbọ́dọ̀ ṣàyẹ̀wò."
          ],
          words: [["Olùrànlọ́wọ́ AI olùkọ́ eré", "olùrànlọ́wọ́ AI gbogbogbò tí a ń lò láti ran iṣẹ́ olùkọ́ eré lọ́wọ́."], ["Ìpadà sí eré (return to play)", "ìpinnu nípa ìgbà tí eléré tó fara pa lè tún ṣeré láìléwu; àwọn akọ́ṣẹ́mọṣẹ́ ìlera ló ń ṣe é."]],
          slides: [
            { title: "AI lè kọ àkọ́kọ́", bullets: ["Ètò ìdánrawò àti ètò àkókò", "Ímeèlì àti ọ̀rọ̀ ìránṣẹ́", "Àpèjúwe ìdánrawò àti ìdánwò kékeré", "Àkópọ̀ àkọsílẹ̀ rẹ"] },
            { title: "Olùkọ́ eré ló ń ṣe", bullets: ["Àkókò eré àti ìbáwí", "Ìpinnu ààbò", "Àlàáfíà eléré; ìfarapa lọ sí òṣìṣẹ́ ìlera"] },
            { title: "Òfin náà", bullets: ["AI ń kọ àkọ́kọ́", "Olùkọ́ eré ló ń pinnu"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ méjì: iṣẹ́ olùkọ́ eré ọ̀sẹ̀ márùn-ún tí o lè fún AI láti kọ àkọ́kọ́ rẹ̀, àti ìpinnu márùn-ún tí o máa ṣe fúnra rẹ nígbà gbogbo.",
          youCanNow: "pinnu àwọn iṣẹ́ olùkọ́ eré tí AI lè ràn ọ́ lọ́wọ́ fún, àti àwọn ìpinnu tó máa wà ní ọwọ́ ènìyàn.",
          quickCheck: [
            { objective: "O1", q: "Iṣẹ́ olùkọ́ eré wo ni AI lè kọ àkọ́kọ́ rẹ̀ fún ọ?", options: ["Ètò ìdánrawò ọ̀sẹ̀ kan", "Ta ló máa bẹ̀rẹ̀ eré ní Ọjọ́ Àbámẹ́ta", "Bóyá eléré tó fara pa lè padà", "Bí ọkàn eléré kan ṣe rí lónìí"], answer: 0, why: "AI lè kọ ètò; yíyan eléré, ìfarapa àti ìmọ̀lára nílò olùkọ́ eré àti òṣìṣẹ́ tí a kọ́." },
            { objective: "O1", q: "AI dábàá pé kí eléré kan jókòó sí ẹ̀gbẹ́ (bench) láti inú àkọsílẹ̀ rẹ. Kí ni o máa ṣe?", options: ["Tẹ̀lé e gẹ́lẹ́", "Ṣe ìpinnu náà fúnra rẹ láti inú ohun tí o ti rí", "Jẹ́ kí àwọn eléré dìbò", "Tún bi AI títí yóò fi gbà"], answer: 1, why: "AI ń kọ àkọ́kọ́, olùkọ́ eré ló ń pinnu, pàápàá nípa àkókò eré." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìtọ́sọ́nà àyègbà",
          minutes: 5,
          goal: "Kọ ìtọ́sọ́nà àyègbà tó ń sọ fún AI nípa ẹgbẹ́ rẹ àti òfin rẹ.",
          text: [
            "Ìtọ́sọ́nà àyègbà jẹ́ ìpínrọ̀ kan tí o máa ń lẹ̀ (paste) sí ìbẹ̀rẹ̀ ìjíròrò (tàbí tí o fi pamọ́ sínú ibi ìtọ́sọ́nà àdáni tàbí project olùrànlọ́wọ́ náà, tí ó bá ní i) kí ó lè mọ ipò rẹ nígbà gbogbo.",
            "Fi kún un: eré, ìpele àti ọjọ́ orí; iye eléré nínú ẹgbẹ́; gígùn ìdánrawò àti ibi ìdánrawò; ọ̀nà ìkọ́ni àti ìlànà rẹ; òfin ààbò (ìdánrawò tó bá ọjọ́ orí mu, ìsinmi omi, kò sí eré ìjìyà); àti ohun tí kò gbọ́dọ̀ wà nínú rẹ̀ láéláé (orúkọ eléré, ìsọfúnni ìlera, máàkì ilé-ìwé).",
            "Àpẹẹrẹ: \"Mo ń kọ́ ẹgbẹ́ bọ́ọ̀lù-ẹlẹ́sẹ̀ àwọn ọmọbìnrin U12 tí ó ní eléré 16. Ìdánrawò jẹ́ ìṣẹ́jú 90 lórí ààbọ̀ pápá, ní Ọjọ́ Ìṣẹ́gun àti Ọjọ́bọ̀. Mo fẹ́ràn ìsapá, ayọ̀ àti ìṣọ̀kan. Ètò gbọ́dọ̀ ní ìgbaradì, ìsinmi omi ní ìṣẹ́jú 20 kọ̀ọ̀kan àti ìdánrawò tó bá ọjọ́ orí mu. Má ṣe béèrè tàbí lo orúkọ eléré tàbí ìsọfúnni ìlera láéláé.\""
          ],
          steps: ["Kọ eré rẹ, ìpele, ọjọ́ orí àti iye eléré nínú ẹgbẹ́.", "Fi gígùn ìdánrawò àti ibi ìdánrawò kún un.", "Fi ìlànà rẹ àti ọ̀nà ìkọ́ni rẹ kún un.", "Fi òfin ààbò kún un.", "Fi ohun tí kò gbọ́dọ̀ wà nínú rẹ̀ láéláé kún un.", "Fi pamọ́ sí ibi tí o ti lè lẹ̀ ẹ́ ní gbogbo ìgbà."],
          words: [["Ìtọ́sọ́nà àyègbà (standing instructions)", "ìsọfúnni nípa ipò rẹ tí o fún AI ní ìbẹ̀rẹ̀ kí gbogbo ìdáhùn lè bá ipò rẹ mu."], ["Tó bá ọjọ́ orí mu", "tó yẹ fún ọjọ́ orí àti ìdàgbàsókè àwọn eléré."]],
          slides: [
            { title: "Ìtọ́sọ́nà àyègbà", bullets: ["Lẹ̀ ẹ́ sí ìbẹ̀rẹ̀ ìjíròrò kọ̀ọ̀kan", "Tàbí fi pamọ́ sínú ètò olùrànlọ́wọ́ náà, tí ó bá ní i"] },
            { title: "Fi kún un", bullets: ["Eré, ìpele, ọjọ́ orí, iye eléré", "Gígùn ìdánrawò àti ààyè", "Ìlànà àti òfin ààbò"] },
            { title: "Má fi kún un láéláé", bullets: ["Orúkọ eléré", "Ìsọfúnni ìlera", "Máàkì ilé-ìwé tàbí ìsọfúnni ẹbí"] }
          ],
          tryIt: "Kọ ìtọ́sọ́nà àyègbà rẹ ní ìpínrọ̀ kan kí o sì fi pamọ́ sínú àkọsílẹ̀ (note). Lẹ̀ ẹ́ sínú olùrànlọ́wọ́ AI kí o sì béèrè pé: \"Ṣe àkópọ̀ ohun tí o mọ̀ nípa ẹgbẹ́ mi.\" Tún ohunkóhun tí ó ṣì ṣe.",
          youCanNow: "kọ ìtọ́sọ́nà àyègbà tó ń jẹ́ kí ìdáhùn AI bá ẹgbẹ́ rẹ mu.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìtọ́sọ́nà àyègbà?", options: ["Àkọsílẹ̀ nọ́mbà fóònù àwọn eléré", "Ìwé òfin ẹgbẹ́ ìdíje", "Ìsọfúnni nípa ẹgbẹ́ rẹ àti òfin rẹ tí o fún AI ní ìbẹ̀rẹ̀", "Ìdánrawò kan"], answer: 2, why: "Ìtọ́sọ́nà àyègbà ń jẹ́ kí gbogbo ìdáhùn AI bá ẹgbẹ́ rẹ mu." },
            { objective: "O2", q: "Àkópọ̀ AI nípa ìtọ́sọ́nà àyègbà rẹ sọ pé ẹgbẹ́ rẹ jẹ́ U16, ṣùgbọ́n U12 ni. Kí ni o máa ṣe?", options: ["Fojú fò ó", "Pa app AI náà rẹ́", "Lo àwọn ìdáhùn náà bẹ́ẹ̀", "Tún ìtọ́sọ́nà náà ṣe kí ó lè ní ọjọ́ orí tó tọ́"], answer: 3, why: "Ìsọfúnni tí kò tọ́ ń mú ètò tí kò tọ́ wá, nítorí náà o kọ́kọ́ tún un ṣe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣètò ìdánrawò pẹ̀lú AI",
          minutes: 6,
          goal: "Lo AI láti kọ àkọ́kọ́ ètò ìdánrawò ìṣẹ́jú 90 kí o sì tún un ṣe.",
          text: [
            "Lẹ́yìn tí o ti lẹ̀ ìtọ́sọ́nà àyègbà rẹ, béèrè pé: \"Ṣètò ìdánrawò ìṣẹ́jú 90 lórí [ọgbọ́n eré]. Fi ìgbaradì, ìdánrawò mẹ́ta tó ń tẹ̀síwájú, eré kékeré (small-sided game), ìtura ara àti ìsinmi omi sí i. Fún mi ní àkókò, bí a ṣe ń tò ó, kókó ìkọ́ni, àti bí a ṣe lè mú ìdánrawò kọ̀ọ̀kan rọrùn tàbí le sí i.\"",
            "Ṣàyẹ̀wò rẹ̀ bí olùkọ́ eré: Ṣé àwọn ìdánrawò láàbò, tí wọ́n sì bá ọjọ́ orí mu? Ṣé àwọn àkókò dọ́gba? Ṣé o ní ààyè àti ohun èlò? Ṣé ìwọ̀n iṣẹ́ àti ìsinmi tọ́? Ṣé ìlà pọ̀ jù, tí àwọn eléré sì ń dúró jù?",
            "Béèrè ìbéèrè àtẹ̀lé: \"Bọ́ọ̀lù 10 péré la ní.\" \"Eléré méjì jẹ́ tuntun.\" \"Fi ìdánrawò míì tí bọ́ọ̀lù ti ń kan ẹsẹ̀ púpọ̀ sí i rọ́pò ìdánrawò 2.\" Fi àwọn ètò tí o fẹ́ràn pamọ́ sínú fódà kan láti tún lò àti láti mú dára sí i."
          ],
          steps: ["Lẹ̀ ìtọ́sọ́nà àyègbà rẹ.", "Béèrè ètò ìṣẹ́jú 90 pẹ̀lú àkókò, bí a ṣe ń tò ó àti kókó ìkọ́ni.", "Ṣàyẹ̀wò ààbò, àkókò, ààyè àti ohun èlò.", "Béèrè ìbéèrè àtẹ̀lé láti tún àwọn ìṣòro ṣe.", "Fi ètò ìkẹyìn pamọ́."],
          words: [["Ìtẹ̀síwájú (progression)", "àwọn ìdánrawò tó ń lọ láti rírọrùn sí líle."], ["Eré kékeré (small-sided game)", "eré pẹ̀lú eléré díẹ̀ àti ààyè kékeré kí gbogbo ènìyàn lè fọwọ́ kan bọ́ọ̀lù púpọ̀ sí i."]],
          slides: [
            { title: "Béèrè fún", bullets: ["Ìgbaradì, ìdánrawò 3 tó ń tẹ̀síwájú", "Eré kékeré, ìtura ara", "Àkókò, bí a ṣe ń tò ó, kókó ìkọ́ni"] },
            { title: "Ṣàyẹ̀wò bí olùkọ́ eré", bullets: ["Ṣé ó láàbò, ó sì bá ọjọ́ orí mu?", "Ṣé àkókò dọ́gba? Ààyè àti ohun èlò?", "Ṣé ìdúró kò pọ̀?"] },
            { title: "Tún un ṣe", bullets: ["\"Bọ́ọ̀lù 10 péré la ní.\"", "\"Eléré méjì jẹ́ tuntun.\"", "Fi àwọn ètò tí o fẹ́ràn pamọ́"] }
          ],
          tryIt: "Lo ìtọ́sọ́nà àyègbà rẹ láti gba ètò ìdánrawò ìṣẹ́jú 90 fún ìdánrawò gidi tó ń bọ̀. Ṣe ó kéré tán àyípadà àtẹ̀lé méjì kí o sì fi pamọ́.",
          youCanNow: "ṣètò ìdánrawò tó láàbò, tí àkókò rẹ̀ sì tọ́, pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìtẹ̀síwájú (progression) nínú ètò ìdánrawò?", options: ["Àwọn ìdánrawò tó ń lọ láti rírọrùn sí líle", "Àkọsílẹ̀ àbájáde ìdíje", "Bí àwọn eléré ṣe dé tẹ̀léra", "Ìsinmi omi"], answer: 0, why: "Ìtẹ̀síwájú ń kọ́ ọgbọ́n eré ní ìgbésẹ̀ ìgbésẹ̀." },
            { objective: "O3", q: "Ètò AI nílò kóònù (cone) 20, ṣùgbọ́n 8 ni o ní. Kí ni o máa ṣe?", options: ["Fagilé ìdánrawò", "Sọ fún AI pé kóònù 8 ni o ní kí o sì ní kí ó tún ètò ṣe", "Lo ètò náà kí o sì retí pé yóò ṣiṣẹ́", "Ra kóònù kí ìdánrawò tó bẹ̀rẹ̀"], answer: 1, why: "Sọ ààlà rẹ gidi fún AI kí ètò náà lè ṣiṣẹ́ lórí pápá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò olùrànlọ́wọ́ olùkọ́ eré rẹ",
        questions: [
          { objective: "O1", q: "Iṣẹ́ wo ló bá olùrànlọ́wọ́ AI olùkọ́ eré mu?", options: ["Pípinnu ìpadà sí eré lẹ́yìn ìpalára orí (concussion)", "Bíbá eléré wí", "Kíkọ àkọ́kọ́ ètò ìdánrawò", "Dídájọ́ ìmọ̀lára eléré"], answer: 2, why: "AI ń kọ àkọ́kọ́; ìpinnu ìlera àti ti ara ẹni wà ní ọwọ́ ènìyàn." },
          { objective: "O1", q: "Kí ni òfin olùkọ́ eré fún AI?", options: ["AI ń kọ àkọ́kọ́, olùkọ́ eré ló ń pinnu", "AI ló ń pinnu gbogbo nǹkan", "Má lo AI láéláé", "Àwọn eléré ló ń pinnu"], answer: 0, why: "Gbogbo ohun tí AI bá ṣe jẹ́ àkọ́kọ́." },
          { objective: "O2", q: "Èwo ló yẹ kí ó wà nínú ìtọ́sọ́nà àyègbà?", options: ["Orúkọ eléré", "Ìsọfúnni ìlera eléré", "Máàkì ilé-ìwé eléré", "Ọjọ́ orí àti gígùn ìdánrawò"], answer: 3, why: "Ìsọfúnni nípa ẹgbẹ́ ń ṣèrànwọ́; ìsọfúnni àdáni kò gbọ́dọ̀ wà níbẹ̀." },
          { objective: "O3", q: "Ètò AI ní ìdánrawò kan tí kò láàbò fún ọmọ ọdún 10. O máa:", options: ["Lò ó bẹ́ẹ̀", "Fi ìdánrawò tó bá ọjọ́ orí mu rọ́pò rẹ̀", "Mú un le sí i", "Fo ìsinmi omi"], answer: 1, why: "Ààbò àti ìbámu ọjọ́ orí ló kọ́kọ́ ṣe pàtàkì." },
          { objective: "O3", q: "Eré kékeré (small-sided game) wúlò nítorí pé:", options: ["Ó gùn jù", "Gbogbo ènìyàn ń fọwọ́ kan bọ́ọ̀lù púpọ̀ sí i", "Ó nílò ohun èlò púpọ̀ sí i", "Àwọn eléré ń dúró ní ìlà"], answer: 1, why: "Eléré díẹ̀ túmọ̀ sí kíkópa púpọ̀ sí i." }
        ]
      }
    },
    {
      name: "Orí 2: Ìbánisọ̀rọ̀, ohun èlò àti ààlà",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ọ̀rọ̀ ìránṣẹ́ sí àwọn òbí àti eléré",
          minutes: 5,
          goal: "Kọ ọ̀rọ̀ ìránṣẹ́ tó yé, tó sì jẹ́ onínúure sí òbí tàbí eléré pẹ̀lú AI, kí o sì fi ránṣẹ́ nípasẹ̀ ọ̀nà tí a fọwọ́ sí.",
          text: [
            "Àwọn olùkọ́ eré ń kọ ọ̀pọ̀ ọ̀rọ̀ ìránṣẹ́: ètò àkókò, àyípadà, ìránnilétí, ohun tí a retí. Béèrè pé: \"Kọ ọ̀rọ̀ ìránṣẹ́ kúkúrú, tó jẹ́ ọ̀rẹ́, sí àwọn òbí nípa àyípadà ìdánrawò ọ̀sẹ̀ tó ń bọ̀: ti Ọjọ́ Ìṣẹ́gun bọ́ sí agogo 5 ìrọ̀lẹ́, a fagilé ti Ọjọ́bọ̀ nítorí àtúnṣe pápá. Fi ohun tí wọ́n máa mú wá kún un. Kí ó má ju ọ̀rọ̀ 100 lọ.\"",
            "Ṣàyẹ̀wò òtítọ́, ọjọ́ àti ohùn ọ̀rọ̀. Jẹ́ kí ọ̀rọ̀ ìránṣẹ́ ẹgbẹ́ jẹ́ nípa ẹgbẹ́; má ṣe sọ̀rọ̀ nípa bí eléré kan ṣe ń ṣeré, ìlera rẹ̀ tàbí ìwà rẹ̀ nínú ọ̀rọ̀ ìránṣẹ́ ẹgbẹ́ láéláé.",
            "Lo ọ̀nà ìbánisọ̀rọ̀ tí ilé-ìwé tàbí ẹgbẹ́ eré rẹ fọwọ́ sí. Ọ̀pọ̀ àjọ ní òfin fún olùkọ́ eré tó ń fi ọ̀rọ̀ ránṣẹ́ sí àwọn ọmọdé, bíi fífi òbí tàbí olùkọ́ eré míì kún un. Ọ̀rọ̀ tó le, bíi àkókò eré tàbí ìwà, dára jù ní ojúkojú tàbí lórí fóònù, kì í ṣe nínú ọ̀rọ̀ tí AI kọ."
          ],
          steps: ["Béèrè àkọ́kọ́ kúkúrú, tó jẹ́ ọ̀rẹ́, lọ́wọ́ AI.", "Ṣàyẹ̀wò òtítọ́, ọjọ́ àti ohùn ọ̀rọ̀.", "Jẹ́ kí ọ̀rọ̀ ìránṣẹ́ ẹgbẹ́ jẹ́ nípa ẹgbẹ́.", "Fi ránṣẹ́ nípasẹ̀ ọ̀nà tí a fọwọ́ sí.", "Sọ ọ̀rọ̀ tó le ní ojúkojú."],
          words: [["Ọ̀nà tí a fọwọ́ sí", "ọ̀nà ìbánisọ̀rọ̀ tí ilé-ìwé tàbí ẹgbẹ́ eré rẹ gbà fún àwọn olùkọ́ eré."], ["Ohùn ọ̀rọ̀ (tone)", "bí ọ̀rọ̀ ìránṣẹ́ ṣe rí lára: ọ̀rẹ́, líle, ìfẹ́."]],
          slides: [
            { title: "AI ń kọ àkọ́kọ́ ọ̀rọ̀ ìránṣẹ́", bullets: ["Ètò àkókò, àyípadà, ìránnilétí", "Kúkúrú, ó sì jẹ́ ọ̀rẹ́"] },
            { title: "Ṣàyẹ̀wò", bullets: ["Òtítọ́ àti ọjọ́", "Ohùn ọ̀rọ̀", "Ọ̀rọ̀ ẹgbẹ́ nìkan nínú ẹgbẹ́"] },
            { title: "Fi ránṣẹ́ lọ́nà tó tọ́", bullets: ["Ọ̀nà tí a fọwọ́ sí", "Tẹ̀lé òfin fífi ọ̀rọ̀ ránṣẹ́ sí ọmọdé", "Ọ̀rọ̀ tó le ní ojúkojú"] }
          ],
          tryIt: "Lo AI láti kọ ọ̀rọ̀ ìránṣẹ́ gidi tàbí ti ìdánrawò sí àwọn òbí nípa àyípadà ètò àkókò. Ṣàyẹ̀wò gbogbo ọjọ́ kí o sì fi ránṣẹ́ (tàbí fi pamọ́) nípasẹ̀ ọ̀nà tí a fọwọ́ sí.",
          youCanNow: "kọ ọ̀rọ̀ ìránṣẹ́ ẹgbẹ́ tó yé pẹ̀lú AI, kí o sì fi ránṣẹ́ lọ́nà tó tọ́.",
          quickCheck: [
            { objective: "O4", q: "Kí ló yẹ kí ọ̀rọ̀ ìránṣẹ́ ẹgbẹ́ jẹ́ nípa rẹ̀?", options: ["Ìwà eléré kan", "Ìfarapa eléré kan", "Ẹgbẹ́ náà, bíi àkókò àti ibi", "Ta ni a máa mú jókòó sí ẹ̀gbẹ́"], answer: 2, why: "Ọ̀rọ̀ ìránṣẹ́ ẹgbẹ́ wà fún ìròyìn ẹgbẹ́; ọ̀rọ̀ eléré kan jẹ́ àdáni." },
            { objective: "O4", q: "AI kọ ọ̀rọ̀ ìránṣẹ́ sí òbí tó sọ pé ìdánrawò wà ní Ọjọ́ Ìṣẹ́gun ọjọ́ 14. Kí ni o máa ṣe kí o tó fi ránṣẹ́?", options: ["Fi ránṣẹ́ lẹ́sẹ̀kẹsẹ̀", "Fi emoji púpọ̀ sí i kún un", "Fi ránṣẹ́ láti àkáǹtì ara rẹ sí àwọn eléré nìkan", "Ṣàyẹ̀wò ọjọ́ náà lórí kàlẹ́ńdà"], answer: 3, why: "AI lè ṣì ọjọ́, nítorí náà o ṣàyẹ̀wò gbogbo ọjọ́." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Káàdì ìdánrawò àti ìdánwò playbook",
          minutes: 5,
          goal: "Ṣe káàdì ìdánrawò kan àti ìdánwò playbook ìbéèrè márùn-ún.",
          text: [
            "Káàdì ìdánrawò ń ran àwọn olùrànlọ́wọ́ olùkọ́ eré àti eléré lọ́wọ́ láti ṣe ìdánrawò lọ́nà kan náà. Béèrè pé: \"Ṣe káàdì ìdánrawò ojú-ìwé kan fún [ìdánrawò]: ète, bí a ṣe ń tò ó, ìgbésẹ̀, kókó ìkọ́ni, àṣìṣe tó wọ́pọ̀, àti bí a ṣe lè mú un rọrùn tàbí le sí i.\" Fi àwòrán rírọrùn kún un nínú irinṣẹ́ bíi Canva tàbí fi ọwọ́ yà á.",
            "Ìdánwò kékeré ń ran àwọn eléré lọ́wọ́ láti kọ́ playbook àti òfin eré. Béèrè pé: \"Kọ ìbéèrè ọlọ́pọ̀ ìdáhùn márùn-ún nípa eré out-of-bounds wa: [ṣàpèjúwe rẹ̀]. Ìdáhùn tó tọ́ kan fún ọ̀kọ̀ọ̀kan, pẹ̀lú àlàyé kúkúrú.\" Ṣàyẹ̀wò gbogbo ìdáhùn sí eré rẹ gidi.",
            "Lo irinṣẹ́ ìdánwò bíi Google Forms láti pín in, láìgba ìsọfúnni ara ẹni ju èyí tó pọndandan lọ."
          ],
          steps: ["Béèrè káàdì ìdánrawò pẹ̀lú ète, bí a ṣe ń tò ó, ìgbésẹ̀ àti kókó ìkọ́ni lọ́wọ́ AI.", "Fi àwòrán rírọrùn kún un.", "Ṣàpèjúwe eré kan kí o sì béèrè ìbéèrè ìdánwò márùn-ún.", "Ṣàyẹ̀wò gbogbo ìdáhùn sí eré rẹ gidi.", "Pín in pẹ̀lú fọ́ọ̀mù rírọrùn, kí o sì gba ìsọfúnni díẹ̀ jù lọ."],
          words: [["Káàdì ìdánrawò", "ìtọ́sọ́nà ojú-ìwé kan tó ń ṣàlàyé bí a ṣe ń ṣe ìdánrawò kan."], ["Playbook", "àkójọ àwọn eré (play) ẹgbẹ́ kan àti òfin bí a ṣe ń ṣe wọ́n."]],
          slides: [
            { title: "Káàdì ìdánrawò", bullets: ["Ète, bí a ṣe ń tò ó, ìgbésẹ̀", "Kókó ìkọ́ni, àṣìṣe tó wọ́pọ̀", "Ẹ̀yà tó rọrùn àti tó le"] },
            { title: "Ìdánwò playbook", bullets: ["Ṣàpèjúwe eré náà", "Ìbéèrè márùn-ún pẹ̀lú àlàyé", "Ṣàyẹ̀wò gbogbo ìdáhùn"] },
            { title: "Pín in lọ́nà rírọrùn", bullets: ["Google Forms tàbí irú rẹ̀", "Gba ìsọfúnni ara ẹni díẹ̀ jù lọ"] }
          ],
          tryIt: "Ṣe káàdì ìdánrawò kan àti ìdánwò ìbéèrè márùn-ún lórí ọ̀kan nínú àwọn eré rẹ pẹ̀lú AI. Ṣàyẹ̀wò méjèèjì kí o sì tún ohunkóhun tí kò tọ́ ṣe.",
          youCanNow: "ṣe káàdì ìdánrawò àti ìdánwò playbook pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O5", q: "Kí ni káàdì ìdánrawò ń ṣèrànwọ́ fún?", options: ["Ṣíṣe ìdánrawò lọ́nà kan náà nígbà gbogbo", "Yíyan olórí ẹgbẹ́", "Sísan owó ẹgbẹ́ eré", "Gbígba bọ́ọ̀sì"], answer: 0, why: "Káàdì ìdánrawò ń fúnni ní ète, bí a ṣe ń tò ó, ìgbésẹ̀ àti kókó ìkọ́ni kí gbogbo ènìyàn lè ṣe é lọ́nà kan náà." },
            { objective: "O5", q: "Ìdáhùn kan nínú ìdánwò playbook AI kò bá eré rẹ gidi mu. Kí ni o máa ṣe?", options: ["Pín in bẹ́ẹ̀", "Tún ìdáhùn náà ṣe kí o tó pín in", "Yí eré rẹ padà kí ó lè bá a mu", "Yọ ìdánwò náà kúrò nínú ẹ̀kọ́ náà"], answer: 1, why: "Gbogbo ìdáhùn ìdánwò gbọ́dọ̀ bá bí ẹgbẹ́ rẹ ṣe ń ṣe eré náà gan-an mu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ààlà: ìpamọ́, ààbò àti òdodo",
          minutes: 5,
          goal: "Kọ ààlà AI olùkọ́ eré rẹ kí o sì tẹ̀lé wọn.",
          text: [
            "Ìpamọ́: má ṣe lẹ̀ orúkọ eléré pẹ̀lú ìsọfúnni ìlera, ìfarapa, máàkì ilé-ìwé, ipò ẹbí, ìsọfúnni olùbásọ̀rọ̀ tàbí fọ́tò àwọn ọmọdé sínú irinṣẹ́ AI láéláé. Lo ipò eré tàbí nọ́mbà. Ṣàyẹ̀wò òfin àjọ rẹ nípa àwọn irinṣẹ́ tí a lè lò pẹ̀lú ìsọfúnni akẹ́kọ̀ọ́ tàbí eléré.",
            "Ààbò: AI lè dábàá ìdánrawò, eré ìmúra-ara (conditioning) tàbí ìdánrawò nínú ooru tó ti di àtijọ́ tàbí tí kò láàbò. Ṣàyẹ̀wò ìdánrawò sí ìtọ́sọ́nà àjọ tó ń darí eré rẹ àti olùtọ́jú eléré (athletic trainer) rẹ, má sì lo AI fún ìpinnu ìlera, ìpalára orí (concussion) tàbí ìpadà sí eré láéláé; ẹ̀kọ́ HEADS UP ọ̀fẹ́ ti CDC (àjọ ìlera ìjọba US) jẹ́ ibi kan láti kọ́ ìpìlẹ̀ nípa ìpalára orí.",
            "Òdodo àti òtítọ́: ìpinnu nípa yíyan eléré àti àkókò eré ń wá láti inú ohun tí o rí, tí o sì ṣàlàyé fún àwọn eléré ní ojúkojú. Sọ fún àwọn ẹbí ní gbangba pé o ń lo AI fún ètò, tí àjọ rẹ bá béèrè bẹ́ẹ̀."
          ],
          steps: ["Kọ òfin ìpamọ́ rẹ: kò sí orúkọ pẹ̀lú ìsọfúnni àdáni.", "Kọ òfin ààbò rẹ: ṣàyẹ̀wò ìdánrawò; kò sí ìpinnu ìlera.", "Kọ òfin òdodo rẹ: ìpinnu láti inú ohun tí o rí, tí o ṣàlàyé ní ojúkojú.", "Ṣàyẹ̀wò òfin ẹ̀rọ ìgbàlódé àjọ rẹ.", "Pín àwọn ààlà náà fún àwọn òṣìṣẹ́ rẹ."],
          words: [["Ààlà (guardrail)", "òfin tó ń pa ọ́ mọ́ láìléwu nígbà tí o bá ń lo irinṣẹ́ kan."], ["Àjọ tó ń darí eré (governing body)", "àjọ tó ń ṣe òfin fún eré rẹ tàbí ìpele rẹ."]],
          slides: [
            { title: "Ìpamọ́", bullets: ["Kò sí orúkọ pẹ̀lú ìlera, máàkì tàbí ìsọfúnni ẹbí", "Lo ipò eré tàbí nọ́mbà", "Tẹ̀lé òfin irinṣẹ́ àjọ rẹ"] },
            { title: "Ààbò", bullets: ["Ṣàyẹ̀wò ìdánrawò àti eré ìmúra-ara", "Kò sí ìpinnu ìlera tàbí ìpadà sí eré", "CDC HEADS UP fún ìpìlẹ̀ ìpalára orí"] },
            { title: "Òdodo", bullets: ["Ìpinnu láti inú ohun tí o rí", "Ṣàlàyé ní ojúkojú"] }
          ],
          sources: [{ name: "CDC: Ẹ̀kọ́ HEADS UP nípa ìpalára orí (concussion)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ààlà rẹ àti ìtọ́sọ́nà àyègbà rẹ, lẹ́yìn náà ṣe ètò ìdánrawò, ọ̀rọ̀ ìránṣẹ́ sí òbí, káàdì ìdánrawò àti ìdánwò kan pẹ̀lú AI, ṣàyẹ̀wò ọ̀kọ̀ọ̀kan, kí o sì rí i dájú pé a kò lo ìsọfúnni àdáni eléré kankan.",
          youCanNow: "lo olùrànlọ́wọ́ AI olùkọ́ eré pẹ̀lú ààlà tó ṣe kedere fún ìpamọ́, ààbò àti òdodo.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ààlà AI olùkọ́ eré?", options: ["Ọgbà tó yí pápá ká", "Ìdánrawò fún àwọn olùgbèjà", "Òfin tó ń pa ọ́ mọ́ láìléwu nígbà tí o bá ń lo AI", "Irú àwòrán àtẹ kan"], answer: 2, why: "Ààlà ń sọ ohun tí o máa ṣe àti ohun tí o kò ní ṣe pẹ̀lú AI." },
            { objective: "O6", q: "O fẹ́ ìrànlọ́wọ́ AI fún ìmúláradá eléré kan lẹ́yìn ìpalára orí. Kí ni o máa ṣe?", options: ["Lẹ̀ àkọsílẹ̀ ìlera rẹ̀ sínú rẹ̀", "Tẹ̀lé ọjọ́ ìpadà tí AI sọ", "Bi àwọn ẹgbẹ́ eléré náà", "Fi í sílẹ̀ fún àwọn akọ́ṣẹ́mọṣẹ́ ìlera"], answer: 3, why: "Ìpinnu ìpadà sí eré lẹ́yìn ìpalára orí jẹ́ ti àwọn akọ́ṣẹ́mọṣẹ́ ìlera." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìbánisọ̀rọ̀, ohun èlò àti ààlà",
        questions: [
          { objective: "O4", q: "Níbo ló yẹ kí a ti sọ̀rọ̀ nípa ìwà eléré kan?", options: ["Nínú ìjíròrò ẹgbẹ́ (group chat)", "Lórí ìkànnì àjọlò", "Nínú ọ̀rọ̀ ẹgbẹ́ tí AI kọ", "Ní ìkọ̀kọ̀, ní ojúkojú tàbí lórí fóònù"], answer: 3, why: "Ọ̀rọ̀ ìránṣẹ́ ẹgbẹ́ máa ń jẹ́ nípa ẹgbẹ́." },
          { objective: "O5", q: "Káàdì ìdánrawò ní:", options: ["Ète, bí a ṣe ń tò ó, ìgbésẹ̀ àti kókó ìkọ́ni", "Máàkì ilé-ìwé eléré", "Àkọsílẹ̀ ìlera eléré", "Kò ní nǹkankan"], answer: 0, why: "Ó ń ran gbogbo ènìyàn lọ́wọ́ láti ṣe ìdánrawò lọ́nà kan náà." },
          { objective: "O5", q: "AI kọ ìdánwò playbook. Kí o tó pín in, o máa:", options: ["Pín in láìkà á", "Fi ìdáhùn ẹ̀tàn kún un", "Ṣàyẹ̀wò gbogbo ìdáhùn sí eré rẹ gidi", "Jẹ́ kí AI fún àwọn eléré ní máàkì"], answer: 2, why: "AI lè ṣì eré rẹ." },
          { objective: "O6", q: "Èwo ló láàbò láti lẹ̀ sínú AI?", options: ["\"Maria Lopez, ACL ya, ó ń lo oògùn\"", "Àdírẹ́sì ilé eléré kan", "Fọ́tò àti orúkọ kíkún ọmọdé kan", "\"Olùgbèjà òsì wa ń pàdánù ẹni tí ó ń ṣọ́ nígbà corner\""], answer: 3, why: "Ipò eré láìsí orúkọ tàbí ìsọfúnni ìlera ń dáàbò bo ìpamọ́." },
          { objective: "O6", q: "Ta ló ń ṣe ìpinnu ìpadà sí eré lẹ́yìn ìpalára orí?", options: ["Olùrànlọ́wọ́ AI", "Àwọn akọ́ṣẹ́mọṣẹ́ ìlera", "Olórí ẹgbẹ́ (captain)", "Àwọn òbí nínú ìjíròrò ẹgbẹ́"], answer: 1, why: "Ìpinnu ìlera jẹ́ ti àwọn akọ́ṣẹ́mọṣẹ́ tó kúnjú ìwọ̀n." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Àwọn Olùrànlọ́wọ́ AI fún Olùkọ́ Eré",
    questions: [
      { objective: "O1", q: "Olùrànlọ́wọ́ AI olùkọ́ eré ni:", options: ["Rọ́bọ́ọ̀tì kan lórí bẹ́ǹṣì", "Adájọ́ eré (referee)", "Olùrànlọ́wọ́ AI gbogbogbò tí a ń lò fún iṣẹ́ olùkọ́ eré", "Olùwá-eléré (scout) tí a ń sanwó fún"], answer: 2, why: "Àwọn olùkọ́ eré ń lo olùrànlọ́wọ́ ọ̀fẹ́ fún iṣẹ́ olùkọ́ eré." },
      { objective: "O1", q: "Èwo ni AI KÒ lè ṣe?", options: ["Rí àwọn eléré rẹ kí ó sì mọ ìmọ̀lára wọn", "Kọ àkọ́kọ́ ètò àkókò", "Kọ àpèjúwe ìdánrawò", "Ṣe àkópọ̀ àkọsílẹ̀"], answer: 0, why: "Ohun tí o sọ fún un nìkan ló mọ̀." },
      { objective: "O1", q: "Ta ló ń pinnu àkókò eré?", options: ["Olùkọ́ eré", "AI", "Ìjíròrò ẹgbẹ́ àwọn òbí", "Alátakò"], answer: 0, why: "Àkókò eré jẹ́ ìpinnu ènìyàn." },
      { objective: "O2", q: "Ìtọ́sọ́nà àyègbà ni:", options: ["Nínà ara ẹgbẹ́", "Ìwé òfin", "Ìsọfúnni tí o fún AI ní ìbẹ̀rẹ̀", "Ife ẹ̀yẹ"], answer: 2, why: "Wọ́n ń jẹ́ kí ìdáhùn bá ẹgbẹ́ rẹ mu." },
      { objective: "O2", q: "Òfin ààbò wo ló bá ìtọ́sọ́nà àyègbà mu?", options: ["Kò sí ìsinmi rárá", "Ìsinmi omi ní ìṣẹ́jú 20 kọ̀ọ̀kan", "Sísáré ìjìyà", "Fo ìgbaradì"], answer: 1, why: "Òfin ààbò yẹ kí ó wà nínú ìtọ́sọ́nà." },
      { objective: "O2", q: "Kí ni ìtọ́sọ́nà àyègbà gbọ́dọ̀ sọ pé kí a má fi kún un láéláé?", options: ["Gígùn ìdánrawò", "Ọjọ́ orí", "Ìtóbi pápá", "Orúkọ eléré àti ìsọfúnni ìlera"], answer: 3, why: "Ìsọfúnni àdáni kò gbọ́dọ̀ wà níbẹ̀." },
      { objective: "O3", q: "Ìtẹ̀síwájú (progression) ni:", options: ["Ìrìn ìwọ́de", "Ìdíje ìparí (playoff)", "Àwọn ìdánrawò tó ń lọ láti rírọrùn sí líle", "Àyípadà ètò àkókò"], answer: 2, why: "Ìtẹ̀síwájú ń kọ́ ọgbọ́n eré ní ìgbésẹ̀ ìgbésẹ̀." },
      { objective: "O3", q: "Àkókò inú ètò AI pé ìṣẹ́jú 120 fún ìdánrawò ìṣẹ́jú 90. O máa:", options: ["Ṣe ìṣẹ́jú 120 bẹ́ẹ̀", "Fo ìgbaradì", "Fojú fò ó", "Ní kí ó tún àkókò náà ṣe"], answer: 3, why: "Ṣàyẹ̀wò pé àwọn àkókò dọ́gba." },
      { objective: "O3", q: "Bọ́ọ̀lù 10 péré ni o ní. O máa:", options: ["Sọ fún AI kí o sì ní kí ó tún un ṣe", "Fagilé ìdánrawò", "Ra 50 lónìí", "Fojú fo ètò náà"], answer: 0, why: "Ìbéèrè àtẹ̀lé ń mú ètò bá ohun èlò rẹ mu." },
      { objective: "O4", q: "Ọ̀rọ̀ ìránṣẹ́ sí òbí nípa àyípadà ètò àkókò gbọ́dọ̀ jẹ́:", options: ["Gígùn, tí kò sì ṣe kedere", "Kúkúrú, ọ̀rẹ́, tí a ti ṣàyẹ̀wò ọjọ́ rẹ̀", "Èyí tí a fi ránṣẹ́ láìṣàyẹ̀wò", "Èyí tí a fi ránṣẹ́ láti àkáǹtì ara ẹni lòdì sí òfin ẹgbẹ́ eré"], answer: 1, why: "Ọ̀rọ̀ tó ṣe kedere, tó sì péye ló dára jù." },
      { objective: "O4", q: "Ọ̀rọ̀ ìránṣẹ́ ẹgbẹ́ gbọ́dọ̀ jẹ́ nípa:", options: ["Àṣìṣe eléré kan", "Ìsọfúnni ìfarapa eléré kan", "Ẹgbẹ́ náà", "Òfófó"], answer: 2, why: "Ọ̀rọ̀ ẹnìkọ̀ọ̀kan máa wà ní àdáni." },
      { objective: "O4", q: "Òfin fífi ọ̀rọ̀ ránṣẹ́ sí ọmọdé sábà máa ń béèrè pé:", options: ["Kí a fi òbí tàbí olùkọ́ eré míì kún un", "Ọ̀rọ̀ ìkọ̀kọ̀", "Fífi ọ̀rọ̀ ránṣẹ́ ní òru", "Àkáǹtì ìkànnì àjọlò ara ẹni"], answer: 0, why: "Àwọn òfin wọ̀nyí ń dáàbò bo àwọn eléré àti olùkọ́ eré." },
      { objective: "O4", q: "Ọ̀rọ̀ tó le nípa àkókò eré dára jù:", options: ["Nínú ọ̀rọ̀ tí AI kọ", "Lórí ìkànnì àjọlò", "Nínú ìjíròrò ẹgbẹ́", "Ní ojúkojú tàbí lórí fóònù"], answer: 3, why: "Ọ̀rọ̀ tó le nílò ìfọwọ́kan ènìyàn." },
      { objective: "O5", q: "Káàdì ìdánrawò ń ṣèrànwọ́ láti:", options: ["Fi ìdánrawò pamọ́", "Jẹ́ kí àwọn olùrànlọ́wọ́ àti eléré ṣe ìdánrawò lọ́nà kan náà", "Rọ́pò ìdánrawò", "Tọ́jú máàkì ilé-ìwé"], answer: 1, why: "Ṣíṣe nǹkan lọ́nà kan náà ń mú ìdánrawò dára sí i." },
      { objective: "O5", q: "Ìdánwò playbook ń ṣàyẹ̀wò:", options: ["Ìlera àwọn eléré", "Bóyá àwọn eléré mọ àwọn eré (play)", "Máàkì ilé-ìwé eléré", "Ètò àkókò àwọn òbí"], answer: 1, why: "Ìdánwò ń fi ẹ̀kọ́ lélẹ̀ dáadáa." },
      { objective: "O5", q: "Nígbà tí o bá ń pín ìdánwò pẹ̀lú fọ́ọ̀mù, gba:", options: ["Àdírẹ́sì ilé", "Ọ̀rọ̀ aṣínà (password)", "Ìtàn ìlera", "Ìsọfúnni tí o nílò nìkan"], answer: 3, why: "Ìsọfúnni díẹ̀ ń dáàbò bo àwọn eléré." },
      { objective: "O6", q: "Ààlà (guardrail) ni:", options: ["Òfin tó ń pa ọ́ mọ́ láìléwu nígbà tí o bá ń lo irinṣẹ́ kan", "Ọgbà", "Ìdánrawò", "Aṣọ eré"], answer: 0, why: "Ààlà ń dènà lílo nǹkan lọ́nà tí kò tọ́." },
      { objective: "O6", q: "AI dábàá eré ìmúra-ara tó le nínú ooru gbígbóná. O máa:", options: ["Ṣe é", "Mú un gùn sí i", "Ṣàyẹ̀wò pẹ̀lú olùtọ́jú eléré rẹ àti ìtọ́sọ́nà àjọ tó ń darí eré", "Fo omi"], answer: 2, why: "AI lè dábàá ìdánrawò tí kò láàbò." },
      { objective: "O6", q: "Àjọ tó ń darí eré (governing body) ni:", options: ["Ilé ìdánrawò (gym)", "Onígbọ̀wọ́ (sponsor)", "Ẹgbẹ́ àwọn òbí", "Àjọ tó ń ṣe òfin fún eré rẹ tàbí ìpele rẹ"], answer: 3, why: "Ó ń ṣe òfin ìjọba eré náà." },
      { objective: "O1", q: "Ìpinnu yíyan eléré gbọ́dọ̀ wá láti inú:", options: ["Àmọ̀ràn AI", "Ohun tí olùkọ́ eré rí", "Ìkànnì àjọlò", "Àhesọ ọ̀rọ̀"], answer: 1, why: "Ìpinnu tó tọ́ ń wá láti inú ohun tí a rí gan-an." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ìtọ́sọ́nà àyègbà",
        objective: "O2",
        notYet: "Ìpele ẹgbẹ́, gígùn ìdánrawò tàbí òfin ààbò kò sí níbẹ̀.",
        meets: "Ìpele ẹgbẹ́, gígùn, ọ̀nà ìkọ́ni, òfin ààbò àti òfin pé kò sí ìsọfúnni àdáni.",
        exceeds: "Ó tún kọ ohun èlò àti ààyè sílẹ̀ kí ètò lè bá pápá gidi mu."
      },
      {
        name: "Ètò ìdánrawò",
        objective: "O3",
        notYet: "Àkókò kò dọ́gba sí ìṣẹ́jú 90, tàbí ìdánrawò kan kò láàbò fún ọjọ́ orí náà.",
        meets: "Ètò ìṣẹ́jú 90 pẹ̀lú àkókò tó tọ́ àti ìdánrawò tó láàbò, tí a yí padà ó kéré tán lẹ́ẹ̀mejì.",
        exceeds: "Ó ní ìtẹ̀síwájú tó ṣe kedere àti ìsinmi omi, ó sì kọ ìdí tí a fi ṣe àyípadà kọ̀ọ̀kan."
      },
      {
        name: "Ọ̀rọ̀ ìránṣẹ́ sí òbí",
        objective: "O4",
        notYet: "Ọjọ́ tí kò tọ́, ohùn ọ̀rọ̀ tí kò ní inúure, tàbí ìsọfúnni àdáni eléré.",
        meets: "Kúkúrú, ọ̀rẹ́, a ti ṣàyẹ̀wò ọjọ́, a sì fi ránṣẹ́ tàbí fi pamọ́ nípasẹ̀ ọ̀nà tí a fọwọ́ sí.",
        exceeds: "Ó tún sọ ẹni tí a lè kàn sí pẹ̀lú ìbéèrè, ó sì tẹ̀lé òfin fífi ọ̀rọ̀ ránṣẹ́ sí ọmọdé."
      },
      {
        name: "Káàdì ìdánrawò àti ìdánwò",
        objective: "O5",
        notYet: "Ìgbésẹ̀ kan tàbí ìdáhùn ìdánwò kan kò bá ìdánrawò tàbí eré gidi mu.",
        meets: "Káàdì ìdánrawò pẹ̀lú ète, bí a ṣe ń tò ó, ìgbésẹ̀ àti kókó ìkọ́ni; ìbéèrè ìdánwò márùn-ún tí a ti ṣàyẹ̀wò.",
        exceeds: "Ìdánwò náà kò gba ìsọfúnni ju èyí tó pọndandan lọ, ó sì bo àwọn àkókò pàtàkì inú eré náà."
      },
      {
        name: "Ààlà àti ìpamọ́",
        objective: "O6",
        notYet: "Ìbéèrè (prompt) kan ní orúkọ eléré tàbí ìsọfúnni ìlera, tàbí AI ṣe ìpinnu tó jẹ́ ti olùkọ́ eré.",
        meets: "A tẹ̀lé ààlà tí a kọ sílẹ̀; a kò lo ìsọfúnni àdáni eléré; olùkọ́ eré ló ṣe àwọn ìpinnu.",
        exceeds: "Ààlà náà tún sọ ibi tí ìbéèrè nípa ìlera àti ooru máa lọ."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn olùkọ́ eré tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olùkọ́ eré tí wọ́n sọ pé wọ́n fi àkókò pamọ́ lórí ètò àti ọ̀rọ̀ ìránṣẹ́ ọ̀sẹ̀ (ìwádìí àtẹ̀lé ọjọ́ 30)",
      "Àwọn ẹgbẹ́ eré tàbí ilé-ìwé tí wọ́n gba ààlà AI tí a kọ sílẹ̀ fún àwọn olùkọ́ eré wọn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Koach Learn míì fún eléré ìdárayá láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tó ní olùrànlọ́wọ́ AI ọ̀fẹ́",
      "App àkọsílẹ̀ (note) tàbí ìwé láti fi ìtọ́sọ́nà àyègbà àti ààlà pamọ́",
      "Ètò àkókò ẹgbẹ́ rẹ, àkọsílẹ̀ ohun èlò rẹ, àti eré kan tàbí ìdánrawò kan láti ṣiṣẹ́ lé lórí",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀ fún ẹ̀kọ́, iṣẹ́ ìdánrawò, ìdánwò ìmọ̀ àti ìdánwò ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣe é gẹ́gẹ́ bí ìpàdé ìkọ́ni olùkọ́ eré (coach clinic): ẹ jọ kọ ìtọ́sọ́nà àyègbà, lẹ́yìn náà kí olùkọ́ eré kọ̀ọ̀kan kọ àkọ́kọ́ ètò fún ẹgbẹ́ tirẹ̀.",
      "Pín òfin ẹgbẹ́ eré tàbí ilé-ìwé rẹ nípa fífi ọ̀rọ̀ ránṣẹ́ sí ọmọdé àti ìsọfúnni akẹ́kọ̀ọ́ kí Ẹ̀kọ́ 4 tó bẹ̀rẹ̀.",
      "Rí i dájú pé kò sí ẹni tó lẹ̀ orúkọ eléré, ìsọfúnni ìlera tàbí fọ́tò ọmọdé sínú irinṣẹ́ AI.",
      "Jẹ́ kí olùtọ́jú eléré (athletic trainer) tàbí olórí ààbò ṣàyẹ̀wò ìtọ́sọ́nà nípa ooru àti eré ìmúra-ara.",
      "Fi rubric fún iṣẹ́ ìkẹyìn ní máàkì, ìlà \"Kò tíì dé\" kan ní àkókò kan."
    ]
  }
};
