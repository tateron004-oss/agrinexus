"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-content-creation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-content-creation-sw",
  lang: "sw",
  translationOf: "athletes-content-creation",
  category: "Athletes",
  name: "Kutengeneza Maudhui kwa Wanamichezo",
  skills: "Kupanga video fupi yenye hook, Kurekodi kwa simu, Kuhariri kwa app ya bure, Kuandika maelezo na maandishi ya skrini kwa AI, Kupanga ratiba ya maudhui ya wiki mbili",
  outcome: "kupanga, kurekodi, kuhariri na kuchapisha video ya mwanamichezo ya sekunde 30 hadi 60 yenye hook imara, manukuu wazi na maandishi kwenye skrini, na kupanga maudhui ya wiki mbili zijazo katika ratiba rahisi.",
  about: [
    "Kozi hii ni kwa wanamichezo na makocha wanaotaka kutengeneza video fupi ambazo watu wanazitazama kweli: vipande vya mazoezi, matukio ya siku ya mechi, nyuma ya pazia, na vidokezo.",
    "Unahitaji simu na zana za bure tu. Utapanga video yenye hook, utairekodi vizuri, utaihariri kwa app ya bure kama CapCut au kihariri kilichomo kwenye simu yako, utaandika maelezo kwa msaada wa AI, na utapanga machapisho ya wiki mbili.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kila sura inaishia na jaribio la maarifa, na kozi inaishia na mtihani wa maswali 20."
  ],
  finalTask: "Tengeneza na uchapishe video moja ya mwanamichezo ya sekunde 30 hadi 60: mpango ulioandikwa wenye sehemu tatu (hook, thamani, mwisho), iliyorekodiwa kwa simu yako kwa mwanga na sauti nzuri, iliyohaririwa ikiwa na maandishi kwenye skrini na manukuu, na maelezo ya chapisho yaliyoandikwa kwa AI na kurekebishwa na wewe. Kisha jaza ratiba ya maudhui ya wiki mbili yenye mawazo sita zaidi ya machapisho.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari, vyuo na vilabu, pamoja na makocha, wanaotaka kutengeneza video fupi ambazo watu wanazitazama kweli: vipande vya mazoezi, matukio ya siku ya mechi, nyuma ya pazia na vidokezo.",
    startingPoint: "Wanarekodi na kuchapisha kwa simu na wanatazama video fupi kila siku. Wengi wanarekodi bila mpango, wanachapisha vipande vyenye muda mtupu, bila manukuu na kwa muziki wa watu wengine, na wanachapisha wanapokumbuka badala ya kufuata ratiba.",
    gap: "Video zisizopangwa zinapoteza watazamaji katika sekunde za kwanza, zinaweza kunyamazishwa kwa sababu ya muziki, na zinaweza kuvunja kanuni za kutangaza uhusiano pale chapa (kampuni) zinapohusika. Video iliyopangwa, iliyorekodiwa vizuri na yenye manukuu, pamoja na ratiba rahisi, inawasaidia wanamichezo kusimulia hadithi yao mara kwa mara bila kuharibu mazoezi au masomo.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 7",
      "Simu yenye kamera, app ya bure ya kuhariri na msaidizi wa AI wa bure",
      "Kama dakika 60 za masomo pamoja na muda wa kurekodi na kuhariri video moja",
      "Ruhusa ya kuwarekodi wachezaji wenzako, makocha na wengine; kanuni za timu kuhusu kurekodi",
      "Muziki wenye leseni tu; kanuni za FTC za kutangaza uhusiano na kanuni za NIL pale chapa yoyote inapohusika"
    ],
    prerequisites: "Hakuna. Kozi \"Kujenga Chapa ya Mwanamichezo kwenye Mitandao ya Kijamii\" inakusaidia kuchagua nguzo za maudhui yako kwanza."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa wazo moja kutoka kwenye nguzo za maudhui yako", action: "kupanga video fupi yenye hook, thamani na mwisho", standard: "ukiwa na hook ya sekunde 1 hadi 3 za kwanza na mwito wa kuchukua hatua au mwisho ulio wazi, vimeandikwa kabla ya kurekodi" },
    { id: "O2", condition: "Ukitumia simu yako", action: "kurekodi vipande safi vya wima vyenye mwanga mzuri, picha isiyotikisika na sauti wazi", standard: "ukiuelekea mwanga, tukio likiwa katikati, na kwa ruhusa ya kila mtu mwingine aliye kwenye picha" },
    { id: "O3", condition: "Ukipewa vipande vyako", action: "kuchagua na kupanga picha za mbali, za kati na za karibu ili kusimulia hadithi ya tatizo, kazi na matokeo", standard: "kila kipande kikisaidia hadithi na bila matokeo ya uongo" },
    { id: "O4", condition: "Ukitumia app ya bure ya kuhariri", action: "kuhariri vipande vyako kuwa video ya sekunde 30 hadi 60 yenye maandishi kwenye skrini, manukuu na muziki wenye leseni", standard: "bila muda mtupu, maandishi yakisomeka kwenye simu na manukuu yakiwa yamekaguliwa kwa makosa" },
    { id: "O5", condition: "Ukitumia msaidizi wa AI", action: "kuandika maelezo ya chapisho kwa sauti yako mwenyewe yenye hashtag chache zinazohusika", standard: "ukiwatambulisha (tag) watu waliokubali tu, na ukitangaza faida yoyote kutoka kwa chapa ndani ya video na karibu na mwanzo wa maelezo" },
    { id: "O6", condition: "Ukitumia Google Sheets au app ya madokezo", action: "kupanga machapisho ya wiki mbili katika ratiba ya maudhui", standard: "yenye machapisho 3 hadi 4 kwa wiki, safu za Tarehe, Nguzo, Wazo, Aina na Hali, na wiki zenye shughuli nyingi zikiwa zimezuiwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Panga na rekodi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Video fupi yenye sehemu tatu",
          minutes: 5,
          goal: "Panga video fupi yenye hook, thamani na mwisho.",
          text: [
            "Mara nyingi video fupi zinatazamwa kwa sekunde moja au mbili tu kabla watu hawajasogeza skrini. Muda huo wa kwanza, unaoitwa hook, unaamua kama watabaki.",
            "Panga sehemu tatu: 1. Hook (sekunde 1 hadi 3 za kwanza): swali, tukio la kushangaza, au sentensi yenye nguvu kama \"Zoezi lililorekebisha mpira wangu wa kuruka.\" 2. Thamani (katikati): onyesha zoezi, tukio au kidokezo. 3. Mwisho: mwito wa kuchukua hatua kama \"Hifadhi hii kwa ajili ya mazoezi\" au mwisho unaoridhisha.",
            "Andika mpango kabla ya kurekodi. Msaidizi wa AI anaweza kukupa mawazo kumi ya hook: \"Nipe hook 10 fupi kwa video inayoonyesha mazoezi yangu ya miguu ya dakika 5 ya kupasha mwili joto kwa mpira wa kikapu.\""
          ],
          steps: ["Chagua wazo moja kutoka kwenye nguzo za maudhui yako.", "Andika hook ya sekunde 1-3 za kwanza.", "Orodhesha picha zitakazoonyesha thamani.", "Andika mwisho au mwito wa kuchukua hatua.", "Muulize AI mawazo zaidi ya hook na uchague bora zaidi."],
          words: [["Hook", "sekunde 1 hadi 3 za kwanza zinazowafanya watu watake kuendelea kutazama."], ["Mwito wa kuchukua hatua", "hatua inayofuata iliyo wazi unayowaomba watazamaji waichukue (kwa Kiingereza: call to action)."]],
          slides: [
            { title: "Kwa nini hook ni muhimu", bullets: ["Watu wanaamua kwa sekunde moja au mbili", "Hook = sekunde 1-3 za kwanza"] },
            { title: "Sehemu tatu", bullets: ["1. Hook: swali, jambo la kushangaza, sentensi yenye nguvu", "2. Thamani: zoezi, tukio au kidokezo", "3. Mwisho: mwito wa kuchukua hatua au mwisho mzuri"] },
            { title: "Panga kwanza", bullets: ["Iandike kabla ya kurekodi", "Muulize AI mawazo 10 ya hook"] }
          ],
          tryIt: "Andika mpango wa sehemu tatu kwa video moja fupi. Muulize msaidizi wa AI hook kumi na uchague ile inayokufaa zaidi.",
          youCanNow: "kupanga video fupi yenye hook, thamani na mwisho.",
          quickCheck: [
            { objective: "O1", q: "Sehemu tatu za mpango wa video fupi ni zipi?", options: ["Utangulizi, majina ya washiriki, hitimisho", "Hook, thamani na mwisho", "Muziki, kichujio, maandishi", "Kichwa, tagi, kiungo"], answer: 1, why: "Panga hook, thamani katikati, na mwisho." },
            { objective: "O1", q: "Wazo la video yako ni mazoezi ya kunyoosha mwili baada ya mchezo. Unafanya nini kabla ya kurekodi?", options: ["Unarekodi na kuamua baadaye", "Unachapisha picha badala yake", "Unaandika hook, picha na mwisho", "Unamwomba mchezaji mwenzako arekodi chochote"], answer: 2, why: "Andika mpango kabla ya kurekodi ili ujue picha unazohitaji." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kurekodi kwa simu yako",
          minutes: 5,
          goal: "Rekodi vipande safi vyenye mwanga mzuri, picha isiyotikisika na sauti wazi.",
          text: [
            "Mwanga: uelekee mwanga, usiupe mgongo. Mwanga wa mchana kutoka dirishani au nje kivulini ni mzuri sana. Epuka kurekodi dirisha lenye mwanga mkali likiwa nyuma yako.",
            "Mpangilio wa picha na utulivu: rekodi kwa wima kwa apps za video fupi, shikilia simu bila kutikisika kwa kutumia tripodi au kwa kuiegemeza kwenye kitu, na weka tukio katikati ya picha. Futa lenzi kwanza. Hali ya mwendo wa polepole (slow motion) ni nzuri sana kuonyesha mbinu.",
            "Sauti: ukiwa unaongea, kaa karibu na simu na mbali na upepo na kumbi zenye kelele, au ongeza sauti iliyorekodiwa baadaye (voice-over). Omba ruhusa kabla ya kuwarekodi wachezaji wenzako, makocha au watu wengine, na ufuate kanuni za timu yako kuhusu kurekodi."
          ],
          steps: ["Futa lenzi.", "Uelekee mwanga.", "Rekodi kwa wima na bila kutikisika.", "Weka tukio katikati.", "Rekodi sekunde chache za ziada kabla na baada ya kila kipande.", "Omba ruhusa kabla ya kuwarekodi wengine."],
          words: [["Video ya wima", "video iliyorekodiwa simu ikiwa imesimama wima, umbo ambalo apps nyingi za video fupi zinatumia."], ["Voice-over", "maneno yanayorekodiwa peke yake na kuongezwa juu ya video."]],
          slides: [
            { title: "Mwanga", bullets: ["Uelekee mwanga", "Dirisha au kivuli cha nje", "Hakuna dirisha lenye mwanga mkali nyuma yako"] },
            { title: "Picha na utulivu", bullets: ["Wima kwa apps za video fupi", "Tripodi au iegemeze kwenye kitu", "Futa lenzi; jaribu slow motion"] },
            { title: "Sauti na ruhusa", bullets: ["Kaa karibu au tumia voice-over", "Omba ruhusa kabla ya kuwarekodi wengine"] }
          ],
          tryIt: "Rekodi vipande vya video uliyoipanga. Rekodi kila kimoja mara mbili na ubakize kilicho bora.",
          youCanNow: "kurekodi vipande safi visivyotikisika vyenye mwanga na sauti nzuri.",
          quickCheck: [
            { objective: "O2", q: "Ushike simu yako vipi kwa apps za video fupi?", options: ["Wima", "Ubavuni (mlalo)", "Juu chini", "Kwa mshazari"], answer: 0, why: "Rekodi kwa wima kwa apps za video fupi." },
            { objective: "O2", q: "Unarekodi mbele ya dirisha lenye mwanga mkali na uso wako unaonekana giza. Unafanya nini?", options: ["Unarekodi hivyo hivyo", "Unaongeza kichujio baadaye", "Unakuza picha zaidi", "Unageuka ili uelekee mwanga wa dirisha"], answer: 3, why: "Uelekee mwanga, usiupe mgongo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kusimulia hadithi kwa vipande vyako",
          minutes: 4,
          goal: "Chagua na upange vipande ili video isimulie hadithi fupi.",
          text: [
            "Hata video ya sekunde 30 inaweza kusimulia hadithi: tatizo, kazi, matokeo. \"Nilikuwa nakosa layup za mkono wa kushoto. Hili ndilo zoezi nililofanya kila siku kwa wiki mbili. Sasa tazama.\"",
            "Tumia picha za aina tofauti: picha ya mbali kuonyesha uko wapi, picha ya kati kwa tukio lenyewe, na picha ya karibu kwa maelezo madogo kama hatua za miguu au mikono. Kubadilisha picha kunawafanya watu waendelee kutazama.",
            "Matukio ya nyuma ya pazia na ya kweli, kama mazoezi ya alfajiri, safari za basi la timu au kumshukuru kocha, mara nyingi yanawagusa watu zaidi kuliko vipande vya matukio bora vilivyohaririwa kikamilifu. Kuwa mkweli; usidanganye matokeo."
          ],
          steps: ["Andika hadithi yako kwa mstari mmoja: tatizo, kazi, matokeo.", "Chagua kipande cha mbali, cha kati na cha karibu.", "Vipange kulingana na hadithi.", "Kata chochote kisichosaidia hadithi."],
          words: [["Picha ya mbali", "inaonyesha mandhari yote na mahali ulipo (kwa Kiingereza: wide shot)."], ["Picha ya karibu", "picha ya karibu sana ya kitu kidogo, kama mikono au miguu (kwa Kiingereza: close-up)."]],
          slides: [
            { title: "Hadithi fupi", bullets: ["Tatizo", "Kazi", "Matokeo"] },
            { title: "Changanya picha", bullets: ["Mbali: mahali ulipo", "Kati: tukio lenyewe", "Karibu: maelezo madogo"] },
            { title: "Ukweli unagusa watu", bullets: ["Matukio ya nyuma ya pazia", "Kuwa mkweli; hakuna matokeo ya uongo"] }
          ],
          tryIt: "Andika hadithi ya video yako kwa mstari mmoja, kisha panga vipande vyako: angalau kimoja cha mbali, kimoja cha kati na kimoja cha karibu.",
          youCanNow: "kupanga vipande kuwa hadithi fupi ya kweli yenye picha za aina tofauti.",
          quickCheck: [
            { objective: "O3", q: "Picha ya mbali inaonyesha nini?", options: ["Maelezo madogo kama hatua za miguu", "Mahali ulipo", "Uso wako tu", "Maelezo ya chapisho"], answer: 1, why: "Picha ya mbali inaonyesha mahali; ya kati inaonyesha tukio na ya karibu inaonyesha maelezo madogo." },
            { objective: "O3", q: "Kipande kimoja kinafurahisha lakini hakiendani na hadithi yako ya tatizo, kazi, matokeo. Unafanya nini?", options: ["Unakikata", "Unakiweka kwanza", "Unakipunguza mwendo", "Unakirudia mara mbili"], answer: 0, why: "Kata chochote kisichosaidia hadithi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Panga na rekodi",
        questions: [
          { objective: "O1", q: "Hook ni nini?", options: ["Majina ya mwisho ya washiriki", "Aina ya tripodi", "Sekunde 1-3 za kwanza zinazowafanya watu waendelee kutazama", "Hashtag"], answer: 2, why: "Hook inaamua kama watu watabaki." },
          { objective: "O1", q: "Ipi ni hook yenye nguvu?", options: ["\"Zoezi lililorekebisha mpira wangu wa kuruka\"", "\"Ee, habari, kwa hiyo...\"", "Utangulizi mrefu wa kimya", "Skrini nyeusi"], answer: 0, why: "Inaahidi thamani mara moja." },
          { objective: "O2", q: "Mwanga uwe wapi unapojirekodi?", options: ["Nyuma yako", "Popote pasipo", "Juu tu", "Mbele yako, ukiuelekea"], answer: 3, why: "Kuuelekea mwanga kunafanya uso wako uonekane wazi." },
          { objective: "O2", q: "Kabla ya kumrekodi mchezaji mwenzako, unapaswa:", options: ["Kumrekodi kwa siri", "Kuomba ruhusa yake", "Kuchapisha kwanza", "Kutumia jina lake bila kuuliza"], answer: 1, why: "Ruhusa na kanuni za timu zinatangulia." },
          { objective: "O3", q: "Hadithi rahisi ya video ni:", options: ["Vipande vya kubahatisha", "Tatizo, kazi, matokeo", "Mwisho tu", "Maandishi tu"], answer: 1, why: "Mpangilio huo unawafanya watazamaji wapendezwe." }
        ]
      }
    },
    {
      name: "Sura 2: Hariri, andika maelezo na panga",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuhariri kwa app ya bure",
          minutes: 6,
          goal: "Hariri vipande vyako kuwa video fupi iliyobana yenye maandishi na muziki unaoruhusiwa kuutumia.",
          text: [
            "Vihariri vya bure kama CapCut, app ya picha iliyomo kwenye simu yako, au zana za kuhariri ndani ya Instagram, TikTok na YouTube Shorts vinakuwezesha kukata vipande, kuvipanga na kuongeza maandishi.",
            "Kata kwa ubanaji: punguza mwanzo na mwisho wa kila kipande ili kusiwe na muda mtupu. Ongeza maandishi mafupi kwenye skrini kwa hook na mambo makuu, makubwa ya kutosha kusomeka kwenye simu. Ongeza manukuu, kwa sababu watu wengi wanatazama sauti ikiwa imezimwa, na uyakague kwa makosa.",
            "Muziki: tumia maktaba ya muziki wenye leseni iliyomo ndani ya app au nyimbo zisizo na mrabaha (royalty-free). Kutumia wimbo maarufu kutoka mahali pengine kunaweza kufanya video yako inyamazishwe au iondolewe, na machapisho yanayodhaminiwa yanaweza kuwa na kanuni kali zaidi za muziki."
          ],
          steps: ["Ingiza vipande vyako kwa mpangilio.", "Punguza muda mtupu mwanzoni na mwishoni mwa kila kipande.", "Ongeza maandishi ya hook katika sekunde za kwanza.", "Ongeza manukuu na uyakague.", "Ongeza muziki kutoka maktaba ya app.", "Itazame mara moja kwa skrini nzima kwenye simu yako."],
          words: [["Kupunguza (trim)", "kukata sehemu za kipande usizozihitaji."], ["Manukuu", "maneno kwenye skrini yanayoonyesha kinachosemwa (kwa Kiingereza: captions)."], ["Muziki usio na mrabaha", "muziki unaoweza kuutumia chini ya leseni yake bila kulipa kila unapoutumia (royalty-free)."]],
          slides: [
            { title: "Vihariri vya bure", bullets: ["CapCut", "Kihariri kilichomo kwenye simu yako", "Zana za kuhariri ndani ya apps za mitandao"] },
            { title: "Kata kwa ubanaji", bullets: ["Hakuna muda mtupu", "Maandishi ya hook katika sekunde za kwanza", "Manukuu: wengi hutazama bila sauti"] },
            { title: "Muziki", bullets: ["Tumia maktaba yenye leseni ya app", "Nyimbo nyingine zinaweza kunyamazishwa au kuondolewa"] }
          ],
          tryIt: "Hariri video yako iwe ya sekunde 30-60 yenye maandishi ya hook, manukuu na muziki kutoka maktaba ya app. Itazame kwa skrini nzima na ukate chochote kinachoenda polepole.",
          youCanNow: "kuhariri video fupi iliyobana yenye maandishi, manukuu na muziki unaoruhusiwa.",
          quickCheck: [
            { objective: "O4", q: "Upate wapi muziki wa video yako?", options: ["Wimbo wowote maarufu unaoupenda", "Orodha ya nyimbo ya rafiki", "Maktaba ya muziki wenye leseni ya app au nyimbo zisizo na mrabaha", "Rekodi ya redio"], answer: 2, why: "Nyimbo za nje zinaweza kufanya video yako inyamazishwe au iondolewe." },
            { objective: "O4", q: "Manukuu ya moja kwa moja ya app yameandika jina la kocha wako vibaya. Unafanya nini?", options: ["Unayaacha", "Unazima manukuu", "Unamtoa kocha wako kwenye video", "Unarekebisha manukuu kabla ya kuchapisha"], answer: 3, why: "Ongeza manukuu na uyakague kwa makosa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Maelezo na machapisho kwa AI",
          minutes: 5,
          goal: "Andika maelezo ya chapisho kwa msaada wa AI, kwa sauti yako, ukitangaza uhusiano kwa uaminifu.",
          text: [
            "Maelezo ya chapisho (caption) ni maandishi yaliyo chini ya video yako. Muulize msaidizi wa AI: \"Niandikie maelezo matatu mafupi ya video yangu inayoonyesha mazoezi yangu ya miguu ya kupasha mwili joto. Ya kirafiki, chini ya herufi 150, yamalizike kwa swali ili kupata maoni.\"",
            "Chagua moja na ulifanye lisikike kama wewe. Ongeza hashtag chache zinazohusika, si kadhaa na kadhaa. Watambulishe (tag) watu tu kama wamekubali.",
            "Kama chapa (kampuni) ilikulipa au ilikupa chochote kwa ajili ya video, sema wazi ndani ya video (kwa sauti na kwenye skrini) na kwenye maelezo, karibu na mwanzo, kama \"Ad\" (Tangazo) au \"Asante [chapa] kwa vifaa vya bure\". FTC inasema kuiweka mwishoni tu, kwenye hashtag au kwenye maelezo marefu ya chini haitoshi. Wanamichezo wa vyuo: kagueni kanuni za kuripoti NIL na ofisi yenu ya utiifu wa kanuni (compliance)."
          ],
          steps: ["Muulize AI chaguo tatu fupi za maelezo.", "Andika upya ulilochagua kwa sauti yako.", "Ongeza hashtag chache zinazohusika.", "Kama chapa inahusika, tangaza ndani ya video na karibu na mwanzo wa maelezo.", "Chapisha wakati hadhira yako huwa mtandaoni."],
          words: [["Hashtag", "neno lenye alama # mbele yake linalokusanya machapisho ya mada moja."], ["Kutangaza uhusiano", "kusema wazi kwamba chapa ilikulipa au ilikupa kitu (kwa Kiingereza: disclosure)."]],
          slides: [
            { title: "AI inaandika rasimu ya maelezo", bullets: ["Chaguo tatu fupi", "Malizia kwa swali"] },
            { title: "Yafanye yawe yako", bullets: ["Sauti yako", "Hashtag chache zinazohusika", "Watambulishe watu kwa ruhusa tu"] },
            { title: "Chapa inahusika?", bullets: ["Sema na uonyeshe ndani ya video", "\"Ad\" karibu na mwanzo wa maelezo", "Kagua kanuni za NIL"] }
          ],
          sources: [{ name: "FTC: Disclosures 101 for Social Media Influencers (mwongozo wa kutangaza uhusiano na chapa)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Andika maelezo ya video yako kwa msaada wa AI, yarekebishe yawe kwa sauti yako, na uchapishe video.",
          youCanNow: "kuandika maelezo mafupi na ya kweli ya chapisho kwa msaada wa AI.",
          quickCheck: [
            { objective: "O5", q: "Somo linapendekeza hashtag ngapi?", options: ["Hakuna kamwe", "Chache zinazohusika", "Thelathini au zaidi", "Zinazovuma tu"], answer: 1, why: "Ongeza hashtag chache zinazohusika, si kadhaa na kadhaa." },
            { objective: "O5", q: "Chapa ya kinywaji cha wanamichezo ilikupa vinywaji vya bure kwa ajili ya video yako. Unatangaza wapi?", options: ["Kwenye hashtag za mwisho tu", "Kwenye maelezo ya chini tu", "Popote pasipo, kwa sababu haikuwa pesa", "Kwa sauti na kwenye skrini ndani ya video, na karibu na mwanzo wa maelezo"], answer: 3, why: "FTC inasema kutangaza mwishoni tu, kwenye hashtag au kwenye maelezo ya chini haitoshi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ratiba yako ya maudhui ya wiki mbili",
          minutes: 5,
          goal: "Panga machapisho ya wiki mbili katika ratiba rahisi inayoendana na mazoezi yako.",
          text: [
            "Kuchapisha mara kwa mara ni muhimu kuliko kuchapisha mengi. Machapisho matatu au manne kwa wiki yanatosha kwa wanamichezo wengi wakati wa msimu.",
            "Tengeneza ratiba katika Google Sheets au app ya madokezo yenye safu hizi: Tarehe, Nguzo (mazoezi, siku ya mechi, nje ya uwanja, mafunzo), Wazo, Aina (video fupi, picha, story), na Hali (wazo, imerekodiwa, imehaririwa, imechapishwa). Fanya kazi kwa makundi: rekodi vipande kadhaa katika kikao kimoja.",
            "Muulize msaidizi wa AI ajaze rasimu ya kwanza kutokana na nguzo zako na ratiba yako, kisha uirekebishe. Zuia wiki zenye shughuli nyingi kama mitihani au mashindano: ni sawa kuchapisha kidogo wakati huo."
          ],
          steps: ["Tengeneza safu: Tarehe, Nguzo, Wazo, Aina, Hali.", "Panga machapisho 3-4 kwa wiki kwa wiki mbili.", "Muulize AI aandike mawazo kutokana na nguzo zako.", "Rekebisha kulingana na mechi, mitihani na safari.", "Rekodi kwa makundi katika kikao kimoja."],
          words: [["Ratiba ya maudhui", "mpango wa utakachochapisha na lini (kwa Kiingereza: content calendar)."], ["Kufanya kwa makundi", "kufanya kazi nyingi za aina moja kwa pamoja, kama kurekodi vipande vitano katika kikao kimoja (kwa Kiingereza: batching)."]],
          slides: [
            { title: "Mara kwa mara ni bora kuliko mengi", bullets: ["Machapisho 3-4 kwa wiki wakati wa msimu"] },
            { title: "Safu za ratiba", bullets: ["Tarehe, Nguzo, Wazo", "Aina, Hali"] },
            { title: "Fanya kazi kwa akili", bullets: ["AI inaandika rasimu ya mawazo", "Rekodi kwa makundi", "Chapisha kidogo katika wiki zenye shughuli"] }
          ],
          tryIt: "Kazi ya mwisho: chapisha video yako ya sekunde 30-60, kisha tengeneza ratiba ya maudhui ya wiki mbili yenye mawazo sita zaidi ya machapisho, yaliyoandikwa kwa AI na kurekebishwa kulingana na ratiba yako.",
          youCanNow: "kupanga maudhui ya wiki mbili katika ratiba inayoendana na mazoezi yako.",
          quickCheck: [
            { objective: "O6", q: "Somo linapendekeza machapisho mangapi kwa wiki kwa wanamichezo wengi wakati wa msimu?", options: ["Matatu au manne", "Moja kwa mwezi", "Kumi kwa siku", "Ishirini"], answer: 0, why: "Kuchapisha mara kwa mara ni muhimu kuliko kuchapisha mengi." },
            { objective: "O6", q: "Una mashindano wikendi ijayo. Unapangaje ratiba yako?", options: ["Unachapisha mara mbili zaidi", "Unafuta machapisho yote kwa mwezi mmoja", "Unaizuia wiki hiyo na kuchapisha kidogo", "Unarekodi wakati wa mechi badala ya kucheza"], answer: 2, why: "Ni sawa kuchapisha kidogo katika wiki zenye shughuli nyingi kama mashindano au mitihani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Hariri, andika maelezo na panga",
        questions: [
          { objective: "O4", q: "Kwa nini uongeze manukuu kwenye video yako?", options: ["Yanaifanya iwe ndefu zaidi", "NCAA inayataka", "Kuficha makosa", "Watu wengi wanatazama sauti ikiwa imezimwa"], answer: 3, why: "Manukuu yanawasaidia wanaotazama bila sauti kufuatilia." },
          { objective: "O4", q: "Muziki upi ni salama zaidi kutumia?", options: ["Maktaba ya muziki wenye leseni ya app", "Wimbo wowote kutoka redioni", "Wimbo kutoka kwenye filamu", "Wimbo alioupakua rafiki yako"], answer: 0, why: "Nyimbo nyingine zinaweza kufanya video yako inyamazishwe au iondolewe." },
          { objective: "O5", q: "Chapa ililipia video yako. Kutangaza uhusiano kuwe wapi?", options: ["Kwenye hashtag za mwisho tu", "Kwenye maelezo ya chini tu", "Kusemwa na kuonyeshwa ndani ya video na karibu na mwanzo wa maelezo", "Popote pasipo"], answer: 2, why: "FTC inasema kutangaza uhusiano lazima kuonekane kwa urahisi." },
          { objective: "O6", q: "Nini ni muhimu zaidi katika kuchapisha?", options: ["Kuchapisha mara 20 kwa siku", "Kuchapisha mara moja tu kwa mwaka", "Kuiga wengine", "Kuchapisha mara kwa mara"], answer: 3, why: "Kuchapisha mara kwa mara kunajenga hadhira." },
          { objective: "O6", q: "Kufanya kwa makundi (batching) ni:", options: ["Kuchapisha bila kuhariri", "Kurekodi vipande kadhaa katika kikao kimoja", "Kufuta machapisho ya zamani", "Kununua wafuasi"], answer: 1, why: "Kufanya kwa makundi kunaokoa muda wakati wa misimu yenye shughuli nyingi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutengeneza Maudhui kwa Wanamichezo",
    questions: [
      { objective: "O1", q: "Hook ni ya muda gani?", options: ["Dakika ya mwisho", "Video nzima", "Sekunde 1-3 za kwanza", "Maelezo ya chapisho"], answer: 2, why: "Watazamaji wanaamua haraka." },
      { objective: "O1", q: "Katikati ya video fupi panapaswa kutoa:", options: ["Thamani: zoezi, tukio au kidokezo", "Kimya", "Utangulizi mrefu", "Nembo yako tu"], answer: 0, why: "Thamani inawafanya watu waendelee kutazama." },
      { objective: "O1", q: "Kwa nini uandike mpango kabla ya kurekodi?", options: ["Unajua picha unazohitaji", "Ni lazima", "Kupoteza muda", "Unafanya video ziwe ndefu zaidi"], answer: 0, why: "Kupanga kunaokoa muda na kunaleta vipande bora." },
      { objective: "O1", q: "AI inaweza kusaidia mpango wako kwa:", options: ["Kukurekodi", "Kuendesha akaunti yako", "Kupendekeza mawazo ya hook", "Kuchagua mchezo wako"], answer: 2, why: "Kutoa mawazo mengi ni moja ya uwezo wa AI." },
      { objective: "O2", q: "Kabla ya kurekodi, unapaswa:", options: ["Kuzima taa", "Kufuta lenzi yako", "Kutikisa simu", "Kuziba kipaza sauti"], answer: 1, why: "Lenzi safi inatoa picha wazi." },
      { objective: "O2", q: "Kwa apps za video fupi, rekodi:", options: ["Juu chini", "Ubavuni tu", "Lenzi ikiwa imefunikwa", "Kwa wima"], answer: 3, why: "Apps za video fupi zinatumia video za wima." },
      { objective: "O2", q: "Slow motion ni nzuri sana kwa:", options: ["Kuficha makosa", "Kuokoa nafasi ya kuhifadhi", "Kuonyesha mbinu", "Kurekodi sauti"], answer: 2, why: "Inaonyesha maelezo madogo katika mwendo wa haraka." },
      { objective: "O2", q: "Unaongea kwenye video ndani ya ukumbi wenye kelele? Jaribu:", options: ["Kupiga kelele", "Kuongeza sauti ya muziki", "Kurekodi ukiwa mbali", "Kukaa karibu au kuongeza voice-over"], answer: 3, why: "Sauti wazi inahitaji ukaribu au voice-over." },
      { objective: "O3", q: "Picha ya karibu inaonyesha:", options: ["Maelezo madogo kama mikono au miguu", "Uwanja mzima", "Anga", "Hakuna kitu"], answer: 0, why: "Picha za karibu zinaonyesha maelezo madogo." },
      { objective: "O3", q: "Kipi mara nyingi kinawagusa wafuasi?", options: ["Matokeo ya uongo", "Matukio halisi ya nyuma ya pazia", "Vipande vilivyoibwa", "Video ndefu za kimya"], answer: 1, why: "Matukio halisi yanajenga uaminifu." },
      { objective: "O4", q: "Kupunguza (trim) ni:", options: ["Kuongeza vipande zaidi", "Kubadilisha rangi", "Kukata sehemu za kipande usizozihitaji", "Kuchapisha mara mbili"], answer: 2, why: "Uhariri uliobana unashika umakini." },
      { objective: "O4", q: "Lipi ni chaguo la bure la kuhariri?", options: ["CapCut au kihariri kilichomo kwenye simu yako", "Programu ghali za studio tu", "Printa", "Kikokotoo"], answer: 0, why: "Zana za bure zinatosha kuanza." },
      { objective: "O4", q: "Kutumia wimbo maarufu kutoka nje ya app kunaweza:", options: ["Kuifanya isambae sana kila wakati", "Kukulipa pesa", "Hakuna kinachotokea", "Kufanya video yako inyamazishwe au iondolewe"], answer: 3, why: "Haki za muziki ni muhimu." },
      { objective: "O4", q: "Maandishi kwenye skrini yanapaswa kuwa:", options: ["Madogo sana", "Makubwa ya kutosha kusomeka kwenye simu", "Yamefichwa", "Kwa mitindo kumi ya herufi"], answer: 1, why: "Watazamaji wengi wako kwenye simu." },
      { objective: "O5", q: "Maelezo mazuri ya chapisho mara nyingi yanamalizika kwa:", options: ["Hashtag hamsini", "Swali ili kupata maoni", "Namba yako ya simu", "Hakuna kitu"], answer: 1, why: "Maswali yanakaribisha watu kushiriki." },
      { objective: "O5", q: "Utumie hashtag ngapi?", options: ["Hamsini za kubahatisha", "Hakuna kamwe", "Zinazovuma tu zisizohusika", "Chache zinazohusika"], answer: 3, why: "Hashtag zinazohusika zinawasaidia watu sahihi kukupata." },
      { objective: "O5", q: "Uwatambulishe (tag) watu kwenye chapisho:", options: ["Kama wamekubali tu", "Kila wakati, bila kuuliza", "Kwa kubahatisha", "Kamwe"], answer: 0, why: "Heshimu faragha ya wengine." },
      { objective: "O5", q: "Lipi ni tangazo la uhusiano na chapa lililo wazi?", options: ["\"#sp\" mwishoni", "\"collab?\"", "\"Ad\" au \"Asante [chapa] kwa vifaa vya bure\"", "Hakuna kitu"], answer: 2, why: "FTC inasema tumia maneno wazi na rahisi." },
      { objective: "O6", q: "Safu ya Hali katika ratiba ya maudhui inafuatilia:", options: ["Hisia zako", "Hali ya hewa", "Alama zako za shule", "Wazo, imerekodiwa, imehaririwa, imechapishwa"], answer: 3, why: "Hali inaonyesha kila chapisho limefika wapi." },
      { objective: "O6", q: "Wakati wa wiki ya mitihani ya mwisho, ni sawa:", options: ["Kuruka mitihani ili kuchapisha", "Kuchapisha kidogo", "Kununua maudhui", "Kuchapisha mara 20 kwa siku"], answer: 1, why: "Shule na mazoezi vinatangulia." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Mpango wa sehemu tatu",
        objective: "O1",
        notYet: "Hakuna mpango ulioandikwa, au hook au mwisho haupo.",
        meets: "Hook, thamani na mwisho vimeandikwa kabla ya kurekodi.",
        exceeds: "Hook kadhaa zililinganishwa na mpango unaorodhesha picha za mbali, za kati na za karibu."
      },
      {
        name: "Kurekodi",
        objective: "O2",
        notYet: "Vipande vyenye giza, vinavyotikisika au vyenye kelele, au watu walirekodiwa bila ruhusa.",
        meets: "Vipande vya wima, visivyotikisika, vyenye mwanga mzuri, tukio likiwa katikati na kwa ruhusa ya wengine.",
        exceeds: "Anatumia slow motion au voice-over pale inaposaidia, na sekunde za ziada kila mwisho kwa ajili ya kuhariri."
      },
      {
        name: "Kuhariri",
        objective: "O4",
        notYet: "Muda mtupu umeachwa, hakuna manukuu, au muziki usio na leseni.",
        meets: "Video ya sekunde 30 hadi 60 yenye vipande vilivyopunguzwa, maandishi ya skrini yanayosomeka, manukuu yaliyokaguliwa na muziki wenye leseni.",
        exceeds: "Mabadiliko ya picha yanaenda sambamba na hadithi wazi ya tatizo, kazi, matokeo."
      },
      {
        name: "Maelezo na kutangaza uhusiano",
        objective: "O5",
        notYet: "Maandishi ya AI yamenakiliwa kama yalivyo, hashtag nyingi, au tangazo la uhusiano na chapa halipo.",
        meets: "Maelezo kwa sauti ya mwanamichezo, yenye hashtag chache zinazohusika, na tangazo lolote la uhusiano limewekwa mahali sahihi.",
        exceeds: "Yanamalizika kwa swali linalovuta maoni na yamechapishwa wakati hadhira iko mtandaoni."
      },
      {
        name: "Ratiba ya wiki mbili",
        objective: "O6",
        notYet: "Chini ya mawazo sita zaidi, au safu hazipo.",
        meets: "Mawazo sita zaidi kwa wiki mbili yenye Tarehe, Nguzo, Wazo, Aina na Hali, yaliyopangwa kulingana na mazoezi na shule.",
        exceeds: "Kurekodi kumefanywa kwa makundi katika kikao kimoja na wiki zenye shughuli nyingi zimezuiwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaochapisha video yao na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaochapisha kufuata ratiba yao kwa angalau wiki mbili kati ya nne zinazofuata (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti watazamaji, uhifadhi au maoni bora zaidi kwenye video zilizopangwa kuliko za awali",
      "Wanafunzi wanaoripoti nafasi ya kusajiliwa na timu, ya chapa au ya jamii iliyotokana na maudhui yao"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye kamera, iliyojazwa chaji na yenye nafasi ya kuhifadhi",
      "App ya bure ya kuhariri (CapCut au kihariri kilichomo kwenye simu)",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Google Sheets au app ya madokezo kwa ajili ya ratiba",
      "Kama dakika 60 za masomo pamoja na kama dakika 60 za kurekodi na kuhariri"
    ],
    facilitatorNotes: [
      "Shiriki kanuni za timu yako kuhusu kurekodi na uhakikishe wanamichezo wanaomba ruhusa kabla ya kuwarekodi wengine, hasa watoto walio chini ya miaka 18.",
      "Waweke wanamichezo wawili wawili ili warekodiane kwa mwanga na mpangilio mzuri wa picha.",
      "Onyesha mahali pa kupata muziki wenye leseni ndani ya apps ambazo kikundi kinatumia.",
      "Kagua kila chapisho linalodhaminiwa au la zawadi kuona kama lina tangazo sahihi la uhusiano kabla halijachapishwa, na upeleke maswali ya NIL kwa ofisi ya utiifu wa kanuni (compliance).",
      "Wakumbushe wanamichezo kwamba shule na mazoezi vinatangulia; panga maudhui kulingana na mitihani na mashindano."
    ]
  }
};
