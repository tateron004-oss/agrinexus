"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-phone-repair-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const NFPA = { name: "NFPA (Chama cha Kitaifa cha Kuzuia Moto cha Marekani): Usalama wa betri za lithium-ion (dalili za hatari; usizitupe kwenye takataka, zirejeleze)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const WHO_EWASTE = { name: "Taarifa ya WHO: Taka za kielektroniki (e-waste): tani milioni 62 mwaka 2022, 22.3% zimeandikwa kuwa zimerejelezwa; hatari za kuzichoma", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };
const NDPC = { name: "Tume ya Ulinzi wa Data ya Nigeria (Nigeria Data Protection Commission; Sheria ya Ulinzi wa Data ya Nigeria 2023)", url: "https://ndpc.gov.ng/" };
const GH_DPC = { name: "Tume ya Ulinzi wa Data ya Ghana (Data Protection Commission; Sheria ya Ulinzi wa Data, 2012, Act 843; wanaoshughulikia data lazima wajisajili)", url: "https://dpc.gov.gh/" };
const KE_ODPC = { name: "Ofisi ya Kamishna wa Ulinzi wa Data, Kenya (ODPC)", url: "https://www.odpc.go.ke/" };

module.exports = {
  id: "afr-phone-repair-business-sw",
  lang: "sw",
  translationOf: "afr-phone-repair-business",
  category: "Africa: Life and Work",
  name: "Kuanzisha Biashara ya Kutengeneza Simu",
  skills: "Kuandaa meza salama ya kutengenezea, Kushughulikia betri za lithium kwa usalama, Kutafuta hitilafu na kuandika kadi za kazi, Kulinda data ya wateja, Kupanga bei za matengenezo pamoja na dhamana, Kushughulikia taka za kielektroniki kwa usalama",
  outcome: "kuendesha biashara ndogo, salama na ya uaminifu ya kutengeneza simu: kufanya kazi kwenye meza salama, kushughulikia betri za lithium bila hatari ya moto, kutafuta hitilafu za kawaida na kuandika kila kazi kwenye kadi ya kazi, kulinda data ya kila mteja, kupanga bei za matengenezo pamoja na dhamana iliyo wazi, na kuondoa betri zilizokufa na vipuri vilivyovunjika kwa usalama.",
  about: [
    "Kozi hii ni kwa vijana, mafundi na wenye biashara ndogo kote Afrika wanaotengeneza simu, au wanaotaka kuanza, kwenye kibanda, meza ya sokoni au duka dogo: katika Luthuli Avenue jijini Nairobi, Computer Village jijini Lagos, Circle jijini Accra, Adjamé jijini Abidjan au Akwa jijini Douala.",
    "Sura ya 1 inahusu kazi salama: meza yako na vifaa, hatari za betri za lithium, na jinsi ya kutafuta hitilafu hatua kwa hatua na kuiandika kwenye kadi ya kazi. Sura ya 2 inahusu biashara: kulinda data ya wateja, bei na dhamana, kukataa simu za wizi, na kushughulikia taka za kielektroniki.",
    "Hii si kozi kamili ya elektroniki. Inakupa tabia za usalama na ujuzi wa biashara unaokulinda wewe, wateja wako na duka lako, ili ujuzi wako wa ufundi ukupatie jina zuri. Kiasi cha pesa ni mifano tu. Kila somo linachukua kama dakika tano na linaisha kwa kazi. Kuna maswali mafupi baada ya kila somo, jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Tengeneza kifurushi cha kuanzia cha duka lako: (1) orodha ya bei za angalau matengenezo matano ya kawaida (kwa mfano skrini, tundu la kuchaji, betri, spika, kurudisha programu upya), kila moja na gharama ya kipuri, ujira, bei na siku za dhamana; (2) kadi ya kazi ya ukurasa mmoja utakayoitumia kwa kila simu; (3) ahadi ya data ya mteja yenye angalau mistari minne; na (4) kadi ya usalama ya ukutani yenye kanuni zako za betri na mahali betri zako zilizokufa na vipuri vilivyovunjika vitapelekwa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana, mafundi na wenye biashara ndogo katika miji na majiji kote Afrika (Kenya, Nigeria, Ghana, Côte d'Ivoire, Cameroon, Senegal, Misri na kwingineko) wanaotengeneza simu au wanaotaka kuanza, mara nyingi kwenye kibanda au meza ya sokoni.",
    startingPoint: "Wengi wamejifunza matengenezo kadhaa kutoka kwa rafiki au kwa uanagenzi, au bado hawajajifunza. Wachache wana utaratibu wa meza salama, wanajua jinsi betri ya lithium iliyoharibika ilivyo hatari, wanaandika kadi ya kazi, wanalinda data ya wateja, wanaweka bei pamoja na dhamana, au wanajua taka za kielektroniki zinapaswa kwenda wapi.",
    gap: "Moto wa betri unachoma maduka na kujeruhi watu; data ya mteja ikipotea au kuvuja, imani inaharibika; kubahatisha bei kunapoteza pesa; kununua simu za wizi kunaleta matatizo na polisi; kuchoma taka za kielektroniki kunazitia familia sumu. Tabia salama na zana rahisi za biashara zinageuza ujuzi kuwa biashara inayoaminika na inayodumu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la kiufundi linaelezwa",
      "Vifaa: simu ya kawaida ya Android; nafasi ndogo ya pamoja, mara nyingi bila kizima moto",
      "Sheria za ulinzi wa data, vibali vya biashara na taka za kielektroniki zinatofautiana kati ya nchi na zinabadilika: wanafunzi wanakagua na ofisi zilizotajwa",
      "Usalama: hakuna kazi kwenye betri zilizovimba au kuharibika isipokuwa kuziondoa kwa usalama; hakuna kuchoma taka za kielektroniki",
      "Kozi pia imetafsiriwa kwa Kifaransa na Kiarabu, kwa hiyo mifano inajumuisha maduka ya nchi zinazozungumza Kifaransa na ya Afrika Kaskazini"
    ],
    prerequisites: "Hakuna kwa ujuzi wa usalama na biashara. Ujuzi wa kutengeneza kwa mikono unatokana na mazoezi au uanagenzi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kabla na wakati wa kila matengenezo", action: "kuandaa meza salama na kushughulikia betri za lithium kwa usalama, ukitambua betri iliyovimba, yenye joto au iliyoharibika", standard: "ukifuata kila kanuni kwenye kadi yako ya usalama wa betri" },
    { id: "O2", condition: "Ukipewa simu ambayo mteja ameileta", action: "kutafuta hitilafu inayowezekana kwa ukaguzi wa hatua kwa hatua na kuandika kazi hiyo kwenye kadi ya kazi", standard: "hitilafu, bei mliyokubaliana na idhini ya mteja vikiwa vimeandikwa kabla ya kazi kuanza" },
    { id: "O3", condition: "Mteja anapokuachia simu yake", action: "kulinda data ya mteja kwa kumwomba ahifadhi nakala na kutonakili, kutazama wala kushiriki faili zake kamwe", standard: "bila kuomba kamwe PIN au nywila usiyoihitaji" },
    { id: "O4", condition: "Ukipewa gharama ya vipuri na muda ambao matengenezo yanachukua", action: "kukokotoa bei ya matengenezo na kuandika orodha ya bei yenye masharti ya dhamana", standard: "ikilipia vipuri, ujira na gharama za duka pamoja na faida, na dhamana iliyo wazi" },
    { id: "O5", condition: "Unapokuwa na betri zilizokufa, skrini zilizovunjika au simu unayoshuku ni ya wizi", action: "kuchagua hatua salama na halali: kuhifadhi taka za kielektroniki na kuzikabidhi kwa mkusanyaji, na kukataa simu isiyo na uthibitisho wa umiliki", standard: "bila kuchoma, bila kutupa ovyo na bila kununua simu zisizo na uthibitisho" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi salama na kutafuta hitilafu",
      lessons: [
        {
          title: "Meza salama ya kutengenezea",
          objectives: ["O1"],
          minutes: 4,
          goal: "Andaa meza ya kutengenezea iliyo salama, nadhifu na tayari kwa kazi.",
          text: [
            "Meza yako ndipo ajali zinapotokea au zinapozuiwa. Meza nzuri ni kavu, ina mwanga wa kutosha, na iko mbali na moto wa kupikia, mafuta na maji. Ina mkeka unaostahimili joto, trei ndogo ya skrubu, na nafasi wazi ili vipuri vidogo visipotee.",
            "Vifaa: bisibisi zinazofaa, vifaa vya plastiki vya kufungulia (spudgers), koleo ndogo (tweezers), kikombe cha kufyonza, multimeter, na kifaa cha hewa moto (hot air) au pasi ya kuchomelea (soldering iron) kama umefundishwa kuvitumia. Vifaa vya joto lazima vikae kwenye kishikio chake, kamwe si juu ya karatasi au kitambaa, na vizimwe unapoondoka mezani.",
            "Jilinde wewe na simu: vaa miwani ya kinga unapofungua skrini au kufanya kazi na kioo, tumia mkanda wa mkono wa kuzuia umeme tuli (anti-static) au gusa chuma kitupu ili kuondoa umeme tuli kabla ya kugusa bodi, na weka mkebe wa chuma wenye mchanga mkavu karibu na meza kwa ajili ya betri iliyoharibika. Ujue njia ya kutoka dukani kwako na iache wazi."
          ],
          steps: ["Chagua mahali pakavu, penye mwanga, mbali na moto wa kupikia, mafuta na maji.", "Tandika mkeka unaostahimili joto na weka trei ya skrubu.", "Weka vifaa vya joto kwenye kishikio na vizime unapoondoka.", "Vaa miwani ya kinga; ondoa umeme tuli kabla ya kugusa bodi.", "Weka mkebe wa chuma wenye mchanga mkavu karibu na meza na njia ya kutoka iwe wazi."],
          words: [["Spudger", "kifaa cha plastiki cha kufungua simu na kuinua vipuri bila kuvikwaruza wala kusababisha shoti."], ["Multimeter", "kipimo kinachopima volteji, mkondo wa umeme na ukinzani."], ["Umeme tuli (static)", "chaji ndogo ya umeme mwilini mwako inayoweza kuharibu bodi ya simu."]],
          slides: [
            { title: "Mahali pa kuweka meza yako", bullets: ["Pakavu na penye mwanga", "Mbali na moto wa kupikia, mafuta na maji", "Njia wazi ya kutoka dukani"] },
            { title: "Vifaa vya msingi", bullets: ["Bisibisi, spudgers za plastiki, koleo ndogo, kikombe cha kufyonza", "Multimeter", "Vifaa vya joto kama umefundishwa tu; kila wakati kwenye kishikio"] },
            { title: "Jilinde wewe na simu", bullets: ["Miwani ya kinga kwa kioo na skrini", "Ondoa umeme tuli kabla ya kugusa bodi", "Mkebe wa chuma wenye mchanga mkavu kwa betri iliyoharibika"] }
          ],
          tryIt: "Chora mpango rahisi wa meza yako (au meza unayoitaka): kila kifaa kinakaa wapi, kifaa cha joto kinasimama wapi, mkebe wa mchanga uko wapi, na njia ya kutoka. Orodhesha vitu ambavyo bado unahitaji kununua.",
          youCanNow: "kuandaa meza salama na nadhifu ya kutengenezea yenye vifaa sahihi na vitu vya usalama.",
          quickCheck: [
            { objective: "O1", q: "Kifaa cha hewa moto kinapaswa kukaa wapi unapokiweka chini?", options: ["Juu ya rundo la karatasi", "Juu ya simu ya mteja", "Kwenye kishikio chake, mbali na kitambaa na karatasi", "Sakafuni"], answer: 2, why: "Kishikio kinaweka ncha ya moto mbali na vitu vinavyoweza kuungua." },
            { objective: "O1", q: "Kwa nini uweke mkebe wa chuma wenye mchanga mkavu karibu na meza yako?", options: ["Kuhifadhi skrubu", "Kushika betri iliyoharibika kwa usalama", "Kusafisha skrini", "Kupima uzito wa vipuri"], answer: 1, why: "Mkebe wa chuma wenye mchanga ni mahali salama zaidi kwa betri iliyoharibika kuliko meza au pipa la taka." }
          ]
        },
        {
          title: "Hatari za betri za lithium",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambua betri iliyovimba, yenye joto au iliyoharibika na uishughulikie bila kusababisha moto.",
          text: [
            "Karibu kila simu ina betri ya lithium-ion. Inahifadhi nguvu nyingi. Ikitobolewa, ikipindwa, ikibanwa, ikipata joto kupita kiasi au ikipata shoti, inaweza kushika moto haraka sana, kutoa moshi wenye sumu, na kuanza kuwaka tena baada ya kuonekana imezimika.",
            "Dalili za hatari: kuvimba (kifuniko cha nyuma au skrini kimeinuka), joto, harufu ya ajabu, sauti ya kuzomea au kupasuka, au moshi. Betri iliyovimba lazima ibadilishwe, kamwe isibanwe iwe bapa, isitobolewe wala isichajiwe.",
            "Tabia salama: tenganisha kiunganishi cha betri kwanza, kabla ya kufanya kazi kwenye bodi. Kamwe usiitoe betri kwa kifaa cha chuma; tumia vifaa vya plastiki na kiondoa gundi kinachofaa, na nenda polepole. Kamwe usitumie kifaa cha hewa moto karibu na betri. Chaji simu kwa chaja nzuri tu, juu ya sehemu ngumu, mahali unapoweza kuziona.",
            "Betri ikianza kutoa moshi au kuzomea: waondoe watu karibu na usivute moshi huo. Ikiwa tu unaweza kufanya hivyo kwa usalama, tumia koleo ndefu kuiweka kwenye mkebe wako wa chuma wenye mchanga, nje. Kukiwa na moto usioweza kuudhibiti, watoe watu wote nje na upigie simu kikosi cha zimamoto."
          ],
          steps: ["Angalia kuvimba, joto, harufu, sauti au moshi kabla ya kufungua simu yoyote.", "Tenganisha betri kabla ya kufanya kazi kwenye bodi.", "Tumia vifaa vya plastiki, kamwe si vya chuma, kutoa betri; kamwe usiipinde wala kuitoboa.", "Weka vifaa vya joto mbali na betri.", "Ikitoa moshi: waondoe watu, tumia koleo na mkebe wa mchanga ikiwa ni salama tu, piga simu kikosi cha zimamoto kukiwa na moto."],
          words: [["Betri ya lithium-ion", "betri inayochajiwa ndani ya simu; inahifadhi nguvu nyingi na inaweza kuwaka ikiharibika."], ["Betri iliyovimba", "betri iliyofura kwa sababu gesi inajikusanya ndani; ni hatari."], ["Shoti (short circuit)", "umeme unapopita njia isiyo sahihi, kwa mfano kupitia kifaa cha chuma, na kusababisha joto au moto."]],
          slides: [
            { title: "Kwa nini betri za lithium ni hatari", bullets: ["Zinahifadhi nguvu nyingi", "Uharibifu, joto au shoti vinaweza kuanzisha moto haraka", "Moshi una sumu; moto unaweza kuwaka tena"] },
            { title: "Dalili za hatari", bullets: ["Kuvimba: nyuma au skrini imeinuka", "Joto, harufu ya ajabu", "Kuzomea, kupasuka au moshi"] },
            { title: "Tabia salama", bullets: ["Tenganisha betri kwanza", "Vifaa vya plastiki tu; kamwe usipinde wala kutoboa", "Hakuna vifaa vya joto karibu na betri"] },
            { title: "Ikitoa moshi", bullets: ["Waondoe watu; usivute moshi", "Ikiwa ni salama tu: koleo, ndani ya mkebe wa mchanga, nje", "Moto usioweza kuudhibiti: tokeni nje, piga simu zimamoto"] }
          ],
          sources: [NFPA],
          tryIt: "Andika kadi yako ya usalama wa betri kwa mistari mitano kwa ajili ya ukuta wa duka lako: dalili za hatari, tabia salama, na la kufanya betri ikitoa moshi. Tafuta namba ya simu ya kikosi cha zimamoto kilicho karibu nawe.",
          youCanNow: "kutambua betri hatari, kushughulikia betri kwa usalama wakati wa matengenezo, na kuchukua hatua salama betri ikianza kutoa moshi.",
          quickCheck: [
            { objective: "O1", q: "Kifuniko cha nyuma cha simu kimeinuka kwa sababu betri imevimba. Unafanya nini?", options: ["Kuibana iwe bapa na kufunga simu", "Kuichaji ili kuijaribu", "Kuitoboa ili gesi itoke", "Kuibadilisha, ukiishika kwa uangalifu bila kuipinda wala kuitoboa"], answer: 3, why: "Betri iliyovimba ni hatari; lazima iondolewe kwa uangalifu na ibadilishwe, kamwe isibanwe, isitobolewe wala isichajiwe." },
            { objective: "O1", q: "Unapaswa kufanya nini kwanza kabla ya kufanya kazi kwenye bodi ya simu?", options: ["Kutenganisha betri", "Kupasha bodi joto", "Kuchaji simu", "Kutoa trei ya SIM tu"], answer: 0, why: "Kutenganisha betri kunazuia shoti zinazoweza kuharibu bodi au kuanzisha moto." }
          ]
        },
        {
          title: "Kutafuta hitilafu na kuandika kadi ya kazi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tafuta hitilafu inayowezekana kwa ukaguzi wa hatua kwa hatua na uandike kazi hiyo kwenye kadi ya kazi.",
          text: [
            "Anza kwa kusikiliza. Muulize mteja kilichotokea: imeanguka, imelowa, ni nzito, haichaji, haina sauti? Ilianza lini? Kisha kagua kuanzia sababu rahisi zaidi hadi ngumu zaidi. Simu nyingi \"zilizokufa\" zinahitaji tu chaja nzuri, tundu safi la kuchaji au kuwasha upya programu.",
            "Mpangilio rahisi: (1) angalia uharibifu, kuvimba au alama za maji; (2) jaribu chaja na waya unaojua ni mzuri; (3) safisha tundu la kuchaji taratibu kwa kijiti cha plastiki au cha mbao; (4) washa upya, na uangalie kama tatizo ni la programu; (5) hapo tu ndipo ufungue simu na kupima vipuri.",
            "Kabla ya kuanza kazi yoyote ya kulipwa, andika kadi ya kazi na umwonyeshe mteja. Inaandika: tarehe, jina la mteja na namba yake ya simu, aina ya simu na IMEI, kinachoharibika, uharibifu wowote unaouona (nyufa, mibonyeo), utakachofanya, bei mliyokubaliana, tarehe inayotarajiwa, na sahihi ya mteja au \"ndiyo\" iliyorekodiwa. Mpe mteja nakala au namba ya tiketi. Hii inawalinda nyote wawili.",
            "Mfano: Kwame jijini Accra analetewa simu \"isiyochaji\". Anajaribu waya mzuri, anatoa vumbi kwenye tundu, na inachaji. Anatoza ada ndogo tu ya kusafisha, na mteja anarudi kwake kwa kila matengenezo baada ya hapo."
          ],
          steps: ["Uliza kilichotokea na kilianza lini.", "Angalia uharibifu, kuvimba au alama za maji.", "Jaribu chaja na waya unaojua ni mzuri; safisha tundu taratibu.", "Washa upya na uangalie kama ni tatizo la programu.", "Andika kadi ya kazi yenye hitilafu, uharibifu ulioonekana, bei na tarehe, na upate \"ndiyo\" ya mteja kabla ya kufungua simu."],
          words: [["Kadi ya kazi", "kumbukumbu iliyoandikwa ya matengenezo moja: simu, hitilafu, bei, tarehe na makubaliano ya mteja."], ["IMEI", "namba ya kipekee ya simu yenye tarakimu 15; piga *#06# kuiona."], ["Hitilafu ya programu", "tatizo katika programu za simu, si katika vipuri vyake; mara nyingi linarekebishwa kwa kuwasha upya au kusasisha."]],
          slides: [
            { title: "Sikiliza kwanza", bullets: ["Nini kilitokea? Imeanguka, imelowa, nzito, haichaji?", "Ilianza lini?", "Simu nyingi \"zilizokufa\" zinahitaji suluhisho rahisi tu"] },
            { title: "Kutoka rahisi hadi ngumu", bullets: ["Angalia: uharibifu, kuvimba, alama za maji", "Chaja nzuri; safisha tundu taratibu", "Washa upya kwa programu; kisha fungua na upime vipuri"] },
            { title: "Kadi ya kazi", bullets: ["Mteja, aina ya simu, IMEI (piga *#06#)", "Hitilafu, uharibifu ulioonekana, kazi ya kufanya", "Bei, tarehe, \"ndiyo\" ya mteja; mpe nakala au tiketi"] }
          ],
          tryIt: "Chora kadi yako mwenyewe ya kazi kwenye ukurasa mmoja yenye visanduku vyote vya somo hili. Ijaze kwa simu ya mazoezi (yako au ya rafiki) yenye hitilafu ya kubuni.",
          youCanNow: "kukagua simu kuanzia sababu rahisi zaidi hadi ngumu zaidi na kuandika kila kazi kwenye kadi ya kazi kabla ya kuanza.",
          quickCheck: [
            { objective: "O2", q: "Mteja anasema simu haichaji. Unakagua nini kwanza?", options: ["Kubadilisha bodi", "Chaja na waya unaojua ni mzuri, na tundu safi", "Kubadilisha skrini", "Kumuuzia simu mpya"], answer: 1, why: "Anza na sababu rahisi zaidi; waya mbovu au tundu chafu ni jambo la kawaida." },
            { objective: "O2", q: "Kwa nini uandike uharibifu unaouona, kama kona iliyopasuka, kwenye kadi ya kazi kabla ya kuanza?", options: ["Ili mteja alipe zaidi", "Haihitajiki", "Kujaza nafasi", "Ili baadaye mtu asikulaumu kwa uharibifu uliokuwepo tayari"], answer: 3, why: "Kuandika uharibifu uliopo kunakulinda wewe na mteja dhidi ya mabishano." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi salama na kutafuta hitilafu",
        questions: [
          { objective: "O1", q: "Ipi ni dalili ya hatari ya betri?", options: ["Simu ni mpya", "Kuvimba, joto, harufu, kuzomea au moshi", "Betri ni nyeusi", "Simu ina kava"], answer: 1, why: "Kuvimba, joto, harufu, sauti na moshi ndizo dalili za hatari." },
          { objective: "O1", q: "Utumie kifaa gani kutoa betri?", options: ["Kifaa cha plastiki, polepole", "Bisibisi ya chuma", "Kisu cha jikoni", "Meno yako"], answer: 0, why: "Chuma kinaweza kutoboa betri au kusababisha shoti; vifaa vya plastiki ni salama zaidi." },
          { objective: "O1", q: "Betri mezani kwako inaanza kuzomea na kutoa moshi. Hatua sahihi ya kwanza ni ipi?", options: ["Kuipuliza", "Kuiweka mfukoni", "Kuwaondoa watu na kuepuka moshi", "Kuendelea na kazi"], answer: 2, why: "Usalama wa watu unatangulia; moshi una sumu." },
          { objective: "O2", q: "Unapata IMEI ya simu haraka wapi?", options: ["Kwenye chaja", "Kwenye kadi ya SIM", "Ndani ya mkoba wa mteja", "Kwa kupiga *#06#"], answer: 3, why: "Kupiga *#06# kunaonyesha IMEI kwenye karibu kila simu." },
          { objective: "O2", q: "Mteja anapaswa kukubali bei lini?", options: ["Kabla ya kuanza, imeandikwa kwenye kadi ya kazi", "Baada ya kumaliza", "Kamwe", "Anapolalamika"], answer: 0, why: "Kukubaliana kwanza, kwa maandishi, kunazuia mabishano." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha biashara ya uaminifu na salama",
      lessons: [
        {
          title: "Kulinda data ya wateja wako",
          objectives: ["O3"],
          minutes: 5,
          goal: "Linda data ya kila mteja wakati simu yake iko dukani kwako.",
          text: [
            "Simu inabeba maisha ya mtu: picha, ujumbe, pesa za simu, apps za benki na majina ya watu anaowasiliana nao. Wateja wanakuamini nayo. Picha moja iliyovuja au salio la pesa za simu lililoibiwa linaweza kuharibu jina la duka lako, na katika nchi nyingi linaweza kuvunja sheria.",
            "Kabla ya matengenezo: mwombe mteja ahifadhi nakala ya simu yake kama anaweza, na atoke (sign out) kwenye apps za pesa za simu na za benki au aondoe kadi ya SIM. Matengenezo mengi hayahitaji namba ya kufungua simu. Kama kweli unaihitaji kujaribu simu, mwombe mteja aifungue mbele yako, au aweke namba ya muda na aibadilishe baadaye. Kamwe usiombe PIN ya pesa za simu au ya benki. Hakuna matengenezo yoyote yanayoihitaji.",
            "Wakati na baada ya matengenezo: usifungue picha, ujumbe au apps zisizohusika na matengenezo. Usinakili chochote, na usiwaruhusu wengine kushika simu. Hifadhi simu kwenye droo iliyofungwa. Chana kadi za kazi au uzihifadhi salama, kwa sababu zina majina na namba.",
            "Nchi zina sheria na ofisi za ulinzi wa data, kwa mfano Ofisi ya Kamishna wa Ulinzi wa Data ya Kenya, Tume ya Ulinzi wa Data ya Nigeria, na Tume ya Ulinzi wa Data ya Ghana, ambako biashara zinazohifadhi data binafsi lazima zijisajili. Angalia ofisi ya nchi yako inatarajia nini kutoka kwa biashara ndogo kama yako."
          ],
          steps: ["Mwombe mteja ahifadhi nakala ya simu na atoke kwenye apps za pesa, au aondoe SIM.", "Usiombe namba ya kufungua simu isipokuwa kama kweli unaihitaji; mwache mteja aifungue mbele yako.", "Kamwe usiombe PIN ya pesa za simu au ya benki.", "Fungua tu kinachohitajika na matengenezo; usinakili chochote.", "Funga simu na kadi za kazi mahali salama; angalia kanuni za ulinzi wa data za nchi yako."],
          words: [["Data binafsi", "taarifa kuhusu mtu, kama jina lake, namba, picha na ujumbe."], ["Nakala ya akiba (backup)", "nakala ya data ya simu iliyohifadhiwa mahali pengine, ili kisipotee kitu matengenezo yakienda vibaya."], ["Sheria ya ulinzi wa data", "sheria inayosema jinsi biashara lazima zikusanye, zihifadhi na zilinde data binafsi ya watu."]],
          slides: [
            { title: "Simu inabeba maisha", bullets: ["Picha, ujumbe, majina ya watu", "Pesa za simu na apps za benki", "Uvujaji unaweza kumaliza jina zuri la duka lako"] },
            { title: "Kabla ya matengenezo", bullets: ["Mteja anahifadhi nakala ya simu", "Anatoka kwenye apps za pesa, au anaondoa SIM", "Namba ya kufungua kama kweli inahitajika tu; kamwe PIN"] },
            { title: "Wakati na baada", bullets: ["Fungua tu kinachohitajika na matengenezo", "Usinakili chochote; hakuna mwingine anayeshika simu", "Funga simu na kadi za kazi mahali salama"] },
            { title: "Ijue sheria", bullets: ["Kenya: Ofisi ya Kamishna wa Ulinzi wa Data", "Nigeria: Tume ya Ulinzi wa Data ya Nigeria", "Ghana: Tume ya Ulinzi wa Data; nyingine: ofisi ya nchi yako"] }
          ],
          sources: [KE_ODPC, NDPC, GH_DPC],
          tryIt: "Andika ahadi yako ya data kwa mteja: angalau mistari minne mifupi utakayomwonyesha kila mteja, kama \"Hatuombi kamwe PIN yako ya pesa za simu.\" Andika jina la ofisi ya ulinzi wa data ya nchi yako.",
          youCanNow: "kulinda data ya wateja wako kabla, wakati na baada ya matengenezo, na kujua ofisi gani inaweka kanuni katika nchi yako.",
          quickCheck: [
            { objective: "O3", q: "Fundi anaomba PIN ya pesa za simu ya mteja ili \"kujaribu simu\". Kipi ni kweli?", options: ["Inahitajika kwa kila matengenezo", "Ni sawa kama yeye ni mwaminifu", "Hakuna matengenezo yanayoihitaji; usiiombe kamwe", "Kwa matengenezo ya skrini tu"], answer: 2, why: "Hakuna matengenezo yoyote yanayohitaji PIN ya pesa za simu au ya benki." },
            { objective: "O3", q: "Mteja afanye nini kabla ya kuacha simu, kama anaweza?", options: ["Kukupa nywila zake zote", "Kuhifadhi nakala ya simu na kutoka kwenye apps za pesa", "Kuacha simu wazi bila kufungwa milele", "Kufuta majina yote ya watu"], answer: 1, why: "Nakala ya akiba na kutoka kwenye apps za pesa vinamlinda kitu chochote kikienda vibaya." }
          ]
        },
        {
          title: "Bei za matengenezo, dhamana na kukataa simu za wizi",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Kokotoa bei ya matengenezo na uandike orodha ya bei yenye masharti ya dhamana.",
          text: [
            "Bei ya haki inalipia vitu vitatu na inabakiza faida: kipuri, muda wako (ujira), na sehemu ya gharama za duka lako, kama kodi ya pango, umeme, vifaa na data. Mfano (kiasi ni mifano tu): skrini inagharimu NGN 15,000. Ujira wako ni NGN 4,000 na sehemu yako ya gharama za duka NGN 1,000. Gharama: NGN 20,000. Ongeza faida ya NGN 3,000: bei ni NGN 23,000.",
            "Vipuri vina ubora tofauti. Mwambie mteja kwa uaminifu kipuri gani unatumia (halisi, nakala nzuri au nakala rahisi) na bei ya kila kimoja. Kipuri cha bei rahisi kinachoharibika baada ya wiki moja kinakugharimu jina lako.",
            "Dhamana ni ahadi yako: matengenezo yale yale yakiharibika ndani ya idadi fulani ya siku kwa sababu ya kazi yako au kipuri, unarekebisha bure. Andika ni siku ngapi, na kisichohusika (kuanguka upya, maji, mtu mwingine kufungua simu). Weka orodha ya bei na dhamana mahali wateja wanapoweza kuziona.",
            "Kataa simu zinazoweza kuwa za wizi. Usinunue, usifungue (unlock) wala usibomoe simu isipokuwa muuzaji aonyeshe uthibitisho kuwa ni yake, kama boksi lenye IMEI inayolingana au risiti. Simu ikionekana ni ya wizi, usibishane; kataa kwa adabu. Katika nchi nyingi, kununua bidhaa za wizi ni kosa la jinai."
          ],
          steps: ["Jumlisha gharama ya kipuri, ujira wako na sehemu ya gharama za duka.", "Ongeza faida yako upate bei.", "Toa chaguo za vipuri kwa uaminifu, na bei ya kila kimoja.", "Andika siku za dhamana na kisichohusika.", "Onyesha orodha ya bei; kataa simu zisizo na uthibitisho wa umiliki."],
          words: [["Ujira", "malipo ya muda wako na ujuzi wako."], ["Gharama za uendeshaji (gharama za duka)", "gharama za kuendesha duka, kama kodi ya pango, umeme, vifaa na data, zinazogawanywa kati ya kazi zote."], ["Dhamana", "ahadi iliyoandikwa ya kurekebisha hitilafu ile ile bure kwa muda fulani."]],
          slides: [
            { title: "Bei inalipia nini", bullets: ["Kipuri + ujira + sehemu ya gharama za duka", "Kisha ongeza faida yako", "Mfano: gharama NGN 20,000 + NGN 3,000 = NGN 23,000"] },
            { title: "Vipuri kwa uaminifu", bullets: ["Halisi, nakala nzuri au nakala rahisi", "Mwambie mteja ni kipi, na bei ya kila kimoja", "Vipuri rahisi vinavyoharibika vinakugharimu jina lako"] },
            { title: "Dhamana yako", bullets: ["Hitilafu ile ile inarekebishwa bure kwa siku fulani", "Haihusiki: kuanguka upya, maji, wengine kuifungua", "Onyesha orodha ya bei na dhamana"] },
            { title: "Kataa simu za wizi", bullets: ["Uthibitisho: boksi lenye IMEI inayolingana, au risiti", "Hakuna uthibitisho: kataa kwa adabu", "Kununua bidhaa za wizi kunaweza kuwa kosa la jinai"] }
          ],
          tryIt: "Andika orodha yako ya bei kwa matengenezo matano ya kawaida: kwa kila moja, gharama ya kipuri, ujira, sehemu ya gharama za duka, faida, bei na siku za dhamana. Tumia sarafu ya nchi yako.",
          youCanNow: "kupanga bei ya matengenezo inayolipia gharama zako zote na faida, kuandika dhamana, na kukataa simu inayoweza kuwa ya wizi.",
          quickCheck: [
            { objective: "O4", q: "Kipuri GHS 150, ujira GHS 60, sehemu ya gharama za duka GHS 20, faida GHS 40. Bei ni ngapi?", options: ["GHS 210", "GHS 230", "GHS 150", "GHS 270"], answer: 3, why: "150 + 60 + 20 + 40 = 270." },
            { objective: "O5", q: "Kijana anataka kukuuzia simu kwa bei rahisi lakini hana boksi wala risiti. Unafanya nini?", options: ["Kukataa kwa adabu", "Kuinunua haraka kabla ya wengine", "Kumfungulia (unlock) kwanza", "Kuibomoa kwa ajili ya vipuri"], answer: 0, why: "Bila uthibitisho wa umiliki simu inaweza kuwa ya wizi; kataa." }
          ]
        },
        {
          title: "Taka za kielektroniki, betri zilizokufa na kifurushi cha kuanzia",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Hifadhi betri zilizokufa na vipuri vilivyovunjika kwa usalama na uvikabidhi kwa mkusanyaji anayefaa.",
          text: [
            "Simu za zamani, skrini, bodi na betri ni taka za kielektroniki (e-waste). Zina risasi (lead), zebaki na sumu nyingine. WHO (Shirika la Afya Duniani) linasema kuchoma taka za kielektroniki ndiyo njia hatari zaidi ya kuzishughulikia, na kunawadhuru zaidi watoto na wanawake wajawazito. Mwaka 2022 dunia ilizalisha takriban tani milioni 62 za taka za kielektroniki, na ni 22.3% tu ndizo zilizoandikwa kuwa zimekusanywa na kurejelezwa ipasavyo.",
            "Kamwe usichome taka za kielektroniki ili kupata shaba, na kamwe usitupe betri kwenye pipa la taka, motoni au kwenye mfereji. Bandika utepe kwenye ncha (terminals) za betri zilizokufa, zihifadhi kwenye mkebe wa chuma uliofungwa wenye mchanga mkavu mbali na joto, na weka skrini na bodi zilizovunjika kwenye boksi tofauti lenye lebo.",
            "Zikabidhi kwa mkusanyaji au mrejelezaji wa taka za kielektroniki. Uliza baraza la kaunti au la jiji, mamlaka ya mazingira, au wauzaji wa simu na maduka ya mitandao ya simu ni wakusanyaji gani walioidhinishwa mahali ulipo. Andika ulichokabidhi na lini.",
            "Sasa tengeneza kifurushi chako cha kuanzia: orodha yako ya bei, kadi yako ya kazi, ahadi yako ya data na kadi yako ya usalama yenye kanuni za betri na mahali taka zako za kielektroniki zinakwenda."
          ],
          steps: ["Bandika utepe kwenye ncha za betri zilizokufa.", "Zihifadhi kwenye mkebe wa chuma uliofungwa wenye mchanga mkavu, mbali na joto.", "Weka skrini na bodi zilizovunjika kwenye boksi lenye lebo.", "Uliza baraza au mamlaka ya mazingira kuhusu mkusanyaji aliyeidhinishwa.", "Zikabidhi na uandike nini na lini. Kamwe usichome wala kutupa ovyo taka za kielektroniki."],
          words: [["Taka za kielektroniki (e-waste)", "vifaa na vipuri vya kielektroniki vya zamani au vilivyovunjika, kama simu, skrini, bodi na betri."], ["Ncha za betri (terminals)", "ncha za chuma za betri zinapounganishwa; kuzibandika utepe kunazuia shoti."], ["Mrejelezaji", "biashara inayobomoa taka za kielektroniki kwa usalama na kupata tena malighafi."]],
          slides: [
            { title: "Taka za kielektroniki zina sumu", bullets: ["Risasi (lead), zebaki na sumu nyingine", "Kuchoma ndiyo njia hatari zaidi (WHO)", "Watoto na wanawake wajawazito wanadhurika zaidi"] },
            { title: "Zihifadhi kwa usalama", bullets: ["Bandika utepe kwenye ncha za betri zilizokufa", "Mkebe wa chuma uliofungwa wenye mchanga mkavu, mbali na joto", "Skrini na bodi kwenye boksi lenye lebo"] },
            { title: "Zikabidhi", bullets: ["Uliza baraza au mamlaka ya mazingira", "Tumia mkusanyaji au mrejelezaji aliyeidhinishwa", "Andika ulichotoa na lini"] },
            { title: "Kifurushi cha kuanzia cha duka lako", bullets: ["Orodha ya bei yenye dhamana", "Kadi ya kazi; ahadi ya data kwa mteja", "Kadi ya usalama: kanuni za betri na mpango wa taka za kielektroniki"] }
          ],
          sources: [WHO_EWASTE, NFPA],
          tryIt: "Tengeneza kifurushi cha kuanzia cha duka lako, kama ilivyoelezwa katika kazi ya mwisho. Ongeza mstari mmoja kwenye kadi yako ya usalama unaotaja nani atakusanya taka zako za kielektroniki, au ofisi utakayouliza.",
          youCanNow: "kuhifadhi na kukabidhi taka za kielektroniki kwa usalama na kuandaa kifurushi cha kuanzia kwa duka la kutengeneza simu lililo la uaminifu na salama.",
          quickCheck: [
            { objective: "O5", q: "Njia salama zaidi ya kuondoa betri za simu zilizokufa ni ipi?", options: ["Kuzichoma", "Kuzitupa kwenye pipa la taka", "Kubandika utepe kwenye ncha, kuzihifadhi kwenye mkebe wa mchanga, kuzikabidhi kwa mkusanyaji aliyeidhinishwa", "Kuzizika uani"], answer: 2, why: "Kubandika utepe, kuhifadhi kwa usalama na mkusanyaji aliyeidhinishwa vinazuia moto na uchafuzi." },
            { objective: "O5", q: "Kwa mujibu wa WHO, njia ipi ni hatari zaidi ya kushughulikia taka za kielektroniki?", options: ["Kuzihifadhi kwenye boksi", "Kuzipeleka kwa mrejelezaji", "Kuziandika", "Kuzichoma"], answer: 3, why: "WHO inasema kuchoma taka za kielektroniki ndiyo njia hatari zaidi kwa sababu ya moshi wake wenye sumu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha biashara ya uaminifu na salama",
        questions: [
          { objective: "O3", q: "Matengenezo kweli yanahitaji simu ifunguliwe ili kuijaribu. Njia bora ni ipi?", options: ["Kumwomba mteja aifungue mbele yako, au aweke namba ya muda", "Kuomba PIN yake ya benki", "Kubahatisha namba", "Kurudisha simu upya bila kuuliza"], answer: 0, why: "Mteja anabaki na udhibiti wa namba yake, na hakuna PIN ya pesa inayohusika kamwe." },
          { objective: "O3", q: "Ufanye nini na kadi za kazi zenye majina na namba za wateja?", options: ["Kuzitupa barabarani", "Kuziweka mtandaoni", "Kuzifungia mahali salama au kuzichana zisipohitajika tena", "Kuzipa maduka mengine"], answer: 2, why: "Kadi za kazi zina data binafsi, kwa hiyo lazima zihifadhiwe salama." },
          { objective: "O4", q: "Mafundi wapya mara nyingi husahau gharama ipi katika bei yao?", options: ["Kipuri", "Sehemu yao ya gharama za duka kama kodi ya pango na umeme", "Skrini", "Jina la mteja"], answer: 1, why: "Gharama za duka kama kodi ya pango, umeme na data lazima zigawanywe kati ya kazi, la sivyo unapoteza pesa." },
          { objective: "O4", q: "Dhamana inapaswa kusema nini?", options: ["Hakuna; tabasamu tu", "Kwamba kila tatizo ni bure milele", "Bei tu", "Siku ngapi, na kisichohusika"], answer: 3, why: "Dhamana iliyo wazi inataja siku na yasiyohusika." },
          { objective: "O5", q: "Kwa nini kununua simu bila uthibitisho wa umiliki ni tatizo?", options: ["Inaweza kuwa ya wizi, na kununua bidhaa za wizi kunaweza kuwa kosa la jinai", "Daima ni ghali mno", "Simu zisizo na boksi hazifanyi kazi", "Si tatizo"], answer: 0, why: "Bila uthibitisho, simu inaweza kuwa ya wizi, na hilo linaleta matatizo ya kisheria." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuanzisha Biashara ya Kutengeneza Simu",
    questions: [
      { objective: "O1", q: "Mahali bora pa meza yako ya kutengenezea ni wapi?", options: ["Karibu na moto wa kupikia", "Pakavu, penye mwanga, mbali na mafuta na maji", "Nje kwenye mvua", "Juu ya chombo cha mafuta"], answer: 1, why: "Meza kavu, yenye mwanga, mbali na mafuta na maji ndiyo salama zaidi." },
      { objective: "O1", q: "Uvae nini unapofungua skrini iliyopasuka?", options: ["Miwani ya kinga", "Hakuna kitu maalum", "Glavu za chuma", "Miwani ya jua usiku tu"], answer: 0, why: "Miwani ya kinga inalinda macho yako dhidi ya vipande vya kioo." },
      { objective: "O1", q: "Kwa nini kamwe usitumie kifaa cha hewa moto karibu na betri?", options: ["Kinapoteza umeme", "Kinachafua skrini", "Joto linaweza kufanya betri ishike moto", "Ni cha polepole mno"], answer: 2, why: "Kupasha betri ya lithium joto kupita kiasi kunaweza kuanzisha moto." },
      { objective: "O1", q: "Kitu gani hupaswi KAMWE kufanya kwa betri iliyovimba?", options: ["Kuiondoa kwa uangalifu", "Kuihifadhi kwenye mkebe wa mchanga", "Kumwambia mteja", "Kuibana iwe bapa au kuitoboa"], answer: 3, why: "Kubana au kutoboa betri iliyovimba kunaweza kuifanya iwake." },
      { objective: "O2", q: "Mpangilio sahihi wa ukaguzi ni upi?", options: ["Fungua simu kwanza, kisha uliza maswali", "Sababu rahisi kwanza: angalia, chaja, tundu, washa upya, kisha fungua", "Badilisha bodi kwanza", "Mtoze mteja kwanza"], answer: 1, why: "Kuanza na rahisi kunaokoa muda na pesa na kunazuia kufungua simu bila sababu." },
      { objective: "O2", q: "Kitu gani kinapaswa kuwa kwenye kadi ya kazi?", options: ["PIN ya pesa za simu ya mteja", "Nywila ya benki ya mteja", "Aina ya simu, IMEI, hitilafu, uharibifu ulioonekana, bei na tarehe", "Funguo za nyumba ya mteja"], answer: 2, why: "Kadi ya kazi inaandika kazi, si siri kama PIN au nywila." },
      { objective: "O2", q: "Simu \"haichaji\". Unatoa vumbi kwenye tundu na inachaji. Unatoza nini?", options: ["Bei ya bodi mpya", "Ada ndogo ya haki kwa kazi uliyofanya", "Hakuna, na unakataa kazi zijazo", "Bei ya simu mpya"], answer: 1, why: "Bei ya uaminifu kwa kazi halisi inajenga imani na wateja wanaorudi." },
      { objective: "O2", q: "Kwa nini upate \"ndiyo\" ya mteja kabla ya kufungua simu?", options: ["Ili akubali kazi na bei, jambo linalozuia mabishano", "Haihitajiki", "Ili uweze kutoza zaidi baadaye", "Ili ujue PIN yake"], answer: 0, why: "Makubaliano ya maandishi yanawalinda nyote wawili." },
      { objective: "O3", q: "Kitu gani matengenezo ya simu hayahitaji kamwe?", options: ["Aina ya simu", "Maelezo ya hitilafu", "Namba ya simu ya mteja", "PIN ya pesa za simu ya mteja"], answer: 3, why: "Hakuna matengenezo yoyote yanayohitaji PIN ya pesa za simu au ya benki." },
      { objective: "O3", q: "Unapotengeneza skrini, unaona picha za mteja. Unafanya nini?", options: ["Kufungua tu kinachohitajika na matengenezo na kutoangalia kingine", "Kuzipitia picha", "Kuzinakili kwenye simu yako", "Kumwonyesha rafiki"], answer: 0, why: "Kuheshimu faragha kunamaanisha kufungua tu kinachohitajika na matengenezo." },
      { objective: "O3", q: "Ofisi gani inaweka kanuni za ulinzi wa data nchini Nigeria?", options: ["Kikosi cha zimamoto", "Tume ya Ulinzi wa Data ya Nigeria", "Shirikisho la mpira wa miguu", "Hakuna ofisi"], answer: 1, why: "Tume ya Ulinzi wa Data ya Nigeria ilianzishwa chini ya Sheria ya Ulinzi wa Data ya Nigeria 2023." },
      { objective: "O3", q: "Simu zinazosubiri matengenezo zihifadhiwe wapi?", options: ["Juu ya kaunta ili yeyote azichukue", "Kwenye droo iliyofungwa", "Kwa jirani", "Nje ya duka"], answer: 1, why: "Kufungia simu mahali salama kunazilinda pamoja na data iliyo ndani yake." },
      { objective: "O4", q: "Kipuri KES 2,500, ujira KES 800, sehemu ya gharama za duka KES 200, faida KES 500. Bei ni ngapi?", options: ["KES 3,300", "KES 3,500", "KES 4,000", "KES 2,500"], answer: 2, why: "2,500 + 800 + 200 + 500 = 4,000." },
      { objective: "O4", q: "Mteja anaweza kulipia skrini ya nakala rahisi au ya halisi. Kipi ni cha uaminifu?", options: ["Kumwambia ni kipuri gani, na bei ya kila kimoja, na kumwacha achague", "Kusema nakala ni halisi", "Kuweka ya bei rahisi zaidi na kutoza bei ya halisi", "Kukataa kusema"], answer: 0, why: "Chaguo za vipuri zilizo wazi zinajenga imani na kuzuia malalamiko." },
      { objective: "O4", q: "Kitu gani kwa kawaida HAKIHUSIKI katika dhamana ya matengenezo?", options: ["Kipuri kile kile kuharibika kwa sababu ya kazi yako", "Hitilafu katika kipuri ulichoweka", "Kosa lako katika kuweka", "Kuanguka upya au uharibifu wa maji"], answer: 3, why: "Uharibifu mpya baada ya matengenezo kwa kawaida haulipiwi; liandike kwenye dhamana yako." },
      { objective: "O5", q: "Muuzaji ana boksi lenye IMEI inayolingana na simu (piga *#06#) na risiti. Hii inaonyesha nini?", options: ["Uthibitisho kwamba simu huenda ni yake", "Kwamba simu ni ya wizi", "Hakuna kitu kabisa", "Kwamba imeharibika"], answer: 0, why: "IMEI inayolingana na risiti ni uthibitisho wa umiliki." },
      { objective: "O5", q: "Kwa nini kamwe usichome bodi za zamani ili kupata shaba?", options: ["Shaba haina thamani", "Inachukua muda mrefu mno", "Moshi una sumu, na unawadhuru zaidi watoto na wanawake wajawazito", "Ni kimya mno"], answer: 2, why: "Kuchoma taka za kielektroniki kunatoa moshi wenye sumu, njia hatari zaidi kwa mujibu wa WHO." },
      { objective: "O5", q: "Uhifadhi vipi betri zilizokufa kabla ya kukusanywa?", options: ["Zikiwa huru ndani ya droo pamoja na vifaa", "Ncha zimebandikwa utepe, ndani ya mkebe wa chuma uliofungwa wenye mchanga mkavu, mbali na joto", "Ndani ya ndoo ya maji juani", "Mfukoni mwako"], answer: 1, why: "Utepe na mkebe wa mchanga vinazuia shoti na moto." },
      { objective: "O5", q: "Nani anaweza kukueleza kuhusu wakusanyaji wa taka za kielektroniki walioidhinishwa?", options: ["Wateja wako tu", "Hakuna mtu", "Mchomaji yeyote wa barabarani", "Baraza au mamlaka ya mazingira"], answer: 3, why: "Mabaraza na mamlaka za mazingira wanawajua wakusanyaji walioidhinishwa." },
      { objective: "O1", q: "Betri inaanza kuwaka na huwezi kuudhibiti moto. Unafanya nini?", options: ["Kuwatoa watu wote nje na kupiga simu kikosi cha zimamoto", "Kuendelea kutengeneza", "Kumwaga mafuta juu yake", "Kuiokota kwa mikono yako"], answer: 0, why: "Moto usiodhibitika unamaanisha kutoka nje na kupiga simu kikosi cha zimamoto." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 5, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya kifurushi chako cha kuanzia na ujaribu tena.",
    criteria: [
      { name: "Kadi ya usalama wa betri", objective: "O1", notYet: "Hakuna kadi, au inakosa dalili za hatari au la kufanya betri ikitoa moshi.", meets: "Kadi inaorodhesha dalili za hatari, tabia salama na la kufanya betri ikitoa moshi au ikiwaka.", exceeds: "Pia inaonyesha namba ya kikosi cha zimamoto na mahali mkebe wa mchanga unapowekwa." },
      { name: "Kadi ya kazi", objective: "O2", notYet: "Kadi ya kazi inakosa hitilafu, bei au makubaliano ya mteja.", meets: "Inaandika mteja, aina ya simu, IMEI, hitilafu, uharibifu ulioonekana, kazi, bei, tarehe na \"ndiyo\" ya mteja.", exceeds: "Pia ina namba ya tiketi na kisanduku cha tarehe ya mwisho wa dhamana." },
      { name: "Ahadi ya data kwa mteja", objective: "O3", notYet: "Hakuna ahadi, au inaomba PIN au nywila.", meets: "Angalau mistari minne iliyo wazi, ikiwemo kutoomba kamwe PIN ya pesa na kutonakili chochote.", exceeds: "Pia inataja ofisi ya ulinzi wa data ya nchi na jinsi kadi za kazi zinavyohifadhiwa salama." },
      { name: "Orodha ya bei", objective: "O4", notYet: "Bei ni za kubahatisha, au hesabu si sahihi.", meets: "Angalau matengenezo matano, kila moja na kipuri, ujira, gharama za duka, faida, bei na siku za dhamana, na hesabu ni sahihi.", exceeds: "Pia inaonyesha chaguo za vipuri (halisi au nakala) na kisichohusika katika dhamana." },
      { name: "Taka za kielektroniki na simu za wizi", objective: "O5", notYet: "Hakuna mpango, au mpango unajumuisha kuchoma au kutupa ovyo.", meets: "Betri na vipuri vinahifadhiwa kwa usalama na kukabidhiwa kwa mkusanyaji au ofisi iliyotajwa kwa jina; simu zisizo na uthibitisho zinakataliwa.", exceeds: "Pia inaweka kumbukumbu ya kilichokabidhiwa na lini." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia kadi ya kazi na orodha ya bei dukani kwao ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kutokuwa na moto wa betri wala malalamiko ya data dukani kwao katika siku 90",
      "Wanafunzi wanaoripoti kukabidhi taka za kielektroniki kwa mkusanyaji badala ya kuzichoma au kuzitupa ovyo ndani ya siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya kawaida yenye kikokotoo",
      "Karatasi na kalamu kwa mpango wa meza, kadi ya kazi, orodha ya bei, ahadi ya data na kadi ya usalama",
      "Ikiwezekana, simu ya zamani (ambayo betri yake tayari imeondolewa kwa usalama na mkufunzi) kwa mazoezi ya kadi ya kazi",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Katika programu ya vijana au ya ufundi stadi: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi; unganisha kozi na mazoezi ya mikono kutoka kwa fundi aliyehitimu.",
      "Kamwe usiwaruhusu wanafunzi kufanya mazoezi kwenye betri zilizovimba au kuharibika; waonyeshe picha badala yake.",
      "Kabla ya kozi, tafuta ni wakusanyaji gani wa taka za kielektroniki walioidhinishwa na ofisi gani ya ulinzi wa data zinahudumia eneo lenu, ili wanafunzi waandike majina halisi.",
      "Kamwe usiwaombe wanafunzi kushiriki PIN au nywila darasani.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
