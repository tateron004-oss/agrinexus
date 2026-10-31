"use strict";

// Koach Learn course (Yoruba translation of veterans/veterans-ai-future-workforce.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-future-workforce-yo",
  lang: "yo",
  translationOf: "veterans-ai-future-workforce",
  category: "Veterans (military)",
  name: "Ìfihàn sí AI àti Ọjọ́ Iwájú Iṣẹ́",
  skills: "Ṣíṣàlàyé ohun tí AI jẹ́, Ṣíṣí olùrànlọ́wọ́ AI ọ̀fẹ́, Kíkọ prompt tó yé, Yíyí iṣẹ́ ológun padà sí ọ̀rọ̀ aráàlú, Ṣíṣàyẹ̀wò ìdáhùn AI, Dídáàbò bo ìsọfúnni àdáni àti ìsọfúnni ìkọ̀kọ̀",
  outcome: "lo olùrànlọ́wọ́ AI ọ̀fẹ́ láti yí ọ̀kan nínú àwọn iṣẹ́ tí o ṣe nínú ológun padà sí èdè iṣẹ́ aráàlú, ṣàyẹ̀wò èsì rẹ̀ lórí orísun iṣẹ́ ìjọba, kí o sì pa ìsọfúnni àdáni àti ìsọfúnni ìkọ̀kọ̀ mọ́ kúrò nínú rẹ̀.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ológun tẹ́lẹ̀ (veterans) àti àwọn ọmọ ogun tí wọ́n ń kúrò nínú iṣẹ́ ológun, tí wọ́n fẹ́ mọ bí artificial intelligence (AI) ṣe ń yí iṣẹ́ aráàlú padà, àti bí wọ́n ṣe lè lò ó fún àǹfààní ara wọn. O kò nílò ìmọ̀ ẹ̀rọ kankan tẹ́lẹ̀.",
    "O máa kọ́ ohun tí AI jẹ́, bí o ṣe lè ṣí olùrànlọ́wọ́ AI ọ̀fẹ́, bí o ṣe lè fún un ní ìtọ́sọ́nà tó yé (bí àṣẹ tó yé: iṣẹ́, ipò, òdiwọ̀n), àti bí o ṣe lè pa ìsọfúnni àdáni àti ìsọfúnni ìkọ̀kọ̀ mọ́ kúrò nínú rẹ̀. Lẹ́yìn náà, o máa lò ó láti yí ìrírí iṣẹ́ ológun rẹ padà sí ọ̀rọ̀ tí àwọn agbanisíṣẹ́ aráàlú ń gbọ́, kí o sì ṣàyẹ̀wò èsì rẹ̀.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún: ka á, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Yan iṣẹ́ kan tí o ṣe nínú ológun. Lo olùrànlọ́wọ́ AI láti kọ ọ́ padà gẹ́gẹ́ bí ìlà mẹ́ta fún résumé aráàlú, béèrè ìyípadà kan láti mú un dára sí i, wá iṣẹ́ ológun rẹ nínú O*NET Military Crosswalk láti ṣàyẹ̀wò àwọn orúkọ iṣẹ́ aráàlú tí ó dábàá, kí o sì yọ ìsọfúnni àdáni tàbí ìsọfúnni ìkọ̀kọ̀ èyíkéyìí kúrò kí o tó fi àwọn ìlà náà pamọ́.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ológun tẹ́lẹ̀ àti àwọn ọmọ ogun tí wọ́n ń kúrò nínú iṣẹ́ ológun, tí wọ́n ń wá iṣẹ́ aráàlú. Ọjọ́ orí àti ipò wọn (rank) yàtọ̀ síra gan-an; ọ̀pọ̀ jù lọ ní ọgbọ́n iṣẹ́ tó lágbára, ṣùgbọ́n wọ́n ń ṣàlàyé rẹ̀ ní èdè ológun.",
    startingPoint: "Wọ́n mọ àṣẹ, ìlànà àti òdiwọ̀n dáadáa, wọ́n sì lè lo smartphone tàbí kọ̀mpútà. Wọn kò fi bẹ́ẹ̀ lo olùrànlọ́wọ́ AI rí, wọn kò sì tíì mọ́ wọn lára láti ṣàlàyé iṣẹ́ ológun ní ọ̀rọ̀ aráàlú.",
    gap: "Àwọn agbanisíṣẹ́ aráàlú ń ka résumé ní èdè tiwọn, wọ́n sì ń retí sí i pé kí òṣìṣẹ́ lè lo irinṣẹ́ AI. Àwọn akẹ́kọ̀ọ́ nílò láti lo olùrànlọ́wọ́ AI ọ̀fẹ́ láìléwu láti yí iṣẹ́ ológun wọn padà sí èdè iṣẹ́ aráàlú, kí wọ́n sì ṣàyẹ̀wò èsì rẹ̀ lórí orísun iṣẹ́ ìjọba, kí ìrírí wọn lè yé àwọn ènìyàn, kí ìdáhùn tí kò tọ́ má sì ṣì wọ́n lọ́nà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a kò retí ìmọ̀ ẹ̀rọ kankan",
      "Ẹ̀rọ: smartphone tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì; àwọn kan ń lo kọ̀mpútà àjọlò ní bárékè (base), ilé-ìkàwé tàbí ti TAP",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 tí ó bá àkókò ìpàdé ìyípadà iṣẹ́ àti iṣẹ́ mu",
      "OPSEC àti ìsọfúnni àdáni: kò sí ìsọfúnni ìkọ̀kọ̀ (classified), èyí tí a ṣàkóso (controlled) tàbí ti iṣẹ́ ológun (mission), kò sì sí nọ́mbà Social Security tàbí nọ́mbà fáìlì VA nínú prompt kankan",
      "Iye owó iṣẹ́ àti òfin àwọn ètò ń yí padà, nítorí náà àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò orísun ìjọba (O*NET, BLS, VA) kí wọ́n tó ṣe nǹkan"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ àwọn iṣẹ́", action: "ṣàlàyé ohun tí AI jẹ́, dárúkọ àwọn ọ̀nà tí ó ń gbà yí iṣẹ́ aráàlú padà, kí o sì dá àwọn ọgbọ́n tí kò lè rọ́pò mọ̀", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O2", condition: "Lórí fóònù tàbí kọ̀mpútà", action: "ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ kí o sì kọ prompt tí ó ní iṣẹ́, ipò àti òdiwọ̀n", standard: "tí ìdáhùn àkọ́kọ́ fi wúlò" },
    { id: "O3", condition: "Kí o tó fi prompt èyíkéyìí ránṣẹ́", action: "ṣàyẹ̀wò rẹ̀ fún ìsọfúnni àdáni àti ìsọfúnni ìkọ̀kọ̀, kí o sì yọ ọ́ kúrò tàbí fi àmì ìdúrópò rọ́pò rẹ̀", standard: "láìfi nọ́mbà àdáni kankan hàn, àti láìsí ìsọfúnni ìkọ̀kọ̀, èyí tí a ṣàkóso tàbí ti iṣẹ́ ológun" },
    { id: "O4", condition: "Tí o bá ní kóòdù tàbí orúkọ iṣẹ́ ológun rẹ", action: "wá iṣẹ́ ológun rẹ nínú O*NET Military Crosswalk kí o sì kọ àwọn iṣẹ́ aráàlú tí ó bá a mu sílẹ̀", standard: "pẹ̀lú ó kéré tán orúkọ iṣẹ́ aráàlú mẹ́ta àti iṣẹ́ méjì fún ọ̀kọ̀ọ̀kan" },
    { id: "O5", condition: "Tí o bá ní iṣẹ́ kan láti inú iṣẹ́ ológun rẹ", action: "lo olùrànlọ́wọ́ AI láti kọ iṣẹ́ náà padà gẹ́gẹ́ bí ìlà résumé aráàlú tí ó ní ìwọ̀n àti èsì", standard: "láìsí èdè àdúgbò ológun, kí gbogbo ohun tí o sọ sì jẹ́ òtítọ́" },
    { id: "O6", condition: "Tí AI bá fún ọ ní ìdáhùn nípa iṣẹ́, owó iṣẹ́ tàbí àwọn ètò", action: "ṣàyẹ̀wò ìdáhùn náà lórí orísun ìjọba, kí o sì yan ọgbọ́n kan àti ètò kan fún ìgbésẹ̀ rẹ tó kàn", standard: "kí o tó lò ó" }
  ],
  chapters: [
    {
      name: "Orí 1: Ìpìlẹ̀ AI fún iṣẹ́ tó wà níwájú",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí AI jẹ́ àti bí ó ṣe ń yí iṣẹ́ padà",
          minutes: 4,
          goal: "Ṣàlàyé ní ọ̀rọ̀ ara rẹ ohun tí AI jẹ́, kí o sì dárúkọ ọ̀nà méjì tí ó ń gbà yí iṣẹ́ aráàlú padà.",
          text: [
            "AI, tàbí artificial intelligence (ọgbọ́n àtọwọ́dá), ni àwọn ètò kọ̀mpútà tí ó ń ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe, bí kíkọ̀wé, ṣíṣe àkópọ̀, títo ìsọfúnni lẹ́sẹẹsẹ tàbí rírí àwòṣe (pattern). Olùrànlọ́wọ́ AI ni èyí tí o ń bá sọ̀rọ̀ ní èdè ojoojúmọ́. Àwọn ọ̀fẹ́ tí a mọ̀ dáadáa ni ChatGPT, Microsoft Copilot àti Google Gemini.",
            "Nínú iṣẹ́ aráàlú, a ti ń lo AI báyìí láti kọ àkọ́pẹrẹ ímeèlì àti ìròyìn, ṣe àkópọ̀ ìwé gígùn, ṣètò àkókò àti ọ̀nà ìrìn, dáhùn ìbéèrè àwọn oníbàárà, kí ó sì rí ìṣòro nínú dátà. Nínú ètò ìpèsè ẹrù (logistics), ó ń ràn wá lọ́wọ́ láti sọ iye ẹrù tí a máa nílò; nínú iṣẹ́ àtúnṣe ẹ̀rọ, ó ń ṣàfihàn àwọn ẹ̀yà tí ó ṣeé ṣe kí ó bàjẹ́; nínú ọ́fíìsì, ó ń kọ àkọ́pẹrẹ àkọ́kọ́.",
            "AI kò rọ́pò ìpinnu ọlọ́gbọ́n, aṣáájú àti ojúṣe. Àwọn ọgbọ́n tí o kọ́ nínú aṣọ ológun nìyẹn. Àwọn agbanisíṣẹ́ fẹ́ ènìyàn tí ó lè lo AI bí irinṣẹ́, tí ó sì tún lè ṣe ìpinnu, ṣàyẹ̀wò iṣẹ́ náà, kí ó sì darí ẹgbẹ́."
          ],
          words: [["AI", "ìkékúrú artificial intelligence (ọgbọ́n àtọwọ́dá): àwọn ètò kọ̀mpútà tí ó ń ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe."], ["Olùrànlọ́wọ́ AI", "ètò AI tí o ń bá sọ̀rọ̀ nípa títẹ̀ ọ̀rọ̀ tàbí sísọ̀rọ̀."]],
          slides: [
            { title: "AI ni...", bullets: ["Àwọn ètò tí ó ń kọ̀wé, ṣe àkópọ̀, to nǹkan lẹ́sẹẹsẹ, tí ó sì ń rí àwòṣe", "Olùrànlọ́wọ́ tí o ń bá sọ̀rọ̀: ChatGPT, Copilot, Gemini"] },
            { title: "Bí AI ṣe ń yí iṣẹ́ padà", bullets: ["Kíkọ àkọ́pẹrẹ ímeèlì àti ìròyìn", "Sísọ iye ẹrù tí a máa nílò àti ṣíṣètò ọ̀nà ìrìn", "Rírí ẹ̀rọ tí ó ṣeé ṣe kí ó bàjẹ́"] },
            { title: "Ohun tí AI kò rọ́pò", bullets: ["Ìpinnu ọlọ́gbọ́n àti ojúṣe", "Aṣáájú", "Ṣíṣàyẹ̀wò iṣẹ́: ìwọ ló ṣì ń ṣe ìpinnu"] }
          ],
          tryIt: "Kọ iṣẹ́ méjì sílẹ̀ láti inú iṣẹ́ ológun rẹ àti iṣẹ́ méjì láti inú iṣẹ́ aráàlú tí o fẹ́. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ ọ̀nà kan tí AI lè gbà ràn ọ́ lọ́wọ́ nínú rẹ̀.",
          youCanNow: "ṣàlàyé ohun tí AI jẹ́, dárúkọ àwọn ọ̀nà tí ó ń gbà yí iṣẹ́ padà, kí o sì sọ àwọn ọgbọ́n tí AI kò lè rọ́pò.",
          quickCheck: [
            { objective: "O1", q: "Iṣẹ́ wo ni AI mọ̀ ọ́n ṣe jù nínú iṣẹ́ aráàlú?", options: ["Kíkọ àkọ́pẹrẹ àkọ́kọ́ ìròyìn kan", "Gbígba ojúṣe fún ìpinnu ìkẹyìn", "Níní ìgbẹ́kẹ̀lé ẹgbẹ́", "Dídarí ènìyàn nígbà wàhálà"], answer: 0, why: "AI lè kọ àkọ́pẹrẹ kí ó sì to ìsọfúnni lẹ́sẹẹsẹ, ṣùgbọ́n ìpinnu, ìgbẹ́kẹ̀lé àti aṣáájú wà lọ́wọ́ ènìyàn." },
            { objective: "O1", q: "Alábàáṣiṣẹ́ kan sọ pé AI máa sọ ọgbọ́n aṣáájú rẹ di asán. Kí ni o máa sọ?", options: ["Gbà pẹ̀lú rẹ̀ kí o sì yé kọ aṣáájú sínú résumé", "Sọ pé AI kò rọ́pò ìpinnu ọlọ́gbọ́n, aṣáájú tàbí ojúṣe", "Sọ pé inú ológun nìkan ni a ti ń lo AI", "Sọ pé AI máa ń tọ̀nà nígbà gbogbo, nítorí náà títẹ̀ ọ̀rọ̀ nìkan ni ènìyàn ń ṣe"], answer: 1, why: "AI ń yí àwọn iṣẹ́ padà, ṣùgbọ́n ènìyàn ló ṣì ń darí, ń pinnu, tí ó sì ń gba ojúṣe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣí olùrànlọ́wọ́ àti fífúnni ní àṣẹ tó yé",
          minutes: 5,
          goal: "Ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ kí o sì kọ prompt tí ó ní iṣẹ́, ipò àti òdiwọ̀n.",
          text: [
            "Lórí fóònù, gba app gidi láti ilé ìtajà app (OpenAI fún ChatGPT, Microsoft fún Copilot, Google fún Gemini). Lórí kọ̀mpútà, tẹ chatgpt.com, copilot.microsoft.com tàbí gemini.google.com sínú browser.",
            "Ohun tí o tẹ ni a ń pè ní prompt. O ti mọ bí a ṣe ń fúnni ní àṣẹ tó yé. Lo èrò kan náà: iṣẹ́ (ohun tí o nílò), ipò (bí nǹkan ṣe rí fún ọ), àti òdiwọ̀n (bí ìdáhùn tó dára ṣe máa rí: gígùn, ìrísí, ohùn).",
            "Àpẹẹrẹ: \"Task: list civilian jobs that use vehicle maintenance skills. Conditions: I was an Army light-wheel vehicle mechanic for 6 years. Standard: 5 job titles, one line each, plain words.\" (Iṣẹ́: ṣe àkọsílẹ̀ àwọn iṣẹ́ aráàlú tí ó ń lo ọgbọ́n àtúnṣe ọkọ̀. Ipò: mo jẹ́ mẹkáníìkì ọkọ̀ kéékèèké nínú Army fún ọdún 6. Òdiwọ̀n: orúkọ iṣẹ́ 5, ìlà kan fún ọ̀kọ̀ọ̀kan, ọ̀rọ̀ tó rọrùn.)"
          ],
          steps: ["Ṣí app gidi tàbí ojú-òpó wẹ́ẹ̀bù gidi.", "Kọ iṣẹ́ náà: ohun tí o nílò.", "Fi ipò kún un: bí nǹkan ṣe rí fún ọ, láìsí ìsọfúnni àdáni.", "Fi òdiwọ̀n kún un: gígùn, ìrísí àti ohùn.", "Fi ránṣẹ́ kí o sì ka ìdáhùn náà."],
          words: [["Prompt", "ohun tí o tẹ tàbí sọ sí olùrànlọ́wọ́ AI láti béèrè nǹkan."], ["Ìrísí (format)", "bí ìdáhùn ṣe rí, bí àkọsílẹ̀, tábìlì tàbí ìpínrọ̀ kúkúrú."]],
          slides: [
            { title: "Ibi tí o ti lè ṣí i", bullets: ["Fóònù: app gidi láti ilé ìtajà app", "Kọ̀mpútà: chatgpt.com, copilot.microsoft.com, gemini.google.com"] },
            { title: "Prompt jẹ́ àṣẹ tó yé", bullets: ["Iṣẹ́: ohun tí o nílò", "Ipò: bí nǹkan ṣe rí fún ọ", "Òdiwọ̀n: bí ìdáhùn tó dára ṣe máa rí"] },
            { title: "Àpẹẹrẹ", bullets: ["Iṣẹ́: àwọn iṣẹ́ aráàlú tí ó ń lo ọgbọ́n àtúnṣe ọkọ̀", "Ipò: ọdún 6 gẹ́gẹ́ bí mẹkáníìkì ọkọ̀ kéékèèké", "Òdiwọ̀n: orúkọ iṣẹ́ 5, ìlà kan fún ọ̀kọ̀ọ̀kan, ọ̀rọ̀ tó rọrùn"] }
          ],
          tryIt: "Ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ kan. Kọ prompt tí ó ní iṣẹ́, ipò àti òdiwọ̀n, tí ó béèrè orúkọ iṣẹ́ aráàlú márùn-ún tí ó ń lo àwọn ọgbọ́n láti inú iṣẹ́ ológun rẹ. Ka ìdáhùn náà.",
          youCanNow: "ṣí olùrànlọ́wọ́ AI ọ̀fẹ́ kí o sì kọ prompt tí ó ní iṣẹ́, ipò àti òdiwọ̀n.",
          quickCheck: [
            { objective: "O2", q: "Nínú prompt \"àṣẹ tó yé\", kí ni iṣẹ́ (task)?", options: ["Ìsọfúnni àdáni rẹ", "Bí ìdáhùn ṣe máa gùn tó", "Ohun tí o fẹ́ kí AI ṣe", "Orúkọ irinṣẹ́ AI náà"], answer: 2, why: "Iṣẹ́ ni ohun tí o fún AI láti ṣe; ipò àti òdiwọ̀n ló ń tẹ̀lé e." },
            { objective: "O2", q: "O fẹ́ èrò nípa iṣẹ́ aráàlú láti ọ̀dọ̀ olùrànlọ́wọ́ AI. Prompt wo ni o máa fi ránṣẹ́?", options: ["\"Jobs?\" (Iṣẹ́?)", "\"Tell me everything about work.\" (Sọ ohun gbogbo nípa iṣẹ́ fún mi.)", "\"Write my whole life story.\" (Kọ ìtàn ayé mi látòkè délẹ̀.)", "\"Iṣẹ́: ṣe àkọsílẹ̀ àwọn iṣẹ́ aráàlú. Ipò: ọdún 4 gẹ́gẹ́ bí alámọ̀já ìpèsè ẹrù (supply specialist). Òdiwọ̀n: orúkọ iṣẹ́ 5, ìlà kan fún ọ̀kọ̀ọ̀kan.\""], answer: 3, why: "Prompt tí ó ní iṣẹ́, ipò àti òdiwọ̀n máa ń mú ìdáhùn àkọ́kọ́ tó wúlò wá." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pípa ìsọfúnni àdáni àti ìsọfúnni ìkọ̀kọ̀ mọ́",
          minutes: 5,
          goal: "Ṣàyẹ̀wò prompt fún ìsọfúnni àdáni tàbí ìsọfúnni ìkọ̀kọ̀, kí o sì yọ ọ́ kúrò kí o tó fi ránṣẹ́.",
          text: [
            "Àwọn olùrànlọ́wọ́ AI gbogbogbò lè fi ohun tí o tẹ pamọ́. Má ṣe tẹ nọ́mbà Social Security rẹ láéláé, àwọn nọ́mbà tí ó wà lórí DD-214 rẹ, nọ́mbà fáìlì VA tàbí nọ́mbà ẹ̀tọ́ (claim) VA, nọ́mbà báńkì tàbí káàdì, ọ̀rọ̀ aṣínà, tàbí ìsọfúnni ìlera tí o kò fẹ́ kí ẹlòmíì mọ̀.",
            "Ìbáwí kan náà tí o lò fún ààbò ìsọfúnni iṣẹ́ ológun (OPSEC) ṣì ń bá a lọ. Má ṣe tẹ ìsọfúnni ìkọ̀kọ̀ (classified) tàbí èyí tí a ṣàkóso (controlled), ibi tí ẹgbẹ́ ológun wà, ìsọfúnni iṣẹ́ ológun (mission), tàbí ohunkóhun tí a sọ fún ọ pé kí o má sọ. Ṣàlàyé iṣẹ́ rẹ ní gbogbogbò: \"supervised a 12-person maintenance team\" (mo ṣe àbójútó ẹgbẹ́ àtúnṣe ẹ̀rọ ẹni 12) dára; o kò nílò orúkọ ẹgbẹ́ ológun tàbí iṣẹ́ ológun.",
            "Tí o bá nílò nọ́mbà kan nínú ìwé kan, kọ àmì ìdúrópò bí \"[nọ́mbà mi]\", kí o sì kọ nọ́mbà gidi sí i fúnra rẹ lẹ́yìn náà, láìsí lórí íńtánẹ́ẹ̀tì."
          ],
          steps: ["Ka prompt rẹ kí o tó fi ránṣẹ́.", "Yọ nọ́mbà àdáni, ìsọfúnni àkáǹtì àti ọ̀rọ̀ aṣínà kúrò.", "Yọ ìsọfúnni ìkọ̀kọ̀, èyí tí a ṣàkóso tàbí ti iṣẹ́ ológun pàtó kúrò.", "Lo àmì ìdúrópò bí \"[nọ́mbà mi]\" níbi tí ó bá yẹ."],
          words: [["OPSEC", "operational security (ààbò ìsọfúnni iṣẹ́ ológun): dídáàbò bo ìsọfúnni tí ọ̀tá lè lò."], ["Àmì ìdúrópò (placeholder)", "ohun tí ó dúró dípò nǹkan, bí \"[nọ́mbà mi]\", tí o máa fi ohun gidi rọ́pò fúnra rẹ lẹ́yìn náà."], ["DD-214", "ìwé tí ó ń kọ iṣẹ́ ológun rẹ àti bí o ṣe kúrò nínú rẹ̀ sílẹ̀."]],
          slides: [
            { title: "Má ṣe tẹ wọ̀nyí sínú AI gbogbogbò láéláé", bullets: ["Nọ́mbà Social Security, DD-214 tàbí fáìlì VA", "Nọ́mbà báńkì tàbí káàdì àti ọ̀rọ̀ aṣínà", "Ìsọfúnni ìlera àdáni"] },
            { title: "OPSEC ṣì ń bá a lọ", bullets: ["Kò sí ìsọfúnni ìkọ̀kọ̀ tàbí èyí tí a ṣàkóso", "Kò sí ibi tí ẹgbẹ́ ológun wà tàbí ìsọfúnni iṣẹ́ ológun", "Ṣàlàyé iṣẹ́ rẹ ní gbogbogbò"] },
            { title: "Lo àmì ìdúrópò", bullets: ["Kọ \"[nọ́mbà mi]\" dípò rẹ̀", "Kọ nọ́mbà gidi sí i fúnra rẹ lẹ́yìn náà, láìsí lórí íńtánẹ́ẹ̀tì"] }
          ],
          tryIt: "Kọ prompt tí ó ṣàlàyé iṣẹ́ ológun rẹ tó kẹ́yìn ní ọ̀nà tí o lè fi hàn fún agbanisíṣẹ́ èyíkéyìí. Kà á ní ìlà kọ̀ọ̀kan, kí o sì yọ ohunkóhun tí ó jẹ́ àdáni tàbí ìkọ̀kọ̀ kúrò kí o tó fi ránṣẹ́.",
          youCanNow: "ṣàyẹ̀wò prompt fún ìsọfúnni àdáni àti ìsọfúnni ìkọ̀kọ̀, kí o sì yọ ọ́ kúrò kí o tó fi ránṣẹ́.",
          quickCheck: [
            { objective: "O3", q: "O ń fi AI kọ lẹ́tà ìbéèrè iṣẹ́ (cover letter), o sì nílò nọ́mbà fóònù rẹ nínú rẹ̀. Kí ni o máa ṣe?", options: ["Tẹ nọ́mbà gidi kí lẹ́tà náà lè parí", "Kọ \"[fóònù mi]\" kí o sì kọ nọ́mbà gidi sí i fúnra rẹ lẹ́yìn náà", "Tẹ nọ́mbà Social Security rẹ dípò rẹ̀", "Ní kí AI fojú díwọ̀n nọ́mbà kan"], answer: 1, why: "Àmì ìdúrópò ń jẹ́ kí o rí ìrànlọ́wọ́ láìfi nọ́mbà àdáni sínú AI." },
            { objective: "O3", q: "Ìsọfúnni wo ni kò léwu láti fi sínú prompt AI gbogbogbò?", options: ["\"Mo kọ́ àwọn ọmọ ẹgbẹ́ tuntun 8 ní àyẹ̀wò ààbò\"", "Ọjọ́ tí ẹgbẹ́ ológun rẹ lọ sójú ogun àti ibi tí wọ́n wà", "Ìsọfúnni láti inú ìpàdé ìkọ̀kọ̀ (classified briefing)", "Nọ́mbà fáìlì VA rẹ"], answer: 0, why: "Iṣẹ́ gbogbogbò pẹ̀lú nọ́mbà dára; ìsọfúnni iṣẹ́ ológun àti nọ́mbà àdáni kò gbọdọ̀ wọlé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ìpìlẹ̀ AI fún iṣẹ́ tó wà níwájú",
        questions: [
          { objective: "O1", q: "Èwo ló ṣàlàyé olùrànlọ́wọ́ AI jù?", options: ["Olùgbanisíṣẹ́ tí ó ń ka ọ̀rọ̀ rẹ", "Ètò kọ̀mpútà tí o ń bá sọ̀rọ̀ ní èdè ojoojúmọ́", "Ọ́fíìsì ìjọba fún ẹ̀tọ́ àti àǹfààní", "Nẹ́tíwọ̀ọ̀kì ológun tí ó ní ààbò"], answer: 1, why: "Olùrànlọ́wọ́ AI jẹ́ ètò tí o ń tẹ ọ̀rọ̀ sí tàbí bá sọ̀rọ̀, tí ó sì ń kọ ìdáhùn padà." },
          { objective: "O1", q: "Ọgbọ́n wo ni AI KÒ rọ́pò ní ibi iṣẹ́?", options: ["Kíkọ àkọ́pẹrẹ ímeèlì àkọ́kọ́", "Ṣíṣe àkópọ̀ ìròyìn gígùn", "Ìpinnu ọlọ́gbọ́n àti ojúṣe fún ìpinnu náà", "Títo àkọsílẹ̀ lẹ́sẹẹsẹ"], answer: 2, why: "AI lè kọ àkọ́pẹrẹ kí ó sì to nǹkan lẹ́sẹẹsẹ, ṣùgbọ́n ènìyàn ló ṣì ń ṣe ìpinnu tí ó sì ń gba ojúṣe fún èsì rẹ̀." },
          { objective: "O2", q: "Nínú prompt \"àṣẹ tó yé\", kí ni ipò (conditions)?", options: ["Bí nǹkan ṣe rí fún ọ, láìsí ìsọfúnni àdáni", "Gígùn àti ìrísí ìdáhùn", "Orúkọ app náà", "Ọ̀rọ̀ aṣínà rẹ"], answer: 0, why: "Ipò ń ṣàlàyé bí nǹkan ṣe rí fún ọ, kí olùrànlọ́wọ́ lè mú ìdáhùn rẹ̀ bá ọ mu." },
          { objective: "O3", q: "Ìsọfúnni wo ni ó dára láti tẹ sínú olùrànlọ́wọ́ AI gbogbogbò?", options: ["Nọ́mbà tí ó wà lórí DD-214 rẹ", "Ibi tí ẹgbẹ́ ológun rẹ wà báyìí", "\"Mo ṣe àbójútó ẹgbẹ́ àtúnṣe ẹ̀rọ ẹni 12\"", "Nọ́mbà ẹ̀tọ́ (claim) VA rẹ"], answer: 2, why: "Àlàyé iṣẹ́ rẹ ní gbogbogbò kò léwu; nọ́mbà àti ìsọfúnni iṣẹ́ ológun léwu." },
          { objective: "O3", q: "O nílò nọ́mbà fáìlì VA rẹ nínú lẹ́tà tí o ń fi AI kọ. Kí ni o máa ṣe?", options: ["Tẹ nọ́mbà gidi", "Tẹ ìdajì rẹ̀", "Ní kí AI fojú díwọ̀n rẹ̀", "Kọ \"[nọ́mbà mi]\" kí o sì kọ ọ́ sí i fúnra rẹ lẹ́yìn náà"], answer: 3, why: "Àmì ìdúrópò ń jẹ́ kí o rí ìrànlọ́wọ́ láìfi nọ́mbà àdáni hàn." }
        ]
      }
    },
    {
      name: "Orí 2: Yíyí iṣẹ́ ológun rẹ padà sí iṣẹ́ aráàlú",
      lessons: [
        {
          objectives: ["O4"],
          title: "Wíwá àwọn iṣẹ́ aráàlú tí ó bá iṣẹ́ ológun rẹ mu",
          minutes: 5,
          goal: "Wá iṣẹ́ ológun rẹ nínú O*NET Military Crosswalk kí o sì kọ àwọn iṣẹ́ aráàlú tí ó bá a mu sílẹ̀.",
          text: [
            "O*NET OnLine ti U.S. Department of Labor (Ẹ̀ka Iṣẹ́ ti ìjọba Amẹ́ríkà) ní Military Crosswalk Search. O máa yan ẹ̀ka ológun rẹ (MOS ti Army tàbí Marine Corps, rating ti Navy tàbí Coast Guard, AFSC ti Air Force, SFSC ti Space Force), tẹ kóòdù tàbí orúkọ iṣẹ́ rẹ, ó sì máa fi àwọn iṣẹ́ aráàlú tí ó bá a mu hàn.",
            "Iṣẹ́ aráàlú kọ̀ọ̀kan lórí O*NET ń ṣe àkọsílẹ̀ àwọn iṣẹ́ rẹ̀, irinṣẹ́ rẹ̀ àti ọgbọ́n rẹ̀. Èdè tí àwọn agbanisíṣẹ́ ń lò nìyẹn. Lẹ́yìn náà o lè ní kí olùrànlọ́wọ́ AI ṣàlàyé àwọn iṣẹ́ náà ní ọ̀rọ̀ tó rọrùn, ṣùgbọ́n àkọsílẹ̀ náà fúnra rẹ̀ wá láti orísun ìjọba.",
            "CareerOneStop, tí Department of Labor náà ń ṣètìlẹ́yìn fún, ní Veterans Job Matcher tí ó ń ṣe irú ìbámu kan náà. Gbìyànjú méjèèjì kí o sì fi wọ́n wé ara wọn."
          ],
          steps: ["Lọ sí onetonline.org kí o sì ṣí Military Crosswalk Search.", "Yan ẹ̀ka ológun rẹ.", "Tẹ kóòdù rẹ (fún àpẹẹrẹ 88M tàbí rating Navy kan) tàbí orúkọ iṣẹ́ rẹ.", "Ṣí iṣẹ́ aráàlú méjì tàbí mẹ́ta tí ó bá a mu kí o sì ka àwọn iṣẹ́ wọn.", "Kọ àwọn orúkọ iṣẹ́ tí ó wù ọ́ sílẹ̀."],
          words: [["MOS / rating / AFSC", "kóòdù iṣẹ́ ológun rẹ nínú Army àti Marines, Navy àti Coast Guard, àti Air Force."], ["Crosswalk", "irinṣẹ́ tí ó ń so iṣẹ́ ológun pọ̀ mọ́ àwọn iṣẹ́ aráàlú."], ["O*NET", "ibi ìpamọ́ dátà Department of Labor nípa àwọn iṣẹ́ aráàlú àti àwọn ọgbọ́n tí wọ́n nílò."]],
          slides: [
            { title: "O*NET Military Crosswalk", bullets: ["U.S. Department of Labor ló ń ṣe é", "Yan ẹ̀ka ológun rẹ, tẹ kóòdù tàbí orúkọ iṣẹ́ rẹ", "Wo àwọn iṣẹ́ aráàlú tí ó bá a mu"] },
            { title: "Ka àwọn iṣẹ́ aráàlú náà", bullets: ["Iṣẹ́ kọ̀ọ̀kan ń ṣe àkọsílẹ̀ iṣẹ́, irinṣẹ́ àti ọgbọ́n", "Èdè tí àwọn agbanisíṣẹ́ ń lò nìyẹn"] },
            { title: "Tún gbìyànjú", bullets: ["CareerOneStop Veterans Job Matcher", "Fi àkọsílẹ̀ méjèèjì wé ara wọn"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search (wíwá iṣẹ́ aráàlú tí ó bá iṣẹ́ ológun mu)", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "U.S. Department of Labor VETS: Find a job (wá iṣẹ́)", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Wá MOS, rating tàbí AFSC rẹ nínú O*NET Military Crosswalk. Kọ orúkọ iṣẹ́ aráàlú mẹ́ta tí ó dábàá sílẹ̀, àti iṣẹ́ méjì láti inú ọ̀kọ̀ọ̀kan.",
          youCanNow: "lo O*NET Military Crosswalk láti wá àwọn iṣẹ́ aráàlú tí ó bá iṣẹ́ ológun rẹ mu.",
          quickCheck: [
            { objective: "O4", q: "Kí ni o máa tẹ sínú O*NET Military Crosswalk láti wá iṣẹ́ tí ó bá a mu?", options: ["Nọ́mbà Social Security rẹ", "Àdírẹ́sì ilé rẹ", "Ilé-iṣẹ́ aráàlú tí o fẹ́ràn jù", "Kóòdù tàbí orúkọ iṣẹ́ ológun rẹ"], answer: 3, why: "Crosswalk ń wá nǹkan pẹ̀lú kóòdù tàbí orúkọ iṣẹ́ ológun, ó sì ń fi àwọn iṣẹ́ aráàlú tí ó bá a mu hàn." },
            { objective: "O4", q: "Crosswalk fi ọ̀pọ̀ iṣẹ́ aráàlú hàn fún kóòdù rẹ. Kí ni o máa ṣe tẹ̀lé e?", options: ["Yan èyí àkọ́kọ́ láìkà á", "Pa àkọsílẹ̀ náà tì kí o sì béèrè lọ́wọ́ ọ̀rẹ́ kan", "Kọ orúkọ iṣẹ́ mẹ́ta sílẹ̀ àti iṣẹ́ méjì fún ọ̀kọ̀ọ̀kan", "Pa á dé kí o sì fojú díwọ̀n orúkọ iṣẹ́ kan"], answer: 2, why: "Kíkọ àwọn orúkọ iṣẹ́ àti iṣẹ́ wọn sílẹ̀ ń fún ọ ní ọ̀rọ̀ aráàlú láti lò nínú résumé rẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíkọ iṣẹ́ ológun padà ní ọ̀rọ̀ aráàlú",
          minutes: 5,
          goal: "Lo AI láti kọ iṣẹ́ ológun kan padà gẹ́gẹ́ bí ìlà résumé aráàlú tí ó ní èsì.",
          text: [
            "Àwọn olùdarí ìgbanisíṣẹ́ aráàlú lè má mọ ohun tí platoon sergeant, PMCS tàbí CONEX jẹ́. Iṣẹ́ rẹ ni láti sọ ohun kan náà ní ọ̀rọ̀ tiwọn: ohun tí o ṣe, bí ó ṣe tóbi tó, àti èsì tí ó mú wá.",
            "Fún AI ní iṣẹ́ rẹ ní ọ̀rọ̀ tó rọrùn àti iṣẹ́ aráàlú tí o ń fojú sí. Àpẹẹrẹ prompt: \"Rewrite this for a warehouse supervisor résumé: I was responsible for a supply room, 300 line items, issued gear to 120 soldiers, zero losses on 2 inventories. Give me 3 bullets that start with a strong verb and include numbers.\" (Kọ èyí padà fún résumé alábòójútó ilé ìkẹ́rùsí: mo ń bójú tó yàrá ẹrù, irú ẹrù 300, mo pín ohun èlò fún ọmọ ogun 120, kò sí ohun tí ó sọnù nínú ìkàyè ẹrù 2. Fún mi ní ìlà 3 tí ó bẹ̀rẹ̀ pẹ̀lú ọ̀rọ̀-ìṣe tó lágbára, tí ó sì ní nọ́mbà.)",
            "Lẹ́yìn náà, mú un dára sí i pẹ̀lú ìbéèrè àtẹ̀lé: \"Remove military slang.\" (Yọ èdè àdúgbò ológun kúrò.) \"Use the words from this job posting.\" (Lo àwọn ọ̀rọ̀ láti inú ìkéde iṣẹ́ yìí.) \"Make it shorter.\" (Mú un kúrú sí i.) Ìdáhùn àkọ́kọ́ jẹ́ àkọ́pẹrẹ; ìwọ ni olóòtú."
          ],
          steps: ["Kọ iṣẹ́ náà ní ọ̀rọ̀ tó rọrùn: kí ni, báwo ni ó ṣe tóbi tó, èsì wo.", "Dárúkọ iṣẹ́ aráàlú tí o ń fojú sí.", "Béèrè ìlà 3 tí ó ní ọ̀rọ̀-ìṣe tó lágbára àti nọ́mbà.", "Béèrè ìyípadà kan, bí \"yọ èdè àdúgbò ológun kúrò\".", "Kà á kí o sì rí i dájú pé gbogbo ọ̀rọ̀ jẹ́ òtítọ́."],
          words: [["Ìlà résumé (résumé bullet)", "ìlà kúkúrú kan lórí résumé tí ó ń fi ohun tí o ṣe àti èsì rẹ̀ hàn."], ["Ìkékúrú (acronym)", "ọ̀rọ̀ tí a ṣe láti inú lẹ́tà àkọ́kọ́, bí PMCS; àwọn aráàlú kì í sábà mọ ti ológun."]],
          slides: [
            { title: "Sọ ọ́ ní ọ̀rọ̀ tiwọn", bullets: ["Ohun tí o ṣe", "Bí ó ṣe tóbi tó: ènìyàn, owó, ohun èlò", "Èsì tí ó mú wá"] },
            { title: "Àpẹẹrẹ prompt", bullets: ["\"Kọ ọ́ padà fún résumé alábòójútó ilé ìkẹ́rùsí\"", "Yàrá ẹrù, irú ẹrù 300, ọmọ ogun 120, kò sí ohun tí ó sọnù", "\"Ìlà 3, ọ̀rọ̀-ìṣe tó lágbára, nọ́mbà\""] },
            { title: "Lẹ́yìn náà, ṣàtúnṣe", bullets: ["\"Yọ èdè àdúgbò ológun kúrò.\"", "\"Lo àwọn ọ̀rọ̀ láti inú ìkéde iṣẹ́ yìí.\"", "Ṣàyẹ̀wò pé gbogbo ọ̀rọ̀ jẹ́ òtítọ́"] }
          ],
          tryIt: "Yan iṣẹ́ kan láti inú iṣẹ́ ológun rẹ. Ní kí olùrànlọ́wọ́ AI kọ ọ́ padà gẹ́gẹ́ bí ìlà résumé aráàlú mẹ́ta fún orúkọ iṣẹ́ kan láti Ẹ̀kọ́ 4. Ní kí ó yọ èdè àdúgbò ológun kúrò.",
          youCanNow: "kọ iṣẹ́ ológun kan padà gẹ́gẹ́ bí ìlà résumé aráàlú tó yé, tí ó ní nọ́mbà àti èsì.",
          quickCheck: [
            { objective: "O5", q: "Ìlà résumé wo ni a kọ fún agbanisíṣẹ́ aráàlú?", options: ["\"Mo darí ẹgbẹ́ ẹni 10 tí ó dín àkókò àtúnṣe ẹ̀rọ kù ní 20%\"", "\"Served as NCOIC of the motor pool IAW SOP\"", "\"Mo ṣe onírúurú iṣẹ́ tí a yàn fún mi\"", "\"Mo wà ní ìkáwọ́ àwọn nǹkan\""], answer: 0, why: "Ó lo ọ̀rọ̀ tó rọrùn, ó sì fi ohun tí o ṣe, bí ó ṣe tóbi tó àti èsì rẹ̀ hàn." },
            { objective: "O5", q: "Ìlà tí AI kọ ṣì ní \"CONUS\" àti \"PCS\" nínú. Kí ni o máa béèrè tẹ̀lé e?", options: ["\"Fi ìkékúrú púpọ̀ sí i kún un.\"", "\"Mú un gùn sí i.\"", "\"Yọ èdè àdúgbò ológun kúrò kí o sì lo ọ̀rọ̀ aráàlú tó rọrùn.\"", "\"Kọ ọ́ bí ewì.\""], answer: 2, why: "Ìbéèrè àtẹ̀lé láti yọ èdè àdúgbò kúrò ń sọ àkọ́pẹrẹ di ọ̀rọ̀ tí aráàlú lè gbọ́." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣàyẹ̀wò ìdáhùn àti ṣíṣètò ọgbọ́n rẹ tó kàn",
          minutes: 5,
          goal: "Ṣàyẹ̀wò ìdáhùn AI lórí orísun ìjọba kí o sì yan ọgbọ́n kan láti kọ́ tẹ̀lé e.",
          text: [
            "AI lè hùmọ̀ nǹkan: orúkọ iṣẹ́ tí kò bá a mu, ìwé ẹ̀rí (certification) tí kò sí, tàbí iye owó iṣẹ́ tí kò tọ́. A ń pe èyí ní hallucination. Ṣàyẹ̀wò àwọn orúkọ iṣẹ́ lórí O*NET, kí o sì ṣàyẹ̀wò owó iṣẹ́ àti ọjọ́ iwájú iṣẹ́ nínú Occupational Outlook Handbook ti Bureau of Labor Statistics (bls.gov/ooh).",
            "Rí i dájú pé àwọn ìlà rẹ jẹ́ òtítọ́. Má ṣe jẹ́ kí AI fi kún ipò (rank), nọ́mbà tàbí àmì ẹ̀yẹ rẹ láéláé. Agbanisíṣẹ́ lè ṣàyẹ̀wò rẹ̀, ìgbẹ́kẹ̀lé sì ṣòro láti rí padà.",
            "Lẹ́yìn náà, ṣètò ọgbọ́n kan láti kọ́. Ìrànlọ́wọ́ ìjọba ọ̀fẹ́ ní ètò Personalized Career Planning and Guidance ti VA (ìmọ̀ràn iṣẹ́ ọ̀fẹ́ fún àwọn ológun tẹ́lẹ̀ àti ọmọ ogun tí ó yẹ) àti Transition Assistance Program ti Department of Labor. Fún ẹ̀kọ́ ẹ̀rọ ìgbàlódé, ètò VET TEC 2.0 ti VA ń sanwó fún àwọn ẹ̀kọ́ ẹ̀rọ kan tí kì í ṣe ti oyè yunifásítì, fún àwọn ológun tẹ́lẹ̀ tí ó yẹ. Ṣàyẹ̀wò ẹni tí ó yẹ lọ́wọ́lọ́wọ́ lórí va.gov."
          ],
          steps: ["Ṣàyẹ̀wò gbogbo orúkọ iṣẹ́ lórí O*NET.", "Ṣàyẹ̀wò owó iṣẹ́ àti ọjọ́ iwájú iṣẹ́ nínú Occupational Outlook Handbook.", "Rí i dájú pé gbogbo nọ́mbà àti ohun tí o sọ nínú àwọn ìlà rẹ jẹ́ òtítọ́.", "Yan ọgbọ́n kan láti kọ́ àti ètò ìjọba kan tí ó lè ràn ọ́ lọ́wọ́."],
          words: [["Hallucination", "nígbà tí AI bá kọ nǹkan tí ó dún bí òtítọ́ ṣùgbọ́n tí ó jẹ́ àhesọ."], ["Occupational Outlook Handbook", "ìwé ìtọ́sọ́nà ọ̀fẹ́ ti Bureau of Labor Statistics nípa owó iṣẹ́, ìdàgbàsókè iṣẹ́ àti bí a ṣe ń wọ iṣẹ́ kọ̀ọ̀kan."]],
          slides: [
            { title: "Ṣàyẹ̀wò ìdáhùn AI", bullets: ["Orúkọ iṣẹ́: O*NET", "Owó iṣẹ́ àti ọjọ́ iwájú iṣẹ́: bls.gov/ooh", "Má ṣe fi kún ipò, nọ́mbà tàbí àmì ẹ̀yẹ rẹ láéláé"] },
            { title: "Ìrànlọ́wọ́ ìjọba ọ̀fẹ́", bullets: ["VA Personalized Career Planning and Guidance", "DOL Transition Assistance Program (TAP)", "VA VET TEC 2.0 fún ẹ̀kọ́ ẹ̀rọ ìgbàlódé"] },
            { title: "Ìgbésẹ̀ rẹ tó kàn", bullets: ["Yan ọgbọ́n kan láti kọ́", "Yan ètò kan tí ó lè ràn ọ́ lọ́wọ́", "Ṣàyẹ̀wò bóyá o yẹ lórí va.gov"] }
          ],
          sources: [
            { name: "Bureau of Labor Statistics: Occupational Outlook Handbook (ìwé ìtọ́sọ́nà nípa owó iṣẹ́ àti ọjọ́ iwájú iṣẹ́)", url: "https://www.bls.gov/ooh/" },
            { name: "VA: Personalized Career Planning and Guidance (ìmọ̀ràn iṣẹ́ ọ̀fẹ́)", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" },
            { name: "VA: VET TEC 2.0 (ẹ̀kọ́ ẹ̀rọ ìgbàlódé)", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor: Transition Assistance Program (ètò ìrànlọ́wọ́ fún ìyípadà sí iṣẹ́ aráàlú)", url: "https://www.dol.gov/agencies/vets/programs/tap" }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: mú àwọn ìlà mẹ́ta rẹ láti Ẹ̀kọ́ 5. Ṣàyẹ̀wò àwọn orúkọ iṣẹ́ nínú O*NET Military Crosswalk, béèrè ìyípadà kan lọ́wọ́ AI láti mú un dára sí i, yọ ìsọfúnni àdáni tàbí ìsọfúnni ìkọ̀kọ̀ èyíkéyìí kúrò, kí o sì fi àwọn ìlà ìkẹyìn pamọ́.",
          youCanNow: "ṣàyẹ̀wò ìdáhùn AI nípa iṣẹ́ lórí orísun ìjọba, kí o sì yan ọgbọ́n kan àti ètò kan fún ìgbésẹ̀ rẹ tó kàn.",
          quickCheck: [
            { objective: "O6", q: "Kí ni hallucination AI?", options: ["Ìdáhùn AI tí ó máa ń tọ̀nà nígbà gbogbo", "Irinṣẹ́ AI tuntun fún àwọn ológun tẹ́lẹ̀", "Ọ̀nà láti mú prompt kúrú", "Nǹkan tí AI kọ tí ó dún bí òtítọ́ ṣùgbọ́n tí ó jẹ́ àhesọ"], answer: 3, why: "AI lè hùmọ̀ nǹkan kí ó sì tún dún bí ó dá a lójú, nítorí náà o máa ń ṣàyẹ̀wò òtítọ́ lórí orísun ìjọba." },
            { objective: "O6", q: "AI sọ iye owó iṣẹ́ àròpín fún iṣẹ́ aráàlú kan fún ọ. Kí ni o máa ṣe kí o tó lò ó?", options: ["Fi í sínú résumé rẹ", "Ṣàyẹ̀wò rẹ̀ nínú Occupational Outlook Handbook ti Bureau of Labor Statistics", "Béèrè lọ́wọ́ AI bóyá ó dá a lójú", "Pín in fún àwọn ọ̀rẹ́ rẹ bí òtítọ́"], answer: 1, why: "Iye owó iṣẹ́ wá láti orísun ìjọba bí Occupational Outlook Handbook, kì í ṣe láti ọ̀dọ̀ AI." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Yíyí iṣẹ́ ológun rẹ padà sí iṣẹ́ aráàlú",
        questions: [
          { objective: "O4", q: "Kí ni O*NET Military Crosswalk ń ṣe?", options: ["Ó ń so kóòdù iṣẹ́ ológun rẹ pọ̀ mọ́ àwọn iṣẹ́ aráàlú", "Ó ń fi ẹ̀tọ́ (claim) VA rẹ sílẹ̀", "Ó ń fi résumé rẹ ránṣẹ́ sí àwọn agbanisíṣẹ́", "Ó ń sanwó fún ẹ̀kọ́"], answer: 0, why: "O tẹ MOS, rating tàbí AFSC rẹ, ó sì fi àwọn iṣẹ́ aráàlú tí ó bá a mu hàn." },
          { objective: "O5", q: "Ìlà résumé wo ló dára jù fún agbanisíṣẹ́ aráàlú?", options: ["\"Did PMCS on MTVs\"", "\"Mo ṣe àbójútó ọkọ̀ akẹ́rù 40 pẹ̀lú àyẹ̀wò ìdènà; mo dín bíbàjẹ́ ọkọ̀ kù ní 30%\"", "\"Mo wà ní motor pool\"", "\"Hooah\""], answer: 1, why: "Ó lo ọ̀rọ̀ aráàlú, nọ́mbà àti èsì." },
          { objective: "O5", q: "Àkọ́pẹrẹ AI fi àmì ẹ̀yẹ tí o kò gbà kún un. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀, ó dún dáadáa", "Mú àmì ẹ̀yẹ náà tóbi sí i", "Yọ ọ́ kúrò; gbogbo ohun tí o sọ gbọ́dọ̀ jẹ́ òtítọ́", "Béèrè lọ́wọ́ ọ̀rẹ́ kan bóyá ó dára"], answer: 2, why: "Ohun tí a fi kún lè jẹ́ ṣíṣàyẹ̀wò, ó sì lè mú kí o pàdánù iṣẹ́ náà." },
          { objective: "O6", q: "Níbo ni o ti máa ṣàyẹ̀wò owó iṣẹ́ àti ọjọ́ iwájú iṣẹ́ aráàlú kan?", options: ["Ọ̀rọ̀ kan lórí ìkànnì àjọlò", "Ìdáhùn àkọ́kọ́ AI", "Ìpolówó tí ó yọ jáde lójijì (pop-up)", "Occupational Outlook Handbook ti Bureau of Labor Statistics"], answer: 3, why: "Occupational Outlook Handbook ni orísun ìjọba fún owó iṣẹ́ àti ọjọ́ iwájú iṣẹ́." },
          { objective: "O6", q: "Ètò VA wo ló ń fún àwọn ológun tẹ́lẹ̀ tí ó yẹ ní ìmọ̀ràn iṣẹ́ ọ̀fẹ́?", options: ["Personalized Career Planning and Guidance", "Military Crosswalk", "Google Gemini", "Occupational Outlook Handbook"], answer: 0, why: "VA ṣe àkọsílẹ̀ Personalized Career Planning and Guidance gẹ́gẹ́ bí ìmọ̀ràn iṣẹ́ àti ẹ̀kọ́ ọ̀fẹ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí AI àti Ọjọ́ Iwájú Iṣẹ́",
    questions: [
      { objective: "O1", q: "Ọ̀nà tí ó dára jù láti ṣàlàyé AI ni:", options: ["Àwọn ètò kọ̀mpútà tí ó ń ṣe iṣẹ́ tí ènìyàn sábà máa ń ṣe", "Ẹ̀ka ológun tuntun", "Irú fóònù kan", "Ibi ìkéde iṣẹ́ ìjọba"], answer: 0, why: "Àwọn ètò AI ń kọ̀wé, ń ṣe àkópọ̀, ń to nǹkan lẹ́sẹẹsẹ, wọ́n sì ń rí àwòṣe." },
      { objective: "O1", q: "Èwo ni ọ̀nà kan tí a ń gbà lo AI nínú ètò ìpèsè ẹrù (logistics) aráàlú?", options: ["Fífọwọ́ sí àdéhùn fún ilé-iṣẹ́", "Sísọ iye ẹrù tí a máa nílò ṣáájú", "Gbígba àwọn olùdarí síṣẹ́", "Wíwa gbogbo ọkọ̀ akẹ́rù"], answer: 1, why: "AI ń ràn wá lọ́wọ́ láti sọ iye ẹrù tí a máa nílò ṣáájú." },
      { objective: "O1", q: "Nígbà tí a bá ń lo AI ní ibi iṣẹ́, ta ni ó ní ojúṣe fún ìpinnu náà?", options: ["AI náà", "Ilé-iṣẹ́ tí ó ṣe ètò náà", "Ẹni tí ó ń lò ó", "Kò sí ẹnìkan"], answer: 2, why: "AI jẹ́ irinṣẹ́; ènìyàn ló ṣì ń ṣe ìpinnu." },
      { objective: "O2", q: "Àdírẹ́sì wẹ́ẹ̀bù wo ló ń ṣí olùrànlọ́wọ́ AI ọ̀fẹ́?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com ni àdírẹ́sì gidi ti Google fún Gemini." },
      { objective: "O2", q: "Nínú prompt \"àṣẹ tó yé\", òdiwọ̀n (standard) ni:", options: ["Bí ìdáhùn tó dára ṣe máa rí: gígùn, ìrísí, ohùn", "Ipò (rank) rẹ", "Ọ̀rọ̀ aṣínà rẹ", "Ilé ìtajà app"], answer: 0, why: "Òdiwọ̀n ń sọ fún olùrànlọ́wọ́ bí ìdáhùn ṣe yẹ kí ó rí." },
      { objective: "O2", q: "Prompt wo ló máa mú ìdáhùn tó wúlò jù wá?", options: ["\"jobs\" (iṣẹ́)", "\"Iṣẹ́: àwọn iṣẹ́ aráàlú tí ó ń lo ọgbọ́n mi. Ipò: ọdún 6 gẹ́gẹ́ bí mẹkáníìkì ọkọ̀. Òdiwọ̀n: orúkọ iṣẹ́ 5, ìlà kan fún ọ̀kọ̀ọ̀kan.\"", "\"help me\" (ràn mí lọ́wọ́)", "\"military stuff\" (nǹkan ológun)"], answer: 1, why: "Ó fúnni ní iṣẹ́, ipò àti òdiwọ̀n." },
      { objective: "O3", q: "Èwo ni o KÒ gbọdọ̀ tẹ sínú olùrànlọ́wọ́ AI gbogbogbò LÁÉLÁÉ?", options: ["\"Mú un kúrú sí i\"", "\"Mo darí ẹgbẹ́ ẹni 8\"", "Nọ́mbà Social Security rẹ", "\"Alábòójútó ilé ìkẹ́rùsí\""], answer: 2, why: "Nọ́mbà Social Security jẹ́ àdáni, kò sì gbọdọ̀ wọ inú AI gbogbogbò láéláé." },
      { objective: "O3", q: "OPSEC nínú ìjíròrò AI aráàlú túmọ̀ sí:", options: ["Pínpín ìsọfúnni iṣẹ́ ológun láti rí ìdáhùn tó dára jù", "Títẹ ibi tí ẹgbẹ́ ológun rẹ wà", "Lílo ipò (rank) rẹ bí ọ̀rọ̀ aṣínà", "Pípa ìsọfúnni ìkọ̀kọ̀, èyí tí a ṣàkóso àti ti iṣẹ́ ológun mọ́ kúrò"], answer: 3, why: "Ìbáwí kan náà ń dáàbò bo ìsọfúnni ìkọ̀kọ̀ lẹ́yìn iṣẹ́ ológun." },
      { objective: "O3", q: "Àmì ìdúrópò bí \"[nọ́mbà mi]\" ń jẹ́ kí o:", options: ["Rí ìrànlọ́wọ́ láìtẹ nọ́mbà gidi", "Fi AI pamọ́ fún agbanisíṣẹ́ rẹ", "Gba owó kíákíá", "Fo ìgbésẹ̀ àyẹ̀wò"], answer: 0, why: "Ìwọ fúnra rẹ ló máa kọ nọ́mbà gidi sí i lẹ́yìn náà, láìsí lórí íńtánẹ́ẹ̀tì." },
      { objective: "O4", q: "Ta ni ó ń ṣe O*NET Military Crosswalk?", options: ["Olùgbanisíṣẹ́ aládàáni kan", "U.S. Department of Labor", "Ẹgbẹ́ ológun rẹ àtijọ́", "Ilé-iṣẹ́ AI kan"], answer: 1, why: "O*NET OnLine jẹ́ ojú-òpó wẹ́ẹ̀bù ti Department of Labor." },
      { objective: "O4", q: "Nínú Military Crosswalk, ológun Navy tẹ́lẹ̀ máa wá nǹkan pẹ̀lú:", options: ["Kóòdù ìfìwéránṣẹ́ (zip code)", "Nọ́mbà Social Security", "Kóòdù rating tàbí orúkọ iṣẹ́", "Ọjọ́ tí ó kúrò nínú ológun"], answer: 2, why: "O yan ẹ̀ka ológun, o sì tẹ rating tàbí orúkọ iṣẹ́ rẹ." },
      { objective: "O4", q: "Irinṣẹ́ míì tí Department of Labor ń ṣètìlẹ́yìn fún, tí ó ń so iṣẹ́ ológun pọ̀ mọ́ iṣẹ́ aráàlú ni:", options: ["Ojú-òpó wẹ́ẹ̀bù tẹ́tẹ́ (lottery)", "App káàdì ìyáwó (credit card)", "Eré fídíò", "Veterans Job Matcher ti CareerOneStop"], answer: 3, why: "Veterans Job Matcher ti CareerOneStop ń so àwọn iṣẹ́ ológun pọ̀ mọ́ iṣẹ́ aráàlú." },
      { objective: "O5", q: "Ìlà résumé aráàlú tó lágbára ní:", options: ["Ohun tí o ṣe, bí ó ṣe tóbi tó àti èsì rẹ̀", "Ìkékúrú ológun nìkan", "Iṣẹ́ ológun (mission) ẹgbẹ́ rẹ", "Àdírẹ́sì ilé rẹ"], answer: 0, why: "Àwọn agbanisíṣẹ́ aráàlú ń wá iṣẹ́ tí o ṣe, bí ó ṣe tóbi tó àti èsì rẹ̀." },
      { objective: "O5", q: "Ìbéèrè àtẹ̀lé wo ló ń ṣèrànwọ́ láti yí àkọ́pẹrẹ padà fún aráàlú?", options: ["\"Fi ìkékúrú púpọ̀ sí i kún un.\"", "\"Yọ èdè àdúgbò ológun kúrò.\"", "\"Fi nọ́mbà DD-214 mi kún un.\"", "\"Hùmọ̀ àmì ẹ̀yẹ kan.\""], answer: 1, why: "Yíyọ èdè àdúgbò kúrò ń mú kí ìrírí rẹ yé àwọn òǹkàwé aráàlú." },
      { objective: "O5", q: "Àkọ́pẹrẹ àkọ́kọ́ tí AI kọ fún àwọn ìlà rẹ jẹ́:", options: ["Ìkẹyìn tí kò lábùkù", "Ohun tí o lè fi ránṣẹ́ láìkà á", "Àkọ́pẹrẹ tí o máa ṣàtúnṣe sí tí o sì máa ṣàyẹ̀wò", "Àṣìṣe nígbà gbogbo"], answer: 2, why: "Ìwọ ni olóòtú; ìdáhùn àkọ́kọ́ jẹ́ àkọ́pẹrẹ." },
      { objective: "O6", q: "Nígbà tí AI bá kọ nǹkan tí ó dún bí òtítọ́ ṣùgbọ́n tí ó jẹ́ àhesọ, a ń pè é ní:", options: ["Ìpàdé ìtọ́sọ́nà (briefing)", "Crosswalk", "Àmì ìdúrópò", "Hallucination"], answer: 3, why: "Orúkọ tí a sábà ń pe ìdáhùn àhesọ AI nìyẹn." },
      { objective: "O6", q: "Níbo ni o ti yẹ kí o ṣàyẹ̀wò owó iṣẹ́ kan kí o tó gba nọ́mbà AI gbọ́?", options: ["Occupational Outlook Handbook ti Bureau of Labor Statistics", "Ọ̀rọ̀ ìránṣẹ́ láti ọ̀dọ̀ àjèjì", "Ìdáhùn kejì AI", "Àwòrán àwàdà (meme)"], answer: 0, why: "Occupational Outlook Handbook ń fúnni ní iye owó iṣẹ́ àti ọjọ́ iwájú iṣẹ́ láti ọ̀dọ̀ ìjọba." },
      { objective: "O6", q: "Ètò VET TEC 2.0 ti VA ń ran àwọn ológun tẹ́lẹ̀ tí ó yẹ lọ́wọ́ pẹ̀lú:", options: ["Owó ìyáwó láti ra ilé", "Ẹ̀kọ́ ẹ̀rọ ìgbàlódé tí kì í ṣe ti oyè yunifásítì", "Ìtọ́jú ìlera", "Àtúnṣe ọkọ̀"], answer: 1, why: "VET TEC 2.0 ń sanwó fún àwọn ètò ẹ̀kọ́ ẹ̀rọ ìgbàlódé kan tí kì í ṣe ti oyè yunifásítì." },
      { objective: "O6", q: "Ètò Department of Labor wo ló ń ran àwọn ọmọ ogun lọ́wọ́ láti lọ sí iṣẹ́ aráàlú?", options: ["O*NET Crosswalk nìkan", "Google Gemini", "Transition Assistance Program (TAP)", "Ilé ẹ̀kọ́ kíákíá aládàáni (bootcamp)"], answer: 2, why: "TAP ń fún àwọn ọmọ ogun tí wọ́n ń kúrò nínú ológun ní ìsọfúnni, irinṣẹ́ àti ẹ̀kọ́." },
      { objective: "O6", q: "Kí o tó fi àwọn ìlà résumé ìkẹyìn rẹ pamọ́, o yẹ kí o:", options: ["Fi nọ́mbà báńkì rẹ kún un", "Fi kún àwọn nọ́mbà rẹ", "Fo àyẹ̀wò", "Ṣàyẹ̀wò àwọn orúkọ iṣẹ́, rí i dájú pé gbogbo ohun tí o sọ jẹ́ òtítọ́, kí o sì yọ ìsọfúnni àdáni kúrò"], answer: 3, why: "Àyẹ̀wò kíkún nìyẹn: ó péye, ó jẹ́ òtítọ́, kò sì léwu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 5, 6, 9, 12, 16, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Prompt tó yé", objective: "O2", notYet: "Prompt náà kò yé, fún àpẹẹrẹ \"tún résumé mi ṣe\".", meets: "Prompt náà ní iṣẹ́, ipò àti òdiwọ̀n.", exceeds: "Ó tún dárúkọ orúkọ iṣẹ́ aráàlú náà, ìdáhùn àkọ́kọ́ sì ti fẹ́rẹ̀ẹ́ ṣetán." },
      { name: "Ọ̀rọ̀ aráàlú", objective: "O5", notYet: "Àwọn ìlà náà ṣì ń lo èdè àdúgbò ológun tàbí kò ní èsì.", meets: "Ìlà mẹ́ta ní ọ̀rọ̀ aráàlú tó rọrùn, ọ̀kọ̀ọ̀kan ní ohun tí o ṣe àti ìwọ̀n tàbí èsì.", exceeds: "Akẹ́kọ̀ọ́ béèrè ìyípadà kan láti mú un dára sí i, ó sì lè sọ ohun tí ó tún ṣe." },
      { name: "Ó ṣàyẹ̀wò àwọn orúkọ iṣẹ́", objective: "O4", notYet: "Ó dà àwọn orúkọ iṣẹ́ kọ láti inú AI láìṣàyẹ̀wò.", meets: "Ó ṣàyẹ̀wò àwọn orúkọ iṣẹ́ nínú O*NET Military Crosswalk.", exceeds: "Akẹ́kọ̀ọ́ tún ṣàyẹ̀wò owó iṣẹ́ tàbí ọjọ́ iwájú iṣẹ́ nínú Occupational Outlook Handbook." },
      { name: "Ìsọfúnni àdáni àti ìkọ̀kọ̀ kò sí nínú rẹ̀", objective: "O3", notYet: "Prompt tàbí àwọn ìlà náà ní nọ́mbà àdáni tàbí ìsọfúnni iṣẹ́ ológun.", meets: "Kò sí nọ́mbà àdáni, kò sì sí ìsọfúnni ìkọ̀kọ̀, èyí tí a ṣàkóso tàbí ti iṣẹ́ ológun.", exceeds: "Ó lo àmì ìdúrópò, ó sì lè ṣàlàyé ìdí tí ó fi yọ ìsọfúnni kọ̀ọ̀kan kúrò." },
      { name: "Gbogbo ohun tí ó sọ jẹ́ òtítọ́", objective: "O6", notYet: "Ìlà kan ní ohun tí ó sọ, nọ́mbà tàbí àmì ẹ̀yẹ tí kì í ṣe òtítọ́.", meets: "Gbogbo ohun tí ó sọ àti gbogbo nọ́mbà nínú àwọn ìlà náà jẹ́ òtítọ́.", exceeds: "Akẹ́kọ̀ọ́ dárúkọ ọgbọ́n kan àti ètò kan fún ìgbésẹ̀ tó kàn." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn lo àwọn ìlà tuntun wọn nínú ìwé ìbéèrè iṣẹ́ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n rí ìfọ̀rọ̀wánilẹ́nuwò (interview) tàbí ìfilọ̀ iṣẹ́ aráàlú láàárín ọjọ́ 90",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Koach Learn míì fún àwọn ológun tẹ́lẹ̀ tàbí ètò ẹ̀kọ́ kan láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini",
      "Àwọn ojú-òpó wẹ́ẹ̀bù ọ̀fẹ́ O*NET Military Crosswalk àti Occupational Outlook Handbook ti Bureau of Labor Statistics",
      "Ìwé àti gègé, tàbí app àkọsílẹ̀, fún iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\"",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Nínú kíláàsì ìyípadà iṣẹ́ tàbí ibùdó àwọn ológun tẹ́lẹ̀: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan, kí ẹ sì ṣe àwọn iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" lójú ẹsẹ̀.",
      "Rán àwọn akẹ́kọ̀ọ́ létí nípa OPSEC kí wọ́n tó kọ prompt àkọ́kọ́: kò sí ìsọfúnni ìkọ̀kọ̀, èyí tí a ṣàkóso tàbí ti iṣẹ́ ológun, kò sì sí nọ́mbà àdáni.",
      "Pa àwọn akẹ́kọ̀ọ́ láti ẹ̀ka ológun tí ó yàtọ̀ síra pọ̀, kí wọ́n lè ṣàlàyé àwọn ìlà ara wọn ní ọ̀rọ̀ aráàlú tó rọrùn.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan.",
      "Darí àwọn akẹ́kọ̀ọ́ sí TAP àti ìmọ̀ràn iṣẹ́ VA fún ìrànlọ́wọ́ ẹnì kọ̀ọ̀kan lẹ́yìn ẹ̀kọ́ náà."
    ]
  }
};
