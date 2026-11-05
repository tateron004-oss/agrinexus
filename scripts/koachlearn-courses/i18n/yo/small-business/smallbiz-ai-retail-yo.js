"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-ai-retail.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC_ADS = { name: "FTC: Ìpìlẹ̀ ìpolówó ọjà àti títà", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };

module.exports = {
  id: "smallbiz-ai-retail-yo",
  lang: "yo",
  translationOf: "smallbiz-ai-retail",
  category: "Small Business",
  name: "AI fún Àwọn Ilé Ìtajà",
  skills: "Kíkọ àpèjúwe ọjà, Ṣíṣe àmì orí pẹpẹ, Títọ́jú ọjà inú ilé ìtajà nínú spreadsheet, Ṣíṣètò ìgbà tí a ó tún ra ọjà, Kíka bí ọjà ṣe ń tà, Ṣíṣètò ìpolówó àsìkò",
  outcome: "ṣe iṣẹ́ àkọsílẹ̀ ilé ìtajà kékeré pẹ̀lú ìrànlọ́wọ́ AI: kọ àpèjúwe ọjà àti àmì orí pẹpẹ tí ó jẹ́ òtítọ́, tọ́jú ìwé ọjà tí ó ní ìgbà àtúnrà, mọ ọjà tí ó ń tà jù àti èyí tí ó ń lọ́ra, kí o sì ṣètò ìpolówó àsìkò kan láti inú nọ́mbà ìtajà tìrẹ.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olówó àti òṣìṣẹ́ ilé ìtajà kékeré: ṣọ́ọ̀bù aṣọ, ṣọ́ọ̀bù kékeré ní ìkòríta, ṣọ́ọ̀bù ohun ẹwà, ṣọ́ọ̀bù ẹ̀bùn, ṣọ́ọ̀bù ẹrù àlòkù, àti àwọn tí ń tajà lórí ayélujára tàbí ní ọjà. Ọ̀pọ̀ akẹ́kọ̀ọ́ wa jẹ́ olówó láti inú àwọn ẹ̀yà kékeré tí wọ́n ń ṣe ṣọ́ọ̀bù pẹ̀lú òṣìṣẹ́ díẹ̀.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ àti spreadsheet (Google Sheets tàbí Excel) láti kọ nípa ọjà rẹ, tọ́jú àkọsílẹ̀ ọjà kí ó má baà tán mọ́ ọ lọ́wọ́ lójijì, rí ohun tí ó ń tà, kí o sì ṣètò ìpolówó láti inú òtítọ́ dípò àròbájọ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àpò irinṣẹ́ ìtajà fún ṣọ́ọ̀bù rẹ: àpèjúwe ọjà márùn-ún tí ó jẹ́ òtítọ́, àmì orí pẹpẹ mẹ́ta, ìwé ọjà tí ó ní ó kéré tán ọjà 15 pẹ̀lú ìgbà àtúnrà àti àmì àtúnrà, àkọsílẹ̀ kúkúrú nípa ọjà mẹ́ta tí ó ń tà jù àti mẹ́ta tí ó ń lọ́ra jù, àti ètò ojú-ewé kan fún ìpolówó àsìkò kan pẹ̀lú àwọn ọjà, iye owó, ọjọ́, àti bí o ṣe máa wọn èsì rẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olówó àti òṣìṣẹ́ ilé ìtajà kékeré: ṣọ́ọ̀bù aṣọ, ṣọ́ọ̀bù kékeré ní ìkòríta, ṣọ́ọ̀bù ohun ẹwà, ṣọ́ọ̀bù ẹ̀bùn, ṣọ́ọ̀bù ẹrù àlòkù, àti àwọn tí ń tajà lórí ayélujára tàbí ní ọjà. Ọ̀pọ̀ wọn jẹ́ olówó láti inú àwọn ẹ̀yà kékeré tí wọ́n ń ṣe ṣọ́ọ̀bù pẹ̀lú òṣìṣẹ́ díẹ̀.",
    startingPoint: "Wọ́n mọ ọjà àti oníbàárà wọn dáadáa, wọ́n sì ń lo ẹ̀rọ ìgbowó (register tàbí POS). Wọn kì í fi bẹ́ẹ̀ lo spreadsheet fún ọjà tàbí ìròyìn ìtajà, tàbí AI fún kíkọ̀wé, wọ́n sì máa ń ṣètò ìpolówó láti inú àròbájọ.",
    gap: "Ṣọ́ọ̀bù máa ń pàdánù owó nígbà tí ọjà tí ó ń tà jù bá tán, tí ọjà tí kò tà bá pọ̀ jù, tí iye owó tí kò tọ́ bá wà lórí àmì, tàbí tí ìpolówó kò bá mú èrè wá. Àwọn olówó nílò láti lo AI àti spreadsheet láti kọ àpèjúwe ọjà tí ó jẹ́ òtítọ́, tọ́jú ọjà, ka ìròyìn ìtajà, kí wọ́n sì ṣètò ìpolówó láti inú nọ́mbà tiwọn, kí wọ́n sì dáàbò bo ìsọfúnni ṣọ́ọ̀bù.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú",
      "Ẹ̀rọ: kọ̀mpútà dára jù fún spreadsheet; fóònù ṣiṣẹ́ fún kíkọ̀wé àti àmì",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 tí ó bá àkókò ìṣí ṣọ́ọ̀bù mu",
      "Òfin: òfin FTC lórí òtítọ́ nínú ìpolówó fún ohun tí a sọ nípa ọjà, iye owó lórí àmì sì gbọ́dọ̀ bá ti ẹ̀rọ ìgbowó mu",
      "Ìsọfúnni àdáni àti ààbò: kò sí ọ̀rọ̀ aṣínà olùpèsè tàbí ìsọfúnni oníbàárà nínú AI; àpapọ̀ ọjà nìkan"
    ],
    prerequisites: "\"Àwọn Irinṣẹ́ AI Pàtàkì fún Iṣẹ́ Òwò Kékeré\" wúlò fún àwọn akẹ́kọ̀ọ́ tí wọ́n jẹ́ tuntun sí spreadsheet."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní òtítọ́ láti orí àmì ọjà tàbí ìwé owó (invoice)", action: "kọ àpèjúwe ọjà kúkúrú tí ó jẹ́ òtítọ́ pẹ̀lú ìrànlọ́wọ́ AI", standard: "tí o ti ṣàyẹ̀wò gbogbo ohun tí ó sọ pẹ̀lú àmì ọjà, láìsí ohun tí o kò lè fi hàn pé òtítọ́ ni" },
    { id: "O2", condition: "Pẹ̀lú olùrànlọ́wọ́ AI", action: "ṣe àmì orí pẹpẹ àti ìkéde ṣọ́ọ̀bù tí ó yé", standard: "tí iye owó bá ti ẹ̀rọ ìgbowó mu, tí ọjọ́ ìparí àdínwó jẹ́ òtítọ́, tí ẹni tí ó gbọ́ èdè dáadáa sì ti ṣàyẹ̀wò ìtumọ̀" },
    { id: "O3", condition: "Pẹ̀lú Google Sheets tàbí Excel", action: "ṣe ìwé ọjà tí ó ní ìgbà àtúnrà àti àmì àtúnrà", standard: "tí ó ní ó kéré tán ọjà 15, ìgbà àtúnrà tó tọ́ àti fọ́múlà tí o ti dánwò" },
    { id: "O4", condition: "Tí o bá ní ìtajà ọ̀sẹ̀ 4 sí 8 fún ọjà kọ̀ọ̀kan", action: "mọ ọjà tí ó ń tà jù àti èyí tí ó ń lọ́ra jù pẹ̀lú ìrànlọ́wọ́ AI", standard: "tí o dárúkọ mẹ́ta òkè àti mẹ́ta ìsàlẹ̀, tí o sì fi nọ́mbà tìrẹ jẹ́rìí sí àpẹẹrẹ èyíkéyìí tí AI rí" },
    { id: "O5", condition: "Tí o bá ní nọ́mbà ìtajà àti ọjà rẹ", action: "ṣètò ìpolówó àsìkò kan", standard: "pẹ̀lú àwọn ọjà, iye owó, èrè lórí títà kọ̀ọ̀kan, ọjọ́ àti ọjà tí ó tó, tí ìwọ fúnra rẹ pinnu" },
    { id: "O6", condition: "Tí o bá ní ìpolówó kan àti ìsọfúnni ṣọ́ọ̀bù rẹ", action: "wọn èsì ìpolówó náà kí o sì dáàbò bo ìsọfúnni ṣọ́ọ̀bù", standard: "tí o fi wé ọ̀sẹ̀ kan náà ṣáájú, tí o ṣàyẹ̀wò ìṣirò AI, tí o kò sì fi ọ̀rọ̀ aṣínà sínú AI" }
  ],
  chapters: [
    {
      name: "Orí 1: Ọjà, àmì àti ọjà inú ṣọ́ọ̀bù",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kíkọ àpèjúwe ọjà tí ó ń tà, ní òtítọ́",
          minutes: 5,
          goal: "Kọ àpèjúwe ọjà kúkúrú tí ó jẹ́ òtítọ́ pẹ̀lú ìrànlọ́wọ́ AI.",
          text: [
            "Àpèjúwe ọjà sọ fún oníbàárà ohun tí ọjà jẹ́, ẹni tí ó wà fún, àti ìdí tí wọ́n fi máa fẹ́ ẹ. Ó ṣiṣẹ́ lórí àmì pẹpẹ, ojú-òpó wẹ́ẹ̀bù rẹ, ọjà orí ayélujára tàbí ìfiránṣẹ́ lórí ìkànnì àwùjọ.",
            "Fún AI ní òtítọ́: \"Kọ àpèjúwe ọ̀rọ̀ 40 fún ìpara ara shea butter 12 oz, tí kò ní òórùn, tí wọ́n ṣe ní Ghana, fún ara gbígbẹ. Ohùn tó lọ́yàyà. Sọ ìwọ̀n rẹ̀.\" AI ń mú ọ̀rọ̀ dùn; ìwọ ni ó ń fúnni ní òtítọ́.",
            "Ṣàyẹ̀wò gbogbo òtítọ́: ìwọ̀n, ohun tí wọ́n fi ṣe é, ibi tí wọ́n ti ṣe é, bí a ṣe ń tọ́jú rẹ̀. Yọ ohun tí o kò lè fi hàn pé òtítọ́ ni kúrò, bí \"ó ń wo eczema sàn\" tàbí \"èyí tí ó dára jù ní ìlú\". FTC (àjọ ìjọba US tí ó ń bójú tó ìtajà) sọ pé ohun tí ìpolówó sọ gbọ́dọ̀ jẹ́ òtítọ́, kí ẹ̀rí sì wà lẹ́yìn rẹ̀."
          ],
          steps: ["Kọ òtítọ́ nípa ọjà: orúkọ, ìwọ̀n, ohun tí wọ́n fi ṣe é, ibi tí ó ti wá, ẹni tí ó wà fún.", "Ní kí AI kọ àpèjúwe kúkúrú ní ohùn tìrẹ.", "Ṣàyẹ̀wò gbogbo òtítọ́ pẹ̀lú àmì ọjà tàbí ìwé owó.", "Yọ ohun tí o kò lè fi hàn pé òtítọ́ ni kúrò."],
          words: [["Àpèjúwe ọjà", "ọ̀rọ̀ kúkúrú tí ó sọ fún oníbàárà ohun tí ọjà jẹ́ àti ìdí tí wọ́n fi máa fẹ́ ẹ."], ["Ohun tí a sọ (claim)", "ọ̀rọ̀ òtítọ́ tí a sọ nípa ọjà, bí ohun tí ó ń ṣe."]],
          slides: [
            { title: "Kí ni, fún ta ni, kí ló dé", bullets: ["Ohun tí ó jẹ́", "Ẹni tí ó wà fún", "Ìdí tí wọ́n fi máa fẹ́ ẹ"] },
            { title: "Ìwọ ni o ń fúnni ní òtítọ́", bullets: ["Orúkọ, ìwọ̀n, ohun tí wọ́n fi ṣe é, ibi tí ó ti wá", "AI ń mú ọ̀rọ̀ dùn"] },
            { title: "Jẹ́ olóòótọ́", bullets: ["Ṣàyẹ̀wò pẹ̀lú àmì ọjà tàbí ìwé owó", "Kò sí ọ̀rọ̀ ìlera tàbí \"èyí tó dára jù\" tí o kò lè fi hàn", "FTC: ohun tí a sọ gbọ́dọ̀ jẹ́ òtítọ́, kí ẹ̀rí sì wà"] }
          ],
          sources: [FTC_ADS],
          tryIt: "Yan ọjà márùn-ún nínú ṣọ́ọ̀bù rẹ. Kọ òtítọ́ nípa ọ̀kọ̀ọ̀kan, ní kí AI kọ àpèjúwe ọ̀rọ̀ 30 sí 50, kí o sì ṣàyẹ̀wò ọ̀kọ̀ọ̀kan pẹ̀lú àmì ọjà.",
          youCanNow: "kọ àpèjúwe ọjà tí ó jẹ́ òtítọ́ pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O1", q: "Níbo ni o ti ń ṣàyẹ̀wò òtítọ́ inú àpèjúwe ọjà?", options: ["Àmì ọjà tàbí ìwé owó", "Ojú-òpó wẹ́ẹ̀bù alátakò rẹ", "Ohunkóhun tí AI kọ", "Àròbájọ oníbàárà kan"], answer: 0, why: "Àmì ọjà tàbí ìwé owó ní òtítọ́ gidi nípa ọjà." },
            { objective: "O1", q: "AI kọ pé ọṣẹ orí kan \"ń dá irun jíjá dúró\", ṣùgbọ́n àmì ọjà kò sọ bẹ́ẹ̀. Kí ni o máa ṣe?", options: ["Fi sílẹ̀ kí o lè tà jù", "Fi àmì ìbéèrè kún un", "Yọ ọ́ kúrò àyàfi tí o bá lè fi hàn", "Kọ ọ́ ní lẹ́tà kékeré"], answer: 2, why: "Ohun tí a sọ gbọ́dọ̀ jẹ́ òtítọ́, kí ẹ̀rí sì wà lẹ́yìn rẹ̀." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Àmì orí pẹpẹ, káàdì iye owó àti ìkéde ṣọ́ọ̀bù",
          minutes: 4,
          goal: "Ṣe àmì orí pẹpẹ àti ìkéde ṣọ́ọ̀bù tí ó yé kíákíá.",
          text: [
            "Àmì ń dáhùn ìbéèrè kí oníbàárà tó béèrè: iye owó, àdínwó, ọjà tuntun, òfin ìdápadà, \"béèrè lọ́wọ́ wa nípa...\". Àmì tí ó yé ń fi àkókò òṣìṣẹ́ pamọ́.",
            "Ní kí AI kọ ọ̀rọ̀ kúkúrú: \"Kọ àmì orí pẹpẹ márùn-ún fún ṣọ́ọ̀bù ohun ẹwà mi: irun dídì tuntun ti dé, ra 2 gba 1 lọ́fẹ̀ẹ́ lórí edge control títí di May 31, òfin ìdápadà wa jẹ́ ọjọ́ 14 pẹ̀lú ìwé ìgbowó. Ọ̀rọ̀ tí kò tó 12 fún ọ̀kọ̀ọ̀kan.\" Lẹ́yìn náà ṣe àwòrán wọn nínú Canva tàbí document, kí o sì tẹ̀ wọ́n jáde.",
            "Iye owó lórí àmì gbọ́dọ̀ bá ti ẹ̀rọ ìgbowó mu. Àmì àdínwó nílò ọjọ́ ìparí gidi àti òdiwọ̀n èyíkéyìí. Tí o bá ń ta fún oníbàárà tí ó ń sọ èdè míì, ní kí AI túmọ̀ rẹ̀, lẹ́yìn náà ní kí ẹni tí ó gbọ́ èdè náà dáadáa ṣàyẹ̀wò rẹ̀."
          ],
          steps: ["Kọ àwọn àmì tí o nílò sílẹ̀.", "Ní kí AI kọ ọ̀rọ̀ kúkúrú.", "Ṣe àwòrán wọn kí o sì tẹ̀ wọ́n jáde.", "Ṣàyẹ̀wò pé gbogbo iye owó bá ti ẹ̀rọ ìgbowó mu.", "Ní kí ẹni tí ó gbọ́ èdè dáadáa ṣàyẹ̀wò ìtumọ̀ èyíkéyìí."],
          words: [["Àmì orí pẹpẹ", "àmì kékeré lórí pẹpẹ tí ó ń fi iye owó, àdínwó tàbí ìsọfúnni hàn."], ["Òfin ìdápadà", "òfin rẹ nípa ìgbà tí oníbàárà lè dá ọjà padà."]],
          slides: [
            { title: "Àmì ń fi àkókò òṣìṣẹ́ pamọ́", bullets: ["Iye owó, àdínwó àti ọjà tuntun", "Òfin ìdápadà àti \"béèrè lọ́wọ́ wa nípa\""] },
            { title: "AI ń kọ̀wé, ìwọ ń ṣe àwòrán", bullets: ["Béèrè ọ̀rọ̀ kúkúrú, tí kò tó 12", "Ṣe àwòrán nínú Canva tàbí document"] },
            { title: "Ṣàyẹ̀wò kí o tó gbé e kọ́", bullets: ["Iye owó bá ti ẹ̀rọ ìgbowó mu", "Ọjọ́ ìparí àdínwó àti òdiwọ̀n", "Ẹni tí ó gbọ́ èdè dáadáa ti ṣàyẹ̀wò ìtumọ̀"] }
          ],
          tryIt: "Ní kí AI kọ àmì orí pẹpẹ mẹ́ta fún ṣọ́ọ̀bù rẹ. Ṣàyẹ̀wò iye owó kọ̀ọ̀kan pẹ̀lú ẹ̀rọ ìgbowó rẹ, lẹ́yìn náà ṣe wọ́n kí o sì tẹ̀ wọ́n jáde tàbí fi wọ́n pamọ́.",
          youCanNow: "ṣe àmì orí pẹpẹ àti ìkéde ṣọ́ọ̀bù tí ó yé tí ó sì péye pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O2", q: "Kí ni àmì àdínwó gbọ́dọ̀ fi hàn?", options: ["Ọ̀rọ̀ SALE nìkan", "Ọjọ́ ìparí gidi àti òdiwọ̀n èyíkéyìí", "Nọ́mbà fóònù olówó ṣọ́ọ̀bù", "Gbogbo ọjà inú ṣọ́ọ̀bù"], answer: 1, why: "Àmì àdínwó nílò ọjọ́ ìparí gidi àti òdiwọ̀n èyíkéyìí kí ó lè jẹ́ òtítọ́." },
            { objective: "O2", q: "AI túmọ̀ àmì orí pẹpẹ rẹ sí èdè Spanish. Kí ni o máa ṣe kí o tó tẹ̀ ẹ́ jáde?", options: ["Tẹ̀ ẹ́ jáde lẹ́sẹ̀kẹsẹ̀", "Ní kí AI ṣàyẹ̀wò ara rẹ̀", "Yọ èdè Gẹ̀ẹ́sì kúrò", "Ní kí ẹni tí ó gbọ́ èdè náà dáadáa ṣàyẹ̀wò rẹ̀"], answer: 3, why: "Ẹni tí ó gbọ́ èdè dáadáa lè rí àṣìṣe ìtumọ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Títọ́jú ìwé ọjà pẹ̀lú ìgbà àtúnrà",
          minutes: 6,
          goal: "Ṣe spreadsheet ọjà tí ó ń fi ọjà tí o nílò láti tún rà hàn.",
          text: [
            "Tí ọjà tí ó ń tà jù bá tán, o pàdánù títà; tí ọjà tí kò tà bá pọ̀ jù, owó rẹ á há sínú rẹ̀. Ìwé ọjà rírọrùn ń ràn ọ́ lọ́wọ́. Àwọn òpó: Item (ọjà), Supplier (olùpèsè), On hand (ohun tí ó wà), Sold per week (títà lọ́sẹ̀), Days to arrive (ọjọ́ dídé), Reorder point (ìgbà àtúnrà), Reorder? (ṣé kí a tún rà?)",
            "Ìgbà àtúnrà ni iye tí ó kù tí o fi máa tún rà. Òfin rírọrùn: títà lọ́sẹ̀ x ọ̀sẹ̀ tí ó gbà kí ó dé + díẹ̀ sí i (ọjà ìpamọ́). Tí o bá ń ta 10 lọ́sẹ̀, tí ó gba ọ̀sẹ̀ 1 kí ó dé, tí o sì ń pa 5 mọ́ sí i, tún rà nígbà tí ó bá kù 15.",
            "Ní kí AI ràn ọ́ lọ́wọ́ pẹ̀lú fọ́múlà: \"Nínú Google Sheets, kọ fọ́múlà tí ó máa fi REORDER hàn nígbà tí òpó C bá kéré sí tàbí dọ́gba pẹ̀lú òpó F.\" Ìdáhùn tí ó wọ́pọ̀ ni =IF(C2<=F2,\"REORDER\",\"\"). Dán an wò lórí ìlà díẹ̀ láti rí i dájú pé ó ń ṣiṣẹ́."
          ],
          steps: ["Ṣe òpó méje náà.", "Kọ ọjà 15 rẹ tí ó ń tà jù sínú rẹ̀.", "Ṣírò ìgbà àtúnrà ọ̀kọ̀ọ̀kan: títà lọ́sẹ̀ x ọ̀sẹ̀ dídé + ọjà ìpamọ́.", "Ní kí AI kọ fọ́múlà IF láti fi àmì sí ọjà tí o máa tún rà.", "Dán an wò lórí ìlà díẹ̀, kí o sì máa ṣe àtúnṣe On hand lọ́sẹ̀ọ̀sẹ̀."],
          words: [["Ọjà inú ṣọ́ọ̀bù (stock)", "àwọn ọjà tí o ní lọ́wọ́ láti tà."], ["Ìgbà àtúnrà (reorder point)", "iye tí ó kù tí o fi máa ra sí i."], ["Ọjà ìpamọ́ (safety stock)", "ọjà àfikún tí a pa mọ́ bí títà bá gòkè lójijì tàbí tí ọjà bá pẹ́ dé."]],
          slides: [
            { title: "Ìdí tí a fi ń tọ́jú ọjà", bullets: ["Tí ọjà bá tán, o pàdánù títà", "Ọjà tí kò tà tí ó pọ̀ jù ń há owó mọ́lẹ̀"] },
            { title: "Àwọn òpó ìwé ọjà", bullets: ["Item, Supplier, On hand", "Sold per week, Days to arrive", "Reorder point, Reorder?"] },
            { title: "Ìgbà àtúnrà", bullets: ["Títà lọ́sẹ̀ x ọ̀sẹ̀ dídé + ọjà ìpamọ́", "Àpẹẹrẹ: 10 x 1 + 5 = tún rà ní 15"] },
            { title: "Jẹ́ kí ìwé náà fi àmì sí i", bullets: ["=IF(C2<=F2,\"REORDER\",\"\")", "Dán an wò lórí ìlà díẹ̀", "Ṣe àtúnṣe On hand lọ́sẹ̀ọ̀sẹ̀"] }
          ],
          tryIt: "Ṣe ìwé ọjà rẹ pẹ̀lú ó kéré tán ọjà 15, ṣírò ìgbà àtúnrà, kí o sì fi fọ́múlà IF tí ó ń fi REORDER hàn kún un. Dán an wò nípa yíyí nọ́mbà On hand kan padà.",
          youCanNow: "tọ́jú ìwé ọjà tí ó ń sọ fún ọ ìgbà tí o máa tún rà.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ọjà ìpamọ́ (safety stock)?", options: ["Ọjà tí a tì pa sínú yàrá", "Ọjà tí kì í tà rárá", "Ọjà àfikún bí títà bá gòkè tàbí tí ọjà bá pẹ́ dé", "Ọjà tí o dá padà fún olùpèsè"], answer: 2, why: "Ọjà ìpamọ́ ń dáàbò bò ọ́ lọ́wọ́ ìyàlẹ́nu nínú títà tàbí dídé ọjà." },
            { objective: "O3", q: "AI kọ fọ́múlà fún àmì àtúnrà rẹ. Kí ni o máa ṣe tẹ̀lé e?", options: ["Dán an wò lórí ìlà díẹ̀ nípa yíyí nọ́mbà On hand padà", "Gbà á gbọ́ fún gbogbo ọjà", "Pa fọ́múlà náà rẹ́", "Dà á kọ sí gbogbo ìwé láìṣàyẹ̀wò"], answer: 0, why: "Dídán fọ́múlà wò lórí ìlà díẹ̀ ń fi hàn bóyá ó ń ṣiṣẹ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ọjà, àmì àti ọjà inú ṣọ́ọ̀bù",
        questions: [
          { objective: "O1", q: "Ta ni ó ń fúnni ní òtítọ́ inú àpèjúwe ọjà?", options: ["Àròbájọ AI", "Ìwọ, láti àmì ọjà tàbí ìwé owó", "Alátakò rẹ", "Èrò oníbàárà kan"], answer: 1, why: "AI ń kọ ọ̀rọ̀; ìwọ ni ó ń fúnni ní òtítọ́ tí o ti ṣàyẹ̀wò." },
          { objective: "O1", q: "AI kọ pé ìpara ara rẹ \"ń wo eczema sàn\". Kí ni o máa ṣe?", options: ["Fi \"ó dájú\" kún un", "Fi sílẹ̀", "Kọ ọ́ tóbi sí i", "Yọ ọ́ kúrò àyàfi tí o bá lè fi hàn"], answer: 3, why: "FTC ń béèrè ẹ̀rí fún ohun tí a sọ." },
          { objective: "O2", q: "Àmì àdínwó gbọ́dọ̀ fi hàn:", options: ["Ọjọ́ ìparí gidi àti òdiwọ̀n èyíkéyìí", "Kò sí iye owó", "Ọ̀rọ̀ aṣínà rẹ", "Iye owó àtijọ́ èké"], answer: 0, why: "Àmì àdínwó tí ó jẹ́ òtítọ́ ní ọjọ́ àti òdiwọ̀n." },
          { objective: "O3", q: "O ń ta 8 lọ́sẹ̀, ọjà ń gba ọ̀sẹ̀ 2 kí ó dé, ọjà ìpamọ́ jẹ́ 4. Kí ni ìgbà àtúnrà?", options: ["8", "12", "14", "20"], answer: 3, why: "8 x 2 + 4 = 20." },
          { objective: "O3", q: "Kí ni =IF(C2<=F2,\"REORDER\",\"\") ń ṣe?", options: ["Ó ń ṣírò àpapọ̀ títà", "Ó ń pa ìlà rẹ́", "Ó ń fi REORDER hàn nígbà tí ohun tí ó wà bá dé ìgbà àtúnrà tàbí kéré sí i", "Ó ń fi ìbéèrè ọjà ránṣẹ́ sí olùpèsè"], answer: 2, why: "Ó ń fi àmì sí ọjà tí ó nílò àtúnrà." }
        ]
      }
    },
    {
      name: "Orí 2: Kíka ìtajà àti ṣíṣètò ìpolówó",
      lessons: [
        {
          objectives: ["O4"],
          title: "Wíwá ọjà tí ó ń tà jù àti èyí tí ó ń lọ́ra jù",
          minutes: 5,
          goal: "Lo ìròyìn ìtajà àti ìrànlọ́wọ́ AI láti rí ọjà tí ó ń tà jù àti èyí tí ó ń lọ́ra jù.",
          text: [
            "Ọ̀pọ̀ ẹ̀rọ ìgbowó (POS, point of sale) lè gbé ìròyìn ìtajà ọjà kọ̀ọ̀kan jáde bí fáìlì tí o lè ṣí nínú spreadsheet. Tí tìrẹ kò bá lè ṣe é, kíka títà ọjà kọ̀ọ̀kan lọ́sẹ̀ọ̀sẹ̀ pẹ̀lú ọwọ́ náà ṣiṣẹ́.",
            "To wọ́n ní ìlànà iye ọjà tí a tà àti iye owó tí ó wọlé. Ọjà tí ó ń tà jù yẹ fún ààyè tó dára lórí pẹpẹ, kò sì gbọdọ̀ tán láéláé. Ọjà tí ó ń lọ́ra jù lè nílò ibi tó dára jù, kí a so ó pọ̀ mọ́ ọjà míì, kí a dín owó rẹ̀ kù, tàbí kí a dá títà rẹ̀ dúró.",
            "O lè fi àpapọ̀ ọjà (láìsí ìsọfúnni oníbàárà) sínú olùrànlọ́wọ́ AI: \"Èyí ni ìtajà ọ̀sẹ̀ 8 ti ṣọ́ọ̀bù ẹ̀bùn mi. Ọjà wo ni ó ń gòkè, èwo ni ó ń dínkù, èwo sì ni ti àsìkò? Ìbéèrè wo ni kí n béèrè?\" Ka ìdáhùn sí èrò lásán, kí o sì jẹ́rìí sí wọn nínú ìròyìn rẹ."
          ],
          steps: ["Gbé ìròyìn ìtajà ọjà kọ̀ọ̀kan jáde tàbí kà á pẹ̀lú ọwọ́.", "To ó ní ìlànà iye ọjà àti iye owó.", "Sàmì sí mẹ́ta òkè àti mẹ́ta ìsàlẹ̀.", "Béèrè àpẹẹrẹ lọ́wọ́ AI pẹ̀lú àpapọ̀ ọjà nìkan.", "Jẹ́rìí sí àpẹẹrẹ kọ̀ọ̀kan nínú ìròyìn rẹ."],
          words: [["POS", "point of sale (ibi ìgbowó): ẹ̀rọ tí ó ń gba owó tí ó sì ń kọ títà sílẹ̀."], ["Gbígbé jáde (export)", "fífi ìsọfúnni láti inú ẹ̀rọ kan pamọ́ bí fáìlì tí o lè ṣí níbòmíì."], ["Àdínwó (markdown)", "iye owó tí a dín kù láti ta ọjà tí kò tà."]],
          slides: [
            { title: "Gba àwọn nọ́mbà", bullets: ["Gbé ìròyìn ìtajà ọjà kọ̀ọ̀kan jáde láti POS rẹ", "Tàbí ka títà ọjà kọ̀ọ̀kan lọ́sẹ̀ọ̀sẹ̀"] },
            { title: "To ó lọ́nà méjì", bullets: ["Nípa iye ọjà tí a tà", "Nípa iye owó tí ó wọlé", "Sàmì sí mẹ́ta òkè àti mẹ́ta ìsàlẹ̀"] },
            { title: "AI fún wíwá àpẹẹrẹ", bullets: ["Àpapọ̀ ọjà nìkan, kò sí ìsọfúnni oníbàárà", "Ń gòkè, ń dínkù, ti àsìkò?", "Jẹ́rìí sí i nínú ìròyìn rẹ"] }
          ],
          tryIt: "Gba ìtajà ọ̀sẹ̀ 4 sí 8 fún ọjà kọ̀ọ̀kan. Wá mẹ́ta òkè àti mẹ́ta ìsàlẹ̀ rẹ, lẹ́yìn náà béèrè lọ́wọ́ AI àpẹẹrẹ tí ó rí, kí o sì jẹ́rìí sí ọ̀kan.",
          youCanNow: "wá ọjà tí ó ń tà jù àti èyí tí ó ń lọ́ra jù, kí o sì fi nọ́mbà tìrẹ ṣàyẹ̀wò èrò AI.",
          quickCheck: [
            { objective: "O4", q: "Kí ni POS dúró fún?", options: ["Iye owó lórí pẹpẹ", "Point of sale (ibi ìgbowó)", "Ìwé ìbéèrè ọjà", "Èrè tàbí títà"], answer: 1, why: "POS túmọ̀ sí point of sale, ẹ̀rọ tí ó ń kọ títà rẹ sílẹ̀." },
            { objective: "O4", q: "O fẹ́ kí AI ràn ọ́ lọ́wọ́ láti ka ìtajà rẹ. Kí ni o máa fi sínú rẹ̀?", options: ["Orúkọ oníbàárà àti nọ́mbà káàdì", "Ọ̀rọ̀ aṣínà olùpèsè rẹ", "Gbogbo ìwọlé POS rẹ", "Àpapọ̀ ọjà nìkan"], answer: 3, why: "Àpapọ̀ ọjà ti tó, ìsọfúnni àdáni kò sì gbọdọ̀ wọ inú AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣètò ìpolówó àsìkò láti inú nọ́mbà rẹ",
          minutes: 5,
          goal: "Ṣètò ìpolówó pẹ̀lú àwọn ọjà, iye owó, ọjọ́ àti àyẹ̀wò èrè.",
          text: [
            "Ìtajà ń tẹ̀lé àsìkò: ìpadàbọ̀ sí ilé-ìwé, ọdún, ìkẹ́kọ̀ọ́jáde, ìgbà ẹ̀rùn, àjọ̀dún ìbílẹ̀ àti ayẹyẹ àṣà tí ó ṣe pàtàkì sí oníbàárà rẹ. Ṣètò ìpolówó ní oṣù kan ṣáájú.",
            "Lo nọ́mbà rẹ: polówó ọjà tí ó ń tà dáadáa ní àsìkò náà, tàbí so ọjà tí ó ń lọ́ra pọ̀ mọ́ ọjà tí ó ń tà jù. Béèrè èrò lọ́wọ́ AI: \"Ọjà tí ó ń tà jù lọ́dọ̀ mi ni irun dídì; èyí tí ó ń lọ́ra ni fìlà oorun satin. Fún mi ní èrò àkójọ ọjà mẹ́ta fún ìpadàbọ̀ sí ilé-ìwé tí ó ṣì ń mú èrè wá.\"",
            "Ṣàyẹ̀wò ìṣirò: iye owó títà, iye owó rírà, èrè lórí títà kọ̀ọ̀kan, àti iye tí o nílò láti tà. Kọ ọjọ́ àti òdiwọ̀n sílẹ̀, kí o sì ra ọjà tí ó tó nípa lílo ìwé àtúnrà rẹ."
          ],
          steps: ["Yan àsìkò tàbí ayẹyẹ kan.", "Yan ọjà láti inú ìròyìn ìtajà rẹ.", "Béèrè èrò ìpolówó tàbí àkójọ ọjà lọ́wọ́ AI.", "Ṣàyẹ̀wò èrè lórí títà kọ̀ọ̀kan lórí ìwé.", "Ṣètò ọjọ́ àti òdiwọ̀n, kí o sì ra ọjà."],
          words: [["Ìpolówó (promotion)", "ìfilọ̀ pàtàkì fún àkókò kan pàtó."], ["Àkójọ ọjà (bundle)", "ọjà méjì tàbí jù bẹ́ẹ̀ lọ tí a ń tà pọ̀ ní iye owó kan."]],
          slides: [
            { title: "Ṣètò ní oṣù kan ṣáájú", bullets: ["Ìpadàbọ̀ sí ilé-ìwé, ọdún, ìkẹ́kọ̀ọ́jáde", "Àjọ̀dún ìbílẹ̀ àti ayẹyẹ àṣà"] },
            { title: "Lo nọ́mbà rẹ", bullets: ["Polówó ọjà tí ó ń tà jù ní àsìkò náà", "So ọjà tí ó ń lọ́ra pọ̀ mọ́ èyí tí ó ń tà jù"] },
            { title: "Ṣàyẹ̀wò kí o tó bẹ̀rẹ̀", bullets: ["Iye owó títà, iye owó rírà àti èrè lórí títà kọ̀ọ̀kan", "Ọjọ́ àti òdiwọ̀n", "Ọjà tí ó tó ti wà lójú ọ̀nà"] }
          ],
          tryIt: "Ṣètò ìpolówó kan fún àsìkò tí ó ń bọ̀: àwọn ọjà, iye owó, èrè lórí títà kọ̀ọ̀kan, ọjọ́, àti iye ọjà tí o nílò.",
          youCanNow: "ṣètò ìpolówó àsìkò láti inú nọ́mbà ìtajà tìrẹ.",
          quickCheck: [
            { objective: "O5", q: "Kí ni àkójọ ọjà (bundle)?", options: ["Ọjà tí a ń tà pọ̀ ní iye owó kan", "Àpótí ọjà tí a dá padà", "Ọjà tí olùpèsè gbé wá", "Irú àmì kan"], answer: 0, why: "Àkójọ ọjà ń kó ọjà pọ̀ ní iye owó kan, ó sábà máa ń so ọjà tí ó ń lọ́ra pọ̀ mọ́ èyí tí ó ń tà jù." },
            { objective: "O5", q: "O ń ṣètò ìpolówó fún ọdún. Kí ni o máa ṣàyẹ̀wò kí o tó bẹ̀rẹ̀ rẹ̀?", options: ["Bí àmì ṣe rí nìkan", "Iye tí alátakò rẹ ń tà", "Èrè lórí títà kọ̀ọ̀kan àti bóyá ọjà tó", "Bóyá AI fẹ́ràn èrò náà"], answer: 2, why: "Ìpolówó gbọ́dọ̀ mú èrè wá, ọjà tí ó tó sì gbọdọ̀ wà lẹ́yìn rẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Wíwọn ìpolówó àti dídáàbò bo ṣọ́ọ̀bù rẹ",
          minutes: 5,
          goal: "Wọn èsì ìpolówó kí o sì dáàbò bo ìsọfúnni ṣọ́ọ̀bù.",
          text: [
            "Pinnu bí o ṣe máa wọ̀n án kí o tó bẹ̀rẹ̀: iye ọjà ìpolówó tí a tà, àpapọ̀ títà láàárín ọjọ́ náà tí a fi wé ọ̀sẹ̀ kan náà ṣáájú, àti èrè. Kóòdù ìpolówó (promo code) tàbí bọ́tìnnì POS ọ̀tọ̀ fún àkójọ ọjà ń mú kí títọpa rẹ̀ rọrùn.",
            "Lẹ́yìn náà, ní kí AI ràn ọ́ lọ́wọ́ láti kọ àkópọ̀ kúkúrú láti inú nọ́mbà rẹ: ohun tí ó ṣiṣẹ́, ohun tí kò ṣiṣẹ́, ohun tí o máa gbìyànjú nígbà míì. Ṣàyẹ̀wò ìṣirò rẹ̀ pẹ̀lú ìwé rẹ.",
            "Dáàbò bo ìsọfúnni ṣọ́ọ̀bù: má ṣe fi orúkọ oníbàárà, nọ́mbà káàdì, ọ̀rọ̀ aṣínà olùpèsè tàbí ìsọfúnni òṣìṣẹ́ sínú irinṣẹ́ AI. Ṣọ́ra fún ìwé owó olùpèsè èké àti ìbéèrè owó \"kíákíá\"; pe olùpèsè lórí nọ́mbà tí o mọ̀."
          ],
          steps: ["Yan bí o ṣe máa wọ̀n án kí ìpolówó tó bẹ̀rẹ̀.", "Fi kóòdù tàbí bọ́tìnnì POS kún un láti tọpa rẹ̀.", "Fi wé ọ̀sẹ̀ kan náà ṣáájú.", "Ní kí AI ràn ọ́ lọ́wọ́ láti ṣe àkópọ̀, kí o sì ṣàyẹ̀wò ìṣirò.", "Pa ìsọfúnni oníbàárà àti olùpèsè mọ́ kúrò nínú AI."],
          words: [["Àkókò ìfiwéra", "àkókò tí ó ti kọjá tí o fi èsì wé, bí ọ̀sẹ̀ kan náà ní oṣù tí ó kọjá."], ["Kóòdù ìpolówó (promo code)", "kóòdù tí ó ń fi ẹni tí ó lo ìfilọ̀ kan hàn."]],
          slides: [
            { title: "Kọ́kọ́ pinnu bí o ṣe máa wọ̀n án", bullets: ["Iye ọjà ìpolówó tí a tà", "Títà tí a fi wé ọ̀sẹ̀ kan náà ṣáájú", "Èrè"] },
            { title: "Mú kí títọpa rọrùn", bullets: ["Kóòdù ìpolówó tàbí bọ́tìnnì POS fún àkójọ ọjà", "AI ń ràn ọ́ lọ́wọ́ láti kọ àkópọ̀; ìwọ ń ṣàyẹ̀wò ìṣirò"] },
            { title: "Dáàbò bo ṣọ́ọ̀bù rẹ", bullets: ["Kò sí ìsọfúnni oníbàárà, káàdì, olùpèsè tàbí òṣìṣẹ́ nínú AI", "Pe olùpèsè lórí nọ́mbà tí o mọ̀ nípa ìwé owó"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kó àpò irinṣẹ́ ìtajà rẹ jọ: àpèjúwe ọjà márùn-ún, àmì orí pẹpẹ mẹ́ta, ìwé ọjà rẹ pẹ̀lú àmì àtúnrà, ọjà tí ó ń tà jù àti èyí tí ó ń lọ́ra jù, àti ètò ìpolówó rẹ pẹ̀lú bí o ṣe máa wọ̀n án.",
          youCanNow: "ṣe ìpolówó kí o sì wọ̀n án, kí o sì lo AI láìléwu nínú gbogbo iṣẹ́ àkọsílẹ̀ ṣọ́ọ̀bù rẹ.",
          quickCheck: [
            { objective: "O6", q: "Báwo ni o ṣe ń wọn ìpolówó?", options: ["Nípa bí ṣọ́ọ̀bù ṣe dà bí ẹni pé èrò pọ̀", "Nípa fífi wé ọ̀sẹ̀ kan náà ṣáájú", "Nípa kíka àmì tí a tẹ̀ jáde", "Nípa níní kí AI fojú díwọ̀n"], answer: 1, why: "Fífi wé ọ̀sẹ̀ kan náà ṣáájú ń fi ìyàtọ̀ gidi hàn." },
            { objective: "O6", q: "Ímeèlì kan sọ pé olùpèsè rẹ ní àkáǹtì báńkì tuntun, o sì gbọdọ̀ sanwó lónìí. Kí ni o máa ṣe?", options: ["Sanwó lẹ́sẹ̀kẹsẹ̀", "Fi ìwọlé báńkì rẹ dá a lóhùn", "Fi ránṣẹ́ sí àwọn oníbàárà", "Pe olùpèsè lórí nọ́mbà tí o ti mọ̀ tẹ́lẹ̀"], answer: 3, why: "Pípe nọ́mbà tí o mọ̀ ń ṣàyẹ̀wò ìbéèrè owó kíákíá láìléwu." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíka ìtajà àti ṣíṣètò ìpolówó",
        questions: [
          { objective: "O4", q: "POS rẹ kò lè gbé ìròyìn jáde. Kí ni o lè ṣe?", options: ["Máa ka títà ọjà kọ̀ọ̀kan lọ́sẹ̀ọ̀sẹ̀ pẹ̀lú ọwọ́", "Fojú díwọ̀n", "Béèrè lọ́wọ́ alátakò", "Dá títọpa dúró"], answer: 0, why: "Kíkà pẹ̀lú ọwọ́ ṣì ń fi àpẹẹrẹ hàn." },
          { objective: "O4", q: "Kí ni ó lè ran ọjà tí ó ń lọ́ra lọ́wọ́?", options: ["Rírà púpọ̀ sí i", "Fífi pamọ́", "Gbígbé owó rẹ̀ sókè púpọ̀", "Àkójọ pẹ̀lú ọjà tí ó ń tà jù"], answer: 3, why: "Àkójọ ọjà lè mú kí ọjà tí ó ń lọ́ra tà." },
          { objective: "O5", q: "Kí o tó bẹ̀rẹ̀ àkójọ ọjà, o gbọdọ̀ ṣàyẹ̀wò:", options: ["Àwọ̀ nìkan", "Èrè lórí títà kọ̀ọ̀kan", "Ìràwọ̀ rẹ", "Kò sí nǹkan"], answer: 1, why: "Ìpolówó ṣì gbọdọ̀ mú owó wá." },
          { objective: "O6", q: "Báwo ni o ṣe lè tọpa ìpolówó lọ́nà tí ó rọrùn?", options: ["Kóòdù ìpolówó tàbí bọ́tìnnì POS fún un", "Ìrántí", "Níní kí AI fojú díwọ̀n", "Kíka mọ́tò àwọn oníbàárà"], answer: 0, why: "Kóòdù àti bọ́tìnnì ń kọ títà kọ̀ọ̀kan sílẹ̀." },
          { objective: "O6", q: "Ímeèlì kan sọ pé olùpèsè rẹ yí ìsọfúnni báńkì padà, kí o sì sanwó lónìí. Ìwọ:", options: ["Fi ọ̀rọ̀ aṣínà rẹ dá a lóhùn", "Sanwó báyìí", "Pe olùpèsè lórí nọ́mbà tí o mọ̀", "Fi ránṣẹ́ sí àwọn oníbàárà"], answer: 2, why: "Ìwé owó olùpèsè èké jẹ́ jìbìtì tí ó wọ́pọ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Àwọn Ilé Ìtajà",
    questions: [
      { objective: "O1", q: "Àpèjúwe ọjà ń dáhùn:", options: ["Ọ̀rọ̀ aṣínà rẹ", "Ohun tí ó jẹ́, ẹni tí ó wà fún, ìdí tí wọ́n fi máa fẹ́ ẹ", "Báńkì olùpèsè", "Kò sí nǹkan"], answer: 1, why: "Apá mẹ́ta yẹn ń ran oníbàárà lọ́wọ́ láti pinnu." },
      { objective: "O1", q: "Níbo ni o ti ń ṣàyẹ̀wò òtítọ́ nípa ọjà?", options: ["Lọ́dọ̀ alátakò", "Lọ́dọ̀ AI", "Nínú ìfiránṣẹ́ ìkànnì àwùjọ", "Àmì ọjà tàbí ìwé owó"], answer: 3, why: "Àmì ọjà àti ìwé owó ní òtítọ́ gidi." },
      { objective: "O1", q: "FTC sọ pé ohun tí ìpolówó sọ gbọ́dọ̀:", options: ["Wà ní lẹ́tà ńlá", "Dùn mọ́ni", "Kúrú", "Jẹ́ òtítọ́, kí ẹ̀rí sì wà lẹ́yìn rẹ̀"], answer: 3, why: "Ìyẹn ni òṣùwọ̀n FTC." },
      { objective: "O2", q: "Iye owó lórí àmì orí pẹpẹ gbọ́dọ̀:", options: ["Jẹ́ èyí tí a gbé sókè", "Bá ti ẹ̀rọ ìgbowó mu", "Wà ní ìpamọ́", "Máa yí padà lójoojúmọ́"], answer: 1, why: "Iye owó tí kò bára mu ń bí oníbàárà nínú." },
      { objective: "O2", q: "Ta ni ó yẹ kí ó ṣàyẹ̀wò àmì tí a túmọ̀?", options: ["Ẹni tí ó ń tẹ̀wé", "Kò sí ẹnìkan", "Ẹni tí ó gbọ́ èdè náà dáadáa", "Ojú-òpó wẹ́ẹ̀bù èyíkéyìí"], answer: 2, why: "Ìtumọ̀ AI lè ní àṣìṣe." },
      { objective: "O2", q: "Àmì orí pẹpẹ tí ó dára:", options: ["Kò ju nǹkan bí ọ̀rọ̀ 12 lọ", "Gùn tó ojú-ewé kan", "Ṣófo", "Wà ní lẹ́tà kékeré jù"], answer: 0, why: "Àmì kúkúrú ni a ń kà kíákíá." },
      { objective: "O3", q: "Kí ni ọjà ìpamọ́ (safety stock)?", options: ["Ìbánigbófò", "Àpótí owó tí a tì", "Ọjà àfikún bí títà bá gòkè tàbí tí ọjà bá pẹ́ dé", "Ọjà tí ọjọ́ rẹ̀ ti kọjá"], answer: 2, why: "Ó ń dáàbò bò ọ́ kí ọjà má baà tán." },
      { objective: "O3", q: "Títà 5 lọ́sẹ̀, ọjà ń dé ní ọ̀sẹ̀ 2, ọjà ìpamọ́ 5. Ìgbà àtúnrà?", options: ["7", "10", "15", "25"], answer: 2, why: "5 x 2 + 5 = 15." },
      { objective: "O3", q: "Lẹ́yìn tí AI bá kọ fọ́múlà spreadsheet, o gbọdọ̀:", options: ["Gbà á gbọ́", "Dán an wò lórí ìlà díẹ̀", "Pa á rẹ́", "Tẹ̀ ẹ́ jáde"], answer: 1, why: "Fọ́múlà lè ṣàṣìṣe." },
      { objective: "O3", q: "Kí ló dé tí a fi ń tọ́jú ọjà?", options: ["Láti da òṣìṣẹ́ láàmú", "Fún ìgbádùn", "Nítorí AI sọ bẹ́ẹ̀", "Kí ọjà má baà máa tán, kí ọjà tí kò tà má sì pọ̀ jù"], answer: 3, why: "Àwọn méjèèjì ń ná ọ lówó." },
      { objective: "O4", q: "POS dúró fún:", options: ["Point of sale (ibi ìgbowó)", "Iye owó iṣẹ́", "Ìwé ilé ìfìwéránṣẹ́", "Ìwé ìbéèrè ọjà"], answer: 0, why: "Ó ń gba owó títà." },
      { objective: "O4", q: "Títo ní ìlànà iye owó tí ó wọlé ń fi hàn:", options: ["Wákàtí òṣìṣẹ́", "Èyí tí ó wúwo jù", "Èyí tí ó jẹ́ tuntun jù", "Ọjà tí ó ń mú owó tí ó pọ̀ jù wọlé"], answer: 3, why: "Owó ń fi owó tí ọjà kọ̀ọ̀kan mú wọlé hàn." },
      { objective: "O4", q: "Nígbà tí o bá ń fi ìtajà sínú AI, fi kún un:", options: ["Nọ́mbà káàdì", "Orúkọ oníbàárà", "Àpapọ̀ ọjà nìkan", "Ọ̀rọ̀ aṣínà olùpèsè"], answer: 2, why: "Kò sí ìsọfúnni àdáni." },
      { objective: "O5", q: "Ìgbà wo ni o yẹ kí o ṣètò ìpolówó àsìkò?", options: ["Ní ọjọ́ kan náà", "Nǹkan bí oṣù kan ṣáájú", "Lẹ́yìn àsìkò náà", "Láéláé"], answer: 1, why: "Àkókò láti ra ọjà àti ṣe àmì." },
      { objective: "O5", q: "Kí ni àkójọ ọjà (bundle)?", options: ["Ọjà tí ó ti bàjẹ́", "Owó orí", "Owó ẹ̀yáwó", "Ọjà tí a ń tà pọ̀ ní iye owó kan"], answer: 3, why: "Àkójọ ọjà ń kó ọjà pọ̀." },
      { objective: "O5", q: "Kí ìpolówó tó bẹ̀rẹ̀, lo ìwé àtúnrà rẹ láti:", options: ["Fi iye owó pamọ́", "Pa ọjà rẹ́", "Rí i dájú pé ọjà tó", "San owó òṣìṣẹ́"], answer: 2, why: "Tí ọjà bá tán, ìpolówó á bàjẹ́." },
      { objective: "O6", q: "Wọn ìpolówó nípa fífi wé:", options: ["Ọ̀sẹ̀ kan náà ṣáájú", "Àròbájọ alátakò", "Kò sí nǹkan", "Ọdún tí ó ń bọ̀"], answer: 0, why: "Àkókò ìfiwéra ń fi ìyípadà hàn." },
      { objective: "O6", q: "Nígbà tí AI bá kọ àkópọ̀ ìpolówó rẹ, ìwọ:", options: ["Gba gbogbo nọ́mbà gbọ́", "Ṣàyẹ̀wò ìṣirò rẹ̀ pẹ̀lú ìwé rẹ", "Kò ní kà á", "Gbé e jáde láìkà á"], answer: 1, why: "AI lè ṣàṣìṣe nínú ìṣirò." },
      { objective: "O6", q: "Èwo ni kò gbọdọ̀ wọ inú irinṣẹ́ AI láéláé?", options: ["Orúkọ ọjà", "Ọ̀rọ̀ aṣínà àkáǹtì olùpèsè", "Àpapọ̀ ọ̀sẹ̀", "Orúkọ àsìkò"], answer: 1, why: "Ọ̀rọ̀ aṣínà jẹ́ àṣírí." },
      { objective: "O5", q: "Ìpinnu wo ni ẹ̀kọ́ yìí fi sílẹ̀ fún ọ, kì í ṣe fún AI?", options: ["Ọjà wo ni a ó polówó àti ní iye owó wo", "Bí a ṣe kọ ọ̀rọ̀ àkọlé kan", "Èrò fún àkójọ ọjà", "Ọ̀rọ̀ orí àmì"], answer: 0, why: "AI ń dábàá; ìwọ ni ó ń pinnu pẹ̀lú nọ́mbà rẹ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      1,
      3,
      6,
      7,
      10,
      12,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àpèjúwe ọjà",
        objective: "O1",
        notYet: "Kò tó márùn-ún, tàbí ohun kan tí a sọ kò sí lórí àmì ọjà.",
        meets: "Àpèjúwe kúkúrú márùn-ún tí ó jẹ́ òtítọ́, tí a ti ṣàyẹ̀wò pẹ̀lú àmì ọjà.",
        exceeds: "Ọ̀kọ̀ọ̀kan sọ ohun tí ọjà jẹ́, ẹni tí ó wà fún àti ìdí tí wọ́n fi máa fẹ́ ẹ."
      },
      {
        name: "Àmì orí pẹpẹ",
        objective: "O2",
        notYet: "Kò tó mẹ́ta, tàbí iye owó kan kò bá ti ẹ̀rọ ìgbowó mu.",
        meets: "Àmì mẹ́ta tí ó yé pẹ̀lú iye owó tí ó bá ti ẹ̀rọ ìgbowó mu.",
        exceeds: "Àmì àdínwó fi ọjọ́ ìparí àti òdiwọ̀n hàn; a ti ṣàyẹ̀wò ìtumọ̀."
      },
      {
        name: "Ìwé ọjà",
        objective: "O3",
        notYet: "Kò tó ọjà 15, tàbí kò sí àmì àtúnrà tí ó ń ṣiṣẹ́.",
        meets: "Ọjà 15 tàbí jù bẹ́ẹ̀ lọ pẹ̀lú ìgbà àtúnrà àti àmì REORDER tí a ti dánwò.",
        exceeds: "Ìgbà àtúnrà ọjà kọ̀ọ̀kan ní ọjà ìpamọ́ nínú."
      },
      {
        name: "Ọjà tí ó ń tà jù àti èyí tí ó ń lọ́ra jù",
        objective: "O4",
        notYet: "Kò sí àkọsílẹ̀ òkè tàbí ìsàlẹ̀, tàbí àròbájọ ni a fi ṣe é.",
        meets: "Mẹ́ta òkè àti mẹ́ta ìsàlẹ̀ láti inú nọ́mbà ìtajà gidi.",
        exceeds: "A ti jẹ́rìí sí àpẹẹrẹ AI kan nínú nọ́mbà, pẹ̀lú èrò kan fún ọjà tí ó ń lọ́ra."
      },
      {
        name: "Ètò ìpolówó",
        objective: "O5",
        notYet: "Àwọn ọjà, iye owó, ọjọ́ tàbí àyẹ̀wò èrè kò sí.",
        meets: "Àwọn ọjà, iye owó, èrè lórí títà kọ̀ọ̀kan, ọjọ́ àti ọjà tí a nílò.",
        exceeds: "Ó sọ bí a ó ṣe wọ̀n án pẹ̀lú ọ̀sẹ̀ kan náà ṣáájú."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olówó tí wọ́n ń ṣe àtúnṣe ìwé ọjà wọn lọ́sẹ̀ọ̀sẹ̀ (ìwádìí àtẹ̀lé ọjọ́ 30)",
      "Àwọn olówó tí wọ́n sọ pé ọjà tí ó ń tà jù kò tán mọ́ wọn lọ́wọ́ tó bẹ́ẹ̀ mọ́ láàárín ọjọ́ 60",
      "Àwọn olówó tí wọ́n ṣe ìpolówó àsìkò tí wọ́n sì ròyìn èsì tí wọ́n wọ̀n"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní Google Sheets tàbí Excel (fóònù ṣiṣẹ́ fún àpèjúwe àti àmì)",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: Microsoft Copilot, ChatGPT tàbí Google Gemini",
      "Àmì ọjà tàbí ìwé owó, àti ìtajà ọ̀sẹ̀ 4 sí 8 fún ọjà kọ̀ọ̀kan láti ẹ̀rọ ìgbowó tàbí kíkà pẹ̀lú ọwọ́",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ní kí àwọn olówó mú àmì ọjà tàbí ìwé owó wá, pẹ̀lú ìròyìn ìtajà tàbí kíkà ọ̀sẹ̀.",
      "Ẹ jọ ṣe àpẹẹrẹ ìgbà àtúnrà kan lórí pátákó kí àwọn olówó tó ṣe ìwé tiwọn.",
      "Má ṣe fi ọ̀rọ̀ aṣínà olùpèsè, orúkọ oníbàárà tàbí ìsọfúnni káàdì sínú AI láéláé; àpapọ̀ ọjà ti tó.",
      "Rán àwọn olówó létí pé àwọn, kì í ṣe AI, ni ó ń pinnu ọjà tí a ó polówó àti iye owó rẹ̀.",
      "Fi rubric ṣe àmì fún àpò irinṣẹ́ ìtajà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
