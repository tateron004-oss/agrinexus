"use strict";

// Koach Learn course (Yoruba translation of youth/youth-what-is-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-what-is-ai-yo",
  lang: "yo",
  translationOf: "youth-what-is-ai",
  category: "Youth",
  name: "Kí ni AI? (fún Àwọn Ọ̀dọ́)",
  skills: "Ṣíṣàlàyé ohun tí AI jẹ́, Rírí AI nínú àwọn app ojoojúmọ́, Títẹ̀lé òfin ọjọ́ orí àti òfin ilé-ìwé, Bíbéèrè ìbéèrè tó yé lọ́wọ́ olùrànlọ́wọ́ AI, Ṣíṣàyẹ̀wò ìdáhùn AI",
  outcome: "ṣàlàyé ohun tí AI jẹ́ ní ọ̀rọ̀ ara rẹ, rí i nínú àwọn app tí o ti ń lò, kí o sì lo olùrànlọ́wọ́ AI ọ̀fẹ́ lọ́nà tó tọ́: láàárín òfin ọjọ́ orí rẹ̀ àti òfin ilé-ìwé rẹ, pẹ̀lú ìbéèrè tó yé, kí o sì ṣàyẹ̀wò ìdáhùn kí o tó gbà á gbọ́.",
  about: [
    "AI ti wà nínú fóònù rẹ, àwọn eré rẹ, app orin rẹ àti àwọn irinṣẹ́ ilé-ìwé rẹ. Ẹ̀kọ́ yìí wà fún àwọn ọ̀dọ́ tí ọjọ́ orí wọn tó nǹkan bí 13 sí 18, tí wọ́n fẹ́ mọ ohun tí AI jẹ́ gan-an àti bí wọ́n ṣe lè lò ó dáadáa.",
    "O máa kọ́ ohun tí AI jẹ́ àti ohun tí kò jẹ́, ibi tí ó fara pamọ́ sí nínú àwọn app tí o ń lò lójoojúmọ́, bí o ṣe lè tẹ̀lé òfin ọjọ́ orí àti òfin AI ilé-ìwé rẹ, bí o ṣe lè béèrè ìbéèrè tó yé, àti bí o ṣe lè ṣàyẹ̀wò ìdáhùn kí o tó gbà á gbọ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Kà á, wo àwọn àwòrán ìfihàn, lẹ́yìn náà ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe \"àlàyé AI\" ojú-ewé kan fún akẹ́kọ̀ọ́ tí ó kéré sí ọ tàbí fún ọ̀rẹ́ kan: sọ ohun tí AI jẹ́ ní gbólóhùn méjì, dárúkọ app mẹ́ta tí o ń lò tí AI wà nínú wọn, kí o sì kọ ìbéèrè kan tí o béèrè lọ́wọ́ olùrànlọ́wọ́ AI, ìdáhùn rẹ̀, àti bí o ṣe ṣàyẹ̀wò rẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ tí ọjọ́ orí wọn tó nǹkan bí 13 sí 18, yálà wọ́n wà nílé-ìwé tàbí wọn kò sí, tí wọ́n ti ń lo fóònù, eré àti app, tí wọ́n sì fẹ́ mọ ohun tí AI jẹ́ gan-an àti bí wọ́n ṣe lè lò ó dáadáa.",
    startingPoint: "Wọ́n ń lo app orin, fídíò, eré àti ọ̀rọ̀ ìránṣẹ́ lójoojúmọ́, àwọn kan sì ti gbìyànjú olùrànlọ́wọ́ ìjíròrò (chat). Ọ̀pọ̀ jù lọ kò lè ṣàlàyé bí AI ṣe ń ṣiṣẹ́, ibi tí ó fara pamọ́ sí nínú app wọn, tàbí bí wọ́n ṣe lè ṣàyẹ̀wò ohun tí ó sọ.",
    gap: "AI wà nínú àwọn irinṣẹ́ tí àwọn ọ̀dọ́ ń lò fún iṣẹ́ ilé-ìwé àti fún ìgbádùn, ṣùgbọ́n ọ̀pọ̀ ń lò ó láìmọ òfin ọjọ́ orí rẹ̀, òfin ilé-ìwé wọn, tàbí pé ó lè ṣàṣìṣe. Kíkọ́ bí a ṣe ń béèrè ìbéèrè tó yé, bí a ṣe ń ṣàyẹ̀wò ìdáhùn àti bí a ṣe ń wà láìléwu ń ràn wọ́n lọ́wọ́ láti kẹ́kọ̀ọ́ dáadáa, láti yẹra fún wàhálà màgòmágó (cheating), àti láti dáàbò bo ara wọn àti àwọn ẹlòmíì.",
    constraints: [
      "Òfin ọjọ́ orí: ọ̀pọ̀ irinṣẹ́ AI ń fẹ́ kí olùlò jẹ́ ọmọ ọdún 13 tàbí jù bẹ́ẹ̀ lọ, àwọn kan sì ń fẹ́ àṣẹ òbí tàbí alágbàtọ́ fún ẹni tí kò tíì pé ọmọ ọdún 18",
      "Òfin ilé-ìwé nípa AI yàtọ̀ láti ilé-ìwé kan sí èkejì àti láti olùkọ́ kan sí èkejì",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìwé; àwọn kan kò ní íńtánẹ́ẹ̀tì tó péye nílé",
      "Ìkọ̀kọ̀ àti ààbò: kò sí ìsọfúnni àdáni tàbí fọ́tò àwọn ènìyàn gidi nínú irinṣẹ́ AI",
      "Ọ̀rọ̀ tó rọrùn àti ẹ̀kọ́ kúkúrú fún àwọn tí ìpele kíkàwé wọn yàtọ̀ síra"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ní ọ̀rọ̀ ara rẹ", action: "ṣàlàyé ohun tí AI jẹ́, bí ó ṣe ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ, àti ìdí tí ó fi lè ṣàṣìṣe", standard: "ní gbólóhùn méjì tí akẹ́kọ̀ọ́ tí ó kéré sí ọ lè yé" },
    { id: "O2", condition: "Ní lílo àwọn app tí ó wà lórí fóònù rẹ tàbí kọ̀mpútà ilé-ìwé", action: "dá ibi tí AI ti ń dábàá, tò, méfò tàbí ṣẹ̀dá nǹkan mọ̀, títí kan generative AI", standard: "kí o sì dárúkọ ó kéré tán app mẹ́ta àti ohun tí AI ń ṣe nínú ọ̀kọ̀ọ̀kan" },
    { id: "O3", condition: "Kí o tó lo irinṣẹ́ AI tuntun nílé tàbí nílé-ìwé", action: "ṣàyẹ̀wò òfin ọjọ́ orí irinṣẹ́ náà àti òfin AI ilé-ìwé rẹ, kí o sì fi app náà han òbí tàbí alágbàtọ́ rẹ", standard: "ní lílo ojú-ewé ìrànlọ́wọ́ tàbí òfin ìlò (terms) gidi ti irinṣẹ́ náà" },
    { id: "O4", condition: "Tí ohun kan bá wà tí o fẹ́ kọ́", action: "kọ prompt tí ó sọ ohun tí o fẹ́, díẹ̀ nípa rẹ àti kókó ọ̀rọ̀ náà, àti bí o ṣe fẹ́ kí ìdáhùn rí", standard: "tí ìdáhùn àkọ́kọ́ fi wúlò" },
    { id: "O5", condition: "Tí ìdáhùn AI bá ní òtítọ́ nínú", action: "ṣàyẹ̀wò orúkọ, ọjọ́ àti nọ́mbà pẹ̀lú orísun tí a lè gbẹ́kẹ̀ lé", standard: "kí o sì kọ ibi tí o ti ṣàyẹ̀wò òtítọ́ kọ̀ọ̀kan sílẹ̀" },
    { id: "O6", condition: "Nígbà tí o bá ń kọ prompt tàbí tí o bá rí nǹkan tí AI ṣe", action: "pa ìsọfúnni àdáni mọ́ kúrò nínú rẹ̀, kọ̀ láti ṣe ayédèrú àwọn ènìyàn gidi, kí o sì bi ìdáhùn tí kò ṣe déédé léèrè", standard: "láìpín ìsọfúnni àdáni kankan, kí o sì sọ fún àgbàlagbà tí o gbẹ́kẹ̀ lé nípa ayédèrú tí ó ń pani lára" }
  ],
  chapters: [
    {
      name: "Orí 1: Ohun tí AI jẹ́ àti ibi tí o ti ń pàdé rẹ̀",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí AI jẹ́, ní ọ̀rọ̀ tó rọrùn",
          minutes: 4,
          goal: "Ṣàlàyé ní gbólóhùn méjì ohun tí AI jẹ́ àti ohun tí kò jẹ́.",
          text: [
            "AI ni ìkékúrú artificial intelligence (ọgbọ́n àtọwọ́dá). Ó túmọ̀ sí àwọn ètò kọ̀mpútà tí ó ń ṣe ohun tí ó sábà máa ń nílò èrò ènìyàn, bí dídá ojú ẹnìkan mọ̀, gbígbọ́ ọ̀rọ̀ tí a sọ yé, dídábàá orin kan tàbí kíkọ ìdáhùn.",
            "Ọ̀pọ̀ jù lọ AI ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ tó pọ̀ gan-an. Ètò tí ó ti rí mílíọ̀nù fọ́tò ológbò lè méfò bóyá ológbò wà nínú fọ́tò tuntun kan. Ètò tí ó ti ka ìwé tó pọ̀ gan-an lè kọ gbólóhùn tí ó dún bí ti ènìyàn.",
            "AI kò ní ẹ̀mí, kò ní ìmọ̀lára, kò sì lóye ayé gan-an bí ìwọ ṣe lóye rẹ̀. Ó ń wá àwòṣe (pattern), ó sì ń méfò bí ó ṣe lè ṣe dáadáa tó. Ìdí nìyẹn tí ó fi lè wúlò gan-an, kí ó sì tún ṣàṣìṣe."
          ],
          words: [["AI", "artificial intelligence (ọgbọ́n àtọwọ́dá): àwọn ètò kọ̀mpútà tí ó ń ṣe iṣẹ́ tí ó sábà máa ń nílò èrò ènìyàn."], ["Àwòṣe (pattern)", "nǹkan tí ó ń tún ara rẹ̀ ṣe lọ́nà tí ètò kan lè kọ́, kí ó sì fi méfò."]],
          slides: [
            { title: "AI = artificial intelligence (ọgbọ́n àtọwọ́dá)", bullets: ["Àwọn ètò tí ó ń ṣe iṣẹ́ tí ó nílò èrò", "Dídá ojú mọ̀, gbígbọ́ ọ̀rọ̀ yé, kíkọ ìdáhùn"] },
            { title: "Bí ó ṣe ń kẹ́kọ̀ọ́", bullets: ["Ó ń kẹ́kọ̀ọ́ àpẹẹrẹ tó pọ̀ gan-an", "Ó ń wá àwòṣe (pattern)", "Ó ń méfò bí ó ṣe lè ṣe dáadáa tó"] },
            { title: "Ohun tí AI KÌ Í ṢE", bullets: ["Kò ní ẹ̀mí, kò ní ìmọ̀lára", "Kò lóye nǹkan bí ìwọ ṣe ń lóye", "Ó lè ṣàṣìṣe, kódà tí ó bá dún bí ó dá a lójú"] }
          ],
          tryIt: "Kọ gbólóhùn méjì tí ó ṣàlàyé AI fún ọmọ ọdún mẹ́wàá. Má ṣe lo ọ̀rọ̀ kankan tí kò ní mọ̀. Ka á fún ẹnìkan kí o sì béèrè bóyá ó yé e.",
          youCanNow: "ṣàlàyé ohun tí AI jẹ́ àti ohun tí kò jẹ́ ní gbólóhùn méjì tó rọrùn.",
          quickCheck: [
            { objective: "O1", q: "Kí ló túmọ̀ sí pé AI \"ń wá àwòṣe\"?", options: ["Ó ń ní ìmọ̀lára bí o ṣe ń ní", "Ó mọ gbogbo nǹkan nípa ayé", "Ó ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ púpọ̀, ó sì ń méfò bí ó ṣe lè ṣe dáadáa tó", "Ó ń ka ọkàn rẹ"], answer: 2, why: "AI ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ tó pọ̀ gan-an, ó sì ń méfò láti inú àwòṣe tí ó rí." },
            { objective: "O1", q: "Ọ̀rẹ́ rẹ sọ pé, \"AI ní ẹ̀mí, ó sì ń gbọ́ tèmi yé.\" Kí ni o máa sọ fún un?", options: ["AI kò ní ẹ̀mí, kò sì ní ìmọ̀lára; ó ń méfò láti inú àwòṣe", "Bẹ́ẹ̀ ni, ó ní ìmọ̀lára bí ènìyàn", "AI tí a ń sanwó fún nìkan ló ní ẹ̀mí", "AI ń ṣiṣẹ́ lórí fóònù nìkan"], answer: 0, why: "AI jẹ́ ètò tí ó ń wá àwòṣe; kò ní ẹ̀mí, kò sì lóye nǹkan gan-an." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rírí AI nínú àwọn app tí o ti ń lò",
          minutes: 5,
          goal: "Dárúkọ ó kéré tán ibi mẹ́ta tí AI ti ń farahàn nínú àwọn app ojoojúmọ́ rẹ.",
          text: [
            "Ó ṣeé ṣe kí o máa lo AI lójoojúmọ́ láìpè é bẹ́ẹ̀. Àwọn app orin àti fídíò ń dábàá ohun tí o lè gbọ́ tàbí wò tẹ̀lé e, ní ìbámu pẹ̀lú ohun tí o fẹ́ràn tẹ́lẹ̀. AI ló ń wá àwòṣe nínú àwọn ohun tí o yàn.",
            "Kámẹ́rà fóònù ń lo AI láti mú fọ́tò mọ́lẹ̀ dáadáa àti láti ṣú ẹ̀yìn fọ́tò. Kíbọ́ọ̀dù ń méfò ọ̀rọ̀ tí o máa tẹ tẹ̀lé e. Máàpù ń méfò bí ọkọ̀ ṣe pọ̀ tó lójú ọ̀nà. Àwọn eré ń lo AI láti darí àwọn tí o ń bá ṣeré. Àwọn app email àti ọ̀rọ̀ ìránṣẹ́ ń ya spam (ọ̀rọ̀ tí a kò fẹ́) sọ́tọ̀.",
            "Àwọn olùrànlọ́wọ́ ìjíròrò bí ChatGPT, Microsoft Copilot àti Google Gemini jẹ́ irú AI tuntun tí a ń pè ní generative AI. Dípò pé kí wọ́n kàn tò tàbí dábàá nǹkan, wọ́n ń ṣẹ̀dá ọ̀rọ̀, àwòrán tàbí ohùn tuntun."
          ],
          steps: ["Ṣí app kan tí o ń lò púpọ̀.", "Bi ara rẹ léèrè: ṣé ó ń dábàá, tò, méfò tàbí ṣẹ̀dá nǹkan fún mi?", "Tí ó bá jẹ́ bẹ́ẹ̀ ni, ó ṣeé ṣe kí AI ló ń ṣiṣẹ́ níbẹ̀.", "Kọ orúkọ app náà àti ohun tí AI ń ṣe sílẹ̀."],
          words: [["Àbá (recommendation)", "ohun tí app kan dábàá fún ọ ní ìbámu pẹ̀lú ohun tí o ṣe tẹ́lẹ̀."], ["Generative AI", "AI tí ó ń ṣẹ̀dá nǹkan tuntun, bí ọ̀rọ̀, àwòrán tàbí orin."]],
          slides: [
            { title: "AI tí o ti ń lò", bullets: ["Àbá orin àti fídíò", "Àtúnṣe fọ́tò kámẹ́rà fóònù", "Kíbọ́ọ̀dù tí ó ń méfò ọ̀rọ̀ tó kàn", "Àwọn ẹ̀dá inú eré àti àsẹ́ spam"] },
            { title: "Bi ara rẹ léèrè", bullets: ["Ṣé app náà ń dábàá, tò, méfò tàbí ṣẹ̀dá nǹkan?", "Tí ó bá jẹ́ bẹ́ẹ̀ ni, ó ṣeé ṣe kí ó jẹ́ AI"] },
            { title: "Generative AI", bullets: ["Ó ń ṣẹ̀dá ọ̀rọ̀, àwòrán tàbí ohùn tuntun", "Àpẹẹrẹ: ChatGPT, Copilot, Gemini"] }
          ],
          tryIt: "Wo àwọn app tí ó wà lórí fóònù rẹ tàbí kọ̀mpútà ilé-ìwé. Kọ mẹ́ta tí ó ń lo AI sílẹ̀, kí o sì kọ ìlà kan fún ọ̀kọ̀ọ̀kan tí ó sọ ohun tí AI ń ṣe, fún àpẹẹrẹ \"App orin: ó ń dábàá orin tí mo lè fẹ́ràn\".",
          youCanNow: "rí AI nínú àwọn app ojoojúmọ́, kí o sì sọ ohun tí ó ń ṣe.",
          quickCheck: [
            { objective: "O2", q: "Kí ló mú kí generative AI yàtọ̀ sí orin tí app orin ń dábàá?", options: ["Ó ń tò email nìkan", "Ó ń ṣẹ̀dá ọ̀rọ̀, àwòrán tàbí ohùn tuntun", "Ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì nìkan", "Kì í lo àwòṣe rárá"], answer: 1, why: "Generative AI ń ṣẹ̀dá nǹkan tuntun dípò pé kí ó kàn tò tàbí dábàá nǹkan." },
            { objective: "O2", q: "O fẹ́ mọ̀ bóyá app kan ń lo AI. Ìbéèrè wo ló ṣèrànwọ́ jù?", options: ["Ṣé app náà jẹ́ ọ̀fẹ́?", "Ṣé àmì rẹ̀ jẹ́ búlúù?", "Ọdún mélòó ni app náà ti wà?", "Ṣé ó ń dábàá, tò, méfò tàbí ṣẹ̀dá nǹkan fún mi?"], answer: 3, why: "Tí app kan bá ń dábàá, tò, méfò tàbí ṣẹ̀dá nǹkan fún ọ, ó ṣeé ṣe kí AI ló ń ṣiṣẹ́ níbẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Òfin ọjọ́ orí, òfin ilé-ìwé àti òbí tàbí alágbàtọ́ rẹ",
          minutes: 5,
          goal: "Ṣàyẹ̀wò bóyá o lè lo irinṣẹ́ AI kan, nílé àti nílé-ìwé, kí o tó forúkọ sílẹ̀.",
          text: [
            "Gbogbo irinṣẹ́ AI ló ní òfin nípa ẹni tí ó lè lò ó. Ọ̀pọ̀ ń fẹ́ kí o jẹ́ ó kéré tán ọmọ ọdún 13, àwọn kan sì ń béèrè àṣẹ òbí tàbí alágbàtọ́ tí o kò bá tíì pé ọmọ ọdún 18. Fún àpẹẹrẹ, Google sọ pé o gbọ́dọ̀ jẹ́ ọmọ ọdún 13 tàbí jù bẹ́ẹ̀ lọ (tàbí ọjọ́ orí tí òfin orílẹ̀-èdè rẹ fi lélẹ̀) láti lo Gemini pẹ̀lú àkáǹtì àdáni tàbí àkáǹtì ilé-ìwé. Òfin máa ń yí padà, nítorí náà ka ojú-ewé òfin ìlò (terms) tàbí ìrànlọ́wọ́ ti irinṣẹ́ náà fúnra rẹ̀.",
            "Ilé-ìwé rẹ náà ní òfin. Àwọn kíláàsì kan gba AI láàyè fún wíwá èrò (brainstorming) ṣùgbọ́n kì í ṣe fún kíkọ iṣẹ́ rẹ. Àwọn kan kọ̀ ọ́ fún ìdánwò. Lílò ó lòdì sí òfin lè jẹ́ màgòmágó (cheating), kódà tí o kò bá mọ̀ọ́mọ̀ ṣe é. Tí iyèméjì bá wà, béèrè lọ́wọ́ olùkọ́ rẹ kí o tó lò ó.",
            "Kí o tó ṣí àkáǹtì lórí app tuntun èyíkéyìí, bá òbí tàbí alágbàtọ́ rẹ sọ̀rọ̀. Fi app náà hàn wọ́n, òfin ọjọ́ orí rẹ̀, àti ìsọfúnni tí ó ń béèrè. Ọ̀pọ̀ ilé-ìwé tún ń fún ọ ní àkáǹtì ilé-ìwé fún àwọn irinṣẹ́ tí wọ́n fọwọ́ sí; lo èyí fún iṣẹ́ ilé-ìwé."
          ],
          steps: ["Wá òfin ọjọ́ orí irinṣẹ́ náà lórí ojú-ewé ìrànlọ́wọ́ tàbí òfin ìlò rẹ̀ gidi.", "Ṣàyẹ̀wò òfin AI ilé-ìwé rẹ àti ti olùkọ́ rẹ.", "Fi app náà han òbí tàbí alágbàtọ́ rẹ kí o tó forúkọ sílẹ̀.", "Lo àkáǹtì ilé-ìwé rẹ fún àwọn irinṣẹ́ ilé-ìwé tí wọ́n fọwọ́ sí."],
          words: [["Òfin ìlò (terms of use)", "àwọn òfin tí ilé-iṣẹ́ kan fi lélẹ̀ fún lílo app tàbí ojú-òpó wẹ́ẹ̀bù rẹ̀."], ["Òtítọ́ nínú ẹ̀kọ́ (academic integrity)", "jíjẹ́ olóòótọ́ nípa iṣẹ́ ilé-ìwé rẹ: iṣẹ́ tí o fi sílẹ̀ ń fi ohun tí ìwọ fúnra rẹ ṣe hàn."]],
          sources: [{ name: "Google Gemini Apps Help: ohun tí o nílò láti wọlé (òfin ọjọ́ orí)", url: "https://support.google.com/gemini/answer/13278668" }],
          slides: [
            { title: "Kọ́kọ́ ṣàyẹ̀wò òfin ọjọ́ orí", bullets: ["Ọ̀pọ̀ irinṣẹ́ AI ń fẹ́ kí o jẹ́ ọmọ ọdún 13 tàbí jù bẹ́ẹ̀ lọ", "Àwọn kan ń fẹ́ àṣẹ òbí tí o kò bá tíì pé ọmọ ọdún 18", "Ka ojú-ewé ìrànlọ́wọ́ tàbí òfin ìlò ti irinṣẹ́ náà fúnra rẹ̀"] },
            { title: "Mọ òfin ilé-ìwé rẹ", bullets: ["Àwọn kíláàsì kan gba AI láàyè fún èrò nìkan", "Àwọn kan kọ̀ ọ́ fún ìdánwò", "Kò dá ọ lójú? Kọ́kọ́ béèrè lọ́wọ́ olùkọ́ rẹ"] },
            { title: "Pe òbí tàbí alágbàtọ́ rẹ wọlé", bullets: ["Fi app náà hàn wọ́n kí o tó forúkọ sílẹ̀", "Wo ìsọfúnni tí ó ń béèrè", "Lo àkáǹtì ilé-ìwé rẹ fún irinṣẹ́ ilé-ìwé"] }
          ],
          tryIt: "Yan olùrànlọ́wọ́ AI kan. Wá òfin ọjọ́ orí rẹ̀ lórí ojú-ewé ìrànlọ́wọ́ tàbí òfin ìlò ti ilé-iṣẹ́ náà fúnra rẹ̀. Lẹ́yìn náà kọ òfin ilé-ìwé rẹ tàbí ti olùkọ́ kan nípa AI sílẹ̀. Fi méjèèjì han òbí tàbí alágbàtọ́ rẹ.",
          youCanNow: "ṣàyẹ̀wò òfin ọjọ́ orí irinṣẹ́ AI kan àti òfin AI ilé-ìwé rẹ, kí o sì kó òbí tàbí alágbàtọ́ rẹ mọ́ ọn kí o tó forúkọ sílẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Ibo ni ibi tó dára jù láti wá òfin ọjọ́ orí irinṣẹ́ AI kan?", options: ["Ojú-ewé ìrànlọ́wọ́ tàbí òfin ìlò ti irinṣẹ́ náà fúnra rẹ̀", "Ìméfò ọ̀rẹ́ kan", "Ọ̀rọ̀ èyíkéyìí lábẹ́ fídíò kan", "Ìràwọ̀ tí wọ́n fún app náà"], answer: 0, why: "Òfin máa ń yí padà, nítorí náà kà á lórí ojú-ewé ìrànlọ́wọ́ tàbí òfin ìlò ti ilé-iṣẹ́ náà fúnra rẹ̀." },
            { objective: "O3", q: "Kò dá ọ lójú bóyá wọ́n gba AI láàyè fún iṣẹ́ àkànṣe kíláàsì kan. Kí ni o máa ṣe?", options: ["Lò ó kí o sì retí pé kò sí wàhálà", "Béèrè lọ́wọ́ ọ̀rẹ́ kan ní ilé-ìwé míì", "Lò ó ṣùgbọ́n má ṣe sọ fún ẹnikẹ́ni", "Béèrè lọ́wọ́ olùkọ́ rẹ kí o tó lò ó"], answer: 3, why: "Òfin ilé-ìwé yàtọ̀ síra, lílo AI lòdì sí wọn sì lè jẹ́ màgòmágó, nítorí náà kọ́kọ́ béèrè." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ohun tí AI jẹ́ àti ibi tí o ti ń pàdé rẹ̀",
        questions: [
          { objective: "O1", q: "Gbólóhùn wo ló ṣàpèjúwe AI jù?", options: ["Rọ́bọ́ọ̀tì tí ó ní ìmọ̀lára", "Àwọn ètò kọ̀mpútà tí ó ń ṣe iṣẹ́ tí ó sábà máa ń nílò èrò ènìyàn", "Irú chaja fóònù kan", "Ojú-òpó wẹ́ẹ̀bù tí ó máa ń tọ̀nà nígbà gbogbo"], answer: 1, why: "AI túmọ̀ sí àwọn ètò tí ó ń ṣe iṣẹ́ tí ó nílò èrò, bí dídá nǹkan mọ̀, dídábàá àti kíkọ̀wé." },
          { objective: "O1", q: "Báwo ni ọ̀pọ̀ jù lọ AI ṣe ń kẹ́kọ̀ọ́?", options: ["Nípa lílọ sí ilé-ìwé", "Nípa kíka ọkàn rẹ", "Kì í kẹ́kọ̀ọ́ rárá", "Nípa kíkẹ́kọ̀ọ́ àpẹẹrẹ tó pọ̀ gan-an àti wíwá àwòṣe"], answer: 3, why: "AI ń wá àwòṣe nínú àpẹẹrẹ tó pọ̀, ó sì ń fi wọ́n méfò." },
          { objective: "O2", q: "App orin rẹ dábàá orin tuntun tí o lè fẹ́ràn. Èyí ni:", options: ["AI tí ó ń ṣe àbá", "Kòkòrò àìfojúrí (virus)", "Òfin olùkọ́", "Ìpè fóònù"], answer: 0, why: "Àbá tí a gbé ka ohun tí o yàn tẹ́lẹ̀ jẹ́ ọ̀nà kan tí a sábà máa ń lo AI." },
          { objective: "O3", q: "O fẹ́ gbìyànjú app AI tuntun kan. Kí ni o máa kọ́kọ́ ṣe?", options: ["Forúkọ sílẹ̀ pẹ̀lú ọjọ́ ìbí èyíkéyìí", "Fún un ní ọ̀rọ̀ aṣínà ilé-ìwé rẹ", "Ṣàyẹ̀wò òfin ọjọ́ orí rẹ̀ kí o sì fi han òbí tàbí alágbàtọ́ rẹ", "Gbà á láti inú ìpolówó tí ó yọ jáde lójijì"], answer: 2, why: "Òfin ọjọ́ orí àti àṣẹ òbí tàbí alágbàtọ́ ló ń ṣáájú fíforúkọ sílẹ̀." },
          { objective: "O3", q: "Olùkọ́ rẹ sọ pé AI dára fún wíwá èrò ṣùgbọ́n kì í ṣe fún kíkọ àròkọ rẹ. Ìwọ:", options: ["Jẹ́ kí AI kọ àròkọ náà bẹ́ẹ̀ náà", "Má ka òfin náà sí", "Lo AI fún èrò nìkan, lẹ́yìn náà kọ àròkọ náà fúnra rẹ", "Da àròkọ ọ̀rẹ́ kan kọ"], answer: 2, why: "Títẹ̀lé òfin olùkọ́ rẹ ń jẹ́ kí iṣẹ́ rẹ jẹ́ ti òtítọ́." }
        ]
      }
    },
    {
      name: "Orí 2: Lílo olùrànlọ́wọ́ AI lọ́nà ọgbọ́n",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bíbéèrè ìbéèrè tó yé",
          minutes: 5,
          goal: "Kọ prompt tó yé tí ó máa mú ìdáhùn tó wúlò wá ní ìgbà àkọ́kọ́.",
          text: [
            "Ohun tí o tẹ sí olùrànlọ́wọ́ AI ni a ń pè ní prompt. Prompt tó yé máa ń mú ìdáhùn tó dára jù wá.",
            "Prompt tó dára ní apá mẹ́ta: ohun tí o fẹ́, díẹ̀ nípa rẹ àti kókó ọ̀rọ̀ náà, àti bí o ṣe fẹ́ kí ìdáhùn rí. Fún àpẹẹrẹ: \"Mo wà ní kíláàsì 9th grade, a sì ń bẹ̀rẹ̀ ẹ̀kọ́ nípa ìyípo omi (water cycle). Ṣàlàyé rẹ̀ ní ìgbésẹ̀ kúkúrú 5 pẹ̀lú àpẹẹrẹ ojoojúmọ́ kan.\"",
            "Prompt tí kò lágbára bí \"ìyípo omi\" ń jẹ́ kí olùrànlọ́wọ́ náà méfò ohun tí o nílò. Ìdáhùn gígùn, gbogbogbò ni o sábà máa rí gbà."
          ],
          steps: ["Sọ ohun tí o fẹ́.", "Fi díẹ̀ kún un nípa rẹ (kíláàsì rẹ, kókó ọ̀rọ̀ náà, ohun tí o ti mọ̀ tẹ́lẹ̀).", "Sọ bí o ṣe fẹ́ kí ó rí: ìgbésẹ̀, àkọsílẹ̀, kúkúrú, ọ̀rọ̀ tó rọrùn tàbí àpẹẹrẹ."],
          words: [["Prompt", "ohun tí o tẹ tàbí sọ sí olùrànlọ́wọ́ AI."]],
          slides: [
            { title: "Prompt ni ìbéèrè rẹ", bullets: ["Prompt tó yé = ìdáhùn tó dára jù", "Prompt tí kò yé = ìdáhùn gbogbogbò"] },
            { title: "Apá mẹ́ta", bullets: ["1. Ohun tí o fẹ́", "2. Díẹ̀ nípa rẹ àti kókó ọ̀rọ̀ náà", "3. Bí o ṣe fẹ́ kí ìdáhùn rí"] },
            { title: "Èyí tí kò lágbára àti èyí tó yé", bullets: ["Kò lágbára: \"ìyípo omi\"", "Ó yé: \"Mo wà ní 9th grade. Ṣàlàyé ìyípo omi ní ìgbésẹ̀ kúkúrú 5 pẹ̀lú àpẹẹrẹ.\""] }
          ],
          tryIt: "Yan nǹkan kan tí ó wù ọ́ láti mọ̀, bí bí ẹ̀rọ eré (game engine) ṣe ń ṣiṣẹ́ tàbí ìdí tí ojú ọ̀run fi jẹ́ búlúù. Kọ prompt tí ó ní gbogbo apá mẹ́ta, fi í ránṣẹ́ sí olùrànlọ́wọ́ AI tí wọ́n gbà ọ́ láàyè láti lò, kí o sì ka ìdáhùn.",
          youCanNow: "kọ prompt tó yé tí ó ní apá mẹ́ta.",
          quickCheck: [
            { objective: "O4", q: "Kí ni apá \"díẹ̀ nípa rẹ\" nínú prompt?", options: ["Àwọ̀ ojú-iboju", "Díẹ̀ nípa rẹ àti kókó ọ̀rọ̀ náà, bí kíláàsì rẹ tàbí ohun tí o ti mọ̀ tẹ́lẹ̀", "Ọ̀rọ̀ aṣínà rẹ", "Ètò (settings) app náà"], answer: 1, why: "Ìsọfúnni bí kíláàsì rẹ àti kókó ọ̀rọ̀ náà ń ran olùrànlọ́wọ́ lọ́wọ́ láti mú ìdáhùn bá ọ mu." },
            { objective: "O4", q: "O tẹ \"òkè ayọnáyèéfín\", o sì rí ìdáhùn gígùn, gbogbogbò. Kí ni o máa fi ránṣẹ́ tẹ̀lé e?", options: ["\"òkè ayọnáyèéfín\" lẹ́ẹ̀kan sí i", "Kò sí nǹkan; jáwọ́", "\"Mo wà ní 8th grade. Ṣàlàyé bí òkè ayọnáyèéfín ṣe ń bú ní ìgbésẹ̀ kúkúrú 4.\"", "Àdírẹ́sì ilé rẹ"], answer: 2, why: "Fífi ohun tí o fẹ́, díẹ̀ nípa rẹ àti bí ó ṣe máa rí kún un ń jẹ́ kí prompt yé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣàyẹ̀wò ìdáhùn kí o tó gbà á gbọ́",
          minutes: 5,
          goal: "Ṣàyẹ̀wò ìdáhùn AI pẹ̀lú ó kéré tán orísun kan tí a lè gbẹ́kẹ̀ lé.",
          text: [
            "Nígbà míì àwọn olùrànlọ́wọ́ AI máa ń hùmọ̀ nǹkan. Wọ́n lè hùmọ̀ ọjọ́ kan, ọ̀rọ̀ tí ẹnìkan sọ, ìwé tí kò sí, tàbí òtítọ́ tí ó dún bí ó tọ́ ṣùgbọ́n tí kò tọ́. A ń pe èyí ní hallucination.",
            "Ṣàyẹ̀wò ohunkóhun tó ṣe pàtàkì, pàápàá òtítọ́ fún iṣẹ́ ilé-ìwé, ìlera, owó àti ìròyìn. Wò ó nínú ìwé ẹ̀kọ́ rẹ, béèrè lọ́wọ́ olùkọ́ rẹ tàbí òṣìṣẹ́ ilé-ìkàwé, tàbí wá ojú-òpó wẹ́ẹ̀bù tí a lè gbẹ́kẹ̀ lé, bí ti ilé ìkóhun-ìṣẹ̀ǹbáyé-sí (museum), àjọ sáyẹ́ǹsì, ìwé ìmọ̀ (encyclopedia) tí ilé-ìwé rẹ ń lò, tàbí ojú-òpó tí ó parí sí .gov tàbí .edu.",
            "Àṣà tó dára: fi orísun méjì wéra. Tí AI àti orísun tí a lè gbẹ́kẹ̀ lé kò bá bára mu, gbẹ́kẹ̀ lé orísun náà, o sì lè sọ fún olùkọ́ rẹ ohun tí AI ṣì."
          ],
          steps: ["Wá àwọn òtítọ́ inú ìdáhùn: orúkọ, ọjọ́, nọ́mbà.", "Wá ọ̀kọ̀ọ̀kan wọn nínú orísun tí a lè gbẹ́kẹ̀ lé.", "Tí wọn kò bá bára mu, tẹ̀lé orísun tí a lè gbẹ́kẹ̀ lé.", "Kọ ibi tí o ti ṣàyẹ̀wò sílẹ̀."],
          words: [["Hallucination", "nígbà tí AI bá kọ nǹkan tí ó dún bí òótọ́ ṣùgbọ́n tí ó jẹ́ àhùsọ."], ["Orísun (source)", "ibi tí ìsọfúnni ti wá."]],
          slides: [
            { title: "AI lè hùmọ̀ nǹkan", bullets: ["Ọjọ́ àti nọ́mbà tí kò tọ́", "Ọ̀rọ̀ àyọlò tàbí ìwé ayédèrú", "Òtítọ́ tí ó dún bí ó tọ́ ṣùgbọ́n tí kò tọ́"] },
            { title: "Ṣàyẹ̀wò pẹ̀lú orísun tí a gbẹ́kẹ̀ lé", bullets: ["Ìwé ẹ̀kọ́ rẹ, olùkọ́ tàbí òṣìṣẹ́ ilé-ìkàwé", "Museum, àjọ sáyẹ́ǹsì, ojú-òpó .gov tàbí .edu"] },
            { title: "Tí wọn kò bá bára mu", bullets: ["Gbẹ́kẹ̀ lé orísun tí ó ṣeé gbẹ́kẹ̀ lé", "Kọ ibi tí o ti ṣàyẹ̀wò sílẹ̀"] }
          ],
          tryIt: "Mú ìdáhùn láti inú prompt rẹ tó kẹ́yìn. Yan òtítọ́ méjì nínú rẹ̀, kí o sì ṣàyẹ̀wò ọ̀kọ̀ọ̀kan nínú orísun tí a lè gbẹ́kẹ̀ lé. Kọ ọ́ sílẹ̀ bóyá ọ̀kọ̀ọ̀kan tọ̀nà àti ibi tí o ti ṣàyẹ̀wò.",
          youCanNow: "rí àwọn òtítọ́ tí ó nílò àyẹ̀wò, kí o sì ṣàyẹ̀wò wọn nínú orísun tí a lè gbẹ́kẹ̀ lé.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni orísun tí a lè gbẹ́kẹ̀ lé fún ṣíṣàyẹ̀wò òtítọ́ ilé-ìwé?", options: ["Ọ̀rọ̀ èyíkéyìí lórí ayélujára", "AI kan náà tí o tún béèrè lọ́wọ́ rẹ̀", "Meme kan", "Ìwé ẹ̀kọ́ rẹ tàbí ojú-òpó tí ó parí sí .edu tàbí .gov"], answer: 3, why: "Ìwé ẹ̀kọ́, olùkọ́, òṣìṣẹ́ ilé-ìkàwé àti ojú-òpó tí a lè gbẹ́kẹ̀ lé jẹ́ ibi tó dára láti ṣàyẹ̀wò òtítọ́." },
            { objective: "O5", q: "AI dárúkọ ìwé kan fún ìròyìn (report) rẹ, ṣùgbọ́n o kò rí i níbikíbi. Kí ni o máa ṣe?", options: ["Kà á sí hallucination tí ó ṣeé ṣe, kí o sì lo orísun tí o lè rí", "Fi í sínú ìròyìn rẹ bẹ́ẹ̀ náà", "Hùmọ̀ nọ́mbà ojú-ewé kan", "Ní kí AI ṣèlérí pé ó jẹ́ gidi"], answer: 0, why: "AI lè hùmọ̀ ìwé àti òtítọ́; gbẹ́kẹ̀ lé orísun tí o lè ṣàyẹ̀wò gan-an." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Wíwà láìléwu àti ṣíṣe déédé pẹ̀lú AI",
          minutes: 5,
          goal: "Lo AI láìpín ìsọfúnni àdáni àti láìpa ẹnikẹ́ni lára.",
          text: [
            "Má ṣe tẹ ìsọfúnni àdáni sínú irinṣẹ́ AI: orúkọ rẹ ní kíkún pẹ̀lú àdírẹ́sì rẹ, ilé-ìwé rẹ àti àkókò ìgbòkègbodò rẹ, nọ́mbà fóònù, ọ̀rọ̀ aṣínà, tàbí fọ́tò àwọn ọ̀rẹ́ láìbéèrè lọ́wọ́ wọn. Ohun tí o tẹ lè wà ní ìpamọ́.",
            "AI lè ṣe àwòrán ayédèrú, ohùn ayédèrú àti fídíò ayédèrú, tí a máa ń pè ní deepfake nígbà míì. Má ṣe lo AI láti ṣe àwòrán ayédèrú tàbí èyí tí ó ń dójú tini ti ènìyàn gidi láéláé. Ó lè pa wọ́n lára, ó lè rú òfin ilé-ìwé, ó sì lè rú òfin ìjọba pàápàá. Tí ẹnìkan bá ṣe é sí ọ tàbí sí ọ̀rẹ́ rẹ, sọ fún àgbàlagbà tí o gbẹ́kẹ̀ lé.",
            "AI tún lè ṣe ojúsàájú. Ó kẹ́kọ̀ọ́ láti inú ohun tí ènìyàn kọ, nítorí náà ó lè tún èrò òdì nípa àwọn ẹgbẹ́ kan (stereotype) sọ. Tí ìdáhùn kan bá dà bí èyí tí kò ṣe déédé sí ẹgbẹ́ àwọn ènìyàn kan, bi í léèrè."
          ],
          steps: ["Ka prompt rẹ kí o tó fi í ránṣẹ́, kí o sì yọ ìsọfúnni àdáni kúrò.", "Má ṣe ṣe àwòrán tàbí ohùn ayédèrú ti ènìyàn gidi láéláé.", "Tí o bá rí deepfake tí ó ń pani lára, sọ fún àgbàlagbà tí o gbẹ́kẹ̀ lé.", "Bi àwọn ìdáhùn tí ó dà bí èyí tí kò ṣe déédé léèrè."],
          words: [["Deepfake", "àwòrán, ohùn tàbí fídíò ayédèrú tí a fi AI ṣe kí ó lè dà bí gidi."], ["Ojúsàájú (bias)", "nígbà tí èsì kò ṣe déédé sí àwọn ènìyàn kan, nígbà púpọ̀ nítorí ohun tí AI kẹ́kọ̀ọ́ láti inú rẹ̀."]],
          slides: [
            { title: "Pa á mọ́ ní ìkọ̀kọ̀", bullets: ["Kò sí àdírẹ́sì, àkókò ìgbòkègbodò tàbí nọ́mbà fóònù", "Kò sí ọ̀rọ̀ aṣínà", "Kò sí fọ́tò ọ̀rẹ́ láìbéèrè"] },
            { title: "Deepfake ń pani lára", bullets: ["Má ṣe ṣe ayédèrú ènìyàn gidi láéláé", "Ó lè rú òfin ilé-ìwé àti òfin ìjọba", "Sọ fún àgbàlagbà tí o gbẹ́kẹ̀ lé tí o bá rí ọ̀kan"] },
            { title: "Ṣọ́ra fún ojúsàájú", bullets: ["AI lè tún èrò òdì nípa àwọn ẹgbẹ́ kan sọ", "Bi àwọn ìdáhùn tí kò ṣe déédé léèrè"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe \"àlàyé AI\" ojú-ewé kan rẹ: ohun tí AI jẹ́ ní gbólóhùn méjì, app mẹ́ta tí o ń lò tí AI wà nínú wọn, àti ìbéèrè kan tí o béèrè lọ́wọ́ olùrànlọ́wọ́ AI pẹ̀lú ìdáhùn rẹ̀ àti bí o ṣe ṣàyẹ̀wò rẹ̀. Rí i dájú pé kò sí ìsọfúnni àdáni kankan nínú rẹ̀.",
          youCanNow: "lo AI láìléwu àti lọ́nà tó ṣe déédé, kí o sì ṣàlàyé AI fún ẹlòmíì.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí a fi ń pa ìsọfúnni àdáni mọ́ kúrò nínú irinṣẹ́ AI?", options: ["Irinṣẹ́ AI máa ń lọ́ra", "Ohun tí o tẹ lè wà ní ìpamọ́", "Ó ń jẹ́ kí ìdáhùn kúrú", "Ìsọfúnni àdáni ń mú AI gbọ́n sí i"], answer: 1, why: "Ohun tí o tẹ lè wà ní ìpamọ́, nítorí náà ìsọfúnni àdáni bí àdírẹ́sì àti àkókò ìgbòkègbodò rẹ kò gbọ́dọ̀ wọ inú rẹ̀." },
            { objective: "O6", q: "Ọ̀rẹ́ kan fẹ́ lo AI láti ṣe àwòrán ayédèrú alárinrin ti ọmọ kíláàsì yín kan. Kí ni o máa ṣe?", options: ["Bá a ṣe é ṣùgbọ́n má ṣe pín in", "Fi í sórí ayélujára, nítorí àwàdà ni", "Sọ pé rárá, nítorí ayédèrú ènìyàn gidi lè pa wọ́n lára, ó sì lè rú òfin", "Fi í ránṣẹ́ sí àwọn ọ̀rẹ́ tímọ́tímọ́ nìkan"], answer: 2, why: "Àwòrán ayédèrú ti ènìyàn gidi lè pa wọ́n lára, ó lè rú òfin ilé-ìwé, ó sì lè rú òfin ìjọba pàápàá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lílo olùrànlọ́wọ́ AI lọ́nà ọgbọ́n",
        questions: [
          { objective: "O4", q: "Prompt wo ló yé jù?", options: ["\"Mo wà ní 9th grade. Ṣàlàyé ìyípo omi ní ìgbésẹ̀ kúkúrú 5 pẹ̀lú àpẹẹrẹ.\"", "\"sáyẹ́ǹsì\"", "\"ràn mí lọ́wọ́\"", "\"sọ nǹkan fún mi\""], answer: 0, why: "Ó sọ ohun tí o fẹ́, ó sọ díẹ̀ nípa rẹ, ó sì sọ bí o ṣe fẹ́ kí ìdáhùn rí." },
          { objective: "O5", q: "Kí ni \"hallucination\" AI?", options: ["Ìpele kan nínú eré fídíò", "Irú ojú-iboju fóònù kan", "Òfin ilé-ìwé kan", "Nígbà tí AI bá hùmọ̀ nǹkan tí ó dún bí òótọ́"], answer: 3, why: "Hallucination jẹ́ ìdáhùn àhùsọ tí ó dún bí gidi." },
          { objective: "O5", q: "AI fún ọ ní ọjọ́ kan fún iṣẹ́ àkànṣe ìtàn. O yẹ kí o:", options: ["Dà á kọ lẹ́sẹ̀kẹsẹ̀", "Ṣàyẹ̀wò rẹ̀ nínú ìwé ẹ̀kọ́ rẹ tàbí orísun míì tí a lè gbẹ́kẹ̀ lé", "Tún béèrè lọ́wọ́ AI kí o sì gba ìdáhùn kejì gbọ́", "Fo ọjọ́ náà"], answer: 1, why: "Òtítọ́ tó ṣe pàtàkì gbọ́dọ̀ ní àyẹ̀wò nínú orísun tí a lè gbẹ́kẹ̀ lé." },
          { objective: "O6", q: "Èwo ni o KÒ gbọdọ̀ tẹ sínú olùrànlọ́wọ́ AI?", options: ["Àdírẹ́sì ilé rẹ àti àkókò ìgbòkègbodò rẹ nílé-ìwé", "\"Ṣàlàyé photosynthesis ní ọ̀rọ̀ tó rọrùn\"", "\"Fún mi ní èrò 3 fún pátákó ìpolówó ẹgbẹ́ (club) wa\"", "\"Jẹ́ kí ó kúrú sí i\""], answer: 0, why: "Àdírẹ́sì àti àkókò ìgbòkègbodò jẹ́ ìsọfúnni àdáni." },
          { objective: "O6", q: "Ọmọ kíláàsì kan fi AI ṣe fọ́tò ayédèrú ti akẹ́kọ̀ọ́ míì. Kí ni o yẹ kí o ṣe?", options: ["Pín in", "Ṣe òmíì", "Sọ fún àgbàlagbà tí o gbẹ́kẹ̀ lé", "Kọ ọ̀rọ̀ sí abẹ́ rẹ̀"], answer: 2, why: "Deepfake ti ènìyàn gidi lè pa wọ́n lára; àgbàlagbà tí o gbẹ́kẹ̀ lé lè ṣèrànwọ́ láti dá a dúró." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Kí ni AI? (fún Àwọn Ọ̀dọ́)",
    questions: [
      { objective: "O1", q: "AI ni ìkékúrú:", options: ["Automatic Internet", "Artificial intelligence (ọgbọ́n àtọwọ́dá)", "Advanced information", "App installer"], answer: 1, why: "AI ni ìkékúrú artificial intelligence." },
      { objective: "O1", q: "Èwo ni òótọ́ nípa AI?", options: ["Ó ní ìmọ̀lára", "Ó máa ń tọ̀nà nígbà gbogbo", "Ó ní ẹ̀mí", "Ó ń wá àwòṣe, ó sì ń méfò bí ó ṣe lè ṣe dáadáa tó"], answer: 3, why: "AI ń méfò láti inú àwòṣe; kò ní ẹ̀mí, ó sì lè ṣàṣìṣe." },
      { objective: "O1", q: "Kí ló dé tí AI fi lè ṣàṣìṣe kódà tí ó bá dún bí ó dá a lójú?", options: ["Ó ń ṣe ọ̀lẹ", "Ó fẹ́ tàn ọ́ jẹ", "Fóònù ń lọ́ra", "Ó ń méfò láti inú àwòṣe, kò lóye nǹkan gan-an"], answer: 3, why: "Ó ń sọ tẹ́lẹ̀ láti inú àwòṣe, nítorí náà ìdáhùn tí ó dá a lójú ṣì lè jẹ́ àṣìṣe." },
      { objective: "O2", q: "Kíbọ́ọ̀dù fóònù rẹ ń méfò ọ̀rọ̀ tí o máa tẹ tẹ̀lé e. Èyí ni:", options: ["Kòkòrò àìfojúrí (virus)", "AI tí ó ń ṣiṣẹ́", "Olùkọ́ kan", "Ọ̀rọ̀ aṣínà"], answer: 1, why: "Míméfò ọ̀rọ̀ tó kàn jẹ́ iṣẹ́ AI tí ó wọ́pọ̀." },
      { objective: "O2", q: "Èwo ni àpẹẹrẹ generative AI?", options: ["Ẹ̀rọ ìṣirò (calculator)", "Ìyípadà iná (light switch)", "Olùrànlọ́wọ́ ìjíròrò tí ó kọ ìtàn kan", "Máàpù orí ìwé"], answer: 2, why: "Generative AI ń ṣẹ̀dá ọ̀rọ̀, àwòrán tàbí ohùn tuntun." },
      { objective: "O2", q: "App fídíò kan fi \"Because you watched...\" (Nítorí pé o wo...) hàn. Èyí ni:", options: ["Àbá tí AI ṣe", "Ọ̀rọ̀ text", "Òfin ilé-ìwé", "Ẹ̀rọ ìdarí eré"], answer: 0, why: "Ó ń dábàá fídíò láti inú ohun tí o yàn tẹ́lẹ̀." },
      { objective: "O3", q: "Ibo ni o yẹ kí o ti wá òfin ọjọ́ orí irinṣẹ́ AI kan?", options: ["Ìméfò ọ̀rẹ́ kan", "Ojú-ewé ìrànlọ́wọ́ tàbí òfin ìlò ti irinṣẹ́ náà fúnra rẹ̀", "Ìpolówó tí ó yọ jáde lójijì", "Kò sí ibì kankan, kò sí òfin kankan"], answer: 1, why: "Ojú-ewé ti ilé-iṣẹ́ náà fúnra rẹ̀ ló ń fún ọ ní òfin tí ó wà lọ́wọ́lọ́wọ́." },
      { objective: "O3", q: "Kí ni ojú-ewé ìrànlọ́wọ́ Google sọ nípa lílo Gemini pẹ̀lú àkáǹtì àdáni tàbí àkáǹtì ilé-ìwé?", options: ["Ọjọ́ orí èyíkéyìí dára", "O gbọ́dọ̀ jẹ́ ọmọ ọdún 21", "Àwọn olùkọ́ nìkan ló lè lò ó", "O gbọ́dọ̀ jẹ́ ọmọ ọdún 13 tàbí jù bẹ́ẹ̀ lọ, tàbí ọjọ́ orí tí òfin orílẹ̀-èdè rẹ fi lélẹ̀"], answer: 3, why: "Ojú-ewé ìrànlọ́wọ́ Google fi ọdún 13 tàbí jù bẹ́ẹ̀ lọ lélẹ̀, tàbí ọjọ́ orí ti orílẹ̀-èdè rẹ." },
      { objective: "O3", q: "Kí o tó forúkọ sílẹ̀ fún app tuntun, o yẹ kí o:", options: ["Bá òbí tàbí alágbàtọ́ rẹ sọ̀rọ̀", "Lo ọjọ́ ìbí ayédèrú", "Pín ọ̀rọ̀ aṣínà rẹ pẹ̀lú ọ̀rẹ́ kan", "Tẹ gbogbo ìpolówó"], answer: 0, why: "Òbí tàbí alágbàtọ́ gbọ́dọ̀ mọ̀ nípa àkáǹtì tuntun." },
      { objective: "O3", q: "Lílo AI láti kọ iṣẹ́ tí olùkọ́ rẹ sọ pé kí o kọ fúnra rẹ jẹ́:", options: ["Ó dára tí kò bá sí ẹni tí ó kíyè sí i", "Dandan", "Rírú òfin, ó sì lè jẹ́ màgòmágó", "Àṣà ìkẹ́kọ̀ọ́ tó dára"], answer: 2, why: "Òfin ilé-ìwé ló ń pinnu bí a ṣe lè lo AI; rírú wọn kì í ṣe ti òtítọ́." },
      { objective: "O4", q: "Kí ni prompt?", options: ["Ẹ̀rọ ìdarí eré", "Irú ọ̀rọ̀ aṣínà kan", "Ohun tí o tẹ tàbí sọ sí olùrànlọ́wọ́ AI", "Ilé ìtajà app"], answer: 2, why: "Prompt ni ìbéèrè rẹ sí AI." },
      { objective: "O4", q: "Apá wo ló ń jẹ́ kí prompt yé sí i?", options: ["Sísọ bí o ṣe fẹ́ kí ìdáhùn rí, bí ìgbésẹ̀ kúkúrú 5", "Títẹ ọ̀rọ̀ kan ṣoṣo", "Fífi àdírẹ́sì rẹ kún un", "Lílo lẹ́tà ńlá nìkan"], answer: 0, why: "Sísọ bí ó ṣe máa rí ń ran AI lọ́wọ́ láti fúnni ní ìdáhùn tó wúlò." },
      { objective: "O4", q: "Prompt tí kò lágbára bí \"ìyípo omi\" sábà máa ń mú:", options: ["Ìdáhùn pípé wá", "Kò sí ìdáhùn rárá", "Kòkòrò àìfojúrí (virus) wá", "Ìdáhùn gígùn, gbogbogbò wá"], answer: 3, why: "AI ní láti méfò, nítorí náà ìdáhùn máa jẹ́ gbogbogbò." },
      { objective: "O5", q: "Orísun wo ni a lè gbẹ́kẹ̀ lé jù fún ṣíṣàyẹ̀wò òtítọ́ sáyẹ́ǹsì?", options: ["Ọ̀rọ̀ èyíkéyìí lórí ayélujára", "Àjọ sáyẹ́ǹsì tàbí ìwé ẹ̀kọ́ rẹ", "Meme kan", "Ìpolówó tí ó yọ jáde lójijì"], answer: 1, why: "Ìwé ẹ̀kọ́ àti àwọn ojú-òpó sáyẹ́ǹsì ti ìjọba ṣeé gbẹ́kẹ̀ lé." },
      { objective: "O5", q: "AI àti ìwé ẹ̀kọ́ rẹ kò bára mu. O yẹ kí o:", options: ["Gbẹ́kẹ̀ lé ìwé ẹ̀kọ́ tàbí orísun tí a lè gbẹ́kẹ̀ lé", "Gbẹ́kẹ̀ lé AI", "Ta owó ẹyọ (flip a coin)", "Lo ìdáhùn méjèèjì"], answer: 0, why: "Orísun tí ó ṣeé gbẹ́kẹ̀ lé borí ìdáhùn AI tí a kò ṣàyẹ̀wò." },
      { objective: "O5", q: "Àwọn òtítọ́ wo ló nílò àyẹ̀wò jù?", options: ["Èrò ara rẹ", "Àwàdà tí o béèrè fún", "Ọjọ́, nọ́mbà àti orúkọ", "Ewì tí o béèrè fún"], answer: 2, why: "Òtítọ́ bí ọjọ́ àti nọ́mbà ni AI sábà máa ń ṣì." },
      { objective: "O6", q: "Èwo ni ìsọfúnni àdáni tí o gbọ́dọ̀ pa mọ́ kúrò nínú AI?", options: ["\"Ṣàlàyé fractions (ìdá)\"", "Ọ̀rọ̀ aṣínà rẹ", "\"Jẹ́ kí ó kúrú sí i\"", "Àwọ̀ tí o fẹ́ràn jù"], answer: 1, why: "A kò gbọ́dọ̀ pín ọ̀rọ̀ aṣínà láéláé." },
      { objective: "O6", q: "Deepfake ni:", options: ["Odò ìwẹ̀ tí ó jìn", "Irú eré kan", "Ìwé ìtọ́sọ́nà ẹ̀kọ́", "Àwòrán, ohùn tàbí fídíò ayédèrú tí a fi AI ṣe"], answer: 3, why: "Deepfake jẹ́ ayédèrú tí AI ṣe, tí ó dà bí gidi." },
      { objective: "O6", q: "AI fúnni ní ìdáhùn tí ó dún bí èyí tí kò ṣe déédé sí ẹgbẹ́ àwọn ènìyàn kan. O yẹ kí o:", options: ["Pín in", "Gbà á gbọ́", "Má ṣe lo AI kankan mọ́ láéláé", "Bi í léèrè, nítorí AI lè tún èrò òdì nípa àwọn ẹgbẹ́ kan sọ"], answer: 3, why: "AI lè gbé ojúsàájú láti inú ohun tí ó kẹ́kọ̀ọ́." },
      { objective: "O6", q: "Tí ẹnìkan bá fi AI ṣe ayédèrú rẹ tí ó ń pani lára, ìgbésẹ̀ tó dára jù ni láti:", options: ["Pa á mọ́ ní àṣírí", "Sọ fún àgbàlagbà tí o gbẹ́kẹ̀ lé", "Ṣe òmíì padà fún wọn", "Pín in sí i"], answer: 1, why: "Àgbàlagbà tí o gbẹ́kẹ̀ lé lè ṣèrànwọ́ láti fi ẹjọ́ sùn kí ó sì dá a dúró." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
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
        name: "Ohun tí AI jẹ́",
        objective: "O1",
        notYet: "Àlàyé náà kò sí, kò tọ́, tàbí ó ṣòro jù fún akẹ́kọ̀ọ́ tí ó kéré.",
        meets: "Gbólóhùn méjì tó yé tí ó sọ ohun tí AI jẹ́ àti pé ó lè ṣàṣìṣe.",
        exceeds: "Ó tún sọ bí AI ṣe ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ, ní ọ̀rọ̀ tí ọmọ ọdún mẹ́wàá máa mọ̀."
      },
      {
        name: "AI nínú àwọn app mi",
        objective: "O2",
        notYet: "App tí kò tó mẹ́ta, tàbí kò sí ìlà tí ó sọ ohun tí AI ń ṣe.",
        meets: "App mẹ́ta, ọ̀kọ̀ọ̀kan pẹ̀lú ìlà kan nípa ohun tí AI ń ṣe.",
        exceeds: "Ó tún tọ́ka sí èyí tí ó jẹ́ generative AI."
      },
      {
        name: "Ìbéèrè tó yé",
        objective: "O4",
        notYet: "Prompt náà jẹ́ ọ̀rọ̀ kan tàbí méjì.",
        meets: "Prompt náà sọ ohun tí o fẹ́, díẹ̀ nípa rẹ àti bí o ṣe fẹ́ kí ìdáhùn rí.",
        exceeds: "Ìdáhùn wúlò ní ìgbà àkọ́kọ́, tàbí ìbéèrè àtẹ̀lé kan mú un dára sí i."
      },
      {
        name: "A ṣàyẹ̀wò ìdáhùn",
        objective: "O5",
        notYet: "A lo ìdáhùn náà láìṣàyẹ̀wò.",
        meets: "Ó kéré tán òtítọ́ kan ni a ṣàyẹ̀wò nínú orísun tí a lè gbẹ́kẹ̀ lé, a sì dárúkọ orísun náà.",
        exceeds: "A ṣàyẹ̀wò òtítọ́ méjì nínú orísun méjì, pẹ̀lú àkọsílẹ̀ nípa ohunkóhun tí AI ṣì."
      },
      {
        name: "Láìléwu àti pẹ̀lú àṣẹ",
        objective: "O6",
        notYet: "Àlàyé náà ní ìsọfúnni àdáni, tàbí a lo irinṣẹ́ náà lòdì sí òfin ọjọ́ orí rẹ̀ tàbí òfin ilé-ìwé.",
        meets: "Kò sí ìsọfúnni àdáni, irinṣẹ́ tí a lò sì bá òfin ọjọ́ orí rẹ̀ àti òfin ilé-ìwé mu.",
        exceeds: "Ó fi ìmọ̀ràn kan kún un fún òǹkàwé tí ó kéré nípa wíwà láìléwu pẹ̀lú AI."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Koach Learn míì fún ọ̀dọ́ láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń ṣàyẹ̀wò ìdáhùn AI fún iṣẹ́ ilé-ìwé nínú ìwádìí àtẹ̀lé ọjọ́ 30",
      "Àwọn olùkọ́ tàbí ètò ọ̀dọ́ tí wọ́n ròyìn pé wàhálà òfin tó jẹ mọ́ AI ti dín kù láàárín àwọn akẹ́kọ̀ọ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà ilé-ìwé tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ tí akẹ́kọ̀ọ́ ti dàgbà tó láti lò, tí wọ́n sì gbà á láàyè láti lò, bí irinṣẹ́ tí ilé-ìwé fọwọ́ sí",
      "Ìwé tàbí document fún àlàyé ojú-ewé kan",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣàyẹ̀wò òfin ọjọ́ orí irinṣẹ́ AI èyíkéyìí kí kíláàsì tó bẹ̀rẹ̀, kí o sì lo àkáǹtì tí ilé-ìwé fọwọ́ sí níbi tí wọ́n bá wà.",
      "Pín òfin AI ilé-ìwé rẹ tàbí ètò rẹ ní ìbẹ̀rẹ̀ kí àwọn akẹ́kọ̀ọ́ lè mọ ohun tí a gbà láàyè.",
      "Má ṣe ní kí akẹ́kọ̀ọ́ tẹ ìsọfúnni àdáni tàbí gbé fọ́tò ènìyàn gidi sókè láéláé.",
      "Àwọn akẹ́kọ̀ọ́ tí kò tíì dé ọjọ́ orí tí a fi lélẹ̀ lè ṣe àwọn iṣẹ́ náà lórí ìwé, tàbí kí olùkọ́ fi irinṣẹ́ náà hàn wọ́n.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ pín àlàyé wọn pẹ̀lú akẹ́kọ̀ọ́ tí ó kéré sí wọn tàbí alábàáṣiṣẹ́ kan, kí wọ́n sì fi rubric ṣe àmì rẹ̀."
    ]
  }
};
