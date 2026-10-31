"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-ai-marketing.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC_ADS = { name: "FTC: Ìpìlẹ̀ ìpolówó àti ìtajà (Advertising and Marketing basics)", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };
const FTC_REVIEWS = { name: "FTC: Òfin nípa èrò àwọn oníbàárà àti ẹ̀rí ìyìn, ìbéèrè àti ìdáhùn", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const CAN_SPAM = { name: "FTC: Òfin CAN-SPAM, ìtọ́sọ́nà fún àwọn oníṣòwò", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-marketing-yo",
  lang: "yo",
  translationOf: "smallbiz-ai-marketing",
  category: "Small Business",
  name: "AI nínú Ìpolówó fún Iṣẹ́ Òwò Kékeré",
  skills: "Kíkọ ọ̀rọ̀ ìpolówó, Ṣíṣe àwọn ìfiránṣẹ́ orí ìkànnì àjọlò pẹ̀lú AI, Ṣíṣe ìwé ìpolówó (flyer), Ṣíṣètò kàlẹ́ńdà àkóónú, Sísọ òtítọ́ nínú ìpolówó, Mímọ ohun tó ń ṣiṣẹ́",
  outcome: "ṣètò kí o sì ṣe ìpolówó oṣù kan fún iṣẹ́ òwò rẹ pẹ̀lú ìrànlọ́wọ́ AI: ọ̀rọ̀ pàtàkì kan tó yé, kàlẹ́ńdà àkóónú ọ̀sẹ̀ mẹ́rin, àwọn ìfiránṣẹ́ orí ìkànnì àjọlò àti ìwé ìpolówó kan, gbogbo rẹ̀ pẹ̀lú ọ̀rọ̀ òtítọ́, àti ọ̀nà tó rọrùn láti rí èwo nínú àwọn ìfiránṣẹ́ náà ló mú oníbàárà wá.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olórí iṣẹ́ òwò kékeré tí wọ́n ń ṣe ìpolówó fúnra wọn: ilé oúnjẹ àti ọkọ̀ oúnjẹ, ṣọ́ọ̀bù irun àti ilé ìgẹ̀rí, ṣọ́ọ̀bù, iṣẹ́ ìmọ́tótó àti iṣẹ́ àtúnṣe, àti iṣẹ́ òwò inú ilé. Ọ̀pọ̀ lára àwọn akẹ́kọ̀ọ́ wa ni iṣẹ́ òwò tí àwọn ẹ̀yà kékeré ní, tí wọ́n ń polówó fún àdúgbò àti àwùjọ wọn.",
    "O máa lo àwọn irinṣẹ́ AI ọ̀fẹ́ láti rí ọ̀rọ̀ pàtàkì rẹ, kọ àwọn ìfiránṣẹ́ àti àkọlé wọn, ṣe ìwé ìpolówó, ṣètò àkóónú oṣù kan, sọ òtítọ́ nínú ìpolówó rẹ gẹ́gẹ́ bí òfin FTC (àjọ ìjọba Amẹ́ríkà tó ń ṣọ́ ìtajà) ṣe sọ, kí o sì tọpinpin ohun tó ń mú oníbàárà wá gan-an.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Àwọn iṣẹ́ náà máa di ìpolówó oṣù kan tí ó ṣetán láti fi síta."
  ],
  finalTask: "Ṣe ìpolówó oṣù kan: kọ ọ̀rọ̀ pàtàkì rẹ, kàlẹ́ńdà àkóónú ọ̀sẹ̀ mẹ́rin tí ó ní ó kéré tán ìfiránṣẹ́ mẹ́jọ, àkọlé tó ti parí fún mẹ́rin nínú wọn, ìwé ìpolówó kan tí o fi irinṣẹ́ ìṣẹ̀dá ṣe, àti tábìlì ìtọpinpin tí ó fi hàn bí o ṣe máa mọ èwo nínú àwọn ìfiránṣẹ́ ló mú oníbàárà wá. Ṣàyẹ̀wò pé gbogbo ọ̀rọ̀ tí o sọ jẹ́ òtítọ́, àti pé o ní ẹ̀tọ́ láti lo gbogbo àwòrán.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olórí iṣẹ́ òwò kékeré tí wọ́n ń ṣe ìpolówó fúnra wọn: ilé oúnjẹ àti ọkọ̀ oúnjẹ, ṣọ́ọ̀bù irun àti ilé ìgẹ̀rí, ṣọ́ọ̀bù, iṣẹ́ ìmọ́tótó àti iṣẹ́ àtúnṣe, àti iṣẹ́ òwò inú ilé. Ọ̀pọ̀ ni iṣẹ́ òwò tí àwọn ẹ̀yà kékeré ní, tí wọ́n ń polówó fún àdúgbò àti àwùjọ wọn.",
    startingPoint: "Wọ́n máa ń fi nǹkan síta lórí ìkànnì àjọlò lẹ́ẹ̀kọ̀ọ̀kan, wọ́n sì lè ti ṣe ìwé ìpolówó rí. Wọn kò ní ọ̀rọ̀ pàtàkì, kàlẹ́ńdà àkóónú tàbí ìtọpinpin, wọn kò sì fi bẹ́ẹ̀ lo AI fún ìpolówó.",
    gap: "Ìfiránṣẹ́ láìsí ètò ń gba àkókò, kì í sì í fi bẹ́ẹ̀ mú oníbàárà wá. AI sì lè fi ọ̀rọ̀ tàbí àwòrán tí kì í ṣe òtítọ́ kún un, èyí tí ó lè tàpá sí òfin FTC kí ó sì ba ìgbẹ́kẹ̀lé jẹ́. Àwọn olórí iṣẹ́ òwò nílò ọ̀rọ̀ pàtàkì tó yé, àkóónú oṣù kan tí a ṣètò tí ó sì jẹ́ òtítọ́, àti ọ̀nà tó rọrùn láti rí ohun tó ń mú oníbàárà wá.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú",
      "Ẹ̀rọ: smartphone tí ó ní kámẹ́rà; kọ̀mpútà máa ràn ọ́ lọ́wọ́ fún ìwé ìpolówó àti tábìlì",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 tí ó bá ọjọ́ iṣẹ́ tó kún mu",
      "Òfin: òtítọ́ nínú ìpolówó ti FTC, òfin FTC nípa èrò oníbàárà, àti CAN-SPAM fún ímeèlì ìpolówó",
      "Àṣírí àti ẹ̀tọ́: gba àṣẹ kí o tó fi àwòrán oníbàárà síta, má sì fi orúkọ oníbàárà sínú AI"
    ],
    prerequisites: "\"Ìfihàn sí AI fún Iṣẹ́ Òwò Kékeré\" máa ràn ọ́ lọ́wọ́, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ní lílo ìlànà ọ̀rọ̀ pàtàkì àti olùrànlọ́wọ́ AI", action: "kọ ọ̀rọ̀ pàtàkì tí ó sọ àwọn tí o ń sìn, ohun tí o ń ṣe àti ohun tí ó mú ọ yàtọ̀", standard: "ní gbólóhùn òtítọ́ kan tàbí méjì tí ó dún bí ìwọ" },
    { id: "O2", condition: "Tí o bá ti ní ọ̀rọ̀ pàtàkì rẹ", action: "kọ àwọn ìfiránṣẹ́ orí ìkànnì àjọlò àti àkọlé wọn pẹ̀lú ìrànlọ́wọ́ AI", standard: "pẹ̀lú àlàyé gidi kan nínú ọ̀kọ̀ọ̀kan, láìsí ohun tí kì í ṣe òtítọ́, àti àṣẹ fún àwòrán oníbàárà èyíkéyìí" },
    { id: "O3", condition: "Ní lílo irinṣẹ́ ìṣẹ̀dá ọ̀fẹ́", action: "ṣe ìwé ìpolówó fún ẹ̀bùn kan tàbí ìṣẹ̀lẹ̀ kan", standard: "pẹ̀lú àkọlé ńlá, àwòrán gidi kan, àlàyé mẹ́ta àti ìpè sí ìgbésẹ̀, gbogbo rẹ̀ ti di àyẹ̀wò" },
    { id: "O4", condition: "Ní lílo olùrànlọ́wọ́ AI àti tábìlì kan", action: "ṣètò kàlẹ́ńdà àkóónú ọ̀sẹ̀ mẹ́rin", standard: "pẹ̀lú iye ìfiránṣẹ́ tí o lè máa ṣe déédéé, oríṣiríṣi ìfiránṣẹ́, àti gbogbo ọjọ́ ti di àyẹ̀wò" },
    { id: "O5", condition: "Tí o bá ti ní àwọn àkọlé àti ìwé ìpolówó rẹ", action: "ṣàyẹ̀wò ìpolówó rẹ fún ọ̀rọ̀ tí o kò lè fi ẹ̀rí hàn, èrò oníbàárà ayédèrú àti òfin ímeèlì", standard: "kí gbogbo ọ̀rọ̀ tí kò ní ẹ̀rí ti di yíyípadà tàbí yíyọ kúrò" },
    { id: "O6", condition: "Tí o bá ti ní àwọn ìfiránṣẹ́ àti ìwé ìpolówó rẹ", action: "ṣe tábìlì ìtọpinpin tí ó fi hàn èwo nínú ìpolówó rẹ ló ń mú oníbàárà wá", standard: "pẹ̀lú kóòdù ẹ̀dínwó lórí ẹ̀bùn kan, kí o sì fi tábìlì náà jẹ́rìí sí àpẹẹrẹ èyíkéyìí tí AI rí" }
  ],
  chapters: [
    {
      name: "Orí 1: Ọ̀rọ̀ pàtàkì rẹ àti àwọn ìfiránṣẹ́ rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Wíwá ọ̀rọ̀ pàtàkì ìpolówó rẹ",
          minutes: 5,
          goal: "Kọ gbólóhùn kan tàbí méjì tí ó sọ àwọn tí o ń sìn, ohun tí o ń ṣe àti ohun tí ó mú ọ yàtọ̀.",
          text: [
            "Ọ̀rọ̀ pàtàkì rẹ ni ìdáhùn kúkúrú sí ìbéèrè náà \"Kí ló dé tí mo fi máa yan ọ́?\" Gbogbo ìfiránṣẹ́, ìwé ìpolówó àti àmì ìkọ̀wé rẹ ló yẹ kí ó tún un sọ ní ọ̀rọ̀ míì.",
            "Ìlànà tó rọrùn: A ń ran [àwọn wo] lọ́wọ́ láti rí [kí ni] pẹ̀lú [ohun tí ó mú wa yàtọ̀]. Àpẹẹrẹ: \"A ń ran àwọn ẹbí tí ọwọ́ wọn dí ní South Sacramento lọ́wọ́ láti rí oúnjẹ Filipino bí ti ilé, tí ó ṣetán ní ìṣẹ́jú 10, tí ẹbí kan náà ti ń sè láti ọdún 2009.\"",
            "Ní kí AI ràn ọ́ lọ́wọ́ láti rí i: \"Èyí ni ohun tí àwọn oníbàárà ń sọ nípa ṣọ́ọ̀bù mi àti ohun tí mo ń ṣe tí ó yàtọ̀. Kọ ọ̀nà márùn-ún láti sọ ọ̀rọ̀ pàtàkì mi ní gbólóhùn kan.\" Yan èyí tí ó jẹ́ òtítọ́ tí ó sì dún bí ìwọ."
          ],
          steps: ["Kọ àwọn tí o ń sìn.", "Kọ ohun tí wọ́n ń rí gbà.", "Kọ ohun tí ó mú ọ yàtọ̀ (òtítọ́, tí ó ṣe pàtó).", "Ní kí AI kọ ọ̀nà márùn-ún, kí o sì yan ọ̀kan."],
          words: [["Ọ̀rọ̀ pàtàkì (core message)", "gbólóhùn kúkúrú tí ó sọ ìdí tí oníbàárà fi yẹ kí ó yan ọ́."], ["Ohun tí ó mú ọ yàtọ̀ (differentiator)", "ohun tí ó jẹ́ òtítọ́ tí ó mú ọ yàtọ̀ sí àwọn tí ẹ jọ ń tà."]],
          slides: [
            { title: "Kí ló dé tí mo fi máa yan ọ́?", bullets: ["Ọ̀rọ̀ pàtàkì rẹ ló ń dáhùn rẹ̀", "Tún un sọ nínú gbogbo ìfiránṣẹ́ àti ìwé ìpolówó"] },
            { title: "Ìlànà náà", bullets: ["A ń ran [àwọn wo] lọ́wọ́", "láti rí [kí ni]", "pẹ̀lú [ohun tí ó mú wa yàtọ̀]"] },
            { title: "Lo AI láti wá a", bullets: ["Sọ ohun tí oníbàárà ń sọ nípa rẹ", "Ní kí ó kọ ọ̀nà márùn-ún", "Yan èyí tí ó jẹ́ òtítọ́ tí ó sì dún bí ìwọ"] }
          ],
          tryIt: "Kọ ìlànà náà fún iṣẹ́ òwò rẹ. Lẹ́yìn náà, ní kí olùrànlọ́wọ́ AI kọ ọ̀nà márùn-ún, kí o sì yan èyí tí ó dára jù.",
          youCanNow: "kọ ọ̀rọ̀ pàtàkì tó yé fún iṣẹ́ òwò rẹ.",
          quickCheck: [
            { objective: "O1", q: "Ìbéèrè wo ni ọ̀rọ̀ pàtàkì ń dáhùn fún oníbàárà?", options: ["Aago mélòó ni ẹ máa ń tì?", "Òṣìṣẹ́ mélòó ni ẹ ní?", "Kí ló dé tí mo fi máa yan ọ́?", "Ibo ni ẹ ti ra ẹ̀rọ yín?"], answer: 2, why: "Ọ̀rọ̀ pàtàkì ń sọ fún oníbàárà ìdí tí wọ́n fi máa yan ọ́." },
            { objective: "O1", q: "AI kọ ọ̀rọ̀ pàtàkì márùn-ún fún ọ, èyí tí ó dára jù sì sọ pé o jẹ́ \"ṣọ́ọ̀bù irun tó gbajúmọ̀ jù lọ ní ìlú\". Kí ni o máa ṣe?", options: ["Lò ó nítorí pé ó dún lágbára", "Yan èyí tí ó jẹ́ òtítọ́ tí ó sì dún bí ìwọ", "Lo gbogbo márùn-ún", "Fi \"bóyá\" kún un"], answer: 1, why: "Ọ̀rọ̀ pàtàkì rẹ gbọ́dọ̀ jẹ́ òtítọ́ kí ó sì dún bí ìwọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìfiránṣẹ́ àti àkọlé pẹ̀lú AI",
          minutes: 5,
          goal: "Yí ọ̀rọ̀ pàtàkì rẹ padà sí ọ̀pọ̀ ìfiránṣẹ́ orí ìkànnì àjọlò ní ohùn ara rẹ.",
          text: [
            "Ìfiránṣẹ́ tó dára fún iṣẹ́ òwò kékeré máa ń fi nǹkan gidi hàn: oúnjẹ àkànṣe ti òní, irun ṣáájú àti lẹ́yìn gígẹ̀, oníbàárà tí inú rẹ̀ dùn (pẹ̀lú àṣẹ), àwọn òṣìṣẹ́ rẹ, ohun tó ń lọ lẹ́yìn ìran, ìmọ̀ràn kan, ìṣẹ̀lẹ̀ kan. Ènìyàn ló ń tẹ̀lé ènìyàn.",
            "Ní kí AI kọ àkọ́pẹrẹ: \"Kọ àkọlé Instagram kúkúrú mẹ́rin fún ṣọ́ọ̀bù ìgẹ̀rí mi. Ọ̀rọ̀ pàtàkì: [ọ̀rọ̀ rẹ]. Ọ̀kan nípa àkókò iṣẹ́ wa ní ọjọ́ Sátidé, ọ̀kan nípa irun fade, ọ̀kan tí ó ń ṣe ìfihàn Marcus, onígẹ̀rí wa tuntun, àti ọ̀kan pẹ̀lú ìmọ̀ràn ìtọ́jú irun. Ohùn ọ̀rẹ́, gbólóhùn 2 nínú ọ̀kọ̀ọ̀kan, hashtag 3.\"",
            "Lẹ́yìn náà, ṣàtúnṣe. Fi àlàyé gidi tí ìwọ nìkan mọ̀ kún un. Yọ ohunkóhun tí ó dún bí irọ́ tàbí tí ó pọ̀ jù kúrò. Máa gba àṣẹ nígbà gbogbo kí o tó fi àwòrán tàbí orúkọ oníbàárà síta."
          ],
          steps: ["Yan oríṣi ìfiránṣẹ́ mẹ́rin: ẹ̀bùn, lẹ́yìn ìran, òṣìṣẹ́, ìmọ̀ràn.", "Ní kí AI kọ àkọlé pẹ̀lú ọ̀rọ̀ pàtàkì àti ohùn rẹ.", "Fi àlàyé gidi kún un kí o sì yọ ohun tí kì í ṣe òtítọ́.", "Gba àṣẹ fún àwòrán tàbí orúkọ oníbàárà èyíkéyìí."],
          words: [["Àkọlé (caption)", "ọ̀rọ̀ tí ó ń bá fọ́tò tàbí fídíò lórí ìkànnì àjọlò lọ."], ["Hashtag", "ọ̀rọ̀ tí ó ní # níwájú, tí a fi ń kó àwọn ìfiránṣẹ́ lórí kókó kan jọ."]],
          slides: [
            { title: "Fi nǹkan gidi síta", bullets: ["Oúnjẹ àkànṣe ti òní tàbí ṣáájú àti lẹ́yìn", "Àwọn òṣìṣẹ́ rẹ àti ohun tó ń lọ lẹ́yìn ìran", "Ìmọ̀ràn àti ìṣẹ̀lẹ̀"] },
            { title: "Ní kí AI kọ àkọ́pẹrẹ", bullets: ["Sọ ọ̀rọ̀ pàtàkì àti ohùn rẹ fún un", "Sọ oríṣi ìfiránṣẹ́ àti bí ó ṣe máa gùn tó", "Ní kí ó fi hashtag díẹ̀ kún un"] },
            { title: "Lẹ́yìn náà, sọ ọ́ di gidi", bullets: ["Fi àlàyé tí ìwọ nìkan mọ̀ kún un", "Yọ ohun tí ó dún bí irọ́ tàbí tí ó pọ̀ jù", "Àṣẹ kí o tó fi fọ́tò tàbí orúkọ oníbàárà síta"] }
          ],
          tryIt: "Ní kí AI kọ àkọlé mẹ́rin fún iṣẹ́ òwò rẹ pẹ̀lú ọ̀rọ̀ pàtàkì rẹ. Ṣàtúnṣe ọ̀kọ̀ọ̀kan láti fi àlàyé gidi kan kún un, kí o sì yọ ohunkóhun tí kì í ṣe òtítọ́.",
          youCanNow: "kọ àwọn ìfiránṣẹ́ orí ìkànnì àjọlò pẹ̀lú ìrànlọ́wọ́ AI tí ó dún bí gidi àti bí iṣẹ́ òwò rẹ.",
          quickCheck: [
            { objective: "O2", q: "Kí ni àkọlé (caption)?", options: ["Ọ̀rọ̀ tí ó ń bá fọ́tò tàbí fídíò lọ lórí ìkànnì àjọlò", "Ìwé àṣẹ iṣẹ́ òwò", "Oríṣi ìwé ìpolówó kan", "Èrò oníbàárà"], answer: 0, why: "Àkọlé ni ọ̀rọ̀ tí ó ń bá fọ́tò tàbí fídíò rẹ lọ." },
            { objective: "O2", q: "O fẹ́ fi fọ́tò dáradára ti irun tuntun oníbàárà kan síta. Kí ni o máa kọ́kọ́ ṣe?", options: ["Fi í síta kí o sì fi orúkọ wọn sí i (tag)", "Bò ojú rẹ̀ kí o sì fi í síta", "Béèrè lọ́wọ́ AI bóyá ó dára", "Gba àṣẹ lọ́wọ́ oníbàárà náà"], answer: 3, why: "O nílò àṣẹ oníbàárà kí o tó fi fọ́tò wọn síta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe ìwé ìpolówó tàbí àwòrán ìpolówó",
          minutes: 5,
          goal: "Ṣe ìwé ìpolówó tàbí àwòrán tó yé fún ẹ̀bùn kan tàbí ìṣẹ̀lẹ̀ kan.",
          text: [
            "Ìwé ìpolówó (flyer) máa ń ṣiṣẹ́ lórí káńtà, lórí pátákó àwùjọ, nínú ìwé ìkéde ṣọ́ọ̀ṣì, tàbí bí ìfiránṣẹ́ orí ìkànnì àjọlò. Lo irinṣẹ́ ìṣẹ̀dá ọ̀fẹ́ bí Canva tàbí Adobe Express, kí o sì bẹ̀rẹ̀ láti inú àwòṣe (template).",
            "Jẹ́ kí àwọn apá rẹ̀ yé: àkọlé ńlá (ẹ̀bùn náà), àwòrán kan, àlàyé kúkúrú mẹ́ta (kí ni, ìgbà wo, ibo), àti ìpè sí ìgbésẹ̀ (\"Pè wá láti gba àyè\", \"Bèrè lórí ayélujára\"). Kọ ọ̀rọ̀ pàtàkì rẹ ní ọ̀rọ̀ kékeré ní ìsàlẹ̀.",
            "Tí o bá lo àwòrán tí AI ṣe, rí i dájú pé kò fi oúnjẹ, iṣẹ́ tàbí àbájáde tí o kò ní gan-an hàn. Lo fọ́tò tìrẹ nígbà tí o bá lè ṣe é; oníbàárà máa ń gba àwòrán gidi gbọ́."
          ],
          steps: ["Ṣí irinṣẹ́ ìṣẹ̀dá kan kí o sì yan àwòṣe.", "Kọ àkọlé ńlá pẹ̀lú ẹ̀bùn náà.", "Fi àwòrán kan, àlàyé mẹ́ta àti ìpè sí ìgbésẹ̀ kún un.", "Ṣàyẹ̀wò sípẹ́lì, nọ́mbà fóònù, ọjọ́ àti àdírẹ́sì.", "Gbà á sílẹ̀ tàbí fi ránṣẹ́."],
          words: [["Ìpè sí ìgbésẹ̀ (call to action)", "ọ̀rọ̀ tí ó sọ ohun tí ènìyàn máa ṣe tẹ̀lé e fún wọn, bí \"Pè wá láti gba àyè\"."], ["Àkọlé ńlá (headline)", "àwọn ọ̀rọ̀ tí ó tóbi jù lọ lórí ìwé ìpolówó tàbí ìpolówó."]],
          slides: [
            { title: "Àwọn apá ìwé ìpolówó tó yé", bullets: ["Àkọlé ńlá: ẹ̀bùn náà", "Àwòrán kan", "Kí ni, ìgbà wo, ibo", "Ìpè sí ìgbésẹ̀"] },
            { title: "Irinṣẹ́ ìṣẹ̀dá ọ̀fẹ́", bullets: ["Canva tàbí Adobe Express", "Bẹ̀rẹ̀ láti inú àwòṣe"] },
            { title: "Àwòrán tí oníbàárà ń gbà gbọ́", bullets: ["Lo fọ́tò tìrẹ nígbà tí o bá lè ṣe é", "Àwòrán AI kò gbọ́dọ̀ fi ohun tí o kò ní hàn"] }
          ],
          tryIt: "Ṣe ìwé ìpolówó fún ẹ̀bùn gidi kan tàbí ìṣẹ̀lẹ̀ gidi kan, pẹ̀lú àkọlé ńlá, àwòrán kan, àlàyé mẹ́ta àti ìpè sí ìgbésẹ̀. Ṣàyẹ̀wò gbogbo àlàyé kí o tó fi í pamọ́.",
          youCanNow: "ṣe ìwé ìpolówó tàbí àwòrán ìpolówó tó yé fún iṣẹ́ òwò rẹ.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìpè sí ìgbésẹ̀?", options: ["Ìpè fóònù sí oníbàárà", "Àkọlé ńlá", "Ọ̀rọ̀ tí ó sọ ohun tí ènìyàn máa ṣe tẹ̀lé e", "Àkọsílẹ̀ iye owó"], answer: 2, why: "Ìpè sí ìgbésẹ̀ ń sọ ìgbésẹ̀ tó kàn fún ènìyàn, bí \"Pè wá láti gba àyè\"." },
            { objective: "O3", q: "Ìwé ìpolówó rẹ ní àwòrán AI ti kéèkì tí o kò ṣe. Kí ni o máa ṣe?", options: ["Fi sílẹ̀ nítorí pé ó rẹwà", "Sọ ọ́ di kékeré", "Kọ ọ̀rọ̀ sí i pé AI ló ṣe é", "Fi fọ́tò gidi ti ohun tí o ń tà rọ́pò rẹ̀"], answer: 3, why: "Àwòrán gbọ́dọ̀ fi ohun tí o ń tà gan-an hàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ọ̀rọ̀ pàtàkì rẹ àti àwọn ìfiránṣẹ́ rẹ",
        questions: [
          { objective: "O1", q: "Kí ni ọ̀rọ̀ pàtàkì ń dáhùn?", options: ["Kí ni ọ̀rọ̀ aṣínà rẹ?", "Kí ló dé tí mo fi máa yan ọ́?", "Ibo ni báńkì wà?", "Ọmọ ọdún mélòó ni olórí iṣẹ́ òwò náà?"], answer: 1, why: "Ọ̀rọ̀ pàtàkì ń sọ ìdí tí oníbàárà fi yẹ kí ó yan ọ́." },
          { objective: "O1", q: "Èwo ni ọ̀rọ̀ pàtàkì tó lágbára?", options: ["\"Àwa ni a dára jù.\"", "\"Ẹ wọlé.\"", "\"Oúnjẹ.\"", "\"A ń ran àwọn ẹbí tí ọwọ́ wọn dí ní South Sacramento lọ́wọ́ láti rí oúnjẹ Filipino bí ti ilé ní ìṣẹ́jú 10.\""], answer: 3, why: "Ó sọ àwọn wo, kí ni, àti ohun tí ó yàtọ̀." },
          { objective: "O2", q: "Kí o tó fi fọ́tò oníbàárà síta, o gbọ́dọ̀:", options: ["Gba àṣẹ lọ́wọ́ wọn", "Fi àwọ̀ àṣejù (filter) sí i", "Béèrè lọ́wọ́ AI", "Fi í síta ní alẹ́"], answer: 0, why: "Àṣẹ ń bọ̀wọ̀ fún oníbàárà, ó sì ń dènà wàhálà." },
          { objective: "O3", q: "Kí ni ìpè sí ìgbésẹ̀?", options: ["Hashtag", "Owó fóònù", "Ọ̀rọ̀ tí ó sọ ohun tí ènìyàn máa ṣe tẹ̀lé e", "Àmì ìdánimọ̀ (logo)"], answer: 2, why: "Ó ń sọ ìgbésẹ̀ tó kàn fún ènìyàn, bí \"Pè wá láti gba àyè\"." },
          { objective: "O3", q: "Àwòrán AI kan fi oúnjẹ tí o kò tà hàn. Kí ni o máa ṣe?", options: ["Lò ó bẹ́ẹ̀", "Fi oúnjẹ ayédèrú míì kún un", "Fi fọ́tò gidi tàbí àwòrán ohun tí o ń tà rọ́pò rẹ̀", "Fi í síta lẹ́ẹ̀mejì"], answer: 2, why: "Àwòrán kò gbọ́dọ̀ ṣi oníbàárà lọ́nà." }
        ]
      }
    },
    {
      name: "Orí 2: Ètò, òtítọ́ àti àbájáde",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣètò kàlẹ́ńdà àkóónú oṣù kan",
          minutes: 5,
          goal: "Ṣètò ìfiránṣẹ́ ọ̀sẹ̀ mẹ́rin nínú kàlẹ́ńdà tó rọrùn.",
          text: [
            "Kàlẹ́ńdà àkóónú (content calendar) jẹ́ tábìlì tí ó sọ ohun tí o máa fi síta àti ìgbà tí o máa fi í síta. Ó ń dá ìdààmú \"kí ni mo máa fi síta lónìí?\" dúró.",
            "Ṣe àwọn ọ̀wọ̀n: Ọjọ́, Ìkànnì, Oríṣi ìfiránṣẹ́, Èrò, Àkọlé ti parí?, Àwòrán ti parí?. Ṣètò ìfiránṣẹ́ méjì tàbí mẹ́ta lọ́sẹ̀ tí o lè máa ṣe déédéé gan-an. Da oríṣiríṣi pọ̀: ẹ̀bùn, ìmọ̀ràn, òṣìṣẹ́, oníbàárà (pẹ̀lú àṣẹ), àti ìṣẹ̀lẹ̀ àwùjọ.",
            "Ní kí AI: \"Ṣe kàlẹ́ńdà ìfiránṣẹ́ ọ̀sẹ̀ mẹ́rin fún iṣẹ́ ìmọ́tótó mi, ìfiránṣẹ́ méjì lọ́sẹ̀, tí ó da ẹ̀bùn, ìmọ̀ràn àti ìfiránṣẹ́ òṣìṣẹ́ pọ̀. Ọ̀rọ̀ pàtàkì wa ni [...]. Fi àwọn ọjọ́ ìsinmi àti ìṣẹ̀lẹ̀ àdúgbò ní [ìlú] ní [oṣù] tí mo yẹ kí n ṣàyẹ̀wò kún un.\" Lẹ́yìn náà, ṣàyẹ̀wò ọjọ́ àti ìṣẹ̀lẹ̀ kọ̀ọ̀kan fúnra rẹ."
          ],
          steps: ["Ṣe tábìlì kàlẹ́ńdà tí ó ní ọ̀wọ̀n mẹ́fà.", "Yan iye ìfiránṣẹ́ lọ́sẹ̀ tí o lè máa ṣe déédéé.", "Ní kí AI fún ọ ní èrò fún ọ̀sẹ̀ mẹ́rin.", "Ṣàyẹ̀wò àwọn ọjọ́ àti ìṣẹ̀lẹ̀ àdúgbò fúnra rẹ.", "Sàmì sí ìfiránṣẹ́ tí o ti ṣe bí o ṣe ń lọ."],
          words: [["Kàlẹ́ńdà àkóónú (content calendar)", "ètò ohun tí o máa fi síta àti ìgbà tí o máa fi í síta."], ["Ìkànnì (platform)", "ojú-òpó tàbí app ìkànnì àjọlò, bí Instagram, Facebook tàbí TikTok."]],
          slides: [
            { title: "Ìdí tí kàlẹ́ńdà fi wúlò", bullets: ["Kò sí \"kí ni mo máa fi síta lónìí?\" mọ́", "Tábìlì kí ni àti ìgbà wo"] },
            { title: "Àwọn ọ̀wọ̀n", bullets: ["Ọjọ́, Ìkànnì, Oríṣi ìfiránṣẹ́", "Èrò, Àkọlé ti parí?, Àwòrán ti parí?"] },
            { title: "Ṣètò pẹ̀lú AI", bullets: ["Ìfiránṣẹ́ méjì tàbí mẹ́ta lọ́sẹ̀ tí o lè máa ṣe", "Da ẹ̀bùn, ìmọ̀ràn, òṣìṣẹ́ àti àwùjọ pọ̀", "Ṣàyẹ̀wò ọjọ́ àti ìṣẹ̀lẹ̀ kọ̀ọ̀kan fúnra rẹ"] }
          ],
          tryIt: "Ní kí AI ṣe kàlẹ́ńdà ọ̀sẹ̀ mẹ́rin, ìfiránṣẹ́ méjì lọ́sẹ̀, fún iṣẹ́ òwò rẹ. Fi í sínú tábìlì kí o sì ṣàyẹ̀wò gbogbo ọjọ́.",
          youCanNow: "ṣètò ìfiránṣẹ́ oṣù kan nínú kàlẹ́ńdà àkóónú.",
          quickCheck: [
            { objective: "O4", q: "Kí ni kàlẹ́ńdà àkóónú?", options: ["Ètò ohun tí o máa fi síta àti ìgbà tí o máa fi í síta", "Àkọsílẹ̀ àwọn ọjọ́ ìsinmi", "Ìròyìn títà", "Àkókò tí o máa ń ṣí"], answer: 0, why: "Kàlẹ́ńdà àkóónú ń ṣètò àwọn ìfiránṣẹ́ rẹ ní ọjọ́ọjọ́." },
            { objective: "O4", q: "Kàlẹ́ńdà AI ṣètò ìfiránṣẹ́ méjì lójoojúmọ́, ṣùgbọ́n o ní àkókò fún méjì lọ́sẹ̀ nìkan. Kí ni o máa ṣe?", options: ["Gbìyànjú láti máa fi síta lójoojúmọ́ bẹ́ẹ̀", "Dín in kù sí iye tí o lè máa ṣe déédéé gan-an", "Fi kàlẹ́ńdà sílẹ̀", "Gba ilé-iṣẹ́ ìpolówó síṣẹ́"], answer: 1, why: "Ṣètò iye ìfiránṣẹ́ tí o lè máa ṣe déédéé gan-an." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sísọ òtítọ́ àti títẹ̀lé òfin nínú ìpolówó rẹ",
          minutes: 5,
          goal: "Ṣàyẹ̀wò ìpolówó rẹ fún ọ̀rọ̀ tí o kò lè fi ẹ̀rí hàn, èrò oníbàárà ayédèrú àti òfin ímeèlì.",
          text: [
            "Federal Trade Commission (FTC), àjọ ìjọba Amẹ́ríkà, sọ pé ìpolówó gbọ́dọ̀ jẹ́ òtítọ́ kí ó má sì ṣini lọ́nà, àti pé o nílò ẹ̀rí fún ọ̀rọ̀ tí o bá sọ. \"Taco tó dùn jù ní LA\" dà bí èrò ẹni, ṣùgbọ́n \"Ìmọ́tótó wa ń pa 99% àwọn kòkòrò àrùn\" tàbí \"Dín 10 pound kù\" jẹ́ ọ̀rọ̀ tí o gbọ́dọ̀ lè fi ẹ̀rí hàn.",
            "AI fẹ́ràn ọ̀rọ̀ ńlá: \"ó dájú\", \"ó ti gba àmì ẹ̀yẹ\", \"nọ́mbà kìíní\". Yọ èyíkéyìí tí o kò lè fi ẹ̀rí hàn kúrò. Má ṣe fi èrò oníbàárà tàbí ẹ̀rí ìyìn ayédèrú síta láéláé; òfin FTC nípa èrò oníbàárà kà wọ́n léèwọ̀, títí kan èyí tí AI kọ.",
            "Ímeèlì ìpolówó gbọ́dọ̀ tẹ̀lé CAN-SPAM: orúkọ olùfiránṣẹ́ àti àkòrí tí ó jẹ́ òtítọ́, sọ pé ìpolówó ni, fi àdírẹ́sì ìfìwéránṣẹ́ rẹ sí i àti ọ̀nà tó rọrùn láti yọ orúkọ kúrò (unsubscribe), kí o sì ṣe ohun tí wọ́n béèrè láàárín ọjọ́ iṣẹ́ 10."
          ],
          steps: ["Fa ìlà sí abẹ́ gbogbo ọ̀rọ̀ tí o sọ nínú ìfiránṣẹ́ tàbí ìwé ìpolówó rẹ.", "Béèrè: ṣé mo lè fi ẹ̀rí èyí hàn?", "Yọ tàbí yí ọ̀rọ̀ tí o kò lè fi ẹ̀rí hàn padà.", "Kò sí èrò oníbàárà tàbí ẹ̀rí ìyìn ayédèrú.", "Ṣàyẹ̀wò ímeèlì ìpolówó fún ìpìlẹ̀ CAN-SPAM."],
          words: [["Ọ̀rọ̀ tí a sọ (claim)", "gbólóhùn òtítọ́ kan nínú ìpolówó, bí \"ń pa 99% àwọn kòkòrò àrùn\"."], ["Ṣíṣini lọ́nà (misleading)", "ohun tí ó ṣeé ṣe kí ó fún ènìyàn ní èrò tí kò tọ́."], ["Ẹ̀rí ìyìn (testimonial)", "ọ̀rọ̀ oníbàárà tí ó ń yin iṣẹ́ òwò rẹ, tí a lò nínú ìpolówó."]],
          slides: [
            { title: "FTC: ìpolówó tí ó jẹ́ òtítọ́", bullets: ["Ìpolówó kò gbọ́dọ̀ ṣini lọ́nà", "O nílò ẹ̀rí fún ọ̀rọ̀ tí o sọ"] },
            { title: "Yọ ọ̀rọ̀ ńlá tí o kò lè fi ẹ̀rí hàn", bullets: ["\"Ó dájú\", \"ó ti gba àmì ẹ̀yẹ\", \"nọ́mbà kìíní\"", "Kò sí èrò oníbàárà ayédèrú, kódà èyí tí AI kọ"] },
            { title: "Ímeèlì ìpolówó (CAN-SPAM)", bullets: ["Olùfiránṣẹ́ àti àkòrí òtítọ́; sọ pé ìpolówó ni", "Àdírẹ́sì ìfìwéránṣẹ́ àti ọ̀nà tó rọrùn láti yọ orúkọ kúrò", "Ṣe ohun tí wọ́n béèrè láàárín ọjọ́ iṣẹ́ 10"] }
          ],
          sources: [FTC_ADS, FTC_REVIEWS, CAN_SPAM],
          tryIt: "Mú àkọlé mẹ́rin rẹ àti ìwé ìpolówó rẹ. Fa ìlà sí abẹ́ gbogbo ọ̀rọ̀ tí o sọ, kí o sì yí tàbí yọ èyíkéyìí tí o kò lè fi ẹ̀rí hàn.",
          youCanNow: "ṣàyẹ̀wò ìpolówó rẹ fún ọ̀rọ̀ tí kò ní ẹ̀rí, èrò oníbàárà ayédèrú àti ìṣòro òfin ímeèlì.",
          quickCheck: [
            { objective: "O5", q: "Gẹ́gẹ́ bí FTC ṣe sọ, báwo ni ìpolówó gbọ́dọ̀ rí?", options: ["Ó gbọ́dọ̀ pani lẹ́rìn-ín", "Ó gbọ́dọ̀ kúrú", "Ó gbọ́dọ̀ jẹ́ òtítọ́ kí ó má sì ṣini lọ́nà", "A gbọ́dọ̀ fi í síta lójoojúmọ́"], answer: 2, why: "Òfin FTC sọ pé ìpolówó gbọ́dọ̀ jẹ́ òtítọ́ kí ó má sì ṣini lọ́nà." },
            { objective: "O5", q: "AI kọ \"A dìbò yàn wá gẹ́gẹ́ bí taco tó dùn jù ní LA\" sínú àkọlé rẹ, ṣùgbọ́n kò sí ìdìbò kankan. Kí ni o máa ṣe?", options: ["Yọ ọ́ kúrò", "Fi sílẹ̀; gbogbo ènìyàn ló ń sọ bẹ́ẹ̀", "Yí i padà sí \"A dìbò yàn wá gẹ́gẹ́ bí taco tó dùn jù ní ìlú\"", "Ní kí àwọn ọ̀rẹ́ rẹ dìbò báyìí"], answer: 0, why: "Ọ̀rọ̀ tí o kò lè fi ẹ̀rí hàn gbọ́dọ̀ kúrò." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rírí ohun tó ń ṣiṣẹ́",
          minutes: 5,
          goal: "Tọpinpin èwo nínú àwọn ìfiránṣẹ́ àti ìwé ìpolówó ló ń mú oníbàárà wá.",
          text: [
            "Like dára, ṣùgbọ́n oníbàárà ṣe pàtàkì jù. Tọpinpin àwọn àmì tó rọrùn: ọ̀rọ̀ ìránṣẹ́ àti ìpè, ìgbàyè (booking), àwọn tí ó dárúkọ ìfiránṣẹ́ kan, àti lílo kóòdù àkànṣe (\"Sọ FLYER10 fún ẹ̀dínwó 10%\").",
            "Ọ̀pọ̀ ìkànnì àjọlò máa ń fi nọ́mbà ọ̀fẹ́ hàn fún àkáǹtì iṣẹ́ òwò, bí reach àti ìbẹ̀wò sí ojú-ìwé rẹ (profile); wá apá insights tàbí analytics. Kọ àwọn nọ́mbà pàtàkì sínú tábìlì ìtọpinpin lọ́sọ̀ọ̀sẹ̀.",
            "Lẹ́ẹ̀kan lóṣù, lẹ tábìlì rẹ (láìsí orúkọ oníbàárà) sínú olùrànlọ́wọ́ AI kí o sì béèrè: \"Oríṣi ìfiránṣẹ́ wo ló mú ìgbàyè jù lọ wá? Kí ni mo yẹ kí n túbọ̀ ṣe?\" Jẹ́rìí sí i nínú tábìlì rẹ, lẹ́yìn náà ṣètò oṣù tó ń bọ̀."
          ],
          steps: ["Yan àwọn àmì: ọ̀rọ̀ ìránṣẹ́, ìgbàyè, ìdárúkọ, lílo kóòdù.", "Fi kóòdù àkànṣe sí ẹ̀bùn kan.", "Kọ àwọn nọ́mbà sínú tábìlì lọ́sọ̀ọ̀sẹ̀.", "Ní kí AI wá àpẹẹrẹ lẹ́ẹ̀kan lóṣù, kí o sì jẹ́rìí sí wọn."],
          words: [["Reach", "iye ènìyàn tí ó rí ìfiránṣẹ́ kan."], ["Insights", "àwọn nọ́mbà tí ìkànnì ń fi hàn nípa bí àwọn ìfiránṣẹ́ rẹ ṣe ṣe."], ["Kóòdù ẹ̀dínwó (promo code)", "ọ̀rọ̀ tí oníbàárà ń sọ tàbí tẹ̀ láti gba ẹ̀bùn, tí ó ń ràn ọ́ lọ́wọ́ láti tọpinpin rẹ̀."]],
          slides: [
            { title: "Oníbàárà ju like lọ", bullets: ["Ọ̀rọ̀ ìránṣẹ́, ìpè àti ìgbàyè", "Àwọn tí ó dárúkọ ìfiránṣẹ́ kan", "Kóòdù àkànṣe bí FLYER10"] },
            { title: "Nọ́mbà ọ̀fẹ́", bullets: ["Àkáǹtì iṣẹ́ òwò ń fi insights hàn", "Reach àti ìbẹ̀wò sí ojú-ìwé rẹ", "Kọ wọ́n sínú tábìlì lọ́sọ̀ọ̀sẹ̀"] },
            { title: "Àyẹ̀wò oṣooṣù pẹ̀lú AI", bullets: ["Lẹ tábìlì náà, láìsí orúkọ", "Béèrè ohun tí ó mú ìgbàyè jù lọ wá", "Jẹ́rìí sí i, lẹ́yìn náà ṣètò oṣù tó ń bọ̀"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ìpolówó oṣù kan rẹ: ọ̀rọ̀ pàtàkì, kàlẹ́ńdà ọ̀sẹ̀ mẹ́rin, àkọlé mẹ́rin tó ti parí, ìwé ìpolówó kan, àti tábìlì ìtọpinpin pẹ̀lú kóòdù ẹ̀dínwó lórí ẹ̀bùn kan. Ṣàyẹ̀wò gbogbo ọ̀rọ̀ àti àwòrán.",
          youCanNow: "ṣètò, ṣe, kí o sì díwọ̀n ìpolówó oṣù kan tí ó jẹ́ òtítọ́ fún iṣẹ́ òwò rẹ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni reach túmọ̀ sí?", options: ["Iye ènìyàn tí ó ra nǹkan", "Iye ènìyàn tí ó rí ìfiránṣẹ́ kan", "Bí oníbàárà ṣe ń rìn jìnnà tó", "Iye ìfiránṣẹ́ tí o ṣe"], answer: 1, why: "Reach ni iye ènìyàn tí ó rí ìfiránṣẹ́ kan." },
            { objective: "O6", q: "O fẹ́ mọ̀ bóyá ìwé ìpolówó rẹ mú oníbàárà wá. Kí ni o máa ṣe?", options: ["Fojú díwọ̀n láti bí iṣẹ́ ṣe pọ̀ tó", "Ní kí AI fojú díwọ̀n", "Ka iye like rẹ", "Fi kóòdù ẹ̀dínwó àkànṣe sí ìwé ìpolówó náà kí o sì tọpinpin rẹ̀"], answer: 3, why: "Kóòdù àkànṣe ń fi hàn èwo nínú ìpolówó ló mú oníbàárà kọ̀ọ̀kan wá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ètò, òtítọ́ àti àbájáde",
        questions: [
          { objective: "O4", q: "Kí ni kàlẹ́ńdà àkóónú?", options: ["Ètò ohun tí o máa fi síta àti ìgbà tí o máa fi í síta", "Kàlẹ́ńdà owó orí", "Ètò iṣẹ́ àwọn òṣìṣẹ́", "Aago ògiri"], answer: 0, why: "Ó ń ṣètò àwọn ìfiránṣẹ́ rẹ." },
          { objective: "O4", q: "Kàlẹ́ńdà AI kọ ọdún àdúgbò kan sí ọjọ́ kan. Kí ni o máa ṣe?", options: ["Pa kàlẹ́ńdà náà rẹ́", "Gbà á gbọ́", "Fi ìfiránṣẹ́ nípa rẹ̀ síta láìṣàyẹ̀wò", "Ṣàyẹ̀wò ọjọ́ náà fúnra rẹ"], answer: 3, why: "AI lè ṣàṣìṣe nípa ọjọ́ àti ìṣẹ̀lẹ̀." },
          { objective: "O5", q: "Ọ̀rọ̀ wo ló nílò ẹ̀rí?", options: ["\"Ẹ wá kí wa\"", "\"Ìmọ́tótó wa ń pa 99% àwọn kòkòrò àrùn\"", "\"A nífẹ̀ẹ́ àdúgbò wa\"", "\"A ṣí ní ọjọ́ Sátidé\""], answer: 1, why: "Ọ̀rọ̀ òtítọ́ tí ó ṣe pàtó nílò ẹ̀rí." },
          { objective: "O6", q: "Èwo ni àmì tó dára jù pé ìfiránṣẹ́ kan ṣiṣẹ́?", options: ["Ìgbàyè tuntun láti ọ̀dọ̀ àwọn tí ó dárúkọ rẹ̀", "Like kan sí i", "Àwọ̀ tó rẹwà", "Àkọlé gígùn"], answer: 0, why: "Oníbàárà ṣe pàtàkì ju like lọ." },
          { objective: "O6", q: "Kí ló dé tí o fi máa fi kóòdù àkànṣe bí FLYER10 kún un?", options: ["Òfin pa á láṣẹ", "Láti da oníbàárà rú", "Láti tọpinpin èwo nínú ìpolówó ló mú oníbàárà wá", "Láti fi iye owó pamọ́"], answer: 2, why: "Kóòdù ń fi hàn èwo nínú wọn ló ṣiṣẹ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI nínú Ìpolówó fún Iṣẹ́ Òwò Kékeré",
    questions: [
      { objective: "O1", q: "Ìlànà ọ̀rọ̀ pàtàkì ni: A ń ran [àwọn wo] lọ́wọ́ láti rí [kí ni] pẹ̀lú...", options: ["Ọ̀rọ̀ aṣínà wa", "Ohun tí ó mú wa yàtọ̀", "Ẹ̀dínwó nígbà gbogbo", "Orúkọ ẹni tí a jọ ń tà"], answer: 1, why: "Ohun tí ó mú ọ yàtọ̀ ló ń parí rẹ̀." },
      { objective: "O1", q: "Ọ̀rọ̀ pàtàkì rẹ gbọ́dọ̀:", options: ["Jẹ́ àṣírí", "Tóbi bí ó ti lè ṣe tó", "Jẹ́ ẹ̀dà ti ẹni tí ẹ jọ ń tà", "Jẹ́ òtítọ́ kí ó sì dún bí ìwọ"], answer: 3, why: "Oníbàárà máa ń gba ọ̀rọ̀ òtítọ́ gbọ́." },
      { objective: "O1", q: "Ibo ni ọ̀rọ̀ pàtàkì rẹ yẹ kí ó hàn?", options: ["Kò sí ibì kankan", "Nínú orí rẹ nìkan", "Nínú ìwé owó orí nìkan", "Nínú àwọn ìfiránṣẹ́, ìwé ìpolówó àti àmì ìkọ̀wé rẹ"], answer: 3, why: "Títún un sọ ń jẹ́ kí ènìyàn dá ọ mọ̀." },
      { objective: "O2", q: "Èwo ni ìfiránṣẹ́ tó dára fún iṣẹ́ òwò kékeré?", options: ["Fọ́tò etíkun tí a rà lórí ayélujára", "Irun ṣáájú àti lẹ́yìn gígẹ̀, pẹ̀lú àṣẹ", "Èrò oníbàárà ayédèrú", "Fọ́tò ti ẹni tí ẹ jọ ń tà"], answer: 1, why: "Iṣẹ́ gidi ń mú ìgbẹ́kẹ̀lé wá." },
      { objective: "O2", q: "Lẹ́yìn tí AI bá kọ àkọlé, o yẹ kí o:", options: ["Fi ọ̀rọ̀ ńlá míì kún un", "Fi wọ́n síta láìyípadà", "Fi àlàyé gidi kún un kí o sì yọ ohun tí kì í ṣe òtítọ́", "Pa ojú-ìwé rẹ rẹ́"], answer: 2, why: "Àtúnṣe ń sọ wọ́n di gidi àti òtítọ́." },
      { objective: "O2", q: "Kí ni àkọlé (caption)?", options: ["Ọ̀rọ̀ tí ó ń bá fọ́tò tàbí fídíò lọ lórí ìkànnì àjọlò", "Ìwé ẹ̀rí ìsanwó", "Àmì iye owó", "Àmì ìdánimọ̀ (logo)"], answer: 0, why: "Àkọlé ń ṣàlàyé ìfiránṣẹ́." },
      { objective: "O3", q: "Àwọn irinṣẹ́ ọ̀fẹ́ wo ló lè ṣe ìwé ìpolówó?", options: ["Ẹ̀rọ ìgbowó", "Ẹ̀rọ ìṣirò", "Canva tàbí Adobe Express", "Ẹ̀rọ ìgbaná fóònù"], answer: 2, why: "Irinṣẹ́ ìṣẹ̀dá ni wọ́n, wọ́n sì ní àwòṣe." },
      { objective: "O3", q: "Àkọlé ńlá ìwé ìpolówó gbọ́dọ̀:", options: ["Tóbi kí ó sì jẹ́ nípa ẹ̀bùn náà", "Kéré gan-an", "Má sí níbẹ̀", "Jẹ́ ọ̀rọ̀ aṣínà rẹ"], answer: 0, why: "Àkọlé ńlá ló ń fa ojú ènìyàn mọ́ra." },
      { objective: "O3", q: "Àwòrán wo ni oníbàárà máa ń gbà gbọ́ jù?", options: ["Àwòrán AI ti ohun tí o kò tà", "Fọ́tò gidi tìrẹ", "Fọ́tò èyíkéyìí láti orí íńtánẹ́ẹ̀tì", "Fọ́tò ti àwọn tí ẹ jọ ń tà"], answer: 1, why: "Àwòrán gidi ń mú ìgbẹ́kẹ̀lé wá." },
      { objective: "O4", q: "Ìfiránṣẹ́ mélòó lọ́sẹ̀ ni o yẹ kí o ṣètò?", options: ["Iye tí AI bá dábàá", "Àádọ́ta", "Kò sí", "Iye tí o lè máa ṣe déédéé gan-an"], answer: 3, why: "Ṣíṣe déédéé dára ju kí ó rẹ̀ ọ́ jù lọ." },
      { objective: "O4", q: "Èwo ni ọ̀wọ̀n kan nínú kàlẹ́ńdà àkóónú?", options: ["Oríṣi ìfiránṣẹ́", "Nọ́mbà káàdì oníbàárà", "Ọ̀rọ̀ aṣínà", "PIN báńkì"], answer: 0, why: "Oríṣi ìfiránṣẹ́ ń ràn ọ́ lọ́wọ́ láti da àkóónú rẹ pọ̀." },
      { objective: "O4", q: "Dída oríṣiríṣi ìfiránṣẹ́ pọ̀ túmọ̀ sí:", options: ["Títún ìfiránṣẹ́ àwọn ẹlòmíì fi síta nìkan", "Ẹ̀dínwó nìkan", "Fọ́tò ara ẹni (selfie) nìkan", "Ẹ̀bùn, ìmọ̀ràn, òṣìṣẹ́ àti ìfiránṣẹ́ àwùjọ"], answer: 3, why: "Oríṣiríṣi ń jẹ́ kí ọkàn àwọn olùtẹ̀lé wà lórí rẹ." },
      { objective: "O5", q: "Gẹ́gẹ́ bí FTC ṣe sọ, ìpolówó gbọ́dọ̀:", options: ["Gùn", "Pani lẹ́rìn-ín", "Jẹ́ òtítọ́ kí ó má sì ṣini lọ́nà", "Ní àwọ̀"], answer: 2, why: "Ìyẹn ni òfin ìpìlẹ̀ FTC." },
      { objective: "O5", q: "AI fi \"ó ti gba àmì ẹ̀yẹ\" kún un, ṣùgbọ́n o kò gba àmì ẹ̀yẹ kankan. O máa:", options: ["Fi sílẹ̀", "Yọ ọ́ kúrò", "Hùmọ̀ àmì ẹ̀yẹ kan", "Fi \"ó dájú\" kún un"], answer: 1, why: "Ọ̀rọ̀ tí kò ní ẹ̀rí ń ṣini lọ́nà." },
      { objective: "O5", q: "Èrò oníbàárà ayédèrú tí AI kọ:", options: ["Pọn dandan", "Dára tí ó bá kúrú", "Dára ní òpin ọ̀sẹ̀", "Jẹ́ èèwọ̀ lábẹ́ òfin FTC nípa èrò oníbàárà"], answer: 3, why: "Òfin náà kan àwọn ayédèrú tí AI ṣe." },
      { objective: "O5", q: "Ímeèlì ìpolówó lábẹ́ CAN-SPAM gbọ́dọ̀ ní:", options: ["Olùfiránṣẹ́ ayédèrú", "Nọ́mbà káàdì oníbàárà", "Àdírẹ́sì ìfìwéránṣẹ́ rẹ àti ọ̀nà láti yọ orúkọ kúrò", "Kò gbọ́dọ̀ ní àkòrí"], answer: 2, why: "Méjèèjì ló pọn dandan." },
      { objective: "O6", q: "Reach túmọ̀ sí:", options: ["Iye ènìyàn tí ó rí ìfiránṣẹ́ kan", "Iye tí ó rà", "Iye òṣìṣẹ́", "Agbára Wi-Fi rẹ"], answer: 0, why: "Reach ń ka àwọn tí ó rí i." },
      { objective: "O6", q: "Ibo ni o ti lè rí nọ́mbà ọ̀fẹ́ nípa ìfiránṣẹ́ lórí àkáǹtì iṣẹ́ òwò?", options: ["Ẹ̀rọ ìtẹ̀wé ìwé ẹ̀rí ìsanwó rẹ", "Apá insights tàbí analytics", "Báńkì rẹ", "Kò sí ibì kankan"], answer: 1, why: "Àwọn ìkànnì ń fi insights hàn fún àkáǹtì iṣẹ́ òwò." },
      { objective: "O6", q: "Kí o tó lẹ nọ́mbà ìtọpinpin sínú AI, yọ:", options: ["Àwọn ọjọ́", "Orúkọ oníbàárà", "Oríṣi ìfiránṣẹ́", "Àpapọ̀"], answer: 1, why: "Orúkọ oníbàárà jẹ́ àṣírí." },
      { objective: "O6", q: "Lẹ́yìn tí AI sọ pé ìfiránṣẹ́ ìmọ̀ràn ló mú ìgbàyè jù lọ wá, o máa:", options: ["Jẹ́rìí sí i nínú tábìlì rẹ, lẹ́yìn náà ṣètò púpọ̀ sí i", "Dá gbogbo ìfiránṣẹ́ ìmọ̀ràn dúró", "Fojú fò ó", "Pa àkáǹtì rẹ rẹ́"], answer: 0, why: "Jẹ́rìí sí i, lẹ́yìn náà gbé ìgbésẹ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 4, 5, 7, 8, 9, 12, 13, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ọ̀rọ̀ pàtàkì", objective: "O1", notYet: "Kò yé, tàbí ó sọ ohun tí kì í ṣe òtítọ́.", meets: "Gbólóhùn òtítọ́ kan tàbí méjì: àwọn tí o ń sìn, ohun tí o ń ṣe, ohun tí ó mú ọ yàtọ̀.", exceeds: "Ó hàn nínú àwọn ìfiránṣẹ́ àti ìwé ìpolówó." },
      { name: "Kàlẹ́ńdà àkóónú", objective: "O4", notYet: "Ìfiránṣẹ́ kò tó mẹ́jọ, tàbí a kò ṣàyẹ̀wò àwọn ọjọ́.", meets: "Ọ̀sẹ̀ mẹ́rin pẹ̀lú ó kéré tán ìfiránṣẹ́ mẹ́jọ, a sì ti ṣàyẹ̀wò àwọn ọjọ́.", exceeds: "Ó da ẹ̀bùn, ìmọ̀ràn, òṣìṣẹ́ àti ìfiránṣẹ́ àwùjọ pọ̀." },
      { name: "Àkọlé", objective: "O2", notYet: "Wọn kò tó mẹ́rin, tàbí wọ́n ní àlàyé tí kì í ṣe òtítọ́.", meets: "Àkọlé mẹ́rin tó ti parí, pẹ̀lú àlàyé gidi kan nínú ọ̀kọ̀ọ̀kan.", exceeds: "Ọ̀kọ̀ọ̀kan ní ìpè sí ìgbésẹ̀ tó yé, ó sì dún bí olórí iṣẹ́ òwò náà." },
      { name: "Ìwé ìpolówó", objective: "O3", notYet: "Kò ní àkọlé ńlá, àlàyé tàbí ìpè sí ìgbésẹ̀.", meets: "Àkọlé ńlá, àwòrán gidi kan, àlàyé mẹ́ta àti ìpè sí ìgbésẹ̀, gbogbo rẹ̀ ti di àyẹ̀wò.", exceeds: "Ó ní kóòdù ẹ̀dínwó fún ìtọpinpin." },
      { name: "Ọ̀rọ̀ àti àwòrán òtítọ́", objective: "O5", notYet: "A kò lè fi ẹ̀rí ọ̀rọ̀ kan hàn, tàbí àwòrán kan kì í ṣe tìrẹ láti lò.", meets: "A lè fi ẹ̀rí gbogbo ọ̀rọ̀ hàn, gbogbo àwòrán sì jẹ́ tìrẹ tàbí a lò ó pẹ̀lú àṣẹ.", exceeds: "Olórí iṣẹ́ òwò náà lè sọ bí ó ṣe ní ẹ̀rí fún ọ̀rọ̀ kọ̀ọ̀kan." },
      { name: "Tábìlì ìtọpinpin", objective: "O6", notYet: "Kò sí ọ̀nà láti mọ èwo nínú ìfiránṣẹ́ ló ṣiṣẹ́.", meets: "Tábìlì láti kọ àbájáde sí, pẹ̀lú kóòdù ẹ̀dínwó lórí ẹ̀bùn kan.", exceeds: "Ó lo nọ́mbà insights ọ̀fẹ́, ó sì ṣètò láti ṣàyẹ̀wò àbájáde ní òpin oṣù." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olórí iṣẹ́ òwò tí wọ́n fi nǹkan síta gẹ́gẹ́ bí kàlẹ́ńdà wọn fún oṣù kan gbáko (ìwádìí àtẹ̀lé ọjọ́ 30)",
      "Àwọn olórí iṣẹ́ òwò tí wọ́n lè dárúkọ ìfiránṣẹ́ tàbí ìwé ìpolówó tí ó mú oníbàárà tuntun wá, láti inú tábìlì ìtọpinpin wọn",
      "Àwọn olórí iṣẹ́ òwò tí wọ́n ròyìn pé ìgbàyè tàbí títà wọn pọ̀ sí i lẹ́yìn oṣù náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní kámẹ́rà àti íńtánẹ́ẹ̀tì; kọ̀mpútà máa ràn ọ́ lọ́wọ́ fún ìwé ìpolówó àti tábìlì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ àti irinṣẹ́ ìṣẹ̀dá ọ̀fẹ́ bí Canva tàbí Adobe Express",
      "Fọ́tò gidi ti iṣẹ́ òwò rẹ, ọjà rẹ tàbí iṣẹ́ rẹ",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ní kí àwọn olórí iṣẹ́ òwò mú fọ́tò gidi díẹ̀ àti ẹ̀bùn kan tàbí ìṣẹ̀lẹ̀ kan tí ó ń bọ̀ wá sí ìpàdé náà.",
      "Rán àwọn olórí iṣẹ́ òwò létí láti gba àṣẹ kí wọ́n tó fi fọ́tò oníbàárà èyíkéyìí síta.",
      "Ẹ jọ fa ìlà sí abẹ́ gbogbo ọ̀rọ̀ tí wọ́n sọ nínú àkọlé àti ìwé ìpolówó wọn, lẹ́yìn náà kí wọ́n sọ bí wọ́n ṣe máa fi ẹ̀rí ọ̀kọ̀ọ̀kan hàn.",
      "Orúkọ oníbàárà kò gbọ́dọ̀ wọ inú irinṣẹ́ AI nígbà tí wọ́n bá ń lẹ nọ́mbà ìtọpinpin.",
      "Fi rubric ṣe àmì fún ìpolówó oṣù kan náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
