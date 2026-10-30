"use strict";

// Koach Learn course (Yoruba translation of shared/intro-machine-learning.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Àwọn ìbéèrè tí àwọn ènìyàn máa ń béèrè", url: "https://research.google.com/colaboratory/faq.html" };
const SKLEARN = { name: "scikit-learn: Bí a ṣe ń bẹ̀rẹ̀", url: "https://scikit-learn.org/stable/getting_started.html" };

module.exports = {
  id: "intro-machine-learning-yo",
  lang: "yo",
  translationOf: "intro-machine-learning",
  category: "Youth",
  name: "Ìfihàn sí Machine Learning (Ẹ̀kọ́ Ẹ̀rọ)",
  skills: "Ṣíṣàlàyé bí ẹ̀rọ ṣe ń kẹ́kọ̀ọ́, Yíyan feature àti label, Pínpín data fún training àti testing, Kíkọ́ model pẹ̀lú scikit-learn, Wíwọn àti fífi accuracy wé ara wọn",
  outcome: "kọ́ model machine learning méjì tó rọrùn nínú Google Colab pẹ̀lú scikit-learn, dán wọn wò lórí data tí wọn kò rí rí, fi accuracy wọn wé ara wọn, kí o sì ṣàlàyé èyí tí o máa lò àti ibi tí agbára rẹ̀ mọ.",
  about: [
    "Machine learning ló wà lẹ́yìn àwọn ohun tí ń dí spam lọ́nà, àwọn fíìmù tí app ń dábàá fún ọ, àkókò súnkẹrẹ-fàkẹrẹ lórí máàpù, àti ìkìlọ̀ jìbìtì lórí káàdì báǹkì. Ẹ̀kọ́ yìí fi bí ó ṣe ń ṣiṣẹ́ hàn ọ́, lẹ́yìn náà o máa kọ́ model kan fúnra rẹ.",
    "Orí 1 kò nílò kóòdù: o máa kọ́ àwọn èrò náà pẹ̀lú àpẹẹrẹ ojoojúmọ́ àti àwọn tábìlì kékeré tí o máa ṣe fúnra rẹ. Orí 2 lọ sí Google Colab, ojú-òpó wẹ́ẹ̀bù ọ̀fẹ́ tí ó ń ṣe Python, níbi tí o ti máa kọ́ model gidi tí o sì máa dán wọn wò pẹ̀lú library ọ̀fẹ́ kan tí a ń pè ní scikit-learn. Mímọ Python díẹ̀ máa ràn ọ́ lọ́wọ́, ṣùgbọ́n a fún ọ ní gbogbo ìlà kóòdù, a sì ṣàlàyé rẹ̀.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Nínú Google Colab, ṣí dataset òdòdó iris, pín in sí training set àti test set, kọ́ decision tree àti model k-nearest-neighbors, tẹ accuracy model kọ̀ọ̀kan lórí test set jáde, lo èyí tó dára jù láti sọ irú (species) òdòdó tuntun kan, kí o sì kọ gbólóhùn méjì: model wo ni o máa yàn, àti ohun kan tí model rẹ kò lè ṣe dáadáa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ àti àgbàlagbà tí wọ́n ti lo Python díẹ̀, tí wọ́n sì fẹ́ lóye machine learning kí wọ́n sì gbìyànjú rẹ̀: àwọn akẹ́kọ̀ọ́ ilé-ẹ̀kọ́ gíga àti yunifásítì, àwọn ọmọ ẹgbẹ́ kíkọ kóòdù, àwọn tí ń yí iṣẹ́ padà, àti àwọn tí ń kọ́ṣẹ́ fún iṣẹ́ data tàbí AI.",
    startingPoint: "Wọ́n lè kọ ètò Python kúkúrú kí wọ́n sì ṣe é nínú Google Colab, wọ́n sì lè lo list àti function. Ọ̀pọ̀ ti gbọ́ nípa AI àti machine learning, ṣùgbọ́n wọn kò tíì kọ́ model rí, wọn kò tíì pín data sí training set àti test set, wọn kò sì tíì wọn accuracy tàbí fi wé ara wọn rí.",
    gap: "Machine learning wà lẹ́yìn àwọn ohun tí ń dí spam lọ́nà, àwọn ìdábàá, máàpù àti ọ̀pọ̀ irinṣẹ́ níbi iṣẹ́, àwọn iṣẹ́ data àti AI ìpele àkọ́kọ́ sì ń retí pé kí ènìyàn mọ bí model ṣe ń kẹ́kọ̀ọ́ àti bí ó ṣe ń kùnà. Láìsí àṣeṣe ọwọ́, àwọn akẹ́kọ̀ọ́ kò lè ṣe ìdájọ́ èsì model, kò lè rí data tí kò dára, wọn kò sì lè rí ìdí tí àyẹ̀wò ìdájọ́ òdodo (fairness) fi ṣe pàtàkì.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé àwọn ọ̀rọ̀ bí feature, label, overfitting àti accuracy",
      "Ẹ̀rọ: kọ̀mpútà tàbí laptop tí ó ní browser wẹ́ẹ̀bù",
      "Àkáǹtì àti owó: àkáǹtì Google ọ̀fẹ́ fún Google Colab; scikit-learn ti wà nínú rẹ̀ tẹ́lẹ̀",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 sí 6 fún ẹ̀kọ́ kọ̀ọ̀kan pẹ̀lú àṣeṣe, nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀",
      "Ìṣirò: ìdá-ọgọ́rùn-ún (percent) àti wíwọn tó rọrùn nìkan; kò sí fọ́múlà"
    ],
    prerequisites: "Ìfihàn sí Kíkọ Ètò Kọ̀mpútà pẹ̀lú Python."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Láìwo àkọsílẹ̀", action: "ṣàlàyé ohun tí machine learning jẹ́, kí o sì mọ̀ bóyá iṣẹ́ kan jẹ́ classification tàbí regression", standard: "pẹ̀lú àlàyé tó tọ̀nà, kí o sì to ó kéré tán 4 nínú iṣẹ́ 5 tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní ìṣòro àsọtẹ́lẹ̀ kan", action: "ṣe dataset kékeré tí ó ní àwọn feature tó bọ́gbọ́n mu àti label kan, kí o sì ṣàyẹ̀wò rẹ̀ fún àlàfo", standard: "pẹ̀lú àwọn feature tí ó ń nípa lórí ìdáhùn, ọ̀wọ̀n label kan, kí o sì dárúkọ ó kéré tán àlàfo kan tí ó lè wà" },
    { id: "O3", condition: "Tí a bá fún ọ ní dataset àti èsì ìdánwò model kan", action: "ṣàlàyé ìdí tí a fi ń pín data sí training set àti test set, kí o sì ṣírò accuracy", standard: "pẹ̀lú accuracy tó tọ̀nà dé ìdá-ọgọ́rùn-ún odidi tó súnmọ́ jù" },
    { id: "O4", condition: "Nínú Google Colab pẹ̀lú scikit-learn", action: "ṣí dataset àṣeṣe kan kí o sì ṣàpèjúwe àwọn ìlà (row), feature àti label rẹ̀", standard: "kí o dárúkọ iye ìlà àti ọ̀wọ̀n, àti ohun tí label náà túmọ̀ sí" },
    { id: "O5", condition: "Tí a bá fún ọ ní dataset iris", action: "pín data náà, kọ́ decision tree kan, kí o sì tẹ accuracy rẹ̀ lórí test set jáde", standard: "pẹ̀lú kóòdù tí ó ṣiṣẹ́ láìsí àṣìṣe, tí accuracy sì jáde" },
    { id: "O6", condition: "Tí a bá fún ọ ní model méjì tí a ti kọ́", action: "fi test accuracy wọn wé ara wọn, sọ àsọtẹ́lẹ̀ fún àpẹẹrẹ tuntun kan, kí o sì kọ ohun kan tí model tí o yàn kò lè ṣe dáadáa", standard: "kí o yan model kan pẹ̀lú ìdí, kí o sì dárúkọ ibi gidi tí agbára rẹ̀ mọ" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí ẹ̀rọ ṣe ń kẹ́kọ̀ọ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí machine learning jẹ́",
          minutes: 4,
          goal: "Ṣàlàyé machine learning ní ọ̀rọ̀ ara rẹ kí o sì rí i nínú ayé ojoojúmọ́.",
          text: [
            "Nínú kíkọ ètò kọ̀mpútà lásán, ènìyàn ló ń kọ àwọn òfin. Nínú machine learning (ML), o fún kọ̀mpútà ní ọ̀pọ̀ àpẹẹrẹ pẹ̀lú ìdáhùn tó tọ̀nà, òun fúnra rẹ̀ ló sì máa rí àwọn òfin náà. Ohun tí ó jáde ni a ń pè ní model.",
            "Àpẹẹrẹ ojoojúmọ́: ímeèlì rẹ ń kẹ́kọ̀ọ́ bí spam ṣe rí láti inú ọ̀pọ̀ mílíọ̀nù ímeèlì tí a ti sàmì sí. App orin ń dábàá orin láti inú ohun tí àwọn ènìyàn bí ìwọ ti gbọ́. App máàpù ń sọ tẹ́lẹ̀ bí ọ̀nà ṣe máa kún láti inú àwọn ìrìn-àjò àtẹ̀yìnwá.",
            "Iṣẹ́ méjì tó wọ́pọ̀: classification ń pín nǹkan sí ẹgbẹ́ (spam tàbí kì í ṣe spam, irú òdòdó wo). Regression ń sọ nọ́mbà kan tẹ́lẹ̀ (iye owó ilé, ìṣẹ́jú mélòó kí bọ́ọ̀sì tó dé). Tí àwọn àpẹẹrẹ bá wá pẹ̀lú ìdáhùn, a ń pè é ní supervised learning, ohun tí ẹ̀kọ́ yìí sì ń kọ́ni nìyẹn."
          ],
          words: [["Machine learning (ML)", "kọ̀mpútà tí ń rí àpẹẹrẹ-ìṣesí (pattern) nínú àwọn àpẹẹrẹ dípò títẹ̀lé òfin tí ènìyàn kọ."], ["Model", "ohun tí ML ń ṣe jáde: àkójọ pattern tí ó ti kọ́, tí ó ń sọ nǹkan tẹ́lẹ̀."], ["Classification", "sísọ ẹgbẹ́ tàbí ìsọ̀rí kan tẹ́lẹ̀."], ["Regression", "sísọ nọ́mbà kan tẹ́lẹ̀."], ["Supervised learning", "kíkẹ́kọ̀ọ́ láti inú àwọn àpẹẹrẹ tí ó wá pẹ̀lú ìdáhùn tó tọ̀nà."]],
          slides: [
            { title: "Òfin tàbí kíkẹ́kọ̀ọ́", bullets: ["Kíkọ ètò: ènìyàn ló ń kọ àwọn òfin", "ML: kọ̀mpútà ló ń rí òfin láti inú àpẹẹrẹ", "Ohun tí ó jáde ni model"] },
            { title: "ML tí o ti ń lò tẹ́lẹ̀", bullets: ["Ohun tí ń dí spam lọ́nà", "Ìdábàá orin àti fídíò", "Àkókò súnkẹrẹ-fàkẹrẹ lórí máàpù", "Ìkìlọ̀ jìbìtì lórí káàdì"] },
            { title: "Iṣẹ́ méjì tó wọ́pọ̀", bullets: ["Classification: ẹgbẹ́ wo?", "Regression: nọ́mbà wo?", "Supervised: àwọn àpẹẹrẹ wá pẹ̀lú ìdáhùn"] }
          ],
          tryIt: "Kọ app mẹ́ta tí o ń lò tí ó ṣeé ṣe kí wọ́n máa lo machine learning. Fún ọ̀kọ̀ọ̀kan, kọ ohun tí ó ń sọ tẹ́lẹ̀, àti bóyá classification (ẹgbẹ́) ni tàbí regression (nọ́mbà).",
          youCanNow: "ṣàlàyé ohun tí machine learning jẹ́, kí o sì fi ìyàtọ̀ sáàárín classification àti regression.",
          quickCheck: [
            { objective: "O1", q: "Nínú machine learning, kí ni model?", options: ["Àkọsílẹ̀ òfin tí ènìyàn fi ọwọ́ tẹ̀", "Spreadsheet tí ó kún fún data", "Irú kọ̀mpútà kan", "Ohun tí ó jáde nígbà tí kọ̀mpútà rí pattern nínú àwọn àpẹẹrẹ"], answer: 3, why: "Model ni ohun tí kọ̀mpútà ń ṣe jáde lẹ́yìn tí ó bá rí pattern nínú àwọn àpẹẹrẹ." },
            { objective: "O1", q: "Ṣọ́ọ̀bù kan fẹ́ to ímeèlì àwọn oníbàárà sí \"ẹ̀sùn\" tàbí \"ìbéèrè\". Irú iṣẹ́ wo ni o máa pe èyí?", options: ["Regression", "Classification", "Testing", "Overfitting"], answer: 1, why: "Pínpín nǹkan sí ẹgbẹ́ ni classification; sísọ nọ́mbà tẹ́lẹ̀ ni regression." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Data: feature àti label",
          minutes: 5,
          goal: "Ṣe dataset kékeré kan tí ó ní àwọn feature àti label kan.",
          text: [
            "ML ń kẹ́kọ̀ọ́ láti inú data, tí ó sábà jẹ́ tábìlì. Ìlà (row) kọ̀ọ̀kan jẹ́ àpẹẹrẹ kan. Àwọn ọ̀wọ̀n (column) tí ó ń ṣàpèjúwe àpẹẹrẹ náà ni feature. Ọ̀wọ̀n tí ó ní ìdáhùn tí o fẹ́ sọ tẹ́lẹ̀ ni label.",
            "Àpẹẹrẹ: láti sọ tẹ́lẹ̀ bóyá bọ́ọ̀sì máa pẹ́, ìlà kọ̀ọ̀kan jẹ́ ìrìn-àjò kan. Àwọn feature lè jẹ́ àkókò ọjọ́, ọjọ́ wo nínú ọ̀sẹ̀, àti bóyá òjò rọ̀. Label ni pé ó pẹ́ tàbí ó dé lásìkò.",
            "Feature tó dára ni àwọn nǹkan tí ó ń nípa gidi lórí ìdáhùn. Ìlà púpọ̀ sí i sábà máa ń ràn án lọ́wọ́. Data náà tún gbọ́dọ̀ jẹ́ ti òdodo kí ó sì pé: tí o bá kó ìrìn-àjò ọjọ́ iṣẹ́ nìkan jọ, model náà kò ní dára ní òpin ọ̀sẹ̀. Model kò lè dára ju data rẹ̀ lọ."
          ],
          steps: ["Pinnu ohun tí o fẹ́ sọ tẹ́lẹ̀: èyí ni label rẹ.", "Kọ àwọn nǹkan tí ó lè nípa lórí rẹ̀: àwọn wọ̀nyí ni feature rẹ.", "Ṣe tábìlì tí ó ní ìlà kan fún àpẹẹrẹ kọ̀ọ̀kan.", "Kún ó kéré tán ìlà 10 láti inú ayé gidi.", "Ṣàyẹ̀wò: ṣé àwọn irú àpẹẹrẹ kan kò sí níbẹ̀?"],
          words: [["Dataset", "àkójọ àwọn àpẹẹrẹ, tí ó sábà jẹ́ tábìlì."], ["Feature", "ọ̀wọ̀n tí ó ń ṣàpèjúwe àpẹẹrẹ kan, tí a fi ń sọ nǹkan tẹ́lẹ̀."], ["Label", "ọ̀wọ̀n ìdáhùn tí model ń kọ́ láti sọ tẹ́lẹ̀."], ["Bias nínú data", "nígbà tí data bá fi àwọn ẹgbẹ́ kan sílẹ̀ tàbí kà wọ́n jù, tí model fi di aláìṣòdodo tàbí aṣìnà fún wọn."]],
          slides: [
            { title: "Data jẹ́ tábìlì", bullets: ["Ìlà kọ̀ọ̀kan: àpẹẹrẹ kan", "Feature: àwọn ọ̀wọ̀n tí ó ń ṣàpèjúwe", "Label: ìdáhùn tí a fẹ́ sọ tẹ́lẹ̀"] },
            { title: "Àpẹẹrẹ: ṣé bọ́ọ̀sì máa pẹ́?", bullets: ["Feature: àkókò, ọjọ́, òjò", "Label: ó pẹ́ tàbí ó dé lásìkò"] },
            { title: "Data tó dára", bullets: ["Feature tí ó ṣe pàtàkì gidi", "Ìlà tó tó", "Kò sí ẹgbẹ́ tí ó sọnù, bí òpin ọ̀sẹ̀"] }
          ],
          tryIt: "Yan nǹkan kan tí o lè sọ tẹ́lẹ̀ nínú ayé ojoojúmọ́, bí i bóyá ó máa rẹ̀ ọ́ lẹ́yìn eré ìdárayá, tàbí bóyá ṣọ́ọ̀bù kan máa kún fún èrò. Ṣe tábìlì tí ó ní feature méjì tàbí mẹ́ta àti label kan, kí o sì kún ìlà 10.",
          youCanNow: "yan label àti àwọn feature tí ó wúlò, kí o sì ṣe dataset kékeré kan.",
          quickCheck: [
            { objective: "O2", q: "Nínú tábìlì data, kí ni feature?", options: ["Àwọn ọ̀wọ̀n tí ó ń ṣàpèjúwe àpẹẹrẹ kọ̀ọ̀kan", "Ìdáhùn tí o fẹ́ sọ tẹ́lẹ̀", "Accuracy model náà", "Test set"], answer: 0, why: "Feature ń ṣàpèjúwe àpẹẹrẹ; label ni ìdáhùn tí a fẹ́ sọ tẹ́lẹ̀." },
            { objective: "O2", q: "O kó data jọ nípa àwọn akẹ́kọ̀ọ́ tí ó ń parí iṣẹ́ àṣetiléwá, ṣùgbọ́n láti kíláàsì kan ṣoṣo. Kí ni o máa ṣe kí o tó kọ́ model?", options: ["Kọ́ ọ lójú ẹsẹ̀; kíláàsì kan tó fún gbogbo ènìyàn", "Pa ọ̀wọ̀n label rẹ́", "Kó data jọ láti àwọn kíláàsì míì kí model lè ṣòdodo sí àwọn akẹ́kọ̀ọ́ míì", "Lo ìlà márùn-ún àkọ́kọ́ nìkan"], answer: 2, why: "Data láti ẹgbẹ́ kan ṣoṣo lè mú kí model má dára tàbí kí ó má ṣòdodo sí àwọn míì." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Training àti testing: ṣé model náà dára?",
          minutes: 5,
          goal: "Pín data sí training set àti test set, kí o sì wọn accuracy.",
          text: [
            "Training ni ìgbà tí model ń kọ́ àwọn àpẹẹrẹ láti rí pattern. Ṣùgbọ́n model tí ó kàn há àwọn àpẹẹrẹ rẹ̀ sórí lè dà bí ẹni pé ó pé, kí ó sì kùnà lórí àwọn tuntun. A ń pe èyí ní overfitting, bí akẹ́kọ̀ọ́ tí ó há ìdáhùn ìdánwò ọdún tó kọjá sórí.",
            "Nítorí náà, o máa fi apá kan data pamọ́. Training set (nígbà púpọ̀ nǹkan bí ìdá 75 sí 80 nínú ọgọ́rùn-ún àwọn ìlà) ni a fi ń kẹ́kọ̀ọ́. Test set (èyí tó kù) wà ní ìpamọ́ títí di ìparí, a sì fi ń ṣàyẹ̀wò model lórí àwọn àpẹẹrẹ tí kò rí rí.",
            "Accuracy ni ìdá àwọn àpẹẹrẹ test tí ó gbà tọ̀nà. 18 tọ̀nà nínú 20 jẹ́ ìdá 90 nínú ọgọ́rùn-ún. Máa béèrè nígbà gbogbo kí ni àṣìṣe máa ná ọ: ìdábàá orin tí kò tọ̀nà kò burú, ṣùgbọ́n ìkìlọ̀ jìbìtì tí ó fò kọjá burú."
          ],
          steps: ["Da àwọn ìlà rẹ pọ̀ (shuffle).", "Fi nǹkan bí ìdá 75 nínú ọgọ́rùn-ún sínú training set.", "Pa èyí tó kù mọ́ gẹ́gẹ́ bí test set, má sì wò ó.", "Wá pattern kan (òfin kan) láti inú training set nìkan.", "Lò ó lórí test set kí o sì ka iye tí ó gbà tọ̀nà."],
          words: [["Training", "model tí ń kọ́ pattern láti inú àwọn àpẹẹrẹ."], ["Training set", "àwọn ìlà tí a fi ń kẹ́kọ̀ọ́."], ["Test set", "àwọn ìlà tí a fi pamọ́ láti ṣàyẹ̀wò model lórí àpẹẹrẹ tuntun."], ["Overfitting", "nígbà tí model bá há training data rẹ̀ sórí, tí kò sì ṣe dáadáa lórí data tuntun."], ["Accuracy", "ìdá àwọn àsọtẹ́lẹ̀ tí ó tọ̀nà."]],
          slides: [
            { title: "Training", bullets: ["Model ń kọ́ àwọn àpẹẹrẹ", "Ó ń rí pattern", "Híhá sórí kì í ṣe kíkẹ́kọ̀ọ́"] },
            { title: "Fi data kan pamọ́", bullets: ["Training set: nǹkan bí 75-80% àwọn ìlà", "Test set: èyí tó kù, ó wà ní ìpamọ́ títí di ìparí"] },
            { title: "Accuracy", bullets: ["Ìdáhùn tó tọ̀nà / gbogbo àpẹẹrẹ test", "18 tọ̀nà nínú 20 = 90%", "Béèrè kí ni àṣìṣe máa ná ọ"] }
          ],
          tryIt: "Mú tábìlì ìlà 10 rẹ láti Ẹ̀kọ́ 2. Bo ìlà 2 tó gbẹ̀yìn. Láti inú 8 àkọ́kọ́, kọ òfin kan tó rọrùn (fún àpẹẹrẹ \"tí òjò bá rọ̀, bọ́ọ̀sì máa pẹ́\"). Dán òfin náà wò lórí ìlà 2 tí o fi pamọ́, kí o sì ṣírò accuracy.",
          youCanNow: "pín data sí training set àti test set, kí o sì ṣírò accuracy.",
          quickCheck: [
            { objective: "O3", q: "Kí ni overfitting?", options: ["Nígbà tí model bá kéré jù", "Nígbà tí test data bá pọ̀ jù", "Nígbà tí model bá há àwọn àpẹẹrẹ training rẹ̀ sórí tí ó sì kùnà lórí àwọn tuntun", "Nígbà tí accuracy bá jẹ́ ìdá 50 nínú ọgọ́rùn-ún"], answer: 2, why: "Overfitting dà bí híhá ìdáhùn ìdánwò ọdún tó kọjá sórí." },
            { objective: "O3", q: "Model jìbìtì kan ní accuracy 95%, ṣùgbọ́n àwọn tí ó fò kọjá jẹ́ jìbìtì gidi. Kí ni o máa béèrè tẹ̀lé e?", options: ["Kí ni àwọn àṣìṣe náà ń ná wa?", "Ṣé a lè fo test set?", "Ṣé a lè kọ́ ọ lórí test set?", "Ṣé 95% máa ń tó nígbà gbogbo?"], answer: 0, why: "Máa béèrè nígbà gbogbo kí ni àṣìṣe ń ná; ìkìlọ̀ jìbìtì tí ó fò kọjá ṣe pàtàkì gan-an." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí ẹ̀rọ ṣe ń kẹ́kọ̀ọ́",
        questions: [
          { objective: "O1", q: "Láti inú kí ni model machine learning ti ń kẹ́kọ̀ọ́?", options: ["Òfin tí ènìyàn tẹ̀ fún gbogbo ọ̀ràn", "Bátìrì kọ̀mpútà", "Àwọn àpẹẹrẹ, tí ó sábà ní ìdáhùn tó tọ̀nà", "Àmọ̀ràn láìròtẹ́lẹ̀ nìkan"], answer: 2, why: "ML ń rí pattern nínú àwọn àpẹẹrẹ." },
          { objective: "O1", q: "Sísọ ìwọ̀n ooru ọ̀la ní degree tẹ́lẹ̀ jẹ́:", options: ["Regression", "Classification", "Kì í ṣe ML", "Label kan"], answer: 0, why: "Sísọ nọ́mbà tẹ́lẹ̀ ni regression." },
          { objective: "O2", q: "Nínú tábìlì láti sọ tẹ́lẹ̀ bóyá ṣọ́ọ̀bù máa kún, \"ó kún tàbí kò kún\" ni:", options: ["Feature", "Test set", "Accuracy", "Label"], answer: 3, why: "Label ni ìdáhùn tí o fẹ́ sọ tẹ́lẹ̀." },
          { objective: "O3", q: "Kí ló dé tí a fi ń pa test set mọ́ títí di ìparí?", options: ["Láti mú kí training yára", "Láti ṣàyẹ̀wò model lórí àwọn àpẹẹrẹ tí kò rí rí", "Nítorí pé ó ti bàjẹ́", "Láti mú kí data pọ̀ sí i"], answer: 1, why: "Dídánwò lórí data tuntun ń fi hàn bóyá model kẹ́kọ̀ọ́ lóòótọ́." },
          { objective: "O3", q: "Model kan gba 15 nínú àpẹẹrẹ test 20 tọ̀nà. Kí ni accuracy rẹ̀?", options: ["15%", "20%", "50%", "75%"], answer: 3, why: "15 pín sí 20 jẹ́ 0.75, ìyẹn ìdá 75 nínú ọgọ́rùn-ún." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ́ model àkọ́kọ́ rẹ nínú Colab",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣí dataset pẹ̀lú scikit-learn",
          minutes: 5,
          goal: "Ṣí dataset àṣeṣe kan nínú Colab kí o sì wo àwọn feature àti label rẹ̀.",
          text: [
            "scikit-learn jẹ́ library Python ọ̀fẹ́ fún machine learning, tí ó ti wà nínú Google Colab tẹ́lẹ̀. Ó wá pẹ̀lú àwọn dataset àṣeṣe kékeré. Dataset iris ní òdòdó 150. Ọ̀kọ̀ọ̀kan ní feature mẹ́rin (gígùn àti fífẹ̀ apá méjì òdòdó náà, ní centimeter) àti label kan: ọ̀kan nínú irú (species) mẹ́ta.",
            "Ṣí i pẹ̀lú: from sklearn.datasets import load_iris, lẹ́yìn náà iris = load_iris(). Àwọn feature wà nínú iris.data, àwọn label sì wà nínú iris.target. iris.feature_names àti iris.target_names ń sọ ohun tí àwọn ọ̀wọ̀n àti label túmọ̀ sí fún ọ.",
            "Máa wo data rẹ nígbà gbogbo kí o tó kọ́ model: ìlà mélòó, kí ni àwọn ọ̀wọ̀n, àti àwọn ìlà àpẹẹrẹ díẹ̀. iris.data.shape ń sọ iye ìlà àti ọ̀wọ̀n fún ọ: (150, 4)."
          ],
          steps: ["Ṣí notebook tuntun ní colab.research.google.com.", "Ṣe é (run): from sklearn.datasets import load_iris", "Ṣe é (run): iris = load_iris()", "Tẹ iris.data.shape, iris.feature_names àti iris.target_names jáde.", "Tẹ ìlà mẹ́ta àkọ́kọ́ jáde: print(iris.data[:3], iris.target[:3])"],
          words: [["scikit-learn", "library Python ọ̀fẹ́ fún machine learning, tí a ń import gẹ́gẹ́ bí sklearn."], ["Dataset iris", "dataset àṣeṣe olókìkí tí ó ní òdòdó 150 ní irú mẹ́ta."], ["shape", "iye ìlà àti ọ̀wọ̀n tí ó wà nínú data."], ["X àti y", "orúkọ tí a sábà ń lò: X fún àwọn feature, y fún àwọn label."]],
          slides: [
            { title: "scikit-learn", bullets: ["Library ML ọ̀fẹ́ fún Python", "Ó ti wà nínú Google Colab tẹ́lẹ̀", "Ó wá pẹ̀lú àwọn dataset àṣeṣe"] },
            { title: "Dataset iris", bullets: ["Òdòdó 150, feature 4 fún ọ̀kọ̀ọ̀kan", "Label: ọ̀kan nínú irú 3", "iris.data àti iris.target"] },
            { title: "Wò ó kí o tó kọ́ model", bullets: ["iris.data.shape ń fún ọ ní (150, 4)", "feature_names àti target_names", "Tẹ ìlà díẹ̀ jáde"] }
          ],
          sources: [SKLEARN, COLAB],
          tryIt: "Ṣí dataset iris nínú Colab. Tẹ shape, orúkọ feature mẹ́rin, orúkọ irú mẹ́ta, àti ìlà márùn-ún àkọ́kọ́ pẹ̀lú label wọn jáde. Kọ nọ́mbà tí ó dúró fún irú kọ̀ọ̀kan sílẹ̀.",
          youCanNow: "ṣí dataset kan nínú Colab, kí o sì ṣàpèjúwe àwọn feature, label àti ìtóbi rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Nínú dataset iris ti scikit-learn, kí ni ó wà nínú iris.target?", options: ["Ìwọ̀n àwọn òdòdó", "Label irú (species) wọn", "Orúkọ àwọn ọ̀wọ̀n", "Accuracy"], answer: 1, why: "iris.target ní àwọn label; iris.data ní àwọn feature." },
            { objective: "O4", q: "O ṣẹ̀ṣẹ̀ ṣí dataset tuntun kan. Kí ni o máa ṣe kí o tó kọ́ model?", options: ["Kọ́ ọ lójú ẹsẹ̀ láìwò ó", "Pa ìdajì àwọn ìlà rẹ́", "Fi ọwọ́ yí àwọn label padà", "Wo shape, orúkọ àwọn ọ̀wọ̀n àti àwọn ìlà àpẹẹrẹ díẹ̀"], answer: 3, why: "Máa wo data rẹ nígbà gbogbo kí o tó kọ́ model." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíkọ́ àti dídánwò decision tree",
          minutes: 6,
          goal: "Pín data, kọ́ decision tree kan, kí o sì wọn accuracy rẹ̀.",
          text: [
            "Decision tree ń kọ́ àkójọ ìbéèrè bẹ́ẹ̀ni-tàbí-bẹ́ẹ̀kọ́, bí àwòrán ìgbésẹ̀ (flowchart): \"Ṣé petal kúrú ju 2.5 cm lọ? Nígbà náà ó jẹ́ irú 0.\" Ó rọrùn láti ṣàlàyé, èyí ló mú kí ó jẹ́ model àkọ́kọ́ tó dára.",
            "Gbogbo model scikit-learn ń ṣiṣẹ́ lọ́nà kan náà: ṣẹ̀dá rẹ̀, fit rẹ̀ lórí training data, lẹ́yìn náà predict lórí data tuntun. Kóòdù náà: X, y = load_iris(return_X_y=True). X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42). model = DecisionTreeClassifier(random_state=42). model.fit(X_train, y_train).",
            "Lẹ́yìn náà dán an wò: predictions = model.predict(X_test) àti print(accuracy_score(y_test, predictions)). random_state=42 kàn ń fi ìdàpọ̀ (shuffle) náà múlẹ̀ kí o lè rí èsì kan náà ní gbogbo ìgbà tí o bá ṣe é."
          ],
          steps: ["Import: from sklearn.model_selection import train_test_split", "Import: from sklearn.tree import DecisionTreeClassifier", "Import: from sklearn.metrics import accuracy_score", "Pín in pẹ̀lú train_test_split(X, y, test_size=0.25, random_state=42).", "Ṣẹ̀dá model, pe model.fit(X_train, y_train), lẹ́yìn náà predict lórí X_test kí o sì tẹ accuracy jáde."],
          words: [["Decision tree", "model tí ó ń kọ́ flowchart ìbéèrè bẹ́ẹ̀ni-tàbí-bẹ́ẹ̀kọ́."], ["fit", "kọ́ model lórí data."], ["predict", "lo model tí a ti kọ́ láti fojú inú wo label fún data tuntun."], ["train_test_split", "irinṣẹ́ scikit-learn tí ó ń pín data sí training set àti test set."], ["random_state", "nọ́mbà tí ó ń fi ìdàpọ̀ láìròtẹ́lẹ̀ múlẹ̀ kí èsì lè máa jẹ́ ọ̀kan náà."]],
          slides: [
            { title: "Decision tree", bullets: ["Flowchart ìbéèrè bẹ́ẹ̀ni-tàbí-bẹ́ẹ̀kọ́", "Ó rọrùn láti ṣàlàyé", "Model àkọ́kọ́ tó dára"] },
            { title: "Ọ̀nà kan náà fún gbogbo model", bullets: ["Ṣẹ̀dá rẹ̀", "fit(X_train, y_train)", "predict(X_test)"] },
            { title: "Wọn ọ́n", bullets: ["accuracy_score(y_test, predictions)", "test_size=0.25 ń pa 25% mọ́ fún testing", "random_state ń mú kí èsì máa jẹ́ ọ̀kan náà"] }
          ],
          sources: [SKLEARN],
          tryIt: "Tẹ gbogbo kóòdù decision tree náà kí o sì ṣe é nínú Colab. Tẹ accuracy jáde. Lẹ́yìn náà yí test_size padà sí 0.5, tún un ṣe, kí o sì kọ sílẹ̀ bóyá accuracy gòkè tàbí ó lọ sílẹ̀.",
          youCanNow: "pín data, kọ́ decision tree pẹ̀lú fit, lò ó láti predict, kí o sì wọn accuracy.",
          quickCheck: [
            { objective: "O5", q: "Kí ló dé tí decision tree fi jẹ́ model àkọ́kọ́ tó dára?", options: ["Ó rọrùn láti ṣàlàyé, bí flowchart ìbéèrè bẹ́ẹ̀ni-tàbí-bẹ́ẹ̀kọ́", "Kì í ṣe àṣìṣe láéláé", "Kò nílò data", "Òdòdó nìkan ni ó ń ṣiṣẹ́ lé lórí"], answer: 0, why: "A lè ka àwọn ìbéèrè decision tree bí flowchart." },
            { objective: "O5", q: "O ti kọ́ model rẹ, o sì fẹ́ ṣàyẹ̀wò rẹ̀. Ìlà wo ni o máa ṣe?", options: ["model.fit(X_test, y_test)", "load_iris()", "predictions = model.predict(X_test), lẹ́yìn náà accuracy_score(y_test, predictions)", "random_state=42"], answer: 2, why: "Predict lórí test set, lẹ́yìn náà fi wé àwọn label gidi láti rí accuracy." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fífi model wé ara wọn àti mímọ ibi tí agbára wọn mọ",
          minutes: 6,
          goal: "Kọ́ model kejì, fi wé ti àkọ́kọ́, sọ àpẹẹrẹ tuntun kan tẹ́lẹ̀, kí o sì dárúkọ ibi tí agbára rẹ̀ mọ.",
          text: [
            "Kò fi bẹ́ẹ̀ sí model kan ṣoṣo tí ó pé, nítorí náà o máa gbìyànjú ju ọ̀kan lọ. k-nearest neighbors (KNN) ń sọ tẹ́lẹ̀ nípa wíwá àwọn àpẹẹrẹ k tí ó jọra jù nínú training data, kí ó sì dìbò. Ṣẹ̀dá rẹ̀ pẹ̀lú KNeighborsClassifier(n_neighbors=5) láti sklearn.neighbors; ó ń lo ìgbésẹ̀ fit àti predict kan náà.",
            "Fi àwọn model méjèèjì wé ara wọn lórí test set kan náà. Láti sọ òdòdó tuntun kan tẹ́lẹ̀, fún model ní list nínú list: model.predict([[5.1, 3.5, 1.4, 0.2]]). Ó máa dá nọ́mbà irú (species) padà; iris.target_names ń yí i padà sí orúkọ.",
            "Mọ ibi tí agbára rẹ̀ mọ. Àwọn model wọ̀nyí mọ irú mẹ́ta yìí àti ìwọ̀n mẹ́rin yìí nìkan: fi òdòdó rose hàn wọ́n, wọ́n ṣì máa pè é ní iris. Test set kékeré lè mú kí accuracy dà bí ẹni pé ó dára jù tàbí ó burú jù bí ó ti rí lóòótọ́. Pẹ̀lú data gidi nípa ènìyàn, ṣàyẹ̀wò pé model náà ń ṣiṣẹ́ lọ́nà òdodo fún gbogbo ẹgbẹ́ kí ẹnikẹ́ni tó gbẹ́kẹ̀lé e."
          ],
          steps: ["Import: from sklearn.neighbors import KNeighborsClassifier", "Ṣẹ̀dá knn = KNeighborsClassifier(n_neighbors=5) kí o sì fit rẹ̀ lórí training data kan náà.", "Tẹ accuracy méjèèjì jáde.", "Fi model tó dára jù sọ òdòdó tuntun kan tẹ́lẹ̀: model.predict([[5.1, 3.5, 1.4, 0.2]])", "Kọ model tí o máa yàn àti ibi kan tí agbára rẹ̀ mọ."],
          words: [["k-nearest neighbors (KNN)", "model tí ó ń sọ tẹ́lẹ̀ nípa ìbò àwọn àpẹẹrẹ training tí ó jọra jù."], ["n_neighbors", "iye àpẹẹrẹ tí ó jọra tí KNN ń wò (k náà)."], ["Ibi tí agbára mọ (limit)", "ọ̀ràn tí model kò lè ṣe dáadáa."], ["Ìdájọ́ òdodo (fairness)", "model tí ó ń ṣiṣẹ́ dáadáa bákan náà fún gbogbo ẹgbẹ́ ènìyàn tí ó kàn."]],
          slides: [
            { title: "Gbìyànjú ju model kan lọ", bullets: ["KNN: ìbò àwọn àpẹẹrẹ k tí ó jọra jù", "KNeighborsClassifier(n_neighbors=5)", "Ìgbésẹ̀ fit àti predict kan náà"] },
            { title: "Fi wé ara wọn kí o sì sọ tẹ́lẹ̀", bullets: ["Test set kan náà fún model méjèèjì", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "target_names ń yí nọ́mbà padà sí orúkọ"] },
            { title: "Mọ ibi tí agbára rẹ̀ mọ", bullets: ["Ohun tí a fi kọ́ ọ nìkan ni ó mọ̀", "Test set kékeré lè ṣini lọ́nà", "Pẹ̀lú data ènìyàn, ṣàyẹ̀wò fairness"] }
          ],
          sources: [SKLEARN],
          tryIt: "Iṣẹ́ ìkẹyìn: nínú notebook kan, kọ́ decision tree àti model KNN lórí ìpín kan náà, tẹ accuracy méjèèjì jáde, fi model tó dára jù sọ irú òdòdó [6.0, 2.9, 4.5, 1.5] tẹ́lẹ̀ kí o sì tẹ orúkọ rẹ̀ jáde, lẹ́yìn náà kọ gbólóhùn méjì nípa model tí o yàn àti ibi kan tí agbára rẹ̀ mọ.",
          youCanNow: "kọ́ model méjì, dán wọn wò, fi wọ́n wé ara wọn, sọ nǹkan tẹ́lẹ̀, kí o sì ṣàlàyé ibi tí agbára model mọ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni n_neighbors=5 túmọ̀ sí nínú model KNN?", options: ["Ó ń kọ́ ọ lẹ́ẹ̀marùn-ún", "Ó ń wo àwọn àpẹẹrẹ training 5 tí ó jọra jù, ó sì ń dìbò", "Ó ń pa ìdá 5 nínú ọgọ́rùn-ún mọ́ fún testing", "Ó ń sọ òdòdó 5 tẹ́lẹ̀ lẹ́ẹ̀kan náà"], answer: 1, why: "KNN ń sọ tẹ́lẹ̀ nípa ìbò àwọn àpẹẹrẹ k tí ó jọra jù." },
            { objective: "O6", q: "Model rẹ sọ irú 0 fún òdòdó tuntun kan. Báwo ni o ṣe máa yí nọ́mbà yẹn padà sí orúkọ?", options: ["Fojú inú wo orúkọ náà", "Tún model kọ́", "Yí test size padà", "Wá a nínú iris.target_names"], answer: 3, why: "iris.target_names ń yí nọ́mbà irú padà sí orúkọ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ́ model àkọ́kọ́ rẹ nínú Colab",
        questions: [
          { objective: "O4", q: "Kí ni iris.data.shape (150, 4) ń sọ fún ọ?", options: ["Irú 150 àti òdòdó 4", "Model náà ní accuracy 150%", "Ìlà 4 àti ọ̀wọ̀n 150", "Ìlà 150 àti ọ̀wọ̀n feature 4"], answer: 3, why: "Shape ń kọ́kọ́ sọ iye ìlà, lẹ́yìn náà iye ọ̀wọ̀n." },
          { objective: "O5", q: "Kí ni ìtòlẹ́sẹẹsẹ ìgbésẹ̀ tó tọ̀nà fún model scikit-learn?", options: ["Ṣẹ̀dá rẹ̀, fit rẹ̀ lórí training data, lẹ́yìn náà predict", "predict, lẹ́yìn náà fit, lẹ́yìn náà ṣẹ̀dá", "fit lórí test set, lẹ́yìn náà predict lórí training data", "predict nìkan"], answer: 0, why: "A máa ń ṣẹ̀dá gbogbo model, fit rẹ̀, lẹ́yìn náà lò ó láti predict." },
          { objective: "O5", q: "Kí ni test_size=0.25 túmọ̀ sí nínú train_test_split?", options: ["Lo ìlà 25", "Kọ́ ọ fún ìṣẹ́jú 25", "Pa 25% àwọn ìlà mọ́ fún testing", "Accuracy gbọ́dọ̀ jẹ́ 25%"], answer: 2, why: "test_size ń pinnu ìdá àwọn ìlà tí a fi pamọ́." },
          { objective: "O6", q: "Báwo ni k-nearest neighbors ṣe ń sọ nǹkan tẹ́lẹ̀?", options: ["Ó ń béèrè lọ́wọ́ ènìyàn", "Ó ń ju owó ẹyọ", "Ó ń fi ọwọ́ kọ òfin", "Ó ń dìbò láàárín àwọn àpẹẹrẹ training tí ó jọra jù"], answer: 3, why: "KNN ń lo àwọn àpẹẹrẹ k tí ó súnmọ́ jù." },
          { objective: "O6", q: "A fún model iris rẹ ní ìwọ̀n òdòdó rose kan. Kí ló máa ṣẹlẹ̀?", options: ["Ó máa sọ pé \"rose\"", "Ó máa kọ̀", "Ó ṣì máa dárúkọ ọ̀kan nínú irú iris mẹ́ta", "Ó máa kọ́ nípa rose fúnra rẹ̀"], answer: 2, why: "Model mọ àwọn label tí a fi kọ́ ọ nìkan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí Machine Learning (Ẹ̀kọ́ Ẹ̀rọ)",
    questions: [
      { objective: "O1", q: "Machine learning túmọ̀ sí:", options: ["Ènìyàn ló ń kọ gbogbo òfin", "Kọ̀mpútà ń rí pattern láti inú àwọn àpẹẹrẹ", "Rọ́bọ́ọ̀tì tí ó ń rìn", "Íńtánẹ́ẹ̀tì tí ó yára jù"], answer: 1, why: "ML ń kẹ́kọ̀ọ́ láti inú data." },
      { objective: "O1", q: "Èwo ni lílo machine learning ojoojúmọ́?", options: ["Ohun tí ń dí spam ímeèlì lọ́nà", "Ìyípadà iná (switch)", "Máàpù orí ìwé", "Ẹ̀rọ ìṣirò tí ó ń ṣírò 2 + 2"], answer: 0, why: "Ohun tí ń dí spam lọ́nà ń kẹ́kọ̀ọ́ láti inú ọ̀pọ̀ ímeèlì tí a ti sàmì sí." },
      { objective: "O1", q: "Pípinnu bóyá fọ́tò kan fi ológbò tàbí ajá hàn jẹ́:", options: ["Regression", "Overfitting", "Classification", "Feature kan"], answer: 2, why: "Yíyan ẹgbẹ́ ni classification." },
      { objective: "O1", q: "Sísọ tẹ́lẹ̀ ìṣẹ́jú mélòó kí bọ́ọ̀sì tó dé jẹ́:", options: ["Regression", "Classification", "Àkójọ label", "Testing"], answer: 0, why: "Sísọ nọ́mbà tẹ́lẹ̀ ni regression." },
      { objective: "O1", q: "Supervised learning ń lo:", options: ["Kò sí data", "Àwòrán nìkan", "Olùkọ́ nínú yàrá nìkan", "Àwọn àpẹẹrẹ pẹ̀lú ìdáhùn tó tọ̀nà"], answer: 3, why: "Supervised túmọ̀ sí pé àwọn àpẹẹrẹ ní label." },
      { objective: "O2", q: "Nínú dataset, ìlà kọ̀ọ̀kan sábà jẹ́:", options: ["Feature kan", "Àpẹẹrẹ kan", "Gbogbo model", "Máàkì ìdánwò"], answer: 1, why: "Ìlà jẹ́ àpẹẹrẹ; ọ̀wọ̀n jẹ́ feature tàbí label." },
      { objective: "O2", q: "Láti sọ tẹ́lẹ̀ bóyá tíkẹ́ẹ̀tì eré kan máa tán, èwo ni feature tó bọ́gbọ́n mu?", options: ["Àwọ̀ ojú-òpó wẹ́ẹ̀bù tíkẹ́ẹ̀tì", "Ọjọ́ wo nínú ọ̀sẹ̀ àti ẹgbẹ́ alátakò", "Accuracy model náà", "Label náà"], answer: 1, why: "Feature gbọ́dọ̀ máa nípa gidi lórí ìdáhùn." },
      { objective: "O2", q: "Data bọ́ọ̀sì rẹ ní ìrìn-àjò ọjọ́ iṣẹ́ nìkan. Kí ni ewu rẹ̀?", options: ["Kò sí", "Ó máa kọ́ ọ yára jù", "Accuracy máa jẹ́ 100%", "Model náà kò ní dára ní sísọ òpin ọ̀sẹ̀ tẹ́lẹ̀"], answer: 3, why: "Irú àpẹẹrẹ tí kò sí níbẹ̀ ń mú kí model ṣìnà fún wọn." },
      { objective: "O3", q: "Overfitting ni nígbà tí model:", options: ["Há training data sórí tí ó sì kùnà lórí data tuntun", "Kéré jù láti ṣí", "Ní feature tí ó kéré jù", "Tán ààyè ìrántí (memory)"], answer: 0, why: "Model tí ó ní overfitting kò lè ṣiṣẹ́ dáadáa lórí ohun tuntun." },
      { objective: "O3", q: "Data wo ni o yẹ kí o fi wọn accuracy?", options: ["Training set", "Data èyíkéyìí tí o bá fẹ́", "Test set tí model kò rí rí", "Ìlà kan ṣoṣo"], answer: 2, why: "Data tí a kò rí rí nìkan ló ń fi bí ó ṣe ń ṣiṣẹ́ gidi hàn." },
      { objective: "O3", q: "Model kan gba 45 nínú ìlà test 50 tọ̀nà. Accuracy jẹ́:", options: ["45%", "50%", "90%", "95%"], answer: 2, why: "45 pín sí 50 jẹ́ 0.9." },
      { objective: "O4", q: "scikit-learn jẹ́:", options: ["App tí a ń sanwó fún", "Irú dataset kan", "Library Python ọ̀fẹ́ fún machine learning", "Spreadsheet kan"], answer: 2, why: "scikit-learn (sklearn) jẹ́ ọ̀fẹ́, kóòdù rẹ̀ sì ṣí sílẹ̀ fún gbogbo ènìyàn (open source)." },
      { objective: "O4", q: "Nínú dataset iris, irú (species) ni:", options: ["Feature", "Label", "Shape", "Model"], answer: 1, why: "Irú ni ohun tí a ń sọ tẹ́lẹ̀, nítorí náà òun ni label." },
      { objective: "O5", q: "Ìlà wo ló ń kọ́ model?", options: ["model.fit(X_train, y_train)", "model.predict(X_test)", "print(model)", "load_iris()"], answer: 0, why: "fit ló ń kọ́ model." },
      { objective: "O5", q: "Ìlà wo ló ń fún ọ ní àsọtẹ́lẹ̀ fún test set?", options: ["model.fit(X_test)", "accuracy_score(X_test)", "model.predict(X_test)", "train_test_split(model)"], answer: 2, why: "predict ń lo model tí a ti kọ́ lórí data tuntun." },
      { objective: "O5", q: "Kí ló dé tí a fi ń ṣètò random_state=42?", options: ["Láti mú kí èsì jẹ́ ọ̀kan náà ní gbogbo ìgbà", "Láti mú kí model dára sí i ní 42%", "Láti lo ìlà 42", "Ó pọndandan kí Python tó ṣiṣẹ́"], answer: 0, why: "Ó ń fi ìdàpọ̀ láìròtẹ́lẹ̀ múlẹ̀." },
      { objective: "O5", q: "Decision tree dà bí:", options: ["Ìbò àwọn aládùúgbò", "Àpapọ̀ spreadsheet", "Àmọ̀ràn láìròtẹ́lẹ̀", "Flowchart ìbéèrè bẹ́ẹ̀ni-tàbí-bẹ́ẹ̀kọ́"], answer: 3, why: "Tree ń pín data pẹ̀lú àwọn ìbéèrè." },
      { objective: "O6", q: "Láti sọ òdòdó tuntun kan tẹ́lẹ̀, o máa kọ:", options: ["model.predict(5.1, 3.5, 1.4, 0.2)", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "model.fit([5.1])", "predict.model(5.1)"], answer: 1, why: "Model ń retí list àwọn ìlà, nítorí náà ìlà kan máa wà nínú list míì." },
      { objective: "O6", q: "Model méjì gba 93% àti 97% lórí test set kan náà. Ìgbésẹ̀ tó dára tó kàn ni:", options: ["Pa méjèèjì rẹ́", "Yan 97%, kí o sì tún ronú nípa ibi tí agbára rẹ̀ mọ àti ohun tí àṣìṣe ń ná", "Tún un kọ́ lórí test set", "Yan èyí tó lọ́ra jù"], answer: 1, why: "Fi wé ara wọn lọ́nà òdodo, lẹ́yìn náà wọn ibi tí agbára mọ àti ohun tí àṣìṣe ń ná." },
      { objective: "O6", q: "Kí o tó lo model tí ó ń ṣe ìpinnu nípa ènìyàn, o yẹ kí o:", options: ["Fo testing", "Fi bí ó ṣe ń ṣiṣẹ́ pamọ́", "Lo training data nìkan", "Ṣàyẹ̀wò pé ó ń ṣiṣẹ́ lọ́nà òdodo fún gbogbo ẹgbẹ́"], answer: 3, why: "Àyẹ̀wò fairness ń dáàbò bo àwọn ènìyàn tí ó kàn." }
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
      8,
      10,
      11,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ṣíṣí àti pínpín data",
        objective: "O5",
        notYet: "Data náà kò ṣí, tàbí a dán model wò lórí training data.",
        meets: "A ṣí data iris, a sì pín in sí training set àti test set pẹ̀lú train_test_split.",
        exceeds: "Ó tún tẹ shape set kọ̀ọ̀kan jáde, ó sì ṣàlàyé ìpín náà."
      },
      {
        name: "Model méjì tí a kọ́ tí a sì dán wò",
        objective: "O5",
        notYet: "Model kan ṣoṣo ni a kọ́, tàbí accuracy kò sí.",
        meets: "A kọ́ decision tree àti model KNN, a sì tẹ test accuracy ọ̀kọ̀ọ̀kan jáde.",
        exceeds: "Ó tún gbìyànjú iye n_neighbors kejì, ó sì fi wé ara wọn."
      },
      {
        name: "Àsọtẹ́lẹ̀ fún òdòdó tuntun",
        objective: "O6",
        notYet: "Kò sí àsọtẹ́lẹ̀, tàbí ohun tí a fi sínú rẹ̀ kò ní shape tó tọ̀nà.",
        meets: "Model tó dára jù sọ òdòdó tuntun kan tẹ́lẹ̀, orúkọ irú rẹ̀ sì jáde.",
        exceeds: "Ó tún ṣàlàyé ìdí tí àsọtẹ́lẹ̀ náà fi bọ́gbọ́n mu láti inú àwọn ìwọ̀n náà."
      },
      {
        name: "Yíyàn àti ibi tí agbára mọ",
        objective: "O6",
        notYet: "Gbólóhùn méjì náà kò sí, tàbí kò dárúkọ ibi gidi kan tí agbára rẹ̀ mọ.",
        meets: "Gbólóhùn méjì: model wo àti ìdí, àti ibi gidi kan tí agbára rẹ̀ mọ.",
        exceeds: "Ó tún mẹ́nu ba ohun tí àṣìṣe ń ná tàbí fairness fún data nípa ènìyàn."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric iṣẹ́ ìkẹyìn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn kọ́ model lórí dataset míì láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí ẹ̀kọ́ míì, bí Deep Learning tàbí Data Science fún Àwọn Olùbẹ̀rẹ̀",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi notebook náà kún portfolio, iṣẹ́ kíláàsì tàbí ìwé ìbéèrè iṣẹ́ wọn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí laptop tí ó ní browser wẹ́ẹ̀bù",
      "Àkáǹtì Google ọ̀fẹ́ láti lo Google Colab (scikit-learn ti wà nínú rẹ̀ tẹ́lẹ̀)",
      "Ìwé àti gègé láti ya àwòrán feature àti label fún iṣẹ́ dataset",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, pẹ̀lú àkókò àṣeṣe"
    ],
    facilitatorNotes: [
      "Ṣàyẹ̀wò pé àwọn akẹ́kọ̀ọ́ lè ṣí Google Colab kí kíláàsì tó bẹ̀rẹ̀; àwọn àkáǹtì ilé-ẹ̀kọ́ kan máa ń dí i lọ́nà.",
      "Ẹ ṣe iṣẹ́ dataset bọ́ọ̀sì tí ó pẹ́ tàbí iṣẹ́ àṣetiléwá lórí ìwé pọ̀ gẹ́gẹ́ bí ẹgbẹ́ kí ẹ tó kọ kóòdù kankan.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ fi accuracy wọn wé ara wọn lórí pátákó; iye random_state tó yàtọ̀ ń fún wa ní èsì tó yàtọ̀, èyí sì jẹ́ ohun tó dára láti jíròrò.",
      "Sọ̀rọ̀ nípa fairness ní gbangba: béèrè kí ni ó lè ṣìnà tí model bí èyí bá ń ṣe ìpinnu nípa ènìyàn.",
      "Gba àwọn akẹ́kọ̀ọ́ níyànjú láti ṣiṣẹ́ ní méjì-méjì, kí wọ́n sì ṣàlàyé ìlà kóòdù kọ̀ọ̀kan fún ara wọn kí wọ́n tó ṣe é."
    ]
  }
};
