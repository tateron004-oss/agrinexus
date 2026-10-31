"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-ai-customer-service.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC_REVIEWS = { name: "FTC: Òfin nípa review àti ẹ̀rí oníbàárà, ìbéèrè àti ìdáhùn (Consumer Reviews and Testimonials Rule)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const FTC_REVIEWS_PR = { name: "FTC: Òfin ìkẹyìn tí ó fòfin de review àti ẹ̀rí èké (August 2024)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" };

module.exports = {
  id: "smallbiz-ai-customer-service-yo",
  lang: "yo",
  translationOf: "smallbiz-ai-customer-service",
  category: "Small Business",
  name: "AI fún Ìtọ́jú Oníbàárà àti Ìbánisọ̀rọ̀",
  skills: "Kíkọ FAQ fún àwọn oníbàárà, Ṣíṣe àpẹẹrẹ ìdáhùn, Yíyan ohùn ilé-iṣẹ́ rẹ, Dídáhùn review, Bíbá oníbàárà tí inú ń bí sọ̀rọ̀, Pípa ìsọfúnni oníbàárà mọ́",
  outcome: "ṣe àkójọ ìtọ́jú oníbàárà fún iṣẹ́ rẹ pẹ̀lú ìrànlọ́wọ́ AI: FAQ tí ó ní ìbéèrè mẹ́wàá tí wọ́n ń béèrè jù, àpẹẹrẹ ìdáhùn márùn-ún ní ohùn ilé-iṣẹ́ rẹ, àti ìdáhùn tó farabalẹ̀ sí oníbàárà tí inú ń bí àti sí review ní gbangba, tí ìwọ fúnra rẹ ti ṣàyẹ̀wò gbogbo rẹ̀ kí o tó lò ó.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tó ni iṣẹ́ kékeré àti àwọn òṣìṣẹ́ wọn tí ń dá àwọn oníbàárà lóhùn lórí fóònù, text, email, ọ̀rọ̀ ìránṣẹ́ lórí ìkànnì àjọlò àti review lórí ayélujára: ilé oúnjẹ, ilé ìṣaralóge, ṣọ́ọ̀bù, àwọn tó ń ṣe ìmọ́tótó, àwọn tó ń tún nǹkan ṣe àti ọkọ̀ tí ń ta oúnjẹ.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti dá àwọn ìbéèrè kan náà lóhùn kíákíá, láti jẹ́ kí ìdáhùn rẹ jẹ́ ọ̀rẹ́ àti ọ̀kan náà nígbà gbogbo, láti dá review lóhùn lọ́nà tó tọ́, àti láti mú inú oníbàárà tí inú ń bí rọ̀ láìfi gbogbo nǹkan sílẹ̀ fún un. Ìwọ ni ọ̀gá lórí gbogbo ìdáhùn.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Gbogbo iṣẹ́ rẹ máa di àkójọ ìtọ́jú oníbàárà tí o lè lò ní ọjọ́ kejì."
  ],
  finalTask: "Ṣe àkójọ ìtọ́jú oníbàárà rẹ nínú ìwé kan ṣoṣo: ohùn ilé-iṣẹ́ rẹ (ọ̀rọ̀ mẹ́ta àti àkọsílẹ̀ ohun tí o máa ṣe àti èyí tí o kò ní ṣe), FAQ tí ó ní ìbéèrè mẹ́wàá tí wọ́n ń béèrè jù pẹ̀lú ìdáhùn tí o ti ṣàyẹ̀wò, àpẹẹrẹ ìdáhùn márùn-ún pẹ̀lú àmì ìdúrópò, ìdáhùn kan sí oníbàárà gidi tàbí àpẹẹrẹ tí inú ń bí, àti ìdáhùn kan sí review ní gbangba. Ìwọ ti ṣàyẹ̀wò gbogbo òtítọ́ inú rẹ̀, kò sì sí ìsọfúnni àdáni oníbàárà kankan tí ó wọ inú irinṣẹ́ AI.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tó ni iṣẹ́ kékeré àti àwọn òṣìṣẹ́ wọn tí ń dá àwọn oníbàárà lóhùn lórí fóònù, text, email, ìkànnì àjọlò àti review lórí ayélujára: ilé oúnjẹ, ilé ìṣaralóge, ṣọ́ọ̀bù, àwọn tó ń ṣe ìmọ́tótó, àwọn tó ń tún nǹkan ṣe àti ọkọ̀ tí ń ta oúnjẹ.",
    startingPoint: "Wọ́n ń dá ìbéèrè oníbàárà lóhùn lójoojúmọ́, ọ̀pọ̀ ìgbà àwọn ìbéèrè kan náà, wọ́n sì lè máa dá review lóhùn. Wọn kò fi bẹ́ẹ̀ lo AI fún ìdáhùn, wọn kò sì ní FAQ tí a kọ sílẹ̀, ohùn ilé-iṣẹ́ tàbí àpẹẹrẹ ìdáhùn.",
    gap: "Dídá àwọn ìbéèrè kan náà lóhùn lọ́kọ̀ọ̀kan ń gba àkókò, ìdáhùn lè yàtọ̀ láti ẹnì kan sí ẹlòmíì, ẹ̀sùn tàbí review tí a kò bá lò dáadáa sì lè lé oníbàárà lọ. Àwọn tó ni iṣẹ́ nílò àkójọ ìtọ́jú oníbàárà tí wọ́n ti ṣàyẹ̀wò, tí ó jẹ́ ọ̀kan náà nígbà gbogbo, tí wọ́n fi ìrànlọ́wọ́ AI ṣe, kí wọ́n sì jẹ́ olóòótọ́, kí wọ́n tẹ̀lé òfin FTC nípa review, kí wọ́n sì pa ìsọfúnni oníbàárà mọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú",
      "Ẹ̀rọ: smartphone tàbí kọ̀mpútà tí a ń lò láàárín oníbàárà kan àti òmíràn",
      "Àkókò: ẹ̀kọ́ tí ó gba nǹkan bí ìṣẹ́jú 5, tí ó bá ọjọ́ iṣẹ́ tó kún fọ́fọ́ mu",
      "Òfin: òfin FTC nípa review fòfin de review èké tàbí review rere tí a sanwó fún; ẹ̀sùn ìpalára máa ń lọ sọ́dọ̀ amọ̀ṣẹ́dunjú tàbí ilé-iṣẹ́ ìdánilójú (insurer)",
      "Ìsọfúnni àdáni: kò sí orúkọ oníbàárà, ìsọfúnni káàdì tàbí ọ̀nà ìkànsí wọn nínú irinṣẹ́ AI"
    ],
    prerequisites: "\"Ìfihàn sí AI fún Iṣẹ́ Kékeré\" máa ràn ọ́ lọ́wọ́, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ní àwọn ìbéèrè tí àwọn oníbàárà rẹ ń béèrè jù", action: "kọ FAQ pẹ̀lú ìrànlọ́wọ́ AI", standard: "tí ó ní ìbéèrè mẹ́wàá, tí o sì ti ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan pẹ̀lú ohun tí o ń ṣe gan-an" },
    { id: "O2", condition: "Tí o bá mọ bí o ṣe fẹ́ kí iṣẹ́ rẹ dún", action: "ṣàlàyé ohùn ilé-iṣẹ́ rẹ kí o sì jẹ́ kí AI kọ̀wé ní ohùn náà", standard: "pẹ̀lú ọ̀rọ̀ mẹ́ta fún ohùn náà àti àkọsílẹ̀ ohun tí o máa ṣe àti èyí tí o kò ní ṣe, ní ìbẹ̀rẹ̀ ìjíròrò (chat)" },
    { id: "O3", condition: "Tí o bá ń lo olùrànlọ́wọ́ AI", action: "ṣe àpẹẹrẹ ìdáhùn márùn-ún tí o lè tún lò, pẹ̀lú àmì ìdúrópò", standard: "ní ohùn ilé-iṣẹ́ rẹ, tí o ti ṣàyẹ̀wò, tí o sì fi pamọ́ sí ibi tí o ti lè dà á kọ kíákíá" },
    { id: "O4", condition: "Tí o bá rí review tó dára tàbí tí kò dára lórí ayélujára", action: "kọ ìdáhùn olóòótọ́ tó farabalẹ̀ pẹ̀lú ìrànlọ́wọ́ AI", standard: "tí gbogbo ọ̀rọ̀ inú rẹ̀ jẹ́ òtítọ́, láìsí review èké tàbí èyí tí a sanwó fún" },
    { id: "O5", condition: "Tí oníbàárà kan bá bínú, tí o sì ti mọ òdiwọ̀n rẹ fún dídá owó padà àti títún iṣẹ́ ṣe", action: "kọ ìdáhùn nípa lílo ọ̀nà LAST", standard: "tí o kàn fi ojútùú tí o máa fúnni ní tòótọ́ lọ̀ ọ́" },
    { id: "O6", condition: "Tí o bá ní FAQ, àpẹẹrẹ ìdáhùn àti àwọn ìdáhùn rẹ", action: "kó àkójọ ìtọ́jú oníbàárà jọ tí ó pa ìsọfúnni oníbàárà mọ́", standard: "nínú ìwé kan ṣoṣo, tí o ti ṣàyẹ̀wò gbogbo òtítọ́ inú rẹ̀, láìsí ìsọfúnni oníbàárà gidi kankan" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìdáhùn ojoojúmọ́ tó yára, tó sì dùn mọ́ni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Wíwá àwọn ìbéèrè oníbàárà tó pọ̀ jù àti ṣíṣe FAQ",
          minutes: 5,
          goal: "Kọ àwọn ìbéèrè tí àwọn oníbàárà ń béèrè jù sílẹ̀, kí o sì sọ wọ́n di FAQ tí o ti ṣàyẹ̀wò.",
          text: [
            "Ọ̀pọ̀ iṣẹ́ ló ń dá àwọn ìbéèrè mẹ́wàá kan náà lóhùn léraléra: àkókò ìṣísílẹ̀, iye owó, ibi ìgbọ́kọ̀sí, fífi ọjà ránṣẹ́, gbígba àyè (booking), dídá ọjà padà, ọ̀nà ìsanwó, bí ìdúró ṣe gùn tó, ohun tí ara kò gbà (allergy) tàbí ohun tí a fi ṣe nǹkan, àti \"ṣé ẹ máa ń ṣe...?\".",
            "Kọ́kọ́ kọ wọ́n sílẹ̀ láti inú ohun tí o rántí, àwọn text rẹ àti àwọn ọ̀rọ̀ ìránṣẹ́ rẹ. Lẹ́yìn náà, fún olùrànlọ́wọ́ AI ní ìdáhùn gidi rẹ bí ó ṣe wà, kí o sì ní kí ó sọ wọ́n di FAQ tó yé: \"Ìwọ̀nyí ni ìdáhùn mi bí wọ́n ṣe wà. Ṣe FAQ kúkúrú fún ojú-òpó wẹ́ẹ̀bù ilé ìṣèékánná mi. Kí ó jẹ́ ọ̀rẹ́, pẹ̀lú ọ̀rọ̀ tó rọrùn.\"",
            "Ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan pẹ̀lú ohun tí o ń ṣe gan-an. FAQ lórí ojú-òpó wẹ́ẹ̀bù rẹ tàbí lórí àkọlé jẹ́ ìlérí fún àwọn oníbàárà."
          ],
          steps: ["Kọ àwọn ìbéèrè mẹ́wàá tí o ń gbọ́ jù sílẹ̀.", "Kọ ìdáhùn gidi rẹ sí ọ̀kọ̀ọ̀kan, bí ó ṣe wá sí ọ.", "Ní kí AI sọ wọ́n di FAQ tó yé.", "Ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan, lẹ́yìn náà fi sí ojú-òpó rẹ, ojú-ìwé ìkànnì àjọlò rẹ tàbí lórí kàǹtà rẹ."],
          words: [["FAQ", "frequently asked questions (àwọn ìbéèrè tí wọ́n ń béèrè léraléra): àkọsílẹ̀ àwọn ìbéèrè tí ó wọ́pọ̀ àti ìdáhùn wọn."]],
          slides: [
            { title: "Àwọn ìbéèrè mẹ́wàá kan náà", bullets: ["Àkókò ìṣísílẹ̀, iye owó, ibi ìgbọ́kọ̀sí, fífi ọjà ránṣẹ́", "Gbígba àyè, dídá ọjà padà, ọ̀nà ìsanwó", "\"Ṣé ẹ máa ń ṣe...?\""] },
            { title: "Ṣe FAQ náà", bullets: ["Kọ àwọn ìbéèrè sílẹ̀", "Kọ ìdáhùn gidi rẹ bí wọ́n ṣe wà", "Ní kí AI mú wọn yé kí wọ́n sì jẹ́ ọ̀rẹ́"] },
            { title: "Ṣàyẹ̀wò kí o tó gbé e jáde", bullets: ["FAQ jẹ́ ìlérí", "Ìdáhùn kọ̀ọ̀kan gbọ́dọ̀ bá ohun tí o ń ṣe gan-an mu"] }
          ],
          tryIt: "Kọ ìbéèrè mẹ́wàá tí àwọn oníbàárà rẹ ń béèrè jù, pẹ̀lú ìdáhùn kúkúrú sí ọ̀kọ̀ọ̀kan. Ní kí olùrànlọ́wọ́ AI ṣe FAQ kúkúrú, tó jẹ́ ọ̀rẹ́ láti inú wọn, lẹ́yìn náà ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan.",
          youCanNow: "ṣe FAQ tí o ti ṣàyẹ̀wò láti inú àwọn ìbéèrè gidi àwọn oníbàárà rẹ.",
          quickCheck: [
            { objective: "O1", q: "Kí ló dé tí FAQ fi dà bí ìlérí fún àwọn oníbàárà?", options: ["Nítorí pé àwọn oníbàárà máa gbára lé ohun tí ó sọ", "Nítorí pé ó jẹ́ àdéhùn òfin", "Nítorí pé AI ló kọ ọ́", "Nítorí pé ẹ̀ẹ̀kan ṣoṣo ni a máa ń gbé e jáde"], answer: 0, why: "Àwọn oníbàárà máa ń ṣe nǹkan gẹ́gẹ́ bí FAQ rẹ ṣe sọ, nítorí náà ìdáhùn kọ̀ọ̀kan gbọ́dọ̀ jẹ́ òtítọ́." },
            { objective: "O1", q: "FAQ tí AI kọ sọ pé ibi ìgbọ́kọ̀sí ọ̀fẹ́ wà, ṣùgbọ́n kò sí. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ bẹ́ẹ̀ kí ó lè fa oníbàárà mọ́ra", "Tún ìdáhùn náà ṣe kí ó bá ohun tí o ń ṣe gan-an mu", "Fi \"bóyá\" kékeré kún un", "Ní kí AI yọ gbogbo ìdáhùn kúrò"], answer: 1, why: "Ìdáhùn FAQ wá láti inú òfin gidi iṣẹ́ rẹ, tí ìwọ ti ṣàyẹ̀wò." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yíyan ohùn ilé-iṣẹ́ rẹ",
          minutes: 4,
          goal: "Ṣàlàyé bí iṣẹ́ rẹ ṣe ń dún, kí o sì jẹ́ kí AI kọ̀wé ní ohùn náà.",
          text: [
            "Ohùn ilé-iṣẹ́ rẹ (brand voice) ni bí iṣẹ́ rẹ ṣe ń dún. Ilé oúnjẹ ẹbí kan lè jẹ́ ọlọ́yàyà àti alárinrin; ẹni tó ń bá ni ṣe ìwé owó-orí lè jẹ́ ẹni tó farabalẹ̀, tó sì mọṣẹ́; ilé ìgbẹ̀run lè jẹ́ ẹni tó tura, tó sì sún mọ́ àdúgbò.",
            "Yan ọ̀rọ̀ mẹ́ta fún ohùn rẹ, kí o sì kọ àkọsílẹ̀ kúkúrú ti ohun tí o máa ṣe àti èyí tí o kò ní ṣe: \"Ṣe: pe orúkọ àkọ́kọ́ wọn, dúpẹ́, jẹ́ kí ó kúrú. Má ṣe: lo ọ̀rọ̀ àlùfààṣà (slang), kọ gbogbo rẹ̀ ní lẹ́tà ńlá, ṣe ìlérí nípa àkókò.\"",
            "Fi èyí fún AI ní òkè ìjíròrò: \"Kọ̀wé ní ohùn yìí fún gbogbo ìdáhùn.\" Báyìí, gbogbo ìdáhùn máa dún bí iṣẹ́ kan náà, kò sí ẹni tí ó fi ránṣẹ́ nínú ẹgbẹ́ rẹ."
          ],
          steps: ["Yan ọ̀rọ̀ mẹ́ta fún bí o ṣe fẹ́ dún.", "Kọ nǹkan mẹ́ta tí o máa ṣe àti mẹ́ta tí o kò ní ṣe.", "Lẹ̀ wọ́n sí ìbẹ̀rẹ̀ ìjíròrò.", "Béèrè àpẹẹrẹ ìdáhùn kan, kí o sì ṣàyẹ̀wò pé ó dún bó ṣe yẹ."],
          words: [["Ohùn ilé-iṣẹ́ (brand voice)", "bí iṣẹ́ kan ṣe ń dún nínú àwọn ọ̀rọ̀ ìránṣẹ́ rẹ̀."], ["Ọ̀kan náà nígbà gbogbo (consistent)", "bákan náà ní gbogbo ìgbà."]],
          slides: [
            { title: "Báwo ni iṣẹ́ rẹ ṣe ń dún?", bullets: ["Ilé oúnjẹ ẹbí: ọlọ́yàyà, alárinrin", "Ẹni tó ń ṣe ìwé owó-orí: farabalẹ̀, mọṣẹ́", "Ilé ìgbẹ̀run: tura, sún mọ́ àdúgbò"] },
            { title: "Kọ ọ́ sílẹ̀", bullets: ["Ọ̀rọ̀ mẹ́ta fún ohùn rẹ", "Nǹkan mẹ́ta tí o máa ṣe àti mẹ́ta tí o kò ní ṣe"] },
            { title: "Lò ó pẹ̀lú AI", bullets: ["Lẹ̀ ẹ́ sí ìbẹ̀rẹ̀ ìjíròrò", "Gbogbo ìdáhùn máa dún bí iṣẹ́ rẹ"] }
          ],
          tryIt: "Kọ ọ̀rọ̀ mẹ́ta fún ohùn rẹ àti ohun tí o máa ṣe àti èyí tí o kò ní ṣe. Lẹ̀ wọ́n sínú olùrànlọ́wọ́ AI, kí o sì béèrè ìdáhùn sí \"Ṣé ẹ máa ń ṣí ní ọjọ́ Àìkú?\" Ṣé ó dún bí ìwọ?",
          youCanNow: "ṣàlàyé ohùn ilé-iṣẹ́ rẹ kí o sì gba ìdáhùn AI tí ó dún bí iṣẹ́ rẹ.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ohùn ilé-iṣẹ́ (brand voice)?", options: ["Nọ́mbà fóònù iṣẹ́ rẹ", "Àwọ̀ àmì-ìdánimọ̀ (logo) rẹ", "Bí iṣẹ́ rẹ ṣe ń dún nínú àwọn ọ̀rọ̀ ìránṣẹ́", "Ìkíni tí a gbà sílẹ̀"], answer: 2, why: "Ohùn ilé-iṣẹ́ ni bí iṣẹ́ rẹ ṣe ń dún nígbà tí ó bá ń bá àwọn oníbàárà sọ̀rọ̀." },
            { objective: "O2", q: "O fẹ́ kí gbogbo ìdáhùn AI dún bí ilé búrẹ́dì rẹ. Kí ni o máa ṣe?", options: ["Retí pé yóò gbà á lérò", "Béèrè ohùn tuntun ní gbogbo ìgbà", "Lo lẹ́tà ńlá níbi gbogbo kí ó lè dún bí ẹni tí inú rẹ̀ dùn", "Fi ọ̀rọ̀ ohùn rẹ àti ohun tí o máa ṣe àti èyí tí o kò ní ṣe sí ìbẹ̀rẹ̀ ìjíròrò"], answer: 3, why: "Fífún AI ní ohùn rẹ ní ìbẹ̀rẹ̀ ń ràn án lọ́wọ́ láti mú gbogbo ìdáhùn bá a mu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Àpẹẹrẹ ìdáhùn fún ọ̀rọ̀ ìránṣẹ́, text àti email",
          minutes: 5,
          goal: "Ṣe àpẹẹrẹ ìdáhùn tí o lè tún lò, pẹ̀lú àmì ìdúrópò.",
          text: [
            "Àpẹẹrẹ ìdáhùn (template) jẹ́ ìdáhùn tí a ti múra sílẹ̀, tí ó ní àlàfo. O máa ń kún àwọn àlàfo náà ní ìgbà kọ̀ọ̀kan, nítorí náà o máa dáhùn láàárín ìṣẹ́jú-àáyá díẹ̀ láìtún gbogbo rẹ̀ tẹ̀.",
            "Àwọn àpẹẹrẹ tó wúlò: ìfìdímúlẹ̀ àyè tí a gbà, ìránnilétí àdéhùn, ọjà ti ṣetán, a ń pẹ́ díẹ̀, ẹ má bínú ọjà kan ti tán, àti ọpẹ́ lẹ́yìn ìbẹ̀wò. Béèrè lọ́wọ́ AI: \"Ní ohùn ilé-iṣẹ́ mi, kọ àpẹẹrẹ text kúkúrú márùn-ún fún iṣẹ́ fífọ ọkọ̀ tí ó ń lọ sọ́dọ̀ oníbàárà. Lo [orúkọ oníbàárà], [ọjọ́] àti [àkókò] gẹ́gẹ́ bí àlàfo.\"",
            "Pa àwọn àpẹẹrẹ mọ́ sínú ibi àkọsílẹ̀ (notes) fóònù rẹ tàbí ọ̀nà àbùjá text, tàbí sínú irinṣẹ́ booking rẹ tí ó bá gba ìdáhùn tí a fi pamọ́. Má ṣe lẹ orúkọ gidi oníbàárà, nọ́mbà fóònù tàbí ìsọfúnni káàdì sínú AI láti ṣe wọ́n láéláé; lo àwọn àlàfo."
          ],
          steps: ["Yan ipò márùn-ún tí o máa ń dáhùn sí léraléra.", "Ní kí AI kọ àpẹẹrẹ kúkúrú fún ọ̀kọ̀ọ̀kan, pẹ̀lú àlàfo nínú àkámọ́.", "Ṣàyẹ̀wò ọ̀rọ̀ àti òtítọ́ inú wọn.", "Fi wọ́n pamọ́ sí ibi tí o ti lè dà wọ́n kọ kíákíá."],
          words: [["Àpẹẹrẹ ìdáhùn (template)", "ìdáhùn tí a fi pamọ́, tí ó ní àlàfo tí o máa ń kún ní ìgbà kọ̀ọ̀kan."], ["Àmì ìdúrópò (placeholder)", "àlàfo bí [orúkọ oníbàárà] tí o máa fi ìsọfúnni gidi kún lẹ́yìn náà."]],
          slides: [
            { title: "Dáhùn láàárín ìṣẹ́jú-àáyá díẹ̀", bullets: ["Àpẹẹrẹ jẹ́ ìdáhùn tí a ti múra sílẹ̀, tí ó ní àlàfo", "Kún [orúkọ oníbàárà], [ọjọ́], [àkókò]"] },
            { title: "Àpẹẹrẹ márùn-ún tó wúlò", bullets: ["Ìfìdímúlẹ̀ àyè àti ìránnilétí", "Ọjà ti ṣetán; a ń pẹ́ díẹ̀", "Ẹ má bínú, ó ti tán; ẹ ṣé"] },
            { title: "Pa wọ́n mọ́ láìléwu, ní àrọ́wọ́tó", bullets: ["Notes fóònù, ọ̀nà àbùjá text tàbí ìdáhùn tí a fi pamọ́", "Lo àlàfo, kì í ṣe ìsọfúnni oníbàárà gidi"] }
          ],
          tryIt: "Ní kí AI kọ àpẹẹrẹ ìdáhùn márùn-ún ní ohùn ilé-iṣẹ́ rẹ pẹ̀lú [àlàfo]. Ṣàyẹ̀wò wọn, kí o sì fi wọ́n pamọ́ sí ibi tí o ti lè dà wọ́n kọ kíákíá.",
          youCanNow: "ṣe àpẹẹrẹ ìdáhùn kí o sì fi wọ́n pamọ́, kí o lè dá àwọn oníbàárà lóhùn kíákíá àti lọ́nà kan náà nígbà gbogbo.",
          quickCheck: [
            { objective: "O3", q: "Kí ni àpẹẹrẹ ìdáhùn (template)?", options: ["Ọ̀rọ̀ tí o ń tún lò, tí ó ní àlàfo láti kún", "Ìdáhùn ẹ̀ẹ̀kan ṣoṣo", "Review oníbàárà", "Àkọsílẹ̀ iye owó"], answer: 0, why: "Àpẹẹrẹ jẹ́ ìdáhùn tí a ti múra sílẹ̀, tí ó ní àlàfo tí o máa ń kún ní ìgbà kọ̀ọ̀kan." },
            { objective: "O3", q: "O fẹ́ àpẹẹrẹ fún \"ọjà yín ti ṣetán\". Kí ni o máa fún AI?", options: ["Orúkọ àti nọ́mbà fóònù oníbàárà gidi kan", "Nọ́mbà káàdì rẹ", "Àlàfo bí [orúkọ oníbàárà] àti [àkókò]", "Kò sí nǹkan kankan"], answer: 2, why: "Àlàfo ń pa ìsọfúnni àdáni mọ́, ó sì ń jẹ́ kí o lè tún àpẹẹrẹ náà lò." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìdáhùn ojoojúmọ́ tó yára, tó sì dùn mọ́ni",
        questions: [
          { objective: "O1", q: "Kí ni FAQ dúró fún?", options: ["Fast answer quote", "Frequently asked questions (àwọn ìbéèrè tí wọ́n ń béèrè léraléra)", "Free a question", "Final answer quiz"], answer: 1, why: "FAQ jẹ́ àkọsílẹ̀ àwọn ìbéèrè tí ó wọ́pọ̀ àti ìdáhùn wọn." },
          { objective: "O1", q: "AI ti sọ ìdáhùn rẹ di FAQ. Kí ló kàn?", options: ["Gbé e jáde láìkà á", "Fi ìlérí míì kún un", "Pa á rẹ́", "Ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan pẹ̀lú ohun tí o ń ṣe gan-an"], answer: 3, why: "FAQ jẹ́ ìlérí fún àwọn oníbàárà." },
          { objective: "O2", q: "Kí ni ohùn ilé-iṣẹ́ (brand voice)?", options: ["Bí iṣẹ́ rẹ ṣe ń dún nínú àwọn ọ̀rọ̀ ìránṣẹ́", "Ohùn orin ẹni tó ni iṣẹ́", "Nọ́mbà fóònù rẹ", "Àwọ̀ logo rẹ"], answer: 0, why: "Ohùn ilé-iṣẹ́ ni bí o ṣe ń dún." },
          { objective: "O3", q: "Èwo ni àlàfo tó dára fún àpẹẹrẹ ìdáhùn?", options: ["Ọ̀rọ̀ aṣínà (password) rẹ", "Nọ́mbà káàdì oníbàárà", "[orúkọ oníbàárà]", "Àdírẹ́sì ilé gidi kan"], answer: 2, why: "Àmì ìdúrópò ń pa ìsọfúnni àdáni mọ́ kúrò nínú irinṣẹ́ AI." },
          { objective: "O3", q: "Kí ló dé tí a fi ń lo àpẹẹrẹ ìdáhùn?", options: ["Láti gba owó púpọ̀ sí i", "Láti yẹra fún àwọn oníbàárà", "Láti dáhùn kíákíá àti lọ́nà kan náà nígbà gbogbo", "Láti fi iye owó pamọ́"], answer: 2, why: "Àpẹẹrẹ ń dín àkókò kù, ó sì ń jẹ́ kí ìdáhùn dára bákan náà." }
        ]
      }
    },
    {
      name: "Orí 2: Review, ìjíròrò tó le àti ìgbẹ́kẹ̀lé",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dídáhùn review lórí ayélujára, èyí tó dára àti èyí tí kò dára",
          minutes: 5,
          goal: "Kọ ìdáhùn olóòótọ́ sí review rere àti èyí tí kò dára, kí o sì tẹ̀lé òfin FTC nípa review.",
          text: [
            "Àwọn oníbàárà máa ń ka bí o ṣe ń dá review lóhùn. Dúpẹ́ fún review rere ní ṣókí, kí o sì dárúkọ oúnjẹ tàbí iṣẹ́ tí wọ́n fẹ́ràn. Fún review tí kò dára, farabalẹ̀: dúpẹ́ lọ́wọ́ wọn, tọrọ àforíjì fún ohun tí wọ́n rí, tún ohun tí o lè tún ṣe, kí o sì pè wọ́n láti kàn sí ọ tààrà. Má ṣe jiyàn ní gbangba, má sì ṣe fi ìsọfúnni àdáni wọn hàn.",
            "AI ń ràn ọ́ lọ́wọ́ láti kọ ìdáhùn tó farabalẹ̀ nígbà tí inú ń bí ọ. Lẹ ọ̀rọ̀ review náà (kì í ṣe ìsọfúnni àdáni ẹni tó kọ ọ́), kí o sì béèrè: \"Kọ ìdáhùn kúkúrú tó ní ọ̀wọ̀. Tọrọ àforíjì, sọ pé a ti tún kọ́ àwọn òṣìṣẹ́ wa nípa àkókò ìdúró, kí o sì pè wọ́n láti pè wá.\" Sọ ohun tí ó jẹ́ òtítọ́ nìkan.",
            "Má ṣe kọ review èké, má ṣe rà á, má sì ṣe fi AI ṣe é láéláé. Federal Trade Commission (FTC), àjọ ìjọba US tí ń dáàbò bo àwọn oníbàárà, ní òfin kan láti October 2024 tí ó fòfin de review àti ẹ̀rí èké, títí kan èyí tí AI ṣe, àti sísan owó fún review kìkì tí ó bá jẹ́ rere. Ka ojú-ìwé ìbéèrè àti ìdáhùn FTC láti mọ ohun tí a gbà láàyè."
          ],
          steps: ["Ka review náà lẹ́ẹ̀mejì, kí o sì dúró tí inú bá ń bí ọ.", "Ní kí AI kọ àkọ́pẹrẹ kúkúrú tó ní ọ̀wọ̀.", "Rí i dájú pé gbogbo ọ̀rọ̀ inú rẹ̀ jẹ́ òtítọ́.", "Pe àwọn oníbàárà tí inú wọn kò dùn láti kàn sí ọ tààrà.", "Má ṣe kọ, rà tàbí ṣe review èké láéláé."],
          words: [["Review", "ìdíyelé àti ọ̀rọ̀ oníbàárà nípa iṣẹ́ rẹ ní gbangba."], ["FTC", "Federal Trade Commission: àjọ ìjọba US tí ń dáàbò bo àwọn oníbàárà kúrò lọ́wọ́ ìwà òwò tí kò tọ́ àti ẹ̀tàn."], ["Ẹ̀rí oníbàárà (testimonial)", "ọ̀rọ̀ oníbàárà tí ń yin iṣẹ́ kan, tí iṣẹ́ náà ń lò fún ìpolówó."]],
          slides: [
            { title: "Review rere", bullets: ["Dúpẹ́, kí o sì dárúkọ ohun tí wọ́n fẹ́ràn", "Jẹ́ kí ó kúrú, kí ó sì jẹ́ òtítọ́"] },
            { title: "Review tí kò dára", bullets: ["Farabalẹ̀; dúró tí inú bá ń bí ọ", "Dúpẹ́, tọrọ àforíjì, tún ohun tí o lè tún ṣe", "Pè wọ́n láti kàn sí ọ tààrà"] },
            { title: "Òfin FTC nípa review èké", bullets: ["Ó fòfin de review èké, títí kan èyí tí AI ṣe", "Ó fòfin de sísan owó fún review rere nìkan", "Ó ti wà láti October 2024: wo ftc.gov"] }
          ],
          sources: [FTC_REVIEWS, FTC_REVIEWS_PR],
          tryIt: "Wá review gidi kan nípa iṣẹ́ rẹ (tàbí kọ àpẹẹrẹ review tí kò dára nípa ọjà tí ó pẹ́ dé). Lo AI láti kọ àkọ́pẹrẹ ìdáhùn tó farabalẹ̀, ṣàyẹ̀wò pé gbogbo ọ̀rọ̀ inú rẹ̀ jẹ́ òtítọ́, kí o sì tún un ṣe sí ohùn rẹ.",
          youCanNow: "dá review rere àti èyí tí kò dára lóhùn pẹ̀lú ìfarabalẹ̀ àti òtítọ́, láìrú òfin FTC nípa review èké.",
          quickCheck: [
            { objective: "O4", q: "Ìwà wo nípa review ni òfin FTC fòfin dè?", options: ["Dídáhùn review tí kò dára", "Sísan owó fún oníbàárà kìkì tí wọ́n bá kọ review rere", "Dídúpẹ́ lọ́wọ́ oníbàárà fún review", "Bíbéèrè lọ́wọ́ gbogbo oníbàárà fún review olóòótọ́"], answer: 1, why: "Fífún ni lẹ́bùn fún review rere nìkan jẹ́ èèwọ̀ lábẹ́ òfin FTC." },
            { objective: "O4", q: "Review kan tó le mú inú bí ọ. Kí ni o máa ṣe?", options: ["Dáhùn lẹ́sẹ̀kẹsẹ̀ ní lẹ́tà ńlá", "Kọ review rere èké láti fi dọ́gba", "Ní kí àwọn ọ̀rẹ́ rẹ bá ẹni tó kọ ọ́ jiyàn", "Dúró, tún un kà, lẹ́yìn náà kọ ìdáhùn tó farabalẹ̀, tó sì jẹ́ òtítọ́"], answer: 3, why: "Dídúró ń ràn ọ́ lọ́wọ́ láti dáhùn pẹ̀lú ìfarabalẹ̀ àti òtítọ́." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mímú inú oníbàárà tí inú ń bí rọ̀",
          minutes: 5,
          goal: "Lo ọ̀nà ìgbésẹ̀ mẹ́rin tó rọrùn, pẹ̀lú ìrànlọ́wọ́ AI, láti dá oníbàárà tí inú ń bí lóhùn.",
          text: [
            "Ọ̀nà kan tó rọrùn ń ṣiṣẹ́ fún ọ̀pọ̀ ẹ̀sùn: Listen (Gbọ́), Apologize (Tọrọ àforíjì), Solve (Yanjú), Thank (Dúpẹ́), ìyẹn LAST. Gbọ́ gbogbo ẹ̀sùn náà, tọrọ àforíjì fún ohun tí wọ́n rí, fi ojútùú tó tọ́ tí o lè fúnni ní tòótọ́ lọ̀ wọ́n, kí o sì dúpẹ́ pé wọ́n sọ fún ọ.",
            "Pinnu òdiwọ̀n rẹ kí o tó nílò rẹ̀: ìgbà tí o máa dá owó padà, tún iṣẹ́ ṣe, dín owó kù tàbí fúnni ní nǹkan ọ̀fẹ́. AI lè kọ àkọ́pẹrẹ ọ̀rọ̀ náà, ṣùgbọ́n ìwọ ni o máa yan ojútùú. Má ṣe jẹ́ kí AI ṣe ìlérí tí o kò gbà sí.",
            "Tí oníbàárà bá halẹ̀, tí ó bá ń yọ ọ́ lẹ́nu, tàbí tí ó bá mẹ́nu ba ìpalára, ààbò tàbí ẹjọ́, jẹ́ kí ìdáhùn kúrú, má ṣe gbà pé ẹ̀bi rẹ ni ní ìwé, kí o sì bá amọ̀ṣẹ́dunjú tàbí ilé-iṣẹ́ ìdánilójú (insurer) rẹ sọ̀rọ̀."
          ],
          steps: ["Gbọ́ (Listen): ka tàbí gbọ́ gbogbo ẹ̀sùn náà.", "Tọrọ àforíjì (Apologize) fún ohun tí wọ́n rí.", "Yanjú (Solve): fi ojútùú tó tọ́ lọ̀ wọ́n láàárín òdiwọ̀n rẹ.", "Dúpẹ́ (Thank) pé wọ́n sọ fún ọ.", "Ní kí AI kọ àkọ́pẹrẹ rẹ̀, lẹ́yìn náà ṣàyẹ̀wò pé ìlérí náà jẹ́ èyí tí o máa mú ṣẹ."],
          words: [["LAST", "Listen, Apologize, Solve, Thank (Gbọ́, Tọrọ àforíjì, Yanjú, Dúpẹ́): ọ̀nà kan fún bíbá ẹ̀sùn lò."], ["Gbé e ga (escalate)", "fi ìṣòro ńlá lé ẹni tó ni iṣẹ́, amọ̀ṣẹ́dunjú tàbí ilé-iṣẹ́ ìdánilójú lọ́wọ́."]],
          slides: [
            { title: "Ọ̀nà LAST", bullets: ["Listen: Gbọ́", "Apologize: Tọrọ àforíjì", "Solve: Yanjú", "Thank: Dúpẹ́"] },
            { title: "Kọ́kọ́ pinnu òdiwọ̀n rẹ", bullets: ["Ìgbà tí o máa dá owó padà, tún iṣẹ́ ṣe tàbí dín owó kù", "Ìwọ ni o yan ojútùú, kì í ṣe AI"] },
            { title: "Ìgbà tí o máa gbé e ga", bullets: ["Ìhalẹ̀ tàbí ìyọlẹ́nu", "Ẹ̀sùn ìpalára, ààbò tàbí ẹjọ́", "Jẹ́ kí ó kúrú; pe amọ̀ṣẹ́dunjú tàbí insurer"] }
          ],
          tryIt: "Kọ òdiwọ̀n rẹ fún dídá owó padà àti títún iṣẹ́ ṣe ní ìlà mẹ́ta. Lẹ́yìn náà lo AI láti kọ àkọ́pẹrẹ ìdáhùn LAST sí: \"Adùn kéèkì mi kò tọ̀nà, ayẹyẹ wa sì ti bàjẹ́.\" Ṣàyẹ̀wò pé ojútùú náà jẹ́ èyí tí o máa fúnni ní tòótọ́.",
          youCanNow: "dá oníbàárà tí inú ń bí lóhùn pẹ̀lú ọ̀nà LAST àti ojútùú gidi tó tọ́.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ nínú ọ̀nà LAST?", options: ["Yanjú (Solve)", "Dúpẹ́ (Thank)", "Gbọ́ (Listen)", "Tọrọ àforíjì (Apologize)"], answer: 2, why: "LAST bẹ̀rẹ̀ pẹ̀lú gbígbọ́ ọ̀rọ̀ oníbàárà." },
            { objective: "O5", q: "Ìdáhùn AI sí oníbàárà tí inú ń bí fi dídá gbogbo owó padà àti iṣẹ́ ọ̀fẹ́ fún oṣù kan lọ̀ ọ́, èyí tí ó ju òdiwọ̀n rẹ lọ. Kí ni o máa ṣe?", options: ["Yí i padà sí ojútùú tí ó wà láàárín òdiwọ̀n rẹ", "Fi ránṣẹ́ bí ó ṣe wà", "Yọ àforíjì kúrò", "Pa oníbàárà náà tì"], answer: 0, why: "Ìwọ ni o máa yan ojútùú tó tọ́ láàárín òdiwọ̀n tí o pinnu, kì í ṣe AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ìsọfúnni àdáni, òtítọ́ àti àkójọ ìtọ́jú oníbàárà rẹ",
          minutes: 5,
          goal: "Kó àwọn irinṣẹ́ ìtọ́jú oníbàárà rẹ jọ, kí o sì pa ìsọfúnni oníbàárà mọ́.",
          text: [
            "Àwọn oníbàárà gbẹ́kẹ̀ lé ọ pẹ̀lú orúkọ wọn, nọ́mbà fóònù, àdírẹ́sì àti nígbà míì ìsọfúnni káàdì wọn. Pa wọ́n mọ́ kúrò nínú irinṣẹ́ AI. Lo àmì ìdúrópò, kí ìwọ fúnra rẹ sì kún ìsọfúnni gidi nínú fóònù rẹ tàbí ètò booking rẹ.",
            "Tí o bá ń lo chatbot lórí ojú-òpó wẹ́ẹ̀bù rẹ tàbí fún ọ̀rọ̀ ìránṣẹ́, sọ fún àwọn oníbàárà pé ẹ̀rọ aládàáṣiṣẹ́ ni wọ́n ń bá sọ̀rọ̀, kí o sì fún wọn ní ọ̀nà láti bá ènìyàn sọ̀rọ̀. Máa ṣàyẹ̀wò ohun tí ó ń sọ déédéé.",
            "Báyìí, kó gbogbo rẹ̀ sínú ìwé kan ṣoṣo: ohùn ilé-iṣẹ́ rẹ, FAQ rẹ, àwọn àpẹẹrẹ ìdáhùn rẹ, ọ̀nà LAST pẹ̀lú òdiwọ̀n rẹ, àti ìdáhùn rẹ sí review. Pín in fún àwọn òṣìṣẹ́ rẹ kí gbogbo ènìyàn lè máa dáhùn lọ́nà kan náà."
          ],
          steps: ["Ṣàyẹ̀wò pé gbogbo àpẹẹrẹ ń lo àmì ìdúrópò, kì í ṣe ìsọfúnni gidi.", "Tí o bá ń lo chatbot, sọ pé ẹ̀rọ ni, kí o sì fúnni ní ọ̀nà láti bá ènìyàn sọ̀rọ̀.", "Kó ohùn, FAQ, àwọn àpẹẹrẹ, òdiwọ̀n LAST àti ìdáhùn review jọ sínú ìwé kan.", "Pín in fún ẹgbẹ́ rẹ."],
          words: [["Chatbot", "ètò aládàáṣiṣẹ́ tí ń dá àwọn ọ̀rọ̀ ìránṣẹ́ lóhùn."], ["Ìsọfúnni oníbàárà", "ìsọfúnni nípa àwọn oníbàárà rẹ, bí orúkọ, nọ́mbà fóònù àti ọjà tí wọ́n rà."]],
          slides: [
            { title: "Pa ìsọfúnni oníbàárà mọ́", bullets: ["Kò sí orúkọ pẹ̀lú fóònù, àdírẹ́sì tàbí káàdì nínú AI", "Lo àmì ìdúrópò; ìwọ fúnra rẹ ni kí o kún ìsọfúnni"] },
            { title: "Tí o bá ń lo chatbot", bullets: ["Sọ pé ẹ̀rọ aládàáṣiṣẹ́ ni", "Fúnni ní ọ̀nà láti bá ènìyàn sọ̀rọ̀", "Máa ṣàyẹ̀wò ìdáhùn rẹ̀ léraléra"] },
            { title: "Àkójọ ìtọ́jú oníbàárà rẹ", bullets: ["Ohùn ilé-iṣẹ́ àti FAQ", "Àwọn àpẹẹrẹ ìdáhùn àti òdiwọ̀n LAST", "Ìdáhùn review, tí o pín fún ẹgbẹ́ rẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kó ohùn ilé-iṣẹ́ rẹ, FAQ ìbéèrè mẹ́wàá, àpẹẹrẹ márùn-ún, ìdáhùn kan sí oníbàárà tí inú ń bí àti ìdáhùn kan sí review sínú ìwé kan ṣoṣo. Ṣàyẹ̀wò gbogbo òtítọ́, kí o sì yọ ìsọfúnni oníbàárà gidi èyíkéyìí kúrò.",
          youCanNow: "ṣe ìtọ́jú oníbàárà pẹ̀lú àkójọ tí o ti ṣàyẹ̀wò, tí ó pa ìsọfúnni mọ́, tí ó sì jẹ́ ọ̀kan náà nígbà gbogbo, tí o fi ìrànlọ́wọ́ AI ṣe.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí o fi máa pín àkójọ ìtọ́jú oníbàárà rẹ fún àwọn òṣìṣẹ́?", options: ["Kí wọ́n lè yí iye owó padà", "Kí gbogbo ènìyàn lè máa dáhùn lọ́nà kan náà", "Kí wọ́n lè fo ẹ̀kọ́ sílẹ̀", "Kí àwọn oníbàárà lè tún un ṣe"], answer: 1, why: "Àkójọ tí a pín ń jẹ́ kí ìdáhùn jẹ́ ọ̀kan náà ní gbogbo ẹgbẹ́ rẹ." },
            { objective: "O6", q: "O ń ṣe àpẹẹrẹ ìdáhùn, ìsọfúnni káàdì oníbàárà gidi kan sì wà nínú àkọsílẹ̀ rẹ. Kí ni o máa ṣe?", options: ["Lẹ̀ ẹ́ sínú AI kí ó lè yé e", "Lò ó gẹ́gẹ́ bí àpẹẹrẹ", "Pín in fún àwọn òṣìṣẹ́ nínú àkójọ náà", "Pa á mọ́ kúrò nínú irinṣẹ́ AI àti àkójọ náà"], answer: 3, why: "Ìsọfúnni káàdì oníbàárà gbọ́dọ̀ wà níta irinṣẹ́ AI." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Review, ìjíròrò tó le àti ìgbẹ́kẹ̀lé",
        questions: [
          { objective: "O4", q: "Oníbàárà kan fi review ìràwọ̀ kan sílẹ̀ nípa ìdúró tó gùn. Kí ni ìdáhùn tó dára jù?", options: ["Dúpẹ́, tọrọ àforíjì, sọ ohun tí ò ń tún ṣe, kí o sì pè wọ́n láti kàn sí ọ", "Jiyàn pé wọn kò tọ̀nà", "Gbé nọ́mbà fóònù wọn jáde", "Pa á tì títí láé"], answer: 0, why: "Ìdáhùn tó farabalẹ̀, tó sì jẹ́ òtítọ́ ń kọ́ ìgbẹ́kẹ̀lé." },
          { objective: "O4", q: "Lábẹ́ òfin FTC, èwo ni a KÒ gbà láàyè?", options: ["Dídúpẹ́ lọ́wọ́ ẹni tó kọ review", "Dídáhùn review tí kò dára", "Bíbéèrè lọ́wọ́ oníbàárà tí inú wọn dùn láti kọ review olóòótọ́", "Lílo AI láti kọ review oníbàárà èké"], answer: 3, why: "Òfin FTC fòfin de review èké, títí kan èyí tí AI ṣe." },
          { objective: "O5", q: "Kí ni S nínú LAST dúró fún?", options: ["Sell (tà)", "Solve (yanjú)", "Stop (dúró)", "Smile (rẹ́rìn-ín)"], answer: 1, why: "Listen, Apologize, Solve, Thank: Gbọ́, Tọrọ àforíjì, Yanjú, Dúpẹ́." },
          { objective: "O5", q: "Ta ló máa yan ojútùú fún oníbàárà tí inú ń bí?", options: ["Ìwọ, láàárín òdiwọ̀n tí o pinnu", "AI", "Oníbàárà nìkan", "Àjèjì kan lórí ayélujára"], answer: 0, why: "AI ń kọ àkọ́pẹrẹ; ìwọ ló ń pinnu ojútùú." },
          { objective: "O6", q: "Chatbot ojú-òpó wẹ́ẹ̀bù rẹ gbọ́dọ̀:", options: ["Ṣe bí ẹni pé ènìyàn ni", "Gba nọ́mbà káàdì nínú chat", "Sọ pé ẹ̀rọ aládàáṣiṣẹ́ ni, kí ó sì fúnni ní ọ̀nà láti bá ènìyàn sọ̀rọ̀", "Má ṣe jẹ́ ká ṣàyẹ̀wò rẹ̀ rárá"], answer: 2, why: "Òtítọ́ àti ọ̀nà láti bá ènìyàn sọ̀rọ̀ ń kọ́ ìgbẹ́kẹ̀lé." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ìtọ́jú Oníbàárà àti Ìbánisọ̀rọ̀",
    questions: [
      { objective: "O1", q: "Èwo ni ìbéèrè oníbàárà tí ó wọ́pọ̀ láti fi sínú FAQ?", options: ["Kí ni ọ̀rọ̀ aṣínà yín?", "Kí ni àkókò ìṣísílẹ̀ yín?", "Kí ni nọ́mbà báǹkì yín?", "Ta ni ó ni ilé-iṣẹ́ àwọn tó ń ta ọjà fún yín?"], answer: 1, why: "Àkókò ìṣísílẹ̀ wà lára àwọn ìbéèrè tí wọ́n ń béèrè jù." },
      { objective: "O1", q: "Ibo ni ìdáhùn inú FAQ rẹ ti wá?", options: ["Àwọn review kan láìnídìí", "Ohun tí AI gbà lérò", "Ojú-òpó wẹ́ẹ̀bù olùdíje", "Òfin gidi iṣẹ́ rẹ, tí ìwọ kọ, tí AI sì mú yé"], answer: 3, why: "AI kàn ń ṣe ìtò ìdáhùn gidi rẹ ni." },
      { objective: "O1", q: "Kí ló dé tí o fi máa ṣàyẹ̀wò FAQ kí o tó gbé e jáde?", options: ["Láti mú kí ó gùn sí i", "AI máa ń tọ̀nà nígbà gbogbo", "Kò pọn dandan", "Ìlérí ni fún àwọn oníbàárà"], answer: 3, why: "Àwọn oníbàárà máa retí pé kí o mú un ṣẹ." },
      { objective: "O2", q: "Ọ̀rọ̀ mẹ́ta fún ohùn ilé búrẹ́dì ẹbí kan lè jẹ́:", options: ["Bínú, kánjú, tutù", "Ọlọ́yàyà, aláyọ̀, rọrùn", "Àṣírí, kò yé, gùn", "Ti òfin, le, burú"], answer: 1, why: "Ọ̀rọ̀ ohùn ń ṣàpèjúwe bí o ṣe fẹ́ dún." },
      { objective: "O2", q: "Ibo ni o máa fi ohùn ilé-iṣẹ́ rẹ sí kí AI lè lò ó?", options: ["Lórí ìwé ìsanwó (receipt)", "Nínú ọ̀rọ̀ aṣínà rẹ", "Ní ìbẹ̀rẹ̀ ìjíròrò", "Níbìkankan"], answer: 2, why: "Lílẹ̀ ẹ́ sí òkè ń tọ́ gbogbo ìdáhùn sọ́nà." },
      { objective: "O2", q: "Ohun kan tí o \"kò ní ṣe\" nínú àkọsílẹ̀ ohùn ilé-iṣẹ́ lè jẹ́:", options: ["Kọ gbogbo rẹ̀ ní lẹ́tà ńlá", "Dúpẹ́", "Pe orúkọ àkọ́kọ́", "Jẹ́ kí ó kúrú"], answer: 0, why: "Lẹ́tà ńlá níbi gbogbo lè dún bí ìgbe." },
      { objective: "O3", q: "Èwo ni àpẹẹrẹ ìdáhùn tó dára?", options: ["\"Fi ọ̀rọ̀ aṣínà rẹ ránṣẹ́ sí mi.\"", "\"Ẹ n lẹ Jane Smith, 555-0101, káàdì 4111...\"", "\"Ẹ n lẹ [orúkọ oníbàárà], ọjà yín ti ṣetán, ẹ lè wá gbà á ní [àkókò].\"", "\"Rárá.\""], answer: 2, why: "Ó ń lo àmì ìdúrópò, ó sì yé." },
      { objective: "O3", q: "Ibo ni o lè pa àwọn àpẹẹrẹ mọ́ sí láti lò wọ́n kíákíá?", options: ["Notes fóònù, ọ̀nà àbùjá text tàbí ìdáhùn tí a fi pamọ́", "Nínú orí rẹ nìkan", "Nínú àpótí ọ̀rọ̀ oníbàárà kan", "Ní gbangba lórí ìkànnì àjọlò"], answer: 0, why: "Àpẹẹrẹ tí a fi pamọ́ rọrùn láti dà kọ." },
      { objective: "O3", q: "Láti fi AI ṣe àpẹẹrẹ ìdáhùn, ohun tí o máa fún un ni:", options: ["Orúkọ àti nọ́mbà oníbàárà gidi", "Àlàfo bí [ọjọ́] àti [àkókò]", "Ìsọfúnni káàdì", "Àwọn ọ̀rọ̀ aṣínà rẹ"], answer: 1, why: "Lo àmì ìdúrópò, kì í ṣe ìsọfúnni gidi." },
      { objective: "O4", q: "Review rere kan yin \"oxtail tó dára jù nínú ìlú\" rẹ. Ìdáhùn tó dára:", options: ["Fi owó lọ̀ wọ́n fún review míì", "Pa á tì", "Béèrè àdírẹ́sì wọn", "Dúpẹ́ lọ́wọ́ wọn, kí o sì dárúkọ oxtail náà"], answer: 3, why: "Ọpẹ́ kúkúrú tí ó kan ẹni náà ló dára jù." },
      { objective: "O4", q: "Sísan owó fún oníbàárà kìkì tí wọ́n bá kọ review rere jẹ́:", options: ["Èèwọ̀ lábẹ́ òfin FTC", "Dandan", "Èrò tó dára", "Ó dára ní òpin ọ̀sẹ̀ nìkan"], answer: 0, why: "Òfin náà fòfin de ẹ̀bùn tí ó dá lórí kí review jẹ́ rere." },
      { objective: "O4", q: "Nígbà tí review tí ó kún fún ìbínú bá dà ọ́ láàmú, ohun àkọ́kọ́ tí o máa ṣe ni:", options: ["Kọ review rere èké", "Dáhùn lẹ́sẹ̀kẹsẹ̀ ní lẹ́tà ńlá", "Gbé ìsọfúnni oníbàárà jáde", "Dúró, kí o sì tún un kà kí o tó dáhùn"], answer: 3, why: "Ìdáhùn tó farabalẹ̀ ni ìdáhùn tó dára jù." },
      { objective: "O5", q: "Nínú ọ̀nà LAST, ìgbésẹ̀ àkọ́kọ́ ni láti:", options: ["Laugh (rẹ́rìn-ín)", "Leave (lọ)", "Listen (gbọ́)", "Lie (purọ́)"], answer: 2, why: "Kọ́kọ́ gbọ́ gbogbo ẹ̀sùn náà." },
      { objective: "O5", q: "Kí ló dé tí o fi máa pinnu òdiwọ̀n fún dídá owó padà àti títún iṣẹ́ ṣe kí ẹ̀sùn tó dé?", options: ["Láti kọ gbogbo ènìyàn", "Kí o lè fi ojútùú tó tọ́ tí o máa mú ṣẹ lọ̀ wọ́n", "Láti da àwọn òṣìṣẹ́ rú", "Òfin ló sọ bẹ́ẹ̀"], answer: 1, why: "Òdiwọ̀n tó yé ń jẹ́ kí ìpinnu tọ́, kí ó sì yára." },
      { objective: "O5", q: "Oníbàárà kan sọ pé òun farapa nínú ṣọ́ọ̀bù rẹ. O gbọ́dọ̀:", options: ["Kọ̀wé nípa rẹ̀ lórí ayélujára", "Jẹ́ kí AI gbà pé ẹ̀bi rẹ ni ní kíkún", "Pa á tì", "Jẹ́ kí ìdáhùn kúrú, kí o sì bá amọ̀ṣẹ́dunjú tàbí insurer rẹ sọ̀rọ̀"], answer: 3, why: "Ẹ̀sùn ìpalára àti ẹjọ́ nílò ìmọ̀ràn amọ̀ṣẹ́dunjú." },
      { objective: "O5", q: "AI kọ ìdáhùn tí ó ṣe ìlérí oúnjẹ ọ̀fẹ́ fún ọdún kan. Ìwọ:", options: ["Fi ìlérí míì kún un", "Fi ránṣẹ́", "Yọ ọ́ kúrò àyàfi tí o bá ti gbà sí i ní tòótọ́", "Ní kí oníbàárà pinnu"], answer: 2, why: "Ṣe ìlérí ohun tí o máa mú ṣẹ nìkan." },
      { objective: "O6", q: "Ìsọfúnni káàdì oníbàárà gbọ́dọ̀:", options: ["Wà níta irinṣẹ́ AI", "Wà nínú chat", "Wà nínú ìdáhùn ní gbangba", "Wà nínú àwọn àpẹẹrẹ ìdáhùn"], answer: 0, why: "Ìsọfúnni káàdì jẹ́ ti àdáni." },
      { objective: "O6", q: "Tí o bá ń lo chatbot, àwọn oníbàárà gbọ́dọ̀ lè:", options: ["Má lè bá ẹnikẹ́ni sọ̀rọ̀ láéláé", "Bá ènìyàn sọ̀rọ̀", "San owó pẹ̀lú gift card nìkan", "Lo ọ̀rọ̀ kan ṣoṣo nìkan"], answer: 1, why: "Ọ̀nà láti bá ènìyàn sọ̀rọ̀ ń kọ́ ìgbẹ́kẹ̀lé." },
      { objective: "O6", q: "Àkójọ ìtọ́jú oníbàárà rẹ ní:", options: ["Àwọn ọ̀rọ̀ aṣínà", "Ohùn, FAQ, àpẹẹrẹ ìdáhùn, òdiwọ̀n LAST àti ìdáhùn review", "Nọ́mbà káàdì oníbàárà", "Review èké"], answer: 1, why: "Àwọn apá yẹn ló ń jẹ́ kí ìtọ́jú oníbàárà yára, kí ó sì jẹ́ ọ̀kan náà." },
      { objective: "O6", q: "Kí ló dé tí o fi máa pín àkójọ náà fún àwọn òṣìṣẹ́?", options: ["Kí gbogbo ènìyàn lè máa dáhùn lọ́nà kan náà", "Láti mú wọn falẹ̀", "Láti fi í pamọ́", "Kò wúlò"], answer: 0, why: "Ìdáhùn tó jẹ́ ọ̀kan náà ń kọ́ ìgbẹ́kẹ̀lé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 2, 3, 6, 8, 9, 10, 12, 13, 16]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ohùn ilé-iṣẹ́", objective: "O2", notYet: "Kò sí ọ̀rọ̀ ohùn tàbí àkọsílẹ̀ ohun tí o máa ṣe àti èyí tí o kò ní ṣe.", meets: "Ọ̀rọ̀ mẹ́ta fún ohùn àti àkọsílẹ̀ ohun tí o máa ṣe àti èyí tí o kò ní ṣe.", exceeds: "Àwọn àpẹẹrẹ ìdáhùn bá ohùn náà mu dáadáa." },
      { name: "FAQ tí a ti ṣàyẹ̀wò", objective: "O1", notYet: "Ìbéèrè tí kò tó mẹ́wàá, tàbí ìdáhùn kan tí kì í ṣe òtítọ́.", meets: "Ìbéèrè mẹ́wàá tí ó wọ́pọ̀, pẹ̀lú ìdáhùn tí a ti ṣàyẹ̀wò pẹ̀lú ohun tí o ń ṣe gan-an.", exceeds: "Àwọn ìdáhùn kúrú, wọ́n sì wà ní ohùn ilé-iṣẹ́." },
      { name: "Àpẹẹrẹ ìdáhùn", objective: "O3", notYet: "Wọn kò tó márùn-ún, tàbí wọ́n ní ìsọfúnni oníbàárà gidi.", meets: "Àpẹẹrẹ márùn-ún tí a ti ṣàyẹ̀wò, pẹ̀lú àmì ìdúrópò.", exceeds: "A fi wọ́n pamọ́ sí ibi tí àwọn òṣìṣẹ́ ti lè dà wọ́n kọ kíákíá." },
      { name: "Ìdáhùn sí oníbàárà tí inú ń bí", objective: "O5", notYet: "Ó ń gbèjà ara rẹ̀, tàbí ó fi ojútùú tí o kò ní fúnni lọ̀ wọ́n.", meets: "Ó tẹ̀lé LAST, ó sì fi ojútùú tí ó wà láàárín òdiwọ̀n rẹ lọ̀ wọ́n.", exceeds: "Òdiwọ̀n rẹ fún dídá owó padà àti títún iṣẹ́ ṣe wà nínú àkójọ náà." },
      { name: "Ìdáhùn review", objective: "O4", notYet: "Ó ń jiyàn, ó sọ nǹkan tí kì í ṣe òtítọ́, tàbí kò sí.", meets: "Ó farabalẹ̀, ó jẹ́ òtítọ́, ó sì wà ní ohùn rẹ.", exceeds: "Ó sọ ohun tí ò ń tún ṣe, ó sì pe oníbàárà láti kàn sí ọ." },
      { name: "Ìsọfúnni àdáni àti òtítọ́", objective: "O6", notYet: "Ìsọfúnni oníbàárà gidi wà nínú àkójọ tàbí nínú chat AI, tàbí òtítọ́ tí a kò ṣàyẹ̀wò.", meets: "Kò sí ìsọfúnni àdáni oníbàárà tí a lò, a sì ti ṣàyẹ̀wò gbogbo òtítọ́.", exceeds: "Àkójọ náà sọ bí chatbot, tí o bá ń lò ó, ṣe ń sọ pé ẹ̀rọ ni, tí ó sì ń fúnni ní ọ̀nà láti bá ènìyàn sọ̀rọ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn tó ni iṣẹ́ tí wọ́n ń lo FAQ tàbí àpẹẹrẹ ìdáhùn wọn lọ́sọ̀ọ̀sẹ̀ (ìwádìí àtẹ̀lé lẹ́yìn ọjọ́ 30)",
      "Àwọn tó ni iṣẹ́ tí wọ́n ń dá gbogbo review tuntun lóhùn láàárín ọ̀sẹ̀ kan (ìwádìí àtẹ̀lé)",
      "Àwọn tó ni iṣẹ́ tí wọ́n ròyìn pé ìdáhùn wọn ti yára sí i tàbí pé review wọn ti dára sí i láàárín ọjọ́ 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: Microsoft Copilot, ChatGPT tàbí Google Gemini",
      "Irinṣẹ́ ìwé ọ̀fẹ́ bí Google Docs tàbí Microsoft Word fún àkójọ náà",
      "Àkọsílẹ̀ àwọn ìbéèrè oníbàárà gidi àti òdiwọ̀n rẹ fún dídá owó padà àti títún iṣẹ́ ṣe",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ní kí àwọn tó ni iṣẹ́ mú àwọn ìbéèrè gidi tí wọ́n ń gbọ́ jù wá, àti review gidi kan tàbí àpẹẹrẹ kan.",
      "Lo orúkọ oníbàárà àpẹẹrẹ nìkan; má ṣe lẹ ọ̀rọ̀ oníbàárà gidi tí ó ní orúkọ tàbí nọ́mbà sínú AI láéláé.",
      "Ẹ ṣe eré ìṣe (role-play) ọ̀nà LAST ní méjì-méjì pẹ̀lú ẹ̀sùn àròsọ kí ẹ tó kọ ìdáhùn.",
      "Rán àwọn tó ni iṣẹ́ létí pé ẹ̀sùn ìpalára máa ń lọ sọ́dọ̀ amọ̀ṣẹ́dunjú tàbí insurer wọn, kì í ṣe sí ìdáhùn AI.",
      "Fi rubric ṣe àmì fún àkójọ náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
