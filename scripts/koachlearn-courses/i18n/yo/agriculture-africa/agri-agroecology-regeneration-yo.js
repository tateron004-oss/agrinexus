"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-agroecology-regeneration.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_AE = { name: "FAO: Ibùdó ìmọ̀ agroecology (Agroecology Knowledge Hub)", url: "https://www.fao.org/agroecology/en/" };
const FAO_10 = { name: "FAO: Àwọn èròjà 10 ti agroecology (tí àwọn orílẹ̀-èdè ọmọ ẹgbẹ́ FAO gbà ní 2019)", url: "https://www.fao.org/agroecology/overview/the-10-elements-of-agroecology/en" };
const FMNR_STEPS = { name: "Tearfund Footsteps 110: Mímú igi padà dàgbà láti ọwọ́ àgbẹ̀ (FMNR), ìgbésẹ̀ sí àṣeyọrí (pẹ̀lú World Vision)", url: "https://learn.tearfund.org/-/media/learn/resources/footsteps/pdfs/footsteps-101-110/2020-tearfund-footsteps-110-farming-for-the-future-en-centre-page-en.pdf" };
const FMNR_ICRAF = { name: "World Agroforestry (ICRAF) Uganda: Ìwé ìtọ́sọ́nà FMNR fún olùlò", url: "https://fmnrhub.com.au/wp-content/uploads/2024/05/FMNR_Uganda-near-final-v3-2018.pdf" };
const FAO_AGROFOR = { name: "FAO: Gbígbin igi pọ̀ mọ́ irè oko (Agroforestry)", url: "https://www.fao.org/agroforestry/en/" };
const GLIRICIDIA = { name: "Sileshi àti àwọn ẹlẹgbẹ́: Ṣé igi ẹ̀yà ẹ̀wà lè jẹ́ kí ìkórè àgbàdo tí òjò ń bomi rin dúró sán-ún ní Gúúsù Áfíríkà? (ìdánwò ní Malawi àti Zambia)", url: "https://repository.up.ac.za/handle/2263/20631" };
const TITHONIA = { name: "Tithonia diversifolia: ìyàtọ̀ nínú èròjà ajílẹ̀ inú ewé rẹ̀ àti ohun tí ó túmọ̀ sí fún kíkó ewé lọ sí oko (ìwọ̀-oòrùn Kenya)", url: "https://centaur.reading.ac.uk/119281" };
const FAO_SOM = { name: "FAO: Pàtàkì èròjà ohun alààyè nínú ilẹ̀ (soil organic matter)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const HANDBOOK_4R = { name: "Ìtọ́jú èròjà oúnjẹ ohun ọ̀gbìn 4R ní iṣẹ́ àgbẹ̀ Áfíríkà: ìwé ìtọ́sọ́nà fún ìdálẹ́kọ̀ọ́ àgbẹ̀ (extension)", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-agroecology-regeneration-yo",
  lang: "yo",
  translationOf: "agri-agroecology-regeneration",
  category: "Agriculture (Africa)",
  name: "Agroecology àti Mímú Ilẹ̀ Padà Bọ̀ Sípò",
  skills: "Lílo àwọn èròǹgbà agroecology, Mímú ilẹ̀ padà bọ̀ sípò pẹ̀lú irè ìbòlẹ̀ àti ajílẹ̀ ewéko, Mímú igi padà dàgbà pẹ̀lú FMNR, Sísopọ̀ irè oko àti ẹran ọ̀sìn, Dídín owó ajílẹ̀ kù, Wíwọn bí ilẹ̀ ṣe ń dára sí i láti àsìkò dé àsìkò",
  outcome: "kọ ètò àsìkò mẹ́ta láti mú oko kan tí ilẹ̀ rẹ̀ ti bàjẹ́ padà wà láàyè pẹ̀lú agroecology, kí o sì bẹ̀rẹ̀ rẹ̀: irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko, igi, ìsopọ̀ irè oko àti ẹran ọ̀sìn, àti èròjà ajílẹ̀ láti inú oko, pẹ̀lú owó tó dín kù fún ajílẹ̀ tí a ń rà àti àwọn òdiwọ̀n tó rọrùn láti rí bí ilẹ̀ ṣe ń dára sí i.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn òṣìṣẹ́ oko àti àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ (extension officer) ní Kenya, Nàìjíríà, Ghana, Niger, Senegal àti káàkiri Áfíríkà tí ilẹ̀ wọn ti rẹ̀: ìkórè ń dín kù, ilẹ̀ ti le tàbí omi ń gbé e lọ, èpò striga ń tàn kálẹ̀, owó ajílẹ̀ sì ń gòkè lọ́dọọdún.",
    "Orí 1 ń kọ́ni ní àwọn èròǹgbà agroecology àti bí a ṣe lè mú ilẹ̀ tó ti bàjẹ́ padà: irè ìbòlẹ̀ àti ajílẹ̀ ewéko, igi ajílẹ̀, àti mímú igi padà dàgbà láti ọwọ́ àgbẹ̀ (FMNR), èyí tí ó ti ran àwọn àgbẹ̀ ní Niger lọ́wọ́ láti mú igi padà dàgbà lórí mílíọ̀nù hẹ́kítà ilẹ̀. Orí 2 ń so irè oko àti ẹran ọ̀sìn pọ̀, ó ń lo onírúurú ẹ̀dá fún àǹfààní rẹ, ó ń dín owó ajílẹ̀ tí a ń kó wọlé láti òkèèrè kù, ó sì ń fi bí o ṣe lè wọn ìtẹ̀síwájú láti àsìkò dé àsìkò hàn ọ́.",
    "Ẹ̀kọ́ \"Ìlera Ilẹ̀ àti Ọ̀rá Rẹ̀\" (Soil Health and Fertility) ń kọ́ni ní àyẹ̀wò ilẹ̀, compost, yíyí irè oko padà àti ìbòlẹ̀ (mulch); ẹ̀kọ́ yìí ń kọ́ lé e lórí, kò sì tún un sọ. Mímú ilẹ̀ padà bọ̀ sípò ń gba àsìkò mélòó kan, nítorí náà bẹ̀rẹ̀ lórí oko kan, kí o sì fi wé àwọn yòókù. Àpẹẹrẹ lásán ni àwọn iye owó inú ẹ̀kọ́ yìí. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan lórí ilẹ̀ tìrẹ."
  ],
  finalTask: "Kọ ètò àsìkò mẹ́ta láti mú oko kan tí ilẹ̀ rẹ̀ ti bàjẹ́ padà bọ̀ sípò lórí oko rẹ (tàbí àpẹẹrẹ kan: éékà 1 ilẹ̀ àgbàdo tó ti rẹ̀ ní Kakamega, hẹ́kítà 2 ọkà bàbà àti ẹ̀pà ní Zinder, Niger, tàbí hẹ́kítà 1 ẹ̀gẹ́ ní Ìpínlẹ̀ Ọ̀yọ́): bí oko náà ṣe rí báyìí; irè ìbòlẹ̀, ajílẹ̀ ewéko tàbí igi wo ni o máa lò àti ìgbà wo; bí irè oko àti ẹran ṣe máa bọ́ ara wọn; iye àpò ajílẹ̀ tí a rà tí o fẹ́ rọ́pò àti owó tí o máa fi pamọ́; àti òdiwọ̀n mẹ́rin tàbí jù bẹ́ẹ̀ lọ tí o máa kọ sílẹ̀ ní àsìkò kọ̀ọ̀kan, pẹ̀lú àwòrán oko náà.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ káàkiri Áfíríkà (Kenya, Nàìjíríà, Ghana àti Ìwọ̀-oòrùn Áfíríkà tí wọ́n ń sọ Faransé, títí kan Sahel), tí wọ́n ń gbin àgbàdo, ẹ̀gẹ́, ọkà bàbà, ọkà jéró, ẹ̀wà, ẹ̀pà, ìrẹsì, kòkó àti kọfí, tí ọ̀pọ̀ sì ń sin ewúrẹ́, màlúù, ẹlẹ́dẹ̀ tàbí adìẹ.",
    startingPoint: "Wọ́n mọ ìpìlẹ̀ compost, ìgbẹ́ ẹran, yíyí irè oko padà àti ìbòlẹ̀ (mulch), wọ́n sì rí i pé ilẹ̀ wọn ti bàjẹ́. Díẹ̀ ló ń mọ̀ọ́mọ̀ lo irè ìbòlẹ̀, ajílẹ̀ ewéko, igi ajílẹ̀ tàbí FMNR, tí wọ́n ń so irè oko àti ẹran pọ̀ bí ètò kan, tàbí tí wọ́n ń wọn ìyípadà ilẹ̀ láti ìgbà dé ìgbà.",
    gap: "Ilẹ̀ tó ti bàjẹ́ àti owó ajílẹ̀ tó ń gòkè ń dín ìkórè àti owó tó ń wọlé kù. Àwọn akẹ́kọ̀ọ́ nílò àwọn ọ̀nà tó wúlò, tí kò wọ́n, láti tún ilẹ̀ kọ́ àti láti dín ohun tí wọ́n ń rà kù, àti ọ̀nà láti rí bóyá ó ń ṣiṣẹ́, kí wọ́n lè máa bá a lọ ní àwọn àsìkò àkọ́kọ́ tí ìyípadà kò yára.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ẹ̀kọ́ náà tún wà ní èdè Spanish, Faransé àti Lárúbáwá",
      "Ilẹ̀ àti iṣẹ́ ọwọ́: oko kékeré, iṣẹ́ ọwọ́ ìdílé, àwọn ìlò mìíràn fún àjẹkù irè oko (oúnjẹ ẹran, igi ìdáná)",
      "Àkókò: mímú ilẹ̀ padà bọ̀ sípò ń gba àsìkò mélòó kan; ẹ̀kọ́ kọ̀ọ̀kan jẹ́ ìṣẹ́jú 4 sí 6",
      "Owó: àpẹẹrẹ ni àwọn iye owó; a kò fún ni ní iye owó tàbí ìrànlọ́wọ́ ìjọba (subsidy) gẹ́gẹ́ bí òtítọ́",
      "Ẹ̀tọ́ ilẹ̀: òfin igi àti ìjẹko yàtọ̀ láti àdúgbò kan sí òmíràn àti láti orílẹ̀-èdè kan sí òmíràn; akẹ́kọ̀ọ́ ń ṣàyẹ̀wò òfin àdúgbò àti òfin ìjọba ìbílẹ̀ (by-law)"
    ],
    prerequisites: "A gbà ọ́ níyànjú láti kọ́kọ́ ṣe ẹ̀kọ́ \"Ìlera Ilẹ̀ àti Ọ̀rá Rẹ̀\" (Soil Health and Fertility: àyẹ̀wò ilẹ̀, compost, yíyí irè oko padà, ìbòlẹ̀)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ àwọn ọ̀nà tí a ń lò lórí oko rẹ", action: "so ọ̀nà kọ̀ọ̀kan pọ̀ mọ́ èròǹgbà agroecology tí ó ń lò, bí àtúnlò, onírúurú tàbí ìrànlọ́wọ́ ara-ẹni (synergy)", standard: "kí o so ó kéré tán ọ̀nà márùn-ún pọ̀ dáadáa" },
    { id: "O2", condition: "Fún oko kan tí ilẹ̀ rẹ̀ ti bàjẹ́", action: "yan irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko, kí o sì ṣètò ìgbà tí o máa gbìn ín àti ìgbà tí o máa gé e", standard: "pẹ̀lú irú ọ̀gbìn tó bá òjò àdúgbò rẹ mu, àti ọjọ́ gbíngbìn àti ọjọ́ gígé" },
    { id: "O3", condition: "Lórí ilẹ̀ tí kùkùté igi alààyè wà tàbí tí àyè wà fún igi", action: "ṣètò FMNR tàbí igi ajílẹ̀ ní ìgbésẹ̀ kọ̀ọ̀kan", standard: "kí o sọ àwọn kùkùté tàbí igi wo, ẹ̀ka mélòó, rírẹ́ ẹ̀ka, àti dídáàbò bò wọ́n lọ́wọ́ ẹran àti iná" },
    { id: "O4", condition: "Ní ìbámu pẹ̀lú irè oko àti ẹran ọ̀sìn tó wà lórí oko rẹ", action: "ya àwòrán bí oúnjẹ ẹran, ìgbẹ́ ẹran àti àjẹkù irè oko ṣe ń ṣàn láàárín irè oko àti ẹran rẹ", standard: "kí o fi ó kéré tán ìsopọ̀ mẹ́ta hàn àti ibi kan tí èròjà ajílẹ̀ ti ń jáde kúrò lórí oko" },
    { id: "O5", condition: "Ní ìbámu pẹ̀lú ajílẹ̀ tí o lò ní àsìkò tó kọjá", action: "ṣírò iye àpò ajílẹ̀ tí a rà tí èròjà láti inú oko lè rọ́pò, àti owó tí o máa fi pamọ́", standard: "ní owó orílẹ̀-èdè rẹ, kí o sì kọ ọ́ pé àfojúdíwọ̀n ni, láti ṣàyẹ̀wò pẹ̀lú òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀" },
    { id: "O6", condition: "Lórí oko tí o ń mú padà bọ̀ sípò", action: "kọ àwọn òdiwọ̀n ilẹ̀ àti oko tó rọrùn sílẹ̀ ní àkókò kan náà ní àsìkò kọ̀ọ̀kan", standard: "kí o lo ó kéré tán òdiwọ̀n mẹ́rin, tí o kọ sílẹ̀, tí o sì fi wé ti àsìkò tó ṣáájú" }
  ],
  chapters: [
    {
      name: "Orí 1: Àwọn èròǹgbà àti mímú ilẹ̀ padà",
      lessons: [
        {
          title: "Agroecology: àwọn èròǹgbà tí o lè lò lórí oko rẹ",
          objectives: ["O1"],
          minutes: 5,
          goal: "So àwọn ọ̀nà tí o ń lò lórí oko rẹ pọ̀ mọ́ àwọn èròǹgbà agroecology.",
          text: [
            "Agroecology túmọ̀ sí ṣíṣe iṣẹ́ àgbẹ̀ pẹ̀lú bí ìṣẹ̀dá ṣe ń ṣiṣẹ́: lílo ewéko, ẹran, ẹ̀dá alààyè inú ilẹ̀, igi àti ìmọ̀ àwọn ènìyàn kí oko lè máa bọ́ ara rẹ̀ jù, kí ó sì máa ra díẹ̀ láti ìta. FAO (Àjọ Oúnjẹ àti Iṣẹ́ Àgbẹ̀ ti Àjọ Àgbáyé) ṣàpèjúwe èròjà 10 ti agroecology, tí àwọn orílẹ̀-èdè ọmọ ẹgbẹ́ rẹ̀ gbà ní 2019.",
            "Márùn-ún jẹ mọ́ bí oko ṣe ń ṣiṣẹ́: àtúnlò (èròjà ajílẹ̀ àti ìdọ̀tí ń padà sínú oko), ìlò tó mọ́yán lórí (efficiency: èso púpọ̀ láti inú omi, ilẹ̀ àti ohun èlò kan náà), onírúurú (irè oko, ẹran àti igi púpọ̀), ìrànlọ́wọ́ ara-ẹni (synergy: àwọn apá tó ń ran ara wọn lọ́wọ́, bí irè ẹ̀yà ẹ̀wà tó ń bọ́ àgbàdo) àti agbára láti kojú ìpayà (resilience). Márùn-ún jẹ mọ́ ènìyàn: ṣíṣẹ̀dá ìmọ̀ papọ̀ (àgbẹ̀ àti olùwádìí ń kẹ́kọ̀ọ́ papọ̀), àwọn ìwà rere ènìyàn àti àwùjọ, àṣà àti ìṣe oúnjẹ, ìṣàkóso tó ní ojúṣe, àti ọrọ̀ ajé àtúnlò àti ìfọwọ́sowọ́pọ̀ (títà àti rírà ní àdúgbò lọ́nà tó tọ́).",
            "Ó ṣeé ṣe kí o ti máa lo díẹ̀ nínú wọn. Fífún ewúrẹ́ ní pòròpórò àgbàdo àti dídà ìgbẹ́ wọn padà sórí oko jẹ́ àtúnlò àti ìrànlọ́wọ́ ara-ẹni. Gbígbin ẹ̀gẹ́ pọ̀ mọ́ ẹ̀pà jẹ́ onírúurú. Ilé ẹ̀kọ́ àgbẹ̀ lórí oko (farmer field school) jẹ́ ṣíṣẹ̀dá ìmọ̀ papọ̀. Agroecology ní kí o mọ̀ọ́mọ̀ lò wọ́n, kí o sì máa fi kún wọn díẹ̀díẹ̀."
          ],
          words: [["Agroecology", "iṣẹ́ àgbẹ̀ tó ń lo ọ̀nà ìṣẹ̀dá àti ìmọ̀ àdúgbò, kí oko lè nílò ohun tí a ń rà díẹ̀, kí ó sì lè kojú ìpayà dáadáa."], ["Ìrànlọ́wọ́ ara-ẹni (synergy)", "nígbà tí apá méjì lórí oko bá ń ran ara wọn lọ́wọ́, tí wọ́n sì ń mú èso jù papọ̀ ju bí wọ́n ṣe dá wà lọ."], ["Àtúnlò (lórí oko)", "dídá àjẹkù irè oko, ìgbẹ́ ẹran àti ìdọ̀tí padà sínú ilẹ̀ dípò kí wọ́n sọnù."]],
          slides: [
            { title: "Agroecology ni...", bullets: ["Iṣẹ́ àgbẹ̀ pẹ̀lú ọ̀nà ìṣẹ̀dá", "Oko ń bọ́ ara rẹ̀ jù, ó ń ra díẹ̀", "FAO: èròjà 10, tí a gbà ní 2019"] },
            { title: "Bí oko ṣe ń ṣiṣẹ́", bullets: ["Àtúnlò àti ìlò tó mọ́yán lórí", "Onírúurú àti ìrànlọ́wọ́ ara-ẹni", "Agbára láti kojú ìpayà"] },
            { title: "Ènìyàn àti òdodo", bullets: ["Ṣíṣẹ̀dá ìmọ̀ papọ̀", "Ìwà rere àwùjọ, àṣà oúnjẹ", "Ìṣàkóso rere; ọrọ̀ ajé àtúnlò tó tọ́"] },
            { title: "Ó lè jẹ́ pé o ti ń ṣe é", bullets: ["Pòròpórò fún ewúrẹ́, ìgbẹ́ padà sí oko", "Ẹ̀gẹ́ + ẹ̀pà papọ̀", "Ilé ẹ̀kọ́ àgbẹ̀ lórí oko"] }
          ],
          sources: [FAO_10, FAO_AE],
          tryIt: "Kọ ọ̀nà mẹ́fà tí a ń lò lórí oko rẹ tàbí ní abúlé rẹ. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ èròǹgbà agroecology tí ó ń lò (àtúnlò, ìlò tó mọ́yán lórí, onírúurú, ìrànlọ́wọ́ ara-ẹni, agbára láti kojú ìpayà tàbí ọ̀kan lára àwọn èròjà ènìyàn). Fa àyíká yí èròǹgbà kan tí o kò fi bẹ́ẹ̀ lò ká.",
          youCanNow: "so àwọn ọ̀nà oko pọ̀ mọ́ àwọn èròǹgbà agroecology, kí o sì rí èyí tí o lè lò jù.",
          quickCheck: [
            { objective: "O1", q: "Àgbẹ̀ kan ń fún ewúrẹ́ rẹ̀ ní ewé àti pòròpórò ẹ̀wà, ó sì ń da ìgbẹ́ ewúrẹ́ sórí àgbàdo rẹ̀. Àwọn èròǹgbà wo ló ń lò?", options: ["Àtúnlò àti ìrànlọ́wọ́ ara-ẹni", "Ìṣàkóso nìkan", "Ìlò tó mọ́yán lórí ti katakata", "Kò sí ọ̀kankan"], answer: 0, why: "Àjẹkù irè oko ń bọ́ ẹran, ìgbẹ́ ẹran sì ń bọ́ ilẹ̀: èròjà ajílẹ̀ ń padà, àwọn apá sì ń ran ara wọn lọ́wọ́." },
            { objective: "O1", q: "Èwo ni àpẹẹrẹ onírúurú lórí oko?", options: ["Àgbàdo nìkan, ní gbogbo àsìkò, lórí gbogbo oko", "Sísun gbogbo àjẹkù irè oko", "Ẹ̀gẹ́, ẹ̀pà, igi àti ewúrẹ́ lórí oko kan náà", "Rírà gbogbo oúnjẹ ẹran láti ìlú"], answer: 2, why: "Irè oko, ẹran àti igi púpọ̀ papọ̀ ni onírúurú, ọ̀kan lára èròjà 10 ti FAO." }
          ]
        },
        {
          title: "Mímú ilẹ̀ tó ti bàjẹ́ padà: irè ìbòlẹ̀ àti ajílẹ̀ ewéko",
          objectives: ["O2"],
          minutes: 6,
          goal: "Yan irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko fún oko tí ilẹ̀ rẹ̀ ti bàjẹ́, kí o sì ṣètò ìgbà gbíngbìn àti ìgbà gígé.",
          text: [
            "Ilẹ̀ tó ti bàjẹ́ ti pàdánù èròjà ohun alààyè (organic matter) àti ìṣètò rẹ̀: omi òjò ń ṣàn lọ, irè oko kò dàgbà dáadáa, àwọn èpò bí striga sì ń gba ilẹ̀. Ìbòlẹ̀ (mulch) àti compost ń ṣèrànwọ́, ṣùgbọ́n wọn kì í sábà tó. Irè ìbòlẹ̀ àti ajílẹ̀ ewéko ń mú èròjà ohun alààyè dàgbà lórí oko gan-an.",
            "Irè ìbòlẹ̀ (cover crop) ni irè tí a gbìn ní pàtàkì láti bo ilẹ̀ àti láti dáàbò bò ó, ní ọ̀pọ̀ ìgbà láàárín àsìkò méjì. Ajílẹ̀ ewéko (green manure) ni irè tí a gbìn, tí a gé, tí a sì fi sílẹ̀ lórí ilẹ̀ tàbí tí a dà pọ̀ mọ́ ilẹ̀ láti bọ́ ọ. Irè ẹ̀yà ẹ̀wà (legume) ń ṣe méjèèjì, wọ́n sì ń fi nitrogen kún ilẹ̀: lablab, mucuna (velvet bean), canavalia (jack bean), crotalaria, ẹ̀wà (cowpea) àti òtílí (pigeon pea) ni a ń lò ní onírúurú apá Áfíríkà. Àwọn kan, bí lablab àti ẹ̀wà, tún ń fúnni ní oúnjẹ tàbí oúnjẹ ẹran; irúgbìn mucuna nílò ìtọ́jú pàtàkì kí ènìyàn tó lè jẹ ẹ́, nítorí náà kà á sí irè fún ilẹ̀ àti oúnjẹ ẹran, kí o sì béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀.",
            "A tún lè lo igbó oníwé gẹ́gẹ́ bí ajílẹ̀ ewé. Ní ìwọ̀-oòrùn Kenya, àwọn àgbẹ̀ ń gé ewé tithonia (Mexican sunflower) láti ara ọgbà ewéko, wọ́n sì ń tàn án sórí oko; ìwádìí rí i pé ewé náà ní èròjà ajílẹ̀ púpọ̀, ṣùgbọ́n gígé àti kíkó o jẹ́ iṣẹ́ líle, nítorí náà ó ń mérè wá jù lórí ẹ̀fọ́ àti àwọn irè oko olówó gíga mìíràn.",
            "Àkókò ṣe pàtàkì. Gbin irè ìbòlẹ̀ ní kùtùkùtù tó láti dàgbà dáadáa kí ẹ̀ẹ̀rùn tó dé, tàbí gbìn ín sáàárín irè oko pàtàkì ní ọ̀sẹ̀ díẹ̀ lẹ́yìn gbíngbìn. Gé e kí ó tó máa bá irè oko tó kàn jà fún oúnjẹ tàbí kí ó tó so irúgbìn líle, kí o sì fi ohun tí o gé sílẹ̀ lórí ilẹ̀ bí ìbòlẹ̀. Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí ilé ìwádìí irú ọ̀gbìn àti ọjọ́ tó bá òjò àdúgbò rẹ mu."
          ],
          steps: ["Rìn yí oko ká: ibo ló ṣófo, ibo ló le, ibo ni striga kún?", "Yan irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko kan tàbí méjì tó bá òjò àdúgbò rẹ mu.", "Pinnu: gbìn ín láàárín àsìkò, gbìn ín sáàárín irè oko pàtàkì, tàbí fi ilẹ̀ sinmi pẹ̀lú rẹ̀.", "Kọ ọjọ́ gbíngbìn àti ọjọ́ gígé sílẹ̀.", "Gé e kí ó tó bá irè oko rẹ jà; fi í sílẹ̀ lórí ilẹ̀.", "Dá ẹran dúró kúrò níbẹ̀ títí yóò fi ṣe iṣẹ́ rẹ̀, tàbí ṣètò láti pín díẹ̀ fún oúnjẹ ẹran."],
          words: [["Ilẹ̀ tó ti bàjẹ́", "ilẹ̀ tó ti pàdánù erùpẹ̀, èròjà ohun alààyè tàbí ìbòlẹ̀ ewéko, tí kò fi bẹ́ẹ̀ méso mọ́."], ["Irè ìbòlẹ̀ (cover crop)", "irè tí a gbìn ní pàtàkì láti bo ilẹ̀ àti láti dáàbò bò ó."], ["Ajílẹ̀ ewéko (green manure)", "irè tí a gbìn, tí a gé, tí a sì fi sílẹ̀ lórí tàbí nínú ilẹ̀ láti bọ́ ọ."], ["Gbíngbìn sáàárín irè (relay cropping)", "gbígbin irè kejì sáàárín irè tó wà lórí oko kí a tó kórè èkíní."]],
          slides: [
            { title: "Mú èròjà ohun alààyè dàgbà lórí oko", bullets: ["Ilẹ̀ tó bàjẹ́: omi ń ṣàn lọ, irè kò dàgbà, striga", "Ìbòlẹ̀ tàbí compost tí a lè gbé wá kò tó", "Irè ìbòlẹ̀ àti ajílẹ̀ ewéko ń mú un dàgbà níbẹ̀"] },
            { title: "Àṣàyàn irè ẹ̀yà ẹ̀wà", bullets: ["Lablab, ẹ̀wà, òtílí: oúnjẹ tàbí oúnjẹ ẹran pẹ̀lú", "Mucuna, canavalia, crotalaria: fún ilẹ̀ àti ẹran", "Wọ́n ń fa nitrogen láti inú afẹ́fẹ́"] },
            { title: "Ajílẹ̀ ewé", bullets: ["Ewé tithonia ní ìwọ̀-oòrùn Kenya", "Èròjà ajílẹ̀ púpọ̀; gígé jẹ́ iṣẹ́ líle", "Ó dára jù lórí irè oko olówó gíga"] },
            { title: "Ṣe é ní àkókò tó tọ́", bullets: ["Gbìn ní kùtùkùtù tàbí sáàárín irè oko pàtàkì", "Gé e kí ó tó bá irè jà tàbí so irúgbìn líle", "Béèrè ohun tó bá òjò rẹ mu lọ́wọ́ extension"] }
          ],
          sources: [TITHONIA, FAO_SOM],
          tryIt: "Yan oko rẹ tí ilẹ̀ rẹ̀ bàjẹ́ jù. Yan irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko kan fún un, kí o sì kọ: ìdí tí o fi yàn án, ọjọ́ gbíngbìn, bí o ṣe máa gbìn ín (láàárín àsìkò, sáàárín irè, tàbí ilẹ̀ ìsinmi) àti ọjọ́ gígé. Kọ ìbéèrè kan tí o máa bi òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ rẹ.",
          youCanNow: "yan irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko fún oko tí ilẹ̀ rẹ̀ ti bàjẹ́, kí o sì ṣètò ìgbà gbíngbìn àti ìgbà gígé.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìyàtọ̀ pàtàkì láàárín irè ìbòlẹ̀ àti ajílẹ̀ ewéko?", options: ["Igi ni irè ìbòlẹ̀ nígbà gbogbo", "Inú àpò ni a ti ń ra ajílẹ̀ ewéko", "Kò sí ìyàtọ̀", "A ń gbin ajílẹ̀ ewéko láti gé e, kí a sì fi sílẹ̀ láti bọ́ ilẹ̀"], answer: 3, why: "Irè ìbòlẹ̀ ń dáàbò bo ilẹ̀; a ń gbin ajílẹ̀ ewéko ní pàtàkì láti gé e kí ó bọ́ ilẹ̀ (ọ̀pọ̀ irè ń ṣe méjèèjì)." },
            { objective: "O2", q: "Ìgbà wo ló yẹ kí o gé irè ìbòlẹ̀ tí o gbìn ṣáájú àgbàdo?", options: ["Kí ó tó bá àgbàdo jà tàbí kí ó tó so irúgbìn líle", "Láéláé", "Lẹ́yìn tí a bá kórè àgbàdo", "Tí ó bá tanná àwọ̀ elése àlùkò nìkan"], answer: 0, why: "Gígé ní àkókò tó tọ́ ń dá ìjà dúró, ó sì ń fi ìbòlẹ̀ sílẹ̀ fún irè tó kàn." }
          ]
        },
        {
          title: "Igi tó ń padà wá: FMNR àti igi ajílẹ̀",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ṣètò FMNR tàbí igi ajílẹ̀ fún ilẹ̀ kan.",
          text: [
            "Ọ̀pọ̀ oko tó dà bí ẹni pé kò ní igi ṣì ní kùkùté igi alààyè àti gbòǹgbò lábẹ́ ilẹ̀. Mímú igi padà dàgbà láti ọwọ́ àgbẹ̀ (FMNR) ń jẹ́ kí wọ́n padà dàgbà dípò kí a máa gé wọn ní gbogbo àsìkò. Ní Niger, FMNR tàn láti ọ̀dọ̀ àgbẹ̀ kan sí òmíràn, ó sì ti mú igi padà wá sórí ilẹ̀ oko tó ju mílíọ̀nù márùn-ún hẹ́kítà lọ, tí ó ń fúnni ní oúnjẹ ẹran, igi ìdáná, ibòji àti irè oko tó dára jù.",
            "Àwọn ìgbésẹ̀ láti inú ìwé World Vision àti àwọn alábàáṣiṣẹ́ rẹ̀: wo gbogbo oko fún kùkùté tó ń hù, kí o sì yan àwọn irú igi tó wúlò; fún kùkùté kọ̀ọ̀kan, fi ẹ̀ka mẹ́ta sí márùn-ún tó ga jù, tó sì tọ́ jù sílẹ̀, kí o sì gé àwọn yòókù; rẹ́ àwọn ẹ̀ka ẹ̀gbẹ́ títí dé nǹkan bí ààbọ̀ gíga ẹ̀ka kọ̀ọ̀kan, pẹ̀lú irinṣẹ́ tó mú, kí o máa gé e sókè; máa padà wá ní oṣù díẹ̀ díẹ̀ láti yọ àwọn èéhù tuntun kúrò; dáàbò bo àwọn ẹ̀ka lọ́wọ́ ẹran àti iná; nígbà tí o bá gé ẹ̀ka kan lò, jẹ́ kí èyí tó kéré jù rọ́pò rẹ̀. Sàmì sí àwọn ẹ̀ka tí o yàn, kí o sì fohùn ṣọ̀kan lórí òfin pẹ̀lú àwọn aládùúgbò àti àdúgbò rẹ kí ẹran àti àwọn tó ń gé igi lè fi wọ́n sílẹ̀.",
            "Níbi tí kò bá sí kùkùté, o lè gbin igi ajílẹ̀: igi ẹ̀yà ẹ̀wà bí gliricidia, faidherbia (tó wọ́pọ̀ nínú oko onígi ní Sahel, títí kan agbègbè ẹ̀pà ní Senegal) tàbí calliandra, tí ewé wọn ń bọ́ ilẹ̀ tàbí ẹran. Ìdánwò gígùn ní Malawi àti Zambia rí i pé àgbàdo tí a gbìn pẹ̀lú gliricidia ń mú ìkórè tó dúró sán-ún jù wá láti ọdún dé ọdún ju àgbàdo tí a fi ajílẹ̀ nìkan bọ́ lọ, bí ó tilẹ̀ jẹ́ pé rírẹ́ àwọn igi náà lẹ́ẹ̀mejì tàbí lẹ́ẹ̀mẹ́ta lọ́dún jẹ́ iṣẹ́ gidi.",
            "Kí o tó gé igi tàbí tà á, ṣàyẹ̀wò òfin igbó ti orílẹ̀-èdè rẹ àti òfin ìjọba ìbílẹ̀ (by-law) àdúgbò rẹ."
          ],
          steps: ["Rìn yí ilẹ̀ náà ká, kí o sì sàmì sí kùkùté alààyè àti igi kékeré.", "Yan irú igi tó wúlò: oúnjẹ ẹran, igi ìdáná, èso, ilẹ̀.", "Fi ẹ̀ka 3 sí 5 tó tọ́ sílẹ̀ lórí kùkùté kọ̀ọ̀kan; gé àwọn yòókù.", "Rẹ́ ẹ̀ka ẹ̀gbẹ́ dé ààbọ̀ gíga; irinṣẹ́ tó mú, gé e sókè.", "Dáàbò bò wọ́n lọ́wọ́ ẹran àti iná; fohùn ṣọ̀kan lórí òfin pẹ̀lú aládùúgbò.", "Kò sí kùkùté? Ṣètò igi ajílẹ̀ pẹ̀lú ìmọ̀ràn extension."],
          words: [["FMNR", "mímú igi padà dàgbà láti ọwọ́ àgbẹ̀ (farmer-managed natural regeneration): jíjẹ́ kí kùkùté àti gbòǹgbò igi lórí ilẹ̀ rẹ padà dàgbà, kí o sì yan àwọn ẹ̀ka tó dára jù, kí o sì rẹ́ wọn."], ["Igi ajílẹ̀", "igi kan, ní ọ̀pọ̀ ìgbà irú ẹ̀yà ẹ̀wà, tí ewé rẹ̀ ń bọ́ ilẹ̀."], ["Oko onígi (parkland)", "ilẹ̀ oko tí igi wà ní ibi púpọ̀ káàkiri inú rẹ̀."], ["Òfin ìjọba ìbílẹ̀ (by-law)", "òfin tí àdúgbò tàbí ìjọba ìbílẹ̀ fohùn ṣọ̀kan lé lórí."]],
          slides: [
            { title: "Igbó tó wà lábẹ́ ilẹ̀", bullets: ["Kùkùté àti gbòǹgbò alààyè nínú oko tó ṣófo", "FMNR ń jẹ́ kí wọ́n padà dàgbà", "Niger: igi ti padà sórí hẹ́kítà tó ju mílíọ̀nù 5 lọ"] },
            { title: "Àwọn ìgbésẹ̀ FMNR", bullets: ["Yan kùkùté àti irú igi tó wúlò", "Fi ẹ̀ka 3 sí 5 tó tọ́ sílẹ̀", "Rẹ́ dé ààbọ̀ gíga; irinṣẹ́ tó mú, gé e sókè"] },
            { title: "Dáàbò bò wọ́n, kí o sì tọ́jú wọn", bullets: ["Yọ èéhù tuntun ní oṣù díẹ̀ díẹ̀", "Pa ẹran àti iná mọ́ kúrò níbẹ̀", "Fohùn ṣọ̀kan lórí òfin pẹ̀lú àdúgbò"] },
            { title: "Kò sí kùkùté? Igi ajílẹ̀", bullets: ["Gliricidia, faidherbia, calliandra", "Ìkórè àgbàdo tó dúró sán-ún jù ní ìdánwò Malawi àti Zambia", "Rírẹ́ jẹ́ iṣẹ́; ṣàyẹ̀wò òfin igbó"] }
          ],
          sources: [FMNR_STEPS, FMNR_ICRAF, GLIRICIDIA, FAO_AGROFOR],
          tryIt: "Rìn yí ilẹ̀ kan ká, kí o sì ka kùkùté alààyè tàbí igi kékeré tó wà níbẹ̀. Ya àwòrán kíákíá, kí o sì sàmì sí èyí tí o máa fi sílẹ̀. Kọ irú igi tí wọ́n jẹ́ (tàbí bi ẹnìkan), ohun tí o fẹ́ láti ara wọn, àti bí o ṣe máa dáàbò bò wọ́n lọ́wọ́ ẹran àti iná.",
          youCanNow: "ṣètò FMNR tàbí igi ajílẹ̀ fún ilẹ̀ kan ní ìgbésẹ̀ kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O3", q: "Nínú FMNR, kí ni o máa ṣe sí ọ̀pọ̀ èéhù tó wà lórí kùkùté alààyè?", options: ["Gé gbogbo wọn ní gbogbo àsìkò", "Sun kùkùté náà", "Fi mẹ́ta sí márùn-ún tó ga jù, tó sì tọ́ jù sílẹ̀, kí o sì gé àwọn yòókù", "Jẹ́ kí gbogbo èéhù dàgbà"], answer: 2, why: "Fífi ẹ̀ka díẹ̀ tó dára sílẹ̀ ń jẹ́ kí wọ́n yára dàgbà di igi tó wúlò." },
            { objective: "O3", q: "Kí nìdí tí àgbẹ̀ fi gbọ́dọ̀ fohùn ṣọ̀kan lórí òfin FMNR pẹ̀lú àwọn aládùúgbò?", options: ["Kí ẹran àti àwọn tó ń gé igi lè fi àwọn ẹ̀ka tí a yàn sílẹ̀", "Láti ta àwọn kùkùté", "Nítorí igi máa ń yára dàgbà lẹ́yìn ìpàdé", "Kò pọn dandan rárá"], answer: 0, why: "Ìfohùnṣọ̀kan àdúgbò ń dáàbò bo àwọn ẹ̀ka lọ́wọ́ ìjẹko àti gígé nígbà tí wọ́n ń dàgbà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àwọn èròǹgbà àti mímú ilẹ̀ padà",
        questions: [
          { objective: "O1", q: "Ilé ẹ̀kọ́ àgbẹ̀ lórí oko níbi tí àgbẹ̀ àti olùwádìí ti ń dán ọ̀nà wò papọ̀ jẹ́ àpẹẹrẹ èròjà agroecology wo?", options: ["Ṣíṣẹ̀dá ìmọ̀ papọ̀", "Ìlò ajílẹ̀ tó mọ́yán lórí", "Gbígbin irè kan ṣoṣo", "Ohun èlò tí a kó wọlé"], answer: 0, why: "Àgbẹ̀ àti olùwádìí tí wọ́n ń kẹ́kọ̀ọ́ papọ̀ ni ṣíṣẹ̀dá ìmọ̀ papọ̀." },
          { objective: "O1", q: "Ọ̀nà wo ló fi ìrànlọ́wọ́ ara-ẹni (synergy) hàn?", options: ["Títà gbogbo àjẹkù irè oko", "Irè ẹ̀yà ẹ̀wà tó ń fi nitrogen kún ilẹ̀ tí àgbàdo tó kàn ń lò", "Fífi ilẹ̀ sílẹ̀ ní òfìfo", "Sísun pòròpórò irè oko"], answer: 1, why: "Irè ẹ̀yà ẹ̀wà ń ran àgbàdo lọ́wọ́: apá méjì lórí oko ń ṣiṣẹ́ papọ̀." },
          { objective: "O2", q: "Oko kan ní Ghana ṣófo, ó sì le lẹ́yìn ìkórè. Kí ni o lè gbìn láti dáàbò bò ó àti láti bọ́ ọ kí àsìkò tó kàn tó dé?", options: ["Kò sí nǹkan; fi í sílẹ̀ ní òfìfo", "Irè kan náà lẹ́ẹ̀kan sí i pẹ̀lú ajílẹ̀ púpọ̀ sí i", "Irè ìbòlẹ̀ ẹ̀yà ẹ̀wà bí ẹ̀wà (cowpea) tàbí lablab", "Èpò nìkan"], answer: 2, why: "Irè ìbòlẹ̀ ẹ̀yà ẹ̀wà ń dáàbò bo ilẹ̀, ó sì ń fi nitrogen àti èròjà ohun alààyè kún un." },
          { objective: "O2", q: "Ewé tithonia ní èròjà ajílẹ̀ púpọ̀ ṣùgbọ́n gígé àti kíkó o ń gba iṣẹ́ púpọ̀. Ibo ló ti ń mérè wá jù?", options: ["Tí a tàn án díẹ̀díẹ̀ sórí oko àgbàdo ńlá", "Lórí irè oko olówó gíga bí ẹ̀fọ́", "Tí a sun ún fún eérú", "Tí a fi bọ́ ẹlẹ́dẹ̀ nìkan"], answer: 1, why: "Ìwádìí ní ìwọ̀-oòrùn Kenya rí i pé iṣẹ́ náà ń mérè wá jù lórí irè oko olówó gíga." },
          { objective: "O3", q: "Báwo ló ṣe yẹ kí o rẹ́ ẹ̀ka ẹ̀gbẹ́ ga tó lórí ẹ̀ka FMNR kékeré?", options: ["Má ṣe rẹ́ ẹ rárá", "Gé gbogbo ẹ̀ka náà dé ilẹ̀", "Títí dé òkè pátápátá", "Títí dé nǹkan bí ààbọ̀ gíga ẹ̀ka náà"], answer: 3, why: "Rírẹ́ ga jù ń sọ ẹ̀ka di aláìlágbára níwájú afẹ́fẹ́ àti ẹran." }
        ]
      }
    },
    {
      name: "Orí 2: Oko tó ń bọ́ ara rẹ̀",
      lessons: [
        {
          title: "Irè oko, ẹran ọ̀sìn àti onírúurú ẹ̀dá tó ń ṣiṣẹ́ papọ̀",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ya àwòrán bí oúnjẹ ẹran, ìgbẹ́ ẹran àti àjẹkù irè oko ṣe ń ṣàn láàárín irè oko àti ẹran rẹ.",
          text: [
            "Lórí oko àdàpọ̀, irè oko àti ẹran lè máa bọ́ ara wọn. Àjẹkù irè oko, irè ìbòlẹ̀, ewé igi àti ìyókù ọkà ń bọ́ ẹran; ẹran ń sọ wọ́n di wàrà, ẹran jíjẹ, ẹyin, agbára iṣẹ́ àti ìgbẹ́; ìgbẹ́ àti ìtọ̀ ẹran sì ń padà láti bọ́ ilẹ̀. Nígbà tí àwọn ìsopọ̀ yìí bá lágbára, owó díẹ̀ ló máa ń jáde kúrò lórí oko.",
            "Ya á. Fi àwọn oko rẹ, ẹran rẹ, ilé rẹ àti òkìtì compost tàbí ìgbẹ́ ẹran sórí ìwé, lẹ́yìn náà fa ọfà: pòròpórò sí ewúrẹ́, ìgbẹ́ ẹran sí oko ẹ̀fọ́, ìgbẹ́ adìẹ sí compost, omi adágún ẹja sí ẹ̀fọ́ lórí oko ẹja. Lẹ́yìn náà sàmì sí ibi tí nǹkan ti ń jò sọnù: àjẹkù irè oko tí a sun, ìgbẹ́ ẹran tí a fi sílẹ̀ nínú oòrùn àti òjò, ìtọ̀ tó sọnù, èso tí a tà láìsí ohunkóhun tó padà wá. Ibi kọ̀ọ̀kan tí nǹkan ti ń jò jẹ́ ibi tí o ti lè jèrè.",
            "Onírúurú ẹ̀dá (biodiversity) jẹ́ apá kan ètò náà pẹ̀lú. Igi, ọgbà ewéko, ìlà koríko àti ewéko tó ń tanná ń fún kòkòrò àti ẹyẹ tó ń jẹ kòkòrò ajẹnirun ní ibùgbé, àti fún oyin tó ń gbé eruku òdòdó fún ẹ̀wà, tòmátì àti kọfí. Onírúurú irè oko àti orísìí ń pín ewu. Fi àwọn igun ìgbẹ́ kan sílẹ̀, má ṣe fín oògùn nígbà tí kò pọn dandan, kí o sì gbin ju irè oko kan lọ.",
            "Ṣọ́ ìwọ̀ntúnwọ̀nsì: ẹran nílò oúnjẹ jálẹ̀ ẹ̀ẹ̀rùn, àjẹkù irè oko tí a fi bọ́ ẹran kò sì sí lórí ilẹ̀ mọ́ bí ìbòlẹ̀. Pinnu ìpín tó lọ síbo, kí o sì gbin oúnjẹ ẹran àfikún (ìlà koríko, igi oúnjẹ ẹran, lablab) kí o má bàa ní láti yan ọ̀kan."
          ],
          steps: ["Ya àwọn oko rẹ, ẹran rẹ, ilé rẹ àti òkìtì ìgbẹ́ ẹran.", "Fa ọfà fún ìṣàn kọ̀ọ̀kan: oúnjẹ ẹran, àjẹkù irè oko, ìgbẹ́, omi.", "Sàmì sí ibi tí nǹkan ti ń jò: sísun, ìgbẹ́ àti ìtọ̀ tó sọnù, kò sí ohun tó padà.", "Sàmì sí ibi fún onírúurú ẹ̀dá: ọgbà ewéko, igi, òdòdó, igun ìgbẹ́.", "Yan ibi kan tí nǹkan ti ń jò láti dí ní àsìkò yìí."],
          words: [["Oko àdàpọ̀ (mixed farming)", "gbígbin irè oko àti sísin ẹran lórí oko kan náà kí wọ́n lè ran ara wọn lọ́wọ́."], ["Ìṣàn èròjà ajílẹ̀", "bí èròjà ajílẹ̀ ṣe ń rìn yí oko ká, fún àpẹẹrẹ láti oúnjẹ ẹran sí ìgbẹ́ sí ilẹ̀."], ["Onírúurú ẹ̀dá (biodiversity)", "onírúurú ewéko, ẹran, kòkòrò àti ẹ̀dá alààyè inú ilẹ̀ lórí oko àti yí i ká."], ["Ọ̀tá àdánidá (natural enemies)", "kòkòrò, ẹyẹ àti ẹranko mìíràn tó ń jẹ kòkòrò ajẹnirun irè oko."]],
          slides: [
            { title: "Irè oko ń bọ́ ẹran, ẹran ń bọ́ ilẹ̀", bullets: ["Àjẹkù irè, oúnjẹ ẹran, ewé igi sí ẹran", "Wàrà, ẹran, ẹyin, agbára iṣẹ́ àti ìgbẹ́ padà wá", "Ìsopọ̀ tó lágbára = owó díẹ̀ tó ń jáde"] },
            { title: "Ya ìṣàn oko rẹ", bullets: ["Ọfà: oúnjẹ ẹran, ìgbẹ́, àjẹkù irè, omi", "Sàmì sí ibi tó ń jò: sísun, ìgbẹ́ àti ìtọ̀ tó sọnù", "Ibi kọ̀ọ̀kan tó ń jò jẹ́ èrè tó ń dúró dè ọ́"] },
            { title: "Onírúurú ẹ̀dá ń ṣiṣẹ́ fún ọ", bullets: ["Ọgbà ewéko àti òdòdó ń gbé ajẹkòkòrò àti oyin", "Onírúurú irè oko ń pín ewu", "Fín oògùn nígbà tó bá pọn dandan nìkan"] },
            { title: "Pín oúnjẹ ẹran àti ìbòlẹ̀ dọ́gba", bullets: ["Àjẹkù irè kò lè jẹ́ oúnjẹ ẹran àti ìbòlẹ̀ lẹ́ẹ̀kan náà", "Gbin oúnjẹ ẹran àfikún: ìlà koríko, lablab, igi"] }
          ],
          sources: [FAO_10, FAO_AGROFOR],
          tryIt: "Ya àwòrán ìṣàn oko rẹ pẹ̀lú ó kéré tán ọfà mẹ́ta láàárín irè oko àti ẹran. Sàmì sí ó kéré tán ibi kan tí nǹkan ti ń jò àti ibi kan tí o ti lè fi onírúurú ẹ̀dá kún un. Kọ ibi kan tí nǹkan ti ń jò tí o máa dí ní àsìkò yìí.",
          youCanNow: "ya àwòrán bí oúnjẹ ẹran, ìgbẹ́ ẹran àti àjẹkù irè oko ṣe ń ṣàn lórí oko rẹ, kí o sì rí ibi tí nǹkan ti ń jò láti dí.",
          quickCheck: [
            { objective: "O4", q: "Lórí àwòrán ìṣàn, èwo nínú ìwọ̀nyí ni ibi tí nǹkan ti ń jò sọnù?", options: ["Pòròpórò tí a fi bọ́ ewúrẹ́", "Ìgbẹ́ ẹran tí a tàn sórí oko ẹ̀fọ́", "Ìgbẹ́ ẹran tí a fi sílẹ̀ nínú oòrùn àti òjò títí omi fi gbé e lọ", "Ìgbẹ́ adìẹ tí a fi kún compost"], answer: 2, why: "Ìgbẹ́ ẹran tí oòrùn àti òjò ń bá ń pàdánù èròjà ajílẹ̀ tí ì bá padà sínú ilẹ̀." },
            { objective: "O4", q: "Kí nìdí tí a fi ń fi ọgbà ewéko, igi àti ewéko tó ń tanná sílẹ̀ yí oko ká?", options: ["Wọ́n ń gbé ọ̀tá àdánidá kòkòrò ajẹnirun àti àwọn tó ń gbé eruku òdòdó", "Wọ́n máa ń dín ìkórè kù nígbà gbogbo", "Fún ẹwà nìkan ni", "Wọ́n ń dá òjò dúró"], answer: 0, why: "Ibùgbé fún ajẹkòkòrò àti oyin jẹ́ iṣẹ́ ọ̀fẹ́ fún irè oko rẹ." }
          ]
        },
        {
          title: "Dídín owó ajílẹ̀ tí a kó wọlé kù",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ṣírò iye àpò ajílẹ̀ tí a rà tí èròjà láti inú oko lè rọ́pò, àti owó tí o máa fi pamọ́.",
          text: [
            "Ọ̀pọ̀ jù lọ ajílẹ̀ oníkẹ́míkà (mineral fertilizer) tí a ń lò ní Áfíríkà ni a ń kó wọlé láti òkèèrè, nítorí náà owó rẹ̀ ń tẹ̀lé ọjà àgbáyé àti iye pàṣípààrọ̀ owó. Agroecology ní èrò láti nílò rẹ̀ díẹ̀, kì í ṣe láti má lò ó rárá nígbà gbogbo. Bẹ̀rẹ̀ láti ohun tí o lò ní àsìkò tó kọjá: àpò mélòó, irú wo, lórí oko wo, àti iye tí wọ́n jẹ́.",
            "Lẹ́yìn náà kọ èròjà ajílẹ̀ láti inú oko tí o lè fi kún un: irè ìbòlẹ̀ ẹ̀yà ẹ̀wà àti irè tí a gbìn papọ̀ (nitrogen), igi ajílẹ̀ àti ajílẹ̀ ewé, ìgbẹ́ àti ìtọ̀ ẹran tó pọ̀ jù tí a sì tọ́jú dáadáa, bio-slurry tí o bá ní ẹ̀rọ biodigester, àti àjẹkù irè oko tí a fi sílẹ̀ lórí oko. Ajílẹ̀ oníkẹ́míkà díẹ̀ tí a dà pọ̀ mọ́ ìwọ̀nyí máa ń ṣiṣẹ́ jù ọ̀kan nínú wọn nìkan lọ. Nínú ìdánwò Malawi, àgbàdo pẹ̀lú gliricidia àti ààbọ̀ ajílẹ̀ tí a dámọ̀ràn ṣe dáadáa bíi ti àgbàdo pẹ̀lú ajílẹ̀ kíkún.",
            "Ṣírò, lẹ́yìn náà dán an wò. Fún àpẹẹrẹ (iye àròsọ): àgbẹ̀ kan ní Kakamega lo àpò 4 lórí éékà kan ní KES 3,500 fún àpò kan. Pẹ̀lú lablab tí ó gbìn sáàárín irè àti ìgbẹ́ ẹran púpọ̀ sí i, ó ṣètò láti dán àpò 2 wò lórí ààbọ̀ oko àti àpò 4 lórí ààbọ̀ kejì, kí ó sì fi ìkórè wé ara wọn. Tí ìkórè bá dọ́gba, ó fi àpò 2 pamọ́, KES 7,000, lórí éékà yẹn. Má ṣe dín ajílẹ̀ kù lójijì lórí gbogbo ilẹ̀ rẹ.",
            "Ní kí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí ilé ìwádìí ilẹ̀ (soil lab) ṣàyẹ̀wò ètò rẹ pẹ̀lú èsì àyẹ̀wò ilẹ̀ rẹ, kí o sì ra ajílẹ̀ oníkẹ́míkà lọ́wọ́ olùtajà ohun èlò oko tí a forúkọ rẹ̀ sílẹ̀ nìkan, nínú àpò tí a dì pa."
          ],
          steps: ["Kọ ajílẹ̀ àsìkò tó kọjá: àpò, irú, oko, iye owó.", "Kọ èròjà ajílẹ̀ láti inú oko tí o lè fi kún un.", "Ṣètò ìwọ̀n tó dín kù lórí apá kan oko, pẹ̀lú èròjà láti inú oko.", "Fi ìlà kan tí ó gba ìwọ̀n kíkún sílẹ̀ láti fi wéra.", "Ṣírò àpò àti owó tí o máa fi pamọ́ tí ìkórè bá dúró.", "Ṣàyẹ̀wò ètò náà pẹ̀lú extension; mú èyí tó ṣiṣẹ́ nìkan gbòòrò sí i."],
          words: [["Ajílẹ̀ oníkẹ́míkà (mineral fertilizer)", "ajílẹ̀ tí a ṣe ní ilé-iṣẹ́, bí urea, DAP tàbí NPK, tí a sábà máa ń tà nínú àpò."], ["Ìtọ́jú ọ̀rá ilẹ̀ alápapọ̀ (integrated soil fertility management)", "dída èròjà ohun alààyè (ìgbẹ́ ẹran, irè ẹ̀yà ẹ̀wà, àjẹkù irè oko) pọ̀ mọ́ ajílẹ̀ oníkẹ́míkà díẹ̀."], ["Ìlà ìfiwéra", "apá kan oko tí a ṣe ní ọ̀nà àtijọ́ kí o lè fi èsì wéra lọ́nà tó tọ́."]],
          slides: [
            { title: "Ìdí tí a fi ń dín ajílẹ̀ tí a kó wọlé kù", bullets: ["Owó rẹ̀ ń tẹ̀lé ọjà àgbáyé àti pàṣípààrọ̀ owó", "Èrò ni láti nílò díẹ̀, kì í ṣe òfo nígbà gbogbo", "Bẹ̀rẹ̀ láti àpò àti owó àsìkò tó kọjá"] },
            { title: "Èròjà ajílẹ̀ láti inú oko", bullets: ["Ìbòlẹ̀ ẹ̀yà ẹ̀wà, irè àdàpọ̀, igi ajílẹ̀", "Ìgbẹ́, ìtọ̀, bio-slurry, àjẹkù irè oko", "Dà á pọ̀ mọ́ ajílẹ̀ oníkẹ́míkà díẹ̀"] },
            { title: "Dán an wò kí o tó dín in kù", bullets: ["Àpẹẹrẹ: àpò 2 sí àpò 4 lórí ààbọ̀ oko", "Ìkórè kan náà = àpò 2, KES 7,000 tí a fi pamọ́ (àròsọ)", "Má ṣe dín gbogbo rẹ̀ kù lẹ́ẹ̀kan náà"] },
            { title: "Ṣàyẹ̀wò, kí o sì ra láìléwu", bullets: ["Extension tàbí ilé ìwádìí ilẹ̀ ń ṣàyẹ̀wò ètò rẹ", "Olùtajà tí a forúkọ rẹ̀ sílẹ̀, àpò tí a dì pa"] }
          ],
          sources: [GLIRICIDIA, HANDBOOK_4R],
          tryIt: "Kọ ajílẹ̀ tí o lò ní àsìkò tó kọjá fún oko kan. Kọ orísun èròjà ajílẹ̀ méjì láti inú oko tí o máa fi kún un. Ṣètò ìdánwò ààbọ̀ oko pẹ̀lú ìwọ̀n tó dín kù, kí o sì ṣírò àpò àti owó tí o máa fi pamọ́ tí ìkórè bá dúró, ní owó orílẹ̀-èdè rẹ.",
          youCanNow: "ṣírò iye ajílẹ̀ tí a rà tí èròjà láti inú oko lè rọ́pò, kí o sì ṣètò ìdánwò tó tọ́ kí o tó dín in kù.",
          quickCheck: [
            { objective: "O5", q: "O fẹ́ lo ajílẹ̀ díẹ̀. Kí ni ìgbésẹ̀ àkọ́kọ́ tí kò léwu jù?", options: ["Dá gbogbo ajílẹ̀ dúró lórí gbogbo oko lẹ́ẹ̀kan náà", "Ṣe ajílẹ̀ ní ìlọ́po méjì", "Ra ajílẹ̀ tí kò ní àmì nítorí ó dín owó", "Dán ìwọ̀n tó dín kù pẹ̀lú èròjà láti inú oko wò lórí apá kan oko, lẹ́gbẹ̀ẹ́ ìlà ìwọ̀n kíkún"], answer: 3, why: "Ìdánwò ẹ̀gbẹ́-sí-ẹ̀gbẹ́ ń fi hàn bóyá ìwọ̀n tó dín kù ṣiṣẹ́ kí o tó fi gbogbo ìkórè wewu." },
            { objective: "O5", q: "Àgbẹ̀ kan ní Nàìjíríà lo àpò 6 ní NGN 40,000 fún ọ̀kọ̀ọ̀kan, ó sì dín in kù sí 4 pẹ̀lú ìkórè kan náà. Èló ló fi pamọ́?", options: ["NGN 40,000", "NGN 80,000", "NGN 240,000", "Kò sí nǹkan"], answer: 1, why: "Àpò 2 × NGN 40,000 = NGN 80,000 (iye àpẹẹrẹ)." }
          ]
        },
        {
          title: "Wíwọn ìtẹ̀síwájú láti àsìkò dé àsìkò",
          objectives: ["O6", "O2", "O5"],
          minutes: 5,
          goal: "Kọ àwọn òdiwọ̀n ilẹ̀ àti oko tó rọrùn sílẹ̀ ní àkókò kan náà ní àsìkò kọ̀ọ̀kan.",
          text: [
            "Mímú ilẹ̀ padà bọ̀ sípò kì í yára. Ìkórè lè má gòkè lójijì ní àsìkò àkọ́kọ́, nítorí náà o nílò àwọn àmì mìíràn láti rí bóyá ilẹ̀ ń padà bọ̀. Wọn àwọn ibi kan náà, ní oṣù kan náà, ní gbogbo àsìkò, kí o sì kọ ọ́ sílẹ̀.",
            "Àwọn òdiwọ̀n tó rọrùn: ìbòlẹ̀ (iye ilẹ̀ tí ewéko tàbí ìbòlẹ̀ bò; fojú díwọ̀n rẹ̀ tàbí kà á nínú onígun mẹ́rin kan); ekòló (wa erùpẹ̀ tó tóbi tó ṣọ́bìrì kan, kí o sì kà wọ́n); bí omi ṣe ń wọ ilẹ̀ (infiltration: ti agolo tí a gé ìsàlẹ̀ àti òkè rẹ̀ kúrò bọ inú ilẹ̀, da omi sínú rẹ̀, kí o sì ka àkókò tí ó gbà láti wọlé); òórùn ilẹ̀ àti bí ó ṣe ń fọ́ (ṣé ó ń fọ́ sí wẹ́wẹ́ tàbí sí ògúlùtu ńlá tó le?); fọ́tò ilẹ̀ láti ibi kan náà; ìkórè láti ilẹ̀ kan tí a sàmì sí; àti àpò ajílẹ̀ àti owó tí o ná.",
            "Ní ọdún mélòó kan lẹ́ẹ̀kan, àyẹ̀wò ilẹ̀ ní ilé ìwádìí lè fi èròjà ohun alààyè àti èròjà ajílẹ̀ hàn (wo ẹ̀kọ́ \"Ìlera Ilẹ̀ àti Ọ̀rá Rẹ̀\" fún bí a ṣe ń mú àpẹẹrẹ ilẹ̀). Tí ó bá ṣeé ṣe, fi oko tí o ń mú padà bọ̀ sípò wé oko kan tí o kò yí padà.",
            "Fóònù ń ṣèrànwọ́: ya fọ́tò láti ibi kan náà, tọ́jú àwọn nọ́ńbà rẹ sínú ìwé àkọsílẹ̀ fóònù tàbí spreadsheet, kí o sì ní kí olùrànlọ́wọ́ AI sọ wọ́n di tábìlì tàbí àwòrán àtẹ ìsọfúnni tó rọrùn. Oko rẹ ni àwọn nọ́ńbà náà ti wá."
          ],
          steps: ["Sàmì sí ibi mẹ́ta lórí oko pẹ̀lú igi tàbí òkúta.", "Yan ó kéré tán òdiwọ̀n mẹ́rin: ìbòlẹ̀, ekòló, omi wíwọlé, fífọ́ ilẹ̀, fọ́tò, ìkórè, owó.", "Kọ wọ́n sílẹ̀ ní oṣù kan náà ní àsìkò kọ̀ọ̀kan.", "Fi wé ti àsìkò tó kọjá àti oko tí a kò yí padà.", "Tún ètò rẹ wò: pa èyí tó ṣiṣẹ́ mọ́, yí èyí tí kò ṣiṣẹ́ padà."],
          words: [["Àmì (indicator)", "àmì tó rọrùn tí o ń wọ̀n láti rí bóyá nǹkan ń dára sí i tàbí ń burú sí i."], ["Omi wíwọlé (infiltration)", "bí omi ṣe ń yára wọ inú ilẹ̀ tó."], ["Ìbòlẹ̀ (ground cover)", "ìpín ojú ilẹ̀ tí ewéko tàbí ìbòlẹ̀ (mulch) bò."], ["Òdiwọ̀n àkọ́kọ́ (baseline)", "òdiwọ̀n rẹ àkọ́kọ́, tí a máa fi àwọn tó kàn wé."]],
          slides: [
            { title: "Ìyípadà tó lọ́ra nílò wíwọ̀n", bullets: ["Ìkórè lè má gòkè ní àsìkò àkọ́kọ́", "Ibi kan náà, oṣù kan náà, ní gbogbo àsìkò", "Kọ ọ́ sílẹ̀"] },
            { title: "Àwọn òdiwọ̀n tó rọrùn", bullets: ["Ìbòlẹ̀ àti iye ekòló", "Omi wíwọlé: ka àkókò tí omi gbà láti wọlé", "Fífọ́ ilẹ̀, fọ́tò, ìkórè, owó ajílẹ̀"] },
            { title: "Fi wéra", bullets: ["Pẹ̀lú àsìkò tó kọjá (òdiwọ̀n àkọ́kọ́ rẹ)", "Pẹ̀lú oko tí a kò yí padà", "Àyẹ̀wò ilé ìwádìí ní ọdún mélòó kan lẹ́ẹ̀kan"] },
            { title: "Fóònù rẹ ń ṣèrànwọ́", bullets: ["Fọ́tò láti ibi kan náà", "Nọ́ńbà nínú ìwé àkọsílẹ̀ tàbí spreadsheet", "AI lè tò wọ́n sínú tábìlì"] }
          ],
          sources: [FAO_SOM, FAO_AE],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò àsìkò mẹ́ta rẹ láti mú oko kan padà bọ̀ sípò, pẹ̀lú àwòrán. Lẹ́yìn náà gba òdiwọ̀n àkọ́kọ́ rẹ lónìí: sàmì sí ibi mẹ́ta, kí o sì kọ ó kéré tán òdiwọ̀n mẹ́rin sílẹ̀ (fún àpẹẹrẹ ìbòlẹ̀, iye ekòló, àkókò omi wíwọlé àti fọ́tò kan).",
          youCanNow: "wọn ilẹ̀ àti oko rẹ pẹ̀lú àwọn àmì tó rọrùn ní àsìkò kọ̀ọ̀kan, kí o sì fi wọ́n ṣèdájọ́ ètò rẹ láti mú ilẹ̀ padà bọ̀ sípò.",
          quickCheck: [
            { objective: "O6", q: "Kí nìdí tí a fi ń wọn ibi kan náà ní oṣù kan náà ní gbogbo àsìkò?", options: ["Ó dára lójú", "Kí ìfiwéra lè tọ́, kí ó sì fi ìyípadà gidi hàn", "Nítorí ekòló máa ń hàn ní oṣù kan ṣoṣo", "Láti lo ìwé púpọ̀ sí i"], answer: 1, why: "Ibi àti àkókò kan náà ń mú àwọn ìdí mìíràn kúrò, kí ìyípadà lè jẹ́ ti ilẹ̀ gan-an." },
            { objective: "O6", q: "Omi inú agolo omi wíwọlé rẹ ń wọ ilẹ̀ yára ju ti ọdún tó kọjá lọ. Kí ni ó fi hàn?", options: ["Ilẹ̀ ń burú sí i", "Agolo náà ti bàjẹ́", "Kò fi nǹkan kan hàn", "Ìṣètò ilẹ̀ ń dára sí i, ó sì ń gba omi òjò púpọ̀ sí i dúró"], answer: 3, why: "Omi wíwọlé tó yára túmọ̀ sí pé omi òjò púpọ̀ ń wọ inú ilẹ̀ dípò kí ó ṣàn lọ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Oko tó ń bọ́ ara rẹ̀",
        questions: [
          { objective: "O4", q: "Ọfà wo ló yẹ lórí àwòrán ìṣàn irè oko àti ẹran ọ̀sìn?", options: ["Pòròpórò àgbàdo sí ewúrẹ́, àti ìgbẹ́ ewúrẹ́ sí oko àgbàdo", "Ajílẹ̀ láti ìlú sí ṣọ́ọ̀bù", "Òjò láti ojú ọ̀run sí odò", "Káàdì ìpè fóònù sí àgbẹ̀"], answer: 0, why: "Oúnjẹ sí ẹran àti ìgbẹ́ padà sí oko ni ìṣàn èròjà ajílẹ̀ ti oko fúnra rẹ̀." },
          { objective: "O4", q: "A nílò àjẹkù irè oko fún oúnjẹ ẹran ní ẹ̀ẹ̀rùn àti fún ìbòlẹ̀. Kí ló ń ṣèrànwọ́ jù?", options: ["Sun ààbọ̀ rẹ̀", "Gbin oúnjẹ ẹran àfikún bí ìlà koríko, lablab tàbí igi oúnjẹ ẹran", "Ta àwọn ẹran", "Fi oko sílẹ̀ ní òfìfo"], answer: 1, why: "Oúnjẹ ẹran àfikún ń dín ìdíje láàárín bíbọ́ ẹran àti bíbo ilẹ̀ kù." },
          { objective: "O5", q: "Kí ni ìdánwò gígùn ní Malawi rí fún àgbàdo pẹ̀lú gliricidia àti ààbọ̀ ajílẹ̀?", options: ["Ó kùnà nígbà gbogbo", "Ó nílò ajílẹ̀ ní ìlọ́po méjì", "Ìkórè dára bíi ti àgbàdo pẹ̀lú ajílẹ̀ kíkún", "Igi pa àgbàdo"], answer: 2, why: "Gliricidia pẹ̀lú ààbọ̀ ajílẹ̀ mú ìkórè tó jọ ti ajílẹ̀ kíkún wá ní Makoka." },
          { objective: "O5", q: "Ibo ló yẹ kí o ti ra ajílẹ̀ oníkẹ́míkà tí o ṣì ń lò?", options: ["Lọ́wọ́ olùtajà ẹ̀gbẹ́ ọ̀nà èyíkéyìí tí àpò rẹ̀ ṣí sílẹ̀", "Láti ìpolówó orí ayélujára tí kò ní àdírẹ́sì", "Láti inú àpò àṣẹ́kù aládùúgbò", "Lọ́wọ́ olùtajà ohun èlò oko tí a forúkọ rẹ̀ sílẹ̀, nínú àpò tí a dì pa"], answer: 3, why: "Olùtajà tí a forúkọ rẹ̀ sílẹ̀ àti àpò tí a dì pa ń dín ewu ajílẹ̀ ayédèrú tàbí àdàlù kù." },
          { objective: "O6", q: "Kí ni òdiwọ̀n àkọ́kọ́ (baseline)?", options: ["Ìsàlẹ̀ oko", "Irú ajílẹ̀ kan", "Òdiwọ̀n àkọ́kọ́ tí a máa fi àwọn tó kàn wé", "Ìkórè ìkẹyìn tí o máa ṣe láéláé"], answer: 2, why: "Láìsí òdiwọ̀n àkọ́kọ́, o kò lè mọ̀ bóyá nǹkan ti dára sí i." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Agroecology àti Mímú Ilẹ̀ Padà Bọ̀ Sípò",
    questions: [
      { objective: "O1", q: "Àjọ wo ló ṣàpèjúwe èròjà 10 ti agroecology?", options: ["FIFA", "FAO", "Ilé-iṣẹ́ irúgbìn kan", "Banki Àgbáyé (World Bank) nìkan"], answer: 1, why: "Àwọn orílẹ̀-èdè ọmọ ẹgbẹ́ FAO ló gba èròjà 10 ti agroecology ní 2019." },
      { objective: "O1", q: "Dídá àjẹkù irè oko àti ìgbẹ́ ẹran padà sínú ilẹ̀ ń lo èròǹgbà wo?", options: ["Gbígbin irè kan ṣoṣo", "Ìṣàkóso", "Ohun tí a kó wọlé", "Àtúnlò"], answer: 3, why: "Dídá àjẹkù irè oko àti ìgbẹ́ ẹran padà ń tún èròjà ajílẹ̀ lò." },
      { objective: "O1", q: "Títa ẹ̀fọ́ fún ilé ẹ̀kọ́ àdúgbò àti rírà irúgbìn lọ́wọ́ ẹgbẹ́ alájùmọ̀ṣe àdúgbò jẹ́ àpẹẹrẹ:", options: ["Ìlò katakata tó mọ́yán lórí", "Ìrànlọ́wọ́ ara-ẹni ti kòkòrò ajẹnirun", "Ọrọ̀ ajé àtúnlò àti ìfọwọ́sowọ́pọ̀", "Ìwọlẹ̀ ilẹ̀ (erosion)"], answer: 2, why: "Rírà àti títà ní àdúgbò lọ́nà tó tọ́ ni èròjà ọrọ̀ ajé àtúnlò àti ìfọwọ́sowọ́pọ̀." },
      { objective: "O2", q: "Irè wo ni irè ẹ̀yà ẹ̀wà tí a sábà máa ń lò bí irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko?", options: ["Àgbàdo", "Ọkà bàbà", "Ìrẹsì", "Lablab"], answer: 3, why: "Lablab jẹ́ irè ẹ̀yà ẹ̀wà tó ń bo ilẹ̀, tó ń fi nitrogen kún un, tó sì ń fúnni ní oúnjẹ ẹran." },
      { objective: "O2", q: "Kí ni gbíngbìn sáàárín irè (relay cropping)?", options: ["Gbígbin irè kejì sáàárín irè tó wà lórí oko kí a tó kórè èkíní", "Sísun àjẹkù irè oko ní ìlà", "Gbígbin lẹ́ẹ̀kan ní ọdún méjì méjì nìkan", "Gbígbé irè oko nínú ọkọ̀ akẹ́rù"], answer: 0, why: "Gbíngbìn sáàárín irè ń jẹ́ kí irè ìbòlẹ̀ bẹ̀rẹ̀ sí dàgbà kí a tó kórè irè oko pàtàkì." },
      { objective: "O2", q: "Kí nìdí tí a fi ń gé ajílẹ̀ ewéko kí ó tó so irúgbìn líle?", options: ["Irúgbìn jẹ́ májèlé fún ilẹ̀", "Ó ń dá a dúró láti di èpò àti láti bá irè oko tó kàn jà", "Irúgbìn líle ń mú òjò rọ̀", "Òfin ní kí a ṣe bẹ́ẹ̀"], answer: 1, why: "Gígé ní àkókò ń dá ìjà dúró, ó sì ń dá èéhù tí a kò fẹ́ dúró." },
      { objective: "O2", q: "Kí ni ilẹ̀ tó ti bàjẹ́?", options: ["Ilẹ̀ tí igi pọ̀ jù lórí rẹ̀", "Ilẹ̀ tí omi bò", "Ilẹ̀ tó ti pàdánù erùpẹ̀, èròjà ohun alààyè tàbí ìbòlẹ̀, tí kò fi bẹ́ẹ̀ méso mọ́", "Ilẹ̀ tó ní ìwé ẹ̀rí oníǹkan"], answer: 2, why: "Ilẹ̀ tó ti bàjẹ́ ti pàdánù àwọn nǹkan tó ń jẹ́ kí ó méso." },
      { objective: "O3", q: "Kí ni FMNR ń lò láti mú igi padà wá?", options: ["Irúgbìn igi tí a rà nìkan", "Kùkùté alààyè, gbòǹgbò àti irúgbìn tó ti wà nínú ilẹ̀", "Igi ike", "Abẹ́rẹ́ ajílẹ̀"], answer: 1, why: "FMNR ń dáàbò bo ohun tó ti ń hù padà láti inú ilẹ̀, ó sì ń rẹ́ ẹ." },
      { objective: "O3", q: "Nǹkan bí ilẹ̀ oko tó tó báwo ní Niger ni igi ti padà sí nípasẹ̀ FMNR?", options: ["Nǹkan bí hẹ́kítà 10", "Nǹkan bí hẹ́kítà 500", "Kò sí", "Ó ju mílíọ̀nù márùn-ún hẹ́kítà lọ"], answer: 3, why: "FMNR tàn láti àgbẹ̀ kan sí òmíràn dé ohun tó ju mílíọ̀nù márùn-ún hẹ́kítà lọ ní Niger." },
      { objective: "O3", q: "Nígbà tí o bá ń rẹ́ ẹ̀ka FMNR, o gbọ́dọ̀:", options: ["Lo irinṣẹ́ tó mú, kí o sì gé e sókè", "Lo irinṣẹ́ tó kú, kí o sì gé e sísàlẹ̀", "Bó èèpo rẹ̀", "Rẹ́ ẹ dé òkè pátápátá"], answer: 0, why: "Gígé sókè pẹ̀lú irinṣẹ́ tó mú máa ń yára jinná, kò sì fi bẹ́ẹ̀ ṣe ìbàjẹ́." },
      { objective: "O3", q: "Èwo ni igi ajílẹ̀ tó wọ́pọ̀ nínú oko onígi ní Sahel bí agbègbè ẹ̀pà ní Senegal?", options: ["Eucalyptus", "Faidherbia", "Mángòrò", "Pine"], answer: 1, why: "Faidherbia jẹ́ igi ẹ̀yà ẹ̀wà tí a ń fi sílẹ̀ káàkiri nínú oko onígi ní Sahel." },
      { objective: "O4", q: "Èwo ni ibi tí nǹkan ti ń jò sọnù lórí àwòrán ìṣàn èròjà ajílẹ̀ oko?", options: ["Ìgbẹ́ ẹran tí a tàn sórí oko", "Àjẹkù irè oko tí a fi bọ́ ewúrẹ́", "Sísun àjẹkù irè oko", "Ìgbẹ́ adìẹ nínú compost"], answer: 2, why: "Sísun ń rán èròjà ajílẹ̀ àti èròjà ohun alààyè lọ sókè nínú èéfín." },
      { objective: "O4", q: "Báwo ni ọgbà ewéko àti ewéko tó ń tanná ṣe ń ran irè oko lọ́wọ́?", options: ["Wọ́n ń gbé ajẹkòkòrò àti àwọn tó ń gbé eruku òdòdó", "Wọ́n máa ń fa kòkòrò ajẹnirun púpọ̀ sí i nígbà gbogbo", "Wọ́n ń mú ilẹ̀ korò (acid)", "Wọ́n ń dá òjò dúró kí ó má dé irè oko"], answer: 0, why: "Ibùgbé fún ọ̀tá àdánidá àti oyin jẹ́ iṣẹ́ ọ̀fẹ́ fún irè oko." },
      { objective: "O4", q: "Lórí oko ẹja tilapia àti ẹ̀fọ́, èwo ni ìsopọ̀ tó wúlò?", options: ["Dída ìdọ̀tí ẹja sínú odò", "Lílo omi adágún láti bomi rin ẹ̀fọ́", "Dída omi adágún sójú ọ̀nà", "Sísun ẹ̀fọ́"], answer: 1, why: "Omi adágún tó ní èròjà ajílẹ̀ ń bọ́ ẹ̀fọ́: ìsopọ̀ irè oko àti ẹran." },
      { objective: "O5", q: "Kí nìdí tí owó ajílẹ̀ oníkẹ́míkà fi ń yí padà púpọ̀ ní ọ̀pọ̀ orílẹ̀-èdè Áfíríkà?", options: ["Lórí oko ni a ti ń gbìn ín", "Ó dá lórí òjò", "Kì í yí padà rárá", "A ń kó ọ̀pọ̀ jù lọ rẹ̀ wọlé, nítorí náà ó ń tẹ̀lé owó àgbáyé àti pàṣípààrọ̀ owó"], answer: 3, why: "Ohun èlò tí a kó wọlé ń tẹ̀lé ọjà àgbáyé àti ìyípadà owó." },
      { objective: "O5", q: "Àgbẹ̀ kan ní Ghana lo àpò 5 ní GHS 400 fún ọ̀kọ̀ọ̀kan, ó sì dín in kù sí 3 pẹ̀lú ìkórè kan náà. Èló ló fi pamọ́?", options: ["GHS 800", "GHS 400", "GHS 2,000", "GHS 1,200"], answer: 0, why: "Àpò 2 × GHS 400 = GHS 800 (iye àpẹẹrẹ)." },
      { objective: "O5", q: "Kí ni ìtọ́jú ọ̀rá ilẹ̀ alápapọ̀ (integrated soil fertility management)?", options: ["Lílo ajílẹ̀ oníkẹ́míkà nìkan", "Láì lo èròjà ajílẹ̀ kankan rárá", "Dída èròjà ohun alààyè pọ̀ mọ́ ajílẹ̀ oníkẹ́míkà díẹ̀", "Ṣíṣe àyẹ̀wò ilẹ̀ ní ọ̀sẹ̀ kọ̀ọ̀kan"], answer: 2, why: "Ó ń da orísun ohun alààyè àti oníkẹ́míkà pọ̀ kí ọ̀kọ̀ọ̀kan lè ṣiṣẹ́ dáadáa sí i." },
      { objective: "O6", q: "Èwo ni òdiwọ̀n tó rọrùn fún ìtẹ̀síwájú ilẹ̀?", options: ["Àwọ̀ fóònù rẹ", "Bí omi ṣe ń yára wọ inú ilẹ̀ tó", "Owó àgbàdo ní ìlú", "Iye àwọn àlejò"], answer: 1, why: "Omi wíwọlé tó yára ń fi ìṣètò ilẹ̀ tó dára sí i hàn." },
      { objective: "O6", q: "Kí nìdí tí o fi máa fi oko tí o ń mú padà bọ̀ sípò wé oko tí a kò yí padà?", options: ["Láti rí bóyá ìyípadà wá láti ọ̀nà tí o lò, kì í ṣe láti ojú-ọjọ́ nìkan", "Láti lo irúgbìn púpọ̀ sí i", "Nítorí àwọn aládùúgbò ń béèrè", "Kò yí nǹkan kan padà"], answer: 0, why: "Oko ìfiwéra ń fi ohun tí ì bá ṣẹlẹ̀ bí ó ti wù kí ó rí hàn." },
      { objective: "O6", q: "Òdiwọ̀n mélòó ló yẹ kí o kọ sílẹ̀ ní àsìkò kọ̀ọ̀kan lórí oko tí o ń mú padà bọ̀ sípò?", options: ["Kò sí", "Ọ̀kan, ìkórè nìkan", "Òjò nìkan", "Ó kéré tán mẹ́rin, bí ìbòlẹ̀, ekòló, omi wíwọlé àti ìkórè"], answer: 3, why: "Òdiwọ̀n púpọ̀ ń fi ìyípadà hàn kódà kí ìkórè tó gòkè." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 3, 6, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Ó tó tàbí ó ju bẹ́ẹ̀ lọ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì tó\", tún apá ètò yẹn ṣe, kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Èròǹgbà tí a dárúkọ", objective: "O1", notYet: "Ètò náà kò sọ àwọn èròǹgbà agroecology tí ó ń lò.", meets: "Ọ̀nà kọ̀ọ̀kan nínú ètò náà ni a so mọ́ èròǹgbà agroecology kan.", exceeds: "Ó lo ó kéré tán èròǹgbà mẹ́rin tó yàtọ̀, títí kan ọ̀kan lára àwọn èròjà ènìyàn." },
      { name: "Irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko", objective: "O2", notYet: "Kò sí irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko, tàbí kò sí ọjọ́.", meets: "Irú ọ̀gbìn tó bá òjò mu, pẹ̀lú ọjọ́ gbíngbìn àti ọjọ́ gígé.", exceeds: "Ó tún ṣàlàyé bí ó ṣe bá oúnjẹ ẹran àti irè oko pàtàkì mu, òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ sì ti ṣàyẹ̀wò rẹ̀." },
      { name: "Igi", objective: "O3", notYet: "Kò sí ètò igi, tàbí igi tí kò ní ààbò.", meets: "FMNR tàbí igi ajílẹ̀ pẹ̀lú ẹ̀ka tàbí irú igi, rírẹ́ ẹ̀ka àti ààbò lọ́wọ́ ẹran àti iná.", exceeds: "Ó ní ìfohùnṣọ̀kan àdúgbò tàbí òfin ìjọba ìbílẹ̀ (by-law), àti bí a ṣe máa gé ẹ̀ka lò, tí a sì máa rọ́pò wọn." },
      { name: "Ìsopọ̀ irè oko àti ẹran ọ̀sìn", objective: "O4", notYet: "Kò sí àwòrán ìṣàn, tàbí ìsopọ̀ kan ṣoṣo.", meets: "Àwòrán ìṣàn pẹ̀lú ó kéré tán ìsopọ̀ mẹ́ta àti ibi kan tí nǹkan ti ń jò láti dí.", exceeds: "Ó fi bí a ṣe ń pín àjẹkù irè oko láàárín oúnjẹ ẹran àti ìbòlẹ̀ hàn, àti ibi tí a ti fi onírúurú ẹ̀dá kún un." },
      { name: "Owó ajílẹ̀ tí a fi pamọ́", objective: "O5", notYet: "Kò sí àfojúdíwọ̀n, tàbí ó ṣètò láti dá ajílẹ̀ dúró lórí gbogbo ilẹ̀ lẹ́ẹ̀kan náà.", meets: "Ó ṣírò àpò àti owó tí a fi pamọ́ ní owó orílẹ̀-èdè rẹ̀, pẹ̀lú ìdánwò tó tọ́ lẹ́gbẹ̀ẹ́ ìlà ìwọ̀n kíkún.", exceeds: "Òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí èsì àyẹ̀wò ilẹ̀ ti ṣàyẹ̀wò ètò náà, pẹ̀lú òfin fún ìgbà tí a máa mú un gbòòrò sí i." },
      { name: "Òdiwọ̀n láti àsìkò dé àsìkò", objective: "O6", notYet: "Kò sí òdiwọ̀n tàbí kò sí òdiwọ̀n àkọ́kọ́.", meets: "Ó kéré tán òdiwọ̀n mẹ́rin, òdiwọ̀n àkọ́kọ́ tí a ti gbà, àti ọjọ́ kan fún àsìkò kọ̀ọ̀kan.", exceeds: "Ó ní oko ìfiwéra tí a kò yí padà àti fọ́tò láti àwọn ibi tí kò yí padà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gbin irè ìbòlẹ̀ tàbí ajílẹ̀ ewéko, tàbí tí wọ́n bẹ̀rẹ̀ FMNR, láàárín àsìkò tó ń bọ̀ (ìwádìí lẹ́yìn ẹ̀kọ́)",
      "Ìyípadà nínú ajílẹ̀ tí a rà fún éékà kan lórí oko tí a ń mú padà bọ̀ sípò láàárín àsìkò méjì (àkọsílẹ̀ akẹ́kọ̀ọ́)",
      "Ìyípadà nínú àwọn òdiwọ̀n ilẹ̀ (ìbòlẹ̀, omi wíwọlé, iye ekòló) àti ìkórè lórí oko tí a ń mú padà bọ̀ sípò láàárín àsìkò mẹ́ta",
      "Iye àwọn aládùúgbò tàbí ọmọ ẹgbẹ́ tí wọ́n ṣe àfarawé ọ̀nà kan (ìròyìn extension)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, gègé àti gègé aláwọ̀ fún àwòrán ìṣàn oko àti àwòrán oko",
      "Ṣọ́bìrì kan, agolo òfìfo tí a gé ìsàlẹ̀ àti òkè rẹ̀ kúrò, omi àti aago fún àwọn òdiwọ̀n ilẹ̀",
      "Igi tàbí òkúta láti sàmì sí ibi wíwọ̀n",
      "Àkọsílẹ̀ ajílẹ̀ àti owó rẹ̀ ní àsìkò tó kọjá (tàbí iye àpẹẹrẹ)",
      "Fóònù fún fọ́tò àti àkọsílẹ̀ (kò pọn dandan)",
      "Nǹkan bí ìṣẹ́jú 90 lápapọ̀, pẹ̀lú àkókò lórí oko fún àwọn òdiwọ̀n"
    ],
    facilitatorNotes: [
      "Ṣe Ẹ̀kọ́ 3 àti 6 lórí oko: ẹ jọ wá kùkùté fún FMNR, kí ẹ sì ṣe òdiwọ̀n omi wíwọlé àti kíka ekòló gẹ́gẹ́ bí ẹgbẹ́.",
      "Pe òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí ilé ìwádìí (fún àpẹẹrẹ KALRO, IITA, CSIR tàbí ISRA) láti fìdí irè ìbòlẹ̀ àti igi ajílẹ̀ tó bá òjò àdúgbò mu múlẹ̀.",
      "Ẹ jíròrò òfin ìjẹko àti gígé igi àdúgbò ní gbangba; FMNR sábà máa ń nílò ìfohùnṣọ̀kan àdúgbò.",
      "Má ṣe gbé iye owó àpẹẹrẹ kalẹ̀ bí òtítọ́ láé; gba iye owó ajílẹ̀ àdúgbò kí ìpàdé tó bẹ̀rẹ̀.",
      "Gba àwọn akẹ́kọ̀ọ́ níyànjú láti lo ìlà ìdánwò ẹ̀gbẹ́-sí-ẹ̀gbẹ́ dípò dídín ajílẹ̀ kù lójijì lórí gbogbo ilẹ̀.",
      "Fi rubric ṣe àmì fún ètò ìkẹyìn, kí o sì tẹ̀lé e lẹ́yìn àsìkò kan àti àsìkò méjì láti fi àwọn òdiwọ̀n wéra."
    ]
  }
};
