"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-mobile-money-safety.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const SAF_FRAUD = { name: "The Star, Kenya (27 March 2025): àwọn jìbìtì tó wọ́pọ̀ sí àwọn tó ń lo M-Pesa; ròyìn sí 333, Zuri tàbí app; Safaricom kì í béèrè PIN rẹ láéláé", url: "https://www.the-star.co.ke/news/infographics/2025-03-27-common-fraud-schemes-targeting-m-pesa-users" };
const SAF_REV = { name: "Citizen Digital, Kenya: bí a ṣe ń dá owó M-Pesa padà (fi SMS ìfìdímúlẹ̀ ránṣẹ́ sí 456; till tàbí Paybill tí kò tọ́: pe 100)", url: "https://citizen.digital/news/how-to-easily-reverse-money-on-m-pesa-n295204" };
const MTN_GH = { name: "Ghana News Agency (October 2026): MTN kìlọ̀ fún àwọn oníbàárà pé kí wọ́n má ṣe pín PIN MoMo wọn", url: "https://gna.org.gh/2026/10/mtn-cautions-customers-not-to-share-momo-pin/" };
const CBK = { name: "Central Bank of Kenya, Báńkì Àpapọ̀ Kenya (ó ń ṣàkóso owó orí fóònù, ó sì ń ṣe àkọsílẹ̀ àwọn ilé-iṣẹ́ ìsanwó tó ní ìwé àṣẹ)", url: "https://www.centralbank.go.ke" };
const CBN_CP = { name: "Central Bank of Nigeria, Báńkì Àpapọ̀ Nàìjíríà: ààbò oníbàárà", url: "https://www.cbn.gov.ng/supervision/cpd.html" };
const BOG = { name: "Bank of Ghana, Báńkì Àpapọ̀ Ghana: ọ̀nà ẹ̀sùn àti àkọsílẹ̀ àwọn ilé-iṣẹ́ tó ní ìwé àṣẹ", url: "https://www.bog.gov.gh" };
const BCEAO_EME = { name: "BCEAO, Báńkì Àpapọ̀ àwọn Orílẹ̀-èdè Ìwọ̀-oòrùn Áfíríkà: àwọn ilé-iṣẹ́ owó orí ẹ̀rọ (àwọn orílẹ̀-èdè XOF bí Senegal àti Côte d'Ivoire)", url: "https://www.bceao.int/fr/content/monnaie-electronique" };

