"use strict";

// Koach Learn course (Yoruba translation of shared/quality-six-sigma-yellow-belt.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const ASQ = { name: "ASQ: Certified Six Sigma Yellow Belt (ohun tí wọ́n ń béèrè, ìdánwò àti Body of Knowledge)", url: "https://www.asq.org/cert/six-sigma-yellow-belt" };
const IASSC = { name: "IASSC: Certified Lean Six Sigma Yellow Belt (ICYB)", url: "https://www.iassc.org/six-sigma-certification/yellow-belt-certification/" };

module.exports = {
  id: "quality-six-sigma-yellow-belt-yo",
  lang: "yo",
  translationOf: "quality-six-sigma-yellow-belt",
  category: "Workforce Development",
  name: "Ìpìlẹ̀ Dídára Iṣẹ́ (Ìmúrasílẹ̀ fún Six Sigma Yellow Belt)",
  skills: "Lílo àwọn ìgbésẹ̀ DMAIC, Kíkọ àlàyé ìṣòro, Gbígba dátà sórí check sheet, Wíwá gbòǹgbò ìṣòro pẹ̀lú Pareto àti 5 Whys, Yíyọ ìfiṣòfò kúrò àti dídi èrè mú, Ṣíṣètò fún ìdánwò Yellow Belt",
  outcome: "ṣe àtúnṣe dídára kékeré kan sí ọ̀nà iṣẹ́ gidi pẹ̀lú ìgbésẹ̀ DMAIC márùn-ún (Define, Measure, Analyze, Improve, Control), fi í hàn lójú ìwé kan, kí o sì tẹ̀lé ètò tí ó ní ọjọ́ láti múra sílẹ̀ fún ìdánwò Six Sigma Yellow Belt.",
  about: [
    "Gbogbo ibi iṣẹ́ ló ní ọ̀nà iṣẹ́ tí ó máa ń bàjẹ́: ọjà tí ó pẹ́ dé, ìwé owó (invoice) tí kò tọ́, ìdúró pípẹ́, ẹ̀yà tí kò bá ara wọn mu. Six Sigma jẹ́ ọ̀nà láti tún wọn ṣe pẹ̀lú òtítọ́ dípò àfojúdá, Lean sì jẹ́ ọ̀nà láti yọ àwọn ìgbésẹ̀ tí kò wúlò kúrò. Àwọn agbanisíṣẹ́ ní ilé-iṣẹ́ ìṣelọ́pọ̀, ilé ìkẹ́rùsí, ètò ìlera, ìjọba, ilé ìtura àti ọ́fíìsì ń wá àwọn tí ó mọ ìpìlẹ̀ rẹ̀.",
    "Ẹ̀kọ́ yìí wà fún àwọn tí ń wá iṣẹ́, àwọn òṣìṣẹ́ iwájú tí ó fẹ́ gòkè, àwọn ológun tẹ́lẹ̀ (veterans) tí ń lọ sí iṣẹ́ ìṣàkóso iṣẹ́ aráàlú, àti àwọn tí ó ní iṣẹ́ òwò kékeré. O kò nílò ìṣirò kankan ju àròpọ̀, pínpín àti ìdá-ọgọ́rùn-ún (percent) lọ.",
    "O máa yan ọ̀nà iṣẹ́ gidi kan láti ibi iṣẹ́ rẹ, òwò rẹ tàbí ilé rẹ, o sì máa tún un ṣe ní ìgbésẹ̀-ìgbésẹ̀, ìgbésẹ̀ DMAIC kan nínú ẹ̀kọ́ kọ̀ọ̀kan. Ẹ̀kọ́ yìí ń MÚRA ọ SÍLẸ̀ fún ìdánwò Yellow Belt, bí ASQ Certified Six Sigma Yellow Belt tàbí IASSC Certified Lean Six Sigma Yellow Belt; kò fúnni ní ìwé-ẹ̀rí. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" àti àyẹ̀wò kíákíá ìbéèrè méjì. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe iṣẹ́ àtúnṣe ojú ìwé kan fún ọ̀nà iṣẹ́ gidi kan: àlàyé ìṣòro àti àfojúsùn, àwòrán ọ̀nà iṣẹ́ tó rọrùn, check sheet tí ó ní ó kéré tán dátà 20 àti ìwọ̀n àbùkù, àwòrán Pareto àti 5 Whys fún ìṣòro tó tóbi jù, àtúnṣe kékeré kan tí o dán wò, àti àyẹ̀wò ìṣàkóso láti di èrè náà mú. Fi ètò ẹ̀kọ́-àti-ìdánwò tí ó ní ọjọ́ kún un fún ìdánwò Yellow Belt tí o yàn, pẹ̀lú ojú-òpó àṣẹ wọn (official page) tí o ti ṣàyẹ̀wò àwọn òfin rẹ̀ lọ́wọ́lọ́wọ́.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà àti ọ̀dọ́ tí ń wá iṣẹ́ tàbí ìgbéga nínú ìṣàkóso iṣẹ́, ìṣelọ́pọ̀, ilé ìkẹ́rùsí, ọ́fíìsì ìlera, ilé ìtura àti ìjọba; àwọn ológun tẹ́lẹ̀ tí ń lọ sí iṣẹ́ ìṣàkóso àti dídára iṣẹ́ aráàlú; àwọn tí ó ní òwò kékeré tí ó fẹ́ àṣìṣe díẹ̀ àti ìfiṣòfò díẹ̀.",
    startingPoint: "Ọ̀pọ̀ ti rí i tí ìṣòro ń tún ṣẹlẹ̀ níbi iṣẹ́, wọ́n sì ní èrò láti tún un ṣe, ṣùgbọ́n wọn kò tíì lo ọ̀nà tí ó ní ètò, wọn kò mọ̀ọ́mọ̀ gba dátà rí, wọn kò sì tíì lo ọ̀rọ̀ dídára bí àbùkù (defect), gbòǹgbò ìṣòro (root cause) tàbí DMAIC. Ìṣirò wọn wà ní ìpele ojoojúmọ́: kíkà, pínpín àti ìdá-ọgọ́rùn-ún.",
    gap: "Ọgbọ́n dídára iṣẹ́ àti àtúnṣe tí kò dúró máa ń hàn nínú ọ̀pọ̀ ìpolówó iṣẹ́, Yellow Belt sì jẹ́ ìwé-ẹ̀rí àkọ́kọ́ tí ó wọ́pọ̀. Àwọn akẹ́kọ̀ọ́ nílò láti ṣe àtúnṣe kékeré pẹ̀lú òtítọ́ kí wọ́n sì fi í hàn lójú ìwé kan, èyí tí wọ́n lè sọ̀rọ̀ nípa rẹ̀ nínú ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́, kí wọ́n sì mọ àwọn ìgbésẹ̀ gidi sí ìdánwò tí a mọ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé ọ̀rọ̀ dídára kọ̀ọ̀kan ní ìgbà àkọ́kọ́",
      "Ẹ̀rọ: ìwé àti gègé tó; spreadsheet ọ̀fẹ́ (Google Sheets tàbí Excel) ń ràn lọ́wọ́ fún àwọn àwòrán",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, pẹ̀lú nǹkan bí ọ̀sẹ̀ kan sí méjì fún gbígba dátà fún iṣẹ́ ìkẹyìn",
      "Òfin, ìrísí àti owó ìdánwò ń yí padà, wọ́n sì yàtọ̀ láti àjọ kan sí òmíràn; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ojú-òpó àṣẹ wọn",
      "Kò sí orúkọ oníbàárà, ìsọfúnni aláìsàn tàbí àṣírí ilé-iṣẹ́ nínú dátà àṣeṣe"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí kò ní ìgboyà nínú ìdá-ọgọ́rùn-ún lè kọ́kọ́ ṣe \"Everyday Math\", \"Excel and Spreadsheets\" sì ń ràn lọ́wọ́ fún àwọn àwòrán."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àlàyé iṣẹ́ àtúnṣe kan", action: "dárúkọ ìgbésẹ̀ DMAIC márùn-ún ní ìtòlẹ́sẹẹsẹ, kí o sì sọ ohun tí ó ń ṣẹlẹ̀ nínú ọ̀kọ̀ọ̀kan", standard: "kí gbogbo márùn-ún sì tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní ọ̀nà iṣẹ́ tí ìṣòro kan ń tún ṣẹlẹ̀ nínú rẹ̀", action: "kọ àlàyé ìṣòro àti àfojúsùn tí a lè wọ̀n, kí o sì ya àwòrán ọ̀nà iṣẹ́ tó rọrùn", standard: "pẹ̀lú kí ni, níbo, ìgbà wo àti bí ó ti tóbi tó, láìsí ìdí tàbí ojútùú nínú àlàyé náà" },
    { id: "O3", condition: "Tí a bá fún ọ ní ọ̀nà iṣẹ́ láti máa wò fún ọ̀sẹ̀ kan sí méjì", action: "gba dátà sórí check sheet kí o sì ṣírò ìwọ̀n àbùkù", standard: "pẹ̀lú ó kéré tán dátà 20, kí ìṣirò náà sì hàn" },
    { id: "O4", condition: "Tí o bá ní dátà check sheet rẹ", action: "wá ìṣòro tó tóbi jù pẹ̀lú àwòrán Pareto, kí o sì walẹ̀ dé gbòǹgbò rẹ̀ pẹ̀lú 5 Whys", standard: "kí ìdí tí o rí jẹ́ èyí tí ẹgbẹ́ lè ṣe nǹkan nípa rẹ̀" },
    { id: "O5", condition: "Tí o bá ti rí gbòǹgbò ìṣòro", action: "yan àtúnṣe tí ó ń yọ ìfiṣòfò tàbí àṣìṣe kúrò, dán an wò ní ìwọ̀n kékeré, kí o sì ṣètò àyẹ̀wò ìṣàkóso", standard: "pẹ̀lú dátà ṣáájú àti lẹ́yìn àtúnṣe náà" },
    { id: "O6", condition: "Nípa lílo ojú-òpó àṣẹ ASQ tàbí IASSC", action: "ṣe ètò ẹ̀kọ́-àti-ìdánwò tí ó ní ọjọ́ fún ìdánwò Yellow Belt", standard: "pẹ̀lú ìrísí àti òfin ìdánwò tí o ti ṣàyẹ̀wò lórí ojú-òpó yẹn" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣàlàyé ìṣòro náà kí o sì wọ̀n ọ́n",
      lessons: [
        {
          title: "Dídára iṣẹ́, Six Sigma àti ìgbésẹ̀ DMAIC márùn-ún",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dárúkọ ìgbésẹ̀ DMAIC márùn-ún kí o sì sọ ohun tí Yellow Belt ń ṣe nínú ọ̀kọ̀ọ̀kan.",
          text: [
            "Dídára iṣẹ́ (quality) túmọ̀ sí fífún oníbàárà ní ohun tí ó nílò, ní ọ̀nà kan náà, ní gbogbo ìgbà. Àbùkù (defect) ni ohunkóhun tí oníbàárà kò ní gbà: ọjà tí kò tọ́, ìfijíṣẹ́ tí ó pẹ́, ẹ̀yà tí ó sọnù, àṣìṣe nínú ìwé owó.",
            "Six Sigma jẹ́ ọ̀nà láti dín àbùkù kù nípa lílo dátà dípò àfojúdá. Lean jẹ́ ọ̀nà láti dín ìfiṣòfò kù, ìyẹn àwọn ìgbésẹ̀ tí ó ń gba àkókò ṣùgbọ́n tí kò fi iye kún un. Ọ̀pọ̀ agbanisíṣẹ́ ń kọ́ wọn papọ̀ gẹ́gẹ́ bí Lean Six Sigma.",
            "Àwọn iṣẹ́ àtúnṣe ń tẹ̀lé ìgbésẹ̀ márùn-ún tí a ń pè ní DMAIC: Define (ṣàlàyé ìṣòro), Measure (wọ̀n bí ó ti tóbi tó), Analyze (ṣàyẹ̀wò láti rí gbòǹgbò ìṣòro), Improve (tún un ṣe nípa dídán àtúnṣe wò), àti Control (ṣàkóso láti di èrè mú). Belt ń fi ìpele ìdálẹ́kọ̀ọ́ hàn: Yellow Belt mọ ìpìlẹ̀, ó sì ń ràn lọ́wọ́ nínú iṣẹ́ àtúnṣe, ní ọ̀pọ̀ ìgbà nípa gbígba dátà àti yíya àwòrán ìgbésẹ̀; Green Belt àti Black Belt ń darí iṣẹ́ tí ó tóbi jù.",
            "Ìwé-ẹ̀rí Yellow Belt méjì tí a mọ̀ dáadáa ni ASQ Certified Six Sigma Yellow Belt àti IASSC Certified Lean Six Sigma Yellow Belt. Ẹ̀kọ́ yìí ń múra ọ sílẹ̀; àjọ tí ń fúnni ní ìwé-ẹ̀rí nìkan ló lè fún ọ ní ìwé-ẹ̀rí náà."
          ],
          steps: ["Define: kí ni ìṣòro náà àti àfojúsùn?", "Measure: ìgbà mélòó ni ó ń ṣẹlẹ̀ báyìí?", "Analyze: kí ni gbòǹgbò ìṣòro náà?", "Improve: àtúnṣe wo ló ṣiṣẹ́ nígbà tí o dán an wò?", "Control: báwo ni o ṣe máa di èrè náà mú?"],
          words: [["Àbùkù (defect)", "ohunkóhun tí oníbàárà kò ní gbà, bí ọjà tí kò tọ́, tí ó pẹ́ tàbí tí ó bàjẹ́."], ["Six Sigma", "ọ̀nà láti dín àbùkù kù nípa lílo dátà; dídára tí ó ga gan-an túmọ̀ sí nǹkan bí àbùkù 3.4 nínú àǹfààní mílíọ̀nù kan."], ["Lean", "ọ̀nà láti yọ àwọn ìgbésẹ̀ tí ó ń fi àkókò tàbí ohun èlò ṣòfò kúrò."], ["DMAIC", "Define, Measure, Analyze, Improve, Control: ìgbésẹ̀ márùn-ún iṣẹ́ Six Sigma."], ["Yellow Belt", "ẹni tí a kọ́ ní ìpìlẹ̀, tí ó ń ràn lọ́wọ́ nínú iṣẹ́ àtúnṣe."]],
          slides: [
            { title: "Dídára iṣẹ́ àti àbùkù", bullets: ["Dídára: ohun tí oníbàárà nílò, ní ọ̀nà kan náà ní gbogbo ìgbà", "Àbùkù: ohunkóhun tí oníbàárà kò ní gbà"] },
            { title: "Six Sigma àti Lean", bullets: ["Six Sigma: àbùkù díẹ̀, pẹ̀lú dátà", "Lean: ìgbésẹ̀ ìfiṣòfò díẹ̀", "Papọ̀: Lean Six Sigma"] },
            { title: "DMAIC ní ìtòlẹ́sẹẹsẹ", bullets: ["Define: ṣàlàyé ìṣòro náà", "Measure: wọ̀n bí ó ti tóbi tó", "Analyze: wá gbòǹgbò ìṣòro", "Improve pẹ̀lú àtúnṣe tí a dán wò, lẹ́yìn náà Control láti di í mú"] },
            { title: "Belt àti ìwé-ẹ̀rí", bullets: ["Yellow Belt: mọ ìpìlẹ̀, ń ràn lọ́wọ́ nínú iṣẹ́ àtúnṣe", "ASQ àti IASSC ní ìdánwò Yellow Belt", "Ẹ̀kọ́ yìí ń múra ọ sílẹ̀; kò fún ọ ní ìwé-ẹ̀rí"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Yan ọ̀nà iṣẹ́ kan tí o mọ̀ tí ó máa ń bàjẹ́ jù, níbi iṣẹ́, nínú òwò tàbí nílé (fún àpẹẹrẹ ọjà tí a fi ránṣẹ́ pẹ́, oúnjẹ ọ̀sán tí a gbé wá lọ́nà àìtọ́, tàbí ìwé owó tí ó ní àṣìṣe). Kọ ọ́ sí òkè ìwé kan, lẹ́yìn náà kọ D, M, A, I, C sí ẹ̀gbẹ́, kí o sì kọ ìbéèrè kan tí o máa béèrè nínú ìgbésẹ̀ kọ̀ọ̀kan.",
          youCanNow: "dárúkọ ìgbésẹ̀ DMAIC márùn-ún ní ìtòlẹ́sẹẹsẹ, sọ ohun tí Yellow Belt ń ṣe, kí o sì yan ọ̀nà iṣẹ́ kan láti tún ṣe.",
          quickCheck: [
            { objective: "O1", q: "Èwo ni ìtòlẹ́sẹẹsẹ tó tọ́ fún ìgbésẹ̀ DMAIC?", options: ["Design, Make, Assess, Inspect, Close", "Measure, Define, Improve, Analyze, Control", "Define, Measure, Analyze, Improve, Control", "Define, Manage, Act, Improve, Check"], answer: 2, why: "DMAIC dúró fún Define, Measure, Analyze, Improve, Control, ní ìtòlẹ́sẹẹsẹ yẹn." },
            { objective: "O1", q: "Ẹgbẹ́ rẹ ń dán ọ̀nà tuntun láti di ọjà wò láti rí i bóyá àṣìṣe máa dín kù. Ìgbésẹ̀ wo nìyí?", options: ["Improve", "Define", "Measure", "Control"], answer: 0, why: "Dídán àtúnṣe wò láti rí i bóyá ó ṣiṣẹ́ ń ṣẹlẹ̀ nínú ìgbésẹ̀ Improve." }
          ]
        },
        {
          title: "Define: àlàyé ìṣòro àti àwòrán ọ̀nà iṣẹ́",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kọ àlàyé ìṣòro àti àfojúsùn, kí o sì ya àwòrán ọ̀nà iṣẹ́ tó rọrùn.",
          text: [
            "Iṣẹ́ àtúnṣe tó dára ń bẹ̀rẹ̀ pẹ̀lú àlàyé ìṣòro (problem statement) tí ó yé. Ó sọ ohun tí kò tọ́, níbo, láti ìgbà wo àti bí ó ti tóbi tó, àti ìdí tí ó fi ṣe pàtàkì. Kò tíì dárúkọ ìdí tàbí ojútùú, nítorí o kò tíì rí wọn. Àpẹẹrẹ: \"Láti oṣù June, 12 nínú gbogbo 100 oúnjẹ ọ̀sán ní ilé oúnjẹ àárín ìlú ń jáde lọ́nà àìtọ́, èyí sì ń fa dídá owó padà àti ẹ̀sùn.\"",
            "Àfojúsùn ń sọ bí ó ti máa dára sí i tó, àti ní ìgbà wo: \"Dín oúnjẹ ọ̀sán tí kò tọ́ kù sí 3 nínú gbogbo 100 ní òpin oṣù September.\"",
            "Lẹ́yìn náà, ya àwòrán ọ̀nà iṣẹ́ náà. Kọ ìgbésẹ̀ kọ̀ọ̀kan sínú àpótí láti ìbẹ̀rẹ̀ dé òpin, kí o sì so wọ́n pọ̀ pẹ̀lú ọfà. SIPOC jẹ́ tábìlì kíákíá ti àwòrán ńlá: Suppliers (olùpèsè), Inputs (ohun tí ó wọlé), Process (ìgbésẹ̀ iṣẹ́), Outputs (ohun tí ó jáde) àti Customers (oníbàárà). Ohùn oníbàárà (voice of the customer, VOC) ni ohun tí àwọn oníbàárà sọ pé wọ́n nílò; àwọn apá tí ó ṣe pàtàkì jù sí wọn ni a ń pè ní critical to quality (CTQ)."
          ],
          steps: ["Kọ ohun tí kò tọ́, níbo, láti ìgbà wo àti bí ó ti tóbi tó.", "Fi ìdí tí ó fi ṣe pàtàkì kún un (owó, àkókò, oníbàárà, ààbò).", "Ṣàyẹ̀wò: kò sí ìdí àti kò sí ojútùú nínú àlàyé náà.", "Kọ àfojúsùn tí ó ní nọ́mbà àti ọjọ́.", "Ya àwòrán ọ̀nà iṣẹ́ náà nínú àpótí 5 sí 8, láti ìbẹ̀rẹ̀ dé òpin."],
          words: [["Àlàyé ìṣòro (problem statement)", "àlàyé kúkúrú tí ó dá lórí òtítọ́ nípa ohun tí kò tọ́, níbo, ìgbà wo àti bí ó ti tóbi tó."], ["Àwòrán ọ̀nà iṣẹ́ (process map)", "àwòrán àwọn ìgbésẹ̀ ọ̀nà iṣẹ́ kan ní ìtòlẹ́sẹẹsẹ, pẹ̀lú àpótí àti ọfà."], ["SIPOC", "tábìlì ojú ìwé kan ti Suppliers, Inputs, Process, Outputs àti Customers."], ["Ohùn oníbàárà (VOC)", "ohun tí àwọn oníbàárà sọ pé wọ́n nílò tàbí tí wọ́n ń ṣàròyé nípa rẹ̀."], ["Critical to quality (CTQ)", "ẹ̀yà tí ó ṣe pàtàkì jù sí oníbàárà, bí dídé lásìkò tàbí títọ̀nà."]],
          slides: [
            { title: "Àlàyé ìṣòro tó dára", bullets: ["Kí ni, níbo, láti ìgbà wo, bí ó ti tóbi tó", "Ìdí tí ó fi ṣe pàtàkì", "Kò tíì sí ìdí tàbí ojútùú"] },
            { title: "Àfojúsùn tó dára", bullets: ["Bí ó ti máa dára sí i tó, àti ìgbà wo", "Àpẹẹrẹ: oúnjẹ tí kò tọ́ láti 12 sí 3 nínú 100 ní òpin September"] },
            { title: "Ya àwòrán ọ̀nà iṣẹ́", bullets: ["Àpótí 5 sí 8, láti ìbẹ̀rẹ̀ dé òpin", "Ọfà ń fi ìtòlẹ́sẹẹsẹ hàn", "SIPOC: Suppliers, Inputs, Process, Outputs, Customers"] },
            { title: "Fetí sí oníbàárà", bullets: ["Ohùn oníbàárà: ohun tí wọ́n nílò", "Critical to quality: ohun tí ó ṣe pàtàkì jù sí wọn"] }
          ],
          tryIt: "Fún ọ̀nà iṣẹ́ tí o yàn, kọ àlàyé ìṣòro pẹ̀lú kí ni, níbo, láti ìgbà wo àti bí ó ti tóbi tó (lo àfojúdá rẹ tó dára jù fún báyìí), àfojúsùn tí ó ní nọ́mbà àti ọjọ́, àti àwòrán ọ̀nà iṣẹ́ àpótí 5 sí 8 lórí ìwé.",
          youCanNow: "kọ àlàyé ìṣòro àti àfojúsùn, kí o sì ya àwòrán ọ̀nà iṣẹ́ náà tó rọrùn.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni àlàyé ìṣòro tó dára jù?", options: ["\"Alásè tuntun náà kò bìkítà.\"", "\"Láti oṣù March, 8 nínú gbogbo 50 ẹrù láti ilé ìkẹ́rùsí ìlà-oòrùn ń pẹ́ dé, èyí sì ń fa dídá owó padà fún oníbàárà.\"", "\"A nílò ètò kọ̀mpútà tuntun.\"", "\"Ìfiránṣẹ́ kò dára.\""], answer: 1, why: "Ó sọ kí ni, níbo, láti ìgbà wo àti bí ó ti tóbi tó, kò sì dá ẹnikẹ́ni lẹ́bi tàbí dárúkọ ojútùú." },
            { objective: "O2", q: "Kí ni P nínú SIPOC dúró fún?", options: ["Price", "People", "Plan", "Process"], answer: 3, why: "SIPOC ni Suppliers, Inputs, Process, Outputs àti Customers." }
          ]
        },
        {
          title: "Measure: check sheet àti ìwọ̀n àbùkù",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gba dátà sórí check sheet kí o sì ṣírò ìwọ̀n àbùkù.",
          text: [
            "Nínú ìgbésẹ̀ Measure, o máa wá bí ìṣòro náà ti ń ṣẹlẹ̀ tó ní tòótọ́. Àfojúdá sábà máa ń ṣìnà, nítorí náà o máa kà á.",
            "Check sheet jẹ́ fọ́ọ̀mù ìwé tàbí spreadsheet tó rọrùn. Ní ẹ̀gbẹ́, kọ irú àbùkù sílẹ̀ (ohun tí kò tọ́, ohun tí ó sọnù, pípẹ́). Ní òkè, kọ àwọn ọjọ́. Fa ìlà àmì ní gbogbo ìgbà tí ọ̀kan bá ṣẹlẹ̀, kí o sì ka iye gbogbo ohun tí o ṣàyẹ̀wò pẹ̀lú.",
            "Ìwọ̀n àbùkù (defect rate) ni iye ohun tí ó ní àbùkù pín sí iye gbogbo ohun, lẹ́ẹ̀mejì 100. Tí 15 nínú 200 ọjà bá jẹ́ àìtọ́: 15 / 200 = 0.075, tàbí 7.5%. Six Sigma tún ń lo DPMO, àbùkù nínú àǹfààní mílíọ̀nù kan: àbùkù pín sí (iye ohun lẹ́ẹ̀mejì àǹfààní fún ohun kọ̀ọ̀kan), lẹ́ẹ̀mejì 1,000,000. Tí ìwé owó 500 bá ní àǹfààní 4 fún àṣìṣe ní ọ̀kọ̀ọ̀kan, tí o sì rí àṣìṣe 10: 10 / (500 x 4) = 0.005, lẹ́ẹ̀mejì 1,000,000 = 5,000 DPMO.",
            "Máa wọ̀n ní ọ̀nà kan náà ní gbogbo ìgbà: ìtumọ̀ àbùkù kan náà, àkókò ọjọ́ kan náà, ẹni kan náà tàbí òfin tí ó yé. Èyí ni baseline rẹ, nọ́mbà \"ṣáájú\" tí o máa fi wé lẹ́yìn náà."
          ],
          steps: ["Kọ ìtumọ̀ tí ó yé fún àbùkù kọ̀ọ̀kan.", "Ṣe check sheet: irú àbùkù ní ẹ̀gbẹ́, àwọn ọjọ́ ní òkè.", "Fa ìlà àmì fún àbùkù kọ̀ọ̀kan kí o sì ka iye gbogbo ohun tí o ṣàyẹ̀wò.", "Ìwọ̀n àbùkù = ohun tí ó ní àbùkù / gbogbo ohun x 100.", "Kọ èyí sílẹ̀ gẹ́gẹ́ bí baseline rẹ."],
          words: [["Check sheet", "fọ́ọ̀mù tó rọrùn fún kíka bí irú ìṣòro kọ̀ọ̀kan ti ń ṣẹlẹ̀ tó."], ["Ìwọ̀n àbùkù (defect rate)", "ìpín àwọn ohun tí ó ní àbùkù, tí a fi hàn ní ìdá-ọgọ́rùn-ún (%)."], ["DPMO", "àbùkù nínú àǹfààní mílíọ̀nù kan: àbùkù / (iye ohun x àǹfààní fún ohun kọ̀ọ̀kan) x 1,000,000."], ["Baseline", "bí ọ̀nà iṣẹ́ náà ti ń ṣiṣẹ́ ṣáájú kí o tó yí i padà."]],
          slides: [
            { title: "Kà á, má ṣe fojú dá a", bullets: ["Wọ̀n bí ìṣòro náà ti ń ṣẹlẹ̀ tó", "Lo ìtumọ̀ àbùkù kan tí ó yé"] },
            { title: "Check sheet", bullets: ["Irú àbùkù ní ẹ̀gbẹ́", "Àwọn ọjọ́ ní òkè", "Ìlà àmì, pẹ̀lú iye gbogbo ohun tí o ṣàyẹ̀wò"] },
            { title: "Ìṣirò náà", bullets: ["Ìwọ̀n àbùkù = ohun tí ó ní àbùkù / gbogbo ohun x 100", "15 tí kò tọ́ nínú 200 = 7.5%", "DPMO = àbùkù / (iye ohun x àǹfààní) x 1,000,000"] },
            { title: "Baseline rẹ", bullets: ["Nọ́mbà \"ṣáájú\"", "Máa wọ̀n ní ọ̀nà kan náà ní gbogbo ìgbà", "O máa fi wé e lẹ́yìn àtúnṣe"] }
          ],
          tryIt: "Ṣe check sheet fún ọ̀nà iṣẹ́ rẹ lórí ìwé tàbí nínú spreadsheet. Gba ó kéré tán dátà 20 ní ọ̀sẹ̀ tí ń bọ̀ (bẹ̀rẹ̀ lónìí), lẹ́yìn náà ṣírò ìwọ̀n àbùkù rẹ kí o sì fi ìṣirò náà hàn. Ṣe àṣeṣe báyìí: ìfijíṣẹ́ 9 tí ó pẹ́ nínú 150 jẹ́ ìdá-ọgọ́rùn-ún mélòó? (Ìdáhùn: 9 / 150 = 0.06 = 6%.)",
          youCanNow: "gba dátà sórí check sheet, ṣírò ìwọ̀n àbùkù, kí o sì ṣètò baseline rẹ.",
          quickCheck: [
            { objective: "O3", q: "O ṣàyẹ̀wò ọjà 80, 4 sì jẹ́ àìtọ́. Kí ni ìwọ̀n àbùkù?", options: ["5%", "4%", "20%", "8%"], answer: 0, why: "4 / 80 = 0.05, èyí tí ó jẹ́ 5%." },
            { objective: "O3", q: "Kí nìdí tí o fi ń kọ ìtumọ̀ kan tí ó yé fún àbùkù kọ̀ọ̀kan kí o tó bẹ̀rẹ̀ sí kà?", options: ["Kí àwòrán náà lè lẹ́wà sí i", "Kí ọ̀gá lè buwọ́ lù ú", "Kí gbogbo ènìyàn lè kà á ní ọ̀nà kan náà, kí a sì lè gbẹ́kẹ̀lé àwọn nọ́mbà náà", "Kí o lè nílò dátà díẹ̀"], answer: 2, why: "Tí àwọn ènìyàn bá ń ka nǹkan tí ó yàtọ̀, a kò lè fi dátà náà wéra tàbí gbẹ́kẹ̀lé e." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣàlàyé ìṣòro náà kí o sì wọ̀n ọ́n",
        questions: [
          { objective: "O1", q: "Nínú ìgbésẹ̀ DMAIC wo ni o ti ń wá gbòǹgbò ìṣòro?", options: ["Define", "Analyze", "Control", "Measure"], answer: 1, why: "Analyze ni ibi tí o ti ń lo dátà àti irinṣẹ́ láti rí gbòǹgbò ìṣòro." },
          { objective: "O1", q: "Kí ni Yellow Belt sábà máa ń ṣe nínú iṣẹ́ àtúnṣe?", options: ["Òun ló ni ilé-iṣẹ́ náà", "Òun ló ń fúnni ní ìwé-ẹ̀rí", "Òun nìkan ló ń fọwọ́ sí ìnáwó", "Ó ń ràn lọ́wọ́ nínú iṣẹ́ bí gbígba dátà àti yíya àwòrán ìgbésẹ̀"], answer: 3, why: "Yellow Belt mọ ìpìlẹ̀, ó sì ń ṣèrànwọ́ fún iṣẹ́ àtúnṣe, ní ọ̀pọ̀ ìgbà nípa gbígba dátà àti yíya àwòrán ọ̀nà iṣẹ́." },
          { objective: "O2", q: "Àlàyé ìṣòro kan sọ pé, \"Àṣìṣe ń ṣẹlẹ̀ nítorí òṣìṣẹ́ kò bìkítà.\" Kí ni ó burú nínú rẹ̀?", options: ["Ó dá ìdí kan lẹ́bi kí a tó gba dátà kankan", "Ó kúrú jù láti kà", "Ó lo nọ́mbà", "Kò sí ohun tí ó burú"], answer: 0, why: "Àlàyé ìṣòro ń ṣàpèjúwe ìṣòro náà pẹ̀lú òtítọ́; a máa rí ìdí rẹ̀ lẹ́yìn náà, nínú Analyze." },
          { objective: "O3", q: "O ṣàyẹ̀wò fọ́ọ̀mù 250, o sì rí 10 tí ó ní àṣìṣe. Kí ni ìwọ̀n àbùkù?", options: ["10%", "2.5%", "4%", "25%"], answer: 2, why: "10 / 250 = 0.04, èyí tí ó jẹ́ 4%." },
          { objective: "O3", q: "Kí ni baseline?", options: ["Àfojúsùn tí o fẹ́ dé", "Ìlà ìsàlẹ̀ lórí àwòrán", "Ìròyìn ìkẹyìn", "Bí ọ̀nà iṣẹ́ náà ti ń ṣiṣẹ́ ṣáájú kí o tó yí i padà"], answer: 3, why: "Baseline ni nọ́mbà \"ṣáájú\" tí o máa fi wé lẹ́yìn àtúnṣe." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣàyẹ̀wò, tún ṣe, kí o sì ṣàkóso",
      lessons: [
        {
          title: "Analyze: àwòrán Pareto, fishbone àti 5 Whys",
          objectives: ["O4"],
          minutes: 6,
          goal: "Wá ìṣòro tó tóbi jù pẹ̀lú àwòrán Pareto àti gbòǹgbò rẹ̀ pẹ̀lú 5 Whys.",
          text: [
            "Àwòrán Pareto (Pareto chart) jẹ́ àwòrán ọ̀pá tí a tò láti ọ̀pá tó tóbi jù dé èyí tó kéré jù. Ó fi hàn pé ìdí díẹ̀ ló sábà máa ń fa èyí tó pọ̀ jù nínú ìṣòro, èyí tí a ń pè ní òfin 80/20. Bẹ̀rẹ̀ pẹ̀lú ọ̀pá tó tóbi jù.",
            "Àwòrán fishbone (egungun ẹja; a tún ń pè é ní cause-and-effect tàbí Ishikawa) ń ran ẹgbẹ́ lọ́wọ́ láti kọ àwọn ìdí tí ó ṣeé ṣe sílẹ̀. Kọ ìṣòro náà sí \"orí\", lẹ́yìn náà fa egungun fún àwọn ẹgbẹ́ ìdí, bí Methods (ọ̀nà), Machines (ẹ̀rọ), Materials (ohun èlò), People (ènìyàn), Measurement (ìwọ̀n) àti Environment (àyíká).",
            "Lẹ́yìn náà, béèrè \"Kí nìdí?\" ní nǹkan bí ìgbà márùn-ún láti walẹ̀ láti àmì ìṣòro dé gbòǹgbò tí o lè tún ṣe. Àpẹẹrẹ: Oúnjẹ tí a gbé wá kò tọ́. Kí nìdí? Alásè ka tíkẹ́ẹ̀tì ní àṣìṣe. Kí nìdí? Ọwọ́ ni a fi kọ tíkẹ́ẹ̀tì náà. Kí nìdí? Ẹ̀rọ ìtẹ̀wé ti bàjẹ́. Kí nìdí? Kò sí ẹni tí ó ń bójú tó títún un ṣe. Kí nìdí? Kò sí àyẹ̀wò ìtọ́jú. Gbòǹgbò ìṣòro: kò sí àyẹ̀wò ìtọ́jú fún ẹ̀rọ ìtẹ̀wé.",
            "Dídá ẹnìkan lẹ́bi kì í ṣe gbòǹgbò ìṣòro. Tí ìdáhùn bá jẹ́ \"ẹnìkan kò ṣọ́ra\", máa béèrè síwájú sí i ìdí tí ọ̀nà iṣẹ́ náà fi jẹ́ kí àṣìṣe náà ṣẹlẹ̀."
          ],
          steps: ["Ṣe àròpọ̀ irú àbùkù kọ̀ọ̀kan láti inú check sheet rẹ.", "Tò wọ́n láti tó tóbi jù dé tó kéré jù kí o sì fa àwọn ọ̀pá.", "Yan ọ̀pá tó tóbi jù.", "Kọ àwọn ìdí tí ó ṣeé ṣe sórí fishbone.", "Béèrè \"Kí nìdí?\" ní nǹkan bí ìgbà márùn-ún títí o fi dé ìdí tí o lè ṣe nǹkan nípa rẹ̀."],
          words: [["Àwòrán Pareto (Pareto chart)", "àwòrán ọ̀pá tí a tò láti tó tóbi jù dé tó kéré jù, láti fi hàn àwọn ìṣòro díẹ̀ tí ó ṣe pàtàkì jù."], ["Òfin 80/20", "àpẹẹrẹ pé ìdí díẹ̀ sábà máa ń fa èyí tó pọ̀ jù nínú ìṣòro."], ["Àwòrán fishbone", "àwòrán tí ó ń kó àwọn ìdí tí ó ṣeé ṣe fún ìṣòro kan jọ sí ẹgbẹ́; a tún ń pè é ní Ishikawa."], ["Gbòǹgbò ìṣòro (root cause)", "ìdí gidi tí ìṣòro kan fi ń ṣẹlẹ̀; tí o bá tún un ṣe, ìṣòro náà máa dúró tàbí dín kù."], ["5 Whys", "bíbéèrè \"Kí nìdí?\" léraléra, ní nǹkan bí ìgbà márùn-ún, láti dé gbòǹgbò ìṣòro."]],
          slides: [
            { title: "Àwòrán Pareto", bullets: ["Ọ̀pá tí a tò láti tó tóbi jù dé tó kéré jù", "Ìdí díẹ̀ ló ń fa ìṣòro tó pọ̀ jù (80/20)", "Bẹ̀rẹ̀ pẹ̀lú ọ̀pá tó tóbi jù"] },
            { title: "Àwòrán fishbone", bullets: ["Ìṣòro wà ní orí", "Egungun: Methods, Machines, Materials, People, Measurement, Environment"] },
            { title: "5 Whys", bullets: ["Béèrè \"Kí nìdí?\" ní nǹkan bí ìgbà márùn-ún", "Oúnjẹ tí kò tọ́, tíkẹ́ẹ̀tì tí a fi ọwọ́ kọ, ẹ̀rọ ìtẹ̀wé tí ó bàjẹ́, kò sí àyẹ̀wò"] },
            { title: "Ẹ̀bi kì í ṣe gbòǹgbò ìṣòro", bullets: ["Béèrè ìdí tí ọ̀nà iṣẹ́ fi jẹ́ kí àṣìṣe náà ṣẹlẹ̀", "Wá ìdí tí o lè ṣe nǹkan nípa rẹ̀"] }
          ],
          tryIt: "Ṣe àròpọ̀ irú àbùkù kọ̀ọ̀kan láti inú check sheet rẹ, tò wọ́n, kí o sì ya àwòrán Pareto lórí ìwé tàbí nínú spreadsheet. Lẹ́yìn náà kọ 5 Whys fún ọ̀pá tó tóbi jù. Dúró nígbà tí o bá dé ìdí tí o lè tún ṣe tí kò sì dá ènìyàn kan lẹ́bi.",
          youCanNow: "ya àwòrán Pareto, yan ìṣòro tó tóbi jù, kí o sì walẹ̀ dé gbòǹgbò rẹ̀ pẹ̀lú 5 Whys.",
          quickCheck: [
            { objective: "O4", q: "Àwòrán Pareto rẹ fi hàn: ìwọ̀n tí kò tọ́ 40, ohun tí ó sọnù 25, pípẹ́ 10, bíbàjẹ́ 5. Níbo ni o máa bẹ̀rẹ̀?", options: ["Bíbàjẹ́, nítorí ó rọrùn jù", "Gbogbo mẹ́rin lẹ́ẹ̀kan náà", "Pípẹ́, nítorí àwọn oníbàárà kò fẹ́ dúró", "Ìwọ̀n tí kò tọ́, ọ̀pá tó tóbi jù"], answer: 3, why: "Àwòrán Pareto ń sọ fún ọ pé kí o bẹ̀rẹ̀ pẹ̀lú ọ̀pá tó tóbi jù, níbi tí àtúnṣe ti máa ṣèrànwọ́ jù." },
            { objective: "O4", q: "5 Whys rẹ parí sí \"òṣìṣẹ́ náà kò ṣọ́ra\". Kí ni o yẹ kí o ṣe?", options: ["Dúró síbẹ̀ kí o sì kọ ẹ̀sùn sí òṣìṣẹ́ náà", "Máa béèrè síwájú ìdí tí ọ̀nà iṣẹ́ fi jẹ́ kí àṣìṣe náà ṣẹlẹ̀", "Bẹ̀rẹ̀ iṣẹ́ àtúnṣe tuntun", "Yọ òṣìṣẹ́ náà kúrò lórí àwòrán"], answer: 1, why: "Ẹ̀bi kì í ṣe gbòǹgbò ìṣòro; wá ohun tí ó wà nínú ọ̀nà iṣẹ́ tí ó jẹ́ kí àṣìṣe náà ṣẹlẹ̀." }
          ]
        },
        {
          title: "Improve: yọ ìfiṣòfò kúrò kí o sì dènà àṣìṣe",
          objectives: ["O5"],
          minutes: 5,
          goal: "Yan àtúnṣe tí ó ń yọ ìfiṣòfò tàbí àṣìṣe kúrò kí o sì dán an wò ní ìwọ̀n kékeré.",
          text: [
            "Lean dárúkọ irú ìfiṣòfò (waste) mẹ́jọ. Ọ̀nà tí ó rọrùn láti rántí wọn ni DOWNTIME: Defects (àbùkù), Overproduction (ṣíṣe jù), Waiting (ìdúró), Non-used talent (ẹ̀bùn tí a kò lò), Transportation (gbígbé ẹrù), Inventory (ọjà tí ó pọ̀ jù nílẹ̀), Motion (rírìn tàbí nínàwọ́ tí kò pọn dandan) àti Extra processing (iṣẹ́ àfikún).",
            "Àtúnṣe tó dára sábà máa ń sọ ọ̀nà tó tọ́ di ọ̀nà tó rọrùn. 5S ń ṣètò ibi iṣẹ́: Sort (ṣà á), Set in order (tò ó), Shine (fọ̀ ọ́ mọ́), Standardize (ṣe é bákan náà), Sustain (máa bá a lọ). Ìdènà àṣìṣe (poka-yoke ní èdè Japanese) ń mú kí àṣìṣe ṣòro tàbí kí ó má ṣeé ṣe, bí plọ́ọ̀gì tí ó wọ ọ̀nà kan ṣoṣo, fọ́ọ̀mù tí kò ní lọ tí àpótí kan bá ṣófo, tàbí àpò tí a fi àwọ̀ sàmì sí.",
            "Kọ́kọ́ dán àtúnṣe náà wò ní ìwọ̀n kékeré: ìyípo iṣẹ́ kan, tábìlì kan tàbí ọ̀sẹ̀ kan. Èyí ni pilot (ìdánwò kékeré). Wọ̀n ọ́n ní ọ̀nà kan náà bí baseline rẹ kí o sì fi wéra. Tí àwọn nọ́mbà bá dára sí i, lò ó níbi gbogbo; tí kò bá rí bẹ́ẹ̀, gbìyànjú èrò tó kàn."
          ],
          steps: ["Kọ àwọn àtúnṣe tí ó kọlu gbòǹgbò ìṣòro sílẹ̀.", "Yan àtúnṣe tí ó ń yọ ìfiṣòfò kúrò tàbí tí ó ń mú kí àṣìṣe ṣòro.", "Ṣe pilot kékeré: ìyípo iṣẹ́ kan, tábìlì kan tàbí ọ̀sẹ̀ kan.", "Wọ̀n ọ́n ní ọ̀nà kan náà bí baseline.", "Fi ṣáájú àti lẹ́yìn wéra."],
          words: [["Ìfiṣòfò (waste)", "ìgbésẹ̀ èyíkéyìí tí ó ń lo àkókò tàbí ohun èlò ṣùgbọ́n tí kò fi iye kún un fún oníbàárà."], ["DOWNTIME", "ọ̀nà ìrántí fún ìfiṣòfò mẹ́jọ: Defects, Overproduction, Waiting, Non-used talent, Transportation, Inventory, Motion, Extra processing."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain: ọ̀nà láti ṣètò ibi iṣẹ́."], ["Ìdènà àṣìṣe (poka-yoke)", "ìṣètò tí ó ń mú kí àṣìṣe ṣòro tàbí kí ó má ṣeé ṣe."], ["Pilot", "ìdánwò kékeré, kúkúrú fún àtúnṣe kan kí a tó lò ó níbi gbogbo."]],
          slides: [
            { title: "Ìfiṣòfò mẹ́jọ: DOWNTIME", bullets: ["Defects, Overproduction, Waiting, Non-used talent", "Transportation, Inventory, Motion, Extra processing"] },
            { title: "5S", bullets: ["Sort, Set in order, Shine", "Standardize, Sustain"] },
            { title: "Ìdènà àṣìṣe", bullets: ["Sọ ọ̀nà tó tọ́ di ọ̀nà tó rọrùn", "Plọ́ọ̀gì tí ó wọ ọ̀nà kan; fọ́ọ̀mù tí kò gba àpótí tí ó ṣófo"] },
            { title: "Pilot ló kọ́kọ́", bullets: ["Ìyípo iṣẹ́ kan, tábìlì kan tàbí ọ̀sẹ̀ kan", "Wọ̀n ọ́n bí baseline", "Ó dára sí i? Lò ó níbi gbogbo. Kò dára sí i? Gbìyànjú èrò tó kàn"] }
          ],
          tryIt: "Kọ àtúnṣe mẹ́ta tí ó ṣeé ṣe fún gbòǹgbò ìṣòro rẹ. Sàmì sí ìfiṣòfò tí ọ̀kọ̀ọ̀kan ń yọ kúrò tàbí bí ó ṣe ń dènà àṣìṣe. Yan ọ̀kan, ṣètò pilot kékeré (níbo, fún ìgbà wo, ta ni), kí o sì bẹ̀rẹ̀ sí wọ̀n ọ́n ní ọ̀nà kan náà bí baseline rẹ.",
          youCanNow: "dá ìfiṣòfò mẹ́jọ mọ̀, yan àtúnṣe tí ó ń yọ ìfiṣòfò tàbí àṣìṣe kúrò, kí o sì dán an wò pẹ̀lú pilot kékeré.",
          quickCheck: [
            { objective: "O5", q: "Àwọn òṣìṣẹ́ ń rìn kọjá ilé ìkẹ́rùsí ní ọ̀pọ̀ ìgbà lójúmọ́ láti mú tẹ́ẹ̀pù. Irú ìfiṣòfò wo nìyí?", options: ["Overproduction", "Defects", "Motion", "Inventory"], answer: 2, why: "Rírìn àti nínàwọ́ tí kò pọn dandan ni ìfiṣòfò Motion." },
            { objective: "O5", q: "O ní àtúnṣe kan tí o rò pé ó máa ṣiṣẹ́. Kí ni ìgbésẹ̀ tó dára jù tó kàn?", options: ["Dán an wò ní ìwọ̀n kékeré kí o sì fi wé baseline", "Lò ó ní gbogbo ibi iṣẹ́ lẹ́ẹ̀kan náà", "Má ṣe wọ̀n ọ́n, nítorí ó dá ọ lójú", "Dúró fún ọdún kan láti rí i"], answer: 0, why: "Pilot kékeré tí a wọ̀n bí baseline ń fi hàn bóyá àtúnṣe náà ṣiṣẹ́ ní tòótọ́." }
          ]
        },
        {
          title: "Di èrè náà mú, kí o sì ṣètò ìdánwò Yellow Belt rẹ",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Ṣètò àyẹ̀wò ìṣàkóso fún àtúnṣe náà kí o sì ṣe ètò ẹ̀kọ́-àti-ìdánwò tí ó ní ọjọ́.",
          text: [
            "Ọ̀pọ̀ àtúnṣe máa ń pòórá nígbà tí àwọn ènìyàn bá padà sí ìwà àtijọ́. Nínú ìgbésẹ̀ Control, o máa di èrè náà mú: kọ ọ̀nà tuntun náà sílẹ̀ gẹ́gẹ́ bí standard work (àkọsílẹ̀ àyẹ̀wò kúkúrú tàbí àwòrán àwọn ìgbésẹ̀ tó tọ́), kọ́ àwọn ènìyàn bí wọ́n ṣe máa ṣe é, kí o sì máa wọ̀n ọ́n nìṣó. Run chart ń fi àwọn nọ́mbà rẹ hàn bí àkókò ti ń lọ pẹ̀lú ìlà àárín; control chart ń fi ààlà kún un tí ó ń fi hàn nígbà tí ọ̀nà iṣẹ́ náà bá yí padà ju bí ó ti yẹ lọ. Kọ control plan tó rọrùn: kí ni a ó ṣàyẹ̀wò, ìgbà mélòó, ta ni yóò ṣàyẹ̀wò, àti kí ni a ó ṣe tí nọ́mbà náà bá burú sí i.",
            "Báyìí, ṣètò ìwé-ẹ̀rí rẹ. ASQ Certified Six Sigma Yellow Belt kò béèrè ìrírí iṣẹ́ tàbí ẹ̀kọ́ kankan, àwọn ìdánwò rẹ̀ sì jẹ́ open book (o lè lo ìwé ìtọ́kasí tirẹ tí a dì pọ̀), gẹ́gẹ́ bí asq.org ti sọ. IASSC Certified Lean Six Sigma Yellow Belt kò ní ohun tí a béèrè ṣáájú, ìdánwò rẹ̀ sì jẹ́ closed book (láìsí ìwé) tí ẹnìkan ń bójú tó (proctored), gẹ́gẹ́ bí iassc.org ti sọ. Ìrísí, owó àti òfin ń yí padà, nítorí náà ka ojú-òpó àṣẹ wọn kí o tó forúkọ sílẹ̀. Àwọn agbanisíṣẹ́ kan tún ń ṣe ìdálẹ́kọ̀ọ́ Yellow Belt tiwọn nínú ilé-iṣẹ́.",
            "Ṣe ìgbàsílẹ̀ Body of Knowledge ti àjọ tí ń fúnni ní ìwé-ẹ̀rí (àkọsílẹ̀ àwọn kókó tí ìdánwò lè bò), sàmì sí kókó kọ̀ọ̀kan tí o mọ̀, kí o sì ṣètò àkókò ẹ̀kọ́ fún àwọn tó kù. Fi ọjọ́ gidi sórí kàlẹ́ńdà, kí o sì forúkọ sílẹ̀ fún ìdánwò nígbà tí máàkì ìdánwò àṣeṣe rẹ bá dúró ṣinṣin nìkan."
          ],
          steps: ["Kọ ọ̀nà tuntun náà sílẹ̀ gẹ́gẹ́ bí standard work.", "Ṣe control plan: kí ni, ìgbà mélòó, ta ni, àti kí ni a ó ṣe tí ó bá burú sí i.", "Máa bá run chart lọ fún ó kéré tán ọ̀sẹ̀ díẹ̀.", "Yan ìdánwò kan kí o sì ka ojú-òpó àṣẹ rẹ̀.", "Lo Body of Knowledge láti ṣètò ọjọ́ ẹ̀kọ́ àti ọjọ́ ìdánwò tí o fojú sí."],
          words: [["Standard work", "ọ̀nà tó dára jù tí a fohùn ṣọ̀kan lé lórí láti ṣe iṣẹ́ kan, tí a kọ ní ìgbésẹ̀ tó rọrùn tàbí àwòrán."], ["Run chart", "àwòrán ìlà ti ìwọ̀n kan bí àkókò ti ń lọ, tí a ń lò láti rí bí nǹkan ṣe ń lọ."], ["Control chart", "run chart tí ó ní ààlà tí ó ń fi hàn nígbà tí ọ̀nà iṣẹ́ kan bá yí padà ju bí ó ti yẹ lọ."], ["Control plan", "ètò kúkúrú tí ó sọ ohun tí a ó ṣàyẹ̀wò, ìgbà mélòó, ta ni yóò ṣàyẹ̀wò àti kí ni a ó ṣe tí ó bá yẹ̀."], ["Body of Knowledge", "àkọsílẹ̀ àṣẹ ti àwọn kókó tí ìdánwò kan lè bò."]],
          slides: [
            { title: "Di èrè náà mú", bullets: ["Kọ ọ̀nà tuntun sílẹ̀ gẹ́gẹ́ bí standard work", "Kọ́ àwọn ènìyàn bí wọ́n ṣe máa ṣe é", "Máa wọ̀n ọ́n nìṣó"] },
            { title: "Àwòrán tí ó ń ṣọ́ ọ̀nà iṣẹ́", bullets: ["Run chart: nọ́mbà bí àkókò ti ń lọ, pẹ̀lú ìlà àárín", "Control chart: ó fi ààlà kún un fún ìyàtọ̀ tí ó wọ́pọ̀"] },
            { title: "Ìdánwò Yellow Belt méjì", bullets: ["ASQ CSSYB: open book, kò béèrè ìrírí iṣẹ́", "IASSC ICYB: closed book, proctored, kò sí ohun tí a béèrè ṣáájú", "Ṣàyẹ̀wò ojú-òpó àṣẹ wọn: òfin ń yí padà"] },
            { title: "Ètò ẹ̀kọ́-àti-ìdánwò rẹ", bullets: ["Ṣe ìgbàsílẹ̀ Body of Knowledge", "Sàmì sí ohun tí o mọ̀; ṣètò àwọn tó kù", "Ọjọ́ gidi; forúkọ sílẹ̀ nígbà tí máàkì àṣeṣe bá dúró"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Iṣẹ́ ìkẹyìn: parí iṣẹ́ àtúnṣe ojú ìwé kan rẹ (àlàyé ìṣòro àti àfojúsùn, àwòrán ọ̀nà iṣẹ́, check sheet àti ìwọ̀n àbùkù, àwòrán Pareto àti 5 Whys, àtúnṣe tí o ṣe pilot rẹ̀ pẹ̀lú nọ́mbà ṣáájú àti lẹ́yìn, àti control plan). Lẹ́yìn náà ṣí ojú-òpó Yellow Belt ti ASQ tàbí IASSC, kọ ìrísí ìdánwò tí o rí níbẹ̀, kí o sì ṣe ètò ẹ̀kọ́ tí ó ní ó kéré tán ìpàdé ẹ̀kọ́ mẹ́rin tí ó ní ọjọ́ àti ọjọ́ ìdánwò tí o fojú sí.",
          youCanNow: "di èrè mú pẹ̀lú standard work àti control plan, kí o sì tẹ̀lé ètò tí ó ní ọjọ́ sí ìdánwò Yellow Belt.",
          quickCheck: [
            { objective: "O5", q: "Oṣù mẹ́ta lẹ́yìn àtúnṣe kan, àṣìṣe ń padà wá díẹ̀díẹ̀. Ìgbésẹ̀ wo ló kù?", options: ["Define", "Control", "Measure", "Analyze"], answer: 1, why: "Control ń di èrè mú pẹ̀lú standard work, ìdálẹ́kọ̀ọ́ àti àyẹ̀wò tí kò dúró." },
            { objective: "O6", q: "Níbo ni o yẹ kí o ti ṣàyẹ̀wò òfin àti ìrísí ìdánwò Yellow Belt lọ́wọ́lọ́wọ́?", options: ["Ìfìwéránṣẹ́ kan lórí ìkànnì àjọlò", "Ọ̀rẹ́ kan tí ó yege ní ọdún púpọ̀ sẹ́yìn", "Ìpolówó ẹ̀kọ́ olówó pọ́ọ́kú kan", "Ojú-òpó àṣẹ ti àjọ tí ń fúnni ní ìwé-ẹ̀rí, bí asq.org tàbí iassc.org"], answer: 3, why: "Òfin, ìrísí àti owó ìdánwò ń yí padà; ojú-òpó ti àjọ tí ń fúnni ní ìwé-ẹ̀rí fúnra rẹ̀ ni orísun tí a lè gbẹ́kẹ̀lé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣàyẹ̀wò, tún ṣe, kí o sì ṣàkóso",
        questions: [
          { objective: "O4", q: "Kí ni àwòrán Pareto ń fi hàn?", options: ["Àwọn ìṣòro díẹ̀ tí ó ń fa èyí tó pọ̀ jù nínú wàhálà", "Àwọn ìgbésẹ̀ ọ̀nà iṣẹ́ kan ní ìtòlẹ́sẹẹsẹ", "Ìnáwó fún iṣẹ́ àtúnṣe kan", "Ẹni tí ó jẹ̀bi"], answer: 0, why: "Àwòrán Pareto ń to ìṣòro láti tó tóbi jù dé tó kéré jù kí o lè rí àwọn díẹ̀ tí ó ṣe pàtàkì." },
          { objective: "O4", q: "Irinṣẹ́ wo ló ń kó àwọn ìdí tí ó ṣeé ṣe jọ sínú egungun bí Methods, Machines àti Materials?", options: ["Check sheet", "Run chart", "Àwòrán fishbone", "SIPOC"], answer: 2, why: "Àwòrán fishbone (Ishikawa) ń kó àwọn ìdí tí ó ṣeé ṣe fún ìṣòro kan jọ." },
          { objective: "O5", q: "Fọ́ọ̀mù kan kò ní lọ títí gbogbo àpótí tí a béèrè fi kún. Èyí jẹ́ àpẹẹrẹ:", options: ["Overproduction", "Ìdènà àṣìṣe", "Inventory", "Control chart"], answer: 1, why: "Ìdènà àṣìṣe (poka-yoke) ń mú kí àṣìṣe ṣòro tàbí kí ó má ṣeé ṣe." },
          { objective: "O5", q: "Kí ni àwọn ìgbésẹ̀ 5S?", options: ["Sell, Ship, Save, Serve, Smile", "See, Say, Stop, Start, Sign", "Scan, Score, Solve, Sort, Send", "Sort, Set in order, Shine, Standardize, Sustain"], answer: 3, why: "5S ni Sort, Set in order, Shine, Standardize, Sustain." },
          { objective: "O6", q: "Kí ni Body of Knowledge?", options: ["Àkọsílẹ̀ àṣẹ ti àwọn kókó tí ìdánwò kan lè bò", "Ìwé ẹ̀kọ́ ìṣègùn", "Ìwé òfin ilé-iṣẹ́", "Àkọsílẹ̀ ìdáhùn ìdánwò àtijọ́"], answer: 0, why: "Àjọ tí ń fúnni ní ìwé-ẹ̀rí ń tẹ Body of Knowledge jáde kí o lè mọ ohun tí o máa kọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Dídára Iṣẹ́ (Ìmúrasílẹ̀ fún Six Sigma Yellow Belt)",
    questions: [
      { objective: "O1", q: "Kí ni DMAIC dúró fún?", options: ["Do, Make, Ask, Inspect, Close", "Design, Monitor, Act, Inform, Check", "Define, Measure, Analyze, Improve, Control", "Decide, Measure, Approve, Install, Count"], answer: 2, why: "Ìgbésẹ̀ márùn-ún iṣẹ́ Six Sigma ni Define, Measure, Analyze, Improve àti Control." },
      { objective: "O1", q: "Kíkọ àlàyé ìṣòro àti àfojúsùn ń ṣẹlẹ̀ nínú ìgbésẹ̀ wo?", options: ["Define", "Improve", "Control", "Analyze"], answer: 0, why: "Define ń ṣàlàyé ìṣòro náà, àfojúsùn àti ọ̀nà iṣẹ́ náà." },
      { objective: "O1", q: "Ọ̀rọ̀ wo nípa ẹ̀kọ́ Yellow Belt bí èyí ló jẹ́ òtítọ́?", options: ["Píparí rẹ̀ ń fúnni ní ìwé-ẹ̀rí ASQ", "Ó rọ́pò ìdánwò èyíkéyìí", "Black Belt nìkan ló lè ṣe é", "Ó ń múra ọ sílẹ̀; àjọ tí ń fúnni ní ìwé-ẹ̀rí ló ń fún ọ ní ìwé-ẹ̀rí"], answer: 3, why: "Ẹ̀kọ́ ń múra ọ sílẹ̀; àjọ tí ń fúnni ní ìwé-ẹ̀rí nìkan, bí ASQ tàbí IASSC, ló ń fúnni ní ìwé-ẹ̀rí." },
      { objective: "O2", q: "Kí ni àlàyé ìṣòro tó dára ní nínú?", options: ["Ojútùú tí o fẹ́ràn", "Kí ni, níbo, láti ìgbà wo àti bí ó ti tóbi tó", "Orúkọ òṣìṣẹ́ tí a máa dá lẹ́bi", "Ọ̀rọ̀ náà \"ìṣòro\" nìkan"], answer: 1, why: "Ó sọ òtítọ́ ìṣòro náà láìdárúkọ ìdí tàbí ojútùú." },
      { objective: "O2", q: "Èwo ni àfojúsùn tí a lè wọ̀n?", options: ["\"Ṣe dáadáa sí i lórí ọjà tí a ń fi ránṣẹ́\"", "\"Gbìyànjú sí i\"", "\"Dín ìfijíṣẹ́ tí ó pẹ́ kù láti 10% sí 3% ní December 31\"", "\"Mú inú àwọn oníbàárà dùn sí i lọ́jọ́ kan\""], answer: 2, why: "Ó ní nọ́mbà àti ọjọ́, nítorí náà o lè mọ̀ bóyá o dé ibẹ̀." },
      { objective: "O2", q: "Àwòrán ọ̀nà iṣẹ́ ń fi hàn:", options: ["Àwọn ìgbésẹ̀ ọ̀nà iṣẹ́ kan ní ìtòlẹ́sẹẹsẹ, pẹ̀lú àpótí àti ọfà", "Èrè ilé-iṣẹ́ náà", "Ibi tí ọ́fíìsì wà lórí máàpù ìgboro", "Òṣìṣẹ́ tí ó yára jù"], answer: 0, why: "Àwòrán ọ̀nà iṣẹ́ ń ya ìgbésẹ̀ kọ̀ọ̀kan láti ìbẹ̀rẹ̀ dé òpin." },
      { objective: "O3", q: "Kí ni a ń lo check sheet fún?", options: ["Sísan owó òṣìṣẹ́", "Fífọwọ́ sí àdéhùn", "Kíkọ àfojúsùn", "Kíka bí irú ìṣòro kọ̀ọ̀kan ti ń ṣẹlẹ̀ tó"], answer: 3, why: "Check sheet jẹ́ fọ́ọ̀mù tó rọrùn fún kíka àbùkù gẹ́gẹ́ bí irú wọn." },
      { objective: "O3", q: "O ṣàyẹ̀wò ìwé owó 400, 12 sì ní àṣìṣe. Kí ni ìwọ̀n àbùkù?", options: ["12%", "3%", "4%", "0.3%"], answer: 1, why: "12 / 400 = 0.03, èyí tí ó jẹ́ 3%." },
      { objective: "O3", q: "Ohun 100, tí ọ̀kọ̀ọ̀kan ní àǹfààní 5 fún àṣìṣe, ní àṣìṣe 2 lápapọ̀. Kí ni DPMO?", options: ["2,000", "400", "4,000", "20,000"], answer: 2, why: "2 / (100 x 5) = 0.004, àti 0.004 x 1,000,000 = 4,000." },
      { objective: "O4", q: "Òfin 80/20 nínú àwòrán Pareto túmọ̀ sí:", options: ["Ìdí díẹ̀ sábà máa ń fa èyí tó pọ̀ jù nínú ìṣòro", "Òṣìṣẹ́ 80 ń ṣe àṣìṣe 20", "Tún ìṣòro 20 ṣe lójúmọ́", "Gbogbo ìdí ṣe pàtàkì bákan náà"], answer: 0, why: "Pareto ń fi àwọn ìdí díẹ̀ tí ó ṣe pàtàkì hàn, nítorí náà o máa bẹ̀rẹ̀ pẹ̀lú ọ̀pá tó tóbi jù." },
      { objective: "O4", q: "Kí nìdí tí o fi ń béèrè \"Kí nìdí?\" ní nǹkan bí ìgbà márùn-ún?", options: ["Láti mú ìpàdé lọ́ra", "Láti wá ẹni tí a máa dá lẹ́bi", "Nítorí ìdánwò béèrè márùn-ún gẹ́lẹ́", "Láti walẹ̀ kọjá àmì ìṣòro dé gbòǹgbò tí o lè tún ṣe"], answer: 3, why: "\"Kí nìdí\" kọ̀ọ̀kan ń lọ jinlẹ̀ sí i títí o fi dé ìdí tí o lè ṣe nǹkan nípa rẹ̀." },
      { objective: "O4", q: "Ìdáhùn wo ni gbòǹgbò ìṣòro tí o lè ṣe nǹkan nípa rẹ̀?", options: ["\"Àwọn ènìyàn ń ṣe ọ̀lẹ\"", "\"Kò sí àyẹ̀wò ìtọ́jú fún ẹ̀rọ ìtẹ̀wé tíkẹ́ẹ̀tì\"", "\"Orí burúkú\"", "\"Àwọn oníbàárà ṣòro\""], answer: 1, why: "Gbòǹgbò ìṣòro jẹ́ àlàfo nínú ọ̀nà iṣẹ́ tí o lè tún ṣe, kì í ṣe ẹ̀bi tàbí orí." },
      { objective: "O5", q: "Àwọn páálí ọjà àfikún kún yàrá ẹ̀yìn, àwọn kan sì ti kọjá ọjọ́ ìlò. Irú ìfiṣòfò wo nìyí?", options: ["Motion", "Waiting", "Inventory", "Non-used talent"], answer: 2, why: "Ọjà tí ó pọ̀ jù nílẹ̀ ni ìfiṣòfò Inventory." },
      { objective: "O5", q: "Kí o tó lo àtúnṣe kan níbi gbogbo, o yẹ kí o:", options: ["Dán an wò nínú pilot kékeré kí o sì fi wé baseline", "Má ṣe wọ̀n ọ́n", "Yí nǹkan márùn-ún padà lẹ́ẹ̀kan náà", "Ní kí àwọn oníbàárà dúró"], answer: 0, why: "Pilot ń fi hàn bóyá àtúnṣe náà ṣiṣẹ́ kí o tó ná àkókò àti owó láti tàn án kálẹ̀." },
      { objective: "O5", q: "Kí ni control plan ń sọ?", options: ["Ta ni yóò gba ẹ̀bùn owó", "Ọjọ́ ìbẹ̀rẹ̀ iṣẹ́ àtúnṣe nìkan", "Bí a ṣe ń kọ àlàyé ìṣòro", "Kí ni a ó ṣàyẹ̀wò, ìgbà mélòó, ta ni yóò ṣàyẹ̀wò àti kí ni a ó ṣe tí ó bá yẹ̀"], answer: 3, why: "Control plan ń di èrè mú nípa ṣíṣètò àyẹ̀wò déédéé àti ohun tí a ó ṣe." },
      { objective: "O5", q: "Run chart ni:", options: ["Àkọsílẹ̀ ìfiṣòfò mẹ́jọ", "Àwòrán ìlà ti ìwọ̀n kan bí àkókò ti ń lọ", "Àwòrán àwọn ìdí", "Máàpù ilé kan"], answer: 1, why: "Run chart ń fi dátà hàn bí àkókò ti ń lọ kí o lè rí bóyá èrè náà dúró." },
      { objective: "O6", q: "Gẹ́gẹ́ bí asq.org ti sọ, ìdánwò ASQ Certified Six Sigma Yellow Belt jẹ́:", options: ["Fún àwọn tí ó ní ìrírí iṣẹ́ ọdún márùn-ún nìkan", "Agbanisíṣẹ́ rẹ nìkan ló ń ṣe é nínú kíláàsì", "Open book, láìbéèrè ìrírí iṣẹ́ tàbí ẹ̀kọ́", "Closed book láìsí àkọsílẹ̀ kankan"], answer: 2, why: "ASQ sọ pé CSSYB kò béèrè ìrírí iṣẹ́ tàbí ẹ̀kọ́, àwọn ìdánwò rẹ̀ sì jẹ́ open book." },
      { objective: "O6", q: "Gẹ́gẹ́ bí iassc.org ti sọ, ìdánwò IASSC Yellow Belt jẹ́:", options: ["Closed book àti proctored", "Open book pẹ̀lú àkọsílẹ̀ èyíkéyìí", "Láìsí ààlà àkókò kankan", "Fún àwọn ọmọ ẹgbẹ́ ASQ nìkan"], answer: 0, why: "IASSC kọ ọ́ pé ìdánwò ICYB jẹ́ closed book àti proctored." },
      { objective: "O6", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ tó dára jù nínú ṣíṣe ètò ẹ̀kọ́ rẹ?", options: ["Forúkọ sílẹ̀ fún ìdánwò ọ̀la", "Ra ẹ̀kọ́ tí ó wọ́n jù", "Há ìdáhùn ìdánwò àtijọ́ sórí láti ojú-òpó wẹ́ẹ̀bù kan", "Ṣe ìgbàsílẹ̀ Body of Knowledge kí o sì sàmì sí àwọn kókó tí o nílò láti kọ́"], answer: 3, why: "Body of Knowledge ń fi ohun tí ìdánwò bò hàn, nítorí náà o lè ṣètò àkókò ẹ̀kọ́ fún ohun tí o kò tíì mọ̀." },
      { objective: "O6", q: "Ìgbà wo ni o yẹ kí o forúkọ sílẹ̀ fún ọjọ́ ìdánwò rẹ?", options: ["Kí o tó kọ́ ohunkóhun", "Nígbà tí máàkì àṣeṣe rẹ bá dúró ṣinṣin tí o sì ti ṣàyẹ̀wò òfin àṣẹ wọn", "Láéláé; a kò nílò ìwé-ẹ̀rí", "Lẹ́yìn tí agbanisíṣẹ́ rẹ bá sọ fún ọ nìkan"], answer: 1, why: "Máàkì àṣeṣe tí ó dúró ṣinṣin àti òfin lọ́wọ́lọ́wọ́ túmọ̀ sí pé o ti ṣetán láti ṣe ìdánwò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 4, 7, 9, 10, 12, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìṣòro àti àfojúsùn", objective: "O2", notYet: "Àlàyé náà kò ṣe kedere tàbí ó dárúkọ ìdí tàbí ojútùú; àfojúsùn kò ní nọ́mbà tàbí ọjọ́.", meets: "Àlàyé náà sọ kí ni, níbo, láti ìgbà wo àti bí ó ti tóbi tó; àfojúsùn ní nọ́mbà àti ọjọ́; àwòrán ọ̀nà iṣẹ́ ìgbésẹ̀ 5 sí 8 wà nínú rẹ̀.", exceeds: "Ó tún ní SIPOC tàbí ó dárúkọ ohun tí ó ṣe pàtàkì jù sí oníbàárà (CTQ)." },
      { name: "Dátà àti ìwọ̀n àbùkù", objective: "O3", notYet: "Dátà kò tó 20, tàbí kò sí ìtumọ̀ àbùkù tí ó yé.", meets: "Check sheet tí ó ní ó kéré tán dátà 20 àti ìwọ̀n àbùkù pẹ̀lú ìṣirò tí ó hàn.", exceeds: "Ó tún fún ni ní DPMO, tàbí ó fi hàn pé òfin kíkà kan náà ni a lò lójoojúmọ́." },
      { name: "Gbòǹgbò ìṣòro", objective: "O4", notYet: "Kò sí àwòrán Pareto, tàbí 5 Whys parí sí dídá ẹnìkan lẹ́bi.", meets: "Àwòrán Pareto tí a tò láti tó tóbi jù dé tó kéré jù àti 5 Whys tí ó parí sí ìdí nínú ọ̀nà iṣẹ́ tí ẹnìkan lè ṣe nǹkan nípa rẹ̀.", exceeds: "Ó tún lo fishbone láti fi àwọn ìdí míì tí ẹgbẹ́ ti yọ kúrò hàn." },
      { name: "Àtúnṣe àti ìṣàkóso", objective: "O5", notYet: "A kò dán àtúnṣe náà wò, tàbí kò sí nọ́mbà ṣáájú àti lẹ́yìn.", meets: "Àtúnṣe tí a ṣe pilot rẹ̀ pẹ̀lú nọ́mbà ṣáájú àti lẹ́yìn àti control plan (kí ni, ìgbà mélòó, ta ni, kí ni tí ó bá yẹ̀).", exceeds: "Ó tún ní standard work tàbí run chart tí ó bo ọ̀sẹ̀ mélòó kan." },
      { name: "Ìtàn DMAIC", objective: "O1", notYet: "Ojú ìwé náà ń fò káàkiri, àwọn ìgbésẹ̀ sì sọnù tàbí wọn kò sí ní ìtòlẹ́sẹẹsẹ.", meets: "Ojú ìwé náà tẹ̀lé Define, Measure, Analyze, Improve, Control ní ìtòlẹ́sẹẹsẹ.", exceeds: "Akẹ́kọ̀ọ́ lè ṣàlàyé iṣẹ́ àtúnṣe náà láàárín ìṣẹ́jú méjì, bí nínú ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́." },
      { name: "Ètò ẹ̀kọ́-àti-ìdánwò", objective: "O6", notYet: "Kò sí ọjọ́, tàbí kò ṣàyẹ̀wò ojú-òpó àṣẹ kankan.", meets: "Ó dárúkọ ìdánwò kan, ìrísí rẹ̀ tí a ṣàyẹ̀wò lórí ojú-òpó àṣẹ rẹ̀, ó kéré tán ìpàdé ẹ̀kọ́ mẹ́rin tí ó ní ọjọ́ àti ọjọ́ ìdánwò tí a fojú sí.", exceeds: "Ó tún so ìpàdé ẹ̀kọ́ mọ́ àwọn kókó Body of Knowledge, ó sì ní ọjọ́ ìdánwò àṣeṣe." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ìdánwò Yellow Belt tí wọ́n sì yege láàárín oṣù 6 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n lo iṣẹ́ àtúnṣe ojú ìwé kan wọn nínú ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́, tàbí tí wọ́n rí iṣẹ́, ìgbéga tàbí ipò nínú ẹgbẹ́ àtúnṣe (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ àti olówò kékeré tí wọ́n ròyìn ìwọ̀n àbùkù tí ó dín kù tàbí ìfiṣòfò tí ó dín kù nínú ọ̀nà iṣẹ́ tí wọ́n yàn ní ọjọ́ 30 lẹ́yìn náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, gègé àti rúlà fún check sheet, àwòrán àti àwòrán ọ̀nà iṣẹ́",
      "Kò pọn dandan: spreadsheet ọ̀fẹ́ (Google Sheets tàbí Microsoft Excel) fún àwòrán Pareto àti run chart",
      "Ọ̀nà iṣẹ́ gidi kan láti máa wò fún ọ̀sẹ̀ kan sí méjì (níbi iṣẹ́, nínú òwò, tàbí nílé)",
      "Íńtánẹ́ẹ̀tì láti ka ojú-òpó Yellow Belt ti ASQ tàbí IASSC",
      "Nǹkan bí ìṣẹ́jú 60 fún ẹ̀kọ́ àti àyẹ̀wò, pẹ̀lú ọ̀sẹ̀ kan sí méjì fún gbígba dátà fún iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan. Jẹ́ kí akẹ́kọ̀ọ́ kọ̀ọ̀kan yan ọ̀nà iṣẹ́ rẹ̀ ní ìpàdé àkọ́kọ́ kí gbígba dátà lè bẹ̀rẹ̀ ní kùtùkùtù.",
      "Ẹ ṣe àṣeṣe àwòrán Pareto àti 5 Whys papọ̀ gẹ́gẹ́ bí ẹgbẹ́ lórí àpẹẹrẹ kan (bí oúnjẹ tí kò tọ́ ní ilé oúnjẹ) kí àwọn akẹ́kọ̀ọ́ tó ṣe tiwọn.",
      "Dá 5 Whys èyíkéyìí tí ó parí sí dídá ẹnìkan lẹ́bi dúró, kí o sì béèrè ohun tí ó wà nínú ọ̀nà iṣẹ́ tí ó jẹ́ kí àṣìṣe náà ṣẹlẹ̀.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé kí wọ́n má kọ orúkọ oníbàárà, ìsọfúnni aláìsàn tàbí àṣírí ilé-iṣẹ́ sínú dátà wọn.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan; jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣe àṣeṣe ṣíṣàlàyé iṣẹ́ àtúnṣe wọn bí ìdáhùn ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́.",
      "Má ṣe sọ owó ìdánwò tàbí máàkì ìyege láti orí; rán àwọn akẹ́kọ̀ọ́ lọ sí asq.org tàbí iassc.org fún òfin lọ́wọ́lọ́wọ́."
    ]
  }
};
