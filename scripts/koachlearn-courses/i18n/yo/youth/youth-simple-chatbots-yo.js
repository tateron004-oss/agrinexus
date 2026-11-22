"use strict";

// Koach Learn course (Yoruba translation of youth/youth-simple-chatbots.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-simple-chatbots-yo",
  lang: "yo",
  translationOf: "youth-simple-chatbots",
  category: "Youth",
  name: "Ṣíṣe Chatbot AI Tó Rọrùn",
  skills: "Ṣíṣètò ohun tí chatbot yóò ṣe, Ṣíṣe chatbot ọ̀rọ̀-kọ́kọ́rọ́ nínú Python, Kíkọ ìlànà bot fún olùrànlọ́wọ́ AI, Ṣíṣàyẹ̀wò pẹ̀lú ìbéèrè gidi, Mímú kí bot wà láìléwu kí ó sì jẹ́ olóòótọ́",
  outcome: "ṣe chatbot ìbéèrè-àti-ìdáhùn tó rọrùn fún ẹgbẹ́ kan ní ilé-ìwé: bot ọ̀rọ̀-kọ́kọ́rọ́ nínú Python tí ó ń dáhùn ó kéré tán ìbéèrè márùn-ún tí wọ́n sábà máa ń béèrè, àti àkọsílẹ̀ ìlànà tí ó ń sọ olùrànlọ́wọ́ AI ọ̀fẹ́ di olùrànlọ́wọ́ fún ẹgbẹ́ náà, tí o ti ṣàyẹ̀wò méjèèjì pẹ̀lú ìbéèrè gidi, tí wọ́n sì wà láìléwu, tí wọ́n jẹ́ olóòótọ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ọ̀dọ́ tí wọ́n fẹ́ mọ bí chatbot ṣe ń ṣiṣẹ́ nípa ṣíṣe ọ̀kan. O kò nílò ìrírí kóòdù; o máa da àwọn àpẹẹrẹ kóòdù kékeré kọ, o sì máa yí wọn padà.",
    "O máa ṣètò chatbot fún nǹkan gidi, bí ẹgbẹ́ robotics rẹ, ẹgbẹ́ olórin tàbí ẹgbẹ́ eré ìdárayá rẹ. Lákọ̀ọ́kọ́, o máa ṣe bot ọ̀rọ̀-kọ́kọ́rọ́ tó rọrùn nínú Python lórí Google Colab, ìwé-iṣẹ́ (notebook) ọ̀fẹ́ tí ó ń ṣiṣẹ́ nínú browser. Lẹ́yìn náà, o máa kọ ìlànà tí ó ń jẹ́ kí olùrànlọ́wọ́ AI ọ̀fẹ́ bí ChatGPT, Microsoft Copilot tàbí Google Gemini ṣiṣẹ́ bí olùrànlọ́wọ́ ẹgbẹ́ náà, o sì máa fi méjèèjì wé ara wọn. Ní ìparí, o máa ṣàyẹ̀wò méjèèjì, o sì máa jẹ́ kí wọ́n wà láìléwu kí wọ́n sì jẹ́ olóòótọ́.",
    "Google Colab àti àwọn olùrànlọ́wọ́ AI nílò àkáǹtì, wọ́n sì ní ọjọ́ orí tí ó kéré jù. Ka òfin irinṣẹ́ kọ̀ọ̀kan, tẹ̀lé òfin ilé-ìwé rẹ nípa AI, kí o sì jẹ́ kí òbí tàbí alágbàtọ́ rẹ wà níbẹ̀ nígbà tí o bá ń forúkọ sílẹ̀. Ẹ̀kọ́ kọ̀ọ̀kan parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\", ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì parí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe chatbot fún ẹgbẹ́ kan ní ilé-ìwé. Apá 1: bot ọ̀rọ̀-kọ́kọ́rọ́ Python nínú Google Colab tí ó ń kí olùlò, tí ó ń dáhùn ó kéré tán ìbéèrè márùn-ún tí wọ́n sábà máa ń béèrè (bí àkókò ìpàdé, ibi ìpàdé àti bí a ṣe ń darapọ̀), tí ó ń sọ \"Mi ò mọ̀, jọ̀wọ́ béèrè lọ́wọ́ olùdarí ẹgbẹ́\" fún ohunkóhun míì, tí ó sì ń dúró nígbà tí olùlò bá tẹ bye. Apá 2: káàdì ìlànà tí ó ń jẹ́ kí olùrànlọ́wọ́ AI ọ̀fẹ́ ṣiṣẹ́ bí olùrànlọ́wọ́ ẹgbẹ́ náà. Ṣàyẹ̀wò méjèèjì pẹ̀lú ìbéèrè gidi 10, kọ ohun tí ọ̀kọ̀ọ̀kan ṣe dáadáa àti ibi tí ó ti ṣàṣìṣe, kí o sì ṣe àtúnṣe kan sí ọ̀kọ̀ọ̀kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ tí wọ́n fẹ́ mọ bí chatbot ṣe ń ṣiṣẹ́ nípa ṣíṣe ọ̀kan fún ẹgbẹ́ gidi bí ẹgbẹ́ ilé-ìwé, ẹgbẹ́ olórin tàbí ẹgbẹ́ eré ìdárayá, yálà wọ́n ní ìrírí kóòdù tàbí wọn kò ní.",
    startingPoint: "Wọ́n ti lo chatbot lórí ojú-òpó wẹ́ẹ̀bù, nínú eré tàbí olùrànlọ́wọ́ AI. Ọ̀pọ̀ jù lọ kò tíì kọ kóòdù rí, kò tíì ṣètò iṣẹ́ bot kan rí, tàbí ṣàyẹ̀wò bot kí wọ́n sì tún ohun tí kò ṣiṣẹ́ ṣe.",
    gap: "Chatbot wà níbi gbogbo, ṣùgbọ́n ọ̀pọ̀ ọ̀dọ́ ń lò wọ́n nìkan ni. Ṣíṣe bot ọ̀rọ̀-kọ́kọ́rọ́ tó rọrùn àti olùrànlọ́wọ́ AI ń fi hàn bí méjèèjì ṣe ń ṣiṣẹ́, ibi tí ọ̀kọ̀ọ̀kan ti ń kùnà, àti ìdí tí bot fi gbọ́dọ̀ jẹ́ olóòótọ́ kí ó sì dáàbò bo ìsọfúnni àdáni. Ìwọ̀nyí jẹ́ ọgbọ́n gidi fún kóòdù, iṣẹ́ ẹ̀rọ ìgbàlódé àti fún sísin ẹgbẹ́ tiwọn.",
    constraints: [
      "Ọjọ́ orí: Google Colab àti àwọn olùrànlọ́wọ́ AI nílò àkáǹtì, wọ́n sì ní ọjọ́ orí tí ó kéré jù; òbí tàbí alágbàtọ́ máa wà níbẹ̀ nígbà ìforúkọsílẹ̀",
      "Òfin ilé-ìwé nípa AI àti ẹ̀rọ ìgbàlódé; olùdarí ẹgbẹ́ ló máa fọwọ́ sí pínpín bot náà",
      "Olùbẹ̀rẹ̀: àwọn àpẹẹrẹ kóòdù kékeré láti dà kọ àti láti yí padà; nǹkan bí ìṣẹ́jú márùn-ún fún ẹ̀kọ́ kọ̀ọ̀kan",
      "Ẹ̀rọ: kọ̀mpútà tí ó ní browser; kò sí nǹkan láti fi sórí ẹ̀rọ (install)",
      "Ìsọfúnni àdáni: bot kì í béèrè tàbí tọ́jú ọ̀rọ̀ aṣínà, nọ́mbà fóònù, àdírẹ́sì tàbí nọ́mbà ìdánimọ̀ láéláé"
    ],
    prerequisites: "Kò sí. \"Ìfihàn sí Kíkọ Kóòdù pẹ̀lú AI\" máa ràn ọ́ lọ́wọ́, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn àpẹẹrẹ chatbot", action: "ṣàlàyé bí chatbot ọ̀rọ̀-kọ́kọ́rọ́ àti chatbot AI ṣe ń ṣiṣẹ́, pẹ̀lú agbára kan àti ààlà kan ti ọ̀kọ̀ọ̀kan", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O2", condition: "Fún ẹgbẹ́ gidi kan", action: "kọ ètò bot tí ó sọ ẹni tí ó ń ràn lọ́wọ́, ìdáhùn márùn-ún tàbí jù bẹ́ẹ̀ lọ tí a ti ṣàyẹ̀wò, ìdáhùn àfidípò àti ohun tí kò gbọdọ̀ ṣe láéláé", standard: "tí olùdarí ẹgbẹ́ ti ṣàyẹ̀wò gbogbo ìdáhùn" },
    { id: "O3", condition: "Ní lílo Google Colab", action: "ṣe chatbot ọ̀rọ̀-kọ́kọ́rọ́ Python tí ó ní loop, ìdáhùn fún ọ̀rọ̀-kọ́kọ́rọ́, ìdáhùn àfidípò àti ìdágbére", standard: "tí ó fi ń ṣiṣẹ́, tí ó sì ń dáhùn ó kéré tán ìbéèrè márùn-ún" },
    { id: "O4", condition: "Ní lílo olùrànlọ́wọ́ AI ọ̀fẹ́", action: "kọ káàdì ìlànà tí ó ní ipa (role), òtítọ́ tí a ti ṣàyẹ̀wò, ohùn àti ààlà, tí ó ń jẹ́ kí olùrànlọ́wọ́ náà ṣiṣẹ́ bí olùrànlọ́wọ́ ẹgbẹ́", standard: "tí ó fi ń rán ìbéèrè tí kò mọ̀ sí olùdarí, tí kò sì béèrè ìsọfúnni àdáni kankan" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìbéèrè ìdánwò 10 tí ó dà bí gidi", action: "ṣàyẹ̀wò bot méjèèjì, sàmì sí ìdáhùn kọ̀ọ̀kan bí ó tọ́, kò tọ́ tàbí àhùsọ, kí o sì tún ohun tí kò ṣiṣẹ́ ṣe", standard: "kí o ṣe ó kéré tán àtúnṣe kan sí bot kọ̀ọ̀kan, kí o sì tún ṣàyẹ̀wò" },
    { id: "O6", condition: "Kí o tó pín bot rẹ", action: "fi ìkíni tí ó sọ pé bot ni kún un, fi ààlà ìsọfúnni àdáni àti ààbò kún un, kí o sì gba àṣẹ olùdarí rẹ", standard: "tí ó ń rán ìbéèrè tó ṣe pàtàkì tàbí èyí tí kò mọ̀ sí àgbàlagbà tí a gbẹ́kẹ̀ lé" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí chatbot ṣe ń ṣiṣẹ́, àti bot àkọ́kọ́ rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí chatbot jẹ́, àti ọ̀nà méjì láti ṣe é",
          minutes: 4,
          goal: "Ṣàlàyé ìyàtọ̀ láàárín chatbot ọ̀rọ̀-kọ́kọ́rọ́ àti chatbot AI.",
          text: [
            "Chatbot jẹ́ ètò kọ̀mpútà tí o ń bá sọ̀rọ̀ nípa títẹ ọ̀rọ̀ tàbí sísọ̀rọ̀. O máa ń rí wọn lórí ojú-òpó wẹ́ẹ̀bù (\"Báwo ni mo ṣe lè ràn ọ́ lọ́wọ́?\"), nínú eré àti nínú app.",
            "Oríṣi méjì pàtàkì ló wà. Chatbot ọ̀rọ̀-kọ́kọ́rọ́ ń tẹ̀lé òfin tí ènìyàn kọ: tí ọ̀rọ̀ náà bá ní \"time\" (àkókò) nínú, fi àkókò ìpàdé dáhùn. Ó rọrùn, a sì lè mọ ohun tí yóò ṣe, ṣùgbọ́n ohun tí o kọ́ ọ nìkan ló mọ̀. Chatbot AI ń lo large language model, tí ó kẹ́kọ̀ọ́ láti inú ọ̀rọ̀ tó pọ̀ gan-an. Ó lè dáhùn fẹ́rẹ̀ẹ́ ohunkóhun ní ọ̀rọ̀ àdámọ́, ṣùgbọ́n ó tún lè ṣàṣìṣe tàbí hùmọ̀ nǹkan.",
            "Nínú ẹ̀kọ́ yìí, o máa ṣe méjèèjì fún ìlò gidi, bí dídáhùn ìbéèrè àwọn ọmọ ẹgbẹ́ tuntun fún ẹgbẹ́ rẹ, kí o lè rí agbára àti ààlà ọ̀kọ̀ọ̀kan."
          ],
          words: [["Chatbot", "ètò kọ̀mpútà tí o ń bá sọ̀rọ̀ nípa títẹ ọ̀rọ̀ tàbí sísọ̀rọ̀."], ["Ọ̀rọ̀-kọ́kọ́rọ́ (keyword)", "ọ̀rọ̀ tí bot ń wá láti pinnu bí yóò ṣe dáhùn."], ["Large language model", "irú AI tí ó wà lẹ́yìn olùrànlọ́wọ́ bí ChatGPT; ó kọ́ àwọn àpẹẹrẹ láti inú ọ̀rọ̀ tó pọ̀ gan-an."]],
          slides: [
            { title: "Chatbot ni...", bullets: ["Ètò kọ̀mpútà tí o ń bá sọ̀rọ̀", "Lórí ojú-òpó wẹ́ẹ̀bù, nínú eré àti app"] },
            { title: "Chatbot ọ̀rọ̀-kọ́kọ́rọ́", bullets: ["Ó ń tẹ̀lé òfin tí ènìyàn kọ", "Ó rọrùn, a sì lè mọ ohun tí yóò ṣe", "Ohun tí o kọ́ ọ nìkan ló mọ̀"] },
            { title: "Chatbot AI", bullets: ["Ó ń lo large language model", "Ó ń dáhùn ní ọ̀rọ̀ àdámọ́", "Ó lè ṣàṣìṣe tàbí hùmọ̀ nǹkan"] }
          ],
          tryIt: "Yan ẹgbẹ́ kan tí o wà nínú rẹ̀. Kọ ìbéèrè márùn-ún tí àwọn ọmọ ẹgbẹ́ tuntun máa ń béèrè nígbà gbogbo sílẹ̀, bí ìgbà tí ẹ ń pàdé, ibi tí ẹ ń pàdé, àti bí a ṣe ń darapọ̀.",
          youCanNow: "ṣàlàyé ìyàtọ̀ láàárín chatbot ọ̀rọ̀-kọ́kọ́rọ́ àti chatbot AI, kí o sì yan ìlò gidi kan fún bot.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ààlà kan ti chatbot ọ̀rọ̀-kọ́kọ́rọ́?", options: ["A kò lè mọ ohun tí yóò ṣe", "Ohun tí o kọ́ ọ nìkan ló mọ̀", "Ó máa ń hùmọ̀ òtítọ́ nígbà gbogbo", "Ó nílò large language model"], answer: 1, why: "Bot ọ̀rọ̀-kọ́kọ́rọ́ ń tẹ̀lé òfin tí ènìyàn kọ, nítorí náà ohun tí a kọ́ ọ nìkan ló mọ̀." },
            { objective: "O1", q: "O nílò bot tí yóò máa fún ni ní àkókò ìpàdé kan náà gẹ́lẹ́, tí a ti ṣàyẹ̀wò, nígbà gbogbo. Irú wo ló ní ààbò jù?", options: ["Chatbot AI tí kò ní ìlànà kankan", "Kò sí èyí tí ó lè ṣe èyí", "Bot ojú-òpó wẹ́ẹ̀bù èyíkéyìí", "Chatbot ọ̀rọ̀-kọ́kọ́rọ́ tí ó ní ìdáhùn tí a ti ṣàyẹ̀wò"], answer: 3, why: "Bot ọ̀rọ̀-kọ́kọ́rọ́ rọrùn, a sì lè mọ ohun tí yóò ṣe; bot AI lè ṣàṣìṣe tàbí hùmọ̀ nǹkan." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣètò iṣẹ́ bot rẹ",
          minutes: 5,
          goal: "Kọ ètò tó rọrùn: ẹni tí bot ń ràn lọ́wọ́, ohun tí ó ń dáhùn àti ohun tí kò gbọdọ̀ ṣe láéláé.",
          text: [
            "Bot tó dára ní iṣẹ́ kékeré tó yé. Kọ ètò bot tí ó ní apá mẹ́rin: ẹni tí ó ń ràn lọ́wọ́ (fún àpẹẹrẹ, àwọn ọmọ ẹgbẹ́ tuntun ti ẹgbẹ́ chess), àwọn ìbéèrè tí ó ń dáhùn, àwọn ìdáhùn (tí o ti ṣàyẹ̀wò pẹ̀lú olùdarí rẹ), àti ohun tí yóò sọ nígbà tí kò bá mọ̀.",
            "Pinnu ohun tí bot kò gbọdọ̀ ṣe láéláé pẹ̀lú: kò gbọdọ̀ béèrè ọ̀rọ̀ aṣínà, nọ́mbà fóònù tàbí àdírẹ́sì ilé láéláé, kò gbọdọ̀ ṣe bí ẹni pé ènìyàn gidi ni láéláé, kò sì gbọdọ̀ fúnni ní ìmọ̀ràn nípa ìlera, owó tàbí òfin láéláé. Tí iyèméjì bá wà, ó máa rán àwọn ènìyàn sí àgbàlagbà gidi, bí olùdarí ẹgbẹ́.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti ronú àwọn ìbéèrè míì: \"Kí ni àwọn ọmọ ẹgbẹ́ tuntun ti ẹgbẹ́ chess ní ilé-ìwé girama lè béèrè? Kọ 10.\" Lẹ́yìn náà, ìwọ fúnra rẹ ṣàyẹ̀wò àwọn ìdáhùn."
          ],
          steps: ["Kọ ẹni tí bot ń ràn lọ́wọ́.", "Kọ ìbéèrè 5 sí 10 tí yóò dáhùn.", "Kọ ìdáhùn kúkúrú tí o ti ṣàyẹ̀wò fún ọ̀kọ̀ọ̀kan.", "Kọ ìdáhùn \"Mi ò mọ̀\" tí ó ń rán àwọn ènìyàn sí àgbàlagbà gidi.", "Kọ ohun tí bot kò gbọdọ̀ ṣe láéláé."],
          words: [["Ètò bot", "àpèjúwe kúkúrú ohun tí bot ń ṣe àti ohun tí kò ń ṣe."], ["Ìdáhùn àfidípò (fallback)", "ohun tí bot ń sọ nígbà tí kò bá mọ̀."]],
          slides: [
            { title: "Iṣẹ́ kékeré tó yé", bullets: ["Ẹni tí ó ń ràn lọ́wọ́", "Ìbéèrè àti ìdáhùn tí a ti ṣàyẹ̀wò", "Ohun tí ó ń sọ nígbà tí kò bá mọ̀"] },
            { title: "Láéláé", bullets: ["Má ṣe béèrè ọ̀rọ̀ aṣínà, nọ́mbà fóònù tàbí àdírẹ́sì", "Má ṣe bí ẹni pé ènìyàn gidi ni ọ́", "Má ṣe fúnni ní ìmọ̀ràn ìlera, owó tàbí òfin"] },
            { title: "Ronú pẹ̀lú AI", bullets: ["Béèrè fún àwọn ìbéèrè míì tí ó ṣeé ṣe", "Ìwọ fúnra rẹ ṣàyẹ̀wò gbogbo ìdáhùn"] }
          ],
          tryIt: "Kọ ètò bot rẹ: ẹni tí ó ń ràn lọ́wọ́, ìbéèrè márùn-ún rẹ pẹ̀lú ìdáhùn tí o ti ṣàyẹ̀wò, ìdáhùn àfidípò rẹ, àti nǹkan mẹ́ta tí kò gbọdọ̀ ṣe láéláé. Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún ìbéèrè márùn-ún míì tí o lè ti gbàgbé.",
          youCanNow: "ṣètò iṣẹ́ chatbot, àwọn ìdáhùn rẹ̀, ìdáhùn àfidípò àti òfin ààbò rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Kí ló ń jẹ́ iṣẹ́ tó dára fún bot?", options: ["Iṣẹ́ kékeré tó yé, bí dídáhùn ìbéèrè àwọn ọmọ ẹgbẹ́ tuntun", "Dídáhùn gbogbo ìbéèrè tó wà láyé", "Fífúnni ní ìmọ̀ràn ìlera", "Ṣíṣe bí ẹni pé òun ni ààrẹ ẹgbẹ́"], answer: 0, why: "Bot tó dára ní iṣẹ́ kékeré tó yé." },
            { objective: "O2", q: "AI dábàá ìdáhùn kan nípa owó ẹgbẹ́ (dues) fún ètò bot rẹ. Kí ni o máa ṣe?", options: ["Lò ó bí ó ti rí", "Yọ owó ẹgbẹ́ kúrò nínú ètò náà títí láé", "Ṣàyẹ̀wò rẹ̀ pẹ̀lú olùdarí ẹgbẹ́ kí o tó fi kún un", "Hùmọ̀ nọ́mbà míì"], answer: 2, why: "A gbọ́dọ̀ ṣàyẹ̀wò ìdáhùn bot pẹ̀lú olùdarí, kì í ṣe kí a mú wọn láti AI." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe chatbot ọ̀rọ̀-kọ́kọ́rọ́ nínú Python",
          minutes: 6,
          goal: "Ṣe chatbot ọ̀rọ̀-kọ́kọ́rọ́ kí o sì mú un ṣiṣẹ́ nínú Google Colab.",
          text: [
            "Ṣí Google Colab ní colab.research.google.com, wọlé (sign in) pẹ̀lú àkáǹtì tí a gbà ọ́ láàyè láti lò, kí o sì bẹ̀rẹ̀ notebook tuntun. Bot náà ń lo loop tí ó ń béèrè ọ̀rọ̀ léraléra, àti àwọn gbólóhùn if tí ó ń wá ọ̀rọ̀-kọ́kọ́rọ́.",
            "Àpẹẹrẹ náà nìyí, ìlà kọ̀ọ̀kan: while True: ń bẹ̀rẹ̀ loop tí ó ń tún ara rẹ̀ ṣe. Nínú rẹ̀, msg = input(\"You: \").lower() ń ka ọ̀rọ̀ náà ní lẹ́tà kékeré. if \"bye\" in msg: print(\"Bot: See you!\") lẹ́yìn náà break ń dá loop dúró. elif \"time\" in msg: print(\"Bot: We meet Tuesdays at 3:30.\") ń dáhùn ìbéèrè kan. else: print(\"Bot: I don't know. Please ask the club advisor.\") ni ìdáhùn àfidípò. Sún àwọn ìlà tí ó wà nínú loop àti nínú if kọ̀ọ̀kan wọlé (indent).",
            "Fi elif kan kún un fún ìbéèrè kọ̀ọ̀kan nínú ètò rẹ. Tí àṣìṣe (error) bá yọ, ka ìlà ìkẹyìn àti nọ́mbà ìlà náà, wò bóyá colon, àmì àyọlò (quote) tàbí ìsúnwọlé (indent) kan kù, tí ó bá sì há ọ, lẹ kóòdù náà àti àṣìṣe náà sínú olùrànlọ́wọ́ AI kí o sì ní kí ó ṣàlàyé rẹ̀."
          ],
          steps: ["Ṣí notebook Colab tuntun.", "Tẹ while True: kí o sì sún àwọn ìlà tó tẹ̀lé e wọlé.", "Ka ọ̀rọ̀ náà: msg = input(\"You: \").lower()", "Fi if \"bye\" in msg: kún un pẹ̀lú print ìdágbére àti break.", "Fi elif kan kún un fún ìbéèrè kọ̀ọ̀kan, àti else fún ìdáhùn àfidípò. Mú un ṣiṣẹ́ kí o sì bá bot rẹ sọ̀rọ̀."],
          words: [["Loop", "kóòdù tí ó ń tún ara rẹ̀ ṣe; while True ń tún ara rẹ̀ ṣe títí break yóò fi dé."], ["elif", "ìkékúrú else if: ṣàyẹ̀wò ipò míì."], ["break", "ó ń dá loop dúró."], [".lower()", "ó ń yí ọ̀rọ̀ padà sí lẹ́tà kékeré kí \"TIME\" àti \"time\" lè bára mu."]],
          slides: [
            { title: "Àpẹẹrẹ kóòdù náà", bullets: ["while True: ń jẹ́ kí ìjíròrò máa lọ", "msg = input(\"You: \").lower()", "if \"bye\" in msg: dágbére, lẹ́yìn náà break"] },
            { title: "Àwọn ìdáhùn", bullets: ["elif \"time\" in msg: tẹ àkókò jáde (print)", "elif kan fún ìbéèrè kọ̀ọ̀kan", "else: ìdáhùn àfidípò"] },
            { title: "Tí kò bá ṣiṣẹ́", bullets: ["Ka ìlà ìkẹyìn àṣìṣe náà", "Ṣàyẹ̀wò colon, àmì àyọlò àti ìsúnwọlé", "Ní kí AI ṣàlàyé àṣìṣe náà"] }
          ],
          tryIt: "Ṣe bot ọ̀rọ̀-kọ́kọ́rọ́ rẹ nínú Colab pẹ̀lú ìdágbére, ó kéré tán ìdáhùn mẹ́ta láti inú ètò rẹ, àti ìdáhùn àfidípò. Bá a sọ̀rọ̀, kí o sì béèrè ìbéèrè kan tí kò yẹ kí ó mọ̀.",
          youCanNow: "ṣe chatbot ọ̀rọ̀-kọ́kọ́rọ́ nínú Python kí o sì mú un ṣiṣẹ́, pẹ̀lú ìdáhùn, ìdáhùn àfidípò àti ọ̀nà láti dá a dúró.",
          quickCheck: [
            { objective: "O3", q: "Nínú bot Python, kí ni ìlà else ń ṣe?", options: ["Ó ń parí ètò náà", "Ó ń fúnni ní ìdáhùn àfidípò nígbà tí kò sí ọ̀rọ̀-kọ́kọ́rọ́ tí ó bá a mu", "Ó ń ka ọ̀rọ̀ olùlò", "Ó ń bẹ̀rẹ̀ loop"], answer: 1, why: "else ń mú ohunkóhun tí àwọn àyẹ̀wò yòókù kò bá mu." },
            { objective: "O3", q: "Bot rẹ ń dáhùn \"time\" ṣùgbọ́n kò dáhùn \"TIME\". Kí ni o máa fi kún un?", options: [".lower() nígbà tí ó bá ń ka ọ̀rọ̀ náà", "break míì", "while True: kejì", "Kò sí nǹkan; a kò lè tún un ṣe"], answer: 0, why: ".lower() ń yí ọ̀rọ̀ náà padà sí lẹ́tà kékeré kí ọ̀nà ìkọ̀wé méjèèjì lè bára mu." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí chatbot ṣe ń ṣiṣẹ́, àti bot àkọ́kọ́ rẹ",
        questions: [
          { objective: "O1", q: "Báwo ni chatbot ọ̀rọ̀-kọ́kọ́rọ́ ṣe ń pinnu ohun tí yóò sọ?", options: ["Ó ń ka ọkàn rẹ", "Ó ń tẹ̀lé òfin tí ó ń wá ọ̀rọ̀ nínú ọ̀rọ̀ rẹ", "Ó ń wá gbogbo íńtánẹ́ẹ̀tì", "Ó ń béèrè lọ́wọ́ olùkọ́"], answer: 1, why: "Bot ọ̀rọ̀-kọ́kọ́rọ́ ń tẹ̀lé òfin tí ènìyàn kọ." },
          { objective: "O1", q: "Èwo ni àìlera chatbot AI?", options: ["Ó lè ṣàṣìṣe tàbí hùmọ̀ nǹkan", "Gbólóhùn kan ṣoṣo ló lè sọ", "Kò lè gbọ́ ọ̀rọ̀ lásán", "Kò nílò iná mànàmáná"], answer: 0, why: "Large language model lè fúnni ní ìdáhùn tí kò tọ́ ṣùgbọ́n tí ó dún bí ó tọ́." },
          { objective: "O2", q: "Kí ni ìdáhùn àfidípò?", options: ["Ìkíni àkọ́kọ́", "Ọ̀rọ̀ aṣínà", "Ohun tí bot ń sọ nígbà tí kò bá mọ̀", "Orúkọ bot náà"], answer: 2, why: "Ìdáhùn àfidípò ń bójú tó àwọn ìbéèrè tí bot kò lè dáhùn." },
          { objective: "O2", q: "Èwo ni bot ẹgbẹ́ rẹ kò gbọdọ̀ béèrè LÁÉLÁÉ?", options: ["Ohun tí olùlò fẹ́ mọ̀", "Bóyá wọ́n fẹ́ darapọ̀", "Ọ̀nà ìbẹ̀rẹ̀ chess tí wọ́n fẹ́ràn jù", "Àdírẹ́sì ilé wọn"], answer: 3, why: "Bot kò gbọdọ̀ gba ìsọfúnni àdáni láéláé." },
          { objective: "O3", q: "Nínú bot Python, kí ni break ń ṣe?", options: ["Ó ń dá loop dúró kí ìjíròrò lè parí", "Ó ń ba kọ̀mpútà jẹ́", "Ó ń fi ìdáhùn tuntun kún un", "Ó ń pa notebook rẹ́"], answer: 0, why: "break ń parí loop while." }
        ]
      }
    },
    {
      name: "Orí 2: Bot olùrànlọ́wọ́ AI, ìdánwò àti ààbò",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ ìlànà fún bot olùrànlọ́wọ́ AI",
          minutes: 5,
          goal: "Kọ káàdì ìlànà tí ó ń jẹ́ kí olùrànlọ́wọ́ AI ọ̀fẹ́ ṣiṣẹ́ bí olùrànlọ́wọ́ ẹgbẹ́ rẹ.",
          text: [
            "O lè sọ olùrànlọ́wọ́ AI gbogbogbò di olùrànlọ́wọ́ fún iṣẹ́ kan nípa bíbẹ̀rẹ̀ ìjíròrò pẹ̀lú ìlànà tó yé. Àwọn irinṣẹ́ kan tún jẹ́ kí o fi ìlànà pamọ́ bí bot àdáni (custom bot); àwọn mẹ́nù àti òfin ọjọ́ orí yàtọ̀ síra, nítorí náà ṣàyẹ̀wò irinṣẹ́ rẹ. Lílẹ ìlànà sí ìbẹ̀rẹ̀ ìjíròrò tuntun ń ṣiṣẹ́ nínú ọ̀pọ̀ jù lọ olùrànlọ́wọ́.",
            "Káàdì ìlànà tó dára ní: ipa bot náà (\"Ìwọ ni olùrànlọ́wọ́ ẹgbẹ́ chess ti Lincoln High\"), àwọn òtítọ́ tí ó lè lò (àwọn ìdáhùn tí o ti ṣàyẹ̀wò), ohùn rẹ̀ (ọ̀rẹ́, ìdáhùn kúkúrú), àti ààlà rẹ̀ (\"Tí o kò bá mọ̀, sọ pé: jọ̀wọ́ béèrè lọ́wọ́ Ms. Rivera, olùdarí ẹgbẹ́. Má ṣe béèrè ìsọfúnni àdáni láéláé.\").",
            "Sọ fún un pé kí ó lo àwọn òtítọ́ tí o fún un nìkan. Èyí ń dín àǹfààní pé yóò hùmọ̀ àkókò ìpàdé tàbí òfin kù."
          ],
          steps: ["Kọ ipa náà: ta ni bot náà, ta ni ó sì ń ràn lọ́wọ́.", "Lẹ àwọn òtítọ́ àti ìdáhùn tí o ti ṣàyẹ̀wò.", "Ṣètò ohùn rẹ̀: ọ̀rẹ́, ìdáhùn kúkúrú.", "Fi ààlà kún un: lo àwọn òtítọ́ wọ̀nyí nìkan; rán ohun tí o kò mọ̀ sí olùdarí; má ṣe béèrè ìsọfúnni àdáni láéláé.", "Bẹ̀rẹ̀ ìjíròrò tuntun, lẹ káàdì náà, lẹ́yìn náà béèrè ìbéèrè ìdánwò kan."],
          words: [["Káàdì ìlànà", "àwọn òfin tí o kọ tí o fún olùrànlọ́wọ́ AI ní ìbẹ̀rẹ̀ ìjíròrò."], ["Ipa (role)", "ẹni tí bot yẹ kí ó ṣe bí."], ["Ohùn (tone)", "bí bot ṣe ń dún: bí ọ̀rẹ́, pẹ̀lú ọ̀wọ̀ ìjọba, tàbí ní ṣókí."]],
          slides: [
            { title: "Sọ olùrànlọ́wọ́ di olùrànlọ́wọ́ ẹgbẹ́", bullets: ["Lẹ ìlànà sí ìbẹ̀rẹ̀ ìjíròrò", "Àwọn irinṣẹ́ kan ń fi bot àdáni pamọ́; ṣàyẹ̀wò tìrẹ"] },
            { title: "Káàdì ìlànà", bullets: ["Ipa", "Òtítọ́ tí a ti ṣàyẹ̀wò", "Ohùn", "Ààlà"] },
            { title: "Lo àwọn òtítọ́ wọ̀nyí nìkan", bullets: ["Ó ń dín ìdáhùn àhùsọ kù", "Ohun tí kò mọ̀ ń lọ sọ́dọ̀ olùdarí", "Kì í béèrè ìsọfúnni àdáni láéláé"] }
          ],
          tryIt: "Kọ káàdì ìlànà fún bot olùrànlọ́wọ́ ẹgbẹ́ rẹ. Bẹ̀rẹ̀ ìjíròrò tuntun nínú olùrànlọ́wọ́ AI ọ̀fẹ́, lẹ káàdì náà, kí o sì béèrè ìbéèrè mẹ́ta láti inú ètò rẹ àti ọ̀kan tí kò yẹ kí ó mọ̀.",
          youCanNow: "kọ ìlànà tó yé tí ó ń sọ olùrànlọ́wọ́ AI ọ̀fẹ́ di bot olùrànlọ́wọ́ tí ó dojú kọ iṣẹ́ kan, tí ó sì ní ààlà.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìlà \"ipa\" lórí káàdì ìlànà ń ṣe?", options: ["Ó ń kọ àwọn ìbéèrè ìdánwò sílẹ̀", "Ó ń ṣètò irú lẹ́tà (font)", "Ó ń sọ fún AI ẹni tí ó jẹ́ àti ẹni tí ó ń ràn lọ́wọ́", "Ó ń tọ́jú ọ̀rọ̀ aṣínà"], answer: 2, why: "Ìlà ipa, bí \"Ìwọ ni olùrànlọ́wọ́ ẹgbẹ́ chess\", ló ń ṣètò iṣẹ́ bot náà." },
            { objective: "O4", q: "Olùrànlọ́wọ́ AI rẹ ń dáhùn ìbéèrè nípa iṣẹ́ àṣetiléwá (homework) pẹ̀lú. Kí ni o máa fi kún káàdì náà?", options: ["Òtítọ́ púpọ̀ sí i nípa homework", "Òfin láti lo òtítọ́ ẹgbẹ́ nìkan kí ó sì rán ìbéèrè míì sí olùdarí", "Ìkíni tí ó gùn jù", "Kò sí nǹkan; ìdáhùn púpọ̀ dára jù"], answer: 1, why: "Ààlà ń jẹ́ kí olùrànlọ́wọ́ dúró lórí iṣẹ́ rẹ̀, ó sì ń dín àǹfààní pé yóò hùmọ̀ nǹkan kù." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣàyẹ̀wò àti mímú bot rẹ dára sí i",
          minutes: 5,
          goal: "Ṣàyẹ̀wò bot méjèèjì pẹ̀lú ìbéèrè gidi kí o sì tún ohun tí kò ṣiṣẹ́ ṣe.",
          text: [
            "Ṣíṣàyẹ̀wò túmọ̀ sí gbígbìyànjú bot rẹ bí àwọn ènìyàn gidi yóò ṣe lò ó. Kọ ìbéèrè ìdánwò 10: márùn-ún láti inú ètò rẹ, díẹ̀ tí a béèrè ní ọ̀rọ̀ míì (\"ìgbà wo lẹ̀ ń pàdé ná?\"), ọ̀kan tí ó ní àṣìṣe ìkọ̀wé, àti ọ̀kan tí kò yẹ kí ó dáhùn.",
            "Béèrè ìbéèrè kọ̀ọ̀kan lọ́wọ́ bot méjèèjì, kí o sì sàmì sí ìdáhùn kọ̀ọ̀kan bí ó tọ́, kò tọ́ tàbí àhùsọ. Bot ọ̀rọ̀-kọ́kọ́rọ́ lè má gbọ́ ìbéèrè tí a béèrè ní ọ̀rọ̀ míì; tún èyí ṣe nípa fífi ọ̀rọ̀-kọ́kọ́rọ́ púpọ̀ sí i kún un. Olùrànlọ́wọ́ AI lè dún bí ó tọ́ ṣùgbọ́n kí ó hùmọ̀ àwọn kúlẹ̀kúlẹ̀; tún èyí ṣe nípa mímú ìlànà rẹ̀ le sí i.",
            "Ní kí ọ̀rẹ́ kan tàbí ọmọ ẹgbẹ́ kan gbìyànjú bot rẹ pẹ̀lú. Àwọn ènìyàn máa ń béèrè ohun tí o kò retí nígbà gbogbo."
          ],
          steps: ["Kọ ìbéèrè ìdánwò 10, pẹ̀lú ọ̀rọ̀ míì àti àṣìṣe ìkọ̀wé kan.", "Béèrè ìbéèrè kọ̀ọ̀kan lọ́wọ́ bot méjèèjì.", "Sàmì sí ìdáhùn kọ̀ọ̀kan bí ó tọ́, kò tọ́ tàbí àhùsọ.", "Bot ọ̀rọ̀-kọ́kọ́rọ́: fi ọ̀rọ̀-kọ́kọ́rọ́ kún un. Olùrànlọ́wọ́ AI: mú ìlànà le sí i.", "Ní kí ẹlòmíì ṣàyẹ̀wò rẹ̀."],
          words: [["Ṣíṣàyẹ̀wò (testing)", "gbígbìyànjú ètò kọ̀mpútà ní mọ̀ọ́mọ̀ láti rí ohun tí kò ṣiṣẹ́."], ["Test case", "ìbéèrè tàbí ọ̀rọ̀ kan tí o fi ń ṣàyẹ̀wò ètò kọ̀mpútà."]],
          slides: [
            { title: "Ìbéèrè ìdánwò 10", bullets: ["Àwọn ìbéèrè inú ètò rẹ", "Ọ̀rọ̀ míì àti àṣìṣe ìkọ̀wé kan", "Ọ̀kan tí kò yẹ kí ó dáhùn"] },
            { title: "Sàmì sí ìdáhùn kọ̀ọ̀kan", bullets: ["Ó tọ́", "Kò tọ́", "Àhùsọ"] },
            { title: "Tún un ṣe kí o sì tún ṣàyẹ̀wò", bullets: ["Bot ọ̀rọ̀-kọ́kọ́rọ́: fi ọ̀rọ̀-kọ́kọ́rọ́ kún un", "Olùrànlọ́wọ́ AI: mú ìlànà le sí i", "Jẹ́ kí ọ̀rẹ́ kan gbìyànjú rẹ̀"] }
          ],
          tryIt: "Lo ìbéèrè ìdánwò 10 rẹ lórí bot méjèèjì, sàmì sí ìdáhùn kọ̀ọ̀kan, kí o sì ṣe àtúnṣe kan sí bot kọ̀ọ̀kan. Tún ṣàyẹ̀wò láti rí bóyá àwọn àtúnṣe náà ṣiṣẹ́.",
          youCanNow: "ṣàyẹ̀wò chatbot pẹ̀lú ìbéèrè gidi, wá ohun tí kò ṣiṣẹ́, kí o sì mú wọn dára sí i.",
          quickCheck: [
            { objective: "O5", q: "Èwo ló yẹ kí ó wà nínú àkójọ ìbéèrè ìdánwò tó dára?", options: ["Ìbéèrè tí a dà kọ gẹ́lẹ́ láti inú ètò rẹ nìkan", "Ìbéèrè kan ṣoṣo", "Ìbéèrè tí o mọ̀ pé yóò ṣiṣẹ́", "Ìbéèrè kan náà tí a béèrè ní ọ̀rọ̀ míì"], answer: 3, why: "Àwọn ènìyàn gidi ń béèrè ní ọ̀rọ̀ míì, wọ́n sì ń ṣe àṣìṣe ìkọ̀wé, nítorí náà ìdánwò gbọ́dọ̀ ṣe bẹ́ẹ̀ pẹ̀lú." },
            { objective: "O5", q: "Olùrànlọ́wọ́ AI fúnni ní yàrá ìpàdé kan pẹ̀lú ìgboyà, ṣùgbọ́n àhùsọ ni. Báwo ni o ṣe máa sàmì sí i?", options: ["Ó tọ́, nítorí ó dún bí ó dá a lójú", "Àhùsọ, lẹ́yìn náà mú ìlànà rẹ̀ le sí i", "Fò ó", "Ó tọ́, tí ó bá súnmọ́ ọn"], answer: 1, why: "Sàmì sí kúlẹ̀kúlẹ̀ tí ó hùmọ̀ bí àhùsọ, kí o sì tún ìlànà ṣe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mímú kí bot rẹ wà láìléwu kí ó sì jẹ́ olóòótọ́",
          minutes: 5,
          goal: "Fi òfin ààbò àti òtítọ́ kún un, lẹ́yìn náà parí chatbot ẹgbẹ́ rẹ.",
          text: [
            "Bot gbọ́dọ̀ sọ pé bot ni òun. Ó tọ́ kí àwọn ènìyàn mọ̀ pé kì í ṣe ènìyàn gidi ni wọ́n ń bá sọ̀rọ̀. Bẹ̀rẹ̀ pẹ̀lú ìkíni bí \"Ẹ nlẹ́ o, èmi ni bot ẹgbẹ́ chess. Mo ń dáhùn àwọn ìbéèrè ìpìlẹ̀. Fún ohunkóhun míì, béèrè lọ́wọ́ Ms. Rivera.\"",
            "Ó gbọ́dọ̀ dáàbò bo ìsọfúnni àdáni: kò gbọdọ̀ béèrè tàbí tọ́jú ọ̀rọ̀ aṣínà, nọ́mbà fóònù, àdírẹ́sì tàbí nọ́mbà ìdánimọ̀ ilé-ìwé láéláé. Ó gbọ́dọ̀ dúró lórí iṣẹ́ rẹ̀: kò sí ìmọ̀ràn ìlera, owó, òfin tàbí ọ̀rọ̀ ara ẹni, ó sì gbọ́dọ̀ tọ́ka sí àgbàlagbà tí a gbẹ́kẹ̀ lé fún ohunkóhun tó ṣe pàtàkì.",
            "Kí o tó pín bot pẹ̀lú ẹgbẹ́ rẹ, gba àṣẹ olùdarí rẹ, tẹ̀lé òfin ilé-ìwé rẹ nípa AI àti ẹ̀rọ ìgbàlódé, kí o sì máa ṣe àtúnṣe sí àwọn ìdáhùn nígbà tí àkókò ìpàdé bá yí padà."
          ],
          steps: ["Fi ìkíni tí ó sọ pé bot ni àti ohun tí ó ń ṣe kún un.", "Ṣàyẹ̀wò pé kò béèrè ìsọfúnni àdáni láéláé.", "Jẹ́ kí ó rán ìbéèrè tó ṣe pàtàkì tàbí èyí tí kò mọ̀ sí àgbàlagbà tí a gbẹ́kẹ̀ lé.", "Gba àṣẹ olùdarí rẹ kí o tó pín in.", "Ṣe àtúnṣe sí àwọn ìdáhùn nígbà tí òtítọ́ bá yí padà."],
          words: [["Àìfipamọ́ (transparency)", "jíjẹ́ olóòótọ́ àti àìfi nǹkan pamọ́, bí sísọ pé bot ni bot."], ["Ìpamọ́ ìsọfúnni (privacy)", "pípa ìsọfúnni àdáni mọ́ láìléwu."]],
          slides: [
            { title: "Sọ pé bot ni", bullets: ["Ìkíni tó yé", "Ohun tí ó lè ṣe àti èyí tí kò lè ṣe", "Ẹni tí a lè béèrè lọ́wọ́ rẹ̀ fún púpọ̀ sí i"] },
            { title: "Dáàbò bo ìsọfúnni àdáni", bullets: ["Kò sí ọ̀rọ̀ aṣínà, nọ́mbà fóònù tàbí àdírẹ́sì", "Kò sí nọ́mbà ìdánimọ̀ ilé-ìwé"] },
            { title: "Dúró lórí iṣẹ́ rẹ̀", bullets: ["Kò sí ìmọ̀ràn ìlera, owó tàbí òfin", "Ìbéèrè tó ṣe pàtàkì ń lọ sọ́dọ̀ àgbàlagbà tí a gbẹ́kẹ̀ lé", "Àṣẹ olùdarí kí a tó pín in"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí bot ọ̀rọ̀-kọ́kọ́rọ́ Python rẹ (ìdáhùn márùn-ún, ìdáhùn àfidípò, bye) àti káàdì ìlànà olùrànlọ́wọ́ AI rẹ. Fi ìkíni tí ó sọ pé bot ni kún un, ṣàyẹ̀wò méjèèjì pẹ̀lú ìbéèrè 10, kọ ohun tí ọ̀kọ̀ọ̀kan ṣe dáadáa àti ibi tí ó ti ṣàṣìṣe, kí o sì ṣe àtúnṣe kan sí ọ̀kọ̀ọ̀kan.",
          youCanNow: "ṣe chatbot tó rọrùn, ṣàyẹ̀wò rẹ̀, kí o sì pín in, tí ó wúlò, tí kò léwu, tí ó sì jẹ́ olóòótọ́ pé bot ni òun.",
          quickCheck: [
            { objective: "O6", q: "Èwo nínú ìwọ̀nyí ni bot rẹ kò gbọdọ̀ béèrè láéláé?", options: ["Ìbéèrè tí wọ́n ní", "Bóyá wọ́n fẹ́ mọ àkókò ìpàdé", "Bóyá wọ́n fẹ́ dágbére", "Nọ́mbà ìdánimọ̀ ilé-ìwé wọn"], answer: 3, why: "Bot kò gbọdọ̀ béèrè tàbí tọ́jú ọ̀rọ̀ aṣínà, nọ́mbà fóònù, àdírẹ́sì tàbí nọ́mbà ìdánimọ̀ láéláé." },
            { objective: "O6", q: "Bot rẹ ti ṣetán. Kí ni o máa ṣe kí o tó pín in pẹ̀lú ẹgbẹ́?", options: ["Gba àṣẹ olùdarí kí o sì tẹ̀lé òfin ilé-ìwé", "Fi í sórí ayélujára fún gbogbo ènìyàn lẹ́sẹ̀kẹsẹ̀", "Yọ ìkíni kúrò", "Jẹ́ kí ó béèrè nọ́mbà fóònù fún ìtẹ̀lé"], answer: 0, why: "Gba àṣẹ olùdarí rẹ kí o sì tẹ̀lé òfin ilé-ìwé kí o tó pín in." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Bot olùrànlọ́wọ́ AI, ìdánwò àti ààbò",
        questions: [
          { objective: "O4", q: "Kí ló yẹ kí ó wà lórí káàdì ìlànà olùrànlọ́wọ́ AI?", options: ["Ọ̀rọ̀ aṣínà rẹ", "Ipa, òtítọ́ tí a ti ṣàyẹ̀wò, ohùn àti ààlà", "Ìtàn èyíkéyìí", "Kò sí nǹkan; kàn bẹ̀rẹ̀ ìjíròrò"], answer: 1, why: "Apá mẹ́rin wọ̀nyẹn ń jẹ́ kí bot dojú kọ iṣẹ́ rẹ̀, wọ́n sì ń fi ààlà sí i." },
          { objective: "O4", q: "Kí ló dé tí o fi ń sọ fún olùrànlọ́wọ́ AI pé kí ó lo àwọn òtítọ́ tí o fún un nìkan?", options: ["Kí ó lè lọ́ra", "Láti dín àǹfààní pé yóò hùmọ̀ kúlẹ̀kúlẹ̀ kù", "Kí ó lè gùn sí i", "Òfin ìjọba ló béèrè fún un"], answer: 1, why: "Ààlà ń dín ìdáhùn àhùsọ kù." },
          { objective: "O5", q: "Bot ọ̀rọ̀-kọ́kọ́rọ́ rẹ kò gbọ́ \"ìgbà wo lẹ̀ ń pàdé ná?\" Báwo ni o ṣe máa tún un ṣe?", options: ["Pa bot náà rẹ́", "Yọ ìdáhùn àfidípò kúrò", "Fi ọ̀rọ̀-kọ́kọ́rọ́ míì bí \"meet\" (pàdé) kún un", "Dá olùlò lẹ́bi"], answer: 2, why: "Ọ̀rọ̀-kọ́kọ́rọ́ púpọ̀ sí i ń mú ìbéèrè tí a kọ ní ọ̀nà míì." },
          { objective: "O6", q: "Kí ló dé tí bot fi gbọ́dọ̀ sọ pé bot ni òun?", options: ["Ó tọ́ kí àwọn ènìyàn mọ̀ pé kì í ṣe ènìyàn ni wọ́n ń bá sọ̀rọ̀", "Ó dún bí ohun tó gbayì", "Ó ń jẹ́ kí kóòdù kúrú", "A kò nílò rẹ̀ láéláé"], answer: 0, why: "Àìfipamọ́ ń mú kí àwọn ènìyàn gbẹ́kẹ̀ lé e." },
          { objective: "O6", q: "Kí o tó pín bot rẹ pẹ̀lú ẹgbẹ́, o yẹ kí o:", options: ["Fi ìbéèrè fún nọ́mbà fóònù kún un", "Fo ìdánwò", "Fi pamọ́ pé bot ni", "Gba àṣẹ olùdarí rẹ kí o sì tẹ̀lé òfin ilé-ìwé"], answer: 3, why: "Àṣẹ àgbàlagbà àti òfin ilé-ìwé ló kọ́kọ́ ṣe pàtàkì." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ṣíṣe Chatbot AI Tó Rọrùn",
    questions: [
      { objective: "O1", q: "Chatbot ni:", options: ["Ètò kọ̀mpútà tí o ń bá sọ̀rọ̀ nípa títẹ ọ̀rọ̀ tàbí sísọ̀rọ̀", "Àpò fóònù", "Irú apá robot kan", "Àdírẹ́sì ojú-òpó wẹ́ẹ̀bù"], answer: 0, why: "Chatbot jẹ́ ètò kọ̀mpútà tí a ń bá jíròrò." },
      { objective: "O1", q: "Agbára kan ti chatbot ọ̀rọ̀-kọ́kọ́rọ́ ni pé:", options: ["Ó lè dáhùn ohunkóhun", "Ó rọrùn, a sì lè mọ ohun tí yóò ṣe", "Ó máa ń ní àròjinlẹ̀ tuntun nígbà gbogbo", "Ó so mọ́ gbogbo ojú-òpó wẹ́ẹ̀bù"], answer: 1, why: "Ohun tí o kọ sínú rẹ̀ nìkan ló ń sọ." },
      { objective: "O1", q: "Large language model ni:", options: ["Kíbọ́ọ̀dù ńlá", "Ẹ̀kọ́ kan ní ilé-ìwé", "Irú AI tí ó wà lẹ́yìn olùrànlọ́wọ́ bí ChatGPT", "Àṣìṣe Python"], answer: 2, why: "LLM kọ́ àwọn àpẹẹrẹ láti inú ọ̀rọ̀ tó pọ̀ gan-an." },
      { objective: "O2", q: "Èwo ni iṣẹ́ tó dára jù fún chatbot àkọ́kọ́?", options: ["Fífúnni ní ìmọ̀ràn ìlera", "Bíbójú tó àkáǹtì báńkì", "Dídáhùn gbogbo nǹkan nípa ayé", "Dídáhùn ìbéèrè àwọn ọmọ ẹgbẹ́ tuntun fún ẹgbẹ́ rẹ"], answer: 3, why: "Iṣẹ́ kékeré tó yé ló dára jù." },
      { objective: "O2", q: "Ta ló yẹ kí ó ṣàyẹ̀wò àwọn ìdáhùn inú ètò bot rẹ?", options: ["Ìwọ, pẹ̀lú olùdarí ẹgbẹ́", "Kò sí ẹnìkan", "Àjèjì kan lórí ayélujára", "Bot náà fúnra rẹ̀"], answer: 0, why: "Ìdáhùn gbọ́dọ̀ tọ́; ṣàyẹ̀wò wọn pẹ̀lú olùdarí." },
      { objective: "O2", q: "Kí ni bot rẹ yẹ kí ó ṣe nígbà tí kò bá mọ̀?", options: ["Hùmọ̀ ìdáhùn", "Rán àwọn ènìyàn sí àgbàlagbà gidi bí olùdarí", "Béèrè nọ́mbà fóònù wọn", "Dẹ́kun iṣẹ́"], answer: 1, why: "Ìdáhùn àfidípò tó dára ń tọ́ka sí ènìyàn gidi." },
      { objective: "O3", q: "Kí ni while True: ń ṣe nínú Python?", options: ["Ó ń tẹ True jáde", "Ó ń parí ètò náà", "Ó ń bẹ̀rẹ̀ loop tí ó ń tún ara rẹ̀ ṣe títí break yóò fi dé", "Ó ń ṣe variable"], answer: 2, why: "while True ń tún ara rẹ̀ ṣe títí break yóò fi dé." },
      { objective: "O3", q: "Kí ló dé tí a fi ń lo .lower() lórí ọ̀rọ̀ olùlò?", options: ["Láti mú un kúrú", "Láti pa á rẹ́", "Láti túmọ̀ rẹ̀", "Kí \"TIME\" àti \"time\" lè bá ọ̀rọ̀-kọ́kọ́rọ́ kan náà mu"], answer: 3, why: "Lẹ́tà kékeré ń jẹ́ kí ìbámu rọrùn." },
      { objective: "O3", q: "Kí ni elif túmọ̀ sí?", options: ["Else if: ṣàyẹ̀wò ipò míì", "Parí loop", "Àṣìṣe", "Jáde"], answer: 0, why: "elif ń ṣàyẹ̀wò ipò míì lẹ́yìn if." },
      { objective: "O3", q: "Àṣìṣe Python kan yọ. Ìgbésẹ̀ àkọ́kọ́ tó dára ni:", options: ["Pa notebook rẹ́", "Ka ìlà ìkẹyìn àti nọ́mbà ìlà náà", "Tún kọ̀mpútà ilé-ìwé tàn", "Jáwọ́"], answer: 1, why: "Ọ̀rọ̀ àṣìṣe náà ń tọ́ka sí ìṣòro náà." },
      { objective: "O4", q: "Ìlà ipa lórí káàdì ìlànà lè sọ pé:", options: ["\"Béèrè ọ̀rọ̀ aṣínà\"", "\"Ṣe bí ẹni pé ìwọ ni ọ̀gá ilé-ìwé\"", "\"Ìwọ ni olùrànlọ́wọ́ ẹgbẹ́ chess ti Lincoln High\"", "\"Sọ ohunkóhun\""], answer: 2, why: "Ipa ń sọ fún AI ẹni tí yóò jẹ́ àti ẹni tí ó ń ràn lọ́wọ́." },
      { objective: "O4", q: "Níbo ni o ti sábà máa ń fi ìlànà fún olùrànlọ́wọ́ AI nínú olùrànlọ́wọ́ ọ̀fẹ́?", options: ["Nínú ètò (settings) kọ̀mpútà", "Nínú ọ̀rọ̀ text", "Nínú ibi àdírẹ́sì browser rẹ", "Ní ìbẹ̀rẹ̀ ìjíròrò tuntun"], answer: 3, why: "Lílẹ ìlànà sí ìbẹ̀rẹ̀ ìjíròrò ń ṣiṣẹ́ nínú ọ̀pọ̀ jù lọ olùrànlọ́wọ́." },
      { objective: "O4", q: "Èwo ni ààlà tí ó yẹ kí ó wà lórí káàdì ìlànà?", options: ["\"Má ṣe béèrè ìsọfúnni àdáni láéláé\"", "\"Hùmọ̀ ìdáhùn tí iyèméjì bá wà\"", "\"Fúnni ní ìmọ̀ràn òfin\"", "\"Ṣe bí ẹni pé ènìyàn ni ọ́\""], answer: 0, why: "Ààlà ń jẹ́ kí bot wà láìléwu." },
      { objective: "O5", q: "Ṣíṣàyẹ̀wò bot túmọ̀ sí:", options: ["Pípa á rẹ́", "Gbígbìyànjú rẹ̀ ní mọ̀ọ́mọ̀ láti rí ohun tí kò ṣiṣẹ́", "Pínpín in lẹ́sẹ̀kẹsẹ̀", "Mímú un gùn sí i"], answer: 1, why: "Ìdánwò ń rí ìṣòro kí àwọn olùlò tó rí i." },
      { objective: "O5", q: "Kí ló dé tí o fi ń fi ìbéèrè tí ó ní àṣìṣe ìkọ̀wé sínú ìdánwò rẹ?", options: ["Láti ba kọ̀mpútà jẹ́", "Àṣìṣe ìkọ̀wé lòdì sí òfin", "Àwọn ènìyàn gidi máa ń ṣe àṣìṣe ìkọ̀wé", "Láti jẹ́ kí bot ṣe àfojúdi"], answer: 2, why: "Ìdánwò gbọ́dọ̀ bá bí àwọn ènìyàn gidi ṣe ń tẹ ọ̀rọ̀ mu." },
      { objective: "O5", q: "Olùrànlọ́wọ́ AI hùmọ̀ ibi ìpàdé kan. Kí ni o máa tún ṣe?", options: ["Loop Python", "Kíbọ́ọ̀dù rẹ", "Kò sí nǹkan", "Mú ìlànà rẹ̀ le sí i kí ó lo òtítọ́ rẹ nìkan"], answer: 3, why: "Ìlànà tí ó le sí i ń dín kúlẹ̀kúlẹ̀ àhùsọ kù." },
      { objective: "O5", q: "Kí ló dé tí o fi máa ní kí ọ̀rẹ́ kan ṣàyẹ̀wò bot rẹ?", options: ["Àwọn ènìyàn máa ń béèrè ohun tí o kò retí", "Àwọn ọ̀rẹ́ gbọ́dọ̀ fọwọ́ sí gbogbo kóòdù", "Ó ń jẹ́ kí bot yára sí i", "Kò wúlò"], answer: 0, why: "Olùdánwò tuntun ń rí ìṣòro tuntun." },
      { objective: "O6", q: "Ìkíni bot tó dára ń sọ pé:", options: ["\"Ènìyàn gidi ni mí\"", "\"Ẹ nlẹ́ o, èmi ni bot ẹgbẹ́. Mo ń dáhùn àwọn ìbéèrè ìpìlẹ̀. Fún ohunkóhun míì, béèrè lọ́wọ́ olùdarí.\"", "\"Sọ àdírẹ́sì rẹ fún mi\"", "Kò sí nǹkan"], answer: 1, why: "Ó jẹ́ olóòótọ́, ó sì ṣàlàyé ohun tí bot náà ń ṣe." },
      { objective: "O6", q: "Ọmọ ẹgbẹ́ kan béèrè lọ́wọ́ bot rẹ nípa ìṣòro ara ẹni tó ṣe pàtàkì. Bot náà yẹ kí ó:", options: ["Fúnni ní ìmọ̀ràn bẹ́ẹ̀", "Ṣàìka wọ́n sí", "Tọ́ka wọ́n sí àgbàlagbà tí a gbẹ́kẹ̀ lé", "Béèrè nọ́mbà fóònù wọn"], answer: 2, why: "Ìbéèrè tó ṣe pàtàkì ń lọ sọ́dọ̀ àgbàlagbà gidi tí a gbẹ́kẹ̀ lé." },
      { objective: "O6", q: "Ẹgbẹ́ yí ọjọ́ ìpàdé rẹ̀ padà. Kí ni o máa ṣe?", options: ["Kò sí nǹkan", "Pa bot náà rẹ́", "Sọ fún àwọn ọmọ ẹgbẹ́ pé bot máa ń tọ̀nà nígbà gbogbo", "Ṣe àtúnṣe sí àwọn ìdáhùn bot náà"], answer: 3, why: "A gbọ́dọ̀ máa ṣe àtúnṣe sí bot nígbà gbogbo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Bot ọ̀rọ̀-kọ́kọ́rọ́ ń ṣiṣẹ́",
        objective: "O3",
        notYet: "Bot náà kò ṣiṣẹ́, tàbí ìdáhùn rẹ̀ kò tó márùn-ún.",
        meets: "Ó ń ṣiṣẹ́ nínú Colab, ó ń kí olùlò, ó ń dáhùn ó kéré tán ìbéèrè márùn-ún, ó ní ìdáhùn àfidípò, ó sì ń dúró ní bye.",
        exceeds: "Ó tún ń mú ìbéèrè tí a béèrè ní ọ̀rọ̀ míì pẹ̀lú ọ̀rọ̀-kọ́kọ́rọ́ àfikún."
      },
      {
        name: "Káàdì olùrànlọ́wọ́ AI",
        objective: "O4",
        notYet: "Ipa, òtítọ́ tàbí ààlà kò sí lórí káàdì náà.",
        meets: "Ipa, òtítọ́ tí a ti ṣàyẹ̀wò, ohùn àti ààlà, ó sì ń rán ìbéèrè tí kò mọ̀ sí olùdarí.",
        exceeds: "Olùrànlọ́wọ́ náà dúró lórí iṣẹ́ rẹ̀ nígbà ìbéèrè ìdánwò tí ó ní ẹ̀tàn."
      },
      {
        name: "Ìdáhùn tí a ti ṣàyẹ̀wò",
        objective: "O2",
        notYet: "A kò ṣàyẹ̀wò àwọn ìdáhùn, tàbí a mú wọn láti AI.",
        meets: "Olùdarí ẹgbẹ́ ti ṣàyẹ̀wò gbogbo ìdáhùn nínú bot méjèèjì.",
        exceeds: "Ó ní ètò fún ṣíṣe àtúnṣe sí ìdáhùn nígbà tí òtítọ́ bá yí padà."
      },
      {
        name: "Ìdánwò àti àtúnṣe",
        objective: "O5",
        notYet: "Ìdánwò kò tó 10, tàbí kò sí àtúnṣe.",
        meets: "Ìdánwò 10 lórí bot méjèèjì, a sàmì sí ọ̀kọ̀ọ̀kan bí ó tọ́, kò tọ́ tàbí àhùsọ, àti àtúnṣe kan sí bot kọ̀ọ̀kan.",
        exceeds: "Ó tún ṣàyẹ̀wò lẹ́yìn àtúnṣe, ẹlòmíì sì ṣàyẹ̀wò àwọn bot náà pẹ̀lú."
      },
      {
        name: "Láìléwu àti olóòótọ́",
        objective: "O6",
        notYet: "Bot náà kò sọ pé bot ni òun, tàbí ó ń béèrè ìsọfúnni àdáni.",
        meets: "Ìkíni sọ pé bot ni, kò béèrè ìsọfúnni àdáni kankan, ìbéèrè tó ṣe pàtàkì sì ń lọ sọ́dọ̀ àgbàlagbà tí a gbẹ́kẹ̀ lé.",
        exceeds: "Olùdarí ti fọwọ́ sí i fún pínpín."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn ẹgbẹ́ tí wọ́n ń lo bot akẹ́kọ̀ọ́ pẹ̀lú àṣẹ olùdarí láàárín ọjọ́ 60",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ètò kọ̀mpútà tàbí bot míì fúnra wọn láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ kóòdù tàbí AI míì ti Koach Learn láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní browser àti íńtánẹ́ẹ̀tì",
      "Google Colab àti olùrànlọ́wọ́ AI ọ̀fẹ́, pẹ̀lú àkáǹtì tí a gbà akẹ́kọ̀ọ́ láàyè láti lò",
      "Ètò bot lórí ìwé tàbí nínú àkọsílẹ̀ kọ̀mpútà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, pẹ̀lú àkókò fún ìdánwò"
    ],
    facilitatorNotes: [
      "Ṣàyẹ̀wò òfin ọjọ́ orí Colab àti irinṣẹ́ AI kí kíláàsì tó bẹ̀rẹ̀; ní àkáǹtì ìfihàn kí àwọn akẹ́kọ̀ọ́ tí kò tíì dé ọjọ́ orí lè tẹ̀lé e.",
      "Kọ kóòdù bot ọ̀rọ̀-kọ́kọ́rọ́ níwájú wọn, ìlà kọ̀ọ̀kan, kí o sì mọ̀ọ́mọ̀ fi colon kan sílẹ̀ kí àwọn akẹ́kọ̀ọ́ lè kọ́ bí a ṣe ń ka àṣìṣe.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ pàṣípààrọ̀ bot, kí wọ́n sì ṣàyẹ̀wò ti ara wọn pẹ̀lú ìbéèrè tí ó ní ẹ̀tàn.",
      "Rí i dájú pé kò sí bot tí ó ń béèrè tàbí tọ́jú ìsọfúnni àdáni, àti pé ọ̀kọ̀ọ̀kan ń sọ pé bot ni òun.",
      "Fi rubric ṣe àmì fún bot méjèèjì, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
