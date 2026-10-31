"use strict";

// Koach Learn course (Swahili translation of shared/tvet-choosing-a-program.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "tvet-choosing-a-program-sw",
  lang: "sw",
  translationOf: "tvet-choosing-a-program",
  category: "Workforce Development",
  name: "Kuchagua Programu ya Mafunzo ya Ufundi (TVET)",
  skills: "Kulinganisha fani na wewe na kazi za eneo lako, Kulinganisha aina za programu, Kukagua ithibati kwenye rejista rasmi, Kuuliza chuo maswali sahihi, Kutambua vyuo bandia na ulaghai wa mafunzo, Kuandika mpango wa uamuzi wa programu",
  outcome: "kuchagua programu ya mafunzo ya ufundi (TVET) inayokufaa wewe na kazi zilizo karibu nawe: kulinganisha chaguo, kukagua kwenye rejista rasmi kwamba chuo na programu vimepata ithibati, kuuliza chuo maswali sahihi, kuepuka vyuo bandia, na kuandika mpango wa uamuzi wenye gharama na tarehe.",
  about: [
    "Kozi hii ni kwa vijana na watu wazima popote duniani wanaotaka kujifunza fani au ujuzi wa kiufundi: fundi umeme, fundi bomba, fundi cherehani, fundi kuchomelea, fundi magari, msusi, mpishi, fundi wa nishati ya jua, msaidizi wa uuguzi, fundi wa kompyuta na nyingine nyingi. Inatumia mifano kutoka Kenya, Nigeria, Ghana, Senegal, Moroko, Misri, India, Ufilipino, Meksiko, Kolombia na Marekani.",
    "Kuchagua programu ni uamuzi mkubwa. Unagharimu pesa na miezi au miaka ya maisha yako. Baadhi ya programu zinaongoza kwenye kazi nzuri. Nyingine ni za zamani, hazina vifaa vya kutosha, hazitambuliwi, au ni bandia. Utajifunza kuchagua fani inayokufaa wewe na soko la ajira, kulinganisha aina za programu, kukagua chuo kwenye rejista rasmi ya serikali, kuuliza chuo maswali magumu, na kutambua ulaghai.",
    "Kozi hii haikupi cheti cha fani yoyote na haipendekezi chuo chochote. Inakufundisha jinsi ya kuchagua vizuri. Kila somo linachukua kama dakika tano, likiwa na kazi ya \"Jaribu sasa\", jaribio fupi la haraka, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Unamaliza ukiwa na mpango wako mwenyewe wa uamuzi wa programu."
  ],
  finalTask: "Andika mpango wa uamuzi wa programu wa ukurasa mmoja kwa ajili yako: fani uliyochagua na kwa nini (mambo unayopenda na kazi za eneo lako ulizopata), programu mbili zikilinganishwa kando kwa kando (aina, muda, masharti ya kujiunga, gharama kamili na cheti utakachopata), ushahidi kwamba kila moja imepata ithibati (rejista rasmi uliyokagua na ilionyesha nini), majibu ya chuo kwa maswali yako, dalili zozote za hatari ulizoziona, na hatua zako zinazofuata pamoja na tarehe na jinsi utakavyolipa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wanaomaliza shule ya msingi au sekondari na watu wazima wanaotaka fani mpya au cheti chao cha kwanza, barani Afrika, Asia, Amerika ya Kusini, Mashariki ya Kati na Marekani. Wengi ni wa kwanza katika familia yao kuchagua programu ya mafunzo. Baadhi wanazungumza Kiingereza au Kifaransa kama lugha ya pili; kozi imetafsiriwa katika lugha kumi.",
    startingPoint: "Wanajua majina ya fani chache, mara nyingi kutoka kwa familia au marafiki. Wengi hawajawahi kukagua kama chuo kimepata ithibati, kulinganisha gharama kamili za programu, au kuangalia kazi zipi zinahitajika mahali wanapoishi. Wengi wanapata ushauri kutoka kwa matangazo au mitandao ya kijamii.",
    gap: "Wanafunzi wanahitaji kuchagua programu inayotambuliwa, inayofundisha ujuzi halisi wa vitendo na inayoongoza kwenye kazi, na kuepuka vyuo bandia na ulaghai unaochukua ada na kutoa vyeti visivyo na thamani. Uchaguzi wa makini unaokoa pesa na miaka, na unaongeza nafasi ya kupata kazi au biashara.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6); wasomaji wengi wa lugha ya pili",
      "Vifaa: mara nyingi simu janja ya kawaida yenye data kidogo; baadhi wanatumia kompyuta ya mtandao (cyber cafe) au ya shule",
      "Sheria zinatofautiana kwa nchi: kila nchi ina mamlaka yake ya TVET na rejista yake, kwa hiyo masomo yanafundisha jinsi ya kuzipata na kuzikagua, si sheria za nchi moja",
      "Gharama: wanafunzi wanaweza kuwa na pesa kidogo; usimlipe kamwe mtu au wakala ada kabla ya kukagua chuo",
      "Muda: masomo ya dakika 4 hadi 6; kama dakika 60 hadi 75 kwa jumla"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao bado wanaamua fani wanaweza pia kusoma \"Kazi za Fani za Ufundi\"; wanafunzi wapya kwenye intaneti wanaweza kuanza na \"Misingi ya Intaneti\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia mambo unayopenda na unachoweza kugundua kuhusu kazi mahali unapoishi", action: "kuorodhesha fani tatu zinazokufaa na zinazohitajika katika eneo lako", standard: "ukiwa na angalau ushahidi mmoja wa soko la ajira kwa kila moja, kama matangazo ya kazi au mwajiri uliyemuuliza" },
    { id: "O2", condition: "Ukipewa chaguo mbili au zaidi za mafunzo", action: "kulinganisha programu kwa aina, muda, masharti ya kujiunga, gharama kamili na cheti utakachopata", standard: "katika jedwali lililoandikwa bila kisanduku chochote kitupu" },
    { id: "O3", condition: "Ukipewa jina la chuo na la programu", action: "kukagua kwenye rejista rasmi ya mamlaka ya kitaifa ya TVET kwamba chuo na programu vimepata ithibati", standard: "na kuandika ulikagua wapi na ilionyesha nini" },
    { id: "O4", condition: "Kabla ya kujiandikisha", action: "kuuliza chuo kuhusu mazoezi ya vitendo, vifaa, wakufunzi, mtihani wa mwisho, matokeo ya kazi na gharama kamili", standard: "na kuandika jibu la kila swali" },
    { id: "O5", condition: "Ukipewa tangazo, ujumbe au ofa kuhusu mafunzo", action: "kutambua dalili za hatari za chuo bandia au ulaghai wa mafunzo", standard: "ukitaja angalau dalili mbili zikiwepo na bila kulipa kabla ya kukagua" },
    { id: "O6", condition: "Ukitumia ulinganisho na ukaguzi wako", action: "kuandika mpango wa uamuzi wa programu wenye chaguo lako, gharama, ufadhili na tarehe", standard: "ambao mtu mwingine anaweza kuufuata" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata fani sahihi na aina sahihi ya programu",
      lessons: [
        {
          title: "TVET ni nini na inaweza kukupeleka wapi",
          objectives: ["O1"],
          minutes: 4,
          goal: "Taja fani tano au kazi za kiufundi ambazo programu za TVET zinawaandaa watu kuzifanya.",
          text: [
            "TVET ni kifupi cha Technical and Vocational Education and Training, yaani Elimu na Mafunzo ya Ufundi Stadi. UNESCO (shirika la Umoja wa Mataifa la elimu) inaieleza kama elimu, mafunzo na ukuzaji wa ujuzi kwa aina nyingi za kazi na njia za kujipatia riziki. Kwa maneno rahisi: TVET inakufundisha kufanya kazi kwa mikono yako, zana na maarifa.",
            "TVET inafanyika sehemu nyingi: vyuo vya ufundi, vyuo vya polytechnic, vituo vya mafunzo, uanagenzi kwa mwajiri au fundi mkuu, na baadhi ya shule za sekondari. Majina yanatofautiana: polytechnic nchini Ghana au Nigeria, chuo cha TVET nchini Kenya, kituo cha mafunzo kilichosajiliwa na TESDA nchini Ufilipino, shule ya CONALEP nchini Meksiko, kituo cha SENA nchini Kolombia, community college nchini Marekani.",
            "Fani ni pamoja na ujenzi (fundi umeme, fundi bomba, mwashi, seremala, fundi kuchomelea), mashine na magari (fundi magari, ukarabati wa pikipiki, majokofu na viyoyozi), huduma (usukaji nywele, urembo, ushonaji, upishi, kazi za hoteli), utunzaji (msaidizi wa uuguzi, mlezi), kilimo na usindikaji wa chakula, na teknolojia (ukarabati wa kompyuta, mitandao ya kompyuta, ufungaji wa nishati ya jua, ukarabati wa simu).",
            "Programu nzuri ya TVET inaweza kukupeleka kwenye kazi, uanagenzi, biashara yako ndogo, au masomo zaidi. Programu mbaya haikupeleki popote, kwa hiyo sehemu iliyobaki ya kozi hii inahusu kuchagua vizuri."
          ],
          words: [["TVET", "Elimu na Mafunzo ya Ufundi Stadi: kujifunza ujuzi wa kazi kwa vitendo, si kwa vitabu tu."], ["Fani", "kazi ya ujuzi unayojifunza kwa mafunzo na mazoezi, kama ufundi bomba au ushonaji."], ["Polytechnic", "chuo kinachofundisha masomo ya kiufundi na ya vitendo, mara nyingi hadi ngazi ya diploma."]],
          slides: [
            { title: "TVET kwa maneno rahisi", bullets: ["Elimu na Mafunzo ya Ufundi Stadi", "Kujifunza ujuzi wa kazi kwa zana na mazoezi"] },
            { title: "TVET inafanyika wapi", bullets: ["Vyuo vya TVET, polytechnic, vituo vya mafunzo", "Uanagenzi kwa mwajiri au fundi mkuu", "Community colleges nchini Marekani"] },
            { title: "Baadhi ya fani", bullets: ["Fundi umeme, fundi bomba, fundi kuchomelea, mwashi", "Fundi magari, fundi cherehani, msusi, mpishi", "Nishati ya jua, ukarabati wa kompyuta na simu, utunzaji"] },
            { title: "Inakupeleka wapi", bullets: ["Kazi au uanagenzi", "Biashara yako ndogo", "Masomo zaidi"] }
          ],
          sources: [{ name: "UNESCO-UNEVOC TVETipedia: Elimu na mafunzo ya ufundi stadi", url: "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/show=term/term=Technical+and+vocational+education+and+training" }],
          tryIt: "Kwenye karatasi, andika fani tano kutoka somo hili zinazokuvutia zaidi. Kando ya kila moja, andika mtu mmoja unayemjua anayefanya kazi hiyo au kazi inayokaribiana nayo.",
          youCanNow: "kusema TVET ni nini, inafundishwa wapi, na kutaja fani tano inazoweza kukupeleka.",
          quickCheck: [
            { objective: "O1", q: "Programu ya TVET inafundisha nini hasa?", options: ["Nadharia kutoka vitabuni tu", "Jinsi ya kufaulu mtihani wowote wa chuo kikuu", "Ujuzi wa kazi kwa mazoezi kwa kutumia zana", "Jinsi ya kupata viza"], answer: 2, why: "TVET ni mafunzo ya kazi au fani, yenye mazoezi ya vitendo." },
            { objective: "O1", q: "Kipi kati ya hivi ni njia ya TVET?", options: ["Kozi ya miaka miwili ya ufungaji umeme katika chuo cha ufundi", "Tiketi ya bahati nasibu", "Ukurasa wa mitandao ya kijamii kuhusu mitindo", "Mkopo kutoka kwa mkopeshaji binafsi"], answer: 0, why: "Kozi ya fani katika chuo cha ufundi ni programu ya TVET." }
          ]
        },
        {
          title: "Kuchagua fani inayokufaa wewe na kazi za eneo lako",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha fani tatu zinazolingana na mambo unayopenda na uonyeshe ushahidi kwamba kila moja inahitajika mahali unapoishi.",
          text: [
            "Anza na wewe. Unapenda kufanya kazi ndani au nje? Na watu, mashine, chakula, vitambaa au kompyuta? Wewe ni hodari wa hesabu, makini na maelezo madogo, mwenye nguvu, mvumilivu? Unataka kazi katika kampuni au biashara yako mwenyewe?",
            "Kisha angalia kazi. Fani unayoipenda ni ngumu kuishi nayo kama hakuna mtu karibu nawe anayeajiri au anayenunua. Tafuta ushahidi: hesabu matangazo ya kazi ya fani hiyo kwenye tovuti za kazi, magazetini na kwenye mbao za matangazo; waulize waajiri au wafanyabiashara wawili au watatu ni ujuzi gani hawaupati; waulize watu wanaofanya kazi katika fani hiyo ilikuwa rahisi kiasi gani kupata kazi na wateja.",
            "Baadhi ya serikali zinachapisha taarifa za soko la ajira, kama orodha za ujuzi unaohitajika. Zitafute kwenye tovuti ya wizara ya kazi ya nchi yako. Kuwa makini na orodha unazoziona kwenye matangazo au machapisho ya mitandao ya kijamii: chuo kinachouza kozi kitasema kila wakati kwamba fani yake inahitajika.",
            "Chagua fani tatu zinazokufaa na zenye ushahidi fulani wa kuhitajika. Utalinganisha programu zake katika masomo yanayofuata."
          ],
          steps: ["Andika unachopenda na unachoweza vizuri.", "Orodhesha fani zinazolingana.", "Kwa kila moja, tafuta ushahidi wa kazi: matangazo, waajiri, watu walio katika fani hiyo.", "Baki na fani tatu zinazokufaa zaidi na zenye ushahidi bora."],
          words: [["Mahitaji", "idadi ya waajiri au wateja wanaotaka ujuzi fulani."], ["Taarifa za soko la ajira", "ukweli kuhusu kazi: zipi zinakua, zinalipa kiasi gani na zinahitaji ujuzi gani."]],
          slides: [
            { title: "Anza na wewe", bullets: ["Ndani au nje? Watu au mashine?", "Wewe ni hodari wa nini?", "Kazi ya kampuni au biashara yako mwenyewe?"] },
            { title: "Kisha angalia kazi", bullets: ["Hesabu matangazo ya kazi ya fani hiyo", "Waulize waajiri 2 au 3 wanahitaji ujuzi gani", "Waulize watu wanaofanya kazi katika fani hiyo"] },
            { title: "Kuwa makini na matangazo", bullets: ["Chuo kinachouza kozi husema \"inahitajika sana\"", "Tafuta taarifa za wizara ya kazi yenyewe"] },
            { title: "Orodha yako fupi", bullets: ["Fani tatu zinazokufaa", "Ushahidi fulani wa mahitaji kwa kila moja"] }
          ],
          tryIt: "Tengeneza jedwali lenye mistari mitatu, mmoja kwa kila fani. Safu: kwa nini inanifaa, ushahidi wa kazi (kwa mfano \"matangazo 5 wiki hii\" au \"mwenye gereji alisema anahitaji fundi magari aliyefunzwa\"), na nilipata wapi. Jaza kila kisanduku.",
          youCanNow: "kuchagua fani tatu zinazokufaa na kuunga mkono kila moja kwa ushahidi halisi wa mahitaji ya eneo lako.",
          quickCheck: [
            { objective: "O1", q: "Upi ni ushahidi bora kwamba fani inahitajika mahali unapoishi?", options: ["Tangazo la chuo linasema hivyo", "Ulihesabu matangazo mengi ya kazi na waajiri wawili walisema wanaihitaji", "Rafiki mtandaoni alisema inalipa vizuri kila mahali", "Inapendwa katika nchi nyingine"], answer: 1, why: "Matangazo ya kazi na waajiri walio karibu nawe ni ushahidi halisi; matangazo ya chuo kinachouza kozi si ushahidi." },
            { objective: "O1", q: "Unapenda ubunifu wa mitindo ya mavazi, lakini hukupata kazi karibu nawe. Hatua gani ya busara inayofuata?", options: ["Kuacha mafunzo yoyote", "Kujiandikisha katika kozi ya kwanza unayoiona", "Kutafuta wateja na fani zinazohusiana, kama ushonaji, na kukagua mahitaji yake", "Kumlipa wakala akutafutie kazi nje ya nchi"], answer: 2, why: "Fani zinazohusiana zenye mahitaji katika eneo lako zinaweza kutumia hamu ile ile na kukupa njia ya kupata kipato." }
          ]
        },
        {
          title: "Aina za programu na cheti unachopata",
          objectives: ["O2"],
          minutes: 6,
          goal: "Linganisha aina za programu kwa muda, masharti ya kujiunga, gharama na cheti unachopata.",
          text: [
            "TVET iko ya aina kadhaa. Kozi fupi huchukua siku chache hadi miezi michache na hufundisha ujuzi mmoja. Programu za cheti na diploma katika vyuo na polytechnic huchukua muda mrefu zaidi na kwa kawaida huchanganya nadharia darasani na mazoezi karakana. Vyeti vya kitaifa, kama vile vinavyotolewa kupitia TESDA nchini Ufilipino, vinategemea viwango vya kitaifa na tathmini. Uanagenzi unakuweka kazini kwa mwajiri au fundi mkuu huku ukijifunza; nchini Marekani, Registered Apprenticeships (uanagenzi uliosajiliwa) zimeorodheshwa kwenye apprenticeship.gov. Mafunzo ya pande mbili (dual training) yanagawa muda wako kati ya chuo na kampuni.",
            "Katika nchi nyingi, hasa Afrika Magharibi, vijana wengi hujifunza kupitia uanagenzi usio rasmi kwa fundi mkuu. Huu unaweza kufundisha ujuzi halisi, lakini cheti chake kinaweza kisitambuliwe. Uliza kama unaweza pia kufanya mtihani wa kitaifa wa fani au tathmini ili upate cheti kinachotambuliwa.",
            "Linganisha kila chaguo kwa mambo matano yale yale: aina ya programu, muda, masharti ya kujiunga (kwa mfano cheti cha shule au umri wa chini), gharama kamili, na cheti unachopata mwishoni na nani anakitoa. Cheti kinachotolewa au kutambuliwa na mamlaka ya kitaifa kina thamani zaidi kwa waajiri kuliko cheti kilichochapishwa na chuo peke yake."
          ],
          steps: ["Andika chaguo za fani moja.", "Kwa kila moja, andika aina na muda.", "Andika masharti ya kujiunga.", "Andika gharama kamili (ada, zana, sare, mtihani, usafiri).", "Andika cheti na nani anakitoa au kukitambua."],
          words: [["Cheti", "hati kama cheti, diploma au leseni inayothibitisha ujuzi wako."], ["Uanagenzi", "kujifunza fani kwa kufanya kazi na mtu mwenye ujuzi au mwajiri, mara nyingi ukilipwa."], ["Tathmini", "mtihani ambapo unaonyesha ujuzi wako, mara nyingi kwa kufanya kazi halisi."]],
          slides: [
            { title: "Aina za programu", bullets: ["Kozi fupi: siku hadi miezi, ujuzi mmoja", "Cheti au diploma katika chuo au polytechnic", "Uanagenzi au mafunzo ya pande mbili kwa mwajiri"] },
            { title: "Uanagenzi usio rasmi", bullets: ["Kujifunza kwa fundi mkuu", "Ujuzi halisi, lakini cheti kinaweza kisitambuliwe", "Uliza kuhusu mtihani wa kitaifa wa fani"] },
            { title: "Linganisha mambo matano", bullets: ["Aina na muda", "Masharti ya kujiunga", "Gharama kamili", "Cheti na nani anakitoa"] },
            { title: "Cheti kipi kina uzito?", bullets: ["Kinatolewa au kutambuliwa na mamlaka ya kitaifa: kina nguvu", "Kimechapishwa na chuo peke yake: dhaifu"] }
          ],
          sources: [{ name: "TESDA (Ufilipino)", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (Wizara ya Kazi ya Marekani)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Kwa fani yako ya kwanza, tafuta aina mbili tofauti za programu (kwa mfano cheti cha chuo na uanagenzi). Tengeneza jedwali lenye mambo matano: aina, muda, masharti ya kujiunga, gharama kamili na cheti. Andika \"haijulikani\" pale ambapo bado unahitaji kuuliza.",
          youCanNow: "kulinganisha programu za mafunzo kwa aina, muda, masharti ya kujiunga, gharama kamili na cheti zinazotoa.",
          quickCheck: [
            { objective: "O2", q: "Cheti kipi kwa kawaida kina thamani kubwa zaidi kwa waajiri?", options: ["Cheti ambacho chuo kilijichapishia chenyewe", "Cheti cha kozi ya mitandao ya kijamii", "Barua kutoka kwa rafiki", "Cheti kinachotolewa au kutambuliwa na mamlaka ya kitaifa ya TVET"], answer: 3, why: "Kutambuliwa kitaifa kunawaambia waajiri kwamba mafunzo yalifikia kiwango rasmi." },
            { objective: "O2", q: "\"Gharama kamili\" inapaswa kujumuisha nini?", options: ["Ada ya mwezi wa kwanza tu", "Ada, zana, sare, ada za mtihani na usafiri", "Bei iliyo kwenye bango tu", "Hakuna; programu nzuri huwa bure kila wakati"], answer: 1, why: "Gharama zilizofichwa kama zana, mitihani na usafiri zinaweza kufanya unacholipa kuwa mara mbili." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata fani na programu sahihi",
        questions: [
          { objective: "O1", q: "TVET ni kifupi cha nini?", options: ["Technical and Vocational Education and Training", "Travel Visa and Employment Test", "Teacher Validation and Exam Tool", "Trade Value Exchange Tax"], answer: 0, why: "TVET ni Technical and Vocational Education and Training (Elimu na Mafunzo ya Ufundi Stadi)." },
          { objective: "O1", q: "Unataka kukagua mahitaji ya ufundi bomba katika mji wako. Hatua ipi ni bora?", options: ["Kuamini bango la chuo cha mafunzo", "Kumuuliza mkandarasi wa ufundi bomba na kuhesabu matangazo ya kazi ya eneo lako", "Kutafuta kazi za ufundi bomba katika bara jingine", "Kubahatisha"], answer: 1, why: "Waajiri na matangazo ya kazi ya eneo lako ni ushahidi halisi wa mahitaji mahali unapoishi." },
          { objective: "O2", q: "Programu ipi inakuweka kazini kwa mwajiri huku ukijifunza?", options: ["Video fupi ya mtandaoni", "Semina ya siku moja", "Uanagenzi", "Kitabu cha kiada"], answer: 2, why: "Uanagenzi ni kujifunza kazini pamoja na mtu mwenye ujuzi au mwajiri." },
          { objective: "O2", q: "Ulijifunza kuchomelea kwa fundi mkuu katika karakana, lakini cheti chako hakitambuliwi. Nini kinaweza kusaidia?", options: ["Kununua cheti mtandaoni", "Kuacha kuchomelea", "Kuchapisha cheti chako mwenyewe", "Kuuliza kuhusu kufanya mtihani wa kitaifa wa fani au tathmini"], answer: 3, why: "Mtihani wa kitaifa wa fani au tathmini unaweza kukupa cheti kinachotambuliwa kwa ujuzi ulio nao tayari." },
          { objective: "O2", q: "Programu mbili zinafanana. Jambo lipi ni muhimu zaidi unapozilinganisha?", options: ["Rangi ya sare", "Nani anatoa au kutambua cheti", "Idadi ya picha kwenye tovuti yao", "Ukubwa wa bango lao"], answer: 1, why: "Cheti kinachotambuliwa na mamlaka ya kitaifa kina thamani kubwa zaidi kwa waajiri." }
        ]
      }
    },
    {
      name: "Sura 2: Kukagua chuo na kufanya uchaguzi wako",
      lessons: [
        {
          title: "Kimepata ithibati? Kukagua rejista rasmi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kagua kwenye tovuti rasmi ya mamlaka ya kitaifa ya TVET kwamba chuo na programu yake vimesajiliwa au vimepata ithibati.",
          text: [
            "Nchi nyingi zina chombo cha serikali kinachosajili au kutoa ithibati kwa vyuo na programu za TVET. Kupata ithibati kunamaanisha mamlaka ilikagua kwamba chuo kinafikia viwango vyake. Cheti kutoka chuo kisicho na ithibati kinaweza kisikubaliwe na waajiri, na vyuo vingine, au kwa kazi nje ya nchi.",
            "Mifano: nchini Kenya, Mamlaka ya TVET (TVETA) inatoa leseni, inasajili na kutoa ithibati kwa taasisi na inachapisha orodha ya taasisi zilizopata ithibati kwenye tveta.go.ke. Nchini Nigeria, National Board for Technical Education (NBTE) inasimamia taasisi za TVET kama polytechnic na vyuo vya ufundi. Nchini Ufilipino, TESDA inaorodhesha taasisi za mafunzo zenye programu zilizosajiliwa. Nchini Ghana, tafuta Commission for TVET (CTVET); nchini India, National Council for Vocational Education and Training (NCVET) na Skill India; nchini Moroko, OFPPT ni mtoaji mkubwa wa umma; nchini Meksiko, CONALEP ni mfumo wa umma wa shule za ufundi; nchini Kolombia, SENA ni huduma ya umma ya mafunzo. Nchini Senegal, Misri na nchi nyingine, anza na wizara inayohusika na elimu ya ufundi. Nchini Marekani, kagua Registered Apprenticeships kwenye apprenticeship.gov na uulize jimbo lako kuhusu vyuo vyenye leseni.",
            "Kagua jina la chuo NA la programu. Chuo kinaweza kuwa kimesajiliwa wakati moja ya kozi zake haijasajiliwa. Tumia tovuti rasmi (mara nyingi inaishia na .gov, .go.ke, .gov.ng, .gov.ph au mwisho wa tovuti za serikali ya nchi yako), si kiungo kilichotumwa na chuo au wakala. Usipokipata chuo, piga simu au tembelea ofisi ya mamlaka na uulize."
          ],
          steps: ["Tafuta mamlaka ya TVET ya nchi yako kupitia tovuti ya wizara ya elimu au ya kazi.", "Fungua tovuti yake rasmi mwenyewe; usitumie kiungo kutoka kwa chuo.", "Tafuta kwenye rejista jina kamili la chuo na tawi lake.", "Hakikisha programu yako pia imeorodheshwa.", "Andika tovuti, tarehe na ilionyesha nini. Kama hakimo, uliza mamlaka moja kwa moja."],
          words: [["Ithibati", "kukaguliwa na kuidhinishwa na chombo rasmi kama kinachofikia viwango vyake."], ["Rejista", "orodha rasmi, hapa ya vyuo na programu zilizoidhinishwa."], ["Mamlaka", "chombo cha serikali kinachosimamia jambo fulani, hapa TVET."]],
          slides: [
            { title: "Kwa nini ithibati ni muhimu", bullets: ["Mamlaka ilikagua viwango vya chuo", "Vyeti visivyo na ithibati vinaweza kukataliwa"] },
            { title: "Baadhi ya mamlaka za kitaifa", bullets: ["Kenya: TVETA. Nigeria: NBTE", "Ufilipino: TESDA. Ghana: CTVET. India: NCVET", "Meksiko: CONALEP. Kolombia: SENA. Moroko: OFPPT"] },
            { title: "Kagua vyote viwili", bullets: ["Chuo halisi na tawi lake", "Programu halisi unayoitaka"] },
            { title: "Kagua kwa usalama", bullets: ["Fungua tovuti rasmi mwenyewe", "Si kiungo kutoka kwa chuo au wakala", "Andika ulikagua wapi na lini"] }
          ],
          sources: [{ name: "TVETA Kenya: taasisi za TVET zilizopata ithibati", url: "https://www.tveta.go.ke/accredited-tvet-institutions/" }, { name: "National Board for Technical Education (Nigeria)", url: "https://web.nbte.gov.ng/" }, { name: "TESDA (Ufilipino): programu zilizosajiliwa", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (Marekani)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Tafuta mamlaka rasmi ya TVET ya nchi yako. Fungua tovuti yake mwenyewe na utafute chuo kimoja kilicho karibu nawe na programu unayoitaka. Andika anwani ya tovuti, tarehe ya leo na ulichopata. Kama hukukipata chuo, andika namba ya simu au ofisi utakayouliza.",
          youCanNow: "kupata mamlaka ya TVET ya nchi yako na kukagua kwenye rejista yake rasmi kwamba chuo na programu yake vimepata ithibati.",
          quickCheck: [
            { objective: "O3", q: "Chuo kinakutumia kiungo ili \"kuthibitisha\" kwamba kimepata ithibati. Unafanya nini?", options: ["Kuamini kiungo kwa sababu kinaonekana rasmi", "Kufungua tovuti rasmi ya mamlaka mwenyewe na kutafuta chuo", "Kulipa ada kwanza na kukagua baadaye", "Kumuuliza wakala wa chuo kama ni kweli"], answer: 1, why: "Kiungo kutoka kwa chuo kinaweza kupeleka kwenye ukurasa bandia; nenda kwenye tovuti rasmi mwenyewe." },
            { objective: "O3", q: "Chuo kimo kwenye rejista, lakini kozi yako haijaorodheshwa. Kipi ni kweli?", options: ["Kozi hakika iko sawa", "Ni jengo tu linalohitaji kusajiliwa", "Huenda kozi haijapata ithibati; uliza mamlaka kabla ya kujiandikisha", "Haijalishi kwa waajiri"], answer: 2, why: "Vyuo na programu mara nyingi hukaguliwa kando; kagua programu pia." }
          ]
        },
        {
          title: "Maswali ya kuuliza, na jinsi ya kutambua chuo bandia",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Uliza chuo maswali sita muhimu na utaje dalili za hatari za ulaghai wa mafunzo.",
          text: [
            "Tembelea chuo kama unaweza, na uulize: Nitapata saa ngapi za mazoezi ya vitendo? Naweza kuona karakana na vifaa? Wakufunzi ni nani, na wamewahi kufanya kazi katika fani hii? Kuna mtihani au tathmini gani mwishoni, na nani anatoa cheti? Wanafunzi wangapi wa zamani walipata kazi au walianzisha biashara, na naweza kuongea na mmoja wao? Gharama kamili ni kiasi gani, pamoja na zana, mitihani na sare, na sheria ya kurejeshewa pesa ni ipi? Andika kila jibu.",
            "Vyuo vizuri vinajibu kwa uwazi na vinakuruhusu kuona karakana. Kuwa makini kama vinaonyesha darasa tu, haviwezi kutaja mwajiri anayeajiri wahitimu wao, au havitaki kuandika ada kwenye karatasi.",
            "Dalili za hatari za chuo bandia au ulaghai: kazi iliyoahidiwa au \"iliyohakikishwa\", hasa nje ya nchi; shinikizo la kulipa leo; ada kulipwa kwenye simu au akaunti ya mtu binafsi badala ya akaunti rasmi ya chuo pamoja na risiti; hakuna anwani halisi; cheti kamili kwa siku chache bila mazoezi; kuomba kushika pasipoti yako au kitambulisho chako. Usilipe kamwe ili kupata kazi, shika hati zako mwenyewe, na kagua chuo kwenye rejista rasmi kwanza.",
            "Ukidhani ni ulaghai, usilipe. Ripoti kwa mamlaka ya TVET au polisi, na uwaonye marafiki zako."
          ],
          steps: ["Uliza kuhusu saa za vitendo, karakana na vifaa.", "Uliza wakufunzi ni nani na wana uzoefu gani.", "Uliza kuhusu mtihani wa mwisho na nani anatoa cheti.", "Uliza kuhusu kazi za wanafunzi wa zamani, gharama kamili na kurejeshewa pesa.", "Andika kila jibu na ulinganishe na dalili za hatari."],
          words: [["Kurejeshewa pesa", "pesa unazorudishiwa ukiacha au kozi ikifutwa."], ["Risiti", "kumbukumbu iliyoandikwa au kuchapishwa kwamba ulilipa, yenye jina la chuo."]],
          slides: [
            { title: "Maswali sita ya kuuliza", bullets: ["Saa za vitendo? Karakana na vifaa?", "Uzoefu wa wakufunzi? Mtihani wa mwisho na cheti?", "Kazi za wanafunzi wa zamani? Gharama kamili na kurejeshewa pesa?"] },
            { title: "Dalili nzuri", bullets: ["Majibu wazi, ada imeandikwa", "Unaweza kuona karakana inayofanya kazi", "Unaweza kuongea na wanafunzi wa zamani"] },
            { title: "Dalili za hatari", bullets: ["\"Kazi iliyohakikishwa\", hasa nje ya nchi", "Lipa leo, kwenye simu au akaunti ya mtu binafsi", "Hakuna anwani; cheti kwa siku chache; wanashika pasipoti yako"] },
            { title: "Kikionekana kama ulaghai", bullets: ["Usilipe", "Ripoti kwa mamlaka ya TVET au polisi", "Waonye marafiki zako"] }
          ],
          tryIt: "Andika maswali sita kwenye ukurasa. Yaulize kwa chuo kimoja, kwa kutembelea au kwa simu, au muulize mtu aliyesoma huko. Andika kila jibu. Kisha zungushia duara dalili yoyote ya hatari uliyoisikia.",
          youCanNow: "kuuliza chuo maswali muhimu, kuandika majibu na kutambua dalili za hatari za chuo bandia.",
          quickCheck: [
            { objective: "O4", q: "Swali lipi linakuambia vizuri zaidi utapata mazoezi halisi kiasi gani?", options: ["\"Sare ni nzuri?\"", "\"Mna tovuti?\"", "\"Chuo kiko karibu na kituo cha basi?\"", "\"Nitafanya kazi saa ngapi karakana kwa vifaa halisi?\""], answer: 3, why: "Saa za vitendo na vifaa halisi ndivyo unavyojifunza fani." },
            { objective: "O5", q: "Mtafutaji wa watu (recruiter) anasema: \"Lipa leo kwenye simu yangu na utapata kazi iliyohakikishwa nje ya nchi baada ya kozi.\" Hii ni nini?", options: ["Dalili ya hatari ya ulaghai; usilipe", "Ofa ya kawaida ya chuo", "Ufadhili wa masomo wa serikali", "Ofa nzuri kama ni bei nafuu"], answer: 0, why: "Kazi zilizohakikishwa, shinikizo la kulipa sasa na kulipa kwenye simu ya mtu binafsi ni dalili za kawaida za ulaghai." }
          ]
        },
        {
          title: "Kulinganisha na kuamua: mpango wako wa uamuzi wa programu",
          objectives: ["O2", "O6"],
          minutes: 6,
          goal: "Andika mpango wa uamuzi wa programu wa ukurasa mmoja wenye chaguo lako, gharama, ufadhili na tarehe.",
          text: [
            "Weka programu zako mbili bora kando kwa kando katika jedwali moja: aina, muda, masharti ya kujiunga, gharama kamili, cheti na nani anakitoa, ithibati (ulikagua wapi), majibu ya maswali yako sita, na dalili zozote za hatari. Chaguo bora si kila wakati la bei nafuu zaidi: ni programu iliyopata ithibati yenye mazoezi mengi zaidi na ushahidi bora kwamba wahitimu wanapata kazi.",
            "Panga jinsi utakavyolipa. Andika gharama kamili na lini kila malipo yanatakiwa. Tafuta msaada kutoka vyanzo rasmi tu: bursary (ruzuku ya masomo) za serikali, mikopo au mafunzo ya bure ya umma katika baadhi ya nchi, ufadhili wa masomo kutoka kwa waajiri au vikundi vya jamii, au uanagenzi unaokulipa huku ukijifunza. Kagua ofa yoyote ya ufadhili kwenye tovuti rasmi ya taasisi inayoutoa, na usilipe kamwe ada ili kupata ufadhili wa masomo.",
            "Andika tarehe: maombi yanafunguliwa na kufungwa lini, unahitaji hati gani (baki na hati halisi mwenyewe na utoe nakala), tarehe ya kuanza, na tarehe ya mtihani wa mwisho. Mwonyeshe mpango wako mzazi, mwalimu, mshauri au mtu aliye katika fani hiyo, na umuulize ulisahau nini."
          ],
          steps: ["Tengeneza jedwali linalolinganisha programu zako mbili bora.", "Chagua moja na uandike kwa nini.", "Andika gharama kamili, tarehe za malipo na jinsi utakavyolipa.", "Andika hati, tarehe ya mwisho ya maombi, tarehe ya kuanza na tarehe ya mtihani.", "Mwonyeshe mtu unayemwamini mpango na urekebishe anachokiona."],
          words: [["Bursary", "pesa zinazotolewa kumsaidia mwanafunzi kulipia masomo, ambazo hazirudishwi."], ["Tarehe ya mwisho", "siku ya mwisho ya kufanya jambo, kama kutuma maombi."]],
          slides: [
            { title: "Kando kwa kando", bullets: ["Aina, muda, masharti, gharama kamili, cheti", "Ithibati na ulikagua wapi", "Majibu ya chuo na dalili zozote za hatari"] },
            { title: "Bora si kila wakati nafuu zaidi", bullets: ["Imepata ithibati", "Mazoezi mengi zaidi ya vitendo", "Ushahidi bora kwamba wahitimu wanapata kazi"] },
            { title: "Kuilipia", bullets: ["Gharama kamili na tarehe za malipo", "Bursary, mikopo, ufadhili, uanagenzi wenye malipo", "Kagua tovuti rasmi; usilipe kamwe ili kupata ufadhili"] },
            { title: "Tarehe na hati", bullets: ["Tarehe ya mwisho ya maombi na tarehe ya kuanza", "Baki na hati halisi; toa nakala", "Mwonyeshe mtu unayemwamini mpango"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa uamuzi wa programu wa ukurasa mmoja: fani yako na kwa nini, programu mbili zikilinganishwa, ulikagua ithibati wapi, majibu ya chuo, dalili za hatari, chaguo lako, jinsi utakavyolipa, na tarehe za kutuma maombi, kuanza na mtihani wa mwisho. Mwonyeshe mtu mmoja unayemwamini.",
          youCanNow: "kulinganisha programu mbili na kuandika mpango wa uamuzi wenye chaguo lako, gharama, ufadhili, hati na tarehe.",
          quickCheck: [
            { objective: "O6", q: "Mtu anakupa ufadhili wa masomo ukilipa kwanza \"ada ya kushughulikia\". Unafanya nini?", options: ["Kulipa haraka kabla haujafungwa", "Kutuma nakala ya pasipoti yako ili kushika nafasi", "Kutolipa; kukagua ufadhili kwenye tovuti rasmi ya taasisi", "Kukopa pesa kulipa ada"], answer: 2, why: "Ufadhili halisi haukutozi pesa ili kuupokea; ukague kwenye tovuti rasmi." },
            { objective: "O2", q: "Programu A ni nafuu lakini haijapata ithibati. Programu B inagharimu zaidi, imepata ithibati na ina karakana kamili. Ipi kwa kawaida ni chaguo bora?", options: ["Programu A, kwa sababu ni nafuu", "Hakuna; usisome kamwe", "Yoyote inayomalizika haraka", "Programu B, kama unaweza kupata njia ya kulipa"], answer: 3, why: "Programu iliyopata ithibati yenye mazoezi halisi ina thamani zaidi kwa waajiri kuliko ya bei nafuu isiyotambuliwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kukagua chuo na kufanya uchaguzi wako",
        questions: [
          { objective: "O3", q: "Nchini Kenya, chombo kipi kinachapisha orodha ya taasisi za TVET zilizopata ithibati?", options: ["Mamlaka ya TVET (TVETA)", "Kampuni binafsi ya matangazo", "Wakala yeyote wa kutafuta watu kazi", "Ukurasa wa Facebook wa chuo chenyewe"], answer: 0, why: "TVETA inatoa leseni, inasajili na kutoa ithibati kwa taasisi za TVET nchini Kenya na kuziorodhesha kwenye tovuti yake." },
          { objective: "O3", q: "Uandike nini baada ya kukagua rejista?", options: ["Hakuna kitu", "Kauli mbiu ya chuo tu", "Tovuti, tarehe na ilionyesha nini", "Namba ya simu ya wakala"], answer: 2, why: "Kumbukumbu ya ulikagua wapi na lini ndiyo ushahidi wako." },
          { objective: "O4", q: "Chuo hakikuruhusu kuona karakana yake. Hii inakuambia nini?", options: ["Hakuna jambo muhimu", "Ni dalili ya hatari; uliza maswali zaidi au tafuta mahali pengine", "Chuo lazima kiwe bora sana", "Karakana hazina umuhimu katika TVET"], answer: 1, why: "Mazoezi ya vitendo ndiyo kiini cha TVET; chuo kinachoficha karakana yake huenda hakina." },
          { objective: "O5", q: "Ipi ni dalili ya hatari ya chuo bandia?", options: ["Ada zilizoandikwa kwenye risiti rasmi", "Kutembelea karakana inayofanya kazi", "Wakufunzi waliowahi kufanya kazi katika fani", "Cheti kamili kwa siku tatu bila mazoezi"], answer: 3, why: "Ujuzi halisi wa fani unahitaji mazoezi; cheti cha haraka bila mazoezi ni dalili ya chuo bandia." },
          { objective: "O6", q: "Nini kinapaswa kuwa katika mpango wako wa uamuzi wa programu?", options: ["Programu uliyochagua, gharama kamili, jinsi utakavyolipa na tarehe muhimu", "Jina la chuo tu", "Nywila zako", "Orodha ya marafiki zako"], answer: 0, why: "Mpango wenye manufaa unasema ulichagua nini, kinagharimu kiasi gani, utalipaje na mambo yanatokea lini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuchagua Programu ya Mafunzo ya Ufundi (TVET)",
    questions: [
      { objective: "O1", q: "Kipi ni mfano wa programu ya TVET?", options: ["Kozi ya cheti ya ufundi magari", "Bahati nasibu", "App ya kuweka akiba", "Huduma ya kusikiliza muziki mtandaoni"], answer: 0, why: "Ufundi magari ni fani inayofundishwa katika programu za TVET." },
      { objective: "O1", q: "Kabla ya kuchagua fani, uangalie nini zaidi ya mambo unayopenda?", options: ["Rangi unayoipenda zaidi", "Ushahidi wa kazi au wateja mahali unapoishi", "Kinachopendwa kwenye mitandao ya kijamii wiki hii", "Fani yenye jina fupi zaidi"], answer: 1, why: "Fani inakufaa zaidi unapoipenda na watu walio karibu nawe wanaajiri au wananunua." },
      { objective: "O1", q: "Chanzo kipi cha taarifa za kazi unapaswa kuwa nacho makini zaidi?", options: ["Mwajiri uliyemuuliza", "Kuhesabu matangazo ya kazi katika mji wako", "Tangazo kutoka kwa chuo kinachouza kozi", "Watu ambao tayari wanafanya kazi katika fani hiyo"], answer: 2, why: "Chuo kinachouza kozi kina sababu ya kusema fani yake inahitajika." },
      { objective: "O2", q: "Uanagenzi ni nini?", options: ["Jaribio fupi la mtandaoni", "Aina ya mkopo", "Sare ya shule", "Kujifunza fani kwa kufanya kazi na mtu mwenye ujuzi au mwajiri"], answer: 3, why: "Wanagenzi hujifunza kazini, mara nyingi wakilipwa." },
      { objective: "O2", q: "Mambo yapi matano unapaswa kulinganisha kati ya programu?", options: ["Aina, muda, masharti ya kujiunga, gharama kamili na cheti", "Nembo, rangi, tovuti, kauli mbiu na muziki", "Bei tu", "Umbali tu"], answer: 0, why: "Mambo haya matano yanaonyesha unachopata, kinachohitajika na kinachogharimu." },
      { objective: "O2", q: "Gharama ipi mara nyingi husahaulika unapolinganisha programu?", options: ["Hakuna; bei ya bango huwa kamili kila wakati", "Zana, ada za mtihani na usafiri", "Bili ya umeme ya chuo", "Mshahara wa mkufunzi"], answer: 1, why: "Zana, mitihani na usafiri vinaweza kuongeza sana gharama halisi." },
      { objective: "O2", q: "Nani anapaswa kutoa au kutambua cheti chako ili kiwe na uzito mkubwa zaidi?", options: ["Chuo peke yake", "Rafiki", "Mamlaka ya kitaifa ya TVET au chombo kinachotambuliwa cha kutoa vyeti", "Jukwaa la mtandaoni"], answer: 2, why: "Kutambuliwa kitaifa kunawaambia waajiri kwamba mafunzo yalifikia kiwango rasmi." },
      { objective: "O3", q: "\"Kupata ithibati\" kunamaanisha nini?", options: ["Chuo kina bango kubwa", "Chuo ni ghali", "Chuo kinapendwa mtandaoni", "Chombo rasmi kilikikagua na kukiidhinisha kama kinachofikia viwango"], answer: 3, why: "Ithibati ni ukaguzi rasmi dhidi ya viwango." },
      { objective: "O3", q: "Nchini Ufilipino, taasisi ipi inaorodhesha taasisi za mafunzo zenye programu zilizosajiliwa?", options: ["TESDA", "Wakala wa safari", "Benki", "Kampuni ya simu"], answer: 0, why: "TESDA inasajili programu na kuorodhesha taasisi zinazozitoa." },
      { objective: "O3", q: "Unapaswa kukagua wapi kama chuo kimepata ithibati?", options: ["Kwenye kiungo ambacho chuo kinakutumia", "Kwenye tovuti rasmi ya mamlaka ya kitaifa ya TVET, uliyoifungua mwenyewe", "Kwenye bango la chuo", "Kwa kumuuliza wakala anayeuza kozi"], answer: 1, why: "Tovuti ya mamlaka yenyewe tu, uliyoifungua mwenyewe, ndiyo ukaguzi wa kuaminika." },
      { objective: "O3", q: "Chuo kimepata ithibati lakini programu yako haimo kwenye rejista. Unapaswa:", options: ["Kujiandikisha hata hivyo", "Kupuuza", "Kuuliza mamlaka kabla ya kujiandikisha", "Kulipa ada ili kurekebisha"], answer: 2, why: "Programu zinaweza kupata ithibati kando na chuo, kwa hiyo uliza mamlaka." },
      { objective: "O4", q: "Swali lipi linakusaidia kuona kama wahitimu wanapata kazi?", options: ["\"Kuta zina rangi gani?\"", "\"Mna maegesho ya magari?\"", "\"Kuna mgahawa?\"", "\"Wanafunzi wangapi wa zamani walipata kazi, na naweza kuongea na mmoja?\""], answer: 3, why: "Kuongea na wanafunzi wa zamani kunaonyesha matokeo halisi." },
      { objective: "O4", q: "Kwa nini uandike kila jibu ambalo chuo kinatoa?", options: ["Ili uweze kulinganisha vyuo na kuvishikilia kwa walichosema", "Ili kurefusha ziara", "Kwa sababu vyuo vinataka hivyo", "Haina faida"], answer: 0, why: "Majibu yaliyoandikwa yanakuwezesha kulinganisha kwa haki na kukumbuka ahadi." },
      { objective: "O4", q: "Jibu lipi kutoka kwa chuo ni dalili nzuri?", options: ["\"Hatuwezi kuandika ada kwenye karatasi.\"", "\"Njoo uone karakana, na hii ni orodha kamili ya ada.\"", "\"Huhitaji mazoezi ili kupata cheti chetu.\"", "\"Lipa leo au upoteze nafasi yako.\""], answer: 1, why: "Uwazi kuhusu karakana na ada zilizoandikwa ni dalili za chuo halisi." },
      { objective: "O5", q: "Ipi ni dalili ya hatari ya ulaghai wa mafunzo?", options: ["Risiti rasmi", "Sheria wazi ya kurejeshewa pesa", "Kazi \"iliyohakikishwa\" nje ya nchi ukilipa sasa", "Kutembelea karakana"], answer: 2, why: "Kazi zilizohakikishwa na shinikizo la kulipa ni dalili za kawaida za ulaghai." },
      { objective: "O5", q: "Chuo kinaomba kushika pasipoti yako hadi umalize kozi. Unapaswa:", options: ["Kuikabidhi", "Kumtumia wakala picha yake", "Kuiacha kwao ili kuokoa muda", "Kubaki na pasipoti na hati zako mwenyewe; toa nakala tu"], answer: 3, why: "Usitoe kamwe pasipoti au kitambulisho chako; kushika hati za mtu ni dalili ya hatari ya unyanyasaji." },
      { objective: "O5", q: "Unadhani ofa ya mafunzo ni ulaghai. Unafanya nini?", options: ["Kutolipa, na kuripoti kwa mamlaka ya TVET au polisi", "Kulipa kiasi kidogo ili kujaribu", "Kutoa taarifa za benki yako ili kukagua", "Kutomwambia mtu yeyote"], answer: 0, why: "Kutolipa na kuripoti kunakulinda wewe na wengine." },
      { objective: "O6", q: "Mpango wako wa uamuzi wa programu unapaswa kuwa na nini kuhusu pesa?", options: ["Hakuna kitu", "Gharama kamili, tarehe za malipo na jinsi utakavyolipa", "Ada ya kwanza tu", "Nywila ya benki yako"], answer: 1, why: "Kujua gharama kamili na jinsi utakavyolipa kunazuia mshangao katikati ya masomo." },
      { objective: "O6", q: "Ufadhili upi unapaswa kuukagua kwenye tovuti rasmi kabla ya kuuamini?", options: ["Hakuna", "Mikopo tu", "Ofa yoyote ya bursary, mkopo au ufadhili wa masomo", "Ofa kutoka kwa marafiki tu"], answer: 2, why: "Ufadhili bandia upo; kagua kila ofa na taasisi inayoitoa." },
      { objective: "O6", q: "Kabla ya kutuma maombi yako, hatua nzuri ya mwisho ni ipi?", options: ["Kumpa wakala hati zako halisi", "Kufuta jedwali lako la ulinganisho", "Kulipa ada ya ziada ili kuharakisha", "Kumwonyesha mwalimu, mshauri au mtu aliye katika fani mpango wako"], answer: 3, why: "Mtu mwingine anaweza kuona ulichosahau." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 4, 7, 9, 12, 14, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Fani inakufaa wewe na kazi za eneo lako", objective: "O1", notYet: "Fani imechaguliwa bila sababu au bila ushahidi wa mahitaji.", meets: "Anasema kwa nini fani inamfaa na anatoa angalau ushahidi mmoja wa kazi za eneo lake.", exceeds: "Anatoa ushahidi kutoka vyanzo viwili au zaidi, kama matangazo ya kazi na mazungumzo na mwajiri." },
      { name: "Programu zimelinganishwa", objective: "O2", notYet: "Programu moja tu, au jedwali lina visanduku vitupu.", meets: "Programu mbili zimelinganishwa kwa aina, muda, masharti ya kujiunga, gharama kamili na cheti.", exceeds: "Pia inajumuisha gharama zilizofichwa na nani anatoa au kutambua kila cheti." },
      { name: "Ithibati imekaguliwa", objective: "O3", notYet: "Hakuna ukaguzi, au ukaguzi ulitumia kiungo kutoka kwa chuo.", meets: "Chuo na programu vimekaguliwa kwenye tovuti rasmi ya mamlaka ya kitaifa, pamoja na wapi na lini.", exceeds: "Pia aliwasiliana na mamlaka kuthibitisha jambo lolote lisilo wazi." },
      { name: "Maswali yameulizwa na ulaghai umechunguzwa", objective: "O4", notYet: "Hakuna majibu ya chuo yaliyoandikwa, au dalili za hatari zimepuuzwa.", meets: "Majibu ya maswali sita yameandikwa na dalili zozote za hatari zimetajwa.", exceeds: "Pia aliongea na mwanafunzi wa zamani au mwajiri kuhusu chuo." },
      { name: "Mpango wa uamuzi", objective: "O6", notYet: "Hakuna chaguo, gharama wala tarehe.", meets: "Chaguo wazi lenye gharama kamili, jinsi ya kulipa, hati na tarehe.", exceeds: "Umekaguliwa na mtu anayeaminika, na maoni yake yameongezwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kukamilisha mpango wa uamuzi (kwa rubriki)",
      "Wanafunzi wanaojiandikisha katika programu ya TVET iliyopata ithibati au uanagenzi ndani ya miezi 3",
      "Wanafunzi wanaoripoti kukagua chuo kwenye rejista rasmi kabla ya kulipa (ufuatiliaji wa siku 30)",
      "Wanafunzi wanaoripoti kuepuka au kuripoti chuo bandia au ulaghai wa mafunzo",
      "Programu washirika zinaripoti wanafunzi wachache waliopotea kwa vyuo visivyo na ithibati au ulaghai wa mafunzo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti ya kufungua rejista rasmi (kompyuta ya pamoja au ya cyber cafe inafaa)",
      "Karatasi na kalamu kwa majedwali na mpango wa uamuzi",
      "Jina na tovuti ya mamlaka ya TVET ya nchi yako (inapatikana katika Somo la 4)",
      "Kama dakika 60 hadi 75 kwa jumla, pamoja na muda wa kutembelea au kupigia simu chuo kimoja"
    ],
    facilitatorNotes: [
      "Kabla ya kipindi, tafuta mamlaka ya TVET ya nchi yako na ukurasa wa rejista yake, na ujaribu kwamba unafunguka; rejista huhamishwa na baadhi ya tovuti ni za polepole.",
      "Mwalike mwajiri wa eneo lako au mhitimu wa programu ya TVET kujibu maswali katika Somo la 2 au Somo la 5.",
      "Usipendekeze vyuo maalum; wafundishe wanafunzi kukagua na kulinganisha wenyewe.",
      "Wakumbushe wanafunzi wasimlipe kamwe wakala wala kutoa pasipoti au kitambulisho; ripoti ulaghai unaoshukiwa kwa mamlaka ya TVET au polisi.",
      "Pima mpango wa uamuzi kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
