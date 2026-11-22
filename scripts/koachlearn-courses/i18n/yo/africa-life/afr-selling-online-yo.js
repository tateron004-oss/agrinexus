"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-selling-online.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WA_BUSINESS = { name: "WhatsApp Business: app WhatsApp Business (ojú-ìwé iṣẹ́-òwò, fífi ọjà àti iye owó hàn, ọ̀rọ̀ ìkíni àti ọ̀rọ̀ ìgbà tí o kò sí)", url: "https://whatsappbusiness.com/products/business-app/" };
const NDPC = { name: "Àjọ Ìdáàbòbò Ìsọfúnni Nàìjíríà (NDPC): Òfin Ìdáàbòbò Ìsọfúnni Nàìjíríà 2023", url: "https://ndpc.gov.ng/" };
const ODPC = { name: "Ọ́fíìsì Kọmíṣọ́nnà Ìdáàbòbò Ìsọfúnni, Kenya (Òfin Ìdáàbòbò Ìsọfúnni, 2019)", url: "https://www.odpc.go.ke/" };
const CBK_FRAUD = { name: "Báńkì Àpapọ̀ Kenya: ìdáàbòbò lọ́wọ́ jìbìtì", url: "https://www.centralbank.go.ke/fraud-safety/" };
const CBN_CP = { name: "Báńkì Àpapọ̀ Nàìjíríà (CBN): ìdáàbòbò àwọn oníbàárà", url: "https://www.cbn.gov.ng/Documents/ConsumerProtection.html" };

