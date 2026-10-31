"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-ai-team-sports.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-team-sports-yo",
  lang: "yo",
  translationOf: "athletes-ai-team-sports",
  category: "Athletes",
  name: "AI fún Eré Ìdárayá Ẹgbẹ́",
  skills: "Kíkọ àkọsílẹ̀ ìṣirò ẹgbẹ́ tó rọrùn, Wíwá àṣà àwọn akọni-eré àti eré, Kíkọ àkópọ̀ ìwádìí alátakò pẹ̀lú AI, Ṣíṣètò ìbánisọ̀rọ̀ ẹgbẹ́, Dídáàbò bo ìsọfúnni àdáni àwọn eléré àti ṣíṣe ẹ̀tọ́",
  outcome: "lo spreadsheet àjọlò àti olùrànlọ́wọ́ AI láti kọ àkọsílẹ̀ ìṣirò tó rọrùn ti ẹgbẹ́, rí àṣà kan nínú àwọn tí ń ṣeré pọ̀ tàbí nínú eré, kọ àkópọ̀ ìwádìí alátakò ojú-ewé kan, kí o sì pín in fún ẹgbẹ́ ní ọ̀nà tí ó ń dáàbò bo ìsọfúnni àdáni àwọn eléré.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olùkọ́ni (coach), alákòóso ẹgbẹ́, olórí ẹgbẹ́ (captain) àti àwọn tí ń ṣe ìtúpalẹ̀ ìṣirò ẹgbẹ́ nínú eré ìdárayá ẹgbẹ́ èyíkéyìí: basketball, bọ́ọ̀lù-àfẹsẹ̀gbá (soccer), volleyball, football, hockey, baseball, softball àti àwọn míì.",
    "Àwọn ẹgbẹ́ ńlá ní ẹ̀ka tí ń ṣe ìtúpalẹ̀ ìṣirò. O lè ṣe èyí tó rọrùn pẹ̀lú spreadsheet àti olùrànlọ́wọ́ AI ọ̀fẹ́: kọ ohun tó ṣe pàtàkì sílẹ̀, wá àṣà, ṣèwádìí nípa alátakò, kí o sì bá àwọn eléré àti ẹbí wọn sọ̀rọ̀ dáadáa.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́. Ìṣirò ń ran ìpinnu olùkọ́ni lọ́wọ́; kò lè rọ́pò rẹ̀ láéláé."
  ],
  finalTask: "Fún ẹgbẹ́ rẹ, ṣètò ìwé ìṣirò àjọlò fún eré tàbí ìdánrawò mẹ́ta, wá àṣà kan nínú àwọn tí ń ṣeré pọ̀ tàbí nínú eré pẹ̀lú ìrànlọ́wọ́ AI, kọ àkópọ̀ ìwádìí ojú-ewé kan nípa alátakò gidi kan láti inú fídíò eré tàbí èsì tí ó wà ní gbangba, kí o sì kọ ọ̀rọ̀ sí ẹgbẹ́ tí ó pín kókó náà láìfi ìsọfúnni àdáni eléré kankan hàn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olùkọ́ni, alákòóso ẹgbẹ́, olórí ẹgbẹ́ àti àwọn tí ń ṣe ìtúpalẹ̀ ìṣirò ẹgbẹ́ nínú eré ìdárayá ẹgbẹ́ èyíkéyìí, bí basketball, bọ́ọ̀lù-àfẹsẹ̀gbá, volleyball, football, hockey, baseball àti softball.",
    startingPoint: "Wọ́n mọ eré wọn àti ẹgbẹ́ wọn dáadáa, wọ́n ń lo smartphone, bóyá spreadsheet pẹ̀lú. Ọ̀pọ̀ ń kọ ìṣirò díẹ̀ sílẹ̀ tàbí wọn kì í kọ ọ́ déédéé, wọ́n ń ṣèwádìí alátakò láti inú ìrántí, wọn kò sì tíì ṣe òfin fún pínpín ìsọfúnni eléré tàbí lílo AI pẹ̀lú rẹ̀.",
    gap: "Láìsí ìṣirò àti ìwádìí déédéé, àwọn ẹgbẹ́ máa ń pàdánù àṣà tí ó lè yí ìdánrawò àti ètò eré padà, pínpín láìṣọ́ra sì lè fi ìsọfúnni àdáni àwọn eléré hàn. Ìwé àjọlò tó rọrùn, lílo AI pẹ̀lú ìṣọ́ra àti òfin ìpamọ́ tó yé ń ran àwọn ẹgbẹ́ lọ́wọ́ láti tẹ̀síwájú nígbà tí wọ́n ń dáàbò bo àwọn eléré.",
    constraints: [
      "Ọ̀rọ̀ tó rọrùn, nǹkan bí ìpele kíkàwé kíláàsì 8",
      "Fóònù tàbí kọ̀mpútà tí ó ní Google Sheets ọ̀fẹ́ àti olùrànlọ́wọ́ AI ọ̀fẹ́",
      "Nǹkan bí ìṣẹ́jú 60 ti ẹ̀kọ́, pẹ̀lú ìṣirò láti inú eré tàbí ìdánrawò mẹ́ta",
      "Òfin ilé-ìwé, líìgì àti club nípa ìsọfúnni akẹ́kọ̀ọ́, app tí a fọwọ́ sí, pàṣípààrọ̀ fídíò àti kíkàn sí àwọn ọmọdé",
      "Kò sí orúkọ kíkún, ìsọfúnni ìlera, ẹ̀kọ́ tàbí ìsọfúnni ìkànsí nínú ìwé ìṣirò tàbí irinṣẹ́ AI"
    ],
    prerequisites: "Kò sí. Ẹ̀kọ́ \"Video Analysis and Game Intelligence\" ń ṣèrànwọ́ fún sísàmì sí fídíò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá mọ ìdánimọ̀ ẹgbẹ́ rẹ", action: "yan ìṣirò ẹgbẹ́ mẹ́ta sí márùn-ún kí o sì kọ ìtumọ̀ tó yé fún ọ̀kọ̀ọ̀kan", standard: "tí a lè gba ìṣirò kọ̀ọ̀kan ní gbogbo eré, tí a sì yan ẹnì kan láti gbà á" },
    { id: "O2", condition: "Pẹ̀lú Google Sheets", action: "ṣètò ìwé ìṣirò ẹgbẹ́ àjọlò tí ó ní tab àkópọ̀ àti ìwọlé tí kò léwu", standard: "tí àwọn òṣìṣẹ́ tí ń gba ìṣirò nìkan lè ṣàtúnṣe, àwọn yòókù lè wò nìkan, kì í ṣe ti gbangba láéláé, kò sì sí ìsọfúnni ìlera, máàkì tàbí ìkànsí" },
    { id: "O3", condition: "Tí o bá ní ìṣirò láti inú eré tàbí ìdánrawò mẹ́ta ó kéré tán", action: "dá àṣà kan mọ̀ nínú àwọn tí ń ṣeré pọ̀ tàbí nínú eré nípa títò, àlẹ̀mọ́ (filter) tàbí olùrànlọ́wọ́ AI", standard: "pẹ̀lú nọ́mbà tàbí lẹ́tà àkọ́kọ́ orúkọ eléré nìkan, a ti ṣàyẹ̀wò ìṣirò AI, a sì ka ìwọ̀n data kékeré sí ìbéèrè" },
    { id: "O4", condition: "Tí o bá ní èsì ti gbangba àti fídíò tí a gbà láàyè nípa alátakò gidi kan", action: "kọ àkópọ̀ ìwádìí ojú-ewé kan nípa ìkọlù wọn, ààbò wọn, àwọn eléré pàtàkì wọn àti kókó mẹ́ta láti ṣẹ́gun wọn", standard: "tí kókó kọ̀ọ̀kan wá láti inú àkọsílẹ̀ rẹ, tí a sì tẹ̀lé òfin ìwádìí líìgì" },
    { id: "O5", condition: "Tí o bá ní data àti àkópọ̀ ìwádìí rẹ", action: "kọ ọ̀rọ̀ kúkúrú sí ẹgbẹ́ tí ó ní kókó kan sí mẹ́ta", standard: "tí a fi ránṣẹ́ nípasẹ̀ ọ̀nà ìbánisọ̀rọ̀ ẹgbẹ́ tí a fọwọ́ sí, tí ìmọ̀ràn ẹnì kọ̀ọ̀kan sì wà ní ìkọ̀kọ̀" },
    { id: "O6", condition: "Fún data ẹgbẹ́ rẹ", action: "kọ òfin data ẹgbẹ́ tí ó ń dáàbò bo ìsọfúnni àdáni eléré tí ó sì ń jẹ́ kí ìpinnu wà ní ẹ̀tọ́", standard: "tí ó sọ ohun tí a ó gbà, ibi tí a ó tọ́jú rẹ̀ sí, ohun tí kò gbọ́dọ̀ wọ inú AI láéláé, ẹni tí ń fọwọ́ sí app, àti bí a ó ṣe ṣàlàyé ìpinnu fún àwọn eléré" }
  ],
  chapters: [
    {
      name: "Orí 1: Data ẹgbẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yíyan ìṣirò ẹgbẹ́ tó ṣe pàtàkì",
          minutes: 5,
          goal: "Yan ìṣirò ẹgbẹ́ mẹ́ta sí márùn-ún tí ó bá bí ẹgbẹ́ rẹ ṣe fẹ́ ṣeré mu.",
          text: [
            "Ìtúpalẹ̀ ìṣirò ẹgbẹ́ bẹ̀rẹ̀ láti ìdánimọ̀ ẹgbẹ́ rẹ. Ẹgbẹ́ basketball tí ń sáré kọlu kíákíá (fast break) ń bìkítà nípa àmì tí wọ́n gbà nígbà ìyípadà àti bọ́ọ̀lù tí wọ́n pàdánù. Ẹgbẹ́ bọ́ọ̀lù-àfẹsẹ̀gbá tí ń di bọ́ọ̀lù mú ń bìkítà nípa pásì tí ó dé àti ìbọn láti inú àpótí. Ẹgbẹ́ volleyball ń bìkítà nípa gbígba serve àti ìpín ọgọ́rùn-ún side-out.",
            "Yan ìṣirò mẹ́ta sí márùn-ún tí o lè gbà ní gbogbo eré pẹ̀lú àwọn ènìyàn tí o ní: alákòóso, òbí olùyọ̀ǹda, eléré tí ó farapa, tàbí fídíò lẹ́yìn eré.",
            "Kọ ìtumọ̀ tó yé fún ọ̀kọ̀ọ̀kan kí gbogbo ènìyàn lè kà á lọ́nà kan náà: \"Bọ́ọ̀lù tí a pàdánù (turnover) ni ìgbà èyíkéyìí tí a pàdánù bọ́ọ̀lù láìjẹ́ pé a gbá a sí ibi àfojúsùn.\""
          ],
          steps: ["Kọ ìdánimọ̀ ẹgbẹ́ rẹ ní gbólóhùn kan.", "Kọ àwọn ìṣirò tí ó bá a mu sílẹ̀.", "Yan mẹ́ta sí márùn-ún tí o lè gbà ní gbogbo eré.", "Kọ ìtumọ̀ tó yé fún ọ̀kọ̀ọ̀kan.", "Yan ẹni tí yóò gbà wọ́n."],
          words: [["Ìtúpalẹ̀ ìṣirò ẹgbẹ́", "lílo nọ́mbà nípa ẹgbẹ́ láti mọ bí ó ṣe ń ṣeré kí ó sì dára sí i."], ["Ìtumọ̀", "òfin tó yé nípa ohun tí a ń kà gan-an."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú ìdánimọ̀", bullets: ["Ìkọlù kíákíá? Dídi bọ́ọ̀lù mú? Ààbò lákọ̀ọ́kọ́?", "Ìṣirò tí ó bá bí ẹ ṣe ń ṣeré mu"] },
            { title: "Yan ìṣirò 3-5", bullets: ["Tí o lè gbà ní gbogbo eré", "Pẹ̀lú àwọn ènìyàn tí o ní"] },
            { title: "Ṣàlàyé ọ̀kọ̀ọ̀kan", bullets: ["Gbogbo ènìyàn ń kà á lọ́nà kan náà", "Yan ẹni tí yóò gbà á"] }
          ],
          tryIt: "Kọ ìdánimọ̀ ẹgbẹ́ rẹ ní gbólóhùn kan. Ní kí olùrànlọ́wọ́ AI dábàá ìṣirò tí ó bá a mu, lẹ́yìn náà yan mẹ́ta sí márùn-ún kí o sì kọ ìtumọ̀ wọn.",
          youCanNow: "yan ìṣirò ẹgbẹ́ tí ó bá bí ẹgbẹ́ rẹ ṣe ń ṣeré mu, kí o sì ṣàlàyé wọn.",
          quickCheck: [
            { objective: "O1", q: "Ìṣirò wo ló bá ẹgbẹ́ bọ́ọ̀lù-àfẹsẹ̀gbá tí ń di bọ́ọ̀lù mú mu?", options: ["Pásì tí ó dé àti ìbọn láti inú àpótí", "Free throw", "Gbígba serve", "Home run"], answer: 0, why: "Ìṣirò gbọ́dọ̀ bá bí ẹgbẹ́ rẹ ṣe fẹ́ ṣeré mu." },
            { objective: "O1", q: "Olùyọ̀ǹda méjì ń ka bọ́ọ̀lù tí a pàdánù lọ́nà ọ̀tọ̀ọ̀tọ̀. Kí ni o máa ṣe?", options: ["Mú ààrin nọ́mbà wọn", "Dẹ́kun kíka bọ́ọ̀lù tí a pàdánù", "Jẹ́ kí ẹnì kọ̀ọ̀kan kà á bí ó ti fẹ́", "Kọ ìtumọ̀ kan tó yé tí gbogbo ènìyàn yóò lò"], answer: 3, why: "Ìtumọ̀ tó yé ń jẹ́ kí gbogbo ènìyàn kà á lọ́nà kan náà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ìwé ìṣirò ẹgbẹ́ àjọlò",
          minutes: 5,
          goal: "Ṣètò Google Sheet àjọlò fún ìṣirò ẹgbẹ́ pẹ̀lú ìwọlé tí kò léwu.",
          text: [
            "Lo Google Sheet kan tí ó ní tab fún eré kọ̀ọ̀kan, tàbí tábìlì gígùn kan tí ó ní àwọn ọ̀wọ̀n wọ̀nyí: Ọjọ́, Alátakò, Ìpín eré (quarter tàbí set), Àwọn tí ń ṣeré (lineup), àti ìṣirò rẹ. Tab àkópọ̀ lè ṣírò àpapọ̀ gbogbo sáà.",
            "Pín in fún àwọn òṣìṣẹ́ olùkọ́ni àti alákòóso tí ó nílò láti ṣàtúnṣe nìkan. Lo link wíwò-nìkan fún àwọn yòókù, má sì ṣe sọ ìwé tí ó ní ìsọfúnni eléré di ti gbangba lórí ayélujára láéláé.",
            "Ìṣirò eré nìkan ni kí o fi sínú ìwé yìí. Má ṣe fi àkọsílẹ̀ ìlera, máàkì ilé-ìwé, ìsọfúnni ẹbí tàbí ìsọfúnni ìkànsí sínú ìwé ìṣirò ẹgbẹ́; ibi wọn ni àwọn ètò ìjọba ilé-ìwé rẹ tí ó ní ààbò ìpamọ́ tó yẹ."
          ],
          steps: ["Ṣẹ̀dá Google Sheet tí ó ní àwọn ọ̀wọ̀n tó yé.", "Fi tab àkópọ̀ kún un fún àpapọ̀ sáà.", "Fún àwọn òṣìṣẹ́ tí ń gba ìṣirò nìkan ní ìwọlé àtúnṣe.", "Lo wíwò-nìkan fún àwọn yòókù; kì í ṣe ti gbangba láéláé.", "Má ṣe fi ìsọfúnni ìlera, máàkì àti ìkànsí sínú rẹ̀."],
          words: [["Ìwé àjọlò", "spreadsheet tí ọ̀pọ̀ ènìyàn lè ṣí, tí ìwọ ń ṣàkóso ìwọlé rẹ̀."], ["Wíwò-nìkan (view-only)", "àwọn ènìyàn lè rí i ṣùgbọ́n wọn kò lè yí i padà."]],
          slides: [
            { title: "Ìtò ìwé náà", bullets: ["Ọjọ́, Alátakò, Ìpín eré, Àwọn tí ń ṣeré", "Ìṣirò 3-5 rẹ", "Tab àkópọ̀ fún gbogbo sáà"] },
            { title: "Ìwọlé", bullets: ["Àtúnṣe: òṣìṣẹ́ tí ń gba ìṣirò", "Wíwò-nìkan fún àwọn yòókù", "Kì í ṣe ti gbangba láéláé"] },
            { title: "Má ṣe fi sínú rẹ̀", bullets: ["Àkọsílẹ̀ ìlera", "Máàkì àti ìsọfúnni ẹbí", "Ìsọfúnni ìkànsí"] }
          ],
          tryIt: "Ṣẹ̀dá ìwé ìṣirò ẹgbẹ́ rẹ, tẹ eré kan tí ó ti kọjá sínú rẹ̀ láti inú ìrántí tàbí box score, kí o sì ṣàyẹ̀wò ètò pínpín rẹ̀.",
          youCanNow: "ṣètò ìwé ìṣirò ẹgbẹ́ àjọlò pẹ̀lú ìwọlé tí kò léwu.",
          quickCheck: [
            { objective: "O2", q: "Kí ni tab àkópọ̀ nínú ìwé ẹgbẹ́ ń ṣe?", options: ["Ó ń tọ́jú nọ́mbà fóònù àwọn eléré", "Ó ń ṣírò àpapọ̀ gbogbo sáà", "Ó ń fi data pamọ́", "Ó ń fi ọ̀rọ̀ ránṣẹ́ sí àwọn eléré"], answer: 1, why: "Tab àkópọ̀ lè ṣírò àpapọ̀ sáà láti inú eré kọ̀ọ̀kan." },
            { objective: "O2", q: "Òbí kan béèrè link ìwé ìṣirò ẹgbẹ́. Kí ni o máa pín?", options: ["Ìwọlé àtúnṣe", "Link ti gbangba lórí ayélujára", "Link wíwò-nìkan, tí òfin yín bá gbà á láàyè", "Gbogbo fódà tí ó ní àkọsílẹ̀ ìlera"], answer: 2, why: "Lo wíwò-nìkan fún àwọn tí kì í gba ìṣirò, má sì sọ ọ́ di ti gbangba láéláé." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wíwá àṣà nínú àwọn tí ń ṣeré pọ̀ àti nínú eré",
          minutes: 6,
          goal: "Lo ìwé rẹ àti olùrànlọ́wọ́ AI láti rí àṣà kan nínú àwọn tí ń ṣeré pọ̀ tàbí nínú eré.",
          text: [
            "Lẹ́yìn eré díẹ̀, wá àṣà: Àwọn eléré wo ni, tí wọ́n bá jọ wà nínú pápá, ń gba àmì ju alátakò lọ? Ìpín eré (quarter tàbí set) wo ni a ti ń ní ìṣòro? Irú eré wo ló ń mú àmì tó pọ̀ jù wá?",
            "Lo títò, àlẹ̀mọ́ (filter) tàbí pivot table nínú Google Sheets. Tàbí da tábìlì náà kọ (pẹ̀lú lẹ́tà àkọ́kọ́ orúkọ tàbí nọ́mbà eléré dípò orúkọ kíkún) sínú olùrànlọ́wọ́ AI kí o sì béèrè: \"Àwọn lineup wo ló ní ìyàtọ̀ àmì tó dára jù? Ìpín eré wo ló lágbára jù díẹ̀? Fi ìṣirò rẹ hàn.\" Fi ìṣirò rẹ̀ wé ìwé náà.",
            "Data kékeré máa ń ṣini lọ́nà. Lineup tí ó ṣeré fún ìṣẹ́jú mẹ́rin kò tíì fìdí múlẹ̀. Ka àṣà sí ìbéèrè fún ìdánrawò àti fídíò, kì í ṣe ìdáhùn ìkẹyìn; olùkọ́ni ló sì ń pinnu."
          ],
          steps: ["Tò tàbí ṣe àlẹ̀mọ́ nípa lineup àti ìpín eré.", "Lo nọ́mbà tàbí lẹ́tà àkọ́kọ́ eléré, kì í ṣe orúkọ kíkún, pẹ̀lú AI.", "Ní kí AI wá àṣà kí ó sì fi ìṣirò rẹ̀ hàn.", "Ṣàyẹ̀wò ìṣirò rẹ̀.", "Sọ àṣà kan di ìbéèrè fún ìdánrawò tàbí fídíò."],
          words: [["Ìyàtọ̀ àmì (point differential)", "àmì tí a gbà yọ àmì tí wọ́n gbà lọ́wọ́ wa."], ["Pivot table", "irinṣẹ́ spreadsheet tí ó ń kó data jọ tí ó sì ń ṣírò àpapọ̀, bí àmì fún lineup kọ̀ọ̀kan."], ["Ìwọ̀n data (sample size)", "bí data rẹ ṣe pọ̀ tó; data kékeré lè ṣini lọ́nà."]],
          slides: [
            { title: "Àwọn ìbéèrè nípa àṣà", bullets: ["Àwọn lineup wo ló ń gba àmì ju alátakò lọ?", "Ìpín eré wo ló lágbára jù díẹ̀?", "Irú eré wo ló ń mú àmì tó pọ̀ jù wá?"] },
            { title: "Wá wọn", bullets: ["Títò, àlẹ̀mọ́ tàbí pivot table", "AI pẹ̀lú lẹ́tà àkọ́kọ́, kì í ṣe orúkọ kíkún", "\"Fi ìṣirò rẹ hàn\" kí o sì ṣàyẹ̀wò rẹ̀"] },
            { title: "Ṣọ́ra", bullets: ["Data kékeré máa ń ṣini lọ́nà", "Àṣà jẹ́ ìbéèrè", "Olùkọ́ni ló ń pinnu"] }
          ],
          tryIt: "Tẹ eré méjì ó kéré tán sínú ìwé rẹ. Ní kí olùrànlọ́wọ́ AI wá ìpín eré tàbí lineup tó dára jù àti èyí tó burú jù, kí ó sì fi ìṣirò rẹ̀ hàn. Ṣàyẹ̀wò rẹ̀ kí o sì kọ ìbéèrè kan fún ìdánrawò.",
          youCanNow: "wá àṣà nínú lineup àti nínú eré, kí o sì kà wọ́n sí ìbéèrè fún olùkọ́ni.",
          quickCheck: [
            { objective: "O3", q: "Kí ni o yẹ kí o ní kí AI ṣe pẹ̀lú wíwá àṣà lineup?", options: ["Fi ìṣirò rẹ̀ hàn", "Yan àwọn tí yóò bẹ̀rẹ̀ eré", "Tò àwọn eléré ní gbangba", "Méfò àwọn eré tí ó sọnù"], answer: 0, why: "Ní kí AI fi ìṣirò rẹ̀ hàn kí o lè fi wé ìwé náà." },
            { objective: "O3", q: "Ìpín eré kẹta yín ń lágbára díẹ̀ nínú gbogbo eré títí di ìsinsìnyí. Kí ni o máa ṣe pẹ̀lú àṣà yìí?", options: ["Jókòó gbogbo ẹgbẹ́ sí bẹ́ǹṣì", "Fi í sórí ayélujára", "Fojú fò ó", "Mú un lọ sí ìdánrawò àti fídíò bí ìbéèrè fún olùkọ́ni"], answer: 3, why: "Ka àṣà sí ìbéèrè fún ìdánrawò àti fídíò; olùkọ́ni ló ń pinnu." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Data ẹgbẹ́",
        questions: [
          { objective: "O1", q: "Níbo ni ìtúpalẹ̀ ìṣirò ẹgbẹ́ yẹ kí ó ti bẹ̀rẹ̀?", options: ["Ohunkóhun tí àwọn ẹgbẹ́ ńlá ń kọ sílẹ̀", "Gbogbo ìṣirò tí ó ṣeé ṣe", "Ìdánimọ̀ ẹgbẹ́ rẹ àti bí o ṣe fẹ́ ṣeré", "Nọ́mbà lórí ìkànnì àjọlò"], answer: 2, why: "Ìṣirò gbọ́dọ̀ bá ọ̀nà ìṣeré yín mu." },
          { objective: "O1", q: "Kí ló dé tí a fi ń kọ ìtumọ̀ fún ìṣirò kọ̀ọ̀kan?", options: ["Kí gbogbo ènìyàn lè kà á lọ́nà kan náà", "Kí ó lè gùn sí i", "Láti da alátakò rú", "Kò pọn dandan"], answer: 0, why: "Kíkà lọ́nà kan náà ń jẹ́ kí data ṣeé gbẹ́kẹ̀ lé." },
          { objective: "O2", q: "Ta ni ó yẹ kí ó ní ìwọlé àtúnṣe sí ìwé ìṣirò ẹgbẹ́?", options: ["Gbogbo ènìyàn lórí íńtánẹ́ẹ̀tì", "Àwọn olùkọ́ni alátakò", "Àwọn olólùfẹ́ ẹgbẹ́", "Àwọn òṣìṣẹ́ tí ń gba ìṣirò"], answer: 3, why: "Fi àtúnṣe mọ àwọn tí ó nílò rẹ̀ nìkan." },
          { objective: "O2", q: "Èwo ni KÒ gbọ́dọ̀ wọ inú ìwé ìṣirò ẹgbẹ́?", options: ["Àmì ní ìpín eré kọ̀ọ̀kan", "Àkọsílẹ̀ ìlera eléré kan", "Bọ́ọ̀lù tí a pàdánù", "Àwọn lineup"], answer: 1, why: "Ìsọfúnni ìlera wà fún àwọn ètò ìjọba tí ó ní ààbò." },
          { objective: "O3", q: "Lineup kan ṣeré fún ìṣẹ́jú mẹ́rin, ó sì jẹ́ +6. O yẹ kí o:", options: ["Fi wọ́n bẹ̀rẹ̀ gbogbo eré", "Kà á sí ìbéèrè tí o máa wò sí i", "Fojú fo gbogbo data", "Fi í sórí ayélujára"], answer: 1, why: "Data kékeré lè ṣini lọ́nà." }
        ]
      }
    },
    {
      name: "Orí 2: Ìwádìí alátakò àti ìbánisọ̀rọ̀",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣèwádìí alátakò pẹ̀lú AI",
          minutes: 6,
          goal: "Kọ àkópọ̀ ìwádìí alátakò ojú-ewé kan láti inú ìsọfúnni ti gbangba.",
          text: [
            "Ìwádìí alátakò (scouting) túmọ̀ sí kíkọ́ bí alátakò ṣe ń ṣeré kí ẹ tó kojú wọn. Lo orísun ti gbangba: èsì àtẹ̀yìnwá, box score tí a ti tẹ̀ jáde, ojú-ewé ìṣirò líìgì, àti fídíò eré tí ẹgbẹ́ rẹ ní tàbí tí a fi sí gbangba. Tẹ̀lé òfin líìgì rẹ nípa pàṣípààrọ̀ fídíò àti ìwádìí alátakò.",
            "Wò ó pẹ̀lú ìbéèrè mẹ́ta: Kí ni wọ́n ń ṣe jù nínú ìkọlù? Kí ni wọ́n ń ṣe jù nínú ààbò? Ta ni àwọn eléré pàtàkì wọn, kí sì ni àwọn eléré wọ̀nyẹn fẹ́ràn láti ṣe?",
            "Lẹ̀ àkọsílẹ̀ rẹ mọ́ inú olùrànlọ́wọ́ AI kí o sì béèrè: \"Sọ àkọsílẹ̀ ìwádìí yìí di àkópọ̀ ojú-ewé kan: ìkọlù wọn, ààbò wọn, àwọn eléré pàtàkì, kókó mẹ́ta láti ṣẹ́gun wọn. Ọ̀rọ̀ kúkúrú.\" Ṣàyẹ̀wò pé kókó kọ̀ọ̀kan wá láti inú àkọsílẹ̀ rẹ, kì í ṣe ìméfò AI."
          ],
          steps: ["Kó èsì, ìṣirò àti fídíò tí a gbà láàyè jọ.", "Wò ó pẹ̀lú ìbéèrè mẹ́ta.", "Kọ àkọsílẹ̀ pẹ̀lú àkókò inú fídíò (timestamp).", "Ní kí AI ṣe àkópọ̀ ojú-ewé kan láti inú àkọsílẹ̀ rẹ nìkan.", "Ṣàyẹ̀wò kókó kọ̀ọ̀kan pẹ̀lú àkọsílẹ̀ rẹ."],
          words: [["Ìròyìn ìwádìí alátakò (scouting report)", "àkópọ̀ bí alátakò ṣe ń ṣeré àti bí a ṣe lè ṣẹ́gun wọn."], ["Ìtẹ̀sí (tendency)", "ohun tí ẹgbẹ́ tàbí eléré kan máa ń ṣe lọ́pọ̀ ìgbà ní ipò kan."]],
          slides: [
            { title: "Orísun ti gbangba", bullets: ["Èsì àti box score", "Ojú-ewé ìṣirò líìgì", "Fídíò eré tí a gbà láàyè"] },
            { title: "Ìbéèrè mẹ́ta", bullets: ["Ìkọlù wọn", "Ààbò wọn", "Àwọn eléré pàtàkì àti ohun tí wọ́n fẹ́ràn láti ṣe"] },
            { title: "Àkópọ̀ AI", bullets: ["Láti inú àkọsílẹ̀ rẹ nìkan", "Kókó mẹ́ta láti ṣẹ́gun wọn", "Ṣàyẹ̀wò kókó kọ̀ọ̀kan"] }
          ],
          tryIt: "Yan alátakò gidi kan tí ẹ máa kojú láìpẹ́. Kó ìsọfúnni ti gbangba jọ, kọ àkọsílẹ̀ pẹ̀lú ìbéèrè mẹ́ta, kí o sì lo AI láti ṣe àkópọ̀ ojú-ewé kan. Ṣàyẹ̀wò kókó kọ̀ọ̀kan.",
          youCanNow: "kọ àkópọ̀ ìwádìí alátakò ojú-ewé kan láti inú orísun ti gbangba pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O4", q: "Èwo ni ọ̀kan lára ìbéèrè ìwádìí mẹ́ta náà?", options: ["Kí ni àmì ẹgbẹ́ wọn (mascot)?", "Kí ni wọ́n ń ṣe jù nínú ìkọlù?", "Olólùfẹ́ mélòó ni wọ́n ní?", "Àwọ̀ wo ni aṣọ eré wọn?"], answer: 1, why: "Wo ìkọlù, ààbò àti àwọn eléré pàtàkì." },
            { objective: "O4", q: "O fẹ́ fídíò alátakò kan tí kò sí ní gbangba. Kí ni o máa ṣe?", options: ["Ya fídíò ìdánrawò wọn ní ìkọ̀kọ̀", "Ní kí ọ̀rẹ́ kan nínú ẹgbẹ́ wọn fi ránṣẹ́", "Tẹ̀lé òfin pàṣípààrọ̀ fídíò líìgì rẹ", "Lo AI láti méfò ohun tí wọ́n ń ṣe"], answer: 2, why: "Tẹ̀lé òfin líìgì rẹ nípa pàṣípààrọ̀ fídíò àti ìwádìí alátakò." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ìbánisọ̀rọ̀ ẹgbẹ́ tó yé",
          minutes: 5,
          goal: "Sọ data àti ìwádìí di ọ̀rọ̀ ẹgbẹ́ tó kúrú tó sì yé.",
          text: [
            "Àwọn eléré kò nílò gbogbo nọ́mbà. Wọ́n nílò kókó kan sí mẹ́ta tó yé: \"Wọ́n ń tẹ̀ wá mọ́lẹ̀ (press) lẹ́yìn gbogbo àmì tí wọ́n bá gbà. Ẹ ju bọ́ọ̀lù wọlé sí ààrin.\" Ọ̀rọ̀ kúkúrú máa ń dúró sí ọkàn.",
            "Lo AI láti sọ àkópọ̀ rẹ di onírúurú: ọ̀rọ̀ ìṣẹ́jú-àáyá 30 fún yàrá ìmúra, àwòrán ojú-ewé kan fún ìpàdé wíwo fídíò, àti ọ̀rọ̀ kúkúrú fún app ìbánisọ̀rọ̀ ẹgbẹ́ tí a fọwọ́ sí. Tẹ̀lé òfin ilé-ìwé rẹ nípa bí olùkọ́ni ṣe lè kàn sí àwọn eléré, pàápàá àwọn ọmọdé.",
            "Yìn ní gbangba, tọ́ sọ́nà ní ìkọ̀kọ̀. Ọ̀rọ̀ ẹgbẹ́ ń sọ nípa ẹgbẹ́, kì í ṣe àṣìṣe eléré kan."
          ],
          steps: ["Yan kókó kan sí mẹ́ta.", "Ní kí AI ṣe ọ̀rọ̀ ìṣẹ́jú-àáyá 30, àwòrán kan àti ọ̀rọ̀ kúkúrú.", "Fi ránṣẹ́ nípasẹ̀ ọ̀nà ìbánisọ̀rọ̀ ẹgbẹ́ tí a fọwọ́ sí.", "Pa ìmọ̀ràn ẹnì kọ̀ọ̀kan mọ́ ní ìkọ̀kọ̀."],
          words: [["Kókó", "ohun kan tí àwọn eléré gbọ́dọ̀ rántí."], ["Ọ̀nà ìbánisọ̀rọ̀ tí a fọwọ́ sí", "ọ̀nà ìbánisọ̀rọ̀ tí ilé-ìwé tàbí club rẹ fọwọ́ sí fún ọ̀rọ̀ ẹgbẹ́."]],
          slides: [
            { title: "Díẹ̀ ló dára jù", bullets: ["Kókó kan sí mẹ́ta", "Ọ̀rọ̀ kúkúrú máa ń dúró sí ọkàn"] },
            { title: "Oríṣi mẹ́ta pẹ̀lú AI", bullets: ["Ọ̀rọ̀ ìṣẹ́jú-àáyá 30 ní yàrá ìmúra", "Àwòrán ojú-ewé kan", "Ọ̀rọ̀ kúkúrú sí ẹgbẹ́"] },
            { title: "Ọ̀wọ̀", bullets: ["Lo ọ̀nà ìbánisọ̀rọ̀ tí a fọwọ́ sí", "Yìn ní gbangba, tọ́ sọ́nà ní ìkọ̀kọ̀"] }
          ],
          tryIt: "Mú àkópọ̀ ìwádìí rẹ kí o sì lo AI láti ṣe ọ̀rọ̀ ìṣẹ́jú-àáyá 30 àti ọ̀rọ̀ ẹgbẹ́ olùgbólóhùn mẹ́ta tí kò ju kókó mẹ́ta lọ.",
          youCanNow: "sọ data di ọ̀rọ̀ ẹgbẹ́ tó kúrú, tó yé, tó sì ní ọ̀wọ̀.",
          quickCheck: [
            { objective: "O5", q: "Kí ni àwọn eléré nílò láti inú ọ̀rọ̀ ẹgbẹ́?", options: ["Kókó kan sí mẹ́ta tó yé", "Gbogbo nọ́mbà inú ìwé náà", "Ìròyìn gígùn", "Ìṣirò àwọn ẹgbẹ́ míì"], answer: 0, why: "Ọ̀rọ̀ kúkúrú tí ó ní kókó díẹ̀ tó yé máa ń dúró sí ọkàn." },
            { objective: "O5", q: "Eléré kan ń ṣe àṣìṣe kan náà léraléra. Báwo ni o ṣe máa yanjú rẹ̀?", options: ["Sọ ọ́ jáde nínú group chat ẹgbẹ́", "Fi í sórí ojú-ewé ẹgbẹ́", "Fi í hàn lórí àwòrán ìpàdé fídíò", "Bá eléré náà sọ̀rọ̀ ní ìkọ̀kọ̀"], answer: 3, why: "Yìn ní gbangba, tọ́ sọ́nà ní ìkọ̀kọ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ìpamọ́ àti ẹ̀tọ́ nínú data ẹgbẹ́",
          minutes: 5,
          goal: "Ṣe òfin data ẹgbẹ́ tí ó ń dáàbò bo àwọn eléré tí ó sì ń jẹ́ kí ìpinnu wà ní ẹ̀tọ́.",
          text: [
            "Data eléré jẹ́ ti ara ẹni. Ìṣirò, fídíò, àti pàápàá ìsọfúnni ìlera, ẹ̀rọ tí a wọ̀ sára (wearable) àti ẹ̀kọ́ nílò ìṣọ́ra. Gba ohun tí o nílò nìkan, tọ́jú rẹ̀ sí ibi tí a fọwọ́ sí, kí o sì pa ohun tí o kò nílò mọ́ rẹ́ gẹ́gẹ́ bí òfin ilé-ìwé rẹ.",
            "Má ṣe lẹ̀ orúkọ kíkún, ìsọfúnni ìlera tàbí ìsọfúnni àdáni mọ́ inú irinṣẹ́ AI. Lo nọ́mbà tàbí lẹ́tà àkọ́kọ́ orúkọ. Ọ̀pọ̀ ilé-ìwé àti líìgì ní òfin nípa ìsọfúnni akẹ́kọ̀ọ́ àti app tí a fọwọ́ sí; béèrè lọ́wọ́ olùdarí eré ìdárayá (athletic director) rẹ.",
            "Ẹ̀tọ́: nọ́mbà lè má rí àwọn nǹkan bí akitiyan, ìdarí, tàbí ààbò tí kò hàn nínú box score, data kékeré sì lè ṣe àìṣẹ̀tọ́ sí àwọn eléré bẹ́ǹṣì. Lo data láti béèrè ìbéèrè tó dára jù, kí o sì ṣàlàyé ìpinnu fún àwọn eléré gẹ́gẹ́ bí ènìyàn."
          ],
          steps: ["Gba ohun tí o nílò nìkan.", "Tọ́jú rẹ̀ sí ibi tí a fọwọ́ sí.", "Lo nọ́mbà tàbí lẹ́tà àkọ́kọ́ pẹ̀lú AI.", "Béèrè lọ́wọ́ olùdarí eré ìdárayá nípa òfin data àti app.", "Ṣàlàyé ìpinnu fún àwọn eléré gẹ́gẹ́ bí ènìyàn."],
          words: [["Ìsọfúnni akẹ́kọ̀ọ́", "ìsọfúnni nípa àwọn akẹ́kọ̀ọ́, tí ilé-ìwé gbọ́dọ̀ dáàbò bò."], ["Ojúsàájú (bias)", "àìṣẹ̀tọ́ tí ó lè wá láti inú data tí kò pé tàbí èrò tí a kò ṣàyẹ̀wò."]],
          slides: [
            { title: "Data eléré jẹ́ ti ara ẹni", bullets: ["Gba ohun tí o nílò nìkan", "Ibi tí a fọwọ́ sí nìkan", "Pa ohun tí o kò nílò mọ́ rẹ́"] },
            { title: "Pẹ̀lú AI", bullets: ["Nọ́mbà tàbí lẹ́tà àkọ́kọ́", "Kò sí ìsọfúnni ìlera tàbí àdáni", "Ṣàyẹ̀wò òfin app ilé-ìwé"] },
            { title: "Ẹ̀tọ́", bullets: ["Nọ́mbà kì í rí akitiyan àti ìdarí", "Data kékeré lè ṣe àìṣẹ̀tọ́", "Ṣàlàyé ìpinnu fún àwọn eléré"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ òfin data ẹgbẹ́ márùn-ún, lẹ́yìn náà parí ìwé ìṣirò rẹ, àṣà kan, àkópọ̀ ìwádìí ojú-ewé kan, àti ọ̀rọ̀ ẹgbẹ́ tí ó ń dáàbò bo ìsọfúnni àdáni eléré.",
          youCanNow: "lo data ẹgbẹ́ ní ọ̀nà tí ó ń dáàbò bo àwọn eléré tí ó sì ń jẹ́ kí ìpinnu wà ní ẹ̀tọ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ni o yẹ kí o ṣe pẹ̀lú data eléré tí o kò nílò mọ́?", options: ["Tọ́jú rẹ̀ títí láé", "Pa á rẹ́ gẹ́gẹ́ bí òfin ilé-ìwé rẹ", "Pín in fún àwọn ẹgbẹ́ míì", "Fi í sórí ayélujára"], answer: 1, why: "Gba ohun tí o nílò nìkan, kí o sì pa ohun tí o kò nílò mọ́ rẹ́ gẹ́gẹ́ bí òfin ilé-ìwé rẹ." },
            { objective: "O6", q: "Eléré bẹ́ǹṣì kan ní nọ́mbà tí kò dára láti inú ìṣẹ́jú mẹ́fà péré tí ó ṣeré. Kí ni ẹ̀tọ́?", options: ["Yọ ọ́ kúrò nínú ẹgbẹ́", "Pín ìṣirò rẹ̀ fún gbogbo ènìyàn", "Fi ìṣọ́ra wo data kékeré náà kí o sì bá a sọ̀rọ̀ gẹ́gẹ́ bí ènìyàn", "Má ṣe jẹ́ kí ó ṣeré mọ́ láéláé"], answer: 2, why: "Data kékeré lè ṣe àìṣẹ̀tọ́ sí àwọn eléré bẹ́ǹṣì; ṣàlàyé ìpinnu fún àwọn eléré gẹ́gẹ́ bí ènìyàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìwádìí alátakò àti ìbánisọ̀rọ̀",
        questions: [
          { objective: "O4", q: "Èwo ni orísun tí ó tọ́ fún ìwádìí alátakò?", options: ["Yíya fídíò ìdánrawò wọn tí a tì ní ìkọ̀kọ̀", "Wíwọ inú app wọn láìgbàṣẹ (hacking)", "Bíbéèrè ọ̀rọ̀ aṣínà lọ́wọ́ àwọn eléré wọn", "Box score ti gbangba àti fídíò eré tí a gbà láàyè"], answer: 3, why: "Lo orísun ti gbangba àti èyí tí a gbà láàyè, kí o sì tẹ̀lé òfin líìgì." },
          { objective: "O4", q: "AI fi kókó kan kún un tí kò sí nínú àkọsílẹ̀ rẹ. O máa:", options: ["Yọ ọ́ kúrò tàbí ṣàyẹ̀wò rẹ̀ fúnra rẹ", "Fi í sílẹ̀", "Kọ ọ́ ní lẹ́tà dúdú (bold)", "Sọ fún ẹgbẹ́ pé òótọ́ ni"], answer: 0, why: "Lo ohun tí àkọsílẹ̀ rẹ ṣe àtìlẹ́yìn fún nìkan." },
          { objective: "O5", q: "Kókó mélòó ló yẹ kí ọ̀rọ̀ ẹgbẹ́ ní?", options: ["Ogún", "Kò sí", "Kan sí mẹ́ta", "Gbogbo ìṣirò"], answer: 2, why: "Ọ̀rọ̀ kúkúrú máa ń dúró sí ọkàn." },
          { objective: "O5", q: "Níbo ni ìtọ́sọ́nà ẹnì kọ̀ọ̀kan yẹ kí ó ti wáyé?", options: ["Nínú group chat ẹgbẹ́", "Lórí ìkànnì àjọlò", "Níwájú àwọn olólùfẹ́", "Ní ìkọ̀kọ̀"], answer: 3, why: "Yìn ní gbangba, tọ́ sọ́nà ní ìkọ̀kọ̀." },
          { objective: "O6", q: "Kí ni o yẹ kí o lẹ̀ mọ́ inú AI dípò orúkọ eléré?", options: ["Orúkọ kíkún àti ọjọ́ ìbí", "Nọ́mbà tàbí lẹ́tà àkọ́kọ́", "Àkọsílẹ̀ ìlera", "Àdírẹ́sì ilé"], answer: 1, why: "Èyí ń dáàbò bo ìsọfúnni àdáni eléré." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Eré Ìdárayá Ẹgbẹ́",
    questions: [
      { objective: "O1", q: "Ìtúpalẹ̀ ìṣirò ẹgbẹ́ túmọ̀ sí:", options: ["Kíka àwọn olólùfẹ́ nìkan", "Rírọ́pò olùkọ́ni", "Lílo nọ́mbà láti mọ bí ẹgbẹ́ ṣe ń ṣeré kí ó sì dára sí i", "Títa tíkẹ́ẹ̀tì"], answer: 2, why: "Ó ń ṣe àtìlẹ́yìn fún ìpinnu ẹgbẹ́ tó dára jù." },
      { objective: "O1", q: "Ẹgbẹ́ tí ń sáré kọlu kíákíá (fast break) yẹ kí ó kọ:", options: ["Àmì ìyípadà àti bọ́ọ̀lù tí a pàdánù", "Àwọ̀ aṣọ eré", "Àkókò bọ́ọ̀sì", "Iye èrò"], answer: 0, why: "Àwọn wọ̀nyẹn bá ọ̀nà ìkọlù kíákíá mu." },
      { objective: "O1", q: "Ìṣirò ẹgbẹ́ mélòó ni o yẹ kí o fi bẹ̀rẹ̀?", options: ["Mẹ́ta sí márùn-ún", "Àádọ́ta", "Kò sí", "Ọgọ́rùn-ún"], answer: 0, why: "Ìṣirò díẹ̀ tí o lè gbà ní gbogbo eré." },
      { objective: "O1", q: "Ta ni ó lè ṣèrànwọ́ láti gba ìṣirò?", options: ["Adájọ́ eré (referee)", "Alátakò", "Alákòóso, olùyọ̀ǹda tàbí eléré tí ó farapa", "Kò sí ẹnì kankan"], answer: 2, why: "Lo àwọn ènìyàn tí o ní." },
      { objective: "O2", q: "Ìwé ìṣirò ẹgbẹ́ yẹ kí ó jẹ́:", options: ["Ti gbangba lórí ayélujára", "Èyí tí a pín fún àwọn tí ó nílò rẹ̀ nìkan", "Èyí tí a fi ímeèlì ránṣẹ́ sí alátakò", "Èyí tí a tẹ̀ jáde fún àwọn olólùfẹ́"], answer: 1, why: "Dín ìwọlé kù láti dáàbò bo àwọn eléré." },
      { objective: "O2", q: "Ìwọlé wíwò-nìkan túmọ̀ sí pé àwọn ènìyàn:", options: ["Lè pa á rẹ́", "Lè ṣàtúnṣe gbogbo nǹkan", "Kò lè ṣí i", "Lè rí i ṣùgbọ́n wọn kò lè yí i padà"], answer: 3, why: "Ó ń dáàbò bo data rẹ." },
      { objective: "O3", q: "Ìyàtọ̀ àmì (point differential) ni:", options: ["Àpapọ̀ àmì", "Free throw nìkan", "Àmì tí a gbà yọ àmì tí wọ́n gbà lọ́wọ́ wa", "Iye àwọn tí ń tẹ̀lé ọ"], answer: 2, why: "Ó ń fi bí lineup ṣe ń ṣe hàn." },
      { objective: "O3", q: "Pivot table:", options: ["Jẹ́ irú ìdánrawò kan", "Jẹ́ ọgbọ́n basketball kan", "Ń pa àwọn ìlà rẹ́", "Ń kó data jọ ó sì ń ṣírò àpapọ̀"], answer: 3, why: "Ó ń ṣe àkópọ̀ data kíákíá." },
      { objective: "O3", q: "Nígbà tí o bá ń béèrè lọ́wọ́ AI nípa lineup, tún ní kí ó:", options: ["Fi ìṣirò rẹ̀ hàn", "Yan àwọn tí yóò bẹ̀rẹ̀ eré", "Fi èsì sí gbangba", "Méfò"], answer: 0, why: "O nílò láti ṣàyẹ̀wò iṣẹ́ rẹ̀." },
      { objective: "O3", q: "Ó dára jù kí a ka àṣà láti inú data sí:", options: ["Ìdáhùn ìkẹyìn", "Ìbéèrè fún ìdánrawò àti fídíò", "Àṣírí", "Ọ̀rọ̀ fún ìkànnì àjọlò"], answer: 1, why: "Data ń ṣe àtìlẹ́yìn fún ìpinnu olùkọ́ni." },
      { objective: "O4", q: "Ìròyìn ìwádìí alátakò ń ṣe àkópọ̀:", options: ["Ìṣirò tìrẹ nìkan", "Ìpanu ẹgbẹ́", "Bí alátakò ṣe ń ṣeré àti bí a ṣe lè ṣẹ́gun wọn", "Orúkọ àwọn adájọ́ eré"], answer: 2, why: "Ó ń múra ẹgbẹ́ rẹ sílẹ̀." },
      { objective: "O4", q: "Ìtẹ̀sí (tendency) ni:", options: ["Ohun tí ẹgbẹ́ kan máa ń ṣe lọ́pọ̀ ìgbà ní ipò kan", "Eré ẹ̀ẹ̀kan ṣoṣo", "Òfin kan", "Àmì kan"], answer: 0, why: "Ìtẹ̀sí ń ràn wá lọ́wọ́ láti sọ tẹ́lẹ̀ ohun tí wọ́n máa ṣe." },
      { objective: "O4", q: "Ìwádìí alátakò gbọ́dọ̀ tẹ̀lé:", options: ["Kò sí òfin kankan", "Ìfẹ́ alátakò", "Ohun tí ó gbajúmọ̀ lórí ìkànnì àjọlò", "Òfin líìgì rẹ nípa fídíò àti ìwádìí alátakò"], answer: 3, why: "Àwọn líìgì ń ṣe òfin ìwádìí tí ó tọ́." },
      { objective: "O4", q: "Àkópọ̀ ìwádìí AI gbọ́dọ̀ wá láti:", options: ["Ìméfò AI", "Àkọsílẹ̀ tìrẹ nìkan", "Àhesọ", "Ọ̀rọ̀ àwọn olólùfẹ́"], answer: 1, why: "Àkọsílẹ̀ rẹ ni ẹ̀rí rẹ." },
      { objective: "O5", q: "Ọ̀rọ̀ ìṣẹ́jú-àáyá 30 ní yàrá ìmúra yẹ kí ó ní:", options: ["Gbogbo ìṣirò", "Kókó kan sí mẹ́ta", "Kò sí kókó kankan", "Àwòrán mẹ́wàá"], answer: 1, why: "Àwọn eléré máa ń rántí kókó díẹ̀ tó yé." },
      { objective: "O5", q: "Àwọn olùkọ́ni yẹ kí wọ́n kàn sí àwọn eléré nípasẹ̀:", options: ["App èyíkéyìí", "Àkáǹtì ìkọ̀kọ̀", "Ọ̀rọ̀ ìdáhùn ní gbangba", "Ọ̀nà tí ilé-ìwé tàbí club fọwọ́ sí"], answer: 3, why: "Òfin ń dáàbò bo àwọn ọmọdé àti àwọn olùkọ́ni." },
      { objective: "O6", q: "Data wo ló nílò ìṣọ́ra jù?", options: ["Ìsọfúnni ìlera àti ẹ̀kọ́", "Àmì ìkẹyìn eré", "Ọjọ́ eré", "Àwọ̀ ẹgbẹ́"], answer: 0, why: "Ó jẹ́ ìkọ̀kọ̀, a sì ń dáàbò bò ó." },
      { objective: "O6", q: "Ta ni ó lè sọ fún ọ àwọn app tí ilé-ìwé rẹ gbà láàyè fún ìsọfúnni akẹ́kọ̀ọ́?", options: ["Olólùfẹ́ ẹgbẹ́ kan", "AI kan", "Olùdarí eré ìdárayá (athletic director)", "Alátakò kan"], answer: 2, why: "Àwọn ilé-ìwé ló ń ṣe òfin data." },
      { objective: "O6", q: "Box score lè má rí:", options: ["Àmì", "Rebound", "Àmì ìkẹyìn eré", "Akitiyan, ìdarí àti ààbò láìní bọ́ọ̀lù lọ́wọ́"], answer: 3, why: "Kì í ṣe gbogbo nǹkan ló ń hàn nínú nọ́mbà." },
      { objective: "O6", q: "Nígbà tí ìpinnu kan bá lo data, àwọn olùkọ́ni yẹ kí wọ́n:", options: ["Fi í pamọ́", "Ṣàlàyé rẹ̀ fún àwọn eléré gẹ́gẹ́ bí ènìyàn", "Di ẹ̀bi rẹ̀ ru spreadsheet", "Fi í sí gbangba"], answer: 1, why: "Àwọn eléré yẹ fún ọ̀wọ̀ àti àlàyé tó yé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      2,
      4,
      8,
      10,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ìwé ìṣirò",
        objective: "O2",
        notYet: "Kò tó eré mẹ́ta, ìṣirò kò yé, tàbí pínpín kò ní ààbò tàbí ìsọfúnni àdáni wà nínú ìwé náà.",
        meets: "Ìṣirò mẹ́ta sí márùn-ún tí a ṣàlàyé fún eré tàbí ìdánrawò mẹ́ta, tab àkópọ̀ àti ìwọlé tí kò léwu gẹ́gẹ́ bí ipa ẹnì kọ̀ọ̀kan.",
        exceeds: "A yan ẹnì kan fún ìṣirò kọ̀ọ̀kan, àwọn ìtumọ̀ sì wà lórí tab tí gbogbo ènìyàn lè kà."
      },
      {
        name: "Àṣà tí a rí",
        objective: "O3",
        notYet: "Kò sí àṣà, a kò ṣàyẹ̀wò ìṣirò AI, tàbí a lo orúkọ kíkún pẹ̀lú AI.",
        meets: "Àṣà kan nínú lineup tàbí nínú eré pẹ̀lú ìṣirò tí a ti ṣàyẹ̀wò, pẹ̀lú nọ́mbà tàbí lẹ́tà àkọ́kọ́ nìkan.",
        exceeds: "Ó kọ ìwọ̀n data sílẹ̀, ó sì sọ àṣà náà di ìbéèrè ìdánrawò tàbí fídíò fún olùkọ́ni."
      },
      {
        name: "Àkópọ̀ ìwádìí alátakò",
        objective: "O4",
        notYet: "Kókó tí kò wá láti inú àkọsílẹ̀, tàbí orísun tí ó lòdì sí òfin líìgì.",
        meets: "Ojú-ewé kan tí ó ní ìkọlù, ààbò, àwọn eléré pàtàkì àti kókó mẹ́ta, tí kókó kọ̀ọ̀kan wá láti inú àkọsílẹ̀ akẹ́kọ̀ọ́ àti orísun tí a gbà láàyè.",
        exceeds: "Ó ní àkókò inú fídíò (timestamp) tí ó ń fi kókó pàtàkì kọ̀ọ̀kan hàn."
      },
      {
        name: "Ọ̀rọ̀ ẹgbẹ́ àti ìpamọ́",
        objective: "O5",
        notYet: "Kókó pọ̀ jù, tàbí a pín àṣìṣe tàbí ìsọfúnni àdáni eléré kan.",
        meets: "Kókó kan sí mẹ́ta tí a fi ránṣẹ́ nípasẹ̀ ọ̀nà tí a fọwọ́ sí, láìsí ìsọfúnni àdáni eléré kankan.",
        exceeds: "Oríṣi fún ọ̀rọ̀ yàrá ìmúra, àwòrán kan àti ọ̀rọ̀ ìránṣẹ́, gbogbo wọn ń bọ̀wọ̀ fún ìpamọ́."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí iṣẹ́ ìkẹyìn tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric",
      "Àwọn ẹgbẹ́ tí wọ́n ṣì ń gba ìṣirò tí wọ́n ṣàlàyé lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn olùkọ́ni tí wọ́n ròyìn ìyípadà nínú ìdánrawò tàbí ètò eré láti inú àṣà tàbí àkópọ̀ ìwádìí alátakò",
      "Àwọn ẹgbẹ́ tí wọ́n gba òfin ìpamọ́ data tí a kọ sílẹ̀, tí olùdarí eré ìdárayá fọwọ́ sí"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Àkáǹtì Google ọ̀fẹ́ fún Google Sheets",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Èsì ti gbangba, box score tàbí fídíò tí a gbà láàyè nípa alátakò kan",
      "Òfin ilé-ìwé tàbí líìgì rẹ nípa ìsọfúnni akẹ́kọ̀ọ́ àti app tí a fọwọ́ sí",
      "Nǹkan bí ìṣẹ́jú 60 ti ẹ̀kọ́, pẹ̀lú ìṣirò eré tàbí ìdánrawò mẹ́ta"
    ],
    facilitatorNotes: [
      "Béèrè lọ́wọ́ olùdarí eré ìdárayá àwọn app tí a fọwọ́ sí fún ìsọfúnni akẹ́kọ̀ọ́ kí àwọn ẹgbẹ́ tó ṣètò ìwé wọn.",
      "Fi hàn bí a ṣe ń fi nọ́mbà tàbí lẹ́tà àkọ́kọ́ rọ́pò orúkọ kí a tó lẹ ohunkóhun mọ́ inú AI.",
      "Rán àwọn òṣìṣẹ́ létí pé ìsọfúnni ìlera, ẹ̀kọ́ àti ìkànsí kò gbọ́dọ̀ wọ inú ìwé ìṣirò láéláé.",
      "Tẹ̀lé òfin líìgì nípa ìwádìí alátakò àti pàṣípààrọ̀ fídíò; má ṣe ya fídíò ìdánrawò ìkọ̀kọ̀ àwọn ẹgbẹ́ míì.",
      "Sọ̀rọ̀ nípa ẹ̀tọ́: data ń bí ìbéèrè, olùkọ́ni ló ń pinnu, a sì ń ṣàlàyé ìpinnu fún àwọn eléré gẹ́gẹ́ bí ènìyàn."
    ]
  }
};
