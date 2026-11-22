"use strict";

// Koach Learn course (Swahili translation of shared/personal-finance-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "personal-finance-basics-sw",
  lang: "sw",
  translationOf: "personal-finance-basics",
  category: "Seniors and Technology",
  name: "Misingi ya Fedha Binafsi: Bajeti, Mikopo na Kuweka Akiba",
  skills: "Kuandika bajeti ya mwezi, Kusoma ripoti yako ya mikopo, Kupanga kulipa madeni, Kujenga akiba ya dharura, Kuweka akiba benki au kwa pesa za simu, Kutambua mikopo ya kunyonya na ulaghai",
  outcome: "kuandika mpango wa pesa wa ukurasa mmoja: bajeti ya mwezi, mpango wa kulipa madeni, lengo la akiba ya dharura na tarehe ya kukagua ripoti zako za mikopo, na kutambua mkopo au ofa inayoweza kukunasa.",
  about: [
    "Kozi hii ni kwa yeyote anayetaka kusimamia pesa zake vizuri zaidi: bibi au babu mwenye kipato kisichobadilika, kijana aliyepata mshahara wake wa kwanza, mkulima anayelipwa wakati wa mavuno, mwanamichezo mwenye mdhamini mpya, mwanajeshi mstaafu anayeanza kazi ya kiraia, au mtu anayerudi nyumbani na kuanza upya.",
    "Utaandika bajeti rahisi, utasoma ripoti yako ya mikopo, utachagua deni la kulipa kwanza, utaanza akiba ya dharura, utajifunza njia salama za kuweka akiba benki, katika chama cha ushirika cha mikopo (credit union) au kwa pesa za simu, na utajifunza dalili za hatari za mikopo ya haraka ya aina ya payday na ulaghai wa pesa.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\" unayoifanya kwa namba zako mwenyewe kwenye karatasi au kwenye spreadsheet (jedwali la kompyuta). Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kozi hii inafundisha ujuzi wa pesa; si ushauri wa uwekezaji. Kwa maamuzi makubwa, zungumza na mtu unayemwamini mwenye ujuzi, kama mshauri wa madeni wa shirika lisilo la faida."
  ],
  finalTask: "Andika mpango wa pesa wa ukurasa mmoja: (1) bajeti ya mwezi yenye kipato chako, mahitaji, matakwa na akiba; (2) orodha ya madeni yako na lile utakalolipa ziada; (3) lengo la akiba ya dharura, kiasi utakachoweka kila wiki au mwezi, na mahali; (4) tarehe utakayokagua ripoti zako za mikopo. Kisha soma ofa moja ya mkopo au ya pesa uliyowahi kuiona na uandike dalili zozote za hatari.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Yeyote anayetaka kusimamia pesa zake vizuri zaidi: wazee wenye kipato kisichobadilika, vijana wenye mshahara wa kwanza, wakulima wanaolipwa wakati wa mavuno, wanamichezo wenye mdhamini mpya, wanajeshi wastaafu wanaoanza kazi za kiraia na watu wanaorudi nyumbani na kuanza upya.",
    startingPoint: "Wanapata au wanapokea pesa fulani na wanalipa bili, lakini wengi hawaandiki bajeti, hawajawahi kusoma ripoti yao ya mikopo, wana madeni bila mpango wa kuyalipa, wana akiba ndogo ya dharura, au wanapata shida kutambua mkopo wa kunyonya au ulaghai.",
    gap: "Bila mpango, matatizo madogo ya ghafla yanageuka kuwa madeni, malipo yaliyokosekana na ulaghai unaogharimu familia pesa na kuwaletea msongo. Wanafunzi wanahitaji mpango rahisi wa pesa wa ukurasa mmoja na tabia ya kukagua ofa, ili waendelee kusimamia pesa zao na kujenga akiba.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi, pamoja na hesabu rahisi",
      "Si ushauri wa uwekezaji; maamuzi makubwa yapelekwe kwa mtu unayemwamini mwenye ujuzi, kama mshauri wa madeni wa shirika lisilo la faida",
      "Faragha: hakuna namba za akaunti ya benki, namba za kadi wala nywila katika zana za AI au darasani",
      "Sheria na ada zinatofautiana kwa nchi na kwa mtoa huduma; wanafunzi wanakagua majedwali rasmi ya ada na vyanzo rasmi",
      "Vifaa: karatasi au spreadsheet ya bure; baadhi ya wanafunzi wanatumia pesa za simu"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia kipato na gharama za mwezi uliopita", action: "kuandika bajeti ya mwezi inayopanga gharama katika mahitaji, matakwa na akiba", standard: "ikiwa na mstari wa akiba na jumla imekaguliwa kama iko juu au chini ya sifuri" },
    { id: "O2", condition: "Ukitumia ripoti ya mikopo ya bure (AnnualCreditReport.com nchini Marekani)", action: "kukagua kila akaunti kwenye ripoti yako ya mikopo na kupinga makosa yoyote", standard: "ukihifadhi nakala za chochote unachotuma" },
    { id: "O3", condition: "Ukipewa orodha ya madeni", action: "kuchagua deni la kulipa ziada kwa njia ya riba kubwa zaidi kwanza au deni dogo zaidi kwanza", standard: "huku ukilipa angalau kiwango cha chini cha kila deni kwa wakati" },
    { id: "O4", condition: "Ukitumia bajeti yako", action: "kuweka lengo la akiba ya dharura lenye kiasi, siku na njia ya kuweka akiba kiotomatiki", standard: "likiongezwa kama mstari katika bajeti yako" },
    { id: "O5", condition: "Ukipewa benki, chama cha ushirika cha mikopo, huduma ya pesa za simu au kikundi cha akiba", action: "kukagua ada na sheria kabla ya kuchagua mahali salama pa kuweka akiba", standard: "ukiandika gharama ya kuweka pesa na ya kuzitoa" },
    { id: "O6", condition: "Ukipewa ofa ya mkopo au ya pesa", action: "kutambua dalili za hatari za mkopo wa kunyonya au ulaghai kabla ya kukubali", standard: "ukipata kila dalili ya hatari katika ofa hiyo" }
  ],
  chapters: [
    {
      name: "Sura 1: Jua pesa zako zinakwenda wapi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika bajeti rahisi ya mwezi",
          minutes: 5,
          goal: "Andika bajeti ya mwezi inayoonyesha kipato chako, mahitaji, matakwa na akiba.",
          text: [
            "Bajeti ni mpango wa pesa zako. Inajibu maswali mawili: ni pesa ngapi zinaingia kila mwezi, na zinakwenda wapi. Bila mpango, pesa huwa zinapotea kwa vitu vidogo, na bili kubwa zinakushtua.",
            "Anza na kipato: mshahara baada ya kodi, mafao kama Social Security (pensheni ya serikali ya Marekani) au pensheni, pesa kutokana na kuuza mazao au bidhaa, bakshishi, au malipo ya mdhamini. Kipato chako kikibadilika kila mwezi, tumia mwezi wa kawaida wenye kipato kidogo, ili mpango ufanye kazi hata mwezi mgumu.",
            "Kisha orodhesha matumizi yako katika makundi matatu. Mahitaji ni yale lazima ulipe: makazi, chakula, umeme na maji, usafiri, dawa, malipo ya chini ya madeni. Matakwa ni mazuri lakini si ya lazima: kula hotelini, nguo mpya, huduma za kutazama video mtandaoni. Akiba ni pesa unazoweka kando kwa makusudi. Weka akiba katika mpango kama bili, hata ikiwa ndogo.",
            "Matumizi yakizidi kipato, punguza matakwa kwanza, kisha tafuta njia nafuu zaidi za kupata mahitaji. Msaidizi wa AI anaweza kukusaidia kutengeneza jedwali tupu la bajeti au kupendekeza njia za kupunguza gharama, lakini andika kiasi cha makadirio tu, kamwe usiandike namba za akaunti au nywila."
          ],
          steps: ["Andika jumla ya kipato chako cha mwezi baada ya kodi. Kikibadilika, tumia mwezi wa kipato kidogo.", "Orodhesha mahitaji yako na gharama ya kila moja kwa mwezi.", "Orodhesha matakwa yako na gharama ya kila moja kwa mwezi.", "Chagua kiasi cha akiba, hata kidogo.", "Toa mahitaji, matakwa na akiba kutoka kwenye kipato. Jibu likiwa chini ya sifuri, punguza matakwa kwanza.", "Kagua mpango mwishoni mwa mwezi na urekebishe."],
          words: [["Bajeti", "mpango wa jinsi utakavyotumia pesa unazopata kila mwezi."], ["Kipato", "pesa zinazoingia: mshahara, mafao, mauzo, bakshishi."], ["Mahitaji", "gharama lazima ulipe ili uishi na ufanye kazi, kama kodi ya nyumba, chakula na dawa."], ["Matakwa", "vitu vizuri kuwa navyo lakini unaweza kuishi bila hivyo."]],
          slides: [
            { title: "Bajeti ni mpango wa pesa zako", bullets: ["Ni pesa ngapi zinaingia", "Zinakwenda wapi", "Bili hazikushtui tena"] },
            { title: "Anza na kipato", bullets: ["Mshahara baada ya kodi, mafao, mauzo, bakshishi", "Kikibadilika, panga kwa mwezi wa kipato kidogo"] },
            { title: "Makundi matatu ya matumizi", bullets: ["Mahitaji: makazi, chakula, usafiri, dawa", "Matakwa: kula hotelini, ziada, usajili wa huduma", "Akiba: iweke kando kama bili"] },
            { title: "Hesabu isipotosha", bullets: ["Punguza matakwa kwanza", "Tafuta njia nafuu zaidi za kupata mahitaji", "AI inaweza kuchora jedwali; kamwe usiandike namba za akaunti"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Consumer tools and money guides", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          tryIt: "Kwenye karatasi au kwenye spreadsheet ya bure (Google Sheets au Excel), andika kipato cha mwezi uliopita na kila gharama unayoikumbuka. Weka alama M kwa hitaji au T kwa takwa kwa kila gharama, ongeza mstari wa akiba, na utoe. Jibu lako liko juu au chini ya sifuri?",
          youCanNow: "kuandika bajeti ya mwezi yenye kipato, mahitaji, matakwa na akiba, na kuona kama hesabu inatosha.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi ni takwa, si hitaji?", options: ["Kodi ya nyumba", "Dawa ya kila siku", "Huduma mpya ya kutazama video mtandaoni", "Nauli ya basi kwenda kazini"], answer: 2, why: "Huduma ya kutazama video ni nzuri kuwa nayo; kodi ya nyumba, dawa na usafiri wa kwenda kazini ni mahitaji." },
            { objective: "O1", q: "Bajeti yako inaonyesha unatumia zaidi ya unachopata. Ungefanya nini kwanza?", options: ["Kupunguza baadhi ya matakwa", "Kuacha kulipa kodi ya nyumba", "Kuchukua mkopo wa payday", "Kutupa bajeti"], answer: 0, why: "Bajeti ikiwa chini ya sifuri, matakwa ndiyo mahali pa kwanza pa kupunguza." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusoma ripoti yako ya mikopo na alama yako ya mikopo",
          minutes: 5,
          goal: "Pata ripoti zako za mikopo za bure na uzikague kama zina makosa.",
          text: [
            "Nchini Marekani, ripoti ya mikopo ni kumbukumbu ya jinsi ulivyokopa na kulipa: mikopo, kadi za mkopo, baadhi ya bili, na akaunti zilizopelekwa kwa wakusanyaji wa madeni. Wakopeshaji, wenye nyumba na baadhi ya waajiri huiangalia. Alama ya mikopo (credit score) ni namba inayotokana na ripoti hiyo inayojaribu kutabiri kama utalipa kwa wakati.",
            "Unaweza kupata ripoti zako za mikopo bure kutoka kampuni tatu za nchi nzima, Equifax, Experian na TransUnion, kwenye AnnualCreditReport.com au kwa kupiga (877) 322-8228. Consumer Financial Protection Bureau (CFPB, ofisi ya serikali ya Marekani inayolinda watumiaji wa huduma za fedha) inasema sasa unaweza kuzipata bure mara moja kwa wiki. Kukagua ripoti yako mwenyewe hakushushi alama yako.",
            "Kuwa mwangalifu: baadhi ya tovuti zinasema \"free credit report\" (ripoti ya mikopo ya bure) lakini kisha zinakuandikisha katika huduma za kulipia. Tumia AnnualCreditReport.com.",
            "Soma kila ripoti na utafute chochote kisicho chako: akaunti ambayo hukuwahi kufungua, malipo yanayoonyeshwa kuchelewa ingawa ulilipa kwa wakati, deni lililoandikwa mara mbili, au jina au anwani isiyo sahihi. Una haki ya kupinga makosa kwa kampuni ya ripoti za mikopo na kwa biashara iliyoyaripoti. Kulipa kwa wakati, kuweka salio la kadi chini na kutofungua akaunti nyingi mpya kwa wakati mmoja, vyote vinasaidia alama yako kadri muda unavyokwenda."
          ],
          steps: ["Nenda AnnualCreditReport.com (andika anwani wewe mwenyewe) au piga (877) 322-8228.", "Omba ripoti zako kutoka Equifax, Experian na TransUnion.", "Kagua jina lako, anwani na kila akaunti.", "Zungushia mstari chochote usichokitambua au kilicho kosa.", "Pinga makosa kwa kampuni ya ripoti za mikopo, na uhifadhi nakala za unachotuma."],
          words: [["Ripoti ya mikopo", "kumbukumbu ya jinsi ulivyokopa pesa na kuzilipa."], ["Alama ya mikopo", "namba inayotokana na ripoti yako ya mikopo ambayo wakopeshaji wanaitumia kupima hatari."], ["Kupinga (dispute)", "kuiambia kampuni ya ripoti za mikopo kwamba kitu kwenye ripoti yako si sahihi na kuiomba ikirekebishe."], ["Wakusanyaji wa madeni (collections)", "deni linapopelekwa kwa kampuni inayojaribu kukusanya pesa ambazo hazijalipwa."]],
          slides: [
            { title: "Ripoti na alama", bullets: ["Ripoti: historia yako ya kukopa na kulipa", "Alama: namba inayotokana na ripoti", "Wakopeshaji, wenye nyumba na baadhi ya waajiri huiangalia"] },
            { title: "Pata ripoti zako bure", bullets: ["AnnualCreditReport.com au (877) 322-8228", "Equifax, Experian na TransUnion", "Kukagua ripoti yako mwenyewe hakushushi alama yako"] },
            { title: "Tafuta makosa", bullets: ["Akaunti ambazo hukuwahi kufungua", "Malipo ya kuchelewa yasiyo kweli au yaliyoandikwa mara mbili", "Jina au anwani isiyo sahihi"] },
            { title: "Saidia alama yako kadri muda unavyokwenda", bullets: ["Lipa kila bili kwa wakati", "Weka salio la kadi chini", "Pinga makosa na uhifadhi nakala"] }
          ],
          sources: [
            { name: "CFPB: How do I get a free copy of my credit reports?", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-free-copy-of-my-credit-reports-en-5/" },
            { name: "CFPB: Credit reports and scores", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
            { name: "AnnualCreditReport.com", url: "https://www.annualcreditreport.com/" }
          ],
          tryIt: "Ukiishi Marekani, omba angalau ripoti moja ya mikopo ya bure kwenye AnnualCreditReport.com na ukague kila akaunti iliyomo. Ukiwa nje ya Marekani, tafuta kama nchi yako ina ofisi ya kumbukumbu za mikopo (credit bureau) na jinsi ya kuomba ripoti yako kutoka kwake. Andika kitu kimoja ulichokagua na ulichokipata.",
          youCanNow: "kupata ripoti zako za mikopo za bure, kuzisoma kutafuta makosa, na kujua jinsi ya kupinga kosa.",
          quickCheck: [
            { objective: "O2", q: "Ripoti ya mikopo ni nini?", options: ["Orodha ya nywila zako za benki", "Bajeti yako ya mwezi", "Kumbukumbu ya mikopo yako, kadi zako na historia ya malipo", "Ritani yako ya kodi"], answer: 2, why: "Ripoti ya mikopo inaorodhesha akaunti zako za mikopo na jinsi ulivyozilipa." },
            { objective: "O2", q: "Ripoti yako ya mikopo inaonyesha anwani ambayo hukuwahi kuishi. Ungefanya nini?", options: ["Kuipuuza", "Kuipinga kwa kampuni ya ripoti za mikopo na kuhifadhi nakala", "Kufunga akaunti zako zote", "Kumlipa mtu usiyemjua airekebishe"], answer: 1, why: "Makosa kwenye ripoti ya mikopo yanapaswa kupingwa, na nakala zihifadhiwe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga kulipa madeni",
          minutes: 5,
          goal: "Orodhesha madeni yako na uchague lipi la kulipa ziada kwanza.",
          text: [
            "Ni rahisi kushinda madeni ukiyaona yote. Andika orodha ya kila deni: unamdai nani, kiasi gani, riba, malipo ya chini na tarehe ya mwisho ya kulipa. Weka kadi za mkopo, kadi za maduka, mikopo ya gari, bili za hospitali, mikopo kutoka kwa familia, na mkopo wowote uliochukuliwa kupitia app ya simu.",
            "Kila wakati lipa angalau kiwango cha chini cha kila deni, kwa wakati. Malipo ya kuchelewa yanaongeza ada na yanaweza kudhuru alama yako ya mikopo. Kisha weka pesa yoyote ya ziada kwenye deni moja tu kwa wakati.",
            "Kuna njia mbili zinazojulikana za kuchagua. Njia ya riba kubwa kwanza inalipa ziada kwenye deni lenye riba kubwa zaidi, na kwa kawaida inaokoa pesa nyingi zaidi. Njia ya deni dogo kwanza inamaliza deni dogo zaidi kwanza, inakupa ushindi wa haraka na inawapa watu wengi nguvu ya kuendelea. Njia zote mbili zinafanya kazi ukiendelea nazo. Deni moja likiisha, hamishia malipo yake kwenye deni linalofuata.",
            "Usipoweza kulipa, mpigie mkopeshaji kabla ya tarehe ya mwisho na uulize kuhusu njia mbadala. Mshauri wa madeni wa shirika lisilo la faida anaweza pia kukusaidia kupanga. Jihadhari na kampuni zinazoomba ada kubwa mapema ili \"kufuta\" deni lako."
          ],
          steps: ["Orodhesha kila deni: nani, kiasi gani, riba, malipo ya chini, tarehe ya mwisho.", "Weka njia ya kulipa kila kiwango cha chini kwa wakati, kama vikumbusho.", "Chagua deni moja la malipo ya ziada: riba kubwa zaidi au deni dogo zaidi.", "Likiisha, ongeza malipo yake kwenye deni linalofuata.", "Ukijua utakosa malipo, mpigie mkopeshaji kabla ya tarehe ya mwisho."],
          words: [["Riba", "bei ya kukopa, inayoonyeshwa kama asilimia ya unachodaiwa."], ["Malipo ya chini", "kiasi kidogo kabisa lazima ulipe kila mwezi ili usichelewe."], ["Salio la deni", "kiasi ambacho bado unadaiwa."]],
          slides: [
            { title: "Ona madeni yako yote", bullets: ["Unamdai nani na kiasi gani", "Riba, malipo ya chini na tarehe ya mwisho", "Weka mikopo ya app za simu na ya familia"] },
            { title: "Kanuni mbili", bullets: ["Lipa kila kiwango cha chini kwa wakati", "Weka pesa ya ziada kwenye deni moja kwa wakati"] },
            { title: "Deni lipi kwanza?", bullets: ["Riba kubwa kwanza: kwa kawaida inaokoa zaidi", "Deni dogo kwanza: ushindi wa haraka", "Limeisha? Hamishia malipo yake kwenye linalofuata"] },
            { title: "Umekwama?", bullets: ["Mpigie mkopeshaji kabla ya tarehe ya mwisho", "Uliza mshauri wa madeni wa shirika lisilo la faida", "Jihadhari na ada kubwa za mapema za kufuta deni"] }
          ],
          sources: [{ name: "CFPB: Debt collection and managing debt", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" }],
          tryIt: "Tengeneza jedwali la madeni yako (au mfano wa kubuni kama huna madeni) lenye nani, salio, riba, malipo ya chini na tarehe ya mwisho. Zungushia mstari deni ambalo ungelipa ziada kwa njia ya riba kubwa kwanza, na lile la njia ya deni dogo kwanza.",
          youCanNow: "kuorodhesha madeni yako, kulipa viwango vya chini kwa wakati, na kuchagua deni la kulipa ziada kwanza.",
          quickCheck: [
            { objective: "O3", q: "Njia ya deni dogo kwanza ya kulipa madeni inamaanisha nini?", options: ["Kulipa deni dogo zaidi tu na kuacha mengine", "Kulipa ziada kwenye deni lenye salio dogo zaidi huku ukilipa viwango vya chini vya mengine", "Kulipa kiasi sawa cha ziada kwenye kila deni", "Kutolipa chochote hadi uwe na pesa zaidi"], answer: 1, why: "Unalipa viwango vya chini vya yote na kuweka ziada kwenye salio dogo zaidi ili upate ushindi wa haraka." },
            { objective: "O3", q: "Unajua utakosa malipo ya mkopo wiki ijayo. Ungefanya nini?", options: ["Kujificha kwa mkopeshaji", "Kusubiri hadi akupigie", "Kuchukua mkopo mpya kuulipa", "Kumpigia mkopeshaji kabla ya tarehe ya mwisho na kuuliza kuhusu njia mbadala"], answer: 3, why: "Kupiga simu mapema kunakupa njia mbadala nyingi zaidi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jua pesa zako zinakwenda wapi",
        questions: [
          { objective: "O1", q: "Kipato chako kinabadilika kila mwezi. Upange bajeti yako kwa kiasi gani?", options: ["Mwezi wako bora zaidi", "Kiasi unachotumaini kwa wastani mwaka ujao", "Mwezi wa kawaida wenye kipato kidogo", "Kiasi chochote marafiki zako wanachopata"], answer: 2, why: "Kupanga kwa mwezi wa kipato kidogo kunamaanisha bajeti bado inafanya kazi pesa zikiwa chache." },
          { objective: "O1", q: "Kipi kati ya hivi ni hitaji, si takwa?", options: ["Dawa unayotumia kila siku", "Huduma ya kutazama video mtandaoni", "Kula hotelini kila Ijumaa", "Kava mpya ya simu"], answer: 0, why: "Dawa ni kitu lazima ulipie ili ubaki na afya." },
          { objective: "O2", q: "Watu walio Marekani wanaweza kupata ripoti zao za mikopo bure wapi?", options: ["Tovuti yoyote inayoonyesha tangazo la ripoti za bure", "Kiungo kilicho kwenye ujumbe mfupi", "Tovuti ya mkusanyaji wa madeni", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com ndicho chanzo rasmi cha bure cha ripoti kutoka kampuni hizo tatu." },
          { objective: "O2", q: "Unakuta kwenye ripoti yako kadi ya mkopo ambayo hukuwahi kufungua. Unafanya nini?", options: ["Kuipuuza", "Kuipinga kwa kampuni ya ripoti za mikopo na kuhifadhi nakala", "Kuilipa ili iondoke", "Kufunga akaunti yako ya benki"], answer: 1, why: "Una haki ya kupinga makosa; akaunti ambayo hukuifungua inaweza pia kuwa wizi wa utambulisho." },
          { objective: "O3", q: "Unaweza kulipa ziada kidogo kwenye deni moja. Kwa njia ya riba kubwa kwanza, lipi linapata ziada?", options: ["Lile lenye salio dogo zaidi", "Lile lenye tarehe ya mwisho iliyo mbali zaidi", "Lile lenye riba kubwa zaidi", "Lile jipya zaidi"], answer: 2, why: "Kulipa riba kubwa zaidi kwanza kwa kawaida kunaokoa riba nyingi zaidi." }
        ]
      }
    },
    {
      name: "Sura 2: Jenga kinga yako ya usalama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuanza akiba ya dharura",
          minutes: 4,
          goal: "Weka lengo la akiba ya dharura na njia ya kiotomatiki ya kulifikia.",
          text: [
            "Akiba ya dharura ni pesa zilizowekwa kando kwa mambo ya ghafla tu: kutengeneza gari, bili ya daktari, pampu ya maji iliyoharibika, zamu ya kazi uliyoikosa au mwezi wa mauzo duni. Bila akiba hii, tatizo dogo linaweza kukusukuma kwenye deni la gharama kubwa.",
            "Anza kidogo. Consumer Financial Protection Bureau inasema hata kiasi kidogo kinatoa usalama fulani. Njia moja ya kuchagua lengo: fikiria gharama za ghafla ulizopata mwaka uliopita na zilikugharimu kiasi gani. Kisha chagua lengo la kwanza unaloweza kulifikia, na lengo kubwa zaidi baada ya hapo.",
            "Fanya kuweka akiba kuwe kiotomatiki. Weka uhamisho wa kawaida kwenda kwenye akiba siku ya mshahara, au muombe mwajiri wako agawe mshahara unaowekwa moja kwa moja benki kama anaruhusu. Weka marejesho ya kodi, zawadi za pesa taslimu au sehemu ya malipo ya mavuno moja kwa moja kwenye akiba.",
            "Weka pesa mahali salama lakini tofauti na pesa za matumizi, kama akaunti ya akiba benki au katika chama cha ushirika cha mikopo. Pesa taslimu nyumbani zinaweza kupotea au kuibwa. Amua mapema nini kinahesabika kama dharura, tumia akiba unapoihitaji, kisha uijenge tena."
          ],
          steps: ["Andika gharama za ghafla ulizopata mwaka uliopita.", "Chagua lengo la kwanza unaloweza kulifikia na lengo kubwa zaidi la baadaye.", "Weka uhamisho wa kiotomatiki au kiasi maalum unachoweka akiba kila siku ya mshahara.", "Weka akiba hii tofauti na pesa za matumizi ya kila siku.", "Andika nini kinahesabika kama dharura. Ukiitumia, ijenge tena."],
          words: [["Akiba ya dharura", "pesa zinazowekwa kwa ajili ya gharama zisizotarajiwa au kipato kilichopotea tu."], ["Uhamisho wa kiotomatiki", "malipo ambayo benki yako inahamisha kwa niaba yako siku maalum, bila wewe kufanya hivyo kila mara."], ["Chama cha ushirika cha mikopo (credit union)", "benki isiyo ya faida inayomilikiwa na wanachama wake."]],
          slides: [
            { title: "Ni ya nini", bullets: ["Matengenezo, bili za daktari, kipato kilichopotea", "Inazuia matatizo madogo yasiwe madeni makubwa"] },
            { title: "Chagua lengo", bullets: ["Angalia gharama za ghafla za mwaka uliopita", "Anza kidogo, kisha ikuze", "Hata kidogo kinasaidia"] },
            { title: "Ifanye iwe kiotomatiki", bullets: ["Hamisha pesa siku ya mshahara", "Gawa mshahara unaowekwa benki kama inaruhusiwa", "Weka akiba marejesho ya kodi, zawadi na sehemu ya pesa za mavuno"] },
            { title: "Iweke salama na tofauti", bullets: ["Akaunti ya akiba benki au credit union", "Pesa taslimu nyumbani zinaweza kupotea au kuibwa", "Itumie, kisha uijenge tena"] }
          ],
          sources: [{ name: "CFPB: An essential guide to building an emergency fund", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }],
          tryIt: "Andika lengo lako la kwanza la akiba ya dharura, kiasi utakachoweka kila wiki au mwezi, siku utakayoweka, na mahali utakapoiweka. Iongeze kama mstari katika bajeti yako ya Somo la 1.",
          youCanNow: "kuweka lengo la akiba ya dharura, kuweka akiba kuelekea lengo hilo kiotomatiki, na kuiweka salama na tofauti.",
          quickCheck: [
            { objective: "O4", q: "Ni dharura ipi akiba ya dharura imekusudiwa?", options: ["Kutengeneza gari ambako hukutarajia", "Punguzo la bei la sikukuu", "Simu mpya unayoitaka", "Kutoka usiku kustarehe"], answer: 0, why: "Akiba ya dharura inalipia gharama zisizotarajiwa, si matakwa yaliyopangwa." },
            { objective: "O4", q: "Unasahau kuweka akiba kila mara. Ungefanya nini?", options: ["Kuweka akiba ya kinachobaki mwishoni mwa mwezi tu", "Kuacha kuweka akiba", "Kuweka uhamisho wa kiotomatiki siku ya mshahara", "Kuweka akiba kwenye pochi yako"], answer: 2, why: "Akiba ya kiotomatiki siku ya mshahara inatokea kabla pesa hazijatumika." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuweka akiba benki, kwa pesa za simu au katika kikundi cha akiba",
          minutes: 5,
          goal: "Chagua mahali salama pa kuweka akiba na ukague ada na sheria zake kabla ya kupatumia.",
          text: [
            "Mahali unapoweka akiba ni muhimu. Nchini Marekani, akaunti ya akiba benki au katika credit union yenye bima ya serikali kuu ni mojawapo ya mahali salama zaidi kwa pesa. Katika nchi nyingi, hasa Afrika, watu huweka akiba kwa pesa za simu, benki au SACCO, au katika kikundi cha akiba.",
            "Huduma za pesa za simu kama M-Pesa zinakuruhusu kuweka pesa kwenye simu yako, kuzituma na kulipa bili. Nyingi pia zina chaguo tofauti la akiba au akiba iliyofungwa, linalosaidia kutenganisha akiba na pesa za matumizi. Ada na riba zinatofautiana kwa kila huduma na hubadilika kadri muda unavyokwenda, kwa hiyo soma jedwali rasmi la ada kwenye app au kwenye tovuti ya mtoa huduma, au uliza kwa wakala rasmi, kabla ya kuhamisha pesa.",
            "Mfano: mkulima nchini Kenya analipwa kwa mahindi wakati wa mavuno. Anatuma sehemu ya malipo kwenye chaguo tofauti la akiba siku hiyo hiyo, kabla ya kutumia chochote, na anaacha zilizobaki kwa mbegu, ada za shule na chakula. Kwanza anakagua ada ya kila uhamisho katika jedwali rasmi la ada.",
            "Katika kikundi cha akiba, mara nyingi huitwa chama, kila mwanachama analipa kiasi maalum kwa ratiba. Andika kila malipo, hifadhi nakala ya sheria za kikundi, na jiunge tu na vikundi ambavyo wanachama wake unawajua na kuwaamini. Chochote unachotumia: kamwe usimpe mtu PIN yako, na jihadhari na yeyote anayekupigia akikuomba umrudishie pesa baada ya uhamisho \"uliokosewa\". Kagua salio lako kwanza."
          ],
          steps: ["Chagua mahali pa kuweka akiba: benki, credit union, SACCO, akiba ya pesa za simu au kikundi cha akiba unachokiamini.", "Tafuta jedwali rasmi la ada na sheria, kwenye app, kwenye tovuti rasmi au kwa wakala rasmi.", "Hamisha akiba siku ya mshahara au ya mavuno, kabla ya kutumia.", "Weka kumbukumbu ya maandishi ya kila pesa unayoweka.", "Kamwe usimpe mtu PIN yako, na kagua salio lako kabla ya kumrudishia mtu yeyote pesa."],
          words: [["Pesa za simu", "huduma inayokuruhusu kuhifadhi, kutuma na kupokea pesa kwa simu."], ["SACCO", "chama cha ushirika cha akiba na mikopo, kikundi kinachomilikiwa na wanachama kinachoweka akiba na kukopesha, kinachojulikana Afrika Mashariki."], ["Chama", "kikundi cha akiba, mara nyingi nchini Kenya, ambapo wanachama wanaweka akiba pamoja kwa ratiba."], ["PIN", "namba ya siri inayolinda akaunti yako. Kamwe usimpe mtu."]],
          slides: [
            { title: "Chagua mahali salama pa kuweka akiba", bullets: ["Marekani: akiba yenye bima benki au credit union", "Afrika: benki, SACCO, pesa za simu au kikundi cha akiba"] },
            { title: "Akiba ya pesa za simu", bullets: ["Tumia chaguo tofauti la akiba kama lipo", "Soma jedwali rasmi la ada kwanza", "Ada hubadilika: kagua kwenye app au kwa wakala"] },
            { title: "Weka akiba kwanza, kisha tumia", bullets: ["Hamisha akiba siku ya mshahara au ya mavuno", "Kisha lipia mbegu, ada za shule, chakula"] },
            { title: "Kaa salama", bullets: ["Kamwe usimpe mtu PIN yako", "Kagua salio lako kabla ya kurudisha pesa", "Jiunge tu na vikundi unavyovijua na kuviamini"] }
          ],
          sources: [
            { name: "CFPB: An essential guide to building an emergency fund (where to keep savings)", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }
          ],
          tryIt: "Chagua mahali utakapoweka akiba yako ya dharura. Tafuta jedwali lake rasmi la ada au sheria za akaunti na uandike gharama ya kuweka pesa na ya kuzitoa. Ukitumia pesa za simu, tafuta chaguo la akiba kwenye menyu ya app bila kuhamisha pesa yoyote bado.",
          youCanNow: "kuchagua mahali salama pa kuweka akiba, kukagua ada na sheria zake kwanza, na kulinda akaunti yako.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini uweke akiba ya dharura benki au credit union badala ya pesa taslimu nyumbani?", options: ["Ni salama zaidi dhidi ya wizi na kupotea", "Ni rahisi zaidi kuzitumia", "Benki zinakulipa ukitoa pesa", "Pesa taslimu nyumbani zinazaa zaidi"], answer: 0, why: "Akaunti inaweka akiba salama zaidi kuliko pesa taslimu nyumbani." },
            { objective: "O5", q: "Unapanga kutumia chaguo la akiba la pesa za simu. Ungefanya nini kwanza?", options: ["Kuhamisha pesa zako zote mara moja", "Kumuuliza mtu usiyemjua mtandaoni gharama yake", "Kudhani ni bure", "Kusoma jedwali rasmi la ada na sheria"], answer: 3, why: "Ada zinatofautiana na hubadilika, kwa hiyo kagua jedwali rasmi la ada kwanza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutambua mikopo ya kunyonya na ulaghai wa pesa",
          minutes: 5,
          goal: "Soma ofa ya mkopo au ya pesa na upate dalili za hatari kabla ya kukubali.",
          text: [
            "Mkopo wa kunyonya ni mkopo uliotengenezwa ili uendelee kulipa bila mwisho. Mikopo ya payday (mikopo midogo inayolipwa siku ya mshahara unaofuata), baadhi ya mikopo inayotumia hati ya gari kama dhamana na baadhi ya mikopo ya app za simu ni ya muda mfupi na ghali sana. Ada inaweza kuonekana ndogo, lakini kama kiwango cha riba cha mwaka (APR) gharama inaweza kuwa kubwa sana, na watu wengi huuhuisha mkopo tena na tena. Kabla ya kukopa, angalia APR na kila ada, na ujiulize utaulipa vipi.",
            "Jua haki zako nchini Marekani: Consumer Financial Protection Bureau inasema huwezi kukamatwa kwa kutolipa mkopo wa payday, na mkopeshaji anaweza kuchukua sehemu ya mshahara wako kwa amri ya mahakama tu. Wanajeshi walio kazini wana ulinzi wa ziada chini ya Military Lending Act (sheria ya mikopo kwa wanajeshi). Unaweza pia kukagua kama mkopeshaji ana leseni katika jimbo lako.",
            "Ulaghai una dalili za hatari. Wanakuharakisha. Wanakuomba ulipe kwa kadi za zawadi (gift cards), uhamisho wa kielektroniki (wire transfer), sarafu za kidijitali (cryptocurrency) au uhamisho wa pesa za simu kwa mtu usiyemjua. Wanaahidi mkopo au ruzuku ukilipa ada kwanza. Wanasema umeshinda zawadi ya shindano ambalo hukuwahi kuingia. Wanaomba PIN yako, nywila au msimbo uliotumwa kwenye simu yako.",
            "Ukiona dalili: simama, usilipe, na ukague na kampuni halisi kwa kutumia namba unayoitafuta wewe mwenyewe. Zungumza na mtu unayemwamini. Njia nafuu kuliko mkopo wa kunyonya zinaweza kujumuisha kumwomba unayemdai muda zaidi, mkopo mdogo kutoka credit union, au msaada kutoka shirika lisilo la faida la eneo lako."
          ],
          steps: ["Tafuta APR na kila ada katika ofa.", "Uliza: nitaulipa vipi na lini, na nisipoweza je?", "Tafuta dalili za ulaghai: haraka, kadi za zawadi au wire, ada kwanza, zawadi, maombi ya PIN au msimbo.", "Simama na ukague na kampuni halisi kwa kutumia namba unayoitafuta wewe mwenyewe.", "Tafuta njia nafuu zaidi: muda zaidi kutoka kwa unayemdai, mkopo wa credit union, shirika lisilo la faida."],
          words: [["APR", "annual percentage rate (kiwango cha riba cha mwaka): gharama ya mkopo kwa mwaka, pamoja na ada, inayoonyeshwa kama asilimia. Inakuwezesha kulinganisha mikopo."], ["Mkopo wa payday", "mkopo mdogo wa muda mfupi, mara nyingi unaolipwa siku ya mshahara unaofuata, ambao unaweza kuwa ghali sana."], ["Kuhuisha mkopo (rollover)", "kuchukua mkopo mpya kulipa ule wa zamani, na kuongeza ada zaidi."], ["Mkopo wa kunyonya", "mkopo wenye gharama zisizo za haki au kubwa sana unaomnasa mkopaji."]],
          slides: [
            { title: "Mikopo inayokunasa", bullets: ["Payday, baadhi ya mikopo ya hati ya gari na ya app", "Ada ndogo, APR kubwa sana", "Kuhuisha mkopo kunaongeza ada zaidi"] },
            { title: "Kabla ya kukopa", bullets: ["Tafuta APR na ada zote", "Jua utaulipa vipi", "Marekani: kagua kama mkopeshaji ana leseni katika jimbo lako"] },
            { title: "Dalili za hatari za ulaghai", bullets: ["Wanakuharakisha", "Kadi za zawadi, wire, crypto au uhamisho kwa mtu usiyemjua", "Ada kwanza ili upate mkopo au zawadi", "Wanaomba PIN yako au msimbo"] },
            { title: "Njia bora zaidi", bullets: ["Muombe unayemdai muda zaidi", "Mkopo mdogo wa credit union", "Msaada wa shirika lisilo la faida la eneo lako"] }
          ],
          sources: [
            { name: "CFPB: Payday loans", url: "https://www.consumerfinance.gov/consumer-tools/payday-loans/" },
            { name: "CFPB: Fraud and scams", url: "https://www.consumerfinance.gov/consumer-tools/fraud/" }
          ],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa pesa wa ukurasa mmoja: bajeti yako ya Somo la 1, orodha yako ya madeni pamoja na deni utakalolipa ziada, lengo lako la akiba ya dharura na mahali unapoiweka, na tarehe utakayokagua ripoti zako za mikopo. Kisha soma ofa moja ya mkopo au ya pesa uliyowahi kuiona (ujumbe mfupi, tangazo au barua) na uandike kila dalili ya hatari unayoipata.",
          youCanNow: "kusoma ofa ya mkopo au ya pesa, kupata APR na dalili za hatari, na kuchagua njia salama zaidi.",
          quickCheck: [
            { objective: "O6", q: "Ni ipi dalili ya hatari katika ofa ya mkopo?", options: ["Inaonyesha APR waziwazi", "Inakuomba ulipe ada kwa kadi ya zawadi ili upate mkopo", "Inakupa muda wa kusoma masharti", "Inatoka kwa credit union yako"], answer: 1, why: "Ada za mapema zinazolipwa kwa kadi za zawadi ni dalili ya kawaida ya ulaghai." },
            { objective: "O6", q: "Ujumbe mfupi unasema \"Umeidhinishwa tayari! Jibu sasa au upoteze ofa hii leo.\" Ungefanya nini?", options: ["Kujibu mara moja", "Kutuma taarifa za benki yako ili kushikilia ofa", "Kuwatumia marafiki", "Kupunguza kasi na kumkagua mkopeshaji kupitia chanzo rasmi kabla ya kujibu"], answer: 3, why: "Shinikizo la kuchukua hatua sasa ni dalili ya hatari; kagua kabla ya kujibu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Jenga kinga yako ya usalama",
        questions: [
          { objective: "O4", q: "Akiba ya dharura ni ya nini?", options: ["Manunuzi ya sikukuu", "Gharama zisizotarajiwa kama matengenezo au kipato kilichopotea", "Kununua tiketi za bahati nasibu", "Kuwakopesha marafiki"], answer: 1, why: "Akiba ya dharura inawekwa kwa mambo ya ghafla na kipato kilichopotea tu." },
          { objective: "O4", q: "Ni njia ipi bora ya kuendelea kuweka akiba kila mwezi?", options: ["Kuweka akiba ya kinachobaki mwishoni mwa mwezi", "Kuweka pesa kwenye pochi yako", "Kusubiri nyongeza kubwa ya mshahara kwanza", "Kuweka uhamisho wa kiotomatiki siku ya mshahara"], answer: 3, why: "Akiba ya kiotomatiki inatokea kabla pesa hazijatumika." },
          { objective: "O5", q: "Kabla ya kutumia chaguo la akiba la pesa za simu, unapaswa kukagua nini?", options: ["Jedwali rasmi la ada na sheria", "Anachosema mtu usiyemjua kwenye mitandao ya kijamii", "Hakuna; ni bure kila wakati", "PIN ya jirani yako"], answer: 0, why: "Ada na sheria zinatofautiana kwa huduma na hubadilika, kwa hiyo kagua chanzo rasmi kwanza." },
          { objective: "O6", q: "Mtu anakutumia ujumbe kwamba amekutumia pesa kwa makosa na anakuomba uzirudishe sasa. Unafanya nini kwanza?", options: ["Kuzirudisha mara moja", "Kumpa PIN yako ili arekebishe", "Kukagua salio lako halisi wewe mwenyewe kabla ya kufanya chochote", "Kutuma mara mbili ili uwe mwema"], answer: 2, why: "Huu ni ulaghai wa kawaida; kagua salio lako mwenyewe na umuulize mtoa huduma wako." },
          { objective: "O6", q: "Mkopeshaji anasema utapata mkopo mara tu utakapolipa ada kwa kadi ya zawadi. Hii ni:", options: ["Mkopo wa kawaida wa benki", "Dalili ya hatari ya ulaghai", "Ruzuku ya serikali", "Ripoti ya mikopo"], answer: 1, why: "Kulipa ada kwanza, hasa kwa kadi ya zawadi, ni dalili ya ulaghai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Fedha Binafsi: Bajeti, Mikopo na Kuweka Akiba",
    questions: [
      { objective: "O1", q: "Bajeti ni:", options: ["Mpango wa pesa unazopata kila mwezi", "Aina ya mkopo", "Alama ya mikopo", "Ada ya benki"], answer: 0, why: "Bajeti inapanga pesa zako zinakwenda wapi." },
      { objective: "O1", q: "Kipi kinaingia katika kundi la akiba la bajeti?", options: ["Kodi ya nyumba", "Chakula cha kununua nje kila wiki", "Pesa zilizowekwa kando kwa akiba yako ya dharura", "Bili yako ya simu"], answer: 2, why: "Akiba ni pesa unazoweka kando kwa makusudi." },
      { objective: "O1", q: "Bajeti yako inatoka chini ya sifuri. Upunguze nini kwanza?", options: ["Dawa", "Matakwa", "Kodi ya nyumba", "Malipo ya chini ya madeni"], answer: 1, why: "Punguza matakwa kabla ya mahitaji." },
      { objective: "O1", q: "Ni nini HUPASWI kuandika kwa msaidizi wa AI unapotengeneza bajeti?", options: ["Gharama za mwezi za makadirio", "\"Nitengenezee jedwali la bajeti\"", "\"Nipendekezee njia za kupunguza gharama\"", "Namba ya akaunti yako ya benki"], answer: 3, why: "Kamwe usitoe namba za akaunti au nywila kwa zana za AI." },
      { objective: "O2", q: "Alama ya mikopo ni nini?", options: ["Salio lako la benki", "Namba inayotokana na ripoti yako ya mikopo", "Kipato chako", "Ada ya mkopo"], answer: 1, why: "Alama ya mikopo inatokana na taarifa zilizo katika ripoti yako ya mikopo." },
      { objective: "O2", q: "Je, kukagua ripoti yako mwenyewe ya mikopo kunashusha alama yako?", options: ["Hapana", "Ndiyo, sana", "Ndiyo, kidogo kila mara", "Wikendi tu"], answer: 0, why: "CFPB inasema kuomba ripoti zako mwenyewe hakushushi alama yako." },
      { objective: "O2", q: "Ni kampuni zipi tatu zinazotoa ripoti za mikopo za nchi nzima nchini Marekani?", options: ["Visa, Mastercard, Discover", "Social Security, IRS, Medicare", "Chase, Wells Fargo, Citi", "Equifax, Experian, TransUnion"], answer: 3, why: "Hizi ndizo kampuni tatu za nchi nzima zinazotoa ripoti za mikopo." },
      { objective: "O2", q: "Tovuti inatoa \"ripoti ya mikopo ya bure\" lakini inaomba kadi ili kuanza kipindi cha majaribio. Uchaguzi salama zaidi ni upi?", options: ["Kujiandikisha hata hivyo", "Kutoa namba ya kadi yako", "Kutumia AnnualCreditReport.com badala yake", "Kuwatumia marafiki kiungo"], answer: 2, why: "Baadhi ya tovuti zinakuandikisha katika huduma za kulipia; AnnualCreditReport.com ndicho chanzo rasmi cha bure." },
      { objective: "O2", q: "Ripoti yako inaonyesha malipo ya kuchelewa ambayo unajua uliyalipa kwa wakati. Unapaswa:", options: ["Kusubiri yaondoke", "Kufungua kadi mpya", "Kupinga kosa hilo na kuhifadhi nakala", "Kuacha kulipa bili zote"], answer: 2, why: "Unaweza kupinga makosa kwa kampuni ya ripoti za mikopo na kwa biashara husika." },
      { objective: "O3", q: "Kwenye orodha yako ya madeni, unapaswa kulipa nini kila wakati kwa kila deni?", options: ["Hakuna hadi uweze kulipa lote", "Angalau kiwango cha chini, kwa wakati", "Lile kubwa zaidi tu", "Mara mbili ya salio"], answer: 1, why: "Kukosa viwango vya chini kunaongeza ada na kudhuru alama yako ya mikopo." },
      { objective: "O3", q: "Kwa nini mtu anaweza kuchagua kulipa deni dogo zaidi kwanza?", options: ["Ushindi wa haraka unampa nguvu ya kuendelea", "Kila wakati inaokoa pesa nyingi zaidi", "Wakopeshaji wanalazimisha", "Inaondoa riba yote"], answer: 0, why: "Kumaliza deni dogo haraka kunatoa ushindi wa haraka; njia ya riba kubwa kwanza kwa kawaida inaokoa zaidi." },
      { objective: "O3", q: "Utakosa malipo ya gari wiki ijayo. Hatua bora ni ipi?", options: ["Kunyamaza na kutumaini", "Kuchukua mkopo wa payday", "Kubadilisha namba yako ya simu", "Kumpigia mkopeshaji kabla ya tarehe ya mwisho na kuuliza kuhusu njia mbadala"], answer: 3, why: "Wakopeshaji wanaweza kutoa njia mbadala ukipiga simu mapema." },
      { objective: "O4", q: "Lengo zuri la kwanza la akiba ya dharura ni:", options: ["Kiasi kikubwa sana usichoweza kufikia", "Kiasi kidogo unachoweza kufikia, kisha kikubwa zaidi", "Sifuri hadi utajirike", "Chochote jirani yako alicho nacho"], answer: 1, why: "Anza kidogo na uikuze; hata kidogo kinasaidia." },
      { objective: "O5", q: "Ni mahali gani salama zaidi pa kuweka akiba ya dharura kuliko pesa taslimu nyumbani?", options: ["Chini ya godoro", "Kwa mtu usiyemjua mtandaoni", "Akaunti ya akiba benki au credit union", "Katika pochi yako ya kila siku"], answer: 2, why: "Pesa taslimu zinaweza kupotea au kuibwa; akaunti zenye bima ni salama zaidi." },
      { objective: "O4", q: "Mkulima analipwa wakati wa mavuno. Ni tabia gani nzuri ya kuweka akiba?", options: ["Kutumia kwanza na kuweka akiba ya kinachobaki", "Kumkopesha binamu zote", "Kuziweka zote kama pesa taslimu nyumbani", "Kuhamisha sehemu kwenye akiba siku hiyo hiyo, kabla ya kutumia"], answer: 3, why: "Kuweka akiba kwanza, kabla ya kutumia, kunafanya mpango ufanye kazi." },
      { objective: "O5", q: "Ada za pesa za simu:", options: ["Zinatofautiana kwa huduma na hubadilika, kwa hiyo kagua jedwali rasmi la ada", "Ni sifuri kila wakati", "Ni sawa katika kila nchi", "Hazina umuhimu kamwe"], answer: 0, why: "Kagua ada za sasa kwenye app, kwenye tovuti rasmi au kwa wakala rasmi." },
      { objective: "O5", q: "Katika kikundi cha akiba (chama), nini kinakulinda zaidi?", options: ["Kulipa bila kumbukumbu", "Kujiunga na kikundi chochote mtandaoni", "Kumbukumbu za maandishi za kila malipo na nakala ya sheria", "Kuwapa wanakikundi PIN yako"], answer: 2, why: "Kumbukumbu na sheria zilizoandikwa zinamlinda kila mwanachama." },
      { objective: "O6", q: "APR inakuambia nini?", options: ["Alama yako ya mikopo", "Gharama ya mkopo kwa mwaka, pamoja na ada, kama asilimia", "Kiasi unachopata", "Anwani ya benki yako"], answer: 1, why: "APR inakuwezesha kulinganisha gharama halisi za mikopo." },
      { objective: "O6", q: "Nchini Marekani, unaweza kukamatwa kwa kutolipa mkopo wa payday?", options: ["Ndiyo, kila wakati", "Ndiyo, baada ya siku moja", "Wikendi tu", "Hapana"], answer: 3, why: "CFPB inasema huwezi kukamatwa kwa kushindwa kulipa mkopo wa payday." },
      { objective: "O6", q: "Ni njia ipi nafuu kuliko mkopo wa payday?", options: ["Mkopo mdogo kutoka credit union", "Kuhuisha mkopo wa payday", "Kumlipa mtu usiyemjua kwa kadi za zawadi", "Mkopo unaohitaji ada kwanza"], answer: 0, why: "Mikopo ya credit union na kuomba muda zaidi kwa kawaida vinagharimu kidogo zaidi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [2, 5, 7, 9, 12, 14, 15, 17, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Bajeti ya mwezi", objective: "O1", notYet: "Kipato au gharama zinakosekana, au hakuna mstari wa akiba.", meets: "Kipato, mahitaji, matakwa na akiba vimeorodheshwa na jumla imekaguliwa.", exceeds: "Anatumia mwezi wa kawaida wenye kipato kidogo na anaonyesha matakwa yapi yalipunguzwa." },
      { name: "Mpango wa madeni", objective: "O3", notYet: "Madeni yanakosekana, au hakuna deni lililochaguliwa kwa malipo ya ziada.", meets: "Madeni yote yameorodheshwa na salio, riba, malipo ya chini na tarehe ya mwisho, na moja limechaguliwa kwa malipo ya ziada.", exceeds: "Anaeleza kwa nini alichagua njia ya riba kubwa kwanza au deni dogo kwanza." },
      { name: "Akiba ya dharura", objective: "O4", notYet: "Hakuna lengo, au hakuna kiasi na siku.", meets: "Lengo, kiasi, siku na mahali pa kuweka akiba, vimeongezwa kwenye bajeti.", exceeds: "Akiba imepangwa kufanyika kiotomatiki." },
      { name: "Mahali salama pa akiba", objective: "O5", notYet: "Mahali palichaguliwa bila kukagua ada au sheria.", meets: "Ada za kuweka pesa na za kuzitoa zimeandikwa kutoka chanzo rasmi.", exceeds: "Alilinganisha njia mbili kabla ya kuchagua." },
      { name: "Tarehe ya ripoti ya mikopo", objective: "O2", notYet: "Hakuna tarehe ya kukagua ripoti za mikopo.", meets: "Tarehe ya kukagua ripoti za mikopo kutoka chanzo rasmi cha bure.", exceeds: "Tayari amekagua ripoti moja na kuandika alichokipata." },
      { name: "Dalili za hatari katika ofa", objective: "O6", notYet: "Alikosa dalili za hatari zilizo wazi katika ofa.", meets: "Anaorodhesha dalili za hatari katika ofa halisi.", exceeds: "Pia anataja njia salama zaidi, kama mkopo wa credit union." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaotumia bajeti iliyoandikwa baada ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi walioanza au kuongeza akiba ya dharura ndani ya siku 30",
      "Wanafunzi waliokagua ripoti yao ya mikopo ndani ya siku 60",
      "Wanafunzi wanaoripoti kuepuka mkopo wa kunyonya au ulaghai wa pesa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi na kalamu, au spreadsheet ya bure kama Google Sheets au Excel",
      "Kipato na bili za mwezi uliopita (zihifadhiwe kwa siri)",
      "Intaneti kwa AnnualCreditReport.com (Marekani) au ofisi ya kumbukumbu za mikopo ya nchi yako na majedwali ya ada",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kukusanya namba zako mwenyewe"
    ],
    facilitatorNotes: [
      "Waruhusu wanafunzi kutumia namba za kubuni darasani; kamwe usimwombe mtu yeyote aonyeshe salio halisi, namba za akaunti au ripoti za mikopo.",
      "Wakumbushe wanafunzi kwamba huu si ushauri wa uwekezaji na uwaelekeze kwa mshauri wa madeni wa shirika lisilo la faida kwa maamuzi makubwa.",
      "Kwa wanafunzi walio nje ya Marekani, wasaidie kupata ofisi ya kumbukumbu za mikopo ya nchi yao na majedwali rasmi ya ada za pesa za simu.",
      "Leta mifano halisi ya ofa za mikopo na za ulaghai kwa mazoezi ya kutambua dalili za hatari.",
      "Pima mpango wa pesa kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
