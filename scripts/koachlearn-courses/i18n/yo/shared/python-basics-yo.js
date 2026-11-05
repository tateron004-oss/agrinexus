"use strict";

// Koach Learn course (Yoruba translation of shared/python-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Àwọn ìbéèrè tí àwọn ènìyàn máa ń béèrè", url: "https://research.google.com/colaboratory/faq.html" };

module.exports = {
  id: "python-basics-yo",
  lang: "yo",
  translationOf: "python-basics",
  category: "Youth",
  name: "Ìfihàn sí Kíkọ Ètò Kọ̀mpútà pẹ̀lú Python",
  skills: "Ṣíṣe Python nínú Google Colab, Lílo variable àti input, Ṣíṣe ìpinnu pẹ̀lú if, Lílo list àti loop, Kíkọ function",
  outcome: "kọ ètò Python kúkúrú nínú Google Colab kí o sì ṣe é: ètò tí ó béèrè ìsọfúnni lọ́wọ́ olùlò, tí ó tọ́jú rẹ̀, tí ó fi ṣe ìpinnu, tí ó tún àwọn ìgbésẹ̀ ṣe pẹ̀lú loop, tí ó sì tẹ èsì tó yé jáde.",
  about: [
    "Ẹ̀kọ́ yìí wà fún ẹnikẹ́ni tí kò tíì kọ kóòdù rí: àwọn akẹ́kọ̀ọ́, àwọn ọmọ ogun tẹ́lẹ̀ tí wọ́n ń yí iṣẹ́ padà, àti àwọn àgbàlagbà tí wọ́n ń wá iṣẹ́ ẹ̀rọ ìgbàlódé. O nílò àkáǹtì Google ọ̀fẹ́ àti browser wẹ́ẹ̀bù nìkan.",
    "O máa kọ Python gidi nínú Google Colab, ojú-òpó wẹ́ẹ̀bù ọ̀fẹ́ tí ó ń ṣe kóòdù fún ọ, nítorí náà kò sí ohun tí o máa fi sórí ẹ̀rọ. Ẹ̀kọ́ kọ̀ọ̀kan ń fi irinṣẹ́ tuntun kan kún un: títẹ̀ jáde (print), variable, ìpinnu, list, loop àti function.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Kà á, wo àwọn àwòrán ìfihàn, kí o sì tẹ kóòdù náà fúnra rẹ nínú \"Gbìyànjú rẹ̀ báyìí\". Ní ìparí, o máa kọ ètò kékeré tí ó ń ṣàyẹ̀wò ìnáwó rírajà láti ìbẹ̀rẹ̀. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì parí ẹ̀kọ́ náà."
  ],
  finalTask: "Nínú Google Colab, kọ ètò tí ó ń ṣàyẹ̀wò ìnáwó rírajà: function tí ó gba list iye owó àti ìnáwó (budget), tí ó fi loop ṣírò àpapọ̀ iye owó, tí ó sì tẹ àpapọ̀ náà jáde pẹ̀lú \"Under budget\" tàbí \"Over budget\" àti ìyàtọ̀ rẹ̀. Fi input() béèrè ìnáwó lọ́wọ́ olùlò, pe function rẹ, kí o sì dán an wò pẹ̀lú ìnáwó méjì tí ó yàtọ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ àti àgbàlagbà tí wọ́n ń gbìyànjú kíkọ ètò kọ̀mpútà fún ìgbà àkọ́kọ́: àwọn akẹ́kọ̀ọ́ ilé-ìwé gíga àti yunifásítì, àwọn ọmọ ẹgbẹ́ ètò ọ̀dọ́, àwọn tí ó ń yí iṣẹ́ padà àti àwọn tí ó ń kọ́ṣẹ́ tí wọ́n fẹ́ mọ̀ nípa kóòdù, dátà tàbí AI.",
    startingPoint: "Wọ́n lè lo kọ̀mpútà àti browser wẹ́ẹ̀bù, wọ́n sì lè wọlé sí àkáǹtì Google. Ọ̀pọ̀ jù lọ kò tíì kọ kóòdù rí, wọn kò sì mọ ohun tí variable, condition, list, loop tàbí function jẹ́.",
    gap: "Kíkọ ètò kọ̀mpútà jẹ́ ìbẹ̀rẹ̀ fún iṣẹ́ nínú ẹ̀rọ ìgbàlódé, dátà àti AI, ó sì jẹ́ irinṣẹ́ tó wúlò nínú ọ̀pọ̀ iṣẹ́ míì. Àwọn tí kò tíì kọ ètò tí ó ṣiṣẹ́ rí sábà máa ń rò pé kóòdù kì í ṣe tiwọn; ètò àkọ́kọ́ tí ó yanjú ìṣòro gidi ń kọ́ wọn ní ọgbọ́n, ó sì ń fún wọn ní ìgboyà láti máa bá a lọ.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ kóòdù pẹ̀lú àpẹẹrẹ",
      "Ẹ̀rọ: kọ̀mpútà tàbí laptop pẹ̀lú browser wẹ́ẹ̀bù ló dára jù; tablet ṣeé ṣe ṣùgbọ́n títẹ kóòdù le jù lórí rẹ̀",
      "Àkáǹtì àti owó: àkáǹtì Google ọ̀fẹ́ fún Google Colab; kò sí ohun tí o máa fi sórí ẹ̀rọ tàbí rà",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 sí 6 fún ẹ̀kọ́ kan pẹ̀lú àṣeṣe, nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀",
      "Ìṣirò: àròpọ̀, ìfiwéra àti nọ́mbà ẹlẹ́sẹ̀ (decimal) tó rọrùn nìkan"
    ],
    prerequisites: "Kò sí. \"Ìmọ̀ Ìpìlẹ̀ Kọ̀mpútà\" (Basic Computer Skills) ń ran àwọn tí kò mọ títẹ̀ àti lílo browser dáadáa lọ́wọ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ń lo Google Colab nínú browser wẹ́ẹ̀bù", action: "ṣí notebook kan, kọ ìlà print kan kí o sì ṣe é, kí o sì ka ìlà ìkẹyìn ọ̀rọ̀ àṣìṣe (error)", standard: "títí ètò náà yóò fi ṣiṣẹ́, tí o sì ti fi ọ̀rọ̀ àṣìṣe náà tún àṣìṣe títẹ̀ ṣe" },
    { id: "O2", condition: "Tí a bá fún ọ ní ìsọfúnni tí ètò kan nílò", action: "tọ́jú rẹ̀ sínú variable irú tó tọ́, gba input lọ́wọ́ olùlò kí o sì tẹ̀ ẹ́ jáde pẹ̀lú f-string", standard: "kí o sì yí input padà sí nọ́mbà pẹ̀lú float() tàbí int() kí o tó ṣe ìṣirò" },
    { id: "O3", condition: "Tí a bá fún ọ ní òfin tí ó ní èsì méjì tàbí jù bẹ́ẹ̀ lọ", action: "kọ if, elif àti else tí ó yan èsì tó tọ́", standard: "pẹ̀lú àmì ìfiwéra, colon (:) àti ìfàsẹ́yìn (indentation) tó tọ́, tí ó fún gbogbo iye ìdánwò ní èsì tó tọ́" },
    { id: "O4", condition: "Tí a bá fún ọ ní àwọn iye bíi mélòó kan", action: "ṣe list kan, fi nǹkan kan kún un, ka àwọn nǹkan inú rẹ̀ pẹ̀lú index, kí o sì lo len() àti sum() lórí rẹ̀", standard: "tí gbogbo index àti èsì fi tọ́" },
    { id: "O5", condition: "Tí a bá fún ọ ní list tàbí iṣẹ́ kan láti tún ṣe", action: "kọ for loop pẹ̀lú àpapọ̀ tí ń lọ (running total) àti while loop tí ó dúró", standard: "pẹ̀lú àpapọ̀ tó tọ́, láìsí loop tí kò ní dúró láéláé" },
    { id: "O6", condition: "Tí a bá fún ọ ní ìṣòro kékeré bí àyẹ̀wò ìnáwó", action: "kọ function pẹ̀lú parameter àti return, pè é nínú ètò kíkún kan kí o sì dán an wò", standard: "tí ètò náà fi fún ó kéré tán input méjì tí ó yàtọ̀ ní èsì tó tọ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Àwọn ètò àkọ́kọ́ rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣí Google Colab àti ṣíṣe ìlà àkọ́kọ́ rẹ",
          minutes: 5,
          goal: "Ṣí notebook Colab kan, tẹ ìlà Python kan kí o sì ṣe é.",
          text: [
            "Ètò kọ̀mpútà (program) jẹ́ àkọsílẹ̀ àwọn ìtọ́ni tí kọ̀mpútà ń tẹ̀lé ní ṣísẹ̀-n-tẹ̀lé. Python jẹ́ èdè kíkọ ètò kọ̀mpútà: ọ̀nà kíkọ àwọn ìtọ́ni wọ̀nyí tí ènìyàn lè kà. A ń lò ó fún ojú-òpó wẹ́ẹ̀bù, dátà, eré, róbọ́ọ̀tì àti AI.",
            "Google Colab jẹ́ ojú-òpó wẹ́ẹ̀bù ọ̀fẹ́ tí ó ń ṣe Python nínú browser rẹ. O kò fi nǹkankan sórí ẹ̀rọ. Iṣẹ́ rẹ ń wà ní ìpamọ́ gẹ́gẹ́ bí notebook nínú Google Drive rẹ. Notebook ní àwọn cell: àpótí tí o ti ń tẹ kóòdù tí o sì ń ṣe é.",
            "Ìtọ́ni àkọ́kọ́ rẹ ni print. print(\"Hello, world!\") ń fi ọ̀rọ̀ inú àmì àyọlò (quotes) hàn. Àmì àyọlò ń sọ fún Python pé ọ̀rọ̀ (text) ni èyí, kì í ṣe àṣẹ. Tí o bá ṣe àṣìṣe títẹ̀, Python máa fi ọ̀rọ̀ àṣìṣe hàn. Ka ìlà ìkẹyìn rẹ̀: ó ń sọ ohun tí ó bàjẹ́ fún ọ."
          ],
          steps: ["Lọ sí colab.research.google.com kí o sì wọlé pẹ̀lú àkáǹtì Google.", "Yan láti ṣe notebook tuntun.", "Tẹ inú cell kóòdù àkọ́kọ́ kí o sì tẹ: print(\"Hello, world!\")", "Tẹ bọ́tìnì play lẹ́gbẹ̀ẹ́ cell náà, tàbí Shift + Enter, láti ṣe é.", "Ka èsì (output) tí ó jáde lábẹ́ cell náà."],
          words: [["Program (ètò kọ̀mpútà)", "àkọsílẹ̀ àwọn ìtọ́ni tí kọ̀mpútà ń tẹ̀lé ní ṣísẹ̀-n-tẹ̀lé."], ["Python", "èdè kíkọ ètò kọ̀mpútà tí ó gbajúmọ̀, tí ó sì rọrùn láti kà."], ["Notebook", "fáìlì Colab tí ó ní àwọn cell níbi tí o ti ń kọ kóòdù tí o sì ń ṣe é."], ["Cell", "àpótí kan nínú notebook tí ó ní kóòdù tí o lè ṣe."], ["Error message (ọ̀rọ̀ àṣìṣe)", "àkíyèsí Python pé nǹkan kan kò tọ́ nínú kóòdù rẹ; ìlà ìkẹyìn ń sọ ohun náà."]],
          slides: [
            { title: "Ohun tí Python jẹ́", bullets: ["Èdè fún kíkọ ìtọ́ni sí kọ̀mpútà", "A ń lò ó fún ojú-òpó wẹ́ẹ̀bù, dátà, eré àti AI", "Ó rọrùn láti kà ju ọ̀pọ̀ èdè míì lọ"] },
            { title: "Google Colab", bullets: ["Ojú-òpó wẹ́ẹ̀bù ọ̀fẹ́ tí ó ń ṣe Python nínú browser rẹ", "Kò sí ohun tí o máa fi sórí ẹ̀rọ", "Notebook ń wà ní ìpamọ́ nínú Google Drive rẹ"] },
            { title: "Ìlà àkọ́kọ́ rẹ", bullets: ["Tẹ: print(\"Hello, world!\")", "Ṣe é pẹ̀lú bọ́tìnì play tàbí Shift + Enter", "Ọ̀rọ̀ náà máa hàn lábẹ́ cell náà"] },
            { title: "Àṣìṣe kò burú", bullets: ["Ka ìlà ìkẹyìn ọ̀rọ̀ àṣìṣe náà", "Ṣàyẹ̀wò sípẹ́lì, àmì àyọlò àti àkámọ́ (brackets)", "Tún un ṣe kí o sì tún ṣe é"] }
          ],
          sources: [COLAB],
          tryIt: "Ṣí notebook Colab tuntun. Nínú cell kan, tẹ orúkọ àkọ́kọ́ rẹ jáde. Nínú cell kejì, tẹ gbólóhùn kan nípa oúnjẹ tí o fẹ́ràn jù jáde. Lẹ́yìn náà, mọ̀ọ́mọ̀ yọ àmì àyọlò kan kúrò, ṣe é, kí o sì ka ọ̀rọ̀ àṣìṣe náà. Dá àmì àyọlò náà padà kí o sì tún ṣe é.",
          youCanNow: "ṣí Google Colab, kọ ìlà print kan, ṣe é, kí o sì ka ọ̀rọ̀ àṣìṣe.",
          quickCheck: [
            { objective: "O1", q: "Nínú notebook Colab, kí ni cell?", options: ["Fódà Google Drive kan", "Àpótí tí o ti ń tẹ kóòdù tí o sì ń ṣe é", "Ọ̀rọ̀ àṣìṣe", "Irú nọ́mbà kan"], answer: 1, why: "Notebook ní àwọn cell tí o ti ń tẹ kóòdù tí o sì ń ṣe é." },
            { objective: "O1", q: "O tẹ prnt(\"Hi\"), Python sì fi ọ̀rọ̀ àṣìṣe gígùn hàn. Kí ni o máa ṣe?", options: ["Pa Colab dé kí o sì ṣí àkáǹtì tuntun", "Fojú fò ó kí o sì tẹ kóòdù míì", "Ka ìlà ìkẹyìn ọ̀rọ̀ àṣìṣe náà, kí o sì tún sípẹ́lì rẹ̀ ṣe sí print", "Pa gbogbo notebook náà rẹ́"], answer: 2, why: "Ìlà ìkẹyìn ọ̀rọ̀ àṣìṣe ń sọ ohun tí ó bàjẹ́, níbí orúkọ tí a kọ ní sípẹ́lì tí kò tọ́." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Variable: fífún dátà ní orúkọ",
          minutes: 5,
          goal: "Tọ́jú ìsọfúnni sínú variable kí o sì béèrè input lọ́wọ́ olùlò.",
          text: [
            "Variable jẹ́ orúkọ tí ó di iye kan mú, bí àpótí tí a kọ orúkọ sí. name = \"Maya\" fi ọ̀rọ̀ Maya sínú àpótí tí a ń pè ní name. hours = 20 fi nọ́mbà 20 sínú àpótí tí a ń pè ní hours. Àmì = túmọ̀ sí \"tọ́jú èyí\", kì í ṣe \"dọ́gba pẹ̀lú\".",
            "Àwọn iye ní irú (type). Ọ̀rọ̀ inú àmì àyọlò jẹ́ string (str). Nọ́mbà odidi jẹ́ integer (int). Nọ́mbà tí ó ní ààmì ẹlẹ́sẹ̀ (decimal point) jẹ́ float. Irú ṣe pàtàkì: \"5\" + \"5\" ń fún ọ ní \"55\", ṣùgbọ́n 5 + 5 ń fún ọ ní 10.",
            "input() ń ní kí ẹni tí ó ń ṣe ètò náà tẹ nǹkan kan. Ó máa ń dá string padà nígbà gbogbo, nítorí náà láti ṣe ìṣirò, o máa yí i padà sí nọ́mbà: hours = float(input(\"Hours worked: \")).",
            "f-string ń da ọ̀rọ̀ àti variable pọ̀: print(f\"Hi {name}, you worked {hours} hours.\") Lẹ́tà f ṣáájú àmì àyọlò àti àkámọ́ olórí (curly brackets) ló ń ṣe iṣẹ́ náà."
          ],
          steps: ["Yan orúkọ variable kúkúrú tó yé, láìsí àyè (lo_underscore).", "Tọ́jú iye kan pẹ̀lú =.", "Fún input olùlò, lo input(\"question: \").", "Fi int() tàbí float() yí i ká tí o bá nílò nọ́mbà.", "Tẹ èsì jáde pẹ̀lú f-string."],
          words: [["Variable", "orúkọ tí ó di iye kan mú."], ["String (str)", "ọ̀rọ̀ (text), tí a kọ sínú àmì àyọlò."], ["Integer (int)", "nọ́mbà odidi, bí 7."], ["Float", "nọ́mbà tí ó ní ààmì ẹlẹ́sẹ̀, bí 7.5."], ["input()", "ń ní kí olùlò tẹ nǹkan kan, ó sì dá a padà gẹ́gẹ́ bí string."], ["f-string", "ọ̀rọ̀ tí ó bẹ̀rẹ̀ pẹ̀lú f tí ó lè fi variable hàn nínú { }."]],
          slides: [
            { title: "Variable jẹ́ àpótí tí a kọ orúkọ sí", bullets: ["name = \"Maya\"", "hours = 20", "= túmọ̀ sí tọ́jú, kì í ṣe dọ́gba"] },
            { title: "Irú mẹ́ta tí a sábà ń lò", bullets: ["str: ọ̀rọ̀ inú àmì àyọlò", "int: nọ́mbà odidi", "float: nọ́mbà tí ó ní ààmì ẹlẹ́sẹ̀"] },
            { title: "Bíbéèrè lọ́wọ́ olùlò", bullets: ["input() máa ń dá ọ̀rọ̀ (text) padà nígbà gbogbo", "hours = float(input(\"Hours worked: \"))", "Yí ọ̀rọ̀ padà sí nọ́mbà kí o tó ṣe ìṣirò"] },
            { title: "Títẹ̀ jáde pẹ̀lú f-string", bullets: ["print(f\"Hi {name}!\")", "Fi variable sínú àkámọ́ olórí { }"] }
          ],
          tryIt: "Kọ ètò kan tí ó béèrè orúkọ olùlò, owó iṣẹ́ wákàtí kan, àti iye wákàtí tí ó ṣiṣẹ́ ní ọ̀sẹ̀ yìí. Tọ́jú ọ̀kọ̀ọ̀kan sínú variable, fi owó wákàtí lọ́ iye wákàtí, kí o sì tẹ̀ ẹ́ jáde: Hi <name>, you earned <amount> this week.",
          youCanNow: "tọ́jú iye sínú variable, béèrè input lọ́wọ́ olùlò, yí ọ̀rọ̀ padà sí nọ́mbà, kí o sì tẹ èsì tó yé jáde.",
          quickCheck: [
            { objective: "O2", q: "Irú wo ni iye 3.75?", options: ["str", "int", "list", "float"], answer: 3, why: "Nọ́mbà tí ó ní ààmì ẹlẹ́sẹ̀ jẹ́ float." },
            { objective: "O2", q: "O fẹ́ kí olùlò tẹ iye owó wákàtí rẹ̀ kí o lè fi lọ́ iye wákàtí. Ìlà wo ni o máa kọ?", options: ["rate = float(input(\"Pay rate: \"))", "rate = input(\"Pay rate: \")", "print(\"Pay rate\")", "rate == input(\"Pay rate: \")"], answer: 0, why: "input() ń fún ọ ní string, nítorí náà float() ń yí i padà sí nọ́mbà tí o lè fi ṣe ìṣirò." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe ìpinnu pẹ̀lú if, elif àti else",
          minutes: 6,
          goal: "Kọ kóòdù tí ó ń ṣe nǹkan ọ̀tọ̀ọ̀tọ̀ ní ìbámu pẹ̀lú condition kan.",
          text: [
            "Àwọn ètò kọ̀mpútà ń ṣe ìpinnu pẹ̀lú if. Condition jẹ́ ìbéèrè tí ìdáhùn rẹ̀ jẹ́ True (òótọ́) tàbí False (irọ́), bí hours > 40. Tí ó bá jẹ́ True, àwọn ìlà tí a fà sẹ́yìn lábẹ́ rẹ̀ máa ṣiṣẹ́.",
            "Àmì ìfiwéra: == dọ́gba pẹ̀lú (àmì dọ́gba méjì), != kò dọ́gba, > tóbi jù, < kéré jù, >= ó kéré tán, <= ó pọ̀ jù. O lè so condition pọ̀ pẹ̀lú and àti or.",
            "elif túmọ̀ sí \"else if\" (bí kò bá rí bẹ́ẹ̀, tí ...): àyẹ̀wò kejì nígbà tí ti àkọ́kọ́ bá jẹ́ False. else máa ṣiṣẹ́ nígbà tí kò sí àyẹ̀wò kankan tí ó jẹ́ True. Ìfàsẹ́yìn (indentation, àyè mẹ́rin) ni Python fi ń mọ àwọn ìlà tí ó jẹ́ ti if. Colab máa ń fi kún un fún ọ lẹ́yìn colon.",
            "Àpẹẹrẹ: if score >= 90: print(\"A\") elif score >= 80: print(\"B\") else: print(\"Keep practicing\"). Apá kọ̀ọ̀kan wà ní ìlà tirẹ̀, a sì fa print sẹ́yìn."
          ],
          steps: ["Kọ if, lẹ́yìn náà condition, lẹ́yìn náà colon.", "Fa àwọn ìlà tí ó yẹ kí ó ṣiṣẹ́ nígbà tí ó bá jẹ́ True sẹ́yìn.", "Fi elif kún un fún àyẹ̀wò míì tí o bá nílò rẹ̀.", "Fi else kún un fún gbogbo nǹkan yòókù.", "Dán an wò pẹ̀lú àwọn iye tí ó dé gbogbo ẹ̀ka (branch)."],
          words: [["Condition", "ìbéèrè tí ìdáhùn rẹ̀ jẹ́ True tàbí False."], ["Boolean", "irú True tàbí False nínú Python."], ["Indentation (ìfàsẹ́yìn)", "àyè ní ìbẹ̀rẹ̀ ìlà tí ó ń fi apá tí ìlà náà jẹ́ tirẹ̀ hàn."], ["Branch (ẹ̀ka)", "ọ̀kan nínú àwọn ọ̀nà tí if lè gbà."]],
          slides: [
            { title: "if ń ṣe kóòdù nígbà tí ó bá jẹ́ True nìkan", bullets: ["if hours > 40:", "    print(\"Overtime!\")", "Má gbàgbé colon àti ìfàsẹ́yìn"] },
            { title: "Àmì ìfiwéra", bullets: ["== dọ́gba, != kò dọ́gba", "> tóbi jù, < kéré jù", ">= ó kéré tán, <= ó pọ̀ jù"] },
            { title: "elif àti else", bullets: ["elif: ṣàyẹ̀wò condition míì", "else: ń ṣiṣẹ́ nígbà tí kò sí ohun tí ó bá a mu", "Python ń ṣàyẹ̀wò láti òkè dé ìsàlẹ̀"] },
            { title: "Dán gbogbo ẹ̀ka wò", bullets: ["Gbìyànjú iye kan fún ọ̀nà kọ̀ọ̀kan", "Gbìyànjú ààlà, bí 40 gangan"] }
          ],
          tryIt: "Kọ ètò kan tí ó béèrè ìwọ̀n ooru ní Fahrenheit. Tí ó bá jẹ́ 85 tàbí jù bẹ́ẹ̀ lọ, tẹ \"Hot: drink water.\" jáde. Tí ó bá jẹ́ 50 tàbí jù bẹ́ẹ̀ lọ, tẹ \"Nice day.\" jáde. Bí kò bá rí bẹ́ẹ̀, tẹ \"Bring a jacket.\" jáde. Ṣe é lẹ́ẹ̀mẹta pẹ̀lú 90, 50 àti 30.",
          youCanNow: "kọ if, elif àti else, kí o sì dán gbogbo ẹ̀ka wò.",
          quickCheck: [
            { objective: "O3", q: "Kí ni àmì != túmọ̀ sí?", options: ["Dọ́gba pẹ̀lú", "Tóbi jù", "Kò dọ́gba pẹ̀lú", "Tọ́jú iye yìí"], answer: 2, why: "!= túmọ̀ sí kò dọ́gba pẹ̀lú; == túmọ̀ sí dọ́gba pẹ̀lú." },
            { objective: "O3", q: "O fẹ́ tẹ \"Ticket free\" jáde tí age bá kéré sí 5 tàbí tí ó bá jẹ́ ó kéré tán 65. Condition wo ni o máa lò?", options: ["if age < 5 and age >= 65:", "if age < 5 or age >= 65:", "if age = 5 or 65:", "if age > 5 or age < 65:"], answer: 1, why: "or ń mú kí condition jẹ́ True tí ọ̀kan nínú àwọn apá rẹ̀ bá jẹ́ True; kò sí ọjọ́ orí tí ó kéré sí 5 tí ó sì tún jẹ́ ó kéré tán 65." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àwọn ètò àkọ́kọ́ rẹ",
        questions: [
          { objective: "O1", q: "Kí ni print(\"Hello\") ń ṣe?", options: ["Ó ń tọ́jú fáìlì tí a ń pè ní Hello", "Ó ń fi Hello ránṣẹ́ sí ẹ̀rọ ìtẹ̀wé (printer)", "Ó ń fi ọ̀rọ̀ Hello hàn lábẹ́ cell náà", "Ó ń pa cell náà rẹ́"], answer: 2, why: "print ń fi ọ̀rọ̀ hàn gẹ́gẹ́ bí èsì (output)." },
          { objective: "O1", q: "Kóòdù rẹ fi àṣìṣe hàn. Ibo ni o kọ́kọ́ máa wò?", options: ["Ìlà ìkẹyìn ọ̀rọ̀ àṣìṣe náà", "Ọ̀rọ̀ àkọ́kọ́ nínú notebook náà", "Google Drive rẹ", "Ìtàn (history) browser náà"], answer: 0, why: "Ìlà ìkẹyìn ọ̀rọ̀ àṣìṣe Python ń sọ ohun tí ó bàjẹ́." },
          { objective: "O2", q: "O ṣe age = input(\"Age: \") o sì tẹ 16. Irú wo ni age?", options: ["int", "float", "Boolean", "str (ọ̀rọ̀)"], answer: 3, why: "input() máa ń dá string padà nígbà gbogbo; lo int() láti sọ ọ́ di nọ́mbà." },
          { objective: "O3", q: "Ìlà wo ló ṣàyẹ̀wò dáadáa bóyá hours ju 40 lọ?", options: ["if hours = 40", "if hours > 40:", "if hours more 40", "hours > 40 if:"], answer: 1, why: "if, condition náà, lẹ́yìn náà colon." },
          { objective: "O3", q: "Ìgbà wo ni apá else máa ṣiṣẹ́?", options: ["Nígbà gbogbo, ní àkọ́kọ́", "Nígbà tí kò sí ọ̀kan nínú àwọn condition if tàbí elif tí ó jẹ́ True nìkan", "Nígbà tí if bá jẹ́ True nìkan", "Kò ní ṣiṣẹ́ láéláé"], answer: 1, why: "else ń mú gbogbo ohun tí àwọn àyẹ̀wò ìṣáájú kò mú." }
        ]
      }
    },
    {
      name: "Orí 2: Àwọn ètò tí ń tún ṣe tí wọ́n sì ń rántí",
      lessons: [
        {
          objectives: ["O4"],
          title: "List: títọ́jú ọ̀pọ̀ iye papọ̀",
          minutes: 5,
          goal: "Ṣe list kan, fi kún un, kí o sì ka àwọn nǹkan inú rẹ̀.",
          text: [
            "List ń di ọ̀pọ̀ iye mú ní ṣísẹ̀-n-tẹ̀lé, nínú àkámọ́ onígun (square brackets): prices = [3.50, 12.00, 6.25]. List tún lè di ọ̀rọ̀ mú: chores = [\"dishes\", \"laundry\"].",
            "Nǹkan kọ̀ọ̀kan ní nọ́mbà ipò tí a ń pè ní index. Python ń kà láti 0, nítorí náà prices[0] ni nǹkan àkọ́kọ́ (3.50), prices[-1] sì ni ìkẹyìn.",
            "Àwọn irinṣẹ́ list tó wúlò: prices.append(4.99) ń fi nǹkan kan kún òpin list. len(prices) ń sọ iye nǹkan tí ó wà níbẹ̀. sum(prices) ń ṣírò àròpọ̀ list nọ́mbà. \"dishes\" in chores jẹ́ True tí nǹkan náà bá wà nínú list."
          ],
          steps: ["Ṣe list pẹ̀lú àkámọ́ onígun àti kọ́mà.", "Ka nǹkan kan pẹ̀lú list_name[index], bẹ̀rẹ̀ láti 0.", "Fi kún un pẹ̀lú .append(value).", "Ka iye nǹkan pẹ̀lú len().", "Ṣírò àròpọ̀ nọ́mbà pẹ̀lú sum()."],
          words: [["List", "àkójọpọ̀ iye ní ṣísẹ̀-n-tẹ̀lé nínú àkámọ́ onígun."], ["Index", "ipò nǹkan kan nínú list, bẹ̀rẹ̀ láti 0."], ["append", "ń fi nǹkan kan kún òpin list."], ["len()", "ń fún ọ ní iye nǹkan tí ó wà."]],
          slides: [
            { title: "List ń di ọ̀pọ̀ iye mú", bullets: ["prices = [3.50, 12.00, 6.25]", "chores = [\"dishes\", \"laundry\"]"] },
            { title: "Kíkà ń bẹ̀rẹ̀ láti 0", bullets: ["prices[0] ni nǹkan àkọ́kọ́", "prices[-1] ni nǹkan ìkẹyìn"] },
            { title: "Àwọn irinṣẹ́ list", bullets: ["append() ń fi kún òpin", "len() ń ka iye nǹkan", "sum() ń ṣírò àròpọ̀ nọ́mbà", "in ń ṣàyẹ̀wò bóyá nǹkan kan wà níbẹ̀"] }
          ],
          tryIt: "Ṣe list nǹkan mẹ́ta tí o nílò láti rà, pẹ̀lú iye owó wọn nínú list kejì. Fi nǹkan kan àti iye owó rẹ̀ kún un (append). Tẹ iye nǹkan tí ó wà, nǹkan àkọ́kọ́, àti àpapọ̀ iye owó pẹ̀lú sum() jáde.",
          youCanNow: "ṣe list kan, ka àwọn nǹkan inú rẹ̀ pẹ̀lú index, fi nǹkan kún un, kí o sì ka iye wọn tàbí ṣírò àpapọ̀ wọn.",
          quickCheck: [
            { objective: "O4", q: "Kí ni index nínú list?", options: ["Nọ́mbà ipò nǹkan kan, bẹ̀rẹ̀ láti 0", "Àpapọ̀ list náà", "Orúkọ list náà", "Nǹkan ìkẹyìn nìkan"], answer: 0, why: "Nǹkan kọ̀ọ̀kan ní index, Python sì ń kà láti 0." },
            { objective: "O4", q: "chores = [\"dishes\", \"laundry\"]. O fẹ́ ṣàyẹ̀wò bóyá \"laundry\" wà nínú list náà. Kí ni o máa tẹ?", options: ["len(\"laundry\")", "chores[\"laundry\"]", "sum(chores)", "\"laundry\" in chores"], answer: 3, why: "\"laundry\" in chores jẹ́ True tí nǹkan náà bá wà nínú list." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Loop: títún àwọn ìgbésẹ̀ ṣe láìtún tẹ̀ wọ́n",
          minutes: 6,
          goal: "Lo for loop láti la list kan kọjá àti while loop láti tún ṣe títí iṣẹ́ yóò fi parí.",
          text: [
            "Loop ń tún kóòdù ṣe. For loop ń ṣiṣẹ́ lẹ́ẹ̀kan fún nǹkan kọ̀ọ̀kan nínú list: for price in prices: print(price). Ní ìgbà kọ̀ọ̀kan, variable price ń di nǹkan tí ó kàn mú.",
            "range() ń ṣe list nọ́mbà fún kíkà: for i in range(5) ń ṣiṣẹ́ lẹ́ẹ̀marùn-ún pẹ̀lú i = 0, 1, 2, 3, 4.",
            "Àpapọ̀ tí ń lọ (running total) jẹ́ ọ̀nà tí a sábà ń lò: bẹ̀rẹ̀ pẹ̀lú total = 0 ṣáájú loop náà, lẹ́yìn náà fi total = total + price kún un nínú rẹ̀ (tàbí total += price). Lẹ́yìn loop náà, total ló di àròpọ̀ mú.",
            "While loop ń tún ṣe níwọ̀n ìgbà tí condition kan bá jẹ́ True, fún àpẹẹrẹ while answer != \"done\". Rí i dájú pé nǹkan kan nínú loop náà ń yí condition náà padà, bí bẹ́ẹ̀ kọ́ kò ní dúró láéláé. Nínú Colab, tẹ bọ́tìnì stop láti dá loop tí kò dúró dúró."
          ],
          steps: ["Pinnu ohun tí ó máa tún ṣe.", "Fún nǹkan kọ̀ọ̀kan nínú list, lo: for item in my_list:", "Fa kóòdù tí ó ń tún ṣe sẹ́yìn.", "Fún àpapọ̀, ṣe total = 0 ṣáájú loop náà kí o sì fi kún un nínú rẹ̀.", "Fún while loop, rí i dájú pé condition náà lè di False."],
          words: [["Loop", "kóòdù tí ó ń tún ṣe."], ["for loop", "ń tún ṣe lẹ́ẹ̀kan fún nǹkan kọ̀ọ̀kan nínú list tàbí range."], ["while loop", "ń tún ṣe níwọ̀n ìgbà tí condition kan bá jẹ́ True."], ["range()", "ń ṣe ọ̀wọ́ nọ́mbà, tí ó ń bẹ̀rẹ̀ láti 0 bí a kò bá sọ nǹkan míì."], ["Running total (àpapọ̀ tí ń lọ)", "variable tí o ń fi kún nínú loop."]],
          slides: [
            { title: "for: lẹ́ẹ̀kan fún nǹkan kọ̀ọ̀kan", bullets: ["for price in prices:", "    print(price)", "price ń di nǹkan tí ó kàn mú ní ìgbà kọ̀ọ̀kan"] },
            { title: "Kíkà pẹ̀lú range", bullets: ["for i in range(5): ń ṣiṣẹ́ lẹ́ẹ̀marùn-ún", "i ń lọ 0, 1, 2, 3, 4"] },
            { title: "Ọ̀nà àpapọ̀ tí ń lọ", bullets: ["total = 0 ṣáájú loop náà", "total += price nínú loop náà", "Tẹ total jáde lẹ́yìn loop náà"] },
            { title: "while: títí condition yóò fi yí padà", bullets: ["Ń tún ṣe níwọ̀n ìgbà tí condition bá jẹ́ True", "Yí nǹkan kan padà nínú rẹ̀, bí bẹ́ẹ̀ kọ́ kò ní parí", "Bọ́tìnì stop ń dá loop tí ó há dúró"] }
          ],
          tryIt: "Kọ while loop tí ó ń béèrè léraléra \"Add a price (or type done): \". Fi nọ́mbà kọ̀ọ̀kan kún list kan (append). Nígbà tí olùlò bá tẹ done, lo for loop àti àpapọ̀ tí ń lọ láti ṣírò àròpọ̀ iye owó, kí o sì tẹ total jáde.",
          youCanNow: "tún kóòdù ṣe pẹ̀lú for loop àti while loop, kí o sì máa ṣírò àpapọ̀ tí ń lọ.",
          quickCheck: [
            { objective: "O5", q: "Àwọn nọ́mbà wo ni range(4) ń fún ọ?", options: ["1, 2, 3, 4", "0, 1, 2, 3", "0, 1, 2, 3, 4", "4 nìkan"], answer: 1, why: "range(4) ń kà láti 0, ó sì ń dúró ṣáájú 4." },
            { objective: "O5", q: "Loop rẹ ń ṣírò iye owó ṣùgbọ́n total ń padà sí 0 ní ìgbà kọ̀ọ̀kan. Ibo ni o máa gbé total = 0 lọ?", options: ["Sínú loop náà", "Lẹ́yìn loop náà", "Ṣáájú loop náà", "Sínú ìlà print kan"], answer: 2, why: "Ṣe total = 0 lẹ́ẹ̀kan ṣáájú loop náà, lẹ́yìn náà fi kún un nínú rẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Function: dídi kóòdù tí o lè tún lò",
          minutes: 6,
          goal: "Kọ function pẹ̀lú input àti return, lẹ́yìn náà lò ó nínú ètò kíkún kan.",
          text: [
            "Function jẹ́ apá kóòdù tí ó ní orúkọ tí o lè ṣe nígbàkígbà tí o bá nílò rẹ̀. O ti lo àwọn tí Python ti ní tẹ́lẹ̀: print(), len(), sum(). Báyìí o máa kọ tìrẹ pẹ̀lú def.",
            "def check_budget(prices, budget): ń bẹ̀rẹ̀ function kan pẹ̀lú parameter méjì, àwọn input tí ó nílò. Nínú rẹ̀, o ń ṣe iṣẹ́ náà. return ń fi èsì kan padà sí ẹni tí ó pè é.",
            "Pípe function ń ṣe é: result = check_budget([3.5, 12, 6.25], 25). Function tó dára ń ṣe iṣẹ́ kan, ó sì ní orúkọ tí ó sọ ohun tí iṣẹ́ náà jẹ́.",
            "Àkójọpọ̀ gbogbo rẹ̀: iṣẹ́ ìkẹyìn ń lo gbogbo ohun tí ó wà nínú ẹ̀kọ́ yìí. Kọ́kọ́ ṣe ètò rẹ̀ ní ọ̀rọ̀ lásán (gba ìnáwó, ṣírò iye owó, fi wé ara wọn, tẹ̀ ẹ́ jáde), lẹ́yìn náà sọ ìlà kọ̀ọ̀kan di kóòdù kí o sì dán an wò pẹ̀lú ìnáwó méjì."
          ],
          steps: ["Kọ ètò náà ní ọ̀rọ̀ lásán gẹ́gẹ́ bí comment tí ó bẹ̀rẹ̀ pẹ̀lú #.", "Bẹ̀rẹ̀ function náà pẹ̀lú def name(parameters):", "Fa ara rẹ̀ sẹ́yìn; lo loop àti if nínú rẹ̀.", "Lo return láti fi èsì padà, tàbí print nínú rẹ̀.", "Pe function náà kí o sì dán an wò pẹ̀lú input tí ó yàtọ̀."],
          words: [["Function", "apá kóòdù tí ó ní orúkọ tí o lè ṣe léraléra."], ["def", "ọ̀rọ̀ tí ó ń bẹ̀rẹ̀ function tuntun."], ["Parameter", "input tí function nílò, tí a kọ orúkọ rẹ̀ sínú àkámọ́ rẹ̀."], ["return", "ń fi iye kan padà láti inú function."], ["Comment", "àkíyèsí nínú kóòdù tí ó bẹ̀rẹ̀ pẹ̀lú #; Python kò kà á sí."]],
          slides: [
            { title: "Ìdí tí a fi ń lo function", bullets: ["Kọ kóòdù náà lẹ́ẹ̀kan, lò ó ní ọ̀pọ̀ ìgbà", "Iṣẹ́ kan fún function kan", "Orúkọ tó yé ń sọ ohun tí ó ń ṣe"] },
            { title: "Kíkọ ọ̀kan", bullets: ["def check_budget(prices, budget):", "Fa ara rẹ̀ sẹ́yìn", "return ń fi èsì padà"] },
            { title: "Pípe ọ̀kan", bullets: ["check_budget([3.5, 12, 6.25], 25)", "Gbìyànjú input tí ó yàtọ̀ láti dán an wò"] },
            { title: "Ètò iṣẹ́ ìkẹyìn", bullets: ["Gba ìnáwó pẹ̀lú input()", "Ṣírò iye owó pẹ̀lú loop", "Fi wé ara wọn pẹ̀lú if, tẹ èsì jáde"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ check_budget(prices, budget). Nínú rẹ̀, lo loop láti ṣírò àpapọ̀ iye owó, lẹ́yìn náà tẹ total jáde pẹ̀lú \"Under budget by X\" tàbí \"Over budget by X\". Béèrè ìnáwó lọ́wọ́ olùlò pẹ̀lú float(input()), pe function náà pẹ̀lú list rírajà rẹ, kí o sì dán an wò pẹ̀lú ìnáwó gíga àti ìnáwó kékeré.",
          youCanNow: "kọ function tìrẹ kí o sì pè é, kí o sì da variable, input, if, list àti loop pọ̀ nínú ètò kan tí ó ṣiṣẹ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ni parameter nínú function?", options: ["Ọ̀rọ̀ àṣìṣe", "Loop inú function náà", "Orúkọ function náà", "Àwọn input tí function náà nílò"], answer: 3, why: "Parameter, bí prices àti budget, ni àwọn input tí function nílò." },
            { objective: "O6", q: "Kí o tó kọ ètò àyẹ̀wò ìnáwó, kí ni o máa kọ́kọ́ ṣe?", options: ["Ṣe ètò rẹ̀ ní ọ̀rọ̀ lásán: gba ìnáwó, ṣírò iye owó, fi wé ara wọn, tẹ̀ ẹ́ jáde", "Tẹ kóòdù tó pọ̀ bí o ti lè ṣe kí o sì retí pé ó máa ṣiṣẹ́", "Kọ orúkọ function náà nìkan", "Dán an wò láìsí ìnáwó"], answer: 0, why: "Ṣíṣe ètò ní ọ̀rọ̀ lásán ní àkọ́kọ́ ń mú kí ó rọrùn láti sọ ìlà kọ̀ọ̀kan di kóòdù." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àwọn ètò tí ń tún ṣe tí wọ́n sì ń rántí",
        questions: [
          { objective: "O4", q: "colors = [\"red\", \"blue\", \"green\"]. Kí ni colors[0]?", options: ["\"blue\"", "\"green\"", "Àṣìṣe kan", "\"red\""], answer: 3, why: "Python ń ka ipò list láti 0, nítorí náà index 0 ni nǹkan àkọ́kọ́." },
          { objective: "O4", q: "Ìlà wo ló ń fi 4.99 kún òpin list prices?", options: ["prices.append(4.99)", "prices + 4.99", "append.prices(4.99)", "prices[4.99]"], answer: 0, why: "append ń fi nǹkan kan kún òpin list." },
          { objective: "O5", q: "Ìgbà mélòó ni for i in range(3): ń ṣiṣẹ́?", options: ["2", "4", "3", "Láéláé"], answer: 2, why: "range(3) ń fún ọ ní 0, 1 àti 2: ìgbà mẹ́ta." },
          { objective: "O5", q: "While loop rẹ kò dúró rárá. Kí ló ṣeé ṣe jù pé ó fà á?", options: ["O lo list", "Colab kò sí lórí ayélujára", "O lo print", "Kò sí ohun tí ó ń sọ condition náà di False nínú loop náà"], answer: 3, why: "While loop máa ń parí nígbà tí condition rẹ̀ bá di False nìkan." },
          { objective: "O6", q: "Kí ni return ń ṣe nínú function?", options: ["Ó ń pa function náà rẹ́", "Ó ń tún Colab bẹ̀rẹ̀", "Ó ń fi iye kan padà sí ibi tí a ti pe function náà", "Ó ń tẹ àṣìṣe jáde"], answer: 2, why: "return ń fi èsì náà lé ẹni tí ó pè é lọ́wọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí Kíkọ Ètò Kọ̀mpútà pẹ̀lú Python",
    questions: [
      { objective: "O1", q: "Kí ni ètò kọ̀mpútà (program)?", options: ["Irú ojú-iboju kọ̀mpútà kan", "Àkọsílẹ̀ àwọn ìtọ́ni tí kọ̀mpútà ń tẹ̀lé ní ṣísẹ̀-n-tẹ̀lé", "Àdírẹ́sì ojú-òpó wẹ́ẹ̀bù", "Àkáǹtì Google"], answer: 1, why: "Ètò kọ̀mpútà jẹ́ àwọn ìtọ́ni tí a ń ṣe ní ṣísẹ̀-n-tẹ̀lé." },
      { objective: "O1", q: "Kí ló dé tí Google Colab fi wúlò fún àwọn olùbẹ̀rẹ̀?", options: ["Ó ń ṣe Python nínú browser láìsí ohun tí o máa fi sórí ẹ̀rọ", "Ó ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì nìkan", "Ó ń kọ gbogbo kóòdù fún ọ", "Ó nílò ìwé àṣẹ tí a ń sanwó fún"], answer: 0, why: "Colab jẹ́ notebook ọ̀fẹ́ lórí ayélujára; o kò fi nǹkankan sórí ẹ̀rọ." },
      { objective: "O1", q: "Báwo ni o ṣe ń ṣe cell kóòdù nínú Colab?", options: ["Pa tab náà dé", "Tẹ run ní òkè ojú-ìwé náà", "Tẹ bọ́tìnì play tàbí Shift + Enter", "Fi í ránṣẹ́ sí ara rẹ nínú ímeèlì"], answer: 2, why: "Bọ́tìnì play tàbí Shift + Enter ló ń ṣe cell náà." },
      { objective: "O1", q: "Ìlà wo ló ń tẹ ọ̀rọ̀ Good job jáde?", options: ["print(\"Good job\")", "print(Good job)", "print \"Good job\"", "say(\"Good job\")"], answer: 0, why: "Ọ̀rọ̀ ń lọ sínú àmì àyọlò, nínú àkámọ́ print." },
      { objective: "O2", q: "Nínú Python, kí ni = ń ṣe nínú pay = 15?", options: ["Ó ń ṣàyẹ̀wò bóyá pay dọ́gba pẹ̀lú 15", "Ó ń tẹ 15 jáde", "Ó ń pa pay rẹ́", "Ó ń tọ́jú 15 sínú variable pay"], answer: 3, why: "= kan ṣoṣo ń tọ́jú iye; == ń fi wé ara wọn." },
      { objective: "O2", q: "Kí ni \"5\" + \"5\" ń fún ọ?", options: ["10", "\"55\"", "Àṣìṣe nígbà gbogbo", "5"], answer: 1, why: "String méjì tí a so pọ̀ ń di \"55\"." },
      { objective: "O2", q: "O nílò láti fi ohun tí olùlò tẹ ṣe ìṣirò. Ìlà wo ló tọ́?", options: ["hours = input(\"Hours: \") * 2", "hours = float(input(\"Hours: \"))", "hours = print(\"Hours\")", "hours = text(input())"], answer: 1, why: "input ń fún ọ ní ọ̀rọ̀ (text); float() ń yí i padà sí nọ́mbà." },
      { objective: "O2", q: "name = \"Ana\". Èwo ló ń tẹ Hi Ana jáde?", options: ["print(\"Hi {name}\")", "print(Hi name)", "print(f(Hi name))", "print(f\"Hi {name}\")"], answer: 3, why: "Lẹ́tà f ṣáájú àmì àyọlò ń jẹ́ kí {name} fi variable náà hàn." },
      { objective: "O3", q: "Àmì wo ló túmọ̀ sí \"dọ́gba pẹ̀lú\" nínú condition?", options: ["==", "=", "=>", "!="], answer: 0, why: "== ń fi wé ara wọn; = ń tọ́jú." },
      { objective: "O3", q: "Kí ló gbọ́dọ̀ wà ní òpin ìlà if?", options: ["Semicolon (;)", "Àmì ìdúró (.)", "Colon (:)", "Kò sí nǹkankan"], answer: 2, why: "Àwọn ìlà if, elif, else, for, while àti def ń parí pẹ̀lú colon." },
      { objective: "O3", q: "score = 85. Ẹ̀ka wo ló máa ṣiṣẹ́? if score >= 90 / elif score >= 80 / else", options: ["if", "else", "Kò sí ọ̀kankan", "elif"], answer: 3, why: "85 kò tó 90, ṣùgbọ́n ó jẹ́ 80 tàbí jù bẹ́ẹ̀ lọ, nítorí náà elif ló máa ṣiṣẹ́." },
      { objective: "O3", q: "Báwo ni Python ṣe ń mọ àwọn ìlà tí ó jẹ́ ti if?", options: ["Nípa àwọ̀ ọ̀rọ̀ náà", "Nípa lẹ́tà ńlá", "Nípa ìfàsẹ́yìn (indentation)", "Nípa nọ́mbà ìlà"], answer: 2, why: "Àwọn ìlà tí a fà sẹ́yìn lábẹ́ if ni apá tirẹ̀." },
      { objective: "O4", q: "nums = [4, 8, 2]. Kí ni len(nums) ń fún ọ?", options: ["2", "3", "8", "14"], answer: 1, why: "len ń ka iye nǹkan; mẹ́ta ló wà." },
      { objective: "O4", q: "nums = [4, 8, 2]. Kí ni sum(nums) ń fún ọ?", options: ["3", "8", "14", "482"], answer: 2, why: "sum ń ṣírò àròpọ̀ àwọn nọ́mbà: 4 + 8 + 2 = 14." },
      { objective: "O4", q: "Kí ni prices[-1]?", options: ["Nǹkan àkọ́kọ́", "Àṣìṣe kan", "Nǹkan ìkẹyìn", "Iye owó àkọ́kọ́ ní òdì"], answer: 2, why: "Index -1 túmọ̀ sí nǹkan ìkẹyìn." },
      { objective: "O5", q: "O fẹ́ ṣírò àpapọ̀ list kan nínú loop. Kí ló máa wà ṣáájú loop náà?", options: ["total = 0", "return total", "print(total)", "def total"], answer: 0, why: "Àpapọ̀ tí ń lọ ń bẹ̀rẹ̀ láti 0 ṣáájú loop náà." },
      { objective: "O5", q: "Kí ni for chore in chores: ń ṣe?", options: ["Ó ń pa list náà rẹ́", "Ó ń ṣiṣẹ́ lẹ́ẹ̀kan ṣoṣo", "Ó ń to list náà lẹ́sẹẹsẹ", "Ó ń ṣiṣẹ́ lẹ́ẹ̀kan fún nǹkan kọ̀ọ̀kan nínú chores"], answer: 3, why: "For loop ń la nǹkan kọ̀ọ̀kan kọjá ní ṣísẹ̀-n-tẹ̀lé." },
      { objective: "O6", q: "Ọ̀rọ̀ wo ló ń bẹ̀rẹ̀ function tuntun?", options: ["func", "def", "new", "make"], answer: 1, why: "def ló ń ṣe function." },
      { objective: "O6", q: "Nínú def check_budget(prices, budget):, kí ni prices àti budget?", options: ["Àṣìṣe", "Parameter: àwọn input tí function náà nílò", "List àwọn function", "Comment"], answer: 1, why: "Àwọn orúkọ inú àkámọ́ ni parameter." },
      { objective: "O6", q: "O ti kọ ètò àyẹ̀wò ìnáwó. Kí ni ọ̀nà tó dára jù láti dán an wò?", options: ["Ṣe é lẹ́ẹ̀kan kí o sì retí", "Pa àwọn comment rẹ́", "Pín in kí o tó ṣe é", "Ṣe é pẹ̀lú ìnáwó gíga àti ìnáwó kékeré kí o sì ṣàyẹ̀wò èsì méjèèjì"], answer: 3, why: "Dídánwò pẹ̀lú input tí ó yàtọ̀ ń fi hàn pé gbogbo ẹ̀ka ń ṣiṣẹ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Function",
        objective: "O6",
        notYet: "Kò sí function, tàbí kò gba iye owó àti ìnáwó.",
        meets: "Function tí ó ní parameter fún iye owó àti ìnáwó, tí ó dá èsì padà (return) tàbí tẹ̀ ẹ́ jáde.",
        exceeds: "Function náà ní orúkọ tó yé, ó ń ṣe iṣẹ́ kan, ó sì ń lo return."
      },
      {
        name: "Loop àti àpapọ̀",
        objective: "O5",
        notYet: "Àpapọ̀ kò tọ́ tàbí a kò lo loop.",
        meets: "For loop ń ṣírò iye owó sínú àpapọ̀ tí ń lọ tí ó bẹ̀rẹ̀ láti 0.",
        exceeds: "Ó tún ń tẹ iye nǹkan tí a ṣàyẹ̀wò jáde pẹ̀lú len()."
      },
      {
        name: "Ìpinnu",
        objective: "O3",
        notYet: "Ètò náà kò sọ Under budget tàbí Over budget, tàbí ó sọ èyí tí kò tọ́.",
        meets: "if àti else ń tẹ ọ̀rọ̀ tó tọ́ jáde pẹ̀lú ìyàtọ̀ náà.",
        exceeds: "Ó tún ń mú ìgbà tí ó dọ́gba pẹ̀lú ìnáwó gangan pẹ̀lú elif."
      },
      {
        name: "Input",
        objective: "O2",
        notYet: "A kò béèrè ìnáwó, tàbí a lò ó gẹ́gẹ́ bí ọ̀rọ̀ (text) tí ìṣirò fi kùnà.",
        meets: "input() ń béèrè ìnáwó, float() sì ń yí i padà sí nọ́mbà.",
        exceeds: "Ó ń tẹ èsì jáde pẹ̀lú f-string tí ó rọrùn láti kà."
      },
      {
        name: "Dídánwò",
        objective: "O6",
        notYet: "A ṣe ètò náà lẹ́ẹ̀kan tàbí a kò ṣe é rárá.",
        meets: "A ṣe é pẹ̀lú ìnáwó méjì tí ó yàtọ̀, èsì méjèèjì sì tọ́.",
        exceeds: "A tún dán an wò pẹ̀lú ìnáwó tí ó dọ́gba gangan pẹ̀lú àpapọ̀, tàbí pẹ̀lú list òfo."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ètò àyẹ̀wò ìnáwó",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé wọ́n kọ ètò Python míì fúnra wọn láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà (ìwádìí ìtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀ síwájú sí ẹ̀kọ́ míì, bí AI Programming with Python tàbí Data Science for Beginners",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n darapọ̀ mọ́ ẹgbẹ́ kóòdù, kíláàsì, iṣẹ́ àṣeṣe (internship) tàbí ètò ìkọ́ṣẹ́ lẹ́yìn ẹ̀kọ́ náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí laptop pẹ̀lú browser wẹ́ẹ̀bù",
      "Àkáǹtì Google ọ̀fẹ́ láti lo Google Colab",
      "Ìwé àti gègé láti ṣe ètò náà ní ọ̀rọ̀ lásán",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, pẹ̀lú àkókò àṣeṣe"
    ],
    facilitatorNotes: [
      "Ṣáájú kíláàsì, ṣàyẹ̀wò pé gbogbo akẹ́kọ̀ọ́ lè wọlé sí Google Colab; àkáǹtì ilé-ìwé máa ń dí i lọ́nà nígbà míì, nítorí náà ṣètò àkáǹtì àdáni tàbí notebook Python ọ̀fẹ́ míì sílẹ̀.",
      "Gba àwọn akẹ́kọ̀ọ́ níyànjú láti tẹ kóòdù náà fúnra wọn dípò kí wọ́n dà á kọ (copy and paste), kí wọ́n sì máa ka ọ̀rọ̀ àṣìṣe sókè papọ̀.",
      "Lo kíkọ kóòdù ní méjì-méjì (pair programming): ẹnì kan ń tẹ̀, ẹnì kejì ń kà tí ó sì ń ṣàyẹ̀wò, lẹ́yìn náà ẹ pààrọ̀ ní ẹ̀kọ́ kọ̀ọ̀kan.",
      "Ẹ ka àṣìṣe sí apá kan kíkọ kóòdù; fi bí o ṣe ń tún àṣìṣe tìrẹ ṣe hàn lórí ojú-iboju.",
      "Fún iṣẹ́ ìkẹyìn, fún wọn ní àpẹẹrẹ list iye owó àti ìnáwó kí àwọn akẹ́kọ̀ọ́ lè fi èsì wọn wé tìrẹ."
    ]
  }
};
