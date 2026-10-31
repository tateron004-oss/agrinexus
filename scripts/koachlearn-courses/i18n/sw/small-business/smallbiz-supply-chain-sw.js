"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-supply-chain.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-supply-chain-sw",
  lang: "sw",
  translationOf: "smallbiz-supply-chain",
  category: "Small Business",
  name: "Misingi ya Mnyororo wa Ugavi na Hesabu ya Bidhaa",
  skills: "Kuchora mnyororo wako wa ugavi, Kutafuta na kulinganisha wasambazaji, Kuagiza na kukagua oda, Kuhesabu bidhaa, Kuweka kiwango cha kuagiza tena na akiba ya usalama, Kutunza hesabu ya bidhaa kwenye spreadsheet kwa mtindo wa kinachoingia kwanza kinatoka kwanza",
  outcome: "kuchagua na kulinganisha wasambazaji, kuagiza na kukagua oda, kuhesabu bidhaa zako, kujua wakati wa kuagiza tena na kiasi cha akiba cha kuweka, na kutumia spreadsheet rahisi ya hesabu ya bidhaa inayofuata kinachoingia kwanza kinatoka kwanza.",
  about: [
    "Bidhaa yako inayouzika zaidi ikiisha, unapoteza mauzo na wateja. Ukinunua kupita kiasi, pesa zako zinakaa rafuni, na baadhi ya bidhaa zinaharibika au zinapitwa na wakati. Tabia nzuri za ugavi na hesabu ya bidhaa zinakusaidia kuwa na kiasi sahihi cha bidhaa sahihi.",
    "Kozi hii ni ya wamiliki na wafanyakazi wa biashara ndogo wanaonunua na kuuza bidhaa au wanaotumia vifaa: duka la mtaani, gari la chakula, saluni, kibanda cha mazao ya shamba, duka la mtandaoni au kampuni ya usafi. Utachora mnyororo wako wa ugavi, utatafuta na kulinganisha wasambazaji, utaagiza na kukagua oda, utahesabu bidhaa, utapiga hesabu ya kiwango cha kuagiza tena na akiba ya usalama, na utatengeneza spreadsheet rahisi inayokuonyesha wakati wa kuagiza tena.",
    "Unahitaji kalamu na karatasi tu, au spreadsheet ya bure kama Google Sheets au Microsoft Excel kwenye wavuti. Mifano inatumia namba rahisi, kwa hiyo unaweza kufuata hata kama hesabu si kitu unachopenda zaidi.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi unayoifanya papo hapo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza spreadsheet rahisi ya hesabu ya bidhaa kwa bidhaa tano unazonunua au kuuza, yenye safu za bidhaa, SKU, msambazaji mkuu, msambazaji wa akiba, gharama ya kipande, zilizopo, matumizi ya wastani kwa siku, muda wa kusubiri kwa siku, akiba ya usalama, kiwango cha kuagiza tena (kinachopigwa kwa fomula) na alama ya kuagiza tena, kisha uandike jinsi utakavyofuata kinachoingia kwanza kinatoka kwanza rafuni.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki na mameneja wa biashara ndogo zinazonunua na kuuza bidhaa au zinazotumia vifaa, kama maduka, maduka ya mtaani, mikahawa, saluni, wauzaji wa sokoni na wauzaji wa mtandaoni, wengi wao wakiwa wa jamii za wachache.",
    startingPoint: "Wananunua bidhaa na vifaa mara kwa mara na wanajua bidhaa zao zinazouzika zaidi. Wengi wanaagiza kwa mazoea au kwa kukumbuka, mara chache wanahesabu bidhaa kwa ratiba, na hawajawahi kutumia kiwango cha kuagiza tena wala hesabu ya bidhaa kwenye spreadsheet.",
    gap: "Bidhaa zinazouzika zaidi zikiisha, mauzo yanapotea, na kununua kupita kiasi kunafunga pesa na kuleta bidhaa zilizoharibika au zisizouzika. Wanafunzi wanahitaji tabia rahisi na spreadsheet inayowaambia waagize nini, lini na kiasi gani, na inayokamata makosa na hasara.",
    constraints: [
      "Hesabu za msingi: kuzidisha na fomula rahisi za spreadsheet, zinazoelezwa hatua kwa hatua",
      "Vifaa: simu au kompyuta yenye spreadsheet ya bure kama Google Sheets au Excel kwenye wavuti",
      "Muda: kama dakika 60 kwa jumla, na kuhesabu kunafanywa kwa ratiba ya mwanafunzi mwenyewe",
      "Hatari ya ulaghai kutoka kwa wasambazaji wapya wanaotaka uhamisho wa benki (wire transfer), kadi za zawadi au sarafu za kidijitali (crypto)",
      "Faragha: hakuna haja ya kuweka bei za wasambazaji au taarifa binafsi za biashara kwenye zana za AI"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa bidhaa zako tano kuu", action: "kuchora mnyororo wako wa ugavi na kutambua sehemu dhaifu", standard: "ukiwa na msambazaji wa akiba au akiba ya ziada iliyopangwa kwa kila sehemu dhaifu" },
    { id: "O2", condition: "Ukipewa bidhaa moja unayonunua", action: "kulinganisha wasambazaji watatu kwa gharama halisi ya kufika, oda ya chini kabisa, muda wa kusubiri, masharti ya malipo na uaminifu", standard: "ukiwa na nukuu ya bei iliyoandikwa kutoka kwa kila mmoja na dalili za hatari zimekaguliwa" },
    { id: "O3", condition: "Ukiwa na oda ya kuweka", action: "kuandika oda ya ununuzi na kukagua bidhaa zilizoletwa dhidi yake", standard: "kila tatizo likiandikwa kwenye hati ya kupokelea na kuripotiwa siku hiyo hiyo" },
    { id: "O4", condition: "Ukipewa bidhaa zako na kumbukumbu zako", action: "kuhesabu bidhaa zako na kupata tofauti na kumbukumbu zako", standard: "kila tofauti ikihesabiwa upya na mtu wa pili" },
    { id: "O5", condition: "Ukipewa matumizi ya kila siku ya bidhaa na muda wake wa kusubiri", action: "kupiga hesabu ya akiba yake ya usalama na kiwango cha kuagiza tena", standard: "ukipata kiwango cha kuagiza tena sahihi kwa kutumia fomula" },
    { id: "O6", condition: "Ukitumia spreadsheet ya bure", action: "kutengeneza jedwali la hesabu ya bidhaa linaloonyesha bidhaa za kuagiza tena, na kupanga jinsi ya kufuata kinachoingia kwanza kinatoka kwanza rafuni", standard: "kiwango cha kuagiza tena na hali vikipigwa kwa fomula" }
  ],
  chapters: [
    {
      name: "Sura 1: Wasambazaji na kuagiza",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchora mnyororo wako wa ugavi",
          minutes: 5,
          goal: "Chora mnyororo wa ugavi wa bidhaa zako kuu na uone mahali unapoweza kukatika.",
          text: [
            "Mnyororo wa ugavi ni kila hatua inayofikisha bidhaa kwa mteja wako: mtengenezaji, muuzaji wa jumla au msambazaji yeyote, usafirishaji, rafu au stoo yako, na mwisho mteja. Hata biashara ndogo ina mnyororo wake.",
            "Anza na bidhaa zako tano kuu: zile zinazoleta pesa nyingi zaidi au ambazo huwezi kufanya kazi bila hizo. Kwa kila moja, andika unanunua kutoka kwa nani, inakufikiaje, inachukua muda gani, na unaihifadhi wapi.",
            "Kisha tafuta sehemu dhaifu. Je, unanunua bidhaa muhimu kutoka kwa msambazaji mmoja tu? Inatoka mbali? Inaharibika haraka? Inapatikana kwa msimu tu? Sehemu dhaifu ndipo unapopaswa kuweka akiba ya ziada au kuandaa msambazaji wa akiba.",
            "Msaidizi wa AI anaweza kukusaidia kufikiria mambo yanayoweza kwenda vibaya kwa kila bidhaa, kama msambazaji kufunga biashara, bei kupanda ghafla au usafirishaji kuchelewa. Wewe ndiye unayeamua hatari zipi ni za kweli kwa biashara yako."
          ],
          steps: ["Orodhesha bidhaa zako tano kuu.", "Kwa kila moja, andika msambazaji, jinsi inavyosafirishwa, inachukua muda gani na unaihifadhi wapi.", "Chora mishale: msambazaji kwenda usafirishaji kwenda kwako kwenda kwa mteja.", "Zungushia sehemu dhaifu: msambazaji mmoja, umbali mrefu, inaharibika haraka, ya msimu.", "Andika suluhisho moja kwa kila sehemu dhaifu."],
          words: [["Mnyororo wa ugavi", "hatua zote zinazofikisha bidhaa kutoka kwa mtengenezaji hadi kwa mteja wako."], ["Msambazaji", "biashara unayonunua kutoka kwake bidhaa au malighafi."], ["Muuzaji wa jumla au msambazaji", "biashara inayonunua kwa wingi kutoka kwa watengenezaji na kuuzia biashara nyingine."], ["Sehemu dhaifu", "hatua ambapo kitu kinaweza kwenda vibaya kwa urahisi."]],
          slides: [
            { title: "Mnyororo wa ugavi ni nini", bullets: ["Mtengenezaji, muuzaji wa jumla, usafirishaji", "Rafu au stoo yako", "Mteja wako"] },
            { title: "Chora bidhaa zako tano kuu", bullets: ["Unanunua kutoka kwa nani", "Inakufikiaje na inachukua muda gani", "Unaihifadhi wapi"] },
            { title: "Tafuta sehemu dhaifu", bullets: ["Msambazaji mmoja tu", "Mbali au usafirishaji wa polepole", "Inaharibika haraka au ni ya msimu"] },
            { title: "Rekebisha sehemu dhaifu", bullets: ["Weka akiba kidogo ya ziada", "Andaa msambazaji wa akiba"] }
          ],
          tryIt: "Chora mnyororo wa ugavi wa bidhaa zako tano kuu kwenye ukurasa mmoja. Zungushia kila sehemu dhaifu na uandike suluhisho moja kando ya kila moja, kama kutafuta msambazaji wa akiba au kuweka akiba ya wiki moja zaidi.",
          youCanNow: "kuchora mnyororo wa ugavi wa bidhaa zako muhimu zaidi na kuonyesha mahali unapoweza kukatika.",
          quickCheck: [
            { objective: "O1", q: "Ni bidhaa zipi unapaswa kuchora kwanza?", options: ["Bidhaa zako tano kuu zinazoleta pesa nyingi zaidi au ambazo huwezi kufanya kazi bila hizo", "Kila bidhaa uliyowahi kuuza", "Bidhaa zilizo kwenye punguzo tu", "Bidhaa ambazo washindani wako wanauza"], answer: 0, why: "Anza na bidhaa zako tano kuu kwa pesa au umuhimu." },
            { objective: "O1", q: "Bidhaa yako muhimu inatoka mbali na inaharibika haraka. Unafanya nini?", options: ["Unapuuza", "Unaiweka alama kama sehemu dhaifu na kupanga msambazaji wa akiba au akiba ya ziada", "Unaacha kuiuza mara moja", "Unaiachia AI iamue hatari zipi ni za kweli"], answer: 1, why: "Sehemu dhaifu ndipo unapoweka akiba ya ziada au kuandaa msambazaji wa akiba; wewe ndiye unayeamua hatari zipi ni za kweli." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutafuta na kulinganisha wasambazaji",
          minutes: 6,
          goal: "Tafuta wasambazaji watatu wanaowezekana kwa bidhaa moja na uwalinganishe kwa zaidi ya bei.",
          text: [
            "Mahali pa kupata wasambazaji: watengenezaji na chapa (uliza nani anasambaza katika eneo lako), wauzaji wa jumla na wasambazaji, maonyesho ya biashara, vyama vya wafanyabiashara wa sekta, mashamba na watengenezaji wa karibu, na wamiliki wengine wa biashara katika kazi yako. Tafuta mtandaoni kwa jina la bidhaa pamoja na neno jumla au msambazaji.",
            "Linganisha kwa zaidi ya bei. Angalia bei ya kipande, oda ya chini kabisa, muda wa kusubiri, gharama ya usafirishaji, masharti ya malipo, ubora, na jinsi wanavyoaminika. Ongeza usafirishaji na ada kwenye bei ili kupata gharama halisi ya kufika (landed cost), yaani gharama ya kweli ya kila kipande kinapokufikia.",
            "Omba kila msambazaji nukuu ya bei iliyoandikwa na, ukiweza, sampuli. Uliza wateja wengine au soma maoni. Kuwa na angalau msambazaji mmoja wa akiba kwa kila bidhaa muhimu.",
            "Kuwa mwangalifu na wasambazaji wapya wanaokubali uhamisho wa benki, kadi za zawadi au crypto tu, wenye bei za chini sana kuliko wengine wote, au wanaokuharakisha. Kagua anwani na namba yao ya simu, na anza na oda ndogo."
          ],
          steps: ["Orodhesha wasambazaji watatu wanaowezekana kwa bidhaa moja.", "Omba kila mmoja nukuu iliyoandikwa: bei ya kipande, oda ya chini kabisa, muda wa kusubiri, usafirishaji na masharti ya malipo.", "Piga hesabu ya gharama halisi ya kufika kwa kila kipande kwa kila mmoja.", "Omba sampuli na soma maoni au uliza watu wanaowajua.", "Chagua msambazaji mkuu na wa akiba."],
          words: [["Oda ya chini kabisa (MOQ)", "oda ndogo kabisa ambayo msambazaji atakubali."], ["Muda wa kusubiri", "muda kuanzia kuweka oda hadi kuwa na bidhaa mkononi."], ["Gharama halisi ya kufika (landed cost)", "gharama kamili ya kipande kinapokufikia: bei pamoja na usafirishaji na ada."], ["Masharti ya malipo", "wakati unapopaswa kulipa; kwa mfano Net 30 maana yake ndani ya siku 30."], ["Nukuu ya bei", "ofa ya bei iliyoandikwa kutoka kwa msambazaji."]],
          slides: [
            { title: "Mahali pa kupata wasambazaji", bullets: ["Watengenezaji, wauzaji wa jumla na wasambazaji", "Maonyesho ya biashara na vyama vya sekta", "Watengenezaji wa karibu na wamiliki wengine"] },
            { title: "Linganisha zaidi ya bei", bullets: ["Bei ya kipande na oda ya chini kabisa", "Muda wa kusubiri na usafirishaji", "Masharti ya malipo, ubora, uaminifu"] },
            { title: "Gharama halisi ya kufika", bullets: ["Bei + usafirishaji + ada", "Gawanya kwa idadi ya vipande", "Gharama ya kweli ya kila kipande"] },
            { title: "Kaa salama", bullets: ["Pata nukuu zilizoandikwa na sampuli", "Kuwa na msambazaji wa akiba", "Epuka malipo ya benki tu, bei rahisi mno, haraka"] }
          ],
          tryIt: "Chagua bidhaa moja unayonunua. Tafuta wasambazaji watatu wanaowezekana na ujaze jedwali dogo: bei ya kipande, oda ya chini kabisa, muda wa kusubiri, usafirishaji, masharti ya malipo na gharama halisi ya kufika kwa kipande. Zungushia chaguo lako kuu na la akiba. Mfano: vipande 100 kwa $2.00 pamoja na usafirishaji wa $30 ni gharama halisi ya kufika ya $2.30 kwa kipande.",
          youCanNow: "kutafuta wasambazaji, kuwalinganisha kwa gharama halisi ya kufika, muda wa kusubiri, masharti na uaminifu, na kuchagua msambazaji mkuu na wa akiba.",
          quickCheck: [
            { objective: "O2", q: "Ni mahali gani pazuri pa kupata wasambazaji?", options: ["Tangazo la kubahatisha kwenye mitandao ya kijamii linaloahidi bidhaa za bure", "Tovuti ya bei rahisi zaidi unayoipata tu", "Maonyesho ya biashara na vyama vya sekta", "Barua pepe kutoka kwa watu usiowajua zinazoomba kadi za zawadi"], answer: 2, why: "Maonyesho ya biashara, vyama, wauzaji wa jumla na wamiliki wengine ni mahali pazuri pa kupata wasambazaji." },
            { objective: "O2", q: "Msambazaji mpya ana bei nzuri sana. Unafanya nini kabla ya oda kubwa?", options: ["Kuagiza mahitaji ya mwaka mzima ili kushika bei", "Kulipa kwa uhamisho wa benki mara moja", "Kuruka nukuu ili kuokoa muda", "Kupata nukuu iliyoandikwa na sampuli, kukagua anwani na simu yao, na kuanza na oda ndogo"], answer: 3, why: "Omba nukuu iliyoandikwa na sampuli, wakague, na anza na oda ndogo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuagiza na kukagua oda",
          minutes: 5,
          goal: "Andika oda ya ununuzi iliyo wazi na ukague bidhaa zilizoletwa dhidi yake.",
          text: [
            "Oda ya ununuzi (purchase order, PO) ni oda yako iliyoandikwa kwa msambazaji. Inazuia mkanganyiko. Inaonyesha namba ya PO, tarehe, msambazaji, kila bidhaa na msimbo wake, idadi, bei, tarehe na anwani ya kuleta, na masharti ya malipo.",
            "Bidhaa zikifika, zikague kabla ya kusaini au kuziweka mahali pake. Hesabu maboksi na vipande, hakikisha bidhaa na saizi zinalingana na PO, tafuta uharibifu, na kagua tarehe za mwisho wa matumizi kwenye vyakula au bidhaa nyingine zinazoharibika.",
            "Andika tatizo lolote kwenye hati ya kupokelea na umwambie msambazaji siku hiyo hiyo, pamoja na picha. Usilipie usichopokea.",
            "Weka kila PO pamoja na hati yake ya kupokelea na ankara. Kulinganisha hizi tatu kabla ya kulipa kunaitwa ulinganisho wa njia tatu (three-way match), na kunakamata makosa na kutozwa zaidi."
          ],
          steps: ["Andika PO yenye namba, tarehe, msambazaji, bidhaa, idadi, bei, tarehe ya kuleta na masharti.", "Bidhaa zikifika, zihesabu na uzilinganishe na PO.", "Kagua uharibifu na tarehe za mwisho wa matumizi.", "Andika matatizo kwenye hati ya kupokelea, piga picha na umwambie msambazaji siku hiyo.", "Kabla ya kulipa, linganisha PO, hati ya kupokelea na ankara."],
          words: [["Oda ya ununuzi (PO)", "oda yako iliyoandikwa kwa msambazaji."], ["Hati ya kupokelea", "karatasi inayokuja na bidhaa ikiorodhesha kilichotumwa."], ["Ankara", "bili ya msambazaji."], ["Ulinganisho wa njia tatu", "kukagua kuwa PO, hati ya kupokelea na ankara zinakubaliana kabla ya kulipa."]],
          slides: [
            { title: "Oda ya ununuzi iliyo wazi", bullets: ["Namba ya PO, tarehe na msambazaji", "Bidhaa, misimbo, idadi na bei", "Tarehe ya kuleta, anwani na masharti"] },
            { title: "Kagua kila mzigo unaoletwa", bullets: ["Hesabu maboksi na vipande", "Linganisha bidhaa na saizi na PO", "Kagua uharibifu na tarehe za mwisho wa matumizi"] },
            { title: "Kuna tatizo?", bullets: ["Liandike kwenye hati ya kupokelea", "Picha, na mwambie msambazaji siku hiyo hiyo", "Usilipie usichopata"] },
            { title: "Ulinganisho wa njia tatu", bullets: ["PO + hati ya kupokelea + ankara", "Zilinganishe kabla ya kulipa"] }
          ],
          tryIt: "Andika mfano wa oda ya ununuzi kwa bidhaa moja kutoka kwenye jedwali lako la wasambazaji, yenye kila sehemu ya somo hili. Kisha andika orodha ya ukaguzi ya mistari mitano utakayotumia mzigo ujao ukifika.",
          youCanNow: "kuandika oda ya ununuzi iliyo wazi, kukagua mzigo dhidi yake, na kulinganisha makaratasi kabla ya kulipa.",
          quickCheck: [
            { objective: "O3", q: "Kipi kinapaswa kuwa kwenye oda ya ununuzi?", options: ["Kila bidhaa na msimbo wake, idadi na bei", "Majina ya wateja wako", "Nywila ya benki yako", "Malengo yako ya mauzo"], answer: 0, why: "PO inaonyesha namba ya PO, tarehe, msambazaji, bidhaa na misimbo, idadi, bei, kuleta na masharti." },
            { objective: "O3", q: "Boksi la mtindi linafika na tarehe za mwisho wa matumizi zimepita. Unafanya nini?", options: ["Kuliweka rafuni haraka", "Kuandika kwenye hati, kupiga picha, kumwambia msambazaji siku hiyo na kutolilipia", "Kusaini hati na kulalamika mwezi ujao", "Kulitupa bila kusema kitu"], answer: 1, why: "Kagua tarehe kabla ya kusaini, andika matatizo kwenye hati na usilipie usichopokea ipasavyo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Wasambazaji na kuagiza",
        questions: [
          { objective: "O1", q: "Unanunua bidhaa yako inayouzika zaidi kutoka kwa msambazaji mmoja tu. Hatari ni nini?", options: ["Hakuna kabisa", "Msambazaji huyo akipata tatizo, bidhaa inakuishia", "Bei zako zitashuka kila wakati", "Wateja watanunua zaidi"], answer: 1, why: "Msambazaji mmoja ni sehemu dhaifu; msambazaji wa akiba anakulinda." },
          { objective: "O2", q: "Muda wa kusubiri ni nini?", options: ["Muda kuanzia kuagiza hadi kuwa na bidhaa mkononi", "Muda mteja anaosubiri kwenye foleni", "Muda bidhaa inaodumu rafuni", "Saa za kazi za msambazaji"], answer: 0, why: "Muda wa kusubiri ni muda oda inaochukua kufika." },
          { objective: "O2", q: "Msambazaji A anauza vipande 100 kwa $200 pamoja na usafirishaji wa $50. Gharama halisi ya kufika kwa kipande ni ngapi?", options: ["$2.00", "$2.25", "$0.50", "$2.50"], answer: 3, why: "$200 pamoja na $50 ni $250; ukigawanya kwa vipande 100 ni $2.50 kila kimoja." },
          { objective: "O2", q: "Msambazaji mpya ana bei za chini sana na anakubali kadi za zawadi tu. Unafanya nini?", options: ["Kuagiza vingi mara moja", "Kulipa kwa kadi za zawadi", "Kuwa mwangalifu: kumkagua na kuepuka njia hiyo ya malipo", "Kutuma taarifa zako za kuingia benki"], answer: 2, why: "Malipo ya kadi za zawadi tu na bei za chini mno ni dalili za ulaghai." },
          { objective: "O3", q: "Mzigo uliofika umepungukiwa maboksi mawili. Unapaswa kufanya nini?", options: ["Kusaini na kunyamaza", "Kulipia kila kitu hata hivyo", "Kutupa hati ya kupokelea", "Kuandika kwenye hati, kupiga picha na kumwambia msambazaji siku hiyo"], answer: 3, why: "Kuandika matatizo mara moja kunakusaidia kupata ulicholipia." }
        ]
      }
    },
    {
      name: "Sura 2: Kudhibiti hesabu ya bidhaa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuhesabu bidhaa zako",
          minutes: 5,
          goal: "Hesabu bidhaa zako kwa usahihi na upate tofauti na kumbukumbu zako.",
          text: [
            "Hesabu ya bidhaa (inventory) ni bidhaa na vifaa ulivyonavyo. Kumbukumbu zako zinasema unapaswa kuwa na kiasi gani; kuhesabu kunaonyesha ulicho nacho kweli. Tofauti hiyo mara nyingi huitwa upotevu (shrinkage): hasara kutokana na wizi, uharibifu, kuoza au makosa.",
            "Kuhesabu kamili maana yake ni kuhesabu kila kitu, mara nyingi mara moja au mbili kwa mwaka, biashara ikiwa imefungwa. Kuhesabu kwa mzunguko (cycle count) maana yake ni kuhesabu bidhaa chache kila wiki, ili kila bidhaa ihesabiwe kadiri muda unavyoenda. Hesabu mara nyingi zaidi bidhaa zako zenye thamani kubwa au zinazouzika haraka.",
            "Kuhesabu vizuri: kipe kila bidhaa SKU (msimbo mfupi), hesabu kwa kipimo kile kile unachonunulia na kuuzia, hesabu rafu moja baada ya nyingine, na mtu wa pili ahesabu upya chochote kisicholingana. Andika idadi, tarehe na aliyehesabu.",
            "Kisha linganisha idadi uliyohesabu na kumbukumbu zako. Tafuta sababu ya tofauti kubwa, na urekebishe kumbukumbu zako zilingane na idadi halisi."
          ],
          steps: ["Kipe kila bidhaa SKU na kipimo, kama kipande, boksi au pauni.", "Chagua kuhesabu kamili au kuhesabu kwa mzunguko kila wiki.", "Hesabu rafu moja baada ya nyingine na uandike idadi, tarehe na aliyehesabu.", "Mtu wa pili ahesabu upya kila tofauti.", "Linganisha na kumbukumbu zako, tafuta sababu za tofauti kubwa na usasishe kumbukumbu."],
          words: [["Hesabu ya bidhaa (inventory)", "bidhaa na vifaa ulivyonavyo."], ["SKU", "stock keeping unit: msimbo mfupi wa kila bidhaa unayoweka dukani."], ["Kuhesabu kwa mzunguko", "kuhesabu bidhaa chache kwa wakati mmoja kwa ratiba ya kawaida."], ["Upotevu (shrinkage)", "bidhaa zinazopotea kwa wizi, uharibifu, kuoza au makosa."]],
          slides: [
            { title: "Kumbukumbu dhidi ya ukweli", bullets: ["Kumbukumbu: unachopaswa kuwa nacho", "Kuhesabu: ulicho nacho kweli", "Tofauti ni upotevu"] },
            { title: "Njia mbili za kuhesabu", bullets: ["Kamili: kila kitu, mara moja au mbili kwa mwaka", "Kwa mzunguko: bidhaa chache kila wiki", "Hesabu mara nyingi bidhaa za thamani na zinazouzika haraka"] },
            { title: "Hesabu vizuri", bullets: ["SKU na kipimo kwa kila bidhaa", "Rafu kwa rafu; andika tarehe na aliyehesabu", "Hesabu upya kila tofauti"] },
            { title: "Baada ya kuhesabu", bullets: ["Linganisha na kumbukumbu zako", "Tafuta sababu za tofauti kubwa", "Sasisha kumbukumbu"] }
          ],
          tryIt: "Chagua bidhaa tano. Kipe kila moja SKU na kipimo. Zihesabu sasa na uandike idadi, tarehe na jina lako. Kama una kumbukumbu, linganisha na uandike tofauti ya kila moja.",
          youCanNow: "kuhesabu bidhaa zako kwa usahihi, kuhesabu kwa mzunguko na kugundua upotevu kwa kulinganisha idadi na kumbukumbu.",
          quickCheck: [
            { objective: "O4", q: "Kuhesabu kamili ni nini?", options: ["Kuhesabu rafu moja", "Kuhesabu bidhaa za bei ghali tu", "Kuhesabu kila kitu, mara nyingi mara moja au mbili kwa mwaka", "Kukisia kutokana na mauzo"], answer: 2, why: "Kuhesabu kamili maana yake ni kuhesabu kila kitu, mara nyingi mara moja au mbili kwa mwaka." },
            { objective: "O4", q: "Unapata tofauti kubwa kati ya idadi uliyohesabu na kumbukumbu zako. Unafanya nini baada ya kuhesabu upya?", options: ["Kubadilisha idadi ilingane na kumbukumbu", "Kupuuza", "Kufuta bidhaa hiyo", "Kutafuta sababu na kurekebisha kumbukumbu zako zilingane na idadi halisi"], answer: 3, why: "Tafuta sababu ya tofauti kubwa na urekebishe kumbukumbu zako zilingane na idadi halisi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kiwango cha kuagiza tena na akiba ya usalama",
          minutes: 6,
          goal: "Piga hesabu ya wakati wa kuagiza tena bidhaa na kiasi cha ziada cha kuweka.",
          text: [
            "Kiwango cha kuagiza tena (reorder point) ni kiasi cha bidhaa kinachokuambia uagize tena. Ukiagiza unapofika kiwango hicho, bidhaa mpya zinapaswa kufika kabla hazijakuishia.",
            "Kiwango cha kuagiza tena = matumizi ya wastani kwa siku x muda wa kusubiri kwa siku + akiba ya usalama. Mfano: unauza mifuko 10 ya mchele kwa siku, na msambazaji wako anachukua siku 4 kuleta. Bila ziada yoyote unahitaji 10 x 4 = mifuko 40 ili ikutoshe hadi oda ifike.",
            "Akiba ya usalama ni bidhaa za ziada kwa ajili ya mambo yasiyotarajiwa: siku yenye wateja wengi au gari linalochelewa. Njia rahisi: amua siku ngapi za ziada za kufunika na uzidishe kwa matumizi ya kila siku. Kwa siku 2 za ziada, akiba ya usalama ni 10 x 2 = mifuko 20. Kwa hiyo kiwango cha kuagiza tena ni 40 + 20 = mifuko 60. Ukifika mifuko 60, agiza.",
            "Weka akiba ya usalama zaidi kwa bidhaa muhimu zaidi, bidhaa zenye muda mrefu au usioaminika wa kusubiri, na bidhaa unazonunua kwa msambazaji mmoja. Weka kidogo kwa bidhaa zinazoharibika haraka au zinazogharimu sana kuzihifadhi. Kagua namba kila baada ya miezi michache, kwa sababu mauzo na muda wa kusubiri hubadilika."
          ],
          steps: ["Tafuta matumizi ya wastani kwa siku: vipande vilivyotumika kwa siku 30 ukigawanya kwa 30.", "Tafuta muda wa kusubiri kwa siku kutoka kwa msambazaji wako.", "Chagua siku za ziada za kufunika na uzidishe kwa matumizi ya kila siku: hiyo ndiyo akiba ya usalama.", "Kiwango cha kuagiza tena = matumizi ya kila siku x muda wa kusubiri + akiba ya usalama.", "Kagua namba upya kila baada ya miezi michache."],
          words: [["Kiwango cha kuagiza tena", "kiasi cha bidhaa kinachokuambia uagize tena."], ["Akiba ya usalama", "bidhaa za ziada zinazowekwa kwa mambo yasiyotarajiwa kama siku zenye wateja wengi au mizigo inayochelewa."], ["Matumizi ya wastani kwa siku", "vipande vingapi unavyotumia au kuuza katika siku ya kawaida."]],
          slides: [
            { title: "Kiwango cha kuagiza tena", bullets: ["Kiasi kinachokuambia uagize", "Bidhaa mpya zinafika kabla hazijakuishia"] },
            { title: "Fomula", bullets: ["Matumizi ya kila siku x muda wa kusubiri + akiba ya usalama"] },
            { title: "Mfano uliofanyiwa kazi", bullets: ["Mifuko 10 kwa siku, muda wa kusubiri siku 4: mifuko 40", "Akiba ya usalama, siku 2 za ziada: mifuko 20", "Kiwango cha kuagiza tena: mifuko 60"] },
            { title: "Akiba ya usalama kiasi gani", bullets: ["Zaidi: bidhaa muhimu, wasambazaji wa polepole au wasioaminika", "Kidogo: bidhaa zinazoharibika au ghali kuhifadhi", "Kagua upya kila baada ya miezi michache"] }
          ],
          tryIt: "Kwa bidhaa moja, tafuta matumizi yake ya wastani kwa siku na muda wake wa kusubiri. Chagua siku za ziada za kufunika. Piga hesabu ya akiba ya usalama na kiwango cha kuagiza tena na uviandike kwenye kadi unayoiweka karibu na bidhaa hiyo.",
          youCanNow: "kupiga hesabu ya kiwango cha kuagiza tena na akiba ya usalama ya bidhaa na kujua wakati wa kuweka ziada zaidi au kidogo.",
          quickCheck: [
            { objective: "O5", q: "Unatumia vipande 6 kwa siku na unataka siku 3 za ziada za kufunika. Akiba ya usalama ni ngapi?", options: ["18", "9", "3", "63"], answer: 0, why: "Akiba ya usalama ni siku za ziada mara matumizi ya kila siku: 3 x 6 = 18." },
            { objective: "O5", q: "Muda wa kusubiri wa msambazaji wako unaongezeka kutoka siku 4 hadi siku 8. Unafanya nini?", options: ["Kubaki na kiwango kile kile cha kuagiza tena", "Kupiga upya hesabu ya kiwango cha kuagiza tena kwa muda mpya wa kusubiri", "Kuacha kutumia akiba ya usalama", "Kuagiza tu bidhaa zikiisha kabisa"], answer: 1, why: "Kagua namba muda wa kusubiri ukibadilika, kwa sababu kiwango cha kuagiza tena kinautegemea." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Hesabu ya bidhaa kwenye spreadsheet na kinachoingia kwanza kinatoka kwanza",
          minutes: 6,
          goal: "Tengeneza spreadsheet inayoonyesha bidhaa za kuagiza tena na uendeshe bidhaa kwa kinachoingia kwanza kinatoka kwanza.",
          text: [
            "Spreadsheet ya bure, kama Google Sheets au Microsoft Excel kwenye wavuti, inaweza kuendesha hesabu ya bidhaa ya biashara ndogo. Weka mstari mmoja kwa kila bidhaa na safu hizi: Bidhaa, SKU, Msambazaji mkuu, Msambazaji wa akiba, Gharama ya kipande, Zilizopo, Matumizi kwa siku, Muda wa kusubiri (siku), Akiba ya usalama, Kiwango cha kuagiza tena na Hali.",
            "Acha spreadsheet ifanye hesabu. Kama Matumizi kwa siku yako safu G, Muda wa kusubiri safu H na Akiba ya usalama safu I, kiwango cha kuagiza tena katika J2 ni =G2*H2+I2. Hali katika K2 inaweza kuwa =IF(F2<=J2,\"REORDER\",\"OK\"), inayoonyesha REORDER (agiza tena) pale Zilizopo (safu F) zinapokuwa sawa na au chini ya kiwango cha kuagiza tena. Nakili fomula kwenda chini. Sasisha Zilizopo baada ya kila kuhesabu au kila mzigo unaofika.",
            "Kinachoingia kwanza kinatoka kwanza (first-in-first-out, FIFO) maana yake ni kuuza au kutumia bidhaa za zamani kwanza. Kunazuia chakula na bidhaa nyingine kupitwa na tarehe nyuma ya rafu. Bidhaa mpya zikifika, ziweke nyuma au chini ya zile za zamani, na uandike tarehe ya kupokea kwenye maboksi.",
            "Msaidizi wa AI anaweza kukusaidia kuandika au kurekebisha fomula ya spreadsheet. Eleza safu zako kwa maneno; huna haja ya kushiriki bei za wasambazaji wako au taarifa nyingine binafsi za biashara."
          ],
          steps: ["Fungua spreadsheet ya bure na uongeze vichwa vya safu kumi na moja.", "Jaza bidhaa tano.", "Katika safu ya Kiwango cha kuagiza tena, andika =G2*H2+I2 na uinakili kwenda chini.", "Katika safu ya Hali, andika =IF(F2<=J2,\"REORDER\",\"OK\") na uinakili kwenda chini.", "Sasisha Zilizopo baada ya kila kuhesabu au kila mzigo unaofika.", "Rafuni, weka bidhaa mpya nyuma ya za zamani na uandike tarehe kwenye kila boksi."],
          words: [["Spreadsheet", "jedwali la mistari na safu linaloweza kukupigia hesabu."], ["Fomula", "maagizo ndani ya kisanduku cha spreadsheet yanayopiga hesabu ya jibu, yanayoanza na =."], ["Kinachoingia kwanza kinatoka kwanza (FIFO)", "kutumia au kuuza bidhaa za zamani kwanza."]],
          slides: [
            { title: "Mstari mmoja kwa kila bidhaa", bullets: ["Bidhaa, SKU, msambazaji mkuu na wa akiba", "Gharama ya kipande, zilizopo, matumizi kwa siku, muda wa kusubiri", "Akiba ya usalama, kiwango cha kuagiza tena, hali"] },
            { title: "Acha fomula zifanye kazi", bullets: ["Kiwango cha kuagiza tena: =G2*H2+I2", "Hali: =IF(F2<=J2,\"REORDER\",\"OK\")", "Nakili kwenda chini; sasisha zilizopo baada ya kuhesabu"] },
            { title: "Kinachoingia kwanza kinatoka kwanza", bullets: ["Uza au tumia bidhaa za zamani kwanza", "Bidhaa mpya zinakwenda nyuma au chini ya za zamani", "Andika tarehe kwenye kila boksi"] },
            { title: "AI inaweza kusaidia na fomula", bullets: ["Eleza safu zako kwa maneno", "Hakuna haja ya kushiriki bei au taarifa binafsi"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza spreadsheet yako ya hesabu ya bidhaa kwa bidhaa tano yenye safu zote kumi na moja, fomula ya kiwango cha kuagiza tena na alama ya REORDER. Kisha andika sentensi mbili kuhusu jinsi utakavyofuata kinachoingia kwanza kinatoka kwanza kwenye rafu yako.",
          youCanNow: "kuendesha hesabu rahisi ya bidhaa kwenye spreadsheet inayoonyesha wakati wa kuagiza tena na kuendesha bidhaa kwa kinachoingia kwanza kinatoka kwanza.",
          quickCheck: [
            { objective: "O6", q: "Katika jedwali la somo hili, =G2*H2+I2 inapiga hesabu ya nini?", options: ["Gharama ya kipande", "Hali", "Kiwango cha kuagiza tena", "Idadi ya wasambazaji"], answer: 2, why: "Matumizi ya kila siku mara muda wa kusubiri pamoja na akiba ya usalama yanatoa kiwango cha kuagiza tena." },
            { objective: "O6", q: "Unataka AI ikusaidie kurekebisha fomula ya spreadsheet. Unashiriki nini?", options: ["Bei za wasambazaji wako na taarifa za benki", "Orodha nzima ya wateja wako", "Nywila yako ya kuingia", "Maelezo ya safu zako kwa maneno"], answer: 3, why: "Eleza safu zako; huna haja ya kushiriki bei au taarifa binafsi za biashara." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kudhibiti hesabu ya bidhaa",
        questions: [
          { objective: "O4", q: "Kuhesabu bidhaa chache kila wiki ili kila bidhaa ihesabiwe kadiri muda unavyoenda kunaitwa:", options: ["Kuhesabu kamili", "Upotevu", "Kuhesabu kwa mzunguko", "Oda ya ununuzi"], answer: 2, why: "Kuhesabu kwa mzunguko kunagawa kazi ya kuhesabu katika mwaka mzima." },
          { objective: "O5", q: "Unatumia vipande 5 kwa siku, muda wa kusubiri ni siku 6, na akiba ya usalama ni 10. Kiwango cha kuagiza tena ni ngapi?", options: ["30", "40", "11", "16"], answer: 1, why: "5 x 6 = 30, pamoja na akiba ya usalama 10 = 40." },
          { objective: "O5", q: "Ni bidhaa gani kwa kawaida inapaswa kupata akiba ya usalama zaidi?", options: ["Bidhaa muhimu kutoka kwa msambazaji mmoja wa polepole asiyeaminika", "Bidhaa inayoharibika ndani ya siku moja", "Bidhaa ambayo huiuzi tena", "Bidhaa ghali sana inayouzika mara moja kwa mwaka"], answer: 0, why: "Bidhaa muhimu zenye ugavi wenye hatari zinahitaji kinga zaidi." },
          { objective: "O6", q: "Kwenye spreadsheet, zilizopo ni 25 na kiwango cha kuagiza tena ni 30. Hali inaonyesha nini?", options: ["OK", "Kosa (Error)", "Hakuna kitu", "REORDER"], answer: 3, why: "Zilizopo ziko chini ya kiwango cha kuagiza tena, kwa hiyo fomula inaonyesha REORDER." },
          { objective: "O6", q: "Maziwa mapya yanafika. Kwa kufuata FIFO, unayaweka wapi?", options: ["Mbele ya maziwa ya zamani", "Nyuma ya maziwa ya zamani", "Kwenye pipa la taka", "Juu ya maziwa ya zamani ili yauzike kwanza"], answer: 1, why: "FIFO inaweka bidhaa mpya nyuma ya za zamani ili za zamani ziuzike kwanza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Mnyororo wa Ugavi na Hesabu ya Bidhaa",
    questions: [
      { objective: "O1", q: "Mnyororo wa ugavi ni nini?", options: ["Hatua zote zinazofikisha bidhaa kutoka kwa mtengenezaji hadi kwa mteja wako", "Mnyororo unaofunga stoo yako", "Orodha ya wateja", "Aina ya mkopo"], answer: 0, why: "Mnyororo wa ugavi unajumuisha kila hatua kutoka kwa mtengenezaji hadi kwa mteja." },
      { objective: "O1", q: "Ni ipi sehemu dhaifu katika mnyororo wa ugavi?", options: ["Wasambazaji wawili wanaoaminika", "Bidhaa muhimu kutoka kwa msambazaji mmoja tu", "Muda mfupi wa kusubiri", "Kuhesabu kwa usahihi"], answer: 1, why: "Kutegemea msambazaji mmoja ni hatari." },
      { objective: "O1", q: "Suluhisho zuri kwa sehemu dhaifu ni lipi?", options: ["Kuipuuza", "Kupandisha bei", "Kuandaa msambazaji wa akiba au kuweka akiba ya ziada", "Kuacha kuhesabu"], answer: 2, why: "Wasambazaji wa akiba na akiba ya ziada vinakulinda mnyororo ukikatika." },
      { objective: "O2", q: "Oda ya chini kabisa (MOQ) ni:", options: ["Kiasi kikubwa zaidi unachoweza kununua", "Muda oda inaochukua", "Anwani ya msambazaji", "Oda ndogo kabisa ambayo msambazaji atakubali"], answer: 3, why: "MOQ ni oda ndogo kabisa ambayo msambazaji anakubali." },
      { objective: "O2", q: "Gharama halisi ya kufika ni nini?", options: ["Bei pamoja na usafirishaji na ada, kwa kila kipande", "Bei iliyo kwenye tovuti tu", "Gharama ya tiketi ya ndege", "Kodi yako ya pango"], answer: 0, why: "Gharama halisi ya kufika ni gharama ya kweli ya kila kipande kinapokufikia." },
      { objective: "O2", q: "Masharti ya malipo ya Net 30 maana yake:", options: ["Lipa 30% sasa", "Lipa ndani ya siku 30", "Lipa baada ya oda 30", "Lipa $30"], answer: 1, why: "Net 30 maana yake kiasi chote kinapaswa kulipwa ndani ya siku 30." },
      { objective: "O2", q: "Kabla ya kuchagua msambazaji mpya, ni busara:", options: ["Kulipa mwaka mzima mapema", "Kutuma taarifa zako za kuingia benki", "Kupata nukuu iliyoandikwa na sampuli, na kuanza kidogo", "Kulipa kwa kadi ya zawadi"], answer: 2, why: "Nukuu, sampuli na oda ndogo za kwanza zinapunguza hatari yako." },
      { objective: "O3", q: "Oda ya ununuzi ni nini?", options: ["Bili ya msambazaji", "Risiti ya mteja", "Gari la kuleta mizigo", "Oda yako iliyoandikwa kwa msambazaji"], answer: 3, why: "PO ni oda yako iliyoandikwa inayoorodhesha bidhaa, idadi na bei." },
      { objective: "O3", q: "Ulinganisho wa njia tatu unalinganisha:", options: ["PO, hati ya kupokelea na ankara", "Nembo za wasambazaji watatu", "Ratiba za wafanyakazi watatu", "Akaunti tatu za benki"], answer: 0, why: "Kulinganisha hizi tatu kunakamata makosa kabla ya kulipa." },
      { objective: "O3", q: "Mzigo ukifika, kwanza unapaswa:", options: ["Kulipa ankara", "Kuuhesabu na kuukagua dhidi ya PO", "Kutupa hati ya kupokelea", "Kuuweka moja kwa moja rafuni bila kukagua"], answer: 1, why: "Kukagua kwanza kunakamata bidhaa zilizopungua au zilizoharibika." },
      { objective: "O4", q: "Upotevu (shrinkage) ni nini?", options: ["Vifungashio vidogo zaidi", "Bei za chini zaidi", "Bidhaa zinazopotea kwa wizi, uharibifu, kuoza au makosa", "Punguzo la bei"], answer: 2, why: "Upotevu ni tofauti kati ya kumbukumbu na bidhaa halisi." },
      { objective: "O4", q: "SKU ni nini?", options: ["Jina la msambazaji", "Aina ya rafu", "Kampuni ya usafirishaji", "Msimbo mfupi wa kila bidhaa unayoweka dukani"], answer: 3, why: "SKU ni kifupi cha stock keeping unit." },
      { objective: "O4", q: "Idadi uliyohesabu hailingani na kumbukumbu zako kwa bidhaa moja. Unafanya nini?", options: ["Mtu wa pili aihesabu upya", "Kupuuza", "Kubadilisha kumbukumbu bila kukagua", "Kutupa bidhaa hiyo"], answer: 0, why: "Kuhesabu upya kunathibitisha idadi halisi kabla ya kusasisha kumbukumbu." },
      { objective: "O5", q: "Fomula ya kiwango cha kuagiza tena ni:", options: ["Bei x idadi", "Matumizi ya kila siku x muda wa kusubiri + akiba ya usalama", "Zilizopo - mauzo", "Akiba ya usalama x 10"], answer: 1, why: "Inafunika matumizi wakati wa kusubiri pamoja na kinga ya ziada." },
      { objective: "O5", q: "Unauza vipande 8 kwa siku, muda wa kusubiri ni siku 5 na akiba ya usalama ni vipande 16. Kiwango cha kuagiza tena?", options: ["40", "13", "56", "21"], answer: 2, why: "8 x 5 = 40, pamoja na 16 = 56." },
      { objective: "O5", q: "Akiba ya usalama ni:", options: ["Bidhaa zilizofungiwa kwenye sefu", "Bidhaa ambazo huziuzi kamwe", "Bidhaa za zamani", "Bidhaa za ziada zinazowekwa kwa mambo yasiyotarajiwa kama mizigo inayochelewa"], answer: 3, why: "Akiba ya usalama inafunika siku zenye wateja wengi na ucheleweshaji." },
      { objective: "O5", q: "Matumizi yalikuwa vipande 300 katika siku 30 zilizopita. Matumizi ya wastani kwa siku ni mangapi?", options: ["10", "30", "300", "9,000"], answer: 0, why: "300 ukigawanya kwa siku 30 ni 10 kwa siku." },
      { objective: "O6", q: "Kwenye spreadsheet, fomula inaanza na:", options: ["#", "=", "@", "$"], answer: 1, why: "Fomula za spreadsheet zinaanza na alama ya sawa (=)." },
      { objective: "O6", q: "Kinachoingia kwanza kinatoka kwanza maana yake nini?", options: ["Kuuza bidhaa mpya kwanza", "Kuagiza kutoka kwa msambazaji wa kwanza unayempata", "Kuuza au kutumia bidhaa za zamani kwanza", "Kuhesabu rafu ya kwanza tu"], answer: 2, why: "FIFO inazuia bidhaa za zamani kupitwa na tarehe." },
      { objective: "O6", q: "Unawezaje kurahisisha FIFO rafuni?", options: ["Kuweka bidhaa mpya mbele", "Kuchanganya maboksi yote pamoja", "Kuondoa lebo", "Kuandika tarehe kwenye maboksi na kuweka bidhaa mpya nyuma ya za zamani"], answer: 3, why: "Lebo na mpangilio vinarahisisha kuchukua bidhaa za zamani kwanza." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Bidhaa na wasambazaji",
        objective: "O2",
        notYet: "Bidhaa hazina SKU, gharama ya kipande au msambazaji mkuu.",
        meets: "Bidhaa tano, kila moja ikiwa na SKU, msambazaji mkuu, msambazaji wa akiba na gharama ya kipande.",
        exceeds: "Gharama ya kipande ni gharama halisi ya kufika ikijumuisha usafirishaji na ada."
      },
      {
        name: "Namba za bidhaa na matumizi",
        objective: "O4",
        notYet: "Zilizopo, matumizi kwa siku au muda wa kusubiri vimekisiwa au havipo.",
        meets: "Zilizopo zinatoka kwenye kuhesabu halisi, na matumizi kwa siku na muda wa kusubiri vimejazwa.",
        exceeds: "Inaonyesha tarehe ya kuhesabu na aliyehesabu."
      },
      {
        name: "Kiwango cha kuagiza tena na akiba ya usalama",
        objective: "O5",
        notYet: "Kiwango cha kuagiza tena kimeandikwa kwa mkono au kimekosewa.",
        meets: "Akiba ya usalama imewekwa na kiwango cha kuagiza tena kimepigwa kwa fomula kwa kila bidhaa.",
        exceeds: "Akiba ya usalama zaidi imewekwa kwa bidhaa muhimu au za msambazaji mmoja, pamoja na sababu."
      },
      {
        name: "Alama ya kuagiza tena",
        objective: "O6",
        notYet: "Hakuna safu ya hali, au haibadiliki bidhaa zikipungua.",
        meets: "Hali inaonyesha REORDER pale zilizopo zinapokuwa sawa na au chini ya kiwango cha kuagiza tena.",
        exceeds: "Mwanafunzi anaijaribu kwa kubadilisha Zilizopo na kukagua alama."
      },
      {
        name: "Mpango wa kinachoingia kwanza kinatoka kwanza",
        objective: "O6",
        notYet: "Hakuna mpango wa kuzungusha bidhaa.",
        meets: "Mpango ulioandikwa wa kuandika tarehe kwenye maboksi na kuweka bidhaa mpya nyuma ya za zamani.",
        exceeds: "Unataja nani anafanya hivyo na lini, kama kwa kila mzigo unaofika."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wamiliki ambao bado wanatumia jedwali la hesabu ya bidhaa siku 30 baadaye (utafiti wa ufuatiliaji)",
      "Wamiliki wanaoripoti bidhaa kuisha mara chache au bidhaa chache zilizoharibika au kupotea ndani ya siku 60",
      "Wamiliki wanaoandaa msambazaji wa akiba kwa angalau bidhaa moja muhimu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye spreadsheet ya bure kama Google Sheets au Excel kwenye wavuti",
      "Orodha ya bidhaa tano unazonunua au kuuza, pamoja na oda za karibuni na hati za kupokelea",
      "Karatasi, kalamu na kikokotoo kwa kuhesabu na kufanya mazoezi ya hesabu",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni mfano wa kiwango cha kuagiza tena pamoja ubaoni kabla wanafunzi hawajatumia namba zao wenyewe.",
      "Leta spreadsheet ya mfano yenye fomula zilizokwisha wekwa kwa wanafunzi ambao ni wapya kwa spreadsheet.",
      "Waonye wanafunzi kuhusu ulaghai wa wasambazaji unaoomba uhamisho wa benki, kadi za zawadi au crypto.",
      "Waruhusu wanafunzi kutumia bidhaa za mfano kama hawataki kushiriki bei halisi darasani.",
      "Tathmini kazi ya mwisho kwa rubric, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
