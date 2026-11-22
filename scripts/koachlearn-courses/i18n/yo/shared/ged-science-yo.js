"use strict";

// Koach Learn course (Yoruba translation of shared/ged-science.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const GED_SUBJECTS = { name: "GED Testing Service: àwọn ẹ̀ka ìdánwò (àkókò, irú ìbéèrè, ẹ̀rọ ìṣirò)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SCIENCE = { name: "GED Testing Service: ìdánwò Sáyẹ́nsì", url: "https://ged.com/about_test/test_subjects/science/" };
const GED_SCORES = { name: "GED Testing Service: máàkì", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: ìdánwò àpẹẹrẹ ọ̀fẹ́ (Gẹ̀ẹ́sì àti Sípáníìṣì)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, ìdánwò ìdárayá ti ìjọba GED", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, ìdánwò míì tó dọ́gba pẹ̀lú ilé-ìwé gíga (ojú-òpó gidi)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-science-yo",
  lang: "yo",
  translationOf: "ged-science",
  category: "Workforce Development",
  name: "Ìmúrasílẹ̀ fún Ìdánwò GED: Sáyẹ́nsì",
  skills: "Kíka àyọkà sáyẹ́nsì, Rírí àwọn variable nínú àdánwò sáyẹ́nsì, Kíka tábìlì àti graph, Ìṣirò sáyẹ́nsì (mean, median, range, fọ́múlà), Ṣíṣe ìdájọ́ ìparí èrò, Ṣíṣe ètò ìkẹ́kọ̀ọ́",
  outcome: "ka àyọkà sáyẹ́nsì, tábìlì tàbí graph kí o sì dáhùn ìbéèrè bí ti GED nípa rẹ̀, dárúkọ àwọn variable nínú àdánwò sáyẹ́nsì, ṣe ìṣirò sáyẹ́nsì tí ìdánwò náà béèrè, kí o sì mọ̀ bóyá dátà ṣe ìtìlẹ́yìn fún ìparí èrò kan.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí ń múra sílẹ̀ fún ìdánwò GED Sáyẹ́nsì: àwọn tí ń wá iṣẹ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn ológun àtijọ́, àwọn ọ̀dọ́, àwọn àjèjì tí ń gbé ní Amẹ́ríkà àti ẹnikẹ́ni tí ń padà sí ẹ̀kọ́. O kò nílò láti jẹ́ ọ̀mọ̀wé sáyẹ́nsì. Ìdánwò náà dá jù lọ lórí kíka sáyẹ́nsì, òye àdánwò sáyẹ́nsì àti lílo nọ́mbà àti graph.",
    "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀ fún ìdánwò náà. Kò fún ọ ní ìwé-ẹ̀rí GED. GED Testing Service ló ń ṣe ìdánwò náà, ìpínlẹ̀ rẹ ló sì ń ṣe òfin fún bí a ṣe ń ṣe é. Àwọn ìpínlẹ̀ kan ń lo ìdánwò míì tí a ń pè ní HiSET. Ṣàyẹ̀wò ged.com àti ọ́fíìsì ẹ̀kọ́ àgbàlagbà ní ìpínlẹ̀ rẹ fún òfin, owó àti ibi ìdánwò tuntun.",
    "Ẹ̀kọ́ kọ̀ọ̀kan ń kọ́ ọ ní ọgbọ́n kan pẹ̀lú àpẹẹrẹ tí a ti ṣe, àti iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" pẹ̀lú àlàyé ìdáhùn, lẹ́yìn náà ìdánwò kúkúrú ìbéèrè méjì. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí.",
    "Iṣẹ́ ìkẹyìn ni àdánwò sáyẹ́nsì kékeré tìrẹ, tí kò léwu, ní ilé ìdáná: o máa ṣètò ìdánwò tó tọ́, kọ dátà sínú tábìlì, wá ìpíndọ́gba, ya graph, kí o sì kọ ìparí èrò tí dátà ṣe ìtìlẹ́yìn fún."
  ],
  finalTask: "Ṣètò kí o sì ṣe àdánwò sáyẹ́nsì kékeré, tí kò léwu, ní ilé ìdáná (fún àpẹẹrẹ: ṣé rírú omi ń yí bí ṣúgà ṣe ń yọ́ kíákíá nínú omi padà?). Kọ ìbéèrè àti hypothesis, dárúkọ variable olómìnira, variable tó gbára lé àti àwọn variable tí a mú dúró, tún ìgbìyànjú kọ̀ọ̀kan ṣe ní ẹ̀ẹ̀mẹta, kọ èsì sínú tábìlì, wá mean fún ẹgbẹ́ kọ̀ọ̀kan, ya bar graph, kí o sì kọ ìparí èrò gbólóhùn méjì tí dátà ṣe ìtìlẹ́yìn fún. Fi ètò ìkẹ́kọ̀ọ́ GED rẹ tó ní ọjọ́ sí ìsàlẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí ń múra sílẹ̀ fún ìdánwò GED Sáyẹ́nsì: àwọn tí ń wá iṣẹ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn ológun àtijọ́, àwọn ọ̀dọ́ tí wọ́n fi ilé-ìwé sílẹ̀, àwọn àjèjì àti àwọn àgbàlagbà tí ń padà sí ẹ̀kọ́ lẹ́yìn ọdún púpọ̀.",
    startingPoint: "Wọ́n lè ka ọ̀rọ̀ ojoojúmọ́ kí wọ́n sì ṣe ìṣirò ìpìlẹ̀. Ọ̀pọ̀ kò tíì lọ sí kíláàsì sáyẹ́nsì fún ọdún púpọ̀, wọ́n sì rò pé sáyẹ́nsì ṣòro tàbí pé ó kún fún ohun tí a gbọ́dọ̀ há sórí. Àwọn kan ṣì ń kọ́ ìgboyà nínú Gẹ̀ẹ́sì tàbí ìṣirò.",
    gap: "Ìdánwò GED Sáyẹ́nsì dá lórí kíka ọ̀rọ̀ sáyẹ́nsì, òye bí àdánwò sáyẹ́nsì ṣe ń ṣiṣẹ́, àti lílo nọ́mbà, tábìlì àti graph. Ọgbọ́n tí a lè kọ́ ni wọ̀nyí, a sì ń lò wọ́n níbi iṣẹ́ nínú ìtọ́jú ìlera, ilé-iṣẹ́ ìṣelọ́pọ̀, yàrá àyẹ̀wò (lab) àti iṣẹ́ ọwọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ sáyẹ́nsì",
      "Ẹ̀rọ: fóònù, kọ̀mpútà ilé-ìkàwé, tàbí ìwé àti kálámù; ẹ̀rọ ìṣirò lásán ń ṣèrànwọ́",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá àkókò iṣẹ́, ìpàdé àti ẹbí mu",
      "Ààbò: àdánwò sáyẹ́nsì nílé ń lo omi, ṣúgà, iyọ̀ àti omi ẹ̀rọ tí kò gbóná tàbí tó lọ́wọ́ọ́rọ́ nìkan; kò sí iná, ooru tàbí kẹ́míkà",
      "Òfin ìdánwò, owó, àti ìdánwò tí ìpínlẹ̀ kan ń lò (GED tàbí HiSET) ń yí padà; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ged.com àti ìpínlẹ̀ wọn"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí ó nílò ìrànlọ́wọ́ pẹ̀lú ìpíndọ́gba tàbí kíka graph lè ṣe ẹ̀kọ́ GED Ìṣirò tàbí ẹ̀kọ́ ìṣirò ojoojúmọ́ ní àkókò kan náà."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú ojú-òpó wẹ́ẹ̀bù GED gidi", action: "ka àwọn apá, irú ìbéèrè, àkókò àti irinṣẹ́ ìdánwò GED Sáyẹ́nsì, kí o sì kọ ètò ìkẹ́kọ̀ọ́ tó ní ọjọ́", standard: "pẹ̀lú orúkọ àwọn ẹ̀ka ọgbọ́n mẹ́tẹ̀ẹ̀ta àti ó kéré tán ọjọ́ ìkẹ́kọ̀ọ́ kan lọ́sẹ̀ títí di ọjọ́ ìdánwò" },
    { id: "O2", condition: "Tí a bá fún ọ ní àyọkà sáyẹ́nsì kúkúrú", action: "dá èrò pàtàkì mọ̀ àti ọ̀rọ̀ ìdánilójú tí ẹ̀rí inú àyọkà náà ṣe ìtìlẹ́yìn fún", standard: "kí o sì tọ́ka sí gbólóhùn tàbí nọ́mbà tó ṣe ìtìlẹ́yìn fún ìdáhùn kọ̀ọ̀kan" },
    { id: "O3", condition: "Tí a bá fún ọ ní àpèjúwe àdánwò sáyẹ́nsì kan", action: "dárúkọ hypothesis àti variable olómìnira, variable tó gbára lé àti àwọn variable tí a mú dúró", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O4", condition: "Tí a bá fún ọ ní tábìlì tàbí graph", action: "ka àwọn iye, ṣàpèjúwe trend, kí o sì yan ìparí èrò tí dátà ṣe ìtìlẹ́yìn fún", standard: "láìfi òtítọ́ tí kò sí nínú dátà kún un" },
    { id: "O5", condition: "Tí a bá fún ọ ní dátà kékeré tàbí fọ́múlà kan", action: "ṣírò mean, median, mode àti range, tàbí lo fọ́múlà náà láti rí ìdáhùn", standard: "pẹ̀lú ẹ̀yọ ìwọ̀n tó tọ́, kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíka sáyẹ́nsì àti òye àdánwò sáyẹ́nsì",
      lessons: [
        {
          title: "Bí ìdánwò GED Sáyẹ́nsì ṣe ń ṣiṣẹ́",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ka àwọn apá àti irinṣẹ́ ìdánwò GED Sáyẹ́nsì, kí o sì kọ ètò ìkẹ́kọ̀ọ́ tó ní ọjọ́.",
          text: [
            "GED ní ìdánwò mẹ́rin: Ìṣirò (Math), Èrò àti Èdè (Reasoning Through Language Arts), Sáyẹ́nsì àti Ẹ̀kọ́ Àwùjọ (Social Studies). O lè ṣe wọ́n lọ́kọ̀ọ̀kan. GED Testing Service ló ń ṣe ìdánwò náà. Àwọn ìpínlẹ̀ kan ń lo ìdánwò míì tó dọ́gba pẹ̀lú ilé-ìwé gíga, HiSET, nítorí náà ṣàyẹ̀wò èyí tí ìpínlẹ̀ rẹ ń lò.",
            "Lórí ged.com, ìdánwò Sáyẹ́nsì jẹ́ ìṣẹ́jú 90 láìsí ìsinmi. Ó ní ẹ̀ka ọgbọ́n mẹ́ta: kíka fún ìtumọ̀ nínú sáyẹ́nsì, ṣíṣètò àti títúmọ̀ àdánwò sáyẹ́nsì, àti lílo nọ́mbà àti àwòrán nínú sáyẹ́nsì. Irú ìbéèrè ni: yíyan ìdáhùn kan, kíkún àlàfo, fífà àti jíjù sílẹ̀ (drag and drop), yíyan agbègbè kan, àti àkójọ tí ń ṣí sílẹ̀ (drop-down).",
            "O máa rí ẹ̀rọ ìṣirò lórí ojú-iboju àti ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò, ged.com sì sọ pé o lè mú ẹ̀rọ ìṣirò TI-30XS tìrẹ wá sí ibùdó ìdánwò. Ged.com tún sọ pé o kò nílò láti há fọ́múlà sórí: ìsọfúnni tí o nílò wà pẹ̀lú ìbéèrè kọ̀ọ̀kan. Kì í ṣe ìdánwò ohun tí o há sórí; ó ń dán bí o ṣe ń kàwé àti bí o ṣe ń ronú wò.",
            "Ged.com sọ pé máàkì àṣeyọrí jẹ́ 145 fún ẹ̀ka kọ̀ọ̀kan. Àkókò àti òfin lè yí padà, nítorí náà ṣàyẹ̀wò ged.com kí o tó forúkọ sílẹ̀. Ged.com ní àwọn ìdánwò àpẹẹrẹ ọ̀fẹ́ àti ìdánwò ìdárayá ti ìjọba GED, GED Ready."
          ],
          steps: ["Lọ sí ged.com kí o sì ka ojú-ìwé ìdánwò Sáyẹ́nsì.", "Kọ àkókò, ẹ̀ka ọgbọ́n mẹ́ta náà àti irinṣẹ́ tí o máa rí sílẹ̀.", "Ṣe ìdánwò àpẹẹrẹ Sáyẹ́nsì ọ̀fẹ́ láti mọ ibi tí o wà.", "Yan ọ̀sẹ̀ tí o fẹ́ ṣe ìdánwò.", "Kọ ó kéré tán ọjọ́ ìkẹ́kọ̀ọ́ kan lọ́sẹ̀, pẹ̀lú ọgbọ́n tí o máa dá ṣe."],
          words: [["GED", "ìdánwò tó dọ́gba pẹ̀lú ilé-ìwé gíga; tí o bá yege ní gbogbo ẹ̀ka mẹ́rin, o máa gba ìwé-ẹ̀rí tí ọ̀pọ̀ agbanisíṣẹ́ àti kọ́lẹ́ẹ̀jì gbà bí ìwé-ẹ̀rí ilé-ìwé gíga."], ["HiSET", "ìdánwò míì tó dọ́gba pẹ̀lú ilé-ìwé gíga tí àwọn ìpínlẹ̀ kan ń lò."], ["TI-30XS", "irú ẹ̀rọ ìṣirò ọwọ́ tí ìdánwò GED ń lò lórí ojú-iboju, tí wọ́n sì gbà láyè ní ibùdó ìdánwò."], ["Ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò", "ìwé tí wọ́n ń fún ọ nígbà ìdánwò tó fi bí a ṣe ń lo àwọn bọ́tìnnì ẹ̀rọ ìṣirò hàn."]],
          slides: [
            { title: "Ìdánwò GED Sáyẹ́nsì (ṣàyẹ̀wò ged.com)", bullets: ["Ìṣẹ́jú 90, kò sí ìsinmi", "Yíyan ìdáhùn kan àti àwọn irú ìbéèrè míì", "Máàkì àṣeyọrí tí wọ́n kọ: 145"] },
            { title: "Ẹ̀ka ọgbọ́n mẹ́ta", bullets: ["Kíka fún ìtumọ̀ nínú sáyẹ́nsì", "Ṣíṣètò àti títúmọ̀ àdánwò sáyẹ́nsì", "Lílo nọ́mbà àti àwòrán"] },
            { title: "Irinṣẹ́ tí o máa rí", bullets: ["Ẹ̀rọ ìṣirò lórí ojú-iboju àti ìwé ìtọ́sọ́nà", "O lè mú TI-30XS wá sí ibùdó ìdánwò", "Ìsọfúnni tí o nílò wà pẹ̀lú ìbéèrè kọ̀ọ̀kan"] },
            { title: "Ṣe ètò", bullets: ["Kọ́kọ́ ṣe ìdánwò àpẹẹrẹ ọ̀fẹ́", "Yan ọ̀sẹ̀ tí o fẹ́ ṣe ìdánwò", "Kẹ́kọ̀ọ́ díẹ̀díẹ̀, ní ọ̀pọ̀ ọjọ́ lọ́sẹ̀"] }
          ],
          sources: [GED_SUBJECTS, GED_SCIENCE, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Ṣí ged.com kí o sì ṣe ìdánwò àpẹẹrẹ Sáyẹ́nsì ọ̀fẹ́ (tàbí ka ojú-ìwé Sáyẹ́nsì tí o kò bá lè ṣe é báyìí). Kọ ètò ìkẹ́kọ̀ọ́ rẹ: ọ̀sẹ̀ tí o fẹ́ ṣe ìdánwò àti ọjọ́ kan lọ́sẹ̀ pẹ̀lú ọgbọ́n tí o máa dá ṣe: kíka sáyẹ́nsì, àdánwò sáyẹ́nsì, tàbí nọ́mbà àti graph. Pa á mọ́ fún iṣẹ́ ìkẹyìn.",
          youCanNow: "dárúkọ àwọn apá àti irinṣẹ́ ìdánwò GED Sáyẹ́nsì, kí o sì tẹ̀lé ètò ìkẹ́kọ̀ọ́ tó ní ọjọ́.",
          quickCheck: [
            { objective: "O1", q: "Gẹ́gẹ́ bí ged.com ṣe sọ, kí ni o gbọ́dọ̀ há sórí fún ìdánwò GED Sáyẹ́nsì?", options: ["Gbogbo fọ́múlà nínú sáyẹ́nsì", "Tábìlì àwọn èròjà (periodic table)", "Kì í ṣe fọ́múlà: ìsọfúnni tí o nílò wà pẹ̀lú ìbéèrè kọ̀ọ̀kan", "Orúkọ gbogbo onímọ̀ sáyẹ́nsì"], answer: 2, why: "Ged.com sọ pé o kò nílò láti há fọ́múlà sórí; wọ́n ń fún ọ ní ìsọfúnni tí o nílò." },
            { objective: "O1", q: "Èwo ni ọ̀kan lára ẹ̀ka ọgbọ́n mẹ́ta ìdánwò Sáyẹ́nsì?", options: ["Ṣíṣètò àti títúmọ̀ àdánwò sáyẹ́nsì", "Kíkọ ọ̀rọ̀ sáyẹ́nsì lọ́nà tó tọ́", "Yíya àwòrán ẹranko", "Kíkọ́ kọ̀mpútà"], answer: 0, why: "Ged.com kọ kíka fún ìtumọ̀, àdánwò sáyẹ́nsì, àti nọ́mbà àti àwòrán." }
          ]
        },
        {
          title: "Kíka àyọkà sáyẹ́nsì",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dá èrò pàtàkì àyọkà sáyẹ́nsì mọ̀ àti ọ̀rọ̀ ìdánilójú tí ẹ̀rí inú rẹ̀ ṣe ìtìlẹ́yìn fún.",
          text: [
            "Àyọkà sáyẹ́nsì dà bí ẹni pé ó ṣòro nítorí ọ̀rọ̀ tuntun, ṣùgbọ́n o máa kà á bí o ṣe ń ka àyọkà èyíkéyìí. Wá ohun tí ó dá lé jù lọ, kí o sì wá òtítọ́ àti nọ́mbà tó ṣe ìtìlẹ́yìn fún un. Ọ̀pọ̀ ìgbà, àyọkà náà ń ṣàlàyé ọ̀rọ̀ líle nínú ọ̀rọ̀ náà fúnra rẹ̀. Wá \"is called\" (a ń pè é ní), \"means\" (túmọ̀ sí) tàbí ọ̀rọ̀ láàárín àmì ìdánudúró (comma) lẹ́yìn rẹ̀.",
            "Àpẹẹrẹ tí a ti ṣe. \"Òógùn ń mú ara tutù. Nígbà tí òógùn bá gbẹ (evaporate), ìyẹn ni pé ó yí padà láti omi sí afẹ́fẹ́, ó ń mú ooru kúrò lára awọ. Ní ọjọ́ tí afẹ́fẹ́ bá tutù tí ó sì kún fún omi (humid), afẹ́fẹ́ ti ní omi púpọ̀ tẹ́lẹ̀, nítorí náà òógùn ń gbẹ díẹ̀díẹ̀.\" Èrò pàtàkì: òógùn ń mú ara tutù nípa gbígbẹ. Ọ̀rọ̀ ìdánilójú tó ní ẹ̀rí: o lè gbóná ju bí ó ti yẹ lọ ní ọjọ́ humid nítorí pé òógùn ń gbẹ díẹ̀díẹ̀.",
            "Ọ̀rọ̀ ìdánilójú ní ẹ̀rí kìkì tí àyọkà náà bá fún un ní ẹ̀rí. \"Òógùn ń sun ọ̀rá\" kò ní ẹ̀rí; àyọkà náà kò sọ nǹkan kan nípa ọ̀rá. Yan ìdáhùn tí ọ̀rọ̀ náà fi hàn pé ó jẹ́ òótọ́, kì í ṣe èyí tó dún bí sáyẹ́nsì jù lọ."
          ],
          steps: ["Kọ́kọ́ ka ìbéèrè.", "Ka àyọkà náà; yí ọ̀rọ̀ tuntun ká, kí o sì wá ìtumọ̀ wọn nítòsí.", "Sọ èrò pàtàkì ní gbólóhùn kan.", "Fún ìdáhùn kọ̀ọ̀kan, béèrè pé: ibo ni àyọkà náà ti fi èyí hàn?", "Pa àwọn ìdáhùn tí ó fi òtítọ́ tí àyọkà kò sọ kún un rẹ́."],
          words: [["Gbígbẹ (evaporate)", "yíyí padà láti omi sí afẹ́fẹ́, bí omi inú kòtò tí ń gbẹ."], ["Humid", "nígbà tí afẹ́fẹ́ bá ní omi púpọ̀ nínú."], ["Ọ̀rọ̀ ìdánilójú (claim)", "gbólóhùn tó sọ pé nǹkan kan jẹ́ òótọ́."], ["Ó ní ẹ̀rí (supported)", "ẹ̀rí wà fún un nínú ọ̀rọ̀ tàbí dátà."]],
          slides: [
            { title: "Ka sáyẹ́nsì bí àyọkà èyíkéyìí", bullets: ["Kí ni ó dá lé jù lọ?", "Òtítọ́ àti nọ́mbà wo ló ṣe ìtìlẹ́yìn fún un?"] },
            { title: "Ọ̀rọ̀ tuntun", bullets: ["Wá \"is called\" tàbí \"means\"", "Wá ìtumọ̀ láàárín comma lẹ́yìn ọ̀rọ̀ náà"] },
            { title: "Ó ní ẹ̀rí tàbí kò ní?", bullets: ["Ó ní ẹ̀rí: àyọkà náà fi hàn", "Kò ní ẹ̀rí: ó fi òtítọ́ tí kò sí nínú ọ̀rọ̀ kún un", "Má ṣe yan ìdáhùn kan torí pé ó dún bí ọgbọ́n"] }
          ],
          tryIt: "Àyọkà ìdárayá: \"Àwọn ewéko ń ṣe oúnjẹ tiwọn nípa photosynthesis. Wọ́n ń lo ìmọ́lẹ̀, omi àti carbon dioxide, afẹ́fẹ́ kan tó wà nínú atẹ́gùn, láti ṣe ṣúgà. Wọ́n sì ń tú oxygen jáde.\" 1) Kí ni èrò pàtàkì? 2) Ọ̀rọ̀ ìdánilójú wo ló ní ẹ̀rí: (a) ewéko tí a fi sínú kọ́bọ́ọ̀dù tó ṣókùnkùn máa ní ìṣòro láti ṣe oúnjẹ, tàbí (b) ewéko nílò ọtí ẹlẹ́rìndòdò (soda) láti dàgbà? Ìdáhùn: 1) Àwọn ewéko ń ṣe oúnjẹ láti ìmọ́lẹ̀, omi àti carbon dioxide. 2) (a): àyọkà náà sọ pé ewéko nílò ìmọ́lẹ̀. (b) kò sí nínú ọ̀rọ̀ náà.",
          youCanNow: "wá èrò pàtàkì àyọkà sáyẹ́nsì, kí o sì yan ọ̀rọ̀ ìdánilójú tí ẹ̀rí inú rẹ̀ ṣe ìtìlẹ́yìn fún.",
          quickCheck: [
            { objective: "O2", q: "Àyọkà kan sọ pé, \"Àjẹsára ń kọ́ immune system, ètò ààbò ara, láti dá kòkòrò àrùn mọ̀.\" Kí ni \"immune system\" túmọ̀ sí níbí?", options: ["Irú kòkòrò àrùn kan", "Ètò ààbò ara", "Ọ́fíìsì dókítà", "Irú oògùn tí a ń gbé mì"], answer: 1, why: "Ìtumọ̀ rẹ̀ wà láàárín comma lẹ́yìn ọ̀rọ̀ náà gan-an." },
            { objective: "O2", q: "Àyọkà kan sọ pé irin (steel) ń dípẹtà kíákíá nínú afẹ́fẹ́ tó tutù tí ó sì ní iyọ̀. Ọ̀rọ̀ ìdánilójú wo ló ní ẹ̀rí?", options: ["Irin kì í dípẹtà rárá", "Iyọ̀ ń mú irin le sí i", "Ìpẹtà máa ń ṣẹlẹ̀ ní aṣálẹ̀ nìkan", "Afárá irin nítòsí òkun lè nílò ààbò púpọ̀ sí i lọ́wọ́ ìpẹtà"], answer: 3, why: "Afẹ́fẹ́ òkun tutù, ó sì ní iyọ̀, àyọkà náà sì sọ pé èyí ń mú ìpẹtà yára." }
          ]
        },
        {
          title: "Àdánwò sáyẹ́nsì: hypothesis àti variable",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dárúkọ hypothesis àti variable olómìnira, variable tó gbára lé àti àwọn variable tí a mú dúró nínú àdánwò sáyẹ́nsì.",
          text: [
            "Àdánwò sáyẹ́nsì (experiment) ń dán ìbéèrè kan wò. Hypothesis jẹ́ àmọ̀tán tí a lè dánwò nípa ìdáhùn náà, tí a sábà máa ń kọ ní \"If ..., then ...\" (Tí ..., nígbà náà ...). Fún àpẹẹrẹ: \"Tí àwọn ewéko bá rí ìmọ́lẹ̀ fún wákàtí púpọ̀ sí i, nígbà náà wọ́n máa ga sí i.\"",
            "Variable olómìnira (independent variable) ni ohun kan ṣoṣo tí onímọ̀ sáyẹ́nsì yí padà mọ̀ọ́mọ̀ (wákàtí ìmọ́lẹ̀). Variable tó gbára lé (dependent variable) ni ohun tí a wọ̀n láti rí ipa rẹ̀ (gíga ewéko). Àwọn variable tí a mú dúró (controlled variables) ni a máa ń fi sílẹ̀ bákan náà kí ìdánwò náà lè tọ́ (irú ewéko kan náà, ìkòkò kan náà, omi kan náà, ilẹ̀ kan náà).",
            "Ọgbọ́n láti rántí: variable tó gbára lé gbára lé variable olómìnira. Gíga gbára lé ìmọ́lẹ̀. Ìdánwò tó tọ́ máa ń yí ohun kan ṣoṣo padà lẹ́ẹ̀kan. Tí o bá yí ìmọ́lẹ̀ àti omi padà pọ̀, o kò ní mọ èyí tó mú ewéko dàgbà.",
            "Àdánwò sáyẹ́nsì tó dára máa ń tún ìgbìyànjú kọ̀ọ̀kan ṣe ní ọ̀pọ̀ ìgbà, ó sì sábà máa ń ní ẹgbẹ́ àfiwé (control group), ẹgbẹ́ tí kò rí ìyípadà kankan, láti fi wé. Ìgbìyànjú púpọ̀ sí i ń mú kí èsì ṣeé gbẹ́kẹ̀lé sí i."
          ],
          steps: ["Wá ìbéèrè tí a ń dánwò.", "Wá ohun kan ṣoṣo tí a yí padà mọ̀ọ́mọ̀: variable olómìnira.", "Wá ohun tí a wọ̀n: variable tó gbára lé.", "Kọ àwọn ohun tí a fi sílẹ̀ bákan náà: àwọn variable tí a mú dúró.", "Ṣàyẹ̀wò pé ohun kan ṣoṣo ló yí padà, àti pé a tún àwọn ìgbìyànjú ṣe."],
          words: [["Hypothesis", "àmọ̀tán tí a lè dánwò, tí a sábà máa ń kọ ní \"If ..., then ...\" (Tí ..., nígbà náà ...)."], ["Variable olómìnira", "ohun kan ṣoṣo tí o yí padà mọ̀ọ́mọ̀."], ["Variable tó gbára lé", "ohun tí o wọ̀n láti rí ipa rẹ̀."], ["Variable tí a mú dúró", "ohun tí o fi sílẹ̀ bákan náà kí ìdánwò lè tọ́."], ["Ẹgbẹ́ àfiwé (control group)", "ẹgbẹ́ tí kò rí ìyípadà kankan, tí a fi ń ṣe àfiwé."]],
          slides: [
            { title: "Hypothesis", bullets: ["Àmọ̀tán tí a lè dánwò", "\"Tí ìmọ́lẹ̀ bá pọ̀ sí i, ewéko máa ga sí i\""] },
            { title: "Irú variable mẹ́ta", bullets: ["Olómìnira: ohun tí o yí padà", "Tó gbára lé: ohun tí o wọ̀n", "Tí a mú dúró: ohun tí o fi sílẹ̀ bákan náà"] },
            { title: "Ìdánwò tó tọ́", bullets: ["Yí ohun kan ṣoṣo padà", "Tún ìgbìyànjú kọ̀ọ̀kan ṣe", "Fi wé ẹgbẹ́ àfiwé"] }
          ],
          tryIt: "Ìdárayá: Òṣìṣẹ́ kan ń dánwò bóyá ìbọ̀wọ́ tuntun kan ń jẹ́ kí ọwọ́ gbóná ju ti àtijọ́ lọ. Òṣìṣẹ́ mẹ́wàá wọ ìbọ̀wọ́ tuntun, mẹ́wàá míì sì wọ ìbọ̀wọ́ àtijọ́, níta fún ìṣẹ́jú 30 ní àkókò kan náà. A wọn ìgbóná ọwọ́ wọn. Dárúkọ: 1) variable olómìnira, 2) variable tó gbára lé, 3) variable méjì tí a mú dúró, 4) hypothesis kan. Ìdáhùn: 1) irú ìbọ̀wọ́; 2) ìgbóná ọwọ́; 3) àkókò níta, ojú-ọjọ́ kan náà, àkókò ọjọ́ kan náà; 4) \"Tí àwọn òṣìṣẹ́ bá wọ ìbọ̀wọ́ tuntun, nígbà náà ọwọ́ wọn máa gbóná sí i.\"",
          youCanNow: "ka àdánwò sáyẹ́nsì kan kí o sì dárúkọ hypothesis rẹ̀ àti àwọn variable rẹ̀, kí o sì mọ ìdánwò tí kò tọ́.",
          quickCheck: [
            { objective: "O3", q: "Akẹ́kọ̀ọ́ kan ń dánwò bóyá iyọ̀ ń yí bí yìnyín ṣe ń yọ́ kíákíá padà. Kí ni variable tó gbára lé?", options: ["Iye iyọ̀", "Ìtóbi yìnyín", "Ìgbóná yàrá", "Àkókò tí yìnyín fi yọ́"], answer: 3, why: "Àkókò yíyọ́ ni ohun tí a wọ̀n; ó gbára lé iyọ̀." },
            { objective: "O3", q: "Kí ló dé tí àdánwò sáyẹ́nsì fi gbọ́dọ̀ yí ohun kan ṣoṣo padà lẹ́ẹ̀kan?", options: ["Kí o lè mọ ìyípadà tó fa èsì náà", "Kí ó lè yára", "Kí ó lè lo ìwé díẹ̀", "Kò ṣe pàtàkì"], answer: 0, why: "Tí ohun méjì bá yí padà, o kò ní mọ èyí tó fa ìyàtọ̀ náà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíka sáyẹ́nsì àti òye àdánwò sáyẹ́nsì",
        questions: [
          { objective: "O1", q: "Irinṣẹ́ wo ni ged.com sọ pé o máa rí nínú ìdánwò Sáyẹ́nsì?", options: ["Fóònù", "Ẹ̀rọ ìṣirò lórí ojú-iboju àti ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò", "Ìwé ẹ̀kọ́ sáyẹ́nsì", "Ìwé fọ́múlà tí o kọ fúnra rẹ"], answer: 1, why: "Ged.com kọ ẹ̀rọ ìṣirò lórí ojú-iboju àti ìwé ìtọ́sọ́nà ẹ̀rọ ìṣirò." },
          { objective: "O2", q: "Àyọkà kan sọ pé, \"Eré ìdárayá ń gbé heart rate sókè, ìyẹn iye ìgbà tí ọkàn ń lù ní ìṣẹ́jú kan.\" Ọ̀rọ̀ ìdánilójú wo ló ní ẹ̀rí?", options: ["Eré ìdárayá ń dín heart rate kù", "A ń wọn heart rate ní máìlì", "Eré ìdárayá ń mú kí ọkàn lù ní ìgbà púpọ̀ sí i ní ìṣẹ́jú kan", "Heart rate kì í yí padà"], answer: 2, why: "Àyọkà náà sọ pé eré ìdárayá ń gbé ìlù ọkàn ní ìṣẹ́jú kan sókè." },
          { objective: "O3", q: "\"Tí mo bá ń bomi rin tòmátì lójoojúmọ́, nígbà náà wọ́n máa so èso púpọ̀ sí i.\" Kí ni èyí?", options: ["Ìparí èrò", "Hypothesis", "Tábìlì dátà", "Ẹgbẹ́ àfiwé"], answer: 1, why: "Àmọ̀tán \"Tí ..., nígbà náà ...\" tí a lè dánwò ni." },
          { objective: "O3", q: "Nínú ìdánwò tòmátì, kí ni variable olómìnira?", options: ["Bí a ṣe ń bomi rin àwọn ewéko lóòrèkóòrè", "Iye èso", "Irú ilẹ̀", "Ìtóbi ìkòkò"], answer: 0, why: "Bíbomi rin ni ohun tí a yí padà mọ̀ọ́mọ̀." },
          { objective: "O3", q: "Èwo ni variable tí a mú dúró nínú ìdánwò tòmátì?", options: ["Bí a ṣe ń bomi rin wọ́n lóòrèkóòrè", "Iye tòmátì tí ó so", "Hypothesis", "Irú ewéko tòmátì kan náà fún gbogbo ẹgbẹ́"], answer: 3, why: "Lílo irú ewéko kan náà ń jẹ́ kí ìdánwò tọ́." }
        ]
      }
    },
    {
      name: "Orí 2: Nọ́mbà, tábìlì àti graph nínú sáyẹ́nsì",
      lessons: [
        {
          title: "Kíka tábìlì àti graph",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ka àwọn iye láti inú tábìlì tàbí graph, ṣàpèjúwe trend, kí o sì yan ìparí èrò tí dátà ṣe ìtìlẹ́yìn fún.",
          text: [
            "Ọ̀pọ̀ ìbéèrè sáyẹ́nsì máa ń fún ọ ní tábìlì tàbí graph. Kọ́kọ́ ka àkọlé, àwọn orúkọ (labels) àti ẹ̀yọ ìwọ̀n (units). Lórí graph, orúkọ ìsàlẹ̀ (x-axis) sábà máa ń jẹ́ variable olómìnira, orúkọ ẹ̀gbẹ́ (y-axis) sì sábà máa ń jẹ́ variable tó gbára lé.",
            "Àpẹẹrẹ tí a ti ṣe. Tábìlì: \"Wákàtí ìmọ́lẹ̀ lójúmọ́: 4, 8, 12. Ìpíndọ́gba gíga ewéko lẹ́yìn ọ̀sẹ̀ 3: 5 cm, 9 cm, 14 cm.\" Ka iye kan: ní wákàtí 8, ewéko ga 9 cm. Trend: bí ìmọ́lẹ̀ ṣe ń pọ̀ sí i, gíga ń pọ̀ sí i. Ìparí èrò tó ní ẹ̀rí: nínú ìdánwò yìí, ìmọ́lẹ̀ púpọ̀ bá ewéko gíga lọ.",
            "Má ṣe kọjá dátà. Tábìlì náà kò fi wákàtí ìmọ́lẹ̀ 20 hàn, nítorí náà o kò lè sọ ohun tó máa ṣẹlẹ̀ nígbà náà. Kò sì fi omi tàbí ilẹ̀ hàn, nítorí náà ìparí èrò nípa wọn kò ní ẹ̀rí.",
            "Irú graph: bar graph ń fi àwọn ẹgbẹ́ wé ara wọn, line graph ń fi ìyípadà lórí àkókò tàbí trend hàn, pie chart sì ń fi àwọn apá odindi kan hàn."
          ],
          steps: ["Ka àkọlé, àwọn orúkọ àti ẹ̀yọ ìwọ̀n.", "Wá iye tí ìbéèrè béèrè nípa rẹ̀.", "Ṣàpèjúwe trend: ó ń gòkè, ó ń sọ̀kalẹ̀, tàbí kò sí àpẹẹrẹ tó ṣe kedere.", "Yan ìparí èrò tó dúró nínú dátà.", "Pa àwọn ìdáhùn nípa ohun tí dátà kò fi hàn rẹ́."],
          words: [["Trend", "ọ̀nà gbogbogbò tí dátà ń lọ: ó ń gòkè, ó ń sọ̀kalẹ̀ tàbí ó dúró bákan náà."], ["X-axis", "ìlà tó lọ ní ìsàlẹ̀ graph."], ["Y-axis", "ìlà tó gòkè ní ẹ̀gbẹ́ graph."], ["Ẹ̀yọ ìwọ̀n (units)", "ohun tí a fi wọn nọ́mbà kan, bí cm, dígírì tàbí ìṣẹ́jú."]],
          slides: [
            { title: "Kọ́kọ́ ka àwọn orúkọ", bullets: ["Àkọlé, orúkọ àti ẹ̀yọ ìwọ̀n", "Ìsàlẹ̀ (x-axis): sábà jẹ́ ohun tí a yí padà", "Ẹ̀gbẹ́ (y-axis): sábà jẹ́ ohun tí a wọ̀n"] },
            { title: "Wá trend", bullets: ["Ó ń gòkè, ó ń sọ̀kalẹ̀, tàbí kò sí àpẹẹrẹ tó ṣe kedere", "Sọ ọ́ ní gbólóhùn kan"] },
            { title: "Dúró nínú dátà", bullets: ["Má ṣe méfò kọjá nọ́mbà tí a fi hàn", "Kò sí ìparí èrò nípa ohun tí a kò wọ̀n"] },
            { title: "Irú graph", bullets: ["Bar: ń fi àwọn ẹgbẹ́ wé ara wọn", "Line: ìyípadà lórí àkókò", "Pie: àwọn apá odindi kan"] }
          ],
          tryIt: "Tábìlì ìdárayá: \"Ìgbóná omi (dígírì C): 10, 20, 30, 40. Àkókò tí ṣúgà kúbù kan fi yọ́ (ìṣẹ́jú-àáyá): 120, 90, 60, 40.\" 1) Àkókò mélòó ló gbà ní dígírì 30? 2) Kí ni trend? 3) Ìparí èrò wo ló ní ẹ̀rí: (a) omi tó gbóná sí i mú ṣúgà yọ́ kíákíá nínú ìdánwò yìí, tàbí (b) iyọ̀ ń yọ́ kíákíá ju ṣúgà lọ? Ìdáhùn: 1) ìṣẹ́jú-àáyá 60. 2) Bí ìgbóná ṣe ń pọ̀ sí i, àkókò yíyọ́ ń dín kù. 3) (a); a kò dán iyọ̀ wò.",
          youCanNow: "ka tábìlì tàbí graph, ṣàpèjúwe trend rẹ̀, kí o sì yan ìparí èrò tí dátà ṣe ìtìlẹ́yìn fún.",
          quickCheck: [
            { objective: "O4", q: "Graph kan fi hàn pé ìpíndọ́gba ìgbóná ìlú kan ń gòkè ní ọdún mẹ́wàá-mẹ́wàá láti 1980 sí 2020. Kí ni trend?", options: ["Ó ń sọ̀kalẹ̀", "Kò sí ìyípadà", "Ó ń gòkè bí àkókò ti ń lọ", "A kò lè kà á"], answer: 2, why: "Àwọn iye ń gòkè láti ọdún mẹ́wàá kan sí èkejì." },
            { objective: "O4", q: "Tábìlì kan fi gíga ewéko hàn fún wákàtí ìmọ́lẹ̀ 4, 8 àti 12. Ìparí èrò wo ló kọjá dátà?", options: ["Ewéko tó ní wákàtí 8 ga ju èyí tó ní wákàtí 4 lọ", "Ewéko tí a fún ní wákàtí ìmọ́lẹ̀ 24 máa ga jù lọ", "Gíga pọ̀ sí i bí ìmọ́lẹ̀ ṣe pọ̀ sí i", "Ewéko tó ní wákàtí 12 dàgbà jù lọ nínú ìdánwò yìí"], answer: 1, why: "A kò dán wákàtí 24 wò, nítorí náà dátà kò lè sọ ìyẹn fún ọ." }
          ]
        },
        {
          title: "Ìṣirò sáyẹ́nsì: ìpíndọ́gba, range àti fọ́múlà",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣírò mean, median, mode àti range dátà kan, kí o sì lo fọ́múlà tí a fún ọ.",
          text: [
            "Dátà (fún ìdárayá nìkan): ìlù ọkàn lẹ́yìn ìrìn, ní ìlù ní ìṣẹ́jú kan: 80, 84, 84, 90, 92. Mean (ìpíndọ́gba): ro wọ́n pọ̀ kí o sì pín pẹ̀lú iye wọn: 430 / 5 = 86. Median: nọ́mbà àárín nígbà tí wọ́n bá wà létò: 84. Mode: nọ́mbà tó fara hàn jù lọ: 84. Range: èyí tó tóbi jù yọ èyí tó kéré jù: 92 - 80 = 12.",
            "Tí iye nọ́mbà bá jẹ́ gbèjìgbèjì (even), median ni mean àwọn nọ́mbà méjì àárín. Fún 3, 5, 7, 9: (5 + 7) / 2 = 6.",
            "Wọ́n ń fún ọ ní fọ́múlà nínú ìdánwò. Fi àwọn nọ́mbà sí i kí o sì pa ẹ̀yọ ìwọ̀n mọ́. Speed (ìyára) = distance (jíjìn) / time (àkókò): ọkọ̀ akẹ́rù kan lọ máìlì 120 ní wákàtí 2, nítorí náà speed = 120 / 2 = máìlì 60 ní wákàtí kan. Density = mass (ìwúwo) / volume (ààyè): búlọ́ọ̀kù gíráàmù 40 tí volume rẹ̀ jẹ́ cubic centimeter 20 ní density 40 / 20 = gíráàmù 2 ní cubic centimeter kan.",
            "Ṣàyẹ̀wò pé ìdáhùn rẹ bọ́gbọ́n mu. Mean gbọ́dọ̀ wà láàárín iye tó kéré jù àti èyí tó tóbi jù. Kọ ẹ̀yọ ìwọ̀n pẹ̀lú gbogbo ìdáhùn."
          ],
          steps: ["To dátà náà létò láti èyí tó kéré jù sí èyí tó tóbi jù.", "Mean: ro gbogbo iye pọ̀ kí o sì pín pẹ̀lú iye wọn.", "Median: wá èyí tó wà láàárín (tàbí ìpíndọ́gba àwọn méjì àárín).", "Mode: iye tó wọ́pọ̀ jù. Range: èyí tó tóbi jù yọ èyí tó kéré jù.", "Fún fọ́múlà: kọ ọ́, fi nọ́mbà sí i, yanjú rẹ̀, kí o sì fi ẹ̀yọ ìwọ̀n kún un."],
          words: [["Mean", "ìpíndọ́gba: àpapọ̀ tí a pín pẹ̀lú iye nọ́mbà."], ["Median", "iye tó wà láàárín nígbà tí nọ́mbà bá wà létò."], ["Mode", "iye tó fara hàn jù lọ."], ["Range", "iye tó tóbi jù yọ èyí tó kéré jù."], ["Density", "iye mass tí ó wà nínú ààyè kan: mass tí a pín pẹ̀lú volume."]],
          slides: [
            { title: "Nọ́mbà mẹ́rin tó ń ṣàpèjúwe dátà", bullets: ["Mean: àpapọ̀ tí a pín pẹ̀lú iye nọ́mbà", "Median: iye àárín nígbà tí wọ́n wà létò", "Mode: iye tó wọ́pọ̀ jù", "Range: èyí tó tóbi jù yọ èyí tó kéré jù"] },
            { title: "Àpẹẹrẹ tí a ti ṣe", bullets: ["Dátà: 80, 84, 84, 90, 92", "Mean 86, median 84, mode 84, range 12"] },
            { title: "Lílo fọ́múlà tí a fún ọ", bullets: ["Speed = distance / time", "Density = mass / volume", "Fi nọ́mbà sí i, yanjú, kọ ẹ̀yọ ìwọ̀n"] }
          ],
          tryIt: "Fún ìdárayá nìkan. 1) Ìṣẹ́jú tí yìnyín kan fi yọ́ nínú ìgbìyànjú márùn-ún: 6, 7, 7, 8, 12. Wá mean, median, mode àti range. 2) Ẹni tó ń gun kẹ̀kẹ́ kan lọ máìlì 30 ní wákàtí 3. Speed = distance / time. Ìdáhùn: 1) Mean 40 / 5 = ìṣẹ́jú 8; median 7; mode 7; range 12 - 6 = ìṣẹ́jú 6. 2) 30 / 3 = máìlì 10 ní wákàtí kan.",
          youCanNow: "wá mean, median, mode àti range dátà, kí o sì lo fọ́múlà sáyẹ́nsì pẹ̀lú ẹ̀yọ ìwọ̀n tó tọ́.",
          quickCheck: [
            { objective: "O5", q: "Dátà: 2, 4, 4, 6, 9. Kí ni mean?", options: ["4", "5", "6", "7"], answer: 1, why: "2 + 4 + 4 + 6 + 9 = 25, 25 / 5 = 5." },
            { objective: "O5", q: "Òkúta kan ní mass gíráàmù 60 àti volume cubic centimeter 20. Density = mass / volume. Kí ni density rẹ̀?", options: ["Gíráàmù 40 ní cubic centimeter kan", "Gíráàmù 1,200 ní cubic centimeter kan", "Gíráàmù 80 ní cubic centimeter kan", "Gíráàmù 3 ní cubic centimeter kan"], answer: 3, why: "60 / 20 = gíráàmù 3 ní cubic centimeter kan." }
          ]
        },
        {
          title: "Kíkó gbogbo rẹ̀ papọ̀: ìdánwò tó tọ́ tìrẹ",
          objectives: ["O3", "O4", "O5"],
          minutes: 6,
          goal: "Ṣètò ìdánwò tó tọ́, kọ dátà sínú tábìlì, wá mean, kí o sì kọ ìparí èrò tí dátà ṣe ìtìlẹ́yìn fún.",
          text: [
            "Báyìí, lo gbogbo ọgbọ́n pọ̀. Ọ̀pọ̀ ìbéèrè ìdánwò ń ṣàpèjúwe odindi àdánwò sáyẹ́nsì kan pẹ̀lú tábìlì, lẹ́yìn náà wọ́n ń béèrè nípa àwọn variable, ìṣirò àti ìparí èrò. Ṣíṣe àdánwò kékeré fúnra rẹ ń mú kí irú ìbéèrè wọ̀nyí rọrùn gan-an.",
            "Àpẹẹrẹ ilé ìdáná tí kò léwu. Ìbéèrè: ṣé rírú omi ń yí bí ṣúgà ṣe ń yọ́ kíákíá padà? Hypothesis: tí a bá ru omi náà, nígbà náà ṣúgà máa yọ́ kíákíá. Variable olómìnira: a ru ú tàbí a kò ru ú. Variable tó gbára lé: àkókò yíyọ́ (ìṣẹ́jú-àáyá). Tí a mú dúró: ife kan náà, iye omi ẹ̀rọ kan náà, ìgbóná omi kan náà, ṣúgà kúbù kan ní ìgbà kọ̀ọ̀kan. Ṣe ìgbìyànjú mẹ́ta fún ọ̀kọ̀ọ̀kan.",
            "Èsì àpẹẹrẹ (fún ìdárayá nìkan). A ru ú: ìṣẹ́jú-àáyá 40, 45, 50; mean 45. A kò ru ú: ìṣẹ́jú-àáyá 170, 180, 190; mean 180. Ìparí èrò: nínú ìdánwò yìí, rírú mú ṣúgà yọ́ kíákíá, ní ìpíndọ́gba ó yára ní nǹkan bí ìlọ́po 4. Bar graph tó ní ọ̀pá méjì (a ru ú, a kò ru ú) fi èyí hàn kedere.",
            "Ààbò: lo omi ẹ̀rọ tí kò gbóná tàbí tó lọ́wọ́ọ́rọ́ láti inú ẹ̀rọ nìkan, ṣúgà tàbí iyọ̀, àti ife tó mọ́. Kò sí sítóòfù, kò sí iná, kò sì sí kẹ́míkà ìfọmọ́. Má ṣe mu tàbí tọ́ nǹkan kankan wò nígbà ìdánwò."
          ],
          steps: ["Kọ ìbéèrè rẹ àti hypothesis \"Tí ..., nígbà náà ...\".", "Dárúkọ variable olómìnira, variable tó gbára lé àti àwọn variable tí a mú dúró.", "Ṣe ó kéré tán ìgbìyànjú mẹ́ta fún ẹgbẹ́ kọ̀ọ̀kan kí o sì kọ èsì sínú tábìlì.", "Wá mean fún ẹgbẹ́ kọ̀ọ̀kan.", "Ya bar graph kí o sì kọ ìparí èrò gbólóhùn méjì tó dúró nínú dátà rẹ."],
          words: [["Ìgbìyànjú (trial)", "ìgbà kan tí a ṣe àdánwò sáyẹ́nsì."], ["Tábìlì dátà", "ìlà àti òpó tó gba èsì rẹ."], ["Ìparí èrò (conclusion)", "ohun tí èsì fi hàn, ní gbólóhùn kan tàbí méjì."]],
          slides: [
            { title: "Ìdánwò tó tọ́ tìrẹ", bullets: ["Ìbéèrè àti hypothesis", "Variable olómìnira, tó gbára lé, àti tí a mú dúró", "Ìgbìyànjú mẹ́ta fún ẹgbẹ́ kọ̀ọ̀kan"] },
            { title: "Kọ sílẹ̀ kí o sì ṣírò", bullets: ["Kọ èsì sínú tábìlì", "Wá mean ẹgbẹ́ kọ̀ọ̀kan", "Ya bar graph"] },
            { title: "Kọ ìparí èrò", bullets: ["Sọ ohun tí dátà fi hàn", "Dúró nínú dátà rẹ", "Dárúkọ ọ̀nà kan láti mú ìdánwò dára sí i"] },
            { title: "Wà láìléwu", bullets: ["Omi ẹ̀rọ, ṣúgà tàbí iyọ̀ nìkan", "Kò sí sítóòfù, iná tàbí kẹ́míkà", "Má ṣe tọ́ tàbí mu àwọn àpẹẹrẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe àdánwò sáyẹ́nsì kékeré tìrẹ, tí kò léwu, ní ilé ìdáná (rírú àti ṣúgà, tàbí ìdánwò míì tó yí ohun kan ṣoṣo padà pẹ̀lú omi, ṣúgà tàbí iyọ̀). Kọ ìbéèrè, hypothesis àti àwọn variable, kọ ìgbìyànjú mẹ́ta fún ẹgbẹ́ kọ̀ọ̀kan sínú tábìlì, wá mean ọ̀kọ̀ọ̀kan, ya bar graph, kí o sì kọ ìparí èrò gbólóhùn méjì. Fi ètò ìkẹ́kọ̀ọ́ GED rẹ tó ní ọjọ́ sí ìsàlẹ̀, kí o sì fi rubric fún un ní máàkì.",
          youCanNow: "ṣètò kí o sì ṣe ìdánwò tó tọ́, kọ dátà sílẹ̀ kí o sì wá ìpíndọ́gba rẹ̀, kí o sì kọ ìparí èrò tí dátà ṣe ìtìlẹ́yìn fún.",
          quickCheck: [
            { objective: "O3", q: "Nínú ìdánwò rírú, kí ló gbọ́dọ̀ wà bákan náà kí ìdánwò lè tọ́?", options: ["Iye omi àti ìgbóná omi", "Bóyá a ru omi tàbí a kò ru ú", "Àkókò yíyọ́", "Ìparí èrò"], answer: 0, why: "Iye omi àti ìgbóná rẹ̀ jẹ́ variable tí a mú dúró; rírú nìkan ló yí padà." },
            { objective: "O4", q: "Mean tí a ru: ìṣẹ́jú-àáyá 45. Mean tí a kò ru: ìṣẹ́jú-àáyá 180. Ìparí èrò wo ló ní ẹ̀rí?", options: ["Rírú ń mú ṣúgà dùn sí i", "Nínú ìdánwò yìí, rírú mú ṣúgà yọ́ kíákíá", "Iyọ̀ ń yọ́ kíákíá ju ṣúgà lọ", "Rírú kò ní ipa kankan"], answer: 1, why: "Àwọn ife tí a ru yọ́ kíákíá gan-an, ìparí èrò náà sì dúró nínú dátà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Nọ́mbà, tábìlì àti graph nínú sáyẹ́nsì",
        questions: [
          { objective: "O4", q: "Lórí ọ̀pọ̀ graph sáyẹ́nsì, kí ni a fi hàn ní ìlà ìsàlẹ̀ (x-axis)?", options: ["Àkọlé", "Ìparí èrò", "Sábà jẹ́ variable olómìnira, ohun tí a yí padà", "Ẹ̀yọ ìwọ̀n owó"], answer: 2, why: "X-axis sábà máa ń fi ohun tí onímọ̀ sáyẹ́nsì yí padà hàn." },
          { objective: "O4", q: "Graph wo ló dára jù láti fi ìpíndọ́gba gíga ewéko nínú ẹgbẹ́ mẹ́ta wé ara wọn?", options: ["Bar graph", "Máàpù", "Pie chart gbogbo ọgbà", "Fọ́tò"], answer: 0, why: "Bar graph ń fi àwọn ẹgbẹ́ wé ara wọn ní ẹ̀gbẹ́ ara wọn." },
          { objective: "O5", q: "Dátà: 10, 12, 15, 15, 18. Kí ni range?", options: ["15", "14", "13", "8"], answer: 3, why: "18 - 10 = 8." },
          { objective: "O5", q: "Dátà: 3, 8, 6, 1, 7. Kí ni median?", options: ["3", "6", "7", "5"], answer: 1, why: "Létò: 1, 3, 6, 7, 8. Iye àárín ni 6." },
          { objective: "O5", q: "Bọ́ọ̀sì kan lọ máìlì 150 ní wákàtí 3. Speed = distance / time. Kí ni speed rẹ̀?", options: ["Máìlì 450 ní wákàtí kan", "Máìlì 153 ní wákàtí kan", "Máìlì 50 ní wákàtí kan", "Máìlì 147 ní wákàtí kan"], answer: 2, why: "150 / 3 = máìlì 50 ní wákàtí kan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmúrasílẹ̀ fún Ìdánwò GED: Sáyẹ́nsì",
    questions: [
      { objective: "O1", q: "Kí ni ẹ̀kọ́ yìí ń ṣe fún ọ?", options: ["Ó ń múra rẹ sílẹ̀ fún ìdánwò GED Sáyẹ́nsì", "Ó ń fún ọ ní ìwé-ẹ̀rí GED", "Ó ń sọ ọ́ di onímọ̀ sáyẹ́nsì tó ní ìwé-àṣẹ", "Ó ń rọ́pò ìdánwò GED"], answer: 0, why: "Ẹ̀kọ́ náà ń múra rẹ sílẹ̀; GED Testing Service ló ń ṣe ìdánwò, ìpínlẹ̀ rẹ ló sì ń fúnni ní ìwé-ẹ̀rí." },
      { objective: "O1", q: "Èwo ni ìdánwò míì tó dọ́gba pẹ̀lú ilé-ìwé gíga tí àwọn ìpínlẹ̀ kan ń lò?", options: ["ACT", "CDL", "HiSET", "TOEFL"], answer: 2, why: "HiSET jẹ́ ìdánwò míì tó dọ́gba pẹ̀lú ilé-ìwé gíga." },
      { objective: "O1", q: "Ẹ̀ka ọgbọ́n wo ni ged.com kọ fún ìdánwò Sáyẹ́nsì?", options: ["Híhá orúkọ egungun sórí", "Lílo nọ́mbà àti àwòrán nínú sáyẹ́nsì", "Yíya máàpù", "Kíkọ ewì"], answer: 1, why: "Ẹ̀ka mẹ́ta náà ni kíka fún ìtumọ̀, àdánwò sáyẹ́nsì, àti nọ́mbà àti àwòrán." },
      { objective: "O1", q: "Ibo ni o ti gbọ́dọ̀ ṣàyẹ̀wò àkókò, owó àti òfin ìdánwò GED tuntun?", options: ["Ìwé ìpolówó àtijọ́", "Ọ̀rẹ́ kan", "Ọ̀rọ̀ lábẹ́ fídíò kan", "Ged.com àti ọ́fíìsì ẹ̀kọ́ àgbàlagbà ní ìpínlẹ̀ rẹ"], answer: 3, why: "Òfin àti owó ń yí padà; àwọn orísun ìjọba ló ní èyí tuntun." },
      { objective: "O2", q: "Àyọkà kan ṣàlàyé ọ̀rọ̀ tuntun láàárín comma lẹ́yìn rẹ̀ gan-an. Kí ni o gbọ́dọ̀ ṣe?", options: ["Fo àyọkà náà", "Lo ìtumọ̀ yẹn láti ní òye àyọkà náà", "Méfò ìtumọ̀ míì", "Wá a lórí fóònù rẹ nígbà ìdánwò"], answer: 1, why: "Àwọn àyọkà sábà máa ń ṣàlàyé ọ̀rọ̀ líle nínú ọ̀rọ̀ náà fúnra rẹ̀." },
      { objective: "O2", q: "Àyọkà kan sọ pé oyin ń gbé eruku òdòdó (pollen) láti òdòdó kan sí òmíràn, èyí sì ń ran ọ̀pọ̀ irúgbìn lọ́wọ́ láti so èso. Ọ̀rọ̀ ìdánilójú wo ló ní ẹ̀rí?", options: ["Tí oyin bá dín kù, àwọn irúgbìn kan lè so èso díẹ̀", "Oyin ló ń ṣe gbogbo oúnjẹ", "Oyin ń jẹ èso", "Òdòdó kò nílò pollen"], answer: 0, why: "Tí oyin bá ń ran irúgbìn lọ́wọ́ láti so èso, oyin díẹ̀ lè dín èso kù." },
      { objective: "O2", q: "Ìdáhùn wo ni o gbọ́dọ̀ pa rẹ́?", options: ["Èyí tí àyọkà náà fi hàn", "Èyí tó ní nọ́mbà láti inú àyọkà", "Èyí tó fi òtítọ́ tí àyọkà kò sọ rí kún un", "Èyí tó tún èrò pàtàkì sọ"], answer: 2, why: "Ìdáhùn tó fi òtítọ́ tí kò sí nínú ọ̀rọ̀ kún un kò ní ẹ̀rí." },
      { objective: "O3", q: "Kí ni hypothesis?", options: ["Ìdáhùn ìkẹyìn", "Àmọ̀tán tí a lè dánwò, tí a sábà máa ń kọ ní \"If ..., then ...\"", "Graph kan", "Àkọsílẹ̀ irinṣẹ́"], answer: 1, why: "Hypothesis jẹ́ àmọ̀tán tí a lè dánwò nípa ohun tó máa ṣẹlẹ̀." },
      { objective: "O3", q: "Ìdánwò kan ń wò bóyá orin ń yí bí àwọn òṣìṣẹ́ ṣe ń di àpótí kíákíá padà. Kí ni variable olómìnira?", options: ["Iye àpótí tí wọ́n dì", "Ìtóbi àpótí", "Àkókò ọjọ́", "Orin tàbí kò sí orin"], answer: 3, why: "Orin ni ohun kan ṣoṣo tí a yí padà mọ̀ọ́mọ̀." },
      { objective: "O3", q: "Nínú ìdánwò orin, kí ni variable tó gbára lé?", options: ["Iye àpótí tí wọ́n dì", "Orin tàbí kò sí orin", "Orúkọ àwọn òṣìṣẹ́", "Irú téèpù"], answer: 0, why: "Iye àpótí tí wọ́n dì ni ohun tí a wọ̀n." },
      { objective: "O3", q: "Kí ló dé tí a fi ń tún ìgbìyànjú kọ̀ọ̀kan ṣe ní ọ̀pọ̀ ìgbà?", options: ["Láti lo ohun èlò púpọ̀ sí i", "Láti mú ìdánwò gùn sí i", "Láti mú kí èsì ṣeé gbẹ́kẹ̀lé sí i", "Láti yí variable púpọ̀ sí i padà"], answer: 2, why: "Ìgbìyànjú púpọ̀ ń dín àǹfààní kù pé èsì àjèjì kan máa ṣì ọ́ lọ́nà." },
      { objective: "O3", q: "Kí ni ẹgbẹ́ àfiwé (control group)?", options: ["Ẹgbẹ́ tó ní ènìyàn jù lọ", "Ẹgbẹ́ tí kò rí ìyípadà kankan, fún àfiwé", "Àwọn onímọ̀ sáyẹ́nsì tí ń ṣe ìdánwò", "Ẹgbẹ́ tó yí ohun méjì padà"], answer: 1, why: "Ẹgbẹ́ àfiwé ń fi ohun tó ń ṣẹlẹ̀ láìsí ìyípadà hàn." },
      { objective: "O4", q: "Line graph kan fi hàn pé ìgbóná ara aláìsàn kan ń sọ̀kalẹ̀ ní wákàtí kọ̀ọ̀kan lẹ́yìn oògùn (fún ìdárayá nìkan). Kí ni trend?", options: ["Ó ń sọ̀kalẹ̀", "Ó ń gòkè", "Ó dúró bákan náà", "Kò sí dátà"], answer: 0, why: "Àwọn iye ń sọ̀kalẹ̀ ní wákàtí kọ̀ọ̀kan." },
      { objective: "O4", q: "Kí ni o gbọ́dọ̀ kọ́kọ́ kà lórí graph?", options: ["Nọ́mbà tó kéré jù", "Àwọn ìdáhùn nìkan", "Àwọ̀ àwọn ọ̀pá", "Àkọlé, àwọn orúkọ àti ẹ̀yọ ìwọ̀n"], answer: 3, why: "Àwọn orúkọ àti ẹ̀yọ ìwọ̀n ń sọ ohun tí àwọn nọ́mbà túmọ̀ sí fún ọ." },
      { objective: "O4", q: "Tábìlì kan dán omi dígírì 10, 20 àti 30 wò. Gbólóhùn wo ló kọjá dátà?", options: ["A dán omi dígírì 30 wò", "Èsì dígírì 20 wà nínú tábìlì", "Ní dígírì 100, ṣúgà máa yọ́ lójú ẹsẹ̀", "Ìdánwò náà lo ìgbóná mẹ́ta"], answer: 2, why: "A kò dán dígírì 100 wò, nítorí náà dátà kò lè fi ìyẹn hàn." },
      { objective: "O4", q: "Graph wo ló ń fi àwọn apá odindi kan hàn?", options: ["Line graph", "Pie chart", "Scatter plot", "Ìlà nọ́mbà"], answer: 1, why: "Pie chart ń pín odindi kan sí àwọn apá." },
      { objective: "O5", q: "Dátà: 5, 7, 7, 9, 12. Kí ni mode?", options: ["5", "8", "12", "7"], answer: 3, why: "7 ló fara hàn jù lọ." },
      { objective: "O5", q: "Dátà: 6, 8, 10, 12. Kí ni median?", options: ["9", "8", "10", "36"], answer: 0, why: "Iye méjì àárín ni 8 àti 10, (8 + 10) / 2 = 9." },
      { objective: "O5", q: "Mọ́tò kan lọ máìlì 200 ní wákàtí 4. Speed = distance / time. Kí ni speed rẹ̀?", options: ["Máìlì 800 ní wákàtí kan", "Máìlì 50 ní wákàtí kan", "Máìlì 204 ní wákàtí kan", "Máìlì 196 ní wákàtí kan"], answer: 1, why: "200 / 4 = máìlì 50 ní wákàtí kan." },
      { objective: "O5", q: "Dátà: 20, 30, 40. Kí ni mean?", options: ["90", "20", "30", "40"], answer: 2, why: "20 + 30 + 40 = 90, 90 / 3 = 30." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [2, 3, 5, 8, 9, 13, 14, 16, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí ó kọjá ìpele ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún ìdánwò náà ṣe.",
    criteria: [
      { name: "Ìbéèrè àti hypothesis", objective: "O3", notYet: "Kò sí ìbéèrè, tàbí a kò lè dán hypothesis náà wò.", meets: "Ìbéèrè tó ṣe kedere àti hypothesis \"Tí ..., nígbà náà ...\".", exceeds: "Hypothesis náà tún sọ ìdí tí òǹkọ̀wé fi retí èsì yẹn." },
      { name: "Variable àti ìdánwò tó tọ́", objective: "O3", notYet: "Àwọn variable kò sí, tàbí ju ohun kan lọ ló yí padà.", meets: "A dárúkọ variable olómìnira, variable tó gbára lé àti ó kéré tán variable méjì tí a mú dúró; ohun kan ṣoṣo ló yí padà.", exceeds: "Ó tún ní ẹgbẹ́ àfiwé, ó sì ṣàlàyé ìdí tí variable kọ̀ọ̀kan tí a mú dúró fi ṣe pàtàkì." },
      { name: "Dátà àti ìṣirò", objective: "O5", notYet: "Ìgbìyànjú kò tó mẹ́ta fún ẹgbẹ́ kọ̀ọ̀kan, tàbí mean kò tọ́.", meets: "Ìgbìyànjú mẹ́ta fún ẹgbẹ́ kọ̀ọ̀kan nínú tábìlì, pẹ̀lú mean tó tọ́ àti ẹ̀yọ ìwọ̀n.", exceeds: "Ó tún fún ẹgbẹ́ kọ̀ọ̀kan ní range, ó sì sọ̀rọ̀ nípa bí àwọn ìgbìyànjú ṣe yàtọ̀ síra tó." },
      { name: "Graph àti ìparí èrò", objective: "O4", notYet: "Kò sí graph, tàbí ìparí èrò sọ ju ohun tí dátà fi hàn lọ.", meets: "Bar graph tó ní orúkọ àti ìparí èrò gbólóhùn méjì tó dúró nínú dátà.", exceeds: "Ó tún dárúkọ ọ̀nà kan láti mú ìdánwò dára sí i nígbà míì." },
      { name: "Kíka èsì", objective: "O2", notYet: "Ìparí èrò kò bá àwọn nọ́mbà mu.", meets: "Ìparí èrò bá àwọn nọ́mbà inú tábìlì mu.", exceeds: "Ó tọ́ka sí àwọn nọ́mbà gan-an tó ṣe ìtìlẹ́yìn fún ìparí èrò." },
      { name: "Ètò ìkẹ́kọ̀ọ́", objective: "O1", notYet: "Kò sí ètò ìkẹ́kọ̀ọ́, tàbí kò sí ọjọ́.", meets: "Ètò ìkẹ́kọ̀ọ́ tó ní ó kéré tán ọjọ́ kan lọ́sẹ̀ títí di ọ̀sẹ̀ ìdánwò.", exceeds: "Ó tún ní ọjọ́ fún GED Ready tàbí ọjọ́ ìdánwò tí a ti forúkọ sílẹ̀ fún." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí ó parí ẹ̀kọ́ náà tí wọ́n sì gba \"Ó dé ìpele\" tàbí jù bẹ́ẹ̀ lọ ní gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí ó ṣe GED Ready tàbí ìdánwò àpẹẹrẹ ọ̀fẹ́ ged.com láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí ó forúkọ sílẹ̀ fún ìdánwò GED Sáyẹ́nsì tàbí tí ó yege láàárín ọjọ́ 90 (gẹ́gẹ́ bí wọ́n ṣe sọ)",
      "Àwọn ètò alábàáṣiṣẹ́pọ̀ ròyìn pé àwọn akẹ́kọ̀ọ́ púpọ̀ sí i ń lọ sí ìdálẹ́kọ̀ọ́ iṣẹ́ nínú ìtọ́jú ìlera, yàrá àyẹ̀wò (lab) tàbí iṣẹ́ ọwọ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù, tablet tàbí kọ̀mpútà tó ní íńtánẹ́ẹ̀tì, tàbí ẹ̀kọ́ tí a tẹ̀ jáde",
      "Ìwé, kálámù àti ẹ̀rọ ìṣirò lásán (ẹ̀rọ ìṣirò fóònù dára fún ìdárayá)",
      "Fún iṣẹ́ ìkẹyìn: ife méjì tó mọ́, omi ẹ̀rọ, ṣúgà kúbù tàbí iyọ̀, ṣíbí, àti aago ìkàsẹ̀ lórí fóònù",
      "Ìdánwò àpẹẹrẹ ọ̀fẹ́ ged.com; GED Ready tí akẹ́kọ̀ọ́ bá yàn láti rà á",
      "Nǹkan bí ìṣẹ́jú 90 fún ẹ̀kọ́ àti ìdánwò, pẹ̀lú nǹkan bí ìṣẹ́jú 45 fún iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Bẹ̀rẹ̀ pẹ̀lú ìdánwò ṣáájú àti ìdánwò àpẹẹrẹ Sáyẹ́nsì ọ̀fẹ́ ged.com láti mọ ẹ̀ka ọgbọ́n tí akẹ́kọ̀ọ́ kọ̀ọ̀kan nílò jù.",
      "Kọ́kọ́ ṣe àdánwò rírú gẹ́gẹ́ bí àfihàn fún gbogbo ẹgbẹ́, lẹ́yìn náà jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣètò ìdánwò tiwọn tó yí ohun kan ṣoṣo padà.",
      "Ṣàyẹ̀wò gbogbo ètò àdánwò fún ààbò kí àwọn akẹ́kọ̀ọ́ tó ṣe é: kò sí ohun tó ń mú ooru wá, iná, kẹ́míkà tàbí títọ́ nǹkan wò.",
      "Dá kíka graph sókè lẹ́nu: àkọlé, orúkọ, ẹ̀yọ ìwọ̀n, trend, lẹ́yìn náà ìparí èrò.",
      "Ṣàyẹ̀wò ìdánwò tí ìpínlẹ̀ rẹ ń lò (GED tàbí HiSET), kí o sì sọ fún wọn nípa ibi ìdánwò nítòsí àti ìrànlọ́wọ́ owó ìdánwò tó bá wà."
    ]
  }
};
