"use strict";

// Koach Learn course (Swahili translation of shared/email-online-communication.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "email-online-communication-sw",
  lang: "sw",
  translationOf: "email-online-communication",
  category: "Seniors and Technology",
  name: "Barua Pepe na Mawasiliano ya Mtandaoni",
  skills: "Kufungua akaunti ya barua pepe ya bure, Kuandika barua pepe iliyo wazi, Kujibu na kuambatisha faili, Kutambua barua pepe za ulaghai (phishing), Kujiunga na simu ya video",
  outcome: "kufungua akaunti ya barua pepe ya bure, kuandika na kutuma barua pepe iliyo wazi na ya adabu yenye faili lililoambatishwa, kujibu ujumbe, kutambua barua pepe bandia (phishing), na kujiunga na simu ya video kupitia kiungo.",
  about: [
    "Leo ofisi za madaktari, waajiri, wenye nyumba, shule na familia wanakufikia kwa barua pepe na simu za video. Kozi hii inakuonyesha jinsi ya kuzitumia, hatua moja ndogo kwa wakati.",
    "Utafungua akaunti ya barua pepe ya bure, utaandika ujumbe ulio wazi, utajibu, utaambatisha faili, utalinda sanduku lako la barua dhidi ya ulaghai, na utajiunga na simu ya video.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tuma barua pepe iliyo wazi na ya adabu kwa rafiki, mtu wa familia au kwako mwenyewe, yenye kichwa cha barua, salamu, sentensi fupi mbili au tatu, maneno ya kufunga na faili moja lililoambatishwa (picha au hati). Kisha jibu barua pepe uliyopokea, na uandike dalili mbili za hatari ambazo ungeziangalia kabla ya kubofya kiungo chochote.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaohitaji barua pepe na simu za video katika maisha ya kila siku: wazee wanaowasiliana na familia, watafuta kazi, wagonjwa, wazazi wanaoshughulikia mambo ya shule, wanaojitolea na watu wanaorudi katika jamii.",
    startingPoint: "Wanaweza kutumia simu au kompyuta kufungua apps na kuandika ujumbe mfupi. Wengi hawana akaunti ya barua pepe au wanayo lakini hawaitumii mara nyingi, na wachache wana uhakika wa jinsi ya kuambatisha faili, kuandika kichwa cha barua kilicho wazi, kutambua barua pepe ya ulaghai au kujiunga na simu ya video kupitia kiungo.",
    gap: "Waajiri, madaktari, shule na ofisi za serikali hutuma barua pepe na hutarajia barua pepe, na miadi mingi na mahojiano mengi hufanyika kwa simu ya video. Bila ujuzi huu watu hukosa ujumbe, hutuma barua pepe zisizo wazi au zisizo za kitaalamu, hudanganywa na barua pepe za ulaghai, au hushindwa kujiunga na miadi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama kichwa cha barua, kiambatisho na phishing yanaelezwa",
      "Vifaa: simu, tableti au kompyuta yenye intaneti",
      "Muda: kama dakika 5 kwa somo, kama dakika 60 kwa jumla",
      "Gharama: barua pepe ya bure (Gmail, Outlook.com au Yahoo Mail) na apps za bure za simu za video",
      "Faragha: wanafunzi hawaweki kamwe namba za Social Security, namba za benki au nywila katika barua pepe au ujumbe wa gumzo"
    ],
    prerequisites: "Hakuna. Kozi ya Misingi ya Intaneti inawasaidia wanafunzi ambao hawajawahi kutumia kivinjari cha wavuti."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia tovuti au app rasmi ya huduma ya barua pepe ya bure", action: "kufungua akaunti ya barua pepe yenye anwani ya kitaalamu na nywila imara, na kuingia ndani yake", standard: "ukiwa umeongeza namba ya simu au barua pepe ya akiba ili uweze kuingia tena" },
    { id: "O2", condition: "Ukiwa na sababu ya kuandika", action: "kuandika na kutuma barua pepe yenye kichwa cha barua, salamu, ujumbe mfupi na maneno ya kufunga", standard: "sehemu zote zikiwepo na anwani ya \"Kwa\" (To) ikiwa imekaguliwa kabla ya kutuma" },
    { id: "O3", condition: "Ukipewa barua pepe ulizopokea", action: "kujibu, kusambaza (forward) na kuambatisha faili, ukichagua Reply au Reply all ipasavyo", standard: "faili likiwa limeambatishwa na jibu likitumwa kwa wale tu wanaolihitaji" },
    { id: "O4", condition: "Ukipewa barua pepe yenye shaka", action: "kutambua dalili zake za hatari za phishing na kuchagua hatua salama inayofuata", standard: "ukitaja angalau dalili mbili na bila kubofya kiungo wala kulipa kamwe" },
    { id: "O5", condition: "Unapomwandikia mtu yeyote mtandaoni", action: "kuandika ujumbe wa adabu na ulio wazi usio na taarifa binafsi", standard: "wenye salamu, bila HERUFI KUBWA TUPU, na bila namba za binafsi wala nywila" },
    { id: "O6", condition: "Ukipewa kiungo cha simu ya video", action: "kujiunga na simu hiyo na kutumia vitufe vya kunyamazisha sauti (mute) na kamera", standard: "ukijiunga kwa wakati na ukinyamazisha sauti usipozungumza" }
  ],
  chapters: [
    {
      name: "Sura 1: Misingi ya barua pepe",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata akaunti ya barua pepe ya bure",
          minutes: 5,
          goal: "Fungua akaunti ya barua pepe ya bure na uingie ndani yake.",
          text: [
            "Anwani ya barua pepe ni kama anwani ya nyumba kwa ajili ya ujumbe. Inaonekana hivi: name@gmail.com. Kwanza jina ulilochagua, kisha alama ya @, kisha kampuni inayoendesha barua pepe hiyo.",
            "Huduma za barua pepe za bure ni pamoja na Gmail ya Google, Outlook.com ya Microsoft na Yahoo Mail. Ili kujisajili, nenda kwenye tovuti ya kampuni yenyewe au sakinisha app yake rasmi, kisha chagua \"Create account\" (fungua akaunti).",
            "Chagua anwani inayosikika ya kitaalamu, kama jina lako la kwanza na la ukoo, kwa sababu waajiri na madaktari wataiona. Chagua nywila imara ambayo hutumii mahali pengine popote, na uongeze namba ya simu au barua pepe ya akiba ili uweze kuingia tena ukiisahau."
          ],
          steps: ["Nenda gmail.com, outlook.com au app rasmi ya barua pepe.", "Chagua \"Create account\" (fungua akaunti).", "Chagua anwani ya kitaalamu, kama jinalakwanza.jinalaukoo.", "Tengeneza nywila ndefu ambayo hutumii mahali pengine popote.", "Ongeza namba ya simu au barua pepe ya akiba ya kurejesha akaunti.", "Andika anwani yako mpya na uweke nywila mahali salama."],
          words: [["Anwani ya barua pepe", "anwani yako ya kupokea ujumbe, kama name@gmail.com."], ["Nywila (password)", "neno au kifungu cha siri kinachokuruhusu wewe tu kuingia kwenye akaunti yako."], ["Kurejesha akaunti", "njia ya kuingia tena kwenye akaunti yako ukisahau nywila, kwa kawaida kwa msimbo unaotumwa kwenye simu yako."]],
          slides: [
            { title: "Anwani ya barua pepe", bullets: ["Inaonekana kama name@gmail.com", "Jina lako, alama ya @, kisha kampuni ya barua pepe"] },
            { title: "Huduma za barua pepe za bure", bullets: ["Gmail ya Google", "Outlook.com ya Microsoft", "Yahoo Mail"] },
            { title: "Kujisajili vizuri", bullets: ["Chagua anwani ya kitaalamu: jina lako la kwanza na la ukoo", "Tumia nywila ndefu usiyoitumia mahali pengine popote", "Ongeza namba ya simu ya kurejesha akaunti"] }
          ],
          tryIt: "Fungua akaunti ya barua pepe ya bure (au fungua ile uliyo nayo tayari). Toka (sign out), kisha uingie tena, ili ujue unaweza kuingia peke yako.",
          youCanNow: "kufungua akaunti ya barua pepe ya bure yenye anwani ya kitaalamu na kuingia ndani yake.",
          quickCheck: [
            { objective: "O1", q: "Alama ya @ inafanya nini katika anwani ya barua pepe?", options: ["Inatenganisha jina ulilochagua na kampuni inayoendesha barua pepe", "Inaifanya anwani kuwa ya siri", "Inamaanisha barua pepe ni ya dharura", "Inaonyesha nywila"], answer: 0, why: "Anwani ni jina ulilochagua, alama ya @, kisha kampuni, kama name@gmail.com." },
            { objective: "O1", q: "Unafungua akaunti ya barua pepe ili kuomba kazi. Ungechagua anwani ipi?", options: ["partyking99@...", "coolcat2000@...", "xxlovexx@...", "Jina lako la kwanza na la ukoo, kama james.carter@..."], answer: 3, why: "Waajiri wataona anwani yako, kwa hiyo anwani yenye jina lako inasikika ya kitaalamu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika barua pepe iliyo wazi",
          minutes: 5,
          goal: "Andika na utume barua pepe yenye kichwa, salamu, ujumbe mfupi na maneno ya kufunga.",
          text: [
            "Barua pepe nzuri ina sehemu tano: inakwenda kwa nani, kichwa cha barua, salamu, ujumbe mfupi, na maneno ya kufunga pamoja na jina lako.",
            "Kichwa cha barua kinamwambia msomaji barua pepe inahusu nini kabla hajaifungua, kwa mfano \"Swali kuhusu miadi yangu ya Jumanne\" au \"Ombi la kazi ya keshia\".",
            "Ujumbe uwe mfupi: sema kwa nini unaandika, unahitaji nini, na kufikia lini. Usome mara moja kabla ya kubonyeza Send (tuma), na ukague anwani ya \"Kwa\" (To) kwa makini, kwa sababu huwezi kurudisha barua pepe ikishatumwa."
          ],
          steps: ["Bonyeza Compose au New message (ujumbe mpya).", "Andika anwani ya mtu katika kisanduku cha \"Kwa\" (To).", "Andika kichwa kifupi cha barua.", "Anza na salamu, kama \"Habari Bi. Lee,\".", "Andika sentensi fupi mbili au tatu: kwa nini, unahitaji nini, kufikia lini.", "Malizia na \"Asante,\" na jina lako.", "Isome mara moja, kagua anwani, kisha bonyeza Send."],
          words: [["Kichwa cha barua (subject)", "maneno machache yanayomwambia msomaji barua pepe inahusu nini."], ["Compose", "kitufe kinachoanzisha barua pepe mpya."], ["Maneno ya kufunga", "maneno ya mwisho, kama \"Asante,\" yakifuatwa na jina lako."]],
          slides: [
            { title: "Sehemu tano za barua pepe", bullets: ["Kwa (To): anwani, kisha kichwa cha barua", "Salamu", "Ujumbe mfupi", "Maneno ya kufunga pamoja na jina lako"] },
            { title: "Kichwa kizuri cha barua", bullets: ["\"Swali kuhusu miadi yangu ya Jumanne\"", "\"Ombi la kazi ya keshia\""] },
            { title: "Kabla ya kubonyeza Send", bullets: ["Isome mara moja", "Kagua anwani ya \"Kwa\" (To)", "Huwezi kuirudisha baada ya kutuma"] }
          ],
          tryIt: "Andika na utume barua pepe kwako mwenyewe au kwa mtu wa familia yenye sehemu zote tano. Kichwa: \"Barua pepe ya mazoezi\". Ifungue upande wa mpokeaji na uone inavyoonekana.",
          youCanNow: "kuandika barua pepe iliyo wazi yenye kichwa, salamu, ujumbe mfupi na maneno ya kufunga, na kuituma.",
          quickCheck: [
            { objective: "O2", q: "Sehemu ya ujumbe mfupi wa barua pepe inapaswa kusema nini?", options: ["Nywila yako", "Kila jambo la wiki yako", "Kwa nini unaandika, unahitaji nini na kufikia lini", "Neno \"Habari\" tu"], answer: 2, why: "Ujumbe mfupi unasema kwa nini unaandika, unahitaji nini na kufikia lini." },
            { objective: "O2", q: "Unakaribia kutuma barua pepe kwa ofisi ya daktari wako. Ungekagua nini kwanza?", options: ["Rangi ya skrini", "Anwani ya \"Kwa\" (To), na kuisoma barua pepe mara moja", "Idadi ya barua pepe katika sanduku lako", "Kama kichwa kimeandikwa kwa HERUFI KUBWA TUPU"], answer: 1, why: "Huwezi kurudisha barua pepe, kwa hiyo kagua anwani na uisome kabla ya kutuma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kujibu, kusambaza na kuambatisha faili",
          minutes: 5,
          goal: "Jibu barua pepe na utume barua pepe yenye faili lililoambatishwa.",
          text: [
            "Reply (jibu) inatuma jibu lako kwa yule tu aliyekuandikia. Reply all (jibu wote) inalituma kwa kila mtu aliye kwenye ujumbe, kwa hiyo itumie tu pale kila mtu anapohitaji jibu lako. Forward (sambaza) inatuma barua pepe kwa mtu mpya.",
            "Kiambatisho ni faili unalotuma pamoja na barua pepe, kama picha, CV (wasifu wa kazi) au fomu. Tafuta alama ya pini ya karatasi (paper clip). Chagua faili kutoka kwenye simu au kompyuta yako, subiri limalize kupakia, kisha utume.",
            "Fungua tu viambatisho ulivyovitarajia kutoka kwa watu unaowajua. Mafaili kutoka kwa watu usiowajua yanaweza kubeba programu hatari."
          ],
          steps: ["Fungua barua pepe unayotaka kujibu.", "Bonyeza Reply (si Reply all, isipokuwa kila mtu analihitaji).", "Andika jibu lako na ubonyeze Send.", "Kuambatisha faili: katika barua pepe mpya, bonyeza alama ya pini ya karatasi.", "Chagua picha au hati na usubiri ipakie.", "Litaje faili katika ujumbe wako, kisha bonyeza Send."],
          words: [["Reply all", "inajibu kila mtu aliyepata barua pepe, si mtumaji peke yake."], ["Forward", "inatuma barua pepe uliyopata kwa mtu mwingine."], ["Kiambatisho (attachment)", "faili linalotumwa pamoja na barua pepe."]],
          slides: [
            { title: "Reply, Reply all, Forward", bullets: ["Reply: mtumaji peke yake", "Reply all: kila mtu aliye kwenye barua pepe", "Forward: kuituma kwa mtu mpya"] },
            { title: "Kuambatisha faili", bullets: ["Bonyeza alama ya pini ya karatasi", "Chagua picha au hati", "Subiri limalize kupakia, kisha utume"] },
            { title: "Kuwa mwangalifu", bullets: ["Fungua tu viambatisho unavyovitarajia", "Mafaili kutoka kwa watu usiowajua yanaweza kubeba programu hatari"] }
          ],
          tryIt: "Jibu barua pepe ya mazoezi kutoka Somo la 2. Kisha andika barua pepe mpya kwako mwenyewe, ambatisha picha au hati moja, na uitume. Ifungue na uhakikishe faili limefika.",
          youCanNow: "kujibu barua pepe, kusambaza moja, na kutuma faili kama kiambatisho.",
          quickCheck: [
            { objective: "O3", q: "Kiambatisho ni nini?", options: ["Kichwa cha barua", "Faili unalotuma pamoja na barua pepe, kama picha au fomu", "Anwani ya mtumaji", "Kitufe kinachofuta barua pepe"], answer: 1, why: "Kiambatisho ni faili linalotumwa pamoja na barua pepe." },
            { objective: "O3", q: "Umeambatisha CV yako, lakini bado inapakia. Ungefanya nini?", options: ["Subiri imalize kupakia, kisha utume", "Bonyeza Send mara moja", "Funga app", "Sambaza barua pepe kwa kila mtu"], answer: 0, why: "Subiri faili limalize kupakia, la sivyo huenda lisiende pamoja na barua pepe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Misingi ya barua pepe",
        questions: [
          { objective: "O1", q: "Ni anwani ipi ya barua pepe iliyo bora kutumia kuomba kazi?", options: ["coolcat99@gmail.com", "maria.lopez@gmail.com", "partytime@yahoo.com", "xx123xx@outlook.com"], answer: 1, why: "Anwani yenye jina lako la kwanza na la ukoo inaonekana ya kitaalamu." },
          { objective: "O1", q: "Kwa nini uongeze namba ya simu kwenye akaunti yako ya barua pepe?", options: ["Ili kampuni ikupigie simu kila siku", "Ili uweze kuingia tena ukisahau nywila yako", "Inafanya barua pepe iende haraka zaidi", "Inahitajika ili kutuma picha"], answer: 1, why: "Namba ya simu ya kurejesha akaunti inakuwezesha kupata msimbo wa kuingia tena." },
          { objective: "O2", q: "Kichwa cha barua kinafanya nini?", options: ["Kinamwambia msomaji barua pepe inahusu nini", "Kinashika faili lililoambatishwa", "Kinaonyesha nywila yako", "Kinafuta barua pepe za zamani"], answer: 0, why: "Kinamwambia msomaji mada kabla hajaifungua barua pepe." },
          { objective: "O3", q: "Umepata barua pepe iliyotumwa kwa watu 30. Mtumaji peke yake ndiye anahitaji jibu lako. Unabonyeza kitufe kipi?", options: ["Forward", "Reply all", "Delete", "Reply"], answer: 3, why: "Reply inatuma jibu lako kwa yule tu aliyeandika." },
          { objective: "O3", q: "Unatumaje picha pamoja na barua pepe?", options: ["Andika jina la picha katika kichwa cha barua", "Bonyeza alama ya pini ya karatasi na uchague picha", "Bandika nywila yako", "Bonyeza Reply all"], answer: 1, why: "Alama ya pini ya karatasi inaongeza kiambatisho." }
        ]
      }
    },
    {
      name: "Sura 2: Kuwa salama na kuwasiliana mtandaoni",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutambua barua pepe za phishing na za ulaghai",
          minutes: 5,
          goal: "Kagua barua pepe kwa dalili za hatari kabla ya kubofya chochote.",
          text: [
            "Phishing ni ujumbe bandia unaojifanya unatoka benki, dukani, kampuni ya usafirishaji wa vifurushi au ofisi ya serikali, ili kukudanganya ubofye kiungo au utoe taarifa binafsi.",
            "Federal Trade Commission (FTC, ofisi ya serikali ya Marekani) inaorodhesha dalili za kawaida: ujumbe unajifanya unatoka kwa shirika unalolijua, unasema kuna tatizo au zawadi, unakusukuma uchukue hatua mara moja, na unakuomba ulipe kwa njia isiyo ya kawaida kama kadi za zawadi, kutuma pesa kwa waya (wire transfer), apps za malipo au sarafu za kidijitali (cryptocurrency).",
            "Angalia pia anwani halisi ya mtumaji: \"support@amaz0n-help.win\" si Amazon. Ukiwa na shaka, usibofye. Nenda kwenye tovuti ya kampuni wewe mwenyewe, au piga namba unayoijua tayari kuwa halisi. Nchini Marekani unaweza kuripoti ulaghai kwenye reportfraud.ftc.gov."
          ],
          steps: ["Angalia anwani kamili ya mtumaji, si jina peke yake.", "Jiulize: Unajifanya ni mtu ninayemjua? Kuna tatizo au zawadi? Ninaharakishwa? Wanataka kadi za zawadi au wire transfer?", "Jibu likiwa ndiyo kwa lolote, usibofye viungo wala usifungue mafaili.", "Hakikisha kwa kwenda kwenye tovuti halisi wewe mwenyewe au kwa kupiga namba unayoijua.", "Ifute au iwekee alama ya spam. Nchini Marekani, iripoti kwenye reportfraud.ftc.gov."],
          words: [["Phishing", "ujumbe bandia uliotengenezwa kukudanganya ubofye kiungo au utoe taarifa binafsi."], ["Spam", "barua pepe taka usizozitaka."], ["FTC", "Federal Trade Commission, ofisi ya serikali ya Marekani inayoshughulikia ripoti za ulaghai."]],
          slides: [
            { title: "Phishing ni nini", bullets: ["Barua pepe bandia inayojifanya ni benki, duka au ofisi", "Inataka ubofye, ulipe au utoe taarifa binafsi"] },
            { title: "Dalili nne za hatari (FTC)", bullets: ["Inajifanya ni mtu unayemjua", "Tatizo au zawadi", "Shinikizo la kuchukua hatua sasa hivi", "Lipa kwa kadi ya zawadi, wire, app ya malipo au crypto"] },
            { title: "Kagua mtumaji", bullets: ["Angalia anwani kamili", "\"amaz0n-help.win\" si Amazon"] },
            { title: "Ukiwa na shaka", bullets: ["Usibofye", "Nenda kwenye tovuti halisi au piga namba unayoijua", "Ripoti kwenye reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Jinsi ya kuepuka ulaghai", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Ripoti ulaghai", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Fungua folda yako ya spam au junk na uchague ujumbe mmoja. Tafuta angalau dalili mbili za hatari ndani yake. Usibofye kiungo chochote. Kisha uufute.",
          youCanNow: "kukagua barua pepe kwa dalili nne za hatari na anwani halisi ya mtumaji kabla ya kubofya.",
          quickCheck: [
            { objective: "O4", q: "Phishing ni nini?", options: ["Huduma ya barua pepe ya bure", "Njia ya kuambatisha mafaili makubwa", "Njia ya adabu ya kujibu", "Ujumbe bandia unaojifanya unatoka kampuni au ofisi ili kukudanganya"], answer: 3, why: "Phishing inajifanya inatoka kwa jina linaloaminika ili ubofye au utoe taarifa." },
            { objective: "O4", q: "Barua pepe inasema umeshinda zawadi na lazima ulipe ada ndogo kwa kadi za zawadi leo. Ungefanya nini?", options: ["Nunua kadi za zawadi haraka", "Jibu kwa kutoa taarifa za benki yako", "Usibofye wala usilipe; ina dalili za ulaghai", "Isambaze kwa marafiki ili nao washinde"], answer: 2, why: "Zawadi, shinikizo la kuchukua hatua sasa na malipo kwa kadi za zawadi zote ni dalili za ulaghai ambazo FTC inaziorodhesha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Adabu njema mtandaoni",
          minutes: 4,
          goal: "Andika ujumbe wa adabu na ulio wazi unaopata jibu zuri.",
          text: [
            "Watu hawawezi kusikia sauti yako katika ujumbe ulioandikwa, kwa hiyo maneno yanaweza kusikika makali kuliko unavyokusudia. HERUFI KUBWA TUPU zinasomeka kama kupiga kelele.",
            "Kuwa na adabu na ufupishe. Tumia salamu na \"tafadhali\" na \"asante\". Jibu barua pepe muhimu ndani ya siku moja au mbili, hata kama ni kusema tu \"Nimeipata na nitajibu kufikia Ijumaa\".",
            "Kabla ya kutuma ujumbe ukiwa umekasirika, subiri kidogo na uusome tena. Usiweke taarifa binafsi kama namba yako ya Social Security, namba za benki au nywila katika barua pepe au ujumbe wa gumzo."
          ],
          steps: ["Anza na salamu.", "Sema unachohitaji kwa sentensi fupi.", "Tumia herufi za kawaida, si HERUFI KUBWA TUPU.", "Sema tafadhali na asante.", "Ukiwa umekasirika, subiri na usome tena kabla ya kutuma.", "Usiweke namba za binafsi wala nywila."],
          words: [["Netiquette", "adabu njema kwa ujumbe na machapisho mtandaoni."], ["HERUFI KUBWA TUPU (ALL CAPS)", "kuandika kwa herufi kubwa zote, jambo linalosomeka kama kupiga kelele."]],
          slides: [
            { title: "Maneno bila sauti", bullets: ["Ujumbe unaweza kusikika mkali kuliko unavyokusudia", "HERUFI KUBWA TUPU zinasomeka kama kupiga kelele"] },
            { title: "Adabu na uwazi", bullets: ["Salamu, tafadhali na asante", "Sentensi fupi", "Jibu ndani ya siku moja au mbili"] },
            { title: "Kabla ya kutuma", bullets: ["Umekasirika? Subiri na usome tena", "Hakuna namba za binafsi wala nywila"] }
          ],
          tryIt: "Andika barua pepe fupi ya adabu kwa mwenye nyumba, shule, kliniki au mwajiri (si lazima uitume) ukiuliza swali. Isome kwa sauti: inasikika ya kirafiki na iliyo wazi?",
          youCanNow: "kuandika ujumbe wa adabu na ulio wazi na kuepuka tabia zinazoleta matatizo mtandaoni.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini maneno yaliyoandikwa yanaweza kusikika makali kuliko unavyokusudia?", options: ["Watu hawawezi kusikia sauti yako katika ujumbe ulioandikwa", "Barua pepe hubadilisha maneno yako kila wakati", "Simu hufanya herufi kuwa kubwa zaidi", "Barua pepe fupi ni za kukosa adabu"], answer: 0, why: "Bila sauti yako, msomaji anategemea maneno yako tu." },
            { objective: "O5", q: "Barua pepe muhimu inafika lakini unahitaji siku chache kuijibu. Ungefanya nini?", options: ["Kuipuuza hadi uwe tayari", "Kujibu kwa HERUFI KUBWA TUPU", "Kujibu ndani ya siku moja au mbili ukisema lini utajibu", "Kuisambaza kwa mtu mwingine"], answer: 2, why: "Jibu fupi kama \"Nimeipata na nitajibu kufikia Ijumaa\" ni adabu njema." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujiunga na simu ya video",
          minutes: 5,
          goal: "Jiunge na simu ya video kupitia kiungo na utumie vitufe vya mute na kamera.",
          text: [
            "Madaktari, waajiri, shule na familia nyingi hutumia simu za video. Zinazojulikana na zilizo bure ni Zoom, Google Meet, Microsoft Teams, na FaceTime kwenye vifaa vya Apple. Kwa kawaida mtu anakutumia kiungo kwa barua pepe au ujumbe mfupi.",
            "Gusa au bofya kiungo dakika chache mapema. Kwenye simu huenda ikakuomba usakinishe app kutoka duka rasmi la apps. Ukiombwa, ruhusu maikrofoni na kamera.",
            "Jifunze vitufe viwili: maikrofoni (kunyamazisha na kurudisha sauti) na kamera (kuwasha na kuzima). Kaa ukiangalia upande wenye mwanga, mahali patulivu, na unyamazishe sauti yako usipozungumza."
          ],
          steps: ["Tafuta kiungo katika barua pepe au ujumbe mfupi kutoka kwa mtu unayemjua.", "Jiunge dakika tano mapema.", "Ukiombwa, sakinisha app rasmi au ifungue kwenye kivinjari.", "Ruhusu maikrofoni na kamera.", "Tafuta vitufe vya mute na kamera.", "Angalia upande wenye mwanga, tafuta mahali patulivu, na unyamazishe sauti usipozungumza.", "Bonyeza Leave (ondoka) au kitufe chekundu kukata simu."],
          words: [["Simu ya video", "simu ambayo mnaonana na kusikiana kwenye skrini."], ["Mute", "inazima maikrofoni yako ili wengine wasikusikie."], ["Kiungo cha mkutano", "anwani ya wavuti inayokupeleka moja kwa moja kwenye simu ya video."]],
          slides: [
            { title: "Apps za kawaida za simu za video", bullets: ["Zoom, Google Meet, Microsoft Teams", "FaceTime kwenye vifaa vya Apple", "Kwa kawaida unapata kiungo kwa barua pepe au ujumbe mfupi"] },
            { title: "Kujiunga", bullets: ["Bofya kiungo dakika chache mapema", "Ruhusu maikrofoni na kamera"] },
            { title: "Vitufe viwili vya kujua", bullets: ["Maikrofoni: kunyamazisha na kurudisha sauti", "Kamera: kuwasha na kuzima", "Kitufe chekundu au Leave: kukata simu"] },
            { title: "Uonekane na usikike vizuri", bullets: ["Angalia upande wenye mwanga", "Mahali patulivu", "Nyamazisha sauti usipozungumza"] }
          ],
          tryIt: "Mazoezi ya kazi ya mwisho: mwombe rafiki au mtu wa familia akutumie kiungo cha simu ya video (au anzisha simu ya Google Meet au Zoom wewe mwenyewe). Jiunge, nyamazisha sauti na uirudishe, zima kamera na uiwashe, kisha uondoke kwenye simu.",
          youCanNow: "kujiunga na simu ya video kupitia kiungo, kutumia vitufe vya mute na kamera, na kuondoka kwenye simu.",
          quickCheck: [
            { objective: "O6", q: "Kwa kawaida unajiungaje na simu ya video?", options: ["Kwa kupiga namba ya simu kutoka dirisha linalojitokeza", "Kwa kugusa au kubofya kiungo ambacho mtu amekutumia", "Kwa kutuma barua pepe kwa app", "Kwa kuzima kamera"], answer: 1, why: "Kwa kawaida mtu anakutumia kiungo kwa barua pepe au ujumbe mfupi, nawe unakigusa ili kujiunga." },
            { objective: "O6", q: "Mahojiano yako ya video yanaanza saa 10:00. Ungefanya nini?", options: ["Kujiunga saa 10:15", "Kujiunga kutoka chumba chenye kelele huku mwanga ukiwa nyuma yako", "Kuacha maikrofoni yako wazi muda wote wengine wanapozungumza", "Kujiunga dakika chache mapema mahali patulivu, ukiangalia upande wenye mwanga"], answer: 3, why: "Kujiunga mapema kunakupa muda wa kusakinisha app na kuruhusu maikrofoni na kamera." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuwa salama na kuwasiliana mtandaoni",
        questions: [
          { objective: "O4", q: "Barua pepe inasema akaunti yako ya benki imefungwa na lazima ubofye kiungo ndani ya saa moja ijayo. Unafanya nini?", options: ["Kubofya kiungo haraka", "Kujibu ukitoa namba ya akaunti yako", "Kwenda kwenye tovuti halisi ya benki wewe mwenyewe au kupiga namba unayoijua", "Kuisambaza kwa marafiki zako wote"], answer: 2, why: "Shinikizo na tatizo ni dalili za ulaghai; hakikisha kupitia njia unayoiamini tayari." },
          { objective: "O4", q: "Ombi lipi la malipo ni dalili ya hatari ya ulaghai?", options: ["Kulipa bili kwenye tovuti ya benki yako yenyewe", "Kulipa kwa kadi za zawadi", "Kulipa dukani kwa keshia", "Kulipa daktari kwenye mapokezi"], answer: 1, why: "FTC inaorodhesha kadi za zawadi kama malipo yasiyo ya kawaida ambayo walaghai huomba." },
          { objective: "O5", q: "Kuandika kwa HERUFI KUBWA TUPU kunaonekanaje kwa msomaji?", options: ["Kama kupiga kelele", "Kama adabu", "Kama kunyamaza", "Kama kuchekesha"], answer: 0, why: "Herufi kubwa zote zinasomeka kama kupiga kelele." },
          { objective: "O6", q: "Wakati wa simu ya video huzungumzi na kuna kelele nyumbani. Unapaswa kufanya nini?", options: ["Kuondoka kwenye simu", "Kuongeza sauti", "Kuzima kamera peke yake", "Kunyamazisha maikrofoni yako"], answer: 3, why: "Kunyamazisha sauti kunazuia wengine wasisikie kelele za nyuma." },
          { objective: "O4", q: "Watu walio Marekani wanaweza kuripoti ulaghai wapi?", options: ["reportfraud.ftc.gov", "Barua pepe ya mlaghai", "Maoni kwenye mitandao ya kijamii", "freehelp.win"], answer: 0, why: "FTC inapokea ripoti za ulaghai kwenye reportfraud.ftc.gov." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Barua Pepe na Mawasiliano ya Mtandaoni",
    questions: [
      { objective: "O1", q: "Katika anwani maria@gmail.com, gmail.com inakuambia nini?", options: ["Nywila ya Maria", "Kampuni inayoendesha barua pepe", "Namba ya simu ya Maria", "Mji wa nyumbani wa Maria"], answer: 1, why: "Sehemu iliyo baada ya @ ni kampuni ya barua pepe." },
      { objective: "O1", q: "Ipi ni huduma ya barua pepe ya bure?", options: ["Outlook.com", "Printa", "Ujumbe mfupi wa simu", "Kivinjari cha wavuti"], answer: 0, why: "Outlook.com, Gmail na Yahoo Mail ni huduma za barua pepe za bure." },
      { objective: "O1", q: "Nywila imara ya barua pepe ni:", options: ["Tarehe yako ya kuzaliwa", "\"password\"", "Ile ile unayoitumia kila mahali", "Ndefu na isiyotumika mahali pengine popote"], answer: 3, why: "Nywila ndefu na ya kipekee ndiyo ngumu zaidi kukisia au kuiba." },
      { objective: "O2", q: "Kitufe kipi kinaanzisha barua pepe mpya?", options: ["Compose au New message", "Delete (futa)", "Spam", "Archive (hifadhi)"], answer: 0, why: "Compose inaanzisha barua pepe mpya." },
      { objective: "O2", q: "Kichwa kipi cha barua ni bora zaidi kwa kuuliza kuhusu kazi?", options: ["\"hi\"", "Bila kichwa", "\"soma hii\"", "\"Ombi la kazi ya keshia\""], answer: 3, why: "Kinamwambia msomaji hasa barua pepe inahusu nini." },
      { objective: "O2", q: "Kabla ya kubonyeza Send, unapaswa:", options: ["Kuongeza namba yako ya benki", "Kuondoa salamu", "Kuiandika kwa herufi kubwa zote", "Kukagua anwani ya \"Kwa\" (To) na kuisoma barua pepe mara moja"], answer: 3, why: "Huwezi kurudisha barua pepe, kwa hiyo ikague kwanza." },
      { objective: "O2", q: "Sehemu ipi inakuja mwishoni mwa barua pepe?", options: ["Kichwa cha barua", "Anwani ya \"Kwa\" (To)", "Maneno ya kufunga pamoja na jina lako", "Pini ya karatasi"], answer: 2, why: "Maneno ya kufunga kama \"Asante, Ana\" yanamaliza barua pepe." },
      { objective: "O3", q: "Forward inamaanisha:", options: ["Kumjibu mtumaji peke yake", "Kufuta barua pepe", "Kutuma barua pepe kwa mtu mpya", "Kuiwekea alama ya spam"], answer: 2, why: "Forward inatuma barua pepe uliyopata kwa mtu mwingine." },
      { objective: "O3", q: "Alama ya pini ya karatasi inatumika:", options: ["Kuambatisha faili", "Kubadilisha mtindo wa herufi", "Kumzuia mtumaji", "Kuchapisha barua pepe"], answer: 0, why: "Pini ya karatasi inaongeza kiambatisho." },
      { objective: "O3", q: "Mtu usiyemjua anakutumia faili ambalo hukulitarajia. Unapaswa:", options: ["Kulifungua mara moja", "Kulisambaza kwa marafiki", "Kutolifungua", "Kujibu ukitoa nywila yako"], answer: 2, why: "Mafaili usiyoyatarajia kutoka kwa watu usiowajua yanaweza kubeba programu hatari." },
      { objective: "O3", q: "Reply all inapaswa kutumika:", options: ["Kila wakati", "Pale tu kila mtu aliye kwenye barua pepe anapohitaji jibu lako", "Kamwe", "Kutuma spam"], answer: 1, why: "Reply all inamfikia kila mtu, kwa hiyo itumie tu wote wanapolihitaji." },
      { objective: "O4", q: "Phishing ni:", options: ["Ujumbe bandia unaojaribu kukudanganya", "Aina ya kiambatisho", "App ya simu ya video", "Nywila imara"], answer: 0, why: "Ujumbe wa phishing unajifanya ni halisi ili kuiba taarifa au pesa." },
      { objective: "O4", q: "Jina la mtumaji linasema \"Amazon\" lakini anwani ni support@amaz0n-help.win. Hii ni:", options: ["Kawaida", "Kiungo cha simu ya video", "Anwani kuu ya Amazon", "Dalili ya hatari"], answer: 3, why: "Anwani halisi ya mtumaji hailingani na kampuni." },
      { objective: "O4", q: "Ipi ni moja ya dalili nne za ulaghai za FTC?", options: ["Ujumbe ni mfupi", "Shinikizo la kuchukua hatua mara moja", "Una salamu", "Unatoka kwa rafiki uliyempigia simu"], answer: 1, why: "Walaghai hukuharakisha ili usisimame kufikiri." },
      { objective: "O4", q: "Huna uhakika kama barua pepe kutoka benki yako ni halisi. Hatua salama zaidi ni:", options: ["Kubofya kiungo chake ili kukagua", "Kujibu na kuuliza", "Kwenda kwenye tovuti ya benki wewe mwenyewe au kupiga namba iliyo kwenye kadi yako", "Kutuma namba ya akaunti yako"], answer: 2, why: "Tumia njia unayoijua tayari kuwa halisi, si kiungo cha barua pepe." },
      { objective: "O5", q: "Umekasirika na umeandika barua pepe ya hasira. Adabu njema inasema:", options: ["Itume kwa herufi kubwa zote", "Subiri na uisome tena kabla ya kutuma", "Itume kwa kila mtu", "Ongeza namba yako ya benki"], answer: 1, why: "Kusubiri kunakusaidia kutuma ujumbe uliotulia na ulio wazi zaidi." },
      { objective: "O5", q: "Ni kipi hupaswi kamwe kuweka katika barua pepe?", options: ["\"Asante\"", "Salamu", "Namba yako ya Social Security", "Kichwa cha barua"], answer: 2, why: "Namba za binafsi katika barua pepe zinaweza kuibiwa." },
      { objective: "O6", q: "Ipi ni app ya kawaida ya simu ya video?", options: ["Zoom", "Kikokotoo", "Notepad", "Picha za kamera"], answer: 0, why: "Zoom, Google Meet, Teams na FaceTime ni apps za simu za video." },
      { objective: "O6", q: "Unapojiunga na simu ya video, tabia nzuri ni:", options: ["Kujiunga dakika 20 umechelewa", "Kukaa dirisha lenye mwanga mkali likiwa nyuma yako", "Kujiunga dakika chache mapema na kuangalia upande wenye mwanga", "Kuacha TV ikiwa na sauti kubwa"], answer: 2, why: "Kujiunga mapema na kuangalia upande wenye mwanga kunasaidia simu iende vizuri." },
      { objective: "O6", q: "Kwenye simu ya video, kitufe cha maikrofoni kinakuwezesha:", options: ["Kupiga picha", "Kutuma faili", "Kuzima intaneti", "Kunyamazisha na kurudisha sauti yako"], answer: 3, why: "Kitufe cha maikrofoni kinazima na kuwasha sauti yako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      5,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Barua pepe iliyo wazi",
        objective: "O2",
        notYet: "Kichwa cha barua, salamu, ujumbe au maneno ya kufunga havipo.",
        meets: "Kichwa cha barua, salamu, sentensi fupi mbili au tatu na maneno ya kufunga pamoja na jina lako.",
        exceeds: "Kichwa cha barua kinasema hasa barua pepe inahusu nini na ujumbe unasema unahitaji nini na kufikia lini."
      },
      {
        name: "Kiambatisho",
        objective: "O3",
        notYet: "Hakuna faili lililoambatishwa, au halikumaliza kupakia.",
        meets: "Picha au hati moja imeambatishwa na inafika pamoja na barua pepe.",
        exceeds: "Faili lina jina lililo wazi na barua pepe inataja kilichoambatishwa."
      },
      {
        name: "Jibu",
        objective: "O3",
        notYet: "Hakuna jibu lililotumwa, au Reply all ilitumika wakati mtu mmoja tu ndiye aliyelihitaji.",
        meets: "Jibu lilitumwa kwa mtu sahihi.",
        exceeds: "Jibu ni la adabu na linajibu kila swali lililo katika barua pepe."
      },
      {
        name: "Adabu na faragha",
        objective: "O5",
        notYet: "Barua pepe imeandikwa kwa HERUFI KUBWA TUPU, inasikika bila adabu, au ina namba za binafsi au nywila.",
        meets: "Barua pepe ina adabu, inatumia herufi za kawaida na haina taarifa binafsi.",
        exceeds: "Inatumia tafadhali na asante na inasomeka vizuri mara ya kwanza."
      },
      {
        name: "Dalili za phishing",
        objective: "O4",
        notYet: "Dalili za hatari ni chini ya mbili, au dalili moja si sahihi.",
        meets: "Dalili mbili sahihi za hatari za kuangalia kabla ya kubofya kiungo chochote.",
        exceeds: "Pia inasema cha kufanya badala ya kubofya na mahali pa kuripoti ulaghai."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa kigezo cha tathmini cha kazi ya mwisho",
      "Wanafunzi wanaosema wametuma barua pepe halisi kwa mwajiri, daktari, shule au ofisi ndani ya siku 30 baada ya kozi (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaosema wamejiunga na simu ya video au miadi ya daktari kwa video (telehealth) wao wenyewe",
      "Wanafunzi wanaosema wametambua barua pepe ya phishing na hawakuibofya"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, tableti au kompyuta yenye intaneti",
      "Akaunti ya barua pepe ya bure (Gmail, Outlook.com au Yahoo Mail), au muda wa kufungua moja",
      "Picha au hati ya kuambatisha, isiyo na kitu chochote cha binafsi",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Kujisajili kwa akaunti kunaweza kuomba namba ya simu kwa uthibitisho; acha kila mwanafunzi aamue cha kutoa, na uruhusu muda wa ziada katika kipindi cha kwanza.",
      "Panga wanafunzi wawili wawili ili waandikiane barua pepe kwa mazoezi ya kujibu na ya kuambatisha.",
      "Tumia mifano ya phishing iliyochapishwa au ya picha za skrini; usifungue kamwe barua pepe au kiungo halisi chenye shaka darasani.",
      "Fanya simu moja fupi ya video ya mazoezi na kikundi ili kila mtu ajaribu vitufe vya mute na kamera.",
      "Wakumbushe wanafunzi wasimpe mtu yeyote nywila ya barua pepe yao kamwe, hata mwalimu."
    ]
  }
};
