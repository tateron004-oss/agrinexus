"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-intro-ai-sports.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-intro-ai-sports-yo",
  lang: "yo",
  translationOf: "athletes-intro-ai-sports",
  category: "Athletes",
  name: "Ìfihàn sí AI nínú Eré Ìdárayá",
  skills: "Ṣíṣàlàyé ohun tí AI ń ṣe nínú eré ìdárayá, Ṣíṣí olùrànlọ́wọ́ AI ọ̀fẹ́, Kíkọ prompt eré ìdárayá tó yé, Ṣíṣàyẹ̀wò ìdáhùn AI, Dídáàbò bo ìsọfúnni àdáni àti ti ìlera rẹ",
  outcome: "lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti ṣe ètò ọ̀sẹ̀ kan fún ìdánrawò àti ẹ̀kọ́ tí ó bá ìṣètò àkókò ẹgbẹ́ rẹ mu: béèrè ìbéèrè tó yé, mú ìdáhùn dára sí i, ṣàyẹ̀wò rẹ̀ pẹ̀lú kóòṣì rẹ, kí o má sì fi ìsọfúnni àdáni tàbí ti ìlera sínú rẹ̀.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn eléré ìdárayá ní ilé-ẹ̀kọ́ girama àti yunifásítì, àwọn tí wọ́n ṣẹ̀ṣẹ̀ bẹ̀rẹ̀ iṣẹ́ eré, àti àwọn kóòṣì tí wọ́n fẹ́ bẹ̀rẹ̀ pẹ̀lú ọgbọ́n àtọwọ́dá (AI) ní ọ̀nà tó rọrùn. O kò nílò ìmọ̀ ẹ̀rọ kankan tẹ́lẹ̀.",
    "O máa kọ́ ibi tí AI ti ń farahàn nínú eré ìdárayá, láti àkọsílẹ̀ èsì eré dé àyẹ̀wò fídíò àti wíwá eléré (recruiting), àti bí o ṣe lè lo olùrànlọ́wọ́ AI ọ̀fẹ́ fúnra rẹ láti ṣètò ọ̀sẹ̀ rẹ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ka ẹ̀kọ́ náà, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti ṣe ètò ọ̀sẹ̀ kan tí ó bá ìṣètò àkókò ìdánrawò, eré àti kíláàsì rẹ gidi mu. Kọ prompt tó yé, béèrè ó kéré tán ìyípadà méjì láti mú un dára sí i, yọ ìsọfúnni àdáni tàbí ti ìlera kúrò, kí o sì fi ètò náà han kóòṣì rẹ tàbí athletic trainer rẹ kí o tó tẹ̀lé e.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn eléré ìdárayá ní ilé-ẹ̀kọ́ girama àti yunifásítì, àti àwọn ọ̀dọ́ eléré kan nínú ẹgbẹ́ eré (club) tàbí eré àìgbowó, tí wọ́n ń da ìdánrawò, eré, kíláàsì, àti nígbà míì iṣẹ́, wíwá eléré (recruiting) tàbí NIL pọ̀.",
    startingPoint: "Wọ́n ń lo smartphone, ìkànnì àjọlò àti àwọn app eré ìdárayá lójoojúmọ́. Ọ̀pọ̀ ti gbìyànjú olùrànlọ́wọ́ AI lásán, ṣùgbọ́n wọn kì í kọ prompt tó yé, wọn kì í ṣàyẹ̀wò ìdáhùn, wọn kì í sì ronú nípa ìsọfúnni àdáni àti ti ìlera tí wọ́n ń fi hàn.",
    gap: "AI lè ran àwọn eléré lọ́wọ́ láti ṣètò ọ̀sẹ̀ wọn, kẹ́kọ̀ọ́ kí wọ́n sì wà létòlétò, ṣùgbọ́n ìdáhùn tí kò tọ́ nípa ìdánrawò, ìpalára ara, oúnjẹ tàbí ẹ̀tọ́ láti kópa (eligibility) lè ba ìlera wọn jẹ́ tàbí kí wọ́n pàdánù ẹ̀tọ́ láti ṣeré. Àwọn olùwá-eléré àti àdéhùn ọjà irọ́ sì ń dojú kọ wọ́n. Wọ́n nílò láti lo AI dáadáa kí wọ́n sì ṣàyẹ̀wò rẹ̀ pẹ̀lú kóòṣì, athletic trainer tàbí compliance office wọn.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ẹ̀kọ́ tàbí ti ilé-ìkàwé",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan, tí ó bá àkókò ìdánrawò àti kíláàsì mu",
      "Òfin ọjọ́ orí: akẹ́kọ̀ọ́ tí kò tíì pé ọmọ ọdún 18 máa ṣàyẹ̀wò òfin ọjọ́ orí app náà, kí ó sì béèrè lọ́wọ́ òbí tàbí alágbàtọ́",
      "Ìlera àti ìsọfúnni àdáni: kò sí ìròyìn ìpalára ara, oògùn, ọ̀rọ̀ aṣínà tàbí nọ́mbà ìdánimọ̀ nínú prompt; ìmọ̀ràn ìdánrawò, ìlera àti ẹ̀tọ́ láti kópa ni a máa ń ṣàyẹ̀wò pẹ̀lú akọ́ṣẹ́mọṣẹ́ tó yẹ"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn àpẹẹrẹ ẹ̀rọ ìgbàlódé nínú eré ìdárayá", action: "dá ibi tí a ti ń lo AI nínú eré ìdárayá mọ̀, àti ohun tí kò lè ṣe fún ọ", standard: "nípa dídárúkọ ó kéré tán ìlò mẹ́ta àti ààlà kan" },
    { id: "O2", condition: "Lórí fóònù rẹ tàbí kọ̀mpútà", action: "ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ láti app tàbí ojú-òpó wẹ́ẹ̀bù rẹ̀ gidi, fi ọ̀rọ̀ àkọ́kọ́ ránṣẹ́, kí o sì jáde (sign out) lórí kọ̀mpútà àjọlò", standard: "lẹ́yìn tí o bá ti ṣàyẹ̀wò òfin ọjọ́ orí app náà" },
    { id: "O3", condition: "Tí o bá ní ìṣètò àkókò ìdánrawò, eré àti kíláàsì rẹ gidi", action: "kọ prompt tí ó sọ ohun tí o nílò, ipò rẹ, àti bí o ṣe fẹ́ kí ìdáhùn rí", standard: "tí ìdáhùn àkọ́kọ́ fi wúlò" },
    { id: "O4", condition: "Tí ìdáhùn AI kò bá bá ọ̀sẹ̀ rẹ mu", action: "béèrè àwọn ìyípadà, ọ̀kan lẹ́ẹ̀kan, láti tún un ṣe", standard: "nípa ṣíṣe ó kéré tán àtúnṣe méjì" },
    { id: "O5", condition: "Tí ìdáhùn AI bá ní ìmọ̀ràn nípa ìdánrawò, ìlera, oúnjẹ tàbí ẹ̀tọ́ láti kópa", action: "ṣàyẹ̀wò rẹ̀ pẹ̀lú kóòṣì rẹ, athletic trainer, onímọ̀ oúnjẹ, dókítà, compliance office tàbí ojú-ìwé ìjọba/àjọ gidi", standard: "kí o tó tẹ̀lé e" },
    { id: "O6", condition: "Nígbà tí o bá ń kọ prompt tàbí tí ẹnìkan bá fún ọ ní ìfilọ̀ lórí ayélujára", action: "pa ìsọfúnni àdáni àti ti ìlera mọ́ kúrò nínú rẹ̀, kí o sì dá àwọn jìbìtì tí wọ́n ń fi dojú kọ eléré mọ̀", standard: "láìfi ọ̀rọ̀ aṣínà, kóòdù, nọ́mbà ìdánimọ̀ tàbí àkọsílẹ̀ ìlera kankan hàn" }
  ],
  chapters: [
    {
      name: "Orí 1: Ibi tí AI ti ń farahàn nínú eré ìdárayá",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí AI jẹ́, àti ibi tí o ti ń rí i nínú eré ìdárayá",
          minutes: 4,
          goal: "Dárúkọ ọ̀nà mẹ́ta tí a ń gbà lo AI nínú eré ìdárayá lónìí, kí o sì sọ ohun tí AI kò lè ṣe.",
          text: [
            "AI, tàbí artificial intelligence (ọgbọ́n àtọwọ́dá), ni àwọn ètò kọ̀mpútà tí ó ń ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe, bí rírí àpẹẹrẹ (pattern), kíkọ ọ̀rọ̀, tàbí mímọ ohun tó wà nínú fídíò.",
            "O ti ń rí i nínú eré ìdárayá: ìgbóhùnsáfẹ́fẹ́ eré tí ó ń fi ìyára eléré kan hàn tàbí àǹfààní pé bọ́ọ̀lù kan máa wọlé, àwọn app tí ó ń ka iye ìgbà tí o ṣe eré-ìdárayá-ara tàbí tí ó ń tọpa ìsáré rẹ, àwọn irinṣẹ́ fídíò tí ó ń sàmì sí gbogbo ìgbésẹ̀ eré, àti àwọn ojú-òpó wíwá eléré tí ó ń to àwọn eléré lẹ́sẹẹsẹ nípa èsì wọn.",
            "AI jẹ́ olùrànlọ́wọ́, kì í ṣe kóòṣì, dókítà tàbí aṣojú ìdájọ́ eré (referee). Kò mọ ara rẹ, ẹgbẹ́ rẹ tàbí àfojúsùn rẹ àyàfi tí o bá sọ fún un, ó sì lè ṣàṣìṣe. Àwọn kóòṣì àti eléré ló ṣì ń ṣe ìpinnu."
          ],
          words: [["AI", "ìkékúrú artificial intelligence (ọgbọ́n àtọwọ́dá): àwọn ètò tí ó ń kọ́ àpẹẹrẹ láti inú dátà, tí ó sì ń lò wọ́n láti dáhùn, sọ àsọtẹ́lẹ̀ tàbí ṣẹ̀dá nǹkan."], ["Dátà (data)", "àwọn òtítọ́ àti nọ́mbà, bí àkókò, èsì eré, iye ìgbà tàbí fídíò."]],
          slides: [
            { title: "AI ní gbólóhùn kan", bullets: ["Àwọn ètò tí ó ń kọ́ àpẹẹrẹ láti inú dátà", "Lẹ́yìn náà ó ń dáhùn, sọ àsọtẹ́lẹ̀ tàbí ṣẹ̀dá nǹkan"] },
            { title: "Ibi tí o ti ń rí i nínú eré ìdárayá", bullets: ["Èsì lórí ìgbóhùnsáfẹ́fẹ́ bí ìyára àti àǹfààní kí bọ́ọ̀lù wọlé", "Àwọn app tí ó ń tọpa ìsáré àti iye ìgbà", "Àwọn irinṣẹ́ fídíò tí ó ń sàmì sí ìgbésẹ̀ eré", "Àwọn ojú-òpó wíwá eléré tí ó ń to wọ́n nípa èsì"] },
            { title: "Ohun tí AI kì í ṣe", bullets: ["Kì í ṣe kóòṣì, dókítà tàbí referee rẹ", "Ó lè ṣàṣìṣe, kódà nígbà tí ó dún bí ó dá a lójú", "Ìwọ àti kóòṣì rẹ ló ń ṣe ìpinnu"] }
          ],
          tryIt: "Kọ ibi mẹ́ta sílẹ̀ tí o ti rí AI tàbí èsì ọlọ́gbọ́n nínú eré rẹ ní àsìkò yìí, fún àpẹẹrẹ àwòrán lórí ìgbóhùnsáfẹ́fẹ́, app ìlera ara, tàbí irinṣẹ́ fídíò tí ẹgbẹ́ rẹ ń lò.",
          youCanNow: "ṣàlàyé ohun tí AI jẹ́, dárúkọ ọ̀nà mẹ́ta tí ó ń gbà farahàn nínú eré ìdárayá, kí o sì sọ ìdí tí ènìyàn fi ṣì ń ṣe ìpinnu.",
          quickCheck: [
            { objective: "O1", q: "Kí ni AI túmọ̀ sí?", options: ["Irú ohun mímu eré ìdárayá kan", "Àwọn ètò kọ̀mpútà tí ó ń ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe", "Ẹ̀rọ ìdánrawò kan", "Àmì ọwọ́ referee"], answer: 1, why: "AI ni àwọn ètò kọ̀mpútà tí ó ń rí àpẹẹrẹ, kọ ọ̀rọ̀, tàbí mọ ohun tó wà nínú fídíò." },
            { objective: "O1", q: "App AI kan sọ pé kí o yí ipò rẹ padà nínú ẹgbẹ́. Kí ni o máa ṣe?", options: ["Bá kóòṣì rẹ sọ̀rọ̀; AI jẹ́ olùrànlọ́wọ́, kì í ṣe kóòṣì rẹ", "Yí ipò padà lẹ́sẹ̀kẹsẹ̀", "Kúrò nínú ẹgbẹ́", "Má fetí sí kóòṣì rẹ mọ́ láti ìsinsìnyí lọ"], answer: 0, why: "AI kò mọ ẹgbẹ́ rẹ tàbí àfojúsùn rẹ; àwọn kóòṣì àti eléré ló ṣì ń ṣe ìpinnu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣí olùrànlọ́wọ́ AI ọ̀fẹ́",
          minutes: 5,
          goal: "Ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ lórí fóònù rẹ tàbí kọ̀mpútà, kí o sì fi ọ̀rọ̀ àkọ́kọ́ rẹ ránṣẹ́.",
          text: [
            "Olùrànlọ́wọ́ AI jẹ́ ètò AI tí o ń bá sọ̀rọ̀ ní èdè ojoojúmọ́. Àwọn ọ̀fẹ́ tí a mọ̀ dáadáa ni ChatGPT, Microsoft Copilot àti Google Gemini.",
            "Lórí fóònù, gba app gidi láti ilé ìtajà app, èyí tí ilé-iṣẹ́ gidi ṣe: OpenAI fún ChatGPT, Microsoft fún Copilot, Google fún Gemini. Lórí kọ̀mpútà, ṣí browser kí o sì lọ sí chatgpt.com, copilot.microsoft.com tàbí gemini.google.com.",
            "Àwọn olùrànlọ́wọ́ kan nílò àkáǹtì, wọ́n sì ní òfin ọjọ́ orí. Tí o kò bá tíì pé ọmọ ọdún 18, ṣàyẹ̀wò òfin ọjọ́ orí app náà kí o sì kọ́kọ́ béèrè lọ́wọ́ òbí tàbí alágbàtọ́. Lórí kọ̀mpútà ilé-ẹ̀kọ́ tàbí kọ̀mpútà àjọlò, jáde (sign out) nígbà tí o bá parí."
          ],
          steps: ["Yan fóònù rẹ tàbí kọ̀mpútà.", "Fóònù: fi app gidi sórí rẹ̀. Kọ̀mpútà: tẹ àdírẹ́sì wẹ́ẹ̀bù.", "Wá àpótí ọ̀rọ̀ nítòsí ìsàlẹ̀ ojú-iboju.", "Tẹ ọ̀rọ̀ ìkíni kan kí o sì ka ìdáhùn.", "Lórí kọ̀mpútà àjọlò, jáde (sign out) kí o sì pa browser."],
          words: [["Olùrànlọ́wọ́ AI", "ètò AI tí o ń bá sọ̀rọ̀ nípa títẹ̀ ọ̀rọ̀ tàbí sísọ̀rọ̀."], ["Browser", "ètò tí o fi ń ṣí àwọn ojú-òpó wẹ́ẹ̀bù, bí Chrome, Edge tàbí Safari."]],
          slides: [
            { title: "Àwọn olùrànlọ́wọ́ AI ọ̀fẹ́", bullets: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Google Gemini"] },
            { title: "Bí o ṣe lè ṣí ọ̀kan", bullets: ["Fóònù: app gidi láti ilé ìtajà app", "Kọ̀mpútà: chatgpt.com, copilot.microsoft.com tàbí gemini.google.com", "Wá àpótí ọ̀rọ̀ ní ìsàlẹ̀"] },
            { title: "Kí o tó bẹ̀rẹ̀", bullets: ["O kò tíì pé 18? Ṣàyẹ̀wò òfin ọjọ́ orí kí o sì béèrè lọ́wọ́ òbí", "Kọ̀mpútà àjọlò: jáde (sign out) nígbà tí o bá parí"] }
          ],
          tryIt: "Ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ kan kí o sì tẹ: \"Mo ń ṣe [eré rẹ]. Ṣàlàyé ní gbólóhùn kúkúrú mẹ́ta bí a ṣe ń lo AI nínú eré mi.\" Ka ìdáhùn náà.",
          youCanNow: "ṣí olùrànlọ́wọ́ AI ọ̀fẹ́, fi ọ̀rọ̀ ránṣẹ́, kí o sì kúrò lórí kọ̀mpútà àjọlò láìléwu.",
          quickCheck: [
            { objective: "O2", q: "Àdírẹ́sì wẹ́ẹ̀bù wo ló ń ṣí Google Gemini lórí kọ̀mpútà?", options: ["gemini-free-app.net", "freeai.win", "gemini.google.com", "googleai.gift"], answer: 2, why: "gemini.google.com ni àdírẹ́sì gidi; lo ojú-òpó tàbí app ilé-iṣẹ́ gidi." },
            { objective: "O2", q: "O lo ChatGPT lórí kọ̀mpútà ilé-ìkàwé láti ṣètò ọ̀sẹ̀ rẹ. Kí ni o máa ṣe nígbà tí o bá parí?", options: ["Fi í sílẹ̀ ní ṣíṣí fún ọmọ ẹgbẹ́ rẹ", "Fi ọ̀rọ̀ aṣínà rẹ pamọ́ sínú rẹ̀", "Pa ojú-iboju nìkan", "Jáde (sign out) kí o sì pa browser"], answer: 3, why: "Jíjáde lórí kọ̀mpútà àjọlò ń dènà àwọn míì láti wọ inú ọ̀rọ̀ àti àkáǹtì rẹ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíkọ prompt eré ìdárayá tó yé",
          minutes: 5,
          goal: "Kọ prompt tí ó sọ ohun tí o nílò, ipò rẹ, àti bí o ṣe fẹ́ kí ìdáhùn rí.",
          text: [
            "Ohun tí o tẹ sí olùrànlọ́wọ́ AI ni a ń pè ní prompt. Prompt tó yé máa ń mú ìdáhùn tó wúlò wá ní ìgbà àkọ́kọ́.",
            "Prompt tó lágbára ní apá mẹ́ta: ohun tí o nílò, ipò rẹ, àti bí o ṣe fẹ́ kí ìdáhùn rí. Àpẹẹrẹ: \"Mo jẹ́ agbábọ́ọ̀lù àárín (midfielder) ní ilé-ẹ̀kọ́ girama. Mo ní ìdánrawò láti Ọjọ́ Ajé dé Ọjọ́bọ̀, 3:30 sí 5:30, àti eré ní Ọjọ́ Ẹtì. Ṣe ìṣètò àkókò ẹ̀kọ́ tó rọrùn fún ọ̀sẹ̀ náà ní àyíká ìdánrawò. Fi sínú tábìlì.\"",
            "Prompt aláìlágbára bí \"ràn mí lọ́wọ́ kí n dára sí i\" máa ń jẹ́ kí olùrànlọ́wọ́ náà méfò. Fi eré, ipò rẹ nínú ẹgbẹ́, ìṣètò àkókò rẹ àti ìrísí ìdáhùn kún un."
          ],
          steps: ["Sọ ohun tí o nílò.", "Fi eré rẹ, ipò rẹ, ìpele rẹ àti ìṣètò àkókò rẹ kún un (kò sí ìsọfúnni àdáni).", "Sọ ìrísí ìdáhùn: àkọsílẹ̀, tábìlì, ìgbésẹ̀ kúkúrú tàbí ọ̀rọ̀ tó rọrùn."],
          words: [["Prompt", "ohun tí o tẹ tàbí sọ sí olùrànlọ́wọ́ AI láti béèrè nǹkan."], ["Ìrísí (format)", "bí ìdáhùn ṣe rí, bí àkọsílẹ̀, tábìlì tàbí ìgbésẹ̀."]],
          slides: [
            { title: "Apá mẹ́ta prompt tó dára", bullets: ["1. Ohun tí o nílò", "2. Eré rẹ, ipò rẹ, ìpele rẹ àti ìṣètò àkókò rẹ", "3. Ìrísí tí o fẹ́"] },
            { title: "Aláìlágbára àti èyí tó yé", bullets: ["Aláìlágbára: \"ràn mí lọ́wọ́ kí n dára sí i\"", "Èyí tó yé: \"Mo jẹ́ midfielder ní girama, ìdánrawò Ajé sí Ọjọ́bọ̀...\"", "\"...ṣe ìṣètò àkókò ẹ̀kọ́ nínú tábìlì\""] },
            { title: "Fi àlàyé kún un, kì í ṣe àṣírí", bullets: ["Bẹ́ẹ̀ni: eré, ipò, àkókò ìdánrawò", "Rárá: orúkọ rẹ ní kíkún, nọ́mbà ìdánimọ̀ ilé-ẹ̀kọ́, àkọsílẹ̀ ìlera"] }
          ],
          tryIt: "Kọ prompt apá mẹ́ta tí ó béèrè ìṣètò àkókò ẹ̀kọ́ tàbí ọjọ́ ìsinmi ní àyíká ọ̀sẹ̀ ìdánrawò rẹ gidi. Fi ránṣẹ́ kí o sì ka ìdáhùn.",
          youCanNow: "kọ prompt eré ìdárayá tó yé tí ó ní ohun tí o nílò, ipò rẹ àti ìrísí ìdáhùn.",
          quickCheck: [
            { objective: "O3", q: "Kí ni apá ìrísí (format) nínú prompt?", options: ["Bí o ṣe fẹ́ kí ìdáhùn rí, bí tábìlì tàbí àkọsílẹ̀ kúkúrú", "Eré rẹ", "Orúkọ kóòṣì rẹ", "Ọ̀rọ̀ aṣínà rẹ"], answer: 0, why: "Ìrísí ń sọ fún olùrànlọ́wọ́ náà bí ó ṣe máa ṣe ìdáhùn." },
            { objective: "O3", q: "O fẹ́ ìrànlọ́wọ́ láti ṣètò iṣẹ́ àṣetiléwá ní àyíká bọ́ọ̀lù àpẹ̀rẹ̀ (basketball). Prompt wo ló dára jù?", options: ["\"iṣẹ́ àṣetiléwá\"", "\"ràn mí lọ́wọ́ kí n dára sí i\"", "\"basketball\"", "\"Mo jẹ́ guard ní ilé-ẹ̀kọ́ girama, ìdánrawò 3 sí 5 ìrọ̀lẹ́ láti Ọjọ́ Ajé dé Ọjọ́bọ̀, eré ní Ọjọ́ Ẹtì. Ṣe ìṣètò iṣẹ́ àṣetiléwá fún ọ̀sẹ̀ náà nínú tábìlì.\""], answer: 3, why: "Ó sọ ohun tí o nílò, ipò rẹ àti ìrísí ìdáhùn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ibi tí AI ti ń farahàn nínú eré ìdárayá",
        questions: [
          { objective: "O1", q: "Èwo ni àpẹẹrẹ AI nínú eré ìdárayá?", options: ["Fèrè", "Ìwé àkọsílẹ̀ èsì eré onípépà", "Àwòrán lórí ìgbóhùnsáfẹ́fẹ́ tí ó ń fi àǹfààní kí bọ́ọ̀lù wọlé hàn", "Bọ́ọ̀sì ẹgbẹ́"], answer: 2, why: "Àwòrán yẹn wá láti inú ètò kan tí ó kọ́ àpẹẹrẹ láti inú ọ̀pọ̀ ìgbà tí wọ́n ti ju bọ́ọ̀lù sẹ́yìn." },
          { objective: "O1", q: "App AI kan sọ pé kí o máa ṣeré lọ bí orúnkún rẹ tilẹ̀ ń dùn ọ́ gidigidi. Kí ni o yẹ kí o ṣe?", options: ["Dúró kí o sì bá athletic trainer tàbí dókítà rẹ sọ̀rọ̀", "Tẹ̀lé e, nítorí AI mọ̀ jù", "Má fetí sí kóòṣì rẹ", "Ní kí ọmọ ẹgbẹ́ rẹ kan pinnu"], answer: 0, why: "AI kì í ṣe dókítà. Ìbéèrè nípa ìrora àti ìpalára ara ń lọ sọ́dọ̀ ẹni tí ó kọ́ṣẹ́ rẹ̀." },
          { objective: "O2", q: "Níbo ni o yẹ kí o ti gba app AI fún fóònù rẹ?", options: ["Ìjápọ̀ láti ọ̀dọ̀ àjèjì nínú DM rẹ", "Ìpolówó tí ó yọ jáde lójijì", "Ojú-òpó wẹ́ẹ̀bù èyíkéyìí", "Ilé ìtajà app gidi, láti ọ̀dọ̀ ilé-iṣẹ́ gidi"], answer: 3, why: "Ilé ìtajà app gidi àti app ilé-iṣẹ́ gidi ni yíyàn tí kò léwu." },
          { objective: "O3", q: "Kí ni apá mẹ́ta prompt tó yé?", options: ["Orúkọ, ilé-ẹ̀kọ́, nọ́mbà ìdánimọ̀", "Ohun tí o nílò, ipò rẹ, ìrísí", "Eré, àwọ̀ ẹgbẹ́, àmì ẹgbẹ́", "Ẹ n lẹ́ o, jọ̀wọ́, ẹ ṣé"], answer: 1, why: "Ohun tí o nílò, ipò rẹ àti ìrísí ń fún olùrànlọ́wọ́ náà ní ohun tí ó nílò láti ràn ọ́ lọ́wọ́." },
          { objective: "O3", q: "Prompt wo ló ṣeé ṣe kí ó mú ìdáhùn tó wúlò jù wá?", options: ["\"ràn mí lọ́wọ́ kí n dára sí i\"", "\"Mo jẹ́ point guard ní yunifásítì, ìdánrawò 6-8 òwúrọ̀. Ṣe ìṣètò kíláàsì àti ìsinmi fún ọ̀sẹ̀ náà nínú tábìlì.\"", "\"basketball\"", "\"sọ ohun gbogbo fún mi\""], answer: 1, why: "Ó ní ohun tí o nílò, ipò rẹ àti ìrísí ìdáhùn." }
        ]
      }
    },
    {
      name: "Orí 2: Lílo AI pẹ̀lú ìgboyà",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mímú ìdáhùn dára sí i",
          minutes: 4,
          goal: "Lo àwọn prompt àtẹ̀lé láti tún ìdáhùn ṣe títí yóò fi bá ọ̀sẹ̀ rẹ mu.",
          text: [
            "Ìdáhùn àkọ́kọ́ jẹ́ àkọ́pẹrẹ. Olùrànlọ́wọ́ náà rántí ohun tí o sọ ṣáájú nínú ìjíròrò kan náà, nítorí náà o lè béèrè ìyípadà.",
            "Àwọn àtẹ̀lé tó wúlò fún eléré: \"Gbé àkókò ẹ̀kọ́ sí lẹ́yìn oúnjẹ alẹ́ ní ọjọ́ eré.\" \"Mú un kúrú.\" \"Fi ọjọ́ ìsinmi kan kún un.\" \"Lo ọ̀rọ̀ tó rọrùn jù.\" \"Ṣàlàyé ìdí tí o fi fi èyí síbí.\"",
            "Béèrè ìyípadà kan lẹ́ẹ̀kan. Tí ìjíròrò náà bá yà kúrò lójú ọ̀nà, bẹ̀rẹ̀ ìjíròrò tuntun pẹ̀lú prompt tó yé jù."
          ],
          steps: ["Ka ìdáhùn àkọ́kọ́.", "Wá ohun tí kò bá ìṣètò àkókò rẹ gidi mu.", "Béèrè ìyípadà kan.", "Tún un ṣe títí yóò fi bá a mu."],
          words: [["Àtẹ̀lé (follow-up)", "ìbéèrè kejì tí ó ń kọ́ lé orí ìdáhùn tí o ti gbà."]],
          slides: [
            { title: "Ìdáhùn àkọ́kọ́ = àkọ́pẹrẹ", bullets: ["O lè béèrè ìyípadà", "Ó rántí ìjíròrò kan náà"] },
            { title: "Àwọn àtẹ̀lé tó ń ṣiṣẹ́", bullets: ["\"Fi ọjọ́ ìsinmi kan kún un.\"", "\"Gbé àkókò ẹ̀kọ́ sí lẹ́yìn oúnjẹ alẹ́ ní ọjọ́ eré.\"", "\"Ṣàlàyé ìdí tí o fi fi èyí síbí.\""] },
            { title: "Ó yà kúrò lójú ọ̀nà?", bullets: ["Ìyípadà kan lẹ́ẹ̀kan", "Tàbí bẹ̀rẹ̀ ìjíròrò tuntun pẹ̀lú prompt tó yé jù"] }
          ],
          tryIt: "Mú ìṣètò àkókò rẹ láti Ẹ̀kọ́ 3. Béèrè ìyípadà méjì, ọ̀kan lẹ́ẹ̀kan, kí ó lè bá ọ̀sẹ̀ rẹ gidi mu. Fi ẹ̀dà àkọ́kọ́ wé ti ìkẹyìn.",
          youCanNow: "mú ìdáhùn AI dára sí i pẹ̀lú àwọn prompt àtẹ̀lé tó yé.",
          quickCheck: [
            { objective: "O4", q: "Kí ló dé tí o fi lè ní kí olùrànlọ́wọ́ náà yí ìdáhùn rẹ̀ padà?", options: ["Ó ń gbàgbé ọ̀rọ̀ kọ̀ọ̀kan", "Ó rántí ohun tí o sọ ṣáájú nínú ìjíròrò kan náà", "Òun ni kóòṣì rẹ", "Ó gbọ́dọ̀ gbà pẹ̀lú rẹ"], answer: 1, why: "Nínú ìjíròrò kan náà, olùrànlọ́wọ́ náà rántí àwọn ọ̀rọ̀ ìṣáájú, nítorí náà o lè béèrè ìyípadà." },
            { objective: "O4", q: "Ètò náà fi àkókò ẹ̀kọ́ tó wúwo sí ṣáájú eré rẹ ní Ọjọ́ Ẹtì. Kí ni o máa fi ránṣẹ́?", options: ["\"Kò tọ́.\"", "\"Bẹ̀rẹ̀ láti ìbẹ̀rẹ̀ kí o sì fi kún un.\"", "\"Gbé àkókò ẹ̀kọ́ ní ọjọ́ eré sí lẹ́yìn oúnjẹ alẹ́.\"", "Kò sí nǹkan; tẹ̀lé e bẹ́ẹ̀"], answer: 2, why: "Àtẹ̀lé tó yé tí ó dárúkọ ìyípadà kan ń tún ètò náà ṣe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣàyẹ̀wò ìdáhùn AI pẹ̀lú kóòṣì rẹ",
          minutes: 5,
          goal: "Wá àwọn apá ìdáhùn AI tí ó nílò àyẹ̀wò, kí o sì ṣàyẹ̀wò wọn pẹ̀lú ẹni tàbí orísun tó yẹ.",
          text: [
            "AI lè hùmọ̀ nǹkan tàbí fúnni ní ìsọfúnni àtijọ́. Èyí ni a máa ń pè ní hallucination nígbà míì. Nínú eré ìdárayá, ó lè jẹ́ òfin tí kò tọ́, èsì tí a hùmọ̀, ọjọ́ recruiting àtijọ́, tàbí ìmọ̀ràn ìdánrawò tí ó léwu.",
            "Máa ṣàyẹ̀wò ìwọ̀n ìdánrawò, ìmọ̀ràn nípa ìpalára ara àti ìlera, oúnjẹ, oògùn afikún (supplements), ẹ̀tọ́ láti kópa, recruiting àti òfin NIL nígbà gbogbo. Ṣàyẹ̀wò pẹ̀lú kóòṣì rẹ, athletic trainer, dókítà, onímọ̀ oúnjẹ tí a forúkọ rẹ̀ sílẹ̀ (registered dietitian), tàbí compliance office ilé-ẹ̀kọ́ rẹ, àti lórí àwọn ojú-ìwé gidi bí ncaa.org.",
            "Àṣà tó dára: béèrè lọ́wọ́ olùrànlọ́wọ́ náà pé \"Kí ni mo yẹ kí n tún ṣàyẹ̀wò pẹ̀lú kóòṣì mi?\" Lẹ́yìn náà, béèrè lọ́wọ́ kóòṣì rẹ ní tòótọ́."
          ],
          steps: ["Sàmì sí gbogbo òtítọ́, nọ́mbà, òfin tàbí ìmọ̀ràn ìlera nínú ìdáhùn.", "Pinnu ẹni tí ó yẹ kí ó ṣàyẹ̀wò rẹ̀: kóòṣì, athletic trainer, dókítà, onímọ̀ oúnjẹ tàbí compliance office.", "Ṣàyẹ̀wò àwọn ojú-ìwé gidi fún òfin.", "Tí wọn kò bá fohùn ṣọ̀kan, tẹ̀lé ẹni náà tàbí orísun gidi."],
          words: [["Hallucination", "nígbà tí AI bá kọ nǹkan tí ó dún bí òótọ́ ṣùgbọ́n tí ó jẹ́ àhùmọ̀."], ["Compliance office", "ọ́fíìsì ilé-ẹ̀kọ́ tí ó mọ òfin eré ìdárayá, títí kan òfin recruiting àti NIL. NIL (Name, Image and Likeness) ni ẹ̀tọ́ eléré láti gba owó lórí orúkọ, àwòrán àti ìrísí rẹ̀."]],
          slides: [
            { title: "AI lè ṣàṣìṣe nípa", bullets: ["Òfin àti ọjọ́ recruiting", "Èsì eré àti àkọsílẹ̀", "Ìmọ̀ràn ìdánrawò, ìpalára ara àti oúnjẹ"] },
            { title: "Ta ló ń ṣàyẹ̀wò kí ni", bullets: ["Ìdánrawò: kóòṣì", "Ìpalára ara àti ìlera: athletic trainer tàbí dókítà", "Oúnjẹ: registered dietitian", "Òfin àti NIL: compliance office"] },
            { title: "Àṣà tó dára", bullets: ["Béèrè pé: \"Kí ni mo yẹ kí n tún ṣàyẹ̀wò?\"", "Lẹ́yìn náà ṣàyẹ̀wò rẹ̀ pẹ̀lú ènìyàn gidi"] }
          ],
          sources: [{ name: "NCAA: Name, Image and Likeness (òfin fún àwọn eléré yunifásítì)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Béèrè ìbéèrè òfin kan nípa eré rẹ lọ́wọ́ olùrànlọ́wọ́ AI, fún àpẹẹrẹ iye ìsinmi ìdúró (timeout) tí ẹgbẹ́ kọ̀ọ̀kan ní. Lẹ́yìn náà wá ìdáhùn nínú ìwé òfin gidi líìgì rẹ tàbí béèrè lọ́wọ́ kóòṣì rẹ, kí o sì wò ó bóyá ó bá a mu.",
          youCanNow: "wá ohun tí ó nílò àyẹ̀wò nínú ìdáhùn AI, kí o sì gbé e lọ sọ́dọ̀ ẹni tó yẹ tàbí orísun gidi.",
          quickCheck: [
            { objective: "O5", q: "Kí ni hallucination AI?", options: ["Àlá nígbà oorun ọ̀sán", "Àtúnwò fídíò", "Ìdáhùn kíákíá", "Nǹkan tí AI hùmọ̀ tí ó dún bí òótọ́"], answer: 3, why: "AI lè hùmọ̀ òfin, èsì tàbí ọjọ́ tí ó dún bí òótọ́." },
            { objective: "O5", q: "AI dábàá oògùn afikún (supplement) kan kí ara rẹ lè yá kíákíá. Ta ló máa ṣàyẹ̀wò rẹ̀?", options: ["Ọmọ ẹgbẹ́ rẹ", "Registered dietitian, dókítà rẹ tàbí athletic trainer rẹ", "Ojú-òpó wẹ́ẹ̀bù oògùn afikún náà", "Kò sí ẹnìkan; AI máa ń tọ̀nà nígbà gbogbo"], answer: 1, why: "A gbọ́dọ̀ ṣàyẹ̀wò oògùn afikún àti ìmọ̀ràn oúnjẹ pẹ̀lú akọ́ṣẹ́mọṣẹ́ tó yẹ, àti pẹ̀lú compliance office fún ẹ̀tọ́ láti kópa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dídáàbò bo ìsọfúnni àdáni àti ti ìlera rẹ",
          minutes: 5,
          goal: "Lo AI fún iṣẹ́ gidi láìfi ìsọfúnni àdáni, ti ìlera tàbí ti àkáǹtì hàn.",
          text: [
            "Má ṣe tẹ ìsọfúnni àdáni sínú olùrànlọ́wọ́ AI: ọ̀rọ̀ aṣínà, nọ́mbà Social Security tàbí nọ́mbà ìdánimọ̀, àdírẹ́sì ilé rẹ, ìsọfúnni báńkì, tàbí àkọsílẹ̀ ìlera bí ìròyìn ìpalára ara, oògùn tàbí èsì àyẹ̀wò.",
            "O ṣì lè rí ìrànlọ́wọ́. Kọ \"[ilé-ẹ̀kọ́ mi]\" tàbí \"ìpalára iṣan ẹ̀yìn itan tí athletic trainer mi ń tọ́jú\" dípò orúkọ àti àlàyé ìlera. Béèrè ìbéèrè gbogbogbò; gbé àwọn ìbéèrè pàtó lọ sọ́dọ̀ akọ́ṣẹ́mọṣẹ́.",
            "Ṣọ́ra fún jìbìtì tí wọ́n ń fi dojú kọ eléré: olùwá-eléré (recruiter) irọ́, àdéhùn ọjà (brand deal) irọ́ àti aṣojú (agent) irọ́ tí wọ́n ń kán ọ lójú, tí wọ́n ń béèrè owó ṣáájú, tàbí tí wọ́n ń béèrè kóòdù ìwọlé. Kọ́kọ́ ṣàyẹ̀wò wọn pẹ̀lú kóòṣì rẹ tàbí compliance office."
          ],
          steps: ["Ka prompt rẹ kí o tó fi ránṣẹ́.", "Yọ orúkọ, nọ́mbà, ọ̀rọ̀ aṣínà àti àlàyé ìlera kúrò.", "Lo àmì ìdúrópò bí \"[ilé-ẹ̀kọ́ mi]\".", "Ka ìfilọ̀ tí ó ń kánjú, owó ṣáájú àti ìbéèrè kóòdù sí àmì ìkìlọ̀."],
          words: [["Àmì ìdúrópò (placeholder)", "ohun tí ó dúró dípò nǹkan gidi bí \"[ilé-ẹ̀kọ́ mi]\", kí ìsọfúnni gidi lè wà ní àṣírí."], ["Jìbìtì (scam)", "ẹ̀tàn láti jí owó, àkáǹtì tàbí ìsọfúnni."]],
          slides: [
            { title: "Má ṣe tẹ èyí sínú AI láé", bullets: ["Ọ̀rọ̀ aṣínà àti kóòdù ìwọlé", "Nọ́mbà ìdánimọ̀ tàbí ti báńkì, àdírẹ́sì ilé", "Ìròyìn ìpalára ara, oògùn, èsì àyẹ̀wò"] },
            { title: "Lo àmì ìdúrópò", bullets: ["\"[ilé-ẹ̀kọ́ mi]\" dípò orúkọ rẹ̀", "Ìbéèrè gbogbogbò sí AI, èyí tó jẹ́ pàtó sí akọ́ṣẹ́mọṣẹ́"] },
            { title: "Jìbìtì tí ó ń dojú kọ eléré", bullets: ["Recruiter irọ́ àti agent irọ́", "Brand deal irọ́ tí ó ń béèrè owó ṣáájú", "Ẹnikẹ́ni tí ó bá ń béèrè kóòdù ìwọlé"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe ètò ọ̀sẹ̀ kan fún ìdánrawò àti ẹ̀kọ́ pẹ̀lú olùrànlọ́wọ́ AI. Lo prompt apá mẹ́ta, béèrè àtúnṣe méjì, yọ ìsọfúnni àdáni àti ti ìlera kúrò, kí o sì fi ètò náà han kóòṣì rẹ tàbí athletic trainer rẹ.",
          youCanNow: "lo AI láti ṣètò ọ̀sẹ̀ rẹ nígbà tí o ń dáàbò bo ìsọfúnni àdáni àti ti ìlera rẹ, kí o sì dá àwọn jìbìtì tí ó ń dojú kọ eléré mọ̀.",
          quickCheck: [
            { objective: "O6", q: "Ìsọfúnni wo ni o yẹ kí o pa mọ́ kúrò nínú prompt?", options: ["Àkókò ìdánrawò rẹ", "Eré rẹ", "Ìròyìn ìpalára ara rẹ àti àkọsílẹ̀ oògùn rẹ", "Pé o fẹ́ tábìlì"], answer: 2, why: "Àkọsílẹ̀ ìlera bí ìròyìn ìpalára ara àti oògùn kò gbọ́dọ̀ wọ inú irinṣẹ́ AI." },
            { objective: "O6", q: "\"Agent\" kan kọ̀wé sí ọ nípa brand deal, ó sì béèrè kóòdù ìwọlé kí ẹ lè parí rẹ̀ lónìí. Kí ni o máa ṣe?", options: ["Má fi kóòdù náà fún un láé, kí o sì ṣàyẹ̀wò pẹ̀lú kóòṣì rẹ tàbí compliance office", "Fi kóòdù náà ránṣẹ́ kíákíá", "San owó láti di àdéhùn náà mú", "Fún un ní ọ̀rọ̀ aṣínà rẹ dípò rẹ̀"], answer: 0, why: "Kíkán ọ lójú àti bíbéèrè kóòdù jẹ́ àmì ìkìlọ̀ jìbìtì." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lílo AI pẹ̀lú ìgboyà",
        questions: [
          { objective: "O4", q: "Ètò AI náà kò ní ọjọ́ ìsinmi. Kí ni ìgbésẹ̀ tó dára jù tí ó kàn?", options: ["Gbà á bẹ́ẹ̀", "Pa app náà rẹ́", "Máa ṣe ìdánrawò lójoojúmọ́ títí láé", "Béèrè pé: \"Fi ọjọ́ ìsinmi kan kún un.\""], answer: 3, why: "Àtẹ̀lé ń ní kí olùrànlọ́wọ́ náà yí ìdáhùn rẹ̀ padà." },
          { objective: "O5", q: "Ta ló yẹ kí ó ṣàyẹ̀wò ìmọ̀ràn AI nípa ìpalára ara?", options: ["Athletic trainer rẹ tàbí dókítà rẹ", "Ọmọ ẹgbẹ́ rẹ", "AI fúnra rẹ̀", "Ọ̀rọ̀ ẹnìkan lórí ìkànnì àjọlò"], answer: 0, why: "Ìbéèrè ìlera àti ìpalára ara ń lọ sọ́dọ̀ akọ́ṣẹ́mọṣẹ́ tí ó kọ́ṣẹ́ rẹ̀." },
          { objective: "O5", q: "Kí ni hallucination nínú AI?", options: ["Àlá ṣáájú eré", "Íńtánẹ́ẹ̀tì tí ó lọ́ra", "Nǹkan tí AI hùmọ̀ tí ó dún bí òótọ́", "Irú ìdánrawò kan"], answer: 2, why: "AI lè hùmọ̀ òtítọ́, òfin tàbí èsì tí ó dún bí òótọ́." },
          { objective: "O6", q: "Ìsọfúnni wo ni kò burú láti fi sínú prompt?", options: ["Ọ̀rọ̀ aṣínà rẹ", "Àkọsílẹ̀ oògùn rẹ", "Àdírẹ́sì ilé rẹ", "Àkókò ìdánrawò rẹ"], answer: 3, why: "Àkókò ìdánrawò ń ran ìdáhùn lọ́wọ́, kì í sì ṣe àṣírí." },
          { objective: "O6", q: "\"Recruiter\" kan kọ̀wé sí ọ nínú DM, ó ń béèrè owó kí ó lè fi fídíò ìgbésẹ̀ dídára rẹ ránṣẹ́ sí àwọn kóòṣì lónìí. Kí ni o máa ṣe?", options: ["Sanwó kíákíá kí àyè náà tó lọ", "Kọ́kọ́ ṣàyẹ̀wò pẹ̀lú kóòṣì rẹ tàbí compliance office", "Fi kóòdù ìwọlé rẹ ránṣẹ́", "Fi nọ́mbà ìdánimọ̀ rẹ ránṣẹ́"], answer: 1, why: "Kíkán ọ lójú àti owó ṣáájú jẹ́ àmì ìkìlọ̀. Ṣàyẹ̀wò kí o tó ṣe nǹkan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí AI nínú Eré Ìdárayá",
    questions: [
      { objective: "O1", q: "Ọ̀nà tó dára jù láti ṣàpèjúwe AI ni:", options: ["Irú bọ́ọ̀lù tuntun kan", "Referee", "Àwọn ètò tí ó ń kọ́ àpẹẹrẹ láti inú dátà", "Líìgì eré ìdárayá kan"], answer: 2, why: "AI ń kọ́ àpẹẹrẹ láti inú dátà, ó sì ń lò wọ́n láti dáhùn tàbí sọ àsọtẹ́lẹ̀." },
      { objective: "O1", q: "Èwo NI KÌ Í ṢE ìlò AI nínú eré ìdárayá?", options: ["Sísó okùn bàtà rẹ", "Sísàmì sí ìgbésẹ̀ eré nínú fídíò", "Títọpa ìsáré pẹ̀lú app", "Sísọ àsọtẹ́lẹ̀ àǹfààní kí bọ́ọ̀lù wọlé"], answer: 0, why: "Sísó okùn bàtà jẹ́ iṣẹ́ ènìyàn; àwọn yòókù ń lo AI." },
      { objective: "O1", q: "Ta ló ń ṣe ìpinnu ìkẹyìn lórí ìdánrawò rẹ?", options: ["Ìwọ àti kóòṣì rẹ", "AI", "App èyíkéyìí", "Kò sí ẹnìkan"], answer: 0, why: "AI ń ṣèrànwọ́; ènìyàn ló ń pinnu." },
      { objective: "O2", q: "Èwo ni olùrànlọ́wọ́ AI ọ̀fẹ́ tí a mọ̀ dáadáa?", options: ["Aago ìdíwọ̀n àkókò (stopwatch)", "Pátákó èsì eré", "Google Gemini", "Aṣọ eré (jersey)"], answer: 2, why: "Gemini, ChatGPT àti Copilot jẹ́ olùrànlọ́wọ́ AI ọ̀fẹ́." },
      { objective: "O2", q: "O jẹ́ ọmọ ọdún 15, o sì fẹ́ lo olùrànlọ́wọ́ AI. Kí ni o yẹ kí o kọ́kọ́ ṣe?", options: ["Purọ́ nípa ọjọ́ orí rẹ", "Ṣàyẹ̀wò òfin ọjọ́ orí app náà kí o sì béèrè lọ́wọ́ òbí tàbí alágbàtọ́", "Lo àkáǹtì ọ̀rẹ́ rẹ", "Fi ọ̀rọ̀ aṣínà rẹ hàn"], answer: 1, why: "Ọ̀pọ̀ olùrànlọ́wọ́ ní òfin ọjọ́ orí; òbí yẹ kí ó mọ̀." },
      { objective: "O2", q: "Níbo ni o sábà máa ń tẹ ọ̀rọ̀ sí olùrànlọ́wọ́ AI?", options: ["Àmì bátìrì", "Kámẹ́rà", "Àdírẹ́sì ilé-ẹ̀kọ́ rẹ", "Àpótí ọ̀rọ̀ nítòsí ìsàlẹ̀"], answer: 3, why: "Àpótí ọ̀rọ̀ ni ibi tí o ti ń tẹ prompt rẹ." },
      { objective: "O2", q: "Lẹ́yìn lílo kọ̀mpútà àjọlò ilé-ẹ̀kọ́, o yẹ kí o:", options: ["Wà nínú àkáǹtì rẹ", "Fi ọ̀rọ̀ aṣínà rẹ pamọ́", "Jáde (sign out) kí o sì pa browser", "Fi ìwé kan sílẹ̀ tí ọ̀rọ̀ aṣínà rẹ wà lórí rẹ̀"], answer: 2, why: "Jíjáde ń jẹ́ kí àkáǹtì rẹ wà láìléwu." },
      { objective: "O3", q: "Kí ni prompt?", options: ["Eré ìmúra-ara (warm-up)", "Ìkígbe ìwúrí ẹgbẹ́", "Ìsinmi ìdúró (timeout)", "Ohun tí o tẹ tàbí sọ sí olùrànlọ́wọ́ AI"], answer: 3, why: "Prompt ni ìbéèrè rẹ sí AI." },
      { objective: "O3", q: "Apá wo ló ń sọ fún AI bí ó ṣe máa ṣe ìdáhùn?", options: ["Ìrísí, bí tábìlì tàbí àkọsílẹ̀", "Nọ́mbà aṣọ eré rẹ", "Ọ̀rọ̀ aṣínà rẹ", "Nọ́mbà fóònù kóòṣì rẹ"], answer: 0, why: "Sísọ ìrísí ń mú ìdáhùn wá ní ọ̀nà tí o nílò." },
      { objective: "O3", q: "Prompt wo ló yé jù?", options: ["\"ìdánrawò\"", "\"Mo jẹ́ asáré eré-ìje kíákíá (sprinter) ní yunifásítì, ìdánrawò 3-5 ìrọ̀lẹ́. Ṣe ètò ẹ̀kọ́ fún ọ̀sẹ̀ náà nínú tábìlì.\"", "\"ràn mí lọ́wọ́\"", "\"eré ìdárayá\""], answer: 1, why: "Ó ní ohun tí o nílò, ipò rẹ àti ìrísí ìdáhùn." },
      { objective: "O4", q: "Ìdáhùn àkọ́kọ́ kò bá ọjọ́ eré rẹ mu. O yẹ kí o:", options: ["Jáwọ́", "Gbà á", "Béèrè àtẹ̀lé láti yí ọjọ́ eré padà", "Sanwó fún app tuntun"], answer: 2, why: "Àwọn àtẹ̀lé ń tún àwọn apá tí kò bá a mu ṣe." },
      { objective: "O4", q: "Ìyípadà mélòó ni o yẹ kí o béèrè lẹ́ẹ̀kan kí ó lè yé?", options: ["Ọ̀kan lẹ́ẹ̀kan", "Mẹ́wàá", "Kò sí", "Iye tí o bá lè tẹ"], answer: 0, why: "Ìyípadà kan lẹ́ẹ̀kan ń jẹ́ kí ìdáhùn wà lójú ọ̀nà." },
      { objective: "O4", q: "Ìjíròrò kan ń yà kúrò lójú ọ̀nà ṣáá. Ìgbésẹ̀ tó dára ni:", options: ["Tẹ ọ̀rọ̀ aṣínà rẹ", "Tún ọ̀rọ̀ kan náà sọ", "Dá ìdánrawò dúró", "Bẹ̀rẹ̀ ìjíròrò tuntun pẹ̀lú prompt tó yé jù"], answer: 3, why: "Ìjíròrò tuntun pẹ̀lú prompt tó yé jù sábà máa ń ṣiṣẹ́ dáadáa jù." },
      { objective: "O5", q: "AI fún ọ ní òfin recruiting kan. O yẹ kí o:", options: ["Gbé e jáde bí òtítọ́", "Ṣàyẹ̀wò rẹ̀ lórí ncaa.org tàbí pẹ̀lú compliance office rẹ", "Má fetí sí òfin kankan", "Tún béèrè lọ́wọ́ AI kí o sì gbà á gbọ́"], answer: 1, why: "Òfin ń yí padà; ṣàyẹ̀wò orísun gidi." },
      { objective: "O5", q: "Ta ni ẹni tó yẹ láti ṣàyẹ̀wò ètò oúnjẹ?", options: ["Gbajúmọ̀ orí ayélujára èyíkéyìí", "Registered dietitian", "AI", "Eré fídíò"], answer: 1, why: "A kọ́ àwọn registered dietitian láti fúnni ní ìmọ̀ràn oúnjẹ." },
      { objective: "O5", q: "Ta ló mọ òfin NIL àti recruiting ilé-ẹ̀kọ́ rẹ?", options: ["Ilé oúnjẹ", "Awakọ̀ bọ́ọ̀sì", "Ẹgbẹ́ alátakò", "Compliance office"], answer: 3, why: "Compliance office ló ń bójú tó òfin eré ìdárayá." },
      { objective: "O6", q: "Èwo ni o KÒ GBỌ́DỌ̀ tẹ sínú olùrànlọ́wọ́ AI LÁÉ?", options: ["Àkọsílẹ̀ oògùn rẹ", "Ìṣètò àkókò ìdánrawò rẹ", "Eré rẹ", "Ipò rẹ nínú ẹgbẹ́"], answer: 0, why: "Oògùn àti àkọsílẹ̀ ìlera jẹ́ àṣírí." },
      { objective: "O6", q: "Báwo ni o ṣe lè béèrè nípa ìpalára ara láìfi àkọsílẹ̀ hàn?", options: ["Lẹ ìròyìn MRI rẹ sínú rẹ̀", "Tẹ àkọsílẹ̀ dókítà rẹ", "Béèrè ìbéèrè gbogbogbò, kí o sì gbé èyí tó jẹ́ pàtó lọ sọ́dọ̀ athletic trainer rẹ", "Fi nọ́mbà ìbánigbófò rẹ hàn"], answer: 2, why: "Ìbéèrè gbogbogbò dára; ìtọ́jú pàtó jẹ́ ti akọ́ṣẹ́mọṣẹ́." },
      { objective: "O6", q: "Brand deal kan ní kí o kọ́kọ́ san owó kí o tó dara pọ̀. Èyí jẹ́:", options: ["Ohun tí ó wọ́pọ̀ fún gbogbo àdéhùn", "Ohun tí NCAA ń béèrè", "Àmì rere", "Àmì ìkìlọ̀ jìbìtì"], answer: 3, why: "Àwọn ilé-iṣẹ́ ọjà gidi ló ń san owó fún ọ; owó ṣáájú jẹ́ àmì jìbìtì tí ó wọ́pọ̀." },
      { objective: "O6", q: "Ẹnìkan béèrè kóòdù tí wọ́n ṣẹ̀ṣẹ̀ fi ránṣẹ́ sí fóònù rẹ. O yẹ kí o:", options: ["Kà á fún un", "Má fi hàn láé", "Gbé e jáde", "Fi ránṣẹ́ sí ẹgbẹ́ rẹ"], answer: 1, why: "Kóòdù yẹn ń dáàbò bo àkáǹtì rẹ. Recruiter àti ilé-iṣẹ́ ọjà gidi kò ní béèrè fún un láé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 7, 10, 13, 16, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Prompt tó yé", objective: "O3", notYet: "Prompt náà kò yé, fún àpẹẹrẹ \"ṣe ètò fún mi\".", meets: "Prompt náà sọ ohun tí o nílò, ìṣètò àkókò ìdánrawò, eré àti kíláàsì rẹ gidi, àti ìrísí ìdáhùn.", exceeds: "Ìdáhùn àkọ́kọ́ ti bá ọ̀pọ̀ jù lọ ọ̀sẹ̀ rẹ mu." },
      { name: "Ó mú un dára sí i", objective: "O4", notYet: "Ó lo ìdáhùn àkọ́kọ́ bí ó ti rí.", meets: "Ó béèrè ó kéré tán àtúnṣe méjì, ọ̀kan lẹ́ẹ̀kan.", exceeds: "Ó lè sọ ohun tí ìyípadà kọ̀ọ̀kan tún ṣe, bí ọjọ́ ìsinmi tàbí àkókò ọjọ́ eré." },
      { name: "Kò sí ìsọfúnni àdáni tàbí ti ìlera", objective: "O6", notYet: "Prompt náà ní orúkọ, nọ́mbà ìdánimọ̀, ọ̀rọ̀ aṣínà tàbí àlàyé ìlera.", meets: "Kò sí ìsọfúnni àdáni tàbí ti ìlera nínú prompt tàbí ètò náà.", exceeds: "Ó lo àmì ìdúrópò bí \"[ilé-ẹ̀kọ́ mi]\", ó sì fi àwọn ìbéèrè ìlera sílẹ̀ fún athletic trainer." },
      { name: "Ó ṣàyẹ̀wò pẹ̀lú kóòṣì", objective: "O5", notYet: "Ó tẹ̀lé ètò náà láìfi han ẹnikẹ́ni.", meets: "Ó fi ètò náà han kóòṣì rẹ̀ tàbí athletic trainer kí ó tó tẹ̀lé e.", exceeds: "Ó yí ètò náà padà nípa ìmọ̀ràn wọn, ó sì lè sọ ohun tí ó yí padà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn lo ètò tí AI ṣe fún ìdánrawò àti ẹ̀kọ́ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn kóòṣì tàbí athletic trainer tí wọ́n sọ pé àwọn eléré ń ṣàyẹ̀wò ìmọ̀ràn AI pẹ̀lú wọn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Athletes míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tàbí kọ̀mpútà ilé-ẹ̀kọ́ tàbí ti ilé-ìkàwé tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini",
      "Ìṣètò àkókò ìdánrawò, eré àti kíláàsì akẹ́kọ̀ọ́ gidi fún ọ̀sẹ̀ kan",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní ìpín kúkúrú: ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣàyẹ̀wò òfin ọjọ́ orí app AI kọ̀ọ̀kan fún ẹgbẹ́ rẹ; akẹ́kọ̀ọ́ tí kò tíì pé ọmọ ọdún 18 nílò àṣẹ òbí tàbí alágbàtọ́.",
      "Ní kí kóòṣì tàbí athletic trainer kan ṣàyẹ̀wò ètò ìkẹyìn pẹ̀lú àwọn eléré.",
      "Má ṣe ní kí àwọn eléré tẹ ìròyìn ìpalára ara, oògùn tàbí nọ́mbà ìdánimọ̀ sínú irinṣẹ́ AI láé.",
      "Ẹ jíròrò nípa jìbìtì recruiter irọ́ àti brand deal irọ́, kí ẹ sì darí àwọn eléré sí compliance office wọn fún ìbéèrè NIL.",
      "Fún iṣẹ́ ìkẹyìn ní máàkì pẹ̀lú rubric, kí o sì fúnni ní ìmọ̀ràn lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
