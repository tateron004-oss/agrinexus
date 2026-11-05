"use strict";

// Koach Learn course (Yoruba translation of shared/data-science-beginners.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Àwọn ìbéèrè tí àwọn ènìyàn máa ń béèrè", url: "https://research.google.com/colaboratory/faq.html" };
const PANDAS = { name: "pandas: pandas ní ìṣẹ́jú 10", url: "https://pandas.pydata.org/docs/user_guide/10min.html" };
const SEABORN = { name: "seaborn: load_dataset", url: "https://seaborn.pydata.org/generated/seaborn.load_dataset.html" };

module.exports = {
  id: "data-science-beginners-yo",
  lang: "yo",
  translationOf: "data-science-beginners",
  category: "Youth",
  name: "Ìfihàn sí Sáyẹ́ǹsì Dátà àti Ìtúpalẹ̀ Dátà",
  skills: "Bíbéèrè ìbéèrè tí dátà lè dáhùn, Ṣíṣírò ìpíndọ́gba àti rírí iye àjèjì (outlier), Kíkó dátà wọlé pẹ̀lú pandas, Títún dátà ṣe àti pínpín in sí ẹgbẹ́, Ṣíṣe àwòrán àtẹ àti pínpín ohun tí o rí",
  outcome: "mú dátà gidi kan nínú Google Colab, kó o wọlé pẹ̀lú pandas, tún un ṣe, dáhùn ìbéèrè tó yé pẹ̀lú ìpíndọ́gba àti ẹgbẹ́, ṣe àwòrán àtẹ (chart), kí o sì kọ ohun mẹ́ta tí o rí ní òtítọ́.",
  about: [
    "Àwọn olùtúpalẹ̀ dátà ń sọ ìlà nọ́mbà di ìdáhùn tí àwọn ènìyàn lè lò: ọjọ́ wo ni ṣọ́ọ̀bù kan ń ní èrò jù, eré-ìdárayá wo ló ń ran ẹgbẹ́ lọ́wọ́ jù, ibo ni owó ètò kan ń lọ. Ó jẹ́ ọ̀kan lára ọgbọ́n iṣẹ́ tó wúlò jù lónìí, o sì lè bẹ̀rẹ̀ lọ́fẹ̀ẹ́.",
    "Orí 1 ń kọ́ ọ ní ọ̀nà ìrònú láìsí kóòdù: bíbéèrè ìbéèrè tó dára, mímọ dátà rẹ, àti lílo ìpíndọ́gba láìjẹ́ kí ó tàn ọ́ jẹ. Orí 2 ń lọ sí Google Colab, ojú-òpó wẹ́ẹ̀bù ọ̀fẹ́ tí ó ń ṣe Python, níbi tí o ti máa lo pandas, irinṣẹ́ dátà tí ó gbajúmọ̀ jù nínú Python, lórí dátà gidi láti ilé oúnjẹ kan.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì parí ẹ̀kọ́ náà."
  ],
  finalTask: "Nínú Google Colab, kó dátà owó àfikún (tips) ilé oúnjẹ wọlé pẹ̀lú pandas, ṣàyẹ̀wò bóyá iye kan sọnù, fi column kan kún un fún owó àfikún gẹ́gẹ́ bí ìdá-ọgọ́rùn-ún (percent) owó oúnjẹ (bill), wá ìpíndọ́gba ìdá-ọgọ́rùn-ún owó àfikún fún ọjọ́ kọ̀ọ̀kan àti fún oúnjẹ ọ̀sán (Lunch) àti oúnjẹ alẹ́ (Dinner), ṣe àwòrán àtẹ ọ̀pá (bar chart) fún ọ̀kan nínú wọn, kí o sì kọ ohun mẹ́ta tí o rí ní gbólóhùn tó rọrùn, pẹ̀lú ohun kan tí dátà náà kò lè sọ fún ọ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ àti àgbàlagbà tí wọ́n ń bẹ̀rẹ̀ iṣẹ́ dátà: àwọn akẹ́kọ̀ọ́ ilé-ìwé gíga àti yunifásítì, àwọn ọmọ ẹgbẹ́ ètò ọ̀dọ́, àwọn olùkọ́ eré-ìdárayá (coach), òṣìṣẹ́ okòwò kékeré àti àjọ aláìlérè, àti àwọn tí ń yí iṣẹ́ padà tí wọ́n ń wo iṣẹ́ olùtúpalẹ̀ dátà.",
    startingPoint: "Wọ́n lè lo kọ̀mpútà àti browser wẹ́ẹ̀bù, wọ́n sì ti kọ Python díẹ̀. Ọ̀pọ̀ ń lo spreadsheet ṣùgbọ́n wọn kò tíì kó dátà wọlé sínú pandas rí, kò tíì ṣàyẹ̀wò iye tí ó sọnù, kò tíì fi ẹgbẹ́ wéra, tàbí kọ ohun tí wọ́n rí tí ó sọ ààlà rẹ̀.",
    gap: "Àwọn ẹgbẹ́, ilé-ìwé, okòwò àti àjọ aláìlérè ń ṣe ìpinnu láti inú dátà, ìtúpalẹ̀ dátà sì jẹ́ ọ̀nà tí ọ̀pọ̀ ènìyàn fi ń wọ iṣẹ́ ẹ̀rọ ìgbàlódé. Láìsí àwọn ìgbésẹ̀ ìpìlẹ̀, àwọn ènìyàn ń dáhùn ìbéèrè tí kò tọ́, iye àjèjì tàbí correlation ń tàn wọ́n jẹ, tàbí wọ́n ń pín àwòrán àtẹ àti ọ̀rọ̀ tí dátà náà kò lè ṣe àtìlẹ́yìn fún.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé àwọn ọ̀rọ̀ bíi DataFrame, median, outlier àti correlation",
      "Ẹ̀rọ: kọ̀mpútà tàbí laptop pẹ̀lú browser wẹ́ẹ̀bù",
      "Àkáǹtì àti owó: àkáǹtì Google ọ̀fẹ́ fún Google Colab; pandas àti seaborn ti wà níbẹ̀ tẹ́lẹ̀",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 sí 6 fún ẹ̀kọ́ kan pẹ̀lú àṣeṣe, nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀",
      "Ìṣirò: ìpíndọ́gba àti ìdá-ọgọ́rùn-ún nìkan"
    ],
    prerequisites: "Ìfihàn sí Kíkọ Ètò Kọ̀mpútà pẹ̀lú Python (Introduction to Programming with Python)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ìbéèrè gidi kan, bíi ti olùkọ́ eré-ìdárayá tàbí ti ṣọ́ọ̀bù kan", action: "to ìgbésẹ̀ márùn-ún iṣẹ́ dátà ní ṣísẹ̀-n-tẹ̀lé kí o sì so ọ̀kọ̀ọ̀kan mọ́ àpẹẹrẹ náà", standard: "pẹ̀lú gbogbo ìgbésẹ̀ márùn-ún (Ask, Get, Clean, Explore, Share) ní ṣísẹ̀-n-tẹ̀lé tó tọ́" },
    { id: "O2", condition: "Tí a bá fún ọ ní àtẹ dátà àti ìbéèrè kan", action: "ṣàlàyé ohun tí column kọ̀ọ̀kan ní àti irú rẹ̀, kí o sì ṣàyẹ̀wò bóyá dátà náà lè dáhùn ìbéèrè náà", standard: "tí o fi pe column nọ́mbà àti column ẹgbẹ́ ní orúkọ tó tọ́, tí o sì sọ ọ́ nígbà tí ìbéèrè kan kò ṣeé dáhùn" },
    { id: "O3", condition: "Tí a bá fún ọ ní àkọsílẹ̀ nọ́mbà kúkúrú tàbí ọ̀rọ̀ kan nípa nǹkan méjì", action: "ṣírò mean àti median, dá iye àjèjì mọ̀, kí o sì ṣàyẹ̀wò bóyá ọ̀rọ̀ náà da correlation pọ̀ mọ́ ìdí (cause)", standard: "pẹ̀lú mean àti median tó tọ́, tí o sì dárúkọ gbogbo ibi tí a ti da correlation pọ̀ mọ́ ìdí" },
    { id: "O4", condition: "Nínú Google Colab pẹ̀lú pandas", action: "kó dátà kan wọlé sínú DataFrame kí o sì ṣàlàyé àwọn row, column àti irú rẹ̀", standard: "nípa lílo head(), shape, info() àti describe(), tí o sì ròyìn èsì wọn lọ́nà tó tọ́" },
    { id: "O5", condition: "Tí a bá fún ọ ní DataFrame tí a ti kó wọlé", action: "ṣàyẹ̀wò iye tí ó sọnù, fi column tí a ṣírò kún un, ṣẹ́ àwọn row, kí o sì fi àwọn ẹgbẹ́ wéra", standard: "tí kóòdù ìgbésẹ̀ kọ̀ọ̀kan fi ṣiṣẹ́, tí o sì kọ gbogbo àtúnṣe tí o ṣe sílẹ̀" },
    { id: "O6", condition: "Tí a bá fún ọ ní èsì ẹgbẹ́ rẹ", action: "ṣe àwòrán àtẹ ọ̀pá tí ó ní àkọlé kí o sì kọ ohun tí o rí tí ó sọ ààlà rẹ̀", standard: "pẹ̀lú nọ́mbà láti inú èsì tìrẹ àti ó kéré tán ààlà òtítọ́ kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Rírònú bí olùtúpalẹ̀ dátà",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí sáyẹ́ǹsì dátà jẹ́, àti ìgbésẹ̀ márùn-ún",
          minutes: 4,
          goal: "Dárúkọ ìgbésẹ̀ márùn-ún iṣẹ́ dátà kí o sì so wọ́n mọ́ àpẹẹrẹ gidi kan.",
          text: [
            "Sáyẹ́ǹsì dátà túmọ̀ sí lílo dátà láti dáhùn ìbéèrè àti láti ṣe ìpinnu tó dára jù. Ìtúpalẹ̀ dátà ni apá iṣẹ́-ọwọ́ rẹ̀: títún dátà ṣe, kíkà, fífi wéra àti ṣíṣe àwòrán àtẹ.",
            "Ó fẹ́rẹ̀ jẹ́ pé gbogbo iṣẹ́ dátà ń tẹ̀lé ìgbésẹ̀ márùn-ún. Ask (Béèrè): kí ni o fẹ́ mọ̀? Get (Gbà): wá dátà náà. Clean (Tún ṣe): tún àṣìṣe àti àlàfo ṣe. Explore (Ṣàwárí): kà á, ṣírò ìpíndọ́gba, fi wéra kí o sì ṣe àwòrán àtẹ. Share (Pín): sọ ohun tí o rí fún àwọn ènìyàn ní ọ̀rọ̀ tó rọrùn.",
            "Àpẹẹrẹ: olùkọ́ bọ́ọ̀lù-àfẹsẹ̀gbá fún àwọn ọ̀dọ́ béèrè pé \"Ṣé a máa ń gba góòlù jù ní ìdajì kejì?\" Ó gba àbájáde ìdíje kọ̀ọ̀kan, ó yọ ìdíje kan tí a fagilé kúrò, ó ṣírò góòlù ìdajì àkọ́kọ́ àti ìdajì kejì, ó sì fi àwòrán àtẹ tó rọrùn han ẹgbẹ́ rẹ̀."
          ],
          steps: ["Béèrè ìbéèrè tó yé (Ask).", "Gba dátà náà (Get).", "Tún un ṣe (Clean).", "Ṣàwárí rẹ̀ pẹ̀lú kíkà, ìpíndọ́gba àti àwòrán àtẹ (Explore).", "Pín ohun tí o rí (Share)."],
          words: [["Dátà (data)", "àwọn òtítọ́ àti nọ́mbà tí a kó jọ nípa nǹkan kan."], ["Sáyẹ́ǹsì dátà (data science)", "lílo dátà láti dáhùn ìbéèrè àti láti tọ́ ìpinnu sọ́nà."], ["Ìtúpalẹ̀ dátà (data analysis)", "títún dátà ṣe, ṣíṣe àkópọ̀ rẹ̀ àti ṣíṣe àwòrán àtẹ láti rí ìdáhùn."], ["Dataset", "àkójọ dátà, tí ó sábà máa ń jẹ́ àtẹ (table)."]],
          slides: [
            { title: "Sáyẹ́ǹsì dátà ni", bullets: ["Lílo dátà láti dáhùn ìbéèrè", "Àti láti ṣe ìpinnu tó dára jù"] },
            { title: "Ìgbésẹ̀ márùn-ún", bullets: ["Ask, Get, Clean", "Explore, Share"] },
            { title: "Àpẹẹrẹ: olùkọ́ bọ́ọ̀lù", bullets: ["Ask: ṣé góòlù pọ̀ jù ní ìdajì kejì?", "Gba àbájáde ìdíje kí o sì tún un ṣe", "Ṣàwárí kí o sì pín àwòrán àtẹ tó rọrùn"] }
          ],
          tryIt: "Ronú nípa ìbéèrè kan láti ayé rẹ, iṣẹ́ rẹ tàbí àdúgbò rẹ tí dátà lè dáhùn (fún àpẹẹrẹ \"Ọjọ́ wo ni mo ń ná owó jù?\"). Kọ ohun tí o máa ṣe ní ìgbésẹ̀ kọ̀ọ̀kan nínú márùn-ún náà.",
          youCanNow: "ṣàlàyé ìgbésẹ̀ márùn-ún iṣẹ́ dátà kí o sì ṣètò ọ̀kan.",
          quickCheck: [
            { objective: "O1", q: "Kí ló ń ṣẹlẹ̀ ní ìgbésẹ̀ Clean nínú iṣẹ́ dátà?", options: ["O ń béèrè ìbéèrè náà", "O ń tún àṣìṣe àti àlàfo inú dátà ṣe", "O ń pín àwòrán àtẹ náà", "O ń kó dátà púpọ̀ sí i jọ"], answer: 1, why: "Clean túmọ̀ sí títún àṣìṣe àti àlàfo ṣe kí o tó ṣàwárí." },
            { objective: "O1", q: "Ẹni tó ni ṣọ́ọ̀bù kan béèrè pé, \"Ọjọ́ wo ni a ń tà jù?\" Kí ni o máa ṣe lẹ́yìn ìgbésẹ̀ Ask yìí?", options: ["Ṣe àwòrán àtẹ", "Kọ ohun tí o rí", "Ṣírò ìpíndọ́gba àwọn ọjọ́ ọ̀sẹ̀", "Gba dátà ọjà títà pẹ̀lú ọjọ́ rẹ̀"], answer: 3, why: "Lẹ́yìn Ask ni Get: wá dátà tí ó lè dáhùn ìbéèrè náà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mímọ dátà rẹ: row, column àti irú",
          minutes: 5,
          goal: "Ka àtẹ dátà kan kí o sì sọ ohun tí column kọ̀ọ̀kan ní àti irú rẹ̀.",
          text: [
            "Ọ̀pọ̀ dátà máa ń wá gẹ́gẹ́ bí àtẹ (table). Dátà tó wà létòlétò (tidy data) túmọ̀ sí pé row kọ̀ọ̀kan jẹ́ nǹkan kan tí o wọ̀n (ìdíje kan, títà kan, ènìyàn kan), column kọ̀ọ̀kan sì jẹ́ òtítọ́ kan nípa rẹ̀ (ọjọ́, iye owó, ẹgbẹ́).",
            "Column ní irú. Nọ́mbà ni o lè fi ṣe ìṣirò, bí iye owó tàbí ìṣẹ́jú. Ẹgbẹ́ (category) jẹ́ àkójọ, bí ọjọ́ ọ̀sẹ̀ tàbí orúkọ ẹgbẹ́: o ń kà wọ́n, ṣùgbọ́n o kì í ṣírò ìpíndọ́gba wọn. Ọjọ́ (date) jẹ́ irú tirẹ̀.",
            "Ìbéèrè tó dára bá dátà tí o ní mu. \"Kí ni ìpíndọ́gba títà ní ọjọ́ Sátidé?\" nílò column iye owó títà àti column ọjọ́. Tí dátà náà kò bá ní i, o kò lè dáhùn rẹ̀, sísọ bẹ́ẹ̀ sì jẹ́ apá kan iṣẹ́ náà."
          ],
          steps: ["Sọ ohun tí row kan dúró fún.", "Kọ column kọ̀ọ̀kan àti ìtumọ̀ rẹ̀.", "Sàmì sí column kọ̀ọ̀kan gẹ́gẹ́ bí nọ́mbà, ẹgbẹ́ tàbí ọjọ́.", "Ṣàyẹ̀wò pé àwọn column wọ̀nyí lè dáhùn ìbéèrè rẹ."],
          words: [["Row", "àkọsílẹ̀ kan: nǹkan kan tí o wọ̀n."], ["Column", "òtítọ́ kan tí a kọ sílẹ̀ fún gbogbo row."], ["Tidy data (dátà létòlétò)", "row kan fún nǹkan kan, column kan fún òtítọ́ kan."], ["Numeric (nọ́mbà)", "column nọ́mbà tí o lè fi ṣe ìṣirò."], ["Categorical (ẹgbẹ́)", "column àwọn àkójọ tàbí orúkọ, bí ọjọ́ tàbí ẹgbẹ́."]],
          slides: [
            { title: "Dátà létòlétò", bullets: ["Row kọ̀ọ̀kan: nǹkan kan tí a wọ̀n", "Column kọ̀ọ̀kan: òtítọ́ kan nípa rẹ̀"] },
            { title: "Irú column", bullets: ["Nọ́mbà: iye owó, ìṣẹ́jú", "Ẹgbẹ́: ọjọ́, ẹgbẹ́ eré", "Ọjọ́ (date)"] },
            { title: "Bá ìbéèrè mu dátà", bullets: ["Ìbéèrè náà nílò column tó tọ́", "Column kò sí = o kò lè dáhùn rẹ̀", "Sọ bẹ́ẹ̀ ní òtítọ́"] }
          ],
          tryIt: "Ṣe àtẹ kékeré ti ọjọ́ 7 tó kọjá: ọjọ́ (date), ọjọ́ ọ̀sẹ̀, wákàtí oorun àti bí inú rẹ ṣe rí láti 1 sí 5. Sàmì sí column kọ̀ọ̀kan gẹ́gẹ́ bí nọ́mbà, ẹgbẹ́ tàbí ọjọ́, kí o sì kọ ìbéèrè kan tí àtẹ náà lè dáhùn àti ọ̀kan tí kò lè dáhùn.",
          youCanNow: "ka àtẹ kan, dárúkọ irú column kọ̀ọ̀kan kí o sì ṣàyẹ̀wò bóyá ìbéèrè kan bá dátà náà mu.",
          quickCheck: [
            { objective: "O2", q: "Kí ni column ẹgbẹ́ (categorical)?", options: ["Column iye owó", "Column ọjọ́ nìkan", "Column àwọn àkójọ, bí orúkọ ẹgbẹ́ tàbí ọjọ́ ọ̀sẹ̀", "Column ìpíndọ́gba"], answer: 2, why: "Ẹgbẹ́ jẹ́ àkójọ tí o ń kà, kì í ṣe èyí tí o ń ṣírò ìpíndọ́gba rẹ̀." },
            { objective: "O2", q: "Àtẹ títà rẹ ní column iye owó àti ọjọ́ ṣùgbọ́n kò ní àkókò ọjọ́ (wákàtí). Ẹnì kan béèrè bóyá òwúrọ̀ ń tà jù. Kí ni o máa sọ?", options: ["Dátà náà kò lè dáhùn ìyẹn, nítorí kò sí column àkókò", "Òwúrọ̀ ń tà jù", "Ṣírò ìpíndọ́gba column ọjọ́", "Fojú díwọ̀n láti inú iye owó"], answer: 0, why: "Tí dátà náà kò bá ní i, o kò lè dáhùn rẹ̀, sísọ bẹ́ẹ̀ sì jẹ́ apá kan iṣẹ́ náà." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ìpíndọ́gba, iye àjèjì àti àìjẹ́ kí a tàn ọ́ jẹ",
          minutes: 6,
          goal: "Ṣírò mean àti median, rí iye àjèjì kan, kí o sì yẹra fún àṣìṣe tí ó wọ́pọ̀.",
          text: [
            "Mean (ìpíndọ́gba) ni àpapọ̀ tí a pín sí iye nǹkan tí ó wà. Median ni iye àárín nígbà tí o bá tò wọ́n. Fún 3, 4, 4, 5 àti 34, mean jẹ́ 50 / 5 = 10, ṣùgbọ́n median jẹ́ 4.",
            "34 yẹn jẹ́ iye àjèjì (outlier): iye tí ó jìnnà sí àwọn yòókù. Ó lè jẹ́ àṣìṣe títẹ̀, tàbí ó lè jẹ́ òótọ́ àti pàtàkì. Iye àjèjì ń fa mean gan-an ṣùgbọ́n kò fi bẹ́ẹ̀ yí median padà, nítorí náà tí iye àjèjì bá wà, median sábà máa ń ṣàpèjúwe iye tí ó wọ́pọ̀ dáadáa ju.",
            "Nígbà tí nǹkan méjì bá ń yí padà papọ̀, a ń pè é ní correlation, ṣùgbọ́n kò fi hàn pé ọ̀kan ló ń fa èkejì. Títà yìnyín ìpara (ice cream) àti ìjóná oòrùn ń pọ̀ sí i ní ìgbà ẹ̀ẹ̀rùn: oòrùn ló ń fa méjèèjì. Kí o tó sọ pé nǹkan kan ló fa òmíì, wá ìdí míì."
          ],
          steps: ["Tò àwọn nọ́mbà náà.", "Mean: ṣírò àpapọ̀ wọn kí o sì pín in sí iye wọn.", "Median: mú èyí tí ó wà láàárín (tàbí ìpíndọ́gba méjì tí ó wà láàárín).", "Wá iye tí ó jìnnà sí àwọn yòókù kí o sì ṣàyẹ̀wò bóyá àṣìṣe ni.", "Kí o tó sọ pé \"X ló ń fa Y\", wá àlàyé míì."],
          words: [["Mean", "ìpíndọ́gba: àpapọ̀ tí a pín sí iye nǹkan."], ["Median", "iye àárín nígbà tí a bá tò àwọn nọ́mbà."], ["Outlier (iye àjèjì)", "iye tí ó jìnnà sí àwọn yòókù."], ["Correlation", "nǹkan méjì tí ó máa ń yí padà papọ̀."], ["Causation (ìdí)", "nǹkan kan tí ó ń mú kí òmíì ṣẹlẹ̀ ní tòótọ́."]],
          slides: [
            { title: "Mean àti median", bullets: ["Mean: àpapọ̀ / iye", "Median: iye àárín lẹ́yìn títò", "3, 4, 4, 5, 34: mean 10, median 4"] },
            { title: "Iye àjèjì (outlier)", bullets: ["Ó jìnnà sí àwọn iye yòókù", "Àṣìṣe títẹ̀, tàbí òótọ́ àti pàtàkì", "Ń fa mean, kì í ṣe median"] },
            { title: "Correlation kì í ṣe ìdí", bullets: ["Yìnyín ìpara àti ìjóná oòrùn ń pọ̀ papọ̀", "Oòrùn ló ń fa méjèèjì", "Wá ìdí míì ná"] }
          ],
          tryIt: "Èyí ni àkókò ìfijíṣẹ́ 7 ní ìṣẹ́jú: 22, 25, 19, 24, 95, 21, 23. Ṣírò mean àti median pẹ̀lú ọwọ́, dárúkọ iye àjèjì náà, kí o sì kọ nọ́mbà tí ó ṣàpèjúwe ìfijíṣẹ́ tí ó wọ́pọ̀ dáadáa jù àti ìdí rẹ̀. (Mean nǹkan bí 32.7, median 23.)",
          youCanNow: "ṣírò mean àti median, rí iye àjèjì kí o sì yẹra fún dída correlation pọ̀ mọ́ ìdí.",
          quickCheck: [
            { objective: "O3", q: "Kí ni mean 2, 4, 6 àti 8?", options: ["5", "4", "6", "20"], answer: 0, why: "2 + 4 + 6 + 8 = 20, 20 / 4 = 5." },
            { objective: "O3", q: "Àkókò ìdúró de bọ́ọ̀sì ní ọ̀sẹ̀ yìí jẹ́ ìṣẹ́jú 5, 6, 5, 7 àti 60. Nọ́mbà wo ni o máa ròyìn gẹ́gẹ́ bí ìdúró tí ó wọ́pọ̀?", options: ["Mean, 16.6", "Èyí tí ó ga jù, 60", "Median, 6", "Àpapọ̀, 83"], answer: 2, why: "60 jẹ́ iye àjèjì tí ó ń fa mean sókè; median ló ń fi ìdúró tí ó wọ́pọ̀ hàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Rírònú bí olùtúpalẹ̀ dátà",
        questions: [
          { objective: "O1", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ iṣẹ́ dátà?", options: ["Ṣe àwòrán àtẹ", "Pa iye àjèjì rẹ́", "Béèrè ìbéèrè tó yé", "Pín èsì náà"], answer: 2, why: "Ìbéèrè tó yé ló ń tọ́ gbogbo ìgbésẹ̀ yòókù sọ́nà." },
          { objective: "O2", q: "Nínú àtẹ àwọn ìdíje, irú column wo ni \"orúkọ ẹgbẹ́\"?", options: ["Ẹgbẹ́ (categorical)", "Nọ́mbà (numeric)", "Ọjọ́ (date)", "Iye àjèjì (outlier)"], answer: 0, why: "Orúkọ ẹgbẹ́ jẹ́ àkójọ, kì í ṣe nọ́mbà." },
          { objective: "O3", q: "Kí ni median 2, 9, 3, 7, 5?", options: ["3", "5", "5.2", "7"], answer: 1, why: "Lẹ́yìn títò: 2, 3, 5, 7, 9. Iye àárín jẹ́ 5." },
          { objective: "O3", q: "Ilé kan nínú àkọsílẹ̀ kan wọ́n ní ìlọ́po mẹ́wàá ju àwọn yòókù lọ. Èwo ló ṣàpèjúwe ilé tí ó wọ́pọ̀ dáadáa jù?", options: ["Mean", "Median", "Iye owó tí ó ga jù", "Àpapọ̀"], answer: 1, why: "Iye àjèjì ńlá kan kì í fi bẹ́ẹ̀ fa median." },
          { objective: "O3", q: "Àwọn ọmọ tí ó ń ṣe eré-ìdárayá púpọ̀ ń ní máàkì tó dára jù. Kí ni o KÒ gbọdọ̀ parí sí lẹ́sẹ̀kẹsẹ̀?", options: ["Pé méjèèjì ń yí padà papọ̀", "Pé eré-ìdárayá ló ń fa máàkì tó dára jù", "Pé dátà púpọ̀ sí i lè ṣèrànwọ́", "Pé ìdí míì lè wà"], answer: 1, why: "Correlation nìkan kò fi ìdí hàn." }
        ]
      }
    },
    {
      name: "Orí 2: Títúpalẹ̀ dátà pẹ̀lú Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkó dátà wọlé àti wíwò ó pẹ̀lú pandas",
          minutes: 5,
          goal: "Kó dátà kan wọlé sínú pandas DataFrame nínú Colab kí o sì ṣàlàyé rẹ̀.",
          text: [
            "pandas jẹ́ library Python ọ̀fẹ́ fún ṣíṣiṣẹ́ pẹ̀lú àtẹ, ó sì ti wà nínú Google Colab tẹ́lẹ̀. A ń pe àtẹ nínú pandas ní DataFrame, a sì sábà máa ń sọ ọ́ ní df.",
            "Fún àṣeṣe, a ń lo dátà gidi ti oúnjẹ 244 láti ilé oúnjẹ kan tí ó wá pẹ̀lú seaborn, library àwòrán àtẹ kan: df = sns.load_dataset(\"tips\"). Ó nílò íńtánẹ́ẹ̀tì, Colab sì ní i. Àwọn column rẹ̀ ní total_bill, tip, day, time (Lunch tàbí Dinner) àti size (iye ènìyàn ní tábìlì). Fún dátà tìrẹ, pd.read_csv(\"file.csv\") ń kó fáìlì CSV tí o gbé sókè wọlé.",
            "Àṣẹ mẹ́rin ń fi ohun tí o ní hàn ọ́: df.head() ń fi row márùn-ún àkọ́kọ́ hàn, df.shape ń fún ọ ní iye row àti column, df.info() ń ṣe àkọsílẹ̀ irú column kọ̀ọ̀kan, df.describe() sì ń fún ọ ní iye (count), mean, min, max àti àwọn míì fún àwọn column nọ́mbà."
          ],
          steps: ["Nínú notebook Colab tuntun, ṣe: import pandas as pd àti import seaborn as sns", "Kó wọlé: df = sns.load_dataset(\"tips\")", "Wò ó: df.head()", "Ìwọ̀n àti irú: df.shape àti df.info()", "Àkópọ̀: df.describe()"],
          words: [["pandas", "library Python ọ̀fẹ́ fún ṣíṣiṣẹ́ pẹ̀lú àtẹ dátà."], ["DataFrame", "àtẹ nínú pandas, pẹ̀lú row àti column tí ó ní orúkọ."], ["CSV", "fáìlì ọ̀rọ̀ lásán ti àtẹ kan, pẹ̀lú àmì kọ́mà láàárín àwọn iye."], ["head()", "ń fi àwọn row àkọ́kọ́ DataFrame hàn."], ["describe()", "ń fún ọ ní nọ́mbà àkópọ̀ fún column nọ́mbà kọ̀ọ̀kan."]],
          slides: [
            { title: "pandas àti DataFrame", bullets: ["pandas: irinṣẹ́ àtẹ Python", "Àtẹ jẹ́ DataFrame, a sábà máa ń pè é ní df", "Ó ti wà nínú Google Colab tẹ́lẹ̀"] },
            { title: "Kó dátà náà wọlé", bullets: ["df = sns.load_dataset(\"tips\")", "Fáìlì tìrẹ: pd.read_csv(\"file.csv\")"] },
            { title: "Wò ó kí o tó túpalẹ̀", bullets: ["df.head(): àwọn row àkọ́kọ́", "df.shape àti df.info(): ìwọ̀n àti irú", "df.describe(): nọ́mbà àkópọ̀"] }
          ],
          sources: [PANDAS, SEABORN, COLAB],
          tryIt: "Kó dátà tips wọlé nínú Colab. Kọ iye row àti column tí ó ní, àwọn column tí ó jẹ́ nọ́mbà àti àwọn tí ó jẹ́ ẹgbẹ́, àti mean àti iye tí ó ga jù (max) ti total_bill láti inú df.describe().",
          youCanNow: "kó dátà wọlé pẹ̀lú pandas kí o sì ṣàlàyé ìwọ̀n rẹ̀, àwọn column rẹ̀ àti nọ́mbà àkópọ̀ rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni df.info() ń fi hàn?", options: ["Àwòrán àtẹ ọ̀pá", "Row àkọ́kọ́ nìkan", "Àwọn iye tí ó sọnù tí a ti kún", "Irú column kọ̀ọ̀kan"], answer: 3, why: "df.info() ń ṣe àkọsílẹ̀ column kọ̀ọ̀kan àti irú rẹ̀." },
            { objective: "O4", q: "O ti gbé fáìlì ẹgbẹ́ rẹ attendance.csv sókè sí Colab. Ìlà wo ni o máa lò láti kó o wọlé?", options: ["sns.load_dataset(\"attendance\")", "df = pd.read_csv(\"attendance.csv\")", "df.head(\"attendance.csv\")", "df.describe(\"attendance.csv\")"], answer: 1, why: "pd.read_csv ń kó fáìlì CSV tí o gbé sókè wọlé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Títún dátà ṣe, ṣíṣẹ́ àti pínpín sí ẹgbẹ́",
          minutes: 6,
          goal: "Ṣàyẹ̀wò iye tí ó sọnù, fi column kan kún un, ṣẹ́ àwọn row kí o sì fi ẹgbẹ́ wéra.",
          text: [
            "Kọ́kọ́ tún un ṣe. df.isna().sum() ń ka iye tí ó sọnù nínú column kọ̀ọ̀kan. Tí àwọn kan bá sọnù, o lè yọ àwọn row yẹn kúrò pẹ̀lú df.dropna() tàbí pinnu bí o ṣe máa kún wọn; kọ ohun tí o ṣe sílẹ̀. Tún ṣàyẹ̀wò iye tí kò ṣeé ṣe, bí owó oúnjẹ tí ó jẹ́ òdì (negative).",
            "Ṣe column tí o nílò. Owó àfikún $5 túmọ̀ sí nǹkan tó yàtọ̀ lórí owó oúnjẹ $20 àti owó oúnjẹ $100, nítorí náà fi ìwọ̀n tó tọ́ kún un: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100.",
            "Ṣẹ́ àwọn row pẹ̀lú condition: df[df[\"time\"] == \"Dinner\"] ń pa oúnjẹ alẹ́ nìkan mọ́. Pín sí ẹgbẹ́ láti fi wéra: df.groupby(\"day\")[\"tip_pct\"].mean() ń fún ọ ní ìpíndọ́gba ìdá-ọgọ́rùn-ún owó àfikún fún ọjọ́ kọ̀ọ̀kan. Tí pandas bá tẹ ìkìlọ̀ aláwọ̀ ofeefee jáde, kà á, ṣùgbọ́n kì í ṣe àṣìṣe (error). .round(1) ń jẹ́ kí àwọn nọ́mbà náà mọ́ dáadáa."
          ],
          steps: ["Ka iye tí ó sọnù: df.isna().sum()", "Fi column kún un: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100", "Ṣẹ́ ẹ: dinners = df[df[\"time\"] == \"Dinner\"]", "Pín sí ẹgbẹ́: df.groupby(\"day\")[\"tip_pct\"].mean().round(1)", "Gbìyànjú ẹgbẹ́ míì, bí time tàbí size."],
          words: [["Missing value (iye tí ó sọnù)", "cell òfo; pandas ń fi hàn gẹ́gẹ́ bí NaN."], ["Cleaning (títún ṣe)", "wíwá àti títún iye tí ó sọnù, tí kò tọ́ tàbí tí kò ṣeé ṣe ṣe."], ["Filter (ṣíṣẹ́)", "pípa àwọn row tí ó bá condition kan mu nìkan mọ́."], ["groupby", "pínpín àwọn row sí ẹgbẹ́ àti ṣíṣe àkópọ̀ ẹgbẹ́ kọ̀ọ̀kan."]],
          slides: [
            { title: "Kọ́kọ́ tún un ṣe", bullets: ["df.isna().sum() ń ka iye tí ó sọnù", "Yọ ọ́ tàbí kún un, kí o sì kọ ohun tí o ṣe sílẹ̀", "Wá iye tí kò ṣeé ṣe"] },
            { title: "Ṣe ìwọ̀n tó tọ́", bullets: ["tip_pct = tip / total_bill * 100", "Ó ń fi owó oúnjẹ ńlá àti kékeré wéra lọ́nà tó tọ́"] },
            { title: "Ṣẹ́ kí o sì pín sí ẹgbẹ́", bullets: ["df[df[\"time\"] == \"Dinner\"]", "df.groupby(\"day\")[\"tip_pct\"].mean()", "Ìkìlọ̀ (warning) kì í ṣe àṣìṣe (error)"] }
          ],
          sources: [PANDAS],
          tryIt: "Ṣàyẹ̀wò dátà tips fún iye tí ó sọnù. Fi column tip_pct kún un. Wá ìpíndọ́gba ìdá-ọgọ́rùn-ún owó àfikún fún ọjọ́ kọ̀ọ̀kan àti fún Lunch àti Dinner. Kọ ọjọ́ tí ó ní ìpíndọ́gba tí ó ga jù sílẹ̀.",
          youCanNow: "ṣàyẹ̀wò dátà fún iye tí ó sọnù, ṣe column tuntun, ṣẹ́ àwọn row kí o sì fi ẹgbẹ́ wéra.",
          quickCheck: [
            { objective: "O5", q: "Kí ni df.dropna() ń ṣe?", options: ["Ó ń fi column tuntun kún un", "Ó ń ka àwọn row", "Ó ń yọ àwọn row tí ó ní iye tí ó sọnù kúrò", "Ó ń ṣe àwòrán àtẹ"], answer: 2, why: "dropna() ń yọ àwọn row tí ó ní iye tí ó sọnù kúrò; kọ ọ́ sílẹ̀ pé o ṣe é." },
            { objective: "O5", q: "O rí owó oúnjẹ -12.00 nínú dátà náà. Kí ni o máa ṣe?", options: ["Kà á sí iye tí kò ṣeé ṣe, tún un ṣe tàbí yọ ọ́ kúrò, kí o sì kọ ohun tí o ṣe sílẹ̀", "Pa á mọ́; owó oúnjẹ òdì jẹ́ ohun tí ó wọ́pọ̀", "Ṣírò ìpíndọ́gba rẹ̀ pẹ̀lú àwọn yòókù bẹ́ẹ̀", "Fi pa mọ́ nínú àwòrán àtẹ"], answer: 0, why: "Ṣíṣàyẹ̀wò iye tí kò ṣeé ṣe bí owó oúnjẹ òdì jẹ́ apá kan títún dátà ṣe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣe àwòrán àtẹ àti pínpín ohun tí o rí ní òtítọ́",
          minutes: 6,
          goal: "Ṣe àwòrán àtẹ ọ̀pá tó yé kí o sì kọ ohun tí o rí tí àwọn ènìyàn lè gbẹ́kẹ̀lé.",
          text: [
            "Àwòrán àtẹ ń fi àpẹẹrẹ hàn kíákíá ju àtẹ lọ. Àwòrán àtẹ ọ̀pá (bar chart) ló dára jù fún fífi ẹgbẹ́ wéra: tip_by_day = df.groupby(\"day\")[\"tip_pct\"].mean() lẹ́yìn náà tip_by_day.plot(kind=\"bar\", title=\"Average tip % by day\"). Fún gbogbo àwòrán àtẹ ní àkọlé kí o sì sọ ìtumọ̀ àwọn nọ́mbà náà.",
            "Kọ ohun tí o rí ní gbólóhùn tó rọrùn pẹ̀lú nọ́mbà: \"Ní ìpíndọ́gba, owó àfikún [ọjọ́] ló ga jù, ní nǹkan bí X ìdá-ọgọ́rùn-ún owó oúnjẹ.\" Lo nọ́mbà tí kóòdù tìrẹ tẹ̀ jáde.",
            "Sọ òtítọ́ nípa ààlà. Sọ iye row tí ẹgbẹ́ kan ní: df[\"day\"].value_counts() ń fi ọjọ́ tí oúnjẹ rẹ̀ kéré hàn, nítorí náà ìpíndọ́gba rẹ̀ kò ṣeé gbẹ́kẹ̀lé tó. Ilé oúnjẹ kan ṣoṣo ni dátà yìí ti wá, nítorí náà ó lè má rí bẹ́ẹ̀ fún àwọn míì. Ó sì ń fi ohun tí ó ṣẹlẹ̀ hàn, kì í ṣe ìdí rẹ̀."
          ],
          steps: ["Ṣe àwọn nọ́mbà ẹgbẹ́ náà.", "Ya àwòrán wọn: .plot(kind=\"bar\", title=\"...\")", "Ṣàyẹ̀wò ìwọ̀n ẹgbẹ́ pẹ̀lú value_counts().", "Kọ ohun mẹ́ta tí o rí pẹ̀lú nọ́mbà gidi.", "Fi ààlà kan kún un: ohun tí dátà náà kò lè sọ fún ọ."],
          words: [["Bar chart (àwòrán àtẹ ọ̀pá)", "àwòrán àtẹ àwọn ọ̀pá tí a fi ń fi ẹgbẹ́ wéra."], ["value_counts()", "ń ka iye row tí ẹgbẹ́ kọ̀ọ̀kan ní."], ["Finding (ohun tí o rí)", "gbólóhùn tó yé nípa ohun tí dátà náà fi hàn, pẹ̀lú nọ́mbà."], ["Limitation (ààlà)", "ohun kan tí dátà rẹ tàbí ìtúpalẹ̀ rẹ kò lè sọ fún ọ."]],
          slides: [
            { title: "Àwòrán àtẹ ọ̀pá ń fi ẹgbẹ́ wéra", bullets: ["groupby, lẹ́yìn náà .plot(kind=\"bar\")", "Máa fi àkọlé kún un nígbà gbogbo"] },
            { title: "Kọ ohun tí o rí lọ́nà tó yé", bullets: ["Gbólóhùn tó rọrùn pẹ̀lú nọ́mbà", "Lo nọ́mbà tí kóòdù rẹ tẹ̀ jáde"] },
            { title: "Sọ òtítọ́ nípa ààlà", bullets: ["Ẹgbẹ́ kékeré kò ṣeé gbẹ́kẹ̀lé tó", "Ilé oúnjẹ kan, kì í ṣe gbogbo ilé oúnjẹ", "Ó ń fi ohun tí ó ṣẹlẹ̀ hàn, kì í ṣe ìdí"] }
          ],
          sources: [PANDAS],
          tryIt: "Iṣẹ́ ìkẹyìn: nínú notebook kan, kó dátà tips wọlé, ṣàyẹ̀wò iye tí ó sọnù, fi tip_pct kún un, wá ìpíndọ́gba ìdá-ọgọ́rùn-ún owó àfikún fún ọjọ́ àti fún time, ṣe àwòrán àtẹ ọ̀pá fún ọ̀kan nínú wọn pẹ̀lú àkọlé, kí o sì kọ ohun mẹ́ta tí o rí pẹ̀lú nọ́mbà, pẹ̀lú ohun kan tí dátà yìí kò lè sọ fún ọ.",
          youCanNow: "sọ dátà kan di àwòrán àtẹ àti ohun tí o rí tí ó jẹ́ òtítọ́, ní ọ̀rọ̀ tó rọrùn.",
          quickCheck: [
            { objective: "O6", q: "Irú àwòrán àtẹ wo ló dára jù fún fífi ẹgbẹ́ wéra, bí àwọn ọjọ́?", options: ["Àwòrán àtẹ pie ti nọ́mbà kan", "Àwòrán àtẹ ọ̀pá", "Àtẹ tí kò ní orúkọ", "Àwòrán àtẹ tí kò ní àkọlé"], answer: 1, why: "Àwòrán àtẹ ọ̀pá ló dára jù fún fífi ẹgbẹ́ wéra." },
            { objective: "O6", q: "Àwòrán àtẹ rẹ fi hàn pé owó àfikún ga jù ní ọjọ́ Sátidé. Kí ni o máa fi kún un kí o tó pín in?", options: ["Ọ̀rọ̀ pé Sátidé ló ń fa owó àfikún ńlá níbi gbogbo", "Kò sí nǹkankan; àwòrán àtẹ ń sọ̀rọ̀ fúnra rẹ̀", "Nọ́mbà tí a ṣe lọ́mọ̀ láti jẹ́ kí ó yé dáadáa", "Àkọlé àti ààlà òtítọ́, bí iye oúnjẹ tí ọjọ́ kọ̀ọ̀kan ní"], answer: 3, why: "Àkọlé àti ààlà òtítọ́ ń ran àwọn ènìyàn lọ́wọ́ láti gbẹ́kẹ̀lé ohun tí o rí kí ó sì yé wọn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Títúpalẹ̀ dátà pẹ̀lú Python",
        questions: [
          { objective: "O4", q: "Nínú pandas, kí ni DataFrame?", options: ["Férémù àwòrán", "Àwòrán àtẹ", "Àṣìṣe Python", "Àtẹ pẹ̀lú row àti column tí ó ní orúkọ"], answer: 3, why: "DataFrame ni àtẹ pandas." },
          { objective: "O5", q: "Àṣẹ wo ló ń ka iye tí ó sọnù nínú column kọ̀ọ̀kan?", options: ["df.isna().sum()", "df.head()", "df.plot()", "df.shape"], answer: 0, why: "isna ń sàmì sí cell tí ó sọnù, sum sì ń kà wọ́n." },
          { objective: "O5", q: "Kí nìdí tí a fi ń fi column ìdá-ọgọ́rùn-ún owó àfikún kún un dípò fífi owó dọ́là àfikún wéra?", options: ["Dọ́là kì í ṣe nọ́mbà", "pandas kò lè lo dọ́là", "Ìdá-ọgọ́rùn-ún ń fi owó oúnjẹ ńlá àti kékeré wéra lọ́nà tó tọ́", "Ó ń jẹ́ kí àtẹ náà kéré"], answer: 2, why: "Ìdá-ọgọ́rùn-ún owó oúnjẹ jẹ́ ìfiwéra tó tọ́." },
          { objective: "O5", q: "Ìlà wo ló ń fún ọ ní ìpíndọ́gba ìdá-ọgọ́rùn-ún owó àfikún fún ọjọ́ kọ̀ọ̀kan?", options: ["df[\"day\"].plot()", "df.mean(\"day\")", "df.head(\"day\")", "df.groupby(\"day\")[\"tip_pct\"].mean()"], answer: 3, why: "groupby ń pín in ní ọjọ́-ọjọ́; mean ń ṣírò ìpíndọ́gba ẹgbẹ́ kọ̀ọ̀kan." },
          { objective: "O6", q: "Ọjọ́ kan ní oúnjẹ 19 péré. Kí ni ìròyìn rẹ gbọdọ̀ sọ?", options: ["Kò sí nǹkankan", "Pé dátà náà kò tọ́", "Pé ìpíndọ́gba rẹ̀ kò ṣeé gbẹ́kẹ̀lé tó nítorí ẹgbẹ́ náà kéré", "Pé ọjọ́ yẹn ló dára jù"], answer: 2, why: "Ẹgbẹ́ kékeré ń jẹ́ kí ìpíndọ́gba má dájú tó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìfihàn sí Sáyẹ́ǹsì Dátà àti Ìtúpalẹ̀ Dátà",
    questions: [
      { objective: "O1", q: "Sáyẹ́ǹsì dátà jẹ́ pàápàá nípa:", options: ["Títún kọ̀mpútà ṣe", "Lílo dátà láti dáhùn ìbéèrè àti láti ṣe ìpinnu", "Títẹ̀ kíákíá", "Kíkọ́ ojú-òpó wẹ́ẹ̀bù"], answer: 1, why: "Ó ń sọ dátà di ìdáhùn." },
      { objective: "O1", q: "Ṣísẹ̀-n-tẹ̀lé wo ló tọ́ fún iṣẹ́ dátà?", options: ["Ask, Get, Clean, Explore, Share", "Share, Ask, Clean, Get, Explore", "Explore, Share, Ask, Get, Clean", "Clean, Share, Get, Ask, Explore"], answer: 0, why: "Bẹ̀rẹ̀ pẹ̀lú ìbéèrè kí o sì parí pẹ̀lú pínpín." },
      { objective: "O2", q: "Nínú dátà létòlétò, row kọ̀ọ̀kan jẹ́:", options: ["Column kan", "Àwòrán àtẹ kan", "Nǹkan kan tí o wọ̀n", "Àpapọ̀ kan"], answer: 2, why: "Row kan fún àkọsílẹ̀ kan." },
      { objective: "O2", q: "Column wo ló jẹ́ nọ́mbà (numeric)?", options: ["Ìṣẹ́jú tí a fi ṣeré", "Orúkọ ẹgbẹ́", "Ọjọ́ ọ̀sẹ̀", "Ìlú"], answer: 0, why: "O lè fi ìṣẹ́jú ṣe ìṣirò." },
      { objective: "O2", q: "Dátà rẹ kò ní column kankan nípa ojú ọjọ́. Ṣé o lè dáhùn \"Ṣé àwọn ènìyàn ń fún ni ní owó àfikún jù nígbà tí òjò bá ń rọ̀?\"", options: ["Bẹ́ẹ̀ni, kàn fojú díwọ̀n", "Bẹ́ẹ̀ni, lo mean", "Bẹ́ẹ̀ni, lo àwòrán àtẹ", "Rárá, o sì gbọdọ̀ sọ bẹ́ẹ̀"], answer: 3, why: "Ìbéèrè nílò dátà tí ó bò ó." },
      { objective: "O3", q: "Kí ni mean 4, 6 àti 8?", options: ["4", "6", "8", "18"], answer: 1, why: "18 / 3 = 6." },
      { objective: "O3", q: "Kí ni median 1, 3, 3, 9, 50?", options: ["3", "9", "13.2", "50"], answer: 0, why: "Iye àárín lẹ́yìn títò jẹ́ 3." },
      { objective: "O3", q: "Iye àjèjì (outlier) jẹ́:", options: ["Median", "Column tí ó sọnù", "Àkọlé àwòrán àtẹ", "Iye tí ó jìnnà sí àwọn yòókù"], answer: 3, why: "Iye àjèjì dá yàtọ̀ sí àwọn yòókù." },
      { objective: "O3", q: "Iye àjèjì ń fa nọ́mbà wo jù?", options: ["Mean", "Median", "Iye row", "Kò sí èyíkéyìí"], answer: 0, why: "Mean ń lo gbogbo iye, nítorí náà àwọn iye tí ó ga jù tàbí kéré jù ń yí i padà." },
      { objective: "O3", q: "Títà agboòrùn àti ìjàmbá ọkọ̀ ń pọ̀ sí i ní ọjọ́ òjò. Èyí fi hàn pé:", options: ["Agboòrùn ló ń fa ìjàmbá", "Ìjàmbá ló ń fa títà agboòrùn", "Correlation, tí òjò ló ṣeé ṣe kí ó fà á", "Kò fi nǹkankan hàn rárá"], answer: 2, why: "Nǹkan kẹta, òjò, ló ń fa méjèèjì." },
      { objective: "O4", q: "pandas jẹ́:", options: ["Ìṣàfilọ́lẹ̀ spreadsheet tí a ń sanwó fún", "Irú àwòrán àtẹ kan", "Ojú-òpó wẹ́ẹ̀bù kan", "Library Python ọ̀fẹ́ fún àtẹ dátà"], answer: 3, why: "pandas ń ṣiṣẹ́ pẹ̀lú DataFrame nínú Python." },
      { objective: "O4", q: "Àṣẹ wo ló ń fi row márùn-ún àkọ́kọ́ hàn?", options: ["df.tail(0)", "df.shape", "df.head()", "df.sum()"], answer: 2, why: "head ń fi àwọn row òkè hàn." },
      { objective: "O4", q: "df.shape dá (244, 7) padà. Kí ni ìyẹn túmọ̀ sí?", options: ["Column 244 àti row 7", "Row 244 àti column 7", "Iye 244 tí ó sọnù", "Àwòrán àtẹ 7"], answer: 1, why: "shape jẹ́ row, lẹ́yìn náà column." },
      { objective: "O4", q: "Èwo ló ń kó fáìlì CSV tìrẹ wọlé?", options: ["pd.read_csv(\"file.csv\")", "df.head(\"file.csv\")", "sns.plot(\"file.csv\")", "print(\"file.csv\")"], answer: 0, why: "read_csv ń ka CSV sínú DataFrame." },
      { objective: "O4", q: "df.describe() ń fún ọ ní:", options: ["Àwòrán àtẹ ọ̀pá", "Orúkọ fáìlì", "Nọ́mbà àkópọ̀ bíi mean, min àti max", "Àtúnṣe iye tí ó sọnù"], answer: 2, why: "describe ń ṣe àkópọ̀ àwọn column nọ́mbà." },
      { objective: "O5", q: "Èwo ló ń pa àwọn row oúnjẹ alẹ́ nìkan mọ́?", options: ["df[df[\"time\"] == \"Dinner\"]", "df[\"Dinner\"]", "df.dinner()", "df.drop(\"Dinner\")"], answer: 0, why: "Condition inú df[ ] ló ń ṣẹ́ àwọn row." },
      { objective: "O5", q: "O rí iye tí ó sọnù o sì yọ àwọn row yẹn kúrò. Kí ni ohun míì tí o gbọdọ̀ ṣe?", options: ["Fi pa mọ́", "Pa gbogbo dátà náà rẹ́", "Kò sí nǹkankan", "Kọ ohun tí o ṣe sílẹ̀"], answer: 3, why: "Kíkọ àwọn ìgbésẹ̀ àtúnṣe sílẹ̀ ń jẹ́ kí ìtúpalẹ̀ náà jẹ́ òtítọ́." },
      { objective: "O6", q: "Àwòrán àtẹ wo ló dára jù fún fífi ìpíndọ́gba àwọn ọjọ́ wéra?", options: ["Fọ́tò", "Àwòrán àtẹ ọ̀pá", "Nọ́mbà kan ṣoṣo", "Àwọsánmà ọ̀rọ̀ (word cloud)"], answer: 1, why: "Ọ̀pá ń fi ẹgbẹ́ wéra lọ́nà tó yé." },
      { objective: "O6", q: "Èwo ni ohun tí o rí tí a kọ dáadáa?", options: ["\"Owó àfikún dára.\"", "\"Títà ìparí ọ̀sẹ̀ jẹ́ $420 lójúmọ́ ní ìpíndọ́gba, nǹkan bí 30% ju àwọn ọjọ́ iṣẹ́ lọ.\"", "\"Dátà fi nǹkan hàn.\"", "\"Ìparí ọ̀sẹ̀ ló dára jù nítorí inú àwọn ènìyàn ń dùn.\""], answer: 1, why: "Ó ṣe kedere, ó lo nọ́mbà, kò sì sọ ìdí tí kò lè fi hàn." },
      { objective: "O6", q: "Ilé oúnjẹ kan ṣoṣo ni dátà tips yìí ti wá. Kí ni ààlà tó tọ́ láti sọ?", options: ["Èsì náà kan ibi gbogbo", "Dátà náà jẹ́ èké", "Kò sí ààlà kankan", "Èsì náà lè má kan àwọn ilé oúnjẹ míì"], answer: 3, why: "Orísun kan kò lè sọ̀rọ̀ fún gbogbo ilé oúnjẹ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      3,
      4,
      6,
      8,
      9,
      11,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Kíkó dátà wọlé àti ṣíṣàyẹ̀wò rẹ̀",
        objective: "O4",
        notYet: "Dátà náà kò wọlé, tàbí a kò ṣàyẹ̀wò iye tí ó sọnù.",
        meets: "A ti kó dátà tips wọlé, a ṣàlàyé rẹ̀, a sì ṣàyẹ̀wò iye tí ó sọnù.",
        exceeds: "Ó tún kọ iye row àti irú column kọ̀ọ̀kan tí a lò sílẹ̀."
      },
      {
        name: "Column ìdá-ọgọ́rùn-ún owó àfikún",
        objective: "O5",
        notYet: "Kò sí column ìdá-ọgọ́rùn-ún owó àfikún, tàbí a ṣírò rẹ̀ lọ́nà tí kò tọ́.",
        meets: "Column tip_pct tí ó dọ́gba pẹ̀lú tip tí a pín sí total_bill tí a sì fi 100 sọdipúpọ̀.",
        exceeds: "Ó tún ṣàyẹ̀wò iye tí kò ṣeé ṣe bí owó oúnjẹ òdì."
      },
      {
        name: "Ìpíndọ́gba ẹgbẹ́",
        objective: "O5",
        notYet: "Ìfiwéra kan ṣoṣo, tàbí ìpíndọ́gba náà kò tọ́.",
        meets: "Ìpíndọ́gba ìdá-ọgọ́rùn-ún owó àfikún fún ọjọ́ kọ̀ọ̀kan àti fún oúnjẹ ọ̀sán àti alẹ́, tí a ti ṣe ní ìyípo (rounded).",
        exceeds: "Ó tún fi iye oúnjẹ tí ó wà nínú ẹgbẹ́ kọ̀ọ̀kan hàn."
      },
      {
        name: "Àwòrán àtẹ ọ̀pá",
        objective: "O6",
        notYet: "Kò sí àwòrán àtẹ, tàbí àwòrán àtẹ náà kò ní àkọlé.",
        meets: "Àwòrán àtẹ ọ̀pá ti ìfiwéra kan pẹ̀lú àkọlé tó yé.",
        exceeds: "Orúkọ ìlà ìdíwọ̀n (axis) tàbí àkíyèsí kan sọ ìtumọ̀ àwọn nọ́mbà náà."
      },
      {
        name: "Ohun tí o rí ní òtítọ́",
        objective: "O6",
        notYet: "Ohun tí o rí kò tó mẹ́ta, tàbí a kò sọ ààlà kankan.",
        meets: "Ohun mẹ́ta tí o rí ní ọ̀rọ̀ tó rọrùn pẹ̀lú nọ́mbà láti inú èsì, pẹ̀lú ohun kan tí dátà náà kò lè sọ fún ọ.",
        exceeds: "Ó tún yẹra fún sísọ ìdí, ó sì mẹ́nu ba àwọn ẹgbẹ́ kékeré níbi tí ó ti ṣe pàtàkì."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ìtúpalẹ̀ dátà tips",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé wọ́n túpalẹ̀ dátà tiwọn, bíi fún ẹgbẹ́ eré, ẹgbẹ́ àjọ, kíláàsì tàbí iṣẹ́, láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà (ìwádìí ìtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀ síwájú sí ẹ̀kọ́ míì, bí \"Ìfihàn sí Machine Learning (Ẹ̀kọ́ Ẹ̀rọ)\"",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi notebook náà kún àkójọ iṣẹ́ wọn (portfolio) tàbí lò ó nínú ìbéèrè fún iṣẹ́ tàbí ètò dátà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí laptop pẹ̀lú browser wẹ́ẹ̀bù àti íńtánẹ́ẹ̀tì",
      "Àkáǹtì Google ọ̀fẹ́ láti lo Google Colab",
      "Ìwé àti gègé láti kọ ìbéèrè náà àti ohun tí o rí",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, pẹ̀lú àkókò àṣeṣe"
    ],
    facilitatorNotes: [
      "Bẹ̀rẹ̀ pẹ̀lú ìbéèrè kan tí ó jẹ àwọn akẹ́kọ̀ọ́ lógún, bí àbájáde ẹgbẹ́ eré kan tàbí iye ènìyàn tí ó ń wá sí ẹgbẹ́ àjọ kan, kí ẹ tó ṣí kóòdù kankan.",
      "Ẹ jọ ṣírò mean àti median àkọsílẹ̀ kékeré kan pẹ̀lú ọwọ́ kí ẹ tó lo pandas.",
      "Dátà tips ń wọlé láti íńtánẹ́ẹ̀tì; dán an wò lórí nẹ́tíwọ́ọ̀kì yín ṣáájú kíláàsì kí o sì ní ẹ̀dà CSV rẹ̀ sílẹ̀.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ ka ohun tí ara wọn rí kí wọ́n sì tọ́ka sí ọ̀rọ̀ ìdí èyíkéyìí tàbí ààlà tí ó kù.",
      "Tí àwọn akẹ́kọ̀ọ́ bá mú dátà tiwọn wá, ṣàyẹ̀wò pé kò ní ìsọfúnni àṣírí nípa àwọn ènìyàn gidi kí wọ́n tó gbé e sókè."
    ]
  }
};
