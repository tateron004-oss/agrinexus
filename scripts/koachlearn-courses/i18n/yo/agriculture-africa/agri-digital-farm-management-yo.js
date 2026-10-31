"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-digital-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };
const GH_DPC = { name: "Data Protection Commission, Ghana (Data Protection Act, 2012, Act 843)", url: "https://dpc.gov.gh/" };
const FAO_CHILD = { name: "FAO: iṣẹ́ ọmọdé nínú iṣẹ́ àgbẹ̀ (Child labour in agriculture)", url: "https://www.fao.org/childlabouragriculture/en/" };

module.exports = {
  id: "agri-digital-farm-management-yo",
  lang: "yo",
  translationOf: "agri-digital-farm-management",
  category: "Agriculture (Africa)",
  name: "Ìṣàkóso Oko pẹ̀lú Ìsọfúnni àti App Fóònù",
  skills: "Yíyan app oko tàbí spreadsheet àjọlò, Ṣíṣe ìwé àkọsílẹ̀ oko àti àkọsílẹ̀ ohun èlò, Sísan owó òṣìṣẹ́ pẹ̀lú mobile money àti àkọsílẹ̀, Dídáàbò bo ìsọfúnni oko àti ti òṣìṣẹ́, Ṣíṣàkóso alábòójútó oko láti ọ̀nà jíjìn, Lílo dashboard nọ́mbà márùn-ún ní ọ̀sẹ̀ kọ̀ọ̀kan",
  outcome: "darí oko rẹ láti orí fóònù rẹ: tọ́jú ìwé àkọsílẹ̀ kan ṣoṣo fún ilẹ̀ oko, ẹran ọ̀sìn, iṣẹ́, òṣìṣẹ́ àti ohun èlò oko tó wà ní ìpamọ́, san owó òṣìṣẹ́ pẹ̀lú mobile money pẹ̀lú àkọsílẹ̀ fún ìsanwó kọ̀ọ̀kan, gba ìròyìn ojoojúmọ́ tí o lè ṣàyẹ̀wò láti ọ̀dọ̀ alábòójútó oko rẹ, kí o sì máa wo nọ́mbà márùn-ún ní ọ̀sẹ̀ kọ̀ọ̀kan láti pinnu ohun tí o máa ṣe tó kàn.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ tí oko wọn ń dàgbà: o ní òṣìṣẹ́, o ní ilẹ̀ oko púpọ̀ tàbí agbo ẹran tàbí adìẹ, bóyá o sì ń gbé ní ìlú nígbà tí alábòójútó ń darí oko. Ó bá àwọn àgbẹ̀ kékeré tí ń ṣòwò mu, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn olóko tí ń gbé ní Nairobi, Lagos, Accra tàbí Dakar, àti àwọn alábòójútó oko tí ń jábọ̀ fún wọn.",
    "Ó kọjá àkọsílẹ̀ ìpìlẹ̀. O máa yan app ìṣàkóso oko tàbí spreadsheet àjọlò, o máa ṣe ìwé àkọsílẹ̀ ilẹ̀ oko, ẹran ọ̀sìn, iṣẹ́ àti ohun èlò oko, o máa san owó òṣìṣẹ́ pẹ̀lú mobile money kí o sì kọ ọ́ sílẹ̀, o máa dáàbò bo ìsọfúnni oko àti ti òṣìṣẹ́, o máa ṣètò ìròyìn ojoojúmọ́ pẹ̀lú alábòójútó tí o lè ṣàyẹ̀wò, o sì máa ṣe dashboard ọ̀sẹ̀ tí ó ní nọ́mbà márùn-ún.",
    "Ẹ̀kọ́ yìí kò dámọ̀ràn app kankan. Ó fi àwọn ẹ̀yà tí o máa wá hàn ọ́, kí o lè ṣèdájọ́ app èyíkéyìí, tàbí kí o kọ́ ètò kan náà nínú spreadsheet ọ̀fẹ́. Àpẹẹrẹ lásán ni àwọn iye owó. Ẹ̀kọ́ kọ̀ọ̀kan parí pẹ̀lú iṣẹ́ kan lórí oko tìrẹ; ìdánwò ìmọ̀ kúkúrú wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Tí o kò bá tíì kọ àkọsílẹ̀ oko rí, kọ́kọ́ ṣe \"Ìsọfúnni àti Ẹ̀rọ Ìgbàlódé fún Iṣẹ́ Àgbẹ̀\" (Agricultural Data and Technology)."
  ],
  finalTask: "Ṣe dashboard ọ̀sẹ̀ fún oko tìrẹ (nọ́mbà gidi tàbí àpẹẹrẹ): nọ́mbà márùn-ún, kọ̀ọ̀kan pẹ̀lú ibi tí ó ti wá nínú ìwé àkọsílẹ̀ rẹ, àfojúsùn tàbí ìwọ̀n déédé, àti ohun tí o máa ṣe tí ó bá yà kúrò. Lẹ́yìn náà kọ ètò ìròyìn ojú-ewé kan fún ẹni tí ń darí oko lójoojúmọ́: ohun tí ìròyìn WhatsApp ojoojúmọ́ máa ní (fọ́tò, nọ́mbà, ìṣòro), ìgbà tí ó yẹ kí ó dé, ìpàdé àyẹ̀wò ọ̀sẹ̀, bí o ṣe máa ṣàyẹ̀wò rẹ̀ (àbẹ̀wò ìdánilójú, kíka ohun èlò ní ìpamọ́, ìwé ìṣirò mobile money), àti ẹni tí ó lè rí ìsọfúnni wo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tí oko wọn ń dàgbà, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn olóko tí kò gbé lórí oko àti àwọn alábòójútó oko ní Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire àti káàkiri Áfíríkà. Ọ̀pọ̀ ń gbin ohun ọ̀gbìn, wọ́n sì ń sin ẹran pọ̀ (àgbàdo, tòmátì, adìẹ, ewúrẹ́, ẹlẹ́dẹ̀, ẹja tilapia), wọ́n sì ń gba òṣìṣẹ́ alágbàṣe tàbí òṣìṣẹ́ títí lọ.",
    startingPoint: "Wọ́n ń lo smartphone lójoojúmọ́ fún ìpè, WhatsApp àti mobile money. Àwọn kan ń kọ nǹkan sínú ìwé tàbí spreadsheet tó rọrùn. Díẹ̀ ló ní ètò kan tí ó so ilẹ̀ oko, ẹran ọ̀sìn, òṣìṣẹ́, owó àti ohun èlò pọ̀, ọ̀pọ̀ olóko sì gbára lé ìpè fóònù láti mọ ohun tí ń ṣẹlẹ̀ lórí oko.",
    gap: "Bí oko ṣe ń dàgbà, owó ń jò nípasẹ̀ ọjọ́ iṣẹ́ tí a kò kọ sílẹ̀, ohun èlò tí ó sọnù, ẹran tí ó kú tí a pẹ́ kí a tó rí, àti ìpinnu tí a ṣe láti inú àmọ̀ràn lásán. Àwọn akẹ́kọ̀ọ́ nílò ètò tó rọrùn tí ó so àkọsílẹ̀, ìsanwó àti ìròyìn pọ̀, àti àṣà wíwo nọ́mbà díẹ̀ ní ọ̀sẹ̀ kọ̀ọ̀kan, kí wọ́n lè ṣàkóso láti ọ̀nà jíjìn kí wọ́n sì rí ìṣòro ní kùtùkùtù.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ẹ̀kọ́ náà tún wà ní èdè Spanish, French àti Arabic",
      "Ẹ̀rọ: fóònù Android olówó pọ́ọ́kú; kọ̀mpútà wúlò ṣùgbọ́n kò pọn dandan",
      "Íńtánẹ́ẹ̀tì: nẹ́tíwọ̀ọ̀kì kò dúró lórí ọ̀pọ̀ oko, nítorí náà irinṣẹ́ gbọ́dọ̀ ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì tàbí lórí WhatsApp",
      "Owó: irinṣẹ́ ọ̀fẹ́ ní àkọ́kọ́; a kò dámọ̀ràn app kankan; àpẹẹrẹ ni gbogbo iye owó",
      "Òfin ìdáàbòbò ìsọfúnni kan ìsọfúnni òṣìṣẹ́ (Kenya, Nigeria, Ghana àti àwọn míì ní òfin ìdáàbòbò ìsọfúnni)",
      "Kò sí PIN, ọ̀rọ̀ aṣínà tàbí nọ́mbà ìdánimọ̀ nínú iṣẹ́ àṣeṣe kankan"
    ],
    prerequisites: "Ó yẹ kí o mọ bí a ṣe ń lo smartphone, WhatsApp àti mobile money. A dámọ̀ràn pé kí o kọ́kọ́ ṣe \"Ìsọfúnni àti Ẹ̀rọ Ìgbàlódé fún Iṣẹ́ Àgbẹ̀\" (àkọsílẹ̀ ìpìlẹ̀ àti spreadsheet)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ ohun tí oko rẹ nílò láti tọpinpin", action: "fi àwọn app ìṣàkóso oko tàbí spreadsheet àjọlò wé àkọsílẹ̀ àwọn ẹ̀yà tí ó yẹ kí o sì yan ọ̀kan", standard: "kí o fi máàkì fún ó kéré tán ọ̀nà méjì kí o sì kọ ìdí tí o fi yan èyí tí o yàn" },
    { id: "O2", condition: "Pẹ̀lú irinṣẹ́ tí o yàn", action: "ṣe ìwé àkọsílẹ̀ oko fún ilẹ̀ oko, ẹran ọ̀sìn, iṣẹ́ àti ohun èlò ní ìpamọ́ pẹ̀lú orúkọ àti ìwọ̀n tí kò yí padà", standard: "kí a lè ṣírò àkọsílẹ̀ kọ̀ọ̀kan pọ̀ ní ìbámu pẹ̀lú ilẹ̀ oko, agbo ẹran tàbí ohun èlò" },
    { id: "O3", condition: "Tí a bá fún ọ ní iṣẹ́ ọ̀sẹ̀ kan láti ọ̀dọ̀ òṣìṣẹ́ alágbàṣe àti òṣìṣẹ́ títí lọ", action: "kọ ọjọ́ iṣẹ́ àti iṣẹ́ òṣìṣẹ́ kọ̀ọ̀kan sílẹ̀ kí o sì san owó wọn pẹ̀lú mobile money pẹ̀lú àkọsílẹ̀ tí ó bá a mu", standard: "kí ìsanwó kọ̀ọ̀kan ní ọjọ́, òṣìṣẹ́, iṣẹ́, iye owó àti kóòdù ìsanwó" },
    { id: "O4", condition: "Nígbà tí alábòójútó tàbí ẹnìkan nínú ẹbí bá ń darí oko nígbà tí o kò sí níbẹ̀", action: "kọ ètò ìròyìn ojoojúmọ́ pẹ̀lú fọ́tò àti ìròyìn WhatsApp, ìpàdé àyẹ̀wò ọ̀sẹ̀ àti àbẹ̀wò ìdánilójú", standard: "tí ó sọ ohun tí wọ́n máa ròyìn, ìgbà tí ó yẹ kí ó dé, àti bí o ṣe máa ṣàyẹ̀wò rẹ̀" },
    { id: "O5", condition: "Pẹ̀lú ìwé àkọsílẹ̀ oko rẹ", action: "ṣe dashboard ọ̀sẹ̀ ti nọ́mbà márùn-ún àti ìgbésẹ̀ tí nọ́mbà kọ̀ọ̀kan ń mú wá", standard: "tí a ń ṣe àtúnṣe rẹ̀ ní ọ̀sẹ̀ kọ̀ọ̀kan láti inú àkọsílẹ̀, kì í ṣe láti orí" },
    { id: "O6", condition: "Nígbà tí o bá ń gba ìsọfúnni nípa oko rẹ àti àwọn òṣìṣẹ́ rẹ", action: "pinnu ohun tí o máa gbà, ẹni tí ó lè rí i àti bí o ṣe máa dáàbò bò ó", standard: "kí o gba ohun tí o nílò nìkan, láìpín PIN, ọ̀rọ̀ aṣínà tàbí nọ́mbà ìdánimọ̀ kankan" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò ètò oko rẹ",
      lessons: [
        {
          title: "Yíyan app oko tàbí spreadsheet àjọlò",
          objectives: ["O1"],
          minutes: 5,
          goal: "Yan app ìṣàkóso oko tàbí spreadsheet àjọlò nípa fífún un ní máàkì pẹ̀lú àkọsílẹ̀ àwọn ẹ̀yà tí ó yẹ.",
          text: [
            "App ìṣàkóso oko máa ń kó ilẹ̀ oko rẹ, ẹran ọ̀sìn, iṣẹ́, ohun èlò ní ìpamọ́ àti owó sí ibì kan lórí fóònù rẹ. Ọ̀pọ̀ ló wà, wọ́n sì máa ń yí padà lọ́pọ̀ ìgbà, nítorí náà ẹ̀kọ́ yìí kò dámọ̀ràn ọ̀kan. Spreadsheet àjọlò ọ̀fẹ́ (Google Sheets tàbí Microsoft Excel) lè ṣe iṣẹ́ kan náà tí o bá ṣètò rẹ̀ dáadáa. Ohun tó ṣe pàtàkì ni pé ìwọ àti àwọn òṣìṣẹ́ rẹ ń lò ó lóòótọ́ lójoojúmọ́.",
            "Bẹ̀rẹ̀ pẹ̀lú ohun tí o nílò láti tọpinpin, lẹ́yìn náà fún ọ̀nà kọ̀ọ̀kan ní máàkì. Àwọn ẹ̀yà tí o máa wá: ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì, ó sì ń sync lẹ́yìn náà (nẹ́tíwọ̀ọ̀kì kò lágbára lórí ọ̀pọ̀ oko); ilẹ̀ oko àti agbo ẹran ní àkọsílẹ̀ ọ̀tọ̀ọ̀tọ̀; ọ̀nà tó rọrùn láti kọ iṣẹ́ àti ohun èlò sílẹ̀; iye ohun èlò ní ìpamọ́ tí ń dín kù nígbà tí a bá lò ó; àkọsílẹ̀ òṣìṣẹ́ àti ìsanwó; fọ́tò; olùlò púpọ̀ pẹ̀lú àṣẹ ọ̀tọ̀ọ̀tọ̀ (òṣìṣẹ́ lè kọ ìsọfúnni ṣùgbọ́n kò lè rí owó-oṣù); export sí spreadsheet kí ìsọfúnni rẹ má bàa há sínú app kan; èdè rẹ; àti iye owó àti ìlànà ìpamọ́ ìsọfúnni tó yé.",
            "Ṣọ́ra fún app tí ó jẹ́ ọ̀fẹ́ nítorí pé ó ń ta ìsọfúnni rẹ, èyí tí ó nílò íńtánẹ́ẹ̀tì tó yára, tàbí èyí tí o kò lè fi sílẹ̀ pẹ̀lú ìsọfúnni rẹ. Béèrè lọ́wọ́ àwọn àgbẹ̀ míì ní agbègbè rẹ ohun tí wọ́n ń lò, gbìyànjú app èyíkéyìí fún ọ̀sẹ̀ méjì pẹ̀lú àkọsílẹ̀ gidi, kí o sì wo iye owó rẹ̀ lẹ́yìn àkókò ọ̀fẹ́ kí o tó kó gbogbo àkọsílẹ̀ rẹ sínú rẹ̀."
          ],
          steps: ["Kọ ohun tí o gbọ́dọ̀ tọpinpin sílẹ̀: ilẹ̀ oko, ẹran ọ̀sìn, iṣẹ́, òṣìṣẹ́, ohun èlò, títà.", "Yan ọ̀nà méjì tàbí mẹ́ta, pẹ̀lú spreadsheet àjọlò ọ̀fẹ́.", "Fún ọ̀kọ̀ọ̀kan ní máàkì pẹ̀lú àkọsílẹ̀ náà: láìsí íńtánẹ́ẹ̀tì, olùlò àti àṣẹ, ohun èlò, òṣìṣẹ́, fọ́tò, export, èdè, iye owó, ìpamọ́ ìsọfúnni.", "Gbìyànjú èyí tó dára jù fún ọ̀sẹ̀ méjì pẹ̀lú àkọsílẹ̀ gidi.", "Kọ èyí tí o yàn àti ìdí rẹ̀ sílẹ̀."],
          words: [["App ìṣàkóso oko", "ètò lórí fóònù tàbí wẹ́ẹ̀bù fún kíkọ sílẹ̀ àti ṣíṣètò ilẹ̀ oko, ẹran ọ̀sìn, iṣẹ́, ohun èlò àti owó oko."], ["Sync", "nígbà tí app bá fi ìsọfúnni tí ó wà lórí fóònù ránṣẹ́ sí íńtánẹ́ẹ̀tì ní kété tí nẹ́tíwọ̀ọ̀kì bá dé."], ["Export", "gbígbé ìsọfúnni rẹ jáde kúrò nínú app, fún àpẹẹrẹ bí fáìlì spreadsheet."]],
          slides: [
            { title: "App tàbí spreadsheet àjọlò?", bullets: ["Méjèèjì lè ṣiṣẹ́", "Ohun tó ṣe pàtàkì: ìwọ àti òṣìṣẹ́ rẹ ń lò ó lójoojúmọ́", "A kò dámọ̀ràn app kankan níbí: ṣèdájọ́ pẹ̀lú ẹ̀yà rẹ̀"] },
            { title: "Àwọn ẹ̀yà tí o máa wá", bullets: ["Ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì, ó ń sync lẹ́yìn náà", "Ilẹ̀ oko, ẹran ọ̀sìn, iṣẹ́, ohun èlò, òṣìṣẹ́", "Olùlò púpọ̀ pẹ̀lú àṣẹ ọ̀tọ̀ọ̀tọ̀", "Export sí spreadsheet"] },
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Ọ̀fẹ́ nítorí pé ó ń ta ìsọfúnni rẹ", "Ó nílò íńtánẹ́ẹ̀tì tó yára", "O kò lè gbé ìsọfúnni rẹ jáde", "Iye owó kò yé lẹ́yìn àkókò ọ̀fẹ́"] },
            { title: "Pinnu", bullets: ["Fún ọ̀nà méjì tàbí mẹ́ta ní máàkì", "Gbìyànjú ọ̀kan fún ọ̀sẹ̀ méjì", "Kọ èyí tí o yàn àti ìdí rẹ̀"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ ohun tí oko rẹ gbọ́dọ̀ tọpinpin. Ṣe tábìlì máàkì: àwọn ẹ̀yà inú àkọsílẹ̀ ní ẹ̀gbẹ́, àti ọ̀nà méjì tàbí mẹ́ta ní òkè (ọ̀kan lè jẹ́ spreadsheet àjọlò ọ̀fẹ́). Fún ọ̀kọ̀ọ̀kan ní máàkì, kí o sì kọ èyí tí o yàn àti ìdí rẹ̀.",
          youCanNow: "ṣèdájọ́ app oko tàbí spreadsheet èyíkéyìí pẹ̀lú àwọn ẹ̀yà rẹ̀, kí o sì yan ọ̀kan pẹ̀lú ìdí tó yé.",
          quickCheck: [
            { objective: "O1", q: "Oko rẹ ní Kakamega kì í sábà ní nẹ́tíwọ̀ọ̀kì. Ẹ̀yà wo ló ṣe pàtàkì jù?", options: ["Àwọ̀ tó mọ́lẹ̀", "Ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì, ó sì ń sync lẹ́yìn náà", "Ọ̀pọ̀ ènìyàn ti gbà á sórí fóònù", "Ìpè fídíò"], answer: 1, why: "Tí app kò bá lè fi àkọsílẹ̀ pamọ́ láìsí nẹ́tíwọ̀ọ̀kì, àwọn òṣìṣẹ́ máa dẹ́kun lílò ó." },
            { objective: "O1", q: "Kí ló dé tí o fi máa ṣàyẹ̀wò pé app lè export ìsọfúnni rẹ?", options: ["Kí àkọsílẹ̀ rẹ má bàa há sínú app kan ṣoṣo láéláé", "Kí fóònù lè yára sí i", "Nítorí pé òfin ní kí gbogbo àgbẹ̀ máa export", "Láti rí ẹ̀dínwó"], answer: 0, why: "Export ń jẹ́ kí o gbé àkọsílẹ̀ rẹ lọ sí spreadsheet tàbí app míì nígbàkígbà." }
          ]
        },
        {
          title: "Ṣíṣètò ilẹ̀ oko, ẹran ọ̀sìn, iṣẹ́ àti ohun èlò ní ìpamọ́",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣe ìwé àkọsílẹ̀ oko pẹ̀lú orúkọ àti ìwọ̀n tí kò yí padà, àti àkọsílẹ̀ ohun èlò ní ìpamọ́.",
          text: [
            "Ìwé àkọsílẹ̀ (register) ni egungun ẹ̀yìn ètò náà. Fún ilẹ̀ oko kọ̀ọ̀kan ní orúkọ kúkúrú tí kò yí padà àti ìwọ̀n rẹ̀ (fún àpẹẹrẹ \"F1 Tòmátì 0.5 éékà\"), kí o sì fún agbo ẹran tàbí adágún ẹja kọ̀ọ̀kan ní orúkọ àti iye (\"Ilé Adìẹ Ẹlẹ́yin A, adìẹ 500\", \"Ewúrẹ́ 24\", \"Adágún 2 tilapia\"). Lo orúkọ kan náà nínú gbogbo àkọsílẹ̀ kí o lè ṣírò ìnáwó àti èso pọ̀ fún ilẹ̀ oko tàbí agbo kọ̀ọ̀kan.",
            "Lẹ́yìn náà ṣe àkọsílẹ̀ iṣẹ́: ọjọ́, ilẹ̀ oko tàbí agbo, iṣẹ́ (gbíngbìn, pípa koríko, fífín oògùn, fífún ẹran ní oúnjẹ, abẹ́rẹ́ àjẹsára láti ọwọ́ dókítà ẹranko, kíkórè, títà), iye, ìwọ̀n, ìnáwó, ẹni tí ó ṣe é, àti fọ́tò tí ó bá wúlò. Má ṣe yí ìwọ̀n padà: kìlógíráàmù, lítà, àpò 50 kg, kírétì, tray ẹyin 30. Ìwọ̀n tí a dàpọ̀ máa ń jẹ́ kí àròpọ̀ jẹ́ àṣìṣe.",
            "Fi àkọsílẹ̀ ohun èlò ní ìpamọ́ kún un: ohun èlò kọ̀ọ̀kan pẹ̀lú ìwọ̀n rẹ̀, iye tí ó wọlé, iye tí a lò, àti iye tí ó kù. Nígbà tí òṣìṣẹ́ bá kọ \"àpò NPK 2 ni a lò lórí F1\", iye tí ó kù gbọ́dọ̀ dín kù ní méjì. Ka ohun tí ó wà nínú ilé ìpamọ́ ní ọ̀sẹ̀ kọ̀ọ̀kan kí o sì fi wé àkọsílẹ̀. Tí iye tí o kà àti àkọsílẹ̀ kò bá bára mu, o ti rí jíjò, àṣìṣe àkọsílẹ̀ tàbí olè, o sì lè béèrè ìdí rẹ̀ ní ọ̀sẹ̀ kan náà."
          ],
          steps: ["Fún ilẹ̀ oko kọ̀ọ̀kan ní orúkọ pẹ̀lú ìwọ̀n rẹ̀, àti agbo ẹran, adágún tàbí ilé kọ̀ọ̀kan pẹ̀lú iye rẹ̀.", "Yan ìwọ̀n kan fún nǹkan kọ̀ọ̀kan: kg, lítà, àpò 50 kg, kírétì, tray.", "Ṣe àkọsílẹ̀ iṣẹ́: ọjọ́, ilẹ̀ oko tàbí agbo, iṣẹ́, iye, ìwọ̀n, ìnáwó, ẹni tí ó ṣe é, fọ́tò.", "Ṣe àkọsílẹ̀ ohun èlò: ohun èlò, ìwọ̀n, ó wọlé, a lò ó, ó kù.", "Ka ilé ìpamọ́ ní ọ̀sẹ̀ kọ̀ọ̀kan kí o sì fi wé àkọsílẹ̀."],
          words: [["Ìwé àkọsílẹ̀ (register)", "àkọsílẹ̀ pàtàkì ti ilẹ̀ oko, agbo ẹran àti ohun èlò rẹ tí gbogbo àkọsílẹ̀ míì ń tọ́ka sí."], ["Ìwọ̀n", "ohun tí o fi ń wọn nǹkan, bí kìlógíráàmù, lítà tàbí àpò 50 kg."], ["Kíka ohun èlò", "kíka ohun tí ó wà nínú ilé ìpamọ́ ní ojú ara àti fífi wé àkọsílẹ̀."]],
          slides: [
            { title: "Orúkọ tí kò yí padà", bullets: ["Ilẹ̀ oko pẹ̀lú ìwọ̀n: F1 Tòmátì 0.5 éékà", "Agbo ẹran pẹ̀lú iye: Ilé Adìẹ Ẹlẹ́yin A, 500", "Orúkọ kan náà nínú gbogbo àkọsílẹ̀"] },
            { title: "Àkọsílẹ̀ iṣẹ́", bullets: ["Ọjọ́, ilẹ̀ oko tàbí agbo, iṣẹ́", "Iye, ìwọ̀n, ìnáwó", "Ẹni tí ó ṣe é, fọ́tò"] },
            { title: "Ohun èlò ní ìpamọ́", bullets: ["Ó wọlé, a lò ó, ó kù fún ohun èlò kọ̀ọ̀kan", "Ìwọ̀n tí kò yí padà: kg, lítà, àpò 50 kg"] },
            { title: "Kíka ní ọ̀sẹ̀ kọ̀ọ̀kan", bullets: ["Ka ilé ìpamọ́", "Fi wé àkọsílẹ̀", "Kò bára mu? Béèrè ìdí rẹ̀ ní ọ̀sẹ̀ yìí"] }
          ],
          tryIt: "Nínú irinṣẹ́ tí o yàn, ṣe ìwé àkọsílẹ̀ fún oko rẹ: ilẹ̀ oko tàbí agbo ẹran kọ̀ọ̀kan pẹ̀lú ìwọ̀n tàbí iye rẹ̀, àkọsílẹ̀ iṣẹ́ tí ó ní ó kéré tán àkọsílẹ̀ gidi márùn-ún láti ọ̀sẹ̀ yìí, àti àkọsílẹ̀ ohun èlò fún ó kéré tán ohun èlò mẹ́rin. Lẹ́yìn náà ka ohun èlò kan nínú ilé ìpamọ́ rẹ kí o sì fi wé àkọsílẹ̀.",
          youCanNow: "ṣe ìwé àkọsílẹ̀ oko tí ó ń ṣírò pọ̀ fún ilẹ̀ oko, agbo ẹran àti ohun èlò, kí o sì fi ohun èlò ní ìpamọ́ rẹ wé e.",
          quickCheck: [
            { objective: "O2", q: "Òṣìṣẹ́ kan kọ \"àpò 2\", òmíràn sì kọ \"100 kg\" fún ajílẹ̀ kan náà. Kí ni ojútùú?", options: ["Fi sílẹ̀; àròpọ̀ máa súnmọ́ ọn", "Pa àkọsílẹ̀ méjèèjì rẹ́", "Yan ìwọ̀n kan fún ohun èlò yẹn kí o sì máa lò ó nígbà gbogbo", "Dẹ́kun kíkọ ajílẹ̀ sílẹ̀"], answer: 2, why: "Ìwọ̀n tí kò yí padà ń jẹ́ kí o ṣírò àkọsílẹ̀ pọ̀ dáadáa." },
            { objective: "O2", q: "Àkọsílẹ̀ ohun èlò sọ pé àpò oúnjẹ adìẹ ẹlẹ́yin (layers mash) 6 ló wà, ṣùgbọ́n 4 ló wà nínú ilé ìpamọ́. Kí ni o máa ṣe?", options: ["Tún àkọsílẹ̀ kọ sí 6", "Dúró títí di òpin àsìkò", "Ra àpò 2 sí i kí o sì dákẹ́", "Béèrè ní ọ̀sẹ̀ yìí ìdí tí wọn kò fi bára mu: àṣìṣe àkọsílẹ̀, jíjò tàbí olè"], answer: 3, why: "Kíka ní ọ̀sẹ̀ kọ̀ọ̀kan ń mú àlàfo nígbà tí ó ṣì kéré tí ó sì rọrùn láti ṣàlàyé." }
          ]
        },
        {
          title: "Títọpinpin iṣẹ́ àti sísan owó òṣìṣẹ́ pẹ̀lú mobile money",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kọ ọjọ́ iṣẹ́ àti iṣẹ́ òṣìṣẹ́ kọ̀ọ̀kan sílẹ̀ kí o sì san owó wọn pẹ̀lú mobile money pẹ̀lú àkọsílẹ̀ tí ó bá a mu.",
          text: [
            "Owó òṣìṣẹ́ sábà máa ń jẹ́ ìnáwó tó tóbi jù lórí oko tí ń dàgbà, òun ni a sì kéré jù láti kọ sílẹ̀. Tọ́jú àkọsílẹ̀ òṣìṣẹ́ (orúkọ, nọ́mbà fóònù fún mobile money, owó ojúmọ́ tàbí owó oṣù, ọjọ́ tí ó bẹ̀rẹ̀ iṣẹ́) àti àkọsílẹ̀ wíwá síbi iṣẹ́ àti iṣẹ́ ojoojúmọ́: ọjọ́, òṣìṣẹ́, ilẹ̀ oko tàbí agbo, iṣẹ́, ọjọ́ tàbí wákàtí. Alábòójútó iṣẹ́ lè fi ránṣẹ́ bí fọ́tò ìwé ìforúkọsílẹ̀ lórí WhatsApp tàbí kí ó kún fọ́ọ̀mù àjọlò ní ìrọ̀lẹ́ kọ̀ọ̀kan.",
            "San owó pẹ̀lú mobile money níbi tí o bá ti lè ṣe é: M-Pesa ní Kenya, MTN MoMo ní Ghana, Orange Money tàbí Wave ní Senegal àti Côte d'Ivoire, tàbí ìfiránṣẹ́ owó báńkì tàbí mobile money ní Nigeria. Nígbà náà ìsanwó kọ̀ọ̀kan máa ní kóòdù ìsanwó (transaction code). Da ọjọ́, òṣìṣẹ́, iye owó àti kóòdù ìsanwó kọ sínú àkọsílẹ̀ ìsanwó rẹ, lẹ́gbẹ̀ẹ́ ọjọ́ tí ó ṣiṣẹ́. Ní òpin ọ̀sẹ̀, ọjọ́ ìlọ́po owó ojúmọ́ gbọ́dọ̀ dọ́gba pẹ̀lú ohun tí o san. Àpẹẹrẹ lásán: ọjọ́ 6 x KES 500 = KES 3,000, tàbí ọjọ́ 5 x NGN 4,000 = NGN 20,000.",
            "San owó lọ́nà tó tọ́ àti ní àkókò, kí o sì ṣàyẹ̀wò owó-oṣù tó kéré jù lábẹ́ òfin àti òfin iṣẹ́ lọ́dọ̀ iléeṣẹ́ ìjọba tí ń rí sí ọ̀rọ̀ iṣẹ́ (ministry of labour) ní orílẹ̀-èdè rẹ. Má ṣe jẹ́ kí àwọn ọmọdé ṣe iṣẹ́ oko tí ó léwu bí fífín oògùn, fífọwọ́ kan kẹ́míkà tàbí lílo ẹ̀rọ. Sọ fún àwọn òṣìṣẹ́ ohun tí o ń kọ sílẹ̀ àti ìdí rẹ̀, kí o sì jẹ́ kí wọ́n fìdí ìsanwó kọ̀ọ̀kan múlẹ̀, kí àkọsílẹ̀ náà lè dáàbò bo ẹ̀gbẹ́ méjèèjì."
          ],
          steps: ["Tọ́jú àkọsílẹ̀ òṣìṣẹ́: orúkọ, nọ́mbà mobile money, owó iṣẹ́, ọjọ́ tí ó bẹ̀rẹ̀.", "Kọ wíwá síbi iṣẹ́ àti iṣẹ́ sílẹ̀ lójoojúmọ́.", "San owó pẹ̀lú mobile money kí o sì da kóòdù ìsanwó kọ sínú àkọsílẹ̀ ìsanwó.", "Ní ọ̀sẹ̀ kọ̀ọ̀kan ṣàyẹ̀wò: ọjọ́ x owó ojúmọ́ = iye tí a san.", "Jẹ́ kí òṣìṣẹ́ kọ̀ọ̀kan fìdí ìsanwó rẹ̀ múlẹ̀."],
          words: [["Òṣìṣẹ́ alágbàṣe", "òṣìṣẹ́ tí a ń san owó fún lójúmọ́ tàbí fún iṣẹ́ kan, kì í ṣe lórí àdéhùn oṣù."], ["Kóòdù ìsanwó (transaction code)", "kóòdù àrà ọ̀tọ̀ nínú ọ̀rọ̀ mobile money tí ó fi hàn pé ìsanwó ṣẹlẹ̀."], ["Àkọsílẹ̀ owó-oṣù (payroll)", "àkọsílẹ̀ ẹni tí a san owó fún, iye rẹ̀ àti ìgbà tí a san án."]],
          slides: [
            { title: "Owó òṣìṣẹ́: ìnáwó ńlá, àkọsílẹ̀ díẹ̀", bullets: ["Àkọsílẹ̀ òṣìṣẹ́: orúkọ, nọ́mbà, owó iṣẹ́", "Àkọsílẹ̀ ojoojúmọ́: ọjọ́, òṣìṣẹ́, ilẹ̀ oko, iṣẹ́, ọjọ́ iṣẹ́"] },
            { title: "San owó pẹ̀lú ẹ̀rí", bullets: ["M-Pesa, MTN MoMo, Orange Money, Wave", "Da kóòdù ìsanwó kọ sínú àkọsílẹ̀", "Àpẹẹrẹ lásán: ọjọ́ 6 x KES 500 = KES 3,000"] },
            { title: "Àyẹ̀wò ọ̀sẹ̀", bullets: ["Ọjọ́ x owó ojúmọ́ = iye tí a san", "Fìdí rẹ̀ múlẹ̀ pẹ̀lú òṣìṣẹ́ kọ̀ọ̀kan"] },
            { title: "San owó lọ́nà tó tọ́ àti lábẹ́ òfin", bullets: ["Ṣàyẹ̀wò owó-oṣù tó kéré jù lọ́dọ̀ iléeṣẹ́ ìjọba fún iṣẹ́", "Kò sí iṣẹ́ eléwu fún ọmọdé", "Sọ fún òṣìṣẹ́ ohun tí o ń kọ sílẹ̀"] }
          ],
          sources: [FAO_CHILD],
          tryIt: "Ṣe àkọsílẹ̀ òṣìṣẹ́ àti àkọsílẹ̀ wíwá síbi iṣẹ́ àti iṣẹ́ fún ọ̀sẹ̀ kan lórí oko rẹ (gidi tàbí àpẹẹrẹ). Kún àkọsílẹ̀ ìsanwó pẹ̀lú ọjọ́, òṣìṣẹ́, ọjọ́ iṣẹ́, owó ojúmọ́, iye owó àti ọwọ̀n fún kóòdù ìsanwó, kí o sì ṣàyẹ̀wò pé ọjọ́ ìlọ́po owó ojúmọ́ dọ́gba pẹ̀lú iye owó fún òṣìṣẹ́ kọ̀ọ̀kan.",
          youCanNow: "tọpinpin ẹni tí ó ṣiṣẹ́, ohun tí ó ṣe àti fún ìgbà mélòó, kí o sì san owó òṣìṣẹ́ pẹ̀lú mobile money pẹ̀lú àkọsílẹ̀ tí ó bá a mu.",
          quickCheck: [
            { objective: "O3", q: "Àkọsílẹ̀ ìsanwó wo ló pé?", options: ["\"A san owó Juma\"", "\"12 May, Juma, ọjọ́ 6 pípa koríko F2, KES 3,000 (àpẹẹrẹ), kóòdù QX7...\"", "\"A san owó àwọn òṣìṣẹ́ ní ọ̀sẹ̀ yìí\"", "\"KES 3,000\""], answer: 1, why: "Ó ní ọjọ́, òṣìṣẹ́, iṣẹ́, ọjọ́ iṣẹ́, iye owó àti kóòdù ìsanwó." },
            { objective: "O3", q: "Òṣìṣẹ́ kan sọ pé òun ṣiṣẹ́ ọjọ́ 6; àkọsílẹ̀ fi ọjọ́ 5 hàn. Kí ló máa ràn ọ́ lọ́wọ́ jù?", options: ["Àkọsílẹ̀ wíwá síbi iṣẹ́ ojoojúmọ́ àti ìjíròrò pẹ̀lú rẹ̀ àti alábòójútó iṣẹ́", "Má san nǹkan kan títí di oṣù tó ń bọ̀", "Gba nọ́mbà tó pọ̀ jù láìbéèrè", "Pa àkọsílẹ̀ náà rẹ́"], answer: 0, why: "Àkọsílẹ̀ ojoojúmọ́ ń fún ẹ̀gbẹ́ méjèèjì ní àkọsílẹ̀ tí wọ́n lè ṣàyẹ̀wò papọ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò ètò oko rẹ",
        questions: [
          { objective: "O1", q: "Èwo ni àmì ìkìlọ̀ nígbà tí o bá ń yan app oko?", options: ["Ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì", "O lè export ìsọfúnni rẹ", "Ọ̀fẹ́ ni nítorí pé ó ń ta ìsọfúnni rẹ", "Òṣìṣẹ́ lè kọ ìsọfúnni láìrí owó-oṣù"], answer: 2, why: "O máa pàdánù àkóso ìsọfúnni oko rẹ àti ti àwọn òṣìṣẹ́ rẹ." },
          { objective: "O1", q: "Kí o tó kó gbogbo àkọsílẹ̀ rẹ sínú app kan, o yẹ kí o:", options: ["Gbìyànjú rẹ̀ fún ọ̀sẹ̀ méjì pẹ̀lú àkọsílẹ̀ gidi kí o sì wo iye owó rẹ̀ lẹ́yìn àkókò ọ̀fẹ́", "San owó ọdún kan lẹ́ẹ̀kan náà", "Yan èyí tí ó ní ìpolówó jù", "Ní kí app náà yàn fún ọ"], answer: 0, why: "Ìgbìyànjú gidi ń fi hàn bóyá ìwọ àti àwọn òṣìṣẹ́ rẹ máa lò ó, àti iye tí ó máa ná ọ." },
          { objective: "O2", q: "Kí ló dé tí a fi ń fún ilẹ̀ oko kọ̀ọ̀kan ní orúkọ tí kò yí padà bí \"F1 Tòmátì 0.5 éékà\"?", options: ["App kò ní ṣí láìjẹ́ bẹ́ẹ̀", "Kí ìnáwó àti èso lè ṣírò pọ̀ fún ilẹ̀ oko kọ̀ọ̀kan", "Àwọn olùrà ń béèrè rẹ̀", "Òfin ni"], answer: 1, why: "Orúkọ kan náà nínú gbogbo àkọsílẹ̀ ń jẹ́ kí o ṣírò àròpọ̀ ilẹ̀ oko kọ̀ọ̀kan." },
          { objective: "O2", q: "Àkọsílẹ̀ ohun èlò rẹ sọ pé àpò NPK 10 ló kù. Iye tí o kà nínú ilé ìpamọ́ jẹ́ 7. Èyí fi hàn:", options: ["Àkọsílẹ̀ ohun èlò máa ń tọ̀nà nígbà gbogbo", "Kò sí nǹkan pàtàkì", "O nílò app tuntun", "Àṣìṣe, jíjò tàbí olè tí o máa wádìí ní ọ̀sẹ̀ yìí"], answer: 3, why: "Àìbáramu jẹ́ àmì láti béèrè ìdí nígbà tí ó ṣì kéré." },
          { objective: "O3", q: "Kí ló dé tí o fi máa san owó òṣìṣẹ́ pẹ̀lú mobile money níbi tí o bá ti lè ṣe é?", options: ["Ó jẹ́ ọ̀fẹ́ nígbà gbogbo", "Àwọn òṣìṣẹ́ fẹ́ràn owó lọ́wọ́", "Ìsanwó kọ̀ọ̀kan ní kóòdù ìsanwó tí o lè kọ sílẹ̀", "Ó ń jẹ́ kí o yẹra fún sísan owó-oṣù tó kéré jù"], answer: 2, why: "Kóòdù ìsanwó ni ẹ̀rí ìsanwó fún ìwọ àti òṣìṣẹ́ náà." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣàkóso pẹ̀lú ìsọfúnni, nítòsí tàbí ní ọ̀nà jíjìn",
      lessons: [
        {
          title: "Dídáàbò bo ìsọfúnni oko àti ti òṣìṣẹ́",
          objectives: ["O6"],
          minutes: 5,
          goal: "Pinnu ìsọfúnni tí o máa gbà, ẹni tí ó lè rí i àti bí o ṣe máa dáàbò bò ó.",
          text: [
            "Ètò rẹ ti ní ìsọfúnni tó níye lórí tí ó sì jẹ́ àṣírí báyìí: orúkọ àti nọ́mbà fóònù àwọn òṣìṣẹ́, owó iṣẹ́ wọn, títà rẹ àti ohun èlò rẹ ní ìpamọ́. Kenya (Office of the Data Protection Commissioner), Nigeria (Nigeria Data Protection Commission) àti Ghana (Data Protection Commission) ní òfin ìdáàbòbò ìsọfúnni àti àjọ tí ń mójú tó o, bẹ́ẹ̀ náà sì ni ọ̀pọ̀ orílẹ̀-èdè Áfíríkà míì. Àwọn oko àti iléeṣẹ́ tó tóbi lè ní láti forúkọ sílẹ̀; ṣàyẹ̀wò ojú-òpó wẹ́ẹ̀bù àjọ tí ń mójú tó o ní orílẹ̀-èdè rẹ.",
            "Gba ohun tí o nílò nìkan. O nílò orúkọ òṣìṣẹ́, nọ́mbà mobile money, ọjọ́ iṣẹ́ àti owó iṣẹ́. O kò nílò nọ́mbà ìdánimọ̀ wọn nínú spreadsheet àjọlò tàbí fọ́tò káàdì ìdánimọ̀ wọn nínú ẹgbẹ́ WhatsApp. Sọ fún àwọn òṣìṣẹ́ ohun tí o ń tọ́jú àti ìdí rẹ̀. Má ṣe fi PIN mobile money, ọ̀rọ̀ aṣínà tàbí nọ́mbà ìdánimọ̀ sínú spreadsheet, app tàbí irinṣẹ́ AI láéláé.",
            "Pín àṣẹ ní ìbámu pẹ̀lú ipa ẹnìkọ̀ọ̀kan: àwọn òṣìṣẹ́ ń kọ iṣẹ́ sílẹ̀; alábòójútó ń rí ohun èlò àti wíwá síbi iṣẹ́; ìwọ nìkan (àti akọ̀wé ìṣirò rẹ) ló ń rí owó iṣẹ́ àti títà. Lo títì fóònù àti ìwọlé onígbésẹ̀ méjì, yọ ẹni tí ó kúrò lórí oko kúrò ní ọjọ́ kan náà, kí o sì tọ́jú ẹ̀dà ìpamọ́ (backup). Tí o bá pín ìsọfúnni pẹ̀lú olùrà, ayánilówó tàbí iṣẹ́ àkànṣe, pín ohun tí wọ́n nílò nìkan kí o sì béèrè bí wọ́n ṣe máa lò ó."
          ],
          steps: ["Kọ ìsọfúnni tí o ní sílẹ̀ kí o sì yọ èyí tí o kò nílò kúrò.", "Sọ fún àwọn òṣìṣẹ́ ohun tí o ń kọ sílẹ̀ àti ìdí rẹ̀.", "Pín àṣẹ ní ìbámu pẹ̀lú ipa: òṣìṣẹ́, alábòójútó, olóko.", "Ti fóònù, tan ìwọlé onígbésẹ̀ méjì, tọ́jú backup.", "Yọ àṣẹ ẹni tí ó kúrò kúrò ní ọjọ́ kan náà."],
          words: [["Ìsọfúnni àdáni", "ìsọfúnni nípa ènìyàn kan, bí orúkọ, nọ́mbà fóònù tàbí owó iṣẹ́ rẹ̀."], ["Àṣẹ (access)", "ẹni tí ó lè rí tàbí yí ìsọfúnni wo padà."], ["Ìwọlé onígbésẹ̀ méjì", "àyẹ̀wò kejì, bí kóòdù tí a fi ránṣẹ́ sí fóònù rẹ, nígbà tí o bá ń wọlé."]],
          slides: [
            { title: "O ti ní ìsọfúnni àṣírí báyìí", bullets: ["Orúkọ, nọ́mbà àti owó iṣẹ́ àwọn òṣìṣẹ́", "Títà rẹ àti ohun èlò rẹ", "Òfin ìdáàbòbò ìsọfúnni kàn ọ́"] },
            { title: "Gba ohun tí o nílò nìkan", bullets: ["Orúkọ, nọ́mbà mobile money, ọjọ́ iṣẹ́, owó iṣẹ́", "Kò sí fọ́tò káàdì ìdánimọ̀ nínú ẹgbẹ́ WhatsApp", "Kò sí PIN tàbí ọ̀rọ̀ aṣínà láéláé"] },
            { title: "Àṣẹ ní ìbámu pẹ̀lú ipa", bullets: ["Òṣìṣẹ́: kọ iṣẹ́ sílẹ̀", "Alábòójútó: ohun èlò àti wíwá síbi iṣẹ́", "Olóko: owó iṣẹ́ àti títà"] },
            { title: "Pa á mọ́ láìléwu", bullets: ["Títì fóònù, ìwọlé onígbésẹ̀ méjì, backup", "Yọ ẹni tí ó kúrò kúrò ní ọjọ́ kan náà", "Pín ohun tí àwọn míì nílò nìkan"] }
          ],
          sources: [ODPC, NDPC, GH_DPC],
          tryIt: "Kọ gbogbo irú ìsọfúnni tí ó wà nínú ètò oko rẹ sílẹ̀. Yọ èyí tí o kò nílò kúrò. Kọ tábìlì àṣẹ: fún ipa kọ̀ọ̀kan (òṣìṣẹ́, alábòójútó, olóko, akọ̀wé ìṣirò), ohun tí wọ́n lè rí àti ohun tí wọ́n lè kọ sílẹ̀.",
          youCanNow: "gba ìsọfúnni tí oko rẹ nílò nìkan kí o sì ṣàkóso ẹni tí ó lè rí i.",
          quickCheck: [
            { objective: "O6", q: "Èwo ni KÒ yẹ kí ó wà nínú spreadsheet àjọlò oko?", options: ["Orúkọ àwọn òṣìṣẹ́", "Ọjọ́ tí wọ́n ṣiṣẹ́", "Orúkọ ilẹ̀ oko", "PIN mobile money àwọn òṣìṣẹ́"], answer: 3, why: "Àṣírí ni PIN; kò sí ẹlòmíì tí ó yẹ kí ó mọ̀ ọ́n láéláé." },
            { objective: "O6", q: "Alábòójútó rẹ kúrò lórí oko. Ìgbà wo ni o máa yọ àṣẹ rẹ̀ kúrò lórí spreadsheet àti app oko?", options: ["Ní òpin àsìkò", "Ní ọjọ́ kan náà", "Tí ó bá béèrè nìkan", "Láéláé; ó lè padà wá"], answer: 1, why: "Yíyọ àṣẹ kúrò ní ọjọ́ kan náà ń dáàbò bo ìsọfúnni rẹ àti ti àwọn òṣìṣẹ́ rẹ." }
          ]
        },
        {
          title: "Ṣíṣàkóso oko láti ọ̀nà jíjìn",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ ètò ìròyìn ojoojúmọ́ tí o lè ṣàyẹ̀wò.",
          text: [
            "Ọ̀pọ̀ olóko ń darí oko láti ìlú nípasẹ̀ alábòójútó tàbí ẹbí. Ó máa ń ṣiṣẹ́ tí ìròyìn bá jẹ́ àṣà déédé, kì í ṣe tí o bá ń pè láìnídìí tí o sì ń béèrè pé \"Báwo ni gbogbo nǹkan?\". Fohùn ṣọ̀kan lórí ìròyìn WhatsApp ojoojúmọ́ ní àkókò kan pàtó, fún àpẹẹrẹ agogo 6 ìrọ̀lẹ́: ohun tí a ṣe ní ilẹ̀ oko tàbí ilé kọ̀ọ̀kan, nọ́mbà (ẹyin tí a kó, adìẹ tí ó kú, oúnjẹ tí a lò, lítà wàrà, kírétì tí a tà, òṣìṣẹ́ tí ó wá), ìṣòro, àti fọ́tò mẹ́ta ti àwọn ibi kan náà lójoojúmọ́ (ohun ọ̀gbìn, ẹran ọ̀sìn, ilé ìpamọ́).",
            "Ṣe ìpàdé àyẹ̀wò kúkúrú ní ọ̀sẹ̀ kọ̀ọ̀kan lórí fóònù tàbí fídíò ní àkókò kan pàtó: ẹ wo nọ́mbà ọ̀sẹ̀ náà, iye ohun èlò tí ẹ kà àti ètò ọ̀sẹ̀ tó ń bọ̀. Ẹ jọ pinnu, kí ẹ sì kọ ìpinnu náà sínú ẹgbẹ́. Ó tún yẹ kí a máa san owó fún alábòójútó rere, kí a sì gbẹ́kẹ̀ lé e láti ṣe ìpinnu kékeré láìsí ìwọ.",
            "Gbẹ́kẹ̀ lé e, ṣùgbọ́n ṣàyẹ̀wò. Fi ìròyìn wé àwọn nǹkan tí ó ṣòro láti ṣe ayédèrú wọn: ìwé ìṣirò mobile money, ìwé ẹ̀rí ìsanwó láti ọ̀dọ̀ olùrà, iye ohun èlò tí a kà ní ọ̀sẹ̀ kọ̀ọ̀kan, àti fọ́tò tí ó ní ọjọ́ àti ibi tí a ti yà á. Máa ṣe àbẹ̀wò lẹ́ẹ̀kọ̀ọ̀kan láìsọ fún wọn tipẹ́tipẹ́, kí o sì máa ní kí aládùúgbò tí o gbẹ́kẹ̀ lé, dókítà ẹranko tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ (extension officer) bá ọ wò ó nígbà míì. Nígbà tí nọ́mbà kan kò bá dà bí ó ti tọ́, béèrè pẹ̀lú ìfọkànbalẹ̀ àti ní kùtùkùtù. Àṣìṣe ni ọ̀pọ̀ àlàfo, àyẹ̀wò déédé sì ń jẹ́ kí àwọn olóòótọ́ máa wà ní olóòótọ́."
          ],
          steps: ["Fohùn ṣọ̀kan lórí ìròyìn ojoojúmọ́: àkókò, nọ́mbà, ìṣòro, fọ́tò mẹ́ta ti ibi kan náà.", "Ṣètò ìpàdé àyẹ̀wò ọ̀sẹ̀ ní àkókò kan pàtó.", "Kọ ìpinnu sínú ẹgbẹ́.", "Ṣàyẹ̀wò pẹ̀lú ìwé ìṣirò, ìwé ẹ̀rí ìsanwó, kíka ohun èlò àti fọ́tò tí ó ní ọjọ́.", "Máa ṣe àbẹ̀wò nígbà míì láìsọ fún wọn tipẹ́tipẹ́; béèrè ní kùtùkùtù àti pẹ̀lú ìfọkànbalẹ̀ nípa nọ́mbà àjèjì."],
          words: [["Olóko tí kò sí lórí oko", "olóko tí ń gbé ní ibòmíì tí ó sì ń darí oko nípasẹ̀ ẹlòmíì."], ["Ṣàyẹ̀wò (verify)", "rí i dájú pé ìròyìn jẹ́ òótọ́ pẹ̀lú orísun kejì."], ["Ìpàdé àyẹ̀wò (check-in)", "ìpàdé kúkúrú déédé láti wo nọ́mbà àti ètò."]],
          slides: [
            { title: "Àṣà déédé dára ju ìpè láìnídìí lọ", bullets: ["Ìròyìn WhatsApp ojoojúmọ́ ní àkókò kan pàtó", "Nọ́mbà, ìṣòro, fọ́tò mẹ́ta ti ibi kan náà"] },
            { title: "Ìpàdé àyẹ̀wò ọ̀sẹ̀", bullets: ["Àkókò kan náà ní ọ̀sẹ̀ kọ̀ọ̀kan", "Nọ́mbà, kíka ohun èlò, ètò ọ̀sẹ̀ tó ń bọ̀", "Kọ ìpinnu sínú ẹgbẹ́"] },
            { title: "Gbẹ́kẹ̀ lé e, ṣùgbọ́n ṣàyẹ̀wò", bullets: ["Ìwé ìṣirò mobile money àti ìwé ẹ̀rí ìsanwó", "Kíka ohun èlò ní ọ̀sẹ̀ kọ̀ọ̀kan, fọ́tò tí ó ní ọjọ́", "Àbẹ̀wò àti ojú kejì tí o gbẹ́kẹ̀ lé"] },
            { title: "Nígbà tí nọ́mbà kan kò dà bí ó ti tọ́", bullets: ["Béèrè ní kùtùkùtù àti pẹ̀lú ìfọkànbalẹ̀", "Àṣìṣe ni ọ̀pọ̀ àlàfo", "Àyẹ̀wò déédé ń jẹ́ kí gbogbo ènìyàn jẹ́ olóòótọ́"] }
          ],
          tryIt: "Kọ àwòṣe ìròyìn ojoojúmọ́ tí alábòójútó rẹ máa fi ránṣẹ́ (àwọn nọ́mbà, ìlà fún ìṣòro àti ibi mẹ́ta tí wọ́n ti máa ya fọ́tò). Lẹ́yìn náà kọ ọ̀nà mẹ́ta tí o máa fi ṣàyẹ̀wò ìròyìn náà, àti ọjọ́ àti àkókò ìpàdé àyẹ̀wò ọ̀sẹ̀ rẹ.",
          youCanNow: "ṣètò ìròyìn ojoojúmọ́ àti ìpàdé àyẹ̀wò ọ̀sẹ̀ pẹ̀lú alábòójútó kí o sì ṣàyẹ̀wò ohun tí ó sọ fún ọ.",
          quickCheck: [
            { objective: "O4", q: "Ìròyìn ojoojúmọ́ wo ló wúlò jù láti ọ̀dọ̀ alábòójútó oko adìẹ?", options: ["\"Gbogbo nǹkan dára.\"", "Ọ̀rọ̀ ohùn (voice note) nígbàkígbà lójúmọ́", "\"Agogo 6 ìrọ̀lẹ́: ẹyin 412, adìẹ 2 kú, àpò oúnjẹ 3 ni a lò, òṣìṣẹ́ 4, fọ́tò Ilé A, àwọn adìẹ àti ilé ìpamọ́\"", "Ìpè fóònù lẹ́ẹ̀kan lọ́sẹ̀ nìkan"], answer: 2, why: "Nọ́mbà àti fọ́tò kan náà ní àkókò kan pàtó ṣeé fi wéra láti ọjọ́ dé ọjọ́." },
            { objective: "O4", q: "Ọ̀nà wo ló dára jù láti ṣàyẹ̀wò títà ẹyin tí wọ́n ròyìn?", options: ["Fi wé ìwé ìṣirò mobile money àti ìwé ẹ̀rí ìsanwó láti ọ̀dọ̀ olùrà", "Béèrè lọ́wọ́ alábòójútó bóyá ó dá a lójú", "Ka ẹyin tí ó wà nínú fọ́tò WhatsApp", "Gbà á gbọ́ nítorí pé ẹbí ni"], answer: 0, why: "Ìsanwó àti ìwé ẹ̀rí jẹ́ orísun kejì tí ó ṣòro láti ṣe ayédèrú rẹ̀." }
          ]
        },
        {
          title: "Dashboard ọ̀sẹ̀ rẹ: nọ́mbà márùn-ún tí o máa ṣọ́",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Ṣe dashboard ọ̀sẹ̀ ti nọ́mbà márùn-ún, kọ̀ọ̀kan pẹ̀lú ìwọ̀n déédé àti ìgbésẹ̀ kan.",
          text: [
            "Dashboard jẹ́ ojú-ewé kúkúrú ti nọ́mbà díẹ̀ tí ó ń sọ fún ọ bóyá oko wà lójú ọ̀nà. Márùn-ún ti tó láti kà láàárín ìṣẹ́jú méjì ní ọ̀sẹ̀ kọ̀ọ̀kan. Yan nọ́mbà tí ó wá tààrà láti inú ìwé àkọsílẹ̀ rẹ, kí ẹnikẹ́ni má bàa ní láti rántí wọn.",
            "Àwọn àṣàyàn rere fún ọ̀pọ̀ oko: (1) owó tí ó wọlé àti owó tí ó jáde ní ọ̀sẹ̀ yìí; (2) èso, bí kg tí a kórè, ẹyin lójúmọ́, lítà wàrà tàbí bí ẹja ṣe ń dàgbà; (3) àdánù, bí adìẹ tí ó kú, ẹran tí ń ṣàìsàn tàbí kírétì tí wọ́n kọ̀; (4) ohun èlò tí ó kù ní ìfiwéra pẹ̀lú ohun tí ọ̀sẹ̀ méjì tó ń bọ̀ nílò; (5) ọjọ́ iṣẹ́ tàbí owó òṣìṣẹ́ fún ilẹ̀ oko tàbí agbo kọ̀ọ̀kan. Oko adìẹ ẹlẹ́yin ní Ghana lè máa ṣọ́ ẹyin lójúmọ́, adìẹ tí ó kú, oúnjẹ tí a lò, owó láti títà ẹyin àti oúnjẹ tí ó kù ní ìpamọ́. Àgbẹ̀ tòmátì ní Senegal lè máa ṣọ́ kírétì tí a kórè, kírétì tí wọ́n kọ̀, ọjọ́ iṣẹ́, owó láti títà ní XOF àti oògùn kòkòrò àti ajílẹ̀ tí ó kù.",
            "Fún nọ́mbà kọ̀ọ̀kan, kọ ìwọ̀n déédé àti ìgbésẹ̀ kan. Àpẹẹrẹ: \"Adìẹ tí ó kú ju 3 lọ lójúmọ́: pe dókítà ẹranko ní ọjọ́ kan náà.\" \"Oúnjẹ tí ó kù kò tó ọjọ́ 10: ra oúnjẹ.\" Fi nọ́mbà márùn-ún náà sínú tábìlì kékeré pẹ̀lú ọwọ̀n kan fún ọ̀sẹ̀ kọ̀ọ̀kan, kí o lè rí ìtẹ̀sí rẹ̀. Wò ó nínú ìpàdé àyẹ̀wò ọ̀sẹ̀, kí o sì yí nọ́mbà padà tí kò bá mú ìpinnu kankan wá rí."
          ],
          steps: ["Yan nọ́mbà márùn-ún tí ó wá láti inú ìwé àkọsílẹ̀ rẹ.", "Kọ ìwọ̀n déédé tàbí àfojúsùn fún ọ̀kọ̀ọ̀kan.", "Kọ ìgbésẹ̀ tí o máa gbé tí nọ́mbà kan bá yà kúrò nínú ìwọ̀n náà.", "Ṣe tábìlì pẹ̀lú ọwọ̀n kan fún ọ̀sẹ̀ kọ̀ọ̀kan.", "Wò ó nínú ìpàdé àyẹ̀wò ọ̀sẹ̀ kí o sì gbé ìgbésẹ̀."],
          words: [["Dashboard", "àkópọ̀ kúkúrú ti àwọn nọ́mbà pàtàkì tí ó fi bí oko ṣe ń lọ sí hàn."], ["Ìtẹ̀sí (trend)", "ọ̀nà tí nọ́mbà kan ń lọ láàárín ọ̀sẹ̀ mélòó kan."], ["Ìwọ̀n déédé", "àwọn iye tí o retí nígbà tí nǹkan ń lọ dáadáa."]],
          slides: [
            { title: "Nọ́mbà márùn-ún, ìṣẹ́jú méjì", bullets: ["Tààrà láti inú ìwé àkọsílẹ̀ rẹ", "Kà á ní ọ̀sẹ̀ kọ̀ọ̀kan"] },
            { title: "Àwọn àṣàyàn rere", bullets: ["Owó tí ó wọlé àti tí ó jáde", "Èso: kg, ẹyin, lítà", "Àdánù, ohun èlò tí ó kù, owó òṣìṣẹ́"] },
            { title: "Ìwọ̀n àti ìgbésẹ̀", bullets: ["Adìẹ tí ó kú ju déédé lọ: pe dókítà ẹranko", "Oúnjẹ kò tó ọjọ́ 10: ra oúnjẹ"] },
            { title: "Ṣọ́ ìtẹ̀sí", bullets: ["Ọwọ̀n kan fún ọ̀sẹ̀ kọ̀ọ̀kan", "Wò ó nínú ìpàdé àyẹ̀wò", "Yọ nọ́mbà tí kò mú ìgbésẹ̀ wá rí kúrò"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe dashboard ọ̀sẹ̀ fún oko rẹ pẹ̀lú nọ́mbà márùn-ún, kọ̀ọ̀kan pẹ̀lú ibi tí ó ti wá nínú ìwé àkọsílẹ̀ rẹ, ìwọ̀n déédé àti ìgbésẹ̀ tí o máa gbé tí ó bá yà kúrò, kí o sì kún ó kéré tán ọ̀sẹ̀ méjì. Lẹ́yìn náà kọ ètò ìròyìn ojú-ewé kan rẹ: ìròyìn ojoojúmọ́, ìpàdé àyẹ̀wò ọ̀sẹ̀, bí o ṣe máa ṣàyẹ̀wò, àti ẹni tí ó lè rí ìsọfúnni wo.",
          youCanNow: "darí oko rẹ pẹ̀lú dashboard ọ̀sẹ̀ ti nọ́mbà márùn-ún àti ètò ìròyìn tí o lè ṣàyẹ̀wò.",
          quickCheck: [
            { objective: "O5", q: "Kí ló dé tí nọ́mbà dashboard fi gbọ́dọ̀ wá tààrà láti inú ìwé àkọsílẹ̀?", options: ["Kí wọ́n lè dà bí iṣẹ́ amọṣẹ́dunjú", "Kí ẹnikẹ́ni má bàa ní láti rántí tàbí méfò wọn", "Nítorí pé app ní kí ó rí bẹ́ẹ̀", "Kí àwọn òṣìṣẹ́ má bàa rí wọn"], answer: 1, why: "Nọ́mbà láti inú àkọsílẹ̀ ṣeé gbẹ́kẹ̀ lé; nọ́mbà láti orí kò ṣeé gbẹ́kẹ̀ lé." },
            { objective: "O5", q: "Dashboard rẹ sọ pé \"oúnjẹ tí ó kù kò tó ọjọ́ 10: ra oúnjẹ\". Oúnjẹ tí ó kù jẹ́ ti ọjọ́ 6. Kí ni báyìí?", options: ["Dúró de àyẹ̀wò oṣù", "Yọ nọ́mbà yẹn kúrò lórí dashboard", "Ní kí àwọn òṣìṣẹ́ máa fún ẹran ní oúnjẹ díẹ̀ sí i", "Ra oúnjẹ ní ọ̀sẹ̀ yìí"], answer: 3, why: "Nọ́mbà kọ̀ọ̀kan ní ìgbésẹ̀ tirẹ̀; nígbà tí ó bá yà kúrò nínú ìwọ̀n, o máa gbé ìgbésẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣàkóso pẹ̀lú ìsọfúnni, nítòsí tàbí ní ọ̀nà jíjìn",
        questions: [
          { objective: "O6", q: "Ta ló yẹ kí ó rí owó iṣẹ́ àwọn òṣìṣẹ́ nínú ètò oko?", options: ["Gbogbo òṣìṣẹ́", "Ẹnikẹ́ni nínú ẹgbẹ́ WhatsApp oko", "Olóko àti, tí ó bá pọn dandan, akọ̀wé ìṣirò", "Àwọn olùrà"], answer: 2, why: "Àṣírí ni owó iṣẹ́; pínpín àṣẹ ní ìbámu pẹ̀lú ipa ń dáàbò bò ó." },
          { objective: "O4", q: "Kí ló ń jẹ́ kí ìròyìn oko ojoojúmọ́ rọrùn láti ṣàyẹ̀wò?", options: ["Nọ́mbà àti ibi fọ́tò kan náà ní àkókò kan pàtó", "Ọ̀rọ̀ ohùn gígùn", "Pípè nígbàkígbà tí o bá rántí", "Ròyìn ìṣòro nìkan"], answer: 0, why: "Ohun kan náà lójoojúmọ́ ń jẹ́ kí o fi wéra kí o sì rí ìyípadà." },
          { objective: "O4", q: "Títà tí alábòójútó ròyìn kéré ju ìwé ẹ̀rí ìsanwó olùrà lọ. Kí ni o máa kọ́kọ́ ṣe?", options: ["Lé e lọ́gán", "Fi sílẹ̀", "Fi í sínú ẹgbẹ́ àwọn òṣìṣẹ́", "Béèrè pẹ̀lú ìfọkànbalẹ̀ àti ní kùtùkùtù, kí ẹ sì jọ fi àkọsílẹ̀ wéra"], answer: 3, why: "Àṣìṣe ni ọ̀pọ̀ àlàfo; bíbéèrè ní kùtùkùtù pẹ̀lú àkọsílẹ̀ ń fi èwo ni hàn." },
          { objective: "O5", q: "Èwo ni nọ́mbà dashboard rere fún oko màálù ìfún-wàrà?", options: ["Àwọ̀ ilé màálù", "Lítà wàrà lójúmọ́", "Iye ọ̀rọ̀ WhatsApp", "Màálù tí alábòójútó fẹ́ràn jù"], answer: 1, why: "Nọ́mbà èso bí lítà lójúmọ́ ń fi hàn bóyá oko wà lójú ọ̀nà." },
          { objective: "O5", q: "Nọ́mbà kan lórí dashboard kò mú ìpinnu kankan wá rí. O yẹ kí o:", options: ["Fi èyí tí ó ń mú ìpinnu wá rọ́pò rẹ̀", "Pa á mọ́ títí láé", "Fi márùn-ún míì bí i kún un", "Fi dashboard pamọ́"], answer: 0, why: "Fún ìpinnu ni dashboard wà; yọ nọ́mbà tí kò wúlò kúrò." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìṣàkóso Oko pẹ̀lú Ìsọfúnni àti App Fóònù",
    questions: [
      { objective: "O1", q: "Kí ni àyẹ̀wò tó ṣe pàtàkì jù fún app oko?", options: ["Ó ní ẹ̀yà tó pọ̀ jù", "Ó wọ́n jù", "Wọ́n polówó rẹ̀ lórí rédíò", "Ìwọ àti àwọn òṣìṣẹ́ rẹ ń lò ó lójoojúmọ́"], answer: 3, why: "Irinṣẹ́ tí ẹnikẹ́ni kò lò kò ní fún ọ ní ìsọfúnni kankan." },
      { objective: "O1", q: "Ẹ̀yà wo ló ń jẹ́ kí òṣìṣẹ́ kọ iṣẹ́ sílẹ̀ láìrí owó-oṣù?", options: ["Olùlò púpọ̀ pẹ̀lú àṣẹ ọ̀tọ̀ọ̀tọ̀", "Ojú-iboju dúdú (dark mode)", "Ìpè fídíò", "Fọ́tò láìní òdiwọ̀n"], answer: 0, why: "Àṣẹ ní ìbámu pẹ̀lú ipa ń pa ìsọfúnni àṣírí mọ́." },
      { objective: "O1", q: "Ṣé spreadsheet àjọlò ọ̀fẹ́ lè rọ́pò app oko?", options: ["Rárá, láéláé", "Bẹ́ẹ̀ ni, tí a bá ṣètò rẹ̀ dáadáa tí a sì ń lò ó lójoojúmọ́", "Fún oko ńláńlá nìkan", "Tí a bá tẹ̀ ẹ́ jáde sórí ìwé nìkan"], answer: 1, why: "Spreadsheet àjọlò tí a ṣètò dáadáa lè tọpinpin ilẹ̀ oko, iṣẹ́, ohun èlò àti owó iṣẹ́." },
      { objective: "O2", q: "Èwo ni orúkọ ilẹ̀ oko rere nínú ìwé àkọsílẹ̀?", options: ["\"Èyí tí ó wà nítòsí ọ̀nà\"", "\"Tòmátì\"", "\"F1 Tòmátì 0.5 éékà\"", "Orúkọ ọ̀tọ̀ ní ọ̀sẹ̀ kọ̀ọ̀kan"], answer: 2, why: "Orúkọ kúkúrú tí kò yí padà pẹ̀lú ìwọ̀n ń jẹ́ kí àkọsílẹ̀ ṣírò pọ̀." },
      { objective: "O2", q: "Kí ló dé tí a fi ń yan ìwọ̀n bí \"àpò 50 kg\" fún ohun èlò kọ̀ọ̀kan?", options: ["Kí àròpọ̀ àti iye tí ó kù lè tọ̀nà", "Nítorí pé àwọn olùtajà ní kí ó rí bẹ́ẹ̀", "Kí àwọn òṣìṣẹ́ lè kọ̀wé díẹ̀", "Kò ṣe pàtàkì"], answer: 0, why: "Ìwọ̀n tí a dàpọ̀ máa ń jẹ́ kí àròpọ̀ jẹ́ àṣìṣe." },
      { objective: "O2", q: "Nígbà tí òṣìṣẹ́ bá kọ \"àpò NPK 2 ni a lò lórí F1\", àkọsílẹ̀ ohun èlò gbọ́dọ̀:", options: ["Wà bí ó ti wà", "Lọ sókè ní méjì", "Di píparẹ́", "Dín kù ní méjì"], answer: 3, why: "Ohun tí ó kù = ohun tí ó wọlé yọ ohun tí a lò kúrò." },
      { objective: "O2", q: "Ìgbà mélòó ni o yẹ kí o ka ilé ìpamọ́ ohun èlò kí o sì fi wé àkọsílẹ̀?", options: ["Lẹ́ẹ̀kan lọ́dún", "Lẹ́yìn olè nìkan", "Ní ọ̀sẹ̀ kọ̀ọ̀kan", "Láéláé"], answer: 2, why: "Kíka ní ọ̀sẹ̀ kọ̀ọ̀kan ń mú àlàfo ní kùtùkùtù." },
      { objective: "O3", q: "Kí ló so ìsanwó mobile money mọ́ àkọsílẹ̀ òṣìṣẹ́?", options: ["Kóòdù ìsanwó", "Àwọ̀ fóònù", "Fọ́tò káàdì ìdánimọ̀ òṣìṣẹ́ nínú WhatsApp", "Ojú ọjọ́"], answer: 0, why: "Kóòdù náà fi ìsanwó hàn, ó sì so ó mọ́ àkọsílẹ̀." },
      { objective: "O3", q: "Òṣìṣẹ́ kan ṣiṣẹ́ ọjọ́ 5 ní owó ojúmọ́ àpẹẹrẹ NGN 4,000. Àkọsílẹ̀ gbọ́dọ̀ fi hàn:", options: ["NGN 4,000", "NGN 20,000", "NGN 9,000", "NGN 45,000"], answer: 1, why: "5 x 4,000 = 20,000; ọjọ́ ìlọ́po owó ojúmọ́ gbọ́dọ̀ dọ́gba pẹ̀lú iye tí a san." },
      { objective: "O3", q: "Níbo ni o ti máa ṣàyẹ̀wò owó-oṣù tó kéré jù lábẹ́ òfin?", options: ["Ẹgbẹ́ WhatsApp kan", "Olùtajà ohun èlò oko", "Olùrànlọ́wọ́ AI nìkan", "Iléeṣẹ́ ìjọba tí ń rí sí ọ̀rọ̀ iṣẹ́ ní orílẹ̀-èdè rẹ"], answer: 3, why: "Òfin owó iṣẹ́ ń wá láti ọ̀dọ̀ àjọ ìjọba tí ń rí sí ọ̀rọ̀ iṣẹ́, ó sì ń yí padà bí àkókò ti ń lọ." },
      { objective: "O6", q: "Ìsọfúnni wo ni oko nílò nípa òṣìṣẹ́ alágbàṣe?", options: ["Orúkọ, nọ́mbà mobile money, ọjọ́ iṣẹ́ àti owó iṣẹ́", "PIN rẹ̀", "Fọ́tò káàdì ìdánimọ̀ rẹ̀ nínú ẹgbẹ́ ìjíròrò", "Ọ̀rọ̀ aṣínà báńkì rẹ̀"], answer: 0, why: "Gba ohun tí o nílò nìkan." },
      { objective: "O6", q: "Ọ́fíìsì wo ló ń mójú tó ìsọfúnni àdáni ní Kenya?", options: ["Kenya Meteorological Department", "Pest Control Products Board", "Office of the Data Protection Commissioner", "KALRO"], answer: 2, why: "ODPC ni àjọ tí ń mójú tó ìdáàbòbò ìsọfúnni ní Kenya." },
      { objective: "O6", q: "Olùrà kan béèrè àkọsílẹ̀ oko rẹ. O yẹ kí o:", options: ["Fi gbogbo rẹ̀ ránṣẹ́, pẹ̀lú owó iṣẹ́", "Pín ohun tí wọ́n nílò nìkan kí o sì béèrè bí wọ́n ṣe máa lò ó", "Kọ̀ láti tà fún wọn", "Fi ọ̀rọ̀ aṣínà fóònù rẹ ránṣẹ́"], answer: 1, why: "Pín èyí tí ó kéré jù kí o sì mọ bí wọ́n ṣe máa lò ó." },
      { objective: "O4", q: "Kí ló yẹ kí ìròyìn ojoojúmọ́ láti oko ní?", options: ["Ìròyìn rere nìkan", "Ìtàn gígùn", "Kò sí nǹkan; a kò nílò ìròyìn", "Nọ́mbà, ìṣòro àti fọ́tò ti ibi kan náà"], answer: 3, why: "Ohun kan náà lójoojúmọ́ ń jẹ́ kí o fi wéra láti ọjọ́ dé ọjọ́." },
      { objective: "O4", q: "Èwo ló ṣòro jù láti ṣe ayédèrú rẹ̀ nígbà tí o bá ń ṣàyẹ̀wò ìròyìn?", options: ["Ìwé ìṣirò mobile money", "Ọ̀rọ̀ ohùn (voice note)", "Ìlérí", "Text tí ó sọ pé \"gbogbo nǹkan dára\""], answer: 0, why: "Ìwé ìṣirò àti ìwé ẹ̀rí ìsanwó jẹ́ àkọsílẹ̀ tí kò sinmi lé alábòójútó." },
      { objective: "O4", q: "Kí ni ìdí ìpàdé àyẹ̀wò ọ̀sẹ̀?", options: ["Láti bú alábòójútó", "Láti jọ wo nọ́mbà, ohun èlò àti ètò ọ̀sẹ̀ tó ń bọ̀", "Láti rọ́pò gbogbo àkọsílẹ̀", "Láti san owó fún àwọn olùtajà"], answer: 1, why: "Ó ń sọ nọ́mbà di ìpinnu." },
      { objective: "O5", q: "Nọ́mbà mélòó ni ẹ̀kọ́ yìí dámọ̀ràn fún dashboard ọ̀sẹ̀?", options: ["Ọ̀kan", "Ogún", "Márùn-ún", "Àádọ́ta"], answer: 2, why: "Nọ́mbà márùn-ún ṣeé kà kí a sì gbé ìgbésẹ̀ lé wọn lórí láàárín ìṣẹ́jú méjì." },
      { objective: "O5", q: "Èwo ni nọ́mbà àdánù fún oko adìẹ ẹlẹ́yin?", options: ["Ẹyin tí a tà", "Oúnjẹ tí wọ́n kó dé", "Òṣìṣẹ́ tí ó wá", "Adìẹ tí ó kú ní ọ̀sẹ̀ yìí"], answer: 3, why: "Àdánù bí adìẹ tí ó kú ń kìlọ̀ fún ọ ní kùtùkùtù." },
      { objective: "O5", q: "\"Adìẹ tí ó kú ju 3 lọ lójúmọ́: pe dókítà ẹranko ní ọjọ́ kan náà\" jẹ́ àpẹẹrẹ:", options: ["Ìwọ̀n déédé pẹ̀lú ìgbésẹ̀ kan", "Òfin ìdáàbòbò ìsọfúnni", "Kóòdù mobile money", "Kíka ohun èlò"], answer: 0, why: "Nọ́mbà dashboard kọ̀ọ̀kan ní ìwọ̀n àti ìgbésẹ̀ tí o máa gbé." },
      { objective: "O5", q: "Kí ló dé tí a fi ń fi ọwọ̀n kan fún ọ̀sẹ̀ kọ̀ọ̀kan sínú dashboard?", options: ["Láti kún ojú-ewé", "Láti rí ìtẹ̀sí bí àkókò ti ń lọ", "Nítorí pé app ní kí ó rí bẹ́ẹ̀", "Láti fi ọ̀sẹ̀ burúkú pamọ́"], answer: 1, why: "Ìtẹ̀sí ń fi ìṣòro hàn kí ó tó di ńlá." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 7, 8, 11, 14, 16, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Nọ́mbà márùn-ún tó wúlò", objective: "O5", notYet: "Nọ́mbà kò tó márùn-ún, tàbí nọ́mbà tí kò mú ìpinnu kankan wá.", meets: "Nọ́mbà márùn-ún tí ó kan owó, èso, àdánù, ohun èlò àti owó òṣìṣẹ́, kọ̀ọ̀kan pẹ̀lú ìwọ̀n déédé àti ìgbésẹ̀ kan.", exceeds: "Ó ti kún ó kéré tán ọ̀sẹ̀ méjì, ó sì ti ṣe ìpinnu kan nítorí nọ́mbà kan." },
      { name: "Nọ́mbà wá láti inú àkọsílẹ̀", objective: "O2", notYet: "Nọ́mbà jẹ́ àmọ̀ràn tàbí ohun tí a rántí.", meets: "Nọ́mbà kọ̀ọ̀kan dárúkọ ibi tí ó ti wá nínú ìwé àkọsílẹ̀ (àkọsílẹ̀ iṣẹ́, àkọsílẹ̀ ohun èlò, àkọsílẹ̀ ìsanwó).", exceeds: "Ìwé àkọsílẹ̀ lo orúkọ àti ìwọ̀n tí kò yí padà, iye ohun èlò tí a kà sì bá àkọsílẹ̀ mu." },
      { name: "Iṣẹ́ àti owó iṣẹ́ wà ní àkọsílẹ̀", objective: "O3", notYet: "Iṣẹ́ òṣìṣẹ́ kò sí nínú rẹ̀, tàbí a san owó láìsí àkọsílẹ̀.", meets: "Ọjọ́ iṣẹ́ wá láti inú àkọsílẹ̀ wíwá síbi iṣẹ́, ìsanwó sì ní kóòdù ìsanwó.", exceeds: "A ń fi ọjọ́ x owó ojúmọ́ wé ìsanwó ní ọ̀sẹ̀ kọ̀ọ̀kan." },
      { name: "Ètò ìròyìn", objective: "O4", notYet: "Kò sí ìròyìn pàtó, tàbí \"pè nígbà tí ó bá pọn dandan\" nìkan.", meets: "A ti kọ ohun tí ìròyìn ojoojúmọ́ máa ní àti àkókò rẹ̀, ìpàdé àyẹ̀wò ọ̀sẹ̀, àti ó kéré tán ọ̀nà méjì láti ṣàyẹ̀wò.", exceeds: "Ó ní àbẹ̀wò láìsọ tẹ́lẹ̀ tàbí ojú kejì tí a gbẹ́kẹ̀ lé, àti bí a ṣe máa béèrè nípa nọ́mbà àjèjì." },
      { name: "Ìsọfúnni wà ní ààbò", objective: "O6", notYet: "Gbogbo ènìyàn lè rí PIN, nọ́mbà ìdánimọ̀ tàbí owó iṣẹ́.", meets: "Ìsọfúnni tí a nílò nìkan ni a gbà, a sì pín àṣẹ ní ìbámu pẹ̀lú ipa.", exceeds: "Ó ní backup, ìwọlé onígbésẹ̀ méjì àti yíyọ ẹni tí ó kúrò kúrò ní ọjọ́ kan náà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń wo dashboard ọ̀sẹ̀ wọn lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n rí àlàfo nínú ohun èlò, iṣẹ́ òṣìṣẹ́ tàbí títà tí wọ́n sì tún un ṣe láàárín ọjọ́ 60",
      "Ìpín ìsanwó òṣìṣẹ́ tí a ṣe pẹ̀lú kóòdù ìsanwó tí a kọ sílẹ̀",
      "Àwọn ẹgbẹ́ àgbẹ̀ tàbí ètò tí wọ́n ròyìn àdánù tí ó dín kù tàbí ìjà tí ó dín kù lórí owó iṣẹ́ lẹ́yìn ẹ̀kọ́ náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní WhatsApp àti mobile money",
      "App spreadsheet ọ̀fẹ́ (Google Sheets tàbí Microsoft Excel) tàbí app oko tí akẹ́kọ̀ọ́ ń gbìyànjú",
      "Ìsọfúnni oko akẹ́kọ̀ọ́ fúnra rẹ̀, tàbí àwọn nọ́mbà àpẹẹrẹ inú ẹ̀kọ́",
      "Ìwé àti gègé fún tábìlì máàkì àti tábìlì àṣẹ",
      "Nǹkan bí ìṣẹ́jú 75 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Ó ṣiṣẹ́ dáadáa pẹ̀lú ẹgbẹ́ àgbẹ̀, ètò àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti ẹgbẹ́ àwọn olóko tí kò gbé lórí oko; orí kan ní ìpàdé kọ̀ọ̀kan.",
      "Má ṣe dámọ̀ràn tàbí ta app kankan nínú ìpàdé; jẹ́ kí àwọn akẹ́kọ̀ọ́ fún àwọn ọ̀nà ní máàkì pẹ̀lú àkọsílẹ̀ àwọn ẹ̀yà.",
      "Má ṣe ní kí àwọn akẹ́kọ̀ọ́ fi PIN gidi, ọ̀rọ̀ aṣínà, nọ́mbà ìdánimọ̀ tàbí owó iṣẹ́ ẹlòmíì hàn nínú ẹgbẹ́ láéláé.",
      "Pa olóko pọ̀ mọ́ alábòójútó rẹ̀ fún iṣẹ́ Ẹ̀kọ́ 5 tí ó bá ṣeé ṣe, kí àwọn méjèèjì lè fohùn ṣọ̀kan lórí ètò náà.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé òfin owó iṣẹ́, iṣẹ́ àti ìdáàbòbò ìsọfúnni yàtọ̀ láti orílẹ̀-èdè dé orílẹ̀-èdè, wọ́n sì ń yí padà; ṣàyẹ̀wò àwọn orísun ìjọba.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
