"use strict";

// Koach Learn course (Yoruba translation of shared/crypto-and-blockchain.js). Explains how crypto works and its risks; it does NOT recommend buying (README rule 6).
// See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md. US agency names (FTC, SEC, CFTC, FDIC, FBI, IC3) are kept and explained.

const FTC_CRYPTO = { name: "FTC (àjọ ìjọba Amẹ́ríkà tó ń dáàbò bo àwọn oníbàárà): ohun tó yẹ kí o mọ̀ nípa crypto àti jìbìtì", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" };

module.exports = {
  id: "crypto-and-blockchain-yo",
  lang: "yo",
  translationOf: "crypto-and-blockchain",
  category: "Seniors and Technology",
  name: "Òye Owó Crypto àti Blockchain",
  skills: "Ṣíṣàlàyé blockchain ní ọ̀rọ̀ tó rọrùn, Ṣíṣàlàyé bí a ṣe ń fi crypto ránṣẹ́ àti bí a ṣe ń pa á mọ́, Dídárúkọ àwọn ewu, Dídá jìbìtì crypto mọ̀, Fífi ẹjọ́ jìbìtì sùn",
  outcome: "ṣàlàyé ní ọ̀rọ̀ tó rọrùn bí blockchain àti owó crypto ṣe ń ṣiṣẹ́, dárúkọ àwọn ewu pàtàkì, kí o sì fi àwọn àmì ìkìlọ̀ jìbìtì wé ìpolówó tàbí ọ̀rọ̀ crypto èyíkéyìí, kí o lè ṣe ìpinnu tìrẹ pẹ̀lú ìṣọ́ra, kí o sì mọ ibi tí o ti lè fi ẹjọ́ jìbìtì sùn.",
  about: [
    "O ń gbọ́ nípa Bitcoin àti crypto lórí ìròyìn, níbi iṣẹ́, lọ́dọ̀ ẹbí àti nínú ìpolówó. Àwọn kan ń jèrè owó; ọ̀pọ̀ ló ń pàdánù rẹ̀, crypto sì wà lára ọ̀nà tí àwọn oníjìbìtì máa ń fẹ́ kí a fi san owó fún wọn jù. Ẹ̀kọ́ yìí ṣàlàyé bí ó ṣe ń ṣiṣẹ́ kí o lè lóye rẹ̀, kí o sì dáàbò bo ara rẹ àti àwọn tí o fẹ́ràn.",
    "Ní Orí 1, o máa kọ́ ohun tí blockchain jẹ́, ohun tí owó crypto jẹ́, àti bí wallet àti kọ́kọ́rọ́ ṣe ń ṣiṣẹ́. Ní Orí 2, o máa kọ́ àwọn ewu, àwọn àmì ìkìlọ̀ jìbìtì crypto, àti ibi tí o ti lè fi ẹjọ́ jìbìtì sùn.",
    "Ẹ̀kọ́ yìí kò sọ fún ọ bóyá kí o ra crypto. Kì í ṣe ìmọ̀ràn nípa owó. Fún ìpinnu nípa owó, bá ọ̀jọ̀gbọ́n tó ní ìwé àṣẹ tí ìwọ fúnra rẹ yàn sọ̀rọ̀. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe \"káàdì ààbò crypto\" ojú-ìwé kan fún ara rẹ tàbí fún ẹnì kan nínú ẹbí rẹ: gbólóhùn méjì lórí ohun tí blockchain àti owó crypto jẹ́, ewu mẹ́ta, àmì ìkìlọ̀ jìbìtì crypto mẹ́rin, àti àwọn ibi ìjọba tí a ti lè fi ẹjọ́ jìbìtì sùn. Lẹ́yìn náà, ka ìpolówó tàbí ọ̀rọ̀ crypto gidi kan (láti inú email, text tàbí ìkànnì àjọlò), kí o sì sàmì sí àwọn àmì ìkìlọ̀ tí ó fi hàn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí wọ́n ń gbọ́ nípa Bitcoin àti crypto lórí ìròyìn, níbi iṣẹ́, lọ́dọ̀ ẹbí àti nínú ìpolówó: àwọn arúgbó, àwọn ọmọ wọn tí ó ti dàgbà àti àwọn olùtọ́jú wọn, àwọn ọ̀dọ́ tí wọ́n ṣẹ̀ṣẹ̀ ń lo app owó, àti àwọn ará àdúgbò tí wọ́n fẹ́ dáàbò bo ara wọn àti àwọn ẹlòmíì.",
    startingPoint: "Wọ́n lè lo fóònù fún ọ̀rọ̀ ìránṣẹ́, email àti ìkànnì àjọlò, àwọn kan sì ń lo app báńkì tàbí káàdì debit. Ọ̀pọ̀ jù lọ kò lè sọ ohun tí blockchain tàbí recovery phrase jẹ́, bí crypto ṣe yàtọ̀ sí owó inú báńkì, tàbí bí jìbìtì crypto ṣe máa ń ṣẹlẹ̀.",
    gap: "Crypto wà lára ọ̀nà tí àwọn oníjìbìtì máa ń fẹ́ kí a fi san owó fún wọn jù, owó crypto tí a bá sì ti san kì í sábà ṣeé dá padà. Àwọn tí kò lóye rẹ̀ lè pàdánù owó ìpamọ́ wọn sí ìdókòwò ayédèrú, jìbìtì ìfẹ́, àwọn tí ń díbọ́n pé àwọn jẹ́ òṣìṣẹ́ ìjọba àti jìbìtì \"gbígba owó padà\", tàbí kí wọ́n fi recovery phrase hàn kí wọ́n sì pàdánù gbogbo rẹ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé ọ̀rọ̀ crypto kọ̀ọ̀kan pẹ̀lú àpẹẹrẹ ojoojúmọ́",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà láti ka àwọn ojú-ìwé ìkìlọ̀ ti ìjọba; kò sí ìdí fún app tàbí àkáǹtì crypto kankan",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan, nǹkan bí ìṣẹ́jú 60 lápapọ̀",
      "Kì í ṣe ìmọ̀ràn nípa owó: ẹ̀kọ́ yìí kò ní sọ fún akẹ́kọ̀ọ́ láti rà tàbí tà láéláé; ìpinnu owó jẹ́ ti ọ̀jọ̀gbọ́n tó ní ìwé àṣẹ tí akẹ́kọ̀ọ́ fúnra rẹ̀ yàn",
      "Ìsọfúnni àdáni àti ààbò: akẹ́kọ̀ọ́ kò gbọ́dọ̀ fi recovery phrase tàbí private key hàn ẹnikẹ́ni, kò sì gbọ́dọ̀ fi owó ránṣẹ́ nígbà àṣeṣe"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ní lílo àpẹẹrẹ ìwé àkọsílẹ̀ àjọlò", action: "ṣàlàyé ohun tí blockchain jẹ́, pẹ̀lú àwọn ọ̀rọ̀ block, chain àti decentralized", standard: "ní gbólóhùn méjì tàbí mẹ́ta tó rọrùn, láìsí àṣìṣe nípa bí a ṣe ń pa àkọsílẹ̀ mọ́" },
    { id: "O2", condition: "Láìwo àkọsílẹ̀", action: "ṣàlàyé ohun tí owó crypto jẹ́, kí o sì kọ bí ó ṣe yàtọ̀ sí owó inú àkáǹtì báńkì tí a ṣe ìdánilójú fún", standard: "ní dídárúkọ ìyàtọ̀ mẹ́ta ó kéré tán, pẹ̀lú pé owó crypto tí a ti san kì í sábà ṣeé dá padà" },
    { id: "O3", condition: "Tí a bá fún ọ ní àwọn ọ̀rọ̀ wallet, public address, recovery phrase àti exchange", action: "ṣàlàyé ohun tí ọ̀kọ̀ọ̀kan jẹ́, kí o sì dá àwọn tí a kò gbọ́dọ̀ fi hàn ẹnikẹ́ni mọ̀", standard: "pẹ̀lú àlàyé tó tọ̀nà fún ọ̀kọ̀ọ̀kan, kí recovery phrase àti private key sì máa jẹ́ àṣírí nígbà gbogbo" },
    { id: "O4", condition: "Láìwo àkọsílẹ̀", action: "dárúkọ àwọn ewu pàtàkì mẹ́rin ti crypto àti ọ̀nà kan láti dáàbò bo ara rẹ lọ́wọ́ ọ̀kọ̀ọ̀kan", standard: "pẹ̀lú ewu mẹ́rẹ̀ẹ̀rin (iye owó, pípàdánù, ilé-iṣẹ́ àti jìbìtì) tí a dárúkọ tọ̀nà" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìpolówó, ọ̀rọ̀ tàbí àtẹ̀jáde crypto gidi kan", action: "fi àwọn àmì ìkìlọ̀ jìbìtì crypto wé e, kí o sì yan ìdáhùn tí kò léwu", standard: "ní sísàmì sí gbogbo àmì ìkìlọ̀ tí ó fi hàn, àti yíyàn láti dúró, láti má san owó, àti láti bá ẹni tí o gbẹ́kẹ̀ lé sọ̀rọ̀" },
    { id: "O6", condition: "Tí jìbìtì crypto bá ṣẹlẹ̀ sí ọ tàbí sí ẹnì kan tí o mọ̀", action: "kọ àwọn ibi ìjọba tí a ti lè fi ẹjọ́ rẹ̀ sùn àti àwọn àlàyé tí a gbọ́dọ̀ kọ sílẹ̀", standard: "ní dídárúkọ ojú-òpó ìjọba méjì ó kéré tán fún fífi ẹjọ́ sùn, àti àlàyé mẹ́rin ó kéré tán láti kọ sílẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí crypto àti blockchain ṣe ń ṣiṣẹ́",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí blockchain jẹ́",
          minutes: 5,
          goal: "Ṣàlàyé blockchain ní ọ̀rọ̀ tó rọrùn pẹ̀lú àpẹẹrẹ kan tó rọrùn.",
          text: [
            "Fojú inú wo ìwé àkọsílẹ̀ owó sísan kan tí ẹgbẹẹgbẹ̀rún kọ̀mpútà ní ẹ̀dà rẹ̀ lọ́dọ̀ ara wọn. Ní ìṣẹ́jú díẹ̀ díẹ̀, a máa ń fi ojú-ìwé tuntun ti owó sísan kún un. A ti so ojú-ìwé kọ̀ọ̀kan mọ́ èyí tó ṣáájú rẹ̀ pẹ̀lú irú àmì ìka ọwọ́ ìṣirò kan, tó bá jẹ́ pé ẹnì kan yí ojú-ìwé àtijọ́ padà, gbogbo ẹ̀dà yòókù máa fi hàn pé kò bá wọn mu.",
            "Ìwé àkọsílẹ̀ àjọlò yẹn ni blockchain. Ojú-ìwé kọ̀ọ̀kan jẹ́ block, a sì so àwọn ojú-ìwé náà pọ̀ bí ẹ̀wọ̀n (chain) ní ìtẹ̀léra. Kò sí báńkì tàbí ilé-iṣẹ́ kan ṣoṣo tó ń pa ìwé náà mọ́; àwọn kọ̀mpútà inú nẹ́tíwọ̀ọ̀kì ló ń ṣe é. Èyí la ń pè ní decentralized.",
            "Nítorí ètò yìí, owó sísan tí a ti kọ sínú blockchain ṣòro gan-an láti yí padà tàbí láti dá padà. Ọ̀pọ̀ jù lọ blockchain tún wà ní gbangba: ẹnikẹ́ni lè wo àwọn owó sísan náà, bí a kò tilẹ̀ fi orúkọ àwọn tó ṣe é hàn."
          ],
          words: [["Blockchain", "àkọsílẹ̀ àjọlò ti owó sísan tí ọ̀pọ̀ kọ̀mpútà ń pa mọ́, níbi tí a ti so block tuntun kọ̀ọ̀kan mọ́ èyí tó ṣáájú rẹ̀."], ["Block", "àkójọ owó sísan tí a fi kún blockchain pọ̀ lẹ́ẹ̀kan."], ["Decentralized", "tí àwọn kọ̀mpútà púpọ̀ nínú nẹ́tíwọ̀ọ̀kì ń darí, dípò báńkì tàbí ilé-iṣẹ́ kan ṣoṣo."], ["Ledger", "àkọsílẹ̀ owó sísan, bí ìwé ìṣirò owó."]],
          slides: [
            { title: "Fojú inú wo ìwé àkọsílẹ̀ àjọlò", bullets: ["Ẹgbẹẹgbẹ̀rún kọ̀mpútà ló ní ẹ̀dà rẹ̀", "A máa ń fi ojú-ìwé owó sísan tuntun kún un léraléra", "A so ojú-ìwé kọ̀ọ̀kan mọ́ èyí tó ṣáájú rẹ̀"] },
            { title: "Àwọn ọ̀rọ̀ blockchain", bullets: ["Block = ojú-ìwé owó sísan kan", "Chain = àwọn ojú-ìwé tí a so pọ̀ ní ìtẹ̀léra", "Decentralized = kò sí báńkì kan ṣoṣo tó ń darí rẹ̀"] },
            { title: "Ohun tí èyí túmọ̀ sí fún ọ", bullets: ["Owó sísan ṣòro gan-an láti yí padà tàbí dá padà", "Ọ̀pọ̀ jù lọ blockchain jẹ́ àkọsílẹ̀ gbangba"] }
          ],
          tryIt: "Ṣàlàyé blockchain fún ẹnì kan (tàbí sókè fún ara rẹ) ní lílo àpẹẹrẹ ìwé àkọsílẹ̀ àjọlò. Lo àwọn ọ̀rọ̀ block, chain àti decentralized.",
          youCanNow: "ṣàlàyé ohun tí blockchain jẹ́ àti ìdí tí àkọsílẹ̀ rẹ̀ fi ṣòro láti yí padà.",
          quickCheck: [
            { objective: "O1", q: "Nínú àpẹẹrẹ ìwé àkọsílẹ̀ àjọlò, kí ni block?", options: ["Gbogbo ìwé náà", "Báńkì tó ni ìwé náà", "Ojú-ìwé owó sísan kan tí a fi kún ìwé náà", "Ọ̀rọ̀ aṣínà fún ìwé náà"], answer: 2, why: "Ojú-ìwé owó sísan kọ̀ọ̀kan jẹ́ block, a sì so àwọn ojú-ìwé náà pọ̀ ní ìtẹ̀léra." },
            { objective: "O1", q: "Ẹnì kan sọ fún ọ pé òun lè yí owó sísan àtijọ́ kan padà ní bòókẹ́lẹ́ lórí blockchain gbangba. Kí ni o máa rò?", options: ["Kò fi bẹ́ẹ̀ ṣeé ṣe, nítorí àwọn ẹ̀dà yòókù kò ní bá a mu", "Ó rọrùn, nítorí ilé-iṣẹ́ kan ṣoṣo ló ń pa ìwé náà mọ́", "Ó wọ́pọ̀, nítorí blockchain jẹ́ àṣírí", "Òótọ́ ni, nítorí a kò so àwọn block pọ̀"], answer: 0, why: "A so block kọ̀ọ̀kan mọ́ èyí tó ṣáájú rẹ̀, nítorí náà ojú-ìwé tí a yí padà kò ní bá àwọn ẹ̀dà yòókù mu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ohun tí owó crypto jẹ́",
          minutes: 5,
          goal: "Ṣàlàyé ohun tí owó crypto jẹ́ àti bí ó ṣe yàtọ̀ sí owó dọ́là inú báńkì.",
          text: [
            "Owó crypto (cryptocurrency) jẹ́ owó dìjítà tí a kọ sínú blockchain. Bitcoin ni àkọ́kọ́; ẹgbẹẹgbẹ̀rún ló wà báyìí, bí Ether. Stablecoin jẹ́ irú crypto kan tí a ṣe kí iye rẹ̀ lè sún mọ́ iye owó ìjọba bí dọ́là Amẹ́ríkà, ṣùgbọ́n ó ṣì lè forí ṣánpọ́n.",
            "Kì í ṣe ìjọba ló ń ṣe owó crypto jáde, iye rẹ̀ sì ń gòkè ó sì ń sọ̀kalẹ̀ gẹ́gẹ́ bí iye tí àwọn ènìyàn bá fẹ́ san. Iye rẹ̀ lè gòkè tàbí wálẹ̀ gan-an láàárín ọjọ́ kan.",
            "Sísan owó pẹ̀lú crypto yàtọ̀ sí sísan pẹ̀lú káàdì. FTC (àjọ ìjọba Amẹ́ríkà tó ń dáàbò bo àwọn oníbàárà) sọ pé owó crypto tí a san kò ní ààbò òfin tí káàdì credit àti debit ní, kì í sì í sábà ṣeé dá padà. Owó inú crypto kò tún dà bí owó inú àkáǹtì báńkì tí a ṣe ìdánilójú fún."
          ],
          words: [["Owó crypto (cryptocurrency)", "owó dìjítà tí a kọ sínú blockchain, bí Bitcoin tàbí Ether."], ["Stablecoin", "crypto tí a ṣe kí iye rẹ̀ lè sún mọ́ iye owó ìjọba kan, bí dọ́là Amẹ́ríkà."], ["Volatile", "iye owó tí ó lè gòkè tàbí wálẹ̀ gan-an, kíákíá."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Owó crypto ni...", bullets: ["Owó dìjítà tí a kọ sínú blockchain", "Bitcoin ni àkọ́kọ́; Ether jẹ́ òmíì", "Stablecoin ń gbìyànjú láti bá owó bí dọ́là mu"] },
            { title: "Kò dà bí dọ́là inú báńkì", bullets: ["Kì í ṣe ìjọba ló ń ṣe é jáde", "Iye rẹ̀ lè yí padà gan-an láàárín ọjọ́ kan"] },
            { title: "Kò dà bí sísan pẹ̀lú káàdì", bullets: ["Kò ní ààbò òfin bí ti káàdì (FTC)", "Kì í sábà ṣeé dá padà"] }
          ],
          tryIt: "Kọ ìyàtọ̀ mẹ́ta láàárín sísan owó pẹ̀lú káàdì debit àti sísan pẹ̀lú crypto. Lo ojú-ìwé FTC tó wà nínú àwọn orísun ẹ̀kọ́ yìí láti ṣàyẹ̀wò ìdáhùn rẹ.",
          youCanNow: "ṣàlàyé ohun tí owó crypto jẹ́ àti bí ó ṣe yàtọ̀ sí owó báńkì àti sísan pẹ̀lú káàdì.",
          quickCheck: [
            { objective: "O2", q: "Kí ni owó crypto?", options: ["Owó bébà láti ọ̀dọ̀ ìjọba", "Owó dìjítà tí a kọ sínú blockchain", "Àkáǹtì ìpamọ́ owó ní báńkì", "Káàdì ẹ̀bùn láti ilé ìtajà"], answer: 1, why: "Crypto jẹ́ owó dìjítà tí a kọ sínú blockchain, kì í ṣe ìjọba ló ń ṣe é jáde." },
            { objective: "O2", q: "Olùtajà kan ní kí o san owó pẹ̀lú crypto dípò káàdì credit rẹ. Kí ló yẹ kí o rántí?", options: ["Crypto ní ààbò òfin ju káàdì lọ", "Owó crypto tí a san máa ń rọrùn láti fagilé nígbà gbogbo", "A ṣe ìdánilójú fún crypto bí àkáǹtì báńkì", "Owó crypto tí a san kì í sábà ṣeé dá padà tí nǹkan bá dà rú"], answer: 3, why: "FTC sọ pé owó crypto tí a san kò ní ààbò ti káàdì, kì í sì í sábà ṣeé dá padà." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wallet, kọ́kọ́rọ́ àti exchange",
          minutes: 5,
          goal: "Ṣàlàyé bí a ṣe ń pa crypto mọ́ àti bí a ṣe ń fi ránṣẹ́, àti ohun tí a kò gbọ́dọ̀ fi hàn ẹnikẹ́ni.",
          text: [
            "A máa ń pa crypto mọ́ sínú wallet: app, ojú-òpó wẹ́ẹ̀bù tàbí ẹ̀rọ kékeré tí ó di àwọn kọ́kọ́rọ́ rẹ mú. Public address dà bí nọ́mbà àkáǹtì tí o lè fún ẹnì kan kí ó lè fi crypto ránṣẹ́ sí ọ. Private key, tí a sábà máa ń fi hàn bí recovery phrase (àkọsílẹ̀ ọ̀rọ̀ 12 tàbí 24), dà bí kọ́kọ́rọ́ ọ̀gá. Ẹnikẹ́ni tó bá ní i ló ń darí crypto náà.",
            "Má ṣe fi recovery phrase tàbí private key hàn ẹnikẹ́ni láéláé: kì í ṣe òṣìṣẹ́ ìrànlọ́wọ́, kì í ṣe \"olùrànlọ́wọ́\", kì í ṣe app, kì í sì í ṣe olùrànlọ́wọ́ AI. Ilé-iṣẹ́ gidi kò ní béèrè fún un láéláé. Tí o bá sọ ọ́ nù, crypto náà lè sọnù títí láé.",
            "Exchange jẹ́ ilé-iṣẹ́ tí àwọn ènìyàn ti ń ra crypto, tí wọ́n ń tà á, tí wọ́n sì ń pa á mọ́. Àwọn agbonára (hacker) lè wọ inú exchange, tàbí kí ó tilẹ̀kùn. Ní Amẹ́ríkà, ṣàyẹ̀wò bóyá ilé-iṣẹ́ kan ti forúkọ sílẹ̀, kí o sì ka àwọn ẹ̀sùn tí wọ́n fi kàn án kí o tó gbẹ́kẹ̀ lé e; àwọn àjọ alábòójútó bí SEC àti CFTC máa ń gbé ìkìlọ̀ jáde."
          ],
          words: [["Wallet", "app tàbí ẹ̀rọ tí ó di àwọn kọ́kọ́rọ́ crypto rẹ mú."], ["Public address", "kóòdù tí àwọn ẹlòmíì ń lò láti fi crypto ránṣẹ́ sí ọ, bí nọ́mbà àkáǹtì."], ["Private key / recovery phrase", "àṣírí tí ó ń darí crypto náà; má ṣe fi hàn ẹnikẹ́ni."], ["Exchange", "ilé-iṣẹ́ tí àwọn ènìyàn ti ń ra crypto, tí wọ́n ń tà á, tí wọ́n sì ń pa á mọ́."]],
          sources: [FTC_CRYPTO, { name: "SEC (àjọ ìjọba Amẹ́ríkà tó ń bójú tó ọjà ìdókòwò): fi ìsọfúnni tàbí ẹ̀sùn ránṣẹ́", url: "https://www.sec.gov/tcr" }, { name: "CFTC (àjọ ìjọba Amẹ́ríkà tó ń bójú tó ọjà ọjọ́-iwájú): fi ẹ̀sùn sùn", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Wallet àti kọ́kọ́rọ́", bullets: ["Wallet = app tàbí ẹ̀rọ tí ó di kọ́kọ́rọ́ rẹ mú", "Public address = bí nọ́mbà àkáǹtì", "Private key / recovery phrase = kọ́kọ́rọ́ ọ̀gá"] },
            { title: "Má ṣe fi hàn ẹnikẹ́ni", bullets: ["Recovery phrase tàbí private key rẹ", "Kì í ṣe fún òṣìṣẹ́ ìrànlọ́wọ́, olùrànlọ́wọ́, app tàbí AI", "Ilé-iṣẹ́ gidi kò ní béèrè fún un láéláé"] },
            { title: "Exchange", bullets: ["Ilé-iṣẹ́ láti ra, tà àti pa crypto mọ́", "Agbonára lè wọ inú rẹ̀, tàbí kí ó tilẹ̀kùn", "Kọ́kọ́ ka àwọn ẹ̀sùn àti ìkìlọ̀ àjọ alábòójútó"] }
          ],
          tryIt: "Kọ gbólóhùn kan fún ọ̀kọ̀ọ̀kan: ohun tí public address jẹ́, ohun tí recovery phrase jẹ́, àti ohun tí o máa sọ tí \"òṣìṣẹ́ ìrànlọ́wọ́\" kan bá béèrè fún recovery phrase rẹ.",
          youCanNow: "ṣàlàyé bí a ṣe ń pa crypto mọ́ àti bí a ṣe ń fi ránṣẹ́, àti ìdí tí a kò fi gbọ́dọ̀ fi recovery phrase hàn ẹnikẹ́ni.",
          quickCheck: [
            { objective: "O3", q: "Kí ni recovery phrase?", options: ["Ìkíni tí o fi ránṣẹ́ pẹ̀lú owó", "Orúkọ exchange kan", "Public address rẹ", "Àkọsílẹ̀ ọ̀rọ̀ 12 tàbí 24 tí ó ń darí crypto rẹ"], answer: 3, why: "Ẹnikẹ́ni tó bá ní recovery phrase ló ń darí crypto náà, bí kọ́kọ́rọ́ ọ̀gá." },
            { objective: "O3", q: "Ọ̀rẹ́ kan fẹ́ fi crypto ránṣẹ́ sí ọ, ó sì béèrè ohun tí òun máa lò. Kí ni o máa fún un?", options: ["Recovery phrase rẹ", "Private key rẹ", "Public address rẹ", "PIN báńkì rẹ"], answer: 2, why: "Public address dà bí nọ́mbà àkáǹtì, kò sì léwu láti fi hàn kí a lè gba crypto." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí crypto àti blockchain ṣe ń ṣiṣẹ́",
        questions: [
          { objective: "O1", q: "Àpẹẹrẹ wo ló ṣàlàyé blockchain jù?", options: ["Àkọsílẹ̀ orúkọ àti nọ́mbà inú fóònù", "Ìwé ìṣirò àṣírí ti báńkì kan", "Ṣẹ́ẹ̀kì bébà", "Ìwé àkọsílẹ̀ owó sísan àjọlò tí ọ̀pọ̀ kọ̀mpútà ní ẹ̀dà rẹ̀"], answer: 3, why: "Blockchain jẹ́ àkọsílẹ̀ àjọlò tí ọ̀pọ̀ kọ̀mpútà ń pa mọ́." },
          { objective: "O1", q: "Kí ló dé tí ó fi ṣòro láti yí àkọsílẹ̀ àtijọ́ padà lórí blockchain?", options: ["A tẹ̀ ẹ́ sórí bébà", "Adájọ́ kan ló ń ṣọ́ ọ", "A so block kọ̀ọ̀kan mọ́ èyí tó ṣáájú rẹ̀, nítorí náà ìyípadà kò ní bá àwọn ẹ̀dà yòókù mu", "A ń pa á rẹ́ lójoojúmọ́"], answer: 2, why: "Àwọn block tí a so pọ̀ àti ẹ̀dà púpọ̀ ń jẹ́ kí ìyípadà hàn síta." },
          { objective: "O2", q: "Kí ni FTC sọ nípa owó crypto tí a san, tí a bá fi wé káàdì credit?", options: ["Wọ́n ní ààbò jù", "Wọ́n jọra", "Wọn kò ní ààbò òfin kan náà, wọn kì í sì í sábà ṣeé dá padà", "A ṣe ìdánilójú fún wọn nígbà gbogbo"], answer: 2, why: "FTC kìlọ̀ pé owó crypto tí a san kò ní ààbò bí ti káàdì." },
          { objective: "O2", q: "Kí ni stablecoin?", options: ["Owó ẹyọ tí a fi irin ṣe", "Irú wallet kan", "Ìwé ìdókòwò ìjọba", "Crypto tí a ṣe kí iye rẹ̀ lè sún mọ́ owó bí dọ́là"], answer: 3, why: "Stablecoin ń gbìyànjú láti tẹ̀lé iye owó ìjọba kan, ṣùgbọ́n ó ṣì lè forí ṣánpọ́n." },
          { objective: "O3", q: "Ẹnì kan láti \"ìrànlọ́wọ́ wallet\" béèrè fún recovery phrase ọ̀rọ̀ 12 rẹ láti yanjú ìṣòro kan. Kí ni o máa ṣe?", options: ["Fún un kí ó lè ràn ọ́ lọ́wọ́", "Fún un ní ìdajì rẹ̀", "Tẹ̀ ẹ́ sínú AI láti ṣàyẹ̀wò rẹ̀", "Kọ̀ jálẹ̀; ilé-iṣẹ́ gidi kò ní béèrè fún un láéláé"], answer: 3, why: "Ẹnikẹ́ni tó bá ní recovery phrase ló ń darí crypto náà." }
        ]
      }
    },
    {
      name: "Orí 2: Àwọn ewu, jìbìtì àti fífi ẹjọ́ sùn",
      lessons: [
        {
          objectives: ["O4"],
          title: "Àwọn ewu gidi",
          minutes: 5,
          goal: "Dárúkọ àwọn ewu pàtàkì ti níní tàbí gbígba crypto.",
          text: [
            "Ewu iye owó: iye crypto lè wálẹ̀ gan-an lójijì, kò sì sí ẹni tó lè ṣèlérí pé yóò padà gòkè. Má ṣe fi owó tí o nílò fún owó ilé, oúnjẹ, owó iná àti omi tàbí oògùn sínú rẹ̀ láéláé.",
            "Ewu pípàdánù: tí o bá sọ recovery phrase rẹ nù, tàbí tí o bá fi crypto ránṣẹ́ sí àdírẹ́sì tí kò tọ́, ó sábà máa ń lọ títí láé. Owó tí a ti san kì í sábà ṣeé dá padà.",
            "Ewu ilé-iṣẹ́: agbonára lè wọ inú exchange àti app, tàbí kí wọ́n tilẹ̀kùn. FDIC (àjọ ìjọba Amẹ́ríkà tó ń ṣe ìdánilójú owó inú báńkì) sọ pé ìdánilójú owó FDIC kò bo crypto; owó tí a fi pamọ́ sí báńkì tí FDIC ṣe ìdánilójú fún nìkan ló ń bò. Ewu jìbìtì: crypto ni ọ̀nà ìsanwó tí àwọn oníjìbìtì fẹ́ràn jù, nítorí ó yára, ó sì ṣòro láti gbà padà.",
            "Ẹ̀kọ́ yìí kò sọ fún ọ bóyá kí o rà. Tí o bá ń ronú nípa rẹ̀, bá ọ̀jọ̀gbọ́n nípa owó tó ní ìwé àṣẹ tí ìwọ fúnra rẹ yàn sọ̀rọ̀, kí o sì kọ́kọ́ ka àwọn ìkìlọ̀ ti ìjọba."
          ],
          words: [["Ewu", "ànfààní pé o lè pàdánù owó tàbí pé nǹkan lè dà rú."], ["Ìdánilójú FDIC", "ààbò ìjọba Amẹ́ríkà fún owó inú àkáǹtì ìfowópamọ́ ní báńkì tí a ṣe ìdánilójú fún; kò bo crypto."]],
          sources: [FTC_CRYPTO, { name: "FDIC (àjọ ìjọba Amẹ́ríkà tó ń ṣe ìdánilójú owó inú báńkì): òye ìdánilójú owó ìfowópamọ́", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Ewu iye owó", bullets: ["Iye owó lè wálẹ̀ gan-an lójijì", "Má ṣe lo owó ilé, oúnjẹ, owó iná tàbí owó oògùn láéláé"] },
            { title: "Ewu pípàdánù", bullets: ["Recovery phrase tó sọnù = crypto tó sọnù", "Àdírẹ́sì tí kò tọ́ tàbí jìbìtì = ó sábà máa ń lọ títí láé"] },
            { title: "Ewu ilé-iṣẹ́ àti jìbìtì", bullets: ["Agbonára lè wọ app àti exchange, tàbí kí wọ́n tilẹ̀kùn", "FDIC kò ṣe ìdánilójú fún crypto", "Àwọn oníjìbìtì fẹ́ràn kí a fi crypto san owó"] },
            { title: "Kì í ṣe ìmọ̀ràn", bullets: ["Ẹ̀kọ́ yìí kò sọ pé kí o rà tàbí kí o tà", "Bá ọ̀jọ̀gbọ́n tó ní ìwé àṣẹ tí o yàn sọ̀rọ̀"] }
          ],
          tryIt: "Kọ àwọn ewu mẹ́rin ní ọ̀rọ̀ ara rẹ: iye owó, pípàdánù, ilé-iṣẹ́ àti jìbìtì. Fún ọ̀kọ̀ọ̀kan, kọ ọ̀nà kan tí ènìyàn lè gbà dáàbò bo ara rẹ̀.",
          youCanNow: "dárúkọ àwọn ewu pàtàkì ti crypto, kí o sì ṣàlàyé ìdí tí a kò fi gbọ́dọ̀ fi owó tí o nílò sínú ewu láéláé.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ewu iye owó nínú crypto?", options: ["Iye owó lè wálẹ̀ gan-an, kò sì sí ẹni tó lè ṣèlérí pé yóò padà gòkè", "Ìjọba ló ń dá iye owó dúró", "Iye owó máa ń gòkè nìkan bí àkókò ti ń lọ", "Iye owó dọ́gba pẹ̀lú dọ́là lójoojúmọ́"], answer: 0, why: "Iye crypto lè wálẹ̀ gan-an, nítorí náà má ṣe fi owó tí o nílò fún owó ìnáwó sínú rẹ̀." },
            { objective: "O4", q: "Ìbátan rẹ kan fẹ́ fi owó ilé oṣù yìí sínú crypto. Kí ni o máa sọ fún un?", options: ["Ṣe é; iye owó máa ń padà gòkè nígbà gbogbo", "Má ṣe lo owó tí o nílò fún owó ilé, oúnjẹ, owó iná tàbí oògùn", "Fi sínú exchange nítorí a ṣe ìdánilójú fún exchange", "Fi ránṣẹ́ kíákíá kí iye owó tó yí padà"], answer: 1, why: "Iye owó lè wálẹ̀ gan-an, nítorí náà owó tí a nílò fún àwọn nǹkan pàtàkì kò gbọ́dọ̀ wọ inú crypto láéláé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídá jìbìtì crypto mọ̀",
          minutes: 5,
          goal: "Fi àwọn àmì ìkìlọ̀ jìbìtì wé ìpolówó tàbí ọ̀rọ̀ crypto kan.",
          text: [
            "FTC to àwọn àmì jìbìtì crypto lẹ́sẹẹsẹ. Àwọn oníjìbìtì nìkan ló máa ń fi agbára béèrè pé kí o san owó pẹ̀lú crypto, pàápàá ṣáájú tàbí láti \"dáàbò bo\" owó rẹ. Àwọn oníjìbìtì nìkan ló máa ń ṣèlérí èrè tí ó dájú tàbí èrè ńlá kíákíá. Ìfọwọ́sí àwọn olókìkí lè jẹ́ ayédèrú.",
            "Ṣọ́ra fún ọ̀rẹ́ tuntun lórí ayélujára tàbí olólùfẹ́ tí ó bẹ̀rẹ̀ sí fún ọ ní ìmọ̀ràn ìdókòwò tàbí tí ó béèrè fún crypto. Ṣọ́ra fún ìpè tàbí text tí ó sọ pé ó wá láti ọ́fíìsì ìjọba, báńkì tàbí ilé-iṣẹ́ iná tàbí omi, tí ó sọ pé o jẹ gbèsè tàbí pé a ti dí àkáǹtì rẹ, tí o sì gbọ́dọ̀ san owó pẹ̀lú crypto tàbí ní ẹ̀rọ ATM crypto.",
            "Tún ṣọ́ra fún iṣẹ́ tí ó ní kí o san owó ìforúkọsílẹ̀ pẹ̀lú crypto, àti fún email tí ó ń halẹ̀ pé wọn yóò tú àṣírí rẹ àyàfi tí o bá san owó pẹ̀lú crypto. Tí o bá rí èyíkéyìí nínú wọn, dúró. Má ṣe san owó, má ṣe tẹ ohunkóhun, kí o sì bá ẹni tí o gbẹ́kẹ̀ lé sọ̀rọ̀."
          ],
          steps: ["Ṣé ó ní kí o san owó pẹ̀lú crypto tàbí kí o lo ATM crypto?", "Ṣé ó ṣèlérí èrè tí ó dájú tàbí èrè kíákíá?", "Ṣé ọ̀rẹ́ tuntun lórí ayélujára, olólùfẹ́ tàbí àjèjì ló fi ránṣẹ́?", "Ṣé ó ń kán ọ lójú tàbí ó ń halẹ̀ mọ́ ọ?", "Tí ìdáhùn kan bá jẹ́ bẹ́ẹ̀ ni: dúró, má ṣe san owó, kí o sì bi ẹni tí o gbẹ́kẹ̀ lé."],
          words: [["Jìbìtì (scam)", "ẹ̀tàn láti jí owó tàbí ìsọfúnni."], ["ATM crypto", "ẹ̀rọ tí ó ń yí owó bébà padà sí crypto; àwọn oníjìbìtì sábà máa ń sọ fún àwọn tí wọ́n ń tàn jẹ láti lò ó."], ["Jìbìtì ìfẹ́", "jìbìtì níbi tí ẹnì kan ti ń kọ́ àjọṣe lórí ayélujára láti gba owó."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Àwọn oníjìbìtì nìkan ló máa ń...", bullets: ["Fi agbára béèrè kí o san owó pẹ̀lú crypto", "Ṣèlérí èrè tí ó dájú tàbí èrè kíákíá", "Lo ìfọwọ́sí ayédèrú ti àwọn olókìkí"] },
            { title: "Ṣọ́ra fún", bullets: ["Ọ̀rẹ́ tuntun lórí ayélujára tí ń fúnni ní ìmọ̀ràn ìdókòwò", "Ìpè \"ìjọba\" tàbí \"báńkì\" tí ó ní kí o san owó pẹ̀lú crypto", "Iṣẹ́ tí ó ń gba owó ìforúkọsílẹ̀ pẹ̀lú crypto"] },
            { title: "Tí o bá rí ọ̀kan", bullets: ["Dúró", "Má ṣe san owó, má sì ṣe tẹ ohunkóhun", "Bá ẹni tí o gbẹ́kẹ̀ lé sọ̀rọ̀"] }
          ],
          tryIt: "Wá ìpolówó, ọ̀rọ̀ tàbí àtẹ̀jáde crypto kan lórí ìkànnì àjọlò. Lọ nípasẹ̀ àwọn ìbéèrè àyẹ̀wò márùn-ún, kí o sì kọ gbogbo àmì ìkìlọ̀ tí ó fi hàn sílẹ̀.",
          youCanNow: "fi àwọn àmì ìkìlọ̀ wé ìpolówó tàbí ọ̀rọ̀ crypto kan, kí o sì dúró kí o tó san owó.",
          quickCheck: [
            { objective: "O5", q: "Èwo nínú ìwọ̀nyí ni àmì ìkìlọ̀ jìbìtì crypto?", options: ["Lẹ́tà báńkì tí ìwọ fúnra rẹ béèrè fún", "Ọ̀rẹ́ kan tí ń ṣàlàyé ohun tí blockchain jẹ́", "Ìbéèrè tipátipá pé kí o san owó pẹ̀lú crypto ṣáájú láti dáàbò bo owó rẹ", "Ìròyìn nípa iye owó Bitcoin"], answer: 2, why: "Àwọn oníjìbìtì nìkan ló máa ń béèrè pé kí o san owó pẹ̀lú crypto ṣáájú tàbí láti \"dáàbò bo\" owó rẹ." },
            { objective: "O5", q: "Text kan sọ pé a ti dí àkáǹtì báńkì rẹ, o sì gbọ́dọ̀ san owó ní ATM crypto lónìí. Kí ni o máa ṣe?", options: ["Lọ sí ATM crypto lẹ́sẹ̀kẹsẹ̀", "Fi nọ́mbà àkáǹtì rẹ dáhùn", "Tẹ link inú text náà láti ṣàyẹ̀wò", "Dúró, má ṣe san owó tàbí tẹ ohunkóhun, kí o sì bá ẹni tí o gbẹ́kẹ̀ lé sọ̀rọ̀"], answer: 3, why: "Ọ̀rọ̀ tí ó sọ pé o jẹ gbèsè tí o sì gbọ́dọ̀ san pẹ̀lú crypto jẹ́ àmì jìbìtì, nítorí náà dúró, má sì ṣe san owó." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fífi ẹjọ́ jìbìtì sùn àti ríran àwọn ẹlòmíì lọ́wọ́",
          minutes: 5,
          goal: "Kọ àwọn ibi tí a ti lè fi ẹjọ́ jìbìtì crypto sùn àti ohun tí a gbọ́dọ̀ kọ sílẹ̀.",
          text: [
            "Tí wọ́n bá dojú jìbìtì kọ ìwọ tàbí ẹnì kan tí o mọ̀, fi ẹjọ́ rẹ̀ sùn. FTC to àwọn ibi wọ̀nyí lẹ́sẹẹsẹ: FTC ní ReportFraud.ftc.gov, CFTC ní cftc.gov/complaint, SEC ní sec.gov/tcr, Ibùdó Ẹ̀sùn Ìwà Ọ̀daràn Ayélujára ti FBI (IC3) ní ic3.gov, àti exchange tàbí app crypto tí a fi fi owó náà ránṣẹ́.",
            "Kọ ohun tó ṣẹlẹ̀ sílẹ̀: àwọn ọjọ́, iye owó, wallet address tàbí transaction ID, orúkọ àti nọ́mbà fóònù tí oníjìbìtì náà lò, àti àwòrán ojú-iboju (screenshot) ti àwọn ọ̀rọ̀ ìránṣẹ́. Má ṣe fi owó míì ránṣẹ́ sí ẹnikẹ́ni tí ó ṣèlérí láti \"gba\" crypto rẹ tó sọnù padà; ìyẹn sábà máa ń jẹ́ jìbìtì kejì.",
            "Bá ẹbí àti ọ̀rẹ́ sọ̀rọ̀ nípa jìbìtì, pàápàá àwọn ìbátan àgbàlagbà àti àwọn ọ̀dọ́ tí wọ́n ṣẹ̀ṣẹ̀ ń lo app owó. Ìjíròrò kúkúrú lè dènà àdánù."
          ],
          steps: ["Dá gbogbo owó sísan àti gbogbo ìbáṣepọ̀ pẹ̀lú oníjìbìtì náà dúró.", "Kọ àwọn ọjọ́, iye owó, wallet address, transaction ID, orúkọ àti nọ́mbà sílẹ̀.", "Fi àwọn screenshot pamọ́.", "Fi ẹjọ́ sùn ní ReportFraud.ftc.gov àti ic3.gov, àti SEC tàbí CFTC tí ó bá jẹ́ ìdókòwò.", "Sọ fún exchange tàbí app tí o lò.", "Má ṣe fetí sí ẹnikẹ́ni tí ó bá fẹ́ gba owó lọ́wọ́ rẹ láti gba owó rẹ padà."],
          words: [["Transaction ID", "kóòdù tí ó ń dá owó crypto kan tí a san mọ̀ lórí blockchain."], ["IC3", "Ibùdó Ẹ̀sùn Ìwà Ọ̀daràn Ayélujára ti FBI, tí ó ń gba ẹ̀sùn ìwà ọ̀daràn lórí ayélujára."], ["Jìbìtì gbígba owó padà", "jìbìtì kejì tí ó ṣèlérí láti gba owó rẹ tó sọnù padà bí o bá san owó fún wọn."]],
          sources: [FTC_CRYPTO, { name: "FTC: ReportFraud (fi ẹjọ́ jìbìtì sùn)", url: "https://reportfraud.ftc.gov" }, { name: "FBI: Ibùdó Ẹ̀sùn Ìwà Ọ̀daràn Ayélujára (IC3)", url: "https://www.ic3.gov" }, { name: "SEC (àjọ ìjọba Amẹ́ríkà tó ń bójú tó ọjà ìdókòwò): fi ìsọfúnni tàbí ẹ̀sùn ránṣẹ́", url: "https://www.sec.gov/tcr" }, { name: "CFTC (àjọ ìjọba Amẹ́ríkà tó ń bójú tó ọjà ọjọ́-iwájú): fi ẹ̀sùn sùn", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Ibi tí o ti lè fi ẹjọ́ sùn", bullets: ["ReportFraud.ftc.gov", "ic3.gov (FBI)", "sec.gov/tcr tàbí cftc.gov/complaint fún ìdókòwò", "Exchange tàbí app tí o lò"] },
            { title: "Kọ ọ́ sílẹ̀", bullets: ["Àwọn ọjọ́ àti iye owó", "Wallet address àti transaction ID", "Orúkọ, nọ́mbà, screenshot"] },
            { title: "Ṣọ́ra fún jìbìtì gbígba owó padà", bullets: ["Kò sí ẹni tó ṣeé gbẹ́kẹ̀ lé tí ń gba owó láti \"gba\" crypto padà", "Má ṣe san owó lẹ́ẹ̀kan sí i"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe káàdì ààbò crypto ojú-ìwé kan rẹ (ohun tí blockchain àti crypto jẹ́, ewu mẹ́ta, àmì jìbìtì mẹ́rin, ibi tí a ti lè fi ẹjọ́ sùn). Lẹ́yìn náà, sàmì sí àwọn àmì ìkìlọ̀ inú ìpolówó tàbí ọ̀rọ̀ crypto gidi kan.",
          youCanNow: "fi ẹjọ́ jìbìtì crypto sùn ní àwọn ibi tó tọ́, kí o sì ran ẹbí àti ọ̀rẹ́ lọ́wọ́ láti yẹra fún un.",
          quickCheck: [
            { objective: "O6", q: "Èwo nínú ìwọ̀nyí ni ibi ìjọba láti fi ẹjọ́ jìbìtì crypto sùn ní Amẹ́ríkà?", options: ["Ọ̀rọ̀ lábẹ́ àtẹ̀jáde oníjìbìtì lórí ìkànnì àjọlò", "Ibùdó Ẹ̀sùn Ìwà Ọ̀daràn Ayélujára ti FBI ní ic3.gov", "Àjèjì kan tí ó sọ pé òun lè gba owó rẹ padà", "Ẹgbẹ́ ìjíròrò crypto"], answer: 1, why: "IC3 ní ic3.gov wà lára àwọn ibi ìjọba tí FTC tò fún fífi ẹjọ́ sùn." },
            { objective: "O6", q: "Wọ́n lu aládùúgbò rẹ ní jìbìtì, ó sì fẹ́ fi ẹjọ́ rẹ̀ sùn. Kí ni o máa kọ́kọ́ ràn án lọ́wọ́ láti ṣe?", options: ["Kọ àwọn ọjọ́, iye owó, wallet address tàbí transaction ID sílẹ̀, kí ó sì fi àwọn screenshot pamọ́", "Pa gbogbo ọ̀rọ̀ ìránṣẹ́ láti ọ̀dọ̀ oníjìbìtì náà rẹ́", "San owó fún iṣẹ́ gbígba owó padà", "Fi crypto míì ránṣẹ́ sí oníjìbìtì náà láti pa àkáǹtì náà"], answer: 0, why: "Àwọn àlàyé yẹn ń ran àwọn àjọ ìjọba àti exchange lọ́wọ́ láti tẹ̀lé ẹjọ́ náà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àwọn ewu, jìbìtì àti fífi ẹjọ́ sùn",
        questions: [
          { objective: "O4", q: "Owó wo ni a kò gbọ́dọ̀ fi sínú crypto láéláé?", options: ["Owó eré inú géèmù", "Owó tí o lè pàdánù lẹ́yìn tí o gba ìmọ̀ràn", "Owó tí o nílò fún owó ilé, oúnjẹ tàbí oògùn", "Kò sí èyí tí ó léwu rárá"], answer: 2, why: "Ìyípadà iye owó túmọ̀ sí pé o lè pàdánù owó tí o nílò." },
          { objective: "O4", q: "Gẹ́gẹ́ bí FDIC ti sọ, crypto:", options: ["Ní ìdánilójú FDIC ní kíkún", "Ní ìdánilójú ní òpin ọ̀sẹ̀ nìkan", "Kò sí lábẹ́ ìdánilójú owó ìfowópamọ́ FDIC", "Ní ìdánilójú tí a bá rà á lórí fóònù"], answer: 2, why: "Ìdánilójú owó ìfowópamọ́ FDIC kò bo crypto." },
          { objective: "O5", q: "Ẹnì kan pè ọ́, ó sọ pé òun wá láti ìjọba, o sì gbọ́dọ̀ san owó ìtanràn ní ATM crypto lónìí. Èyí jẹ́:", options: ["Owó sísan ìjọba tó wọ́pọ̀", "Owó orí tí wọ́n dá padà", "Òfin báńkì", "Àmì ìkìlọ̀ jìbìtì"], answer: 3, why: "Àwọn oníjìbìtì nìkan ló máa ń fi agbára béèrè kí a san owó pẹ̀lú crypto." },
          { objective: "O5", q: "Ọ̀rẹ́ tuntun lórí ayélujára ṣèlérí èrè tí ó dájú tí o bá dókòwò nínú crypto. Kí ni o máa ṣe?", options: ["Dókòwò díẹ̀ láti dán an wò", "Fi recovery phrase rẹ ránṣẹ́", "Béèrè fún ìdánilójú tó tóbi jù", "Dúró; èrè tí ó dájú jẹ́ àmì jìbìtì"], answer: 3, why: "Àwọn oníjìbìtì nìkan ló máa ń ṣèlérí èrè tí ó dájú." },
          { objective: "O6", q: "Lẹ́yìn tí ẹnì kan pàdánù owó sí jìbìtì crypto, ẹlòmíì ní òun máa gbà á padà tí ó bá sanwó fún òun. Èyí ṣeé ṣe kí ó jẹ́:", options: ["Jìbìtì gbígba owó padà", "FBI", "Báńkì rẹ", "Owó tí wọ́n dá padà"], answer: 0, why: "Sísan owó láti gba crypto padà jẹ́ jìbìtì kejì tó wọ́pọ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Òye Owó Crypto àti Blockchain",
    questions: [
      { objective: "O1", q: "Blockchain jẹ́:", options: ["Àkọsílẹ̀ àjọlò ti owó sísan tí ọ̀pọ̀ kọ̀mpútà ń pa mọ́", "Irú àgádágodo kẹ̀kẹ́ kan", "Fáìlì àṣírí ti ilé-iṣẹ́ kan", "Ìwé ẹ̀rí owó sísan bébà"], answer: 0, why: "Ọ̀pọ̀ kọ̀mpútà ló ní ẹ̀dà àkọsílẹ̀ kan náà tí a so pọ̀." },
      { objective: "O1", q: "Nínú blockchain, \"block\" jẹ́:", options: ["Àkójọ owó sísan tí a fi kún un pọ̀", "Ọ̀rọ̀ aṣínà", "ATM crypto", "Ẹ̀ka báńkì kan"], answer: 0, why: "Block kọ̀ọ̀kan ní àkójọ owó sísan kan nínú." },
      { objective: "O1", q: "\"Decentralized\" túmọ̀ sí:", options: ["Báńkì kan ló ń darí rẹ̀", "Ó máa ń tì ní òpin ọ̀sẹ̀", "Àwọn kọ̀mpútà púpọ̀ nínú nẹ́tíwọ̀ọ̀kì ló ń darí rẹ̀ dípò ilé-iṣẹ́ kan", "Fún ìjọba nìkan"], answer: 2, why: "Kò sí ilé-iṣẹ́ kan ṣoṣo tó ń pa àkọsílẹ̀ náà mọ́." },
      { objective: "O1", q: "Ọ̀pọ̀ jù lọ blockchain jẹ́:", options: ["Àṣírí tí a fi pamọ́", "Ohun tí a ń pa rẹ́ lọ́dọọdún", "Ohun tí a ń tẹ̀ sínú ìwé ìròyìn", "Àkọsílẹ̀ gbangba tí ẹnikẹ́ni lè wò"], answer: 3, why: "Ẹnikẹ́ni lè wo àwọn owó sísan náà, bí a kò tilẹ̀ fi orúkọ hàn." },
      { objective: "O2", q: "Bitcoin jẹ́ àpẹẹrẹ:", options: ["Káàdì credit", "Àkáǹtì báńkì", "Owó crypto", "Stablecoin tí ìjọba ń darí"], answer: 2, why: "Bitcoin ni owó crypto àkọ́kọ́." },
      { objective: "O2", q: "A ń pe iye owó crypto ní volatile nítorí pé:", options: ["Kì í yí padà láéláé", "Ó máa ń gòkè nìkan", "Òfin ló ń dá a dúró", "Ó lè gòkè tàbí wálẹ̀ gan-an kíákíá"], answer: 3, why: "Volatile túmọ̀ sí ìyípadà iye owó tó tóbi tó sì yára." },
      { objective: "O2", q: "Tí o bá fi crypto san owó fún oníjìbìtì, FTC sọ pé:", options: ["O lè fagilé e nígbà gbogbo", "O kò sábà lè dá owó náà padà", "Báńkì máa dá owó rẹ padà", "A ti ṣe ìdánilójú fún ọ"], answer: 1, why: "Owó crypto tí a ti san kì í sábà ṣeé dá padà." },
      { objective: "O3", q: "Wallet crypto jẹ́:", options: ["Àpò owó aláwọ", "App tàbí ẹ̀rọ tí ó di àwọn kọ́kọ́rọ́ crypto rẹ mú", "Àkáǹtì báńkì", "Ọ́fíìsì exchange kan"], answer: 1, why: "Wallet ló ń di àwọn kọ́kọ́rọ́ tí ó ń darí crypto mú." },
      { objective: "O3", q: "Èwo ni kò léwu láti fún ẹni tí yóò fi crypto ránṣẹ́ sí ọ?", options: ["Public address rẹ", "Recovery phrase rẹ", "Private key rẹ", "Ọ̀rọ̀ aṣínà báńkì rẹ"], answer: 0, why: "Public address dà bí nọ́mbà àkáǹtì." },
      { objective: "O3", q: "Ta ló ń darí crypto inú wallet?", options: ["Ilé-iṣẹ́ fóònù", "Ẹnikẹ́ni tó bá ní private key tàbí recovery phrase", "Ìjọba", "Ẹni tó ní public address"], answer: 1, why: "Private key ni kọ́kọ́rọ́ ọ̀gá." },
      { objective: "O3", q: "Exchange jẹ́:", options: ["Ilé-iṣẹ́ tí àwọn ènìyàn ti ń ra crypto, tí wọ́n ń tà á, tí wọ́n sì ń pa á mọ́", "Ọ́fíìsì ìjọba", "Irú block kan nínú blockchain", "Recovery phrase"], answer: 0, why: "Exchange jẹ́ ilé-iṣẹ́ fún ṣíṣòwò crypto àti pípa á mọ́." },
      { objective: "O4", q: "Èwo ni ewu ilé-iṣẹ́ nínú crypto?", options: ["Agbonára lè wọ inú exchange, tàbí kí ó tilẹ̀kùn", "Iye owó kì í yí padà", "FDIC ṣe ìdánilójú fún un", "Kò ṣeé jí"], answer: 0, why: "Agbonára lè wọ inú exchange àti app, tàbí kí wọ́n tilẹ̀kùn." },
      { objective: "O4", q: "Ṣé ẹ̀kọ́ yìí sọ fún ọ pé kí o ra crypto?", options: ["Bẹ́ẹ̀ ni, nígbà gbogbo", "Bẹ́ẹ̀ ni, ṣùgbọ́n Bitcoin nìkan", "Rárá; bá ọ̀jọ̀gbọ́n tó ní ìwé àṣẹ tí o yàn sọ̀rọ̀ fún ìpinnu owó", "Bẹ́ẹ̀ ni, pẹ̀lú owó ilé"], answer: 2, why: "Ẹ̀kọ́ yìí ṣàlàyé bí crypto ṣe ń ṣiṣẹ́ àti àwọn ewu rẹ̀; kì í ṣe ìmọ̀ràn." },
      { objective: "O4", q: "O fi crypto ránṣẹ́ sí àdírẹ́sì tí kò tọ́. Kí ló sábà máa ń ṣẹlẹ̀?", options: ["Ó máa padà wá fúnra rẹ̀", "Ó sábà máa ń lọ títí láé", "Báńkì máa dá a padà", "FTC máa fi ránṣẹ́ padà"], answer: 1, why: "Owó tí a san lórí blockchain kì í sábà ṣeé dá padà." },
      { objective: "O5", q: "Èwo ni àmì ìkìlọ̀ jìbìtì crypto?", options: ["Ìlérí èrè tí ó dájú", "Àkọsílẹ̀ iye owó tó yé", "Ilé ìtajà tí ó ń gba káàdì", "Ìwé ẹ̀rí owó sísan nínú email"], answer: 0, why: "Àwọn oníjìbìtì nìkan ló máa ń ṣèlérí èrè tí ó dájú." },
      { objective: "O5", q: "Ẹnì kan lórí app ìfẹ́ tí o kò tíì rí sójú rí ní kí o dókòwò nínú crypto. Èyí jẹ́:", options: ["Ìfẹ́ tòótọ́", "Àmì jìbìtì ìfẹ́ tó wọ́pọ̀", "Òfin báńkì", "Òfin owó orí"], answer: 1, why: "Àwọn ẹni tuntun lórí ayélujára tí wọ́n ń tì ọ́ sí crypto jẹ́ àmì jìbìtì." },
      { objective: "O5", q: "Ìpè iṣẹ́ kan sọ pé o gbọ́dọ̀ san owó ìdálẹ́kọ̀ọ́ pẹ̀lú crypto. Ó yẹ kí o:", options: ["San án kíákíá", "Dúró; iṣẹ́ tí ó ń béèrè owó crypto jẹ́ àmì jìbìtì", "San ìdajì rẹ̀", "Fi recovery phrase rẹ ránṣẹ́ dípò rẹ̀"], answer: 1, why: "FTC ka iṣẹ́ tí ó ń béèrè owó crypto sí àmì jìbìtì." },
      { objective: "O6", q: "Ibo ni o ti lè fi ẹjọ́ jìbìtì crypto sùn ní Amẹ́ríkà?", options: ["ReportFraud.ftc.gov àti ic3.gov", "Ẹgbẹ́ ìkànnì àjọlò èyíkéyìí", "Nọ́mbà ìrànlọ́wọ́ oníjìbìtì náà", "Kò sí ibì kankan"], answer: 0, why: "FTC àti IC3 ti FBI ń gba ẹ̀sùn jìbìtì." },
      { objective: "O6", q: "Kí ló yẹ kí o kọ sílẹ̀ lẹ́yìn jìbìtì?", options: ["Kò sí nǹkan kan", "Àwọn ọjọ́, iye owó, wallet address, transaction ID àti screenshot", "Ọ̀rọ̀ aṣínà rẹ nìkan", "Recovery phrase rẹ"], answer: 1, why: "Àwọn àlàyé yìí ń ran àwọn olùṣèwádìí lọ́wọ́." },
      { objective: "O6", q: "Ọ̀nà tó dára jù láti dáàbò bo ẹnì kan nínú ẹbí rẹ lọ́wọ́ jìbìtì crypto ni láti:", options: ["Má sọ̀rọ̀ nípa rẹ̀ láéláé", "Sọ àwọn àmì ìkìlọ̀ àti ibi tí a ti lè fi ẹjọ́ sùn fún wọn", "Fún wọn ní recovery phrase rẹ", "Sọ fún wọn láti dókòwò kíákíá"], answer: 1, why: "Ìjíròrò kúkúrú nípa àwọn àmì ìkìlọ̀ lè dènà àdánù." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 6, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe lórí káàdì náà kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      { name: "Ohun tí blockchain àti crypto jẹ́", objective: "O1", notYet: "Gbólóhùn méjì náà kò sí, kò tọ̀nà, tàbí a dà á kọ láìṣàlàyé.", meets: "Gbólóhùn méjì tó rọrùn sọ ohun tí blockchain àti owó crypto jẹ́ lọ́nà tó tọ̀nà.", exceeds: "Ó tún sọ ìdí tí owó crypto tí a san fi ṣòro láti dá padà." },
      { name: "Ewu mẹ́ta", objective: "O4", notYet: "Ewu tí kò tó mẹ́ta, tàbí ewu kan kò tọ̀nà.", meets: "Ewu mẹ́ta tó tọ̀nà láàárín iye owó, pípàdánù, ilé-iṣẹ́ àti jìbìtì.", exceeds: "Ewu kọ̀ọ̀kan ní ọ̀nà kan láti dáàbò bo ara ẹni." },
      { name: "Kọ́kọ́rọ́ àti recovery phrase", objective: "O3", notYet: "Káàdì náà kò sọ pé kí a pa recovery phrase mọ́ ní àṣírí, tàbí ó sọ pé kò léwu láti fi hàn.", meets: "Káàdì náà sọ pé a kò gbọ́dọ̀ fi recovery phrase tàbí private key hàn ẹnikẹ́ni láéláé.", exceeds: "Ó tún sọ pé public address nìkan ni kò léwu láti fi hàn kí a lè gba crypto." },
      { name: "Àmì ìkìlọ̀ jìbìtì mẹ́rin", objective: "O5", notYet: "Àmì tí kò tó mẹ́rin, tàbí àmì kan kò tọ̀nà.", meets: "Àmì ìkìlọ̀ mẹ́rin tó tọ̀nà, a sì sàmì sí gbogbo àmì tí ìpolówó tàbí ọ̀rọ̀ gidi náà fi hàn.", exceeds: "Ó tún kọ ìdáhùn tí kò léwu: dúró, má ṣe san owó tàbí tẹ ohunkóhun, kí o sì bá ẹni tí o gbẹ́kẹ̀ lé sọ̀rọ̀." },
      { name: "Ibi tí a ti lè fi ẹjọ́ sùn", objective: "O6", notYet: "Kò sí ibi ìjọba kankan láti fi ẹjọ́ sùn, tàbí ibi tí kì í ṣe ti ìjọba.", meets: "Ibi ìjọba méjì ó kéré tán láti fi ẹjọ́ sùn, bí ReportFraud.ftc.gov àti ic3.gov.", exceeds: "Ó tún kọ àwọn àlàyé tí a gbọ́dọ̀ kọ sílẹ̀, ó sì kìlọ̀ nípa jìbìtì gbígba owó padà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ti káàdì ààbò crypto",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn dá ọ̀rọ̀ tàbí ìpè jìbìtì crypto mọ̀, tí wọ́n sì kọ̀ ọ́ sílẹ̀ láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n pín káàdì ààbò tàbí àwọn àmì ìkìlọ̀ pẹ̀lú ẹnì kan nínú ẹbí tàbí ọ̀rẹ́",
      "Àwọn ètò alábàáṣiṣẹ́ ń ròyìn pé àwọn ọmọ ẹgbẹ́ tí ń pàdánù owó sí jìbìtì crypto ti dín kù, tàbí pé a ti ń fi ẹjọ́ jìbìtì púpọ̀ sí i sùn ní àwọn ojú-òpó ìjọba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì láti ka àwọn ojú-ìwé ìkìlọ̀ ti ìjọba (FTC, FDIC, SEC, CFTC)",
      "Ìwé àti gègé, tàbí app ìwé, fún káàdì ààbò crypto ojú-ìwé kan",
      "Ìpolówó, ọ̀rọ̀ tàbí àtẹ̀jáde crypto gidi kan láti yẹ̀ wò (screenshot dára)",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Sọ ní ìbẹ̀rẹ̀ pé ẹ̀kọ́ yìí kì í ṣe ìmọ̀ràn nípa owó, kò sì sọ fún ẹnikẹ́ni láti ra tàbí tà crypto; darí ìbéèrè nípa owó sí ọ̀jọ̀gbọ́n tó ní ìwé àṣẹ tí akẹ́kọ̀ọ́ fúnra rẹ̀ yàn.",
      "Má ṣe ní kí akẹ́kọ̀ọ́ ṣí app crypto, so wallet pọ̀ tàbí tẹ recovery phrase ní kíláàsì láéláé, kódà fún àṣeṣe.",
      "Mú àwọn àpẹẹrẹ ọ̀rọ̀ jìbìtì gidi díẹ̀ tí a tẹ̀ jáde tàbí screenshot wá, kí àwọn akẹ́kọ̀ọ́ tí kò ní ọ̀kan lè ṣe àyẹ̀wò àmì ìkìlọ̀ náà.",
      "Àwọn akẹ́kọ̀ọ́ kan lè ti pàdánù owó sí jìbìtì; má ṣe dá wọn lẹ́bi rárá, kí o sì fi bí wọ́n ṣe lè fi ẹjọ́ rẹ̀ sùn hàn wọ́n.",
      "Pe àwọn akẹ́kọ̀ọ́ láti mú ẹnì kan nínú ẹbí wá, pàápàá ìbátan àgbàlagbà tàbí ọ̀dọ́ tí ó ṣẹ̀ṣẹ̀ ń lo app owó, kí àwọn méjì-méjì sì jọ ṣe káàdì ààbò náà."
    ]
  }
};
