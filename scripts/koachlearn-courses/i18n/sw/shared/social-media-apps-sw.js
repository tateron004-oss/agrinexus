"use strict";

// Koach Learn course (Swahili translation of shared/social-media-apps.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "social-media-apps-sw",
  lang: "sw",
  translationOf: "social-media-apps",
  category: "Seniors and Technology",
  name: "Programu za Mitandao ya Kijamii na Jinsi ya Kuzitumia",
  skills: "Kuchagua programu ya mitandao ya kijamii, Kuweka wasifu salama, Kuchapisha na kutoa maoni, Mipangilio ya faragha, Kutambua akaunti bandia na ulaghai",
  outcome: "kufungua akaunti ya mitandao ya kijamii yenye mipangilio salama ya faragha, kufuata watu na vikundi unavyovijali, kuchapisha na kutoa maoni kwa wema, na kutambua na kuripoti akaunti bandia na ulaghai.",
  about: [
    "Programu za mitandao ya kijamii kama Facebook, Instagram, WhatsApp, YouTube, TikTok na LinkedIn ni mahali ambapo familia nyingi hushiriki picha, vikundi vya jamii huweka habari, na waajiri hutafuta wafanyakazi.",
    "Kozi hii inakuonyesha jinsi ya kuchagua programu, kuweka wasifu unaolinda maisha yako binafsi, kuchapisha na kutoa maoni, na kujikinga na akaunti bandia na ulaghai.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Kwenye programu moja ya mitandao ya kijamii: weka wasifu wako ili marafiki tu au wafuasi uliowakubali waone machapisho yako, fuata mwanafamilia au rafiki mmoja na kikundi au ukurasa mmoja wa eneo lako, andika maoni ya wema kwenye chapisho, na tafuta kitufe cha Ripoti (Report) kwenye chapisho au akaunti ili ujue kiko wapi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotaka kutumia mitandao ya kijamii kuwasiliana na familia, marafiki, kanisa na vikundi vya mtaa au kutafuta kazi: wazee, babu na bibi, watu wanaorudi katika jamii, wageni wapya na wazazi wa vijana.",
    startingPoint: "Wanaweza kutumia simu janja au kompyuta kufungua programu na kuandika. Baadhi wana akaunti iliyofunguliwa na ndugu; wachache wamekagua mipangilio yao ya faragha, wamewasha uthibitisho wa hatua mbili, au wanajua kutambua akaunti bandia, kuripoti chapisho au kumzuia mtu.",
    gap: "Mitandao ya kijamii ni mahali familia nyingi hushiriki habari na vikundi, matukio na kazi huwekwa, lakini pia ni mahali matapeli huwapata watu. Bila mipangilio na tabia salama, watu hutoa taarifa nyingi mno, hukubali maombi ya urafiki bandia, hudanganywa na ulaghai wa mapenzi na wa zawadi, au hujisikia vibaya kwa kusogeza skrini bila mwisho.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama mlisho (feed), wasifu (profile) na mipangilio ya faragha yanaelezwa",
      "Vifaa: simu janja, tableti au kompyuta yenye intaneti",
      "Muda: kama dakika 5 kwa somo, kama dakika 60 kwa jumla",
      "Gharama: programu za bure tu, kutoka duka rasmi la programu",
      "Faragha na umri: wanafunzi hawaweki anwani, mwaka wa kuzaliwa wala mipango ya safari, na hukagua umri wa chini wa kila programu kabla mtoto au kijana hajajisajili"
    ],
    prerequisites: "Hakuna. Kozi \"Kutumia Simu Janja na Tableti\" inawasaidia wanafunzi walio wapya kwa programu."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa jambo unalotaka kufanya, kama kuona picha za familia au kutafuta kazi", action: "kuchagua programu ya mitandao ya kijamii inayolifaa", standard: "ukichagua programu sahihi kila mara" },
    { id: "O2", condition: "Ukitumia programu ya mitandao ya kijamii kutoka duka rasmi", action: "kufungua akaunti yenye wasifu salama na kuwasha uthibitisho wa hatua mbili", standard: "bila anwani ya nyumbani, mwaka wa kuzaliwa wala namba ya simu kwenye wasifu, na uthibitisho wa hatua mbili ukiwa umewashwa" },
    { id: "O3", condition: "Kwenye akaunti yako ya mitandao ya kijamii", action: "kufuata watu na vikundi ulivyovikagua, kuandika chapisho na kuacha maoni ya wema", standard: "ukikagua nani anaweza kuona kila chapisho kabla ya kulishiriki" },
    { id: "O4", condition: "Katika mipangilio ya faragha ya programu", action: "kuweka nani anaweza kuona machapisho yako, kukupata na kukutumia ujumbe", standard: "machapisho yakiwa ya marafiki au wafuasi uliowakubali, na mahali ulipo kwenye machapisho kumezimwa" },
    { id: "O5", condition: "Ukipewa ombi la urafiki au ujumbe", action: "kutambua dalili za akaunti bandia au ulaghai na kulikataa", standard: "ukitaja angalau dalili mbili za hatari na bila kutuma kamwe pesa, kadi za zawadi au misimbo" },
    { id: "O6", condition: "Ukipewa chapisho, akaunti au tabia usiyoitaka", action: "kuzuia, kuripoti au kunyamazisha, na kuweka kikomo cha muda kwa programu", standard: "ukichagua zana sahihi kwa kila hali" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuanza kutumia mitandao ya kijamii",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mitandao ya kijamii ni nini na kila programu ni ya nini",
          minutes: 4,
          goal: "Chagua programu ya mitandao ya kijamii inayofaa kile unachotaka kufanya.",
          text: [
            "Programu za mitandao ya kijamii zinawawezesha watu kushiriki maneno, picha na video na kuongea wao kwa wao. Kila moja ni nzuri kwa mambo tofauti.",
            "Facebook: familia, marafiki, vikundi vya eneo lako na matukio. Instagram: picha na video fupi. WhatsApp: ujumbe na simu za bure na familia, hata nchi nyingine. YouTube: video za kutazama na kujifunza. TikTok: video fupi. LinkedIn: kazi na mawasiliano ya kikazi. Nextdoor: habari za mtaa wako.",
            "Huhitaji zote. Anza na moja inayolingana na unachotaka, kama kuona picha za familia au kutafuta kazi. Kila programu inaweka umri wa chini katika sheria zake; zikague kabla mtoto au kijana hajajisajili."
          ],
          words: [["Mitandao ya kijamii", "programu na tovuti ambapo watu hushiriki machapisho na kuongea wao kwa wao."], ["Chapisho (post)", "kitu unachoshiriki: maneno, picha au video."], ["Mlisho (feed)", "orodha ya machapisho unayosogeza na kusoma."]],
          slides: [
            { title: "Mitandao ya kijamii ni nini", bullets: ["Programu ambapo watu hushiriki maneno, picha na video", "Na kuongea wao kwa wao"] },
            { title: "Kila programu ni ya nini", bullets: ["Facebook: familia, marafiki, vikundi vya eneo lako", "Instagram na TikTok: picha na video fupi", "WhatsApp: ujumbe na simu", "YouTube: video; LinkedIn: kazi"] },
            { title: "Anza na moja", bullets: ["Chagua programu inayofaa lengo lako", "Kagua sheria za umri za kila programu kwa watoto"] }
          ],
          tryIt: "Andika jambo moja unalotaka kutoka kwenye mitandao ya kijamii (kwa mfano: kuona picha za wajukuu, kujiunga na kikundi cha kanisa au jamii, au kutafuta kazi). Kando yake, andika programu kutoka somo hili inayofaa zaidi.",
          youCanNow: "kusema programu kuu za mitandao ya kijamii ni za nini na kuchagua moja inayofaa lengo lako.",
          quickCheck: [
            { objective: "O1", q: "Ni programu ipi hasa ni ya habari za mtaa wako?", options: ["LinkedIn", "TikTok", "Nextdoor", "Instagram"], answer: 2, why: "Nextdoor ni ya habari za mtaa wako." },
            { objective: "O1", q: "Unataka kuona picha za wajukuu wako na kujiunga na kikundi cha kanisa la eneo lako. Ungeanza na programu ipi?", options: ["LinkedIn", "Facebook", "Tovuti ya kazi", "Zote kwa wakati mmoja"], answer: 1, why: "Facebook ni ya familia, marafiki, vikundi vya eneo lako na matukio; anza na programu moja inayofaa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuweka wasifu salama",
          minutes: 5,
          goal: "Fungua akaunti na ujaze wasifu bila kutoa taarifa nyingi mno.",
          text: [
            "Pakua programu kutoka duka rasmi la programu tu, au nenda kwenye tovuti halisi ya kampuni. Jisajili kwa barua pepe au namba yako ya simu na nywila imara usiyoitumia mahali pengine popote.",
            "Wasifu wako ni ukurasa unaowaambia watu wewe ni nani. Weka jina lako na picha ya kirafiki. Usiweke mwaka wako wa kuzaliwa, anwani ya nyumbani, namba ya simu wala wakati ambao hauko nyumbani. Matapeli hukusanya taarifa hizi.",
            "Washa uthibitisho wa hatua mbili (wakati mwingine huitwa two-factor authentication) katika mipangilio ya usalama ya programu. Hapo, hata mtu akiiba nywila yako, atahitaji pia msimbo kutoka kwenye simu yako."
          ],
          steps: ["Pakua programu kutoka duka rasmi la programu.", "Jisajili kwa barua pepe au simu na nywila mpya imara.", "Weka jina lako na picha ya kirafiki.", "Usiweke anwani yako, namba ya simu, tarehe kamili ya kuzaliwa wala mipango ya safari.", "Fungua mipangilio ya usalama na uwashe uthibitisho wa hatua mbili."],
          words: [["Wasifu (profile)", "ukurasa wako unaoonyesha wewe ni nani kwenye programu."], ["Uthibitisho wa hatua mbili", "ukaguzi wa pili, kwa kawaida msimbo unaotumwa kwenye simu yako, unapoingia."]],
          slides: [
            { title: "Jisajili kwa usalama", bullets: ["Duka rasmi la programu au tovuti halisi", "Nywila imara usiyoitumia mahali pengine"] },
            { title: "Cha kuweka kwenye wasifu wako", bullets: ["Jina lako", "Picha ya kirafiki"] },
            { title: "Usichopaswa kuweka", bullets: ["Anwani ya nyumbani na namba ya simu", "Tarehe kamili ya kuzaliwa", "Wakati ambao hauko nyumbani"] },
            { title: "Washa uthibitisho wa hatua mbili", bullets: ["Utaupata katika mipangilio ya usalama", "Mwizi atahitaji pia msimbo kutoka simu yako"] }
          ],
          tryIt: "Fungua akaunti kwenye programu uliyochagua (au fungua ile uliyo nayo). Kagua wasifu wako: ondoa chochote kilicho kwenye orodha ya \"usichopaswa kuweka\", na uwashe uthibitisho wa hatua mbili.",
          youCanNow: "kutengeneza wasifu wa mitandao ya kijamii unaoonyesha wewe ni nani bila kutoa taarifa zako binafsi.",
          quickCheck: [
            { objective: "O2", q: "Wasifu wako ni nini?", options: ["Ukurasa unaowaambia watu wewe ni nani", "Orodha ya machapisho ya wengine", "Nywila yako", "Mpangilio unaokuficha"], answer: 0, why: "Wasifu ni ukurasa wako, wenye jina na picha yako." },
            { objective: "O2", q: "Wakati wa kujisajili unaombwa tarehe kamili ya kuzaliwa, anwani na simu ili vionyeshwe kwenye wasifu wako. Ungefanya nini?", options: ["Kuonyesha vyote ili watu wakupate", "Kuonyesha anwani yako tu", "Kuweka pia tarehe za safari zako", "Kutoviweka kwenye wasifu wako, kwa sababu matapeli hukusanya taarifa hizi"], answer: 3, why: "Kutoweka mwaka wa kuzaliwa, anwani na namba ya simu kunakulinda dhidi ya matapeli." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kufuata, kuchapisha na kutoa maoni",
          minutes: 5,
          goal: "Fuata watu na vikundi, andika chapisho na uache maoni ya wema.",
          text: [
            "Ili kuona machapisho ya mtu, tuma ombi la urafiki au umfuate. Tafuta jina lake, kagua picha na marafiki mnaoshiriki ili uhakikishe ni yeye kweli, kisha gusa Ongeza rafiki (Add friend) au Fuata (Follow). Unaweza pia kujiunga na vikundi: kanisa, mtaa, burudani au kikundi cha kazi.",
            "Ili kuchapisha, gusa kisanduku kinachouliza unawaza nini, au kitufe cha +. Andika maneno machache, ongeza picha ukipenda, kagua nani anaweza kukiona, kisha gusa Chapisha (Post) au Shiriki (Share).",
            "Kuitikia (kama dole gumba juu au moyo) kunaonyesha uliona chapisho. Kutoa maoni kunaongeza maneno yako chini yake. Kuwa mwema: andika kana kwamba mtu huyo yuko chumbani nawe. Kumbuka kwamba unachochapisha kinaweza kunakiliwa na kuonekana kwa muda mrefu."
          ],
          steps: ["Tafuta mtu au kikundi kwa jina.", "Hakikisha ni halisi: picha, marafiki mnaoshiriki, machapisho.", "Gusa Ongeza rafiki, Fuata au Jiunge.", "Kuchapisha: gusa kisanduku cha chapisho au +, andika, ongeza picha, kagua nani anaweza kuona, kisha Chapisha.", "Kutoa maoni: gusa Maoni (Comment) chini ya chapisho, andika kitu cha wema, tuma."],
          words: [["Kufuata (follow)", "kuchagua kuona machapisho ya mtu kwenye mlisho wako."], ["Kikundi (group)", "sehemu kwenye programu kwa watu wenye shauku moja."], ["Maoni (comment)", "maneno unayoandika chini ya chapisho la mtu."], ["Kuitikia (react)", "kugusa alama ya kupenda, moyo au nyingine kwenye chapisho."]],
          slides: [
            { title: "Fuata na ujiunge", bullets: ["Tafuta jina", "Hakikisha ni yeye kweli", "Gusa Ongeza rafiki, Fuata au Jiunge"] },
            { title: "Tengeneza chapisho", bullets: ["Gusa kisanduku cha chapisho au +", "Andika na uongeze picha", "Kagua nani anaweza kuona, kisha Chapisha"] },
            { title: "Itikia na utoe maoni", bullets: ["Kuitikia: kupenda au moyo", "Maoni: maneno yako chini ya chapisho", "Kuwa mwema; machapisho yanaweza kudumu muda mrefu"] }
          ],
          tryIt: "Fuata mwanafamilia au rafiki mmoja na ujiunge au ufuate kikundi au ukurasa mmoja wa eneo lako. Kisha acha maoni ya wema kwenye moja ya machapisho yao.",
          youCanNow: "kufuata watu na vikundi, kutengeneza chapisho, na kuitikia na kutoa maoni kwa wema.",
          quickCheck: [
            { objective: "O3", q: "Kuitikia, kama dole gumba juu au moyo, kunaonyesha nini?", options: ["Kwamba unataka kumzuia mtu huyo", "Kwamba uliripoti chapisho", "Kwamba ulishiriki chapisho na kila mtu", "Kwamba uliona chapisho"], answer: 3, why: "Kuitikia kunaonyesha uliona chapisho; maoni yanaongeza maneno yako." },
            { objective: "O3", q: "Hukubaliani na chapisho la binamu yako. Ungefanya nini?", options: ["Kuandika kwa wema, kana kwamba yuko chumbani nawe, au kunyamaza", "Kuandika maoni ya hasira kwa herufi kubwa", "Kuchapisha namba yake ya simu", "Kushiriki chapisho pamoja na tusi"], answer: 0, why: "Kuwa mwema; unachochapisha kinaweza kunakiliwa na kuonekana kwa muda mrefu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuanza kutumia mitandao ya kijamii",
        questions: [
          { objective: "O1", q: "Unataka simu na ujumbe wa bure na familia iliyo nchi nyingine. Ni programu ipi inafaa zaidi?", options: ["LinkedIn", "WhatsApp", "Nextdoor", "TikTok"], answer: 1, why: "WhatsApp ni ya ujumbe na simu, hata kati ya nchi." },
          { objective: "O2", q: "Ni taarifa ipi HUPASWI kuweka kwenye wasifu wako?", options: ["Jina lako la kwanza", "Picha ya kirafiki", "Anwani yako ya nyumbani", "Burudani unayoipenda"], answer: 2, why: "Anwani ya nyumbani inawawezesha watu usiowajua kukupata." },
          { objective: "O2", q: "Uthibitisho wa hatua mbili unafanya nini?", options: ["Unaomba msimbo kutoka simu yako pamoja na nywila yako", "Unafanya machapisho kuwa makubwa", "Unakuongezea marafiki", "Unafuta akaunti yako"], answer: 0, why: "Mwizi angehitaji pia msimbo wa simu yako." },
          { objective: "O3", q: "Unamtafuta mpwa wako na unapata akaunti mbili zenye jina lake. Unafanya nini?", options: ["Kuziongeza zote mbili", "Kutuma pesa kwa zote mbili", "Kuzipa zote nywila yako", "Kwanza kukagua picha, marafiki mnaoshiriki na machapisho"], answer: 3, why: "Kukagua kunakusaidia kuepuka akaunti bandia zilizonakiliwa." },
          { objective: "O3", q: "Maoni (comment) ni nini?", options: ["Nywila yako", "Ujumbe wa siri wa benki", "Maneno unayoandika chini ya chapisho la mtu", "Sasisho la programu"], answer: 2, why: "Maoni ni jibu lako lililoandikwa chini ya chapisho." }
        ]
      }
    },
    {
      name: "Sura 2: Kulinda faragha na usalama wako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mipangilio ya faragha: kuchagua nani anaona nini",
          minutes: 5,
          goal: "Weka machapisho na wasifu wako ili watu unaowachagua tu wayaone.",
          text: [
            "Kila programu ina mipangilio ya faragha. Inaamua nani anaweza kuona machapisho yako, nani anaweza kukupata, na nani anaweza kukutumia ujumbe. Hadharani (Public) maana yake mtu yeyote duniani. Marafiki au wafuasi uliowakubali maana yake watu uliowakubali tu.",
            "Tafuta Mipangilio (Settings), kisha Faragha (Privacy) (kwenye programu nyingine iko kwenye menyu yenye mistari mitatu au kwenye picha ya wasifu wako). Programu nyingi pia zina ukaguzi wa faragha unaokuongoza katika kila chaguo.",
            "Mwanzo mzuri: fanya machapisho yaonekane kwa marafiki tu, wakubali wafuasi wapya wewe mwenyewe, na upunguze nani anaweza kukutumia ujumbe. Zima kushiriki mahali ulipo kwenye machapisho kama hutaki watu wajue uko wapi."
          ],
          steps: ["Fungua menyu ya programu au picha ya wasifu wako.", "Chagua Mipangilio, kisha Faragha (au ukaguzi wa faragha).", "Weka nani anaweza kuona machapisho yako kuwa marafiki au wafuasi uliowakubali.", "Weka nani anaweza kukutumia ujumbe na kukupata.", "Zima mahali ulipo kwenye machapisho kama hukuhitaji."],
          words: [["Hadharani (public)", "mtu yeyote, hata wasiokujua, anaweza kukiona."], ["Mipangilio ya faragha", "machaguo yanayodhibiti nani anaona machapisho na wasifu wako."], ["Kushiriki mahali ulipo", "kuonyesha uko wapi unapochapisha."]],
          slides: [
            { title: "Nani anaweza kukiona?", bullets: ["Hadharani: mtu yeyote duniani", "Marafiki au wafuasi uliowakubali: watu uliowakubali tu"] },
            { title: "Kupata mipangilio ya faragha", bullets: ["Menyu au picha ya wasifu, kisha Mipangilio", "Tafuta Faragha au ukaguzi wa faragha"] },
            { title: "Mwanzo mzuri", bullets: ["Machapisho: marafiki tu", "Wakubali wafuasi wewe mwenyewe", "Punguza nani anaweza kukutumia ujumbe", "Zima mahali ulipo kwenye machapisho"] }
          ],
          tryIt: "Fungua mipangilio ya faragha ya programu yako. Weka machapisho yako kwa marafiki au wafuasi uliowakubali tu, na uzime mahali ulipo kwenye machapisho. Kisha tazama wasifu wako kama mtu asiyekujua angeuona, kama programu inaruhusu.",
          youCanNow: "kuweka faragha yako ili watu unaowachagua tu waone machapisho na taarifa zako.",
          quickCheck: [
            { objective: "O4", q: "Ukaguzi wa faragha ni nini?", options: ["Kumtembelea daktari", "Zana katika programu nyingi inayokuongoza katika kila chaguo la faragha", "Njia ya kuchapisha hadharani", "Ujumbe wa ulaghai"], answer: 1, why: "Programu nyingi zina ukaguzi wa faragha unaokuongoza katika kila chaguo." },
            { objective: "O4", q: "Hutaki watu usiowajua waone uko wapi unapochapisha. Ungefanya nini?", options: ["Kufanya machapisho yote kuwa ya hadharani", "Kuchapisha anwani yako badala yake", "Kuzima kushiriki mahali ulipo kwenye machapisho", "Kukubali kila ombi la urafiki"], answer: 2, why: "Kuzima mahali ulipo kwenye machapisho kunazuia watu kujua uko wapi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutambua akaunti bandia na ulaghai",
          minutes: 5,
          goal: "Tambua akaunti bandia au ujumbe wa ulaghai na uukatae.",
          text: [
            "Matapeli hutengeneza akaunti bandia, wakati mwingine wakinakili jina na picha ya rafiki halisi. Ombi la pili la urafiki kutoka kwa mtu ambaye tayari ni rafiki yako ni dalili ya hatari. Muulize mtu halisi kwa simu kabla ya kukubali.",
            "Federal Trade Commission (FTC, tume ya serikali ya Marekani inayolinda wateja) inataja dalili za ulaghai: kujifanya mtu unayemjua au kumwamini, tatizo au zawadi, shinikizo la kutenda sasa hivi, na kuomba malipo kwa kadi ya zawadi, uhamisho wa pesa (wire), programu ya malipo au sarafu za kidijitali (crypto). Kwenye mitandao ya kijamii hii inaonekana kama \"Umeshinda! Lipa ada ndogo\", ujumbe wa mapenzi ambao punde unaomba pesa, na nafasi za kazi au uwekezaji \"nzuri mno kuwa kweli\".",
            "Usitume kamwe pesa, kadi za zawadi au misimbo kwa mtu uliyekutana naye mtandaoni tu. Nchini Marekani unaweza kuripoti ulaghai kwenye reportfraud.ftc.gov."
          ],
          steps: ["Kuwa makini na maombi mapya ya urafiki, hasa kutoka kwa watu unaowajua tayari.", "Hakikisha kwa simu au ana kwa ana kabla ya kukubali.", "Angalia: zawadi, haraka, maombi ya pesa au kadi za zawadi, na mapenzi au kazi zinazogeuka kuwa pesa.", "Usibofye viungo vyao wala usitume pesa au misimbo.", "Ripoti akaunti ndani ya programu, na nchini Marekani kwenye reportfraud.ftc.gov."],
          words: [["Akaunti bandia", "wasifu uliotengenezwa na tapeli, mara nyingi ukinakili mtu halisi."], ["Ulaghai wa mapenzi", "tapeli anajifanya anakupenda mtandaoni, kisha anaomba pesa."]],
          slides: [
            { title: "Akaunti bandia", bullets: ["Ombi la pili kutoka kwa rafiki uliye naye tayari", "Wasifu mpya, machapisho machache, marafiki wachache", "Kwanza hakikisha na mtu halisi"] },
            { title: "Dalili za ulaghai kwa mujibu wa FTC", bullets: ["Anajifanya mtu unayemwamini", "Tatizo au zawadi", "Shinikizo la kutenda sasa", "Malipo kwa kadi ya zawadi, wire, programu ya malipo au crypto"] },
            { title: "Usitume kamwe", bullets: ["Pesa au kadi za zawadi kwa mtu uliyekutana naye mtandaoni tu", "Misimbo kutoka simu yako"] },
            { title: "Iripoti", bullets: ["Tumia kitufe cha Ripoti cha programu", "Marekani: reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Jinsi ya kuepuka ulaghai", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Ripoti udanganyifu", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Tazama maombi yako ya urafiki au wafuasi wako. Kwa yeyote usiye na uhakika naye, kagua wasifu kutafuta dalili za hatari. Mkatae yeyote ambaye huwezi kuthibitisha kuwa ni halisi.",
          youCanNow: "kutambua akaunti bandia au ulaghai kwenye mitandao ya kijamii na kuukataa.",
          quickCheck: [
            { objective: "O5", q: "Ni ipi kati ya hizi ni dalili ya hatari ya ulaghai kwenye mitandao ya kijamii?", options: ["Shinikizo la kutenda sasa hivi na kulipa kwa kadi ya zawadi", "Rafiki unayemjua akishiriki picha ya siku ya kuzaliwa", "Kikundi cha eneo lako kikiweka saa ya mkutano", "Video kuhusu kupika"], answer: 0, why: "Shinikizo la kutenda sasa na malipo kwa kadi ya zawadi ni dalili ambazo FTC inazitaja." },
            { objective: "O5", q: "Mtu uliyekutana naye mtandaoni anakupa kazi ukimtumia kwanza msimbo kutoka simu yako. Ungefanya nini?", options: ["Kutuma msimbo haraka", "Kutuma pesa badala ya msimbo", "Kumpa nywila yako", "Kukataa, na kutotuma kamwe misimbo kwa mtu uliyekutana naye mtandaoni tu"], answer: 3, why: "Usitume kamwe pesa, kadi za zawadi au misimbo kwa mtu uliyekutana naye mtandaoni tu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuripoti, kuzuia na kupumzika",
          minutes: 4,
          goal: "Zuia au ripoti akaunti na udhibiti muda unaotumia.",
          text: [
            "Kuzuia (Block) kunamzuia mtu kuona machapisho yako au kuwasiliana nawe. Kuripoti (Report) kunaiambia programu kwamba akaunti au chapisho linavunja sheria zake, kama ulaghai, akaunti bandia au uonevu. Kuacha kufuata (Unfollow) au kunyamazisha (Mute) kunaficha machapisho ya mtu bila kumwambia.",
            "Vitufe hivi kwa kawaida viko kwenye menyu ya vitone vitatu kwenye chapisho au kwenye wasifu wa mtu. Programu haimwambii mtu kwamba umemripoti.",
            "Mitandao ya kijamii imetengenezwa ili uendelee kusogeza skrini. Simu na programu nyingi zina mpangilio wa muda wa skrini au kikomo cha muda. Chagua nyakati za kuiangalia, na uache kwa muda kama machapisho yanakukasirisha au kukuhuzunisha."
          ],
          steps: ["Gusa vitone vitatu kwenye chapisho au wasifu.", "Chagua Ripoti na uchague sababu, au Zuia.", "Tumia Nyamazisha au Acha kufuata kuficha machapisho kimya kimya.", "Katika Mipangilio, tafuta muda wa skrini au kikomo cha muda cha kila siku."],
          words: [["Kuzuia (block)", "kunamzuia mtu kukuona au kuwasiliana nawe."], ["Kuripoti (report)", "kunaiambia programu kwamba akaunti au chapisho linavunja sheria zake."], ["Kunyamazisha (mute)", "kunaficha machapisho ya mtu bila kumwambia."]],
          slides: [
            { title: "Zana zako", bullets: ["Zuia: hawawezi kuwasiliana nawe", "Ripoti: iambie programu kuhusu tatizo", "Nyamazisha au Acha kufuata: ficha machapisho kimya kimya"] },
            { title: "Mahali pa kuzipata", bullets: ["Menyu ya vitone vitatu kwenye chapisho au wasifu", "Mtu haambiwi kwamba umemripoti"] },
            { title: "Pumzika", bullets: ["Tumia mipangilio ya muda wa skrini au kikomo cha muda", "Acha kwa muda kama machapisho yanakusumbua"] }
          ],
          tryIt: "Mazoezi ya kazi ya mwisho: kwenye chapisho lolote, gusa vitone vitatu na utafute Ripoti, Zuia na Nyamazisha (usivibonyeze isipokuwa unahitaji). Kisha hakikisha mpangilio wako wa faragha bado ni marafiki tu.",
          youCanNow: "kuzuia, kuripoti au kunyamazisha akaunti na kuweka kikomo cha muda wako.",
          quickCheck: [
            { objective: "O6", q: "Ripoti inafanya nini?", options: ["Inamtumia mtu huyo anwani yako", "Inafuta akaunti yako", "Inaiambia programu kwamba chapisho au akaunti linavunja sheria zake", "Inafanya machapisho yako kuwa ya hadharani"], answer: 2, why: "Ripoti inaiambia programu kuhusu ulaghai, akaunti bandia au uonevu." },
            { objective: "O6", q: "Ndugu anachapisha mambo mengi mno hivi kwamba unataka kuona machache, bila kumuudhi. Ungefanya nini?", options: ["Kumripoti kama tapeli", "Kumnyamazisha au kuacha kumfuata", "Kumzuia na kumwambia kila mtu", "Kufuta akaunti yako mwenyewe"], answer: 1, why: "Kunyamazisha au kuacha kufuata kunaficha machapisho yake bila kumwambia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kulinda faragha na usalama wako",
        questions: [
          { objective: "O4", q: "\"Hadharani\" (public) inamaanisha nini kwa chapisho?", options: ["Wewe tu unaweza kukiona", "Mtu yeyote, hata wasiokujua, anaweza kukiona", "Familia yako tu inaweza kukiona", "Kimefutwa"], answer: 1, why: "Machapisho ya hadharani yanaweza kuonwa na mtu yeyote." },
          { objective: "O5", q: "Rafiki ambaye tayari mmeunganishwa anakutumia ombi jipya la urafiki. Hatua salama zaidi ni ipi?", options: ["Kulikubali mara moja", "Kumtumia pesa", "Kumpigia rafiki halisi simu kuhakikisha kabla ya kukubali", "Kumpa msimbo wa simu yako"], answer: 2, why: "Matapeli hunakili akaunti za marafiki halisi." },
          { objective: "O5", q: "Mtu uliyekutana naye mtandaoni mwezi uliopita anasema anakupenda na anahitaji pesa za tiketi ya ndege. Huu kwa uwezekano mkubwa ni:", options: ["Ulaghai wa mapenzi", "Ombi la kawaida", "Nafasi ya kazi", "Mpangilio wa faragha"], answer: 0, why: "Mapenzi ya mtandaoni yanayogeuka kuwa maombi ya pesa ni ulaghai wa kawaida." },
          { objective: "O6", q: "Ni kitufe kipi kinamzuia mtu kuwasiliana nawe?", options: ["Penda (Like)", "Shiriki (Share)", "Maoni (Comment)", "Zuia (Block)"], answer: 3, why: "Zuia inamzuia kukuona au kuwasiliana nawe." },
          { objective: "O6", q: "Ripoti na Zuia kwa kawaida viko wapi?", options: ["Kwenye kamera", "Kwenye menyu ya vitone vitatu kwenye chapisho au wasifu", "Kwenye orodha ya mawasiliano yako", "Kwenye duka la programu"], answer: 1, why: "Menyu ya vitone vitatu ina machaguo haya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Programu za Mitandao ya Kijamii na Jinsi ya Kuzitumia",
    questions: [
      { objective: "O1", q: "Ni programu ipi hasa ni ya kazi na mawasiliano ya kikazi?", options: ["TikTok", "LinkedIn", "Instagram", "YouTube"], answer: 1, why: "LinkedIn imetengenezwa kwa ajili ya kazi na ajira." },
      { objective: "O1", q: "Ni programu ipi hasa ni ya kutazama na kujifunza kutoka kwa video?", options: ["YouTube", "WhatsApp", "Nextdoor", "LinkedIn"], answer: 0, why: "YouTube ni programu ya video." },
      { objective: "O3", q: "\"Mlisho\" (feed) ni:", options: ["Nywila yako", "Mpangilio wa faragha", "Orodha ya machapisho unayosogeza na kusoma", "Aina ya maoni"], answer: 2, why: "Mlisho wako unaonyesha machapisho ya watu na vikundi unavyofuata." },
      { objective: "O2", q: "Unapaswa kupakua programu ya mitandao ya kijamii kutoka wapi?", options: ["Kutoka kwenye kiungo alichotuma mtu usiyemjua", "Kutoka kwenye dirisha linalojitokeza (pop-up)", "Kutoka kwenye tovuti yoyote", "Kutoka duka rasmi la programu"], answer: 3, why: "Maduka rasmi yana programu halisi." },
      { objective: "O2", q: "Ni kipi kinafaa kwenye wasifu salama?", options: ["Jina lako na picha ya kirafiki", "Tarehe yako kamili ya kuzaliwa na anwani", "Taarifa zako za benki", "Tarehe za safari zako"], answer: 0, why: "Jina na picha ni sawa; taarifa binafsi si sawa." },
      { objective: "O2", q: "Kwa nini usichapishe kwamba uko likizo mbali?", options: ["Inafanya programu iwe polepole", "Inawaambia watu usiowajua kwamba nyumba yako huenda iko tupu", "Ni kinyume cha sheria zote", "Inatumia kifurushi chako cha data"], answer: 1, why: "Machapisho ya safari yanaweza kuwaambia wezi wakati hakuna mtu nyumbani." },
      { objective: "O2", q: "Uthibitisho wa hatua mbili unahitaji:", options: ["Nywila yako tu", "Nywila ya rafiki", "Namba yako ya benki", "Nywila yako na msimbo kutoka simu yako"], answer: 3, why: "Unaongeza ukaguzi wa pili kutoka simu yako." },
      { objective: "O3", q: "Kabla ya kumfuata mtu, kagua:", options: ["Picha yake, marafiki mnaoshiriki na machapisho yake", "Salio lake la benki", "Nywila yake", "Hakuna kitu"], answer: 0, why: "Hii inasaidia kuhakikisha ni mtu halisi." },
      { objective: "O3", q: "Kikundi kwenye mitandao ya kijamii ni:", options: ["Virusi", "Nywila", "Sehemu kwa watu wenye shauku moja", "Aina ya tangazo"], answer: 2, why: "Vikundi vinawakusanya watu kuzunguka shauku moja." },
      { objective: "O3", q: "Kabla ya kugusa Chapisha, unapaswa kukagua:", options: ["Betri yako", "Hali ya hewa", "Akaunti yako ya benki", "Nani anaweza kukiona"], answer: 3, why: "Kukagua wasomaji kunalinda faragha yako." },
      { objective: "O3", q: "Ni maoni yapi ni ya wema na yanafaa?", options: ["Kiungo kutoka kwa mtu usiyemjua", "Tusi", "Namba yako ya simu", "\"Picha nzuri sana, watoto wanaonekana na furaha kweli!\""], answer: 3, why: "Andika kana kwamba mtu huyo yuko chumbani nawe." },
      { objective: "O4", q: "Mipangilio ya faragha inadhibiti:", options: ["Betri ya simu yako", "Rangi za programu", "Nani anaweza kuona machapisho yako na kuwasiliana nawe", "Kasi ya intaneti yako"], answer: 2, why: "Inaamua nani anakuona na nani anakufikia." },
      { objective: "O4", q: "Chaguo zuri la kwanza la faragha ni:", options: ["Machapisho kuwa ya hadharani", "Kumruhusu mtu yeyote akutumie ujumbe", "Kushiriki mahali ulipo kwenye kila chapisho", "Machapisho kuwa ya marafiki au wafuasi uliowakubali"], answer: 3, why: "Marafiki tu kunawazuia watu usiowajua." },
      { objective: "O4", q: "Kuzima mahali ulipo kwenye machapisho:", options: ["Kunawazuia marafiki zako", "Kunafuta akaunti yako", "Kunazuia watu kujua uko wapi", "Kunafanya picha zisionekane vizuri"], answer: 2, why: "Mahali ulipo hapaonyeshwi tena kwenye machapisho." },
      { objective: "O5", q: "Ujumbe unasema umeshinda zawadi lakini lazima kwanza ulipe ada ndogo. Hii ni:", options: ["Zawadi ya kawaida", "Mpangilio wa faragha", "Ombi la urafiki", "Dalili ya ulaghai"], answer: 3, why: "FTC inataja zawadi yenye ada kuwa dalili ya ulaghai." },
      { objective: "O5", q: "Ni ombi lipi la malipo ni dalili ya hatari?", options: ["Kadi za zawadi", "Kulipa duka kwenye kaunta", "Kulipa bili ya simu kwenye tovuti ya kampuni", "Kumlipa daktari kwenye mapokezi"], answer: 0, why: "Matapeli huomba kadi za zawadi kwa sababu ni vigumu kuzifuatilia." },
      { objective: "O5", q: "Nchini Marekani, unaweza kuripoti ulaghai wa mitandao ya kijamii kwa:", options: ["Sehemu ya maoni", "Tapeli mwenyewe", "reportfraud.ftc.gov", "Mlisho wako"], answer: 2, why: "FTC inapokea ripoti za udanganyifu hapo." },
      { objective: "O6", q: "Kunyamazisha (Mute) kunafanya nini?", options: ["Kunaripoti uhalifu", "Kunafuta akaunti yake", "Kunapiga simu polisi", "Kunaficha machapisho ya mtu bila kumwambia"], answer: 3, why: "Kunyamazisha kunaficha machapisho kimya kimya." },
      { objective: "O6", q: "Unaporipoti akaunti, programu:", options: ["Inamwambia jina lako", "Inafuta wasifu wako", "Haimwambii kwamba umemripoti", "Inatoza ada"], answer: 2, why: "Ripoti zinafichwa kwa mtu huyo." },
      { objective: "O6", q: "Machapisho yanaendelea kukukasirisha. Hatua yenye afya ni:", options: ["Kusogeza zaidi", "Kutumia kikomo cha muda na kuacha kwa muda", "Kuchapisha anwani yako", "Kukubali kila ombi"], answer: 1, why: "Vikomo vya muda na mapumziko vinalinda ustawi wako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 4, 5, 7, 9, 11, 12, 14, 15, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mipangilio ya faragha", objective: "O4", notYet: "Machapisho bado ni ya hadharani, au mtu yeyote anaweza kufuata bila kukubaliwa.", meets: "Machapisho yanaonekana kwa marafiki au wafuasi waliokubaliwa tu.", exceeds: "Pia anapunguza nani anaweza kumtumia ujumbe na amezima mahali alipo kwenye machapisho." },
      { name: "Kufuata kwa usalama", objective: "O3", notYet: "Hakumfuata mtu yeyote, au alifuata akaunti bila kukagua kama ni halisi.", meets: "Anamfuata mwanafamilia au rafiki mmoja aliyekaguliwa na kikundi au ukurasa mmoja wa eneo lake.", exceeds: "Anaeleza jinsi alivyokagua picha, marafiki wanaoshiriki na machapisho." },
      { name: "Maoni ya wema", objective: "O3", notYet: "Hakuna maoni, au maoni si ya wema au yanatoa taarifa binafsi.", meets: "Maoni moja ya wema na yanayofaa kwenye chapisho.", exceeds: "Maoni ni ya upendo na yanahusu chapisho hilo hasa." },
      { name: "Kitufe cha Ripoti", objective: "O6", notYet: "Hawezi kupata Ripoti kwenye chapisho au akaunti.", meets: "Anapata Ripoti kwenye menyu ya vitone vitatu ya chapisho au akaunti.", exceeds: "Pia anapata Zuia na Nyamazisha na anasema wakati wa kutumia kila kimoja." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa kazi ya mwisho",
      "Wanafunzi wanaoripoti kwamba machapisho yao bado ni ya faragha na uthibitisho wa hatua mbili bado umewashwa baada ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kukataa au kuripoti ombi la urafiki bandia au ujumbe wa ulaghai",
      "Wanafunzi wanaoripoti kujiunga na kikundi cha eneo lao, kanisa, kazi au familia wanachokitumia"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja, tableti au kompyuta yenye intaneti",
      "Programu moja ya mitandao ya kijamii kutoka duka rasmi, na barua pepe au namba ya simu ya kujisajili",
      "Picha za skrini za mifano ya ujumbe wa ulaghai na maombi ya urafiki bandia kwa mazoezi",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Mwache kila mwanafunzi achague programu moja inayofaa lengo lake; usiwalazimishe wote kujiunga na programu moja.",
      "Fanyeni mipangilio ya faragha pamoja, hatua kwa hatua, kwenye skrini ya kila mwanafunzi mwenyewe; usiingie kamwe kwenye akaunti ya mwanafunzi wewe mwenyewe.",
      "Tumia picha za skrini kwa mazoezi ya ulaghai ili mtu yeyote asilazimike kuwasiliana na tapeli halisi.",
      "Zungumzeni kuhusu umri wa chini kama wanafunzi wanafungua akaunti kwa ajili ya wajukuu au watoto.",
      "Baadhi ya wanafunzi huenda waliwahi kutapeliwa mtandaoni; tumia sauti isiyolaumu na uonyeshe mahali pa kuripoti."
    ]
  }
};