module.exports = {
  id: "afr-mobile-money-safety-yo",
  lang: "yo",
  translationOf: "afr-mobile-money-safety",
  category: "Africa: Life and Work",
  name: "Lílo Owó Orí Fóònù Láìléwu (M-Pesa, MTN MoMo, Orange Money, Wave)",
  skills: "Dídáàbò bo PIN àti fóònù rẹ, Ṣíṣàyẹ̀wò orúkọ kí o tó fi owó ránṣẹ́, Lílo aṣojú (agent) àti owó ìṣẹ́ láìléwu, Dídá jìbìtì owó orí fóònù mọ̀, Gbígbé ìgbésẹ̀ kíákíá lẹ́yìn àṣìṣe tàbí jìbìtì, Kíkọ ètò ààbò tìrẹ",
  outcome: "fi owó ránṣẹ́, gba owó, kí o sì sanwó pẹ̀lú owó orí fóònù láìléwu: dáàbò bo PIN rẹ, ṣàyẹ̀wò orúkọ kí o tó fìdí rẹ̀ múlẹ̀, dá àwọn jìbìtì tó wọ́pọ̀ mọ̀, gbé ìgbésẹ̀ kíákíá lẹ́yìn tí owó bá lọ sí ibi tí kò tọ́ tàbí lẹ́yìn jìbìtì, kí o sì ní ètò ààbò ojú-ewé kan fún ìwọ àti ẹbí rẹ.",
  about: [
    "Owó orí fóònù (mobile money) ni ọ̀nà tí ọ̀pọ̀ mílíọ̀nù ènìyàn káàkiri Áfíríkà fi ń fi owó ránṣẹ́, fi owó pamọ́, tí wọ́n sì ń sanwó lójoojúmọ́: M-Pesa ní Kenya, MTN MoMo ní Ghana àti Nàìjíríà, Orange Money ní Côte d'Ivoire àti Cameroon, Wave ní Senegal, àti àpò owó orí fóònù ní Egypt àti Morocco. Ó yára, ó sì wúlò, àwọn onjìbìtì náà sì mọ̀ bẹ́ẹ̀.",
    "Ẹ̀kọ́ yìí wà fún àwọn oníṣòwò, òbí, akẹ́kọ̀ọ́, òṣìṣẹ́ àti ẹnikẹ́ni tó ń lo fóònù lásán tàbí smartphone fún owó. O máa kọ́ bí àpò owó rẹ, PIN rẹ àti aṣojú ṣe ń ṣiṣẹ́, bí o ṣe lè ṣàyẹ̀wò gbogbo ìsanwó kí o tó fìdí rẹ̀ múlẹ̀, àwọn ẹ̀tàn tí àwọn onjìbìtì ń lò, àti ohun tí o máa ṣe gan-an tí owó bá lọ sọ́dọ̀ ẹni tí kò tọ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Kà á, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" lórí fóònù tìrẹ, láìtẹ PIN rẹ gidi fún àṣeṣe láéláé. Ìdánwò kúkúrú wà lẹ́yìn ẹ̀kọ́ àti orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Owó ìṣẹ́, òdiwọ̀n àti nọ́mbà ìrànlọ́wọ́ máa ń yí padà, nítorí náà o máa kọ́ bí o ṣe lè kà wọ́n lórí ọ̀nà ìjọba (official) ilé-iṣẹ́ rẹ fúnra rẹ̀."
  ],
  finalTask: "Kọ ètò ààbò owó orí fóònù ojú-ewé kan fún ara rẹ tàbí ẹbí rẹ: àwọn òfin PIN àti títi fóònù rẹ, bí o ṣe ń ṣàyẹ̀wò orúkọ kí o tó fi owó ránṣẹ́, àwọn ọ̀nà ìrànlọ́wọ́ àti ìròyìn jìbìtì ti ilé-iṣẹ́ rẹ (tí o dà kọ láti ojú-òpó wẹ́ẹ̀bù, app tàbí páálí SIM rẹ̀), àwọn àmì ìkìlọ̀ jìbìtì mẹ́fà, ohun tí o máa ṣe ní wákàtí àkọ́kọ́ lẹ́yìn àṣìṣe tàbí jìbìtì, àti àyẹ̀wò àkọsílẹ̀ owó rẹ lóṣooṣù.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà àti ọ̀dọ́ káàkiri Áfíríkà, ní ìlú àti abúlé: àwọn oníṣòwò ọjà, àwọn ọlọ́kadà àti boda boda, òbí, akẹ́kọ̀ọ́, òṣìṣẹ́ àti àwọn tó ní òwò kékeré tí wọ́n ń fi owó orí fóònù ránṣẹ́, gbà á, tí wọ́n sì ń sanwó pẹ̀lú rẹ̀. Àpẹẹrẹ láti Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire, Cameroon, Egypt àti Morocco.",
    startingPoint: "Ọ̀pọ̀ jù lọ ti ń fi owó ránṣẹ́, wọ́n sì ń gbà á pẹ̀lú àkójọ USSD (*xxx#) tàbí app. Ọ̀pọ̀ kò tíì ka tábìlì owó ìṣẹ́ rí, wọn kò mọ bí a ṣe ń dá owó tí ó lọ sí ibi tí kò tọ́ padà, wọ́n ń pín fóònù tàbí PIN pẹ̀lú ẹbí, tàbí ìpè tàbí SMS jìbìtì ti dé bá wọn rí.",
    gap: "Àwọn ènìyàn ń pàdánù owó sí ọ̀rọ̀ ìdápadà owó ayédèrú, ìbéèrè PIN àti kóòdù, aṣojú ayédèrú àti ẹ̀tàn \"nọ́mbà tí kò tọ́\", ọ̀pọ̀ kò sì mọ àwọn ìgbésẹ̀ ìjọba tó yára lẹ́yìn tí owó bá lọ sí ibi tí kò tọ́. Àwọn akẹ́kọ̀ọ́ nílò àṣà àti ètò tí a kọ sílẹ̀ tí ó ń dáàbò bo owó wọn àti ti ẹbí wọn.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a túmọ̀ rẹ̀ sí Faransé àti Lárúbáwá",
      "Ẹ̀rọ: ọ̀pọ̀ ń lo fóònù lásán pẹ̀lú àkójọ USSD; dátà wọ́n",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá iṣẹ́ àti ọjọ́ ọjà mu",
      "Owó ìṣẹ́, òdiwọ̀n àti nọ́mbà ìrànlọ́wọ́ yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, wọ́n sì ń yí padà: máa kà wọ́n lórí ọ̀nà ìjọba ilé-iṣẹ́ náà nígbà gbogbo",
      "Má ṣe tẹ PIN gidi, ọ̀rọ̀ aṣínà tàbí kóòdù ìgbà kan nínú iṣẹ́ àṣeṣe kankan láéláé"
    ],
    prerequisites: "Àkáǹtì owó orí fóònù, tàbí fóònù ẹnìkan nínú ẹbí láti wo àkójọ rẹ̀ papọ̀ (láìsí PIN)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú fóònù tìrẹ àti àkáǹtì owó orí fóònù rẹ", action: "ṣe PIN tí ó ṣòro láti méfò, ti fóònù rẹ pa, kí o sì pa PIN náà mọ́ fún ara rẹ nìkan", standard: "láìpín PIN náà pẹ̀lú ẹnikẹ́ni, kódà ẹbí tàbí ẹni tó sọ pé òṣìṣẹ́ ilé-iṣẹ́ ni òun" },
    { id: "O2", condition: "Nígbà tí o bá ń fi owó ránṣẹ́, sanwó fún oníṣòwò tàbí lo aṣojú", action: "ṣàyẹ̀wò orúkọ ẹni tí ó ń gbà á, nọ́mbà àti iye owó lórí ojú-iboju ìfìdímúlẹ̀ kí o tó tẹ PIN rẹ, kí o sì pa ọ̀rọ̀ ìfìdímúlẹ̀ mọ́", standard: "nígbà gbogbo, kí o sì dúró tí nǹkan kan kò bá bá ara wọn mu" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìpè tàbí ọ̀rọ̀ mẹ́fà nípa owó orí fóònù", action: "dá àwọn tí ó jẹ́ jìbìtì mọ̀, kí o sì dárúkọ àmì ìkìlọ̀ nínú ọ̀kọ̀ọ̀kan", standard: "kí o sì gba ó kéré tán 5 nínú 6 tọ̀nà" },
    { id: "O4", condition: "Lẹ́yìn tí owó bá lọ sí nọ́mbà tí kò tọ́ tàbí tí o bá fura sí jìbìtì", action: "ròyìn rẹ̀ nípasẹ̀ àwọn ọ̀nà ìjọba ilé-iṣẹ́ rẹ, kí o sì tẹ̀lé àwọn ìgbésẹ̀ ìdápadà owó", standard: "ní ọjọ́ kan náà, kí o pa ọ̀rọ̀ ìfìdímúlẹ̀ àkọ́kọ́ mọ́, láìlo nọ́mbà kankan tí àjèjì fún ọ" },
    { id: "O5", condition: "Pẹ̀lú ohun tí o kọ́ àti ojú-òpó wẹ́ẹ̀bù ìjọba tàbí páálí SIM ilé-iṣẹ́ rẹ", action: "kọ ètò ààbò owó orí fóònù ojú-ewé kan fún ìwọ tàbí ẹbí rẹ", standard: "tí ó ní òfin PIN, àyẹ̀wò orúkọ, ọ̀nà ìrànlọ́wọ́ ìjọba, àmì jìbìtì, ìgbésẹ̀ wákàtí àkọ́kọ́ àti àyẹ̀wò àkọsílẹ̀ owó lóṣooṣù" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí owó orí fóònù ṣe ń ṣiṣẹ́, àti lílò ó láìléwu",
      lessons: [
        {
          title: "Àpò owó rẹ, PIN rẹ àti fóònù rẹ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ṣe PIN tó lágbára, ti fóònù rẹ pa, kí o sì dárúkọ àwọn ènìyàn tí kò gbọdọ̀ gba PIN rẹ láéláé.",
          text: [
            "Àpò owó orí fóònù (wallet) jẹ́ àkáǹtì tí ó so mọ́ SIM káàdì rẹ. O fi owó sínú rẹ̀ lọ́dọ̀ aṣojú (agent), o fi ránṣẹ́, o fi sanwó, o sì tún gbà á jáde. PIN rẹ (nọ́mbà àṣírí) ni kọ́kọ́rọ́ àpò owó náà. Ẹnikẹ́ni tí ó bá ní fóònù rẹ àti PIN rẹ lè kó gbogbo owó inú rẹ̀ lọ.",
            "Yan PIN tí ó ṣòro láti méfò: kì í ṣe ọdún ìbí rẹ, kì í ṣe 1234 tàbí 0000, kì í ṣe díjíìtì ìkẹyìn nọ́mbà fóònù rẹ. Bo bọ́tìnnì fóònù nígbà tí o bá ń tẹ ẹ́ lọ́dọ̀ aṣojú tàbí nínú ọkọ̀ tàbí ọjà tí èrò pọ̀ sí. Ti fóònù fúnra rẹ̀ pa pẹ̀lú PIN, àwòrán ìlà (pattern) tàbí ìka ọwọ́, tí fóònù rẹ bá sì gbà á, ṣe SIM PIN pẹ̀lú, kí olè má lè fi SIM rẹ sínú fóònù míì.",
            "Má ṣe pín PIN owó orí fóònù rẹ tàbí kóòdù ìgbà kan (one-time code) pẹ̀lú ẹnikẹ́ni: kì í ṣe ọ̀rẹ́, kì í ṣe ọmọ, kì í ṣe aṣojú, kì í sì ṣe ẹni tí ó pè ọ́ tí ó sọ pé láti Safaricom, MTN, Orange tàbí Wave ni òun ti ń pè. Àwọn ilé-iṣẹ́ náà sọ ọ́ kedere pé òṣìṣẹ́ wọn kì í béèrè PIN rẹ láéláé. Tí ẹnìkan bá béèrè, jìbìtì ni.",
            "Tí fóònù rẹ bá sọnù tàbí tí wọ́n jí i, tàbí tí lááìnì rẹ bá dúró lójijì, pe ilé-iṣẹ́ rẹ lẹ́sẹ̀kẹsẹ̀ láti fóònù míì kí wọ́n ti SIM àti àpò owó náà pa. Lááìnì tí ó kú láìnídìí lè jẹ́ SIM swap, níbi tí ọ̀daràn kan ti gbé nọ́mbà rẹ lọ sí SIM tirẹ̀."
          ],
          steps: ["Yí PIN rẹ padà láti inú àkójọ tí ó bá rọrùn láti méfò (ọdún ìbí, 1234, nọ́mbà kan náà léraléra).", "Ṣe títì ojú-iboju (screen lock) sórí fóònù rẹ.", "Tan SIM PIN tí fóònù rẹ bá ní i.", "Bo bọ́tìnnì fóònù nígbà tí o bá ń tẹ PIN rẹ.", "Kọ nọ́mbà ìrànlọ́wọ́ ìjọba ilé-iṣẹ́ rẹ sórí ìwé, kì í ṣe láti inú ọ̀rọ̀ tí àjèjì fi ránṣẹ́.", "Tí fóònù bá sọnù tàbí tí lááìnì bá kú, pe ilé-iṣẹ́ náà láti fóònù míì kí wọ́n tì í pa."],
          words: [["Àpò owó (wallet)", "àkáǹtì owó orí fóònù rẹ, tí ó so mọ́ SIM káàdì rẹ."], ["PIN", "personal identification number (nọ́mbà ìdánimọ̀ àdáni): nọ́mbà àṣírí tí ó ń jẹ́ kí o lo àpò owó rẹ."], ["SIM swap", "nígbà tí a bá gbé nọ́mbà fóònù rẹ lọ sí SIM káàdì tuntun; àwọn ọ̀daràn ń gbìyànjú èyí láti gba àpò owó rẹ."]],
          slides: [
            { title: "PIN rẹ ni kọ́kọ́rọ́", bullets: ["Fóònù + PIN = ọ̀nà sí gbogbo owó rẹ", "Kì í ṣe ọdún ìbí rẹ, 1234 tàbí 0000", "Bo bọ́tìnnì fóònù nígbà tí o bá ń tẹ ẹ́"] },
            { title: "Ti fóònù àti SIM pa", bullets: ["Títì ojú-iboju: PIN, pattern tàbí ìka ọwọ́", "SIM PIN tí fóònù rẹ bá ní i", "Olè kò ní lè lo SIM rẹ níbòmíì"] },
            { title: "Má ṣe pín in láéláé", bullets: ["Kì í ṣe ọ̀rẹ́, ọmọ, aṣojú tàbí ẹni tó pè ọ́", "Òṣìṣẹ́ gidi kì í béèrè PIN rẹ láéláé", "Ẹnikẹ́ni tó bá béèrè jẹ́ onjìbìtì"] },
            { title: "Fóònù sọnù tàbí lááìnì kú?", bullets: ["Pe ilé-iṣẹ́ náà láti fóònù míì lẹ́sẹ̀kẹsẹ̀", "Ti SIM àti àpò owó pa", "Lááìnì tí ó kú láìnídìí lè jẹ́ SIM swap"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Rò nípa PIN rẹ lọ́kàn rẹ (má ṣe kọ ọ́ sílẹ̀, má sì sọ fún ẹnikẹ́ni). Ṣé ọdún ìbí rẹ ni, 1234 tàbí nọ́mbà kan náà léraléra? Tí ó bá rí bẹ́ẹ̀, yí i padà láti inú àkójọ lónìí. Lẹ́yìn náà ṣàyẹ̀wò pé fóònù rẹ ní títì ojú-iboju.",
          youCanNow: "ṣe PIN tí ó ṣòro láti méfò, ti fóònù àti SIM rẹ pa, kí o sì kọ̀ fún ẹnikẹ́ni tí ó bá béèrè PIN rẹ.",
          quickCheck: [
            { objective: "O1", q: "PIN wo ló ní ààbò jù?", options: ["1990, ọdún ìbí rẹ", "1234", "Nọ́mbà tí kò ní í ṣe pẹ̀lú ọjọ́ ìbí tàbí nọ́mbà fóònù rẹ", "Díjíìtì mẹ́rin ìkẹyìn nọ́mbà fóònù rẹ"], answer: 2, why: "PIN tí kò ní í ṣe pẹ̀lú ohun tí a mọ̀ nípa rẹ ṣòro fún àwọn ẹlòmíì láti méfò." },
            { objective: "O1", q: "Ẹnìkan pè ọ́, ó sọ pé láti ilé-iṣẹ́ owó orí fóònù rẹ ni òun ti ń pè, ó sì nílò PIN rẹ láti tún àkáǹtì rẹ ṣe. Kí ni o máa ṣe?", options: ["Gé ìpè náà; òṣìṣẹ́ gidi kì í béèrè PIN rẹ láéláé", "Fún un ní PIN, lẹ́yìn náà yí i padà", "Fún un ní díjíìtì méjì àkọ́kọ́ nìkan", "Fi kóòdù tó wà lórí fóònù rẹ ránṣẹ́ sí i dípò rẹ̀"], answer: 0, why: "Àwọn ilé-iṣẹ́ kì í béèrè PIN tàbí kóòdù rẹ láéláé; ẹnikẹ́ni tó bá béèrè jẹ́ onjìbìtì." }
          ]
        },
        {
          title: "Fífi owó ránṣẹ́ àti sísanwó: ṣàyẹ̀wò orúkọ kí o tó tẹ PIN",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ṣàyẹ̀wò orúkọ, nọ́mbà àti iye owó lórí ojú-iboju ìfìdímúlẹ̀ kí o tó tẹ PIN rẹ.",
          text: [
            "A lè dá ọ̀pọ̀ àṣìṣe àti ọ̀pọ̀ jìbìtì dúró ní ibì kan: ojú-iboju ìfìdímúlẹ̀ (confirmation screen). Kí o tó tẹ PIN rẹ, fóònù rẹ máa fi ẹni tí o ń sanwó fún àti iye owó hàn. Ní Kenya, M-Pesa máa ń fi orúkọ tí ó wà lórí nọ́mbà, till tàbí Paybill hàn; àwọn ilé-iṣẹ́ míì náà máa ń fi orúkọ ènìyàn tàbí orúkọ oníṣòwò hàn.",
            "Kà á díẹ̀díẹ̀. Ṣé ẹni tàbí ṣọ́ọ̀bù tó tọ́ ni? Ṣé iye owó náà tọ́? 5,000 kì í ṣe 50,000. Nígbà tí o bá ń sanwó fún ṣọ́ọ̀bù, mú nọ́mbà till, oníṣòwò tàbí Paybill láti ara àmì tàbí rìsíìtì inú ṣọ́ọ̀bù náà, kì í ṣe láti nọ́mbà tí ẹnìkan fi ránṣẹ́ sí ọ.",
            "Tí orúkọ náà kò bá tọ́ tàbí tí ó bá jẹ́ àjèjì, fagilé e. Má ṣe tẹ PIN rẹ \"láti wo ohun tí yóò ṣẹlẹ̀\". Lẹ́yìn tí o bá sanwó, pa ọ̀rọ̀ ìfìdímúlẹ̀ (SMS) mọ́ títí tí ó fi dá ọ lójú pé ẹni náà tàbí ṣọ́ọ̀bù náà ti gba owó náà. Òun ni ẹ̀rí rẹ.",
            "Àpẹẹrẹ: Ama ní Kumasi ń san GHS 600 fún olùpèsè ọjà rẹ̀ pẹ̀lú MTN MoMo. Ojú-iboju fi orúkọ míì hàn yàtọ̀ sí ti olùpèsè náà. Ó fagilé e, ó pe olùpèsè náà lórí nọ́mbà tí ó ti ní tẹ́lẹ̀, ó sì rí i pé òun tẹ díjíìtì kan ní àṣìṣe."
          ],
          steps: ["Tẹ nọ́mbà, kóòdù oníṣòwò tàbí till.", "Tẹ iye owó kí o sì kà á lẹ́ẹ̀mejì.", "Lórí ojú-iboju ìfìdímúlẹ̀, ka orúkọ, nọ́mbà àti iye owó.", "Tí nǹkan kan kò bá bá ara wọn mu, fagilé e.", "Tí gbogbo rẹ̀ bá bá ara wọn mu, bo bọ́tìnnì fóònù kí o sì tẹ PIN rẹ.", "Pa SMS ìfìdímúlẹ̀ mọ́ bí ẹ̀rí."],
          words: [["Ojú-iboju ìfìdímúlẹ̀", "ojú-iboju tí ó ń fi ẹni tí o ń sanwó fún àti iye owó hàn, kí o tó tẹ PIN rẹ."], ["Till / kóòdù oníṣòwò / Paybill", "àwọn nọ́mbà tí ṣọ́ọ̀bù àti ilé-iṣẹ́ ń lò láti gba owó."], ["SMS ìfìdímúlẹ̀", "ọ̀rọ̀ tí ilé-iṣẹ́ rẹ fi ránṣẹ́ lẹ́yìn ìsanwó; ẹ̀rí rẹ ni."]],
          slides: [
            { title: "Dúró ní ojú-iboju ìfìdímúlẹ̀", bullets: ["Ó ń fi orúkọ, nọ́mbà àti iye owó hàn", "Kà á díẹ̀díẹ̀, kí o tó tẹ PIN", "5,000 kì í ṣe 50,000"] },
            { title: "Sísanwó fún ṣọ́ọ̀bù", bullets: ["Mú till tàbí kóòdù oníṣòwò láti ara àmì ṣọ́ọ̀bù", "Kì í ṣe láti nọ́mbà tí ẹnìkan fi ránṣẹ́ sí ọ", "Ṣàyẹ̀wò orúkọ ṣọ́ọ̀bù lórí ojú-iboju"] },
            { title: "Nǹkan kan kò tọ́? Fagilé e", bullets: ["Má ṣe tẹ PIN láti wo ohun tí yóò ṣẹlẹ̀", "Pe ẹni náà lórí nọ́mbà tí o ti ní tẹ́lẹ̀", "Lẹ́yìn náà tún gbìyànjú pẹ̀lú ìṣọ́ra"] },
            { title: "Pa ẹ̀rí rẹ mọ́", bullets: ["Pa SMS ìfìdímúlẹ̀ mọ́", "Títí tí owó náà fi dé ọ̀dọ̀ wọn láìléwu", "O nílò rẹ̀ fún ìdápadà owó èyíkéyìí"] }
          ],
          sources: [SAF_REV],
          tryIt: "Nígbà míì tí o bá ń fi owó ránṣẹ́ tàbí tí o bá ń sanwó, dúró ní ojú-iboju ìfìdímúlẹ̀ kí o sì sọ orúkọ, nọ́mbà àti iye owó sókè kí o tó tẹ PIN rẹ. Lẹ́yìn náà wá SMS ìfìdímúlẹ̀ náà, má sì pa á rẹ́.",
          youCanNow: "ṣàyẹ̀wò orúkọ, nọ́mbà àti iye owó kí o tó tẹ PIN rẹ, kí o sì pa ọ̀rọ̀ ìfìdímúlẹ̀ mọ́ bí ẹ̀rí.",
          quickCheck: [
            { objective: "O2", q: "Ojú-iboju ìfìdímúlẹ̀ fi orúkọ tí o kò mọ̀ hàn. Kí ni o máa ṣe?", options: ["Tẹ PIN; orúkọ sábà máa ń ṣàṣìṣe", "Tẹ PIN kí o sì béèrè lẹ́yìn náà", "Kọ́kọ́ fi owó kékeré ránṣẹ́", "Fagilé e kí o sì ṣàyẹ̀wò nọ́mbà náà pẹ̀lú ẹni náà"], answer: 3, why: "Orúkọ àjèjì túmọ̀ sí nọ́mbà tí kò tọ́ tàbí ẹ̀tàn; fagilé e kí o tó tẹ PIN." },
            { objective: "O2", q: "Kí ló dé tí o fi máa pa SMS ìfìdímúlẹ̀ mọ́ lẹ́yìn ìsanwó?", options: ["Òun ni ẹ̀rí rẹ tí nǹkan kan bá ṣẹlẹ̀", "Ó ń fún ọ ní máàkì ẹ̀bùn", "Òfin sọ pé kí o pa á rẹ́", "Ó ń jẹ́ kí ìsanwó tó kàn dín owó kù"], answer: 0, why: "Ọ̀rọ̀ ìfìdímúlẹ̀ ń fi ìsanwó náà hàn, a sì nílò rẹ̀ fún ìdápadà owó tàbí ẹ̀sùn." }
          ]
        },
        {
          title: "Aṣojú, owó ìṣẹ́ àti àkọsílẹ̀ rẹ",
          objectives: ["O2", "O5"],
          minutes: 5,
          goal: "Ka owó ìṣẹ́ ìdúnàádúrà kan láti inú tábìlì owó ìṣẹ́ ìjọba ilé-iṣẹ́ rẹ, kí o sì gba owó jáde lọ́dọ̀ aṣojú láìléwu.",
          text: [
            "Aṣojú (agent) jẹ́ ṣọ́ọ̀bù tí o ti ń fi owó sínú àpò owó rẹ (cash in, tàbí ìfowópamọ́) tàbí tí o ti ń gba owó jáde (withdraw). Lo aṣojú tí a forúkọ rẹ̀ sílẹ̀, tí ó ní àmì ilé-iṣẹ́ àti nọ́mbà aṣojú. Ṣe ìdúnàádúrà náà fúnra rẹ lórí fóònù tìrẹ nígbà tí o bá lè ṣe é, kí o sì ka owó náà kí o tó kúrò.",
            "Owó ìṣẹ́ dá lórí ilé-iṣẹ́, orílẹ̀-èdè, iye owó àti irú ìdúnàádúrà. Má ṣe méfò, má sì gbẹ́kẹ̀ lé owó ìṣẹ́ tí ẹnìkan sọ fún ọ. Ka tábìlì owó ìṣẹ́ ìjọba (tariff) lórí ojú-òpó wẹ́ẹ̀bù tàbí app ilé-iṣẹ́ náà, nínú ṣọ́ọ̀bù, tàbí nípa títẹ àkójọ. Ọ̀pọ̀ app tún máa ń fi owó ìṣẹ́ hàn kí o tó fìdí rẹ̀ múlẹ̀. Fífi owó ránṣẹ́ sí ẹni tó wà lórí nẹ́tíwọ̀ọ̀kì míì tàbí sí báńkì lè wọ́n jù.",
            "Aṣojú ayédèrú lè sọ pé \"fún mi ní fóònù rẹ, màá bá ọ ṣe é\", tàbí kí ó béèrè PIN rẹ. Má ṣe fi fóònù rẹ pẹ̀lú PIN lé ẹnikẹ́ni lọ́wọ́ láéláé. Aṣojú gidi kò nílò rẹ̀.",
            "Lẹ́ẹ̀kan lóṣù, ka àkọsílẹ̀ kúkúrú (mini statement) tàbí àkọsílẹ̀ kíkún rẹ láti inú àkójọ tàbí app. Wá ìsanwó tí o kò mọ̀. Àpẹẹrẹ: Moussa, telọ̀ ní Dakar, máa ń ṣàyẹ̀wò ìtàn Wave rẹ̀ ní òpin oṣù kọ̀ọ̀kan, ó sì ń kọ àpapọ̀ owó tí ó fi ránṣẹ́ àti èyí tí ó gbà sínú ìwé kékeré. Àwọn nọ́mbà inú ẹ̀kọ́ yìí jẹ́ àpẹẹrẹ nìkan."
          ],
          steps: ["Wá tábìlì owó ìṣẹ́ ìjọba lórí ojú-òpó wẹ́ẹ̀bù, app tàbí ìwé àlẹ̀mọ́ ṣọ́ọ̀bù ilé-iṣẹ́ náà.", "Wá owó ìṣẹ́ fún iye tí o fẹ́ fi ránṣẹ́ tàbí gbà jáde.", "Lọ́dọ̀ aṣojú, ṣàyẹ̀wò àmì àti nọ́mbà aṣojú.", "Bẹ̀rẹ̀ gbígba owó jáde lórí fóònù tìrẹ; ṣàyẹ̀wò orúkọ aṣojú lórí ojú-iboju.", "Ka owó náà kí o tó kúrò.", "Ka àkọsílẹ̀ owó rẹ lẹ́ẹ̀kan lóṣù."],
          words: [["Aṣojú (agent)", "ṣọ́ọ̀bù tí a forúkọ rẹ̀ sílẹ̀ tí ó ń bá ilé-iṣẹ́ owó orí fóònù gba owó sínú àti san owó jáde."], ["Tábìlì owó ìṣẹ́ (tariff)", "tábìlì ìjọba tí ó ń fi owó ìṣẹ́ hàn fún irú àti ìtóbi ìdúnàádúrà kọ̀ọ̀kan."], ["Àkọsílẹ̀ kúkúrú (mini statement)", "àkọsílẹ̀ kúkúrú àwọn ìdúnàádúrà rẹ díẹ̀ tó kẹ́yìn, láti inú àkójọ tàbí app."]],
          slides: [
            { title: "Lílo aṣojú", bullets: ["Aṣojú tí a forúkọ rẹ̀ sílẹ̀: àmì ilé-iṣẹ́ àti nọ́mbà aṣojú", "Bẹ̀rẹ̀ rẹ̀ lórí fóònù tìrẹ; ṣàyẹ̀wò orúkọ", "Ka owó náà kí o tó kúrò"] },
            { title: "Owó ìṣẹ́: kà á, má ṣe méfò", bullets: ["Ó dá lórí ilé-iṣẹ́, orílẹ̀-èdè, iye owó àti irú rẹ̀", "Tábìlì ìjọba: ojú-òpó wẹ́ẹ̀bù, app, ìwé àlẹ̀mọ́ ṣọ́ọ̀bù", "Nẹ́tíwọ̀ọ̀kì míì tàbí báńkì lè wọ́n jù"] },
            { title: "Àmì aṣojú ayédèrú", bullets: ["\"Fún mi ní fóònù rẹ, màá bá ọ ṣe é\"", "Ó ń béèrè PIN rẹ", "Kò sí àmì tàbí nọ́mbà aṣojú"] },
            { title: "Àyẹ̀wò oṣooṣù", bullets: ["Ka àkọsílẹ̀ owó rẹ láti inú àkójọ tàbí app", "Wá ìsanwó tí o kò mọ̀", "Kọ àpapọ̀ owó tí o fi ránṣẹ́ àti èyí tí o gbà"] }
          ],
          sources: [CBK, BCEAO_EME],
          tryIt: "Wá tábìlì owó ìṣẹ́ ìjọba ilé-iṣẹ́ rẹ (ojú-òpó wẹ́ẹ̀bù, app tàbí ìwé àlẹ̀mọ́ ṣọ́ọ̀bù). Kọ owó ìṣẹ́ fún fífi iye kan tí o sábà máa ń fi ránṣẹ́, fún àpẹẹrẹ KES 1,000, NGN 5,000, GHS 100 tàbí XOF 10,000. Lẹ́yìn náà ṣí àkọsílẹ̀ kúkúrú rẹ kí o sì ṣàyẹ̀wò ìlà kọ̀ọ̀kan.",
          youCanNow: "ka owó ìṣẹ́ gidi láti inú tábìlì ìjọba, lo aṣojú láìléwu, kí o sì ṣàyẹ̀wò àkọsílẹ̀ owó rẹ fún ìsanwó àjèjì.",
          quickCheck: [
            { objective: "O2", q: "Lọ́dọ̀ aṣojú, aṣojú náà béèrè fóònù àti PIN rẹ láti \"mú un yára\". Kí ni o máa ṣe?", options: ["Fún un; a lè gbẹ́kẹ̀ lé aṣojú", "Fún un ní fóònù ṣùgbọ́n kì í ṣe PIN", "Ṣe é fúnra rẹ kí o sì pa PIN rẹ mọ́", "Kọ PIN náà sórí ìwé fún aṣojú"], answer: 2, why: "Aṣojú gidi kò nílò PIN rẹ láéláé; ìwọ fúnra rẹ ló ń bẹ̀rẹ̀ ìdúnàádúrà tí o sì ń fìdí rẹ̀ múlẹ̀." },
            { objective: "O5", q: "Níbo ni o ti máa rí owó ìṣẹ́ gidi fún fífi owó ránṣẹ́?", options: ["Ohun tí àjèjì sọ fún ọ", "Tábìlì owó ìṣẹ́ ìjọba, app tàbí ìwé àlẹ̀mọ́ ṣọ́ọ̀bù ilé-iṣẹ́ náà", "Ọ̀rọ̀ tí wọ́n dárí sí ọ lórí WhatsApp", "Ìméfò aládùúgbò rẹ"], answer: 1, why: "Owó ìṣẹ́ ń yí padà, ó sì yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, nítorí náà kà á lórí ọ̀nà ìjọba." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí owó orí fóònù ṣe ń ṣiṣẹ́, àti lílò ó láìléwu",
        questions: [
          { objective: "O1", q: "Ta ló yẹ kí ó mọ PIN owó orí fóònù rẹ?", options: ["Ìwọ àti aṣojú", "Gbogbo ẹbí rẹ", "Ìwọ nìkan", "Ìwọ àti òṣìṣẹ́ ìrànlọ́wọ́ oníbàárà"], answer: 2, why: "Ìwọ nìkan; òṣìṣẹ́, aṣojú àti ẹbí kò nílò rẹ̀ láéláé." },
          { objective: "O1", q: "Lááìnì rẹ dúró lójijì, o kò sì yí nǹkan kan padà. Kí ló lè jẹ́, kí ni o sì máa ṣe?", options: ["SIM swap; pe ilé-iṣẹ́ náà láti fóònù míì kí wọ́n tì í pa", "Bátìrì ti lọ sílẹ̀; ṣa fóònù náà", "Ọjọ́ ìsinmi ni; dúró fún ọ̀sẹ̀ kan", "Kò sí nǹkan; yóò padà"], answer: 0, why: "Lááìnì tí ó kú lè túmọ̀ sí pé ọ̀daràn ti gbé nọ́mbà rẹ lọ; títì í pa kíákíá ń dáàbò bo àpò owó rẹ." },
          { objective: "O2", q: "Ìgbà wo ló tọ́ láti ṣàyẹ̀wò ẹni tí o ń sanwó fún?", options: ["Lẹ́yìn tí o bá tẹ PIN", "Lórí ojú-iboju ìfìdímúlẹ̀, kí o tó tẹ PIN", "Ní ọjọ́ kejì", "Fún owó ńlá nìkan"], answer: 1, why: "Ní kété tí o bá tẹ PIN, owó náà ti lọ; àyẹ̀wò gbọ́dọ̀ kọ́kọ́ wá." },
          { objective: "O2", q: "O ń sanwó fún ṣọ́ọ̀bù kan. Níbo ni till tàbí kóòdù oníṣòwò yẹ kí ó ti wá?", options: ["Text láti nọ́mbà tí o kò mọ̀", "Ẹni tí ó pè ọ́ tí ó sọ pé ṣọ́ọ̀bù ti yí nọ́mbà rẹ̀ padà", "WhatsApp status", "Àmì tàbí rìsíìtì inú ṣọ́ọ̀bù náà"], answer: 3, why: "Àwọn onjìbìtì ń fi nọ́mbà ìsanwó ayédèrú ránṣẹ́; mú un láti ṣọ́ọ̀bù fúnra rẹ̀ kí o sì ṣàyẹ̀wò orúkọ lórí ojú-iboju." },
          { objective: "O5", q: "Kí ló dé tí o fi máa ka àkọsílẹ̀ owó rẹ lẹ́ẹ̀kan lóṣù?", options: ["Láti rí ìsanwó tí o kò mọ̀", "Láti dín owó ìṣẹ́ rẹ kù", "Láti yí nọ́mbà rẹ padà", "Nítorí pé ilé-iṣẹ́ náà ń sanwó fún ọ láti ṣe é"], answer: 0, why: "Àyẹ̀wò oṣooṣù ń tètè rí jìbìtì àti àṣìṣe." }
        ]
      }
    },
    {
      name: "Orí 2: Jìbìtì, àṣìṣe àti ètò ààbò rẹ",
      lessons: [
        {
          title: "Dídá jìbìtì owó orí fóònù mọ̀",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dá àwọn jìbìtì owó orí fóònù mẹ́fà tó wọ́pọ̀ mọ̀, àti àmì ìkìlọ̀ nínú ọ̀kọ̀ọ̀kan.",
          text: [
            "Àwọn onjìbìtì ń lo ìpè, SMS, WhatsApp àti ìkànnì àjọlò. Wọ́n ń ṣe bí ẹni pé àwọn ni ilé-iṣẹ́ rẹ, ẹbí rẹ, aṣojú, oníbàárà tàbí ilé-iṣẹ́ tí ó ní iṣẹ́ láti fúnni. Ẹ̀tàn wọn ń yí padà, ṣùgbọ́n àwọn àmì ìkìlọ̀ kò yí padà.",
            "1. Ìdápadà owó ayédèrú: SMS kan dé tí ó dà bí owó tí wọ́n san fún ọ, lẹ́yìn náà ìpè: \"Mo fi owó ránṣẹ́ sí ọ ní àṣìṣe, jọ̀ọ́ dá a padà.\" Kọ́kọ́ ṣàyẹ̀wò iye owó gidi tí ó wà nínú àpò rẹ. Ọ̀pọ̀ ìgbà, kò sí owó kankan tí ó dé; SMS náà wá láti nọ́mbà fóònù lásán, kì í ṣe láti ilé-iṣẹ́ náà. 2. Ìbéèrè PIN tàbí kóòdù: ẹnikẹ́ni tí ó bá béèrè PIN rẹ tàbí kóòdù ìgbà kan. 3. Òṣìṣẹ́ ayédèrú: \"A máa ti àkáǹtì rẹ pa àyàfi tí o bá tẹ kóòdù yìí tàbí sọ ìsọfúnni rẹ fún wa.\" 4. Ẹ̀bùn tàbí ìpolówó: \"O ti jẹ ẹ̀bùn, fi owó ìṣẹ́ ránṣẹ́ láti gba ẹ̀bùn rẹ.\" 5. Iṣẹ́ tàbí owó-yíyá ayédèrú: ìfilọ̀ tí ó ní kí o kọ́kọ́ san owó. 6. Ọ̀rọ̀ kánjúkánjú láti ọ̀dọ̀ ẹbí: \"Màmá, wàhálà ti bá mi, fi owó ránṣẹ́ sí nọ́mbà tuntun yìí.\"",
            "Ọ̀rọ̀ gidi láti ilé-iṣẹ́ máa ń wá láti orúkọ ìjọba rẹ̀ tàbí short code rẹ̀, kì í ṣe láti nọ́mbà fóònù lásán. Àwọn ilé-iṣẹ́ kì í ní kí o tẹ kóòdù láti tún àkáǹtì rẹ ṣe tàbí láti jẹ ẹ̀bùn. Tí nǹkan kan bá dà bí kánjúkánjú, dúró. Pe ẹni náà tàbí ilé-iṣẹ́ náà padà lórí nọ́mbà tí o ti mọ̀ tẹ́lẹ̀.",
            "Àpẹẹrẹ: Chinedu ní Enugu gba SMS tí ó sọ pé NGN 20,000 ti dé, lẹ́yìn náà ìpè kan ní kí ó dá a padà. Ó ṣàyẹ̀wò iye owó rẹ̀ nínú app: kò sí nǹkan tí ó dé. Ó gé ìpè náà, ó sì ròyìn nọ́mbà náà."
          ],
          steps: ["Ṣàyẹ̀wò ẹni tí ó fi ránṣẹ́: orúkọ ìjọba tàbí short code ni, tàbí nọ́mbà lásán?", "Ṣàyẹ̀wò iye owó gidi rẹ nínú àkójọ tàbí app.", "Béèrè lọ́wọ́ ara rẹ: ṣé wọ́n ń béèrè PIN mi, kóòdù, owó ìṣẹ́, tàbí kí n kánjú?", "Dúró kí o sì pe padà lórí nọ́mbà tí o ti mọ̀ tẹ́lẹ̀.", "Ròyìn nọ́mbà onjìbìtì náà fún ilé-iṣẹ́ rẹ."],
          words: [["Ìdápadà owó ayédèrú", "ẹ̀tàn níbi tí ẹnìkan ti ń ṣe bí ẹni pé òun fi owó ránṣẹ́ sí ọ ní àṣìṣe, tí ó sì ní kí o dá a padà."], ["Kóòdù ìgbà kan (OTP)", "kóòdù kúkúrú tí wọ́n fi ránṣẹ́ sí fóònù rẹ láti fìdí ìṣe kan múlẹ̀; má ṣe pín in láéláé."], ["Short code", "nọ́mbà ìjọba kúkúrú tí ilé-iṣẹ́ ń fi ọ̀rọ̀ ránṣẹ́ láti ọ̀dọ̀ rẹ̀."]],
          slides: [
            { title: "Jìbìtì mẹ́fà tó wọ́pọ̀", bullets: ["Ìdápadà owó ayédèrú; ìbéèrè PIN tàbí kóòdù; òṣìṣẹ́ ayédèrú", "Ẹ̀bùn tí ó nílò owó ìṣẹ́; iṣẹ́ tàbí owó-yíyá tí ó nílò owó ìṣẹ́", "Ọ̀rọ̀ kánjúkánjú láti ọ̀dọ̀ ẹbí láti nọ́mbà tuntun"] },
            { title: "Ìdápadà owó ayédèrú", bullets: ["SMS dà bí owó tí ó dé", "Ìpè: \"Mo fi ránṣẹ́ ní àṣìṣe, dá a padà\"", "Ṣàyẹ̀wò iye owó gidi rẹ: ọ̀pọ̀ ìgbà kò sí nǹkan tó dé"] },
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Wọ́n ń béèrè PIN tàbí kóòdù", "Wọ́n ní kí o kọ́kọ́ san owó ìṣẹ́", "Wọ́n ń kán ọ lójú; ó wá láti nọ́mbà lásán"] },
            { title: "Ohun tí o máa ṣe", bullets: ["Dúró. Ṣàyẹ̀wò iye owó rẹ", "Pe padà lórí nọ́mbà tí o ti mọ̀ tẹ́lẹ̀", "Ròyìn nọ́mbà náà fún ilé-iṣẹ́ rẹ"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Wo inú àpótí SMS rẹ fún ọ̀rọ̀ nípa owó. Fún ọ̀kọ̀ọ̀kan, pinnu: short code ìjọba ni tàbí nọ́mbà lásán? Ṣé ó ń béèrè PIN, kóòdù, owó ìṣẹ́ tàbí kíkánjú? Kọ àmì jìbìtì èyíkéyìí tí o rí sílẹ̀.",
          youCanNow: "dá àwọn jìbìtì owó orí fóònù mẹ́fà tó wọ́pọ̀ mọ̀, kí o sì sọ àmì ìkìlọ̀ nínú ọ̀kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O3", q: "SMS láti nọ́mbà fóònù lásán sọ pé o gba XAF 25,000. Lẹ́yìn náà ẹnìkan pè ọ́ pé kí o dá a padà. Kí ni o máa kọ́kọ́ ṣe?", options: ["Dá a padà kíákíá kí o lè jẹ́ olóòótọ́", "Ṣàyẹ̀wò iye owó gidi rẹ nínú àkójọ tàbí app", "Fún ẹni tó pè ọ́ ní PIN rẹ kí ó lè dá a padà", "Dárí SMS náà sí àwọn ọ̀rẹ́"], answer: 1, why: "SMS ìdápadà owó ayédèrú ń wá láti nọ́mbà lásán; iye owó gidi rẹ ló ń fi òtítọ́ hàn." },
            { objective: "O3", q: "Ọ̀rọ̀ kan sọ pé o jẹ fóònù bí ẹ̀bùn, o sì gbọ́dọ̀ kọ́kọ́ san owó ìkérù. Kí ni àmì ìkìlọ̀?", options: ["Ó dárúkọ fóònù", "Ó dé ní ìrọ̀lẹ́", "Ó ní kí o san owó ìṣẹ́ kí o tó gba ẹ̀bùn", "Ó lo orúkọ àkọ́kọ́ rẹ"], answer: 2, why: "Ẹ̀bùn gidi kò nílò owó ìṣẹ́ ṣáájú; sísanwó kí o tó gba nǹkan jẹ́ jìbìtì tí a mọ̀ dáadáa." }
          ]
        },
        {
          title: "Owó tí ó lọ sí ibi tí kò tọ́ tàbí jìbìtì: wákàtí àkọ́kọ́",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ròyìn owó tí ó lọ sí ibi tí kò tọ́ tàbí jìbìtì nípasẹ̀ àwọn ọ̀nà ìjọba ilé-iṣẹ́ rẹ ní ọjọ́ kan náà.",
          text: [
            "Yára ṣe é. Ìdápadà owó rọrùn jù nígbà tí owó náà ṣì wà nínú àpò owó ẹni kejì. Pa SMS ìfìdímúlẹ̀ àkọ́kọ́ mọ́; má ṣe pa á rẹ́, má sì yí i padà.",
            "Lo àwọn ọ̀nà ìjọba nìkan: nọ́mbà ìrànlọ́wọ́ tí a tẹ̀ sórí páálí SIM rẹ tàbí sórí ojú-òpó wẹ́ẹ̀bù ilé-iṣẹ́ náà, app ìjọba, short code ìjọba, tàbí ṣọ́ọ̀bù ilé-iṣẹ́ náà. Má ṣe lo nọ́mbà láti ọ̀dọ̀ àjèjì tàbí láti inú ọ̀rọ̀ ìdáhùn lórí ìkànnì àjọlò láéláé, má sì san owó fún ẹnikẹ́ni tí ó bá ṣèlérí láti \"gba owó rẹ padà\" bí o bá sanwó.",
            "Àpẹẹrẹ láti Kenya: àwọn ọ̀nà tí Safaricom kéde ni fífi SMS ìfìdímúlẹ̀ M-Pesa ránṣẹ́ sí 456 láti béèrè ìdápadà owó tí ó lọ sọ́dọ̀ ẹni tí kò tọ́, pípe 100 fún till tàbí Paybill tí kò tọ́, àti fífi nọ́mbà tàbí ọ̀rọ̀ jìbìtì ránṣẹ́ sí 333. Àwọn ilé-iṣẹ́ míì ní ìgbésẹ̀ tiwọn; kà wọ́n lórí ojú-òpó wẹ́ẹ̀bù tàbí app ìjọba ilé-iṣẹ́ náà, nítorí nọ́mbà àti ìgbésẹ̀ máa ń yí padà.",
            "Kò sí ìdánilójú pé owó yóò padà. Tí ẹni náà bá ti gba owó náà jáde tí ó sì kọ̀ láti dá a padà, ilé-iṣẹ́ náà lè sọ fún ọ pé kí o lọ sí ọ́fíìsì ọlọ́pàá. Tí wọ́n bá jí PIN tàbí lááìnì rẹ, kọ́kọ́ ròyìn fún ilé-iṣẹ́ náà, lẹ́yìn náà fún ọlọ́pàá. Tí ilé-iṣẹ́ náà kò bá yanjú rẹ̀, báńkì àpapọ̀ (central bank) ní ọ̀nà ẹ̀sùn oníbàárà (fún àpẹẹrẹ Central Bank of Nigeria tàbí Bank of Ghana)."
          ],
          steps: ["Má ṣe pa SMS ìfìdímúlẹ̀ rẹ́.", "Láàárín wákàtí kan, lo ọ̀nà ìdápadà owó tàbí ìròyìn jìbìtì ìjọba ilé-iṣẹ́ rẹ.", "Kọ ọjọ́, àkókò, iye owó, nọ́mbà ìdúnàádúrà (transaction ID) àti ẹni tí o bá sọ̀rọ̀ sílẹ̀.", "Tí wọ́n bá jí PIN tàbí lááìnì, kọ́kọ́ ti SIM àti àpò owó pa.", "Tí ó bá pọndandan, ròyìn fún ọlọ́pàá pẹ̀lú SMS náà.", "Tí ilé-iṣẹ́ kò bá yanjú rẹ̀, lo ọ̀nà ẹ̀sùn báńkì àpapọ̀."],
          words: [["Ìdápadà owó (reversal)", "nígbà tí ilé-iṣẹ́ bá dá owó tí ó lọ sí nọ́mbà tí kò tọ́ padà, tí ó bá ṣì wà níbẹ̀."], ["Transaction ID", "kóòdù inú SMS ìfìdímúlẹ̀ tí ó ń dá ìsanwó kan mọ̀."], ["Jìbìtì ìgbàpadà owó", "ìfilọ̀ ayédèrú láti gba owó rẹ tí ó sọnù padà tí o bá san owó ìṣẹ́."]],
          slides: [
            { title: "Ṣe é ní wákàtí àkọ́kọ́", bullets: ["Ìdápadà rọrùn jù nígbà tí owó ṣì wà níbẹ̀", "Pa SMS ìfìdímúlẹ̀ àkọ́kọ́ mọ́", "Kọ ọjọ́, àkókò, iye owó, transaction ID sílẹ̀"] },
            { title: "Ọ̀nà ìjọba nìkan", bullets: ["Nọ́mbà ìrànlọ́wọ́ lórí páálí SIM tàbí ojú-òpó wẹ́ẹ̀bù ìjọba", "App ìjọba, short code tàbí ṣọ́ọ̀bù ilé-iṣẹ́", "Kì í ṣe nọ́mbà láti ọ̀dọ̀ àjèjì láéláé"] },
            { title: "Àpẹẹrẹ: Kenya (Safaricom)", bullets: ["Ẹni tí kò tọ́: fi SMS náà ránṣẹ́ sí 456", "Till tàbí Paybill tí kò tọ́: pe 100", "Nọ́mbà tàbí ọ̀rọ̀ jìbìtì: fi ránṣẹ́ sí 333"] },
            { title: "Tí kò bá yanjú", bullets: ["Ìròyìn ọlọ́pàá pẹ̀lú SMS náà", "Ọ̀nà ẹ̀sùn báńkì àpapọ̀", "Má ṣe san owó \"ìgbàpadà\" láéláé"] }
          ],
          sources: [SAF_REV, SAF_FRAUD, CBN_CP, BOG],
          tryIt: "Wá àwọn ìgbésẹ̀ ìdápadà owó àti ìròyìn jìbìtì ìjọba ilé-iṣẹ́ rẹ lórí ojú-òpó wẹ́ẹ̀bù, app tàbí páálí SIM rẹ̀. Kọ wọ́n sórí ìwé: nọ́mbà tàbí kóòdù, àti ohun tí o máa fi ránṣẹ́. Má ṣe dà wọ́n kọ láti inú ọ̀rọ̀ tí wọ́n dárí sí ọ lórí WhatsApp.",
          youCanNow: "gbé ìgbésẹ̀ láàárín wákàtí àkọ́kọ́ lẹ́yìn tí owó bá lọ sí ibi tí kò tọ́ tàbí lẹ́yìn jìbìtì, pẹ̀lú àwọn ọ̀nà ìjọba ilé-iṣẹ́ rẹ nìkan.",
          quickCheck: [
            { objective: "O4", q: "O fi owó ránṣẹ́ sí nọ́mbà tí kò tọ́. Kí ni o máa pa mọ́?", options: ["Kò sí nǹkan; pa SMS náà rẹ́", "Iye owó náà lọ́kàn rẹ nìkan", "Àwòrán ojú-iboju (screenshot) láti ọ̀dọ̀ àjèjì", "SMS ìfìdímúlẹ̀ àkọ́kọ́"], answer: 3, why: "Ọ̀rọ̀ ìfìdímúlẹ̀ àkọ́kọ́ ní transaction ID tí ilé-iṣẹ́ nílò." },
            { objective: "O4", q: "Ẹnìkan lórí Facebook ṣèlérí láti gba owó rẹ tí ó sọnù padà fún owó ìṣẹ́ kékeré. Kí ni èyí?", options: ["Jìbìtì ìgbàpadà owó; lo ọ̀nà ìjọba nìkan", "Iṣẹ́ ìrànlọ́wọ́ tó wúlò", "Ọ̀nà báńkì àpapọ̀", "Ṣọ́ọ̀bù ilé-iṣẹ́"], answer: 0, why: "Sísanwó fún àjèjì láti gba owó padà jẹ́ jìbìtì kejì; ọ̀nà ìjọba jẹ́ ọ̀fẹ́." }
          ]
        },
        {
          title: "Ètò ààbò owó orí fóònù rẹ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọ ètò ààbò owó orí fóònù ojú-ewé kan fún ìwọ tàbí ẹbí rẹ.",
          text: [
            "Ètò ààbò ń kó gbogbo ohun inú ẹ̀kọ́ yìí sí ojú-ewé kan, kí ìwọ àti ẹbí rẹ lè mọ ohun tí ẹ máa ṣe kí nǹkan kan tó ṣẹlẹ̀. Pa á mọ́ sórí ìwé nílé, kì í ṣe lórí fóònù nìkan.",
            "Ó ní apá mẹ́fà: 1. Òfin PIN àti fóònù (PIN tó ṣòro, títì ojú-iboju, SIM PIN, má ṣe pín in láéláé). 2. Àyẹ̀wò orúkọ kí o tó tẹ PIN nígbà gbogbo. 3. Àwọn ọ̀nà ìrànlọ́wọ́ àti ìròyìn jìbìtì ìjọba ilé-iṣẹ́ rẹ, tí o dà kọ láti ojú-òpó wẹ́ẹ̀bù, app tàbí páálí SIM rẹ̀. 4. Àwọn àmì ìkìlọ̀ jìbìtì mẹ́fà. 5. Ìgbésẹ̀ wákàtí àkọ́kọ́ lẹ́yìn àṣìṣe tàbí jìbìtì. 6. Àyẹ̀wò àkọsílẹ̀ owó lóṣooṣù, pẹ̀lú ọjọ́.",
            "Jíròrò rẹ̀ pẹ̀lú àwọn òbí àgbàlagbà àti àwọn ọ̀dọ́, nítorí àwọn onjìbìtì sábà máa ń dojú kọ wọ́n. Ẹ fẹnu kò lórí òfin ẹbí kan: \"A kì í fi owó ránṣẹ́ sí nọ́mbà tuntun nítorí ọ̀rọ̀ kánjúkánjú. A máa kọ́kọ́ pe nọ́mbà àtijọ́.\"",
            "Àpẹẹrẹ: Fatima, oníṣòwò ní Casablanca, ń pa ètò rẹ̀ mọ́ sínú ìwé àkọsílẹ̀ owó rẹ̀. Ní òpin oṣù kọ̀ọ̀kan ó ń ṣàyẹ̀wò ìtàn àpò owó rẹ̀, ó sì ń fi àmì sí ọjọ́ náà lórí ètò rẹ̀."
          ],
          steps: ["Kọ àwọn òfin PIN àti títì fóònù rẹ.", "Kọ òfin àyẹ̀wò orúkọ.", "Dà àwọn ọ̀nà ìrànlọ́wọ́ àti ìròyìn jìbìtì ìjọba ilé-iṣẹ́ rẹ kọ láti orísun ìjọba.", "Kọ àwọn àmì ìkìlọ̀ jìbìtì mẹ́fà sílẹ̀.", "Kọ àwọn ìgbésẹ̀ wákàtí àkọ́kọ́ rẹ.", "Yan ọjọ́ kan lóṣooṣù láti ṣàyẹ̀wò àkọsílẹ̀ owó rẹ.", "Kà á pẹ̀lú ẹbí rẹ."],
          words: [["Ètò ààbò", "àkọsílẹ̀ kúkúrú òfin àti ìgbésẹ̀ tí ó ń dáàbò bo owó rẹ."]],
          slides: [
            { title: "Ojú-ewé kan, apá mẹ́fà", bullets: ["Òfin PIN àti fóònù; àyẹ̀wò orúkọ", "Ọ̀nà ìrànlọ́wọ́ àti ìròyìn jìbìtì ìjọba", "Àmì jìbìtì; ìgbésẹ̀ wákàtí àkọ́kọ́; àyẹ̀wò oṣooṣù"] },
            { title: "Ọ̀nà ìjọba nìkan", bullets: ["Dà wọ́n kọ láti ojú-òpó wẹ́ẹ̀bù, app tàbí páálí SIM", "Kì í ṣe láti ọ̀rọ̀ tí wọ́n dárí sí ọ tàbí láti ọ̀dọ̀ àjèjì"] },
            { title: "Pín in nílé", bullets: ["Àwọn onjìbìtì sábà máa ń dojú kọ òbí àti ọ̀dọ́", "Òfin ẹbí: kọ́kọ́ pe nọ́mbà àtijọ́ padà", "Pa ètò náà mọ́ sórí ìwé"] }
          ],
          sources: [CBK, BOG, BCEAO_EME],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ààbò owó orí fóònù ojú-ewé kan rẹ pẹ̀lú gbogbo apá mẹ́fà. Dà àwọn ọ̀nà ìrànlọ́wọ́ àti ìròyìn jìbìtì ilé-iṣẹ́ rẹ kọ láti ojú-òpó wẹ́ẹ̀bù, app tàbí páálí SIM ìjọba rẹ̀. Kà á pẹ̀lú ẹnì kan nínú ẹbí rẹ.",
          youCanNow: "kọ ètò ààbò owó orí fóònù, kí o sì pín in, láti dáàbò bo ìwọ àti ẹbí rẹ.",
          quickCheck: [
            { objective: "O5", q: "Níbo ni àwọn nọ́mbà ìrànlọ́wọ́ inú ètò rẹ yẹ kí ó ti wá?", options: ["Ọ̀rọ̀ tí wọ́n dárí sí ọ lórí WhatsApp", "Ojú-òpó wẹ́ẹ̀bù, app tàbí páálí SIM ìjọba ilé-iṣẹ́ náà", "Ẹni tí ó pè ọ́ tí ó sọ pé òṣìṣẹ́ ni òun", "Ọ̀rọ̀ ìdáhùn lórí ìkànnì àjọlò"], answer: 1, why: "Àwọn onjìbìtì ń tan nọ́mbà ìrànlọ́wọ́ ayédèrú kálẹ̀; dà wọ́n kọ láti orísun ìjọba nìkan." },
            { objective: "O5", q: "Òfin ẹbí wo ló ń dáàbò bo ọ́ lọ́wọ́ jìbìtì ọ̀rọ̀ kánjúkánjú?", options: ["Máa fi owó ránṣẹ́ kíákíá nígbà pàjáwìrì", "Ẹ máa lo PIN kan fún gbogbo ẹbí", "Fi PIN rẹ dáhùn láti fi hàn pé ìwọ ni", "Pe ẹni náà padà lórí nọ́mbà àtijọ́ rẹ̀ kí o tó fi owó ránṣẹ́"], answer: 3, why: "Pípe padà lórí nọ́mbà tí o mọ̀ ń fi hàn bóyá ọ̀rọ̀ kánjúkánjú náà jẹ́ òótọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Jìbìtì, àṣìṣe àti ètò ààbò rẹ",
        questions: [
          { objective: "O3", q: "\"A máa ti àkáǹtì rẹ pa lónìí. Tẹ kóòdù yìí kí o sì tẹ PIN rẹ kí ó má bàa tì.\" Èyí jẹ́:", options: ["Ọ̀rọ̀ lásán láti ilé-iṣẹ́", "Jìbìtì: ó ń kán ọ lójú, ó sì ń béèrè PIN rẹ", "Ìdápadà owó", "Ìpolówó"], answer: 1, why: "Àwọn ilé-iṣẹ́ kì í ní kí o tẹ kóòdù pẹ̀lú PIN rẹ láéláé; kíkán ọ lójú jẹ́ àmì ìkìlọ̀." },
          { objective: "O3", q: "Ọ̀rọ̀ wo ló ṣeé ṣe jù kí ó jẹ́ òótọ́?", options: ["Láti nọ́mbà lásán: \"Dá owó tí mo fi ránṣẹ́ ní àṣìṣe padà\"", "\"O ti jẹ ẹ̀bùn! San owó ìṣẹ́ láti gbà á\"", "Ìfìdímúlẹ̀ ìsanwó láti orúkọ ìjọba ilé-iṣẹ́ náà, tí ó bá iye owó rẹ mu", "\"Màmá, nọ́mbà tuntun, fi owó ránṣẹ́ báyìí\""], answer: 2, why: "Ìfìdímúlẹ̀ gidi ń wá láti orúkọ ìjọba tàbí short code, ó sì bá iye owó gidi rẹ mu." },
          { objective: "O4", q: "Ìgbà wo ló yẹ kí o ròyìn owó tí ó lọ sí ibi tí kò tọ́?", options: ["Ní oṣù tó ń bọ̀", "Tí ó bá jẹ́ owó ńlá nìkan", "Lẹ́yìn tí ẹni kejì bá ná an", "Ní ọjọ́ kan náà, kíákíá bí ó ti ṣeé ṣe"], answer: 3, why: "Ìdápadà owó rọrùn jù nígbà tí owó náà ṣì wà nínú àpò owó ẹni kejì." },
          { objective: "O4", q: "Ẹni tí ó gba owó rẹ ní àṣìṣe ti gbà á jáde, ó sì kọ̀ láti dá a padà. Kí ló kàn?", options: ["Tẹ̀lé ìmọ̀ràn ilé-iṣẹ́ náà kí o sì ròyìn fún ọlọ́pàá pẹ̀lú SMS rẹ", "San owó fún àjèjì kí ó bá ọ gbà á padà", "Pa SMS náà rẹ́", "Fi owó míì ránṣẹ́ sí i"], answer: 0, why: "Lẹ́yìn tí wọ́n bá ti gbà á jáde, ó lè di ọ̀rọ̀ ọlọ́pàá; SMS rẹ ni ẹ̀rí rẹ." },
          { objective: "O5", q: "Ìgbà mélòó ni ètò ààbò sọ pé kí o ṣàyẹ̀wò àkọsílẹ̀ owó rẹ?", options: ["Láéláé", "Lẹ́ẹ̀kan lóṣù", "Lẹ́ẹ̀kan ní ọdún márùn-ún", "Nígbà tí fóònù bá sọnù nìkan"], answer: 1, why: "Àyẹ̀wò oṣooṣù déédéé ń tètè rí ìsanwó àjèjì." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Lílo Owó Orí Fóònù Láìléwu (M-Pesa, MTN MoMo, Orange Money, Wave)",
    questions: [
      { objective: "O1", q: "PIN wo ló lágbára kéré jù?", options: ["Díjíìtì mẹ́rin tí a yàn láìnídìí", "Nọ́mbà tí ìwọ nìkan mọ̀", "PIN tí o ṣẹ̀ṣẹ̀ yí padà", "Ọdún ìbí rẹ"], answer: 3, why: "Ó rọrùn fún àwọn ẹlòmíì láti wá ọdún ìbí rẹ kí wọ́n sì méfò rẹ̀." },
      { objective: "O1", q: "Ta ló lè béèrè PIN owó orí fóònù rẹ láìléwu?", options: ["Kò sí ẹnìkan", "Òṣìṣẹ́ ìrànlọ́wọ́ oníbàárà", "Aṣojú tí a forúkọ rẹ̀ sílẹ̀", "Báńkì rẹ"], answer: 0, why: "Kò sí ẹni tí ó nílò PIN rẹ; òṣìṣẹ́ gidi àti aṣojú kì í béèrè rẹ̀ láéláé." },
      { objective: "O1", q: "Wọ́n jí fóònù rẹ. Kí ni ìgbésẹ̀ àkọ́kọ́?", options: ["Ra fóònù tuntun ní oṣù tó ń bọ̀", "Pe ilé-iṣẹ́ náà láti fóònù míì kí wọ́n ti SIM àti àpò owó pa", "Fi ọ̀rọ̀ ránṣẹ́ sí olè náà", "Dúró kí o wò bóyá yóò padà"], answer: 1, why: "Títì í pa kíákíá ń dá olè dúró láti lo àpò owó rẹ." },
      { objective: "O1", q: "Kí ló dé tí a fi ń ṣe títì ojú-iboju àti SIM PIN?", options: ["Láti mú fóònù yára", "Láti dín owó ìṣẹ́ kù", "Kí olè má lè lo fóònù tàbí SIM rẹ ní ìrọ̀rùn", "Nítorí pé aṣojú nílò rẹ̀"], answer: 2, why: "Títì ń dí ẹnikẹ́ni tí ó bá rí fóònù tàbí SIM rẹ lọ́wọ́." },
      { objective: "O2", q: "Nǹkan mẹ́ta wo ni o máa ṣàyẹ̀wò lórí ojú-iboju ìfìdímúlẹ̀?", options: ["Àkókò, ojú ọjọ́ àti bátìrì", "Orúkọ, nọ́mbà àti iye owó", "Aṣojú, àwọ̀ àti ọjọ́", "Owó ìṣẹ́, nẹ́tíwọ̀ọ̀kì àti àmì nẹ́tíwọ̀ọ̀kì"], answer: 1, why: "Orúkọ, nọ́mbà àti iye owó ló ń sọ fún ọ pé owó náà ń lọ sí ibi tó tọ́." },
      { objective: "O2", q: "O fẹ́ fi GHS 50 ránṣẹ́, ojú-iboju sì fi GHS 500 hàn. Kí ni o máa ṣe?", options: ["Fagilé e kí o sì tún un tẹ", "Tẹ PIN kí o sì béèrè ṣéǹjì", "Fi ránṣẹ́ kí o sì dá a padà lẹ́yìn náà", "Tẹ ìdajì PIN"], answer: 0, why: "Fagilé e kí o tó tẹ PIN; títún un ṣe lẹ́yìn náà ṣòro." },
      { objective: "O2", q: "Ọ̀rọ̀ kan sọ pé olùpèsè ọjà rẹ ní \"nọ́mbà ìsanwó tuntun\". Kí ni o máa ṣe?", options: ["San owó sí nọ́mbà tuntun náà lẹ́sẹ̀kẹsẹ̀", "Dárí rẹ̀ sí àwọn oníbàárà míì", "Pe olùpèsè náà lórí nọ́mbà tí o ti ní tẹ́lẹ̀ láti ṣàyẹ̀wò", "San ìdajì sí nọ́mbà kọ̀ọ̀kan"], answer: 2, why: "Nọ́mbà ìsanwó ayédèrú jẹ́ ẹ̀tàn tó wọ́pọ̀; ṣàyẹ̀wò pẹ̀lú ẹni náà lórí nọ́mbà tí o mọ̀." },
      { objective: "O2", q: "Lọ́dọ̀ aṣojú, èwo ló ní ààbò?", options: ["Fífún aṣojú ní fóònù àti PIN rẹ", "Kíkúrò láìka owó", "Lílo aṣojú tí kò ní àmì", "Bíbẹ̀rẹ̀ gbígba owó jáde lórí fóònù tìrẹ àti kíka owó náà"], answer: 3, why: "Ìwọ ló ń ṣàkóso PIN rẹ, o sì ń ṣàyẹ̀wò owó kí o tó kúrò." },
      { objective: "O3", q: "Nínú jìbìtì ìdápadà owó ayédèrú, kí ló sábà máa ń ṣẹlẹ̀?", options: ["Owó gidi dé ní àṣìṣe", "SMS ayédèrú láti nọ́mbà lásán ṣe bí ẹni pé owó dé", "Ilé-iṣẹ́ ṣe àṣìṣe", "Aṣojú pàdánù owó náà"], answer: 1, why: "SMS ayédèrú dà bí ìsanwó, ṣùgbọ́n iye owó gidi rẹ fi hàn pé kò sí nǹkan tí ó dé." },
      { objective: "O3", q: "Èwo ni àmì ìkìlọ̀ jìbìtì?", options: ["Wọ́n ní kí o san owó ìṣẹ́ kí wọ́n tó fún ọ ní ẹ̀bùn, iṣẹ́ tàbí owó-yíyá", "Ọ̀rọ̀ náà wá láti short code ìjọba", "Iye owó náà bá iye owó rẹ mu", "Ìwọ fúnra rẹ ló bẹ̀rẹ̀ ìsanwó náà"], answer: 0, why: "Sísanwó kí o tó gba nǹkan jẹ́ àmì jìbìtì tí a mọ̀ dáadáa." },
      { objective: "O3", q: "Ọ̀rọ̀ WhatsApp láti nọ́mbà tuntun: \"Bàbá, fóònù mi sọnù, fi XOF 30,000 ránṣẹ́ sí nọ́mbà yìí báyìí.\" Kí ni o máa ṣe?", options: ["Fi ránṣẹ́ kíákíá", "Fi ìdajì ránṣẹ́", "Kọ́kọ́ pe ọmọ rẹ lórí nọ́mbà àtijọ́", "Fi PIN rẹ dáhùn"], answer: 2, why: "Pípe nọ́mbà àtijọ́ ń fi hàn bóyá ọ̀rọ̀ kánjúkánjú náà jẹ́ òótọ́." },
      { objective: "O3", q: "Báwo ni ọ̀rọ̀ gidi láti ilé-iṣẹ́ ṣe máa ń dé?", options: ["Láti nọ́mbà fóònù lásán", "Láti orúkọ ìjọba tàbí short code ilé-iṣẹ́ náà", "Nípasẹ̀ WhatsApp àjèjì", "Láti ojú-ewé ìkànnì àjọlò tí ó ń béèrè PIN rẹ"], answer: 1, why: "Àwọn ilé-iṣẹ́ ń fi ọ̀rọ̀ ránṣẹ́ láti orúkọ ìjọba tàbí short code; nọ́mbà lásán jẹ́ àmì ìkìlọ̀." },
      { objective: "O4", q: "Ní Kenya, ìgbésẹ̀ tí Safaricom kéde láti béèrè ìdápadà owó tí ó lọ sọ́dọ̀ ẹni tí kò tọ́ ni láti:", options: ["Kọ ọ́ sórí Facebook", "Pe nọ́mbà èyíkéyìí lórí ayélujára", "Fi SMS ìfìdímúlẹ̀ ránṣẹ́ sí 456", "Fi PIN rẹ ránṣẹ́ sí 100"], answer: 2, why: "Fífi ìfìdímúlẹ̀ M-Pesa àkọ́kọ́ ránṣẹ́ sí 456 ń bẹ̀rẹ̀ ìbéèrè ìdápadà owó (ṣàyẹ̀wò ojú-òpó Safaricom fún ìgbésẹ̀ ti ìsinsìnyí)." },
      { objective: "O4", q: "Ìsọfúnni wo ni o máa kọ sílẹ̀ nígbà tí o bá ń ròyìn ìṣòro?", options: ["Ọjọ́, àkókò, iye owó àti transaction ID", "PIN rẹ", "Kóòdù ìgbà kan rẹ", "Ọ̀rọ̀ aṣínà rẹ"], answer: 0, why: "Àwọn ìsọfúnni wọ̀nyí ń ran ilé-iṣẹ́ lọ́wọ́ láti rí ìsanwó náà; má ṣe pín PIN tàbí kóòdù rẹ láéláé." },
      { objective: "O4", q: "Níbo ni o ti máa rí nọ́mbà ìrànlọ́wọ́ ìjọba ilé-iṣẹ́ rẹ?", options: ["Ọ̀rọ̀ ìdáhùn lábẹ́ ìfiránṣẹ́ Facebook", "Ẹni tí ó pè ọ́ tí ó sọ pé òṣìṣẹ́ ni òun", "Text láti nọ́mbà lásán", "Páálí SIM, ojú-òpó wẹ́ẹ̀bù ìjọba tàbí app ìjọba"], answer: 3, why: "Orísun ìjọba ń fúnni ní nọ́mbà gidi; àwọn onjìbìtì ń tan nọ́mbà ayédèrú kálẹ̀." },
      { objective: "O4", q: "Ilé-iṣẹ́ náà kò tíì yanjú ẹ̀sùn rẹ. Kí ni o tún lè lò?", options: ["Àjèjì tí ó ń gba owó ìgbàpadà", "Ọ̀nà ẹ̀sùn oníbàárà báńkì àpapọ̀", "Kò sí nǹkan míì", "PIN tuntun fún ẹni kejì"], answer: 1, why: "Àwọn báńkì àpapọ̀ bí CBN àti Bank of Ghana ní ọ̀nà ẹ̀sùn." },
      { objective: "O5", q: "Èwo ló yẹ kí ó wà nínú ètò ààbò owó orí fóònù rẹ?", options: ["PIN rẹ ní kíkún", "Àwọn kóòdù ìgbà kan rẹ", "Ọ̀nà ìròyìn jìbìtì ìjọba ilé-iṣẹ́ rẹ", "PIN aládùúgbò rẹ"], answer: 2, why: "Ètò náà ń kọ òfin àti ọ̀nà ìjọba sílẹ̀, kì í ṣe nọ́mbà àṣírí láéláé." },
      { objective: "O5", q: "Kí ló dé tí o fi máa pa ètò ààbò mọ́ sórí ìwé nílé?", options: ["Kí ẹbí lè lò ó kódà tí fóònù bá sọnù", "Nítorí pé fóònù kò lè pa àkọsílẹ̀ mọ́", "Láti fi han àwọn aṣojú", "Láti fi sórí ayélujára"], answer: 0, why: "Tí wọ́n bá jí fóònù, ètò orí ìwé ṣì máa sọ ohun tí o máa ṣe fún ọ." },
      { objective: "O5", q: "Ta ni o yẹ kí o bá jíròrò ètò ààbò náà?", options: ["Àwọn àjèjì nínú ọjà", "Ẹni tí ó pè ọ́ tí ó sọ pé láti ilé-iṣẹ́ ni òun", "Kò sí ẹnìkan", "Àwọn ẹbí bí òbí àgbàlagbà àti àwọn ọ̀dọ́"], answer: 3, why: "Àwọn onjìbìtì sábà máa ń dojú kọ ẹbí; pínpín ètò náà ń dáàbò bo àwọn náà." },
      { objective: "O5", q: "Níbo ni o ti máa ka owó ìṣẹ́ gidi fún ìdúnàádúrà kan?", options: ["Ọ̀rọ̀ tí wọ́n dárí sí ọ lórí WhatsApp", "Tábìlì owó ìṣẹ́ ìjọba, app tàbí ìwé àlẹ̀mọ́ ṣọ́ọ̀bù ilé-iṣẹ́ náà", "Ìméfò ọ̀rẹ́ kan", "Ọ̀rọ̀ ìdáhùn lórí ìkànnì àjọlò"], answer: 1, why: "Owó ìṣẹ́ yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, ó sì ń yí padà; ọ̀nà ìjọba ló ń fi owó ìṣẹ́ ti ìsinsìnyí hàn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Òfin PIN àti fóònù", objective: "O1", notYet: "Kò sí òfin PIN, tàbí ètò náà ní PIN tàbí kóòdù gidi nínú.", meets: "Ó sọ pé: PIN tí ó ṣòro láti méfò, títì ojú-iboju, má ṣe pín PIN tàbí kóòdù láéláé, ti í pa lẹ́sẹ̀kẹsẹ̀ tí fóònù bá sọnù.", exceeds: "Ó tún ní SIM PIN àti ohun tí o máa ṣe tí lááìnì bá kú lójijì (ó lè jẹ́ SIM swap)." },
      { name: "Àyẹ̀wò orúkọ", objective: "O2", notYet: "Kò sí ìgbésẹ̀ àyẹ̀wò kí o tó tẹ PIN.", meets: "Ó sọ pé kí o ṣàyẹ̀wò orúkọ, nọ́mbà àti iye owó lórí ojú-iboju ìfìdímúlẹ̀, kí o sì pa SMS ìfìdímúlẹ̀ mọ́.", exceeds: "Ó fi kún un pé kí o mú till tàbí kóòdù oníṣòwò láti ṣọ́ọ̀bù fúnra rẹ̀ nìkan, kí o sì pe padà lórí nọ́mbà tí o mọ̀ nípa nọ́mbà ìsanwó \"tuntun\"." },
      { name: "Àwọn àmì ìkìlọ̀ jìbìtì", objective: "O3", notYet: "Àmì jìbìtì tí kò tó mẹ́rin, tàbí àwọn tí kò yé.", meets: "Ó kọ àwọn jìbìtì mẹ́fà tó wọ́pọ̀ sílẹ̀ pẹ̀lú àmì ìkìlọ̀ fún ọ̀kọ̀ọ̀kan.", exceeds: "Ó fi àpẹẹrẹ gidi kan kún un tí akẹ́kọ̀ọ́ tàbí ẹbí rẹ̀ ti rí, àti bí wọ́n ṣe dá a mọ̀." },
      { name: "Ọ̀nà ìjọba àti wákàtí àkọ́kọ́", objective: "O4", notYet: "Kò sí nọ́mbà ìrànlọ́wọ́, tàbí wọ́n dà á kọ láti orísun tí kì í ṣe ti ìjọba.", meets: "Ó fúnni ní àwọn ọ̀nà ìrànlọ́wọ́, ìdápadà owó àti ìròyìn jìbìtì ìjọba ilé-iṣẹ́ náà (láti ojú-òpó wẹ́ẹ̀bù, app tàbí páálí SIM) àti ìgbésẹ̀ wákàtí àkọ́kọ́.", exceeds: "Ó tún dárúkọ ọ̀nà ẹ̀sùn báńkì àpapọ̀ àti ìgbésẹ̀ ọlọ́pàá, ó sì sọ ibi tí ó ti dà ọ̀nà kọ̀ọ̀kan kọ." },
      { name: "Àyẹ̀wò oṣooṣù àti pínpín", objective: "O5", notYet: "Kò sí àyẹ̀wò déédéé, wọn kò sì pín ètò náà.", meets: "Ó ṣètò àyẹ̀wò àkọsílẹ̀ owó lóṣooṣù, ó sì ka ètò náà pẹ̀lú ẹnì kan nínú ẹbí.", exceeds: "Ó ní òfin pípe padà ti ẹbí, àti àyẹ̀wò àkọ́kọ́ tí ó ti ṣe tí ó sì kọ ọjọ́ rẹ̀ sí i." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ, lẹ́yìn ọjọ́ 30, pé àwọn ń ṣàyẹ̀wò orúkọ kí wọ́n tó tẹ PIN nígbà gbogbo, tí wọ́n sì ń ka àkọsílẹ̀ owó wọn lóṣooṣù",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn dá ìpè tàbí ọ̀rọ̀ jìbìtì mọ̀, tí àwọn sì kọ̀ ọ́ láàárín ọjọ́ 30",
      "Ìdínkù nínú àdánù owó orí fóònù tí àwọn ọmọ ẹgbẹ́ ìfowópamọ́, ẹgbẹ́ ọjà tàbí ẹgbẹ́ àwùjọ alábàáṣiṣẹ́ ń ròyìn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tí ó ní àkáǹtì owó orí fóònù (fóònù lásán tàbí smartphone)",
      "Tábìlì owó ìṣẹ́ àti ọ̀nà ìrànlọ́wọ́ ìjọba ilé-iṣẹ́ náà (ojú-òpó wẹ́ẹ̀bù, app, ìwé àlẹ̀mọ́ ṣọ́ọ̀bù tàbí páálí SIM)",
      "Ìwé àti gègé fún ètò ààbò",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Ó dára fún ẹgbẹ́ ọjà, ẹgbẹ́ ìfowópamọ́ (bí àjọ àti èsúsú), ṣọ́ọ̀ṣì, mọ́ṣáláṣí, ẹgbẹ́ ọ̀dọ́ àti ẹgbẹ́ obìnrin: ẹ ṣe ìdánwò ṣáájú papọ̀, kí ẹ sì ṣe orí kan ní ìpàdé kọ̀ọ̀kan.",
      "Má ṣe ní kí akẹ́kọ̀ọ́ tẹ tàbí sọ PIN tàbí kóòdù gidi nígbà àṣeṣe láéláé. Fi àkójọ hàn lórí fóònù àpẹẹrẹ tàbí nípa yíya àwòrán ojú-iboju.",
      "Kí ìpàdé tó bẹ̀rẹ̀, wá àwọn ìgbésẹ̀ ìdápadà owó àti ìròyìn jìbìtì ìjọba fún àwọn ilé-iṣẹ́ tí ẹgbẹ́ rẹ ń lò ní orílẹ̀-èdè rẹ, láti ojú-òpó wẹ́ẹ̀bù tàbí ṣọ́ọ̀bù àwọn ilé-iṣẹ́ náà fúnra wọn, kí o sì ṣàyẹ̀wò pé wọ́n ṣì wà lọ́wọ́lọ́wọ́.",
      "Pe àwọn ọmọ ẹgbẹ́ láti pín àwọn ọ̀rọ̀ jìbìtì tí wọ́n ti gbà (pẹ̀lú nọ́mbà àdáni tí a bò mọ́lẹ̀), kí ẹ sì tò wọ́n gẹ́gẹ́ bí àmì ìkìlọ̀.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn; má ṣe gba àwọn ètò náà jọ tí akẹ́kọ̀ọ́ bá kọ ìsọfúnni àdáni sínú wọn."
    ]
  }
};
