"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-nutrition-local-foods.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WHO_DIET = { name: "WHO (Àjọ Ìlera Àgbáyé): Oúnjẹ tó ní ìlera (èso àti ẹ̀fọ́, iyọ̀, ṣúgà àti ọ̀rá)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const WHO_IYCF = { name: "WHO: Bí a ṣe ń bọ́ ọmọ ọwọ́ àti ọmọ kékeré", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_ANAEMIA = { name: "WHO: Àìtó ẹ̀jẹ̀ (anaemia): àwọn tí ewu rẹ̀ wà fún, oúnjẹ tí ó ní iron, oúnjẹ tí ó ń dí iron lọ́wọ́", url: "https://www.who.int/news-room/fact-sheets/detail/anaemia" };
const WHO_FIVE_KEYS = { name: "WHO: Ìwé àwọn kọ́kọ́rọ́ márùn-ún sí oúnjẹ tí kò léwu", url: "https://www.who.int/publications/i/item/9789241594639" };

module.exports = {
  id: "afr-nutrition-local-foods-yo",
  lang: "yo",
  translationOf: "afr-nutrition-local-foods",
  category: "Africa: Life and Work",
  name: "Oúnjẹ Tó Dára Láìná Owó Púpọ̀ pẹ̀lú Oúnjẹ Ìbílẹ̀",
  skills: "Pípín oúnjẹ ìbílẹ̀ sí ẹgbẹ́ oúnjẹ, Ṣíṣe àwo oúnjẹ tó péye, Dídín iyọ̀, ṣúgà àti òróró kù àti pípa oúnjẹ mọ́ láìléwu, Fífi iye owó oúnjẹ wé ara wọn, Bíbọ́ ọmọ kékeré àti aboyún tàbí ìyá tó ń fún ọmọ lọ́mú, Kíkọ ètò oúnjẹ ọ̀sẹ̀ kan tí ó bá owó rẹ mu",
  outcome: "kọ ètò oúnjẹ ọ̀sẹ̀ kan fún ilé rẹ tí ó ń lo oúnjẹ ìbílẹ̀ láti inú ẹgbẹ́ oúnjẹ púpọ̀ lójoojúmọ́, tí ó bá owó oúnjẹ rẹ mu, tí ó tẹ̀lé ìmọ̀ràn WHO nípa iyọ̀, ṣúgà àti oúnjẹ tí kò léwu, tí ó sì fún àwọn ọmọ kékeré àti àwọn aboyún tàbí ìyá tó ń fún ọmọ lọ́mú ní ohun tí wọ́n nílò.",
  about: [
    "Ẹ̀kọ́ yìí wà fún ẹnikẹ́ni tí ó ń ra oúnjẹ tàbí tí ó ń se oúnjẹ fún ilé ní Áfíríkà: àwọn ìyá àti bàbá, àwọn ìyá àgbà, àwọn akẹ́kọ̀ọ́ tí ń gbé àwọn nìkan, àti àwọn tí ń ta oúnjẹ sísè. O kò nílò owó fún oúnjẹ pàtàkì kan. Oúnjẹ tó dára ń wá láti inú ẹ̀wà, ẹ̀fọ́, ọkà, ẹja, ẹyin àti èso tí ó ti wà ní ọjà rẹ.",
    "Orí 1 ń sọ nípa mímọ oúnjẹ rẹ: àwọn ẹgbẹ́ oúnjẹ pẹ̀lú àpẹẹrẹ ìbílẹ̀, ṣíṣe àwo oúnjẹ tó péye, àti dídín iyọ̀, ṣúgà àti òróró kù nígbà tí o ń pa oúnjẹ mọ́ láìléwu. Orí 2 ń sọ nípa jíjẹ dáadáa láìná owó púpọ̀: fífi iye owó wé ara wọn, bíbọ́ àwọn tí ó nílò rẹ̀ jù, àti kíkọ ètò oúnjẹ ọ̀sẹ̀ kan.",
    "Ẹ̀kọ́ yìí tẹ̀lé ìmọ̀ràn Àjọ Ìlera Àgbáyé (WHO). Kò fúnni ní oúnjẹ fún àìsàn bí àtọ̀gbẹ (diabetes), HIV tàbí àìjẹunre-kánú (malnutrition), tàbí ìmọ̀ràn nípa àfikún oúnjẹ (supplements); fún ìwọ̀nyẹn, bá ilé ìwòsàn, onímọ̀ nípa oúnjẹ tàbí òṣìṣẹ́ ìlera àwùjọ sọ̀rọ̀. Gbogbo iye owó jẹ́ àpẹẹrẹ nìkan; lo iye owó ọjà rẹ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò oúnjẹ ọ̀sẹ̀ kan fún ilé rẹ (tàbí àpẹẹrẹ kan, bí ìdílé ẹni márùn-ún ní Kisumu, ìdílé ẹni mẹ́rin ní Ìbàdàn, tàbí akẹ́kọ̀ọ́ kan ní Accra): fún ọjọ́ kọ̀ọ̀kan, àwọn oúnjẹ àti ẹgbẹ́ oúnjẹ tí wọ́n ní, pẹ̀lú èso tàbí ẹ̀fọ́ lójoojúmọ́; oúnjẹ fún ọmọ kékeré tàbí aboyún tàbí ìyá tó ń fún ọmọ lọ́mú tí ó wà nínú ilé; àkọsílẹ̀ ohun tí o máa rà pẹ̀lú iye owó ọjà rẹ àti àpapọ̀ ọ̀sẹ̀ náà ní ìfiwéra pẹ̀lú owó tí o ní; àti àṣà mẹ́ta tí o máa lò (iyọ̀ díẹ̀, ṣúgà díẹ̀, àti kọ́kọ́rọ́ kan sí oúnjẹ tí kò léwu).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ń ra oúnjẹ tàbí tí ń se oúnjẹ fún ilé ní Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco, Egypt àti káàkiri Áfíríkà: àwọn òbí, àwọn ìyá àgbà, àwọn ọ̀dọ́ tí ń gbé àwọn nìkan àti àwọn oníṣòwò kékeré tí ń ta oúnjẹ sísè. Owó tí ọ̀pọ̀ wọn ń rí kò pọ̀, kò sì dúró sójú kan, ọ̀pọ̀ wọn sì ń lo fóònù lásán.",
    startingPoint: "Ọ̀pọ̀ ló ń se oúnjẹ ìpìlẹ̀ tí ó ń yó ni (ugali, ìrẹsì, gaàrí, fùfú, banku, attiéké, búrẹ́dì) lójoojúmọ́, ṣùgbọ́n ẹ̀fọ́, ẹ̀wà tàbí oúnjẹ ẹranko sábà máa ń kéré nínú rẹ̀. Ọ̀pọ̀ ló ń fi iyọ̀, kúbù ọbẹ̀ (stock cube), ṣúgà tàbí òróró púpọ̀ sí i. Díẹ̀ ló ń fi iye owó oúnjẹ wé ara wọn tàbí ṣe ètò oúnjẹ ọ̀sẹ̀ kan, ọ̀pọ̀ kò sì dá wọn lójú bí a ṣe ń bọ́ ọmọ láti oṣù 6.",
    gap: "Ọ̀pọ̀ ìdílé ń jẹun tó láti yó, ṣùgbọ́n oúnjẹ wọn kò yàtọ̀ síra tó, èyí sì ń fa àìtó ẹ̀jẹ̀, ìdàgbàsókè tí kò dára fún àwọn ọmọdé, àti ní àwọn àgbàlagbà, ẹ̀jẹ̀ ríru àti àtọ̀gbẹ tí ń pọ̀ sí i. Àwọn akẹ́kọ̀ọ́ lè jẹun dáadáa sí i ní owó kan náà nípa yíyan oúnjẹ ìbílẹ̀ láti inú ẹgbẹ́ púpọ̀, dídín iyọ̀ àti ṣúgà kù, àti ṣíṣe ètò ohun tí wọ́n máa rà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ nípa oúnjẹ",
      "Owó: kò pọ̀, ó sì ń yí padà; ẹ̀kọ́ náà kò fúnni ní iye owó gidi, àpẹẹrẹ nìkan ni, àwọn akẹ́kọ̀ọ́ sì ń lo iye owó ọjà wọn",
      "Oúnjẹ yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn àti láti àsìkò kan sí òmíràn: àwọn àpẹẹrẹ wá láti Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire, Morocco àti Egypt",
      "Kò sí oúnjẹ fún àìsàn, àfikún oúnjẹ tàbí oògùn: àwọn ìbéèrè yẹn ń lọ sí ilé ìwòsàn tàbí onímọ̀ nípa oúnjẹ",
      "Ẹ̀rọ: fóònù lásán fún ẹ̀rọ ìṣirò àti àkọsílẹ̀, tàbí ìwé"
    ],
    prerequisites: "Kò sí. Ìṣirò àròpọ̀ àti ìsọdipúpọ̀ tó rọrùn ń ṣèrànwọ́ fún Ẹ̀kọ́ 4; ẹ̀rọ ìṣirò orí fóònù dára."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ oúnjẹ tí wọ́n ń tà ní ọjà rẹ", action: "pín oúnjẹ ìbílẹ̀ sí ẹgbẹ́ oúnjẹ agbára, oúnjẹ akọ́ra àti oúnjẹ adáàbòbò", standard: "kí o sì gba ó kéré tán 8 nínú 10 tọ̀nà" },
    { id: "O2", condition: "Pẹ̀lú oúnjẹ tí ó wà nínú ilé ìdáná rẹ", action: "ṣe ètò àwo oúnjẹ tó péye tí ó ní oúnjẹ ìpìlẹ̀, oúnjẹ akọ́ra àti ẹ̀fọ́ tàbí èso", standard: "kí ẹ̀fọ́ tàbí èso kún nǹkan bí ìdajì àwo náà" },
    { id: "O3", condition: "Tí a bá fún ọ ní ọ̀nà ìsebẹ̀ tàbí oúnjẹ kan nínú ilé", action: "yí ọ̀nà ìsebẹ̀ náà padà láti lo iyọ̀, ṣúgà àti òróró díẹ̀, kí o sì lo àwọn kọ́kọ́rọ́ márùn-ún WHO sí oúnjẹ tí kò léwu", standard: "kí o dárúkọ ó kéré tán ìyípadà méjì àti àwọn kọ́kọ́rọ́ márùn-ún" },
    { id: "O4", condition: "Pẹ̀lú iye owó láti ọjà rẹ", action: "fi iye owó oúnjẹ inú ẹgbẹ́ oúnjẹ kan náà wé ara wọn láti rí èyí tó tọ́ sí owó jù", standard: "kí o yan èyí tó dín owó tí ó ń fúnni ní èròjà kan náà, kí ìṣirò rẹ sì tọ̀nà" },
    { id: "O5", condition: "Fún ọmọ oṣù 6 sí 23, tàbí aboyún tàbí ìyá tó ń fún ọmọ lọ́mú", action: "ṣe ètò oúnjẹ ọjọ́ kan tí ó tẹ̀lé ìmọ̀ràn WHO nípa bíbọ́ wọn", standard: "pẹ̀lú iye oúnjẹ tó tọ́ fún ọjọ́ orí ọmọ náà, tàbí oúnjẹ tí ó ní iron síwájú sí i fún obìnrin náà" },
    { id: "O6", condition: "Pẹ̀lú iye ènìyàn inú ilé rẹ àti owó oúnjẹ rẹ", action: "kọ ètò oúnjẹ ọ̀sẹ̀ kan àti àkọsílẹ̀ ohun tí o máa rà", standard: "tí ó ní ẹgbẹ́ oúnjẹ púpọ̀ lójoojúmọ́, tí kò sì kọjá owó tí o ní" }
  ],
  chapters: [
    {
      name: "Orí 1: Mọ oúnjẹ rẹ",
      lessons: [
        {
          title: "Ẹgbẹ́ oúnjẹ pẹ̀lú oúnjẹ ìbílẹ̀",
          objectives: ["O1"],
          minutes: 5,
          goal: "Pín oúnjẹ tí wọ́n ń tà ní ọjà rẹ sí ẹgbẹ́ oúnjẹ agbára, oúnjẹ akọ́ra àti oúnjẹ adáàbòbò.",
          text: [
            "Kò sí oúnjẹ kan ṣoṣo tí ó ń fún ara ní gbogbo ohun tí ó nílò. Ọ̀nà tó rọrùn láti rántí ni ẹgbẹ́ mẹ́ta. Oúnjẹ agbára (oúnjẹ \"go\") ń fúnni ní okun: àgbàdo, ìrẹsì, ọkà bàbà, ọkà, ẹ̀gẹ́, iṣu, ọ̀gẹ̀dẹ̀ àgbagbà, ọ̀dùnkún, búrẹ́dì, àti òróró pẹ̀lú. Oúnjẹ akọ́ra (oúnjẹ \"grow\") ń kọ́ iṣan ara àti ẹ̀jẹ̀: ẹ̀wà, lentil, ẹ̀wà funfun (cowpeas), ẹ̀pà, ẹyin, ẹja, ẹran, adìyẹ àti wàrà. Oúnjẹ adáàbòbò (oúnjẹ \"glow\") ń ràn ara lọ́wọ́ láti bá àìsàn jà: ẹ̀fọ́ àti èso.",
            "Àpẹẹrẹ ìbílẹ̀: ní Kenya, ugali (agbára), githeri tàbí omena (akọ́ra) àti sukuma wiki (adáàbòbò). Ní Nàìjíríà, gaàrí tàbí iṣu (agbára), ẹ̀wà tàbí ẹ̀gúsí (akọ́ra) àti ẹ̀fọ́ ugu tàbí ewúro (adáàbòbò). Ní Ghana, banku tàbí kenkey (agbára), ẹja tàbí ọbẹ̀ ẹ̀pà (akọ́ra) àti kontomire (adáàbòbò). Ní Senegal, ìrẹsì tàbí ọkà bàbà pẹ̀lú niébé (ẹ̀wà) àti ẹ̀fọ́. Ní Egypt, búrẹ́dì pẹ̀lú ful (ẹ̀wà fava) àti sàláàdì.",
            "Àwọn oúnjẹ kan jẹ́ olùrànlọ́wọ́ pàtàkì. Ewé aláwọ̀ ewé dúdú (tẹ̀tẹ̀, ewé ẹ̀gẹ́, ewé moringa, kontomire) àti oúnjẹ aláwọ̀ ọsàn (ọ̀dùnkún aláwọ̀ ọsàn, ìbẹ́pẹ, máńgòrò, kárọ́ọ̀tì) ní fítámìn púpọ̀. Ẹ̀wà, ẹja kékeré gbígbẹ, ẹyin, ẹ̀dọ̀ àti ewé aláwọ̀ ewé dúdú ń fúnni ní iron, èyí tí ó ń dènà àìtó ẹ̀jẹ̀."
          ],
          steps: ["Kọ oúnjẹ tí ìdílé rẹ jẹ lánàá sílẹ̀.", "Sàmì sí ọ̀kọ̀ọ̀kan: agbára, akọ́ra tàbí adáàbòbò.", "Wo ẹgbẹ́ tí ó kù tàbí tí ó kéré.", "Dárúkọ oúnjẹ ìbílẹ̀ kan tí o lè fi kún un fún ẹgbẹ́ yẹn."],
          words: [["Ẹgbẹ́ oúnjẹ", "àwọn oúnjẹ tí ó ń ṣe irú iṣẹ́ kan náà nínú ara."], ["Oúnjẹ ìpìlẹ̀", "oúnjẹ àkọ́kọ́ tí ó ń yó ni, tí a ń jẹ ní ọ̀pọ̀ ọjọ́, bí ugali, ìrẹsì, gaàrí tàbí búrẹ́dì."], ["Àìtó ẹ̀jẹ̀ (anaemia)", "ẹ̀jẹ̀ tí kò lágbára, tí ó sábà máa ń wá láti inú iron tí kò tó; ó ń mú kí ó rẹ ènìyàn kí ara sì máa ṣe àìlera."]],
          slides: [
            { title: "Ẹgbẹ́ oúnjẹ mẹ́ta", bullets: ["Agbára (go): àgbàdo, ìrẹsì, ẹ̀gẹ́, iṣu, ọ̀gẹ̀dẹ̀ àgbagbà, búrẹ́dì", "Akọ́ra (grow): ẹ̀wà, ẹ̀pà, ẹyin, ẹja, ẹran, wàrà", "Adáàbòbò (glow): ẹ̀fọ́ àti èso"] },
            { title: "Àwo oúnjẹ ìbílẹ̀", bullets: ["Kenya: ugali, omena, sukuma wiki", "Nàìjíríà: gaàrí tàbí iṣu, ẹ̀wà, ugu", "Ghana: banku, ẹja, kontomire; Egypt: búrẹ́dì, ful, sàláàdì"] },
            { title: "Àwọn olùrànlọ́wọ́ pàtàkì", bullets: ["Ewé aláwọ̀ ewé dúdú àti oúnjẹ aláwọ̀ ọsàn: fítámìn", "Ẹ̀wà, ẹja kékeré gbígbẹ, ẹyin, ẹ̀dọ̀, ewé: iron"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Kọ gbogbo ohun tí ìdílé rẹ jẹ lánàá. Sàmì sí oúnjẹ kọ̀ọ̀kan pẹ̀lú A (agbára), K (akọ́ra) tàbí D (adáàbòbò). Fa òrùka yí ẹgbẹ́ tí ẹ jẹ jù lọ díẹ̀, kí o sì kọ oúnjẹ ìbílẹ̀ kan tí o lè fi kún un lọ́la.",
          youCanNow: "pín oúnjẹ ìbílẹ̀ sí ẹgbẹ́ agbára, akọ́ra àti adáàbòbò, kí o sì rí ohun tí ó kù.",
          quickCheck: [
            { objective: "O1", q: "Èwo nínú ìwọ̀nyí ni oúnjẹ akọ́ra?", options: ["Ẹ̀gẹ́", "Ẹ̀wà", "Ìrẹsì", "Ṣúgà"], answer: 1, why: "Ẹ̀wà ní protein púpọ̀, èyí tí ó ń kọ́ ara." },
            { objective: "O1", q: "Ìdílé kan ní Accra jẹ banku àti ọbẹ̀ ata nìkan ní gbogbo ọjọ́. Ẹgbẹ́ wo ló kù jù?", options: ["Oúnjẹ agbára", "Iyọ̀", "Oúnjẹ akọ́ra àti oúnjẹ adáàbòbò", "Kò sí nǹkan"], answer: 2, why: "Banku jẹ́ oúnjẹ agbára; oúnjẹ náà nílò ẹja tàbí ẹ̀wà àti ẹ̀fọ́." }
          ]
        },
        {
          title: "Ṣíṣe àwo oúnjẹ tó péye",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ṣe ètò àwo oúnjẹ tó péye tí ó ní oúnjẹ ìpìlẹ̀, oúnjẹ akọ́ra àti ẹ̀fọ́ tàbí èso.",
          text: [
            "Ìtọ́sọ́nà tó rọrùn fún oúnjẹ pàtàkì kọ̀ọ̀kan: nǹkan bí ìdajì àwo ni ẹ̀fọ́ àti èso, nǹkan bí ìdámẹ́rin ni oúnjẹ ìpìlẹ̀, nǹkan bí ìdámẹ́rin sì ni oúnjẹ akọ́ra. O kò nílò àwo gidi; ronú nípa abọ́ tàbí àwo ńlá tí ẹ jọ ń jẹ nínú rẹ̀ ní àwọn apá kan náà.",
            "WHO gba àwọn àgbàlagbà nímọ̀ràn láti jẹ ó kéré tán gíráàmù 400 èso àti ẹ̀fọ́ lójoojúmọ́, èyí tí ó tó nǹkan bí ẹ̀kúnwọ́ márùn-ún. Ewé tí a sè sínú ọbẹ̀ tàbí ọbẹ̀ ata náà kà. Ọkà odidi àti oúnjẹ tí a kò fọ̀ jù, bí ìrẹsì aláwọ̀ ilẹ̀ (brown rice), ọkà bàbà, ọkà tàbí ìyẹ̀fun àgbàdo odidi, ń jẹ́ kí ara yó pẹ́ sí i.",
            "Ṣe ìyípadà kékeré, kì í ṣe ilé ìdáná tuntun. Fi ẹ̀kúnwọ́ ẹ̀fọ́ kan kún ọbẹ̀. Fi ẹ̀wà kún ìrẹsì (waakye ní Ghana, ìrẹsì àti ẹ̀wà ní Nàìjíríà, githeri ní Kenya). Fi ẹja kékeré kan tàbí ẹyin kan kún un fún àwọn ọmọdé. Jẹ èso tí ó wà ní àsìkò rẹ̀ dípò ìpanu aládùn.",
            "Láti ran ara lọ́wọ́ láti lo iron inú ẹ̀wà àti ẹ̀fọ́, jẹ wọ́n pẹ̀lú oúnjẹ tí ó ní fítámìn C bí tòmátò, ọsàn, gúáfà tàbí máńgòrò. Mu tíì tàbí kọfí láàárín oúnjẹ, kì í ṣe pẹ̀lú oúnjẹ, nítorí wọ́n ń jẹ́ kí ó ṣòro fún ara láti gba iron."
          ],
          steps: ["Wo àwo náà lọ́kàn ní apá mẹ́rin.", "Fi ẹ̀fọ́ àti èso kún nǹkan bí ìdajì rẹ̀.", "Fi oúnjẹ ìpìlẹ̀ kún nǹkan bí ìdámẹ́rin.", "Fi oúnjẹ akọ́ra kún nǹkan bí ìdámẹ́rin.", "Fi oúnjẹ fítámìn C kún un; mu tíì láàárín oúnjẹ."],
          words: [["Tó péye", "oúnjẹ tí ó ní àdàpọ̀ ẹgbẹ́ oúnjẹ tó tọ́."], ["Ọkà odidi", "ọkà tí a kò yọ èèpo òde rẹ̀ kúrò, bí ìrẹsì aláwọ̀ ilẹ̀, ọkà bàbà tàbí ìyẹ̀fun àgbàdo odidi."]],
          slides: [
            { title: "Àwo oúnjẹ tó péye", bullets: ["Nǹkan bí ìdajì: ẹ̀fọ́ àti èso", "Nǹkan bí ìdámẹ́rin: oúnjẹ ìpìlẹ̀", "Nǹkan bí ìdámẹ́rin: oúnjẹ akọ́ra"] },
            { title: "Èso àti ẹ̀fọ́", bullets: ["WHO: ó kéré tán 400 g lójoojúmọ́ fún àgbàlagbà", "Nǹkan bí ẹ̀kúnwọ́ márùn-ún", "Ewé inú ọbẹ̀ náà kà"] },
            { title: "Ìyípadà kékeré", bullets: ["Ẹ̀fọ́ nínú ọbẹ̀; ẹ̀wà nínú ìrẹsì", "Ẹyin tàbí ẹja fún àwọn ọmọdé", "Èso àsìkò dípò ohun aládùn"] },
            { title: "Ran iron lọ́wọ́", bullets: ["Jẹ ẹ̀wà àti ẹ̀fọ́ pẹ̀lú tòmátò, ọsàn tàbí máńgòrò", "Tíì àti kọfí láàárín oúnjẹ, kì í ṣe pẹ̀lú oúnjẹ"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Ṣe ètò oúnjẹ pàtàkì ọ̀la pẹ̀lú oúnjẹ tí o ti ní. Ya àwo (tàbí abọ́) náà kí o sì kọ ohun tí ó máa wà ní apá kọ̀ọ̀kan. Fi oúnjẹ fítámìn C kan kún un.",
          youCanNow: "ṣe ètò àwo oúnjẹ tó péye tí ó ní oúnjẹ ìpìlẹ̀, oúnjẹ akọ́ra àti ẹ̀fọ́ tàbí èso tó pọ̀.",
          quickCheck: [
            { objective: "O2", q: "Lórí àwo oúnjẹ tó péye, ìwọ̀n wo ló yẹ kí ó jẹ́ ẹ̀fọ́ àti èso?", options: ["Nǹkan bí ìdajì", "Kò sí", "Igun kékeré kan", "Gbogbo rẹ̀"], answer: 0, why: "Nǹkan bí ìdajì àwo fún ẹ̀fọ́ àti èso ni ìtọ́sọ́nà tó rọrùn." },
            { objective: "O2", q: "Kí ló dé tí a fi ń jẹ tòmátò tàbí ọsàn pẹ̀lú ẹ̀wà àti ẹ̀fọ́?", options: ["Wọ́n ń fi iyọ̀ kún un", "Wọ́n ń ran ara lọ́wọ́ láti gba iron", "Wọ́n ń rọ́pò ẹ̀wà", "Wọ́n ń jẹ́ kí oúnjẹ pẹ́ kí ó tó bàjẹ́"], answer: 1, why: "Fítámìn C ń ran ara lọ́wọ́ láti lo iron inú oúnjẹ ewéko." }
          ]
        },
        {
          title: "Iyọ̀, ṣúgà àti òróró díẹ̀, àti oúnjẹ tí kò léwu",
          objectives: ["O3"],
          minutes: 5,
          goal: "Yí ọ̀nà ìsebẹ̀ kan padà láti lo iyọ̀, ṣúgà àti òróró díẹ̀, kí o sì lo àwọn kọ́kọ́rọ́ márùn-ún sí oúnjẹ tí kò léwu.",
          text: [
            "Iyọ̀ tí ó pọ̀ jù ń gbé ẹ̀jẹ̀ ríru sókè, èyí tí ó lè fa àrùn rọpárọsẹ̀ (stroke) àti àrùn ọkàn. WHO gba àwọn àgbàlagbà nímọ̀ràn láti jẹ iyọ̀ tí kò tó gíráàmù 5 lójoojúmọ́, èyí tí kò tó ṣíbí kékeré kan tí ó kún dọ́gba, pẹ̀lú gbogbo iyọ̀ inú kúbù ọbẹ̀, ìyẹ̀fun àsèje (seasoning), ẹja oníyọ̀ àti búrẹ́dì. Lo iyọ̀ díẹ̀ àti kúbù díẹ̀, kí o sì fi àlùbọ́sà, ayù, àtàlẹ̀, ata àti ewé atasánsán fún un ní adùn. Tí o bá ń lo iyọ̀, yan iyọ̀ tí a fi iodine sí.",
            "Ṣúgà: WHO gbani nímọ̀ràn láti jẹ́ kí ṣúgà ọ̀fẹ́ (ṣúgà tí a fi sínú oúnjẹ àti ohun mímu, àti ṣúgà inú oyin, ọtí ẹlẹ́rìn-dòdò (soda) àti omi èso) kéré sí 10% agbára ojoojúmọ́, bí ó bá sì kéré jù bẹ́ẹ̀ lọ, ó dára jù. Fún ọ̀pọ̀ àgbàlagbà, èyí kéré sí nǹkan bí ṣíbí kékeré 12 tí ó kún dọ́gba lójoojúmọ́. Tíì aládùn, soda àti omi èso ń yára pọ̀ sí i. Òróró: lo díẹ̀, kí o sì máa dín oúnjẹ díẹ̀; sè é, gbé e sórí èéfín omi (steam) tàbí se é bí ọbẹ̀ dípò bẹ́ẹ̀.",
            "Oúnjẹ tí kò léwu ń dènà ìgbẹ́ gbuuru àti májèlé oúnjẹ. Àwọn kọ́kọ́rọ́ márùn-ún WHO sí oúnjẹ tí kò léwu: jẹ́ mímọ́ (fọ ọwọ́ àti ibi tí o ti ń ṣiṣẹ́); ya oúnjẹ tútù sọ́tọ̀ kúrò lára oúnjẹ sísè; se oúnjẹ dáadáa, pàápàá ẹran, ẹja àti ẹyin; pa oúnjẹ mọ́ ní ìgbóná tàbí ìtutù tí kò léwu (má fi oúnjẹ sísè sílẹ̀ níta fún ọ̀pọ̀ wákàtí); kí o sì lo omi tí kò léwu àti oúnjẹ tútù tí kò léwu.",
            "Àwọn òfin wọ̀nyí ṣe pàtàkì jù bẹ́ẹ̀ lọ tí o bá ń ta oúnjẹ sísè, nítorí àṣìṣe kan lè mú ọ̀pọ̀ oníbàárà ṣàìsàn."
          ],
          steps: ["Ka iyọ̀, kúbù àti ṣúgà inú ọ̀nà ìsebẹ̀ kan tí o sábà máa ń lò.", "Dín ọ̀kọ̀ọ̀kan kù díẹ̀, kí o sì fi àlùbọ́sà, ayù, ata tàbí ewé atasánsán kún un.", "Yan láti se é bí ọbẹ̀ tàbí láti sè é dípò dídín lẹ́ẹ̀kan lọ́sẹ̀.", "Fi ọ̀nà ìsebẹ̀ náà wé àwọn kọ́kọ́rọ́ márùn-ún sí oúnjẹ tí kò léwu."],
          words: [["Iyọ̀ tí a fi iodine sí (iodized salt)", "iyọ̀ tí a fi iodine kún, èyí tí ara nílò."], ["Ṣúgà ọ̀fẹ́ (free sugars)", "ṣúgà tí a fi sínú oúnjẹ àti ohun mímu, pẹ̀lú ṣúgà inú oyin, ṣírọ́ọ̀pù àti omi èso."], ["Májèlé oúnjẹ", "àìsàn tí ó ń wá láti inú jíjẹ oúnjẹ tí kòkòrò àrùn tàbí májèlé wà nínú rẹ̀."]],
          slides: [
            { title: "Iyọ̀ díẹ̀", bullets: ["WHO: kò tó 5 g lójoojúmọ́, kò tó ṣíbí kékeré kan", "Ka kúbù, ìyẹ̀fun àsèje, ẹja oníyọ̀ àti búrẹ́dì", "Lo àlùbọ́sà, ayù, ata, ewé atasánsán; lo iyọ̀ olódine"] },
            { title: "Ṣúgà àti òróró díẹ̀", bullets: ["WHO: ṣúgà ọ̀fẹ́ kéré sí 10% agbára, díẹ̀ jù bẹ́ẹ̀ dára jù", "Tíì aládùn, soda àti omi èso ń yára pọ̀", "Dín díẹ̀: sè é, steam tàbí se é bí ọbẹ̀"] },
            { title: "Kọ́kọ́rọ́ márùn-ún sí oúnjẹ tí kò léwu (WHO)", bullets: ["Jẹ́ mímọ́; ya oúnjẹ tútù sọ́tọ̀ kúrò lára sísè", "Se é dáadáa; pa oúnjẹ mọ́ ní ìgbóná tí kò léwu", "Lo omi tí kò léwu àti oúnjẹ tútù tí kò léwu"] }
          ],
          sources: [WHO_DIET, WHO_FIVE_KEYS],
          tryIt: "Mú oúnjẹ kan tí ìdílé rẹ sábà máa ń jẹ, bí jọ̀lọ́ọ̀fù ìrẹsì, ọbẹ̀ ẹ̀gúsí, thieboudienne tàbí ọbẹ̀ ẹ̀wà. Kọ ìyípadà méjì tí ó ń dín iyọ̀, ṣúgà tàbí òróró kù, àti kọ́kọ́rọ́ kan sí oúnjẹ tí kò léwu tí o máa ṣe nígbà tí o bá ń sè é.",
          youCanNow: "yí ọ̀nà ìsebẹ̀ kan padà láti lo iyọ̀, ṣúgà àti òróró díẹ̀, kí o sì pa oúnjẹ mọ́ láìléwu pẹ̀lú àwọn kọ́kọ́rọ́ márùn-ún.",
          quickCheck: [
            { objective: "O3", q: "Ìyípadà wo ló ń dín iyọ̀ kù nínú ọbẹ̀?", options: ["Fi kúbù ọbẹ̀ méjì míì kún un", "Fi ẹja oníyọ̀ àti iyọ̀ síwájú sí i kún un", "Lo kúbù díẹ̀ kí o sì fi àlùbọ́sà, ayù àti ata kún un", "Fi ìyẹ̀fun àsèje síwájú sí i kún un"], answer: 2, why: "Kúbù àti ìyẹ̀fun àsèje ní iyọ̀ púpọ̀; ewé atasánsán àti èròjà ń fúnni ní adùn láìsí iyọ̀." },
            { objective: "O3", q: "Èwo ni ọ̀kan lára àwọn kọ́kọ́rọ́ márùn-ún WHO sí oúnjẹ tí kò léwu?", options: ["Fi oúnjẹ sísè sílẹ̀ níta ní gbogbo ọjọ́", "Ya oúnjẹ tútù sọ́tọ̀ kúrò lára oúnjẹ sísè", "Lo pákó kan náà fún ẹran tútù àti sàláàdì láìfọ̀ ọ́", "Tọ́ ẹran tútù wò láti ṣàyẹ̀wò rẹ̀"], answer: 1, why: "Yíya oúnjẹ tútù sọ́tọ̀ kúrò lára oúnjẹ sísè ń dá kòkòrò àrùn dúró láti tàn ká." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mọ oúnjẹ rẹ",
        questions: [
          { objective: "O1", q: "Èwo ni oúnjẹ adáàbòbò (glow)?", options: ["Kontomire (ewé kókò)", "Gaàrí", "Epo pupa", "Búrẹ́dì funfun"], answer: 0, why: "Ewé aláwọ̀ ewé jẹ́ oúnjẹ adáàbòbò tí ó kún fún fítámìn." },
          { objective: "O1", q: "Oúnjẹ wo ló ń fúnni ní iron láti dènà àìtó ẹ̀jẹ̀?", options: ["Ṣúgà", "Soda", "Ẹja kékeré gbígbẹ bí omena", "Tíì"], answer: 2, why: "Ẹja kékeré gbígbẹ, ẹ̀wà, ẹyin àti ewé dúdú ń fúnni ní iron." },
          { objective: "O2", q: "Oúnjẹ wo ló péye jù?", options: ["Ìrẹsì àti soda", "Ugali, ẹ̀wà àti sukuma wiki", "Búrẹ́dì àti tíì aládùn", "Gaàrí àti ṣúgà"], answer: 1, why: "Ó ní oúnjẹ ìpìlẹ̀, oúnjẹ akọ́ra àti ẹ̀fọ́." },
          { objective: "O2", q: "Èso àti ẹ̀fọ́ tó mélòó ni WHO gba àwọn àgbàlagbà nímọ̀ràn láti jẹ lójoojúmọ́?", options: ["Ègé kan", "Kò sí", "Ní ọjọ́ Àìkú nìkan", "Ó kéré tán 400 g, nǹkan bí ẹ̀kúnwọ́ márùn-ún"], answer: 3, why: "WHO gbani nímọ̀ràn ó kéré tán 400 g lójoojúmọ́ fún àgbàlagbà." },
          { objective: "O3", q: "WHO gba àwọn àgbàlagbà nímọ̀ràn láti jẹ́ kí iyọ̀ wọn kéré sí:", options: ["5 g lójoojúmọ́, kò tó ṣíbí kékeré kan tí ó kún dọ́gba", "Ife kan lójoojúmọ́", "Ṣíbí kékeré mẹ́wàá lójoojúmọ́", "Kò sí ààlà"], answer: 0, why: "Iyọ̀ tí kò tó 5 g lójoojúmọ́ ń dín ewu ẹ̀jẹ̀ ríru kù." }
        ]
      }
    },
    {
      name: "Orí 2: Jíjẹun dáadáa láìná owó púpọ̀",
      lessons: [
        {
          title: "Fífi iye owó oúnjẹ wé ara wọn",
          objectives: ["O4"],
          minutes: 5,
          goal: "Fi iye owó oúnjẹ inú ẹgbẹ́ kan náà wé ara wọn láti rí èyí tó tọ́ sí owó jù.",
          text: [
            "Oúnjẹ tó dára kò ní láti wọ́n jù. Ọgbọ́n ibẹ̀ ni láti fi oúnjẹ tí ó ń ṣe iṣẹ́ kan náà wé ara wọn. Fún oúnjẹ akọ́ra, fi ẹ̀wà, lentil, ẹ̀wà funfun, ẹ̀pà, ẹyin, ẹja kékeré gbígbẹ àti ẹran wé ara wọn nípa iye tí oúnjẹ ìdílé kan ti ọ̀kọ̀ọ̀kan ń ná. Ẹ̀wà àti ẹja kékeré sábà máa ń fúnni ní púpọ̀ fún owó díẹ̀.",
            "Bí a ṣe ń fi wé ara wọn: kọ iye owó àti ìwọ̀n tí o ń rí, lẹ́yìn náà ṣírò iye owó oúnjẹ ìdílé kan. Àpẹẹrẹ (nọ́mbà àhùsọ, kì í ṣe iye owó gidi): ife ẹ̀wà gbígbẹ kan jẹ́ NGN 600, ó sì ń bọ́ ìdílé lẹ́ẹ̀kan; ẹran fún oúnjẹ kan náà jẹ́ NGN 3,000. Ẹ̀wà fi ìlọ́po márùn-ún dín owó kù fún oúnjẹ yẹn. Lo iye owó ọjà rẹ; wọ́n ń yí padà pẹ̀lú àsìkò.",
            "Ọ̀nà láti fi owó pamọ́: ra èso àti ẹ̀fọ́ ní àsìkò wọn, nígbà tí wọ́n bá dín owó jù. Ra oúnjẹ gbígbẹ (ẹ̀wà, ọkà, ẹja gbígbẹ) ní ìwọ̀n tó pọ̀ pẹ̀lú àwọn aládùúgbò tàbí ẹgbẹ́ àjọ (savings group) rẹ, kí ẹ sì pín in. Gbin ewé bí tẹ̀tẹ̀, kale, moringa tàbí ẹ̀fọ́ spinach sínú ọgbà kékeré, àpò tàbí agolo. Dín soda, ìpanu aládùn àti ìpanu inú àpò kù, nítorí wọ́n wọ́n, wọn kò sì fúnni ní nǹkan púpọ̀.",
            "Má ṣe fi oúnjẹ ṣòfò: tọ́jú oúnjẹ gbígbẹ sínú àpótí tí a dé, tí ó gbẹ, kúrò lọ́dọ̀ ọ̀rinrin àti kòkòrò, kí o sì lo oúnjẹ tó ṣẹ́kù láìléwu ní ọjọ́ kejì."
          ],
          steps: ["Yan ẹgbẹ́ oúnjẹ kan, fún àpẹẹrẹ oúnjẹ akọ́ra.", "Kọ iye owó àti ìwọ̀n oúnjẹ mẹ́ta nínú ẹgbẹ́ yẹn.", "Ṣírò iye owó oúnjẹ ìdílé kan ti ọ̀kọ̀ọ̀kan.", "Yan èyí tó tọ́ sí owó jù, kí o sì kọ àwọn oúnjẹ tí ó wà ní àsìkò wọn."],
          words: [["Ìtọ́sí owó (value)", "iye oúnjẹ tó dára tí o ń rí fún owó rẹ."], ["Ní àsìkò rẹ̀", "àkókò ọdún tí a ń kórè irè oko kan, nígbà tí ó pọ̀ tí ó sì dín owó."]],
          slides: [
            { title: "Fi irú kan náà wé ara wọn", bullets: ["Ẹgbẹ́ oúnjẹ kan náà, iṣẹ́ kan náà", "Iye owó oúnjẹ ìdílé kan", "Ẹ̀wà àti ẹja kékeré sábà máa ń fúnni ní púpọ̀ fún owó díẹ̀"] },
            { title: "Bí a ṣe ń fi wé ara wọn", bullets: ["Kọ iye owó àti ìwọ̀n", "Ṣírò iye owó fún oúnjẹ ìdílé kan", "Lo iye owó ọjà rẹ; wọ́n ń yí padà"] },
            { title: "Ọ̀nà láti fi owó pamọ́", bullets: ["Ra ní àsìkò rẹ̀", "Ra oúnjẹ gbígbẹ lópọ̀ pẹ̀lú àwọn aládùúgbò", "Gbin ewé sínú àpò tàbí agolo; dín soda àti ìpanu kù"] }
          ],
          tryIt: "Ní ọjà tàbí ṣọ́ọ̀bù rẹ, kọ iye owó àti ìwọ̀n oúnjẹ akọ́ra mẹ́ta (fún àpẹẹrẹ ẹ̀wà, ẹyin àti ẹja gbígbẹ). Ṣírò iye owó oúnjẹ ìdílé kan ti ọ̀kọ̀ọ̀kan pẹ̀lú ẹ̀rọ ìṣirò orí fóònù rẹ. Fa òrùka yí èyí tó tọ́ sí owó jù. Kọ irú owó náà (KES, NGN, GHS, XOF, MAD tàbí tìrẹ).",
          youCanNow: "fi iye owó oúnjẹ wé ara wọn nípa iye owó oúnjẹ kan, kí o sì yan èyí tó tọ́ sí owó jù nínú ẹgbẹ́ oúnjẹ kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ọ̀nà tó tọ́ jù láti fi ẹ̀wà àti ẹran wé ara wọn?", options: ["Àwọ̀ àpò náà", "Ṣọ́ọ̀bù tó súnmọ́ jù", "Èyí tó wúwo jù", "Iye owó oúnjẹ ìdílé kan ti ọ̀kọ̀ọ̀kan"], answer: 3, why: "Iye owó fún oúnjẹ kan ń fi ohun tí o ń rí gan-an fún owó rẹ hàn." },
            { objective: "O4", q: "Àpẹẹrẹ nìkan: ẹ̀wà fún oúnjẹ kan jẹ́ XOF 500, ẹja fún oúnjẹ kan sì jẹ́ XOF 1,500. Ìlọ́po mélòó ni ẹ̀wà fi dín owó kù?", options: ["Ìlọ́po 2", "Ìlọ́po 3", "Ìlọ́po 5", "Wọ́n dọ́gba"], answer: 1, why: "1,500 pín sí 500 jẹ́ 3." }
          ]
        },
        {
          title: "Bíbọ́ àwọn ọmọ kékeré àti aboyún tàbí ìyá tó ń fún ọmọ lọ́mú",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣe ètò oúnjẹ ọjọ́ kan fún ọmọ kékeré tàbí aboyún tàbí ìyá tó ń fún ọmọ lọ́mú, ní títẹ̀lé ìmọ̀ràn WHO.",
          text: [
            "Àwọn ọmọ kékeré ń dàgbà kíákíá, ikùn wọn sì kéré, nítorí náà wọ́n nílò oúnjẹ kékeré lóòrèkóòrè tí ó kún fún oúnjẹ tó dára. WHO gbani nímọ̀ràn wàrà ọmú nìkan fún oṣù 6 àkọ́kọ́. Láti nǹkan bí oṣù 6, fi oúnjẹ ìdílé tí ó rọ̀, tí a gún tàbí tẹ̀ kún un, kí o sì máa fún ọmọ lọ́mú títí di ọdún 2 tàbí jù bẹ́ẹ̀ lọ. Bẹ̀rẹ̀ pẹ̀lú ìwọ̀n díẹ̀, kí o sì máa fúnni ní oúnjẹ tó pọ̀ sí i, tó ki sí i, tí ó sì yàtọ̀ síra sí i díẹ̀díẹ̀.",
            "Ìgbà mélòó (WHO): oúnjẹ 2 sí 3 lójoojúmọ́ fún ọmọ oṣù 6 sí 8; oúnjẹ 3 sí 4 lójoojúmọ́ fún ọmọ oṣù 9 sí 23, pẹ̀lú ìpanu 1 sí 2 tí ó bá nílò. Ṣe ògì (porridge) tó ki tó láti dúró lórí ṣíbí, kí o sì fi nǹkan láti inú ẹgbẹ́ míì kún un: ẹ̀wà tí a tẹ̀ tàbí ọ̀rá ẹ̀pà, ẹyin, ẹja kékeré tí a lọ̀ di lúúlúú, ẹ̀fọ́ tí a tẹ̀ tàbí ìbẹ́pẹ. Fún ọmọ náà ní abọ́ tirẹ̀ kí o lè rí iye tí ó jẹ.",
            "Àwọn aboyún àti ìyá tó ń fún ọmọ lọ́mú nílò oúnjẹ tó dára síwájú sí i, kì í ṣe oúnjẹ ìpìlẹ̀ nìkan. Fi oúnjẹ kékeré kan tàbí ìpanu kún un lójoojúmọ́, pẹ̀lú oúnjẹ tí ó ní iron (ẹ̀wà, ẹja kékeré, ẹyin, ẹ̀dọ̀, ewé dúdú) tí a jẹ pẹ̀lú oúnjẹ fítámìn C. Lọ sí gbogbo ìpàdé ìtọ́jú oyún (antenatal), kí o sì lo àfikún oúnjẹ tí ilé ìwòsàn fún ọ nìkan.",
            "Nígbà tí ọmọ bá ń ṣàìsàn, WHO gbani nímọ̀ràn ohun mímu púpọ̀ sí i àti fífún ọmọ lọ́mú púpọ̀ sí i, àti oúnjẹ rírọ̀ tí ọmọ fẹ́ràn. Lẹ́yìn àìsàn náà, fún ọmọ ní oúnjẹ síwájú sí i kí ó lè gbé ara rẹ̀ dìde. Tí ọmọ kò bá dàgbà dáadáa, tàbí tí ó rù gan-an tàbí tí ara rẹ̀ wú, lọ sí ilé ìwòsàn."
          ],
          steps: ["Wo ọjọ́ orí ọmọ náà ní oṣù.", "Ṣe ètò iye oúnjẹ fún ọjọ́ orí yẹn.", "Jẹ́ kí oúnjẹ kọ̀ọ̀kan ki, kí o sì fi ẹgbẹ́ oúnjẹ míì kún un.", "Fún aboyún tàbí ìyá tó ń fún ọmọ lọ́mú: fi ìpanu kan tí ó ní oúnjẹ iron àti fítámìn C kún un."],
          words: [["Oúnjẹ àfikún (complementary feeding)", "fífúnni ní oúnjẹ ìdílé láti nǹkan bí oṣù 6 nígbà tí fífún ọmọ lọ́mú ń bá a lọ."], ["Ìpanu", "oúnjẹ díẹ̀ láàárín oúnjẹ, bí ọ̀gẹ̀dẹ̀, ẹ̀pà tàbí ẹyin."]],
          slides: [
            { title: "Ọmọ ọwọ́ àti ọmọ kékeré (WHO)", bullets: ["Oṣù 0-6: wàrà ọmú nìkan", "Láti nǹkan bí oṣù 6: oúnjẹ ìdílé rírọ̀ pẹ̀lú wàrà ọmú", "Máa fún ọmọ lọ́mú títí di ọdún 2 tàbí jù bẹ́ẹ̀ lọ"] },
            { title: "Ìgbà mélòó", bullets: ["Oṣù 6-8: oúnjẹ 2-3 lójoojúmọ́", "Oṣù 9-23: oúnjẹ 3-4 lójoojúmọ́, pẹ̀lú ìpanu 1-2", "Ògì tó ki pẹ̀lú ẹgbẹ́ oúnjẹ míì"] },
            { title: "Aboyún àti ìyá tó ń fún ọmọ lọ́mú", bullets: ["Oúnjẹ kékeré kan tàbí ìpanu síwájú sí i", "Oúnjẹ iron pẹ̀lú fítámìn C", "Àfikún oúnjẹ tí ilé ìwòsàn fúnni nìkan"] },
            { title: "Ọmọ tí ń ṣàìsàn", bullets: ["Ohun mímu àti ọmú síwájú sí i", "Oúnjẹ rírọ̀ tí ó fẹ́ràn; oúnjẹ síwájú sí i lẹ́yìn náà", "Kò dàgbà dáadáa: lọ sí ilé ìwòsàn"] }
          ],
          sources: [WHO_IYCF, WHO_ANAEMIA],
          tryIt: "Ṣe ètò oúnjẹ ọjọ́ kan fún ọmọ oṣù 10 (fún àpẹẹrẹ ní Douala tàbí Kumasi) tàbí fún ìyá tó ń fún ọmọ lọ́mú. Kọ oúnjẹ àti ìpanu kọ̀ọ̀kan àti àwọn ẹgbẹ́ oúnjẹ tí ó ní.",
          youCanNow: "ṣe ètò oúnjẹ ọjọ́ kan fún ọmọ kékeré tàbí aboyún tàbí ìyá tó ń fún ọmọ lọ́mú tí ó tẹ̀lé ìmọ̀ràn WHO.",
          quickCheck: [
            { objective: "O5", q: "Oúnjẹ mélòó lójoojúmọ́ ni WHO gbani nímọ̀ràn fún ọmọ oṣù 7?", options: ["2 sí 3", "1", "6 sí 8", "Kò sí; wàrà ọmú nìkan"], answer: 0, why: "WHO gbani nímọ̀ràn oúnjẹ 2 sí 3 lójoojúmọ́ ní oṣù 6 sí 8, pẹ̀lú fífún ọmọ lọ́mú." },
            { objective: "O5", q: "Ògì wo ló dára jù fún ọmọ oṣù 9?", options: ["Ògì tí ó ṣàn bí omi pẹ̀lú ṣúgà", "Tíì lásán", "Ògì tó ki pẹ̀lú ọ̀rá ẹ̀pà tàbí ẹyin tí a tẹ̀", "Soda"], answer: 2, why: "Ògì tó ki pẹ̀lú ẹgbẹ́ oúnjẹ míì ń fúnni ní èròjà púpọ̀ sí i nínú ikùn kékeré." }
          ]
        },
        {
          title: "Kíkọ ètò oúnjẹ ọ̀sẹ̀ kan láìná owó púpọ̀",
          objectives: ["O6"],
          minutes: 6,
          goal: "Kọ ètò oúnjẹ ọ̀sẹ̀ kan àti àkọsílẹ̀ ohun tí o máa rà tí ó bá owó rẹ mu.",
          text: [
            "Ètò ń fi owó pamọ́, ó sì ń jẹ́ kí jíjẹun dáadáa rọrùn. Bẹ̀rẹ̀ pẹ̀lú owó oúnjẹ rẹ fún ọ̀sẹ̀ náà. Lẹ́yìn náà ṣe ètò àwọn oúnjẹ pàtàkì, pẹ̀lú oúnjẹ ìpìlẹ̀ tí kò wọ́n, ẹ̀wà tàbí ẹja kékeré ní ọ̀pọ̀ ọjọ́, àti ẹ̀fọ́ lójoojúmọ́. Ṣe ètò ẹyin, ẹran tàbí adìyẹ fún àwọn ọjọ́ kan tí owó bá gbà á.",
            "Tún àwọn oúnjẹ tí ìdílé rẹ fẹ́ràn ṣe, ṣùgbọ́n yí ẹ̀fọ́ tàbí ẹ̀wà padà kí oúnjẹ lè yàtọ̀ síra. Se ẹ̀wà lẹ́ẹ̀kan kí o sì lò ó fún oúnjẹ méjì. Kọ́kọ́ ṣe ètò oúnjẹ ọmọ àti ìpanu aboyún tàbí ìyá tó ń fún ọmọ lọ́mú, kí wọ́n má baà jẹ́ àwọn tí a gbàgbé.",
            "Láti inú ètò náà, kọ àkọsílẹ̀ ohun tí o máa rà pẹ̀lú iye owó ọjà rẹ, ṣírò àròpọ̀ wọn, kí o sì fi wé owó tí o ní. Tí ó bá kọjá, pàrọ̀ oúnjẹ olówó ńlá kan sí èyí tí kò wọ́n nínú ẹgbẹ́ kan náà, kì í ṣe sí òfo. Àpẹẹrẹ (nọ́mbà àhùsọ): ìdílé kan ní Nakuru tí owó oúnjẹ ọ̀sẹ̀ wọn jẹ́ KES 2,500 pàrọ̀ oúnjẹ ẹran méjì sí omena àti ẹ̀wà kí ó má baà kọjá owó wọn.",
            "Lẹ ètò náà mọ́ ògiri tàbí ya fọ́tò rẹ̀ sórí fóònù rẹ. Ní ìparí ọ̀sẹ̀, wo ohun tí o ná àti ohun tí o dà nù, kí o sì yí ètò ọ̀sẹ̀ tó ń bọ̀ padà."
          ],
          steps: ["Kọ owó oúnjẹ ọ̀sẹ̀ rẹ.", "Ṣe ètò àwọn oúnjẹ pàtàkì fún ọjọ́ méje pẹ̀lú ẹgbẹ́ oúnjẹ púpọ̀ lójoojúmọ́.", "Kọ́kọ́ ṣe ètò oúnjẹ fún àwọn ọmọdé àti aboyún tàbí ìyá tó ń fún ọmọ lọ́mú.", "Kọ àkọsílẹ̀ ohun tí o máa rà pẹ̀lú iye owó rẹ, kí o sì ṣírò àròpọ̀ rẹ̀.", "Tí ó bá kọjá owó rẹ, pàrọ̀ nínú ẹgbẹ́ oúnjẹ kan náà."],
          words: [["Owó tí a pinnu (budget)", "iye owó tí o ṣe ètò láti ná."], ["Ètò oúnjẹ", "àkọsílẹ̀ ohun tí o máa sè fún ọjọ́ kọ̀ọ̀kan."]],
          slides: [
            { title: "Bẹ̀rẹ̀ pẹ̀lú owó tí o ní", bullets: ["Owó oúnjẹ ọ̀sẹ̀", "Oúnjẹ ìpìlẹ̀ tí kò wọ́n, ẹ̀wà tàbí ẹja kékeré", "Ẹ̀fọ́ lójoojúmọ́"] },
            { title: "Ṣe ètò pẹ̀lú ọgbọ́n", bullets: ["Tún oúnjẹ tí ẹ fẹ́ràn ṣe, yí ẹ̀fọ́ padà", "Se ẹ̀wà lẹ́ẹ̀kan, lò ó lẹ́ẹ̀mejì", "Àwọn ọmọdé àti àwọn ìyá kọ́kọ́"] },
            { title: "Àkọsílẹ̀ ohun tí o máa rà", bullets: ["Iye owó ọjà rẹ", "Ṣírò àròpọ̀ kí o sì fi wé owó tí o ní", "Ó kọjá? Pàrọ̀ nínú ẹgbẹ́ oúnjẹ kan náà"] },
            { title: "Ṣàyẹ̀wò kí o sì ṣàtúnṣe", bullets: ["Èló ni o ná?", "Kí ló ṣòfò?", "Yí ètò ọ̀sẹ̀ tó ń bọ̀ padà"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò oúnjẹ ọ̀sẹ̀ kan rẹ. Fún ọjọ́ kọ̀ọ̀kan, kọ àwọn oúnjẹ àti ẹgbẹ́ oúnjẹ, pẹ̀lú èso tàbí ẹ̀fọ́ lójoojúmọ́; sàmì sí oúnjẹ fún ọmọ kékeré tàbí aboyún tàbí ìyá tó ń fún ọmọ lọ́mú; kọ àkọsílẹ̀ ohun tí o máa rà pẹ̀lú iye owó rẹ kí o sì fi àròpọ̀ rẹ̀ wé owó tí o ní; kí o sì kọ àṣà mẹ́ta tí o máa lò.",
          youCanNow: "kọ ètò oúnjẹ ọ̀sẹ̀ kan àti àkọsílẹ̀ ohun tí o máa rà tí ó ń bọ́ ilé rẹ dáadáa láìkọjá owó rẹ.",
          quickCheck: [
            { objective: "O6", q: "Àkọsílẹ̀ ohun tí o máa rà ti kọjá owó rẹ. Ìyípadà wo ló dára jù?", options: ["Yọ gbogbo ẹ̀fọ́ kúrò", "Pàrọ̀ oúnjẹ olówó ńlá kan sí èyí tí kò wọ́n nínú ẹgbẹ́ kan náà", "Fún àwọn ọmọdé ní oúnjẹ díẹ̀", "Ra soda síwájú sí i"], answer: 1, why: "Pípàrọ̀ nínú ẹgbẹ́ oúnjẹ kan náà ń jẹ́ kí oúnjẹ péye, kí ó sì dín owó kù." },
            { objective: "O6", q: "Oúnjẹ ta ni o yẹ kí o kọ́kọ́ ṣe ètò rẹ̀?", options: ["Àwọn àlejò", "Àwọn àgbàlagbà nìkan", "Kò sí ẹnìkan pàtó", "Àwọn ọmọ kékeré àti aboyún tàbí ìyá tó ń fún ọmọ lọ́mú"], answer: 3, why: "Àwọn ni wọ́n nílò oúnjẹ tó dára jù, nítorí náà a kò gbọ́dọ̀ gbàgbé wọn láéláé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Jíjẹun dáadáa láìná owó púpọ̀",
        questions: [
          { objective: "O4", q: "Èwo ni ọ̀nà tó dára láti fi owó pamọ́ lórí ẹ̀fọ́?", options: ["Ra wọ́n nígbà tí kì í ṣe àsìkò wọn nìkan", "Ra wọ́n ní àsìkò wọn tàbí gbin ewé sínú àpò", "Ra ìpanu inú àpò nìkan", "Má ṣe rà á lóòrèkóòrè kí o sì jẹ́ kí wọ́n jẹrà"], answer: 1, why: "Irè oko àsìkò dín owó, ewé sì ń hù ní irọ̀rùn nílé." },
          { objective: "O4", q: "Àpẹẹrẹ nìkan: 1 kg lentil ní Casablanca jẹ́ MAD 20, ó sì ń ṣe oúnjẹ ìdílé 4. Kí ni iye owó oúnjẹ kan?", options: ["MAD 80", "MAD 4", "MAD 5", "MAD 24"], answer: 2, why: "20 pín sí oúnjẹ 4 jẹ́ 5." },
          { objective: "O5", q: "Títí di ọjọ́ orí wo ni WHO gbani nímọ̀ràn láti máa fún ọmọ lọ́mú?", options: ["Ọdún 2 tàbí jù bẹ́ẹ̀ lọ", "Oṣù 6", "Oṣù 1", "Ó yẹ kí ó dúró nígbà tí oúnjẹ bá bẹ̀rẹ̀"], answer: 0, why: "Fífún ọmọ lọ́mú ń bá a lọ pẹ̀lú oúnjẹ ìdílé títí di ọdún 2 tàbí jù bẹ́ẹ̀ lọ." },
          { objective: "O5", q: "Kí ni ìyá tó ń fún ọmọ lọ́mú yẹ kí ó fi kún oúnjẹ rẹ̀ lójoojúmọ́?", options: ["Tíì aládùn síwájú sí i", "Kò sí nǹkan", "Ìrẹsì síwájú sí i nìkan", "Oúnjẹ kékeré kan tàbí ìpanu tí ó ní oúnjẹ iron"], answer: 3, why: "Ó nílò oúnjẹ tó dára síwájú sí i, pàápàá oúnjẹ tí ó ní iron." },
          { objective: "O6", q: "Kí ni ohun àkọ́kọ́ tí o máa kọ nígbà tí o bá ń ṣe ètò oúnjẹ ọ̀sẹ̀?", options: ["Owó oúnjẹ ọ̀sẹ̀ rẹ", "Orúkọ àwọn àlejò", "Soda tí o máa rà", "Kò sí nǹkan; kàn lọ rajà"], answer: 0, why: "Owó tí o ní ló ń pinnu ohun tí ètò náà lè ní." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Oúnjẹ Tó Dára Láìná Owó Púpọ̀ pẹ̀lú Oúnjẹ Ìbílẹ̀",
    questions: [
      { objective: "O1", q: "Èwo ni oúnjẹ agbára (go)?", options: ["Sukuma wiki", "Iṣu", "Ẹyin", "Ọsàn"], answer: 1, why: "Iṣu jẹ́ oúnjẹ ìpìlẹ̀ tí ó ń fúnni ní agbára." },
      { objective: "O1", q: "Èwo ni oúnjẹ akọ́ra (grow)?", options: ["Ẹ̀pà", "Ẹ̀gẹ́", "Ṣúgà", "Ìbẹ́pẹ"], answer: 0, why: "Ẹ̀pà ń fúnni ní protein." },
      { objective: "O1", q: "Ọ̀dùnkún aláwọ̀ ọsàn, ìbẹ́pẹ àti máńgòrò ní ọ̀pọ̀:", options: ["Iyọ̀", "Kò sí ohun tó wúlò", "Fítámìn", "Òróró"], answer: 2, why: "Oúnjẹ aláwọ̀ ọsàn ní fítámìn púpọ̀." },
      { objective: "O1", q: "Àìtó ẹ̀jẹ̀ sábà máa ń wá láti inú àìtó:", options: ["Ṣúgà", "Iyọ̀", "Òróró", "Iron"], answer: 3, why: "Àìtó iron ni ohun tó wọ́pọ̀ jù nínú oúnjẹ tí ó ń fa àìtó ẹ̀jẹ̀." },
      { objective: "O2", q: "Lórí àwo oúnjẹ tó péye, nǹkan bí ìdámẹ́rin ni:", options: ["Ohun aládùn", "Oúnjẹ akọ́ra", "Iyọ̀", "Soda"], answer: 1, why: "Nǹkan bí ìdámẹ́rin oúnjẹ ìpìlẹ̀, ìdámẹ́rin oúnjẹ akọ́ra, ìdajì ẹ̀fọ́ àti èso." },
      { objective: "O2", q: "Ìgbà wo ni o yẹ kí o mu tíì tí o bá fẹ́ gba iron láti inú oúnjẹ rẹ?", options: ["Láàárín oúnjẹ", "Pẹ̀lú gbogbo oúnjẹ", "Dípò jíjẹun", "Kò ṣe nǹkan kan"], answer: 0, why: "Tíì pẹ̀lú oúnjẹ ń jẹ́ kí ó ṣòro fún ara láti gba iron." },
      { objective: "O2", q: "Ìyípadà kékeré wo ló ń mú kí ìrẹsì péye sí i?", options: ["Fi iyọ̀ síwájú sí i kún un", "Fi ṣúgà kún un", "Fi ẹ̀wà àti ẹ̀fọ́ kún un", "Fi soda kún un"], answer: 2, why: "Ẹ̀wà àti ẹ̀fọ́ ń fi oúnjẹ akọ́ra àti adáàbòbò kún un." },
      { objective: "O3", q: "Èwo ló fi iyọ̀ púpọ̀ pamọ́ sínú?", options: ["Tòmátò tuntun", "Kúbù ọbẹ̀ àti ìyẹ̀fun àsèje", "Ẹ̀wà lásán", "Èso tuntun"], answer: 1, why: "Kúbù àti ìyẹ̀fun àsèje ní iyọ̀ púpọ̀ gan-an." },
      { objective: "O3", q: "Ohun mímu wo ló ń fi ṣúgà ọ̀fẹ́ tó pọ̀ jù kún un?", options: ["Omi mímọ́", "Tíì tí kò ní ṣúgà", "Wàrà lásán", "Ìgò soda kan"], answer: 3, why: "Soda kún fún ṣúgà tí a fi kún un." },
      { objective: "O3", q: "Oníṣòwò oúnjẹ kan ní Abidjan fi attiéké àti ẹja sísè sílẹ̀ níta ní gbogbo ọ̀sán nínú ooru. Kọ́kọ́rọ́ wo ló rú?", options: ["Pa oúnjẹ mọ́ ní ìgbóná tí kò léwu", "Se oúnjẹ dáadáa", "Lo iyọ̀ tí a fi iodine sí", "Jẹ ẹ̀fọ́ síwájú sí i"], answer: 0, why: "Kòkòrò àrùn ń yára pọ̀ nínú oúnjẹ sísè tí a fi sílẹ̀ ní ìgbóná fún ọ̀pọ̀ wákàtí." },
      { objective: "O3", q: "Ọ̀nà ìsebẹ̀ tí kò wọ́n tí ó sì ní ìlera ju dídín nínú òróró púpọ̀ ni:", options: ["Òróró síwájú sí i", "Ṣíse bí ọbẹ̀, sísè tàbí steam", "Dídín lẹ́ẹ̀mejì", "Fífi ṣúgà kún un"], answer: 1, why: "Ṣíse bí ọbẹ̀, sísè àti steam ń lo òróró díẹ̀." },
      { objective: "O4", q: "Láti fi ìtọ́sí owó wé ara wọn, o máa ṣírò:", options: ["Àpò tí ó dà bí ẹni pé ó tóbi jù", "Orúkọ olùtajà", "Iye owó oúnjẹ ìdílé kan", "Ṣọ́ọ̀bù tí èrò pọ̀ sí jù"], answer: 2, why: "Iye owó fún oúnjẹ kan ń fi ohun tí o ń rí gan-an hàn." },
      { objective: "O4", q: "Èso àti ẹ̀fọ́ sábà máa ń dín owó jù:", options: ["Nígbà tí kì í ṣe àsìkò wọn", "Nígbà tí wọ́n bá wà ní àsìkò wọn", "Nínú àpò", "Ní alẹ́ nìkan"], answer: 1, why: "Ní àsìkò wọn, wọ́n pọ̀, wọ́n sì dín owó." },
      { objective: "O4", q: "Àpẹẹrẹ nìkan: ẹyin fún oúnjẹ kan jẹ́ GHS 30, ẹ̀wà sì jẹ́ GHS 10. Èwo ló tọ́ sí owó jù fún oúnjẹ yẹn?", options: ["Ẹyin", "Wọ́n dọ́gba", "Kò sí èyí kankan", "Ẹ̀wà"], answer: 3, why: "Méjèèjì jẹ́ oúnjẹ akọ́ra, ẹ̀wà sì jẹ́ ìdámẹ́ta owó ẹyin." },
      { objective: "O5", q: "Fún oṣù 6 àkọ́kọ́, ọmọ ọwọ́ nílò:", options: ["Wàrà ọmú nìkan", "Omi àti ògì", "Tíì", "Wàrà màlúù àti ṣúgà"], answer: 0, why: "WHO gbani nímọ̀ràn wàrà ọmú nìkan fún oṣù 6 àkọ́kọ́." },
      { objective: "O5", q: "Ọmọ oṣù 12 yẹ kí ó jẹ nǹkan bí oúnjẹ mélòó lójoojúmọ́?", options: ["Ọ̀kan", "3 sí 4, pẹ̀lú ìpanu 1 sí 2 tí ó bá nílò", "Wàrà ọmú nìkan", "Mẹ́wàá"], answer: 1, why: "WHO gbani nímọ̀ràn oúnjẹ 3 sí 4 fún oṣù 9 sí 23, pẹ̀lú ìpanu bí ó ti nílò." },
      { objective: "O5", q: "Nígbà tí ọmọ kékeré bá ń ṣàìsàn, WHO gbani nímọ̀ràn:", options: ["Dá gbogbo oúnjẹ dúró", "Dá fífún ọmọ lọ́mú dúró", "Ohun mímu síwájú sí i, ọmú síwájú sí i àti oúnjẹ rírọ̀ tí ó fẹ́ràn", "Omi nìkan"], answer: 2, why: "Ohun mímu àti oúnjẹ síwájú sí i ń ran ọmọ lọ́wọ́ láti gbádùn." },
      { objective: "O6", q: "Ètò oúnjẹ ọ̀sẹ̀ tó dára ní:", options: ["Oúnjẹ ìpìlẹ̀ kan náà nìkan, lójoojúmọ́", "Ẹ̀fọ́ ní ọjọ́ Àìkú nìkan", "Kò ní owó tí a pinnu", "Ẹgbẹ́ oúnjẹ púpọ̀ lójoojúmọ́"], answer: 3, why: "Oúnjẹ tí ó yàtọ̀ síra lójoojúmọ́ ni àfojúsùn." },
      { objective: "O6", q: "Ọ̀nà tí kò wọ́n láti jẹ́ kí ẹ̀wà tó jù bẹ́ẹ̀ lọ nínú ètò náà ni láti:", options: ["Se é lẹ́ẹ̀kan kí o sì lò ó fún oúnjẹ méjì", "Da oúnjẹ tó ṣẹ́kù nù", "Máa se é ní wákàtí kọ̀ọ̀kan", "Ra á nínú àpò kékeré-kékeré"], answer: 0, why: "Sísè lẹ́ẹ̀kan ń fi epo ìdáná àti àkókò pamọ́, oúnjẹ tó ṣẹ́kù tí a tọ́jú láìléwu sì ń di oúnjẹ kejì." },
      { objective: "O6", q: "Ní ìparí ọ̀sẹ̀, o yẹ kí o:", options: ["Da ètò náà nù", "Wo ohun tí o ná àti ohun tí ó ṣòfò, kí o sì yí ètò ọ̀sẹ̀ tó ń bọ̀ padà", "Fi owó tí o pinnu kún ìlọ́po méjì", "Dẹ́kun ṣíṣe ètò"], answer: 1, why: "Ṣíṣàyẹ̀wò ń ràn ọ́ lọ́wọ́ láti mú ètò tó kàn dára sí i." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ẹgbẹ́ oúnjẹ lójoojúmọ́", objective: "O1", notYet: "Ọ̀pọ̀ ọjọ́ ní oúnjẹ ìpìlẹ̀ nìkan, tàbí a dárúkọ àwọn ẹgbẹ́ ní àṣìṣe.", meets: "Ọjọ́ kọ̀ọ̀kan ní oúnjẹ agbára, akọ́ra àti adáàbòbò, a sì dárúkọ wọn tọ̀nà.", exceeds: "Ó tún ní ewé aláwọ̀ ewé dúdú tàbí oúnjẹ aláwọ̀ ọsàn àti oúnjẹ iron ní ọ̀pọ̀ ọjọ́." },
      { name: "Oúnjẹ tó péye", objective: "O2", notYet: "Ẹ̀fọ́ tàbí èso kò sí ní àwọn ọjọ́ kan.", meets: "Ẹ̀fọ́ tàbí èso lójoojúmọ́, àwọn oúnjẹ pàtàkì sì tẹ̀lé àwo oúnjẹ tó péye.", exceeds: "A so oúnjẹ iron pọ̀ mọ́ oúnjẹ fítámìn C, a sì ń mu tíì láàárín oúnjẹ." },
      { name: "Iyọ̀, ṣúgà àti ààbò", objective: "O3", notYet: "Kò kọ àṣà kankan, tàbí wọn kò dín iyọ̀ tàbí ṣúgà kù.", meets: "Ó kọ àṣà iyọ̀ kan, àṣà ṣúgà kan àti ọ̀kan nínú àwọn kọ́kọ́rọ́ márùn-ún sí oúnjẹ tí kò léwu.", exceeds: "Ó fi àwọn ìyípadà hàn nínú àwọn ọ̀nà ìsebẹ̀ tí a dárúkọ nínú ètò náà." },
      { name: "Owó àti àkọsílẹ̀ ohun tí a ó rà", objective: "O4", notYet: "Kò sí iye owó, tàbí àròpọ̀ kò tọ̀nà tàbí ó kọjá owó láìsí pípàrọ̀.", meets: "Àkọsílẹ̀ ohun tí a ó rà pẹ̀lú iye owó ọjà ẹni àti àròpọ̀ tó tọ̀nà tí kò kọjá owó.", exceeds: "Ó fi ó kéré tán pípàrọ̀ kan nínú ẹgbẹ́ oúnjẹ kan hàn, ó sì kọ àwọn oúnjẹ tí ó wà ní àsìkò wọn." },
      { name: "Bíbọ́ àwọn tí ó nílò jù", objective: "O5", notYet: "Kò sí ètò fún ọmọ kékeré tàbí aboyún tàbí ìyá tó ń fún ọmọ lọ́mú tí ó wà nínú ilé.", meets: "Oúnjẹ àti ìpanu tẹ̀lé ìmọ̀ràn WHO fún ọjọ́ orí ọmọ náà tàbí fún obìnrin náà.", exceeds: "A kọ ògì tó ki pẹ̀lú ẹgbẹ́ oúnjẹ míì, àti iye oúnjẹ tó tọ́, fún ọjọ́ kọ̀ọ̀kan." },
      { name: "Ètò ọ̀sẹ̀", objective: "O6", notYet: "Àwọn ọjọ́ kan kò sí.", meets: "Oúnjẹ ọjọ́ méje, tí ó ṣetán láti lẹ̀ mọ́ ògiri tàbí láti fi sórí fóònù.", exceeds: "Ó ń lo oúnjẹ tó ṣẹ́kù láìléwu, ó sì ń tún oúnjẹ tí a fẹ́ràn ṣe pẹ̀lú oríṣiríṣi." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń jẹ ẹ̀fọ́ tàbí èso lójoojúmọ́ àti ẹ̀wà tàbí ẹja kékeré ní ọ̀pọ̀ ọjọ́ lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn ìdílé tí wọ́n sọ pé àwọn ń lo ètò oúnjẹ ọ̀sẹ̀, tí wọn kò sì kọjá owó oúnjẹ wọn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ti dín kúbù ọbẹ̀, iyọ̀ tàbí ohun mímu aládùn kù",
      "Àwọn ilé ìwòsàn alábàáṣiṣẹ́ tàbí òṣìṣẹ́ ìlera àwùjọ ń ròyìn pé bíbọ́ àwọn ọmọ oṣù 6 sí 23 ti dára sí i nínú ìdílé àwọn akẹ́kọ̀ọ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù lásán tí ó ní ẹ̀rọ ìṣirò, tàbí ìwé àti gègé",
      "Iye owó láti ọjà tàbí ṣọ́ọ̀bù àdúgbò fún àwọn ẹ̀kọ́ nípa iye owó",
      "Àwo, abọ́ tàbí àwòrán láti fi àwo oúnjẹ tó péye hàn",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Àwọn alábàáṣiṣẹ́ tó dára: ẹgbẹ́ obìnrin, ẹgbẹ́ àjọ, ilé-ẹ̀kọ́, ilé ìwòsàn àti òṣìṣẹ́ ìlera àwùjọ; ìfihàn bí a ṣe ń se oúnjẹ pẹ̀lú oúnjẹ ìbílẹ̀ ń ṣiṣẹ́ dáadáa.",
      "Lo oúnjẹ àti iye owó àdúgbò rẹ; àpẹẹrẹ nìkan ni iye owó inú ẹ̀kọ́ náà.",
      "Má ṣe fúnni ní oúnjẹ fún àìsàn tàbí ìmọ̀ràn nípa àfikún oúnjẹ; rán àwọn ìbéèrè yẹn sí ilé ìwòsàn tàbí onímọ̀ nípa oúnjẹ.",
      "Ṣọ́ra: àwọn akẹ́kọ̀ọ́ kan lè má ní oúnjẹ tó tó. Gbájú mọ́ ìyípadà tí kò ná owó púpọ̀, kí o sì tọ́ka sí ìrànlọ́wọ́ oúnjẹ àdúgbò níbi tí ó bá wà.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
