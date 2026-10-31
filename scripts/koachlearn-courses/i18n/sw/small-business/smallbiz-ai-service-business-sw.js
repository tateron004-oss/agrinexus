"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-service-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CAN_SPAM = { name: "FTC: Sheria ya CAN-SPAM, mwongozo wa kufuata sheria kwa biashara", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

const FTC_REVIEWS = { name: "FTC: Kanuni ya maoni na ushuhuda wa wateja, maswali na majibu", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-service-business-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-service-business",
  category: "Small Business",
  name: "AI kwa Biashara za Huduma",
  skills: "Kuandika makadirio ya bei yaliyo wazi, Kuandaa ujumbe wa kuweka miadi na wa kukumbusha, Kutengeneza orodha za kukagua kazi, Kuandika maelezo ya huduma, Kufuatilia baada ya kazi, Kuomba maoni ya wateja kwa njia sahihi",
  outcome: "kutumia AI kuendesha makaratasi ya biashara ya huduma kuanzia simu ya kwanza hadi mteja anayerudi: kiolezo cha makadirio ya bei kilicho wazi, ujumbe wa kuweka miadi na wa kukumbusha, orodha ya kukagua kazi, orodha ya huduma pamoja na bei, na ujumbe wa kufuatilia unaoomba maoni ya kweli na kazi zaidi.",
  about: [
    "Kozi hii ni kwa watu wanaouza muda na ujuzi wao: wasafishaji wa nyumba, vinyozi na wasusi, mafundi wa kucha, watunza bustani, mafundi bomba na mafundi wa matengenezo, wahamishaji wa mizigo, mafundi magari wanaotembea, wapaka rangi, wanaotunza wanyama vipenzi na walimu wa masomo ya ziada. Wanafunzi wetu wengi wanaendesha biashara ya mtu mmoja au ya familia.",
    "Utatumia msaidizi wa AI wa bure pamoja na nyaraka na majedwali rahisi ili kujibu wateja wapya haraka, kutoa bei iliyo wazi, kufika ukiwa umejiandaa, kumaliza kila kazi kwa ubora ule ule wa juu, na kuwageuza wateja walioridhika kuwa wateja wanaorudi na wanaokuletea wengine.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza seti ya biashara ya huduma kwa kazi yako: orodha ya huduma pamoja na bei, kiolezo cha makadirio ya bei chenye kazi itakayofanywa, bei, kisichojumuishwa na muda ambao makadirio ni halali, violezo vya kuthibitisha miadi na vya kukumbusha, orodha ya kukagua kazi kwa kazi unayofanya mara nyingi zaidi, na ujumbe wa kufuatilia unaomshukuru mteja na kuomba maoni ya kweli na kukupendekeza kwa wengine.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaouza muda na ujuzi wao: wasafishaji wa nyumba, vinyozi na wasusi, mafundi wa kucha, watunza bustani, mafundi bomba na mafundi wa matengenezo, wahamishaji wa mizigo, mafundi magari wanaotembea, wapaka rangi, wanaotunza wanyama vipenzi na walimu wa masomo ya ziada. Wengi wanaendesha biashara ya mtu mmoja au ya familia.",
    startingPoint: "Wanaijua kazi yao vizuri na wanapata kazi kwa simu, ujumbe mfupi na watu kuwasemea. Wengi wanatumia simu kwa kila kitu na wana uzoefu mdogo wa wasaidizi wa AI, violezo au zana za kuweka miadi.",
    gap: "Kujibu polepole, bei zisizo wazi na wateja wasiofika vinawapotezea kazi na pesa. Wanafunzi wanahitaji makaratasi yaliyo tayari na wazi (orodha ya huduma, makadirio ya bei, ujumbe wa miadi, orodha ya kukagua na ujumbe wa kufuatilia) ili wapate kazi zaidi, waepuke mabishano na wapate kazi za kurudiwa.",
    constraints: [
      "Muda: wamiliki wako kazini siku nzima, kwa hiyo kila somo ni kama dakika 5",
      "Vifaa: mara nyingi simu tu",
      "Sheria za mikataba na leseni zinategemea jimbo na aina ya kazi",
      "Ujumbe wa matangazo unahitaji ruhusa na njia ya kujiondoa; maoni ya uongo au ya kulipiwa yamepigwa marufuku na FTC",
      "Faragha: usiwaombe wateja kamwe namba za kadi au kitambulisho kwa ujumbe mfupi au ujumbe wa mitandao ya kijamii"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa huduma na bei zako halisi", action: "kuandika orodha ya huduma inayoonyesha kilichojumuishwa, kinacholipiwa zaidi na bei", standard: "kila bei na kila kilichojumuishwa kikiwa kimekaguliwa na wewe" },
    { id: "O2", condition: "Ukipewa kazi halisi au ya mfano", action: "kutengeneza kiolezo cha makadirio ya bei na kukijaza kwa kazi itakayofanywa, bei, kisichojumuishwa na muda ambao ni halali", standard: "bei ikiwa imewekwa kutokana na gharama zako pamoja na faida" },
    { id: "O3", condition: "Ukipokea ombi jipya kwa ujumbe mfupi, barua pepe, ujumbe wa mitandao ya kijamii au simu uliyokosa", action: "kuandika kiolezo cha jibu la kwanza kinachomshukuru mtu, kuuliza maswali unayohitaji na kutoa hatua inayofuata", standard: "bila kuomba namba za kadi wala kitambulisho" },
    { id: "O4", condition: "Ukipewa sera yako ya kughairi", action: "kuandika ujumbe wa kuthibitisha miadi na ujumbe wa kukumbusha siku moja kabla", standard: "ukiwa na tarehe, muda wa kufika, anwani, bei na sera" },
    { id: "O5", condition: "Ukipewa kazi unayofanya mara nyingi zaidi", action: "kutengeneza orodha ya kukagua kazi kwa kabla ya kufika, ukiwa kazini na kabla ya kuondoka", standard: "ikiwa na hatua za usalama za kazi yako na ukaguzi wa mwisho pamoja na mteja" },
    { id: "O6", condition: "Baada ya kumaliza kazi", action: "kuandika ujumbe wa kufuatilia unaomshukuru mteja na kuomba maoni ya kweli, kukupendekeza kwa wengine na miadi inayofuata", standard: "kwa kufuata kanuni ya FTC kuhusu maoni ya wateja" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Orodha ya huduma iliyo wazi",
          minutes: 5,
          goal: "Andika orodha ya huduma yenye maelezo na bei zilizo wazi.",
          text: [
            "Wateja wanataka kujua unafanya nini na takriban gharama yake kabla ya kukupigia. Orodha ya huduma inaonyesha kila huduma, kilichojumuishwa, muda inaochukua na bei au kiwango cha bei.",
            "Mpe AI huduma na bei zako halisi: \"Andika orodha ya huduma kwa biashara yangu ya kusafisha nyumba: usafi wa kawaida $120 hadi vyumba 2 vya kulala, usafi wa kina $220, usafi wa kuhama kuanzia $260. Onyesha kilichojumuishwa katika kila moja. Maneno rahisi.\" Kagua kila kitu, hasa kilichojumuishwa na kisichojumuishwa.",
            "Orodha zilizo wazi hupunguza mabishano baadaye. Sema waziwazi kinacholipiwa zaidi (ndani ya oveni, manyoya ya wanyama, ngazi, safari ya zaidi ya maili 15)."
          ],
          steps: ["Orodhesha huduma zako na bei halisi.", "Andika kilichojumuishwa na kinacholipiwa zaidi.", "Mwombe AI apange orodha iliyo wazi.", "Kagua kila bei na kila kilichojumuishwa."],
          words: [["Orodha ya huduma", "orodha ya huduma unazotoa pamoja na kilichojumuishwa na bei."], ["Huduma ya ziada", "huduma ya nyongeza inayolipiwa zaidi (kwa Kiingereza add-on)."]],
          slides: [
            { title: "Wateja wanataka kujua kwanza", bullets: ["Unafanya nini", "Kilichojumuishwa", "Takriban gharama yake"] },
            { title: "Itengeneze kwa AI", bullets: ["Toa huduma na bei zako halisi", "Omba maneno yaliyo wazi na rahisi"] },
            { title: "Zuia mabishano", bullets: ["Sema kinacholipiwa zaidi", "Mfano: oveni, manyoya ya wanyama, safari ya zaidi ya maili 15"] }
          ],
          tryIt: "Andika orodha yako ya huduma yenye angalau huduma tatu, kilichojumuishwa na huduma za ziada. Tumia AI kuipanga, kisha kagua kila bei.",
          youCanNow: "kuandika orodha ya huduma iliyo wazi yenye vilivyojumuishwa, huduma za ziada na bei.",
          quickCheck: [
            { objective: "O1", q: "Orodha ya huduma inaonyesha nini kwa kila huduma?", options: ["Kilichojumuishwa, muda inaochukua na bei", "Jina la huduma tu", "Anwani ya nyumbani kwako na namba ya kitambulisho", "Bei za washindani wako"], answer: 0, why: "Orodha ya huduma inaonyesha kila huduma, kilichojumuishwa, muda inaochukua na bei au kiwango cha bei." },
            { objective: "O1", q: "Orodha ya AI inasema usafi wa kina unajumuisha ndani ya oveni, lakini wewe unalipisha zaidi kwa hilo. Unafanya nini?", options: ["Kuiacha na kubishana baadaye", "Kuibadilisha iseme ndani ya oveni kunalipiwa zaidi", "Kufuta usafi wa kina", "Kupandisha bei zote"], answer: 1, why: "Unakagua kila kilichojumuishwa, na kusema waziwazi kinacholipiwa zaidi kunazuia mabishano baadaye." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika makadirio ya bei",
          minutes: 6,
          goal: "Tengeneza kiolezo cha makadirio ya bei kilicho wazi, cha haki na kinachokulinda.",
          text: [
            "Makadirio ya bei yanasema hasa utafanya nini, kwa kiasi gani na kwa masharti gani. Makadirio mazuri yana: mteja na anwani ya kazi, kazi itakayofanywa, vifaa, bei, kisichojumuishwa, masharti ya malipo, lini kazi itaanza na muda ambao makadirio ni halali.",
            "Mwombe AI kiolezo: \"Tengeneza kiolezo cha makadirio ya bei cha ukurasa mmoja kwa biashara ndogo ya kupaka rangi chenye nafasi za kujaza [mteja], [anwani], [kazi], [vifaa], [bei], [haijumuishwi], [masharti ya malipo], [halali hadi].\" Kihifadhi katika Docs au Word.",
            "AI inaweza kukusaidia kueleza kazi waziwazi, lakini wewe ndiye unayeweka bei kutokana na gharama zako: vifaa, saa zako, safari na faida. Kwa kazi kubwa, sheria za mikataba na leseni zinategemea jimbo lako na aina ya kazi, kwa hiyo kagua kwenye bodi ya leseni za wakandarasi ya jimbo lako au kwa mtaalamu."
          ],
          steps: ["Mwombe AI kiolezo cha makadirio chenye nafasi za kujaza.", "Kijaze kwa kazi halisi au ya mfano.", "Weka bei kutokana na gharama zako pamoja na faida.", "Orodhesha kisichojumuishwa na muda ambao makadirio ni halali.", "Kagua sheria za leseni na mikataba kwa kazi kubwa."],
          words: [["Makadirio ya bei", "bei iliyoandikwa kwa kazi fulani (kwa Kiingereza quote)."], ["Kazi itakayofanywa", "hasa kile utakachofanya na usichofanya katika kazi (kwa Kiingereza scope of work)."], ["Masharti ya malipo", "lini na jinsi mteja analipa, kama malipo ya awali na yanayobaki kazi ikimalizika."]],
          slides: [
            { title: "Sehemu za makadirio mazuri", bullets: ["Mteja, anwani na kazi itakayofanywa", "Vifaa na bei", "Kisichojumuishwa, masharti ya malipo, halali hadi"] },
            { title: "AI inatengeneza kiolezo", bullets: ["Nafasi za kujaza kama [kazi] na [bei]", "Kihifadhi katika Docs au Word"] },
            { title: "Wewe unaweka bei", bullets: ["Vifaa + saa + safari + faida", "Kazi kubwa: kagua sheria za leseni na mikataba za jimbo"] }
          ],
          tryIt: "Tengeneza kiolezo chako cha makadirio kwa AI, kisha kijaze kwa kazi moja halisi au ya mfano. Piga hesabu ya bei kwenye karatasi kutokana na gharama zako.",
          youCanNow: "kuandika makadirio ya bei yaliyo wazi yanayoonyesha kazi, bei na masharti.",
          quickCheck: [
            { objective: "O2", q: "\"Masharti ya malipo\" kwenye makadirio yanamwambia mteja nini?", options: ["Rangi utakayotumia", "Msaidizi wako ni nani", "Jinsi na lini atalipa", "Kazi itachukua muda gani"], answer: 2, why: "Masharti ya malipo yanasema jinsi na lini mteja analipa." },
            { objective: "O2", q: "AI inapendekeza bei kwa makadirio yako ya kupaka rangi. Unafanya nini?", options: ["Kuitumia kwa sababu AI inaijua soko", "Kuizidisha mara mbili ili uwe salama", "Kuacha bei wazi", "Kuweka bei mwenyewe kutokana na vifaa, saa, safari na faida"], answer: 3, why: "AI inaweza kusaidia kueleza kazi, lakini wewe unaweka bei kutokana na gharama zako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kujibu wateja wapya haraka",
          minutes: 4,
          goal: "Jibu maombi mapya haraka kwa violezo vinavyouliza maswali sahihi.",
          text: [
            "Biashara ya kwanza kujibu mara nyingi ndiyo inayopata kazi. Kuwa na kiolezo tayari kwa kila njia watu wanayokufikia: ujumbe mfupi, barua pepe, ujumbe wa mitandao ya kijamii na simu ulizokosa.",
            "Jibu zuri la kwanza linawashukuru, linauliza maswali mawili au matatu unayohitaji ili kutoa bei (\"Vyumba vingapi vya kulala? Kuna wanyama vipenzi? Siku gani inakufaa?\"), na linatoa hatua inayofuata. Mwombe AI aandike moja kwa kila njia kwa sauti yako.",
            "Weka violezo kwenye simu yako ili uweze kujibu kati ya kazi. Usiwaombe watu watume namba za kadi au kitambulisho kwa ujumbe mfupi au ujumbe wa mitandao ya kijamii."
          ],
          steps: ["Orodhesha maswali unayohitaji ili kutoa bei.", "Mwombe AI kiolezo cha jibu la kwanza kwa kila njia.", "Vihifadhi kwenye simu yako.", "Jibu ndani ya saa moja kila unapoweza."],
          words: [["Mteja mtarajiwa", "mtu aliyeuliza kuhusu huduma yako lakini bado hajaweka miadi (kwa Kiingereza lead)."], ["Njia ya mawasiliano", "njia wateja wanayokufikia, kama ujumbe mfupi, barua pepe au mitandao ya kijamii."]],
          slides: [
            { title: "Kasi inaleta kazi", bullets: ["Jibu la kwanza mara nyingi linapata kazi", "Kiolezo kwa kila njia ya mawasiliano"] },
            { title: "Jibu zuri la kwanza", bullets: ["Washukuru", "Uliza maswali 2-3 unayohitaji", "Toa hatua inayofuata"] },
            { title: "Viweke karibu na salama", bullets: ["Violezo vimehifadhiwa kwenye simu yako", "Usiombe kamwe namba za kadi kwa ujumbe mfupi"] }
          ],
          tryIt: "Andika maswali yako matatu ya lazima. Mwombe AI kiolezo cha jibu la kwanza kwa ujumbe mfupi na kwa barua pepe kwa sauti yako, na uvihifadhi kwenye simu yako.",
          youCanNow: "kujibu wateja wapya haraka kwa violezo vinavyokusanya unachohitaji ili kutoa bei.",
          quickCheck: [
            { objective: "O3", q: "Unapaswa kuweka wapi violezo vyako vya jibu la kwanza?", options: ["Kwenye simu yako ili ujibu kati ya kazi", "Kwenye kompyuta ya nyumbani tu", "Kwenye karatasi ofisini", "Popote pale; andika kila jibu upya"], answer: 0, why: "Kuweka violezo kwenye simu yako kunakuwezesha kujibu haraka kati ya kazi." },
            { objective: "O3", q: "Mteja mpya anatuma ujumbe: \"Kukata nyasi ni bei gani?\" Jibu zuri la kwanza ni lipi?", options: ["\"Nitumie namba ya kadi yako ili uweke miadi.\"", "Mshukuru, uliza ukubwa wa eneo la nyasi na siku inayomfaa, na toa hatua inayofuata", "Subiri hadi wikendi ndipo ujibu", "Tuma orodha yako yote ya bei bila salamu"], answer: 1, why: "Jibu zuri la kwanza linawashukuru, linauliza maswali unayohitaji na linatoa hatua inayofuata." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata kazi",
        questions: [
          { objective: "O1", q: "Kwa nini uorodheshe kinacholipiwa zaidi kwenye orodha yako ya huduma?", options: ["Kuwachanganya wateja", "Kuzuia mabishano baadaye", "Kutoza ada zilizofichwa", "Haina faida"], answer: 1, why: "Huduma za ziada zilizo wazi zinaweka matarajio." },
          { objective: "O2", q: "Kipi kinafaa kuwa kwenye makadirio ya bei?", options: ["Punguzo la uongo", "Nywila yako", "Namba ya kadi ya mteja", "Kazi itakayofanywa na muda ambao makadirio ni halali"], answer: 3, why: "Kazi na muda wa uhalali vinazilinda pande zote mbili." },
          { objective: "O2", q: "Nani anaweka bei kwenye makadirio?", options: ["Wewe, kutokana na gharama na faida yako", "AI", "Mteja peke yake", "Mshindani"], answer: 0, why: "Wewe peke yako unajua gharama zako halisi." },
          { objective: "O2", q: "Unakagua wapi sheria za leseni kwa kazi kubwa?", options: ["Kwa jirani", "Kwenye mazungumzo na AI", "Bodi ya leseni za wakandarasi ya jimbo lako au mtaalamu", "Chapisho la mitandao ya kijamii"], answer: 2, why: "Leseni zinategemea jimbo lako na aina ya kazi." },
          { objective: "O3", q: "Jibu la kwanza kwa mteja mpya linapaswa kuwa na nini?", options: ["Ombi la namba ya kadi yake", "Bei yako tu", "Shukrani, maswali unayohitaji na hatua inayofuata", "Hakuna; subiri wiki moja"], answer: 2, why: "Hilo linamsogeza mteja kuelekea kuweka miadi." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya kazi na kumbakiza mteja",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ujumbe wa kuthibitisha miadi na wa kukumbusha",
          minutes: 4,
          goal: "Andaa ujumbe wa miadi na wa kukumbusha unaopunguza wateja wasiofika.",
          text: [
            "Wateja wasiofika na kukuta mlango umefungwa vinakupotezea malipo ya siku nzima. Ujumbe wa kuthibitisha na wa kukumbusha ulio wazi unasaidia. Ujumbe wa kuthibitisha unataja tarehe, muda wa kufika, anwani, bei, mteja anachopaswa kufanya ili kujiandaa na sera yako ya kughairi.",
            "Mwombe AI: \"Andika ujumbe wa kuthibitisha miadi na wa kukumbusha siku moja kabla kwa biashara yangu ya kuwatunza mbwa ninayoifanya kwa kutembea nyumbani kwa wateja. Nafasi za kujaza: [jina], [tarehe], [muda wa kufika], [anwani], [bei]. Weka sera yetu ya kughairi ya saa 24.\"",
            "Zana nyingi za kuweka miadi zinaweza kutuma vikumbusho zenyewe; angalia mipangilio ya zana yako. Ukituma ujumbe mfupi au barua pepe za matangazo (si vikumbusho tu), pata ruhusa kwanza na ufuate sheria za barua pepe, ikiwemo njia ya kujiondoa."
          ],
          steps: ["Andika sera yako ya kughairi.", "Mwombe AI kiolezo cha kuthibitisha na cha kukumbusha.", "Weka vikumbusho vya moja kwa moja kwenye zana yako ya miadi kama inavyo.", "Tuma matangazo tu ukiwa na ruhusa na njia ya kujiondoa."],
          words: [["Mteja asiyefika", "mteja anayekosa miadi aliyoiweka."], ["Sera ya kughairi", "sheria zako za kughairi, kama kutoa taarifa saa 24 kabla."], ["Muda wa kufika", "muda wa kati ambao utafika, kama saa 3 hadi saa 5 asubuhi (9 hadi 11 am)."]],
          slides: [
            { title: "Punguza wateja wasiofika", bullets: ["Ujumbe wa kuthibitisha mara tu baada ya kuweka miadi", "Ujumbe wa kukumbusha siku moja kabla"] },
            { title: "Ujumbe mzuri wa kuthibitisha", bullets: ["Tarehe, muda wa kufika, anwani, bei", "Jinsi ya kujiandaa", "Sera ya kughairi"] },
            { title: "Tumia mfumo na fuata sheria", bullets: ["Zana za miadi zinaweza kutuma vikumbusho", "Matangazo yanahitaji ruhusa na njia ya kujiondoa"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Andika sera yako ya kughairi kwa mistari miwili. Mwombe AI kiolezo cha kuthibitisha na cha kukumbusha siku moja kabla chenye nafasi za kujaza, na uvihifadhi.",
          youCanNow: "kutuma ujumbe wa kuthibitisha miadi na wa kukumbusha unaopunguza wateja wasiofika.",
          quickCheck: [
            { objective: "O4", q: "Ujumbe wa kuthibitisha na wa kukumbusha unasaidia kuzuia tatizo gani?", options: ["Hali mbaya ya hewa", "Bei za juu za vifaa", "Wateja wasiofika na kukuta mlango umefungwa", "Maoni ya uongo"], answer: 2, why: "Somo linasema wateja wasiofika na milango iliyofungwa vinapoteza malipo ya siku, na vikumbusho vinasaidia kuvipunguza." },
            { objective: "O4", q: "Unataka kuwatumia wateja wako wote wa zamani ujumbe wa punguzo la sikukuu. Unahitaji nini kwanza?", options: ["Hakuna; vikumbusho na matangazo ni kitu kimoja", "Namba mpya ya simu", "Idhini ya AI", "Ruhusa yao, na njia ya kujiondoa"], answer: 3, why: "Ujumbe wa matangazo, tofauti na vikumbusho, unahitaji ruhusa na njia ya kujiondoa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Orodha za kukagua kazi kwa ubora ule ule kila wakati",
          minutes: 5,
          goal: "Geuza ujuzi wako kuwa orodha ya kukagua kazi ambayo wewe na wasaidizi wako mnaifuata.",
          text: [
            "Orodha ya kukagua inafanya kila kazi iwe nzuri kama kazi yako bora zaidi, hata siku uliyochoka au msaidizi anapoifanya. Pia inakusaidia kuwafundisha watu wapya.",
            "Sema au andika jinsi unavyofanya kazi yako ya kawaida, mwanzo hadi mwisho, kisha mwombe AI: \"Geuza maelezo haya kuwa orodha ya kukagua kazi kwa huduma ya kawaida ya kukata nyasi nyumbani: kabla ya kufika, ukiwa kazini, kabla ya kuondoka. Hatua fupi.\" Ongeza hatua za usalama ambazo kazi yako inazihitaji, na uzikague kwa mwongozo rasmi wa usalama au mafunzo ya kazi yako.",
            "Ongeza ukaguzi wa mwisho pamoja na mteja na picha za kabla na baada (kwa ruhusa yake) ili kuonyesha kazi."
          ],
          steps: ["Eleza kazi yako ya kawaida mwanzo hadi mwisho.", "Mwombe AI aigeuze kuwa orodha yenye sehemu tatu.", "Ongeza hatua za usalama za kazi yako.", "Ongeza ukaguzi wa mwisho na picha kwa ruhusa.", "Ijaribu kwenye kazi inayofuata na uirekebishe."],
          words: [["Orodha ya kukagua", "orodha ya hatua za kuweka alama ili kisisahaulike chochote (kwa Kiingereza checklist)."], ["Ukaguzi wa mwisho", "kupitia kazi iliyokamilika pamoja na mteja (kwa Kiingereza walk-through)."]],
          slides: [
            { title: "Kwa nini orodha ya kukagua", bullets: ["Ubora ule ule kila wakati", "Inasaidia kuwafundisha wasaidizi"] },
            { title: "Itengeneze kwa AI", bullets: ["Eleza kazi yako mwanzo hadi mwisho", "Kabla ya kufika, ukiwa kazini, kabla ya kuondoka"] },
            { title: "Maliza vizuri", bullets: ["Hatua za usalama za kazi yako", "Ukaguzi wa mwisho pamoja na mteja", "Picha za kabla na baada kwa ruhusa"] }
          ],
          tryIt: "Eleza kazi yako ya kawaida kwa mistari michache. Mwombe AI aigeuze kuwa orodha yenye sehemu tatu, ongeza hatua za usalama, na uitumie kwenye kazi yako inayofuata.",
          youCanNow: "kutengeneza na kutumia orodha ya kukagua kazi inayoweka ubora ule ule kila wakati.",
          quickCheck: [
            { objective: "O5", q: "Sehemu tatu za orodha ya kukagua kazi katika somo hili ni zipi?", options: ["Kabla ya kufika, ukiwa kazini, kabla ya kuondoka", "Asubuhi, mchana, usiku", "Bei, kodi, bakshishi", "Simu, ujumbe mfupi, barua pepe"], answer: 0, why: "AI inageuza maelezo yako kuwa orodha yenye sehemu tatu: kabla ya kufika, ukiwa kazini na kabla ya kuondoka." },
            { objective: "O5", q: "Unataka kuongeza hatua ya usalama ya kutumia ngazi. Unaikagua wapi?", options: ["Uliza AI na uamini jibu", "Mwongozo rasmi wa usalama au mafunzo ya kazi yako", "Maoni ya mteja", "Ruka hatua za usalama ili kuokoa muda"], answer: 1, why: "Hatua za usalama zinakaguliwa kwa mwongozo rasmi au mafunzo ya kazi yako." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kufuatilia, maoni ya kweli na kazi za kurudiwa",
          minutes: 5,
          goal: "Fuatilia baada ya kazi ili kupata maoni ya kweli, wateja wapya kupitia wengine na miadi ya kurudiwa.",
          text: [
            "Kazi haiishi unapoondoka. Ujumbe wa shukrani siku hiyo hiyo, wenye kiungo cha kuacha maoni na pendekezo la kuweka miadi inayofuata, unaleta kazi za kurudiwa. Mwombe AI auandike kwa sauti yako ukiwa na nafasi za kujaza [jina] na [huduma].",
            "Mwombe kila mteja kwa njia ile ile, awe ameridhika au la, maoni ya kweli. Usitoe zawadi kwa maoni mazuri tu, na usiandike kamwe maoni ya uongo; kanuni ya FTC kuhusu maoni inapiga marufuku yote mawili.",
            "Weka vikumbusho kwa huduma za kurudiwa: mifereji ya paa kila msimu wa vuli, kunyoa nywele kila wiki tatu, ukaguzi wa jiko la kupasha joto nyumba kila mwaka. Ujumbe mfupi wa \"Ni wakati wa ... yako inayofuata?\" unaweka ratiba yako ikiwa imejaa."
          ],
          steps: ["Tuma shukrani siku hiyo hiyo.", "Weka kiungo cha maoni na uombe maoni ya kweli.", "Pendekeza miadi inayofuata.", "Weka vikumbusho kwa huduma za kurudiwa."],
          words: [["Kupendekezwa kwa wengine", "mteja anapomtuma rafiki yake kwako (kwa Kiingereza referral)."], ["Huduma ya kurudiwa", "kazi ambayo wateja wanaihitaji tena kwa ratiba."]],
          slides: [
            { title: "Shukrani siku hiyo hiyo", bullets: ["Washukuru kwa jina", "Kiungo cha maoni", "Pendekeza miadi inayofuata"] },
            { title: "Maoni ya kweli tu", bullets: ["Mwombe kila mteja kwa njia ile ile", "Hakuna zawadi kwa maoni mazuri tu", "Usiandike kamwe maoni ya uongo (kanuni ya FTC)"] },
            { title: "Weka ratiba ikiwa imejaa", bullets: ["Mifereji ya paa kila vuli; kunyoa nywele kila wiki 3", "Vikumbusho vya \"Ni wakati wa ... yako inayofuata?\""] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Kazi ya mwisho: kusanya seti yako ya huduma: orodha ya huduma, kiolezo cha makadirio ya bei, violezo vya jibu la kwanza, vya kuthibitisha na vya kukumbusha, orodha ya kukagua kazi, na ujumbe wa shukrani wa kufuatilia wenye ombi la maoni na pendekezo la miadi inayofuata.",
          youCanNow: "kuendesha makaratasi ya biashara ya huduma kuanzia simu ya kwanza hadi mteja anayerudi kwa msaada wa AI.",
          quickCheck: [
            { objective: "O6", q: "Unapaswa kutuma ujumbe wa shukrani lini baada ya kazi?", options: ["Mwezi ujao", "Tu kama mteja analalamika", "Siku hiyo hiyo", "Kamwe"], answer: 2, why: "Shukrani siku hiyo hiyo, yenye kiungo cha maoni na pendekezo la miadi inayofuata, inaleta kazi za kurudiwa." },
            { objective: "O6", q: "Mteja hakuridhika na sehemu ya kazi. Unaombaje maoni yake?", options: ["Usimwombe kabisa", "Toa punguzo tu kama atatoa nyota 5", "Mwandikie maoni mazuri", "Mwombe kwa njia ile ile kama kila mtu maoni ya kweli"], answer: 3, why: "Unamwomba kila mteja kwa njia ile ile maoni ya kweli; zawadi kwa maoni mazuri tu zimepigwa marufuku." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya kazi na kumbakiza mteja",
        questions: [
          { objective: "O4", q: "Kipi kinafaa kuwa kwenye ujumbe wa kuthibitisha miadi?", options: ["Tarehe, muda wa kufika, anwani, bei na sera ya kughairi", "Namba ya kadi ya mteja", "Nywila yako", "Hakuna"], answer: 0, why: "Maelezo hayo yanazuia mkanganyiko na wateja wasiofika." },
          { objective: "O4", q: "Kabla ya kutuma barua pepe za matangazo unahitaji:", options: ["Jina la mtumaji la uongo", "Hakuna", "Kitambulisho cha mteja", "Ruhusa na njia ya kujiondoa"], answer: 3, why: "CAN-SPAM inahitaji njia ya kujiondoa na ukweli." },
          { objective: "O5", q: "Kwa nini utumie orodha ya kukagua kazi?", options: ["Ili kwenda polepole", "Ubora ule ule kila wakati na mafunzo rahisi zaidi", "Ili kuruka usalama", "Ili kutoza zaidi"], answer: 1, why: "Orodha za kukagua zinaweka ubora usiobadilika." },
          { objective: "O5", q: "Kabla ya kupiga picha za kabla na baada unapaswa:", options: ["Kupata ruhusa ya mteja", "Kuzipiga kwa siri", "Kuweka anwani mtandaoni", "Kuruka hatua hiyo"], answer: 0, why: "Heshimu faragha ya mteja." },
          { objective: "O6", q: "Ombi lipi la maoni linafuata kanuni ya FTC?", options: ["Kuandika maoni kwenye akaunti za marafiki", "Punguzo la 10% kwa maoni ya nyota 5 tu", "Kumwomba kila mteja maoni ya kweli", "Kununua maoni"], answer: 2, why: "Maombi ya kweli yasiyo na masharti yanakubalika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Biashara za Huduma",
    questions: [
      { objective: "O1", q: "Orodha ya huduma inaonyesha:", options: ["Anwani za wateja", "Huduma, kilichojumuishwa na bei", "Nywila", "Namba za Social Security za wafanyakazi"], answer: 1, why: "Inaonyesha unachotoa na gharama yake." },
      { objective: "O1", q: "Huduma ya ziada ni:", options: ["Maoni ya mteja", "Zawadi ya bure", "Kodi", "Huduma ya nyongeza inayolipiwa zaidi"], answer: 3, why: "Huduma za ziada ni nyongeza." },
      { objective: "O1", q: "AI inapanga orodha yako ya huduma. Lazima ukague:", options: ["Rangi", "Mtindo wa herufi tu", "Hakuna", "Kila bei na kilichojumuishwa"], answer: 3, why: "AI inaweza kubadilisha maelezo." },
      { objective: "O2", q: "Kazi itakayofanywa (scope of work) maana yake ni:", options: ["Zana zako", "Hasa utakachofanya na usichofanya", "Gari lako la mizigo", "Saa zako"], answer: 1, why: "Inaeleza kazi ni nini hasa." },
      { objective: "O2", q: "Makadirio ya bei yanapaswa kusema ni kwa muda gani:", options: ["Yamechapishwa", "Yamesemwa", "Ni halali", "Yameandikwa"], answer: 2, why: "Bei zinabadilika; makadirio yanapaswa kuisha muda." },
      { objective: "O2", q: "Bei inayotokana na gharama zako inajumuisha:", options: ["Vifaa, saa, safari na faida", "Vifaa tu", "Safari tu", "Kile AI inachopendekeza"], answer: 0, why: "Gharama zote pamoja na faida." },
      { objective: "O3", q: "Mteja mtarajiwa (lead) ni:", options: ["Zana", "Aina ya chuma", "Mtu aliyeuliza lakini bado hajaweka miadi", "Bili"], answer: 2, why: "Wateja watarajiwa ni wateja wanaowezekana." },
      { objective: "O3", q: "Kwa nini uwajibu wateja wapya haraka?", options: ["Jibu la kwanza mara nyingi linapata kazi", "Ni lazima kisheria", "Ili kuwaudhi", "Haijalishi"], answer: 0, why: "Kasi inaleta kazi." },
      { objective: "O3", q: "Kipi usiombe kamwe kwa ujumbe mfupi?", options: ["Idadi ya vyumba vya kulala", "Namba ya kadi", "Siku inayofaa", "Wanyama vipenzi nyumbani"], answer: 1, why: "Namba za kadi ni za siri." },
      { objective: "O4", q: "Muda wa kufika ni:", options: ["Sikukuu", "Kioo cha dirisha", "Tarehe ya mwisho ya kulipa", "Muda wa kati ambao utafika"], answer: 3, why: "Unaweka matarajio ya lini utafika." },
      { objective: "O4", q: "Ujumbe wa kukumbusha siku moja kabla unasaidia:", options: ["Kupunguza wateja wasiofika na milango iliyofungwa", "Kupandisha bei", "Kuruka kazi", "Kuficha sera"], answer: 0, why: "Vikumbusho vinapunguza kazi zinazokosekana." },
      { objective: "O4", q: "Vikumbusho vya moja kwa moja mara nyingi vinawekwa wapi?", options: ["Popote", "Kalenda ya karatasi", "Benki", "Mipangilio ya zana yako ya kuweka miadi"], answer: 3, why: "Zana nyingi za miadi zinatuma vikumbusho." },
      { objective: "O5", q: "Unapaswa kutengenezaje orodha ya kukagua kazi?", options: ["Kuiacha AI iibuni kutoka mwanzo", "Kunakili ya mshindani", "Kueleza kazi yako na AI iipange, kisha uijaribu", "Kuiruka"], answer: 2, why: "Ujuzi wako, uliopangwa na AI." },
      { objective: "O5", q: "Hatua za usalama katika orodha yako zinapaswa kukaguliwa kwa:", options: ["AI tu", "Mwongozo rasmi wa usalama au mafunzo ya kazi yako", "Chapisho la mitandao ya kijamii", "Hakuna"], answer: 1, why: "Usalama unahitaji chanzo cha kuaminika." },
      { objective: "O5", q: "Ukaguzi wa mwisho (walk-through) ni:", options: ["Maoni ya mteja", "Ukumbi", "Makadirio ya bei", "Kupitia kazi iliyokamilika pamoja na mteja"], answer: 3, why: "Unathibitisha kwamba mteja ameridhika." },
      { objective: "O6", q: "Unapaswa kutuma shukrani lini?", options: ["Kamwe", "Mwaka mmoja baadaye", "Siku hiyo hiyo", "Tu kama analalamika"], answer: 2, why: "Shukrani ya mapema inaleta maoni zaidi na miadi zaidi." },
      { objective: "O6", q: "Kutoa punguzo kwa maoni ya nyota 5 tu ni:", options: ["Marufuku chini ya kanuni ya FTC kuhusu maoni", "Sawa", "Lazima", "Busara"], answer: 0, why: "Zawadi zinazofungamana na maoni mazuri zimepigwa marufuku." },
      { objective: "O6", q: "Mfano wa huduma ya kurudiwa ni:", options: ["Kuhama mara moja tu", "Kusafisha mifereji ya paa kila vuli", "Dirisha lililovunjika mara moja", "Kufikisha mzigo mmoja"], answer: 1, why: "Inarudiwa kwa ratiba." },
      { objective: "O6", q: "Kupendekezwa kwa wengine (referral) ni:", options: ["Ada", "Mteja anapomtuma rafiki yake kwako", "Kodi", "Zana"], answer: 1, why: "Mapendekezo yanaleta wateja wapya." },
      { objective: "O2", q: "Sehemu ipi ya kazi inabaki kwako, si kwa AI?", options: ["Kuweka bei na kufanya kazi vizuri", "Kupanga kiolezo", "Kuchagua maneno ya ujumbe wa kukumbusha", "Kupanga maelezo"], answer: 0, why: "AI inasaidia kwa maneno; wewe unaendesha biashara." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      7,
      8,
      10,
      12,
      16
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Orodha ya huduma iliyo wazi",
        objective: "O1",
        notYet: "Bei au vilivyojumuishwa havipo au si sahihi.",
        meets: "Kila huduma inaonyesha kilichojumuishwa, kinacholipiwa zaidi na bei.",
        exceeds: "Pia inaonyesha muda kila huduma inaochukua na huduma zozote za ziada."
      },
      {
        name: "Kiolezo kamili cha makadirio ya bei",
        objective: "O2",
        notYet: "Makadirio hayana kazi itakayofanywa, bei, kisichojumuishwa au muda ambao ni halali.",
        meets: "Sehemu zote zipo na bei inatokana na gharama zako pamoja na faida.",
        exceeds: "Pia yana masharti ya malipo na maelezo ya mahali sheria za leseni zilipokaguliwa kwa kazi kubwa."
      },
      {
        name: "Ujumbe wa miadi",
        objective: "O4",
        notYet: "Ujumbe wa kuthibitisha au wa kukumbusha hauna muda wa kufika, anwani au sera ya kughairi.",
        meets: "Ujumbe wa kuthibitisha na wa kukumbusha siku moja kabla wenye tarehe, muda wa kufika, anwani, bei na sera.",
        exceeds: "Pia unamwambia mteja jinsi ya kujiandaa na umewekwa kutumwa wenyewe."
      },
      {
        name: "Orodha ya kukagua kazi",
        objective: "O5",
        notYet: "Orodha inaruka hatua au haina hatua za usalama.",
        meets: "Orodha yenye sehemu tatu, hatua za usalama na ukaguzi wa mwisho.",
        exceeds: "Imejaribiwa kwenye kazi halisi na kurekebishwa baadaye."
      },
      {
        name: "Ufuatiliaji wa kweli",
        objective: "O6",
        notYet: "Ujumbe unatoa zawadi kwa maoni mazuri tu au hauna ombi la maoni.",
        meets: "Unamshukuru mteja, unaomba maoni ya kweli na kupendekezwa kwa wengine, na unapendekeza miadi inayofuata.",
        exceeds: "Pia unaweka kikumbusho kwa huduma inayofuata ya kurudiwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaoripoti kujibu wateja wapya haraka zaidi na kupata miadi zaidi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wamiliki wanaoripoti wateja wachache wasiofika au mabishano machache ya bei ndani ya siku 30",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya biashara ndogo ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure na nyaraka za bure kama Google Docs au Word",
      "Huduma, bei na gharama zako halisi, au za mfano",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Wapange wanafunzi kwa aina ya kazi ukiweza, ili wabadilishane orodha za kukagua na maneno ya makadirio ya bei.",
      "Wakumbushe wanafunzi kwamba bei zinatokana na gharama zao wenyewe, na sheria za leseni na mikataba zinatoka kwa bodi ya jimbo lao au kwa mtaalamu, si kwa AI.",
      "Waambie wanafunzi wahifadhi violezo kwenye simu zao wakati wa kipindi ili waondoke wakiwa tayari kuvitumia.",
      "Wakumbushe wanafunzi wasiwaombe kamwe wateja namba za kadi au kitambulisho kwa ujumbe mfupi, na wasiandike wala kununua maoni ya uongo kamwe.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