module.exports = {
  id: "afr-selling-online-yo",
  lang: "yo",
  translationOf: "afr-selling-online",
  category: "Africa: Life and Work",
  name: "Títa Ọjà lórí Ayélujára ní Áfíríkà (WhatsApp Business, Ọjà Ayélujára àti Ìkànnì Àjọlò)",
  skills: "Yíyan ibi tí o máa ta ọjà lórí ayélujára, Ṣíṣètò WhatsApp Business, Yíya fọ́tò ọjà àti kíkọ àpèjúwe ọjà, Dídáhùn àwọn oníbàárà àti píparí títà, Ṣíṣàyẹ̀wò ìsanwó àti yíyẹra fún ìfitónilétí ìsanwó ayédèrú, Fífi ọjà jíṣẹ́ àti pípa ìgbẹ́kẹ̀lé àwọn oníbàárà mọ́",
  outcome: "gba àṣẹ ọjà (order) lórí fóònù: ṣètò ojú-ìwé WhatsApp Business àti àkọsílẹ̀ ọjà, kọ àpèjúwe ọjà tí ó ń tà, dáhùn àwọn oníbàárà kí o sì fìdí àṣẹ múlẹ̀, ṣàyẹ̀wò pé owó ti dé lóòótọ́ kí o tó fi ọjà ránṣẹ́, kí o sì fi ọjà jíṣẹ́ lọ́nà tí yóò mú kí àwọn oníbàárà padà wá.",
  about: [
    "Lónìí, ọ̀pọ̀ oníbàárà ń rí àwọn olùtajà lórí WhatsApp, Facebook, Instagram, TikTok àti lórí ọjà ayélujára bí Jumia àti Jiji. Ẹ̀kọ́ yìí wà fún àwọn oníṣòwò, oníṣẹ́ ọwọ́, àwọn tí ń se oúnjẹ nílé, àwọn telọ̀, àgbẹ̀ àti àwọn oníṣọ́ọ̀bù kékeré ní Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire, Morocco àti káàkiri Áfíríkà tí wọ́n fẹ́ tà kọjá òpópónà wọn.",
    "O máa yan ibi tí o máa tà, ṣètò ojú-ìwé WhatsApp Business àti àkọsílẹ̀ ọjà, ya fọ́tò tó dára pẹ̀lú fóònù lásán, kọ àpèjúwe ọjà pẹ̀lú iye owó tó yé, dáhùn àwọn oníbàárà kíákíá, fìdí àṣẹ múlẹ̀ ní kíkọ, ṣàyẹ̀wò ìsanwó nínú app owó fóònù (mobile money) tàbí app báńkì tìrẹ, kí o sì ṣètò bí o ṣe máa fi ọjà jíṣẹ́ àti bí o ṣe máa gba ọjà padà.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" fún iṣẹ́-òwò tìrẹ. Ó ń ṣiṣẹ́ lórí fóònù Android lásán, kò sì ń lo dátà púpọ̀. Àwọn iye owó inú ẹ̀kọ́ yìí jẹ́ àpẹẹrẹ lásán, kì í ṣe iye owó tàbí owó iṣẹ́ gidi."
  ],
  finalTask: "Ṣe ètò ṣọ́ọ̀bù ayélujára ojú-ìwé kan fún iṣẹ́-òwò rẹ: ibi tí o máa tà àti ìdí rẹ̀, ọ̀rọ̀ ojú-ìwé WhatsApp Business rẹ, àpèjúwe ọjà mẹ́ta (àkọsílẹ̀ nípa fọ́tò, àkọlé, iye owó ní owó orílẹ̀-èdè rẹ, àlàyé àti ìfijíṣẹ́), ọ̀rọ̀ ìfìdímúlẹ̀ àṣẹ tí o ti fi pamọ́, òfin rẹ fún ṣíṣàyẹ̀wò ìsanwó, àti ìlànà rẹ fún ìfijíṣẹ́ àti gbígba ọjà padà.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn oníṣòwò, àwọn olùtajà ní ọjà, oníṣẹ́ ọwọ́, àwọn tí ń se oúnjẹ nílé, telọ̀, onírun, àgbẹ̀ àti àwọn oníṣọ́ọ̀bù kékeré ní ìlú àti abúlé káàkiri Áfíríkà (Kenya, Nàìjíríà, Ghana, àwọn orílẹ̀-èdè tí ń sọ Faransé ní Ìwọ̀-Oòrùn àti Àárín Áfíríkà, Àríwá Áfíríkà). Ọ̀pọ̀ lára wọn jẹ́ obìnrin àti ọ̀dọ́; ọ̀pọ̀ ti ń bá oníbàárà sọ̀rọ̀ lórí WhatsApp.",
    startingPoint: "Wọ́n lè lo WhatsApp láti bá ènìyàn sọ̀rọ̀ àti láti fi fọ́tò ránṣẹ́, wọ́n sì lè gba owó fóònù (mobile money). Díẹ̀ ló ní ojú-ìwé iṣẹ́-òwò, àkọsílẹ̀ ọjà, iye owó tó yé lórí ayélujára, ìfìdímúlẹ̀ àṣẹ ní kíkọ, tàbí òfin fún ṣíṣàyẹ̀wò ìsanwó. Ọ̀rọ̀ ìsanwó ayédèrú ti tan àwọn kan jẹ.",
    gap: "Àwọn oníbàárà ń wá ọjà, wọ́n sì ń ra ọjà lórí fóònù wọn, ṣùgbọ́n ọ̀pọ̀ olùtajà kékeré ń pàdánù títà nítorí ìdáhùn tó lọ́ra, iye owó tí kò yé àti fọ́tò tí kò dára, wọ́n sì ń pàdánù owó àti ọjà sí ìfitónilétí ìsanwó ayédèrú. Àwọn akẹ́kọ̀ọ́ nílò ọ̀nà tó rọrùn, tí kò léwu, láti fi ọjà hàn, gba àṣẹ, ṣàyẹ̀wò ìsanwó àti fi ọjà jíṣẹ́, kí títà lórí ayélujára lè mú owó wọlé dípò ewu.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń sọ Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì (ẹ̀kọ́ náà tún wà ní Faransé àti Lárúbáwá)",
      "Ẹ̀rọ: fóònù Android lásán, tí wọ́n sábà máa ń lò pọ̀; dátà wọ́n, nítorí náà a máa ń jẹ́ kí fọ́tò àti fídíò kéré",
      "Owó: owó díẹ̀ tàbí kò sí owó fún ìpolówó; irinṣẹ́ ọ̀fẹ́ ni a kọ́kọ́ ń lò",
      "Òfin àti owó iṣẹ́: àwọn ohun inú app, owó tí ọjà ayélujára ń gbà àti òfin ìdáàbòbò ìsọfúnni ń yí padà láti orílẹ̀-èdè kan sí òmíràn; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò inú app, ojú-ìwé olùtajà ọjà ayélujára náà tàbí àjọ ìjọba orílẹ̀-èdè wọn",
      "Ààbò: ewu jìbìtì ga; má ṣe pín PIN, ọ̀rọ̀ aṣínà tàbí kóòdù ìgbà-kan láéláé"
    ],
    prerequisites: "Kí o lè fi ọ̀rọ̀ àti fọ́tò ránṣẹ́ lórí WhatsApp. Ó wúlò: \"Lílo Owó Fóònù (Mobile Money) Láìléwu\" nínú ẹ̀ka yìí."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí o bá ní àwọn ọjà rẹ, àwọn oníbàárà rẹ àti ìkànnì ayélujára méjì tàbí mẹ́ta", action: "yan ibi tí o máa ta ọjà lórí ayélujára kí o sì kọ ìdí rẹ̀ sílẹ̀", standard: "kí o sì dárúkọ owó rẹ̀, iṣẹ́ tí ó gbà àti àwọn tí ń rà níbẹ̀ fún ìkànnì kọ̀ọ̀kan" },
    { id: "O2", condition: "Pẹ̀lú fóònù tí ó ní app WhatsApp Business", action: "ṣètò ojú-ìwé iṣẹ́-òwò àti àkọsílẹ̀ ọjà pẹ̀lú iye owó", standard: "pẹ̀lú orúkọ, àpèjúwe kúkúrú, àkókò iṣẹ́, agbègbè tí o ń sìn àti ó kéré tán ọjà mẹ́ta" },
    { id: "O3", condition: "Tí o bá ní ọ̀kan lára àwọn ọjà rẹ", action: "ya fọ́tò tó yé kí o sì kọ àpèjúwe ọjà pẹ̀lú àkọlé, iye owó, àlàyé àti ìfijíṣẹ́", standard: "tí oníbàárà fi lè rà á láìbéèrè ìbéèrè ìpìlẹ̀ kankan" },
    { id: "O4", condition: "Nígbà tí oníbàárà bá fi ìbéèrè tàbí àṣẹ ránṣẹ́", action: "dáhùn pẹ̀lú ọ̀wọ̀ kí o sì fìdí àṣẹ náà múlẹ̀ ní kíkọ", standard: "láàárín àkókò iṣẹ́ tí o kéde, pẹ̀lú ọjà, iye, iye owó, ìfijíṣẹ́ àti ìsanwó nínú ọ̀rọ̀ kan" },
    { id: "O5", condition: "Kí o tó fi ọjà tí wọ́n san fún pẹ̀lú owó fóònù tàbí báńkì ránṣẹ́", action: "ṣàyẹ̀wò nínú app tìrẹ tàbí ọ̀rọ̀ ìjọba láti ọ̀dọ̀ ilé-iṣẹ́ owó rẹ pé owó náà ti dé", standard: "láìgbẹ́kẹ̀lé àwòrán ojú-iboju (screenshot), ọ̀rọ̀ tí wọ́n dárí sí ọ tàbí ẹni tó pè ọ́, àti láìpín PIN láéláé" },
    { id: "O6", condition: "Nígbà tí o bá ń fi àṣẹ jíṣẹ́", action: "kọ ìlànà ìfijíṣẹ́ àti gbígba ọjà padà tí ó ń dáàbò bo ìgbẹ́kẹ̀lé àti ìsọfúnni àwọn oníbàárà, kí o sì tẹ̀lé e", standard: "tí ó sọ agbègbè ìfijíṣẹ́, owó, àkókò àti gbígba ọjà padà, tí o sì pa nọ́mbà àwọn oníbàárà mọ́ ní ìkọ̀kọ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣí ṣọ́ọ̀bù rẹ lórí ayélujára",
      lessons: [
        {
          title: "Yíyan ibi tí o máa ta ọjà lórí ayélujára",
          objectives: ["O1"],
          minutes: 5,
          goal: "Yan ibi kan tàbí méjì láti tà lórí ayélujára tí ó bá ọjà àti oníbàárà rẹ mu.",
          text: [
            "O kò nílò láti wà níbi gbogbo. Yan ibi tí àwọn oníbàárà rẹ ti wà tẹ́lẹ̀, àti ibi tí o ti lè máa dáhùn ọ̀rọ̀. Títà lórí ayélujára dà bí ṣíṣí ìsọ̀ kejì: ó ń ṣiṣẹ́ kìkì tí ẹnìkan bá wà níbẹ̀ láti sìn.",
            "Àwọn app ìbánisọ̀rọ̀ bí WhatsApp dára fún àwọn oníbàárà tí ń rà déédéé àti àwọn aládùúgbò. Ìkànnì àjọlò (social media) bí Facebook, Instagram àti TikTok ń ran àwọn ènìyàn tuntun lọ́wọ́ láti rí ọ nípasẹ̀ fọ́tò àti fídíò kúkúrú. Àwọn ọjà ayélujára bí Jumia, Jiji, Kilimall àti Konga ti ní ọ̀pọ̀ olùrà tí ń wá ọjà, ṣùgbọ́n wọ́n ní òfin, àwọn kan sì ń gba commission (apá kan nínú títà kọ̀ọ̀kan) tàbí owó fún ìpolówó.",
            "Fún ìkànnì kọ̀ọ̀kan, kọ nǹkan mẹ́ta: àwọn tí ń rà níbẹ̀, iye tí ó ń ná ọ (dátà, commission, ìpolówó, ìfijíṣẹ́) àti àkókò tí ó ń gbà lójoojúmọ́. Àpẹẹrẹ: Ama ní Kumasi ń ta ìlẹ̀kẹ̀. Ó ń lo WhatsApp fún àwọn oníbàárà rẹ̀ déédéé, ó sì fi Instagram kún un láti dé ọ̀dọ̀ àwọn olùrà tuntun ní Accra. Ẹni tí ń ṣe bàtà ní Dakar lè bẹ̀rẹ̀ pẹ̀lú WhatsApp àti Facebook, kí ó sì fi ọjà ayélujára kún un lẹ́yìn náà.",
            "Kí o tó dara pọ̀ mọ́ ọjà ayélujára kan, ka ojú-ìwé olùtajà rẹ̀: owó tí ó ń gbà, bí ó ṣe ń san owó fún ọ, ìgbà wo, àti ohun tí ó ń ṣẹlẹ̀ nígbà tí wọ́n bá dá ọjà padà. Àwọn nǹkan wọ̀nyí ń yí padà, nítorí náà ṣàyẹ̀wò ojú-òpó wẹ́ẹ̀bù ọjà ayélujára náà fúnra rẹ̀, kì í ṣe ọ̀rọ̀ tí wọ́n dárí sí ọ."
          ],
          steps: ["Kọ ibi tí àwọn oníbàárà rẹ ti ń sọ̀rọ̀, ń wo nǹkan, tí wọ́n sì ń rajà.", "Fún ìkànnì kọ̀ọ̀kan, kọ àwọn tí ń rà níbẹ̀, owó rẹ̀ àti àkókò tí ó ń gbà.", "Yan ìkànnì pàtàkì kan àti, ó pọ̀ jù, ọ̀kan sí i.", "Fún ọjà ayélujára, ka ojú-ìwé olùtajà rẹ̀ fúnra rẹ̀ fún owó iṣẹ́, ìsanwó àti gbígba ọjà padà."],
          words: [["Ìkànnì (channel)", "ibi tí o ti ń ta ọjà tàbí bá oníbàárà sọ̀rọ̀, bí WhatsApp, Facebook tàbí ọjà ayélujára."], ["Ọjà ayélujára (marketplace)", "ojú-òpó wẹ́ẹ̀bù tàbí app tí ọ̀pọ̀ olùtajà ti ń fi ọjà hàn, tí àwọn olùrà sì ti ń wá ọjà, bí Jumia tàbí Jiji."], ["Commission", "apá kan nínú títà kọ̀ọ̀kan tí ọjà ayélujára ń gbà gẹ́gẹ́ bí owó iṣẹ́ rẹ̀."]],
          slides: [
            { title: "Tà níbi tí àwọn oníbàárà rẹ wà", bullets: ["Níbi tí o ti lè dáhùn ọ̀rọ̀ nìkan", "Ayélujára jẹ́ ìsọ̀ kejì: ẹnìkan gbọ́dọ̀ wà láti sìn"] },
            { title: "Oríṣi ìkànnì mẹ́ta", bullets: ["App ìbánisọ̀rọ̀: WhatsApp fún àwọn oníbàárà déédéé", "Ìkànnì àjọlò: Facebook, Instagram, TikTok láti jẹ́ kí wọ́n rí ọ", "Ọjà ayélujára: Jumia, Jiji, Kilimall, Konga"] },
            { title: "Fi ìkànnì kọ̀ọ̀kan wéra", bullets: ["Àwọn tí ń rà níbẹ̀", "Owó rẹ̀: dátà, commission, ìpolówó, ìfijíṣẹ́", "Àkókò tí ó ń gbà lójoojúmọ́"] },
            { title: "Bẹ̀rẹ̀ díẹ̀díẹ̀", bullets: ["Ìkànnì pàtàkì kan, ó pọ̀ jù ọ̀kan sí i", "Kọ́kọ́ ka ojú-ìwé olùtajà ọjà ayélujára náà fúnra rẹ̀"] }
          ],
          tryIt: "Ya tábìlì kékeré pẹ̀lú ìkànnì méjì tàbí mẹ́ta tí o lè lò. Fún ọ̀kọ̀ọ̀kan, kọ àwọn tí ń rà níbẹ̀, owó rẹ̀ àti àkókò tí ó ń gbà. Fa òrùka yí èyí tí o máa fi bẹ̀rẹ̀.",
          youCanNow: "fi àwọn ìkànnì ayélujára wéra nípa owó, iṣẹ́ àti oníbàárà, kí o sì yan ibi tí o máa bẹ̀rẹ̀.",
          quickCheck: [
            { objective: "O1", q: "O lè dáhùn ọ̀rọ̀ fún wákàtí kan lójúmọ́. Kí ni ìbẹ̀rẹ̀ tó dára jù?", options: ["Ṣí àkáǹtì lórí app mẹ́fà lẹ́ẹ̀kan náà", "Bẹ̀rẹ̀ pẹ̀lú ìkànnì pàtàkì kan tí o lè tẹ̀lé", "Fi ọjà sórí ayélujára lẹ́ẹ̀kan kí o má sì dáhùn láéláé", "San owó ìpolówó kí o tó ní àkọsílẹ̀ ọjà"], answer: 1, why: "Ìkànnì ń ṣiṣẹ́ kìkì tí o bá ń dáhùn oníbàárà, nítorí náà bẹ̀rẹ̀ pẹ̀lú ohun tí o lè tẹ̀lé." },
            { objective: "O1", q: "Níbo ni o ti ń ṣàyẹ̀wò owó tí ọjà ayélujára ń gbà lọ́wọ́ olùtajà?", options: ["Ọ̀rọ̀ WhatsApp tí wọ́n dárí sí ọ", "Àmòdi ọ̀rẹ́ kan", "Ojú-ìwé olùtajà ọjà ayélujára náà fúnra rẹ̀", "Ọ̀rọ̀ kan lábẹ́ fídíò"], answer: 2, why: "Owó iṣẹ́ àti òfin ń yí padà, ojú-ìwé ọjà ayélujára náà fúnra rẹ̀ nìkan ló sì ṣeé gbẹ́kẹ̀lé." }
          ]
        },
        {
          title: "Ṣíṣètò WhatsApp Business: ojú-ìwé àti àkọsílẹ̀ ọjà",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣètò ojú-ìwé WhatsApp Business àti àkọsílẹ̀ ọjà pẹ̀lú iye owó.",
          text: [
            "WhatsApp Business jẹ́ app ọ̀tọ̀ sí WhatsApp lásán; ilé-iṣẹ́ kan náà ló ṣe é fún àwọn iṣẹ́-òwò kékeré. Gbà á láti ilé ìtajà app gidi nìkan (Google Play lórí Android). Ó ń jẹ́ kí o fi ojú-ìwé iṣẹ́-òwò hàn, fi àwọn ọjà rẹ àti iye owó wọn hàn, kí o sì fi ọ̀rọ̀ ìkíni àti ọ̀rọ̀ ìgbà tí o kò sí ránṣẹ́.",
            "Ojú-ìwé iṣẹ́-òwò rẹ ni àmì ṣọ́ọ̀bù rẹ. Kọ orúkọ iṣẹ́-òwò rẹ, àpèjúwe kúkúrú ohun tí o ń tà, agbègbè tàbí àdírẹ́sì rẹ, àkókò tí o ń ṣí, àti bí àwọn oníbàárà ṣe lè sanwó. Lo àmì (logo) tó yé tàbí fọ́tò ìsọ̀ rẹ tàbí ọjà rẹ tó dára jù.",
            "Lẹ́yìn náà fi àwọn ọjà rẹ sínú àkọsílẹ̀ ọjà (app náà ń pè é ní catalogue nínú ọ̀pọ̀ ẹ̀dà): fọ́tò, orúkọ, iye owó ní owó orílẹ̀-èdè rẹ àti àpèjúwe kúkúrú. Àwọn oníbàárà lè wò ó, kí wọ́n sì fi ọjà kan ránṣẹ́ sí ọ nínú ìjíròrò. Àpẹẹrẹ: Wanjiku ní Nakuru fi \"Bàtà ìlẹ̀kẹ̀ Maasai, ìwọ̀n 37-41, KES 1,200\" kún un (iye owó àpẹẹrẹ).",
            "Àwọn mẹ́nù yàtọ̀ láti fóònù kan sí òmíràn àti láti ẹ̀dà kan sí òmíràn. Tí o kò bá rí ètò kan, ṣí settings app náà kí o sì wá àwọn irinṣẹ́ iṣẹ́-òwò (business tools). O tún lè ṣètò ọ̀rọ̀ ìkíni kúkúrú fún oníbàárà tuntun àti ọ̀rọ̀ ìgbà tí o kò sí fún ìgbà tí o bá ti tì."
          ],
          steps: ["Fi WhatsApp Business sórí fóònù láti ilé ìtajà app gidi.", "Kọ ojú-ìwé iṣẹ́-òwò: orúkọ, àpèjúwe, agbègbè, àkókò, ọ̀nà ìsanwó.", "Fi àmì (logo) tàbí fọ́tò tó yé kún un.", "Fi ó kéré tán ọjà mẹ́ta kún un pẹ̀lú fọ́tò, orúkọ, iye owó àti àpèjúwe kúkúrú.", "Ṣètò ọ̀rọ̀ ìkíni àti ọ̀rọ̀ ìgbà tí o kò sí."],
          words: [["Ojú-ìwé iṣẹ́-òwò (business profile)", "ojú-ìwé tí ó ń fi orúkọ iṣẹ́-òwò rẹ, àpèjúwe, àkókò iṣẹ́ àti ibi tí o wà hàn àwọn oníbàárà."], ["Àkọsílẹ̀ ọjà (catalogue)", "àkọsílẹ̀ àwọn ọjà rẹ pẹ̀lú fọ́tò àti iye owó tí àwọn oníbàárà lè wò nínú app."], ["Ọ̀rọ̀ ìgbà tí o kò sí (away message)", "ìdáhùn aládàáṣe tí ó ń lọ nígbà tí o bá ti tì."]],
          slides: [
            { title: "WhatsApp Business", bullets: ["App ọ̀fẹ́ fún àwọn iṣẹ́-òwò kékeré", "Gbà á láti ilé ìtajà app gidi nìkan", "Ojú-ìwé, àkọsílẹ̀ ọjà, ọ̀rọ̀ ìkíni àti ọ̀rọ̀ ìgbà tí o kò sí"] },
            { title: "Ojú-ìwé rẹ ni àmì ṣọ́ọ̀bù rẹ", bullets: ["Orúkọ iṣẹ́-òwò àti ohun tí o ń tà", "Agbègbè tàbí àdírẹ́sì àti àkókò tí o ń ṣí", "Bí àwọn oníbàárà ṣe lè sanwó", "Àmì (logo) tàbí fọ́tò tó yé"] },
            { title: "Àkọsílẹ̀ ọjà rẹ", bullets: ["Fọ́tò, orúkọ, iye owó ní owó orílẹ̀-èdè rẹ", "Àpèjúwe kúkúrú: ìwọ̀n, àwọ̀, iye", "Ó kéré tán ọjà mẹ́ta láti bẹ̀rẹ̀"] },
            { title: "Ọ̀rọ̀ aládàáṣe", bullets: ["Ìkíni fún oníbàárà tuntun", "Ọ̀rọ̀ ìgbà tí o kò sí nígbà tí o bá ti tì", "Mẹ́nù yàtọ̀: wò inú settings, business tools"] }
          ],
          tryIt: "Fi WhatsApp Business sórí fóònù rẹ (tàbí ṣí i tí o bá ti ní i). Kọ ojú-ìwé rẹ kí o sì fi ọjà mẹ́ta kún un pẹ̀lú fọ́tò, orúkọ, iye owó àti ìlà àpèjúwe kan. Ní kí ọ̀rẹ́ kan wò ó kí ó sì sọ nǹkan kan tí kò yé e fún ọ.",
          youCanNow: "ṣètò ojú-ìwé WhatsApp Business àti àkọsílẹ̀ ọjà tí àwọn oníbàárà lè wò.",
          quickCheck: [
            { objective: "O2", q: "Àlàyé wo ló yẹ kí ó wà lórí ojú-ìwé iṣẹ́-òwò rẹ?", options: ["PIN owó fóònù rẹ", "Àkókò tí o ń ṣí", "Nọ́mbà fóònù àwọn oníbàárà rẹ", "Ọ̀rọ̀ aṣínà rẹ"], answer: 1, why: "Àkókò iṣẹ́ ń sọ fún àwọn oníbàárà ìgbà tí o máa dáhùn; PIN, ọ̀rọ̀ aṣínà àti nọ́mbà oníbàárà wà ní ìkọ̀kọ̀." },
            { objective: "O2", q: "Ọjà kan nínú àkọsílẹ̀ rẹ ní fọ́tò ṣùgbọ́n kò ní iye owó. Kí ni o máa fi kún un?", options: ["Kò sí nǹkan; àwọn oníbàárà fẹ́ràn láti béèrè", "Àdírẹ́sì ilé rẹ", "Ìtàn gígùn nípa ṣọ́ọ̀bù náà", "Iye owó ní owó orílẹ̀-èdè rẹ"], answer: 3, why: "Iye owó tó yé ń fi àkókò pamọ́, ó sì ń dá àwọn oníbàárà dúró láti lọ láìbéèrè." }
          ],
          sources: [WA_BUSINESS]
        },
        {
          title: "Fọ́tò àti àpèjúwe ọjà tí ó ń tà",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ya fọ́tò ọjà tó yé kí o sì kọ àpèjúwe tí oníbàárà lè fi rà á.",
          text: [
            "Oníbàárà lórí ayélujára kò lè fọwọ́ kan ọjà rẹ, nítorí náà fọ́tò àti ọ̀rọ̀ ló gbọ́dọ̀ ṣe iṣẹ́ náà. Ya fọ́tò ní ìmọ́lẹ̀ ọ̀sán nítòsí fèrèsé tàbí níta lábẹ́ òjìji. Lo ẹ̀yìn tí kò ní àwòrán bí aṣọ tàbí ògiri. Nu ojú kámẹ́rà. Fi gbogbo ọjà náà hàn, lẹ́yìn náà fọ́tò kan láti tòsí, àti nǹkan kan tí ó ń fi ìtóbi rẹ̀ hàn, bí ọwọ́.",
            "Àpèjúwe ọjà tó dára ń dáhùn ìbéèrè oníbàárà kí ó tó béèrè: àkọlé tó yé (ohun tí ó jẹ́), iye owó ní owó orílẹ̀-èdè rẹ, ìwọ̀n, àwọ̀, iye tàbí ìwúwo, ohun tí wọ́n fi ṣe é, àti bí o ṣe ń fi jíṣẹ́ àti ibi tí o ń fi jíṣẹ́ sí. Àpẹẹrẹ: \"Ìpara ara òrí (shea butter), ìgò 250 g, kò ní òórùn, GHS 60. Ìfijíṣẹ́ ní Tamale lónìí; àwọn ìlú míì nípasẹ̀ ẹrù ọkọ̀ èrò.\" (iye owó àpẹẹrẹ).",
            "Jẹ́ olóòótọ́. Fi ọjà rẹ gidi hàn, kì í ṣe àwòrán láti orí íńtánẹ́ẹ̀tì, kí o sì sọ tí àwọ̀ bá lè yàtọ̀ díẹ̀. Fọ́tò olóòótọ́ túmọ̀ sí pé ọjà díẹ̀ ló máa padà wá, ìgbẹ́kẹ̀lé sì máa pọ̀ sí i. Jẹ́ kí fáìlì kéré láti fi dátà pamọ́: fọ́tò kan tó yé dára ju fọ́tò mẹ́wàá tí kò hàn kedere."
          ],
          steps: ["Nu ọjà náà àti ojú kámẹ́rà.", "Lo ìmọ́lẹ̀ ọ̀sán àti ẹ̀yìn tí kò ní àwòrán.", "Ya fọ́tò gbogbo ọjà, fọ́tò kan láti tòsí àti ọ̀kan tí ó ń fi ìtóbi hàn.", "Kọ àkọlé, iye owó, ìwọ̀n tàbí ìwúwo, ohun tí wọ́n fi ṣe é, àti ìfijíṣẹ́.", "Kà á bí oníbàárà: ṣé o lè rà á láìbéèrè ìbéèrè kankan?"],
          words: [["Àpèjúwe ọjà (listing)", "fọ́tò àti ọ̀rọ̀ tí ó ń fi ọjà kan tí ó wà fún títà hàn."], ["Fọ́tò láti tòsí (close-up)", "fọ́tò tí a yà nítòsí ọjà láti fi àwọn kékeré rẹ̀ hàn."]],
          slides: [
            { title: "Fọ́tò tí àwọn oníbàárà gbẹ́kẹ̀lé", bullets: ["Ìmọ́lẹ̀ ọ̀sán, ẹ̀yìn tí kò ní àwòrán, kámẹ́rà tó mọ́", "Gbogbo ọjà, fọ́tò láti tòsí, àti nǹkan tí ó ń fi ìtóbi hàn", "Ọjà rẹ gidi, kì í ṣe àwòrán láti íńtánẹ́ẹ̀tì láéláé"] },
            { title: "Àpèjúwe tí ó ń dáhùn ìbéèrè", bullets: ["Àkọlé: ohun tí ó jẹ́", "Iye owó ní owó orílẹ̀-èdè rẹ", "Ìwọ̀n, àwọ̀, ìwúwo, ohun tí wọ́n fi ṣe é", "Bí o ṣe ń fi jíṣẹ́ àti ibi tí o ń fi jíṣẹ́ sí"] },
            { title: "Fi dátà pamọ́, kọ́ ìgbẹ́kẹ̀lé", bullets: ["Fọ́tò kan tó yé dára ju mẹ́wàá tí kò hàn kedere", "Sọ tí àwọ̀ bá lè yàtọ̀", "Àpèjúwe olóòótọ́ = ọjà díẹ̀ ló máa padà"] }
          ],
          tryIt: "Yan ọjà kan. Ya fọ́tò mẹ́ta (gbogbo rẹ̀, láti tòsí, ìtóbi) ní ìmọ́lẹ̀ ọ̀sán lórí ẹ̀yìn tí kò ní àwòrán. Kọ àpèjúwe pẹ̀lú àkọlé, iye owó, àlàyé àti ìfijíṣẹ́. Kà á bí oníbàárà kí o sì tún ohunkóhun tí o máa ní láti béèrè nípa rẹ̀ ṣe.",
          youCanNow: "ya fọ́tò ọjà tó yé pẹ̀lú fóònù lásán kí o sì kọ àpèjúwe tí àwọn oníbàárà lè fi rà á.",
          quickCheck: [
            { objective: "O3", q: "Ìmọ́lẹ̀ wo ló dára jù fún fọ́tò ọjà?", options: ["Ìmọ́lẹ̀ ọ̀sán nítòsí fèrèsé tàbí lábẹ́ òjìji", "Yàrá òkùnkùn pẹ̀lú flash", "Lábẹ́ iná aláwọ̀", "Níta ní alẹ́"], answer: 0, why: "Ìmọ́lẹ̀ ọ̀sán tí kò le ń fi àwọ̀ gidi àti àwọn kékeré hàn láìsí òjìji líle." },
            { objective: "O3", q: "Àpèjúwe wo ló jẹ́ kí oníbàárà lè rà láìbéèrè?", options: ["\"Àpò dáradára. DM.\"", "\"Àpò fún títà\"", "\"Àpò awọ\"", "\"Àpò ọwọ́ awọ aláwọ̀ ilẹ̀, 30 x 25 cm, NGN 18,000, ìfijíṣẹ́ ní Èkó láàárín ọjọ́ 2\""], answer: 3, why: "Ó sọ ohun tí ó jẹ́, ìwọ̀n, iye owó àti ìfijíṣẹ́, kí oníbàárà lè pinnu." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣí ṣọ́ọ̀bù rẹ lórí ayélujára",
        questions: [
          { objective: "O1", q: "Nǹkan mẹ́ta wo ni o máa fi wéra fún ìkànnì ayélujára kọ̀ọ̀kan?", options: ["Àwọn tí ń rà níbẹ̀, owó rẹ̀, àti àkókò tí ó ń gbà", "Àmì rẹ̀, àwọ̀ rẹ̀ àti ọjọ́ orí rẹ̀", "Iye ọ̀rẹ́ tí ń lò ó fún ìbánisọ̀rọ̀", "Bóyá ó jẹ́ tuntun nìkan"], answer: 0, why: "Oníbàárà, owó àti àkókò ló ń pinnu bóyá ìkànnì kan máa mú owó wọlé fún ọ." },
          { objective: "O1", q: "Ọjà ayélujára kan ń gba apá kan nínú títà kọ̀ọ̀kan. Kí ni a ń pè é?", options: ["Owó ìdógò", "Owó tí a dá padà", "Commission", "Ìkíni"], answer: 2, why: "Commission ni ìpín nínú títà kọ̀ọ̀kan tí ọjà ayélujára ń gbà gẹ́gẹ́ bí owó iṣẹ́ rẹ̀." },
          { objective: "O2", q: "Níbo ni o yẹ kí o ti gba app WhatsApp Business?", options: ["Link láti nọ́mbà tí o kò mọ̀", "Ilé ìtajà app gidi", "Fáìlì tí àjèjì kan fi ránṣẹ́ sí ọ", "Ìpolówó tí ó yọ jáde lójijì"], answer: 1, why: "Ilé ìtajà app gidi ń dá app ayédèrú àti malware dúró kúrò lórí fóònù rẹ." },
          { objective: "O2", q: "O máa ń tì ní agogo 7 alẹ́. Kí ló ń ran àwọn oníbàárà tí ń kọ̀wé ní alẹ́ lọ́wọ́?", options: ["Pípa fóònù rẹ títí láé", "Pípa ọ̀rọ̀ wọn rẹ́", "Fífi PIN rẹ dáhùn", "Ọ̀rọ̀ ìgbà tí o kò sí tí ó sọ ìgbà tí o máa dáhùn"], answer: 3, why: "Ọ̀rọ̀ ìgbà tí o kò sí ń sọ fún àwọn oníbàárà pé o ti rí wọn àti ìgbà tí o máa dáhùn." },
          { objective: "O3", q: "Àwọ̀ ọjà rẹ máa ń yàtọ̀ lórí ojú-iboju oríṣiríṣi. Kí ni o máa kọ?", options: ["Kò sí nǹkan", "\"Àwọ̀ lè yàtọ̀ díẹ̀ sí ti fọ́tò\"", "\"A kì í gba ọjà padà láéláé\"", "Lo àwòrán tó dára jù láti íńtánẹ́ẹ̀tì"], answer: 1, why: "Jíjẹ́ olóòótọ́ nípa àwọ̀ ń dènà ẹjọ́, ó sì ń kọ́ ìgbẹ́kẹ̀lé." }
        ]
      }
    },
    {
      name: "Orí 2: Títà, gbígba owó àti fífi ọjà jíṣẹ́",
      lessons: [
        {
          title: "Dídáhùn àwọn oníbàárà àti píparí títà",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dáhùn oníbàárà kí o sì fìdí àṣẹ múlẹ̀ nínú ọ̀rọ̀ kan tó yé.",
          text: [
            "Lórí ayélujára, olùtajà tí ó kọ́kọ́ dáhùn tí ìdáhùn rẹ̀ sì yé ló sábà máa ń rí títà náà. Dáhùn láàárín àkókò iṣẹ́ rẹ, kí oníbàárà, kí o sì dáhùn ìbéèrè gan-an tí ó béèrè. Tí o kò bá mọ̀, sọ ìgbà tí o máa wádìí rẹ̀.",
            "Fi àwọn ìdáhùn kúkúrú tí o sábà máa ń fi ránṣẹ́ pamọ́, bí àkọsílẹ̀ iye owó rẹ, agbègbè ìfijíṣẹ́ àti ọ̀nà ìsanwó. WhatsApp Business ń jẹ́ kí o fi ìdáhùn pamọ́ kí o sì tún lò wọ́n; mẹ́nù yàtọ̀, nítorí náà wò inú business tools. Èyí ń dín títẹ̀ ọ̀rọ̀ kù, ó sì ń jẹ́ kí ìdáhùn rẹ jẹ́ ọ̀kan náà nígbà gbogbo.",
            "Nígbà tí oníbàárà bá ti ṣetán, fìdí àṣẹ múlẹ̀ nínú ọ̀rọ̀ kan: ọjà, iye, iye owó, ibi ìfijíṣẹ́ àti owó rẹ̀, ọjọ́ ìfijíṣẹ́, àti bí wọ́n ṣe máa sanwó. Ní kí wọ́n dáhùn \"Bẹ́ẹ̀ ni\" láti fìdí rẹ̀ múlẹ̀. Àpẹẹrẹ láti Abidjan: \"Bonjour Awa. Àṣẹ: aṣọ àdìrẹ wax 2, ìwọ̀n M, 15,000 XOF ọ̀kọ̀ọ̀kan = 30,000 XOF. Ìfijíṣẹ́ sí Cocody ní ọjọ́ Àbámẹ́ta, 1,000 XOF. Ìsanwó pẹ̀lú owó fóònù kí a tó fi jíṣẹ́. Dáhùn OUI láti fìdí rẹ̀ múlẹ̀.\" (iye owó àpẹẹrẹ).",
            "Jẹ́ oníwà rere, kódà nígbà tí oníbàárà bá ń ná ọjà gidigidi tàbí tí ó bá ń sọ̀rọ̀ àìdára. Má ṣe bú oníbàárà láéláé, má sì ṣe fi ọ̀rọ̀ oníbàárà sí gbangba."
          ],
          steps: ["Kí oníbàárà kí o sì dáhùn ìbéèrè gan-an tí ó béèrè.", "Lo ìdáhùn tí o ti fi pamọ́ fún iye owó, ìfijíṣẹ́ àti ìsanwó.", "Fìdí rẹ̀ múlẹ̀: ọjà, iye, iye owó, ibi ìfijíṣẹ́, owó àti ọjọ́ rẹ̀, ọ̀nà ìsanwó.", "Ní kí oníbàárà dáhùn \"Bẹ́ẹ̀ ni\" kí o tó ṣètò àṣẹ náà."],
          words: [["Ìdáhùn tí a fi pamọ́ (quick reply)", "ọ̀rọ̀ tí o fi pamọ́ sínú app tí o lè tún fi ránṣẹ́ pẹ̀lú ìtẹ̀ díẹ̀."], ["Ìfìdímúlẹ̀ àṣẹ (order confirmation)", "ọ̀rọ̀ kan tí ó ń kọ gbogbo ohun tí oníbàárà gbà láti rà, àti bí wọ́n ṣe máa sanwó àti bí a ṣe máa fi jíṣẹ́."]],
          slides: [
            { title: "Ìdáhùn kíákíá tó yé ń mú títà wá", bullets: ["Dáhùn láàárín àkókò iṣẹ́ rẹ", "Kí oníbàárà kí o sì dáhùn ìbéèrè gan-an", "O kò mọ̀? Sọ ìgbà tí o máa wádìí rẹ̀"] },
            { title: "Fi ìdáhùn tí o sábà ń fi ránṣẹ́ pamọ́", bullets: ["Àkọsílẹ̀ iye owó", "Agbègbè ìfijíṣẹ́ àti owó rẹ̀", "Ọ̀nà ìsanwó"] },
            { title: "Fìdí gbogbo àṣẹ múlẹ̀ ní kíkọ", bullets: ["Ọjà, iye àti iye owó", "Ibi ìfijíṣẹ́, owó àti ọjọ́ rẹ̀", "Ọ̀nà ìsanwó", "Oníbàárà dáhùn \"Bẹ́ẹ̀ ni\" láti fìdí rẹ̀ múlẹ̀"] }
          ],
          tryIt: "Kọ ọ̀rọ̀ ìfìdímúlẹ̀ àṣẹ fún iṣẹ́-òwò rẹ kí o sì fi í pamọ́, pẹ̀lú àyè fún ọjà, iye, iye owó, ìfijíṣẹ́ àti ìsanwó. Lẹ́yìn náà kọ ọ́ kún fún àṣẹ àṣeṣe kan.",
          youCanNow: "dáhùn àwọn oníbàárà lọ́nà tó yé kí o sì fìdí gbogbo àṣẹ múlẹ̀ nínú ọ̀rọ̀ kan tí a kọ.",
          quickCheck: [
            { objective: "O4", q: "Ìfìdímúlẹ̀ àṣẹ wo ló pé?", options: ["\"Ó dáa, ó ń bọ̀.\"", "\"Àpò 2, KES 1,500 ọ̀kọ̀ọ̀kan = KES 3,000. Ìfijíṣẹ́ sí ìlú Kisumu ní ọjọ́ Ẹtì, KES 200. Sanwó pẹ̀lú M-Pesa. Dáhùn YES.\"", "\"Fi owó ránṣẹ́.\"", "\"Ẹ ṣé fún ìjíròrò!\""], answer: 1, why: "Ó kọ ọjà, iye, iye owó, ìfijíṣẹ́ àti ìsanwó, ó sì ní kí oníbàárà fìdí rẹ̀ múlẹ̀." },
            { objective: "O4", q: "Kí ló dé tí o fi máa fi àwọn ìdáhùn tí o sábà ń fi ránṣẹ́ pamọ́?", options: ["Kí ìdáhùn lè yára kí ó sì jẹ́ ọ̀kan náà nígbà gbogbo", "Kí oníbàárà lè san owó púpọ̀ sí i", "Kí o má baà ka ọ̀rọ̀ láéláé", "Kí o lè pín nọ́mbà àwọn oníbàárà"], answer: 0, why: "Ìdáhùn tí a fi pamọ́ ń dín títẹ̀ kù, ó sì ń jẹ́ kí iye owó àti òfin rẹ jẹ́ ọ̀kan náà." }
          ]
        },
        {
          title: "Gbígba owó láìléwu: dá ìfitónilétí ìsanwó ayédèrú dúró",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò pé owó ti dé lóòótọ́ kí o tó fi ọjà lé oníbàárà lọ́wọ́.",
          text: [
            "Ọ̀pọ̀ olùtajà ayélujára ń gba owó pẹ̀lú owó fóònù (M-Pesa, MTN MoMo, Orange Money, Wave) tàbí ìfiránṣẹ́ owó láti báńkì, tàbí owó lọ́wọ́ nígbà ìfijíṣẹ́. Àwọn onjìbìtì mọ èyí. Ẹ̀tàn kan tó wọ́pọ̀ ni ìfitónilétí ìsanwó ayédèrú: text, screenshot tàbí ọ̀rọ̀ tí wọ́n dárí sí ọ tí ó dà bí ìsanwó, ṣùgbọ́n kò sí owó kankan tó dé.",
            "Òfin rẹ: ọjà kò ní kúrò àyàfi tí owó bá hàn nínú àkáǹtì tìrẹ. Ṣí app owó fóònù tàbí app báńkì tìrẹ, tàbí tẹ kóòdù ìjọba ilé-iṣẹ́ owó rẹ, kí o sì ṣàyẹ̀wò iye owó tí ó wà tàbí ìsanwó náà. Screenshot láti ọ̀dọ̀ oníbàárà kì í ṣe ẹ̀rí. Text láti nọ́mbà fóònù lásán kì í ṣe ẹ̀rí.",
            "Ẹ̀tàn míì: \"Mo fi owó ránṣẹ́ sí ọ ní àṣìṣe, jọ̀ọ́ dá a padà.\" Má ṣe fi nǹkan kankan ránṣẹ́. Ṣàyẹ̀wò iye owó rẹ fúnra rẹ; tí ìsanwó àṣìṣe gidi bá wà, ilé-iṣẹ́ owó rẹ lè dá a padà nípasẹ̀ ìlànà tirẹ̀. Ilé-iṣẹ́ owó gidi kì í béèrè PIN rẹ, ọ̀rọ̀ aṣínà rẹ tàbí kóòdù ìgbà-kan láéláé. Má ṣe pín wọn láéláé, kódà pẹ̀lú ẹni tí ó sọ pé òun wá láti ilé-iṣẹ́ náà.",
            "Fún owó lọ́wọ́ nígbà ìfijíṣẹ́, ka owó náà kí o tó fi ẹrù lé wọn lọ́wọ́, kí o sì mọ àwọn owó-ìwé orílẹ̀-èdè rẹ. Báńkì àpapọ̀ orílẹ̀-èdè kọ̀ọ̀kan ń kéde ìkìlọ̀ nípa jìbìtì, fún àpẹẹrẹ Báńkì Àpapọ̀ Kenya àti Báńkì Àpapọ̀ Nàìjíríà (CBN)."
          ],
          steps: ["Fohùn ṣọ̀kan lórí ọ̀nà ìsanwó nínú ìfìdímúlẹ̀ àṣẹ.", "Nígbà tí oníbàárà bá sọ pé òun ti sanwó, ṣí app tìrẹ tàbí tẹ kóòdù ìjọba ilé-iṣẹ́ owó rẹ.", "Ṣàyẹ̀wò iye owó àti ẹni tí ó fi ránṣẹ́ nínú àkáǹtì tàbí àkọsílẹ̀ rẹ.", "Lẹ́yìn ìgbà náà nìkan ni kí o fi ọjà lé wọn lọ́wọ́ tàbí fi ránṣẹ́.", "Má ṣe fetí sí \"dá owó àṣìṣe mi padà\"; jẹ́ kí ilé-iṣẹ́ owó bójú tó ìdápadà."],
          words: [["Ìfitónilétí ìsanwó ayédèrú", "text, screenshot tàbí ọ̀rọ̀ tí wọ́n ṣe kí ó dà bí ìsanwó nígbà tí kò sí owó tí wọ́n fi ránṣẹ́."], ["PIN", "nọ́mbà àṣírí rẹ fún owó fóònù tàbí báńkì rẹ. Ìwọ nìkan ló yẹ kí o mọ̀ ọ́."], ["Ìdápadà (reversal)", "nígbà tí wọ́n bá dá ìsanwó padà; ilé-iṣẹ́ owó rẹ ló ń ṣe èyí tó jẹ́ gidi, kì í ṣe ìwọ tí o fi owó ránṣẹ́ sí àjèjì."]],
          slides: [
            { title: "Ẹ̀tàn ìsanwó ayédèrú", bullets: ["Text tàbí screenshot tí ó dà bí owó ti dé", "Kò sí owó nínú àkáǹtì rẹ", "Onjìbìtì máa kó ọjà rẹ lọ"] },
            { title: "Òfin rẹ", bullets: ["Ọjà kò ní kúrò àyàfi tí owó bá wà nínú àkáǹtì TÌRẸ", "Ṣàyẹ̀wò nínú app tìrẹ tàbí kóòdù ìjọba", "Screenshot kì í ṣe ẹ̀rí"] },
            { title: "\"Mo fi ránṣẹ́ ní àṣìṣe\"", bullets: ["Má ṣe fi nǹkan kankan ránṣẹ́ padà fúnra rẹ", "Ṣàyẹ̀wò iye owó rẹ fúnra rẹ", "Ìdápadà gidi ń gba ọ̀dọ̀ ilé-iṣẹ́ owó rẹ kọjá"] },
            { title: "Má ṣe pín wọn láéláé", bullets: ["PIN tàbí ọ̀rọ̀ aṣínà rẹ", "Kóòdù ìgbà-kan", "Ilé-iṣẹ́ owó gidi kì í béèrè fún wọn láéláé"] }
          ],
          tryIt: "Kọ òfin ìsanwó rẹ sórí ìwé kí o sì lẹ̀ ẹ́ mọ́ nítòsí ibi tí o ti ń di ẹrù. Lẹ́yìn náà, ṣe àṣeṣe: ṣí app owó fóònù tàbí app báńkì tìrẹ kí o sì wá ibi tí o ti ń rí ìsanwó rẹ tó kẹ́yìn.",
          youCanNow: "ṣàyẹ̀wò pé owó ti dé lóòótọ́ sínú àkáǹtì tìrẹ kí o tó fi ọjà ránṣẹ́, kí o sì kọ ẹ̀tàn ìsanwó ayédèrú àti ẹ̀tàn ìdápadà.",
          quickCheck: [
            { objective: "O5", q: "Oníbàárà kan fi screenshot ìsanwó ránṣẹ́. Kí ni o máa ṣe?", options: ["Fi ọjà ránṣẹ́ lẹ́sẹ̀kẹsẹ̀", "Béèrè screenshot tó tóbi jù", "Ṣàyẹ̀wò app tìrẹ tàbí kóòdù ìjọba fún owó náà", "Fi PIN rẹ ránṣẹ́ sí wọn láti ṣàyẹ̀wò"], answer: 2, why: "Àkáǹtì tìrẹ nìkan ló ń fi hàn bóyá owó ti dé lóòótọ́; wọ́n lè ṣe screenshot ayédèrú." },
            { objective: "O5", q: "Ẹnìkan sọ pé òun fi owó ránṣẹ́ sí ọ ní àṣìṣe, ó sì ní kí o dá a padà. Kí ni kò léwu jù?", options: ["Dá a padà lẹ́sẹ̀kẹsẹ̀", "Ṣàyẹ̀wò iye owó rẹ fúnra rẹ kí o sì jẹ́ kí ilé-iṣẹ́ owó rẹ bójú tó ìdápadà èyíkéyìí", "Fún wọn ní PIN rẹ kí wọ́n lè gbà á", "Fi ìlọ́po méjì ránṣẹ́ láti ṣe oore"], answer: 1, why: "Ẹ̀tàn tó wọ́pọ̀ ni èyí; ilé-iṣẹ́ owó ló ń dá ìsanwó àṣìṣe gidi padà." }
          ],
          sources: [CBK_FRAUD, CBN_CP]
        },
        {
          title: "Ìfijíṣẹ́, gbígba ọjà padà àti pípa ìgbẹ́kẹ̀lé oníbàárà mọ́",
          objectives: ["O6"],
          minutes: 5,
          goal: "Kọ ìlànà ìfijíṣẹ́ àti gbígba ọjà padà, kí o sì pa ìsọfúnni àwọn oníbàárà mọ́ ní ìkọ̀kọ̀.",
          text: [
            "Àwọn oníbàárà máa ń padà wá nígbà tí ìfijíṣẹ́ bá ṣeé gbẹ́kẹ̀lé. Kọ agbègbè ìfijíṣẹ́ rẹ, owó sí ibi kọ̀ọ̀kan, bí ó ṣe pẹ́ tó àti bí o ṣe ń fi ránṣẹ́: fúnra rẹ, ọlọ́kadà (boda boda tàbí okada), iṣẹ́ ẹrù ọkọ̀ èrò tàbí ilé-iṣẹ́ ìfiránṣẹ́ (courier). Di ẹrù dáadáa, kí o sì fi ọ̀rọ̀ ránṣẹ́ sí oníbàárà nígbà tí ẹrù náà bá kúrò, pẹ̀lú orúkọ ọlọ́kadà tàbí nọ́mbà ẹrù náà.",
            "Ìlànà gbígba ọjà padà ń sọ ohun tí ó máa ṣẹlẹ̀ tí nǹkan kan kò bá tọ́: fún àpẹẹrẹ, \"Ìwọ̀n kò bá ọ mu? Sọ fún wa láàárín ọjọ́ 2, a ó sì pààrọ̀ rẹ̀ tí o kò bá tíì lò ó.\" Jẹ́ kí ó kúrú kí ó sì tọ́, kí o sì máa tẹ̀lé e nígbà gbogbo. Ní Morocco, olùtajà kan ní Casablanca lè sọ pé: pàṣípààrọ̀ láàárín ọjọ́ 3, oníbàárà ló máa san owó ìdápadà ẹrù àyàfi tí ọjà náà bá ní àbùkù.",
            "Nọ́mbà fóònù, àdírẹ́sì àti àṣẹ àwọn oníbàárà jẹ́ àṣírí. Má ṣe pín wọn, má ṣe fi wọ́n sí gbangba, má sì ṣe fi ẹnikẹ́ni sínú group tàbí broadcast list láìbéèrè. Ọ̀pọ̀ orílẹ̀-èdè ní òfin ìdáàbòbò ìsọfúnni, fún àpẹẹrẹ Òfin Ìdáàbòbò Ìsọfúnni Kenya àti Òfin Ìdáàbòbò Ìsọfúnni Nàìjíríà 2023. Tí o kò bá dá ọ lójú ohun tí ó kàn ọ́, ṣàyẹ̀wò lọ́dọ̀ ọ́fíìsì ìdáàbòbò ìsọfúnni orílẹ̀-èdè rẹ.",
            "Lẹ́yìn ìfijíṣẹ́, béèrè bóyá gbogbo nǹkan dára, kí o sì pè wọ́n láti sọ èrò wọn (review) tàbí fi fọ́tò tí o lè pín ránṣẹ́, pẹ̀lú àṣẹ wọn."
          ],
          steps: ["Kọ agbègbè ìfijíṣẹ́, owó, àkókò àti bí o ṣe ń fi ránṣẹ́.", "Di ẹrù dáadáa kí o sì fi ọ̀rọ̀ ránṣẹ́ nígbà tí ẹrù bá kúrò.", "Kọ ìlànà gbígba ọjà padà tó kúrú tí ó sì tọ́, kí o sì tẹ̀lé e.", "Pa nọ́mbà àti àdírẹ́sì àwọn oníbàárà mọ́ ní ìkọ̀kọ̀; béèrè kí o tó fi ẹnikẹ́ni sínú àkọsílẹ̀.", "Béèrè èrò oníbàárà lẹ́yìn ìfijíṣẹ́."],
          words: [["Ìlànà gbígba ọjà padà (returns policy)", "òfin rẹ fún ohun tí ó máa ṣẹlẹ̀ nígbà tí oníbàárà bá fẹ́ dá ọjà padà tàbí pààrọ̀ rẹ̀."], ["Broadcast list", "àkọsílẹ̀ kan nínú WhatsApp fún fífi ọ̀rọ̀ kan ránṣẹ́ sí ọ̀pọ̀ ènìyàn; àwọn tí ó ti fi nọ́mbà rẹ pamọ́ nìkan ló ń gbà á."], ["Ìsọfúnni àdáni", "ìsọfúnni nípa ènìyàn, bí orúkọ rẹ̀, nọ́mbà fóònù rẹ̀ tàbí àdírẹ́sì rẹ̀."]],
          slides: [
            { title: "Ìfijíṣẹ́ tí a lè gbẹ́kẹ̀lé", bullets: ["Agbègbè, owó, àkókò àti bí o ṣe ń fi ránṣẹ́", "Di ẹrù dáadáa", "Fi ọ̀rọ̀ ránṣẹ́ sí oníbàárà nígbà tí ó bá kúrò"] },
            { title: "Ìlànà gbígba ọjà padà tó kúrú tí ó sì tọ́", bullets: ["Ohun tí a lè dá padà àti ìgbà wo", "Ta ló máa san owó ìdápadà ẹrù", "Tẹ̀lé e nígbà gbogbo"] },
            { title: "Ìsọfúnni àwọn oníbàárà jẹ́ àṣírí", bullets: ["Má ṣe pín tàbí fi nọ́mbà àti àdírẹ́sì sí gbangba", "Béèrè kí o tó fi ẹnikẹ́ni sínú àkọsílẹ̀", "Ṣàyẹ̀wò ọ́fíìsì ìdáàbòbò ìsọfúnni orílẹ̀-èdè rẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe ètò ṣọ́ọ̀bù ayélujára ojú-ìwé kan rẹ: ibi tí o ti ń tà àti ìdí rẹ̀, ọ̀rọ̀ ojú-ìwé iṣẹ́-òwò rẹ, àpèjúwe ọjà mẹ́ta, ìfìdímúlẹ̀ àṣẹ tí o ti fi pamọ́, òfin ìsanwó rẹ, àti ìlànà ìfijíṣẹ́ àti gbígba ọjà padà rẹ.",
          youCanNow: "fi ọjà jíṣẹ́ lọ́nà tí a lè gbẹ́kẹ̀lé, bójú tó gbígba ọjà padà lọ́nà tó tọ́, kí o sì pa ìsọfúnni àwọn oníbàárà rẹ mọ́ ní ìkọ̀kọ̀.",
          quickCheck: [
            { objective: "O6", q: "Kí ló yẹ kí ó wà nínú ìlànà ìfijíṣẹ́?", options: ["PIN rẹ", "Àdírẹ́sì àwọn oníbàárà rẹ", "Agbègbè ìfijíṣẹ́, owó, àkókò àti bí o ṣe ń fi ránṣẹ́", "Ọ̀rọ̀ náà \"kíákíá\" nìkan"], answer: 2, why: "Agbègbè, owó, àkókò àti ọ̀nà ń sọ ohun tí àwọn oníbàárà máa retí fún wọn gan-an." },
            { objective: "O6", q: "O fẹ́ máa fi àkọsílẹ̀ iye owó ránṣẹ́ sí àwọn oníbàárà lọ́sọ̀ọ̀sẹ̀. Kí ló tọ́?", options: ["Fi gbogbo nọ́mbà wọn sínú group gbangba", "Ta nọ́mbà wọn fún oníṣòwò míì", "Fi àwọn àjèjì láti àkọsílẹ̀ tí o rà kún un", "Kọ́kọ́ béèrè lọ́wọ́ àwọn oníbàárà kí o sì pa nọ́mbà wọn mọ́ ní ìkọ̀kọ̀"], answer: 3, why: "Nọ́mbà àwọn oníbàárà jẹ́ ìsọfúnni àdáni; béèrè kí o tó fi ọ̀rọ̀ ránṣẹ́ sí wọn ní àpapọ̀." }
          ],
          sources: [ODPC, NDPC]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Títà, gbígba owó àti fífi ọjà jíṣẹ́",
        questions: [
          { objective: "O4", q: "Oníbàárà kan béèrè ìbéèrè tí o kò lè dáhùn báyìí. Kí ni o máa dáhùn?", options: ["Kò sí nǹkan", "Sọ ìgbà tí o máa wádìí rẹ̀ kí o sì padà sọ fún wọn", "Sọ fún wọn pé kí wọ́n lọ síbòmíì", "Fi ohùn gígùn nípa nǹkan míì ránṣẹ́"], answer: 1, why: "Àkókò tó yé fún ìdáhùn ń pa oníbàárà mọ́, ó sì ń kọ́ ìgbẹ́kẹ̀lé." },
          { objective: "O4", q: "Kí ni oníbàárà máa ṣe lẹ́yìn ìfìdímúlẹ̀ àṣẹ rẹ?", options: ["Fi PIN rẹ̀ ránṣẹ́ sí ọ", "Kò sí nǹkan", "Dáhùn \"Bẹ́ẹ̀ ni\" láti fìdí rẹ̀ múlẹ̀", "San ìlọ́po méjì"], answer: 2, why: "\"Bẹ́ẹ̀ ni\" tí a kọ ń fi hàn pé ẹ̀yin méjèèjì gbà lórí àṣẹ kan náà." },
          { objective: "O5", q: "Ìgbà wo ni ọjà lè kúrò ní ṣọ́ọ̀bù rẹ fún àṣẹ tí wọ́n san pẹ̀lú owó fóònù?", options: ["Nígbà tí o bá rí owó náà nínú àkáǹtì tìrẹ", "Nígbà tí oníbàárà bá fi screenshot ránṣẹ́", "Nígbà tí ẹnìkan bá pè láti sọ pé wọ́n ti fi ránṣẹ́", "Nígbà tí oníbàárà bá ṣèlérí"], answer: 0, why: "Owó nínú àkáǹtì tìrẹ nìkan ni ẹ̀rí ìsanwó." },
          { objective: "O5", q: "Ẹnìkan pè, ó sọ pé òun wá láti ilé-iṣẹ́ owó fóònù rẹ, ó sì nílò PIN rẹ. Kí ni òótọ́?", options: ["Òṣìṣẹ́ gidi lè béèrè fún un", "Fún un ní ìdajì rẹ̀", "Fi í ránṣẹ́ pẹ̀lú text dípò", "Ilé-iṣẹ́ owó gidi kì í béèrè PIN rẹ láéláé; gé ìpè náà"], answer: 3, why: "Ilé-iṣẹ́ owó gidi kì í béèrè PIN rẹ láéláé; ẹnikẹ́ni tí ó bá béèrè jẹ́ onjìbìtì." },
          { objective: "O6", q: "Oníbàárà kan gba ìwọ̀n tí kò tọ́. Kí ló ń ràn lọ́wọ́ jù?", options: ["Má ṣe dá ọ̀rọ̀ náà lóhùn", "Ìlànà gbígba ọjà padà tó yé tí o ń tẹ̀lé nígbà gbogbo", "Dá ẹ̀bi fún ọlọ́kadà", "Fi ọ̀rọ̀ oníbàárà sórí ayélujára"], answer: 1, why: "Ìlànà tó tọ́, tí o ń tẹ̀lé nígbà gbogbo, ń yanjú ìṣòro, ó sì ń pa àwọn oníbàárà mọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Títà Ọjà lórí Ayélujára ní Áfíríkà (WhatsApp Business, Ọjà Ayélujára àti Ìkànnì Àjọlò)",
    questions: [
      { objective: "O1", q: "Níbo ni olùtajà kékeré yẹ kí ó ti bẹ̀rẹ̀ títà lórí ayélujára?", options: ["Níbi gbogbo lẹ́ẹ̀kan náà", "Níbi tí àwọn oníbàárà ti wà tẹ́lẹ̀, àti níbi tí olùtajà náà ti lè tẹ̀lé e", "Níbi tí ìpolówó ti wọ́n jù nìkan", "Níbi tí kò sí ẹnìkan tí ń ta nǹkan kankan"], answer: 1, why: "Ìkànnì ń ṣiṣẹ́ kìkì tí àwọn oníbàárà bá wà níbẹ̀ tí o sì ń dá wọn lóhùn." },
      { objective: "O1", q: "Èwo ni ọjà ayélujára (marketplace)?", options: ["Jiji", "Ọ̀rọ̀ ìkíni", "PIN rẹ", "Broadcast list"], answer: 0, why: "Jiji, Jumia, Kilimall àti Konga jẹ́ ọjà ayélujára tí àwọn olùrà ti ń wá ọjà lọ́dọ̀ ọ̀pọ̀ olùtajà." },
      { objective: "O1", q: "Ìkànnì àjọlò bí Instagram àti TikTok jù lọ ń ràn ọ́ lọ́wọ́ láti:", options: ["Fi àwọn ọjà rẹ pamọ́", "Ṣàyẹ̀wò ìsanwó", "Jẹ́ kí àwọn oníbàárà tuntun rí ọ pẹ̀lú fọ́tò àti fídíò", "Yẹra fún dídáhùn ọ̀rọ̀"], answer: 2, why: "Ìkànnì àjọlò dára fún jíjẹ́ kí àwọn tí kò tíì mọ̀ ọ́ rí ọ." },
      { objective: "O2", q: "WhatsApp Business jẹ́:", options: ["Báńkì kan", "Ọjà ayélujára tí ó ń gba commission", "Ìpolówó tí a ń sanwó fún", "App ọ̀tọ̀ fún àwọn iṣẹ́-òwò kékeré pẹ̀lú ojú-ìwé àti àkọsílẹ̀ ọjà"], answer: 3, why: "Ó ń fi ojú-ìwé iṣẹ́-òwò, ọjà pẹ̀lú iye owó àti ọ̀rọ̀ aládàáṣe kún un." },
      { objective: "O2", q: "Èwo ló yẹ kí ó wà lórí ojú-ìwé iṣẹ́-òwò rẹ?", options: ["Àkókò tí o ń ṣí àti agbègbè tí o ń sìn", "Ọ̀rọ̀ aṣínà rẹ", "Àdírẹ́sì àwọn oníbàárà rẹ", "Kóòdù ìgbà-kan rẹ"], answer: 0, why: "Àkókò àti agbègbè ń sọ fún àwọn oníbàárà ìgbà àti ibi tí o ti ń sìn." },
      { objective: "O2", q: "Ọjà kọ̀ọ̀kan nínú àkọsílẹ̀ rẹ yẹ kí ó ní:", options: ["Fọ́tò nìkan", "Fọ́tò, orúkọ, iye owó àti àpèjúwe kúkúrú", "PIN báńkì rẹ", "Kò ní iye owó, kí àwọn oníbàárà lè béèrè"], answer: 1, why: "Fọ́tò, orúkọ, iye owó àti àpèjúwe ń jẹ́ kí àwọn oníbàárà yan láìdúró." },
      { objective: "O3", q: "Ẹ̀yìn tó dára jù fún fọ́tò ọjà ni:", options: ["Òpópónà tí èrò pọ̀ sí", "Tábìlì tí kò wà létòlétò", "Aṣọ tàbí ògiri tí kò ní àwòrán", "Igun òkùnkùn"], answer: 2, why: "Ẹ̀yìn tí kò ní àwòrán ń jẹ́ kí ojú wà lórí ọjà náà." },
      { objective: "O3", q: "Kí ló dé tí o fi máa fi ọwọ́ tàbí owó-ẹyọ hàn lẹ́gbẹ̀ẹ́ ọjà?", options: ["Láti fi ìtóbi rẹ̀ hàn", "Láti fi ọjà náà pamọ́", "Láti mú kí fáìlì tóbi sí i", "Àwọn oníbàárà fẹ́ràn ọwọ́"], answer: 0, why: "Nǹkan tí a mọ̀ nínú fọ́tò ń fi bí ọjà náà ṣe tóbi tó hàn." },
      { objective: "O3", q: "Ṣé ó dáa láti lo fọ́tò ọjà kan náà tó dára jù láti orí íńtánẹ́ẹ̀tì?", options: ["Bẹ́ẹ̀ ni, nígbà gbogbo", "Bẹ́ẹ̀ ni, tí ó bá mọ́lẹ̀ jù", "Fún ọjà olówó ńlá nìkan", "Rárá; fi ọjà rẹ gidi hàn kí àwọn oníbàárà lè gba ohun tí wọ́n rí"], answer: 3, why: "Fọ́tò olóòótọ́ ń dènà ẹjọ́ àti ìdápadà ọjà." },
      { objective: "O4", q: "Ìfìdímúlẹ̀ àṣẹ máa ń kọ:", options: ["Iye owó nìkan", "Ọjà, iye, iye owó, ìfijíṣẹ́ àti ìsanwó", "PIN àti ọ̀rọ̀ aṣínà rẹ", "Orúkọ àwọn oníbàárà míì"], answer: 1, why: "Gbogbo àlàyé nínú ọ̀rọ̀ kan ń dènà àìgbọ́ra-ẹni-yé." },
      { objective: "O4", q: "Oníbàárà kan ń ná ọjà gidigidi, ó sì ń sọ̀rọ̀ àìdára. Kí ni o máa ṣe?", options: ["Bú u padà", "Fi ọ̀rọ̀ rẹ̀ sí gbangba", "Jẹ́ oníwà rere kí o sì fún un ní iye owó rẹ tó dára jù", "Dí gbogbo oníbàárà"], answer: 2, why: "Jíjẹ́ oníwà rere ń dáàbò bo orúkọ rẹ, kódà tí títà yìí kò bá ṣẹlẹ̀." },
      { objective: "O4", q: "Ìdáhùn tí a fi pamọ́ (quick reply) dára jù fún:", options: ["Àkọsílẹ̀ iye owó rẹ àti agbègbè ìfijíṣẹ́", "PIN rẹ", "Àdírẹ́sì oníbàárà kan", "Òfófó"], answer: 0, why: "A lè fi àwọn ọ̀rọ̀ tí o sábà ń fi ránṣẹ́ pamọ́ kí a sì fi wọ́n ránṣẹ́ pẹ̀lú ìtẹ̀ díẹ̀." },
      { objective: "O5", q: "Text láti nọ́mbà fóònù lásán sọ pé \"O ti gba GHS 500\". Ìwọ:", options: ["Fi ọjà ránṣẹ́", "Dúpẹ́ lọ́wọ́ wọn kí o sì fi ọjà ránṣẹ́", "Dárí rẹ̀ sí àwọn ọ̀rẹ́", "Kọ́kọ́ ṣàyẹ̀wò iye owó inú àkáǹtì owó fóònù tìrẹ"], answer: 3, why: "Ìfitónilétí ayédèrú ń wá láti nọ́mbà lásán; àkáǹtì tìrẹ nìkan ni ẹ̀rí." },
      { objective: "O5", q: "Ta ló yẹ kí ó mọ PIN owó fóònù rẹ?", options: ["Ìwọ nìkan", "Oníbàárà", "Ọlọ́kadà tí ń fi ẹrù jíṣẹ́", "Ẹnikẹ́ni láti ilé-iṣẹ́ náà tí ó bá pè"], answer: 0, why: "PIN jẹ́ àṣírí; ilé-iṣẹ́ owó gidi kì í béèrè fún un láéláé." },
      { objective: "O5", q: "Ọ̀rọ̀ \"ìsanwó àṣìṣe\" kan ní kí o dá owó padà. Ìgbésẹ̀ tí kò léwu jù ni:", options: ["Dá a padà kíákíá", "Dá ìlọ́po méjì padà", "Ṣàyẹ̀wò iye owó rẹ fúnra rẹ kí o sì jẹ́ kí ilé-iṣẹ́ owó bójú tó ìdápadà èyíkéyìí", "Pín PIN rẹ pẹ̀lú wọn"], answer: 2, why: "Ìdápadà gidi ń gba ọ̀dọ̀ ilé-iṣẹ́ owó kọjá, kì í ṣe pé kí o fi owó ránṣẹ́ sí àjèjì." },
      { objective: "O5", q: "Fún owó lọ́wọ́ nígbà ìfijíṣẹ́, ọlọ́kadà yẹ kí ó:", options: ["Kọ́kọ́ fi ẹrù lé wọn lọ́wọ́", "Ka owó náà kí ó tó fi ẹrù lé wọn lọ́wọ́", "Gba ìlérí pé wọn máa sanwó lẹ́yìn", "Ya fọ́tò PIN oníbàárà"], answer: 1, why: "Kíkọ́kọ́ ka owó túmọ̀ sí pé ọjà kò ní kúrò àyàfi tí owó bá wà lọ́wọ́." },
      { objective: "O6", q: "Ọ̀rọ̀ ìfijíṣẹ́ tó dára sí oníbàárà máa ń sọ:", options: ["Kò sí nǹkan títí yóò fi dé", "Ẹrù náà ti kúrò, pẹ̀lú orúkọ ọlọ́kadà tàbí nọ́mbà ẹrù náà", "Àdírẹ́sì àwọn oníbàárà míì", "PIN rẹ"], answer: 1, why: "Sísọ fún àwọn oníbàárà pé ẹrù ti kúrò, àti bí ó ṣe ń bọ̀, ń kọ́ ìgbẹ́kẹ̀lé." },
      { objective: "O6", q: "Nọ́mbà fóònù àti àdírẹ́sì àwọn oníbàárà jẹ́:", options: ["Ohun tí a lè pín fàlàlà", "Ohun tí a lè tà", "Ìsọfúnni àdáni tí o máa pa mọ́ ní ìkọ̀kọ̀", "Fún fífi sí gbangba"], answer: 2, why: "Ìsọfúnni àdáni ni wọ́n; ọ̀pọ̀ orílẹ̀-èdè ń dáàbò bò wọ́n nípasẹ̀ òfin." },
      { objective: "O6", q: "Ìlànà gbígba ọjà padà yẹ kí ó jẹ́:", options: ["Gígùn àti àṣírí", "Ọ̀tọ̀ fún oníbàárà kọ̀ọ̀kan", "Èyí tí a kò kọ sílẹ̀ láéláé", "Kúkúrú, tó tọ́, tí a ń tẹ̀lé nígbà gbogbo"], answer: 3, why: "Ìlànà tó yé tí ó sì tọ́, tí o ń tẹ̀lé nígbà gbogbo, ń pa ìgbẹ́kẹ̀lé àwọn oníbàárà mọ́." },
      { objective: "O6", q: "Níbo ni o ti ń ṣàyẹ̀wò òfin ìdáàbòbò ìsọfúnni ní orílẹ̀-èdè rẹ?", options: ["Ọ́fíìsì ìdáàbòbò ìsọfúnni orílẹ̀-èdè rẹ", "Àhesọ lórí ìkànnì àjọlò", "Èrò oníbàárà kan", "Ìpolówó ọjà ayélujára kan"], answer: 0, why: "Ọ́fíìsì orílẹ̀-èdè, bí ODPC ti Kenya tàbí NDPC ti Nàìjíríà, ló ń kéde àwọn òfin náà." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 7, 9, 12, 14, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ibi tí o máa tà", objective: "O1", notYet: "Kò yan ìkànnì kankan, tàbí ó yan ọ̀pọ̀ ìkànnì láìsí ìdí.", meets: "Ó yan ìkànnì kan tàbí méjì, pẹ̀lú àwọn tí ń rà níbẹ̀, owó rẹ̀ àti àkókò fún ọ̀kọ̀ọ̀kan.", exceeds: "Ó tún sọ ohun tí yóò mú kí ó fi ìkànnì kan kún un tàbí kí ó fi sílẹ̀ lẹ́yìn oṣù mẹ́ta." },
      { name: "Ojú-ìwé àti àkọsílẹ̀ ọjà", objective: "O2", notYet: "Ojú-ìwé kò ní orúkọ, àkókò tàbí agbègbè, tàbí ọjà kò tó mẹ́ta.", meets: "Ojú-ìwé pẹ̀lú orúkọ, àpèjúwe, agbègbè, àkókò àti ìsanwó, pẹ̀lú ó kéré tán ọjà mẹ́ta tí ó ní iye owó.", exceeds: "Ọ̀rẹ́ tàbí oníbàárà kan wò ó, wọ́n sì tún ohun kan tí kò yé ṣe." },
      { name: "Àpèjúwe ọjà", objective: "O3", notYet: "Fọ́tò tí kò hàn kedere tàbí tí wọ́n yá, tàbí kò sí iye owó tàbí ìfijíṣẹ́.", meets: "Àpèjúwe ọjà mẹ́ta pẹ̀lú fọ́tò gidi tó yé, àkọlé, iye owó ní owó ìbílẹ̀, àlàyé àti ìfijíṣẹ́.", exceeds: "Àpèjúwe kọ̀ọ̀kan ní fọ́tò láti tòsí àti fọ́tò ìtóbi, pẹ̀lú àkíyèsí olóòótọ́ bí ìyàtọ̀ àwọ̀." },
      { name: "Ìfìdímúlẹ̀ àṣẹ", objective: "O4", notYet: "Kò sí ìfìdímúlẹ̀ tí a fi pamọ́, tàbí àlàyé kan kù.", meets: "Ọ̀rọ̀ tí a fi pamọ́ pẹ̀lú ọjà, iye, iye owó, ibi ìfijíṣẹ́, owó àti ọjọ́ rẹ̀, ìsanwó, àti ìbéèrè pé kí wọ́n dáhùn Bẹ́ẹ̀ ni.", exceeds: "Ó tún ní ìdáhùn tí a fi pamọ́ fún iye owó, ìfijíṣẹ́ àti ìsanwó." },
      { name: "Òfin ìsanwó", objective: "O5", notYet: "Ọjà lè kúrò nítorí screenshot tàbí ìlérí, tàbí wọ́n pín PIN.", meets: "Òfin tí a kọ: ọjà kò ní kúrò àyàfi tí owó bá hàn nínú àkáǹtì tìrẹ; má ṣe pín PIN tàbí kóòdù láéláé.", exceeds: "Ó tún sọ̀rọ̀ nípa ìbéèrè ìsanwó àṣìṣe àti kíka owó lọ́wọ́ nígbà ìfijíṣẹ́." },
      { name: "Ìfijíṣẹ́, gbígba ọjà padà àti ìsọfúnni", objective: "O6", notYet: "Kò sí àlàyé ìfijíṣẹ́ tàbí òfin gbígba ọjà padà, tàbí wọ́n pín ìsọfúnni oníbàárà.", meets: "Agbègbè ìfijíṣẹ́, owó, àkókò àti ọ̀nà, ìlànà gbígba ọjà padà tó kúrú, àti ìlérí láti pa ìsọfúnni oníbàárà mọ́ ní ìkọ̀kọ̀.", exceeds: "Wọ́n ń béèrè lọ́wọ́ àwọn oníbàárà kí wọ́n tó fi wọ́n sínú àkọsílẹ̀ kankan, wọ́n sì ń béèrè èrò wọn lẹ́yìn ìfijíṣẹ́." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn gba àṣẹ àkọ́kọ́ tàbí ju bẹ́ẹ̀ lọ lórí ayélujára láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn kò pàdánù nǹkan sí ìfitónilétí ìsanwó ayédèrú láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé títà wọn lóṣooṣù ti pọ̀ sí i lẹ́yìn oṣù mẹ́ta (àtẹ̀lé ètò náà)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù Android tí ó ní WhatsApp Business tí a gbà láti ilé ìtajà app gidi",
      "Ọjà mẹ́ta (tàbí fọ́tò wọn) láti fi hàn",
      "Ìwé àti gègé fún tábìlì ìkànnì, àwọn ìlànà àti òfin ìsanwó",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́, ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan, kí àwọn akẹ́kọ̀ọ́ ṣètò ojú-ìwé wọn lójú ẹsẹ̀, kí wọ́n sì máa ran ara wọn lọ́wọ́.",
      "Ẹ ṣe ẹ̀kọ́ fọ́tò níta ní ìmọ́lẹ̀ ọ̀sán; jẹ́ kí àwọn akẹ́kọ̀ọ́ pààrọ̀ fóònù kí wọ́n sì wo àpèjúwe ọjà ara wọn.",
      "Ẹ ṣe eré ìfihàn ìfitónilétí ìsanwó ayédèrú àti ìpè \"ìsanwó àṣìṣe\". Má ṣe ní kí akẹ́kọ̀ọ́ fi PIN, iye owó àkáǹtì tàbí àkọsílẹ̀ báńkì gidi hàn láéláé.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé mẹ́nù app, owó iṣẹ́ ọjà ayélujára àti òfin ìsọfúnni ń yí padà, àti pé kí wọ́n ṣàyẹ̀wò app náà, ojú-ìwé olùtajà ọjà ayélujára náà tàbí àjọ ìjọba orílẹ̀-èdè.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
