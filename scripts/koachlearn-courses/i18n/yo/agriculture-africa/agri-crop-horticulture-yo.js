"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-crop-horticulture.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_IPM = { name: "FAO: Ìṣàkóso àjọpọ̀ fún kòkòrò àjẹnirun (IPM)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const FAO_FAMEWS = { name: "FAO: app fóònù láti bá kòkòrò fall armyworm jà ní Áfíríkà (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_PUSHPULL = { name: "icipe: ọ̀nà push-pull dá fall armyworm dúró", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Àjọ Àbójútó Oúnjẹ àti Oògùn (NAFDAC, Nàìjíríà)", url: "https://www.nafdac.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const FAO_CSA = { name: "FAO: Ìwé ìtọ́kasí fún iṣẹ́ àgbẹ̀ tó bá ojú ọjọ́ mu (ìṣàkóso ilẹ̀ àti omi)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-crop-horticulture-yo",
  lang: "yo",
  translationOf: "agri-crop-horticulture",
  category: "Agriculture (Africa)",
  name: "Ọ̀gbìn Irè Oko àti Ẹ̀fọ́ Tó Lè Pẹ́",
  skills: "Ṣíṣàyẹ̀wò àti mímú ìlera ilẹ̀ dára sí i, Gbígbin irúgbìn rere pẹ̀lú àlàfo àti àkókò tó tọ́, Bíbọ́ irè oko pẹ̀lú ìgbẹ́ ẹran, kọ́mpọ́ọ̀sì àti ajílẹ̀, Yíyẹ oko wò àti ìṣàkóso àjọpọ̀ fún kòkòrò (IPM), Lílo oògùn apakòkòrò láìléwu àti lọ́nà òfin, Bíbomirin ẹ̀fọ́ àti títọ́jú irè lẹ́yìn ìkórè",
  outcome: "ṣètò kí o sì ṣe àsìkò oko kan fún irè oko kan àti ọgbà ẹ̀fọ́ kan: pèsè ilẹ̀ kí o sì bọ́ ọ, gbìn dáadáa, yẹ oko wò kí o sì ṣàkóso kòkòrò pẹ̀lú IPM, bomirin láìfi omi ṣòfò, kí o sì kórè kí o tọ́jú irè kí ó má bàa pàdánù iye rẹ̀.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré, àwọn ọ̀dọ́ tí wọ́n ń bẹ̀rẹ̀ ọ̀gbìn ẹ̀fọ́ àti èso, àwọn ẹgbẹ́ obìnrin àti ọ̀dọ́, àti àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ ní Kẹ́ńyà, Nàìjíríà àti káàkiri Áfíríkà. Àwọn àpẹẹrẹ ni àgbàdo, ẹ̀wà, ẹ̀gẹ́ àti ọkà bàbà nínú oko, àti tòmátì, ẹ̀fọ́ kale (sukuma wiki) àti àlùbọ́sà nínú ọgbà ẹ̀fọ́.",
    "Orí 1 jẹ́ nípa gbígbin irè tó lágbára: mímọ ilẹ̀ rẹ àti ṣíṣe àyẹ̀wò rẹ̀, gbígbin irúgbìn rere ní àlàfo àti àkókò tó tọ́, àti bíbọ́ irè náà pẹ̀lú ìgbẹ́ ẹran, kọ́mpọ́ọ̀sì àti ajílẹ̀. Orí 2 jẹ́ nípa dídáàbò bo irè náà àti parí rẹ̀: yíyẹ oko wò àti IPM, lílo oògùn apakòkòrò láìléwu àti lọ́nà òfin, bíbomirin ẹ̀fọ́ láìfi omi ṣòfò, àti ìkórè àti ìtọ́jú lẹ́yìn ìkórè.",
    "Irè oko, ilẹ̀ àti kòkòrò yàtọ̀ láti agbègbè kan sí òmíràn. Lo ẹ̀kọ́ yìí pẹ̀lú òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ rẹ, ilé-iṣẹ́ ìwádìí (bí KALRO ní Kẹ́ńyà, tàbí ètò ìdàgbàsókè iṣẹ́ àgbẹ̀ ti ìpínlẹ̀ rẹ ní Nàìjíríà) àti ilé ìtajà ohun ọ̀gbìn (agrovet). Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò àsìkò oko kan fún irè oko kan (fún àpẹẹrẹ ìdajì éékà àgbàdo àti ẹ̀wà) àti ọgbà ẹ̀fọ́ kan (fún àpẹẹrẹ ìdá-mẹ́jọ éékà tòmátì tàbí kale): àyẹ̀wò ilẹ̀ àti àyẹ̀wò ilẹ̀ èyíkéyìí ní ilé-ìwádìí, bí o ṣe máa pèsè ilẹ̀ tí o sì máa bọ́ ọ, irúgbìn àti àlàfo, ọjọ́ ìgbìn, ètò yíyẹ oko wò lọ́sẹ̀ọ̀sẹ̀ pẹ̀lú àwọn kòkòrò àti àrùn pàtàkì tí o máa ṣọ́ àti àwọn ìgbésẹ̀ IPM rẹ, ètò bíbomirin fún ẹ̀fọ́, àti bí o ṣe máa kórè, ṣà, tọ́jú àti tà á.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré, àwọn ọ̀dọ́ tí wọ́n ń bẹ̀rẹ̀ ọ̀gbìn ẹ̀fọ́ àti èso, àwọn ẹgbẹ́ obìnrin àti ọ̀dọ́, àti àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ ní Kẹ́ńyà, Nàìjíríà àti káàkiri Áfíríkà, tí wọ́n ń gbin irè oko bí àgbàdo, ẹ̀wà, ẹ̀gẹ́ àti ọkà bàbà, àti ẹ̀fọ́ bí tòmátì, kale àti àlùbọ́sà.",
    startingPoint: "Ọ̀pọ̀ ti ń gbìn tí wọ́n sì ń kórè ní gbogbo àsìkò, nígbà púpọ̀ pẹ̀lú irúgbìn tí wọ́n fi pamọ́ tàbí tí a kò fọwọ́sí, ajílẹ̀ tí wọ́n fọ́n káàkiri àti oògùn apakòkòrò tí wọ́n rà ní ìdá-ìdá láìsí àpò rẹ̀. Díẹ̀ ló ti ṣe àyẹ̀wò ilẹ̀ rí, tí wọ́n yẹ oko wò ní ìlànà kan, tí wọ́n ka gbogbo àmì-ìtọ́sọ́nà oògùn, tàbí tí wọ́n ṣètò bíbomirin àti ìtọ́jú lẹ́yìn ìkórè.",
    gap: "Ilẹ̀ tí kò dára, gbígbìn tí ó há jù tàbí tí ó pẹ́ jù, ajílẹ̀ tí a kò fi sí ibi tó tọ́, fífín oògùn láìsí ìdí, àti àdánù lẹ́yìn ìkórè ń dín èso àti owó kù, lílo oògùn apakòkòrò láìfura sì ń pa ẹbí àti àwọn olùrà lára. Ètò àsìkò tí a kọ sílẹ̀, tí ó dá lórí ìlànà rere, ń ran àwọn àgbẹ̀ lọ́wọ́ láti kórè púpọ̀ sí i, ná owó díẹ̀ lórí ohun ọ̀gbìn, kí wọ́n sì ta irè tí kò pàdánù iye rẹ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ iṣẹ́ àgbẹ̀",
      "Ẹ̀rọ: fóònù lásán àti ìwé àkọsílẹ̀; ọ̀pọ̀ àṣeṣe ló ń wáyé nínú oko",
      "Àkókò: ẹ̀kọ́ kúkúrú tí ó bá iṣẹ́ oko àti àsìkò mu",
      "Ilẹ̀, oríṣi irúgbìn, ìwọ̀n àti àwọn ọjà tí a forúkọ sílẹ̀ yàtọ̀ láti agbègbè kan sí òmíràn: akẹ́kọ̀ọ́ ń gba ìwọ̀n àti ọjà láti inú àyẹ̀wò ilẹ̀, òṣìṣẹ́ ìmọ̀ràn tàbí àmì-ìtọ́sọ́nà",
      "Ààbò oògùn apakòkòrò: kò sí àṣeṣe fífín oògùn ní kíláàsì; akẹ́kọ̀ọ́ ń tẹ̀lé àmì-ìtọ́sọ́nà àti òfin orílẹ̀-èdè wọn"
    ],
    prerequisites: "Kò sí. \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\" lọ jinlẹ̀ sí i lórí ilẹ̀, \"Ìṣàkóso Àjọpọ̀ fún Kòkòrò àti Ìṣàkóso Kòkòrò Láìlo Kẹ́míkà\" sì lọ jinlẹ̀ sí i lórí kòkòrò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Lórí ọ̀kan nínú àwọn oko rẹ", action: "ṣàyẹ̀wò ìlera ilẹ̀ nínú oko kí o sì ṣàlàyé bí a ṣe ń mú àpẹẹrẹ ilẹ̀ tó dára fún àyẹ̀wò ilẹ̀", standard: "kí o sì dárúkọ ó kéré tán àmì mẹ́ta ilẹ̀ tó ní ìlera tàbí tí kò dára" },
    { id: "O2", condition: "Fún irè oko kan àti ẹ̀fọ́ kan", action: "yan irúgbìn tí a fọwọ́sí tàbí igi ìgbìn tó mọ́, àlàfo, àti ọjọ́ ìgbìn tàbí ọjọ́ ìṣípò", standard: "pẹ̀lú yíyàn kọ̀ọ̀kan tí ó wá láti ọ̀dọ̀ olùtajà, òṣìṣẹ́ ìmọ̀ràn tàbí àpò irúgbìn" },
    { id: "O3", condition: "Fún irè oko pàtàkì rẹ", action: "kọ ètò bíbọ́ irè tí ó da ohun ẹlẹ́ran-ara, irè ẹlẹ́wà àti ajílẹ̀ tí a fi sí ibi tó tọ́ pọ̀", standard: "pẹ̀lú àmì pé ìwọ̀n wá láti inú àyẹ̀wò ilẹ̀ tàbí òṣìṣẹ́ ìmọ̀ràn" },
    { id: "O4", condition: "Tí a bá fún ọ ní irè tí kòkòrò tàbí àrùn wà lára rẹ̀", action: "yẹ ẹ́ wò ní ìlànà ọ̀sẹ̀ọ̀sẹ̀, yan àwọn ìgbésẹ̀ IPM, kí o sì lo oògùn apakòkòrò tí a forúkọ sílẹ̀ nípa àmì-ìtọ́sọ́nà rẹ̀ nìkan nígbà tí ó bá yẹ", standard: "ní bíbẹ̀rẹ̀ pẹ̀lú ìdènà àti ọ̀nà tí kì í ṣe kẹ́míkà" },
    { id: "O5", condition: "Fún ọgbà ẹ̀fọ́ kékeré kan", action: "ṣètò bíbomirin láìfi omi ṣòfò pẹ̀lú drip tàbí kànnàkànnà omi, ìbòlẹ̀ àti àkókò tó tọ́ lójúmọ́", standard: "kí o sì ṣàyẹ̀wò ọ̀rinrin ilẹ̀ ṣáájú bíbomirin kọ̀ọ̀kan" },
    { id: "O6", condition: "Nígbà ìkórè", action: "ṣètò bí o ṣe máa kórè, ṣà, sá gbẹ, kí o sì tọ́jú irè láti dín àdánù kù", standard: "pẹ̀lú ìpọ́n tó tọ́, ìtọ́jú jẹ́jẹ́ àti ìpamọ́ tó láàbò fún irè kọ̀ọ̀kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Gbígbin irè tó lágbára",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mọ ilẹ̀ rẹ",
          minutes: 5,
          goal: "Ṣàyẹ̀wò ìlera ilẹ̀ rẹ nínú oko, kí o sì mọ ìgbà àti bí o ṣe lè ṣe àyẹ̀wò ilẹ̀.",
          text: [
            "Ilẹ̀ tó ní ìlera dú, ó ń rún, ó ní òórùn ilẹ̀, ó ní ekòló àti gbòǹgbò tó wọlẹ̀ jìn, ó sì ń mu omi òjò dípò kí ó jẹ́ kí ó ṣàn lọ. Ilẹ̀ tí kò dára le, ó funfun, ó ń dì bí awọ lẹ́yìn òjò, tàbí kí omi dúró lórí rẹ̀. Ṣe àyẹ̀wò rírọrùn nínú oko: gbẹ́ ihò tó jìn tó ẹnu ọkọ́ kan, wo àwọ̀ àti ìpele ilẹ̀, fún ìkúnwọ́ kan pọ̀, ka àwọn ekòló, kí o sì wo ibi tí omi ń ṣàn tàbí dúró sí lẹ́yìn òjò.",
            "Àyẹ̀wò ilẹ̀ ní ilé-ìwádìí ń sọ ohun tí ojú rẹ kò lè rí: bí ilẹ̀ ṣe kan tó (pH) àti àwọn oúnjẹ ọ̀gbìn pàtàkì. Ọ̀pọ̀ ilẹ̀ ní àwọn agbègbè tí òjò ti ń rọ̀ púpọ̀ ní Kẹ́ńyà àti Nàìjíríà ni ó kan, èyí sì ń ti oúnjẹ ọ̀gbìn mọ́lẹ̀; wọ́n lè gbà ọ́ nímọ̀ràn láti fi ẹfun (lime) sí i. Béèrè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn àgbẹ̀, ilé-iṣẹ́ ìwádìí tàbí agrovet ibi tí o ti lè ṣe àyẹ̀wò ilẹ̀ àti bí o ṣe lè mú àpẹẹrẹ tó dára: ọ̀pọ̀ àpẹẹrẹ kékeré láti gbogbo oko, tí a dà pọ̀, kì í ṣe láti ibi òkìtì ìgbẹ́ ẹran tàbí ibi tí a ti dáná sun.",
            "Mú ìlera ilẹ̀ dára sí i ní gbogbo àsìkò: fi ohun ẹlẹ́ran-ara kún un (ìgbẹ́ ẹran, kọ́mpọ́ọ̀sì, ìyókù irè oko), jẹ́ kí ilẹ̀ máa wà ní bíbò, yí irè padà láti ọdún dé ọdún, má sì ṣe dáná sun oko tàbí kọ ilẹ̀ láìnídìí."
          ],
          steps: ["Gbẹ́ ihò tó jìn tó ẹnu ọkọ́ kí o sì wo àwọ̀, ìpele àti gbòǹgbò.", "Fún ìkúnwọ́ ilẹ̀ kan pọ̀; ka àwọn ekòló.", "Wo ibi tí omi ń ṣàn lọ tàbí dúró sí.", "Béèrè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn tàbí agrovet ibi tí o ti lè ṣe àyẹ̀wò ilẹ̀.", "Mú ọ̀pọ̀ àpẹẹrẹ kékeré láti gbogbo oko kí o sì dà wọ́n pọ̀."],
          words: [["Ìlera ilẹ̀", "agbára ilẹ̀ láti gbé ọ̀gbìn tó lágbára dàgbà, láti di omi mú àti láti gbé ẹ̀mí ró."], ["pH", "ìwọ̀n tí ó fi hàn bí ilẹ̀ ṣe kan tàbí bí ó ṣe ní ẹfun tó; ọ̀pọ̀ irè fẹ́ ilẹ̀ tó kan díẹ̀ tàbí tó wà láàárín."], ["Ohun ẹlẹ́ran-ara (organic matter)", "ohun ọ̀gbìn àti ẹranko tó ti jẹrà nínú ilẹ̀, bí ìgbẹ́ ẹran àti kọ́mpọ́ọ̀sì."], ["Fífi ẹfun sí ilẹ̀ (liming)", "fífi ẹfun (lime) sí ilẹ̀ láti dín bí ó ṣe kan kù."]],
          slides: [
            { title: "Ilẹ̀ tó ní ìlera", bullets: ["Ó dú, ó ń rún, ó ní òórùn ilẹ̀", "Ekòló, gbòǹgbò tó wọlẹ̀ jìn", "Ó ń mu omi òjò"] },
            { title: "Àyẹ̀wò nínú oko", bullets: ["Ihò tó jìn tó ẹnu ọkọ́: àwọ̀, ìpele, gbòǹgbò", "Fún ilẹ̀ pọ̀, ka ekòló", "Ibi tí omi ń ṣàn tàbí dúró sí"] },
            { title: "Àyẹ̀wò ilẹ̀", bullets: ["Ó ń fi pH àti oúnjẹ ọ̀gbìn hàn", "Ilẹ̀ tó kan lè nílò ẹfun", "Ọ̀pọ̀ àpẹẹrẹ kékeré, tí a dà pọ̀"] },
            { title: "Mú un dára ní gbogbo àsìkò", bullets: ["Ìgbẹ́ ẹran, kọ́mpọ́ọ̀sì, ìyókù irè", "Bò ó mọ́lẹ̀, yí irè padà", "Má dáná sun oko"] }
          ],
          sources: [KALRO, FAO_CSA],
          tryIt: "Ṣe àyẹ̀wò nínú oko kan: gbẹ́ ilẹ̀, wò ó, fún un pọ̀, ka ekòló, kí o sì kọ ohun tí o rí sílẹ̀. Lẹ́yìn náà, wá ibi tí o ti lè ṣe àyẹ̀wò ilẹ̀ nítòsí rẹ àti iye tí ó máa ná ọ.",
          youCanNow: "ṣàyẹ̀wò ìlera ilẹ̀ rẹ nínú oko, o sì mọ bí a ṣe ń mú àpẹẹrẹ fún àyẹ̀wò ilẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Lẹ́yìn òjò, omi dúró lórí oko rẹ fún ọjọ́ púpọ̀, ilẹ̀ náà sì funfun ó sì le. Kí ni èyí fi hàn?", options: ["Ilẹ̀ tó ní ìlera gan-an", "Ilẹ̀ tó nílò ìtọ́jú, bí ohun ẹlẹ́ran-ara púpọ̀ sí i", "Ilẹ̀ tí kò nílò ìyípadà kankan", "Ilẹ̀ tí ekòló ti pọ̀ jù nínú rẹ̀"], answer: 1, why: "Ilẹ̀ tó ní ìlera dú, ó ń rún, ó sì ń mu omi òjò; omi tó dúró àti ilẹ̀ tó le tó funfun jẹ́ àmì ilẹ̀ tí kò dára." },
            { objective: "O1", q: "O fẹ́ mú àpẹẹrẹ ilẹ̀. Ibo ni o máa gbẹ́?", options: ["Lẹ́gbẹ̀ẹ́ òkìtì ìgbẹ́ ẹran nìkan", "Ibi tí o ti dáná sun ìyókù irè nìkan", "Ibì kan ṣoṣo ní àárín oko", "Ọ̀pọ̀ ibi kékeré káàkiri oko, tí a dà pọ̀"], answer: 3, why: "Ọ̀pọ̀ àpẹẹrẹ kékeré tí a dà pọ̀ ń fi gbogbo oko hàn; òkìtì ìgbẹ́ ẹran àti ibi tí a ti dáná sun ń fúnni ní èsì tí kò tọ́." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gbígbìn dáadáa: irúgbìn, àlàfo àti àkókò",
          minutes: 5,
          goal: "Gbin irè oko kí o sì gbé irúgbìn ẹ̀fọ́ dàgbà pẹ̀lú irúgbìn rere, àlàfo àti àkókò tó tọ́.",
          text: [
            "Irúgbìn rere ni ọ̀nà tó rọ̀jù láti mú èso pọ̀ sí i. Ra irúgbìn tí a fọwọ́sí (certified), ti oríṣi tó bá agbègbè rẹ mu, láti ọ̀dọ̀ olùtajà tí a forúkọ rẹ̀ sílẹ̀, kí o sì ṣàyẹ̀wò ọjọ́ orí àpò àti èdìdí rẹ̀. Fún ẹ̀gẹ́, lo igi ẹ̀gẹ́ tó mọ́ láti ara ọ̀gbìn tó ní ìlera, nítorí àrùn kòkòrò àìfojúrí (virus) ń tàn kálẹ̀ nípasẹ̀ igi tí ó ní àrùn.",
            "Àlàfo ló ń pinnu iye ọ̀gbìn tí ó máa pín ìmọ́lẹ̀ oòrùn, omi àti oúnjẹ ọ̀gbìn. Lo àlàfo tí a gbà nímọ̀ràn fún oríṣi irúgbìn àti agbègbè rẹ, fún àpẹẹrẹ àlàfo láàárín ìlà àti láàárín ọ̀gbìn fún àgbàdo, àti àlàfo tó gbòòrò jù ní agbègbè gbígbẹ. Àyè òfìfo àti híhá jù ń dín èso kù méjèèjì. Gbìn kíákíá nígbà tí òjò bá ti bẹ̀rẹ̀ dáadáa, tí ilẹ̀ sì ti rin títí dé ìsàlẹ̀.",
            "Ẹ̀fọ́ bí tòmátì, kale àti àlùbọ́sà ni a sábà máa ń kọ́kọ́ gbé dàgbà nínú ibi ìtọ́jú irúgbìn (nursery): ebè gíga tí omi kì í dúró sí, tàbí àwo irúgbìn, pẹ̀lú ilẹ̀ tó mọ́, ìbòji ní ìbẹ̀rẹ̀, bíbomirin pẹ̀lú ìṣọ́ra àti ààbò lọ́wọ́ kòkòrò. Mú àwọn ọmọ ọ̀gbìn le nípa fífún wọn ní oòrùn púpọ̀ sí i àti omi díẹ̀ sí i díẹ̀díẹ̀ kí o tó ṣí wọn lọ sí oko, ó dára jù ní ìrọ̀lẹ́ tí ojú ọjọ́ tutù."
          ],
          steps: ["Ra irúgbìn tí a fọwọ́sí (tàbí igi ẹ̀gẹ́ tó mọ́) ti oríṣi tó bá agbègbè rẹ mu.", "Lo àlàfo tí a gbà nímọ̀ràn fún oríṣi àti agbègbè rẹ.", "Gbìn nígbà tí òjò bá ti bẹ̀rẹ̀ dáadáa tí ilẹ̀ sì rin.", "Gbé irúgbìn ẹ̀fọ́ dàgbà nínú nursery tó mọ́ tí omi kì í dúró sí.", "Mú àwọn ọmọ ọ̀gbìn le, lẹ́yìn náà ṣí wọn lọ ní ìrọ̀lẹ́ tí ó tutù."],
          words: [["Irúgbìn tí a fọwọ́sí (certified seed)", "irúgbìn tí àjọ ìjọba tó ń bójú tó irúgbìn ti ṣàyẹ̀wò fún dídára àti oríṣi rẹ̀."], ["Àlàfo", "jíjìn láàárín ìlà àti láàárín ọ̀gbìn kan sí èkejì."], ["Nursery (ibi ìtọ́jú irúgbìn)", "ibi kékeré tí a dáàbò bò níbi tí a ti ń gbé ọmọ ọ̀gbìn dàgbà kí a tó ṣí wọn lọ sí oko."], ["Mímú le (hardening)", "mímú àwọn ọmọ ọ̀gbìn mọ́ ipò oko díẹ̀díẹ̀ kí a tó ṣí wọn lọ."]],
          slides: [
            { title: "Irúgbìn rere", bullets: ["Èyí tí a fọwọ́sí, tó bá agbègbè rẹ mu", "Olùtajà tí a forúkọ sílẹ̀; ṣàyẹ̀wò ọjọ́ àti èdìdí", "Ẹ̀gẹ́: igi tó mọ́ láti ara ọ̀gbìn tó ní ìlera"] },
            { title: "Àlàfo àti àkókò", bullets: ["Àlàfo tí a gbà nímọ̀ràn fún oríṣi rẹ", "Àyè òfìfo àti híhá jù ń dín èso kù", "Gbìn nígbà tí òjò bá ti bẹ̀rẹ̀ dáadáa"] },
            { title: "Nursery ẹ̀fọ́", bullets: ["Ebè gíga, omi kì í dúró, ilẹ̀ tó mọ́", "Ìbòji ní ìbẹ̀rẹ̀, bíbomirin pẹ̀lú ìṣọ́ra", "Mú wọn le, lẹ́yìn náà ṣí wọn lọ ní ìrọ̀lẹ́"] }
          ],
          sources: [KALRO],
          tryIt: "Fún irè oko pàtàkì rẹ àti ẹ̀fọ́ kan, kọ: oríṣi irúgbìn, ibi tí o máa ti ra irúgbìn tí a fọwọ́sí, àlàfo tí a gbà nímọ̀ràn (béèrè lọ́wọ́ agrovet tàbí òṣìṣẹ́ ìmọ̀ràn), àti ọjọ́ tí o fẹ́ gbìn tàbí ṣí ọ̀gbìn lọ.",
          youCanNow: "gbin irè oko kí o sì gbé irúgbìn ẹ̀fọ́ dàgbà pẹ̀lú irúgbìn rere, àlàfo àti àkókò tó tọ́.",
          quickCheck: [
            { objective: "O2", q: "Kí ló dé tí a fi gbọ́dọ̀ gbin ẹ̀gẹ́ láti ara igi tó mọ́ ti ọ̀gbìn tó ní ìlera?", options: ["Àrùn virus ń tàn kálẹ̀ nípasẹ̀ igi tí ó ní àrùn", "Igi tó mọ́ ń dàgbà láìsí omi", "Ọ̀gbìn tó ní ìlera kò nílò àlàfo", "Igi láti ara ọ̀gbìn aláìsàn wọ́n jù"], answer: 0, why: "Àrùn virus ẹ̀gẹ́ ń tàn kálẹ̀ nípasẹ̀ igi tí ó ní àrùn, nítorí náà igi tó mọ́ láti ara ọ̀gbìn tó ní ìlera ń dáàbò bo irè tuntun." },
            { objective: "O2", q: "Àwọn ọmọ tòmátì rẹ ti ṣetán nínú nursery. Kí ni o máa ṣe kí o tó ṣí wọn lọ?", options: ["Bomirin wọn ní ìlọ́po méjì", "Gbé wọn lọ sí oòrùn gangan ní ọ̀sán gangan", "Mú wọn le pẹ̀lú oòrùn púpọ̀ sí i àti omi díẹ̀ sí i, lẹ́yìn náà ṣí wọn lọ ní ìrọ̀lẹ́ tí ó tutù", "Gé gbogbo ewé wọn kúrò"], answer: 2, why: "Mímú le ń pèsè àwọn ọmọ ọ̀gbìn sílẹ̀ fún oko, ìrọ̀lẹ́ tí ó tutù sì ń dín ìpayà ìṣípò kù." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bíbọ́ irè: ìgbẹ́ ẹran, kọ́mpọ́ọ̀sì àti ajílẹ̀",
          minutes: 6,
          goal: "Ṣètò bí o ṣe máa bọ́ irè pẹ̀lú oúnjẹ ọ̀gbìn ẹlẹ́ran-ara àti ti kẹ́míkà, tí a fi sí ibi àti àkókò tó tọ́.",
          text: [
            "Irè oko nílò nitrogen (N), phosphorus (P) àti potassium (K), pẹ̀lú àwọn oúnjẹ ọ̀gbìn míì ní ìwọ̀n kékeré. Ìgbẹ́ ẹran àti kọ́mpọ́ọ̀sì ń fi oúnjẹ ọ̀gbìn díẹ̀ kún un, àti ohun tó ṣe pàtàkì bákan náà: ohun ẹlẹ́ran-ara tí ó ń di omi mú tí ó sì ń bọ́ àwọn ẹ̀dá alààyè inú ilẹ̀. Irè ẹlẹ́wà bí ẹ̀wà, èrèé (cowpea) àti ẹ̀pà ń fi nitrogen kún ilẹ̀ nípasẹ̀ gbòǹgbò wọn.",
            "Ajílẹ̀ kẹ́míkà ń fúnni ní oúnjẹ ọ̀gbìn kíákíá àti ní ìwọ̀n tí a mọ̀. Ìlànà tí ó wọ́pọ̀ fún àgbàdo ni ajílẹ̀ ìgbìn tí ó ní phosphorus, lẹ́yìn náà ajílẹ̀ nitrogen tí a fi kún un (topdressing) nígbà tí àgbàdo bá ga dé orúnkún, ṣùgbọ́n àwọn ọjà àti ìwọ̀n tó tọ́ dá lórí àyẹ̀wò ilẹ̀ rẹ àti ìmọ̀ràn agbègbè rẹ. Fífi ìwọ̀n kékeré sí ẹ̀gbẹ́ ọ̀gbìn (nínú ihò ìgbìn) ń lo ajílẹ̀ dáadáa ju fífọ́n án káàkiri lọ.",
            "Da méjèèjì pọ̀: ohun ẹlẹ́ran-ara pẹ̀lú ajílẹ̀ tí a fi sí ibi tó tọ́ sábà máa ń fúnni ní èso tó dára jù tí ó sì dúró ṣinṣin ju ọ̀kan nínú wọn nìkan lọ. Ṣe kọ́mpọ́ọ̀sì láti inú ìyókù irè, ìgbẹ́ ẹran àti ìdọ̀tí ilé ìdáná, tí a ń yí padà tí a sì ń jẹ́ kí ó rin. Má ṣe fi ìgbẹ́ ẹran tuntun tí ó gbóná tàbí ajílẹ̀ sí orí irúgbìn tààrà láéláé."
          ],
          steps: ["Fi ìgbẹ́ ẹran tàbí kọ́mpọ́ọ̀sì sí i ṣáájú ìgbìn tàbí nígbà ìgbìn.", "Fi irè ẹlẹ́wà sínú ìyípo irè tàbí gbìn ín pọ̀ mọ́ irè míì.", "Lo ọjà ajílẹ̀ àti ìwọ̀n láti inú àyẹ̀wò ilẹ̀ rẹ àti ìmọ̀ràn agbègbè rẹ.", "Fi ajílẹ̀ sí ẹ̀gbẹ́ ọ̀gbìn, kí ó má kan irúgbìn.", "Fi nitrogen kún un (topdressing) ní ìpele tó tọ́, nígbà tí ilẹ̀ bá rin."],
          words: [["N, P, K", "nitrogen, phosphorus àti potassium: àwọn oúnjẹ ọ̀gbìn pàtàkì."], ["Topdressing", "fífi ajílẹ̀, nígbà púpọ̀ nitrogen, kún irè tí ó ń dàgbà lọ́wọ́."], ["Kọ́mpọ́ọ̀sì (compost)", "ìdọ̀tí ọ̀gbìn àti ẹranko tó ti jẹrà tí a fi ń bọ́ ilẹ̀."]],
          slides: [
            { title: "Ohun tí irè nílò", bullets: ["Nitrogen, phosphorus, potassium", "Pẹ̀lú àwọn oúnjẹ ọ̀gbìn kékeré míì", "Irè ẹlẹ́wà ń fi nitrogen kún ilẹ̀"] },
            { title: "Ohun ẹlẹ́ran-ara", bullets: ["Ìgbẹ́ ẹran àti kọ́mpọ́ọ̀sì", "Ó ń di omi mú, ó ń bọ́ ẹ̀dá inú ilẹ̀"] },
            { title: "Lílo ajílẹ̀ dáadáa", bullets: ["Ọjà àti ìwọ̀n láti inú àyẹ̀wò ilẹ̀ àti ìmọ̀ràn agbègbè", "Fi sí ẹ̀gbẹ́ ọ̀gbìn, kì í ṣe sórí irúgbìn", "Fi nitrogen kún un ní ìpele tó tọ́"] },
            { title: "Da méjèèjì pọ̀", bullets: ["Ẹlẹ́ran-ara + kẹ́míkà = èso tó dúró ṣinṣin", "Ṣe kọ́mpọ́ọ̀sì láti ìyókù irè àti ìgbẹ́ ẹran"] }
          ],
          sources: [FAO_CSA, KALRO],
          tryIt: "Kọ ètò bíbọ́ irè fún irè oko rẹ: ohun ẹlẹ́ran-ara tí o máa fi sí i àti ìgbà wo, irè ẹlẹ́wà èyíkéyìí, àti àwọn ọjà ajílẹ̀ àti àkókò wọn (kọ \"ìwọ̀n láti inú àyẹ̀wò ilẹ̀ tàbí òṣìṣẹ́ ìmọ̀ràn\" tí o kò bá tíì mọ̀ ọ́n). Bẹ̀rẹ̀ òkìtì kọ́mpọ́ọ̀sì tí o kò bá ní ọ̀kan.",
          youCanNow: "ṣètò bí o ṣe máa bọ́ irè pẹ̀lú ìgbẹ́ ẹran, kọ́mpọ́ọ̀sì àti ajílẹ̀ tí a fi sí ibi tó tọ́.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìgbẹ́ ẹran àti kọ́mpọ́ọ̀sì ń fi kún ilẹ̀ yàtọ̀ sí oúnjẹ ọ̀gbìn?", options: ["Oògùn apakòkòrò", "Ohun ẹlẹ́ran-ara tí ó ń di omi mú tí ó sì ń bọ́ ẹ̀dá inú ilẹ̀", "Irúgbìn tí a fọwọ́sí", "Ẹfun"], answer: 1, why: "Ohun ẹlẹ́ran-ara ń di omi mú, ó sì ń bọ́ ẹ̀dá inú ilẹ̀, èyí sì ṣe pàtàkì bí oúnjẹ ọ̀gbìn." },
            { objective: "O3", q: "O ní ajílẹ̀ fún gbígbin àgbàdo. Ibo ni o máa fi sí?", options: ["Ìwọ̀n kékeré ní ẹ̀gbẹ́ ọ̀gbìn, kí ó má kan irúgbìn", "Fífọ́n káàkiri gbogbo oko", "Sórí irúgbìn tààrà", "Ní òkìtì kan ní etí oko"], answer: 0, why: "Fífi ìwọ̀n kékeré sí ẹ̀gbẹ́ ọ̀gbìn ń lo ajílẹ̀ dáadáa, ajílẹ̀ lórí irúgbìn sì lè bà á jẹ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Gbígbin irè tó lágbára",
        questions: [
          { objective: "O1", q: "Èwo ni àmì ilẹ̀ tó ní ìlera?", options: ["Ó le, ó funfun, ó ń dì bí awọ lẹ́yìn òjò", "Ó dú, ó ń rún, ó ní ekòló", "Omi máa ń ṣàn lọ nígbà gbogbo", "Ó ń rùn bí kẹ́míkà"], answer: 1, why: "Ilẹ̀ tó ní ìlera ń rún, ó dú, ẹ̀mí sì kún inú rẹ̀." },
          { objective: "O1", q: "Báwo ni o ṣe gbọ́dọ̀ mú àpẹẹrẹ ilẹ̀?", options: ["Ṣíbí kan láti òkìtì ìgbẹ́ ẹran", "Láti ibi tí a ti dáná sun", "Ọ̀pọ̀ àpẹẹrẹ kékeré káàkiri oko, tí a dà pọ̀", "Láti ojú ọ̀nà"], answer: 2, why: "Àpẹẹrẹ tí a dà pọ̀ ń dúró fún gbogbo oko." },
          { objective: "O2", q: "Kí ló dé tí a fi ń lo igi ẹ̀gẹ́ tó mọ́?", options: ["Àrùn virus ń tàn kálẹ̀ nípasẹ̀ igi tí ó ní àrùn", "Wọ́n rọ̀jù", "Wọ́n ń dàgbà kíákíá nínú ilẹ̀ èyíkéyìí", "Àwọn olùrà ń béèrè fún wọn"], answer: 0, why: "Ohun ìgbìn tó mọ́ ń dá àrùn dúró láti tàn kálẹ̀." },
          { objective: "O2", q: "Kí ni mímú ọmọ ọ̀gbìn le (hardening)?", options: ["Bíbomirin púpọ̀ sí i", "Fífi ajílẹ̀ sí i", "Gbígbìn sínú ilẹ̀ líle", "Fífún wọn ní oòrùn púpọ̀ sí i àti omi díẹ̀ sí i díẹ̀díẹ̀ kí a tó ṣí wọn lọ"], answer: 3, why: "Ó ń pèsè àwọn ọmọ ọ̀gbìn sílẹ̀ fún ipò oko." },
          { objective: "O3", q: "Níbo ni ìwọ̀n ajílẹ̀ tó tọ́ ti ń wá?", options: ["Àfojúdá aládùúgbò", "Àyẹ̀wò ilẹ̀ rẹ àti ìmọ̀ràn agbègbè rẹ", "Àwọ̀ àpò rẹ̀", "Lílo bí ó ti pọ̀ tó"], answer: 1, why: "Ilẹ̀ àti agbègbè ló ń pinnu ohun tí irè nílò." }
        ]
      }
    },
    {
      name: "Orí 2: Dídáàbò bo irè àti parí rẹ̀",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yíyẹ oko wò àti ìṣàkóso àjọpọ̀ fún kòkòrò (IPM)",
          minutes: 6,
          goal: "Yẹ irè wò lọ́sẹ̀ọ̀sẹ̀ kí o sì yan àwọn ìgbésẹ̀ IPM kí o tó lo kẹ́míkà.",
          text: [
            "FAO ṣàlàyé ìṣàkóso àjọpọ̀ fún kòkòrò (IPM) gẹ́gẹ́ bí ríronú nípa gbogbo ọ̀nà ìṣàkóso kòkòrò tó wà àti dída àwọn tó tọ́ pọ̀, kí a máa lo oògùn apakòkòrò kìkì níbi tí ó bá yẹ. Ó bẹ̀rẹ̀ pẹ̀lú ìdènà: ilẹ̀ tó ní ìlera, oríṣi irúgbìn tí kòkòrò kò lè borí, irúgbìn tó mọ́, yíyí irè padà, gbígbìn lásìkò, ìmọ́tótó oko (yíyọ ọ̀gbìn àti ìyókù irè tí ó ní àrùn kúrò), àti fífún àwọn ọ̀tá àdánidá kòkòrò ní àyè, bí ladybird àti agbọ́n kékeré tí ó ń gbé ẹyin sínú kòkòrò.",
            "Yẹ oko wò ní gbogbo ọ̀sẹ̀. Rìn kọjá nínú oko ní ìrísí lẹ́tà W tàbí ní wọ́ọ́rọ́wọ́, ṣàyẹ̀wò iye ọ̀gbìn kan pàtó (fún àpẹẹrẹ ọ̀gbìn 10 ní ibi 5), kí o sì kọ ohun tí o rí sílẹ̀: ìbàjẹ́ fall armyworm nínú ọ̀fun àgbàdo, aphids, whiteflies, àbààwọ́n lórí ewé, rírọ, kòkòrò leaf miner tòmátì. Fi wé ìpele tí òṣìṣẹ́ ìmọ̀ràn sọ pé ó yẹ láti gbé ìgbésẹ̀.",
            "Kọ́kọ́ lo àwọn ọ̀nà tí kì í ṣe kẹ́míkà níbi tí wọ́n bá ti ṣiṣẹ́: fífi ọwọ́ ṣa kòkòrò, push-pull fún àgbàdo àti ọkà bàbà, ìdẹkùn, àwọn ọjà neem tàbí ọjà alààyè (biological) tí a fọwọ́sí, àti yíyọ ọ̀gbìn tí ó ní àrùn kúrò. A lè kọ àkọsílẹ̀ rírí fall armyworm sínú app FAMEWS ti FAO níbi tí wọ́n bá ti ń lò ó. Gba àyẹ̀wò láti ọ̀dọ̀ òṣìṣẹ́ ìmọ̀ràn tàbí ilé ìwòsàn ọ̀gbìn (plant clinic) nígbà tí o kò bá dá ọ lójú."
          ],
          steps: ["Dènà: oríṣi irúgbìn tí kòkòrò kò lè borí, irúgbìn tó mọ́, yíyí irè padà, ìmọ́tótó oko.", "Yẹ oko wò lọ́sẹ̀ọ̀sẹ̀ ní ìrísí W; ṣàyẹ̀wò iye ọ̀gbìn kan pàtó.", "Kọ kòkòrò, àrùn àti ìbàjẹ́ sílẹ̀.", "Fi wé ìpele ìgbésẹ̀ ti òṣìṣẹ́ ìmọ̀ràn.", "Kọ́kọ́ lo ọ̀nà tí kì í ṣe kẹ́míkà; gba àyẹ̀wò nígbà tí o kò bá dá ọ lójú."],
          words: [["IPM", "ìṣàkóso àjọpọ̀ fún kòkòrò: dída ìdènà, ìṣọ́ àti ọ̀pọ̀ ọ̀nà ìṣàkóso pọ̀, pẹ̀lú oògùn apakòkòrò kìkì nígbà tí ó bá yẹ."], ["Yíyẹ oko wò (scouting)", "rírìn kọjá nínú oko déédéé láti wá kòkòrò àti àrùn."], ["Ọ̀tá àdánidá", "kòkòrò àti àwọn ẹ̀dá míì tí ó ń jẹ kòkòrò àjẹnirun tàbí kọlù wọ́n."], ["Ìpele ìgbésẹ̀ (action level)", "iye kòkòrò tàbí ìbàjẹ́ tí ìṣàkóso fi tọ́ sí owó tí a máa ná."]],
          slides: [
            { title: "IPM (FAO)", bullets: ["Ronú nípa gbogbo ọ̀nà, da àwọn tó tọ́ pọ̀", "Oògùn apakòkòrò kìkì nígbà tí ó bá yẹ"] },
            { title: "Kọ́kọ́ dènà", bullets: ["Oríṣi tí kòkòrò kò lè borí, irúgbìn tó mọ́, yíyí irè padà", "Ìmọ́tótó oko", "Fún ọ̀tá àdánidá ní àyè"] },
            { title: "Yẹ oko wò lọ́sẹ̀ọ̀sẹ̀", bullets: ["Ìrísí W, iye ọ̀gbìn kan pàtó", "Kọ ohun tí o rí sílẹ̀", "Fi wé ìpele ìgbésẹ̀"] },
            { title: "Ṣàkóso pẹ̀lú ọgbọ́n", bullets: ["Fífi ọwọ́ ṣa, push-pull, ìdẹkùn", "Ọjà alààyè tí a fọwọ́sí", "Gba àyẹ̀wò nígbà tí o kò dá ọ lójú"] }
          ],
          sources: [FAO_IPM, ICIPE_PUSHPULL, FAO_FAMEWS],
          tryIt: "Ṣe ìwé yíyẹ oko wò ọ̀sẹ̀ọ̀sẹ̀ (ọjọ́, ibi, ọ̀gbìn tí a yẹ̀ wò, kòkòrò, àrùn, ìbàjẹ́, ìgbésẹ̀), kí o sì yẹ oko kan tàbí ebè ẹ̀fọ́ kan wò ní ọ̀sẹ̀ yìí.",
          youCanNow: "yẹ irè wò lọ́sẹ̀ọ̀sẹ̀ kí o sì yan àwọn ìgbésẹ̀ IPM, ní bíbẹ̀rẹ̀ pẹ̀lú ìdènà àti ọ̀nà tí kì í ṣe kẹ́míkà.",
          quickCheck: [
            { objective: "O4", q: "Èwo ni ìgbésẹ̀ ìdènà nínú IPM?", options: ["Fífín oògùn ní gbogbo ọ̀sẹ̀ bóyá", "Rírà oògùn apakòkòrò tó lágbára jù", "Dída oògùn apakòkòrò méjì pọ̀", "Lílo oríṣi tí kòkòrò kò lè borí àti yíyọ ọ̀gbìn tí ó ní àrùn kúrò"], answer: 3, why: "IPM bẹ̀rẹ̀ pẹ̀lú ìdènà: oríṣi tí kòkòrò kò lè borí, irúgbìn tó mọ́, yíyí irè padà àti ìmọ́tótó oko." },
            { objective: "O4", q: "O rí fall armyworm díẹ̀ nínú àgbàdo rẹ. Kí ni o máa kọ́kọ́ ṣe?", options: ["Fín oògùn sí gbogbo oko lónìí", "Kọ ọ́ sílẹ̀ kí o sì fi wé ìpele ìgbésẹ̀ láti ọ̀dọ̀ òṣìṣẹ́ ìmọ̀ràn", "Fi í sílẹ̀ títí di ìkórè", "Dáná sun oko náà"], answer: 1, why: "A ń fi àkọsílẹ̀ yíyẹ oko wò wé ìpele ìgbésẹ̀ láti pinnu bóyá ìṣàkóso tọ́ sí owó rẹ̀." }
          ]
        },
        {
          objectives: ["O4","O5"],
          title: "Lílo oògùn apakòkòrò láìléwu àti lọ́nà òfin, àti bíbomirin ẹ̀fọ́",
          minutes: 6,
          goal: "Lo oògùn apakòkòrò láìléwu nígbà tí ó bá yẹ, kí o sì ṣètò bíbomirin ọgbà ẹ̀fọ́ láìfi omi ṣòfò.",
          text: [
            "Tí oògùn apakòkòrò bá pọndandan, lo kìkì àwọn ọjà tí a forúkọ sílẹ̀ fún irè àti kòkòrò náà ní orílẹ̀-èdè rẹ (ní Kẹ́ńyà nípasẹ̀ Pest Control Products Board; ní Nàìjíríà nípasẹ̀ NAFDAC), tí a rà láti ọ̀dọ̀ olùtajà tí ó ní ìwé àṣẹ, má ṣe rà á láéláé tí wọ́n bá ti dà á sínú ìgò tí kò ní àmì. Ka àmì-ìtọ́sọ́nà (label) kí o sì tẹ̀lé e gẹ́lẹ́: ìwọ̀n, bí a ṣe ń pò ó, aṣọ ààbò, àkókò ìwọlé padà sí oko, àti àkókò ìdúró ṣáájú ìkórè, ìyẹn iye ọjọ́ láàárín fífín oògùn àti ìkórè. Jẹ́ kí àwọn ọmọdé àti ẹranko jìnnà, má jẹun tàbí mu sìgá nígbà tí o bá ń fín oògùn, kí o sì kó àwọn ìgò rẹ̀ dànù láìléwu, má fi wọ́n pọn omi tàbí kó oúnjẹ sí.",
            "Ẹ̀fọ́ máa ń fẹ́ omi púpọ̀, wọ́n sì rọ̀. Bíbomirin drip ń fi omi sí gbòǹgbò, ó ń fi omi pamọ́, ó sì ń jẹ́ kí ewé gbẹ, èyí sì ń dín àrùn kù nínú tòmátì. Àwọn ohun èlò drip olówó pọ́ọ́kú àti kànnàkànnà omi (watering can) ṣiṣẹ́ fún ọgbà kékeré. Bomirin ní àárọ̀ kùtùkùtù tàbí ní ìrọ̀lẹ́, kí o sì bomirin jinlẹ̀ ní ìgbà díẹ̀ dípò díẹ̀díẹ̀ lójoojúmọ́.",
            "Fi ìbòlẹ̀ (mulch) yí ẹ̀fọ́ ká láti di ọ̀rinrin mú àti láti dí ilẹ̀ lọ́wọ́ láti ta sí ewé. Ṣàyẹ̀wò ọ̀rinrin ilẹ̀ pẹ̀lú ìka rẹ ní sẹ̀ǹtímítà díẹ̀ sísàlẹ̀ kí o tó bomirin. Níbi tí omi bá ti ṣọ̀wọ́n, gbá omi òjò láti orí òrùlé kí o sì lo kòtò ìkómi (water pan)."
          ],
          steps: ["Lo kìkì ọjà tí a forúkọ sílẹ̀ fún irè àti kòkòrò náà, láti ọ̀dọ̀ olùtajà tí ó ní ìwé àṣẹ.", "Ka kí o sì tẹ̀lé àmì-ìtọ́sọ́nà: ìwọ̀n, aṣọ ààbò, ìwọlé padà, àkókò ìdúró ṣáájú ìkórè.", "Kó àwọn ìgò dànù láìléwu.", "Bomirin ẹ̀fọ́ ní gbòǹgbò (drip tàbí kànnàkànnà omi), ní àárọ̀ tàbí ìrọ̀lẹ́.", "Fi ìbòlẹ̀ sí i kí o sì ṣàyẹ̀wò ọ̀rinrin ilẹ̀ kí o tó bomirin."],
          words: [["Àkókò ìdúró ṣáájú ìkórè (PHI)", "iye ọjọ́ tí o gbọ́dọ̀ dúró lẹ́yìn fífín oògùn kí o tó kórè."], ["Oògùn apakòkòrò tí a forúkọ sílẹ̀", "ọjà tí àjọ ìjọba tó ń bójú tó o ti fọwọ́sí fún ìlò kan pàtó."], ["Bíbomirin drip", "bíbomirin nípasẹ̀ páìpù tí ó ní ihò kékeré tí omi ń kán sí gbòǹgbò."]],
          slides: [
            { title: "Kìkì ọjà tí a forúkọ sílẹ̀", bullets: ["Kẹ́ńyà: PCPB. Nàìjíríà: NAFDAC", "Olùtajà tí ó ní ìwé àṣẹ, àpò àkọ́kọ́ tí ó ní àmì", "Fún irè àti kòkòrò náà"] },
            { title: "Tẹ̀lé àmì-ìtọ́sọ́nà", bullets: ["Ìwọ̀n àti pípò, aṣọ ààbò", "Àkókò ìwọlé padà sí oko", "Àkókò ìdúró ṣáájú kí o tó kórè"] },
            { title: "Ààbò", bullets: ["Kò sí ọmọdé tàbí ẹranko nítòsí", "Má jẹun tàbí mu sìgá nígbà tí o ń fín oògùn", "Má fi ìgò rẹ̀ kó oúnjẹ tàbí omi láéláé"] },
            { title: "Bomirin ẹ̀fọ́ dáadáa", bullets: ["Drip tàbí kànnàkànnà omi ní gbòǹgbò", "Àárọ̀ tàbí ìrọ̀lẹ́, jinlẹ̀ ní ìgbà díẹ̀", "Ìbòlẹ̀; kọ́kọ́ ṣàyẹ̀wò ọ̀rinrin"] }
          ],
          sources: [PCPB, NAFDAC, FAO_IPM],
          tryIt: "Mú àmì-ìtọ́sọ́nà oògùn apakòkòrò èyíkéyìí (láti ṣọ́ọ̀bù, íńtánẹ́ẹ̀tì tàbí ilé ìpamọ́ rẹ). Kọ sílẹ̀: àwọn irè àti kòkòrò tí a forúkọ rẹ̀ sílẹ̀ fún, ìwọ̀n, aṣọ ààbò, àti àkókò ìdúró ṣáájú ìkórè. Lẹ́yìn náà kọ ètò bíbomirin fún ọgbà ẹ̀fọ́ rẹ.",
          youCanNow: "lo oògùn apakòkòrò láìléwu àti lọ́nà òfin nígbà tí ó bá yẹ, kí o sì bomirin ẹ̀fọ́ láìfi omi ṣòfò.",
          quickCheck: [
            { objective: "O4", q: "Kí ni àkókò ìdúró ṣáájú ìkórè lórí àmì-ìtọ́sọ́nà oògùn apakòkòrò?", options: ["Àkókò láti pò oògùn", "Àwọn ọjọ́ ṣáájú ìgbìn", "Àwọn ọjọ́ tí a gbọ́dọ̀ dúró láàárín fífín oògùn àti ìkórè", "Ìgbà tí ìgò náà máa pẹ́ tó"], answer: 2, why: "Àkókò ìdúró ṣáájú ìkórè ni iye ọjọ́ láàárín fífín oògùn ìkẹyìn àti ìkórè." },
            { objective: "O5", q: "Ọgbà kale rẹ ti gbẹ, o sì ní kànnàkànnà omi. Ìgbà wo ni o máa bomirin?", options: ["Ní ọ̀sán gangan, díẹ̀díẹ̀ ní gbogbo wákàtí", "Àárọ̀ kùtùkùtù tàbí ìrọ̀lẹ́, lẹ́yìn tí o bá ti ṣàyẹ̀wò ọ̀rinrin ilẹ̀", "Kìkì lẹ́yìn tí ewé bá ti rọ fún ọ̀sẹ̀ kan", "Láéláé; dúró de òjò"], answer: 1, why: "Bíbomirin ní àárọ̀ kùtùkùtù tàbí ìrọ̀lẹ́, jinlẹ̀, àti kìkì nígbà tí ilẹ̀ bá gbẹ ń fi omi pamọ́, ó sì bá ẹ̀fọ́ mu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ìkórè àti ìtọ́jú lẹ́yìn ìkórè",
          minutes: 5,
          goal: "Kórè ní àkókò tó tọ́, kí o sì tọ́jú, ṣà, kí o sì pa irè mọ́ kí ó má bàa pàdánù iye rẹ̀.",
          text: [
            "Oúnjẹ púpọ̀ ń sọnù lẹ́yìn ìkórè. Kórè nígbà tí irè bá pọ́n dáadáa: tòmátì ní ìpele tí olùrà rẹ fẹ́ (nígbà púpọ̀ nígbà tí àwọ̀ rẹ̀ bá ń yí padà fún ọjà tó jìnnà), ewé kale nígbà tí ó ṣì kéré tí ó sì rọ̀, àgbàdo nígbà tí ọkà rẹ̀ bá ti gbó tí ó sì gbẹ tó, ẹ̀gẹ́ nígbà tí gbòǹgbò rẹ̀ bá ti ṣetán àti kìkì iye tí o lè tà tàbí ṣe ní kíákíá, nítorí gbòǹgbò ẹ̀gẹ́ ń bàjẹ́ láàárín ọjọ́ díẹ̀.",
            "Tọ́jú rẹ̀ jẹ́jẹ́: lo àpótí (crate) tó mọ́, kì í ṣe àpò, fún tòmátì àti irè tó rọ̀; jẹ́ kí irè wà ní ibòji; kí o sì kórè ní àárọ̀ tí ó tutù. Ṣà á kí o sì pín in ní ìwọ̀n àti dídára, kí o sì yọ èyí tó ti bàjẹ́ kúrò kí ó má bàa ba àwọn yòókù jẹ́. Bọ̀wọ̀ fún àkókò ìdúró ṣáájú ìkórè lẹ́yìn fífín oògùn èyíkéyìí.",
            "Sá ọkà gbẹ dáadáa kí o tó pa á mọ́: àgbàdo àti ẹ̀pà tó tutù lè hu èbu tí ó ń ṣe aflatoxin, májèlé kan. Béèrè lọ́wọ́ olùrà rẹ tàbí òṣìṣẹ́ ìmọ̀ràn iye ọ̀rinrin tí ó yẹ, kí o sì ṣàyẹ̀wò rẹ̀ tí o bá lè ṣe é. Pa ọkà mọ́ sínú ilé ìpamọ́ tó mọ́, tó gbẹ, tí a gbé sókè, tàbí sínú àpò ìpamọ́ tí afẹ́fẹ́ kò lè wọ̀ (hermetic) láti ṣàkóso kòkòrò ọkà (weevil) láìlo kẹ́míkà."
          ],
          steps: ["Kórè nígbà tí irè bá pọ́n bí olùrà rẹ ṣe fẹ́.", "Kórè ní àárọ̀ tí ó tutù; jẹ́ kí irè wà ní ibòji.", "Lo àpótí tó mọ́ fún irè tó rọ̀.", "Ṣà á kí o sì pín in; yọ èyí tó ti bàjẹ́ kúrò.", "Sá ọkà gbẹ dáadáa; pa á mọ́ sínú ilé ìpamọ́ tó mọ́, tó gbẹ, tí a gbé sókè tàbí àpò hermetic."],
          words: [["Àdánù lẹ́yìn ìkórè", "oúnjẹ tí ó sọnù tàbí bàjẹ́ láàárín ìkórè àti títà tàbí lílò."], ["Pípín ní ìpele (grading)", "ṣíṣà irè ní ìwọ̀n àti dídára."], ["Aflatoxin", "májèlé tí èbu ń ṣe lórí ọkà àti ẹ̀pà tó tutù."], ["Àpò hermetic", "àpò ìpamọ́ tí afẹ́fẹ́ kò lè wọ̀, tí ó ń dá kòkòrò dúró nípa dídí afẹ́fẹ́ mọ́."]],
          slides: [
            { title: "Kórè ní àkókò tó tọ́", bullets: ["Tòmátì ní ìpele tí olùrà rẹ fẹ́", "Kale nígbà tí ó ṣì kéré tí ó rọ̀", "Ẹ̀gẹ́: kìkì ohun tí o lè tà kíákíá"] },
            { title: "Tọ́jú rẹ̀ jẹ́jẹ́", bullets: ["Àárọ̀ tí ó tutù, ibòji", "Àpótí tó mọ́, kì í ṣe àpò", "Ṣà á, pín in, yọ èyí tó bàjẹ́ kúrò"] },
            { title: "Pa ọkà mọ́ láìléwu", bullets: ["Sá a gbẹ dáadáa: ọkà tó tutù lè ní aflatoxin", "Ilé ìpamọ́ tó mọ́, tó gbẹ, tí a gbé sókè", "Àpò hermetic láti dènà kòkòrò ọkà"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò àsìkò oko rẹ fún irè oko kan àti ọgbà ẹ̀fọ́ kan: àyẹ̀wò ilẹ̀, pípèsè ilẹ̀ àti bíbọ́ ọ, irúgbìn àti àlàfo, ọjọ́ ìgbìn, yíyẹ oko wò lọ́sẹ̀ọ̀sẹ̀ àti ìgbésẹ̀ IPM, bíbomirin ẹ̀fọ́, àti ìkórè, ṣíṣà, ìpamọ́ àti títà.",
          youCanNow: "kórè, tọ́jú, ṣà, kí o sì pa irè mọ́ láti dín àdánù kù kí ó má bàa pàdánù iye rẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Kí ni aflatoxin?", options: ["Ajílẹ̀ kan", "Àpò ìpamọ́ kan", "Oríṣi kòkòrò ọkà kan", "Májèlé láti inú èbu lórí ọkà tó tutù"], answer: 3, why: "Àgbàdo àti ẹ̀pà tó tutù lè hu èbu tí ó ń ṣe aflatoxin, májèlé kan." },
            { objective: "O6", q: "O ń kórè tòmátì láti tà. Báwo ni o ṣe máa gbé e?", options: ["Nínú àpótí tó mọ́, ní ibòji", "Nínú àpò ní oòrùn", "Kí a kó wọn jọ láìdì sínú kẹ̀kẹ́", "Nínú àpò pẹ̀lú àwọn tó ti bàjẹ́"], answer: 0, why: "Àpótí tó mọ́ àti ibòji ń dáàbò bo irè tó rọ̀; àpò àti oòrùn ń fọ́ ọ, wọ́n sì ń bà á jẹ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídáàbò bo irè àti parí rẹ̀",
        questions: [
          { objective: "O4", q: "Nínú IPM, a máa ń lo oògùn apakòkòrò:", options: ["Ní gbogbo ọ̀sẹ̀ láìka ohunkóhun sí", "Láéláé, kódà ní ipò kankan", "Kìkì nígbà tí ó bá yẹ, lẹ́yìn tí a ti ronú nípa àwọn ọ̀nà míì", "Kìkì lórí ẹ̀fọ́"], answer: 2, why: "IPM ti FAO ń mú lílo oògùn apakòkòrò mọ sí ibi tí ó bá yẹ nìkan." },
          { objective: "O4", q: "Báwo ni o ṣe gbọ́dọ̀ yẹ oko wò?", options: ["Wo etí oko nìkan", "Rìn ní ìrísí W kí o sì ṣàyẹ̀wò iye ọ̀gbìn kan pàtó", "Wò ó láti inú ilé", "Kìkì lẹ́yìn ìkórè"], answer: 1, why: "Ìrísí W ń ṣàyẹ̀wò gbogbo oko lọ́nà tó tọ́." },
          { objective: "O4", q: "Àkókò ìdúró ṣáájú ìkórè ni:", options: ["Àwọn ọjọ́ tí a gbọ́dọ̀ dúró láàárín fífín oògùn àti ìkórè", "Àkókò ìgbìn", "Iye owó oògùn apakòkòrò", "Bí ẹ̀rọ ìfínoògùn ṣe tóbi tó"], answer: 0, why: "Ó ń jẹ́ kí ìyókù oògùn lórí oúnjẹ wà ní ìpele tí kò léwu." },
          { objective: "O5", q: "Kí ló dé tí a fi ń lo bíbomirin drip fún tòmátì?", options: ["Ó ń mú ewé tutù", "Ó ń lo omi púpọ̀ sí i", "Òfin ló béèrè fún un", "Ó ń fi omi sí gbòǹgbò, ó sì ń jẹ́ kí ewé gbẹ, èyí ń dín àrùn kù"], answer: 3, why: "Ewé gbígbẹ túmọ̀ sí àrùn díẹ̀ àti omi díẹ̀ tí ó ṣòfò." },
          { objective: "O6", q: "Kí ló dé tí a fi gbọ́dọ̀ sá àgbàdo gbẹ dáadáa kí a tó pa á mọ́?", options: ["Láti mú un wúwo sí i", "Ọkà tó tutù lè hu èbu tí ó ń ṣe aflatoxin", "Àwọn olùrà fẹ́ràn ọkà tó tutù", "Láti yí àwọ̀ rẹ̀ padà"], answer: 1, why: "Aflatoxin jẹ́ májèlé tó léwu láti inú èbu lórí ọkà tó tutù." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ọ̀gbìn Irè Oko àti Ẹ̀fọ́ Tó Lè Pẹ́",
    questions: [
      { objective: "O1", q: "Àyẹ̀wò ilẹ̀ ń sọ fún ọ nípa:", options: ["Ojú ọjọ́", "pH àti ìwọ̀n oúnjẹ ọ̀gbìn", "Iye owó irè", "Orúkọ àwọn kòkòrò"], answer: 1, why: "Àyẹ̀wò ilẹ̀ ń wọn bí ilẹ̀ ṣe kan tó àti oúnjẹ ọ̀gbìn inú rẹ̀." },
      { objective: "O1", q: "Ilẹ̀ tó kan lè nílò:", options: ["Dídáná sun ún sí i", "Iyọ̀", "Ẹfun, tí àyẹ̀wò ilẹ̀ bá gbà á nímọ̀ràn", "Kò nílò nǹkan kankan láéláé"], answer: 2, why: "Ẹfun ń dín bí ilẹ̀ ṣe kan kù, ó sì ń tú oúnjẹ ọ̀gbìn sílẹ̀." },
      { objective: "O1", q: "Èwo ló ń mú ìlera ilẹ̀ dára sí i?", options: ["Fífi ìgbẹ́ ẹran àti kọ́mpọ́ọ̀sì sí i àti bíbo ilẹ̀ mọ́lẹ̀", "Dídáná sun ìyókù irè", "Kíkọ ilẹ̀ ní ọ̀pọ̀ ìgbà", "Fífi ilẹ̀ sílẹ̀ ní òfìfo"], answer: 0, why: "Ohun ẹlẹ́ran-ara àti ìbòlẹ̀ ń bọ́ ilẹ̀, wọ́n sì ń dáàbò bò ó." },
      { objective: "O2", q: "Irúgbìn tí a fọwọ́sí ni:", options: ["Ọkà èyíkéyìí láti ọjà", "Irúgbìn tí kò ní àpò", "Irúgbìn tí a ti fi pamọ́ fún ọdún mẹ́wàá", "Irúgbìn tí àjọ ìjọba tó ń bójú tó irúgbìn ti ṣàyẹ̀wò"], answer: 3, why: "Ìfọwọ́sí ń ṣàyẹ̀wò oríṣi àti dídára irúgbìn." },
      { objective: "O2", q: "Ọ̀gbìn tó há jù sábà máa ń:", options: ["So èso púpọ̀ sí i", "Du ìmọ́lẹ̀, omi àti oúnjẹ ọ̀gbìn, èso wọn sì ń dín kù", "Kò nílò ajílẹ̀", "Borí gbogbo kòkòrò"], answer: 1, why: "Àlàfo tó tọ́ ń mú iye ọ̀gbìn àti ohun tí wọ́n nílò dọ́gba." },
      { objective: "O2", q: "Ìgbà wo ló yẹ kí a ṣí ọmọ ọ̀gbìn lọ sí oko?", options: ["Ní ọ̀sán gangan nínú oòrùn", "Nígbà ìjì", "Lẹ́yìn mímú wọn le, ó dára jù ní ìrọ̀lẹ́ tí ó tutù", "Kí wọ́n tó ní ewé"], answer: 2, why: "Ojú ọjọ́ tí ó tutù ń dín ìpayà ìṣípò kù." },
      { objective: "O3", q: "Àwọn irè wo ló ń fi nitrogen kún ilẹ̀?", options: ["Ẹ̀wà, èrèé àti ẹ̀pà", "Àgbàdo nìkan", "Tòmátì", "Àlùbọ́sà"], answer: 0, why: "Irè ẹlẹ́wà ń mú nitrogen wọ inú ilẹ̀ nípasẹ̀ gbòǹgbò wọn." },
      { objective: "O3", q: "Topdressing àgbàdo sábà máa ń túmọ̀ sí fífi kún un:", options: ["Ẹfun nígbà ìgbìn", "Irúgbìn", "Omi nìkan", "Nitrogen fún irè tí ó ń dàgbà lọ́wọ́"], answer: 3, why: "Fífi nitrogen kún un ń ran ìdàgbàsókè lọ́wọ́ ní ìpele tó tọ́." },
      { objective: "O3", q: "Ibo ló yẹ kí a fi ajílẹ̀ sí?", options: ["Sórí irúgbìn tààrà", "Ní ẹ̀gbẹ́ ọ̀gbìn, kí ó má kan irúgbìn", "Sí ojú ọ̀nà", "Sórí ewé nìkan"], answer: 1, why: "Fífi í sí ẹ̀gbẹ́ gbòǹgbò ń lò ó dáadáa láìjó irúgbìn." },
      { objective: "O4", q: "Àwọn ọ̀tá àdánidá ni:", options: ["Èpò", "Oògùn apakòkòrò", "Kòkòrò tí ó ń jẹ kòkòrò àjẹnirun tàbí kọlù wọ́n", "Olè"], answer: 2, why: "Ladybird àti agbọ́n kékeré ń ràn wá lọ́wọ́ láti ṣàkóso kòkòrò." },
      { objective: "O4", q: "Ìpele ìgbésẹ̀ ni:", options: ["Iye kòkòrò tí ìṣàkóso fi tọ́ sí owó tí a máa ná", "Oríṣi ẹ̀rọ ìfínoògùn kan", "Àkókò ìkórè", "Èsì àyẹ̀wò ilẹ̀ kan"], answer: 0, why: "Ó ń ràn wá lọ́wọ́ láti yẹra fún fífín oògùn láìnídìí." },
      { objective: "O4", q: "A ń lo push-pull jù lọ fún:", options: ["Tòmátì", "Kale", "Àlùbọ́sà", "Àgbàdo àti ọkà bàbà"], answer: 3, why: "icipe ló ṣe é fún kòkòrò ọkà bí stemborer àti fall armyworm." },
      { objective: "O4", q: "Ní Kẹ́ńyà, ta ló ń forúkọ oògùn apakòkòrò sílẹ̀?", options: ["KCAA", "Pest Control Products Board (PCPB)", "KMD", "ODPC"], answer: 1, why: "PCPB ló ń bójú tó ọjà ìṣàkóso kòkòrò ní Kẹ́ńyà." },
      { objective: "O4", q: "Oògùn apakòkòrò tí wọ́n tà nínú ìgò tí kò ní àmì, tí wọ́n ti dà sí i:", options: ["Ó jẹ́ ọjà olówó pọ́ọ́kú tó dára", "Kò burú tí ó bá rọ̀jù", "A kò gbọ́dọ̀ rà á tàbí lò ó", "Ó láàbò jù"], answer: 2, why: "Láìsí àmì-ìtọ́sọ́nà, o kò lè mọ ọjà náà tàbí lò ó láìléwu." },
      { objective: "O4", q: "Ìgò oògùn apakòkòrò tí ó ti ṣófo gbọ́dọ̀ jẹ́:", options: ["Kíkó dànù láìléwu, láìfi kó oúnjẹ tàbí omi sí láéláé", "Lílò láti pọn omi mímu", "Fífún àwọn ọmọdé", "Jíjù sínú odò"], answer: 0, why: "Ìyókù oògùn lè ṣe májèlé fún ènìyàn àti omi." },
      { objective: "O5", q: "Àkókò tó dára jù láti bomirin ẹ̀fọ́ ni:", options: ["Ọ̀sán gangan", "Kìkì ní òru nígbà òjò", "Láéláé", "Àárọ̀ kùtùkùtù tàbí ìrọ̀lẹ́"], answer: 3, why: "Omi díẹ̀ ló ń sọnù sí ooru àti ìgbóná oòrùn." },
      { objective: "O5", q: "Ìbòlẹ̀ (mulch) tí a fi yí ẹ̀fọ́ ká:", options: ["Ń mú ilẹ̀ gbẹ", "Ń di ọ̀rinrin mú, ó sì ń dí ilẹ̀ lọ́wọ́ láti ta sí ewé", "Ń fa gbogbo kòkòrò mọ́ra", "Rọ́pò omi pátápátá"], answer: 1, why: "Ìbòlẹ̀ ń fi omi pamọ́, ó sì ń dín àrùn tí ilẹ̀ ń ta sí ewé kù." },
      { objective: "O6", q: "Irè tó rọ̀ bí tòmátì ni a gbọ́dọ̀ gbé nínú:", options: ["Àpò tí a dì pinpin", "Ọwọ́ òfìfo nìkan", "Àpótí tó mọ́", "Àpò ọ̀rá nínú oòrùn"], answer: 2, why: "Àpótí ń dáàbò bo irè tó rọ̀ kí ó má bàa fọ́." },
      { objective: "O6", q: "Kí ló dé tí a fi gbọ́dọ̀ kórè kìkì iye ẹ̀gẹ́ tí a lè tà tàbí ṣe ní kíákíá?", options: ["Gbòǹgbò rẹ̀ ń bàjẹ́ láàárín ọjọ́ díẹ̀ lẹ́yìn ìkórè", "Àwọn olùrà kò fẹ́ràn ẹ̀gẹ́", "Ẹ̀gẹ́ ń hù padà lóru ọjọ́ kan", "Òfin ló sọ bẹ́ẹ̀"], answer: 0, why: "Gbòǹgbò ẹ̀gẹ́ tuntun ń bàjẹ́ kíákíá." },
      { objective: "O6", q: "Àpò hermetic ń ṣàkóso kòkòrò ọkà nípa:", options: ["Fífi májèlé sí i", "Pípariwo", "Jíjẹ́ kí ìmọ́lẹ̀ wọlé", "Dídí afẹ́fẹ́ mọ́"], answer: 3, why: "Àpò tí afẹ́fẹ́ kò lè wọ̀ ń fi ebi oxygen pa kòkòrò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      6,
      8,
      9,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe nínú ètò náà kí o sì tún un yẹ̀ wò.",
    criteria: [
      {
        name: "Àyẹ̀wò ilẹ̀",
        objective: "O1",
        notYet: "Kò sí àyẹ̀wò ilẹ̀ nínú oko tàbí àyẹ̀wò ilẹ̀ ní ilé-ìwádìí.",
        meets: "A kọ èsì àyẹ̀wò nínú oko sílẹ̀, pẹ̀lú ibi àti bí a ṣe máa mú àpẹẹrẹ fún àyẹ̀wò ilẹ̀.",
        exceeds: "Ó lo èsì àyẹ̀wò ilẹ̀, tàbí ọjọ́ tí ó máa ṣe é, láti ṣe ètò náà."
      },
      {
        name: "Irúgbìn, àlàfo àti ọjọ́",
        objective: "O2",
        notYet: "Orísun irúgbìn, àlàfo tàbí ọjọ́ ìgbìn kò sí níbẹ̀.",
        meets: "Irúgbìn tí a fọwọ́sí tàbí ohun ìgbìn tó mọ́, àlàfo tí a gbà nímọ̀ràn àti ọjọ́ ìgbìn fún irè méjèèjì, pẹ̀lú orísun ọ̀kọ̀ọ̀kan.",
        exceeds: "Ó ní ètò nursery àti mímú ọmọ ọ̀gbìn le fún ẹ̀fọ́ náà."
      },
      {
        name: "Bíbọ́ ilẹ̀",
        objective: "O3",
        notYet: "Ajílẹ̀ nìkan ló wà níbẹ̀, tàbí a fojú dá ìwọ̀n.",
        meets: "Ohun ẹlẹ́ran-ara, irè ẹlẹ́wà èyíkéyìí, àti àkókò àti ibi tí a ó fi ajílẹ̀ sí, pẹ̀lú ìwọ̀n láti inú àyẹ̀wò ilẹ̀ tàbí òṣìṣẹ́ ìmọ̀ràn.",
        exceeds: "Ó ní ètò kọ́mpọ́ọ̀sì àti yíyí irè padà fún àsìkò tó ń bọ̀."
      },
      {
        name: "Yíyẹ oko wò àti IPM",
        objective: "O4",
        notYet: "Ó ń gbèrò láti máa fín oògùn ní ìlànà àkókò láìyẹ oko wò.",
        meets: "Ìlànà yíyẹ oko wò lọ́sẹ̀ọ̀sẹ̀, àwọn kòkòrò pàtàkì tí ó máa ṣọ́, ìgbésẹ̀ ìdènà àti ọ̀nà tí kì í ṣe kẹ́míkà, àti òfin àmì-ìtọ́sọ́nà fún oògùn apakòkòrò èyíkéyìí.",
        exceeds: "Ó dárúkọ ibi tí ó ti máa gba àyẹ̀wò àti ìpele ìgbésẹ̀ fún kòkòrò pàtàkì kan."
      },
      {
        name: "Bíbomirin",
        objective: "O5",
        notYet: "Kò sí ètò bíbomirin fún ẹ̀fọ́.",
        meets: "Ọ̀nà bíbomirin, àkókò lójúmọ́, ìbòlẹ̀ àti àyẹ̀wò ọ̀rinrin ilẹ̀.",
        exceeds: "Ó ní ọ̀nà láti gbá omi tàbí fi omi pamọ́."
      },
      {
        name: "Ìkórè àti ìpamọ́",
        objective: "O6",
        notYet: "Ìkórè, ṣíṣà tàbí ìpamọ́ kò sí níbẹ̀.",
        meets: "Àkókò ìkórè, ìtọ́jú jẹ́jẹ́, ṣíṣà, sísá gbẹ àti ìpamọ́, àti ibi tí ó máa tà á sí.",
        exceeds: "Ó dárúkọ ohun tí olùrà fẹ́ ní ti dídára àti bí ó ṣe máa tọpinpin àdánù."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ti ètò àsìkò oko",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ṣe àyẹ̀wò ilẹ̀, lo irúgbìn tí a fọwọ́sí tàbí yẹ oko wò lọ́sẹ̀ọ̀sẹ̀ ní àsìkò tó tẹ̀lé e (ìwádìí àtẹ̀lé)",
      "Ìyípadà nínú àdánù nígbà ìkórè àti lẹ́yìn ìkórè tí àwọn akẹ́kọ̀ọ́ tàbí ẹgbẹ́ wọn ròyìn lẹ́yìn àsìkò kan",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ iṣẹ́ àgbẹ̀ Koach Learn míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, àti fóònù lásán",
      "Oko tàbí ọgbà ẹ̀fọ́ tí o lè dé, àti ọkọ́ fún àyẹ̀wò ilẹ̀",
      "Àmì-ìtọ́sọ́nà oògùn apakòkòrò gidi àti àpò irúgbìn, tí wọ́n bá wà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò nínú oko àti láti kọ ètò àsìkò oko"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ àgbẹ̀ tàbí ilé-ìwé oko (field school): ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe àyẹ̀wò ilẹ̀ àti rírìn yíyẹ oko wò nínú oko gidi.",
      "Pe òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ tàbí agrovet láti sọ àlàfo, oríṣi irúgbìn àti ìwọ̀n ajílẹ̀ ti agbègbè; má ṣe sọ ìwọ̀n fúnra rẹ.",
      "Má ṣe pò tàbí fín oògùn apakòkòrò ní kíláàsì; fi àmì-ìtọ́sọ́nà kan hàn kí ẹ sì fi kíkà rẹ̀ ṣe àṣeṣe.",
      "Fi rubric ṣe àmì fún ètò àsìkò oko, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
