"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-financial-literacy.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Money lessons: no investment advice; students are pointed to official sources (consumerfinance.gov, FDIC, IRS VITA) and free counselors.

module.exports = {
  id: "underserved-ai-financial-literacy-sw",
  lang: "sw",
  translationOf: "underserved-ai-financial-literacy",
  category: "Undeserved Community",
  name: "AI kwa Elimu ya Fedha",
  skills: "Kutengeneza bajeti ya mwezi, Kutumia AI kupanga pesa bila kushiriki taarifa binafsi, Kuweka lengo la akiba, Kukagua ripoti yako ya mikopo bure, Kupata msaada wa bure wa kodi na pesa, Kutambua utapeli wa pesa",
  outcome: "kutengeneza bajeti rahisi ya mwezi kwa ajili ya familia yako kwa msaada wa msaidizi wa AI wa bure (bila kushiriki namba zozote za binafsi), kuweka lengo moja la akiba, na kujua wapi pa kupata ripoti yako ya mikopo ya bure na msaada wa kodi wa bure.",
  about: [
    "Wasiwasi wa pesa ni wa kweli, hasa wakati kila dola ina kazi yake. Kozi hii inakupa zana rahisi za kuona pesa zako zinaenda wapi, kupanga kwa mambo muhimu kwa familia yako, na kuepuka mitego inayogharimu.",
    "Utatengeneza bajeti ya mwezi, utatumia msaidizi wa AI wa bure kukusaidia kuipanga na kuieleza bila kuandika namba zozote za binafsi, utaweka lengo la akiba, utakagua ripoti yako ya mikopo bure, utapata msaada wa bure wa kodi na pesa, na utatambua utapeli wa pesa.",
    "Kozi hii inafundisha ujuzi, si ushauri wa uwekezaji. Kwa maamuzi makubwa ya pesa, ongea na mshauri wa bure wa shirika lisilo la faida au angalia vyanzo rasmi kama consumerfinance.gov, fdic.gov na irs.gov. Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza bajeti ya familia ya mwezi mmoja: orodhesha mapato, mahitaji na matakwa kwa kiasi kilichokadiriwa, tumia msaidizi wa AI kuipanga na kupendekeza sehemu moja ya kuokoa (bila namba za akaunti wala taarifa binafsi), weka lengo moja la akiba lenye kiasi na tarehe, na andika utapata wapi ripoti yako ya mikopo ya bure na msaada wa kodi wa bure.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika jamii zisizohudumiwa vya kutosha wanaoendesha nyumba kwa bajeti ndogo: wazazi wanaofanya kazi, walezi, watu wanaopokea misaada ya serikali, wazee na vijana wanaoishi peke yao kwa mara ya kwanza.",
    startingPoint: "Wanalipa bili na kufuatilia pesa kichwani au kwenye karatasi. Wachache wana bajeti iliyoandikwa, lengo la akiba au wamewahi kukagua ripoti yao ya mikopo, na wengi hawajatumia AI kwa kazi za pesa. Baadhi wamewahi kulengwa na utapeli wa pesa.",
    gap: "Bila mpango, gharama ndogo zinaongezeka, akiba haianzi kamwe, makosa ya mikopo hayarekebishwi, na familia zinalipia msaada wa kodi au zinanaswa na utapeli. Wanafunzi wanahitaji bajeti rahisi, lengo la akiba na msaada wa bure unaoaminika, na lazima watumie AI bila kushiriki namba za binafsi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: simu janja au kompyuta ya maktaba; karatasi inafaa kwa bajeti",
      "Faragha: kiasi kilichokadiriwa tu, kamwe namba za akaunti, za kadi, za Social Security wala nywila katika AI",
      "Elimu ya jumla ya pesa tu: hakuna ushauri wa uwekezaji, na maamuzi makubwa yanapelekwa kwa vyanzo rasmi au mshauri wa bure wa shirika lisilo la faida",
      "Viwango na sheria (FDIC, VITA, Lifeline) hubadilika: wanafunzi wanakagua tovuti rasmi"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao ni wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Utangulizi wa AI na Uwezeshaji wa Kidijitali\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa hati za mshahara, taarifa za benki au risiti za mwezi mmoja", action: "kuorodhesha mapato yako na kupanga matumizi yako katika mahitaji na matakwa", standard: "ukiwa na angalau matumizi kumi, kiasi kilichokadiriwa na jumla" },
    { id: "O2", condition: "Ukitumia msaidizi wa AI wa bure", action: "kupanga bajeti yako katika jedwali na kuchagua mapendekezo yake yanayofaa familia yako", standard: "ukishiriki aina za matumizi zenye kiasi kilichokadiriwa tu na kukagua jumla kwa kikokotoo" },
    { id: "O3", condition: "Ukipewa kitu unachotaka kuwekea akiba", action: "kuweka lengo la akiba lenye kiasi na tarehe, kuhesabu kiasi cha kila wiki na kuchagua mahali salama pa kuiweka", standard: "hesabu ikiwa imekaguliwa na kwenye benki yenye bima ya FDIC au chama cha ushirika wa akiba na mikopo chenye bima ya serikali kuu" },
    { id: "O4", condition: "Ukitumia AnnualCreditReport.com", action: "kueleza jinsi ya kupata ripoti zako za mikopo za bure na kuzikagua kuona makosa", standard: "ukitaja mashirika matatu ya taarifa za mikopo na nini cha kupinga" },
    { id: "O5", condition: "Unapohitaji msaada wa kodi au pesa", action: "kupata kituo cha kodi cha bure cha VITA au TCE na chanzo kinachoaminika kwa maswali ya pesa", standard: "ukiandika anwani ya kituo na vitu vya kubeba" },
    { id: "O6", condition: "Ukipewa ofa ya pesa au ujumbe wa haraka", action: "kutambua dalili za hatari za utapeli wa pesa na kuchagua hatua salama inayofuata", standard: "bila kushiriki taarifa za kuingia wala misimbo, na ukiripoti utapeli kwa FTC" }
  ],
  chapters: [
    {
      name: "Sura 1: Mpango wako wa pesa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Misingi ya bajeti: mapato, mahitaji na matakwa",
          minutes: 5,
          goal: "Orodhesha mapato yako ya mwezi na upange matumizi yako katika mahitaji na matakwa.",
          text: [
            "Bajeti ni mpango wa pesa zako. Inaonyesha kinachoingia kila mwezi na kinakoenda. Bajeti haimaanishi huwezi kamwe kufurahia; inamaanisha unaamua kwa makusudi.",
            "Mapato ni pesa zinazoingia: mishahara, misaada ya serikali, pesa za matunzo ya mtoto, kazi za pembeni. Mahitaji ni vitu lazima ulipe ili kuishi na kufanya kazi: kodi ya nyumba, chakula, umeme na maji, usafiri, malezi ya watoto, dawa. Matakwa ni mazuri kuwa nayo: kula hotelini, huduma za kutazama video mtandaoni, nguo mpya usizozihitaji bado.",
            "Anza na mwezi mmoja. Angalia hati za mshahara, taarifa za benki au za kadi, na risiti. Kadiria kiasi hadi dola iliyo karibu au dola tano; karibu inatosha kuanza."
          ],
          steps: ["Andika kila chanzo cha mapato kwa mwezi mmoja.", "Orodhesha kila matumizi unayoweza kukumbuka au kupata.", "Weka alama kila matumizi kama hitaji au takwa.", "Jumlisha mapato, mahitaji na matakwa."],
          words: [["Bajeti", "mpango wa jinsi utakavyotumia pesa zako kila mwezi."], ["Mapato", "pesa zinazoingia."], ["Matumizi", "pesa zinazotoka."]],
          slides: [
            { title: "Bajeti ni mpango", bullets: ["Kinachoingia", "Kinakoenda", "Unaamua kwa makusudi"] },
            { title: "Mahitaji na matakwa", bullets: ["Mahitaji: kodi ya nyumba, chakula, umeme na maji, usafiri, malezi", "Matakwa: kula hotelini, video mtandaoni, ziada"] },
            { title: "Anza kwa urahisi", bullets: ["Mwezi mmoja", "Tumia hati za mshahara, taarifa, risiti", "Kadiria kiasi"] }
          ],
          tryIt: "Kwenye karatasi au kwenye jedwali la bure (spreadsheet), andika mapato yako ya mwezi na angalau matumizi kumi. Weka alama H kwa hitaji au T kwa takwa kwa kila moja.",
          youCanNow: "kuorodhesha mapato yako na kupanga matumizi katika mahitaji na matakwa.",
          quickCheck: [
            { objective: "O1", q: "Mapato ni nini?", options: ["Pesa zinazoingia, kama mishahara na misaada", "Pesa unazotumia kwa kodi ya nyumba", "Pesa unazodaiwa", "Bili unayolipa"], answer: 0, why: "Mapato ni pesa zinazoingia, kama mishahara, misaada au kazi za pembeni." },
            { objective: "O1", q: "Unaorodhesha matumizi na unalipa kama $87.60 kwa simu. Unaandika nini kuanza?", options: ["Iache nje", "Kama $90", "$870", "Hakuna hadi upate senti kamili"], answer: 1, why: "Kukadiria hadi dola iliyo karibu au dola tano kunatosha kuanza bajeti." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutumia AI kupanga bajeti yako kwa usalama",
          minutes: 5,
          goal: "Mwombe msaidizi wa AI wa bure kupanga na kueleza bajeti yako bila kushiriki taarifa binafsi.",
          text: [
            "Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini anaweza kugeuza orodha yako kuwa jedwali nadhifu, kuijumlisha, na kuonyesha pesa zinakoenda. Wewe ndiye unayeamua kila jambo.",
            "Shiriki kiasi kilichokadiriwa na aina za matumizi tu. Kamwe usiandike namba za akaunti, namba za kadi, namba yako ya Social Security, nywila, wala taarifa za kuingia kwenye benki yako. Mfano wa prompt: \"Familia yangu ya watu 4 inapata kama $3,200 kwa mwezi. Kodi ya nyumba $1,400, chakula $650, simu $90, pasi za basi $100, kula hotelini $200, video mtandaoni $40. Weka hii katika jedwali, ijumlishe, na upendekeze sehemu mbili tunazoweza kupunguza.\"",
            "AI inaweza kukosea hesabu. Jumlisha mwenyewe au kwa kikokotoo ili kukagua. Vidokezo vyake ni mawazo, si sheria; chagua vinavyofaa familia yako."
          ],
          steps: ["Andika aina za matumizi na kiasi kilichokadiriwa.", "Ondoa namba zozote za akaunti au taarifa binafsi.", "Iombe AI itengeneze jedwali, ijumlishe na ipendekeze sehemu za kupunguza.", "Kagua jumla mwenyewe.", "Chagua mapendekezo yanayofaa familia yako."],
          words: [["Aina ya matumizi", "kundi la matumizi, kama chakula au usafiri."], ["Kishika-nafasi", "neno la kusimama badala ya taarifa binafsi, kama \"[benki yangu]\"."]],
          slides: [
            { title: "AI inaweza kukusaidia kupanga", bullets: ["Kutengeneza jedwali", "Kujumlisha", "Kupendekeza sehemu za kupunguza"] },
            { title: "Shiriki hivi tu", bullets: ["Kiasi kilichokadiriwa", "Aina kama kodi ya nyumba na chakula", "Kamwe namba za akaunti, za kadi au za Social Security"] },
            { title: "Kagua na uchague", bullets: ["Kagua hesabu mwenyewe", "Vidokezo ni mawazo, si sheria", "Chagua kinachofaa familia yako"] }
          ],
          tryIt: "Mpe msaidizi wa AI aina zako za matumizi na kiasi kilichokadiriwa (bila taarifa binafsi). Omba jedwali, jumla na mawazo mawili ya kupunguza. Kagua jumla kwa kikokotoo.",
          youCanNow: "kutumia AI kupanga bajeti bila kushiriki taarifa binafsi, na kukagua hesabu yake.",
          quickCheck: [
            { objective: "O2", q: "Nani anafanya maamuzi ya mwisho kuhusu bajeti yako unapotumia AI?", options: ["AI", "Benki yako", "Wewe", "Duka la apps"], answer: 2, why: "AI inatoa mawazo, lakini wewe ndiye unayeamua kila jambo." },
            { objective: "O2", q: "Unataka AI ipange bajeti yako. Unaandika nini?", options: ["Taarifa zako za kuingia kwenye benki", "Namba ya kadi yako na msimbo wake", "Namba yako ya Social Security", "Aina zilizokadiriwa kama \"chakula kama $650\""], answer: 3, why: "Kiasi kilichokadiriwa na aina za matumizi tu ndivyo vinaingia katika AI, kamwe si namba za binafsi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuweka lengo la akiba na kuweka pesa salama",
          minutes: 5,
          goal: "Weka lengo moja la akiba lenye kiasi na tarehe, na ujue jinsi amana za benki zinavyolindwa.",
          text: [
            "Hata kiasi kidogo kinachowekwa kila wiki kinaweza kusaidia gari linapoharibika au saa za kazi zinapopunguzwa. Watu wengi huanza na akiba ya dharura: pesa zilizowekwa kando kwa mambo ya ghafla tu.",
            "Fanya lengo liwe wazi: \"Weka akiba ya $300 kwa dharura kufikia Juni 1.\" Gawanya kwa idadi ya wiki kuona kiasi cha kuweka kando kila wiki. Iombe AI ifanye hesabu, kisha uikague.",
            "Mahali unapoweka akiba ni muhimu. Pesa katika benki yenye bima ya FDIC zinalindwa hadi $250,000 kwa kila mweka amana, kwa kila benki, kwa kila aina ya umiliki wa akaunti. Bima ya FDIC haihusu hisa wala crypto. Kagua kama benki ina bima ya FDIC kwenye fdic.gov kabla ya kufungua akaunti."
          ],
          steps: ["Chagua unachowekea akiba.", "Chagua kiasi na tarehe.", "Gawanya kiasi kwa idadi ya wiki.", "Weka akiba katika benki au chama cha ushirika chenye bima ya serikali kuu."],
          words: [["Akiba ya dharura", "pesa zilizowekwa kwa gharama za ghafla tu."], ["FDIC", "Federal Deposit Insurance Corporation, shirika la Marekani linalolinda pesa katika benki zenye bima."], ["Credit union", "chama cha ushirika wa akiba na mikopo kinachomilikiwa na wanachama, kisicho cha faida."]],
          sources: [{ name: "FDIC: Understanding Deposit Insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Anza akiba ya dharura", bullets: ["Pesa kwa mambo ya ghafla tu", "Kiasi kidogo kinaongezeka"] },
            { title: "Lengo lililo wazi", bullets: ["Mfano: $300 kufikia Juni 1", "Kiasi ukigawanya kwa wiki = akiba ya kila wiki", "Kagua hesabu mwenyewe"] },
            { title: "Weka akiba salama", bullets: ["Benki yenye bima ya FDIC: hadi $250,000 kwa mweka amana, kwa benki, kwa aina", "Si hisa wala crypto", "Kagua benki kwenye fdic.gov"] }
          ],
          tryIt: "Andika lengo moja la akiba lenye kiasi na tarehe. Hesabu kiasi cha kuweka kila wiki, kisha iombe AI ikague hesabu yako.",
          youCanNow: "kuweka lengo la akiba lililo wazi na kuchagua mahali salama penye bima pa kuiweka.",
          quickCheck: [
            { objective: "O3", q: "Nini kinafanya lengo la akiba liwe wazi?", options: ["Kiasi na tarehe", "Jina zuri", "Namba kubwa", "Kutomwambia mtu"], answer: 0, why: "Lengo lililo wazi linasema kiasi gani na kufikia lini, kama $300 kufikia Juni 1." },
            { objective: "O3", q: "Unataka kuweka akiba ya $200 kwa wiki 20. Unaweka kando kiasi gani kila wiki?", options: ["$20", "$10", "$4", "$100"], answer: 1, why: "$200 ukigawanya kwa wiki 20 ni $10 kwa wiki." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mpango wako wa pesa",
        questions: [
          { objective: "O1", q: "Lipi ni hitaji?", options: ["Huduma ya video mtandaoni", "Kodi ya nyumba", "Kula hotelini", "Mchezo mpya"], answer: 1, why: "Kodi ya nyumba ni gharama ya lazima ili kuishi." },
          { objective: "O2", q: "Nini ni salama kuandika katika msaidizi wa AI kwa msaada wa bajeti?", options: ["Namba ya akaunti yako ya benki", "Namba ya kadi yako", "Kiasi kilichokadiriwa kama \"kodi ya nyumba kama $1,400\"", "Nywila yako ya benki mtandaoni"], answer: 2, why: "Kiasi kilichokadiriwa na aina za matumizi vinakupa msaada unaohitaji bila taarifa binafsi." },
          { objective: "O2", q: "AI inajumlisha bajeti yako na kupata jumla inayoonekana si sahihi. Unafanya nini?", options: ["Kuiamini", "Kufuta bajeti yako", "Kumuuliza mgeni mtandaoni", "Kukagua jumla kwa kikokotoo"], answer: 3, why: "AI inaweza kukosea hesabu; ikague mwenyewe." },
          { objective: "O3", q: "Lipi ni lengo la akiba lililo wazi?", options: ["\"Weka akiba ya $300 kwa dharura kufikia Juni 1\"", "\"Weka akiba kidogo\"", "\"Kuwa tajiri\"", "\"Pesa baadaye\""], answer: 0, why: "Lina kusudi, kiasi na tarehe." },
          { objective: "O3", q: "Bima ya FDIC inalinda nini?", options: ["Hisa", "Amana katika benki yenye bima, hadi kikomo", "Crypto", "Pesa taslimu chini ya godoro lako"], answer: 1, why: "FDIC inalinda amana katika benki zenye bima; si hisa wala crypto." }
        ]
      }
    },
    {
      name: "Sura 2: Mikopo, msaada na kukaa salama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kukagua ripoti yako ya mikopo bure",
          minutes: 5,
          goal: "Pata tovuti rasmi ya ripoti za mikopo za bure na ukague ripoti kuona makosa.",
          text: [
            "Ripoti ya mikopo ni kumbukumbu ya mikopo yako, kadi zako na bili zako. Wenye nyumba, wakopeshaji na baadhi ya waajiri wanaweza kuiangalia. Makosa hutokea, na kosa linaweza kukukosesha nyumba au mkopo.",
            "Unaweza kupata ripoti za mikopo za bure kutoka kwa mashirika matatu makubwa ya taarifa za mikopo, Equifax, Experian na TransUnion, kila wiki kwenye AnnualCreditReport.com. Hiyo ndiyo tovuti rasmi. Tovuti nyingine zinazoahidi ripoti za \"bure\" zinaweza kujaribu kukuuzia kitu.",
            "Tafuta akaunti usizozitambua, anwani zisizo sahihi na malipo yaliyochelewa ambayo kwa kweli ulilipa kwa wakati. Kama kuna kitu kibaya, unaweza kukipinga kwa shirika la taarifa za mikopo. Consumer Financial Protection Bureau kwenye consumerfinance.gov inaeleza jinsi."
          ],
          steps: ["Andika AnnualCreditReport.com mwenyewe kwenye kivinjari.", "Omba ripoti zako kutoka Equifax, Experian na TransUnion.", "Tafuta akaunti usizozijua, taarifa zisizo sahihi na malipo yaliyochelewa yasiyo sahihi.", "Kama kuna kitu kibaya, fuata hatua za kupinga kwenye consumerfinance.gov."],
          words: [["Ripoti ya mikopo", "kumbukumbu ya mikopo yako, kadi za mkopo na malipo ya bili."], ["Shirika la taarifa za mikopo", "kampuni inayotunza ripoti za mikopo: Equifax, Experian, TransUnion."], ["Kupinga", "kuomba rasmi kosa lirekebishwe."]],
          sources: [{ name: "FTC: Free Credit Reports", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Ripoti yako ya mikopo", bullets: ["Kumbukumbu ya mikopo, kadi na bili", "Wenye nyumba na wakopeshaji wanaweza kuikagua", "Makosa hutokea"] },
            { title: "Ipate bure", bullets: ["AnnualCreditReport.com ndiyo tovuti rasmi", "Equifax, Experian, TransUnion", "Bure kila wiki"] },
            { title: "Nini cha kutafuta", bullets: ["Akaunti usizozijua", "Anwani zisizo sahihi au malipo yaliyochelewa", "Pinga makosa: angalia consumerfinance.gov"] }
          ],
          tryIt: "Andika tovuti rasmi ya ripoti za mikopo za bure na majina ya mashirika matatu. Kama uko tayari na uko kwenye kifaa chako binafsi, omba ripoti moja na utafute chochote usichokitambua.",
          youCanNow: "kupata ripoti zako za mikopo za bure kutoka tovuti rasmi na kutambua makosa ya kupinga.",
          quickCheck: [
            { objective: "O4", q: "Nani anaweza kuangalia ripoti yako ya mikopo?", options: ["Wewe tu", "Familia yako tu", "Wenye nyumba, wakopeshaji na baadhi ya waajiri", "Hakuna mtu"], answer: 2, why: "Wenye nyumba, wakopeshaji na baadhi ya waajiri wanaweza kukagua ripoti yako ya mikopo." },
            { objective: "O4", q: "Tangazo linatoa ripoti ya mikopo ya \"bure\" kwenye tovuti usiyoijua. Unafanya nini?", options: ["Kujiandikisha na kuweka kadi yako", "Kubonyeza tangazo", "Kupuuza ripoti za mikopo", "Kuandika AnnualCreditReport.com mwenyewe"], answer: 3, why: "AnnualCreditReport.com ndiyo tovuti rasmi; nyingine zinaweza kujaribu kukuuzia kitu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Msaada wa bure wa kodi na pesa",
          minutes: 5,
          goal: "Pata kituo cha msaada wa kodi wa bure na chanzo kinachoaminika kwa maswali ya pesa.",
          text: [
            "Huhitaji kulipa pesa nyingi ili kodi zako zishughulikiwe. Mpango wa IRS wa Volunteer Income Tax Assistance, VITA, unatoa msaada wa kodi wa bure, hasa kwa watu wanaotimiza viwango vya mapato vya Earned Income Tax Credit. Vituo vingi pia vinasaidia watu wanaopata kama $70,244 au chini, watu wenye ulemavu na watu wenye Kiingereza kidogo. Kila kituo kinaweza kuweka sheria zake, kwa hiyo uliza kituo.",
            "Tafuta kituo cha VITA kwa IRS VITA/TCE Locator kwenye freetaxassistance.for.irs.gov au kwa kupiga 800-906-9887. TCE inatoa msaada kama huo wa bure, hasa kwa watu wa miaka 60 na zaidi.",
            "Kwa maswali mengine ya pesa, Consumer Financial Protection Bureau kwenye consumerfinance.gov ina miongozo ya bure kuhusu akaunti za benki, ukusanyaji wa madeni, mikopo ya payday na zaidi, na njia ya kuwasilisha malalamiko kuhusu kampuni. Mikopo ya payday na apps za pesa za haraka zinaweza kugharimu zaidi sana kuliko zinavyoonekana; soma gharama kamili kabla ya kusaini."
          ],
          steps: ["Tafuta kwenye IRS VITA/TCE Locator au piga 800-906-9887.", "Uliza kituo vitu vya kubeba.", "Tumia consumerfinance.gov kwa maswali ya pesa.", "Kabla ya mkopo wowote, omba gharama kamili kwa dola."],
          words: [["VITA", "Volunteer Income Tax Assistance: msaada wa kodi wa bure unaoungwa mkono na IRS (mamlaka ya kodi ya Marekani)."], ["Mkopo wa payday", "mkopo mdogo wa muda mfupi unaoweza kuwa ghali sana."]],
          sources: [{ name: "IRS: Free tax return preparation for qualifying taxpayers", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Msaada wa kodi wa bure: VITA", bullets: ["Unaungwa mkono na IRS, unaendeshwa na wajitolea waliofunzwa", "Vituo vingi vinasaidia wanaopata kama $70,244 au chini", "Vituo vinaweza kuweka sheria zao"] },
            { title: "Tafuta kituo", bullets: ["freetaxassistance.for.irs.gov", "Au piga 800-906-9887", "TCE: msaada wa bure hasa kwa miaka 60+"] },
            { title: "Msaada wa pesa unaoaminika", bullets: ["Miongozo na malalamiko kwenye consumerfinance.gov", "Mikopo ya payday inaweza kugharimu sana", "Omba gharama kamili kabla ya kusaini"] }
          ],
          tryIt: "Tumia IRS VITA/TCE Locator kupata kituo cha msaada wa kodi wa bure kilicho karibu nawe. Andika anwani yake na vitu inavyosema ubebe.",
          youCanNow: "kupata msaada wa kodi wa bure na taarifa za pesa zinazoaminika.",
          quickCheck: [
            { objective: "O5", q: "TCE inatoa nini hasa?", options: ["Msaada wa kodi wa bure, hasa kwa watu wa miaka 60 na zaidi", "Mikopo ya kulipia", "Kadi za mkopo", "Mafunzo ya kazi"], answer: 0, why: "TCE inatoa msaada wa kodi wa bure kama VITA, hasa kwa watu wa miaka 60 na zaidi." },
            { objective: "O5", q: "App ya pesa za haraka inakupa $200 leo. Unauliza nini kwanza?", options: ["Jinsi unavyoweza kupata zaidi haraka", "Gharama kamili kwa dola", "Kama marafiki zako wanaitumia", "Hakuna; saini tu"], answer: 1, why: "Mikopo ya payday na apps za pesa za haraka zinaweza kugharimu zaidi sana kuliko zinavyoonekana." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutambua utapeli wa pesa, na mpango wako wa mwisho",
          minutes: 5,
          goal: "Tambua utapeli wa kawaida wa pesa na umalize mpango wako wa bajeti.",
          text: [
            "Matapeli huwalenga watu wenye uhaba wa pesa kwa mikopo ya uongo, msaada wa madeni wa uongo, ruzuku za serikali za uongo na ofa za \"utajiri wa haraka\", pamoja na mipango ya crypto. Baadhi sasa wanatumia AI kuandika jumbe zinazoonekana halisi au kuiga sauti ya mtu wa familia.",
            "Dalili za hatari: wanakuharakisha, wanakuomba ulipe kwa kadi za zawadi (gift cards), kutuma pesa kwa wire, apps za malipo au crypto, wanaahidi pesa za uhakika, au wanaomba taarifa zako za kuingia kwenye benki au msimbo uliotumwa kwenye simu yako. Shirika halisi la serikali halitapiga simu kudai malipo kwa njia hiyo.",
            "Kama kitu kinaonekana si sawa, simama, kata simu na upige tena kwa namba unayoijua kuwa halisi. Unaweza kuripoti utapeli kwa Federal Trade Commission (FTC) kwenye ReportFraud.ftc.gov."
          ],
          steps: ["Angalia uharakishaji, kadi za zawadi, crypto na pesa za uhakika.", "Kamwe usishiriki taarifa za kuingia kwenye benki wala misimbo ya simu.", "Kata simu na upige tena kwa namba unayoijua.", "Ripoti utapeli kwa FTC."],
          words: [["Utapeli", "hila ya kuiba pesa au taarifa."], ["Faida za uhakika", "ahadi kwamba hakika utapata pesa; maneno ya kawaida ya matapeli."]],
          sources: [{ name: "Federal Trade Commission: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          slides: [
            { title: "Utapeli wa kawaida wa pesa", bullets: ["Mikopo na msaada wa madeni wa uongo", "Ruzuku za serikali za uongo", "\"Utajiri wa haraka\" na mipango ya crypto"] },
            { title: "Dalili za hatari", bullets: ["Wanakuharakisha", "Kadi za zawadi, wire, apps za malipo au crypto", "Pesa za uhakika; wanaomba msimbo wako"] },
            { title: "Nini cha kufanya", bullets: ["Simama na ukate simu", "Piga tena kwa namba unayoijua", "Ripoti kwenye ReportFraud.ftc.gov"] }
          ],
          tryIt: "Kazi ya mwisho: maliza bajeti yako ya mwezi mmoja kwa msaada wa AI (bila namba za binafsi), kagua jumla, andika lengo moja la akiba lenye kiasi na tarehe, na andika utapata wapi ripoti yako ya mikopo ya bure na msaada wa kodi wa bure.",
          youCanNow: "kutengeneza bajeti ya familia, kupanga akiba, kupata msaada wa bure na kuepuka utapeli wa pesa.",
          quickCheck: [
            { objective: "O6", q: "Ombi lipi la malipo ni dalili ya hatari ya utapeli?", options: ["Bili kutoka kampuni yako ya huduma unayoijua kwenye anwani yake ya kawaida", "Kulipa kodi ya nyumba kwa mwenye nyumba kwa hundi", "Kuambiwa ulipe kwa kadi za zawadi", "Kulipa kwenye kaunta ya duka"], answer: 2, why: "Matapeli huomba kadi za zawadi, wire, apps za malipo au crypto." },
            { objective: "O6", q: "Unapigiwa simu kwa sauti ya binamu yako akiomba pesa sasa hivi. Unafanya nini?", options: ["Kutuma mara moja", "Kumpa taarifa zako za kuingia kwenye benki", "Kulipa kwa kadi za zawadi", "Kukata simu na kumpigia binamu yako kwa namba unayoijua"], answer: 3, why: "Matapeli wanaweza kuiga sauti kwa AI, kwa hiyo unapiga tena kwa namba unayoijua." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mikopo, msaada na kukaa salama",
        questions: [
          { objective: "O4", q: "Tovuti rasmi ya ripoti za mikopo za bure ni ipi?", options: ["Tovuti yoyote inayosema \"bure\"", "Kiungo katika ujumbe mfupi", "Tangazo la mitandao ya kijamii", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com ndiyo tovuti rasmi ya ripoti za bure." },
          { objective: "O4", q: "Unakuta akaunti kwenye ripoti yako ya mikopo ambayo si yako. Unapaswa:", options: ["Kuipinga kwa shirika la taarifa za mikopo", "Kuipuuza", "Kuilipa mara moja", "Kuiweka mtandaoni"], answer: 0, why: "Kupinga kunarekebisha makosa kwenye ripoti yako." },
          { objective: "O5", q: "VITA ni nini?", options: ["Mkopo wa payday", "Msaada wa kodi wa bure unaoungwa mkono na IRS", "Shirika la taarifa za mikopo", "Akaunti ya akiba"], answer: 1, why: "VITA inatoa huduma ya kuandaa kodi bure kupitia wajitolea waliofunzwa." },
          { objective: "O6", q: "Mpigaji anasema anatoka serikalini na lazima ulipe faini leo kwa kadi za zawadi. Huu ni:", options: ["Kawaida", "Marejesho ya kodi", "Utapeli", "Huduma ya VITA"], answer: 2, why: "Mashirika ya serikali hayadai malipo kwa kadi za zawadi." },
          { objective: "O6", q: "Unaweza kuripoti utapeli wapi?", options: ["Kwa tapeli mwenyewe", "Hakuna mahali", "Katika kikundi cha gumzo tu", "ReportFraud.ftc.gov"], answer: 3, why: "Federal Trade Commission inapokea ripoti za utapeli." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Elimu ya Fedha",
    questions: [
      { objective: "O1", q: "Bajeti ni:", options: ["Mpango wa pesa zako", "Aina ya mkopo", "Kadi ya mkopo", "Ada ya benki"], answer: 0, why: "Bajeti inapanga mapato na matumizi." },
      { objective: "O1", q: "Lipi ni mapato?", options: ["Kodi ya nyumba", "Mshahara", "Vyakula", "Bili ya simu"], answer: 1, why: "Mapato ni pesa zinazoingia." },
      { objective: "O1", q: "Lipi ni takwa?", options: ["Malezi ya mtoto ili ufanye kazi", "Umeme", "Kula hotelini", "Dawa"], answer: 2, why: "Kula hotelini ni kuzuri kuwa nako, si lazima." },
      { objective: "O1", q: "Unapoanza bajeti, ni sawa:", options: ["Kuruka mapato", "Kutumia nywila yako", "Kubahatisha ovyo", "Kukadiria kiasi hadi dola iliyo karibu au dola tano"], answer: 3, why: "Kiasi kilichokadiriwa kilicho karibu kinatosha kuanza." },
      { objective: "O2", q: "Nini hupaswi KAMWE kuandika katika msaidizi wa AI?", options: ["Namba ya kadi yako", "\"Chakula kama $600\"", "\"Familia ya watu 4\"", "\"Pendekeza sehemu mbili za kupunguza\""], answer: 0, why: "Namba za kadi ni taarifa binafsi." },
      { objective: "O2", q: "AI inapendekeza kukata pasi ya basi ya mtoto wako. Wewe:", options: ["Lazima ufanye hivyo", "Unaamua kinachofaa familia yako; kidokezo hicho huenda hakifai", "Unamuuliza mgeni", "Unaipa AI taarifa zako za kuingia kwenye benki"], answer: 1, why: "Vidokezo vya AI ni mawazo; wewe unachagua kinachofaa." },
      { objective: "O2", q: "Kwa nini ukague jumla za bajeti za AI?", options: ["AI haikosei kamwe", "Ni sheria", "AI inaweza kukosea hesabu", "Inabadilisha salio la benki yako"], answer: 2, why: "Daima kagua hesabu mwenyewe." },
      { objective: "O3", q: "Akiba ya dharura ni:", options: ["Pesa za matakwa", "Mkopo", "Ripoti ya mikopo", "Pesa zilizowekwa kwa gharama za ghafla tu"], answer: 3, why: "Inashughulikia mambo ya ghafla kama matengenezo ya gari." },
      { objective: "O3", q: "Unataka $260 kwa wiki 26. Kiasi gani kila wiki?", options: ["$5", "$10", "$26", "$100"], answer: 1, why: "$260 ukigawanya kwa wiki 26 ni $10." },
      { objective: "O3", q: "Bima ya FDIC inalinda amana hadi:", options: ["$1,000", "$250,000 kwa mweka amana, kwa benki yenye bima, kwa aina ya umiliki", "Kiasi chochote", "Crypto tu"], answer: 1, why: "Hicho ndicho kiwango cha kawaida cha FDIC." },
      { objective: "O3", q: "Nini HAKILINDWI na bima ya FDIC?", options: ["Akaunti ya akiba katika benki yenye bima", "Akaunti ya hundi katika benki yenye bima", "Crypto", "Cheti cha amana katika benki yenye bima"], answer: 2, why: "FDIC hailindi crypto wala hisa." },
      { objective: "O4", q: "Ripoti ya mikopo ni:", options: ["Mshahara wako", "Ritani yako ya kodi", "Bajeti yako", "Kumbukumbu ya mikopo yako, kadi na malipo ya bili"], answer: 3, why: "Wakopeshaji na wenye nyumba wanaweza kuiangalia." },
      { objective: "O4", q: "Mashirika matatu makubwa ya taarifa za mikopo ni:", options: ["Equifax, Experian na TransUnion", "Google, Bing na Yahoo", "FDIC, IRS na FTC", "Visa, Mastercard na Discover"], answer: 0, why: "Haya matatu yanatunza ripoti za mikopo." },
      { objective: "O4", q: "Mara ngapi unaweza kupata ripoti za bure kwenye AnnualCreditReport.com?", options: ["Mara moja kila miaka kumi", "Kila wiki", "Kamwe", "Ukilipa tu"], answer: 1, why: "Mashirika hayo yanatoa ripoti za bure kila wiki pale." },
      { objective: "O5", q: "Unaweza kupata wapi miongozo ya bure kuhusu ukusanyaji wa madeni na mikopo ya payday?", options: ["Tangazo linalojitokeza ghafla", "Ujumbe wa tapeli", "consumerfinance.gov", "Duka la kadi za zawadi"], answer: 2, why: "Consumer Financial Protection Bureau inachapisha miongozo ya bure." },
      { objective: "O5", q: "Unapataje kituo cha kodi cha VITA cha bure?", options: ["Kumuuliza mgeni", "Kulipa ada kwanza", "Kusubiri simu", "Kutumia IRS VITA/TCE Locator au kupiga 800-906-9887"], answer: 3, why: "Hizo ndizo njia rasmi za IRS za kupata kituo." },
      { objective: "O5", q: "Kabla ya kuchukua mkopo wa payday au app ya pesa za haraka, unapaswa:", options: ["Kuomba gharama kamili kwa dola", "Kusaini haraka", "Kutoa taarifa zako za kuingia kwenye benki", "Kuruka kusoma"], answer: 0, why: "Mikopo hii inaweza kugharimu zaidi sana kuliko inavyoonekana." },
      { objective: "O6", q: "Mtu anaahidi faida za \"uhakika\" za crypto. Hii ni:", options: ["Mpango salama", "Dalili ya kawaida ya hatari ya utapeli", "Ina bima ya FDIC", "Msaada wa kodi wa bure"], answer: 1, why: "Pesa za uhakika ni maneno ya zamani ya matapeli." },
      { objective: "O6", q: "Ujumbe unaomba msimbo uliotumwa kwenye simu yako ili \"kuthibitisha benki yako\". Wewe:", options: ["Unautuma", "Unauweka mtandaoni", "Kamwe usiushiriki, na upigie benki yako kwa namba unayoijua", "Unausoma kwa sauti"], answer: 2, why: "Msimbo huo unalinda akaunti yako." },
      { objective: "O6", q: "Kwa uamuzi mkubwa wa pesa, hatua bora ni:", options: ["Kuamini jibu lolote la AI", "Kufuata chapisho la mitandao ya kijamii", "Kumuuliza mtu anayekiuza", "Kukagua vyanzo rasmi au kuongea na mshauri wa bure wa shirika lisilo la faida"], answer: 3, why: "Vyanzo rasmi na washauri halisi wanakulinda." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 7, 9, 11, 13, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Bajeti", objective: "O1", notYet: "Mapato au matumizi yanakosekana, au mahitaji na matakwa hayajawekewa alama.", meets: "Mapato na matumizi ya mwezi mmoja kwa kiasi kilichokadiriwa, kila moja limewekewa alama ya hitaji au takwa, na jumla.", exceeds: "Anatumia hati za mshahara, taarifa au risiti ili kiasi kiwe karibu na halisi." },
      { name: "AI imetumika kwa usalama", objective: "O2", notYet: "Prompt ina namba ya akaunti, ya kadi au ya Social Security, au jumla hazikukaguliwa.", meets: "Aina zilizokadiriwa tu ndizo zilishirikiwa, jumla zilikaguliwa, na sehemu moja ya kuokoa ilichaguliwa.", exceeds: "Anaeleza kwa nini alikubali au alikataa kila pendekezo la AI." },
      { name: "Lengo la akiba", objective: "O3", notYet: "Hakuna kiasi wala tarehe.", meets: "Lengo moja lenye kiasi, tarehe na kiasi cha kila wiki kilichokaguliwa.", exceeds: "Anataja pesa zitawekwa wapi na kwamba zina bima ya serikali kuu." },
      { name: "Ripoti ya mikopo na msaada wa kodi", objective: "O5", notYet: "Hasemi wapi pa kupata ripoti au msaada wa kodi.", meets: "Anataja AnnualCreditReport.com na kituo cha VITA au TCE atakachotumia.", exceeds: "Ana anwani ya kituo cha kodi na vitu vya kubeba." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofuata bajeti yao na kuanza kuweka akiba ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaokagua ripoti yao ya mikopo au kutumia msaada wa kodi wa bure wa VITA ndani ya miezi 6",
      "Wanafunzi wanaoripoti kuepuka utapeli wa pesa au mkopo wa gharama kubwa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta ya maktaba, na kikokotoo (simu ina kimoja)",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Hati za mshahara, taarifa au risiti za mwezi mmoja (zihifadhiwe kwa siri)",
      "Karatasi au jedwali la bure (spreadsheet) kwa bajeti",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Wanafunzi wanahifadhi namba zao halisi kwa siri; toa bajeti ya mazoezi kwa yeyote asiyependa kutumia yake.",
      "Kagua prompts kuona kama zina namba za akaunti, za kadi au za Social Security kabla hazijatumwa.",
      "Usitoe ushauri wa uwekezaji, wa kodi wala wa kisheria; waelekeze wanafunzi kwa tovuti rasmi, VITA au mshauri wa bure wa shirika lisilo la faida.",
      "Onyesha AnnualCreditReport.com na VITA/TCE Locator moja kwa moja, na wanafunzi waombe ripoti kwenye kifaa binafsi tu.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
