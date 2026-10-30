"use strict";

// Koach Learn course (Yoruba translation of shared/intro-to-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "intro-to-ai-yo",
  lang: "yo",
  translationOf: "intro-to-ai",
  category: "Seniors and Technology",
  name: "Ìfihàn sí Ọgbọ́n Àtọwọ́dá (AI)",
  skills: "Ṣíṣàlàyé ohun tí AI jẹ́, Rírí AI nínú ayé ojoojúmọ́, Kíkọ prompt tó yé, Mímú ìdáhùn dára sí i àti ṣíṣàyẹ̀wò rẹ̀, Lílo AI lọ́nà tó tọ́ àti láìléwu",
  outcome: "ṣàlàyé ní ọ̀rọ̀ tó rọrùn ohun tí ọgbọ́n àtọwọ́dá (AI) jẹ́ àti bí ó ṣe ń kẹ́kọ̀ọ́, rí i nínú àwọn irinṣẹ́ tí o ti ń lò, kí o sì lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti parí iṣẹ́ ojoojúmọ́ gidi kan: béèrè ní kedere, mú ìdáhùn dára sí i, ṣàyẹ̀wò rẹ̀, kí o má sì fi ìsọfúnni àdáni sínú rẹ̀.",
  about: [
    "Ọgbọ́n àtọwọ́dá, tàbí AI, wà nínú fóònù, máàpù, ímeèlì, ojú-òpó ìtajà àti ojú-òpó wíwá iṣẹ́. Ẹ̀kọ́ yìí ṣàlàyé ohun tí ó jẹ́ ní ọ̀rọ̀ tó rọrùn, ó sì fi bí o ṣe lè lò ó dáadáa hàn ọ́. Ó wà fún gbogbo ènìyàn: àwọn bàbá àgbà àti ìyá àgbà, akẹ́kọ̀ọ́, àwọn tí ń wá iṣẹ́, olùyọ̀ǹda àti àwọn ẹgbẹ́ kékeré.",
    "Ní Orí 1, o máa kọ́ ohun tí AI jẹ́, bí ó ṣe ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ, àti ibi tí o ti ń bá a pàdé tẹ́lẹ̀. Ní Orí 2, o máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti ṣe iṣẹ́ gidi, ṣàyẹ̀wò ohun tí ó sọ, kí o sì lò ó lọ́nà tó tọ́ àti láìléwu.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún: ka á, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ kúkúrú wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Yan iṣẹ́ gidi kan, bí ṣíṣe ètò oúnjẹ alẹ́ ẹbí, ọ̀rọ̀ láti pe àwọn olùyọ̀ǹda, tàbí ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kan. Lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti ṣe é: kọ prompt tó yé, béèrè ìyípadà méjì láti mú un dára sí i, ṣàyẹ̀wò òtítọ́ kan nínú ìdáhùn lórí ojú-òpó ìjọba tàbí ojú-òpó tí a gbẹ́kẹ̀lé, kí o sì rí i dájú pé kò sí ìsọfúnni àdáni nínú prompt náà. Lẹ́yìn náà, ṣàlàyé fún ọ̀rẹ́ kan ní gbólóhùn mẹ́ta ohun tí AI jẹ́ àti ìdí tí o fi ṣàyẹ̀wò ìdáhùn náà.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí AI jẹ́ tuntun fún: àwọn àgbà, akẹ́kọ̀ọ́, àwọn tí ń wá iṣẹ́, olùyọ̀ǹda, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àti òṣìṣẹ́ àjọ aláìlérè tàbí ẹgbẹ́ kékeré. Ọ̀pọ̀ ti gbọ́ nípa AI nínú ìròyìn, ṣùgbọ́n wọn kò tíì mọ̀ọ́mọ̀ lo olùrànlọ́wọ́ AI rí.",
    startingPoint: "Wọ́n lè lo fóònù tàbí kọ̀mpútà láti ṣí browser, tẹ ọ̀rọ̀ kúkúrú, kí wọ́n sì lo àwọn app tí a mọ̀ bí máàpù, ímeèlì àti fídíò. Díẹ̀ nínú wọn ló lè sọ ohun tí AI jẹ́, ibi tí ó wà nínú àwọn app wọn, tàbí bí wọ́n ṣe lè béèrè ìrànlọ́wọ́ lọ́wọ́ olùrànlọ́wọ́ AI kí wọ́n sì ṣàyẹ̀wò ohun tí ó sọ.",
    gap: "AI wà nínú fóònù, máàpù, ímeèlì, ìtajà, báńkì àti ojú-òpó wíwá iṣẹ́ báyìí, àwọn olùrànlọ́wọ́ AI ọ̀fẹ́ sì lè dín àkókò kù gan-an. Àwọn tí kò yé sábà máa ń sá fún irinṣẹ́ tó wúlò, tàbí kí wọ́n gbẹ́kẹ̀lé e jù, kí wọ́n fi ìsọfúnni àdáni hàn, tàbí kí jìbìtì tí ó ń lo AI tàn wọ́n jẹ.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ tuntun, bí prompt, data àti ojúsàájú (bias)",
      "Ẹ̀rọ: fóònù, tablet tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì àti browser",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6, nǹkan bí ìṣẹ́jú 60 lápapọ̀",
      "Owó: olùrànlọ́wọ́ AI ọ̀fẹ́ nìkan (ChatGPT, Microsoft Copilot tàbí Google Gemini); kò sí ètò tí a ń sanwó fún",
      "Àṣírí: àwọn akẹ́kọ̀ọ́ kò gbọdọ̀ tẹ nọ́mbà ìdánimọ̀, ọ̀rọ̀ aṣínà, ìsọfúnni báńkì, nọ́mbà ìlera tàbí àdírẹ́sì kíkún sínú olùrànlọ́wọ́ AI"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ gbọdọ̀ lè ṣí browser kí wọ́n sì tẹ ọ̀rọ̀ kúkúrú."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Láìwo àkọsílẹ̀", action: "ṣàlàyé ní ọ̀rọ̀ tó rọrùn ohun tí ọgbọ́n àtọwọ́dá àti AI olùṣẹ̀dá (generative AI) jẹ́, àti ìdí tí AI fi lè dún bí ó dá a lójú kí ó sì ṣì ṣàṣìṣe", standard: "ní gbólóhùn méjì tàbí mẹ́ta tí ó lo èrò àwòṣe àti àmọ̀tán" },
    { id: "O2", condition: "Tí a bá fún ọ ní àpẹẹrẹ tó rọrùn bí àlẹ̀mọ́ spam", action: "ṣàpèjúwe bí AI ṣe ń kẹ́kọ̀ọ́ láti inú data àti bí data tí kò dára tàbí tí ó fi ẹ̀gbẹ́ kan sílẹ̀ ṣe ń mú ìdáhùn ojúsàájú wá", standard: "kí o dárúkọ àwọn àpẹẹrẹ, àwọn àwòṣe, àti ọ̀nà kan tí àmọ̀tán náà fi lè ṣe àìdáa" },
    { id: "O3", condition: "Lórí fóònù tàbí kọ̀mpútà tìrẹ", action: "dá ó kéré tán ibi márùn-ún mọ̀ tí o ti ń lo AI tẹ́lẹ̀, kí o sì wá ètò (setting) kan tí ó ń darí rẹ̀", standard: "pẹ̀lú àpẹẹrẹ márùn-ún tó tọ̀nà àti ètò kan tí o ṣí" },
    { id: "O4", condition: "Pẹ̀lú olùrànlọ́wọ́ AI ọ̀fẹ́", action: "kọ prompt tó yé tí ó sọ ohun tí o nílò, ipò náà, àti bí o ṣe fẹ́ kí ìdáhùn rí", standard: "pẹ̀lú gbogbo apá mẹ́ta láìsí ìsọfúnni àdáni kankan" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìdáhùn àkọ́kọ́ láti ọ̀dọ̀ olùrànlọ́wọ́ AI", action: "mú ìdáhùn náà dára sí i pẹ̀lú ìbéèrè àfikún, kí o sì ṣàyẹ̀wò àwọn òtítọ́ rẹ̀ lórí orísun ìjọba tàbí orísun tí a gbẹ́kẹ̀lé", standard: "pẹ̀lú ó kéré tán ìbéèrè àfikún méjì àti ó kéré tán òtítọ́ kan tí o ṣàyẹ̀wò" },
    { id: "O6", condition: "Kí o tó fi prompt ránṣẹ́ tàbí lo ọ̀rọ̀ tí AI kọ", action: "ṣàyẹ̀wò prompt náà fún ìsọfúnni àdáni, tẹ̀lé òfin nípa ìrànlọ́wọ́ AI, kí o sì dáhùn láìléwu sí jìbìtì tí ó ń lo AI", standard: "kí o fi àmì ìdúrópò rọ́pò gbogbo ìsọfúnni àdáni, kí o sì yan ìgbésẹ̀ ààbò tó tọ́ ní gbogbo ìgbà" }
  ],
  chapters: [
    {
      name: "Orí 1: Ohun tí AI jẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI ní ọ̀rọ̀ tó rọrùn",
          minutes: 4,
          goal: "Ṣàlàyé ní gbólóhùn méjì ohun tí ọgbọ́n àtọwọ́dá jẹ́.",
          text: [
            "Ọgbọ́n àtọwọ́dá (AI) túmọ̀ sí àwọn ètò kọ̀mpútà tí ń ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe: gbígbọ́ ọ̀rọ̀ tí a sọ ní àgbọ́yé, dídá ojú ènìyàn mọ̀ nínú fọ́tò, dídábàá orin, títúmọ̀ gbólóhùn, tàbí kíkọ ìdáhùn sí ìbéèrè.",
            "AI kì í ronú tàbí ní ìmọ̀lára bí ènìyàn. Ó mọ̀ dáadáa nípa wíwá àwòṣe nínú àpẹẹrẹ tó pọ̀ gan-an, kí ó sì lo àwọn àwòṣe náà láti ṣe àmọ̀tán. Àmọ̀tán tó dára lè dàbí ọgbọ́n; àmọ̀tán tí kò tọ́ sì lè dún bí ó ti dá a lójú bákan náà.",
            "Oríṣiríṣi AI ló wà. Èyí tí àwọn ènìyàn ń sọ̀rọ̀ nípa rẹ̀ jù lónìí ni AI olùṣẹ̀dá (generative AI): àwọn irinṣẹ́ bí ChatGPT, Microsoft Copilot àti Google Gemini tí ń ṣẹ̀dá (ṣe) ọ̀rọ̀, àwòrán tàbí ohùn tuntun nígbà tí o bá béèrè."
          ],
          words: [["Ọgbọ́n àtọwọ́dá (AI)", "àwọn ètò kọ̀mpútà tí ń ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe, bí gbígbọ́ ọ̀rọ̀ ní àgbọ́yé tàbí dídáhùn ìbéèrè."], ["Àwòṣe (pattern)", "ohun tí ó ń tún ara rẹ̀ ṣe lọ́nà tí o lè sọ tẹ́lẹ̀."], ["AI olùṣẹ̀dá (generative AI)", "AI tí ń ṣe ọ̀rọ̀, àwòrán tàbí ohùn tuntun nígbà tí o bá béèrè."]],
          slides: [
            { title: "AI ni...", bullets: ["Àwọn ètò kọ̀mpútà tí ń ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe", "Ọ̀rọ̀ sísọ, fọ́tò, àbá, ìtúmọ̀, kíkọ̀wé"] },
            { title: "Bí ó ṣe ń ṣiṣẹ́, ní ìlà kan", bullets: ["Ó ń wá àwòṣe nínú ọ̀pọ̀ àpẹẹrẹ", "Lẹ́yìn náà ó ń ṣe àmọ̀tán tó dára jù"] },
            { title: "Kì í ṣe ènìyàn", bullets: ["Kì í ronú, kì í sì ní ìmọ̀lára", "Àmọ̀tán tí kò tọ́ lè dún bí ó ti dá a lójú bí èyí tó tọ́"] },
            { title: "AI olùṣẹ̀dá (generative AI)", bullets: ["Ó ń ṣe ọ̀rọ̀, àwòrán tàbí ohùn tuntun", "Àpẹẹrẹ: ChatGPT, Microsoft Copilot, Google Gemini"] }
          ],
          tryIt: "Láìwo ẹ̀yìn, sọ tàbí kọ gbólóhùn méjì tí ó ṣàlàyé AI fún ẹnì kan tí kò gbọ́ nípa rẹ̀ rí. Lo ọ̀rọ̀ náà \"àwòṣe\" àti \"àmọ̀tán\".",
          youCanNow: "ṣàlàyé ní ọ̀rọ̀ tó rọrùn ohun tí AI jẹ́ àti ìdí tí ó fi lè ṣàṣìṣe.",
          quickCheck: [
            { objective: "O1", q: "Nínú ẹ̀kọ́ yìí, kí ni AI olùṣẹ̀dá (generative AI) ń ṣe?", options: ["Ó kàn ń to ímeèlì sínú fódà nìkan", "Ó ń ṣe ọ̀rọ̀, àwòrán tàbí ohùn tuntun nígbà tí o bá béèrè", "Ó ń ronú, ó sì ní ìmọ̀lára bí ènìyàn", "Ó máa ń mọ ìdáhùn òtítọ́ nígbà gbogbo"], answer: 1, why: "Àwọn irinṣẹ́ AI olùṣẹ̀dá bí ChatGPT, Copilot àti Gemini ń ṣe ọ̀rọ̀, àwòrán tàbí ohùn tuntun." },
            { objective: "O1", q: "Ọ̀rẹ́ kan sọ pé, \"AI náà dún bí ó ti dá a lójú gan-an, nítorí náà ó gbọdọ̀ tọ̀nà.\" Kí ni o máa sọ fún un?", options: ["Òótọ́ ni; AI kì í ṣàṣìṣe tí ó bá dún bí ó ti dá a lójú", "Àwọn irinṣẹ́ AI tí a ń sanwó fún nìkan ló lè ṣàṣìṣe", "AI ń ṣe àmọ̀tán láti inú àwòṣe, nítorí náà àmọ̀tán tí kò tọ́ lè dún bí ó ti dá a lójú bákan náà", "AI máa ń ṣàṣìṣe nígbà tí íńtánẹ́ẹ̀tì bá lọ́ra nìkan"], answer: 2, why: "AI ń lo àwòṣe láti ṣe àmọ̀tán, àmọ̀tán tí kò tọ́ sì lè dún bí ó ti dá a lójú bí èyí tó dára." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bí AI ṣe ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ",
          minutes: 5,
          goal: "Ṣàpèjúwe bí AI ṣe ń kẹ́kọ̀ọ́, pẹ̀lú àpẹẹrẹ tó rọrùn.",
          text: [
            "Ọ̀pọ̀ AI lónìí ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ dípò òfin tí ènìyàn tẹ sínú rẹ̀. Láti kọ́ ètò kan láti dá ímeèlì spam (ímeèlì ìdọ̀tí) mọ̀, àwọn ènìyàn máa ń fi ọ̀pọ̀ ímeèlì tí a ti sàmì sí \"spam\" tàbí \"kì í ṣe spam\" hàn án. Ètò náà ń wá àwọn àwòṣe, bí àwọn ọ̀rọ̀ kan tàbí ìjápọ̀ (link) àjèjì, ó sì ń lò wọ́n lórí ímeèlì tuntun.",
            "Àwọn àpẹẹrẹ tí ó ń kẹ́kọ̀ọ́ láti inú wọn ni a ń pè ní data. Data tó dára tí ó sì yàtọ̀ síra ń mú AI tó dára jù wá. Tí data bá ti pẹ́, tí ó bá fi ẹ̀gbẹ́ kan sílẹ̀, tàbí tí kò bá ní àwọn ẹgbẹ́ ènìyàn kan, àmọ̀tán AI náà yóò ti pẹ́, yóò fi ẹ̀gbẹ́ kan sílẹ̀, tàbí yóò ṣe àìdáa bákan náà. Èyí ni a ń pè ní ojúsàájú (bias).",
            "Àwọn irinṣẹ́ kíkọ̀wé bí ChatGPT kẹ́kọ̀ọ́ láti inú ọ̀rọ̀ tí ó pọ̀ gan-an, nítorí náà wọ́n mọ̀ dáadáa nípa sísọ ọ̀rọ̀ tí ó yẹ kí ó tẹ̀lé e. Ìdí nìyẹn tí wọ́n fi ń kọ̀wé dáadáa, ìdí náà sì nìyẹn tí wọ́n fi lè kọ nǹkan tí ó dún bí òótọ́ ṣùgbọ́n tí kì í ṣe òótọ́."
          ],
          steps: ["Àwọn ènìyàn kó ọ̀pọ̀ àpẹẹrẹ jọ (data).", "Ètò náà wá àwọn àwòṣe nínú àpẹẹrẹ náà.", "Ó lo àwọn àwòṣe náà láti ṣe àmọ̀tán nípa nǹkan tuntun.", "Àwọn ènìyàn ṣàyẹ̀wò àmọ̀tán náà, wọ́n sì fún un ní àpẹẹrẹ tó dára jù nígbà tí ó bá ṣàṣìṣe."],
          words: [["Data", "àwọn àpẹẹrẹ, nọ́mbà, ọ̀rọ̀ tàbí àwòrán tí AI ń kẹ́kọ̀ọ́ láti inú wọn."], ["Ojúsàájú (bias)", "nígbà tí data bá fi ẹ̀gbẹ́ kan sílẹ̀, tí àmọ̀tán AI fi ṣe àìdáa sí àwọn ènìyàn kan."], ["Ìkọ́ni (training)", "ìgbésẹ̀ tí AI ti ń kọ́ àwòṣe láti inú data."]],
          slides: [
            { title: "Kíkẹ́kọ̀ọ́ láti inú àpẹẹrẹ", bullets: ["Fi ọ̀pọ̀ ímeèlì tí a sàmì sí spam tàbí kì í ṣe spam hàn án", "Ó wá àwọn àwòṣe", "Ó to ímeèlì tuntun ní ìbámu pẹ̀lú àwọn àwòṣe náà"] },
            { title: "Data ṣe pàtàkì", bullets: ["Data tó dára, tó yàtọ̀ síra = àmọ̀tán tó dára jù", "Data tó ti pẹ́ tàbí tó fi ẹ̀gbẹ́ kan sílẹ̀ = àmọ̀tán tó ti pẹ́ tàbí tí kò dáa"] },
            { title: "Ìdí tí AI kíkọ̀wé fi lè ṣàṣìṣe", bullets: ["Ó ń sọ àwọn ọ̀rọ̀ tí ó kàn tẹ́lẹ̀ láti inú àwòṣe", "Ó lè dún bí òótọ́ kí ó sì ṣì jẹ́ irọ́"] }
          ],
          tryIt: "Ronú nípa nǹkan kan tí o kọ́ láti inú àpẹẹrẹ, bí mímọ èso tó ti pọ́n yàtọ̀ sí èso tí kò tíì pọ́n. Kọ bí o ṣe máa kọ́ kọ̀mpútà ní ohun kan náà: àwọn àpẹẹrẹ wo ni o máa fi hàn án, kí ni ó sì lè ṣàṣìṣe nínú rẹ̀?",
          youCanNow: "ṣàpèjúwe bí AI ṣe ń kẹ́kọ̀ọ́ láti inú data àti ìdí tí data tí kò dára fi ń mú ìdáhùn tí kò dára tàbí tí kò tọ́ wá.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ojúsàájú (bias) nínú AI?", options: ["Àmọ̀tán tí ó fi ẹ̀gbẹ́ kan sílẹ̀ nítorí pé data ti pẹ́, ó fi ẹ̀gbẹ́ kan sílẹ̀, tàbí kò ní àwọn ẹgbẹ́ kan", "Ètò kan tí ó ń mú AI yára sí i", "Irú kòkòrò àrùn kọ̀mpútà (virus) kan", "Ọ̀nà láti mú ojú-iboju mọ́lẹ̀ sí i"], answer: 0, why: "Nígbà tí àwọn àpẹẹrẹ bá fi ẹ̀gbẹ́ kan sílẹ̀ tàbí tí kò bá ní àwọn ẹgbẹ́ ènìyàn kan, àmọ̀tán AI náà yóò ṣe àìdáa pẹ̀lú." },
            { objective: "O2", q: "O fẹ́ kọ́ ètò kan láti mọ èso tó ti pọ́n yàtọ̀ sí èso tí kò tíì pọ́n. Kí ni o máa kọ́kọ́ ṣe?", options: ["Tẹ òfin kan, kí o sì retí pé yóò ṣiṣẹ́", "Fi fọ́tò ọ̀gẹ̀dẹ̀ kan ṣoṣo hàn án", "Sọ fún un pé kí ó ṣe àmọ̀tán láìsí àpẹẹrẹ", "Fi ọ̀pọ̀ fọ́tò èso hàn án, kí ọ̀kọ̀ọ̀kan ní àmì pé ó ti pọ́n tàbí kò tíì pọ́n"], answer: 3, why: "AI ń kẹ́kọ̀ọ́ nípa wíwá àwòṣe nínú ọ̀pọ̀ àpẹẹrẹ tí a ti sàmì sí, tí a ń pè ní data." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rírí AI nínú ọjọ́ rẹ",
          minutes: 4,
          goal: "Wá ó kéré tán ibi márùn-ún tí o ti ń lo AI tẹ́lẹ̀.",
          text: [
            "Ó ṣeé ṣe kí o máa lo AI lójoojúmọ́ láìpè é ní orúkọ yẹn. Máàpù fóònù rẹ ń yan ọ̀nà tí ó yára jù láti yẹra fún súnkẹrẹ-fàkẹrẹ ọkọ̀. Ímeèlì rẹ ń kó ìdọ̀tí lọ sínú fódà spam. Àwọn app fídíò àti orin ń dábàá ohun tí o máa wò tàbí gbọ́ tẹ̀lé e. Fóònù rẹ ń ṣí pẹ̀lú ojú rẹ. Kíbọ́ọ̀dù rẹ ń dábàá ọ̀rọ̀ tí ó kàn.",
            "Àwọn olùrànlọ́wọ́ ohùn bí Siri, Google Assistant àti Alexa ń lo AI láti gbọ́ ohun tí o sọ ní àgbọ́yé. Àwọn báńkì ń lo AI láti rí sísan owó pẹ̀lú káàdì tí ó dàbí àjèjì. Àwọn ojú-òpó wíwá iṣẹ́ ń lò ó láti so résumé rẹ pọ̀ mọ́ àwọn iṣẹ́ tí ó ṣí sílẹ̀.",
            "Mímọ ibi tí AI wà ń ràn ọ́ lọ́wọ́ láti béèrè ìbéèrè tó dára: kí ló dé tí app náà fi dábàá èyí? Ṣé mo lè pa á? Kí ni ó mọ̀ nípa mi? Ọ̀pọ̀ app ló ní àwọn ètò (settings) tí o ti lè rí èyí tàbí yí i padà."
          ],
          words: [["Olùrànlọ́wọ́ ohùn (voice assistant)", "AI tí o ń bá sọ̀rọ̀ sókè, bí Siri, Google Assistant tàbí Alexa."], ["Àbá (recommendation)", "ohun tí app kan dábàá ní ìbámu pẹ̀lú ohun tí ìwọ tàbí àwọn ènìyàn bí ìwọ ti yàn tẹ́lẹ̀."]],
          slides: [
            { title: "AI tí o ti ń lò tẹ́lẹ̀", bullets: ["Máàpù tí ń yẹra fún súnkẹrẹ-fàkẹrẹ ọkọ̀", "Àlẹ̀mọ́ spam nínú ímeèlì", "Fídíò, orin àti ọjà tí a dábàá fún ọ"] },
            { title: "AI ojoojúmọ́ míì", bullets: ["Ṣíṣí fóònù pẹ̀lú ojú", "Olùrànlọ́wọ́ ohùn: Siri, Google Assistant, Alexa", "Ìkìlọ̀ báńkì nípa lílo káàdì lọ́nà àjèjì"] },
            { title: "Àwọn ìbéèrè tó dára láti béèrè", bullets: ["Kí ló dé tí ó fi dábàá èyí?", "Ṣé mo lè pa á?", "Kí ni ó mọ̀ nípa mi? Wo àwọn ètò (settings)"] }
          ],
          tryIt: "Wo inú fóònù tàbí kọ̀mpútà rẹ kí o sì kọ ibi márùn-ún tí ó ń lo AI. Fún ọ̀kan nínú wọn, ṣí àwọn ètò (settings) rẹ̀ kí o sì wá ohun kan tí o lè yí padà.",
          youCanNow: "rí AI nínú àwọn irinṣẹ́ tí o ń lò lójoojúmọ́, kí o sì wá àwọn ètò tí ó ń darí rẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Èwo nínú ìwọ̀nyí ló ń lo AI láti gbọ́ ohun tí o sọ ní àgbọ́yé?", options: ["Kàlẹ́ńdà ìwé", "Fìtílà orí tábìlì", "Olùrànlọ́wọ́ ohùn bí Siri tàbí Alexa", "Àkókò bọ́ọ̀sì tí a tẹ̀ sórí ìwé"], answer: 2, why: "Àwọn olùrànlọ́wọ́ ohùn ń lo AI láti gbọ́ ọ̀rọ̀ ní àgbọ́yé." },
            { objective: "O3", q: "App orin kan ń dábàá àwọn orin tí o kò fẹ́ ṣáá, o sì ń ṣe kàyéfì ohun tí ó mọ̀ nípa rẹ. Kí ni o máa ṣe?", options: ["Pa fóònù rẹ rẹ́", "Ṣí àwọn ètò (settings) app náà láti rí ohun tí ó ń lò tàbí yí i padà", "Dáwọ́ gbígbọ́ orin dúró", "Tẹ ọ̀rọ̀ aṣínà rẹ sínú àpótí ìwádìí"], answer: 1, why: "Ọ̀pọ̀ app ló ní àwọn ètò tí o ti lè rí bí àbá ṣe ń ṣiṣẹ́ tàbí yí i padà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ohun tí AI jẹ́",
        questions: [
          { objective: "O1", q: "Èwo ni àpèjúwe AI tó dára jù ní ọ̀rọ̀ tó rọrùn?", options: ["Róbọ́ọ̀tì tí ń ronú tí ó sì ní ìmọ̀lára", "Ojú-òpó wẹ́ẹ̀bù tí ó máa ń tọ̀nà nígbà gbogbo", "Irú wáyà íńtánẹ́ẹ̀tì kan", "Àwọn ètò kọ̀mpútà tí ń wá àwòṣe tí wọ́n sì ń ṣe àmọ̀tán láti ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe"], answer: 3, why: "AI ń wá àwòṣe nínú àpẹẹrẹ, ó sì ń lò wọ́n láti ṣe àmọ̀tán." },
          { objective: "O1", q: "Kí ni AI olùṣẹ̀dá (generative AI) ń ṣe?", options: ["Ó ń tún fóònù tí ó bàjẹ́ ṣe", "Ó ń gba agbára sínú bátìrì rẹ", "Ó kàn ń tọ́jú fáìlì nìkan", "Ó ń ṣe ọ̀rọ̀, àwòrán tàbí ohùn tuntun nígbà tí o bá béèrè"], answer: 3, why: "Olùṣẹ̀dá túmọ̀ sí pé ó ń ṣe nǹkan tuntun." },
          { objective: "O2", q: "A kọ́ AI kan pẹ̀lú fọ́tò ẹgbẹ́ ènìyàn kan ṣoṣo. Kí ni ìṣòro tí ó ṣeé ṣe kí ó wáyé?", options: ["Yóò ṣiṣẹ́ bákan náà fún gbogbo ènìyàn", "Yóò yára sí i", "Àmọ̀tán rẹ̀ lè ṣe àìdáa tàbí kí ó ṣàṣìṣe fún àwọn ẹgbẹ́ míì", "Yóò dáwọ́ iṣẹ́ dúró"], answer: 2, why: "Data tí ó fi ẹ̀gbẹ́ kan sílẹ̀ ń fa ojúsàájú." },
          { objective: "O2", q: "Kí ni \"data\" nínú AI?", options: ["Àwọn àpẹẹrẹ tí AI ń kẹ́kọ̀ọ́ láti inú wọn", "Ojú-iboju fóònù", "Irú ọ̀rọ̀ aṣínà kan", "Iye owó app náà"], answer: 0, why: "Data ni àwọn àpẹẹrẹ, ọ̀rọ̀, nọ́mbà tàbí àwòrán tí AI ń kẹ́kọ̀ọ́ láti inú wọn." },
          { objective: "O3", q: "Èwo nínú ìwọ̀nyí ni lílo AI lójoojúmọ́?", options: ["Ìyípadà iná (switch)", "Kàlẹ́ńdà ìwé", "App máàpù tí ń yan ọ̀nà láti yẹra fún súnkẹrẹ-fàkẹrẹ ọkọ̀", "Aago tí a ń yí"], answer: 2, why: "Àwọn app máàpù ń lo AI láti sọ bí ọkọ̀ ṣe máa pọ̀ tó, kí wọ́n sì yan ọ̀nà." }
        ]
      }
    },
    {
      name: "Orí 2: Lílo AI dáadáa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bíbéèrè ìrànlọ́wọ́ lọ́wọ́ olùrànlọ́wọ́ AI",
          minutes: 5,
          goal: "Ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ kí o sì kọ prompt tó yé tí ó ní apá mẹ́ta.",
          text: [
            "Àwọn olùrànlọ́wọ́ AI ọ̀fẹ́ ni ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) àti Google Gemini (gemini.google.com). Wọ́n ń ṣiṣẹ́ nínú browser tàbí gẹ́gẹ́ bí app láti inú ilé ìtajà app gidi.",
            "Ohun tí o tẹ ni a ń pè ní prompt. Prompt tó yé ní apá mẹ́ta: ohun tí o nílò, díẹ̀ nípa ipò náà, àti bí o ṣe fẹ́ kí ìdáhùn rí. Fún àpẹẹrẹ: \"Mo ń darí ibi ìpínkiri oúnjẹ kékeré ní ṣọ́ọ̀ṣì. Kọ ọ̀rọ̀ onínúure ìlà 4 tí ó ń pe àwọn olùyọ̀ǹda fún ọjọ́ Sátidé. Lo ọ̀rọ̀ tó rọrùn.\"",
            "Prompt ọ̀rọ̀ kan ṣoṣo bí \"olùyọ̀ǹda\" ń jẹ́ kí AI máa ṣe àmọ̀tán ohun tí o ní lọ́kàn, nítorí náà ìdáhùn yóò jẹ́ gbogbogbò, kò sì ní wúlò tó."
          ],
          steps: ["Ṣí olùrànlọ́wọ́ AI nínú browser tàbí nínú app gidi.", "Sọ ohun tí o nílò.", "Fi ipò náà kún un, láìsí ìsọfúnni àdáni.", "Sọ bí o ṣe fẹ́ kí ìdáhùn rí: gígùn, àkọsílẹ̀, ìgbésẹ̀, ọ̀rọ̀ tó rọrùn.", "Fi ránṣẹ́ kí o sì ka ìdáhùn."],
          words: [["Prompt", "ohun tí o tẹ tàbí sọ fún olùrànlọ́wọ́ AI láti béèrè nǹkan."], ["Olùrànlọ́wọ́ AI", "ètò AI tí o ń bá sọ̀rọ̀ nípa títẹ̀ ọ̀rọ̀ tàbí sísọ̀rọ̀, bí ChatGPT, Copilot tàbí Gemini."]],
          slides: [
            { title: "Àwọn olùrànlọ́wọ́ AI ọ̀fẹ́", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Apá mẹ́ta prompt tó yé", bullets: ["1. Ohun tí o nílò", "2. Ipò náà (láìsí ìsọfúnni àdáni)", "3. Bí o ṣe fẹ́ kí ìdáhùn rí"] },
            { title: "Àpẹẹrẹ", bullets: ["\"Mo ń darí ibi ìpínkiri oúnjẹ kékeré. Kọ ọ̀rọ̀ onínúure ìlà 4", "tí ó ń pe àwọn olùyọ̀ǹda fún Sátidé. Lo ọ̀rọ̀ tó rọrùn.\""] }
          ],
          tryIt: "Ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ kan. Kọ prompt apá mẹ́ta fún iṣẹ́ gidi kan ní ọ̀sẹ̀ yìí, bí ọ̀rọ̀ ọjọ́ìbí, ètò ìkẹ́kọ̀ọ́ tàbí àkọsílẹ̀ ohun tí o máa rà, kí o sì fi ránṣẹ́.",
          youCanNow: "ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ kí o sì kọ prompt tó yé tí ó mú ìdáhùn àkọ́kọ́ tó wúlò wá.",
          quickCheck: [
            { objective: "O4", q: "Kí ni prompt?", options: ["Ohun tí o tẹ tàbí sọ fún olùrànlọ́wọ́ AI", "Ìkìlọ̀ láti inú fóònù rẹ", "Ìdáhùn AI náà", "Irú ọ̀rọ̀ aṣínà kan"], answer: 0, why: "Prompt ni ohun tí o fún olùrànlọ́wọ́ AI láti sọ ohun tí o nílò fún un." },
            { objective: "O4", q: "O nílò ọ̀rọ̀ ọjọ́ìbí kúkúrú fún ẹ̀gbọ́n ìyá rẹ. Prompt wo ni o máa fi ránṣẹ́?", options: ["\"Ọjọ́ìbí\"", "\"Kọ nǹkan kan\"", "\"Ọ̀rọ̀\"", "\"Kọ ọ̀rọ̀ ọjọ́ìbí onífẹ̀ẹ́ ìlà 3 fún ẹ̀gbọ́n ìyá mi, tí ó fẹ́ràn iṣẹ́ ọgbà. Lo ọ̀rọ̀ tó rọrùn.\""], answer: 3, why: "Ó sọ ohun tí o nílò, ipò náà, àti bí o ṣe fẹ́ kí ìdáhùn rí." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mímú ìdáhùn dára sí i àti ṣíṣàyẹ̀wò rẹ̀",
          minutes: 5,
          goal: "Mú ìdáhùn dára sí i pẹ̀lú ìbéèrè àfikún kí o sì ṣàyẹ̀wò àwọn òtítọ́ rẹ̀.",
          text: [
            "Ka ìdáhùn àkọ́kọ́ sí àkọ́pẹrẹ. Nínú ìjíròrò kan náà, o lè béèrè pé: \"Jẹ́ kí ó kúrú sí i.\" \"Lo ọ̀rọ̀ tó rọrùn sí i.\" \"Fún mi ní àṣàyàn mẹ́ta.\" \"Fi sínú tábìlì.\" Olùrànlọ́wọ́ náà rántí àwọn ọ̀rọ̀ tí ó ṣáájú nínú ìjíròrò yẹn.",
            "AI lè hùmọ̀ nǹkan: ọjọ́ tí kò tọ́, nọ́mbà fóònù tí kò sí, òfin tí ó ti pẹ́. Èyí ni a ń pè ní ìrọ́-àròsọ (hallucination). Ṣàyẹ̀wò gbogbo òtítọ́ nípa owó, ìlera, òfin, àǹfààní ìjọba, ọjọ́, àdírẹ́sì tàbí nọ́mbà fóònù lórí ojú-òpó ìjọba (ojú-òpó ìjọba US ń parí pẹ̀lú .gov) tàbí lọ́dọ̀ ẹnì kan tí ó mọ̀, bí dókítà, òṣìṣẹ́ ilé-ìkàwé tàbí olùrànlọ́wọ́ ọ̀ràn (case manager).",
            "Béèrè lọ́wọ́ olùrànlọ́wọ́ náà pé \"Níbo ni mo ti lè ṣàyẹ̀wò èyí?\" kí o sì lọ sí ojú-òpó yẹn fúnra rẹ."
          ],
          steps: ["Ka ìdáhùn àkọ́kọ́.", "Béèrè ìyípadà kan lẹ́ẹ̀kan.", "Fa ìlà sí abẹ́ àwọn òtítọ́: nọ́mbà, ọjọ́, orúkọ, òfin.", "Ṣàyẹ̀wò òtítọ́ kọ̀ọ̀kan lórí orísun ìjọba tàbí orísun tí a gbẹ́kẹ̀lé.", "Tí wọ́n bá yàtọ̀, gbẹ́kẹ̀lé orísun ìjọba."],
          words: [["Ìbéèrè àfikún (follow-up)", "ọ̀rọ̀ kejì tí ó ní kí AI yí ìdáhùn rẹ̀ padà tàbí kí ó ṣàlàyé rẹ̀."], ["Ìrọ́-àròsọ (hallucination)", "nígbà tí AI bá kọ nǹkan tí ó dún bí òótọ́ ṣùgbọ́n tí ó jẹ́ àhùsọ."]],
          slides: [
            { title: "Ìdáhùn àkọ́kọ́ jẹ́ àkọ́pẹrẹ", bullets: ["\"Jẹ́ kí ó kúrú sí i.\"", "\"Lo ọ̀rọ̀ tó rọrùn sí i.\"", "\"Fún mi ní àṣàyàn mẹ́ta.\""] },
            { title: "AI lè hùmọ̀ nǹkan", bullets: ["Ọjọ́, nọ́mbà tàbí òfin tí kò tọ́", "Ọ́fíìsì tàbí ìwé tí kò sí rárá"] },
            { title: "Ṣàyẹ̀wò kí o tó gbẹ́kẹ̀lé", bullets: ["Owó, ìlera, òfin, àǹfààní ìjọba, ọjọ́, nọ́mbà fóònù", "Ojú-òpó ìjọba (.gov) tàbí ẹnì kan tí ó mọ̀"] }
          ],
          tryIt: "Mú ìdáhùn rẹ láti ẹ̀kọ́ tó kọjá. Béèrè ìyípadà méjì, ọ̀kan lẹ́ẹ̀kan. Lẹ́yìn náà, yan òtítọ́ kan nínú rẹ̀ kí o sì ṣàyẹ̀wò rẹ̀ lórí ojú-òpó ìjọba tàbí ojú-òpó tí a gbẹ́kẹ̀lé.",
          youCanNow: "mú ìdáhùn AI dára sí i pẹ̀lú ìbéèrè àfikún kí o sì ṣàyẹ̀wò àwọn òtítọ́ rẹ̀ kí o tó lò ó.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ìrọ́-àròsọ (hallucination) nínú AI?", options: ["Nígbà tí bátìrì AI bá tán", "Nígbà tí AI bá kọ̀ láti dáhùn", "Nígbà tí AI bá hùmọ̀ nǹkan tí ó dún bí òótọ́", "Nígbà tí AI bá dáhùn ní èdè míì"], answer: 2, why: "AI lè hùmọ̀ ọjọ́, nọ́mbà tàbí òfin tí kò tọ́ tí ó dún bí ó tọ̀nà; ìyẹn ni ìrọ́-àròsọ." },
            { objective: "O5", q: "Ìdáhùn AI kan sọ ọjọ́ tí a gbọdọ̀ fi fọ́ọ̀mù àǹfààní ìjọba sílẹ̀. Kí ni o máa ṣe kí o tó gbára lé e?", options: ["Ṣàyẹ̀wò ọjọ́ náà lórí ojú-òpó ìjọba tàbí lọ́dọ̀ ẹnì kan tí ó mọ̀", "Gbẹ́kẹ̀lé e nítorí pé láti ọ̀dọ̀ AI ló ti wá", "Béèrè ìbéèrè kan náà lọ́wọ́ AI lẹ́ẹ̀kan sí i kí o sì lo ìyẹn", "Kọ́kọ́ fi ránṣẹ́ sí àwọn ọ̀rẹ́ rẹ"], answer: 0, why: "Ó yẹ kí a ṣàyẹ̀wò òtítọ́ nípa ọjọ́, owó, àǹfààní ìjọba àti òfin lórí orísun ìjọba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lílo AI lọ́nà tó tọ́ àti láìléwu",
          minutes: 5,
          goal: "Lo AI láìfi ìsọfúnni àdáni hàn, lọ́nà tó tọ́ àti pẹ̀lú òtítọ́.",
          text: [
            "Má ṣe tẹ ìsọfúnni àdáni sínú olùrànlọ́wọ́ AI: nọ́mbà Social Security (nọ́mbà ìdánimọ̀ US) tàbí nọ́mbà ìdánimọ̀ míì, ọ̀rọ̀ aṣínà, nọ́mbà báńkì tàbí káàdì, nọ́mbà àkọsílẹ̀ ìlera tàbí àdírẹ́sì ilé kíkún. Kọ \"[nọ́mbà mi]\" dípò rẹ̀. Ilé-iṣẹ́ náà lè tọ́jú àwọn ìjíròrò rẹ.",
            "Jẹ́ olóòótọ́ nípa ìrànlọ́wọ́ AI. Ọ̀pọ̀ ilé-ẹ̀kọ́ àti ibi iṣẹ́ ló ní òfin nípa rẹ̀, nítorí náà béèrè kí o tó fi iṣẹ́ tí AI kọ sílẹ̀. Ka ohun tí ó kọ kí o sì yí i padà kí ó lè dún bí ìwọ, kí ó sì sọ ohun tí o ní lọ́kàn.",
            "Rántí ojúsàájú: tí ìdáhùn kan bá dàbí pé ó ṣe àìdáa sí ẹgbẹ́ ènìyàn kan, bi í léèrè. Ṣọ́ra fún jìbìtì tí ó ń lo AI, bí ohùn ayédèrú ará ilé tí ń béèrè owó. Dúró, pa fóònù, kí o sì pe padà sí nọ́mbà tí o mọ̀."
          ],
          steps: ["Ka prompt rẹ láti wá ìsọfúnni àdáni kí o tó fi ránṣẹ́.", "Fi àmì ìdúrópò rọ́pò ìsọfúnni àdáni.", "Ṣàyẹ̀wò òfin ilé-ẹ̀kọ́ tàbí ibi iṣẹ́ rẹ nípa ìrànlọ́wọ́ AI.", "Jẹ́ kí ọ̀rọ̀ ìkẹyìn jẹ́ tìrẹ.", "Ka ìbéèrè owó tí ó kánjú sí àmì ìkìlọ̀."],
          words: [["Ìsọfúnni àdáni", "àwọn ìsọfúnni tí ó lè jẹ́ kí ẹnì kan ṣe bí ẹni pé òun ni ọ́ tàbí gba owó rẹ."], ["Àmì ìdúrópò (placeholder)", "ohun ìdúrópò bí \"[nọ́mbà mi]\" tí o kọ dípò ìsọfúnni gidi."]],
          slides: [
            { title: "Má ṣe fi sínú AI", bullets: ["Nọ́mbà ìdánimọ̀ àti nọ́mbà Social Security", "Ọ̀rọ̀ aṣínà, nọ́mbà báńkì àti káàdì", "Nọ́mbà àkọsílẹ̀ ìlera, àdírẹ́sì ilé kíkún"] },
            { title: "Jẹ́ olóòótọ́", bullets: ["Tẹ̀lé òfin AI ilé-ẹ̀kọ́ tàbí ibi iṣẹ́ rẹ", "Ṣàtúnṣe ọ̀rọ̀ náà kí ó jẹ́ tìrẹ"] },
            { title: "Wà lójúfò", bullets: ["Bi àwọn ìdáhùn tí ó dàbí àìdáa léèrè", "Ohùn ayédèrú lè béèrè owó: pa fóònù kí o sì pe padà"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: yan iṣẹ́ gidi kan, kọ prompt tó yé láìsí ìsọfúnni àdáni, béèrè ìyípadà méjì, ṣàyẹ̀wò òtítọ́ kan lórí ojú-òpó tí a gbẹ́kẹ̀lé, lẹ́yìn náà ṣàlàyé AI fún ọ̀rẹ́ kan ní gbólóhùn mẹ́ta.",
          youCanNow: "lo AI láti parí iṣẹ́ gidi kan nígbà tí o ń pa ìsọfúnni àdáni mọ́ láìléwu, tí o sì ń lò ó pẹ̀lú òtítọ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí o fi gbọdọ̀ pa ìsọfúnni àdáni mọ́ kúrò nínú ìjíròrò AI?", options: ["Ó ń mú ìdáhùn gùn sí i", "Olùrànlọ́wọ́ AI kò lè ka nọ́mbà", "Ó lòdì sí òfin gbogbo ilé-ẹ̀kọ́", "Ilé-iṣẹ́ náà lè tọ́jú àwọn ìjíròrò rẹ"], answer: 3, why: "Ilé-iṣẹ́ náà lè tọ́jú àwọn ìjíròrò rẹ, nítorí náà nọ́mbà ìdánimọ̀, báńkì àti ìlera kò gbọdọ̀ wọ inú rẹ̀ láé." },
            { objective: "O6", q: "Ẹnì kan pè ọ́ pẹ̀lú ohùn ọmọ-ọmọ rẹ, ó ń ní kí o fi owó ránṣẹ́ lẹ́sẹ̀kẹsẹ̀. Kí ni o máa ṣe?", options: ["Fi owó náà ránṣẹ́ kíákíá", "Pa fóònù kí o sì pè é padà sí nọ́mbà tí o mọ̀", "Fún wọn ní nọ́mbà káàdì báńkì rẹ láti fi dájú pé òun ni", "Sọ fún ẹni tí ó pè pé kí ó fi ọ̀rọ̀ (text) ránṣẹ́ dípò"], answer: 1, why: "AI lè ṣe àdàkọ ohùn, nítorí náà dúró kí o sì pe padà sí nọ́mbà tí o ti mọ̀ tẹ́lẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lílo AI dáadáa",
        questions: [
          { objective: "O4", q: "Prompt wo ló yé jù?", options: ["\"olùyọ̀ǹda\"", "\"ràn mí lọ́wọ́\"", "\"nǹkan fún Sátidé\"", "\"Mo ń darí ibi ìpínkiri oúnjẹ. Kọ ọ̀rọ̀ onínúure ìlà 4 tí ó ń pe àwọn olùyọ̀ǹda fún Sátidé. Lo ọ̀rọ̀ tó rọrùn.\""], answer: 3, why: "Ó sọ ohun tí a nílò, ipò náà, àti bí ìdáhùn ṣe máa rí." },
          { objective: "O5", q: "Ìdáhùn náà lo ọ̀rọ̀ líle. Kí ni o máa tẹ lẹ́yìn náà?", options: ["\"Lo ọ̀rọ̀ tó rọrùn sí i.\"", "Ọ̀rọ̀ aṣínà rẹ", "Kò sí nǹkan; pa app náà", "\"Bẹ̀rẹ̀ láti ìbẹ̀rẹ̀ títí láé.\""], answer: 0, why: "Ìbéèrè àfikún ń ní kí AI yí ìdáhùn rẹ̀ padà." },
          { objective: "O5", q: "AI fún ọ ní nọ́mbà fóònù ọ́fíìsì àǹfààní ìjọba kan. Kí ni o gbọdọ̀ ṣe?", options: ["Pè é lẹ́sẹ̀kẹsẹ̀", "Pín in lórí ìkànnì àjọlò", "Ṣàyẹ̀wò rẹ̀ lórí ojú-òpó ìjọba ti ọ́fíìsì náà", "Béèrè lọ́wọ́ AI bóyá ó dá a lójú kí o sì gbẹ́kẹ̀lé e"], answer: 2, why: "AI lè hùmọ̀ nọ́mbà; ojú-òpó ìjọba ni orísun tí a gbẹ́kẹ̀lé." },
          { objective: "O6", q: "Kí ni o gbọdọ̀ kọ dípò nọ́mbà káàdì báńkì rẹ nínú prompt?", options: ["Nọ́mbà gidi náà", "PIN rẹ", "Nọ́mbà 12 tí ó gbẹ̀yìn", "Àmì ìdúrópò bí \"[káàdì mi]\""], answer: 3, why: "Àmì ìdúrópò ń jẹ́ kí o rí ìrànlọ́wọ́ láìfi ìsọfúnni àdáni hàn." },
          { objective: "O6", q: "O fẹ́ fi iṣẹ́ àṣetiléwá tí AI ràn ọ́ lọ́wọ́ láti kọ sílẹ̀. Kí ni o máa kọ́kọ́ ṣe?", options: ["Ṣàyẹ̀wò òfin ilé-ẹ̀kọ́ rẹ nípa ìrànlọ́wọ́ AI", "Fi sílẹ̀ láìkà á", "Ṣe àdàkọ ti ọ̀rẹ́ rẹ", "Pa á rẹ́"], answer: 0, why: "Ilé-ẹ̀kọ́ àti ibi iṣẹ́ ní òfin nípa ìrànlọ́wọ́ AI; òtítọ́ ló kọ́kọ́ ṣe pàtàkì." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí Ọgbọ́n Àtọwọ́dá (AI)",
    questions: [
      { objective: "O1", q: "Àpèjúwe tó dára jù fún AI ni:", options: ["Ènìyàn kan nínú kọ̀mpútà", "Orúkọ irú fóònù kan", "Àwọn ètò tí ń lo àwòṣe láti ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe", "Irú àdírẹ́sì ímeèlì kan"], answer: 2, why: "AI ń wá àwòṣe, ó sì ń ṣe àmọ̀tán láti ṣe iṣẹ́." },
      { objective: "O1", q: "Kí ló dé tí AI fi lè dún bí ó ti dá a lójú kí ó sì ṣì ṣàṣìṣe?", options: ["Ó ń ṣeré ni", "Kì í ṣàṣìṣe rárá", "Bátìrì rẹ̀ ti fẹ́ tán", "Ó ń ṣe àmọ̀tán tó dára jù láti inú àwòṣe, kì í ṣe láti inú mímọ òtítọ́"], answer: 3, why: "AI ń ṣe àmọ̀tán láti inú àwòṣe, àmọ̀tán tí kò tọ́ sì lè dún bí ó ti dá a lójú." },
      { objective: "O1", q: "Irinṣẹ́ wo ni AI olùṣẹ̀dá (generative AI)?", options: ["Ẹ̀rọ ìṣirò (calculator)", "Máàpù ìwé", "Google Gemini", "Ìyípadà iná (switch)"], answer: 2, why: "Gemini ń ṣe ọ̀rọ̀ tuntun nígbà tí o bá béèrè, nítorí náà AI olùṣẹ̀dá ni." },
      { objective: "O2", q: "Báwo ni ọ̀pọ̀ ètò AI ṣe ń kẹ́kọ̀ọ́ lónìí?", options: ["Láti inú ọ̀pọ̀ àpẹẹrẹ (data)", "Nípa kíka ọkàn rẹ", "Nípa ṣíṣe àmọ̀tán láìsí àpẹẹrẹ", "Láti inú bátìrì fóònù"], answer: 0, why: "Wọ́n ń kọ́ àwòṣe láti inú data." },
      { objective: "O2", q: "A kọ́ àlẹ̀mọ́ spam kan pẹ̀lú ẹgbẹẹgbẹ̀rún ímeèlì tí a sàmì sí spam tàbí kì í ṣe spam. Èyí jẹ́ àpẹẹrẹ:", options: ["Ìkọ́ni (training) lórí data", "Gbígba agbára sínú fóònù", "Fífi ọ̀rọ̀ (text) ránṣẹ́", "Ọ̀rọ̀ aṣínà"], answer: 0, why: "Kíkẹ́kọ̀ọ́ láti inú àpẹẹrẹ tí a ti sàmì sí ni ìkọ́ni (training)." },
      { objective: "O2", q: "Kí ni ojúsàájú (bias) nínú AI?", options: ["Kọ̀mpútà tí ó yára", "Data tí ó fi ẹ̀gbẹ́ kan sílẹ̀, tí ó ń mú kí àmọ̀tán ṣe àìdáa sí àwọn ènìyàn kan", "Irú prompt kan", "Ètò fóònù fún ìmọ́lẹ̀ ojú-iboju"], answer: 1, why: "Data tí ó fi ẹ̀gbẹ́ kan sílẹ̀ ń mú àmọ̀tán tí kò dáa wá." },
      { objective: "O3", q: "Èwo ni àpẹẹrẹ AI ojoojúmọ́?", options: ["Ẹ̀rọ ìkàn ìwé (stapler)", "App fídíò tí ń dábàá ohun tí o máa wò tẹ̀lé e", "Àpò ìwé (envelope)", "Kọ́kọ́rọ́ ilẹ̀kùn"], answer: 1, why: "Àwọn àbá ń wá láti ọ̀dọ̀ AI." },
      { objective: "O3", q: "Siri, Google Assistant àti Alexa jẹ́:", options: ["Báńkì", "Àwọn olùrànlọ́wọ́ ohùn tí ń lo AI", "Àdírẹ́sì ímeèlì", "Ẹ̀rọ ìtẹ̀wé (printer)"], answer: 1, why: "Wọ́n ń lo AI láti gbọ́ ọ̀rọ̀ ní àgbọ́yé." },
      { objective: "O3", q: "App kan ń dábàá àwọn nǹkan tí o kò fẹ́ ṣáá. Ìgbésẹ̀ àkọ́kọ́ tó dára ni láti:", options: ["Ju fóònù náà nù", "Wo inú àwọn ètò (settings) app náà fún ohun tí o lè yí padà", "Fún un ní ọ̀rọ̀ aṣínà rẹ", "Má ṣe bìkítà fún app kankan mọ́ títí láé"], answer: 1, why: "Ọ̀pọ̀ app ló ní àwọn ètò tí ó ń darí àbá." },
      { objective: "O4", q: "Kí ni prompt?", options: ["Ẹ̀rọ ìgbàná fóònù (charger)", "Ohun tí o tẹ tàbí sọ fún olùrànlọ́wọ́ AI", "Ìparí àdírẹ́sì ojú-òpó wẹ́ẹ̀bù", "Irú kòkòrò àrùn kọ̀mpútà (virus) kan"], answer: 1, why: "Prompt ni ìbéèrè rẹ sí AI." },
      { objective: "O4", q: "Àdírẹ́sì wo ló ń ṣí olùrànlọ́wọ́ AI ti Microsoft?", options: ["copilot.microsoft.com", "free-ai-prize.win", "microsoft-gift.xyz", "copilot.bank"], answer: 0, why: "copilot.microsoft.com ni àdírẹ́sì gidi ti Microsoft." },
      { objective: "O4", q: "Àwọn apá mẹ́ta wo ni prompt tó yé ní?", options: ["Orúkọ, ọ̀rọ̀ aṣínà, àdírẹ́sì", "Ohun tí o nílò, ipò náà, bí o ṣe fẹ́ kí ìdáhùn rí", "Àwọ̀, ìwọ̀n, iye owó", "Ẹ kú àbọ̀, ẹ ṣé, ó dàbọ̀"], answer: 1, why: "Àwọn apá mẹ́ta yẹn ló ń mú ìdáhùn tó wúlò wá." },
      { objective: "O5", q: "Ìdáhùn àkọ́kọ́ gùn jù. O gbọdọ̀:", options: ["Gbà á bẹ́ẹ̀ náà", "Sanwó fún app tuntun", "Béèrè pé \"Jẹ́ kí ó kúrú sí i.\"", "Bẹ̀rẹ̀ sí í tẹ ìsọfúnni àdáni"], answer: 2, why: "Ìbéèrè àfikún ń yí ìdáhùn padà." },
      { objective: "O5", q: "\"Ìrọ́-àròsọ\" (hallucination) nínú AI túmọ̀ sí:", options: ["AI hùmọ̀ nǹkan tí ó dún bí òótọ́", "Ojú-iboju kò mọ́lẹ̀ dáadáa", "App náà jẹ́ ọ̀fẹ́", "A ti pa AI náà"], answer: 0, why: "AI lè hùmọ̀ òtítọ́ tí ó dún bí ojúlówó." },
      { objective: "O5", q: "Èwo ni o gbọdọ̀ máa ṣàyẹ̀wò nígbà gbogbo pẹ̀lú orísun ìjọba?", options: ["Ewì ọjọ́ìbí", "Àwàdà", "Àkọsílẹ̀ àwọ̀ fún àríyá", "Ọjọ́ ìparí sísan owó-orí"], answer: 3, why: "Ọjọ́, owó àti òfin lè jẹ́ àṣìṣe, a sì gbọdọ̀ ṣàyẹ̀wò wọn." },
      { objective: "O5", q: "Ojú-òpó wẹ́ẹ̀bù ìjọba US sábà máa ń parí pẹ̀lú:", options: [".win", ".shop", ".gov", ".xyz"], answer: 2, why: "Àwọn ojú-òpó ìjọba US ló ń lo .gov." },
      { objective: "O6", q: "Èwo ló láìléwu láti tẹ sínú olùrànlọ́wọ́ AI?", options: ["Nọ́mbà Social Security rẹ", "\"[nọ́mbà mi]\" gẹ́gẹ́ bí àmì ìdúrópò", "Ọ̀rọ̀ aṣínà báńkì rẹ", "Kóòdù ààbò káàdì rẹ"], answer: 1, why: "Àmì ìdúrópò ń pa ìsọfúnni àdáni mọ́ kúrò nínú rẹ̀." },
      { objective: "O6", q: "Kí o tó lo ọ̀rọ̀ tí AI kọ fún ilé-ẹ̀kọ́ tàbí iṣẹ́, o gbọdọ̀:", options: ["Ṣàyẹ̀wò òfin kí o sì jẹ́ kí ọ̀rọ̀ náà jẹ́ tìrẹ", "Fi sílẹ̀ láìkà á", "Yọ orúkọ rẹ kúrò", "Kọ́kọ́ fi sórí íńtánẹ́ẹ̀tì"], answer: 0, why: "Lílo pẹ̀lú òtítọ́ túmọ̀ sí títẹ̀lé òfin àti ṣíṣàtúnṣe iṣẹ́ náà." },
      { objective: "O6", q: "Ìdáhùn AI kan dàbí pé ó ṣe àìdáa sí ẹgbẹ́ ènìyàn kan. Kí ni o máa ṣe?", options: ["Pín in káàkiri", "Bi í léèrè kí o sì ṣàyẹ̀wò àwọn orísun míì", "Gbà pé òótọ́ ni", "Yí ọ̀rọ̀ aṣínà rẹ padà"], answer: 1, why: "Ojúsàájú lè hàn nínú ìdáhùn; bi í léèrè." },
      { objective: "O6", q: "Ẹnì kan pè pẹ̀lú ohùn ará ilé rẹ, ó ń ní kí o fi owó ránṣẹ́ lẹ́sẹ̀kẹsẹ̀. O gbọdọ̀:", options: ["Fi ránṣẹ́ kíákíá", "Ka nọ́mbà káàdì rẹ fún wọn", "Fún wọn ní kóòdù láti inú fóònù rẹ", "Pa fóònù kí o sì pe ará ilé náà padà sí nọ́mbà tí o mọ̀"], answer: 3, why: "AI lè ṣe ohùn ayédèrú; pípe padà sí nọ́mbà tí o mọ̀ ń dá jìbìtì náà dúró." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      1,
      5,
      6,
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ṣíṣàlàyé AI",
        objective: "O1",
        notYet: "Àlàyé náà kò sí, kò tọ́, tàbí kò sọ ìdí tí a fi ṣàyẹ̀wò ìdáhùn náà.",
        meets: "Gbólóhùn mẹ́ta tó rọrùn sọ ohun tí AI jẹ́, pé ó ń ṣe àmọ̀tán láti inú àwòṣe, àti ìdí tí a fi ṣàyẹ̀wò ìdáhùn náà.",
        exceeds: "Ó tún fún wa ní àpẹẹrẹ ojoojúmọ́, ó sì sọ pé data tí kò dára lè mú kí ìdáhùn ṣe àìdáa."
      },
      {
        name: "Prompt tó yé",
        objective: "O4",
        notYet: "Prompt náà jẹ́ ọ̀rọ̀ kan tàbí méjì, tàbí kò sọ ohun tí a nílò.",
        meets: "Prompt náà sọ ohun tí o nílò, ipò náà, àti bí o ṣe fẹ́ kí ìdáhùn rí.",
        exceeds: "Prompt náà tún sọ gígùn tàbí ìrísí ìdáhùn, ó sì mú ìdáhùn àkọ́kọ́ tó wúlò wá."
      },
      {
        name: "Mímú ìdáhùn dára sí i",
        objective: "O5",
        notYet: "Kò sí ìbéèrè àfikún, tàbí a lo ìdáhùn àkọ́kọ́ bí ó ṣe wà.",
        meets: "A béèrè ìbéèrè àfikún méjì, ọ̀kan lẹ́ẹ̀kan, ìdáhùn náà sì dára sí i.",
        exceeds: "A tún yí ọ̀rọ̀ ìkẹyìn padà kí ó lè dún bí ìwọ."
      },
      {
        name: "Ṣíṣàyẹ̀wò òtítọ́",
        objective: "O5",
        notYet: "A kò ṣàyẹ̀wò òtítọ́ kankan, tàbí a ṣàyẹ̀wò rẹ̀ nípa bíbéèrè lọ́wọ́ AI lẹ́ẹ̀kan sí i nìkan.",
        meets: "A ṣàyẹ̀wò òtítọ́ kan lórí ojú-òpó ìjọba tàbí ojú-òpó tí a gbẹ́kẹ̀lé.",
        exceeds: "A ṣàyẹ̀wò gbogbo òtítọ́ nípa ọjọ́, owó, òfin tàbí nọ́mbà fóònù, a sì tún èyíkéyìí tí ó yàtọ̀ ṣe."
      },
      {
        name: "Àṣírí àti òtítọ́",
        objective: "O6",
        notYet: "Prompt náà ní ìsọfúnni àdáni bí nọ́mbà ìdánimọ̀, ọ̀rọ̀ aṣínà tàbí àdírẹ́sì kíkún.",
        meets: "Prompt náà kò ní ìsọfúnni àdáni; ìsọfúnni ara ẹni èyíkéyìí jẹ́ àmì ìdúrópò.",
        exceeds: "A tún ṣàyẹ̀wò òfin ilé-ẹ̀kọ́ tàbí ibi iṣẹ́ nípa ìrànlọ́wọ́ AI níbi tí ó bá kàn."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà, tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric fún iṣẹ́ ìkẹyìn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn lo olùrànlọ́wọ́ AI ọ̀fẹ́ fún iṣẹ́ gidi láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ṣàyẹ̀wò ìdáhùn AI lórí orísun ìjọba, tàbí pé àwọn rí ìpè tàbí ọ̀rọ̀ jìbìtì kan tí àwọn sì yẹra fún un",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú láti ṣe ẹ̀kọ́ míì, bí Digital Literacy Basics tàbí Intro to Cybersecurity"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù, tablet tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì àti browser",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini (kò sí owó láti san)",
      "Ìwé àti gègé láti kọ prompt, àwọn ìbéèrè àfikún àti òtítọ́ tí a ṣàyẹ̀wò sílẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ kọ́ orí kan ní ìpàdé kọ̀ọ̀kan, kí ẹ sì ṣe àwọn iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" ní méjì-méjì; so akẹ́kọ̀ọ́ tí ẹ̀rọ jẹ́ tuntun fún pọ̀ mọ́ ẹnì kan tí ó ní ìgboyà jù.",
      "Àwọn olùrànlọ́wọ́ ọ̀fẹ́ kan ń ní kí akẹ́kọ̀ọ́ wọlé (sign in); jẹ́ kí akẹ́kọ̀ọ́ kọ̀ọ̀kan pinnu bóyá yóò ṣí àkáǹtì, kí o sì fi àwọn tí ó ń ṣiṣẹ́ láìwọlé hàn níbi tí wọ́n bá wà.",
      "Kí ẹnikẹ́ni tó fi prompt ránṣẹ́, ní kí ó kà á sókè kí ó sì fi àmì ìdúrópò bí \"[nọ́mbà mi]\" rọ́pò ìsọfúnni àdáni èyíkéyìí.",
      "Ní ojú-òpó ìjọba kan sílẹ̀ fún iṣẹ́ àyẹ̀wò ẹgbẹ́ kọ̀ọ̀kan (fún àpẹẹrẹ ojú-ewé .gov tàbí ojú-òpó ilé-ìkàwé àdúgbò) kí àwọn akẹ́kọ̀ọ́ lè ṣe àyẹ̀wò òtítọ́ gidi.",
      "Ẹ sọ̀rọ̀ ní gbangba nípa jìbìtì àdàkọ ohùn; sọ fún àwọn akẹ́kọ̀ọ́ pé kí wọ́n pa fóònù kí wọ́n sì pe ẹbí padà sí nọ́mbà tí wọ́n mọ̀, kí o sì fún wọn ní ibi tí wọ́n ti lè fi ẹjọ́ jìbìtì sùn ní àdúgbò tí ètò rẹ bá ní ọ̀kan."
    ]
  }
};
