"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-agents-automation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-ai-agents-automation-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-agents-automation",
  category: "Small Business",
  name: "Mawakala wa AI kwa Kujiendesha kwa Kazi za Biashara",
  skills: "Kutofautisha automation na mawakala wa AI, Kupanga kazi inayojirudia hatua kwa hatua, Kusanifu mtiririko wa kichocheo na vitendo, Kuweka idhini ya mtu, Kujaribu kwa data ya mfano, Kuweka kumbukumbu na kufuatilia",
  outcome: "kusanifu, kujenga na kujaribu kwa usalama automation moja rahisi kwa biashara yako, kama kugeuza ombi jipya kutoka fomu ya wavuti kuwa mstari kwenye jedwali, rasimu ya jibu na kikumbusho kwako, ukiwa na hatua ya idhini ya mtu kabla kitu chochote hakijatumwa, jaribio kwa data ya mfano, na kumbukumbu unayoikagua kila wiki.",
  about: [
    "Kozi hii ni kwa wamiliki wa biashara ndogo wanaorudia kazi zile zile za kompyuta kila siku: kunakili majibu ya fomu kwenye jedwali, kutuma barua pepe ile ile ya kufuatilia, kutengeneza ankara, kupanga maombi ya wateja. Mifano inatoka kwa maduka, migahawa, saluni, huduma za usafi na za ukarabati, na ofisi ndogo.",
    "Utajifunza tofauti kati ya automation rahisi na wakala wa AI, kugawa kazi katika hatua, kusanifu mtiririko wenye kichocheo na vitendo, na kuujenga kwa zana isiyohitaji kuandika code kama Zapier, Make au Microsoft Power Automate, au kwa vipengele vya automation vya zana unazotumia tayari. Muhimu zaidi, utahakikisha mtu anabaki akiongoza.",
    "Zana hubadilisha skrini na bei zao mara kwa mara, kwa hiyo tunaeleza cha kufanya badala ya majina kamili ya menyu; kagua tovuti ya kila zana kuona mpango wake wa bure wa sasa. Kila somo linachukua kama dakika tano, na kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Jenga automation moja inayofanya kazi kwa kazi halisi inayojirudia: andika ramani ya hatua, chagua kichocheo na vitendo, weka hatua ya idhini ya mtu kabla kitu chochote hakijatumwa au kulipwa, ijaribu kwa maingizo matatu ya mfano (bila data halisi ya wateja), rekebisha kinachoharibika, na weka kumbukumbu rahisi na ukaguzi wa kila wiki. Andika maelezo ya ukurasa mmoja ili mtu mwingine aweze kuielewa au kuizima.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo wanaorudia kazi zile zile za kompyuta kila siku, kama kunakili majibu ya fomu kwenye jedwali, kutuma barua pepe ile ile ya kufuatilia, kutengeneza ankara na kupanga maombi ya wateja, katika maduka, migahawa, saluni, huduma za usafi na za ukarabati na ofisi ndogo.",
    startingPoint: "Wanatumia barua pepe, fomu ya wavuti au zana ya kuweka miadi na jedwali (spreadsheet), na huenda wamejaribu msaidizi wa AI. Wengi hawajawahi kujenga automation wala kutumia zana ya automation isiyohitaji code.",
    gap: "Kazi zinazojirudia zinachukua saa nyingi kila wiki na makosa huingia watu wakichoka. Wanafunzi wanahitaji kuziendesha hatua za kawaida kiotomatiki kwa usalama, mtu akiidhinisha chochote kinachotumwa au kulipwa, ili waokoe muda bila kupoteza udhibiti wa wateja, pesa au kumbukumbu.",
    constraints: [
      "Zana za bure au za gharama ndogo zisizohitaji code; mipango ya bure ina mipaka inayobadilika, kwa hiyo wanafunzi wanakagua tovuti ya kila zana",
      "Hakuna data halisi ya wateja katika majaribio; maingizo ya mfano tu",
      "Mtu anaidhinisha chochote kinachotumia pesa, kinachotuma ujumbe kwa wateja au kinachobadilisha kumbukumbu",
      "Usalama: kuingia kwa hatua mbili, ruhusa ndogo zaidi inayohitajika, hakuna namba za kadi wala nywila katika hatua za AI",
      "Muda: kama dakika 60 kwa jumla, katika masomo ya dakika 5"
    ],
    prerequisites: "Kuweza kutumia barua pepe na jedwali bila shida. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi ya biashara", action: "kueleza kama automation ya kudumu au hatua ya AI inaifaa, na sehemu zipi zinabaki kwa mtu", standard: "pesa, ujumbe kwa wateja na mabadiliko ya kumbukumbu yakibaki kwa mtu" },
    { id: "O2", condition: "Ukipewa kazi moja unayoirudia mara nyingi", action: "kuandika ramani ya hatua na kuweka alama kila hatua kama Kanuni, Maneno, Uamuzi au Pesa au kutuma", standard: "kila hatua unayofanya leo ikiwa imo" },
    { id: "O3", condition: "Ukitumia ramani yako ya hatua", action: "kusanifu mtiririko wenye kichocheo, vitendo na hatua ya idhini ya mtu, uliochorwa kwenye karatasi", standard: "idhini ikiwa kabla ya kitu chochote kutoka nje ya biashara" },
    { id: "O4", condition: "Ukitumia zana ya automation isiyohitaji code", action: "kujenga mtiririko, kuunganisha akaunti zako na kupanga sehemu za taarifa (fields)", standard: "hatua ya AI ikipata tu sehemu inazohitaji na ikikutumia wewe rasimu yake" },
    { id: "O5", condition: "Ukipewa maingizo matatu ya mfano yaliyobuniwa", action: "kujaribu automation na kurekebisha kinachoharibika, badiliko moja kwa wakati", standard: "hadi ingizo la kawaida, ingizo lenye sehemu tupu na ingizo lenye maandishi ya ajabu yote yafaulu" },
    { id: "O6", condition: "Automation ikishaanza kazi", action: "kuweka kumbukumbu, ukaguzi wa kila wiki na maelezo ya ukurasa mmoja yanayosema jinsi ya kuizima", standard: "ili mtu mwingine aweze kuielewa au kuisimamisha" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuelewa na kusanifu automation",
      lessons: [
        {
          objectives: ["O1"],
          title: "Automation na mawakala wa AI: tofauti ni nini?",
          minutes: 5,
          goal: "Eleza tofauti kati ya automation ya kudumu na wakala wa AI, na lini kila moja inafaa.",
          text: [
            "Automation inafuata kanuni za kudumu unazoweka: \"Fomu mpya ikitumwa, ongeza mstari kwenye jedwali langu na unitumie barua pepe.\" Inafanya kitu kile kile kila mara. Inatabirika na ni rahisi kuikagua.",
            "Wakala wa AI (AI agent) ni mfumo wa AI unaoweza kuamua baadhi ya hatua zake wenyewe ili kufikia lengo, kama kusoma ombi la mteja, kuamua ni la aina gani, kuandika rasimu ya jibu na kuchagua zana ya kutumia baadaye. Mawakala ni rahisi kubadilika lakini hawatabiriki sana, na wanaweza kukosea huku wakionekana kuwa na uhakika.",
            "Kwa biashara ndogo, anza na automation za kudumu, kisha ongeza AI kwenye hatua moja ambapo busara ya maneno inasaidia, kama kuandika rasimu ya jibu au kupanga jumbe. Mtu abaki akiongoza kila kitu kinachotumia pesa, kinachotuma ujumbe kwa wateja au kinachobadilisha kumbukumbu."
          ],
          words: [["Automation", "hatua za kudumu ambazo kompyuta inazifanya yenyewe jambo fulani linapotokea."], ["Wakala wa AI (AI agent)", "mfumo wa AI unaoweza kuchagua baadhi ya hatua zake wenyewe ili kufikia lengo."], ["Mtiririko (workflow)", "mfululizo wa hatua zinazokamilisha kazi."]],
          slides: [
            { title: "Automation", bullets: ["Kanuni za kudumu unazoweka", "Matokeo yale yale kila mara", "Inatabirika na ni rahisi kuikagua"] },
            { title: "Wakala wa AI", bullets: ["Anachagua baadhi ya hatua zake mwenyewe", "Rahisi kubadilika, lakini hatabiriki sana", "Anaweza kukosea huku akionekana na uhakika"] },
            { title: "Anza kwa urahisi", bullets: ["Automation ya kudumu kwanza", "Ongeza AI kwenye hatua moja ya maneno", "Watu wanaidhinisha pesa, jumbe na kumbukumbu"] }
          ],
          tryIt: "Andika kazi mbili zinazojirudia katika biashara yako. Kwa kila moja, andika kama automation ya kudumu inaweza kuifanya, au kama inahitaji busara (huenda hatua ya AI).",
          youCanNow: "kueleza tofauti kati ya automation na wakala wa AI na kuchagua kinachofaa kwa usalama zaidi.",
          quickCheck: [
            { objective: "O1", q: "Udhaifu wa mawakala wa AI ukilinganisha na automation za kudumu ni upi?", options: ["Hawatabiriki sana na wanaweza kukosea huku wakionekana na uhakika", "Hawawezi kamwe kutumia maneno", "Wanafanya kazi usiku tu", "Hawagharimu chochote"], answer: 0, why: "Mawakala ni rahisi kubadilika lakini hawatabiriki sana, na wanaweza kukosea huku wakionekana na uhakika." },
            { objective: "O1", q: "Unataka AI ijibu maombi ya wateja na ilipe ankara za wasambazaji yenyewe. Ufanye nini?", options: ["Mwache wakala wa AI afanye yote mawili", "AI iandike rasimu za majibu, na kulipa na kutuma kubaki kwa mtu", "Zima automation zote", "AI ilipe lakini isijibu"], answer: 1, why: "Mtu abaki akiongoza matumizi ya pesa na kutuma jumbe kwa wateja." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupanga kazi inayojirudia hatua kwa hatua",
          minutes: 5,
          goal: "Gawa kazi moja inayojirudia katika ramani ya hatua iliyo wazi.",
          text: [
            "Huwezi kuendesha kiotomatiki kitu ambacho hujakiandika. Chagua kazi moja unayofanya mara nyingi na uandike kila hatua kama unavyoifanya leo. Mfano wa huduma ya usafi: (1) ombi linafika kupitia fomu ya wavuti, (2) ninanakili jina, anwani na aina ya kazi kwenye jedwali langu, (3) ninaandika jibu lenye kiwango changu cha bei, (4) ninaweka kikumbusho cha kupiga simu tena, (5) ninatuma makadirio ya bei.",
            "Weka alama kila hatua: Kanuni (ni ile ile kila mara), Maneno (inahitaji kuandika au busara), Uamuzi (inahitaji mmiliki), Pesa au kutuma (inahitaji idhini).",
            "Hatua zenye alama ya Kanuni zinaweza kuendeshwa kiotomatiki. Hatua za Maneno zinaweza kupata rasimu ya AI. Hatua za Uamuzi na za Pesa au kutuma zinabaki kwa mtu."
          ],
          steps: ["Chagua kazi unayoifanya angalau kila wiki.", "Andika kila hatua kama unavyoifanya sasa.", "Weka alama kila moja: Kanuni, Maneno, Uamuzi, Pesa au kutuma.", "Zungushia duara hatua za Kanuni ili uziendeshe kiotomatiki kwanza."],
          words: [["Ramani ya hatua", "orodha yenye namba ya kila hatua katika kazi."], ["Kwa mkono", "kinachofanywa na mtu mwenyewe, si na kompyuta."]],
          slides: [
            { title: "Iandike kabla ya automation", bullets: ["Chagua kazi moja unayoifanya mara nyingi", "Orodhesha kila hatua kama unavyoifanya leo"] },
            { title: "Weka alama kila hatua", bullets: ["Kanuni: ile ile kila mara", "Maneno: kuandika au busara", "Uamuzi / Pesa au kutuma: mtu"] },
            { title: "Kinachoendeshwa kiotomatiki", bullets: ["Hatua za Kanuni: automation", "Hatua za Maneno: rasimu ya AI", "Hatua za uamuzi na pesa: watu"] }
          ],
          tryIt: "Andika ramani ya hatua ya kazi moja inayojirudia katika biashara yako na uweke alama kila hatua: Kanuni, Maneno, Uamuzi au Pesa/kutuma.",
          youCanNow: "kugawa kazi inayojirudia katika ramani ya hatua inayoonyesha kinachoweza kuendeshwa kiotomatiki.",
          quickCheck: [
            { objective: "O2", q: "Hatua zipi zinabaki kwa mtu?", options: ["Hatua za Kanuni", "Hatua za Maneno", "Hatua za Uamuzi na za Pesa au kutuma", "Kila hatua"], answer: 2, why: "Hatua za Uamuzi na za Pesa au kutuma zinabaki kwa mtu; hatua za Kanuni zinaweza kuendeshwa kiotomatiki." },
            { objective: "O2", q: "Unataka kuendesha kiotomatiki jinsi unavyoshughulikia maombi mapya. Ufanye nini kwanza?", options: ["Nunua zana ya bei ghali zaidi", "Iombe AI ikisie mchakato wako", "Anza kujenga mara moja", "Andika kila hatua kama unavyoifanya leo"], answer: 3, why: "Huwezi kuendesha kiotomatiki kitu ambacho hujakiandika." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kusanifu mtiririko: kichocheo, vitendo, idhini",
          minutes: 5,
          goal: "Sanifu mtiririko wenye kichocheo, vitendo na hatua ya idhini ya mtu.",
          text: [
            "Kila automation ina kichocheo (trigger, yaani tukio linaloianzisha) na vitendo (actions, yaani kinachofuata). Kichocheo: \"fomu mpya imetumwa\". Vitendo: \"ongeza mstari kwenye jedwali\", \"andika rasimu ya jibu kwa AI\", \"nitumie rasimu niiidhinishe\", \"tengeneza kikumbusho kwenye kalenda\".",
            "Weka idhini ya mtu kabla ya kitu chochote kutoka nje ya biashara: jumbe kwa wateja, malipo, mabadiliko ya bei, kufuta kumbukumbu. Automation inaweza kuandaa kila kitu; wewe ndiye unabonyeza kutuma.",
            "Kwanza uichore kama visanduku na mishale kwenye karatasi. Andika jina la zana kwa kila kisanduku: zana yako ya fomu, Google Sheets au Excel, hatua ya AI, barua pepe yako, kalenda yako. Hakikisha kila zana inaungana na huduma ya kuunganisha unayopanga kutumia."
          ],
          steps: ["Andika kichocheo.", "Orodhesha vitendo kwa mpangilio.", "Weka hatua ya idhini kabla ya kitu chochote kutumwa au kulipwa.", "Ichore kama visanduku na mishale.", "Andika jina la zana kwa kila kisanduku na uhakikishe inaungana."],
          words: [["Kichocheo (trigger)", "tukio linaloanzisha automation."], ["Kitendo (action)", "hatua ambayo automation inafanya baada ya kichocheo."], ["Hatua ya idhini", "mahali ambapo mtu lazima akubali kabla mtiririko haujaendelea."]],
          slides: [
            { title: "Kichocheo na vitendo", bullets: ["Kichocheo: fomu mpya imetumwa", "Vitendo: ongeza mstari, rasimu ya AI, nikumbushe"] },
            { title: "Idhini ya mtu", bullets: ["Kabla jumbe hazijatoka nje ya biashara", "Kabla ya malipo, mabadiliko ya bei au kufuta", "Automation inaandaa; wewe unabonyeza kutuma"] },
            { title: "Ichore kwanza", bullets: ["Visanduku na mishale kwenye karatasi", "Jina la zana kwa kila kisanduku", "Hakikisha kila zana inaungana"] }
          ],
          tryIt: "Chora mtiririko wa kazi yako kutoka Somo la 2: kichocheo, vitendo, na hatua ya idhini. Andika jina la zana katika kila kisanduku.",
          youCanNow: "kusanifu mtiririko wenye kichocheo, vitendo na hatua ya idhini ya mtu.",
          quickCheck: [
            { objective: "O3", q: "Katika mtiririko, \"vitendo\" ni nini?", options: ["Kinachotokea baada ya kichocheo", "Tukio linaloanzisha", "Nywila yako", "Bei ya zana"], answer: 0, why: "Kichocheo kinaanzisha automation; vitendo ni kinachofuata." },
            { objective: "O3", q: "Katika usanifu wako, hatua ya AI inawatumia wateja barua pepe moja kwa moja. Ubadilishe nini?", options: ["Hakuna; inaokoa muda", "Rasimu ikufikie wewe uiidhinishe kabla haijaenda kwa mteja", "Ondoa kichocheo", "Ongeza hatua ya pili ya AI ikague ya kwanza"], answer: 1, why: "Idhini ya mtu inakuja kabla ya kitu chochote kutoka nje ya biashara." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuelewa na kusanifu automation",
        questions: [
          { objective: "O1", q: "Kipi kinaeleza vizuri zaidi automation ya kudumu?", options: ["Inachagua malengo yake yenyewe", "Inafuata kanuni unazoweka na inafanya kitu kile kile kila mara", "Ni mtu", "Haifanyi kazi kamwe"], answer: 1, why: "Automation zinafuata kanuni za kudumu." },
          { objective: "O1", q: "Kipi kinatabirika zaidi?", options: ["Hakuna kinachofanya kazi kamwe", "Wakala wa AI", "Ni sawa kila mara", "Automation ya kudumu"], answer: 3, why: "Mawakala wanachagua hatua na hawatabiriki sana." },
          { objective: "O2", q: "Katika ramani ya hatua, \"tuma makadirio ya bei\" inawekewa alama:", options: ["Pesa au kutuma: inahitaji idhini", "Kanuni: iendeshe kiotomatiki kabisa", "Puuza", "Futa"], answer: 0, why: "Chochote kinachotumwa kwa mteja kinahitaji idhini ya mtu." },
          { objective: "O3", q: "Kichocheo ni nini?", options: ["Nywila", "Hatua ya mwisho", "Tukio linaloanzisha automation", "Bei"], answer: 2, why: "Vichocheo vinaanzisha mitiririko." },
          { objective: "O3", q: "Hatua ya idhini inawekwa wapi?", options: ["Hakuna mahali popote", "Baada ya mteja kuipata", "Kabla ya kitu chochote kutoka nje ya biashara", "Mwisho wa mwaka tu"], answer: 2, why: "Idhinisha kabla ya kutuma, kulipa au kufuta." }
        ]
      }
    },
    {
      name: "Sura 2: Kujenga, kujaribu na kuiendesha kwa usalama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuijenga kwa zana isiyohitaji code",
          minutes: 6,
          goal: "Jenga mtiririko wako katika zana ya automation isiyohitaji code.",
          text: [
            "Zana zisizohitaji code (no-code) zinakuwezesha kujenga automation kwa kuchagua kutoka menyu badala ya kuandika code. Zinazojulikana ni Zapier, Make na Microsoft Power Automate. Baadhi ya apps unazotumia tayari, kama zana yako ya fomu, ya kuweka miadi au ya barua pepe, zina automation rahisi ndani yake. Kagua tovuti ya kila zana kuona mpango wake wa bure na mipaka yake.",
            "Mpangilio ni ule ule kila mahali: tengeneza automation mpya, chagua app na tukio la kichocheo, ingia ili kuunganisha akaunti yako, kisha ongeza kila kitendo na upange sehemu za taarifa (kwa mfano, \"Jina\" la fomu linaingia kwenye safu ya \"Jina\" ya jedwali).",
            "Kwa hatua ya AI, zana nyingi zina kitendo kinachotuma maandishi kwa modeli ya AI na kurudisha rasimu. Iambie hasa cha kuandika na uipe tu sehemu inazohitaji. Rasimu ikufikie wewe, si mteja moja kwa moja."
          ],
          steps: ["Tengeneza automation mpya katika zana uliyochagua.", "Chagua app na tukio la kichocheo; unganisha akaunti yako.", "Ongeza kila kitendo na upange sehemu za taarifa.", "Ongeza hatua ya rasimu ya AI yenye maelekezo wazi na sehemu zinazohitajika tu.", "Rasimu ikufikie wewe uiidhinishe."],
          words: [["No-code", "kujenga programu kwa kuchagua machaguo badala ya kuandika code."], ["Kupanga sehemu (field mapping)", "kuiambia zana kila kipande cha taarifa kinaenda wapi."], ["Kuunganisha akaunti", "kuiruhusu zana ya automation itumie mojawapo ya apps zako, baada ya wewe kuingia."]],
          slides: [
            { title: "Zana zisizohitaji code", bullets: ["Zapier, Make, Microsoft Power Automate", "Automation zilizomo ndani ya apps unazotumia", "Kagua kila tovuti kuona mipaka ya mpango wa bure"] },
            { title: "Mpangilio ule ule", bullets: ["Chagua app na tukio la kichocheo", "Unganisha akaunti yako", "Ongeza vitendo na upange sehemu za taarifa"] },
            { title: "Hatua ya AI", bullets: ["Maelekezo yaliyo wazi", "Sehemu inazohitaji tu", "Rasimu inakufikia wewe, si mteja"] }
          ],
          tryIt: "Jenga mtiririko wako kwenye mpango wa bure wa zana isiyohitaji code (au kwenye karatasi kama bado huwezi kujisajili): kichocheo, upangaji wa sehemu kwa kila kitendo, na rasimu ya AI inayokufikia wewe.",
          youCanNow: "kujenga mtiririko wa kichocheo na vitendo katika zana ya automation isiyohitaji code.",
          quickCheck: [
            { objective: "O4", q: "Zana isiyohitaji code inakuwezesha kufanya nini?", options: ["Kuandika code haraka zaidi", "Kupata orodha za wateja bure", "Kujenga automation kwa kuchagua kutoka menyu", "Kutoingia kwenye apps zako"], answer: 2, why: "Zana zisizohitaji code zinakuwezesha kujenga automation kutoka menyu badala ya kuandika code." },
            { objective: "O4", q: "Fomu ina sehemu 12 lakini AI inahitaji jina na aina ya kazi tu ili kuandika rasimu ya jibu. Uitumie nini?", options: ["Sehemu zote 12 ili kuwa salama", "Pia namba ya kadi ya mteja", "Hakuna kitu", "Jina na aina ya kazi tu"], answer: 3, why: "Ipe hatua ya AI sehemu inazohitaji tu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujaribu kwa data ya mfano na kurekebisha kinachoharibika",
          minutes: 5,
          goal: "Jaribu automation kwa maingizo ya mfano na urekebishe makosa kabla ya kuianzisha kwa kweli.",
          text: [
            "Kamwe usijaribu kwa wateja halisi. Tengeneza maingizo matatu ya mfano yenye majina ya kubuni kama \"Test Customer\" na barua pepe ya majaribio unayoimiliki. Weka ingizo moja la kawaida, moja lenye sehemu tupu, na moja lenye maandishi ya ajabu (marefu sana, lugha nyingine, emoji).",
            "Endesha kila moja na ukague kila hatua: je, mstari uliingia kwenye safu sahihi? Je, rasimu ya AI ilikuwa na maana na ilibaki kwenye mada? Je, ombi la idhini lilikufikia? Je, kuna kitu kilichotumwa ambacho hakikupaswa kutumwa?",
            "Rekebisha kitu kimoja kwa wakati na ujaribu tena. Matatizo ya kawaida: upangaji mbaya wa sehemu, hatua inayoshindwa sehemu ikiwa tupu, rasimu ya AI inayobuni bei. Rekebisha maelekezo (\"Tumia tu kiwango cha bei kilicho kwenye sehemu hii; usibuni bei\") na ujaribu tena."
          ],
          steps: ["Tengeneza maingizo matatu ya mfano: la kawaida, lenye sehemu tupu, lenye maandishi ya ajabu.", "Endesha kila moja kupitia automation.", "Kagua matokeo ya kila hatua.", "Rekebisha tatizo moja kwa wakati na ujaribu tena.", "Ianzishe kwa kweli tu yote matatu yakifaulu."],
          words: [["Data ya mfano", "taarifa za kubuni zinazotumika kwa majaribio."], ["Hali isiyo ya kawaida (edge case)", "ingizo lisilo la kawaida linaloweza kuharibu mchakato, kama sehemu tupu."], ["Kuianzisha kwa kweli (go live)", "kuiwasha automation kwa matumizi halisi."]],
          slides: [
            { title: "Jaribu kwa data ya kubuni", bullets: ["\"Test Customer\" na barua pepe yako ya majaribio", "La kawaida, lenye sehemu tupu, lenye maandishi ya ajabu"] },
            { title: "Kagua kila hatua", bullets: ["Safu sahihi?", "Rasimu ya AI ina maana na iko kwenye mada?", "Ombi la idhini lilikufikia? Hakuna kilichotumwa kwa kosa?"] },
            { title: "Rekebisha na ujaribu tena", bullets: ["Rekebisho moja kwa wakati", "Iambie hatua ya AI isibuni bei", "Ianzishe kwa kweli yote matatu yakifaulu"] }
          ],
          tryIt: "Endesha maingizo matatu ya mfano kupitia automation yako (au yapitishe kwenye usanifu wako wa karatasi). Andika kilichotokea katika kila hatua na rekebisho moja.",
          youCanNow: "kujaribu automation kwa usalama na kurekebisha matatizo kabla haijawagusa wateja halisi.",
          quickCheck: [
            { objective: "O5", q: "Kipi ni mfano wa ingizo la mfano lenye maandishi ya ajabu?", options: ["Ujumbe mrefu sana wenye emoji", "Ombi la kawaida", "Fomu tupu", "Ombi la mteja halisi"], answer: 0, why: "Ingizo lenye maandishi ya ajabu lina maandishi marefu sana, lugha nyingine au emoji." },
            { objective: "O5", q: "Jaribio linashindwa sehemu ya namba ya simu ikiwa tupu. Ufanye nini?", options: ["Ianzishe kwa kweli hata hivyo", "Rekebisha hatua hiyo moja na ujaribu tena", "Badilisha vitu vitano kwa mara moja", "Jaribu kwa wateja halisi tu"], answer: 1, why: "Rekebisha kitu kimoja kwa wakati na ujaribu tena." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuiendesha kwa usalama: kumbukumbu, ufuatiliaji na swichi ya kuzima",
          minutes: 5,
          goal: "Weka kumbukumbu, ukaguzi wa kila wiki na njia ya kuzima automation.",
          text: [
            "Ikishaanza kazi, endelea kuifuatilia. Zana nyingi zinaonyesha historia ya kila mara ilipoendeshwa; ikague kila wiki kuona makosa. Unaweza pia kuongeza mstari wa kumbukumbu kwenye jedwali: tarehe, kilichoianzisha, ilichofanya, na nani aliidhinisha.",
            "Andika maelezo ya ukurasa mmoja: automation inafanya nini, kichocheo na vitendo vyake, inatumia akaunti zipi, nani anaidhinisha, na jinsi ya kuizima. Yahifadhi mahali ambapo mwanafamilia au mfanyakazi anaweza kuyapata.",
            "Linda ruhusa: tumia kuingia kwa hatua mbili kwenye zana ya automation na akaunti zilizounganishwa, ipe ruhusa ya kile tu inachohitaji, usiweke namba za kadi za wateja wala nywila katika hatua za AI, na ondoa ruhusa mfanyakazi anapoondoka."
          ],
          steps: ["Kagua historia ya uendeshaji kila wiki.", "Ongeza mstari wa kumbukumbu kwa kila uendeshaji.", "Andika maelezo ya ukurasa mmoja yenye swichi ya kuzima.", "Washa kuingia kwa hatua mbili na upunguze ruhusa.", "Kila mwezi, kagua kama bado inaokoa muda."],
          words: [["Historia ya uendeshaji (run history)", "orodha ambayo zana inaiweka ya kila mara automation ilipoendeshwa."], ["Kumbukumbu (log)", "rekodi ya kilichotokea na lini."], ["Swichi ya kuzima", "njia ya kuzima automation haraka."]],
          slides: [
            { title: "Endelea kufuatilia", bullets: ["Kagua historia ya uendeshaji kila wiki", "Kumbukumbu: tarehe, kichocheo, kitendo, aliyeidhinisha"] },
            { title: "Maelezo ya ukurasa mmoja", bullets: ["Inafanya nini na inatumia akaunti zipi", "Nani anaidhinisha", "Jinsi ya kuizima"] },
            { title: "Linda ruhusa", bullets: ["Kuingia kwa hatua mbili", "Ruhusa ndogo zaidi inayohitajika", "Hakuna namba za kadi wala nywila katika hatua za AI"] }
          ],
          tryIt: "Kazi ya mwisho: maliza automation yako: ramani ya hatua, mtiririko wenye idhini, majaribio matatu yaliyofaulu, kumbukumbu na ukaguzi wa kila wiki, na maelezo ya ukurasa mmoja yenye swichi ya kuzima.",
          youCanNow: "kuendesha automation ya biashara kwa usalama ukiwa na idhini, majaribio, kumbukumbu na swichi ya kuzima.",
          quickCheck: [
            { objective: "O6", q: "Ni nini kinaingia kwenye mstari wa kumbukumbu katika somo hili?", options: ["Namba za kadi za wateja", "Nywila yako", "Tarehe, kichocheo, ilichofanya na nani aliidhinisha", "Neno \"imekamilika\" tu"], answer: 2, why: "Mstari wa kumbukumbu unarekodi tarehe, kichocheo, ilichofanya na nani aliidhinisha." },
            { objective: "O6", q: "Mfanyakazi aliyekuwa akisaidia kuidhinisha rasimu anaondoka kwenye biashara. Ufanye nini?", options: ["Hakuna kitu", "Mpe mtu mpya nywila yako", "Zima kuingia kwa hatua mbili", "Ondoa ruhusa yake kwenye automation na akaunti zilizounganishwa"], answer: 3, why: "Ondoa ruhusa mfanyakazi anapoondoka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujenga, kujaribu na kuiendesha kwa usalama",
        questions: [
          { objective: "O4", q: "Ipi ni zana ya automation isiyohitaji code?", options: ["Zapier", "Stapla", "Droo ya pesa", "Faksi"], answer: 0, why: "Zapier inajenga automation bila code." },
          { objective: "O4", q: "Kupanga sehemu (field mapping) ni nini?", options: ["Kuchapisha ramani", "Kuchora shamba", "Kuchagua nywila", "Kuiambia zana kila taarifa inaenda wapi"], answer: 3, why: "Kunalinganisha sehemu za fomu na safu za jedwali." },
          { objective: "O5", q: "Unapaswa kujaribu kwa data gani?", options: ["Taarifa za wateja halisi", "Maingizo ya mfano ya kubuni", "Namba za kadi", "Taarifa zako za kuingia benki"], answer: 1, why: "Kamwe usijaribu kwa wateja halisi." },
          { objective: "O5", q: "Rasimu ya AI inabuni bei. Urekebishe nini?", options: ["Maelekezo ya hatua ya AI, kisha ujaribu tena", "Hakuna kitu", "Ituma hata hivyo", "Futa biashara"], answer: 0, why: "Maelekezo yaliyo wazi yanapunguza ukweli wa kubuni." },
          { objective: "O6", q: "Kwa nini uandike maelezo ya ukurasa mmoja yenye swichi ya kuzima?", options: ["Kwa mapambo", "Kuifanya iwe ndefu zaidi", "Ili mtu mwingine aweze kuielewa au kuisimamisha", "Haina faida"], answer: 2, why: "Mtu yeyote anapaswa kuweza kuizima haraka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mawakala wa AI kwa Kujiendesha kwa Kazi za Biashara",
    questions: [
      { objective: "O1", q: "Wakala wa AI ni:", options: ["Mtu", "Mfumo wa AI unaoweza kuchagua baadhi ya hatua zake wenyewe", "Kanuni ya kudumu", "Printa"], answer: 1, why: "Mawakala wanachagua hatua kuelekea lengo." },
      { objective: "O1", q: "Biashara ndogo inapaswa kuanzia wapi?", options: ["Kuendesha kila kitu kiotomatiki kwa mara moja", "Wakala anayejitegemea kabisa mwenye ruhusa ya benki", "Hakuna kitu", "Automation za kudumu, kisha hatua moja ya AI"], answer: 3, why: "Rahisi na inayotabirika kwanza." },
      { objective: "O1", q: "Kipi kinapaswa kubaki kwa mtu kila mara?", options: ["Kupanga muonekano wa mstari", "Kunakili fomu kwenye jedwali", "Kuongeza kikumbusho kwenye kalenda", "Kutumia pesa"], answer: 3, why: "Maamuzi ya pesa yanahitaji mtu." },
      { objective: "O2", q: "Hatua ya kwanza kabla ya automation ni:", options: ["Kununua zana", "Kuandika ramani ya hatua ya kazi", "Kuiwasha", "Kuajiri mtu"], answer: 1, why: "Huwezi kuendesha kiotomatiki kitu ambacho hujakiandika." },
      { objective: "O2", q: "Hatua ya \"Kanuni\" ni ile ambayo:", options: ["Inahusu pesa", "Ni uamuzi mkubwa", "Ni ile ile kila mara", "Haiko wazi"], answer: 2, why: "Hatua za Kanuni zinaweza kuendeshwa kiotomatiki." },
      { objective: "O2", q: "Hatua ya \"Maneno\" inaweza kupata:", options: ["Rasimu ya AI", "Malipo", "Kufutwa", "Hakuna kitu"], answer: 0, why: "AI inasaidia kuandika." },
      { objective: "O3", q: "\"Fomu mpya imetumwa\" ni mfano wa:", options: ["Kumbukumbu", "Kitendo", "Kichocheo", "Nywila"], answer: 2, why: "Inaanzisha mtiririko." },
      { objective: "O3", q: "\"Ongeza mstari kwenye jedwali\" ni mfano wa:", options: ["Kitendo", "Kichocheo", "Idhini", "Swichi ya kuzima"], answer: 0, why: "Vitendo vinafuata kichocheo." },
      { objective: "O3", q: "Katika mtiririko salama, AI inaandika rasimu za majibu kwa wateja na kisha:", options: ["Inazituma moja kwa moja kwa wateja", "Inakutumia wewe uziidhinishe", "Inazifuta", "Inazichapisha hadharani"], answer: 1, why: "Wewe ndiye unabonyeza kutuma." },
      { objective: "O3", q: "Kwa nini uchore mtiririko kwenye karatasi kwanza?", options: ["Haina faida", "Inatakiwa na sheria", "Kwa kujifurahisha tu", "Kuona kila hatua na zana kabla ya kujenga"], answer: 3, why: "Kupanga kunazuia makosa." },
      { objective: "O4", q: "Unapounganisha akaunti na zana ya automation, unakuwa:", options: ["Unairuhusu zana itumie app hiyo baada ya wewe kuingia", "Unafuta app", "Unaishiriki hadharani", "Unalipa faini"], answer: 0, why: "Kuunganisha kunaipa zana ruhusa." },
      { objective: "O4", q: "Hatua ya AI inapaswa kupokea nini?", options: ["Nywila", "Data zote za wateja", "Namba za kadi", "Sehemu inazohitaji tu"], answer: 3, why: "Data ndogo zaidi inayohitajika." },
      { objective: "O4", q: "Unakagua wapi mipaka ya mpango wa bure wa zana?", options: ["Video ya zamani", "Kwa kukisia", "Tovuti rasmi ya zana", "Kwa mshindani"], answer: 2, why: "Mipango inabadilika." },
      { objective: "O5", q: "Hali isiyo ya kawaida (edge case) ni:", options: ["Kona ya meza", "Ingizo lisilo la kawaida linaloweza kuharibu mchakato", "Ingizo la kawaida", "Nywila"], answer: 1, why: "Jaribu pia maingizo ya ajabu." },
      { objective: "O5", q: "Katika kozi hii, maingizo mangapi ya mfano yanapaswa kufaulu kabla ya kuianzisha kwa kweli?", options: ["Elfu moja", "Sifuri", "Mteja mmoja halisi", "Matatu: la kawaida, lenye sehemu tupu, lenye maandishi ya ajabu"], answer: 3, why: "Yanashughulikia matatizo ya kawaida." },
      { objective: "O5", q: "Rekebisha matatizo kwa:", options: ["Kuyapuuza", "Kubadilisha kila kitu kwa mara moja", "Kubadilisha kitu kimoja kwa wakati na kujaribu tena", "Kuianzisha kwa kweli hata hivyo"], answer: 2, why: "Rekebisho moja kwa wakati linaonyesha kilichofanya kazi." },
      { objective: "O6", q: "Historia ya uendeshaji inaonyesha:", options: ["Kila mara automation ilipoendeshwa", "Historia ya kivinjari chako", "Nywila za wateja", "Ripoti za kodi"], answer: 0, why: "Inakusaidia kugundua makosa." },
      { objective: "O6", q: "Unapaswa kukagua automation inayofanya kazi mara ngapi?", options: ["Kamwe", "Angalau kila wiki", "Mara moja kila baada ya miaka kadhaa", "Wateja wakilalamika tu"], answer: 1, why: "Ukaguzi wa mara kwa mara unagundua matatizo mapema." },
      { objective: "O6", q: "Kuingia kwa hatua mbili kwenye akaunti za automation:", options: ["Hakupunguzi kasi ya kitu chochote cha maana", "Kunazifanya kuwa ngumu zaidi kuvunjwa", "Hakuruhusiwi", "Kunashiriki nywila yako"], answer: 1, why: "Kunaongeza ukaguzi wa pili." },
      { objective: "O6", q: "Kila mwezi unapaswa kujiuliza kama automation:", options: ["Bado inaokoa muda", "Ina jina zuri", "Inatumia apps zaidi", "Inapendwa na watu"], answer: 0, why: "Kama haisaidii tena, ibadilishe au isimamishe." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 6, 8, 11, 14, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ramani ya hatua", objective: "O2", notYet: "Hatua zinakosekana au hazina alama.", meets: "Kila hatua ya kazi imeorodheshwa na ina alama ya Kanuni, Maneno, Uamuzi au Pesa au kutuma.", exceeds: "Ameandika kila hatua inachukua muda gani leo." },
      { name: "Usanifu wa mtiririko", objective: "O3", notYet: "Hakuna hatua ya idhini, au kitu kinatumwa au kulipwa bila mtu.", meets: "Kichocheo, vitendo na idhini ya mtu kabla ya kitu chochote kutoka nje ya biashara.", exceeds: "Kila kisanduku kina jina la zana yake na miunganisho imekaguliwa." },
      { name: "Imejengwa na inafanya kazi", objective: "O4", notYet: "Automation haiendeshwi au sehemu za taarifa zinaingia mahali pasipo sahihi.", meets: "Inaendeshwa kutoka kwa kichocheo, inapanga sehemu kwa usahihi, na inakutumia rasimu ya AI.", exceeds: "Hatua ya AI inapata tu sehemu inazohitaji na ina maelekezo yaliyo wazi." },
      { name: "Imejaribiwa na kurekebishwa", objective: "O5", notYet: "Ilijaribiwa kwa data halisi ya wateja au kwa maingizo chini ya matatu.", meets: "Maingizo ya mfano ya kawaida, yenye sehemu tupu na yenye maandishi ya ajabu yote yanafaulu baada ya marekebisho.", exceeds: "Ameorodhesha kila tatizo lililopatikana na badiliko moja lililolirekebisha." },
      { name: "Uendeshaji salama", objective: "O6", notYet: "Hakuna kumbukumbu, ukaguzi wa kila wiki wala njia ya kuizima.", meets: "Kumbukumbu, ukaguzi wa kila wiki na maelezo ya ukurasa mmoja yenye swichi ya kuzima.", exceeds: "Kuingia kwa hatua mbili kumewashwa na ruhusa imepunguzwa kwa kile tu inachohitaji." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kipimo cha tathmini)",
      "Wamiliki ambao automation yao bado inafanya kazi kwa usalama siku 30 baadaye (utafiti wa ufuatiliaji)",
      "Saa kwa wiki ambazo wamiliki wanaripoti kuokoa kwenye kazi iliyoendeshwa kiotomatiki",
      "Wanafunzi wanaoanza kozi nyingine ya biashara ndogo ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Akaunti ya bure kwenye zana ya automation isiyohitaji code, zana ya fomu na jedwali kama Google Sheets au Excel",
      "Karatasi na kalamu kwa ramani ya hatua na mchoro wa mtiririko",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kujenga na kujaribu"
    ],
    facilitatorNotes: [
      "Muombe kila mwanafunzi achague kazi moja ndogo halisi inayojirudia kabla ya kipindi; ndogo ni bora kwa automation ya kwanza.",
      "Tumieni maingizo ya mfano ya kubuni tu na barua pepe ya majaribio anayoimiliki mwanafunzi; kamwe si data halisi ya wateja.",
      "Kabla wanafunzi hawajaanza kujenga, hakikisha kila usanifu una idhini ya mtu kabla ya kitu chochote kutumwa au kulipwa.",
      "Wasaidie wanafunzi kuwasha kuingia kwa hatua mbili kwenye zana ya automation na akaunti zilizounganishwa.",
      "Pima kazi ya mwisho kwa kipimo cha tathmini, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
