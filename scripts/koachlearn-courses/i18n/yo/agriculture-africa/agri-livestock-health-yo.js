"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-livestock-health.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WOAH_ND = { name: "Àjọ Àgbáyé fún Ìlera Ẹranko (WOAH): àrùn Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const FAO_ND_VILLAGE = { name: "FAO: Àrùn Newcastle nínú adìẹ abúlé", url: "https://www.fao.org/4/y5162e/y5162e05.htm" };
const FAO_BIOSEC = { name: "FAO: Ààbò lọ́wọ́ kòkòrò àrùn (biosecurity) fún ọ̀sìn adìẹ kékeré àti adìẹ tó ń jẹ̀ kiri ní Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const FAO_PRUDENT = { name: "FAO: Lílo oògùn apakòkòrò àrùn (antimicrobials) lọ́nà tó tọ́ fún ẹlẹ́dẹ̀ àti adìẹ (dókítà ẹranko, ètò ìlera, àkókò ìdádúró)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };
const VCN = { name: "Veterinary Council of Nigeria (àkọsílẹ̀ orúkọ àwọn dókítà ẹranko)", url: "https://vcn.gov.ng" };

module.exports = {
  id: "agri-livestock-health-yo",
  lang: "yo",
  translationOf: "agri-livestock-health",
  category: "Agriculture (Africa)",
  name: "Ìlera àti Ìtọ́jú Ẹran Ọ̀sìn",
  skills: "Mímọ ẹran tó ní ìlera yàtọ̀ sí èyí tó ń ṣàìsàn, Fífún ẹran ní oúnjẹ àti omi dáadáa, Mímú ilé ẹran mọ́ kí ó sì wà láìléwu, Ṣíṣètò àjẹsára pẹ̀lú dókítà ẹranko, Dídáàbò bo adìẹ lọ́wọ́ àrùn Newcastle, Ṣíṣàkóso kòkòrò àfòmọ́ àti kíkọ àkọsílẹ̀ ìlera",
  outcome: "ṣe ètò ìlera tó rọrùn fún màlúù, ewúrẹ́ tàbí adìẹ rẹ: yẹ gbogbo ẹran wò lójoojúmọ́ fún àmì àìsàn, fún wọn ní oúnjẹ àti omi dáadáa, jẹ́ kí ilé wọn mọ́, tẹ̀lé ètò àjẹsára tí o ṣe pẹ̀lú dókítà ẹranko ní agbègbè rẹ, dí àrùn Newcastle àti kòkòrò àfòmọ́ lọ́nà, kọ gbogbo ìtọ́jú sílẹ̀, kí o sì mọ ìgbà tí o máa pe dókítà ẹranko.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tó ń sin ẹran ní kékeré àti àwọn tó ń dàgbà sí i, àwọn darandaran, àwọn tó ń sin adìẹ, àwọn òṣìṣẹ́ oko àti àwọn ọ̀dọ́ àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà tí wọ́n ń sin màlúù, ewúrẹ́, àgùntàn tàbí adìẹ. Ẹran tó ní ìlera máa ń dàgbà kíákíá, ó máa ń fún ni ní wàrà àti ẹyin púpọ̀ sí i, ó sì máa ń tà ní owó gíga lọ́jà; àrùn kan ṣoṣo tó bá bẹ́ sílẹ̀ lè pa owó tí o ti fi ọdún púpọ̀ tò jọ run.",
    "Orí 1 dá lórí ìtọ́jú ojoojúmọ́: mímọ ẹran tó ní ìlera yàtọ̀ sí èyí tó ń ṣàìsàn, oúnjẹ àti omi, àti ilé ẹran àti ìmọ́tótó. Orí 2 dá lórí dídènà àrùn àti ìtọ́jú: ètò àjẹsára pẹ̀lú dókítà ẹranko, ààbò adìẹ lọ́wọ́ kòkòrò àrùn àti àrùn Newcastle, àti kòkòrò àfòmọ́, àkọsílẹ̀ àti ìgbà tí o máa pe dókítà ẹranko.",
    "Ẹ̀kọ́ yìí kò sọ iye oògùn tàbí iye àjẹsára tí o máa fún ẹran. Àwọn àrùn, àjẹsára àti oògùn tí ìjọba fọwọ́ sí yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn àti láti agbègbè kan sí òmíràn, nítorí náà máa tẹ̀lé dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko ní agbègbè rẹ àti ohun tí wọ́n kọ sára oògùn nígbà gbogbo. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan tí o máa ṣe pẹ̀lú ẹran rẹ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ìlera ojú-ewé kan fún ẹran rẹ (tìrẹ, tàbí àpẹẹrẹ bí màlúù ìfúnwàrà 3 ní Kiambu, ewúrẹ́ 15 ní Kano, tàbí adìẹ ẹlẹ́yin 200 nítòsí Kumasi): àyẹ̀wò ìlera ojoojúmọ́ rẹ, ètò oúnjẹ àti omi pẹ̀lú ìgbà ẹ̀ẹ̀rùn, òfin méjì fún ilé ẹran àti ìmọ́tótó, ètò àjẹsára tí o fohùn ṣọ̀kan lé lórí pẹ̀lú dókítà ẹranko, àwọn òfin ààbò lọ́wọ́ kòkòrò àrùn (fún adìẹ: àrùn Newcastle), bí o ṣe máa ṣàkóso aràn àti ẹ̀gbọ̀n, àwọn àkọsílẹ̀ tí o máa kọ, àti àwọn àmì tó túmọ̀ sí pé o gbọ́dọ̀ pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀, pẹ̀lú orúkọ àti nọ́mbà dókítà náà.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tó ń sin ẹran ní kékeré àti àwọn tó ń dàgbà sí i, àwọn darandaran, àwọn tó ń sin adìẹ, àwọn òṣìṣẹ́ oko àti àwọn ọ̀dọ́ àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà tí wọ́n ń sin màlúù, ewúrẹ́, àgùntàn tàbí adìẹ.",
    startingPoint: "Ọ̀pọ̀ jù lọ ń wo ẹran wọn lójoojúmọ́, wọ́n sì ń tọ́jú àìsàn nígbà tí wọ́n bá rí i, nígbà púpọ̀ pẹ̀lú oògùn tí wọ́n rà láìgba ìmọ̀ràn dókítà ẹranko. Díẹ̀ ló ń tẹ̀lé ètò àjẹsára tí a kọ sílẹ̀, tí wọ́n ń pa òfin ààbò lọ́wọ́ kòkòrò àrùn mọ́, tí wọ́n ń kọ ìtọ́jú àti àkókò ìdádúró sílẹ̀, tàbí tí wọ́n ń ṣètò oúnjẹ àti omi fún ìgbà ẹ̀ẹ̀rùn.",
    gap: "Àrùn kan ṣoṣo tó bá bẹ́ sílẹ̀ lè pa owó ọdún púpọ̀ run, oúnjẹ tí kò dára, ilé ẹran tó dọ̀tí, kòkòrò àfòmọ́ àti lílo oògùn lọ́nà tí kò tọ́ sì ń dín wàrà, ẹyin àti ìdàgbàsókè kù, wọ́n sì lè pa ènìyàn lára. Ètò ìlera tó rọrùn, tí a kọ sílẹ̀ pẹ̀lú dókítà ẹranko, ń jẹ́ kí ẹran ní ìlera, ó ń dènà àdánù, ó sì ń jẹ́ kí oúnjẹ láti oko wà láìléwu.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ ìlera ẹranko",
      "Ẹ̀rọ: fóònù lásán àti ìwé àkọsílẹ̀ fún àkọsílẹ̀ àti nọ́mbà dókítà ẹranko",
      "Kò sí iye oògùn tàbí àjẹsára: àrùn, àjẹsára àti oògùn tí a fọwọ́ sí yàtọ̀ láti agbègbè sí agbègbè; akẹ́kọ̀ọ́ ń tẹ̀lé dókítà ẹranko àti ohun tí a kọ sára oògùn",
      "Ààbò: àwọn àrùn ẹranko kan máa ń ran ènìyàn; má ṣe la òkú ẹran tó kú lójijì pẹ̀lú ẹ̀jẹ̀ tó ń jáde láéláé",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 tó bá àkókò ìtọ́jú ẹran mu"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Nígbà àyẹ̀wò ojoojúmọ́ ẹran rẹ", action: "dá àwọn àmì ẹran tó ní ìlera àti ti ẹran tó ń ṣàìsàn mọ̀, kí o sì ya ẹran tó lè máa ṣàìsàn sọ́tọ̀", standard: "kí o sì dárúkọ ó kéré tán àmì ìkìlọ̀ márùn-ún, kí o sì kàn sí dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko" },
    { id: "O2", condition: "Fún ẹran rẹ jálẹ̀ ọdún", action: "ṣètò oúnjẹ àti omi mímọ́, pẹ̀lú ìgbà ẹ̀ẹ̀rùn", standard: "láìsí oúnjẹ tó ti bu, kí o sì máa yí oúnjẹ padà díẹ̀díẹ̀" },
    { id: "O3", condition: "Fún ilé ẹran rẹ", action: "yẹ ilé ẹran wò kí o sì ṣe òfin ìmọ́tótó fún oko", standard: "pẹ̀lú ilé tó gbẹ, tó ní ibòji, tí kò kún jù, kí a ya ẹran tuntun sọ́tọ̀, kí a sì ya ẹran tó ń ṣàìsàn sọ́tọ̀" },
    { id: "O4", condition: "Pẹ̀lú dókítà ẹranko tó forúkọ sílẹ̀ tàbí òṣìṣẹ́ ìlera ẹranko", action: "fohùn ṣọ̀kan lórí ètò àjẹsára tí a kọ sílẹ̀, kí o sì pa àjẹsára mọ́ ní ibi tútù, kí ọjọ́ rẹ̀ má sì tíì kọjá", standard: "pẹ̀lú àjẹsára kọ̀ọ̀kan, àwọn ẹran tó kàn, ọjọ́ orí wọn àti ìgbà tí a máa tún un fún wọn" },
    { id: "O5", condition: "Fún agbo adìẹ", action: "ṣe òfin ààbò lọ́wọ́ kòkòrò àrùn àti ètò fún ìgbà tí àrùn Newcastle bá bẹ́ sílẹ̀", standard: "pẹ̀lú àjẹsára gẹ́gẹ́ bí ètò dókítà ẹranko àti àwọn ìgbésẹ̀ tí o máa gbé tí adìẹ bá kú lójijì" },
    { id: "O6", condition: "Fún agbo ẹran tàbí agbo adìẹ rẹ", action: "ṣètò bí o ṣe máa ṣàkóso kòkòrò àfòmọ́ pẹ̀lú dókítà ẹranko, kọ àkọsílẹ̀ ìtọ́jú, kí o sì to àwọn àmì tó nílò dókítà ẹranko lẹ́sẹ̀kẹsẹ̀", standard: "kí o sì kọ gbogbo ìtọ́jú sílẹ̀ pẹ̀lú àkókò ìdádúró rẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìtọ́jú ojoojúmọ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Àmì ẹran tó ní ìlera àti ẹran tó ń ṣàìsàn",
          minutes: 5,
          goal: "Ṣe àyẹ̀wò ìlera kíákíá lójoojúmọ́ kí o sì rí ẹran tó lè máa ṣàìsàn.",
          text: [
            "Ìwọ lo mọ ẹran rẹ jù. Wíwò wọ́n lójoojúmọ́, ní àkókò oúnjẹ tàbí àkókò fífún wàrà, máa ń jẹ́ kí o rí àìsàn ní kùtùkùtù, nígbà tí ìtọ́jú rẹ̀ kò wọ́n, kí ó tó tàn kálẹ̀.",
            "Ẹran tó ní ìlera máa ń jí pépé, ó ń wo nǹkan, ó ń dúró ó sì ń rìn dáadáa, ó ń jẹun ó sì ń mumi dáadáa; màlúù, ewúrẹ́ àti àgùntàn sì máa ń jẹ àpọ̀jẹ nígbà tí wọ́n bá ń sinmi. Ojú rẹ̀ máa ń tàn, ó sì mọ́, imú rẹ̀ mọ́, irun tàbí ìyẹ́ rẹ̀ dán, ó sì rí jọ̀lọ̀, èémí rẹ̀ jẹ́jẹ́, ìgbẹ́ àti ìtọ̀ rẹ̀ sì rí bí ó ti máa ń rí. Adìẹ tó ní ìlera máa ń yára, ògbe rẹ̀ pupa yòò, ó sì ń yin ẹyin bí ó ti máa ń ṣe.",
            "Àwọn àmì ìkìlọ̀: ó dá dúró sí ẹ̀gbẹ́ kan kúrò lọ́dọ̀ àwọn yòókù, ó tẹrí ba, kò jẹun tàbí kò jẹ àpọ̀jẹ, ojú rẹ̀ kò tàn tàbí omi ń jáde lójú rẹ̀, ikun ń dà ní imú rẹ̀, ó ń wúkọ́ tàbí ó ń mí kíákíá, ìgbẹ́ gbuuru tàbí ẹ̀jẹ̀ nínú ìgbẹ́, ó ń tiro, ara rẹ̀ wú, ọgbẹ́, wàrà tàbí ẹyin dín kù lójijì, ìyẹ́ adìẹ dìde ṣákaṣàka, ọrùn adìẹ wọ́, tàbí ikú òjijì. Ya ẹran tó ń ṣàìsàn sọ́tọ̀ kúrò lọ́dọ̀ àwọn yòókù kí o sì kàn sí dókítà ẹranko (vet) tàbí òṣìṣẹ́ ìlera ẹranko."
          ],
          steps: ["Yẹ gbogbo ẹran wò lẹ́ẹ̀kan lójoojúmọ́, ní àkókò oúnjẹ tàbí àkókò fífún wàrà.", "Wò ó: ṣé ó jí pépé, ó ń dúró ó sì ń rìn dáadáa, ó ń jẹun, ó ń jẹ àpọ̀jẹ?", "Wò ó dáadáa: ojú, imú, irun tàbí ìyẹ́, èémí, ìgbẹ́.", "Kíyè sí bí wàrà tàbí ẹyin bá dín kù.", "Ya ẹran èyíkéyìí tó ní àmì ìkìlọ̀ sọ́tọ̀.", "Kọ ohun tí o rí sílẹ̀ kí o sì pe dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko."],
          words: [["Jíjẹ àpọ̀jẹ", "nígbà tí màlúù, ewúrẹ́ àti àgùntàn bá mú oúnjẹ padà wá sí ẹnu tí wọ́n sì tún un jẹ; àmì ìlera tó dára."], ["Yíya sọ́tọ̀", "fífi ẹran tó ń ṣàìsàn sí ibì kan tó yàtọ̀ sí àwọn yòókù."], ["Òṣìṣẹ́ ìlera ẹranko", "òṣìṣẹ́ ìjọba tàbí aládàáni tó kọ́ṣẹ́, tó ń ran àgbẹ̀ lọ́wọ́ nípa ìlera ẹranko."]],
          slides: [
            { title: "Ó ní ìlera", bullets: ["Ó jí pépé, ó ń rìn dáadáa, ó ń jẹun ó sì ń mumi", "Ó ń jẹ àpọ̀jẹ; ojú ń tàn, imú mọ́", "Irun tàbí ìyẹ́ dán; ìgbẹ́ rí bí ó ti máa ń rí"] },
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Ó dá wà, ó tẹrí ba, kò jẹun", "Omi ní ojú tàbí imú, ikọ́, ìgbẹ́ gbuuru", "Títiro, ara wíwú, wàrà tàbí ẹyin dín kù"] },
            { title: "Gbé ìgbésẹ̀ ní kùtùkùtù", bullets: ["Yẹ gbogbo ẹran wò lójoojúmọ́", "Ya ẹran tó ń ṣàìsàn sọ́tọ̀", "Pe dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko"] }
          ],
          tryIt: "Ní ọ̀la ní àkókò oúnjẹ, yẹ gbogbo ẹran wò pẹ̀lú àkọsílẹ̀ yìí: jíjí pépé, jíjẹun, jíjẹ àpọ̀jẹ, ojú, imú, irun, èémí, ìgbẹ́. Kọ ìlà kan fún ẹran kọ̀ọ̀kan (tàbí fún ọgbà kọ̀ọ̀kan fún adìẹ). Sàmì sí èyí tí o máa ṣọ́ tàbí tí o máa pe dókítà ẹranko nípa rẹ̀.",
          youCanNow: "ṣe àyẹ̀wò ìlera ojoojúmọ́ kí o sì rí àwọn àmì ẹran tó ń ṣàìsàn.",
          quickCheck: [
            { objective: "O1", q: "Àmì wo ni àmì ìkìlọ̀ nínú adìẹ?", options: ["Ògbe tó pupa yòò", "Ó ń yin ẹyin bí ó ti máa ń ṣe", "Ó ń yára, ó sì ń jẹun dáadáa", "Ìyẹ́ tó dìde ṣákaṣàka"], answer: 3, why: "Ìyẹ́ tó dìde ṣákaṣàka jẹ́ àmì ìkìlọ̀; adìẹ tó ní ìlera máa ń yára, ògbe rẹ̀ sì pupa yòò." },
            { objective: "O1", q: "Ọwọ́ rẹ dí, o sì fẹ́ máa yẹ ẹran rẹ wò lẹ́ẹ̀kan lọ́sẹ̀ nìkan. Kí ni ewu rẹ̀?", options: ["Ẹran máa jẹun púpọ̀ sí i", "O máa pẹ́ kí o tó rí àìsàn, nígbà tí ìtọ́jú rẹ̀ ti wọ́n jù, tí ó sì lè ti tàn kálẹ̀", "Wàrà máa pọ̀ sí i", "Kò sí ewu kankan"], answer: 1, why: "Wíwò wọ́n lójoojúmọ́ ń jẹ́ kí o rí àìsàn ní kùtùkùtù, nígbà tí ìtọ́jú kò wọ́n, kí ó tó tàn kálẹ̀." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Oúnjẹ àti omi",
          minutes: 5,
          goal: "Ṣètò oúnjẹ àti omi mímọ́ fún ẹran rẹ jálẹ̀ ọdún, pẹ̀lú ìgbà ẹ̀ẹ̀rùn.",
          text: [
            "Omi ló ṣáájú. Ẹran nílò omi mímọ́ lójoojúmọ́, wọ́n sì nílò púpọ̀ sí i nígbà ooru; màlúù tó ń fún wàrà máa ń mu omi púpọ̀ ju èyí tí kò fún wàrà lọ, wàrà rẹ̀ sì máa ń dín kù kíákíá tí kò bá rí omi tó tó. Jẹ́ kí ọpọ́n omi àti ohun ìmumi mọ́, kí wọ́n sì wà ní ibòji, má sì jẹ́ kí adìẹ mu omi ìdọ̀tí tó dá dúró sójú kan láéláé.",
            "Màlúù, ewúrẹ́ àti àgùntàn nílò oúnjẹ koríko (roughage): koríko, koríko ẹran (fodder) bí Napier grass, Rhodes grass, desmodium tàbí lucerne, àti ìyókù irè oko bí pòròpórò àgbàdo àti ewé ẹ̀wà. Wọ́n tún nílò oúnjẹ agbára àti protein fún ẹran tó ń fún wàrà, tó lóyún tàbí tó ń dàgbà. Ewúrẹ́ tún máa ń jẹ ewé igi àti igbó. Fún wọn ní òkúta iyọ̀ (mineral lick) tàbí iyọ̀ gẹ́gẹ́ bí dókítà ẹranko tàbí òṣìṣẹ́ ìgbéga iṣẹ́ àgbẹ̀ (extension officer) ṣe gbà ọ́ nímọ̀ràn. Adìẹ tí a ń sìn fún ẹyin tàbí ẹran nílò oúnjẹ tó péye; adìẹ abúlé máa ń wá oúnjẹ kiri, ṣùgbọ́n wọ́n máa ń yin ẹyin púpọ̀ sí i, wọ́n sì máa ń dàgbà dáadáa tí wọ́n bá rí ọkà, ewébẹ̀ àti omi mímọ́ díẹ̀ sí i.",
            "Ṣètò fún ìgbà ẹ̀ẹ̀rùn: gbin koríko ẹran, kí o sì tọ́jú koríko gbígbẹ (hay), silage tàbí ìyókù irè oko gbígbẹ nígbà tí wọ́n bá pọ̀. Má ṣe fún ẹran ní oúnjẹ tó ti bu láéláé: èbu lè gbé aflatoxin, májèlé tó ń pa ẹran lára, tó sì ń wọ inú wàrà àti ẹyin. Yí oúnjẹ padà díẹ̀díẹ̀ fún ọjọ́ mélòó kan kí inú ẹran má baà dàrú."
          ],
          steps: ["Fún wọn ní omi mímọ́ lójoojúmọ́; púpọ̀ sí i nígbà ooru àti fún ẹran tó ń fún wàrà.", "Fọ ọpọ́n omi àti ohun ìmumi; jẹ́ kí wọ́n wà ní ibòji.", "Ṣètò oúnjẹ koríko: pápá ìjẹko, koríko ẹran àti ìyókù irè oko.", "Fi oúnjẹ agbára àti protein kún un fún ẹran tó ń fún wàrà, tó lóyún àti tó ń dàgbà.", "Tọ́jú koríko gbígbẹ, silage tàbí ìyókù irè oko fún ìgbà ẹ̀ẹ̀rùn.", "Da oúnjẹ tó ti bu nù; yí oúnjẹ padà díẹ̀díẹ̀."],
          words: [["Oúnjẹ koríko (roughage)", "oúnjẹ tó pọ̀ lára bí koríko, koríko gbígbẹ àti ìyókù irè oko."], ["Koríko ẹran (fodder)", "irè oko tí a gbìn láti fi bọ́ ẹran, bí Napier grass tàbí lucerne."], ["Silage", "koríko tútù tí a dì mọ́ láìjẹ́ kí atẹ́gùn wọ̀ ọ́, kí ó lè pẹ́ fún oṣù púpọ̀."], ["Òkúta iyọ̀ (mineral lick)", "òkúta iyọ̀ àti àwọn èròjà ara tí ẹran máa ń lá."]],
          slides: [
            { title: "Omi ló ṣáájú", bullets: ["Omi mímọ́ lójoojúmọ́", "Púpọ̀ sí i nígbà ooru àti fún ẹran tó ń fún wàrà", "Ohun ìmumi tó mọ́, ní ibòji"] },
            { title: "Oúnjẹ", bullets: ["Oúnjẹ koríko: koríko, koríko ẹran, ìyókù irè oko", "Agbára àti protein sí i fún ẹran tó ń fún wàrà àti tó ń dàgbà", "Èròjà ara (minerals) gẹ́gẹ́ bí dókítà ẹranko ṣe sọ"] },
            { title: "Ṣètò kí o sì dáàbò bò ó", bullets: ["Tọ́jú koríko gbígbẹ, silage tàbí ìyókù irè oko fún ìgbà ẹ̀ẹ̀rùn", "Má ṣe fún wọn ní oúnjẹ tó ti bu láéláé", "Yí oúnjẹ padà díẹ̀díẹ̀"] }
          ],
          tryIt: "Kọ àwọn oúnjẹ tí ẹran rẹ ń jẹ báyìí sílẹ̀ àti ibi tí ọ̀kọ̀ọ̀kan ti ń wá. Sàmì sí àwọn tó ń tán nígbà ẹ̀ẹ̀rùn, kí o sì kọ ọ̀nà kan láti tọ́jú tàbí gbin púpọ̀ sí i kí ìgbà yẹn tó dé. Yẹ gbogbo ohun ìmumi wò lónìí kí o sì fọ èyí tó bá dọ̀tí.",
          youCanNow: "ṣètò oúnjẹ àti omi mímọ́ fún ẹran rẹ jálẹ̀ ọdún.",
          quickCheck: [
            { objective: "O2", q: "Èwo nínú ìwọ̀nyí ni oúnjẹ koríko (roughage) fún màlúù?", options: ["Pòròpórò àgbàdo àti ewé ẹ̀wà", "Iyọ̀ nìkan", "Òkúta iyọ̀ nìkan", "Omi mímọ́"], answer: 0, why: "Oúnjẹ koríko ni koríko, koríko ẹran àti ìyókù irè oko bí pòròpórò àgbàdo àti ewé ẹ̀wà." },
            { objective: "O2", q: "Ní ọjọ́ tí ooru mú, ọpọ́n omi màlúù rẹ tó ń fún wàrà ṣófo, ó sì dọ̀tí. Kí ni o máa ṣe?", options: ["Dúró di ìrọ̀lẹ́", "Fún un ní oúnjẹ gbígbẹ púpọ̀ sí i dípò rẹ̀", "Fọ ọ́ kí o sì bu omi mímọ́ sí i, ní ibòji", "Jẹ́ kí ó mu omi inú kòtò tó dá dúró"], answer: 2, why: "Ẹran nílò omi mímọ́ lójoojúmọ́, púpọ̀ sí i nígbà ooru, wàrà sì máa ń dín kù kíákíá láìsí rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ilé ẹran àti ìmọ́tótó",
          minutes: 5,
          goal: "Yẹ ilé ẹran rẹ wò kí o sì ṣe òfin ìmọ́tótó mẹ́ta fún oko rẹ.",
          text: [
            "Ilé ẹran tó dára máa ń jẹ́ kí ẹran gbẹ, kí wọ́n wà ní ibòji, kí wọ́n wà láìléwu lọ́wọ́ olè àti ẹranko ẹhànnà, kí wọ́n má sì kún jù. Ó nílò atẹ́gùn tó mọ́ láìsí ìjì òtútù, ilẹ̀ tó gbẹ tí omi ń ṣàn kúrò lórí rẹ̀, àti àyè tó tó fún ẹran kọ̀ọ̀kan láti dùbúlẹ̀, jẹun àti mumi. Ilé ẹran tó kún jù, tó tutù, tó sì dọ̀tí máa ń tan àrùn, aràn àti àìsàn ẹsẹ̀ kálẹ̀.",
            "Jẹ́ kí ó mọ́: máa kó ìgbẹ́ àti ìtẹ́ tó ti tutù kúrò lọ́pọ̀ ìgbà (ó dára fún ajílẹ̀ compost), fọ ohun ìjẹun àti ohun ìmumi, kí o sì dí eṣinṣin, eku àti ẹyẹ igbó lọ́nà. Fún adìẹ, lo ìtẹ́ ilẹ̀ (litter) tó gbẹ kí o sì pààrọ̀ rẹ̀ tí ó bá tutù. Fọ ọwọ́ rẹ lẹ́yìn tí o bá fọwọ́ kan ẹran, pàápàá èyí tó ń ṣàìsàn.",
            "Dí àrùn lọ́nà kí ó má wọlé, kí ó má sì tàn: ya ẹran tuntun sọ́tọ̀ kúrò lọ́dọ̀ agbo ẹran tàbí agbo adìẹ rẹ fún àkókò tí dókítà ẹranko sọ kí o tó dà wọ́n pọ̀, kí o sì fi ẹran tó ń ṣàìsàn sí ọgbà tó yàtọ̀. Àwọn àrùn ẹranko kan máa ń ran ènìyàn pẹ̀lú, bí brucellosis àti anthrax. Tí ẹran kan bá kú lójijì tí ẹ̀jẹ̀ ń jáde ní imú rẹ̀ tàbí ihò ara míì, má ṣe la òkú rẹ̀; jẹ́ kí ènìyàn àti ẹran jìnnà sí i, kí o sì pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀. Palẹ̀ òkú ẹran mọ́ bí dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko ṣe sọ."
          ],
          steps: ["Yẹ ilé ẹran wò: ṣé ó gbẹ, ó ní ibòji, atẹ́gùn ń wọlé, omi ń ṣàn kúrò, kò sì kún jù?", "Máa kó ìgbẹ́ àti ìtẹ́ tó ti tutù kúrò lọ́pọ̀ ìgbà.", "Fọ ohun ìjẹun àti ohun ìmumi; dí eṣinṣin àti eku lọ́nà.", "Ya ẹran tuntun sọ́tọ̀ kí o tó dà wọ́n pọ̀, bí dókítà ẹranko ṣe sọ.", "Ní ọgbà tó yàtọ̀ fún ẹran tó ń ṣàìsàn.", "Fọ ọwọ́ lẹ́yìn tí o bá fọwọ́ kan ẹran; pe dókítà ẹranko nípa ikú òjijì."],
          words: [["Ìtẹ́ ilẹ̀ (litter)", "ohun gbígbẹ bí ìyẹ̀fun igi tí a tẹ́ sórí ilẹ̀ ilé adìẹ."], ["Ìyàsọ́tọ̀ (quarantine)", "fífi ẹran tuntun tàbí èyí tó ń ṣàìsàn sí ibì kan tó yàtọ̀ kí àrùn má baà tàn kálẹ̀."], ["Zoonosis", "àrùn tó lè ràn láti ara ẹranko sí ènìyàn tàbí láti ara ènìyàn sí ẹranko."], ["Òkú ẹran", "ara ẹran tó ti kú."]],
          slides: [
            { title: "Ilé ẹran tó dára", bullets: ["Ó gbẹ, ó ní ibòji, atẹ́gùn ń wọlé, kò sí ìjì òtútù", "Ilẹ̀ tí omi ń ṣàn kúrò lórí rẹ̀", "Àyè láti dùbúlẹ̀, jẹun àti mumi; ààbò lọ́wọ́ olè"] },
            { title: "Jẹ́ kí ó mọ́", bullets: ["Máa kó ìgbẹ́ àti ìtẹ́ tó tutù kúrò lọ́pọ̀ ìgbà", "Fọ ohun ìjẹun àti ohun ìmumi", "Dí eṣinṣin, eku àti ẹyẹ igbó lọ́nà"] },
            { title: "Dí àrùn lọ́nà", bullets: ["Ya ẹran tuntun sọ́tọ̀ kí o tó dà wọ́n pọ̀", "Ọgbà tó yàtọ̀ fún ẹran tó ń ṣàìsàn", "Fọ ọwọ́ lẹ́yìn tí o bá fọwọ́ kan ẹran"] },
            { title: "Ikú òjijì", bullets: ["Má ṣe la òkú ẹran náà", "Jẹ́ kí ènìyàn àti ẹran jìnnà sí i", "Pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Rìn yí ilé ẹran tàbí ọgbà ẹran rẹ ká pẹ̀lú àkọsílẹ̀ yìí: ó gbẹ, ó ní ibòji, atẹ́gùn ń wọlé, omi ń ṣàn kúrò, kò kún jù, ohun ìmumi mọ́. Kọ ohun kan tí o máa tún ṣe lọ́sẹ̀ yìí, àti òfin ìmọ́tótó mẹ́ta fún gbogbo ẹni tó ń bá ẹran rẹ ṣiṣẹ́.",
          youCanNow: "yẹ ilé ẹran wò kí o sì jẹ́ kí ó mọ́, ya ẹran tó ń ṣàìsàn àti ẹran tuntun sọ́tọ̀, kí o sì gbé ìgbésẹ̀ tó ní ààbò nígbà ikú òjijì.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí a fi gbọ́dọ̀ máa kó ìgbẹ́ àti ìtẹ́ tó tutù kúrò lọ́pọ̀ ìgbà?", options: ["Kí ẹran lè jẹun díẹ̀", "Láti dín oúnjẹ kù", "Ilé ẹran tó dọ̀tí tí ó sì tutù máa ń tan àrùn, aràn àti àìsàn ẹsẹ̀ kálẹ̀", "Kí ilé náà lè dà bí ẹni pé kò sí nǹkan nínú rẹ̀"], answer: 2, why: "Ilé ẹran tó kún jù, tó tutù, tó sì dọ̀tí máa ń tan àrùn, aràn àti àìsàn ẹsẹ̀ kálẹ̀." },
            { objective: "O3", q: "Òjò jò wọ ilé adìẹ rẹ, ìtẹ́ ilẹ̀ (litter) sì ti tutù. Kí ni o máa ṣe?", options: ["Pààrọ̀ ìtẹ́ tó tutù sí èyí tó gbẹ kí o sì dí ibi tí òjò ti ń jò", "Fi í sílẹ̀ kí ó gbẹ fúnra rẹ̀", "Da oúnjẹ sórí rẹ̀", "Kó àwọn adìẹ jáde sínú òjò"], answer: 0, why: "Adìẹ nílò ìtẹ́ tó gbẹ; a máa ń pààrọ̀ ìtẹ́ tó tutù, a sì máa ń tún ohun tó fà á ṣe." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìtọ́jú ojoojúmọ́",
        questions: [
          { objective: "O1", q: "Èwo ni àmì màlúù tàbí ewúrẹ́ tó ní ìlera?", options: ["Ó dá dúró, ó sì tẹrí ba", "Ó ń jẹ àpọ̀jẹ nígbà tó ń sinmi", "Omi ń jáde ní ojú àti imú rẹ̀", "Kò mumi"], answer: 1, why: "Jíjẹ àpọ̀jẹ fi hàn pé inú rẹ̀ ń ṣiṣẹ́ dáadáa." },
          { objective: "O1", q: "Ewúrẹ́ kan kò jẹun, ó sì dá dúró kúrò lọ́dọ̀ agbo. Kí ni o máa kọ́kọ́ ṣe?", options: ["Dúró fún ọ̀sẹ̀ kan", "Tà á lẹ́sẹ̀kẹsẹ̀", "Yà á sọ́tọ̀ kí o sì kàn sí dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko", "Fún un ní oògùn èyíkéyìí láti ṣọ́ọ̀bù"], answer: 2, why: "Yíyà á sọ́tọ̀ ń dáàbò bo agbo, dókítà ẹranko sì lè wá ohun tó fà á." },
          { objective: "O2", q: "Ẹ̀sẹ́ àgbàdo (maize bran) rẹ ti bu. Kí ni o yẹ kí o ṣe?", options: ["Dà á nù; má ṣe fi bọ́ ẹran", "Fi bọ́ adìẹ", "Pò ó mọ́ oúnjẹ tó dára", "Fi bọ́ màlúù tó ń fún wàrà nìkan"], answer: 0, why: "Èbu lè gbé aflatoxin, tó ń pa ẹran lára, tó sì ń wọ inú wàrà àti ẹyin." },
          { objective: "O2", q: "Báwo ni o ṣe yẹ kí o múra sílẹ̀ fún ìgbà ẹ̀ẹ̀rùn?", options: ["Ta gbogbo ọpọ́n omi", "Fún ẹran ní koríko gbígbẹ tó ti bu", "Dá fífún wọn ní omi dúró", "Gbin koríko ẹran kí o sì tọ́jú koríko gbígbẹ, silage tàbí ìyókù irè oko"], answer: 3, why: "Oúnjẹ tí a tọ́jú ń gbé ẹran la ìgbà ẹ̀ẹ̀rùn já." },
          { objective: "O3", q: "Màlúù kan kú lójijì, ẹ̀jẹ̀ sì ń jáde ní imú rẹ̀. Kí ni o máa ṣe?", options: ["La á láti mọ ohun tó pa á", "Má ṣe là á; jẹ́ kí ènìyàn jìnnà sí i kí o sì pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀", "Ta ẹran rẹ̀ kíákíá", "Fi í sílẹ̀ fún ajá"], answer: 1, why: "Ikú òjijì pẹ̀lú ẹ̀jẹ̀ lè jẹ́ anthrax, tó lè ran ènìyàn; a kò gbọdọ̀ la òkú náà." }
        ]
      }
    },
    {
      name: "Orí 2: Dídènà àti títọ́jú àrùn",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ètò àjẹsára pẹ̀lú dókítà ẹranko ní agbègbè rẹ",
          minutes: 5,
          goal: "Fohùn ṣọ̀kan lórí ètò àjẹsára tí a kọ sílẹ̀ pẹ̀lú dókítà ẹranko tó forúkọ sílẹ̀, kí o sì jẹ́ kí àjẹsára ṣiṣẹ́.",
          text: [
            "Àjẹsára (vaccine) ń dènà ọ̀pọ̀ àrùn ẹran ọ̀sìn tó le, owó rẹ̀ sì kéré gan-an sí ti ìtọ́jú. Àwọn àjẹsára tí ẹran rẹ nílò, àti ìgbà tí wọ́n nílò wọn, sinmi lé orílẹ̀-èdè rẹ, agbègbè rẹ àti àwọn àrùn tó wà níbẹ̀. Àpẹẹrẹ tó wọ́pọ̀ ni foot-and-mouth disease, lumpy skin disease, anthrax àti blackquarter nínú màlúù; peste des petits ruminants (PPR) nínú ewúrẹ́ àti àgùntàn; àti àrùn Newcastle, Gumboro àti fowl pox nínú adìẹ. Dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko tó mọ agbègbè rẹ nìkan ló lè fún ọ ní ètò tó tọ́.",
            "Ní kí dókítà ẹranko rẹ kọ kàlẹ́ńdà ọdún kan fún ọ: àjẹsára kọ̀ọ̀kan, fún ẹran wo, ní ọjọ́ orí wo, àti ìgbà tí a máa tún un fún wọn. Lo dókítà ẹranko tó forúkọ sílẹ̀ tàbí òṣìṣẹ́ ìlera ẹranko tó kọ́ṣẹ́. Ní Nàìjíríà, Veterinary Council of Nigeria ló ń tọ́jú àkọsílẹ̀ orúkọ àwọn dókítà ẹranko; ní Kenya, Kenya Veterinary Board ló ń forúkọ àwọn dókítà ẹranko àti para-vet sílẹ̀; ní Ghana, Veterinary Services Directorate ti Ministry of Food and Agriculture (MoFA) ló ń ṣe iṣẹ́ ìlera ẹranko àti ìpolongo àjẹsára. Ìpolongo ìjọba máa ń jẹ́ ọ̀fẹ́ tàbí owó kékeré nígbà míì, nítorí náà máa tẹ́tí sí ìkéde.",
            "Àjẹsára jẹ́ ohun ẹlẹ́mìí tàbí ohun ẹlẹgẹ́. Ra wọn ní ṣọ́ọ̀bù agrovet tó ní ìwé àṣẹ nìkan, wo ọjọ́ tí wọ́n máa bàjẹ́ (expiry date), jẹ́ kí wọ́n wà ní ibi tútù (nínú cool box tàbí fíríìjì, kúrò nínú oòrùn) láti ṣọ́ọ̀bù títí dé ọ̀dọ̀ ẹran, kí o sì lò wọ́n bí ohun tí a kọ sára rẹ̀ àti dókítà ẹranko ṣe sọ. Àjẹsára tí ooru ti mú lè má dáàbò bo ẹran rẹ."
          ],
          steps: ["Bi dókítà ẹranko tó forúkọ sílẹ̀ tàbí òṣìṣẹ́ ìlera ẹranko léèrè àwọn àrùn tó jẹ́ ewu ní agbègbè rẹ.", "Gba kàlẹ́ńdà ọdún kan tí a kọ sílẹ̀: àjẹsára, ẹran, ọjọ́ orí, ọjọ́ tí a máa tún un fún wọn.", "Ra àjẹsára ní agrovet tó ní ìwé àṣẹ nìkan; wo ọjọ́ tí wọ́n máa bàjẹ́.", "Jẹ́ kí àjẹsára wà ní ibi tútù láti ṣọ́ọ̀bù títí dé ọ̀dọ̀ ẹran.", "Lò wọ́n gẹ́gẹ́ bí ohun tí a kọ sára rẹ̀ àti dókítà ẹranko ṣe sọ.", "Kọ àjẹsára kọ̀ọ̀kan sílẹ̀: ọjọ́, ẹran, àjẹsára, nọ́mbà batch, ẹni tó fún wọn."],
          words: [["Àjẹsára (vaccine)", "ohun tó ń kọ́ ara ẹran bí ó ṣe máa bá àrùn jà kí ó tó ṣàìsàn."], ["Ètò àjẹsára", "kàlẹ́ńdà tó sọ àjẹsára tí a máa fún, ẹran tí a máa fún, àti ìgbà tí a máa fún wọn."], ["Cold chain", "jíjẹ́ kí àjẹsára wà ní ibi tútù láti ọ̀dọ̀ ẹni tó ṣe é títí dé ọ̀dọ̀ ẹran."], ["PPR", "peste des petits ruminants, àrùn kòkòrò àìfojúrí (virus) tó ń pa ewúrẹ́ àti àgùntàn."]],
          slides: [
            { title: "Ìdí tí a fi ń fún ẹran ní àjẹsára", bullets: ["Dídènà àrùn kéré ní owó gan-an sí ìtọ́jú", "Àjẹsára tí o nílò sinmi lé agbègbè rẹ", "Dókítà ẹranko ní agbègbè rẹ nìkan ló lè ṣe ètò náà"] },
            { title: "Àpẹẹrẹ tó wọ́pọ̀", bullets: ["Màlúù: foot-and-mouth, lumpy skin, anthrax, blackquarter", "Ewúrẹ́ àti àgùntàn: PPR", "Adìẹ: àrùn Newcastle, Gumboro, fowl pox"] },
            { title: "Lo ìrànlọ́wọ́ tó forúkọ sílẹ̀", bullets: ["Nàìjíríà: Veterinary Council of Nigeria", "Kenya: Kenya Veterinary Board", "Ghana: Veterinary Services Directorate (MoFA)"] },
            { title: "Jẹ́ kí àjẹsára ṣiṣẹ́", bullets: ["Agrovet tó ní ìwé àṣẹ; wo ọjọ́ tí wọ́n máa bàjẹ́", "Jẹ́ kí ó wà ní ibi tútù láti ṣọ́ọ̀bù dé ọ̀dọ̀ ẹran", "Tẹ̀lé ohun tí a kọ sára rẹ̀ àti dókítà ẹranko"] }
          ],
          sources: [VCN],
          tryIt: "Pe dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko ní agbègbè rẹ tàbí lọ sọ́dọ̀ wọn kí o sì béèrè: àwọn àrùn wo ni mo gbọ́dọ̀ fún ẹran mi ní àjẹsára fún níbí, nígbà wo sì ni? Kọ ìdáhùn wọn sílẹ̀ bí kàlẹ́ńdà oṣù 12, kí o sì fi nọ́mbà dókítà ẹranko náà pamọ́ sínú fóònù rẹ.",
          youCanNow: "gba ètò àjẹsára lọ́wọ́ dókítà ẹranko tó forúkọ sílẹ̀, kí o sì jẹ́ kí àjẹsára wà ní ibi tútù kí ó lè ṣiṣẹ́.",
          quickCheck: [
            { objective: "O4", q: "Èwo ni àrùn adìẹ tí àjẹsára lè dènà?", options: ["East Coast fever", "Àrùn Newcastle", "Brucellosis nínú ewúrẹ́", "Foot rot"], answer: 1, why: "Àrùn Newcastle, Gumboro àti fowl pox jẹ́ àrùn adìẹ tó wọ́pọ̀ tí àjẹsára ń dènà." },
            { objective: "O4", q: "Dókítà ẹranko rẹ fún ẹran rẹ ní àjẹsára àkọ́kọ́ ṣùgbọ́n kò kọ nǹkan kan sílẹ̀ fún ọ. Kí ni o máa béèrè fún?", options: ["Àjẹsára tí owó rẹ̀ kéré jù", "Kò sí nǹkan; o máa rántí", "Àjẹsára fún gbogbo àrùn tó wà láyé", "Kàlẹ́ńdà ọdún kan tí a kọ sílẹ̀: àjẹsára kọ̀ọ̀kan, ẹran wo, ọjọ́ orí wo àti ìgbà tí a máa tún un fún wọn"], answer: 3, why: "Kàlẹ́ńdà tí dókítà ẹranko kọ sílẹ̀ ń jẹ́ kí gbogbo àjẹsára wáyé lásìkò." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ààbò adìẹ lọ́wọ́ kòkòrò àrùn àti àrùn Newcastle",
          minutes: 5,
          goal: "Ṣe òfin ààbò lọ́wọ́ kòkòrò àrùn tó máa dí àrùn Newcastle àti àwọn àrùn míì lọ́nà kúrò nínú agbo adìẹ rẹ.",
          text: [
            "Àrùn Newcastle jẹ́ ọ̀kan lára àwọn àrùn adìẹ tó burú jù ní Áfíríkà. Àjọ Àgbáyé fún Ìlera Ẹranko (WOAH) ṣàpèjúwe àwọn àmì bí mímí hẹlẹhẹlẹ, wíwúkọ́ àti sísín; àmì ara bí gìrìgìrì, rírọ ara àti ọrùn wíwọ́; ìgbẹ́ gbuuru; àti ẹyin tó dín kù. Ikú lè dé ìdá 100 nínú 100 agbo adìẹ, ó sì lè ran fẹ́rẹ̀ẹ́ gbogbo adìẹ inú agbo láàárín ọjọ́ díẹ̀.",
            "WOAH ṣàlàyé pé ó ń tàn kálẹ̀ nípa fífarakan adìẹ tó ń ṣàìsàn àti ìgbẹ́ wọn, àti nípasẹ̀ oúnjẹ, omi, irinṣẹ́ àti aṣọ tí kòkòrò àrùn ti wà lára wọn. Ìdí nìyí tí ààbò lọ́wọ́ kòkòrò àrùn (biosecurity), àwọn ìgbésẹ̀ ojoojúmọ́ tó rọrùn tó ń dí kòkòrò àrùn lọ́nà, fi ṣe pàtàkì bí àjẹsára. Ìtọ́sọ́nà FAO fún agbo adìẹ kékeré ní Kenya tẹnu mọ́ ọn pé ọ̀pọ̀ lára àwọn ìgbésẹ̀ wọ̀nyí kò náni ní owó púpọ̀ tàbí kò náni ní nǹkan kan rárá.",
            "Fún gbogbo agbo adìẹ ní àjẹsára àrùn Newcastle gẹ́gẹ́ bí ètò tí dókítà ẹranko fún ọ. Fún adìẹ abúlé, FAO ṣàpèjúwe àwọn àjẹsára tó lè fara da ooru (bí I-2) tí a lè fi sí ojú bí oògùn ojú; bi òṣìṣẹ́ ìlera ẹranko léèrè èyí tó wà. Tí ọ̀pọ̀ adìẹ bá ṣàìsàn tàbí kú lójijì, ti agbo náà mọ́ inú ilé, sọ fún dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko lẹ́sẹ̀kẹsẹ̀, má sì ta adìẹ tàbí kó wọn lọ síbòmíì. WOAH gbani nímọ̀ràn pé lẹ́yìn tí àrùn bá bẹ́ sílẹ̀, kí a fi ilé tí a ti fọ̀ sílẹ̀ láìsí adìẹ fún ọjọ́ 21 kí a tó kó adìẹ tuntun wọlé."
          ],
          steps: ["Má ṣe jẹ́ kí àlejò wọ ilé adìẹ; fọ ọwọ́, kí o sì lo foot dip tàbí bàtà ọ̀tọ̀.", "Ra adìẹ láti ibi tí o fọkàn tán, tí adìẹ wọn ní ìlera nìkan; kọ́kọ́ ya adìẹ tuntun sọ́tọ̀.", "Jẹ́ kí ẹyẹ igbó, eku àti adìẹ àwọn ẹlòmíì jìnnà sí oúnjẹ àti omi.", "Máa fọ ohun ìmumi, ohun ìjẹun àti apẹ̀rẹ̀ adìẹ, kí o sì máa fi oògùn apakòkòrò fọ̀ wọ́n lọ́pọ̀ ìgbà.", "Fún gbogbo agbo ní àjẹsára gẹ́gẹ́ bí ètò dókítà ẹranko.", "Tí adìẹ bá ṣàìsàn tàbí kú lójijì: ti agbo mọ́ ilé, pe dókítà ẹranko, má ta adìẹ, má sì kó wọn lọ síbòmíì."],
          words: [["Ààbò lọ́wọ́ kòkòrò àrùn (biosecurity)", "àwọn ìgbésẹ̀ ojoojúmọ́ tó rọrùn tó ń dí kòkòrò àrùn lọ́nà kúrò nínú oko, tí ó sì ń dá wọn dúró kí wọ́n má tàn kálẹ̀."], ["Àrùn Newcastle", "àrùn kòkòrò àìfojúrí (virus) tó ń tàn kíákíá láàárín adìẹ, tó sì lè pa gbogbo agbo."], ["Foot dip", "àwo omi oògùn apakòkòrò tí ènìyàn máa ń tẹ ẹsẹ̀ bọ̀ kí wọ́n tó wọ ilé ẹran."], ["Àjẹsára tó lè fara da ooru (thermostable vaccine)", "àjẹsára tó lè fara da ooru dáadáa ju àwọn míì lọ, tó wúlò ní abúlé; síbẹ̀, a ṣì gbọ́dọ̀ jẹ́ kí ó tutù bí ó ti lè ṣeé ṣe tó."]],
          slides: [
            { title: "Àrùn Newcastle (WOAH)", bullets: ["Mímí hẹlẹhẹlẹ, ikọ́, ọrùn wíwọ́, ìgbẹ́ gbuuru", "Ẹyin dín kù; ikú tó dé ìdá 100 nínú 100", "Gbogbo agbo lè kó o láàárín ọjọ́ díẹ̀"] },
            { title: "Bí ó ṣe ń tàn kálẹ̀", bullets: ["Adìẹ tó ń ṣàìsàn àti ìgbẹ́ wọn", "Oúnjẹ, omi, irinṣẹ́ àti aṣọ tí kòkòrò àrùn wà lára wọn", "Biosecurity ń dá a dúró; ọ̀pọ̀ rẹ̀ jẹ́ ọ̀fẹ́"] },
            { title: "Àwọn òfin biosecurity", bullets: ["Dín àlejò kù; fọ ọwọ́; foot dip", "Kọ́kọ́ ya adìẹ tuntun sọ́tọ̀", "Lé ẹyẹ igbó àti eku jìnnà; fọ ohun ìmumi"] },
            { title: "Fún wọn ní àjẹsára kí o sì yára gbé ìgbésẹ̀", bullets: ["Gbogbo agbo, gẹ́gẹ́ bí ètò dókítà ẹranko", "Adìẹ abúlé: béèrè nípa àjẹsára tí a ń fi sí ojú", "Ikú òjijì: ti wọ́n mọ́lé, pe dókítà ẹranko, má ṣe tà wọ́n"] }
          ],
          sources: [WOAH_ND, FAO_ND_VILLAGE, FAO_BIOSEC],
          tryIt: "Kọ òfin ààbò lọ́wọ́ kòkòrò àrùn márùn-ún fún adìẹ rẹ kí o sì lẹ̀ ẹ́ mọ́ ẹnu ọ̀nà ilé adìẹ. Lẹ́yìn náà bi dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko léèrè ìgbà tí agbo adìẹ rẹ máa gba àjẹsára àrùn Newcastle tó kàn, kí o sì kọ ọ́ sínú kàlẹ́ńdà rẹ.",
          youCanNow: "dáàbò bo agbo adìẹ lọ́wọ́ àrùn Newcastle pẹ̀lú biosecurity àti àjẹsára, kí o sì yára gbé ìgbésẹ̀ tí adìẹ bá ń kú.",
          quickCheck: [
            { objective: "O5", q: "Kí ni biosecurity?", options: ["Irú àjẹsára kan", "Irú adìẹ kan", "Èròjà tí a ń fi kún oúnjẹ", "Àwọn ìgbésẹ̀ ojoojúmọ́ tó rọrùn tó ń dí kòkòrò àrùn lọ́nà kúrò nínú oko"], answer: 3, why: "Biosecurity ni àwọn ìgbésẹ̀ ojoojúmọ́ tó ń dí kòkòrò àrùn lọ́nà, ọ̀pọ̀ nínú wọn kò sì náni ní owó púpọ̀ tàbí kò náni ní nǹkan kan." },
            { objective: "O5", q: "Aládùúgbò kan tí adìẹ rẹ̀ ti ń ṣàìsàn fẹ́ yá àwo ẹyin àti ohun ìjẹun adìẹ rẹ. Kí ni o máa ṣe?", options: ["Yá a ní wọ́n kí o sì tún lò wọ́n nígbà tí wọ́n bá dá wọn padà", "Má ṣe pín irinṣẹ́, nítorí kòkòrò àrùn ń tàn kálẹ̀ lára wọn", "Yá a ní wọ́n fún ọjọ́ kan ṣoṣo", "Fi adìẹ rẹ ṣe pàṣípààrọ̀ dípò rẹ̀"], answer: 1, why: "Àrùn Newcastle ń tàn kálẹ̀ nípasẹ̀ oúnjẹ, omi, irinṣẹ́ àti aṣọ tí kòkòrò àrùn wà lára wọn." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kòkòrò àfòmọ́, àkọsílẹ̀ àti ìgbà tí o máa pe dókítà ẹranko",
          minutes: 6,
          goal: "Ṣètò bí o ṣe máa ṣàkóso kòkòrò àfòmọ́ pẹ̀lú dókítà ẹranko, kọ àkọsílẹ̀ ìtọ́jú, kí o sì mọ àwọn àmì tó nílò dókítà ẹranko lẹ́sẹ̀kẹsẹ̀.",
          text: [
            "Aràn inú ìfun àti ẹ̀gbọ̀n (ticks), mites àti fleas lára ẹran máa ń mu ẹ̀jẹ̀, wọ́n máa ń dá ìdàgbàsókè dúró, wọ́n sì máa ń tan àrùn kálẹ̀; ẹ̀gbọ̀n ló ń tan East Coast fever kálẹ̀ nínú màlúù ní Ìlà-oòrùn Áfíríkà. Àmì aràn ni ìdàgbàsókè tí kò dára, irun tí kò dán, ikùn tó wú, ìgbẹ́ gbuuru, àti ìpénpéjú tàbí èrìgì tó funfun láìní ẹ̀jẹ̀. Dín kòkòrò àfòmọ́ kù pẹ̀lú ilé ẹran tó mọ́ tí ó sì gbẹ, kíkó ẹran tó ń jẹko lọ sí pápá ìjẹko tuntun, àti àìjẹ́ kí wọ́n kún jù. Dókítà ẹranko rẹ lè sọ ìgbà tí o máa fún wọn ní oògùn aràn, tí o máa rì wọ́n bọ omi oògùn (dip) tàbí fín oògùn sí wọn lára, àti oògùn tí o máa lò. Máa lo iye oògùn tí a kọ sára rẹ̀ tàbí tí dókítà ẹranko sọ nígbà gbogbo: tí ó bá kéré jù, aràn àti ẹ̀gbọ̀n máa di alágbára sí oògùn náà (resistance), tí ó bá sì pọ̀ jù, ó lè pa ẹran lára.",
            "Oògùn máa ń fi ìyókù sílẹ̀ nínú ara ẹran. Gbogbo oògùn ló ní àkókò ìdádúró (withdrawal period): àkókò lẹ́yìn ìtọ́jú kí a tó lè ta tàbí jẹ wàrà, ẹyin tàbí ẹran láti ara ẹran náà. FAO tẹnu mọ́ ọn pé kí o bá dókítà ẹranko ṣe ètò ìlera, kí o sì kọ gbogbo ìtọ́jú sílẹ̀ pẹ̀lú àkókò ìdádúró rẹ̀. Má ṣe lo oògùn apakòkòrò àrùn (antibiotics) láti mú kí ẹran dàgbà kíákíá tàbí láìgba ìmọ̀ràn dókítà ẹranko láéláé.",
            "Àkọsílẹ̀ ń sọ àròjinlẹ̀ di ìmọ̀. Fún ẹran kọ̀ọ̀kan tàbí agbo kọ̀ọ̀kan, kọ: àmì ìdánimọ̀, ìbímọ, àjẹsára, ìtọ́jú (ọjọ́, oògùn, ẹni tó fún un, ìgbà tí àkókò ìdádúró máa parí), ìwọ̀n tàbí iye ohun tí wọ́n ń mú jáde, àti ikú. Ìwé àkọsílẹ̀ lè ṣiṣẹ́; spreadsheet lórí fóònù náà lè ṣiṣẹ́. Pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀ fún: ikú òjijì, ọ̀pọ̀ ẹran tó ń ṣàìsàn lẹ́ẹ̀kan náà, ẹran tí kò jẹun fún ju ọjọ́ kan lọ, ìbímọ tó le, ẹ̀jẹ̀ tó ń jáde púpọ̀, àmì ara bí gìrìgìrì, tàbí àrùn èyíkéyìí tí ìjọba rẹ sọ pé a gbọ́dọ̀ fi tó wọn létí."
          ],
          steps: ["Ní kí dókítà ẹranko rẹ fún ọ ní ètò kòkòrò àfòmọ́: ìgbà tí o máa fún wọn ní oògùn aràn àti tí o máa rì wọ́n bọ omi oògùn tàbí fín oògùn sí wọn, àti oògùn wo.", "Lo iye oògùn tí a kọ sára rẹ̀ tàbí tí dókítà ẹranko sọ; má ṣe méfò láéláé.", "Kó ẹran tó ń jẹko lọ sí pápá ìjẹko tuntun; jẹ́ kí ilé ẹran gbẹ.", "Kọ gbogbo ìtọ́jú sílẹ̀ pẹ̀lú ọjọ́ tí àkókò ìdádúró máa parí.", "Má ṣe ta wàrà, ẹyin tàbí ẹran kí àkókò ìdádúró tó parí.", "Pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀ fún ikú òjijì, ọ̀pọ̀ ẹran tó ń ṣàìsàn, ìbímọ tó le tàbí àmì ara bí gìrìgìrì."],
          words: [["Kòkòrò àfòmọ́ (parasite)", "aràn, ẹ̀gbọ̀n, mite tàbí flea tó ń gbé lára tàbí nínú ẹran, tó sì ń pa á lára."], ["Fífún ní oògùn aràn (deworming)", "fífún ẹran ní oògùn tó ń pa aràn inú ara rẹ̀."], ["Àkókò ìdádúró (withdrawal period)", "àkókò lẹ́yìn ìtọ́jú kí a tó lè ta tàbí jẹ wàrà, ẹyin tàbí ẹran."], ["Resistance", "nígbà tí aràn, ẹ̀gbọ̀n tàbí kòkòrò àrùn bá yè oògùn tó máa ń pa wọ́n tẹ́lẹ̀."]],
          slides: [
            { title: "Kòkòrò àfòmọ́", bullets: ["Aràn: ìdàgbàsókè tí kò dára, ikùn wíwú, ìpénpéjú funfun", "Ẹ̀gbọ̀n ń tan àrùn, bí East Coast fever", "Ilé ẹran tó mọ́, pápá ìjẹko tuntun, kò kún jù"] },
            { title: "Tọ́jú wọn lọ́nà tó tọ́", bullets: ["Ètò dókítà ẹranko fún oògùn aràn àti dip", "Iye oògùn láti ara oògùn tàbí láti ọ̀dọ̀ dókítà ẹranko; má ṣe méfò", "Iye oògùn tí kò tọ́ ń mú resistance wá"] },
            { title: "Àkókò ìdádúró", bullets: ["Àkókò kí a tó lè ta wàrà, ẹyin tàbí ẹran", "Kọ ọjọ́ tí ó máa parí fún ìtọ́jú kọ̀ọ̀kan", "Kò sí antibiotics láìgba ìmọ̀ràn dókítà ẹranko"] },
            { title: "Pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀", bullets: ["Ikú òjijì; ọ̀pọ̀ ẹran ń ṣàìsàn lẹ́ẹ̀kan náà", "Kò jẹun ju ọjọ́ kan lọ; ìbímọ tó le", "Ẹ̀jẹ̀, àmì ara bí gìrìgìrì, àrùn tí a gbọ́dọ̀ fi tó ìjọba létí"] }
          ],
          sources: [FAO_PRUDENT, WOAH_ND],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìlera ojú-ewé kan rẹ. Fi àyẹ̀wò ojoojúmọ́ rẹ sí i, ètò oúnjẹ àti omi, òfin ilé ẹran, kàlẹ́ńdà àjẹsára láti ọ̀dọ̀ dókítà ẹranko, òfin biosecurity, ètò kòkòrò àfòmọ́, àwọn àkọsílẹ̀ tí o máa kọ, àti àwọn àmì tó túmọ̀ sí pé o máa pe dókítà ẹranko, pẹ̀lú orúkọ àti nọ́mbà dókítà ẹranko náà lókè.",
          youCanNow: "ṣàkóso kòkòrò àfòmọ́ pẹ̀lú dókítà ẹranko, kọ àkọsílẹ̀ ìtọ́jú pẹ̀lú àkókò ìdádúró, kí o sì mọ ìgbà tí o máa pe dókítà ẹranko.",
          quickCheck: [
            { objective: "O6", q: "Àrùn wo ni ẹ̀gbọ̀n ń tan kálẹ̀ nínú màlúù ní Ìlà-oòrùn Áfíríkà?", options: ["East Coast fever", "Àrùn Newcastle", "Fowl pox", "PPR"], answer: 0, why: "Ẹ̀gbọ̀n ló ń tan East Coast fever kálẹ̀ nínú màlúù ní Ìlà-oòrùn Áfíríkà." },
            { objective: "O6", q: "O tọ́jú ewúrẹ́ kan lónìí. Kí ni o máa kọ sínú àkọsílẹ̀?", options: ["Kò sí nǹkan, tí ewúrẹ́ náà bá ti dà bí ẹni pé ara rẹ̀ ti yá", "Owó oògùn náà nìkan", "Ọjọ́, oògùn, ẹni tó fún un, àti ìgbà tí àkókò ìdádúró máa parí", "Orúkọ aládùúgbò rẹ"], answer: 2, why: "Kíkọ gbogbo ìtọ́jú sílẹ̀ pẹ̀lú àkókò ìdádúró rẹ̀ ń jẹ́ kí wàrà àti ẹran wà láìléwu láti tà àti láti jẹ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídènà àti títọ́jú àrùn",
        questions: [
          { objective: "O4", q: "Ta ló yẹ kí ó ṣe ètò àjẹsára ẹran rẹ?", options: ["Aládùúgbò kan ní orílẹ̀-èdè míì", "Àwòrán ìpolówó ní ṣọ́ọ̀bù oúnjẹ ẹran", "Dókítà ẹranko tó forúkọ sílẹ̀ tàbí òṣìṣẹ́ ìlera ẹranko tó mọ agbègbè rẹ", "Ẹnikẹ́ni lórí ayélujára"], answer: 2, why: "Àjẹsára tí a nílò, àti ìgbà tí a nílò wọn, sinmi lé àwọn àrùn tó wà ní agbègbè rẹ." },
          { objective: "O4", q: "O ra àjẹsára, o sì rin ìrìn wákàtí mẹ́ta nínú oòrùn padà sílé. Kí ni ewu rẹ̀?", options: ["Ooru lè ti ba àjẹsára náà jẹ́, kí ó má sì dáàbò bo ẹran rẹ", "Ó máa lágbára sí i", "Kò sí ewu rárá", "Ó máa di oògùn aràn"], answer: 0, why: "A gbọ́dọ̀ jẹ́ kí àjẹsára wà ní ibi tútù láti ṣọ́ọ̀bù títí dé ọ̀dọ̀ ẹran." },
          { objective: "O5", q: "Èwo ni àmì àrùn Newcastle nínú adìẹ?", options: ["Ògbe tó pupa yòò sí i", "Ẹyin tó pọ̀ sí i", "Ìdàgbàsókè tó yára", "Ọrùn wíwọ́, mímí hẹlẹhẹlẹ àti ikú òjijì"], answer: 3, why: "WOAH to àwọn àmì èémí àti àmì ara bí gìrìgìrì, ẹyin tó dín kù àti ikú púpọ̀." },
          { objective: "O5", q: "Ọ̀pọ̀ lára adìẹ rẹ kú lójijì. Kí ni o yẹ kí o ṣe?", options: ["Ta àwọn tó kù kíákíá lọ́jà", "Ti agbo mọ́ ilé, pe dókítà ẹranko, má sì kó adìẹ lọ síbòmíì tàbí tà wọ́n", "Fún àwọn aládùúgbò ní àwọn adìẹ tó kú", "Ra adìẹ tuntun ní ọjọ́ kan náà"], answer: 1, why: "Kíkó adìẹ lọ síbòmíì tàbí títà wọ́n ń tan àrùn kálẹ̀; dókítà ẹranko gbọ́dọ̀ wá ohun tó fà á." },
          { objective: "O6", q: "Kí ni àkókò ìdádúró (withdrawal period)?", options: ["Àkókò kí a tó lè ta tàbí jẹ wàrà, ẹyin tàbí ẹran láti ara ẹran tí a tọ́jú", "Ìsinmi fún àgbẹ̀", "Àkókò tí àjẹsára máa ń pẹ́", "Àkókò láti sá ọkà gbẹ"], answer: 0, why: "Ó ń jẹ́ kí ìyókù oògùn má wọ inú oúnjẹ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìlera àti Ìtọ́jú Ẹran Ọ̀sìn",
    questions: [
      { objective: "O1", q: "Ìgbà wo ló dára fún àyẹ̀wò ìlera ojoojúmọ́?", options: ["Lẹ́ẹ̀kan lóṣù", "Nígbà tí ẹran bá kú nìkan", "Ní àkókò oúnjẹ tàbí àkókò fífún wàrà", "Láéláé; ẹran ń tọ́jú ara wọn"], answer: 2, why: "Ẹran máa ń péjọ, wọ́n sì máa ń yára ní àkókò oúnjẹ tàbí àkókò fífún wàrà." },
      { objective: "O1", q: "Adìẹ tó ní ìlera sábà máa ń ní:", options: ["Ògbe tó funfun, tó sì ti rọ", "Ìyẹ́ tó dìde ṣákaṣàka", "Ọrùn wíwọ́", "Ògbe tó pupa yòò, ó sì ń yára"], answer: 3, why: "Ògbe tó pupa yòò àti yíyára jẹ́ àmì ìlera tó dára." },
      { objective: "O1", q: "Èwo ni àmì ìkìlọ̀ nínú màlúù ìfúnwàrà?", options: ["Wàrà tó dín kù lójijì", "Jíjẹ àpọ̀jẹ", "Ojú tó ń tàn", "Jíjẹun dáadáa"], answer: 0, why: "Wàrà tó dín kù lójijì sábà máa ń túmọ̀ sí àìsàn." },
      { objective: "O2", q: "Kí ló ṣáájú nínú bíbọ́ ẹran?", options: ["Èròjà olówó ńlá", "Omi mímọ́ lójoojúmọ́", "Òkúta iyọ̀ nìkan", "Koríko gbígbẹ tó ti bu"], answer: 1, why: "Láìsí omi mímọ́ tó tó, ìlera àti ohun tí ẹran ń mú jáde máa dín kù kíákíá." },
      { objective: "O2", q: "Napier grass àti lucerne jẹ́ àpẹẹrẹ:", options: ["Àjẹsára", "Oògùn aràn", "Koríko ẹran (fodder)", "Ìtẹ́ ilẹ̀ (litter)"], answer: 2, why: "Irè oko tí a gbìn láti fi bọ́ ẹran ni wọ́n." },
      { objective: "O2", q: "Kí ló dé tí a fi ń yí oúnjẹ ẹran padà díẹ̀díẹ̀ fún ọjọ́ mélòó kan?", options: ["Kí inú ẹran má baà dàrú", "Nítorí oúnjẹ tuntun máa ń burú nígbà gbogbo", "Láti dín omi kù", "Kò ṣe pàtàkì"], answer: 0, why: "Yíyí oúnjẹ padà lójijì máa ń da ìdà oúnjẹ rú." },
      { objective: "O3", q: "Ilé ẹran tó dára ni:", options: ["Èyí tó kún, tó sì gbóná", "Èyí tó tutù, tó sì ṣókùnkùn", "Èyí tó gbẹ, tó ní ibòji, tí atẹ́gùn ń wọ̀, tí kò sì kún jù", "Èyí tí olè lè wọ̀"], answer: 2, why: "Ilé ẹran tó gbẹ, tí atẹ́gùn ń wọ̀, tí kò sì kún jù ń dín àrùn kù." },
      { objective: "O3", q: "O ra ewúrẹ́ tuntun mẹ́ta. Kí ni o máa ṣe kí o tó dà wọ́n pọ̀ mọ́ agbo rẹ?", options: ["Dà wọ́n pọ̀ lẹ́sẹ̀kẹsẹ̀", "Yà wọ́n sọ́tọ̀ fún àkókò tí dókítà ẹranko sọ", "Ta àwọn ewúrẹ́ àtijọ́ rẹ", "Fún wọn ní antibiotics bí ìṣọ́ra"], answer: 1, why: "Yíya ẹran tuntun sọ́tọ̀ ń dá wọn dúró kí wọ́n má mú àrùn wọlé." },
      { objective: "O3", q: "Zoonosis ni:", options: ["Irú koríko ẹran kan", "Àjẹsára kan", "Àrùn tó lè ràn láti ara ẹranko sí ènìyàn tàbí láti ara ènìyàn sí ẹranko", "Ilé adìẹ kan"], answer: 2, why: "Brucellosis àti anthrax jẹ́ àpẹẹrẹ." },
      { objective: "O4", q: "PPR jẹ́ àrùn tó le tó ń ṣe:", options: ["Ewúrẹ́ àti àgùntàn", "Adìẹ", "Àgbàdo", "Ẹja"], answer: 0, why: "Peste des petits ruminants ń ṣe ewúrẹ́ àti àgùntàn." },
      { objective: "O4", q: "Ní Nàìjíríà, àjọ wo ló ń tọ́jú àkọsílẹ̀ orúkọ àwọn dókítà ẹranko?", options: ["Nigerian Meteorological Agency", "Veterinary Council of Nigeria", "Central Bank", "Ilé-iṣẹ́ oúnjẹ ẹran kan"], answer: 1, why: "VCN ló ń forúkọ àwọn dókítà ẹranko sílẹ̀." },
      { objective: "O4", q: "Níbo ni o yẹ kí o ti ra àjẹsára?", options: ["Lọ́wọ́ ẹnikẹ́ni lẹ́gbẹ̀ẹ́ ọ̀nà", "Lórí ayélujára lọ́wọ́ àwọn tí o kò mọ̀", "Láti inú fíríìjì àtijọ́ aládùúgbò", "Ní agrovet tó ní ìwé àṣẹ, kí o sì wo ọjọ́ tí wọ́n máa bàjẹ́"], answer: 3, why: "Àjẹsára láti ọ̀dọ̀ olùtajà tó ní ìwé àṣẹ, tí ọjọ́ rẹ̀ kò tíì kọjá, ló ṣeé ṣe jù kí ó ṣiṣẹ́." },
      { objective: "O5", q: "Gẹ́gẹ́ bí WOAH ṣe sọ, àrùn Newcastle ń tàn kálẹ̀ nípasẹ̀:", options: ["Oòrùn nìkan", "Omi mímọ́", "Adìẹ tí a ti fún ní àjẹsára nìkan", "Adìẹ tó ń ṣàìsàn, ìgbẹ́ wọn, àti oúnjẹ, omi, irinṣẹ́ àti aṣọ tí kòkòrò àrùn wà lára wọn"], answer: 3, why: "Fífarakan tààrà àti àwọn nǹkan tí kòkòrò àrùn wà lára wọn ló ń tan virus náà kálẹ̀." },
      { objective: "O5", q: "Èwo ni ìgbésẹ̀ biosecurity tí kò náni ní owó púpọ̀?", options: ["Jíjẹ́ kí àlejò rìn kọjá nínú ilé adìẹ", "Pínpín apẹ̀rẹ̀ adìẹ pẹ̀lú àwọn oko míì láìfọ̀ wọ́n", "Fífọ ọwọ́ àti lílo foot dip kí o tó wọlé", "Jíjẹ́ kí ẹyẹ igbó jẹun nínú ohun ìjẹun adìẹ"], answer: 2, why: "Ìmọ́tótó tó rọrùn ń dí kòkòrò àrùn lọ́nà." },
      { objective: "O5", q: "Fún adìẹ abúlé, FAO ṣàpèjúwe àjẹsára Newcastle tí:", options: ["A pò mọ́ sìmẹ́ńtì", "Ó wà fún màlúù nìkan", "A kò nílò láéláé", "A ń fi sí ojú bí oògùn ojú, tó sì lè fara da ooru sí i"], answer: 3, why: "Àjẹsára tó lè fara da ooru bí I-2 bá agbo adìẹ abúlé mu." },
      { objective: "O5", q: "Lẹ́yìn tí àrùn Newcastle bá bẹ́ sílẹ̀, WOAH gbani nímọ̀ràn pé kí a fi ilé tí a ti fọ̀ sílẹ̀ láìsí adìẹ fún:", options: ["Ọjọ́ 1", "Ọjọ́ 21", "Wákàtí 2", "A lè kó adìẹ tuntun wọlé lẹ́sẹ̀kẹsẹ̀"], answer: 1, why: "WOAH sọ pé kí ilé náà wà láìsí adìẹ fún ọjọ́ 21 kí a tó kó adìẹ tuntun wọlé." },
      { objective: "O6", q: "Èwo ni àmì aràn nínú ewúrẹ́?", options: ["Ìdàgbàsókè tó yára àti irun tó dán", "Ìpénpéjú tó pupa yòò", "Jíjẹun ju ti tẹ́lẹ̀ lọ àti síṣanra", "Ìdàgbàsókè tí kò dára, ikùn wíwú àti ìpénpéjú funfun"], answer: 3, why: "Aràn máa ń mu ẹ̀jẹ̀ àti èròjà ara, èyí ló sì ń fa àwọn àmì wọ̀nyí." },
      { objective: "O6", q: "Báwo ni o ṣe máa mọ iye oògùn aràn tí o máa fún ẹran?", options: ["Fi ojú méfò", "Lo ìdajì láti dín owó kù", "Tẹ̀lé ohun tí a kọ sára oògùn tàbí dókítà ẹranko rẹ", "Lo ìlọ́po méjì kí ó lè dá ọ lójú"], answer: 2, why: "Iye oògùn tí kò tọ́ ń pa ẹran lára tàbí ń mú resistance wá." },
      { objective: "O6", q: "A tọ́jú màlúù kan lánàá, àkókò ìdádúró kò sì tíì parí. Kí ni nípa wàrà rẹ̀?", options: ["Tà á bí ó ti máa ń ṣe", "Má ṣe tà á tàbí mu ún títí àkókò ìdádúró yóò fi parí", "Pò ó mọ́ wàrà míì", "Sè é kí o sì tà á"], answer: 1, why: "Wàrà nígbà àkókò ìdádúró lè ní ìyókù oògùn nínú." },
      { objective: "O6", q: "Ipò wo ló túmọ̀ sí pé o gbọ́dọ̀ pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀?", options: ["Ọ̀pọ̀ ẹran ń ṣàìsàn lẹ́ẹ̀kan náà", "Ẹran kan ń jẹ àpọ̀jẹ", "Adìẹ ń yin ẹyin bí wọ́n ti máa ń ṣe", "Ọmọ màlúù ń mu wàrà dáadáa"], answer: 0, why: "Ọ̀pọ̀ ẹran tó ń ṣàìsàn lẹ́ẹ̀kan náà lè túmọ̀ sí àrùn tó ń tàn kálẹ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 3, 6, 7, 9, 11, 12, 16, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún un yẹ̀ wò.",
    criteria: [
      { name: "Àyẹ̀wò ojoojúmọ́", objective: "O1", notYet: "Kò sí àyẹ̀wò ojoojúmọ́, tàbí kò to àwọn àmì ìkìlọ̀.", meets: "Àyẹ̀wò ojoojúmọ́ ní àkókò oúnjẹ tàbí àkókò fífún wàrà, pẹ̀lú àwọn àmì ìkìlọ̀ pàtàkì àti ohun tí a máa ṣe.", exceeds: "Ó ṣe àyẹ̀wò náà kí ó bá irú ẹran kọ̀ọ̀kan tí ó ń sìn mu." },
      { name: "Oúnjẹ, omi àti ilé ẹran", objective: "O2", notYet: "Kò sí ètò fún ìgbà ẹ̀ẹ̀rùn, tàbí kò sí òfin ilé ẹran àti ìmọ́tótó.", meets: "Oúnjẹ àti omi mímọ́ jálẹ̀ ọdún pẹ̀lú ètò fún ìgbà ẹ̀ẹ̀rùn, àti òfin méjì fún ilé ẹran àti ìmọ́tótó.", exceeds: "Ó fi gbígbin tàbí títọ́jú koríko ẹran àti yíya ẹran tuntun sọ́tọ̀ kún un." },
      { name: "Ètò àjẹsára", objective: "O4", notYet: "Kò sí ètò, tàbí ètò tí kò bá dókítà ẹranko ṣe.", meets: "Ètò tí a kọ sílẹ̀ láti ọ̀dọ̀ dókítà ẹranko tó forúkọ sílẹ̀, pẹ̀lú bí a ṣe ń jẹ́ kí àjẹsára wà ní ibi tútù tí ọjọ́ rẹ̀ kò sì tíì kọjá.", exceeds: "Ó kọ ìpolongo ìjọba sí i àti orúkọ àti nọ́mbà dókítà ẹranko." },
      { name: "Biosecurity", objective: "O5", notYet: "Kò sí òfin biosecurity.", meets: "Òfin biosecurity, àti fún adìẹ, àjẹsára Newcastle àti àwọn ìgbésẹ̀ tí adìẹ bá kú lójijì.", exceeds: "Àwọn ìgbésẹ̀ tí kò náni ní owó púpọ̀ bí fífọ ọwọ́ àti foot dip ti wà níbẹ̀." },
      { name: "Kòkòrò àfòmọ́, àkọsílẹ̀ àti dókítà ẹranko", objective: "O6", notYet: "Kò sí àkọsílẹ̀, tàbí ó méfò iye oògùn.", meets: "Ìṣàkóso kòkòrò àfòmọ́ tí a ṣètò pẹ̀lú dókítà ẹranko, àkọsílẹ̀ ìtọ́jú pẹ̀lú àkókò ìdádúró, àti àwọn àmì tó túmọ̀ sí pé kí a pe dókítà ẹranko lẹ́sẹ̀kẹsẹ̀.", exceeds: "Àkọsílẹ̀ náà tún ní ìbímọ, ìwọ̀n tàbí ohun tí ẹran ń mú jáde, àti ikú." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ètò ìlera náà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ní ètò àjẹsára tí a kọ sílẹ̀ láti ọ̀dọ̀ dókítà ẹranko tó forúkọ sílẹ̀ láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Ìyípadà nínú iye ẹran tàbí adìẹ tó kú àti nínú iye wàrà tàbí ẹyin tí àwọn akẹ́kọ̀ọ́ ròyìn lẹ́yìn oṣù mẹ́fà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń kọ àkọsílẹ̀ ìtọ́jú, tí wọ́n sì ń pa àkókò ìdádúró mọ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ tàbí spreadsheet lórí fóònù fún àkọsílẹ̀",
      "Nọ́mbà fóònù dókítà ẹranko tó forúkọ sílẹ̀ tàbí òṣìṣẹ́ ìlera ẹranko",
      "Àǹfààní láti dé ọ̀dọ̀ ẹran akẹ́kọ̀ọ́ fúnra rẹ̀ fún àyẹ̀wò ojoojúmọ́",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kọ ètò ìlera náà"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ àgbẹ̀: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe àṣeṣe àyẹ̀wò ìlera ojoojúmọ́ lórí ẹran gidi.",
      "Pe dókítà ẹranko tó forúkọ sílẹ̀ tàbí òṣìṣẹ́ ìlera ẹranko wá láti ṣàlàyé àwọn àrùn àti àjẹsára agbègbè náà; má ṣe sọ iye oògùn fúnra rẹ.",
      "Fọ ọwọ́ lẹ́yìn tí o bá fọwọ́ kan ẹran, má sì fọwọ́ kan ẹran tó kú lójijì pẹ̀lú ẹ̀jẹ̀ tó ń jáde láéláé.",
      "Ran akẹ́kọ̀ọ́ kọ̀ọ̀kan lọ́wọ́ láti kọ orúkọ àti nọ́mbà dókítà ẹranko wọn sílẹ̀ kí wọ́n tó lọ.",
      "Fi rubric ṣe àmì fún ètò ìlera náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
