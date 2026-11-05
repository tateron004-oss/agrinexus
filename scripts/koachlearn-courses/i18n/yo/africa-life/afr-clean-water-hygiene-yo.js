"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-clean-water-hygiene.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WHO_WATER = { name: "World Health Organization (WHO, Àjọ Ìlera Àgbáyé): Ìwé òtítọ́ nípa omi mímu", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };
const CDC_SAFE_WATER = { name: "US Centers for Disease Control and Prevention (CDC): Bí a ṣe ń mú omi láìléwu (sísè, jíjẹ́ kí ó silẹ̀ àti sísẹ́, pípa kòkòrò)", url: "https://www.cdc.gov/healthywater/emergency/making-water-safe.html" };
const CDC_HANDS = { name: "CDC: Nípa fífọ ọwọ́ (àwọn àkókò pàtàkì àti ìgbésẹ̀)", url: "https://www.cdc.gov/clean-hands/about/index.html" };
const JMP_SANITATION = { name: "WHO/UNICEF Joint Monitoring Programme (JMP): Àtẹ̀gùn ìmọ́tótó ilé ìgbẹ́", url: "https://washdata.org/monitoring/sanitation" };
const WHO_DIARRHOEA = { name: "World Health Organization: Ìwé òtítọ́ nípa àrùn ìgbẹ́ gbuuru", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_CHOLERA = { name: "World Health Organization: Ìwé òtítọ́ nípa àrùn onígbáméjì (cholera)", url: "https://www.who.int/news-room/fact-sheets/detail/cholera" };

module.exports = {
  id: "afr-clean-water-hygiene-yo",
  lang: "yo",
  translationOf: "afr-clean-water-hygiene",
  category: "Africa: Life and Work",
  name: "Omi Mímọ́, Ilé Ìgbẹ́ Mímọ́ àti Ìmọ́tótó nínú Ilé",
  skills: "Yíyan orísun omi tí kò léwu jù, Mímú omi mímu láìléwu sí i, Fífi omi pamọ́ láìléwu, Fífi ọṣẹ fọ ọwọ́, Mímú ilé ìgbẹ́ àti ìgbẹ́ ọmọdé wà láìléwu, Dídá àmì ewu ìgbẹ́ gbuuru àti onígbáméjì mọ̀",
  outcome: "dáàbò bo omi, ọwọ́ àti ilé ìgbẹ́ ìdílé rẹ: yan omi tí kò léwu jù, mú un láìléwu sí i nílé, fi í pamọ́ ní bíbò, fi ọṣẹ fọ ọwọ́ ní àwọn àkókò pàtàkì, kó ìgbẹ́ kúrò láìléwu, kí o sì mọ àwọn àmì ìkìlọ̀ tí ó túmọ̀ sí pé o gbọ́dọ̀ lọ sí ilé ìwòsàn báyìí.",
  about: [
    "Kòkòrò àrùn inú omi, lórí ọwọ́ àti láti inú ìgbẹ́ ń fa ìgbẹ́ gbuuru, onígbáméjì (cholera) àti ibà jẹ̀funjẹ̀fun (typhoid). Ìgbẹ́ gbuuru wà lára ohun tí ó ń pa àwọn ọmọdé kékeré jù lọ, a sì lè dènà púpọ̀ nínú rẹ̀ pẹ̀lú omi tí kò léwu, ọṣẹ àti ilé ìgbẹ́ mímọ́. Ẹ̀kọ́ yìí wà fún àwọn ìyá, bàbá, bàbá àgbà àti ìyá àgbà, olùtọ́jú àti ọ̀dọ́ ní ìlú àti abúlé ní Kenya, Nàìjíríà, Ghana, DR Congo, Senegal, Egypt àti káàkiri Áfíríkà.",
    "O máa fi àwọn orísun omi tí ó wà nítòsí rẹ wé ara wọn, mú omi mímu láìléwu sí i nípa sísè tàbí pẹ̀lú ọjà chlorine, fi í pamọ́ kí ó lè wà ní mímọ́, ṣètò ibi tí a ti ń fi ọṣẹ fọ ọwọ́, dáàbò bo ilé ìgbẹ́ àti ìgbẹ́ àwọn ọmọdé, kí o sì kọ́ àwọn àmì ewu ìgbẹ́ gbuuru àti onígbáméjì.",
    "Ẹ̀kọ́ yìí ń kọ́ni bí a ṣe ń dènà àrùn àti ìgbà tí a máa wá ìrànlọ́wọ́. Kò sọ bí a ṣe ń tọ́jú àìsàn tàbí oògùn tí a máa fúnni: ti ilé ìwòsàn, òṣìṣẹ́ ìlera àdúgbò àti iléeṣẹ́ ìjọba tó ń bójú tó ìlera (ministry of health) ni ìyẹn. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" nílé."
  ],
  finalTask: "Ṣe ètò omi mímọ́ àti ìmọ́tótó ojú-ewé kan fún ilé rẹ: orísun omi rẹ tí kò léwu jù àti èyí tí o máa lò bí ìpamọ́, bí o ṣe máa mú omi mímu láìléwu sí i, bí o ṣe máa fi í pamọ́ àti bí o ṣe máa bù ú, ibi tí o ti ń fọ ọwọ́ àti àwọn àkókò pàtàkì tí ìdílé rẹ ń fọ ọwọ́, bí o ṣe ń dáàbò bo ilé ìgbẹ́ àti ìgbẹ́ ọmọdé, àti káàdì àmì ewu tí ó ní orúkọ àti nọ́mbà fóònù ilé ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò tí ó sún mọ́ ọ jù.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ìyá, bàbá, bàbá àgbà àti ìyá àgbà, olùtọ́jú àti ọ̀dọ́ káàkiri Áfíríkà, ní ìlú, ní àdúgbò tí kò ní ètò tó péye, àti ní abúlé. Ọ̀pọ̀ ń pọn omi láti kànga ẹ̀rọ (borehole), kànga, ilé ìtajà omi, odò tàbí ẹ̀rọ omi àjọlò, tàbí kí wọ́n ra omi inú ọ̀rá (sachet) tàbí inú jẹríkẹ́ẹ̀nì, wọ́n sì ń pín ilé ìgbẹ́ tàbí ṣalanga pẹ̀lú àwọn míì.",
    startingPoint: "Wọ́n mọ̀ pé omi ìdọ̀tí lè mú ènìyàn ṣàìsàn, wọ́n sì máa ń se omi fún àwọn ọmọ ọwọ́. Ọ̀pọ̀ kì í tọ́jú gbogbo omi mímu, wọ́n ń fi í pamọ́ sínú ohun èlò tí kò ní ìbòrí, wọ́n ń fi ọwọ́ ti ife bọ̀ ọ́, wọ́n ń fọ ọwọ́ láìsí ọṣẹ tàbí pẹ̀lú omi nìkan, kò sì dá wọn lójú àwọn àmì ìgbẹ́ gbuuru tí ó nílò ilé ìwòsàn lójú ẹsẹ̀.",
    gap: "Ìgbẹ́ gbuuru, onígbáméjì àti ibà jẹ̀funjẹ̀fun ń tàn kálẹ̀ nípasẹ̀ omi tí ó léwu, ọwọ́ tí a kò fọ̀ àti ìgbẹ́, wọ́n sì ń pa ọ̀pọ̀ ọmọdé kékeré. Àwọn ìdílé nílò àṣà ojoojúmọ́ díẹ̀, omi tí kò léwu, ọṣẹ ní àkókò tó tọ́ àti ilé ìgbẹ́ tí kò léwu, pẹ̀lú mímọ ìgbà tí wọ́n máa lọ sí ilé ìwòsàn lójú ẹsẹ̀, láti dáàbò bo àwọn ọmọ wọn.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń sọ Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì",
      "Ẹ̀rọ: fóònù lásán tí dátà rẹ̀ wọ́n; àwọn ẹ̀kọ́ ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì lẹ́yìn tí wọ́n bá ti wọlé",
      "Owó: owó kò pọ̀; lo àwọn ọ̀nà tí kò wọ́n (sísè, ọjà chlorine tí wọ́n ń tà fún omi, ọṣẹ, ibi ìfọwọ́ tó rọrùn)",
      "Ìlera: ìdènà àrùn àti àwọn àmì ìkìlọ̀ nìkan; kò sí ìwọ̀n oògùn, ìtọ́jú tàbí àyẹ̀wò àrùn; àwọn akẹ́kọ̀ọ́ ń tẹ̀lé ilé ìwòsàn wọn, òṣìṣẹ́ ìlera àdúgbò àti iléeṣẹ́ ìjọba tó ń bójú tó ìlera",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá iṣẹ́ ilé àti iṣẹ́ mu"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn orísun omi tí ó wà nítòsí ilé rẹ", action: "to àwọn orísun omi láti èyí tí kò léwu jù dé èyí tí ó léwu jù, kí o sì yan ọ̀kan fún mímu", standard: "kí o sì fúnni ní ìdí fún ọ̀kọ̀ọ̀kan, kí o sì dárúkọ orísun ìpamọ́ kan" },
    { id: "O2", condition: "Tí o bá ní omi láti orísun rẹ àti àwọn nǹkan tí ó wà nílé", action: "mú omi mímu láìléwu sí i nípa sísè é tàbí pẹ̀lú ọjà chlorine tí wọ́n ń tà fún omi", standard: "kí o sì tẹ̀lé gbogbo ìgbésẹ̀, títí kan jíjẹ́ kí omi tí ó dàrú silẹ̀ tàbí sísẹ́ ẹ ní àkọ́kọ́ àti títẹ̀lé ìwé tí ó wà lára ọjà náà" },
    { id: "O3", condition: "Tí o bá ní omi tí a ti tọ́jú àti àwọn ohun èlò omi nínú ilé rẹ", action: "fi omi mímu pamọ́ kí o sì bù ú lọ́nà tí ọwọ́ àti ìdọ̀tí kò fi ní kàn án", standard: "pẹ̀lú ohun èlò mímọ́ tí ó ní ìbòrí, kí o máa dà á tàbí lo ẹnu ẹ̀rọ (tap), láìfi nǹkan bọ̀ ọ́ láéláé" },
    { id: "O4", condition: "Tí o bá ní ọṣẹ tàbí eérú àti omi nílé", action: "fi ọṣẹ fọ ọwọ́ ní àwọn àkókò pàtàkì, kí o sì ṣètò ibi ìfọwọ́ kan", standard: "kí o sì fọ gbogbo apá ọwọ́ fún ó kéré tán ìṣẹ́jú-àáyá 20, pẹ̀lú ibi ìfọwọ́ nítòsí ilé ìgbẹ́ àti ilé ìdáná" },
    { id: "O5", condition: "Tí o bá ní ilé ìgbẹ́ tàbí ṣalanga àti àwọn ọmọdé kékeré nílé", action: "mú ilé ìgbẹ́ wà ní mímọ́, kí o sì kó ìgbẹ́ àwọn ọmọdé dànù láìléwu", standard: "láìsí ìgbẹ́ kankan ní gbangba, pẹ̀lú ìdérí tàbí ìbòrí tí a ń lò" },
    { id: "O6", condition: "Tí ẹnìkan nínú ìdílé bá ní ìgbẹ́ gbuuru tàbí ìgbẹ́ olómi", action: "dá àwọn àmì ewu àìtó omi nínú ara àti onígbáméjì mọ̀, kí o sì gbé ẹni náà lọ sí ilé ìwòsàn lójú ẹsẹ̀", standard: "kí o sì dárúkọ ó kéré tán àmì ewu mẹ́rin àti ilé ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò tí ó sún mọ́ ọ jù" }
  ],
  chapters: [
    {
      name: "Orí 1: Omi mímu tí kò léwu",
      lessons: [
        {
          title: "Yíyan orísun omi tí kò léwu jù",
          objectives: ["O1"],
          minutes: 5,
          goal: "To àwọn orísun omi tí ó wà nítòsí ilé rẹ láti èyí tí kò léwu jù dé èyí tí ó léwu jù.",
          text: [
            "Omi lè mọ́ lójú, kí ó sì ṣì ní kòkòrò àrùn. Ewu tí ó tóbi jù ni kí ìgbẹ́ (ìgbẹ́ ènìyàn tàbí ti ẹranko) wọ inú omi. WHO sọ pé omi tí ó léwu lè tan ìgbẹ́ gbuuru, onígbáméjì, ìgbẹ́ ẹ̀jẹ̀ (dysentery), ibà jẹ̀funjẹ̀fun, hepatitis A àti polio kálẹ̀. Omi odò àti adágún tún lè ní kòkòrò tí ó ń fa àrùn bilharzia (schistosomiasis).",
            "Àwọn orísun tí kò fi bẹ́ẹ̀ léwu sábà máa ń jẹ́ omi ẹ̀rọ (piped water), kànga ẹ̀rọ (borehole) tàbí kànga tí a dáàbò bò, tí ó ní ìbòrí àti ẹ̀rọ ìfami, orísun omi tí a dáàbò bò, àti omi òjò tí a gbà sínú táńkì mímọ́ tí ó ní ìbòrí. Àwọn orísun tí ó léwu jù ni kànga tí kò ní ìbòrí, orísun omi tí a kò dáàbò bò, odò, adágún, ọ̀gọ̀dọ̀ àti ìsédò (dam), níbi tí ènìyàn àti ẹranko ti ń wẹ̀, lúwẹ̀ẹ́ tí wọ́n sì ń mu omi. Omi láti ilé ìtajà omi, ọkọ̀ omi (tanker) tàbí ọ̀rá (sachet) dára tó ibi tí ó ti wá àti bí wọ́n ṣe tọ́jú rẹ̀ nìkan.",
            "Wo orísun kọ̀ọ̀kan nítòsí rẹ. Ṣé ó ní ìbòrí? Ṣé ilé ìgbẹ́, ṣalanga tàbí ọgbà ẹranko wà nítòsí rẹ̀, tàbí lókè rẹ̀? Ṣé àwọn ènìyàn ń fọ aṣọ níbẹ̀ tàbí jẹ́ kí ẹranko mu omi níbẹ̀? Yan èyí tí kò léwu jù fún mímu àti sísè oúnjẹ, àti ìpamọ́ kan fún ìgbà tí ó bá gbẹ tàbí bàjẹ́. Omi tó dára pàápàá lè di ìdọ̀tí lójú ọ̀nà ilé, nítorí náà o ṣì máa tọ́jú rẹ̀ kí o sì fi í pamọ́ dáadáa (àwọn ẹ̀kọ́ tó kàn)."
          ],
          steps: ["Kọ gbogbo orísun omi tí ìdílé rẹ ń lò sílẹ̀.", "Fún ọ̀kọ̀ọ̀kan béèrè pé: ṣé ó ní ìbòrí, ṣé a dáàbò bò ó, ṣé ó jìnnà sí ilé ìgbẹ́ àti ẹranko?", "To wọ́n láti èyí tí kò léwu jù dé èyí tí ó léwu jù.", "Yan ọ̀kan fún mímu àti sísè oúnjẹ, àti ìpamọ́ kan.", "Lo omi tí ó léwu jù fún fífọ nǹkan nìkan, kí o sì ṣì tọ́jú omi èyíkéyìí tí o bá máa mu."],
          words: [["Ìgbẹ́", "ìdọ̀tí tí ó ń jáde láti ara ènìyàn tàbí ẹranko (ìgbọ̀nsẹ̀)."], ["Orísun tí a dáàbò bò", "kànga, kànga ẹ̀rọ tàbí orísun omi tí a bò tí a sì dí kí ìdọ̀tí àti omi àgbàrá má lè wọ inú rẹ̀."], ["Bilharzia (schistosomiasis)", "àìsàn láti ọ̀dọ̀ kòkòrò kékeré inú àwọn odò àti adágún kan."]],
          slides: [
            { title: "Omi tí ó mọ́ lójú kò túmọ̀ sí pé kò léwu", bullets: ["Ìgbẹ́ inú omi ń tan kòkòrò àrùn kálẹ̀", "Ìgbẹ́ gbuuru, onígbáméjì, ibà jẹ̀funjẹ̀fun, hepatitis A", "Odò àti adágún lè ní kòkòrò bilharzia"] },
            { title: "Àwọn tí kò fi bẹ́ẹ̀ léwu", bullets: ["Omi ẹ̀rọ (piped water)", "Kànga ẹ̀rọ tàbí kànga tí a dáàbò bò, tí ó ní ìbòrí àti ẹ̀rọ ìfami", "Orísun omi tí a dáàbò bò; omi òjò nínú táńkì mímọ́ tí ó ní ìbòrí"] },
            { title: "Àwọn tí ó léwu jù", bullets: ["Kànga tí kò ní ìbòrí àti orísun omi tí a kò dáàbò bò", "Odò, ọ̀gọ̀dọ̀, adágún àti ìsédò", "Ilé ìtajà omi, tanker, sachet: dára tó orísun rẹ̀ nìkan"] },
            { title: "Ṣàyẹ̀wò orísun kọ̀ọ̀kan", bullets: ["Ṣé ó ní ìbòrí? Ṣé ó jìnnà sí ilé ìgbẹ́ àti ẹranko?", "Yan èyí tí kò léwu jù fún mímu, pẹ̀lú ìpamọ́ kan", "Ṣì tọ́jú rẹ̀ kí o sì fi í pamọ́ dáadáa"] }
          ],
          sources: [WHO_WATER],
          tryIt: "Kọ gbogbo orísun omi tí ìdílé rẹ ń lò sílẹ̀. Sàmì sí ọ̀kọ̀ọ̀kan pé kò fi bẹ́ẹ̀ léwu tàbí ó léwu jù, àti ìdí rẹ̀. Fa òbìrí yí èyí tí o máa lò fún mímu àti ìpamọ́ náà ká.",
          youCanNow: "fi àwọn orísun omi tí ó wà nítòsí rẹ wé ara wọn, kí o sì yan èyí tí kò léwu jù fún mímu, pẹ̀lú ìpamọ́ kan.",
          quickCheck: [
            { objective: "O1", q: "Orísun wo ni kò fi bẹ́ẹ̀ léwu jù fún mímu?", options: ["Kànga ẹ̀rọ tí a dáàbò bò, tí ó ní ìbòrí àti ẹ̀rọ ìfami", "Odò tí màlúù ti ń mu omi", "Ọ̀gọ̀dọ̀ tí kò ní ìbòrí", "Ìsédò tí àwọn ènìyàn ti ń fọ aṣọ"], answer: 0, why: "Orísun tí a dáàbò bò tí ó sì ní ìbòrí ń dá ìgbẹ́ àti omi àgbàrá dúró." },
            { objective: "O1", q: "Omi odò mọ́ lójú. Kí ni òótọ́?", options: ["Omi tí ó mọ́ lójú kò léwu nígbà gbogbo", "Omi tí ó mọ́ lójú ṣì lè ní kòkòrò àrùn, nítorí náà tọ́jú rẹ̀ kí o tó mu ún", "Omi pupa rẹ́súrẹ́sú nìkan ló léwu", "Àwọn odò máa ń fọ ara wọn mọ́"], answer: 1, why: "A kò lè fi ojú rí kòkòrò àrùn; omi tí ó mọ́ lójú ṣì lè ní wọn." }
          ]
        },
        {
          title: "Mímú omi mímu láìléwu sí i nílé",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mú omi mímu láìléwu sí i nípa sísè é tàbí pẹ̀lú ọjà chlorine tí wọ́n ń tà fún omi.",
          text: [
            "Tí omi rẹ bá lè léwu, tọ́jú rẹ̀ kí o tó mu ún, kí o tó po oúnjẹ ọmọ ọwọ́ tàbí wàrà ọmọ ọwọ́ (formula), àti kí o tó fọ eyín. Ọ̀nà méjì tí ó wọ́pọ̀ ni sísè àti chlorine. Àwọn méjèèjì ń ṣiṣẹ́ jù lórí omi tí ó mọ́.",
            "Tí omi bá dàrú, kọ́kọ́ jẹ́ kí ó silẹ̀ nínú ohun èlò mímọ́ kí ìdọ̀tí lè rì sísàlẹ̀, lẹ́yìn náà da omi tí ó mọ́ jáde gba inú aṣọ mímọ́ tí o ká ní ìgbà púpọ̀. Jíjẹ́ kí omi silẹ̀ àti sísẹ́ ẹ gba inú aṣọ kò mú kí omi láìléwu fúnra wọn; wọ́n ń múra rẹ̀ sílẹ̀ fún sísè tàbí chlorine.",
            "Sísè: jẹ́ kí omi hó gidigidi, pẹ̀lú ìhó ńláńlá, fún ìṣẹ́jú 1. Lókè lórí àwọn òkè gíga, ju nǹkan bí mítà 2,000 lọ, sè é fún ìṣẹ́jú 3. Jẹ́ kí ó tutù, ní bíbò, nínú ìkòkò kan náà tàbí nínú ohun èlò mímọ́.",
            "Chlorine: lo ọjà chlorine tí wọ́n ń tà fún omi mímu (olómi, kóró oògùn tàbí sachet) tàbí èyí tí òṣìṣẹ́ ìlera rẹ fún ọ. Tẹ̀lé ìwé tí ó wà lára rẹ̀ gẹ́lẹ́: èló fún iye omi wo, àti bí o ṣe máa dúró pẹ́ tó kí o tó mu ún (ó sábà máa ń jẹ́ ó kéré tán ìṣẹ́jú 30). Omi tí ó dàrú lè nílò púpọ̀ sí i; ìwé náà máa sọ fún ọ. Pa chlorine mọ́ kúrò lọ́wọ́ àwọn ọmọdé. Tí kò bá sí ìwé lára rẹ̀ tàbí tí kò bá dá ọ lójú, béèrè lọ́wọ́ òṣìṣẹ́ ìlera àdúgbò tàbí ilé ìwòsàn. WHO ń ṣàyẹ̀wò àwọn ọjà ìtọ́jú omi ilé kan; iléeṣẹ́ ìjọba tó ń bójú tó ìlera lè sọ èyí tí wọ́n fọwọ́ sí níbi tí o ń gbé."
          ],
          steps: ["Tí ó bá dàrú: jẹ́ kí ó silẹ̀, lẹ́yìn náà dà á gba inú aṣọ mímọ́ tí o ká.", "Sè é: jẹ́ kí ó hó gidigidi fún ìṣẹ́jú 1 (ìṣẹ́jú 3 lókè lórí àwọn òkè gíga), lẹ́yìn náà jẹ́ kí ó tutù ní bíbò.", "Tàbí chlorine: fi ọjà náà sí i bí ìwé rẹ̀ ṣe sọ, rú u, kí o sì dúró fún àkókò tí ó wà lórí ìwé náà.", "Dà á sínú ohun èlò mímọ́ tí ó ní ìbòrí.", "Pa àwọn ọjà chlorine mọ́ sí ibi tí ọwọ́ ọmọdé kò ti lè tó o."],
          words: [["Hó gidigidi", "omi tí ó ń hó kíkankíkan pẹ̀lú ìhó ńláńlá tí kò dúró nígbà tí o bá rú u."], ["Ọjà chlorine", "olómi, kóró oògùn tàbí sachet tí wọ́n ń tà láti pa kòkòrò àrùn nínú omi mímu."], ["Jẹ́ kí ó silẹ̀", "fi omi sílẹ̀ jẹ́ẹ́ kí ìdọ̀tí lè rì sísàlẹ̀."]],
          slides: [
            { title: "Ìgbà tí o máa tọ́jú omi", bullets: ["Kí o tó mu ún", "Kí o tó po oúnjẹ ọmọ ọwọ́ tàbí formula", "Kí o tó fọ eyín"] },
            { title: "Omi tí ó dàrú ní àkọ́kọ́", bullets: ["Jẹ́ kí ó silẹ̀", "Dà á gba inú aṣọ mímọ́ tí o ká", "Èyí ń múra rẹ̀ sílẹ̀; kò tíì láìléwu"] },
            { title: "Sísè", bullets: ["Jẹ́ kí ó hó gidigidi fún ìṣẹ́jú 1", "Ìṣẹ́jú 3 ju nǹkan bí mítà 2,000 lọ", "Jẹ́ kí ó tutù ní bíbò"] },
            { title: "Chlorine", bullets: ["Ọjà tí wọ́n ń tà fún omi mímu", "Tẹ̀lé ìwé rẹ̀: iye àti àkókò ìdúró", "Kò dá ọ lójú? Béèrè lọ́wọ́ òṣìṣẹ́ ìlera; pa á mọ́ kúrò lọ́wọ́ ọmọdé"] }
          ],
          sources: [CDC_SAFE_WATER, WHO_WATER],
          tryIt: "Yan ọ̀nà kan, sísè tàbí ọjà chlorine, kí o sì tọ́jú ohun èlò omi mímu kan lónìí, ní ìgbésẹ̀-ìgbésẹ̀. Kọ ìgbésẹ̀ kọ̀ọ̀kan tí o ṣe sílẹ̀.",
          youCanNow: "mú omi tí ó dàrú tàbí tí o ń ṣiyèméjì nípa rẹ̀ láìléwu sí i láti mu, nípa jíjẹ́ kí ó silẹ̀, lẹ́yìn náà sísè é tàbí lílo ọjà chlorine bí ìwé rẹ̀ ṣe sọ.",
          quickCheck: [
            { objective: "O2", q: "Omi rẹ dàrú. Kí ni o máa ṣe kí o tó sè é tàbí fi chlorine sí i?", options: ["Fi ṣúgà sí i", "Mu ún kíákíá", "Jẹ́ kí ó silẹ̀ kí o sì dà á gba inú aṣọ mímọ́ tí o ká", "Kò sí nǹkan; omi tí ó dàrú dára"], answer: 2, why: "Jíjẹ́ kí ó silẹ̀ àti sísẹ́ ẹ ń yọ ìdọ̀tí kúrò kí sísè tàbí chlorine lè ṣiṣẹ́ dáadáa." },
            { objective: "O2", q: "Fún ìgbà mélòó ni o máa jẹ́ kí omi hó gidigidi ní ibi tí kò ga jù?", options: ["Títí yóò fi lọ́ wọ́ọ́rọ́", "Ìṣẹ́jú-àáyá 5", "Títí ìdajì rẹ̀ yóò fi gbẹ", "Ìṣẹ́jú 1"], answer: 3, why: "CDC gbani nímọ̀ràn pé kí omi hó gidigidi fún ìṣẹ́jú 1, tàbí ìṣẹ́jú 3 lókè lórí àwọn òkè gíga." }
          ]
        },
        {
          title: "Fífi omi pamọ́ àti bíbù ú láìléwu",
          objectives: ["O3"],
          minutes: 4,
          goal: "Fi omi mímu pamọ́ kí o sì bù ú lọ́nà tí ọwọ́ àti ìdọ̀tí kò fi lè kàn án.",
          text: [
            "Omi tí kò léwu lè tún di ìdọ̀tí nínú ilé. Kòkòrò àrùn máa ń wọ inú rẹ̀ nígbà tí a bá ti ọwọ́ tàbí ife bọ inú ohun èlò náà, nígbà tí a bá fi í sílẹ̀ láìbò, tàbí nígbà tí ohun èlò náà fúnra rẹ̀ bá dọ̀tí.",
            "Fi omi mímu pamọ́ sínú ohun èlò mímọ́ tí ó ní ìdérí, èyí tí ó dára jù ni èyí tí ẹnu rẹ̀ kéré tàbí tí ó ní ẹnu ẹ̀rọ (tap). Gbé e sókè kúrò nílẹ̀ kí o sì pa á mọ́ kúrò lọ́dọ̀ ẹranko. Da omi jáde tàbí lo tap; má ṣe ti ife tàbí ọwọ́ rẹ bọ̀ ọ́ láéláé. Máa fi ọṣẹ àti omi tí kò léwu fọ ohun èlò náà àti ìdérí rẹ̀ léraléra, kí o sì dojú rẹ̀ dé kí ó lè gbẹ.",
            "Bíbo omi tún ń dá ẹ̀fọn dúró láti yé ẹyin sínú rẹ̀. Ya omi mímu sọ́tọ̀ kúrò lára omi fífọ nǹkan. Ìdílé kan ní Kumasi, Lubumbashi tàbí Kano lè lo òfin kan náà: ohun èlò omi mímu kan tí ó mọ́ tí ó sì ní ìbòrí fún ilé kọ̀ọ̀kan, kò sì sí ẹni tí ó máa ti nǹkan bọ̀ ọ́."
          ],
          steps: ["Lo ohun èlò mímọ́ tí ó ní ìdérí, ẹnu kékeré tàbí tap.", "Gbé e sókè kúrò nílẹ̀, kúrò lọ́dọ̀ ẹranko.", "Dà á tàbí lo tap: má ṣe ti ife tàbí ọwọ́ bọ̀ ọ́.", "Máa fi ọṣẹ àti omi tí kò léwu fọ ohun èlò náà léraléra.", "Ya omi mímu sọ́tọ̀ kúrò lára omi fífọ nǹkan."],
          words: [["Ohun èlò omi", "jẹríkẹ́ẹ̀nì, garawa, ìkòkò tàbí ìgò tí ó ń gbé omi dúró."], ["Títi nǹkan bọ̀ ọ́", "fífi ife tàbí ọwọ́ sínú omi láti bù díẹ̀ jáde."]],
          slides: [
            { title: "Omi tí kò léwu lè tún di ìdọ̀tí", bullets: ["Títi ọwọ́ tàbí ife bọ̀ ọ́", "Ohun èlò tí kò ní ìbòrí", "Ohun èlò tí ó dọ̀tí"] },
            { title: "Fi í pamọ́ dáadáa", bullets: ["Ohun èlò mímọ́ tí ó ní ìdérí, ẹnu kékeré tàbí tap", "Kúrò nílẹ̀, kúrò lọ́dọ̀ ẹranko", "Yà á sọ́tọ̀ kúrò lára omi fífọ nǹkan"] },
            { title: "Bù ú dáadáa", bullets: ["Dà á, tàbí lo tap", "Má ṣe ti ife tàbí ọwọ́ bọ̀ ọ́ láéláé", "Máa fi ọṣẹ fọ ohun èlò náà léraléra"] }
          ],
          sources: [WHO_WATER, CDC_SAFE_WATER],
          tryIt: "Wo bí ilé rẹ ṣe ń fi omi mímu pamọ́. Ṣé ó ní ìbòrí? Ṣé ẹnìkan ń ti nǹkan bọ̀ ọ́? Ṣe àyípadà kan lónìí, bí ìdérí, ṣíbí ìbumi tí ó ní ọwọ́ gígùn tí a so mọ́ ìkọ́, tàbí ohun èlò tí ó ní tap.",
          youCanNow: "fi omi mímu pamọ́ kí o sì bù ú lọ́nà tí yóò fi wà ní mímọ́ lẹ́yìn tí o ti tọ́jú rẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ọ̀nà tí kò léwu jù láti bu omi láti inú ohun èlò ìpamọ́?", options: ["Ti ife bọ̀ ọ́", "Dà á jáde tàbí lo tap", "Ti ọwọ́ rẹ bọ̀ ọ́", "Fi ìdérí sílẹ̀ ní ṣíṣí kí ó lè yára"], answer: 1, why: "Dídà á tàbí lílo tap ń pa ọwọ́ àti ife mọ́ kúrò nínú omi mímọ́." },
            { objective: "O3", q: "Kí ló dé tí a fi ń fi ìdérí sórí ohun èlò omi mímu?", options: ["Ó ń dá ìdọ̀tí, ọwọ́ àti ẹ̀fọn dúró", "Ó ń mú omi tutù sí i", "Fún ẹwà nìkan ni", "Ó ń mú omi hó"], answer: 0, why: "Ìdérí ń dá ìdọ̀tí, kòkòrò àrùn àti ẹyin ẹ̀fọn dúró kí wọ́n má wọ inú rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Omi mímu tí kò léwu",
        questions: [
          { objective: "O1", q: "Ṣalanga kan wà lókè kànga tí kò jìn tí kò sì ní ìbòrí. Kí ni o máa ṣe?", options: ["Mu omi rẹ̀; ó mọ́ lójú", "Lo kànga náà fún mímu nìkan", "Yan orísun tí kò fi bẹ́ẹ̀ léwu fún mímu, kí o sì tọ́jú omi èyíkéyìí tí o bá máa mu", "Fi ìdérí sórí ṣalanga nìkan"], answer: 2, why: "Ìgbẹ́ lè ṣàn láti ṣalanga wọ inú kànga tí kò ní ìbòrí nítòsí; yan orísun tí kò fi bẹ́ẹ̀ léwu kí o sì tọ́jú omi mímu." },
          { objective: "O2", q: "Ọ̀rọ̀ wo nípa ọjà chlorine fún omi ló tọ̀nà?", options: ["Lo iye tí o bá fẹ́", "Mu ún lójú ẹsẹ̀", "Gbogbo bleach jẹ́ ọ̀kan náà", "Tẹ̀lé ìwé rẹ̀ fún iye àti àkókò tí o máa dúró"], answer: 3, why: "Ìwé náà ló ń sọ iye tó tọ́ àti àkókò ìdúró fún ọjà yẹn." },
          { objective: "O2", q: "O ń gbé lókè lórí òkè gíga, ju nǹkan bí mítà 2,000 lọ. Fún ìgbà mélòó ni o máa sè é?", options: ["Ìṣẹ́jú 3, kí ó hó gidigidi", "Ìṣẹ́jú-àáyá 10", "Ìṣẹ́jú 1 nìkan", "Kò nílò sísè"], answer: 0, why: "Omi máa ń hó ní ìgbóná tí ó kéré lókè, nítorí náà CDC gbani nímọ̀ràn ìṣẹ́jú 3 níbẹ̀." },
          { objective: "O3", q: "Ọmọ rẹ ń ti ife bọ inú garawa omi. Kí ni àyípadà tó dára jù?", options: ["Sọ fún un pé kí ó yára bù ú", "Lo ohun èlò tí ó ní ìbòrí tí o ń dà láti inú rẹ̀, tàbí èyí tí ó ní tap", "Fi garawa náà sílẹ̀ ní ṣíṣí", "Fi ṣúgà sínú omi náà"], answer: 1, why: "Dídà á tàbí tap ń dá ọwọ́ àti ife ìdọ̀tí dúró kí wọ́n má dé inú omi mímọ́." },
          { objective: "O1", q: "Omi láti ilé ìtajà omi tàbí tanker...", options: ["Kò léwu nígbà gbogbo", "Kò dára rárá", "Kò léwu nígbà tí ó bá lọ́ wọ́ọ́rọ́ nìkan", "Ó dára tó orísun rẹ̀ àti bí wọ́n ṣe tọ́jú rẹ̀ nìkan"], answer: 3, why: "Omi tí a rà lè mọ́ tàbí kí ó dọ̀tí; béèrè nípa orísun rẹ̀, kí o sì ṣì fi í pamọ́ dáadáa." }
        ]
      }
    },
    {
      name: "Orí 2: Ọwọ́ mímọ́, ilé ìgbẹ́ tí kò léwu, ìgbésẹ̀ kíákíá",
      lessons: [
        {
          title: "Fífi ọṣẹ fọ ọwọ́ ní àwọn àkókò pàtàkì",
          objectives: ["O4"],
          minutes: 5,
          goal: "Fi ọṣẹ fọ ọwọ́ ní àwọn àkókò pàtàkì, kí o sì ṣètò ibi ìfọwọ́ kan nílé.",
          text: [
            "Fífi ọṣẹ fọ ọwọ́ wà lára ọ̀nà tí kò wọ́n jù láti dá ìgbẹ́ gbuuru àti àrùn àyà dúró. Omi nìkan kò tó; ọṣẹ ló ń yọ kòkòrò àrùn kúrò.",
            "Àwọn àkókò pàtàkì: lẹ́yìn lílo ilé ìgbẹ́; lẹ́yìn fífọ ìdí ọmọ tàbí pípààrọ̀ ìtẹ́dìí (nappy); ṣáájú, nígbà àti lẹ́yìn síse oúnjẹ; kí o tó jẹun àti kí o tó bọ́ ọmọ; lẹ́yìn títọ́jú ẹni tí ó ń ṣàìsàn ìgbẹ́ gbuuru tàbí èébì; lẹ́yìn fífún imú, wíwúkọ́ tàbí sísín; àti lẹ́yìn fífọwọ́kan ẹranko tàbí pàǹtí.",
            "Bí o ṣe máa ṣe é: fi omi mímọ́ tí ó ń ṣàn rin ọwọ́ rẹ, fi ọṣẹ sí i, fọ àtẹ́lẹwọ́, ẹ̀yìn ọwọ́, láàárín àwọn ìka àti abẹ́ èékánná fún ó kéré tán ìṣẹ́jú-àáyá 20 (nǹkan bí ìgbà tí o bá kọ orin kúkúrú lẹ́ẹ̀mejì), ṣan án nínú omi tí ó ń ṣàn, kí o sì jẹ́ kí afẹ́fẹ́ gbẹ ẹ́ tàbí lo aṣọ mímọ́. Níbi tí kò ti sí tap, ibi ìfọwọ́ kan ń ṣèrànwọ́: jẹríkẹ́ẹ̀nì tàbí ìgò tí ó ní ihò kékeré àti ìdérí, tí a so kọ́ tàbí tí a fi igi ẹsẹ̀ dà (tí wọ́n sábà máa ń pè ní tippy tap), pẹ̀lú ọṣẹ tí a so mọ́ okùn àti òkúta wẹ́wẹ́ díẹ̀ nísàlẹ̀ fún omi ìdọ̀tí. Gbé e sí nítòsí ilé ìgbẹ́ àti nítòsí ibi tí o ti ń se oúnjẹ."
          ],
          steps: ["Fi omi mímọ́ tí ó ń ṣàn rin ọwọ́.", "Fi ọṣẹ sí i.", "Fọ àtẹ́lẹwọ́, ẹ̀yìn ọwọ́, láàárín ìka àti abẹ́ èékánná fún ó kéré tán ìṣẹ́jú-àáyá 20.", "Ṣan án nínú omi tí ó ń ṣàn.", "Jẹ́ kí afẹ́fẹ́ gbẹ ẹ́ tàbí lo aṣọ mímọ́.", "Ṣètò ibi ìfọwọ́ kan nítòsí ilé ìgbẹ́ àti ilé ìdáná."],
          words: [["Àwọn àkókò pàtàkì", "àwọn ìgbà tí fífọ ọwọ́ ń dá kòkòrò àrùn tí ó pọ̀ jù dúró."], ["Ibi ìfọwọ́", "ibi kan tí ó dúró tí ó ní omi àti ọṣẹ fún fífọ ọwọ́."], ["Tippy tap", "ibi ìfọwọ́ tó rọrùn tí a fi jẹríkẹ́ẹ̀nì tàbí ìgò ṣe, tí o ń fi igi ẹsẹ̀ tẹ̀ kí ó lè da omi."]],
          slides: [
            { title: "Ọṣẹ, kì í ṣe omi nìkan", bullets: ["Ọṣẹ ń yọ kòkòrò àrùn kúrò lọ́wọ́", "Ó ń dá ìgbẹ́ gbuuru àti àrùn àyà dúró"] },
            { title: "Àwọn àkókò pàtàkì", bullets: ["Lẹ́yìn ilé ìgbẹ́ tàbí fífọ ìdí ọmọ", "Kí o tó se oúnjẹ, jẹun tàbí bọ́ ọmọ", "Lẹ́yìn títọ́jú aláìsàn; lẹ́yìn ẹranko tàbí pàǹtí"] },
            { title: "Bí o ṣe máa fọ̀ ọ́", bullets: ["Rin ín, fi ọṣẹ, fọ̀ ọ́ fún ó kéré tán ìṣẹ́jú-àáyá 20", "Àtẹ́lẹwọ́, ẹ̀yìn ọwọ́, láàárín ìka, abẹ́ èékánná", "Ṣan án nínú omi tí ó ń ṣàn; jẹ́ kí ó gbẹ tàbí lo aṣọ mímọ́"] },
            { title: "Ibi ìfọwọ́ nílé", bullets: ["Jẹríkẹ́ẹ̀nì tàbí ìgò tí ó ní tap tàbí igi ìdà", "Ọṣẹ lórí okùn; òkúta wẹ́wẹ́ nísàlẹ̀", "Nítòsí ilé ìgbẹ́ àti ilé ìdáná"] }
          ],
          sources: [CDC_HANDS, WHO_WATER],
          tryIt: "Ṣètò tàbí tún ibi ìfọwọ́ kan ṣe nílé lónìí, pẹ̀lú omi àti ọṣẹ, nítòsí ilé ìgbẹ́ tàbí ilé ìdáná. Lẹ́yìn náà fi bí a ṣe ń fọ ọwọ́ fún ìṣẹ́jú-àáyá 20 han gbogbo ènìyàn inú ilé rẹ.",
          youCanNow: "fi ọṣẹ fọ ọwọ́ dáadáa ní àwọn àkókò pàtàkì, kí o sì ṣètò ibi ìfọwọ́ kan nílé.",
          quickCheck: [
            { objective: "O4", q: "Ìgbà wo ni o gbọ́dọ̀ fi ọṣẹ fọ ọwọ́ rẹ?", options: ["Ẹ̀ẹ̀kan lójúmọ́ nìkan", "Kí o tó lọ sí ṣọ́ọ̀ṣì tàbí mọ́ṣáláṣí nìkan", "Lẹ́yìn ilé ìgbẹ́, lẹ́yìn fífọ ìdí ọmọ àti kí o tó se oúnjẹ tàbí jẹun", "Nígbà tí ó bá dọ̀tí lójú nìkan"], answer: 2, why: "Àwọn àkókò pàtàkì wọ̀nyí ń dá kòkòrò àrùn láti inú ìgbẹ́ dúró kí wọ́n má dé inú oúnjẹ àti ẹnu." },
            { objective: "O4", q: "Fún ìgbà mélòó ni o yẹ kí o fi ọṣẹ fọ ọwọ́?", options: ["Ìṣẹ́jú-àáyá 2", "Títí ọṣẹ yóò fi tán", "Àtẹ́lẹwọ́ nìkan, kíákíá", "Ó kéré tán ìṣẹ́jú-àáyá 20, gbogbo apá ọwọ́"], answer: 3, why: "Fífọ gbogbo apá ọwọ́ fún ó kéré tán ìṣẹ́jú-àáyá 20 ń yọ kòkòrò àrùn kúrò." }
          ]
        },
        {
          title: "Ilé ìgbẹ́ tí kò léwu àti ìgbẹ́ àwọn ọmọdé",
          objectives: ["O5"],
          minutes: 5,
          goal: "Mú ilé ìgbẹ́ rẹ wà ní mímọ́, kí o sì kó ìgbẹ́ àwọn ọmọdé dànù láìléwu.",
          text: [
            "Ìgbẹ́ tí a fi sílẹ̀ ní gbangba, nínú igbó, nínú oko, nínú gọ́tà tàbí nínú odò, ní kòkòrò àrùn tí eṣinṣin, ẹsẹ̀, òjò àti ọwọ́ ń gbé padà wá sínú oúnjẹ àti omi. WHO àti UNICEF ka ilé ìgbẹ́ sí èyí tí kò fi bẹ́ẹ̀ léwu nígbà tí ó bá ya ìgbẹ́ sọ́tọ̀ kúrò lọ́dọ̀ ènìyàn: ilé ìgbẹ́ onífọ̀ (flush) tàbí èyí tí a ń da omi sí (pour-flush), tàbí ṣalanga tí ó ní pẹpẹ (slab). Ilé ìgbẹ́ tí ìdílé rẹ kò pín pẹ̀lú àwọn míì tilẹ̀ dára jù.",
            "Mú ilé ìgbẹ́ tàbí ṣalanga wà ní mímọ́: máa fọ pẹpẹ tàbí ìjókòó rẹ̀ léraléra, máa fi ìdérí tàbí ìbòrí sórí ihò rẹ̀ kí eṣinṣin má lè dé ibẹ̀, kí o sì ní ibi ìfọwọ́ kan lẹ́gbẹ̀ẹ́ rẹ̀ gan-an. Àwọn ọmọdé náà nílò ilé ìgbẹ́ tí wọ́n lè lò láìléwu, bí ìkòkò ìgbẹ́ ọmọdé (potty) tàbí ìbòrí ihò kékeré.",
            "Ìgbẹ́ àwọn ọmọdé kékeré léwu bí ti àwọn àgbàlagbà. Dà wọ́n sínú ilé ìgbẹ́ tàbí ṣalanga lójú ẹsẹ̀, títí kan èyí tí ó wà nínú nappy àti potty, lẹ́yìn náà fi ọṣẹ fọ potty náà àti ọwọ́ rẹ. Má ṣe fi wọ́n sílẹ̀ nínú àgbàlá tàbí dà wọ́n sínú gọ́tà tàbí pàǹtí."
          ],
          steps: ["Máa fọ pẹpẹ tàbí ìjókòó léraléra.", "Máa fi ìdérí tàbí ìbòrí sórí ihò náà.", "Ní ọṣẹ àti omi lẹ́gbẹ̀ẹ́ ilé ìgbẹ́ gan-an.", "Da ìgbẹ́ àwọn ọmọdé sínú ilé ìgbẹ́ lójú ẹsẹ̀.", "Fi ọṣẹ fọ potty náà àti ọwọ́ rẹ."],
          words: [["Ṣalanga", "ilé ìgbẹ́ tí ó wà lórí kòtò nínú ilẹ̀ (pit latrine)."], ["Pẹpẹ (slab)", "ilẹ̀ líle tí ó wà lórí kòtò ṣalanga tí o ń dúró lé."], ["Ìyàgbẹ́ ní gbangba", "yíyàgbẹ́ nínú oko, igbó, odò tàbí ibi gbangba míì."]],
          slides: [
            { title: "Ìgbẹ́ ní gbangba máa ń padà wá", bullets: ["Eṣinṣin, ẹsẹ̀, òjò àti ọwọ́ ń gbé kòkòrò àrùn", "Sínú oúnjẹ àti omi"] },
            { title: "Ilé ìgbẹ́ tí kò fi bẹ́ẹ̀ léwu", bullets: ["Flush, pour-flush, tàbí ṣalanga tí ó ní pẹpẹ", "Èyí tí a kò pín pẹ̀lú ìdílé míì dára jù", "Ìdérí tàbí ìbòrí lórí rẹ̀; ọṣẹ àti omi lẹ́gbẹ̀ẹ́ rẹ̀"] },
            { title: "Ìgbẹ́ àwọn ọmọdé", bullets: ["Ó léwu bí ti àwọn àgbàlagbà", "Sínú ilé ìgbẹ́ lójú ẹsẹ̀", "Fi ọṣẹ fọ potty àti ọwọ́ rẹ"] }
          ],
          sources: [JMP_SANITATION, WHO_DIARRHOEA],
          tryIt: "Ṣàyẹ̀wò ilé ìgbẹ́ tàbí ṣalanga rẹ lónìí: ṣé ó mọ́, ṣé ó ní ìbòrí, ṣé ọṣẹ àti omi wà lẹ́gbẹ̀ẹ́ rẹ̀? Tún nǹkan kan ṣe. Fohùn ṣọ̀kan pẹ̀lú ìdílé rẹ nípa ibi tí ìgbẹ́ àwọn ọmọdé máa lọ nígbà gbogbo.",
          youCanNow: "mú ilé ìgbẹ́ tàbí ṣalanga wà ní mímọ́ àti ní bíbò, kí o sì kó ìgbẹ́ àwọn ọmọdé dànù láìléwu.",
          quickCheck: [
            { objective: "O5", q: "Níbo ni ìgbẹ́ ọmọ ọwọ́ láti inú nappy máa lọ?", options: ["Sínú ilé ìgbẹ́ tàbí ṣalanga lójú ẹsẹ̀", "Sínú àgbàlá", "Sínú gọ́tà", "Sínú òkìtì pàǹtí"], answer: 0, why: "Ìgbẹ́ àwọn ọmọdé náà ní kòkòrò àrùn, ó sì gbọ́dọ̀ lọ sínú ilé ìgbẹ́." },
            { objective: "O5", q: "Kí ló dé tí a fi ń fi ìdérí tàbí ìbòrí sórí ihò ṣalanga?", options: ["Kí ó lè lọ́ wọ́ọ́rọ́", "Kí eṣinṣin má lè gbé kòkòrò àrùn lọ sínú oúnjẹ", "Láti fi òórùn pamọ́ nìkan", "Kò pọn dandan"], answer: 1, why: "Eṣinṣin tí ó bà lé ìgbẹ́ lè gbé kòkòrò àrùn lọ sínú oúnjẹ." }
          ]
        },
        {
          title: "Ìgbẹ́ gbuuru àti onígbáméjì: ìgbà tí o máa lọ sí ilé ìwòsàn báyìí",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dá àwọn àmì ewu àìtó omi nínú ara àti onígbáméjì mọ̀, kí o sì wá ìrànlọ́wọ́ lójú ẹsẹ̀.",
          text: [
            "Ìgbẹ́ gbuuru ń fa omi àti iyọ̀ jáde kúrò nínú ara. Èyí ni a ń pè ní àìtó omi nínú ara (dehydration), ó sì lè pa ọmọdé kékeré kíákíá. Onígbáméjì (cholera) lè fa ìgbẹ́ olómi tí ó pọ̀ gan-an, WHO sì sọ pé ó lè pani láàárín wákàtí díẹ̀ tí a kò bá tọ́jú rẹ̀. Má ṣe dúró láti wò bóyá ó máa sàn.",
            "Lọ sí ilé ìwòsàn, ibùdó ìlera tàbí òṣìṣẹ́ ìlera àdúgbò BÁYÌÍ tí ẹni náà bá: ń tòògbé gan-an, ṣe aláìlágbára, rọ̀ jọ̀bọ̀jọ̀bọ̀ tàbí tí ó ṣòro láti jí; kò lè mu nǹkan tàbí tí ó ń mu díẹ̀ gan-an; ojú rẹ̀ ti wọ inú; awọ ara rẹ̀ ń padà sí ipò rẹ̀ díẹ̀díẹ̀ gan-an tí a bá fun ún; ń ya ìgbẹ́ olómi púpọ̀, bí omi ìrẹsì; ẹ̀jẹ̀ wà nínú ìgbẹ́ rẹ̀; ń bì léraléra; tàbí tí ìgbẹ́ gbuuru náà ti pẹ́ fún ọjọ́ púpọ̀. Ọmọ ọwọ́ tàbí ọmọdé kékeré tí ó ní ìgbẹ́ gbuuru nílò àbójútó àfikún.",
            "Iyọ̀ ìfomi-sára (ORS, oral rehydration salts) ń dá omi àti iyọ̀ tí ó sọnù padà, àwọn òṣìṣẹ́ ìlera sì tún ń fún àwọn ọmọdé ní zinc. Béèrè lọ́wọ́ ilé ìwòsàn rẹ, òṣìṣẹ́ ìlera àdúgbò tàbí ilé oògùn bí a ṣe ń lo ORS; fún un lójú ọ̀nà, bí wọ́n ṣe sọ fún ọ, ṣùgbọ́n ṣì lọ. Máa fún ọmọ lọ́mú nìṣó. Nígbà tí onígbáméjì bá bẹ́ sílẹ̀, tẹ́tí sí iléeṣẹ́ ìjọba tó ń bójú tó ìlera: wọ́n lè ṣe ìpolongo abẹ́rẹ́ àjẹsára àti ibùdó ìtọ́jú. Kọ orúkọ àti nọ́mbà fóònù ilé ìwòsàn àti òṣìṣẹ́ ìlera àdúgbò tí ó sún mọ́ ọ jù sórí káàdì kan, kí o sì pa owó ọkọ̀ mọ́ tí o bá lè ṣe é."
          ],
          steps: ["Máa ṣọ́ ẹnikẹ́ni tí ó ní ìgbẹ́ gbuuru dáadáa, pàápàá àwọn ọmọdé kékeré.", "Ṣàyẹ̀wò fún àwọn àmì ewu.", "Tí o bá rí èyíkéyìí, lọ sí ilé ìwòsàn tàbí pe òṣìṣẹ́ ìlera àdúgbò báyìí.", "Béèrè lọ́wọ́ òṣìṣẹ́ ìlera bí o ṣe máa fún un ní ORS, kí o sì máa fún ọmọ lọ́mú nìṣó.", "Fi ọṣẹ fọ ọwọ́ lẹ́yìn gbogbo ìfarakanra, kí o sì palẹ̀ mọ́ láìléwu."],
          words: [["Àìtó omi nínú ara (dehydration)", "nígbà tí ara bá pàdánù omi àti iyọ̀ jù."], ["ORS (oral rehydration salts)", "àdàpọ̀ iyọ̀ àti ṣúgà tí, tí a bá pò ó pọ̀ mọ́ omi tí kò léwu, ń dá ohun tí ìgbẹ́ gbuuru gbé jáde padà."], ["Onígbáméjì (cholera)", "àrùn láti inú omi tàbí oúnjẹ ìdọ̀tí tí ó ń fa ìgbẹ́ gbuuru olómi gan-an, tí ó sì lè pani kíákíá."], ["Ìbẹ́sílẹ̀ àrùn (outbreak)", "ọ̀pọ̀ ènìyàn tí ó ní àìsàn kan náà ní agbègbè kan ní àkókò kan náà."]],
          slides: [
            { title: "Ìgbẹ́ gbuuru lè pani kíákíá", bullets: ["Ara ń pàdánù omi àti iyọ̀", "Onígbáméjì lè pani láàárín wákàtí díẹ̀", "Má ṣe dúró"] },
            { title: "Lọ sí ilé ìwòsàn BÁYÌÍ tí", bullets: ["Ó ń tòògbé gan-an, ó rọ̀, ó ṣòro láti jí; kò lè mu nǹkan", "Ojú ti wọ inú; awọ tí a fun ń padà díẹ̀díẹ̀", "Ìgbẹ́ bí omi ìrẹsì tí ó pọ̀; ẹ̀jẹ̀ nínú ìgbẹ́", "Ó ń bì léraléra; ó ti pẹ́ fún ọjọ́ púpọ̀"] },
            { title: "Lójú ọ̀nà", bullets: ["Béèrè lọ́wọ́ òṣìṣẹ́ ìlera bí o ṣe máa fún un ní ORS", "Máa fún ọmọ lọ́mú nìṣó", "Fọ ọwọ́ lẹ́yìn gbogbo ìfarakanra"] },
            { title: "Wà ní ìmúrasílẹ̀", bullets: ["Káàdì tí ó ní nọ́mbà ilé ìwòsàn àti ti òṣìṣẹ́ ìlera", "Owó ọkọ̀ tí o bá lè ṣe é", "Nígbà ìbẹ́sílẹ̀ àrùn, tẹ̀lé iléeṣẹ́ ìjọba tó ń bójú tó ìlera"] }
          ],
          sources: [WHO_DIARRHOEA, WHO_CHOLERA],
          tryIt: "Ṣe káàdì àmì ewu: kọ àmì ewu mẹ́rin tàbí jù bẹ́ẹ̀ lọ, orúkọ àti nọ́mbà fóònù ilé ìwòsàn tàbí òṣìṣẹ́ ìlera àdúgbò tí ó sún mọ́ ọ jù, àti bí o ṣe máa dé ibẹ̀. Lẹ̀ ẹ́ mọ́ ògiri.",
          youCanNow: "dá àwọn àmì ewu àìtó omi nínú ara àti onígbáméjì mọ̀, kí o sì gbé ẹni náà dé ilé ìwòsàn lójú ẹsẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Èwo ni àmì ewu tí ó túmọ̀ sí pé kí o lọ sí ilé ìwòsàn báyìí?", options: ["Ìgbẹ́ rírọ̀ kan", "Ọmọ tí ó ń ṣeré bí ó ti máa ń ṣe", "Ọmọ tí ó ń tòògbé gan-an tí kò sì lè mu nǹkan", "Òùngbẹ lẹ́yìn bọ́ọ̀lù gbígbá"], answer: 2, why: "Títòògbé gan-an àti àìlè mu nǹkan jẹ́ àmì àìtó omi nínú ara tí ó le gan-an." },
            { objective: "O6", q: "Aládùúgbò kan ń ya ìgbẹ́ olómi tí ó pọ̀ gan-an bí omi ìrẹsì nígbà ìbẹ́sílẹ̀ onígbáméjì. Kí ni o máa ṣe?", options: ["Dúró di ọ̀la", "Fún un ní oògùn èyíkéyìí tí ó wà nílé", "Fi í pamọ́ fún àwọn òṣìṣẹ́ ìlera", "Ràn án lọ́wọ́ láti dé ilé ìwòsàn tàbí ibùdó ìtọ́jú báyìí"], answer: 3, why: "Onígbáméjì lè pani láàárín wákàtí díẹ̀; ìtọ́jú kíákíá ní ilé ìwòsàn ń gba ẹ̀mí là." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ọwọ́ mímọ́, ilé ìgbẹ́ tí kò léwu, ìgbésẹ̀ kíákíá",
        questions: [
          { objective: "O4", q: "Omi wà ṣùgbọ́n kò sí ọṣẹ níbi ìfọwọ́. Kí ni òótọ́?", options: ["Omi nìkan tó", "A nílò ọṣẹ láti yọ kòkòrò àrùn kúrò; wá ọṣẹ fún ibi ìfọwọ́ náà", "Ọwọ́ kò nílò fífọ̀", "Lo garawa omi mímu"], answer: 1, why: "Ọṣẹ ń yọ kòkòrò àrùn tí omi nìkan fi sílẹ̀ kúrò." },
          { objective: "O4", q: "Níbo ni ibi tó dára jù fún ibi ìfọwọ́?", options: ["Nítòsí ilé ìgbẹ́ àti nítòsí ibi tí o ti ń se oúnjẹ", "Jìnnà sí ilé", "Nínú garawa omi mímu", "Nínú yàrá ìsùn"], answer: 0, why: "Nítòsí ilé ìgbẹ́ àti ilé ìdáná ń mú kí fífọ ọwọ́ rọrùn ní àwọn àkókò pàtàkì." },
          { objective: "O5", q: "Ìgbẹ́ ọmọ tí ó ṣẹ̀ṣẹ̀ ń rìn wà nínú àgbàlá. Kí ni o máa ṣe?", options: ["Gbá a sínú gọ́tà", "Fi í sílẹ̀ kí ó gbẹ", "Fi yanrìn bò ó kí o sì fi í sílẹ̀", "Dà á sínú ilé ìgbẹ́ kí o sì fi ọṣẹ fọ ọwọ́ rẹ"], answer: 3, why: "Inú ilé ìgbẹ́ ni ìgbẹ́ àwọn ọmọdé yẹ kí ó lọ; lẹ́yìn náà fọ ọwọ́." },
          { objective: "O6", q: "Ọmọ rẹ ní ìgbẹ́ gbuuru, ojú rẹ̀ ti wọ inú, awọ tí a fun sì ń padà díẹ̀díẹ̀. Kí ni o máa ṣe?", options: ["Dúró fún ọjọ́ méjì", "Dá gbogbo ohun mímu dúró", "Lọ sí ilé ìwòsàn báyìí kí o sì béèrè bí o ṣe máa fún un ní ORS lójú ọ̀nà", "Fún un ní oògùn àgbàlagbà"], answer: 2, why: "Àwọn wọ̀nyí jẹ́ àmì àìtó omi nínú ara; òṣìṣẹ́ ìlera gbọ́dọ̀ rí ọmọ náà báyìí." },
          { objective: "O6", q: "Kí ni ORS ń ṣe?", options: ["Ó ń pa ẹ̀fọn", "Ó ń dá omi àti iyọ̀ tí ó sọnù nínú ìgbẹ́ gbuuru padà", "Ó ń fọ ilé ìgbẹ́", "Ó ń mú omi yára hó"], answer: 1, why: "ORS ń dá omi àti iyọ̀ tí ìgbẹ́ gbuuru gbé jáde kúrò nínú ara padà." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Omi Mímọ́, Ilé Ìgbẹ́ Mímọ́ àti Ìmọ́tótó nínú Ilé",
    questions: [
      { objective: "O1", q: "Kí ni ewu tí ó tóbi jù sí ààbò omi mímu?", options: ["Kí ìgbẹ́ wọ inú omi", "Omi tútù", "Omi líle", "Omi tí ó ní adùn irin"], answer: 0, why: "WHO sọ pé kòkòrò àrùn láti inú ìgbẹ́ ni ewu tí ó tóbi jù fún omi mímu." },
      { objective: "O1", q: "Ìbéèrè wo ló ń ràn ọ́ lọ́wọ́ láti ṣe ìdájọ́ kànga kan?", options: ["Àwọ̀ wo ni garawa náà?", "Ṣé ó ní ìbòrí, ṣé ó sì jìnnà sí ilé ìgbẹ́ àti ẹranko?", "Ta ló gbẹ́ ẹ?", "Ṣé ó wà nítòsí ọjà?"], answer: 1, why: "Orísun tí ó ní ìbòrí tí ó sì jìnnà sí ilé ìgbẹ́ àti ẹranko kò fi bẹ́ẹ̀ ṣeé ṣe kí ó ní ìgbẹ́." },
      { objective: "O1", q: "Kànga ẹ̀rọ tí o máa ń lò ti bàjẹ́. Kí ni o máa ṣe?", options: ["Mu omi odò láìtọ́jú rẹ̀", "Dẹ́kun mímu omi", "Lo orísun ìpamọ́ rẹ kí o sì tọ́jú omi náà kí o tó mu ún", "Lo omi fífọ nǹkan"], answer: 2, why: "Orísun ìpamọ́ pẹ̀lú ìtọ́jú ń mú omi mímu láìléwu sí i nígbà tí orísun àkọ́kọ́ bá bàjẹ́." },
      { objective: "O2", q: "Ọ̀nà méjì wo ló ń mú omi mímu láìléwu sí i nílé?", options: ["Fífi ṣúgà tàbí iyọ̀ sí i", "Fífi í sínú oòrùn fún wákàtí kan tàbí mímì í", "Mímú un tutù tàbí dídì í", "Sísè é, tàbí lílo ọjà chlorine tí wọ́n ń tà fún omi"], answer: 3, why: "Sísè àti ọjà chlorine ń pa kòkòrò àrùn; àwọn yòókù kò ṣe bẹ́ẹ̀." },
      { objective: "O2", q: "Ṣé dída omi tí ó dàrú gba inú aṣọ máa ń mú kí ó láìléwu?", options: ["Rárá; ó ń yọ ìdọ̀tí kúrò, ṣùgbọ́n o ṣì máa sè é tàbí fi chlorine sí i", "Bẹ́ẹ̀ ni, nígbà gbogbo", "Tí aṣọ náà bá jẹ́ tuntun nìkan", "Bẹ́ẹ̀ ni, tí o bá ṣe é lẹ́ẹ̀mejì"], answer: 0, why: "Aṣọ ń yọ ìdọ̀tí kúrò, kì í ṣe gbogbo kòkòrò àrùn; o ṣì nílò láti sè é tàbí lo chlorine." },
      { objective: "O2", q: "O ní ọjà chlorine ṣùgbọ́n ìwé rẹ̀ ti sọnù. Kí ni o máa ṣe?", options: ["Fojú díwọ̀n iye rẹ̀", "Fi púpọ̀ sí i kí ó lè dájú", "Béèrè lọ́wọ́ òṣìṣẹ́ ìlera àdúgbò tàbí ilé ìwòsàn bí o ṣe máa lò ó", "Mu ún lójú ẹsẹ̀ lẹ́yìn tí o fi sí i"], answer: 2, why: "Iye tó tọ́ àti àkókò ìdúró ṣe pàtàkì; òṣìṣẹ́ ìlera lè sọ fún ọ." },
      { objective: "O2", q: "Kí o tó po formula ọmọ ọwọ́, omi náà gbọ́dọ̀ jẹ́...", options: ["Láti inú odò tààrà", "Èyí tí a ti tọ́jú: tí a sè tí ó sì tutù, tàbí tí a tọ́jú láìléwu", "Èyí tí oòrùn mú lọ́ wọ́ọ́rọ́", "Omi èyíkéyìí"], answer: 1, why: "Àwọn ọmọ ọwọ́ ló wà nínú ewu jù; a gbọ́dọ̀ kọ́kọ́ tọ́jú omi wọn." },
      { objective: "O3", q: "Ohun èlò omi mímu wo ló dára jù?", options: ["Garawa tí kò ní ìbòrí lórí ilẹ̀", "Ohun èlò tí a fi gbé epo", "Ohun èlò mímọ́ tí ó ní ìbòrí, ẹnu kékeré tàbí tap, tí kò sí nílẹ̀", "Ìkòkò èyíkéyìí"], answer: 2, why: "Mímọ́, ní ìbòrí àti kúrò nílẹ̀ ń pa omi tí a ti tọ́jú mọ́ láìléwu." },
      { objective: "O3", q: "Kí ló dé tí kò sí ẹni tí ó gbọ́dọ̀ ti ife bọ inú omi mímu?", options: ["Ọwọ́ àti ife ń gbé kòkòrò àrùn wọ inú omi mímọ́", "Ó ń fi omi ṣòfò", "Ó ń pariwo", "Kò ní ọ̀wọ̀"], answer: 0, why: "Títi nǹkan bọ̀ ọ́ ń gbé kòkòrò àrùn láti ọwọ́ àti ife wọ inú gbogbo ohun èlò náà." },
      { objective: "O3", q: "Ìgbà mélòó ni o yẹ kí o fọ ohun èlò omi?", options: ["Láéláé", "Ẹ̀ẹ̀kan lọ́dún", "Nígbà tí ó bá ń rùn nìkan", "Léraléra, pẹ̀lú ọṣẹ àti omi tí kò léwu, lẹ́yìn náà dojú rẹ̀ dé kí ó gbẹ"], answer: 3, why: "Fífọ̀ ọ́ déédéé ń dá kòkòrò àrùn dúró láti pọ̀ sí i nínú ohun èlò náà." },
      { objective: "O4", q: "Èwo ni àkókò pàtàkì fún fífọ ọwọ́?", options: ["Kí o tó bọ́ ọmọ", "Lẹ́yìn wíwo tẹlifíṣọ̀n", "Kí o tó sùn nìkan", "Lẹ́yìn mímu omi"], answer: 0, why: "Ọwọ́ mímọ́ kí o tó bọ́ ọmọ ń pa kòkòrò àrùn mọ́ kúrò lẹ́nu ọmọ náà." },
      { objective: "O4", q: "Àwọn apá wo lára ọwọ́ ni o máa fọ̀?", options: ["Orí ìka nìkan", "Àtẹ́lẹwọ́, ẹ̀yìn ọwọ́, láàárín àwọn ìka àti abẹ́ èékánná", "Àtẹ́lẹwọ́ nìkan", "Ọwọ́ ọ̀tún nìkan"], answer: 1, why: "Kòkòrò àrùn ń farapamọ́ sí gbogbo apá ọwọ́, nítorí náà fọ gbogbo rẹ̀." },
      { objective: "O4", q: "Kò sí tap nílé rẹ. Báwo ni o ṣe lè fọ ọwọ́ nínú omi tí ó ń ṣàn?", options: ["Ti ọwọ́ rẹ bọ inú garawa omi mímu", "Fi aṣọ nu wọ́n nìkan", "Ṣe ibi ìfọwọ́ láti inú jẹríkẹ́ẹ̀nì tàbí ìgò tí ó ń da omi, pẹ̀lú ọṣẹ lórí okùn", "Má ṣe fọ̀ ọ́"], answer: 2, why: "Ibi ìfọwọ́ tó rọrùn ń fúnni ní omi tí ó ń ṣàn láìba omi tí a fi pamọ́ jẹ́." },
      { objective: "O5", q: "Ilé ìgbẹ́ wo ni WHO àti UNICEF kà sí èyí tí kò fi bẹ́ẹ̀ léwu?", options: ["Oko tí ó jìnnà sí ilé", "Garawa tí a dà sínú gọ́tà", "Kòtò tí kò ní pẹpẹ", "Ṣalanga tí ó ní pẹpẹ, tàbí ilé ìgbẹ́ flush tàbí pour-flush"], answer: 3, why: "Àwọn wọ̀nyí ń ya ìgbẹ́ sọ́tọ̀ kúrò lọ́dọ̀ ènìyàn; kòtò tí kò ní pẹpẹ tàbí oko gbangba kò ṣe bẹ́ẹ̀." },
      { objective: "O5", q: "Kí ló gbọ́dọ̀ wà lẹ́gbẹ̀ẹ́ ilé ìgbẹ́ nígbà gbogbo?", options: ["Ọṣẹ àti omi fún fífọ ọwọ́", "Ohun èlò omi mímu", "Oúnjẹ", "Kò sí nǹkan"], answer: 0, why: "Fífọ ọwọ́ lójú ẹsẹ̀ lẹ́yìn ilé ìgbẹ́ ń dá kòkòrò àrùn dúró láti tàn kálẹ̀." },
      { objective: "O5", q: "Kí ló dé tí ìgbẹ́ àwọn ọmọdé fi léwu?", options: ["Kò léwu", "Ó ní kòkòrò àrùn gẹ́gẹ́ bí ìgbẹ́ àwọn àgbàlagbà", "Nítorí òórùn rẹ̀ nìkan", "Nígbà tí ọmọ náà bá ń ṣàìsàn nìkan"], answer: 1, why: "Ìgbẹ́ àwọn ọmọdé ní kòkòrò àrùn kan náà, ó sì gbọ́dọ̀ lọ sínú ilé ìgbẹ́." },
      { objective: "O6", q: "Èwo nínú ìwọ̀nyí ló nílò ilé ìwòsàn báyìí?", options: ["Ìgbẹ́ rírọ̀ kan, ọmọ náà sì ń ṣeré", "Ọmọ tí òùngbẹ ń gbẹ lẹ́yìn tí ó sáré", "Ẹ̀jẹ̀ nínú ìgbẹ́", "Ọmọ tí ó fẹ́ jẹun"], answer: 2, why: "Ẹ̀jẹ̀ nínú ìgbẹ́ jẹ́ àmì ewu tí ó nílò òṣìṣẹ́ ìlera." },
      { objective: "O6", q: "Kí ló dé tí o kò fi gbọ́dọ̀ dúró nígbà tí ẹnìkan bá ní àmì onígbáméjì?", options: ["Nítorí pé ó jẹ́ ìtìjú", "Nítorí pé ilé ìwòsàn máa ń tètè tì", "Ó máa ń lọ fúnra rẹ̀", "Onígbáméjì lè pani láàárín wákàtí díẹ̀ láìsí ìtọ́jú"], answer: 3, why: "WHO sọ pé onígbáméjì lè pani láàárín wákàtí díẹ̀ tí a kò bá tọ́jú rẹ̀." },
      { objective: "O6", q: "Ọmọ ọwọ́ kan ní ìgbẹ́ gbuuru. Kí ni o máa ṣe nìṣó nígbà tí o ń wá ìrànlọ́wọ́?", options: ["Máa fún un lọ́mú nìṣó", "Dá gbogbo wàrà dúró", "Dá gbogbo ohun mímu dúró", "Fún un ní oògùn àgbàlagbà"], answer: 0, why: "Fífún ọmọ lọ́mú ń fún ọmọ ní omi àti oúnjẹ nìṣó; òṣìṣẹ́ ìlera máa gbani nímọ̀ràn lórí ìyókù." },
      { objective: "O6", q: "Kí ló yẹ kí ó wà lórí káàdì àmì ewu rẹ?", options: ["PIN owó orí fóònù rẹ", "Àwọn àmì ewu àti orúkọ àti nọ́mbà ilé ìwòsàn tàbí òṣìṣẹ́ ìlera tí ó sún mọ́ ọ jù", "Àkọsílẹ̀ àwọn oògùn àti ìwọ̀n wọn", "Kò sí nǹkan; o máa rántí"], answer: 1, why: "Nígbà pàjáwìrì, àwọn àmì náà àti ẹni tí o máa pè ni ohun tí o nílò lójú ẹsẹ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 4, 8, 11, 13, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Orísun omi", objective: "O1", notYet: "Kò yan orísun kankan, tàbí ó yan orísun tí ó léwu láìsí ìdí.", meets: "Ó to àwọn orísun pẹ̀lú ìdí; ó yan èyí tí kò léwu jù fún mímu, ó sì dárúkọ ìpamọ́ kan.", exceeds: "Ó tún kọ ohun tí ó mú orísun kọ̀ọ̀kan léwu (ilé ìgbẹ́, ẹranko, àìní ìbòrí) àti ẹni tí ó máa sọ fún nípa orísun tí ó bàjẹ́ tàbí tí ó dọ̀tí." },
      { name: "Mímú omi láìléwu sí i", objective: "O2", notYet: "Kò sí ọ̀nà ìtọ́jú, tàbí ọ̀nà tí ìgbésẹ̀ kan kù nínú rẹ̀ (kò sí àkókò sísè, kò sí àkókò ìdúró láti inú ìwé ọjà).", meets: "Sísè tàbí ọjà chlorine, pẹ̀lú jíjẹ́ kí omi tí ó dàrú silẹ̀ ní àkọ́kọ́, gbogbo ìgbésẹ̀ àti òfin ìwé ọjà.", exceeds: "Ó tún ṣètò ọ̀nà ìpamọ́ kan, ó sì pa chlorine mọ́ kúrò lọ́wọ́ àwọn ọmọdé." },
      { name: "Ìpamọ́ àti bíbù", objective: "O3", notYet: "Ohun èlò tí kò ní ìbòrí, tàbí wọ́n ṣì ń ti nǹkan bọ̀ ọ́.", meets: "Ohun èlò mímọ́ tí ó ní ìbòrí, kúrò nílẹ̀, tí a ń dà tàbí lo tap, tí a sì ń fọ̀ léraléra.", exceeds: "Omi mímu wà lọ́tọ̀ kúrò lára omi fífọ nǹkan, gbogbo ènìyàn inú ilé sì mọ òfin pé a kò gbọdọ̀ ti nǹkan bọ̀ ọ́." },
      { name: "Fífọ ọwọ́", objective: "O4", notYet: "Kò sí ibi ìfọwọ́ tàbí kò sí ọṣẹ; àwọn àkókò pàtàkì kò sí níbẹ̀.", meets: "Ibi kan tí ó ní omi àti ọṣẹ nítòsí ilé ìgbẹ́ tàbí ilé ìdáná, a sì kọ àwọn àkókò pàtàkì sílẹ̀.", exceeds: "Àwọn ibi ìfọwọ́ wà nítòsí ilé ìgbẹ́ àti ilé ìdáná méjèèjì, a sì ti fi fífọ ọwọ́ ìṣẹ́jú-àáyá 20 han gbogbo ẹbí." },
      { name: "Ilé ìgbẹ́ àti ìgbẹ́ àwọn ọmọdé", objective: "O5", notYet: "Ìgbẹ́ wà ní gbangba tàbí kò sí ètò fún ìgbẹ́ àwọn ọmọdé.", meets: "Ilé ìgbẹ́ wà ní mímọ́ àti ní bíbò, ìgbẹ́ àwọn ọmọdé sì ń lọ sínú rẹ̀ nígbà gbogbo.", exceeds: "Àwọn ẹbí ń pín iṣẹ́ ìfọ̀mọ́ láàárín ara wọn, ọṣẹ sì wà lẹ́gbẹ̀ẹ́ ilé ìgbẹ́." },
      { name: "Káàdì àmì ewu", objective: "O6", notYet: "Àmì ewu kò tó mẹ́rin, tàbí kò sí nọ́mbà ilé ìwòsàn.", meets: "Ó kéré tán àmì ewu mẹ́rin àti orúkọ àti nọ́mbà ilé ìwòsàn tàbí òṣìṣẹ́ ìlera tí ó sún mọ́ ọ jù.", exceeds: "Ó tún ní bí a ṣe máa dé ibẹ̀ àti ètò fún owó ọkọ̀, láìsí ìwọ̀n oògùn kankan lórí káàdì náà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn ilé tí ń tọ́jú gbogbo omi mímu tí wọ́n sì ń fi í pamọ́ ní bíbò lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn ilé tí ó ní ibi ìfọwọ́ pẹ̀lú ọṣẹ lẹ́yìn ọjọ́ 30",
      "Ìgbẹ́ gbuuru tí ó dín kù láàárín àwọn ọmọdé kékeré, bí àwọn ìdílé tàbí àwọn òṣìṣẹ́ ìlera àdúgbò ṣe ròyìn ní àsìkò tó tẹ̀lé e",
      "Dídé ilé ìwòsàn kíákíá fún ìgbẹ́ gbuuru tí ó ní àmì ewu, bí àwọn òṣìṣẹ́ ìlera àdúgbò ṣe ròyìn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ọṣẹ, ohun èlò omi tí ó ní ìdérí, àti jẹríkẹ́ẹ̀nì tàbí ìgò fún ibi ìfọwọ́",
      "Ìkòkò láti se omi, tàbí ọjà chlorine tí wọ́n ń tà fún omi mímu pẹ̀lú ìwé rẹ̀",
      "Ìwé àti gègé fún ètò náà àti káàdì àmì ewu",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ó ń ṣiṣẹ́ dáadáa pẹ̀lú ẹgbẹ́ obìnrin, ẹgbẹ́ àwọn ìyá, ilé-ìwé, ẹgbẹ́ ẹ̀sìn àti ìbẹ̀wò òṣìṣẹ́ ìlera àdúgbò; ẹ ṣe ìdánwò ṣáájú pọ̀.",
      "Ẹ jọ kọ́ ibi ìfọwọ́ kan nígbà Ẹ̀kọ́ 4; apá yìí ni àwọn akẹ́kọ̀ọ́ máa ń rántí jù.",
      "Pe òṣìṣẹ́ ìlera àdúgbò tàbí nọ́ọ̀sì ilé ìwòsàn sí ìpàdé lórí àwọn àmì ewu àti ORS.",
      "Má ṣe fúnni ní ìwọ̀n oògùn tàbí ìmọ̀ràn ìtọ́jú; fi gbogbo ìbéèrè nípa ìtọ́jú ránṣẹ́ sí ilé ìwòsàn, òṣìṣẹ́ ìlera àdúgbò tàbí iléeṣẹ́ ìjọba tó ń bójú tó ìlera.",
      "Nígbà ìbẹ́sílẹ̀ onígbáméjì, lo àwọn ọ̀rọ̀ ìkéde ìsinsìnyí láti ọ̀dọ̀ iléeṣẹ́ ìjọba tó ń bójú tó ìlera àti ibi tí àwọn ibùdó ìtọ́jú wà.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
