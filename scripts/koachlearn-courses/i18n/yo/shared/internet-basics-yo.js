"use strict";

// Koach Learn course (Yoruba translation of shared/internet-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC_TECH = { name: "FTC: Bí a ṣe lè dá jìbìtì \"tech support\" mọ̀, yẹra fún un, kí a sì fi ẹjọ́ rẹ̀ sùn", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" };

module.exports = {
  id: "internet-basics-yo",
  lang: "yo",
  translationOf: "internet-basics",
  category: "Seniors and Technology",
  name: "Ìpìlẹ̀ Íńtánẹ́ẹ̀tì",
  skills: "Síso mọ́ Wi-Fi, Lílo browser, Ṣíṣí tab àti yíyí láàárín wọn, Wíwá nǹkan lórí ayélujára, Kíka àdírẹ́sì wẹ́ẹ̀bù láìléwu, Fífi àwọn ojú-òpó tí o fẹ́ràn pamọ́",
  outcome: "so fóònù tàbí kọ̀mpútà mọ́ Wi-Fi, ṣí browser, lọ sí ojú-òpó wẹ́ẹ̀bù nípa àdírẹ́sì rẹ̀, wá ohun tí o nílò, mọ ìyàtọ̀ láàárín àdírẹ́sì wẹ́ẹ̀bù tí kò léwu àti èyí tó léwu, kí o sì fi ojú-òpó tí o máa ń lò pamọ́ kí o lè padà sí i pẹ̀lú ìfọwọ́kàn kan.",
  about: [
    "Íńtánẹ́ẹ̀tì ń jẹ́ kí o wo ojú ọjọ́, wá àkókò tí ọ́fíìsì dókítà ń ṣí, ka ìròyìn, wo àkókò ọkọ̀ bọ́ọ̀sì, kí o sì wo fọ́tò ẹbí rẹ. Ẹ̀kọ́ yìí bẹ̀rẹ̀ láti ìbẹ̀rẹ̀ pátápátá; o kò nílò ìrírí kankan.",
    "Ní Orí 1, o máa kọ́ ohun tí íńtánẹ́ẹ̀tì jẹ́, bí o ṣe lè so mọ́ Wi-Fi, àti bí o ṣe lè lo browser. Ní Orí 2, o máa wá nǹkan, o máa kọ́ bí a ṣe ń ka àdírẹ́sì wẹ́ẹ̀bù kí o lè yẹra fún ojú-òpó irọ́ àti pop-up tó ń dẹ́rù bani, o sì máa fi àwọn ojú-òpó tí o ń lò jù pamọ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Jẹ́ kí fóònù, tablet tàbí kọ̀mpútà wà lẹ́gbẹ̀ẹ́ rẹ kí o lè gbìyànjú ìgbésẹ̀ kọ̀ọ̀kan. Ìdánwò ìmọ̀ wà ní òpin orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́."
  ],
  finalTask: "Ṣètò ìjáde kékeré kan. So mọ́ Wi-Fi, ṣí browser, kí o sì wá ibì kan tí o fẹ́ lọ, bí ọgbà ìtura, ilé ọnà (museum) tàbí ilé-ìkàwé. Ṣí ojú-òpó wẹ́ẹ̀bù rẹ̀ gidi, wo àkókò tí wọ́n ń ṣí àti àdírẹ́sì wọn, ṣí tab kejì fún ojú ọjọ́ ọ̀la, mú ọ̀rọ̀ tóbi sí i tí o bá nílò, kí o sì fi ojú-òpó gidi náà sí bookmark kí o lè rí i padà pẹ̀lú ìfọwọ́kàn kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí íńtánẹ́ẹ̀tì ṣì jẹ́ tuntun fún, tàbí tí wọ́n ń lò ó láti inú app kan tàbí méjì nìkan: àwọn arúgbó, àwọn tó ń tọ́jú wọn, àwọn tó ń padà sí àwùjọ, àwọn tó ṣẹ̀ṣẹ̀ dé, àti ẹnikẹ́ni tó fẹ́ lo íńtánẹ́ẹ̀tì pẹ̀lú ìgboyà.",
    startingPoint: "Wọ́n lè tan fóònù, tablet tàbí kọ̀mpútà, wọ́n sì lè fọwọ́ kan ojú-iboju tàbí tẹ (click). Ọ̀pọ̀ kò tíì so mọ́ Wi-Fi fúnra wọn rí, kò tíì tẹ àdírẹ́sì wẹ́ẹ̀bù rí, kò tíì lo tab tàbí bookmark rí, tàbí ṣàyẹ̀wò bóyá àdírẹ́sì wẹ́ẹ̀bù kan jẹ́ gidi.",
    gap: "Lónìí, orí ayélujára ni a ti ń rí àkókò iṣẹ́, máàpù, ojú ọjọ́, ìlera, àǹfààní ìjọba àti ọjà rírà. Àwọn tí kò lè so mọ́ íńtánẹ́ẹ̀tì, wá nǹkan, kí wọ́n sì mọ ojú-òpó gidi yàtọ̀ sí ti irọ́ máa ń gbára lé àwọn ẹlòmíì, wọ́n máa ń pàdánù ìsọfúnni, wọ́n máa ń lo data fóònù wọn tán, tàbí kí pop-up irọ́ àti ojú-òpó tó jọ ti gidi tàn wọ́n jẹ.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé àwọn ọ̀rọ̀ bí router, browser, tab àti domain",
      "Ẹ̀rọ: fóònù, tablet tàbí kọ̀mpútà; àwọn ìgbésẹ̀ wà fún iPhone, Android àti kọ̀mpútà",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kan, nǹkan bí ìṣẹ́jú 60 lápapọ̀",
      "Owó: Wi-Fi ọ̀fẹ́ nílé, ní ilé-ìkàwé tàbí ní kafé; kò sí app tí a ń sanwó fún",
      "Ààbò: kò sí iṣẹ́ báńkì tàbí ìsọfúnni àdáni lórí Wi-Fi gbogbogbò nígbà àṣeṣe"
    ],
    prerequisites: "Kò sí. \"Smartphone and Tablet\" tàbí \"Basic Computer Skills\" lè ran àwọn akẹ́kọ̀ọ́ tí kò tíì lo ẹ̀rọ rí lọ́wọ́."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Láìwo àkọsílẹ̀", action: "ṣàlàyé ohun tí íńtánẹ́ẹ̀tì àti wẹ́ẹ̀bù jẹ́, àti ọ̀nà pàtàkì méjì tí ẹ̀rọ fi ń so mọ́ ọn", standard: "kí o sì dárúkọ Wi-Fi àti mobile data dáadáa, àti ìgbà tí Wi-Fi ń dá data fóònù rẹ sí" },
    { id: "O2", condition: "Tí a bá fún ọ ní orúkọ network àti ọ̀rọ̀ aṣínà", action: "so fóònù, tablet tàbí kọ̀mpútà rẹ mọ́ Wi-Fi, kí o sì dárúkọ ohun tí o gbọ́dọ̀ yẹra fún lórí Wi-Fi gbogbogbò", standard: "láìsí ìrànlọ́wọ́, kí o sì dárúkọ iṣẹ́ báńkì àti ìsọfúnni àdáni gẹ́gẹ́ bí ohun tí o gbọ́dọ̀ yẹra fún" },
    { id: "O3", condition: "Nígbà tí o bá ń lo browser", action: "ṣí ojú-òpó wẹ́ẹ̀bù nípa títẹ àdírẹ́sì rẹ̀, kí o sì lo bọ́tìnnì ìpadàsẹ́yìn, tab àti zoom", standard: "pẹ̀lú ojú-òpó tó tọ́ ní ṣíṣí, tab kejì ní ṣíṣí, àti ọ̀rọ̀ tí o ti mú tóbi sí i" },
    { id: "O4", condition: "Tí ohun kan bá wà tí o nílò láti wá", action: "wá a pẹ̀lú ọ̀rọ̀ pàtàkì díẹ̀, kí o sì yan èsì tó wúlò tí kì í ṣe ìpolówó", standard: "kí o sì ka àdírẹ́sì wẹ́ẹ̀bù kí o tó ṣí èsì náà" },
    { id: "O5", condition: "Tí a bá fún ọ ní àwọn àdírẹ́sì wẹ́ẹ̀bù, pop-up tó ń dẹ́rù bani àti ojú-òpó tí o máa ń lò", action: "mọ àdírẹ́sì tí kò léwu yàtọ̀ sí èyí tó léwu, pa pop-up irọ́ dé, kí o sì fi ojú-òpó gidi sí bookmark láti padà sí i láìléwu", standard: "kí o sì yan èyí tó tọ́ ní gbogbo ìgbà, kí o sì tún ṣí ojú-òpó tí o fi pamọ́ pẹ̀lú ìfọwọ́kàn kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Wíwọ orí íńtánẹ́ẹ̀tì",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí íńtánẹ́ẹ̀tì jẹ́",
          minutes: 4,
          goal: "Ṣàlàyé íńtánẹ́ẹ̀tì, wẹ́ẹ̀bù, àti bí ẹ̀rọ ṣe ń so mọ́ ọn.",
          text: [
            "Íńtánẹ́ẹ̀tì jẹ́ network ńlá tó so àwọn kọ̀mpútà àti fóònù jákèjádò ayé pọ̀ kí wọ́n lè pín ìsọfúnni. World Wide Web, tàbí wẹ́ẹ̀bù, ni apá tí o ń bẹ̀wò pẹ̀lú browser: àwọn ojú-òpó wẹ́ẹ̀bù tó ní ojú-ìwé, àwòrán àti fídíò. Ímeèlì àti ìpè fídíò náà ń rìn lórí íńtánẹ́ẹ̀tì.",
            "Ẹ̀rọ rẹ ń so mọ́ ọn ní ọ̀kan nínú ọ̀nà pàtàkì méjì. Wi-Fi jẹ́ ìsopọ̀ láìsí wáyà láti inú àpótí kan tí a ń pè ní router, nílé, ní ilé-ìkàwé tàbí ní kafé. Mobile data ń wá láti ilé-iṣọ́ (tower) ilé-iṣẹ́ fóònù rẹ, ó sì jẹ́ apá kan ètò fóònù (plan) rẹ.",
            "Wi-Fi nílé kì í sábà lo data ètò fóònù rẹ, nítorí náà ó dára fún wíwo fídíò àti gbígba fáìlì ńlá sílẹ̀."
          ],
          words: [["Íńtánẹ́ẹ̀tì (internet)", "network kárí ayé tó so àwọn kọ̀mpútà àti fóònù pọ̀."], ["Wẹ́ẹ̀bù (World Wide Web)", "àwọn ojú-òpó wẹ́ẹ̀bù tí o ń bẹ̀wò pẹ̀lú browser."], ["Router", "àpótí tó ń fi àmì Wi-Fi jáde."], ["Mobile data", "íńtánẹ́ẹ̀tì láti ilé-iṣọ́ ilé-iṣẹ́ fóònù rẹ, apá kan ètò fóònù rẹ."]],
          slides: [
            { title: "Íńtánẹ́ẹ̀tì àti wẹ́ẹ̀bù", bullets: ["Íńtánẹ́ẹ̀tì: network ẹ̀rọ kárí ayé", "Wẹ́ẹ̀bù: àwọn ojú-òpó tí o ń bẹ̀wò pẹ̀lú browser", "Ímeèlì àti ìpè fídíò náà ń lo íńtánẹ́ẹ̀tì"] },
            { title: "Ọ̀nà méjì láti so mọ́ ọn", bullets: ["Wi-Fi: láìsí wáyà, láti router", "Mobile data: láti ilé-iṣọ́, apá kan ètò fóònù rẹ"] },
            { title: "Ìmọ̀ràn", bullets: ["Lo Wi-Fi nílé fún fídíò àti fáìlì ńlá", "Ó ń dá data ètò fóònù rẹ sí"] }
          ],
          tryIt: "Lórí fóònù tàbí tablet rẹ, wo òkè ojú-iboju. Wá àmì Wi-Fi (ìlà tó tẹ̀) tàbí àmì mobile data (ọ̀pá tàbí lẹ́tà bí 5G). Èwo ló wà ní títàn báyìí?",
          youCanNow: "ṣàlàyé ohun tí íńtánẹ́ẹ̀tì àti wẹ́ẹ̀bù jẹ́, kí o sì sọ bóyá ẹ̀rọ rẹ wà lórí Wi-Fi tàbí mobile data.",
          quickCheck: [
            { objective: "O1", q: "Kí ni mobile data?", options: ["Àpótí kan nínú ilé rẹ", "Àkọsílẹ̀ ojú-òpó tí o fi pamọ́", "Íńtánẹ́ẹ̀tì láti ilé-iṣọ́ ilé-iṣẹ́ fóònù rẹ, apá kan ètò fóònù rẹ", "Irú browser kan"], answer: 2, why: "Mobile data ń wá láti ilé-iṣọ́, ó sì jẹ́ apá kan ètò fóònù rẹ." },
            { objective: "O1", q: "O fẹ́ wo fídíò gígùn lórí fóònù rẹ nílé. Ìsopọ̀ wo ni o máa lò?", options: ["Wi-Fi ilé, kí o má bàa lo data ètò fóònù rẹ tán", "Mobile data, nítorí pé ọ̀fẹ́ ni nígbà gbogbo", "Fídíò kò nílò ìsopọ̀ kankan", "Bookmark kan"], answer: 0, why: "Wi-Fi ilé kì í sábà lo data ètò fóònù rẹ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Síso mọ́ Wi-Fi",
          minutes: 5,
          goal: "So fóònù, tablet tàbí kọ̀mpútà mọ́ Wi-Fi.",
          text: [
            "Láti so mọ́ Wi-Fi, o nílò orúkọ network náà àti ọ̀rọ̀ aṣínà (password) rẹ̀. Nílé, a sábà máa ń tẹ àwọn méjèèjì sórí sítíkà lára router. Ní ilé-ìkàwé tàbí kafé, béèrè lọ́wọ́ òṣìṣẹ́ tàbí wá àkọlé kan.",
            "Lórí iPhone tàbí iPad: ṣí Settings, fọwọ́ kan Wi-Fi, fọwọ́ kan orúkọ network náà kí o sì tẹ ọ̀rọ̀ aṣínà. Lórí Android: ṣí Settings, fọwọ́ kan Network and internet tàbí Connections, lẹ́yìn náà Wi-Fi, yan network náà kí o sì tẹ ọ̀rọ̀ aṣínà. Lórí kọ̀mpútà: tẹ àmì Wi-Fi lẹ́gbẹ̀ẹ́ aago, yan network náà kí o sì tẹ ọ̀rọ̀ aṣínà.",
            "Wi-Fi gbogbogbò wúlò, ṣùgbọ́n àwọn ẹlòmíì náà ń lò ó. Lórí Wi-Fi gbogbogbò, má ṣe iṣẹ́ báńkì, má sì tẹ ìsọfúnni àdáni. So mọ́ network tí òṣìṣẹ́ fún ọ ní orúkọ rẹ̀ nìkan, kì í ṣe èyí tí orúkọ rẹ̀ ṣàjèjì."
          ],
          steps: ["Wá orúkọ network àti ọ̀rọ̀ aṣínà (sítíkà router, òṣìṣẹ́ tàbí àkọlé).", "Ṣí Settings, lẹ́yìn náà Wi-Fi (lórí kọ̀mpútà, tẹ àmì Wi-Fi lẹ́gbẹ̀ẹ́ aago).", "Fọwọ́ kan tàbí tẹ orúkọ network náà.", "Tẹ ọ̀rọ̀ aṣínà dáadáa; lẹ́tà ńlá àti kékeré yàtọ̀ síra.", "Dúró kí àmì Wi-Fi yọ ní òkè."],
          words: [["Orúkọ network", "orúkọ tí ìsopọ̀ Wi-Fi ń fi hàn nínú àkọsílẹ̀; a tún ń pè é ní SSID."], ["Ọ̀rọ̀ aṣínà Wi-Fi", "kóòdù tí o ń tẹ láti so mọ́ Wi-Fi."], ["Wi-Fi gbogbogbò", "Wi-Fi tí ọ̀pọ̀ ènìyàn ń lò pọ̀ ní ibi bí ilé-ìkàwé àti kafé."]],
          slides: [
            { title: "O nílò nǹkan méjì", bullets: ["Orúkọ network", "Ọ̀rọ̀ aṣínà (sítíkà router, òṣìṣẹ́ tàbí àkọlé)"] },
            { title: "Bí o ṣe lè so mọ́ ọn", bullets: ["Fóònù tàbí tablet: Settings, lẹ́yìn náà Wi-Fi", "Kọ̀mpútà: àmì Wi-Fi lẹ́gbẹ̀ẹ́ aago", "Yan network, tẹ ọ̀rọ̀ aṣínà"] },
            { title: "Ààbò lórí Wi-Fi gbogbogbò", bullets: ["Kò sí iṣẹ́ báńkì tàbí ìsọfúnni àdáni", "So mọ́ orúkọ tí òṣìṣẹ́ fún ọ nìkan"] }
          ],
          tryIt: "Ṣí ibi ètò Wi-Fi rẹ kí o sì wá àkọsílẹ̀ àwọn network. Tí o bá wà nílé tàbí ní ilé-ìkàwé, so mọ́ èyí tó tọ́. Ṣàyẹ̀wò pé àmì Wi-Fi yọ ní òkè.",
          youCanNow: "so mọ́ Wi-Fi, kí o sì lo Wi-Fi gbogbogbò láìléwu.",
          quickCheck: [
            { objective: "O2", q: "Nǹkan méjì wo ni o nílò láti so mọ́ Wi-Fi?", options: ["Ímeèlì àti nọ́mbà fóònù rẹ", "Orúkọ network náà àti ọ̀rọ̀ aṣínà rẹ̀", "Browser àti bookmark", "Tab àti ẹ̀rọ ìwádìí"], answer: 1, why: "O ń yan network nípa orúkọ rẹ̀, o sì ń tẹ ọ̀rọ̀ aṣínà rẹ̀." },
            { objective: "O2", q: "Ní kafé kan, o rí network méjì: èyí tí òṣìṣẹ́ dárúkọ, àti ọ̀kan tí a pè ní \"FREE_FAST_WIFI_123\". Kí ni o máa ṣe?", options: ["So mọ́ èyí tó ṣàjèjì nítorí pé ó sọ pé ọ̀fẹ́ ni", "So mọ́ méjèèjì lẹ́ẹ̀kan náà", "Tẹ ìsọfúnni báńkì rẹ láti dán èyí tó ṣàjèjì wò", "So mọ́ network tí òṣìṣẹ́ fún ọ nìkan"], answer: 3, why: "So mọ́ network tí òṣìṣẹ́ fún ọ ní orúkọ rẹ̀ nìkan, kì í ṣe èyí tí orúkọ rẹ̀ ṣàjèjì." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Lílo browser",
          minutes: 5,
          goal: "Ṣí ojú-òpó wẹ́ẹ̀bù nípa àdírẹ́sì rẹ̀, kí o sì rìn kiri pẹ̀lú bọ́tìnnì ìpadàsẹ́yìn àti tab.",
          text: [
            "Browser ni app tí o ń lò láti bẹ àwọn ojú-òpó wẹ́ẹ̀bù wò. Àwọn tí a mọ̀ dáadáa ni Chrome, Safari, Edge àti Firefox. Ní òkè ni ọ̀pá àdírẹ́sì (address bar) wà, àpótí gígùn tí o ti ń tẹ àdírẹ́sì wẹ́ẹ̀bù bí weather.gov, lẹ́yìn náà o tẹ Enter tàbí Go.",
            "Àwọn bọ́tìnnì tó wúlò: ọfà ìpadàsẹ́yìn ń mú ọ padà sí ojú-ìwé tí o wà tẹ́lẹ̀; ọfà oníyípo ń tún ojú-ìwé gbé (reload). Tab ń jẹ́ kí ojú-ìwé púpọ̀ wà ní ṣíṣí lẹ́ẹ̀kan náà, bí fáìlì lórí tábìlì. Ṣí tab tuntun pẹ̀lú bọ́tìnnì àmì àfikún (+), kí o sì yí padà nípa fífọwọ́ kan tàbí títẹ tab kan.",
            "Tí ọ̀rọ̀ bá kéré jù, o lè lo zoom. Lórí kọ̀mpútà, di Ctrl mú kí o sì tẹ + (Command àti + lórí Mac); Ctrl àti - ń mú un kéré. Lórí fóònù, na ìka méjì yà sí ara wọn lórí ojú-iboju."
          ],
          steps: ["Ṣí browser (Chrome, Safari, Edge tàbí Firefox).", "Fọwọ́ kan ọ̀pá àdírẹ́sì ní òkè.", "Tẹ àdírẹ́sì wẹ́ẹ̀bù, bí weather.gov, kí o sì tẹ Enter tàbí Go.", "Lo ọfà ìpadàsẹ́yìn láti padà.", "Tẹ + láti ṣí tab tuntun.", "Zoom: Ctrl àti + (Command àti + lórí Mac), tàbí na ìka méjì yà lórí fóònù."],
          words: [["Browser", "app tí o ń lò láti bẹ ojú-òpó wẹ́ẹ̀bù wò, bí Chrome, Safari, Edge tàbí Firefox."], ["Ọ̀pá àdírẹ́sì (address bar)", "àpótí ní òkè browser tí o ti ń tẹ àdírẹ́sì wẹ́ẹ̀bù."], ["Tab", "ojú-ìwé kan tó wà ní ṣíṣí nínú browser; o lè ṣí púpọ̀ lẹ́ẹ̀kan náà."], ["Zoom", "mú ohun tó wà lójú-iboju tóbi sí i tàbí kéré sí i."]],
          slides: [
            { title: "Browser", bullets: ["Chrome, Safari, Edge tàbí Firefox", "Ọ̀pá àdírẹ́sì wà ní òkè", "Tẹ àdírẹ́sì, kí o sì tẹ Enter tàbí Go"] },
            { title: "Àwọn bọ́tìnnì tó wúlò", bullets: ["Ọfà ìpadàsẹ́yìn: ojú-ìwé tó ṣáájú", "Ọfà oníyípo: tún ojú-ìwé gbé", "+ ń ṣí tab tuntun"] },
            { title: "Mú un tóbi sí i", bullets: ["Kọ̀mpútà: Ctrl àti + (Command àti + lórí Mac)", "Fóònù: na ìka méjì yà sí ara wọn"] }
          ],
          tryIt: "Ṣí browser kí o sì tẹ weather.gov sínú ọ̀pá àdírẹ́sì. Lẹ́yìn náà ṣí tab tuntun kí o sì lọ sí ojú-òpó wẹ́ẹ̀bù ilé-ìkàwé àdúgbò rẹ. Yí padà láàárín tab méjèèjì, kí o sì mú ọ̀rọ̀ tóbi sí i lórí ọ̀kan nínú wọn.",
          youCanNow: "ṣí ojú-òpó wẹ́ẹ̀bù nípa àdírẹ́sì wọn, lo bọ́tìnnì ìpadàsẹ́yìn, yí padà láàárín tab, kí o sì mú ọ̀rọ̀ tóbi sí i.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ọfà oníyípo nínú browser ń ṣe?", options: ["Ó ń pa browser dé", "Ó ń ṣí tab tuntun", "Ó ń fi bookmark pamọ́", "Ó ń tún ojú-ìwé gbé (reload)"], answer: 3, why: "Ọfà oníyípo ń tún ojú-ìwé tí o wà lórí rẹ̀ gbé." },
            { objective: "O3", q: "O ń ka ìlànà oúnjẹ, o sì fẹ́ wo ojú ọjọ́ láìpàdánù ìlànà náà. Kí ni o máa ṣe?", options: ["Ṣí tab tuntun pẹ̀lú bọ́tìnnì àmì àfikún (+)", "Pa ojú-ìwé ìlànà oúnjẹ náà dé", "Pa Wi-Fi", "Tún ẹ̀rọ náà tàn"], answer: 0, why: "Tab ń jẹ́ kí ojú-ìwé púpọ̀ wà ní ṣíṣí lẹ́ẹ̀kan náà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Wíwọ orí íńtánẹ́ẹ̀tì",
        questions: [
          { objective: "O1", q: "Kí ni wẹ́ẹ̀bù?", options: ["Irú wáyà kan", "Ilé aláǹtakùn nìkan", "Owó fóònù rẹ", "Àwọn ojú-òpó wẹ́ẹ̀bù tí o ń bẹ̀wò pẹ̀lú browser"], answer: 3, why: "Wẹ́ẹ̀bù ni àwọn ojú-òpó tí o ń bẹ̀wò pẹ̀lú browser." },
          { objective: "O2", q: "Níbo ni a sábà máa ń tẹ ọ̀rọ̀ aṣínà Wi-Fi ilé sí?", options: ["Lórí rìmóòtù TV", "Lórí sítíkà lára router", "Lórí àpò fóònù rẹ", "Nínú ìwé ìròyìn"], answer: 1, why: "Router sábà máa ń ní orúkọ àti ọ̀rọ̀ aṣínà lórí sítíkà." },
          { objective: "O2", q: "Lórí kọ̀mpútà, níbo ni o sábà máa ń tẹ láti so mọ́ Wi-Fi?", options: ["Àpótí ìdọ̀tí (trash)", "Àmì Wi-Fi lẹ́gbẹ̀ẹ́ aago", "Ẹ̀rọ ìtẹ̀wé", "Kámẹ́rà"], answer: 1, why: "Àmì Wi-Fi lẹ́gbẹ̀ẹ́ aago ń fi àwọn network hàn." },
          { objective: "O2", q: "O wà lórí Wi-Fi kafé. Kí ni o gbọ́dọ̀ yẹra fún?", options: ["Wíwo ojú ọjọ́", "Kíka ìròyìn", "Iṣẹ́ báńkì lórí ayélujára", "Wíwá ìlànà oúnjẹ"], answer: 2, why: "Ọ̀pọ̀ ènìyàn ló ń lo Wi-Fi gbogbogbò, nítorí náà yẹra fún iṣẹ́ báńkì àti ìsọfúnni àdáni." },
          { objective: "O3", q: "Níbo ni o ti ń tẹ àdírẹ́sì wẹ́ẹ̀bù bí weather.gov?", options: ["Nínú kámẹ́rà", "Nínú ọ̀rọ̀ ìránṣẹ́ (text)", "Nínú ẹ̀rọ ìṣirò", "Nínú ọ̀pá àdírẹ́sì ní òkè browser"], answer: 3, why: "Ọ̀pá àdírẹ́sì ń mú ọ lọ sí ojú-òpó wẹ́ẹ̀bù." }
        ]
      }
    },
    {
      name: "Orí 2: Wíwá nǹkan àti wíwà láìléwu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Wíwá nǹkan lórí wẹ́ẹ̀bù",
          minutes: 5,
          goal: "Wá ohun kan pàtó kí o sì ṣí èsì tó wúlò.",
          text: [
            "Tí o kò bá mọ àdírẹ́sì wẹ́ẹ̀bù kan, wá a. Tẹ ọ̀rọ̀ pàtàkì díẹ̀ sínú ọ̀pá àdírẹ́sì tàbí sórí ojú-òpó ìwádìí bí Google tàbí Bing, lẹ́yìn náà tẹ Enter. Fún àpẹẹrẹ: \"Springfield public library hours\".",
            "Ojú-ìwé èsì ń fi àkọsílẹ̀ àwọn link hàn. Ọ̀kọ̀ọ̀kan ní àkọlé aláwọ̀ búlúù, àdírẹ́sì wẹ́ẹ̀bù ní lẹ́tà kékeré, àti àlàyé kúkúrú. Ka àdírẹ́sì wẹ́ẹ̀bù kí o tó fọwọ́ kàn án. Àwọn èsì ní òkè tí a kọ \"Sponsored\" tàbí \"Ad\" sí jẹ́ ìpolówó tí wọ́n sanwó fún.",
            "O tún lè fi ohùn rẹ wá nǹkan. Fọwọ́ kan àmì gbohùngbohùn (microphone) nínú àpótí ìwádìí kí o sì sọ ohun tí o fẹ́, bí \"weather tomorrow\"."
          ],
          steps: ["Fọwọ́ kan ọ̀pá àdírẹ́sì tàbí àpótí ìwádìí.", "Tẹ ọ̀rọ̀ pàtàkì díẹ̀, bí orúkọ ibẹ̀, ìlú, àti ohun tí o fẹ́.", "Tẹ Enter tàbí bọ́tìnnì ìwádìí.", "Fo àwọn èsì tí a kọ Sponsored tàbí Ad sí.", "Ka àdírẹ́sì wẹ́ẹ̀bù, lẹ́yìn náà fọwọ́ kan èsì tí o fẹ́."],
          words: [["Wíwá (search)", "títẹ ọ̀rọ̀ láti rí àwọn ojú-ìwé wẹ́ẹ̀bù nípa wọn."], ["Èsì (results)", "àkọsílẹ̀ àwọn ojú-ìwé wẹ́ẹ̀bù tí ìwádìí rí."], ["Link", "ọ̀rọ̀ tàbí àwòrán tí o ń fọwọ́ kàn láti lọ sí ojú-ìwé míì."]],
          slides: [
            { title: "Wá nǹkan pẹ̀lú ọ̀rọ̀ pàtàkì", bullets: ["\"Springfield public library hours\"", "Tẹ ẹ́ sínú ọ̀pá àdírẹ́sì tàbí sórí Google tàbí Bing"] },
            { title: "Kíka èsì", bullets: ["Àkọlé búlúù, àdírẹ́sì wẹ́ẹ̀bù, àlàyé kúkúrú", "Sponsored tàbí Ad = wọ́n sanwó fún un", "Ka àdírẹ́sì kí o tó fọwọ́ kàn án"] },
            { title: "Lo ohùn rẹ", bullets: ["Fọwọ́ kan àmì gbohùngbohùn", "Sọ pé: \"weather tomorrow\""] }
          ],
          tryIt: "Wá àkókò tí ibì kan nítòsí rẹ ń ṣí, bí ilé òògùn tàbí ọgbà ìtura. Fo gbogbo ìpolówó, ṣí èsì gidi (ti ibẹ̀ fúnra rẹ̀), kí o sì wá àkókò tí wọ́n ń ṣí.",
          youCanNow: "wá nǹkan lórí wẹ́ẹ̀bù, kí o sì yan èsì tó wúlò tí kì í ṣe ìpolówó.",
          quickCheck: [
            { objective: "O4", q: "Lórí ojú-ìwé èsì, kí ni lẹ́tà kékeré lábẹ́ àkọlé búlúù kọ̀ọ̀kan ń fi hàn?", options: ["Àdírẹ́sì wẹ́ẹ̀bù", "Ojú ọjọ́", "Ọ̀rọ̀ aṣínà rẹ", "Iye owó ojú-ìwé náà"], answer: 0, why: "Èsì kọ̀ọ̀kan ń fi àdírẹ́sì wẹ́ẹ̀bù rẹ̀ hàn ní lẹ́tà kékeré, kí o lè kà á kí o tó fọwọ́ kàn án." },
            { objective: "O4", q: "Ọwọ́ rẹ dí, o sì fẹ́ mọ ojú ọjọ́ ọ̀la. Kí ni o máa ṣe?", options: ["Tẹ ìtàn gígùn sínú àpótí ìwádìí", "Ṣí bookmark ojú-òpó ọjà rírà", "Fọwọ́ kan àmì gbohùngbohùn nínú àpótí ìwádìí kí o sì sọ pé \"weather tomorrow\"", "Tún fóònù tàn"], answer: 2, why: "O lè fi ohùn rẹ wá nǹkan nípa fífọwọ́ kan àmì gbohùngbohùn." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kíka àdírẹ́sì wẹ́ẹ̀bù àti yíyẹra fún jìbìtì",
          minutes: 5,
          goal: "Mọ àdírẹ́sì wẹ́ẹ̀bù tí kò léwu yàtọ̀ sí èyí tó léwu, kí o sì mọ ohun tí o máa ṣe sí pop-up tó ń dẹ́rù bani.",
          text: [
            "Àdírẹ́sì wẹ́ẹ̀bù ní apá pàtàkì kan, domain, tó wà ṣáájú àmì ìlà-ìdábùú (/) àkọ́kọ́ tó dá wà, bí irs.gov tàbí amazon.com. Apá pàtàkì yìí ló ń sọ ẹni tó ni ojú-òpó náà. Àwọn ojú-òpó irọ́ ń lo orúkọ tó jọ ti gidi, bí \"amaz0n-deals.com\" tàbí \"irs-refund.help\".",
            "Wá https àti àmì àgádágodo (lock) ní ìbẹ̀rẹ̀ àdírẹ́sì. Ó túmọ̀ sí pé ìsopọ̀ náà jẹ́ àdáni, ṣùgbọ́n àwọn oníjìbìtì náà lè ní i, nítorí náà orúkọ domain ló ṣe pàtàkì jù.",
            "Àwọn pop-up irọ́ kan ń sọ pé kọ̀mpútà rẹ ní fáírọ́ọ̀sì (virus), wọ́n sì ń fún ọ ní nọ́mbà fóònù láti pè. FTC (àjọ ìjọba US tó ń dáàbò bo àwọn oníbàárà) sọ pé ìkìlọ̀ ààbò gidi kò ní ní kí o pe nọ́mbà fóònù láéláé, àwọn ilé-iṣẹ́ ẹ̀rọ gidi kò sì ní pè ọ́ tàbí fi ọ̀rọ̀ ránṣẹ́ sí ọ nípa ìṣòro kan. Má ṣe pè. Pa tab tàbí browser náà dé; tí kò bá dé, tún ẹ̀rọ náà tàn. Tí ọkàn rẹ kò bá balẹ̀, béèrè lọ́wọ́ ẹni tí o fọkàn tán."
          ],
          steps: ["Wá domain: orúkọ tó wà ṣáájú àmì / àkọ́kọ́ tó dá wà.", "Ṣàyẹ̀wò pé orúkọ gidi tí o ń retí ni.", "Wá https àti àgádágodo, ṣùgbọ́n má gbẹ́kẹ̀lé wọn nìkan.", "Pop-up tó ń dẹ́rù bani pẹ̀lú nọ́mbà fóònù? Má ṣe pè.", "Pa tab náà dé tàbí tún ẹ̀rọ náà tàn.", "Fi ẹjọ́ jìbìtì tech support sùn ní ReportFraud.ftc.gov."],
          words: [["Domain", "orúkọ pàtàkì nínú àdírẹ́sì wẹ́ẹ̀bù tó ń sọ ẹni tó ni ojú-òpó náà, bí irs.gov."], ["Pop-up", "fèrèsé kékeré tó yọ lójijì sórí ojú-ìwé wẹ́ẹ̀bù."], ["Jìbìtì tech support", "ìkìlọ̀ tàbí ìpè irọ́ tó sọ pé ẹ̀rọ rẹ ní ìṣòro, láti gba owó rẹ tàbí wọlé sínú ẹ̀rọ rẹ."]],
          sources: [FTC_TECH],
          slides: [
            { title: "Wá domain", bullets: ["Orúkọ tó wà ṣáájú àmì / àkọ́kọ́ tó dá wà", "irs.gov jẹ́ gidi; irs-refund.help kì í ṣe gidi"] },
            { title: "https àti àgádágodo", bullets: ["Ìsopọ̀ náà jẹ́ àdáni", "Àwọn oníjìbìtì náà lè ní i", "Orúkọ domain ló ṣe pàtàkì jù"] },
            { title: "Pop-up tó ń dẹ́rù bani (FTC)", bullets: ["Ìkìlọ̀ gidi kò ní ní kí o pe nọ́mbà kankan", "Má ṣe pè", "Pa tab náà dé tàbí tún ẹ̀rọ náà tàn"] }
          ],
          tryIt: "Wo àdírẹ́sì wẹ́ẹ̀bù mẹ́ta lójú-iboju rẹ tàbí nínú ímeèlì rẹ. Fún ọ̀kọ̀ọ̀kan, tọ́ka sí domain kí o sì sọ ẹni tó ni ojú-òpó náà.",
          youCanNow: "ka àdírẹ́sì wẹ́ẹ̀bù láti mọ ẹni tó ni ojú-òpó kan, kí o sì ṣe ohun tó tọ́ láìléwu sí pop-up fáírọ́ọ̀sì irọ́.",
          quickCheck: [
            { objective: "O5", q: "Apá wo nínú àdírẹ́sì wẹ́ẹ̀bù ló ń sọ ẹni tó ni ojú-òpó náà?", options: ["https ní ìbẹ̀rẹ̀", "Àwọn ọ̀rọ̀ lẹ́yìn àmì / àkọ́kọ́ tó dá wà", "Domain, ṣáájú àmì / àkọ́kọ́ tó dá wà", "Àmì àgádágodo"], answer: 2, why: "Domain, bí irs.gov, ló ń sọ ẹni tó ni ojú-òpó náà." },
            { objective: "O5", q: "Pop-up kan sọ pé kọ̀mpútà rẹ ní fáírọ́ọ̀sì, ó sì fi nọ́mbà kan hàn láti pè. Kò dé. Kí ni o máa ṣe?", options: ["Pe nọ́mbà náà lójú ẹsẹ̀", "Tún ẹ̀rọ náà tàn, má sì ṣe pè", "Tẹ nọ́mbà káàdì rẹ láti sanwó fún àtúnṣe", "Fi í sílẹ̀ lójú-iboju fún ọjọ́ púpọ̀"], answer: 1, why: "Ìkìlọ̀ ààbò gidi kò ní ní kí o pè láéláé; tún ẹ̀rọ tàn tí pop-up kò bá dé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fífi àwọn ojú-òpó tí o fẹ́ràn pamọ́",
          minutes: 4,
          goal: "Fi ojú-òpó wẹ́ẹ̀bù sí bookmark kí o sì tún ṣí i pẹ̀lú ìfọwọ́kàn kan.",
          text: [
            "Bookmark (a tún ń pè é ní favorite) ń fi ojú-òpó wẹ́ẹ̀bù pamọ́ kí o lè padà sí i láìwá a mọ́. Òun ni ọ̀nà tí kò léwu jù láti padà sí àwọn ojú-òpó tí o máa ń lò, bí báńkì rẹ, ilé òògùn tàbí ojú-òpó ìròyìn, nítorí pé o kò ní kọjá láàárín èsì ìwádìí irọ́.",
            "Lórí kọ̀mpútà, tẹ àmì ìràwọ̀ ní òpin ọ̀pá àdírẹ́sì. Lórí iPhone tàbí iPad nínú Safari, fọwọ́ kan bọ́tìnnì Share kí o sì yan Add Bookmark. Nínú Chrome lórí fóònù, ṣí àkójọ (àmì mẹ́ta) kí o sì fọwọ́ kan ìràwọ̀. Lórí ọ̀pọ̀ fóònù, o tún lè yan \"Add to Home screen\" láti ṣe àmì kan bí app.",
            "Láti ṣí bookmark lẹ́yìn náà, ṣí àkọsílẹ̀ bookmark nínú àkójọ browser, tàbí fọwọ́ kan àmì rẹ̀ lórí home screen."
          ],
          steps: ["Ṣí ojú-òpó wẹ́ẹ̀bù gidi tí o fẹ́ fi pamọ́.", "Kọ̀mpútà: tẹ ìràwọ̀ nínú ọ̀pá àdírẹ́sì.", "Safari lórí iPhone tàbí iPad: bọ́tìnnì Share, lẹ́yìn náà Add Bookmark.", "Chrome lórí fóònù: àkójọ àmì mẹ́ta, lẹ́yìn náà ìràwọ̀.", "Láti ṣí i lẹ́yìn náà: lọ sí Bookmarks nínú àkójọ, tàbí fọwọ́ kan àmì rẹ̀ lórí home screen."],
          words: [["Bookmark / favorite", "link ojú-òpó wẹ́ẹ̀bù tí o fi pamọ́ kí o lè tún ṣí i kíákíá."], ["Home screen", "ojú-iboju àkọ́kọ́ fóònù tàbí tablet tó ń fi àwọn àmì app hàn."]],
          slides: [
            { title: "Kí ló dé tí a fi ń lo bookmark?", bullets: ["Padà sí ojú-òpó pẹ̀lú ìfọwọ́kàn kan", "Ó ń fo èsì ìwádìí irọ́", "Ó dára fún báńkì, ilé òògùn, ìròyìn"] },
            { title: "Bí a ṣe ń ṣe bookmark", bullets: ["Kọ̀mpútà: ìràwọ̀ nínú ọ̀pá àdírẹ́sì", "Safari: Share, lẹ́yìn náà Add Bookmark", "Chrome lórí fóònù: àmì mẹ́ta, lẹ́yìn náà ìràwọ̀"] },
            { title: "Tún un ṣí", bullets: ["Bookmarks nínú àkójọ browser", "Tàbí fọwọ́ kan àmì rẹ̀ lórí home screen"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣètò ìjáde kan. Wá ọgbà ìtura, ilé ọnà tàbí ilé-ìkàwé, ṣí ojú-òpó rẹ̀ gidi, wo àkókò tí wọ́n ń ṣí àti àdírẹ́sì wọn, ṣí ojú ọjọ́ ọ̀la nínú tab kejì, mú ọ̀rọ̀ tóbi sí i tí o bá nílò, kí o sì fi ojú-òpó gidi náà sí bookmark.",
          youCanNow: "lo íńtánẹ́ẹ̀tì fúnra rẹ, wá ohun tí o nílò, yẹra fún ojú-òpó irọ́, kí o sì fi àwọn ojú-òpó tí o fẹ́ràn pamọ́.",
          quickCheck: [
            { objective: "O5", q: "Lórí kọ̀mpútà, kí ni o máa tẹ láti fi ojú-òpó wẹ́ẹ̀bù sí bookmark?", options: ["Ọfà ìpadàsẹ́yìn", "Ọfà oníyípo", "Bọ́tìnnì àmì àfikún (+)", "Ìràwọ̀ ní òpin ọ̀pá àdírẹ́sì"], answer: 3, why: "Ìràwọ̀ ní òpin ọ̀pá àdírẹ́sì ń fi bookmark pamọ́." },
            { objective: "O5", q: "O máa ń bèrè òògùn láti ojú-òpó ilé òògùn rẹ lóṣooṣù. Báwo ni o ṣe máa padà sí i láìléwu?", options: ["Wá a nígbà gbogbo kí o sì fọwọ́ kan ìpolówó àkọ́kọ́", "Fi ojú-òpó gidi sí bookmark kí o sì ṣí i láti inú bookmark rẹ", "Tẹ link nínú ọ̀rọ̀ ìránṣẹ́ (text)", "Fojú inú wo àdírẹ́sì náà nígbà kọ̀ọ̀kan"], answer: 1, why: "Bookmark láti ojú-òpó gidi ń fo èsì ìwádìí irọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Wíwá nǹkan àti wíwà láìléwu",
        questions: [
          { objective: "O4", q: "Ìwádìí wo ló yé jù?", options: ["\"place\"", "\"Springfield library hours\"", "\"open?\"", "\"help me find it please now\""], answer: 1, why: "Ọ̀rọ̀ pàtàkì díẹ̀ pẹ̀lú orúkọ ibẹ̀ àti ohun tí o fẹ́ ló ń ṣiṣẹ́ jù." },
          { objective: "O5", q: "Nínú www.irs.gov/refunds, kí ni domain?", options: ["www", "refunds", "irs.gov", "https"], answer: 2, why: "Domain ni orúkọ tó wà ṣáájú àmì / àkọ́kọ́ tó dá wà." },
          { objective: "O5", q: "Pop-up kan sọ pé kọ̀mpútà rẹ ní fáírọ́ọ̀sì, ó sì ní kí o pe nọ́mbà kan báyìí. Kí ni o máa ṣe?", options: ["Pe nọ́mbà náà", "Sanwó pẹ̀lú gift card", "Jẹ́ kí wọ́n wọ inú ẹ̀rọ rẹ láti ọ̀nà jíjìn", "Má ṣe pè; pa tab náà dé tàbí tún ẹ̀rọ tàn"], answer: 3, why: "FTC sọ pé ìkìlọ̀ gidi kò ní ní kí o pe nọ́mbà kankan láéláé." },
          { objective: "O5", q: "Ojú-òpó wẹ́ẹ̀bù kan fi https àti àgádágodo hàn. Ìyẹn túmọ̀ sí:", options: ["Ojú-òpó ìjọba ni", "Ó dájú pé olóòótọ́ ni", "Ìsopọ̀ náà jẹ́ àdáni, ṣùgbọ́n o ṣì gbọ́dọ̀ ṣàyẹ̀wò domain", "Ọ̀fẹ́ ni"], answer: 2, why: "Àwọn oníjìbìtì náà lè ní https; domain ló ṣe pàtàkì jù." },
          { objective: "O5", q: "Kí ni ọ̀nà tí kò léwu jù láti padà sí ojú-òpó ilé òògùn rẹ lóṣooṣù?", options: ["Tẹ ìpolówó kan", "Bookmark tí o fi pamọ́ láti ojú-òpó gidi", "Link nínú ọ̀rọ̀ ìránṣẹ́ láti ọ̀dọ̀ àjèjì", "Fojú inú wo àdírẹ́sì náà"], answer: 1, why: "Bookmark ń fo èsì ìwádìí àti link irọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Íńtánẹ́ẹ̀tì",
    questions: [
      { objective: "O1", q: "Íńtánẹ́ẹ̀tì ni:", options: ["Ojú-òpó wẹ́ẹ̀bù kan ṣoṣo", "Ìkànnì TV kan", "Ìwé nọ́mbà fóònù", "Network kárí ayé tó so àwọn kọ̀mpútà àti fóònù pọ̀"], answer: 3, why: "Ó so àwọn ẹ̀rọ jákèjádò ayé pọ̀." },
      { objective: "O1", q: "Wi-Fi ń wá láti:", options: ["Bátírì", "TV", "Router", "Ẹ̀rọ ìtẹ̀wé"], answer: 2, why: "Router ló ń fi àmì Wi-Fi jáde." },
      { objective: "O1", q: "Mobile data ni:", options: ["Browser kan", "Wi-Fi ọ̀fẹ́ ní ilé-ìkàwé", "Irú ímeèlì kan", "Íńtánẹ́ẹ̀tì láti ilé-iṣọ́, apá kan ètò fóònù rẹ"], answer: 3, why: "Mobile data ń wá nípasẹ̀ ilé-iṣẹ́ fóònù rẹ." },
      { objective: "O1", q: "Kí ló dé tí a fi ń lo Wi-Fi ilé fún fídíò?", options: ["Fídíò ń ṣiṣẹ́ lórí Wi-Fi nìkan", "Ó sábà máa ń dá data ètò fóònù rẹ sí", "Òfin ló sọ bẹ́ẹ̀", "Ó ń mú fóònù fúyẹ́"], answer: 1, why: "Wi-Fi ilé kì í sábà lo data ètò fóònù rẹ." },
      { objective: "O2", q: "Láti so mọ́ Wi-Fi, o nílò:", options: ["Ẹ̀rọ ìtẹ̀wé", "Nọ́mbà báńkì rẹ", "Orúkọ network àti ọ̀rọ̀ aṣínà", "Fóònù tuntun"], answer: 2, why: "Orúkọ pẹ̀lú ọ̀rọ̀ aṣínà ń jẹ́ kí o so mọ́ ọn." },
      { objective: "O2", q: "Lórí iPhone, ibo ni Wi-Fi wà?", options: ["Clock", "Photos", "Calculator", "Settings"], answer: 3, why: "Settings, lẹ́yìn náà Wi-Fi." },
      { objective: "O2", q: "Lórí Wi-Fi gbogbogbò, èwo ni kò dára?", options: ["Kíka ìròyìn", "Iṣẹ́ báńkì lórí ayélujára", "Wíwo máàpù", "Wíwá àkókò tí ibì kan ń ṣí"], answer: 1, why: "Ọ̀pọ̀ ènìyàn ló ń lo Wi-Fi gbogbogbò; yẹra fún iṣẹ́ àdáni." },
      { objective: "O3", q: "Èwo nínú ìwọ̀nyí ni browser?", options: ["Ẹ̀rọ ìṣirò", "Chrome", "Kámẹ́rà", "Aago"], answer: 1, why: "Chrome, Safari, Edge àti Firefox jẹ́ browser." },
      { objective: "O3", q: "Kí ni ọfà ìpadàsẹ́yìn nínú browser ń ṣe?", options: ["Ó ń pa ojú-òpó wẹ́ẹ̀bù rẹ́", "Ó ń pa kọ̀mpútà", "Ó ń lọ sí ojú-ìwé tí o wà tẹ́lẹ̀", "Ó ń tẹ ojú-ìwé jáde"], answer: 2, why: "Ìpadàsẹ́yìn ń mú ọ padà sí ojú-ìwé tó ṣáájú." },
      { objective: "O3", q: "Tab ń jẹ́ kí o:", options: ["Pa Wi-Fi", "San owó láìfọwọ́kàn", "Gba agbára bátírì", "Ṣí ojú-ìwé púpọ̀ lẹ́ẹ̀kan náà"], answer: 3, why: "Tab kọ̀ọ̀kan jẹ́ ojú-ìwé kan tó wà ní ṣíṣí." },
      { objective: "O3", q: "Ọ̀rọ̀ ojú-ìwé wẹ́ẹ̀bù kéré jù lórí kọ̀mpútà. Tẹ:", options: ["Delete", "Ctrl àti + (Command àti + lórí Mac)", "Escape", "Shift àti 0"], answer: 1, why: "Ctrl àti + ń mú un tóbi sí i." },
      { objective: "O3", q: "Lórí fóònù, báwo ni o ṣe ń mú ojú-ìwé tóbi sí i?", options: ["Na ìka méjì yà sí ara wọn lórí ojú-iboju", "Mi fóònù", "Pa á", "Tẹ bọ́tìnnì ohùn"], answer: 0, why: "Nínà ìka méjì yà ń mú un tóbi sí i." },
      { objective: "O4", q: "Èsì ìwádìí tí a kọ \"Sponsored\" sí jẹ́:", options: ["Ìpolówó tí wọ́n sanwó fún", "Ojú-òpó gidi nígbà gbogbo", "Ojú-ìwé ìjọba", "Ìkìlọ̀ fáírọ́ọ̀sì"], answer: 0, why: "Sponsored túmọ̀ sí pé ẹnì kan sanwó fún un." },
      { objective: "O4", q: "Kí o tó fọwọ́ kan èsì ìwádìí, o gbọ́dọ̀:", options: ["Ka àdírẹ́sì wẹ́ẹ̀bù rẹ̀", "Pa browser dé", "Tún fóònù tàn", "Fọwọ́ kan gbogbo èsì"], answer: 0, why: "Àdírẹ́sì ń fi ẹni tó ni ojú-òpó náà hàn." },
      { objective: "O4", q: "Báwo ni o ṣe lè wá nǹkan láìtẹ ọ̀rọ̀?", options: ["Fọwọ́ kan àmì gbohùngbohùn kí o sì sọ̀rọ̀", "Mi fóònù", "Lo ẹ̀rọ ìṣirò", "Gbé ohùn sókè"], answer: 0, why: "Ìwádìí pẹ̀lú ohùn ń jẹ́ kí o sọ ohun tí o fẹ́." },
      { objective: "O5", q: "Àdírẹ́sì wo ló ṣeé ṣe jù kí ó jẹ́ irọ́?", options: ["irs.gov", "amazon.com", "amaz0n-deals.com", "weather.gov"], answer: 2, why: "Òdo (0) dípò lẹ́tà O jẹ́ ẹ̀tàn orúkọ tó jọ ti gidi." },
      { objective: "O5", q: "https àti àgádágodo ń sọ fún ọ pé:", options: ["Ìsopọ̀ náà jẹ́ àdáni", "Ó dájú pé ojú-òpó náà jẹ́ olóòótọ́", "Ojú-òpó náà jẹ́ ọ̀fẹ́", "Báńkì ni ojú-òpó náà"], answer: 0, why: "Wọ́n ń dáàbò bo ìsopọ̀, kì í ṣe òtítọ́ inú ojú-òpó." },
      { objective: "O5", q: "Ìkìlọ̀ ààbò gidi lórí kọ̀mpútà rẹ máa:", options: ["Kò ní ní kí o pe nọ́mbà fóònù láéláé", "Béèrè fún gift card", "Ní kí o pè lójú ẹsẹ̀", "Béèrè ọ̀rọ̀ aṣínà báńkì rẹ"], answer: 0, why: "FTC sọ pé ìkìlọ̀ gidi kò ní ní kí o pe nọ́mbà kankan láéláé." },
      { objective: "O5", q: "Pop-up kan kò dé. Kí ni o máa ṣe?", options: ["Tún ẹ̀rọ náà tàn", "Pe nọ́mbà tó wà lórí rẹ̀", "Tẹ ọ̀rọ̀ aṣínà rẹ", "San owó tí wọ́n béèrè"], answer: 0, why: "Títún ẹ̀rọ tàn ń mú pop-up kúrò láìléwu." },
      { objective: "O5", q: "Bookmark ni:", options: ["Link ojú-òpó wẹ́ẹ̀bù tí a fi pamọ́", "Ohun tí a fi ń sàmì sí ojú-ìwé ìwé nìkan", "Fáírọ́ọ̀sì", "Ọ̀rọ̀ aṣínà"], answer: 0, why: "Bookmark ń mú ọ padà sí ojú-òpó kíákíá." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      4,
      6,
      8,
      10,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Síso mọ́ Wi-Fi",
        objective: "O2",
        notYet: "Ẹ̀rọ náà kò so mọ́ ọn, tàbí ó so mọ́ network tí a kò mọ orúkọ rẹ̀.",
        meets: "Ẹ̀rọ náà so mọ́ network Wi-Fi tí a mọ̀, láìsí ìrànlọ́wọ́.",
        exceeds: "Ó tún ṣàlàyé ohun tí a gbọ́dọ̀ yẹra fún lórí Wi-Fi gbogbogbò."
      },
      {
        name: "Wíwá ojú-òpó gidi",
        objective: "O4",
        notYet: "Ojú-òpó tí ó ṣí jẹ́ ìpolówó, tàbí kì í ṣe ojú-òpó ibẹ̀ fúnra rẹ̀.",
        meets: "Ó rí ojú-òpó gidi ibẹ̀ nípasẹ̀ ìwádìí, ó sì rí àkókò tí wọ́n ń ṣí àti àdírẹ́sì wọn.",
        exceeds: "Ó ka àdírẹ́sì wẹ́ẹ̀bù, ó sì ṣàyẹ̀wò rẹ̀ kí ó tó fọwọ́ kàn án."
      },
      {
        name: "Lílo browser",
        objective: "O3",
        notYet: "Ojú-ìwé kan ṣoṣo ni ó ṣí, tàbí akẹ́kọ̀ọ́ kò lè padà sí ojú-ìwé àkọ́kọ́.",
        meets: "Tab kejì ń fi ojú ọjọ́ ọ̀la hàn, akẹ́kọ̀ọ́ sì ń yí padà láàárín àwọn tab.",
        exceeds: "Ó tún mú ọ̀rọ̀ tóbi dé ìwọ̀n tó rọrùn láti kà, ó sì lo bọ́tìnnì ìpadàsẹ́yìn."
      },
      {
        name: "Àdírẹ́sì tí kò léwu àti bookmark",
        objective: "O5",
        notYet: "Kò sí bookmark, tàbí ó fi ojú-òpó tó jọ ti gidi tàbí ti ìpolówó sí bookmark.",
        meets: "Ó fi ojú-òpó gidi sí bookmark, ó sì tún ṣí i pẹ̀lú ìfọwọ́kàn kan.",
        exceeds: "Ó tún ṣàlàyé bí domain ṣe ń fi hàn pé ojú-òpó náà jẹ́ gidi."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric fún ètò ìjáde náà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn lo íńtánẹ́ẹ̀tì fúnra wọn fún ohun gidi kan, bí àkókò ìṣísílẹ̀, ojú ọjọ́ tàbí ojú-òpó ìlera, láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn pa pop-up irọ́ dé tàbí yẹra fún ojú-òpó tó jọ ti gidi",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí ẹ̀kọ́ tó kàn, bí \"Email and Online Communication\" tàbí \"Digital Literacy Basics\""
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù, tablet tàbí kọ̀mpútà tí akẹ́kọ̀ọ́ lè fi ṣe àṣeṣe",
      "Orúkọ network Wi-Fi àti ọ̀rọ̀ aṣínà (ti ilé, ilé-ìkàwé tàbí ti ètò náà fúnra rẹ̀)",
      "Ìwé àti gègé láti kọ àkókò tí ibẹ̀ ń ṣí àti àdírẹ́sì rẹ̀ sílẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Kọ orúkọ Wi-Fi ètò náà àti ọ̀rọ̀ aṣínà rẹ̀ sórí pátákó kí àwọn akẹ́kọ̀ọ́ lè so mọ́ network tó tọ́, kì í ṣe èyí tó jọ ọ́.",
      "Pín àwọn akẹ́kọ̀ọ́ sí ẹgbẹ́ ní ìbámu pẹ̀lú ẹ̀rọ wọn (iPhone, Android tàbí kọ̀mpútà) kí àwọn ìgbésẹ̀ lójú-iboju lè bá ohun tí wọ́n ń rí mu.",
      "Lo ọgbà ìtura, ilé-ìkàwé tàbí ilé ọnà àdúgbò fún iṣẹ́ ìjáde náà kí ó lè rọrùn láti ṣàyẹ̀wò ojú-òpó gidi.",
      "Fi àwòrán pop-up fáírọ́ọ̀sì irọ́ hàn kí àwọn akẹ́kọ̀ọ́ lè dá a mọ̀, ṣùgbọ́n má ṣe ṣí ojú-òpó jìbìtì gidi nínú kíláàsì láéláé.",
      "Lọ díẹ̀díẹ̀ pẹ̀lú àwọn akẹ́kọ̀ọ́ àgbàlagbà: jẹ́ kí wọ́n ṣe gbogbo ìfọwọ́kàn fúnra wọn dípò kí o ṣe é fún wọn."
    ]
  }
};
