"use strict";

// Koach Learn course (Yoruba translation of shared/ged-reasoning-language-arts.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// The GED test is taken in English, so the English example sentences in the grammar lessons and questions stay in English; only the explanations are in Yoruba.

const GED_SUBJECTS = { name: "GED Testing Service: àwọn ẹ̀ka ìdánwò (àkókò, irú ìbéèrè, àròkọ)", url: "https://ged.com/about_test/test_subjects/" };
const GED_RLA = { name: "GED Testing Service: Reasoning Through Language Arts", url: "https://ged.com/about_test/test_subjects/language_arts/" };
const GED_SCORES = { name: "GED Testing Service: máàkì", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: ìdánwò àpẹẹrẹ ọ̀fẹ́ (ní Gẹ̀ẹ́sì àti Sípáníìṣì)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, ìdánwò ìdánrawò tòótọ́ ti GED", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, ìdánwò míì tó dọ́gba pẹ̀lú ìwé-ẹ̀rí ilé-ìwé girama (ojú-òpó rẹ̀ gidi)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-reasoning-language-arts-yo",
  lang: "yo",
  translationOf: "ged-reasoning-language-arts",
  category: "Workforce Development",
  name: "Ìmúrasílẹ̀ fún Ìdánwò GED: Reasoning Through Language Arts (Kíkà àti Kíkọ̀wé)",
  skills: "Wíwá olórí èrò àti ẹ̀rí, Ṣíṣe ìfòyemọ̀ (inference), Títún gírámà àti àmì ìkọ̀wé ṣe, Ṣíṣe ìdájọ́ àríyànjiyàn àti ẹ̀rí, Kíkọ extended response (àròkọ), Ṣíṣe ètò ìkẹ́kọ̀ọ́",
  outcome: "ka àyọkà kan kí o sì dáhùn ìbéèrè bíi ti GED nípa olórí èrò rẹ̀, ẹ̀rí rẹ̀ àti gírámà rẹ̀, kí o sì kọ extended response (àròkọ) ìdánrawò láàárín ìṣẹ́jú 45 tí ó yan àríyànjiyàn tí ẹ̀rí rẹ̀ lágbára jù, tí ó sì ṣàlàyé ìdí rẹ̀ pẹ̀lú ẹ̀rí.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí wọ́n ń múra sílẹ̀ fún ìdánwò GED Reasoning Through Language Arts (RLA): àwọn tó ń wá iṣẹ́, àwọn tó ń padà sílé láti ẹ̀wọ̀n, àwọn ológun tẹ́lẹ̀ (veterans), àwọn ọ̀dọ́, àwọn tó ṣí wá láti orílẹ̀-èdè míì àti ẹnikẹ́ni tó ń padà sí ẹ̀kọ́. Ìwé-ẹ̀rí GED lè ṣí ilẹ̀kùn sí iṣẹ́, ètò ìdánilẹ́kọ̀ọ́ àti yunifásítì (college) ní Amẹ́ríkà.",
    "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀ fún ìdánwò náà. Kò fún ọ ní ìwé-ẹ̀rí GED. GED Testing Service ló ń ṣe ìdánwò náà, ìpínlẹ̀ (state) rẹ ló sì ń ṣe òfin fún bí a ṣe ń ṣe é. Àwọn ìpínlẹ̀ kan ń lo ìdánwò míì tí a ń pè ní HiSET. Ṣàyẹ̀wò ged.com àti ọ́fíìsì ẹ̀kọ́ àgbà (adult education) ní ìpínlẹ̀ rẹ fún òfin, owó àti ibi ìdánwò tó wà báyìí.",
    "O máa kọ́ bí ìdánwò náà ṣe ń ṣiṣẹ́, bí o ṣe lè kàwé láti rí olórí èrò àti ẹ̀rí, bí o ṣe lè tún àṣìṣe gírámà tó wọ́pọ̀ ṣe, bí o ṣe lè ṣe ìdájọ́ àríyànjiyàn, àti bí o ṣe lè kọ extended response (àròkọ). Ẹ̀kọ́ kọ̀ọ̀kan ní àpẹẹrẹ tí a ti ṣe, iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" pẹ̀lú àlàyé ìdáhùn, àti ìdánwò kíákíá oníbèéèrè méjì.",
    "Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò oníbèéèrè 20 sì wà ní ìparí. Iṣẹ́ ìkẹyìn ni àròkọ ìdánrawò tí o máa kọ láàárín ìṣẹ́jú 45, tí o sì máa fi rubric (àtẹ ìdíwọ̀n) ṣe máàkì rẹ̀."
  ],
  finalTask: "Kọ extended response (àròkọ) GED ìdánrawò láàárín ìṣẹ́jú 45 lórí àyọkà méjì nípa ilé-ìkàwé nínú Ẹ̀kọ́ 6. Yan àríyànjiyàn tí ẹ̀rí rẹ̀ dára jù, ṣàlàyé ìdí rẹ̀ pẹ̀lú ó kéré tán ẹ̀rí méjì láti inú àwọn àyọkà náà, kí o sì lo ìfáárà, ìpínrọ̀ àárín àti ìparí. Lẹ́yìn náà, ṣàtúnyẹ̀wò gírámà rẹ, kí o sì fi rubric ẹ̀kọ́ yìí ṣe máàkì àròkọ rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí wọ́n ń múra sílẹ̀ fún ìdánwò GED Reasoning Through Language Arts: àwọn tó ń wá iṣẹ́, àwọn tó ń padà sílé láti ẹ̀wọ̀n, àwọn ológun tẹ́lẹ̀, àwọn ọ̀dọ́ tí wọ́n fi ilé-ìwé sílẹ̀, àwọn tó ṣí wá láti orílẹ̀-èdè míì àti àwọn àgbàlagbà tó ń padà sí ẹ̀kọ́ lẹ́yìn ọ̀pọ̀ ọdún.",
    startingPoint: "Wọ́n lè ka ọ̀rọ̀ ojoojúmọ́ bí àmì ojú-ọ̀nà, fọ́ọ̀mù àti àpilẹ̀kọ kúkúrú. Ọ̀pọ̀ kò tíì kọ àròkọ tàbí kọ́ gírámà fún ọ̀pọ̀ ọdún, àwọn kan ń bẹ̀rù ìdánwò, àwọn kan sì ṣì ń kọ́ Gẹ̀ẹ́sì.",
    gap: "Ọ̀pọ̀ iṣẹ́, ètò ìdánilẹ́kọ̀ọ́ àti yunifásítì ń béèrè ìwé-ẹ̀rí ilé-ìwé girama tàbí ìwé-ẹ̀rí tó dọ́gba pẹ̀lú rẹ̀. Àwọn akẹ́kọ̀ọ́ nílò láti kàwé fínnífínní láti rí ẹ̀rí, ṣe ìdájọ́ àríyànjiyàn, lo gírámà tó tọ́ àti kọ àròkọ láàárín àkókò tí a fún wọn. Ìdánwò ń wọn àwọn ọgbọ́n yìí, wọ́n sì máa lò wọ́n níbi iṣẹ́ pẹ̀lú.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú nínú ẹ̀kọ́; àwọn àyọkà ìdánrawò kúrú",
      "Ẹ̀rọ: fóònù, kọ̀mpútà ilé-ìkàwé, tàbí ìwé àti gègé",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá iṣẹ́, ìpàdé àti ẹbí mu",
      "Òfin ìdánwò, owó àti irú ìdánwò tí ìpínlẹ̀ kan ń lò (GED tàbí HiSET) ń yí padà; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ged.com àti ìpínlẹ̀ wọn",
      "Àwọn akẹ́kọ̀ọ́ kan ń bẹ̀rù ìdánwò; ìdánrawò kò ní ewu, a sì ń ṣàlàyé àwọn ìdáhùn"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí ìpele kíkàwé wọn kò tíì dé kíláàsì 6 lè fẹ́ lọ sí kíláàsì kíkàwé ẹ̀kọ́ àgbà ní àkókò kan náà."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí o bá ń lo ojú-òpó wẹ́ẹ̀bù GED gidi", action: "dárúkọ àwọn apá, irú ìbéèrè àti àkókò ìdánwò èdè GED, kí o sì kọ ètò ìkẹ́kọ̀ọ́ tó ní ọjọ́", standard: "tí gbogbo apá ìdánwò ní orúkọ, tí ó sì ní ó kéré tán ọjọ́ ìkẹ́kọ̀ọ́ kan lọ́sẹ̀ títí di ọjọ́ ìdánwò" },
    { id: "O2", condition: "Tí a bá fún ọ ní àyọkà kúkúrú", action: "dá olórí èrò, àwọn àlàyé tó ń tì í lẹ́yìn àti ìfòyemọ̀ tí ẹ̀rí tì lẹ́yìn mọ̀", standard: "kí o sì tọ́ka sí gbólóhùn gangan tó fi ìdáhùn kọ̀ọ̀kan hàn" },
    { id: "O3", condition: "Tí a bá fún ọ ní gbólóhùn tí ó ní àṣìṣe", action: "tún àṣìṣe gírámà, àmì ìkọ̀wé, lẹ́tà ńlá àti yíyan ọ̀rọ̀ ṣe", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O4", condition: "Tí a bá fún ọ ní àríyànjiyàn kúkúrú", action: "dá àbá (claim) àti ẹ̀rí mọ̀, kí o sì sọ bóyá ẹ̀rí kọ̀ọ̀kan lágbára tàbí kò lágbára", standard: "kí o sì fún ìdájọ́ kọ̀ọ̀kan ní ìdí" },
    { id: "O5", condition: "Tí a bá fún ọ ní àyọkà méjì tí kò fohùn ṣọ̀kan, pẹ̀lú aago ìṣẹ́jú 45", action: "kọ extended response (àròkọ) tí ó yan àríyànjiyàn tí ẹ̀rí rẹ̀ dára jù, tí ó sì ṣàlàyé ìdí rẹ̀ pẹ̀lú ẹ̀rí", standard: "pẹ̀lú ìfáárà, ó kéré tán ẹ̀rí méjì láti inú àwọn àyọkà náà, àti ìparí" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíkàwé fínnífínní àti kíkọ̀wé lọ́nà tó tọ́",
      lessons: [
        {
          title: "Bí ìdánwò èdè GED ṣe ń ṣiṣẹ́",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dárúkọ àwọn apá ìdánwò èdè GED kí o sì kọ ètò ìkẹ́kọ̀ọ́ tó ní ọjọ́.",
          text: [
            "GED ní ìdánwò mẹ́rin: Math (ìṣirò), Reasoning Through Language Arts (RLA, kíkà àti kíkọ̀wé), Science (sáyẹ́ǹsì) àti Social Studies (ẹ̀kọ́ nípa àwùjọ). O lè ṣe wọ́n lọ́kọ̀ọ̀kan. GED Testing Service ló ń ṣe ìdánwò náà. Àwọn ìpínlẹ̀ kan ń lo ìdánwò míì tó dọ́gba pẹ̀lú ilé-ìwé girama, HiSET, nítorí náà ṣàyẹ̀wò èyí tí ìpínlẹ̀ rẹ ń lò.",
            "Lórí ged.com, ìdánwò RLA jẹ́ ìṣẹ́jú 150 ní apá mẹ́ta, pẹ̀lú ìsinmi ìṣẹ́jú 10 láàárín apá 2 àti apá 3. Ó ní kíkàwé láti mọ ìtumọ̀, wíwá àti kíkọ àríyànjiyàn, àti gírámà àti èdè. Apá kan jẹ́ àròkọ tí o máa kọ, tí a ń pè ní extended response, pẹ̀lú ìṣẹ́jú 45.",
            "Ọ̀pọ̀ ìbéèrè jẹ́ yíyan ìdáhùn kan nínú ọ̀pọ̀ (multiple choice). Àwọn míì ní kí o fa nǹkan kí o sì jù ú sílẹ̀ (drag and drop), yan apá kan lójú-iboju, tàbí yan láti inú drop-down nínú gbólóhùn kan. Ged.com sọ pé máàkì 145 ni máàkì ìyege fún ẹ̀ka kọ̀ọ̀kan. Àkókò àti òfin lè yí padà, nítorí náà ṣàyẹ̀wò ged.com kí o tó forúkọ sílẹ̀.",
            "Ètò dára ju kíkàwé ní alẹ́ ọjọ́ kan ṣoṣo lọ. Ìdánrawò kúkúrú ní ọjọ́ mẹ́rin tàbí márùn-ún lọ́sẹ̀ dára ju alẹ́ gígùn kan lọ. Ged.com ní ìdánwò àpẹẹrẹ ọ̀fẹ́ àti ìdánwò ìdánrawò tòótọ́ kan, GED Ready, tí ó ń fi hàn bóyá ó ṣeé ṣe kí o yege."
          ],
          steps: ["Lọ sí ged.com kí o sì ka ojú-ewé Reasoning Through Language Arts.", "Kọ àkókò, àwọn apá àti irú ìbéèrè sílẹ̀.", "Ṣe ìdánwò àpẹẹrẹ RLA ọ̀fẹ́ láti mọ ibi tí o wà.", "Yan ọ̀sẹ̀ tí o fẹ́ ṣe ìdánwò kí o sì ka iye ọ̀sẹ̀ tó kù.", "Kọ ó kéré tán ọjọ́ ìkẹ́kọ̀ọ́ kan lọ́sẹ̀, pẹ̀lú ẹ̀kọ́ tàbí ọgbọ́n fún ọjọ́ náà."],
          words: [["GED", "ìdánwò tó dọ́gba pẹ̀lú ilé-ìwé girama ní Amẹ́ríkà; tí o bá yege gbogbo ẹ̀ka mẹ́rẹ̀ẹ̀rin, o máa gba ìwé-ẹ̀rí tí ọ̀pọ̀ agbanisíṣẹ́ àti yunifásítì gbà bí ìwé-ẹ̀rí ilé-ìwé girama."], ["HiSET", "ìdánwò míì tó dọ́gba pẹ̀lú ilé-ìwé girama tí àwọn ìpínlẹ̀ kan ń lò."], ["Extended response", "orúkọ tí GED ń pe àròkọ tí o máa kọ nínú ìdánwò."], ["Drop-down", "àkọsílẹ̀ tí ó ń ṣí sílẹ̀ nígbà tí o bá tẹ̀ ẹ́, kí o lè yan ìdáhùn kan."], ["Ètò ìkẹ́kọ̀ọ́", "kàlẹ́ńdà ohun tí o máa dánrawò àti ìgbà tí o máa ṣe é."]],
          slides: [
            { title: "Ẹ̀ka mẹ́rin ti GED", bullets: ["Math (ìṣirò)", "Reasoning Through Language Arts (RLA)", "Science (sáyẹ́ǹsì)", "Social Studies (ẹ̀kọ́ nípa àwùjọ)"] },
            { title: "Ìdánwò RLA (ṣàyẹ̀wò ged.com)", bullets: ["Ìṣẹ́jú 150, apá mẹ́ta, ìsinmi ìṣẹ́jú 10 kan", "Kíkàwé fún ìtumọ̀, àríyànjiyàn, gírámà", "Àròkọ kan: extended response, ìṣẹ́jú 45"] },
            { title: "Irú ìbéèrè", bullets: ["Yíyan ìdáhùn kan nínú ọ̀pọ̀ (multiple choice)", "Fà kí o sì jù sílẹ̀ (drag and drop)", "Yan apá kan lójú-iboju", "Drop-down"] },
            { title: "Ṣe ètò", bullets: ["Kọ́kọ́ ṣe ìdánwò àpẹẹrẹ ọ̀fẹ́", "Yan ọ̀sẹ̀ tí o fẹ́ ṣe ìdánwò", "Kẹ́kọ̀ọ́ díẹ̀díẹ̀, ní ọ̀pọ̀ ọjọ́ nínú ọ̀sẹ̀"] }
          ],
          sources: [GED_SUBJECTS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Ṣí ged.com kí o sì ṣe ìdánwò àpẹẹrẹ RLA ọ̀fẹ́ (tàbí ka ojú-ewé RLA tí o kò bá lè ṣe é báyìí). Lẹ́yìn náà kọ ètò ìkẹ́kọ̀ọ́ rẹ: ọ̀sẹ̀ tí o fẹ́ ṣe ìdánwò, àti ọjọ́ kan lọ́sẹ̀ pẹ̀lú ọgbọ́n tí o máa dánrawò (kíkàwé, gírámà, àríyànjiyàn tàbí àròkọ). Pa á mọ́; o máa fi kún un.",
          youCanNow: "dárúkọ àwọn apá ìdánwò èdè GED kí o sì tẹ̀lé ètò ìkẹ́kọ̀ọ́ tó ní ọjọ́.",
          quickCheck: [
            { objective: "O1", q: "Kí ni extended response nínú ìdánwò èdè GED?", options: ["Àkọsílẹ̀ àwọn ọ̀rọ̀ tuntun", "Ìfọ̀rọ̀wánilẹ́nuwò ẹnu", "Àròkọ tí o máa kọ nínú ìdánwò", "Apá ìṣirò kan"], answer: 2, why: "Ged.com ń pe àròkọ tí o kọ ní extended response." },
            { objective: "O1", q: "Ọ̀sẹ̀ 8 ló kù kí ìdánwò rẹ dé. Ètò wo ló dára jù?", options: ["Kẹ́kọ̀ọ́ ìṣẹ́jú 30 ní ọjọ́ mẹ́rin lọ́sẹ̀, pẹ̀lú ọgbọ́n kan fún ọjọ́ kọ̀ọ̀kan", "Kẹ́kọ̀ọ́ ní gbogbo òru ọjọ́ tó ṣáájú ìdánwò", "Ṣe ìdánwò láìdánrawò láti wo ohun tó máa ṣẹlẹ̀", "Ka àwọn ìmọ̀ràn àròkọ nìkan"], answer: 0, why: "Ìdánrawò kúkúrú, déédéé, pẹ̀lú ọgbọ́n tí a ti yàn fún ọjọ́ kọ̀ọ̀kan ń kọ́ni dáadáa ju kíkàwé lálẹ́ ọjọ́ kan ṣoṣo lọ." }
          ]
        },
        {
          title: "Olórí èrò, àwọn àlàyé àti ìfòyemọ̀",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dá olórí èrò, àlàyé méjì tó ń tì í lẹ́yìn àti ìfòyemọ̀ kan mọ̀ nínú àyọkà kúkúrú.",
          text: [
            "Olórí èrò ni ohun tí gbogbo àyọkà náà ń sọ jù lọ. Àwọn àlàyé tó ń tì í lẹ́yìn ni àwọn òtítọ́, àpẹẹrẹ àti ìdí tó ń fi hàn pé ó jẹ́ òótọ́. Bi ara rẹ pé: \"Tí mo bá ní láti sọ àyọkà yìí ní gbólóhùn kan, kí ni màá sọ?\"",
            "Àpẹẹrẹ. Àyọkà: \"Ọ̀pọ̀ ilé ìkẹ́rùsí (warehouse) ń ṣiṣẹ́ ní gbogbo òru báyìí. Iṣẹ́ alẹ́ sábà máa ń sanwó jù fún wákàtí kan. Ṣùgbọ́n àwọn òṣìṣẹ́ alẹ́ sọ pé oorun ń ṣòro fún wọn, àwọn kan sì sọ pé ó ṣòro láti rí ẹbí wọn.\" Olórí èrò: iṣẹ́ alẹ́ ń sanwó jù, ṣùgbọ́n ó ní ìnira fún àwọn òṣìṣẹ́. Àwọn àlàyé: ó ń sanwó jù; àwọn òṣìṣẹ́ ní ìṣòro oorun; àkókò pẹ̀lú ẹbí ń ṣòro.",
            "Ìfòyemọ̀ (inference) ni ìrònú ọlọ́gbọ́n tí ó dá lórí àmì inú ọ̀rọ̀ náà. A kò kọ ọ́ ní ọ̀rọ̀ gangan, ṣùgbọ́n ọ̀rọ̀ náà tì í lẹ́yìn. Láti inú àyọkà yìí, o lè fòye mọ̀ pé òṣìṣẹ́ tí ó ní ọmọ kékeré lè ronú lẹ́ẹ̀mejì kí ó tó gba iṣẹ́ alẹ́. O kò lè fòye mọ̀ pé iṣẹ́ alẹ́ lòdì sí òfin; kò sí ohun tó sọ bẹ́ẹ̀.",
            "Nínú ìdánwò, máa tọ́ka sí gbólóhùn tó fi ìdáhùn rẹ hàn nígbà gbogbo. Tí o kò bá rí gbólóhùn tí o lè tọ́ka sí, ó ṣeé ṣe kí ìdáhùn náà má tọ̀nà."
          ],
          steps: ["Kọ́kọ́ ka ìbéèrè, kí o lè mọ ohun tí o ń wá.", "Ka àyọkà náà lẹ́ẹ̀kan láti ìbẹ̀rẹ̀ dé òpin.", "Sọ olórí èrò ní gbólóhùn kan.", "Wá àlàyé méjì tó ń tì í lẹ́yìn.", "Fún ìfòyemọ̀, yan ìdáhùn tí ọ̀rọ̀ náà tì lẹ́yìn, kí o sì wá gbólóhùn tó fi hàn."],
          words: [["Olórí èrò (main idea)", "ohun tí àyọkà kan ń sọ jù lọ."], ["Àlàyé tó ń tì í lẹ́yìn (supporting detail)", "òtítọ́, àpẹẹrẹ tàbí ìdí tó ń fi olórí èrò hàn."], ["Ìfòyemọ̀ (inference)", "ìpinnu tí o dé láti inú àmì inú ọ̀rọ̀ náà."], ["Ẹ̀rí (evidence)", "àwọn ọ̀rọ̀ inú àyọkà tó fi ìdáhùn kan hàn pé ó tọ̀nà."]],
          slides: [
            { title: "Olórí èrò", bullets: ["Ohun tí àyọkà náà ń sọ jù lọ", "Sọ ọ́ ní gbólóhùn kan"] },
            { title: "Àwọn àlàyé tó ń tì í lẹ́yìn", bullets: ["Òtítọ́, àpẹẹrẹ àti ìdí", "Wọ́n ń ti olórí èrò lẹ́yìn"] },
            { title: "Ìfòyemọ̀ (inference)", bullets: ["Ìrònú ọlọ́gbọ́n láti inú àmì inú ọ̀rọ̀", "A kò kọ ọ́ ní ọ̀rọ̀ gangan", "Ọ̀rọ̀ náà gbọ́dọ̀ tì í lẹ́yìn"] },
            { title: "Fi ẹ̀rí hàn", bullets: ["Tọ́ka sí gbólóhùn tó fi ìdáhùn rẹ hàn", "Kò sí gbólóhùn láti tọ́ka sí? Tún yan"] }
          ],
          tryIt: "Àyọkà ìdánrawò: \"Ìlú náà ṣí ibùdó ìtura mẹ́ta tuntun (cooling centers) ní ìgbà ẹ̀ẹ̀rùn yìí. Ní ọjọ́ tí ooru bá ju 100 degrees lọ, wọ́n ṣí sílẹ̀ títí di agogo 10 alẹ́. Àwọn àgbàlagbà àti àwọn tí kò ní ẹ̀rọ amúlétutù (air conditioning) ló wá jù.\" 1) Olórí èrò? 2) Àlàyé méjì? 3) Ìfòyemọ̀ wo ni àyọkà náà tì lẹ́yìn: (a) ìlú náà fẹ́ dáàbò bo àwọn ènìyàn lọ́wọ́ ooru, tàbí (b) àwọn ibùdó náà ná owó jù? Ìdáhùn: 1) Ìlú náà ṣí ibùdó ìtura láti ran àwọn ènìyàn lọ́wọ́ nígbà ooru. 2) Wọ́n ṣí sílẹ̀ títí di agogo 10 alẹ́ ní ọjọ́ tí ooru pọ̀ gan-an; ọ̀pọ̀ àwọn tó wá jẹ́ àgbàlagbà àti àwọn tí kò ní ẹ̀rọ amúlétutù. 3) (a). Kò sí ohun tí àyọkà náà sọ nípa owó.",
          youCanNow: "wá olórí èrò, àwọn àlàyé àti ìfòyemọ̀ tí ọ̀rọ̀ tì lẹ́yìn, kí o sì tọ́ka sí ẹ̀rí.",
          quickCheck: [
            { objective: "O2", q: "Àyọkà kan sọ pé ilé búrẹ́dì kan fi iṣẹ́ ìrọ̀lẹ́ kún un, ó gba ènìyàn márùn-ún síṣẹ́, ó sì ta búrẹ́dì sí i ní 30%. Kí ni olórí èrò?", options: ["Búrẹ́dì dára fún ara", "Fífi iṣẹ́ ìrọ̀lẹ́ kún un ràn ilé búrẹ́dì náà lọ́wọ́ láti dàgbà", "Wọ́n gba ènìyàn márùn-ún síṣẹ́", "Àwọn ilé búrẹ́dì ń tì lálẹ́"], answer: 1, why: "Gbogbo àyọkà náà ń sọ nípa bí iṣẹ́ ìrọ̀lẹ́ ṣe ran ilé búrẹ́dì náà lọ́wọ́; àwọn òṣìṣẹ́ tuntun àti títà jẹ́ àlàyé." },
            { objective: "O2", q: "Èwo ni ìfòyemọ̀, tí kì í ṣe àlàyé tí a kọ sínú ọ̀rọ̀ náà?", options: ["Òtítọ́ tí a dà kọ láti inú àyọkà ní ọ̀rọ̀ gangan", "Àkọlé àyọkà náà", "Iye ìpínrọ̀", "Ìpinnu tí o dé láti inú àmì tí ọ̀rọ̀ náà fún ọ"], answer: 3, why: "Ìfòyemọ̀ jẹ́ ìpinnu tí àmì inú ọ̀rọ̀ tì lẹ́yìn, kì í ṣe òtítọ́ tí a sọ ní tààrà." }
          ]
        },
        {
          title: "Títún gírámà àti àmì ìkọ̀wé ṣe",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tún irú àṣìṣe gírámà àti àmì ìkọ̀wé márùn-ún tó wọ́pọ̀ ṣe nínú gbólóhùn.",
          text: [
            "Ọ̀pọ̀ ìbéèrè RLA ń fi gbólóhùn kan hàn pẹ̀lú drop-down, wọ́n sì ń béèrè èyí tó tọ̀nà. Èdè Gẹ̀ẹ́sì ni ìdánwò náà, nítorí náà àwọn àpẹẹrẹ ibí wà ní Gẹ̀ẹ́sì. Àwọn àṣìṣe díẹ̀ ń wáyé léraléra. Kọ́ wọn, o sì máa gba máàkì púpọ̀.",
            "1) Olùwà àti ọ̀rọ̀-ìṣe gbọ́dọ̀ bára mu: \"The list of jobs is long\" (olùwà ni list, kì í ṣe jobs). 2) Gbólóhùn pípé: \"Because the bus was late.\" jẹ́ ẹ̀ka gbólóhùn (fragment); tún un ṣe: \"I was late because the bus was late.\" 3) Gbólóhùn tó so pọ̀ láìní àmì (run-on): \"I applied I got the job\" nílò àmì ìdúró (.), semicolon (;) tàbí ọ̀rọ̀ àsopọ̀: \"I applied, and I got the job.\"",
            "4) Ọ̀rọ̀ tí ìró wọn jọra: their (tiwọn), there (ibì kan), they're (they are: àwọn ń...); its (tirẹ̀, fún nǹkan), it's (it is); your (tìrẹ), you're (you are). 5) Lẹ́tà ńlá àti apostrophe ('): orúkọ ènìyàn, ibi àti ọjọ́ ń bẹ̀rẹ̀ pẹ̀lú lẹ́tà ńlá (Monday, Texas); apostrophe ń fi ohun-ìní hàn (the manager's office) tàbí lẹ́tà tó kù (don't), kì í ṣe ọ̀pọ̀ (two shifts, kì í ṣe two shift's).",
            "Ọ̀rọ̀ àsopọ̀ (transition) ń so èrò pọ̀: however (ṣùgbọ́n), therefore (nítorí náà), for example (fún àpẹẹrẹ), in addition (ní àfikún). Yan èyí tó bá ìtumọ̀ láàárín gbólóhùn méjì náà mu."
          ],
          steps: ["Ka gbogbo gbólóhùn náà, kì í ṣe apá tí a fà ìlà sí nìkan.", "Wá olùwà àti ọ̀rọ̀-ìṣe, kí o sì ṣàyẹ̀wò pé wọ́n bára mu.", "Ṣàyẹ̀wò pé gbólóhùn pípé ni, kì í ṣe gbólóhùn méjì tí a so pọ̀ láìní àmì.", "Ṣàyẹ̀wò àwọn ọ̀rọ̀ tí ìró wọn jọra, lẹ́tà ńlá àti apostrophe.", "Ka ìdáhùn tí o yàn padà sínú gbólóhùn náà láti rí i dájú pé ó dún dáadáa."],
          words: [["Olùwà (subject)", "ẹni tàbí nǹkan tí gbólóhùn ń sọ nípa rẹ̀."], ["Ọ̀rọ̀-ìṣe (verb)", "ọ̀rọ̀ ìṣe tàbí ọ̀rọ̀ jíjẹ́, bí runs tàbí is."], ["Fragment", "apá kan gbólóhùn tí kò lè dá dúró fúnra rẹ̀."], ["Run-on", "gbólóhùn méjì tí a so pọ̀ láìsí àmì ìkọ̀wé tó tọ́."], ["Transition", "ọ̀rọ̀ tó so èrò méjì pọ̀, bí however tàbí therefore."]],
          slides: [
            { title: "Àṣìṣe márùn-ún láti mú", bullets: ["Olùwà àti ọ̀rọ̀-ìṣe tí kò bára mu", "Fragment àti run-on", "Ọ̀rọ̀ tí ìró wọn jọra", "Lẹ́tà ńlá àti apostrophe"] },
            { title: "Ọ̀rọ̀ tí ìró wọn jọra", bullets: ["their / there / they're", "its / it's", "your / you're"] },
            { title: "Apostrophe (')", bullets: ["Ohun-ìní: the manager's office", "Lẹ́tà tó kù: don't, it's", "Kì í ṣe fún ọ̀pọ̀ lásán: two shifts"] },
            { title: "Ọ̀rọ̀ àsopọ̀ (transition)", bullets: ["however = but (ṣùgbọ́n)", "therefore = so (nítorí náà)", "for example, in addition"] }
          ],
          tryIt: "Tún gbólóhùn kọ̀ọ̀kan ṣe. 1) \"The box of gloves are on the shelf.\" 2) \"Their going to the job fair on friday.\" 3) \"I finished my shift I went home.\" 4) \"The company changed it's hours.\" 5) \"Because I wanted to learn.\" Ìdáhùn: 1) \"is\" (olùwà ni box). 2) \"They're going to the job fair on Friday.\" 3) \"I finished my shift, and I went home.\" 4) \"its\" (tirẹ̀). 5) Fi olórí èrò kún un: \"I signed up for class because I wanted to learn.\"",
          youCanNow: "rí àwọn àṣìṣe gírámà àti àmì ìkọ̀wé tó wọ́pọ̀ jù nínú ìdánwò, kí o sì tún wọn ṣe.",
          quickCheck: [
            { objective: "O3", q: "Gbólóhùn wo ló tọ̀nà?", options: ["The team of nurses are ready.", "The team of nurses were ready.", "The team of nurses is ready.", "The team of nurses be ready."], answer: 2, why: "Olùwà ni team (ẹgbẹ́ kan), nítorí náà ọ̀rọ̀-ìṣe ni is." },
            { objective: "O3", q: "Ọ̀rọ̀ wo ló bá a mu: \"___ going to start training on Monday.\"", options: ["There", "They're", "Their", "Thier"], answer: 1, why: "They're túmọ̀ sí they are: they are going to start training." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíkàwé fínnífínní àti kíkọ̀wé lọ́nà tó tọ́",
        questions: [
          { objective: "O1", q: "Irú ìbéèrè wo ló wà nínú ìdánwò èdè GED, gẹ́gẹ́ bí ged.com ṣe sọ?", options: ["Òótọ́ tàbí irọ́ nìkan", "Ìdáhùn ẹnu nìkan", "Àròkọ nìkan", "Multiple choice, drag and drop, yíyan apá kan, drop-down àti àròkọ kan"], answer: 3, why: "Ged.com dárúkọ àwọn irú ìbéèrè yìí pẹ̀lú extended response kan." },
          { objective: "O2", q: "Àyọkà kan sọ pé ilé ìwòsàn kékeré kan fi wákàtí ọjọ́ Sátidé kún un, iye àwọn òbí tó ń ṣiṣẹ́ tó wá sì di ìlọ́po méjì. Ìfòyemọ̀ wo ni ọ̀rọ̀ náà tì lẹ́yìn?", options: ["Ọ̀pọ̀ òbí tó ń ṣiṣẹ́ kò lè wá ní ọjọ́ iṣẹ́", "Ilé ìwòsàn náà máa tì láìpẹ́", "Ọjọ́ Sátidé jẹ́ ọjọ́ ìsinmi", "Àwọn dókítà kò fẹ́ràn ọjọ́ Sátidé"], answer: 0, why: "Àwọn òbí tó ń ṣiṣẹ́ pọ̀ sí i nígbà tí wọ́n ṣí ní Sátidé, èyí sì fi hàn pé ọjọ́ iṣẹ́ ṣòro fún wọn." },
          { objective: "O2", q: "Báwo lo ṣe máa mọ̀ pé ìdáhùn rẹ nípa àyọkà kan tọ̀nà?", options: ["Yan ìdáhùn tó gùn jù", "Tọ́ka sí gbólóhùn nínú àyọkà tó fi hàn", "Yan ìdáhùn tí o fẹ́ràn jù", "Yan C ní gbogbo ìgbà"], answer: 1, why: "Ọ̀rọ̀ inú àyọkà ló ń ti ìdáhùn tó tọ̀nà lẹ́yìn." },
          { objective: "O3", q: "Gbólóhùn wo ló tọ̀nà?", options: ["The store changed it's hours.", "The store changed its hours.", "The store changed its' hours.", "The store changed it is hours."], answer: 1, why: "Its tí kò ní apostrophe túmọ̀ sí tirẹ̀ (fún nǹkan)." },
          { objective: "O3", q: "\"I passed the test I was so happy.\" Kí ni ìṣòro rẹ̀?", options: ["Run-on ni; ó nílò àmì ìdúró tàbí ọ̀rọ̀ àsopọ̀", "Ọ̀rọ̀ kan ní àṣìṣe sípẹ́lì", "Test nílò lẹ́tà ńlá", "Kò sí ìṣòro"], answer: 0, why: "Gbólóhùn pípé méjì ni a so pọ̀ láìsí nǹkan kan láàárín wọn." }
        ]
      }
    },
    {
      name: "Orí 2: Àríyànjiyàn àti extended response (àròkọ)",
      lessons: [
        {
          title: "Àbá (claim), ẹ̀rí àti ìdí tó lágbára",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dá àbá àti ẹ̀rí mọ̀ nínú àríyànjiyàn kan, kí o sì sọ bóyá ẹ̀rí kọ̀ọ̀kan lágbára tàbí kò lágbára.",
          text: [
            "Àríyànjiyàn ń gbìyànjú láti yí ọ lọ́kàn padà. Àbá (claim) ni ohun tí òǹkọ̀wé fẹ́ kí o gbà gbọ́. Ẹ̀rí ni ohun tí ó ń lò láti fi hàn pé ó jẹ́ òótọ́.",
            "Ẹ̀rí tó lágbára jẹ́ pàtó, a sì lè ṣàyẹ̀wò rẹ̀: nọ́mbà láti inú ìwádìí tàbí àkọsílẹ̀, òtítọ́, tàbí ògbóǹkangí nínú ẹ̀ka náà. Ẹ̀rí tí kò lágbára jẹ́ ìmọ̀lára, ìtàn ẹnì kan ṣoṣo tí a fi dúró fún gbogbo ènìyàn, gbajúmọ̀ tí kì í ṣe ògbóǹkangí, tàbí ọ̀rọ̀ tí kò ní ẹ̀rí.",
            "Àpẹẹrẹ. Àbá: \"Ìlú wa gbọ́dọ̀ fi ọ̀nà bọ́ọ̀sì kan kún un sí agbègbè ilé-iṣẹ́.\" Ẹ̀rí A: \"Ìwádìí county kan lórí òṣìṣẹ́ 600 rí i pé 1 nínú 4 ń pàdánù iṣẹ́ nítorí ọkọ̀.\" Ó lágbára: nọ́mbà láti inú ìwádìí. Ẹ̀rí B: \"Ìbátan mi sọ pé bọ́ọ̀sì náà máa dára.\" Kò lágbára: èrò ẹnì kan ṣoṣo.",
            "Tún ṣọ́ra fún ẹ̀tàn: ọ̀rọ̀ bí \"gbogbo ènìyàn ló mọ̀\", bíbú ẹni náà dípò èrò rẹ̀, àti fífún ọ ní ọ̀nà méjì péré nígbà tí ọ̀nà púpọ̀ wà."
          ],
          steps: ["Wá àbá: kí ni òǹkọ̀wé fẹ́ kí o gbà gbọ́?", "Fa ìlà sí ẹ̀rí kọ̀ọ̀kan.", "Béèrè pé: ṣé ó jẹ́ pàtó, ṣé mo sì lè ṣàyẹ̀wò rẹ̀?", "Sọ pé ó lágbára tàbí kò lágbára, kí o sì kọ ìdí kan."],
          words: [["Àríyànjiyàn (argument)", "ọ̀rọ̀ tí ó ń gbìyànjú láti yí ọ lọ́kàn padà nípa nǹkan kan."], ["Àbá (claim)", "olórí kókó tí òǹkọ̀wé fẹ́ kí o gbà gbọ́."], ["Ẹ̀rí tó lágbára", "òtítọ́ tàbí nọ́mbà pàtó tí o lè ṣàyẹ̀wò, tàbí ògbóǹkangí nínú ẹ̀ka náà."], ["Ẹ̀rí tí kò lágbára", "ìmọ̀lára, ìtàn kan ṣoṣo, tàbí ọ̀rọ̀ tí kò ní ẹ̀rí."]],
          slides: [
            { title: "Àwọn apá àríyànjiyàn", bullets: ["Àbá: ohun tí òǹkọ̀wé fẹ́ kí o gbà gbọ́", "Ẹ̀rí: ohun tí ó ń lò láti fi hàn"] },
            { title: "Ẹ̀rí tó lágbára", bullets: ["Nọ́mbà láti inú ìwádìí tàbí àkọsílẹ̀", "Òtítọ́ tí o lè ṣàyẹ̀wò", "Ògbóǹkangí nínú ẹ̀ka náà"] },
            { title: "Ẹ̀rí tí kò lágbára", bullets: ["Ìmọ̀lára tàbí \"gbogbo ènìyàn ló mọ̀\"", "Ìtàn ẹnì kan ṣoṣo", "Gbajúmọ̀ tí kì í ṣe ògbóǹkangí"] },
            { title: "Ṣọ́ra fún ẹ̀tàn", bullets: ["Bíbú ẹni náà, kì í ṣe èrò rẹ̀", "Ọ̀nà méjì péré nígbà tí ọ̀nà púpọ̀ wà"] }
          ],
          tryIt: "Àríyànjiyàn ìdánrawò: \"Ìlú náà gbọ́dọ̀ gbin igi sí i ní àárín ìlú. Ìwádìí ìlú kan wọn ojú-ọ̀nà tí igi wà, ó sì rí i pé wọ́n tutù ju àwọn míì lọ ní nǹkan bí 10 degrees ní ìgbà ẹ̀ẹ̀rùn. Olórin kan ládùúgbò sọ pé igi máa ń rẹwà. Ẹnikẹ́ni tí kò bá fohùn ṣọ̀kan kórìíra àyíká lásán ni.\" Wá àbá kí o sì ṣe ìdájọ́ ẹ̀rí kọ̀ọ̀kan. Ìdáhùn: Àbá: gbin igi sí i ní àárín ìlú. Ìwádìí ìlú: ó lágbára (nọ́mbà tí a wọ̀n láti inú ìwádìí). Olórin: kò lágbára (kì í ṣe ògbóǹkangí; èrò lásán ni). \"Ẹnikẹ́ni tí kò bá fohùn ṣọ̀kan kórìíra àyíká\": kò lágbára (ó ń bú ènìyàn dípò kí ó fún ni ní ẹ̀rí).",
          youCanNow: "wá àbá, ya ẹ̀rí tó lágbára sọ́tọ̀ kúrò lára èyí tí kò lágbára, kí o sì sọ ìdí rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Èwo ni ẹ̀rí tó lágbára jù pé ètò ìdánilẹ́kọ̀ọ́ iṣẹ́ kan ń ṣiṣẹ́?", options: ["Olùdarí sọ pé ó dára gan-an", "Gbajúmọ̀ kan fẹ́ràn rẹ̀", "Àkọsílẹ̀ fi hàn pé 70% àwọn tó parí rí iṣẹ́ láàárín oṣù mẹ́fà", "Gbogbo ènìyàn ló mọ̀ pé ó ń ṣiṣẹ́"], answer: 2, why: "Nọ́mbà pàtó láti inú àkọsílẹ̀ ni, a sì lè ṣàyẹ̀wò rẹ̀." },
            { objective: "O4", q: "\"Aládùúgbò mi ṣàìsàn lẹ́yìn tí ó jẹun níbẹ̀, nítorí náà ilé oúnjẹ náà kò láàbò.\" Irú ẹ̀rí wo nìyí?", options: ["Ẹ̀rí ògbóǹkangí", "Ìwádìí", "Àkọsílẹ̀ ìjọba", "Kò lágbára: ìtàn ẹnì kan ṣoṣo"], answer: 3, why: "Ìtàn kan ṣoṣo kò fi ohun kan hàn nípa gbogbo oúnjẹ tí wọ́n ń tà níbẹ̀." }
          ]
        },
        {
          title: "Fífi àríyànjiyàn méjì wéra àti ṣíṣe ètò àròkọ rẹ",
          objectives: ["O4", "O5"],
          minutes: 5,
          goal: "Fi àríyànjiyàn méjì wéra kí o sì kọ ètò kúkúrú fún extended response.",
          text: [
            "Nínú ìdánwò, o máa ka àyọkà méjì tí wọ́n wà ní ẹ̀gbẹ́ ọ̀tọ̀ọ̀tọ̀. Ged.com sọ pé o máa ṣàgbéyẹ̀wò wọn, pinnu èyí tí ẹ̀rí rẹ̀ yíni lọ́kàn padà jù, kí o sì ṣàlàyé ìdí. Wọn kò béèrè ẹ̀gbẹ́ tí o fara mọ́; ẹ̀rí ni o ń ṣe ìdájọ́ rẹ̀.",
            "Lo àtẹ tó rọrùn. Fún àyọkà kọ̀ọ̀kan, kọ àbá, ẹ̀rí, àti àmì pé ó lágbára tàbí kò lágbára. Àyọkà tí ẹ̀rí rẹ̀ tó lágbára pọ̀ jù ni o sábà máa yàn, kódà tí ìwọ fúnra rẹ bá gba ẹ̀gbẹ́ kejì gbọ́.",
            "Lo nǹkan bí ìṣẹ́jú 10 láti ṣètò. Ètò rẹ: 1) thesis rẹ, gbólóhùn kan tí ó sọ àríyànjiyàn tí ẹ̀rí rẹ̀ dára jù; 2) ẹ̀rí méjì tàbí mẹ́ta láti inú àyọkà náà àti ìdí tí wọ́n fi lágbára; 3) àìlera kan nínú àyọkà kejì.",
            "Àwọn àyọkà ìdánrawò wà nínú Ẹ̀kọ́ 6. Lónìí, dánrawò àtẹ náà pẹ̀lú àpilẹ̀kọ èrò kúkúrú méjì tí kò fohùn ṣọ̀kan, bí lẹ́tà méjì sí olóòtú ìwé ìròyìn."
          ],
          steps: ["Ka àyọkà méjèèjì kí o sì wá àbá ọ̀kọ̀ọ̀kan.", "Ṣe àtẹ oníbùú méjì: ẹ̀rí nínú àyọkà kọ̀ọ̀kan.", "Sàmì sí ẹ̀rí kọ̀ọ̀kan pé ó lágbára tàbí kò lágbára.", "Kọ gbólóhùn thesis kan: àríyànjiyàn wo ni ẹ̀rí rẹ̀ dára jù.", "Kọ ẹ̀rí tí o máa lò nínú ìpínrọ̀ àárín kọ̀ọ̀kan sílẹ̀."],
          words: [["Thesis", "gbólóhùn kan tí ó sọ olórí kókó rẹ; nínú àròkọ GED, àríyànjiyàn wo ni ẹ̀rí rẹ̀ dára jù."], ["Ṣàgbéyẹ̀wò (analyze)", "wo àwọn apá rẹ̀ fínnífínní láti rí bí wọ́n ṣe ń ṣiṣẹ́."], ["Ìpínrọ̀ àárín (body paragraph)", "ìpínrọ̀ ní àárín tí ó fún ni ní ìdí kan pẹ̀lú ẹ̀rí."]],
          slides: [
            { title: "Ohun tí àròkọ náà ń béèrè", bullets: ["Ka àyọkà méjì tí kò fohùn ṣọ̀kan", "Pinnu èyí tí ẹ̀rí rẹ̀ yíni lọ́kàn padà jù", "Ṣàlàyé ìdí; kì í ṣe ẹ̀gbẹ́ tí o fẹ́ràn"] },
            { title: "Ṣe àtẹ", bullets: ["Àbá àyọkà kọ̀ọ̀kan", "Ẹ̀rí rẹ̀", "Ó lágbára tàbí kò lágbára?"] },
            { title: "Ṣètò ní nǹkan bí ìṣẹ́jú 10", bullets: ["Thesis: àríyànjiyàn wo ni ẹ̀rí rẹ̀ dára jù", "Ẹ̀rí 2 tàbí 3 àti ìdí tí wọ́n fi lágbára", "Àìlera kan nínú àyọkà kejì"] }
          ],
          sources: [GED_RLA],
          tryIt: "Ìdánrawò: Àyọkà 1 sọ pé ọ̀sẹ̀ iṣẹ́ ọlọ́jọ́ mẹ́rin dára, ó sì tọ́ka sí àkọsílẹ̀ ilé-iṣẹ́ kan: ọjọ́ àìsàn dín kù láti 6 sí 4 fún òṣìṣẹ́ kọ̀ọ̀kan ní ọdún kan. Àyọkà 2 sọ pé kò dára nítorí pé \"àwọn òṣìṣẹ́ máa di ọ̀lẹ\", ọ̀gá kan sì \"ní ìmọ̀lára\" pé iṣẹ́ máa dín kù. Kọ thesis kan. Ìdáhùn: \"Ẹ̀rí Àyọkà 1 dára jù nítorí pé ó lo àkọsílẹ̀ ilé-iṣẹ́ lórí ọjọ́ àìsàn, nígbà tí Àyọkà 2 gbára lé ìmọ̀lára láìsí àkọsílẹ̀ kankan.\"",
          youCanNow: "fi àtẹ wé àríyànjiyàn méjì, kí o sì kọ thesis àti ètò fún àròkọ rẹ.",
          quickCheck: [
            { objective: "O5", q: "Kí ni extended response GED ní kí o ṣe?", options: ["Kọ̀wé nípa ìtàn ayé rẹ", "Pinnu àríyànjiyàn tí ẹ̀rí rẹ̀ yíni lọ́kàn padà jù kí o sì ṣàlàyé ìdí", "Ṣe àkópọ̀ ìwé ìtàn kan", "Kọ ewì"], answer: 1, why: "Ged.com sọ pé o máa ṣàgbéyẹ̀wò àyọkà méjì kí o sì ṣàlàyé àríyànjiyàn tí ẹ̀rí rẹ̀ dára jù." },
            { objective: "O4", q: "O fara mọ́ Àyọkà B, ṣùgbọ́n Àyọkà A ní ẹ̀rí tó lágbára jù. Èwo ni thesis rẹ gbọ́dọ̀ yàn?", options: ["Àyọkà A, nítorí pé ẹ̀rí rẹ̀ dára jù", "Àyọkà B, nítorí pé o fara mọ́ ọn", "Kò sí ọ̀kankan", "Méjèèjì bákan náà"], answer: 0, why: "Àròkọ náà ń ṣe ìdájọ́ ẹ̀rí, kì í ṣe èrò rẹ lórí kókó náà." }
          ]
        },
        {
          title: "Kíkọ extended response (àròkọ) láàárín ìṣẹ́jú 45",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kọ extended response pẹ̀lú aago tí ó yan àríyànjiyàn tí ẹ̀rí rẹ̀ dára jù, tí ó sì ṣàlàyé ìdí pẹ̀lú ẹ̀rí.",
          text: [
            "Lo ìrísí tó rọrùn. Ìfáárà (gbólóhùn 2 sí 3): dárúkọ kókó ọ̀rọ̀ kí o sì sọ thesis rẹ. Ìpínrọ̀ àárín (méjì tàbí mẹ́ta): ọ̀kọ̀ọ̀kan fún ni ní ìdí kan, ó dà ọ̀rọ̀ kọ tàbí ṣàpèjúwe ẹ̀rí láti inú àyọkà, ó sì ṣàlàyé ìdí tí ó fi lágbára tàbí kò lágbára. Ìparí (gbólóhùn 2): tún thesis rẹ sọ ní ọ̀rọ̀ tuntun.",
            "Àwọn àyọkà ìdánrawò (a ṣe wọ́n fún ẹ̀kọ́ yìí). Àyọkà A, láti ọwọ́ olùtọ́jú ilé-ìkàwé ìlú: \"Ẹ jẹ́ kí ilé-ìkàwé àgbà wà ní ṣíṣí títí di agogo 9 alẹ́. Nínú ìdánrawò oṣù mẹ́ta, ẹ̀rọ tó ń ka àwọn tó wọlé ka nǹkan bí 340 ìbẹ̀wò lẹ́yìn agogo 6 ìrọ̀lẹ́ lọ́sẹ̀. Àkọsílẹ̀ kọ̀mpútà wa fi hàn pé 6 nínú 10 ìgbà tí wọ́n ń wá iṣẹ́ wáyé lẹ́yìn agogo 6 ìrọ̀lẹ́. Wákàtí àfikún náà ná wa ní owó tí kò tó 1% ìnáwó wa.\" Àyọkà B, láti ọwọ́ ọmọ ìgbìmọ̀ ìlú: \"Ẹ tì í ní agogo 6 ìrọ̀lẹ́. Mo kọjá níbẹ̀ ní ìrọ̀lẹ́ kan, ó sì dà bíi pé kò sí ẹnìkan níbẹ̀. Àwọn ènìyàn lè lo fóònù wọn lásán. Ìfowóṣòfò ni.\"",
            "Ètò àkókò: nǹkan bí ìṣẹ́jú 10 láti kà àti ṣètò, ìṣẹ́jú 30 láti kọ̀wé, ìṣẹ́jú 5 láti ṣàtúnyẹ̀wò. Lo ọ̀rọ̀ àsopọ̀ (first, in addition, however, therefore). Kọ̀wé ní gbólóhùn pípé àti ní ọ̀rọ̀ ara rẹ, kí o sì dà apá kúkúrú láti inú àwọn àyọkà kọ gẹ́gẹ́ bí ẹ̀rí.",
            "Ṣàtúnyẹ̀wò fún àwọn àṣìṣe Ẹ̀kọ́ 3: olùwà àti ọ̀rọ̀-ìṣe, run-on, ọ̀rọ̀ tí ìró wọn jọra, lẹ́tà ńlá àti apostrophe."
          ],
          steps: ["Ṣètò aago ìṣẹ́jú 45.", "Ka àyọkà méjèèjì kí o sì kún àtẹ lágbára-tàbí-kò-lágbára rẹ (nǹkan bí ìṣẹ́jú 10).", "Kọ ìfáárà pẹ̀lú thesis rẹ.", "Kọ ìpínrọ̀ àárín méjì tàbí mẹ́ta, ọ̀kọ̀ọ̀kan pẹ̀lú ẹ̀rí àti ìdí tí ó fi lágbára tàbí kò lágbára.", "Kọ ìparí kúkúrú.", "Ṣàtúnyẹ̀wò ní ìṣẹ́jú 5 tó kẹ́yìn."],
          words: [["Ìfáárà (introduction)", "ìpínrọ̀ àkọ́kọ́; ó dárúkọ kókó ọ̀rọ̀, ó sì sọ thesis rẹ."], ["Ìparí (conclusion)", "ìpínrọ̀ tó kẹ́yìn; ó tún olórí kókó rẹ sọ."], ["Dà ọ̀rọ̀ kọ (quote)", "kọ ọ̀rọ̀ gangan díẹ̀ láti inú àyọkà, sínú àmì àyọlò (\" \")."], ["Ṣàtúnyẹ̀wò (proofread)", "tún ohun tí o kọ kà láti wá àṣìṣe kí o sì tún wọn ṣe."]],
          slides: [
            { title: "Ìrísí àròkọ", bullets: ["Ìfáárà pẹ̀lú thesis rẹ", "Ìpínrọ̀ àárín méjì tàbí mẹ́ta pẹ̀lú ẹ̀rí", "Ìparí kúkúrú"] },
            { title: "Ìpínrọ̀ àárín kọ̀ọ̀kan", bullets: ["Ìdí kan", "Ẹ̀rí láti inú àyọkà", "Ìdí tí ó fi lágbára, tàbí tí ẹ̀gbẹ́ kejì kò fi lágbára"] },
            { title: "Ètò àkókò ìṣẹ́jú 45", bullets: ["Nǹkan bí ìṣẹ́jú 10: kà kí o sì ṣètò", "Nǹkan bí ìṣẹ́jú 30: kọ̀wé", "Nǹkan bí ìṣẹ́jú 5: ṣàtúnyẹ̀wò"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣètò aago ìṣẹ́jú 45 kí o sì kọ extended response rẹ lórí àwọn àyọkà ilé-ìkàwé lókè. Lẹ́yìn náà ṣàtúnyẹ̀wò rẹ̀ kí o sì fi rubric ṣe máàkì rẹ̀. Thesis àpẹẹrẹ: \"Ẹ̀rí Àyọkà A dára jù nítorí pé ó lo iye ìbẹ̀wò àti àkọsílẹ̀ kọ̀mpútà ilé-ìkàwé fúnra rẹ̀, nígbà tí Àyọkà B gbára lé ohun tí ẹnì kan rí ní ìrọ̀lẹ́ kan àti èrò lásán.\" Ẹ̀rí tó lágbára láti lò: nǹkan bí 340 ìbẹ̀wò lẹ́yìn agogo 6 ìrọ̀lẹ́ lọ́sẹ̀; 6 nínú 10 ìgbà wíwá iṣẹ́ lẹ́yìn agogo 6 ìrọ̀lẹ́; owó tí kò tó 1% ìnáwó. Àìlera B: ìbẹ̀wò kan ṣoṣo, kò sí nọ́mbà.",
          youCanNow: "kọ extended response pípé pẹ̀lú aago, tí ó ń ṣe ìdájọ́ àríyànjiyàn méjì nípa ẹ̀rí wọn.",
          quickCheck: [
            { objective: "O5", q: "Kí ló yẹ kí ó wà nínú ìfáárà rẹ?", options: ["Àkọsílẹ̀ òfin gírámà", "Gbogbo ẹ̀rí", "Kókó ọ̀rọ̀ àti thesis rẹ", "Orúkọ àti àdírẹ́sì rẹ"], answer: 2, why: "Ìfáárà ń dárúkọ kókó ọ̀rọ̀, ó sì ń sọ àríyànjiyàn tí ẹ̀rí rẹ̀ dára jù." },
            { objective: "O5", q: "Nínú àwọn àyọkà ilé-ìkàwé, èwo ni ẹ̀rí tó lágbára jù?", options: ["\"Ó dà bíi pé kò sí ẹnìkan níbẹ̀\" ní ìrọ̀lẹ́ kan", "\"Àwọn ènìyàn lè lo fóònù wọn lásán\"", "\"Ìfowóṣòfò ni\"", "Ẹ̀rọ tó ń ka àwọn tó wọlé ka nǹkan bí 340 ìbẹ̀wò lẹ́yìn agogo 6 ìrọ̀lẹ́ lọ́sẹ̀"], answer: 3, why: "Nọ́mbà pàtó láti inú àkọsílẹ̀ ni, a sì lè ṣàyẹ̀wò rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àríyànjiyàn àti extended response (àròkọ)",
        questions: [
          { objective: "O4", q: "Kí ni àbá (claim) nínú àríyànjiyàn?", options: ["Olórí kókó tí òǹkọ̀wé fẹ́ kí o gbà gbọ́", "Àkọlé", "Gbólóhùn tó gùn jù", "Àṣìṣe gírámà"], answer: 0, why: "Àbá ni ohun tí òǹkọ̀wé ń gbìyànjú láti yí ọ lọ́kàn padà sí." },
          { objective: "O4", q: "\"Ọ̀lẹ lásán ni àwọn tó fẹ́ kí ilé-ìkàwé ṣí pẹ́ jù.\" Kí ló burú nínú ẹ̀rí yìí?", options: ["Ó lo nọ́mbà púpọ̀ jù", "Ó dà ọ̀rọ̀ ògbóǹkangí kọ", "Ó ń bú ènìyàn dípò kí ó fún ni ní ẹ̀rí", "Kò sí nǹkan; ẹ̀rí tó lágbára ni"], answer: 2, why: "Bíbú àwọn tí kò fohùn ṣọ̀kan kì í ṣe ẹ̀rí nípa èrò náà." },
          { objective: "O5", q: "Nǹkan bí ìṣẹ́jú mélòó ni o yẹ kí o lò láti kà àti ṣètò nínú àròkọ ìṣẹ́jú 45?", options: ["Ìṣẹ́jú 0", "Nǹkan bí ìṣẹ́jú 40", "Nǹkan bí ìṣẹ́jú 2", "Nǹkan bí ìṣẹ́jú 10"], answer: 3, why: "Nǹkan bí ìṣẹ́jú 10 fún ètò máa fi nǹkan bí 30 sílẹ̀ fún kíkọ̀wé àti 5 fún àtúnyẹ̀wò." },
          { objective: "O5", q: "Kí ni ìpínrọ̀ àárín tó lágbára ní nínú?", options: ["Ìdí kan, ẹ̀rí láti inú àyọkà àti ìdí tí ó fi lágbára", "Èrò rẹ nìkan", "Kókó ọ̀rọ̀ tuntun", "Àkọsílẹ̀ ọ̀rọ̀ láìsí gbólóhùn"], answer: 0, why: "Ìpínrọ̀ àárín kọ̀ọ̀kan ń so ìdí kan mọ́ ẹ̀rí, ó sì ń ṣàlàyé rẹ̀." },
          { objective: "O1", q: "Níbo ni o ti yẹ kí o ṣàyẹ̀wò òfin, àkókò àti owó ìdánwò GED tó wà báyìí?", options: ["Ohun tí ọ̀rẹ́ rẹ rántí", "Ọ̀rọ̀ kan lórí ẹ̀rọ ìkànnì àjọlò", "Ged.com àti ọ́fíìsì ẹ̀kọ́ àgbà ní ìpínlẹ̀ rẹ", "Ìwé ẹ̀kọ́ àtijọ́"], answer: 2, why: "Òfin àti owó ń yí padà; ojú-òpó gidi àti ìpínlẹ̀ rẹ ló ní èyí tó wà báyìí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmúrasílẹ̀ fún Ìdánwò GED: Reasoning Through Language Arts",
    questions: [
      { objective: "O1", q: "Ìdánwò wo ni ẹ̀kọ́ yìí ń múra rẹ sílẹ̀ fún?", options: ["Ìdánwò GED Reasoning Through Language Arts", "Ìdánwò ìwé àṣẹ ìwakọ̀", "Ìdánwò títẹ̀wé lórí kọ̀mpútà", "Ìfọ̀rọ̀wánilẹ́nuwò fún ìwé ọmọ ìlú (citizenship)"], answer: 0, why: "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀ fún ìdánwò GED RLA; kò fún ọ ní ìwé-ẹ̀rí náà." },
      { objective: "O1", q: "Èwo ni ìdánwò míì tó dọ́gba pẹ̀lú ilé-ìwé girama tí àwọn ìpínlẹ̀ kan ń lò?", options: ["SAT", "HiSET", "CDL", "ESL"], answer: 1, why: "HiSET jẹ́ ìdánwò míì tó dọ́gba pẹ̀lú ilé-ìwé girama tí àwọn ìpínlẹ̀ kan ń lò." },
      { objective: "O1", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ tó dára jù fún ètò ìkẹ́kọ̀ọ́?", options: ["Forúkọ sílẹ̀ fún ìdánwò lọ́la", "Fo àwọn apá tó le", "Ṣe ìdánwò àpẹẹrẹ ọ̀fẹ́ láti mọ ibi tí o wà", "Kẹ́kọ̀ọ́ ní alẹ́ ọjọ́ tó ṣáájú nìkan"], answer: 2, why: "Ìdánwò àpẹẹrẹ ń fi àwọn ọgbọ́n tó nílò ìdánrawò jù hàn." },
      { objective: "O1", q: "Gẹ́gẹ́ bí ged.com ṣe sọ, báwo ni apá àròkọ ìdánwò RLA ṣe gùn tó?", options: ["Ìṣẹ́jú 10", "Wákàtí 2", "Kò sí àròkọ", "Ìṣẹ́jú 45"], answer: 3, why: "Ged.com sọ ìṣẹ́jú 45 fún extended response." },
      { objective: "O2", q: "Olórí èrò àyọkà kan ni:", options: ["Ọ̀rọ̀ àkọ́kọ́", "Ohun tí àyọkà náà ń sọ jù lọ", "Ọ̀rọ̀ tó le jù", "Gbólóhùn tó kẹ́yìn nìkan"], answer: 1, why: "Olórí èrò ni àyọkà náà tí a sọ ní gbólóhùn kan." },
      { objective: "O2", q: "Àyọkà kan sọ pé ilé-iṣẹ́ kan fi ìdánilẹ́kọ̀ọ́ ààbò kún un, ìpalára sì dín kù ní ìdajì. Àlàyé wo ló ti \"ìdánilẹ́kọ̀ọ́ mú kí ilé-iṣẹ́ náà láàbò sí i\" lẹ́yìn?", options: ["Ìpalára dín kù ní ìdajì", "Ilé-iṣẹ́ náà tóbi", "Ìdánilẹ́kọ̀ọ́ wáyé ní ọjọ́ Ajé", "Ilé-iṣẹ́ náà ń ṣe àga"], answer: 0, why: "Ìdínkù ìpalára ni ẹ̀rí pé ààbò sunwọ̀n sí i." },
      { objective: "O2", q: "Èwo ni ìfòyemọ̀ tí ọ̀rọ̀ yìí tì lẹ́yìn: \"Ìlà àwọn ènìyàn ní ibi ìpínkiri oúnjẹ (food bank) di ìlọ́po méjì lẹ́yìn tí ilé-iṣẹ́ ńlá náà tì\"?", options: ["Ibi ìpínkiri oúnjẹ náà máa tì", "Iye owó oúnjẹ wálẹ̀", "Ọ̀pọ̀ àwọn tó pàdánù iṣẹ́ nílò ìrànlọ́wọ́ oúnjẹ", "Ilé-iṣẹ́ náà tún ṣí"], answer: 2, why: "Àkókò títì ilé-iṣẹ́ àti ìlà tó gùn sí i ti ìpinnu yìí lẹ́yìn." },
      { objective: "O3", q: "Gbólóhùn wo ló tọ̀nà?", options: ["The list of tasks are on the board.", "The list of tasks is on the board.", "The list of tasks were on the board.", "The list of tasks be on the board."], answer: 1, why: "Olùwà ni list (àkọsílẹ̀ kan), nítorí náà ọ̀rọ̀-ìṣe ni is." },
      { objective: "O3", q: "Gbólóhùn wo ló lo lẹ́tà ńlá lọ́nà tó tọ́?", options: ["I start work on monday in ohio.", "I Start Work on Monday in Ohio.", "i start work on Monday in ohio.", "I start work on Monday in Ohio."], answer: 3, why: "Ọjọ́ àti orúkọ ibi ń gba lẹ́tà ńlá; àwọn ọ̀rọ̀ míì kò gbà á." },
      { objective: "O3", q: "Èwo ni ẹ̀ka gbólóhùn (fragment)?", options: ["I got the job.", "Because the shift ended late.", "She called the manager.", "We passed."], answer: 1, why: "Kò lè dá dúró fúnra rẹ̀; ó nílò olórí èrò, bí \"I was tired because the shift ended late.\"" },
      { objective: "O3", q: "Yan ọ̀rọ̀ tó tọ̀nà: \"___ a good day to apply.\"", options: ["Its", "Its'", "It's", "It"], answer: 2, why: "It's túmọ̀ sí it is: it is a good day to apply." },
      { objective: "O4", q: "Èwo ni ẹ̀rí tó lágbára?", options: ["Ìròyìn ìpínlẹ̀ kan tó fi hàn pé iṣẹ́ nọ́ọ̀sì tuntun 2,000 wà ní ọdún tó kọjá", "\"Mo kàn mọ̀ ọ́n ni\"", "Èrò gbajúmọ̀ òṣèré fíìmù kan nípa iṣẹ́ nọ́ọ̀sì", "\"Gbogbo ènìyàn ló ń sọ bẹ́ẹ̀\""], answer: 0, why: "A lè ṣàyẹ̀wò nọ́mbà pàtó láti inú ìròyìn ìjọba." },
      { objective: "O4", q: "\"Yálà a gé gbogbo ọ̀nà bọ́ọ̀sì kúrò, tàbí ìlú máa di òtòṣì.\" Kí ni ẹ̀tàn ibẹ̀?", options: ["Ó lo ìwádìí", "Ó dà ọ̀rọ̀ ògbóǹkangí kọ", "Òtítọ́ ni", "Ó fún ni ní ọ̀nà méjì péré nígbà tí ọ̀nà púpọ̀ wà"], answer: 3, why: "Ọ̀nà míì wà, bí gígé díẹ̀ lára àwọn ọ̀nà bọ́ọ̀sì tàbí wíwá owó tuntun." },
      { objective: "O4", q: "Kí ló dé tí ìtàn ẹnì kan ṣoṣo fi jẹ́ ẹ̀rí tí kò lágbára fún àbá ńlá?", options: ["Ìtàn máa ń jẹ́ irọ́ nígbà gbogbo", "Ohun tó ṣẹlẹ̀ sí ẹnì kan lè má jẹ́ òótọ́ fún ọ̀pọ̀ ènìyàn", "Ìtàn máa ń gùn jù", "Ó lòdì sí òfin"], answer: 1, why: "Àpẹẹrẹ kan kò fi ohun tó jẹ́ òótọ́ ní gbogbogbò hàn." },
      { objective: "O4", q: "Láti ṣe ìdájọ́ àríyànjiyàn, o kọ́kọ́ máa wá:", options: ["Ọ̀rọ̀ tó gùn jù", "Ọjọ́ orí òǹkọ̀wé", "Àbá àti ẹ̀rí rẹ̀", "Àṣìṣe gírámà"], answer: 2, why: "O ń ṣe ìdájọ́ àríyànjiyàn nípa bí ẹ̀rí rẹ̀ ṣe ti àbá rẹ̀ lẹ́yìn tó." },
      { objective: "O5", q: "Nínú àròkọ GED, thesis rẹ gbọ́dọ̀ sọ:", options: ["Àríyànjiyàn tí ẹ̀rí rẹ̀ dára jù", "Àwọ̀ tí o fẹ́ràn jù", "Òǹkọ̀wé tí o fẹ́ràn", "Pé méjèèjì pé pérépéré"], answer: 0, why: "Iṣẹ́ náà ni láti pinnu àríyànjiyàn tí ẹ̀rí rẹ̀ yíni lọ́kàn padà jù." },
      { objective: "O5", q: "Kí ni ọ̀nà tó dára láti lo ẹ̀rí nínú àròkọ rẹ?", options: ["Da gbogbo àyọkà kọ", "Ṣe nọ́mbà tirẹ̀", "Fi ẹ̀rí sílẹ̀", "Da apá kúkúrú kọ kí o sì ṣàlàyé ìdí tí ó fi lágbára"], answer: 3, why: "Àyọlò kúkúrú pẹ̀lú àlàyé rẹ fi hàn pé o ṣàgbéyẹ̀wò ẹ̀rí náà." },
      { objective: "O5", q: "Kí lo máa ṣe ní ìṣẹ́jú díẹ̀ tó kẹ́yìn àròkọ?", options: ["Bẹ̀rẹ̀ àròkọ tuntun", "Ṣàtúnyẹ̀wò gírámà àti àmì ìkọ̀wé", "Pa thesis rẹ rẹ́", "Kúrò nínú yàrá"], answer: 1, why: "Àtúnyẹ̀wò ń mú àwọn àṣìṣe tó ń dín máàkì kù." },
      { objective: "O5", q: "Ìparí wo ló dára jù?", options: ["\"Ó parí.\"", "\"Mo fẹ́ràn ilé-ìkàwé.\"", "\"Nítorí pé Àyọkà A lo àkọsílẹ̀ àti iye, tí Àyọkà B sì lo èrò nìkan, ẹ̀rí Àyọkà A dára jù.\"", "\"Àwọn kan gbà, àwọn kan kò gbà.\""], answer: 2, why: "Ó tún thesis àti olórí ìdí sọ ní ọ̀rọ̀ tuntun." },
      { objective: "O2", q: "Nígbà tí ìdáhùn nípa àyọkà kan kò bá dá ọ lójú, o yẹ kí o:", options: ["Padà wá gbólóhùn tó fi ìdáhùn kan hàn", "Yan èyí tó kúrú jù", "Má kàwé, kí o sì dá a lásán", "Yan ìdáhùn tí ó ní ọ̀rọ̀ tó le jù"], answer: 0, why: "Ọ̀rọ̀ inú àyọkà ló ń ti ìdáhùn tó tọ̀nà lẹ́yìn, nítorí náà padà kí o sì wá ẹ̀rí." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [2, 3, 4, 6, 7, 10, 11, 13, 15, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", dánrawò apá yẹn, kí o sì kọ àròkọ tuntun lórí àyọkà méjì tuntun.",
    criteria: [
      { name: "Thesis tó yé", objective: "O5", notYet: "Kò sí thesis, tàbí ó sọ ẹ̀gbẹ́ tí òǹkọ̀wé fara mọ́ dípò èyí tí ẹ̀rí rẹ̀ dára jù.", meets: "Ìfáárà ní gbólóhùn kan tí ó sọ àríyànjiyàn tí ẹ̀rí rẹ̀ dára jù.", exceeds: "Thesis náà tún dárúkọ olórí ìdí, bí àkọsílẹ̀ ní ìfiwéra pẹ̀lú èrò." },
      { name: "Ẹ̀rí láti inú àwọn àyọkà", objective: "O4", notYet: "Kò sí ẹ̀rí láti inú àwọn àyọkà, tàbí ẹ̀rí jẹ́ àhusọ.", meets: "Ó kéré tán ẹ̀rí méjì láti inú àwọn àyọkà, tí a ṣàlàyé ọ̀kọ̀ọ̀kan pé ó lágbára tàbí kò lágbára.", exceeds: "Ó tún tọ́ka sí ẹ̀tàn tàbí àìlera kan nínú àyọkà kejì, ó sì ṣàlàyé rẹ̀." },
      { name: "Ètò àròkọ", objective: "O5", notYet: "Ọ̀rọ̀ kan ṣoṣo tí kò ní ìpínrọ̀, tàbí èrò ń fò síhìn-ín sọ́hùn-ún.", meets: "Ìfáárà, ó kéré tán ìpínrọ̀ àárín méjì àti ìparí, pẹ̀lú ọ̀rọ̀ àsopọ̀.", exceeds: "Ìpínrọ̀ àárín kọ̀ọ̀kan bẹ̀rẹ̀ pẹ̀lú gbólóhùn kókó tó yé tí ó so mọ́ thesis." },
      { name: "Gírámà àti àmì ìkọ̀wé", objective: "O3", notYet: "Àṣìṣe púpọ̀ mú kí ó ṣòro láti kà.", meets: "Àṣìṣe kékeré díẹ̀, ṣùgbọ́n ìtumọ̀ máa ń yé nígbà gbogbo.", exceeds: "Kò fẹ́rẹ̀ẹ́ sí àṣìṣe; ọ̀rọ̀ tí ìró wọn jọra, lẹ́tà ńlá àti apostrophe tọ̀nà." },
      { name: "Kíkàwé dáadáa", objective: "O2", notYet: "Ó ṣì olórí èrò àyọkà kan.", meets: "Ó ṣàpèjúwe olórí èrò àyọkà kọ̀ọ̀kan lọ́nà tó tọ́.", exceeds: "Ó lo àyọlò kúkúrú gangan tó bá ohun tí àwọn àyọkà sọ mu." },
      { name: "Ètò àti àkókò", objective: "O1", notYet: "Kò parí láàárín ìṣẹ́jú 45, kò sì ní ètò ìkẹ́kọ̀ọ́.", meets: "Ó parí láàárín ìṣẹ́jú 45, ètò ìkẹ́kọ̀ọ́ sì ní ọjọ́ títí di ọ̀sẹ̀ ìdánwò.", exceeds: "Ó tún forúkọ sílẹ̀ fún ìdánwò ìdánrawò GED Ready tàbí ọjọ́ ìdánwò gidi lórí ged.com." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe GED Ready tàbí ìdánwò àpẹẹrẹ ọ̀fẹ́ ged.com láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ fún ìdánwò èdè GED tàbí tí wọ́n yege rẹ̀ láàárín ọjọ́ 90 (gẹ́gẹ́ bí wọ́n ṣe sọ)",
      "Àwọn ètò alábàáṣiṣẹ́pọ̀ ròyìn pé àwọn akẹ́kọ̀ọ́ púpọ̀ sí i ń tẹ̀síwájú sí ìdánilẹ́kọ̀ọ́ iṣẹ́ tàbí kíláàsì yunifásítì"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù, tablet tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì, tàbí àwọn ẹ̀kọ́ tí a tẹ̀ jáde sórí ìwé",
      "Ìwé àti gègé fún àtẹ, ìdáhùn ìdánrawò àti àròkọ",
      "Aago (aago fóònù ṣiṣẹ́) fún àròkọ ìṣẹ́jú 45",
      "Ìdánwò àpẹẹrẹ ọ̀fẹ́ ged.com; GED Ready tí akẹ́kọ̀ọ́ bá yàn láti rà á",
      "Nǹkan bí ìṣẹ́jú 90 lápapọ̀ fún ẹ̀kọ́ àti ìdánwò ìmọ̀, pẹ̀lú ìṣẹ́jú 45 fún àròkọ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Bẹ̀rẹ̀ pẹ̀lú ìdánwò ṣáájú àti ìdánwò àpẹẹrẹ RLA ọ̀fẹ́ ged.com, lẹ́yìn náà pín àwọn akẹ́kọ̀ọ́ sí ẹgbẹ́ gẹ́gẹ́ bí ọgbọ́n tí wọ́n nílò jù.",
      "Ṣe àtẹ lágbára-tàbí-kò-lágbára kan sókè gẹ́gẹ́ bí àpẹẹrẹ kí àwọn akẹ́kọ̀ọ́ tó gbìyànjú tiwọn.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ ka àròkọ wọn sókè ní méjì-méjì, kí wọ́n sì fún ara wọn ní èsì lórí ìlà rubric kan lẹ́ẹ̀kan.",
      "Ṣàyẹ̀wò ìdánwò tí ìpínlẹ̀ rẹ ń lò (GED tàbí HiSET), kí o sì sọ fún wọn nípa ibi ìdánwò ládùúgbò àti ìrànlọ́wọ́ owó èyíkéyìí.",
      "Jẹ́ kí ìdánrawò wà láìní ewu; ọ̀pọ̀ àgbàlagbà ṣì ń bẹ̀rù ìdánwò láti ìgbà ilé-ìwé."
    ]
  }
};
