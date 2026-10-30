"use strict";

// Koach Learn course (Swahili translation of shared/intro-to-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "intro-to-ai-sw",
  lang: "sw",
  translationOf: "intro-to-ai",
  category: "Seniors and Technology",
  name: "Utangulizi wa Akili Bandia (AI)",
  skills: "Kueleza AI ni nini, Kutambua AI katika maisha ya kila siku, Kuandika prompt zilizo wazi, Kuboresha na kukagua majibu, Kutumia AI kwa haki na kwa usalama",
  outcome: "kueleza kwa maneno rahisi akili bandia ni nini na jinsi inavyojifunza, kuitambua katika zana unazotumia tayari, na kutumia msaidizi wa AI wa bure kumaliza kazi halisi ya kila siku: kuuliza kwa uwazi, kuboresha jibu, kulikagua, na kutoweka taarifa za binafsi ndani yake.",
  about: [
    "Akili bandia, au AI, iko kwenye simu, ramani, barua pepe, tovuti za ununuzi na tovuti za kazi. Kozi hii inaeleza AI ni nini kwa maneno rahisi, kisha inakuonyesha jinsi ya kuitumia vizuri. Ni kwa kila mtu: babu na bibi, wanafunzi, watafuta kazi, watu wa kujitolea na timu ndogo.",
    "Katika Sura ya 1 utajifunza AI ni nini, jinsi inavyojifunza kutoka kwa mifano, na mahali unapokutana nayo tayari. Katika Sura ya 2 utatumia msaidizi wa AI wa bure kufanya kazi halisi, kukagua anachosema, na kumtumia kwa haki na kwa usalama.",
    "Kila somo linachukua kama dakika tano: soma, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Jaribio fupi la maarifa linamaliza kila sura, na mtihani wa maswali 20 unamaliza kozi."
  ],
  finalTask: "Chagua kazi moja halisi, kama kupanga chakula cha jioni cha familia, ujumbe wa kuomba watu wa kujitolea, au mpango wa masomo wa wiki. Tumia msaidizi wa AI wa bure kuifanya: andika prompt iliyo wazi, omba maboresho mawili, kagua ukweli mmoja katika jibu kwenye tovuti rasmi au ya kuaminika, na hakikisha prompt haina taarifa za binafsi. Kisha mweleze rafiki kwa sentensi tatu AI ni nini na kwa nini ulikagua jibu.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima walio wapya katika akili bandia: wazee, wanafunzi, watafuta kazi, watu wa kujitolea, watu wanaorudi kutoka gerezani, na wafanyakazi wa mashirika yasiyo ya faida na timu ndogo. Wengi wamesikia kuhusu AI kwenye habari lakini hawajawahi kutumia msaidizi wa AI kwa makusudi.",
    startingPoint: "Wanaweza kutumia simu au kompyuta kufungua kivinjari cha wavuti, kuandika ujumbe mfupi na kutumia programu (apps) za kawaida kama ramani, barua pepe na video. Wachache wanaweza kusema AI ni nini, iko wapi katika programu zao, au jinsi ya kumwomba msaidizi wa AI msaada na kukagua anachosema.",
    gap: "Sasa AI iko kwenye simu, ramani, barua pepe, ununuzi, benki na tovuti za kazi, na wasaidizi wa AI wa bure wanaweza kuokoa muda mwingi. Watu wasioielewa huacha zana yenye manufaa, au huiamini kupita kiasi, hushiriki taarifa za binafsi, au hudanganywa na ulaghai unaotumia AI.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno jipya, kama prompt, data na upendeleo (bias), linaelezwa",
      "Vifaa: simu, tableti au kompyuta yenye intaneti na kivinjari cha wavuti",
      "Muda: masomo ya dakika 4 hadi 6, kama dakika 60 kwa jumla",
      "Gharama: wasaidizi wa AI wa bure tu (ChatGPT, Microsoft Copilot au Google Gemini); hakuna haja ya mpango wa kulipia",
      "Faragha: wanafunzi hawaandiki kamwe namba za kitambulisho, nywila, taarifa za benki, namba za matibabu au anwani kamili kwa msaidizi wa AI"
    ],
    prerequisites: "Hakuna. Wanafunzi wanapaswa kuweza kufungua kivinjari cha wavuti na kuandika ujumbe mfupi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Bila kuangalia maandishi", action: "kueleza kwa maneno rahisi akili bandia na AI ya kuzalisha (generative AI) ni nini, na kwa nini AI inaweza kusikika na uhakika na bado ikakosea", standard: "kwa sentensi mbili au tatu zinazotumia mawazo ya mifumo (patterns) na makisio" },
    { id: "O2", condition: "Ukipewa mfano rahisi kama kichujio cha barua taka", action: "kueleza jinsi AI inavyojifunza kutoka kwa data na jinsi data duni au ya upande mmoja inavyoleta majibu yenye upendeleo", standard: "ukitaja mifano, mifumo na njia moja ambayo makisio yanaweza kukosa haki" },
    { id: "O3", condition: "Ukitumia simu au kompyuta yako mwenyewe", action: "kutambua angalau mahali watano unapotumia AI tayari na kupata mpangilio (setting) mmoja unaoidhibiti", standard: "ukiwa na mifano mitano sahihi na mpangilio mmoja umefunguliwa" },
    { id: "O4", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuandika prompt iliyo wazi inayosema unachohitaji, hali yako na jinsi unavyotaka jibu", standard: "ikiwa na sehemu zote tatu na bila taarifa za binafsi" },
    { id: "O5", condition: "Ukipewa jibu la kwanza kutoka kwa msaidizi wa AI", action: "kuboresha jibu kwa maombi ya kufuatilia na kukagua ukweli wake kwenye chanzo rasmi au cha kuaminika", standard: "kwa angalau maombi mawili ya kufuatilia na angalau ukweli mmoja umekaguliwa" },
    { id: "O6", condition: "Kabla ya kutuma prompt au kutumia maneno yaliyoandikwa na AI", action: "kukagua prompt kama ina taarifa za binafsi, kufuata sheria za msaada wa AI na kujibu kwa usalama ulaghai unaotumia AI", standard: "kila taarifa ya binafsi ikiwa imebadilishwa kwa kishika-nafasi na hatua salama sahihi ikichaguliwa kila mara" }
  ],
  chapters: [
    {
      name: "Sura 1: AI ni nini",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI kwa maneno rahisi",
          minutes: 4,
          goal: "Eleza kwa sentensi mbili akili bandia ni nini.",
          text: [
            "Akili bandia (AI) ni programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu: kuelewa maneno yanayosemwa, kutambua uso kwenye picha, kupendekeza wimbo, kutafsiri sentensi, au kuandika jibu la swali.",
            "AI haifikiri wala haihisi kama mtu. Ni hodari sana wa kupata mifumo (patterns) katika mifano mingi mno na kutumia mifumo hiyo kukisia. Makisio mazuri yanaweza kuonekana ya busara; makisio mabaya yanaweza kuonekana na uhakika vilevile.",
            "Kuna aina nyingi za AI. Aina inayozungumzwa zaidi leo ni AI ya kuzalisha (generative AI): zana kama ChatGPT, Microsoft Copilot na Google Gemini zinazotengeneza maandishi, picha au sauti mpya unapoomba."
          ],
          words: [["Akili bandia (AI)", "programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu, kama kuelewa maneno au kujibu maswali."], ["Mfumo (pattern)", "kitu kinachojirudia kwa njia unayoweza kutabiri."], ["AI ya kuzalisha (generative AI)", "AI inayotengeneza maandishi, picha au sauti mpya unapoiomba."]],
          slides: [
            { title: "AI ni...", bullets: ["Programu za kompyuta zinazofanya kazi zinazohitaji mtu kwa kawaida", "Maneno, picha, mapendekezo, tafsiri, uandishi"] },
            { title: "Inavyofanya kazi, kwa mstari mmoja", bullets: ["Inapata mifumo katika mifano mingi", "Kisha inakisia kwa kadiri iwezavyo"] },
            { title: "Si mtu", bullets: ["Haifikiri wala haihisi", "Makisio mabaya yanaweza kusikika na uhakika kama mazuri"] },
            { title: "AI ya kuzalisha", bullets: ["Inatengeneza maandishi, picha au sauti mpya", "Mifano: ChatGPT, Microsoft Copilot, Google Gemini"] }
          ],
          tryIt: "Bila kuangalia nyuma, sema au andika sentensi mbili zinazomweleza AI mtu ambaye hajawahi kuisikia. Tumia maneno \"mifumo\" na \"kukisia\".",
          youCanNow: "kueleza kwa maneno rahisi AI ni nini na kwa nini inaweza kukosea.",
          quickCheck: [
            { objective: "O1", q: "Katika kozi hii, AI ya kuzalisha inafanya nini?", options: ["Inapanga barua pepe kwenye folda tu", "Inatengeneza maandishi, picha au sauti mpya unapoomba", "Inafikiri na kuhisi kama mtu", "Inajua jibu la kweli kila wakati"], answer: 1, why: "Zana za AI ya kuzalisha kama ChatGPT, Copilot na Gemini zinatengeneza maandishi, picha au sauti mpya." },
            { objective: "O1", q: "Rafiki anasema, \"AI ilisikika na uhakika sana, kwa hiyo lazima iko sahihi.\" Ungemwambia nini?", options: ["Ni kweli; AI haikosei kamwe inaposikika na uhakika", "Zana za AI za kulipia tu ndizo zinaweza kukosea", "AI inakisia kutoka kwa mifumo, kwa hiyo makisio mabaya yanaweza kusikika na uhakika vilevile", "AI inakosea tu intaneti ikiwa polepole"], answer: 2, why: "AI inatumia mifumo kukisia, na makisio mabaya yanaweza kuonekana na uhakika kama mazuri." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Jinsi AI inavyojifunza kutoka kwa mifano",
          minutes: 5,
          goal: "Eleza jinsi AI inavyojifunza, ukitumia mfano rahisi.",
          text: [
            "AI nyingi leo hujifunza kutoka kwa mifano badala ya sheria anazoandika mtu. Ili kufundisha programu kutambua barua taka (spam), watu huionyesha barua pepe nyingi zilizowekwa alama \"taka\" au \"si taka\". Programu inapata mifumo, kama maneno fulani au viungo vya ajabu, na kuitumia kwenye barua pepe mpya.",
            "Mifano ambayo AI hujifunza kutoka kwayo inaitwa data. Data nzuri na ya aina mbalimbali huleta AI bora. Data ikiwa ya zamani, ya upande mmoja au ikikosa makundi fulani ya watu, makisio ya AI yatakuwa ya zamani, ya upande mmoja au yasiyo ya haki pia. Hii inaitwa upendeleo (bias).",
            "Zana za uandishi kama ChatGPT zilijifunza kutoka kwa maandishi mengi mno, kwa hiyo ni hodari wa kutabiri maneno gani yanafuata. Ndiyo sababu zinaandika vizuri, na pia ndiyo sababu zinaweza kuandika kitu kinachosikika sahihi lakini si kweli."
          ],
          steps: ["Watu wanakusanya mifano mingi (data).", "Programu inatafuta mifumo katika mifano hiyo.", "Inatumia mifumo hiyo kukisia kuhusu kitu kipya.", "Watu wanakagua makisio na kuipa mifano bora inapokosea."],
          words: [["Data", "mifano, namba, maneno au picha ambazo AI hujifunza kutoka kwazo."], ["Upendeleo (bias)", "data inapoegemea upande mmoja, kwa hiyo makisio ya AI hayawatendei haki baadhi ya watu."], ["Mafunzo (training)", "hatua ambapo AI inajifunza mifumo kutoka kwa data."]],
          slides: [
            { title: "Kujifunza kutoka kwa mifano", bullets: ["Ionyeshe barua pepe nyingi zenye alama taka au si taka", "Inapata mifumo", "Inapanga barua pepe mpya kwa mifumo hiyo"] },
            { title: "Data ni muhimu", bullets: ["Data nzuri ya aina mbalimbali = makisio bora", "Data ya zamani au ya upande mmoja = makisio ya zamani au yasiyo ya haki"] },
            { title: "Kwa nini AI ya uandishi inaweza kukosea", bullets: ["Inatabiri maneno yanayofuata kutoka kwa mifumo", "Inaweza kusikika sahihi na bado isiwe kweli"] }
          ],
          tryIt: "Fikiria kitu ulichojifunza kutoka kwa mifano, kama kutofautisha tunda lililoiva na lisiloiva. Andika jinsi ungeifundisha kompyuta jambo hilo: ungeionyesha mifano gani, na inaweza kukosea wapi?",
          youCanNow: "kueleza jinsi AI inavyojifunza kutoka kwa data na kwa nini data duni huleta majibu duni au yasiyo ya haki.",
          quickCheck: [
            { objective: "O2", q: "Upendeleo (bias) katika AI ni nini?", options: ["Makisio yanayoegemea upande mmoja kwa sababu data ilikuwa ya zamani, ya upande mmoja au ilikosa makundi fulani", "Mpangilio unaofanya AI iwe ya haraka zaidi", "Aina ya virusi vya kompyuta", "Njia ya kufanya skrini ing'ae zaidi"], answer: 0, why: "Mifano ikiwa ya upande mmoja au ikikosa makundi ya watu, makisio ya AI yanakosa haki pia." },
            { objective: "O2", q: "Unataka kufundisha programu kutofautisha tunda lililoiva na lisiloiva. Ungefanya nini kwanza?", options: ["Kuandika sheria moja na kutumaini itafanya kazi", "Kuionyesha picha moja tu ya ndizi", "Kuiambia ikisie bila mifano", "Kuionyesha picha nyingi za matunda, kila moja ikiwa na alama limeiva au halijaiva"], answer: 3, why: "AI hujifunza kwa kupata mifumo katika mifano mingi yenye alama, inayoitwa data." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutambua AI katika siku yako",
          minutes: 4,
          goal: "Tafuta angalau mahali watano unapotumia AI tayari.",
          text: [
            "Huenda unatumia AI kila siku bila kuiita hivyo. Ramani ya simu yako huchagua njia ya haraka zaidi kuepuka msongamano. Barua pepe yako huhamisha barua taka kwenye folda ya taka. Programu za video na muziki hupendekeza cha kutazama baadaye. Simu yako hufunguka kwa uso wako. Kibodi yako hupendekeza neno linalofuata.",
            "Wasaidizi wa sauti kama Siri, Google Assistant na Alexa hutumia AI kuelewa unachosema. Benki hutumia AI kutambua malipo ya kadi yanayoonekana si ya kawaida. Tovuti za kazi huitumia kulinganisha CV yako (wasifu wa kazi) na nafasi za kazi.",
            "Kujua AI iko wapi kunakusaidia kuuliza maswali mazuri: kwa nini programu ilipendekeza hiki? Naweza kuizima? Inajua nini kunihusu? Programu nyingi zina mipangilio (settings) ambapo unaweza kuona au kubadilisha hili."
          ],
          words: [["Msaidizi wa sauti", "AI unayoongea nayo kwa sauti, kama Siri, Google Assistant au Alexa."], ["Pendekezo", "kitu ambacho programu inakupendekezea kulingana na ulichochagua wewe au watu kama wewe hapo awali."]],
          slides: [
            { title: "AI unayotumia tayari", bullets: ["Ramani zinazoepuka msongamano", "Vichujio vya barua taka kwenye barua pepe", "Video, nyimbo na bidhaa zinazopendekezwa"] },
            { title: "AI zaidi ya kila siku", bullets: ["Kufungua simu kwa uso", "Wasaidizi wa sauti: Siri, Google Assistant, Alexa", "Arifa za benki kuhusu matumizi ya kadi yasiyo ya kawaida"] },
            { title: "Maswali mazuri ya kuuliza", bullets: ["Kwa nini ilipendekeza hiki?", "Naweza kuizima?", "Inajua nini kunihusu? Angalia mipangilio"] }
          ],
          tryIt: "Pitia simu au kompyuta yako na uorodheshe mahali watano panapotumia AI. Kwa mojawapo, fungua mipangilio yake na utafute chaguo moja unaloweza kubadilisha.",
          youCanNow: "kutambua AI katika zana unazotumia kila siku na kupata mipangilio inayoidhibiti.",
          quickCheck: [
            { objective: "O3", q: "Kipi kati ya hivi kinatumia AI kuelewa unachosema?", options: ["Kalenda ya karatasi", "Taa ya mezani", "Msaidizi wa sauti kama Siri au Alexa", "Ratiba ya basi iliyochapishwa"], answer: 2, why: "Wasaidizi wa sauti hutumia AI kuelewa maneno yanayosemwa." },
            { objective: "O3", q: "Programu ya muziki inaendelea kupendekeza nyimbo usizozipenda na unajiuliza inajua nini kukuhusu. Ungefanya nini?", options: ["Kufuta simu yako", "Kufungua mipangilio ya programu kuona au kubadilisha inachotumia", "Kuacha kusikiliza muziki", "Kuandika nywila yako kwenye kisanduku cha kutafuta"], answer: 1, why: "Programu nyingi zina mipangilio ambapo unaweza kuona au kubadilisha jinsi mapendekezo yanavyofanya kazi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI ni nini",
        questions: [
          { objective: "O1", q: "Maelezo gani rahisi ndiyo bora zaidi kuhusu AI?", options: ["Roboti inayofikiri na kuhisi", "Tovuti ambayo iko sahihi kila wakati", "Aina ya waya wa intaneti", "Programu za kompyuta zinazopata mifumo na kukisia ili kufanya kazi ambazo kwa kawaida watu hufanya"], answer: 3, why: "AI inapata mifumo katika mifano na kuitumia kukisia." },
          { objective: "O1", q: "AI ya kuzalisha inafanya nini?", options: ["Inatengeneza simu zilizoharibika", "Inachaji betri yako", "Inahifadhi faili tu", "Inatengeneza maandishi, picha au sauti mpya unapoomba"], answer: 3, why: "Kuzalisha maana yake ni kutengeneza maudhui mapya." },
          { objective: "O2", q: "AI ilifunzwa kwa picha za kundi moja tu la watu. Tatizo linalowezekana ni lipi?", options: ["Itafanya kazi sawa kwa kila mtu", "Itaenda kwa kasi zaidi", "Makisio yake yanaweza kukosa haki au kuwa makosa kwa makundi mengine", "Itaacha kufanya kazi"], answer: 2, why: "Data ya upande mmoja husababisha upendeleo." },
          { objective: "O2", q: "\"Data\" katika AI ni nini?", options: ["Mifano ambayo AI hujifunza kutoka kwayo", "Skrini ya simu", "Aina ya nywila", "Bei ya programu"], answer: 0, why: "Data ni mifano, maneno, namba au picha ambazo AI hujifunza kutoka kwazo." },
          { objective: "O3", q: "Kipi kati ya hivi ni matumizi ya kila siku ya AI?", options: ["Swichi ya taa", "Kalenda ya karatasi", "Programu ya ramani inayochagua njia ya kuepuka msongamano", "Saa ya kuzungusha ufunguo"], answer: 2, why: "Programu za ramani hutumia AI kutabiri msongamano na kuchagua njia." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia AI vizuri",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kumwomba msaidizi wa AI msaada",
          minutes: 5,
          goal: "Fungua msaidizi wa AI wa bure na uandike prompt iliyo wazi yenye sehemu tatu.",
          text: [
            "Wasaidizi wa AI wa bure ni pamoja na ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) na Google Gemini (gemini.google.com). Wanafanya kazi kwenye kivinjari cha wavuti au kama programu kutoka duka rasmi la programu.",
            "Unachoandika kinaitwa prompt (ombi). Prompt iliyo wazi ina sehemu tatu: unachohitaji, kidogo kuhusu hali yako, na jinsi unavyotaka jibu. Kwa mfano: \"Ninaendesha ghala dogo la chakula la kanisa. Andika ujumbe wa kirafiki wa mistari 4 unaoomba watu wa kujitolea wa Jumamosi. Tumia maneno rahisi.\"",
            "Prompt ya neno moja kama \"watu wa kujitolea\" inaifanya AI ikisie unamaanisha nini, kwa hiyo jibu ni la jumla na lisilo na manufaa sana."
          ],
          steps: ["Fungua msaidizi wa AI kwenye kivinjari au programu rasmi.", "Sema unachohitaji.", "Ongeza hali yako, bila taarifa za binafsi.", "Sema jinsi unavyotaka jibu: urefu, orodha, hatua, maneno rahisi.", "Ituma na usome jibu."],
          words: [["Prompt (ombi)", "unachoandika au kusema kwa msaidizi wa AI kuomba kitu."], ["Msaidizi wa AI", "programu ya AI unayozungumza nayo kwa kuandika au kuongea, kama ChatGPT, Copilot au Gemini."]],
          slides: [
            { title: "Wasaidizi wa AI wa bure", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Sehemu tatu za prompt iliyo wazi", bullets: ["1. Unachohitaji", "2. Hali yako (bila taarifa za binafsi)", "3. Jinsi unavyotaka jibu"] },
            { title: "Mfano", bullets: ["\"Ninaendesha ghala dogo la chakula. Andika ujumbe wa kirafiki wa mistari 4", "unaoomba watu wa kujitolea wa Jumamosi. Tumia maneno rahisi.\""] }
          ],
          tryIt: "Fungua msaidizi mmoja wa AI wa bure. Andika prompt yenye sehemu tatu kwa kazi halisi ya wiki hii, kama ujumbe wa siku ya kuzaliwa, mpango wa masomo au orodha ya ununuzi, na uitume.",
          youCanNow: "kufungua msaidizi wa AI wa bure na kuandika prompt iliyo wazi inayoleta jibu la kwanza lenye manufaa.",
          quickCheck: [
            { objective: "O4", q: "Prompt ni nini?", options: ["Unachoandika au kusema kwa msaidizi wa AI", "Onyo kutoka kwa simu yako", "Jibu la AI", "Aina ya nywila"], answer: 0, why: "Prompt ni kile unachompa msaidizi wa AI kumwambia unachohitaji." },
            { objective: "O4", q: "Unahitaji ujumbe mfupi wa siku ya kuzaliwa kwa shangazi yako. Ungetuma prompt ipi?", options: ["\"Siku ya kuzaliwa\"", "\"Andika kitu\"", "\"Ujumbe\"", "\"Andika ujumbe wa upendo wa mistari 3 wa siku ya kuzaliwa kwa shangazi yangu, anayependa bustani. Tumia maneno rahisi.\""], answer: 3, why: "Inasema unachohitaji, hali yako na jinsi unavyotaka jibu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuboresha na kukagua jibu",
          minutes: 5,
          goal: "Boresha jibu kwa maombi ya kufuatilia na ukague ukweli wake.",
          text: [
            "Lichukue jibu la kwanza kama rasimu. Katika mazungumzo hayo hayo unaweza kuomba: \"Lifupishe.\" \"Tumia maneno rahisi zaidi.\" \"Nipe machaguo matatu.\" \"Liweke kwenye jedwali.\" Msaidizi anakumbuka ujumbe wa awali katika mazungumzo hayo.",
            "AI inaweza kubuni mambo: tarehe isiyo sahihi, namba ya simu isiyokuwepo, sheria ya zamani. Hii inaitwa hallucination (kubuni). Kagua ukweli wowote kuhusu pesa, afya, sheria, mafao, tarehe, anwani au namba za simu kwenye tovuti rasmi (tovuti za serikali ya Marekani huishia na .gov) au kwa mtu anayejua, kama daktari, mtunza maktaba au msimamizi wa kesi.",
            "Muulize msaidizi \"Naweza kukagua hili wapi?\" kisha nenda kwenye tovuti hiyo mwenyewe."
          ],
          steps: ["Soma jibu la kwanza.", "Omba badiliko moja kwa wakati.", "Pigia mstari ukweli: namba, tarehe, majina, sheria.", "Kagua kila ukweli kwenye chanzo rasmi au cha kuaminika.", "Vikitofautiana, amini chanzo rasmi."],
          words: [["Ombi la kufuatilia", "ujumbe wa pili unaoiomba AI kubadilisha au kueleza jibu lake."], ["Hallucination (kubuni)", "AI inapoandika kitu kinachosikika kweli lakini kimebuniwa."]],
          slides: [
            { title: "Jibu la kwanza ni rasimu", bullets: ["\"Lifupishe.\"", "\"Tumia maneno rahisi zaidi.\"", "\"Nipe machaguo matatu.\""] },
            { title: "AI inaweza kubuni mambo", bullets: ["Tarehe, namba au sheria zisizo sahihi", "Ofisi au vitabu visivyokuwepo"] },
            { title: "Kagua kabla ya kuamini", bullets: ["Pesa, afya, sheria, mafao, tarehe, namba za simu", "Tovuti rasmi (.gov) au mtu anayejua"] }
          ],
          tryIt: "Chukua jibu lako kutoka somo lililopita. Omba mabadiliko mawili, moja baada ya jingine. Kisha chagua ukweli mmoja ndani yake na uukague kwenye tovuti rasmi au ya kuaminika.",
          youCanNow: "kuboresha jibu la AI kwa maombi ya kufuatilia na kukagua ukweli wake kabla ya kulitumia.",
          quickCheck: [
            { objective: "O5", q: "Hallucination katika AI ni nini?", options: ["AI inapoishiwa na betri", "AI inapokataa kujibu", "AI inapobuni kitu kinachosikika kweli", "AI inapojibu kwa lugha nyingine"], answer: 2, why: "AI inaweza kubuni tarehe, namba au sheria isiyo sahihi inayosikika sahihi; hiyo ni hallucination." },
            { objective: "O5", q: "Jibu la AI linataja tarehe ya mwisho ya kurudisha fomu ya mafao. Ungefanya nini kabla ya kulitegemea?", options: ["Kukagua tarehe kwenye tovuti rasmi au kwa mtu anayejua", "Kuliamini kwa sababu limetoka kwa AI", "Kuiuliza AI swali hilo hilo tena na kutumia jibu hilo", "Kuwashirikisha marafiki kwanza"], answer: 0, why: "Ukweli kuhusu tarehe, pesa, mafao na sheria unapaswa kukaguliwa kwenye chanzo rasmi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutumia AI kwa haki na kwa usalama",
          minutes: 5,
          goal: "Tumia AI bila kushiriki taarifa za binafsi na kwa njia ya haki na ya uaminifu.",
          text: [
            "Usiandike taarifa za binafsi kwa msaidizi wa AI: namba za Social Security au za kitambulisho, nywila, namba za benki au za kadi, namba za kumbukumbu za matibabu au anwani kamili ya nyumbani. Andika \"[namba yangu]\" badala yake. Huenda kampuni ikahifadhi mazungumzo yako.",
            "Kuwa mwaminifu kuhusu msaada wa AI. Shule na kazi nyingi zina sheria kuuhusu, kwa hiyo uliza kabla ya kuwasilisha kazi iliyoandikwa na AI. Soma na ubadilishe inachoandika ili isikike kama wewe na iseme unachomaanisha.",
            "Kumbuka upendeleo: jibu likionekana kutowatendea haki kundi la watu, lihoji. Na jihadhari na ulaghai unaotumia AI, kama sauti bandia za wanafamilia zinazoomba pesa. Simama, kata simu, na upige tena kwa namba unayoijua."
          ],
          steps: ["Soma prompt yako kuona kama ina taarifa za binafsi kabla ya kuituma.", "Badilisha taarifa za binafsi kwa kishika-nafasi.", "Angalia sheria za shule au kazi yako kuhusu msaada wa AI.", "Fanya maneno ya mwisho yawe yako.", "Chukulia maombi ya pesa ya haraka kama ishara ya hatari."],
          words: [["Taarifa za binafsi", "maelezo yanayoweza kumruhusu mtu ajifanye wewe au achukue pesa zako."], ["Kishika-nafasi", "kitu cha kusimama badala, kama \"[namba yangu]\", unachoandika badala ya taarifa halisi."]],
          slides: [
            { title: "Usiviweke kwenye AI", bullets: ["Namba za kitambulisho na za Social Security", "Nywila, namba za benki na za kadi", "Namba za kumbukumbu za matibabu, anwani kamili ya nyumbani"] },
            { title: "Kuwa mwaminifu", bullets: ["Fuata sheria za AI za shule au kazi yako", "Hariri maneno ili yawe yako"] },
            { title: "Kaa macho", bullets: ["Hoji majibu yanayoonekana kukosa haki", "Sauti bandia zinaweza kuomba pesa: kata simu na upige tena"] }
          ],
          tryIt: "Kazi ya mwisho: chagua kazi halisi, andika prompt iliyo wazi bila taarifa za binafsi, omba maboresho mawili, kagua ukweli mmoja kwenye tovuti ya kuaminika, kisha mweleze rafiki AI kwa sentensi tatu.",
          youCanNow: "kutumia AI kumaliza kazi halisi huku ukilinda taarifa za binafsi na kuitumia kwa uaminifu.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini usiweke taarifa za binafsi kwenye mazungumzo na AI?", options: ["Inafanya jibu kuwa refu zaidi", "Wasaidizi wa AI hawawezi kusoma namba", "Ni kinyume na sheria za kila shule", "Huenda kampuni ikahifadhi mazungumzo yako"], answer: 3, why: "Kampuni inaweza kuhifadhi mazungumzo yako, kwa hiyo namba za kitambulisho, benki na matibabu hazipaswi kuingia kamwe." },
            { objective: "O6", q: "Unapigiwa simu kwa sauti ya mjukuu wako akikuomba utume pesa sasa hivi. Ungefanya nini?", options: ["Kutuma pesa haraka", "Kukata simu na kumpigia tena kwa namba unayoijua", "Kutoa namba ya kadi yako ya benki kuhakikisha ni yeye", "Kumwomba mpigaji atume ujumbe mfupi badala yake"], answer: 1, why: "AI inaweza kuiga sauti, kwa hiyo simama na upige tena kwa namba unayoijua tayari." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia AI vizuri",
        questions: [
          { objective: "O4", q: "Prompt ipi iko wazi zaidi?", options: ["\"watu wa kujitolea\"", "\"msaada\"", "\"vitu vya Jumamosi\"", "\"Ninaendesha ghala la chakula. Andika ujumbe wa kirafiki wa mistari 4 unaoomba watu wa kujitolea wa Jumamosi. Tumia maneno rahisi.\""], answer: 3, why: "Inatoa hitaji, hali na muundo wa jibu." },
          { objective: "O5", q: "Jibu linatumia maneno magumu. Unaandika nini baadaye?", options: ["\"Tumia maneno rahisi zaidi.\"", "Nywila yako", "Hakuna; funga programu", "\"Anza upya milele.\""], answer: 0, why: "Ombi la kufuatilia linaiomba AI kubadilisha jibu lake." },
          { objective: "O5", q: "AI inatoa namba ya simu ya ofisi ya mafao. Unapaswa kufanya nini?", options: ["Kuipigia mara moja", "Kuishiriki kwenye mitandao ya kijamii", "Kuikagua kwenye tovuti rasmi ya ofisi hiyo", "Kuiuliza AI kama ina uhakika na kuiamini"], answer: 2, why: "AI inaweza kubuni namba; tovuti rasmi ndiyo chanzo cha kuaminika." },
          { objective: "O6", q: "Unapaswa kuandika nini badala ya namba ya kadi yako ya benki katika prompt?", options: ["Namba halisi", "PIN yako", "Tarakimu 12 za mwisho", "Kishika-nafasi kama \"[kadi yangu]\""], answer: 3, why: "Kishika-nafasi kinakuwezesha kupata msaada bila kushiriki taarifa za binafsi." },
          { objective: "O6", q: "Unataka kuwasilisha kazi ya nyumbani ambayo AI ilisaidia kuandika. Unapaswa kufanya nini kwanza?", options: ["Kuangalia sheria za shule yako kuhusu msaada wa AI", "Kuiwasilisha bila kuisoma", "Kunakili ya rafiki", "Kuifuta"], answer: 0, why: "Shule na kazi zina sheria kuhusu msaada wa AI; uaminifu unatangulia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Akili Bandia (AI)",
    questions: [
      { objective: "O1", q: "AI inaelezwa vizuri zaidi kama:", options: ["Mtu aliye ndani ya kompyuta", "Chapa ya simu", "Programu zinazotumia mifumo kufanya kazi ambazo kwa kawaida watu hufanya", "Aina ya anwani ya barua pepe"], answer: 2, why: "AI inapata mifumo na kukisia ili kufanya kazi." },
      { objective: "O1", q: "Kwa nini AI inaweza kusikika na uhakika na bado ikakosea?", options: ["Inatania", "Haikosei kamwe", "Betri yake iko chini", "Inakisia kwa kadiri iwezavyo kutoka kwa mifumo, si kwa kujua ukweli"], answer: 3, why: "AI inakisia kutoka kwa mifumo, na makisio mabaya yanaweza kusikika na uhakika." },
      { objective: "O1", q: "Zana ipi ni AI ya kuzalisha?", options: ["Kikokotoo", "Ramani ya karatasi", "Google Gemini", "Swichi ya taa"], answer: 2, why: "Gemini inatengeneza maandishi mapya unapoomba, kwa hiyo ni AI ya kuzalisha." },
      { objective: "O2", q: "Programu nyingi za AI hujifunza vipi leo?", options: ["Kutoka kwa mifano mingi (data)", "Kwa kusoma mawazo yako", "Kwa kukisia bila mifano", "Kutoka kwa betri ya simu"], answer: 0, why: "Hujifunza mifumo kutoka kwa data." },
      { objective: "O2", q: "Kichujio cha barua taka kilifunzwa kwa maelfu ya barua pepe zenye alama taka au si taka. Huu ni mfano wa:", options: ["Mafunzo kwa data", "Kuchaji simu", "Kutuma ujumbe mfupi", "Nywila"], answer: 0, why: "Kujifunza kutoka kwa mifano yenye alama ni mafunzo (training)." },
      { objective: "O2", q: "Upendeleo (bias) katika AI ni nini?", options: ["Kompyuta ya kasi", "Data inayoegemea upande mmoja, inayofanya makisio yasiwatendee haki baadhi ya watu", "Aina ya prompt", "Mpangilio wa mwangaza wa simu"], answer: 1, why: "Data ya upande mmoja huleta makisio yasiyo ya haki." },
      { objective: "O3", q: "Upi ni mfano wa kila siku wa AI?", options: ["Stepla", "Programu ya video inayopendekeza cha kutazama baadaye", "Bahasha ya karatasi", "Ufunguo wa mlango"], answer: 1, why: "Mapendekezo yanatoka kwa AI." },
      { objective: "O3", q: "Siri, Google Assistant na Alexa ni:", options: ["Benki", "Wasaidizi wa sauti wanaotumia AI", "Anwani za barua pepe", "Printa"], answer: 1, why: "Hutumia AI kuelewa maneno yanayosemwa." },
      { objective: "O3", q: "Programu inaendelea kupendekeza vitu usivyovitaka. Hatua nzuri ya kwanza ni:", options: ["Kutupa simu", "Kuangalia mipangilio ya programu kuona unachoweza kubadilisha", "Kuipa nywila yako", "Kupuuza programu zote milele"], answer: 1, why: "Programu nyingi zina mipangilio inayodhibiti mapendekezo." },
      { objective: "O4", q: "Prompt ni nini?", options: ["Chaja ya simu", "Unachoandika au kusema kwa msaidizi wa AI", "Mwisho wa anwani ya tovuti", "Aina ya virusi"], answer: 1, why: "Prompt ni ombi lako kwa AI." },
      { objective: "O4", q: "Anwani ipi inafungua msaidizi wa AI wa Microsoft?", options: ["copilot.microsoft.com", "free-ai-prize.win", "microsoft-gift.xyz", "copilot.bank"], answer: 0, why: "copilot.microsoft.com ni anwani rasmi ya Microsoft." },
      { objective: "O4", q: "Prompt iliyo wazi ina sehemu gani tatu?", options: ["Jina, nywila, anwani", "Unachohitaji, hali yako, jinsi unavyotaka jibu", "Rangi, ukubwa, bei", "Habari, asante, kwaheri"], answer: 1, why: "Sehemu hizo tatu huleta jibu lenye manufaa." },
      { objective: "O5", q: "Jibu la kwanza ni refu mno. Unapaswa:", options: ["Kulikubali hivyo hivyo", "Kulipia programu mpya", "Kuomba \"Lifupishe.\"", "Kuanza kuandika taarifa za binafsi"], answer: 2, why: "Ombi la kufuatilia hubadilisha jibu." },
      { objective: "O5", q: "\"Hallucination\" katika AI maana yake ni:", options: ["AI imebuni kitu kinachosikika kweli", "Skrini haionekani vizuri", "Programu ni ya bure", "AI imezimwa"], answer: 0, why: "AI inaweza kubuni ukweli unaosikika halisi." },
      { objective: "O5", q: "Kipi unapaswa kukagua kila mara kwenye chanzo rasmi?", options: ["Shairi la siku ya kuzaliwa", "Utani", "Orodha ya rangi za sherehe", "Tarehe ya mwisho ya kulipa kodi"], answer: 3, why: "Tarehe, pesa na sheria zinaweza kuwa si sahihi na lazima zikaguliwe." },
      { objective: "O5", q: "Tovuti za serikali ya Marekani kwa kawaida huishia na:", options: [".win", ".shop", ".gov", ".xyz"], answer: 2, why: ".gov inatumiwa na tovuti za serikali ya Marekani." },
      { objective: "O6", q: "Kipi ni salama kuandika kwa msaidizi wa AI?", options: ["Namba yako ya Social Security", "\"[namba yangu]\" kama kishika-nafasi", "Nywila yako ya benki", "Namba ya usalama ya kadi yako"], answer: 1, why: "Kishika-nafasi huzuia taarifa za binafsi zisiingie." },
      { objective: "O6", q: "Kabla ya kutumia maneno yaliyoandikwa na AI kwa shule au kazi, unapaswa:", options: ["Kuangalia sheria na kuyafanya maneno yawe yako", "Kuyawasilisha bila kuyasoma", "Kuondoa jina lako", "Kuyaweka mtandaoni kwanza"], answer: 0, why: "Matumizi ya uaminifu yanamaanisha kufuata sheria na kuhariri kazi." },
      { objective: "O6", q: "Jibu la AI linaonekana kutowatendea haki kundi la watu. Unafanya nini?", options: ["Kulisambaza kwa wengi", "Kulihoji na kukagua vyanzo vingine", "Kudhani ni kweli", "Kubadilisha nywila yako"], answer: 1, why: "Upendeleo unaweza kuonekana katika majibu; lihoji." },
      { objective: "O6", q: "Simu kwa sauti ya ndugu inakuomba utume pesa sasa hivi. Unapaswa:", options: ["Kuzituma haraka", "Kumsomea namba ya kadi yako", "Kumpa msimbo kutoka kwa simu yako", "Kukata simu na kumpigia ndugu huyo tena kwa namba unayoijua"], answer: 3, why: "AI inaweza kuiga sauti; kupiga tena kwa namba unayoijua kunazuia ulaghai." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      5,
      6,
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kueleza AI",
        objective: "O1",
        notYet: "Maelezo hayapo, si sahihi, au hayasemi kwa nini jibu lilikaguliwa.",
        meets: "Sentensi tatu rahisi zinasema AI ni nini, kwamba inakisia kutoka kwa mifumo, na kwa nini jibu lilikaguliwa.",
        exceeds: "Pia inatoa mfano wa kila siku na kutaja kwamba data duni inaweza kufanya majibu yakose haki."
      },
      {
        name: "Prompt iliyo wazi",
        objective: "O4",
        notYet: "Prompt ina neno moja au mawili au haisemi kinachohitajika.",
        meets: "Prompt inasema unachohitaji, hali yako na jinsi unavyotaka jibu.",
        exceeds: "Prompt pia inaweka urefu au muundo na inaleta jibu la kwanza lenye manufaa."
      },
      {
        name: "Kuboresha jibu",
        objective: "O5",
        notYet: "Hakuna ombi la kufuatilia lililoulizwa, au jibu la kwanza lilitumiwa kama lilivyo.",
        meets: "Maombi mawili ya kufuatilia yaliulizwa, moja baada ya jingine, na jibu likawa bora.",
        exceeds: "Maneno ya mwisho pia yalibadilishwa ili yasikike kama wewe."
      },
      {
        name: "Kukagua ukweli",
        objective: "O5",
        notYet: "Hakuna ukweli uliokaguliwa, au ulikaguliwa tu kwa kuiuliza AI tena.",
        meets: "Ukweli mmoja ulikaguliwa kwenye tovuti rasmi au ya kuaminika.",
        exceeds: "Kila ukweli kuhusu tarehe, pesa, sheria au namba za simu ulikaguliwa, na kila tofauti ilirekebishwa."
      },
      {
        name: "Faragha na uaminifu",
        objective: "O6",
        notYet: "Prompt ina taarifa ya binafsi kama namba ya kitambulisho, nywila au anwani kamili.",
        meets: "Prompt haina taarifa za binafsi; kila taarifa ya binafsi ni kishika-nafasi.",
        exceeds: "Pia sheria za shule au kazi kuhusu msaada wa AI zilikaguliwa pale zinapohusika."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa kigezo cha kazi ya mwisho",
      "Wanafunzi wanaoripoti kutumia msaidizi wa AI wa bure kwa kazi halisi ndani ya siku 30 baada ya kozi (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti kukagua jibu la AI kwenye chanzo rasmi, au kutambua na kuepuka simu au ujumbe wa ulaghai",
      "Wanafunzi wanaoendelea kuchukua kozi inayofuata, kama Misingi ya Ujuzi wa Kidijitali au Utangulizi wa Usalama wa Mtandao"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, tableti au kompyuta yenye intaneti na kivinjari cha wavuti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini (hakuna malipo yanayohitajika)",
      "Karatasi na kalamu za kuandika prompt, maombi ya kufuatilia na ukweli uliokaguliwa",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fundisha sura moja kwa kila kipindi huku kazi za \"Jaribu sasa\" zikifanywa wawili wawili; mweke mwanafunzi aliye mpya kwa vifaa pamoja na mwenzake anayejiamini zaidi.",
      "Baadhi ya wasaidizi wa bure huwaomba wanafunzi kuingia (sign in); mwache kila mwanafunzi aamue kama atafungua akaunti, na onyesha wale wanaofanya kazi bila kuingia pale wanapopatikana.",
      "Kabla mtu yeyote hajatuma prompt, mwombe aisome kwa sauti na abadilishe kila taarifa ya binafsi kwa kishika-nafasi kama \"[namba yangu]\".",
      "Kuwa na tovuti rasmi moja tayari kwa kazi ya kukagua ya kila kikundi (kwa mfano ukurasa wa .gov au tovuti ya maktaba ya eneo lako) ili wanafunzi wajizoeze kukagua ukweli halisi.",
      "Zungumzeni waziwazi kuhusu ulaghai wa kuiga sauti; waambie wanafunzi wakate simu na wapige tena kwa familia kwa namba wanayoijua, na toa mawasiliano ya eneo lako ya kuripoti ulaghai kama programu yako inayo."
    ]
  }
};
