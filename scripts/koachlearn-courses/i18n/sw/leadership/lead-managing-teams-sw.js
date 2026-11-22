"use strict";

// Koach Learn course (Swahili translation of leadership/lead-managing-teams.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-managing-teams-sw",
  lang: "sw",
  translationOf: "lead-managing-teams",
  category: "Leadership Development",
  name: "Kusimamia Timu",
  skills: "Kuweka matarajio yaliyo wazi, Kukabidhi kazi, Kufanya mikutano ya ana kwa ana, Kutoa maoni kwa njia ya hali-tabia-matokeo, Kushughulikia utendaji duni kwa haki, Kuendesha mikutano ya timu na kutambua kazi nzuri",
  outcome: "kuongoza timu ndogo wiki hadi wiki: kuweka matarajio yaliyo wazi, kukabidhi kazi, kufanya mikutano ya ana kwa ana yenye manufaa, kutoa maoni ya haki na mahususi, kushughulikia tatizo la utendaji hatua kwa hatua, na kuendesha mkutano mfupi wa timu unaoishia na hatua zilizo wazi na shukrani za kweli.",
  about: [
    "Kozi hii ni kwa wasimamizi wapya na wanaokaribia kuwa wasimamizi: kiongozi wa zamu dukani, kiongozi wa kikundi cha kazi shambani, msimamizi katika shirika lisilo la faida, au yeyote ambaye ameombwa hivi karibuni kusimamia kazi ya watu wengine.",
    "Utafanya mazoezi ya tabia za kila siku za wasimamizi wazuri: kutoka kufanya kazi hadi kuiongoza, kusema wazi kazi nzuri inaonekanaje, kukabidhi kazi, kukutana ana kwa ana, kutoa maoni yanayosaidia, kushughulikia tatizo kwa haki, na kuendesha mikutano ambayo watu hawaiogopi.",
    "Kila somo linachukua kama dakika tano. Lisome, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" ukitumia timu yako au timu unayoijua. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Wasaidizi wa AI wanaweza kukusaidia kuandika rasimu za maelezo na ajenda, lakini ujuzi ni wako."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa \"siku 30 za kwanza\" kwa timu unayoiongoza au unayoijua: matarajio yaliyo wazi kwa nafasi moja, kazi moja utakayokabidhi (pamoja na matokeo, tarehe ya mwisho na wakati wa kufuatilia), ajenda ya mkutano wa ana kwa ana, maoni moja yaliyoandikwa kwa njia ya hali-tabia-matokeo, na ajenda ya mkutano wa timu wa dakika 20 unaoishia na hatua na shukrani moja mahususi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Viongozi wa timu wapya na wanaotarajia kuwa viongozi, wasimamizi na wamiliki wa biashara ndogo, wakiwemo watu waliopandishwa cheo kutoka kazi za mstari wa mbele na wanaojitolea wanaoongoza timu katika vikundi vya jamii.",
    startingPoint: "Ni hodari katika kazi yao wenyewe na wanaweza kufuata maelekezo. Wengi hawajawahi kupata mafunzo ya usimamizi, na baadhi sasa wanasimamia watu waliokuwa wafanyakazi wenzao.",
    gap: "Wasimamizi wapya mara nyingi wanaendelea kufanya kazi wao wenyewe, wanatoa maelekezo yasiyo wazi, wanakwepa mazungumzo magumu na wanaendesha mikutano isiyo na hatua. Hilo linawachosha na linarudisha timu nyuma. Wanahitaji tabia rahisi zinazoweza kurudiwa kwa matarajio, kukabidhi kazi, mikutano ya ana kwa ana, maoni, matatizo ya utendaji na mikutano.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Muda: masomo mafupi yanayoingia katika siku ya kazi",
      "Vifaa: simu au kompyuta; karatasi inafaa kwa mpango",
      "Kanuni za kazi zinatofautiana: maonyo rasmi na kufukuza kazi hufuata sera ya shirika na idara ya rasilimali watu",
      "Faragha: maelezo ya mikutano ya ana kwa ana na taarifa za utendaji zinabaki za siri na za heshima"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Unapoanza kusimamia watu", action: "kueleza jinsi kazi yako inavyobadilika na kuchagua kazi moja ya kuacha kufanya mwenyewe", standard: "ukitaja angalau sehemu mbili za kazi kuu ya msimamizi" },
    { id: "O2", condition: "Ukipewa kazi moja kwa mwanatimu", action: "kuandika matarajio yaliyo wazi na ukabidhi wa kazi wenye matokeo, tarehe ya mwisho, anachoweza kuamua na wakati wa kufuatilia", standard: "ili mtu huyo aweze kurudia kazi hiyo kwa maneno yake mwenyewe" },
    { id: "O3", condition: "Kwa mwanatimu mmoja", action: "kupanga ajenda ya mkutano wa ana kwa ana inayoanza na kile kilicho akilini mwake", standard: "ikihusisha maendeleo, vizuizi na kukua" },
    { id: "O4", condition: "Ukipewa jambo alilofanya mwanatimu", action: "kuandika maoni kwa njia ya hali-tabia-matokeo na kumuuliza analionaje", standard: "ukitaja tabia mahususi uliyoiona au kuisikia, bila \"kila mara\" wala \"kamwe\"" },
    { id: "O5", condition: "Ukipewa tatizo la utendaji", action: "kupanga mazungumzo ya faragha na mpango wa maandishi wa kuboresha", standard: "ukikagua matarajio kwanza na kuweka kazi nzuri inaonekanaje, msaada utakaotoa na tarehe ya kupitia" },
    { id: "O6", condition: "Kwa mkutano wa kawaida wa timu", action: "kuandika ajenda fupi inayoishia na hatua na shukrani moja mahususi", standard: "ikiwa na nani atafanya nini kufikia lini, ikitumwa siku hiyo hiyo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutoka mfanyakazi hadi msimamizi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutoka kufanya kazi hadi kusimamia",
          minutes: 4,
          goal: "Eleza jinsi kazi yako inavyobadilika unapoanza kusimamia watu, na uchague unachoacha kufanya mwenyewe.",
          text: [
            "Wasimamizi wengi wanapata kazi hii kwa sababu walikuwa hodari katika kazi. Lakini sasa kazi ni tofauti: matokeo yako ni matokeo ya timu. Ukiendelea kufanya kila kitu mwenyewe, timu inaacha kukua na wewe unachoka kupita kiasi.",
            "Kazi yako mpya ni kufanya lengo liwe wazi, kuwapa watu wanachohitaji, kuondoa vitu vinavyowazuia, kuwasaidia kuboresha, na kutambua kazi nzuri. Bado unasaidia pale inaposaidia kweli, lakini hiyo si kazi yako kuu tena.",
            "Ni kawaida hili kuhisi geni, hasa kama sasa unasimamia waliokuwa wafanyakazi wenzako. Kuwa mkarimu, kuwa wa haki kwa kila mtu, na sema ukweli kwamba nafasi yako imebadilika. Muulize msimamizi wako mafanikio yako yanaonekanaje."
          ],
          steps: ["Andika kazi ambazo bado unazifanya mwenyewe kila wiki.", "Weka alama kwa zile ambazo mtu katika timu angeweza kujifunza kuzifanya.", "Chagua moja ya kukabidhi mwezi huu.", "Muulize msimamizi wako: \"Nini kingefanya timu yangu ifanikiwe katika miezi sita?\""],
          words: [["Msimamizi", "mtu anayewajibika kwa matokeo ya kundi la watu, si kazi yake mwenyewe tu."], ["Anayeripoti kwako moja kwa moja", "mtu ambaye wewe ni msimamizi wake."]],
          slides: [
            { title: "Kazi yako imebadilika", bullets: ["Zamani: matokeo yako mwenyewe", "Sasa: matokeo ya timu", "Kufanya kila kitu mwenyewe kunazuia timu kukua"] },
            { title: "Msimamizi anafanya nini", bullets: ["Anafanya lengo liwe wazi", "Anawapa watu wanachohitaji", "Anaondoa vizuizi", "Anawasaidia watu kuboresha na kutambua kazi nzuri"] },
            { title: "Kusimamia waliokuwa wafanyakazi wenzako", bullets: ["Kuwa mkarimu na wa haki kwa kila mtu", "Sema ukweli kwamba nafasi yako imebadilika", "Muulize msimamizi wako mafanikio yanaonekanaje"] }
          ],
          tryIt: "Orodhesha kazi tano unazofanya kila wiki. Zungushia duara moja ambayo mtu katika timu yako angeweza kujifunza. Andika sentensi moja kuhusu nani angeweza kuichukua na kwa nini ingemsaidia.",
          youCanNow: "kueleza jinsi kazi ya msimamizi inavyotofautiana na kazi ya mfanyakazi na kuchagua kazi moja ya kuacha kufanya mwenyewe.",
          quickCheck: [
            { objective: "O1", q: "Kipi ni sehemu ya kazi mpya ya msimamizi?", options: ["Kufanya kila kazi ngumu mwenyewe", "Kufanya lengo liwe wazi na kutambua kazi nzuri", "Kuwakwepa waliokuwa wafanyakazi wenzako", "Kukagua kila barua pepe ambayo timu inatuma"], answer: 1, why: "Kazi ya msimamizi ni kufanya lengo liwe wazi, kuondoa vizuizi, kuwasaidia watu kuboresha na kutambua kazi nzuri." },
            { objective: "O1", q: "Wewe ni mgeni katika usimamizi na huna uhakika mafanikio yako yanaonekanaje. Ungefanya nini?", options: ["Kukisia na kutumaini mema", "Kumwiga msimamizi aliyepita kabisa", "Kuiomba timu iamue", "Kumuuliza msimamizi wako mafanikio yanaonekanaje"], answer: 3, why: "Somo linasema umuulize msimamizi wako mafanikio yanaonekanaje." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuweka matarajio yaliyo wazi na kukabidhi kazi",
          minutes: 6,
          goal: "Andika matarajio yaliyo wazi na ukabidhi kazi pamoja na matokeo, tarehe ya mwisho na wakati wa kufuatilia.",
          text: [
            "Matatizo mengi ya timu yanaanza na matarajio yasiyo wazi. Watu hawawezi kufikia lengo wasiloliona. Matarajio yaliyo wazi yanasema matokeo ni nini, yanahitaji kuwa mazuri kiasi gani, na kufikia lini. \"Weka duka safi\" si wazi. \"Jaza tena na upange rafu za mbele kufikia saa 3 asubuhi (9 am) kila siku\" ni wazi.",
            "Kukabidhi kazi kunamaanisha kumpa mtu kazi pamoja na mamlaka ya kuifanya, si kazi ndogo ndogo tu. Sema matokeo unayotaka na kwa nini ni muhimu, tarehe ya mwisho, anachoweza kuamua mwenyewe, na lini utafuatilia. Kisha mwache aifanye kwa njia yake.",
            "Linganisha ukabidhi na mtu. Mtu mpya anahitaji hatua zaidi na ufuatiliaji zaidi. Mtu mzoefu huenda akahitaji lengo tu. Mwombe arudie alichosikia, ili nyote mjue mnakubaliana."
          ],
          steps: ["Taja matokeo unayotaka na kwa nini ni muhimu.", "Sema yanahitaji kuwa mazuri kiasi gani na tarehe ya mwisho.", "Sema anachoweza kuamua peke yake na lini akuulize.", "Kubalianeni wakati wa kufuatilia.", "Mwombe arudie kazi hiyo kwa maneno yake mwenyewe."],
          words: [["Matarajio", "maelezo yaliyo wazi ya matokeo ambayo mtu anawajibika nayo na jinsi yatakavyopimwa."], ["Kukabidhi kazi", "kumpa mtu kazi pamoja na mamlaka ya kuifanya."], ["Kufuatilia", "mazungumzo mafupi yaliyopangwa ili kuona kazi inaendeleaje."]],
          slides: [
            { title: "Matarajio yaliyo wazi", bullets: ["Matokeo gani", "Yanahitaji kuwa mazuri kiasi gani", "Kufikia lini"] },
            { title: "Yasiyo wazi dhidi ya yaliyo wazi", bullets: ["Si wazi: \"Weka duka safi\"", "Wazi: \"Jaza tena na upange rafu za mbele kufikia saa 3 asubuhi (9 am) kila siku\""] },
            { title: "Sehemu tano za ukabidhi mzuri", bullets: ["Matokeo na kwa nini ni muhimu", "Ubora na tarehe ya mwisho", "Anachoamua peke yake", "Wakati wa kufuatilia, kisha anarudia"] },
            { title: "Linganisha ukabidhi na mtu", bullets: ["Mpya: hatua zaidi, ufuatiliaji zaidi", "Mzoefu: lengo na nafasi ya kufanya kazi"] }
          ],
          tryIt: "Chukua kazi uliyozungushia duara katika Somo la 1. Andika ukabidhi wenye sehemu zote tano. Msomee rafiki au useme kwa sauti, kisha ujiulize: je, mtu angeweza kufanya hii bila kuniuliza maswali kumi?",
          youCanNow: "kuandika matarajio yaliyo wazi na kukabidhi kazi pamoja na matokeo, tarehe ya mwisho, mipaka ya maamuzi na wakati wa kufuatilia.",
          quickCheck: [
            { objective: "O2", q: "Matarajio yaliyo wazi yanasema vitu gani vitatu?", options: ["Matokeo, yanahitaji kuwa mazuri kiasi gani, na kufikia lini", "Nani anaongoza, jina la timu na mahali", "Mshahara, saa za kazi na mapumziko", "Kanuni, adhabu na fomu"], answer: 0, why: "Matarajio yaliyo wazi yanataja matokeo, ubora na tarehe ya mwisho." },
            { objective: "O2", q: "Unamkabidhi kazi mwanatimu mzoefu. Ungefanya nini?", options: ["Kumpa kila hatua na kufuatilia kila saa", "Kutompa tarehe ya mwisho", "Kumpa lengo na tarehe ya mwisho, kisha kumwacha aifanye kwa njia yake", "Kufanya nusu yake kwanza"], answer: 2, why: "Linganisha ukabidhi na mtu; watu wazoefu huenda wakahitaji lengo tu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kufanya mikutano ya ana kwa ana yenye manufaa",
          minutes: 5,
          goal: "Panga na ufanye mkutano wa kawaida wa ana kwa ana ambao ni wa mwanatimu.",
          text: [
            "Mkutano wa ana kwa ana ni mkutano mfupi, wa kawaida na wa faragha kati yako na mtu mmoja katika timu yako, mara nyingi dakika 20 hadi 30 kila wiki moja au mbili. Ndiyo mahali bora pa kugundua matatizo mapema, kujenga uaminifu na kuwasaidia watu kukua.",
            "Ufanye kuwa mkutano wake. Anza na kile kilicho akilini mwake. Kisha zungumzeni kuhusu maendeleo ya kazi yake, chochote kinachomzuia, na kukua kwake. Taarifa za hali ya kazi ambazo ungeweza kuzisoma kwenye ujumbe, ziache kwa ujumbe.",
            "Linda muda huo: usiuahirishe mara kwa mara, weka simu yako mbali, na usikilize zaidi kuliko unavyoongea. Andika ahadi yoyote unayotoa na uitimize. Weka maelezo kuwa siri na ya heshima."
          ],
          steps: ["Panga muda wa kawaida na uushike.", "Anza kwa: \"Una nini akilini?\"", "Uliza kuhusu maendeleo na kinachomzuia.", "Zungumzeni kuhusu kukua: \"Unataka kuboresha nini?\"", "Malizeni kwa kukubaliana hatua zinazofuata, na ziandike."],
          words: [["Mkutano wa ana kwa ana", "mkutano wa kawaida wa faragha kati ya msimamizi na mwanatimu mmoja."], ["Kizuizi", "chochote kinachomzuia mtu kumaliza kazi yake."]],
          slides: [
            { title: "Mkutano wa ana kwa ana ni nini", bullets: ["Mfupi, wa faragha na wa kawaida", "Mara nyingi dakika 20-30 kila wiki moja au mbili", "Unagundua matatizo mapema na kujenga uaminifu"] },
            { title: "Ufanye kuwa mkutano wake", bullets: ["Anza: \"Una nini akilini?\"", "Maendeleo na vizuizi", "Kukua", "Hatua zinazofuata, zimeandikwa"] },
            { title: "Linda muda huo", bullets: ["Usiuahirishe mara kwa mara", "Simu mbali, sikiliza zaidi kuliko kuongea", "Timiza kila ahadi unayotoa"] }
          ],
          tryIt: "Andika ajenda ya mkutano wa ana kwa ana kwa mwanatimu halisi au wa kubuni yenye maswali manne: moja la kuanzia, moja kuhusu maendeleo, moja kuhusu vizuizi, na moja kuhusu kukua.",
          youCanNow: "kupanga na kufanya mkutano wa ana kwa ana unaoweka mahitaji ya mwanatimu kwanza na unaoishia na hatua zinazofuata zilizo wazi.",
          quickCheck: [
            { objective: "O3", q: "Mkutano wa ana kwa ana ni nini?", options: ["Tathmini ya kila mwaka", "Mkutano mfupi, wa kawaida na wa faragha na mwanatimu mmoja", "Mkutano wa timu nzima", "Kikao cha nidhamu"], answer: 1, why: "Mikutano ya ana kwa ana mara nyingi ni dakika 20 hadi 30 kila wiki moja au mbili." },
            { objective: "O3", q: "Mikutano yako ya ana kwa ana inaendelea kugeuka kuwa taarifa za hali ya kazi. Ungebadilisha nini?", options: ["Kuiahirisha", "Kuifanya iwe ndefu zaidi", "Kuifanya kama kikundi", "Kuhamisha taarifa za hali kwenye ujumbe na kuanza na kilicho akilini mwake"], answer: 3, why: "Ufanye kuwa mkutano wake; taarifa unazoweza kusoma ni za ujumbe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutoka mfanyakazi hadi msimamizi",
        questions: [
          { objective: "O1", q: "Badiliko kubwa zaidi ni lipi unapotoka kuwa mfanyakazi hadi msimamizi?", options: ["Unafanya kazi saa chache zaidi", "Matokeo yako sasa ni matokeo ya timu", "Huhitaji tena kusikiliza", "Unafanya kazi zote ngumu mwenyewe"], answer: 1, why: "Msimamizi anapimwa kwa kile ambacho timu nzima inafanikisha." },
          { objective: "O2", q: "Matarajio yapi yako wazi zaidi?", options: ["\"Fanya uwezavyo\"", "\"Weka vitu nadhifu\"", "\"Kuwa makini zaidi\"", "\"Tuma oda ya kila wiki kwa msambazaji kufikia Alhamisi saa 6 mchana (noon)\""], answer: 3, why: "Yanataja matokeo na tarehe ya mwisho." },
          { objective: "O2", q: "Unamkabidhi mwanatimu mpya kazi ya kuandika ripoti. Uongeze nini?", options: ["Hatua zaidi na ufuatiliaji wa mapema", "Hakuna; mwache akisie", "Onyo kwamba utaifanya upya", "Tarehe ya mwisho tu"], answer: 0, why: "Mtu mpya anahitaji mwongozo zaidi na ufuatiliaji wa mapema zaidi." },
          { objective: "O3", q: "Mkutano wa ana kwa ana ni hasa wa nani?", options: ["Bosi wa msimamizi", "Timu nzima", "Mwanatimu", "Idara ya rasilimali watu"], answer: 2, why: "Anza na kilicho akilini mwake; ni muda wake." },
          { objective: "O2", q: "Baada ya kukabidhi kazi, njia nzuri ya kuthibitisha kwamba mnakubaliana ni:", options: ["Kuituma tena kwa herufi kubwa", "Kumwomba arudie kazi hiyo kwa maneno yake mwenyewe", "Kumfuatilia kila saa", "Kuifanya mwenyewe ikiwa tu"], answer: 1, why: "Kurudia kunaonyesha kama nyote mmeelewa kitu kimoja." }
        ]
      }
    },
    {
      name: "Sura 2: Maoni, utendaji na timu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutoa maoni kwa njia ya hali-tabia-matokeo",
          minutes: 5,
          goal: "Toa maoni mahususi, ya pongezi au ya kurekebisha, ukitumia hali-tabia-matokeo.",
          text: [
            "Maoni yanafanya kazi yakiwa mahususi, yakitolewa mapema na yakihusu alichofanya mtu, si yeye ni nani. Njia rahisi ya kuyasema ni hali-tabia-matokeo, ambayo kwa Kiingereza mara nyingi huitwa SBI (situation-behavior-impact).",
            "Hali: lini na wapi. Tabia: alichofanya mtu ulichokiona au kukisikia. Matokeo: kilichotokea kwa sababu yake. Kwa mfano: \"Katika simu ya mteja asubuhi hii (hali), ulimkatiza mteja mara mbili (tabia). Alikasirika na akaomba kuongea na msimamizi (matokeo).\" Kisha uliza: \"Wewe uliionaje?\" na mkubaliane hatua inayofuata pamoja.",
            "Tumia SBI kwa pongezi pia: \"Katika kampeni ya kukusanya chakula Jumamosi, uliandaa meza ya kujiandikisha mapema. Tuliwaandikisha wanaojitolea 40 bila foleni.\" Toa maoni mapema, faraghani unaporekebisha, na uepuke maneno kama \"kila mara\" na \"kamwe\"."
          ],
          steps: ["Hali: sema lini na wapi.", "Tabia: eleza alichofanya, kama kamera ya video ingeona.", "Matokeo: sema kilichotokea kwa sababu yake.", "Uliza analionaje, na usikilize.", "Kubalianeni hatua inayofuata."],
          words: [["Maoni", "taarifa kuhusu jinsi matendo ya mtu yalivyoathiri kazi, zinazotolewa ili aendelee nayo au abadilike."], ["SBI", "situation-behavior-impact (hali-tabia-matokeo): njia ya kutoa maoni inayotaja lini, alichofanya, na kilichotokea."]],
          slides: [
            { title: "Maoni mazuri ni", bullets: ["Mahususi", "Mapema baada ya jambo kutokea", "Kuhusu alichofanya, si yeye ni nani"] },
            { title: "Hali-tabia-matokeo", bullets: ["Hali: lini na wapi", "Tabia: alichofanya", "Matokeo: kilichotokea kwa sababu yake"] },
            { title: "Kisha zungumzeni", bullets: ["Uliza: \"Wewe uliionaje?\"", "Sikiliza", "Kubalianeni hatua inayofuata"] },
            { title: "Itumie kwa pongezi pia", bullets: ["Shukrani mahususi zinagusa zaidi kuliko \"kazi nzuri\"", "Rekebisha faraghani", "Epuka \"kila mara\" na \"kamwe\""] }
          ],
          tryIt: "Andika kauli mbili za SBI kuhusu matukio halisi uliyoyaona: moja ya kupongeza kazi nzuri na moja ya kurekebisha tatizo. Hakikisha sehemu ya tabia inaeleza tu ulichokiona au kukisikia.",
          youCanNow: "kutoa maoni mahususi na ya haki yenye hali, tabia na matokeo, na kuyageuza kuwa hatua inayofuata.",
          quickCheck: [
            { objective: "O4", q: "Katika maoni ya SBI, \"matokeo\" ni nini?", options: ["Kilichotokea kwa sababu ya alichofanya mtu", "Lini na wapi lilitokea", "Unavyomfikiria mtu huyo", "Adhabu ya wakati ujao"], answer: 0, why: "Matokeo ni kile kilichotokana na tabia." },
            { objective: "O4", q: "Mwanatimu alibaki kazini hadi usiku kurekebisha oda ya mteja. Ungesema nini?", options: ["\"Wewe ni hodari kila mara.\"", "\"Asante, nadhani.\"", "\"Jana usiku ulirekebisha oda ya Bi. Lee, kwa hiyo aliipata kwa wakati na akatushukuru.\"", "Hakuna; ni kazi yake"], answer: 2, why: "SBI inafanya kazi kwa pongezi pia: hali, tabia na matokeo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kushughulikia utendaji duni kwa haki",
          minutes: 6,
          goal: "Pitisha tatizo la utendaji katika hatua zilizo wazi, za haki na zilizoandikwa.",
          text: [
            "Mtu asipofikia matarajio, chukua hatua mapema. Kusubiri kwa kawaida kunafanya mambo kuwa mabaya zaidi na si haki kwa wengine katika timu. Kwanza jikague mwenyewe: je, matarajio yalikuwa wazi? Je, alikuwa na mafunzo, vifaa na muda?",
            "Ongea naye faraghani. Tumia SBI kutaja pengo, kisha uliza nini kinamzuia. Wakati mwingine kuna sababu ambayo hukuijua, kama tatizo la afya au la familia, kifaa kilichoharibika au maelekezo yanayochanganya. Kubalianeni mpango pamoja: kazi nzuri inaonekanaje, msaada utakaotoa, na tarehe ya kupitia.",
            "Andika mlichokubaliana, na ufuatilie siku hiyo. Watendee wote kwa kiwango kile kile. Mambo yasipoboreka, au kabla ya onyo lolote rasmi au kufukuza kazi, fuata sera ya shirika lako na ongea na idara ya rasilimali watu au msimamizi wako. Kanuni zinatofautiana kati ya mahali na mahali, kwa hiyo tafuta ushauri ukiwa na shaka."
          ],
          steps: ["Kagua: je, matarajio yalikuwa wazi, na alikuwa na alichohitaji?", "Kutana naye faraghani na utaje pengo kwa SBI.", "Uliza nini kinamzuia, na usikilize.", "Kubalianeni kazi nzuri inaonekanaje, msaada wako na tarehe ya kupitia.", "Kiandike na ufuatilie siku hiyo.", "Kabla ya hatua rasmi, fuata sera yako na ongea na HR au msimamizi wako."],
          words: [["Utendaji duni", "kazi ya mtu isipofikia matarajio yaliyowekwa."], ["Mpango wa kuboresha", "makubaliano ya maandishi kuhusu kinachopaswa kubadilika, msaada utakaotolewa, na tarehe ya kupitia."], ["HR", "human resources (rasilimali watu): watu wanaoshughulikia kuajiri, sera na mambo ya wafanyakazi."]],
          slides: [
            { title: "Chukua hatua mapema", bullets: ["Kusubiri kunafanya mambo kuwa mabaya zaidi", "Si haki kwa wengine katika timu"] },
            { title: "Jikague mwenyewe kwanza", bullets: ["Je, matarajio yalikuwa wazi?", "Je, alikuwa na mafunzo, vifaa na muda?"] },
            { title: "Mazungumzo", bullets: ["Faraghani, ukitumia SBI", "Uliza nini kinamzuia", "Kubalianeni kazi nzuri inaonekanaje, msaada na tarehe"] },
            { title: "Ifanye iwe ya haki", bullets: ["Andika mlichokubaliana", "Fuatilia siku hiyo", "Kiwango kile kile kwa kila mtu", "Fuata sera; ongea na HR kabla ya hatua rasmi"] }
          ],
          tryIt: "Fikiria tatizo la utendaji, halisi au la kubuni. Andika mpango wa kuboresha kwa mistari minne: pengo (kwa njia ya SBI), kazi nzuri inaonekanaje, msaada utakaotoa, na tarehe ya kupitia.",
          youCanNow: "kushughulikia tatizo la utendaji mapema na kwa haki kwa mazungumzo ya faragha, mpango wa maandishi na ufuatiliaji.",
          quickCheck: [
            { objective: "O5", q: "Unapaswa kukagua nini kabla ya kuibua tatizo la utendaji?", options: ["Kama matarajio yalikuwa wazi na alikuwa na alichohitaji", "Kama wengine pia hawampendi", "Kama unaweza kumfukuza kazi leo", "Kama HR wana shughuli nyingi"], answer: 0, why: "Kwanza jikague mwenyewe: matarajio yaliyo wazi, mafunzo, vifaa na muda." },
            { objective: "O5", q: "Mlikubaliana mpango wa kuboresha wenye tarehe ya kupitia. Ungefanya nini siku hiyo?", options: ["Kuusahau kama mambo yanaonekana sawa", "Kufuatilia na kuandika kilichotokea", "Kutoa onyo rasmi bila kuongea", "Kuanza mpango mpya na mtu mwingine"], answer: 1, why: "Andika mlichokubaliana na ufuatilie siku hiyo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mikutano ya timu na kutambua kazi nzuri",
          minutes: 5,
          goal: "Endesha mkutano mfupi wa timu unaoishia na hatua zilizo wazi na shukrani mahususi.",
          text: [
            "Mkutano mzuri wa timu una lengo, ajenda iliyotumwa mapema, muda wa kuanza na kumaliza, na orodha ya hatua mwishoni. Kama unahitaji tu kushiriki habari, tuma ujumbe badala yake.",
            "Uendeshe kwa wakati. Mpe kila mtu zamu ili watu wakimya waongee, weka mada za pembeni kwa baadaye, na malizia kwa kusoma tena kila hatua: nani atafanya nini, kufikia lini. Tuma hatua hizo siku hiyo hiyo. Msaidizi wa AI anaweza kukusaidia kugeuza maelezo yako kuwa orodha safi, lakini ikague.",
            "Kutambua kazi nzuri kunawapa watu nguvu ya kuendelea. Washukuru watu mara nyingi, mapema, na kwa namna mahususi, na sema jinsi kazi yao ilivyosaidia. Baadhi ya watu wanapenda kupongezwa hadharani; wengine wanapendelea neno au ujumbe wa faragha. Waulize wanapenda nini."
          ],
          steps: ["Andika lengo na ajenda fupi; ituma mapema.", "Anza na umalize kwa wakati.", "Mkaribishe kila mtu aongee.", "Funga kwa kusoma tena hatua: nani, nini, kufikia lini.", "Tuma hatua siku hiyo hiyo.", "Toa shukrani moja mahususi."],
          words: [["Ajenda", "orodha ya mada za mkutano, kwa mpangilio."], ["Hatua ya kufanya", "kazi iliyokubaliwa katika mkutano, yenye mtu na tarehe ya mwisho."], ["Kutambua kazi nzuri", "kuwaonyesha watu kwamba umeiona kazi yao na unaithamini."]],
          slides: [
            { title: "Kabla ya mkutano", bullets: ["Lengo lililo wazi", "Ajenda fupi iliyotumwa mapema", "Ni habari tu? Tuma ujumbe badala yake"] },
            { title: "Wakati wa mkutano", bullets: ["Anza na umalize kwa wakati", "Mkaribishe kila mtu aongee", "Weka mada za pembeni kwa baadaye"] },
            { title: "Malizia na hatua", bullets: ["Nani atafanya nini, kufikia lini", "Zitume siku hiyo hiyo"] },
            { title: "Kutambua kazi nzuri", bullets: ["Mara nyingi, mapema na mahususi", "Sema jinsi kazi yao ilivyosaidia", "Uliza kama wanapendelea shukrani za hadharani au za faragha"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa \"siku 30 za kwanza\". Weka matarajio kwa nafasi moja, kazi moja ya kukabidhi, ajenda ya mkutano wa ana kwa ana, maoni moja ya SBI, na ajenda ya mkutano wa dakika 20 unaoishia na hatua na shukrani moja mahususi.",
          youCanNow: "kuendesha mkutano mfupi wa timu wenye mwelekeo, kuufunga kwa hatua zilizo wazi, na kutambua kazi nzuri kwa njia ambayo watu wanaithamini.",
          quickCheck: [
            { objective: "O6", q: "Mkutano mzuri wa timu una nini?", options: ["Hauna ajenda ili ubaki rahisi kubadilika", "Lengo, ajenda iliyotumwa mapema, muda wa kuanza na kumaliza, na hatua", "Msimamizi peke yake ndiye anaongea", "Hauna muda maalum wa kumaliza"], answer: 1, why: "Sehemu hizi zinafanya mkutano uwe mfupi na wenye manufaa." },
            { objective: "O6", q: "Mwanatimu mkimya anapenda shukrani za faragha. Ungefanya nini?", options: ["Kumpongeza kwa sauti katika mkutano hata hivyo", "Kuacha kumshukuru", "Kumshukuru katika kikundi cha ujumbe cha timu", "Kumpa shukrani mahususi kwa neno au ujumbe wa faragha"], answer: 3, why: "Waulize watu wanapenda kutambuliwaje na uheshimu hilo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Maoni, utendaji na timu",
        questions: [
          { objective: "O4", q: "Katika hali-tabia-matokeo, sehemu ya \"tabia\" ni ipi?", options: ["Maoni yako kuhusu mwenendo wake", "Wengine walichosema kumhusu", "Alichofanya ulichokiona au kukisikia", "Cheo chake cha kazi"], answer: 2, why: "Tabia ni kile mtu alichofanya kweli, kikielezwa kwa urahisi." },
          { objective: "O4", q: "Kauli ipi ni maoni ya SBI?", options: ["\"Wewe ni mvivu.\"", "\"Katika mkutano wa Jumanne ulimaliza bajeti mapema, kwa hiyo tuliweza kuiidhinisha kwa wakati.\"", "\"Wewe huharibu kila mara.\"", "\"Kazi nzuri, nadhani.\""], answer: 1, why: "Inataja hali, tabia na matokeo." },
          { objective: "O5", q: "Kabla ya kuibua tatizo la utendaji, unapaswa kukagua nini kwanza?", options: ["Kama matarajio yalikuwa wazi na alikuwa na alichohitaji", "Kama wengine hawampendi", "Kama unaweza kumfukuza kazi leo", "Mitandao yake ya kijamii"], answer: 0, why: "Matatizo mengi yanatokana na matarajio yasiyo wazi au vifaa vinavyokosekana." },
          { objective: "O5", q: "Kazi ya mwanatimu inaendelea kushuka. Unapaswa kuchukua hatua lini?", options: ["Katika tathmini ya kila mwaka", "Kamwe; huenda likajirekebisha", "Baada ya wengine kulalamika tu", "Mapema, katika mazungumzo ya faragha"], answer: 3, why: "Kuchukua hatua mapema ni wema zaidi na haki zaidi kuliko kusubiri." },
          { objective: "O6", q: "Kila mkutano wa timu unapaswa kuishia na nini?", options: ["Hotuba ndefu", "Hatua: nani atafanya nini, kufikia lini", "Mkutano mpya", "Hakuna kilichoandikwa"], answer: 1, why: "Hatua zilizo wazi zinageuza mazungumzo kuwa kazi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kusimamia Timu",
    questions: [
      { objective: "O1", q: "Msimamizi mpya anaendelea kufanya kazi zote ngumu yeye mwenyewe. Hatari kuu ni ipi?", options: ["Timu inajifunza haraka zaidi", "Wateja wanafurahi zaidi", "Timu inaacha kukua na yeye anachoka kupita kiasi", "Hakuna kinachobadilika"], answer: 2, why: "Kufanya kila kitu mwenyewe kunazuia timu kukua." },
      { objective: "O1", q: "Kipi ni sehemu ya kazi kuu ya msimamizi?", options: ["Kuondoa vitu vinavyoizuia timu", "Kufanya kila kazi peke yake", "Kukwepa mazungumzo magumu", "Kuficha malengo"], answer: 0, why: "Wasimamizi wanaondoa vizuizi ili timu iweze kufanya kazi." },
      { objective: "O1", q: "Sasa unasimamia waliokuwa wafanyakazi wenzako. Njia nzuri ni:", options: ["Kujifanya hakuna kilichobadilika", "Kuwasaidia marafiki zako tu", "Kuepuka kuongea nao", "Kuwa mkarimu, wa haki kwa kila mtu na kusema ukweli kwamba nafasi yako imebadilika"], answer: 3, why: "Haki na ukweli vinajenga uaminifu katika nafasi mpya." },
      { objective: "O2", q: "Matarajio yaliyo wazi yanajumuisha:", options: ["Hisia tu", "Matokeo, yanahitaji kuwa mazuri kiasi gani, na kufikia lini", "Tishio", "Historia ndefu"], answer: 1, why: "Matokeo, ubora na tarehe ya mwisho vinayafanya yawe wazi." },
      { objective: "O2", q: "Kukabidhi kazi kunamaanisha:", options: ["Kutoa tu kazi ndogo usizozipenda", "Kuangalia kila hatua", "Kumpa mtu kazi pamoja na mamlaka ya kuifanya", "Kuifanya mwenyewe baadaye"], answer: 2, why: "Ukabidhi wa kweli unajumuisha mamlaka ya kutenda." },
      { objective: "O2", q: "Unapokabidhi kazi, unapaswa kusema kile ambacho mtu anaweza:", options: ["Kuamua mwenyewe", "Kutouliza kamwe", "Kukuficha", "Kuruka"], answer: 0, why: "Mipaka ya maamuzi inamwezesha kutenda bila kukusubiri." },
      { objective: "O3", q: "Mikutano ya ana kwa ana kwa kawaida hufanyika mara ngapi?", options: ["Mara moja kwa mwaka", "Pale tu kunapokuwa na tatizo", "Kamwe", "Kila wiki moja au mbili"], answer: 3, why: "Mikutano ya kawaida inagundua matatizo mapema." },
      { objective: "O3", q: "Njia nzuri ya kuanza mkutano wa ana kwa ana ni:", options: ["\"Hiki ndicho ulichokosea.\"", "\"Una nini akilini?\"", "\"Tuufanye mfupi.\"", "Kuangalia simu yako"], answer: 1, why: "Inaufanya mkutano kuwa wake." },
      { objective: "O3", q: "Katika mkutano wa ana kwa ana uliahidi kurekebisha mashine ya kuskani iliyoharibika. Unafanya nini?", options: ["Kuiandika na kuifanya", "Kuisahau", "Kumwomba yeye airekebishe", "Kusubiri aulize tena"], answer: 0, why: "Kutimiza ahadi kunajenga uaminifu." },
      { objective: "O4", q: "SBI inasimama kwa nini?", options: ["Ongea, laumu, sisitiza", "Ujuzi, bajeti, mawazo", "Hali, tabia, matokeo (situation, behavior, impact)", "Ratiba, mapumziko, julisha"], answer: 2, why: "Hali, tabia na matokeo." },
      { objective: "O4", q: "Maoni ya kurekebisha kwa kawaida yanapaswa kutolewa wapi?", options: ["Mbele ya timu nzima", "Kwenye mitandao ya kijamii", "Katika kikundi cha ujumbe", "Faraghani"], answer: 3, why: "Kurekebisha faraghani kunalinda heshima ya mtu." },
      { objective: "O4", q: "Baada ya kutoa maoni ya SBI, hatua inayofuata ni:", options: ["Kuondoka", "Kuuliza analionaje na kukubaliana hatua inayofuata", "Kuyarudia kwa sauti zaidi", "Kuiambia timu"], answer: 1, why: "Mazungumzo ya pande mbili yanaleta mabadiliko." },
      { objective: "O4", q: "Neno lipi unapaswa kuliepuka katika maoni?", options: ["\"Leo\"", "\"Asante\"", "\"Kila mara\"", "\"Kwa sababu\""], answer: 2, why: "\"Kila mara\" na \"kamwe\" yanatia chumvi na yanawafanya watu wajitetee." },
      { objective: "O5", q: "Kazi ya mfanyakazi inashuka baada ya miaka ya kazi nzuri. Unapaswa kuuliza nini katika mazungumzo ya faragha?", options: ["\"Nini kinakuzuia?\"", "\"Kwa nini wewe ni mbaya hivi?\"", "\"Unataka kuacha kazi?\"", "Hakuna; mwandikie tu onyo"], answer: 0, why: "Huenda kuna sababu ambayo huijui." },
      { objective: "O5", q: "Mpango wa kuboresha unapaswa kujumuisha:", options: ["Onyo tu", "Kazi nzuri inaonekanaje, msaada utakaotoa, na tarehe ya kupitia", "Hakuna tarehe", "Orodha ya makosa yake"], answer: 1, why: "Malengo yaliyo wazi, msaada na tarehe vinaufanya uwe wa haki." },
      { objective: "O5", q: "Kabla ya onyo rasmi au kufukuza kazi, unapaswa:", options: ["Kuliweka kwenye kikundi cha ujumbe cha timu", "Kutenda peke yako mara moja", "Kuiomba timu ipige kura", "Kufuata sera yako na kuongea na HR au msimamizi wako"], answer: 3, why: "Sera na sheria zinatofautiana; tafuta ushauri kwanza." },
      { objective: "O6", q: "Mkutano ni wa kushiriki habari tu. Kipi ni bora zaidi?", options: ["Mkutano wa saa mbili", "Kutuma ujumbe badala yake", "Kuahirisha mikutano yote milele", "Kusoma habari kwa sauti"], answer: 1, why: "Weka mikutano kwa majadiliano na maamuzi." },
      { objective: "O6", q: "Watu wawili hawaongei kamwe katika mikutano. Nini kinasaidia?", options: ["Kumpa kila mtu zamu", "Kuwapuuza", "Kuwataja kwa ukali", "Kufanya mikutano mirefu zaidi"], answer: 0, why: "Kumpa kila mtu zamu kunawakaribisha watu wakimya." },
      { objective: "O6", q: "Unapaswa kutuma hatua za mkutano lini?", options: ["Mwezi ujao", "Kamwe", "Pale tu mtu anapoomba", "Siku hiyo hiyo"], answer: 3, why: "Kufuatilia haraka kunaweka hatua katika mstari." },
      { objective: "O6", q: "Kipi ni utambuzi bora zaidi wa kazi nzuri?", options: ["\"Kazi nzuri.\"", "Hakuna, kwa kuwa ni kazi yake", "\"Simu yako kwa msambazaji ilifanya oda yetu ifike siku moja mapema, kwa hiyo hatukuishiwa.\"", "Barua pepe ya kikundi isiyo na maelezo"], answer: 2, why: "Shukrani mahususi zinazotaja matokeo zina maana zaidi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 6, 9, 11, 13, 14, 16, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Matarajio yaliyo wazi", objective: "O2", notYet: "Matarajio si wazi, kwa mfano \"weka vitu nadhifu\".", meets: "Yanasema matokeo, yanahitaji kuwa mazuri kiasi gani, na kufikia lini.", exceeds: "Pia yanasema kwa nini matokeo ni muhimu." },
      { name: "Kazi iliyokabidhiwa", objective: "O2", notYet: "Kazi haina tarehe ya mwisho wala wakati wa kufuatilia.", meets: "Inataja matokeo, tarehe ya mwisho, anachoweza kuamua mtu na wakati wa kufuatilia.", exceeds: "Ukabidhi unalingana na uzoefu wa mtu." },
      { name: "Ajenda ya mkutano wa ana kwa ana", objective: "O3", notYet: "Ajenda ni taarifa za hali ya kazi tu.", meets: "Inaanza na kilicho akilini mwake na inahusisha maendeleo, vizuizi na kukua.", exceeds: "Ina njia ya kufuatilia ahadi unazotoa." },
      { name: "Maoni ya SBI", objective: "O4", notYet: "Maoni yanamhusu mtu mwenyewe, au yanatumia \"kila mara\" au \"kamwe\".", meets: "Yanataja hali, tabia mahususi na matokeo yake.", exceeds: "Yanaishia na swali linalokaribisha maoni yake na hatua inayofuata." },
      { name: "Mkutano wa timu na shukrani", objective: "O6", notYet: "Hakuna hatua mwishoni, au shukrani ni za jumla.", meets: "Ajenda ya dakika 20 inayoishia na nani atafanya nini kufikia lini, na shukrani moja mahususi.", exceeds: "Inawapa watu wakimya zamu na inapanga kutuma hatua siku hiyo hiyo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofanya mikutano ya kawaida ya ana kwa ana ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanatimu wanaoripoti matarajio yaliyo wazi zaidi na maoni mahususi zaidi",
      "Wanafunzi wanaochukua kozi nyingine ya uongozi ya Koach Learn"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya kutazama masomo",
      "Karatasi au hati kwa mpango wa ukurasa mmoja wa \"siku 30 za kwanza\"",
      "Timu unayoiongoza au unayoijua vizuri, ya kutumia kama mfano",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika kikundi, fanyeni jaribio la awali pamoja, kisha wanafunzi wawili wawili wafanye mazoezi ya maoni ya SBI kwa sauti kwa kutumia hali za kubuni.",
      "Igizeni mkutano wa ana kwa ana ambapo \"mwanatimu\" anaanza na kilicho akilini mwake.",
      "Wakumbushe wanafunzi kwamba maonyo rasmi na kufukuza kazi hufuata sera ya shirika lao na idara ya rasilimali watu.",
      "Waombe wanafunzi wasishiriki majina halisi wala taarifa za siri za wanatimu katika kazi za kikundi.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
