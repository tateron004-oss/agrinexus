"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-ai-sales-growth.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CAN_SPAM = { name: "FTC: CAN-SPAM Act, A Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-sales-growth-yo",
  lang: "yo",
  translationOf: "smallbiz-ai-sales-growth",
  category: "Small Business",
  name: "AI fún Títà Ọjà àti Ìdàgbàsókè Iṣẹ́ Òwò",
  skills: "Ṣíṣàpèjúwe oníbàárà tí o fẹ́ jù, Kíkọ ìfilọ̀ tó yé, Ṣíṣe àkọsílẹ̀ oníbàárà tó rọrùn, Kíkọ ọ̀rọ̀ àtẹ̀lé, Kíka nọ́mbà títà ọjà, Ṣíṣètò ìgbìyànjú ìdàgbàsókè ọjọ́ 30",
  outcome: "lo AI láti ṣètò àti ṣe ìgbìyànjú títà ọjà ọjọ́ 30 fún iṣẹ́ òwò rẹ: ṣàpèjúwe oníbàárà tí o fẹ́ jù, kọ ìfilọ̀ kan tó yé, ṣe àkọsílẹ̀ oníbàárà tó rọrùn, kọ ọ̀rọ̀ àtẹ̀lé tí ó tẹ̀lé òfin email, kí o sì tọpinpin èsì rẹ̀ nínú spreadsheet.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olókòwò kékeré tí wọ́n fẹ́ ta ọjà sí i fún àwọn oníbàárà tí wọ́n ti ní àti àwọn tí ó wà nítòsí: ṣọ́ọ̀bù, ilé oúnjẹ, ilé ìṣerun, iṣẹ́ ìmọ́tótó àti àtúnṣe, àwọn olùpèsè oúnjẹ àti ọkọ̀ ìtajà oúnjẹ. Ọ̀pọ̀ àwọn akẹ́kọ̀ọ́ wa jẹ́ olókòwò láti inú àwọn ẹ̀yà kékeré tí wọ́n ń dàgbà láìní owó ìpolówó ńlá.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti ronú nípa ẹni tó ń rà lọ́wọ́ rẹ, láti ṣe ìfilọ̀ tó bọ́gbọ́n mu, láti tẹ̀lé àwọn oníbàárà tí wọ́n gbà pé kí o máa kàn sí wọn, àti láti ka nọ́mbà ara rẹ láti rí ohun tó ń ṣiṣẹ́. AI ń ràn ọ́ lọ́wọ́ láti kọ̀wé àti láti ronú; ìwọ àti àjọṣe rẹ pẹ̀lú oníbàárà ló ń ta ọjà.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Àwọn iṣẹ́ náà ń kórajọ di ètò títà ọjà ọjọ́ 30."
  ],
  finalTask: "Kọ ètò títà ọjà ọjọ́ 30 ní ojú-ewé kan: oníbàárà tí o fẹ́ jù ní gbólóhùn mẹ́ta, ìfilọ̀ kan pẹ̀lú iye owó tó yé àti ọjọ́ ìparí, ibi tí àkọsílẹ̀ oníbàárà rẹ wà àti bí àwọn ènìyàn ṣe dara pọ̀ mọ́ ọn, ọ̀rọ̀ àtẹ̀lé mẹ́ta (pẹ̀lú àdírẹ́sì rẹ àti ìlà unsubscribe lórí email ìpolówó èyíkéyìí), àti tábìlì ìtọpinpin pẹ̀lú àwọn nọ́mbà tí o máa wò ní ọ̀sẹ̀ kọ̀ọ̀kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olókòwò kékeré tí wọ́n fẹ́ ta ọjà sí i fún àwọn oníbàárà tí wọ́n ní àti àwọn tí ó wà nítòsí: ṣọ́ọ̀bù, ilé oúnjẹ, ilé ìṣerun, iṣẹ́ ìmọ́tótó àti àtúnṣe, àwọn olùpèsè oúnjẹ àti ọkọ̀ ìtajà oúnjẹ. Ọ̀pọ̀ wọn jẹ́ olókòwò láti inú àwọn ẹ̀yà kékeré tí wọ́n ń dàgbà láìní owó ìpolówó ńlá.",
    startingPoint: "Wọ́n mọ àwọn oníbàárà wọn déédéé àti ọjà wọn dáadáa. Wọn kò fi bẹ́ẹ̀ lo ìfilọ̀ tí a kọ sílẹ̀, àkọsílẹ̀ oníbàárà tí ó ní ìyọ̀ǹda, ọ̀rọ̀ àtẹ̀lé lórí email tàbí text, ìtọpinpin títà ọjà tàbí AI fún ṣíṣètò.",
    gap: "Láìsí ètò, ìgbìyànjú títà ọjà máa ń rí bákan-bákan, ẹ̀dínwó lè pa èrè rẹ́, ọ̀rọ̀ ìpolówó sì lè rú òfin email àti text. Àwọn olókòwò nílò ètò ọjọ́ 30 tó rọrùn tí wọ́n fi ìrànlọ́wọ́ AI ṣe, tí ó dojú kọ àwọn oníbàárà tó tọ́, tí ó ní ìfilọ̀ tó ń mú èrè wá, tí ó tẹ̀lé òfin nínú ọ̀rọ̀ àtẹ̀lé, tí ó sì ń tọpinpin ohun tó ń ṣiṣẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú",
      "Ẹ̀rọ: smartphone tàbí kọ̀mpútà; spreadsheet rọrùn jù lórí kọ̀mpútà",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 tí ó bá ọjọ́ iṣẹ́ tó kún fún iṣẹ́ mu",
      "Òfin: CAN-SPAM fún email ìpolówó àti òfin ìjọba àpapọ̀ míì tí ó yàtọ̀ fún text ìpolówó",
      "Ìsọfúnni àdáni: àkọsílẹ̀ oníbàárà wà ní ààbò, kò sì ní wọ inú irinṣẹ́ AI"
    ],
    prerequisites: "\"Ìfihàn sí AI fún Iṣẹ́ Òwò Kékeré\" wúlò, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá wo ohun tí o ń rí lára àwọn oníbàárà rẹ tó dára jù", action: "kọ àpèjúwe kúkúrú tí ó ṣe pàtó nípa oníbàárà tí o fẹ́ jù pẹ̀lú ìrànlọ́wọ́ AI", standard: "ní gbólóhùn mẹ́ta tí ó sọ ẹni tí wọ́n jẹ́, ohun tí wọ́n nílò àti ìdí tí wọ́n fi yàn ọ́" },
    { id: "O2", condition: "Tí AI bá fún ọ ní èrò ìfilọ̀", action: "ṣe ìfilọ̀ kan tó yé tí ó sì jẹ́ òótọ́", standard: "pẹ̀lú ohun tí ò ń tà, iye owó, ìdí láti rà báyìí àti ọjọ́ ìparí, àti èrè tí o ti ṣírò sórí ìwé" },
    { id: "O3", condition: "Ní lílo spreadsheet", action: "ṣe àkọsílẹ̀ oníbàárà tí ó kọ ìyọ̀ǹda láti kàn sí wọn sílẹ̀", standard: "pẹ̀lú ọ̀wọ̀n fún ìfọwọ́sí àti ọjọ́, ọ̀nà ìforúkọsílẹ̀, láìsí ìsọfúnni oníbàárà gidi nínú AI" },
    { id: "O4", condition: "Tí o bá mọ CAN-SPAM àti òfin text", action: "kọ ọ̀rọ̀ àtẹ̀lé mẹ́ta pẹ̀lú ìrànlọ́wọ́ AI", standard: "pẹ̀lú àdírẹ́sì ìfìwéránṣẹ́ àti ìlà unsubscribe lórí email ìpolówó èyíkéyìí, àti text nìkan tí ìyọ̀ǹda tó yé bá wà" },
    { id: "O5", condition: "Tí o bá ní nọ́mbà títà ọjà ọ̀sẹ̀ mẹ́rin", action: "tọpinpin nọ́mbà títà ọjà rẹ nínú tábìlì kí o sì ṣàyẹ̀wò àwọn àpẹẹrẹ tí AI rí", standard: "pẹ̀lú fọ́múlà fún àròpọ̀, láìsí orúkọ oníbàárà, àti ó kéré tán àpẹẹrẹ kan tí o fìdí rẹ̀ múlẹ̀ nínú sheet" },
    { id: "O6", condition: "Tí o bá ní oníbàárà, ìfilọ̀, àkọsílẹ̀, ọ̀rọ̀ àtẹ̀lé àti ìtọpinpin rẹ", action: "kọ ètò títà ọjà ọjọ́ 30 ní ojú-ewé kan", standard: "tí ó bá wákàtí rẹ gidi mu, pẹ̀lú nọ́mbà tí o máa wò ní ọ̀sẹ̀ kọ̀ọ̀kan àti àtúnyẹ̀wò ní ọjọ́ 30" }
  ],
  chapters: [
    {
      name: "Orí 1: Ẹni tó ń rà àti ohun tí ò ń fi lọ̀",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣàpèjúwe oníbàárà tí o fẹ́ jù",
          minutes: 5,
          goal: "Kọ àpèjúwe kúkúrú tí ó ṣe pàtó nípa irú oníbàárà tí o fẹ́ kí ó pọ̀ sí i.",
          text: [
            "O kò lè ta ọjà dáadáa fún gbogbo ènìyàn. Ronú nípa àwọn oníbàárà rẹ tó dára jù: àwọn tí wọ́n ń padà wá, tí wọ́n ń ná owó dáadáa, tí wọ́n sì ń mú ọ̀rẹ́ wọn wá. Kí ló jọra nínú wọn?",
            "Kọ gbólóhùn mẹ́ta: ẹni tí wọ́n jẹ́, ohun tí wọ́n nílò, àti ohun tó mú kí wọ́n yàn ọ́. Àpẹẹrẹ fún ilé oúnjẹ Ìwọ̀-Oòrùn Áfíríkà: \"Àwọn òṣìṣẹ́ ọ́fíìsì láàárín máìlì méjì tí wọ́n fẹ́ oúnjẹ ọ̀sán tó yó ni lábẹ́ $15. Ọwọ́ wọn dí, wọ́n sì ń pàṣẹ lórí fóònù. Wọ́n yàn wá nítorí oúnjẹ wa pọ̀, a sì ń gbé e kalẹ̀ kíákíá.\"",
            "AI lè ràn ọ́ lọ́wọ́ láti ronú: \"Èyí ni ohun tí mo mọ̀ nípa àwọn oníbàárà mi tó dára jù. Àwọn ìbéèrè wo ni kí n bi ara mi láti ṣàpèjúwe wọn dáadáa sí i?\" Lo ohun tí o ń rí nínú ṣọ́ọ̀bù rẹ, kì í ṣe àméfò nípa àwọn ẹgbẹ́ ènìyàn."
          ],
          steps: ["Ronú nípa àwọn oníbàárà rẹ márùn-ún tó dára jù.", "Kọ ohun tí ó jọra nínú wọn.", "Kọ gbólóhùn mẹ́ta: ẹni tí wọ́n jẹ́, ohun tí wọ́n nílò, ìdí tí wọ́n fi yàn ọ́.", "Béèrè lọ́wọ́ AI fún ìbéèrè tí yóò mú un ṣe pàtó sí i."],
          words: [["Oníbàárà tí o fẹ́ jù", "irú oníbàárà tí ó bá iṣẹ́ òwò rẹ mu jù."], ["Oníbàárà tí ń padà wá", "ẹni tí ó ń rà lọ́wọ́ rẹ ju ẹ̀ẹ̀kan lọ."]],
          slides: [
            { title: "Kì í ṣe gbogbo ènìyàn", bullets: ["Ronú nípa àwọn oníbàárà rẹ tó dára jù", "Ta ló ń padà wá, tí ó ń ná owó dáadáa, tí ó ń mú ọ̀rẹ́ wá?"] },
            { title: "Gbólóhùn mẹ́ta", bullets: ["Ẹni tí wọ́n jẹ́", "Ohun tí wọ́n nílò", "Ìdí tí wọ́n fi yàn ọ́"] },
            { title: "Àpẹẹrẹ: ilé oúnjẹ ọ̀sán", bullets: ["Àwọn òṣìṣẹ́ ọ́fíìsì láàárín máìlì méjì", "Wọ́n fẹ́ oúnjẹ ọ̀sán tó yó ni lábẹ́ $15", "Wọ́n yàn wá nítorí oúnjẹ pọ̀, a sì ń gbé e kalẹ̀ kíákíá"] }
          ],
          tryIt: "Kọ oníbàárà tí o fẹ́ jù ní gbólóhùn mẹ́ta. Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún ìbéèrè márùn-ún láti mú un ṣe pàtó sí i, dáhùn wọn, kí o sì tún gbólóhùn mẹ́ta rẹ kọ.",
          youCanNow: "ṣàpèjúwe irú oníbàárà tí o fẹ́ kí ó pọ̀ sí i ní gbólóhùn mẹ́ta tó yé.",
          quickCheck: [
            { objective: "O1", q: "Níbo ni àpèjúwe oníbàárà tí o fẹ́ jù ti yẹ kí ó wá?", options: ["Láti ohun tí o ń rí lára àwọn oníbàárà rẹ gidi tó dára jù", "Láti àméfò nípa gbogbo ènìyàn ní ìlú", "Láti ohunkóhun tí AI kọ́kọ́ sọ", "Láti ojú-òpó wẹ́ẹ̀bù olùdíje rẹ"], answer: 0, why: "Àwọn oníbàárà rẹ gidi tó dára jù ló ń fi ẹni tí o máa wá hàn ọ́." },
            { objective: "O1", q: "Àpèjúwe rẹ sọ pé \"gbogbo ẹni tí ó fẹ́ràn oúnjẹ\". Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ nítorí pé ó kó ènìyàn púpọ̀ sí i", "Béèrè lọ́wọ́ AI fún ìbéèrè, kí o sì mú un ṣe pàtó", "Pa àpèjúwe náà rẹ́", "Dà àpèjúwe ilé-iṣẹ́ ńlá kan kọ"], answer: 1, why: "Àpèjúwe tó ṣe pàtó ń ràn ọ́ lọ́wọ́ láti dé ọ̀dọ̀ àwọn ènìyàn tó tọ́." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìfilọ̀ tó bọ́gbọ́n mu",
          minutes: 5,
          goal: "Ṣe ìfilọ̀ kan tó yé tí ó jẹ́ òótọ́, pẹ̀lú iye owó, ìdí láti rà báyìí àti ọjọ́ ìparí.",
          text: [
            "Ìfilọ̀ ni ohun tí ò ń tà, iye owó rẹ̀, àti ìdí tí ẹnìkan fi yẹ kí ó rà á báyìí. Ìfilọ̀ tó dára máa ń rọrùn: \"Oúnjẹ ọ̀sán àpapọ̀: ìrẹsì, ọbẹ̀ àti ohun mímu, $13, ọjọ́ iṣẹ́ láti agogo 11 sí 2 títí di June 30.\"",
            "Ní kí AI dá èrò sílẹ̀, lẹ́yìn náà ìwọ ni o máa yàn: \"Mo ń ṣe iṣẹ́ ìfọ ọkọ̀ tí ń lọ sọ́dọ̀ oníbàárà. Oníbàárà tí mo fẹ́ jù ni àwọn òbí tí ọwọ́ wọn dí. Fún mi ní èrò ìfilọ̀ márùn-ún fún ìgbà ìrúwé tí yóò dá èrè mi sí.\" Ṣírò rẹ̀ fúnra rẹ: ẹ̀dínwó tí ó ń pàdánù owó lórí títà kọ̀ọ̀kan kì í ṣe ìdàgbàsókè.",
            "Jẹ́ olóòótọ́. Sọ iye owó gidi, ọjọ́ ìparí gidi àti òdiwọ̀n èyíkéyìí. Má ṣe pè é ní \"sale\" (ẹ̀dínwó) tí ó bá jẹ́ iye owó rẹ déédéé."
          ],
          steps: ["Béèrè lọ́wọ́ AI fún èrò ìfilọ̀ márùn-ún fún oníbàárà tí o fẹ́ jù.", "Yan ọ̀kan kí o sì ṣírò iye tí ó ná ọ àti èrè rẹ.", "Kọ ọ́ pẹ̀lú ohun tí ò ń tà, iye owó, ìdí láti rà báyìí àti ọjọ́ ìparí.", "Ṣàyẹ̀wò pé ó jẹ́ òótọ́, ó sì yé."],
          words: [["Ìfilọ̀ (offer)", "ohun tí ò ń tà, iye owó rẹ̀ àti ìdí láti rà á báyìí."], ["Èrè", "owó tí ó kù lẹ́yìn tí o bá ti san gbogbo ìnáwó rẹ."], ["Margin", "ìpín iye owó tí ó jẹ́ èrè."]],
          slides: [
            { title: "Ìfilọ̀ tó yé ní", bullets: ["Ohun tí ò ń tà", "Iye owó", "Ìdí láti rà báyìí àti ọjọ́ ìparí"] },
            { title: "AI ń dá èrò sílẹ̀, ìwọ ló ń yàn", bullets: ["Béèrè èrò márùn-ún fún oníbàárà tí o fẹ́ jù", "Ṣírò rẹ̀: rí i dájú pé èrè ṣì wà"] },
            { title: "Jẹ́ olóòótọ́", bullets: ["Iye owó gidi, ọjọ́ ìparí gidi, òdiwọ̀n gidi", "\"Sale\" gbọ́dọ̀ kéré ju iye owó rẹ déédéé lọ"] }
          ],
          tryIt: "Béèrè lọ́wọ́ AI fún èrò ìfilọ̀ márùn-ún fún oníbàárà tí o fẹ́ jù. Yan ọ̀kan, ṣírò ìnáwó àti èrè rẹ sórí ìwé, kí o sì kọ ìfilọ̀ náà ní gbólóhùn kan pẹ̀lú ọjọ́ ìparí.",
          youCanNow: "kọ ìfilọ̀ tó yé tí ó jẹ́ òótọ́, tí ó sì ṣì ń mú èrè wá.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìfilọ̀ tó yé máa ń ní?", options: ["Ẹ̀dínwó ńlá nìkan", "Àkọsílẹ̀ ọjà tó gùn", "Ohun tí ò ń tà, iye owó, ìdí láti rà báyìí àti ọjọ́ ìparí", "Ìlérí pé kò ní parí láéláé"], answer: 2, why: "Àwọn apá wọ̀nyí ló ń jẹ́ kí ìfilọ̀ rọrùn láti lóye àti láti ṣe nǹkan lé lórí." },
            { objective: "O2", q: "AI dábàá ìdajì owó lórí gbogbo nǹkan fún oṣù kan. Kí ni o máa kọ́kọ́ ṣe?", options: ["Fi í síta lónìí", "Sọ ọ́ di 70% ẹ̀dínwó dípò rẹ̀", "Béèrè lọ́wọ́ àwọn oníbàárà bóyá wọ́n fẹ́ràn rẹ̀", "Ṣírò sórí ìwé bóyá èrè ṣì máa wà"], answer: 3, why: "Ìfilọ̀ gbọ́dọ̀ ṣì fi owó sílẹ̀ lẹ́yìn ìnáwó." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bíbẹ̀rẹ̀ àkọsílẹ̀ oníbàárà tó rọrùn",
          minutes: 5,
          goal: "Ṣe àkọsílẹ̀ oníbàárà tó rọrùn nínú spreadsheet, pẹ̀lú ìyọ̀ǹda láti kàn sí wọn.",
          text: [
            "Àkọsílẹ̀ oníbàárà rẹ ni irinṣẹ́ títà ọjà rẹ tó níye lórí jù. Ó lè jẹ́ spreadsheet tí ó ní ọ̀wọ̀n bí Orúkọ àkọ́kọ́, Bí a ṣe lè kàn sí i (email tàbí fóònù), Ó gbà láti gba ọ̀rọ̀ (bẹ́ẹ̀ni/bẹ́ẹ̀kọ́ àti ọjọ́), Ìgbà tó wá kẹ́yìn, Ohun tó rà, àti Àkíyèsí.",
            "Fi àwọn ènìyàn tí wọ́n fún ọ ní ìsọfúnni wọn tí wọ́n sì gbà láti máa gbọ́ láti ọ̀dọ̀ rẹ nìkan kún un: ìwé ìforúkọsílẹ̀ ní kántà, QR code tí ó ń ṣí fọ́ọ̀mù, tàbí àpótí àmì nínú irinṣẹ́ ìforúkọsílẹ̀ rẹ. Kọ ìgbà àti bí wọ́n ṣe gbà sílẹ̀.",
            "Pa àkọsílẹ̀ náà mọ́ ní ìkọ̀kọ̀ àti ní ààbò: ọ̀rọ̀ aṣínà lórí fáìlì tàbí àkáǹtì, pín in pẹ̀lú àwọn òṣìṣẹ́ tí wọ́n nílò rẹ̀ nìkan. Má ṣe lẹ àkọsílẹ̀ náà sínú irinṣẹ́ AI. Tí o bá fẹ́ ìrànlọ́wọ́ AI, ṣàpèjúwe àwọn ọ̀wọ̀n tàbí lo ìlà àpẹẹrẹ tí o hùmọ̀."
          ],
          steps: ["Ṣe spreadsheet pẹ̀lú àwọn ọ̀wọ̀n tí a sọ lókè.", "Fi ọ̀nà ìforúkọsílẹ̀ kún un: ìwé ní kántà, fọ́ọ̀mù QR tàbí àpótí àmì ìforúkọsílẹ̀.", "Kọ ìgbà àti bí ẹnì kọ̀ọ̀kan ṣe gbà sílẹ̀.", "Dáàbò bo fáìlì náà kí o sì pa á mọ́ kúrò nínú irinṣẹ́ AI."],
          words: [["Àkọsílẹ̀ oníbàárà", "àkọsílẹ̀ àwọn oníbàárà tí wọ́n gbà láti máa gbọ́ láti ọ̀dọ̀ rẹ."], ["Opt in", "nígbà tí ẹnìkan bá gbà láti máa gba ọ̀rọ̀ rẹ."], ["CRM", "customer relationship management (ìṣàkóso àjọṣe oníbàárà): sọ́fítíwià tàbí sheet fún títọpinpin oníbàárà."]],
          slides: [
            { title: "Irinṣẹ́ títà ọjà rẹ tó níye lórí jù", bullets: ["Spreadsheet lásán ti tó", "Orúkọ, ọ̀nà ìkànsí, ìfọwọ́sí (ọjọ́), ìgbà tó wá kẹ́yìn, àkíyèsí"] },
            { title: "Ìyọ̀ǹda ló kọ́kọ́ wá", bullets: ["Ìforúkọsílẹ̀ ní kántà, fọ́ọ̀mù QR tàbí àpótí àmì ìforúkọsílẹ̀", "Kọ ìgbà àti bí wọ́n ṣe gbà sílẹ̀"] },
            { title: "Pa á mọ́ ní ààbò", bullets: ["Ọ̀rọ̀ aṣínà lórí fáìlì tàbí àkáǹtì", "Pín in pẹ̀lú òṣìṣẹ́ tí wọ́n nílò rẹ̀ nìkan", "Má ṣe lẹ àkọsílẹ̀ náà sínú irinṣẹ́ AI láéláé"] }
          ],
          tryIt: "Ṣe sheet àkọsílẹ̀ oníbàárà rẹ pẹ̀lú ọ̀wọ̀n mẹ́fà náà. Fi ìlà àpẹẹrẹ mẹ́ta tí o hùmọ̀ kún un, lẹ́yìn náà kọ bí àwọn oníbàárà gidi ṣe máa forúkọ sílẹ̀ (ìwé ní kántà, fọ́ọ̀mù QR tàbí àpótí àmì ìforúkọsílẹ̀).",
          youCanNow: "ṣe àkọsílẹ̀ oníbàárà àdáni tí ó kọ ìyọ̀ǹda láti kàn sí wọn sílẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Ta ló yẹ kí ó wà nínú àkọsílẹ̀ oníbàárà rẹ?", options: ["Àwọn tí wọ́n gbà láti máa gbọ́ láti ọ̀dọ̀ rẹ", "Ẹnikẹ́ni tí o bá rí nọ́mbà rẹ̀", "Àwọn oníbàárà olùdíje rẹ", "Gbogbo ènìyàn nínú ìwé nọ́mbà fóònù"], answer: 0, why: "Àwọn tí wọ́n sọ bẹ́ẹ̀ni sí gbígbọ́ láti ọ̀dọ̀ rẹ nìkan ló yẹ kí ó wà nínú àkọsílẹ̀ náà." },
            { objective: "O3", q: "O fẹ́ kí AI ràn ọ́ lọ́wọ́ láti ṣe sheet àkọsílẹ̀ oníbàárà rẹ. Kí ni o máa pín?", options: ["Gbogbo àkọsílẹ̀ oníbàárà rẹ gidi", "Nọ́mbà fóònù àwọn oníbàárà", "Orúkọ àwọn ọ̀wọ̀n tàbí ìlà àpẹẹrẹ tí o hùmọ̀", "Ọ̀rọ̀ aṣínà sheet rẹ"], answer: 2, why: "Orúkọ ọ̀wọ̀n tàbí ìlà àpẹẹrẹ ń mú ìrànlọ́wọ́ wá láìpín ìsọfúnni oníbàárà gidi." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ẹni tó ń rà àti ohun tí ò ń fi lọ̀",
        questions: [
          { objective: "O1", q: "Kí ni oníbàárà tí o fẹ́ jù?", options: ["Ẹnikẹ́ni tí ó ní owó", "Irú oníbàárà tí ó bá iṣẹ́ òwò rẹ mu jù", "Àwọn tí ń ṣàròyé nìkan", "Àwọn oníbàárà olùdíje rẹ"], answer: 1, why: "Ó ṣàpèjúwe irú ẹni tí o fẹ́ kí ó pọ̀ sí i." },
          { objective: "O2", q: "Èwo ni ìfilọ̀ tó yé?", options: ["\"Ọjà dáadáa wà!\"", "\"Nǹkan olówó pọ́ọ́kú\"", "\"Wá nígbà kan\"", "\"Oúnjẹ ọ̀sán àpapọ̀: ìrẹsì, ọbẹ̀ àti ohun mímu, $13, ọjọ́ iṣẹ́ 11-2 títí di June 30\""], answer: 3, why: "Ó sọ ohun tí ò ń tà, iye owó, ìgbà àti ọjọ́ ìparí." },
          { objective: "O2", q: "AI dábàá ẹ̀dínwó 60%. Kí ni o máa kọ́kọ́ ṣàyẹ̀wò?", options: ["Bóyá èrè ṣì máa wà", "Bóyá ó dún bí ohun tó dùn mọ́ni", "Kò sí nǹkan", "Irú lẹ́tà tí a fi kọ ọ́"], answer: 0, why: "Ẹ̀dínwó tí ó ń pàdánù owó kì í ṣe ìdàgbàsókè." },
          { objective: "O3", q: "Ta ló yẹ kí ó wà nínú àkọsílẹ̀ oníbàárà rẹ?", options: ["Ẹnikẹ́ni tí o bá rí nọ́mbà rẹ̀", "Àwọn oníbàárà olùdíje", "Àwọn tí wọ́n gbà láti máa gbọ́ láti ọ̀dọ̀ rẹ", "Nọ́mbà fóònù èyíkéyìí"], answer: 2, why: "Ìyọ̀ǹda ló kọ́kọ́ wá." },
          { objective: "O3", q: "O fẹ́ ìrànlọ́wọ́ AI láti ṣètò àkọsílẹ̀ oníbàárà rẹ. Kí ni o máa pín?", options: ["Gbogbo àkọsílẹ̀ pẹ̀lú nọ́mbà fóònù", "Nọ́mbà káàdì àwọn oníbàárà", "Orúkọ àwọn ọ̀wọ̀n tàbí ìlà àpẹẹrẹ tí o hùmọ̀", "Ọ̀rọ̀ aṣínà fáìlì rẹ"], answer: 2, why: "Ìsọfúnni oníbàárà gidi kò gbọ́dọ̀ wọ inú irinṣẹ́ AI." }
        ]
      }
    },
    {
      name: "Orí 2: Títẹ̀lé oníbàárà àti dídàgbà",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ ọ̀rọ̀ àtẹ̀lé tí ó tẹ̀lé òfin",
          minutes: 6,
          goal: "Kọ ọ̀rọ̀ àtẹ̀lé mẹ́ta, kí o sì rí i dájú pé email ìpolówó tẹ̀lé CAN-SPAM.",
          text: [
            "Ọ̀pọ̀ títà ọjà ń wá láti inú títẹ̀lé oníbàárà. Ìtẹ̀léra tó rọrùn: (1) ọ̀rọ̀ ìdúpẹ́ lẹ́yìn ìbẹ̀wò, (2) ìrántí tàbí ìmọ̀ràn ní ọ̀sẹ̀ kan lẹ́yìn náà, (3) ìfilọ̀ rẹ pẹ̀lú ọjọ́ ìparí rẹ̀. Béèrè lọ́wọ́ AI: \"Kọ email àtẹ̀lé kúkúrú mẹ́ta fún ilé ìṣerun mi ní ohùn iṣẹ́ òwò mi. Lo [orúkọ àkọ́kọ́].\"",
            "Email ìpolówó ní US gbọ́dọ̀ tẹ̀lé òfin CAN-SPAM Act. Ìtọ́sọ́nà FTC (àjọ ìjọba US tí ń dáàbò bo oníbàárà) sọ pé: lo orúkọ olùfiránṣẹ́ (From) àti àkọlé tí ó jẹ́ òótọ́, jẹ́ kí ó hàn pé ìpolówó ni, fi àdírẹ́sì ìfìwéránṣẹ́ tó wúlò sí i, fúnni ní ọ̀nà tó yé láti unsubscribe, kí o sì ṣe ìbéèrè unsubscribe láàárín ọjọ́ iṣẹ́ 10.",
            "Text ìpolówó ní òfin ìjọba àpapọ̀ tirẹ̀ (TCPA, tí FCC ń mú ṣẹ), ó sì sábà máa ń nílò ìyọ̀ǹda tó yé láti ọ̀dọ̀ oníbàárà. Kí o tó fi text ìpolówó ránṣẹ́, ṣàyẹ̀wò òfin náà ní fcc.gov tàbí béèrè lọ́wọ́ akọ́ṣẹ́mọṣẹ́, kí o sì lo irinṣẹ́ text tí ó ń ṣètò opt-out (ìjáde kúrò)."
          ],
          steps: ["Ṣètò ọ̀rọ̀ mẹ́ta: ìdúpẹ́, ìrántí tàbí ìmọ̀ràn, ìfilọ̀.", "Ní kí AI kọ àkọ́pẹrẹ wọn pẹ̀lú àlàfo [orúkọ àkọ́kọ́].", "Fi àdírẹ́sì ìfìwéránṣẹ́ rẹ àti ìlà unsubscribe sí email ìpolówó.", "Ṣe ìbéèrè unsubscribe kíákíá.", "Ṣàyẹ̀wò òfin text kí o tó fi text ìpolówó ránṣẹ́."],
          words: [["Ọ̀rọ̀ àtẹ̀lé", "àwọn ọ̀rọ̀ tí a ṣètò láti fi ránṣẹ́ lẹ́yìn ìbẹ̀wò tàbí ìforúkọsílẹ̀ oníbàárà."], ["CAN-SPAM", "òfin US tí ó ní ìlànà fún email ìṣòwò."], ["Unsubscribe", "ọ̀nà tí àwọn ènìyàn fi lè dá gbígba ọ̀rọ̀ rẹ dúró."]],
          slides: [
            { title: "Ọ̀rọ̀ àtẹ̀lé mẹ́ta", bullets: ["1. Ọ̀rọ̀ ìdúpẹ́ lẹ́yìn ìbẹ̀wò", "2. Ìrántí tàbí ìmọ̀ràn ní ọ̀sẹ̀ kan lẹ́yìn náà", "3. Ìfilọ̀ rẹ pẹ̀lú ọjọ́ ìparí"] },
            { title: "Ìpìlẹ̀ CAN-SPAM (FTC)", bullets: ["Orúkọ olùfiránṣẹ́ àti àkọlé tí ó jẹ́ òótọ́; sọ pé ìpolówó ni", "Àdírẹ́sì ìfìwéránṣẹ́ tó wúlò", "Ọ̀nà unsubscribe tó yé, tí a ṣe láàárín ọjọ́ iṣẹ́ 10"] },
            { title: "Text ìpolówó", bullets: ["Òfin ìjọba àpapọ̀ tí ó yàtọ̀ (TCPA, FCC)", "Kọ́kọ́ gba ìyọ̀ǹda tó yé", "Ṣàyẹ̀wò fcc.gov tàbí béèrè lọ́wọ́ akọ́ṣẹ́mọṣẹ́"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Ní kí AI kọ àkọ́pẹrẹ ọ̀rọ̀ àtẹ̀lé mẹ́ta rẹ pẹ̀lú [orúkọ àkọ́kọ́]. Fi àdírẹ́sì ìfìwéránṣẹ́ rẹ àti ìlà unsubscribe sí email ìfilọ̀ náà.",
          youCanNow: "kọ ọ̀rọ̀ àtẹ̀lé, kí o sì rí i dájú pé email ìpolówó dé ìpìlẹ̀ CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Kí ni gbogbo email ìpolówó ní US gbọ́dọ̀ ní lábẹ́ CAN-SPAM?", options: ["Kúpọ́ọ̀nù", "Àdírẹ́sì ìfìwéránṣẹ́ tó wúlò àti ọ̀nà láti unsubscribe", "Fọ́tò", "Orúkọ oníbàárà ní kíkún"], answer: 1, why: "CAN-SPAM béèrè àdírẹ́sì ìfìwéránṣẹ́ àti ọ̀nà láti unsubscribe." },
            { objective: "O4", q: "O fẹ́ fi text ìpolówó ránṣẹ́ nípa ìfilọ̀ rẹ. Kí ni o máa kọ́kọ́ ṣe?", options: ["Fi text ránṣẹ́ sí gbogbo ènìyàn nínú fóònù rẹ", "Fi text ránṣẹ́ ní òru", "Lo àkọsílẹ̀ nọ́mbà tí o rà", "Gba ìyọ̀ǹda tó yé kí o sì ṣàyẹ̀wò òfin text ti ìjọba àpapọ̀"], answer: 3, why: "Text ìpolówó ní òfin ìjọba àpapọ̀ tirẹ̀, ó sì nílò ìyọ̀ǹda tó yé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíka nọ́mbà títà ọjà rẹ pẹ̀lú ìrànlọ́wọ́ AI",
          minutes: 5,
          goal: "Tọpinpin nọ́mbà títà ọjà díẹ̀ ní ọ̀sẹ̀ kọ̀ọ̀kan, kí o sì lo AI láti rí àwọn àpẹẹrẹ.",
          text: [
            "Nọ́mbà díẹ̀ nìkan ni o nílò: iye títà lójoojúmọ́, iye oníbàárà, iye àpapọ̀ títà kan (iye títà pín sí iye oníbàárà), ọjà tí ó ń tà jù, àti iye ènìyàn tí wọ́n lo ìfilọ̀ rẹ.",
            "Kọ wọ́n sínú spreadsheet ní ọ̀sẹ̀ kọ̀ọ̀kan. Jẹ́ kí spreadsheet ṣe ìṣirò. Lẹ́yìn náà o lè lẹ àròpọ̀ ọ̀sẹ̀ kọ̀ọ̀kan (láìsí orúkọ oníbàárà) sínú olùrànlọ́wọ́ AI kí o sì béèrè: \"Èyí ni nọ́mbà ọ̀sẹ̀ 6 fún ilé búrẹ́dì mi. Àwọn àpẹẹrẹ wo ni o rí? Kí ni kí n ṣàyẹ̀wò?\"",
            "Ka èrò AI sí ìbéèrè, kì í ṣe ìdáhùn. Tí ó bá sọ pé \"ọjọ́ Sátidé kò fi bẹ́ẹ̀ ní títà\", wo sheet tìrẹ láti fìdí rẹ̀ múlẹ̀, kí o sì ronú nípa ìdí rẹ̀: ojú ọjọ́, ayẹyẹ kan, ìyípadà òṣìṣẹ́."
          ],
          steps: ["Tọpinpin títà, oníbàárà, iye àpapọ̀ títà kan, ọjà tí ń tà jù àti lílo ìfilọ̀ ní ọ̀sẹ̀ kọ̀ọ̀kan.", "Jẹ́ kí fọ́múlà ṣe àròpọ̀.", "Lẹ àròpọ̀ ọ̀sẹ̀ (láìsí orúkọ) sínú AI kí o sì béèrè àwọn àpẹẹrẹ.", "Fìdí àpẹẹrẹ kọ̀ọ̀kan múlẹ̀ nínú sheet rẹ."],
          words: [["Iye àpapọ̀ títà kan (average sale)", "àròpọ̀ títà pín sí iye oníbàárà."], ["Àpẹẹrẹ (pattern)", "nǹkan tí ó ń ṣẹlẹ̀ léraléra nínú nọ́mbà rẹ."]],
          slides: [
            { title: "Nọ́mbà márùn-ún láti tọpinpin", bullets: ["Títà lójoojúmọ́ àti iye oníbàárà", "Iye àpapọ̀ títà kan", "Ọjà tí ń tà jù àti lílo ìfilọ̀"] },
            { title: "AI bí ojú kejì", bullets: ["Lẹ àròpọ̀ ọ̀sẹ̀, kì í ṣe orúkọ", "Béèrè: \"Àwọn àpẹẹrẹ wo ni o rí?\""] },
            { title: "Fìdí rẹ̀ múlẹ̀ kí o tó ṣe nǹkan", bullets: ["Èrò AI jẹ́ ìbéèrè", "Ṣàyẹ̀wò sheet tìrẹ", "Béèrè ìdí: ojú ọjọ́, ayẹyẹ, òṣìṣẹ́"] }
          ],
          tryIt: "Ṣe tábìlì ìtọpinpin ọ̀sẹ̀ pẹ̀lú nọ́mbà márùn-ún náà. Fi nọ́mbà àpẹẹrẹ tàbí gidi ti ọ̀sẹ̀ mẹ́rin kún un, kí o sì béèrè lọ́wọ́ AI àwọn àpẹẹrẹ tí ó rí. Fìdí ọ̀kan múlẹ̀ nínú sheet rẹ.",
          youCanNow: "tọpinpin àwọn nọ́mbà títà ọjà pàtàkì, kí o sì lo AI láti rí àwọn àpẹẹrẹ tí ìwọ yóò fìdí rẹ̀ múlẹ̀.",
          quickCheck: [
            { objective: "O5", q: "Báwo ni o ṣe ń ṣírò iye àpapọ̀ títà kan?", options: ["Títà pín sí iye oníbàárà", "Oníbàárà pín sí iye ọjọ́", "Èrè lọ́nà méjì", "Iye ọjà tí a tà"], answer: 0, why: "Iye àpapọ̀ títà kan ni àròpọ̀ títà pín sí iye oníbàárà." },
            { objective: "O5", q: "O fẹ́ kí AI wo tábìlì títà ọ̀sẹ̀ rẹ. Kí ni o máa kọ́kọ́ ṣe?", options: ["Fi orúkọ oníbàárà kún un kí ó lè mọ̀ sí i", "Lẹ ẹ́ bí ó ti rí", "Yọ orúkọ oníbàárà kúrò kí o tó lẹ ẹ́", "Fi nọ́mbà káàdì àwọn oníbàárà kún un"], answer: 2, why: "Orúkọ oníbàárà kò gbọ́dọ̀ wọ inú irinṣẹ́ AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ètò títà ọjà ọjọ́ 30 rẹ",
          minutes: 5,
          goal: "Kó oníbàárà, ìfilọ̀, àkọsílẹ̀, ọ̀rọ̀ àtẹ̀lé àti ìtọpinpin rẹ pọ̀ sínú ètò ọjọ́ 30 kan.",
          text: [
            "Ètò ń sọ èrò di iṣẹ́. Ọ̀sẹ̀ 1: ṣe àkọsílẹ̀ oníbàárà àti ìforúkọsílẹ̀. Ọ̀sẹ̀ 2: bẹ̀rẹ̀ ìfilọ̀ rẹ kí o sì fi ọ̀rọ̀ ìdúpẹ́ ránṣẹ́. Ọ̀sẹ̀ 3: fi ìrántí ránṣẹ́ kí o sì fi ìfilọ̀ náà síta. Ọ̀sẹ̀ 4: fi ìpè ìkẹyìn ránṣẹ́ ṣáájú ọjọ́ ìparí, lẹ́yìn náà ṣe àtúnyẹ̀wò nọ́mbà rẹ.",
            "Ní kí AI sọ àkọsílẹ̀ rẹ di kàlẹ́ńdà pẹ̀lú iṣẹ́ fún ọ̀sẹ̀ kọ̀ọ̀kan. Jẹ́ kí ó bá wákàtí rẹ mu.",
            "Ní ìparí, fi nọ́mbà rẹ wé ti oṣù tó ṣáájú. Dá ohun tó ṣiṣẹ́ dúró, pa ohun tí kò ṣiṣẹ́ tì, kí o sì ṣètò ọjọ́ 30 tó kàn."
          ],
          steps: ["Kó oníbàárà tí o fẹ́ jù, ìfilọ̀, ètò àkọsílẹ̀, ọ̀rọ̀ àtẹ̀lé àti tábìlì ìtọpinpin rẹ jọ.", "Ní kí AI ṣe kàlẹ́ńdà iṣẹ́ ọ̀sẹ̀ mẹ́rin.", "Jẹ́ kí àwọn iṣẹ́ bá wákàtí rẹ gidi mu.", "Ṣe àtúnyẹ̀wò èsì ní ọjọ́ 30."],
          words: [["Ètò títà ọjà", "ètò tí a kọ sílẹ̀ nípa ohun tí o máa ṣe láti ta ọjà sí i, àti ìgbà tí o máa ṣe é."], ["Àtúnyẹ̀wò", "wíwo èsì padà láti pinnu ohun tí o máa dá dúró tàbí yí padà."]],
          slides: [
            { title: "Ọ̀sẹ̀ mẹ́rin", bullets: ["Ọ̀sẹ̀ 1: àkọsílẹ̀ àti ìforúkọsílẹ̀", "Ọ̀sẹ̀ 2: bẹ̀rẹ̀ ìfilọ̀, fi ọ̀rọ̀ ìdúpẹ́ ránṣẹ́", "Ọ̀sẹ̀ 3: ìrántí; Ọ̀sẹ̀ 4: ìpè ìkẹyìn àti àtúnyẹ̀wò"] },
            { title: "AI ń ṣe kàlẹ́ńdà", bullets: ["Lẹ àkọsílẹ̀ rẹ", "Béèrè iṣẹ́ ọ̀sẹ̀ kọ̀ọ̀kan", "Jẹ́ kí ó bá wákàtí rẹ mu"] },
            { title: "Ọjọ́ 30", bullets: ["Fi wé ti oṣù tó kọjá", "Dá ohun tó ṣiṣẹ́ dúró", "Ṣètò ọjọ́ 30 tó kàn"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò títà ọjà ọjọ́ 30 rẹ ní ojú-ewé kan pẹ̀lú oníbàárà tí o fẹ́ jù, ìfilọ̀, àkọsílẹ̀, ọ̀rọ̀ àtẹ̀lé mẹ́ta àti tábìlì ìtọpinpin. Ní kí AI sọ ọ́ di kàlẹ́ńdà iṣẹ́ ọ̀sẹ̀ kọ̀ọ̀kan.",
          youCanNow: "ṣètò, ṣe, kí o sì ṣe àtúnyẹ̀wò ìgbìyànjú títà ọjà ọjọ́ 30 fún iṣẹ́ òwò rẹ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni Ọ̀sẹ̀ 1 ètò ọjọ́ 30 wà fún?", options: ["Fífi gbogbo ọ̀rọ̀ ránṣẹ́ lẹ́ẹ̀kan náà", "Ṣíṣe àkọsílẹ̀ àti ìforúkọsílẹ̀", "Fífòpin sí ìfilọ̀", "Fífi èsì wéra"], answer: 1, why: "Ọ̀sẹ̀ àkọ́kọ́ ni a fi ń ṣe àkọsílẹ̀ àti bí àwọn ènìyàn ṣe máa dara pọ̀ mọ́ ọn." },
            { objective: "O6", q: "Ètò ọjọ́ 30 rẹ nílò wákàtí ju èyí tí o ní lọ. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ bẹ́ẹ̀ kí o sì máa ṣiṣẹ́ ní gbogbo òru", "Pa ètò náà tì", "Ní kí AI ṣe títà ọjà náà", "Dín in kù kí ó bá wákàtí rẹ gidi mu"], answer: 3, why: "Ètò tí ó bá wákàtí rẹ mu ni o lè ṣe ní tòótọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Títẹ̀lé oníbàárà àti dídàgbà",
        questions: [
          { objective: "O4", q: "Èwo ló yẹ kí ó wà nínú gbogbo email ìpolówó ní US lábẹ́ CAN-SPAM?", options: ["Àdírẹ́sì ìfìwéránṣẹ́ tó wúlò àti ọ̀nà láti unsubscribe", "Nọ́mbà káàdì oníbàárà", "Àkọlé irọ́", "Láìsí orúkọ olùfiránṣẹ́"], answer: 0, why: "FTC ka méjèèjì sí ohun tí ó pọn dandan." },
          { objective: "O4", q: "Gẹ́gẹ́ bí ìtọ́sọ́nà FTC, láàárín ìgbà wo ni o gbọ́dọ̀ ṣe ìbéèrè unsubscribe?", options: ["Tí wọ́n bá pè nìkan", "Láàárín ọdún kan", "Láéláé", "Láàárín ọjọ́ iṣẹ́ 10"], answer: 3, why: "FTC sọ pé láàárín ọjọ́ iṣẹ́ 10." },
          { objective: "O4", q: "Kí o tó fi text ìpolówó ránṣẹ́, o yẹ kí o:", options: ["Fi text ránṣẹ́ sí gbogbo nọ́mbà tí o ní", "Gba ìyọ̀ǹda tó yé kí o sì ṣàyẹ̀wò òfin text ti ìjọba àpapọ̀", "Ra àkọsílẹ̀ nọ́mbà", "Fi orúkọ iṣẹ́ òwò rẹ pamọ́"], answer: 1, why: "Text ìpolówó ní òfin ìjọba àpapọ̀ tí ó yàtọ̀, ó sì nílò ìyọ̀ǹda." },
          { objective: "O5", q: "Báwo ni o ṣe ń ṣírò iye àpapọ̀ títà kan?", options: ["Títà pín sí iye oníbàárà", "Títà lọ́nà iye oníbàárà", "Èrè yọ owó ilé", "Oníbàárà pín sí iye ọjọ́"], answer: 0, why: "Iye àpapọ̀ títà kan = àròpọ̀ títà / oníbàárà." },
          { objective: "O5", q: "AI sọ pé ọjọ́ Ìṣẹ́gun (Tuesday) rẹ kò fi bẹ́ẹ̀ ní títà. Kí ni o máa ṣe?", options: ["Ti ṣọ́ọ̀bù ní ọjọ́ Ìṣẹ́gun lẹ́sẹ̀kẹsẹ̀", "Má ṣe wo nọ́mbà", "Fìdí rẹ̀ múlẹ̀ nínú nọ́mbà tìrẹ kí o sì ronú nípa ìdí rẹ̀", "Béèrè lọ́wọ́ olùdíje"], answer: 2, why: "Àwọn àpẹẹrẹ AI jẹ́ ìbéèrè tí o gbọ́dọ̀ ṣàyẹ̀wò." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Títà Ọjà àti Ìdàgbàsókè Iṣẹ́ Òwò",
    questions: [
      { objective: "O1", q: "Àpèjúwe oníbàárà tí o fẹ́ jù yẹ kí ó jẹ́:", options: ["\"Gbogbo ènìyàn\"", "Ohun tó ṣe pàtó: ẹni tí wọ́n jẹ́, ohun tí wọ́n nílò, ìdí tí wọ́n fi yàn ọ́", "Èyí tí a gbé ka àméfò nípa àwọn ẹgbẹ́", "Gígùn gan-an"], answer: 1, why: "Àpèjúwe tó ṣe pàtó ń tọ́ ọ sọ́nà sí ìfilọ̀ tó dára jù." },
      { objective: "O1", q: "Níbo ni àpèjúwe oníbàárà tí o fẹ́ jù ti yẹ kí ó wá?", options: ["Láti AI nìkan", "Láti èrò àtọwọ́dọ́wọ́ nípa àwọn ẹ̀yà", "Láti ojú-òpó wẹ́ẹ̀bù èyíkéyìí", "Láti ohun tí o ń rí lára àwọn oníbàárà rẹ gidi tó dára jù"], answer: 3, why: "Lo ohun tí o ti rí ní tòótọ́, kì í ṣe àméfò." },
      { objective: "O1", q: "Báwo ni AI ṣe lè ràn ọ́ lọ́wọ́ láti ṣàpèjúwe oníbàárà tí o fẹ́ jù?", options: ["Kò lè ràn ọ́ lọ́wọ́", "Nípa kíka àkáǹtì báńkì rẹ", "Nípa pípe àwọn oníbàárà", "Nípa bíbi ọ́ ní ìbéèrè tí yóò mú un ṣe pàtó"], answer: 3, why: "AI lè dábàá ìbéèrè tí o máa ronú lé lórí." },
      { objective: "O2", q: "Ìfilọ̀ tó yé ní:", options: ["Àwòrán nìkan", "Ohun tí ò ń tà, iye owó, ìdí láti rà báyìí àti ọjọ́ ìparí", "Kò ní iye owó", "Kóòdù àṣírí"], answer: 1, why: "Gbogbo apá mẹ́rin ló ń jẹ́ kí ó yé." },
      { objective: "O2", q: "Kí ni èrè?", options: ["Ẹ̀dínwó", "Gbogbo owó tí ń wọlé", "Owó tí ó kù lẹ́yìn ìnáwó", "Owó ẹ̀yáwó"], answer: 2, why: "Èrè ni owó tí ń wọlé yọ ìnáwó." },
      { objective: "O2", q: "Pípe iye owó rẹ déédéé ní \"sale\" jẹ́:", options: ["Ìṣìnilọ́nà", "Ọgbọ́n", "Ohun tí ó pọn dandan", "Ó dára lójoojúmọ́"], answer: 0, why: "Ìfilọ̀ gbọ́dọ̀ jẹ́ òótọ́." },
      { objective: "O3", q: "Ọ̀wọ̀n wo ló ń ràn ọ́ lọ́wọ́ láti fi hàn pé oníbàárà gbà láti gba ọ̀rọ̀?", options: ["Nọ́mbà káàdì", "Àwọ̀ tí ó fẹ́ràn jù", "Ó gbà láti gba ọ̀rọ̀ (bẹ́ẹ̀ni/bẹ́ẹ̀kọ́ àti ọjọ́)", "Ọ̀rọ̀ aṣínà"], answer: 2, why: "Kíkọ ìyọ̀ǹda sílẹ̀ ṣe pàtàkì." },
      { objective: "O3", q: "Ọ̀nà tó dára láti gba ìforúkọsílẹ̀ ni:", options: ["QR code tí ó ń ṣí fọ́ọ̀mù ìforúkọsílẹ̀", "Dída nọ́mbà kọ láti inú rìsíìtì láìbéèrè", "Rírà àkọsílẹ̀", "Méfò àdírẹ́sì email"], answer: 0, why: "Àwọn ènìyàn fúnra wọn ló yàn láti dara pọ̀." },
      { objective: "O3", q: "Àkọsílẹ̀ oníbàárà rẹ yẹ kí ó jẹ́:", options: ["Èyí tí a fi síta lórí ayélujára", "Èyí tí a dáàbò bò tí kò sì wọ inú irinṣẹ́ AI", "Èyí tí a pín pẹ̀lú ẹnikẹ́ni", "Èyí tí a lẹ sínú ìjíròrò"], answer: 1, why: "Ìsọfúnni oníbàárà jẹ́ ti àdáni." },
      { objective: "O4", q: "Ọ̀rọ̀ àtẹ̀lé tó rọrùn ń bẹ̀rẹ̀ pẹ̀lú:", options: ["Kò sí nǹkan", "Títà ọjà tipátipá", "Ẹ̀sùn", "Ọ̀rọ̀ ìdúpẹ́ lẹ́yìn ìbẹ̀wò"], answer: 3, why: "Ìdúpẹ́ lákọ̀ọ́kọ́ ń kọ́ àjọṣe." },
      { objective: "O4", q: "Lábẹ́ CAN-SPAM, email ìpolówó gbọ́dọ̀:", options: ["Jẹ́ kí ó hàn pé ìpolówó ni", "Fi olùfiránṣẹ́ pamọ́", "Lo àkọlé irọ́", "Má ní àdírẹ́sì"], answer: 0, why: "FTC béèrè pé kí a fi hàn pé ìpolówó ni." },
      { objective: "O4", q: "Ìtọ́sọ́nà àjọ wo ló bo CAN-SPAM?", options: ["IRS", "DMV", "Ilé ìfìwéránṣẹ́", "FTC"], answer: 3, why: "FTC ló tẹ ìtọ́sọ́nà náà jáde." },
      { objective: "O4", q: "Text ìpolówó wà lábẹ́:", options: ["CAN-SPAM nìkan", "Kò sí òfin kankan", "Òfin ìjọba àpapọ̀ tí ó yàtọ̀ (TCPA) tí FCC ń mú ṣẹ", "Òfin ìgbọ́kọ̀sí ti ìpínlẹ̀ nìkan"], answer: 2, why: "Text ní òfin tirẹ̀." },
      { objective: "O5", q: "Èwo ni ọ̀kan lára nọ́mbà márùn-ún láti tọpinpin?", options: ["Orin tí o fẹ́ràn jù", "Iye àpapọ̀ títà kan", "Owó ilé olùdíje", "Ọ̀rọ̀ aṣínà rẹ"], answer: 1, why: "Iye àpapọ̀ títà kan ń fi iye tí oníbàárà kọ̀ọ̀kan ń ná hàn." },
      { objective: "O5", q: "Kí ló yẹ kí ó ṣe àròpọ̀ nínú sheet ìtọpinpin rẹ?", options: ["Àwọn oníbàárà", "Àméfò AI", "Ìrántí rẹ", "Fọ́múlà spreadsheet"], answer: 3, why: "Fọ́múlà ń ṣírò lọ́nà tí a lè gbẹ́kẹ̀ lé." },
      { objective: "O5", q: "Kí o tó lẹ nọ́mbà sínú AI, yọ:", options: ["Àròpọ̀", "Ọjọ́ ọ̀sẹ̀", "Orúkọ oníbàárà", "Orúkọ ọjà"], answer: 2, why: "Orúkọ jẹ́ ti àdáni." },
      { objective: "O6", q: "Ọ̀sẹ̀ 1 ètò ọjọ́ 30 wà fún:", options: ["Ṣíṣe àkọsílẹ̀ àti ìforúkọsílẹ̀", "Títi iṣẹ́ òwò pa", "Fífi kún gbogbo iye owó", "Lílé òṣìṣẹ́ kúrò"], answer: 0, why: "Àkọsílẹ̀ ló kọ́kọ́ wá." },
      { objective: "O6", q: "Kí ló dé tí ètò fi gbọ́dọ̀ bá wákàtí rẹ gidi mu?", options: ["Kí ó lè gùn sí i", "Kí o lè ṣe é ní tòótọ́", "Kò ṣe pàtàkì", "Kí inú AI lè dùn"], answer: 1, why: "Ètò tí ó ṣeé ṣe ni à ń parí." },
      { objective: "O6", q: "Ní ọjọ́ 30, o yẹ kí o:", options: ["Gbàgbé àwọn nọ́mbà", "Fi èsì wéra kí o sì dá ohun tó ṣiṣẹ́ dúró", "Bẹ̀rẹ̀ láti ìbẹ̀rẹ̀ láìronú", "Pa àkọsílẹ̀ rẹ́"], answer: 1, why: "Àtúnyẹ̀wò ń tọ́ ọ sọ́nà fún ọjọ́ 30 tó kàn." },
      { objective: "O6", q: "Nínú ẹ̀kọ́ yìí, ta ló ń ta ọjà?", options: ["Ìwọ àti àjọṣe rẹ pẹ̀lú oníbàárà, pẹ̀lú AI bí olùrànlọ́wọ́", "AI nìkan", "Kò sí ẹnìkan", "Bot tí ó ń ṣe bí ẹni pé ìwọ ni"], answer: 0, why: "AI ń ràn ọ́ lọ́wọ́ láti kọ̀wé àti láti ronú; ìwọ ló ń ta ọjà." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      4,
      6,
      8,
      9,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Oníbàárà tí o fẹ́ jù",
        objective: "O1",
        notYet: "Kò ṣe pàtó, bí \"gbogbo ènìyàn\".",
        meets: "Gbólóhùn mẹ́ta tó ṣe pàtó: ẹni tí wọ́n jẹ́, ohun tí wọ́n nílò àti ìdí tí wọ́n fi yàn ọ́.",
        exceeds: "Ó dá lórí àwọn oníbàárà gidi tó dára jù, a sì ti fi ìbéèrè AI mú un ṣe pàtó sí i."
      },
      {
        name: "Ìfilọ̀",
        objective: "O2",
        notYet: "Kò ní iye owó tàbí ọjọ́ ìparí, tàbí ó ń pàdánù owó.",
        meets: "Ìfilọ̀ kan tó yé tí ó jẹ́ òótọ́, pẹ̀lú iye owó, ìdí láti rà báyìí àti ọjọ́ ìparí.",
        exceeds: "A ti ṣírò èrè, a sì kọ ọ́ sí ẹ̀gbẹ́ rẹ̀."
      },
      {
        name: "Àkọsílẹ̀ oníbàárà",
        objective: "O3",
        notYet: "Kò sí ọ̀wọ̀n ìyọ̀ǹda, tàbí kò sí ọ̀nà ìforúkọsílẹ̀.",
        meets: "Ó sọ ibi tí àkọsílẹ̀ wà àti bí àwọn ènìyàn ṣe dara pọ̀ mọ́ ọn, pẹ̀lú ìyọ̀ǹda tí a kọ sílẹ̀.",
        exceeds: "Ó kọ bí a ṣe ń dáàbò bo àkọsílẹ̀ náà àti bí a ṣe ń pa á mọ́ kúrò nínú irinṣẹ́ AI."
      },
      {
        name: "Ọ̀rọ̀ àtẹ̀lé",
        objective: "O4",
        notYet: "Ọ̀rọ̀ tí kò tó mẹ́ta, tàbí email ìpolówó tí kò ní àdírẹ́sì tàbí ìlà unsubscribe.",
        meets: "Ọ̀rọ̀ mẹ́ta, pẹ̀lú àdírẹ́sì àti ìlà unsubscribe lórí email ìpolówó.",
        exceeds: "Ó kọ ìyọ̀ǹda àti òfin tí a nílò kí a tó fi text ìpolówó èyíkéyìí ránṣẹ́."
      },
      {
        name: "Tábìlì ìtọpinpin",
        objective: "O5",
        notYet: "Kò sí tábìlì tàbí kò sí nọ́mbà ọ̀sẹ̀.",
        meets: "Tábìlì pẹ̀lú àwọn nọ́mbà tí a máa wò ní ọ̀sẹ̀ kọ̀ọ̀kan, tí ó ń lo fọ́múlà.",
        exceeds: "Ó ní àtúnyẹ̀wò ọjọ́ 30 láti dá ohun tó ṣiṣẹ́ dúró."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olókòwò tí wọ́n ṣe ìgbìyànjú títà ọjà ọjọ́ 30 wọn (ìwádìí àtẹ̀lé ọjọ́ 30)",
      "Àwọn olókòwò tí wọ́n ròyìn pé títà ọjà tàbí oníbàárà tí ń padà wá ti pọ̀ sí i lẹ́yìn ọjọ́ 30, láti inú tábìlì ìtọpinpin wọn",
      "Àwọn olókòwò tí wọ́n mú àkọsílẹ̀ oníbàárà tí ó dá lórí ìyọ̀ǹda dàgbà láàárín ọjọ́ 60"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí smartphone tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ àti spreadsheet ọ̀fẹ́ (Google Sheets tàbí Microsoft Excel)",
      "Ìwé àti gègé láti ṣírò ìnáwó àti èrè",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Lo ìlà àpẹẹrẹ tí a hùmọ̀ nínú àkọsílẹ̀ àṣeṣe; má ṣe lẹ àkọsílẹ̀ oníbàárà gidi sínú AI láéláé.",
      "Ẹ ṣí ìtọ́sọ́nà CAN-SPAM ti FTC pọ̀, kí o sì tọ́ka sí i pé text ní òfin tí ó yàtọ̀.",
      "Ẹ ṣe àpẹẹrẹ ìṣirò ìnáwó àti èrè kan sórí ìwé pọ̀ kí àwọn olókòwò tó ṣe ìfilọ̀ wọn.",
      "Gba àwọn olókòwò níyànjú láti fi ètò ọjọ́ 30 wọn wé wákàtí ọ̀sẹ̀ wọn gidi.",
      "Fi rubric ṣe àmì fún ètò náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
