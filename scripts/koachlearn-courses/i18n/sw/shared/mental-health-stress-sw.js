"use strict";

// Koach Learn course (Swahili translation of shared/mental-health-stress.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "mental-health-stress-sw",
  lang: "sw",
  translationOf: "mental-health-stress",
  category: "Seniors and Technology",
  name: "Afya ya Akili na Kudhibiti Msongo wa Mawazo",
  skills: "Kutambua dalili zako za msongo, Kutuliza mwili kwa kupumua na kujituliza kwa hisia, Kujenga tabia za usingizi na mazoezi, Kuomba msaada kwa mtu, Kutambua dalili za hatari na kupata msaada wa dharura, Kuandika mpango wako wa kukabiliana na msongo",
  outcome: "kutambua mapema dalili zako za msongo wa mawazo, kutuliza mwili wako kwa dakika chache kwa kupumua na kujituliza kwa hisia, kudumisha tabia za kila siku zinazolinda hali yako ya moyo, kuomba msaada, kutambua dalili za hatari kwako au kwa mtu mwingine, na kujua hasa nani wa kumpigia, ikiwemo 988 nchini Marekani, hali inapokuwa mbaya.",
  about: [
    "Kila mtu hupata msongo wa mawazo: mzazi mwenye bili, mkulima anayesubiri mvua, mchezaji kabla ya mechi kubwa, mwanajeshi mstaafu aliyerudi nyumbani, mtu aliyetoka gerezani akitafuta kazi, babu au bibi anayemhudumia mwenzi wake, mfanyabiashara katika mwezi mbaya. Msongo ni jambo la kawaida. Msongo mwingi kwa muda mrefu unaweza kuharibu usingizi wako, mwili wako, kazi yako na watu wanaokuzunguka.",
    "Kozi hii inafundisha ujuzi unaoweza kutumia leo: jinsi ya kutambua msongo mapema, kutuliza mwili haraka, kujenga tabia zinazokulinda, kuongea na mtu, na kutambua dalili kwamba ni wakati wa kupata msaada zaidi. Haitambui ugonjwa wowote na haichukui nafasi ya daktari, mshauri nasaha au mtaalamu wa tiba. Inakusaidia kujua lini na jinsi ya kumfikia mmoja wao.",
    "Kama uko hatarini sasa hivi au unawaza kujiua: nchini Marekani, piga simu au tuma ujumbe kwa 988 (988 Suicide and Crisis Lifeline, laini ya msaada wa dharura). Wanajeshi wastaafu na walio jeshini wanaweza kupiga 988 na kubonyeza 1. Nje ya Marekani, piga laini ya msaada wa dharura ya nchi yako au namba ya dharura. Huhitaji kumaliza kozi hii kwanza.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika mpango wako binafsi wa kukabiliana na msongo wa ukurasa mmoja: dalili zako tatu za mapema za msongo, ujuzi miwili wa kutuliza uliofanyia mazoezi, tabia mbili za kila siku utakazodumisha, watu wawili unaoweza kuongea nao (na jinsi ya kuwafikia), sehemu moja ya kupata msaada wa kitaalamu, na namba za dharura za mahali unapoishi (988 nchini Marekani, 988 kisha bonyeza 1 kwa wanajeshi wastaafu). Uweke kwenye simu yako na kwenye karatasi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wakubwa wa asili zote wanaopata msongo wa mawazo: wazazi, wazee na wahudumu wa wagonjwa, wakulima, wanamichezo, wanajeshi wastaafu, watu wanaorudi nyumbani kutoka gerezani na wamiliki wa biashara ndogo.",
    startingPoint: "Wanajua msongo unavyohisi na wana njia zao za kukabiliana nao, baadhi zenye msaada na nyingine hapana. Wengi hawajazitaja dalili zao za mapema za msongo, hawajafanyia mazoezi ujuzi wa kutuliza, wala hawajahifadhi namba za dharura.",
    gap: "Msongo mwingi kwa muda mrefu unaharibu usingizi, afya, kazi na mahusiano, na baadhi ya watu hawajui dalili kwamba ni wakati wa msaada zaidi. Wanafunzi wanahitaji ujuzi rahisi wa kutambua na kutuliza msongo, kuomba msaada na kufikia msaada wa dharura haraka, vikiandikwa katika mpango wanaoweza kuutumia.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Si utambuzi wa ugonjwa wala matibabu; kozi inaelekeza kwa madaktari, washauri nasaha na laini za dharura",
      "Usalama kwanza: namba za dharura (988 nchini Marekani, 988 kisha bonyeza 1 kwa wanajeshi wastaafu, au laini ya dharura ya eneo lako) zinatolewa kabla ya somo lolote",
      "Faragha: wanafunzi wanaweka kumbukumbu zao za msongo na mipango yao binafsi isipokuwa wakichagua kuishiriki",
      "Muda: masomo ya kama dakika tano; baadhi ya wanafunzi wanaweza kuwa na dhiki"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Baada ya kuandika kumbukumbu ya msongo kwa siku moja", action: "kutaja dalili zako tatu za mapema za msongo katika mwili, mawazo, hisia au matendo yako", standard: "kila dalili ikiandikwa kwa maneno yako mwenyewe" },
    { id: "O2", condition: "Unapohisi msongo ukiongezeka", action: "kutumia kupumua kwa kisanduku na kujituliza kwa 5-4-3-2-1 ili kutuliza mwili wako", standard: "ukipima msongo wako kutoka 0 hadi 10 kabla na baada" },
    { id: "O3", condition: "Kwa wiki ijayo", action: "kuchagua tabia mbili ndogo za kila siku za usingizi, mazoezi, chakula au watu na kupanga lini utazifanya", standard: "kila moja ikiwa na saa au kikumbusho" },
    { id: "O4", condition: "Pamoja na mtu unayemwamini", action: "kuanzisha mazungumzo yanayosema kinachoendelea na unachohitaji", standard: "ukitumia sentensi zako mbili za kwanza" },
    { id: "O5", condition: "Ukiona dalili za dharura kwako au kwa mtu mwingine", action: "kutambua dalili za hatari za kujiua na kuwasiliana na msaada sahihi wa dharura", standard: "namba za dharura zikiwa zimehifadhiwa kwenye simu yako na maneno ya kuuliza moja kwa moja yakiwa tayari" },
    { id: "O6", condition: "Ukitumia ulichofanyia mazoezi katika kozi hii", action: "kuandika mpango binafsi wa kukabiliana na msongo wa ukurasa mmoja", standard: "wenye sehemu zote sita, umehifadhiwa kwenye simu yako na kwenye karatasi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutambua na kutuliza msongo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutambua dalili zako za msongo",
          minutes: 5,
          goal: "Taja dalili tatu za mapema kwamba msongo unaongezeka ndani yako.",
          text: [
            "Msongo ni kengele ya mwili wako. Unaharakisha moyo na kupumua kwako ili uweze kukabili changamoto. Msongo kidogo unaweza kukusaidia kuzingatia kabla ya mtihani, mechi au usaili wa kazi. Tatizo ni pale kengele inapobaki ikilia kwa siku au wiki.",
            "Msongo huonekana sehemu nne. Mwilini: mabega yaliyokaza, maumivu ya kichwa, tumbo kuvurugika, moyo kwenda mbio. Katika mawazo: wasiwasi unaojirudia, shida kuzingatia, kutarajia mabaya zaidi. Katika hisia: hasira za haraka, huzuni, kujihisi bila hisia au kutotulia. Katika matendo: kulala sana au kidogo sana, kula tofauti, kunywa pombe au kuvuta sigara zaidi, kujitenga na watu.",
            "Dalili za kila mtu ni tofauti. Kocha anaweza kugundua kwamba anawafokea wachezaji. Bibi anaweza kugundua kwamba hapati usingizi. Ukijifunza dalili zako za mapema, unaweza kuchukua hatua kabla msongo haujawa mkubwa."
          ],
          steps: ["Fikiria mara ya mwisho ulipohisi msongo mkubwa.", "Jiulize: nilihisi nini mwilini, niliwaza nini, nilijisikiaje na nilifanya nini?", "Andika dalili za mwanzo kabisa ulizogundua.", "Chagua tatu kuu. Hizi ndizo taa zako za tahadhari za mapema."],
          words: [["Msongo wa mawazo", "jinsi mwili na akili vinavyoitikia shinikizo au changamoto."], ["Dalili", "ishara inayokuambia kuna jambo linatokea, kama taa ya tahadhari kwenye gari."]],
          slides: [
            { title: "Msongo ni kengele ya mwili wako", bullets: ["Kidogo kinaweza kukusaidia kuzingatia", "Mwingi, kwa muda mrefu, unakuchosha"] },
            { title: "Msongo huonekana wapi", bullets: ["Mwili: mabega yaliyokaza, maumivu ya kichwa, moyo kwenda mbio", "Mawazo: wasiwasi unaojirudia, shida kuzingatia", "Hisia: hasira za haraka, huzuni, kutotulia", "Matendo: usingizi, chakula, pombe, kujitenga"] },
            { title: "Jua dalili zako za mapema", bullets: ["Za kila mtu ni tofauti", "Zitambue mapema, chukua hatua mapema", "Chagua tatu kuu"] }
          ],
          tryIt: "Andika kumbukumbu fupi ya msongo kwa siku moja. Mara tatu leo (asubuhi, mchana, usiku), andika: kiwango cha msongo kutoka 0 hadi 10, na jambo moja ulilogundua katika mwili, mawazo, hisia au matendo yako. Zungushia duara dalili zako tatu kuu.",
          youCanNow: "kutaja dalili zako za mapema za msongo katika mwili, mawazo, hisia na matendo yako.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni dalili ya msongo mwilini?", options: ["Mabega yaliyokaza au taya iliyobanwa", "Kujisikia umepumzika baada ya kulala", "Kucheka na rafiki", "Kufurahia chakula"], answer: 0, why: "Misuli iliyokaza ni dalili ya kawaida ya mapema ya msongo mwilini." },
            { objective: "O1", q: "Unagundua kwamba wiki hii unaifokea familia jioni nyingi. Utafanya nini?", options: ["Kupuuza; kila mtu hufanya hivyo", "Kuiandika kwenye kumbukumbu yako ya msongo kama dalili inayowezekana", "Kuacha kuongea na familia yako", "Kusubiri hadi iwe mbaya zaidi"], answer: 1, why: "Kutambua na kuandika dalili kunakusaidia kuchukua hatua kabla msongo haujakua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutuliza mwili haraka: kupumua na kujituliza kwa hisia",
          minutes: 5,
          goal: "Tumia kupumua polepole na zoezi la kujituliza kwa hisia ili kutulia kwa dakika chache.",
          text: [
            "Msongo unapokuja, kupumua polepole kunauambia mwili wako kwamba ni salama kupunguza kengele. Njia moja rahisi ni kupumua kwa kisanduku: vuta pumzi kwa hesabu 4, shikilia kwa 4, toa pumzi kwa 4, shikilia kwa 4. Rudia mara nne. Kama kushikilia ni kugumu, fanya tu pumzi ya kutoa iwe ndefu kuliko ya kuvuta, kwa mfano vuta kwa 4 na toa kwa 6.",
            "Kujituliza kwa hisia kunarudisha akili yako kwenye sasa hivi wasiwasi unapokimbia mbele. Jaribu 5-4-3-2-1: taja vitu 5 unavyoviona, vitu 4 unavyoweza kugusa, vitu 3 unavyosikia, vitu 2 unavyonusa na kitu 1 unachoonja. Unaweza kufanya hivi popote: ndani ya basi, kabla ya mkutano, kwenye chumba cha kubadilishia nguo, kwenye chumba cha kusubiri.",
            "Ujuzi huu hufanya kazi vizuri zaidi kwa mazoezi. Ujaribu ukiwa umetulia, ili uwe tayari unapouhitaji. Apps za bure za simu zinaweza kukuongoza, lakini huhitaji app yoyote. Kama mazoezi ya kupumua yanakuletea kizunguzungu, acha na upumue kawaida."
          ],
          steps: ["Tambua dalili ya msongo.", "Kupumua kwa kisanduku: vuta 4, shikilia 4, toa 4, shikilia 4. Rudia mara nne.", "Kama wasiwasi unaendelea: fanya kujituliza kwa 5-4-3-2-1.", "Pima tena kiwango chako cha msongo kutoka 0 hadi 10."],
          words: [["Kupumua kwa kisanduku", "kuvuta pumzi, kushikilia, kutoa pumzi na kushikilia, kila moja kwa hesabu ile ile, mara nyingi 4 (kwa Kiingereza \"box breathing\")."], ["Kujituliza kwa hisia", "kutumia hisia zako (kuona, kugusa, kusikia, kunusa, kuonja) kurudisha umakini wako kwenye wakati huu (kwa Kiingereza \"grounding\")."]],
          slides: [
            { title: "Kupumua kwa kisanduku", bullets: ["Vuta kwa 4", "Shikilia kwa 4", "Toa kwa 4, shikilia kwa 4", "Rudia mara nne"] },
            { title: "Njia rahisi zaidi", bullets: ["Fanya pumzi ya kutoa iwe ndefu kuliko ya kuvuta", "Vuta kwa 4, toa kwa 6", "Kizunguzungu? Acha na upumue kawaida"] },
            { title: "Kujituliza kwa 5-4-3-2-1", bullets: ["Vitu 5 unavyoviona, 4 unavyoweza kugusa", "3 unavyosikia, 2 unavyonusa, 1 unachoonja", "Inafanya kazi popote: basi, chumba cha nguo, chumba cha kusubiri"] },
            { title: "Fanya mazoezi ukiwa umetulia", bullets: ["Hapo utakuwa tayari unapouhitaji", "Huhitaji app"] }
          ],
          sources: [{ name: "National Institute of Mental Health: I'm So Stressed Out! fact sheet", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" }],
          tryIt: "Pima msongo wako kutoka 0 hadi 10. Fanya mizunguko minne ya kupumua kwa kisanduku, kisha mzunguko mmoja wa kujituliza kwa 5-4-3-2-1. Pima msongo wako tena na uandike namba zote mbili.",
          youCanNow: "kutuliza mwili wako kwa dakika chache kwa kupumua polepole na kurudisha akili yako kwa kujituliza kwa hisia.",
          quickCheck: [
            { objective: "O2", q: "Kujituliza kwa 5-4-3-2-1 kunakusaidia kufanya nini?", options: ["Kulala papo hapo", "Kuhesabu pesa zako", "Kurudisha akili yako kwenye wakati huu kwa kutumia hisia zako", "Kukumbuka namba yako ya simu"], answer: 2, why: "Kujituliza kwa hisia kunatumia hisia zako tano kurudisha umakini wako kwenye wakati huu." },
            { objective: "O2", q: "Unahisi moyo wako ukienda mbio kabla ya simu ngumu. Utafanya nini?", options: ["Kushikilia pumzi kwa muda mrefu kadiri unavyoweza", "Kufanya mizunguko michache ya kupumua kwa kisanduku, kisha kupiga simu", "Kunywa vikombe vitatu vya kahawa", "Kufuta simu zote za wiki"], answer: 1, why: "Kupumua polepole kwa kisanduku kunaweza kutuliza mwili wako kwa dakika chache." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tabia za kila siku zinazokulinda: usingizi, mazoezi, chakula na watu",
          minutes: 5,
          goal: "Chagua tabia mbili ndogo za kila siku zinazofanya msongo uwe rahisi kukabili.",
          text: [
            "Kupumua kunasaidia wakati huo huo. Tabia zinasaidia kila siku. CDC (shirika la afya la serikali ya Marekani) inasema watu wazima wengi wanahitaji saa 7 au zaidi za usingizi kwa usiku, na vijana wa miaka 13 hadi 17 wanahitaji saa 8 hadi 10. Tabia nzuri za usingizi: lala na amka saa ile ile, weka chumba kiwe na giza, kimya na baridi kiasi, weka skrini mbali kama dakika 30 kabla ya kulala, na punguza kafeini mwishoni mwa siku na pombe karibu na wakati wa kulala.",
            "Mazoezi yanaondoa msongo. CDC inasema watu wazima wanahitaji kama dakika 150 za mazoezi ya wastani kwa wiki, kama dakika 30 kwa siku 5, pamoja na mazoezi ya kuimarisha misuli siku 2. Kutembea kwa kasi kunahesabika. Wanamichezo: siku za kupumzika na usingizi ni sehemu ya mazoezi pia. Milo ya kawaida na maji ya kutosha pia hutuliza hali ya moyo.",
            "Watu wanakulinda. Muda na mtu anayekusaidia kujisikia vizuri, hata simu fupi, unapunguza msongo. Kuandika kwenye shajara na kupunguza habari na mitandao ya kijamii zinapokuudhi pia husaidia. Anza kidogo: tabia moja unayoweza kudumisha ni bora kuliko tano unazoacha."
          ],
          steps: ["Angalia kumbukumbu yako ya msongo kutoka Somo 1.", "Chagua tabia mbili: moja ya usingizi au mazoezi, moja ya watu au mapumziko.", "Fanya kila moja iwe ndogo na mahususi (\"tembea dakika 15 baada ya chakula cha mchana\").", "Zifanye kwa wiki moja na uone tofauti."],
          words: [["Tabia", "jambo unalofanya mara nyingi kiasi kwamba linakuwa la kawaida bila kufikiri."], ["Mazoezi ya wastani", "mwendo unaokufanya upumue kwa nguvu zaidi lakini bado unaweza kuongea, kama kutembea kwa kasi."]],
          slides: [
            { title: "Usingizi", bullets: ["Watu wazima: saa 7 au zaidi; vijana 13-17: saa 8 hadi 10", "Saa ile ile ya kulala na kuamka", "Skrini mbali kama dakika 30 kabla ya kulala"] },
            { title: "Mazoezi", bullets: ["Watu wazima: kama dakika 150 kwa wiki", "Mfano: dakika 30 kwa siku 5", "Kutembea kwa kasi kunahesabika"] },
            { title: "Chakula, maji na watu", bullets: ["Milo ya kawaida na maji ya kutosha", "Ongea na mtu anayekutia moyo", "Pumzika na habari zinazokuudhi"] },
            { title: "Anza kidogo", bullets: ["Chagua tabia mbili", "Zifanye ziwe mahususi", "Zijaribu kwa wiki moja"] }
          ],
          sources: [
            { name: "CDC: About Sleep", url: "https://www.cdc.gov/sleep/about/index.html" },
            { name: "CDC: Adult Activity guidelines", url: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
          ],
          tryIt: "Andika tabia mbili ndogo za wiki hii, moja ya usingizi au mazoezi na moja ya watu au mapumziko, na lini utazifanya. Weka kikumbusho kwenye simu au ziandike kwenye kalenda yako.",
          youCanNow: "kuchagua na kupangia muda tabia ndogo za kila siku za usingizi, mazoezi na kuungana na watu zinazokulinda dhidi ya msongo.",
          quickCheck: [
            { objective: "O3", q: "Lengo lipi la tabia ni rahisi zaidi kudumisha?", options: ["\"Kuwa na afya zaidi\"", "\"Kutopata msongo tena kamwe\"", "\"Kufanya mazoezi saa mbili kila siku kuanzia leo\"", "\"Kumpigia dada yangu simu Jumapili mchana\""], answer: 3, why: "Tabia ndogo, mahususi zenye muda uliopangwa ni rahisi kudumisha." },
            { objective: "O3", q: "Mara nyingi unaangalia simu kitandani hadi usiku sana. Utajaribu tabia gani ndogo?", options: ["Kuweka simu mbali kama dakika 30 kabla ya kulala", "Kutumia simu zaidi ili uchoke", "Kulala na TV ikiwa imewashwa", "Kuchelewa kulala zaidi siku za kazi"], answer: 0, why: "Kuweka skrini mbali kabla ya kulala ni ushauri wa usingizi uliofundishwa katika somo hili." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutambua na kutuliza msongo",
        questions: [
          { objective: "O1", q: "Ipi kati ya hizi ni dalili ya mapema ya msongo katika matendo yako?", options: ["Kulala kidogo sana kuliko kawaida", "Kuhisi jua usoni", "Kula chakula chako cha kawaida cha mchana", "Kucheka kwa utani"], answer: 0, why: "Mabadiliko katika usingizi, kula, kunywa au kujitenga ni dalili za msongo katika matendo yako." },
          { objective: "O2", q: "Kupumua kwa kisanduku ni nini?", options: ["Kupumua ndani ya mfuko wa karatasi", "Kushikilia pumzi kwa muda mrefu kadiri unavyoweza", "Kuvuta pumzi, kushikilia, kutoa na kushikilia, kila moja kwa hesabu kama 4", "Kupumua haraka ili kuamka"], answer: 2, why: "Kupumua kwa kisanduku kunatumia hesabu nne sawa kupunguza kasi ya mwili wako." },
          { objective: "O2", q: "Akili yako inakimbia kabla ya usaili wa kazi. Ujuzi upi wa kujituliza unafaa?", options: ["Kuangalia mitandao ya kijamii", "Kutaja vitu 5 unavyoviona, 4 unavyoweza kugusa, 3 unavyosikia, 2 unavyonusa, 1 unachoonja", "Kunywa kahawa tatu", "Kukumbuka kila kosa la zamani"], answer: 1, why: "5-4-3-2-1 inarudisha umakini wako kwenye sasa hivi." },
          { objective: "O3", q: "Kulingana na CDC, watu wazima wengi wanahitaji usingizi kiasi gani?", options: ["Saa 4", "Saa 5", "Saa 6", "Saa 7 au zaidi"], answer: 3, why: "CDC inasema watu wazima wanahitaji saa 7 au zaidi kwa usiku." },
          { objective: "O3", q: "Lengo lipi la tabia ni rahisi zaidi kudumisha?", options: ["\"Kuwa na afya zaidi\"", "\"Kutopata msongo tena kamwe\"", "\"Kukimbia mbio za marathon wiki ijayo\"", "\"Kutembea dakika 15 baada ya chakula cha mchana siku za kazi\""], answer: 3, why: "Tabia ndogo na mahususi ni rahisi kuanza na kudumisha." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata msaada na kuwasaidia wengine",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuongea na mtu na kuomba msaada",
          minutes: 5,
          goal: "Anzisha mazungumzo ya kuomba msaada kwa mtu unayemwamini.",
          text: [
            "Watu wengi husubiri muda mrefu mno kabla ya kuongea kwa sababu wanajihisi dhaifu, wana aibu, au hawataki kuwa mzigo. Kuomba msaada ni ujuzi, si udhaifu. Makocha, wanajeshi, wakulima na wafanyabiashara wote hutegemea timu.",
            "Unaweza kuongea na nani: rafiki au mwanafamilia, kiongozi wa dini, kocha, mlezi au mfadhili, msimamizi wa kesi au mshauri wa kurudi katika jamii, mwalimu au mshauri wa shule, daktari wako, au mshauri nasaha au mtaalamu wa tiba. Daktari wako anaweza kuchunguza kama kuna sababu za kiafya na kukusaidia kupata huduma ya afya ya akili. Nchini Marekani, SAMHSA National Helpline (1-800-662-4357) ni laini ya bure, ya siri, saa 24 siku 7, inayokuelekeza kwa huduma za afya ya akili na matumizi ya dawa za kulevya; inakuunganisha na matibabu na vikundi vya msaada vya karibu lakini yenyewe haitoi ushauri nasaha. Wanajeshi wastaafu pia wanaweza kuuliza timu yao ya afya ya VA.",
            "Jinsi ya kuanza: chagua wakati wa utulivu, sema kwa urahisi, na sema unachohitaji. Kwa mfano: \"Nimekuwa na msongo mkubwa siku hizi na sipati usingizi. Naweza kuongea nawe kwa dakika chache? Zaidi nahitaji unisikilize tu.\" Chatbot ya AI inaweza kukusaidia kufanyia mazoezi maneno, lakini si mshauri nasaha. Usiiandikie taarifa zako za siri, na wakati wa dharura, mfikie mtu halisi."
          ],
          steps: ["Chagua mtu mmoja unayemwamini.", "Chagua wakati na mahali pa utulivu.", "Sema kinachoendelea kwa sentensi moja au mbili.", "Sema unachohitaji: kusikilizwa, ushauri, msaada wa kazi fulani, au msaada wa kupata mtaalamu."],
          words: [["Mshauri nasaha au mtaalamu wa tiba", "mtaalamu aliyefunzwa anayesaidia watu kuhusu msongo, hisia na afya ya akili."], ["Kuelekezwa (referral)", "kuonyeshwa au kutumwa kwa huduma au mtaalamu sahihi."], ["Siri", "kunawekwa faragha."]],
          slides: [
            { title: "Kuomba msaada ni ujuzi", bullets: ["Si udhaifu", "Timu hushinda: makocha, vikosi, familia, vyama vya ushirika"] },
            { title: "Watu unaoweza kuongea nao", bullets: ["Rafiki, familia, kiongozi wa dini, kocha, mlezi", "Msimamizi wa kesi, mwalimu, mshauri wa shule", "Daktari wako, mshauri nasaha au mtaalamu wa tiba"] },
            { title: "Kupata huduma nchini Marekani", bullets: ["SAMHSA Helpline: 1-800-662-4357, bure, saa 24 siku 7", "Inakuelekeza kwa matibabu na vikundi vya msaada vya karibu", "Wanajeshi wastaafu: uliza timu yako ya afya ya VA"] },
            { title: "Jinsi ya kuanza", bullets: ["Wakati wa utulivu, maneno rahisi", "\"Nimekuwa na msongo mkubwa. Tunaweza kuongea?\"", "Sema unachohitaji"] }
          ],
          sources: [{ name: "SAMHSA National Helpline", url: "https://www.samhsa.gov/find-help/helplines/national-helpline" }],
          tryIt: "Andika sentensi mbili za kwanza ambazo ungemwambia mtu mmoja unayemwamini kuhusu msongo wako, pamoja na unachohitaji kutoka kwake. Ukijisikia tayari, tuma ujumbe huo au fanya mazungumzo hayo wiki hii.",
          youCanNow: "kuchagua mtu wa kuongea naye, kuanzisha mazungumzo kwa maneno rahisi, na kusema aina ya msaada unaohitaji.",
          quickCheck: [
            { objective: "O4", q: "Sentensi gani nzuri ya kwanza unapoomba msaada?", options: ["\"Aah, achana nayo, si kitu.\"", "\"Wewe hunisaidii kamwe.\"", "\"Nimekuwa na msongo mkubwa siku hizi, na ningependa tuongee kwa dakika chache.\"", "\"Tatua matatizo yangu.\""], answer: 2, why: "Kusema kwa urahisi kinachoendelea na unachohitaji kunafungua mlango wa msaada." },
            { objective: "O4", q: "Una msongo na unatumia chatbot ya AI usiku. Utafanya nini ukianza kujihisi si salama?", options: ["Kuendelea kuongea na chatbot peke yake", "Kumfikia mtu halisi, kama 988 nchini Marekani au laini ya dharura ya eneo lako", "Kuzima simu yako na kusubiri", "Kutafuta habari zaidi kuhusu msongo"], answer: 1, why: "Chatbot inaweza kusaidia kufanyia mazoezi maneno, lakini wakati wa dharura unamfikia mtu halisi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dalili za hatari na kupata msaada wa dharura",
          minutes: 6,
          goal: "Tambua dalili za hatari kubwa kwako au kwa mtu mwingine na ujue nani wa kumpigia.",
          text: [
            "Wakati mwingine msongo hugeuka kuwa jambo zito zaidi. National Institute of Mental Health (taasisi ya serikali ya Marekani ya afya ya akili) inaorodhesha dalili za hatari za kujiua, zikiwemo: kuongea kuhusu kutaka kufa, kujihisi bila matumaini au umenaswa, kujihisi kuwa mzigo, kutafuta njia za kufa, kugawa vitu muhimu au kuaga, kujitenga na watu, kutumia pombe au dawa za kulevya zaidi, mabadiliko makubwa ya hisia, na mabadiliko makubwa katika usingizi au kula. Dalili mpya au zinazozidi kuwa mbaya zinahitaji msaada haraka.",
            "Ukiona dalili kwa mtu mwingine: muulize moja kwa moja na kwa utulivu, \"Je, unawaza kujiua?\" Kuuliza hakumtii wazo hilo kichwani. Sikiliza bila kuhukumu, kaa naye, na msaidie kuunganishwa na msaada. Kama mtu yuko katika hatari ya papo hapo, piga namba yako ya dharura (911 nchini Marekani).",
            "Msaada wa dharura nchini Marekani: piga simu au tuma ujumbe kwa 988, au ongea kwa maandishi kwenye 988lifeline.org, kwa 988 Suicide and Crisis Lifeline. Ni bure, ni siri na iko wazi saa 24 siku 7, pia kwa ujumbe na mazungumzo ya maandishi kwa Kihispania. Wanajeshi wastaafu, walio jeshini na familia zao: piga 988 na ubonyeze 1, au tuma ujumbe kwa 838255, kwa Veterans Crisis Line; huhitaji kuwa umesajiliwa katika huduma ya VA. Nje ya Marekani, piga laini ya dharura ya nchi yako au namba ya dharura; ihifadhi kwenye simu yako leo.",
            "Pia pata msaada (kutoka kwa daktari wako au mshauri nasaha) msongo au wasiwasi usipoondoka, unapoingilia maisha ya kila siku, au unapokufanya uepuke mambo unayohitaji kufanya."
          ],
          steps: ["Tambua dalili ya hatari.", "Uliza moja kwa moja na usikilize bila kuhukumu.", "Kaa na mtu huyo; usimwache peke yake kama yuko hatarini.", "Pigeni simu au tumeni ujumbe kwa 988 pamoja (wanajeshi wastaafu: 988 kisha bonyeza 1), au laini ya dharura ya eneo lako.", "Hatari ya papo hapo: piga 911 au namba yako ya dharura."],
          words: [["Dharura", "wakati ambapo usalama wa mtu au uwezo wake wa kustahimili uko katika hatari kubwa."], ["988 Lifeline", "laini ya Marekani 988 Suicide and Crisis Lifeline: piga simu au tuma ujumbe kwa 988 kupata msaada wa bure na wa siri wakati wowote."]],
          slides: [
            { title: "Dalili za hatari", bullets: ["Kuongea kuhusu kutaka kufa, au kuwa mzigo", "Kujihisi bila matumaini au umenaswa", "Kugawa vitu, kuaga", "Kujitenga, pombe au dawa za kulevya zaidi"] },
            { title: "Ukiona dalili kwa mtu", bullets: ["Uliza moja kwa moja na kwa utulivu", "Sikiliza bila kuhukumu", "Kaa naye na umuunganishe na msaada"] },
            { title: "Msaada wa dharura nchini Marekani", bullets: ["Piga simu au tuma ujumbe kwa 988, au 988lifeline.org", "Bure, siri, saa 24 siku 7", "Wanajeshi wastaafu: 988 kisha bonyeza 1, au ujumbe kwa 838255"] },
            { title: "Nje ya Marekani na hali za dharura", bullets: ["Hifadhi sasa laini ya dharura au namba ya dharura ya nchi yako", "Hatari ya papo hapo: piga 911 au namba yako ya dharura"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "National Institute of Mental Health: Warning Signs of Suicide", url: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide" }
          ],
          tryIt: "Hifadhi sasa hivi kwenye simu yako namba za dharura za mahali unapoishi: nchini Marekani, 988 (na 988 kisha bonyeza 1 kwa wanajeshi wastaafu); nje ya Marekani, laini ya dharura ya eneo lako na namba ya dharura. Kisha andika maneno hasa ambayo ungetumia kumuuliza rafiki kama anawaza kujiua.",
          youCanNow: "kutambua dalili za hatari kubwa, kumuuliza mtu moja kwa moja, na kumuunganisha yeye au wewe mwenyewe na msaada wa dharura.",
          quickCheck: [
            { objective: "O5", q: "Ipi kati ya hizi ni dalili ya hatari ya kujiua?", options: ["Kupanga sherehe ya kuzaliwa", "Kujisikia uchovu baada ya kazi", "Kuongea kuhusu kuwa mzigo au kutaka kufa", "Kuwa na shughuli nyingi katika kazi mpya"], answer: 2, why: "Kuongea kuhusu kuwa mzigo au kutaka kufa ni dalili kubwa ya hatari." },
            { objective: "O5", q: "Rafiki yako mwanajeshi mstaafu anakuambia ana mpango wa kujiua. Utafanya nini?", options: ["Kubadilisha mada", "Kuahidi kuweka siri", "Kumwacha peke yake apumzike", "Kukaa naye na kupiga 988 na kubonyeza 1, au 911 kama yuko katika hatari ya papo hapo"], answer: 3, why: "Kaa naye na umuunganishe na msaada wa dharura mara moja." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika mpango wako binafsi wa kukabiliana na msongo",
          minutes: 5,
          goal: "Andika mpango wa ukurasa mmoja unaokuambia ufanye nini msongo unapoongezeka.",
          text: [
            "Ukiwa na msongo mkubwa, ni vigumu kufikiri vizuri. Mpango wa kukabiliana na msongo ni ukurasa mfupi unaouandika ukiwa umetulia, ili ujue la kufanya mambo yanapokuwa magumu.",
            "Mpango wako una sehemu sita: dalili zako za mapema za msongo, ujuzi wako wa kutuliza, tabia zako za kila siku, watu unaoweza kuongea nao, msaada wa kitaalamu, na namba za dharura. Uwe mfupi na kwa maneno yako mwenyewe.",
            "Weka mpango mahali unapoweza kuufikia: kwenye karatasi ndani ya pochi au begi lako, na kwenye simu yako. Mshirikishe mtu mmoja unayemwamini. Uangalie tena kila baada ya miezi michache, baada ya badiliko kubwa kama kazi mpya, kuhama, msimu kuisha au kurudi nyumbani."
          ],
          steps: ["Andika dalili zako tatu kuu za mapema za msongo.", "Andika ujuzi miwili wa kutuliza uliofanyia mazoezi.", "Andika tabia mbili za kila siku utakazodumisha.", "Andika watu wawili unaoweza kuongea nao, na jinsi ya kuwafikia.", "Andika sehemu moja ya msaada wa kitaalamu, na namba zako za dharura."],
          words: [["Mpango wa kukabiliana na msongo", "mpango mfupi ulioandikwa wa utakachofanya na utakayempigia msongo unapoongezeka."]],
          slides: [
            { title: "Kwa nini uandike mpango", bullets: ["Msongo unafanya iwe vigumu kufikiri", "Uandike ukiwa umetulia"] },
            { title: "Sehemu sita", bullets: ["Dalili, ujuzi wa kutuliza, tabia za kila siku", "Watu, msaada wa kitaalamu, namba za dharura"] },
            { title: "Uweke karibu", bullets: ["Nakala ya karatasi na nakala ya simu", "Mshirikishe mtu mmoja unayemwamini", "Ubadilishe baada ya mabadiliko makubwa"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa kukabiliana na msongo wenye sehemu zote sita, ikiwemo 988 (na 988 kisha bonyeza 1 kwa wanajeshi wastaafu) au laini ya dharura ya eneo lako. Hifadhi nakala kwenye simu yako na uweke moja kwenye karatasi.",
          youCanNow: "kuandika na kutumia mpango binafsi wa kukabiliana na msongo unaokuambia hasa ufanye nini na umpigie nani msongo unapoongezeka.",
          quickCheck: [
            { objective: "O6", q: "Sehemu ipi ya mpango inakuja kwanza ili ikusaidie kuchukua hatua mapema?", options: ["Dalili zako za mapema za msongo", "Chakula unachopenda zaidi", "Ratiba yako ya kazi", "Salio lako la benki"], answer: 0, why: "Kujua dalili zako kunakuambia lini utumie sehemu nyingine za mpango." },
            { objective: "O6", q: "Mpango wako umekamilika. Utaufanyia nini?", options: ["Kuutupa baada ya kuusoma mara moja", "Kuuweka kwenye karatasi na kwenye simu yako, na kumshirikisha mtu unayemwamini", "Kuuweka hadharani mtandaoni", "Kuuficha ili mtu yeyote asiuone kamwe"], answer: 1, why: "Kuweka mpango karibu na kuushiriki kunamaanisha upo unapouhitaji." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata msaada na kuwasaidia wengine",
        questions: [
          { objective: "O4", q: "Njia ipi bora ya kuanza kumwomba rafiki msaada?", options: ["Kusubiri hadi mambo yawe mabaya zaidi", "Kusema kwa urahisi kinachoendelea na unachohitaji kutoka kwake", "Kuandika mtandaoni bila kumwambia", "Kudokeza tu na kutumaini atakisia"], answer: 1, why: "Maneno rahisi na ombi lililo wazi humsaidia mtu mwingine akusaidie." },
          { objective: "O5", q: "Mfanyakazi mwenzako anasema anajihisi kuwa mzigo na amekuwa akigawa vitu vyake. Ufanye nini?", options: ["Kubadilisha mada", "Kumwambia achangamke", "Kumuuliza moja kwa moja kama anawaza kujiua, kukaa naye, na kumuunganisha na msaada", "Kusubiri mwezi mmoja uone kama itapita"], answer: 2, why: "Hizi ni dalili za hatari. Kuuliza moja kwa moja na kumuunganisha na msaada kunaweza kuokoa maisha." },
          { objective: "O5", q: "Nchini Marekani, unaifikiaje 988 Suicide and Crisis Lifeline?", options: ["Kwa barua pepe tu", "Kupiga simu au kutuma ujumbe kwa 988, au kuongea kwa maandishi kwenye 988lifeline.org", "Kutembelea ofisi ana kwa ana", "Kupiga 411"], answer: 1, why: "988 inapatikana kwa simu, ujumbe au mazungumzo ya mtandaoni, bure na saa 24 siku 7." },
          { objective: "O5", q: "Mwanajeshi mstaafu anaifikiaje Veterans Crisis Line?", options: ["Kupiga 988 na kubonyeza 1", "Kwa kutembelea ofisi ya VA tu", "Ikiwa tu amesajiliwa katika huduma ya afya ya VA", "Kwa kutuma barua"], answer: 0, why: "Wanajeshi wastaafu wanapiga 988 na kubonyeza 1 (au ujumbe kwa 838255); usajili hauhitajiki." },
          { objective: "O6", q: "Kipi kinafaa kuwa katika mpango binafsi wa kukabiliana na msongo?", options: ["Nywila yako ya benki", "Orodha ya watu unaowakasirikia", "Hakuna kitu; mipango haisaidii", "Namba zako za dharura na watu wawili unaoweza kuongea nao"], answer: 3, why: "Mpango wa kukabiliana na msongo una dalili zako, ujuzi, tabia, watu, msaada wa kitaalamu na namba za dharura." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Afya ya Akili na Kudhibiti Msongo wa Mawazo",
    questions: [
      { objective: "O1", q: "Msongo wa mawazo unaelezwa vizuri zaidi kama:", options: ["Daima ni ishara ya udhaifu", "Kengele ya mwili na akili inayoitikia shinikizo", "Kitu ambacho watu wazima tu hupata", "Ugonjwa ambao daktari tu anaweza kuuona"], answer: 1, why: "Msongo ni mwitikio wa kawaida; unakuwa tatizo unapodumu muda mrefu au ukiwa mkubwa mno." },
      { objective: "O1", q: "Ipi ni dalili ya msongo katika mawazo yako?", options: ["Wasiwasi unaoendelea kujirudia", "Msuli unaouma baada ya mazoezi", "Kushiba baada ya chakula cha mchana", "Siku yenye jua"], answer: 0, why: "Wasiwasi unaojirudia na shida kuzingatia ni dalili za mawazo." },
      { objective: "O1", q: "Kwa nini ujifunze dalili zako za mapema za msongo?", options: ["Ili uweze kuzificha", "Ili uweze kuchukua hatua kabla msongo haujawa mkubwa", "Ili usipate msongo kamwe", "Ili uweze kujitambua ugonjwa mwenyewe"], answer: 1, why: "Kutambua dalili mapema kunakuwezesha kutumia ujuzi wako mapema zaidi." },
      { objective: "O2", q: "Hesabu za kupumua kwa kisanduku kwa kawaida ni:", options: ["Vuta 1, toa 1", "Vuta 10, shikilia 30", "Vuta 4, shikilia 4, toa 4, shikilia 4", "Haraka kadiri iwezekanavyo"], answer: 2, why: "Hesabu nne sawa zinapunguza kasi ya kupumua na kutuliza mwili wako." },
      { objective: "O2", q: "Mazoezi ya kupumua yanakuletea kizunguzungu. Ufanye nini?", options: ["Kupumua haraka zaidi", "Kushikilia pumzi kwa muda mrefu zaidi", "Kuendelea liwalo na liwe", "Kuacha na kupumua kawaida"], answer: 3, why: "Ukihisi kizunguzungu, acha na upumue kawaida." },
      { objective: "O2", q: "Kujituliza kwa 5-4-3-2-1 kunatumia:", options: ["Hisia zako tano", "Apps tano", "Marafiki watano", "Dakika tano za kukimbia"], answer: 0, why: "Unataja vitu unavyoviona, kugusa, kusikia, kunusa na kuonja." },
      { objective: "O2", q: "Wakati gani ni bora kufanyia mazoezi ujuzi wa kutuliza?", options: ["Wakati wa dharura tu", "Kamwe; unafanya kazi bila mazoezi", "Ukiwa umetulia, ili uwe tayari baadaye", "Kwa app ya kulipia tu"], answer: 2, why: "Mazoezi yanaufanya ujuzi uwe tayari unapouhitaji." },
      { objective: "O3", q: "CDC inasema vijana wa miaka 13 hadi 17 wanahitaji usingizi kiasi gani?", options: ["Saa 8 hadi 10", "Saa 5 hadi 6", "Saa 4", "Saa 12 hadi 14"], answer: 0, why: "CDC inaorodhesha saa 8 hadi 10 kwa vijana wa miaka 13 hadi 17." },
      { objective: "O3", q: "Upi ni ushauri wa usingizi wa CDC?", options: ["Kunywa kahawa usiku sana", "Kubadilisha saa ya kulala kila usiku", "Kulala taa kali zikiwaka", "Kuweka skrini mbali kama dakika 30 kabla ya kulala"], answer: 3, why: "Kuweka skrini mbali kabla ya kulala kunakusaidia kulala." },
      { objective: "O3", q: "CDC inapendekeza mazoezi ya wastani kiasi gani kwa watu wazima kila wiki?", options: ["Dakika 10", "Dakika 150", "Dakika 1,000", "Hakuna"], answer: 1, why: "Watu wazima wanahitaji kama dakika 150 za mazoezi ya wastani kwa wiki, pamoja na mazoezi ya nguvu siku 2." },
      { objective: "O4", q: "Kuomba msaada ni:", options: ["Ishara kwamba umeshindwa", "Kwa watu wasio na marafiki tu", "Ujuzi ambao watu imara na timu hutumia", "Kitu cha kuepuka"], answer: 2, why: "Kuomba msaada ni ujuzi, si udhaifu." },
      { objective: "O4", q: "SAMHSA National Helpline inafanya nini?", options: ["Inatoa maelekezo ya bure na ya siri kwa matibabu na msaada wa karibu", "Inatuma polisi nyumbani kwako", "Inaandika dawa", "Inatoza pesa kwa kila simu"], answer: 0, why: "Ni laini ya bure ya kuelekeza watu, saa 24 siku 7; yenyewe haitoi ushauri nasaha." },
      { objective: "O4", q: "Unapotumia chatbot ya AI ukiwa na msongo, kipi ni salama zaidi?", options: ["Kuiambia jina lako kamili, anwani na namba ya kitambulisho", "Kuitumia kufanyia mazoezi maneno ya mazungumzo, na kumfikia mtu halisi wakati wa dharura", "Kuichukulia kama mtaalamu wako wa tiba badala ya kumwona mtu yeyote", "Kufuata ushauri wowote wa kiafya inaoutoa bila kukagua"], answer: 1, why: "AI inaweza kukusaidia kujiandaa, lakini si mshauri nasaha; dharura inahitaji mtu halisi." },
      { objective: "O5", q: "Ipi ni dalili ya hatari ya kujiua?", options: ["Kupanga sherehe ya kuzaliwa", "Kuanza burudani mpya", "Kuaga na kugawa vitu muhimu", "Kulala vizuri"], answer: 2, why: "Kugawa vitu na kuaga ni dalili za hatari zilizoorodheshwa na NIMH." },
      { objective: "O5", q: "Je, kumuuliza mtu moja kwa moja kuhusu kujiua kunamtia wazo hilo kichwani?", options: ["Ndiyo, daima", "Kwa vijana tu", "Kwenye simu tu", "Hapana; kuuliza kwa utulivu kunafungua mlango wa msaada"], answer: 3, why: "Kuuliza moja kwa moja na kwa utulivu kunamsaidia mtu kuongea na kupata msaada." },
      { objective: "O5", q: "Mtu yuko katika hatari ya papo hapo nchini Marekani. Unafanya nini?", options: ["Kuandika kuhusu hilo mtandaoni", "Kupiga 911", "Kusubiri hadi kesho", "Kumtumia kiungo cha kozi hii"], answer: 1, why: "Hatari ya papo hapo inahitaji huduma za dharura: 911 nchini Marekani." },
      { objective: "O5", q: "Unaishi nje ya Marekani na rafiki yako yuko katika dharura. Unafanya nini?", options: ["Kupiga laini ya dharura ya nchi yako au namba ya dharura", "Kutuma ujumbe kwa 988 ukiwa nje ya nchi na kusubiri", "Kutofanya chochote", "Kuiomba AI ishughulikie"], answer: 0, why: "988 ni laini ya Marekani; nje ya Marekani tumia laini ya dharura ya eneo lako au namba ya dharura." },
      { objective: "O6", q: "Ni lini unapaswa kumwona daktari au mshauri nasaha kuhusu msongo, hata bila dharura?", options: ["Kamwe", "Ikiwa tu rafiki amekuambia", "Mara moja kwa mwaka tu", "Msongo usipoondoka au unapoingilia maisha ya kila siku"], answer: 3, why: "Msongo unaodumu au unaoingilia maisha ya kila siku ni ishara ya kupata msaada." },
      { objective: "O6", q: "Unapaswa kuweka wapi mpango wako wa kukabiliana na msongo?", options: ["Umefichwa mahali usipoweza kuupata", "Kichwani mwako tu", "Kwenye karatasi na kwenye simu yako, ukimshirikisha mtu unayemwamini", "Kwenye chapisho la hadharani la mitandao ya kijamii"], answer: 2, why: "Nakala zilizo rahisi kufikia husaidia msongo unapofanya iwe vigumu kufikiri." },
      { objective: "O6", q: "Sehemu ipi ya mpango inakuambia nani wa kumpigia wakati wa dharura?", options: ["Tabia za kila siku", "Ujuzi wa kutuliza", "Dalili za msongo", "Namba za dharura"], answer: 3, why: "Namba za dharura kama 988, au laini ya eneo lako, zinapaswa kuwa katika kila mpango." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 6, 8, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Dalili za mapema", objective: "O1", notYet: "Dalili chini ya tatu, au ni za jumla mno, kama \"msongo\".", meets: "Dalili tatu binafsi za mapema kwa maneno ya mwanafunzi mwenyewe.", exceeds: "Dalili zinatoka kwenye kumbukumbu halisi ya msongo na zinahusu mwili, mawazo au matendo." },
      { name: "Ujuzi wa kutuliza", objective: "O2", notYet: "Ujuzi wa kutuliza umeorodheshwa lakini haujafanyiwa mazoezi.", meets: "Ujuzi miwili wa kutuliza umefanyiwa mazoezi, na vipimo vya msongo kabla na baada.", exceeds: "Ameandika lini na wapi kila ujuzi unamfaa zaidi." },
      { name: "Tabia za kila siku", objective: "O3", notYet: "Tabia hazijaeleweka au hazina muda.", meets: "Tabia mbili ndogo zenye saa au kikumbusho kwa kila moja.", exceeds: "Tabia zimejaribiwa kwa angalau siku chache." },
      { name: "Watu wa msaada na msaada wa kitaalamu", objective: "O4", notYet: "Hakuna watu walioorodheshwa, au hakuna njia ya kuwafikia.", meets: "Watu wawili na jinsi ya kuwafikia, na sehemu moja ya kupata msaada wa kitaalamu.", exceeds: "Mwanafunzi tayari ameongea na mmoja wao." },
      { name: "Namba za dharura", objective: "O5", notYet: "Namba za dharura hazipo au si sahihi kwa mahali anapoishi.", meets: "988 (na 988 kisha bonyeza 1 kwa wanajeshi wastaafu) au laini ya dharura ya eneo lake na namba ya dharura zimo katika mpango na zimehifadhiwa kwenye simu.", exceeds: "Pia anajua maneno ya kumuuliza rafiki moja kwa moja kuhusu kujiua." },
      { name: "Mpango uko karibu", objective: "O6", notYet: "Mpango umekosa sehemu au haujahifadhiwa.", meets: "Sehemu zote sita katika ukurasa mmoja, umewekwa kwenye karatasi na kwenye simu.", exceeds: "Amemshirikisha mtu anayemwamini." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaoripoti kutumia ujuzi wa kutuliza au mpango wao wa kukabiliana na msongo ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi walio na namba za dharura zimehifadhiwa kwenye simu zao baada ya siku 30",
      "Wanafunzi waliomfikia mtu wa msaada au mtaalamu ndani ya siku 30",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya ujuzi wa maisha ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya kuhifadhi namba za dharura na mpango",
      "Karatasi na kalamu kwa kumbukumbu ya msongo na mpango wa kukabiliana na msongo",
      "Mahali tulivu kwa mazoezi ya kupumua",
      "Kama dakika 60 kwa jumla, pamoja na siku moja kwa kumbukumbu ya msongo"
    ],
    facilitatorNotes: [
      "Toa namba za dharura mwanzoni mwa kila kipindi: 988 nchini Marekani (988 kisha bonyeza 1 kwa wanajeshi wastaafu) au laini ya dharura ya eneo lako na namba ya dharura.",
      "Kuwa na mpango kwa mwanafunzi aliye na dhiki: jua laini ya dharura ya eneo lako na nani mahali hapo anaweza kusaidia, na kamwe usimwache peke yake mtu aliye hatarini.",
      "Usiwaombe wanafunzi kusoma kwa sauti kumbukumbu zao za msongo au mipango yao; kushiriki ni hiari daima.",
      "Wakumbushe wanafunzi kwamba kozi hii haitambui ugonjwa wala haitibu; wahimize kumwona daktari au mshauri nasaha msongo usipoondoka.",
      "Fanyeni mazoezi ya kupumua na kujituliza kwa hisia pamoja, na waambie wanafunzi waache na wapumue kawaida wakihisi kizunguzungu."
    ]
  }
};
