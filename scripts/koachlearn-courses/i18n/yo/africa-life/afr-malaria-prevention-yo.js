"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-malaria-prevention.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WHO_MALARIA = { name: "World Health Organization (WHO, Àjọ Ìlera Àgbáyé): Ìwé òtítọ́ nípa ibà (bí ó ṣe ń tàn, àwọn àmì, àmì ewu, àwọ̀n ẹ̀fọn, fífín oògùn, oògùn ìdènà, abẹ́rẹ́ àjẹsára, àyẹ̀wò)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" };
const CDC_MALARIA = { name: "CDC: Nípa ibà (ẹ̀fọn ń jẹni ní alẹ́, àwọn àmì, wá ìtọ́jú kíákíá)", url: "https://www.cdc.gov/malaria/about/index.html" };
const WHO_WATER = { name: "World Health Organization (WHO): Ìwé òtítọ́ nípa omi mímu (ìkòkò àti agbada omi ilé lè di ibi tí ẹ̀fọn ń pamọ sí; ẹ bò wọ́n)", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };

module.exports = {
  id: "afr-malaria-prevention-yo",
  lang: "yo",
  translationOf: "afr-malaria-prevention",
  category: "Africa: Life and Work",
  name: "Dídènà Ibà (Malaria) nínú Ìdílé Rẹ",
  skills: "Mímọ bí ibà ṣe ń tàn àti ẹni tí ó wà nínú ewu, Lílo àwọ̀n ẹ̀fọn tí a fi oògùn sí lálẹ́ ọjọ́ kọ̀ọ̀kan, Dídín ẹ̀fọn kù ní àyíká ilé, Lílo iṣẹ́ ilé-ìwòsàn fún aboyún àti ọmọdé, Ṣíṣe àyẹ̀wò fún gbogbo ara gbígbóná ní ọjọ́ kan náà, Dídá àwọn àmì ewu ibà líle mọ̀",
  outcome: "dáàbò bo ìdílé rẹ lọ́wọ́ ibà: sùn sábẹ́ àwọ̀n ẹ̀fọn tí a fi oògùn sí ní gbogbo alẹ́, dín ẹ̀fọn kù ní àyíká ilé rẹ, lo iṣẹ́ ilé-ìwòsàn fún aboyún àti ọmọdé, ṣe àyẹ̀wò fún gbogbo ara gbígbóná ní ọjọ́ kan náà, kí o sì dá àwọn àmì ewu tí ó túmọ̀ sí pé kí o lọ sí ilé-ìwòsàn báyìí mọ̀.",
  about: [
    "Ìjẹ ẹ̀fọn ni ó ń tan ibà (malaria), Áfíríkà sì ni ó ní èyí tí ó pọ̀ jù lára àwọn tí ó ń ṣe àti àwọn tí ó ń kú lágbàáyé. WHO sọ pé ní 2024, Agbègbè Áfíríkà ti WHO ní nǹkan bí 95% àwọn tí ibà ṣe àti àwọn tí ó kú nípa rẹ̀ lágbàáyé, àti pé ọmọdé tí kò tíì pé ọdún 5 jẹ́ nǹkan bí mẹ́ta nínú mẹ́rin àwọn tí ó kú níbẹ̀. A lè dènà ibà, a sì lè tọ́jú rẹ̀ tí a bá tètè rí i. Ẹ̀kọ́ yìí wà fún àwọn ìyá, bàbá, bàbá àgbà àti ìyá àgbà, olùtọ́jú àti ọ̀dọ́ ní Nàìjíríà, DR Congo, Kenya, Ghana, Burkina Faso, Mali, Cameroon àti káàkiri Áfíríkà.",
    "O máa kọ́ bí ibà ṣe ń tàn àti ẹni tí ó wà nínú ewu jù, bí a ṣe ń ta àwọ̀n ẹ̀fọn tí a fi oògùn sí àti bí a ṣe ń tọ́jú rẹ̀, bí a ṣe ń dín ibi tí ẹ̀fọn ń pamọ sí àti ibi tí wọ́n ti ń jẹni kù ní àyíká ilé rẹ, iṣẹ́ ilé-ìwòsàn tí ó ń dáàbò bo aboyún àti ọmọdé, bí a ṣe ń ṣe àyẹ̀wò fún gbogbo ara gbígbóná ní ọjọ́ kan náà, àti bí a ṣe ń dá àwọn àmì ewu ibà líle mọ̀.",
    "Ẹ̀kọ́ yìí ń kọ́ni ní ìdènà àti ìgbà tí a gbọ́dọ̀ wá ìrànlọ́wọ́. Kò sọ oògùn tí o máa lò tàbí iye rẹ̀: òṣìṣẹ́ ìlera nìkan ló lè ṣe àyẹ̀wò ibà kí ó sì pinnu ìtọ́jú. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Gbogbo wọn papọ̀ ló máa kọ́ ètò ìdènà ibà ilé rẹ."
  ],
  finalTask: "Kọ ètò ìdènà ibà ilé rẹ sórí ojú-ìwé kan: ta ni ó wà nínú ewu jù nínú ilé rẹ; àwọ̀n ẹ̀fọn mélòó ni o ní àti mélòó ni o nílò, ibi tí ẹnì kọ̀ọ̀kan ti ń sùn sábẹ́ ọ̀kan, àti bí o ṣe máa tọ́jú wọn; nǹkan mẹ́ta tí o máa ṣe láti dín ẹ̀fọn kù ní àyíká ilé rẹ; àwọn ìgbà tí aboyún tàbí ọmọdé èyíkéyìí máa lọ sí ilé-ìwòsàn; ohun tí o máa ṣe ní ọjọ́ kan náà tí ara ẹnikẹ́ni bá gbóná; àti káàdì àmì ewu tí ó ní orúkọ àti nọ́mbà ilé-ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò tí ó sún mọ́ ọ jù.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ìyá, bàbá, bàbá àgbà àti ìyá àgbà, olùtọ́jú àti ọ̀dọ́ káàkiri Áfíríkà, pàápàá ní àwọn agbègbè tí ibà pọ̀ sí, ní abúlé, ìlú àti àdúgbò tí kò ní ètò. Ọ̀pọ̀ lára wọn ti ní ibà rí, wọ́n sì ń tọ́jú ọmọdé tàbí aboyún nínú ìdílé wọn.",
    startingPoint: "Wọ́n mọ̀ pé ẹ̀fọn ló ń fa ibà, ọ̀pọ̀ sì ní àwọ̀n ẹ̀fọn. Ṣùgbọ́n wọn kì í sábà lo àwọ̀n náà ní gbogbo alẹ́ tàbí fún gbogbo ènìyàn, àwọ̀n ní ihò, omi tí kò ṣàn wà ní àyíká ilé, wọ́n ń tọ́jú ara gbígbóná nílé pẹ̀lú oògùn àṣẹ́kù tàbí oògùn ọjà láìṣe àyẹ̀wò, wọn kì í sì í rí àwọn àmì ewu títí yóò fi pẹ́ jù.",
    gap: "Ibà ṣì ń pa ọ̀pọ̀ ọmọdé, ó sì ń pa aboyún àti ọmọ inú wọn lára. Àwọn ìdílé nílò àṣà ojoojúmọ́ tó rọrùn (àwọ̀n ẹ̀fọn ní gbogbo alẹ́, ẹ̀fọn díẹ̀) àti ìgbésẹ̀ kíákíá (àyẹ̀wò fún gbogbo ara gbígbóná, ilé-ìwòsàn lẹ́sẹ̀kẹsẹ̀ fún àmì ewu) láti dènà ikú. Àwọn àṣà wọ̀nyí jẹ́ ọ̀fẹ́ tàbí wọn kò wọ́n, wọ́n sì ń ṣiṣẹ́ dáadáa jù tí a bá ṣe wọ́n papọ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń sọ èdè Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì",
      "Ẹ̀rọ: fóònù lásán tí dátà rẹ̀ wọ́n; àwọn ẹ̀kọ́ ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì lẹ́yìn tí wọ́n bá ti wọlé",
      "Owó: owó kò pọ̀; ọ̀pọ̀ àwọ̀n ẹ̀fọn, àyẹ̀wò àti iṣẹ́ jẹ́ ọ̀fẹ́ tàbí wọn kò wọ́n ní ilé-ìwòsàn àti nínú ètò ìjọba, ṣùgbọ́n èyí yàtọ̀ láti ibì kan sí ibòmíì",
      "Ìlera: ìdènà àti àmì ìkìlọ̀ nìkan; kò sí orúkọ oògùn fún ìtọ́jú ara ẹni, kò sí iye oògùn, kò sí ètò ìtọ́jú, kò sí ìwádìí àìsàn; àwọn akẹ́kọ̀ọ́ ń tẹ̀lé ilé-ìwòsàn wọn, òṣìṣẹ́ ìlera àdúgbò àti ilé-iṣẹ́ ìjọba fún ìlera",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá iṣẹ́ ilé àti iṣẹ́ mu"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Nínú ilé tìrẹ", action: "ṣàlàyé bí ibà ṣe ń tàn kí o sì kọ àwọn tí ó wà nínú ewu jù nínú ilé rẹ sílẹ̀", standard: "tí o dárúkọ ìjẹ ẹ̀fọn ní alẹ́, tí o sì dárúkọ ọmọdé àti aboyún" },
    { id: "O2", condition: "Tí o bá ní àwọ̀n ẹ̀fọn tí a fi oògùn sí àti ibi tí ìdílé rẹ ń sùn", action: "ta àwọ̀n náà, ki etí rẹ̀ bọ abẹ́ ibùsùn, kí o sì dí ihò èyíkéyìí", standard: "kí gbogbo ènìyàn, bẹ̀rẹ̀ láti ọmọdé àti aboyún, máa sùn sábẹ́ àwọ̀n ní gbogbo alẹ́" },
    { id: "O3", condition: "Ní àyíká ilé rẹ", action: "kó tàbí bo àwọn ibi tí ẹ̀fọn ń pamọ sí kúrò, kí o sì dí ọ̀nà tí wọ́n fi ń wọ ilé", standard: "tí o ṣe ó kéré tán nǹkan mẹ́ta láàárín ọ̀sẹ̀ kan" },
    { id: "O4", condition: "Tí aboyún tàbí ọmọdé bá wà nínú ìdílé rẹ", action: "kọ iṣẹ́ ìdènà ibà tí ilé-ìwòsàn rẹ ń fún wọn sílẹ̀ kí o sì ṣètò ìgbà tí ẹ máa lọ", standard: "tí o dárúkọ lílọ fún ìtọ́jú aboyún ní kùtùkùtù, tí o sì béèrè nípa abẹ́rẹ́ àjẹsára àti oògùn ìdènà níbi tí wọ́n bá wà" },
    { id: "O5", condition: "Tí ara ẹnì kan nínú ìdílé rẹ bá gbóná ní agbègbè tí ibà wà", action: "mú ẹni náà lọ fún àyẹ̀wò ibà ní ọjọ́ kan náà kí o sì tẹ̀lé ìtọ́jú òṣìṣẹ́ ìlera", standard: "láìlo oògùn àṣẹ́kù tàbí oògùn tí o kò mọ̀ láéláé, láìsì dá ìtọ́jú dúró ní ààbọ̀" },
    { id: "O6", condition: "Tí ẹnì kan nínú ìdílé rẹ bá ń ṣàìsàn", action: "dá àwọn àmì ewu ibà líle mọ̀ kí o sì gbé ẹni náà lọ sí ilé-ìwòsàn lẹ́sẹ̀kẹsẹ̀", standard: "tí o dárúkọ ó kéré tán àmì ewu mẹ́rin àti ilé-ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò tí ó sún mọ́ ọ jù" }
  ],
  chapters: [
    {
      name: "Orí 1: Dídá ìjẹ ẹ̀fọn dúró",
      lessons: [
        {
          title: "Bí ibà ṣe ń tàn àti ẹni tí ó wà nínú ewu jù",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ṣàlàyé bí ibà ṣe ń tàn kí o sì kọ àwọn tí ó wà nínú ewu jù nínú ilé rẹ sílẹ̀.",
          text: [
            "Kòkòrò àfòmọ́ kékeré kan ló ń fa ibà (malaria). Ìjẹ àwọn ẹ̀fọn abo kan (Anopheles) ló ń tàn án. Ẹ̀fọn kan jẹ ẹni tí ó ní ibà, lẹ́yìn náà ó jẹ ẹlòmíì, ó sì kó o ràn án. Kì í ràn láti ọ̀dọ̀ ènìyàn kan sí òmíràn nípa fífọwọ́kanni, oúnjẹ tàbí afẹ́fẹ́.",
            "Àwọn ẹ̀fọn wọ̀nyí máa ń jẹni jù ní ìrọ̀lẹ́ alẹ́ àti ní òru, nígbà tí àwọn ènìyàn bá ń sùn. Àwọn àmì ibà sábà máa ń bẹ̀rẹ̀ ní ọjọ́ 10 sí 15 lẹ́yìn ìjẹ náà, pẹ̀lú ara gbígbóná, òtútù àti ẹ̀fọ́rí.",
            "WHO sọ pé àwọn tí ó wà nínú ewu ibà líle jù ni ọmọ ọwọ́ àti ọmọdé tí kò tíì pé ọdún 5, aboyún, àwọn tí ó ní HIV, àti àwọn arìnrìn-àjò tí ó wá láti ibi tí kò sí ibà. Ní Áfíríkà, ọmọdé ni èyí tí ó pọ̀ jù lára àwọn tí ibà ń pa. WHO ròyìn pé Nàìjíríà àti DR Congo nìkan ní ju 40% àwọn tí ibà pa ní agbègbè náà ní 2024. Ní ọ̀pọ̀ ibi ní Àríwá Áfíríkà, ibà kò wọ́pọ̀, ṣùgbọ́n àwọn ará Morocco, Egypt tàbí Tunisia tí wọ́n bá rìnrìn-àjò lọ sí agbègbè tí ibà wà wà nínú ewu ńlá, wọ́n sì gbọ́dọ̀ rí òṣìṣẹ́ ìlera kí wọ́n tó lọ."
          ],
          words: [["Kòkòrò àfòmọ́ (parasite)", "ohun alààyè kékeré tí ó ń gbé inú ara míì tí ó sì ń pa á lára."], ["Anopheles", "irú ẹ̀fọn tí ó ń tan ibà."], ["Nínú ewu", "ó ṣeé ṣe jù kí ó ṣàìsàn tàbí kí ó ṣàìsàn gan-an."]],
          slides: [
            { title: "Bí ibà ṣe ń tàn", bullets: ["Kòkòrò àfòmọ́ tí ẹ̀fọn Anopheles ń gbé kiri", "Ó jẹ aláìsàn, lẹ́yìn náà ó jẹ ẹni tó kàn", "Kì í ṣe nípa fífọwọ́kanni, oúnjẹ tàbí afẹ́fẹ́"] },
            { title: "Ìgbà tí wọ́n ń jẹni", bullets: ["Ìrọ̀lẹ́ alẹ́ àti òru jù", "Àwọn àmì ń bẹ̀rẹ̀ ní ọjọ́ 10 sí 15 lẹ́yìn ìjẹ náà", "Ara gbígbóná, òtútù, ẹ̀fọ́rí"] },
            { title: "Àwọn tí ó wà nínú ewu jù", bullets: ["Ọmọ ọwọ́ àti ọmọdé tí kò tíì pé ọdún 5", "Aboyún", "Àwọn tí ó ní HIV; arìnrìn-àjò láti ibi tí kò sí ibà"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Kọ orúkọ gbogbo ẹni tí ó ń sùn nínú ilé rẹ. Fa òbìrìkìtì yí àwọn tí ó wà nínú ewu jù ká: ọmọdé tí kò tíì pé ọdún 5, aboyún èyíkéyìí, ẹnikẹ́ni tí ó ní HIV, àti àlejò láti ibi tí kò sí ibà.",
          youCanNow: "ṣàlàyé bí ibà ṣe ń tàn kí o sì sọ ẹni tí ó wà nínú ewu jù nínú ilé rẹ.",
          quickCheck: [
            { objective: "O1", q: "Báwo ni ibà ṣe ń tàn?", options: ["Nípa bíbọ ọwọ́", "Nípa ìjẹ àwọn ẹ̀fọn kan", "Nípa jíjẹ máńgòrò", "Nípa òjò tútù"], answer: 1, why: "Ìjẹ ẹ̀fọn Anopheles tí ó ní kòkòrò ibà ló ń tàn án, kì í ṣe fífọwọ́kanni, oúnjẹ tàbí ojú ọjọ́." },
            { objective: "O1", q: "Ta ni ó wà nínú ewu ibà líle jù nínú ìdílé?", options: ["Ọmọdé tí kò tíì pé ọdún 5 àti aboyún", "Ọmọkùnrin ọ̀dọ́ nìkan", "Bàbá àgbà àti ìyá àgbà nìkan", "Kò sí ẹni tí ewu rẹ̀ pọ̀ jù"], answer: 0, why: "WHO dárúkọ ọmọdé àti aboyún lára àwọn tí ó wà nínú ewu jù." }
          ]
        },
        {
          title: "Àwọ̀n ẹ̀fọn tí a fi oògùn sí ní gbogbo alẹ́",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ta àwọ̀n ẹ̀fọn tí a fi oògùn sí, ki etí rẹ̀ bọ abẹ́ ibùsùn, kí o sì dí ihò èyíkéyìí.",
          text: [
            "Àwọ̀n ẹ̀fọn tí a fi oògùn apakòkòrò sí (tí a sábà máa ń pè ní ITN tàbí àwọ̀n tí ó ń pẹ́) jẹ́ ọ̀kan lára àwọn ọ̀nà pàtàkì tí WHO dámọ̀ràn láti dènà ibà. Àwọ̀n náà ń dá ẹ̀fọn dúró kí wọ́n má dé ọ̀dọ̀ rẹ nígbà tí o bá ń sùn, oògùn apakòkòrò rẹ̀ sì ń pa tàbí sọ àwọn tí ó bà lé e di aláìlágbára. WHO sọ pé àwọn irú àwọ̀n tuntun ń dáàbò bò ní ibi tí oògùn àtijọ́ kò ti pa ẹ̀fọn mọ́.",
            "Àwọ̀n ń ṣiṣẹ́ kìkì tí a bá ń lò ó ní gbogbo alẹ́, ní gbogbo ọdún, kì í ṣe ní ìgbà òjò nìkan. Ta á sórí ibùsùn tàbí ẹní kí ó dé ilẹ̀, ki etí rẹ̀ bọ abẹ́ mátírẹ́ẹ̀sì tàbí ẹní kí ilẹ̀ tó ṣú, kí o sì wọlé láìfi àlàfo sílẹ̀. Tí àwọ̀n kò bá tó fún gbogbo ènìyàn, ọmọdé àti aboyún ni kí wọ́n kọ́kọ́ sùn sábẹ́ ọ̀kan, lẹ́yìn náà wá àwọ̀n fún àwọn yòókù.",
            "Tọ́jú rẹ̀: wo ó fún ihò ní ọ̀sẹ̀ kọ̀ọ̀kan, kí o sì rán an tàbí so ó pa lẹ́sẹ̀kẹsẹ̀. Fọ̀ ọ́ jẹ́jẹ́, má sì fọ̀ ọ́ ní gbogbo ìgbà, kí o sì sá a sí ibòji, gẹ́gẹ́ bí ìtọ́ni inú páálí tàbí ti òṣìṣẹ́ ìlera rẹ. Má ṣe lo àwọ̀n fún pípa ẹja, ọgbà tàbí oko ẹ̀fọ́. Ọ̀pọ̀ ètò ìjọba ń fún ni ní àwọ̀n lọ́fẹ̀ẹ́ ní ilé-ìwòsàn, nígbà ìtọ́jú aboyún, ní ilé-ìwé tàbí nígbà ìpolongo: béèrè lọ́wọ́ ilé-ìwòsàn rẹ tàbí òṣìṣẹ́ ìlera àdúgbò."
          ],
          steps: ["Ta àwọ̀n sórí ibùsùn tàbí ẹní kí ó dé ilẹ̀.", "Ki etí rẹ̀ bọ abẹ́ mátírẹ́ẹ̀sì tàbí ẹní kí ilẹ̀ tó ṣú.", "Wọlé láìfi àlàfo sílẹ̀, ní gbogbo alẹ́.", "Wo ó fún ihò ní ọ̀sẹ̀ kọ̀ọ̀kan kí o sì dí wọn lẹ́sẹ̀kẹsẹ̀.", "Fọ̀ ọ́ jẹ́jẹ́, má fọ̀ ọ́ ní gbogbo ìgbà, kí o sì sá a sí ibòji.", "Béèrè lọ́wọ́ ilé-ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò nípa àwọ̀n ọ̀fẹ́."],
          words: [["Oògùn apakòkòrò (insecticide)", "kẹ́míkà tí ó ń pa kòkòrò."], ["ITN (àwọ̀n tí a fi oògùn apakòkòrò sí)", "àwọ̀n ẹ̀fọn tí a fi oògùn apakòkòrò sí láti lé ẹ̀fọn sẹ́yìn kí ó sì pa wọ́n."], ["Ìpolongo (campaign)", "ìgbà tí àwọn òṣìṣẹ́ ìlera ń pín àwọ̀n tàbí iṣẹ́ ìlera fún ọ̀pọ̀ ènìyàn."]],
          slides: [
            { title: "Ìdí tí àwọ̀n tí a fi oògùn sí fi ń ṣiṣẹ́", bullets: ["Ó ń dá ẹ̀fọn dúró nígbà tí o bá ń sùn", "Oògùn apakòkòrò ń pa wọ́n tàbí sọ wọ́n di aláìlágbára", "Ọ̀kan lára àwọn ọ̀nà pàtàkì tí WHO fi ń dènà ibà"] },
            { title: "Ní gbogbo alẹ́, ní gbogbo ọdún", bullets: ["Àwọ̀n dé ilẹ̀", "A ki í bọ abẹ́ kí ilẹ̀ tó ṣú, láìsí àlàfo", "Àwọ̀n kò tó? Ọmọdé àti aboyún ni wọ́n kọ́kọ́"] },
            { title: "Tọ́jú rẹ̀", bullets: ["Wo ó fún ihò ní ọ̀sẹ̀ kọ̀ọ̀kan; dí wọn", "Fọ̀ ọ́ jẹ́jẹ́, kì í ṣe ní gbogbo ìgbà; sá a sí ibòji", "Má lò ó fún pípa ẹja tàbí ọgbà láéláé"] },
            { title: "Bí o ṣe lè rí àwọ̀n", bullets: ["Ilé-ìwòsàn, ìtọ́jú aboyún, ilé-ìwé, ìpolongo", "Béèrè lọ́wọ́ ilé-ìwòsàn rẹ tàbí òṣìṣẹ́ ìlera àdúgbò"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Lálẹ́ òní, wo gbogbo àwọ̀n ẹ̀fọn tí ó wà nínú ilé rẹ. Ta ọ̀kọ̀ọ̀kan kí ó dé ilẹ̀, ki etí rẹ̀ bọ abẹ́, kí o sì dí ihò èyíkéyìí. Ka iye àwọ̀n míì tí ìdílé rẹ nílò.",
          youCanNow: "ta àwọ̀n tí a fi oògùn sí, ki í bọ abẹ́, kí o sì tọ́jú rẹ̀ kí gbogbo ènìyàn, bẹ̀rẹ̀ láti àwọn tí ó wà nínú ewu jù, lè máa sùn sábẹ́ ọ̀kan ní gbogbo alẹ́.",
          quickCheck: [
            { objective: "O2", q: "Ìgbà wo ni ìdílé rẹ gbọ́dọ̀ sùn sábẹ́ àwọ̀n?", options: ["Ní ìgbà òjò nìkan", "Nígbà tí ẹnì kan bá ń ṣàìsàn nìkan", "Ní gbogbo alẹ́, ní gbogbo ọdún", "Ní òpin ọ̀sẹ̀ nìkan"], answer: 2, why: "Ẹ̀fọn lè jẹni kí ó sì tan ibà ní gbogbo ọdún; àwọ̀n ń ṣiṣẹ́ kìkì tí a bá ń lò ó ní gbogbo alẹ́." },
            { objective: "O2", q: "O rí ihò kékeré kan nínú àwọ̀n. Kí ni o máa ṣe?", options: ["Ju àwọ̀n náà nù", "Lò ó fún pípa ẹja", "Dúró títí ihò náà yóò fi tóbi sí i", "Rán an tàbí so ó pa lẹ́sẹ̀kẹsẹ̀"], answer: 3, why: "Ẹ̀fọn lè gba ihò kékeré wọlé; dídí wọn lẹ́sẹ̀kẹsẹ̀ ń jẹ́ kí àwọ̀n máa ṣiṣẹ́." }
          ]
        },
        {
          title: "Ẹ̀fọn díẹ̀ àti ìjẹ díẹ̀ ní àyíká ilé",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kó tàbí bo àwọn ibi tí ẹ̀fọn ń pamọ sí kúrò, kí o sì dí ọ̀nà tí wọ́n fi ń wọ ilé.",
          text: [
            "Ẹ̀fọn máa ń yé ẹyin sínú omi tí kò ṣàn. Ọ̀gọ̀dọ̀ omi, táyà àtijọ́, agolo, ìkòkò fífọ́, gọ́tà tí ó dí, ìgò ńlá omi àti garawa tí a kò bò lè di ibi tí ẹ̀fọn ń pamọ sí nítòsí ibi tí ìdílé rẹ ń sùn.",
            "Ní àyíká ilé: da omi inú àwọn nǹkan tí ó ń gbà omi nù tàbí dojú wọn dé; fi ìdérí tàbí aṣọ tí a so dáadáa bo ìgò ńlá omi, garawa àti tánkì; tú àwọn gọ́tà àti ọ̀nà omi tí ó dí; fi erùpẹ̀ kún ọ̀gọ̀dọ̀ omi. Máa ṣe èyí ní ọ̀sẹ̀ kọ̀ọ̀kan, pàápàá ní ìgbà òjò, kí o sì bá àwọn aládùúgbò ṣiṣẹ́ pọ̀, nítorí ẹ̀fọn ń fò láti ilé kan sí òmíràn.",
            "Dí wọn mọ́ ìta kí o sì yẹra fún ìjẹ: ti ilẹ̀kùn àti fèrèsé nígbà tí ilẹ̀ bá ń ṣú, kí o sì fi àwọ̀n sí fèrèsé àti abẹ́ òrùlé tí o bá lè ṣe é. Ní ìrọ̀lẹ́, wọ ẹ̀wù apá gígùn àti ṣòkòtò gígùn tàbí ìró gígùn. Oògùn ìlé-ẹ̀fọn tí ó ní DEET, IR3535 tàbí icaridin lè ṣèrànwọ́ lẹ́yìn tí ilẹ̀ bá ṣú; lò wọ́n gẹ́gẹ́ bí ohun tí a kọ sí ara wọn. Oògùn ẹ̀fọn tí a ń jó (coil) àti ẹ̀rọ tí ó ń fọ́n oògùn lè ṣèrànwọ́ pẹ̀lú, ṣùgbọ́n wọn kò lè rọ́pò àwọ̀n láéláé. Tí àwọn òṣìṣẹ́ ètò ìlera bá wá láti fín oògùn sínú ilé (indoor residual spraying), jẹ́ kí wọ́n wọlé, kí o sì tẹ̀lé ìmọ̀ràn wọn pé kí o má fọ ògiri tàbí kun ún lẹ́yìn náà."
          ],
          steps: ["Rìn yí ilé rẹ ká kí o sì wá gbogbo nǹkan tí ó ní omi tí kò ṣàn.", "Da á nù, dojú rẹ̀ dé, bò ó tàbí kó o kúrò.", "Tú ọ̀nà omi tí ó dí kí o sì kún ọ̀gọ̀dọ̀ omi.", "Ti ilẹ̀kùn àti fèrèsé nígbà tí ilẹ̀ bá ń ṣú; fi àwọ̀n sí fèrèsé tí o bá lè ṣe é.", "Bo apá àti ẹsẹ̀ ní ìrọ̀lẹ́; lo oògùn ìlé-ẹ̀fọn gẹ́gẹ́ bí a ṣe kọ ọ́.", "Jẹ́ kí àwọn òṣìṣẹ́ ètò ìlera tí ó ń fín oògùn wọlé."],
          words: [["Ibi tí ẹ̀fọn ń pamọ sí", "omi tí kò ṣàn níbi tí ẹ̀fọn ti ń yé ẹyin."], ["Oògùn ìlé-ẹ̀fọn (repellent)", "ìpara tàbí oògùn ìfọ́n tí ó ń lé ẹ̀fọn kúrò lára rẹ."], ["Fífín oògùn sínú ilé (IRS)", "àwọn òṣìṣẹ́ ìlera ń fín oògùn apakòkòrò sí ògiri inú ilé láti pa ẹ̀fọn tí ó ń sinmi níbẹ̀."]],
          slides: [
            { title: "Ẹ̀fọn ń pamọ sínú omi tí kò ṣàn", bullets: ["Ọ̀gọ̀dọ̀ omi, táyà, agolo, ìkòkò fífọ́", "Ọ̀nà omi tí ó dí, ìgò ńlá omi àti garawa tí a kò bò"] },
            { title: "Ní ọ̀sẹ̀ kọ̀ọ̀kan ní àyíká ilé", bullets: ["Da omi nù tàbí dojú àwọn nǹkan tí ó ń gbà omi dé", "Bo ìgò ńlá omi, garawa àti tánkì", "Tú ọ̀nà omi; kún ọ̀gọ̀dọ̀; bá aládùúgbò ṣiṣẹ́ pọ̀"] },
            { title: "Dí wọn mọ́ ìta, yẹra fún ìjẹ", bullets: ["Ti ilẹ̀kùn àti fèrèsé nígbà tí ilẹ̀ bá ń ṣú; àwọ̀n fèrèsé", "Ẹ̀wù apá gígùn àti ṣòkòtò ní ìrọ̀lẹ́", "Oògùn ìlé-ẹ̀fọn bí a ṣe kọ ọ́; kò rọ́pò àwọ̀n láéláé"] },
            { title: "Àwọn òṣìṣẹ́ tí ó ń fín oògùn", bullets: ["Fífín oògùn sínú ilé ń pa ẹ̀fọn tí ó ń sinmi", "Jẹ́ kí àwọn òṣìṣẹ́ ètò ìlera wọlé", "Tẹ̀lé ìmọ̀ràn wọn lẹ́yìn náà"] }
          ],
          sources: [WHO_MALARIA, WHO_WATER],
          tryIt: "Rìn yí ilé rẹ ká báyìí. Kọ gbogbo ibi tí omi tí kò ṣàn wà sílẹ̀. Da á nù, bò ó tàbí kó o kúrò ní ó kéré tán ibi mẹ́ta lónìí, kí o sì ṣètò láti tún wò ó ní ọ̀sẹ̀ kọ̀ọ̀kan.",
          youCanNow: "kó àwọn ibi tí ẹ̀fọn ń pamọ sí kúrò ní àyíká ilé rẹ kí o sì dín ìjẹ ẹ̀fọn kù ní ìrọ̀lẹ́.",
          quickCheck: [
            { objective: "O3", q: "Níbo ni ẹ̀fọn ń yé ẹyin sí?", options: ["Sínú yanrìn gbígbẹ", "Sínú omi tí kò ṣàn bí ọ̀gọ̀dọ̀, táyà àti garawa tí a kò bò", "Sínú iná ìdáná", "Sínú búrẹ́dì"], answer: 1, why: "Ẹ̀fọn nílò omi tí kò ṣàn láti yé ẹyin." },
            { objective: "O3", q: "O ń jó oògùn ẹ̀fọn (coil) ní ìrọ̀lẹ́. Kí ni òótọ́?", options: ["Ó lè ṣèrànwọ́, ṣùgbọ́n o ṣì máa sùn sábẹ́ àwọ̀n", "O kò nílò àwọ̀n mọ́", "Ó ń wo ibà sàn", "Ó gbọ́dọ̀ máa jó ní gbogbo òru lẹ́gbẹ̀ẹ́ ọmọ ọwọ́"], answer: 0, why: "Oògùn ẹ̀fọn tí a ń jó àti oògùn ìlé-ẹ̀fọn ń fi ààbò kún un, ṣùgbọ́n wọn kò lè rọ́pò àwọ̀n láéláé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Dídá ìjẹ ẹ̀fọn dúró",
        questions: [
          { objective: "O1", q: "Ìgbà wo ni ẹ̀fọn tí ó ń tan ibà máa ń jẹni jù?", options: ["Ní ọ̀sán gangan", "Ní àárọ̀ nìkan", "Ní ìrọ̀lẹ́ alẹ́ àti ní òru", "Ní ìgbà ẹ̀rùn nìkan"], answer: 2, why: "Ẹ̀fọn Anopheles máa ń jẹni jù ní ìrọ̀lẹ́ alẹ́ àti ní òru, nígbà tí àwọn ènìyàn bá ń sùn." },
          { objective: "O2", q: "Ìdílé rẹ ní àwọ̀n mẹ́ta, ènìyàn márùn-ún sì wà. Ta ni ó máa kọ́kọ́ sùn sábẹ́ àwọ̀n?", options: ["Bàbá àti àwọn ọmọkùnrin àgbà", "Àwọn àlejò", "Ẹni tí ó bá kọ́kọ́ lọ sùn", "Ọmọdé àti aboyún"], answer: 3, why: "Ọmọdé àti aboyún ni ó wà nínú ewu jù, nítorí náà àwọn ni wọ́n kọ́kọ́ nígbà tí o ń wá àwọ̀n míì." },
          { objective: "O2", q: "Báwo ni a ṣe gbọ́dọ̀ ta àwọ̀n?", options: ["Kí ó dé ilẹ̀, kí a sì ki í bọ abẹ́ kí ilẹ̀ tó ṣú", "Ká a sókè lórí ibùsùn", "Ní ìdajì lórí ibùsùn", "Lórí ojú nìkan"], answer: 0, why: "Àwọ̀n tí ó dé ilẹ̀ tí a sì ki bọ abẹ́ kò fi àlàfo sílẹ̀ fún ẹ̀fọn." },
          { objective: "O3", q: "Táyà àtijọ́ tí ó kún fún omi òjò wà lẹ́yìn ilé rẹ. Kí ni o máa ṣe?", options: ["Fi wọ́n sílẹ̀; kì í ṣe tìrẹ", "Da omi inú wọn nù kí o sì kó wọn sí ibi gbígbẹ, tàbí kó wọn kúrò", "Fi omi míì kún un", "Fi àwọ̀n bò wọ́n"], answer: 1, why: "Omi inú táyà jẹ́ ibi tí ẹ̀fọn ń pamọ sí; dída á nù tàbí kíkó wọn kúrò ń dá ẹ̀fọn dúró." },
          { objective: "O3", q: "Àwọn òṣìṣẹ́ ìlera wá láti fín oògùn sí ògiri inú ilé rẹ. Kí ni o máa ṣe?", options: ["Kọ̀ fún wọn", "Fọ ògiri náà lẹ́sẹ̀kẹsẹ̀", "Jẹ́ kí wọ́n wọlé kí o sì tẹ̀lé ìmọ̀ràn wọn lẹ́yìn náà", "Kun ògiri náà ní ọjọ́ kan náà"], answer: 2, why: "Fífín oògùn sínú ilé jẹ́ ọ̀nà pàtàkì ti WHO; fífọ tàbí kíkun ògiri ń dá iṣẹ́ rẹ̀ dúró." }
        ]
      }
    },
    {
      name: "Orí 2: Dídáàbò bo àwọn tí ó wà nínú ewu jù àti ṣíṣe kíákíá",
      lessons: [
        {
          title: "Dídáàbò bo aboyún àti ọmọdé",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kọ iṣẹ́ ìdènà ibà tí ilé-ìwòsàn rẹ ń fún aboyún àti ọmọdé sílẹ̀ kí o sì ṣètò ìgbà tí ẹ máa lọ.",
          text: [
            "Ibà nígbà oyún lè pa ìyá àti ọmọ lára: WHO sọ pé ó lè mú kí a bí ọmọ ṣáájú àkókò tàbí kí ó kéré jù. Aboyún gbọ́dọ̀ bẹ̀rẹ̀ ìtọ́jú aboyún (antenatal) ní kùtùkùtù kí ó sì lọ ní gbogbo ìgbà tí wọ́n bá dá fún un. Níbi ìtọ́jú aboyún ní ọ̀pọ̀ orílẹ̀-èdè, ó lè rí àwọ̀n tí a fi oògùn sí, àyẹ̀wò ibà, àti, níbi tí ètò ìjọba bá ti ń fún ni, oògùn ìdènà ibà nígbà oyún (WHO ń pè é ní IPTp). Òṣìṣẹ́ ìlera ló ń pinnu ohun tí ó nílò àti ìgbà tí ó nílò rẹ̀. Má ṣe lo oògùn ibà nígbà oyún láìsí òṣìṣẹ́ ìlera láéláé.",
            "Fún ọmọdé: WHO dámọ̀ràn abẹ́rẹ́ àjẹsára ibà méjì (RTS,S àti R21) fún ọmọdé ní agbègbè tí ibà pọ̀ sí, wọ́n sì ń fi wọ́n kún abẹ́rẹ́ àjẹsára ọmọdé déédéé ní ọ̀pọ̀ orílẹ̀-èdè Áfíríkà. Ní àwọn agbègbè kan, fún àpẹẹrẹ ní apá kan Sahel bí Burkina Faso àti Mali, àwọn òṣìṣẹ́ ìlera tún ń fún ọmọdé ní oògùn ìdènà ní ìgbà òjò (seasonal malaria chemoprevention). Béèrè lọ́wọ́ ilé-ìwòsàn rẹ ohun tí wọ́n ń fún ni níbi tí o ń gbé, kí o sì máa jẹ́ kí káàdì ìlera ọmọ náà wà ní ìmúdójúìwọ̀n.",
            "Abẹ́rẹ́ àjẹsára àti oògùn ìdènà ń fi ààbò kún un, ṣùgbọ́n WHO sọ pé wọ́n ń ṣiṣẹ́ dáadáa jù pẹ̀lú àwọ̀n. Máa lo àwọ̀n ní gbogbo alẹ́. Kọ àwọn ọjọ́ ilé-ìwòsàn sínú ètò rẹ, kí o sì béèrè lọ́wọ́ òṣìṣẹ́ ìlera àdúgbò tí o kò bá lè dé ilé-ìwòsàn."
          ],
          steps: ["Aboyún: bẹ̀rẹ̀ ìtọ́jú aboyún ní kùtùkùtù kí o sì lọ ní gbogbo ìgbà.", "Béèrè níbi ìtọ́jú aboyún nípa àwọ̀n, àyẹ̀wò àti oògùn ìdènà ibà.", "Ọmọdé: béèrè lọ́wọ́ ilé-ìwòsàn bóyá wọ́n ń fún ni ní abẹ́rẹ́ àjẹsára ibà níbi tí o ń gbé, kí o sì jẹ́ kí káàdì ìlera wà ní ìmúdójúìwọ̀n.", "Béèrè bóyá ìpolongo oògùn ìdènà ìgbà òjò wà ní agbègbè rẹ.", "Kọ gbogbo ọjọ́ ilé-ìwòsàn sínú ètò rẹ kí o sì máa lo àwọ̀n."],
          words: [["Ìtọ́jú aboyún (antenatal care)", "àyẹ̀wò ìlera fún obìnrin nígbà oyún."], ["Abẹ́rẹ́ àjẹsára (vaccine)", "oògùn, tí ó sábà máa ń jẹ́ abẹ́rẹ́, tí ó ń ran ara lọ́wọ́ láti dáàbò bo ara rẹ̀ lọ́wọ́ àìsàn kan."], ["Oògùn ìdènà", "oògùn tí òṣìṣẹ́ ìlera ń fúnni láti dá àìsàn dúró kí ó tó bẹ̀rẹ̀."], ["Káàdì ìlera", "káàdì tàbí ìwé kékeré tí ilé-ìwòsàn ń kọ abẹ́rẹ́ àjẹsára àti àyẹ̀wò ọmọ sí."]],
          slides: [
            { title: "Ibà nígbà oyún", bullets: ["Ó lè pa ìyá àti ọmọ lára", "Ọmọ lè dé ṣáájú àkókò tàbí kí ó kéré jù", "Bẹ̀rẹ̀ ìtọ́jú aboyún ní kùtùkùtù; lọ ní gbogbo ìgbà"] },
            { title: "Níbi ìtọ́jú aboyún, béèrè nípa", bullets: ["Àwọ̀n tí a fi oògùn sí àti àyẹ̀wò ibà", "Oògùn ìdènà níbi tí wọ́n bá ti ń fún ni (IPTp)", "Má lo oògùn ibà láìsí òṣìṣẹ́ ìlera láéláé"] },
            { title: "Ọmọdé", bullets: ["Abẹ́rẹ́ àjẹsára ibà RTS,S àti R21 níbi tí wọ́n bá wà", "Oògùn ìdènà ìgbà òjò ní àwọn agbègbè kan", "Jẹ́ kí káàdì ìlera wà ní ìmúdójúìwọ̀n"] },
            { title: "Ṣì máa lo àwọ̀n", bullets: ["Abẹ́rẹ́ àti oògùn ń ṣiṣẹ́ dáadáa jù pẹ̀lú àwọ̀n", "Kọ àwọn ọjọ́ ilé-ìwòsàn sínú ètò rẹ", "Béèrè ìrànlọ́wọ́ lọ́wọ́ òṣìṣẹ́ ìlera àdúgbò"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Tí ẹnikẹ́ni nínú ilé rẹ bá lóyún tàbí tí kò tíì pé ọdún 5, kọ ọjọ́ ilé-ìwòsàn tó kàn fún ẹnì kọ̀ọ̀kan sílẹ̀, àti àwọn ìbéèrè tí o máa béèrè nípa àwọ̀n, abẹ́rẹ́ àjẹsára àti oògùn ìdènà. Tí kò bá sí ẹnikẹ́ni, kọ ọ́ fún aládùúgbò tàbí ẹbí tí o lè ràn lọ́wọ́.",
          youCanNow: "dárúkọ iṣẹ́ ilé-ìwòsàn tí ó ń dáàbò bo aboyún àti ọmọdé lọ́wọ́ ibà kí o sì ṣètò ìgbà tí ẹ máa lọ.",
          quickCheck: [
            { objective: "O4", q: "Obìnrin kan nínú ìdílé rẹ lóyún. Kí ni ìgbésẹ̀ àkọ́kọ́ láti dáàbò bò ó lọ́wọ́ ibà?", options: ["Dúró títí di oṣù ìkẹyìn", "Ra oògùn ibà ní ọjà", "Bẹ̀rẹ̀ ìtọ́jú aboyún ní kùtùkùtù, sùn sábẹ́ àwọ̀n kí ó sì béèrè nípa ààbò lọ́wọ́ ibà", "Dẹ́kun jíjẹ èso"], answer: 2, why: "Ìtọ́jú aboyún ní kùtùkùtù pẹ̀lú àwọ̀n ń fún un ní ààbò tí ilé-ìwòsàn ń pèsè." },
            { objective: "O4", q: "Ọmọ rẹ ti gba abẹ́rẹ́ àjẹsára ibà. Àwọ̀n ńkọ́?", options: ["Ju ú nù", "Lò ó ní ìgbà òjò nìkan", "Fi í fún àwọn aládùúgbò", "Máa lò ó ní gbogbo alẹ́; abẹ́rẹ́ àjẹsára ń ṣiṣẹ́ dáadáa jù pẹ̀lú àwọ̀n"], answer: 3, why: "WHO sọ pé abẹ́rẹ́ àjẹsára ń wúlò jù nígbà tí a bá lò ó pẹ̀lú àwọ̀n àti àwọn ọ̀nà míì." }
          ]
        },
        {
          title: "Ara gbígbóná: ṣe àyẹ̀wò ní ọjọ́ kan náà",
          objectives: ["O5"],
          minutes: 5,
          goal: "Mú ẹnì kan nínú ìdílé tí ara rẹ̀ gbóná lọ fún àyẹ̀wò ibà ní ọjọ́ kan náà.",
          text: [
            "Ní agbègbè tí ibà wà, ka gbogbo ara gbígbóná sí ibà tí ó ṣeé ṣe títí àyẹ̀wò yóò fi sọ pé kì í ṣe bẹ́ẹ̀. Ibà sábà máa ń bẹ̀rẹ̀ bí ọ̀pọ̀ àìsàn míì, pẹ̀lú ara gbígbóná, òtútù, ẹ̀fọ́rí àti ara ríro, nítorí náà o kò lè mọ̀ nípa wíwò lásán. WHO dámọ̀ràn pé kí a fi àyẹ̀wò fìdí gbogbo ibà tí a fura sí múlẹ̀, pẹ̀lú àyẹ̀wò kíákíá (rapid diagnostic test) tàbí microscope, kí a tó tọ́jú rẹ̀.",
            "Lọ ní ọjọ́ kan náà sí ilé-ìwòsàn, ibùdó ìlera tàbí òṣìṣẹ́ ìlera àdúgbò tí a ti kọ́ tí ó lè ṣe àyẹ̀wò. Àyẹ̀wò kíákíá ń mú ẹ̀jẹ̀ kan ṣoṣo láti ìka, ó sì ń fi èsì hàn láàárín ìṣẹ́jú díẹ̀. Fún ọmọdé tí kò tíì pé ọdún 5, ara gbígbóná kò gbọdọ̀ dúró di ọ̀la láéláé.",
            "Tí àyẹ̀wò bá fi ibà hàn, òṣìṣẹ́ ìlera ló máa yan oògùn, ó sì máa sọ bí o ṣe máa lò ó fún ọ. Lo gbogbo rẹ̀, gẹ́gẹ́ bí wọ́n ṣe sọ gan-an, kódà tí ara ẹni náà bá ti yá. Má ṣe lo oògùn àṣẹ́kù, oògùn tí ó jẹ́ ti ẹlòmíì, tàbí oògùn tí o kò mọ̀ láti ọjà tàbí lọ́wọ́ alárìnkiri: ó lè jẹ́ irú tí kò tọ́, ó lè kéré jù, tàbí kí ó jẹ́ ayédèrú. Tí àyẹ̀wò kò bá rí ibà, òṣìṣẹ́ ìlera máa wá ohun míì tí ó fà á. Tí ara ẹni náà kò bá yá, tàbí tí ó bá burú sí i, padà lọ."
          ],
          steps: ["Ara gbígbóná ní agbègbè tí ibà wà? Kà á sí ibà tí ó ṣeé ṣe.", "Lọ ní ọjọ́ kan náà sí ilé-ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò tí ó lè ṣe àyẹ̀wò.", "Tí wọ́n bá rí ibà: lo oògùn náà gẹ́gẹ́ bí òṣìṣẹ́ ìlera ṣe sọ gan-an, gbogbo rẹ̀.", "Má lo oògùn àṣẹ́kù, oògùn yíyá tàbí oògùn tí o kò mọ̀ láéláé.", "Kò yá tàbí ó burú sí i? Padà lọ lẹ́sẹ̀kẹsẹ̀."],
          words: [["Àyẹ̀wò kíákíá (RDT)", "àyẹ̀wò kíákíá pẹ̀lú ẹ̀jẹ̀ kan ṣoṣo láti ìka tí ó ń fi ibà hàn láàárín ìṣẹ́jú díẹ̀."], ["Èsì tí kò rí nǹkan (negative)", "àyẹ̀wò náà kò rí ibà."], ["Oògùn ayédèrú", "oògùn tí ó dà bí gidi ṣùgbọ́n tí iye inú rẹ̀ kò tọ́ tàbí tí kò ní nǹkan tí ó ń ṣiṣẹ́."]],
          slides: [
            { title: "Gbogbo ara gbígbóná lè jẹ́ ibà", bullets: ["Ara gbígbóná, òtútù, ẹ̀fọ́rí, ara ríro", "O kò lè mọ̀ nípa wíwò lásán", "WHO: ṣe àyẹ̀wò kí o tó tọ́jú"] },
            { title: "Ṣe àyẹ̀wò ní ọjọ́ kan náà", bullets: ["Ilé-ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò tí a ti kọ́", "Àyẹ̀wò kíákíá: ẹ̀jẹ̀ kan ṣoṣo, ìṣẹ́jú díẹ̀", "Ọmọ tí kò tíì pé ọdún 5: má dúró di ọ̀la láéláé"] },
            { title: "Tí ó bá jẹ́ ibà", bullets: ["Òṣìṣẹ́ ìlera ló ń yan oògùn", "Lo gbogbo rẹ̀ gẹ́gẹ́ bí wọ́n ṣe sọ gan-an", "Kò yá tàbí ó burú sí i? Padà lọ"] },
            { title: "Má ṣe láéláé", bullets: ["Oògùn àṣẹ́kù tàbí oògùn yíyá", "Oògùn tí o kò mọ̀ láti ọwọ́ alárìnkiri", "Ó lè jẹ́ èyí tí kò tọ́, kí ó kéré jù tàbí kí ó jẹ́ ayédèrú"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Wádìí ibi tí ìdílé rẹ ti lè ṣe àyẹ̀wò ibà ní ọjọ́ kan náà: ilé-ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò tí ó sún mọ́ ọ jù, àkókò tí wọ́n ń ṣí, àti bí o ṣe máa dé ibẹ̀. Kọ ọ́ sínú ètò rẹ.",
          youCanNow: "ṣe àyẹ̀wò fún gbogbo ara gbígbóná ní ọjọ́ kan náà kí o sì tẹ̀lé ìtọ́jú òṣìṣẹ́ ìlera nìkan, gbogbo rẹ̀.",
          quickCheck: [
            { objective: "O5", q: "Ara ọmọ rẹ gbóná ní ìrọ̀lẹ́. Kí ni o máa ṣe?", options: ["Ṣe àyẹ̀wò ibà ní ọjọ́ kan náà ní ilé-ìwòsàn tàbí lọ́dọ̀ òṣìṣẹ́ ìlera àdúgbò", "Dúró fún ọjọ́ mẹ́ta", "Fún un ní oògùn àṣẹ́kù ti ìgbà tó kọjá", "Ra oògùn lọ́wọ́ alárìnkiri"], answer: 0, why: "WHO gbani nímọ̀ràn láti ṣe àyẹ̀wò kí a tó tọ́jú, ara gbígbóná ọmọdé kò sì gbọdọ̀ dúró." },
            { objective: "O5", q: "Lẹ́yìn ọjọ́ méjì tí ọkọ rẹ ti ń lo oògùn ibà, ara rẹ̀ ti yá. Kí ni ó yẹ kí ó ṣe?", options: ["Dá a dúró kí ó sì tọ́jú èyí tí ó kù fún ìgbà míì", "Lo gbogbo rẹ̀ tán gẹ́gẹ́ bí òṣìṣẹ́ ìlera ṣe sọ gan-an", "Fi èyí tí ó kù fún aládùúgbò", "Fi ìlọ́po méjì lo èyí tó kàn"], answer: 1, why: "Dídá a dúró ní ààbọ̀ lè jẹ́ kí ibà padà; lo gbogbo rẹ̀ bí wọ́n ṣe sọ." }
          ]
        },
        {
          title: "Àwọn àmì ewu ibà líle àti ètò ìdílé rẹ",
          objectives: ["O6"],
          minutes: 5,
          goal: "Dá àwọn àmì ewu ibà líle mọ̀ kí o sì gbé ẹni náà lọ sí ilé-ìwòsàn lẹ́sẹ̀kẹsẹ̀.",
          text: [
            "Ibà lè di líle kíákíá, pàápàá ní ọmọdé àti aboyún. Ibà líle jẹ́ pàjáwìrì.",
            "WHO ka àwọn àmì ewu wọ̀nyí. Lọ sí ilé-ìwòsàn tàbí ọsibítù BÁYÌÍ, ní ọ̀sán tàbí ní òru, tí ẹni náà bá: rẹ̀wẹ̀sì gan-an tàbí kò lágbára, tàbí kò lè jókòó tàbí dìde dúró; ń dààmú lọ́kàn, ń sùn jù tàbí ó ṣòro láti jí; ń gbọ̀n gìrì (convulsions), pàápàá ju ẹ̀ẹ̀kan lọ; ń mí pẹ̀lú ìṣòro; ń tọ̀ ìtọ̀ dúdú tàbí ìtọ̀ ẹ̀jẹ̀; ojú tàbí ara rẹ̀ pọ́n (yẹ́lò); tàbí ẹ̀jẹ̀ ń dà lọ́nà àìbọ́gbọ́nmu. Ọmọ tí kò lè mu nǹkan tàbí mu ọmú, tàbí tí ó ń bì gbogbo nǹkan, tún nílò ilé-ìwòsàn báyìí.",
            "Múra sílẹ̀ kí ó tó ṣẹlẹ̀: kọ àwọn àmì ewu àti orúkọ, ibi àti nọ́mbà fóònù ilé-ìwòsàn, ọsibítù àti òṣìṣẹ́ ìlera àdúgbò tí ó sún mọ́ ọ jù sórí káàdì kan lára ògiri; mọ bí o ṣe máa dé ibẹ̀ ní òru; kí o sì ya owó ọkọ̀ sọ́tọ̀ tí o bá lè ṣe é. Lẹ́yìn náà fi gbogbo ohun tí o kọ́ nínú ẹ̀kọ́ yìí sínú ètò ìdènà ibà ilé rẹ."
          ],
          steps: ["Kọ́ àwọn àmì ewu.", "Tí o bá rí èyíkéyìí: lọ sí ilé-ìwòsàn tàbí ọsibítù báyìí, ní ọ̀sán tàbí ní òru.", "Ṣe káàdì tí ó ní àwọn àmì náà àti orúkọ àti nọ́mbà ilé-ìwòsàn àti òṣìṣẹ́ ìlera tí ó sún mọ́ ọ jù.", "Ṣètò bí o ṣe máa rìn ní òru kí o sì ya owó ọkọ̀ sọ́tọ̀ tí o bá lè ṣe é.", "Kọ ètò ìdènà ibà ilé rẹ."],
          words: [["Ibà líle", "ibà tí ó ti di ewu fún ẹ̀mí, tí ó sì nílò ọsibítù tàbí ilé-ìwòsàn lẹ́sẹ̀kẹsẹ̀."], ["Gìrì (convulsions)", "gbígbọ̀n ara lójijì tí ẹni náà kò lè dá dúró."], ["Ojú pípọ́n (jaundice)", "àwọ̀ yẹ́lò ní ojú tàbí ní ara."]],
          slides: [
            { title: "Ibà líle jẹ́ pàjáwìrì", bullets: ["Ó lè ṣẹlẹ̀ kíákíá", "Ó léwu jù fún ọmọdé àti aboyún"] },
            { title: "Lọ BÁYÌÍ, ní ọ̀sán tàbí ní òru, tí", bullets: ["Ó rẹ̀wẹ̀sì gan-an; ó ń dààmú lọ́kàn tàbí ó ṣòro láti jí", "Gìrì (convulsions); ìṣòro mímí", "Ìtọ̀ dúdú tàbí ìtọ̀ ẹ̀jẹ̀; ojú tàbí ara pọ́n (yẹ́lò); ẹ̀jẹ̀ dídà", "Ọmọ kò lè mu nǹkan tàbí mu ọmú, tàbí ó ń bì gbogbo nǹkan"] },
            { title: "Múra sílẹ̀", bullets: ["Káàdì àmì ewu lára ògiri", "Nọ́mbà ilé-ìwòsàn, ọsibítù àti òṣìṣẹ́ ìlera", "Ètò ọkọ̀ fún òru; owó tí a yà sọ́tọ̀ tí o bá lè ṣe é"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Ṣe káàdì àmì ewu rẹ báyìí pẹ̀lú ó kéré tán àmì mẹ́rin àti orúkọ àti nọ́mbà ilé-ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò tí ó sún mọ́ ọ jù. Lẹ́yìn náà kọ ètò ìdènà ibà ilé rẹ ní kíkún láti inú iṣẹ́ ìkẹyìn.",
          youCanNow: "dá àwọn àmì ewu ibà líle mọ̀, wá ìrànlọ́wọ́ lẹ́sẹ̀kẹsẹ̀, kí o sì ní ètò ìdènà ibà ilé rẹ.",
          quickCheck: [
            { objective: "O6", q: "Ọmọ kan tí ó ní ibà bẹ̀rẹ̀ sí í gbọ̀n gìrì. Kí ni o máa ṣe?", options: ["Dúró wò bóyá yóò dúró", "Fún un ní oògùn kan náà sí i", "Lọ sí ilé-ìwòsàn tàbí ọsibítù báyìí", "Jẹ́ kí ọmọ náà sùn"], answer: 2, why: "Gìrì jẹ́ àmì ewu ibà líle; pàjáwìrì ni." },
            { objective: "O6", q: "Èwo ni àmì ewu ibà líle?", options: ["Ẹ̀fọ́rí díẹ̀", "Ara gbígbóná díẹ̀ lẹ́yìn iṣẹ́", "Ebi ń pani", "Ojú pípọ́n (yẹ́lò), tàbí ìtọ̀ dúdú tàbí ìtọ̀ ẹ̀jẹ̀"], answer: 3, why: "WHO ka ojú pípọ́n àti ìtọ̀ dúdú tàbí ìtọ̀ ẹ̀jẹ̀ sí àmì ewu tí ó nílò ìtọ́jú pàjáwìrì." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídáàbò bo àwọn tí ó wà nínú ewu jù àti ṣíṣe kíákíá",
        questions: [
          { objective: "O4", q: "Kí ni aboyún lè rí níbi ìtọ́jú aboyún ní ọ̀pọ̀ orílẹ̀-èdè?", options: ["Àwọ̀n pípa ẹja ọ̀fẹ́", "Àwọ̀n tí a fi oògùn sí, àyẹ̀wò ibà àti oògùn ìdènà níbi tí ètò bá ti ń fún ni", "Oògùn ibà láti tọ́jú sílé", "Kò sí nǹkan nípa ibà"], answer: 1, why: "Ìtọ́jú aboyún ni ibi tí ọ̀pọ̀ ètò ti ń fún ni ní àwọ̀n, àyẹ̀wò àti oògùn ìdènà nígbà oyún." },
          { objective: "O4", q: "Abẹ́rẹ́ àjẹsára wo ni WHO dámọ̀ràn fún ọmọdé lòdì sí ibà ní agbègbè tí ibà pọ̀ sí?", options: ["RTS,S àti R21", "Polio àti measles (ìgbóná)", "Tetanus nìkan", "Kò sí abẹ́rẹ́ àjẹsára ibà"], answer: 0, why: "WHO dámọ̀ràn RTS,S (láti 2021) àti R21 (láti 2023) fún ọmọdé ní agbègbè tí ibà ti pọ̀ díẹ̀ sí pọ̀ gan-an." },
          { objective: "O5", q: "Kí ló dé tí a fi ń ṣe àyẹ̀wò kí a tó tọ́jú ara gbígbóná?", options: ["Àyẹ̀wò dùn mọ́ni", "Kí o lè ta oògùn náà", "Nítorí ọ̀pọ̀ àìsàn dà bí ibà; àyẹ̀wò ń fi hàn bóyá ibà ni", "Àyẹ̀wò ń rọ́pò àwọ̀n"], answer: 2, why: "Ibà dà bí àwọn ara gbígbóná míì; àyẹ̀wò ń jẹ́ kí a fúnni ní ìtọ́jú tó tọ́." },
          { objective: "O5", q: "Alárìnkiri kan fẹ́ tà ọ́ ní oògùn ibà olówó pọ́ọ́kú. Kí ni o máa ṣe?", options: ["Rà á fún ìdílé", "Rà á fún ọmọdé nìkan", "Pín in fún aládùúgbò", "Má rà á; ṣe àyẹ̀wò kí òṣìṣẹ́ ìlera sì tọ́jú"], answer: 3, why: "Oògùn tí o kò mọ̀ lè jẹ́ èyí tí kò tọ́ tàbí ayédèrú; àyẹ̀wò àti ìtọ́jú òṣìṣẹ́ ìlera ni kò léwu." },
          { objective: "O6", q: "Ní ọ̀gànjọ́ òru, ọmọbìnrin rẹ tí ó ní ibà ń dààmú lọ́kàn, ó sì ṣòro gan-an láti jí. Kí ni o máa ṣe?", options: ["Lọ sí ilé-ìwòsàn tàbí ọsibítù báyìí", "Dúró di àárọ̀", "Fún un ní oògùn sí i", "Gbé e sábẹ́ àwọ̀n kí o jẹ́ kí ó sùn"], answer: 0, why: "Ìdààmú ọkàn àti ṣíṣòro láti jí jẹ́ àmì ewu; lọ báyìí, ní ọ̀sán tàbí ní òru." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Dídènà Ibà (Malaria) nínú Ìdílé Rẹ",
    questions: [
      { objective: "O1", q: "Kí ni ó ń gbé ibà láti ọ̀dọ̀ ènìyàn kan sí òmíràn?", options: ["Eṣinṣin", "Àwọn ẹ̀fọn kan (Anopheles)", "Omi ẹlẹ́gbin", "Ikọ́"], answer: 1, why: "Ìjẹ ẹ̀fọn Anopheles tí ó ní kòkòrò ibà ló ń tan ibà." },
      { objective: "O1", q: "Nǹkan bí ìgbà wo lẹ́yìn ìjẹ ẹ̀fọn ni àwọn àmì ibà sábà máa ń bẹ̀rẹ̀?", options: ["Ní wákàtí kan náà", "Lẹ́yìn ọdún kan", "Ọjọ́ 10 sí 15", "Láéláé"], answer: 2, why: "WHO sọ pé àwọn àmì sábà máa ń hàn ní ọjọ́ 10 sí 15 lẹ́yìn ìjẹ ẹ̀fọn tí ó ní kòkòrò náà." },
      { objective: "O1", q: "Ìbátan rẹ kan láti Tunisia, níbi tí ibà kò ti wọ́pọ̀, wá kí ọ ní agbègbè tí ibà wà. Kí ni òótọ́?", options: ["Kò sí ewu fún un nítorí ó ti dàgbà", "Ibà kò lè ṣe é", "Ó nílò àwọ̀n ní ìgbà òjò nìkan", "Ó wà nínú ewu ńlá, ó sì gbọ́dọ̀ rí òṣìṣẹ́ ìlera kí ó tó rìnrìn-àjò kí ó sì sùn sábẹ́ àwọ̀n"], answer: 3, why: "Arìnrìn-àjò láti ibi tí kò sí ibà wà nínú ewu ńlá, nítorí náà wọ́n ń ṣètò pẹ̀lú òṣìṣẹ́ ìlera." },
      { objective: "O2", q: "Kí ni oògùn apakòkòrò tí ó wà lára àwọ̀n ń ṣe?", options: ["Ó ń pa tàbí sọ ẹ̀fọn tí ó bà lé e di aláìlágbára", "Ó ń jẹ́ kí àwọ̀n máa rùn dáadáa", "Ó ń wo ibà sàn", "Ó ń jẹ́ kí àwọ̀n mọ́"], answer: 0, why: "Oògùn apakòkòrò ń pa tàbí sọ ẹ̀fọn di aláìlágbára, nítorí náà àwọ̀n ń dáàbò bò jù." },
      { objective: "O2", q: "Báwo ni o ṣe máa sá àwọ̀n tí o ti fọ̀?", options: ["Nínú oòrùn gbígbóná fún ọ̀sẹ̀ kan", "Ní ibòji, lẹ́yìn tí o bá fọ̀ ọ́ jẹ́jẹ́", "Lórí iná ìdáná", "Ní tútù, lórí ibùsùn"], answer: 1, why: "Fífọ̀ jẹ́jẹ́ àti sísá sí ibòji ń ran àwọ̀n lọ́wọ́ láti máa ṣiṣẹ́." },
      { objective: "O2", q: "Èwo ni lílo àwọ̀n tí kò tọ́?", options: ["Lórí ẹní tí a ń sùn lé", "Lórí ibùsùn ọmọ ọwọ́", "Fífi ṣe ọgbà yí oko ẹ̀fọ́ ká", "Lórí ibùsùn aboyún"], answer: 2, why: "Àwọ̀n wà fún sísùn sábẹ́; lílò ó fún ọgbà tàbí pípa ẹja ń fi àwọn ènìyàn sílẹ̀ láìsí ààbò." },
      { objective: "O3", q: "Iṣẹ́ wo ló ń dín ibi tí ẹ̀fọn ń pamọ sí nílé kù?", options: ["Fífi garawa sílẹ̀ láìbò", "Títọ́jú táyà àtijọ́ sínú àgbàlá", "Sísùn sí ìta", "Dída omi nù, bíbò tàbí kíkó àwọn nǹkan tí ó ní omi tí kò ṣàn kúrò"], answer: 3, why: "Kíkó omi tí kò ṣàn kúrò ń mú ibi tí ẹ̀fọn ti ń yé ẹyin kúrò." },
      { objective: "O3", q: "Ìgbà wo ni o máa ti ilẹ̀kùn àti fèrèsé kí ẹ̀fọn má wọlé?", options: ["Nígbà tí ilẹ̀ bá ń ṣú", "Ní ọ̀sán gangan", "Ní ọjọ́ Àìkú nìkan", "Láéláé"], answer: 0, why: "Ẹ̀fọn tí ó ń tan ibà máa ń jẹni jù láti ìrọ̀lẹ́ alẹ́ àti ní òru." },
      { objective: "O3", q: "Kí ló dé tí a fi ń bá aládùúgbò ṣiṣẹ́ pọ̀ lórí omi tí kò ṣàn?", options: ["Láti yá táyà wọn", "Nítorí ẹ̀fọn ń fò láti ilé kan sí òmíràn", "Kí wọ́n lè san owó rẹ̀", "Kò ṣe pàtàkì"], answer: 1, why: "Ibi tí ẹ̀fọn ń pamọ sí ní ilé aládùúgbò ṣì ń rán ẹ̀fọn sí ilé rẹ." },
      { objective: "O4", q: "WHO sọ pé ibà nígbà oyún lè fa...", options: ["Kò sí nǹkan rárá", "Ìbejì", "Kí a bí ọmọ ṣáájú àkókò tàbí kí ó kéré jù", "Òtútù díẹ̀ nìkan"], answer: 2, why: "Ibà nígbà oyún lè mú kí a bí ọmọ ṣáájú àkókò tàbí kí ìwọ̀n rẹ̀ kéré." },
      { objective: "O4", q: "Níbo ni o ti lè mọ̀ bóyá wọ́n ń fún ọmọdé ní abẹ́rẹ́ àjẹsára ibà níbi tí o ń gbé?", options: ["Ọ̀rọ̀ kan lórí ẹ̀rọ ayélujára (social media)", "Ní ọjà", "Àmọ̀tán aládùúgbò", "Ilé-ìwòsàn rẹ tàbí òṣìṣẹ́ ìlera àdúgbò"], answer: 3, why: "Ètò abẹ́rẹ́ àjẹsára yàtọ̀ láti ibì kan sí ibòmíì; ilé-ìwòsàn mọ ohun tí wọ́n ń fún ni." },
      { objective: "O4", q: "Ní apá kan Sahel, kí ni àwọn òṣìṣẹ́ ìlera ń fún ọmọdé ní ìgbà òjò?", options: ["Oògùn ìdènà ibà nípasẹ̀ ìpolongo", "Fóònù ọ̀fẹ́", "Àwọ̀n pípa ẹja", "Kò sí nǹkan"], answer: 0, why: "Wọ́n ń fún ọmọdé ní oògùn ìdènà ibà ìgbà òjò (seasonal malaria chemoprevention) ní àsìkò tí ewu pọ̀ ní àwọn agbègbè kan." },
      { objective: "O5", q: "Kí ni WHO dámọ̀ràn kí a tó tọ́jú ẹni tí a fura sí pé ó ní ibà?", options: ["Dúró fún ọ̀sẹ̀ kan", "Àyẹ̀wò pẹ̀lú àyẹ̀wò kíákíá tàbí microscope", "Béèrè lọ́wọ́ aládùúgbò", "Ra oògùn oríṣi méjì"], answer: 1, why: "WHO dámọ̀ràn pé kí a fi àyẹ̀wò fìdí gbogbo ibà tí a fura sí múlẹ̀ kí a tó tọ́jú rẹ̀." },
      { objective: "O5", q: "O ní oògùn tí ó ṣẹ́kù láti ibà ọdún tó kọjá. Ara ọmọkùnrin rẹ gbóná. Kí ni o máa ṣe?", options: ["Fún un ní oògùn àtijọ́ náà", "Fún un ní ìdajì oògùn àtijọ́ náà", "Mú un lọ fún àyẹ̀wò lónìí; má lo oògùn àṣẹ́kù", "Dúró wò ó"], answer: 2, why: "Oògùn àṣẹ́kù lè jẹ́ irú tí kò tọ́ tàbí kí ó kéré jù; kọ́kọ́ ṣe àyẹ̀wò kí o sì tẹ̀lé òṣìṣẹ́ ìlera." },
      { objective: "O5", q: "Àyẹ̀wò ibà kò rí nǹkan, ṣùgbọ́n ara ọmọ rẹ ṣì gbóná lẹ́yìn ọjọ́ méjì. Kí ni o máa ṣe?", options: ["Má ṣàníyàn mọ́", "Fún un ní oògùn ibà bẹ́ẹ̀", "Dúró fún ọ̀sẹ̀ míì", "Padà lọ sọ́dọ̀ òṣìṣẹ́ ìlera"], answer: 3, why: "Tí ara gbígbóná bá ń bá a lọ tàbí tí ó burú sí i, òṣìṣẹ́ ìlera nílò láti tún wò ó." },
      { objective: "O5", q: "Ta ni ó ń pinnu oògùn ibà tí a máa lò àti iye rẹ̀?", options: ["Òṣìṣẹ́ ìlera tí a ti kọ́, lẹ́yìn àyẹ̀wò", "Ẹni tí ó ń ṣàìsàn", "Ẹni tí ó ń tà ní ọjà", "Ọ̀rọ̀ text"], answer: 0, why: "Òṣìṣẹ́ ìlera nìkan ló lè yan oògùn tó tọ́ àti iye rẹ̀ lẹ́yìn àyẹ̀wò." },
      { objective: "O6", q: "Èwo nínú ìwọ̀nyí ló túmọ̀ sí pé kí o lọ sí ilé-ìwòsàn báyìí?", options: ["Imú tí ó ń sun omi", "Ìṣòro mímí", "Ebi ń pani", "Ojú ọgbẹ́ kékeré"], answer: 1, why: "Ìṣòro mímí jẹ́ àmì ewu ibà líle." },
      { objective: "O6", q: "Ara ọmọ ọwọ́ kan gbóná, kò mu ọmú, ó sì ń bì gbogbo nǹkan. Kí ni o máa ṣe?", options: ["Tún gbìyànjú lọ́la", "Fún un ní omi nìkan kí o sì dúró", "Lọ sí ilé-ìwòsàn báyìí", "Fún un ní oògùn àgbàlagbà"], answer: 2, why: "Ọmọ tí kò lè mu nǹkan tàbí tí ó ń bì gbogbo nǹkan nílò ilé-ìwòsàn lẹ́sẹ̀kẹsẹ̀." },
      { objective: "O6", q: "Kí ló ń ràn ọ́ lọ́wọ́ láti ṣe kíákíá ní òru nígbà pàjáwìrì?", options: ["Kò sí nǹkan; o máa rántí", "Àkọsílẹ̀ oògùn àti iye wọn", "PIN owó orí fóònù rẹ", "Káàdì àmì ewu tí ó ní nọ́mbà ilé-ìwòsàn àti ètò ọkọ̀ fún òru"], answer: 3, why: "Mímọ àwọn àmì, ẹni tí o máa pè àti bí o ṣe máa dé ibẹ̀ ń fi àkókò pamọ́." },
      { objective: "O1", q: "Ṣé ibà lè ràn láti ọ̀dọ̀ ènìyàn kan sí òmíràn nípa fífọwọ́kanni tàbí jíjẹ oúnjẹ papọ̀?", options: ["Rárá; ìjẹ ẹ̀fọn ló ń tàn án", "Bẹ́ẹ̀ ni, nípa fífọwọ́kanni", "Bẹ́ẹ̀ ni, nípa jíjẹ oúnjẹ papọ̀", "Bẹ́ẹ̀ ni, nípasẹ̀ afẹ́fẹ́"], answer: 0, why: "WHO sọ pé ibà kì í ràn tààrà láti ọ̀dọ̀ ènìyàn kan sí òmíràn; ẹ̀fọn ló ń gbé e." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 3, 6, 9, 12, 13, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ẹni tí ó wà nínú ewu", objective: "O1", notYet: "Kò sí ẹni tí a sàmì sí pé ó wà nínú ewu jù, tàbí ètò náà kò sọ bí ibà ṣe ń tàn.", meets: "A dárúkọ ọmọdé, aboyún àti àwọn míì tí ó wà nínú ewu ńlá nínú ilé, pẹ̀lú ìjẹ ẹ̀fọn ní alẹ́ gẹ́gẹ́ bí ohun tí ó ń fà á.", exceeds: "Ó tún ṣètò fún àlejò tàbí arìnrìn-àjò láti ibi tí kò sí ibà." },
      { name: "Àwọ̀n ní gbogbo alẹ́", objective: "O2", notYet: "A ka àwọ̀n ṣùgbọ́n a kò sọ ẹni tí ó ń sùn sábẹ́ wọn, tàbí a kò mẹ́nu kan ihò.", meets: "A kọ gbogbo ibi tí a ń sùn pẹ̀lú àwọ̀n, àwọn tí ó wà nínú ewu jù ní àkọ́kọ́, pẹ̀lú àyẹ̀wò ihò ní ọ̀sẹ̀ kọ̀ọ̀kan àti ìtọ́jú jẹ́jẹ́.", exceeds: "A ka àwọ̀n tí ó kù, akẹ́kọ̀ọ́ sì ti béèrè lọ́wọ́ ilé-ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò bí ó ṣe lè rí wọn." },
      { name: "Ẹ̀fọn díẹ̀", objective: "O3", notYet: "Kò tó nǹkan mẹ́ta, tàbí àwọn nǹkan tí kò kó omi tí kò ṣàn kúrò tàbí tí kò dí ìjẹ ẹ̀fọn.", meets: "Ó kéré tán nǹkan mẹ́ta, bí dída omi inú ohun èlò nù, bíbo ìgò ńlá omi, títú ọ̀nà omi àti títi ilẹ̀kùn nígbà tí ilẹ̀ bá ń ṣú.", exceeds: "A ti yan ọjọ́ àyẹ̀wò ọ̀sẹ̀ kọ̀ọ̀kan, àwọn aládùúgbò sì ń kópa." },
      { name: "Iṣẹ́ ilé-ìwòsàn", objective: "O4", notYet: "Kò sí ìgbà lílọ sí ilé-ìwòsàn tí a ṣètò fún aboyún tàbí ọmọdé nínú ilé.", meets: "A kọ ọjọ́ ìtọ́jú aboyún àti ọjọ́ ilé-ìwòsàn ọmọdé sílẹ̀, pẹ̀lú àwọn ìbéèrè nípa àwọ̀n, abẹ́rẹ́ àjẹsára àti oògùn ìdènà.", exceeds: "A ti gba ọjọ́ àyẹ̀wò tàbí a ti lọ, káàdì ìlera ọmọ náà sì wà ní ìmúdójúìwọ̀n." },
      { name: "Ohun tí a máa ṣe fún ara gbígbóná", objective: "O5", notYet: "Ètò náà ní ìtọ́jú nílé pẹ̀lú oògùn àṣẹ́kù tàbí oògùn ọjà, tàbí dídúró wò ó.", meets: "Àyẹ̀wò ní ọjọ́ kan náà ní ilé-ìwòsàn tàbí lọ́dọ̀ òṣìṣẹ́ ìlera àdúgbò tí a dárúkọ, àti gbogbo ìtọ́jú bí òṣìṣẹ́ ìlera ṣe sọ.", exceeds: "A tún kọ àkókò tí wọ́n ń ṣí àti ibòmíì tí a ti lè ṣe àyẹ̀wò." },
      { name: "Káàdì àmì ewu", objective: "O6", notYet: "Kò tó àmì ewu mẹ́rin, tàbí kò sí ọ̀nà láti kàn sí ilé-ìwòsàn.", meets: "Ó kéré tán àmì ewu mẹ́rin àti orúkọ àti nọ́mbà ilé-ìwòsàn tàbí òṣìṣẹ́ ìlera tí ó sún mọ́ ọ jù.", exceeds: "Ètò ọkọ̀ fún òru pẹ̀lú, láìsí orúkọ oògùn tàbí iye oògùn lórí káàdì náà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn ilé tí gbogbo ènìyàn, bẹ̀rẹ̀ láti ọmọdé àti aboyún, ń sùn sábẹ́ àwọ̀n ní ọjọ́ 30 lẹ́yìn náà (ìwádìí àtẹ̀lé)",
      "Àwọn ìdílé tí wọ́n ń ṣe àyẹ̀wò ibà ní ọjọ́ kan náà fún ara gbígbóná ọmọ, gẹ́gẹ́ bí ìdílé tàbí òṣìṣẹ́ ìlera àdúgbò ṣe ròyìn",
      "Aboyún púpọ̀ sí i tí ó ń bẹ̀rẹ̀ ìtọ́jú aboyún ní kùtùkùtù, àti ọmọdé púpọ̀ sí i tí abẹ́rẹ́ àjẹsára wọn pé níbi tí wọ́n ti ń fún ni ní abẹ́rẹ́ àjẹsára ibà",
      "Ọmọdé díẹ̀ tí ó ń dé ilé-ìwòsàn pẹ́ pẹ̀lú ibà líle ní ìgbà òjò tó ń bọ̀"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Àwọ̀n ẹ̀fọn tí a fi oògùn sí láti fi kọ́ bí a ṣe ń ta á àti bí a ṣe ń wò ó (tàbí ti akẹ́kọ̀ọ́ fúnra rẹ̀)",
      "Abẹ́rẹ́ ìránṣọ àti òwú láti dí ihò",
      "Ìwé àti gègé fún ètò ilé àti káàdì àmì ewu",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ó ń ṣiṣẹ́ dáadáa pẹ̀lú ẹgbẹ́ àwọn ìyá, ẹgbẹ́ aboyún, ilé-ìwé, ẹgbẹ́ ẹ̀sìn, ẹgbẹ́ àgbẹ̀ àti ìbẹ̀wò òṣìṣẹ́ ìlera àdúgbò; ẹ ṣe ìdánwò ṣáájú pọ̀.",
      "Ẹ ta àwọ̀n papọ̀ ní Ẹ̀kọ́ 2, kí ẹ sì rìn yí ibi ìpàdé ká láti wá omi tí kò ṣàn ní Ẹ̀kọ́ 3.",
      "Pe òṣìṣẹ́ ìlera àdúgbò tàbí nọ́ọ̀sì ilé-ìwòsàn láti sọ ohun tí ilé-ìwòsàn ń pèsè: àwọ̀n ọ̀fẹ́, àyẹ̀wò, abẹ́rẹ́ àjẹsára àti oògùn ìdènà yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn àti láti agbègbè kan sí òmíràn.",
      "Má ṣe dárúkọ oògùn ibà tàbí sọ iye oògùn; rán gbogbo ìbéèrè nípa ìtọ́jú sí ilé-ìwòsàn, òṣìṣẹ́ ìlera àdúgbò tàbí ilé-iṣẹ́ ìjọba fún ìlera.",
      "Lo àwọn ìkéde ètò ìdènà ibà ìjọba tí ó wà lọ́wọ́lọ́wọ́ nígbà ìpolongo àti ní ìgbà òjò.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
