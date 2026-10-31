"use strict";

// Koach Learn course (Swahili translation of shared/call-center-bpo-careers.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const BLS_CSR = { name: "US Bureau of Labor Statistics (ofisi ya takwimu za kazi ya Marekani): Wahudumu wa wateja (elimu, mafunzo, ratiba, mazingira ya kazi)", url: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" };
const IBPAP = { name: "IBPAP: chama cha sekta ya IT na BPO cha Ufilipino", url: "https://www.ibpap.org/" };
const FTC_JOBS = { name: "US Federal Trade Commission (FTC, Marekani): Ulaghai wa kazi", url: "https://consumer.ftc.gov/articles/job-scams" };
const FTC_REPORT = { name: "US Federal Trade Commission (FTC): kuripoti ulaghai (Marekani)", url: "https://reportfraud.ftc.gov/" };
const IOM_IRIS = { name: "IOM IRIS: uajiri wa haki na kanuni ya \"Mwajiri Analipa\"", url: "https://iris.iom.int/" };
const ILO_FAIR = { name: "Shirika la Kazi Duniani (ILO): uajiri wa haki", url: "https://www.ilo.org/topics/fair-recruitment" };
const TESDA = { name: "TESDA, Ufilipino: mamlaka ya elimu ya ufundi na ujuzi (mafunzo na vyeti; TESDA Online Program)", url: "https://www.tesda.gov.ph/" };
const AJIRA = { name: "Kenya News Agency: vijana wahimizwa kujiunga na Ajira Digital Program (mpango wa serikali wa kazi za mtandaoni)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };

module.exports = {
  id: "call-center-bpo-careers-sw",
  lang: "sw",
  translationOf: "call-center-bpo-careers",
  category: "Workforce Development",
  name: "Kazi za Vituo vya Simu na Utoaji Huduma kwa Niaba (BPO)",
  skills: "Kujua aina za kazi za BPO, Kutambua mawakala bandia wa ajira, Kufaulu majaribio ya kuajiriwa, Kushughulikia simu kulingana na kadi ya alama ya QA, Kufikia vipimo vya kituo cha simu, Kupanga zamu na njia ya kupanda kikazi",
  outcome: "kutafuta kazi ya kituo cha simu au ya BPO ukiwa na mpango: kuchagua aina ya kazi ya BPO inayokufaa, kuhakikisha mwajiri ni halisi, kufanya mazoezi ya majaribio ya kuandika kwa kibodi, sauti na simu ya mazoezi, kushughulikia simu jinsi kadi ya alama ya ubora inavyotarajia, kueleza vipimo utakavyopimwa navyo, na kupanga zamu zako na hatua yako inayofuata ya kupanda.",
  about: [
    "Vituo vya simu na kampuni za BPO (kampuni zinazofanya kazi kwa niaba ya kampuni nyingine) huajiri watu wengi wenye cheti cha shule ya sekondari na ujuzi mzuri wa mawasiliano, katika nchi kama Ufilipino, India, Kenya, Nigeria, Ghana, Misri, Moroko, Senegal, Mexico, Colombia na Marekani. Nyingi hutoa mafunzo yenye malipo, na baadhi huruhusu watu kufanya kazi wakiwa nyumbani.",
    "Kozi hii ni kwa wanaotafuta kazi, vijana, watu wanaobadilisha kazi na yeyote anayetaka kujua kazi hii ilivyo kweli kabla ya kuomba. Utajifunza aina za kazi za BPO, jinsi ya kumtambua wakala bandia wa ajira, jinsi majaribio ya kuajiriwa yanavyofanya kazi, jinsi simu zinavyopewa alama, na jinsi watu wanavyopanda cheo.",
    "Kozi hii inakuandaa kuomba kazi; haikupi kazi wala cheti. Kila kampuni ina majaribio yake ya kuajiri. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\". Kuna jaribio fupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika mpango wako wa siku 90 wa kupata kazi ya BPO: aina ya kazi ya BPO unayotaka na kwa nini, waajiri watatu halisi uliowakagua kwenye tovuti zao rasmi, orodha yako ya kukagua ulaghai, ratiba ya mazoezi yenye tarehe za kuandika kwa kibodi, kusoma kwa sauti na simu za mazoezi, simu moja ya mazoezi uliyoirekodi na kuipa alama kwa kadi ya mfano ya QA, mpango wako wa zamu au wa kufanya kazi nyumbani, na hatua moja ya kupanda unayotaka ndani ya mwaka mmoja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanaotafuta kazi wenye umri wa kama miaka 18 na zaidi barani Afrika, Asia, Amerika ya Kusini na Marekani: waliomaliza shule, wahitimu wasio na kazi, watu wazima wanaobadilisha kazi, wanaorudi kazini na watu wenye lugha ya pili. Wengi watasoma kozi kwa lugha yao na kuomba kazi kwa Kiingereza, Kifaransa au Kihispania.",
    startingPoint: "Wanaweza kuzungumza na watu na kutumia simu; wengi wanaweza kutumia kompyuta kidogo. Wachache wanajua jinsi BPO zinavyoajiri, majaribio ni yapi, au jinsi kazi ya kituo cha simu inavyopimwa. Wengi wameona matangazo ya kazi kwenye mitandao ya kijamii na hawawezi kutofautisha ya kweli na bandia.",
    gap: "Kazi za BPO mara nyingi ni kazi ya kwanza rasmi, lakini waombaji hushindwa majaribio wasiyoyajua, hupoteza pesa kwa mawakala bandia wanaodai ada, au huacha kazi katika miezi ya kwanza kwa sababu zamu na malengo yaliwashangaza. Wanafunzi wanahitaji kuijua kazi, kumkagua mwajiri, kufanya mazoezi ya majaribio na kupanga ratiba.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; inatafsiriwa katika lugha kumi",
      "Vifaa: mara nyingi simu tu; baadhi ya masomo ni bora kwenye kompyuta, lakini kila kazi inaweza kufanywa kwenye karatasi",
      "Muda: masomo ya dakika 4 hadi 6",
      "Majaribio ya kuajiri, mishahara, zamu na sheria za kazi zinatofautiana kwa nchi na kampuni; wanafunzi wanamkagua mwajiri na wizara ya kazi ya nchi yao",
      "Hatari kubwa ya ulaghai: hakuna namba halisi za vitambulisho, nywila wala taarifa za benki katika zoezi lolote"
    ],
    prerequisites: "Hakuna. \"Ubora katika Huduma kwa Wateja\" na \"AI kwa Kazi za Huduma kwa Wateja\" ni kozi nzuri za kufuata au za kusoma pamoja; wanaojifunza Kiingereza wanaweza kusoma \"Kiingereza cha Kazini (ESL)\" pamoja na hii."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo ya kazi tano za BPO", action: "kupanga kila kazi kama ya sauti au isiyo ya sauti na ya kupokea au ya kupiga simu, na kutaja ujuzi mkuu inaohitaji", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa tangazo la kazi au ujumbe wa wakala wa ajira", action: "kukagua kazi hiyo kwa dalili za hatari za wakala bandia na kusema hatua inayofuata", standard: "ukitaja angalau dalili nne na bila kulipa ada wala kutoa nyaraka za asili" },
    { id: "O3", condition: "Ukitumia hati ya mazoezi na simu au karatasi", action: "kukamilisha simu ya mazoezi ya mteja inayofungua, kuthibitisha, kutatua, kurudia muhtasari na kufunga", standard: "ukipata Anafikia katika kila mstari wa kadi ya mfano ya QA" },
    { id: "O4", condition: "Ukipewa ripoti ya mfano ya wakala wa simu", action: "kueleza kile ambacho muda wa kushughulikia, utatuzi wa mara ya kwanza, kuridhika kwa mteja, alama ya QA na kufuata ratiba vinapima", standard: "pamoja na njia moja ya uaminifu ya kuboresha kila kimoja" },
    { id: "O5", condition: "Kwa kazi ya zamu au ya nyumbani unayoitaka", action: "kuandika mpango wa maandalizi wa usingizi, usafiri, vifaa na mapumziko", standard: "wenye angalau vitu vitano, pamoja na mpango wa akiba wa umeme au intaneti" },
    { id: "O6", condition: "Ukitumia malengo yako na tovuti halisi za waajiri", action: "kuandika mpango wa siku 90 wa kuajiriwa na hatua inayofuata ya kupanda katika ngazi za kazi za BPO", standard: "wenye tarehe, waajiri watatu uliowakagua na lengo moja la kukua" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuingia katika kazi ya BPO",
      lessons: [
        {
          title: "Kazi ya BPO ni nini na aina za kazi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Panga kazi za BPO kama za sauti au zisizo za sauti na za kupokea au za kupiga simu, na utaje ujuzi kila moja inaohitaji.",
          text: [
            "BPO ni kifupi cha business process outsourcing: kampuni moja inailipa kampuni nyingine ifanye sehemu ya kazi yake, kama kujibu wateja, kushughulikia fomu au kukagua maudhui. Kampuni inayolipa inaitwa mteja mkuu (client), na kazi ya mteja mkuu mmoja inaitwa akaunti (account) au kampeni.",
            "Kazi za sauti ni za simu. Kupokea (inbound) maana yake wateja wanakupigia (msaada wa bili, mzigo, kifurushi cha simu). Kupiga (outbound) maana yake wewe unawapigia (mauzo, tafiti, vikumbusho, kudai madeni). Kazi zisizo za sauti ni chat, barua pepe, kujibu kwenye mitandao ya kijamii, kuingiza data, kazi za ofisini za nyuma (back office) na kukagua maudhui; zinahitaji uandishi na kuandika kwa kibodi kuliko kuongea.",
            "BPO ni mwajiri mkubwa katika nchi nyingi. Ufilipino na India zinahudumia wateja wengi wanaozungumza Kiingereza. Kenya, Nigeria, Ghana, Misri na Afrika Kusini zinakua. Moroko, Tunisia, Senegal, Côte d'Ivoire, Madagaska na Morisi zinahudumia wateja wanaozungumza Kifaransa. Mexico na Colombia zinahudumia Marekani na wateja wanaozungumza Kihispania. Marekani, vituo vya simu huajiri karibu katika kila sekta.",
            "Lugha mara nyingi ndiyo ujuzi mkuu. Akaunti inaweza kuhitaji Kiingereza, Kifaransa, Kihispania, Kiarabu au lugha nyingine iliyo wazi, pamoja na subira, kusikiliza na ujuzi wa msingi wa kompyuta. Kazi nyingi zinaomba cheti cha shule ya sekondari, si shahada."
          ],
          words: [
            ["BPO", "business process outsourcing: kampuni moja inayofanya sehemu ya kazi ya kampuni nyingine kwa niaba yake."],
            ["Mteja mkuu na akaunti", "mteja mkuu (client) ni kampuni inayoilipa BPO; akaunti (au kampeni) ni kazi ya mteja mkuu huyo."],
            ["Sauti na isiyo ya sauti", "kazi za sauti ni simu; kazi zisizo za sauti ni chat, barua pepe, data na kazi za ofisini za nyuma."],
            ["Kupokea na kupiga", "kupokea (inbound): wateja wanakutafuta. Kupiga (outbound): wewe unawatafuta wateja."],
            ["Kukagua maudhui", "kuangalia machapisho, picha au video kama zinafuata sheria za jukwaa (content moderation)."]
          ],
          slides: [
            { title: "BPO kwa sentensi moja", bullets: ["Kampuni inalipa kampuni nyingine ifanye sehemu ya kazi yake", "Kampuni inayolipa ni mteja mkuu (client)", "Kazi ya mteja mkuu mmoja ni akaunti"] },
            { title: "Kazi za sauti", bullets: ["Kupokea: wateja wanakupigia kwa msaada", "Kupiga: unawapigia kwa mauzo, tafiti au vikumbusho", "Ujuzi mkuu: kuongea wazi, kusikiliza, subira"] },
            { title: "Kazi zisizo za sauti", bullets: ["Chat, barua pepe, majibu kwenye mitandao ya kijamii", "Kuingiza data, ofisi ya nyuma, kukagua maudhui", "Ujuzi mkuu: kuandika, kibodi, usahihi"] },
            { title: "BPO huajiri wapi", bullets: ["Ufilipino, India, Kenya, Nigeria, Ghana, Misri", "Akaunti za Kifaransa: Moroko, Tunisia, Senegal, Côte d'Ivoire", "Karibu na Marekani: Mexico, Colombia"] }
          ],
          sources: [IBPAP, BLS_CSR],
          tryIt: "Kwenye karatasi, chora jedwali lenye visanduku vinne: sauti ya kupokea, sauti ya kupiga, chat au barua pepe, ofisi ya nyuma. Weka kazi moja uliyoiona ikitangazwa katika kila kisanduku, andika ujuzi mkuu inaohitaji, na uzungushie duara kisanduku kinachokufaa zaidi.",
          youCanNow: "kutofautisha kazi za BPO za sauti na zisizo za sauti, za kupokea na za kupiga simu, na kuchagua aina inayofaa ujuzi wako.",
          quickCheck: [
            { objective: "O1", q: "Wateja wanakupigia ili kutatua matatizo ya bili zao za simu. Hii ni kazi ya aina gani?", options: ["Sauti ya kupiga", "Kuingiza data ofisi ya nyuma", "Sauti ya kupokea", "Kukagua maudhui"], answer: 2, why: "Wateja wanapiga, na kazi ni ya simu: sauti ya kupokea." },
            { objective: "O1", q: "Kazi ipi inahitaji uandishi na kibodi kuliko kuongea?", options: ["Msaada kwa barua pepe na chat", "Simu za mauzo za kupiga", "Msaada wa simu za kupokea", "Tafiti za simu"], answer: 0, why: "Barua pepe na chat ni kazi zisizo za sauti: wateja wanasoma maneno yako, kwa hiyo uandishi na kibodi ni muhimu zaidi." }
          ]
        },
        {
          title: "Kutambua mawakala bandia wa ajira na ulaghai wa kazi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kagua tangazo la kazi au ujumbe wa wakala kwa dalili za hatari za ulaghai na uamue la kufanya.",
          text: [
            "Waajiri halisi hawakutozi pesa ili upate kazi. Mawakala bandia wanaomba \"ada ya usindikaji\", \"ada ya mafunzo\", \"ada ya uchunguzi wa afya\", \"ada ya sare\" au pesa za \"kifurushi cha kuanzia\" au vifaa. FTC (tume ya biashara ya Marekani) inasema waajiri waaminifu hawatakuomba kamwe ulipe ili upate kazi, na kazi ya kimataifa ya uajiri wa haki ya ILO na IOM inahimiza kwamba waajiri, si wafanyakazi, walipe gharama za kuajiri.",
            "Dalili nyingine za hatari: mshahara mkubwa kwa kazi ndogo; usaili kwa maandishi tu kwenye WhatsApp au Telegram; barua pepe ya bure badala ya ile ya kampuni yenyewe; kukuharakisha uamue leo; hundi unayotakiwa kuiweka benki na kurudisha sehemu ya pesa; na ombi la \"kushika\" pasipoti yako, kitambulisho cha taifa au vyeti vya shule. Shika nyaraka zako za asili wewe mwenyewe. Toa nakala tu, na kwa mwajiri uliyemkagua tu.",
            "Kumkagua mwajiri: tafuta tovuti rasmi ya kampuni wewe mwenyewe (usitumie kiungo kilicho kwenye ujumbe), tafuta kazi ile ile kwenye ukurasa wake wa nafasi za kazi, na uombe hapo. Kwa kazi za nje ya nchi, hakikisha wakala amesajiliwa na wizara ya kazi ya nchi yako au ofisi ya wafanyakazi wahamiaji. Kitu kikiwa si sawa, simama, hifadhi jumbe, na uripoti kwa polisi au ofisi ya taifa ya walaji au ya kazi (Marekani: reportfraud.ftc.gov)."
          ],
          steps: [
            "Soma tangazo na uorodheshe chochote kinachoomba pesa au nyaraka za asili.",
            "Tafuta tovuti rasmi ya kampuni wewe mwenyewe, si kupitia kiungo kwenye ujumbe.",
            "Tafuta kazi ile ile kwenye ukurasa rasmi wa nafasi za kazi na uombe hapo.",
            "Kwa kazi za nje ya nchi, hakikisha wakala wa ajira amesajiliwa na serikali yako.",
            "Kitu kikiwa si sawa, simama, hifadhi picha za skrini, na uripoti."
          ],
          words: [
            ["Wakala wa ajira", "mtu au kampuni inayomtafutia mwajiri wafanyakazi (recruiter)."],
            ["Ada ya kuajiri", "pesa anayotozwa mfanyakazi ili apate kazi; uajiri wa haki unasema wafanyakazi wasilipe."],
            ["Ukurasa wa nafasi za kazi", "sehemu ya tovuti ya kampuni yenyewe inayoorodhesha kazi zake halisi (careers page)."],
            ["Wakala aliyesajiliwa", "wakala wa ajira aliyesajiliwa na serikali, unayeweza kumtafuta kwenye orodha rasmi."]
          ],
          slides: [
            { title: "Waajiri halisi hawakutozi pesa", bullets: ["Hakuna ada ya usindikaji, mafunzo, afya au sare ili uajiriwe", "Hakuna kulipia kifurushi cha kuanzia au vifaa", "Hakuna hundi ya kuweka benki na kurudisha pesa"] },
            { title: "Dalili zaidi za hatari", bullets: ["Mshahara mkubwa kwa kazi ndogo", "Usaili kwa maandishi tu kwenye WhatsApp au Telegram", "Barua pepe ya bure, kuharakishwa uamue leo"] },
            { title: "Shika nyaraka zako", bullets: ["Usitoe kamwe pasipoti, kitambulisho au vyeti vya asili", "Toa nakala tu, kwa mwajiri uliyemkagua"] },
            { title: "Kagua, kisha omba", bullets: ["Tafuta tovuti rasmi wewe mwenyewe", "Omba kwenye ukurasa rasmi wa nafasi za kazi", "Kazi za nje: kagua usajili wa wakala", "Kitu si sawa: simama, hifadhi ushahidi, ripoti"] }
          ],
          sources: [FTC_JOBS, FTC_REPORT, ILO_FAIR, IOM_IRIS],
          tryIt: "Soma ujumbe huu wa mazoezi: \"Hongera! Umeajiriwa kwa kazi ya kituo cha simu ukiwa nyumbani kwa dola 900 kwa wiki. Tuma dola 50 za vifaa vya mafunzo na picha ya kitambulisho chako kwenye WhatsApp leo.\" Andika kila dalili ya hatari unayoiona (ziko angalau tano) na ungefanya nini.",
          youCanNow: "kumtambua wakala bandia wa ajira, kulinda nyaraka zako, na kukagua kazi kwenye tovuti ya mwajiri mwenyewe kabla ya kuomba.",
          quickCheck: [
            { objective: "O2", q: "Wakala anasema umepata kazi lakini lazima ulipe ada ya mafunzo kwanza. Unafanya nini?", options: ["Kulipa, kwa sababu mafunzo yana manufaa", "Kulipa nusu sasa na nusu baadaye", "Kumwomba rafiki akulipie", "Kusimama: waajiri halisi hawakutozi pesa ili uajiriwe"], answer: 3, why: "Kukuomba ulipe ili upate kazi ni dalili kuu ya ulaghai." },
            { objective: "O2", q: "Wakala wa kazi ya nje ya nchi anaomba kushika pasipoti yako. Jibu salama ni lipi?", options: ["Kumpa ya asili ili aishughulikie haraka", "Kushika pasipoti yako ya asili na kumpa nakala tu mwajiri uliyemkagua", "Kuituma kwa anwani iliyo kwenye ujumbe", "Kumwachia rafiki wa wakala"], answer: 1, why: "Kushika nyaraka zako kunakulinda; kuzitoa kunaweza kukunasa katika kazi isiyo ya haki." }
          ]
        },
        {
          title: "Kufaulu hatua na majaribio ya kuajiriwa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Fanya mazoezi ya sehemu za kuandika kwa kibodi, kusoma kwa sauti na simu ya mazoezi katika mchakato wa kuajiri wa BPO.",
          text: [
            "Hatua za kuajiri zinatofautiana kwa kampuni, lakini BPO nyingi zinafuata njia inayofanana: maombi mtandaoni; tathmini yenye maswali ya kibodi, sarufi, kusoma au kusikiliza; jaribio la sauti au lugha ambapo unasoma kwa sauti au kujibu maswali yaliyorekodiwa; usaili; na simu ya mazoezi (mock call), maigizo mafupi ambapo mwajiri anajifanya mteja. Kisha inakuja barua ya kazi, ukaguzi wa historia au nyaraka, na mafunzo yenye malipo.",
            "Jaribio la sauti linakagua kwamba watu wanakuelewa kwa urahisi: maneno yaliyo wazi, mwendo wa kawaida, sarufi nzuri na sauti ya kirafiki. Huna haja ya kubadilisha lafudhi yako. Ongea polepole vya kutosha, malizia maneno yako na utabasamu unapoongea; watu wanaweza kulisikia.",
            "Fanya mazoezi nyumbani bure. Andika ukurasa kutoka kitabu au gazeti kwenye programu yoyote ya kuandika kwa dakika tano na uhesabu maneno. Soma habari fupi kwa sauti na uirekodi kwenye simu yako, kisha uisikilize. Fanya simu ya mazoezi na rafiki anayejifanya mteja. Ukishaajiriwa, kwa kawaida kuna mafunzo darasani kuhusu bidhaa za mteja mkuu, kisha nesting: wiki zako za kwanza kwenye simu halisi ukiwa na msaada wa ziada."
          ],
          steps: [
            "Kibodi: andika kwa dakika 5 kutoka ukurasa uliochapishwa, hesabu maneno, gawanya kwa 5, na rudia kila siku.",
            "Kusoma kwa sauti: rekodi habari ya dakika 1, isikilize, na urekebishe maneno uliyoyaharakisha au kuyaruka.",
            "Kusikiliza: rafiki asome ujumbe mfupi, kisha uuandike na uukague.",
            "Simu ya mazoezi: rafiki anajifanya mteja mwenye tatizo rahisi; wewe unafungua, unauliza, unatatua na unafunga."
          ],
          words: [
            ["Tathmini", "jaribio linalokagua ujuzi kama kibodi, sarufi, kusoma na kusikiliza (assessment)."],
            ["Maneno kwa dakika", "idadi ya maneno unayoandika kwa dakika moja; njia moja ya kupima kasi ya kibodi."],
            ["Simu ya mazoezi", "simu ya kujizoeza ambapo mtu anajifanya mteja, inayotumiwa katika kuajiri na mafunzo (mock call)."],
            ["Nesting", "wiki za kwanza kwenye simu halisi baada ya mafunzo, ukiwa na msaada wa ziada kutoka kwa mkufunzi."]
          ],
          slides: [
            { title: "Njia ya kawaida ya kuajiri ya BPO", bullets: ["Maombi, kisha tathmini mtandaoni", "Jaribio la sauti au lugha, kisha usaili", "Simu ya mazoezi, barua ya kazi, ukaguzi wa nyaraka, mafunzo yenye malipo"] },
            { title: "Jaribio la sauti", bullets: ["Je, watu wanakuelewa kwa urahisi?", "Maneno wazi, mwendo wa kawaida, sarufi nzuri, sauti ya kirafiki", "Huna haja ya kubadilisha lafudhi yako"] },
            { title: "Fanya mazoezi bure nyumbani", bullets: ["Andika kutoka ukurasa uliochapishwa dakika 5 kila siku", "Jirekodi ukisoma kwa sauti na ujisikilize", "Simu ya mazoezi na rafiki kama mteja"] },
            { title: "Baada ya kuajiriwa", bullets: ["Mafunzo darasani kuhusu bidhaa za mteja mkuu", "Nesting: wiki za kwanza kwenye simu halisi na mkufunzi"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Fanya mazoezi matatu mafupi leo na uandike matokeo: andika kwa kibodi dakika 5 na ukokotoe maneno yako kwa dakika; jirekodi ukisoma habari ya dakika 1 na uandike maneno mawili ya kutamka wazi zaidi; na uandike mstari 3 wa kufungua utakaotumia katika simu ya mazoezi.",
          youCanNow: "kueleza hatua za kawaida za kuajiri za BPO na kufanya mazoezi ya majaribio ya kibodi, sauti na simu ya mazoezi nyumbani.",
          quickCheck: [
            { objective: "O3", q: "Jaribio la sauti la BPO hasa linakagua nini?", options: ["Kwamba watu wanakuelewa vizuri", "Kwamba una lafudhi ya kigeni", "Kwamba unaongea haraka kadiri iwezekanavyo", "Kwamba unajua bei za mteja mkuu"], answer: 0, why: "Jaribio la sauti linakagua kuongea wazi, mwendo, sarufi na sauti, si lafudhi fulani." },
            { objective: "O3", q: "Kwa dakika 5 unaandika maneno 150. Kasi yako ya kibodi ni karibu kiasi gani?", options: ["Maneno 15 kwa dakika", "Maneno 75 kwa dakika", "Maneno 150 kwa dakika", "Maneno 30 kwa dakika"], answer: 3, why: "Maneno 150 gawanya kwa dakika 5 ni maneno 30 kwa dakika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuingia katika kazi ya BPO",
        questions: [
          { objective: "O1", q: "Unawapigia watu kuwakumbusha bili ambazo hawajalipa. Hii ni kazi ya aina gani?", options: ["Sauti ya kupokea", "Sauti ya kupiga", "Msaada wa chat", "Ofisi ya nyuma"], answer: 1, why: "Wewe ndiye unayepiga simu, kwa hiyo ni sauti ya kupiga." },
          { objective: "O1", q: "Katika BPO, mteja mkuu (client) ni nani?", options: ["Kampuni inayoilipa BPO ifanye kazi yake", "Mteja anayepiga simu", "Kiongozi wa timu", "Wakala wa ajira"], answer: 0, why: "Mteja mkuu anailipa BPO; wateja wake ni watu ambao mawakala wa simu wanawasaidia." },
          { objective: "O2", q: "Ujumbe upi una uwezekano mkubwa kuwa ulaghai?", options: ["Barua pepe kutoka anwani ya kampuni yenyewe inayokualika kwenye jaribio la mtandaoni", "Kazi iliyo kwenye ukurasa rasmi wa nafasi za kazi wa kampuni", "Ujumbe wa WhatsApp unaotoa mshahara mkubwa ukituma ada leo", "Usaili wa simu uliopangwa kupitia tovuti rasmi"], answer: 2, why: "Mshahara mkubwa, mawasiliano kwa WhatsApp tu, ada na kuharakishwa leo zote ni dalili za hatari." },
          { objective: "O2", q: "Unapaswa kupata vipi orodha halisi ya kazi za kampuni?", options: ["Kubofya kiungo kwenye ujumbe wa wakala", "Kutafuta tovuti rasmi ya kampuni wewe mwenyewe na kutumia ukurasa wake wa nafasi za kazi", "Kumwomba wakala akutumie picha ya skrini", "Kuamini ukurasa wowote wenye nembo ya kampuni"], answer: 1, why: "Kupata tovuti rasmi wewe mwenyewe kunakuepusha na kurasa bandia zilizonakili nembo ya kampuni." },
          { objective: "O3", q: "Simu ya mazoezi (mock call) ni nini?", options: ["Simu halisi na mteja mwenye hasira", "Simu unayompigia meneja wako", "Wimbo uliorekodiwa", "Maigizo ya mazoezi ambapo mtu anajifanya mteja"], answer: 3, why: "Simu ya mazoezi ni simu ya kujizoeza inayotumiwa katika kuajiri na mafunzo." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya kazi na kupanda cheo",
      lessons: [
        {
          title: "Mtiririko wa simu na kadi ya alama ya QA",
          objectives: ["O3"],
          minutes: 6,
          goal: "Shughulikia simu ya mazoezi inayofungua, kuthibitisha, kutatua, kurudia muhtasari na kufunga, na uipe alama kwa kadi ya QA.",
          text: [
            "Kila akaunti ina mtiririko wa simu (call flow): hatua ambazo wakala wa simu anazifuata kwenye kila simu. Mtiririko wa kawaida ni: kufungua (salamu, jina lako, kampuni, kutoa msaada); kuthibitisha (kuhakikisha mteja ni nani kwa maswali ya usalama ya akaunti); kuchunguza (kuuliza maswali ili kupata tatizo halisi); kutatua (kulirekebisha au kueleza hatua inayofuata); kurudia muhtasari (kusema kilichofanyika); na kufunga (kuuliza kama kuna jingine, kushukuru).",
            "Timu ya uhakiki wa ubora (QA) inasikiliza simu zilizorekodiwa na kuzipa alama kwenye kadi ya alama ya QA. Mistari mara nyingi inajumuisha ufunguzi, uthibitisho, kusikiliza na kuonyesha huruma, taarifa sahihi, maelezo uliyoandika, na ufungaji. Baadhi ya mistari ni ya kufuata sheria (compliance): kuruka uthibitisho au kutoa taarifa za siri kunaweza kufelisha simu nzima.",
            "Thibitisha tu kwa njia ambayo akaunti yako imekufundisha. Usimwombe mteja kamwe nywila kamili au msimbo wa mara moja ambao hakuhitaji kuutoa, na usimsomee kamwe taarifa za siri mtu ambaye hujamthibitisha. Usipojua jibu, mwombe mteja asubiri kwa adabu na uangalie hazina ya maarifa (knowledge base) au umuulize kiongozi wa timu."
          ],
          steps: [
            "Fungua: \"Asante kwa kupiga [kampuni], ninaitwa [jina]. Nikusaidie nini leo?\"",
            "Thibitisha: uliza maswali ya usalama ya akaunti kabla ya kuzungumzia akaunti.",
            "Chunguza: uliza maswali ya wazi, kisha thibitisha tatizo kwa sentensi moja.",
            "Tatua: lirekebishe, au eleza hatua inayofuata na itafanyika lini.",
            "Rudia muhtasari na funga: sema kilichofanyika, uliza kama kuna jingine, na ushukuru."
          ],
          words: [
            ["Mtiririko wa simu", "hatua zilizowekwa ambazo wakala wa simu anazifuata kwenye kila simu (call flow)."],
            ["Uthibitisho", "kuhakikisha anayepiga ndiye mwenye akaunti kabla ya kuzungumzia akaunti."],
            ["QA (uhakiki wa ubora)", "timu inayosikiliza simu na kuzipa alama kulingana na kadi ya alama."],
            ["Kufuata sheria (compliance)", "kufuata sheria za nchi na za mteja mkuu, kama sheria za faragha na uthibitisho."],
            ["Hazina ya maarifa", "maktaba ya akaunti ya majibu na hatua zilizoidhinishwa (knowledge base)."]
          ],
          slides: [
            { title: "Mtiririko wa kawaida wa simu", bullets: ["Fungua, thibitisha, chunguza", "Tatua, rudia muhtasari, funga"] },
            { title: "Kadi ya alama ya QA", bullets: ["QA inasikiliza simu zilizorekodiwa", "Mistari: ufunguzi, uthibitisho, huruma, usahihi, maelezo, ufungaji", "Makosa ya kufuata sheria yanaweza kufelisha simu nzima"] },
            { title: "Mlinde mteja", bullets: ["Thibitisha kabla ya kuzungumzia akaunti", "Usiombe kamwe nywila usiyoihitaji", "Huna uhakika? Mwombe asubiri kwa adabu na uangalie hazina ya maarifa"] }
          ],
          tryIt: "Andika hati fupi ya simu ya mazoezi: intaneti ya mteja imekuwa polepole kwa siku mbili. Tumia hatua zote sita. Kisha fanya simu hiyo na rafiki au jirekodi ukicheza pande zote mbili, na uipe alama: kwa kila hatua andika Anafikia au Bado.",
          youCanNow: "kufuata mtiririko wa simu kutoka ufunguzi hadi ufungaji na kukagua simu yako mwenyewe kwa kadi ya alama ya QA.",
          quickCheck: [
            { objective: "O3", q: "Anayepiga anauliza kuhusu salio la akaunti yake. Nini kinakuja kwanza?", options: ["Kusoma salio mara moja", "Kuomba nywila yake kamili", "Kuthibitisha yeye ni nani kwa maswali ya usalama ya akaunti", "Kumhamishia timu nyingine"], answer: 2, why: "Uthibitisho unalinda taarifa za siri za mteja na kwa kawaida ni mstari wa kufuata sheria kwenye kadi ya alama." },
            { objective: "O3", q: "Hatua ipi inakuja kabla tu ya kufunga?", options: ["Kurudia muhtasari: kusema kilichofanyika", "Ufunguzi", "Uthibitisho", "Salamu"], answer: 0, why: "Muhtasari unathibitisha kilichofanyika, ili mteja aondoke akiwa na uhakika wa matokeo." }
          ]
        },
        {
          title: "Vipimo, ratiba na kujitunza",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Eleza vipimo vitano vikuu vya kituo cha simu na uandike mpango wa maandalizi wa zamu au kazi ya nyumbani.",
          text: [
            "Mawakala wa simu wanapimwa kwa namba, mara nyingi zinaitwa KPI. Muda wa wastani wa kushughulikia (AHT) ni urefu wa wastani wa mawasiliano, pamoja na muda wa kusubirishwa na maelezo baada ya simu. Utatuzi wa mara ya kwanza (FCR) ni mara ngapi tatizo linatatuliwa kwenye mawasiliano ya kwanza. Kuridhika kwa mteja (CSAT) kunatoka kwenye tafiti fupi baada ya mawasiliano. Alama ya QA inatoka kwenye kadi ya alama. Kufuata ratiba (schedule adherence) ni jinsi unavyofuata ratiba yako: kuingia kwa wakati na kuchukua mapumziko kwa nyakati zilizopangwa.",
            "Vipimo hivi vinavutana. Kuharakisha kunapunguza muda wa kushughulikia lakini kunaweza kuharibu FCR na CSAT wateja wanapopiga tena. Njia ya uaminifu ya kupanda ni kuijua hazina ya maarifa vizuri, kusikiliza kwa makini, na kuandika maelezo mazuri ili wakala anayefuata asianze upya.",
            "Akaunti nyingi zinafanya kazi saa 24 kwa siku, kwa hiyo zamu zinaweza kuwa usiku, wikendi na sikukuu, mara nyingi kulingana na saa za nchi ya mteja mkuu. Panga usingizi wako (chumba chenye giza na kimya, saa zile zile kila siku), usafiri salama usiku, milo na maji. Kwa kazi ya nyumbani: mahali pa kimya, headset (vipokea sauti vyenye kipaza sauti), intaneti yenye kasi ya kutosha, na akiba ya umeme au intaneti, pamoja na sheria za kampuni za faragha ukiwa nyumbani."
          ],
          words: [
            ["KPI", "key performance indicator: namba inayotumiwa kupima jinsi kazi inavyofanywa vizuri."],
            ["AHT (muda wa wastani wa kushughulikia)", "urefu wa wastani wa mawasiliano, pamoja na kusubirishwa na kazi baada ya simu."],
            ["FCR (utatuzi wa mara ya kwanza)", "mara ngapi tatizo linatatuliwa kwenye simu au chat ya kwanza."],
            ["CSAT (kuridhika kwa mteja)", "alama inayotoka kwenye tafiti fupi za wateja baada ya mawasiliano."],
            ["Kufuata ratiba", "jinsi wakala anavyofuata ratiba iliyopangwa ya kuingia, mapumziko na kutoka."]
          ],
          slides: [
            { title: "Vipimo vitano vya mawakala wa simu", bullets: ["AHT: muda wa wastani wa kushughulikia", "FCR: kutatuliwa kwenye mawasiliano ya kwanza", "CSAT: alama ya utafiti wa mteja", "Alama ya QA na kufuata ratiba"] },
            { title: "Vipimo vinavutana", bullets: ["Kuharakisha kunapunguza AHT lakini kunaweza kuharibu FCR na CSAT", "Ijue hazina ya maarifa, sikiliza, andika maelezo mazuri"] },
            { title: "Kazi ya zamu", bullets: ["Usiku, wikendi na sikukuu kwa saa za mteja mkuu", "Saa zile zile za kulala katika chumba chenye giza na kimya", "Panga usafiri salama usiku, milo na maji"] },
            { title: "Kufanya kazi nyumbani", bullets: ["Mahali pa kimya na headset", "Intaneti yenye kasi ya kutosha na akiba ya umeme au data", "Fuata sheria za faragha za kampuni ukiwa nyumbani"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Ripoti ya mazoezi: AHT ya Ama ni dakika 4 (ya timu ni 6), FCR yake ni asilimia 55 (timu asilimia 75) na CSAT yake iko chini. Kwa sentensi mbili, eleza kinachotokea na suluhisho moja la uaminifu. Kisha andika mpango wako wa maandalizi wenye angalau vitu vitano: usingizi, usafiri, milo, vifaa na akiba ya umeme au intaneti.",
          youCanNow: "kueleza AHT, FCR, CSAT, alama ya QA na kufuata ratiba, na kupanga usingizi, usafiri na maandalizi yako kwa kazi ya zamu au ya nyumbani.",
          quickCheck: [
            { objective: "O4", q: "Wakala ana muda mfupi sana wa kushughulikia lakini wateja wengi wanapiga tena. Kipimo kipi huenda kiko chini?", options: ["Kufuata ratiba", "Kasi ya kibodi", "Idadi ya mapumziko", "Utatuzi wa mara ya kwanza"], answer: 3, why: "Wateja kupiga tena kunamaanisha matatizo hayakutatuliwa mara ya kwanza, kwa hiyo FCR iko chini." },
            { objective: "O5", q: "Unafanya kazi nyumbani na eneo lako lina kukatika kwa umeme. Nini kinafaa katika mpango wako?", options: ["Hakuna; jitoe kuwa mgonjwa umeme ukikatika", "Akiba ya umeme au intaneti na kumwambia kiongozi wa timu mapema", "Kufanya kazi kwenye mgahawa wenye watu wengi bila kuuliza", "Kutumia spika katika chumba mnachoshiriki"], answer: 1, why: "Akiba na taarifa ya mapema vinakuwezesha kuendelea kufanya kazi na kufuata sheria za kampuni." }
          ]
        },
        {
          title: "Kupanda cheo na mpango wako wa siku 90",
          objectives: ["O6"],
          minutes: 5,
          goal: "Andika mpango wa siku 90 wa kuajiriwa na utaje hatua yako inayofuata ya kupanda katika ngazi za kazi za BPO.",
          text: [
            "BPO ina ngazi. Mawakala wa simu wanaweza kuwa mawakala waandamizi au wataalamu wa mada (SME), kisha viongozi wa timu, kisha mameneja wa uendeshaji. Njia za pembeni ni pamoja na mchambuzi wa QA, mkufunzi, usimamizi wa nguvu kazi (kupanga ratiba na idadi ya wafanyakazi), kuajiri, ripoti na data, na msaada wa IT. Kampuni nyingi zinapendelea kupandisha cheo watu ambao tayari wanaijua akaunti.",
            "Kinachokusaidia kupanda: vipimo thabiti, mahudhurio mazuri, kuwafundisha wengine, lugha ya pili, na kozi fupi. Baadhi ya serikali zinaendesha mafunzo: TESDA ya Ufilipino inaweka viwango na kutoa mafunzo na vyeti, na Ajira Digital Program ya Kenya inahimiza kazi za mtandaoni. Angalia kurasa rasmi kwa kile kinachotolewa sasa.",
            "Mpango wako wa siku 90 unaunganisha yote. Wiki 1 hadi 2: chagua aina ya kazi na uwakague waajiri watatu kwenye tovuti zao rasmi. Wiki 3 hadi 8: fanya mazoezi ya kibodi, kusoma kwa sauti na simu za mazoezi kwa siku zilizopangwa, na uombe kwenye kurasa rasmi za nafasi za kazi. Wiki 9 hadi 12: endelea kuomba, fuatilia kwa adabu, na ujiandae kwa mafunzo. Kisha andika hatua moja ya kupanda unayotaka ndani ya mwaka mmoja."
          ],
          steps: [
            "Andika aina ya kazi unayotaka (sauti au isiyo ya sauti, kupokea au kupiga) na kwa nini.",
            "Wakague waajiri watatu halisi kwenye tovuti zao rasmi na uandike viungo.",
            "Ongeza orodha yako ya kukagua ulaghai kutoka Somo la 2.",
            "Weka tarehe za mazoezi kwenye kalenda: kibodi, kusoma kwa sauti, simu za mazoezi.",
            "Andika mpango wako wa zamu au wa nyumbani kutoka Somo la 5.",
            "Taja hatua moja ya kupanda kwa mwaka ujao na jambo moja utakalofanya kuifikia."
          ],
          words: [
            ["SME (mtaalamu wa mada)", "wakala mwenye uzoefu ambaye mawakala wengine humwomba msaada kwenye kesi ngumu."],
            ["Kiongozi wa timu", "msimamizi anayefundisha timu ya mawakala na kufuatilia vipimo vyao."],
            ["Usimamizi wa nguvu kazi (WFM)", "timu inayotabiri idadi ya simu na kupanga ratiba na idadi ya wafanyakazi."],
            ["TESDA", "taasisi ya serikali ya Ufilipino ya elimu ya ufundi na mafunzo ya ujuzi."]
          ],
          slides: [
            { title: "Ngazi za BPO", bullets: ["Wakala, wakala mwandamizi au SME, kiongozi wa timu, meneja wa uendeshaji", "Njia za pembeni: QA, mkufunzi, usimamizi wa nguvu kazi, kuajiri, IT"] },
            { title: "Kinachokusaidia kupanda", bullets: ["Vipimo thabiti na mahudhurio mazuri", "Kuwafundisha wengine na lugha ya pili", "Kozi fupi na programu rasmi za mafunzo"] },
            { title: "Mpango wako wa siku 90", bullets: ["Wiki 1-2: aina ya kazi na waajiri watatu uliowakagua", "Wiki 3-8: fanya mazoezi na uombe kwenye tovuti rasmi", "Wiki 9-12: fuatilia na ujiandae kwa mafunzo"] }
          ],
          sources: [TESDA, AJIRA, IBPAP],
          tryIt: "Anza mpango wako wa siku 90 sasa. Kwenye karatasi au kwenye hati, andika tarehe ya leo, aina ya kazi unayotaka, majina na anwani za tovuti rasmi za waajiri watatu uliowakagua, na tarehe za vipindi vyako vitatu vya kwanza vya mazoezi.",
          youCanNow: "kuandika mpango wa siku 90 wenye tarehe wa kuajiriwa katika BPO na kutaja hatua yako inayofuata ya kupanda.",
          quickCheck: [
            { objective: "O6", q: "Ipi ni hatua halisi ya kupanda kutoka wakala katika BPO nyingi?", options: ["Mteja", "Mteja mkuu", "Kiongozi wa timu", "Ada ya kuajiri"], answer: 2, why: "Mawakala mara nyingi wanapanda kuwa SME, kisha kiongozi wa timu, kisha meneja wa uendeshaji." },
            { objective: "O6", q: "Waajiri katika mpango wako wanapaswa kutoka wapi?", options: ["Tovuti zao rasmi, ulizozipata wewe mwenyewe", "Kikundi cha WhatsApp kinachouza orodha za kazi", "Tangazo lolote linaloahidi mshahara mkubwa", "Wakala anayeomba ada"], answer: 0, why: "Tovuti rasmi ulizozipata wewe mwenyewe ndiyo njia salama zaidi ya kuhakikisha mwajiri ni halisi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya kazi na kupanda cheo",
        questions: [
          { objective: "O3", q: "Kwenye kadi nyingi za alama za QA, kosa lipi linaweza kufelisha simu nzima?", options: ["Kusema asante mara mbili", "Kunyamaza kidogo kabla ya kujibu", "Kutabasamu unapoongea", "Kuruka uthibitisho kabla ya kutoa taarifa za akaunti"], answer: 3, why: "Uthibitisho ni mstari wa kufuata sheria; kuuruka kunahatarisha taarifa za mteja." },
          { objective: "O4", q: "CSAT inapima nini?", options: ["Simu ilichukua muda gani", "Wateja wanasema waliridhika kiasi gani katika utafiti", "Mara ngapi uliingia kwa wakati", "Unaandika kwa kibodi kwa kasi gani"], answer: 1, why: "CSAT ni alama ya kuridhika kwa mteja kutoka kwenye tafiti fupi baada ya mawasiliano." },
          { objective: "O4", q: "Kila mara unarudi kutoka mapumziko ukiwa umechelewa dakika 10. Kipimo kipi kinashuka?", options: ["Kufuata ratiba", "Utatuzi wa mara ya kwanza", "Kasi ya kibodi", "Alama ya uthibitisho ya QA"], answer: 0, why: "Kufuata ratiba kunapima jinsi unavyofuata nyakati zako za kuingia na mapumziko." },
          { objective: "O5", q: "Unaanza zamu za usiku wiki ijayo. Mpango upi ni mzuri?", options: ["Kulala saa tofauti kila siku", "Kunywa vinywaji vya kuongeza nguvu badala ya kulala", "Saa zile zile za kulala katika chumba chenye giza na kimya na njia salama ya kurudi nyumbani", "Kutembea peke yako nyumbani kwenye barabara zisizo na taa"], answer: 2, why: "Usingizi wa kawaida katika chumba chenye giza na usafiri salama vinalinda afya na usalama wako katika zamu za usiku." },
          { objective: "O6", q: "Usimamizi wa nguvu kazi (WFM) unafanya nini?", options: ["Kupokea simu za wateja tu", "Kutabiri idadi ya simu na kupanga ratiba na idadi ya wafanyakazi", "Kuuza bidhaa kwa wateja wakuu", "Kukagua pasipoti yako"], answer: 1, why: "WFM inapanga mawakala wangapi wanahitajika na lini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kazi za Vituo vya Simu na Utoaji Huduma kwa Niaba (BPO)",
    questions: [
      { objective: "O1", q: "BPO ni kifupi cha nini?", options: ["Business process outsourcing (kufanya kazi kwa niaba ya kampuni nyingine)", "Basic phone operations (shughuli za msingi za simu)", "Bank payment office (ofisi ya malipo ya benki)", "Business product order (oda ya bidhaa za biashara)"], answer: 0, why: "BPO ni business process outsourcing: kampuni moja inayofanya sehemu ya kazi ya kampuni nyingine." },
      { objective: "O1", q: "Unajibu barua pepe na chat za wateja wa duka la mtandaoni. Hii ni kazi ya aina gani?", options: ["Sauti ya kupiga", "Sauti ya kupokea", "Msaada usio wa sauti", "Mauzo ya nje ya ofisi"], answer: 2, why: "Barua pepe na chat ni kazi zisizo za sauti." },
      { objective: "O1", q: "Akaunti inahudumia wateja wanaozungumza Kifaransa. Ujuzi upi ni muhimu zaidi kwa mawakala wake?", options: ["Kuendesha gari", "Kifaransa kilicho wazi cha kuongea na kuandika", "Mwandiko wa haraka", "Kujua aina nyingi za simu"], answer: 1, why: "Lugha ya akaunti mara nyingi ndiyo ujuzi mkuu ambao BPO huajiri kwa ajili yake." },
      { objective: "O2", q: "Ipi ni dalili ya hatari ya kazi bandia?", options: ["Jaribio la mtandaoni kutoka tovuti ya kampuni yenyewe", "Kazi iliyoorodheshwa kwenye ukurasa rasmi wa nafasi za kazi", "Usaili uliopangwa kwa barua pepe ya kampuni yenyewe", "Ada unayopaswa kulipa kabla ya kuanza"], answer: 3, why: "Waajiri halisi hawakutozi pesa ili uajiriwe." },
      { objective: "O2", q: "\"Wakala wa ajira\" anakutumia hundi uiweke benki na anakuomba urudishe sehemu kwa ajili ya vifaa. Hii ni nini?", options: ["Ulaghai wa kawaida wa hundi bandia", "Njia ya kawaida ya kununua headset", "Bonasi ya kusaini mkataba", "Posho ya mafunzo"], answer: 0, why: "Hundi inakataliwa baadaye na unadaiwa na benki pesa ulizotuma." },
      { objective: "O2", q: "Wakala anakupa kazi ya kituo cha simu nje ya nchi. Unakagua nini kwanza?", options: ["Ana wafuasi wangapi kwenye mitandao ya kijamii", "Kama anaahidi mshahara mkubwa", "Kama amesajiliwa na ofisi ya kazi au ya wafanyakazi wahamiaji ya serikali yako", "Kama anataka pasipoti yako ya asili"], answer: 2, why: "Wakala aliyesajiliwa anaweza kukaguliwa kwenye orodha rasmi; wasiosajiliwa ni hatari kubwa." },
      { objective: "O3", q: "Njia bora ya kujiandaa kwa jaribio la sauti la BPO ni ipi?", options: ["Kujaribu kuiga lafudhi nyingine", "Kujirekodi ukisoma kwa sauti na kurekebisha maneno yasiyo wazi", "Kuongea haraka kadiri unavyoweza", "Kukariri bei za mteja mkuu"], answer: 1, why: "Kujirekodi na kujisikiliza kunakusaidia kuongea wazi kwa mwendo wa kawaida." },
      { objective: "O3", q: "Nesting ni nini?", options: ["Wiki zako za kwanza kwenye simu halisi ukiwa na msaada wa ziada", "Chumba cha mapumziko", "Aina ya ada ya kuajiri", "Bonasi ya zamu ya usiku"], answer: 0, why: "Nesting inakuja baada ya mafunzo darasani: simu halisi ukiwa na mkufunzi." },
      { objective: "O3", q: "Katika mtiririko wa simu, hatua ya kuchunguza inafanya nini?", options: ["Kumshukuru mteja", "Kumaliza simu", "Kumsubirisha mteja", "Kuuliza maswali ili kupata tatizo halisi"], answer: 3, why: "Kuchunguza kunapata tatizo halisi kabla ya kujaribu kulitatua." },
      { objective: "O3", q: "Hujui jibu la swali la mteja. Unafanya nini?", options: ["Kukisia ili simu iwe fupi", "Kukata simu", "Kumwomba asubiri kwa adabu na kuangalia hazina ya maarifa au kiongozi wa timu", "Kumwambia apigie kampuni nyingine"], answer: 2, why: "Kuangalia jibu lililoidhinishwa kunafanya taarifa iwe sahihi na simu iwe ya kitaalamu." },
      { objective: "O4", q: "AHT inajumuisha nini?", options: ["Muda unaoongea tu", "Muda wa kuongea, wa kusubirishwa na wa maelezo baada ya simu", "Muda wako wa mapumziko tu", "Muda kati ya zamu"], answer: 1, why: "Muda wa wastani wa kushughulikia unahesabu mawasiliano yote, pamoja na kusubirishwa na kazi baada ya simu." },
      { objective: "O4", q: "Ipi ni njia ya uaminifu ya kuongeza utatuzi wa mara ya kwanza?", options: ["Kukata simu ngumu", "Kuwaambia wateja wapige baadaye", "Kuweka alama kwamba simu zimetatuliwa wakati hazijatatuliwa", "Kujifunza hazina ya maarifa na kuthibitisha suluhisho kabla ya kufunga"], answer: 3, why: "Kujua majibu na kuthibitisha suluhisho kunatatua matatizo mengi zaidi kwenye mawasiliano ya kwanza." },
      { objective: "O4", q: "Kwa kawaida nani anatoa alama ya QA?", options: ["Timu ya ubora, ikitumia kadi ya alama kwenye simu zilizorekodiwa", "Mteja, katika utafiti", "Wakili wa mteja mkuu", "Wakala wa ajira"], answer: 0, why: "Wachambuzi wa QA wanasikiliza simu na kuzipa alama kwenye kadi; CSAT inatoka kwa wateja." },
      { objective: "O5", q: "Kwa nini kazi nyingi za BPO zina zamu za usiku?", options: ["Simu za usiku hazina kodi", "Ofisi ni nafuu usiku", "Akaunti mara nyingi zinafuata saa za nchi ya mteja mkuu na zinafanya kazi saa 24", "Wateja wanapiga usiku tu"], answer: 2, why: "Akaunti nyingi zinahudumia wateja walio katika saa za kanda nyingine au zinafanya kazi mchana na usiku." },
      { objective: "O5", q: "Kitu kipi kinafaa katika mpango wa maandalizi ya kazi ya nyumbani?", options: ["Chumba cha pamoja chenye kelele", "Headset na akiba ya umeme au intaneti", "Barua pepe binafsi kwa taarifa za wateja", "Televisheni ikiwa imewashwa wakati wa simu"], answer: 1, why: "Headset na akiba vinafanya simu ziwe wazi na vinakuwezesha kuendelea kufanya kazi umeme au intaneti ikikatika." },
      { objective: "O5", q: "Mpango upi ni salama zaidi wa kurudi nyumbani baada ya zamu ya usiku?", options: ["Kupanga usafiri salama au usafiri wa kampuni kabla ya zamu", "Kukubali kupelekwa na mgeni yeyote", "Kutembea peke yako kwenye mitaa isiyo na taa", "Kuamua zamu inapoisha"], answer: 0, why: "Kupanga usafiri salama mapema kunakulinda usiku." },
      { objective: "O6", q: "Ipi ni njia ya pembeni katika kazi ya BPO?", options: ["Mteja", "Ada ya kuajiri", "Anayepiga simu", "Mchambuzi wa uhakiki wa ubora (QA)"], answer: 3, why: "QA, mafunzo, usimamizi wa nguvu kazi na kuajiri ni njia za pembeni za kawaida." },
      { objective: "O6", q: "Nini kinaingia katika wiki 3 hadi 8 za mpango wako wa siku 90?", options: ["Hakuna; subiri simu", "Kumlipa wakala akutafutie kazi", "Mazoezi kwa siku zilizopangwa na kuomba kwenye kurasa rasmi za nafasi za kazi", "Kumpa wakala pasipoti yako"], answer: 2, why: "Mazoezi ya mara kwa mara na kuomba kwenye kurasa rasmi ndiyo kiini cha mpango." },
      { objective: "O6", q: "Kipi kinamsaidia wakala kupandishwa cheo kuwa kiongozi wa timu?", options: ["Vipimo thabiti, mahudhurio mazuri na kuwasaidia wengine", "Kuchelewa kurudi kutoka mapumziko", "Kukwepa kufundishwa", "Kubadilisha akaunti kila mwezi"], answer: 0, why: "Vipimo vya kuaminika, mahudhurio na kuwafundisha wengine vinaonyesha uongozi." },
      { objective: "O2", q: "Unagundua kuwa barua ya kazi ilikuwa bandia baada ya kutuma picha ya kitambulisho chako. Unafanya nini?", options: ["Kutuma nyaraka zaidi kujithibitisha", "Kulipa ada ili wakurudishie picha yako", "Kufuta jumbe na kusahau", "Kuacha mawasiliano, kuhifadhi picha za skrini na kuripoti kwa polisi au ofisi rasmi ya ulaghai"], answer: 3, why: "Kuhifadhi ushahidi na kuripoti kunakusaidia kujilinda wewe na wengine dhidi ya matumizi mabaya ya utambulisho wako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 6, 10, 13, 16, 8] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Aina ya kazi imechaguliwa", objective: "O1", notYet: "Hakuna aina ya kazi, au sauti na isiyo ya sauti zimechanganywa.", meets: "Anataja sauti au isiyo ya sauti na kupokea au kupiga, pamoja na ujuzi mkuu inaohitaji.", exceeds: "Pia anaeleza kwa nini inafaa ujuzi na lugha zake mwenyewe." },
      { name: "Waajiri wamekaguliwa na ulaghai umeepukwa", objective: "O2", notYet: "Waajiri wanatoka kwenye matangazo au jumbe, au mpango unajumuisha kulipa ada.", meets: "Waajiri watatu wenye viungo vya tovuti rasmi, na orodha ya kukagua ulaghai yenye angalau dalili nne.", exceeds: "Pia anaeleza jinsi ya kukagua usajili wa wakala kwa kazi za nje ya nchi na mahali pa kuripoti ulaghai." },
      { name: "Simu ya mazoezi", objective: "O3", notYet: "Simu iliyorekodiwa inaruka hatua, au inaruka uthibitisho.", meets: "Inafungua, inathibitisha, inachunguza, inatatua, inarudia muhtasari na inafunga; Anafikia katika kila mstari wa kadi ya alama.", exceeds: "Mwanafunzi anataja jambo moja la kuboresha na anarekodi jaribio la pili lililo bora zaidi." },
      { name: "Anajua vipimo", objective: "O4", notYet: "Hawezi kusema AHT, FCR, CSAT, alama ya QA na kufuata ratiba vinapima nini.", meets: "Anaeleza vyote vitano, kila kimoja na njia moja ya uaminifu ya kukiboresha.", exceeds: "Anaeleza jinsi kuharakisha kunavyoweza kupunguza AHT lakini kuharibu FCR na CSAT." },
      { name: "Mpango wa maandalizi", objective: "O5", notYet: "Vitu chini ya vitano, au hakuna mpango wa akiba.", meets: "Angalau vitu vitano: usingizi, usafiri, milo, vifaa na akiba ya umeme au intaneti.", exceeds: "Anaongeza sheria za faragha za mwajiri kwa kazi ya nyumbani na mpango wa kumwambia kiongozi wa timu mapema kuhusu matatizo." },
      { name: "Mpango wa siku 90", objective: "O6", notYet: "Hakuna tarehe, au hakuna hatua ya kupanda iliyotajwa.", meets: "Hatua za mazoezi na maombi zenye tarehe kwa siku 90 na hatua moja ya kupanda ndani ya mwaka mmoja.", exceeds: "Anataja ujuzi au kozi maalum kwa hatua ya kupanda na lini ataanza." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba kazi kwa angalau waajiri watatu wa BPO waliowakagua ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoalikwa kwenye jaribio la kuajiri au usaili, na wanaoajiriwa, ndani ya siku 90",
      "Wanafunzi wanaoripoti jaribio la ulaghai walilolitambua na hawakulipa",
      "Wanafunzi walioajiriwa ambao bado wanafanya kazi baada ya siku 90 (miezi ya kwanza ndipo watu wengi huacha)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti; karatasi na kalamu kwa kila kazi",
      "Simu inayorekodi sauti kwa mazoezi ya kusoma kwa sauti na simu za mazoezi",
      "Mwenzi wa simu za mazoezi (rafiki, mwanafamilia au mwanafunzi mwenzako), au mwanafunzi akicheza pande zote mbili",
      "Ukurasa uliochapishwa kutoka kitabu au gazeti kwa mazoezi ya kibodi, na programu yoyote ya kuandika",
      "Kama dakika 70 kwa jumla, katika vipindi vifupi, pamoja na mazoezi katika mpango wa siku 90"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja. Kisha fanyeni sura moja kwa kila kipindi, na simu za mazoezi kwa jozi wakati wa Sura 2.",
      "Leta matangazo halisi ya kazi ya eneo lako, majina ya kampuni yakiwa yameondolewa, na wanafunzi wayapange kwa aina ya kazi na kuyakagua kwa dalili za ulaghai.",
      "Ukiweza, mwalike kiongozi wa timu, wakala wa ajira au mkufunzi kutoka BPO ya eneo lako aeleze hatua zao halisi za kuajiri; majaribio ya kuajiri yanatofautiana kwa kampuni.",
      "Usiwaombe wanafunzi kamwe kutoa namba halisi za vitambulisho, nywila au taarifa za benki katika mazoezi; tumia taarifa za akaunti za kubuni.",
      "Kwa kazi za nje ya nchi, waonyeshe wanafunzi orodha rasmi ya mawakala wa ajira waliosajiliwa katika nchi yako na mahali pa kuripoti uajiri haramu.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
