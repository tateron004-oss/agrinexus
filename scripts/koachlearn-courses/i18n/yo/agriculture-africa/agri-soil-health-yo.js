"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-soil-health.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_SOM = { name: "FAO: Pàtàkì ohun ìdíbàjẹ́ inú ilẹ̀ (soil organic matter), kọ́kọ́rọ́ ilẹ̀ tí ọ̀gbẹlẹ̀ kò lè borí", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const FAO_RUNOFF = { name: "FAO: Ọ̀nà láti ṣàkóso omi òjò tó ń ṣàn láti dá ìjẹ̀gbàrá ilẹ̀ dúró", url: "https://www.fao.org/4/t1696e/t1696e02.htm" };
const FAO_MECH = { name: "FAO TECA/STI portal: Ọ̀nà ìkọ́lé láti dáàbò bo ilẹ̀ àti dín ìjẹ̀gbàrá kù", url: "https://sti-portal.fao.org/innovations/mechanical-soil-conservation-strategies-reduce-soil-erosion" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO), àjọ ìwádìí iṣẹ́ àgbẹ̀ Kenya: ẹ kàn sí wọn fún àyẹ̀wò ilẹ̀", url: "https://www.kalro.org" };
const KALRO_SAMPLING = { name: "KALRO: Ìtọ́sọ́nà fún gbígbà àpẹẹrẹ ilẹ̀ àti mímúra rẹ̀ sílẹ̀ fún àyẹ̀wò ọ̀rá ilẹ̀", url: "https://kalroerepository.kalro.org/items/ab36e6de-6fdf-46dc-bfdc-044815064ec1" };
const CSIR_SRI = { name: "CSIR-Soil Research Institute, ilé-iṣẹ́ ìwádìí ilẹ̀, Kwadaso, Kumasi (Ghana)", url: "https://sri.csir.org.gh" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: ìwé ìtọ́sọ́nà fún lílo ajílẹ̀ dáadáa", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-soil-health-yo",
  lang: "yo",
  translationOf: "agri-soil-health",
  category: "Agriculture (Africa)",
  name: "Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀",
  skills: "Kíka ilẹ̀ rẹ nínú oko, Gbígbà àpẹẹrẹ ilẹ̀ fún àyẹ̀wò, Fífi compost àti ìgbẹ́ ẹran kún ohun ìdíbàjẹ́ inú ilẹ̀, Ṣíṣètò yíyí irè oko padà àti gbígbin ẹ̀wà pọ̀ mọ́ ọn, Dídá ìjẹ̀gbàrá dúró pẹ̀lú ìbora ilẹ̀ àti ìlà contour, Lílo ajílẹ̀ pẹ̀lú àwọn 4R",
  outcome: "ṣàyẹ̀wò ìlera ilẹ̀ oko rẹ, gba àpẹẹrẹ ilẹ̀ tó dára fún àyẹ̀wò ní ilé-ìwádìí (lab), kí o sì kọ ètò ilẹ̀ fún ìgbà oko kan tí ó ń fi ohun ìdíbàjẹ́ kún ilẹ̀, tí ó ń yí irè oko padà pẹ̀lú ẹ̀wà, tí kò jẹ́ kí omi gbé ilẹ̀ lọ, tí ó sì ń lo ajílẹ̀ pẹ̀lú orísun, ìwọ̀n, àkókò àti ibi tó tọ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ tó ń dàgbà, àwọn òṣìṣẹ́ oko àti àwọn ọ̀dọ́ àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà tí wọ́n fẹ́ rí púpọ̀ sí i láti ilẹ̀ kan náà. Ilẹ̀ tó ní ìlera máa ń di omi mú dáadáa, ó ń bọ́ irè oko dáadáa, ó sì ń dá gbogbo shilling, naira tàbí cedi tí o ná sórí irúgbìn àti ajílẹ̀ padà.",
    "Orí 1 dá lórí mímọ ilẹ̀ rẹ: kíka á pẹ̀lú ojú àti ọwọ́ rẹ, gbígba àyẹ̀wò ilẹ̀ tó péye, àti fífi compost àti ìgbẹ́ ẹran kún ohun ìdíbàjẹ́ inú ilẹ̀. Orí 2 dá lórí pípa ìlera rẹ̀ mọ́ láti ìgbà oko kan dé òmíràn: yíyí irè oko padà àti gbígbin ẹ̀wà pọ̀ mọ́ ọn, ìbora ilẹ̀ àti dídá ìjẹ̀gbàrá dúró, àti lílo ajílẹ̀ dáadáa.",
    "Ilẹ̀ yàtọ̀ láti oko kan sí òmíràn. Lo ẹ̀kọ́ yìí pẹ̀lú èsì àyẹ̀wò ilẹ̀ rẹ àti ìmọ̀ràn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, ilé-iṣẹ́ ìwádìí tàbí ilé ìtajà ohun èlò oko (agrovet), kí o sì kọ́kọ́ gbìyànjú ọ̀nà tuntun lórí ilẹ̀ kékeré. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan lórí oko rẹ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ilẹ̀ ojú-ewé kan fún oko kan nínú oko rẹ (tàbí oko àpẹẹrẹ bí éékà 1 àgbàdo àti ẹ̀wà ní Kakamega, éékà 2 ẹ̀gẹ́ ní Ọ̀yọ́, tàbí éékà 1 tòmátì nítòsí Kumasi): ohun tí àyẹ̀wò oko rẹ rí, ìgbà àti ibi tí o máa ṣe àyẹ̀wò ilẹ̀ (tàbí ohun tí àyẹ̀wò náà sọ), bí o ṣe máa fi ohun ìdíbàjẹ́ kún ilẹ̀, bí o ṣe máa yí irè oko padà tàbí gbin ẹ̀wà pọ̀ mọ́ ọn, bí o ṣe máa bo ilẹ̀ kí o sì dá ìjẹ̀gbàrá dúró, àti ètò ajílẹ̀ rẹ tí a kọ bí orísun, ìwọ̀n, àkókò àti ibi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ tó ń dàgbà, àwọn òṣìṣẹ́ oko àti àwọn ọ̀dọ́ àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà tí wọ́n fẹ́ rí púpọ̀ sí i láti ilẹ̀ kan náà, tí wọ́n ń gbin irè oko bí àgbàdo, ẹ̀wà, ẹ̀gẹ́ àti tòmátì.",
    startingPoint: "Ọ̀pọ̀ ń gbìn ní gbogbo ìgbà oko, wọ́n sì ń lo ìgbẹ́ ẹran tàbí ajílẹ̀ díẹ̀, nígbà púpọ̀ nítorí àṣà tàbí ìmọ̀ràn aládùúgbò. Díẹ̀ ló ti ṣàyẹ̀wò ilẹ̀ wọn nínú oko, ṣe àyẹ̀wò ilẹ̀ ní ilé-ìwádìí, ṣe compost, ṣètò yíyí irè oko padà, kọ́ ohun ìdènà ìjẹ̀gbàrá ní ìlà contour, tàbí lo ajílẹ̀ pẹ̀lú àwọn 4R.",
    gap: "Ilẹ̀ tó ti rẹ̀, tó kan (acidic) tàbí tí omi ti gbé lọ ń fi owó irúgbìn àti ajílẹ̀ ṣòfò, ó sì ń jẹ́ kí irè oko rẹ̀wẹ̀sì nígbà ọ̀gbẹlẹ̀. Mímọ ilẹ̀ wọn àti mímú un lágbára ní gbogbo ìgbà oko ń ran àwọn àgbẹ̀ lọ́wọ́ láti di omi mú sí i, bọ́ irè oko dáadáa, kí wọ́n sì rí ìkórè púpọ̀ sí i láti inú àpò ajílẹ̀ kọ̀ọ̀kan.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ nípa ilẹ̀",
      "Ẹ̀rọ: ọkọ́ (spade), garawa àti fóònù lásán; ọ̀pọ̀ àṣeṣe ń ṣẹlẹ̀ nínú oko",
      "Àkókò: ẹ̀kọ́ tí ó tó nǹkan bí ìṣẹ́jú 5 tí ó bá iṣẹ́ oko mu",
      "Ilẹ̀ yàtọ̀ láti oko kan sí òmíràn: ìwọ̀n ajílẹ̀ ń wá láti àyẹ̀wò ilẹ̀, òṣìṣẹ́ ìtọ́sọ́nà tàbí ìwádìí, a sì ń kọ́kọ́ gbìyànjú ọ̀nà tuntun lórí ilẹ̀ kékeré",
      "Owó àyẹ̀wò, ibi tí ilé-ìwádìí wà àti àkókò ìdúró ń yí padà: àwọn akẹ́kọ̀ọ́ máa ń pè tàbí ṣàyẹ̀wò kí wọ́n tó lọ"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Lórí ọ̀kan lára oko rẹ", action: "ṣàyẹ̀wò àwọ̀, ìrí ilẹ̀, ekòló, gbòǹgbò, omi àti àmì ara ewéko, kí o sì kọ ohun tí ó fi hàn sílẹ̀", standard: "kí o sì ka àmì ara ewéko sí àmì tí àyẹ̀wò ilẹ̀ gbọ́dọ̀ fìdí rẹ̀ múlẹ̀" },
    { id: "O2", condition: "Fún oko kan", action: "gba àpẹẹrẹ ilẹ̀ ní ọ̀nà tó tọ́, kí o sì dárúkọ ibi tí o máa fi ránṣẹ́ fún àyẹ̀wò", standard: "pẹ̀lú ọ̀pọ̀ àpẹẹrẹ kékeré tí a dà pọ̀ di àpẹẹrẹ mímọ́ kan fún apá oko kọ̀ọ̀kan" },
    { id: "O3", condition: "Pẹ̀lú ìyókù irè oko, ewé tútù àti ìgbẹ́ ẹran", action: "ṣe òkìtì compost kí o sì ṣètò bí o ṣe máa fi ohun ìdíbàjẹ́ kún ilẹ̀", standard: "láìsun ìyókù irè oko kankan, láìsì fi ìgbẹ́ ẹran tútù sí ara irúgbìn tó ṣẹ̀ṣẹ̀ hù" },
    { id: "O4", condition: "Fún oko kan", action: "ṣètò yíyí irè oko padà fún ìgbà oko mẹ́ta àti gbígbin ẹ̀wà pọ̀ mọ́ irè oko míì", standard: "pẹ̀lú ẹ̀wà nínú ètò náà àti àyè tí ó jẹ́ kí irè oko méjèèjì rí ìmọ́lẹ̀" },
    { id: "O5", condition: "Fún oko tó dagun tàbí tí kò ní ìbora", action: "yan ìbora ilẹ̀ àti ohun ìdènà ìjẹ̀gbàrá kí o sì gbé wọn kalẹ̀ ní ìlà contour", standard: "pẹ̀lú ìlà contour tí a sàmì sí pẹ̀lú ìrànlọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà níbi tó bá yẹ" },
    { id: "O6", condition: "Fún irè oko kan", action: "kọ ètò ajílẹ̀ pẹ̀lú orísun, ìwọ̀n, àkókò àti ibi tó tọ́", standard: "pẹ̀lú ìwọ̀n tí a mú láti àyẹ̀wò ilẹ̀ tàbí ìmọ̀ràn ti agbègbè rẹ" }
  ],
  chapters: [
    {
      name: "Orí 1: Mímọ ilẹ̀ rẹ àti bíbọ́ ọ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kíka ilẹ̀ rẹ pẹ̀lú ojú àti ọwọ́ rẹ",
          minutes: 5,
          goal: "Ṣe àyẹ̀wò ilẹ̀ rẹ tó rọrùn nínú oko, kí o sì kọ ohun tí ó sọ fún ọ sílẹ̀.",
          text: [
            "O lè kọ́ ọ̀pọ̀ nǹkan nípa ilẹ̀ pẹ̀lú ọkọ́, ọwọ́ rẹ àti ojú rẹ. Ilẹ̀ tó ní ìlera dúdú, ó ń wó wẹ́wẹ́, ó sì ń rùn bí ilẹ̀. Ekòló àti àwọn ẹ̀dá kékeré míì wà nínú rẹ̀, gbòǹgbò ń lọ jìnnà, omi òjò sì ń wọ inú rẹ̀ dípò kí ó ṣàn lọ. Ilẹ̀ tí kò dára funfun tàbí le, ó ń di èèpo lẹ́yìn òjò, ó ń là gan-an nígbà tí ó bá gbẹ, tàbí kí ó máa tutù kí ó sì máa rùn.",
            "Fọwọ́ kan ìrí rẹ̀: fi omi rin bọ́ọ̀lù ilẹ̀ kékeré kan kí o sì pa á láàárín ìka rẹ. Ilẹ̀ iyanrìn ń ha ọwọ́, ó sì ń tú ká; omi ń yára ṣàn kúrò nínú rẹ̀, ó sì ń pàdánù oúnjẹ ewéko. Ilẹ̀ amọ̀ ń lẹ̀ mọ́ ọwọ́, o sì lè yí i di okùn gígùn tínrín; ó ń di omi àti oúnjẹ ewéko mú, ṣùgbọ́n omi lè kún inú rẹ̀ kí ó sì le. Loam wà láàárín méjèèjì, òun ló sì rọrùn jù láti dá oko.",
            "Wo àwọn ewéko náà pẹ̀lú. Ewé ìsàlẹ̀ àgbàdo tó pọ́n lè túmọ̀ sí pé nitrogen kò tó. Ewé àgbàdo kékeré tó ní àwọ̀ elése àlùkò lè túmọ̀ sí pé phosphorus kò tó. Èpò bí striga (witchweed) sábà máa ń fi ilẹ̀ tó ti rẹ̀, tí ọ̀rá rẹ̀ kéré hàn. Àmì ni wọ̀nyí, kì í ṣe ẹ̀rí: àyẹ̀wò ilẹ̀ ló máa sọ dájú fún ọ."
          ],
          steps: ["Gbẹ́ ihò tí ó jìn tó ọkọ́ kan ní ibi mẹ́ta nínú oko.", "Wo àwọ̀, àwọn ìpele, gbòǹgbò àti ìpele líle èyíkéyìí.", "Ka iye ekòló nínú ọkọ́ ilẹ̀ kan.", "Fi omi rin bọ́ọ̀lù ilẹ̀ kí o sì fọwọ́ kàn án: ó ń ha (iyanrìn), ó ń lẹ̀ (amọ̀), tàbí láàárín (loam).", "Lẹ́yìn òjò, kọ ibi tí omi ti ń ṣàn lọ tàbí tí ó ti ń dúró sílẹ̀.", "Kọ ohun tí o rí fún apá oko kọ̀ọ̀kan sílẹ̀."],
          words: [["Ìrí ilẹ̀ (soil texture)", "bí ilẹ̀ ṣe ní iyanrìn, ẹrẹ̀ tàbí amọ̀ tó; òun ló ń pinnu bí omi ṣe ń yára ṣàn kúrò."], ["Loam", "ilẹ̀ tí ó ní àdàpọ̀ iyanrìn, ẹrẹ̀ àti amọ̀ tó dára."], ["Ìpele líle (hardpan)", "ìpele ilẹ̀ líle nísàlẹ̀ tí gbòǹgbò àti omi kò lè wọ̀."], ["Striga", "èpò tó ń gbé ara ewéko míì (witchweed) tí ó ń kọlu àgbàdo, ọkà bàbà àti jéró; ó wọ́pọ̀ lórí ilẹ̀ tí kò dára."]],
          slides: [
            { title: "Ilẹ̀ tó ní ìlera", bullets: ["Dúdú, ó ń wó wẹ́wẹ́, ó ń rùn bí ilẹ̀", "Ekòló àti gbòǹgbò tó jìn", "Omi òjò ń wọ inú rẹ̀, kò ṣàn lọ"] },
            { title: "Fọwọ́ kan ìrí rẹ̀", bullets: ["Ó ń ha, ó ń tú ká: iyanrìn, omi ń yára ṣàn kúrò", "Ó ń lẹ̀, ó ń di okùn: amọ̀, ó ń di omi mú", "Láàárín méjèèjì: loam, ó rọrùn jù láti dá oko"] },
            { title: "Àmì láti ara ewéko (kì í ṣe ẹ̀rí)", bullets: ["Ewé ìsàlẹ̀ àgbàdo tó pọ́n: bóyá nitrogen kò tó", "Ewé àgbàdo kékeré elése àlùkò: bóyá phosphorus kò tó", "Striga púpọ̀: ilẹ̀ tó ti rẹ̀, tí kò dára"] },
            { title: "Àyẹ̀wò oko", bullets: ["Gbẹ́ ní ibi mẹ́ta", "Wò ó, gbóòórùn rẹ̀, ka ekòló, fọwọ́ kan ìrí rẹ̀", "Wo omi lẹ́yìn òjò; kọ ọ́ sílẹ̀"] }
          ],
          tryIt: "Ṣe àyẹ̀wò oko ní ọ̀kan lára oko rẹ: gbẹ́ ní ibi mẹ́ta, fọwọ́ kan ìrí ilẹ̀, ka ekòló, kí o sì kọ ìlà kan fún ibi kọ̀ọ̀kan. Ya fọ́tò ihò kọ̀ọ̀kan pẹ̀lú fóònù rẹ kí o lè fi wé ti ìgbà oko tó ń bọ̀.",
          youCanNow: "ṣàyẹ̀wò ilẹ̀ rẹ nínú oko, kí o sì ṣàpèjúwe ìrí rẹ̀, àwọn ẹ̀dá inú rẹ̀, bí omi ṣe ń ṣàn kúrò àti àwọn àmì ìkìlọ̀.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ewé ìsàlẹ̀ àgbàdo tó pọ́n lè fi hàn?", options: ["Omi tó pọ̀ jù nínú ewé", "Oòrùn tó pọ̀ jù", "Ìdàgbàsókè tó dára", "Nitrogen tí kò tó"], answer: 3, why: "Ewé ìsàlẹ̀ àgbàdo tó pọ́n lè túmọ̀ sí pé nitrogen kò tó; àyẹ̀wò ilẹ̀ ló máa fìdí rẹ̀ múlẹ̀." },
            { objective: "O1", q: "Lẹ́yìn òjò, oko rẹ di èèpo líle, omi sì ń ṣàn lọ. Kí ni o máa kọ sínú àyẹ̀wò oko rẹ?", options: ["Ilẹ̀ tó ní ìlera; kò nílò ìyípadà", "Àmì ilẹ̀ tí kò dára, láti fìdí rẹ̀ múlẹ̀ pẹ̀lú àyẹ̀wò ilẹ̀", "Ekòló ti pọ̀ jù", "Loam tó pé"], answer: 1, why: "Èèpo líle àti omi tó ń ṣàn lọ jẹ́ àmì ilẹ̀ tí kò dára; àyẹ̀wò ilẹ̀ ló máa sọ dájú ohun tí ó nílò." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gbígba àyẹ̀wò ilẹ̀ àti gbígba àpẹẹrẹ tó dára",
          minutes: 5,
          goal: "Gba àpẹẹrẹ ilẹ̀ ní ọ̀nà tó tọ́, kí o sì mọ ibi tí o máa fi ránṣẹ́ fún àyẹ̀wò.",
          text: [
            "Àyẹ̀wò ilẹ̀ ń sọ ohun tí ojú rẹ kò lè rí fún ọ: bí ilẹ̀ ṣe kan tó (pH) àti iye oúnjẹ ewéko pàtàkì tí ó wà nínú rẹ̀. Ọ̀pọ̀ ilẹ̀ ní àwọn agbègbè tí òjò ti ń rọ̀ jù ní Kenya, Nàìjíríà àti Ghana ló kan (acidic), èyí sì ń ti oúnjẹ ewéko pa mọ́ kúrò lọ́dọ̀ irè oko; àyẹ̀wò ń sọ fún ọ bóyá lime (ẹfun) máa ràn án lọ́wọ́. Láìsí àyẹ̀wò, o lè ná owó sórí ajílẹ̀ tí kò tọ́.",
            "Ibi tí o ti lè ṣe àyẹ̀wò: ní Kenya, KALRO ní àwọn ilé-ìwádìí ilẹ̀ (fún àpẹẹrẹ ilé-ìwádìí ọ̀rá ilẹ̀ rẹ̀ ní Kabete, Nairobi), àwọn county kan sì ní ilé-ìwádìí ilẹ̀ tiwọn. Ní Ghana, CSIR-Soil Research Institute ní Kwadaso, Kumasi ń ṣe àyẹ̀wò ní ilé-ìwádìí. Ní Nàìjíríà àti ibòmíràn, béèrè lọ́wọ́ ọ́fíìsì ìtọ́sọ́nà àgbẹ̀ ti ìpínlẹ̀ tàbí county rẹ, yunifásítì iṣẹ́ àgbẹ̀ tàbí ilé-iṣẹ́ ìwádìí. Owó, ibi tí ilé-ìwádìí wà àti àkókò ìdúró ń yí padà, nítorí náà pè tàbí ṣàyẹ̀wò kí o tó lọ.",
            "Ìtọ́sọ́nà KALRO fúnra rẹ̀ sọ pé gbígba àpẹẹrẹ ni orísun àṣìṣe tó tóbi jù nínú àyẹ̀wò ilẹ̀. Ẹ̀kúnwọ́ kan láti ibi kan kò dúró fún gbogbo oko. Gba ọ̀pọ̀ àpẹẹrẹ kékeré káàkiri oko, dà wọ́n pọ̀, kí o sì fi àpẹẹrẹ àdàpọ̀ mímọ́ kan ránṣẹ́ fún oko kọ̀ọ̀kan tàbí apá kọ̀ọ̀kan tí ó yàtọ̀."
          ],
          steps: ["Yan oko kan (tàbí apá kan tí ó rí bákan náà).", "Rìn ní ọ̀nà wọ́ọ́rọ́wọ́ (zigzag), kí o sì gba àpẹẹrẹ kékeré 10 sí 20 láti ìpele òkè 15 sí 20 cm, pẹ̀lú ọkọ́ tàbí auger tó mọ́.", "Yẹra fún àwọn ibi àjèjì: òkìtì ìgbẹ́ ẹran àtijọ́, eérú, ojú ọ̀nà, ilé ikán, ibi tí a ti da ajílẹ̀.", "Dà gbogbo àpẹẹrẹ pọ̀ dáadáa nínú garawa tó mọ́ (kì í ṣe àpò ajílẹ̀).", "Mú nǹkan bí ìdajì kílò láti inú àdàpọ̀ náà, sá a nínú afẹ́fẹ́ ní ibòji, kí o sì kọ orúkọ sí i: orúkọ rẹ, oko, ọjọ́, irè oko tí o fẹ́ gbìn.", "Gbé e lọ sí ilé-ìwádìí kí o tó gbìn kí èsì lè dé lásìkò."],
          words: [["pH", "nọ́mbà tí ó ń fi bí ilẹ̀ ṣe kan (acidic) tàbí bí ó ṣe jẹ́ alkaline hàn; ọ̀pọ̀ irè oko fẹ́ràn kí ó súnmọ́ àárín."], ["Ilẹ̀ tó kan (acidic)", "ilẹ̀ tí pH rẹ̀ kéré, tí ó ń ti oúnjẹ ewéko bí phosphorus pa mọ́."], ["Lime (ẹfun)", "àpáta tí a lọ̀ tí ó ń dín bí ilẹ̀ ṣe kan kù."], ["Àpẹẹrẹ àdàpọ̀ (composite sample)", "ọ̀pọ̀ àpẹẹrẹ kékeré láti oko kan tí a dà pọ̀ di ọ̀kan."]],
          slides: [
            { title: "Kí ló dé tí a fi ń ṣe àyẹ̀wò?", bullets: ["Ó ń fi pH àti oúnjẹ ewéko pàtàkì hàn", "Ó ń sọ bóyá lime (ẹfun) máa ràn án lọ́wọ́", "Ó ń dá owó dúró kúrò lórí ajílẹ̀ tí kò tọ́"] },
            { title: "Ibi tí o ti lè ṣe àyẹ̀wò", bullets: ["Kenya: ilé-ìwádìí KALRO (bí Kabete) àti ti àwọn county kan", "Ghana: CSIR-Soil Research Institute, Kumasi", "Ibòmíràn: ọ́fíìsì ìtọ́sọ́nà àgbẹ̀, yunifásítì, ilé-iṣẹ́ ìwádìí"] },
            { title: "Gba àpẹẹrẹ tó dára", bullets: ["Zigzag, ibi 10 sí 20, ìpele òkè 15 sí 20 cm", "Yẹra fún òkìtì ìgbẹ́ ẹran, eérú, ojú ọ̀nà, ilé ikán", "Dà á pọ̀ nínú garawa tó mọ́; fi nǹkan bí ìdajì kílò ránṣẹ́"] },
            { title: "Kọ orúkọ sí i, kí o sì ṣe é lásìkò", bullets: ["Orúkọ, oko, ọjọ́, irè oko tí o fẹ́ gbìn", "Sá a nínú afẹ́fẹ́ ní ibòji", "Fi ránṣẹ́ kí o tó gbìn; kọ́kọ́ ṣàyẹ̀wò owó àti ilé-ìwádìí"] }
          ],
          sources: [KALRO, KALRO_SAMPLING, CSIR_SRI],
          tryIt: "Wá ibi tó súnmọ́ ọ jù tí wọ́n ti ń ṣe àyẹ̀wò ilẹ̀: pe òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ tàbí ṣàyẹ̀wò KALRO, CSIR-SRI tàbí ilé-iṣẹ́ ìwádìí ìpínlẹ̀ rẹ. Kọ orúkọ rẹ̀, owó rẹ̀ àti àkókò ìdúró sílẹ̀. Lẹ́yìn náà, ya àwòrán oko rẹ kí o sì sàmì sí ọ̀nà zigzag tí o máa rìn láti gba àpẹẹrẹ.",
          youCanNow: "gba àpẹẹrẹ ilẹ̀ àdàpọ̀ tó péye, kí o sì mọ ibi tí o ti lè ṣe àyẹ̀wò rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Kí ni pH ilẹ̀ ń sọ fún ọ?", options: ["Bí ilẹ̀ ṣe kan (acidic) tó", "Iye ekòló tí ó wà nínú rẹ̀", "Bí gbòǹgbò ṣe jìn tó", "Iye òjò tó rọ̀"], answer: 0, why: "pH ń fi bí ilẹ̀ ṣe kan tó hàn; ilẹ̀ tó kan ń ti oúnjẹ ewéko pa mọ́, ó sì lè nílò lime (ẹfun)." },
            { objective: "O2", q: "Omi kún apá kan oko rẹ, apá tó kù sì gbẹ, ó sì ní iyanrìn. Báwo ni o ṣe máa gba àpẹẹrẹ?", options: ["Ẹ̀kúnwọ́ kan láti àárín", "Dà apá tó tutù àti apá tó gbẹ pọ̀ di àpẹẹrẹ kan", "Fi àpẹẹrẹ àdàpọ̀ ọ̀tọ̀ ránṣẹ́ fún apá kọ̀ọ̀kan tí ó yàtọ̀", "Gba àpẹẹrẹ nítòsí òkìtì ìgbẹ́ ẹran nìkan"], answer: 2, why: "Oko kọ̀ọ̀kan, tàbí apá kọ̀ọ̀kan tí ó yàtọ̀, ní àpẹẹrẹ àdàpọ̀ mímọ́ tirẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fífi compost àti ìgbẹ́ ẹran kún ohun ìdíbàjẹ́ inú ilẹ̀",
          minutes: 5,
          goal: "Ṣe òkìtì compost kí o sì lo ìgbẹ́ ẹran láìléwu láti fi ohun ìdíbàjẹ́ kún ilẹ̀.",
          text: [
            "Ohun ìdíbàjẹ́ inú ilẹ̀ (organic matter) ni ìyókù ewéko àti ẹranko tó ti jẹrà, tí ó dúdú nínú ilẹ̀. FAO pè é ní kọ́kọ́rọ́ ilẹ̀ tí ọ̀gbẹlẹ̀ kò lè borí: ó ń di omi mú bí kànìnkànìn, ó ń bọ́ ekòló àti àwọn ẹ̀dá inú ilẹ̀, ó ń di oúnjẹ ewéko mú kí òjò má gbé e lọ, ó sì ń jẹ́ kí ilẹ̀ máa wó wẹ́wẹ́ kí gbòǹgbò lè dàgbà.",
            "O ń fi ohun ìdíbàjẹ́ kún ilẹ̀ nípa fífi ìyókù irè oko sílẹ̀ nínú oko dípò kí o sun wọ́n, nípa fífi ìgbẹ́ ẹran àti compost kún un, àti nípa gbígbin ẹ̀wà àti irè oko ìbora ilẹ̀. Sísun ìyókù irè oko àti títúlẹ̀ léraléra ń lo ohun ìdíbàjẹ́ inú ilẹ̀ tán.",
            "Compost rọrùn láti ṣe: kọ́ òkìtì tàbí gbẹ́ kòtò pẹ̀lú àwọn ìpele ohun gbígbẹ (pòròpórò àgbàdo, koríko gbígbẹ), ohun tútù (èpò tútù, ewé, ìdọ̀tí ilé ìdáná) àti ìgbẹ́ ẹran, pẹ̀lú ilẹ̀ díẹ̀ láàárín àwọn ìpele. Jẹ́ kí ó tutù bí kànìnkànìn tí a fún, kí o sì máa yí i padà ní ọ̀sẹ̀ méjì sí mẹ́ta. Ó máa ṣetán ní nǹkan bí oṣù méjì sí mẹ́ta nígbà tí ó bá dúdú, tí ó ń wó wẹ́wẹ́, tí ó sì ń rùn bí ilẹ̀. Jẹ́ kí ìgbẹ́ ẹran tútù jẹrà kí o tó lò ó; ìgbẹ́ ẹran tútù tó gbóná lè jó irúgbìn tó ṣẹ̀ṣẹ̀ hù."
          ],
          steps: ["Yan ibi tí ibòji wà nítòsí oko àti omi.", "Tẹ́ ìpìlẹ̀ pòròpórò líle fún afẹ́fẹ́.", "Fi àwọn ìpele kún un: ohun gbígbẹ, ohun tútù, ìgbẹ́ ẹran, ilẹ̀ díẹ̀; tún un ṣe.", "Bomi rin ìpele kọ̀ọ̀kan kí ó tutù, kí ó má rin gbingbin.", "Ti igi kan bọ inú òkìtì náà; tí ó bá gbóná, ó ń ṣiṣẹ́.", "Yí òkìtì náà padà ní ọ̀sẹ̀ méjì sí mẹ́ta.", "Lò ó nígbà tí ó bá dúdú tí ó sì ń wó wẹ́wẹ́, nínú ihò gbíngbìn tàbí ní ìlà."],
          words: [["Ohun ìdíbàjẹ́ inú ilẹ̀ (organic matter)", "ìyókù ewéko àti ẹranko tó ti jẹrà nínú ilẹ̀ tí ó ń di omi àti oúnjẹ ewéko mú."], ["Compost", "ìdọ̀tí ewéko àti ẹranko tó ti jẹrà tí a ń lò láti bọ́ ilẹ̀."], ["Ìyókù irè oko (crop residues)", "pòròpórò, ewé àti èèpo tí ó kù lẹ́yìn ìkórè."], ["Irè oko ìbora ilẹ̀ (cover crop)", "irè oko tí a gbìn ní pàtàkì láti bo ilẹ̀ àti láti bọ́ ọ."]],
          slides: [
            { title: "Ìdí tí ohun ìdíbàjẹ́ inú ilẹ̀ fi ṣe pàtàkì", bullets: ["Ó ń di omi mú bí kànìnkànìn (FAO)", "Ó ń bọ́ àwọn ẹ̀dá inú ilẹ̀, ó sì ń di oúnjẹ ewéko mú", "Ó ń jẹ́ kí ilẹ̀ wó wẹ́wẹ́ fún gbòǹgbò"] },
            { title: "Fi kún un, má ṣe sun ún", bullets: ["Fi ìyókù irè oko sílẹ̀; má ṣe sun wọ́n", "Fi ìgbẹ́ ẹran àti compost kún un", "Gbin ẹ̀wà àti irè oko ìbora ilẹ̀"] },
            { title: "Ṣe compost", bullets: ["Àwọn ìpele: gbígbẹ, tútù, ìgbẹ́ ẹran, ilẹ̀ díẹ̀", "Ó tutù bí kànìnkànìn tí a fún", "Yí i padà ní ọ̀sẹ̀ méjì sí mẹ́ta; ó ṣetán ní oṣù 2 sí 3"] },
            { title: "Ìgbẹ́ ẹran láìléwu", bullets: ["Jẹ́ kí ìgbẹ́ ẹran tútù kọ́kọ́ jẹrà", "Ìgbẹ́ ẹran tútù tó gbóná lè jó irúgbìn tó ṣẹ̀ṣẹ̀ hù", "Fọ ọwọ́ rẹ lẹ́yìn tí o bá fọwọ́ kàn án"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Bẹ̀rẹ̀ òkìtì tàbí kòtò compost ní ọ̀sẹ̀ yìí pẹ̀lú ohun tí o ní: pòròpórò, èpò, ìdọ̀tí ilé ìdáná àti ìgbẹ́ ẹran. Kọ ọjọ́ náà, àwọn ìpele tí o lò sílẹ̀, kí o sì fi ìrántí sínú fóònù rẹ láti yí i padà ní ọ̀sẹ̀ méjì.",
          youCanNow: "ṣe compost, lo ìgbẹ́ ẹran láìléwu, kí o sì ṣàlàyé bí ohun ìdíbàjẹ́ inú ilẹ̀ ṣe ń ran ilẹ̀ rẹ lọ́wọ́.",
          quickCheck: [
            { objective: "O3", q: "Kí ló ń wọ inú òkìtì compost?", options: ["Ọ̀rá (plastic) àti agolo nìkan", "Ìgbẹ́ ẹran tútù nìkan", "Àwọn ìpele ohun gbígbẹ, ohun tútù àti ìgbẹ́ ẹran, pẹ̀lú ilẹ̀ díẹ̀ láàárín wọn", "Eérú ìyókù irè oko tí a sun nìkan"], answer: 2, why: "A ń kọ́ compost ní ìpele ohun gbígbẹ, ohun tútù àti ìgbẹ́ ẹran, a ń jẹ́ kí ó tutù, a sì ń yí i padà." },
            { objective: "O3", q: "Lẹ́yìn nǹkan bí oṣù mẹ́ta, compost rẹ dúdú, ó ń wó wẹ́wẹ́, ó sì ń rùn bí ilẹ̀. Kí ni o máa ṣe?", options: ["Lò ó; ó ti ṣetán", "Sun ún", "Dà á nù", "Fi í sílẹ̀ fún ọdún méjì sí i"], answer: 0, why: "Compost ti ṣetán nígbà tí ó bá dúdú, tí ó ń wó wẹ́wẹ́ tí ó sì ń rùn bí ilẹ̀, lẹ́yìn nǹkan bí oṣù méjì sí mẹ́ta." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mímọ ilẹ̀ rẹ àti bíbọ́ ọ",
        questions: [
          { objective: "O1", q: "O fi omi rin bọ́ọ̀lù ilẹ̀ kan, ó ń ha ọwọ́, ó sì ń tú ká. Irú ilẹ̀ wo ló ṣeé ṣe jù kí ó jẹ́?", options: ["Amọ̀", "Iyanrìn", "Loam", "Peat"], answer: 1, why: "Ilẹ̀ tó ń ha ọwọ́ tí ó sì ń tú ká jẹ́ iyanrìn; omi ń yára ṣàn kúrò nínú rẹ̀, ó sì ń pàdánù oúnjẹ ewéko." },
          { objective: "O1", q: "Àgbàdo kékeré ní ewé elése àlùkò. Kí ni ìgbésẹ̀ tó dára jù tó kàn?", options: ["Ra ajílẹ̀ èyíkéyìí lẹ́sẹ̀kẹsẹ̀", "Sun oko náà", "Kà á sí àmì kí o sì fìdí rẹ̀ múlẹ̀ pẹ̀lú àyẹ̀wò ilẹ̀", "Fà irè oko náà tu"], answer: 2, why: "Àwọ̀ ewé jẹ́ àmì, kì í ṣe ẹ̀rí; àyẹ̀wò ilẹ̀ ló máa sọ dájú fún ọ." },
          { objective: "O2", q: "Báwo ni o ṣe yẹ kí o gba àpẹẹrẹ ilẹ̀ láti oko kan?", options: ["Ẹ̀kúnwọ́ kan láti ibi tó dára jù", "Ilẹ̀ láti òkìtì ìgbẹ́ ẹran àtijọ́", "Ilẹ̀ láti ojú ọ̀nà, níbi tí ó ti rọrùn láti gbẹ́", "Àpẹẹrẹ kékeré 10 sí 20 ní ọ̀nà zigzag, tí a dà pọ̀ di ọ̀kan"], answer: 3, why: "Àpẹẹrẹ àdàpọ̀ láti ọ̀pọ̀ ibi dúró fún gbogbo oko; KALRO sọ pé gbígba àpẹẹrẹ ni orísun àṣìṣe tó tóbi jù." },
          { objective: "O2", q: "Ní Ghana, ilé-iṣẹ́ wo ló ń ṣe àyẹ̀wò ilẹ̀ ní ilé-ìwádìí?", options: ["CSIR-Soil Research Institute, Kumasi", "Ẹgbẹ́ bọ́ọ̀lù-ẹlẹ́sẹ̀ orílẹ̀-èdè", "Àjọ ìsọtẹ́lẹ̀ ojú ọjọ́", "Ilé ìfìwéránṣẹ́"], answer: 0, why: "CSIR-Soil Research Institute ní Kwadaso, Kumasi ń ṣe àyẹ̀wò ní ilé-ìwádìí." },
          { objective: "O3", q: "Kí ni o yẹ kí o ṣe pẹ̀lú pòròpórò àgbàdo lẹ́yìn ìkórè láti mú ìlera ilẹ̀ dára sí i?", options: ["Sun wọ́n", "Fi wọ́n sílẹ̀ tàbí fi wọ́n ṣe compost", "Jù wọ́n sínú odò", "Ta gbogbo wọn ní gbogbo ìgbà oko"], answer: 1, why: "Ìyókù irè oko tí a fi sílẹ̀ nínú oko tàbí tí a fi ṣe compost ń fi ohun ìdíbàjẹ́ kún ilẹ̀; sísun wọ́n ń lò ó tán." }
        ]
      }
    },
    {
      name: "Orí 2: Pípa ìlera ilẹ̀ mọ́ láti ìgbà oko kan dé òmíràn",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yíyí irè oko padà àti gbígbin ẹ̀wà pọ̀ mọ́ irè oko míì",
          minutes: 5,
          goal: "Ṣètò yíyí irè oko padà fún ìgbà oko mẹ́ta àti gbígbin ẹ̀wà pọ̀ mọ́ irè oko míì lórí oko kan.",
          text: [
            "Gbígbin irè oko kan náà sórí oko kan náà ní gbogbo ìgbà oko ń fa oúnjẹ ewéko kan náà tán, ó sì ń jẹ́ kí kòkòrò, àrùn àti èpò rẹ̀ pọ̀ sí i. Yíyí irè oko padà (crop rotation) túmọ̀ sí yíyí irè oko tí o ń gbìn sórí oko kan padà láti ìgbà oko kan sí òmíràn, fún àpẹẹrẹ àgbàdo, lẹ́yìn náà ẹ̀wà tàbí ẹ̀pà, lẹ́yìn náà ọkà bàbà tàbí ẹ̀gẹ́.",
            "Àwọn ẹ̀wà àti irú wọn (legumes) bí ẹ̀wà, ẹ̀wà cowpea, ẹ̀pà, sóyà àti òtílí (pigeon pea) ń ṣiṣẹ́ pọ̀ pẹ̀lú bakitéríà nínú àwọn kókó kékeré (nodules) lórí gbòǹgbò wọn láti mú nitrogen láti inú afẹ́fẹ́. Díẹ̀ lára nitrogen yẹn ń dúró nínú gbòǹgbò àti ewé fún irè oko tó kàn, pàápàá tí o bá fi ìyókù wọn sílẹ̀ nínú oko.",
            "Gbígbin irè oko méjì pọ̀ (intercropping) túmọ̀ sí gbígbin irè oko méjì papọ̀, bí àgbàdo pẹ̀lú ẹ̀wà, ọkà bàbà pẹ̀lú cowpea, tàbí ẹ̀gẹ́ pẹ̀lú ẹ̀pà. Ó ń bo ilẹ̀, ó ń pín ewu ká, ó sì lè mú oúnjẹ púpọ̀ sí i wá lápapọ̀ láti ilẹ̀ kan náà. Fi àyè sílẹ̀ tí ó jẹ́ kí irè oko méjèèjì rí ìmọ́lẹ̀, kí o sì gbin ẹ̀wà náà ní kùtùkùtù tó láti fìdí múlẹ̀."
          ],
          steps: ["Kọ àwọn oko tí o ń dá àti ohun tí o gbìn sórí ọ̀kọ̀ọ̀kan ní ìgbà oko tó kọjá.", "Ṣètò ìgbà oko mẹ́ta tó ń bọ̀ kí oko kankan má ní irè oko kan náà lẹ́ẹ̀mejì léraléra.", "Fi ẹ̀wà sórí oko kọ̀ọ̀kan ó kéré tán lẹ́ẹ̀kan láàárín ìgbà oko mẹ́ta.", "Yan irè oko méjì tí o máa gbìn pọ̀, bí àgbàdo àti ẹ̀wà.", "Fi ìyókù ẹ̀wà sílẹ̀ nínú oko lẹ́yìn ìkórè."],
          words: [["Yíyí irè oko padà (crop rotation)", "yíyí irè oko tí a ń gbìn sórí oko kan padà láti ìgbà oko kan sí òmíràn."], ["Ẹ̀wà àti irú wọn (legume)", "ewéko bí ẹ̀wà, cowpea tàbí ẹ̀pà tí ó lè fi nitrogen kún ilẹ̀."], ["Kókó gbòǹgbò (nodules)", "àwọn kókó kékeré lórí gbòǹgbò ẹ̀wà níbi tí bakitéríà ti ń mú nitrogen láti inú afẹ́fẹ́."], ["Gbígbin irè oko pọ̀ (intercropping)", "gbígbin irè oko méjì tàbí jù bẹ́ẹ̀ lọ papọ̀ sórí oko kan náà."]],
          slides: [
            { title: "Ìdí tí a fi ń yí irè oko padà", bullets: ["Irè oko kan náà ní gbogbo ìgbà ń fa oúnjẹ ewéko kan náà tán", "Kòkòrò, àrùn àti èpò ń pọ̀ sí i", "Àpẹẹrẹ: àgbàdo, lẹ́yìn náà ẹ̀wà, lẹ́yìn náà ọkà bàbà"] },
            { title: "Ẹ̀wà ń bọ́ ilẹ̀", bullets: ["Ẹ̀wà, cowpea, ẹ̀pà, sóyà, òtílí", "Kókó gbòǹgbò ń mú nitrogen láti inú afẹ́fẹ́", "Fi ìyókù sílẹ̀ kí irè oko tó kàn lè jàǹfààní"] },
            { title: "Gbin irè oko pọ̀", bullets: ["Àgbàdo + ẹ̀wà, ọkà bàbà + cowpea, ẹ̀gẹ́ + ẹ̀pà", "Ó ń bo ilẹ̀, ó sì ń pín ewu ká", "Fi àyè sílẹ̀ kí méjèèjì lè rí ìmọ́lẹ̀"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Ya tábìlì tó rọrùn: àwọn oko rẹ ní ẹ̀gbẹ́, ìgbà oko mẹ́ta tó ń bọ̀ lókè. Kọ irè oko kan sínú àpótí kọ̀ọ̀kan kí oko kọ̀ọ̀kan lè ní ẹ̀wà lẹ́ẹ̀kan, kí oko kankan má sì tún irè oko kan gbìn léraléra. Hú ewéko ẹ̀wà tàbí ẹ̀pà kan, kí o sì wá kókó lórí gbòǹgbò rẹ̀.",
          youCanNow: "ṣètò yíyí irè oko padà àti gbígbin ẹ̀wà pọ̀ mọ́ irè oko míì tí ó ń bọ́ ilẹ̀ rẹ.",
          quickCheck: [
            { objective: "O4", q: "Kí ni àwọn kókó (nodules) lórí gbòǹgbò ẹ̀wà?", options: ["Àmì àrùn", "Kókó kékeré níbi tí bakitéríà ti ń mú nitrogen láti inú afẹ́fẹ́", "Ẹyin kòkòrò", "Òkúta nínú ilẹ̀"], answer: 1, why: "Ẹ̀wà ń ṣiṣẹ́ pọ̀ pẹ̀lú bakitéríà nínú kókó gbòǹgbò láti mú nitrogen láti inú afẹ́fẹ́." },
            { objective: "O4", q: "O gbin àgbàdo àti ẹ̀wà pọ̀, ṣùgbọ́n ẹ̀wà kò rí ìmọ́lẹ̀. Kí ni o máa yí padà?", options: ["Dáwọ́ gbígbin ẹ̀wà dúró", "Sun àgbàdo náà", "Fi irúgbìn púpọ̀ sí i", "Lo àyè tí ó jẹ́ kí méjèèjì rí ìmọ́lẹ̀, kí o sì gbin ẹ̀wà ní kùtùkùtù tó"], answer: 3, why: "Irè oko tí a gbìn pọ̀ nílò àyè tí ó jẹ́ kí méjèèjì rí ìmọ́lẹ̀, kí a sì gbin ẹ̀wà ní kùtùkùtù tó láti fìdí múlẹ̀." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ìbora ilẹ̀ àti dídá ìjẹ̀gbàrá dúró",
          minutes: 5,
          goal: "Yan ìbora ilẹ̀ àti ohun ìdènà ìjẹ̀gbàrá tó rọrùn, kí o sì gbé wọn kalẹ̀ fún oko tó dagun.",
          text: [
            "Ilẹ̀ tí kò ní ìbora jẹ́ ilẹ̀ tó ń sọnù. Òjò líle ń tú ilẹ̀ ká, omi tó ń ṣàn sì ń gbé ìpele òkè tó lọ́ràá jù lọ. Ìbora ilẹ̀ (mulch), ìpele ìyókù irè oko, koríko gbígbẹ tàbí ewé lórí ilẹ̀, ń mú kí òjò rọ̀ jẹ́jẹ́ lórí ilẹ̀, ó ń jẹ́ kí ilẹ̀ tutù kí ó sì tutù nínú ooru, ó sì ń bọ́ ilẹ̀ bí ó ṣe ń jẹrà. FAO sọ pé lórí ilẹ̀ tó dagun, ìyókù irè oko gbọ́dọ̀ bo ilẹ̀ púpọ̀ sí i láti dá ìjẹ̀gbàrá dúró ju lórí ilẹ̀ pẹrẹsẹ lọ.",
            "Lórí ilẹ̀ tó dagun, ṣiṣẹ́ ní ìbú ilẹ̀ tó dagun náà, má ṣe ṣiṣẹ́ láti ìsàlẹ̀ lọ sókè láéláé. Gbìn kí o sì kọ ebè ní ìlà contour (ìlà tí ó wà ní gíga kan náà ní ìbú ilẹ̀ tó dagun). FAO ṣàpèjúwe ebè contour gẹ́gẹ́ bí ọ̀nà tó dára fún àwọn àgbẹ̀ kékeré tí wọ́n ń lo irinṣẹ́ ọwọ́ tàbí màlúù, àti ìlà koríko (fún àpẹẹrẹ koríko Napier) ní ìlà contour gẹ́gẹ́ bí ọ̀nà tí kò wọ́n dípò terrace; koríko náà tún lè bọ́ ẹran ọ̀sìn.",
            "Lórí ilẹ̀ tó dagun jù, ìlà òkúta, ògiri ilẹ̀ contour (bunds) àti terrace onípele (bí terrace fanya juu ní Kenya) ń di ilẹ̀ àti omi mú. Wọ́n gba iṣẹ́ láti kọ́ àti láti tọ́jú, àwọn ìlà tí a gbé kalẹ̀ lọ́nà tí kò tọ́ sì lè mú ìjẹ̀gbàrá burú sí i, nítorí náà ní kí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ ràn ọ́ lọ́wọ́ láti sàmì sí ìlà contour."
          ],
          steps: ["Rìn yí oko ká lẹ́yìn òjò kí o sì sàmì sí ibi tí omi ti ń ṣàn àti ibi tí ó ti gbé ilẹ̀ lọ.", "Sàmì sí ìlà contour ní ìbú ilẹ̀ tó dagun pẹ̀lú A-frame tó rọrùn tàbí ìwọ̀n páìpù omi, tàbí pẹ̀lú ìrànlọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà.", "Gbìn, kọ ebè kí o sì ro èpò ní ìlà contour.", "Gbin ìlà koríko tàbí kọ́ ìlà òkúta tàbí bunds ní àwọn ìlà contour kan.", "Bo ilẹ̀ láàárín àwọn ìlà pẹ̀lú ìbora ilẹ̀.", "Ṣàyẹ̀wò kí o sì tún un ṣe lẹ́yìn òjò líle kọ̀ọ̀kan."],
          words: [["Ìbora ilẹ̀ (mulch)", "ìpele ìyókù irè oko, koríko tàbí ewé tí a tẹ́ sórí ilẹ̀."], ["Ìjẹ̀gbàrá (erosion)", "ilẹ̀ tí omi ń gbé lọ tàbí tí afẹ́fẹ́ ń fẹ́ lọ."], ["Ìlà contour", "ìlà ní ìbú ilẹ̀ tó dagun níbi tí gbogbo ojú rẹ̀ wà ní gíga kan náà."], ["Terrace", "ìpele tó tẹ́jú tí a gé sínú ilẹ̀ tó dagun láti di ilẹ̀ àti omi mú."]],
          slides: [
            { title: "Ilẹ̀ tí kò ní ìbora ń sọnù", bullets: ["Òjò ń tú ilẹ̀ ká; omi tó ń ṣàn ń gbé e lọ", "Ìbora ilẹ̀ ń dín agbára òjò kù, ó sì ń jẹ́ kí ilẹ̀ tutù", "Ilẹ̀ tó dagun nílò ìbora púpọ̀ sí i"] },
            { title: "Ṣiṣẹ́ ní ìbú ilẹ̀ tó dagun", bullets: ["Má ṣe túlẹ̀ láti ìsàlẹ̀ lọ sókè láéláé", "Kọ ebè kí o sì gbìn ní ìlà contour", "Ìlà koríko: kò wọ́n, ó sì ń bọ́ ẹran ọ̀sìn"] },
            { title: "Ilẹ̀ tó dagun jù", bullets: ["Ìlà òkúta, bunds contour, terrace", "Gbé àwọn ìlà kalẹ̀ dáadáa; béèrè lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà", "Tún un ṣe lẹ́yìn òjò líle"] }
          ],
          sources: [FAO_RUNOFF, FAO_MECH],
          tryIt: "Lẹ́yìn òjò tó ń bọ̀, rìn yí oko rẹ ká kí o sì sàmì sí ibi tí omi ti ń ṣàn àti ibi tí ó ti gbé ilẹ̀ lọ sórí àwòrán. Yan ohun ìdènà kan (ìbora ilẹ̀, ebè contour, ìlà koríko tàbí ìlà òkúta) fún ibi tó burú jù, kí o sì kọ ìgbà tí o máa ṣe é sílẹ̀.",
          youCanNow: "rí ìjẹ̀gbàrá lórí oko rẹ, kí o sì yan ìbora ilẹ̀ àti ohun ìdènà ní ìlà contour láti dá a dúró.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ìlà contour?", options: ["Ìlà tí ó lọ tààrà sókè ilẹ̀ tó dagun", "Ọgbà", "Ọ̀nà", "Ìlà ní gíga kan náà ní ìbú ilẹ̀ tó dagun"], answer: 3, why: "Ìlà contour wà ní gíga kan náà ní ìbú ilẹ̀ tó dagun; ebè àti ìlà koríko ń tẹ̀lé e." },
            { objective: "O5", q: "O fẹ́ kọ́ terrace fanya juu sórí oko tó dagun gan-an. Kí ni o máa kọ́kọ́ ṣe?", options: ["Ní kí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ ràn ọ́ lọ́wọ́ láti sàmì sí ìlà contour", "Gbẹ́ tààrà láti ìsàlẹ̀ lọ sókè", "Bẹ̀rẹ̀ níbikíbi kí o sì tún un ṣe nígbà míì", "Kọ́kọ́ yọ gbogbo koríko kúrò"], answer: 0, why: "Àwọn ìlà tí a gbé kalẹ̀ lọ́nà tí kò tọ́ lè mú ìjẹ̀gbàrá burú sí i, nítorí náà gba ìrànlọ́wọ́ láti sàmì sí ìlà contour." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ìpìlẹ̀ ajílẹ̀: orísun, ìwọ̀n, àkókò àti ibi tó tọ́",
          minutes: 6,
          goal: "Kọ ètò ajílẹ̀ fún irè oko kan pẹ̀lú àwọn 4R.",
          text: [
            "Irè oko nílò nitrogen (N), phosphorus (P) àti potassium (K), pẹ̀lú iye kékeré àwọn oúnjẹ ewéko míì. Ajílẹ̀ ilé-iṣẹ́ (mineral fertilizer) ń fún wọn ní kíákíá àti ní iye tí a mọ̀. Èrò 4R, tí àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ń lò káàkiri Áfíríkà, ń ràn ọ́ lọ́wọ́ láti jèrè jù lọ láti inú àpò kọ̀ọ̀kan: orísun tó tọ́, ní ìwọ̀n tó tọ́, ní àkókò tó tọ́, ní ibi tó tọ́.",
            "Orísun tó tọ́: ọjà tí ó ń pèsè ohun tí àyẹ̀wò ilẹ̀ rẹ sọ pé kò sí (fún àpẹẹrẹ ajílẹ̀ phosphorus nígbà gbíngbìn, ajílẹ̀ nitrogen fún topdressing, àti lime (ẹfun) tí ilẹ̀ bá kan). Ìwọ̀n tó tọ́: iye tí àyẹ̀wò ilẹ̀ rẹ àti ìmọ̀ràn ti agbègbè rẹ fúnni fún irè oko rẹ àti ìkórè tí o ń retí; púpọ̀ kì í fìgbà gbogbo dára, ó sì ń fi owó ṣòfò. Àkókò tó tọ́: nígbà tí irè oko nílò rẹ̀, fún àpẹẹrẹ topdressing nitrogen sí àgbàdo nígbà tí ó ga tó orúnkún, nígbà tí ilẹ̀ tutù. Ibi tó tọ́: nítòsí gbòǹgbò, bí nínú ihò gbíngbìn tàbí ní ìlà lẹ́gbẹ̀ẹ́ ìlà irè oko, láìkan irúgbìn, kí a sì bò ó kí òjò má gbé e lọ.",
            "Lo ajílẹ̀ pẹ̀lú ohun ìdíbàjẹ́ inú ilẹ̀; àwọn méjèèjì ń ṣiṣẹ́ dáadáa ju ọ̀kan nìkan lọ. Ra àpò tí a dì pa láti ọ̀dọ̀ olùtà ohun èlò oko tí a forúkọ rẹ̀ sílẹ̀ (agro-dealer), kí o sì ka àkọlé rẹ̀. Olùrànlọ́wọ́ AI lórí fóònù lè ràn ọ́ lọ́wọ́ láti lóye ìròyìn àyẹ̀wò ilẹ̀ ní ọ̀rọ̀ tó rọrùn, ṣùgbọ́n ìwọ̀n ajílẹ̀ ń wá láti ilé-ìwádìí, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ tàbí ìmọ̀ràn ìjọba fún agbègbè rẹ."
          ],
          steps: ["Ka àyẹ̀wò ilẹ̀ rẹ tàbí ìmọ̀ràn ti agbègbè rẹ fún irè oko náà.", "Orísun: kọ ọjà tí ó ń pèsè oúnjẹ ewéko kọ̀ọ̀kan tí kò sí (àti lime tí ó bá yẹ).", "Ìwọ̀n: kọ iye fún éékà tàbí hẹ́kítà tí ìmọ̀ràn náà fúnni.", "Àkókò: sàmì sí ọjọ́ gbíngbìn àti ọjọ́ topdressing sórí kàlẹ́ńdà rẹ.", "Ibi: ṣètò láti fi í sínú ihò tàbí ìlà, láìkan irúgbìn, kí o sì bò ó.", "Ra àpò tí a dì pa láti ọ̀dọ̀ agro-dealer tí a forúkọ rẹ̀ sílẹ̀; tọ́jú ìwé ìsanwó."],
          words: [["NPK", "nitrogen (N), phosphorus (P) àti potassium (K), àwọn oúnjẹ ewéko pàtàkì mẹ́ta."], ["Àwọn 4R", "orísun tó tọ́, ìwọ̀n tó tọ́, àkókò tó tọ́, ibi tó tọ́ fún ajílẹ̀ (ní Gẹ̀ẹ́sì: right source, rate, time, place)."], ["Topdressing", "fífi ajílẹ̀, nígbà púpọ̀ nitrogen, sí irè oko tó ń dàgbà."], ["Agro-dealer", "ṣọ́ọ̀bù tí ó ń ta irúgbìn, ajílẹ̀ àti àwọn ohun èlò oko míì."]],
          slides: [
            { title: "Àwọn 4R", bullets: ["Orísun tó tọ́: ohun tí ilẹ̀ rẹ kò ní", "Ìwọ̀n tó tọ́: iye tí a dámọ̀ràn", "Àkókò tó tọ́: nígbà tí irè oko nílò rẹ̀", "Ibi tó tọ́: nítòsí gbòǹgbò, kí a sì bò ó"] },
            { title: "Àpẹẹrẹ: àgbàdo", bullets: ["Ajílẹ̀ phosphorus nínú ihò gbíngbìn, láìkan irúgbìn", "Topdressing nitrogen nígbà tí ó ga tó orúnkún, ilẹ̀ tutù", "Lime (ẹfun) tí àyẹ̀wò bá sọ pé ilẹ̀ kan"] },
            { title: "Jẹ́ kí owó rẹ ṣiṣẹ́ dáadáa", bullets: ["Púpọ̀ kì í fìgbà gbogbo dára", "Lò ó pẹ̀lú compost àti ìgbẹ́ ẹran", "Àpò tí a dì pa láti ọ̀dọ̀ agro-dealer tí a forúkọ rẹ̀ sílẹ̀"] },
            { title: "AI lè ṣàlàyé, kò lè pàṣẹ ìwọ̀n", bullets: ["Ní kí AI lórí fóònù ṣàlàyé ìròyìn ilẹ̀ rẹ lọ́nà tó rọrùn", "Ìwọ̀n ń wá láti ilé-ìwádìí tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀"] }
          ],
          sources: [HANDBOOK_4R, KALRO],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ilẹ̀ ojú-ewé kan rẹ fún oko kan. Fi ohun tí àyẹ̀wò oko rẹ rí sí i, ètò àyẹ̀wò ilẹ̀ rẹ tàbí èsì rẹ̀, bí o ṣe máa fi ohun ìdíbàjẹ́ kún ilẹ̀, bí o ṣe máa yí irè oko padà tàbí gbìn wọ́n pọ̀, bí o ṣe máa dá ìjẹ̀gbàrá dúró, àti ìlà ajílẹ̀ kan fún oúnjẹ ewéko kọ̀ọ̀kan: orísun, ìwọ̀n, àkókò àti ibi.",
          youCanNow: "lo ajílẹ̀ pẹ̀lú àwọn 4R, kí o sì kọ ètò ilẹ̀ pípé fún ìgbà oko kan fún oko rẹ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni \"orísun tó tọ́\" túmọ̀ sí nínú àwọn 4R?", options: ["Àpò tó wọ́n jù lọ ní ṣọ́ọ̀bù", "Àpò tí àkọlé rẹ̀ mọ́lẹ̀ jù", "Ọjà tí ó ń pèsè ohun tí àyẹ̀wò ilẹ̀ rẹ sọ pé kò sí", "Ajílẹ̀ èyíkéyìí tí aládùúgbò kan lò"], answer: 2, why: "Orísun tó tọ́ ń pèsè àwọn oúnjẹ ewéko tí àyẹ̀wò ilẹ̀ rẹ sọ pé kò sí." },
            { objective: "O6", q: "Ẹnì kan fẹ́ ta ajílẹ̀ olówó pọ́ọ́kú fún ọ láti inú àpò ṣíṣí tí kò ní àkọlé. Kí ni o máa ṣe?", options: ["Rà á nítorí pé ó jẹ́ olówó pọ́ọ́kú", "Ra àpò tí a dì pa tí ó ní àkọlé láti ọ̀dọ̀ agro-dealer tí a forúkọ rẹ̀ sílẹ̀ dípò rẹ̀", "Dà á pọ̀ mọ́ ajílẹ̀ tìrẹ", "Ra ìlọ́po méjì rẹ̀"], answer: 1, why: "Ra àpò tí a dì pa láti ọ̀dọ̀ agro-dealer tí a forúkọ rẹ̀ sílẹ̀, kí o sì ka àkọlé rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Pípa ìlera ilẹ̀ mọ́ láti ìgbà oko kan dé òmíràn",
        questions: [
          { objective: "O4", q: "Kí ló dé tí ẹ̀wà àti irú wọn fi ń ran irè oko tó kàn lọ́wọ́?", options: ["Wọ́n ń pa gbogbo èpò", "Gbòǹgbò wọn ń ṣiṣẹ́ pọ̀ pẹ̀lú bakitéríà láti fi nitrogen kún ilẹ̀", "Wọ́n ń jẹ́ kí ilẹ̀ kan sí i", "Wọn kò nílò òjò"], answer: 1, why: "Kókó gbòǹgbò ń mú nitrogen láti inú afẹ́fẹ́; díẹ̀ ń dúró nínú ilẹ̀ fún irè oko tó kàn." },
          { objective: "O4", q: "Ètò wo ni yíyí irè oko padà tó dára?", options: ["Àgbàdo, lẹ́yìn náà ẹ̀wà, lẹ́yìn náà ọkà bàbà", "Àgbàdo, lẹ́yìn náà àgbàdo, lẹ́yìn náà àgbàdo", "Tòmátì lẹ́yìn tòmátì ní gbogbo ìgbà oko", "Fi oko sílẹ̀ láìní ìbora ní ìgbà oko kan-ò-jọ̀kan"], answer: 0, why: "Yíyí irè oko padà àti fífi ẹ̀wà sí i ń da ìyípo kòkòrò rú, ó sì ń bọ́ ilẹ̀." },
          { objective: "O5", q: "Lórí oko tó dagun, báwo ni o ṣe yẹ kí o túlẹ̀ kí o sì gbìn?", options: ["Tààrà láti ìsàlẹ̀ lọ sókè", "Ní àyíká", "Ní ìbú ilẹ̀ tó dagun, ní ìlà contour", "Ní òkè nìkan"], answer: 2, why: "Ṣíṣiṣẹ́ ní ìlà contour ń dín ìṣàn omi kù, ó sì ń jẹ́ kí ilẹ̀ dúró sí ipò rẹ̀." },
          { objective: "O6", q: "Kí ni \"àkókò tó tọ́\" túmọ̀ sí fún topdressing nitrogen sí àgbàdo?", options: ["Ìgbàkígbà tí o bá ní owó tó ṣẹ́kù", "Kí o tó ra irúgbìn", "Lẹ́yìn ìkórè", "Nígbà tí irè oko nílò rẹ̀, nígbà tí ó ga tó orúnkún, tí ilẹ̀ sì tutù"], answer: 3, why: "Nitrogen máa ń ṣiṣẹ́ jù nígbà tí irè oko tó ń dàgbà nílò rẹ̀ tí ilẹ̀ sì tutù." },
          { objective: "O6", q: "Ibo ni ibi tó tọ́ fún ajílẹ̀ gbíngbìn?", options: ["Lórí irúgbìn", "Nítòsí gbòǹgbò, láìkan irúgbìn, kí a sì bò ó", "Tí a dà sí ojú ọ̀nà", "Nínú òkìtì compost"], answer: 1, why: "Fífi ajílẹ̀ sí nítòsí gbòǹgbò, tí a bò, tí kò kan irúgbìn, ń lò ó dáadáa jù, kò sì jó irúgbìn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀",
    questions: [
      { objective: "O1", q: "Èwo ni àmì ilẹ̀ tó ní ìlera?", options: ["Funfun àti líle pẹ̀lú èèpo", "Dúdú, ó ń wó wẹ́wẹ́, pẹ̀lú ekòló", "Omi máa ń kún inú rẹ̀ nígbà gbogbo", "Omi òjò ń ṣàn lọ tààrà"], answer: 1, why: "Ilẹ̀ dúdú tí ó ń wó wẹ́wẹ́ tí ó ní ekòló ní ìlera." },
      { objective: "O1", q: "Ilẹ̀ tí ó ń lẹ̀ mọ́ ọwọ́ tí ó sì ń di okùn gígùn jẹ́ púpọ̀ jù:", options: ["Iyanrìn", "Òkúta wẹ́wẹ́", "Amọ̀", "Eérú"], answer: 2, why: "Ilẹ̀ tí ó ń lẹ̀ tí ó sì ń di okùn ní amọ̀ púpọ̀." },
      { objective: "O1", q: "Striga (witchweed) pọ̀ nínú oko kan. Èyí sábà máa ń jẹ́ àmì:", options: ["Ilẹ̀ tó ti rẹ̀, tí ọ̀rá rẹ̀ kéré", "Compost tó pọ̀ jù", "Ilẹ̀ tó pé", "Ibòji tó pọ̀ jù"], answer: 0, why: "Striga wọ́pọ̀ lórí ilẹ̀ tí kò dára, tó ti rẹ̀." },
      { objective: "O2", q: "Kí ni àyẹ̀wò ilẹ̀ ní ilé-ìwádìí ń sọ fún ọ tí ojú rẹ kò lè rí?", options: ["Àwọ̀ ilẹ̀", "Iye ekòló tí ó wà", "Ibi tí omi ti ń ṣàn", "pH àti iye oúnjẹ ewéko"], answer: 3, why: "Àyẹ̀wò ilẹ̀ ń wọn bí ilẹ̀ ṣe kan tó àti oúnjẹ ewéko inú rẹ̀." },
      { objective: "O2", q: "Ní Kenya, ilé-iṣẹ́ orílẹ̀-èdè wo ló ní àwọn ilé-ìwádìí àyẹ̀wò ilẹ̀?", options: ["KALRO", "Kenya Power", "Kenya Airways", "Kenya Wildlife Service"], answer: 0, why: "KALRO, Kenya Agricultural and Livestock Research Organization, ní àwọn ilé-ìwádìí ilẹ̀ bí èyí tó wà ní Kabete." },
      { objective: "O2", q: "Nígbà tí o bá ń gba àpẹẹrẹ ilẹ̀, ibo ni o yẹ kí o yẹra fún?", options: ["Àárín oko", "Ojú kan lórí ọ̀nà zigzag", "Ẹ̀gbẹ́ ìlà gbíngbìn", "Òkìtì ìgbẹ́ ẹran àtijọ́ tàbí òkìtì eérú"], answer: 3, why: "Àwọn ibi àjèjì ń fúnni ní àwòrán oko tí kò tọ́." },
      { objective: "O2", q: "Kí ni o yẹ kí o fi da àpẹẹrẹ ilẹ̀ pọ̀ sínú?", options: ["Àpò ajílẹ̀ àtijọ́", "Garawa tó mọ́", "Àgbá kẹ́míkà tí a ti lò", "Àpò ṣòkòtò rẹ"], answer: 1, why: "Garawa tó mọ́ ń jẹ́ kí àpẹẹrẹ má ní ajílẹ̀ tàbí kẹ́míkà tí ó máa ba èsì jẹ́." },
      { objective: "O3", q: "Gẹ́gẹ́ bí FAO ṣe sọ, ohun ìdíbàjẹ́ inú ilẹ̀ ṣe pàtàkì nítorí pé ó:", options: ["Ń jẹ́ kí ilẹ̀ le sí i", "Ń mú gbogbo oúnjẹ ewéko kúrò", "Ń di omi àti oúnjẹ ewéko mú bí kànìnkànìn", "Ń dá gbòǹgbò dúró láti dàgbà"], answer: 2, why: "Ohun ìdíbàjẹ́ inú ilẹ̀ ń di omi àti oúnjẹ ewéko mú, ó sì ń bọ́ àwọn ẹ̀dá inú ilẹ̀." },
      { objective: "O3", q: "Báwo ni òkìtì compost ṣe yẹ kí ó tutù tó?", options: ["Gbígbẹ gbáú", "Omi kún inú rẹ̀", "Ó tutù bí kànìnkànìn tí a fún", "Kò ṣe pàtàkì"], answer: 2, why: "Compost nílò ọ̀rinrin láìjẹ́ pé omi kún inú rẹ̀." },
      { objective: "O3", q: "Kí ló dé tí o fi yẹ kí o jẹ́ kí ìgbẹ́ ẹran tútù jẹrà kí o tó lò ó nítòsí irúgbìn tó ṣẹ̀ṣẹ̀ hù?", options: ["Ìgbẹ́ ẹran tútù tó gbóná lè jó irúgbìn tó ṣẹ̀ṣẹ̀ hù", "Ìgbẹ́ ẹran tó ti jẹrà wúwo jù", "Ìgbẹ́ ẹran tútù kò ní oúnjẹ ewéko", "Òfin ni níbi gbogbo"], answer: 0, why: "Ìgbẹ́ ẹran tútù lè lágbára jù kí ó sì gbóná jù fún ewéko kékeré." },
      { objective: "O3", q: "Ìṣe wo ló ń lo ohun ìdíbàjẹ́ inú ilẹ̀ tán?", options: ["Fífi compost kún un", "Sísun ìyókù irè oko", "Gbígbin ẹ̀wà", "Ìbora ilẹ̀"], answer: 1, why: "Sísun ń ba ìyókù irè oko tí ì bá ti bọ́ ilẹ̀ jẹ́." },
      { objective: "O4", q: "Èwo ló jẹ́ ara ẹ̀wà àti irú wọn (legume)?", options: ["Àgbàdo", "Ọkà bàbà", "Ẹ̀gẹ́", "Ẹ̀wà cowpea"], answer: 3, why: "Cowpea jẹ́ legume tí ó lè fi nitrogen kún ilẹ̀." },
      { objective: "O4", q: "Gbígbin àgbàdo àti ẹ̀wà papọ̀ sórí oko kan náà ni a ń pè ní:", options: ["Gbígbin irè oko pọ̀ (intercropping)", "Fífi lime sí ilẹ̀", "Kíkọ́ terrace", "Topdressing"], answer: 0, why: "Gbígbin irè oko méjì papọ̀ ni intercropping." },
      { objective: "O4", q: "Kí ló dé tí a fi ń yí irè oko padà dípò gbígbin irè oko kan náà ní gbogbo ìgbà oko?", options: ["Láti lo ajílẹ̀ púpọ̀ sí i", "Láti jẹ́ kí ríro èpò le sí i", "Láti dá kòkòrò àti àrùn dúró láti pọ̀ sí i, kí oúnjẹ ewéko sì dọ́gba", "Nítorí pé òfin béèrè rẹ̀"], answer: 2, why: "Yíyí irè oko padà ń da ìyípo kòkòrò rú, ó sì ń dá irè oko kan dúró láti fa oúnjẹ ewéko kan náà tán." },
      { objective: "O5", q: "Kí ni ìbora ilẹ̀ (mulch) ń ṣe?", options: ["Ó ń jẹ́ kí ilẹ̀ gbóná kí ó sì gbẹ sí i", "Ó ń pa ekòló", "Ó ń rọ́pò gbogbo ajílẹ̀", "Ó ń dín agbára òjò kù, ó ń jẹ́ kí ilẹ̀ tutù, ó sì ń bọ́ ọ"], answer: 3, why: "Ìbora ilẹ̀ ń dáàbò bo ilẹ̀, ó sì ń bọ́ ọ." },
      { objective: "O5", q: "Ọ̀nà tí kò wọ́n láti dín ìjẹ̀gbàrá kù lórí ilẹ̀ tó dagun díẹ̀, tí ó tún lè bọ́ ẹran ọ̀sìn, ni:", options: ["Ìlà koríko ní ìlà contour", "Títúlẹ̀ láti ìsàlẹ̀ lọ sókè", "Sísun oko", "Yíyọ gbogbo ewéko kúrò"], answer: 0, why: "FAO ṣàpèjúwe ìlà koríko gẹ́gẹ́ bí ọ̀nà tí kò wọ́n dípò terrace." },
      { objective: "O5", q: "Kí ló dé tí a fi ń ní kí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ràn wá lọ́wọ́ láti sàmì sí ìlà contour?", options: ["Kò pọn dandan rárá", "A gbọ́dọ̀ kun ìlà contour ní àwọ̀", "Àwọn ìlà tí a gbé kalẹ̀ lọ́nà tí kò tọ́ lè mú ìjẹ̀gbàrá burú sí i", "Òṣìṣẹ́ ìtọ́sọ́nà ló ni ilẹ̀ náà"], answer: 2, why: "Àwọn ìlà tí kò tẹ́jú dáadáa lè darí omi kí wọ́n sì mú ìjẹ̀gbàrá pọ̀ sí i." },
      { objective: "O6", q: "Èwo NI KÌ Í ṢE ọ̀kan lára àwọn 4R lílo ajílẹ̀?", options: ["Orísun tó tọ́", "Ìwọ̀n tó tọ́", "Ibi tó tọ́", "Àwọ̀ tó tọ́"], answer: 3, why: "Àwọn 4R ni orísun, ìwọ̀n, àkókò àti ibi." },
      { objective: "O6", q: "Níbo ni ìwọ̀n ajílẹ̀ fún irè oko rẹ ti yẹ kí ó wá?", options: ["Láti inú àméfò", "Láti àyẹ̀wò ilẹ̀ rẹ àti ìmọ̀ràn ti agbègbè rẹ", "Láti ohun tí aládùúgbò rẹ lò", "Láti àpò tó tóbi jù ní ṣọ́ọ̀bù"], answer: 1, why: "Ìwọ̀n gbọ́dọ̀ bá ilẹ̀ rẹ àti ìmọ̀ràn ìjọba mu." },
      { objective: "O6", q: "O béèrè lọ́wọ́ olùrànlọ́wọ́ AI lórí fóònù nípa àyẹ̀wò ilẹ̀ rẹ. Kí ni ọ̀nà tó tọ́ láti lò ó?", options: ["Láti ṣàlàyé ìròyìn náà ní ọ̀rọ̀ tó rọrùn, lẹ́yìn náà ṣàyẹ̀wò ìwọ̀n pẹ̀lú ilé-ìwádìí tàbí òṣìṣẹ́ ìtọ́sọ́nà", "Láti yan ìwọ̀n ajílẹ̀ dípò ilé-ìwádìí", "Láti fi ìsọfúnni báńkì rẹ ránṣẹ́ sí i", "Láti rọ́pò àyẹ̀wò ilẹ̀"], answer: 0, why: "AI lè ṣàlàyé, ṣùgbọ́n ìwọ̀n ń wá láti ilé-ìwádìí, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí ìmọ̀ràn ìjọba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 3, 5, 7, 10, 12, 14, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Àyẹ̀wò oko àti àyẹ̀wò ilẹ̀", objective: "O2", notYet: "Kò sí àyẹ̀wò oko, tàbí kò sí ètò fún àyẹ̀wò ilẹ̀.", meets: "A kọ èsì àyẹ̀wò oko sílẹ̀, pẹ̀lú ìgbà àti ibi tí a máa ṣe àyẹ̀wò ilẹ̀, tàbí ohun tí ó sọ.", exceeds: "Ó lo èsì àyẹ̀wò ilẹ̀ láti ṣe ìyókù ètò náà." },
      { name: "Ohun ìdíbàjẹ́ inú ilẹ̀", objective: "O3", notYet: "Kò fi ohun ìdíbàjẹ́ kún ilẹ̀, tàbí ó sun ìyókù irè oko.", meets: "Ètò láti fi ìyókù irè oko sílẹ̀ kí ó sì fi compost tàbí ìgbẹ́ ẹran tó ti jẹrà kún un, pẹ̀lú àkókò.", exceeds: "Ó ní òkìtì compost tí ó ti bẹ̀rẹ̀ lórí oko." },
      { name: "Yíyí irè oko padà àti ẹ̀wà", objective: "O4", notYet: "Irè oko kan náà ní gbogbo ìgbà oko, láìsí ẹ̀wà.", meets: "Yíyí irè oko padà fún ìgbà oko mẹ́ta tàbí gbígbin ẹ̀wà pọ̀ mọ́ irè oko míì pẹ̀lú àyè tó bọ́gbọ́n mu.", exceeds: "Yíyí irè oko padà àti gbígbin pọ̀ méjèèjì, pẹ̀lú ìyókù tí a fi sílẹ̀ nínú oko." },
      { name: "Ìbora àti ìjẹ̀gbàrá", objective: "O5", notYet: "Ilẹ̀ wà láìní ìbora, tàbí ó ń ṣiṣẹ́ láti ìsàlẹ̀ lọ sókè ilẹ̀ tó dagun.", meets: "Ìbora ilẹ̀, àti ohun ìdènà ìjẹ̀gbàrá ní ìlà contour níbi tí oko ti dagun.", exceeds: "Ó dárúkọ ẹni tí ó máa ràn án lọ́wọ́ láti sàmì sí ìlà contour àti bí a ṣe máa tọ́jú àwọn ohun ìdènà náà." },
      { name: "Ajílẹ̀ pẹ̀lú àwọn 4R", objective: "O6", notYet: "A kọ ajílẹ̀ sílẹ̀ láìsí ibi tí ìwọ̀n ti wá, àkókò tàbí ibi tí a máa fi sí.", meets: "A kọ orísun, ìwọ̀n, àkókò àti ibi fún ọjà kọ̀ọ̀kan, pẹ̀lú ìwọ̀n láti àyẹ̀wò ilẹ̀ tàbí ìmọ̀ràn ti agbègbè.", exceeds: "Ó lo ajílẹ̀ pẹ̀lú ohun ìdíbàjẹ́ inú ilẹ̀, ó sì kọ ibi tí ìwọ̀n ti wá sílẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ètò ilẹ̀",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ṣe àyẹ̀wò ilẹ̀, bẹ̀rẹ̀ compost tàbí gbin ẹ̀wà láàárín ìgbà oko kan (ìwádìí àtẹ̀lé)",
      "Ìyípadà nínú ìkórè tàbí owó tí a ná sórí ajílẹ̀ tí àwọn akẹ́kọ̀ọ́ tàbí ẹgbẹ́ wọn ròyìn lẹ́yìn ìgbà oko kan",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ iṣẹ́ àgbẹ̀ Koach Learn míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ọkọ́ (spade), garawa tó mọ́ àti ìwé àkọsílẹ̀",
      "Oko kan láti ṣàyẹ̀wò, pàápàá oko akẹ́kọ̀ọ́ fúnra rẹ̀",
      "Fóònù lásán láti pe ilé-ìwádìí ilẹ̀ tàbí ọ́fíìsì ìtọ́sọ́nà àgbẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò nínú oko àti láti kọ ètò ilẹ̀"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ àgbẹ̀ tàbí ilé-ẹ̀kọ́ oko (field school): ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe àyẹ̀wò oko àti àyẹ̀wò ìrí ilẹ̀ nínú oko gidi.",
      "Ẹ ṣe àṣeṣe gbígba àpẹẹrẹ ilẹ̀ àdàpọ̀ pọ̀, kí ẹ sì wá ilé-ìwádìí tó súnmọ́ jù àti owó rẹ̀ lọ́wọ́lọ́wọ́ kí ìpàdé tó bẹ̀rẹ̀.",
      "Ẹ kọ́ òkìtì compost kékeré pọ̀ gẹ́gẹ́ bí ẹgbẹ́ láti fi àwọn ìpele hàn.",
      "Má ṣe fúnni ní ìwọ̀n ajílẹ̀ fúnra rẹ; pe òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí lo ìmọ̀ràn ti agbègbè.",
      "Fi rubric ṣe àmì fún ètò ilẹ̀, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
