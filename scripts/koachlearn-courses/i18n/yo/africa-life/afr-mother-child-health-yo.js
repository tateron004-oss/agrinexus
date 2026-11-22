"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-mother-child-health.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Safety rule kept from the English: no medicine doses, treatment plans or diagnosis; every lesson points to the clinic, the midwife, the community health worker and the ministry of health.

const WHO_ANC = { name: "WHO (Àjọ Ìlera Àgbáyé): Ìlànà tuntun fún ìtọ́jú oyún fún ìrírí oyún tó dára (ìpàdé mẹ́jọ, èyí àkọ́kọ́ láàárín ọ̀sẹ̀ 12 àkọ́kọ́)", url: "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience" };
const WHO_MATERNAL = { name: "Ìwé òtítọ́ WHO: Ikú ìyá nígbà oyún àti ìbímọ (àwọn ohun tó ń fà á jù lọ; ìtọ́jú òṣìṣẹ́ tí a kọ́ ṣáájú, nígbà àti lẹ́yìn ìbímọ)", url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" };
const WHO_NEWBORN = { name: "Ìwé òtítọ́ WHO: Ikú ọmọ tuntun (ìtọ́jú ọmọ tuntun àti àwọn àmì ewu ọmọ tuntun)", url: "https://www.who.int/news-room/fact-sheets/detail/newborn-mortality" };
const WHO_IYCF = { name: "Ìwé òtítọ́ WHO: Bí a ṣe ń bọ́ ìkókó àti ọmọ kékeré", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_DIARRHOEA = { name: "Ìwé òtítọ́ WHO: Àìsàn ìgbẹ́ gbuuru (ìdènà, ìtọ́jú nílé, àwọn àmì àìtó omi nínú ara)", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_IMMUNIZATION = { name: "Ìwé òtítọ́ WHO: Àjẹsára (àwọn àìsàn tí àjẹsára ọmọdé ń dènà)", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" };

module.exports = {
  id: "afr-mother-child-health-yo",
  lang: "yo",
  translationOf: "afr-mother-child-health",
  category: "Africa: Life and Work",
  name: "Ìlera Ìyá àti Ọmọ: Oyún, Ìbímọ àti Àwọn Ọdún Àkọ́kọ́",
  skills: "Ṣíṣètò lílọ sí ilé-ìwòsàn nígbà oyún, Dídá àwọn àmì ewu mọ̀ nígbà oyún àti lẹ́yìn ìbímọ, Ṣíṣe ètò ìbímọ, Títọ́jú ọmọ tuntun ní àwọn ọjọ́ àkọ́kọ́, Dídá àwọn àmì ewu mọ̀ lára ìkókó tàbí ọmọ kékeré, Mímú káàdì ìlera ọmọ wà ní àkókò",
  outcome: "ṣe ètò ìlera ẹbí tó rọrùn fún oyún àti fún ọmọ kékeré: ìgbà tí ẹ máa lọ sí ilé-ìwòsàn, ibi tí ọmọ máa ti bí àti bí ẹ ṣe máa débẹ̀, bí ẹ ṣe máa tọ́jú ọmọ tuntun, àwọn àmì ewu tó túmọ̀ sí \"lọ sí ilé-ìwòsàn báyìí\", àti bí ẹ ṣe máa mú àjẹsára àti àyẹ̀wò ìdàgbàsókè wà ní àkókò.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ìyá àti àwọn obìnrin tó lóyún, àwọn bàbá, àwọn ìyá-àgbà, àwọn ẹ̀gbọ́n obìnrin àti ẹnikẹ́ni tó ń ran obìnrin tó lóyún tàbí ọmọ kékeré lọ́wọ́, ní ìlú àti abúlé káàkiri Áfíríkà. O kò nílò ẹ̀kọ́ ìlera kankan tẹ́lẹ̀.",
    "Orí 1 sọ nípa oyún àti ìbímọ: lílọ sí ilé-ìwòsàn, àwọn àmì ewu tó túmọ̀ sí \"lọ báyìí\", àti ètò ìbímọ. Orí 2 sọ nípa àwọn ọjọ́ àkọ́kọ́ àti àwọn ọdún àkọ́kọ́ ọmọ: ìtọ́jú ọmọ tuntun, àwọn àmì ewu lára ìkókó àti ọmọ kékeré, àti oúnjẹ, àjẹsára àti àyẹ̀wò ìdàgbàsókè.",
    "Ẹ̀kọ́ yìí ń kọ́ni nípa ìdènà àìsàn, àṣà ìlera tó dára àti ìgbà tí a gbọ́dọ̀ wá ìrànlọ́wọ́. Kò sọ oògùn tí o máa lò tàbí iye rẹ̀, kò sì dípò nọ́ọ̀sì, agbẹ̀bí, dókítà tàbí òṣìṣẹ́ ìlera àdúgbò. Máa tẹ̀lé ilé-ìwòsàn rẹ àti iléeṣẹ́ ètò ìlera ní orílẹ̀-èdè rẹ nígbà gbogbo. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ìlera ẹbí ojú-ìwé kan fún oyún kan tàbí ọmọ kékeré kan nínú ẹbí rẹ (tàbí àpẹẹrẹ kan, bí Amina tí oyún rẹ̀ ti pé oṣù 5 ní Kano, tàbí ọmọ Kofi tí ó jẹ́ ọmọ oṣù 3 ní Kumasi): àwọn ìgbà tí ó kù láti lọ sí ilé-ìwòsàn, ètò ìbímọ (ibi, òṣìṣẹ́ ìlera tí a kọ́, ọkọ̀, owó tí a tọ́jú sí apá kan, ẹni tí yóò bá a lọ àti ẹni tí yóò máa bójú tó ilé), àwọn ìgbésẹ̀ ìtọ́jú ọmọ tuntun ní ọjọ́ àkọ́kọ́, àwọn àmì ewu fún ìyá àti ọmọ pẹ̀lú ilé-ìwòsàn tó sún mọ́ jù àti nọ́mbà fóònù pàjáwìrì, àti ọjọ́ àjẹsára àti àyẹ̀wò ìdàgbàsókè tó kàn láti inú káàdì ìlera.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ìyá àti àwọn obìnrin tó lóyún, àwọn bàbá, àwọn ìyá-àgbà àti àwọn olùtọ́jú míì ní Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire, Íjíbítì àti káàkiri Áfíríkà. Ọ̀pọ̀ ń gbé jìnnà sí ilé-ìwòsàn ńlá, wọ́n ń lo fóònù Android lásán tí dátà rẹ̀ wọ́n, wọ́n sì ń gba ìmọ̀ràn ìlera láti ọ̀dọ̀ ẹbí, aládùúgbò àti òṣìṣẹ́ ìlera àdúgbò.",
    startingPoint: "Ọ̀pọ̀ jù lọ mọ̀ pé obìnrin tó lóyún gbọ́dọ̀ lọ sí ilé-ìwòsàn, ṣùgbọ́n ọ̀pọ̀ ń bẹ̀rẹ̀ pẹ́, wọn kì í lọ tó iye ìgbà tí a gbà wọ́n nímọ̀ràn, tàbí wọ́n ń dúró nílé nígbà tí àmì ewu bá yọ. Díẹ̀ ló ní ètò ìbímọ tí a kọ sílẹ̀, owó ọkọ̀ tí a tọ́jú sí apá kan, tàbí àkọsílẹ̀ àwọn àmì ewu ọmọ tuntun àti ọmọdé. Ọ̀pọ̀ ń tọ́jú káàdì ìlera ọmọ ṣùgbọ́n wọn kì í ka ọjọ́ àjẹsára tó kàn lórí rẹ̀.",
    gap: "Apá Áfíríkà tó wà ní gúúsù aṣálẹ̀ Sàhárà ló ní èyí tó pọ̀ jù lára ikú tó ń ṣẹlẹ̀ nígbà oyún àti ìbímọ lágbàáyé, oṣù àkọ́kọ́ sì ni àkókò tó léwu jù fún ọmọ. Ọ̀pọ̀ lára ikú wọ̀nyí ń wá látàrí ìdádúró: nínú ṣíṣe ìpinnu láti lọ, nínú dídé ibẹ̀, àti nínú rírí ìtọ́jú. Àwọn ẹbí tó ń ṣètò ṣáájú, tó mọ àwọn àmì ewu, tó sì ń lọ sí ilé-ìwòsàn ní àkókò ń yára gbé ìgbésẹ̀, wọ́n sì ń dáàbò bo ìyá àti ọmọ dáadáa.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ ìlera",
      "Ẹ̀rọ: fóònù lásán; a tún lè kọ́ ẹ̀kọ́ yìí sókè nínú ẹgbẹ́ tàbí ìpàdé àwọn obìnrin",
      "Iṣẹ́ ìlera, ètò ìbímọ ọ̀fẹ́, àkókò àjẹsára àti káàdì ìlera yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, wọ́n sì ń yí padà: akẹ́kọ̀ọ́ ń béèrè lọ́wọ́ ilé-ìwòsàn wọn tàbí iléeṣẹ́ ètò ìlera",
      "Kò sí iye oògùn, ètò ìtọ́jú tàbí ìdámọ̀ àìsàn: ẹ̀kọ́ náà ń kọ́ni nípa ìdènà àti ìgbà tí a máa wá ìrànlọ́wọ́",
      "Àṣírí: akẹ́kọ̀ọ́ kò ní láti sọ nípa oyún tàbí ìlera tirẹ̀ fún ẹgbẹ́ láéláé"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí oyún bá wà nínú ẹbí rẹ, tí o sì mọ oṣù tí ọmọ máa dé", action: "kọ ètò lílọ sí ilé-ìwòsàn fún oyún náà tí ó bẹ̀rẹ̀ láàárín ọ̀sẹ̀ 12 àkọ́kọ́", standard: "pẹ̀lú ó kéré tán ìpàdé mẹ́jọ bí WHO ṣe gbà nímọ̀ràn, tàbí iye tí ilé-ìwòsàn rẹ fún ọ" },
    { id: "O2", condition: "Tí a bá fún ọ ní àkọsílẹ̀ àwọn àmì nígbà oyún tàbí lẹ́yìn ìbímọ", action: "mú àwọn àmì ewu tó túmọ̀ sí pé obìnrin náà gbọ́dọ̀ lọ sí ilé-ìwòsàn báyìí jáde", standard: "kí o gba ó kéré tán 4 nínú 5 tọ̀nà, kí o sì yan \"lọ báyìí\" dípò \"dúró kí a wò ó\"" },
    { id: "O3", condition: "Fún ìbímọ tó ń bọ̀", action: "kọ ètò ìbímọ tó dárúkọ ilé-ìwòsàn, ọkọ̀, owó tí a tọ́jú sí apá kan àti àwọn tí yóò ṣèrànwọ́", standard: "pẹ̀lú gbogbo apá tí a kọ kún, tí ẹbí sì ti fọwọ́ sí ṣáájú oṣù ìkẹyìn" },
    { id: "O4", condition: "Fún ọjọ́ àkọ́kọ́ ọmọ", action: "kọ àwọn ìgbésẹ̀ ìtọ́jú ọmọ tuntun sílẹ̀: mú ọmọ móoru, fún un ní ọmú láàárín wákàtí àkọ́kọ́, kí o sì jẹ́ kí ìdodo mọ́ kí ó sì gbẹ", standard: "ní ètò tó tọ́ àti láìsí àṣà tó léwu" },
    { id: "O5", condition: "Tí a bá ṣàpèjúwe ìkókó tàbí ọmọ kékeré tó ń ṣàìsàn fún ọ", action: "dá àwọn àmì ewu tó túmọ̀ sí pé ọmọ náà gbọ́dọ̀ lọ sí ilé-ìwòsàn báyìí mọ̀", standard: "kí o gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O6", condition: "Pẹ̀lú káàdì tàbí ìwé ìlera ọmọ", action: "wá ọjọ́ àjẹsára àti àyẹ̀wò ìdàgbàsókè tó kàn, kí o sì kọ ìgbésẹ̀ oúnjẹ fún ọjọ́ orí ọmọ náà", standard: "láìfi ìpàdé kankan tí a pàdánù sílẹ̀ láìṣètò" }
  ],
  chapters: [
    {
      name: "Orí 1: Oyún tó ní ìlera àti ìbímọ láìléwu",
      lessons: [
        {
          title: "Lílọ sí ilé-ìwòsàn nígbà oyún",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọ ètò lílọ sí ilé-ìwòsàn fún oyún kan, tí ó bẹ̀rẹ̀ láàárín ọ̀sẹ̀ 12 àkọ́kọ́.",
          text: [
            "Ìtọ́jú nígbà oyún ni a ń pè ní ìtọ́jú oyún (antenatal care). Ní ìgbà kọ̀ọ̀kan, nọ́ọ̀sì tàbí agbẹ̀bí máa ń wo ẹ̀jẹ̀ ríru ìyá, ìwọ̀n rẹ̀ àti ẹ̀jẹ̀ rẹ̀, wọ́n á fetí sí ọmọ inú, wọ́n á sì fúnni ní ìtọ́jú tí ilé-ìwòsàn orílẹ̀-èdè rẹ ń pèsè. A lè rí ọ̀pọ̀ ìṣòro ní kùtùkùtù, kí wọ́n tó di ewu.",
            "WHO (Àjọ Ìlera Àgbáyé) gbà nímọ̀ràn pé kí obìnrin rí òṣìṣẹ́ ìlera ó kéré tán ìgbà mẹ́jọ nígbà oyún, kí èyí àkọ́kọ́ sì wà láàárín ọ̀sẹ̀ 12 àkọ́kọ́ (oṣù mẹ́ta àkọ́kọ́). Nítorí náà, gbàrà tí obìnrin bá rò pé òun lóyún, kí ó lọ sí ilé-ìwòsàn. Ilé-ìwòsàn rẹ lè fún ọ ní àkókò tirẹ̀; tẹ̀lé e.",
            "Ní ìgbà àkọ́kọ́, ilé-ìwòsàn sábà máa ń fúnni ní ìwé tàbí káàdì ìlera ìyá àti ọmọ. Orúkọ rẹ̀ yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn (fún àpẹẹrẹ, Mother and Child Health Handbook ní Kenya tàbí Maternal and Child Health Record Book ní Ghana). Fi í sínú ọ̀rá, mú un lọ ní gbogbo ìgbà, kí o sì kọ ọjọ́ tó kàn sínú kàlẹ́ńdà fóònù rẹ.",
            "Àwọn bàbá àti ẹbí lè ṣèrànwọ́ pẹ̀lú: ẹ ràn án lọ́wọ́ pẹ̀lú owó ọkọ̀, ẹ bá a lọ sí ilé-ìwòsàn, kí ẹ sì jẹ́ kí ó sinmi. Béèrè lọ́wọ́ ilé-ìwòsàn tàbí ọ́fíìsì ìbánigbófò ìlera rẹ bóyá ìtọ́jú oyún jẹ́ ọ̀fẹ́ tàbí wọ́n ń sanwó rẹ̀ níbi tí o ń gbé; èyí ń yí padà, nítorí náà máa béèrè ní gbogbo ìgbà."
          ],
          steps: ["Lọ sí ilé-ìwòsàn gbàrà tí o bá rò pé o lóyún, ó dára jù láàárín ọ̀sẹ̀ 12 àkọ́kọ́.", "Béèrè iye ìgbà tí ilé-ìwòsàn fẹ́ kí o wá àti ìgbà wo.", "Kọ ọjọ́ kọ̀ọ̀kan sínú ìwé náà àti sínú kàlẹ́ńdà fóònù rẹ.", "Mú ìwé náà lọ ní gbogbo ìgbà.", "Tí o bá pàdánù ìgbà kan, lọ ní kíákíá; má ṣe dúró de èyí tó kàn."],
          words: [["Ìtọ́jú oyún (antenatal care)", "àyẹ̀wò ìlera fún obìnrin nígbà oyún, kí ọmọ tó dé."], ["Ìpàdé (contact)", "ìgbà tí o rí òṣìṣẹ́ ìlera, ní ilé-ìwòsàn tàbí nílé."], ["Agbẹ̀bí", "òṣìṣẹ́ ìlera tí a kọ́ láti tọ́jú obìnrin nígbà oyún, nígbà ìbímọ àti lẹ́yìn ìbímọ."]],
          slides: [
            { title: "Ìtọ́jú oyún", bullets: ["Àyẹ̀wò ìlera nígbà oyún", "Ó ń rí ìṣòro ní kùtùkùtù", "Ẹ̀jẹ̀ ríru, ìwọ̀n, ẹ̀jẹ̀ àti ọmọ inú"] },
            { title: "Ìgbà tí o máa lọ", bullets: ["Ìgbà àkọ́kọ́ láàárín ọ̀sẹ̀ 12 àkọ́kọ́", "WHO gbà nímọ̀ràn ó kéré tán ìpàdé 8", "Tẹ̀lé àkókò ilé-ìwòsàn rẹ"] },
            { title: "Tọ́jú ìwé náà", bullets: ["Mú un lọ ní gbogbo ìgbà", "Jẹ́ kí ó gbẹ nínú ọ̀rá", "Kọ ọjọ́ tó kàn sínú fóònù rẹ"] },
            { title: "Ẹbí lè ṣèrànwọ́", bullets: ["Owó ọkọ̀", "Bá a lọ sí ilé-ìwòsàn", "Jẹ́ kí ó sinmi"] }
          ],
          sources: [WHO_ANC],
          tryIt: "Mú oyún kan nínú ẹbí rẹ, tàbí àpẹẹrẹ Fatou ní Thiès, Senegal, tí oyún rẹ̀ ti pé ọ̀sẹ̀ 10. Kọ oṣù ìgbà àkọ́kọ́, kí o sì kọ àwọn oṣù ìgbà tó kàn sílẹ̀. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ ẹni tí yóò bá a lọ.",
          youCanNow: "ṣètò lílọ sí ilé-ìwòsàn fún oyún, kí o bẹ̀rẹ̀ ní kùtùkùtù, kí o sì kọ àwọn ọjọ́ sí ibi tí o ti máa rí wọn.",
          quickCheck: [
            { objective: "O1", q: "Ìgbà wo ni obìnrin gbọ́dọ̀ kọ́kọ́ lọ sí ilé-ìwòsàn nígbà oyún?", options: ["Nígbà tí ọmọ fẹ́ dé nìkan", "Ní oṣù mẹ́ta ìkẹyìn", "Gbàrà tí ó bá rò pé òun lóyún, ó dára jù láàárín ọ̀sẹ̀ 12 àkọ́kọ́", "Tí ara rẹ̀ kò bá yá nìkan"], answer: 2, why: "WHO gbà nímọ̀ràn pé kí ìpàdé àkọ́kọ́ wà láàárín ọ̀sẹ̀ 12 àkọ́kọ́, kí a lè rí ìṣòro ní kùtùkùtù." },
            { objective: "O1", q: "Ìgbà mélòó ni WHO gbà nímọ̀ràn pé kí obìnrin rí òṣìṣẹ́ ìlera nígbà oyún?", options: ["Ó kéré tán mẹ́jọ", "Ẹ̀ẹ̀kan", "Ẹ̀ẹ̀mejì", "Kò sí, tí ara rẹ̀ bá yá"], answer: 0, why: "WHO gbà nímọ̀ràn ó kéré tán ìpàdé mẹ́jọ; ilé-ìwòsàn rẹ lè fún ọ ní àkókò tirẹ̀." }
          ]
        },
        {
          title: "Àwọn àmì ewu nígbà oyún àti lẹ́yìn ìbímọ",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dá àwọn àmì ewu tó túmọ̀ sí pé obìnrin tó lóyún tàbí ìyá tuntun gbọ́dọ̀ lọ sí ilé-ìwòsàn báyìí mọ̀.",
          text: [
            "Ọ̀pọ̀ oyún ló ń lọ dáadáa. Ṣùgbọ́n àwọn àmì kan túmọ̀ sí ewu fún ìyá tàbí ọmọ. Tí o bá rí àwọn àmì wọ̀nyí, má ṣe dúró láti wò bóyá wọ́n máa lọ, má sì ṣe dúró de ìgbà tó kàn. Lọ sí ilé-ìwòsàn báyìí, ní ọ̀sán tàbí ní òru.",
            "Àwọn àmì ewu nígbà oyún: ẹ̀jẹ̀ tí ó ń jáde láti ojú ara; orí fífọ́ líle pẹ̀lú ojú tí kò ríran kedere; gìrì (convulsions); ojú àti ọwọ́ tí ó wú; ibà; ìrora líle nínú ikùn; ọmọ inú tí kò fi bẹ́ẹ̀ mira mọ́ tàbí tí kò mira rárá; omi tí ó bẹ́ kí ìrọbí tó bẹ̀rẹ̀; ìṣòro mímí.",
            "Àwọn àmì ewu lẹ́yìn ìbímọ: ẹ̀jẹ̀ púpọ̀ (tí ó ń rin aṣọ tàbí paadi kíákíá); ibà; omi tí ó ń rùn tí ó ń jáde láti ojú ara; orí fífọ́ líle, ojú tí kò ríran kedere tàbí gìrì; ìrora tàbí wíwú ní ẹsẹ̀ kan; ìbànújẹ́ ńlá tàbí àìlè kojú nǹkan fún ọjọ́ púpọ̀.",
            "Ẹ̀jẹ̀ púpọ̀, àkóràn àti ẹ̀jẹ̀ ríru wà lára àwọn ohun tó ń fa ikú jù lọ nígbà oyún àti ìbímọ, wọ́n sì lè pa ènìyàn kíákíá. Yíyára ń gba ẹ̀mí là. Pe òṣìṣẹ́ ìlera àdúgbò tàbí nọ́mbà pàjáwìrì àdúgbò rẹ bí o ṣe ń lọ."
          ],
          steps: ["Kọ́ àwọn àmì ewu, kí o sì lẹ àkọsílẹ̀ wọn mọ́ ògiri nílé.", "Tí o bá rí ọ̀kan, dá ohun tí o ń ṣe dúró.", "Lọ sí ilé-ìwòsàn báyìí pẹ̀lú ìwé ìlera náà.", "Pè wọ́n ṣáájú tàbí pe òṣìṣẹ́ ìlera àdúgbò bí o ṣe ń lọ."],
          words: [["Àmì ewu", "àmì pé ìyá tàbí ọmọ lè wà nínú ewu ńlá, ó sì nílò ìtọ́jú báyìí."], ["Gìrì (convulsions)", "gbígbọ̀n ara lójijì tí ẹni náà kò lè ṣàkóso."], ["Omi ojú ara (discharge)", "omi tí ó ń jáde láti ojú ara obìnrin."]],
          slides: [
            { title: "Àmì ewu túmọ̀ sí lọ BÁYÌÍ", bullets: ["Má ṣe dúró láti wò bóyá ó máa lọ", "Má ṣe dúró de ìgbà tó kàn", "Ní ọ̀sán tàbí ní òru"] },
            { title: "Nígbà oyún", bullets: ["Ẹ̀jẹ̀, gìrì, ibà, ìrora ikùn líle", "Orí fífọ́ líle pẹ̀lú ojú tí kò ríran kedere; ojú tàbí ọwọ́ tí ó wú", "Ọmọ inú kò mira tó; omi bẹ́ ní kùtùkùtù; ìṣòro mímí"] },
            { title: "Lẹ́yìn ìbímọ", bullets: ["Ẹ̀jẹ̀ púpọ̀ tàbí ibà", "Omi tí ó ń rùn láti ojú ara", "Orí fífọ́ líle, ojú tí kò ríran kedere tàbí gìrì", "Ìbànújẹ́ ńlá tàbí àìlè kojú nǹkan fún ọjọ́ púpọ̀"] },
            { title: "Yíyára ń gba ẹ̀mí là", bullets: ["Mú ìwé ìlera náà dání", "Pe òṣìṣẹ́ ìlera bí o ṣe ń lọ"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Kọ àwọn àmì ewu nígbà oyún àti lẹ́yìn ìbímọ sórí ìwé kan, ní èdè tìrẹ tí o bá fẹ́. Fi orúkọ ilé-ìwòsàn tó sún mọ́ jù àti nọ́mbà fóònù pàjáwìrì kún un. Lẹ̀ ẹ́ mọ́ ògiri tàbí ya fọ́tò rẹ̀ sínú fóònù rẹ.",
          youCanNow: "mú àwọn àmì ewu nígbà oyún àti lẹ́yìn ìbímọ jáde, kí o sì mọ̀ pé o gbọ́dọ̀ lọ sí ilé-ìwòsàn lẹ́sẹ̀kẹsẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Oyún Mariam ní Bouaké ti pé oṣù 7, orí ń fọ́ ọ gidigidi, ojú rẹ̀ kò sì ríran kedere. Kí ló yẹ kí ó ṣe?", options: ["Sinmi kí ó wo bí ara rẹ̀ ṣe máa rí lọ́la", "Dúró de ìgbà tó kàn ní ilé-ìwòsàn", "Mu omi sí i kí ó sì dùbúlẹ̀", "Lọ sí ilé-ìwòsàn báyìí"], answer: 3, why: "Orí fífọ́ líle pẹ̀lú ojú tí kò ríran kedere jẹ́ àmì ewu; ó lè túmọ̀ sí ẹ̀jẹ̀ ríru tó léwu." },
            { objective: "O2", q: "Èwo ni àmì ewu lẹ́yìn ìbímọ?", options: ["Àárẹ̀ lẹ́yìn ìbímọ", "Ẹ̀jẹ̀ púpọ̀ tí ó ń rin aṣọ kíákíá", "Fífẹ́ sùn nígbà tí ọmọ bá ń sùn", "Ebi"], answer: 1, why: "Ẹ̀jẹ̀ púpọ̀ lẹ́yìn ìbímọ wà lára ohun tó ń pa ìyá jù lọ, ó sì nílò ìtọ́jú báyìí." }
          ]
        },
        {
          title: "Ṣíṣe ètò ìbímọ",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kọ ètò ìbímọ tó dárúkọ ibi, ọkọ̀, owó àti àwọn olùrànlọ́wọ́.",
          text: [
            "Ọ̀pọ̀ ewu nígbà ìbímọ ló ń ṣẹlẹ̀ kíákíá, ó sì ṣòro láti rí wọn tẹ́lẹ̀. Ìtọ́jú láti ọwọ́ òṣìṣẹ́ ìlera tí a kọ́ (agbẹ̀bí, nọ́ọ̀sì tàbí dókítà) nígbà ìbímọ àti lẹ́yìn rẹ̀ ń gba ẹ̀mí àwọn ìyá àti ọmọ là. Nítorí náà, ètò tí kò léwu jù ni láti bímọ ní ilé-ìwòsàn.",
            "Ètò ìbímọ ń dáhùn àwọn ìbéèrè tó rọrùn kí ìrọbí tó bẹ̀rẹ̀: Ilé-ìwòsàn wo? Báwo ni a ṣe máa débẹ̀ ní òru? Ta ló máa san owó ọkọ̀, èló sì ni a ti tọ́jú sí apá kan? Ta ló máa bá a lọ? Ta ló máa bójú tó àwọn ọmọ yòókù? Ta ló lè fi ẹ̀jẹ̀ sílẹ̀ tí wọ́n bá nílò rẹ̀?",
            "Bẹ̀rẹ̀ sí í tọ́jú owó ní kùtùkùtù, díẹ̀díẹ̀ lọ́sẹ̀ọ̀sẹ̀. Fún àpẹẹrẹ, ẹbí kan ní Kisumu ń tọ́jú KES 200 lọ́sẹ̀, ẹbí kan ní Tamale sì ń tọ́jú GHS 20 lọ́sẹ̀ (àpẹẹrẹ lásán ni iye wọ̀nyí; ṣètò tìrẹ). Fi nọ́mbà ọlọ́kadà, boda boda, takisí tàbí ọkọ̀ ambulance pamọ́ sínú fóònù báyìí.",
            "Di àpò kékeré kan ní àwọn oṣù ìkẹyìn: ìwé ìlera, aṣọ tó mọ́, aṣọ àti fìlà fún ọmọ, àti àwọn nǹkan fún ìyá. Ẹ fohùn ṣọ̀kan lórí ètò náà pẹ̀lú gbogbo ẹbí kí ẹnikẹ́ni má bàa jiyàn nígbà tí ìrọbí bá bẹ̀rẹ̀."
          ],
          steps: ["Yan ilé-ìwòsàn, kí o sì ṣèbẹ̀wò síbẹ̀ ṣáájú ìbímọ tí o bá lè ṣe é.", "Ṣètò ọkọ̀ fún ọ̀sán àti òru, kí o sì fi àwọn nọ́mbà pamọ́.", "Tọ́jú owó lọ́sẹ̀ọ̀sẹ̀ fún ọkọ̀ àti àwọn ìnáwó.", "Yan ẹni tí yóò bá a lọ àti ẹni tí yóò bójú tó ilé.", "Di àpò náà, kí ẹ sì fohùn ṣọ̀kan lórí ètò náà pẹ̀lú ẹbí."],
          words: [["Ètò ìbímọ", "ètò tí a kọ sílẹ̀ nípa ibi àti bí ọmọ ṣe máa bí, àti bí ẹ ṣe máa débẹ̀."], ["Òṣìṣẹ́ ìlera tí a kọ́", "agbẹ̀bí, nọ́ọ̀sì tàbí dókítà tí a kọ́ láti tọ́jú ìbímọ."], ["Ìrọbí", "ìrora àti iṣẹ́ ara tó ń ti ọmọ jáde."]],
          slides: [
            { title: "Ìdí tí a fi nílò ètò ìbímọ", bullets: ["Ewu ìbímọ lè dé kíákíá", "Ìtọ́jú òṣìṣẹ́ tí a kọ́ ń gba ìyá àti ọmọ là", "Ṣètò kí ìrọbí tó bẹ̀rẹ̀"] },
            { title: "Ètò náà ń dáhùn", bullets: ["Ilé-ìwòsàn wo?", "Ọkọ̀, ọ̀sán àti òru?", "Owó tí a tọ́jú sí apá kan?", "Ta ló máa bá a lọ, ta ló máa bójú tó ilé?"] },
            { title: "Tọ́jú owó ní kùtùkùtù", bullets: ["Díẹ̀ lọ́sẹ̀ọ̀sẹ̀ (àpẹẹrẹ ni àwọn iye náà)", "Fi àwọn nọ́mbà ọkọ̀ pamọ́ báyìí"] },
            { title: "Di àpò náà", bullets: ["Ìwé ìlera", "Aṣọ tó mọ́, aṣọ àti fìlà ọmọ", "Àwọn nǹkan fún ìyá"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Kọ ètò ìbímọ fún oyún kan nínú ẹbí rẹ, tàbí fún Amina ní Kano tí yóò bímọ ní oṣù mẹ́ta sí i. Kọ kún un: ilé-ìwòsàn, ọkọ̀ (ọ̀sán àti òru), owó tí a ń tọ́jú lọ́sẹ̀, ẹni tí yóò bá a lọ, ẹni tí yóò bójú tó ilé, àti ohun tó wà nínú àpò.",
          youCanNow: "kọ ètò ìbímọ tó dárúkọ ibi, ọkọ̀, owó àti àwọn olùrànlọ́wọ́.",
          quickCheck: [
            { objective: "O3", q: "Ibo ni ibi tí kò léwu jù láti bímọ?", options: ["Nílé láìsí ẹnikẹ́ni tí a kọ́", "Ibikíbi tí ìrọbí bá ti bẹ̀rẹ̀", "Ilé-ìwòsàn tí òṣìṣẹ́ ìlera tí a kọ́ wà", "Lójú ọ̀nà, láti fi àkókò pamọ́"], answer: 2, why: "Ìtọ́jú òṣìṣẹ́ tí a kọ́ nígbà ìbímọ àti lẹ́yìn rẹ̀ ń gba ẹ̀mí ìyá àti ọmọ tuntun là." },
            { objective: "O3", q: "Ìgbà wo ni ẹbí gbọ́dọ̀ fohùn ṣọ̀kan lórí ètò ìbímọ?", options: ["Nígbà tí ìrọbí bá bẹ̀rẹ̀", "Ṣáájú oṣù ìkẹyìn oyún", "Lẹ́yìn tí ọmọ bá dé", "Tí ìṣòro bá wà nìkan"], answer: 1, why: "Ṣíṣètò ṣáájú ń dènà ìdádúró àti àríyànjiyàn nígbà tí ìrọbí bá bẹ̀rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Oyún tó ní ìlera àti ìbímọ láìléwu",
        questions: [
          { objective: "O1", q: "Salma ní Asyut rò pé oyún òun ti pé ọ̀sẹ̀ 8. Kí ni ìgbésẹ̀ tó dára jù tó kàn?", options: ["Lọ sí ilé-ìwòsàn báyìí fún ìgbà àkọ́kọ́", "Dúró títí ọmọ yóò fi mira", "Dúró títí oṣù ìkẹyìn", "Béèrè lọ́wọ́ aládùúgbò dípò ilé-ìwòsàn"], answer: 0, why: "WHO gbà nímọ̀ràn pé kí ìpàdé àkọ́kọ́ wà láàárín ọ̀sẹ̀ 12 àkọ́kọ́." },
          { objective: "O1", q: "Kí ló dé tí a fi ń mú ìwé ìlera ìyá àti ọmọ lọ ní gbogbo ìgbà?", options: ["Ilé-ìwòsàn máa tún tà á", "Ti bàbá nìkan ni", "Ó ní àkọsílẹ̀ àwọn àyẹ̀wò àti àwọn ọjọ́ tó kàn", "A kò nílò rẹ̀ lẹ́yìn ìgbà àkọ́kọ́"], answer: 2, why: "Ìwé náà ń pa ìtàn ìlera àti àwọn ọjọ́ tó kàn mọ́ sí ibì kan." },
          { objective: "O2", q: "Èwo nínú ìwọ̀nyí ni àmì ewu nígbà oyún?", options: ["Fífẹ́ oúnjẹ kan pàtó", "Ọmọ inú tí kò fi bẹ́ẹ̀ mira mọ́ tàbí tí kò mira rárá", "Àárẹ̀ díẹ̀", "Títọ̀ ní ìgbà púpọ̀ sí i"], answer: 1, why: "Ọmọ inú tí kò mira tó lè túmọ̀ sí pé ọmọ wà nínú ewu; lọ báyìí." },
          { objective: "O2", q: "Akosua ní ibà àti omi tí ó ń rùn láti ojú ara ní ọjọ́ márùn-ún lẹ́yìn ìbímọ. Kí ló yẹ kí ẹbí ṣe?", options: ["Dúró fún ọ̀sẹ̀ kan", "Fún un ní tíì kí ó sì sinmi", "Gbé e lọ sí ilé-ìwòsàn báyìí", "Dúró de ìgbà àjẹsára ọmọ"], answer: 2, why: "Ibà àti omi tí ó ń rùn jẹ́ àmì àkóràn lẹ́yìn ìbímọ; ó nílò ìtọ́jú báyìí." },
          { objective: "O3", q: "Èwo ló jẹ́ apá kan ètò ìbímọ tó dára?", options: ["Nọ́mbà ọkọ̀ tí a fi pamọ́ fún ọ̀sán àti òru", "Dídúró láti pinnu títí ìrọbí yóò fi bẹ̀rẹ̀", "Níná owó tí a tọ́jú kọ́kọ́", "Àìsọ fún ẹbí"], answer: 0, why: "Ọkọ̀, owó àti olùrànlọ́wọ́ tí a ti ṣètò ń dènà ìdádúró tó léwu." }
        ]
      }
    },
    {
      name: "Orí 2: Àwọn ọjọ́ àkọ́kọ́ àti ọdún àkọ́kọ́ ọmọ rẹ",
      lessons: [
        {
          title: "Títọ́jú ọmọ tuntun ní àwọn ọjọ́ àkọ́kọ́",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kọ àwọn ìgbésẹ̀ ìtọ́jú ọmọ tuntun fún ọjọ́ àkọ́kọ́ sílẹ̀: ìmóoru, ọmú ní kùtùkùtù àti ìdodo tó mọ́.",
          text: [
            "Ọmọ tuntun kò lè mú ara rẹ̀ móoru. Nu ọmọ náà gbẹ, lẹ́yìn náà gbé ọmọ lé àyà ìyá, ara mọ́ ara, pẹ̀lú aṣọ tí ó bò wọ́n méjèèjì, kí o sì dé e ní fìlà. Má ṣe tètè wẹ ọmọ; béèrè lọ́wọ́ òṣìṣẹ́ ìlera ìgbà tí o máa wẹ̀ ẹ́.",
            "Bẹ̀rẹ̀ sí í fún ọmọ ní ọmú láàárín wákàtí àkọ́kọ́ lẹ́yìn ìbímọ. Wàrà àkọ́kọ́ tó nípọn, tó sì pọ́n (colostrum) dára fún ọmọ; má ṣe dà á nù. WHO gbà nímọ̀ràn ọmú nìkan fún oṣù 6 àkọ́kọ́: kò sí omi, kò sí tíì, kò sí omi glucose, kò sì sí ohun mímu tàbí oúnjẹ míì.",
            "Jẹ́ kí ìdodo mọ́ kí ó sì gbẹ. Má ṣe fi nǹkankan sí i àyàfi tí òṣìṣẹ́ ìlera bá sọ fún ọ, kí o sì fọ ọwọ́ rẹ kí o tó fọwọ́ kàn án. Fi ọṣẹ fọ ọwọ́ kí o tó fún ọmọ lóúnjẹ àti lẹ́yìn tí o bá pààrọ̀ ìtẹ́dìí ọmọ.",
            "Tí o bá lè ṣe é, dúró ní ilé-ìwòsàn fún nǹkan bí ọjọ́ kan lẹ́yìn ìbímọ, kí o sì lọ sí àwọn àyẹ̀wò lẹ́yìn ìbímọ tí ilé-ìwòsàn ṣètò, fún ìyá àti ọmọ. Forúkọ ọmọ sílẹ̀ (ìforúkọsílẹ̀ ìbí), kí o sì bẹ̀rẹ̀ àwọn àjẹsára tí a ń fún ọmọ nígbà ìbí."
          ],
          steps: ["Nu ọmọ gbẹ kí o sì gbé e lé ìyá ní ara mọ́ ara, kí o bò wọ́n, kí o sì dé e ní fìlà.", "Fún un ní ọmú láàárín wákàtí àkọ́kọ́.", "Fún un ní ọmú nìkan.", "Jẹ́ kí ìdodo mọ́ kí ó sì gbẹ; fọ ọwọ́ kí o tó fọwọ́ kàn án.", "Lọ sí àwọn àyẹ̀wò lẹ́yìn ìbímọ; forúkọ ìbí sílẹ̀; bẹ̀rẹ̀ àwọn àjẹsára."],
          words: [["Ọmọ tuntun", "ọmọ tí kò tíì pé ọjọ́ 28."], ["Ara mọ́ ara (skin-to-skin)", "gbígbé ọmọ tí kò wọ aṣọ mọ́ àyà ìyá tí kò wọ aṣọ láti mú ọmọ móoru."], ["Colostrum (wàrà àkọ́kọ́)", "wàrà ọmú àkọ́kọ́ tó nípọn, tó sì pọ́n, tí ó kún fún ààbò fún ọmọ."], ["Ìdodo", "apá okùn ìdodo tí ó ṣì wà lára ikùn ọmọ lẹ́yìn ìbímọ."]],
          slides: [
            { title: "Mú ọmọ móoru", bullets: ["Nu ọmọ gbẹ", "Ara mọ́ ara lórí ìyá, pẹ̀lú aṣọ lórí wọn", "Fìlà lórí; má ṣe tètè wẹ ọmọ"] },
            { title: "Fún un ní ọmú ní kùtùkùtù", bullets: ["Láàárín wákàtí àkọ́kọ́", "Colostrum dára: má ṣe dà á nù", "Ọmú nìkan fún oṣù 6"] },
            { title: "Jẹ́ kí ìdodo mọ́", bullets: ["Mọ́ kí ó sì gbẹ", "Má fi nǹkan sí i àyàfi tí òṣìṣẹ́ ìlera bá sọ", "Kọ́kọ́ fọ ọwọ́"] },
            { title: "Lẹ́yìn ìbímọ", bullets: ["Àyẹ̀wò fún ìyá àti ọmọ", "Forúkọ ìbí sílẹ̀", "Bẹ̀rẹ̀ àwọn àjẹsára ìbí"] }
          ],
          sources: [WHO_NEWBORN, WHO_IYCF],
          tryIt: "Kọ àwọn ìgbésẹ̀ ìtọ́jú ọmọ tuntun fún ọjọ́ àkọ́kọ́ ní ètò, bí àkọsílẹ̀ kúkúrú tí o lè fún ìyá tuntun tàbí ìyá-àgbà. Lẹ́yìn náà kọ àṣà kan tó léwu tí o ti gbọ́ ní àdúgbò rẹ, àti ìgbésẹ̀ tí kò léwu tí ó rọ́pò rẹ̀.",
          youCanNow: "kọ àwọn ìgbésẹ̀ ìtọ́jú ọmọ tuntun fún ọjọ́ àkọ́kọ́ sílẹ̀: ìmóoru, ọmú ní kùtùkùtù, ọmú nìkan àti ìdodo tó mọ́.",
          quickCheck: [
            { objective: "O4", q: "Ìgbà wo ló yẹ kí fífún ọmọ ní ọmú bẹ̀rẹ̀?", options: ["Lẹ́yìn ìwẹ̀ àkọ́kọ́ ọmọ", "Lẹ́yìn ọjọ́ mẹ́ta", "Nígbà tí wàrà bá di funfun", "Láàárín wákàtí àkọ́kọ́ lẹ́yìn ìbímọ"], answer: 3, why: "WHO gbà nímọ̀ràn pé kí ó bẹ̀rẹ̀ láàárín wákàtí àkọ́kọ́; wàrà àkọ́kọ́ ń dáàbò bo ọmọ." },
            { objective: "O4", q: "Ẹbí kan sọ pé kí a fún ọmọ tuntun ní omi nítorí pé ooru mú. Kí ni WHO gbà nímọ̀ràn?", options: ["Ọmú nìkan fún oṣù 6 àkọ́kọ́", "Omi ní wákàtí kọ̀ọ̀kan", "Omi ṣúgà", "Tíì pẹ̀lú ọmú"], answer: 0, why: "Ọmú ní gbogbo omi tí ọmọ tí kò tíì pé oṣù 6 nílò; àwọn ohun mímu míì lè gbé kòkòrò àìsàn wá." }
          ]
        },
        {
          title: "Àwọn àmì ewu lára ìkókó àti ọmọ kékeré",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dá àwọn àmì ewu tó túmọ̀ sí pé ìkókó tàbí ọmọ kékeré gbọ́dọ̀ lọ sí ilé-ìwòsàn báyìí mọ̀.",
          text: [
            "Àìsàn lè mú ìkókó àti ọmọ kékeré gidigidi ní kíákíá. Àwọn àmì kan túmọ̀ sí lọ sí ilé-ìwòsàn báyìí, kì í ṣe lọ́la.",
            "Lára ọmọ tuntun: kò mu ọmú dáadáa tàbí kò lè fà ọmú; kò ṣe wàlàwàlà mọ́ tàbí ara rẹ̀ rọ̀ jọ̀bọ̀; mímí kíákíá tàbí mímí tó ṣòro; ibà, tàbí ara tí ó tutù; gìrì.",
            "Lára ọmọ kékeré: kò lè mu nǹkan tàbí mu ọmú; ó ń bì gbogbo nǹkan; gìrì; oorun ń kùn ún gan-an tàbí ó ṣòro láti jí i; mímí kíákíá tàbí mímí tó ṣòro; ibà (ní àgbègbè ibà, ṣe àyẹ̀wò lọ́jọ́ náà); ìgbẹ́ gbuuru pẹ̀lú ẹ̀jẹ̀, tàbí pẹ̀lú ojú tí ó jìn sínú àti ọmọ tí òǹgbẹ ń gbẹ gan-an tàbí tí ó rẹ̀ gan-an.",
            "Tí ọmọ bá ní ìgbẹ́ gbuuru, máa bá a lọ ní fífún un ní ọmú, ohun mímu àti oúnjẹ, kí o sì béèrè lọ́wọ́ òṣìṣẹ́ ìlera nípa ORS (omi iyọ̀ àti ṣúgà) àti zinc. Ṣùgbọ́n tí o bá rí àmì ewu, lọ báyìí. Má ṣe lo oògùn láti ọjà tàbí ti aládùúgbò láìsí ìmọ̀ràn òṣìṣẹ́ ìlera."
          ],
          steps: ["Wo àwọn àmì ewu, kódà ní òru.", "Tí o bá rí ọ̀kan, lọ sí ilé-ìwòsàn báyìí pẹ̀lú káàdì ìlera ọmọ.", "Máa bá a lọ ní fífún un ní ọmú àti ohun mímu lójú ọ̀nà.", "Pe òṣìṣẹ́ ìlera àdúgbò tí o kò bá lè débẹ̀."],
          words: [["Gìrì (convulsions)", "gbígbọ̀n ara lójijì tí ọmọ kò lè ṣàkóso."], ["Àìtó omi nínú ara (dehydration)", "nígbà tí ara bá pàdánù omi púpọ̀ jù, fún àpẹẹrẹ nípasẹ̀ ìgbẹ́ gbuuru tàbí èébì."], ["ORS", "oral rehydration solution: ohun mímu omi tó mọ́, iyọ̀ àti ṣúgà tí ó ń rọ́pò omi tí ara pàdánù nípasẹ̀ ìgbẹ́ gbuuru."]],
          slides: [
            { title: "Lọ báyìí, kì í ṣe lọ́la", bullets: ["Àìsàn ń mú ọmọdé gidigidi ní kíákíá", "Mú káàdì ìlera ọmọ dání"] },
            { title: "Àwọn àmì ewu ọmọ tuntun", bullets: ["Kò mu ọmú tàbí kò fà ọmú", "Ara rọ̀ jọ̀bọ̀ tàbí kò ṣe wàlàwàlà", "Mímí kíákíá tàbí tó ṣòro; ibà tàbí ara tutù; gìrì"] },
            { title: "Àwọn àmì ewu ọmọ kékeré", bullets: ["Kò lè mu nǹkan tàbí mu ọmú; ó ń bì gbogbo nǹkan", "Gìrì; oorun ń kùn ún gan-an tàbí ó ṣòro láti jí", "Mímí kíákíá tàbí tó ṣòro; ibà; ìgbẹ́ gbuuru pẹ̀lú ẹ̀jẹ̀"] },
            { title: "Ìgbẹ́ gbuuru", bullets: ["Máa fún un ní ọmú àti ohun mímu", "Béèrè lọ́wọ́ òṣìṣẹ́ ìlera nípa ORS àti zinc", "Ojú jìn sínú tàbí ó rẹ̀ gan-an: lọ báyìí"] }
          ],
          sources: [WHO_NEWBORN, WHO_DIARRHOEA],
          tryIt: "Ṣe káàdì àmì ewu fún ìkókó àti ọmọ kékeré: ìlà kan fún ọmọ tuntun, ìlà kan fún ìkókó tó ti dàgbà díẹ̀ àti ọmọdé. Fi ilé-ìwòsàn tó sún mọ́ jù, nọ́mbà òṣìṣẹ́ ìlera àdúgbò àti bí o ṣe máa débẹ̀ ní òru kún un.",
          youCanNow: "rí àwọn àmì ewu lára ìkókó tàbí ọmọ kékeré, kí o sì gbé ọmọ náà lọ sí ilé-ìwòsàn lẹ́sẹ̀kẹsẹ̀.",
          quickCheck: [
            { objective: "O5", q: "Ìkókó ọlọ́sẹ̀ mẹ́ta kan ní Kumasi kò fà ọmú mọ́, ara rẹ̀ sì tutù. Kí ló yẹ kí ẹbí ṣe?", options: ["Dúró títí di àárọ̀", "Fún ọmọ ní omi", "Lọ sí ilé-ìwòsàn báyìí", "Fún un ní oògùn láti ọjà"], answer: 2, why: "Àìmu ọmú àti ara tí ó tutù jẹ́ àmì ewu ọmọ tuntun tí ó nílò ìtọ́jú báyìí." },
            { objective: "O5", q: "Ọmọ ọdún 2 kan tó ní ìgbẹ́ gbuuru ní ojú tí ó jìn sínú, ó sì rẹ̀ ẹ́ gan-an. Kí ló tọ́?", options: ["Dá gbogbo ohun mímu dúró", "Lọ sí ilé-ìwòsàn báyìí", "Dá ọmú dúró", "Dúró fún ọjọ́ mẹ́ta"], answer: 1, why: "Ojú tí ó jìn sínú àti àárẹ̀ jẹ́ àmì àìtó omi nínú ara, èyí tí ó lè pa ọmọ; lọ báyìí." }
          ]
        },
        {
          title: "Oúnjẹ, àjẹsára àti àyẹ̀wò ìdàgbàsókè",
          objectives: ["O6"],
          minutes: 6,
          goal: "Wá ọjọ́ àjẹsára àti àyẹ̀wò ìdàgbàsókè tó kàn lórí káàdì ìlera ọmọ, kí o sì kọ ìgbésẹ̀ oúnjẹ fún ọjọ́ orí ọmọ náà.",
          text: [
            "Káàdì tàbí ìwé ìlera ọmọ ń fi àwọn àjẹsára tí a ti fún un hàn, àwọn ọjọ́ àjẹsára tó kàn àti àtẹ ìdàgbàsókè. Àjẹsára ń dáàbò bo ọmọ lọ́wọ́ àwọn àìsàn bí ìgbóná (measles), rọpárọsẹ̀ (polio), ikọ́ líle (whooping cough), tetanus àti àwọn irú àìsàn òtútù àyà (pneumonia) àti ìgbẹ́ gbuuru kan. Àkókò àjẹsára yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn; tẹ̀lé káàdì rẹ àti ilé-ìwòsàn rẹ.",
            "Ní àyẹ̀wò ìdàgbàsókè ní ilé-ìwòsàn tàbí lọ́dọ̀ òṣìṣẹ́ ìlera àdúgbò, wọ́n máa ń wọn ìwúwo ọmọ, wọ́n sì máa ń wọn gíga rẹ̀. Ìlà ìdàgbàsókè tí ó tẹ́jú tàbí tí ó ń lọ sísàlẹ̀ jẹ́ ìkìlọ̀: béèrè lọ́wọ́ òṣìṣẹ́ ìlera ohun tí o máa ṣe.",
            "Oúnjẹ gẹ́gẹ́ bí ọjọ́ orí (WHO): ọmú nìkan fún oṣù 6 àkọ́kọ́. Láti nǹkan bí oṣù 6, fi oúnjẹ ẹbí tó rọ̀, tí a ti gún kún un, kí o sì máa bá a lọ ní fífún un ní ọmú títí di ọdún 2 tàbí jù bẹ́ẹ̀ lọ. Bẹ̀rẹ̀ pẹ̀lú díẹ̀, kí o sì máa fi kún un díẹ̀díẹ̀: oúnjẹ púpọ̀ sí i, tó nípọn sí i, àti oríṣiríṣi sí i. Ọmọ oṣù 6 sí 8 nílò oúnjẹ 2 sí 3 lóòjọ́; ọmọ oṣù 9 sí 23 nílò oúnjẹ 3 sí 4, pẹ̀lú ìpanu 1 sí 2 tí ó bá yẹ.",
            "Tí o bá pàdánù ọjọ́ àjẹsára kan, má ṣe jáwọ́: lọ ní kíákíá, ilé-ìwòsàn yóò sì ran ọmọ lọ́wọ́ láti gba àwọn tí ó kù. Kọ gbogbo ọjọ́ tó kàn sínú kàlẹ́ńdà fóònù rẹ."
          ],
          steps: ["Ṣí káàdì ìlera ọmọ.", "Wá àjẹsára tó kẹ́yìn àti ọjọ́ tó kàn.", "Wá àyẹ̀wò ìdàgbàsókè tó kẹ́yìn, kí o sì wò bóyá ìlà náà ń lọ sókè.", "Kọ ìgbésẹ̀ oúnjẹ fún ọjọ́ orí ọmọ náà.", "Kọ àwọn ọjọ́ tó kàn sínú kàlẹ́ńdà fóònù rẹ."],
          words: [["Àjẹsára (vaccine)", "oògùn tí a ń fún ọmọ láti dáàbò bò ó lọ́wọ́ àìsàn kí ó tó kó o; ilé-ìwòsàn ń fún un ní àkókò tí a ti ṣètò."], ["Àtẹ ìdàgbàsókè", "àtẹ lórí káàdì tí ó ń fi ìwúwo ọmọ hàn bí àkókò ti ń lọ."], ["Oúnjẹ àfikún", "fífi oúnjẹ ẹbí kún un láti nǹkan bí oṣù 6 nígbà tí fífún ní ọmú ń bá a lọ."]],
          slides: [
            { title: "Káàdì ìlera ọmọ", bullets: ["Àjẹsára tí a ti fún un àti ọjọ́ tó kàn", "Àtẹ ìdàgbàsókè", "Mú un lọ ní gbogbo ìgbà"] },
            { title: "Àjẹsára àti ìdàgbàsókè", bullets: ["Tẹ̀lé àkókò orílẹ̀-èdè rẹ", "Ìlà ìdàgbàsókè tẹ́jú tàbí ń lọ sísàlẹ̀: béèrè lọ́wọ́ òṣìṣẹ́ ìlera", "O pàdánù ọjọ́ kan? Lọ ní kíákíá"] },
            { title: "Oúnjẹ gẹ́gẹ́ bí ọjọ́ orí (WHO)", bullets: ["Oṣù 0-6: ọmú nìkan", "Láti nǹkan bí oṣù 6: oúnjẹ ẹbí tó rọ̀ pẹ̀lú ọmú", "Oṣù 6-8: oúnjẹ 2-3; oṣù 9-23: oúnjẹ 3-4, ìpanu 1-2"] }
          ],
          sources: [WHO_IMMUNIZATION, WHO_IYCF],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìlera ẹbí rẹ ojú-ìwé kan. Fi àwọn ìgbà tí ó kù láti lọ sí ilé-ìwòsàn, ètò ìbímọ, àwọn ìgbésẹ̀ ọmọ tuntun ní ọjọ́ àkọ́kọ́, àwọn àmì ewu fún ìyá àti ọmọ pẹ̀lú ilé-ìwòsàn àti nọ́mbà pàjáwìrì, àti ọjọ́ àjẹsára àti àyẹ̀wò ìdàgbàsókè tó kàn láti inú káàdì pẹ̀lú ìgbésẹ̀ oúnjẹ fún ọjọ́ orí ọmọ náà kún un.",
          youCanNow: "ka káàdì ìlera ọmọ láti rí ọjọ́ àjẹsára àti àyẹ̀wò ìdàgbàsókè tó kàn, kí o sì ṣètò oúnjẹ fún ọjọ́ orí ọmọ náà.",
          quickCheck: [
            { objective: "O6", q: "Ọmọ Kofi pàdánù ọjọ́ àjẹsára rẹ̀ ní ọ̀sẹ̀ tó kọjá. Kí ló yẹ kí ẹbí ṣe?", options: ["Dúró di ọdún tó ń bọ̀", "Fi àjẹsára yẹn sílẹ̀", "Tún bẹ̀rẹ̀ láti àjẹsára àkọ́kọ́", "Lọ sí ilé-ìwòsàn ní kíákíá láti gba èyí tó kù"], answer: 3, why: "Ilé-ìwòsàn lè ran ọmọ lọ́wọ́ láti gba àwọn tí ó kù; lọ ní kíákíá." },
            { objective: "O6", q: "Ní nǹkan bí ọjọ́ orí wo ni ọmọ máa ń bẹ̀rẹ̀ sí í jẹ oúnjẹ ẹbí pẹ̀lú ọmú?", options: ["Nǹkan bí oṣù 6", "Ọ̀sẹ̀ 2", "Oṣù 1", "Ọdún 2"], answer: 0, why: "WHO gbà nímọ̀ràn fífi oúnjẹ ẹbí tó rọ̀ kún un láti nǹkan bí oṣù 6 nígbà tí ọmú ń bá a lọ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àwọn ọjọ́ àkọ́kọ́ àti ọdún àkọ́kọ́ ọmọ rẹ",
        questions: [
          { objective: "O4", q: "Kí ni ọ̀nà tó dára jù láti mú ọmọ tuntun móoru lẹ́sẹ̀kẹsẹ̀ lẹ́yìn ìbímọ?", options: ["Ara mọ́ ara lórí àyà ìyá, pẹ̀lú aṣọ lórí wọn àti fìlà", "Ìwẹ̀ omi tútù", "Fífi ọmọ sílẹ̀ láìbò ó", "Gbígbé ọmọ sí yàrá míì"], answer: 0, why: "Ara mọ́ ara ń mú ọmọ móoru, ó sì ń ran fífún ní ọmú lọ́wọ́ láti bẹ̀rẹ̀." },
          { objective: "O4", q: "Kí ló yẹ kí a fi sí ìdodo?", options: ["Eérú tàbí ìgbẹ́ màlúù", "Kò sí nǹkan àyàfi tí òṣìṣẹ́ ìlera bá sọ; jẹ́ kí ó mọ́ kí ó sì gbẹ", "Bọ́tà", "Ẹrẹ̀"], answer: 1, why: "Ìdodo tó mọ́ tí ó sì gbẹ ń dín ewu àkóràn kù." },
          { objective: "O5", q: "Àmì wo lára ọmọ kékeré ló túmọ̀ sí lọ sí ilé-ìwòsàn báyìí?", options: ["Ikọ́ díẹ̀ nígbà tí ó ń jẹun dáadáa", "Ọmọ náà kò lè mu nǹkan tàbí mu ọmú", "Ehín tí ó ń hù", "Imú tí ó ń ṣàn nígbà tí ó ń ṣeré dáadáa"], answer: 1, why: "Àìlè mu nǹkan tàbí mu ọmú jẹ́ àmì ewu gbogbogbò." },
          { objective: "O5", q: "Ọmọ kan ní Kano ń mí kíákíá, ó sì ń mí ní ìṣòro ní òru. Kí ló yẹ kí àwọn òbí ṣe?", options: ["Dúró de ilé-ìwòsàn àárọ̀", "Fún un ní oògùn ikọ́ láti ṣọ́ọ̀bù", "Lọ sí ilé-ìwòsàn báyìí", "Pa àyà rẹ̀ kí wọ́n sì dúró"], answer: 2, why: "Mímí kíákíá tàbí tó ṣòro lè túmọ̀ sí àìsàn òtútù àyà (pneumonia), ó sì nílò ìtọ́jú báyìí." },
          { objective: "O6", q: "Ìlà ìdàgbàsókè lórí káàdì ti tẹ́jú fún oṣù méjì. Kí ló yẹ kí òbí ṣe?", options: ["Kò sí nǹkan; ó wọ́pọ̀", "Dá lílọ sí ilé-ìwòsàn dúró", "Fún un ní omi nìkan", "Béèrè lọ́wọ́ òṣìṣẹ́ ìlera nípa rẹ̀"], answer: 3, why: "Ìlà tí ó tẹ́jú tàbí tí ó ń lọ sísàlẹ̀ jẹ́ ìkìlọ̀; òṣìṣẹ́ ìlera lè ṣèrànwọ́ láti mọ ìdí rẹ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìlera Ìyá àti Ọmọ: Oyún, Ìbímọ àti Àwọn Ọdún Àkọ́kọ́",
    questions: [
      { objective: "O1", q: "Ìtọ́jú fún obìnrin nígbà oyún ni a ń pè ní:", options: ["Ìtọ́jú oyún (antenatal care)", "Ìtọ́jú lẹ́yìn ìbímọ", "Ìtọ́jú pàjáwìrì àkọ́kọ́", "Àyẹ̀wò ìdàgbàsókè"], answer: 0, why: "Antenatal túmọ̀ sí ṣáájú ìbímọ." },
      { objective: "O1", q: "WHO gbà nímọ̀ràn pé kí ìpàdé oyún àkọ́kọ́ wà:", options: ["Ní oṣù ìkẹyìn", "Láàárín ọ̀sẹ̀ 12 àkọ́kọ́", "Tí ìrora bá wà nìkan", "Lẹ́yìn tí ọmọ inú bá mira"], answer: 1, why: "Bíbẹ̀rẹ̀ ní kùtùkùtù ń ṣèrànwọ́ láti rí ìṣòro ní kùtùkùtù." },
      { objective: "O1", q: "Obìnrin tó lóyún kan pàdánù ìgbà kan ní ilé-ìwòsàn. Kí ló dára jù?", options: ["Dúró títí ìrọbí", "Dá lílọ dúró", "Lọ ní kíákíá tí ó bá lè ṣe é", "Dúró de ìgbà tó tẹ̀lé e"], answer: 2, why: "Lílọ ní kíákíá ń jẹ́ kí ìtọ́jú rẹ̀ wà lójú ọ̀nà." },
      { objective: "O2", q: "Èwo ni àmì ewu nígbà oyún?", options: ["Ebi", "Ọmọ inú tí ó ń ta ẹsẹ̀", "Ẹ̀jẹ̀ tí ó ń jáde láti ojú ara", "Fífẹ́ sùn sí i"], answer: 2, why: "Ẹ̀jẹ̀ nígbà oyún lè túmọ̀ sí ewu fún ìyá àti ọmọ." },
      { objective: "O2", q: "Ojú àti ọwọ́ obìnrin tó lóyún kan wú lójijì, orí sì ń fọ́ ọ gidigidi. Ó yẹ kí ó:", options: ["Lọ sí ilé-ìwòsàn báyìí", "Dín iyọ̀ kù kí ó sì dúró", "Dúró de ìgbà tó kàn", "Sùn kí ó lọ"], answer: 0, why: "Ìwọ̀nyí lè jẹ́ àmì ẹ̀jẹ̀ ríru tó léwu." },
      { objective: "O2", q: "Ní ọjọ́ méjì lẹ́yìn ìbímọ, ẹ̀jẹ̀ ìyá ń rin aṣọ kíákíá. Ẹbí yẹ kí ó:", options: ["Dúró fún ọjọ́ kan", "Fún un ní tíì", "Gbé e lọ sí ilé-ìwòsàn báyìí", "Sọ fún un kí ó sinmi"], answer: 2, why: "Ẹ̀jẹ̀ púpọ̀ lẹ́yìn ìbímọ lè pa ènìyàn kíákíá." },
      { objective: "O2", q: "Kí ló dé tí o kò fi gbọ́dọ̀ \"dúró kí a wò ó\" tí àmì ewu bá wà?", options: ["Ilé-ìwòsàn máa ń tilẹ̀kùn ní kùtùkùtù", "Àmì ewu lè burú sí i kíákíá, yíyára sì ń gba ẹ̀mí là", "Dídúró kò ná owó tó", "Àwọn àmì máa ń lọ nígbà gbogbo"], answer: 1, why: "Ọ̀pọ̀ ikú ń wá látàrí ìdádúró nínú ṣíṣe ìpinnu láti lọ àti dídé ibẹ̀." },
      { objective: "O3", q: "Ìbéèrè wo ló yẹ kí ó wà nínú ètò ìbímọ?", options: ["Àwọ̀ wo ni aṣọ ọmọ máa jẹ́?", "Báwo ni a ṣe máa dé ilé-ìwòsàn ní òru?", "Ta ló máa se oúnjẹ fún àlejò?", "Kí ni orúkọ ọmọ máa jẹ́?"], answer: 1, why: "Ọkọ̀, pàápàá ní òru, jẹ́ apá pàtàkì nínú ètò ìbímọ." },
      { objective: "O3", q: "Ẹbí kan ní Dakar fẹ́ kí owó wà nílẹ̀ fún ìbímọ. Ìgbésẹ̀ tó dára ni láti:", options: ["Tọ́jú díẹ̀ lọ́sẹ̀ọ̀sẹ̀, kí ẹ bẹ̀rẹ̀ ní kùtùkùtù", "Yá owó lọ́jọ́ náà", "Retí pé aládùúgbò máa sanwó", "Dúró títí ìrọbí"], answer: 0, why: "Títọ́jú owó ní kùtùkùtù túmọ̀ sí pé owó máa wà nílẹ̀ nígbà tí ìrọbí bá bẹ̀rẹ̀." },
      { objective: "O3", q: "Kí ló yẹ kí ó wà nínú àpò ìbímọ?", options: ["Kò sí nǹkan; ilé-ìwòsàn ní gbogbo rẹ̀", "Owó nìkan", "Oúnjẹ fún gbogbo ẹbí", "Ìwé ìlera, aṣọ tó mọ́ àti aṣọ ọmọ"], answer: 3, why: "A nílò ìwé ìlera àti àwọn nǹkan tó mọ́ fún ìyá àti ọmọ nígbà ìbímọ." },
      { objective: "O4", q: "Kí ni colostrum?", options: ["Àjẹsára kan", "Irú tíì kan fún ọmọ", "Wàrà ọmú àkọ́kọ́ tó nípọn, tó sì pọ́n", "Ìpara ọmọ kan"], answer: 2, why: "Colostrum ni wàrà àkọ́kọ́, ó sì ń dáàbò bo ọmọ." },
      { objective: "O4", q: "Fún oṣù 6 àkọ́kọ́, WHO gbà nímọ̀ràn pé kí a fún ọmọ ní:", options: ["Ọmú àti omi", "Ọmú nìkan", "Ògì", "Wàrà màlúù"], answer: 1, why: "Ọmú nìkan; kò sí ohun mímu tàbí oúnjẹ míì." },
      { objective: "O4", q: "Ìgbésẹ̀ ọjọ́ àkọ́kọ́ wo ló tọ̀nà?", options: ["Wẹ ọmọ nínú omi tútù lẹ́sẹ̀kẹsẹ̀", "Fi eérú sí ìdodo", "Dúró fún ọjọ́ méjì kí o tó fún un ní ọmú", "Nu ọmọ gbẹ kí o sì gbé e sí ara mọ́ ara"], answer: 3, why: "Nínu ọmọ gbẹ àti ara mọ́ ara ń mú ọmọ tuntun móoru." },
      { objective: "O5", q: "Èwo ni àmì ewu ọmọ tuntun?", options: ["Sísùn láàárín ìgbà tí ó ń mu ọmú", "Àìlè fà ọmú", "Sísín lẹ́ẹ̀kan", "Sísunkún kí ó tó mu ọmú"], answer: 1, why: "Ọmọ tuntun tí kò lè fà ọmú nílò ìtọ́jú báyìí." },
      { objective: "O5", q: "Ọmọ kan ń bì gbogbo nǹkan, oorun sì ń kùn ún gan-an. Ẹbí yẹ kí ó:", options: ["Dúró di ọ̀la", "Fún un ní oògùn ọjà", "Má fún un ní ohun mímu", "Lọ sí ilé-ìwòsàn báyìí"], answer: 3, why: "Bíbì gbogbo nǹkan àti oorun tó pọ̀ jù jẹ́ àmì ewu gbogbogbò." },
      { objective: "O5", q: "Ọmọ kan ní ìgbẹ́ gbuuru tí ẹ̀jẹ̀ wà nínú rẹ̀. Ẹbí yẹ kí ó:", options: ["Gbé ọmọ lọ sí ilé-ìwòsàn", "Dá gbogbo oúnjẹ àti ohun mímu dúró", "Dúró kí ó lọ", "Fún un ní oògùn aládùúgbò"], answer: 0, why: "Ẹ̀jẹ̀ nínú ìgbẹ́ jẹ́ ìdí láti wá ìtọ́jú." },
      { objective: "O5", q: "Lójú ọ̀nà sí ilé-ìwòsàn pẹ̀lú ọmọ tó ní ìgbẹ́ gbuuru, o yẹ kí o:", options: ["Dá ọmú dúró", "Máa fún un ní ọmú àti ohun mímu", "Má fún un ní omi", "Fún un ní tíì líle nìkan"], answer: 1, why: "Ohun mímu àti ọmú ń rọ́pò omi tí ara pàdánù." },
      { objective: "O6", q: "Níbo ni o ti máa rí ọjọ́ àjẹsára tó kàn?", options: ["Lórí káàdì ìlera ọmọ", "Lórí rédíò", "Lọ́dọ̀ ọlọ́jà", "Kò sí ibì kankan; o máa méfò"], answer: 0, why: "Káàdì náà ń fi àwọn àjẹsára tí a ti fún un àti àwọn ọjọ́ tó kàn hàn." },
      { objective: "O6", q: "Gẹ́gẹ́ bí ìmọ̀ràn WHO, oúnjẹ mélòó ló yẹ kí ọmọ oṣù 10 jẹ lóòjọ́?", options: ["Ẹ̀ẹ̀kan", "3 sí 4, pẹ̀lú ìpanu 1 sí 2 tí ó bá yẹ", "Ọmú nìkan", "Mẹ́wàá"], answer: 1, why: "WHO gbà nímọ̀ràn oúnjẹ 3 sí 4 fún oṣù 9 sí 23, pẹ̀lú ìpanu tí ó bá yẹ." },
      { objective: "O6", q: "Títí di ọjọ́ orí wo ni WHO gbà nímọ̀ràn pé kí a máa fún ọmọ ní ọmú?", options: ["Oṣù 3", "Oṣù 6", "Ọdún 1 gééré", "Ọdún 2 tàbí jù bẹ́ẹ̀ lọ"], answer: 3, why: "Fífún ní ọmú ń bá a lọ pẹ̀lú oúnjẹ ẹbí títí di ọdún 2 tàbí jù bẹ́ẹ̀ lọ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 3, 6, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Lílọ sí ilé-ìwòsàn", objective: "O1", notYet: "Kò sí ọjọ́ kankan, tàbí ìgbà àkọ́kọ́ pẹ́ jù nínú oyún.", meets: "Ó kọ àwọn ìgbà tí ó kù sílẹ̀, pẹ̀lú ìgbà àkọ́kọ́ láàárín ọ̀sẹ̀ 12 àkọ́kọ́, tí a kọ sínú ìwé ìlera tàbí sínú fóònù.", exceeds: "Ó tún sọ ẹni tí yóò bá a lọ ní ìgbà kọ̀ọ̀kan àti bí a ṣe máa sanwó rẹ̀." },
      { name: "Ètò ìbímọ", objective: "O3", notYet: "Ọ̀kan tàbí jù bẹ́ẹ̀ lọ nínú ibi, ọkọ̀, owó tàbí olùrànlọ́wọ́ kò sí.", meets: "Ó dárúkọ ilé-ìwòsàn, ọkọ̀ ọ̀sán àti òru, owó tí a ń tọ́jú lọ́sẹ̀, ẹni tí yóò bá a lọ àti ẹni tí yóò bójú tó ilé.", exceeds: "Ó tún ti fi àwọn nọ́mbà ọkọ̀ pamọ́, ó ti di àpò, ẹbí sì ti fohùn ṣọ̀kan lórí ètò náà." },
      { name: "Ọjọ́ àkọ́kọ́ ọmọ tuntun", objective: "O4", notYet: "Àwọn ìgbésẹ̀ kan kò sí, wọn kò wà ní ètò, tàbí àṣà tó léwu wà nínú rẹ̀.", meets: "Ìmóoru (ara mọ́ ara), ọmú láàárín wákàtí àkọ́kọ́, ọmú nìkan àti ìdodo tó mọ́, tó sì gbẹ.", exceeds: "Ó tún dárúkọ àṣà tó léwu kan ní àdúgbò àti ìgbésẹ̀ tí kò léwu tí ó rọ́pò rẹ̀." },
      { name: "Àwọn àmì ewu", objective: "O2", notYet: "Àkọsílẹ̀ náà kò ní àwọn àmì pàtàkì, tàbí ó sọ pé kí a dúró kí a wò ó.", meets: "Ó kọ àwọn àmì ewu pàtàkì fún ìyá àti ọmọ, pẹ̀lú ilé-ìwòsàn tó sún mọ́ jù àti nọ́mbà pàjáwìrì.", exceeds: "Ó tún sọ nípa ọkọ̀ ní òru àti nọ́mbà òṣìṣẹ́ ìlera àdúgbò." },
      { name: "Àwọn àmì ewu ọmọdé", objective: "O5", notYet: "Àwọn àmì ewu ọmọdé kò sí, tàbí wọ́n dàpọ̀ mọ́ àwọn àmì tí kò léwu.", meets: "Ó kọ àwọn àmì ewu ọmọ tuntun àti ọmọ kékeré tó túmọ̀ sí lọ báyìí.", exceeds: "Ó ṣàlàyé wọn kedere débi pé ìyá-àgbà tàbí ẹ̀gbọ́n ọmọ lè lò wọ́n." },
      { name: "Káàdì, àjẹsára àti oúnjẹ", objective: "O6", notYet: "Kò sí ọjọ́ tó kàn, tàbí ìmọ̀ràn oúnjẹ kò bá ọjọ́ orí ọmọ mu.", meets: "Ó fún wa ní ọjọ́ àjẹsára àti àyẹ̀wò ìdàgbàsókè tó kàn láti inú káàdì, àti ìgbésẹ̀ oúnjẹ tó tọ́ fún ọjọ́ orí náà.", exceeds: "Àwọn ọjọ́ náà wà nínú kàlẹ́ńdà fóònù pẹ̀lú ìránnilétí." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tó lóyún tàbí ẹbí wọn tí wọ́n lọ sí ilé-ìwòsàn fún ìgbà àkọ́kọ́ láàárín ọ̀sẹ̀ 12 àkọ́kọ́ (ìwádìí àtẹ̀lé ọjọ́ 30)",
      "Àwọn ẹbí tí wọ́n sọ pé àwọn ní ètò ìbímọ tí a kọ sílẹ̀, pẹ̀lú owó tí a tọ́jú àti ọkọ̀ tí a ti ṣètò",
      "Àwọn ọmọ tí wọ́n ń lọ fún àjẹsára àti àyẹ̀wò ìdàgbàsókè tó kàn ní àkókò, gẹ́gẹ́ bí àwọn akẹ́kọ̀ọ́ tàbí ilé-ìwòsàn alábàáṣiṣẹ́ ṣe ròyìn",
      "Àwọn òṣìṣẹ́ ìlera àdúgbò alábàáṣiṣẹ́ ròyìn pé àwọn ẹbí ń wá ní kíákíá nígbà tí àmì ewu bá yọ"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù lásán, tàbí ìpàdé ẹgbẹ́ tí a ti ń ka àwọn ẹ̀kọ́ sókè",
      "Ìwé ìlera ìyá àti ọmọ tàbí káàdì ìlera ọmọ, tí ẹbí bá ní ọ̀kan",
      "Ìwé àti gègé fún káàdì àmì ewu, ètò ìbímọ àti ètò ìlera ẹbí",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Àwọn alábàáṣiṣẹ́ tó dára: àwọn òṣìṣẹ́ ìlera àdúgbò, àwọn agbẹ̀bí ilé-ìwòsàn, àwọn ẹgbẹ́ obìnrin, àwọn ẹgbẹ́ àjọ (ìfowópamọ́) àti àwọn ẹgbẹ́ ẹ̀sìn; pe agbẹ̀bí tàbí nọ́ọ̀sì kan láti dáhùn ìbéèrè.",
      "Má ṣe ní kí akẹ́kọ̀ọ́ sọ nípa oyún tirẹ̀, ipò HIV rẹ̀ tàbí ìsọfúnni ìlera míì nínú ẹgbẹ́ láéláé; lo àwọn àpẹẹrẹ inú ẹ̀kọ́ dípò rẹ̀.",
      "Má ṣe sọ iye oògùn tàbí fúnni ní ìmọ̀ràn ìtọ́jú; darí gbogbo irú ìbéèrè bẹ́ẹ̀ sí ilé-ìwòsàn.",
      "Ṣàyẹ̀wò àwọn òtítọ́ àdúgbò ṣáájú ìpàdé: ilé-ìwòsàn tó sún mọ́ jù, àwọn nọ́mbà pàjáwìrì, àkókò àjẹsára àdúgbò, àti bóyá ìtọ́jú ìbímọ jẹ́ ọ̀fẹ́ tàbí wọ́n ń sanwó rẹ̀.",
      "Pe àwọn bàbá àti ìyá-àgbà: ẹbí ló sábà máa ń ṣe ìpinnu nípa lílọ sí ilé-ìwòsàn.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
