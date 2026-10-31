"use strict";

// Koach Learn course (Yoruba translation of workforce/workforce-ai-problem-solving.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "workforce-ai-problem-solving-yo",
  lang: "yo",
  translationOf: "workforce-ai-problem-solving",
  category: "Workforce Development",
  name: "AI fún Yíyanjú Ìṣòro àti Ṣíṣe Ìpinnu",
  skills: "Ṣíṣàlàyé ìṣòro kedere, Wíwá ohun tó fà á pẹ̀lú 5 Whys (\"Kí ló dé?\" márùn-ún), Ríronú àwọn àṣàyàn pẹ̀lú AI, Fífi àwọn àṣàyàn wéra nínú tábìlì ìpinnu, Ṣíṣàyẹ̀wò èrò AI, Fífi ìmọ̀ràn hàn",
  outcome: "yanjú ìṣòro gidi kan níbi iṣẹ́ ní ìgbésẹ̀ kọ̀ọ̀kan pẹ̀lú AI gẹ́gẹ́ bí alábàáṣe èrò: kọ àlàyé ìṣòro tó yé, wá ohun tó fà á gan-an pẹ̀lú 5 Whys, kọ àwọn àṣàyàn sílẹ̀, fi wọ́n wéra nínú tábìlì ìpinnu, ṣàyẹ̀wò èrò AI, kí o sì fi ìmọ̀ràn ojú-ewé kan hàn ọ̀gá rẹ.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn òṣìṣẹ́ àti àwọn tó ń wá iṣẹ́ tí wọ́n fẹ́ jẹ́ ẹni tó ń yanjú ìṣòro, kì í ṣe ẹni tó ń ròyìn rẹ̀ nìkan: àwọn olórí ní ilé ìkẹ́rùsí àti ṣọ́ọ̀bù, òṣìṣẹ́ ìrànlọ́wọ́ ìlera, òṣìṣẹ́ ọ́fíìsì, iṣẹ́ ìtọ́jú oníbàárà àti àwọn oníṣẹ́ ọwọ́. Yíyanjú ìṣòro jẹ́ ọ̀kan lára ọgbọ́n tí àwọn agbanisíṣẹ́ ń béèrè jù.",
    "O máa kọ́ ọ̀nà tó rọrùn tí ó ń ṣiṣẹ́ fún ìṣòro èyíkéyìí, láti ìlà gígùn níbi ìsanwó dé ẹrù tí kò dé lásìkò tàbí ìlànà iṣẹ́ tó ń dàmú ènìyàn. Olùrànlọ́wọ́ AI ń ràn ọ́ lọ́wọ́ láti béèrè ìbéèrè tó dára jù, ronú àwọn àṣàyàn, kí o sì to èrò rẹ lẹ́sẹẹsẹ. Ìwọ ló ń mú òtítọ́ wá, ìwọ ló sì ń ṣe ìpinnu.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Má ṣe fi ìsọfúnni àṣírí ilé-iṣẹ́ tàbí ti oníbàárà sínú irinṣẹ́ AI, kí o sì tẹ̀lé òfin ibi iṣẹ́ rẹ."
  ],
  finalTask: "Yan ìṣòro gidi kan níbi iṣẹ́ (tàbí àpẹẹrẹ tó dà bí gidi) kí o sì ṣe ìmọ̀ràn ojú-ewé kan: àlàyé ìṣòro pẹ̀lú òtítọ́, ohun tó fà á gan-an láti 5 Whys, ó kéré tán àṣàyàn mẹ́rin (àwọn kan láti ọ̀dọ̀ AI), tábìlì ìpinnu pẹ̀lú àwọn òṣùwọ̀n tí ó ní ìwúwo, àkọsílẹ̀ ohun tí o ṣàyẹ̀wò nínú èrò AI, àti ìmọ̀ràn rẹ pẹ̀lú ìgbésẹ̀ àkọ́kọ́ àti bí o ṣe máa wọn àṣeyọrí.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn òṣìṣẹ́ àti àwọn tó ń wá iṣẹ́ tí wọ́n fẹ́ jẹ́ ẹni tó ń yanjú ìṣòro, kì í ṣe ẹni tó ń ròyìn rẹ̀ nìkan: àwọn olórí ní ilé ìkẹ́rùsí àti ṣọ́ọ̀bù, òṣìṣẹ́ ìrànlọ́wọ́ ìlera, òṣìṣẹ́ ọ́fíìsì, iṣẹ́ ìtọ́jú oníbàárà àti àwọn oníṣẹ́ ọwọ́.",
    startingPoint: "Wọ́n máa ń rí ìṣòro níbi iṣẹ́, wọ́n sì sábà máa ń ní èrò, wọ́n sì lè lo smartphone tàbí kọ̀mpútà. Ọ̀pọ̀ jù lọ kò tíì lo ọ̀nà tó ní ètò bí 5 Whys tàbí tábìlì ìpinnu, díẹ̀ ló sì ti lo AI gẹ́gẹ́ bí alábàáṣe èrò tàbí ṣàyẹ̀wò èrò rẹ̀.",
    gap: "Yíyanjú ìṣòro jẹ́ ọ̀kan lára ọgbọ́n tí àwọn agbanisíṣẹ́ ń béèrè jù, ṣùgbọ́n ẹ̀dùn ọkàn tí kò ní òtítọ́ àti àtúnṣe tí kò wá ohun tó fà á kì í sábà rí ìfọwọ́sí. Àwọn akẹ́kọ̀ọ́ nílò ọ̀nà ìgbésẹ̀-sí-ìgbésẹ̀, láti àlàyé ìṣòro dé ìmọ̀ràn, tí ó ń lo AI láti fẹ̀ èrò wọn lójú, nígbà tí wọ́n ń ṣàyẹ̀wò èrò rẹ̀ tí wọ́n sì ń ni ìpinnu náà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ń fi ọ̀nà kọ̀ọ̀kan hàn ní ìgbésẹ̀ kọ̀ọ̀kan",
      "Ẹ̀rọ: kọ̀mpútà tàbí smartphone; spreadsheet ọ̀fẹ́ ń ṣèrànwọ́ fún tábìlì ìpinnu",
      "Ìkọ̀kọ̀ àti ìlànà: kò sí ìsọfúnni àṣírí oníbàárà nínú irinṣẹ́ AI; òfin AI ibi iṣẹ́ ló ṣáájú",
      "Òtítọ́: a ń ṣàyẹ̀wò nọ́mbà, òfin àti ìlànà láti ọ̀dọ̀ AI pẹ̀lú ìsọfúnni gidi, orísun ìjọba tàbí ọ̀gá",
      "Àkókò: ẹ̀kọ́ tó tó nǹkan bí ìṣẹ́jú 5; kíkó òtítọ́ jọ nípa ìṣòro gidi lè gba ọ̀sẹ̀ kan"
    ],
    prerequisites: "Kò sí. \"Àwọn Irinṣẹ́ AI Pàtàkì fún Ibi Iṣẹ́\" (Essential AI Tools for the Workplace) ń ran àwọn tí wọ́n ṣẹ̀ṣẹ̀ ń lo olùrànlọ́wọ́ AI lọ́wọ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ẹ̀dùn ọkàn tí kò yé níbi iṣẹ́", action: "kọ àlàyé ìṣòro tó yé tí ó ní òtítọ́, pẹ̀lú AI tó ń béèrè ìbéèrè tí ó ń mú un ṣe kedere", standard: "tí ó sọ kí ni, níbo, ìgbà wo, bí ó ṣe tóbi tó àti ìdí tí ó fi ṣe pàtàkì" },
    { id: "O2", condition: "Tí a bá fún ọ ní àlàyé ìṣòro", action: "lo 5 Whys láti wá ohun tó fà á gan-an", standard: "pẹ̀lú ìdí èyíkéyìí tí AI dábàá tí a ti ṣàyẹ̀wò pẹ̀lú òtítọ́ tàbí àwọn alábàáṣiṣẹ́" },
    { id: "O3", condition: "Tí a bá fún ọ ní ohun tó fa ìṣòro gan-an", action: "ṣe àkọsílẹ̀ àwọn ọ̀nà àbáyọ tó ṣeé ṣe pẹ̀lú AI, àwọn alábàáṣiṣẹ́ àti ìrírí ara rẹ", standard: "kí o sì pa ó kéré tán mẹ́rin tó bá a mu mọ́, títí kan \"má yí nǹkan kan padà\"" },
    { id: "O4", condition: "Tí a bá fún ọ ní ó kéré tán àṣàyàn mẹ́rin", action: "fi àwọn àṣàyàn wéra nínú tábìlì ìpinnu pẹ̀lú àwọn òṣùwọ̀n tí ó ní ìwúwo", standard: "pẹ̀lú ìwúwo àti máàkì tí ìwọ fúnra rẹ fi sí, tí àpapọ̀ sì tọ̀nà" },
    { id: "O5", condition: "Tí a bá fún ọ ní èrò AI nípa àwọn àṣàyàn rẹ", action: "ṣàyẹ̀wò èrò náà fún nọ́mbà àhùsọ àti òfin tí a kò ṣàyẹ̀wò, kí o sì béèrè ìdí tí kò fi yẹ", standard: "kí o kọ ó kéré tán nǹkan méjì tí o ti fìdí rẹ̀ múlẹ̀ sílẹ̀" },
    { id: "O6", condition: "Ní lílo ìwádìí rẹ", action: "kọ ìmọ̀ràn ojú-ewé kan pẹ̀lú ìgbésẹ̀ àkọ́kọ́, ìdánrawò kékeré àti òṣùwọ̀n àṣeyọrí", standard: "pẹ̀lú kókó ọ̀rọ̀ ní àwọn ìlà àkọ́kọ́ àti gbogbo apá méje" }
  ],
  chapters: [
    {
      name: "Orí 1: Lílóye ìṣòro náà",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kíkọ àlàyé ìṣòro tó yé",
          minutes: 5,
          goal: "Sọ ẹ̀dùn ọkàn tí kò yé di àlàyé ìṣòro tó yé tí ó ní òtítọ́.",
          text: [
            "\"Nǹkan ti dàrú\" kì í ṣe ìṣòro tí o lè yanjú. Àlàyé ìṣòro tó yé ń sọ ohun tó ń ṣẹlẹ̀, níbo, ìgbà wo, bí ó ṣe tóbi tó, àti ìdí tí ó fi ṣe pàtàkì. Àpẹẹrẹ: \"Ní ìrọ̀lẹ́ ọjọ́ iṣẹ́ láti agogo 5 sí 7 alẹ́, àwọn oníbàárà ń dúró ní ìwọ̀n ìṣẹ́jú 12 níbi ìsanwó, a sì ń gba nǹkan bí ẹ̀dùn ọkàn 5 lọ́sẹ̀.\"",
            "Lo òtítọ́ tí o lè rí tàbí kà: àkókò, nọ́mbà, bí ó ṣe máa ń ṣẹlẹ̀ tó. Tí o kò bá ní nọ́mbà, kó díẹ̀ jọ fún ọ̀sẹ̀ kan.",
            "AI lè ṣèrànwọ́: \"Àlàyé mi tí kò tíì dán nìyí. Béèrè ìbéèrè márùn-ún lọ́wọ́ mi tí yóò mú un di àlàyé ìṣòro tó yé.\" Dídáhùn àwọn ìbéèrè yẹn sábà máa ń fi ohun tí o nílò láti mọ̀ gan-an hàn ọ́."
          ],
          steps: ["Kọ ìṣòro náà ní ọ̀rọ̀ ara rẹ.", "Fi kí ni, níbo, ìgbà wo, bí ó ṣe tóbi tó àti ìdí tí ó fi ṣe pàtàkì kún un.", "Fi ohun tí o kà tàbí wọ̀n rọ́pò ìméfò.", "Ní kí AI béèrè ìbéèrè tí yóò mú un ṣe kedere, lẹ́yìn náà tún un kọ."],
          words: [["Àlàyé ìṣòro (problem statement)", "àlàyé kúkúrú tí ó ní òtítọ́ nípa ìṣòro kan."], ["Data", "òtítọ́ àti nọ́mbà tí o lè kà tàbí wọ̀n."]],
          slides: [
            { title: "Èyí tí kò yé àti èyí tó yé", bullets: ["Kò yé: \"Nǹkan ti dàrú\"", "Ó yé: kí ni, níbo, ìgbà wo, bí ó ṣe tóbi tó, ìdí tí ó fi ṣe pàtàkì"] },
            { title: "Àpẹẹrẹ", bullets: ["Ọjọ́ iṣẹ́, agogo 5-7 alẹ́", "Ìdúró ìṣẹ́jú 12 ní ìwọ̀n níbi ìsanwó", "Nǹkan bí ẹ̀dùn ọkàn 5 lọ́sẹ̀"] },
            { title: "Mú un ṣe kedere pẹ̀lú AI", bullets: ["\"Béèrè ìbéèrè márùn-ún lọ́wọ́ mi kí èyí lè yé sí i\"", "Fi òtítọ́ dáhùn, lẹ́yìn náà tún un kọ"] }
          ],
          tryIt: "Yan ìṣòro gidi tàbí àpẹẹrẹ kan níbi iṣẹ́. Kọ àlàyé rẹ̀ bí ó ṣe wá sí ọ lọ́kàn, ní kí AI béèrè ìbéèrè márùn-ún tí yóò mú un ṣe kedere, dáhùn wọn, kí o sì tún un kọ bí àlàyé ìṣòro tó yé.",
          youCanNow: "kọ àlàyé ìṣòro tó yé tí ó ní òtítọ́.",
          quickCheck: [
            { objective: "O1", q: "Kí ni àlàyé ìṣòro tó yé máa ń ní?", options: ["Ẹni tí ẹ̀bi rẹ̀ jẹ́", "Kí ni, níbo, ìgbà wo, bí ó ṣe tóbi tó àti ìdí tí ó fi ṣe pàtàkì", "Bí ọkàn rẹ ṣe rí nípa rẹ̀ nìkan", "Ọ̀nà àbáyọ tí o ti fẹ́ tẹ́lẹ̀"], answer: 1, why: "Àlàyé tó yé ń ṣàpèjúwe òtítọ́ ìṣòro náà, kì í ṣe ẹ̀bi tàbí ọ̀nà àbáyọ." },
            { objective: "O1", q: "Àkọsílẹ̀ rẹ sọ pé \"Ẹrù máa ń pẹ́ dé nígbà gbogbo.\" Kí ni o máa ṣe tẹ̀lé e?", options: ["Fi ránṣẹ́ sí ọ̀gá rẹ bí ó ti rí", "Fi \"gan-an\" kún un láti tẹnu mọ́ ọn", "Dá àwọn awakọ̀ lẹ́bi", "Dáhùn ìbéèrè AI tí ó ń mú un ṣe kedere, kí o sì fi òtítọ́ kún un bí ọjọ́ wo àti bí ó ṣe pẹ́ tó"], answer: 3, why: "Àwọn ìbéèrè tí ó ń mú nǹkan ṣe kedere ń sọ ẹ̀dùn ọkàn tí kò yé di òtítọ́ tí o lè ṣiṣẹ́ lé lórí." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wíwá ohun tó fà á gan-an pẹ̀lú 5 Whys",
          minutes: 5,
          goal: "Lo 5 Whys láti wá ohun tó wà lẹ́yìn ìṣòro kan.",
          text: [
            "Títún àmì ìṣòro ṣe nìkan máa ń jẹ́ kí ìṣòro náà padà wá. 5 Whys (\"Kí ló dé?\" márùn-ún) ń ràn ọ́ lọ́wọ́ láti walẹ̀ dé ohun tó fà á gan-an: béèrè \"Kí ló dé?\" nípa ìṣòro náà, lẹ́yìn náà béèrè \"Kí ló dé?\" nípa ìdáhùn yẹn, ní nǹkan bí ìgbà márùn-ún.",
            "Àpẹẹrẹ: Ìlà gígùn níbi ìsanwó. Kí ló dé? Ẹ̀rọ ìsanwó kan ṣoṣo ló ṣí ní agogo 5. Kí ló dé? Ìyípo iṣẹ́ cashier kan ń parí ní agogo 5. Kí ló dé? A ṣe ètò àkókò iṣẹ́ fún èrò àárọ̀. Kí ló dé? Kò sí ẹni tó wo títà ìrọ̀lẹ́ nígbà tí a ń ṣe é. Ohun tó fà á gan-an: ètò àkókò iṣẹ́ kò bá ìbéèrè ìrọ̀lẹ́ mu.",
            "AI lè dábàá àwọn \"kí ló dé\" tí o kò ronú sí, ṣùgbọ́n ìwọ àti àwọn alábàáṣiṣẹ́ rẹ nìkan ló mọ èyí tó jẹ́ òótọ́. Ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan pẹ̀lú òtítọ́ tàbí nípa bíbéèrè lọ́wọ́ àwọn tó ń ṣe iṣẹ́ náà."
          ],
          steps: ["Kọ àlàyé ìṣòro sí òkè.", "Béèrè \"Kí ló dé?\" kí o sì kọ ìdáhùn.", "Béèrè \"Kí ló dé?\" nípa ìdáhùn yẹn; tún un ṣe ní nǹkan bí ìgbà márùn-ún.", "Ṣàyẹ̀wò ìdáhùn kọ̀ọ̀kan pẹ̀lú òtítọ́ tàbí àwọn alábàáṣiṣẹ́.", "Fa òrùka yí ohun tó fà á gan-an ká."],
          words: [["Ohun tó fà á gan-an (root cause)", "ìdí tó jinlẹ̀ tí ìṣòro fi ń ṣẹlẹ̀."], ["Àmì ìṣòro (symptom)", "àmì tí ó fi ìṣòro hàn, kì í ṣe ohun tó fà á."], ["5 Whys", "ọ̀nà bíbéèrè \"kí ló dé?\" ní ọ̀pọ̀ ìgbà láti wá ohun tó fa ìṣòro gan-an."]],
          slides: [
            { title: "Àmì ìṣòro àti ohun tó fà á gan-an", bullets: ["Títún àmì ṣe: ìṣòro ń padà wá", "Títún ohun tó fà á gan-an ṣe: ìṣòro ń lọ"] },
            { title: "Béèrè \"Kí ló dé?\" ní nǹkan bí ìgbà márùn-ún", bullets: ["Ìlà gùn -> ẹ̀rọ ìsanwó kan ló ṣí", "-> ìyípo iṣẹ́ ń parí ní 5 -> ètò àkókò wà fún àárọ̀", "Ohun tó fà á: ètò àkókò kò bá ìbéèrè ìrọ̀lẹ́ mu"] },
            { title: "AI ń dábàá, ìwọ ń fìdí rẹ̀ múlẹ̀", bullets: ["AI lè fúnni ní \"kí ló dé\" tó ṣeé ṣe", "Ṣàyẹ̀wò ọ̀kọ̀ọ̀kan pẹ̀lú òtítọ́ tàbí àwọn alábàáṣiṣẹ́"] }
          ],
          tryIt: "Ṣe 5 Whys lórí ìṣòro rẹ. Ní kí AI fún ọ ní àwọn ìdí míì tó ṣeé ṣe, lẹ́yìn náà ṣàyẹ̀wò èyí tó jẹ́ òótọ́ pẹ̀lú òtítọ́ tàbí alábàáṣiṣẹ́ kan. Fa òrùka yí ohun tó fà á gan-an ká.",
          youCanNow: "wá ohun tó fa ìṣòro kan gan-an nípa lílo 5 Whys.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìyàtọ̀ láàárín àmì ìṣòro àti ohun tó fà á gan-an?", options: ["Àmì ń fi ìṣòro hàn; ohun tó fà á gan-an ni ìdí tó jinlẹ̀ tí ó fi ń ṣẹlẹ̀", "Ìtumọ̀ kan náà ni wọ́n ní", "Àmì máa ń tóbi jù nígbà gbogbo", "Ohun tó fà á gan-an ni ohun tí àwọn oníbàárà ń ṣe ẹ̀dùn ọkàn nípa rẹ̀"], answer: 0, why: "Títún àmì nìkan ṣe ń jẹ́ kí ìṣòro padà wá; ohun tó fà á gan-an ni ìdí tí ó fi ń ṣẹlẹ̀." },
            { objective: "O2", q: "AI dábàá pé ohun tó fà á gan-an ni \"àwọn òṣìṣẹ́ kò bìkítà\". Kò dá ọ lójú. Kí ni o máa ṣe?", options: ["Kọ ọ́ sílẹ̀ gẹ́gẹ́ bí ohun tó fà á", "Sọ fún ọ̀gá rẹ pé àwọn òṣìṣẹ́ kò bìkítà", "Ṣàyẹ̀wò rẹ̀ pẹ̀lú òtítọ́ tàbí àwọn alábàáṣiṣẹ́ kí o tó gbà á", "Dá 5 Whys dúró"], answer: 2, why: "Àbá AI jẹ́ èrò tí a ó ṣàyẹ̀wò, kì í ṣe ìdí tí a ti fìdí rẹ̀ múlẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ríronú àwọn àṣàyàn pẹ̀lú AI",
          minutes: 5,
          goal: "Ṣe àkọsílẹ̀ ó kéré tán ọ̀nà àbáyọ mẹ́rin tó ṣeé ṣe, kí o sì lo AI láti fẹ̀ èrò rẹ lójú.",
          text: [
            "Ọ̀pọ̀ ènìyàn máa ń sáré mú ọ̀nà àbáyọ àkọ́kọ́. Ìpinnu tó dára jù máa ń wá láti fífi ọ̀pọ̀ wéra. Gbìyànjú láti ní ó kéré tán àṣàyàn mẹ́rin, títí kan \"má yí nǹkan kan padà\" gẹ́gẹ́ bí ìpìlẹ̀ ìfiwéra.",
            "Ní kí AI ronú èrò jáde: \"Ohun tó fà á gan-an ni pé ètò àkókò iṣẹ́ wa kò bá ìbéèrè ìrọ̀lẹ́ mu ní ṣọ́ọ̀bù oúnjẹ kékeré kan. Fún mi ní ọ̀nà àbáyọ mẹ́jọ tó ṣeé ṣe, láti èyí tí kò wọ́n tí ó sì yára dé àwọn ìyípadà ńlá.\" Ó lè dábàá èrò bí yíyí àkókò ìsinmi padà, ìlà ìsanwó-ara-ẹni (self-checkout), tàbí kíkọ́ àwọn tó ń to ẹrù ní iṣẹ́ míì.",
            "Pa èrò tí kò bá ibi iṣẹ́ rẹ mu tàbí tí o kò lè rí ìfọwọ́sí fún láéláé rẹ́, kí o sì fi èrò àwọn alábàáṣiṣẹ́ kún un. Àwọn tó ń ṣe iṣẹ́ náà ló sábà máa ń ní èrò tó dára jù."
          ],
          steps: ["Kọ ohun tó fà á gan-an.", "Ní kí AI fún ọ ní àṣàyàn mẹ́fà sí mẹ́jọ láti kékeré dé ńlá.", "Pa àwọn tí kò bá a mu rẹ́.", "Fi èrò àwọn alábàáṣiṣẹ́ kún un.", "Pa ó kéré tán mẹ́rin mọ́, títí kan \"má yí nǹkan kan padà\"."],
          words: [["Àṣàyàn (option)", "ọ̀nà àbáyọ kan tó ṣeé ṣe."], ["Ríronú èrò jáde (brainstorm)", "kíkọ ọ̀pọ̀ èrò sílẹ̀ kíákíá láìtíì dá wọn lẹ́jọ́."], ["Ìpìlẹ̀ ìfiwéra (baseline)", "ohun tí yóò ṣẹlẹ̀ tí o kò bá yí nǹkan kan padà."]],
          slides: [
            { title: "Má ṣe dúró ní èrò àkọ́kọ́", bullets: ["Fi ó kéré tán àṣàyàn mẹ́rin wéra", "Fi \"má yí nǹkan kan padà\" kún un"] },
            { title: "AI ń fẹ̀ èrò rẹ lójú", bullets: ["Fún un ní ohun tó fà á gan-an", "Béèrè àṣàyàn láti kékeré dé ńlá"] },
            { title: "Jẹ́ kí ó bá ayé gidi mu", bullets: ["Pa èrò tí kò bá a mu rẹ́", "Fi èrò àwọn alábàáṣiṣẹ́ kún un", "Àwọn tó ń ṣe iṣẹ́ náà ló sábà mọ̀ jù"] }
          ],
          tryIt: "Ní kí AI fún ọ ní àṣàyàn mẹ́jọ láti tún ohun tó fa ìṣòro rẹ ṣe. Pa àwọn tí kò bá a mu rẹ́, fi ọ̀kan kún un láti ọ̀dọ̀ alábàáṣiṣẹ́ tàbí láti inú ìrírí ara rẹ, kí o sì pa ó kéré tán mẹ́rin mọ́.",
          youCanNow: "ronú kí o sì dín àkọsílẹ̀ àwọn àṣàyàn tó ṣeé ṣe kù pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ríronú èrò jáde (brainstorm) túmọ̀ sí?", options: ["Mú èrò àkọ́kọ́", "Dá èrò kọ̀ọ̀kan lẹ́jọ́ ní kété tí o gbọ́ ọ", "Béèrè lọ́wọ́ ọ̀gá rẹ nìkan", "Kọ ọ̀pọ̀ èrò sílẹ̀ kíákíá láìtíì dá wọn lẹ́jọ́"], answer: 3, why: "Ríronú èrò jáde ń kó ọ̀pọ̀ èrò jọ ní àkọ́kọ́; o máa dá wọn lẹ́jọ́ lẹ́yìn náà." },
            { objective: "O3", q: "AI fún ọ ní àṣàyàn mẹ́jọ, méjì nínú wọn sì nílò owó tí ṣọ́ọ̀bù rẹ kò ní. Kí ni o máa ṣe?", options: ["Pa gbogbo wọn mọ́", "Pa àwọn tí kò bá a mu rẹ́ kí o sì fi ọ̀kan kún un láti ọ̀dọ̀ alábàáṣiṣẹ́", "Mú èyí tó wọ́n jù", "Ní kí AI fún ọ ní 50 míì"], answer: 1, why: "O máa pa àwọn àṣàyàn tó bá ibi iṣẹ́ rẹ mu mọ́, o sì máa fi èrò àwọn tó ń ṣe iṣẹ́ náà kún un." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Lílóye ìṣòro náà",
        questions: [
          { objective: "O1", q: "Èwo ni àlàyé ìṣòro tó yé jù?", options: ["\"Nǹkan ti dàrú.\"", "\"Ọjọ́ iṣẹ́ agogo 5-7 alẹ́, ìdúró níbi ìsanwó jẹ́ ìṣẹ́jú 12 ní ìwọ̀n, a sì ń gba nǹkan bí ẹ̀dùn ọkàn 5 lọ́sẹ̀.\"", "\"Àwọn oníbàárà ń dáni lágara.\"", "\"Tún un ṣe.\""], answer: 1, why: "Ó sọ kí ni, ìgbà wo, bí ó ṣe tóbi tó àti ìdí tí ó fi ṣe pàtàkì." },
          { objective: "O2", q: "Kí ni ohun tó fa ìṣòro gan-an?", options: ["Ẹ̀dùn ọkàn kan", "Ohun àkọ́kọ́ tí o kíyèsí", "Ewéko kan", "Ìdí tó jinlẹ̀ tí ìṣòro fi ń ṣẹlẹ̀"], answer: 3, why: "Títún ohun tó fà á gan-an ṣe ń dá ìṣòro náà dúró láti padà wá." },
          { objective: "O2", q: "Nínú 5 Whys, AI dábàá ìdí kan. Kí ni o máa ṣe?", options: ["Ṣàyẹ̀wò rẹ̀ pẹ̀lú òtítọ́ tàbí àwọn alábàáṣiṣẹ́", "Gbà á", "Kọ gbogbo èrò AI sílẹ̀", "Dá ẹnìkan lẹ́bi"], answer: 0, why: "Òtítọ́ nìkan ló lè fìdí ìdí kan múlẹ̀." },
          { objective: "O3", q: "Kí ló dé tí a fi ń fi \"má yí nǹkan kan padà\" kún àwọn àṣàyàn?", options: ["Òfin ló béèrè rẹ̀", "Òun ló dára jù nígbà gbogbo", "Ó ń fúnni ní ìpìlẹ̀ láti fi wéra", "Kò wúlò rárá"], answer: 2, why: "Ìpìlẹ̀ ìfiwéra ń fi ohun tí ìyípadà kọ̀ọ̀kan mú wá hàn." },
          { objective: "O3", q: "Ta ló sábà máa ń ní èrò tó dára jù láti yanjú ìṣòro níbi iṣẹ́?", options: ["Àwọn ọ̀rẹ́ oníbàárà", "AI nìkan", "Àwọn tó ń ṣe iṣẹ́ náà", "Kò sí ẹnìkan"], answer: 2, why: "Àwọn tó ń ṣe iṣẹ́ náà mọ àwọn kúlẹ̀kúlẹ̀ rẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe ìpinnu àti fífúnni ní ìmọ̀ràn",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fífi àwọn àṣàyàn wéra nínú tábìlì ìpinnu",
          minutes: 6,
          goal: "Fún àwọn àṣàyàn ní máàkì lórí àwọn òṣùwọ̀n tí ó ní ìwúwo nínú tábìlì ìpinnu.",
          text: [
            "Tábìlì ìpinnu (decision matrix) jẹ́ tábìlì tí ó ń fi àwọn àṣàyàn wéra lọ́nà tó tọ́. Àwọn àṣàyàn ń lọ sísàlẹ̀ ní ẹ̀gbẹ́; àwọn òṣùwọ̀n ń lọ kọjá ní òkè. Àwọn òṣùwọ̀n tí ó wọ́pọ̀: owó, àkókò láti ṣètò rẹ̀, bí ó ṣe ń tún ohun tó fà á gan-an ṣe tó, ipa rẹ̀ lórí àwọn oníbàárà, ipa rẹ̀ lórí àwọn alábàáṣiṣẹ́, àti ewu.",
            "Fún òṣùwọ̀n kọ̀ọ̀kan ní ìwúwo (1 sí 3) fún bí ó ṣe ṣe pàtàkì tó, fún àṣàyàn kọ̀ọ̀kan ní máàkì 1 sí 5 lórí òṣùwọ̀n kọ̀ọ̀kan, fi ìwúwo sọ máàkì di púpọ̀, kí o sì ṣe àròpọ̀. Àpapọ̀ tó ga jù jẹ́ àṣàyàn tó lágbára, kì í ṣe olùborí láìronú.",
            "O lè ní kí AI ṣe tábìlì òfìfo tàbí spreadsheet pẹ̀lú àwọn formula. Ìwọ lo máa yan ìwúwo àti máàkì láti inú òtítọ́ àti ohun tí ibi iṣẹ́ rẹ kà sí pàtàkì. Lẹ́yìn náà béèrè pé: ṣé olùborí náà bọ́gbọ́n mu? Tí kò bá bọ́gbọ́n mu, ṣàyẹ̀wò máàkì rẹ."
          ],
          steps: ["Kọ àwọn àṣàyàn rẹ sísàlẹ̀ ní ẹ̀gbẹ́.", "Yan òṣùwọ̀n mẹ́rin sí mẹ́fà kí o sì fún ọ̀kọ̀ọ̀kan ní ìwúwo 1-3.", "Fún àṣàyàn kọ̀ọ̀kan ní máàkì 1-5 lórí òṣùwọ̀n kọ̀ọ̀kan.", "Fi ìwúwo sọ máàkì di púpọ̀ (máàkì x ìwúwo) kí o sì ṣe àròpọ̀.", "Ṣàyẹ̀wò bóyá èsì náà bọ́gbọ́n mu."],
          words: [["Tábìlì ìpinnu (decision matrix)", "tábìlì tí ó ń fún àwọn àṣàyàn ní máàkì lórí àwọn òṣùwọ̀n."], ["Òṣùwọ̀n (criteria)", "àwọn nǹkan tí o fi ń dá àwọn àṣàyàn lẹ́jọ́, bí owó tàbí ewu."], ["Ìwúwo (weight)", "bí òṣùwọ̀n kan ṣe ṣe pàtàkì tó ní ìfiwéra pẹ̀lú àwọn míì."]],
          slides: [
            { title: "Ṣètò tábìlì náà", bullets: ["Àwọn àṣàyàn sísàlẹ̀ ní ẹ̀gbẹ́", "Àwọn òṣùwọ̀n kọjá ní òkè", "Owó, àkókò, títún ohun tó fà á ṣe, ènìyàn, ewu"] },
            { title: "Fún un ní máàkì", bullets: ["Fún òṣùwọ̀n kọ̀ọ̀kan ní ìwúwo 1-3", "Fún àṣàyàn kọ̀ọ̀kan ní máàkì 1-5", "Máàkì x ìwúwo, lẹ́yìn náà ṣe àròpọ̀"] },
            { title: "Ìwọ ló ń pinnu", bullets: ["AI lè ṣe tábìlì náà", "Ìwọ ló ń yan ìwúwo àti máàkì", "Ṣé olùborí náà bọ́gbọ́n mu?"] }
          ],
          tryIt: "Ṣe tábìlì ìpinnu fún àṣàyàn mẹ́rin rẹ pẹ̀lú ó kéré tán òṣùwọ̀n mẹ́rin tí ó ní ìwúwo. Lo AI láti ṣètò tábìlì tàbí spreadsheet, lẹ́yìn náà fi máàkì sí i fúnra rẹ kí o sì ṣe àròpọ̀ wọn.",
          youCanNow: "fi àwọn àṣàyàn wéra lọ́nà tó tọ́ pẹ̀lú tábìlì ìpinnu tí ó ní ìwúwo.",
          quickCheck: [
            { objective: "O4", q: "Nínú tábìlì ìpinnu, kí ni òṣùwọ̀n?", options: ["Ìdáhùn ìkẹyìn", "Ọ̀kan lára àwọn àṣàyàn", "Nǹkan tí o fi ń dá àwọn àṣàyàn lẹ́jọ́, bí owó tàbí ààbò", "Ẹni tó ń ṣe ìpinnu"], answer: 2, why: "Òṣùwọ̀n ni àwọn nǹkan tí o fi ń fún àṣàyàn kọ̀ọ̀kan ní máàkì." },
            { objective: "O4", q: "Àṣàyàn B ní máàkì 3 lórí ìyára (ìwúwo 2) àti 5 lórí owó (ìwúwo 1). Kí ni àpapọ̀ rẹ̀ fún méjèèjì yìí?", options: ["11", "8", "15", "10"], answer: 0, why: "Fi ìwúwo sọ máàkì kọ̀ọ̀kan di púpọ̀ kí o sì ṣe àròpọ̀: 3 x 2 + 5 x 1 = 11." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣàyẹ̀wò èrò AI",
          minutes: 5,
          goal: "Rí àwọn àṣìṣe tí ó wọ́pọ̀ nínú èrò AI kí o tó gbẹ́kẹ̀ lé e.",
          text: [
            "AI lè dún bí ó dá a lójú kí ó sì ṣì ṣàṣìṣe. Àwọn ìṣòro tí ó wọ́pọ̀: òtítọ́ tàbí nọ́mbà àhùsọ, àṣìṣe ìṣirò, èrò tí kò ka òfin tàbí owó ibi iṣẹ́ rẹ sí, àti gbígbàgbé apá ti ènìyàn (ẹ̀mí òṣìṣẹ́, ààbò, ìdájọ́ òdodo).",
            "Ní kí AI fi èrò rẹ̀ hàn: \"Ṣàlàyé ní ìgbésẹ̀ kọ̀ọ̀kan ìdí tí o fi fi àṣàyàn B sí ipò kìíní.\" Lẹ́yìn náà ní kí ó sọ̀rọ̀ fún ẹ̀gbẹ́ kejì: \"Kí ni àwọn ìdí tó lágbára jù tí kò fi yẹ kí a yan àṣàyàn B?\" Èyí sábà máa ń fi àwọn ibi tí kò lágbára hàn.",
            "Ṣàyẹ̀wò àwọn nọ́mbà fúnra rẹ, ṣàyẹ̀wò òfin tàbí ìlànà èyíkéyìí pẹ̀lú orísun ìjọba tàbí ọ̀gá rẹ, kí o sì béèrè èrò ọkàn alábàáṣiṣẹ́ kan. Kọ ohun tí o ṣàyẹ̀wò sílẹ̀; ó ń mú ìmọ̀ràn rẹ lágbára sí i."
          ],
          steps: ["Ní kí AI ṣàlàyé èrò rẹ̀ ní ìgbésẹ̀ kọ̀ọ̀kan.", "Béèrè ìdí tó lágbára jù tí kò fi yẹ kí a yan ohun tí ó yàn.", "Tún àwọn nọ́mbà àti ìṣirò ṣàyẹ̀wò fúnra rẹ.", "Ṣàyẹ̀wò òfin pẹ̀lú orísun ìjọba tàbí ọ̀gá rẹ.", "Béèrè èrò ọkàn alábàáṣiṣẹ́ kan kí o sì kọ ohun tí o ṣàyẹ̀wò sílẹ̀."],
          words: [["Èrò (reasoning)", "àwọn ìgbésẹ̀ ìrònú tí ó ń yọrí sí ìparí kan."], ["Agbẹjọ́rò èṣù (devil's advocate)", "sísọ̀rọ̀ fún ẹ̀gbẹ́ kejì ní mọ̀ọ́mọ̀ láti dán èrò kan wò."]],
          slides: [
            { title: "Dídá ni lójú kì í ṣe títọ̀nà", bullets: ["Òtítọ́ tàbí nọ́mbà àhùsọ", "Àṣìṣe ìṣirò", "Gbígbàgbé òfin, owó tàbí apá ti ènìyàn"] },
            { title: "Dán èrò náà wò", bullets: ["\"Ṣàlàyé ní ìgbésẹ̀ kọ̀ọ̀kan\"", "\"Kí ni àwọn ìdí tí KÒ fi yẹ kí a yan èyí?\""] },
            { title: "Ṣàyẹ̀wò kí o sì kọ ọ́ sílẹ̀", bullets: ["Tún àwọn nọ́mbà ṣàyẹ̀wò fúnra rẹ", "Òfin: orísun ìjọba tàbí ọ̀gá", "Èrò ọkàn alábàáṣiṣẹ́; kọ ohun tí o ṣàyẹ̀wò sílẹ̀"] }
          ],
          tryIt: "Béèrè lọ́wọ́ AI èwo nínú àwọn àṣàyàn rẹ ni ó máa yàn àti ìdí rẹ̀. Lẹ́yìn náà béèrè ìdí tó lágbára jù tí kò fi yẹ. Tún nọ́mbà kan ṣàyẹ̀wò kí o sì kọ nǹkan méjì tí o ti fìdí rẹ̀ múlẹ̀ sílẹ̀.",
          youCanNow: "dán èrò AI wò kí o sì rí àṣìṣe kí o tó gbẹ́kẹ̀ lé e.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni ìṣòro tí ó wọ́pọ̀ nínú èrò AI?", options: ["Ó máa ń kọ̀ láti dáhùn nígbà gbogbo", "Nọ́mbà àhùsọ tí ó dún bí gidi", "Orísun ìjọba nìkan ló ń lò", "Kò lè kọ tábìlì"], answer: 1, why: "AI lè hùmọ̀ nọ́mbà tí ó dún bí òótọ́, nítorí náà o máa tún wọn ṣàyẹ̀wò." },
            { objective: "O5", q: "AI sọ pé ìlànà ilé-iṣẹ́ gba àfikún àkókò iṣẹ́ (overtime) láàyè fún àtúnṣe rẹ. Kí ni o máa ṣe?", options: ["Fi í sínú ìmọ̀ràn rẹ", "Gbà pé òótọ́ ni", "Béèrè lọ́wọ́ AI bóyá ó dá a lójú", "Ṣàyẹ̀wò ìlànà náà pẹ̀lú orísun ìjọba tàbí ọ̀gá rẹ"], answer: 3, why: "Òfin àti ìlànà ń wá láti orísun ìjọba tàbí ọ̀gá rẹ, kì í ṣe láti AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fífi ìmọ̀ràn rẹ hàn",
          minutes: 5,
          goal: "Kọ ìmọ̀ràn ojú-ewé kan tí ọ̀gá rẹ lè ṣiṣẹ́ lé lórí.",
          text: [
            "Àwọn ọ̀gá máa ń fọwọ́ sí àbá tó yé tí ó sì kúrú. Lo ètò yìí: Ìṣòro (gbólóhùn kan tàbí méjì pẹ̀lú òtítọ́), Ohun tó fà á gan-an, Àwọn àṣàyàn tí a gbé yẹ̀ wò, Ìmọ̀ràn àti ìdí rẹ̀, Ìgbésẹ̀ àkọ́kọ́, Bí a ṣe máa wọn àṣeyọrí, Àwọn ewu àti bí a ṣe máa kojú wọn.",
            "Jẹ́ kí ó jẹ́ ojú-ewé kan. Ní kí AI mú àkọ́pẹrẹ rẹ kúrú: \"Ṣe èyí ní ìmọ̀ràn ojú-ewé kan fún ọ̀gá mi, kókó ọ̀rọ̀ ní àkọ́kọ́, ọ̀rọ̀ tó rọrùn.\" Lẹ́yìn náà ṣàyẹ̀wò pé gbogbo òtítọ́ àti nọ́mbà bá iṣẹ́ rẹ mu.",
            "Dábàá ìdánrawò kékeré ní àkọ́kọ́: \"Ẹ jẹ́ ká gbìyànjú rẹ̀ fún ọ̀sẹ̀ méjì ní ìrọ̀lẹ́ ọjọ́ Ìṣẹ́gun àti Ọjọ́bọ̀, ká sì wọn àkókò ìdúró.\" Ìdánrawò kékeré tí a lè wọ̀n rọrùn láti fọwọ́ sí, ó sì ń fi hàn pé èrò rẹ ṣiṣẹ́."
          ],
          steps: ["Kọ apá méje náà.", "Fi ìmọ̀ràn rẹ sí àwọn ìlà àkọ́kọ́.", "Ní kí AI mú un kúrú sí ojú-ewé kan.", "Ṣàyẹ̀wò gbogbo òtítọ́ àti nọ́mbà.", "Dábàá ìdánrawò kékeré tí a lè wọ̀n."],
          words: [["Ìmọ̀ràn (recommendation)", "àṣàyàn tí o dábàá àti ìdí rẹ̀."], ["Ìdánrawò (trial)", "ìdánwò kúkúrú, kékeré ti ìyípadà kan."], ["Òṣùwọ̀n àṣeyọrí (success measure)", "nọ́mbà tí ó ń fi hàn bóyá ìyípadà náà ṣiṣẹ́."]],
          slides: [
            { title: "Ètò ojú-ewé kan", bullets: ["Ìṣòro àti ohun tó fà á gan-an", "Àwọn àṣàyàn àti ìmọ̀ràn", "Ìgbésẹ̀ àkọ́kọ́, òṣùwọ̀n àṣeyọrí, ewu"] },
            { title: "Jẹ́ kí ó rọrùn láti sọ bẹ́ẹ̀ni", bullets: ["Kókó ọ̀rọ̀ ní àkọ́kọ́, ojú-ewé kan", "AI ń mú un kúrú; ìwọ ń ṣàyẹ̀wò òtítọ́"] },
            { title: "Dábàá ìdánrawò kékeré", bullets: ["\"Ọ̀sẹ̀ méjì, ìrọ̀lẹ́ méjì lọ́sẹ̀\"", "Wọn èsì rẹ̀", "Ó rọrùn láti fọwọ́ sí; ó ń fi hàn pé èrò náà ṣiṣẹ́"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ìmọ̀ràn ojú-ewé kan rẹ pẹ̀lú gbogbo apá méje, fi 5 Whys àti tábìlì ìpinnu rẹ mọ́ ọn, kọ ohun tí o ṣàyẹ̀wò nínú èrò AI sílẹ̀, kí o sì dábàá ìdánrawò kékeré pẹ̀lú òṣùwọ̀n àṣeyọrí.",
          youCanNow: "yanjú ìṣòro ibi iṣẹ́ ní ìgbésẹ̀ kọ̀ọ̀kan, kí o sì fi ìmọ̀ràn tí ọ̀gá rẹ lè ṣiṣẹ́ lé lórí hàn.",
          quickCheck: [
            { objective: "O6", q: "Kí ni òṣùwọ̀n àṣeyọrí?", options: ["Nọ́mbà tí ó ń fi hàn bóyá ìyípadà náà ṣiṣẹ́", "Bí ìròyìn rẹ ṣe gùn tó", "Iye ènìyàn tí ó fẹ́ràn èrò náà", "Ìfọwọ́sí ọ̀gá rẹ"], answer: 0, why: "Òṣùwọ̀n àṣeyọrí jẹ́ nọ́mbà tí o ń tọpinpin láti fi hàn pé ìyípadà náà ṣiṣẹ́." },
            { objective: "O6", q: "Ọ̀gá rẹ ní ìṣẹ́jú méjì. Báwo ni o ṣe máa bẹ̀rẹ̀ ìmọ̀ràn ojú-ewé kan rẹ?", options: ["Pẹ̀lú ìtàn ìṣòro náà", "Pẹ̀lú àkọsílẹ̀ gbogbo ẹni tí o bá sọ̀rọ̀", "Pẹ̀lú ìmọ̀ràn rẹ àti ìgbésẹ̀ àkọ́kọ́, ní àwọn ìlà àkọ́kọ́", "Pẹ̀lú tábìlì ìpinnu"], answer: 2, why: "Fífi kókó ọ̀rọ̀ sí àkọ́kọ́ ń jẹ́ kí ọ̀gá tí ọwọ́ rẹ̀ dí lè ṣiṣẹ́ lé e lórí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe ìpinnu àti fífúnni ní ìmọ̀ràn",
        questions: [
          { objective: "O4", q: "Nínú tábìlì ìpinnu, kí ni ìwúwo?", options: ["Bí òṣùwọ̀n kan ṣe ṣe pàtàkì tó", "Bí àpótí kan ṣe wúwo tó", "Máàkì fún àṣàyàn kan", "Ọ̀rọ̀ aṣínà"], answer: 0, why: "Ìwúwo ń fi bí nǹkan ṣe ṣe pàtàkì tó hàn." },
          { objective: "O4", q: "Àṣàyàn A ní máàkì 4 lórí owó (ìwúwo 3) àti 2 lórí ewu (ìwúwo 2). Àpapọ̀ rẹ̀ fún méjèèjì yìí ni:", options: ["6", "8", "12", "16"], answer: 3, why: "4 x 3 + 2 x 2 = 12 + 4 = 16." },
          { objective: "O5", q: "Ọ̀nà tó dára láti dán àṣàyàn AI wò ni láti béèrè pé:", options: ["\"Ṣé ó dá ọ lójú?\" nìkan", "\"Kí ni àwọn ìdí tó lágbára jù tí KÒ fi yẹ kí a yan èyí?\"", "Kò sí nǹkan", "\"Yàn fún mi\""], answer: 1, why: "Sísọ̀rọ̀ fún ẹ̀gbẹ́ kejì ń fi àwọn ibi tí kò lágbára hàn." },
          { objective: "O6", q: "Níbo ni kókó ọ̀rọ̀ ìmọ̀ràn yẹ kí ó wà?", options: ["Ní àwọn ìlà àkọ́kọ́", "Ní ìparí pátápátá", "Nínú àkíyèsí ìsàlẹ̀ ojú-ewé", "Kò sí ibì kankan"], answer: 0, why: "Àwọn ọ̀gá máa ń kọ́kọ́ ka ìbẹ̀rẹ̀." },
          { objective: "O6", q: "Kí ló dé tí a fi ń dábàá ìdánrawò kékeré?", options: ["Nítorí pé ó wọ́n jù", "Láti fi ìpinnu falẹ̀ títí láé", "Ó rọrùn láti fọwọ́ sí, ó sì ń fi hàn pé èrò náà ṣiṣẹ́", "Kò wúlò"], answer: 2, why: "Ìdánwò kékeré tí a lè wọ̀n ń dín ewu kù." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Yíyanjú Ìṣòro àti Ṣíṣe Ìpinnu",
    questions: [
      { objective: "O1", q: "Àlàyé ìṣòro tó yé ní:", options: ["Ẹ̀dùn ọkàn nìkan", "Kí ni, níbo, ìgbà wo, bí ó ṣe tóbi tó àti ìdí tí ó fi ṣe pàtàkì", "Ẹni tí a ó dá lẹ́bi", "Ọ̀nà àbáyọ"], answer: 1, why: "Àwọn apá wọ̀nyẹn ló ń jẹ́ kí ó ṣeé yanjú." },
      { objective: "O1", q: "Tí o kò bá ní nọ́mbà kankan nípa ìṣòro kan, o yẹ kí o:", options: ["Ní kí AI hùmọ̀ wọn", "Méfò", "Jáwọ́", "Kó díẹ̀ jọ fún ọ̀sẹ̀ kan"], answer: 3, why: "Òtítọ́ dára ju ìméfò lọ." },
      { objective: "O1", q: "Báwo ni AI ṣe lè ṣèrànwọ́ pẹ̀lú àlàyé ìṣòro?", options: ["Kò lè ṣèrànwọ́", "Nípa híhùmọ̀ òtítọ́", "Nípa ṣíṣe ìpinnu fún ọ", "Nípa bíbéèrè ìbéèrè lọ́wọ́ rẹ tí ó ń mú un ṣe kedere"], answer: 3, why: "Ìbéèrè tó dára ń fi ohun tí o nílò hàn." },
      { objective: "O2", q: "Àmì ìṣòro ni:", options: ["Ohun tó fà á gan-an", "Àmì tí ó fi ìṣòro hàn, kì í ṣe ohun tó fà á", "Ọ̀nà àbáyọ", "Irinṣẹ́ kan"], answer: 1, why: "Àwọn àmì ń tọ́ka sí ìdí tó jinlẹ̀." },
      { objective: "O2", q: "Nínú 5 Whys, o máa béèrè \"Kí ló dé?\" nípa:", options: ["Ní ìgbà àádọ́ta", "Lẹ́ẹ̀kan ṣoṣo", "Ìdáhùn kọ̀ọ̀kan, ní nǹkan bí ìgbà márùn-ún", "Kò sí nǹkan"], answer: 2, why: "\"Kí ló dé\" kọ̀ọ̀kan ń walẹ̀ jinlẹ̀ sí i." },
      { objective: "O2", q: "Nínú àpẹẹrẹ ibi ìsanwó, ohun tó fà á gan-an ni:", options: ["Ètò àkókò iṣẹ́ kò bá ìbéèrè ìrọ̀lẹ́ mu", "Àwọn oníbàárà ń lọ́ra", "Àwọn ẹ̀rọ ìsanwó ti gbó", "Òjò ń rọ̀"], answer: 0, why: "A ṣe ètò àkókò iṣẹ́ náà fún àárọ̀." },
      { objective: "O3", q: "Ó kéré tán, àṣàyàn mélòó ni o yẹ kí o fi wéra?", options: ["Kò sí", "Ọ̀kan", "Mẹ́rin, títí kan má yí nǹkan kan padà", "Èrò àkọ́kọ́ AI nìkan"], answer: 2, why: "Fífi ọ̀pọ̀ wéra ń yọrí sí ìpinnu tó dára jù." },
      { objective: "O3", q: "Ríronú èrò jáde (brainstorm) túmọ̀ sí:", options: ["Kíkọ ọ̀pọ̀ èrò sílẹ̀ kíákíá láìtíì dá wọn lẹ́jọ́", "Ṣíṣe ìpinnu kíákíá", "Jíjiyàn", "Kíkọ ìròyìn"], answer: 0, why: "Dídá lẹ́jọ́ máa ń wá lẹ́yìn náà." },
      { objective: "O3", q: "AI dábàá èrò kan tí ibi iṣẹ́ rẹ kò lè fọwọ́ sí láéláé. O máa:", options: ["Tẹnu mọ́ ọn", "Pa á rẹ́", "Fi í pamọ́", "San owó rẹ̀ fúnra rẹ"], answer: 1, why: "Pa àwọn àṣàyàn tó ṣeé ṣe mọ́." },
      { objective: "O4", q: "Èwo ni òṣùwọ̀n tí ó wọ́pọ̀ nínú tábìlì ìpinnu?", options: ["Ojú ọjọ́ ọ̀la", "Àwọ̀ tí o fẹ́ràn jù", "Nọ́mbà oríire", "Owó"], answer: 3, why: "Owó jẹ́ òṣùwọ̀n pàtàkì." },
      { objective: "O4", q: "Máàkì nínú tábìlì ẹ̀kọ́ yìí ń lọ láti:", options: ["1 sí 5", "1 sí 100", "A sí Z", "0 sí 1 nìkan"], answer: 0, why: "Ìwọ̀n 1-5 tó rọrùn." },
      { objective: "O4", q: "Àpapọ̀ tó ga jù nínú tábìlì ni:", options: ["Kò wúlò", "Ìdáhùn náà láìronú", "Ó máa ń ṣàṣìṣe nígbà gbogbo", "Àṣàyàn tó lágbára, tí o ṣì máa ṣàyẹ̀wò bóyá ó bọ́gbọ́n mu"], answer: 3, why: "Ṣàyẹ̀wò pé èsì náà bọ́gbọ́n mu." },
      { objective: "O4", q: "Ta ló ń yan ìwúwo àti máàkì?", options: ["Nọ́mbà èyíkéyìí", "AI nìkan", "Ìwọ, láti inú òtítọ́ àti ohun tí ibi iṣẹ́ rẹ kà sí pàtàkì", "Kò sí ẹnìkan"], answer: 2, why: "Ìdájọ́ wà lọ́wọ́ rẹ." },
      { objective: "O5", q: "Èwo ni ìṣòro tí ó wọ́pọ̀ nínú èrò AI?", options: ["Ó máa ń ṣọ́ra jù nígbà gbogbo", "Nọ́mbà àhùsọ", "Kíkọ̀ láti kọ̀wé", "Ìṣirò tí kò lábùkù"], answer: 1, why: "AI lè hùmọ̀ àwọn nọ́mbà." },
      { objective: "O5", q: "Òfin àti ìlànà nínú ìdáhùn AI ni a gbọ́dọ̀ ṣàyẹ̀wò pẹ̀lú:", options: ["Kò sí ẹnìkan", "AI míì nìkan", "Àhesọ", "Orísun ìjọba tàbí ọ̀gá rẹ"], answer: 3, why: "Òfin nílò orísun tí a lè gbẹ́kẹ̀ lé." },
      { objective: "O5", q: "Kí ló dé tí o fi máa kọ ohun tí o ṣàyẹ̀wò sílẹ̀?", options: ["Kò wúlò", "Láti kún ààyè", "Ó ń mú ìmọ̀ràn rẹ lágbára sí i", "Láti dá AI lẹ́bi"], answer: 2, why: "Ó ń fi iṣẹ́ tí a ṣe pẹ̀lú ìṣọ́ra hàn." },
      { objective: "O5", q: "Èwo ni kò gbọdọ̀ wọ inú irinṣẹ́ AI láéláé nígbà tí o bá ń yanjú ìṣòro?", options: ["Ìsọfúnni àṣírí oníbàárà", "Àlàyé gbogbogbò nípa ìṣòro náà", "Àkọsílẹ̀ àwọn àṣàyàn rẹ", "Orúkọ àwọn òṣùwọ̀n"], answer: 0, why: "Ìsọfúnni àṣírí gbọ́dọ̀ wà níta." },
      { objective: "O6", q: "Ìmọ̀ràn ojú-ewé kan ní:", options: ["Èrò rẹ nìkan", "Ìṣòro, ohun tó fà á gan-an, àṣàyàn, ìmọ̀ràn, ìgbésẹ̀ àkọ́kọ́, òṣùwọ̀n, ewu", "Gbogbo ímeèlì tí o ti fi ránṣẹ́", "Ọ̀rọ̀ aṣínà"], answer: 1, why: "Àwọn apá wọ̀nyẹn ló ń jẹ́ kí a lè ṣiṣẹ́ lé e lórí." },
      { objective: "O6", q: "Òṣùwọ̀n àṣeyọrí ni:", options: ["Owó oṣù rẹ", "Nọ́mbà tí ó ń fi hàn bóyá ìyípadà náà ṣiṣẹ́", "Ọ̀rọ̀ ìyìn", "Ìméfò"], answer: 1, why: "Òṣùwọ̀n ń fi èsì hàn." },
      { objective: "O6", q: "Ìdánrawò wo ló dára jù láti dábàá?", options: ["Ọ̀sẹ̀ méjì ní ìrọ̀lẹ́ méjì, pẹ̀lú wíwọn àkókò ìdúró", "Yí gbogbo nǹkan padà títí láé lẹ́sẹ̀kẹsẹ̀", "Kò sí ìdánrawò, kò sí òṣùwọ̀n", "Ìyípadà ìkọ̀kọ̀"], answer: 0, why: "Ìdánrawò kékeré tí a wọ̀n rọrùn láti fọwọ́ sí." }
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
      9,
      11,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àlàyé ìṣòro",
        objective: "O1",
        notYet: "Àlàyé náà kò yé tàbí kò ní òtítọ́ kankan.",
        meets: "Ó sọ kí ni, níbo, ìgbà wo, bí ó ṣe tóbi tó àti ìdí tí ó fi ṣe pàtàkì, pẹ̀lú òtítọ́.",
        exceeds: "Ó ní àwọn nọ́mbà tí akẹ́kọ̀ọ́ fúnra rẹ̀ kó jọ."
      },
      {
        name: "Ohun tó fà á gan-an",
        objective: "O2",
        notYet: "Kò sí 5 Whys, tàbí a gba ìdí náà láti ọ̀dọ̀ AI láìṣàyẹ̀wò.",
        meets: "Ọ̀wọ́ 5 Whys tí ó dé ohun tó fà á gan-an, tí a ti ṣàyẹ̀wò pẹ̀lú òtítọ́ tàbí àwọn alábàáṣiṣẹ́.",
        exceeds: "Ó fi àwọn ìdí tí AI dábàá tí a yọ kúrò hàn, àti ìdí rẹ̀."
      },
      {
        name: "Àwọn àṣàyàn àti tábìlì",
        objective: "O4",
        notYet: "Àṣàyàn kò tó mẹ́rin, tàbí kò sí tábìlì tí ó ní ìwúwo.",
        meets: "Ó kéré tán àṣàyàn mẹ́rin títí kan má yí nǹkan kan padà, tí a fún ní máàkì nínú tábìlì pẹ̀lú ó kéré tán òṣùwọ̀n mẹ́rin tí ó ní ìwúwo àti àpapọ̀ tó tọ̀nà.",
        exceeds: "Akẹ́kọ̀ọ́ ṣàlàyé ìdí tí àwọn ìwúwo fi bá ibi iṣẹ́ rẹ̀ mu."
      },
      {
        name: "A ti ṣàyẹ̀wò èrò AI",
        objective: "O5",
        notYet: "Kò sí àkọsílẹ̀ ohun tí a ṣàyẹ̀wò.",
        meets: "Àkọsílẹ̀ ó kéré tán nǹkan méjì tí a fìdí rẹ̀ múlẹ̀ nínú èrò AI, kò sì sí ìsọfúnni àṣírí tí a lò.",
        exceeds: "Ó ní ìdí tó lágbára jù tí kò fi yẹ kí a yan àṣàyàn náà, àti ìdáhùn sí i."
      },
      {
        name: "Ìmọ̀ràn",
        objective: "O6",
        notYet: "Kókó ọ̀rọ̀ sin sí inú, tàbí ìgbésẹ̀ àti òṣùwọ̀n kò sí.",
        meets: "Ojú-ewé kan pẹ̀lú kókó ọ̀rọ̀ ní àkọ́kọ́, ìgbésẹ̀ àkọ́kọ́, ìdánrawò kékeré àti òṣùwọ̀n àṣeyọrí.",
        exceeds: "Ó kọ àwọn ewu sílẹ̀ àti bí a ṣe máa kojú wọn."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi ìmọ̀ràn wọn hàn ọ̀gá láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn ìmọ̀ràn tí ó yọrí sí ìdánrawò tàbí ìyípadà níbi iṣẹ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn ìgbéga, ipò olórí tàbí iṣẹ́ tuntun láàárín oṣù 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí smartphone tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini, tàbí irinṣẹ́ tí ibi iṣẹ́ fọwọ́ sí",
      "Spreadsheet ọ̀fẹ́ (Google Sheets tàbí Microsoft Excel lórí ayélujára) tàbí ìwé fún tábìlì ìpinnu",
      "Ìṣòro gidi kan níbi iṣẹ́ tàbí àpẹẹrẹ tó dà bí gidi, bí àkókò ìdúró níbi ìsanwó",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, pẹ̀lú àkókò láti kó òtítọ́ jọ nípa ìṣòro gidi"
    ],
    facilitatorNotes: [
      "Pèsè àpẹẹrẹ ìṣòro kan tí gbogbo ènìyàn lè pín fún àwọn akẹ́kọ̀ọ́ tí kò lè lo ìṣòro gidi, kí gbogbo ènìyàn lè ṣe àṣeṣe ìgbésẹ̀ kọ̀ọ̀kan.",
      "Jẹ́ kí àwùjọ kékeré ṣe 5 Whys pọ̀; àwọn tó ń ṣe iṣẹ́ náà ló sábà máa ń kọ́kọ́ rí ohun tó fà á gan-an.",
      "Rí i dájú pé kò sí ìsọfúnni àṣírí oníbàárà tí ó wọ inú irinṣẹ́ AI nígbà àṣeṣe.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ fi ìmọ̀ràn ojú-ewé kan wọn hàn ní ìṣẹ́jú méjì fún alábàáṣe kan tí ó ń ṣe bí ọ̀gá.",
      "Fi rubric ṣe àmì fún ìmọ̀ràn náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
