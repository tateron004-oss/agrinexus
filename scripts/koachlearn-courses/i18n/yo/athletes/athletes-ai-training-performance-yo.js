"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-ai-training-performance.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-training-performance-yo",
  lang: "yo",
  translationOf: "athletes-ai-training-performance",
  category: "Athletes",
  name: "AI fún Ìdánrawò àti Ìṣesí Eré Ìdárayá",
  skills: "Ṣíṣe àfojúsùn ìdánrawò tí a lè wọ̀n, Kíkọ ìsọfúnni ìdánrawò sílẹ̀, Kíka ìtẹ̀sí ìdánrawò tó rọrùn, Lílo AI láti kọ ìbéèrè fún olùkọ́ni rẹ, Dídá ìmọ̀ràn ìdánrawò AI tí kò láàbò mọ̀",
  outcome: "ṣe àfojúsùn kan tí a lè wọ̀n, kọ ìsọfúnni ìdánrawò ọ̀sẹ̀ mẹ́rin sínú sheet, lo olùrànlọ́wọ́ AI láti ṣàkópọ̀ ìtẹ̀sí rẹ̀, kí o sì mú ìbéèrè tó yé tí ó sì láàbò nípa ìdánrawò rẹ lọ sọ́dọ̀ olùkọ́ni rẹ.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn eléré ìdárayá tí wọ́n fẹ́ ṣe ìdánrawò lọ́nà ọgbọ́n, àti àwọn olùkọ́ni tí wọ́n fẹ́ kí eléré wọn lóye nọ́mbà ara wọn. Ẹ̀kọ́ gbogbogbò ni, kì í ṣe ètò ìdánrawò: olùkọ́ni rẹ àti olùtọ́jú eléré ìdárayá (athletic trainer) ni wọ́n ń ṣètò ìdánrawò rẹ.",
    "O máa ṣe àfojúsùn tí o lè wọ̀n, kọ àwọn nọ́mbà tó tọ́ sílẹ̀, wo ohun tí wọ́n ń sọ, kí o sì lo olùrànlọ́wọ́ AI láti ṣètò ìsọfúnni rẹ àti láti múra ìjíròrò tó dára jù sílẹ̀ pẹ̀lú olùkọ́ni rẹ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Yan àfojúsùn kan tí a lè wọ̀n, kọ ìsọfúnni ìdánrawò ó kéré tán 4 sínú Google Sheet (ọjọ́, ohun tí o ṣe, ìsapá 1-10, èsì), ní kí olùrànlọ́wọ́ AI ṣàpèjúwe ìtẹ̀sí rẹ̀ ní ọ̀rọ̀ tó rọrùn, kí o sì kọ ìbéèrè mẹ́ta nípa ìpele ìdánrawò rẹ tó kàn láti mú lọ sọ́dọ̀ olùkọ́ni rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn eléré ìdárayá ilé-ẹ̀kọ́ girama, yunifásítì àti ẹgbẹ́ (club) tí wọ́n fẹ́ ṣe ìdánrawò lọ́nà ọgbọ́n, àti àwọn olùkọ́ni tí wọ́n fẹ́ kí eléré wọn lóye nọ́mbà ara wọn.",
    startingPoint: "Wọ́n ń ṣe ìdánrawò déédéé lábẹ́ olùkọ́ni, wọ́n sì ń lo smartphone lójoojúmọ́. Ọ̀pọ̀ ní àfojúsùn bí \"kí n yára sí i\" ṣùgbọ́n kò sí nọ́mbà tí a lè wọ̀n, kò sí àkọsílẹ̀ ìdánrawò déédéé, wọn kò sì fi bẹ́ẹ̀ mọ bí a ṣe ń ka chart tàbí bí a ṣe ń ṣàyẹ̀wò ìmọ̀ràn ìdánrawò lórí ayélujára.",
    gap: "Láìsí àfojúsùn tí a lè wọ̀n àti àkọsílẹ̀ tó rọrùn, eléré kò lè rí bóyá ìdánrawò ń ṣiṣẹ́, AI tàbí ètò orí ayélujára sì lè ti ìmọ̀ràn tí kò láàbò síwájú. Nọ́mbà tó yé àti ìbéèrè tó láàbò ń mú ìjíròrò pẹ̀lú olùkọ́ni dára sí i, wọ́n sì ń dáàbò bo ìlera eléré.",
    constraints: [
      "Ọ̀rọ̀ tó rọrùn ní nǹkan bí ìpele kíkàwé kíláàsì 7",
      "Fóònù tàbí kọ̀mpútà tí ó ní Google Sheets ọ̀fẹ́ àti olùrànlọ́wọ́ AI ọ̀fẹ́",
      "Nǹkan bí ìṣẹ́jú 60 ẹ̀kọ́, pẹ̀lú ọ̀sẹ̀ mẹ́rin àkọsílẹ̀ lẹ́gbẹ̀ẹ́ ìdánrawò déédéé",
      "Ẹ̀kọ́ gbogbogbò nìkan: olùkọ́ni àti olùtọ́jú eléré ìdárayá ni wọ́n ń ṣètò ìdánrawò, ìwọ̀n iṣẹ́ àti ìpadàbọ̀ lẹ́yìn ìpalára",
      "Ìsọfúnni ìlera àti àkọsílẹ̀ máa ń jẹ́ àṣírí, a kì í sì í fi wọ́n sínú olùrànlọ́wọ́ AI láéláé"
    ],
    prerequisites: "Kò sí. \"AI Tools for Athletes\" máa ràn ọ́ lọ́wọ́ tí o kò bá tíì lo Google Sheets rí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àfojúsùn ìdánrawò tí kò ṣe kedere", action: "tún un kọ sí àfojúsùn kan tí a lè wọ̀n, tí ó ní nọ́mbà, ọjọ́ àti ìdánwò", standard: "pẹ̀lú gbogbo apá mẹ́rin, tí olùkọ́ni rẹ sì fọwọ́ sí àfojúsùn náà" },
    { id: "O2", condition: "Ní lílo Google Sheets", action: "ṣètò àkọsílẹ̀ ìdánrawò kí o sì máa kọ ọ́, pẹ̀lú Ọjọ́, Ìdánrawò, Ìsapá àti Èsì", standard: "pẹ̀lú ìlà kan tí o kọ lẹ́yìn ìdánrawò kọ̀ọ̀kan, fún ó kéré tán ìdánrawò 4" },
    { id: "O3", condition: "Tí a bá fún ọ ní chart àkọsílẹ̀ ìdánrawò tìrẹ", action: "ṣàpèjúwe ìtẹ̀sí rẹ̀ ní gbólóhùn kan tàbí méjì kí o sì fi ìsapá wé èsì", standard: "tí o dárúkọ ọ̀nà tí ó ń lọ dáadáa, tí o sì ṣàyẹ̀wò ìṣirò AI èyíkéyìí fúnra rẹ" },
    { id: "O4", condition: "Tí a bá fún ọ ní àkọsílẹ̀ iṣẹ́ ìdánrawò", action: "dá àwọn iṣẹ́ tí AI lè ràn ọ́ lọ́wọ́ mọ̀, àti àwọn tí ó jẹ́ ti olùkọ́ni rẹ tàbí olùtọ́jú eléré ìdárayá", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìmọ̀ràn ìdánrawò láti AI tàbí orí ayélujára", action: "dá àwọn àmì ìkìlọ̀ mọ̀, bí ṣíṣe ìdánrawò nínú ìrora, dídín omi kù tàbí àfikún oúnjẹ eléwu", standard: "tí o rí gbogbo àmì ìkìlọ̀, tí o sì mú un lọ sọ́dọ̀ olùkọ́ni rẹ tàbí olùtọ́jú eléré ìdárayá dípò kí o tẹ̀lé e" },
    { id: "O6", condition: "Ní lílo àfojúsùn rẹ, àkọsílẹ̀ rẹ àti olùrànlọ́wọ́ AI", action: "kọ ìròyìn gbólóhùn mẹ́ta fún olùkọ́ni rẹ àti ìbéèrè mẹ́ta nípa ìpele ìdánrawò rẹ tó kàn", standard: "ní ọ̀rọ̀ ara rẹ, láìfi àkọsílẹ̀ ìlera hàn, tí o sì lo ìdáhùn olùkọ́ni rẹ láti tún ètò rẹ ṣe" }
  ],
  chapters: [
    {
      name: "Orí 1: Àfojúsùn àti ìsọfúnni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣe àfojúsùn tí o lè wọ̀n",
          minutes: 5,
          goal: "Yí àfojúsùn tí kò ṣe kedere padà sí èyí tí a lè wọ̀n, tí ó ní ọjọ́.",
          text: [
            "\"Kí n yára sí i\" jẹ́ ìfẹ́-ọkàn. \"Sá eré 40-yard ní ìṣẹ́jú-àáyá 0.1 yára sí i ní òpin àkókò ìmúrasílẹ̀ (preseason), tí a ń wọ̀n ní ọ̀nà kan náà ní gbogbo ìgbà\" jẹ́ àfojúsùn tí o lè wọ̀n.",
            "Àfojúsùn ìdánrawò tó dára ń dárúkọ nǹkan kan, nọ́mbà kan, ọjọ́ kan, àti bí a ṣe máa wọ̀n ọ́n. Olùkọ́ni rẹ gbọ́dọ̀ fọwọ́ sí i kí ó lè bá ètò ẹgbẹ́ mu.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti tún àfojúsùn tí kò ṣe kedere kọ. Gbìyànjú: \"Yí àfojúsùn mi 'kí n lágbára sí i fún bọ́ọ̀lù' padà sí àfojúsùn kan tí a lè wọ̀n, tí ó ní ọjọ́. Bi mí ní ìbéèrè tí o bá nílò ìsọfúnni sí i.\""
          ],
          steps: ["Kọ àfojúsùn rẹ ní ọ̀rọ̀ ara rẹ.", "Fi nọ́mbà kan kún un tí o máa wọ̀n.", "Fi ọjọ́ kan kún un.", "Sọ bí àti ìgbà tí a máa dán an wò.", "Jẹ́ kí olùkọ́ni rẹ fọwọ́ sí i."],
          words: [["Tí a lè wọ̀n", "nǹkan tí o lè kà tàbí wọn àkókò rẹ̀, kí o lè mọ̀ bóyá ó yí padà."], ["Nọ́mbà ìbẹ̀rẹ̀ (baseline)", "nọ́mbà rẹ níbẹ̀rẹ̀ kí o tó bẹ̀rẹ̀ ìdánrawò fún àfojúsùn náà."]],
          slides: [
            { title: "Ìfẹ́-ọkàn àti àfojúsùn", bullets: ["Ìfẹ́-ọkàn: \"kí n yára sí i\"", "Àfojúsùn: \"40-yard ní 0.1 s yára sí i ní òpin preseason\""] },
            { title: "Àfojúsùn ní", bullets: ["Nǹkan kan", "Nọ́mbà kan àti ọjọ́ kan", "Bí a ṣe máa dán an wò"] },
            { title: "Lo AI láti mú un ṣe kedere", bullets: ["\"Yí àfojúsùn mi padà sí èyí tí a lè wọ̀n\"", "Lẹ́yìn náà, jẹ́ kí olùkọ́ni rẹ fọwọ́ sí i"] }
          ],
          tryIt: "Kọ àfojúsùn kan tí kò ṣe kedere. Ní kí olùrànlọ́wọ́ AI sọ ọ́ di èyí tí a lè wọ̀n, tí ó ní ọjọ́. Tún un ṣe kí ó jẹ́ òtítọ́ nípa rẹ, lẹ́yìn náà kọ nọ́mbà ìbẹ̀rẹ̀ rẹ tí o bá mọ̀ ọ́n.",
          youCanNow: "kọ àfojúsùn ìdánrawò tí a lè wọ̀n, tí ó ní nọ́mbà, ọjọ́ àti ìdánwò.",
          quickCheck: [
            { objective: "O1", q: "Apá wo ló ń sọ \"kí n lágbára sí i\" di àfojúsùn tí a lè wọ̀n?", options: ["Fífi ọ̀rọ̀ \"gan-an\" kún un", "Fífi nọ́mbà, ọjọ́ àti bí a ṣe máa dán an wò kún un", "Fífi í sórí ayélujára", "Mímú un gùn sí i"], answer: 1, why: "Àfojúsùn tí a lè wọ̀n ń dárúkọ nǹkan kan, nọ́mbà, ọjọ́ àti bí a ṣe ń wọ̀n ọ́n." },
            { objective: "O1", q: "O ti kọ àfojúsùn tí a lè wọ̀n pẹ̀lú ìrànlọ́wọ́ AI. Kí ni o máa ṣe tẹ̀lé e?", options: ["Bẹ̀rẹ̀ ìdánrawò fún un ní ìwọ nìkan", "Ní kí AI fọwọ́ sí i", "Pa á mọ́ ní àṣírí", "Jẹ́ kí olùkọ́ni rẹ fọwọ́ sí i"], answer: 3, why: "Olùkọ́ni rẹ gbọ́dọ̀ fọwọ́ sí àfojúsùn rẹ kí ó lè bá ètò ẹgbẹ́ mu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìsọfúnni ìdánrawò tó tọ́ sílẹ̀",
          minutes: 5,
          goal: "Ṣètò àkọsílẹ̀ ìdánrawò tó rọrùn tí o máa ń kọ ní tòótọ́.",
          text: [
            "Ìsọfúnni wúlò nìkan tí o bá ń gbà á ní ọ̀nà kan náà ní gbogbo ìgbà. Àkọsílẹ̀ tó rọrùn dára ju app olówó tí o fi sílẹ̀ lẹ́yìn ọ̀sẹ̀ kan.",
            "Ọ̀wọ̀n mẹ́rin tó láti bẹ̀rẹ̀: Ọjọ́ (Date), Ìdánrawò (Session, ohun tí o ṣe), Ìsapá (Effort, bí ó ṣe le tó, 1 sí 10), àti Èsì (Result, nọ́mbà fún àfojúsùn rẹ). Àwọn eléré kan máa ń fi wákàtí oorun tàbí àkọsílẹ̀ kúkúrú kún un.",
            "Àwọn ẹ̀rọ tí a ń wọ̀ bí aago àti okùn ìlù ọkàn lè fi ìsọfúnni kún un, ṣùgbọ́n wọn kì í ṣe pípé. Ka nọ́mbà wọn sí àmì, kì í ṣe òtítọ́ pàtó, kí o sì pa ìsọfúnni ìlera rẹ mọ́ ní àṣírí."
          ],
          steps: ["Ṣí Google Sheets.", "Ṣe ọ̀wọ̀n: Ọjọ́, Ìdánrawò, Ìsapá (1-10), Èsì.", "Kọ ìlà kan lẹ́yìn ìdánrawò kọ̀ọ̀kan.", "Fi í sí ibì kan náà lórí fóònù rẹ kí ó lè gba ìṣẹ́jú kan péré."],
          words: [["Ìdíwọ̀n ìsapá", "máàkì 1 sí 10 fún bí ìdánrawò kan ṣe le tó lára rẹ; àwọn olùkọ́ni sábà máa ń pè é ní RPE (rating of perceived exertion)."], ["Ẹ̀rọ tí a ń wọ̀ (wearable)", "ẹ̀rọ tí o ń wọ̀ sára, bí aago, tí ó ń wọn nǹkan bí ìlù ọkàn tàbí ìgbésẹ̀."]],
          slides: [
            { title: "Rírọrùn dára ju olówó lọ", bullets: ["Ní ọ̀nà kan náà, ní gbogbo ìgbà", "Ìṣẹ́jú kan lẹ́yìn ìdánrawò kọ̀ọ̀kan"] },
            { title: "Ọ̀wọ̀n mẹ́rin", bullets: ["Ọjọ́", "Ìdánrawò", "Ìsapá 1-10", "Èsì"] },
            { title: "Nípa ẹ̀rọ tí a ń wọ̀", bullets: ["Àmì tó wúlò, kì í ṣe òtítọ́ pípé", "Pa ìsọfúnni ìlera mọ́ ní àṣírí"] }
          ],
          tryIt: "Ṣe àkọsílẹ̀ ìdánrawò rẹ nínú Google Sheets pẹ̀lú ọ̀wọ̀n mẹ́rin náà. Kọ ìdánrawò méjì tàbí mẹ́ta tó kọjá láti inú ìrántí rẹ tàbí àkọsílẹ̀ rẹ.",
          youCanNow: "máa kọ àkọsílẹ̀ ìdánrawò tó rọrùn ní ọ̀nà kan náà.",
          quickCheck: [
            { objective: "O2", q: "Kí ló ń lọ sínú ọ̀wọ̀n Èsì nínú àkọsílẹ̀ rẹ?", options: ["Nọ́mbà fún àfojúsùn rẹ", "Bí ó ṣe le tó lára rẹ", "Ohun tí o jẹ", "Orúkọ olùkọ́ni rẹ"], answer: 0, why: "Èsì ni nọ́mbà tí o ń tọpinpin fún àfojúsùn rẹ." },
            { objective: "O2", q: "O máa ń gbàgbé láti kọ àkọsílẹ̀ rẹ. Kí ló máa ràn ọ́ lọ́wọ́ jù?", options: ["Lọ sí app olówó jù", "Kọ ọ́ lẹ́ẹ̀kan lóṣù láti inú ìrántí", "Fi í sí ibì kan náà lórí fóònù rẹ kí o sì kọ ìlà kan lẹ́sẹ̀kẹsẹ̀ lẹ́yìn ìdánrawò kọ̀ọ̀kan", "Dá kíkọ dúró"], answer: 2, why: "Àkọsílẹ̀ tó rọrùn tí o ń kọ ní ọ̀nà kan náà ní gbogbo ìgbà ni èyí tí o máa tẹ̀síwájú pẹ̀lú rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíka ìtẹ̀sí ìdánrawò rẹ",
          minutes: 5,
          goal: "Ka chart ìsọfúnni rẹ kí o sì ṣàpèjúwe ohun tí ó fi hàn ní gbólóhùn kan tàbí méjì.",
          text: [
            "Lẹ́yìn ọ̀sẹ̀ díẹ̀, ṣe chart ọ̀wọ̀n Èsì rẹ gẹ́gẹ́ bí ọjọ́. Wo ọ̀nà tí ó ń lọ: òkè, ìsàlẹ̀ tàbí títẹ́jú. Ọjọ́ burúkú kan kò túmọ̀ sí púpọ̀; wo ìlà náà lápapọ̀.",
            "Fi Ìsapá wé Èsì. Tí ìsapá bá ń lọ sókè ṣùgbọ́n èsì dúró tàbí ń lọ sílẹ̀, ó lè jẹ́ pé ó ti rẹ̀ ọ́, èyí sì jẹ́ nǹkan tí o yẹ kí o sọ fún olùkọ́ni rẹ.",
            "O lè fi tábìlì rẹ (láìsí orúkọ tàbí àkọsílẹ̀ ìlera) sínú olùrànlọ́wọ́ AI kí o sì béèrè: \"Ṣàpèjúwe ìtẹ̀sí ìsọfúnni ìdánrawò yìí ní ọ̀rọ̀ tó rọrùn. Àwọn ìbéèrè wo ni mo yẹ kí n bi olùkọ́ni mi?\" Ṣàyẹ̀wò ìṣirò rẹ̀ fúnra rẹ."
          ],
          steps: ["Yan Ọjọ́ àti Èsì kí o sì fi line chart sí i.", "Sọ ọ̀nà tí ó ń lọ: òkè, ìsàlẹ̀ tàbí títẹ́jú.", "Fi Ìsapá wé Èsì.", "Kọ àkópọ̀ gbólóhùn kan."],
          words: [["Ìtẹ̀sí (trend)", "ọ̀nà tí àwọn nọ́mbà rẹ ń lọ lápapọ̀ bí àkókò ti ń lọ."], ["Ìdúró sójú kan (plateau)", "nígbà tí èsì kò bá dára sí i fún ìgbà díẹ̀."]],
          slides: [
            { title: "Wo ìlà náà", bullets: ["Òkè, ìsàlẹ̀ tàbí títẹ́jú?", "Ọjọ́ burúkú kan kì í ṣe ìtẹ̀sí"] },
            { title: "Ìsapá àti èsì", bullets: ["Ìsapá ń lọ sókè, èsì dúró tàbí ń lọ sílẹ̀?", "Ó lè ti rẹ̀ ọ́: sọ fún olùkọ́ni rẹ"] },
            { title: "AI lè ṣàpèjúwe rẹ̀", bullets: ["Fi tábìlì sínú rẹ̀, láìsí orúkọ tàbí àkọsílẹ̀ ìlera", "Ṣàyẹ̀wò ìṣirò rẹ̀ fúnra rẹ"] }
          ],
          tryIt: "Ṣe chart ọ̀wọ̀n Èsì rẹ. Kọ gbólóhùn kan tí ó ṣàpèjúwe ìtẹ̀sí náà. Lẹ́yìn náà, ní kí olùrànlọ́wọ́ AI ṣàpèjúwe rẹ̀, kí o sì fi gbólóhùn rẹ̀ wé tìrẹ.",
          youCanNow: "ṣe chart ìsọfúnni ìdánrawò rẹ kí o sì ṣàpèjúwe ìtẹ̀sí rẹ̀ ní ọ̀rọ̀ tó rọrùn.",
          quickCheck: [
            { objective: "O3", q: "Kí ni o máa kọ́kọ́ wò lórí chart ìdánrawò rẹ?", options: ["Ọjọ́ kan tó burú jù", "Àwọn àwọ̀", "Ọ̀nà tí ó ń lọ lápapọ̀: òkè, ìsàlẹ̀ tàbí títẹ́jú", "Àkọlé chart náà"], answer: 2, why: "Ọjọ́ burúkú kan kò túmọ̀ sí púpọ̀; ìlà lápapọ̀ ló ń fi ìtẹ̀sí hàn." },
            { objective: "O3", q: "O fẹ́ fi tábìlì rẹ sínú olùrànlọ́wọ́ AI. Kí ni o máa kọ́kọ́ yọ kúrò?", options: ["Orúkọ àti àkọsílẹ̀ ìlera", "Àwọn ọjọ́", "Ọ̀wọ̀n Èsì", "Kò sí nǹkan kan"], answer: 0, why: "Pa orúkọ àti àkọsílẹ̀ ìlera mọ́ kúrò nínú irinṣẹ́ AI." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àfojúsùn àti ìsọfúnni",
        questions: [
          { objective: "O1", q: "Èwo ni àfojúsùn tí a lè wọ̀n?", options: ["Kí n dára sí i", "Kí n jẹ́ akíkanjú", "Kí n wọlé ní 16 nínú free throw 20 ní 15 January, tí a dán wò níbi ìdánrawò", "Kí n ṣiṣẹ́ kára"], answer: 2, why: "Ó ní nọ́mbà, ọjọ́ àti ìdánwò." },
          { objective: "O1", q: "Kí ni nọ́mbà ìbẹ̀rẹ̀ (baseline)?", options: ["Nọ́mbà rẹ níbẹ̀rẹ̀ kí o tó ṣe ìdánrawò fún àfojúsùn náà", "Ìlà ẹ̀yìn pápá", "Ọjọ́ tó dára jù lọ rẹ rí", "Ìwọ̀n àárín ẹgbẹ́"], answer: 0, why: "Nọ́mbà ìbẹ̀rẹ̀ ń fi ibi tí o ti bẹ̀rẹ̀ hàn." },
          { objective: "O2", q: "Àkọsílẹ̀ ìdánrawò wo ló wúlò jù?", options: ["Èyí tó lọ́ṣọ̀ọ́ tí o fi sílẹ̀ lẹ́yìn ọ̀sẹ̀ kan", "Èyí tí o ń kọ lẹ́ẹ̀kan ní sáà kan", "Èyí tí o ń fi àmòdì kọ", "Èyí tó rọrùn tí o ń kọ ní gbogbo ìgbà"], answer: 3, why: "Ìsọfúnni déédéé ló ń jẹ́ kí ìtẹ̀sí ní ìtumọ̀." },
          { objective: "O2", q: "Báwo ni o ṣe yẹ kí o ka nọ́mbà láti ẹ̀rọ tí a ń wọ̀?", options: ["Bí òtítọ́ pípé", "Bí àmì tó wúlò tí kì í ṣe pípé", "Bí ìmọ̀ràn ìṣègùn", "Bí nǹkan láti fi sí gbangba"], answer: 1, why: "Ẹ̀rọ tí a ń wọ̀ ń ràn lọ́wọ́ ṣùgbọ́n wọ́n lè ṣàṣìṣe." },
          { objective: "O3", q: "Ìdíwọ̀n ìsapá rẹ ń lọ sókè ṣùgbọ́n àkókò rẹ ń pẹ́ sí i. Kí ló yẹ kí o ṣe?", options: ["Ṣe ìdánrawò ní ìlọ́po méjì", "Sọ fún olùkọ́ni rẹ; ó lè ti rẹ̀ ọ́", "Dá kíkọ àkọsílẹ̀ dúró", "Fojú fò ó"], answer: 1, why: "Ìsapá tó ń lọ sókè pẹ̀lú èsì tó ń lọ sílẹ̀ lè jẹ́ àmì àárẹ̀, olùkọ́ni rẹ sì yẹ kí ó mọ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Lílo AI pẹ̀lú olùkọ́ni rẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ohun tí AI lè ṣe àti èyí tí kò lè ṣe fún ìdánrawò",
          minutes: 4,
          goal: "Pín àwọn iṣẹ́ ìdánrawò sí èyí tí AI lè ràn lọ́wọ́, àti èyí tí ó jẹ́ ti olùkọ́ni rẹ tàbí olùtọ́jú eléré ìdárayá.",
          text: [
            "Olùrànlọ́wọ́ AI mọ̀ dáadáa nípa ṣíṣètò nǹkan: yíyí àkọsílẹ̀ padà sí tábìlì, ṣíṣàlàyé ọ̀rọ̀ ìdánrawò, ṣíṣàkópọ̀ àkọsílẹ̀ rẹ, tàbí kíkọ ìbéèrè fún olùkọ́ni rẹ.",
            "Wọn kò mọ ara rẹ. Wọn kò lè rí bí o ṣe ń ṣe é (form), ìtàn ìpalára rẹ tàbí bí o ṣe sùn, àwọn ètò gbogbogbò láti orí íńtánẹ́ẹ̀tì sì lè má bá ọjọ́ orí rẹ, ìpele rẹ tàbí sáà rẹ mu.",
            "Nítorí náà, lo AI láti lóye àti láti múra sílẹ̀, kí o sì jẹ́ kí olùkọ́ni rẹ àti olùtọ́jú eléré ìdárayá pinnu ìdánrawò rẹ, ìwọ̀n iṣẹ́ rẹ àti ìpadàbọ̀ rẹ lẹ́yìn ìpalára."
          ],
          words: [["Ìwọ̀n iṣẹ́ ìdánrawò (training load)", "iye àti bí o ṣe ń ṣe ìdánrawò le tó bí àkókò ti ń lọ."], ["Olùtọ́jú eléré ìdárayá (athletic trainer)", "akọ́ṣẹ́mọṣẹ́ ìlera tó ní ìwé àṣẹ, tí ó ń dènà ìpalára, tí ó ń tọ́jú rẹ̀, tí ó sì ń ran eléré lọ́wọ́ láti bọ̀ sípò."]],
          slides: [
            { title: "AI mọ̀ dáadáa nípa", bullets: ["Yíyí àkọsílẹ̀ padà sí tábìlì", "Ṣíṣàlàyé ọ̀rọ̀ ìdánrawò", "Ṣíṣàkópọ̀ àkọsílẹ̀ rẹ", "Kíkọ ìbéèrè fún olùkọ́ni rẹ"] },
            { title: "AI kò lè", bullets: ["Rí bí o ṣe ń ṣe é (form)", "Mọ ìtàn ìpalára rẹ", "Mọ bí ara rẹ ṣe rí lónìí"] },
            { title: "Ta ló ń pinnu", bullets: ["Olùkọ́ni: ìdánrawò àti ìwọ̀n iṣẹ́", "Olùtọ́jú eléré ìdárayá: ìpalára àti ìpadàbọ̀ sí eré"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI ṣàlàyé ọ̀rọ̀ ìdánrawò kan tí o ti gbọ́ (fún àpẹẹrẹ \"periodization\" tàbí \"deload week\") ní ọ̀rọ̀ tó rọrùn. Kọ ìbéèrè kan nípa rẹ̀ fún olùkọ́ni rẹ.",
          youCanNow: "sọ àwọn iṣẹ́ ìdánrawò tí AI lè ràn lọ́wọ́ àti àwọn tí ó jẹ́ ti olùkọ́ni rẹ tàbí olùtọ́jú eléré ìdárayá.",
          quickCheck: [
            { objective: "O4", q: "Èwo nínú ìwọ̀nyí ni olùrànlọ́wọ́ AI lè ṣe dáadáa fún ìdánrawò?", options: ["Rí bí o ṣe ń ṣe é níbi ìdánrawò", "Mọ ìtàn ìpalára rẹ", "Pinnu ìpadàbọ̀ rẹ lẹ́yìn ìpalára", "Ṣàlàyé ọ̀rọ̀ ìdánrawò kan"], answer: 3, why: "AI mọ̀ dáadáa nípa ṣíṣètò àti ṣíṣàlàyé, kì í ṣe mímọ ara rẹ." },
            { objective: "O4", q: "Olùrànlọ́wọ́ AI fún ọ ní ètò gbígbé irin tó wúwo ju èyí tí olùkọ́ni rẹ kọ. Kí ni o máa ṣe?", options: ["Tẹ̀lé ètò AI", "Lò ó láti múra ìbéèrè sílẹ̀, kí o sì jẹ́ kí olùkọ́ni rẹ pinnu", "Ṣe ètò méjèèjì", "Dá gbígbé irin dúró"], answer: 1, why: "Lo AI láti lóye àti láti múra sílẹ̀; olùkọ́ni rẹ ló ń pinnu ìdánrawò àti ìwọ̀n iṣẹ́." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídá ìmọ̀ràn ìdánrawò AI tí kò láàbò mọ̀",
          minutes: 5,
          goal: "Dá àwọn àmì ìkìlọ̀ mọ̀ nínú ìmọ̀ràn ìdánrawò láti AI tàbí orí ayélujára.",
          text: [
            "AI àti àwọn ètò orí ayélujára lè fúnni ní ìmọ̀ràn tí ó pọ̀ jù, tí ó yára jù, tàbí tí kò tọ́ fún eléré ọ̀dọ́ tàbí eléré tí ó ní ìpalára. O ní láti dá a mọ̀.",
            "Àwọn àmì ìkìlọ̀: ṣíṣe ìdánrawò nínú ìrora mímú; fífi ìdánrawò kún un púpọ̀ lẹ́ẹ̀kan náà; dídín oúnjẹ tàbí omi kù láti dé ìwọ̀n ara kan; àfikún oúnjẹ tí ó ń ṣèlérí èsì kíákíá; \"kò sí ọjọ́ ìsinmi\"; àti ètò èyíkéyìí tí ó fojú fo ohun tí olùkọ́ni rẹ kọ.",
            "Àfikún oúnjẹ (supplement) ní ewu pàtàkì: FDA kì í ṣàyẹ̀wò wọn kí wọ́n tó tà wọ́n, àwọn kan sì ní àwọn èròjà tí a fòfin dè. Bá olùtọ́jú eléré ìdárayá rẹ tàbí onímọ̀ oúnjẹ tí a forúkọ rẹ̀ sílẹ̀ (registered dietitian) sọ̀rọ̀ kí o tó lo èyíkéyìí."
          ],
          steps: ["Ka ìmọ̀ràn náà díẹ̀díẹ̀.", "Fi wé àkọsílẹ̀ àmì ìkìlọ̀.", "Tí àmì ìkìlọ̀ kankan bá wà, má ṣe tẹ̀lé e.", "Mú un lọ sọ́dọ̀ olùkọ́ni rẹ tàbí olùtọ́jú eléré ìdárayá."],
          words: [["Àmì ìkìlọ̀ (red flag)", "àmì tí ó fi hàn pé nǹkan kò láàbò tàbí kò tọ́."], ["Àfikún oúnjẹ (supplement)", "òògùn oníkóró, ìyẹ̀fun tàbí ohun mímu tí a ń tà láti fi nǹkan kún oúnjẹ rẹ."]],
          slides: [
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Ṣíṣe ìdánrawò nínú ìrora mímú", "Fífi kún un púpọ̀ lẹ́ẹ̀kan náà", "Dídín oúnjẹ tàbí omi kù láti dé ìwọ̀n ara kan", "\"Kò sí ọjọ́ ìsinmi\""] },
            { title: "Àfikún oúnjẹ", bullets: ["FDA kì í ṣàyẹ̀wò wọn kí wọ́n tó tà wọ́n", "Àwọn kan ní èròjà tí a fòfin dè", "Kọ́kọ́ bi olùtọ́jú eléré ìdárayá tàbí onímọ̀ oúnjẹ"] },
            { title: "Tí o bá rí ọ̀kan", bullets: ["Má ṣe tẹ̀lé e", "Mú un lọ sọ́dọ̀ olùkọ́ni rẹ tàbí olùtọ́jú eléré ìdárayá"] }
          ],
          sources: [{ name: "USADA: Supplement Connect (ewu àfikún oúnjẹ fún eléré ìdárayá)", url: "https://www.usada.org/athletes/substances/supplement-connect/" }],
          tryIt: "Ní kí olùrànlọ́wọ́ AI fún ọ ní \"ètò láti yára sí i ní ọ̀sẹ̀ méjì\". Kà á kí o sì fa àyíká yí àmì ìkìlọ̀ èyíkéyìí ká. Kọ ohun tí o máa bi olùkọ́ni rẹ nípa rẹ̀.",
          youCanNow: "dá ìmọ̀ràn ìdánrawò tí kò láàbò mọ̀ kí o sì mú un lọ sọ́dọ̀ ẹni tó tọ́.",
          quickCheck: [
            { objective: "O5", q: "Èwo nínú ìwọ̀nyí ni àmì ìkìlọ̀ nínú ìmọ̀ràn ìdánrawò?", options: ["Ọjọ́ ìsinmi kan lọ́sẹ̀", "Ètò tí ó bá ohun tí olùkọ́ni rẹ kọ mu", "Fífi ìdánrawò kún un púpọ̀ lẹ́ẹ̀kan náà", "Mímú ara gbóná kí ìdánrawò tó bẹ̀rẹ̀"], answer: 2, why: "Ohun tí ó pọ̀ jù, tí ó yára jù jẹ́ ọ̀kan lára àwọn àmì ìkìlọ̀ nínú ẹ̀kọ́ náà." },
            { objective: "O5", q: "Ọ̀rẹ́ rẹ nínú ẹgbẹ́ fún ọ ní àfikún oúnjẹ kan tí ó ń ṣèlérí èsì kíákíá. Kí ni o máa ṣe?", options: ["Kọ́kọ́ bá olùtọ́jú eléré ìdárayá rẹ tàbí onímọ̀ oúnjẹ tí a forúkọ rẹ̀ sílẹ̀ sọ̀rọ̀", "Gbìyànjú díẹ̀ nínú rẹ̀", "Rà á tí àwọn èèyàn bá ń yìn ín", "Ní kí AI fọwọ́ sí i"], answer: 0, why: "FDA kì í ṣàyẹ̀wò àfikún oúnjẹ kí wọ́n tó tà wọ́n, àwọn kan sì ní èròjà tí a fòfin dè." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mímúra ìjíròrò ìdánrawò sílẹ̀ pẹ̀lú olùkọ́ni rẹ",
          minutes: 5,
          goal: "Lo AI láti múra ìròyìn kúkúrú tó yé àti ìbéèrè mẹ́ta sílẹ̀ fún olùkọ́ni rẹ.",
          text: [
            "Ọwọ́ àwọn olùkọ́ni máa ń dí. Ìròyìn kúkúrú tó yé pẹ̀lú àwọn nọ́mbà rẹ ń mú ìjíròrò náà dára sí i: kí ni àfojúsùn rẹ, kí ni ìsọfúnni rẹ fi hàn, àti kí ni o fẹ́ béèrè.",
            "Bi olùrànlọ́wọ́ AI pé: \"Àfojúsùn mi àti àkọsílẹ̀ ìdánrawò mi nìyí. Kọ ìròyìn gbólóhùn mẹ́ta fún olùkọ́ni mi, kí o sì dábàá ìbéèrè mẹ́ta tí mo lè béèrè nípa ìpele ìdánrawò mi tó kàn.\" Lẹ́yìn náà, tún un ṣe kí ó dún bí ìwọ.",
            "Mú ìròyìn náà lọ bá olùkọ́ni rẹ lójúkojú tàbí ní ọ̀nà tí ẹgbẹ́ rẹ fẹ́ràn. Fetí sílẹ̀, kọ àkọsílẹ̀, kí o sì tún ètò rẹ ṣe pẹ̀lú ohun tí olùkọ́ni rẹ sọ, kì í ṣe ohun tí AI sọ."
          ],
          steps: ["Fi àfojúsùn rẹ àti àkọsílẹ̀ rẹ sínú rẹ̀ (láìsí àkọsílẹ̀ ìlera).", "Béèrè ìròyìn gbólóhùn mẹ́ta àti ìbéèrè mẹ́ta.", "Tún un kọ ní ọ̀rọ̀ ara rẹ.", "Fi í han olùkọ́ni rẹ ní ọ̀nà tí ẹgbẹ́ rẹ fẹ́ràn.", "Tún ètò rẹ ṣe pẹ̀lú ìdáhùn olùkọ́ni rẹ."],
          words: [["Ìpele ìdánrawò (training block)", "àwọn ọ̀sẹ̀ kan tí ó ní ohun pàtàkì kan tí ìdánrawò dá lé."], ["Ìròyìn (update)", "ọ̀rọ̀ kúkúrú tí ó sọ ibi tí o wà báyìí."]],
          slides: [
            { title: "Ìròyìn tó dára", bullets: ["Àfojúsùn mi", "Ohun tí ìsọfúnni mi fi hàn", "Àwọn ìbéèrè mi"] },
            { title: "Lo AI láti kọ àkọ́pẹrẹ", bullets: ["Ìròyìn gbólóhùn mẹ́ta", "Ìbéèrè mẹ́ta", "Tún un kọ ní ọ̀rọ̀ ara rẹ"] },
            { title: "Lẹ́yìn náà", bullets: ["Bá olùkọ́ni rẹ sọ̀rọ̀", "Kọ àkọsílẹ̀", "Tẹ̀lé ètò olùkọ́ni rẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ó kéré tán ìdánrawò 4 sílẹ̀, ní kí olùrànlọ́wọ́ AI ṣàpèjúwe ìtẹ̀sí rẹ, kí o sì kọ ìròyìn gbólóhùn mẹ́ta pẹ̀lú ìbéèrè mẹ́ta fún olùkọ́ni rẹ.",
          youCanNow: "sọ ìsọfúnni ìdánrawò rẹ di ìròyìn tó yé àti ìbéèrè fún olùkọ́ni rẹ.",
          quickCheck: [
            { objective: "O6", q: "Nǹkan mẹ́ta wo ni ìròyìn tó dára fún olùkọ́ni ní?", options: ["Àfojúsùn rẹ, ohun tí ìsọfúnni rẹ fi hàn àti ohun tí o fẹ́ béèrè", "Ìkànnì àjọlò rẹ, oorun rẹ àti máàkì ilé-ìwé rẹ", "Nọ́mbà àwọn eléré míì", "Ọjọ́ tó dára jù lọ rẹ nìkan"], answer: 0, why: "Ìròyìn kúkúrú ń fúnni ní àfojúsùn rẹ, ìsọfúnni rẹ àti àwọn ìbéèrè rẹ." },
            { objective: "O6", q: "Ìdáhùn olùkọ́ni rẹ yàtọ̀ sí àbá AI. Kí ni o máa ṣe?", options: ["Tẹ̀lé AI", "Bi AI míì", "Fojú fo méjèèjì", "Tún ètò rẹ ṣe pẹ̀lú ohun tí olùkọ́ni rẹ sọ"], answer: 3, why: "Tún ètò rẹ ṣe pẹ̀lú ìdáhùn olùkọ́ni rẹ, kì í ṣe ohun tí AI sọ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lílo AI pẹ̀lú olùkọ́ni rẹ",
        questions: [
          { objective: "O4", q: "Iṣẹ́ wo ni AI mọ̀ dáadáa fún ìdánrawò?", options: ["Rírí bí o ṣe ń ṣe é lójúkojú", "Fífún ọ ní àṣẹ láti padà lẹ́yìn ìpalára", "Mímọ bí o ṣe sùn", "Ṣíṣàkópọ̀ àkọsílẹ̀ ìdánrawò rẹ"], answer: 3, why: "Ṣíṣètò àti ṣíṣàkópọ̀ jẹ́ agbára AI." },
          { objective: "O4", q: "Ta ló ń pinnu ìgbà tí o máa padà lẹ́yìn ìpalára?", options: ["Olùtọ́jú eléré ìdárayá rẹ tàbí dókítà", "Olùrànlọ́wọ́ AI", "Ọ̀rẹ́ nínú ẹgbẹ́", "Gbajúmọ̀ eré ìdárayá lórí ayélujára"], answer: 0, why: "Ìpadàbọ̀ sí eré jẹ́ ìpinnu ìlera fún àwọn akọ́ṣẹ́mọṣẹ́ tó yẹ." },
          { objective: "O5", q: "Èwo ni àmì ìkìlọ̀ nínú ìmọ̀ràn ìdánrawò?", options: ["Ọjọ́ ìsinmi lọ́sẹ̀ọ̀sẹ̀", "Kíkọ́kọ́ mú ara gbóná", "Ṣíṣe ìdánrawò nínú ìrora mímú", "Bíbi olùkọ́ni rẹ"], answer: 2, why: "Ìrora mímú jẹ́ àmì láti dúró kí wọ́n sì yẹ̀ ọ́ wò." },
          { objective: "O5", q: "Kí ló dé tí àfikún oúnjẹ fi léwu fún eléré ìdárayá?", options: ["Wọ́n máa ń jẹ́ èèwọ̀ nígbà gbogbo", "Olùkọ́ni rẹ ló ń dán wọn wò", "Wọn kò dùn", "FDA kì í ṣàyẹ̀wò wọn kí wọ́n tó tà wọ́n, àwọn kan sì ní èròjà tí a fòfin dè"], answer: 3, why: "USADA kìlọ̀ pé àfikún oúnjẹ lè ní èròjà àìmọ́ tàbí àkọlé tí kò tọ́." },
          { objective: "O6", q: "Lẹ́yìn tí o bá olùkọ́ni rẹ sọ̀rọ̀, ètò ta ni o máa tẹ̀lé?", options: ["Ti AI", "Ti olùkọ́ni rẹ", "Ti fídíò kan láìròtẹ́lẹ̀", "Ti abánidíje rẹ"], answer: 1, why: "Olùkọ́ni ló ń ṣètò ìdánrawò; AI ń ràn ọ́ lọ́wọ́ láti múra sílẹ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ìdánrawò àti Ìṣesí Eré Ìdárayá",
    questions: [
      { objective: "O1", q: "\"Kí n yára sí i\" jẹ́:", options: ["Àfojúsùn pípé", "Àkọsílẹ̀ ìdánrawò", "Ìfẹ́-ọkàn, kì í ṣe àfojúsùn tí a lè wọ̀n", "Ìdánrawò kan (drill)"], answer: 2, why: "Kò ní nọ́mbà, ọjọ́ tàbí ìdánwò." },
      { objective: "O1", q: "Àfojúsùn ìdánrawò tó dára ní:", options: ["Nǹkan kan, nọ́mbà, ọjọ́ àti ìdánwò", "Ìmọ̀lára nìkan", "Ọ̀rọ̀ aṣínà rẹ", "Àfojúsùn mẹ́wàá lẹ́ẹ̀kan náà"], answer: 0, why: "Àwọn apá wọ̀nyí ló ń jẹ́ kí ó ṣeé wọ̀n." },
      { objective: "O1", q: "Ta ló yẹ kí ó fọwọ́ sí àfojúsùn rẹ pẹ̀lú rẹ?", options: ["Olùkọ́ni rẹ", "Àjèjì kan lórí ayélujára", "AI nìkan", "Kò sí ẹnìkan"], answer: 0, why: "Àfojúsùn rẹ gbọ́dọ̀ bá ètò ẹgbẹ́ mu." },
      { objective: "O2", q: "Kí ló yẹ kí àkọsílẹ̀ ìdánrawò àkọ́kọ́ rẹ ní?", options: ["Ọ̀wọ̀n àádọ́ta", "Àkọsílẹ̀ ìṣègùn rẹ", "Ọjọ́, Ìdánrawò, Ìsapá àti Èsì", "Àwòrán nìkan"], answer: 2, why: "Ọ̀wọ̀n mẹ́rin tó rọrùn tó láti bẹ̀rẹ̀." },
      { objective: "O2", q: "Ìdíwọ̀n ìsapá 1 sí 10 ń wọn:", options: ["Gíga rẹ", "Bí ìdánrawò kan ṣe le tó lára rẹ", "Máàkì ilé-ìwé rẹ", "Àwọn tó ń tẹ̀lé ọ"], answer: 1, why: "Ó jẹ́ máàkì kíákíá fún ìsapá tí o rò pé o ṣe." },
      { objective: "O2", q: "Nọ́mbà láti aago tàbí okùn jẹ́:", options: ["Pípé nígbà gbogbo", "Àyẹ̀wò àìsàn", "Láìní ìtumọ̀", "Àmì tó wúlò tí ó lè ṣàṣìṣe"], answer: 3, why: "Ẹ̀rọ tí a ń wọ̀ ń ràn lọ́wọ́, ṣùgbọ́n kà wọ́n sí àmì." },
      { objective: "O3", q: "Nígbà tí o bá ń ka chart rẹ, kí ni o yẹ kí o fi ọkàn sí?", options: ["Ọjọ́ kan tó burú jù", "Àwọ̀ chart náà", "Ọ̀nà tí ìlà náà ń lọ lápapọ̀", "Chart àwọn eléré míì"], answer: 2, why: "Ìtẹ̀sí ṣe pàtàkì ju ọjọ́ kan lọ." },
      { objective: "O3", q: "Èsì kò yí padà fún ọ̀sẹ̀ púpọ̀. A ń pe èyí ní:", options: ["Eré sísá kíákíá (sprint)", "Nọ́mbà ìbẹ̀rẹ̀", "Ẹ̀rọ tí a ń wọ̀", "Ìdúró sójú kan (plateau)"], answer: 3, why: "Ìdúró sójú kan jẹ́ àkókò tí kò sí ìtẹ̀síwájú." },
      { objective: "O3", q: "Kí o tó fi àkọsílẹ̀ rẹ sínú AI, yọ:", options: ["Orúkọ àti àkọsílẹ̀ ìlera", "Àwọn ọjọ́", "Ìdíwọ̀n ìsapá", "Àwọn èsì"], answer: 0, why: "Pa ìsọfúnni àdáni àti ti ìlera mọ́ kúrò nínú irinṣẹ́ AI." },
      { objective: "O3", q: "AI sọ pé ìwọ̀n àárín rẹ dára sí i ní ìṣẹ́jú-àáyá 2. O yẹ kí o:", options: ["Fi í sórí ayélujára", "Ṣàyẹ̀wò ìṣirò náà fúnra rẹ", "Gbà á gbọ́ pátápátá", "Pa àkọsílẹ̀ rẹ rẹ́"], answer: 1, why: "AI lè ṣàṣìṣe nínú ìṣirò." },
      { objective: "O4", q: "Èwo ni AI KÒ lè ṣe fún ọ?", options: ["Ṣàlàyé ọ̀rọ̀ ìdánrawò kan", "Yí àkọsílẹ̀ padà sí tábìlì", "Rí bí o ṣe ń ṣe é níbi ìdánrawò", "Kọ ìbéèrè fún olùkọ́ni rẹ"], answer: 2, why: "Kò lè rí ọ nígbà tí o ń ṣe ìdánrawò." },
      { objective: "O4", q: "Kí ni olùtọ́jú eléré ìdárayá (athletic trainer) ń ṣe?", options: ["Ó ń dènà ìpalára, ó ń tọ́jú rẹ̀, ó sì ń ràn lọ́wọ́ láti bọ̀ sípò", "Ó ń ta bàtà", "Ó ń bójú tó ìkànnì àjọlò", "Ó ń kọ ètò àkókò ẹgbẹ́"], answer: 0, why: "Olùtọ́jú eléré ìdárayá jẹ́ akọ́ṣẹ́mọṣẹ́ ìlera tó ní ìwé àṣẹ." },
      { objective: "O5", q: "Ètò kan lórí ayélujára sọ pé kí o dín omi kù láti dé ìwọ̀n ara kan. Èyí jẹ́:", options: ["Láàbò fún gbogbo èèyàn", "Dandan", "Èrò tó dára kí eré tó bẹ̀rẹ̀", "Àmì ìkìlọ̀"], answer: 3, why: "Dídín oúnjẹ tàbí omi kù láti dé ìwọ̀n ara kan lè léwu." },
      { objective: "O5", q: "Ètò tí ó sọ pé \"kò sí ọjọ́ ìsinmi\" jẹ́:", options: ["Èyí tó dára jù fún ìdàgbàsókè", "Àmì ìkìlọ̀", "Ohun tí NCAA ń béèrè", "Ohun déédéé fún olùbẹ̀rẹ̀"], answer: 1, why: "Ìsinmi jẹ́ apá kan ìdánrawò; àìsí ìsinmi jẹ́ àmì ìkìlọ̀." },
      { objective: "O5", q: "Kí o tó lo àfikún oúnjẹ èyíkéyìí, bá ẹni yìí sọ̀rọ̀:", options: ["Ìpolówó ọjà kan", "Olùtọ́jú eléré ìdárayá rẹ tàbí onímọ̀ oúnjẹ tí a forúkọ rẹ̀ sílẹ̀", "Ọ̀rẹ́ nínú ẹgbẹ́", "Kò sí ẹnìkan"], answer: 1, why: "Wọ́n lè ṣàlàyé ewu rẹ̀, pẹ̀lú àwọn èròjà tí a fòfin dè." },
      { objective: "O5", q: "Tí ìmọ̀ràn AI bá tako ètò olùkọ́ni rẹ, o máa:", options: ["Tẹ̀lé AI", "Kúrò nínú ẹgbẹ́", "Tẹ̀lé olùkọ́ni rẹ kí o sì béèrè nípa rẹ̀", "Ṣe méjèèjì"], answer: 2, why: "Olùkọ́ni rẹ mọ̀ ọ́, ó sì mọ ètò ẹgbẹ́." },
      { objective: "O6", q: "Ìròyìn tó dára fún olùkọ́ni ní:", options: ["Àfojúsùn rẹ, ohun tí ìsọfúnni rẹ fi hàn, àti àwọn ìbéèrè rẹ", "Ẹ̀sùn nìkan", "Àròkọ gígùn", "Ọ̀rọ̀ aṣínà rẹ"], answer: 0, why: "Ọ̀rọ̀ kúkúrú tó yé ń ran àwọn olùkọ́ni tí ọwọ́ wọn dí lọ́wọ́." },
      { objective: "O6", q: "Lẹ́yìn tí AI bá kọ àkọ́pẹrẹ ìròyìn rẹ, o yẹ kí o:", options: ["Fi í ránṣẹ́ láìkà á", "Fi í sí gbangba", "Tún un kọ ní ọ̀rọ̀ ara rẹ", "Fi í ránṣẹ́ sí abánidíje rẹ"], answer: 2, why: "Ó yẹ kí ó dún bí ìwọ, kí ó sì jẹ́ òtítọ́." },
      { objective: "O6", q: "Ìpele ìdánrawò (training block) ni:", options: ["Igi pálapàla kan", "Bọ́ọ̀lù tí a dí", "Ọjọ́ ìsinmi", "Àwọn ọ̀sẹ̀ kan tí ó ní ohun pàtàkì kan"], answer: 3, why: "Àwọn olùkọ́ni máa ń ṣètò ìdánrawò ní ìpele-ìpele." },
      { objective: "O4", q: "Ọ̀nà tó dára jù láti lo AI fún ìdánrawò ni láti:", options: ["Fi rọ́pò olùkọ́ni rẹ", "Lóye ìsọfúnni rẹ kí o sì múra ìbéèrè tó dára jù sílẹ̀", "Ṣàyẹ̀wò ìpalára", "Yan àfikún oúnjẹ rẹ"], answer: 1, why: "AI ń ràn ọ́ lọ́wọ́ láti lóye àti láti múra sílẹ̀; ènìyàn ló ń pinnu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Àfojúsùn tí a lè wọ̀n", objective: "O1", notYet: "Àfojúsùn náà kò ṣe kedere, tàbí nọ́mbà, ọjọ́ tàbí ìdánwò kò sí.", meets: "Nǹkan kan, nọ́mbà, ọjọ́ àti ìdánwò, tí olùkọ́ni fọwọ́ sí.", exceeds: "Ó ní nọ́mbà ìbẹ̀rẹ̀, ó sì bá apá kan tí a dárúkọ nínú ètò sáà ẹgbẹ́ mu." },
      { name: "Àkọsílẹ̀ ìdánrawò", objective: "O2", notYet: "Ìdánrawò tí kò tó 4, tàbí àwọn ọ̀wọ̀n kan kò sí.", meets: "Ọjọ́, Ìdánrawò, Ìsapá àti Èsì kún fún ó kéré tán ìdánrawò 4.", exceeds: "A kọ ìdánrawò kọ̀ọ̀kan ní ọjọ́ kan náà, pẹ̀lú àkọsílẹ̀ kúkúrú tàbí wákàtí oorun." },
      { name: "Àkópọ̀ ìtẹ̀sí", objective: "O3", notYet: "Kò sí chart, tàbí ọ̀nà tí ó ń lọ kò tọ́ tàbí kò sí.", meets: "Chart kan àti àkópọ̀ gbólóhùn kan tàbí méjì nípa ọ̀nà tí ó ń lọ, pẹ̀lú ìsapá tí a fi wé èsì àti ìṣirò AI tí a ṣàyẹ̀wò.", exceeds: "Ó rí ìdúró sójú kan tàbí ìsapá tó ń lọ sókè pẹ̀lú èsì tí kò yí padà, ó sì sọ ọ́ di ìbéèrè fún olùkọ́ni." },
      { name: "Lílo AI láìléwu", objective: "O5", notYet: "Ó tẹ̀lé tàbí tún ìmọ̀ràn tí ó ní àmì ìkìlọ̀ sọ, tàbí ó fi àkọsílẹ̀ ìlera han AI.", meets: "Kò tẹ̀lé ìmọ̀ràn tí ó ní àmì ìkìlọ̀ kankan, ó sì mú ohunkóhun tí ó ṣeé ṣiyèméjì lọ sọ́dọ̀ olùkọ́ni tàbí olùtọ́jú eléré ìdárayá.", exceeds: "Ó dárúkọ àmì ìkìlọ̀ náà gan-an àti ìdí tí kò fi láàbò nígbà tí ó ń gbé e dìde." },
      { name: "Ìbéèrè fún olùkọ́ni", objective: "O6", notYet: "Ìbéèrè tí kò tó mẹ́ta, tàbí ìròyìn náà dàbí ọ̀rọ̀ AI tí a dà kọ.", meets: "Ìròyìn gbólóhùn mẹ́ta àti ìbéèrè mẹ́ta tó yé ní ọ̀rọ̀ eléré fúnra rẹ̀.", exceeds: "Eléré kọ ìdáhùn olùkọ́ni sílẹ̀, ó sì tún ètò rẹ̀ ṣe látinú wọn." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí iṣẹ́ ìkẹyìn, tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń kọ àkọsílẹ̀ ìdánrawò wọn lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn dé àfojúsùn tí a lè wọ̀n wọn tàbí pé àwọn ń sún mọ́ ọn ní ọjọ́ tí a fohùn ṣọ̀kan lé",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn mú ìròyìn àti ìbéèrè lọ bá olùkọ́ni wọn, tàbí pé àwọn kọ ìmọ̀ràn tí kò láàbò"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Àkáǹtì Google ọ̀fẹ́ fún Google Sheets",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Àfojúsùn kan tí olùkọ́ni rẹ fọwọ́ sí",
      "Nǹkan bí ìṣẹ́jú 60 ẹ̀kọ́, lẹ́yìn náà nǹkan bí ìṣẹ́jú kan lẹ́yìn ìdánrawò kọ̀ọ̀kan fún ọ̀sẹ̀ mẹ́rin"
    ],
    facilitatorNotes: [
      "Bá olùkọ́ni àgbà sọ̀rọ̀ kí o tó bẹ̀rẹ̀ kí àfojúsùn àti àkọsílẹ̀ lè bá ètò ẹgbẹ́ mu; ẹ̀kọ́ yìí kò ṣètò ìdánrawò.",
      "Kọ́ àwọn eléré láti yọ orúkọ àti àkọsílẹ̀ ìlera kúrò kí wọ́n tó fi ìsọfúnni kankan sínú irinṣẹ́ AI.",
      "Fi ìbéèrè èyíkéyìí nípa ìrora, ìpalára, ìwọ̀n ara tàbí àfikún oúnjẹ ránṣẹ́ sí olùtọ́jú eléré ìdárayá tàbí onímọ̀ oúnjẹ tí a forúkọ rẹ̀ sílẹ̀; má ṣe dáhùn rẹ̀ níwájú ẹgbẹ́.",
      "Kọ́kọ́ ṣe Ẹ̀kọ́ 1 sí 2, jẹ́ kí àwọn eléré kọ àkọsílẹ̀ fún ọ̀sẹ̀ mẹ́rin, lẹ́yìn náà ṣe Ẹ̀kọ́ 3 sí 6 àti iṣẹ́ ìkẹyìn.",
      "Ṣètò ìpàdé kúkúrú pẹ̀lú olùkọ́ni kí àwọn eléré lè fi ìròyìn àti ìbéèrè wọn hàn."
    ]
  }
};
