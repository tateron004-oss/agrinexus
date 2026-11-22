"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-ai-real-estate.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const HUD_FHA = { name: "HUD: àkópọ̀ Fair Housing Act (ní èdè Gẹ̀ẹ́sì)", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" };
const CFR_100_75 = { name: "24 CFR 100.75: ìpolówó, ọ̀rọ̀ àti ìkéde tí ó ń ṣe ẹ̀tanú (ní èdè Gẹ̀ẹ́sì)", url: "https://www.law.cornell.edu/cfr/text/24/100.75" };
const DRE = { name: "Department of Real Estate ti California (àpẹẹrẹ alákòóso ìpínlẹ̀, ní èdè Gẹ̀ẹ́sì)", url: "https://www.dre.ca.gov/" };
const CAN_SPAM = { name: "FTC: òfin CAN-SPAM, ìtọ́sọ́nà fún àwọn ilé-iṣẹ́ (ní èdè Gẹ̀ẹ́sì)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-real-estate-yo",
  lang: "yo",
  translationOf: "smallbiz-ai-real-estate",
  category: "Small Business",
  name: "AI fún Àwọn Aṣojú Ilé àti Ilẹ̀",
  skills: "Kíkọ àpèjúwe ilé tí ó tẹ̀lé òfin ẹ̀tọ́ dọ́gba nínú ilé gbígbé, Yíyí àkọsílẹ̀ padà sí ìròyìn fún oníbàárà, Ṣíṣe ètò ìtẹ̀lé, Ṣíṣe àkópọ̀ àwọn nọ́mbà ọjà tí o mú wá, Ìmúrasílẹ̀ fún ìfihàn ilé àti open house, Dídáàbò bo ìsọfúnni oníbàárà",
  outcome: "lo AI nínú iṣẹ́ ilé àti ilẹ̀ rẹ láti kọ àpèjúwe ilé tí ó péye, tí ó tẹ̀lé òfin ẹ̀tọ́ dọ́gba nínú ilé gbígbé, máa fún àwọn olùrà àti olùtà ní ìròyìn, tẹ̀lé ètò ìtẹ̀lé fún àwọn tí ó lè di oníbàárà, kí o sì yí àwọn nọ́mbà ọjà tí o mú láti MLS rẹ padà sí àkópọ̀ tí ó yé fún oníbàárà, láìfi ìsọfúnni àdáni oníbàárà sínú irinṣẹ́ AI.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn aṣojú ilé àti ilẹ̀ (real estate agents), àwọn broker àti àwọn olùrànlọ́wọ́ wọn, pàápàá àwọn aṣojú tí ń dá ṣiṣẹ́ àti àwọn tuntun tí ń kọ́ iṣẹ́ wọn, títí kan ọ̀pọ̀ aṣojú láti inú àwọn ẹ̀yà kékeré tí ń sin àwùjọ tiwọn àti àwọn tí ń ra ilé fún ìgbà àkọ́kọ́.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti kọ àpèjúwe ilé kíákíá, máa fún àwọn oníbàárà ní ìròyìn, máa tẹ̀lé àwọn tí ó lè di oníbàárà déédéé, kí o sì ṣàlàyé àwọn nọ́mbà ọjà kedere. O tún máa kọ́ ibi tí AI ti lè mú ewu wá nínú iṣẹ́ ilé àti ilẹ̀: ọ̀rọ̀ tí ó lòdì sí ẹ̀tọ́ dọ́gba nínú ilé gbígbé, òtítọ́ tí kò tọ́ nínú àpèjúwe ilé, àti ìsọfúnni àdáni oníbàárà.",
    "Ẹ̀kọ́ yìí kì í ṣe ìmọ̀ràn òfin. Òfin ẹ̀tọ́ dọ́gba nínú ilé gbígbé, òfin ìpolówó àti òfin ìwé àṣẹ kan ọ́; ṣàyẹ̀wò HUD, alákòóso ilé àti ilẹ̀ ní ìpínlẹ̀ rẹ (ní California, Department of Real Estate) àti broker rẹ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe ohun èlò AI ti aṣojú: àpèjúwe ilé kan tí o ti ṣàyẹ̀wò ní ìlà-ìlà fún òtítọ́ àti fún ọ̀rọ̀ ẹ̀tọ́ dọ́gba nínú ilé gbígbé, àpẹẹrẹ ìròyìn ọ̀sẹ̀ fún olùtà, àpẹẹrẹ ìròyìn ìwádìí fún olùrà, ètò ìtẹ̀lé ọjọ́ 30 pẹ̀lú ọ̀rọ̀ mẹ́rin, àkópọ̀ ọjà ojú-ewé kan láti inú àwọn nọ́mbà tí o mú fúnra rẹ, àti àkọsílẹ̀ àyẹ̀wò fún open house. Kò sí ìsọfúnni àdáni oníbàárà kankan tí ó wọ inú irinṣẹ́ AI.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn aṣojú ilé àti ilẹ̀, àwọn broker àti àwọn olùrànlọ́wọ́ wọn, pàápàá àwọn aṣojú tí ń dá ṣiṣẹ́ àti àwọn tuntun tí ń kọ́ iṣẹ́ wọn, títí kan ọ̀pọ̀ aṣojú láti inú àwọn ẹ̀yà kékeré tí ń sin àwùjọ tiwọn àti àwọn tí ń ra ilé fún ìgbà àkọ́kọ́.",
    startingPoint: "Wọ́n ní ìwé àṣẹ tàbí wọ́n ń ṣiṣẹ́ lábẹ́ broker, wọ́n sì mọ bí a ṣe ń mú ilé àti nọ́mbà láti MLS. Ọ̀pọ̀ ti lo AI fún ìfiránṣẹ́ kan tàbí méjì, ṣùgbọ́n wọn kò ní ọ̀nà tí ó dúró, díẹ̀ ló sì ti ronú nípa ewu AI fún ẹ̀tọ́ dọ́gba nínú ilé gbígbé àti ìsọfúnni àdáni.",
    gap: "Kíkọ àpèjúwe ilé, ìròyìn àti ọ̀rọ̀ ìtẹ̀lé ń gba ọ̀pọ̀ wákàtí, ìtẹ̀lé tí kò dúró sì ń sọ oníbàárà nù. AI ń dín àkókò yẹn kù, ṣùgbọ́n ó lè hùmọ̀ òtítọ́, kọ ọ̀rọ̀ tí ó lòdì sí ẹ̀tọ́ dọ́gba nínú ilé gbígbé, kí ó sì tú ìsọfúnni oníbàárà sí gbangba. Àwọn akẹ́kọ̀ọ́ nílò ọ̀nà tí ó láàbò, tí wọ́n lè tún ṣe léraléra, láti lò ó, tí ó ń dáàbò bo ìwé àṣẹ wọn àti àwọn oníbàárà wọn.",
    constraints: [
      "Kì í ṣe ìmọ̀ràn òfin: òfin ẹ̀tọ́ dọ́gba nínú ilé gbígbé, ìpolówó àti ìwé àṣẹ wá láti HUD, alákòóso ìpínlẹ̀ àti broker",
      "Ìlànà ilé-iṣẹ́ broker nípa irinṣẹ́ AI kan ọ́",
      "Ìsọfúnni àdáni: kò sí orúkọ oníbàárà pẹ̀lú àdírẹ́sì, ọ̀rọ̀ owó, àwọn ìlànà ìfilọ̀ (offer) tàbí ọgbọ́n ìdúnàádúrà nínú irinṣẹ́ AI",
      "Àwọn nọ́mbà ọjà gbọ́dọ̀ wá láti MLS tàbí orísun mìíràn tí ó ṣeé gbẹ́kẹ̀lé, kì í ṣe láti AI",
      "Àkókò: àwọn aṣojú ní iṣẹ́ púpọ̀, nítorí náà ẹ̀kọ́ kọ̀ọ̀kan jẹ́ nǹkan bí ìṣẹ́jú 5"
    ],
    prerequisites: "Kò sí. Àwọn tí kò tíì lo olùrànlọ́wọ́ AI rí lè kọ́kọ́ ṣe ẹ̀kọ́ ìfihàn sí AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ní òtítọ́ tí a ti fìdí rẹ̀ múlẹ̀ láti inú àkọsílẹ̀, láti ọ̀dọ̀ olùtà àti láti ìbẹ̀wò rẹ fúnra rẹ", action: "kọ àpèjúwe ilé pẹ̀lú ìrànlọ́wọ́ AI kí o sì ṣàyẹ̀wò gbogbo òtítọ́ ní ìlà-ìlà", standard: "kí o sì yọ ohunkóhun tí o kò lè fìdí rẹ̀ múlẹ̀ kúrò" },
    { id: "O2", condition: "Tí o bá ní àpèjúwe ilé tàbí ìpolówó tí AI kọ", action: "dá ọ̀rọ̀ tí ó fi ìfẹ́ sí irú ènìyàn kan hàn mọ̀ kí o sì tún un kọ, dípò kí ó ṣàpèjúwe ilé", standard: "tí gbogbo ìlà fi ń ṣàpèjúwe ilé àti àwọn ohun tí ó ní nìkan" },
    { id: "O3", condition: "Tí o bá ní àpèjúwe ilé tí o ti ṣàyẹ̀wò", action: "ṣe ìfiránṣẹ́ orí ìkànnì àjọlò àti ímeèlì ìpolówó tí ó tẹ̀lé òfin ìpolówó fún ẹni tí ó ní ìwé àṣẹ àti òfin ímeèlì", standard: "pẹ̀lú ìsọfúnni ìwé àṣẹ àti ilé-iṣẹ́ broker bí ó ti yẹ, àdírẹ́sì ìfìwéránṣẹ́ àti ọ̀nà láti yọwọ́ (unsubscribe)" },
    { id: "O4", condition: "Tí o bá ní àkọsílẹ̀ rẹ tí kò tíì tò láti ọ̀sẹ̀ náà", action: "kọ ìròyìn fún olùtà tàbí olùrà pẹ̀lú AI, kí o lo àlàfo (placeholder) dípò ìsọfúnni àdáni", standard: "láìsí ìsọfúnni àdáni oníbàárà nínú irinṣẹ́ AI" },
    { id: "O5", condition: "Tí o bá ní ẹni tuntun tí ó lè di oníbàárà, tí ó ti gbà kí o kàn sí òun", action: "ṣe ètò ìtẹ̀lé ọjọ́ 30 pẹ̀lú ọ̀rọ̀ mẹ́rin tí ó wúlò àti ọjọ́ tí ó kàn tí o ń tọpinpin", standard: "kí o sì ṣàyẹ̀wò link ètò ìrànlọ́wọ́ kankan lórí ojú-òpó ìjọba" },
    { id: "O6", condition: "Tí o bá ní àwọn nọ́mbà ọjà tí o mú láti MLS rẹ", action: "ṣe àkópọ̀ ọjà ní ọ̀rọ̀ tí ó rọrùn àti àkọsílẹ̀ àyẹ̀wò fún open house", standard: "láìsí nọ́mbà tí a hùmọ̀, kí o sì fi orísun àti ọjọ́ kún un" }
  ],
  chapters: [
    {
      name: "Orí 1: Àpèjúwe ilé àti ẹ̀tọ́ dọ́gba nínú ilé gbígbé",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kíkọ àpèjúwe ilé láti inú òtítọ́ rẹ",
          minutes: 5,
          goal: "Kọ àpèjúwe ilé tí ó péye, tí ó sì fani mọ́ra, láti inú òtítọ́ tí a ti fìdí rẹ̀ múlẹ̀ nípa ilé náà.",
          text: [
            "Àpèjúwe ilé ń ta àwọn ohun tí ilé náà ní: bí àwọn yàrá ṣe tò, àtúnṣe tí a ti ṣe, ìmọ́lẹ̀, àyè ìta, àti ohun tí ó wà nítòsí bí ọgbà ìṣeré tàbí ọkọ̀ ìrìnnà. AI ń kọ̀wé kíákíá, ṣùgbọ́n ohun tí o sọ fún un nìkan ló mọ̀.",
            "Fún un ní òtítọ́ tí a ti fìdí rẹ̀ múlẹ̀ nìkan: \"yàrá ìbùsùn 3, balùwẹ̀ 2, 1,450 sq ft gẹ́gẹ́ bí àkọsílẹ̀ county, a kọ́ ọ ní 1962, a tún ilé ìdáná ṣe ní 2021, òrùlé tuntun ní 2023, ẹ̀yìnkùlé tí a sọgbá yí ká pẹ̀lú igi lẹ́mọ́ọ̀nù, 0.3 miles sí ọkọ̀ ojú irin.\" Béèrè àpèjúwe ọ̀rọ̀ 120 ní ohùn tí ó lọ́yàyà tí ó sì bá iṣẹ́ mu, àti ẹ̀dà kúkúrú fún ìkànnì àjọlò.",
            "Lẹ́yìn náà, ṣàyẹ̀wò gbogbo òtítọ́: ibi tí ìwọ̀n ilé (square footage) ti wá, ọdún àtúnṣe, orúkọ ilé-ìwé, ìjìnnà. AI lè fi ohun tí kò sí kún un (\"granite counters\", \"ocean view\"). Ọ̀rọ̀ èké nínú àpèjúwe ilé lè mú ẹ̀sùn àti wàhálà òfin wá."
          ],
          steps: ["Kó òtítọ́ tí a ti fìdí rẹ̀ múlẹ̀ jọ láti inú àkọsílẹ̀, láti ọ̀dọ̀ olùtà àti láti ìbẹ̀wò rẹ.", "Béèrè lọ́wọ́ AI fún àpèjúwe gígùn àti kúkúrú.", "Ṣàyẹ̀wò gbogbo òtítọ́ ní ìlà-ìlà.", "Yọ ohunkóhun tí o kò lè fìdí rẹ̀ múlẹ̀ kúrò."],
          words: [["Àpèjúwe ilé (listing description)", "ọ̀rọ̀ tí a kọ láti ṣàpèjúwe ilé tí a fẹ́ tà tàbí yá."], ["MLS", "Multiple Listing Service: àkójọ ìsọfúnni tí àwọn aṣojú fi ń pín àwọn ilé tí wọ́n ń tà."], ["Òtítọ́ tí a fìdí rẹ̀ múlẹ̀", "ohun tí o ti jẹ́rìí sí láti inú àkọsílẹ̀, láti ọ̀dọ̀ olùtà tàbí láti ìbẹ̀wò rẹ."]],
          slides: [
            { title: "Ta àwọn ohun tí ilé ní", bullets: ["Bí yàrá ṣe tò, àtúnṣe, ìmọ́lẹ̀, àyè ìta", "Ọgbà ìṣeré àti ọkọ̀ ìrìnnà nítòsí"] },
            { title: "Òtítọ́ wọlé, ọ̀rọ̀ jáde", bullets: ["Fún AI ní òtítọ́ tí a fìdí rẹ̀ múlẹ̀ nìkan", "Béèrè ẹ̀dà gígùn àti kúkúrú"] },
            { title: "Ṣàyẹ̀wò ní ìlà-ìlà", bullets: ["Orísun ìwọ̀n ilé, ọdún àtúnṣe, ìjìnnà", "AI lè hùmọ̀ ohun tí ilé kò ní", "Ọ̀rọ̀ èké lè mú ẹ̀sùn wá"] }
          ],
          tryIt: "Yan ilé kan tí o mọ̀ (tàbí àpẹẹrẹ). Kọ òtítọ́ mẹ́wàá tí o ti fìdí rẹ̀ múlẹ̀, béèrè lọ́wọ́ AI fún àpèjúwe ọ̀rọ̀ 120, kí o sì ṣàyẹ̀wò gbogbo ìlà, kí o pa ohunkóhun tí kò sí nínú òtítọ́ rẹ rẹ́.",
          youCanNow: "kọ àpèjúwe ilé láti inú òtítọ́ tí a fìdí rẹ̀ múlẹ̀, kí o sì mú àwọn ohun tí AI hùmọ̀.",
          quickCheck: [
            { objective: "O1", q: "Kí ni AI mọ̀ nípa ilé kan nígbà tí ó bá ń kọ àpèjúwe rẹ̀?", options: ["Ohun tí o sọ fún un nìkan", "Gbogbo ohun tí ó wà nínú àkọsílẹ̀ county", "Ohun tí olùtà sọ fún ọ́fíìsì rẹ", "Ìsọfúnni MLS ilé náà ní ìṣẹ́jú yìí"], answer: 0, why: "Ohun tí o fún AI nìkan ló mọ̀, nítorí náà òtítọ́ tí a fìdí rẹ̀ múlẹ̀ nìkan ni kí o fún un." },
            { objective: "O1", q: "Àpèjúwe AI sọ pé \"granite counters\" wà, ṣùgbọ́n o kò rí wọn nígbà ìbẹ̀wò rẹ. Kí ni o máa ṣe?", options: ["Fi sílẹ̀; àwọn olùrà fẹ́ràn granite", "Yọ ọ́ kúrò àyàfi tí o bá lè fìdí rẹ̀ múlẹ̀", "Fi \"bóyá\" síwájú rẹ̀", "Bi AI bóyá ó dá a lójú"], answer: 1, why: "O máa ṣàyẹ̀wò gbogbo òtítọ́, o sì máa yọ ohunkóhun tí o kò lè fìdí rẹ̀ múlẹ̀ kúrò." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ọ̀rọ̀ ẹ̀tọ́ dọ́gba nínú ilé gbígbé: ohun tí AI kò gbọ́dọ̀ kọ",
          minutes: 6,
          goal: "Dá ọ̀rọ̀ inú àpèjúwe ilé tí ó fi ìfẹ́ hàn nípa ẹgbẹ́ tí òfin dáàbò bò mọ̀, kí o sì tún un ṣe.",
          text: [
            "Òfin ìjọba àpapọ̀ Fair Housing Act kò gbà ẹ̀tanú nínú ilé gbígbé nítorí ẹ̀yà (race), àwọ̀ ara, orílẹ̀-èdè ìbílẹ̀, ẹ̀sìn, ìbálòpọ̀ (sex), ipò ìdílé àti àìlera ara. Òfin HUD ní 24 CFR 100.75 kò gbà ìpolówó, ọ̀rọ̀ àti ìkéde tí ó fi ìfẹ́, ìdíwọ́ tàbí ẹ̀tanú hàn nítorí àwọn wọ̀nyí, títí kan nípasẹ̀ ọ̀rọ̀, àwòrán tàbí ibi tí o yàn láti polówó. Ọ̀pọ̀ ìpínlẹ̀, títí kan California, ń dáàbò bo àwọn ẹgbẹ́ mìíràn pẹ̀lú; ṣàyẹ̀wò ìpínlẹ̀ rẹ.",
            "Ṣàpèjúwe ilé, kì í ṣe irú ènìyàn tí o fẹ́ kí ó gbé ibẹ̀. Ọ̀rọ̀ tí ó léwu: \"perfect for young professionals\", \"ideal for a couple\", \"no kids\", \"great Christian neighborhood\", \"bachelor pad\", \"walking distance to [ilé ìjọsìn kan] for families of that faith\", \"able-bodied\". Èyí tí ó dára jù: \"yàrá ìbùsùn mẹ́ta\", \"òpópónà tí ó pa rọ́rọ́\", \"0.3 miles sí ọkọ̀ ìrìnnà\", \"ilé alájà kan\".",
            "AI lè da ẹ̀tanú kọ láti inú ohun tí ó kọ́. Máa ka ohun tí ó kọ nígbà gbogbo fún ìṣòro ẹ̀tọ́ dọ́gba nínú ilé gbígbé, kí o sì sọ fún un pé: \"Tún un kọ láti ṣàpèjúwe ilé àti àwọn ohun tí ó ní nìkan.\" Tí kò bá dá ọ lójú, béèrè lọ́wọ́ broker rẹ tàbí àjọ tí ń ṣe ìrànlọ́wọ́ fún ẹ̀tọ́ dọ́gba nínú ilé gbígbé."
          ],
          steps: ["Ka gbogbo ìlà kí o sì béèrè: ṣé èyí ń ṣàpèjúwe ilé ni tàbí ènìyàn?", "Yọ ọ̀rọ̀ nípa ẹni tí ó yẹ kí ó gbé ibẹ̀ kúrò.", "Fi àwọn ohun tí ilé ní rọ́pò rẹ̀.", "Ṣàyẹ̀wò àwọn àwòrán àti ibi tí o gbé ìpolówó sí pẹ̀lú.", "Béèrè lọ́wọ́ broker rẹ tí kò bá dá ọ lójú."],
          words: [["Fair Housing Act", "òfin ìjọba àpapọ̀ US tí kò gbà ẹ̀tanú nínú ilé gbígbé nítorí àwọn ẹgbẹ́ tí òfin dáàbò bò."], ["Ẹgbẹ́ tí òfin dáàbò bò (protected class)", "ẹgbẹ́ tí òfin dáàbò bò kúrò lọ́wọ́ ẹ̀tanú, bí ẹ̀yà tàbí ipò ìdílé."], ["Ipò ìdílé (familial status)", "níní ọmọ tí kò tíì pé ọdún 18 nínú ilé, tàbí jíjẹ́ aboyún."], ["HUD", "US Department of Housing and Urban Development: ẹ̀ka ìjọba US fún ilé gbígbé àti ìdàgbàsókè ìlú."]],
          slides: [
            { title: "Àwọn ẹgbẹ́ tí òfin àpapọ̀ dáàbò bò", bullets: ["Ẹ̀yà, àwọ̀ ara, orílẹ̀-èdè ìbílẹ̀, ẹ̀sìn", "Ìbálòpọ̀ (sex), ipò ìdílé, àìlera ara", "Ọ̀pọ̀ ìpínlẹ̀, bí California, ń dáàbò bo àwọn mìíràn"] },
            { title: "Ìpolówó kò gbọ́dọ̀ fi ìfẹ́ hàn", bullets: ["24 CFR 100.75: ọ̀rọ̀, àwòrán, ibi ìpolówó", "Ṣàpèjúwe ilé, kì í ṣe ènìyàn"] },
            { title: "Tún ọ̀rọ̀ tí ó léwu ṣe", bullets: ["\"Perfect for young professionals\" -> yọ ọ́", "\"No kids\" -> yọ ọ́", "Lo ohun tí ilé ní: \"yàrá ìbùsùn 3\", \"nítòsí ọkọ̀ ìrìnnà\""] },
            { title: "AI lè da ẹ̀tanú kọ", bullets: ["Ka gbogbo ohun tí ó kọ fún ìṣòro ẹ̀tọ́ dọ́gba", "Sọ pé: \"Ṣàpèjúwe ilé nìkan\"", "Kò dá ọ lójú? Béèrè lọ́wọ́ broker rẹ"] }
          ],
          sources: [HUD_FHA, CFR_100_75],
          tryIt: "Béèrè lọ́wọ́ AI fún àpèjúwe ilé tí ó tóbi tó fún ìdílé. Sàmì sí gbogbo ọ̀rọ̀ tí ó ṣàpèjúwe ènìyàn dípò ilé, lẹ́yìn náà tún wọn kọ bí àwọn ohun tí ilé ní.",
          youCanNow: "dá ìṣòro ẹ̀tọ́ dọ́gba nínú ilé gbígbé mọ̀ nínú ọ̀rọ̀ àpèjúwe ilé, títí kan èyí tí AI kọ, kí o sì tún un ṣe.",
          quickCheck: [
            { objective: "O2", q: "Kí ni àpèjúwe ilé gbọ́dọ̀ ṣàpèjúwe?", options: ["Irú ènìyàn tí ó yẹ kí ó rà á", "Ẹ̀sìn àwọn aládùúgbò", "Ilé náà àti àwọn ohun tí ó ní", "Ẹni tí yóò bá òpópónà náà mu"], answer: 2, why: "Ṣàpèjúwe ilé, kì í ṣe irú ènìyàn tí o fẹ́ kí ó gbé ibẹ̀." },
            { objective: "O2", q: "AI kọ \"ideal for a couple.\" Kí ni o máa ṣe?", options: ["Fi sílẹ̀; ó dùn létí", "Fi \"or a single person\" kún un", "Gbé e lọ sí ìparí", "Fi àwọn ohun tí ilé ní rọ́pò rẹ̀, bí \"yàrá ìbùsùn méjì, òpópónà tí ó pa rọ́rọ́\""], answer: 3, why: "\"Ideal for a couple\" jẹ́ ọ̀rọ̀ tí ó léwu nípa ènìyàn; ṣàpèjúwe ilé dípò rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pípolówó ilé rẹ àti ara rẹ, gẹ́gẹ́ bí òfin",
          minutes: 5,
          goal: "Ṣe ìfiránṣẹ́ orí ìkànnì àjọlò àti ímeèlì fún ilé kan tí ó tẹ̀lé òfin ìpolówó àti òfin ímeèlì.",
          text: [
            "AI lè yí àpèjúwe ilé tí o ti ṣàyẹ̀wò padà sí ìfiránṣẹ́, ímeèlì sí àwọn ènìyàn rẹ (sphere), ọ̀rọ̀ fún ìwé ìpolówó (flyer) àti ìwé àkọsílẹ̀ fídíò kúkúrú. Lo òtítọ́ kan náà tí a fìdí rẹ̀ múlẹ̀ àti àyẹ̀wò ẹ̀tọ́ dọ́gba kan náà fún gbogbo wọn.",
            "Alákòóso ìpínlẹ̀ rẹ àti broker rẹ ní òfin ìpolówó fún àwọn tí ó ní ìwé àṣẹ, tí ó sábà máa ń ní fífi nọ́mbà ìwé àṣẹ rẹ àti orúkọ ilé-iṣẹ́ broker hàn. Ní California, alákòóso náà ni Department of Real Estate (DRE); ṣàyẹ̀wò òfin ìpínlẹ̀ tìrẹ àti ìlànà ilé-iṣẹ́ broker rẹ.",
            "Ímeèlì ìpolówó gbọ́dọ̀ tẹ̀lé CAN-SPAM: orúkọ olùfiránṣẹ́ àti àkọlé tí ó jẹ́ òtítọ́, sọ pé ìpolówó ni, fi àdírẹ́sì ìfìwéránṣẹ́ àti ọ̀nà láti yọwọ́ (unsubscribe) sí i, kí o sì bọ̀wọ̀ fún ẹni tí ó yọwọ́ láàárín ọjọ́ iṣẹ́ 10."
          ],
          steps: ["Fi AI yí àpèjúwe ilé tí o ti ṣàyẹ̀wò padà sí ìfiránṣẹ́, ímeèlì àti flyer.", "Ṣe àyẹ̀wò ẹ̀tọ́ dọ́gba lórí ọ̀kọ̀ọ̀kan.", "Fi ìsọfúnni ìwé àṣẹ àti ilé-iṣẹ́ broker kún un bí ìpínlẹ̀ àti broker rẹ ti béèrè.", "Fi àdírẹ́sì ìfìwéránṣẹ́ àti unsubscribe sínú ímeèlì ìpolówó."],
          words: [["Sphere", "àwọn ènìyàn tí o mọ̀ tí wọ́n lè rà, tà tàbí tọ́ka ẹlòmíràn sí ọ: oníbàárà àtijọ́, ọ̀rẹ́, ẹbí."], ["Ẹni tí ó ní ìwé àṣẹ (licensee)", "ẹni tí ó ní ìwé àṣẹ iṣẹ́ ilé àti ilẹ̀."]],
          slides: [
            { title: "Ilé kan, ọ̀pọ̀ ìpolówó", bullets: ["Ìfiránṣẹ́, ímeèlì, flyer, ìwé fídíò", "Òtítọ́ kan náà, àyẹ̀wò ẹ̀tọ́ dọ́gba kan náà"] },
            { title: "Òfin ìpolówó fún ẹni tí ó ní ìwé àṣẹ", bullets: ["Nígbà púpọ̀: nọ́mbà ìwé àṣẹ àti orúkọ ilé-iṣẹ́ broker", "California: Department of Real Estate", "Ṣàyẹ̀wò ìpínlẹ̀ rẹ àti ìlànà broker"] },
            { title: "Ìpìlẹ̀ ímeèlì ìpolówó", bullets: ["Olùfiránṣẹ́ àti àkọlé tí ó jẹ́ òtítọ́; sọ pé ìpolówó ni", "Àdírẹ́sì ìfìwéránṣẹ́ àti unsubscribe", "Bọ̀wọ̀ fún ẹni tí ó yọwọ́ láàárín ọjọ́ iṣẹ́ 10"] }
          ],
          sources: [DRE, CAN_SPAM],
          tryIt: "Yí àpèjúwe ilé tí o ti ṣàyẹ̀wò padà sí ìfiránṣẹ́ orí ìkànnì àjọlò àti ímeèlì kúkúrú. Ṣe àyẹ̀wò ẹ̀tọ́ dọ́gba, kí o sì fi ìsọfúnni ìwé àṣẹ àti ilé-iṣẹ́ broker tí ìpínlẹ̀ àti broker rẹ béèrè kún un.",
          youCanNow: "polówó ilé kan lórí ọ̀pọ̀ ọ̀nà, kí o sì tẹ̀lé òfin ẹ̀tọ́ dọ́gba, òfin ẹni tí ó ní ìwé àṣẹ àti òfin ímeèlì.",
          quickCheck: [
            { objective: "O3", q: "Òfin ímeèlì wo ni ó kan ímeèlì ìpolówó nínú ẹ̀kọ́ yìí?", options: ["CAN-SPAM", "Food Code", "HIPAA", "Òfin FTC nípa àyẹ̀wò ọjà"], answer: 0, why: "Ímeèlì ìpolówó gbọ́dọ̀ tẹ̀lé CAN-SPAM, títí kan àdírẹ́sì ìfìwéránṣẹ́ àti ọ̀nà láti yọwọ́." },
            { objective: "O3", q: "O fi AI yí àpèjúwe ilé rẹ padà sí ìfiránṣẹ́ orí ìkànnì àjọlò. Kí ni ohun mìíràn tí o máa ṣe kí o tó fi í síta?", options: ["Fi í síta lẹ́sẹ̀kẹsẹ̀; a ti ṣàyẹ̀wò àpèjúwe ilé tẹ́lẹ̀", "Ṣe àyẹ̀wò ẹ̀tọ́ dọ́gba kí o sì fi ìsọfúnni ìwé àṣẹ àti broker kún un bí ó ti yẹ", "Yọ iye owó kúrò", "Fi àwòrán ilé mìíràn kún un"], answer: 1, why: "Gbogbo ìpolówó ń gba àyẹ̀wò ẹ̀tọ́ dọ́gba kan náà àti ìsọfúnni tí ìpínlẹ̀ àti broker rẹ béèrè." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àpèjúwe ilé àti ẹ̀tọ́ dọ́gba nínú ilé gbígbé",
        questions: [
          { objective: "O1", q: "Àpèjúwe AI sọ pé \"ocean view\" wà, ṣùgbọ́n ilé náà kò rí òkun. Kí ni o máa ṣe?", options: ["Fi sílẹ̀; àwọn olùrà fẹ́ràn rẹ̀", "Pa á rẹ́", "Fi àwòrán òkun kún un", "Bi AI bóyá òótọ́ ni"], answer: 1, why: "Òtítọ́ tí a fìdí rẹ̀ múlẹ̀ nìkan ló yẹ nínú àpèjúwe ilé." },
          { objective: "O2", q: "Èwo ni ẹgbẹ́ tí Fair Housing Act ìjọba àpapọ̀ dáàbò bò?", options: ["Àwọ̀ irun", "Ẹgbẹ́ eré ìdárayá tí o fẹ́ràn", "Irú ọkọ̀", "Ipò ìdílé"], answer: 3, why: "Ipò ìdílé jẹ́ ọ̀kan nínú àwọn ẹgbẹ́ méje ti ìjọba àpapọ̀." },
          { objective: "O2", q: "Ọ̀rọ̀ wo ló léwu fún ẹ̀tọ́ dọ́gba nínú ilé gbígbé?", options: ["\"Perfect for young professionals\"", "\"Yàrá ìbùsùn mẹ́ta\"", "\"Òrùlé tuntun 2023\"", "\"0.3 miles sí ọkọ̀ ojú irin\""], answer: 0, why: "Ó fi ìfẹ́ hàn nípa ẹni tí ó yẹ kí ó gbé ibẹ̀." },
          { objective: "O2", q: "Òfin ìpolówó ẹ̀tọ́ dọ́gba nínú ilé gbígbé lè kan:", options: ["Pátákó ìpolówó ńlá nìkan", "Ọ̀rọ̀ nìkan", "Ọ̀rọ̀, àwòrán àti ibi tí o gbé ìpolówó sí", "Kò kan ohunkóhun lórí ayélujára"], answer: 2, why: "24 CFR 100.75 kan ọ̀rọ̀, àwòrán àti ibi tí o yàn láti polówó." },
          { objective: "O3", q: "Níbo ni o ti máa ṣàyẹ̀wò òfin ìpolówó fún ẹni tí ó ní ìwé àṣẹ ní California?", options: ["Lọ́dọ̀ olùrà kan", "Nínú ìjíròrò AI", "Department of Real Estate àti broker rẹ", "Ẹgbẹ́ kan lórí ìkànnì àjọlò"], answer: 2, why: "DRE ló ń ṣàkóso àwọn tí ó ní ìwé àṣẹ ní California." }
        ]
      }
    },
    {
      name: "Orí 2: Oníbàárà, àwọn tí ó lè di oníbàárà, àti nọ́mbà ọjà",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ìròyìn fún oníbàárà láìpín ìsọfúnni àdáni",
          minutes: 5,
          goal: "Yí àkọsílẹ̀ rẹ padà sí ìròyìn tí ó yé fún olùtà àti olùrà, pẹ̀lú àlàfo (placeholder).",
          text: [
            "Àwọn oníbàárà fẹ́ gbọ́ láti ọ̀dọ̀ rẹ léraléra. Ìròyìn ọ̀sẹ̀ fún olùtà ń sọ nípa ìfihàn ilé, èrò àwọn tí ó wá wò ó, iye ìgbà tí a wò ó lórí ayélujára àti ìgbésẹ̀ tí ó kàn. Ìròyìn fún olùrà ń sọ nípa àwọn ilé tuntun tí ó bá a mu, ìfihàn tí a ti ṣètò àti ohun tí ń ṣẹlẹ̀ nínú iye owó tí ó lè san.",
            "Lo AI láti yí àkọsílẹ̀ tí kò tíì tò padà sí ìròyìn tí ó yé, pẹ̀lú àlàfo: \"Yí àkọsílẹ̀ yìí padà sí ìròyìn ọ̀sẹ̀ tí ó lọ́yàyà fún [orúkọ olùtà]: ìfihàn 6, ìfihàn kejì 2, èrò àwọn ènìyàn ni pé ilé ìdáná dára gan-an ṣùgbọ́n ẹ̀yìnkùlé nílò ìtọ́jú, ìwò 1,200 lórí ayélujára. Dábàá ìgbésẹ̀ kan tí ó kàn.\"",
            "Má ṣe fi ìsọfúnni àdáni oníbàárà sínú irinṣẹ́ AI láé: orúkọ kíkún pẹ̀lú àdírẹ́sì, ọ̀rọ̀ owó, iye owó tí báńkì ti fọwọ́ sí (pre-approval), nọ́mbà Social Security, àwọn ìlànà ìfilọ̀ tàbí ọgbọ́n ìdúnàádúrà. Fi wọ́n kún un fúnra rẹ nínú ímeèlì tàbí CRM rẹ. Tẹ̀lé òfin ilé-iṣẹ́ broker rẹ nípa irinṣẹ́ AI."
          ],
          steps: ["Kọ àkọsílẹ̀ rẹ lẹ́yìn ọ̀sẹ̀ náà.", "Fi àlàfo rọ́pò orúkọ àti ìsọfúnni àdáni.", "Béèrè lọ́wọ́ AI fún ìròyìn tí ó yé pẹ̀lú ìgbésẹ̀ tí ó kàn.", "Fi ìsọfúnni gidi kún un fúnra rẹ kí o sì fi ránṣẹ́."],
          words: [["CRM", "customer relationship management: sọ́fítíwià fún títọpinpin àwọn oníbàárà àti àwọn tí ó lè di oníbàárà."], ["Àlàfo (placeholder)", "àyè òfìfo bí [orúkọ olùtà] tí a lò dípò ìsọfúnni àdáni gidi."]],
          slides: [
            { title: "Oníbàárà fẹ́ ìròyìn", bullets: ["Olùtà: ìfihàn, èrò ènìyàn, ìwò, ìgbésẹ̀ tí ó kàn", "Olùrà: ilé tuntun tí ó bá a mu, ìfihàn, ìyípadà ọjà"] },
            { title: "Àkọsílẹ̀ wọlé, ìròyìn jáde", bullets: ["Àkọsílẹ̀ pẹ̀lú àlàfo", "Béèrè ìròyìn tí ó lọ́yàyà àti ìgbésẹ̀ tí ó kàn"] },
            { title: "Má fi sínú AI láé", bullets: ["Orúkọ pẹ̀lú àdírẹ́sì, ọ̀rọ̀ owó, nọ́mbà SSN", "Iye pre-approval àti ìlànà ìfilọ̀", "Ọgbọ́n ìdúnàádúrà"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ fún ọ̀sẹ̀ olùtà àpẹẹrẹ kan. Lo àlàfo, béèrè lọ́wọ́ AI fún ìròyìn ọ̀sẹ̀ pẹ̀lú ìgbésẹ̀ tí ó kàn, kí o sì ṣàyẹ̀wò pé kò sí ìsọfúnni àdáni nínú rẹ̀.",
          youCanNow: "fi ìròyìn tí ó yé tí a fi AI ṣe ránṣẹ́ sí oníbàárà, kí o sì pa ìsọfúnni oníbàárà mọ́.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìròyìn ọ̀sẹ̀ fún olùtà máa ń sọ nípa rẹ̀?", options: ["Iye pre-approval olùrà", "Ètò ìdúnàádúrà rẹ", "Ìfihàn ilé, èrò ènìyàn, ìwò lórí ayélujára àti ìgbésẹ̀ tí ó kàn", "Ìfilọ̀ àwọn oníbàárà mìíràn"], answer: 2, why: "Ìròyìn olùtà ń sọ nípa ìfihàn, èrò ènìyàn, ìwò àti ìgbésẹ̀ tí ó kàn." },
            { objective: "O4", q: "Àkọsílẹ̀ rẹ ní orúkọ kíkún olùrà àti àwọn ìlànà ìfilọ̀ rẹ̀. Kí ni o máa ṣe kí o tó lẹ̀ wọ́n sínú AI?", options: ["Lẹ̀ wọ́n bí wọ́n ṣe wà", "Ṣe àkọsílẹ̀ náà ní kúkúrú", "Kọ́kọ́ túmọ̀ wọn", "Fi àlàfo rọ́pò ìsọfúnni àdáni, kí o sì fi wọ́n kún un fúnra rẹ lẹ́yìn náà"], answer: 3, why: "Ìsọfúnni àdáni oníbàárà kì í wọ inú irinṣẹ́ AI; ìwọ ni o máa fi wọ́n kún un fúnra rẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ètò ìtẹ̀lé fún àwọn tí ó lè di oníbàárà",
          minutes: 5,
          goal: "Ṣe ètò ìtẹ̀lé ọjọ́ 30 pẹ̀lú ọ̀rọ̀ mẹ́rin fún àwọn tuntun tí ó lè di oníbàárà.",
          text: [
            "Ọ̀pọ̀ jù lọ àwọn tí ó lè di oníbàárà kò tíì ṣetán lónìí. Ètò ìtẹ̀lé tí ó dúró, tí ó sì wúlò ń jẹ́ kí wọ́n máa rántí rẹ. Àpẹẹrẹ ètò ọjọ́ 30: ọjọ́ 1 ọ̀rọ̀ ọpẹ́ àti ìbéèrè kan; ọjọ́ 7 ìmọ̀ràn tí ó wúlò (àwọn ètò ìrànlọ́wọ́ fún ẹni tí ń ra ilé fún ìgbà àkọ́kọ́ tí wọ́n lè wò); ọjọ́ 14 àwòrán ṣókí ọjà ní agbègbè wọn; ọjọ́ 30 bíbéèrè àlàáfíà.",
            "Sọ fún AI pé kí ó kọ ọ̀rọ̀ kọ̀ọ̀kan ní ohùn rẹ pẹ̀lú àlàfo [orúkọ àkọ́kọ́] àti [agbègbè]. Jẹ́ kí wọ́n wúlò, kí wọ́n má ṣe tẹ̀ ènìyàn mọ́lẹ̀. Fi link sí ojú-òpó ètò ìrànlọ́wọ́ ti ìjọba tí o ti ṣàyẹ̀wò nìkan.",
            "Tọpinpin àwọn tí ó lè di oníbàárà nínú CRM rẹ tàbí spreadsheet: orúkọ, ibi tí wọ́n ti wá, ọjọ́, ìpele, ọjọ́ ìtẹ̀lé tí ó kàn. Fi ímeèlì tàbí text ránṣẹ́ sí àwọn tí wọ́n gbà kí o kàn sí wọn nìkan, kí o sì tẹ̀lé òfin ímeèlì àti text."
          ],
          steps: ["Ṣètò ìkànsí mẹ́rin láàárín ọjọ́ 30.", "Sọ fún AI pé kí ó kọ ọ̀kọ̀ọ̀kan pẹ̀lú àlàfo.", "Jẹ́ kí wọ́n wúlò, kí o sì ṣàyẹ̀wò ìsọfúnni ètò ìrànlọ́wọ́ kankan lórí ojú-òpó ìjọba.", "Tọpinpin ọjọ́ ìtẹ̀lé tí ó kàn fún ẹnìkọ̀ọ̀kan.", "Kàn sí àwọn tí wọ́n gbà nìkan."],
          words: [["Ẹni tí ó lè di oníbàárà (lead)", "ẹni tí ó lè rà, tà tàbí yá ilé ṣùgbọ́n tí kò tíì fọwọ́ sí ìwé pẹ̀lú rẹ."], ["Ìkànsí (touch)", "ìgbà kan tí o kàn sí ẹni tí ó lè di oníbàárà: ìpè, text tàbí ímeèlì."]],
          slides: [
            { title: "Ètò ọjọ́ 30", bullets: ["Ọjọ́ 1: ọ̀rọ̀ ọpẹ́ àti ìbéèrè kan", "Ọjọ́ 7: ìmọ̀ràn tí ó wúlò; Ọjọ́ 14: àwòrán ṣókí ọjà", "Ọjọ́ 30: bíbéèrè àlàáfíà"] },
            { title: "Wúlò, má ṣe tẹ̀ wọ́n mọ́lẹ̀", bullets: ["AI kọ ọ́ pẹ̀lú [orúkọ àkọ́kọ́] àti [agbègbè]", "Fi link sí ojú-òpó ìjọba tí o ti ṣàyẹ̀wò nìkan"] },
            { title: "Tọpinpin kí o sì bọ̀wọ̀", bullets: ["Orúkọ, ibi tí wọ́n ti wá, ìpele, ọjọ́ tí ó kàn", "Kàn sí àwọn tí wọ́n gbà nìkan"] }
          ],
          tryIt: "Sọ fún AI pé kí ó kọ ètò ìtẹ̀lé ọjọ́ 30 rẹ pẹ̀lú ọ̀rọ̀ mẹ́rin. Tún ọ̀kọ̀ọ̀kan ṣe sí ohùn rẹ, kí o sì ṣe ìwé ìtọpinpin pẹ̀lú ọ̀wọ̀n fún ọjọ́ ìtẹ̀lé tí ó kàn.",
          youCanNow: "tẹ̀lé ètò ìtẹ̀lé tí ó dúró, tí ó sì wúlò fún àwọn tuntun tí ó lè di oníbàárà.",
          quickCheck: [
            { objective: "O5", q: "Nínú ètò àpẹẹrẹ, kí ni ọ̀rọ̀ ọjọ́ 14?", options: ["Àwòrán ṣókí ọjà ní agbègbè wọn", "Ìbéèrè fún ẹni tí wọ́n lè tọ́ka sí ọ", "Ìwé àdéhùn láti fọwọ́ sí", "Káàdì ọjọ́ ìbí"], answer: 0, why: "Ètò náà ni: ọjọ́ 1 ọpẹ́, ọjọ́ 7 ìmọ̀ràn, ọjọ́ 14 àwòrán ṣókí ọjà, ọjọ́ 30 bíbéèrè àlàáfíà." },
            { objective: "O5", q: "O pàdé ẹnìkan níbi àpèjẹ tí kò gbà rí kí o kàn sí òun. Ṣé kí o fi í kún ètò text rẹ?", options: ["Bẹ́ẹ̀ni, gbogbo ẹni tí o bá pàdé lè di oníbàárà", "Rárá, kàn sí àwọn tí wọ́n gbà kí o kàn sí wọn nìkan", "Bẹ́ẹ̀ni, tí ọ̀rọ̀ náà bá kúrú", "Bẹ́ẹ̀ni, ṣùgbọ́n ní òpin ọ̀sẹ̀ nìkan"], answer: 1, why: "Fi ímeèlì tàbí text ránṣẹ́ sí àwọn tí wọ́n gbà nìkan, kí o sì tẹ̀lé òfin ímeèlì àti text." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Àkópọ̀ ọjà àti ìmúrasílẹ̀ fún ìfihàn ilé",
          minutes: 5,
          goal: "Yí àwọn nọ́mbà ọjà tí o mú padà sí àkópọ̀ tí ó yé fún oníbàárà, kí o sì múra open house sílẹ̀.",
          text: [
            "Àwọn oníbàárà máa ń béèrè pé, \"Báwo ni ọjà ṣe ń lọ?\" Mú àwọn nọ́mbà náà fúnra rẹ láti MLS rẹ tàbí orísun mìíràn tí ó ṣeé gbẹ́kẹ̀lé: iye owó àárín (median price), iye ọjọ́ lórí ọjà, iye ilé tí ó wà fún títà, àti ìpín iye títà sí iye ìpolówó, fún àwọn oṣù díẹ̀ sẹ́yìn.",
            "Lẹ̀ àwọn nọ́mbà náà (láìsí ìsọfúnni oníbàárà) sínú AI kí o sì béèrè pé: \"Ṣàlàyé àwọn nọ́mbà ọjà yìí fún ẹni tí ń ra ilé fún ìgbà àkọ́kọ́ ní ọ̀rọ̀ tí ó rọrùn, ní ọ̀rọ̀ 150. Má ṣe fi nọ́mbà tí èmi kò fún ọ kún un.\" Ṣàyẹ̀wò pé kò hùmọ̀ ìṣirò kankan, kí o sì fi orísun àti ọjọ́ rẹ kún un. AI kò ní ìsọfúnni ọjà ti ìsinsìnyí tí ó ṣeé gbẹ́kẹ̀lé; ìwọ ló ní in.",
            "Fún ìfihàn ilé àti open house, béèrè lọ́wọ́ AI fún àkọsílẹ̀ àyẹ̀wò: ṣáájú (iná, ìgbóná tàbí òtútù ilé, flyer, ìwé ìforúkọsílẹ̀), nígbà rẹ̀ (ààbò, kíkí ènìyàn, àkọsílẹ̀), lẹ́yìn rẹ̀ (ìtẹ̀lé láàárín wákàtí 24). Fi àwọn ìlànà ààbò ilé-iṣẹ́ broker rẹ kún un."
          ],
          steps: ["Mú àwọn nọ́mbà ti ìsinsìnyí láti MLS rẹ tàbí orísun tí ó ṣeé gbẹ́kẹ̀lé.", "Sọ fún AI pé kí ó ṣàlàyé wọn ní ọ̀rọ̀ tí ó rọrùn láìfi nọ́mbà kún un.", "Ṣàyẹ̀wò gbogbo nọ́mbà kí o sì fi orísun àti ọjọ́ kún un.", "Béèrè lọ́wọ́ AI fún àkọsílẹ̀ àyẹ̀wò open house kí o sì fi ìgbésẹ̀ ààbò kún un."],
          words: [["Iye owó àárín (median price)", "iye owó tí ó wà láàárín: ìdajì àwọn ilé ta ju iye yìí lọ, ìdajì ta kéré sí i."], ["Ọjọ́ lórí ọjà (days on market)", "bí ó ti pẹ́ tó kí àwọn ilé tó tà."], ["Ìpín iye títà sí iye ìpolówó (sale-to-list ratio)", "iye tí a ta ilé pín sí iye tí a polówó rẹ̀, ní ìdá ọgọ́rùn-ún."]],
          slides: [
            { title: "Ìwọ ni o máa mú àwọn nọ́mbà", bullets: ["Iye owó àárín àti ọjọ́ lórí ọjà", "Ilé tí ó wà fún títà àti ìpín iye títà sí iye ìpolówó", "Láti MLS rẹ tàbí orísun tí ó ṣeé gbẹ́kẹ̀lé"] },
            { title: "AI ń ṣàlàyé", bullets: ["\"Ṣàlàyé ní ọ̀rọ̀ tí ó rọrùn; má fi nọ́mbà kún un\"", "Ṣàyẹ̀wò gbogbo nọ́mbà; fi orísun àti ọjọ́ kún un"] },
            { title: "Àkọsílẹ̀ àyẹ̀wò open house", bullets: ["Ṣáájú: iná, flyer, ìwé ìforúkọsílẹ̀", "Nígbà rẹ̀: ààbò àti àkọsílẹ̀", "Lẹ́yìn rẹ̀: tẹ̀lé wọn láàárín wákàtí 24"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe ohun èlò AI ti aṣojú rẹ: àpèjúwe ilé tí o ti ṣàyẹ̀wò, àpẹẹrẹ ìròyìn fún olùtà àti olùrà, ètò ìtẹ̀lé ọjọ́ 30, àkópọ̀ ọjà láti inú àwọn nọ́mbà tí o mú, àti àkọsílẹ̀ àyẹ̀wò open house.",
          youCanNow: "ṣàlàyé àwọn nọ́mbà ọjà kedere kí o sì múra ìfihàn ilé sílẹ̀ pẹ̀lú ìrànlọ́wọ́ AI, ní lílo ìsọfúnni tìrẹ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ìpín iye títà sí iye ìpolówó ń fi wé ara wọn?", options: ["Owó ilé yíyá sí owó mortgage", "Ọjọ́ lórí ọjà sí iye ilé fún títà", "Iye tí a ta ilé sí iye tí a polówó rẹ̀", "Àwọn aṣojú sí àwọn olùrà"], answer: 2, why: "Ó ń fi iye títà wé iye ìpolówó." },
            { objective: "O6", q: "Àkópọ̀ ọjà tí AI kọ ní nọ́mbà kan tí o kò fún un. Kí ni o máa ṣe?", options: ["Fi sílẹ̀; AI ní ìsọfúnni ti ìsinsìnyí", "Sọ ọ́ di iye yíká", "Gbé e lọ sí àkíyèsí ìsàlẹ̀", "Yọ ọ́ kúrò kí o sì ṣàyẹ̀wò gbogbo nọ́mbà pẹ̀lú orísun rẹ"], answer: 3, why: "AI kò ní ìsọfúnni ọjà ti ìsinsìnyí tí ó ṣeé gbẹ́kẹ̀lé, nítorí náà o máa yọ nọ́mbà tí a hùmọ̀ kúrò, kí o sì fi orísun àti ọjọ́ kún un." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Oníbàárà, àwọn tí ó lè di oníbàárà, àti nọ́mbà ọjà",
        questions: [
          { objective: "O4", q: "Èwo ni kò gbọ́dọ̀ wọ inú irinṣẹ́ AI láé?", options: ["Iye pre-approval àti orúkọ olùrà", "\"Ìfihàn 6 ní ọ̀sẹ̀ yìí\"", "\"Àwọn ènìyàn yin ilé ìdáná\"", "\"[orúkọ olùtà]\""], answer: 0, why: "Ìsọfúnni owó oníbàárà jẹ́ àdáni." },
          { objective: "O5", q: "Kí ni ìtẹ̀lé ọjọ́ 7 tí ó dára?", options: ["Kò sí nǹkan", "\"Fọwọ́ sí i báyìí!\" tí ó tẹ̀ wọ́n mọ́lẹ̀", "Iye kírẹ́dítì (credit score) wọn", "Ìmọ̀ràn tí ó wúlò fún ipò wọn"], answer: 3, why: "Ìkànsí tí ó wúlò ń mú ìgbẹ́kẹ̀lé wá." },
          { objective: "O6", q: "Níbo ni àwọn nọ́mbà ọjà ti gbọ́dọ̀ wá?", options: ["Láti ìrántí AI", "Láti MLS rẹ tàbí orísun mìíràn tí ó ṣeé gbẹ́kẹ̀lé tí o mú fúnra rẹ", "Láti àfojúdá", "Láti ọ̀dọ̀ aládùúgbò"], answer: 1, why: "AI kò ní ìsọfúnni ọjà ti ìsinsìnyí tí ó ṣeé gbẹ́kẹ̀lé." },
          { objective: "O6", q: "AI fi \"iye owó ilé gòkè 12% lọ́dún yìí\" kún un, ṣùgbọ́n o kò fún un ní nọ́mbà yẹn rí. Ìwọ:", options: ["Yọ ọ́ kúrò", "Fi sílẹ̀", "Sọ ọ́ di iye yíká sókè", "Fi í síta"], answer: 0, why: "Má ṣe lo nọ́mbà tí ìwọ kò mú wá tí o kò sì ṣàyẹ̀wò." },
          { objective: "O6", q: "Kí ni iye owó àárín (median price)?", options: ["Owó ilé yíyá ní àròpín", "Iye owó tí ó ga jù", "Iye owó tí ó wà láàárín: ìdajì ta jù ú lọ, ìdajì ta kéré sí i", "Iye ìpolówó"], answer: 2, why: "Median ni iye tí ó wà ní àárín." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Àwọn Aṣojú Ilé àti Ilẹ̀",
    questions: [
      { objective: "O1", q: "Kí ni o máa fún AI láti kọ àpèjúwe ilé?", options: ["Nọ́mbà SSN olùtà", "Òtítọ́ tí a fìdí rẹ̀ múlẹ̀ nìkan", "Àfojúdá", "Àpèjúwe ilé ti aṣojú mìíràn"], answer: 1, why: "Òtítọ́ wọlé, ọ̀rọ̀ tí ó péye jáde." },
      { objective: "O1", q: "MLS dúró fún:", options: ["My Listing Site", "Main Loan System", "Market Law Statute", "Multiple Listing Service"], answer: 3, why: "Àwọn aṣojú ń pín ilé tí wọ́n ń tà lórí MLS." },
      { objective: "O1", q: "Kí ló dé tí o fi máa ṣàyẹ̀wò ìwọ̀n ilé (square footage) nínú àpèjúwe tí AI kọ?", options: ["Kò pọn dandan", "Láti mú un gùn sí i", "Fún ìgbádùn", "Ọ̀rọ̀ èké lè mú ẹ̀sùn àti wàhálà òfin wá"], answer: 3, why: "Òtítọ́ tí kò tọ́ ń dá ìṣòro sílẹ̀." },
      { objective: "O2", q: "Ẹgbẹ́ mélòó ni Fair Housing Act ìjọba àpapọ̀ dáàbò bò?", options: ["Mẹ́ta", "Méje", "Mẹ́wàá", "Méjì"], answer: 1, why: "Ẹ̀yà, àwọ̀ ara, orílẹ̀-èdè ìbílẹ̀, ẹ̀sìn, ìbálòpọ̀ (sex), ipò ìdílé, àìlera ara." },
      { objective: "O2", q: "Èwo ni ohun tí ilé ní, tí kì í ṣe ìfẹ́ nípa ènìyàn?", options: ["\"No kids\"", "\"Ideal for a couple\"", "\"Ilé alájà kan\"", "\"Great for young professionals\""], answer: 2, why: "Ó ń ṣàpèjúwe ilé náà." },
      { objective: "O2", q: "Kí ló dé tí AI fi lè kọ ọ̀rọ̀ tí ó ní ìṣòro ẹ̀tọ́ dọ́gba?", options: ["Ó lè da ẹ̀tanú kọ láti inú ohun tí ó kọ́", "Ó mọ òfin ẹ̀tọ́ dọ́gba dáadáa láìkù síbì kan", "Kì í ṣàṣìṣe láé", "Agbẹjọ́rò ni"], answer: 0, why: "Máa ṣàyẹ̀wò ohun tí AI kọ nígbà gbogbo." },
      { objective: "O2", q: "Ṣé California ń dáàbò bo ẹgbẹ́ púpọ̀ ju òfin ìjọba àpapọ̀ lọ?", options: ["Ní òpin ọ̀sẹ̀ nìkan", "Rárá, láé", "Bẹ́ẹ̀ni; ṣàyẹ̀wò òfin ìpínlẹ̀ rẹ", "Fún ilé yíyá nìkan"], answer: 2, why: "Ọ̀pọ̀ ìpínlẹ̀, títí kan California, ń dáàbò bo àwọn ẹgbẹ́ mìíràn pẹ̀lú." },
      { objective: "O3", q: "Ìpolówó ẹni tí ó ní ìwé àṣẹ sábà máa ń gbọ́dọ̀ ní:", options: ["Nọ́mbà ìwé àṣẹ àti orúkọ ilé-iṣẹ́ broker, gẹ́gẹ́ bí òfin ìpínlẹ̀ àti broker", "Àdírẹ́sì ilé rẹ", "Orúkọ àwọn oníbàárà", "Kò sí nǹkan"], answer: 0, why: "Ṣàyẹ̀wò òfin ìpolówó ìpínlẹ̀ rẹ." },
      { objective: "O3", q: "Ímeèlì ìpolówó sí àwọn ènìyàn rẹ (sphere) gbọ́dọ̀ ní:", options: ["Àwọn ìlànà ìfilọ̀ oníbàárà", "Àdírẹ́sì ìfìwéránṣẹ́ àti ọ̀nà láti yọwọ́ (unsubscribe)", "Olùfiránṣẹ́ èké", "Kò sí nǹkan"], answer: 1, why: "CAN-SPAM béèrè méjèèjì." },
      { objective: "O3", q: "Kí ni sphere rẹ?", options: ["Ẹni tí ń yáni lówó", "Ohun roboto", "MLS", "Àwọn ènìyàn tí o mọ̀ tí wọ́n lè rà, tà tàbí tọ́ka ẹlòmíràn sí ọ"], answer: 3, why: "Oníbàárà àtijọ́, ọ̀rẹ́ àti ẹbí." },
      { objective: "O4", q: "Ìròyìn ọ̀sẹ̀ fún olùtà ní:", options: ["Ìfihàn, èrò ènìyàn, ìwò àti ìgbésẹ̀ tí ó kàn", "Ọ̀rọ̀ owó àwọn oníbàárà mìíràn", "Ọ̀rọ̀ aṣínà rẹ", "Kò sí nǹkan"], answer: 0, why: "Àwọn wọ̀nyí ń jẹ́ kí olùtà mọ ohun tí ń ṣẹlẹ̀." },
      { objective: "O4", q: "Èwo ni àlàfo (placeholder)?", options: ["Nọ́mbà Social Security", "Orúkọ kíkún àti àdírẹ́sì olùtà", "Nọ́mbà àkáǹtì báńkì", "[orúkọ olùtà]"], answer: 3, why: "Àlàfo ń pa ìsọfúnni àdáni mọ́ kúrò nínú rẹ̀." },
      { objective: "O4", q: "Ọgbọ́n ìdúnàádúrà gbọ́dọ̀ jẹ́:", options: ["Èyí tí a fi síta lórí ayélujára", "Èyí tí a lẹ̀ sínú ìjíròrò", "Èyí tí a pa mọ́ kúrò nínú irinṣẹ́ AI", "Èyí tí a pín fún gbogbo olùrà"], answer: 2, why: "Ìsọfúnni àṣírí oníbàárà ni." },
      { objective: "O5", q: "Ètò ìtẹ̀lé ọjọ́ 30 ní nǹkan bí:", options: ["Ìpè ọgọ́rùn-ún", "Ìkànsí mẹ́rin tí ó wúlò", "Kò sí", "Text ojoojúmọ́ tí ó ń tẹ̀ wọ́n mọ́lẹ̀"], answer: 1, why: "Ìtẹ̀lé tí ó dúró tí ó sì wúlò ló ṣiṣẹ́ jù." },
      { objective: "O5", q: "Ta ni o lè fi ímeèlì tàbí text ìpolówó ránṣẹ́ sí?", options: ["Àwọn àjèjì", "Ẹnikẹ́ni tí o bá rí nọ́mbà rẹ̀", "Àkọsílẹ̀ tí a rà", "Àwọn tí wọ́n gbà kí o kàn sí wọn"], answer: 3, why: "Ìyọ̀ǹda ló kọ́kọ́ wá." },
      { objective: "O5", q: "Kí o tó fi link sí ètò ìrànlọ́wọ́ fún ẹni tí ń ra ilé fún ìgbà àkọ́kọ́, ìwọ:", options: ["Méfò àwọn òfin rẹ̀", "Gbẹ́kẹ̀lé link AI", "Ṣàyẹ̀wò ojú-òpó ìjọba rẹ̀", "Má ṣàyẹ̀wò"], answer: 2, why: "Ìsọfúnni ètò ìrànlọ́wọ́ máa ń yí padà." },
      { objective: "O6", q: "Ọjọ́ lórí ọjà (days on market) ń wọn:", options: ["Bí ó ti pẹ́ tó kí àwọn ilé tó tà", "Wákàtí open house", "Ọjọ́ owó commission", "Ọjọ́ ìsinmi"], answer: 0, why: "Ó ń fi bí ọjà ṣe yára tó hàn." },
      { objective: "O6", q: "Nígbà tí AI bá ń ṣàlàyé nọ́mbà ọjà, kí ni o máa sọ fún un?", options: ["Hùmọ̀ nọ́mbà púpọ̀ sí i", "Má ṣe fi nọ́mbà tí èmi kò fún ọ kún un", "Sọ àsọtẹ́lẹ̀ ọjọ́ iwájú", "Lo ojú-òpó wẹ́ẹ̀bù èyíkéyìí"], answer: 1, why: "Èyí ń dín ìṣirò tí a hùmọ̀ kù." },
      { objective: "O6", q: "Ìgbà wo ni o máa tẹ̀lé àwọn ènìyàn lẹ́yìn open house?", options: ["Ọdún tí ó ń bọ̀", "Láàárín wákàtí 24", "Láé", "Tí wọ́n bá pè nìkan"], answer: 1, why: "Ìtẹ̀lé kíákíá ń mú oníbàárà wá." },
      { objective: "O2", q: "Ẹ̀kọ́ yìí jẹ́:", options: ["Kì í ṣe ìmọ̀ràn òfin; ṣàyẹ̀wò HUD, alákòóso ìpínlẹ̀ rẹ àti broker", "Ìmọ̀ràn òfin", "Ìwé àṣẹ", "Ìwé àdéhùn"], answer: 0, why: "Àwọn orísun ìjọba àti broker rẹ ló ní ọ̀rọ̀ ìkẹyìn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 7, 11, 13, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àpèjúwe ilé tí ó péye",
        objective: "O1",
        notYet: "Àpèjúwe ilé ní òtítọ́ kan tí a kò fìdí rẹ̀ múlẹ̀, bí ohun kan tí ilé náà kò ní.",
        meets: "A ṣàyẹ̀wò gbogbo òtítọ́ ní ìlà-ìlà pẹ̀lú àkọsílẹ̀, olùtà tàbí ìbẹ̀wò rẹ.",
        exceeds: "Ó kọ orísun àwọn òtítọ́ pàtàkì sílẹ̀, bí ìwọ̀n ilé (square footage)."
      },
      {
        name: "Ọ̀rọ̀ ẹ̀tọ́ dọ́gba nínú ilé gbígbé",
        objective: "O2",
        notYet: "Ìlà kan ṣàpèjúwe ẹni tí ó yẹ kí ó gbé ibẹ̀ dípò ilé náà.",
        meets: "Gbogbo ìlà ń ṣàpèjúwe ilé àti àwọn ohun tí ó ní nìkan.",
        exceeds: "Ó tún ṣàyẹ̀wò àwọn àwòrán àti ibi ìpolówó, ó sì lè ṣàlàyé àtúnṣe kọ̀ọ̀kan."
      },
      {
        name: "Ìròyìn oníbàárà tí ó pa àṣírí mọ́",
        objective: "O4",
        notYet: "Orúkọ oníbàárà pẹ̀lú àdírẹ́sì, ọ̀rọ̀ owó tàbí ìlànà ìfilọ̀ wọ inú irinṣẹ́ AI.",
        meets: "Àpẹẹrẹ ìròyìn fún olùtà àti olùrà lo àlàfo, pẹ̀lú ìgbésẹ̀ tí ó kàn tí ó yé.",
        exceeds: "Inú ímeèlì tàbí CRM aṣojú fúnra rẹ̀ nìkan ni a ti fi ìsọfúnni gidi kún àlàfo."
      },
      {
        name: "Ètò ìtẹ̀lé fún àwọn tí ó lè di oníbàárà",
        objective: "O5",
        notYet: "Ọ̀rọ̀ kò tó mẹ́rin, tàbí ọ̀rọ̀ náà ń tẹ̀ wọ́n mọ́lẹ̀, tàbí a kò ṣàyẹ̀wò wọn.",
        meets: "Ọ̀rọ̀ mẹ́rin tí ó wúlò láàárín ọjọ́ 30 pẹ̀lú àlàfo àti ọjọ́ tí ó kàn tí a ń tọpinpin.",
        exceeds: "A ṣàyẹ̀wò link ètò ìrànlọ́wọ́ lórí ojú-òpó ìjọba, a sì kọ wọ́n sílẹ̀."
      },
      {
        name: "Àkópọ̀ ọjà àti open house",
        objective: "O6",
        notYet: "Àkópọ̀ náà ní nọ́mbà kan tí kò wá láti orísun rẹ.",
        meets: "Àkópọ̀ ní ọ̀rọ̀ tí ó rọrùn láti inú nọ́mbà tìrẹ pẹ̀lú orísun àti ọjọ́, pẹ̀lú àkọsílẹ̀ àyẹ̀wò open house.",
        exceeds: "Àkọsílẹ̀ àyẹ̀wò ní ìgbésẹ̀ ààbò ilé-iṣẹ́ broker àti ìtẹ̀lé láàárín wákàtí 24."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn aṣojú tí wọ́n sọ pé wọ́n ń lo ètò ìtẹ̀lé tí ó dúró láàárín ọjọ́ 30 (ìwádìí ìtẹ̀lé)",
      "Àwọn aṣojú tí wọ́n sọ pé wọ́n ń dín àkókò kù ní ọ̀sẹ̀ kọ̀ọ̀kan lórí àpèjúwe ilé àti ìròyìn oníbàárà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ iṣẹ́ kékeré mìíràn ti Koach Learn láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́",
      "Òtítọ́ tí a fìdí rẹ̀ múlẹ̀ fún ilé gidi kan tàbí àpẹẹrẹ, àti àwọn nọ́mbà àìpẹ́ yìí láti MLS rẹ",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Rán àwọn akẹ́kọ̀ọ́ létí pé ẹ̀kọ́ yìí kì í ṣe ìmọ̀ràn òfin; ìbéèrè nípa ẹ̀tọ́ dọ́gba nínú ilé gbígbé, ìpolówó àti ìwé àṣẹ ń lọ sí HUD, alákòóso ìpínlẹ̀ àti broker wọn.",
      "Ṣe iṣẹ́ ẹgbẹ́: ka àpẹẹrẹ àpèjúwe ilé tí AI kọ sókè, kí ẹ sì jọ dá àwọn ewu ẹ̀tọ́ dọ́gba mọ̀.",
      "Lo àpẹẹrẹ ilé àti àlàfo nínú kíláàsì; má ṣe lẹ̀ ìsọfúnni àdáni oníbàárà gidi sínú irinṣẹ́ AI láé.",
      "Sọ fún àwọn akẹ́kọ̀ọ́ pé kí wọ́n ṣàyẹ̀wò ìlànà ilé-iṣẹ́ broker wọn nípa irinṣẹ́ AI kí wọ́n tó lò ó pẹ̀lú oníbàárà.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
