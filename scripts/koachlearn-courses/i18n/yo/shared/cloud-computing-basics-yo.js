"use strict";

// Koach Learn course (Yoruba translation of shared/cloud-computing-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "cloud-computing-basics-yo",
  lang: "yo",
  translationOf: "cloud-computing-basics",
  category: "Youth",
  name: "Ìpìlẹ̀ Cloud Computing",
  skills: "Ṣíṣàlàyé ohun tí cloud jẹ́, Mímọ ìyàtọ̀ láàárín SaaS, PaaS àti IaaS, Fífi fáìlì pamọ́ àti mímú wọn bára mu (sync) lórí cloud, Pínpín fáìlì láìléwu, Dídáàbò bo àkọọ́lẹ̀ cloud",
  outcome: "ṣàlàyé ohun tí cloud computing jẹ́ àti oríṣi iṣẹ́ mẹ́ta pàtàkì rẹ̀, lẹ́yìn náà lo ibi ìpamọ́ cloud ọ̀fẹ́ láti fi fáìlì pamọ́, tò wọ́n lẹ́sẹẹsẹ, kí o sì pín wọn láìléwu, pẹ̀lú ìdánilójú-ìgbésẹ̀-méjì (two-step verification) tó ń dáàbò bo àkọọ́lẹ̀ rẹ.",
  about: [
    "Nígbàkúùgbà tí o bá ń wo fídíò lórí ayélujára, tí o fi fọ́tò pamọ́ sí Google Photos tàbí iCloud, tàbí tí o ń ṣiṣẹ́ lórí Google Doc pẹ̀lú ọmọ kíláàsì rẹ, cloud computing ni ò ń lò. Àwọn ilé-iṣẹ́ ń lo ó fún ojú-òpó wẹ́ẹ̀bù, app àti AI, wọ́n sì ń wá ìmọ̀ cloud nínú ọ̀pọ̀ iṣẹ́.",
    "Ẹ̀kọ́ yìí ṣàlàyé ohun tí cloud jẹ́ ní ọ̀rọ̀ tó rọrùn, àwọn oríṣi iṣẹ́ cloud pàtàkì, àti àwọn ilé-iṣẹ́ ńlá tó ń pèsè rẹ̀. Lẹ́yìn náà, o máa lo ibi ìpamọ́ cloud ọ̀fẹ́ láti fi fáìlì pamọ́, tò wọ́n, kí o sì pín wọn láìléwu, bí àwọn ẹgbẹ́ ní ilé-ìwé àti ibi iṣẹ́ ṣe ń ṣe.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ka ẹ̀kọ́ náà, wo àwọn slide, lẹ́yìn náà ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ kúkúrú wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Tí o bá fẹ́ lọ síwájú, ẹ̀kọ́ \"Ìpìlẹ̀ Microsoft Azure\" ń kọ́ni ju èyí lọ."
  ],
  finalTask: "Nínú Google Drive tàbí Microsoft OneDrive: ṣe fódà kan tí a pè ní \"Ìwé Iṣẹ́ Mi\", gbé fáìlì méjì sínú rẹ̀ tàbí ṣe wọ́n níbẹ̀ (fún àpẹẹrẹ résumé àti àkójọ àwọn tó lè jẹ́rìí sí ọ), pín fáìlì kan pẹ̀lú ọ̀rẹ́ tàbí ẹbí gẹ́gẹ́ bí \"wíwò nìkan\" (view-only), wo àwọn tó ní ààyè sí i, lẹ́yìn náà mú ààyè wọn kúrò. Rí i dájú pé ìdánilójú-ìgbésẹ̀-méjì wà ní títan fún àkọọ́lẹ̀ náà. Ní ìparí, kọ gbólóhùn mẹ́ta tó ṣàlàyé cloud, kí o sì dárúkọ àpẹẹrẹ SaaS kan, PaaS kan àti IaaS kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ (ọ̀dọ́langba àti àwọn ọ̀dọ́ àgbà) ní ilé-ìwé, ní ètò ìdánilẹ́kọ̀ọ́ tàbí ní iṣẹ́ àkọ́kọ́ wọn. Wọ́n ń lo app cloud lójoojúmọ́, ṣùgbọ́n wọn kì í sábà ronú nípa bí cloud ṣe ń ṣiṣẹ́ tàbí bí wọ́n ṣe lè ṣètò fáìlì àti pínpín pẹ̀lú èrò.",
    startingPoint: "Wọ́n lè lo smartphone, wo fídíò lórí ayélujára, lo ímeèlì àti app ìbánisọ̀rọ̀, ó sì lè jẹ́ pé wọ́n ní àkọọ́lẹ̀ Google tàbí Microsoft. Díẹ̀ nínú wọn ló ti tò fódà, ṣètò ààyè pínpín, tàbí tan ìdánilójú-ìgbésẹ̀-méjì rí.",
    gap: "Ilé-ìwé, ìkọ́ṣẹ́ àti iṣẹ́ ń retí pé kí ènìyàn lè fi fáìlì pamọ́, tò wọ́n, kí ó sì pín wọn lórí cloud, kí ó sì mọ àwọn ọ̀rọ̀ cloud ìpìlẹ̀ tí a ń lò nínú iṣẹ́ ìmọ̀ ẹ̀rọ. Láìsí ìmọ̀ yìí, àwọn akẹ́kọ̀ọ́ máa ń pàdánù iṣẹ́ wọn, wọ́n máa ń pín fáìlì àdáni jù, wọ́n sì máa ń fi àkọọ́lẹ̀ wọn sílẹ̀ fún jìbìtì phishing àti olè ọ̀rọ̀ aṣínà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 7 sí 8)",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà tí a ń pín ní ilé-ìwé tàbí ilé-ìkàwé; ẹ̀rọ kejì kò pọn dandan",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5 tó bá ilé-ìwé tàbí iṣẹ́ mu",
      "Àṣírí: kò sí nọ́mbà Social Security gidi, ìsọfúnni báńkì tàbí ọ̀rọ̀ aṣínà nínú fáìlì àṣeṣe",
      "Àwọn akẹ́kọ̀ọ́ kan tí kò tíì pé ọmọ ọdún 18 lè nílò àkọọ́lẹ̀ òbí tàbí ti ilé-ìwé láti lo iṣẹ́ Google tàbí Microsoft"
    ],
    prerequisites: "Kò sí. Àwọn tí àkọọ́lẹ̀ ímeèlì ṣì jẹ́ tuntun fún lè kọ́kọ́ ṣe àkọọ́lẹ̀ Google tàbí Microsoft ọ̀fẹ́ pẹ̀lú àgbàlagbà tàbí olùrànlọ́wọ́ ètò náà."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkójọ app ojoojúmọ́ àti àpẹẹrẹ ilé-iṣẹ́ kékeré kan", action: "ṣàlàyé ohun tí cloud computing jẹ́, kí o sì dárúkọ àǹfààní àti ewu pàtàkì rẹ̀", standard: "ní ọ̀rọ̀ ara rẹ, pẹ̀lú ó kéré tán àǹfààní méjì àti ewu kan" },
    { id: "O2", condition: "Tí a bá fún ọ ní iṣẹ́ cloud mẹ́fà", action: "pín ọ̀kọ̀ọ̀kan sí SaaS, PaaS tàbí IaaS, kí o sì sọ ohun tó jẹ́ ojúṣe rẹ nínú ọ̀kọ̀ọ̀kan", standard: "kí o sì gba ó kéré tán 5 nínú 6 ní títọ́" },
    { id: "O3", condition: "Nígbà tí o bá ń lo Google Drive tàbí OneDrive", action: "ṣe fódà kan, fi fáìlì méjì sínú rẹ̀, kí o sì fún wọn ní orúkọ tó ṣe kedere", standard: "láìsí ìrànlọ́wọ́, kí ẹlòmíì lè rí fáìlì kọ̀ọ̀kan nípa orúkọ rẹ̀" },
    { id: "O4", condition: "Tí a bá fún ọ ní fáìlì kan àti ẹni tí o fẹ́ pín in pẹ̀lú", action: "pín fáìlì náà pẹ̀lú ààyè tó kéré jù tí wọ́n nílò, wo àwọn tó ní ààyè, kí o sì mú ààyè kúrò", standard: "láìsí fáìlì kankan tó ṣí sílẹ̀ fún àwọn tí kò nílò rẹ̀" },
    { id: "O5", condition: "Nínú àkọọ́lẹ̀ Google tàbí Microsoft tìrẹ", action: "tan ìdánilójú-ìgbésẹ̀-méjì, wo àwọn ẹ̀rọ tó wọlé sí àkọọ́lẹ̀ rẹ, kí o sì dá ìfiránṣẹ́ phishing mọ̀", standard: "kí o tó parí iṣẹ́ ìkẹyìn" }
  ],
  chapters: [
    {
      name: "Orí 1: Ohun tí cloud jẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cloud ní ọ̀rọ̀ tó rọrùn",
          minutes: 4,
          goal: "Ṣàlàyé ohun tí cloud computing jẹ́ ní ọ̀rọ̀ ara rẹ.",
          text: [
            "\"Cloud\" túmọ̀ sí àwọn kọ̀mpútà tó wà nínú ilé ńlá tí a ń pè ní data center, tí o ń lò lórí íńtánẹ́ẹ̀tì. Dípò kí o pa gbogbo nǹkan mọ́ sórí fóònù tàbí laptop rẹ, fáìlì rẹ, app rẹ àti agbára kọ̀mpútà wà lórí àwọn kọ̀mpútà wọ̀nyẹn, o sì lè dé ọ̀dọ̀ wọn láti orí ẹ̀rọ èyíkéyìí.",
            "Ronú nípa iná mànàmáná. O kì í kọ́ ilé-iṣẹ́ agbára sílé rẹ; o kàn so mọ́ ọn, o sì ń sanwó fún ohun tí o lò. Cloud computing ń ṣiṣẹ́ bákan náà: ilé-iṣẹ́ kan ló ni àwọn kọ̀mpútà, àwọn ènìyàn àti ilé-iṣẹ́ sì ń lo ohun tí wọ́n nílò, nígbà tí wọ́n nílò rẹ̀.",
            "Àpẹẹrẹ ojoojúmọ́: ímeèlì Gmail àti Outlook; Google Drive, OneDrive, iCloud àti Dropbox fún fáìlì; Netflix àti Spotify fún wíwo àti gbígbọ́; àti olùrànlọ́wọ́ AI bí ChatGPT tàbí Copilot, tí wọ́n ń ṣiṣẹ́ lórí kọ̀mpútà cloud."
          ],
          words: [["Cloud computing", "lílo kọ̀mpútà, ibi ìpamọ́ àti software lórí íńtánẹ́ẹ̀tì dípò lórí ẹ̀rọ tìrẹ."], ["Data center", "ilé ńlá tó kún fún kọ̀mpútà tó ń ṣiṣẹ́ fún iṣẹ́ cloud."], ["Server", "kọ̀mpútà alágbára tó ń pèsè iṣẹ́ fún àwọn kọ̀mpútà mìíràn lórí network."]],
          slides: [
            { title: "Ohun tí cloud jẹ́", bullets: ["Kọ̀mpútà nínú data center", "O ń lò wọ́n lórí íńtánẹ́ẹ̀tì", "Láti orí ẹ̀rọ èyíkéyìí"] },
            { title: "Bí iná mànàmáná", bullets: ["O kì í kọ́ ilé-iṣẹ́ agbára", "O so mọ́ ọn, o sì ń sanwó fún ohun tí o lò"] },
            { title: "O ti ń lò ó tẹ́lẹ̀", bullets: ["Gmail, Outlook", "Google Drive, OneDrive, iCloud, Dropbox", "Netflix, Spotify, olùrànlọ́wọ́ AI"] }
          ],
          tryIt: "Kọ app tàbí ojú-òpó wẹ́ẹ̀bù márùn-ún tí o lò lọ́sẹ̀ yìí sílẹ̀. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ \"cloud\" tí nǹkan rẹ bá wà tàbí ń ṣiṣẹ́ lórí kọ̀mpútà ilé-iṣẹ́ náà, kì í ṣe lórí ẹ̀rọ rẹ nìkan.",
          youCanNow: "ṣàlàyé cloud computing ní ọ̀rọ̀ ara rẹ, kí o sì tọ́ka sí àwọn iṣẹ́ cloud tí o ti ń lò tẹ́lẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Níbo ni fáìlì rẹ wà nígbà tí o bá fi wọ́n pamọ́ sí cloud?", options: ["Lórí kọ̀mpútà nínú data center tí o ń dé lórí íńtánẹ́ẹ̀tì", "Nínú memory card fóònù rẹ nìkan", "Lórí disc tí o fi ránṣẹ́ sí ilé-iṣẹ́ náà", "Nínú àtẹ̀jíṣẹ́ (SMS) fóònù rẹ"], answer: 0, why: "Cloud ni àwọn kọ̀mpútà nínú data center tí o ń lò lórí íńtánẹ́ẹ̀tì láti orí ẹ̀rọ èyíkéyìí." },
            { objective: "O1", q: "Ọ̀rẹ́ kan béèrè ìdí tí cloud fi dà bí iná mànàmáná. Kí ni o máa sọ?", options: ["Àwọn méjèèjì ń dúró ní alẹ́", "Àwọn méjèèjì nílò wáyà sí ilé rẹ", "O ń lo ohun tí o nílò láìní àwọn kọ̀mpútà, bí iná láìsí ilé-iṣẹ́ agbára", "Àwọn méjèèjì jẹ́ ọ̀fẹ́ fún gbogbo ènìyàn"], answer: 2, why: "Ẹ̀kọ́ náà fi cloud wé síso mọ́ iná àti sísanwó fún un láìkọ́ ilé-iṣẹ́ agbára." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Ìdí tí àwọn ènìyàn àti ilé-iṣẹ́ fi ń lo cloud",
          minutes: 5,
          goal: "Dárúkọ àǹfààní àti ewu pàtàkì ti cloud.",
          text: [
            "Àǹfààní: o lè dé ọ̀dọ̀ fáìlì rẹ láti orí ẹ̀rọ èyíkéyìí; fóònù tó sọnù kò túmọ̀ sí pé fọ́tò rẹ ti sọnù; ẹgbẹ́ lè ṣiṣẹ́ lórí ìwé kan náà lẹ́ẹ̀kan náà; àwọn ilé-iṣẹ́ sì lè bẹ̀rẹ̀ kékeré kí wọ́n sì dàgbà, kí wọ́n sanwó fún agbára kọ̀mpútà sí i nígbà tí wọ́n bá nílò rẹ̀ nìkan, dípò kí wọ́n ra server olówó ńlá.",
            "Ewu: o nílò íńtánẹ́ẹ̀tì; tí ẹnìkan bá jí ọ̀rọ̀ aṣínà rẹ, ó lè dé ọ̀dọ̀ fáìlì rẹ láti ibikíbi; ètò ọ̀fẹ́ ní ààlà ibi ìpamọ́; ilé-iṣẹ́ kan ló sì ń pa data rẹ mọ́, nítorí náà ó yẹ kí o mọ ètò àṣírí (privacy settings) rẹ̀.",
            "Àwọn ilé-iṣẹ́ cloud ńlá fún iṣẹ́ òwò ni Amazon Web Services (AWS), Microsoft Azure àti Google Cloud. Fún àwọn ènìyàn lásán, Google, Microsoft, Apple àti Dropbox ń pèsè ibi ìpamọ́ cloud ọ̀fẹ́, pẹ̀lú àfikún tí a ń sanwó fún. Wo ojú-ìwé ilé-iṣẹ́ kọ̀ọ̀kan fún iye ibi ìpamọ́ ọ̀fẹ́ lọ́wọ́lọ́wọ́."
          ],
          words: [["Scalability", "agbára láti mú agbára kọ̀mpútà pọ̀ sí i tàbí dín in kù bí a ṣe nílò."], ["Provider (olùpèsè)", "ilé-iṣẹ́ tó ń ṣiṣẹ́ cloud náà."], ["Ààlà ibi ìpamọ́ (storage limit)", "iye data tó pọ̀ jù tí ètò rẹ jẹ́ kí o pa mọ́."]],
          slides: [
            { title: "Àǹfààní", bullets: ["Fáìlì rẹ lórí ẹ̀rọ èyíkéyìí", "Fóònù tó sọnù kò túmọ̀ sí fọ́tò tó sọnù", "Ẹgbẹ́ ń ṣiṣẹ́ lórí fáìlì kan náà", "Ilé-iṣẹ́ ń dàgbà láìra server"] },
            { title: "Ewu", bullets: ["Ó nílò íńtánẹ́ẹ̀tì", "Ọ̀rọ̀ aṣínà tí wọ́n jí ń ṣí gbogbo nǹkan", "Ètò ọ̀fẹ́ ní ààlà"] },
            { title: "Àwọn olùpèsè ńlá", bullets: ["Òwò: AWS, Microsoft Azure, Google Cloud", "Ojoojúmọ́: Google, Microsoft, Apple, Dropbox"] }
          ],
          tryIt: "Ronú nípa ilé-iṣẹ́ kékeré kan tí o mọ̀, bí ilé ìgẹ̀rí, ọkọ̀ oúnjẹ (food truck) tàbí ọ́fíìsì ṣọ́ọ̀ṣì. Kọ ọ̀nà méjì tí cloud lè gbà ràn án lọ́wọ́ àti ewu kan tí ó yẹ kí ó múra sílẹ̀ fún.",
          youCanNow: "dárúkọ àǹfààní àti ewu pàtàkì ti cloud àti àwọn olùpèsè cloud ńlá.",
          quickCheck: [
            { objective: "O1", q: "Èwo ni àǹfààní fífi fọ́tò rẹ pamọ́ sí cloud?", options: ["O kò nílò íńtánẹ́ẹ̀tì láéláé", "Fóònù tó sọnù kò túmọ̀ sí fọ́tò tó sọnù", "Ètò ọ̀fẹ́ kò ní ààlà ibi ìpamọ́", "Kò sí ilé-iṣẹ́ kankan tó ń pa data rẹ mọ́"], answer: 1, why: "Ẹ̀dà tó wà lórí cloud wà láìléwu lórí kọ̀mpútà olùpèsè, kódà tí fóònù bá sọnù." },
            { objective: "O1", q: "Ẹni tó ni ọkọ̀ oúnjẹ fẹ́ gbé àkọsílẹ̀ rẹ̀ lọ sí cloud. Ewu wo ni ó yẹ kí ó kọ́kọ́ múra sílẹ̀ fún?", options: ["Cloud ń mú fáìlì tóbi sí i", "Cloud ń ṣiṣẹ́ lórí ẹ̀rọ kan nìkan", "A kò lè pín fáìlì cloud pẹ̀lú òṣìṣẹ́", "Ẹni tó ní ọ̀rọ̀ aṣínà tí wọ́n jí lè dé ọ̀dọ̀ fáìlì náà láti ibikíbi"], answer: 3, why: "Ọ̀rọ̀ aṣínà tí wọ́n jí ń ṣí fáìlì cloud láti ibikíbi, nítorí náà ààbò àkọọ́lẹ̀ tó lágbára ṣe pàtàkì." }
          ]
        },
        {
          objectives: ["O2"],
          title: "SaaS, PaaS àti IaaS: oríṣi iṣẹ́ mẹ́ta",
          minutes: 5,
          goal: "Pín àwọn iṣẹ́ cloud sí SaaS, PaaS àti IaaS.",
          text: [
            "Iṣẹ́ cloud pín sí oríṣi mẹ́ta pàtàkì, ní ìbámu pẹ̀lú iye iṣẹ́ tí olùpèsè ń ṣe fún ọ. Lo àpẹẹrẹ pizza: o lè ra pizza tó ti parí, yá ilé ìdáná pẹ̀lú èròjà, tàbí yá ààrò nìkan.",
            "SaaS (Software as a Service): software tó ti parí tí o ń lò nínú browser tàbí app, bí Gmail, Google Docs, Microsoft 365 tàbí Zoom. Olùpèsè ló ń ṣe gbogbo nǹkan. PaaS (Platform as a Service): pèpéle tó ti ṣe tán níbi tí àwọn olùṣe app (developer) ti ń kọ́ àti ṣiṣẹ́ app tiwọn láìtọ́jú server, bí Google App Engine tàbí Azure App Service. IaaS (Infrastructure as a Service): kọ̀mpútà ayélujára (virtual), ibi ìpamọ́ àti network tí o ń ṣètò fúnra rẹ, bí Amazon EC2 tàbí Azure Virtual Machines.",
            "Nínú gbogbo oríṣi, ààbò jẹ́ ojúṣe àjọpín. Olùpèsè ń dáàbò bo data center rẹ̀; ìwọ ni ojúṣe ọ̀rọ̀ aṣínà rẹ, àwọn tí o ń pín nǹkan pẹ̀lú, àti ohun tí o gbé sókè (upload) máa ń jẹ́ nígbà gbogbo."
          ],
          steps: ["Béèrè: ṣé software tó ti parí ni mo kàn ń lò? SaaS nìyẹn.", "Ṣé mo ń kọ́ app tèmi lórí pèpéle tó ti ṣe tán? PaaS nìyẹn.", "Ṣé mo ń ṣètò kọ̀mpútà virtual tèmi? IaaS nìyẹn.", "Nínú àwọn mẹ́tẹ̀ẹ̀ta, dáàbò bo àkọọ́lẹ̀ àti data tìrẹ."],
          words: [["SaaS", "Software as a Service: software tó ti parí tí o ń lò lórí íńtánẹ́ẹ̀tì."], ["PaaS", "Platform as a Service: pèpéle tó ti ṣe tán fún kíkọ́ àti ṣíṣiṣẹ́ app tìrẹ."], ["IaaS", "Infrastructure as a Service: kọ̀mpútà virtual, ibi ìpamọ́ àti network tí o ń yá tí o sì ń tọ́jú."], ["Ojúṣe àjọpín (shared responsibility)", "olùpèsè ń dáàbò bo cloud; ìwọ ń dáàbò bo àkọọ́lẹ̀ àti data rẹ nínú rẹ̀."]],
          slides: [
            { title: "Oríṣi iṣẹ́ mẹ́ta", bullets: ["SaaS: pizza tó ti parí", "PaaS: ilé ìdáná tí a yá pẹ̀lú èròjà", "IaaS: ààrò nìkan"] },
            { title: "Àpẹẹrẹ", bullets: ["SaaS: Gmail, Google Docs, Microsoft 365, Zoom", "PaaS: Google App Engine, Azure App Service", "IaaS: Amazon EC2, Azure Virtual Machines"] },
            { title: "Ojúṣe àjọpín", bullets: ["Olùpèsè: ń dáàbò bo data center", "Ìwọ: ọ̀rọ̀ aṣínà rẹ, pínpín àti ohun tí o gbé sókè"] }
          ],
          tryIt: "Pín àwọn wọ̀nyí sí SaaS, PaaS tàbí IaaS: Gmail, Azure Virtual Machines, Google App Engine, Zoom, Amazon EC2, Microsoft 365. Fi ìdáhùn rẹ wé àwọn àpẹẹrẹ inú ẹ̀kọ́ yìí.",
          youCanNow: "pín àwọn iṣẹ́ cloud sí SaaS, PaaS àti IaaS, kí o sì ṣàlàyé ojúṣe àjọpín.",
          quickCheck: [
            { objective: "O2", q: "Google App Engine ń jẹ́ kí àwọn developer ṣiṣẹ́ app tiwọn láìtọ́jú server. Oríṣi wo ni?", options: ["SaaS", "IaaS", "PaaS", "Kò sí nínú oríṣi mẹ́tẹ̀ẹ̀ta"], answer: 2, why: "Pèpéle tó ti ṣe tán níbi tí developer ti ń kọ́ àti ṣiṣẹ́ app ni Platform as a Service." },
            { objective: "O2", q: "Ilé-ìwé rẹ ń lo Microsoft 365, tó jẹ́ SaaS. Kí ló ṣì jẹ́ iṣẹ́ rẹ?", options: ["Dídáàbò bo ọ̀rọ̀ aṣínà rẹ àti yíyan àwọn tí o ń pín nǹkan pẹ̀lú", "Ṣíṣọ́ ilé data center", "Títún server olùpèsè ṣe", "Kò sí; SaaS túmọ̀ sí pé olùpèsè ń ṣe gbogbo nǹkan"], answer: 0, why: "Ààbò jẹ́ àjọpín: olùpèsè ń ṣiṣẹ́ iṣẹ́ náà, ṣùgbọ́n ọ̀rọ̀ aṣínà rẹ àti pínpín máa ń jẹ́ tìrẹ nígbà gbogbo." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ohun tí cloud jẹ́",
        questions: [
          { objective: "O1", q: "Kí ni \"cloud\" túmọ̀ sí?", options: ["Ojú ọjọ́", "Kọ̀mpútà nínú data center tí o ń lò lórí íńtánẹ́ẹ̀tì", "Oríṣi àpò fóònù kan", "Hard drive laptop rẹ nìkan"], answer: 1, why: "Iṣẹ́ cloud ń ṣiṣẹ́ lórí kọ̀mpútà tó jìnnà tí a ń dé lórí íńtánẹ́ẹ̀tì." },
          { objective: "O1", q: "Èwo ni ewu cloud?", options: ["O lè dé ọ̀dọ̀ fáìlì láti orí ẹ̀rọ èyíkéyìí", "Ẹgbẹ́ lè pín ìwé", "Ọ̀rọ̀ aṣínà tí wọ́n jí lè ṣí fáìlì rẹ láti ibikíbi", "Fóònù tó sọnù kò túmọ̀ sí fọ́tò tó sọnù"], answer: 2, why: "Ààbò àkọọ́lẹ̀ ṣe pàtàkì nítorí pé a lè dé ọ̀dọ̀ cloud láti ibikíbi." },
          { objective: "O2", q: "Gmail àti Zoom jẹ́ àpẹẹrẹ:", options: ["IaaS", "PaaS", "Data center", "SaaS"], answer: 3, why: "Software tó ti parí ni wọ́n, tí a ń lò lórí íńtánẹ́ẹ̀tì." },
          { objective: "O2", q: "Ilé-iṣẹ́ kan yá kọ̀mpútà virtual, ó sì ṣètò wọn fúnra rẹ̀. Èyí ni:", options: ["IaaS", "SaaS", "Browser", "Ọ̀rọ̀ aṣínà"], answer: 0, why: "Yíyá kọ̀mpútà virtual tí o ń tọ́jú ni Infrastructure as a Service." },
          { objective: "O2", q: "Lábẹ́ ojúṣe àjọpín, ta ló ń dáàbò bo ọ̀rọ̀ aṣínà rẹ?", options: ["Ẹ̀ṣọ́ data center", "Ìwọ", "Íńtánẹ́ẹ̀tì", "Kò sí ẹnìkan"], answer: 1, why: "Àkọọ́lẹ̀ rẹ àti ohun tí o ń pín máa ń jẹ́ iṣẹ́ rẹ nígbà gbogbo." }
        ]
      }
    },
    {
      name: "Orí 2: Lílo cloud fúnra rẹ",
      lessons: [
        {
          objectives: ["O3"],
          title: "Fífi fáìlì pamọ́ àti títò wọ́n nínú ibi ìpamọ́ cloud",
          minutes: 5,
          goal: "Gbé fáìlì sókè, ṣe fáìlì, kí o sì tò wọ́n nínú Google Drive tàbí OneDrive.",
          text: [
            "Google Drive wà pẹ̀lú àkọọ́lẹ̀ Google ọ̀fẹ́, OneDrive sì wà pẹ̀lú àkọọ́lẹ̀ Microsoft ọ̀fẹ́. Àwọn méjèèjì ń ṣiṣẹ́ nínú browser (drive.google.com tàbí onedrive.com) àti gẹ́gẹ́ bí app fóònù láti ilé ìtajà app tòótọ́.",
            "Lo bọ́tìnnì New láti ṣe fódà tàbí ìwé, tàbí Upload láti fi fáìlì kún un láti orí ẹ̀rọ rẹ. Fún fáìlì ní orúkọ tó ṣe kedere, bí \"Resume - Jordan Lee - 2026\", kí o lè rí wọn lẹ́yìn náà. Fi àwọn fáìlì tó jọra sínú fódà.",
            "Sync ń mú kí fáìlì kan jẹ́ bákan náà lórí gbogbo ẹ̀rọ: yí i padà lórí laptop rẹ, ẹ̀dà tuntun sì máa yọ lórí fóònù rẹ. Ọ̀pọ̀ iṣẹ́ cloud tún ń pa àwọn ẹ̀dà àtijọ́ mọ́, kí o lè padà sí wọn tí o bá ṣe àṣìṣe."
          ],
          steps: ["Wọlé ní drive.google.com tàbí onedrive.com (tàbí ṣí app náà).", "Tẹ New kí o sì yan Folder; fún un ní orúkọ tó ṣe kedere.", "Ṣí fódà náà; tẹ New láti ṣe ìwé, tàbí Upload láti fi fáìlì kún un.", "Yí orúkọ fáìlì padà sí orúkọ tó ṣe kedere.", "Ṣí fáìlì kan náà lórí ẹ̀rọ mìíràn láti rí i bí ó ṣe ń sync."],
          words: [["Upload (gbígbé sókè)", "dídà fáìlì láti orí ẹ̀rọ rẹ sí cloud."], ["Sync", "mímú kí fáìlì jẹ́ bákan náà lórí gbogbo ẹ̀rọ rẹ fúnra rẹ̀."], ["Version history (ìtàn ẹ̀dà)", "àwọn ẹ̀dà àtijọ́ fáìlì tí o lè padà sí."]],
          slides: [
            { title: "Ibi ìpamọ́ cloud ọ̀fẹ́", bullets: ["Google Drive pẹ̀lú àkọọ́lẹ̀ Google", "OneDrive pẹ̀lú àkọọ́lẹ̀ Microsoft", "Browser tàbí app tòótọ́"] },
            { title: "Ṣètò", bullets: ["New: fódà tàbí ìwé", "Upload: fi fáìlì kún un", "Orúkọ tó ṣe kedere àti fódà"] },
            { title: "Sync àti ẹ̀dà", bullets: ["Fáìlì kan náà lórí gbogbo ẹ̀rọ", "Padà sí ẹ̀dà àtijọ́ tí ó bá yẹ"] }
          ],
          tryIt: "Nínú Google Drive tàbí OneDrive, ṣe fódà kan tí a pè ní \"Ìwé Iṣẹ́ Mi\". Ṣe fáìlì méjì tàbí gbé wọn sókè sínú rẹ̀, kí o sì fún wọn ní orúkọ tó ṣe kedere. Lẹ́yìn náà ṣí fódà náà lórí ẹ̀rọ kejì tí o bá ní ọ̀kan.",
          youCanNow: "gbé fáìlì sókè, ṣe wọ́n, fún wọn lórúkọ, kí o sì tò wọ́n nínú ibi ìpamọ́ cloud, kí o sì mọ̀ pé wọ́n ń sync lórí gbogbo ẹ̀rọ.",
          quickCheck: [
            { objective: "O3", q: "Kí ni \"sync\" ń ṣe fún fáìlì kan nínú OneDrive?", options: ["Ó ń pa ẹ̀dà àtijọ́ rẹ́ ní alẹ́ kọ̀ọ̀kan", "Ó ń jẹ́ kí ẹ̀dà kan náà wà lórí gbogbo ẹ̀rọ rẹ", "Ó ń fi fáìlì ránṣẹ́ sí gbogbo ènìyàn nínú contacts rẹ", "Ó ń sọ fáìlì di PDF"], answer: 1, why: "Sync ń mú kí fáìlì jẹ́ bákan náà lórí gbogbo ẹ̀rọ tí o ń lò." },
            { objective: "O3", q: "O fi lẹ́tà ìbéèrè iṣẹ́ (cover letter) pamọ́ gẹ́gẹ́ bí \"doc1\". Kí ni o yẹ kí o ṣe kí o lè rí i lẹ́yìn náà?", options: ["Fi sílẹ̀ bẹ́ẹ̀; ìwádìí máa mọ̀ ọ́n", "Ṣe fódà tuntun fún fáìlì kọ̀ọ̀kan", "Tún un gbé sókè pẹ̀lú orúkọ kan náà", "Yí orúkọ rẹ̀ padà kí ó ṣe kedere, bí \"Cover Letter - Jordan Lee - 2026\""], answer: 3, why: "Orúkọ tó ṣe kedere ń jẹ́ kí ó rọrùn láti rí fáìlì lẹ́yìn náà." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Pínpín fáìlì láìléwu",
          minutes: 5,
          goal: "Pín fáìlì pẹ̀lú ẹni tó tọ́ àti ìpele ààyè tó tọ́, kí o sì mú ààyè kúrò.",
          text: [
            "Ó rọrùn láti pín fáìlì cloud; èyí wúlò, ṣùgbọ́n ó léwu. Tẹ Share lórí fáìlì kan kí o sì fi àdírẹ́sì ímeèlì ẹnìkan kún un, tàbí da link kan kọ. Yan ohun tí wọ́n lè ṣe: wíwò (view), ìsọ̀rọ̀ (comment) tàbí àtúnṣe (edit).",
            "Fún wọn ní ààyè tó kéré jù tí wọ́n nílò. Résumé fún agbanisíṣẹ́: wíwò nìkan. Iṣẹ́ ẹgbẹ́: àtúnṣe fún ẹgbẹ́ rẹ. Ṣọ́ra pẹ̀lú link tí a ṣètò pé \"anyone with the link\" (ẹnikẹ́ni tó ní link) lè ṣí fáìlì náà; ẹnikẹ́ni tó bá rí link náà lè wò ó, kódà tí wọ́n bá fi ránṣẹ́ sí ẹlòmíì.",
            "Wo àwọn tó ní ààyè láti ojú-iboju Share tàbí Manage access, kí o sì mú àwọn ènìyàn kúrò nígbà tí iṣẹ́ kan bá parí. Má ṣe fi fáìlì tó ní nọ́mbà Social Security, ìsọfúnni báńkì tàbí ọ̀rọ̀ aṣínà sínú fódà tí a ń pín láéláé."
          ],
          steps: ["Yan fáìlì náà kí o sì tẹ Share.", "Fi ímeèlì ẹni náà kún un, tàbí da link kan kọ.", "Yan View, Comment tàbí Edit; mú èyí tó kéré jù tí wọ́n nílò.", "Yẹra fún \"anyone with the link\" fún fáìlì àdáni.", "Lẹ́yìn náà, ṣí Share tàbí Manage access kí o sì mú àwọn tí kò nílò rẹ̀ mọ́ kúrò."],
          words: [["Ìpele ààyè (permission level)", "ohun tí ẹnìkan lè ṣe pẹ̀lú fáìlì rẹ: wíwò, ìsọ̀rọ̀ tàbí àtúnṣe."], ["Ààyè tó kéré jù (least access)", "fífún àwọn ènìyàn ní ààyè tí wọ́n nílò gan-an nìkan."]],
          slides: [
            { title: "Bí a ṣe ń pín", bullets: ["Tẹ Share", "Fi ímeèlì kún un tàbí da link kọ", "Yan View, Comment tàbí Edit"] },
            { title: "Ààyè tó kéré jù", bullets: ["Résumé fún agbanisíṣẹ́: wíwò nìkan", "Iṣẹ́ ẹgbẹ́: àtúnṣe fún ẹgbẹ́", "Ṣọ́ra pẹ̀lú \"anyone with the link\""] },
            { title: "Ṣe àfọ̀mọ́", bullets: ["Wo Manage access", "Mú àwọn ènìyàn kúrò nígbà tí iṣẹ́ bá parí", "Kò sí nọ́mbà àdáni nínú fódà tí a ń pín"] }
          ],
          tryIt: "Pín fáìlì kan láti inú fódà \"Ìwé Iṣẹ́ Mi\" rẹ pẹ̀lú ọ̀rẹ́ tàbí ẹbí gẹ́gẹ́ bí wíwò nìkan. Ní kí wọ́n ṣí i. Lẹ́yìn náà ṣí Manage access kí o sì mú wọn kúrò.",
          youCanNow: "pín fáìlì cloud pẹ̀lú ìpele ààyè tó tọ́, kí o sì mú ààyè kúrò nígbà tí kò bá nílò mọ́.",
          quickCheck: [
            { objective: "O4", q: "Ètò pínpín wo ló ń fún ni ní ààyè tó kéré jù?", options: ["Edit", "Comment", "View", "Owner"], answer: 2, why: "View ń jẹ́ kí àwọn ènìyàn ṣí fáìlì ṣùgbọ́n wọn kò lè yí i padà; òun ni ààyè tó kéré jù." },
            { objective: "O4", q: "Iṣẹ́ ẹgbẹ́ yín ti parí, ọmọ kíláàsì mẹ́rin sì ṣì ní ààyè àtúnṣe. Kí ni o máa ṣe?", options: ["Ṣí Manage access kí o sì mú àwọn tí kò nílò rẹ̀ mọ́ kúrò", "Yí link náà padà sí \"anyone with the link\"", "Pa gbogbo àkọọ́lẹ̀ rẹ rẹ́", "Fi sílẹ̀ bẹ́ẹ̀ bóyá wọ́n máa nílò rẹ̀ lọ́jọ́ kan"], answer: 0, why: "Mú ààyè kúrò nígbà tí iṣẹ́ bá parí, kí àwọn tó nílò fáìlì náà nìkan lè dé ọ̀dọ̀ rẹ̀." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídáàbò bo àkọọ́lẹ̀ cloud rẹ",
          minutes: 5,
          goal: "Tan ìdánilójú-ìgbésẹ̀-méjì kí o sì ṣàyẹ̀wò ààbò àkọọ́lẹ̀ rẹ.",
          text: [
            "Àkọọ́lẹ̀ cloud rẹ ní fáìlì, ímeèlì àti fọ́tò rẹ nínú, nítorí náà àwọn olè ń dojú kọ ọ́. Ìgbésẹ̀ tó ṣe pàtàkì jù ni ìdánilójú-ìgbésẹ̀-méjì (tí a tún ń pè ní two-factor tàbí multi-factor authentication): lẹ́yìn ọ̀rọ̀ aṣínà rẹ, o tún máa jẹ́rìí pẹ̀lú fóònù rẹ. Olè tó ní ọ̀rọ̀ aṣínà rẹ nìkan kò lè wọlé.",
            "Lo ọ̀rọ̀ aṣínà gígùn tí kò jọ èyíkéyìí mìíràn, tí ó dára jù kí o pa mọ́ sínú password manager. Google àti Microsoft méjèèjì ní ojú-ìwé àyẹ̀wò ààbò (security check-up) nínú ètò àkọọ́lẹ̀ rẹ, tó ń fi àwọn ẹ̀rọ tó wọlé, ìgbòkègbodò àìpẹ́ yìí àti ọ̀nà ìgbàpadà (recovery) hàn.",
            "Ṣọ́ra fún phishing: ímeèlì irọ́ tó ń sọ pé \"ibi ìpamọ́ rẹ ti kún\" tàbí \"ẹnìkan pín fáìlì pẹ̀lú rẹ\", tó ń mú ọ lọ sí ojú-ìwé wíwọlé irọ́. Lọ sí drive.google.com tàbí onedrive.com fúnra rẹ dípò kí o tẹ link. Rántí ojúṣe àjọpín: olùpèsè ń dáàbò bo data center rẹ̀; ìwọ ń dáàbò bo àkọọ́lẹ̀ rẹ."
          ],
          steps: ["Ṣí ètò ààbò àkọọ́lẹ̀ Google tàbí Microsoft rẹ.", "Tan ìdánilójú-ìgbésẹ̀-méjì.", "Rí i dájú pé fóònù àti ímeèlì ìgbàpadà tọ́.", "Wo àwọn ẹ̀rọ tó wọlé, kí o sì mú èyíkéyìí tí o kò mọ̀ kúrò.", "Lọ sí ojú-òpó cloud fúnra rẹ dípò kí o tẹ link inú ímeèlì."],
          words: [["Ìdánilójú-ìgbésẹ̀-méjì (two-step verification)", "àyẹ̀wò kejì, bí kóòdù tàbí ìfọwọ́kàn lórí fóònù rẹ, lẹ́yìn ọ̀rọ̀ aṣínà rẹ."], ["Password manager", "app tó ń ṣe ọ̀rọ̀ aṣínà tó lágbára tí ó sì ń pa wọ́n mọ́ fún ọ."], ["Phishing", "ìfiránṣẹ́ irọ́ tó ń gbìyànjú láti tàn ọ́ kí o fún wọn ní ọ̀rọ̀ aṣínà rẹ."]],
          slides: [
            { title: "Àwọn olè ń dojú kọ àkọọ́lẹ̀ rẹ", bullets: ["Ó ní fáìlì, ímeèlì àti fọ́tò nínú", "Tan ìdánilójú-ìgbésẹ̀-méjì"] },
            { title: "Àyẹ̀wò ààbò", bullets: ["Ọ̀rọ̀ aṣínà gígùn tí kò jọ òmíì", "Fóònù àti ímeèlì ìgbàpadà tó tọ́", "Mú àwọn ẹ̀rọ tí o kò mọ̀ kúrò"] },
            { title: "Ṣọ́ra fún phishing", bullets: ["\"Ibi ìpamọ́ rẹ ti kún\"", "\"Ẹnìkan pín fáìlì pẹ̀lú rẹ\"", "Lọ sí ojú-òpó náà fúnra rẹ"] }
          ],
          tryIt: "Àṣeṣe fún iṣẹ́ ìkẹyìn: ṣí ètò ààbò àkọọ́lẹ̀ Google tàbí Microsoft rẹ, tan ìdánilójú-ìgbésẹ̀-méjì, kí o sì wo àwọn ẹ̀rọ tó wọlé. Lẹ́yìn náà parí iṣẹ́ ìkẹyìn pẹ̀lú fódà \"Ìwé Iṣẹ́ Mi\" rẹ.",
          youCanNow: "dáàbò bo àkọọ́lẹ̀ cloud rẹ pẹ̀lú ìdánilójú-ìgbésẹ̀-méjì, àyẹ̀wò ààbò àti ìṣọ́ra fún phishing.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ìdánilójú-ìgbésẹ̀-méjì?", options: ["Títẹ ọ̀rọ̀ aṣínà rẹ lẹ́ẹ̀mejì", "Níní àkọọ́lẹ̀ ímeèlì méjì ọ̀tọ̀ọ̀tọ̀", "Fífi ọ̀rọ̀ aṣínà rẹ pamọ́ sí ibi méjì", "Àyẹ̀wò kejì, tó sábà máa ń wà lórí fóònù rẹ, lẹ́yìn ọ̀rọ̀ aṣínà rẹ"], answer: 3, why: "Lẹ́yìn ọ̀rọ̀ aṣínà, o tún ń jẹ́rìí pẹ̀lú fóònù rẹ, nítorí náà olè tó ní ọ̀rọ̀ aṣínà nìkan kò lè wọlé." },
            { objective: "O5", q: "O rí fóònù kan tí o kò mọ̀ nínú àwọn ẹ̀rọ tó wọlé sí àkọọ́lẹ̀ rẹ. Kí ni o máa ṣe?", options: ["Fojú fò ó; ó ṣeé ṣe kí ó dára", "Mú un kúrò kí o sì yí ọ̀rọ̀ aṣínà rẹ padà", "Pín ọ̀rọ̀ aṣínà rẹ pẹ̀lú rẹ̀", "Pa ìdánilójú-ìgbésẹ̀-méjì"], answer: 1, why: "Mímú àwọn ẹ̀rọ tí o kò mọ̀ kúrò nígbà àyẹ̀wò ààbò ń jẹ́ kí àjèjì má wọ àkọọ́lẹ̀ rẹ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lílo cloud fúnra rẹ",
        questions: [
          { objective: "O3", q: "Kí ni \"sync\" túmọ̀ sí?", options: ["Pa fáìlì rẹ́", "Mú kí fáìlì jẹ́ bákan náà lórí gbogbo ẹ̀rọ rẹ", "Tẹ fáìlì jáde (print)", "Pín fáìlì pẹ̀lú àjèjì"], answer: 1, why: "Sync ń ṣe àtúnṣe fáìlì níbi gbogbo tí o ti wọlé." },
          { objective: "O4", q: "O pín résumé rẹ pẹ̀lú agbanisíṣẹ́. Ààyè wo ló dára jù?", options: ["Edit", "Owner", "Wíwò nìkan (view only)", "Ẹnikẹ́ni tó ní link lè ṣe àtúnṣe"], answer: 2, why: "Fún wọn ní ààyè tó kéré jù tí wọ́n nílò; kíkà nìkan ni wọ́n nílò." },
          { objective: "O4", q: "Iṣẹ́ ẹgbẹ́ kan parí ní oṣù tó kọjá. Kí ni o yẹ kí o ṣe pẹ̀lú fódà tí ẹ pín?", options: ["Mú àwọn tí kò nílò ààyè mọ́ kúrò", "Sọ ọ́ di gbangba fún gbogbo ènìyàn", "Fi àwọn ènìyàn sí i kún un", "Pín link náà sórí ẹ̀rọ ayélujára ìbánisọ̀rọ̀ (social media)"], answer: 0, why: "Mímú ààyè àtijọ́ kúrò ń pa fáìlì rẹ mọ́ ní àṣírí." },
          { objective: "O5", q: "Ímeèlì kan sọ pé \"Ibi ìpamọ́ rẹ ti kún, wọlé síbí.\" Kí ni o máa ṣe?", options: ["Tẹ ẹ́ kí o sì wọlé", "Fi ọ̀rọ̀ aṣínà rẹ dá a lóhùn", "Fi ránṣẹ́ sí àwọn ọ̀rẹ́", "Lọ sí drive.google.com tàbí onedrive.com fúnra rẹ"], answer: 3, why: "Èyí lè jẹ́ phishing; lọ sí ojú-òpó gidi náà fúnra rẹ." },
          { objective: "O5", q: "Kí ni ìgbésẹ̀ tó ṣe pàtàkì jù láti dáàbò bo àkọọ́lẹ̀ cloud?", options: ["Ọ̀rọ̀ aṣínà kúkúrú", "Ìdánilójú-ìgbésẹ̀-méjì", "Pínpín ọ̀rọ̀ aṣínà rẹ pẹ̀lú ọ̀rẹ́", "Pípa sync"], answer: 1, why: "Olè tó ní ọ̀rọ̀ aṣínà rẹ nìkan kò ní lè wọlé." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Cloud Computing",
    questions: [
      { objective: "O1", q: "Data center ni:", options: ["Ilé tó kún fún kọ̀mpútà tó ń ṣiṣẹ́ fún iṣẹ́ cloud", "Ṣọ́ọ̀bù fóònù", "Yàrá kọ̀mpútà ilé-ìwé", "Oríṣi app kan"], answer: 0, why: "Iṣẹ́ cloud ń ṣiṣẹ́ nínú data center." },
      { objective: "O1", q: "Cloud computing dà bí iná mànàmáná nítorí pé:", options: ["Ó jẹ́ ọ̀fẹ́ nígbà gbogbo", "O ń lo ohun tí o nílò láìní ilé-iṣẹ́ agbára", "Ní alẹ́ nìkan ló ń ṣiṣẹ́", "Kò nílò íńtánẹ́ẹ̀tì"], answer: 1, why: "O ń lo ohun tí o nílò, o sì ń sanwó fún un, bí iṣẹ́ àwùjọ (utility)." },
      { objective: "O1", q: "Èwo ni iṣẹ́ cloud tí o lè máa lò lójoojúmọ́?", options: ["Ìwé àkọsílẹ̀ onípépà", "Ẹ̀rọ ìṣirò tí kò ní íńtánẹ́ẹ̀tì", "Google Drive", "Àtùpà orí tábìlì"], answer: 2, why: "Google Drive ń pa fáìlì mọ́ sórí kọ̀mpútà cloud." },
      { objective: "O1", q: "Àǹfààní cloud fún ilé-iṣẹ́ ni:", options: ["O gbọ́dọ̀ kọ́kọ́ ra server olówó ńlá", "Kò nílò íńtánẹ́ẹ̀tì láéláé", "Kò sí ìdí fún ọ̀rọ̀ aṣínà", "O lè dàgbà kí o sì sanwó fún agbára kọ̀mpútà sí i nígbà tí o bá nílò rẹ̀ nìkan"], answer: 3, why: "A ń pe èyí ní scalability." },
      { objective: "O1", q: "Èwo ni olùpèsè cloud ńlá fún ilé-iṣẹ́?", options: ["Microsoft Azure", "Ilé búrẹ́dì àdúgbò", "Orúkọ ilé-iṣẹ́ printer kan", "Browser wẹ́ẹ̀bù kan"], answer: 0, why: "AWS, Azure àti Google Cloud ni ó tóbi jù." },
      { objective: "O1", q: "Èwo ni ewu gidi nínú lílo cloud?", options: ["Fáìlì lórí ẹ̀rọ èyíkéyìí", "Ẹgbẹ́ tó ń pín ìwé", "Níní ìdí fún íńtánẹ́ẹ̀tì", "Ẹ̀dà ìpamọ́ (backup) aládàáṣe"], answer: 2, why: "Láìsí íńtánẹ́ẹ̀tì, o lè má dé ọ̀dọ̀ fáìlì rẹ." },
      { objective: "O2", q: "SaaS dúró fún:", options: ["Storage as a Server", "Software as a Service", "Security and a System", "Sync and a Screen"], answer: 1, why: "SaaS ni software tó ti parí tí a ń lò lórí íńtánẹ́ẹ̀tì." },
      { objective: "O2", q: "Microsoft 365 jẹ́ àpẹẹrẹ:", options: ["IaaS", "PaaS", "SaaS", "Data center"], answer: 2, why: "Software tó ti parí ni, tí o ń lò lórí ayélujára." },
      { objective: "O2", q: "Developer kan ń ṣiṣẹ́ app rẹ̀ lórí Azure App Service láìtọ́jú server. Èyí ni:", options: ["SaaS", "PaaS", "IaaS", "Password manager"], answer: 1, why: "Pèpéle tó ti ṣe tán fún app tìrẹ ni PaaS." },
      { objective: "O2", q: "Kọ̀mpútà virtual Amazon EC2 jẹ́ àpẹẹrẹ:", options: ["SaaS", "PaaS", "Browser", "IaaS"], answer: 3, why: "Yíyá kọ̀mpútà virtual tí o ń tọ́jú ni IaaS." },
      { objective: "O2", q: "Lábẹ́ ojúṣe àjọpín, olùpèsè ń dáàbò bo:", options: ["Data center rẹ̀", "Ọ̀rọ̀ aṣínà rẹ", "Àwọn tí o ń pín fáìlì pẹ̀lú", "Ohun tí o yàn láti gbé sókè"], answer: 0, why: "Ìwọ ṣì ń dáàbò bo àkọọ́lẹ̀ àti data tìrẹ." },
      { objective: "O3", q: "Orúkọ fáìlì wo ló ṣe kedere jù?", options: ["\"doc1\"", "\"stuff\"", "\"Resume - Jordan Lee - 2026\"", "\"new new final\""], answer: 2, why: "Orúkọ tó ṣe kedere ń jẹ́ kí ó rọrùn láti rí fáìlì." },
      { objective: "O3", q: "Láti fi fáìlì kún cloud láti orí ẹ̀rọ rẹ, o máa:", options: ["Pa á rẹ́", "Gbé e sókè (upload)", "Tẹ̀ ẹ́ jáde", "Fi ímeèlì rẹ̀ ránṣẹ́ sí àjèjì"], answer: 1, why: "Gbígbé sókè ń da fáìlì náà sí ibi ìpamọ́ cloud." },
      { objective: "O3", q: "Version history ń jẹ́ kí o:", options: ["Padà sí ẹ̀dà àtijọ́ fáìlì kan", "Wo fáìlì àwọn ẹlòmíì", "Gba ibi ìpamọ́ ọ̀fẹ́ sí i", "Yí ọ̀rọ̀ aṣínà rẹ padà"], answer: 0, why: "Ó ń pa àwọn ẹ̀dà àtijọ́ tí a ti fi pamọ́ mọ́." },
      { objective: "O4", q: "Pínpín \"anyone with the link\" túmọ̀ sí:", options: ["Ìwọ nìkan lo lè ṣí i", "Àwọn tó wà nínú contacts rẹ nìkan ló lè ṣí i", "Kò sí ẹni tó lè ṣí i", "Ẹnikẹ́ni tó bá rí link náà lè ṣí i, kódà tí wọ́n bá fi ránṣẹ́ sí ẹlòmíì"], answer: 3, why: "Link lè rìn jìnnà ju bí o ṣe fẹ́ lọ." },
      { objective: "O4", q: "Èrò ààyè tó kéré jù túmọ̀ sí:", options: ["Fún gbogbo ènìyàn ní ààyè àtúnṣe", "Fún àwọn ènìyàn ní ààyè tí wọ́n nílò nìkan", "Má ṣe pín nǹkan kankan láéláé", "Pín gbogbo nǹkan ní gbangba"], answer: 1, why: "Ààyè tó kéré túmọ̀ sí ewu tó kéré." },
      { objective: "O4", q: "Èwo ni kò gbọ́dọ̀ wọ inú fódà cloud tí a ń pín láéláé?", options: ["Ìlapa èrò iṣẹ́ ẹgbẹ́", "Àkókò kíláàsì", "Fáìlì tó ní nọ́mbà Social Security rẹ", "Fọ́tò ẹgbẹ́"], answer: 2, why: "Nọ́mbà àdáni kò gbọ́dọ̀ wà nínú fódà tí a ń pín." },
      { objective: "O5", q: "Ìdánilójú-ìgbésẹ̀-méjì túmọ̀ sí:", options: ["Títẹ ọ̀rọ̀ aṣínà rẹ lẹ́ẹ̀mejì", "Àyẹ̀wò kejì lórí fóònù rẹ lẹ́yìn ọ̀rọ̀ aṣínà rẹ", "Àkọọ́lẹ̀ méjì", "Fódà méjì"], answer: 1, why: "Ó ń dí àwọn olè tó ní ọ̀rọ̀ aṣínà rẹ nìkan lọ́wọ́." },
      { objective: "O5", q: "Nígbà àyẹ̀wò ààbò, o yẹ kí o:", options: ["Mú àwọn ẹ̀rọ tó wọlé tí o kò mọ̀ kúrò", "Pa fóònù ìgbàpadà rẹ", "Pín ọ̀rọ̀ aṣínà rẹ", "Pa gbogbo fáìlì rẹ rẹ́"], answer: 0, why: "Ẹ̀rọ tí o kò mọ̀ lè túmọ̀ sí pé ẹlòmíì ti wọlé." },
      { objective: "O5", q: "Ímeèlì kan sọ pé \"Ẹnìkan pín fáìlì pẹ̀lú rẹ\" láti ọ̀dọ̀ ẹni tí o kò mọ̀. Ìgbésẹ̀ tó láàbò jù ni:", options: ["Tẹ ẹ́ kí o sì wọlé lórí ojú-ìwé tó ṣí", "Fi ọ̀rọ̀ aṣínà rẹ dá a lóhùn", "Fi ránṣẹ́ sí gbogbo ènìyàn", "Lọ sí ojú-òpó ibi ìpamọ́ cloud rẹ fúnra rẹ láti ṣàyẹ̀wò"], answer: 3, why: "Ímeèlì pínpín irọ́ ń mú ọ lọ sí ojú-ìwé wíwọlé irọ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      6,
      9,
      11,
      13,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Fódà àti fáìlì",
        objective: "O3",
        notYet: "Kò sí fódà \"Ìwé Iṣẹ́ Mi\", tàbí orúkọ àwọn fáìlì kò ṣe kedere, bí \"doc1\".",
        meets: "Fódà náà ní fáìlì méjì pẹ̀lú orúkọ tó ṣe kedere.",
        exceeds: "Ó tún ṣí àwọn fáìlì náà lórí ẹ̀rọ kejì láti fi hàn pé wọ́n ń sync."
      },
      {
        name: "Pínpín láìléwu",
        objective: "O4",
        notYet: "Ó pín fáìlì náà pẹ̀lú ààyè àtúnṣe tàbí gẹ́gẹ́ bí \"anyone with the link\", tàbí kò mú ààyè kúrò rárá.",
        meets: "Ó pín fáìlì kan gẹ́gẹ́ bí wíwò nìkan, ó wo àwọn tó ní ààyè, lẹ́yìn náà ó mú ààyè kúrò.",
        exceeds: "Ó lè ṣàlàyé ìdí tí wíwò nìkan fi jẹ́ ààyè tó kéré jù tí wọ́n nílò."
      },
      {
        name: "Àkọọ́lẹ̀ tó ní ààbò",
        objective: "O5",
        notYet: "Ìdánilójú-ìgbésẹ̀-méjì kò sí ní títan.",
        meets: "Ìdánilójú-ìgbésẹ̀-méjì wà ní títan, ó sì ti wo àwọn ẹ̀rọ tó wọlé.",
        exceeds: "Ó tún ṣàyẹ̀wò fóònù àti ímeèlì ìgbàpadà, akẹ́kọ̀ọ́ náà sì lè dárúkọ àmì ìkìlọ̀ phishing kan."
      },
      {
        name: "Àlàyé cloud",
        objective: "O1",
        notYet: "Gbólóhùn mẹ́ta náà kò sí, tàbí wọn kò sọ ohun tí cloud jẹ́.",
        meets: "Gbólóhùn mẹ́ta tó ṣe kedere sọ ohun tí cloud jẹ́, wọ́n sì fúnni ní àǹfààní kan àti ewu kan.",
        exceeds: "Àwọn gbólóhùn náà tún lo àfiwé ojoojúmọ́, bí iná mànàmáná."
      },
      {
        name: "Oríṣi iṣẹ́",
        objective: "O2",
        notYet: "Ọ̀kan tàbí jù bẹ́ẹ̀ lọ nínú àpẹẹrẹ SaaS, PaaS àti IaaS kò tọ́ tàbí kò sí.",
        meets: "Àpẹẹrẹ kan tó tọ́ fún SaaS, PaaS àti IaaS ọ̀kọ̀ọ̀kan.",
        exceeds: "Ó tún sọ ohun tó ṣì jẹ́ ojúṣe olùlò lábẹ́ ojúṣe àjọpín."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé ìdánilójú-ìgbésẹ̀-méjì wà ní títan fún àkọọ́lẹ̀ pàtàkì wọn lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n lo ibi ìpamọ́ cloud fún ìwé ilé-ìwé, iṣẹ́ tàbí ètò láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ \"Ìpìlẹ̀ Microsoft Azure\" tàbí ẹ̀kọ́ ìmọ̀ ẹ̀rọ mìíràn láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tàbí kọ̀mpútà pẹ̀lú íńtánẹ́ẹ̀tì; ẹ̀rọ kejì ń ṣèrànwọ́ ṣùgbọ́n kò pọn dandan",
      "Àkọọ́lẹ̀ Google ọ̀fẹ́ (Google Drive) tàbí àkọọ́lẹ̀ Microsoft (OneDrive)",
      "Fóònù tó lè gba kóòdù tàbí ìbéèrè ìjẹ́rìí fún ìdánilójú-ìgbésẹ̀-méjì",
      "Ìwé àti gègé fún àkọsílẹ̀ \"Gbìyànjú rẹ̀ báyìí\"",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ẹ jọ ṣe ìdánwò ṣáájú, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan, kí ẹ sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" ní tààrà.",
      "Lo fáìlì àṣeṣe nìkan (résumé àpẹẹrẹ tàbí àkójọ àwọn ẹlẹ́rìí pẹ̀lú orúkọ àròsọ); má ṣe lo nọ́mbà ìdánimọ̀ gidi, ìsọfúnni báńkì tàbí ọ̀rọ̀ aṣínà láéláé.",
      "Pín àwọn akẹ́kọ̀ọ́ ní méjì-méjì kí wọ́n lè pín fáìlì pẹ̀lú ara wọn gẹ́gẹ́ bí wíwò nìkan, kí wọ́n sì mú ààyè kúrò nígbà ẹ̀kọ́.",
      "Lórí kọ̀mpútà tí a ń pín, rí i dájú pé àwọn akẹ́kọ̀ọ́ jáde kúrò nínú àkọọ́lẹ̀ wọn (sign out) kí wọ́n sì pa browser kí wọ́n tó lọ.",
      "Fún àwọn akẹ́kọ̀ọ́ tí kò tíì pé ọmọ ọdún 18, tẹ̀lé òfin ilé-ìwé tàbí ètò náà nípa àkọọ́lẹ̀ àdáni; a lè lo àkọọ́lẹ̀ ilé-ìwé tí ó bá gba pínpín láàyè."
    ]
  }
};
