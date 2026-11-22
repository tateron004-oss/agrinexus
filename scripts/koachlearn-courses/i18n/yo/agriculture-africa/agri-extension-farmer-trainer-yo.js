"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-extension-farmer-trainer.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_FFS = { name: "FAO Global Farmer Field School Platform: àlàyé ṣókí nípa Ilé-ẹ̀kọ́ Oko fún Àgbẹ̀", url: "https://www.fao.org/farmer-field-schools/overview/en/" };
const IDE_FBA = { name: "iDE: Farm Business Advisors (olùdámọ̀ràn òwò oko)", url: "https://www.ideglobal.org/story/fbas" };
const GIZ_FBS = { name: "GIZ: Sustainable Smallholder Agribusiness (Farmer Business School, Ìwọ̀-oòrùn àti Àárín Áfíríkà)", url: "https://www.giz.de/en/projects/sustainable-smallholder-agribusiness" };
const ICRAF_VFT = { name: "CGIAR / ICRAF: ọ̀nà olùkọ́ àgbẹ̀ olùyọ̀ǹda ní Ìlà-oòrùn Áfíríkà", url: "https://cgspace.cgiar.org/handle/10568/123260" };
const NAERLS = { name: "National Agricultural Extension and Research Liaison Services (NAERLS), Nàìjíríà", url: "https://www.naerls.gov.ng/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO), àjọ ìwádìí ètò ọ̀gbìn àti ẹran ọ̀sìn Kenya", url: "https://www.kalro.org" };
const PCPB = { name: "Pest Control Products Board (Kenya): àwọn oògùn apakòkòrò tí a forúkọ wọn sílẹ̀", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nàìjíríà): ìforúkọsílẹ̀ kẹ́míkà oko", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya), ọ́fíìsì ààbò ìsọfúnni àdáni", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC), àjọ ààbò ìsọfúnni àdáni Nàìjíríà", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-extension-farmer-trainer-yo",
  lang: "yo",
  translationOf: "agri-extension-farmer-trainer",
  category: "Agriculture (Africa)",
  name: "Dídi Olùkọ́ Àgbẹ̀: Iṣẹ́ Ìmọ̀ràn Àgbẹ̀ (Extension) àti Olùdámọ̀ràn Òwò Oko",
  skills: "Mímọ àwọn ipa iṣẹ́ nínú ìmọ̀ràn àgbẹ̀, Ṣíṣètò ìdánilẹ́kọ̀ọ́ fihàn-gbìyànjú-jíròrò, Ṣíṣe oko àfihàn àti ìpàdé ilé-ẹ̀kọ́ oko, Fífúnni ní ìmọ̀ràn tó tọ́ àti rírán àgbẹ̀ lọ sọ́dọ̀ ògbóǹtarìgì, Jíjẹ èrè lọ́nà tó tọ́ láti ohun èlò oko àti iṣẹ́, Kíkọ àkọsílẹ̀ ìdánilẹ́kọ̀ọ́",
  outcome: "ṣètò kí o sì ṣe ọjọ́ ìdánilẹ́kọ̀ọ́ kúkúrú fún àwọn àgbẹ̀ ní agbègbè rẹ: ẹ̀kọ́ tí wọ́n fi ọwọ́ ara wọn ṣe lórí fihàn, gbìyànjú àti jíròrò; oko àfihàn tí ó fi ọ̀nà tí a sábà ń gbà wé ọ̀nà tó dára jù; ìmọ̀ràn òtítọ́ tí ó mọ ìgbà tí a gbọ́dọ̀ rán àgbẹ̀ lọ sọ́dọ̀ ògbóǹtarìgì; àti àkọsílẹ̀ àwọn tí o kọ́ àti ohun tí ó yí padà.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ tí wọ́n fẹ́ kọ́ àwọn aládùúgbò wọn: àwọn àgbẹ̀ aṣáájú, àwọn olùkọ́ àgbẹ̀ olùyọ̀ǹda, àwọn tí wọ́n fẹ́ di Farmer (tàbí Farm) Business Advisor, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn olórí ẹgbẹ́ alájọṣe àti àwọn òṣìṣẹ́ extension tuntun ní Kenya, Nàìjíríà, Ghana, Côte d'Ivoire, Cameroon àti káàkiri Áfíríkà.",
    "O máa kọ́ bí iṣẹ́ ìmọ̀ràn àgbẹ̀ (extension) ṣe ń ṣiṣẹ́ àti ipò rẹ nínú rẹ̀, bí àwọn àgbàlagbà ṣe ń kẹ́kọ̀ọ́ jù, bí a ṣe ń ṣe oko àfihàn àti ìpàdé ilé-ẹ̀kọ́ oko fún àgbẹ̀, bí a ṣe ń ṣètò ìdánilẹ́kọ̀ọ́ kúkúrú, bí a ṣe ń lo fóònù àti fídíò láti dé ọ̀dọ̀ àgbẹ̀ púpọ̀ sí i, bí a ṣe ń fúnni ní ìmọ̀ràn tó tọ́ àti ìgbà tí a gbọ́dọ̀ rán àgbẹ̀ lọ sọ́dọ̀ ògbóǹtarìgì, bí a ṣe ń jẹ èrè lọ́nà tó tọ́ nípa títa ohun èlò oko àti iṣẹ́, àti bí a ṣe ń kọ àkọsílẹ̀ àwọn tí o kọ́ àti ohun tí ó yí padà.",
    "O máa parí pẹ̀lú ètò ẹ̀kọ́ àti ètò oko àfihàn fún ọjọ́ ìdánilẹ́kọ̀ọ́ gidi ní agbègbè rẹ. Àwọn iye owó jẹ́ àpẹẹrẹ nìkan. Ẹ̀kọ́ kọ̀ọ̀kan parí pẹ̀lú iṣẹ́ kan; ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣètò ọjọ́ ìdánilẹ́kọ̀ọ́ fún àgbẹ̀ 15 sí 25 ní agbègbè rẹ lórí iṣẹ́ kan tí o mọ̀ dáadáa (fún àpẹẹrẹ gbígbin àgbàdo ní ìlà pẹ̀lú compost, ìtọ́jú ọkà nínú àpò tí afẹ́fẹ́ kò lè wọ̀, tàbí abẹ́rẹ́ àjẹsára adìẹ nípasẹ̀ dókítà ẹranko). Kọ: (1) ètò ẹ̀kọ́ ìṣẹ́jú 60 sí 90 tí ó tẹ̀lé fihàn, gbìyànjú, jíròrò, pẹ̀lú ọgbọ́n kan ṣoṣo, ohun èlò, àkókò àti bí o ṣe máa ṣàyẹ̀wò pé àgbẹ̀ kọ̀ọ̀kan lè ṣe é; (2) ètò oko àfihàn pẹ̀lú oko méjì lẹ́gbẹ̀ẹ́ ara wọn (ọ̀nà tí a sábà ń gbà àti ọ̀nà tuntun), tí wọ́n tóbi bákan náà, tí a kọ orúkọ sí, pẹ̀lú ohun tí o máa kọ sílẹ̀ àti ọjọ́ àbẹ̀wò oko; (3) àkọsílẹ̀ àwọn tí o máa rán àgbẹ̀ lọ sọ́dọ̀ wọn (dókítà ẹranko, ọ́fíìsì extension, àjọ tí ń ṣàkóso ohun èlò oko) àti ohun tí o kò ní fúnni ní ìmọ̀ràn lé lórí; (4) ìwé orúkọ ìdánilẹ́kọ̀ọ́ pẹ̀lú ìfọwọ́sí àti ọjọ́ àtẹ̀lé.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ aṣáájú, àwọn olùkọ́ àgbẹ̀ olùyọ̀ǹda, àwọn tí wọ́n fẹ́ di Farmer tàbí Farm Business Advisor, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn olórí ẹgbẹ́ alájọṣe àti àwọn òṣìṣẹ́ extension tuntun káàkiri Áfíríkà, títí kan Kenya, Nàìjíríà, Ghana, Côte d'Ivoire àti Cameroon. Ọ̀pọ̀ jù lọ jẹ́ àgbẹ̀ tí a bọ̀wọ̀ fún, tí wọ́n ní ọgbọ́n iṣẹ́ ọwọ́, ṣùgbọ́n wọn kò kọ́ bí a ṣe ń kọ́ni tàbí bí a ṣe ń gbani nímọ̀ràn rí.",
    startingPoint: "Wọ́n lè gbin irè oko tàbí sin ẹran dáadáa, wọ́n sì máa ń fún àwọn aládùúgbò ní ìmọ̀ràn láìjẹ́ ní ọ̀nà ìjọba. Díẹ̀ ni wọ́n ti ṣètò ẹ̀kọ́ rí, ṣe oko àfiwé tó tọ́, kọ àkọsílẹ̀ àwọn tí wọ́n kọ́, tàbí ronú nípa ibi tí ìmọ̀ràn wọn gbọ́dọ̀ dúró sí. Àwọn kan ń ta ohun èlò oko, wọn kò sì mọ̀ bí wọ́n ṣe lè ṣe é lọ́nà tó tọ́.",
    gap: "Àwọn òṣìṣẹ́ extension kò tó rárá fún iye àwọn àgbẹ̀, nítorí náà àwọn olùkọ́ àgbẹ̀ àti olùdámọ̀ràn ló ń gbé ọ̀pọ̀ ẹrù náà. Tí wọn kò bá ní ọgbọ́n ìkọ́ni, ààlà òtítọ́ àti àkọsílẹ̀, ìrànlọ́wọ́ wọn kò ní lágbára tó, ó sì lè ṣe ìpalára (ìwọ̀n oògùn tí kò tọ́, ọjà tí a kò forúkọ rẹ̀ sílẹ̀, títa ọjà pẹ̀lú ìfipá). Àwọn akẹ́kọ̀ọ́ nílò láti kọ́ni lọ́nà tí ó máa dúró, láti gbani nímọ̀ràn láìléwu, láti jẹ èrè lọ́nà tó tọ́, àti láti fi èsì hàn.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ẹ̀kọ́ yìí tún wà ní èdè Spanish, French àti Arabic",
      "Ẹ̀rọ: smartphone lásán; àwọn àgbẹ̀ tí wọ́n ń kọ́ lè ní fóònù lásán nìkan",
      "Ibi ìdánilẹ́kọ̀ọ́: ní oko ni ìdánilẹ́kọ̀ọ́ ti ń wáyé, ohun èlò kò pọ̀, kò sì sí projector",
      "Ààbò: kò sí ìwọ̀n oògùn, abẹ́rẹ́ àjẹsára tàbí hormone, kò sì sí àkókò ìdúró (withdrawal period); oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀ nìkan, bí ìwé ara rẹ̀ (label) ti sọ",
      "Owó: gbogbo iye owó jẹ́ àpẹẹrẹ; ìmọ̀ràn nípa èrè dá lórí ìṣòtítọ́, kì í ṣe lórí ìdókòwò",
      "Òfin ààbò ìsọfúnni àdáni ti orílẹ̀-èdè ló ń dáàbò bo ìsọfúnni àdáni àwọn òṣìṣẹ́ àti àgbẹ̀"
    ],
    prerequisites: "Ìrírí iṣẹ́ ọwọ́ pẹ̀lú ó kéré tán irè oko kan tàbí ẹran ọ̀sìn kan. Ẹ̀kọ́ nípa irè oko tàbí ẹran ọ̀sìn láti inú àkójọ ẹ̀kọ́ yìí máa ràn ọ́ lọ́wọ́ láti múra ohun tí o máa kọ́ni sílẹ̀."
  },
  // ---- ADDIE: Design (objectives) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn tí ń ran àwọn àgbẹ̀ lọ́wọ́ ní agbègbè rẹ", action: "ṣàlàyé iṣẹ́ àgbẹ̀ aṣáájú, Farmer Business Advisor àti aṣojú extension, àti àwọn tí o máa bá ṣiṣẹ́ pọ̀", standard: "kí o sì dárúkọ ẹnì kan tàbí ọ́fíìsì kan ní agbègbè rẹ fún ọ̀kọ̀ọ̀kan níbi tí wọ́n bá wà" },
    { id: "O2", condition: "Tí a bá fún ọ ní iṣẹ́ oko kan tí o mọ̀ dáadáa", action: "ṣètò ìdánilẹ́kọ̀ọ́ ìṣẹ́jú 60 sí 90 tí ó tẹ̀lé fihàn, gbìyànjú, jíròrò", standard: "pẹ̀lú ọgbọ́n kan tó yé, àkókò, ohun èlò, àti àyẹ̀wò pé gbogbo àgbẹ̀ lè ṣe é" },
    { id: "O3", condition: "Fún iṣẹ́ oko kan tí o fẹ́ kí àwọn àgbẹ̀ gbà", action: "ṣe oko àfihàn tí ó fi ọ̀nà tí a sábà ń gbà wé ọ̀nà tuntun", standard: "pẹ̀lú oko tí wọ́n tóbi bákan náà, tí a kọ orúkọ sí, tí a kọ àkọsílẹ̀ rẹ̀, tí a sì ń bẹ̀ wò ní ọjọ́ tí a ti yàn" },
    { id: "O4", condition: "Nígbà tí àgbẹ̀ kan bá béèrè ìmọ̀ràn tí ó kọjá ìdánilẹ́kọ̀ọ́ rẹ", action: "fúnni ní ìmọ̀ràn tí a kọ́ ọ nìkan, kí o sì rán àgbẹ̀ náà lọ sọ́dọ̀ ògbóǹtarìgì tó tọ́", standard: "ní lílo àkọsílẹ̀ ìtọ́kasí tí a kọ sílẹ̀, láìfúnni ní ìwọ̀n oògùn láéláé, àti láìdámọ̀ràn oògùn apakòkòrò tí a kò forúkọ rẹ̀ sílẹ̀" },
    { id: "O5", condition: "Tí o bá ń ta ohun èlò oko tàbí iṣẹ́ fún àwọn àgbẹ̀ tí o ń kọ́", action: "ṣàlàyé bí o ṣe ń jẹ èrè àti àwọn òfin ìwà rere tí o ń tẹ̀lé", standard: "pẹ̀lú iye owó tí a kọ sílẹ̀, owó ìpín (commission) tí a sọ ní gbangba, àti láìfipá mú ẹnikẹ́ni láti rà" },
    { id: "O6", condition: "Lẹ́yìn ìdánilẹ́kọ̀ọ́ kọ̀ọ̀kan", action: "kọ àkọsílẹ̀ àwọn tí o kọ́, ohun tí o kọ́ wọn, àti èsì rẹ̀", standard: "pẹ̀lú ìfọwọ́sí, ní ìkọ̀kọ̀, àti pẹ̀lú àtẹ̀lé ó kéré tán lẹ́ẹ̀kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíkọ́ àwọn àgbẹ̀ lọ́nà tí ó máa dúró",
      lessons: [
        {
          title: "Àgbẹ̀ aṣáájú, Farmer Business Advisor àti aṣojú extension",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ṣàlàyé àwọn ipa iṣẹ́ nínú ìmọ̀ràn àgbẹ̀, kí o sì dárúkọ àwọn tí o máa bá ṣiṣẹ́ pọ̀.",
          text: [
            "Extension túmọ̀ sí ríran àwọn àgbẹ̀ lọ́wọ́ láti kọ́ àti láti lo ọ̀nà iṣẹ́ oko tó dára jù. Àwọn aṣojú extension ti ìjọba (ní Nàìjíríà, Agricultural Development Programme ti ìpínlẹ̀ kọ̀ọ̀kan, pẹ̀lú àtìlẹ́yìn NAERLS; ní Kenya, àwọn òṣìṣẹ́ ètò ọ̀gbìn ti county tí ń bá àwọn àjọ ìwádìí bí KALRO ṣiṣẹ́) jẹ́ olùdámọ̀ràn tí a ti kọ́, ṣùgbọ́n ẹnì kọ̀ọ̀kan ń sìn àgbẹ̀ púpọ̀ gan-an. Nítorí náà, àwọn àgbẹ̀ fúnra wọn ló ń ṣe ọ̀pọ̀ iṣẹ́ ìkọ́ni.",
            "Àgbẹ̀ aṣáájú tàbí olùkọ́ àgbẹ̀ olùyọ̀ǹda jẹ́ àgbẹ̀ tí a bọ̀wọ̀ fún, tí ó ń ṣe àfihàn lórí oko rẹ̀, tí ó sì ń kọ́ àwọn aládùúgbò; iṣẹ́ àkànṣe (project) tàbí ọ́fíìsì extension ló sábà máa ń kọ́ ọ, tí wọ́n sì ń tì í lẹ́yìn. Ní Ìlà-oòrùn Áfíríkà, ICRAF àti àwọn alábàáṣiṣẹ́ rẹ̀ ti lo àwọn olùkọ́ àgbẹ̀ olùyọ̀ǹda púpọ̀, fún àpẹẹrẹ nínú ọ̀sìn màálù ìfunwàrà; ìwádìí kan ní Uganda rí i pé ìmọ̀ àwọn àgbẹ̀, iye wàrà àti owó tí wọ́n ń rí pọ̀ sí i.",
            "Farm Business Advisor (FBA), tí a tún ń pè ní Farmer Business Advisor, jẹ́ oníṣòwò àdúgbò tí ó ń ta ohun èlò oko àti ìmọ̀ràn fún àwọn àgbẹ̀ tí ó wà nítòsí, tí ó sì ń jẹ èrè láti owó ìpín (commission) àti owó iṣẹ́. iDE ń kọ́ àwọn FBA ní Zambia àti Mozambique; ọ̀kọ̀ọ̀kan ń sìn nǹkan bí àgbẹ̀ 80 sí 120. Ní Ìwọ̀-oòrùn àti Àárín Áfíríkà, Farmer Business School ti GIZ ti kọ́ àwọn àgbẹ̀ kòkó àti oúnjẹ ní Côte d'Ivoire, Ghana, Togo, Nàìjíríà àti Cameroon ní ọgbọ́n òwò oko, pẹ̀lú àwọn iṣẹ́ extension. Ohunkóhun tí orúkọ oyè rẹ bá jẹ́, ìwọ ń ran aṣojú extension lọ́wọ́; o kò rọ́pò rẹ̀."
          ],
          steps: ["Kọ àwọn tí ń ran àgbẹ̀ lọ́wọ́ ní agbègbè rẹ sílẹ̀: ọ́fíìsì extension, iṣẹ́ àkànṣe, ẹgbẹ́ alájọṣe, ilé ìtajà oògùn oko (agrovet).", "Pinnu ipa tí ó bá ọ mu: àgbẹ̀ aṣáájú, FBA, tàbí méjèèjì.", "Pàdé òṣìṣẹ́ extension àdúgbò rẹ kí o sì ṣàlàyé ohun tí o fẹ́ ṣe.", "Kọ ẹnì kan sílẹ̀ fún ipa kọ̀ọ̀kan àti ìgbà tí ẹ máa tún sọ̀rọ̀."],
          words: [["Extension", "iṣẹ́ tí ń ran àwọn àgbẹ̀ lọ́wọ́ láti kọ́ àti láti lo ọ̀nà iṣẹ́ oko tó dára jù."], ["Àgbẹ̀ aṣáájú", "àgbẹ̀ tí a bọ̀wọ̀ fún, tí ó ń ṣe àfihàn lórí oko rẹ̀, tí ó sì ń kọ́ àwọn aládùúgbò, nígbà púpọ̀ pẹ̀lú àtìlẹ́yìn iṣẹ́ àkànṣe tàbí extension."], ["Farm (tàbí Farmer) Business Advisor (FBA)", "oníṣòwò àdúgbò tí ó ń ta ohun èlò oko, tí ó sì ń fún àwọn àgbẹ̀ nítòsí ní ìmọ̀ràn, fún owó ìpín tàbí owó iṣẹ́."]],
          slides: [
            { title: "Àwọn aṣojú extension", bullets: ["Olùdámọ̀ràn ìjọba tí a ti kọ́", "Nàìjíríà: ADP, NAERLS; Kenya: òṣìṣẹ́ county, KALRO", "Ẹnì kọ̀ọ̀kan ń sìn àgbẹ̀ púpọ̀ gan-an"] },
            { title: "Àgbẹ̀ aṣáájú àti olùkọ́ olùyọ̀ǹda", bullets: ["Wọ́n ń ṣe àfihàn, wọ́n ń kọ́ aládùúgbò", "A lò wọ́n púpọ̀ ní Ìlà-oòrùn Áfíríkà (ICRAF, màálù ìfunwàrà)"] },
            { title: "Farm Business Advisor (FBA)", bullets: ["Oníṣòwò àdúgbò: ohun èlò oko pẹ̀lú ìmọ̀ràn", "iDE: Zambia, Mozambique; àgbẹ̀ 80-120 fún ọ̀kọ̀ọ̀kan", "GIZ Farmer Business School: Ìwọ̀-oòrùn àti Àárín Áfíríkà"] },
            { title: "Ẹ ṣiṣẹ́ pọ̀", bullets: ["Ìwọ ń ran aṣojú extension lọ́wọ́", "Kọ́kọ́ pàdé ọ́fíìsì àdúgbò rẹ"] }
          ],
          sources: [NAERLS, KALRO, ICRAF_VFT, IDE_FBA, GIZ_FBS],
          tryIt: "Ṣe àtẹ àwọn tí ń ran àgbẹ̀ lọ́wọ́ ní agbègbè rẹ: ọ́fíìsì extension, iṣẹ́ àkànṣe tàbí ẹgbẹ́ alájọṣe èyíkéyìí, àti agrovet tàbí olùtà ohun èlò oko tó sún mọ́ ọ jù. Kọ ipa tí o máa kó (àgbẹ̀ aṣáájú, FBA tàbí méjèèjì) àti ẹnì kan fún ipa kọ̀ọ̀kan.",
          youCanNow: "ṣàlàyé àwọn ipa iṣẹ́ nínú ìmọ̀ràn àgbẹ̀ àti ibi tí o bá mu.",
          quickCheck: [
            { objective: "O1", q: "Kí ló mú Farm Business Advisor yàtọ̀ jù lọ sí àgbẹ̀ aṣáájú olùyọ̀ǹda?", options: ["FBA ń jẹ èrè láti títa ohun èlò oko àti iṣẹ́", "FBA jẹ́ òṣìṣẹ́ ìjọba", "FBA kì í fúnni ní ìmọ̀ràn láéláé", "FBA ń ṣiṣẹ́ ní ìlú ńlá nìkan"], answer: 0, why: "Àwọn FBA jẹ́ oníṣòwò àdúgbò tí ń jẹ èrè láti owó ìpín àti owó iṣẹ́." },
            { objective: "O1", q: "O fẹ́ bẹ̀rẹ̀ sí kọ́ àwọn aládùúgbò. Ta ni o kọ́kọ́ gbọ́dọ̀ pàdé?", options: ["Olùrà kan ní ìlú ńlá", "Ilé iṣẹ́ rédíò kan", "Òṣìṣẹ́ extension àdúgbò rẹ", "Kò sí ẹnikẹ́ni; kàn bẹ̀rẹ̀"], answer: 2, why: "Ṣíṣiṣẹ́ pẹ̀lú extension ń jẹ́ kí ìmọ̀ràn rẹ bá ìgbà mu, ó sì ń mú àtìlẹ́yìn wá." }
          ]
        },
        {
          title: "Bí àwọn àgbàlagbà ṣe ń kẹ́kọ̀ọ́, àti ṣíṣètò ìdánilẹ́kọ̀ọ́ kúkúrú",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣètò ìdánilẹ́kọ̀ọ́ ìṣẹ́jú 60 sí 90 tí ó tẹ̀lé fihàn, gbìyànjú, jíròrò.",
          text: [
            "Àwọn àgbẹ̀ àgbàlagbà ń kẹ́kọ̀ọ́ jù nípa ṣíṣe nǹkan, láti ọ̀dọ̀ ẹni tí wọ́n fọkàn tán, nípa ìṣòro tí wọ́n ní báyìí. Wọ́n ní ìrírí: bọ̀wọ̀ fún un, kí o sì béèrè ohun tí wọ́n ti ń ṣe tẹ́lẹ̀. A máa ń gbàgbé ọ̀rọ̀ gígùn; ohun tí a fi ọwọ́ ara wa ṣe ni a máa ń rántí. Lo ìgbésẹ̀ mẹ́ta: fihàn (o ṣe ọgbọ́n náà díẹ̀díẹ̀ lójú wọn, o sì ṣàlàyé ìdí), gbìyànjú (gbogbo àgbẹ̀ ṣe é nígbà tí ò ń wò wọ́n tí o sì ń ràn wọ́n lọ́wọ́), jíròrò (ẹgbẹ́ sọ̀rọ̀ nípa ohun tí wọ́n rí, ohun tí ó le, àti bóyá ó máa ṣiṣẹ́ lórí oko wọn).",
            "Kọ́ ọgbọ́n kan ṣoṣo ní ìdánilẹ́kọ̀ọ́ kọ̀ọ̀kan, bí \"wọn ààyè kí o sì gbin àgbàdo ní ìlà pẹ̀lú ẹ̀kúnwọ́ compost kan nínú ihò kọ̀ọ̀kan\", kì í ṣe \"gbogbo nǹkan nípa àgbàdo\". Ṣètò rẹ̀: ọgbọ́n náà; ohun èlò tí gbogbo ènìyàn máa fi gbìyànjú; àkókò (fún àpẹẹrẹ ìṣẹ́jú 10 fún kíkí àti ohun tí ẹ ń ṣe báyìí, 15 fún fífihàn, 30 fún gbígbìyànjú, 20 fún jíjíròrò, 10 fún ètò àti àyẹ̀wò); àti bí o ṣe máa ṣàyẹ̀wò pé àgbẹ̀ kọ̀ọ̀kan lè ṣe é, bí wíwo ẹnì kọ̀ọ̀kan tí ó gbin ihò mẹ́ta dáadáa.",
            "Yan àkókò tí ó rọ àwọn àgbẹ̀ lọ́rùn (lẹ́yìn iṣẹ́ àárọ̀, kì í ṣe ní ọjọ́ ọjà), ibi tí wọ́n lè dé, àti èdè tí wọ́n ń sọ. Fi àwọn obìnrin àti àwọn ọ̀dọ́ kún un: béèrè ẹni tí ó ń ṣe iṣẹ́ náà nílé kí o sì pè wọ́n. Jẹ́ kí ẹgbẹ́ kéré tó fún gbogbo ènìyàn láti gbìyànjú, nǹkan bí ènìyàn 15 sí 25 fún olùkọ́ kan."
          ],
          steps: ["Yan ọgbọ́n kan tí àwọn àgbẹ̀ nílò báyìí.", "Ṣètò fihàn, gbìyànjú àti jíròrò, pẹ̀lú àkókò.", "Kọ ohun èlò sílẹ̀ kí gbogbo ènìyàn lè gbìyànjú.", "Pinnu bí o ṣe máa ṣàyẹ̀wò pé àgbẹ̀ kọ̀ọ̀kan lè ṣe é.", "Yan àkókò, ibi àti èdè tí ó bá àwọn àgbẹ̀ mu."],
          words: [["Fihàn, gbìyànjú, jíròrò", "ọ̀nà ìkọ́ni: ṣe é lójú wọn, jẹ́ kí gbogbo ènìyàn dánrawò, lẹ́yìn náà ẹ jíròrò rẹ̀."], ["Ètò ẹ̀kọ́", "ètò kúkúrú tí a kọ sílẹ̀ nípa ohun tí o máa kọ́ni, bí o ṣe máa kọ́ ọ, pẹ̀lú kí ni, àti iye àkókò tí apá kọ̀ọ̀kan máa gbà."], ["Kíkẹ́kọ̀ọ́ nípa ṣíṣe", "kíkọ́ ọgbọ́n kan nípa dídánrawò rẹ̀ pẹ̀lú ọwọ́ ara rẹ."]],
          slides: [
            { title: "Bí àwọn àgbàlagbà ṣe ń kẹ́kọ̀ọ́", bullets: ["Nípa ṣíṣe, láti ọ̀dọ̀ ẹni tí wọ́n fọkàn tán", "Lórí ìṣòro tí wọ́n ní báyìí", "Bọ̀wọ̀ fún ohun tí wọ́n ti mọ̀"] },
            { title: "Fihàn, gbìyànjú, jíròrò", bullets: ["Fihàn: ṣe é díẹ̀díẹ̀, sọ ìdí", "Gbìyànjú: gbogbo ènìyàn ṣe é", "Jíròrò: kí ló le, ṣé ó máa ṣiṣẹ́ níbí?"] },
            { title: "Ọgbọ́n kan ní ìdánilẹ́kọ̀ọ́ kan", bullets: ["Àpẹẹrẹ: ìlà pẹ̀lú compost nínú ihò kọ̀ọ̀kan", "Àkókò, ohun èlò, àyẹ̀wò fún gbogbo ènìyàn"] },
            { title: "Jẹ́ kí ó rọrùn láti wá", bullets: ["Àkókò àti ibi tó dára", "Èdè àwọn àgbẹ̀ fúnra wọn", "Pe àwọn obìnrin àti àwọn ọ̀dọ́"] }
          ],
          tryIt: "Kọ ètò ẹ̀kọ́ fún ọgbọ́n kan tí o mọ̀ dáadáa: ọgbọ́n náà ní gbólóhùn kan, ohun èlò, àkókò fihàn-gbìyànjú-jíròrò fún ìṣẹ́jú 60 sí 90, àti bí o ṣe máa ṣàyẹ̀wò pé àgbẹ̀ kọ̀ọ̀kan lè ṣe é.",
          youCanNow: "ṣètò ìdánilẹ́kọ̀ọ́ kúkúrú tí ó kọ́ni ní ọgbọ́n kan nípa fihàn, gbìyànjú àti jíròrò.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni ọgbọ́n tó dára jù fún ìdánilẹ́kọ̀ọ́ ìṣẹ́jú 90 kan?", options: ["Gbogbo nǹkan nípa àgbàdo", "Gbogbo ìlera ẹran ọ̀sìn", "Iṣẹ́ àgbẹ̀ lápapọ̀", "Gbígbin àgbàdo ní ìlà pẹ̀lú ẹ̀kúnwọ́ compost kan nínú ihò kọ̀ọ̀kan"], answer: 3, why: "A lè fi ọgbọ́n kan tó yé hàn, dánrawò rẹ̀, kí a sì ṣàyẹ̀wò rẹ̀ ní ìdánilẹ́kọ̀ọ́ kan." },
            { objective: "O2", q: "Kí ló ń ṣẹlẹ̀ ní ìgbésẹ̀ \"gbìyànjú\"?", options: ["Olùkọ́ sọ ọ̀rọ̀ gígùn", "Gbogbo àgbẹ̀ ṣe ọgbọ́n náà nígbà tí olùkọ́ ń wò wọ́n tí ó sì ń ràn wọ́n lọ́wọ́", "Àwọn àgbẹ̀ lọ sílé", "Ẹgbẹ́ ta ohun èlò oko"], answer: 1, why: "Dídánrawò pẹ̀lú ọwọ́ ara wọn ni ó ń jẹ́ kí àwọn àgbàlagbà rántí." }
          ]
        },
        {
          title: "Oko àfihàn àti Ilé-ẹ̀kọ́ Oko fún Àgbẹ̀",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ṣe oko àfihàn tí ó fi ọ̀nà tí a sábà ń gbà wé ọ̀nà tuntun lọ́nà tó tọ́.",
          text: [
            "Àwọn àgbẹ̀ máa ń gba ohun tí wọ́n rí lórí oko tí ó dà bí tiwọn gbọ́. Oko àfihàn ń fi ọ̀nà tuntun hàn lẹ́gbẹ̀ẹ́ ọ̀nà tí a sábà ń gbà. Yan ibi tí a ti lè rí i nítòsí ọ̀nà, tí ilẹ̀ rẹ̀ dọ́gba. Sàmì sí oko méjì tí wọ́n tóbi bákan náà (fún àpẹẹrẹ 10 m x 10 m ọ̀kọ̀ọ̀kan): oko A, ọ̀nà tí a sábà ń gbà; oko B, ọ̀nà tuntun. Yí nǹkan kan ṣoṣo padà láàárín wọn, bí irú èso, ààyè láàárín ohun ọ̀gbìn tàbí compost, kí ìyàtọ̀ náà lè ní ìdí kan ṣoṣo. Fi àmì tó hàn kedere sí ọ̀kọ̀ọ̀kan.",
            "Kọ àkọsílẹ̀ láti ìbẹ̀rẹ̀: ọjọ́ gbígbìn, ohun èlò àti iṣẹ́ ọwọ́ fún oko kọ̀ọ̀kan, fọ́tò ní ọ̀sẹ̀ méjì méjì, àwọn ìṣòro, àti ìkórè tí a wọ̀n lọ́tọ̀. Ṣètò ọjọ́ oko ní àwọn ìpele pàtàkì (lẹ́yìn tí ohun ọ̀gbìn hù jáde, nígbà tí ó bá yọ òdòdó, nígbà ìkórè) kí àwọn àgbẹ̀ lè rí i kí wọ́n sì fi wéra. Sọ òtítọ́ tí ọ̀nà tuntun kò bá borí: ẹ̀kọ́ tó wúlò ni ìyẹn náà.",
            "Ilé-ẹ̀kọ́ Oko fún Àgbẹ̀ (Farmer Field School, FFS) lọ jìnnà ju bẹ́ẹ̀ lọ. FAO ṣàpèjúwe rẹ̀ bí ẹgbẹ́ àgbẹ̀ tí ń pàdé déédéé nínú oko jálẹ̀ àkókò ìgbìn kan látìbẹ̀rẹ̀ dé òpin, pẹ̀lú olùdarí tí a ti kọ́. Wọ́n ń fi oko wéra (ọ̀nà àdúgbò àti ọ̀nà tí a dábàá pé ó dára jù), wọ́n sì ń ṣe Agro-Ecosystem Analysis: ní ẹgbẹ́ kéékèèké, wọ́n ń wo ohun ọ̀gbìn, kòkòrò, àwọn ọ̀tá kòkòrò àdánidá, ilẹ̀ àti ojú ọjọ́, wọ́n ń ya ohun tí wọ́n rí, wọ́n sì ń pinnu papọ̀ ohun tí wọ́n máa ṣe. A ti lo FFS ní orílẹ̀-èdè tó ju 90 lọ. Tí o bá fẹ́ darí ọ̀kan, béèrè lọ́wọ́ ọ́fíìsì extension rẹ tàbí iṣẹ́ àkànṣe kan nípa ìdánilẹ́kọ̀ọ́ fún olùdarí."
          ],
          steps: ["Yan ibi tí a ti lè rí i, tí ilẹ̀ rẹ̀ dọ́gba.", "Sàmì sí oko méjì tí wọ́n tóbi bákan náà: ọ̀nà tí a sábà ń gbà àti ọ̀nà tuntun.", "Yí nǹkan kan ṣoṣo padà láàárín wọn; kọ orúkọ sí méjèèjì.", "Kọ ọjọ́, ohun èlò, iṣẹ́ ọwọ́, fọ́tò àti ìkórè sílẹ̀ fún oko kọ̀ọ̀kan.", "Ṣètò ọjọ́ oko nígbà híhù jáde, yíyọ òdòdó àti ìkórè."],
          words: [["Oko àfihàn", "oko kékeré tí ó ń fi ọ̀nà iṣẹ́ kan hàn kí àwọn àgbẹ̀ lè rí i bí ó ṣe ń ṣiṣẹ́."], ["Ilé-ẹ̀kọ́ Oko fún Àgbẹ̀ (FFS)", "ẹgbẹ́ tí ń pàdé déédéé nínú oko jálẹ̀ àkókò ìgbìn kan, pẹ̀lú olùdarí, láti kẹ́kọ̀ọ́ nípa wíwò àti dídánwò."], ["Agro-Ecosystem Analysis (AESA)", "wíwo ohun ọ̀gbìn, kòkòrò, àwọn ọ̀tá kòkòrò àdánidá, ilẹ̀ àti ojú ọjọ́ nínú oko, lẹ́yìn náà pípinnu papọ̀ ohun tí a máa ṣe."]],
          slides: [
            { title: "Rírí ni gbígbàgbọ́", bullets: ["Ọ̀nà tí a sábà ń gbà lẹ́gbẹ̀ẹ́ ọ̀nà tuntun", "Ìtóbi kan náà, ó hàn kedere, a kọ orúkọ sí i"] },
            { title: "Àfiwé tó tọ́", bullets: ["Yí nǹkan kan ṣoṣo padà", "Ilẹ̀ tó dọ́gba, ìtọ́jú kan náà ní gbogbo ọ̀nà míì"] },
            { title: "Kọ sílẹ̀ kí o sì fihàn", bullets: ["Ọjọ́, ohun èlò, iṣẹ́ ọwọ́, fọ́tò", "Ìkórè tí a wọ̀n fún oko kọ̀ọ̀kan", "Ọjọ́ oko ní àwọn ìpele pàtàkì"] },
            { title: "Ilé-ẹ̀kọ́ Oko fún Àgbẹ̀ (FAO)", bullets: ["Ó ń pàdé déédéé jálẹ̀ àkókò ìgbìn", "Olùdarí tí a ti kọ́, fífi oko wéra", "Agro-Ecosystem Analysis, ìpinnu papọ̀"] }
          ],
          sources: [FAO_FFS],
          tryIt: "Ya àwòrán oko àfihàn fún ọgbọ́n tí o ṣètò nínú Ẹ̀kọ́ 2: oko méjì tí wọ́n tóbi bákan náà, nǹkan kan tí ó yàtọ̀, àwọn àmì, ohun tí o máa kọ sílẹ̀, àti ọjọ́ ọjọ́ oko mẹ́ta.",
          youCanNow: "ṣe oko àfihàn tó tọ́, kí o sì ṣàlàyé bí Ilé-ẹ̀kọ́ Oko fún Àgbẹ̀ ṣe ń ṣiṣẹ́.",
          quickCheck: [
            { objective: "O3", q: "Nínú àfihàn rẹ, oko B ní irú èso tuntun, compost ÀTI ààyè tó fẹ̀ jù. Kí ni ìṣòro?", options: ["Kò sí; ìyípadà púpọ̀ dára jù", "Àwọn oko náà kéré jù", "O kò lè mọ ìyípadà tí ó mú ìyàtọ̀ wá", "Àwọn àgbẹ̀ kò fẹ́ràn àmì"], answer: 2, why: "Yí nǹkan kan padà kí ìyàtọ̀ náà lè ní ìdí kan ṣoṣo." },
            { objective: "O3", q: "Kí ni àwọn àgbẹ̀ nínú Ilé-ẹ̀kọ́ Oko fún Àgbẹ̀ ti FAO ń ṣe nínú Agro-Ecosystem Analysis?", options: ["Wọ́n ń wo oko ní ẹgbẹ́ kéékèèké, wọ́n sì ń pinnu papọ̀ ohun tí wọ́n máa ṣe", "Wọ́n ń gbọ́ ìwàásù ẹ̀kọ́ nìkan", "Wọ́n ń ra ohun èlò oko", "Wọ́n ń kún fọ́ọ̀mù ẹ̀yáwó"], answer: 0, why: "AESA ni wíwo ohun ọ̀gbìn, kòkòrò, ilẹ̀ àti ojú ọjọ́, lẹ́yìn náà pípinnu gẹ́gẹ́ bí ẹgbẹ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíkọ́ àwọn àgbẹ̀ lọ́nà tí ó máa dúró",
        questions: [
          { objective: "O1", q: "Kí ló fà á tí àwọn olùkọ́ àgbẹ̀ fi ṣe pàtàkì tó bẹ́ẹ̀ nínú extension ní Áfíríkà?", options: ["A kò kọ́ àwọn aṣojú extension", "Aṣojú extension kọ̀ọ̀kan ń sìn àgbẹ̀ púpọ̀ gan-an", "Àwọn àgbẹ̀ kò fẹ́ràn ògbóǹtarìgì", "Òfin ní kí wọ́n wà"], answer: 1, why: "Àwọn olùkọ́ àgbẹ̀ ń ran extension lọ́wọ́ láti dé ọ̀dọ̀ ènìyàn púpọ̀ sí i." },
          { objective: "O1", q: "Ní orílẹ̀-èdè wo ni Farmer Business School ti GIZ ti bá àwọn àgbẹ̀ kòkó ṣiṣẹ́?", options: ["Kenya nìkan", "Ní Asia nìkan", "Zambia àti Mozambique nìkan", "Côte d'Ivoire, Ghana, Togo, Nàìjíríà àti Cameroon"], answer: 3, why: "Iṣẹ́ àkànṣe náà bo àwọn orílẹ̀-èdè márùn-ún wọ̀nyí ní Ìwọ̀-oòrùn àti Àárín Áfíríkà." },
          { objective: "O2", q: "Kí ni ìgbésẹ̀ mẹ́ta ọ̀nà ìkọ́ni nínú ẹ̀kọ́ yìí?", options: ["Fihàn, gbìyànjú, jíròrò", "Sọ̀rọ̀, sọ̀rọ̀, dánwò", "Kà, kọ, fọwọ́ sí", "Rà, tà, san"], answer: 0, why: "Ṣe é lójú wọn, dánrawò, kí ẹ sì jíròrò rẹ̀." },
          { objective: "O2", q: "Báwo ni o ṣe máa ṣàyẹ̀wò pé ìdánilẹ́kọ̀ọ́ kan ṣiṣẹ́?", options: ["Ka iye àwọn tí ó wá", "Béèrè bóyá ó dùn mọ́ wọn", "Wo àgbẹ̀ kọ̀ọ̀kan tí ó ń ṣe ọgbọ́n náà dáadáa", "Pín ìwé pẹlẹbẹ gígùn"], answer: 2, why: "Àmì pé ìdánilẹ́kọ̀ọ́ ọgbọ́n kan ṣiṣẹ́ ni pé àgbẹ̀ kọ̀ọ̀kan lè ṣe ọgbọ́n náà." },
          { objective: "O3", q: "Ibo ni ó yẹ kí oko àfihàn wà?", options: ["Ní ìkọ̀kọ̀ lẹ́yìn ilé", "Ní ibi tí a ti lè rí i nítòsí ọ̀nà, tí ilẹ̀ rẹ̀ dọ́gba", "Lórí ilẹ̀ tí ó burú jù nìkan", "Jìnnà sí gbogbo àgbẹ̀"], answer: 1, why: "Àwọn àgbẹ̀ gbọ́dọ̀ rí i, ilẹ̀ tó dọ́gba sì ń jẹ́ kí àfiwé tọ́." }
        ]
      }
    },
    {
      name: "Orí 2: Fífúnni ní ìmọ̀ràn, jíjẹ èrè àti fífi èsì hàn",
      lessons: [
        {
          title: "Dídé ọ̀dọ̀ àgbẹ̀ lórí fóònù, àti mímọ ìgbà tí a gbọ́dọ̀ rán wọn lọ",
          objectives: ["O4"],
          minutes: 6,
          goal: "Fúnni ní ìmọ̀ràn tí a kọ́ ọ nìkan, kí o sì rán àwọn àgbẹ̀ lọ sọ́dọ̀ ògbóǹtarìgì tó tọ́.",
          text: [
            "Fóònù ń ràn ọ́ lọ́wọ́ láti dé ọ̀dọ̀ àgbẹ̀ púpọ̀ sí i láàárín àbẹ̀wò. Ya fídíò kúkúrú (ìṣẹ́jú kan sí méjì) ti ìgbésẹ̀ \"fihàn\" lórí fóònù rẹ kí o sì pín in nínú ẹgbẹ́ WhatsApp; fi SMS ránṣẹ́ láti rán àwọn àgbẹ̀ tí wọ́n ní fóònù lásán létí; lo ohùn tí a gbà sílẹ̀ (voice note) ní èdè àdúgbò; ṣe ìpè ẹgbẹ́ kúkúrú ṣáájú ọjọ́ oko. Gba àṣẹ kí o tó ya fídíò ènìyàn tàbí oko wọn, kí o sì jẹ́ kí ẹgbẹ́ náà wà fún ọ̀rọ̀ oko nìkan.",
            "Ìmọ̀ràn lè ṣèrànwọ́, ó sì lè ṣe ìpalára. Fúnni ní ìmọ̀ràn lórí ohun tí a kọ́ ọ àti ohun tí o ti rí tí ó ṣiṣẹ́ nìkan. Má ṣe fúnni ní ìwọ̀n oògùn ẹranko, abẹ́rẹ́ àjẹsára tàbí hormone láéláé, má sì ṣe sọ àkókò ìdúró (withdrawal period) láéláé: sọ pé \"tẹ̀lé dókítà ẹranko àti ìwé ara ọjà náà\". Dámọ̀ràn oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀ ní orílẹ̀-èdè rẹ nìkan (fún àpẹẹrẹ pẹ̀lú Pest Control Products Board ti Kenya tàbí NAFDAC ti Nàìjíríà), tí a lò bí ìwé ara rẹ̀ ti sọ, pẹ̀lú aṣọ àti ohun èlò ààbò. Ṣàyẹ̀wò àkọsílẹ̀ àjọ ìforúkọsílẹ̀ náà tí kò bá dá ọ lójú.",
            "Rán àgbẹ̀ lọ kíákíá nígbà tí nǹkan bá kọjá agbára rẹ: ẹranko tí ń ṣàìsàn tàbí tí ń kú lọ sọ́dọ̀ dókítà ẹranko; ikú òjijì ẹlẹ́dẹ̀ tàbí adìẹ lè jẹ́ African Swine Fever tàbí àrùn ibà ẹyẹ (avian flu), tí a gbọ́dọ̀ fi tó ìjọba létí, nítorí náà sọ fún àgbẹ̀ láti fi tó dókítà ẹranko tàbí àjọ ìjọba tí ń ṣàkóso ẹranko létí lójú ẹsẹ̀, kí ó má sì gbé àwọn ẹranko náà lọ síbòmíì tàbí tà wọ́n. Kòkòrò tàbí àrùn ohun ọ̀gbìn tí a kò mọ̀ lọ sí ọ́fíìsì extension tàbí ilé-iṣẹ́ ìwádìí. Ẹ̀yáwó àti àdéhùn lọ sọ́dọ̀ olùdámọ̀ràn tí a fọkàn tán. Ní àkọsílẹ̀ ìtọ́kasí tí a kọ sílẹ̀ pẹ̀lú orúkọ àti nọ́mbà fóònù, kí o sì tẹ̀lé e láti mọ ohun tí ó ṣẹlẹ̀."
          ],
          steps: ["Pín fídíò kúkúrú, SMS ìránnilétí àti voice note; gba àṣẹ kí o tó ya fídíò.", "Fúnni ní ìmọ̀ràn lórí ohun tí a kọ́ ọ nìkan.", "Kò sí ìwọ̀n oògùn tàbí àkókò ìdúró: dókítà ẹranko àti ìwé ara ọjà nìkan.", "Oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀ nìkan, bí ìwé ara rẹ̀ ti sọ.", "Rán àgbẹ̀ lọ kíákíá ní lílo àkọsílẹ̀ ìtọ́kasí rẹ, kí o sì tẹ̀lé e."],
          words: [["Ìtọ́kasí (referral)", "rírán àgbẹ̀ lọ sọ́dọ̀ ògbóǹtarìgì tí ó lè ṣèrànwọ́ lórí ohun tí ó kọjá ọgbọ́n rẹ."], ["Àrùn tí a gbọ́dọ̀ fi tó ìjọba létí", "àrùn tí òfin sọ pé a gbọ́dọ̀ fi tó àjọ ìjọba tí ń ṣàkóso ẹranko létí, bí African Swine Fever tàbí àrùn ibà ẹyẹ."], ["Oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀", "ọjà tí àjọ ìjọba tí ń ṣàkóso rẹ̀ ní orílẹ̀-èdè ti fọwọ́ sí fún lílò."]],
          slides: [
            { title: "Fóònù ń dé ọ̀dọ̀ àgbẹ̀ púpọ̀ sí i", bullets: ["Fídíò ìṣẹ́jú 1-2 ti ìgbésẹ̀ \"fihàn\"", "SMS ìránnilétí, voice note, ìpè ẹgbẹ́", "Béèrè kí o tó ya fídíò"] },
            { title: "Gbani nímọ̀ràn láàárín ohun tí a kọ́ ọ", bullets: ["Kò sí ìwọ̀n oògùn, abẹ́rẹ́ àjẹsára tàbí hormone", "Dókítà ẹranko àti ìwé ara ọjà nìkan", "Oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀, bí ìwé ara rẹ̀ ti sọ"] },
            { title: "Rán wọn lọ kíákíá", bullets: ["Ẹranko tí ń ṣàìsàn: dókítà ẹranko", "Ikú ẹlẹ́dẹ̀ tàbí adìẹ: fi tó ìjọba létí lójú ẹsẹ̀", "Ìṣòro ohun ọ̀gbìn tí a kò mọ̀: extension"] },
            { title: "Àkọsílẹ̀ ìtọ́kasí rẹ", bullets: ["Orúkọ àti nọ́mbà fóònù", "Tẹ̀lé e láti mọ ohun tí ó ṣẹlẹ̀"] }
          ],
          sources: [PCPB, NAFDAC],
          tryIt: "Kọ àkọsílẹ̀ ìtọ́kasí rẹ: dókítà ẹranko tàbí ọ́fíìsì ẹranko tó sún mọ́ ọ jù, ọ́fíìsì extension, àjọ ìforúkọsílẹ̀ oògùn apakòkòrò ní orílẹ̀-èdè rẹ, àti olùdámọ̀ràn tí a fọkàn tán fún owó àti àdéhùn, pẹ̀lú nọ́mbà fóònù. Lẹ́yìn náà kọ ìbéèrè mẹ́ta tí ìwọ fúnra rẹ KÒ ní dáhùn àti ẹni tí o máa rán wọn lọ sọ́dọ̀ rẹ̀.",
          youCanNow: "dé ọ̀dọ̀ àgbẹ̀ lórí fóònù, kí o sì fúnni ní ìmọ̀ràn láàárín ààlà rẹ, kí o sì rán àwọn ìyókù lọ sọ́dọ̀ ògbóǹtarìgì tó tọ́.",
          quickCheck: [
            { objective: "O4", q: "Àgbẹ̀ kan béèrè iye oògùn apakòkòrò-àrùn (antibiotic) tí ó máa fún ewúrẹ́ tí ń ṣàìsàn. O sọ pé:", options: ["\"Fún un ní ṣíbí méjì lójoojúmọ́.\"", "\"Lo èyí tí ó wọ́n jù.\"", "\"Fún un ní ìlọ́po méjì kí ó lè dájú.\"", "\"Pe dókítà ẹranko kí o sì tẹ̀lé ìwé ara ọjà náà; èmi kò lè fúnni ní ìwọ̀n oògùn.\""], answer: 3, why: "Ìwọ̀n oògùn ń wá láti ọ̀dọ̀ dókítà ẹranko àti ìwé ara ọjà, kì í ṣe láti ọ̀dọ̀ olùkọ́ àgbẹ̀." },
            { objective: "O4", q: "Ẹlẹ́dẹ̀ púpọ̀ nínú abúlé kan kú lójijì. Kí ni o máa sọ fún àwọn àgbẹ̀?", options: ["Ẹ ta àwọn tó kù kíákíá", "Ẹ fi tó dókítà ẹranko tàbí àjọ ìjọba tí ń ṣàkóso ẹranko létí lójú ẹsẹ̀, ẹ má sì gbé àwọn ẹlẹ́dẹ̀ lọ síbòmíì", "Ẹ dúró fún ọ̀sẹ̀ kan", "Ẹ jẹ ẹran náà"], answer: 1, why: "Ó lè jẹ́ African Swine Fever, àrùn tí a gbọ́dọ̀ fi tó ìjọba létí lójú ẹsẹ̀." }
          ]
        },
        {
          title: "Jíjẹ èrè gẹ́gẹ́ bí Farmer Business Advisor, lọ́nà tó tọ́",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ṣàlàyé bí o ṣe máa jẹ èrè láti ohun èlò oko àti iṣẹ́, àti àwọn òfin ìwà rere tí o máa tẹ̀lé.",
          text: [
            "FBA ń jẹ èrè nípa mímú ohun èlò oko àti iṣẹ́ wá fún àwọn àgbẹ̀ tí wọ́n jìnnà sí ṣọ́ọ̀bù: owó ìpín lórí irúgbìn, ajílẹ̀ (fertilizer), àpò ìtọ́jú ọkà tí afẹ́fẹ́ kò lè wọ̀ tàbí irinṣẹ́ tí ó tà; owó iṣẹ́ fún iṣẹ́ bí fífín oògùn pẹ̀lú ohun èlò tó yẹ, títúlẹ̀, gbígba àpẹẹrẹ ilẹ̀ fún àyẹ̀wò, kíkó ìkórè jọ fún àwọn olùrà, tàbí kíkọ àkọsílẹ̀. iDE sọ pé àjọṣe pípẹ́ tí FBA ní pẹ̀lú àwùjọ rẹ̀ ń fún un ní ìdí tó lágbára láti dámọ̀ràn ọjà tí ó ń mú èrè wá fún àwọn àgbẹ̀ nìkan.",
            "Ìwà rere jẹ́ òwò tó dára. Ta ọjà ojúlówó tí a forúkọ rẹ̀ sílẹ̀ nìkan, láti ọ̀dọ̀ olùpèsè tí ó ní ìwé àṣẹ. Kọ iye owó rẹ sílẹ̀ kí o sì sọ fún àwọn àgbẹ̀ nígbà tí o bá ń gba owó ìpín. Dámọ̀ràn ohun tí àgbẹ̀ nílò, kì í ṣe ohun tí ó ń mú owó púpọ̀ jù wá fún ọ; sọ kedere nígbà tí ìdáhùn tó dára jù bá jẹ́ \"o kò nílò láti ra nǹkan kan\". Má ṣe fipá mú ẹnikẹ́ni láéláé, má ṣe ta ọjà láwìn fún ẹni tí o mọ̀ pé kò lè san án padà, kí o sì ya ìdánilẹ́kọ̀ọ́ sọ́tọ̀ kúrò lára títà: gbogbo ènìyàn lè wá sí ìdánilẹ́kọ̀ọ́ bóyá wọ́n rà tàbí wọn kò rà.",
            "Mọ ìṣirò rẹ. Àpẹẹrẹ nìkan: tí o bá ń gba owó ìpín XOF 500 lórí àpò kan, tí o sì ta àpò 120 ní àkókò ìgbìn kan, ìyẹn jẹ́ XOF 60,000, kí o tó yọ owó ọkọ̀ àti àkókò rẹ kúrò. Kọ àkọsílẹ̀ tó rọrùn ti ọjà tí o tà, owó ìpín àti owó iṣẹ́, kí o sì ṣàyẹ̀wò bóyá o nílò ìforúkọsílẹ̀ òwò tàbí ìwé àṣẹ ní orílẹ̀-èdè rẹ láti ta ohun èlò oko, pàápàá kẹ́míkà oko."
          ],
          steps: ["Kọ ohun èlò oko àti iṣẹ́ tí o lè pèsè sílẹ̀.", "Kọ iye owó rẹ àti owó ìpín rẹ lórí ọ̀kọ̀ọ̀kan.", "Kọ àwọn òfin ìwà rere rẹ: ọjà ojúlówó, sọ owó ìpín ní gbangba, kò sí ìfipá, ìdánilẹ́kọ̀ọ́ wà fún gbogbo ènìyàn.", "Kọ ọjà tí o tà, owó ìpín àti owó iṣẹ́ sílẹ̀.", "Ṣàyẹ̀wò òfin ìforúkọsílẹ̀ àti ìwé àṣẹ fún olùtà ohun èlò oko."],
          words: [["Owó ìpín (commission)", "owó tí olùtà ń rí lórí ohun kọ̀ọ̀kan tí ó tà, tí olùpèsè ń san."], ["Owó iṣẹ́", "owó tí a ń gbà fún ṣíṣe iṣẹ́ kan, bí fífín oògùn tàbí títúlẹ̀."], ["Ìforígbárí ànfààní (conflict of interest)", "nígbà tí ohun tí ó ń mú owó púpọ̀ jù wá fún ọ kì í ṣe ohun tó dára jù fún ẹni tí o ń gbà nímọ̀ràn."]],
          slides: [
            { title: "Bí àwọn FBA ṣe ń jẹ èrè", bullets: ["Owó ìpín lórí ohun èlò oko tí wọ́n tà", "Owó iṣẹ́: fífín oògùn, títúlẹ̀, kíkó ìkórè jọ", "Mímú ohun èlò oko sún mọ́ àwọn àgbẹ̀"] },
            { title: "Ìwà rere jẹ́ òwò tó dára", bullets: ["Ọjà ojúlówó tí a forúkọ rẹ̀ sílẹ̀ nìkan", "Iye owó tí a kọ sílẹ̀, owó ìpín tí a sọ ní gbangba", "Ìmọ̀ràn kọ́kọ́, títà ń tẹ̀lé e"] },
            { title: "Kò sí ìfipá", bullets: ["\"O kò nílò láti rà\" jẹ́ ìdáhùn tó dára", "Ìdánilẹ́kọ̀ọ́ wà fún gbogbo ènìyàn, wọ́n rà tàbí wọn kò rà", "Kò sí àwìn tí ènìyàn kò lè san"] },
            { title: "Mọ ìṣirò rẹ", bullets: ["Àpẹẹrẹ nìkan: XOF 500 x àpò 120 = XOF 60,000", "Yọ owó ọkọ̀ àti àkókò kúrò", "Ṣàyẹ̀wò òfin ìwé àṣẹ"] }
          ],
          sources: [IDE_FBA],
          tryIt: "Kọ àkọsílẹ̀ òwò FBA ojú-ewé kan: ohun èlò oko tàbí iṣẹ́ mẹ́ta tí o lè pèsè, iye owó àti owó ìpín àpẹẹrẹ fún ọ̀kọ̀ọ̀kan, èrè àpẹẹrẹ fún àkókò ìgbìn kan, àti àwọn òfin ìwà rere márùn-ún rẹ.",
          youCanNow: "ṣètò bí o ṣe máa jẹ èrè gẹ́gẹ́ bí FBA láti ohun èlò oko àti iṣẹ́ nígbà tí o ń pa ìgbẹ́kẹ̀lé àwọn àgbẹ̀ mọ́.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni òfin ìwà rere fún FBA?", options: ["Sọ fún àwọn àgbẹ̀ nígbà tí o bá ń gba owó ìpín", "Kọ́ àwọn tí wọ́n bá ń rà lọ́wọ́ rẹ nìkan", "Ta ọjà tí owó ìpín rẹ̀ pọ̀ jù lọ́nà ìfipá", "Ta ọjà tí a kò forúkọ rẹ̀ sílẹ̀ tí ó bá wọ́n jù"], answer: 0, why: "Sísọ owó ìpín ní gbangba ń jẹ́ kí ìmọ̀ràn jẹ́ òtítọ́, ó sì ń mú ìgbẹ́kẹ̀lé wá." },
            { objective: "O5", q: "Ohun ọ̀gbìn àgbẹ̀ kan kò nílò ajílẹ̀ ní àkókò ìgbìn yìí. O gbọ́dọ̀:", options: ["Ta á fún un bẹ́ẹ̀ náà", "Dákẹ́ kí o sì ta àpò kékeré fún un", "Sọ fún un ní òtítọ́ pé kò nílò láti rà á", "Kọ̀ láti tún bẹ̀ ẹ́ wò"], answer: 2, why: "Ìgbẹ́kẹ̀lé pípẹ́ níye lórí ju títà ẹ̀ẹ̀kan lọ." }
          ]
        },
        {
          title: "Kíkọ àkọsílẹ̀ ìdánilẹ́kọ̀ọ́ àti ṣíṣètò ọjọ́ ìdánilẹ́kọ̀ọ́ rẹ",
          objectives: ["O6", "O2", "O3"],
          minutes: 6,
          goal: "Kọ ìwé orúkọ ìdánilẹ́kọ̀ọ́ pẹ̀lú ìfọwọ́sí, kí o sì ṣètò ọjọ́ ìdánilẹ́kọ̀ọ́ kíkún.",
          text: [
            "Àkọsílẹ̀ ń fi ohun tí iṣẹ́ rẹ ṣe hàn, ó ń ràn ọ́ lọ́wọ́ láti tẹ̀lé àwọn àgbẹ̀, òun sì ni àwọn iṣẹ́ àkànṣe, ẹgbẹ́ alájọṣe àti agbanisíṣẹ́ máa ń béèrè. Ní ìwé orúkọ ìdánilẹ́kọ̀ọ́ fún ìdánilẹ́kọ̀ọ́ kọ̀ọ̀kan: ọjọ́, ibi, kókó ẹ̀kọ́, orúkọ àgbẹ̀ kọ̀ọ̀kan, ọkùnrin tàbí obìnrin, ẹgbẹ́ ọjọ́ orí (ọ̀dọ́ tàbí kì í ṣe ọ̀dọ́) àti abúlé, àti nọ́mbà fóònù tí wọ́n bá gbà nìkan. Kọ bóyá àgbẹ̀ kọ̀ọ̀kan lè ṣe ọgbọ́n náà ní ìparí.",
            "Tẹ̀lé wọn ó kéré tán lẹ́ẹ̀kan, fún àpẹẹrẹ lẹ́yìn oṣù kan tàbí nígbà ìkórè: ṣé wọ́n lo ọ̀nà náà, lórí ilẹ̀ tó tó báwo tàbí ẹranko mélòó, kí ló sì ṣẹlẹ̀? Kọ èsì oko àfihàn sílẹ̀ fún oko kọ̀ọ̀kan. Bí àkókò ti ń lọ, o lè sọ, fún àpẹẹrẹ, \"Mo kọ́ àgbẹ̀ 60; 35 ń gbin ní ìlà báyìí; èso àgbàdo wọn pọ̀ sí i ní ìpíndọ́gba\", pẹ̀lú àkọsílẹ̀ tí ó tì í lẹ́yìn. Má ṣe ṣe iye tirẹ̀ lásán: tí o kò bá wọ̀n ọ́n, sọ bẹ́ẹ̀.",
            "Gba àṣẹ kí o tó kọ ìsọfúnni àwọn ènìyàn sílẹ̀, ṣàlàyé ìdí, kí o sì pa ìwé orúkọ náà mọ́ ní ìkọ̀kọ̀: lórí ìwé ní ibi tó ní ààbò tàbí lórí fóònù tí a tì pa, kì í ṣe nínú ẹgbẹ́ WhatsApp gbangba. Kenya, Nàìjíríà àti àwọn orílẹ̀-èdè míì ní òfin ààbò ìsọfúnni àdáni. Báyìí, kó gbogbo rẹ̀ jọ fún ọjọ́ ìdánilẹ́kọ̀ọ́ rẹ: ètò ẹ̀kọ́, oko àfihàn, àkọsílẹ̀ ìtọ́kasí rẹ àti ìwé orúkọ yìí."
          ],
          steps: ["Ṣe ìwé orúkọ: ọjọ́, ibi, kókó ẹ̀kọ́, orúkọ, ọkùnrin tàbí obìnrin, ẹgbẹ́ ọjọ́ orí, abúlé, fóònù pẹ̀lú ìfọwọ́sí.", "Kọ àwọn tí ó lè ṣe ọgbọ́n náà ní ìparí.", "Tẹ̀lé wọn ó kéré tán lẹ́ẹ̀kan kí o sì kọ ohun tí ó yí padà.", "Kọ èsì oko àfihàn sílẹ̀ fún oko kọ̀ọ̀kan.", "Pa ìwé orúkọ mọ́ ní ìkọ̀kọ̀; kọ́kọ́ gba àṣẹ."],
          words: [["Ìwé orúkọ ìdánilẹ́kọ̀ọ́", "àkọsílẹ̀ àwọn tí ó wá sí ìdánilẹ́kọ̀ọ́, ohun tí a kọ́, àti èsì rẹ̀."], ["Àtẹ̀lé", "ṣíṣàyẹ̀wò lẹ́yìn náà bóyá àwọn àgbẹ̀ lo ohun tí wọ́n kọ́ àti ohun tí ó ṣẹlẹ̀."], ["Ìfọwọ́sí", "àṣẹ ẹnì kan láti kọ ìsọfúnni rẹ̀ sílẹ̀ tàbí láti pín in."]],
          slides: [
            { title: "Ìdí tí a fi ń kọ àkọsílẹ̀", bullets: ["Ó ń fi ohun tí iṣẹ́ rẹ ṣe hàn", "Ó ń jẹ́ kí o tẹ̀lé àwọn àgbẹ̀", "Àwọn iṣẹ́ àkànṣe àti agbanisíṣẹ́ ń béèrè rẹ̀"] },
            { title: "Ìwé orúkọ ìdánilẹ́kọ̀ọ́", bullets: ["Ọjọ́, ibi, kókó ẹ̀kọ́", "Orúkọ, ọkùnrin tàbí obìnrin, ẹgbẹ́ ọjọ́ orí, abúlé", "Fóònù pẹ̀lú ìfọwọ́sí nìkan; ṣé wọ́n lè ṣe é?"] },
            { title: "Àtẹ̀lé", bullets: ["Ó kéré tán lẹ́ẹ̀kan: lẹ́yìn oṣù kan tàbí nígbà ìkórè", "Ṣé wọ́n lò ó? Kí ló ṣẹlẹ̀?", "Má ṣe ṣe iye tirẹ̀ lásán láéláé"] },
            { title: "Pa á mọ́ ní ìkọ̀kọ̀", bullets: ["Gba àṣẹ, ṣàlàyé ìdí", "Ìwé ní ibi tó ní ààbò tàbí fóònù tí a tì pa", "Kì í ṣe nínú ẹgbẹ́ gbangba"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣètò ọjọ́ ìdánilẹ́kọ̀ọ́ rẹ. Kọ ètò ẹ̀kọ́ ìṣẹ́jú 60 sí 90 (fihàn, gbìyànjú, jíròrò, pẹ̀lú ọgbọ́n náà, ohun èlò, àkókò àti àyẹ̀wò), ètò oko àfihàn (oko méjì tí wọ́n tóbi bákan náà tí a kọ orúkọ sí, ìyàtọ̀ kan ṣoṣo, àkọsílẹ̀ àti ọjọ́ ọjọ́ oko), àkọsílẹ̀ ìtọ́kasí rẹ àti ohun tí o kò ní fúnni ní ìmọ̀ràn lé lórí, àti ìwé orúkọ ìdánilẹ́kọ̀ọ́ pẹ̀lú ìlà ìfọwọ́sí àti ọjọ́ àtẹ̀lé.",
          youCanNow: "ṣètò ọjọ́ ìdánilẹ́kọ̀ọ́ kíkún, kí o sì kọ àkọsílẹ̀ tí ó fi àwọn tí o kọ́ àti ohun tí ó yí padà hàn.",
          quickCheck: [
            { objective: "O6", q: "Kí o tó kọ nọ́mbà fóònù àgbẹ̀ kan sínú ìwé orúkọ rẹ, o gbọ́dọ̀:", options: ["Fi í sínú ẹgbẹ́", "Gba àṣẹ rẹ̀ kí o sì ṣàlàyé ìdí", "Dà á kọ láti ọ̀dọ̀ ẹlòmíì", "Kọ ọ́ láìbéèrè"], answer: 1, why: "A nílò ìfọwọ́sí láti kọ ìsọfúnni àdáni sílẹ̀." },
            { objective: "O6", q: "O kò wọn èso oko lẹ́yìn ìdánilẹ́kọ̀ọ́. Nínú ìròyìn rẹ, o gbọ́dọ̀:", options: ["Fojú díwọ̀n iye tó ga", "Da iye olùkọ́ míì kọ", "Fi ìdánilẹ́kọ̀ọ́ náà sílẹ̀", "Sọ pé a kò wọn èso oko"], answer: 3, why: "Àkọsílẹ̀ òtítọ́ níye lórí ju èsì tí a ṣe lásán lọ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Fífúnni ní ìmọ̀ràn, jíjẹ èrè àti fífi èsì hàn",
        questions: [
          { objective: "O4", q: "Oògùn apakòkòrò wo ni olùkọ́ àgbẹ̀ lè dámọ̀ràn?", options: ["Èyíkéyìí tí ó wọ́n láti ọjà", "Ọjà tí a forúkọ rẹ̀ sílẹ̀ ní orílẹ̀-èdè, tí a lò bí ìwé ara rẹ̀ ti sọ", "Àdàlù kẹ́míkà púpọ̀ tí a ṣe nílé", "Ohunkóhun tí aládùúgbò lò"], answer: 1, why: "Ọjà tí a forúkọ rẹ̀ sílẹ̀ nìkan, tí a lò bí ìwé ara rẹ̀ ti sọ, pẹ̀lú ohun èlò ààbò." },
          { objective: "O4", q: "Kí o tó ya fídíò àgbẹ̀ kan fún fídíò ìdánilẹ́kọ̀ọ́, o:", options: ["Gba àṣẹ rẹ̀", "Ya á ní ìkọ̀kọ̀", "Kọ́kọ́ fi í síta, béèrè lẹ́yìn náà", "Má sọ fún un láéláé"], answer: 0, why: "Gbígba àṣẹ ń fi ọ̀wọ̀ hàn fún ènìyàn àti oko wọn." },
          { objective: "O5", q: "Ìdánilẹ́kọ̀ọ́ gbọ́dọ̀:", options: ["Wà fún àwọn tí ń rà lọ́wọ́ rẹ nìkan", "Jẹ́ èyí tí owó ìpín nìkan ń sanwó rẹ̀", "Wà fún gbogbo ènìyàn, bóyá wọ́n rà tàbí wọn kò rà", "Dúró tí ọjà kò bá tà dáadáa"], answer: 2, why: "Yíya ìdánilẹ́kọ̀ọ́ sọ́tọ̀ kúrò lára títà ń dáàbò bo ìgbẹ́kẹ̀lé." },
          { objective: "O5", q: "Àpẹẹrẹ nìkan: owó ìpín XOF 500 lórí àpò kan, a ta àpò 120. Àpapọ̀ owó ìpín ni:", options: ["XOF 6,000", "XOF 600", "XOF 620", "XOF 60,000"], answer: 3, why: "500 x 120 = 60,000, kí a tó yọ ìnáwó kúrò." },
          { objective: "O6", q: "Ibo ni ó yẹ kí a pa ìwé orúkọ ìdánilẹ́kọ̀ọ́ mọ́ sí?", options: ["Ní ìkọ̀kọ̀: ìwé ní ibi tó ní ààbò tàbí fóònù tí a tì pa", "Nínú ẹgbẹ́ WhatsApp gbangba", "Lórí pátákó ìkéde", "Fún olùrà èyíkéyìí"], answer: 0, why: "Ìsọfúnni àdáni gbọ́dọ̀ wà ní ìkọ̀kọ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Dídi Olùkọ́ Àgbẹ̀: Iṣẹ́ Ìmọ̀ràn Àgbẹ̀ (Extension) àti Olùdámọ̀ràn Òwò Oko",
    questions: [
      { objective: "O1", q: "Extension túmọ̀ sí:", options: ["Mímú oko tóbi sí i", "Ríran àwọn àgbẹ̀ lọ́wọ́ láti kọ́ àti láti lo ọ̀nà iṣẹ́ oko tó dára jù", "Títa ilẹ̀", "Yíyá owó"], answer: 1, why: "Extension jẹ́ ìmọ̀ràn àti ẹ̀kọ́ fún àwọn àgbẹ̀." },
      { objective: "O1", q: "Àgbẹ̀ aṣáájú sábà máa ń jẹ́:", options: ["Àgbẹ̀ tí a bọ̀wọ̀ fún tí ó ń ṣe àfihàn tí ó sì ń kọ́ àwọn aládùúgbò", "Òṣìṣẹ́ báńkì", "Mínísítà ìjọba", "Olùrà"], answer: 0, why: "Àwọn àgbẹ̀ aṣáájú ń kọ́ni nípa àpẹẹrẹ lórí oko tiwọn." },
      { objective: "O1", q: "Àjọ wo ni ń kọ́ àwọn Farm Business Advisor ní Zambia àti Mozambique?", options: ["NAFDAC", "Kenya Meteorological Department", "iDE", "WOAH"], answer: 2, why: "iDE ló ń ṣe àwọn ẹgbẹ́ FBA níbẹ̀." },
      { objective: "O2", q: "Àwọn àgbàlagbà máa ń kọ́ ọgbọ́n iṣẹ́ oko jù nípa:", options: ["Gbígbọ́ ọ̀rọ̀ gígùn", "Kíka ìwé pẹlẹbẹ gígùn", "Wíwo tẹlifíṣọ̀n", "Ṣíṣe é pẹ̀lú ọwọ́ ara wọn"], answer: 3, why: "A máa ń rántí ohun tí a kọ́ nípa ṣíṣe." },
      { objective: "O2", q: "Nínú ìdánilẹ́kọ̀ọ́ ìṣẹ́jú 90, àkókò tó pọ̀ jù gbọ́dọ̀ lọ sí:", options: ["Kíkí", "Gbígbìyànjú ọgbọ́n náà", "Títa ohun èlò oko", "Dídúró"], answer: 1, why: "Ìdánrawò ni a ti ń kọ́ ọgbọ́n náà." },
      { objective: "O2", q: "Kí ló ń ran àwọn obìnrin àti ọ̀dọ́ púpọ̀ sí i lọ́wọ́ láti wá?", options: ["Bíbéèrè ẹni tí ó ń ṣe iṣẹ́ náà nílé àti pípè wọ́n, ní àkókò tó yẹ", "Ṣíṣe é ní ọjọ́ ọjà", "Lílo èdè tí wọn kò gbọ́", "Pípe àwọn olórí ilé nìkan"], answer: 0, why: "Pípe àwọn tí ó ń ṣe iṣẹ́ náà, ní àkókò tó dára, ń jẹ́ kí ìdánilẹ́kọ̀ọ́ dé ọ̀dọ̀ wọn." },
      { objective: "O3", q: "Oko àfihàn tó tọ́ máa ń fi wéra:", options: ["Oko méjì tí wọ́n ní ìyàtọ̀ púpọ̀", "Oko kan ṣoṣo", "Oko tí wọ́n tóbi bákan náà tí wọ́n yàtọ̀ ní ọ̀nà iṣẹ́ kan", "Oko rẹ àti ti aládùúgbò"], answer: 2, why: "Yí nǹkan kan padà kí èsì lè ní ìdí kan ṣoṣo." },
      { objective: "O3", q: "Ìgbà wo ni o gbọ́dọ̀ ṣe ọjọ́ oko lórí oko àfihàn?", options: ["Lẹ́yìn ìkórè nìkan", "Láéláé", "Ṣáájú gbígbìn nìkan", "Ní àwọn ìpele pàtàkì bí híhù jáde, yíyọ òdòdó àti ìkórè"], answer: 3, why: "Àwọn àgbẹ̀ ń rí ìyàtọ̀ bí ohun ọ̀gbìn ṣe ń dàgbà." },
      { objective: "O3", q: "Gẹ́gẹ́ bí FAO ti sọ, Ilé-ẹ̀kọ́ Oko fún Àgbẹ̀ máa ń pàdé:", options: ["Déédéé jálẹ̀ àkókò ìgbìn kan látìbẹ̀rẹ̀ dé òpin, pẹ̀lú olùdarí tí a ti kọ́", "Lẹ́ẹ̀kan, fún wákàtí kan", "Lórí ayélujára nìkan", "Nínú yàrá ìkàwé nìkan"], answer: 0, why: "Àwọn ẹgbẹ́ FFS ń kẹ́kọ̀ọ́ nínú oko jálẹ̀ àkókò ìgbìn." },
      { objective: "O4", q: "Olùkọ́ àgbẹ̀ gbọ́dọ̀ fúnni ní ìwọ̀n oògùn tàbí abẹ́rẹ́ àjẹsára:", options: ["Nígbà tí wọ́n bá béèrè", "Láéláé; rán àgbẹ̀ lọ sọ́dọ̀ dókítà ẹranko àti ìwé ara ọjà", "Fún adìẹ nìkan", "Tí àgbẹ̀ bá tẹnu mọ́ ọn"], answer: 1, why: "Ìwọ̀n oògùn ń wá láti ọ̀dọ̀ dókítà ẹranko àti ìwé ara ọjà." },
      { objective: "O4", q: "Adìẹ púpọ̀ kú lójijì lórí oko kan. O sọ fún àgbẹ̀ pé kí ó:", options: ["Ta àwọn tó kù ní ọjà", "Dúró kí ó wò ó", "Fi tó dókítà ẹranko tàbí àjọ ìjọba tí ń ṣàkóso ẹranko létí lójú ẹsẹ̀", "Sin wọ́n kí ó sì dákẹ́"], answer: 2, why: "Ó lè jẹ́ àrùn ibà ẹyẹ, àrùn tí a gbọ́dọ̀ fi tó ìjọba létí." },
      { objective: "O4", q: "Ní Nàìjíríà, ta ló ń forúkọ kẹ́míkà oko sílẹ̀?", options: ["Central Bank", "NiMet", "Ọlọ́pàá", "NAFDAC"], answer: 3, why: "NAFDAC ló ń forúkọ kẹ́míkà oko sílẹ̀ ní Nàìjíríà." },
      { objective: "O4", q: "Àgbẹ̀ kan béèrè nípa àdéhùn ẹ̀yáwó. O:", options: ["Sọ fún un pé kí ó fọwọ́ sí i kíákíá", "Rán an lọ sọ́dọ̀ olùdámọ̀ràn tí a fọkàn tán kí o sì gbà á nímọ̀ràn láti ka gbogbo rẹ̀", "Fọwọ́ sí i fún un", "Gbà á nímọ̀ràn láti yá owó púpọ̀ sí i"], answer: 1, why: "Owó àti àdéhùn kọjá iṣẹ́ olùkọ́ àgbẹ̀." },
      { objective: "O5", q: "FBA sábà máa ń jẹ èrè láti:", options: ["Owó ìpín lórí ohun èlò oko àti owó iṣẹ́", "Owó oṣù ìjọba nìkan", "Owó ìtanràn lára àwọn àgbẹ̀", "Títa ìsọfúnni àwọn àgbẹ̀"], answer: 0, why: "Àwọn FBA jẹ́ oníṣòwò tí owó ìpín àti owó iṣẹ́ ń sanwó fún." },
      { objective: "O5", q: "Kí ni ìforígbárí ànfààní (conflict of interest) fún FBA?", options: ["Títa irúgbìn ojúlówó", "Kíkọ ọjà tí a tà sílẹ̀", "Nígbà tí ọjà tí ó ń mú owó púpọ̀ jù wá fún ọ kì í ṣe èyí tó dára jù fún àgbẹ̀", "Ṣíṣe ìdánilẹ́kọ̀ọ́"], answer: 2, why: "Àwọn òfin ìwà rere wà láti yanjú ìforígbárí yìí." },
      { objective: "O5", q: "Èwo ni ìwà rere fún FBA?", options: ["Fi owó ìpín rẹ pamọ́", "Ta ọjà láwìn fún ẹni tí kò lè san án", "Ta ọjà tí kò ní ìwé ara", "Kọ iye owó rẹ sílẹ̀"], answer: 3, why: "Iye owó tí a kọ sílẹ̀ ń jẹ́ kí títà tọ́ kí ó sì yé." },
      { objective: "O6", q: "Ìwé orúkọ ìdánilẹ́kọ̀ọ́ gbọ́dọ̀ ní:", options: ["Ọjọ́, kókó ẹ̀kọ́, orúkọ, àti bóyá àgbẹ̀ kọ̀ọ̀kan lè ṣe ọgbọ́n náà", "PIN owó orí fóònù (mobile money) àwọn àgbẹ̀", "Orúkọ olùkọ́ nìkan", "Kò sí nǹkan; ìrántí tó"], answer: 0, why: "Èyí ń fi àwọn tí a kọ́ àti bí wọ́n ṣe kọ́ ọ dáadáa tó hàn." },
      { objective: "O6", q: "Kí ló dé tí a fi ń tẹ̀lé àwọn àgbẹ̀ lẹ́yìn ìdánilẹ́kọ̀ọ́?", options: ["Láti ta púpọ̀ sí i", "Láti mọ̀ bóyá wọ́n lo ọ̀nà náà àti ohun tí ó ṣẹlẹ̀", "Nítorí pé wọ́n jẹ ọ́ ní gbèsè", "Kò pọndandan"], answer: 1, why: "Àtẹ̀lé ń fi èsì hàn àti ibi tí a ti nílò láti ṣèrànwọ́ sí i." },
      { objective: "O6", q: "Tí o kò bá wọn èsì, o gbọ́dọ̀:", options: ["Ṣe iye tó dára lásán", "Lo iye ti ọdún tó kọjá", "Sọ pé a kò wọ̀n wọ́n", "Da ìròyìn míì kọ"], answer: 2, why: "Má ṣe ṣe èsì lásán láéláé." },
      { objective: "O6", q: "Kíkọ nọ́mbà fóònù àgbẹ̀ sílẹ̀ nílò:", options: ["Kò nílò nǹkan kan", "Owó sísan", "Ìfọwọ́sí olùrà", "Ìfọwọ́sí àgbẹ̀ náà"], answer: 3, why: "A ń kọ ìsọfúnni àdáni sílẹ̀ pẹ̀lú àṣẹ nìkan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 8, 9, 10, 13, 14, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ètò ẹ̀kọ́", objective: "O2", notYet: "Ọ̀rọ̀ sísọ láìsí ìdánrawò, tàbí ọgbọ́n púpọ̀ lẹ́ẹ̀kan náà.", meets: "Ọgbọ́n kan, fihàn-gbìyànjú-jíròrò pẹ̀lú àkókò àti ohun èlò, tí ó bá ìṣẹ́jú 60 sí 90 mu, pẹ̀lú àyẹ̀wò pé àgbẹ̀ kọ̀ọ̀kan lè ṣe é.", exceeds: "Ó tún ṣètò kí àwọn obìnrin àti ọ̀dọ́ lè wá, ó sì ní fídíò kúkúrú lórí fóònù tàbí SMS fún àtẹ̀lé." },
      { name: "Oko àfihàn", objective: "O3", notYet: "Kò sí àfiwé, tàbí àwọn oko yàtọ̀ ní ọ̀nà púpọ̀.", meets: "Oko méjì tí a kọ orúkọ sí, tí wọ́n tóbi bákan náà, tí wọ́n yàtọ̀ ní ọ̀nà iṣẹ́ kan, pẹ̀lú àkọsílẹ̀ àti ọjọ́ ọjọ́ oko.", exceeds: "Ó sọ bí a ṣe máa wọn ìkórè fún oko kọ̀ọ̀kan àti bí a ṣe máa pín èsì ní òtítọ́, kódà tí ọ̀nà tuntun kò bá borí." },
      { name: "Ìmọ̀ràn tó láàbò àti ìtọ́kasí", objective: "O4", notYet: "Ó fúnni ní ìwọ̀n oògùn tàbí dárúkọ ọjà tí a kò forúkọ rẹ̀ sílẹ̀; kò sí àkọsílẹ̀ ìtọ́kasí.", meets: "Àkọsílẹ̀ ìtọ́kasí pẹ̀lú àwọn tí a lè kàn sí, àti ohun tí olùkọ́ kò ní fúnni ní ìmọ̀ràn lé lórí, títí kan àwọn àrùn tí a gbọ́dọ̀ fi tó ìjọba létí.", exceeds: "Ó dárúkọ àjọ ìforúkọsílẹ̀ oògùn apakòkòrò ti orílẹ̀-èdè àti bí a ṣe ń ṣàyẹ̀wò àkọsílẹ̀ rẹ̀." },
      { name: "Èrè tó tọ́", objective: "O5", notYet: "Ìdánilẹ́kọ̀ọ́ so mọ́ rírà, tàbí owó ìpín wà ní ìkọ̀kọ̀.", meets: "Tí ó bá ń tà, iye owó tí a kọ sílẹ̀, owó ìpín tí a sọ ní gbangba, àti ìdánilẹ́kọ̀ọ́ tí ó wà fún gbogbo ènìyàn.", exceeds: "Ó ní èrè àpẹẹrẹ fún àkókò ìgbìn kan lẹ́yìn ìnáwó àti òfin kan fún sísọ pé \"o kò nílò láti rà\"." },
      { name: "Àkọsílẹ̀ àti ipa iṣẹ́", objective: "O6", notYet: "Kò sí ìwé orúkọ, tàbí a pín ìsọfúnni àdáni ní gbangba.", meets: "Ìwé orúkọ pẹ̀lú ìfọwọ́sí, ọjọ́ àtẹ̀lé àti ibi ìpamọ́ tó wà ní ìkọ̀kọ̀; a dárúkọ ẹni tí a lè kàn sí ní ọ́fíìsì extension àdúgbò.", exceeds: "Ó kọ èsì oko àfihàn àti iye àwọn àgbẹ̀ tí wọ́n gba ọ̀nà náà nígbà àtẹ̀lé sílẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ó kéré tán ọjọ́ ìdánilẹ́kọ̀ọ́ kan láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Iye àwọn àgbẹ̀ tí akẹ́kọ̀ọ́ kọ̀ọ̀kan kọ́, láti inú ìwé orúkọ ìdánilẹ́kọ̀ọ́",
      "Ìpín àwọn àgbẹ̀ tí a kọ́ tí wọ́n ń lo ọ̀nà náà nígbà àtẹ̀lé",
      "Èsì oko àfihàn tí a fi wé ọ̀nà tí a sábà ń gbà lẹ́yìn àkókò ìgbìn kan",
      "Àwọn akẹ́kọ̀ọ́ tí ń bá ọ́fíìsì extension àdúgbò wọn tàbí iṣẹ́ àkànṣe kan ṣiṣẹ́ gẹ́gẹ́ bí àgbẹ̀ aṣáájú tàbí FBA"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone fún fídíò kúkúrú, SMS àti WhatsApp",
      "Ìwé, gègé àti ìwé àkọsílẹ̀ fún ètò ẹ̀kọ́, ètò oko àfihàn àti ìwé orúkọ",
      "Ilẹ̀ kékeré fún oko àfihàn, igi èèkàn, okùn àti àmì",
      "Ìsọfúnni ìkànsí ọ́fíìsì extension àdúgbò, dókítà ẹranko àti àjọ ìforúkọsílẹ̀ oògùn apakòkòrò ti orílẹ̀-èdè",
      "Nǹkan bí ìṣẹ́jú 90 lápapọ̀, pẹ̀lú àkókò láti ṣe ọjọ́ ìdánilẹ́kọ̀ọ́ náà"
    ],
    facilitatorNotes: [
      "Kọ́ ẹ̀kọ́ yìí ní ọ̀nà tí ó ní kí àwọn akẹ́kọ̀ọ́ máa kọ́ni: fihàn, gbìyànjú, jíròrò, kí ẹ sì ṣe ètò ẹ̀kọ́ àti àwòrán oko àfihàn nínú ìpàdé.",
      "Mú ọ́fíìsì extension àdúgbò wọlé; pe òṣìṣẹ́ extension kan sí Ẹ̀kọ́ 1 tí ó bá ṣeé ṣe.",
      "Má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ fúnni ní ìwọ̀n oògùn ẹranko, abẹ́rẹ́ àjẹsára tàbí hormone tàbí àkókò ìdúró nínú eré àṣefihàn láéláé; ẹ dánrawò ìtọ́kasí dípò rẹ̀.",
      "Fún àwọn tí wọ́n fẹ́ di FBA, ẹ ṣe eré àṣefihàn ìjíròrò títà kan níbi tí ìdáhùn tó tọ́ jẹ́ \"o kò nílò láti rà\".",
      "Ṣàyẹ̀wò pé àwọn ìwé orúkọ àṣeṣe ń lo orúkọ àròsọ àyàfi tí àwọn àgbẹ̀ gidi bá ti fọwọ́ sí i.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
