"use strict";

// Koach Learn course (Swahili translation of shared/retail-sales-cashier.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "retail-sales-cashier-sw",
  lang: "sw",
  translationOf: "retail-sales-cashier",
  category: "Workforce Development",
  name: "Ujuzi wa Mauzo Dukani na Kazi ya Keshia",
  skills: "Kusajili mauzo, Kuhesabu chenji kwa sauti, Kukagua vitambulisho na noti kubwa, Kupendekeza bidhaa bila shinikizo, Kushughulikia marejesho na wateja waliokasirika, Kuendesha zamu",
  outcome: "kufanya kazi kwenye rejista ya duka tangu kufungua hadi kufunga: kusajili mauzo, kuhesabu chenji kamili kwa sauti, kukagua kitambulisho na noti kubwa kabla ya mauzo, kupendekeza bidhaa yenye manufaa, kushughulikia marejesho au mteja aliyekasirika kwa sera ya duka, na kufuata orodha ya hatua za zamu.",
  about: [
    "Kazi za keshia na za mauzo dukani ni kati ya kazi za kwanza zinazojulikana zaidi nchini Marekani (US), na maduka huajiri watu wasio na uzoefu. Pia ni hatua nzuri ya kwanza kwa watu wanaorudi kazini baada ya kuwa mbali kwa muda. Kozi hii inakuandaa kwa siku ya kwanza.",
    "Utafanya mazoezi ya malipo tangu salamu hadi risiti, utahesabu chenji kwa sauti kama makeshia waliofunzwa wanavyofanya, utakagua vitambulisho kwa bidhaa zenye kikomo cha umri, utatambua noti bandia na ulaghai wa kadi za zawadi, utapendekeza bidhaa bila kulazimisha, na utashughulikia marejesho na wateja waliokasirika kwa kufuata kanuni.",
    "Kila duka lina rejista yake na sera zake, na duka litakufundisha hizo. Kozi hii inakupa ujuzi unaofaa katika duka lolote, ili ujifunze haraka na ufanye makosa machache. Pia inakuonyesha cheti halisi cha kazi za maduka unachoweza kupata.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" unayoweza kufanya nyumbani kwa sarafu, pesa za karatasi za mchezo wa ubao, au vipande vya karatasi. Kuna maswali mawili mafupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza Kadi yako ya Zamu ya Keshia ya ukurasa mmoja: (1) hatua za kufungua droo yako, (2) maneno yako ya malipo tangu salamu hadi risiti, pamoja na mstari mmoja wa pendekezo, (3) rekodi ya mauzo matano ya mazoezi ambapo ulihesabu chenji kamili kwa sauti, (4) hatua zako kwa mauzo yenye kikomo cha umri na kwa noti kubwa, (5) nyakati tatu utakazomwita meneja, (6) hatua za kufunga, na (7) mstari mmoja unaotaja cheti cha kazi za maduka au kazi utakayoitafuta na tarehe utakayoanza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wanaotafuta kazi yao ya kwanza, watu wazima wanaorudi nyumbani kutoka gerezani, na watu wazima wanaobadilisha kazi au wanaorudi kazini. Wengi hawajawahi kufanya kazi kwenye rejista; baadhi wamenunua kwa kujilipia wenyewe (self-checkout) lakini hawajawahi kusimama nyuma ya kaunta.",
    startingPoint: "Wanaweza kujumlisha na kutoa pesa kwa msaada kidogo, na wanajua sarafu na noti. Wana uzoefu mdogo au hawana kabisa wa rejista ya mauzo (POS), droo ya pesa, ukaguzi wa vitambulisho, sera za duka au kuuza.",
    gap: "Maduka huajiri kwa tabia na hufundisha kazini, lakini makeshia wapya wanaochelewa kutoa chenji, wasio na uhakika kuhusu ukaguzi wa vitambulisho au wanaoogopa wateja waliokasirika ndio wanaopungukiwa pesa kwenye droo au wanaopoteza kazi mapema. Wanafunzi wanahitaji tabia za msingi kabla ya zamu ya kwanza ili wafaulu usaili wa kuajiriwa, wamalize mafunzo haraka na wadumu kazini.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 7)",
      "Vifaa: simu au kompyuta ya maktaba; mazoezi yanatumia sarafu, pesa za mchezo au vipande vya karatasi, hakuna haja ya rejista",
      "Muda: masomo ya dakika 4 hadi 6",
      "Kila duka lina rejista, sera na kanuni zake; wanafunzi wanafuata mafunzo ya duka lao",
      "Kanuni za mauzo yenye kikomo cha umri zinatofautiana kwa kila jimbo; katika baadhi ya majimbo vijana huenda wasiruhusiwe kuuza pombe au tumbaku",
      "Usalama: usimkimbize mwizi wa dukani na usipinge wizi wa kutumia nguvu; fuata sera ya duka na piga 911"
    ],
    prerequisites: "Hakuna. Wanafunzi wanaotaka mazoezi zaidi ya asilimia na pesa wanaweza kuchukua kozi \"Hesabu za Kila Siku kwa Kazi na Maisha\"; kozi \"Ubora katika Huduma kwa Wateja\" inaenda ndani zaidi kuhusu huduma."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mauzo ya mazoezi yenye bidhaa kadhaa, kuponi na malipo", action: "kusajili malipo tangu salamu hadi risiti kwa mpangilio sahihi", standard: "kwa jumla sahihi na shukrani kila mara" },
    { id: "O2", condition: "Ukipewa jumla na pesa taslimu ambazo mteja anakupa", action: "kuhesabu chenji kwa sauti kwa mteja kwa njia ya kuhesabu kwenda juu", standard: "kwa chenji kamili katika mauzo 5 kati ya 5 ya mazoezi" },
    { id: "O3", condition: "Ukipewa bidhaa yenye kikomo cha umri, noti kubwa au mteja anayenunua kadi nyingi za zawadi", action: "kukagua kitambulisho, noti au dalili za hatari kabla ya kumaliza mauzo", standard: "kwa kufuata sheria na sera ya duka, na kumwita meneja kitu kikiwa si sawa" },
    { id: "O4", condition: "Ukipewa mteja anayetafuta kitu", action: "kuuliza swali moja la wazi na kupendekeza bidhaa moja inayohusiana pamoja na manufaa yake", standard: "bila shinikizo, na kukubali \"hapana\" kwa adabu" },
    { id: "O5", condition: "Ukipewa marejesho, tatizo la bei au mteja aliyekasirika", action: "kushughulikia tatizo kwa sera ya duka na kumwita meneja linapozidi nafasi yako", standard: "ukibaki mtulivu na kujilinda wewe na wengine" },
    { id: "O6", condition: "Ukitumia ulichojifunza katika kozi hii", action: "kuandika orodha ya ukurasa mmoja ya hatua za kufungua, kuendesha na kufunga rejista", standard: "kwa kila hatua kwa mpangilio na hatua yako inayofuata ya kazi ikiwa na tarehe" }
  ],
  chapters: [
    {
      name: "Sura 1: Rejista na pesa",
      lessons: [
        {
          title: "Malipo tangu salamu hadi risiti",
          objectives: ["O1"],
          minutes: 5,
          goal: "Sajili mauzo ya mazoezi kwa mpangilio sahihi, tangu salamu hadi risiti.",
          text: [
            "Makeshia hupitisha bidhaa kwenye skana, hupokea malipo, hutoa chenji na risiti, hufunga bidhaa kwenye mifuko, hushughulikia marejesho na hujibu maswali. Kwa mujibu wa Ofisi ya Takwimu za Kazi ya Marekani (BLS), mafunzo kwa kawaida hufanyika kazini na huchukua hadi wiki chache. Hakuna diploma wala leseni inayohitajika, ingawa maduka mengi hupendelea diploma ya sekondari au GED (cheti cha Marekani kinacholingana na diploma ya sekondari).",
            "Kila rejista ni tofauti, lakini kila malipo yanafuata mpangilio uleule: msalimie mteja, pitisha kila bidhaa kwenye skana na uangalie bei kwenye skrini, weka kuponi au punguzo, mwambie mteja jumla, pokea malipo, toa chenji na risiti, na umshukuru.",
            "Angalia skrini unapopitisha bidhaa. Bidhaa ikisajiliwa mara mbili, au bei si ile iliyo kwenye lebo ya rafu, simama na urekebishe kabla ya kupokea malipo. Mkufunzi wako atakuonyesha jinsi ya kuondoa bidhaa (void) na jinsi ya kuomba ukaguzi wa bei kwenye rejista yako.",
            "Wateja hulipa kwa pesa taslimu, kadi (kugusisha, kuingiza au kupitisha), pochi za simu, kadi za zawadi au kadi za mafao. Mwache mteja ashike kadi yake na PIN yake mwenyewe. Usiombe PIN kwa sauti kamwe, na usibaki na kadi ya mteja kamwe."
          ],
          steps: [
            "Msalimie mteja na umtazame machoni: \"Habari, umepata kila kitu ulichotaka?\"",
            "Pitisha kila bidhaa kwenye skana na uangalie skrini kwa jina na bei sahihi.",
            "Uliza kuhusu kuponi au namba ya zawadi za duka kabla ya kupiga jumla.",
            "Sema jumla kwa sauti: \"Jumla yako ni $23.40.\"",
            "Pokea malipo na ufuate maelekezo ya rejista.",
            "Toa chenji na risiti, na umshukuru mteja."
          ],
          words: [
            ["POS (point of sale, mahali pa mauzo)", "mfumo wa rejista: skrini, skana, kisoma kadi na droo ya pesa."],
            ["Void (kuondoa)", "kuondoa bidhaa kwenye mauzo kabla haijalipiwa."],
            ["Ukaguzi wa bei", "kumwomba mfanyakazi mwenzako au mfumo bei sahihi ya bidhaa."],
            ["Risiti", "kumbukumbu iliyochapishwa au kutumwa kwa barua pepe ya kile mteja alichonunua na kulipa."]
          ],
          slides: [
            { title: "Kazi za keshia", bullets: ["Kupitisha bidhaa, kupokea malipo, kutoa chenji na risiti", "Kufunga bidhaa kwenye mifuko na kushughulikia marejesho", "Mafunzo ni kazini, kwa kawaida wiki chache"] },
            { title: "Mpangilio uleule kila mauzo", bullets: ["Salamu, skana, kuponi, jumla", "Malipo, chenji na risiti", "Mshukuru mteja"] },
            { title: "Angalia skrini", bullets: ["Bidhaa imesajiliwa mara mbili? Rekebisha kabla ya malipo", "Bei tofauti na lebo ya rafu? Omba ukaguzi wa bei", "Mkufunzi wako atakuonyesha jinsi ya kuondoa bidhaa (void)"] },
            { title: "Malipo ya kadi", bullets: ["Mteja anashika kadi yake na PIN yake mwenyewe", "Usiombe PIN kwa sauti kamwe", "Usibaki na kadi ya mteja kamwe"] }
          ],
          sources: [{ name: "Ofisi ya Takwimu za Kazi ya Marekani (BLS): Makeshia (Occupational Outlook Handbook)", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }],
          tryIt: "Weka vitu vitano vya nyumbani mezani na uandike bei kwenye kipande cha karatasi kwa kila kimoja. Igiza keshia: msalimie mteja wa kubuni, \"pitisha\" kila kitu kwa kusoma bei yake kwa sauti na kuiandika, toa $2 kwa kuponi, sema jumla, na umshukuru mteja. Kagua jumla yako kwa kikokotoo.",
          youCanNow: "kusajili mauzo kwa mpangilio sahihi, kugundua kosa la skana kabla ya malipo na kupokea malipo ya kadi kwa usalama.",
          quickCheck: [
            { objective: "O1", q: "Ni nini kinakuja moja kwa moja kabla ya kumwambia mteja jumla?", options: ["Kuuliza kuhusu kuponi au namba ya zawadi", "Kutoa risiti", "Kuhesabu chenji kwa sauti", "Kuaga"], answer: 0, why: "Kuponi na zawadi lazima ziwekwe kabla ya jumla, la sivyo jumla itakuwa si sahihi." },
            { objective: "O1", q: "Shati limesajiliwa mara mbili kwenye skrini. Unafanya nini?", options: ["Mwache mteja aligundue kwenye risiti", "Mtoze kisha urekebishe wakati ujao", "Simama na uondoe bidhaa ya ziada kabla ya malipo", "Ondoa shati la pili kwenye rafu"], answer: 2, why: "Kurekebisha usajili wa mara mbili kabla ya malipo kunaweka jumla sahihi na kuepusha marejesho baadaye." }
          ]
        },
        {
          title: "Kuhesabu chenji kwa sauti na kuweka droo yako sawa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hesabu chenji kamili kwa sauti kwa kuhesabu kwenda juu kutoka jumla hadi kiasi kilicholipwa.",
          text: [
            "Hata rejista ikionyesha chenji, makeshia waliofunzwa huihesabu kwa sauti. Hii hugundua makosa na humwonyesha mteja kwamba chenji ni sahihi. Inaitwa njia ya kuhesabu kwenda juu: anza kwenye jumla na uhesabu kwenda juu hadi kiasi ambacho mteja alikupa.",
            "Mfano: jumla ni $13.47 na mteja anakupa $20. Sema \"$13.47\", kisha toa peni 3 (sarafu za senti 1) (\"$13.50\"), kwota 2 (sarafu za senti 25) (\"$14\"), dola moja (\"$15\") na noti ya dola tano (\"na $20\"). Hiyo ni chenji ya $6.53.",
            "Weka noti ya mteja juu ya droo, si ndani, hadi chenji ihesabiwe. Akisema \"Nilikupa noti ya hamsini\", nyote wawili mnaweza kuona ilikuwa ya ishirini.",
            "Droo yako (pia huitwa till) huanza kila zamu na kiasi maalum unachokihesabu pamoja na meneja. Mwishoni huhesabiwa tena. Pesa iliyozidi au iliyopungua (\"over/short\") hukaguliwa, kwa hiyo usimruhusu mtu mwingine kutumia droo yako kamwe na usichanganye pesa zako mwenyewe kamwe."
          ],
          steps: [
            "Sema jumla kwa sauti.",
            "Weka pesa za mteja juu ya droo, si ndani.",
            "Hesabu kwenda juu ukianza na sarafu ndogo zaidi, ukisema kila kiasi kipya.",
            "Kisha hesabu kwenda juu kwa noti hadi ufikie kiasi alichokupa.",
            "Weka pesa za mteja ndani ya droo na uifunge."
          ],
          words: [
            ["Njia ya kuhesabu kwenda juu", "kurudisha chenji kwa kuanza kwenye jumla na kuongeza sarafu na noti hadi ufikie kiasi kilicholipwa."],
            ["Droo (till)", "trei ya pesa kwenye rejista ambayo keshia mmoja anaiwajibikia."],
            ["Over/short (kuzidi/kupungua)", "tofauti kati ya kiasi ambacho droo inapaswa kuwa nacho na kilichomo kweli mwisho wa zamu."]
          ],
          slides: [
            { title: "Hesabu kwenda juu, kwa sauti", bullets: ["Anza kwenye jumla", "Ongeza sarafu, kisha noti", "Simama kwenye kiasi ambacho mteja alikupa"] },
            { title: "Mfano: $13.47 kutoka $20", bullets: ["Peni 3: $13.50", "Kwota 2: $14. Dola moja: $15", "Noti ya dola tano: $20. Chenji: $6.53"] },
            { title: "Jilinde", bullets: ["Weka noti yake juu ya droo hadi chenji imalizike", "Kisha iweke ndani", "Inamaliza swali lolote la \"Nilikupa noti ya hamsini\""] },
            { title: "Droo yako ni yako", bullets: ["Ihesabu pamoja na meneja mwanzoni na mwishoni", "Hakuna mtu mwingine anayetumia droo yako", "Usichanganye pesa zako mwenyewe kamwe"] }
          ],
          tryIt: "Tumia sarafu halisi au pesa za mchezo. Fanya mauzo haya matatu kwa sauti kwa njia ya kuhesabu kwenda juu: jumla $7.80 imelipwa kwa $10; jumla $4.35 imelipwa kwa $5; jumla $26.62 imelipwa kwa $30. Andika chenji ya kila moja, kisha kagua: $2.20, $0.65 na $3.38.",
          youCanNow: "kuhesabu chenji kamili kwa sauti kwa njia ya kuhesabu kwenda juu na kulinda droo yako dhidi ya makosa.",
          quickCheck: [
            { objective: "O2", q: "Jumla ni $7.80 na mteja analipa kwa $10. Unarudisha chenji gani?", options: ["$3.20", "$2.20", "$2.80", "$1.20"], answer: 1, why: "Daimu mbili (sarafu za senti 10) zinakufikisha $8.00 na dola mbili hadi $10.00, kwa hiyo chenji ni $2.20." },
            { objective: "O2", q: "Noti ya $20 ya mteja inapaswa kuwa wapi unapohesabu chenji yake?", options: ["Mfukoni mwako", "Chini ya droo", "Mkononi mwa mteja tena", "Juu ya droo, mahali ambapo nyote wawili mnaiona"], answer: 3, why: "Kuiweka mahali inapoonekana hadi chenji imalizike kunamaliza swali lolote kuhusu alicholipa nacho." }
          ]
        },
        {
          title: "Vitambulisho, noti kubwa na ulaghai kwenye rejista",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kagua kitambulisho, noti kubwa na dalili za ulaghai wa kadi za zawadi kabla ya kumaliza mauzo.",
          text: [
            "Baadhi ya bidhaa zina kikomo cha umri. Chini ya sheria ya shirikisho ya Marekani, hakuna mtu aliye chini ya miaka 21 anayeruhusiwa kununua tumbaku au vape, na FDA (mamlaka ya chakula na dawa ya Marekani) inasema ukague kitambulisho chenye picha cha mtu yeyote aliye chini ya miaka 30. Pombe pia ni miaka 21 kununua katika kila jimbo. Umri wa KUUZA pombe au tumbaku ukiwa keshia unawekwa na kila jimbo, na maduka mara nyingi huongeza kanuni zao. Duka lako litakuambia.",
            "Kukagua kitambulisho: tazama picha na uso, hakikisha muda wake haujaisha, na usome tarehe ya kuzaliwa. Njia ya haraka: kama leo ni 15 Machi 2027, mteja lazima awe alizaliwa tarehe 15 Machi 2006 au kabla ya hapo ili awe na miaka 21. Kama huna uhakika, au kitambulisho kinaonekana kimebadilishwa, usiuze na umwite meneja. Kumuuzia mtoto kunaweza kuleta faini kwako na kwa duka.",
            "Kwa noti kubwa, tumia ukaguzi wa uscurrency.gov (tovuti rasmi ya Marekani kuhusu pesa). Kwenye noti ya $100: iinamishe na kengele kwenye utepe wa bluu zinageuka kuwa 100, na 100 kwenye kona inabadilika kutoka rangi ya shaba kuwa kijani; ishike kwenye mwanga uone picha iliyofichwa (watermark) na uzi wa usalama; papasa maandishi yaliyoinuka na yanayokwaruza. Noti ikishindwa ukaguzi, usimshtumu mteja: mwite meneja. Maduka huripoti noti zinazoshukiwa kuwa bandia kwa US Secret Service (idara ya serikali ya Marekani).",
            "Ulaghai wa kadi za zawadi hutokea kwenye rejista. Walaghai huwaambia watu wanunue kadi za zawadi ili kulipa \"ada ya serikali\" au kumsaidia \"ndugu aliye matatizoni\". FTC (tume ya biashara ya Marekani) inasema hakuna biashara halisi wala ofisi ya serikali inayoomba kulipwa kwa kadi za zawadi. Mteja akinunua kadi nyingi wakati mtu kwenye simu anamwambia la kufanya, fuata sera ya duka lako, ambayo huenda ni kumwita meneja au kumweleza onyo hilo kwa upole."
          ],
          steps: [
            "Bidhaa yenye kikomo cha umri: omba kitambulisho chenye picha kama mteja anaonekana chini ya miaka 30.",
            "Linganisha picha, hakikisha muda wake haujaisha, na ukokotoe umri kutoka tarehe ya kuzaliwa.",
            "Noti kubwa: iinamishe, ishike kwenye mwanga na uipapase.",
            "Kadi za zawadi: angalia kadi nyingi, haraka au mpigaji simu anayetoa amri.",
            "Kitu chochote si sawa: usimalize mauzo; mwite meneja."
          ],
          words: [
            ["Bidhaa yenye kikomo cha umri", "bidhaa ambayo sheria inasema ni watu waliozidi umri fulani tu wanaoweza kuinunua, kama tumbaku au pombe."],
            ["Bandia (counterfeit)", "pesa za uongo zilizotengenezwa zionekane kama halisi."],
            ["Watermark", "picha hafifu ndani ya karatasi ya noti inayoonekana unapoishika kwenye mwanga."],
            ["Ulaghai wa kadi za zawadi", "hila ambapo mtu anamshinikiza mwingine amlipe kwa namba za kadi za zawadi."]
          ],
          slides: [
            { title: "Mauzo yenye kikomo cha umri", bullets: ["Tumbaku na vape: miaka 21 kununua (sheria ya shirikisho)", "FDA: kagua kitambulisho chenye picha cha yeyote aliye chini ya miaka 30", "Pombe: miaka 21 kununua; umri wa kuuza unawekwa na jimbo lako"] },
            { title: "Kukagua kitambulisho", bullets: ["Picha inalingana na uso", "Muda wake haujaisha", "Alizaliwa tarehe ya leo miaka 21 iliyopita au kabla", "Huna uhakika? Usiuze. Mwite meneja."] },
            { title: "Kukagua noti ya $100", bullets: ["Inamisha: kengele za utepe zinakuwa 100; 100 ya kona shaba kuwa kijani", "Mwanga: picha iliyofichwa (watermark) na uzi wa usalama", "Papasa: maandishi yaliyoinuka yanayokwaruza"] },
            { title: "Dalili za ulaghai wa kadi za zawadi", bullets: ["Kadi nyingi, haraka, mpigaji simu anayetoa amri", "Hakuna biashara halisi wala ofisi ya serikali inayopokea kadi za zawadi kama malipo", "Fuata sera ya duka; mwite meneja"] }
          ],
          sources: [
            { name: "FDA: Tobacco 21 (umri wa miaka 21 kwa tumbaku)", url: "https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21" },
            { name: "Mpango wa Elimu ya Pesa za Marekani: alama za usalama za noti ya $100", url: "https://www.uscurrency.gov/denominations/100" },
            { name: "Mpango wa Elimu ya Pesa za Marekani: Ripoti noti bandia", url: "https://www.uscurrency.gov/report-counterfeit" },
            { name: "FTC: Kuepuka na kuripoti ulaghai wa kadi za zawadi", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" }
          ],
          tryIt: "Chukua noti yoyote uliyo nayo (ya $1, $5, $10 au $20). Ishike kwenye mwanga, iinamishe na uipapase, na uandike kila alama ya usalama unayoweza kupata. Kisha tumia tarehe ya leo kuandika tarehe ya mwisho ya kuzaliwa ambayo ina umri wa kutosha kununua tumbaku.",
          youCanNow: "kukagua kitambulisho kabla ya mauzo yenye kikomo cha umri, kukagua noti kubwa na kutambua dalili za ulaghai wa kadi za zawadi.",
          quickCheck: [
            { objective: "O3", q: "Mteja anayeonekana kuwa na miaka kama 25 anataka kununua vape. Unafanya nini?", options: ["Muuzie kwa sababu anaonekana zaidi ya miaka 21", "Muulize umri wake na ukubali jibu lake", "Omba kitambulisho chenye picha na ukague tarehe ya kuzaliwa", "Kataa kumuuzia mtu yeyote vape"], answer: 2, why: "FDA inasema ukague kitambulisho chenye picha cha yeyote aliye chini ya miaka 30 anayenunua bidhaa za tumbaku." },
            { objective: "O3", q: "Namba ya kona ya noti ya $100 haibadiliki rangi unapoiinamisha. Unafanya nini?", options: ["Mwite meneja bila kumshtumu mteja", "Mwambie mteja kwamba ni mhalifu", "Ipokee tu; huenda iko sawa", "Ichane katikati"], answer: 0, why: "Ukaguzi ulioshindwa unapelekwa kwa meneja; duka ndilo hushughulikia na kuripoti noti zinazoshukiwa kuwa bandia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Rejista na pesa",
        questions: [
          { objective: "O1", q: "Mpangilio sahihi wa malipo ni upi?", options: ["Malipo, skana, salamu, risiti", "Skana, risiti, salamu, malipo", "Salamu, skana, jumla, malipo, chenji na risiti", "Jumla, salamu, skana, shukrani"], answer: 2, why: "Kila mauzo yanafuata salamu, skana, kuponi, jumla, malipo, chenji na risiti, shukrani." },
          { objective: "O1", q: "Mteja anataka kulipa kwa kadi. Sehemu yako ni ipi?", options: ["Mwache ashike kadi yake na PIN yake mwenyewe, na ufuate maelekezo ya rejista", "Mwombe aseme PIN yake ili uiandike", "Baki na kadi hadi mauzo yaishe", "Andika namba ya kadi kwenye risiti"], answer: 0, why: "Wateja hushika kadi zao na PIN zao wenyewe; makeshia hawaziombi wala kuzibakiza kamwe." },
          { objective: "O2", q: "Jumla ni $4.35 na mteja analipa kwa $5. Chenji ipi ni sahihi?", options: ["$1.35", "$0.75", "$0.55", "$0.65"], answer: 3, why: "Nikeli (senti 5) hadi $4.40, daimu (senti 10) hadi $4.50 na kwota mbili hadi $5.00 zinafanya $0.65." },
          { objective: "O3", q: "Leo ni 15 Machi 2027. Ili kununua pombe, mteja lazima awe alizaliwa tarehe hii au kabla yake:", options: ["15 Machi 2009", "15 Machi 2006", "15 Machi 2007", "1 Januari 2006"], answer: 1, why: "Miaka 21 kabla ya 15 Machi 2027 ni 15 Machi 2006." },
          { objective: "O3", q: "Mteja aliye kwenye simu ananunua kadi za zawadi za $500 na anasema mpigaji simu ni \"kutoka serikalini\". Huenda hili ni nini zaidi?", options: ["Zawadi ya kawaida", "Ofa ya duka", "Ulaghai wa kadi za zawadi", "Marejesho ya kodi"], answer: 2, why: "FTC inasema hakuna biashara halisi wala ofisi ya serikali inayoomba kulipwa kwa kadi za zawadi." }
        ]
      }
    },
    {
      name: "Sura 2: Kuuza, kuhudumia na kuendesha zamu",
      lessons: [
        {
          title: "Kuwasaidia wateja kuchagua, bila shinikizo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Uliza swali moja la wazi na upendekeze bidhaa moja inayohusiana pamoja na manufaa yake.",
          text: [
            "Mauzo dukani ni kuwasaidia watu kupata walichokuja kununua na kitu kinachokifanya kifanye kazi vizuri zaidi. Anza na swali la wazi, lisiloweza kujibiwa kwa ndiyo au hapana: \"Utakitumia kwa nini?\"",
            "Kisha taja manufaa, si sifa tu. Sifa ni kile bidhaa ilicho nacho (\"kava hii ya simu ina ukingo ulioinuka\"); manufaa ni kile inachomfanyia mteja (\"ili skrini yako iwe salama simu ikianguka kifudifudi\").",
            "Pendekezo (maduka huliita suggestive selling au add-on) ni bidhaa moja inayohusiana: betri pamoja na mwanasesere, kava pamoja na simu, soksi pamoja na viatu. Pendekeza moja, sema kwa nini, na akisema hapana, tabasamu na uachane nalo. Kulazimisha kunawafanya watu waondoke na wasirudi.",
            "Usibuni ukweli kuhusu bidhaa kamwe. Kama hujui, sema \"Ngoja nikutafutie\" na umwulize mfanyakazi mwenzako au usome lebo."
          ],
          steps: [
            "Salimia na uulize swali moja la wazi: \"Utakitumia kwa nini?\"",
            "Sikiliza jibu.",
            "Onyesha manufaa moja yanayolingana na alichosema.",
            "Pendekeza bidhaa moja inayohusiana na useme kwa nini.",
            "Kubali \"hapana\" kwa adabu: \"Hakuna shida!\""
          ],
          words: [
            ["Swali la wazi", "swali linalohitaji zaidi ya jibu la ndiyo au hapana."],
            ["Sifa", "kitu ambacho bidhaa inacho."],
            ["Manufaa", "kile ambacho sifa hiyo inamfanyia mteja."],
            ["Suggestive selling (add-on, pendekezo)", "kutoa bidhaa moja inayohusiana inayomsaidia mteja."]
          ],
          slides: [
            { title: "Anza na swali la wazi", bullets: ["\"Utakitumia kwa nini?\"", "Si \"Nikusaidie?\" (ni rahisi kujibu hapana)", "Sikiliza jibu"] },
            { title: "Sifa na manufaa", bullets: ["Sifa: ukingo ulioinuka kwenye kava", "Manufaa: skrini yako iko salama simu ikianguka kifudifudi", "Wateja hununua manufaa"] },
            { title: "Pendekezo moja, bila shinikizo", bullets: ["Betri pamoja na mwanasesere, soksi pamoja na viatu", "Sema kwa nini inasaidia", "Hapana ni sawa: tabasamu na uendelee"] }
          ],
          tryIt: "Chagua vitu vitatu nyumbani kwako. Kwa kila kimoja, andika swali moja la wazi ambalo ungemwuliza mnunuzi, manufaa moja, na bidhaa moja inayohusiana ambayo ungeweza kupendekeza pamoja na sababu fupi. Yaseme kwa sauti.",
          youCanNow: "kuuliza swali la wazi, kueleza manufaa na kupendekeza bidhaa moja bila shinikizo.",
          quickCheck: [
            { objective: "O4", q: "Lipi ni swali la wazi?", options: ["\"Nikusaidie?\"", "\"Unataka mfuko?\"", "\"Ni hivyo tu?\"", "\"Utakitumia kwa nini?\""], answer: 3, why: "Linahitaji zaidi ya ndiyo au hapana, kwa hiyo unajifunza mteja anahitaji nini." },
            { objective: "O4", q: "Unapendekeza kava ya simu na mteja anasema hapana asante. Unafanya nini?", options: ["Uliza mara tatu zaidi", "Tabasamu, sema \"Hakuna shida\" na umalize mauzo", "Mwambie atajuta", "Iweke kwenye mfuko hata hivyo"], answer: 1, why: "Pendekezo moja linasaidia; kulazimisha baada ya hapana kunawafukuza wateja." }
          ]
        },
        {
          title: "Marejesho, matatizo ya bei na wateja waliokasirika",
          objectives: ["O5"],
          minutes: 6,
          goal: "Shughulikia marejesho, tatizo la bei au mteja aliyekasirika kwa sera ya duka, na umwite meneja inapohitajika.",
          text: [
            "Kila duka lina sera ya marejesho: siku ngapi, kama risiti inahitajika, na jinsi pesa inavyorudishwa (kwenye kadi, kama pesa taslimu au kama salio la duka). Jifunze ya duka lako katika mafunzo. Ifuate kwa njia ileile kwa kila mtu, na umwombe meneja marejesho yanapokuwa nje ya sera.",
            "Matatizo ya bei ni ya kawaida: lebo ya rafu inasema $4.99 na rejista inasema $5.49. Baki mtulivu, fanya ukaguzi wa bei, na ufuate kanuni ya duka lako. Usibishane, na usibadilishe bei peke yako.",
            "Kwa mteja aliyekasirika, tumia hatua nne: sikiliza bila kumkatiza, omba radhi kwa usumbufu, rekebisha unachoweza au mlete meneja, na umshukuru. Kozi \"Ubora katika Huduma kwa Wateja\" inaenda ndani zaidi.",
            "Usalama wako unakuja kwanza. Usimkimbize wala kumshika mwizi wa dukani; mwambie meneja au mlinzi. Mteja akikutishia, au wakati wa wizi wa kutumia nguvu, usibishane wala kupigana: fuata mafunzo ya usalama ya duka lako, toa kinachoombwa, na upige 911 (namba ya dharura ya Marekani) ikiwa salama. OSHA (ofisi ya usalama kazini ya Marekani) inataja kushughulikia pesa mbele ya umma na kazi ya usiku sana kama hatari za vurugu kazini."
          ],
          steps: [
            "Marejesho: kagua risiti, tarehe na bidhaa dhidi ya sera.",
            "Tatizo la bei: fanya ukaguzi wa bei na ufuate kanuni ya duka.",
            "Mteja aliyekasirika: sikiliza, omba radhi, rekebisha au mlete meneja, shukuru.",
            "Nje ya nafasi yako au si salama: mwite meneja, mlinzi au piga 911."
          ],
          words: [
            ["Sera ya marejesho", "kanuni za duka za kupokea bidhaa zilizorudishwa na kurudisha pesa."],
            ["Salio la duka (store credit)", "pesa iliyorudishwa ambayo inaweza kutumika katika duka hilo tu."],
            ["Ruhusa ya meneja (manager override)", "meneja kuidhinisha kitu ambacho rejista haimruhusu keshia kufanya peke yake."],
            ["Wizi wa dukani", "kuchukua bidhaa dukani bila kulipa."]
          ],
          slides: [
            { title: "Marejesho", bullets: ["Jifunze siku, kanuni ya risiti na aina ya urejeshaji pesa ya duka lako", "Kanuni zilezile kwa kila mtu", "Nje ya sera? Mwombe meneja"] },
            { title: "Matatizo ya bei", bullets: ["Baki mtulivu na ufanye ukaguzi wa bei", "Fuata kanuni ya duka", "Usibadilishe bei peke yako kamwe"] },
            { title: "Wateja waliokasirika", bullets: ["Sikiliza bila kumkatiza", "Omba radhi kwa usumbufu", "Rekebisha au mlete meneja, kisha umshukuru"] },
            { title: "Usalama kwanza", bullets: ["Usimkimbize wala kumshika mwizi wa dukani kamwe", "Wakati wa wizi wa kutumia nguvu: usibishane wala kupigana; fuata mafunzo yako", "Piga 911 ikiwa salama"] }
          ],
          sources: [{ name: "OSHA: Vurugu kazini", url: "https://www.osha.gov/workplace-violence" }],
          tryIt: "Pamoja na rafiki au peke yako kwa sauti, igiza hali hii: mteja amekasirika kwamba lebo ya rafu ya $4.99 imesajiliwa kama $5.49. Tumia hatua nne. Kisha andika aina mbili za marejesho ambazo ungezipeleka kwa meneja.",
          youCanNow: "kushughulikia marejesho, tatizo la bei na mteja aliyekasirika kwa utulivu, na kujua wakati wa kumwita meneja au kupiga 911.",
          quickCheck: [
            { objective: "O5", q: "Mteja anataka kurudisha bidhaa baada ya muda wa marejesho wa duka kupita. Unafanya nini?", options: ["Mwite meneja", "Rudisha pesa taslimu hata hivyo", "Piga kelele kwamba ni kuchelewa", "Ficha bidhaa"], answer: 0, why: "Chochote kilicho nje ya sera kinapelekwa kwa meneja, ambaye anaweza kuamua." },
            { objective: "O5", q: "Unamwona mtu akiweka chaja ya simu ndani ya koti lake na kutoka nje. Unafanya nini?", options: ["Mkimbize hadi kwenye maegesho", "Mshike mkono", "Mwambie meneja au mlinzi mara moja", "Puuza na usiseme kitu"], answer: 2, why: "Usalama wako unakuja kwanza; maduka hushughulikia wizi kupitia mameneja na walinzi." }
          ]
        },
        {
          title: "Kadi yako ya zamu na njia yako kuelekea kazi",
          objectives: ["O6"],
          minutes: 5,
          goal: "Andika orodha ya hatua za zamu ya ukurasa mmoja na uweke tarehe ya hatua yako inayofuata ya kazi.",
          text: [
            "Zamu nzuri ina sehemu tatu. Kufungua: andikisha muda wa kuingia kwa wakati, hesabu droo yako pamoja na meneja, kagua karatasi ya rejista na mifuko, na usafishe eneo lako. Kuendesha: fuata mpangilio wa malipo, hesabu chenji kwa sauti, kagua vitambulisho, na uweke droo yako imefungwa kati ya mauzo. Kufunga: hesabu droo yako pamoja na meneja, ripoti kuzidi/kupungua kwa uaminifu, safisha na uandikishe muda wa kutoka.",
            "Kuyaweka kwenye kadi moja kunakusaidia kujifunza haraka na kunamwonyesha meneja wa kuajiri kwamba uko tayari. Ilete kwenye usaili na uieleze.",
            "Cheti kinaweza kusaidia maombi yako ya kazi. NRF Foundation (sehemu ya National Retail Federation, shirikisho la wafanyabiashara wa rejareja la Marekani) inaendesha RISE Up, mpango wa mafunzo na vyeti wenye vyeti kama Retail Industry Fundamentals, Customer Service and Sales, na Customer Conflict De-escalation. Kozi hii INAKUANDAA; haitoi cheti. Angalia nrffoundation.org kujua jinsi ya kujiandikisha na gharama yake, au uliza kituo cha kazi au mpango wa eneo lako, ambao huenda unautoa.",
            "Kisha omba kazi. Maduka huajiri mwaka mzima, na zaidi kabla ya sikukuu. Omba mtandaoni kwenye ukurasa wa ajira wa duka lenyewe au ana kwa ana, na usimlipe mtu yeyote kamwe ili upate kazi."
          ],
          steps: [
            "Andika hatua zako za kufungua.",
            "Andika maneno yako ya malipo, pamoja na mstari mmoja wa pendekezo.",
            "Ongeza mazoezi yako ya chenji, na hatua za kitambulisho na noti kubwa.",
            "Orodhesha nyakati tatu utakazomwita meneja.",
            "Andika hatua zako za kufunga.",
            "Ongeza hatua moja inayofuata yenye tarehe: cheti au ombi la kazi."
          ],
          words: [
            ["Clock in / clock out (kuandikisha kuingia / kutoka)", "kurekodi muda unaoanza na unaomaliza kazi."],
            ["Cheti", "hati au beji inayoonyesha kwamba ulifaulu mtihani wa ujuzi fulani."],
            ["RISE Up", "mpango wa NRF Foundation wa mafunzo na vyeti vya kazi za maduka."]
          ],
          slides: [
            { title: "Kufungua", bullets: ["Andikisha kuingia kwa wakati", "Hesabu droo yako pamoja na meneja", "Kagua karatasi, mifuko na eneo lako"] },
            { title: "Kuendesha na kufunga", bullets: ["Mpangilio wa malipo, kuhesabu chenji kwa sauti, ukaguzi wa vitambulisho", "Droo imefungwa kati ya mauzo", "Kufunga: hesabu pamoja na meneja, ripoti kuzidi/kupungua kwa uaminifu"] },
            { title: "Cheti cha kazi za maduka", bullets: ["Vyeti vya RISE Up vya NRF Foundation", "Retail Industry Fundamentals, Customer Service and Sales", "Kozi hii inakuandaa; haitoi cheti"] },
            { title: "Hatua yako inayofuata", bullets: ["Leta kadi yako ya zamu kwenye usaili", "Omba kwenye ukurasa wa ajira wa duka lenyewe", "Usimlipe mtu yeyote kamwe ili upate kazi"] }
          ],
          sources: [
            { name: "NRF Foundation: RISE Up", url: "https://nrffoundation.org/riseup" },
            { name: "Ofisi ya Takwimu za Kazi ya Marekani (BLS): Makeshia", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }
          ],
          tryIt: "Tengeneza Kadi yako ya Zamu ya Keshia kwenye ukurasa mmoja (karatasi au maelezo kwenye simu) yenye sehemu zote saba za kazi ya mwisho. Fanya mauzo matano ya kuhesabu chenji kwa sauti kwa pesa za mchezo na uyaandike kwenye kadi. Malizia kwa mstari mmoja: cheti au duka utakalolitafuta na tarehe utakayoanza.",
          youCanNow: "kufungua, kuendesha na kufunga zamu ya rejista kwa orodha ya hatua, na kuchukua hatua inayofuata yenye tarehe kuelekea kazi ya dukani.",
          quickCheck: [
            { objective: "O6", q: "Ni kitu gani cha kwanza unachofanya na droo yako mwanzoni mwa zamu?", options: ["Kuanza kuwahudumia wateja", "Kuazima droo ya mfanyakazi mwenzako", "Kuongeza pesa zako mwenyewe ndani yake", "Kuihesabu pamoja na meneja"], answer: 3, why: "Kuhesabu mwanzoni kunaweka kiasi unachokiwajibikia." },
            { objective: "O6", q: "Kozi hii inakupa nini kuelekea cheti cha RISE Up?", options: ["Cheti chenyewe", "Maandalizi; NRF Foundation ndiyo inayoendesha cheti", "Leseni ya jimbo", "Hakuna kitu kabisa"], answer: 1, why: "Kozi inakuandaa; cheti kinatoka kwa mpango wa RISE Up wa NRF Foundation." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuuza, kuhudumia na kuendesha zamu",
        questions: [
          { objective: "O4", q: "Lipi ni manufaa, si sifa?", options: ["Kava ina ukingo ulioinuka", "Skrini yako inabaki salama simu ikianguka kifudifudi", "Kava ni ya bluu", "Kava imetengenezwa kwa plastiki"], answer: 1, why: "Manufaa yanasema kile sifa inachomfanyia mteja." },
          { objective: "O4", q: "Mteja ananunua gari la kuchezea la rimoti. Pendekezo zuri ni lipi?", options: ["Mopu", "Gari la pili ambalo hakuliuliza", "Hakuna; usipendekeze kamwe", "Betri zinazohitajika, ili lifanye kazi akifika nyumbani"], answer: 3, why: "Bidhaa moja inayohusiana pamoja na sababu inamsaidia mteja." },
          { objective: "O5", q: "Lebo ya rafu inasema $4.99 lakini rejista inasema $5.49. Unafanya nini kwanza?", options: ["Baki mtulivu na ufanye ukaguzi wa bei", "Badilisha bei kwenye rejista wewe mwenyewe", "Mwambie mteja lebo si sahihi bila kukagua", "Kataa kuuza bidhaa"], answer: 0, why: "Ukaguzi wa bei unapata bei sahihi; kisha unafuata kanuni ya duka." },
          { objective: "O5", q: "Mtu anakutishia na kudai pesa zilizo kwenye droo yako. Unafanya nini?", options: ["Pigana kulinda pesa", "Bishana naye", "Fuata mafunzo yako ya usalama, usipinge, na upige 911 ikiwa salama", "Mkimbize nje ya duka"], answer: 2, why: "Usalama wako unakuja kwanza; pesa zinaweza kurudishwa." },
          { objective: "O6", q: "Wakati wa kufunga droo yako imepungua $3. Unafanya nini?", options: ["Ongeza $3 za pesa zako mwenyewe", "Iripoti kwa uaminifu unapohesabu pamoja na meneja", "Chukua $3 kutoka droo nyingine", "Ondoka bila kuhesabu"], answer: 1, why: "Kuzidi/kupungua huhesabiwa na kuripotiwa kwa uaminifu; kuchanganya pesa huficha makosa na kuvunja sera." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ujuzi wa Mauzo Dukani na Kazi ya Keshia",
    questions: [
      { objective: "O1", q: "Unapaswa kuuliza kuhusu kuponi au namba ya zawadi lini?", options: ["Baada ya risiti kuchapishwa", "Kabla ya kupiga jumla ya mauzo", "Wakati ujao atakaponunua", "Akilalamika tu"], answer: 1, why: "Kuponi na zawadi huwekwa kabla ya jumla ili iwe sahihi." },
      { objective: "O1", q: "\"Void\" inamaanisha nini kwenye rejista?", options: ["Kurudisha pesa", "Kufungua droo", "Kuchapisha risiti", "Kuondoa bidhaa kwenye mauzo kabla haijalipiwa"], answer: 3, why: "Void huondoa bidhaa kwenye mauzo kabla ya malipo." },
      { objective: "O1", q: "Mteja anataka kulipa kwa kadi yake. Kipi ni sahihi?", options: ["Anaigusisha au kuiingiza mwenyewe na kuandika PIN yake mwenyewe", "Unaomba PIN yake kwa sauti", "Unabaki na kadi yake nyuma ya kaunta", "Unaandika namba ya kadi"], answer: 0, why: "Mteja anashika kadi yake na PIN yake mwenyewe." },
      { objective: "O2", q: "Jumla ni $13.47 na mteja anakupa $20. Chenji ni ngapi?", options: ["$7.53", "$6.47", "$6.53", "$7.47"], answer: 2, why: "Peni 3 hadi $13.50, kwota 2 hadi $14, $1 hadi $15 na $5 hadi $20: $6.53." },
      { objective: "O2", q: "Katika njia ya kuhesabu kwenda juu unaanza na:", options: ["Sifuri", "Jumla ya mauzo", "Kiasi ambacho mteja alikupa", "Kiasi kilicho kwenye droo"], answer: 1, why: "Unahesabu kwenda juu kutoka jumla hadi kiasi kilicholipwa." },
      { objective: "O2", q: "Kwa nini uweke noti ya mteja juu ya droo hadi chenji ihesabiwe?", options: ["Ili nyote wawili mwone alicholipa nacho kama kuna swali", "Ili isilowe", "Ili mteja anayefuata aitumie", "Kwa sababu droo imejaa"], answer: 0, why: "Inamaliza swali lolote la \"Nilikupa noti ya hamsini\"." },
      { objective: "O3", q: "Umri wa chini wa shirikisho wa kununua tumbaku au vape ni upi?", options: ["16", "18", "19", "21"], answer: 3, why: "Tobacco 21 ilipandisha umri wa shirikisho hadi 21 mwezi Desemba 2019." },
      { objective: "O3", q: "FDA inasema ukague kitambulisho chenye picha kwa wanunuzi wa tumbaku wanaoonekana chini ya miaka:", options: ["18", "21", "30", "40"], answer: 2, why: "Kanuni ya FDA ni kukagua kitambulisho chenye picha cha yeyote aliye chini ya miaka 30." },
      { objective: "O3", q: "Upi ni ukaguzi unaoweza kufanya kwenye noti ya $100?", options: ["Iinamishe na uangalie 100 ya kona ikibadilika kutoka shaba kuwa kijani", "Inuse", "Ikunje katikati", "Kagua tarehe ilipochapishwa"], answer: 0, why: "Wino unaobadilika rangi ni mojawapo ya alama za usalama za noti ya $100." },
      { objective: "O3", q: "Nani anaamua umri wa chini wa KUUZA pombe ukiwa keshia?", options: ["Mteja", "Kila jimbo, pamoja na kanuni za duka lako", "FTC", "Keshia"], answer: 1, why: "Umri wa kuuza unawekwa na sheria ya jimbo, na maduka mara nyingi huongeza kanuni zao." },
      { objective: "O4", q: "Swali lipi litakuambia mengi zaidi kuhusu mahitaji ya mnunuzi?", options: ["\"Nikusaidie?\"", "\"Ni hivyo tu?\"", "\"Utakitumia kwa nini?\"", "\"Pesa taslimu au kadi?\""], answer: 2, why: "Swali la wazi linapata zaidi ya ndiyo au hapana." },
      { objective: "O4", q: "Suggestive selling ni nini?", options: ["Kuwaambia wateja lazima wanunue nini", "Kuuza bidhaa ambazo haziko rafuni", "Kupandisha bei", "Kutoa bidhaa moja inayohusiana inayomsaidia mteja"], answer: 3, why: "Ni pendekezo moja lenye msaada, si shinikizo." },
      { objective: "O4", q: "Hujui kama hita ni salama kutumia bafuni. Unasema nini?", options: ["\"Ngoja nikutafutie\"", "\"Ndiyo, iko sawa\"", "\"Sijui\" na kuondoka", "\"Hakuna anayejua\""], answer: 0, why: "Usibuni ukweli kuhusu bidhaa kamwe; tafuta kutoka kwa mfanyakazi mwenzako au lebo." },
      { objective: "O5", q: "Marejesho yako nje ya sera ya duka. Unafanya nini?", options: ["Rudisha pesa hata hivyo", "Mwite meneja", "Mwambie mteja aondoke", "Toa salio la duka peke yako"], answer: 1, why: "Marejesho yaliyo nje ya sera yanapelekwa kwa meneja." },
      { objective: "O5", q: "Hatua nne kwa mteja aliyekasirika ni zipi?", options: ["Bishana, eleza, kataa, ondoka", "Puuza, subiri, tabasamu, funga", "Sikiliza, omba radhi, rekebisha au mlete meneja, shukuru", "Piga 911, funga duka, subiri, fungua tena"], answer: 2, why: "Hatua hizo nne zinatuliza wateja wengi waliokasirika." },
      { objective: "O5", q: "Unamwona mwizi wa dukani akiondoka. Chaguo salama ni lipi?", options: ["Mkimbize", "Zuia mlango", "Nyakua mfuko", "Mwambie meneja au mlinzi"], answer: 3, why: "Usimkimbize wala kumshika kamwe; usalama unakuja kwanza." },
      { objective: "O5", q: "Wakati wa wizi wa kutumia nguvu, nini ni muhimu zaidi?", options: ["Usalama wako na wa wengine", "Kulinda pesa", "Kupata jina la mwizi", "Kumaliza mauzo"], answer: 0, why: "Fuata mafunzo yako na usipinge; pesa zinaweza kurudishwa." },
      { objective: "O6", q: "Kipi kinafaa katika hatua zako za kufunga?", options: ["Kumwazima mfanyakazi mwenzako droo yako", "Kuacha droo hadi asubuhi", "Kuhesabu droo yako pamoja na meneja na kuripoti kuzidi/kupungua kwa uaminifu", "Kwenda nyumbani na pesa za ziada"], answer: 2, why: "Kuhesabu na kuripoti kwa uaminifu kunafunga zamu yako ipasavyo." },
      { objective: "O6", q: "Upi ni mpango halisi wa vyeti vya kazi za maduka?", options: ["Leseni ya maduka ya FTC", "RISE Up ya NRF Foundation", "Kadi ya keshia ya OSHA", "Beji ya mauzo ya Secret Service"], answer: 1, why: "RISE Up ni mpango wa NRF Foundation wa mafunzo na vyeti vya kazi za maduka." },
      { objective: "O6", q: "\"Mwajiri wa watu\" anasema lazima ulipe $50 ili upate kazi ya keshia. Unafanya nini?", options: ["Lipa haraka", "Lipa nusu sasa", "Mpe taarifa za benki yako", "Usilipe; omba kwenye ukurasa wa ajira wa duka lenyewe"], answer: 3, why: "Waajiri halisi hawakuombi kamwe ulipe ili upate kazi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 6, 8, 10, 13, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maneno ya malipo", objective: "O1", notYet: "Hatua zinakosekana au haziko kwa mpangilio (kwa mfano, kuponi baada ya jumla).", meets: "Salamu, skana, kuponi, jumla, malipo, chenji na risiti, shukrani, kwa mpangilio.", exceeds: "Pia inasema la kufanya bidhaa ikisajiliwa mara mbili au bei isipolingana." },
      { name: "Chenji kamili", objective: "O2", notYet: "Mauzo ya mazoezi yako chini ya 5, au chenji yoyote si sahihi.", meets: "Mauzo 5 kati ya 5 ya mazoezi yamehesabiwa kwa usahihi kwa njia ya kuhesabu kwenda juu.", exceeds: "Inajumuisha angalau mauzo moja yenye sarafu na noti, na hesabu ya kusema kwa sauti imeandikwa." },
      { name: "Ukaguzi wa vitambulisho na noti kubwa", objective: "O3", notYet: "Hakuna hatua ya kitambulisho, au kanuni ya umri si sahihi.", meets: "Anakagua picha, muda wa kuisha na tarehe ya kuzaliwa, na kuinamisha-mwanga-kupapasa kwa noti kubwa; anamwita meneja asipokuwa na uhakika.", exceeds: "Pia anaorodhesha dalili za hatari za ulaghai wa kadi za zawadi na hatua ya duka kwa ajili yake." },
      { name: "Pendekezo lenye msaada", objective: "O4", notYet: "Hakuna pendekezo, au pendekezo la kulazimisha.", meets: "Mstari mmoja wa pendekezo wenye manufaa na njia ya adabu ya kukubali hapana.", exceeds: "Anaanza na swali la wazi linaloelekea kwenye pendekezo." },
      { name: "Wakati wa kumwita meneja", objective: "O5", notYet: "Hali chini ya tatu, au anasema umkimbize mwizi wa dukani.", meets: "Hali tatu zilizo wazi (kwa mfano, marejesho nje ya sera, noti iliyoshindwa ukaguzi, kitambulisho kisicho na uhakika) na usalama kwanza.", exceeds: "Anaongeza la kumwambia mteja wakati wa kumsubiri meneja." },
      { name: "Hatua za zamu na hatua inayofuata", objective: "O6", notYet: "Hatua za kufungua au kufunga zinakosekana, au hakuna hatua inayofuata yenye tarehe.", meets: "Hatua za kufungua, kuendesha na kufunga kwa mpangilio, pamoja na hatua ya cheti au kazi yenye tarehe.", exceeds: "Anataja duka au mpango maalum na hatua ya pili yenye tarehe." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba kazi ya dukani au ya keshia ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi walioajiriwa madukani ambao bado wako kazini baada ya siku 90",
      "Wanafunzi wanaojiandikisha au wanaopata cheti cha RISE Up cha NRF Foundation",
      "Maduka au mipango ya ajira washirika wanaripoti upungufu mdogo wa pesa kwenye droo na mafunzo ya haraka zaidi kwa wafanyakazi wapya kutoka kozi hii"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya kusoma masomo",
      "Sarafu na pesa za mchezo (au vipande vya karatasi vilivyoandikwa viasi) kwa mazoezi ya chenji",
      "Vitu vichache vya nyumbani na lebo za bei za karatasi kwa mauzo ya mazoezi",
      "Karatasi na kalamu, au maelezo kwenye simu, kwa Kadi ya Zamu ya Keshia",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Katika kikundi, tengenezeni rejista ya kuigiza mezani na mbadilishane nafasi za keshia, mteja na meneja.",
      "Mazoezi ya chenji yafanyike kama mchezo wa kupima muda wanafunzi wakishakuwa sahihi; usahihi kwanza, kisha kasi.",
      "Tumia pesa za mchezo na vitambulisho vya kubuni tu; usiwaombe wanafunzi kamwe kuonyesha vitambulisho vyao au taarifa za kadi zao.",
      "Kagua umri wa kuuza pombe na tumbaku katika jimbo lako na uwaambie wanafunzi vijana kinachowahusu.",
      "Pima Kadi ya Zamu ya Keshia kwa rubriki na uwaambie wanafunzi waiibebe kwenye usaili wa mazoezi.",
      "Mipango iliyo washirika wa mafunzo wa RISE Up inaweza kuunganisha kozi hii na cheti; angalia nrffoundation.org."
    ]
  }
};
