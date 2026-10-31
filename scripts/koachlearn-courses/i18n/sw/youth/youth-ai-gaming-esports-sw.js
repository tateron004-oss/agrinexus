"use strict";

// Koach Learn course (Swahili translation of youth/youth-ai-gaming-esports.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-gaming-esports-sw",
  lang: "sw",
  translationOf: "youth-ai-gaming-esports",
  category: "Youth",
  name: "AI kwa Michezo ya Video na Esports",
  skills: "Kuweka lengo la mazoezi, Kutengeneza mpango wa mazoezi kwa AI, Kuchambua mechi, Mawasiliano ya timu, Kucheza kwa usalama na haki, Kuchunguza kazi za esports",
  outcome: "kutumia msaidizi wa AI wa bure kama kocha wa mazoezi: kuweka lengo moja lililo wazi kwa mchezo unaoucheza, kutengeneza mpango wa mazoezi wa wiki moja, kuchambua mechi kwa maelezo, na kufanya uchezaji wako uwe salama, wa haki na wenye uwiano na shule na usingizi.",
  about: [
    "Kozi hii ni kwa vijana wanaocheza michezo ya video, kuanzia wanaocheza kwa kujifurahisha hadi walio kwenye timu ya esports ya shule au klabu. Huhitaji vifaa vya bei ghali. Unahitaji mchezo unaoucheza na msaidizi wa AI wa bure.",
    "Utajifunza jinsi AI tayari inavyotumika ndani ya michezo, kisha jinsi ya kutumia msaidizi wa AI kama kocha: kuweka lengo, kupanga mazoezi na kuona mifumo inayojirudia katika mechi zako. Pia utajifunza jinsi ya kuongea vizuri na timu, jinsi ya kubaki salama na mwaminifu mtandaoni, na kazi zilizopo katika esports.",
    "Angalia sheria za shule yako kuhusu AI, kiwango cha umri cha michezo yako, na umri wa chini wa kila app, na mshirikishe mzazi au mlezi kabla ya kujisajili kwa chochote. Kila somo linaisha na kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Chagua mchezo mmoja unaoucheza na ujuzi mmoja wa kuboresha. Tumia msaidizi wa AI kutengeneza mpango wa mazoezi wa wiki moja unaoingia kati ya shule, kazi za nyumbani na usingizi. Cheza na uchambue mechi moja kwa maelezo matatu yaliyoandikwa, omba AI itafute mfumo unaojirudia na ipendekeze zoezi moja, na uandike ujumbe mfupi kwa timu au klabu kuhusu utakachofanyia kazi baadaye.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wanaocheza michezo ya video, kuanzia wanaocheza kwa kujifurahisha hadi wanachama wa timu za esports za shule au klabu.",
    startingPoint: "Wanacheza angalau mchezo mmoja mara kwa mara na wanachati na wachezaji wengine mtandaoni. Wachache hufanya mazoezi kwa mpango, huchambua mechi zao, au wanajua kutambua ulaghai wa akaunti na mazungumzo yasiyo salama.",
    gap: "Vijana wengi hucheza sana bila kuwa bora zaidi, na michezo inaweza kuchukua muda wa shule na usingizi. Michezo ya mtandaoni pia huleta ulaghai, udanganyifu (cheats) na watu wasiojulikana. Kutumia AI kama kocha wa mazoezi, kwa malengo yaliyo wazi na tabia za usalama, huwasaidia vijana kuwa bora, kubaki na uwiano na kuona kazi halisi katika esports.",
    constraints: [
      "Viwango vya umri, umri wa chini wa apps na sheria za shule kuhusu AI; mzazi au mlezi anashirikishwa kabla ya kujisajili",
      "Hakuna haja ya vifaa vya bei ghali; mchezo wowote na msaidizi wa AI wa bure",
      "Shule, kazi za nyumbani na usingizi vinakuja kwanza katika kila mpango",
      "Faragha na usalama: hakuna majina halisi, shule, taarifa za kuingia (login) wala taarifa za wachezaji wengine katika chati au zana za AI",
      "Masomo mafupi kwa maneno rahisi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukifikiria mchezo unaoucheza", action: "kutambua njia ambazo AI inatumika ndani ya michezo na kile msaidizi wa AI anachoweza na asichoweza kufanya kukusaidia kufanya mazoezi", standard: "ukipata angalau 3 kati ya 4 sahihi" },
    { id: "O2", condition: "Ukipewa ujuzi mmoja wa kuboresha na ratiba yako halisi", action: "kutengeneza mpango wa mazoezi wa wiki moja kwa AI ukitumia lengo dogo linalopimika na mazoezi mafupi", standard: "unaoingia kati ya shule, kazi za nyumbani na usingizi" },
    { id: "O3", condition: "Baada ya kucheza au kutazama mechi", action: "kuandika maelezo matatu ya mechi na kuiomba AI itafute mfumo unaojirudia na ipendekeze zoezi moja", standard: "bila majina ya watumiaji (usernames) wala ujumbe binafsi wa wachezaji wengine" },
    { id: "O4", condition: "Kwa timu au klabu yako", action: "kutengeneza orodha ya callouts fupi na ujumbe wa kirafiki kwa timu kwa sauti yako mwenyewe", standard: "callouts zikiwa fupi na tulivu na ujumbe ukiwa chini ya maneno 80" },
    { id: "O5", condition: "Unapokutana na cheats, ulaghai au mazungumzo yasiyo salama", action: "kukataa cheats na ulaghai, kuzuia taarifa binafsi zisiingie kwenye chati, na kuzuia (block), kuripoti na kumwambia mtu mzima unayemwamini", standard: "bila kutoa login, msimbo wala taarifa binafsi" },
    { id: "O6", condition: "Ukitumia AI na chanzo cha kuaminika", action: "kuorodhesha kazi za esports zaidi ya mchezaji wa kulipwa na kukagua moja na mshauri au tangazo halisi la kazi", standard: "ukitaja ujuzi ambao kazi hiyo inahitaji" }
  ],
  chapters: [
    {
      name: "Sura 1: Kufanya mazoezi kwa akili zaidi ukitumia AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI inaonekana wapi katika michezo, na jinsi inavyoweza kukufundisha",
          minutes: 4,
          goal: "Taja njia ambazo AI inatumika katika michezo na njia ambazo msaidizi wa AI anaweza kukusaidia kufanya mazoezi.",
          text: [
            "Michezo imetumia AI kwa muda mrefu. Wahusika wanaoendeshwa na kompyuta unaocheza dhidi yao, mfumo unaokukutanisha na wachezaji wenye kiwango kama chako, na zana zinazokamata wadanganyifu, vyote vinaweza kutumia AI.",
            "Msaidizi wa AI kama ChatGPT, Microsoft Copilot au Google Gemini ni tofauti. Hauwezi kuona skrini yako wala kukuchezea, lakini unaweza kukusaidia kufikiri: kuweka malengo, kupanga mazoezi, kueleza mawazo ya mbinu na kutafuta mifumo katika maelezo unayoupa.",
            "Haujui kila patch au sasisho la mchezo, na unaweza kukosea. Kagua ushauri wa mbinu dhidi ya maelezo rasmi ya mchezo, nahodha au kocha wa timu yako, na matokeo yako mwenyewe."
          ],
          words: [["AI", "kifupi cha artificial intelligence (akili bandia): programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu."], ["Matchmaking", "mfumo unaochagua utacheza na nani au dhidi ya nani."], ["Patch", "sasisho linalobadilisha mchezo."]],
          slides: [
            { title: "AI ndani ya michezo", bullets: ["Wahusika wanaoendeshwa na kompyuta", "Matchmaking kwa kiwango cha ujuzi", "Zana zinazokamata wadanganyifu"] },
            { title: "Msaidizi wa AI kama kocha", bullets: ["Husaidia kuweka malengo na kupanga mazoezi", "Hueleza mawazo ya mbinu", "Hutafuta mifumo katika maelezo yako"] },
            { title: "Mipaka yake", bullets: ["Hauwezi kuona skrini yako wala kukuchezea", "Huenda haujui patch ya karibuni", "Kagua ushauri dhidi ya matokeo halisi"] }
          ],
          tryIt: "Andika mchezo unaoucheza zaidi na vitu vitatu ndani yake unavyotaka kuwa bora zaidi. Zungushia duara kile kilicho muhimu zaidi kwako sasa hivi.",
          youCanNow: "kutaja njia ambazo AI inatumika katika michezo na kueleza kile msaidizi wa AI anachoweza na asichoweza kufanya kama kocha wa mazoezi.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi kinaweza kutumia AI ndani ya mchezo?", options: ["Picha ya boksi la mchezo", "Betri ya kidhibiti (controller) chako", "Kiwango cha umri cha mchezo", "Zana zinazokamata wadanganyifu"], answer: 3, why: "Wachezaji wa kompyuta, matchmaking na zana za kuzuia udanganyifu zote zinaweza kutumia AI." },
            { objective: "O1", q: "AI inakuambia mbinu inayoonekana si sahihi baada ya sasisho jipya. Unafanya nini?", options: ["Unaitumia katika mechi yako ijayo ya ranked bila kukagua", "Unaikagua dhidi ya maelezo rasmi ya mchezo au kocha wako", "Unaacha kucheza mchezo huo", "Unamwomba mtu usiyemjua login yako"], answer: 1, why: "Huenda AI haijui patch ya karibuni, kwa hiyo kagua ushauri wake dhidi ya maelezo rasmi na matokeo yako." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuweka lengo na kutengeneza mpango wa mazoezi",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kugeuza lengo moja kuwa mpango wa mazoezi wa wiki unaofaa maisha yako.",
          text: [
            "Kuwa bora kunatokana na kufanya mazoezi ya kitu kimoja kwa makusudi, si kucheza zaidi tu. Lengo zuri ni dogo na linapimika: \"Kupiga shabaha zaidi katika practice mode\" au \"Kutaja mahali maadui walipo kila raundi\", si \"kuwa hodari\".",
            "Mpe AI mchezo wako, lengo lako, kiwango chako cha sasa na ratiba yako halisi. Kwa mfano: \"Ninacheza Rocket League. Nataka kupiga mipira ya hewani vizuri zaidi. Ninaweza kufanya mazoezi dakika 30 usiku 4 wa siku za shule baada ya kazi za nyumbani. Tengeneza mpango rahisi wa wiki moja wenye mazoezi mafupi na njia ya kufuatilia maendeleo.\"",
            "Weka shule, kazi za nyumbani, usingizi na muda wa familia kwanza. Wachezaji wa esports wa kila kiwango hupumzika, hunyoosha mwili na hupumzisha macho. Mpango unaoweza kuufuata kweli ni bora kuliko mpango mkubwa unaouacha."
          ],
          steps: ["Chagua lengo moja dogo linalopimika.", "Iambie AI mchezo wako, lengo, kiwango na muda wako halisi wa bure.", "Omba mpango wa wiki moja wenye mazoezi mafupi na njia ya kufuatilia maendeleo.", "Hakikisha unaacha muda wa shule, kazi za nyumbani na usingizi.", "Omba badiliko moja kama ni mzigo mkubwa mno."],
          words: [["Lengo linalopimika", "lengo unaloweza kukagua kwa namba au kwa ndiyo au hapana."], ["Zoezi (drill)", "mazoezi mafupi ya ujuzi mmoja."]],
          slides: [
            { title: "Fanya mazoezi kwa makusudi", bullets: ["Ujuzi mmoja kwa wakati", "Dogo na linalopimika", "Si \"kuwa hodari\" tu"] },
            { title: "Cha kuiambia AI", bullets: ["Mchezo wako na lengo lako", "Kiwango chako", "Muda wako halisi wa bure"] },
            { title: "Mpango unaoweza kuufuata", bullets: ["Shule, kazi za nyumbani na usingizi kwanza", "Mazoezi mafupi, mapumziko mafupi", "Fuatilia maendeleo kila siku"] }
          ],
          tryIt: "Omba msaidizi wa AI mpango wa mazoezi wa wiki moja kwa ujuzi uliouzungushia duara katika Somo la 1, ukitumia ratiba yako halisi. Iombe ifupishe mpango kama unachukua zaidi ya dakika 30 hadi 45 kwa siku.",
          youCanNow: "kugeuza lengo moja la mchezo kuwa mpango halisi wa mazoezi wa wiki ukitumia msaidizi wa AI.",
          quickCheck: [
            { objective: "O2", q: "Kipi kinakusaidia zaidi kuwa bora?", options: ["Kufanya mazoezi ya ujuzi mmoja kwa makusudi", "Kucheza saa nyingi zaidi bila lengo", "Kununua vifaa vipya", "Kubadilisha mchezo kila siku"], answer: 0, why: "Kuwa bora kunatokana na kufanya mazoezi ya kitu kimoja kwa makusudi." },
            { objective: "O2", q: "Unataka \"kuwa hodari.\" Unaligeuzaje kuwa lengo bora zaidi?", options: ["Unaliacha kama \"kuwa hodari\"", "Unalifanya \"kucheza wikendi nzima\"", "Unalifanya dogo na linalopimika, kama kupiga shabaha zaidi katika practice mode", "Unalifanya \"kushinda kila mechi\""], answer: 2, why: "Lengo dogo linalopimika linakuwezesha kuona maendeleo halisi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuchambua mechi ukitumia AI",
          minutes: 5,
          goal: "Andika maelezo kutoka kwa mechi na utumie AI kupata mfumo unaojirudia na kupendekeza zoezi.",
          text: [
            "Wachezaji bora huchambua mechi zao. Baada ya mechi, au ukitazama marudio (replay) kama mchezo wako unayo, andika maelezo matatu mafupi: jambo moja lililoenda vizuri, kosa moja, na lilitokea lini.",
            "Bandika maelezo hayo kwenye msaidizi wa AI na uulize: \"Haya ni maelezo yangu kutoka mechi tatu. Unaona mifumo gani inayojirudia, na ni zoezi gani moja litakalosaidia?\" AI ni hodari wa kuona marudio ambayo huenda usiyaone.",
            "Maelezo yawe kuhusu mchezo, si kuhusu watu wengine. Usibandike majina ya watumiaji ya wachezaji wengine, ujumbe wao binafsi wala chochote cha binafsi. Na ujihurumie: lengo ni kujifunza, si kujisikia vibaya."
          ],
          steps: ["Cheza au tazama replay ya mechi moja.", "Andika maelezo matatu: jambo zuri, kosa, na lilitokea lini.", "Kusanya maelezo kutoka mechi mbili au tatu.", "Iombe AI mifumo inayojirudia na zoezi moja.", "Ongeza zoezi hilo kwenye mpango wako wa mazoezi."],
          words: [["Replay (marudio)", "rekodi ya mechi unayoweza kuitazama tena."], ["Mfumo unaojirudia", "kitu kinachotokea tena na tena."]],
          slides: [
            { title: "Maelezo matatu kwa kila mechi", bullets: ["Jambo moja lililoenda vizuri", "Kosa moja", "Lilitokea lini"] },
            { title: "Iombe AI mifumo inayojirudia", bullets: ["Bandika maelezo ya mechi 2-3", "\"Unaona mifumo gani inayojirudia?\"", "\"Ni zoezi gani moja litakalosaidia?\""] },
            { title: "Yawe kuhusu mchezo", bullets: ["Bila majina wala ujumbe wa wachezaji wengine", "Jifunze, usijilaumu"] }
          ],
          tryIt: "Cheza mechi moja, andika maelezo matatu, na umwulize msaidizi wa AI anaona nini na anapendekeza zoezi gani moja. Ongeza zoezi hilo kwenye mpango wako.",
          youCanNow: "kuchambua mechi kwa maelezo na kutumia AI kupata mfumo unaojirudia na kuchagua zoezi.",
          quickCheck: [
            { objective: "O3", q: "Lengo la kuchambua mechi ni nini?", options: ["Kuwalaumu wachezaji wenzako", "Kujisikia vibaya kwa kushindwa", "Kuweka mtandaoni majina ya wachezaji wengine", "Kujifunza kutokana na kilichoenda vizuri na kilichoenda vibaya"], answer: 3, why: "Kuchambua kunakusaidia kujifunza; lengo si kujisikia vibaya." },
            { objective: "O3", q: "Maelezo yako yana jina la mtumiaji na chati ya mchezaji mwenzako. Unafanya nini kabla ya kuyabandika kwenye AI?", options: ["Unaondoa jina la mtumiaji na chati na kubaki na maelezo kuhusu mchezo", "Unayabandika yote", "Unaongeza na jina lake halisi", "Unaacha kuandika maelezo"], answer: 0, why: "Maelezo yawe kuhusu mchezo, si kuhusu watu wengine." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kufanya mazoezi kwa akili zaidi ukitumia AI",
        questions: [
          { objective: "O1", q: "Kipi ni mfano wa AI ndani ya mchezo?", options: ["Waya wa umeme", "Wahusika wanaoendeshwa na kompyuta unaocheza dhidi yao", "Boksi la mchezo", "Vipokea sauti (headset) vyako"], answer: 1, why: "Wahusika wanaoendeshwa na kompyuta mara nyingi hutumia AI." },
          { objective: "O2", q: "Lipi ni lengo bora zaidi la mazoezi?", options: ["\"Kuwa hodari\"", "\"Kucheza usiku kucha\"", "\"Kutaja mahali maadui walipo kila raundi wiki hii\"", "\"Kushinda kila kitu\""], answer: 2, why: "Ni dogo na linapimika." },
          { objective: "O2", q: "Unapaswa kuiambia AI nini ili upate mpango mzuri wa mazoezi?", options: ["Mchezo wako, lengo, kiwango na muda wako halisi wa bure", "Nywila yako", "Neno \"mpango\" tu", "Anwani ya nyumbani kwako"], answer: 0, why: "Maelezo hayo yanaiwezesha kutengeneza mpango unaokufaa." },
          { objective: "O2", q: "Mpango wako wa AI unachukua saa 3 kila usiku wa siku ya shule. Unafanya nini?", options: ["Unaacha kazi za nyumbani", "Unakesha hadi usiku sana", "Unaiomba AI iufupishe na uingie kati ya shule na usingizi", "Unaufuata hivyo hivyo"], answer: 2, why: "Mpango unaoweza kuufuata unaweka shule na usingizi kwanza." },
          { objective: "O3", q: "Unapaswa kuacha nini nje ya maelezo ya mechi unayoipa AI?", options: ["Kosa lilitokea lini", "Kilichoenda vizuri", "Majina ya watumiaji na ujumbe binafsi wa wachezaji wengine", "Jina la mchezo"], answer: 2, why: "Maelezo yawe kuhusu mchezo, si kuhusu taarifa binafsi za watu wengine." }
        ]
      }
    },
    {
      name: "Sura 2: Timu, usalama na mustakabali katika esports",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuongea vizuri na timu yako",
          minutes: 5,
          goal: "Tumia AI kusaidia kuandika callouts fupi za timu na ujumbe ulio wazi kwa klabu au timu.",
          text: [
            "Timu nzuri huongea kwa uwazi na kwa upole. Callouts ni maneno mafupi ambayo timu imekubaliana, kama \"wawili kushoto\" au \"tunahamia katikati\". Callouts fupi na tulivu ni bora kuliko ndefu au za hasira.",
            "Msaidizi wa AI anaweza kukusaidia kutengeneza orodha ya callouts kwa mchezo wako, au kuandika ujumbe kwa klabu ya shule yako: saa za mazoezi, mtakachofanyia kazi, na ukumbusho wa kuheshimiana. Uliza: \"Andika ujumbe mfupi wa kirafiki kwa klabu ya esports ya shule yangu kuhusu mazoezi ya Alhamisi. Uwe chini ya maneno 80.\"",
            "Mchezaji mwenzako akikosea, angalia mchezo unaofuata, si kulaumu. Timu zinazobaki na mtazamo chanya hucheza vizuri zaidi na hufurahia zaidi."
          ],
          steps: ["Orodhesha nyakati za kawaida zaidi katika mchezo wako zinazohitaji callout.", "Iombe AI maneno mafupi na wazi ya callout kwa kila moja.", "Kubalianeni orodha na timu yako.", "Tumia AI kuandika rasimu ya ujumbe mfupi wa kirafiki kwa timu au klabu.", "Usome, ubadilishe usikike kama wewe, kisha uushiriki."],
          words: [["Callout", "neno au maneno mafupi yanayowaambia wachezaji wenzako kinachoendelea."], ["Esports", "michezo ya video ya ushindani iliyopangwa, mara nyingi yenye timu na ligi."]],
          slides: [
            { title: "Callouts zilizo wazi", bullets: ["Maneno mafupi ambayo timu imekubaliana", "Utulivu ni bora kuliko kelele", "Mfano: \"wawili kushoto\""] },
            { title: "AI kwa ujumbe wa timu", bullets: ["Saa na mahali pa mazoezi", "Mtakachofanyia kazi", "Ukumbusho wa kuheshimiana"] },
            { title: "Baki na mtazamo chanya", bullets: ["Angalia mchezo unaofuata", "Bila kulaumu", "Ufanye usikike kama wewe"] }
          ],
          tryIt: "Omba msaidizi wa AI akusaidie kutengeneza orodha ya callouts tano kwa mchezo wako. Kisha mwombe aandike rasimu ya ujumbe mfupi kwa timu au klabu yako kuhusu mazoezi yenu yajayo, na uuandike upya kwa sauti yako mwenyewe.",
          youCanNow: "kutengeneza callouts zilizo wazi za timu na ujumbe wa kirafiki kwa timu kwa msaada wa AI.",
          quickCheck: [
            { objective: "O4", q: "Callout ni nini?", options: ["Hotuba ndefu baada ya mechi", "Ujumbe wa hasira", "Maneno mafupi yanayowaambia wachezaji wenzako kinachoendelea", "Msimbo wa kudanganya (cheat code)"], answer: 2, why: "Callouts ni maneno mafupi ambayo timu imekubaliana, kama \"wawili kushoto\"." },
            { objective: "O4", q: "AI imeandika rasimu ya ujumbe wa klabu yako, lakini unasikika mgumu. Unafanya nini?", options: ["Unautuma hivyo hivyo", "Unauandika upya usikike kama wewe kabla ya kuushiriki", "Unaurefusha sana", "Unaongeza namba za simu za wachezaji wenzako"], answer: 1, why: "Soma na ubadilishe rasimu za AI ili zisikike kama wewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kucheza kwa usalama na kwa haki",
          minutes: 5,
          goal: "Tambua cheats, ulaghai na mazungumzo yasiyo salama, na ujue la kufanya.",
          text: [
            "Cheats kama aimbots au faili zilizodukuliwa zinavunja sheria za mchezo na zinaweza kusababisha akaunti yako ifungiwe (ban). Tovuti zinazoahidi pesa za mchezo za bure, skins au \"AI cheats\" mara nyingi huiba akaunti au husakinisha programu hatari. Usizipakue kamwe wala usimpe mtu yeyote login yako.",
            "Kuwa mwangalifu kwenye chati. Usishiriki jina lako halisi, shule, anwani, namba ya simu wala picha na watu unaowajua mtandaoni tu. Mtu akikushinikiza, akikuomba siri, au akikufanya ujisikie vibaya, mzuie (block), mripoti ndani ya mchezo, na umwambie mzazi, mlezi au mtu mzima unayemwamini.",
            "Michezo ina viwango vya umri. Nchini Marekani, ESRB huipa michezo viwango, kwa mfano T (Teen) kwa takriban miaka 13 na zaidi na M (Mature) kwa miaka 17 na zaidi. Ongea na familia yako kuhusu michezo ipi na muda gani wa skrini unakufaa."
          ],
          steps: ["Usitumie kamwe cheats wala kupakua zana za \"pesa za bure\".", "Usimpe mtu yeyote kamwe login yako wala msimbo uliotumwa kwenye simu yako.", "Weka jina lako halisi, shule na anwani nje ya chati.", "Zuia (block), ripoti na umwambie mtu mzima unayemwamini jambo likionekana si sawa.", "Angalia kiwango cha umri cha mchezo pamoja na familia yako."],
          words: [["Aimbot", "cheat inayokulengea; inavunja sheria za mchezo."], ["Ban", "mchezo unapofungia akaunti yako kwa kuvunja sheria."], ["Kiwango cha umri", "alama inayosema mchezo umekusudiwa umri gani."]],
          slides: [
            { title: "Cheza kwa haki", bullets: ["Cheats zinaweza kufanya akaunti yako ifungiwe", "Tovuti za \"pesa za bure\" huiba akaunti", "Usishiriki kamwe login yako wala msimbo wa simu"] },
            { title: "Usalama kwenye chati", bullets: ["Bila jina halisi, shule wala anwani", "Bila picha kwa watu usiowajua", "Zuia, ripoti, mwambie mtu mzima unayemwamini"] },
            { title: "Viwango vya umri", bullets: ["ESRB T: kwa kawaida miaka 13 na zaidi", "ESRB M: kwa kawaida miaka 17 na zaidi", "Ongea na familia yako kuhusu michezo na muda"] }
          ],
          sources: [{ name: "ESRB: Mwongozo wa viwango (Ratings guide)", url: "https://www.esrb.org/ratings-guide/" }],
          tryIt: "Fungua mipangilio (settings) ya mchezo au jukwaa unalotumia na utafute mahali pa kumzuia na kumripoti mchezaji. Kisha tafuta kiwango cha umri cha mchezo unaoupenda zaidi kwenye tovuti ya ESRB.",
          youCanNow: "kutambua cheats, ulaghai wa akaunti na mazungumzo yasiyo salama, na kujua jinsi ya kuzuia, kuripoti na kupata msaada.",
          quickCheck: [
            { objective: "O5", q: "Kwa kawaida nini hutokea kwenye tovuti zinazoahidi pesa za mchezo za bure au skins?", options: ["Unapata vitu vya bure kwa usalama", "Mchezo wako unaenda kasi zaidi", "Hakuna kinachotokea", "Mara nyingi huiba akaunti au husakinisha programu hatari"], answer: 3, why: "Tovuti za pesa za bure na za cheats mara nyingi huiba akaunti au husakinisha programu hatari." },
            { objective: "O5", q: "Mchezaji mmoja mtandaoni anaendelea kuomba picha yako na anasema iwe siri. Unafanya nini?", options: ["Unatuma picha moja", "Unamzuia, unamripoti na unamwambia mzazi, mlezi au mtu mzima unayemwamini", "Unatunza siri", "Unamwambia shule yako badala yake"], answer: 1, why: "Shinikizo na siri ni dalili za hatari; zuia, ripoti na umwambie mtu mzima unayemwamini." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kazi za esports na kuunganisha yote pamoja",
          minutes: 6,
          goal: "Chunguza kazi zinazohusiana na esports na ukamilishe mpango wako wa mazoezi na uchambuzi wa mechi.",
          text: [
            "Ni watu wachache tu wanaokuwa wachezaji wa kulipwa, lakini esports inahitaji watu wengine wengi: makocha, mameneja wa timu, shoutcasters wanaotangaza mechi, wahariri wa video, wabunifu wa michoro, waandaaji wa matukio, na watu wanaobuni na kujaribu michezo.",
            "Uliza msaidizi wa AI: \"Kuna kazi gani katika esports zaidi ya kuwa mchezaji wa kulipwa? Masomo na klabu gani za shule husaidia kwa kila moja?\" Kisha kagua majibu na mshauri wa shule au tangazo halisi la kazi, kwa sababu AI inaweza kuwa na taarifa zilizopitwa na wakati.",
            "Shule nyingi zina klabu au timu za esports. Kama yako haina, mlezi wa klabu au mwalimu anaweza kukusaidia kuanzisha moja. Sasa unganisha yote pamoja: lengo, mpango, uchambuzi wa mechi na ujumbe wa timu."
          ],
          steps: ["Iombe AI iorodheshe kazi za esports na ujuzi ambao kila moja inahitaji.", "Chagua kazi moja inayokuvutia.", "Ikague na mshauri au tangazo halisi la kazi.", "Kamilisha lengo lako, mpango, uchambuzi wa mechi na ujumbe wa timu."],
          words: [["Shoutcaster", "mtu anayetangaza na kuchambua mechi za esports moja kwa moja."], ["Mwandaaji wa matukio", "mtu anayepanga na kuendesha mashindano."]],
          slides: [
            { title: "Zaidi ya wachezaji wa kulipwa", bullets: ["Makocha na mameneja wa timu", "Shoutcasters na wahariri wa video", "Wabunifu, wajaribu michezo, waandaaji wa matukio"] },
            { title: "Chunguza kwa AI, kisha kagua", bullets: ["Uliza kila kazi inahitaji ujuzi gani", "Kagua na mshauri au tangazo la kazi"] },
            { title: "Kazi yako ya mwisho", bullets: ["Lengo moja na mpango wa wiki moja", "Mechi moja iliyochambuliwa kwa maelezo matatu", "Zoezi moja na ujumbe wa timu"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza kwa AI mpango wa mazoezi wa wiki moja unaoingia kati ya shule na usingizi, chambua mechi moja kwa maelezo matatu, iombe AI mfumo unaojirudia na zoezi moja, na uandike ujumbe mfupi kwa timu au klabu kuhusu utakachofanyia kazi baadaye.",
          youCanNow: "kutumia AI kama kocha wa mazoezi, kucheza kwa usalama na kwa haki, na kutaja kazi za esports zaidi ya kuwa mchezaji wa kulipwa.",
          quickCheck: [
            { objective: "O6", q: "Kipi kati ya hivi ni kazi ya esports zaidi ya mchezaji wa kulipwa?", options: ["Meneja wa timu", "Muuzaji wa aimbots", "Mnunuzi wa akaunti", "Mgawaji wa skins za bure"], answer: 0, why: "Esports inahitaji makocha, mameneja, shoutcasters, wahariri, wabunifu na waandaaji wa matukio." },
            { objective: "O6", q: "AI inaorodhesha kazi za esports na ujuzi zinazohitaji. Unafanya nini baadaye?", options: ["Unaamini kila undani", "Unachagua kazi bila kufikiri", "Unapuuza orodha", "Unakagua kazi moja na mshauri wa shule au tangazo halisi la kazi"], answer: 3, why: "AI inaweza kuwa na taarifa zilizopitwa na wakati, kwa hiyo kagua na mshauri au tangazo halisi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Timu, usalama na mustakabali katika esports",
        questions: [
          { objective: "O4", q: "Nini hufanya callout iwe nzuri?", options: ["Ndefu na yenye maelezo mengi", "Fupi, tulivu na iliyokubaliwa na timu", "Ya kelele na hasira", "Tofauti kila wakati"], answer: 1, why: "Callouts fupi zilizokubaliwa ni za haraka na wazi." },
          { objective: "O5", q: "Tovuti inatoa pesa za mchezo za bure ukiweka login yako. Unafanya nini?", options: ["Unaiweka haraka", "Unashiriki kiungo na marafiki", "Unawapa msimbo wa simu yako", "Huiweki; huenda ni ulaghai"], answer: 3, why: "Tovuti za pesa za bure mara nyingi huiba akaunti." },
          { objective: "O5", q: "Mtu unayemjua mtandaoni tu anauliza unasoma shule gani. Unafanya nini?", options: ["Unamwambia", "Unatuma picha ya sare yako", "Hushiriki; mzuie na umwambie mtu mzima unayemwamini akikushinikiza", "Unampa anwani yako badala yake"], answer: 2, why: "Weka taarifa binafsi kuwa siri mtandaoni." },
          { objective: "O5", q: "Kiwango cha ESRB cha M kinamaanisha mchezo kwa kawaida ni kwa umri wa:", options: ["Miaka 17 na zaidi", "Miaka 6 na zaidi", "Miaka 10 na zaidi", "Kila mtu"], answer: 0, why: "M (Mature) kwa kawaida ni kwa miaka 17 na zaidi." },
          { objective: "O6", q: "Ipi ni kazi ya esports zaidi ya mchezaji wa kulipwa?", options: ["Shoutcaster", "Mtengenezaji wa aimbots", "Muuzaji wa akaunti", "Mjaribu wa cheats"], answer: 0, why: "Shoutcasters hutangaza mechi; nyingine zinavunja sheria." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Michezo ya Video na Esports",
    questions: [
      { objective: "O1", q: "Matchmaking katika mchezo ni:", options: ["Njia ya kununua skins", "Mfumo unaochagua utacheza na nani au dhidi ya nani", "Cheat", "Aina ya kidhibiti (controller)"], answer: 1, why: "Matchmaking huwakutanisha wachezaji, mara nyingi kwa kiwango cha ujuzi." },
      { objective: "O1", q: "Msaidizi wa AI HAWEZI kufanya nini kwa uchezaji wako?", options: ["Kusaidia kupanga mazoezi", "Kueleza mawazo ya mbinu", "Kuona skrini yako na kukuchezea", "Kutafuta mifumo katika maelezo yako"], answer: 2, why: "Msaidizi wa chati anakusaidia kufikiri; hakuchezei." },
      { objective: "O1", q: "Kwa nini ukague ushauri wa mbinu wa AI dhidi ya maelezo rasmi ya mchezo?", options: ["Huenda AI haijui patch ya karibuni", "AI iko sahihi kila wakati", "Maelezo rasmi ni haramu", "Ni sheria ya shule"], answer: 0, why: "Michezo hubadilika kwa patches na AI inaweza kuwa na taarifa zilizopitwa na wakati." },
      { objective: "O2", q: "Lengo linalopimika ni lile unaloweza:", options: ["Kutolimaliza kamwe", "Kulihisi tu", "Kulikagua kwa namba au kwa ndiyo au hapana", "Kulisahau"], answer: 2, why: "Linalopimika maana yake unaweza kulikagua." },
      { objective: "O2", q: "Kipi kinapaswa kuwekwa kwanza katika mpango wako wa mazoezi?", options: ["Vipindi vya usiku sana", "Shule, kazi za nyumbani na usingizi", "Kununua vifaa vipya", "Kucheza michezo mingine"], answer: 1, why: "Mpango mzuri unaingia kati ya shule na mapumziko." },
      { objective: "O2", q: "Zoezi (drill) ni:", options: ["Mazoezi mafupi ya ujuzi mmoja", "Msimbo wa kudanganya", "Jina la timu", "Kiwango cha mchezo"], answer: 0, why: "Mazoezi hufanya ujuzi mmoja kwa wakati." },
      { objective: "O2", q: "Mpango wako unaonekana mzigo mkubwa mno. Unafanya nini?", options: ["Unaacha kucheza michezo", "Unaiomba AI iufupishe", "Unaacha kulala", "Unaupuuza"], answer: 1, why: "Maombi ya kufuatilia hurekebisha mpango." },
      { objective: "O3", q: "Ni maelezo gani matatu unapaswa kuandika baada ya mechi?", options: ["Matokeo, hali ya hewa, kitafunio", "Majina na ujumbe wa wachezaji wengine", "Jambo zuri, kosa, na lilitokea lini", "Hakuna"], answer: 2, why: "Maelezo haya yanakusaidia kujifunza kutokana na mechi." },
      { objective: "O3", q: "Kwa nini uipe AI maelezo kutoka mechi kadhaa?", options: ["Ili iweze kuona mifumo inayojirudia", "Ili iende polepole", "Ili ikuingizie (log in) kwa niaba yako", "Inahitaji nywila yako"], answer: 0, why: "Mifumo inayojirudia huonekana katika mechi kadhaa." },
      { objective: "O3", q: "Unapaswa kufanya nini na zoezi ambalo AI inapendekeza?", options: ["Kulipuuza", "Kuliweka hadharani mtandaoni", "Kufuta maelezo yako", "Kuliongeza kwenye mpango wako wa mazoezi"], answer: 3, why: "Zoezi linasaidia tu ukilifanya." },
      { objective: "O4", q: "Callout ni:", options: ["Maneno mafupi yanayowaambia wachezaji wenzako kinachoendelea", "Cheat", "Ban", "Kiwango cha umri"], answer: 0, why: "Callouts husaidia timu kuongea haraka." },
      { objective: "O4", q: "Mchezaji mwenzako anakosea. Jibu bora ni:", options: ["Kumlaumu kwenye chati", "Kuondoka kwenye mechi", "Kuangalia mchezo unaofuata", "Kumripoti"], answer: 2, why: "Timu zenye mtazamo chanya hucheza vizuri zaidi." },
      { objective: "O4", q: "Kabla ya kushiriki ujumbe wa klabu ulioandikwa na AI, unapaswa:", options: ["Kuutuma bila kuusoma", "Kuusoma na kuufanya usikike kama wewe", "Kuongeza nywila yako", "Kuurefusha"], answer: 1, why: "Wewe unawajibika kwa unachotuma." },
      { objective: "O5", q: "Kutumia aimbot kunaweza:", options: ["Kufanya akaunti yako ifungiwe", "Kukusaidia kujifunza haraka", "Kupandisha kiwango chako cha umri", "Kukufanya uwe kocha"], answer: 0, why: "Cheats zinavunja sheria na zinaweza kusababisha ban." },
      { objective: "O5", q: "Mtu anaomba msimbo uliotumwa kwenye simu yako sasa hivi. Wewe:", options: ["Unamsomea", "Hushiriki kamwe", "Unaubandika kwenye chati", "Unautuma kwa timu yako"], answer: 1, why: "Msimbo huo unalinda akaunti yako." },
      { objective: "O5", q: "Mchezaji mtandaoni anakufanya ujisikie vibaya. Unafanya nini?", options: ["Unaendelea kuchati", "Unampa namba yako", "Unamzuia, unamripoti na unamwambia mtu mzima unayemwamini", "Unatuma picha"], answer: 2, why: "Kuzuia, kuripoti na kumwambia mtu mzima kunakulinda." },
      { objective: "O5", q: "ESRB T (Teen) kwa kawaida ni kwa umri wa:", options: ["Miaka 3 na zaidi", "Miaka 13 na zaidi", "Miaka 18 na zaidi tu", "Chini ya miaka 10"], answer: 1, why: "T kwa kawaida inafaa kwa miaka 13 na zaidi." },
      { objective: "O5", q: "Kabla ya kujisajili kwenye app mpya ya michezo au ya AI, kijana anapaswa:", options: ["Kutumia tarehe ya kuzaliwa ya uongo", "Kuruka masharti", "Kushiriki nywila ya mzazi", "Kuangalia umri wa chini na kumshirikisha mzazi au mlezi"], answer: 3, why: "Mipaka ya umri na ushiriki wa mzazi vinakuweka salama na ndani ya sheria." },
      { objective: "O6", q: "Shoutcaster:", options: ["Hutangaza mechi za esports", "Hutengeneza cheats", "Hufungia wachezaji", "Huipa michezo viwango"], answer: 0, why: "Shoutcasters ni sauti za matangazo ya esports." },
      { objective: "O6", q: "AI inakuorodheshea kazi za esports. Nini kinafuata?", options: ["Kuamini kila undani", "Kuacha shule", "Kukagua na mshauri au tangazo halisi la kazi", "Kulipia kozi mara moja"], answer: 2, why: "AI inaweza kuwa na taarifa zilizopitwa na wakati; kagua na vyanzo halisi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 1, 3, 4, 7, 8, 10, 13, 15, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Lengo na mpango", objective: "O2", notYet: "Lengo halieleweki, kama \"kuwa hodari\", au hakuna mpango.", meets: "Lengo moja dogo linalopimika na mpango wa wiki moja wenye mazoezi mafupi.", exceeds: "Mpango una njia ya kufuatilia maendeleo kila siku." },
      { name: "Uwiano na maisha", objective: "O2", notYet: "Mpango unachukua muda wa shule, kazi za nyumbani au usingizi.", meets: "Shule, kazi za nyumbani na usingizi vinakuja kwanza, na mazoezi yanaingia kati yake.", exceeds: "Pia una mapumziko, kunyoosha mwili au kupumzisha macho." },
      { name: "Uchambuzi wa mechi", objective: "O3", notYet: "Maelezo machache kuliko matatu, au maelezo kuhusu watu wengine.", meets: "Maelezo matatu (zuri, kosa, lini) na zoezi moja lililopendekezwa na AI limeongezwa kwenye mpango.", exceeds: "Maelezo kutoka mechi mbili au zaidi, na mfumo uliopatikana na AI umeelezwa kwa maneno ya mwanafunzi." },
      { name: "Ujumbe wa timu", objective: "O4", notYet: "Ujumbe haupo, ni mrefu au si wa upole.", meets: "Ujumbe mfupi wa kirafiki kuhusu kile timu itakachofanyia kazi, kwa sauti ya mwanafunzi mwenyewe.", exceeds: "Pia una orodha ya callouts iliyokubaliwa." },
      { name: "Salama na kwa haki", objective: "O5", notYet: "Mpango au maelezo yana taarifa binafsi, au yanataja cheats.", meets: "Hakuna taarifa binafsi popote, na hakuna cheats wala zana zisizo salama.", exceeds: "Mwanafunzi anaweza kuonyesha mahali pa kuzuia na kuripoti katika mchezo wake." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofuata mpango wao wa mazoezi kwa wiki nzima na kuripoti maendeleo kwenye lengo lao (utafiti wa kufuatilia)",
      "Wanafunzi wanaojiunga au kuanzisha timu ya esports ya shule au klabu ndani ya siku 90",
      "Wanafunzi wanaoripoti kumzuia na kumripoti mchezaji asiye salama au kuepuka ulaghai katika ufuatiliaji wa siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Mchezo ambao mwanafunzi tayari anaucheza na ameruhusiwa kuucheza, kwenye kifaa chochote",
      "Msaidizi wa AI wa bure ambao mwanafunzi ameruhusiwa kuutumia",
      "Karatasi au app ya maelezo kwa maelezo ya mechi na mpango wa mazoezi",
      "Kama dakika 60 kwa jumla, pamoja na wiki moja ya mazoezi kwa mpango"
    ],
    facilitatorNotes: [
      "Iendeshe pamoja na timu ya esports ya shule au klabu ili wanafunzi wapange na kuchambua pamoja.",
      "Kagua viwango vya umri vya michezo inayotumika katika programu yako na uwashirikishe familia.",
      "Hakikisha kila mpango wa mazoezi unaacha muda wa shule, kazi za nyumbani na usingizi kabla hujauidhinisha.",
      "Waonyeshe wanafunzi mahali pa kuzuia na kuripoti katika michezo ambayo kikundi chenu kinacheza, na mtaje mtu mzima wanayeweza kumwambia.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
