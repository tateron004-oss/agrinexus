"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-savings-groups-microfinance.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const VSLA = { name: "VSL Associates: ọ̀nà VSLA (ìpín, owó ìyáwó, owó àjùmọ̀lò, ìyípo ọdún kan, pínpín owó)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: àkọsílẹ̀ àwọn SACCO tí ó ní ìwé àṣẹ láti gba owó ìfipamọ́", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: òfin fún àwọn ilé-iṣẹ́ microfinance (systèmes financiers décentralisés) ní àwọn orílẹ̀-èdè XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Central Bank of Nigeria (CBN): àwọn báńkì microfinance", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const BOG = { name: "Bank of Ghana: gbogbo ilé-iṣẹ́ tí ó ní ìwé àṣẹ àti ọ̀nà láti ráhùn", url: "https://www.bog.gov.gh" };
const CBK_DCP = { name: "Central Bank of Kenya: àbójútó báńkì, pẹ̀lú àwọn báńkì microfinance àti àwọn olùyáwó oní-díjítà tí ó ní ìwé àṣẹ", url: "https://www.centralbank.go.ke/bank-supervision/" };
const FCCPC = { name: "FCCPC, Nigeria: ipò ìforúkọsílẹ̀ àwọn olùyáwó owó oní-díjítà (àwọn app ìyáwó tí a fọwọ́ sí)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const SEC_NG = { name: "Nairametrics (14 May 2026): SEC Nigeria kìlọ̀ nípa àwọn Ponzi tí wọ́n ń polówó lórí WhatsApp, TikTok àti Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-savings-groups-microfinance-yo",
  lang: "yo",
  translationOf: "afr-savings-groups-microfinance",
  category: "Africa: Life and Work",
  name: "Ẹgbẹ́ Ìfowópamọ́ àti Microfinance (Chama, VSLA, Tontine, Èsúsú)",
  skills: "Yíyan láàárín ẹgbẹ́ àjọ àti ẹgbẹ́ ìfowópamọ́-àti-ìyáwó, Kíkọ ètò ìfowópamọ́ oṣooṣù, Ṣíṣàyẹ̀wò òfin ẹgbẹ́ kan, Pípa àkọsílẹ̀ àti owó ẹgbẹ́ mọ́ láìléwu, Fífi àwọn owó ìyáwó microfinance àti ti ẹgbẹ́ wéra, Dídá Ponzi àti àwọn olùyáwó ayédèrú mọ̀",
  outcome: "yan ẹgbẹ́ ìfowópamọ́ tí ó bá èrò rẹ mu, ṣàyẹ̀wò òfin àti àkọsílẹ̀ rẹ̀, fi owó ìyáwó microfinance tàbí ti ẹgbẹ́ wéra nípa àpapọ̀ owó tí o máa san padà, dá Ponzi tàbí olùyáwó ayédèrú mọ̀, kí o sì tẹ̀lé ètò ìfowópamọ́ oṣooṣù tí o kọ sílẹ̀.",
  about: [
    "Káàkiri Áfíríkà, àwọn ènìyàn máa ń fowó pamọ́ pọ̀: chama àti merry-go-round ní Kenya, èsúsú àti àjọ ní Nàìjíríà, susu ní Ghana, tontine ní Senegal, Côte d'Ivoire àti Cameroon (njangi ní apá Cameroon tí wọ́n ti ń sọ Gẹ̀ẹ́sì), gam'eya ní Egypt àti daret ní Morocco. Àwọn ẹgbẹ́ ìfowópamọ́, SACCO àti báńkì microfinance ń ran ọ̀pọ̀ mílíọ̀nù ènìyàn lọ́wọ́ láti san owó ilé-ìwé, kó ọjà sínú ṣọ́ọ̀bù, tàbí la oṣù líle kọjá.",
    "Ẹ̀kọ́ yìí wà fún àwọn oníṣòwò, òbí, oníṣẹ́ ọwọ́, òṣìṣẹ́ àti ọ̀dọ́ tí wọ́n fẹ́ máa fowó pamọ́ déédéé tàbí yá owó pẹ̀lú ìṣọ́ra. O máa kọ́ irú ẹgbẹ́ méjì pàtàkì, bí o ṣe lè kọ ètò ìfowópamọ́, ohun tí o máa wò nínú òfin àti àkọsílẹ̀ ẹgbẹ́ kan, bí o ṣe lè fi owó ìyáwó wéra nípa àpapọ̀ owó tí o máa san padà, àti bí o ṣe lè dá àwọn ètò tí ń jí owó ìfipamọ́ mọ̀.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\", àyẹ̀wò kúkúrú, ìdánwò ìmọ̀ lẹ́yìn orí kọ̀ọ̀kan àti ìdánwò ìbéèrè 20 ní ìparí. Àpẹẹrẹ lásán ni gbogbo iye owó. Ẹ̀kọ́ yìí ń ṣàlàyé bí àwọn ọjà owó ṣe ń ṣiṣẹ́ àti ewu wọn; kò sọ ibi tí o máa fi owó rẹ sí fún ọ."
  ],
  finalTask: "Kọ ètò ìfowópamọ́ oṣooṣù rẹ sí ojú-ìwé kan: èrò rẹ àti ọjọ́ tí o nílò rẹ̀, àpapọ̀ owó, iye tí o máa fi pamọ́ lọ́sẹ̀ tàbí lóṣù, ibi tí o máa fi pamọ́ sí (ẹgbẹ́, SACCO, báńkì microfinance tàbí àkáǹtì), àti ìwé àyẹ̀wò pẹ̀lú àwọn ìdáhùn rẹ nípa ẹgbẹ́ tàbí ilé-iṣẹ́ náà: òfin rẹ̀ tí a kọ sílẹ̀, bí wọ́n ṣe ń pa owó àti àkọsílẹ̀ mọ́, ìwé àṣẹ rẹ̀ (tí ó bá ń gba owó ìfipamọ́ tàbí ń yáni lówó gẹ́gẹ́ bí òwò), àti àpapọ̀ iye owó ìyáwó èyíkéyìí.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà àti ọ̀dọ́ káàkiri Áfíríkà, ní ìlú àti ní abúlé: àwọn oníṣòwò, oníṣẹ́ ọwọ́, ìyá àti bàbá, òṣìṣẹ́ àti ọ̀dọ́, tí ọ̀pọ̀ wọn ti wà nínú chama, èsúsú, susu tàbí tontine. Àpẹẹrẹ wá láti Kenya, Nàìjíríà, Ghana, Senegal, Cameroon, Côte d'Ivoire, Egypt àti Morocco.",
    startingPoint: "Ọ̀pọ̀ ti ń fowó pamọ́ nínú ẹgbẹ́ tí kò ní ìforúkọsílẹ̀ tàbí nínú àpamọ́wọ́ fóònù (mobile wallet), ṣùgbọ́n láìní èrò tí wọ́n kọ sílẹ̀. Àwọn kan ti wọ ẹgbẹ́ láìka òfin rẹ̀, wọ́n ti yá owó láìṣírò àpapọ̀ owó tí wọ́n máa san padà, tàbí wọ́n ti pàdánù owó nínú ẹgbẹ́ tí ó wó tàbí ètò \"a máa ṣe owó rẹ ní ìlọ́po méjì\".",
    gap: "Àwọn akẹ́kọ̀ọ́ nílò láti yan irú ẹgbẹ́ tí ó tọ́ fún èrò wọn, ṣàyẹ̀wò òfin àti àkọsílẹ̀ kí wọ́n tó fi owó wọn lé ẹgbẹ́ kan lọ́wọ́, fi owó ìyáwó wéra nípa ohun tí wọ́n máa san padà ní tòótọ́, kí wọ́n sì dá Ponzi àti àwọn olùyáwó tí kò ní ìwé àṣẹ mọ̀, kí owó ìfipamọ́ wọn lè pọ̀ sí i dípò kí ó pòórá.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a túmọ̀ rẹ̀ sí French àti Arabic",
      "Ẹ̀rọ: fóònù lásán; ọ̀pọ̀ ẹgbẹ́ ń pàdé lójúkojú, wọ́n sì ń kọ àkọsílẹ̀ sórí ìwé",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá iṣẹ́ àti ọjọ́ ìpàdé ẹgbẹ́ mu",
      "Òfin àti ìwé àṣẹ yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè, wọ́n sì ń yí padà: àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò àkọsílẹ̀ tuntun ti àjọ alábòójútó",
      "Owó: àpẹẹrẹ nìkan; kò sí ìmọ̀ràn ìdókòwò; má ṣe pín PIN tàbí ọ̀rọ̀ aṣínà láéláé"
    ],
    prerequisites: "Kò sí. Ìṣirò ìpìlẹ̀ (àròpọ̀ àti ìsọdipúpọ̀) pẹ̀lú ẹ̀rọ ìṣirò fóònù máa ràn ọ́ lọ́wọ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní èrò ìfowópamọ́ kan àti irú ẹgbẹ́ méjì", action: "ṣàlàyé bí ẹgbẹ́ àjọ àti ẹgbẹ́ ìfowópamọ́-àti-ìyáwó ṣe ń ṣiṣẹ́, kí o sì yan èyí tí ó bá èrò náà mu", standard: "kí o sì fún ìdí kan fún yíyàn rẹ àti ewu kan fún ọ̀kọ̀ọ̀kan" },
    { id: "O2", condition: "Tí a bá fún ọ ní èrò kan àti owó tí ò ń wọlé fún ọ", action: "kọ ètò ìfowópamọ́ oṣooṣù pẹ̀lú èrò náà, àpapọ̀ owó, ọjọ́, iye lọ́sẹ̀ tàbí lóṣù àti ibi tí o máa fi pamọ́ sí", standard: "pẹ̀lú ìṣirò tí ó dé èrò náà ní ọjọ́ náà" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìwé òfin ẹgbẹ́ kan", action: "ṣàyẹ̀wò rẹ̀ fún àwọn òfin pàtàkì: owó ìdáwó, ìpàdé, ìyáwó, owó ìtanràn, kíkúrò nínú ẹgbẹ́, pínpín owó àti ẹni tí ó ń darí owó", standard: "kí o rí ó kéré tán mẹ́fà nínú méje, kí o sì dárúkọ èyí tí kò sí" },
    { id: "O4", condition: "Ní ìpàdé ẹgbẹ́", action: "kọ owó ìdáwó àti ìyáwó sínú ìwé ìpamọ́ (passbook) tàbí ìwé àkọsílẹ̀, kí o sì ṣàyẹ̀wò pé owó lọ́wọ́ àti àkọsílẹ̀ bára mu", standard: "kí a ka gbogbo iye sókè, kí àwọn ọmọ ẹgbẹ́ sì gbà á níwájú gbogbo wọn" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìfilọ̀ owó ìyáwó microfinance tàbí ti ẹgbẹ́", action: "ṣírò àpapọ̀ owó tí o máa san padà, kí o sì fi ọjọ́ ìsanpadà wé owó tí ò ń wọlé fún ọ", standard: "kí o tó fọwọ́ sí i, kí o sì sọ ohun tí ojúṣe àpapọ̀ (joint liability) túmọ̀ sí fún ọ" },
    { id: "O6", condition: "Tí a bá fún ọ ní ìfilọ̀ láti fowó pamọ́, dókòwò tàbí yá owó", action: "dá àwọn àmì ìkìlọ̀ Ponzi tàbí olùyáwó ayédèrú mọ̀, kí o sì wá ilé-iṣẹ́ náà lórí àkọsílẹ̀ ìjọba ti àjọ alábòójútó", standard: "kí o tó sanwó tàbí pín ìsọfúnni kankan" }
  ],
  chapters: [
    {
      name: "Orí 1: Fífowó pamọ́ pọ̀",
      lessons: [
        {
          title: "Irú ẹgbẹ́ ìfowópamọ́ méjì",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ṣàlàyé bí ẹgbẹ́ àjọ àti ẹgbẹ́ ìfowópamọ́-àti-ìyáwó ṣe ń ṣiṣẹ́, kí o sì yan ọ̀kan fún èrò rẹ.",
          text: [
            "Ẹgbẹ́ àjọ (merry-go-round, èsúsú, àjọ, susu, tontine, njangi, gam'eya tàbí daret) rọrùn. Ọmọ ẹgbẹ́ kọ̀ọ̀kan ń san iye kan náà lọ́sẹ̀ tàbí lóṣù, ọmọ ẹgbẹ́ kan sì ń gba gbogbo owó náà lẹ́ẹ̀kọ̀ọ̀kan, títí gbogbo ènìyàn yóò fi gbà á lẹ́ẹ̀kan. Àpẹẹrẹ: ọmọ ẹgbẹ́ 10 ń san KES 1,000 lóṣù; lóṣù kọ̀ọ̀kan, ọmọ ẹgbẹ́ kan ń gba KES 10,000.",
            "Ó dára fún owó ńlá lẹ́ẹ̀kan: owó ilé-ìwé, ẹ̀rọ ìránṣọ, ọjà fún ṣọ́ọ̀bù. Ewu rẹ̀: àwọn tí ó gbà á ní kùtùkùtù lè dẹ́kun sísan, kò sì sí ẹni tí ó jèrè kankan lórí owó náà. Àwọn tí ó gbà á ní kùtùkùtù rí owó ṣáájú láìsan èlé; àwọn tí ó gbà á kẹ́yìn ló ń yá ẹgbẹ́ lówó ní tòótọ́.",
            "Ẹgbẹ́ ìfowópamọ́-àti-ìyáwó (VSLA, ASCA tàbí ọ̀pọ̀ chama, àti ní ọ̀nà tí ó tóbi tí ó sì ní ìforúkọsílẹ̀, SACCO) ń pa owó náà mọ́ pọ̀. Àwọn ọmọ ẹgbẹ́ ń fowó pamọ́ ní ìpàdé kọ̀ọ̀kan, owó ìfipamọ́ náà di owó ìyáwó, àwọn ọmọ ẹgbẹ́ ń yá owó, wọ́n sì ń san án padà pẹ̀lú owó iṣẹ́ tí ẹgbẹ́ fi lélẹ̀, ní ìparí ìyípo (nígbà púpọ̀ nǹkan bí ọdún kan) a ó pín gbogbo rẹ̀ gẹ́gẹ́ bí iye tí ẹnì kọ̀ọ̀kan fi pamọ́. Ewu rẹ̀: owó ìyáwó tí a kò san padà, àti owó tí a jí tàbí tí a kò kọ sílẹ̀ dáadáa.",
            "Yan gẹ́gẹ́ bí èrò rẹ. Owó ńlá láìpẹ́: ẹgbẹ́ àjọ lè bá a mu. Fífowó pamọ́ déédéé pẹ̀lú àǹfààní láti yá owó: ẹgbẹ́ ìfowópamọ́-àti-ìyáwó lè bá a mu. Ọ̀pọ̀ ènìyàn ń lo méjèèjì."
          ],
          words: [["Ẹgbẹ́ àjọ (ROSCA)", "àwọn ọmọ ẹgbẹ́ ń san iye kan náà, ẹnì kọ̀ọ̀kan sì ń gba gbogbo owó náà lẹ́ẹ̀kọ̀ọ̀kan."], ["Ẹgbẹ́ ìfowópamọ́-àti-ìyáwó", "àwọn ọmọ ẹgbẹ́ ń fowó pamọ́ sínú àpò kan, wọ́n ń yá ara wọn lówó, wọ́n sì ń pín owó náà ní ìparí ìyípo (VSLA, ASCA, SACCO)."], ["Pínpín owó (share-out)", "ọjọ́ tí ẹgbẹ́ ń san gbogbo owó ìfipamọ́ àti èrè fún àwọn ọmọ ẹgbẹ́ gẹ́gẹ́ bí iye tí wọ́n fi pamọ́."]],
          slides: [
            { title: "Ẹgbẹ́ àjọ", bullets: ["Gbogbo ènìyàn ń san iye kan náà; ẹnì kan ń gba owó náà lẹ́ẹ̀kọ̀ọ̀kan", "Èsúsú, àjọ, susu, tontine, njangi, gam'eya, daret", "Ó dára fún owó ńlá; ewu: àwọn tí ó kọ́kọ́ gbà lè dẹ́kun sísan"] },
            { title: "Ẹgbẹ́ ìfowópamọ́-àti-ìyáwó", bullets: ["Owó ìfipamọ́ di owó ìyáwó", "Àwọn ọmọ ẹgbẹ́ ń yá owó, wọ́n sì ń san án padà pẹ̀lú owó iṣẹ́", "Pínpín gẹ́gẹ́ bí iye tí ẹnì kọ̀ọ̀kan fi pamọ́; ewu: owó ìyáwó tí a kò san"] },
            { title: "Yan gẹ́gẹ́ bí èrò rẹ", bullets: ["Owó ńlá láìpẹ́: ẹgbẹ́ àjọ lè bá a mu", "Fífowó pamọ́ déédéé àti yíyá owó: VSLA tàbí SACCO", "Ọ̀pọ̀ ènìyàn ń lo méjèèjì"] }
          ],
          sources: [VSLA],
          tryIt: "Ronú nípa ẹgbẹ́ kan tí o wà nínú rẹ̀ tàbí tí o mọ̀. Ṣé ẹgbẹ́ àjọ ni, àbí ẹgbẹ́ ìfowópamọ́-àti-ìyáwó? Kọ nǹkan kan tí ó dára fún àti ewu kan sílẹ̀.",
          youCanNow: "ṣàlàyé irú ẹgbẹ́ ìfowópamọ́ méjì, kí o sì yan èyí tí ó bá èrò rẹ mu.",
          quickCheck: [
            { objective: "O1", q: "Ọmọ ẹgbẹ́ méjìlá ń san GHS 200 lóṣù, ọmọ ẹgbẹ́ kan sì ń gba gbogbo owó náà lóṣù kọ̀ọ̀kan. Irú ẹgbẹ́ wo nìyí?", options: ["Ẹgbẹ́ ìfowópamọ́-àti-ìyáwó", "Báńkì microfinance", "Ẹgbẹ́ àjọ", "Ponzi"], answer: 2, why: "Gbogbo ènìyàn ń san iye kan náà, wọ́n sì ń gba owó náà lẹ́ẹ̀kọ̀ọ̀kan: ẹgbẹ́ àjọ (susu) ni." },
            { objective: "O1", q: "Nínú VSLA, báwo ni a ṣe ń pín owó ní ìparí ìyípo?", options: ["Gẹ́gẹ́ bí iye tí ọmọ ẹgbẹ́ kọ̀ọ̀kan fi pamọ́", "Bákan náà fún gbogbo ènìyàn, láìka iye tí wọ́n fi pamọ́ sí", "Gbogbo rẹ̀ fún alága", "Fún ẹni tí ó yá owó jù"], answer: 0, why: "Àwọn ọmọ ẹgbẹ́ tí ó fi owó púpọ̀ pamọ́ ń rí ìpín tí ó tóbi jù nínú owó náà àti èrè rẹ̀." }
          ]
        },
        {
          title: "Èrò rẹ àti ètò ìfowópamọ́ oṣooṣù",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kọ ètò ìfowópamọ́ tí ó máa dé èrò kan ní ọjọ́ kan.",
          text: [
            "Ìfowópamọ́ máa ń ṣiṣẹ́ dáadáa jù pẹ̀lú èrò tí ó yé: ohun tí ó wà fún, iye tí ó máa ná, àti ìgbà tí o nílò rẹ̀. \"Owó ilé-ìwé NGN 120,000 ní oṣù January\" jẹ́ èrò. \"Fowó pamọ́ sí i\" kì í ṣe èrò.",
            "Pín àpapọ̀ owó náà sí iye ọ̀sẹ̀ tàbí oṣù tí o ní. Àpẹẹrẹ: NGN 120,000 ní oṣù 8 jẹ́ NGN 15,000 lóṣù. Tí ìyẹn bá pọ̀ jù, yí ọjọ́ padà, yí èrò padà, tàbí dín ìnáwó rẹ kù. Wo owó tí ò ń wọlé fún ọ ní oṣù tí ó dára àti oṣù tí kò dára; oníṣòwò lè fi púpọ̀ pamọ́ ní àsìkò tí ọjà ń tà.",
            "Pinnu ibi tí owó náà máa wà: ẹgbẹ́ ìfowópamọ́, SACCO, báńkì microfinance, báńkì tàbí àkáǹtì ìfowópamọ́ lórí fóònù. Pa owó pàjáwìrì díẹ̀ mọ́ tí o lè rí kíákíá, yàtọ̀ sí owó fún èrò rẹ.",
            "Kọ́kọ́ san fún ara rẹ: fowó pamọ́ ní ọjọ́ tí owó bá wọlé, kí o tó ná an sórí nǹkan míì. Àpẹẹrẹ: Aïcha, onídìrí ní Abidjan, ń fi XOF 5,000 sínú tontine rẹ̀ ní gbogbo ọjọ́ Àbámẹ́ta kí ó tó ra nǹkan míì."
          ],
          steps: ["Kọ èrò náà, àpapọ̀ owó àti ọjọ́ sílẹ̀.", "Ka iye ọ̀sẹ̀ tàbí oṣù títí di ọjọ́ náà.", "Pín àpapọ̀ owó náà sí iye yẹn.", "Fi wé owó tí ò ń wọlé fún ọ ní oṣù tí kò dára.", "Yan ibi tí o máa fi pamọ́ sí.", "Fowó pamọ́ ní ọjọ́ tí owó bá wọlé."],
          words: [["Èrò ìfowópamọ́", "ohun tí ò ń fowó pamọ́ fún, iye tí ó máa ná àti ìgbà tí o nílò rẹ̀."], ["Owó pàjáwìrì", "owó díẹ̀ tí a fi sí ẹ̀gbẹ́ fún ìṣòro òjijì, tí ó rọrùn láti rí."]],
          slides: [
            { title: "Èrò tí ó yé", bullets: ["Ohun tí ó wà fún, iye rẹ̀, àti ìgbà wo", "\"Owó ilé-ìwé NGN 120,000 ní oṣù January\"", "Kì í ṣe \"fowó pamọ́ sí i\" lásán"] },
            { title: "Ṣe ìṣirò náà", bullets: ["Àpapọ̀ / oṣù = iye lóṣù", "NGN 120,000 / 8 = NGN 15,000 (àpẹẹrẹ)", "Ó pọ̀ jù? Yí ọjọ́, èrò tàbí ìnáwó padà"] },
            { title: "Ibo àti ìgbà wo", bullets: ["Ẹgbẹ́, SACCO, báńkì microfinance tàbí àkáǹtì", "Pa owó pàjáwìrì mọ́ lọ́tọ̀", "Kọ́kọ́ fowó pamọ́, ní ọjọ́ tí owó bá wọlé"] }
          ],
          tryIt: "Kọ èrò gidi kan pẹ̀lú àpapọ̀ owó àti ọjọ́ sílẹ̀. Pín in láti rí iye lọ́sẹ̀ tàbí lóṣù, kí o sì fi wé owó tí ò ń wọlé fún ọ ní oṣù tí kò dára. Yí i padà títí yóò fi ṣiṣẹ́.",
          youCanNow: "kọ ètò ìfowópamọ́ pẹ̀lú èrò, àpapọ̀ owó, ọjọ́ àti iye lọ́sẹ̀ tàbí lóṣù.",
          quickCheck: [
            { objective: "O2", q: "O nílò KES 24,000 ní oṣù 6. Èló ni o máa fi pamọ́ lóṣù kọ̀ọ̀kan?", options: ["KES 2,400", "KES 6,000", "KES 3,000", "KES 4,000"], answer: 3, why: "24,000 pín sí 6 jẹ́ 4,000." },
            { objective: "O2", q: "Èwo ni èrò ìfowópamọ́ tí ó yé?", options: ["\"Fowó pamọ́ sí i lọ́dún yìí\"", "\"Ẹ̀rọ ìránṣọ tí ó jẹ́ GHS 1,500 ní oṣù June\"", "\"Di olówó\"", "\"Dẹ́kun ìnáwó\""], answer: 1, why: "Ó sọ ohun náà, iye rẹ̀ àti ìgbà wo." }
          ]
        },
        {
          title: "Ṣíṣàyẹ̀wò òfin ẹgbẹ́ kí o tó wọ̀ ọ́",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ṣàyẹ̀wò òfin ẹgbẹ́ kan tí a kọ sílẹ̀ fún àwọn kókó pàtàkì méje.",
          text: [
            "Ẹgbẹ́ tí ó lágbára ní òfin tí a kọ sílẹ̀, tí a sábà máa ń pè ní ìwé òfin (constitution) tàbí by-laws, tí gbogbo ọmọ ẹgbẹ́ fọwọ́ sí. Béèrè láti rí i kí o tó wọlé. Tí kò bá sí, ní kí ẹgbẹ́ náà kọ́kọ́ kọ ọ́.",
            "Ṣàyẹ̀wò nǹkan méje: 1. Owó ìdáwó: èló, ìgbà mélòó, àti ohun tí ó máa ṣẹlẹ̀ tí o bá san án pẹ́ (owó ìtanràn). 2. Ìpàdé: ìgbà wo àti ibo. 3. Ìyáwó: ta ni ó lè yá owó, èló, fún ìgbà mélòó, owó iṣẹ́, àti ohun tí ó máa ṣẹlẹ̀ tí a kò bá san owó ìyáwó padà. 4. Owó ìtanràn àti ìbáwí. 5. Kíkúrò: bí o ṣe máa gba owó rẹ padà tí o bá kúrò tàbí kó lọ sí ibòmíì. 6. Pínpín owó tàbí ètò ìtẹ̀léra àjọ: ìgbà wo àti báwo. 7. Ẹni tí ó ń darí owó: àwọn olórí ẹgbẹ́, bí a ṣe ń yàn wọ́n, àti ẹni tí ó ń fọwọ́ sí.",
            "Àwọn ẹgbẹ́ kan ń forúkọ sílẹ̀, fún àpẹẹrẹ gẹ́gẹ́ bí ẹgbẹ́ ìrànra-ẹni-lọ́wọ́, ẹgbẹ́ àjùmọ̀ṣe (cooperative) tàbí SACCO; béèrè lọ́wọ́ ọ́fíìsì ìdàgbàsókè àwùjọ tàbí ọ́fíìsì cooperative ní àdúgbò rẹ ohun tí ó kàn ọ́. Ẹgbẹ́ tí ó ń gba owó ìfipamọ́ lọ́wọ́ gbogbo ènìyàn gẹ́gẹ́ bí òwò lè nílò ìwé àṣẹ láti ọ̀dọ̀ àjọ alábòójútó.",
            "Àpẹẹrẹ: chama Grace ní Nakuru kọ sínú òfin rẹ̀ pé akápò kò gbọdọ̀ tún ní kọ́kọ́rọ́ àpótí owó, àwọn ọmọ ẹgbẹ́ sì ń dìbò lórí gbogbo owó ìyáwó."
          ],
          steps: ["Béèrè láti rí òfin tí a kọ sílẹ̀.", "Ṣàyẹ̀wò owó ìdáwó àti owó ìtanràn fún sísan pẹ́.", "Ṣàyẹ̀wò ọjọ́ ìpàdé.", "Ṣàyẹ̀wò òfin ìyáwó àti ohun tí ó máa ṣẹlẹ̀ tí a kò bá san owó ìyáwó padà.", "Ṣàyẹ̀wò bí o ṣe máa kúrò kí o sì gba owó rẹ padà.", "Ṣàyẹ̀wò pínpín owó tàbí ètò ìtẹ̀léra àjọ.", "Ṣàyẹ̀wò ẹni tí ó ń darí owó tí ó sì ń fọwọ́ sí i."],
          words: [["Ìwé òfin (constitution, by-laws)", "àwọn òfin tí ẹgbẹ́ kan fọwọ́ sí tí ó sì ń tẹ̀lé, tí a kọ sílẹ̀."], ["Àwọn olórí ẹgbẹ́", "àwọn ọmọ ẹgbẹ́ tí a yàn láti darí: nígbà púpọ̀ alága, akọ̀wé àti akápò."]],
          slides: [
            { title: "Béèrè òfin tí a kọ sílẹ̀", bullets: ["Ìwé òfin tàbí by-laws tí àwọn ọmọ ẹgbẹ́ fọwọ́ sí", "Kò sí òfin? Ní kí ẹgbẹ́ náà kọ ọ́"] },
            { title: "Nǹkan méje láti ṣàyẹ̀wò", bullets: ["Owó ìdáwó àti owó ìtanràn; ìpàdé", "Ìyáwó àti owó ìyáwó tí a kò san; kíkúrò", "Pínpín owó tàbí ìtẹ̀léra àjọ; ẹni tí ó ń darí owó"] },
            { title: "Ìforúkọsílẹ̀", bullets: ["Àwọn ẹgbẹ́ kan ń forúkọ sílẹ̀ ní àdúgbò", "Béèrè lọ́wọ́ ọ́fíìsì ìdàgbàsókè àwùjọ tàbí cooperative", "Gbígba owó ìfipamọ́ gbogbo ènìyàn lè nílò ìwé àṣẹ"] }
          ],
          sources: [SASRA, BCEAO_SFD],
          tryIt: "Gba òfin ẹgbẹ́ kan tí o wà nínú rẹ̀ tàbí tí o fẹ́ wọ̀ (tàbí kọ ohun tí o mọ̀ sílẹ̀). Fi àmì sí kókó kọ̀ọ̀kan nínú méje. Kọ àwọn tí kò sí sílẹ̀ gẹ́gẹ́ bí ìbéèrè láti béèrè ní ìpàdé tó kàn.",
          youCanNow: "ṣàyẹ̀wò òfin ẹgbẹ́ kan fún àwọn kókó pàtàkì méje kí o tó fi owó rẹ lé e lọ́wọ́.",
          quickCheck: [
            { objective: "O3", q: "Ìbéèrè wo ló ń ṣàyẹ̀wò òfin \"kíkúrò\"?", options: ["Ìgbà wo la máa ń pàdé?", "Ta ni alága?", "Àwọ̀ wo ni àpótí owó?", "Tí mo bá kó lọ sí ìlú míì, báwo ni mo ṣe máa gba owó ìfipamọ́ mi padà?"], answer: 3, why: "Òfin kíkúrò ń sọ bí ọmọ ẹgbẹ́ ṣe máa gba owó rẹ̀ padà." },
            { objective: "O3", q: "Ẹgbẹ́ kan kò ní òfin tí a kọ sílẹ̀. Kí ni ìgbésẹ̀ ọlọ́gbọ́n kí o tó wọ̀ ọ́?", options: ["Ní kí àwọn ọmọ ẹgbẹ́ kọ́kọ́ fohùn ṣọ̀kan kí wọ́n sì kọ òfin sílẹ̀", "Wọ̀ ọ́ kí o sì retí ohun tí ó dára", "Fi owó ìfipamọ́ rẹ lé alága lọ́wọ́ kí ó bá ọ pa á mọ́", "Wọ ẹgbẹ́ méjì kí ó lè dájú"], answer: 0, why: "Òfin tí a kọ sílẹ̀ ń dènà ọ̀pọ̀ jù lọ èdè-àìyedè nípa owó." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Fífowó pamọ́ pọ̀",
        questions: [
          { objective: "O1", q: "Nínú ẹgbẹ́ àjọ, ta ni ewu rẹ̀ pọ̀ jù?", options: ["Ọmọ ẹgbẹ́ tí ó kọ́kọ́ gba owó náà", "Àwọn tí ó gbà á kẹ́yìn, tí àwọn tí ó kọ́kọ́ gbà bá dẹ́kun sísan", "Báńkì", "Kò sí ẹnìkan"], answer: 1, why: "Àwọn tí ó gbà á kẹ́yìn ti san owó fún ọ̀pọ̀ oṣù, wọ́n sì máa pàdánù tí àwọn tí ó kọ́kọ́ gbà bá dẹ́kun sísan." },
          { objective: "O1", q: "O fẹ́ máa fowó pamọ́ déédéé kí o sì yá owó kékeré nígbà ọdún. Èwo ló lè bá ọ mu jù?", options: ["Ẹgbẹ́ àjọ nìkan", "Ponzi", "Fífi owó pamọ́ sábẹ́ ibùsùn", "Ẹgbẹ́ ìfowópamọ́-àti-ìyáwó bí VSLA"], answer: 3, why: "VSLA ń jẹ́ kí àwọn ọmọ ẹgbẹ́ fowó pamọ́ kí wọ́n sì yá owó láti inú àpò àjùmọ̀ní." },
          { objective: "O2", q: "Èrò rẹ ni GHS 900 ní oṣù 3. Èló lóṣù kọ̀ọ̀kan?", options: ["GHS 300", "GHS 450", "GHS 270", "GHS 90"], answer: 0, why: "900 pín sí 3 jẹ́ 300." },
          { objective: "O3", q: "Èwo KÌ Í ṢE ọ̀kan lára òfin méje tí a máa ṣàyẹ̀wò?", options: ["Òfin ìyáwó", "Pínpín owó tàbí ìtẹ̀léra àjọ", "Oúnjẹ tí alága fẹ́ràn jù", "Ẹni tí ó ń darí owó"], answer: 2, why: "Àwọn méje ni owó ìdáwó, ìpàdé, ìyáwó, owó ìtanràn, kíkúrò, pínpín owó àti dídarí owó." },
          { objective: "O3", q: "Kí ló dé tí a fi ń ṣàyẹ̀wò ẹni tí ó ń fọwọ́ sí owó tí ó sì ń darí rẹ̀?", options: ["Kí ẹnì kan ṣoṣo má lè gbé e lọ", "Kí ìpàdé lè kúrú", "Láti dín owó ìtanràn kù", "Kí ẹgbẹ́ má lè san owó orí"], answer: 0, why: "Dídarí owó pọ̀ ń dá olórí kan dúró láti má ṣi owó náà lò." }
        ]
      }
    },
    {
      name: "Orí 2: Àkọsílẹ̀, owó ìyáwó àti ààbò",
      lessons: [
        {
          title: "Àkọsílẹ̀ àti ààbò owó ní ìpàdé",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kọ owó ìdáwó àti owó ìyáwó sílẹ̀, kí o sì ṣàyẹ̀wò pé owó lọ́wọ́ bá àkọsílẹ̀ mu.",
          text: [
            "Ọ̀pọ̀ jù lọ ẹgbẹ́ tí ó wó bẹ̀rẹ̀ láti inú àkọsílẹ̀ tí kò dára tàbí ẹnì kan ṣoṣo tí ó ń mú owó. Àwọn ẹgbẹ́ rere ń kọ àkọsílẹ̀ tí gbogbo ọmọ ẹgbẹ́ lè tẹ̀lé.",
            "Àwọn irinṣẹ́ tí ó wọ́pọ̀: ọmọ ẹgbẹ́ kọ̀ọ̀kan ní ìwé ìpamọ́ (passbook) tí ó ń fi owó ìfipamọ́ àti owó ìyáwó rẹ̀ hàn, ẹgbẹ́ ní ìwé àkọsílẹ̀, nínú ọ̀pọ̀ VSLA, àpótí owó ní àgádágodo mẹ́ta pẹ̀lú kọ́kọ́rọ́ mẹ́ta tí ọmọ ẹgbẹ́ mẹ́ta ọ̀tọ̀ọ̀tọ̀ ń mú, tí kì í ṣe ẹni tí ó ń tọ́jú àpótí náà. Àwọn ẹgbẹ́ kan ń fi owó sínú àkáǹtì báńkì tàbí àkáǹtì fóònù ẹgbẹ́ tí ó nílò ẹni méjì tàbí mẹ́ta láti fọwọ́ sí i.",
            "Ní ìpàdé kọ̀ọ̀kan: a ń ka gbogbo owó ìdáwó àti ìsanpadà níwájú àwọn ọmọ ẹgbẹ́, a ń kọ ọ́ sínú passbook àti ìwé àkọsílẹ̀, a sì ń ka àpapọ̀ rẹ̀ sókè. Ní ìparí, owó tí a kà gbọ́dọ̀ bá àkọsílẹ̀ mu. Tí kò bá bá a mu, dúró kí o sì wá ìdí rẹ̀ kí ẹnikẹ́ni tó lọ.",
            "Àpẹẹrẹ: nínú VSLA kan ní Tamale, akọ̀wé ka iye owó tí ó kù sókè, ọmọ ẹgbẹ́ méjì sì ka owó lọ́wọ́. Wọ́n bára mu: GHS 3,450. A ti àpótí náà pa, ọmọ ẹgbẹ́ mẹ́ta ọ̀tọ̀ọ̀tọ̀ sì mú kọ́kọ́rọ́ lọ sílé."
          ],
          steps: ["Ka owó ìsanwó kọ̀ọ̀kan níwájú àwọn ọmọ ẹgbẹ́.", "Kọ ọ́ sínú passbook ọmọ ẹgbẹ́ náà àti ìwé àkọsílẹ̀.", "Ka àpapọ̀ sókè.", "Ka owó lọ́wọ́ kí o sì fi wé ìwé àkọsílẹ̀.", "Tí wọn kò bá bára mu, wá ìdí rẹ̀ kí ẹnikẹ́ni tó lọ.", "Ti owó pa; kí kọ́kọ́rọ́ tàbí agbára fífọwọ́sí wà lọ́wọ́ ọmọ ẹgbẹ́ ọ̀tọ̀ọ̀tọ̀."],
          words: [["Passbook (ìwé ìpamọ́)", "ìwé ti ọmọ ẹgbẹ́ fúnra rẹ̀ tí ó ń fi owó ìfipamọ́ àti owó ìyáwó rẹ̀ hàn."], ["Olùfọwọ́sí (signatory)", "ẹni tí a gbà láàyè láti fọwọ́ sí nǹkan fún àkáǹtì ẹgbẹ́; àwọn ẹgbẹ́ rere ń nílò ẹni méjì tàbí jù bẹ́ẹ̀ lọ."]],
          slides: [
            { title: "Ìdí tí àkọsílẹ̀ fi ṣe pàtàkì", bullets: ["Àkọsílẹ̀ tí kò dára àti ẹnì kan ṣoṣo tí ó ń mú owó", "ni ibi tí ọ̀pọ̀ ẹgbẹ́ ti ń bàjẹ́"] },
            { title: "Àwọn irinṣẹ́", bullets: ["Passbook àti ìwé àkọsílẹ̀", "Àpótí owó pẹ̀lú àgádágodo mẹ́ta, ẹni mẹ́ta tí ó ń mú kọ́kọ́rọ́", "Àkáǹtì ẹgbẹ́ pẹ̀lú olùfọwọ́sí méjì tàbí jù bẹ́ẹ̀ lọ"] },
            { title: "Ní gbogbo ìpàdé", bullets: ["Ka owó níwájú àwọn ọmọ ẹgbẹ́; kọ ọ́ sílẹ̀", "Ka àpapọ̀ sókè", "Owó gbọ́dọ̀ bá àkọsílẹ̀ mu kí ẹnikẹ́ni tó lọ"] }
          ],
          sources: [VSLA],
          tryIt: "Ṣe tábìlì àkọsílẹ̀ tó rọrùn fún ìpàdé kan: orúkọ ọmọ ẹgbẹ́, owó ìfipamọ́ tí ó san, owó ìyáwó tí ó san padà, owó ìyáwó tuntun. Fi ọmọ ẹgbẹ́ mẹ́ta àpẹẹrẹ kún un. Ṣírò àpapọ̀ ìlà kọ̀ọ̀kan kí o sì ṣàyẹ̀wò pé àpapọ̀ bá owó tí o máa kà mu.",
          youCanNow: "kọ owó ìdáwó àti owó ìyáwó sílẹ̀ ní ìpàdé, kí o sì ṣàyẹ̀wò pé owó lọ́wọ́ bá àkọsílẹ̀ mu.",
          quickCheck: [
            { objective: "O4", q: "Ní ìparí ìpàdé, owó lọ́wọ́ fi GHS 200 kéré sí ìwé àkọsílẹ̀. Kí ni o máa ṣe?", options: ["Fojú fò ó; yóò bára mu nígbà míì", "Jẹ́ kí akápò ṣàlàyé rẹ̀ lóṣù tó ń bọ̀", "Dúró kí o sì wá ìdí rẹ̀ kí ẹnikẹ́ni tó lọ", "Ya ojú-ìwé náà kúrò"], answer: 2, why: "A gbọ́dọ̀ wá ìdí ìyàtọ̀ nígbà tí gbogbo ènìyàn ṣì wà níbẹ̀ tí wọ́n sì ṣì rántí." },
            { objective: "O4", q: "Kí ló dé tí ọ̀pọ̀ VSLA fi ń fún ọmọ ẹgbẹ́ mẹ́ta ọ̀tọ̀ọ̀tọ̀ ní kọ́kọ́rọ́ mẹ́ta náà?", options: ["Kí ẹnì kan ṣoṣo má lè ṣí àpótí náà", "Nítorí pé àgádágodo kò wọ́n", "Kí ìpàdé lè gùn", "Kí ẹni tí ó ń tọ́jú àpótí lè ṣí i nílé"], answer: 0, why: "Kọ́kọ́rọ́ tí a pín túmọ̀ sí pé a lè ṣí owó náà kìkì nígbà tí àwọn ọmọ ẹgbẹ́ wà níbẹ̀." }
          ]
        },
        {
          title: "Microfinance àti owó ìyáwó ẹgbẹ́",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣírò àpapọ̀ owó tí o máa san padà lórí owó ìyáwó, kí o sì fi ọjọ́ ìsanpadà wé owó tí ò ń wọlé fún ọ.",
          text: [
            "Àwọn báńkì àti ilé-iṣẹ́ microfinance ń yá àwọn ènìyàn àti òwò kékeré ní owó kékeré, nígbà púpọ̀ nípasẹ̀ ẹgbẹ́. Ní Nàìjíríà, Central Bank (CBN) ló ń fún àwọn báńkì microfinance ní ìwé àṣẹ; ní Kenya, Central Bank ló ń fún àwọn báńkì microfinance àti àwọn olùyáwó oní-díjítà ní ìwé àṣẹ; ní Ghana, Bank of Ghana ń kọ àwọn ilé-iṣẹ́ tí ó ní ìwé àṣẹ sílẹ̀; ní àwọn orílẹ̀-èdè XOF bí Senegal àti Côte d'Ivoire, microfinance ń tẹ̀lé òfin BCEAO.",
            "Má ṣe fi owó ìyáwó wéra nípa èlé tí wọ́n sọ nìkan láéláé. Béèrè àpapọ̀ owó tí o máa san padà, ní kíkọ, pẹ̀lú gbogbo owó iṣẹ́, ìbánigbófò àti owó míì. Àpẹẹrẹ (iye àròsọ): yá KES 10,000; san KES 1,000 lọ́sẹ̀ fún ọ̀sẹ̀ 12. Àpapọ̀ tí o san padà: KES 12,000, nítorí náà owó ìyáwó náà ná ọ ní KES 2,000.",
            "Fi ọjọ́ ìsanpadà wé owó tí ò ń wọlé fún ọ. Ìsanpadà ọlọ́sọ̀ọ̀sẹ̀ ṣòro tí o bá ń gba owó lóṣù tàbí ní àsìkò kan nìkan. Béèrè ohun tí ó máa ṣẹlẹ̀ tí o bá san án pẹ́: owó ìtanràn, àti bóyá wọn yóò ròyìn rẹ̀ fún credit bureau.",
            "Ọ̀pọ̀ owó ìyáwó ẹgbẹ́ ń lo ojúṣe àpapọ̀ (joint liability): tí ọmọ ẹgbẹ́ kan kò bá san, àwọn yòókù gbọ́dọ̀ san án fún un. Wọ ẹgbẹ́ pẹ̀lú àwọn tí o gbẹ́kẹ̀ lé nìkan, kí o sì mọ̀ pé o lè ní láti san fún ẹlòmíì. Yá owó fún ohun tí ó ń mówó wọlé tàbí tí ó ń dín ìnáwó kù, kì í ṣe láti san owó ìyáwó míì."
          ],
          steps: ["Béèrè àpapọ̀ owó tí o máa san padà, ní kíkọ, pẹ̀lú gbogbo owó iṣẹ́.", "Ṣírò iye tí ó ná ọ: àpapọ̀ tí o san padà yọ owó tí o yá kúrò.", "Kọ ọjọ́ ìsanpadà sílẹ̀.", "Fi ọjọ́ kọ̀ọ̀kan wé owó tí ò ń wọlé fún ọ ní oṣù tí kò dára.", "Béèrè nípa owó ìtanràn fún sísan pẹ́ àti ìròyìn credit bureau.", "Béèrè bóyá owó ìyáwó náà ní ojúṣe àpapọ̀."],
          words: [["Microfinance", "owó ìyáwó kékeré àti iṣẹ́ ìfowópamọ́ fún àwọn ènìyàn àti òwò kékeré."], ["Àpapọ̀ ìsanpadà", "gbogbo owó tí o san padà, pẹ̀lú èlé àti owó iṣẹ́."], ["Ojúṣe àpapọ̀ (joint liability)", "àwọn ọmọ ẹgbẹ́ gbọ́dọ̀ san owó fún ọmọ ẹgbẹ́ tí kò san owó ìyáwó rẹ̀ padà."], ["Credit bureau", "ilé-iṣẹ́ tí ó ń kọ bí àwọn ènìyàn ṣe ń san owó ìyáwó padà sílẹ̀; àwọn olùyáwó máa ń wò ó."]],
          slides: [
            { title: "Ta ló ń yáni lówó", bullets: ["Báńkì àti ilé-iṣẹ́ microfinance, nígbà púpọ̀ fún ẹgbẹ́", "Central bank ló ń fún wọn ní ìwé àṣẹ (CBN, CBK, Bank of Ghana)", "Àwọn orílẹ̀-èdè XOF: òfin BCEAO"] },
            { title: "Fi àpapọ̀ ìsanpadà wéra", bullets: ["Béèrè rẹ̀ ní kíkọ, pẹ̀lú gbogbo owó iṣẹ́", "Àpẹẹrẹ: KES 1,000 x ọ̀sẹ̀ 12 = KES 12,000", "Iye tí ó ná ọ = KES 12,000 - KES 10,000 = KES 2,000"] },
            { title: "Ọjọ́ àti ojúṣe àpapọ̀", bullets: ["Ọjọ́ ìsanpadà gbọ́dọ̀ bá owó tí ò ń wọlé fún ọ mu", "Owó ìtanràn fún sísan pẹ́; credit bureau", "Owó ìyáwó ẹgbẹ́: o lè san fún àwọn ẹlòmíì"] }
          ],
          sources: [CBN_MFB, CBK_DCP, BOG, BCEAO_SFD],
          tryIt: "Lo àpẹẹrẹ yìí tàbí ìfilọ̀ gidi kan: yá NGN 50,000 kí o sì san NGN 4,800 lọ́sẹ̀ fún ọ̀sẹ̀ 12. Ṣírò àpapọ̀ tí o san padà àti iye tí ó ná ọ. Lẹ́yìn náà kọ bóyá ìsanpadà ọlọ́sọ̀ọ̀sẹ̀ bá owó tí ò ń wọlé fún ọ mu.",
          youCanNow: "ṣírò àpapọ̀ owó tí o máa san padà lórí owó ìyáwó, kí o sì ṣàyẹ̀wò pé ọjọ́ ìsanpadà bá owó tí ò ń wọlé fún ọ mu kí o tó fọwọ́ sí i.",
          quickCheck: [
            { objective: "O5", q: "O yá GHS 1,000, o sì ń san GHS 120 lóṣù fún oṣù 10. Kí ni àpapọ̀ tí o san padà?", options: ["GHS 1,000", "GHS 1,120", "GHS 1,200", "GHS 120"], answer: 2, why: "120 x 10 = 1,200." },
            { objective: "O5", q: "Nínú owó ìyáwó ẹgbẹ́ tí ó ní ojúṣe àpapọ̀, ọmọ ẹgbẹ́ kan dẹ́kun sísan. Kí ló lè ṣẹlẹ̀?", options: ["Kò sí nǹkan", "Àwọn ọmọ ẹgbẹ́ yòókù gbọ́dọ̀ san án fún ọmọ ẹgbẹ́ náà", "Olùyáwó máa fagi lé owó ìyáwó náà", "Alága ẹgbẹ́ nìkan ló máa san"], answer: 1, why: "Ojúṣe àpapọ̀ túmọ̀ sí pé àwọn ọmọ ẹgbẹ́ ń san owó ìyáwó tí ẹlòmíì kò san." }
          ]
        },
        {
          title: "Ponzi, olùyáwó ayédèrú àti ètò rẹ",
          objectives: ["O6", "O2"],
          minutes: 6,
          goal: "Dá àwọn àmì ìkìlọ̀ Ponzi tàbí olùyáwó ayédèrú mọ̀, kí o sì wá ilé-iṣẹ́ kan lórí àkọsílẹ̀ àjọ alábòójútó.",
          text: [
            "Ponzi ń san owó fún àwọn tí ó kọ́kọ́ wọlé pẹ̀lú owó àwọn tí ó ṣẹ̀ṣẹ̀ wọlé. Ó máa ń wó nígbà gbogbo, ọ̀pọ̀ jù lọ ènìyàn sì máa ń pàdánù owó ìfipamọ́ wọn. Àwọn àmì ìkìlọ̀: ìlérí láti ṣe owó rẹ ní ìlọ́po méjì tàbí èrè gíga tí ó dájú láàárín àkókò kúkúrú, títì ọ́ láti mú ọ̀rẹ́ àti ẹbí wọlé, èrè fún mímú ènìyàn wọlé, òwò tí ẹnikẹ́ni kò lè ṣàlàyé, àti ìpolówó lórí WhatsApp, TikTok, Instagram tàbí Telegram àti láti ọ̀dọ̀ àwọn gbajúmọ̀ orí ayélujára. SEC Nàìjíríà ti kìlọ̀ nípa irú ètò bẹ́ẹ̀ ní ọ̀pọ̀ ìgbà.",
            "Àwọn olùyáwó ayédèrú àti app ìyáwó ayédèrú: wọ́n ń béèrè owó kí wọ́n tó fún ọ ní owó ìyáwó, wọ́n ń béèrè PIN tàbí ọ̀rọ̀ aṣínà rẹ, wọ́n ń béèrè láti rí gbogbo nọ́mbà inú fóònù rẹ, tàbí wọ́n ń halẹ̀ mọ́ àwọn tí ó yá owó tí wọ́n sì ń dójú tì wọ́n. Olùyáwó gidi kò nílò PIN rẹ láéláé.",
            "Ṣàyẹ̀wò kí o tó sanwó tàbí pín ìsọfúnni. Wá ilé-iṣẹ́ náà lórí àkọsílẹ̀ ìjọba ti àjọ alábòójútó: SASRA fún àwọn SACCO tí ń gba owó ìfipamọ́, àti Central Bank of Kenya fún àwọn báńkì microfinance àti olùyáwó oní-díjítà ní Kenya; CBN fún àwọn báńkì microfinance àti àkọsílẹ̀ FCCPC ti àwọn olùyáwó oní-díjítà tí a fọwọ́ sí ní Nàìjíríà; àkọsílẹ̀ Bank of Ghana ti àwọn ilé-iṣẹ́ tí ó ní ìwé àṣẹ; BCEAO àti ilé-iṣẹ́ ìjọba tí ó ń bójú tó ìṣúná ní àwọn orílẹ̀-èdè XOF. Tí kò bá sí lórí àkọsílẹ̀ náà, má ṣe lò ó.",
            "Lẹ́yìn náà parí ètò rẹ: èrò, àpapọ̀ owó, ọjọ́, iye lọ́sẹ̀ tàbí lóṣù, ibi tí o ti ń fowó pamọ́, àti àwọn ìdáhùn ìwé àyẹ̀wò rẹ nípa ẹgbẹ́ tàbí ilé-iṣẹ́ náà."
          ],
          steps: ["Béèrè: ṣé ó ń ṣèlérí èrè tí ó dájú tàbí èrè gíga gan-an kíákíá?", "Béèrè: ṣé ó ń sanwó fún mi láti mú àwọn ẹlòmíì wọlé?", "Béèrè: ṣé ó fẹ́ owó ṣáájú, tàbí PIN mi?", "Wá a lórí àkọsílẹ̀ ìjọba ti àjọ alábòójútó.", "Kò sí lórí àkọsílẹ̀, tàbí àmì ìkìlọ̀ kankan wà: má ṣe sanwó.", "Kọ ètò ìfowópamọ́ oṣooṣù rẹ àti ìwé àyẹ̀wò rẹ."],
          words: [["Ponzi", "jìbìtì tí ó ń san owó fún àwọn ọmọ ẹgbẹ́ àtijọ́ pẹ̀lú owó àwọn tuntun títí yóò fi wó."], ["Àjọ alábòójútó (regulator)", "àjọ ìjọba tí ó ń fúnni ní ìwé àṣẹ tí ó sì ń bójú tó àwọn ilé-iṣẹ́ owó, bí central bank."], ["Ó ní ìwé àṣẹ", "àjọ alábòójútó ti gbà á láàyè lọ́nà ìjọba láti ṣe òwò yìí."]],
          slides: [
            { title: "Àwọn àmì ìkìlọ̀ Ponzi", bullets: ["\"A máa ṣe owó rẹ ní ìlọ́po méjì\"; èrè gíga tí ó dájú", "Èrè fún mímú ọ̀rẹ́ wọlé", "Òwò tí ẹnikẹ́ni kò lè ṣàlàyé; wọ́n ń polówó rẹ̀ lórí ìkànnì àjọlò"] },
            { title: "Àwọn àmì olùyáwó ayédèrú", bullets: ["Owó ṣáájú owó ìyáwó", "Ó ń béèrè PIN tàbí ọ̀rọ̀ aṣínà rẹ", "Ó fẹ́ gbogbo nọ́mbà inú fóònù rẹ; ó ń halẹ̀ mọ́ àwọn tí ó yá owó"] },
            { title: "Ṣàyẹ̀wò àkọsílẹ̀ ìjọba", bullets: ["Kenya: SASRA, CBK", "Nàìjíríà: CBN, àwọn olùyáwó tí FCCPC fọwọ́ sí", "Ghana: Bank of Ghana; XOF: BCEAO"] },
            { title: "Parí ètò rẹ", bullets: ["Èrò, àpapọ̀ owó, ọjọ́, iye lóṣù", "Ibi tí o ti ń fowó pamọ́", "Àwọn ìdáhùn ìwé àyẹ̀wò"] }
          ],
          sources: [SEC_NG, SASRA, CBK_DCP, FCCPC, BOG, BCEAO_SFD],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìfowópamọ́ oṣooṣù rẹ pẹ̀lú èrò, àpapọ̀ owó, ọjọ́, iye lọ́sẹ̀ tàbí lóṣù àti ibi tí o máa fi pamọ́ sí. Fi ìwé àyẹ̀wò kún un: òfin ẹgbẹ́ náà, bí wọ́n ṣe ń pa owó àti àkọsílẹ̀ mọ́, ìwé àṣẹ (tí o ṣàyẹ̀wò lórí àkọsílẹ̀ àjọ alábòójútó tí ó bá yẹ) àti àpapọ̀ iye owó ìyáwó èyíkéyìí.",
          youCanNow: "dá Ponzi tàbí olùyáwó ayédèrú mọ̀, wá ilé-iṣẹ́ kan lórí àkọsílẹ̀ ìjọba, kí o sì tẹ̀lé ètò ìfowópamọ́ tí o kọ sílẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Ẹgbẹ́ WhatsApp kan ṣèlérí láti ṣe owó rẹ ní ìlọ́po méjì láàárín ọjọ́ 30, ó sì ń sanwó fún ọ fún ọ̀rẹ́ kọ̀ọ̀kan tí o bá mú wá. Kí ni èyí?", options: ["Ẹgbẹ́ ìfowópamọ́", "Báńkì microfinance tí ó ní ìwé àṣẹ", "Ẹgbẹ́ àjọ", "Àwọn àmì Ponzi"], answer: 3, why: "Èrè tí ó dájú kíákíá àti èrè fún mímú ènìyàn wọlé jẹ́ àmì Ponzi tí a mọ̀ dáadáa." },
            { objective: "O6", q: "App ìyáwó kan béèrè \"owó ìṣètò\" kí ó tó fi owó ìyáwó ránṣẹ́. Kí ni o máa ṣe?", options: ["Má ṣe sanwó; wá a lórí àkọsílẹ̀ àjọ alábòójútó", "Sanwó kíákíá kí ìfilọ̀ náà tó parí", "San ìdajì", "Fún wọn ní PIN rẹ dípò rẹ̀"], answer: 0, why: "Owó ṣáájú owó ìyáwó jẹ́ àmì olùyáwó ayédèrú; kọ́kọ́ ṣàyẹ̀wò àkọsílẹ̀ ìjọba." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àkọsílẹ̀, owó ìyáwó àti ààbò",
        questions: [
          { objective: "O4", q: "Kí ló yẹ kí ó ṣẹlẹ̀ sí owó ìdáwó kọ̀ọ̀kan ní ìpàdé?", options: ["Akápò gbé e lọ sílé láti kà á", "A kà á níwájú àwọn ọmọ ẹgbẹ́, a sì kọ ọ́ sínú passbook àti ìwé àkọsílẹ̀", "A kọ ọ́ sílẹ̀ lọ́sẹ̀ tó ń bọ̀", "Ó lọ tààrà sínú fóònù alága"], answer: 1, why: "Kíkà àti kíkọ sílẹ̀ níwájú àwọn ọmọ ẹgbẹ́ ń jẹ́ kí àkọsílẹ̀ jẹ́ òótọ́." },
          { objective: "O4", q: "Àkáǹtì ẹgbẹ́ yẹ kí ó nílò:", options: ["Ìfọwọ́sí akápò nìkan", "Kò sí ìfọwọ́sí kankan", "Olùfọwọ́sí méjì tàbí jù bẹ́ẹ̀ lọ", "PIN tuntun fún ọmọ ẹgbẹ́ kọ̀ọ̀kan"], answer: 2, why: "Olùfọwọ́sí tí ó ju ẹnì kan lọ ń dá ẹnì kan dúró láti má gbé owó náà lọ." },
          { objective: "O5", q: "Kí ni ọ̀nà tí ó dára jù láti fi owó ìyáwó méjì wéra?", options: ["Òṣìṣẹ́ owó ìyáwó tí ó ní inú rere jù", "Èlé tí ó wà nínú ìpolówó", "Èyí tí wọ́n fọwọ́ sí kíákíá jù", "Àpapọ̀ owó tí o máa san padà, pẹ̀lú gbogbo owó iṣẹ́, àti ọjọ́ tí ó bá owó tí ò ń wọlé fún ọ mu"], answer: 3, why: "Àpapọ̀ ìsanpadà ń fi iye gidi hàn; ọjọ́ ń fi hàn bóyá o lè san án." },
          { objective: "O6", q: "Níbo ni o ti máa ṣàyẹ̀wò pé SACCO kan ní Kenya lè gba owó ìfipamọ́?", options: ["Àkọsílẹ̀ SASRA ti àwọn SACCO tí ó ní ìwé àṣẹ láti gba owó ìfipamọ́", "Ojú-ewé Facebook kan", "Ìwé ìpolówó SACCO náà fúnra rẹ̀ nìkan", "Ọ̀rọ̀ ọ̀rẹ́ kan"], answer: 0, why: "SASRA ló ń fún àwọn SACCO tí ń gba owó ìfipamọ́ ní ìwé àṣẹ, ó sì ń tẹ àkọsílẹ̀ wọn jáde." },
          { objective: "O6", q: "Èwo ni àmì ìkìlọ̀ olùyáwó ayédèrú?", options: ["Ó fún ọ ní àpapọ̀ iye owó ní kíkọ", "Ó ń béèrè PIN rẹ tàbí owó ṣáájú owó ìyáwó", "Ó wà lórí àkọsílẹ̀ central bank", "Ó ṣàlàyé owó ìtanràn fún sísan pẹ́"], answer: 1, why: "Olùyáwó gidi kò nílò PIN rẹ láéláé, wọn kì í sì í gba owó kí wọ́n tó yáni lówó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ẹgbẹ́ Ìfowópamọ́ àti Microfinance (Chama, VSLA, Tontine, Èsúsú)",
    questions: [
      { objective: "O1", q: "Èsúsú, susu, tontine àti gam'eya sábà máa ń jẹ́:", options: ["Báńkì microfinance", "Ẹgbẹ́ àjọ (ẹgbẹ́ ìfowópamọ́ tí ń yípo)", "App ìyáwó", "Ilé-iṣẹ́ ìbánigbófò"], answer: 1, why: "Orúkọ àdúgbò ni wọ́n fún ẹgbẹ́ tí àwọn ọmọ ẹgbẹ́ ti ń gba owó náà lẹ́ẹ̀kọ̀ọ̀kan." },
      { objective: "O1", q: "Kí ni ẹgbẹ́ ìfowópamọ́-àti-ìyáwó ń ṣe tí ẹgbẹ́ àjọ kì í ṣe?", options: ["Ó ń yá àwọn ọmọ ẹgbẹ́ ní owó ìfipamọ́, ó sì ń pín in pẹ̀lú èrè", "Ó ń fún ọmọ ẹgbẹ́ kọ̀ọ̀kan ní owó náà lẹ́ẹ̀kọ̀ọ̀kan", "Kì í pàdé rárá", "Kò ní òfin kankan"], answer: 0, why: "VSLA tàbí ASCA ní owó ìyáwó, ó sì ń pín owó ìfipamọ́ pẹ̀lú owó iṣẹ́ tí ó wọlé." },
      { objective: "O1", q: "Èwo ni ewu ẹgbẹ́ àjọ?", options: ["Ó ń san èlé gíga", "Central bank ló fún un ní ìwé àṣẹ", "Ó ní àpótí oní-àgádágodo mẹ́ta", "Àwọn tí ó kọ́kọ́ gba owó náà lè dẹ́kun sísan"], answer: 3, why: "Àwọn tí ó kọ́kọ́ gbà tí wọ́n dẹ́kun sísan ń ṣe àwọn tí ó ṣì ń dúró ní ìpalára." },
      { objective: "O2", q: "O nílò XOF 60,000 ní ọ̀sẹ̀ 12. Èló lọ́sẹ̀ kọ̀ọ̀kan?", options: ["XOF 6,000", "XOF 12,000", "XOF 4,000", "XOF 5,000"], answer: 3, why: "60,000 pín sí 12 jẹ́ 5,000." },
      { objective: "O2", q: "\"Kọ́kọ́ san fún ara rẹ\" túmọ̀ sí:", options: ["Ra ẹ̀bùn fún ara rẹ", "Kọ́kọ́ sanwó fún alága ẹgbẹ́", "Yá owó kí o tó fowó pamọ́", "Fowó pamọ́ ní ọjọ́ tí owó bá wọlé, kí o tó ná an sórí nǹkan míì"], answer: 3, why: "Kíkọ́kọ́ fowó pamọ́ ń jẹ́ kí ó ṣẹlẹ̀ kí owó náà tó tán." },
      { objective: "O2", q: "Ètò rẹ nílò EGP 900 lóṣù ṣùgbọ́n EGP 600 nìkan lo lè fi pamọ́. Kí ni o lè ṣe?", options: ["Yá owó lórí app ìyáwó", "Jáwọ́ nínú ìfowópamọ́", "Sún ọjọ́ síwájú, dín èrò kù tàbí dín ìnáwó kù", "Wọ ètò tí ó ń ṣe owó ní ìlọ́po méjì"], answer: 2, why: "Yí ọjọ́, èrò tàbí ìnáwó rẹ padà títí ètò náà yóò fi bá ọ mu." },
      { objective: "O2", q: "Kí ló dé tí a fi ń pa owó pàjáwìrì mọ́ lọ́tọ̀ sí owó ìfipamọ́ fún èrò rẹ?", options: ["Kí ìṣòro òjijì má ba à gbé gbogbo owó èrò rẹ lọ", "Nítorí pé báńkì ní kí a ṣe bẹ́ẹ̀", "Láti san owó ìtanràn ẹgbẹ́", "Ó ń mú èrè púpọ̀ wá"], answer: 0, why: "Owó pàjáwìrì tí ó wà lọ́tọ̀ ń dáàbò bo èrò rẹ lọ́wọ́ ohun òjijì." },
      { objective: "O3", q: "Kí ni ìwé òfin (constitution) ẹgbẹ́?", options: ["Ìwé ìrántí alága", "App ìyáwó", "Àwọn òfin tí àwọn ọmọ ẹgbẹ́ fọwọ́ sí tí wọ́n sì ń tẹ̀lé, tí a kọ sílẹ̀", "Àpótí owó"], answer: 2, why: "Ìwé òfin tàbí by-laws ni òfin ẹgbẹ́ tí a kọ sílẹ̀." },
      { objective: "O3", q: "Òfin wo ló ń sọ ohun tí ó máa ṣẹlẹ̀ tí ọmọ ẹgbẹ́ kò bá san owó ìyáwó rẹ̀ padà?", options: ["Òfin ìpàdé", "Òfin ìyáwó", "Òfin pínpín owó", "Kò sí èyíkéyìí nínú àwọn òfin"], answer: 1, why: "Òfin ìyáwó ń sọ ẹni tí ó lè yá owó, iye rẹ̀, àti ohun tí ó máa ṣẹlẹ̀ tí a kò bá san án padà." },
      { objective: "O3", q: "Òfin ẹgbẹ́ kan kò sọ bí ọmọ ẹgbẹ́ ṣe lè kúrò. Kí ni o máa ṣe?", options: ["Ní kí ẹgbẹ́ fi òfin kíkúrò kún un kí o tó wọlé", "Wọlé bẹ́ẹ̀", "Kúrò láìsọ fún ẹnikẹ́ni", "Mú owó ìfipamọ́ rẹ láti inú àpótí"], answer: 0, why: "Òfin tí kò sí jẹ́ ìbéèrè tí a gbọ́dọ̀ yanjú kí o tó fi owó lé ẹgbẹ́ náà lọ́wọ́." },
      { objective: "O4", q: "Kí ni passbook?", options: ["Ìwé ọmọ ẹgbẹ́ tí ó ń fi owó ìfipamọ́ àti owó ìyáwó rẹ̀ hàn", "Ìwé ìrìnnà (passport)", "Káàdì báńkì", "App ìyáwó"], answer: 0, why: "Passbook ọmọ ẹgbẹ́ kọ̀ọ̀kan ń fi owó ìfipamọ́ àti owó ìyáwó tirẹ̀ hàn." },
      { objective: "O4", q: "Ní ìparí ìpàdé kọ̀ọ̀kan:", options: ["Alága gbé owó lọ sílé láìkà á", "Owó tí a kà gbọ́dọ̀ bá ìwé àkọsílẹ̀ mu", "A ju àkọsílẹ̀ nù", "Akápò nìkan ló ń ka àpapọ̀"], answer: 1, why: "Owó àti àkọsílẹ̀ gbọ́dọ̀ bára mu, kí a sì ka àpapọ̀ sókè." },
      { objective: "O4", q: "Kí ló dé tí a fi ń ka àpapọ̀ sókè ní ìpàdé?", options: ["Kí ìpàdé lè gùn", "Láti fọ́nnu", "Kí gbogbo ọmọ ẹgbẹ́ lè gbọ́ kí wọ́n sì fohùn ṣọ̀kan lórí iye náà", "Nítorí pé òfin ni ní ibi gbogbo"], answer: 2, why: "Kíkà sókè ń jẹ́ kí gbogbo ọmọ ẹgbẹ́, pẹ̀lú àwọn tí kò lè kàwé, ṣàyẹ̀wò iye náà." },
      { objective: "O5", q: "O yá MAD 2,000, o sì ń san MAD 250 lóṣù fún oṣù 10. Èló ni owó ìyáwó náà ná ọ?", options: ["MAD 250", "MAD 2,500", "MAD 2,000", "MAD 500"], answer: 3, why: "Àpapọ̀ ìsanpadà 2,500 yọ 2,000 tí o yá kúrò = 500." },
      { objective: "O5", q: "Lẹ́yìn ìkórè tàbí ní àsìkò tí ọjà ń tà ni owó máa ń wọlé fún ọ jù. Kí ni o gbọ́dọ̀ ṣàyẹ̀wò nínú owó ìyáwó?", options: ["Àwọ̀ fọ́ọ̀mù", "Irú fóònù òṣìṣẹ́ náà", "Kò sí nǹkan", "Ọjọ́ ìsanpadà pẹ̀lú owó tí ò ń wọlé fún ọ"], answer: 3, why: "Ọjọ́ ìsanpadà gbọ́dọ̀ bá ìgbà tí owó ń wọlé mu." },
      { objective: "O5", q: "Ojúṣe àpapọ̀ (joint liability) túmọ̀ sí:", options: ["Àwọn ọmọ ẹgbẹ́ ń sanwó fún ọmọ ẹgbẹ́ tí kò san owó ìyáwó padà", "Báńkì ló ń san owó ìyáwó rẹ", "Kò sí ẹni tí ó ń san án padà", "O lè yá owó lẹ́ẹ̀mejì"], answer: 0, why: "Nínú ojúṣe àpapọ̀, ẹgbẹ́ ń san owó ìyáwó tí a kò san." },
      { objective: "O5", q: "Kí ló yẹ kí olùyáwó fún ọ kí o tó fọwọ́ sí i?", options: ["Fóònù ọ̀fẹ́", "Èlé nìkan", "Àpapọ̀ owó tí o máa san padà, ní kíkọ, pẹ̀lú gbogbo owó iṣẹ́ àti ọjọ́", "Àkọsílẹ̀ owó ìyáwó aládùúgbò rẹ"], answer: 2, why: "Àpapọ̀ tí a kọ sílẹ̀ àti ọjọ́ ń jẹ́ kí o lè fi wéra kí o sì ṣètò." },
      { objective: "O6", q: "Èwo ni àmì ìkìlọ̀ Ponzi?", options: ["Òfin tí a kọ sílẹ̀", "Èrè gíga tí ó dájú kíákíá àti èrè fún mímú ènìyàn wọlé", "Àwọn ọmọ ẹgbẹ́ ń ka àpapọ̀ sókè", "Àpótí owó oní-àgádágodo mẹ́ta"], answer: 1, why: "Èrè tí ó dájú kíákíá àti èrè fún mímú ènìyàn wọlé jẹ́ àmì Ponzi tí a mọ̀ dáadáa." },
      { objective: "O6", q: "Ní Nàìjíríà, níbo ni o ti máa ṣàyẹ̀wò bóyá wọ́n ti fọwọ́ sí app ìyáwó kan?", options: ["Èrò àwọn tí ó lo app náà fúnra rẹ̀", "Ẹgbẹ́ WhatsApp kan", "Fídíò TikTok kan", "Àkọsílẹ̀ FCCPC ti àwọn olùyáwó oní-díjítà tí a forúkọ wọn sílẹ̀"], answer: 3, why: "FCCPC ń tẹ ipò ìforúkọsílẹ̀ àwọn olùyáwó owó oní-díjítà jáde." },
      { objective: "O6", q: "Ilé-iṣẹ́ kan kò sí lórí àkọsílẹ̀ àjọ alábòójútó. Kí ni o máa ṣe?", options: ["Lò ó fún owó kékeré nìkan", "Sanwó tí ọ̀rẹ́ kan bá gbà ọ́ níyànjú", "Má ṣe lò ó", "Fún wọn ní PIN rẹ kí wọ́n lè ṣàyẹ̀wò"], answer: 2, why: "Kò sí ẹni tí ó ń bójú tó àwọn tí kò sí lórí àkọsílẹ̀; owó rẹ kò ní ààbò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Èrò tí ó yé àti ìṣirò", objective: "O2", notYet: "Kò sí àpapọ̀ owó tàbí ọjọ́, tàbí iye lóṣù kò dé èrò náà.", meets: "Èrò, àpapọ̀ owó, ọjọ́ àti iye lọ́sẹ̀ tàbí lóṣù, pẹ̀lú ìṣirò tí ó tọ̀nà.", exceeds: "Ó tún fi wé owó tí ń wọlé ní oṣù tí kò dára, ó sì pa owó pàjáwìrì mọ́ lọ́tọ̀." },
      { name: "Irú ìfowópamọ́ tí ó tọ́", objective: "O1", notYet: "Kò yan ibi tí ó máa fowó pamọ́ sí, tàbí kò fún ìdí.", meets: "Ó dárúkọ ibi tí owó náà máa wà, ó sì fún ìdí kan tí ó fi bá èrò náà mu àti ewu kan.", exceeds: "Ó fi ọ̀nà méjì wéra (fún àpẹẹrẹ ẹgbẹ́ àjọ àti SACCO) kí ó tó yan." },
      { name: "Ó ṣàyẹ̀wò òfin ẹgbẹ́", objective: "O3", notYet: "Kò rí òfin náà, tàbí ó ṣàyẹ̀wò kókó tí kò tó mẹ́rin nínú méje.", meets: "Ó ṣàyẹ̀wò ó kéré tán mẹ́fà nínú kókó òfin méje, ó sì kọ àwọn tí kò sí sílẹ̀ gẹ́gẹ́ bí ìbéèrè.", exceeds: "Ó ṣàyẹ̀wò gbogbo méje, ó sì gbé àwọn òfin tí kò sí kalẹ̀ níwájú ẹgbẹ́." },
      { name: "Àkọsílẹ̀ àti ààbò owó", objective: "O4", notYet: "Kò sọ bí wọ́n ṣe ń pa owó àti àkọsílẹ̀ mọ́.", meets: "Ó sọ bí wọ́n ṣe ń pa owó mọ́ (àpótí oní-àgádágodo mẹ́ta tàbí àkáǹtì tí ó ní olùfọwọ́sí méjì tàbí jù bẹ́ẹ̀ lọ) àti pé wọ́n ń ka àpapọ̀ sókè.", exceeds: "Ó fi tábìlì àkọsílẹ̀ àpẹẹrẹ tí ó bára mu kún un." },
      { name: "Iye owó ìyáwó àti ààbò", objective: "O5", notYet: "Ó gbèrò owó ìyáwó láìní àpapọ̀ ìsanpadà.", meets: "Owó ìyáwó èyíkéyìí ní àpapọ̀ ìsanpadà, iye tí ó ná, àti ọjọ́ tí a fi wé owó tí ń wọlé; tàbí kò sí owó ìyáwó nínú ètò náà.", exceeds: "Ó tún kọ owó ìtanràn fún sísan pẹ́, ìròyìn credit bureau àti ojúṣe àpapọ̀ sílẹ̀." },
      { name: "Àyẹ̀wò ìwé àṣẹ àti jìbìtì", objective: "O6", notYet: "Ilé-iṣẹ́ tí kò ní ìwé àṣẹ tàbí ètò tí ó ní àmì ìkìlọ̀ wà nínú ètò náà.", meets: "Ó ṣàyẹ̀wò ilé-iṣẹ́ èyíkéyìí tí ń gba owó ìfipamọ́ tàbí ń yáni lówó gẹ́gẹ́ bí òwò lórí àkọsílẹ̀ ìjọba ti àjọ alábòójútó, kò sì sí àmì ìkìlọ̀ kankan.", exceeds: "Ó dárúkọ àkọsílẹ̀ tí ó lò àti ọjọ́ tí ó ṣàyẹ̀wò." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn, lẹ́yìn ọjọ́ 30, pé àwọn ń fowó pamọ́ lọ́sẹ̀ tàbí lóṣù gẹ́gẹ́ bí ètò wọn",
      "Àwọn ẹgbẹ́ alábàáṣiṣẹ́ tí wọ́n gba òfin tí a kọ sílẹ̀, passbook àti kíka àpapọ̀ sókè",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn pé àwọn kọ Ponzi tàbí olùyáwó tí kò ní ìwé àṣẹ láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, gègé àti ẹ̀rọ ìṣirò fóònù",
      "Ìwé òfin ẹgbẹ́ kan, tí akẹ́kọ̀ọ́ bá wà nínú ẹgbẹ́",
      "Àkọsílẹ̀ ìjọba ti àjọ alábòójútó fún orílẹ̀-èdè rẹ (SASRA, CBK, CBN, FCCPC, Bank of Ghana, BCEAO), tí a ṣí lẹ́ẹ̀kan lórí fóònù tàbí tí a tẹ̀ jáde",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Ó dára jù láti ṣe é nínú chama, VSLA, susu, tontine tàbí ẹgbẹ́ obìnrin tí ó ti wà tẹ́lẹ̀: ẹ̀kọ́ kan ní ìpàdé kọ̀ọ̀kan, pẹ̀lú ìdánwò ṣáájú ní ìpàdé àkọ́kọ́.",
      "Lo òfin ẹgbẹ́ náà fúnra rẹ̀ gẹ́gẹ́ bí ọ̀rọ̀ àṣeṣe ní Ẹ̀kọ́ 3, àti ìpàdé àṣeṣe pẹ̀lú owó eré ní Ẹ̀kọ́ 4.",
      "Má ṣe dámọ̀ràn báńkì, SACCO, app tàbí ètò kankan; kọ́ àwọn akẹ́kọ̀ọ́ láti ṣàyẹ̀wò àkọsílẹ̀ àjọ alábòójútó fúnra wọn.",
      "Ṣàyẹ̀wò pé àkọsílẹ̀ àwọn àjọ alábòójútó jẹ́ tuntun kí ìpàdé tó bẹ̀rẹ̀; orúkọ àti àdírẹ́sì wẹ́ẹ̀bù lè yí padà.",
      "Má ṣe ní kí àwọn akẹ́kọ̀ọ́ pín PIN, ọ̀rọ̀ aṣínà tàbí iye owó gidi inú àkáǹtì wọn nínú ẹgbẹ́ láéláé."
    ]
  }
};
