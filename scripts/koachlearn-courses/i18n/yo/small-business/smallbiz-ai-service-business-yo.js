"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-ai-service-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CAN_SPAM = { name: "FTC: Òfin CAN-SPAM, ìtọ́sọ́nà ìbámu fún ilé-iṣẹ́ (ní èdè Gẹ̀ẹ́sì)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

const FTC_REVIEWS = { name: "FTC: Òfin nípa àyẹ̀wò (review) àti ẹ̀rí àwọn oníbàárà, ìbéèrè àti ìdáhùn (ní èdè Gẹ̀ẹ́sì)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-service-business-yo",
  lang: "yo",
  translationOf: "smallbiz-ai-service-business",
  category: "Small Business",
  name: "AI fún Iṣẹ́ Ìpèsè Iṣẹ́ (Service Business)",
  skills: "Kíkọ ìdíyelé (quote) tó yé, Ṣíṣe ọ̀rọ̀ ìfìdímúlẹ̀ àti ìrántí ìpàdé, Ṣíṣe àkọsílẹ̀ àyẹ̀wò iṣẹ́ (checklist), Kíkọ àlàyé iṣẹ́ tí o ń ṣe, Títẹ̀lé oníbàárà lẹ́yìn iṣẹ́, Bíbéèrè àyẹ̀wò (review) lọ́nà tó tọ́",
  outcome: "lo AI láti ṣe gbogbo iṣẹ́ ìwé ti iṣẹ́ ìpèsè iṣẹ́ rẹ, láti ìpè àkọ́kọ́ títí oníbàárà yóò fi padà wá: àpẹẹrẹ ìdíyelé tó yé, ọ̀rọ̀ ìfìdímúlẹ̀ àti ìrántí ìpàdé, àkọsílẹ̀ àyẹ̀wò iṣẹ́, àkọsílẹ̀ iṣẹ́ pẹ̀lú iye owó, àti ọ̀rọ̀ àtẹ̀lé tí ó béèrè àyẹ̀wò òtítọ́ àti iṣẹ́ míì.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí wọ́n ń ta àkókò àti ọgbọ́n ọwọ́ wọn: àwọn tí ń tún ilé ṣe, onígbàjámọ̀ àti onírun, àwọn tí ń ṣe èékánná, àwọn tí ń tọ́jú ọgbà, plumber àti àwọn oníṣẹ́ ọwọ́, àwọn tí ń kó ẹrù, mẹkáníìkì tí ń rìn kiri, àwọn ayàwòrán ilé, àwọn tí ń tọ́jú ẹranko ọ̀sìn àti àwọn olùkọ́ àdáni. Ọ̀pọ̀ lára àwọn akẹ́kọ̀ọ́ wa ń ṣe iṣẹ́ ẹnìkan tàbí iṣẹ́ ẹbí.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ àti ìwé àti spreadsheet tó rọrùn láti dá àwọn oníbàárà tuntun lóhùn kíákíá, ṣe ìdíyelé tó yé, dé ibi iṣẹ́ ní ìmúrasílẹ̀, parí iṣẹ́ kọ̀ọ̀kan dáadáa bákan náà, kí o sì sọ àwọn oníbàárà tí inú wọn dùn di àwọn tí ń padà wá tí wọ́n sì ń mú ènìyàn wá.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àpò irinṣẹ́ iṣẹ́ fún iṣẹ́ ọwọ́ rẹ: àkọsílẹ̀ iṣẹ́ pẹ̀lú iye owó, àpẹẹrẹ ìdíyelé tí ó ní iṣẹ́ tí o máa ṣe, iye owó, ohun tí kò sí nínú rẹ̀ àti bí ìdíyelé náà ṣe pẹ́ tó, àpẹẹrẹ ọ̀rọ̀ ìfìdímúlẹ̀ àti ìrántí ìpàdé, àkọsílẹ̀ àyẹ̀wò fún iṣẹ́ tí o ń ṣe jù, àti ọ̀rọ̀ àtẹ̀lé tí ó dúpẹ́ lọ́wọ́ oníbàárà tí ó sì béèrè àyẹ̀wò òtítọ́ àti kí wọ́n mú ènìyàn wá.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ń ta àkókò àti ọgbọ́n ọwọ́ wọn: àwọn tí ń tún ilé ṣe, onígbàjámọ̀ àti onírun, àwọn tí ń ṣe èékánná, àwọn tí ń tọ́jú ọgbà, plumber àti àwọn oníṣẹ́ ọwọ́, àwọn tí ń kó ẹrù, mẹkáníìkì tí ń rìn kiri, àwọn ayàwòrán ilé, àwọn tí ń tọ́jú ẹranko ọ̀sìn àti àwọn olùkọ́ àdáni. Ọ̀pọ̀ ń ṣe iṣẹ́ ẹnìkan tàbí iṣẹ́ ẹbí.",
    startingPoint: "Wọ́n mọ iṣẹ́ ọwọ́ wọn dáadáa, wọ́n sì ń rí iṣẹ́ nípasẹ̀ ìpè, text àti ọ̀rọ̀ ẹnu. Ọ̀pọ̀ ń fi fóònù ṣe ohun gbogbo, wọn kò sì fi bẹ́ẹ̀ lo olùrànlọ́wọ́ AI, àpẹẹrẹ ìwé (template) tàbí irinṣẹ́ ìforúkọsílẹ̀ ìpàdé rí.",
    gap: "Ìdáhùn tó lọ́ra, ìdíyelé tí kò yé àti àwọn oníbàárà tí kò yọjú ń mú kí wọ́n pàdánù iṣẹ́ àti owó. Àwọn akẹ́kọ̀ọ́ nílò ìwé tó ti ṣetán tó sì yé (àkọsílẹ̀ iṣẹ́, ìdíyelé, ọ̀rọ̀ ìpàdé, àkọsílẹ̀ àyẹ̀wò àti àtẹ̀lé) kí wọ́n lè rí iṣẹ́ púpọ̀ sí i, yẹra fún ìjiyàn, kí wọ́n sì rí iṣẹ́ àtúnṣe.",
    constraints: [
      "Àkókò: àwọn olówó iṣẹ́ wà ní ibi iṣẹ́ láti àárọ̀ títí di alẹ́, nítorí náà ẹ̀kọ́ kọ̀ọ̀kan jẹ́ nǹkan bí ìṣẹ́jú 5",
      "Ẹ̀rọ: ọ̀pọ̀ ìgbà, fóònù nìkan ni wọ́n ní",
      "Òfin àdéhùn àti ìwé àṣẹ (license) yàtọ̀ láti ìpínlẹ̀ dé ìpínlẹ̀ àti láti iṣẹ́ dé iṣẹ́",
      "Ọ̀rọ̀ ìpolówó nílò àṣẹ àti ọ̀nà láti yọ orúkọ kúrò (unsubscribe); FTC ti fi òfin de àyẹ̀wò èké tàbí èyí tí a sanwó fún",
      "Ìpamọ́: má ṣe béèrè nọ́mbà káàdì tàbí ìwé ìdánimọ̀ (ID) lọ́wọ́ oníbàárà lórí text tàbí ọ̀rọ̀ ìkànnì àjọlò láéláé"
    ],
    prerequisites: "Kò sí. Àwọn tí wọ́n ṣẹ̀ṣẹ̀ ń lo olùrànlọ́wọ́ AI lè kọ́kọ́ ṣe ẹ̀kọ́ ìfihàn sí AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ní àwọn iṣẹ́ àti iye owó rẹ gidi", action: "kọ àkọsílẹ̀ iṣẹ́ tí ó sọ ohun tó wà nínú iṣẹ́ kọ̀ọ̀kan, ohun tí ó ń gba owó àfikún àti iye owó", standard: "kí ìwọ fúnra rẹ sì ti ṣàyẹ̀wò iye owó kọ̀ọ̀kan àti ohun tó wà nínú rẹ̀" },
    { id: "O2", condition: "Tí o bá ní iṣẹ́ gidi tàbí àpẹẹrẹ iṣẹ́ kan", action: "ṣe àpẹẹrẹ ìdíyelé kí o sì kún un pẹ̀lú iṣẹ́ tí o máa ṣe, iye owó, ohun tí kò sí nínú rẹ̀ àti bí ó ṣe pẹ́ tó", standard: "kí o sì fi iye owó náà lé ìnáwó rẹ pẹ̀lú èrè" },
    { id: "O3", condition: "Tí ìbéèrè tuntun bá dé lórí text, ímeèlì, ọ̀rọ̀ ìkànnì àjọlò tàbí ìpè tí o kò gbé", action: "kọ àpẹẹrẹ ìdáhùn àkọ́kọ́ tí ó dúpẹ́ lọ́wọ́ ẹni náà, béèrè àwọn ìbéèrè tí o nílò, tí ó sì fún un ní ìgbésẹ̀ tó kàn", standard: "láìbéèrè nọ́mbà káàdì tàbí ìwé ìdánimọ̀" },
    { id: "O4", condition: "Tí o bá ní òfin ìfagilé (cancellation policy) rẹ", action: "kọ ọ̀rọ̀ ìfìdímúlẹ̀ ìpàdé àti ìrántí ọjọ́ kan ṣáájú", standard: "pẹ̀lú ọjọ́, àkókò ìdé, àdírẹ́sì, iye owó àti òfin náà nínú rẹ̀" },
    { id: "O5", condition: "Fún iṣẹ́ tí o ń ṣe jù", action: "ṣe àkọsílẹ̀ àyẹ̀wò iṣẹ́ fún ṣáájú kí o tó dé, ní ibi iṣẹ́, àti ṣáájú kí o tó kúrò", standard: "pẹ̀lú àwọn ìgbésẹ̀ ààbò iṣẹ́ rẹ àti ìrìn àyẹ̀wò ìkẹyìn" },
    { id: "O6", condition: "Lẹ́yìn tí o bá parí iṣẹ́ kan", action: "kọ ọ̀rọ̀ àtẹ̀lé tí ó dúpẹ́ lọ́wọ́ oníbàárà tí ó sì béèrè àyẹ̀wò òtítọ́, kí wọ́n mú ènìyàn wá, àti ìpàdé tó kàn", standard: "ní ìbámu pẹ̀lú òfin àyẹ̀wò FTC" }
  ],
  chapters: [
    {
      name: "Orí 1: Gbígba iṣẹ́ náà",
      lessons: [
        {
          objectives: ["O1"],
          title: "Àkọsílẹ̀ iṣẹ́ tó yé",
          minutes: 5,
          goal: "Kọ àkọsílẹ̀ iṣẹ́ pẹ̀lú àlàyé àti iye owó tó yé.",
          text: [
            "Àwọn oníbàárà fẹ́ mọ ohun tí o ń ṣe àti nǹkan bí iye tí ó máa ná wọn kí wọ́n tó pè ọ́. Àkọsílẹ̀ iṣẹ́ (service menu) ń sọ iṣẹ́ kọ̀ọ̀kan, ohun tó wà nínú rẹ̀, bí ó ṣe pẹ́ tó àti iye owó tàbí ààlà iye owó.",
            "Fún AI ní àwọn iṣẹ́ àti iye owó rẹ gidi: \"Kọ àkọsílẹ̀ iṣẹ́ fún iṣẹ́ ìtúnlé mi: ìtúnlé lásán $120 fún ilé tí ó tó yàrá 2, ìtúnlé jinlẹ̀ $220, ìtúnlé ìkólọ láti $260. Sọ ohun tó wà nínú ọ̀kọ̀ọ̀kan. Ọ̀rọ̀ tó rọrùn.\" Ṣàyẹ̀wò gbogbo rẹ̀, pàápàá ohun tó wà nínú rẹ̀ àti ohun tí kò sí.",
            "Àkọsílẹ̀ tó yé ń dín ìjiyàn kù lẹ́yìn náà. Sọ kedere ohun tí ó ń gba owó àfikún (inú ààrò, irun ẹranko ọ̀sìn, àtẹ̀gùn, ìrìn àjò tó ju máìlì 15 lọ)."
          ],
          steps: ["Kọ àwọn iṣẹ́ rẹ àti iye owó gidi sílẹ̀.", "Kọ ohun tó wà nínú rẹ̀ àti ohun tí ó ń gba owó àfikún.", "Ní kí AI ṣètò rẹ̀ sí àkọsílẹ̀ tó yé.", "Ṣàyẹ̀wò iye owó kọ̀ọ̀kan àti ohun tó wà nínú rẹ̀."],
          words: [["Àkọsílẹ̀ iṣẹ́ (service menu)", "àkọsílẹ̀ àwọn iṣẹ́ tí o ń ṣe, pẹ̀lú ohun tó wà nínú wọn àti iye owó."], ["Àfikún (add-on)", "iṣẹ́ àfikún tí ó ń gba owó sí i."]],
          slides: [
            { title: "Ohun tí oníbàárà fẹ́ mọ̀ kọ́kọ́", bullets: ["Ohun tí o ń ṣe", "Ohun tó wà nínú rẹ̀", "Nǹkan bí iye tí ó máa ná"] },
            { title: "Fi AI ṣe é", bullets: ["Fún un ní àwọn iṣẹ́ àti iye owó rẹ gidi", "Béèrè ọ̀rọ̀ tó yé tó sì rọrùn"] },
            { title: "Dènà ìjiyàn", bullets: ["Sọ ohun tí ó ń gba owó àfikún", "Àpẹẹrẹ: ààrò, irun ẹranko ọ̀sìn, ìrìn àjò tó ju máìlì 15 lọ"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ iṣẹ́ rẹ tí ó ní ó kéré tán iṣẹ́ mẹ́ta, ohun tó wà nínú wọn àti àwọn àfikún. Lo AI láti ṣètò rẹ̀, lẹ́yìn náà ṣàyẹ̀wò iye owó kọ̀ọ̀kan.",
          youCanNow: "kọ àkọsílẹ̀ iṣẹ́ tó yé pẹ̀lú ohun tó wà nínú rẹ̀, àwọn àfikún àti iye owó.",
          quickCheck: [
            { objective: "O1", q: "Kí ni àkọsílẹ̀ iṣẹ́ máa ń sọ fún iṣẹ́ kọ̀ọ̀kan?", options: ["Ohun tó wà nínú rẹ̀, bí ó ṣe pẹ́ tó àti iye owó", "Orúkọ iṣẹ́ náà nìkan", "Àdírẹ́sì ilé rẹ àti nọ́mbà ìdánimọ̀ rẹ", "Iye owó àwọn alátakò rẹ"], answer: 0, why: "Àkọsílẹ̀ iṣẹ́ ń sọ iṣẹ́ kọ̀ọ̀kan, ohun tó wà nínú rẹ̀, bí ó ṣe pẹ́ tó àti iye owó tàbí ààlà iye owó." },
            { objective: "O1", q: "Àkọsílẹ̀ AI sọ pé ìtúnlé jinlẹ̀ ní inú ààrò nínú, ṣùgbọ́n o máa ń gba owó àfikún fún un. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ bẹ́ẹ̀ kí o sì jiyàn lẹ́yìn náà", "Yí i padà kí ó sọ pé inú ààrò ń gba owó àfikún", "Pa ìtúnlé jinlẹ̀ rẹ́", "Fi kún gbogbo iye owó"], answer: 1, why: "O máa ń ṣàyẹ̀wò ohun tó wà nínú iṣẹ́ kọ̀ọ̀kan, sísọ ohun tí ó ń gba owó àfikún kedere sì ń dènà ìjiyàn lẹ́yìn náà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìdíyelé àti ìṣirò iye owó",
          minutes: 6,
          goal: "Ṣe àpẹẹrẹ ìdíyelé tí ó yé, tí ó tọ́, tí ó sì ń dáàbò bò ọ́.",
          text: [
            "Ìdíyelé (quote) ń sọ gangan ohun tí o máa ṣe, iye tí ó máa jẹ́, àti lábẹ́ àwọn òfin wo. Èyí tó dára ní: oníbàárà àti àdírẹ́sì iṣẹ́, iṣẹ́ tí o máa ṣe (scope of work), ohun èlò, iye owó, ohun tí kò sí nínú rẹ̀, ètò ìsanwó, ìgbà tí iṣẹ́ máa bẹ̀rẹ̀ àti bí ìdíyelé náà ṣe pẹ́ tó.",
            "Ní kí AI ṣe àpẹẹrẹ kan: \"Ṣe àpẹẹrẹ ìdíyelé ojú-ìwé kan fún iṣẹ́ kíkun ilé kékeré, pẹ̀lú àlàfo fún [oníbàárà], [àdírẹ́sì], [iṣẹ́ tí a máa ṣe], [ohun èlò], [iye owó], [ohun tí kò sí nínú rẹ̀], [ètò ìsanwó], [ó wúlò títí di].\" Fi pamọ́ sínú Docs tàbí Word.",
            "AI lè ràn ọ́ lọ́wọ́ láti ṣàlàyé iṣẹ́ náà kedere, ṣùgbọ́n ìwọ ni o máa fi iye owó lé ìnáwó rẹ: ohun èlò, wákàtí rẹ, ìrìn àjò àti èrè. Fún iṣẹ́ ńlá, òfin àdéhùn àti ìwé àṣẹ yàtọ̀ láti ìpínlẹ̀ dé ìpínlẹ̀ àti láti iṣẹ́ dé iṣẹ́, nítorí náà ṣàyẹ̀wò lọ́dọ̀ àjọ ìwé àṣẹ agbaṣẹ́ṣe (contractor licensing board) ìpínlẹ̀ rẹ tàbí ọ̀jọ̀gbọ́n kan."
          ],
          steps: ["Ní kí AI ṣe àpẹẹrẹ ìdíyelé pẹ̀lú àlàfo.", "Kún un fún iṣẹ́ gidi tàbí àpẹẹrẹ iṣẹ́ kan.", "Fi iye owó lé ìnáwó rẹ pẹ̀lú èrè.", "Kọ ohun tí kò sí nínú rẹ̀ àti bí ìdíyelé náà ṣe pẹ́ tó.", "Ṣàyẹ̀wò òfin ìwé àṣẹ àti àdéhùn fún iṣẹ́ ńlá."],
          words: [["Ìdíyelé (quote)", "iye owó tí a kọ sílẹ̀ fún iṣẹ́ kan pàtó."], ["Iṣẹ́ tí a máa ṣe (scope of work)", "gangan ohun tí o máa ṣe àti èyí tí o kò ní ṣe nínú iṣẹ́ kan."], ["Ètò ìsanwó (payment terms)", "ìgbà àti bí oníbàárà ṣe máa sanwó, bí owó ìdógò ní ìbẹ̀rẹ̀ àti ìyókù nígbà tí iṣẹ́ bá parí."]],
          slides: [
            { title: "Àwọn apá ìdíyelé tó dára", bullets: ["Oníbàárà, àdírẹ́sì àti iṣẹ́ tí a máa ṣe", "Ohun èlò àti iye owó", "Ohun tí kò sí nínú rẹ̀, ètò ìsanwó, ó wúlò títí di"] },
            { title: "AI ń ṣe àpẹẹrẹ náà", bullets: ["Àlàfo bí [iṣẹ́ tí a máa ṣe] àti [iye owó]", "Fi pamọ́ sínú Docs tàbí Word"] },
            { title: "Ìwọ ni o ń dá iye owó", bullets: ["Ohun èlò + wákàtí + ìrìn àjò + èrè", "Iṣẹ́ ńlá: ṣàyẹ̀wò òfin ìwé àṣẹ àti àdéhùn ìpínlẹ̀"] }
          ],
          tryIt: "Fi AI ṣe àpẹẹrẹ ìdíyelé rẹ, lẹ́yìn náà kún un fún iṣẹ́ gidi tàbí àpẹẹrẹ iṣẹ́ kan. Ṣe ìṣirò iye owó sórí ìwé láti inú ìnáwó rẹ.",
          youCanNow: "kọ ìdíyelé tó yé tí ó sọ iṣẹ́ tí a máa ṣe, iye owó àti àwọn òfin.",
          quickCheck: [
            { objective: "O2", q: "Kí ni \"ètò ìsanwó\" lórí ìdíyelé ń sọ fún oníbàárà?", options: ["Àwọ̀ kun tí o máa lò", "Ẹni tí ó ń ràn ọ́ lọ́wọ́", "Bí wọ́n ṣe máa sanwó àti ìgbà wo", "Bí iṣẹ́ náà ṣe máa pẹ́ tó"], answer: 2, why: "Ètò ìsanwó ń sọ bí oníbàárà ṣe máa sanwó àti ìgbà wo." },
            { objective: "O2", q: "AI dábàá iye owó fún ìdíyelé kíkun ilé rẹ. Kí ni o máa ṣe?", options: ["Lò ó nítorí pé AI mọ ọjà", "Ṣe é ní ìlọ́po méjì kí ó lè dájú", "Fi àlàfo iye owó sílẹ̀ ní òfo", "Dá iye owó fúnra rẹ láti inú ohun èlò, wákàtí, ìrìn àjò àti èrè"], answer: 3, why: "AI lè ràn ọ́ lọ́wọ́ láti ṣàlàyé iṣẹ́ náà, ṣùgbọ́n ìwọ ni o ń dá iye owó láti inú ìnáwó rẹ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dídá àwọn oníbàárà tuntun lóhùn kíákíá",
          minutes: 4,
          goal: "Dá ìbéèrè tuntun lóhùn kíákíá pẹ̀lú àpẹẹrẹ tí ó béèrè ìbéèrè tó tọ́.",
          text: [
            "Iṣẹ́ tí ó kọ́kọ́ dáhùn ló sábà máa ń gba iṣẹ́ náà. Ní àpẹẹrẹ tó ti ṣetán fún ọ̀nà kọ̀ọ̀kan tí àwọn ènìyàn fi ń kàn sí ọ: text, ímeèlì, ọ̀rọ̀ ìkànnì àjọlò àti ìpè tí o kò gbé.",
            "Ìdáhùn àkọ́kọ́ tó dára ń dúpẹ́ lọ́wọ́ wọn, ó ń béèrè ìbéèrè méjì tàbí mẹ́ta tí o nílò láti díyelé (\"Yàrá mélòó ni? Ṣé ẹranko ọ̀sìn wà? Ọjọ́ wo ló dára?\"), ó sì ń fún wọn ní ìgbésẹ̀ tó kàn. Ní kí AI kọ ọ̀kan fún ọ̀nà kọ̀ọ̀kan, bí ìwọ fúnra rẹ ṣe ń sọ̀rọ̀.",
            "Pa àwọn àpẹẹrẹ náà mọ́ sórí fóònù rẹ kí o lè dáhùn láàárín iṣẹ́. Má ṣe ní kí àwọn ènìyàn fi nọ́mbà káàdì tàbí ìwé ìdánimọ̀ ránṣẹ́ lórí text tàbí ọ̀rọ̀ ìkànnì àjọlò."
          ],
          steps: ["Kọ àwọn ìbéèrè tí o nílò láti díyelé sílẹ̀.", "Ní kí AI kọ àpẹẹrẹ ìdáhùn àkọ́kọ́ fún ọ̀nà kọ̀ọ̀kan.", "Fi wọ́n pamọ́ sórí fóònù rẹ.", "Dáhùn láàárín wákàtí kan nígbà tí o bá lè ṣe é."],
          words: [["Oníbàárà tuntun (lead)", "ẹni tí ó béèrè nípa iṣẹ́ rẹ ṣùgbọ́n tí kò tíì gba ìpàdé."], ["Ọ̀nà (channel)", "ọ̀nà tí àwọn oníbàárà fi ń kàn sí ọ, bí text, ímeèlì tàbí ọ̀rọ̀ ìkànnì àjọlò."]],
          slides: [
            { title: "Ìyára ń gba iṣẹ́", bullets: ["Ìdáhùn àkọ́kọ́ ló sábà ń gba iṣẹ́", "Àpẹẹrẹ kan fún ọ̀nà kọ̀ọ̀kan"] },
            { title: "Ìdáhùn àkọ́kọ́ tó dára", bullets: ["Dúpẹ́ lọ́wọ́ wọn", "Béèrè ìbéèrè 2-3 tí o nílò", "Fún wọn ní ìgbésẹ̀ tó kàn"] },
            { title: "Jẹ́ kí ó wà lárọ̀ọ́wọ́tó, kí ó sì láàbò", bullets: ["Àpẹẹrẹ tí a fi pamọ́ sórí fóònù rẹ", "Má ṣe béèrè nọ́mbà káàdì lórí text láéláé"] }
          ],
          tryIt: "Kọ ìbéèrè mẹ́ta tí o gbọ́dọ̀ béèrè. Ní kí AI kọ àpẹẹrẹ ìdáhùn àkọ́kọ́ fún text àti ímeèlì bí ìwọ ṣe ń sọ̀rọ̀, kí o sì fi wọ́n pamọ́ sórí fóònù rẹ.",
          youCanNow: "dá àwọn oníbàárà tuntun lóhùn kíákíá pẹ̀lú àpẹẹrẹ tí ó ń kó ohun tí o nílò láti díyelé jọ.",
          quickCheck: [
            { objective: "O3", q: "Níbo ni o yẹ kí o pa àwọn àpẹẹrẹ ìdáhùn àkọ́kọ́ rẹ mọ́ sí?", options: ["Sórí fóònù rẹ kí o lè dáhùn láàárín iṣẹ́", "Sórí kọ̀mpútà ilé nìkan", "Sórí ìwé ní ọ́fíìsì", "Kò sí ibì kankan; kọ ọ̀kọ̀ọ̀kan ní tuntun"], answer: 0, why: "Pípa àwọn àpẹẹrẹ mọ́ sórí fóònù rẹ ń jẹ́ kí o dáhùn kíákíá láàárín iṣẹ́." },
            { objective: "O3", q: "Oníbàárà tuntun kan kọ text pé, \"Èló ni láti gé koríko?\" Kí ni ìdáhùn àkọ́kọ́ tó dára?", options: ["\"Fi nọ́mbà káàdì rẹ ránṣẹ́ kí o lè gba ìpàdé.\"", "Dúpẹ́ lọ́wọ́ wọn, béèrè bí ọgbà náà ṣe tóbi tó àti ọjọ́ tí ó dára, kí o sì fún wọn ní ìgbésẹ̀ tó kàn", "Dúró di òpin ọ̀sẹ̀ kí o tó dáhùn", "Fi gbogbo àkọsílẹ̀ iye owó rẹ ránṣẹ́ láìkí wọn"], answer: 1, why: "Ìdáhùn àkọ́kọ́ tó dára ń dúpẹ́ lọ́wọ́ wọn, ó ń béèrè ìbéèrè tí o nílò, ó sì ń fún wọn ní ìgbésẹ̀ tó kàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Gbígba iṣẹ́ náà",
        questions: [
          { objective: "O1", q: "Kí ló dé tí o fi máa kọ ohun tí ó ń gba owó àfikún sínú àkọsílẹ̀ iṣẹ́ rẹ?", options: ["Láti da oníbàárà rú", "Láti dènà ìjiyàn lẹ́yìn náà", "Láti gba owó ìkọ̀kọ̀", "Kò wúlò"], answer: 1, why: "Àfikún tó yé ń jẹ́ kí oníbàárà mọ ohun tí ó máa retí." },
          { objective: "O2", q: "Èwo ló yẹ kí ó wà nínú ìdíyelé?", options: ["Ẹ̀dínwó èké", "Ọ̀rọ̀ aṣínà rẹ", "Nọ́mbà káàdì oníbàárà", "Iṣẹ́ tí a máa ṣe àti bí ìdíyelé náà ṣe pẹ́ tó"], answer: 3, why: "Iṣẹ́ tí a máa ṣe àti ìgbà tí ó wúlò títí di ń dáàbò bo ẹ̀gbẹ́ méjèèjì." },
          { objective: "O2", q: "Ta ló ń dá iye owó lórí ìdíyelé?", options: ["Ìwọ, láti inú ìnáwó àti èrè rẹ", "AI", "Oníbàárà nìkan", "Alátakò kan"], answer: 0, why: "Ìwọ nìkan ló mọ ìnáwó rẹ gidi." },
          { objective: "O2", q: "Níbo ni o ti máa ṣàyẹ̀wò òfin ìwé àṣẹ fún iṣẹ́ ńlá?", options: ["Lọ́dọ̀ aládùúgbò", "Nínú ìjíròrò AI", "Lọ́dọ̀ àjọ ìwé àṣẹ agbaṣẹ́ṣe ìpínlẹ̀ rẹ tàbí ọ̀jọ̀gbọ́n kan", "Nínú ìfiránṣẹ́ ìkànnì àjọlò"], answer: 2, why: "Ìwé àṣẹ dá lórí ìpínlẹ̀ rẹ àti iṣẹ́ ọwọ́ rẹ." },
          { objective: "O3", q: "Kí ló yẹ kí ìdáhùn àkọ́kọ́ sí oníbàárà tuntun ní?", options: ["Ìbéèrè fún nọ́mbà káàdì wọn", "Iye owó rẹ nìkan", "Ọpẹ́, àwọn ìbéèrè tí o nílò àti ìgbésẹ̀ tó kàn", "Kò sí nǹkan kan; dúró fún ọ̀sẹ̀ kan"], answer: 2, why: "Ìyẹn ń mú oníbàárà tuntun súnmọ́ gbígba ìpàdé." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe iṣẹ́ náà àti dídi oníbàárà mú",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ìfìdímúlẹ̀ ìpàdé àti ìrántí",
          minutes: 4,
          goal: "Ṣètò ọ̀rọ̀ ìfìdímúlẹ̀ àti ìrántí tí ó ń dín àwọn tí kò yọjú kù.",
          text: [
            "Oníbàárà tí kò yọjú tàbí tí o kò rí ọ̀nà wọlé sí ilé rẹ̀ ń mú kí o pàdánù owó ọjọ́ kan. Ìfìdímúlẹ̀ àti ìrántí tó yé ń ṣèrànwọ́. Ìfìdímúlẹ̀ ń sọ ọjọ́, àkókò ìdé, àdírẹ́sì, iye owó, ohun tí oníbàárà gbọ́dọ̀ ṣe láti múra sílẹ̀ àti òfin ìfagilé rẹ.",
            "Béèrè lọ́wọ́ AI: \"Kọ ìfìdímúlẹ̀ ìpàdé àti ìrántí ọjọ́ kan ṣáájú fún iṣẹ́ ìtọ́jú ajá tí ń rìn kiri mi. Àlàfo: [orúkọ], [ọjọ́], [àkókò ìdé], [àdírẹ́sì], [iye owó]. Fi òfin ìfagilé wákàtí 24 wa sínú rẹ̀.\"",
            "Ọ̀pọ̀ irinṣẹ́ ìforúkọsílẹ̀ ìpàdé lè fi ìrántí ránṣẹ́ fúnra wọn; ṣàyẹ̀wò ètò (settings) irinṣẹ́ rẹ. Tí o bá ń fi text tàbí ímeèlì ìpolówó ránṣẹ́ (kì í ṣe ìrántí nìkan), kọ́kọ́ gba àṣẹ, kí o sì tẹ̀lé òfin ímeèlì, pẹ̀lú ọ̀nà láti yọ orúkọ kúrò (unsubscribe)."
          ],
          steps: ["Kọ òfin ìfagilé rẹ.", "Ní kí AI kọ àpẹẹrẹ ìfìdímúlẹ̀ àti ìrántí.", "Ṣètò ìrántí aládàáṣe nínú irinṣẹ́ ìpàdé rẹ tí ó bá ní i.", "Fi ìpolówó ránṣẹ́ pẹ̀lú àṣẹ àti ọ̀nà unsubscribe nìkan."],
          words: [["Àìyọjú (no-show)", "oníbàárà tí kò wá sí ìpàdé tí ó ti gbà."], ["Òfin ìfagilé (cancellation policy)", "àwọn òfin rẹ fún fífagilé ìpàdé, bí sísọ fún ọ ní wákàtí 24 ṣáájú."], ["Àkókò ìdé (time window)", "ààlà àkókò tí o máa dé, bí agogo 9 sí 11 àárọ̀."]],
          slides: [
            { title: "Dín àìyọjú kù", bullets: ["Ìfìdímúlẹ̀ ní kété lẹ́yìn ìforúkọsílẹ̀", "Ìrántí ọjọ́ kan ṣáájú"] },
            { title: "Ìfìdímúlẹ̀ tó dára", bullets: ["Ọjọ́, àkókò ìdé, àdírẹ́sì, iye owó", "Bí wọ́n ṣe máa múra sílẹ̀", "Òfin ìfagilé"] },
            { title: "Jẹ́ kí ó ṣe ara rẹ̀, kí o sì tẹ̀lé òfin", bullets: ["Irinṣẹ́ ìpàdé lè fi ìrántí ránṣẹ́", "Ìpolówó nílò àṣẹ àti ọ̀nà unsubscribe"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Kọ òfin ìfagilé rẹ ní ìlà méjì. Ní kí AI kọ àpẹẹrẹ ìfìdímúlẹ̀ àti ìrántí ọjọ́ kan ṣáájú pẹ̀lú àlàfo, kí o sì fi wọ́n pamọ́.",
          youCanNow: "fi ìfìdímúlẹ̀ ìpàdé àti ìrántí ránṣẹ́ tí ó ń dín àìyọjú kù.",
          quickCheck: [
            { objective: "O4", q: "Ìṣòro wo ni ìfìdímúlẹ̀ àti ìrántí ń ṣèrànwọ́ láti dènà?", options: ["Ojú ọjọ́ tí kò dára", "Iye owó ohun èlò tí ó ga sí i", "Àìyọjú àti àìrí ọ̀nà wọlé", "Àyẹ̀wò èké"], answer: 2, why: "Ẹ̀kọ́ náà sọ pé àìyọjú àti àìrí ọ̀nà wọlé ń jẹ owó ọjọ́ kan, ìrántí sì ń ṣèrànwọ́ láti dín wọn kù." },
            { objective: "O4", q: "O fẹ́ fi text ẹ̀dínwó ọdún ránṣẹ́ sí gbogbo àwọn oníbàárà àtijọ́. Kí ni o nílò kọ́kọ́?", options: ["Kò sí nǹkan kan; ìrántí àti ìpolówó jẹ́ ọ̀kan náà", "Nọ́mbà fóònù tuntun", "Ìfọwọ́sí AI", "Àṣẹ wọn, àti ọ̀nà unsubscribe"], answer: 3, why: "Ọ̀rọ̀ ìpolówó, yàtọ̀ sí ìrántí, nílò àṣẹ àti ọ̀nà unsubscribe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Àkọsílẹ̀ àyẹ̀wò iṣẹ́ fún dídára kan náà nígbà gbogbo",
          minutes: 5,
          goal: "Sọ ìmọ̀ rẹ di àkọsílẹ̀ àyẹ̀wò iṣẹ́ tí ìwọ àti àwọn olùrànlọ́wọ́ rẹ ń tẹ̀lé.",
          text: [
            "Àkọsílẹ̀ àyẹ̀wò (checklist) ń mú kí iṣẹ́ kọ̀ọ̀kan dára bí èyí tí o ṣe jù lọ, kódà ní ọjọ́ tí ó rẹ̀ ọ́ tàbí nígbà tí olùrànlọ́wọ́ bá ṣe é. Ó tún ń ràn ọ́ lọ́wọ́ láti kọ́ àwọn òṣìṣẹ́ tuntun.",
            "Sọ tàbí tẹ bí o ṣe ń ṣe iṣẹ́ tí o ń ṣe jù, láti ìbẹ̀rẹ̀ dé òpin, kí o sì béèrè lọ́wọ́ AI: \"Sọ àkọsílẹ̀ yìí di àkọsílẹ̀ àyẹ̀wò iṣẹ́ fún ìtọ́jú ọgbà ilé lásán: ṣáájú kí o tó dé, ní ibi iṣẹ́, ṣáájú kí o tó kúrò. Ìgbésẹ̀ kúkúrú.\" Fi àwọn ìgbésẹ̀ ààbò tí iṣẹ́ rẹ nílò kún un, kí o sì ṣàyẹ̀wò wọn pẹ̀lú ìtọ́sọ́nà ààbò ìjọba tàbí ẹ̀kọ́ iṣẹ́ ọwọ́ rẹ.",
            "Fi ìrìn àyẹ̀wò ìkẹyìn pẹ̀lú oníbàárà kún un, àti àwòrán ṣáájú àti lẹ́yìn (pẹ̀lú àṣẹ wọn) láti fi iṣẹ́ náà hàn."
          ],
          steps: ["Ṣàlàyé iṣẹ́ tí o ń ṣe jù láti ìbẹ̀rẹ̀ dé òpin.", "Ní kí AI sọ ọ́ di àkọsílẹ̀ àyẹ̀wò apá mẹ́ta.", "Fi àwọn ìgbésẹ̀ ààbò iṣẹ́ rẹ kún un.", "Fi ìrìn àyẹ̀wò àti àwòrán pẹ̀lú àṣẹ kún un.", "Dán an wò lórí iṣẹ́ tó kàn kí o sì tún un ṣe."],
          words: [["Àkọsílẹ̀ àyẹ̀wò (checklist)", "àkọsílẹ̀ àwọn ìgbésẹ̀ tí o máa fi àmì sí kí ohunkóhun má bàa kù."], ["Ìrìn àyẹ̀wò (walk-through)", "wíwo iṣẹ́ tí o ti parí pọ̀ pẹ̀lú oníbàárà."]],
          slides: [
            { title: "Kí ló dé tí a fi nílò àkọsílẹ̀ àyẹ̀wò", bullets: ["Dídára kan náà nígbà gbogbo", "Ó ń ràn ọ́ lọ́wọ́ láti kọ́ àwọn olùrànlọ́wọ́"] },
            { title: "Fi AI ṣe é", bullets: ["Ṣàlàyé iṣẹ́ rẹ láti ìbẹ̀rẹ̀ dé òpin", "Ṣáájú kí o tó dé, ní ibi iṣẹ́, ṣáájú kí o tó kúrò"] },
            { title: "Parí rẹ̀ dáadáa", bullets: ["Àwọn ìgbésẹ̀ ààbò iṣẹ́ rẹ", "Ìrìn àyẹ̀wò pẹ̀lú oníbàárà", "Àwòrán ṣáájú àti lẹ́yìn pẹ̀lú àṣẹ"] }
          ],
          tryIt: "Ṣàlàyé iṣẹ́ tí o ń ṣe jù ní ìlà díẹ̀. Ní kí AI sọ ọ́ di àkọsílẹ̀ àyẹ̀wò apá mẹ́ta, fi àwọn ìgbésẹ̀ ààbò kún un, kí o sì lò ó lórí iṣẹ́ rẹ tó kàn.",
          youCanNow: "ṣe àkọsílẹ̀ àyẹ̀wò iṣẹ́ kí o sì lò ó láti jẹ́ kí dídára iṣẹ́ rẹ jẹ́ bákan náà nígbà gbogbo.",
          quickCheck: [
            { objective: "O5", q: "Kí ni àwọn apá mẹ́ta àkọsílẹ̀ àyẹ̀wò iṣẹ́ nínú ẹ̀kọ́ yìí?", options: ["Ṣáájú kí o tó dé, ní ibi iṣẹ́, ṣáájú kí o tó kúrò", "Àárọ̀, ọ̀sán, alẹ́", "Iye owó, owó orí, owó ìmoore", "Ìpè, text, ímeèlì"], answer: 0, why: "AI ń sọ àkọsílẹ̀ rẹ di àkọsílẹ̀ àyẹ̀wò apá mẹ́ta: ṣáájú kí o tó dé, ní ibi iṣẹ́ àti ṣáájú kí o tó kúrò." },
            { objective: "O5", q: "O fẹ́ fi ìgbésẹ̀ ààbò fún lílo àkàbà kún un. Níbo ni o ti máa ṣàyẹ̀wò rẹ̀?", options: ["Béèrè lọ́wọ́ AI kí o sì gba ìdáhùn rẹ̀ gbọ́", "Ìtọ́sọ́nà ààbò ìjọba tàbí ẹ̀kọ́ iṣẹ́ ọwọ́ rẹ", "Àyẹ̀wò oníbàárà kan", "Fo àwọn ìgbésẹ̀ ààbò kí o lè fi àkókò pamọ́"], answer: 1, why: "A máa ń ṣàyẹ̀wò àwọn ìgbésẹ̀ ààbò pẹ̀lú ìtọ́sọ́nà ìjọba tàbí ẹ̀kọ́ iṣẹ́ ọwọ́ rẹ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Àtẹ̀lé, àyẹ̀wò òtítọ́ àti iṣẹ́ àtúnṣe",
          minutes: 5,
          goal: "Tẹ̀lé oníbàárà lẹ́yìn iṣẹ́ láti rí àyẹ̀wò òtítọ́, àwọn tí wọ́n mú wá àti ìpàdé àtúnṣe.",
          text: [
            "Iṣẹ́ kò tíì parí nígbà tí o bá kúrò. Ọ̀rọ̀ ọpẹ́ ní ọjọ́ kan náà, pẹ̀lú link láti kọ àyẹ̀wò (review) àti ìfilọ̀ láti gba ìpàdé tó kàn, ń mú iṣẹ́ àtúnṣe wá. Ní kí AI kọ ọ́ bí ìwọ ṣe ń sọ̀rọ̀, pẹ̀lú àlàfo [orúkọ] àti [iṣẹ́].",
            "Béèrè lọ́wọ́ gbogbo oníbàárà lọ́nà kan náà, bóyá inú wọn dùn tàbí kò dùn, fún àyẹ̀wò òtítọ́. Má ṣe fúnni ní ẹ̀bùn fún àyẹ̀wò rere nìkan, má sì kọ àyẹ̀wò èké láéláé; òfin àyẹ̀wò FTC (àjọ ìjọba US tí ń dáàbò bo oníbàárà) fi òfin de méjèèjì.",
            "Ṣètò ìrántí fún iṣẹ́ tí ó ń padà wá: gọ́tà ní ìgbà ìwọ́wé kọ̀ọ̀kan, irun gígé ní ọ̀sẹ̀ mẹ́ta mẹ́ta, àyẹ̀wò ẹ̀rọ ìgbóná (furnace) lọ́dọọdún. Ọ̀rọ̀ kúkúrú \"Ṣé àkókò ti tó fún ... rẹ tó kàn?\" ń jẹ́ kí kàlẹ́ńdà rẹ kún."
          ],
          steps: ["Fi ọ̀rọ̀ ọpẹ́ ránṣẹ́ ní ọjọ́ kan náà.", "Fi link àyẹ̀wò sínú rẹ̀ kí o sì béèrè àyẹ̀wò òtítọ́.", "Fi ìpàdé tó kàn lọ̀ wọ́n.", "Ṣètò ìrántí fún iṣẹ́ tí ó ń padà wá."],
          words: [["Mímú ènìyàn wá (referral)", "nígbà tí oníbàárà bá rán ọ̀rẹ́ rẹ̀ sí ọ."], ["Iṣẹ́ àtúnṣe (repeat service)", "iṣẹ́ tí àwọn oníbàárà nílò léraléra ní àkókò kan pàtó."]],
          slides: [
            { title: "Ọpẹ́ ní ọjọ́ kan náà", bullets: ["Dúpẹ́ lọ́wọ́ wọn pẹ̀lú orúkọ wọn", "Link àyẹ̀wò", "Fi ìpàdé tó kàn lọ̀ wọ́n"] },
            { title: "Àyẹ̀wò òtítọ́ nìkan", bullets: ["Béèrè lọ́wọ́ gbogbo oníbàárà lọ́nà kan náà", "Kò sí ẹ̀bùn fún àyẹ̀wò rere nìkan", "Kò sí àyẹ̀wò èké láéláé (òfin FTC)"] },
            { title: "Jẹ́ kí kàlẹ́ńdà rẹ kún", bullets: ["Gọ́tà ní ìgbà ìwọ́wé kọ̀ọ̀kan; irun ní ọ̀sẹ̀ 3 mẹ́ta", "Ìrántí \"Ṣé àkókò ti tó fún ... rẹ tó kàn?\""] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Iṣẹ́ ìkẹyìn: kó àpò irinṣẹ́ iṣẹ́ rẹ jọ: àkọsílẹ̀ iṣẹ́, àpẹẹrẹ ìdíyelé, àpẹẹrẹ ìdáhùn àkọ́kọ́, ìfìdímúlẹ̀ àti ìrántí, àkọsílẹ̀ àyẹ̀wò iṣẹ́, àti ọ̀rọ̀ ọpẹ́ àtẹ̀lé pẹ̀lú ìbéèrè àyẹ̀wò àti ìfilọ̀ ìpàdé tó kàn.",
          youCanNow: "fi ìrànlọ́wọ́ AI ṣe iṣẹ́ ìwé ti iṣẹ́ ìpèsè iṣẹ́ rẹ, láti ìpè àkọ́kọ́ títí oníbàárà yóò fi padà wá.",
          quickCheck: [
            { objective: "O6", q: "Ìgbà wo ni o yẹ kí o fi ọ̀rọ̀ ọpẹ́ ránṣẹ́ lẹ́yìn iṣẹ́?", options: ["Oṣù tó ń bọ̀", "Tí oníbàárà bá ṣàròyé nìkan", "Ní ọjọ́ kan náà", "Láéláé"], answer: 2, why: "Ọ̀rọ̀ ọpẹ́ ní ọjọ́ kan náà, pẹ̀lú link àyẹ̀wò àti ìfilọ̀ ìpàdé tó kàn, ń mú iṣẹ́ àtúnṣe wá." },
            { objective: "O6", q: "Inú oníbàárà kan kò dùn sí apá kan iṣẹ́ náà. Báwo ni o ṣe máa béèrè àyẹ̀wò?", options: ["Má ṣe béèrè lọ́wọ́ wọn rárá", "Fún wọn ní ẹ̀dínwó tí wọ́n bá fún ọ ní ìràwọ̀ 5 nìkan", "Kọ àyẹ̀wò rere fún wọn", "Béèrè lọ́wọ́ wọn lọ́nà kan náà bí gbogbo ènìyàn fún àyẹ̀wò òtítọ́"], answer: 3, why: "O máa ń béèrè lọ́wọ́ gbogbo oníbàárà lọ́nà kan náà fún àyẹ̀wò òtítọ́; ẹ̀bùn fún àyẹ̀wò rere nìkan jẹ́ èèwọ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe iṣẹ́ náà àti dídi oníbàárà mú",
        questions: [
          { objective: "O4", q: "Èwo ló yẹ kí ó wà nínú ìfìdímúlẹ̀ ìpàdé?", options: ["Ọjọ́, àkókò ìdé, àdírẹ́sì, iye owó àti òfin ìfagilé", "Nọ́mbà káàdì oníbàárà", "Ọ̀rọ̀ aṣínà rẹ", "Kò sí nǹkan kan"], answer: 0, why: "Àwọn àlàyé yẹn ń dènà ìdàrúdàpọ̀ àti àìyọjú." },
          { objective: "O4", q: "Kí o tó fi ímeèlì ìpolówó ránṣẹ́, o nílò:", options: ["Orúkọ olùfiránṣẹ́ èké", "Kò sí nǹkan kan", "Ìwé ìdánimọ̀ oníbàárà", "Àṣẹ àti ọ̀nà unsubscribe"], answer: 3, why: "CAN-SPAM ń béèrè ọ̀nà láti jáde àti òtítọ́." },
          { objective: "O5", q: "Kí ló dé tí o fi máa lo àkọsílẹ̀ àyẹ̀wò iṣẹ́?", options: ["Láti fà sẹ́yìn", "Dídára kan náà nígbà gbogbo àti ẹ̀kọ́ tí ó rọrùn", "Láti fo ààbò", "Láti gba owó púpọ̀ sí i"], answer: 1, why: "Àkọsílẹ̀ àyẹ̀wò ń jẹ́ kí dídára iṣẹ́ wà bákan náà." },
          { objective: "O5", q: "Kí o tó ya àwòrán ṣáájú àti lẹ́yìn, o yẹ kí o:", options: ["Gba àṣẹ oníbàárà", "Yà wọ́n ní ìkọ̀kọ̀", "Fi àdírẹ́sì náà síta", "Fò ó"], answer: 0, why: "Bọ̀wọ̀ fún ìpamọ́ oníbàárà." },
          { objective: "O6", q: "Ìbéèrè àyẹ̀wò wo ló tẹ̀lé òfin FTC?", options: ["Kíkọ àyẹ̀wò fún àkáǹtì àwọn ọ̀rẹ́", "Ẹ̀dínwó 10% fún àyẹ̀wò ìràwọ̀ 5 nìkan", "Bíbéèrè lọ́wọ́ gbogbo oníbàárà fún àyẹ̀wò òtítọ́", "Rírà àyẹ̀wò"], answer: 2, why: "Ìbéèrè òtítọ́ tí kò ní àdéhùn kankan dára." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Iṣẹ́ Ìpèsè Iṣẹ́ (Service Business)",
    questions: [
      { objective: "O1", q: "Àkọsílẹ̀ iṣẹ́ ń sọ:", options: ["Àdírẹ́sì àwọn oníbàárà", "Àwọn iṣẹ́, ohun tó wà nínú wọn àti iye owó", "Ọ̀rọ̀ aṣínà", "Nọ́mbà Social Security àwọn òṣìṣẹ́"], answer: 1, why: "Ó ń fi ohun tí o ń ṣe àti iye owó rẹ̀ hàn." },
      { objective: "O1", q: "Àfikún (add-on) ni:", options: ["Àyẹ̀wò kan", "Ẹ̀bùn ọ̀fẹ́", "Owó orí", "Iṣẹ́ àfikún tí ó ń gba owó sí i"], answer: 3, why: "Àfikún jẹ́ iṣẹ́ àfikún." },
      { objective: "O1", q: "AI ṣètò àkọsílẹ̀ iṣẹ́ rẹ. O gbọ́dọ̀ ṣàyẹ̀wò:", options: ["Àwọn àwọ̀", "Irú ìkọ̀wé nìkan", "Kò sí nǹkan kan", "Iye owó kọ̀ọ̀kan àti ohun tó wà nínú rẹ̀"], answer: 3, why: "AI lè yí àwọn àlàyé padà." },
      { objective: "O2", q: "Iṣẹ́ tí a máa ṣe (scope of work) túmọ̀ sí:", options: ["Àwọn irinṣẹ́ rẹ", "Gangan ohun tí o máa ṣe àti èyí tí o kò ní ṣe", "Ọkọ̀ akẹ́rù rẹ", "Wákàtí iṣẹ́ rẹ"], answer: 1, why: "Iṣẹ́ tí a máa ṣe ń sọ bí iṣẹ́ náà ṣe rí." },
      { objective: "O2", q: "Ìdíyelé yẹ kí ó sọ bí ó ṣe pẹ́ tó tí ó:", options: ["Ti tẹ̀ jáde", "Ti sọ ọ́ jáde", "Máa wúlò", "Ti tẹ̀ ẹ́"], answer: 2, why: "Iye owó ń yí padà; ìdíyelé gbọ́dọ̀ ní ọjọ́ ìparí." },
      { objective: "O2", q: "Iye owó láti inú ìnáwó rẹ ní:", options: ["Ohun èlò, wákàtí, ìrìn àjò àti èrè", "Ohun èlò nìkan", "Ìrìn àjò nìkan", "Ohun tí AI dábàá"], answer: 0, why: "Gbogbo ìnáwó pẹ̀lú èrè." },
      { objective: "O3", q: "Oníbàárà tuntun (lead) ni:", options: ["Irinṣẹ́ kan", "Irin kan", "Ẹni tí ó béèrè ṣùgbọ́n tí kò tíì gba ìpàdé", "Ìwé owó kan"], answer: 2, why: "Àwọn oníbàárà tuntun lè di oníbàárà." },
      { objective: "O3", q: "Kí ló dé tí o fi máa dá àwọn oníbàárà tuntun lóhùn kíákíá?", options: ["Ìdáhùn àkọ́kọ́ ló sábà ń gba iṣẹ́", "Òfin ló béèrè rẹ̀", "Láti dà wọ́n láàmú", "Kò ṣe pàtàkì"], answer: 0, why: "Ìyára ń gba iṣẹ́." },
      { objective: "O3", q: "Èwo ni o kò gbọ́dọ̀ béèrè lórí text láéláé?", options: ["Iye yàrá", "Nọ́mbà káàdì", "Ọjọ́ tí ó dára", "Ẹranko ọ̀sìn nínú ilé"], answer: 1, why: "Nọ́mbà káàdì jẹ́ àṣírí." },
      { objective: "O4", q: "Àkókò ìdé (time window) ni:", options: ["Ọjọ́ ìsinmi", "Gíláàsì fèrèsé", "Ọjọ́ ìkẹyìn láti sanwó", "Ààlà àkókò tí o máa dé"], answer: 3, why: "Ó ń jẹ́ kí oníbàárà mọ ìgbà tí o máa dé." },
      { objective: "O4", q: "Ìrántí ọjọ́ kan ṣáájú ń ṣèrànwọ́ láti:", options: ["Dín àìyọjú àti àìrí ọ̀nà wọlé kù", "Gbé iye owó sókè", "Fo iṣẹ́ náà", "Fi òfin náà pamọ́"], answer: 0, why: "Ìrántí ń dín iṣẹ́ tí a pàdánù kù." },
      { objective: "O4", q: "Níbo ni a ti sábà máa ń ṣètò ìrántí aládàáṣe?", options: ["Kò sí ibì kankan", "Kàlẹ́ńdà ìwé", "Báńkì", "Ètò (settings) irinṣẹ́ ìpàdé rẹ"], answer: 3, why: "Ọ̀pọ̀ irinṣẹ́ ìpàdé ń fi ìrántí ránṣẹ́." },
      { objective: "O5", q: "Báwo ni o ṣe yẹ kí o ṣe àkọsílẹ̀ àyẹ̀wò iṣẹ́?", options: ["Jẹ́ kí AI dá a sílẹ̀ láti òfo", "Da ti alátakò kọ", "Ṣàlàyé iṣẹ́ rẹ kí AI ṣètò rẹ̀, lẹ́yìn náà dán an wò", "Fò ó"], answer: 2, why: "Ìmọ̀ rẹ, tí AI ṣètò." },
      { objective: "O5", q: "Àwọn ìgbésẹ̀ ààbò nínú àkọsílẹ̀ àyẹ̀wò rẹ gbọ́dọ̀ jẹ́ èyí tí a ṣàyẹ̀wò pẹ̀lú:", options: ["AI nìkan", "Ìtọ́sọ́nà ààbò ìjọba tàbí ẹ̀kọ́ iṣẹ́ ọwọ́ rẹ", "Ìfiránṣẹ́ ìkànnì àjọlò", "Kò sí nǹkan kan"], answer: 1, why: "Ààbò nílò orísun tí a lè gbẹ́kẹ̀lé." },
      { objective: "O5", q: "Ìrìn àyẹ̀wò (walk-through) ni:", options: ["Àyẹ̀wò (review) kan", "Ọ̀dẹ̀dẹ̀ kan", "Ìdíyelé kan", "Wíwo iṣẹ́ tí o ti parí pọ̀ pẹ̀lú oníbàárà"], answer: 3, why: "Ó ń fìdí rẹ̀ múlẹ̀ pé inú oníbàárà dùn." },
      { objective: "O6", q: "Ìgbà wo ni o yẹ kí o fi ọ̀rọ̀ ọpẹ́ ránṣẹ́?", options: ["Láéláé", "Ọdún kan lẹ́yìn náà", "Ní ọjọ́ kan náà", "Tí wọ́n bá ṣàròyé nìkan"], answer: 2, why: "Ọpẹ́ ní kíákíá ń mú àyẹ̀wò àti ìpàdé àtúnṣe púpọ̀ wá." },
      { objective: "O6", q: "Fífúnni ní ẹ̀dínwó fún àyẹ̀wò ìràwọ̀ 5 nìkan:", options: ["Jẹ́ èèwọ̀ lábẹ́ òfin àyẹ̀wò FTC", "Dára", "Pọndandan", "Jẹ́ ọgbọ́n"], answer: 0, why: "Ẹ̀bùn tí a so mọ́ àyẹ̀wò rere jẹ́ èèwọ̀." },
      { objective: "O6", q: "Àpẹẹrẹ iṣẹ́ àtúnṣe ni:", options: ["Kíkó ẹrù lẹ́ẹ̀kan ṣoṣo", "Fífọ gọ́tà ní ìgbà ìwọ́wé kọ̀ọ̀kan", "Fèrèsé tí ó fọ́ lẹ́ẹ̀kan", "Ìfijíṣẹ́ ẹrù kan ṣoṣo"], answer: 1, why: "Ó ń padà wá ní àkókò kan pàtó." },
      { objective: "O6", q: "Mímú ènìyàn wá (referral) ni:", options: ["Owó kan", "Oníbàárà tí ó rán ọ̀rẹ́ rẹ̀ sí ọ", "Owó orí", "Irinṣẹ́ kan"], answer: 1, why: "Àwọn tí a mú wá ń mú oníbàárà tuntun wá." },
      { objective: "O2", q: "Apá wo nínú iṣẹ́ náà ló jẹ́ tìrẹ, kì í ṣe ti AI?", options: ["Dídá iye owó àti ṣíṣe iṣẹ́ náà dáadáa", "Ṣíṣètò àpẹẹrẹ ìwé", "Kíkọ ọ̀rọ̀ ìrántí", "Ṣíṣètò àkọsílẹ̀"], answer: 0, why: "AI ń ràn ọ́ lọ́wọ́ pẹ̀lú ọ̀rọ̀; ìwọ ló ń ṣe iṣẹ́ náà." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      7,
      8,
      10,
      12,
      16
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àkọsílẹ̀ iṣẹ́ tó yé",
        objective: "O1",
        notYet: "Iye owó tàbí ohun tó wà nínú iṣẹ́ kò sí tàbí kò tọ́.",
        meets: "Iṣẹ́ kọ̀ọ̀kan sọ ohun tó wà nínú rẹ̀, ohun tí ó ń gba owó àfikún àti iye owó.",
        exceeds: "Ó tún fi bí iṣẹ́ kọ̀ọ̀kan ṣe pẹ́ tó àti àwọn àfikún hàn."
      },
      {
        name: "Àpẹẹrẹ ìdíyelé tó pé",
        objective: "O2",
        notYet: "Ìdíyelé náà kò ní iṣẹ́ tí a máa ṣe, iye owó, ohun tí kò sí nínú rẹ̀ tàbí bí ó ṣe pẹ́ tó.",
        meets: "Gbogbo apá wà níbẹ̀, iye owó sì wá láti inú ìnáwó rẹ pẹ̀lú èrè.",
        exceeds: "Ó tún ní ètò ìsanwó àti àkọsílẹ̀ ibi tí a ti ṣàyẹ̀wò òfin ìwé àṣẹ fún iṣẹ́ ńlá."
      },
      {
        name: "Ọ̀rọ̀ ìpàdé",
        objective: "O4",
        notYet: "Ìfìdímúlẹ̀ tàbí ìrántí kò ní àkókò ìdé, àdírẹ́sì tàbí òfin ìfagilé.",
        meets: "Ìfìdímúlẹ̀ àti ìrántí ọjọ́ kan ṣáájú pẹ̀lú ọjọ́, àkókò ìdé, àdírẹ́sì, iye owó àti òfin.",
        exceeds: "Ó tún sọ fún oníbàárà bí ó ṣe máa múra sílẹ̀, a sì ti ṣètò rẹ̀ láti lọ fúnra rẹ̀."
      },
      {
        name: "Àkọsílẹ̀ àyẹ̀wò iṣẹ́",
        objective: "O5",
        notYet: "Àkọsílẹ̀ àyẹ̀wò fo àwọn ìgbésẹ̀ kan tàbí kò ní ìgbésẹ̀ ààbò.",
        meets: "Àkọsílẹ̀ àyẹ̀wò apá mẹ́ta pẹ̀lú ìgbésẹ̀ ààbò àti ìrìn àyẹ̀wò ìkẹyìn.",
        exceeds: "A ti dán an wò lórí iṣẹ́ gidi, a sì tún un ṣe lẹ́yìn náà."
      },
      {
        name: "Àtẹ̀lé tó jẹ́ òtítọ́",
        objective: "O6",
        notYet: "Ọ̀rọ̀ náà fúnni ní ẹ̀bùn fún àyẹ̀wò rere nìkan, tàbí kò béèrè àyẹ̀wò rárá.",
        meets: "Ó dúpẹ́ lọ́wọ́ oníbàárà, ó béèrè àyẹ̀wò òtítọ́ àti kí wọ́n mú ènìyàn wá, ó sì fi ìpàdé tó kàn lọ̀ wọ́n.",
        exceeds: "Ó tún ṣètò ìrántí fún iṣẹ́ àtúnṣe tó kàn."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olówó iṣẹ́ tí wọ́n sọ pé àwọn ń dá àwọn oníbàárà tuntun lóhùn kíákíá sí i, tí wọ́n sì ń rí iṣẹ́ púpọ̀ sí i láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn olówó iṣẹ́ tí wọ́n sọ pé àìyọjú tàbí ìjiyàn lórí iye owó ti dín kù láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ iṣẹ́ kékeré míì ti Koach Learn láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ àti ìwé ọ̀fẹ́ bí Google Docs tàbí Word",
      "Àwọn iṣẹ́, iye owó àti ìnáwó rẹ gidi, tàbí àpẹẹrẹ wọn",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Pín àwọn akẹ́kọ̀ọ́ sí ẹgbẹ́ gẹ́gẹ́ bí iṣẹ́ ọwọ́ wọn tí ó bá ṣeé ṣe, kí wọ́n lè pín àkọsílẹ̀ àyẹ̀wò àti ọ̀rọ̀ ìdíyelé.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé iye owó ń wá láti inú ìnáwó tiwọn, òfin ìwé àṣẹ àti àdéhùn sì ń wá láti ọ̀dọ̀ àjọ ìpínlẹ̀ wọn tàbí ọ̀jọ̀gbọ́n kan, kì í ṣe láti ọ̀dọ̀ AI.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ fi àwọn àpẹẹrẹ pamọ́ sórí fóònù wọn nígbà ìpàdé, kí wọ́n lè kúrò ní ìmúrasílẹ̀ láti lò wọ́n.",
      "Rán àwọn akẹ́kọ̀ọ́ létí láti má ṣe béèrè nọ́mbà káàdì tàbí ìwé ìdánimọ̀ lọ́wọ́ oníbàárà lórí text láéláé, àti láti má ṣe kọ tàbí ra àyẹ̀wò èké láéláé.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
