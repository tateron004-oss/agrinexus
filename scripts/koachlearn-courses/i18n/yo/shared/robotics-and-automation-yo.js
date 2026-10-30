"use strict";

// Koach Learn course (Yoruba translation of shared/robotics-and-automation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "robotics-and-automation-yo",
  lang: "yo",
  translationOf: "robotics-and-automation",
  category: "Youth",
  name: "Ìfihàn sí Robot, AI àti Ẹ̀rọ Aláàdáṣe",
  skills: "Ṣíṣàlàyé mọ̀-ronú-ṣe, Yíyan sensor àti actuator, Kíkọ algorithm, Kíkọ kóòdù fún robot orí kọ̀mpútà pẹ̀lú blọ́ọ̀kù, Lílo sensor láti ṣe ìpinnu, Ìdánwò àti àtúnṣe àṣìṣe",
  outcome: "ṣètò kí o sì kọ kóòdù fún robot orí kọ̀mpútà pẹ̀lú block coding ọ̀fẹ́, kí ó lè wakọ̀ ní ọ̀nà kan, lo sensor láti yẹra fún ògiri, kí o sì dán an wò, kí o tún un ṣe títí yóò fi ṣiṣẹ́.",
  about: [
    "Robot àti ẹ̀rọ aláàdáṣe wà ní ilé ìkẹ́rùsí, oko, ilé-ìwòsàn, ọkọ̀ àti ilé. Ẹ̀kọ́ yìí fi bí wọ́n ṣe ń ṣiṣẹ́ hàn ọ́, ó sì jẹ́ kí o kọ kóòdù fún ọ̀kan fúnra rẹ, láìsí robot láti rà, láìsí ìrírí kóòdù.",
    "Ó wà fún àwọn ọ̀dọ́ tí wọ́n fẹ́ mọ̀ nípa iṣẹ́ ẹ̀rọ ìgbàlódé, àwọn ọmọ ogun àtijọ́ tí wọ́n ti ṣiṣẹ́ pẹ̀lú ẹ̀rọ aláìní awakọ̀ tàbí àtúnṣe ẹ̀rọ, tí wọ́n sì ń wá iṣẹ́ aráàlú, àti ẹnikẹ́ni tí ó fẹ́ lóye àwọn ẹ̀rọ tí ń yí ibi iṣẹ́ padà.",
    "O máa kọ́ èrò mọ̀-ronú-ṣe, o máa ṣètò ìgbésẹ̀ robot sórí ìwé, lẹ́yìn náà o máa kọ kóòdù fún robot orí kọ̀mpútà ọ̀fẹ́ nínú browser pẹ̀lú blọ́ọ̀kù. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́."
  ],
  finalTask: "Nínú irinṣẹ́ robot orí kọ̀mpútà ọ̀fẹ́ bí VEXcode VR, kọ ètò blọ́ọ̀kù tí ó mú kí robot wakọ̀ ní onígun mẹ́rin, lẹ́yìn náà ètò kejì tí ó mú kí ó wakọ̀ síwájú títí sensor yóò fi rí ògiri, kí ó dúró, kí ó yípadà, kí ó sì máa bá a lọ. Dán an wò, tún àṣìṣe kan ó kéré tán ṣe, kí o sì kọ gbólóhùn mẹ́ta tí ó ṣàlàyé ohun tí robot náà ń mọ̀, bí ó ṣe ń pinnu àti bí ó ṣe ń ṣe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ (láti ilé-ẹ̀kọ́ girama kékeré títí dé ọ̀dọ́ àgbà) tí wọ́n fẹ́ mọ̀ nípa robot, kóòdù tàbí iṣẹ́ ẹ̀rọ ìgbàlódé, ní ilé-ẹ̀kọ́, ètò lẹ́yìn ilé-ẹ̀kọ́, ilé-ìkàwé tàbí ibùdó ọ̀dọ́.",
    startingPoint: "Wọ́n lè lo kọ̀mpútà, Chromebook tàbí tablet àti browser, wọ́n sì ti rí robot nínú fídíò tàbí ní ilé ìtajà. Ọ̀pọ̀ jù lọ kò tíì kọ ètò kọ̀mpútà tàbí ṣètò algorithm rí.",
    gap: "Robot àti ẹ̀rọ aláàdáṣe ń pọ̀ sí i ní ilé ìkẹ́rùsí, ilé-iṣẹ́, oko àti ilé-ìwòsàn, àwọn iṣẹ́ onímọ̀ ẹ̀rọ àti olùkọ kóòdù sì nílò ènìyàn tí ó lè ṣètò ìgbésẹ̀, kọ kóòdù, dán an wò, kí ó sì tún un ṣe. Àwọn akẹ́kọ̀ọ́ nílò àṣeyọrí àkọ́kọ́ pẹ̀lú robot orí kọ̀mpútà kí wọ́n lè ní ìgboyà, kí wọ́n sì rí ọ̀nà sínú àwọn iṣẹ́ wọ̀nyí.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 6 sí 8)",
      "Ẹ̀rọ: kọ̀mpútà, Chromebook tàbí tablet tí ó ní browser; kò sí ìdí fún robot gidi",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, nǹkan bí ìṣẹ́jú 60 lápapọ̀",
      "Ẹ̀dà àti ohun tí irinṣẹ́ ọ̀fẹ́ ń ṣe lè yí padà; lo èyí tí ilé-ẹ̀kọ́ tàbí ilé-ìkàwé fẹ́ràn",
      "Ààbò: robot ilé-iṣẹ́ gidi ni a máa ń lò nìkan lẹ́yìn ìdálẹ́kọ̀ọ́ ààbò ibẹ̀"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àpẹẹrẹ àwọn ẹ̀rọ gidi", action: "dá àwọn tí ó jẹ́ robot, àwọn tí ó jẹ́ ẹ̀rọ aláàdáṣe àti àwọn tí ó ń lo AI mọ̀, kí o sì ṣàpèjúwe yíká mọ̀-ronú-ṣe", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní iṣẹ́ kan tí robot gbọ́dọ̀ ṣe", action: "yan àwọn sensor àti actuator tí ó nílò", standard: "pẹ̀lú ìdí fún apá kọ̀ọ̀kan" },
    { id: "O3", condition: "Tí a bá fún ọ ní iṣẹ́ robot kan", action: "kọ algorithm ní ọ̀rọ̀ tó rọrùn pẹ̀lú ìgbésẹ̀ pàtó, loop kan àti ìpinnu if-then kan", standard: "tí ó fi ṣiṣẹ́ nígbà tí o bá tẹ̀lé e fúnra rẹ" },
    { id: "O4", condition: "Pẹ̀lú irinṣẹ́ robot orí kọ̀mpútà ọ̀fẹ́ bí VEXcode VR", action: "kọ kóòdù blọ́ọ̀kù tí ó mú kí robot wakọ̀ ní onígun mẹ́rin", standard: "tí ó fi padà sí nítòsí ibi tí ó ti bẹ̀rẹ̀" },
    { id: "O5", condition: "Tí a bá fún ọ ní robot tí ó gbọ́dọ̀ yẹra fún ògiri", action: "fi if-then tí ó ń lo sensor kún ètò náà, kí o sì tún àṣìṣe kan ó kéré tán ṣe", standard: "ní yíyí nǹkan kan padà lẹ́ẹ̀kan títí robot yóò fi dúró, tí yóò sì yípadà níbi ògiri" },
    { id: "O6", condition: "Tí a bá fún ọ ní ibi iṣẹ́ tí ó ń lo robot", action: "dárúkọ àwọn iṣẹ́ gidi tí ó jẹ mọ́ robot àti àwọn òfin ààbò tí ènìyàn ń tẹ̀lé nítòsí robot", standard: "ní dídárúkọ iṣẹ́ méjì àti òfin ààbò méjì ó kéré tán" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí robot àti ẹ̀rọ aláàdáṣe ṣe ń ṣiṣẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Robot, ẹ̀rọ aláàdáṣe àti AI: kí ni ìyàtọ̀?",
          minutes: 4,
          goal: "Pín àwọn ẹ̀rọ gidi sí robot, ẹ̀rọ aláàdáṣe àti AI, kí o sì ṣàlàyé mọ̀-ronú-ṣe.",
          text: [
            "Ẹ̀rọ aláàdáṣe (automation) túmọ̀ sí pé ẹ̀rọ tàbí ètò kan ń ṣe iṣẹ́ fúnra rẹ̀ lẹ́yìn tí a bá ti ṣètò rẹ̀, bí ẹ̀rọ ìfọṣọ àwo tàbí ìgbànú tí ń gbé ẹrù ní ilé-iṣẹ́. Robot jẹ́ ẹ̀rọ tí ó lè mọ ohun tí ó yí i ká, kí ó sì gbéra tàbí ṣe nǹkan níbẹ̀, bí robot ìgbálẹ̀ tàbí robot ilé ìkẹ́rùsí tí ń gbé pẹpẹ.",
            "Gbogbo robot ń tẹ̀lé yíká kan náà: mọ̀, ronú, ṣe. Ó ń mọ̀ pẹ̀lú sensor (kámẹ́rà, bọ́tìnnì ìkọlù, sensor ìjìnnà), ó ń ronú pẹ̀lú ètò kọ̀mpútà tí ó ń pinnu ohun tí ó máa ṣe, ó sì ń ṣe pẹ̀lú mọ́tò, kẹ̀kẹ́, apá tàbí ìdìmú. Lẹ́yìn náà ó tún ń mọ̀.",
            "AI jẹ́ irú ètò ìrònú kan tí ó ń kẹ́kọ̀ọ́ àpẹẹrẹ láti inú ọ̀pọ̀ àpẹẹrẹ, bí rírí ènìyàn nínú àwòrán kámẹ́rà. Ọ̀pọ̀ robot ń lo òfin tó rọrùn, kì í ṣe AI. Àwọn kan ń lo AI láti rí nǹkan, ṣètò ọ̀nà tàbí gbọ́ ọ̀rọ̀."
          ],
          words: [["Ẹ̀rọ aláàdáṣe (automation)", "ẹ̀rọ tàbí ètò tí ó ń ṣe iṣẹ́ fúnra rẹ̀ lẹ́yìn tí a bá ti ṣètò rẹ̀."], ["Robot", "ẹ̀rọ tí ó lè mọ ohun tí ó yí i ká, kí ó sì ṣe nǹkan níbẹ̀."], ["Mọ̀-ronú-ṣe (sense-think-act)", "yíká tí gbogbo robot ń tẹ̀lé: gba ìsọfúnni, pinnu, lẹ́yìn náà gbéra tàbí ṣe nǹkan."], ["AI", "ìkékúrú artificial intelligence (ọgbọ́n àtọwọ́dá): àwọn ètò tí ó ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ láti ṣe ìpinnu."]],
          slides: [
            { title: "Ẹ̀rọ aláàdáṣe àti robot", bullets: ["Ẹ̀rọ aláàdáṣe: ń ṣe iṣẹ́ tí a ṣètò fúnra rẹ̀", "Robot: ń mọ ohun tí ó yí i ká, ó sì ń ṣe nǹkan níbẹ̀"] },
            { title: "Yíká robot", bullets: ["Mọ̀: sensor ń gba ìsọfúnni", "Ronú: ètò kan ń pinnu", "Ṣe: mọ́tò, kẹ̀kẹ́ tàbí apá ń gbéra", "Lẹ́yìn náà ó tún ń mọ̀"] },
            { title: "Ipò AI", bullets: ["AI ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ", "Ọ̀pọ̀ robot ń lo òfin tó rọrùn, kì í ṣe AI", "Àwọn kan ń lo AI láti rí nǹkan, ṣètò tàbí gbọ́ ọ̀rọ̀"] }
          ],
          tryIt: "Yan ẹ̀rọ mẹ́ta tí o ti rí (fún àpẹẹrẹ robot ìgbálẹ̀, ibi ìsanwó aládàáṣe ní ilé ìtajà, drone tí ń kó ẹrù). Fún ọ̀kọ̀ọ̀kan, kọ bóyá ẹ̀rọ aláàdáṣe ni tàbí robot, àti ọ̀nà kan tí ó ń mọ̀, tí ó ń ronú, tí ó sì ń ṣe.",
          youCanNow: "ya ẹ̀rọ aláàdáṣe, robot àti AI sọ́tọ̀, kí o sì ṣàpèjúwe robot èyíkéyìí pẹ̀lú mọ̀-ronú-ṣe.",
          quickCheck: [
            { objective: "O1", q: "Kí ni robot máa ń ṣe ní ìgbésẹ̀ \"ṣe\" nínú mọ̀-ronú-ṣe?", options: ["Ó ń gbéra tàbí ṣe nǹkan pẹ̀lú mọ́tò, kẹ̀kẹ́ tàbí ìdìmú", "Ó ń wọn ayé pẹ̀lú sensor", "Ó ń pinnu ohun tí ó máa ṣe pẹ̀lú ètò", "Ó ń pa ara rẹ̀"], answer: 0, why: "Ṣíṣe túmọ̀ sí gbígbéra tàbí ṣíṣe nǹkan pẹ̀lú mọ́tò, kẹ̀kẹ́, apá tàbí ìdìmú." },
            { objective: "O1", q: "Ọ̀rẹ́ kan sọ pé gbogbo robot ń lo AI. Kí ni o máa sọ fún un?", options: ["Òótọ́ ni; robot kò lè ṣiṣẹ́ láìsí AI", "AI túmọ̀ sí pé robot ní kẹ̀kẹ́", "Ọ̀pọ̀ robot ń tẹ̀lé òfin tó rọrùn; àwọn kan nìkan ló ń lo AI", "Robot àti AI jẹ́ ohun kan náà"], answer: 2, why: "Ọ̀pọ̀ robot ń lo òfin tó rọrùn; àwọn kan ń lo AI láti rí nǹkan, ṣètò ọ̀nà tàbí gbọ́ ọ̀rọ̀." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sensor àti actuator: ìmọ̀lára àti iṣan robot",
          minutes: 5,
          goal: "So àwọn sensor àti actuator tí ó wọ́pọ̀ pọ̀ mọ́ iṣẹ́ tí wọ́n ń ṣe.",
          text: [
            "Sensor ni ìmọ̀lára robot. Sensor ìjìnnà ń wọn bí nǹkan ṣe jìnnà tó. Sensor ìkọlù (bump sensor) ń mọ̀ nígbà tí robot bá fara kan nǹkan. Kámẹ́rà ń rí àwòrán. Sensor ìlà tàbí àwọ̀ ń wo ilẹ̀. Ẹ̀rọ GPS ń mọ ibi tí robot wà níta.",
            "Actuator ni iṣan robot: ohunkóhun tí ó ń mú kí ó gbéra tàbí ṣe nǹkan. Mọ́tò ń yí kẹ̀kẹ́, servo ń yí oríkèé sí igun pàtó, ìdìmú tàbí ife ìfàmọ́ra sì ń gbé nǹkan.",
            "Nígbà tí o bá ń ṣe robot, bẹ̀rẹ̀ pẹ̀lú iṣẹ́ rẹ̀. Robot tí ó gbọ́dọ̀ dúró kí ó tó kọlu ògiri nílò sensor ìjìnnà tàbí ìkọlù àti mọ́tò ìwakọ̀. Robot tí ó ń ya àpótí pupa àti búlúù sọ́tọ̀ nílò sensor àwọ̀ àti ìdìmú."
          ],
          words: [["Sensor", "apá tí ó ń gba ìsọfúnni, bí ìjìnnà, ìfọwọ́kàn, ìmọ́lẹ̀ tàbí àwòrán."], ["Actuator", "apá tí ó ń mú kí robot gbéra tàbí ṣe nǹkan, bí mọ́tò tàbí ìdìmú."], ["Servo", "mọ́tò tí ó ń yí sí igun pàtó."]],
          slides: [
            { title: "Sensor = ìmọ̀lára", bullets: ["Ìjìnnà, ìkọlù, kámẹ́rà", "Sensor ìlà tàbí àwọ̀", "GPS fún ibi tí ó wà níta"] },
            { title: "Actuator = iṣan", bullets: ["Mọ́tò ń yí kẹ̀kẹ́", "Servo ń yí sí igun pàtó", "Ìdìmú ń gbé nǹkan"] },
            { title: "Bẹ̀rẹ̀ pẹ̀lú iṣẹ́ rẹ̀", bullets: ["Dúró ṣáájú ògiri: sensor ìjìnnà + mọ́tò", "Ya sọ́tọ̀ nípa àwọ̀: sensor àwọ̀ + ìdìmú"] }
          ],
          tryIt: "Ṣe robot kan sórí ìwé fún iṣẹ́ kan, bí bíbomirin ewéko tàbí gbígbé àpótí kọjá yàrá. Kọ àwọn sensor àti actuator tí ó nílò sílẹ̀, àti ìdí rẹ̀.",
          youCanNow: "yan àwọn sensor àti actuator tí robot nílò fún iṣẹ́ kan.",
          quickCheck: [
            { objective: "O2", q: "Apá wo ni actuator?", options: ["Kámẹ́rà", "Ìdìmú", "Sensor ìkọlù", "Sensor ìlà"], answer: 1, why: "Actuator ń mú kí robot gbéra tàbí ṣe nǹkan; ìdìmú ń gbé nǹkan." },
            { objective: "O2", q: "O ń ṣe robot tí ó ń tẹ̀lé ìlà dúdú lórí ilẹ̀. Sensor wo ni o máa fi kún un?", options: ["Ẹ̀rọ GPS", "Sensor ìkọlù", "Gbohùngbohùn (microphone)", "Sensor ìlà tàbí àwọ̀"], answer: 3, why: "Sensor ìlà tàbí àwọ̀ ń wo ilẹ̀, ó sì lè tẹ̀lé ìlà." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíkọ algorithm kí o tó kọ kóòdù",
          minutes: 5,
          goal: "Kọ ètò ìgbésẹ̀-sí-ìgbésẹ̀ pẹ̀lú loop àti ìpinnu tí robot lè tẹ̀lé.",
          text: [
            "Algorithm jẹ́ àkọsílẹ̀ ìgbésẹ̀ pàtó láti parí iṣẹ́ kan. Robot kò lè méfò, nítorí náà gbogbo ìgbésẹ̀ gbọ́dọ̀ yé: \"wakọ̀ síwájú 50 sẹ̀ǹtímítà\" dípò \"lọ díẹ̀\".",
            "Irinṣẹ́ méjì ń mú algorithm lágbára. Loop ń tún ìgbésẹ̀ ṣe, bí \"tún un ṣe ní ìgbà 4: wakọ̀ síwájú, yí sí ọ̀tún ìwọ̀n 90\" láti wakọ̀ ní onígun mẹ́rin. Ìpinnu, tí a tún ń pè ní if-then, ń yan ohun tí a máa ṣe: \"tí ògiri bá sún mọ́ ju sẹ̀ǹtímítà 10 lọ, dúró; bí bẹ́ẹ̀ kọ́, máa wakọ̀ lọ\".",
            "Kọ ọ́ ní ọ̀rọ̀ tó rọrùn tàbí ya flowchart kan ná. Lẹ́yìn náà tẹ̀lé e fúnra rẹ bí ẹni pé ìwọ ni robot. Tí o bá kọlu nǹkan lórí ìwé, robot náà máa kọlù ú pẹ̀lú."
          ],
          steps: ["Kọ ète náà ní gbólóhùn kan.", "Kọ ìgbésẹ̀ kọ̀ọ̀kan ní títò, pẹ̀lú ìwọ̀n pàtó.", "Wá àwọn ìgbésẹ̀ tí ó ń tún ara wọn ṣe kí o sì sọ wọ́n di loop.", "Fi àwọn ìpinnu if-then tí ó ń lo sensor kún un.", "Tẹ̀lé e fúnra rẹ láti dán an wò."],
          words: [["Algorithm", "àkọsílẹ̀ ìgbésẹ̀ pàtó láti parí iṣẹ́ kan."], ["Loop", "àwọn ìgbésẹ̀ tí ó ń tún ara wọn ṣe."], ["If-then", "ìpinnu: tí nǹkan kan bá jẹ́ òótọ́, ṣe ohun kan; bí bẹ́ẹ̀ kọ́, ṣe òmíràn."], ["Flowchart", "àwòrán algorithm pẹ̀lú àpótí àti ọfà."]],
          slides: [
            { title: "Algorithm gbọ́dọ̀ jẹ́ pàtó", bullets: ["\"Wakọ̀ síwájú 50 cm\", kì í ṣe \"lọ díẹ̀\"", "Robot kò lè méfò"] },
            { title: "Loop àti ìpinnu", bullets: ["Loop: tún un ṣe ní ìgbà 4, síwájú lẹ́yìn náà yí sí ọ̀tún 90", "Tí ògiri bá sún mọ́ ju 10 cm lọ, dúró; bí bẹ́ẹ̀ kọ́, máa wakọ̀ lọ"] },
            { title: "Kọ́kọ́ dán an wò lórí ìwé", bullets: ["Kọ ọ́ tàbí ya flowchart", "Tẹ̀lé e bí ẹni pé ìwọ ni robot", "Tún un ṣe kí o tó kọ kóòdù"] }
          ],
          tryIt: "Kọ algorithm, pẹ̀lú loop, fún robot láti wakọ̀ ní onígun mẹ́rin. Lẹ́yìn náà fi ìgbésẹ̀ if-then kún un kí ó lè dúró tí nǹkan bá dí i lọ́nà. Tẹ̀lé e pẹ̀lú ohun ìṣeré, fóònù tàbí ẹsẹ̀ ara rẹ.",
          youCanNow: "kọ algorithm tó yé pẹ̀lú loop àti ìpinnu if-then, kí o sì dán an wò lórí ìwé.",
          quickCheck: [
            { objective: "O3", q: "Kí ni loop ń ṣe nínú algorithm?", options: ["Ó ń dá robot dúró", "Ó ń yan láàárín ohun méjì", "Ó ń tún àwọn ìgbésẹ̀ ṣe", "Ó ń wọn ìjìnnà"], answer: 2, why: "Loop ń tún ìgbésẹ̀ ṣe, bí wíwakọ̀ síwájú àti yíyí ní ìgbà mẹ́rin fún onígun mẹ́rin." },
            { objective: "O3", q: "Ètò rẹ sọ pé \"lọ síwájú díẹ̀\". Kí ni o máa yí padà kí o tó kọ kóòdù?", options: ["Fún un ní ìwọ̀n pàtó, bí sẹ̀ǹtímítà 50", "Kò sí nǹkan; robot máa méfò", "Fi ìgbésẹ̀ míì kún un lẹ́yìn rẹ̀", "Yọ ìgbésẹ̀ náà kúrò"], answer: 0, why: "Robot kò lè méfò, nítorí náà gbogbo ìgbésẹ̀ nílò ìwọ̀n pàtó." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí robot àti ẹ̀rọ aláàdáṣe ṣe ń ṣiṣẹ́",
        questions: [
          { objective: "O1", q: "Kí ni ìgbésẹ̀ mẹ́ta tí gbogbo robot ń tún ṣe?", options: ["Rà, kọ́, tà", "Bẹ̀rẹ̀, dúró, sinmi díẹ̀", "Mọ̀, ronú, ṣe", "Gba agbára, wakọ̀, gúnlẹ̀"], answer: 2, why: "Robot ń mọ̀, ó ń pinnu pẹ̀lú ètò, lẹ́yìn náà ó ń ṣe, ó sì ń tún un ṣe." },
          { objective: "O2", q: "Apá wo ni sensor?", options: ["Sensor ìjìnnà", "Mọ́tò kẹ̀kẹ́", "Ìdìmú", "Bátìrì"], answer: 0, why: "Sensor ìjìnnà ń gba ìsọfúnni; mọ́tò àti ìdìmú jẹ́ actuator." },
          { objective: "O2", q: "Robot kan gbọ́dọ̀ ya àpótí pupa kúrò lára àpótí búlúù. Kí ló nílò jù?", options: ["Ẹ̀rọ GPS", "Gbohùngbohùn tí ó ń dún ketekete", "Bátìrì tí ó tóbi jù nìkan", "Sensor àwọ̀ àti ìdìmú"], answer: 3, why: "Ó gbọ́dọ̀ rí àwọ̀, kí ó sì gbé àpótí." },
          { objective: "O3", q: "Ìlànà wo ló yé tó fún robot?", options: ["\"Lọ díẹ̀\"", "\"Wakọ̀ síwájú sẹ̀ǹtímítà 50\"", "\"Yí díẹ̀ sí ọ̀tún\"", "\"Ṣe nǹkan yẹn\""], answer: 1, why: "Robot nílò ìwọ̀n pàtó." },
          { objective: "O3", q: "\"Tún un ṣe ní ìgbà 4: wakọ̀ síwájú, yí sí ọ̀tún ìwọ̀n 90\" ń lo:", options: ["Sensor", "Loop", "Ìdìmú", "Ọ̀rọ̀ aṣínà"], answer: 1, why: "Loop ń tún ìgbésẹ̀ ṣe; èyí ń wakọ̀ ní onígun mẹ́rin." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ kóòdù fún robot àti lílo robot",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ kóòdù fún robot orí kọ̀mpútà pẹ̀lú blọ́ọ̀kù",
          minutes: 6,
          goal: "Ṣí robot orí kọ̀mpútà ọ̀fẹ́ kí o sì kọ kóòdù tí ó mú kí ó wakọ̀ ní onígun mẹ́rin.",
          text: [
            "O lè kọ́ kóòdù robot nínú browser láìsí robot. VEXcode VR, láti ọ̀dọ̀ VEX Robotics, ní ẹ̀dà ọ̀fẹ́ tí ó ń lo blọ́ọ̀kù tí o ń fà sí ipò, bí Scratch, ó sì ń ṣiṣẹ́ lórí kọ̀mpútà, Chromebook àti tablet ní vr.vex.com. Àwọn ọ̀fẹ́ míì wà; ilé-ẹ̀kọ́ tàbí ilé-ìkàwé rẹ lè ní èyí tí wọ́n fẹ́ràn.",
            "Blọ́ọ̀kù ń so mọ́ ara wọn bí ègé àdììtú. Blọ́ọ̀kù \"wakọ̀ síwájú\" ń gbé robot lọ, blọ́ọ̀kù \"yí sí ọ̀tún\" ń yí i padà, blọ́ọ̀kù \"repeat\" sì ń ṣe loop. O tẹ Start láti wo bí robot ṣe ń tẹ̀lé ètò rẹ nínú pápá ìṣeré orí kọ̀mpútà.",
            "Sọ algorithm orí ìwé rẹ di blọ́ọ̀kù ní ìgbésẹ̀ kan lẹ́ẹ̀kan. Ṣe é lẹ́yìn ìyípadà kọ̀ọ̀kan kí o lè mọ blọ́ọ̀kù tí ó fa ohun tí ó ṣẹlẹ̀."
          ],
          steps: ["Ṣí vr.vex.com nínú browser.", "Yan pápá ìṣeré tó rọrùn tí ó ní ààyè ṣíṣí lórí ilẹ̀.", "Fa blọ́ọ̀kù wakọ̀-síwájú àti blọ́ọ̀kù yí-sí-ọ̀tún sínú ètò náà.", "Fi blọ́ọ̀kù repeat tí a ṣètò sí 4 yí wọn ká.", "Tẹ Start kí o sì wò ó. Ṣàtúnṣe ìjìnnà tàbí yíyí títí yóò fi wakọ̀ ní onígun mẹ́rin tó mọ́."],
          words: [["Block coding", "kíkọ ètò nípa síso àwọn blọ́ọ̀kù tí a lè rí pọ̀ dípò títẹ kóòdù."], ["Pápá ìṣeré (playground)", "ààyè orí kọ̀mpútà tí robot àfarawé ti ń wakọ̀."], ["Simulator", "software tí ó ń ṣe bí ẹ̀rọ gidi kí o lè kọ́ṣẹ́ láìléwu."]],
          slides: [
            { title: "Kọ́ṣẹ́ láìsí robot", bullets: ["Block coding ọ̀fẹ́ nínú browser", "VEXcode VR: vr.vex.com", "Ó ń ṣiṣẹ́ lórí kọ̀mpútà, Chromebook àti tablet"] },
            { title: "Blọ́ọ̀kù ń so pọ̀", bullets: ["Wakọ̀ síwájú, yí sí ọ̀tún", "Blọ́ọ̀kù repeat = loop", "Tẹ Start láti wò ó"] },
            { title: "Kọ́ ọ ní ìgbésẹ̀ kékeré", bullets: ["Sọ ètò orí ìwé rẹ di blọ́ọ̀kù", "Ṣe é lẹ́yìn ìyípadà kọ̀ọ̀kan", "Ṣàtúnṣe títí yóò fi ṣiṣẹ́"] }
          ],
          sources: [{ name: "VEX Robotics: VEXcode VR", url: "https://www.vexrobotics.com/vexcode-vr" }],
          tryIt: "Nínú VEXcode VR tàbí robot orí kọ̀mpútà ọ̀fẹ́ míì, kọ kóòdù tí ó mú kí robot wakọ̀ ní onígun mẹ́rin pẹ̀lú blọ́ọ̀kù repeat. Jẹ́ kí ó parí sí nítòsí ibi tí ó ti bẹ̀rẹ̀.",
          youCanNow: "kọ kóòdù fún robot orí kọ̀mpútà pẹ̀lú blọ́ọ̀kù, kí o sì lo loop láti wakọ̀ ní onígun mẹ́rin.",
          quickCheck: [
            { objective: "O4", q: "Nínú block coding, kí ni bọ́tìnnì Start ń ṣe?", options: ["Ó ń pa àwọn blọ́ọ̀kù rẹ rẹ́", "Ó ń fi ètò rẹ pamọ́ sórí USB", "Ó ń ṣí pápá ìṣeré tuntun", "Ó ń ṣe ètò náà kí o lè wo bí robot ṣe ń tẹ̀lé e"], answer: 3, why: "Títẹ Start ń ṣe ètò náà nínú pápá ìṣeré orí kọ̀mpútà." },
            { objective: "O4", q: "O fi blọ́ọ̀kù tuntun márùn-ún kún un lẹ́ẹ̀kan náà, robot sì ń kọlu nǹkan. Kí ló yẹ kí o ti ṣe?", options: ["Fi blọ́ọ̀kù púpọ̀ sí i kún un", "Ṣe ètò náà lẹ́yìn ìyípadà kọ̀ọ̀kan", "Lo robot gidi dípò rẹ̀", "Pa sensor náà"], answer: 1, why: "Ṣíṣe é lẹ́yìn ìyípadà kọ̀ọ̀kan ń fi blọ́ọ̀kù tí ó fa ohun tí ó ṣẹlẹ̀ hàn." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Lílo sensor láti pinnu, lẹ́yìn náà títún àṣìṣe ṣe",
          minutes: 6,
          goal: "Fi if-then tí ó ń lo sensor kún ètò robot kí o sì tún àṣìṣe kan ṣe.",
          text: [
            "Robot tí ó ń tẹ̀lé ìgbésẹ̀ tí kò yí padà nìkan dà bí afọ́jú. Fi sensor kún un, ó sì lè dáhùn sí ohun tí ó yí i ká. Nínú block coding, o máa lo blọ́ọ̀kù \"if\" pẹ̀lú kíkà sensor nínú rẹ̀, bí \"tí ìjìnnà bá kéré sí mìlímítà 100\".",
            "Àpẹẹrẹ tí ó wọ́pọ̀: forever loop, nínú rẹ̀ if-then-else kan. Tí ògiri bá sún mọ́, dúró kí o sì yípadà. Bí bẹ́ẹ̀ kọ́, wakọ̀ síwájú. Robot ń wo sensor léraléra, èyí sì ni yíká mọ̀-ronú-ṣe nínú kóòdù.",
            "Àṣìṣe (bug) wọ́pọ̀. Debugging túmọ̀ sí wíwá àti títún wọn ṣe. Yí nǹkan kan padà lẹ́ẹ̀kan, ṣe é, kí o sì wò ó. Àwọn àṣìṣe tí ó wọ́pọ̀: yíyí kò tó ìwọ̀n 90 gan-an, nọ́mbà ìjìnnà wà ní ìwọ̀n tí kò tọ́, tàbí blọ́ọ̀kù kan wà lẹ́yìn òde loop."
          ],
          steps: ["Fi forever loop kún un.", "Nínú rẹ̀, fi blọ́ọ̀kù if-then-else kún un.", "Fi àyẹ̀wò sensor ìjìnnà sínú if.", "Then: dúró kí o sì yípadà. Else: wakọ̀ síwájú.", "Ṣe é, wá àṣìṣe, yí nǹkan kan padà, kí o sì tún un ṣe."],
          words: [["Bug", "àṣìṣe nínú ètò tí ó ń mú kí ó ṣe ohun tí kò tọ́."], ["Debugging", "wíwá àti títún àṣìṣe ṣe."], ["Forever loop", "loop tí ó ń tún ara rẹ̀ ṣe títí a ó fi dá ètò náà dúró."]],
          slides: [
            { title: "Sensor ń jẹ́ kí robot dáhùn", bullets: ["Lo blọ́ọ̀kù if pẹ̀lú kíkà sensor", "Àpẹẹrẹ: if distance < 100 mm"] },
            { title: "Àpẹẹrẹ náà", bullets: ["Forever loop", "Tí ó bá sún mọ́: dúró kí o sì yípadà", "Bí bẹ́ẹ̀ kọ́: wakọ̀ síwájú"] },
            { title: "Debugging", bullets: ["Yí nǹkan kan padà lẹ́ẹ̀kan", "Ṣàyẹ̀wò yíyí, ìwọ̀n àti ibi tí blọ́ọ̀kù wà", "Àṣìṣe wọ́pọ̀"] }
          ],
          tryIt: "Kọ kóòdù tí ó mú kí robot wakọ̀ síwájú títí sensor ìjìnnà rẹ̀ yóò fi rí ògiri, lẹ́yìn náà kí ó dúró, kí ó yípadà, kí ó sì máa bá a lọ. Kọ àṣìṣe kan tí o rí sílẹ̀ àti bí o ṣe tún un ṣe.",
          youCanNow: "lo kíkà sensor nínú if-then-else láti jẹ́ kí robot dáhùn, kí o sì tún àṣìṣe inú ètò ṣe.",
          quickCheck: [
            { objective: "O5", q: "Nínú ètò tí ó ń yẹra fún ògiri, kí ló dé tí a fi ń lo forever loop?", options: ["Kí robot lè máa wo sensor léraléra", "Kí robot lè wò ó lẹ́ẹ̀kan ṣoṣo", "Kí ètò náà má bẹ̀rẹ̀ láéláé", "Kí robot lè wakọ̀ ní onígun mẹ́rin"], answer: 0, why: "Forever loop ń tún àyẹ̀wò sensor ṣe, èyí sì ni mọ̀-ronú-ṣe nínú kóòdù." },
            { objective: "O5", q: "Robot rẹ ń dúró ní mítà 1 sí ògiri dípò nítòsí rẹ̀. Kí ni àṣìṣe tí ó ṣeé ṣe?", options: ["Robot nílò bátìrì tuntun", "Pápá ìṣeré ti bàjẹ́", "Nọ́mbà ìjìnnà wà ní ìwọ̀n tí kò tọ́", "Ògiri ga jù"], answer: 2, why: "Ìjìnnà ní ìwọ̀n tí kò tọ́, bí sẹ̀ǹtímítà dípò mìlímítà, jẹ́ àṣìṣe tí ó wọ́pọ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ibi tí robot ti ń ṣiṣẹ́, àti ṣíṣiṣẹ́ pẹ̀lú wọn láìléwu",
          minutes: 5,
          goal: "Dárúkọ àwọn iṣẹ́ robot gidi àti àwọn òfin ààbò tí ènìyàn ń tẹ̀lé nítòsí robot.",
          text: [
            "A ń lo robot àti ẹ̀rọ aláàdáṣe ní ilé ìkẹ́rùsí (gbígbé pẹpẹ àti ẹrù), ilé-iṣẹ́ (alurinmọ́, dídi ẹrù), oko (fífún wàrà, fífọ́n oògùn, drone), ilé-ìwòsàn (kíkó ohun èlò, ríran àwọn oníṣẹ́ abẹ lọ́wọ́) àti ológun (pípa bọ́ǹbù, ọkọ̀ òfuurufú aláìní awakọ̀).",
            "Àwọn ènìyàn ṣì ń ṣe iṣẹ́ pàtàkì: onímọ̀ ẹ̀rọ robot ń tún robot ṣe, wọ́n sì ń tọ́jú wọn, olùṣiṣẹ́ ń darí wọn, wọ́n sì ń ṣọ́ wọn, àwọn olùkọ kóòdù àti ẹnjiníà sì ń ṣe wọ́n. Ọ̀pọ̀ iṣẹ́ onímọ̀ ẹ̀rọ ń bẹ̀rẹ̀ pẹ̀lú ìwé-ẹ̀rí community college tàbí ìdálẹ́kọ̀ọ́ ológun.",
            "Ààbò ló ṣáájú. Robot ilé-iṣẹ́ lè yára gan-an, wọ́n sì lè gbá ènìyàn lágbára. Àwọn òṣìṣẹ́ ń yẹra fún agbègbè robot tí a sàmì sí, wọ́n ń lo bọ́tìnnì ìdádúró pàjáwìrì, wọ́n sì ń ti iná mọ̀nàmọ́ná pa kí wọ́n tó tún ẹ̀rọ ṣe. A ṣe robot alájọṣiṣẹ́ (cobot) láti ṣiṣẹ́ nítòsí ènìyàn, ṣùgbọ́n òfin kan náà ló wà: tẹ̀lé ìdálẹ́kọ̀ọ́ ààbò ibẹ̀."
          ],
          words: [["Onímọ̀ ẹ̀rọ robot (robotics technician)", "ẹni tí ó ń gbé robot kalẹ̀, tí ó ń tọ́jú wọn, tí ó sì ń tún wọn ṣe."], ["Cobot", "robot alájọṣiṣẹ́ tí a kọ́ láti ṣiṣẹ́ nítòsí ènìyàn."], ["Ìdádúró pàjáwìrì (emergency stop)", "bọ́tìnnì ńlá tí ó ń dá ẹ̀rọ dúró lẹ́sẹ̀kẹsẹ̀."]],
          slides: [
            { title: "Ibi tí robot ti ń ṣiṣẹ́", bullets: ["Ilé ìkẹ́rùsí, ilé-iṣẹ́, oko", "Ilé-ìwòsàn àti ológun"] },
            { title: "Iṣẹ́ pẹ̀lú robot", bullets: ["Onímọ̀ ẹ̀rọ ń tún wọn ṣe, wọ́n sì ń tọ́jú wọn", "Olùṣiṣẹ́ ń darí wọn, wọ́n sì ń ṣọ́ wọn", "Olùkọ kóòdù àti ẹnjiníà ń ṣe wọ́n"] },
            { title: "Ààbò ló ṣáájú", bullets: ["Yẹra fún agbègbè robot tí a sàmì sí", "Mọ bọ́tìnnì ìdádúró pàjáwìrì", "Tẹ̀lé ìdálẹ́kọ̀ọ́ ààbò ibẹ̀"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ètò onígun mẹ́rin rẹ àti ètò sensor rẹ nínú irinṣẹ́ robot orí kọ̀mpútà, tún àṣìṣe kan ó kéré tán ṣe, kí o sì kọ gbólóhùn mẹ́ta tí ó ṣàlàyé ohun tí robot rẹ ń mọ̀, bí ó ṣe ń pinnu àti bí ó ṣe ń ṣe.",
          youCanNow: "kọ kóòdù fún robot orí kọ̀mpútà tí ó ń mọ̀ tí ó sì ń dáhùn, ṣàlàyé bí ó ṣe ń ṣiṣẹ́, kí o sì dárúkọ àwọn iṣẹ́ robot gidi àti òfin ààbò.",
          quickCheck: [
            { objective: "O6", q: "Ta ló ń tún robot ṣe, tí ó sì ń tọ́jú wọn ní ilé-iṣẹ́ tàbí ilé ìkẹ́rùsí?", options: ["Akówójọ ní ilé ìtajà", "Onímọ̀ ẹ̀rọ robot", "Awakọ̀ tí ń kó ẹrù", "Oníbàárà"], answer: 1, why: "Onímọ̀ ẹ̀rọ robot ń tún robot ṣe, wọ́n sì ń tọ́jú wọn." },
            { objective: "O6", q: "O ń wo ilé ìkẹ́rùsí kan, o sì rí robot tí ń gbéra lẹ́yìn ìlà tí a sàmì sí. Kí ni o máa ṣe?", options: ["Kọjá ìlà náà láti wò ó dáadáa", "Fọwọ́ kan robot láti wò bóyá ó máa dúró", "Tẹ bọ́tìnnì èyíkéyìí", "Yẹra fún agbègbè tí a sàmì sí kí o sì tẹ̀lé òfin ààbò atọ́nà"], answer: 3, why: "Robot ilé-iṣẹ́ lè yára gan-an kí wọ́n sì gbá ènìyàn lágbára, nítorí náà ènìyàn ń yẹra fún agbègbè robot tí a sàmì sí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ kóòdù fún robot àti lílo robot",
        questions: [
          { objective: "O4", q: "Kí ni simulator?", options: ["Robot gidi", "Irú sensor kan", "Bátìrì robot", "Software tí ó ń ṣe bí ẹ̀rọ gidi kí o lè kọ́ṣẹ́"], answer: 3, why: "Simulator ń jẹ́ kí o kọ́ṣẹ́ láìléwu láìsí ẹ̀rọ gidi." },
          { objective: "O4", q: "Blọ́ọ̀kù wo ló ń mú kí robot tún ìgbésẹ̀ ṣe?", options: ["Repeat", "Stop", "Start", "Print"], answer: 0, why: "Blọ́ọ̀kù repeat ń ṣe loop." },
          { objective: "O5", q: "Ètò wo ló ń jẹ́ kí robot yẹra fún ògiri?", options: ["Wakọ̀ síwájú títí láé láìsí àyẹ̀wò", "Yí sí ọ̀tún lẹ́ẹ̀kan", "Forever: tí ògiri bá sún mọ́, dúró kí o sì yípadà; bí bẹ́ẹ̀ kọ́, wakọ̀ síwájú", "Dúró ní ìbẹ̀rẹ̀"], answer: 2, why: "If-then-else ń lo sensor láti dáhùn." },
          { objective: "O5", q: "Robot rẹ ń yí díẹ̀ jù ní ìgbà kọ̀ọ̀kan. Kí ni ọ̀nà tó dára jù láti tún un ṣe?", options: ["Pa gbogbo ètò náà rẹ́", "Yí blọ́ọ̀kù márùn-ún padà lẹ́ẹ̀kan", "Jáwọ́", "Yí ìwọ̀n yíyí padà díẹ̀ kí o sì tún un ṣe"], answer: 3, why: "Yí nǹkan kan padà lẹ́ẹ̀kan kí o sì dán an wò." },
          { objective: "O6", q: "Kí ló yẹ kí òṣìṣẹ́ ṣe kí ó tó tún robot ilé-iṣẹ́ ṣe?", options: ["Wọlé sínú rẹ̀ nígbà tí ó ń ṣiṣẹ́", "Ní kí robot dúró", "Tẹ̀lé ìdálẹ́kọ̀ọ́ ààbò kí ó sì ti iná mọ̀nàmọ́ná pa", "Pa iná inú yàrá"], answer: 2, why: "Títi iná mọ̀nàmọ́ná pa àti títẹ̀lé ìdálẹ́kọ̀ọ́ ń pa ènìyàn mọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí Robot, AI àti Ẹ̀rọ Aláàdáṣe",
    questions: [
      { objective: "O1", q: "Ẹ̀rọ ìfọṣọ àwo tí ń ṣe iṣẹ́ rẹ̀ jẹ́ àpẹẹrẹ:", options: ["Cobot", "Ẹ̀rọ aláàdáṣe", "Sensor", "Flowchart"], answer: 1, why: "Ó ń ṣe iṣẹ́ tí a ṣètò fúnra rẹ̀ lẹ́yìn tí a bá ti tàn án." },
      { objective: "O1", q: "Kí ló ń sọ ẹ̀rọ kan di robot?", options: ["Ó lè mọ ohun tí ó yí i ká kí ó sì ṣe nǹkan níbẹ̀", "Ó wọ́n", "Ó ní ojú-iboju", "Ó ń lo iná mọ̀nàmọ́ná"], answer: 0, why: "Robot ń mọ̀, ó sì ń ṣe nǹkan nínú ayé." },
      { objective: "O1", q: "Nínú mọ̀-ronú-ṣe, ta ló ń ṣe apá \"ronú\"?", options: ["Àwọn kẹ̀kẹ́", "Bátìrì", "Ètò kọ̀mpútà", "Àwọ̀ ara rẹ̀"], answer: 2, why: "Ètò kọ̀mpútà ló ń pinnu ohun tí a máa ṣe." },
      { objective: "O1", q: "Ṣé gbogbo robot ló ń lo AI?", options: ["Rárá, ọ̀pọ̀ ń tẹ̀lé òfin tó rọrùn", "Bẹ́ẹ̀ ni, nígbà gbogbo", "Robot ìgbálẹ̀ nìkan", "Nínú fíìmù nìkan"], answer: 0, why: "Ọ̀pọ̀ robot ń lo ètò tí ó ń tẹ̀lé òfin tó rọrùn." },
      { objective: "O2", q: "Èwo ni actuator?", options: ["Kámẹ́rà", "Sensor ìkọlù", "GPS", "Mọ́tò"], answer: 3, why: "Mọ́tò ń mú kí robot gbéra." },
      { objective: "O2", q: "Servo jẹ́:", options: ["Sensor ìjìnnà", "Mọ́tò tí ó ń yí sí igun pàtó", "Ẹ̀rọ ìgbàgbára bátìrì", "Irú loop kan"], answer: 1, why: "A ń lo servo fún oríkèé tí ó nílò igun pàtó." },
      { objective: "O2", q: "Robot kan gbọ́dọ̀ mọ̀ nígbà tí ó bá fara kan nǹkan. Sensor wo ló bá a mu?", options: ["Gbohùngbohùn", "Sensor ìkọlù", "Iná aláwọ̀", "Aago"], answer: 1, why: "Sensor ìkọlù ń mọ ìfarakanra." },
      { objective: "O3", q: "Algorithm jẹ́:", options: ["Orúkọ ilé-iṣẹ́ robot", "Irú mọ́tò kan", "Òfin ààbò", "Àkọsílẹ̀ ìgbésẹ̀ pàtó láti parí iṣẹ́ kan"], answer: 3, why: "Algorithm jẹ́ ètò ìgbésẹ̀-sí-ìgbésẹ̀." },
      { objective: "O3", q: "Kí ló dé tí a fi ń kọ́kọ́ dán algorithm wò lórí ìwé?", options: ["Láti rí àṣìṣe kí a tó kọ kóòdù", "Nítorí robot nílò ìwé", "Láti mú kí ó gùn sí i", "Òfin ló pa á láṣẹ"], answer: 0, why: "Títẹ̀lé e ń jẹ́ kí a rí àṣìṣe ní kùtùkùtù." },
      { objective: "O3", q: "\"Tí ògiri bá sún mọ́, dúró; bí bẹ́ẹ̀ kọ́, wakọ̀\" jẹ́:", options: ["Loop", "Ìdìmú", "Ìpinnu if-then", "Pápá ìṣeré"], answer: 2, why: "Ó ń yan láàárín ohun méjì gẹ́gẹ́ bí ipò kan ṣe rí." },
      { objective: "O3", q: "Flowchart ń fi algorithm hàn pẹ̀lú:", options: ["Àmì orin", "Fọ́tò", "Ọ̀rọ̀ aṣínà", "Àpótí àti ọfà"], answer: 3, why: "Flowchart ń ya ìgbésẹ̀ bí àpótí tí ọfà so pọ̀." },
      { objective: "O4", q: "Block coding túmọ̀ sí:", options: ["Títẹ kóòdù gígùn nìkan", "Dídí ojú-òpó wẹ́ẹ̀bù", "Síso blọ́ọ̀kù tí a lè rí pọ̀ láti kọ ètò", "Kíkọ́ nǹkan pẹ̀lú blọ́ọ̀kù igi"], answer: 2, why: "Blọ́ọ̀kù jẹ́ ègé kóòdù tí a lè rí." },
      { objective: "O4", q: "Ìgbà mélòó ni o máa tún \"síwájú, yí sí ọ̀tún 90\" ṣe láti wakọ̀ ní onígun mẹ́rin?", options: ["2", "3", "4", "10"], answer: 2, why: "Onígun mẹ́rin ní ẹ̀gbẹ́ mẹ́rin àti yíyí mẹ́rin." },
      { objective: "O4", q: "Kí ló dé tí o fi máa ṣe ètò rẹ lẹ́yìn ìyípadà kékeré kọ̀ọ̀kan?", options: ["Láti mọ ìyípadà tí ó fa ohun tí ó ṣẹlẹ̀", "Láti lo bátìrì púpọ̀ sí i", "Nítorí ó pọn dandan", "Láti pa blọ́ọ̀kù rẹ́"], answer: 0, why: "Ìgbésẹ̀ kékeré ń jẹ́ kí ìṣòro rọrùn láti rí." },
      { objective: "O5", q: "Forever loop:", options: ["Ń ṣiṣẹ́ lẹ́ẹ̀kan", "Ń pa robot", "Ń tún ara rẹ̀ ṣe títí ètò yóò fi dúró", "Jẹ́ sensor"], answer: 2, why: "Ó ń tún ara rẹ̀ ṣe léraléra." },
      { objective: "O5", q: "Debugging túmọ̀ sí:", options: ["Wíwá àti títún àṣìṣe inú ètò ṣe", "Gbígbá kòkòrò kúrò lára robot", "Ríra robot tuntun", "Pípa sensor"], answer: 0, why: "Bug jẹ́ àṣìṣe inú ètò." },
      { objective: "O5", q: "Robot rẹ kì í dúró níbi ògiri láéláé. Kí ni àṣìṣe tí ó ṣeé ṣe?", options: ["Àwọ̀ robot kò tọ́", "Ojú-iboju mọ́lẹ̀ jù", "Pápá ìṣeré dára jù", "Àyẹ̀wò sensor wà lẹ́yìn òde loop tàbí ó ń lo ìjìnnà tí kò tọ́"], answer: 3, why: "Ibi tí kò tọ́ tàbí nọ́mbà tí kò tọ́ nínú àyẹ̀wò sensor jẹ́ àṣìṣe tí ó wọ́pọ̀." },
      { objective: "O6", q: "Èwo ni iṣẹ́ gidi tí ó jẹ mọ́ robot?", options: ["Awòràwọ̀ robot", "Onímọ̀ ẹ̀rọ robot", "Akun sensor nìkan", "Kò sí èyíkéyìí"], answer: 1, why: "Onímọ̀ ẹ̀rọ robot ń gbé robot kalẹ̀, wọ́n ń tọ́jú wọn, wọ́n sì ń tún wọn ṣe." },
      { objective: "O6", q: "Cobot jẹ́:", options: ["Robot ìdáná oúnjẹ nìkan", "Robot tí a ṣe láti ṣiṣẹ́ nítòsí ènìyàn", "Robot tí ó ti bàjẹ́", "Robot tí kò ní sensor"], answer: 1, why: "A kọ́ robot alájọṣiṣẹ́ láti ṣiṣẹ́ lẹ́gbẹ̀ẹ́ ènìyàn." },
      { objective: "O6", q: "O rí apá robot kan tí ń yára ṣiṣẹ́ lẹ́yìn ìlà tí a sàmì sí. Kí ni o máa ṣe?", options: ["Wọlé láti wò ó dáadáa", "Fọwọ́ kàn án láti dán an wò", "Pa àwọn sensor rẹ̀", "Yẹra fún agbègbè tí a sàmì sí kí o sì tẹ̀lé òfin ààbò ibẹ̀"], answer: 3, why: "Agbègbè tí a sàmì sí ń pa ènìyàn mọ́ kúrò lọ́nà robot." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      12,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ètò onígun mẹ́rin",
        objective: "O4",
        notYet: "Robot kò wakọ̀ ní onígun mẹ́rin, tàbí ètò náà kò ní loop.",
        meets: "Blọ́ọ̀kù repeat mú kí robot wakọ̀ ní onígun mẹ́rin tí ó parí sí nítòsí ìbẹ̀rẹ̀.",
        exceeds: "A ṣàtúnṣe ìjìnnà àti yíyí kí onígun mẹ́rin náà lè mọ́, kí ó sì dọ́gba."
      },
      {
        name: "Ètò tí ó ń yẹra fún ògiri",
        objective: "O5",
        notYet: "Robot kọlu ògiri tàbí kò gbéra mọ́.",
        meets: "Forever loop pẹ̀lú if-then-else: ó ń dúró, ó ń yípadà níbi ògiri, lẹ́yìn náà ó ń máa wakọ̀ lọ.",
        exceeds: "Ó ń ṣiṣẹ́ láti ibi ìbẹ̀rẹ̀ ju ẹyọ kan lọ nínú pápá ìṣeré."
      },
      {
        name: "Ìdánwò àti àtúnṣe àṣìṣe",
        objective: "O5",
        notYet: "A kò rí àṣìṣe kankan, a kò sì tún èyíkéyìí ṣe.",
        meets: "A rí àṣìṣe kan ó kéré tán, a sì tún un ṣe nípa yíyí nǹkan kan padà lẹ́ẹ̀kan.",
        exceeds: "Akẹ́kọ̀ọ́ lè ṣàlàyé ohun tí ó fa àṣìṣe náà àti bí òun ṣe rí i."
      },
      {
        name: "Ètò kí kóòdù tó dé",
        objective: "O3",
        notYet: "Kò sí ètò tí a kọ sílẹ̀, tàbí ìgbésẹ̀ bí \"lọ díẹ̀\".",
        meets: "Ètò ní ọ̀rọ̀ tó rọrùn pẹ̀lú ìgbésẹ̀ pàtó, loop kan àti if-then kan.",
        exceeds: "A tẹ̀lé ètò náà lórí ìwé, a sì tún un ṣe kí a tó kọ kóòdù."
      },
      {
        name: "Mọ̀, ronú, ṣe: àlàyé",
        objective: "O1",
        notYet: "Gbólóhùn mẹ́ta náà kò sí, tàbí wọn kò dárúkọ sensor.",
        meets: "Gbólóhùn mẹ́ta sọ ohun tí robot ń mọ̀, bí ó ṣe ń pinnu àti bí ó ṣe ń ṣe.",
        exceeds: "Ó tún sọ bóyá robot náà ń lo AI tàbí òfin tó rọrùn, àti ìdí rẹ̀."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n darapọ̀ mọ́ ẹgbẹ́ robot, kíláàsì kóòdù tàbí ètò STEM láàárín ọjọ́ 60",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ ẹ̀rọ ìgbàlódé Koach Learn míì láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn nífẹ̀ẹ́ sí ọ̀nà iṣẹ́ onímọ̀ ẹ̀rọ robot, kóòdù tàbí ẹnjiníà (ìwádìí àtẹ̀lé)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà, Chromebook tàbí tablet tí ó ní browser àti íńtánẹ́ẹ̀tì",
      "Irinṣẹ́ robot orí kọ̀mpútà ọ̀fẹ́ bí VEXcode VR (vr.vex.com), tàbí èyí tí ilé-ẹ̀kọ́ tàbí ilé-ìkàwé fẹ́ràn",
      "Ìwé àti gègé fún algorithm àti flowchart",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe kóòdù, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan; fi àwọn blọ́ọ̀kù àkọ́kọ́ hàn lórí ojú-iboju tí gbogbo ènìyàn ń wò.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣe algorithm bí eré: ẹnì kan ka ìgbésẹ̀, ẹlòmíì sì tẹ̀lé wọn gẹ́lẹ́, láti fi hàn ìdí tí ìgbésẹ̀ fi gbọ́dọ̀ jẹ́ pàtó.",
      "So akẹ́kọ̀ọ́ pọ̀ ní méjì-méjì fún debugging: ẹnì kan ń ṣe ètò náà, ẹlòmíì sì ń ṣọ́ àṣìṣe.",
      "Tí ẹ bá ń ṣèbẹ̀wò sí ibi tí robot gidi wà, ẹ tẹ̀lé òfin ààbò ibẹ̀, kí ẹ sì dúró pẹ̀lú atọ́nà nígbà gbogbo.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
