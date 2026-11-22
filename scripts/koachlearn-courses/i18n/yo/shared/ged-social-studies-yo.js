"use strict";

// Koach Learn course (Yoruba translation of shared/ged-social-studies.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const GED_SUBJECTS = { name: "GED Testing Service: àwọn ẹ̀ka ìdánwò (àkókò, irú ìbéèrè, ẹ̀rọ ìṣirò)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SS = { name: "GED Testing Service: ìdánwò Social Studies", url: "https://ged.com/about_test/test_subjects/social_studies/" };
const GED_SCORES = { name: "GED Testing Service: máàkì", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: ìdánwò àpẹẹrẹ ọ̀fẹ́ (Gẹ̀ẹ́sì àti Sípáníìṣì)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, ìdánwò ìdálẹ́kọ̀ọ́ ti GED fúnra rẹ̀", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, ìdánwò mìíràn tó dọ́gba pẹ̀lú ilé-ẹ̀kọ́ gíga (ojú-òpó rẹ̀ gidi)", url: "https://hiset.org/" };
const USA_BRANCHES = { name: "USAGov: Àwọn ẹ̀ka ìjọba U.S.", url: "https://www.usa.gov/branches-of-government" };
const ARCHIVES_CONST = { name: "National Archives: Òfin Ìpìlẹ̀ (Constitution) ti United States (ọ̀rọ̀ rẹ̀ ní kíkún)", url: "https://www.archives.gov/founding-docs/constitution-transcript" };
const ARCHIVES_BOR = { name: "National Archives: Bill of Rights (ọ̀rọ̀ rẹ̀ ní kíkún)", url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript" };

module.exports = {
  id: "ged-social-studies-yo",
  lang: "yo",
  translationOf: "ged-social-studies",
  category: "Workforce Development",
  name: "Ìmúrasílẹ̀ fún Ìdánwò GED: Social Studies (Ẹ̀kọ́ Àwùjọ)",
  skills: "Kíka orísun àkọ́kọ́ àti orísun kejì, Ìyàtọ̀ láàárín òtítọ́ àti èrò, Ṣíṣàlàyé bí ìjọba US ṣe ń ṣiṣẹ́, Wíwá ìdí àti àbájáde, Kíka máàpù, àtẹ àti gíráàfù, Ṣíṣe ètò ìkẹ́kọ̀ọ́",
  outcome: "ka àyọkà ẹ̀kọ́ àwùjọ, ìwé ìtàn, máàpù tàbí gíráàfù, kí o sì dáhùn ìbéèrè bíi ti GED nípa rẹ̀: kókó ọ̀rọ̀, ojú ìwòye, òtítọ́ tàbí èrò, ìdí àti àbájáde, bí ìjọba US ṣe ń ṣiṣẹ́, àti ohun tí dátà fi hàn.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí wọ́n ń múra sílẹ̀ fún ìdánwò GED Social Studies (ẹ̀kọ́ àwùjọ): àwọn tí ń wá iṣẹ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn ológun tẹ́lẹ̀, àwọn ọ̀dọ́, àwọn tí wọ́n ṣí wá láti orílẹ̀-èdè mìíràn, àti ẹnikẹ́ni tí ó ń padà sí ẹ̀kọ́. Ged.com sọ pé kì í ṣe ìdánwò àkọ́sórí. Ó ń dán bí o ṣe ń kàwé, bí o ṣe ń ronú, àti bí o ṣe ń lo gíráàfù nípa ìjọba, ìtàn àti owó wò.",
    "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀ fún ìdánwò náà. Kò fún ọ ní ìwé-ẹ̀rí GED. GED Testing Service ló ń ṣe ìdánwò náà, ìpínlẹ̀ rẹ ló sì ń ṣe òfin nípa bí a ṣe ń kọ ọ́. Àwọn ìpínlẹ̀ kan ń lo ìdánwò mìíràn tí à ń pè ní HiSET. Ṣàyẹ̀wò ged.com àti ọ́fíìsì ẹ̀kọ́ àgbàlagbà ní ìpínlẹ̀ rẹ fún òfin, owó àti ibi ìdánwò lọ́wọ́lọ́wọ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan ń kọ́ ọ ní ọgbọ́n kan pẹ̀lú àpẹẹrẹ tí a ti ṣe, iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" pẹ̀lú àlàyé ìdáhùn, àti ìdánwò kúkúrú ìbéèrè méjì. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí.",
    "Iṣẹ́ ìkẹyìn ni ìwé ìtúpalẹ̀ orísun tí o máa kọ lórí ìwé ìpìlẹ̀ orílẹ̀-èdè gidi láti National Archives, pẹ̀lú ètò ìkẹ́kọ̀ọ́ GED tìrẹ tí ó ní ọjọ́."
  ],
  finalTask: "Kọ ìwé ìtúpalẹ̀ orísun ojú-ìwé kan lórí Preamble (ọ̀rọ̀ ìbẹ̀rẹ̀) ti Òfin Ìpìlẹ̀ US (tàbí ìwé ìpìlẹ̀ mìíràn lórí archives.gov): ta ló kọ ọ́ àti ìgbà wo, ṣé orísun àkọ́kọ́ ni tàbí orísun kejì, kókó ọ̀rọ̀ rẹ̀ ní gbólóhùn kan, ojú ìwòye rẹ̀, òtítọ́ kan àti èrò tàbí àfojúsùn kan, ìdí kan àti àbájáde kan tí ó so mọ́ ọn, àti ẹ̀ka ìjọba wo ló kàn án àti ìdí rẹ̀. Fi ètò ìkẹ́kọ̀ọ́ GED rẹ tí ó ní ọjọ́ sí ìsàlẹ̀ rẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí wọ́n ń múra sílẹ̀ fún ìdánwò GED Social Studies: àwọn tí ń wá iṣẹ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn ológun tẹ́lẹ̀, àwọn ọ̀dọ́ tí wọ́n fi ilé-ẹ̀kọ́ sílẹ̀, àwọn tí wọ́n ṣí wá láti orílẹ̀-èdè mìíràn (àwọn kan ń múra fún ìdánwò ọmọ orílẹ̀-èdè pẹ̀lú) àti àwọn àgbàlagbà tí ń padà sí ẹ̀kọ́ lẹ́yìn ọ̀pọ̀ ọdún.",
    startingPoint: "Wọ́n lè ka ọ̀rọ̀ ojoojúmọ́ àti àtẹ tó rọrùn. Ọ̀pọ̀ kò rántí púpọ̀ nípa ìtàn US tàbí ẹ̀kọ́ ìjọba (civics) láti ilé-ẹ̀kọ́, wọ́n sì rò pé ìdánwò náà jẹ́ kíkọ́ ọjọ́ sórí. Àwọn kan ṣì ń kọ́ èdè Gẹ̀ẹ́sì.",
    gap: "Ìdánwò náà ń béèrè kí akẹ́kọ̀ọ́ ka orísun, rí ojú ìwòye àti ẹ̀rí, ṣàlàyé bí ìjọba ṣe ń ṣiṣẹ́, kí wọ́n sì ka gíráàfù àti máàpù. Àwọn ọgbọ́n yìí tún ń ràn ènìyàn lọ́wọ́ láti tẹ̀lé ìròyìn, dìbò níbi tí wọ́n bá ní ẹ̀tọ́, mọ ẹ̀tọ́ wọn, kí wọ́n sì ṣe ìpinnu nípa owó.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ń ṣàlàyé àwọn ìwé àtijọ́ ní ìlà-ìlà",
      "Ẹ̀rọ: fóònù, kọ̀mpútà ilé-ìkàwé, tàbí ìwé àti kálámù",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá àkókò iṣẹ́, ìpàdé àti ẹbí mu",
      "A ń kọ́ ọ̀rọ̀ òṣèlú láìgbè sí ẹ̀gbẹ́ kankan: bí nǹkan ṣe ń ṣiṣẹ́ àti bí a ṣe ń díwọ̀n ẹ̀rí, kì í ṣe ẹ̀gbẹ́ tí a ó gbè",
      "Òfin ìdánwò, owó àti ìdánwò tí ìpínlẹ̀ kan ń lò (GED tàbí HiSET) ń yí padà; akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ged.com àti ìpínlẹ̀ wọn"
    ],
    prerequisites: "Kò sí. Ẹ̀kọ́ GED èdè (language arts) ń ràn ọ́ lọ́wọ́ láti ka fún kókó ọ̀rọ̀ àti láti díwọ̀n ẹ̀rí."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Nípa lílo ojú-òpó wẹ́ẹ̀bù GED gidi", action: "to àwọn apá, irú ìbéèrè, àkókò àti irinṣẹ́ ìdánwò GED Social Studies, kí o sì kọ ètò ìkẹ́kọ̀ọ́ tí ó ní ọjọ́", standard: "pẹ̀lú orúkọ àwọn ẹ̀ka ọgbọ́n mẹ́tẹ̀ẹ̀ta àti ó kéré tán ọjọ́ ìkẹ́kọ̀ọ́ kan lọ́sẹ̀ títí di ìdánwò" },
    { id: "O2", condition: "Tí a bá fún ọ ní orísun àkọ́kọ́ tàbí orísun kejì", action: "dá kókó ọ̀rọ̀, ojú ìwòye ẹni tó kọ ọ́, àti àwọn gbólóhùn tó jẹ́ òtítọ́ àti èyí tó jẹ́ èrò mọ̀", standard: "kí o sì tọ́ka sí àwọn ọ̀rọ̀ tí ó fi ìdáhùn kọ̀ọ̀kan hàn" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìtàn kúkúrú kan nípa ìjọba", action: "ṣàlàyé ẹ̀ka ìjọba tí ó ń ṣiṣẹ́ àti bí àyẹ̀wò àti ìdọ́gba agbára tàbí ẹ̀tọ́ inú Òfin Ìpìlẹ̀ ṣe kàn án", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O4", condition: "Tí a bá fún ọ ní ìṣẹ̀lẹ̀ ìtàn tàbí àríyànjiyàn kan", action: "dá ìdí kan àti àbájáde kan mọ̀, àti ẹ̀rí tí ó ṣe àtìlẹ́yìn fún ìpinnu kan", standard: "pẹ̀lú orúkọ ẹ̀rí náà láti inú orísun" },
    { id: "O5", condition: "Tí a bá fún ọ ní máàpù, àtẹ tàbí gíráàfù nípa ìtàn, ọrọ̀ ajé tàbí ilẹ̀ ayé", action: "ka iye, ṣàpèjúwe bí nǹkan ṣe ń lọ, kí o sì yan ìparí èrò tí dátà ṣe àtìlẹ́yìn fún", standard: "láìfi òtítọ́ tí a kò fi hàn kún un" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíka orísun àti bí ìjọba ṣe ń ṣiṣẹ́",
      lessons: [
        {
          title: "Bí ìdánwò GED Social Studies ṣe ń ṣiṣẹ́",
          objectives: ["O1"],
          minutes: 5,
          goal: "To àwọn apá àti irinṣẹ́ ìdánwò GED Social Studies, kí o sì kọ ètò ìkẹ́kọ̀ọ́ tí ó ní ọjọ́.",
          text: [
            "GED ní ìdánwò mẹ́rin: Math (ìṣirò), Reasoning Through Language Arts (èdè), Science (sáyẹ́ǹsì) àti Social Studies (ẹ̀kọ́ àwùjọ). O lè kọ wọ́n lọ́kọ̀ọ̀kan. GED Testing Service ló ń ṣe ìdánwò náà. Àwọn ìpínlẹ̀ kan ń lo ìdánwò mìíràn tó dọ́gba pẹ̀lú ilé-ẹ̀kọ́ gíga, HiSET, nítorí náà ṣàyẹ̀wò èyí tí ìpínlẹ̀ rẹ ń lò.",
            "Lórí ged.com, ìdánwò Social Studies jẹ́ ìṣẹ́jú 70 láìsí ìsinmi. Ó ní ẹ̀ka ọgbọ́n mẹ́ta: kíkà láti lóye ẹ̀kọ́ àwùjọ, títúpalẹ̀ ìṣẹ̀lẹ̀ ìtàn àti àríyànjiyàn, àti lílo nọ́mbà àti gíráàfù nínú ẹ̀kọ́ àwùjọ. Àwọn ìbéèrè jẹ́ yíyan ìdáhùn (multiple choice), kíkún àlàfo, fífà-àti-jù (drag and drop), yíyan agbègbè kan àti àkójọ ìyàn (drop-down).",
            "O máa rí ẹ̀rọ ìṣirò lórí ojú-iboju àti ìwé ìtọ́ka ẹ̀rọ ìṣirò, ged.com sì sọ pé o lè mú ẹ̀rọ ìṣirò TI-30XS tìrẹ wá sí ibi ìdánwò. Ged.com sọ pé kì í ṣe ìdánwò àkọ́sórí: o máa lo ìsọfúnni tí a fún ọ láti dé ìparí èrò.",
            "Ged.com sọ pé máàkì ìyege jẹ́ 145 fún ẹ̀ka kọ̀ọ̀kan. Àkókò àti òfin lè yí padà, nítorí náà ṣàyẹ̀wò ged.com kí o tó forúkọ sílẹ̀. Ged.com ní ìdánwò àpẹẹrẹ ọ̀fẹ́ àti ìdánwò ìdálẹ́kọ̀ọ́ tirẹ̀, GED Ready."
          ],
          steps: ["Lọ sí ged.com kí o sì ka ojú-ìwé ìdánwò Social Studies.", "Kọ àkókò, àwọn ẹ̀ka ọgbọ́n mẹ́ta àti àwọn irinṣẹ́ tí o máa rí sílẹ̀.", "Ṣe ìdánwò àpẹẹrẹ Social Studies ọ̀fẹ́ láti mọ ibi tí o wà.", "Yan ọ̀sẹ̀ tí o fẹ́ ṣe ìdánwò.", "Kọ ó kéré tán ọjọ́ ìkẹ́kọ̀ọ́ kan lọ́sẹ̀, pẹ̀lú ọgbọ́n tí o máa dá lẹ́kọ̀ọ́."],
          words: [["GED", "ìdánwò tó dọ́gba pẹ̀lú ilé-ẹ̀kọ́ gíga; yíyege ní ẹ̀ka mẹ́rẹ̀ẹ̀rin ń fún ọ ní ìwé-ẹ̀rí tí ọ̀pọ̀ agbanisíṣẹ́ àti kọ́lẹ́ẹ̀jì gbà bíi ìwé-ẹ̀rí ilé-ẹ̀kọ́ gíga (diploma)."], ["HiSET", "ìdánwò mìíràn tó dọ́gba pẹ̀lú ilé-ẹ̀kọ́ gíga tí àwọn ìpínlẹ̀ kan ń lò."], ["Civics", "ẹ̀kọ́ nípa ìjọba àti ẹ̀tọ́ àti ojúṣe àwọn ọmọ orílẹ̀-èdè."], ["Ọrọ̀ ajé (economics)", "ẹ̀kọ́ nípa bí ènìyàn ṣe ń ṣe, rà, tà àti lo ọjà àti owó."]],
          slides: [
            { title: "Ìdánwò Social Studies (ṣàyẹ̀wò ged.com)", bullets: ["Ìṣẹ́jú 70, kò sí ìsinmi", "Yíyan ìdáhùn àti irú ìbéèrè mìíràn", "Máàkì ìyege tí wọ́n kọ: 145"] },
            { title: "Ẹ̀ka ọgbọ́n mẹ́ta", bullets: ["Kíkà láti lóye ẹ̀kọ́ àwùjọ", "Títúpalẹ̀ ìṣẹ̀lẹ̀ ìtàn àti àríyànjiyàn", "Lílo nọ́mbà àti gíráàfù"] },
            { title: "Kì í ṣe ìdánwò àkọ́sórí", bullets: ["Lo ìsọfúnni tí a fún ọ", "Dé ìparí èrò láti inú rẹ̀", "Ẹ̀rọ ìṣirò lórí ojú-iboju àti ìwé ìtọ́ka"] },
            { title: "Ṣe ètò", bullets: ["Kọ́kọ́ ṣe ìdánwò àpẹẹrẹ ọ̀fẹ́", "Yan ọ̀sẹ̀ tí o fẹ́ ṣe ìdánwò", "Kẹ́kọ̀ọ́ díẹ̀díẹ̀, ní ọ̀pọ̀ ọjọ́ nínú ọ̀sẹ̀"] }
          ],
          sources: [GED_SUBJECTS, GED_SS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Ṣí ged.com kí o sì ṣe ìdánwò àpẹẹrẹ Social Studies ọ̀fẹ́ (tàbí ka ojú-ìwé Social Studies tí o kò bá lè ṣe é báyìí). Kọ ètò ìkẹ́kọ̀ọ́ rẹ: ọ̀sẹ̀ tí o fẹ́ ṣe ìdánwò àti ọjọ́ kan lọ́sẹ̀ pẹ̀lú ọgbọ́n tí o máa dá lẹ́kọ̀ọ́: kíka orísun, ìjọba, ìtàn, tàbí gíráàfù. Pa á mọ́ fún iṣẹ́ ìkẹyìn.",
          youCanNow: "dárúkọ àwọn apá àti irinṣẹ́ ìdánwò GED Social Studies, kí o sì tẹ̀lé ètò ìkẹ́kọ̀ọ́ tí ó ní ọjọ́.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ged.com sọ nípa ìdánwò Social Studies?", options: ["Ó jẹ́ kíkọ́ ọjọ́ sórí jù lọ", "Kì í ṣe ìdánwò àkọ́sórí", "Kò ní gíráàfù kankan", "Ó jẹ́ nípa àwọn orílẹ̀-èdè mìíràn nìkan"], answer: 1, why: "Ged.com sọ pé kì í ṣe ìdánwò àkọ́sórí; o ń ronú pẹ̀lú ìsọfúnni tí a fún ọ." },
            { objective: "O1", q: "Èwo ni ọ̀kan nínú ẹ̀ka ọgbọ́n mẹ́ta ìdánwò náà?", options: ["Kíkọ orúkọ olú-ìlú ìpínlẹ̀", "Yíya àsìá", "Lílo nọ́mbà àti gíráàfù nínú ẹ̀kọ́ àwùjọ", "Bí o ṣe ń tẹ̀wé kíákíá"], answer: 2, why: "Ged.com to kíkà láti lóye, ìṣẹ̀lẹ̀ ìtàn àti àríyànjiyàn, àti nọ́mbà àti gíráàfù." }
          ]
        },
        {
          title: "Orísun, ojú ìwòye, òtítọ́ àti èrò",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dá kókó ọ̀rọ̀, ojú ìwòye, àwọn òtítọ́ àti àwọn èrò inú orísun kan mọ̀.",
          text: [
            "Orísun àkọ́kọ́ (primary source) jẹ́ ohun tí ẹni tó wà níbẹ̀ ní àkókò náà ṣe: lẹ́tà, ọ̀rọ̀ àsọyé, òfin, fọ́tò, ìwé ìrántí ojoojúmọ́. Orísun kejì (secondary source) jẹ́ ohun tí ẹnìkan tó ń kẹ́kọ̀ọ́ nípa ìṣẹ̀lẹ̀ náà ṣe lẹ́yìn náà, bí ìwé ẹ̀kọ́ tàbí ìtúpalẹ̀ ìròyìn. Méjèèjì wúlò; orísun àkọ́kọ́ ń fi bí àwọn ènìyàn ṣe rí nǹkan nígbà náà hàn.",
            "Ojú ìwòye ni bí ẹni tó kọ ọ́ ṣe rí ọ̀rọ̀ náà, nítorí ẹni tí ó jẹ́ àti ohun tí ó fẹ́. Béèrè pé: ta ló kọ èyí, ìgbà wo, àti kí nìdí? Ẹni tó ni ilé-iṣẹ́ àti òṣìṣẹ́ ilé-iṣẹ́ ní ọdún 1900 lè ṣàpèjúwe ìdasẹ́sílẹ̀ kan náà lọ́nà tó yàtọ̀ gan-an.",
            "Òtítọ́ (fact) jẹ́ ohun tí a lè ṣàyẹ̀wò kí a sì fi hàn pé ó jẹ́ òótọ́ tàbí irọ́: \"A fọwọ́ sí Àtúnṣe 19th ní ọdún 1920.\" Èrò (opinion) jẹ́ ìgbàgbọ́ tàbí ìmọ̀lára: \"Òun ni ìyípadà tó ṣe pàtàkì jù lọ nínú ìtàn wa.\" Àwọn ọ̀rọ̀ bí èyí tó dára jù, èyí tó burú jù, yẹ kí, ṣe pàtàkì àti mo gbàgbọ́ sábà máa ń fi èrò hàn.",
            "Àpẹẹrẹ. Ìpolówó ìwé ìròyìn ọdún 1910: \"Àwọn ẹ̀rọ tuntun wa ń ṣe ẹ̀wù 500 lójoojúmọ́. Gbogbo ìdílé ìgbàlódé ló yẹ kí ó ra ẹ̀wù wa!\" Òtítọ́: ẹ̀wù 500 lójoojúmọ́ (a lè ṣàyẹ̀wò rẹ̀). Èrò: gbogbo ìdílé ló yẹ kí ó rà á. Ojú ìwòye: ilé-iṣẹ́ tí ń ta ọjà rẹ̀."
          ],
          steps: ["Béèrè ta ló ṣe orísun náà, ìgbà wo àti kí nìdí.", "Pinnu: àkọ́kọ́ (a ṣe é ní àkókò náà) tàbí kejì (a ṣe é lẹ́yìn náà).", "Sọ kókó ọ̀rọ̀ ní gbólóhùn kan.", "Sàmì sí gbólóhùn kọ̀ọ̀kan: òtítọ́ (a lè ṣàyẹ̀wò rẹ̀) tàbí èrò (ìgbàgbọ́ tàbí ìdájọ́).", "Ṣàpèjúwe ojú ìwòye ẹni tó kọ ọ́ àti ohun tí ó fẹ́ kí òǹkàwé ṣe tàbí rò."],
          words: [["Orísun àkọ́kọ́", "ohun tí ẹni tó wà níbẹ̀ ṣe ní àkókò ìṣẹ̀lẹ̀ kan."], ["Orísun kejì", "ohun tí ẹnìkan tó ń kẹ́kọ̀ọ́ nípa ìṣẹ̀lẹ̀ náà ṣe lẹ́yìn náà."], ["Ojú ìwòye", "bí ẹni tó kọ nǹkan ṣe rí ọ̀rọ̀ náà, nítorí ẹni tí ó jẹ́ àti ohun tí ó fẹ́."], ["Òtítọ́", "gbólóhùn tí a lè ṣàyẹ̀wò kí a sì fi hàn."], ["Èrò", "ìgbàgbọ́, ìmọ̀lára tàbí ìdájọ́ ẹnìkan."]],
          slides: [
            { title: "Àkọ́kọ́ tàbí kejì?", bullets: ["Àkọ́kọ́: a ṣe é ní àkókò náà, láti ọwọ́ ẹni tó wà níbẹ̀", "Kejì: a ṣe é lẹ́yìn náà, láti ọwọ́ ẹni tó ń kẹ́kọ̀ọ́ nípa rẹ̀"] },
            { title: "Ojú ìwòye", bullets: ["Ta ló kọ ọ́?", "Ìgbà wo?", "Kí nìdí, kí ni ó sì fẹ́?"] },
            { title: "Òtítọ́ tàbí èrò?", bullets: ["Òtítọ́: a lè ṣàyẹ̀wò rẹ̀", "Èrò: ìgbàgbọ́ tàbí ìdájọ́", "Ọ̀rọ̀ àmì: èyí tó dára jù, èyí tó burú jù, yẹ kí, mo gbàgbọ́"] }
          ],
          tryIt: "Ìdálẹ́kọ̀ọ́: lẹ́tà àgbẹ̀ kan ní ọdún 1935: \"Ìjì eruku bo oko wa mọ́lẹ̀ ní ìgbà mẹ́ta ní ìgbà ìrúwé yìí. Ìjọba yẹ kí ó ran àwọn àgbẹ̀ bíi tiwa lọ́wọ́ kí ó tó pẹ́ jù.\" 1) Àkọ́kọ́ tàbí kejì? 2) Òtítọ́ kan. 3) Èrò kan. 4) Ojú ìwòye? Ìdáhùn: 1) Àkọ́kọ́: ẹni tó wà níbẹ̀ ló kọ ọ́ ní àkókò náà. 2) Ìjì eruku bo oko náà mọ́lẹ̀ ní ìgbà mẹ́ta ní ìgbà ìrúwé yẹn. 3) Ìjọba yẹ kí ó ran àwọn àgbẹ̀ lọ́wọ́. 4) Àgbẹ̀ tí ń jìyà tí ó ń béèrè fún ìrànlọ́wọ́.",
          youCanNow: "mọ ìyàtọ̀ láàárín orísun àkọ́kọ́ àti kejì, ṣàpèjúwe ojú ìwòye, kí o sì ya òtítọ́ sọ́tọ̀ kúrò lára èrò.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni orísun àkọ́kọ́ nípa Ogun Àgbáyé Kejì (World War II)?", options: ["Orí kan nínú ìwé ẹ̀kọ́ ọdún 2020", "Àkópọ̀ lórí ojú-òpó wẹ́ẹ̀bù tí a kọ ní ọdún tó kọjá", "Fíìmù tí a ṣe ní ọdún 2015", "Lẹ́tà tí ọmọ ogun kan kọ sílé ní ọdún 1944"], answer: 3, why: "Ẹni tó wà níbẹ̀ ló ṣe é ní àkókò náà." },
            { objective: "O2", q: "Gbólóhùn wo ni èrò?", options: ["Congress fi òfin náà lélẹ̀ ní ọdún 1964.", "Ìlú náà ní olùgbé 40,000.", "Òfin yẹn ni èyí tó dára jù lọ tí Congress tíì ṣe rí.", "Afárá náà ṣí ní ọdún 1937."], answer: 2, why: "\"Èyí tó dára jù lọ\" jẹ́ ìdájọ́ tí a kò lè fi hàn." }
          ]
        },
        {
          title: "Bí ìjọba US ṣe ń ṣiṣẹ́",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ṣàlàyé ẹ̀ka ìjọba tí ó ń ṣiṣẹ́ nínú ìtàn kan àti bí àyẹ̀wò àti ìdọ́gba agbára ṣe kàn án.",
          text: [
            "Òfin Ìpìlẹ̀ US (Constitution) pín ìjọba àpapọ̀ sí ẹ̀ka mẹ́ta kí ẹnìkan tàbí ẹgbẹ́ kan má bàa ní agbára jù. Ẹ̀ka aṣòfin (legislative) ni Congress (Senate àti House of Representatives); ó ń ṣe òfin. Ẹ̀ka aláṣẹ (executive) ni ààrẹ, igbákejì ààrẹ àti àwọn mínísítà (cabinet); ó ń mú òfin ṣẹ. Ẹ̀ka ìdájọ́ (judicial) ni Ilé-ẹjọ́ Gíga Jùlọ (Supreme Court) àti àwọn ilé-ẹjọ́ àpapọ̀ mìíràn; wọ́n ń túmọ̀ òfin, wọ́n sì ń pinnu bóyá òfin kan tako Òfin Ìpìlẹ̀.",
            "Àyẹ̀wò àti ìdọ́gba agbára (checks and balances) ń jẹ́ kí ẹ̀ka kọ̀ọ̀kan dín agbára àwọn yòókù kù. Ààrẹ lè kọ (veto) àbá òfin tí Congress fi lélẹ̀. Senate ń fọwọ́ sí tàbí kọ àwọn tí ààrẹ yàn, bí àwọn adájọ́ àpapọ̀. Supreme Court lè fagi lé òfin tí ó rí pé ó tako Òfin Ìpìlẹ̀. Congress lè, nígbà tí ọ̀ràn bá le gan-an, yọ ààrẹ kúrò nípò.",
            "Bill of Rights ni àwọn àtúnṣe mẹ́wàá àkọ́kọ́ sí Òfin Ìpìlẹ̀. Ó ń dáàbò bo àwọn ẹ̀tọ́ bí òmìnira ọ̀rọ̀ sísọ, ẹ̀sìn, ìwé ìròyìn àti ìpéjọpọ̀ (First Amendment, Àtúnṣe Àkọ́kọ́), àti ẹ̀tọ́ àwọn tí a fẹ̀sùn ìwà ọ̀daràn kàn, bí ìgbẹ́jọ́ tó tọ́ tí kò pẹ́. A tún pín agbára láàárín ìjọba àpapọ̀ àti àwọn ìpínlẹ̀; èyí ni à ń pè ní federalism.",
            "Àpẹẹrẹ. \"Congress fi àbá òfin kan lélẹ̀. Ààrẹ kọ ọ́ (veto).\" Àyẹ̀wò wo ni èyí? Ẹ̀ka aláṣẹ ń yẹ ẹ̀ka aṣòfin wò."
          ],
          steps: ["Wá ẹni tí ń ṣiṣẹ́: Congress, ààrẹ tàbí ilé-ẹjọ́.", "Dárúkọ ẹ̀ka náà: aṣòfin, aláṣẹ tàbí ìdájọ́.", "Béèrè agbára wo ni wọ́n ń lò: ṣíṣe òfin, mímú òfin ṣẹ tàbí títúmọ̀ òfin.", "Tí ẹ̀ka kan bá ń dín agbára òmíràn kù, dárúkọ àyẹ̀wò náà.", "Tí ẹ̀tọ́ ènìyàn bá wà nínú rẹ̀, wá ẹ̀tọ́ náà nínú Bill of Rights."],
          words: [["Òfin Ìpìlẹ̀ (Constitution)", "òfin tó ga jù lọ ní United States; òun ló ṣètò ìjọba."], ["Ẹ̀ka aṣòfin", "Congress; ó ń ṣe òfin."], ["Ẹ̀ka aláṣẹ", "ààrẹ, igbákejì ààrẹ àti àwọn mínísítà; ó ń mú òfin ṣẹ."], ["Ẹ̀ka ìdájọ́", "àwọn ilé-ẹjọ́; wọ́n ń túmọ̀ òfin."], ["Veto", "nígbà tí ààrẹ bá kọ àbá òfin tí Congress fi lélẹ̀."], ["Àtúnṣe (amendment)", "ìyípadà tàbí àfikún sí Òfin Ìpìlẹ̀."]],
          slides: [
            { title: "Ẹ̀ka mẹ́ta", bullets: ["Aṣòfin (Congress): ń ṣe òfin", "Aláṣẹ (ààrẹ): ń mú òfin ṣẹ", "Ìdájọ́ (ilé-ẹjọ́): ń túmọ̀ òfin"] },
            { title: "Àyẹ̀wò àti ìdọ́gba agbára", bullets: ["Ààrẹ lè kọ àbá òfin (veto)", "Senate ń fọwọ́ sí tàbí kọ àwọn tí ààrẹ yàn", "Supreme Court lè fagi lé òfin tó tako Òfin Ìpìlẹ̀"] },
            { title: "Bill of Rights", bullets: ["Àwọn àtúnṣe mẹ́wàá àkọ́kọ́", "Ọ̀rọ̀ sísọ, ẹ̀sìn, ìwé ìròyìn, ìpéjọpọ̀", "Ẹ̀tọ́ àwọn tí a fẹ̀sùn ìwà ọ̀daràn kàn"] },
            { title: "Federalism", bullets: ["Agbára pínpín láàárín orílẹ̀-èdè àti àwọn ìpínlẹ̀"] }
          ],
          sources: [USA_BRANCHES, ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Ìdálẹ́kọ̀ọ́: dárúkọ ẹ̀ka tàbí ẹ̀tọ́ náà. 1) Senate dìbò lórí ẹni tí ààrẹ yàn láti jẹ́ adájọ́ àpapọ̀. 2) Supreme Court pinnu pé òfin kan tako Òfin Ìpìlẹ̀. 3) Ìwé ìròyìn kan tẹ ìtàn tí ó ń bẹnu àtẹ́ lu olórí ìlú (mayor). 4) Ààrẹ fọwọ́ sí àbá òfin kan kí ó di òfin. Ìdáhùn: 1) Aṣòfin ń yẹ aláṣẹ wò. 2) Ìdájọ́ ń yẹ aṣòfin wò. 3) Òmìnira ìwé ìròyìn, First Amendment. 4) Aláṣẹ (tí ó ń ṣe ipa tirẹ̀ nínú ṣíṣe òfin).",
          youCanNow: "dárúkọ ẹ̀ka mẹ́ta náà, ṣàlàyé àyẹ̀wò àti ìdọ́gba agbára nínú ìtàn kan, kí o sì so ipò kan mọ́ Bill of Rights.",
          quickCheck: [
            { objective: "O3", q: "Ẹ̀ka wo ló ń ṣe òfin àpapọ̀?", options: ["Ẹ̀ka aṣòfin (Congress)", "Ẹ̀ka ìdájọ́", "Ẹ̀ka aláṣẹ", "Àwọn ìpínlẹ̀ nìkan"], answer: 0, why: "Congress, ẹ̀ka aṣòfin, ló ń ṣe òfin." },
            { objective: "O3", q: "Supreme Court pinnu pé òfin kan tako Òfin Ìpìlẹ̀. Àpẹẹrẹ kí ni èyí?", options: ["Federalism", "Veto", "Àyẹ̀wò tí ẹ̀ka ìdájọ́ ń ṣe lórí ẹ̀ka aṣòfin", "Àtúnṣe"], answer: 2, why: "Àwọn ilé-ẹjọ́ lè fagi lé òfin tí ó tako Òfin Ìpìlẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíka orísun àti bí ìjọba ṣe ń ṣiṣẹ́",
        questions: [
          { objective: "O1", q: "Níbo ni o ti yẹ kí o ṣàyẹ̀wò àkókò, owó àti òfin ìdánwò GED lọ́wọ́lọ́wọ́?", options: ["Ọ̀rọ̀ kan lórí ìkànnì àjọlò", "Ged.com àti ọ́fíìsì ẹ̀kọ́ àgbàlagbà ní ìpínlẹ̀ rẹ", "Ìwé ẹ̀kọ́ àtijọ́", "Ohun tí ọ̀rẹ́ rẹ rántí"], answer: 1, why: "Òfin àti owó ń yí padà; àwọn orísun gidi ló ní ti ìsinsìnyí." },
          { objective: "O2", q: "Èwo ni orísun kejì?", options: ["Ọ̀rọ̀ àsọyé tí a sọ ní ọdún 1963", "Fọ́tò tí a yà nígbà ìjì eruku ní àwọn ọdún 1930", "Lẹ́tà ọdún 1776", "Ìwé ẹ̀kọ́ ìtàn tí a kọ ní ọdún 2015"], answer: 3, why: "Àwọn tí ń kẹ́kọ̀ọ́ nípa ìṣẹ̀lẹ̀ náà ló kọ ìwé ẹ̀kọ́ lẹ́yìn náà." },
          { objective: "O2", q: "Ìpolówó ilé-iṣẹ́ kan ní ọdún 1912 sọ pé ọkọ̀ ojú-irin wọn ni \"èyí tó dára jù lọ ní ilẹ̀ yìí.\" Kí ni èyí?", options: ["Èrò láti ojú ìwòye ilé-iṣẹ́ òwò", "Òtítọ́", "Òfin", "Orísun kejì"], answer: 0, why: "\"Èyí tó dára jù lọ\" jẹ́ ìdájọ́, ilé-iṣẹ́ náà sì fẹ́ ta tíkẹ́ẹ̀tì." },
          { objective: "O3", q: "Ààrẹ kọ àbá òfin kan (veto). Ẹ̀ka wo ni à ń yẹ̀ wò?", options: ["Ẹ̀ka ìdájọ́", "Ẹ̀ka aláṣẹ", "Ẹ̀ka aṣòfin", "Àwọn ìpínlẹ̀"], answer: 2, why: "Veto ń jẹ́ kí ẹ̀ka aláṣẹ yẹ Congress, ẹ̀ka aṣòfin, wò." },
          { objective: "O3", q: "Kí ni Bill of Rights?", options: ["Ìṣúná owó ààrẹ", "Àwọn àtúnṣe mẹ́wàá àkọ́kọ́ sí Òfin Ìpìlẹ̀", "Àkójọ òfin ìpínlẹ̀", "Ìdájọ́ Supreme Court kan"], answer: 1, why: "Bill of Rights ni àwọn àtúnṣe mẹ́wàá àkọ́kọ́." }
        ]
      }
    },
    {
      name: "Orí 2: Ìtàn, ọrọ̀ ajé àti gíráàfù",
      lessons: [
        {
          title: "Ìdí, àbájáde àti ẹ̀rí nínú ìtàn",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dá ìdí kan àti àbájáde kan mọ̀ nínú ìṣẹ̀lẹ̀ ìtàn, àti ẹ̀rí tí ó ṣe àtìlẹ́yìn fún ìpinnu kan.",
          text: [
            "Àwọn ìbéèrè ìtàn sábà máa ń béèrè ìdí tí nǹkan fi ṣẹlẹ̀ (ìdí) àti ohun tí ó ṣẹlẹ̀ nítorí rẹ̀ (àbájáde). Ọ̀rọ̀ àmì: nítorí, nítorí náà, èyí mú kí, ó yọrí sí, fún ìdí èyí.",
            "Àpẹẹrẹ. \"Ní ìparí àwọn ọdún 1800, àwọn ilé-iṣẹ́ ní ìlú ńlá ní ọ̀pọ̀ iṣẹ́ tuntun. Nítorí èyí, ọ̀pọ̀ mílíọ̀nù ènìyàn kúrò ní oko lọ sí ìlú ńlá. Iye ènìyàn ìlú ńlá pọ̀ sí i kíákíá, ilé tí èrò kún sì di ìṣòro.\" Ìdí: iṣẹ́ ilé-iṣẹ́ ní ìlú ńlá. Àbájáde: àwọn ènìyàn kó lọ sí ìlú ńlá. Àbájáde tó tẹ̀lé e: ilé tí èrò kún. Ìdí kan lè fa ọ̀wọ́ àbájáde.",
            "Ìpinnu (inference) jẹ́ ìparí èrò tí ẹ̀rí ṣe àtìlẹ́yìn fún. Àwọn ìbéèrè GED lè béèrè gbólóhùn wo láti inú orísun kan ló ṣe àtìlẹ́yìn fún ìpinnu kan. Yan gbólóhùn tí ó fúnni ní ẹ̀rí, kì í ṣe èyí tí ó kàn jẹ́ nípa ọ̀rọ̀ kan náà.",
            "Ṣọ́ra: nǹkan méjì tí ó ṣẹlẹ̀ ní àkókò kan náà kò fìgbà gbogbo túmọ̀ sí pé ọ̀kan ló fa èkejì. Wá ibi tí orísun náà ti sọ tàbí fi ìsopọ̀ náà hàn."
          ],
          steps: ["Wá ìṣẹ̀lẹ̀ tí ìbéèrè náà ń béèrè nípa rẹ̀.", "Wá ọ̀rọ̀ àmì: nítorí, nítorí náà, nítorí èyí, ó yọrí sí.", "Dárúkọ ìdí (kí nìdí) àti àbájáde (ohun tó ṣẹlẹ̀ lẹ́yìn náà).", "Fún ìpinnu, yan gbólóhùn tí ó fúnni ní ẹ̀rí rẹ̀.", "Ṣàyẹ̀wò pé orísun náà so méjèèjì pọ̀ lóòótọ́; má ṣe rò ó lásán."],
          words: [["Ìdí", "ìdí tí nǹkan kan fi ṣẹlẹ̀."], ["Àbájáde", "ohun tí ó ṣẹlẹ̀ nítorí ìdí náà."], ["Ìpinnu (inference)", "ìparí èrò tí ẹ̀rí ṣe àtìlẹ́yìn fún."], ["Ìdàgbàsókè ilé-iṣẹ́ (industrialization)", "ìdàgbàsókè àwọn ilé-iṣẹ́ àti ẹ̀rọ tí ń ṣe ọjà."]],
          slides: [
            { title: "Ìdí àti àbájáde", bullets: ["Ìdí: ìdí tí ó fi ṣẹlẹ̀", "Àbájáde: ohun tó ṣẹlẹ̀ lẹ́yìn náà", "Ọ̀rọ̀ àmì: nítorí, nítorí èyí, ó yọrí sí"] },
            { title: "Ọ̀wọ́ àbájáde", bullets: ["Iṣẹ́ ilé-iṣẹ́ ní ìlú ńlá", "Àwọn ènìyàn kúrò ní oko lọ sí ìlú ńlá", "Ilé tí èrò kún ní ìlú ńlá"] },
            { title: "Ẹ̀rí fún ìpinnu", bullets: ["Yan gbólóhùn tí ó fi hàn", "Ọ̀rọ̀ kan náà kì í ṣe ẹ̀rí", "Ṣíṣẹlẹ̀ lákòókò kan náà kò túmọ̀ sí pé ọ̀kan fa èkejì"] }
          ],
          tryIt: "Ìdálẹ́kọ̀ọ́: \"Dust Bowl (ìjì eruku) ti àwọn ọdún 1930 ba ohun ọ̀gbìn jẹ́ ní Great Plains. Ọ̀pọ̀ ìdílé àgbẹ̀ pàdánù ilẹ̀ wọn, wọ́n sì kó lọ sí ìwọ̀-oòrùn láti wá iṣẹ́.\" 1) Ìdí? 2) Àbájáde? 3) Gbólóhùn wo ló ṣe àtìlẹ́yìn jù lọ fún ìpinnu \"Dust Bowl yí ibi tí àwọn ènìyàn ń gbé padà\": (a) \"Dust Bowl ba ohun ọ̀gbìn jẹ́\" tàbí (b) \"Ọ̀pọ̀ ìdílé àgbẹ̀ kó lọ sí ìwọ̀-oòrùn\"? Ìdáhùn: 1) Ìjì eruku ba ohun ọ̀gbìn jẹ́. 2) Àwọn ìdílé pàdánù ilẹ̀, wọ́n sì kó lọ sí ìwọ̀-oòrùn. 3) (b): ó fi àwọn ènìyàn tí ń kó lọ hàn.",
          youCanNow: "wá ìdí àti àbájáde nínú ìtàn, kí o sì yan ẹ̀rí tí ó ṣe àtìlẹ́yìn fún ìpinnu kan.",
          quickCheck: [
            { objective: "O4", q: "\"Owó epo bẹ́tíróò lọ sókè gan-an, nítorí náà àwọn ènìyàn púpọ̀ sí i wọ bọ́ọ̀sì.\" Kí ni àbájáde?", options: ["Owó epo lọ sókè", "Àwọn ènìyàn púpọ̀ sí i wọ bọ́ọ̀sì", "Owó bọ́ọ̀sì wálẹ̀", "Àwọn ọkọ̀ di ńlá sí i"], answer: 1, why: "Wíwọ bọ́ọ̀sì ni ohun tí ó ṣẹlẹ̀ nítorí owó epo lọ sókè." },
            { objective: "O4", q: "Gbólóhùn wo ló ṣe àtìlẹ́yìn jù lọ fún ìpinnu pé ọ̀nà márosẹ̀ tuntun kan ran àwọn ilé ìtajà ìlú kan lọ́wọ́?", options: ["\"Ọ̀nà márosẹ̀ náà ní ọ̀nà mẹ́rin.\"", "\"Ọ̀nà márosẹ̀ náà ṣí ní ọdún 1960.\"", "\"A fi kọnkéré ṣe àwọn ọ̀nà márosẹ̀.\"", "\"Ọjà tí àwọn ṣọ́ọ̀bù ìlú náà tà di ìlọ́po méjì ní ọdún márùn-ún lẹ́yìn tí ọ̀nà márosẹ̀ náà ṣí.\""], answer: 3, why: "Ó fúnni ní ẹ̀rí ìdàgbàsókè òwò tí ó so mọ́ ọ̀nà márosẹ̀ náà." }
          ]
        },
        {
          title: "Ọrọ̀ ajé àti gíráàfù",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ka àtẹ tàbí máàpù, ṣàpèjúwe bí nǹkan ṣe ń lọ, kí o sì yan ìparí èrò tí dátà ṣe àtìlẹ́yìn fún.",
          text: [
            "Ìpèsè (supply) ni iye nǹkan kan tí ó wà fún títà. Ìbéèrè (demand) ni iye tí àwọn ènìyàn fẹ́ rà. Nígbà tí ìbéèrè bá lọ sókè tí ìpèsè kò yí padà, owó sábà máa ń lọ sókè. Nígbà tí ìpèsè bá lọ sókè tí ìbéèrè kò yí padà, owó sábà máa ń wálẹ̀. Àpẹẹrẹ: lẹ́yìn tí òtútù líle bá ba ọsàn oko jẹ́, ìpèsè ọsàn dín kù, owó rẹ̀ sì lọ sókè.",
            "Gíráàfù: kọ́kọ́ ka àkọlé, àwọn àmì orúkọ àti ẹ̀yà ìwọ̀n (units). Àtẹ ìdálẹ́kọ̀ọ́ (a ṣe é fún ẹ̀kọ́): ìwọ̀n àìníṣẹ́ ìlú kan jẹ́ 8% ní 2020, 6% ní 2021, 5% ní 2022 àti 4% ní 2023. Bí ó ṣe ń lọ: ó ń wálẹ̀ lọ́dọọdún. Ìparí èrò tí a ṣe àtìlẹ́yìn fún: ìdá àwọn tí ń wá iṣẹ́ tí kò ní iṣẹ́ kéré sí i ní 2023 ju ti 2020 lọ. Èyí tí a kò ṣe àtìlẹ́yìn fún: ìdí tí ó fi wálẹ̀, nítorí àtẹ náà kò sọ ọ́.",
            "Máàpù: ka àkọlé, atọ́ka (legend tàbí key) àti àmì ìtọ́sọ́nà (compass rose). Atọ́ka ń sọ ohun tí àwọ̀ tàbí àmì túmọ̀ sí. Máàpù òjò lè lo àwọ̀ dúdú sí i fún òjò púpọ̀ sí i. Lo ìwọ̀n máàpù (scale) láti fojú díwọ̀n ijìnnà.",
            "Ìyípadà ìdá-ọgọ́rùn-ún wọ́pọ̀: láti 8% sí 4% jẹ́ ìdínkù 4 percentage points. O lè lo ẹ̀rọ ìṣirò orí ojú-iboju fún ìṣirò náà."
          ],
          steps: ["Ka àkọlé, àwọn àmì orúkọ, ẹ̀yà ìwọ̀n tàbí atọ́ka máàpù.", "Wá iye tí ìbéèrè náà ń béèrè.", "Ṣàpèjúwe bí ó ṣe ń lọ: ń lọ sókè, ń wálẹ̀ tàbí kò ní ìlànà tó ṣe kedere.", "Yan ìparí èrò tí ó dúró nínú dátà.", "Fún owó, béèrè pé: ṣé ìpèsè ló yí padà ni tàbí ìbéèrè?"],
          words: [["Ìpèsè (supply)", "iye ọjà tàbí iṣẹ́ tí ó wà fún títà."], ["Ìbéèrè (demand)", "iye rẹ̀ tí àwọn ènìyàn fẹ́ rà."], ["Ìwọ̀n àìníṣẹ́ (unemployment rate)", "ìdá àwọn tí ń wá iṣẹ́ tí kò ní iṣẹ́."], ["Atọ́ka (legend)", "kọ́kọ́rọ́ lórí máàpù tàbí àtẹ tí ó ń sọ ohun tí àwọ̀ tàbí àmì túmọ̀ sí."], ["Percentage point", "ìyàtọ̀ lásán láàárín ìdá-ọgọ́rùn-ún méjì, bí 8% sí 4% ṣe jẹ́ points 4."]],
          slides: [
            { title: "Ìpèsè àti ìbéèrè", bullets: ["Ìbéèrè lọ sókè, ìpèsè kò yí padà: owó sábà ń lọ sókè", "Ìpèsè lọ sókè, ìbéèrè kò yí padà: owó sábà ń wálẹ̀"] },
            { title: "Kíka gíráàfù", bullets: ["Àkọlé, àmì orúkọ, ẹ̀yà ìwọ̀n lákọ̀ọ́kọ́", "Wá iye náà", "Ṣàpèjúwe bí ó ṣe ń lọ"] },
            { title: "Kíka máàpù", bullets: ["Àkọlé àti atọ́ka (key)", "Àmì ìtọ́sọ́nà (compass rose) fún ọ̀nà", "Ìwọ̀n máàpù (scale) fún ijìnnà"] },
            { title: "Dúró nínú dátà", bullets: ["Àtẹ ń fi ohun tó ṣẹlẹ̀ hàn, kì í fìgbà gbogbo fi ìdí hàn", "Má ṣe parí èrò nípa ohun tí a kò fi hàn"] }
          ],
          tryIt: "Ìdálẹ́kọ̀ọ́ (dátà tí a ṣe fún ẹ̀kọ́): àtẹ ọ̀pá kan fi owó ilé oṣooṣù ní ìlú kan hàn: 2019: $1,000; 2021: $1,150; 2023: $1,400. 1) Owó ilé ní 2021? 2) Bí ó ṣe ń lọ? 3) Iye wo ni owó ilé fi lọ sókè láti 2019 sí 2023? 4) Ìparí èrò wo ni a ṣe àtìlẹ́yìn fún: (a) owó ilé lọ sókè ní àkókò yìí, tàbí (b) owó ilé lọ sókè nítorí iṣẹ́ tuntun? Ìdáhùn: 1) $1,150. 2) Ó ń lọ sókè. 3) $400. 4) (a); àtẹ náà kò fi ìdí hàn.",
          youCanNow: "lo ìpèsè àti ìbéèrè láti ṣàlàyé ìyípadà owó, kí o sì ka àtẹ àti máàpù láti yan ìparí èrò tí a ṣe àtìlẹ́yìn fún.",
          quickCheck: [
            { objective: "O5", q: "Ìjì ba ọ̀pọ̀ ilé-iṣẹ́ pákó jẹ́, nítorí náà pákó tí ó wà fún títà dín kù, ṣùgbọ́n àwọn akọ́lé ṣì fẹ́ ẹ. Kí ló sábà máa ń ṣẹlẹ̀ sí owó pákó?", options: ["Ó ń lọ sókè", "Ó ń wálẹ̀", "Kò yí padà", "Pákó di ọ̀fẹ́"], answer: 0, why: "Ìpèsè dín kù nígbà tí ìbéèrè kò yí padà, nítorí náà owó sábà máa ń lọ sókè." },
            { objective: "O5", q: "Lórí máàpù, kí ló ń sọ ohun tí àwọ̀ kọ̀ọ̀kan túmọ̀ sí?", options: ["Àmì ìtọ́sọ́nà (compass rose)", "Àkọlé", "Atọ́ka (legend tàbí key)", "Ìwọ̀n máàpù (scale)"], answer: 2, why: "Atọ́ka ń ṣàlàyé àwọ̀ àti àmì." }
          ]
        },
        {
          title: "Kíkó gbogbo rẹ̀ papọ̀: títúpalẹ̀ ìwé ìpìlẹ̀ orílẹ̀-èdè",
          objectives: ["O2", "O3", "O4"],
          minutes: 6,
          goal: "Kọ ìwé ìtúpalẹ̀ orísun lórí ìwé ìpìlẹ̀ orílẹ̀-èdè kan.",
          text: [
            "Àwọn ìbéèrè GED sábà máa ń fún ọ ní apá kúkúrú kan láti inú ìwé àtijọ́, wọ́n sì máa béèrè nípa kókó ọ̀rọ̀ rẹ̀, ète rẹ̀ tàbí bí ó ṣe so mọ́ ìjọba lónìí. Preamble, gbólóhùn ìbẹ̀rẹ̀ Òfin Ìpìlẹ̀, dára fún ìdálẹ́kọ̀ọ́. Kà á lórí ojú-òpó wẹ́ẹ̀bù National Archives.",
            "Preamble bẹ̀rẹ̀ pẹ̀lú \"We the People of the United States\" (Àwa Ènìyàn United States), ó sì to àwọn àfojúsùn: láti dá ìṣọ̀kan tó pé jù sílẹ̀, láti fi ìdájọ́ òdodo múlẹ̀, láti rí i dájú pé àlàáfíà wà nílé (domestic tranquility), láti pèsè ààbò fún gbogbo ènìyàn, láti gbé ire gbogbo ènìyàn lárugẹ (general welfare), àti láti dáàbò bo ìbùkún òmìnira.",
            "Àpẹẹrẹ ìtúpalẹ̀. Ta àti ìgbà wo: àwọn aṣojú ní Constitutional Convention (Àpérò Òfin Ìpìlẹ̀), 1787. Irú: orísun àkọ́kọ́. Kókó ọ̀rọ̀: àwọn ènìyàn dá ìjọba sílẹ̀ láti dé àwọn àfojúsùn tí wọ́n jọ ní. Ojú ìwòye: àwọn aṣáájú tí wọ́n fẹ́ ìjọba orílẹ̀-èdè tó lágbára ju èyí tí wọ́n ní tẹ́lẹ̀. Ìdí àti àbájáde: ìjọba ìṣáájú lábẹ́ Articles of Confederation kò lágbára, èyí sì yọrí sí kíkọ Òfin Ìpìlẹ̀ tuntun. Àwọn ẹ̀ka: Preamble ń ṣe ìfihàn gbogbo Òfin Ìpìlẹ̀, èyí tí ó dá ẹ̀ka mẹ́tẹ̀ẹ̀ta sílẹ̀.",
            "Ìwé rẹ kò nílò ìdáhùn pípé. Ó nílò ìdáhùn tí o lè ṣe àtìlẹ́yìn fún nípa títọ́ka sí àwọn ọ̀rọ̀ inú ìwé náà."
          ],
          steps: ["Ṣí ọ̀rọ̀ Òfin Ìpìlẹ̀ ní kíkún lórí archives.gov kí o sì ka Preamble.", "Kọ ẹni tó kọ ọ́, ìgbà wo, àti bóyá orísun àkọ́kọ́ ni tàbí kejì.", "Kọ kókó ọ̀rọ̀ ní gbólóhùn kan àti ojú ìwòye rẹ̀.", "Kọ òtítọ́ kan nípa rẹ̀ àti àfojúsùn tàbí èrò kan nínú rẹ̀.", "Kọ ìdí kan àti àbájáde kan, àti ẹ̀ka tàbí ẹ̀tọ́ tí ó so mọ́.", "Fi ètò ìkẹ́kọ̀ọ́ rẹ tí ó ní ọjọ́ sí ìsàlẹ̀."],
          words: [["Preamble", "gbólóhùn ìbẹ̀rẹ̀ Òfin Ìpìlẹ̀ tí ó sọ ète rẹ̀."], ["Articles of Confederation", "ètò ìjọba US àkọ́kọ́, tí a lò ṣáájú Òfin Ìpìlẹ̀."], ["Domestic tranquility", "àlàáfíà nílé."], ["General welfare", "ire gbogbo ènìyàn."]],
          slides: [
            { title: "Preamble", bullets: ["Gbólóhùn ìbẹ̀rẹ̀ Òfin Ìpìlẹ̀", "Ó bẹ̀rẹ̀ pẹ̀lú \"We the People\"", "Ó to àwọn àfojúsùn ìjọba tuntun"] },
            { title: "Ìwé ìtúpalẹ̀ rẹ", bullets: ["Ta, ìgbà wo, àkọ́kọ́ tàbí kejì", "Kókó ọ̀rọ̀ àti ojú ìwòye", "Òtítọ́ kan àti àfojúsùn tàbí èrò kan"] },
            { title: "So ó pọ̀", bullets: ["Ìdí kan àti àbájáde kan", "Ẹ̀ka tàbí ẹ̀tọ́ tí ó kàn", "Tọ́ka sí àwọn ọ̀rọ̀ tí ó fi hàn"] }
          ],
          sources: [ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ìwé ìtúpalẹ̀ orísun ojú-ìwé kan rẹ lórí Preamble (tàbí Bill of Rights) láti archives.gov, ní títẹ̀lé àwọn ìgbésẹ̀ òkè yìí. Fi ètò ìkẹ́kọ̀ọ́ GED rẹ tí ó ní ọjọ́ sí ìsàlẹ̀, lẹ́yìn náà fi rubric ẹ̀kọ́ yìí ṣe àmì fún iṣẹ́ rẹ.",
          youCanNow: "túpalẹ̀ ìwé ìpìlẹ̀ orílẹ̀-èdè kan: irú orísun rẹ̀, kókó ọ̀rọ̀, ojú ìwòye, ìdí àti àbájáde, àti bí ó ṣe so mọ́ bí ìjọba ṣe ń ṣiṣẹ́.",
          quickCheck: [
            { objective: "O2", q: "Àwọn aṣojú ní Constitutional Convention ló kọ Preamble ní ọdún 1787. Irú orísun wo ni?", options: ["Kejì", "Ìdìbò èrò àwọn ènìyàn", "Máàpù", "Àkọ́kọ́"], answer: 3, why: "Àwọn tí wọ́n kọ Òfin Ìpìlẹ̀ ló ṣe é ní àkókò náà." },
            { objective: "O4", q: "Articles of Confederation dá ìjọba orílẹ̀-èdè tí kò lágbára sílẹ̀. Kí ni àbájáde kan?", options: ["Àwọn aṣáájú kọ Òfin Ìpìlẹ̀ tuntun", "A yọ Bill of Rights kúrò", "A ti Congress pa títí láé", "Àwọn ìpínlẹ̀ kò sí mọ́"], answer: 0, why: "Àìlágbára Articles ló yọrí sí Òfin Ìpìlẹ̀ ọdún 1787." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìtàn, ọrọ̀ ajé àti gíráàfù",
        questions: [
          { objective: "O4", q: "\"Nítorí pé ilé-iṣẹ́ náà ti pa, ọ̀pọ̀ òṣìṣẹ́ kó lọ.\" Kí ni ìdí?", options: ["Àwọn òṣìṣẹ́ kó lọ", "Ìlú náà dàgbà", "Ilé-iṣẹ́ náà ti pa", "Àwọn ṣọ́ọ̀bù tuntun ṣí"], answer: 2, why: "Títi ilé-iṣẹ́ náà ni ìdí tí àwọn òṣìṣẹ́ fi kó lọ." },
          { objective: "O4", q: "Nǹkan méjì ṣẹlẹ̀ ní ọdún kan náà. Kí ni o lè sọ dájú?", options: ["Ọ̀kan ló fa èkejì", "Wọ́n ṣẹlẹ̀ ní àkókò kan náà; ṣàyẹ̀wò orísun fún ìsopọ̀", "Èrò ni méjèèjì", "Kò sí èyí tó ṣẹlẹ̀"], answer: 1, why: "Ṣíṣẹlẹ̀ papọ̀ kò fi hàn pé ọ̀kan fa èkejì." },
          { objective: "O5", q: "Ìbéèrè fún kẹ̀kẹ́ lọ sókè, ìpèsè kò sì yí padà. Kí ló sábà máa ń ṣẹlẹ̀ sí owó kẹ̀kẹ́?", options: ["Ó ń wálẹ̀", "Kò yí padà", "Kẹ̀kẹ́ di ọ̀fẹ́", "Ó ń lọ sókè"], answer: 3, why: "Àwọn olùrà púpọ̀ sí i fún ìpèsè kan náà sábà máa ń ti owó sókè." },
          { objective: "O5", q: "Àtẹ kan fi iye ènìyàn ìlú kan hàn: 2000: 10,000; 2010: 12,000; 2020: 15,000. Ìparí èrò wo ni a ṣe àtìlẹ́yìn fún?", options: ["Iye ènìyàn pọ̀ sí i ní àwọn ọdún wọ̀nyí", "Ìlú náà máa ní ènìyàn 50,000 ní 2030", "Àwọn ènìyàn kó wá nítorí ilé-ẹ̀kọ́ tó dára", "Ìlú náà pàdánù ènìyàn"], answer: 0, why: "Àwọn nọ́mbà ń lọ sókè ní ọdún mẹ́wàá-mẹ́wàá; àtẹ náà kò fi ọjọ́ iwájú tàbí àwọn ìdí hàn." },
          { objective: "O3", q: "Senate kọ ẹni tí ààrẹ yàn láti jẹ́ adájọ́ àpapọ̀. Àyẹ̀wò wo ni èyí?", options: ["Ẹ̀ka ìdájọ́ ń yẹ ẹ̀ka aláṣẹ wò", "Ẹ̀ka aṣòfin ń yẹ ẹ̀ka aláṣẹ wò", "Federalism", "Veto"], answer: 1, why: "Senate, apá kan Congress, ló ń fọwọ́ sí tàbí kọ àwọn tí ààrẹ yàn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmúrasílẹ̀ fún Ìdánwò GED: Social Studies",
    questions: [
      { objective: "O1", q: "Kí ni ẹ̀kọ́ yìí ń ṣe fún ọ?", options: ["Ó ń fún ọ ní ìwé-ẹ̀rí GED", "Ó ń sọ ọ́ di ọmọ orílẹ̀-èdè US", "Ó ń múra rẹ sílẹ̀ fún ìdánwò GED Social Studies", "Ó ń rọ́pò ìdánwò GED"], answer: 2, why: "Ó ń múra rẹ sílẹ̀; GED Testing Service ló ń ṣe ìdánwò náà, ìpínlẹ̀ rẹ ló sì ń fúnni ní ìwé-ẹ̀rí." },
      { objective: "O1", q: "Èwo ni ìdánwò mìíràn tó dọ́gba pẹ̀lú ilé-ẹ̀kọ́ gíga tí àwọn ìpínlẹ̀ kan ń lò?", options: ["HiSET", "SAT", "CDL", "LSAT"], answer: 0, why: "HiSET jẹ́ ìdánwò mìíràn tó dọ́gba pẹ̀lú ilé-ẹ̀kọ́ gíga." },
      { objective: "O1", q: "Gẹ́gẹ́ bí ged.com ṣe sọ, ìdánwò Social Studies:", options: ["Jẹ́ kíkọ́ ọjọ́ sórí nìkan", "Jẹ́ ìdánwò àròkọ nìkan", "Kì í ṣe ìdánwò àkọ́sórí", "Jẹ́ ìfọ̀rọ̀wánilẹ́nuwò ẹnu"], answer: 2, why: "Ged.com sọ pé kì í ṣe ìdánwò àkọ́sórí." },
      { objective: "O2", q: "Kí ni orísun àkọ́kọ́?", options: ["Ìwé ẹ̀kọ́ tí a kọ ní ọdún tó kọjá", "Ohun tí ẹni tó wà níbẹ̀ ṣe ní àkókò náà", "Àkópọ̀ lórí ojú-òpó wẹ́ẹ̀bù", "Àkọsílẹ̀ olùkọ́"], answer: 1, why: "Orísun àkọ́kọ́ wá láti ọ̀dọ̀ àwọn ènìyàn ní àkókò ìṣẹ̀lẹ̀ náà." },
      { objective: "O2", q: "Èwo ni òtítọ́?", options: ["A fọwọ́ sí Civil Rights Act ní ọdún 1964.", "Òun ni òfin tó dára jù lọ tí a tíì kọ rí.", "Gbogbo ènìyàn ló yẹ kí ó fẹ́ràn rẹ̀.", "Òun ni ọjọ́ tí ó dùn mọ́ni jù lọ nínú ìtàn."], answer: 0, why: "A lè ṣàyẹ̀wò ọjọ́ tí a fọwọ́ sí i; àwọn yòókù jẹ́ ìdájọ́." },
      { objective: "O2", q: "Láti rí ojú ìwòye ẹni tó kọ nǹkan, béèrè pé:", options: ["Báwo ni orísun náà ṣe gùn tó", "Àwọ̀ wo ni ìwé náà", "Ojú-ìwé mélòó ló ní", "Ta ló kọ ọ́, ìgbà wo àti kí nìdí"], answer: 3, why: "Ta, ìgbà wo àti kí nìdí ló ń pinnu bí ẹni tó kọ ọ́ ṣe rí ọ̀rọ̀ náà." },
      { objective: "O2", q: "Ọ̀rọ̀ wo ló sábà máa ń fi èrò hàn?", options: ["A fọwọ́ sí i (ratified)", "Yẹ kí", "1920", "Congress"], answer: 1, why: "\"Yẹ kí\" ń sọ ohun tí ẹnìkan gbàgbọ́ pé ó yẹ kí ó ṣẹlẹ̀." },
      { objective: "O3", q: "Ẹ̀ka wo ló ń mú òfin ṣẹ?", options: ["Aṣòfin", "Ìdájọ́", "Aláṣẹ", "Kò sí"], answer: 2, why: "Ààrẹ àti ẹ̀ka aláṣẹ ló ń mú òfin ṣẹ." },
      { objective: "O3", q: "Congress ní:", options: ["Senate àti House of Representatives", "Ààrẹ àti àwọn mínísítà", "Supreme Court", "Àwọn gómìnà"], answer: 0, why: "Congress ní apá méjì: Senate àti House." },
      { objective: "O3", q: "Ẹgbẹ́ kan ṣe ìfẹ̀hónúhàn àlàáfíà ní ọgbà ìtura kan. Ẹ̀tọ́ wo ló dáàbò bo èyí?", options: ["Ẹ̀tọ́ sí ìgbẹ́jọ́ tí kò pẹ́", "Ẹ̀tọ́ láti dìbò ní ọmọ ọdún 18", "Veto ààrẹ", "Òmìnira ìpéjọpọ̀ (First Amendment)"], answer: 3, why: "First Amendment ń dáàbò bo ìpéjọpọ̀ àlàáfíà." },
      { objective: "O3", q: "Agbára tí a pín láàárín ìjọba orílẹ̀-èdè àti àwọn ìpínlẹ̀ ni à ń pè ní:", options: ["Veto", "Federalism", "Preamble", "Èrò"], answer: 1, why: "Federalism ń pín agbára láàárín orílẹ̀-èdè àti àwọn ìpínlẹ̀." },
      { objective: "O4", q: "Ọ̀rọ̀ àmì wo ló ń fi ìdí àti àbájáde hàn?", options: ["Nítorí èyí", "Bákan náà", "Fún àpẹẹrẹ", "Ní àfikún"], answer: 0, why: "\"Nítorí èyí\" ń ṣe ìfihàn àbájáde." },
      { objective: "O4", q: "\"Iṣẹ́ ilé-iṣẹ́ pọ̀ sí i ní ìlú ńlá, nítorí náà àwọn ènìyàn kúrò ní oko.\" Kí ni ìdí?", options: ["Àwọn ènìyàn kúrò ní oko", "Àwọn oko di ńlá sí i", "Iṣẹ́ ilé-iṣẹ́ pọ̀ sí i ní ìlú ńlá", "Àwọn ìlú ńlá kéré sí i"], answer: 2, why: "Iṣẹ́ ilé-iṣẹ́ ni ìdí tí àwọn ènìyàn fi kó lọ." },
      { objective: "O4", q: "Gbólóhùn wo ló ṣe àtìlẹ́yìn jù lọ fún ìpinnu pé òfin tuntun kan dín ìpalára níbi iṣẹ́ kù?", options: ["\"Òfin náà gùn tó ojú-ìwé 20.\"", "\"Ìròyìn ìpalára dín kù ní ìdá mẹ́ta ní ọdún mẹ́ta lẹ́yìn tí òfin náà bẹ̀rẹ̀.\"", "\"Ọ̀pọ̀ ènìyàn sọ̀rọ̀ nípa òfin náà.\"", "\"Òfin náà ní orúkọ gígùn.\""], answer: 1, why: "Ó fúnni ní ẹ̀rí ìpalára tí ó dín kù lẹ́yìn òfin náà." },
      { objective: "O5", q: "Òtútù líle ba ọ̀pọ̀ ọsàn oko jẹ́. Kí ló sábà máa ń ṣẹlẹ̀ sí owó ọsàn?", options: ["Ó ń wálẹ̀", "Kò yí padà", "Ọsàn di ọ̀fẹ́", "Ó ń lọ sókè"], answer: 3, why: "Ìpèsè tí ó dín kù pẹ̀lú ìbéèrè kan náà sábà máa ń mú owó lọ sókè." },
      { objective: "O5", q: "Kí ni o yẹ kí o kọ́kọ́ kà lórí àtẹ?", options: ["Àkọlé, àwọn àmì orúkọ àti ẹ̀yà ìwọ̀n", "Àwọn ìdáhùn tí a fún ọ nìkan", "Nọ́mbà tó kéré jù", "Àwọn àwọ̀ nìkan"], answer: 0, why: "Wọ́n ń sọ ohun tí àwọn nọ́mbà túmọ̀ sí." },
      { objective: "O5", q: "Àìníṣẹ́ jẹ́ 8% ní 2020 àti 4% ní 2023. Iye wo ló fi wálẹ̀?", options: ["Percentage points 2", "Percentage points 12", "Percentage points 4", "Percentage points 8"], answer: 2, why: "8% - 4% = 4 percentage points." },
      { objective: "O5", q: "Àtẹ kan fi owó ilé tí ń lọ sókè lọ́dọọdún hàn. Ìparí èrò wo ló kọjá dátà náà?", options: ["Owó ilé lọ sókè ní àwọn ọdún wọ̀nyí", "Owó ilé máa di ìlọ́po méjì ní ọdún tó ń bọ̀", "Owó ilé ga ní ìparí ju ìbẹ̀rẹ̀ lọ", "Àtẹ náà fi ọ̀pọ̀ ọdún hàn"], answer: 1, why: "Àtẹ náà kò fi ọdún tó ń bọ̀ hàn." },
      { objective: "O2", q: "Preamble bẹ̀rẹ̀ pẹ̀lú \"We the People\" (Àwa Ènìyàn). Kí ni èyí fi hàn nípa ojú ìwòye ìjọba náà?", options: ["Agbára wá láti ọ̀dọ̀ àwọn ènìyàn", "Agbára wá láti ọ̀dọ̀ ọba", "Àwọn ìpínlẹ̀ nìkan ló ní agbára", "Àwọn ilé-ẹjọ́ ló kọ ọ́"], answer: 0, why: "\"We the People\" fi hàn pé àwọn ènìyàn ló dá ìjọba sílẹ̀, fún àwọn ènìyàn." },
      { objective: "O4", q: "Kí nìdí tí àwọn aṣáájú fi kọ Òfin Ìpìlẹ̀ ní ọdún 1787?", options: ["Orílẹ̀-èdè náà kò ní ìpínlẹ̀ kankan", "Ọba ní kí wọ́n ṣe é", "Bill of Rights ti kùnà", "Ìjọba lábẹ́ Articles of Confederation kò lágbára tó"], answer: 3, why: "Àìlágbára Articles of Confederation ló yọrí sí ètò ìjọba tuntun." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [2, 3, 4, 7, 9, 12, 13, 14, 16] },
  rubric: {
    mastery: "\"Ó tó\" tàbí \"Ó ju bẹ́ẹ̀ lọ\" lórí gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì tó\", tún apá yẹn nínú ìwé náà kà, kí o sì ṣàtúnṣe ìdáhùn rẹ.",
    criteria: [
      { name: "Orísun àti ojú ìwòye", objective: "O2", notYet: "Irú orísun tàbí ẹni tó kọ ọ́ kò tọ̀nà tàbí kò sí.", meets: "Ẹni tó kọ ọ́, ọjọ́ àti irú orísun tó tọ̀nà, àti ojú ìwòye tí ó bá ẹni tó kọ ọ́ àti ìdí rẹ̀ mu.", exceeds: "Ó tún ṣàlàyé bí ojú ìwòye ṣe ń pinnu ohun tí ìwé náà sọ." },
      { name: "Kókó ọ̀rọ̀, òtítọ́ àti èrò", objective: "O2", notYet: "Kókó ọ̀rọ̀ kò tọ̀nà, tàbí òtítọ́ àti èrò dàrú.", meets: "Kókó ọ̀rọ̀ tó tọ̀nà ní gbólóhùn kan, òtítọ́ kan àti àfojúsùn tàbí èrò kan, ọ̀kọ̀ọ̀kan so mọ́ àwọn ọ̀rọ̀ inú ìwé.", exceeds: "Ó fa àwọn ọ̀rọ̀ gangan tí ó fi ìdáhùn kọ̀ọ̀kan hàn yọ." },
      { name: "Ìdí àti àbájáde", objective: "O4", notYet: "Kò sí ìdí tàbí àbájáde, tàbí wọ́n yí padà.", meets: "Ìdí kan tó tọ̀nà àti àbájáde kan tó tọ̀nà tí ó so mọ́ ìwé náà.", exceeds: "Ó fi ọ̀wọ́ hàn: ìdí, àbájáde àti àbájáde tó tẹ̀lé e." },
      { name: "Ìsopọ̀ mọ́ ìjọba", objective: "O3", notYet: "Kò dárúkọ ẹ̀ka tàbí ẹ̀tọ́ kankan, tàbí ó dárúkọ èyí tí kò tọ̀nà.", meets: "Ó dárúkọ ẹ̀ka tàbí ẹ̀tọ́ tí ó kàn, ó sì ṣàlàyé ìdí rẹ̀ ní gbólóhùn kan.", exceeds: "Ó tún fúnni ní àpẹẹrẹ àyẹ̀wò àti ìdọ́gba agbára tàbí ẹ̀tọ́ kan tí à ń lò lónìí." },
      { name: "Kíka dátà", objective: "O5", notYet: "Kò parí ìdálẹ́kọ̀ọ́ gíráàfù nínú Ẹ̀kọ́ 5.", meets: "Ó parí ìdálẹ́kọ̀ọ́ gíráàfù Ẹ̀kọ́ 5 pẹ̀lú ìparí èrò tí ó dúró nínú dátà.", exceeds: "Ó tún ṣàlàyé ìyípadà owó kan nípa lílo ìpèsè àti ìbéèrè." },
      { name: "Ètò ìkẹ́kọ̀ọ́", objective: "O1", notYet: "Kò sí ètò ìkẹ́kọ̀ọ́, tàbí kò sí ọjọ́.", meets: "Ètò ìkẹ́kọ̀ọ́ tí ó ní ó kéré tán ọjọ́ kan lọ́sẹ̀ títí di ọ̀sẹ̀ ìdánwò tí a yàn.", exceeds: "Ó tún ní ọjọ́ fún GED Ready tàbí ọjọ́ ìdánwò tí a ti forúkọ sílẹ̀ fún." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì gba \"Ó tó\" tàbí jù bẹ́ẹ̀ lọ lórí gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe GED Ready tàbí ìdánwò àpẹẹrẹ ọ̀fẹ́ ged.com láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ fún ìdánwò GED Social Studies tàbí yege rẹ̀ láàárín ọjọ́ 90 (gẹ́gẹ́ bí wọ́n ṣe sọ fúnra wọn)",
      "Àwọn ètò alábàáṣiṣẹ́pọ̀ ń ròyìn pé àwọn akẹ́kọ̀ọ́ púpọ̀ sí i ń parí ẹ̀ka GED mẹ́rẹ̀ẹ̀rin, wọ́n sì ń tẹ̀síwájú sí ìdálẹ́kọ̀ọ́ iṣẹ́ tàbí kọ́lẹ́ẹ̀jì"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù, tablet tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì, tàbí àwọn ẹ̀kọ́ tí a tẹ̀ jáde",
      "Ìwé àti kálámù fún ìdáhùn ìdálẹ́kọ̀ọ́ àti ìwé ìtúpalẹ̀ orísun",
      "Ẹ̀dà Preamble àti Bill of Rights láti archives.gov, tí a tẹ̀ jáde tàbí lórí ojú-iboju",
      "Ìdánwò àpẹẹrẹ ọ̀fẹ́ ged.com; GED Ready tí akẹ́kọ̀ọ́ bá yàn láti rà á",
      "Nǹkan bí ìṣẹ́jú 90 fún ẹ̀kọ́ àti ìdánwò, pẹ̀lú nǹkan bí ìṣẹ́jú 45 fún iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Bẹ̀rẹ̀ pẹ̀lú ìdánwò ṣáájú àti ìdánwò àpẹẹrẹ Social Studies ọ̀fẹ́ ged.com láti mọ ẹ̀ka ọgbọ́n tí akẹ́kọ̀ọ́ kọ̀ọ̀kan nílò jù.",
      "Ẹ jọ ka Preamble sókè, kí ẹ sì sọ àfojúsùn kọ̀ọ̀kan ní ọ̀rọ̀ ojoojúmọ́ kí àwọn akẹ́kọ̀ọ́ tó kọ ìwé wọn.",
      "Má ṣe gbè sí ẹ̀gbẹ́ kankan nínú ọ̀rọ̀ òṣèlú: kọ́ni bí ìjọba ṣe ń ṣiṣẹ́ àti bí a ṣe ń díwọ̀n ẹ̀rí, kì í ṣe ẹ̀gbẹ́ tí a ó gbè.",
      "Lo àtẹ gidi ti agbègbè (fún àpẹẹrẹ dátà iṣẹ́ tàbí owó ilé ní county) fún ìdálẹ́kọ̀ọ́ gíráàfù síwájú sí i, kí o sì ṣàyẹ̀wò àwọn nọ́mbà lórí orísun gidi.",
      "Ṣàyẹ̀wò ìdánwò tí ìpínlẹ̀ rẹ ń lò (GED tàbí HiSET), kí o sì sọ àwọn ibi ìdánwò àdúgbò àti ìrànlọ́wọ́ owó tí ó bá wà."
    ]
  }
};
