"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-marketing.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC_ADS = { name: "FTC: Advertising and Marketing basics (misingi ya matangazo na masoko)", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };
const FTC_REVIEWS = { name: "FTC: Consumer Reviews and Testimonials Rule, Questions and Answers (kanuni ya maoni ya wateja na ushuhuda)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const CAN_SPAM = { name: "FTC: CAN-SPAM Act, A Compliance Guide for Business (mwongozo wa sheria ya barua pepe za masoko)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-marketing-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-marketing",
  category: "Small Business",
  name: "AI katika Masoko kwa Biashara Ndogo",
  skills: "Kuandika ujumbe wa masoko, Kutengeneza machapisho ya mitandao ya kijamii kwa AI, Kubuni tangazo la karatasi (flyer), Kupanga kalenda ya machapisho, Kuweka madai ya kweli, Kukagua kinachofanya kazi",
  outcome: "kupanga na kutengeneza masoko ya mwezi mmoja kwa biashara yako kwa msaada wa AI: ujumbe mkuu ulio wazi, kalenda ya machapisho ya wiki nne, machapisho kadhaa ya mitandao ya kijamii na flyer moja, yote yakiwa na madai ya kweli, na njia rahisi ya kuona machapisho yapi yalileta wateja.",
  about: [
    "Kozi hii ni kwa wamiliki wa biashara ndogo wanaofanya masoko yao wenyewe: mikahawa na magari ya chakula, saluni na vinyozi, maduka, huduma za usafi na ukarabati, na biashara za nyumbani. Wanafunzi wetu wengi ni biashara za watu wa jamii za wachache wanaotangaza biashara zao katika mitaa na jamii zao.",
    "Utatumia zana za AI za bure kupata ujumbe wako mkuu, kuandika machapisho na maelezo ya picha (captions), kubuni flyer, kupanga mwezi wa machapisho, kuweka madai yako ya kweli chini ya kanuni za FTC (tume ya biashara ya serikali ya Marekani), na kufuatilia kile kinacholeta wateja kweli.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi hizo zinajengana hadi kuwa masoko ya mwezi mmoja yaliyo tayari kuchapishwa."
  ],
  finalTask: "Tengeneza masoko ya mwezi mmoja: andika ujumbe wako mkuu, kalenda ya machapisho ya wiki nne yenye angalau machapisho manane, captions zilizokamilika kwa manne kati yake, flyer moja iliyotengenezwa kwa zana ya kubuni, na jedwali la kufuatilia linaloonyesha jinsi utakavyojua machapisho yapi yalileta wateja. Hakikisha kila dai ni la kweli na kila picha una haki ya kuitumia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo wanaofanya masoko yao wenyewe: mikahawa na magari ya chakula, saluni na vinyozi, maduka, huduma za usafi na ukarabati, na biashara za nyumbani. Wengi ni biashara za watu wa jamii za wachache wanaotangaza katika mitaa na jamii zao.",
    startingPoint: "Huchapisha kwenye mitandao ya kijamii mara kwa mara na huenda wamewahi kutengeneza flyer. Hawana ujumbe mkuu, kalenda ya machapisho wala ufuatiliaji, na wanatumia AI kidogo kwa masoko.",
    gap: "Machapisho ya kubahatisha yanachukua muda na mara chache huleta wateja, na AI inaweza kuongeza madai au picha zisizo za kweli, jambo linaloweza kuvunja kanuni za FTC na kuharibu uaminifu. Wamiliki wanahitaji ujumbe ulio wazi, mwezi wa machapisho ya kweli yaliyopangwa, na njia rahisi ya kuona kinacholeta wateja.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu janja yenye kamera; kompyuta inasaidia kwa flyer na jedwali",
      "Muda: masomo ya kama dakika 5 yanayoingia katika siku ya kazi yenye shughuli nyingi",
      "Kanuni: ukweli katika matangazo wa FTC, kanuni ya FTC ya maoni ya wateja, na CAN-SPAM kwa barua pepe za masoko",
      "Faragha na haki: ruhusa kabla ya kuchapisha picha ya mteja, na majina ya wateja yasiwekwe kwenye AI"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Biashara Ndogo\" inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia kanuni ya ujumbe mkuu na msaidizi wa AI", action: "kuandika ujumbe mkuu unaosema unamhudumia nani, unafanya nini na kwa nini wewe ni tofauti", standard: "kwa sentensi moja au mbili za kweli zinazosikika kama wewe" },
    { id: "O2", condition: "Ukipewa ujumbe wako mkuu", action: "kuandika machapisho ya mitandao ya kijamii na captions kwa msaada wa AI", standard: "ukiongeza jambo moja halisi katika kila moja, bila chochote kisicho cha kweli, na kwa ruhusa kwa picha yoyote ya mteja" },
    { id: "O3", condition: "Ukitumia zana ya kubuni ya bure", action: "kutengeneza flyer kwa ofa au tukio moja", standard: "yenye kichwa, picha moja halisi, maelezo matatu na wito wa kuchukua hatua, vyote vikiwa vimekaguliwa" },
    { id: "O4", condition: "Ukitumia msaidizi wa AI na jedwali", action: "kupanga kalenda ya machapisho ya wiki nne", standard: "yenye idadi ya machapisho unayoweza kuendeleza, aina mbalimbali za machapisho na kila tarehe ikiwa imekaguliwa" },
    { id: "O5", condition: "Ukipewa captions zako na flyer yako", action: "kukagua masoko yako kwa madai usiyoweza kuthibitisha, maoni bandia ya wateja na kanuni za barua pepe", standard: "kila dai lisilothibitishwa likiwa limebadilishwa au kuondolewa" },
    { id: "O6", condition: "Ukipewa machapisho yako na flyer yako", action: "kutengeneza jedwali la kufuatilia linaloonyesha masoko yapi yanaleta wateja", standard: "lenye msimbo wa ofa (promo code) kwa ofa moja na kila mwelekeo wa AI ukiwa umethibitishwa kwenye jedwali" }
  ],
  chapters: [
    {
      name: "Sura 1: Ujumbe wako na machapisho yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata ujumbe wako mkuu wa masoko",
          minutes: 5,
          goal: "Andika sentensi moja au mbili zinazosema unamhudumia nani, unafanya nini na kwa nini wewe ni tofauti.",
          text: [
            "Ujumbe wako mkuu ni jibu fupi la swali \"Kwa nini nikuchague wewe?\" Kila chapisho, flyer na bango linapaswa kuurudia kwa maneno tofauti.",
            "Kanuni rahisi: Tunawasaidia [nani] kupata [nini] kwa [kinachotufanya tuwe tofauti]. Mfano: \"Tunazisaidia familia zenye shughuli nyingi za South Sacramento kupata vyakula vya Kifilipino vya nyumbani, tayari kwa dakika 10, vinavyopikwa na familia ile ile tangu 2009.\"",
            "Iombe AI ikusaidie kuupata: \"Haya ndiyo wateja wanayosema kuhusu duka langu na ninachofanya kwa njia tofauti. Andika matoleo matano ya ujumbe mkuu wa sentensi moja.\" Chagua lile linalosikika kuwa la kweli na kama wewe."
          ],
          steps: ["Andika unamhudumia nani.", "Andika wanapata nini.", "Andika kinachokufanya uwe tofauti (cha kweli, mahususi).", "Iombe AI matoleo matano na uchague moja."],
          words: [["Ujumbe mkuu", "kauli fupi inayosema kwa nini wateja wakuchague wewe."], ["Kinachokutofautisha", "jambo la kweli linalokufanya uwe tofauti na washindani wako."]],
          slides: [
            { title: "Kwa nini nikuchague wewe?", bullets: ["Ujumbe wako mkuu unajibu swali hili", "Urudie katika kila chapisho na flyer"] },
            { title: "Kanuni", bullets: ["Tunawasaidia [nani]", "kupata [nini]", "kwa [kinachotufanya tuwe tofauti]"] },
            { title: "Tumia AI kutafuta", bullets: ["Shiriki wateja wanachosema kukuhusu", "Omba matoleo matano", "Chagua lile la kweli linalosikika kama wewe"] }
          ],
          tryIt: "Jaza kanuni kwa ajili ya biashara yako. Kisha muombe msaidizi wa AI matoleo matano na uchague bora zaidi.",
          youCanNow: "kuandika ujumbe mkuu ulio wazi kwa biashara yako.",
          quickCheck: [
            { objective: "O1", q: "Ujumbe mkuu unajibu swali gani kwa wateja?", options: ["Mnafunga saa ngapi?", "Mna wafanyakazi wangapi?", "Kwa nini nikuchague wewe?", "Ulinunua vifaa vyako wapi?"], answer: 2, why: "Ujumbe mkuu unawaambia wateja kwa nini wakuchague." },
            { objective: "O1", q: "AI inakupa matoleo matano ya ujumbe mkuu, na bora zaidi linadai wewe ni \"saluni nambari 1 mjini\". Ungefanya nini?", options: ["Kulitumia kwa sababu linasikika kwa nguvu", "Kuchagua toleo la kweli linalosikika kama wewe", "Kuyatumia yote matano", "Kuongeza neno \"labda\""], answer: 1, why: "Ujumbe wako mkuu lazima uwe wa kweli na usikike kama wewe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika machapisho na captions kwa AI",
          minutes: 5,
          goal: "Geuza ujumbe wako mkuu kuwa machapisho kadhaa ya mitandao ya kijamii kwa sauti yako mwenyewe.",
          text: [
            "Machapisho mazuri ya biashara ndogo yanaonyesha mambo halisi: chakula maalum cha leo, nywele kabla na baada ya kunyolewa, mteja mwenye furaha (kwa ruhusa), timu yako, yanayoendelea nyuma ya pazia, ushauri, tukio. Watu huwafuata watu.",
            "Iombe AI rasimu: \"Andika captions nne fupi za Instagram kwa kinyozi changu. Ujumbe mkuu: [ujumbe wako]. Moja kuhusu saa zetu za Jumamosi, moja kuhusu mtindo wa fade, moja ikimtambulisha kinyozi wetu mpya Marcus, moja yenye ushauri wa kutunza nywele. Za kirafiki, sentensi 2 kila moja, hashtag 3.\"",
            "Kisha hariri. Ongeza mambo halisi unayoyajua wewe tu. Ondoa chochote kinachosikika bandia au cha kupita kiasi. Daima pata ruhusa kabla ya kuchapisha picha au jina la mteja."
          ],
          steps: ["Chagua aina nne za machapisho: ofa, nyuma ya pazia, timu, ushauri.", "Iombe AI captions zenye ujumbe wako mkuu na sauti yako.", "Ongeza mambo halisi na uondoe chochote bandia.", "Pata ruhusa kwa picha au jina lolote la mteja."],
          words: [["Caption", "maandishi yanayoambatana na picha au video kwenye mitandao ya kijamii."], ["Hashtag", "neno lenye alama # mbele yake, linalotumika kukusanya machapisho ya mada moja."]],
          slides: [
            { title: "Chapisha mambo halisi", bullets: ["Chakula maalum cha leo au kabla na baada", "Timu yako na nyuma ya pazia", "Ushauri na matukio"] },
            { title: "Iombe AI rasimu", bullets: ["Toa ujumbe wako mkuu na sauti yako", "Taja aina za machapisho na urefu", "Omba hashtag chache"] },
            { title: "Kisha yafanye kuwa halisi", bullets: ["Ongeza mambo unayoyajua wewe tu", "Ondoa chochote bandia au cha kupita kiasi", "Ruhusa kabla ya picha au majina ya wateja"] }
          ],
          tryIt: "Iombe AI captions nne kwa biashara yako zenye ujumbe wako mkuu. Hariri kila moja kuongeza jambo moja halisi na kuondoa chochote kisicho cha kweli.",
          youCanNow: "kuandika machapisho ya mitandao ya kijamii kwa msaada wa AI yanayosikika halisi na kama biashara yako.",
          quickCheck: [
            { objective: "O2", q: "Caption ni nini?", options: ["Maandishi yanayoambatana na picha au video kwenye mitandao", "Leseni ya biashara", "Aina ya flyer", "Maoni ya mteja"], answer: 0, why: "Caption ni maandishi yanayoambatana na chapisho lako la picha au video." },
            { objective: "O2", q: "Unataka kuchapisha picha nzuri ya mtindo mpya wa nywele wa mteja. Ungefanya nini kwanza?", options: ["Kuichapisha na kumtaja", "Kuifanya iwe na ukungu na kuichapisha", "Kuiuliza AI kama ni sawa", "Kupata ruhusa ya mteja"], answer: 3, why: "Unahitaji ruhusa ya mteja kabla ya kuchapisha picha yake." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kubuni flyer au picha ya ofa",
          minutes: 5,
          goal: "Tengeneza flyer au picha iliyo wazi kwa ofa au tukio moja.",
          text: [
            "Flyer inafanya kazi kwenye kaunta, ubao wa matangazo wa jamii, tangazo la kanisa au kama chapisho la mitandao. Tumia zana ya kubuni ya bure kama Canva au Adobe Express, ukianza na kiolezo (template).",
            "Weka sehemu wazi: kichwa kikubwa (ofa), picha moja, maelezo matatu mafupi (nini, lini, wapi), na wito wa kuchukua hatua (\"Piga simu kuweka miadi\", \"Agiza mtandaoni\"). Weka ujumbe wako mkuu kwa herufi ndogo chini.",
            "Ukitumia picha zilizotengenezwa na AI, hakikisha hazionyeshi chakula, kazi au matokeo ambayo hutoi kweli. Tumia picha zako mwenyewe unapoweza; wateja huamini picha halisi."
          ],
          steps: ["Fungua zana ya kubuni na uchague kiolezo.", "Andika kichwa kikubwa chenye ofa.", "Ongeza picha moja, maelezo matatu na wito wa kuchukua hatua.", "Kagua herufi, namba ya simu, tarehe na anwani.", "Pakua au shiriki."],
          words: [["Wito wa kuchukua hatua", "maneno yanayowaambia watu wafanye nini baadaye, kama \"Piga simu kuweka miadi\"."], ["Kichwa", "maneno makubwa zaidi kwenye flyer au tangazo."]],
          slides: [
            { title: "Sehemu za flyer iliyo wazi", bullets: ["Kichwa kikubwa: ofa", "Picha moja", "Nini, lini, wapi", "Wito wa kuchukua hatua"] },
            { title: "Zana za kubuni za bure", bullets: ["Canva au Adobe Express", "Anza na kiolezo (template)"] },
            { title: "Picha ambazo wateja huamini", bullets: ["Tumia picha zako mwenyewe unapoweza", "Picha za AI zisionyeshe vitu usivyotoa"] }
          ],
          tryIt: "Tengeneza flyer kwa ofa au tukio moja halisi yenye kichwa, picha moja, maelezo matatu na wito wa kuchukua hatua. Kagua kila jambo kabla ya kuihifadhi.",
          youCanNow: "kubuni flyer au picha ya ofa iliyo wazi kwa biashara yako.",
          quickCheck: [
            { objective: "O3", q: "Wito wa kuchukua hatua ni nini?", options: ["Simu kwa mteja", "Kichwa kikubwa", "Maneno yanayowaambia watu wafanye nini baadaye", "Orodha ya bei"], answer: 2, why: "Wito wa kuchukua hatua unawaambia watu hatua inayofuata, kama \"Piga simu kuweka miadi\"." },
            { objective: "O3", q: "Flyer yako ina picha ya AI ya keki ambayo huoki. Ungefanya nini?", options: ["Kuiacha kwa sababu inapendeza", "Kuifanya iwe ndogo", "Kuongeza maelezo kwamba ni ya AI", "Kuibadilisha kwa picha halisi ya unachouza"], answer: 3, why: "Picha zinapaswa kuonyesha unachouza kweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Ujumbe wako na machapisho yako",
        questions: [
          { objective: "O1", q: "Ujumbe mkuu unajibu nini?", options: ["Nywila yako ni ipi?", "Kwa nini nikuchague wewe?", "Benki iko wapi?", "Mmiliki ana umri gani?"], answer: 1, why: "Ujumbe mkuu unasema kwa nini wateja wakuchague." },
          { objective: "O1", q: "Upi ni ujumbe mkuu wenye nguvu?", options: ["\"Sisi ni bora.\"", "\"Karibu ndani.\"", "\"Chakula.\"", "\"Tunazisaidia familia zenye shughuli nyingi za South Sacramento kupata vyakula vya Kifilipino vya nyumbani kwa dakika 10.\""], answer: 3, why: "Unasema nani, nini na kipi ni tofauti." },
          { objective: "O2", q: "Kabla ya kuchapisha picha ya mteja lazima:", options: ["Upate ruhusa yake", "Uongeze kichujio (filter)", "Uiulize AI", "Uichapishe usiku"], answer: 0, why: "Ruhusa inawaheshimu wateja na inazuia matatizo." },
          { objective: "O3", q: "Wito wa kuchukua hatua ni nini?", options: ["Hashtag", "Bili ya simu", "Maneno yanayowaambia watu wafanye nini baadaye", "Nembo (logo)"], answer: 2, why: "Unawaambia watu hatua inayofuata, kama \"Piga simu kuweka miadi\"." },
          { objective: "O3", q: "Picha ya AI inaonyesha mlo ambao huuzi. Unafanya nini?", options: ["Kuitumia hata hivyo", "Kuongeza milo bandia zaidi", "Kuibadilisha kwa picha halisi au picha ya unachouza", "Kuichapisha mara mbili"], answer: 2, why: "Picha zisiwapotoshe wateja." }
        ]
      }
    },
    {
      name: "Sura 2: Mipango, ukweli na matokeo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupanga kalenda ya machapisho ya mwezi",
          minutes: 5,
          goal: "Panga machapisho ya wiki nne katika kalenda rahisi.",
          text: [
            "Kalenda ya machapisho ni jedwali linalosema utachapisha nini na lini. Inazuia hofu ya \"nichapishe nini leo?\"",
            "Tengeneza safu: Tarehe, Jukwaa, Aina ya chapisho, Wazo, Caption tayari?, Picha tayari?. Panga machapisho mawili au matatu kwa wiki unayoweza kuendeleza kweli. Changanya aina: ofa, ushauri, timu, wateja (kwa ruhusa), na matukio ya jamii.",
            "Iulize AI: \"Tengeneza kalenda ya machapisho ya wiki nne kwa biashara yangu ya usafi, machapisho mawili kwa wiki, ikichanganya ofa, ushauri na machapisho ya timu. Ujumbe wetu mkuu ni [...]. Weka sikukuu na matukio ya mtaa katika [mji] mwezi [mwezi] ambayo ninapaswa kukagua.\" Kisha kagua kila tarehe na tukio wewe mwenyewe."
          ],
          steps: ["Tengeneza jedwali la kalenda lenye safu sita.", "Chagua machapisho mangapi kwa wiki unayoweza kuendeleza.", "Iombe AI mawazo ya wiki nne.", "Kagua tarehe na matukio ya mtaa wewe mwenyewe.", "Weka alama kwa machapisho yaliyokamilika unapoendelea."],
          words: [["Kalenda ya machapisho", "ratiba ya utakachochapisha na lini."], ["Jukwaa", "tovuti au app ya mitandao ya kijamii, kama Instagram, Facebook au TikTok."]],
          slides: [
            { title: "Kwa nini kalenda", bullets: ["Hakuna tena \"nichapishe nini leo?\"", "Jedwali la nini na lini"] },
            { title: "Safu", bullets: ["Tarehe, Jukwaa, Aina ya chapisho", "Wazo, Caption tayari?, Picha tayari?"] },
            { title: "Panga kwa AI", bullets: ["Machapisho mawili au matatu kwa wiki unayoweza kuendeleza", "Changanya ofa, ushauri, timu, jamii", "Kagua kila tarehe na tukio wewe mwenyewe"] }
          ],
          tryIt: "Iombe AI kalenda ya wiki nne, machapisho mawili kwa wiki, kwa biashara yako. Iweke kwenye jedwali na ukague kila tarehe.",
          youCanNow: "kupanga machapisho ya mwezi mmoja katika kalenda ya machapisho.",
          quickCheck: [
            { objective: "O4", q: "Kalenda ya machapisho ni nini?", options: ["Ratiba ya unachochapisha na lini", "Orodha ya sikukuu", "Ripoti ya mauzo", "Saa zako za kufungua"], answer: 0, why: "Kalenda ya machapisho inapanga machapisho yako kwa tarehe." },
            { objective: "O4", q: "Kalenda ya AI inapanga machapisho mawili kila siku, lakini una muda wa mawili kwa wiki. Ungefanya nini?", options: ["Kujaribu kuchapisha kila siku hata hivyo", "Kupunguza hadi idadi unayoweza kuendeleza kweli", "Kuacha kalenda", "Kuajiri kampuni ya masoko"], answer: 1, why: "Panga idadi ya machapisho unayoweza kuendeleza kweli." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuweka masoko yako ya kweli na halali",
          minutes: 5,
          goal: "Kagua masoko yako kwa madai usiyoweza kuthibitisha, maoni bandia na kanuni za barua pepe.",
          text: [
            "Federal Trade Commission (FTC), tume ya biashara ya Marekani, inasema matangazo lazima yawe ya kweli na yasipotoshe, na unahitaji ushahidi wa madai unayotoa. \"Taco bora LA\" inasomeka kama maoni, lakini \"Usafi wetu unaua asilimia 99 ya vijidudu\" au \"Punguza pauni 10\" ni dai unalopaswa kuweza kuthibitisha.",
            "AI hupenda maneno makubwa: \"imehakikishwa\", \"iliyoshinda tuzo\", \"nambari moja\". Ondoa yoyote usiyoweza kuthibitisha. Usichapishe kamwe maoni au ushuhuda bandia; kanuni ya FTC ya maoni inayapiga marufuku, pamoja na yale yaliyoandikwa na AI.",
            "Barua pepe za masoko lazima zifuate CAN-SPAM: mtumaji na kichwa cha kweli, sema kwamba ni tangazo, weka anwani yako ya posta na njia rahisi ya kujiondoa (unsubscribe), na utekeleze maombi ya kujiondoa ndani ya siku 10 za kazi."
          ],
          steps: ["Pigia mstari kila dai katika chapisho au flyer yako.", "Jiulize: naweza kuthibitisha hili?", "Ondoa au badilisha madai usiyoweza kuthibitisha.", "Hakuna maoni wala ushuhuda bandia.", "Kagua barua pepe za masoko kwa misingi ya CAN-SPAM."],
          words: [["Dai", "kauli ya ukweli katika tangazo, kama \"inaua asilimia 99 ya vijidudu\"."], ["Kupotosha", "kuelekea kuwapa watu wazo lisilo sahihi."], ["Ushuhuda", "kauli ya mteja inayosifu biashara yako, inayotumika katika masoko."]],
          slides: [
            { title: "FTC: matangazo ya kweli", bullets: ["Matangazo yasipotoshe", "Unahitaji ushahidi wa madai yako"] },
            { title: "Ondoa maneno makubwa usiyoweza kuthibitisha", bullets: ["\"Imehakikishwa\", \"iliyoshinda tuzo\", \"nambari moja\"", "Hakuna maoni bandia, hata yaliyoandikwa na AI"] },
            { title: "Barua pepe za masoko (CAN-SPAM)", bullets: ["Mtumaji na kichwa cha kweli; sema ni tangazo", "Anwani ya posta na njia rahisi ya kujiondoa", "Tekeleza maombi ya kujiondoa ndani ya siku 10 za kazi"] }
          ],
          sources: [FTC_ADS, FTC_REVIEWS, CAN_SPAM],
          tryIt: "Chukua captions zako nne na flyer yako. Pigia mstari kila dai, na ubadilishe au uondoe lolote usiloweza kuthibitisha.",
          youCanNow: "kukagua masoko yako kwa madai yasiyothibitishika, maoni bandia na matatizo ya kanuni za barua pepe.",
          quickCheck: [
            { objective: "O5", q: "Kwa mujibu wa FTC, matangazo lazima yaweje?", options: ["Ya kuchekesha", "Mafupi", "Ya kweli na yasiyopotosha", "Yachapishwe kila siku"], answer: 2, why: "Kanuni za FTC zinasema matangazo lazima yawe ya kweli na yasipotoshe." },
            { objective: "O5", q: "AI iliandika \"Imepigiwa kura kuwa taco bora LA\" kwenye caption yako, lakini hakuna kura iliyopigwa. Ungefanya nini?", options: ["Kuliondoa", "Kuliacha; kila mtu husema hivyo", "Kulibadilisha kuwa \"Imepigiwa kura kuwa taco bora mjini\"", "Kuwaomba marafiki wapige kura sasa"], answer: 0, why: "Madai usiyoweza kuthibitisha lazima yaondolewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuona kinachofanya kazi",
          minutes: 5,
          goal: "Fuatilia machapisho na flyer zipi zinaleta wateja.",
          text: [
            "Likes zinafurahisha, lakini wateja ni muhimu zaidi. Fuatilia ishara rahisi: ujumbe na simu, miadi iliyowekwa, watu wanaotaja chapisho, na matumizi ya msimbo maalum (\"Sema FLYER10 upate punguzo la asilimia 10\").",
            "Mitandao mingi ya kijamii inaonyesha namba za bure kwa akaunti za biashara, kama reach (waliofikiwa) na ziara za wasifu; tafuta sehemu ya insights au analytics. Andika namba muhimu katika jedwali la kufuatilia kila wiki.",
            "Mara moja kwa mwezi, bandika jedwali lako (bila majina ya wateja) kwenye msaidizi wa AI na uulize: \"Aina zipi za machapisho zilileta miadi mingi zaidi? Nifanye nini zaidi?\" Thibitisha hilo kwenye jedwali lako, kisha panga mwezi unaofuata."
          ],
          steps: ["Chagua ishara: ujumbe, miadi, kutajwa, matumizi ya msimbo.", "Ongeza msimbo maalum kwa ofa moja.", "Andika namba kila wiki kwenye jedwali.", "Iombe AI mielekeo mara moja kwa mwezi na uithibitishe."],
          words: [["Reach", "idadi ya watu walioona chapisho."], ["Insights", "namba ambazo jukwaa linaonyesha kuhusu jinsi machapisho yako yalivyofanya."], ["Promo code", "neno ambalo wateja husema au huandika ili kupata ofa, linalokusaidia kuifuatilia."]],
          slides: [
            { title: "Wateja kuliko likes", bullets: ["Ujumbe, simu na miadi", "Watu wanaotaja chapisho", "Misimbo maalum kama FLYER10"] },
            { title: "Namba za bure", bullets: ["Akaunti za biashara zinaonyesha insights", "Reach na ziara za wasifu", "Ziandike kwenye jedwali la kila wiki"] },
            { title: "Ukaguzi wa kila mwezi kwa AI", bullets: ["Bandika jedwali, bila majina", "Uliza nini kilileta miadi mingi zaidi", "Thibitisha, kisha panga mwezi unaofuata"] }
          ],
          tryIt: "Kazi ya mwisho: kamilisha masoko yako ya mwezi: ujumbe mkuu, kalenda ya wiki nne, captions nne zilizokamilika, flyer moja, na jedwali la kufuatilia lenye promo code kwa ofa moja. Kagua kila dai na picha.",
          youCanNow: "kupanga, kutengeneza na kupima masoko ya kweli ya mwezi mmoja kwa biashara yako.",
          quickCheck: [
            { objective: "O6", q: "Reach inamaanisha nini?", options: ["Watu wangapi walinunua kitu", "Watu wangapi waliona chapisho", "Wateja wanasafiri umbali gani", "Ulitengeneza machapisho mangapi"], answer: 1, why: "Reach ni idadi ya watu walioona chapisho." },
            { objective: "O6", q: "Unataka kujua kama flyer yako ilileta wateja. Ungefanya nini?", options: ["Kukisia kutokana na jinsi kunavyoonekana kuna shughuli", "Kuiomba AI ikisie", "Kuhesabu likes zako", "Kuweka promo code maalum kwenye flyer na kuifuatilia"], answer: 3, why: "Msimbo maalum unaonyesha masoko yapi yalileta kila mteja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mipango, ukweli na matokeo",
        questions: [
          { objective: "O4", q: "Kalenda ya machapisho ni nini?", options: ["Ratiba ya unachochapisha na lini", "Kalenda ya kodi", "Ratiba ya wafanyakazi", "Saa ya ukutani"], answer: 0, why: "Inapanga machapisho yako." },
          { objective: "O4", q: "Kalenda ya AI inaorodhesha tamasha la mtaa kwenye tarehe fulani. Unafanya nini?", options: ["Kufuta kalenda", "Kuiamini", "Kuchapisha kuhusu tamasha bila kukagua", "Kukagua tarehe wewe mwenyewe"], answer: 3, why: "AI inaweza kukosea tarehe na matukio." },
          { objective: "O5", q: "Dai lipi linahitaji ushahidi?", options: ["\"Karibu useme habari\"", "\"Usafi wetu unaua asilimia 99 ya vijidudu\"", "\"Tunaupenda mtaa wetu\"", "\"Tuko wazi Jumamosi\""], answer: 1, why: "Madai mahususi ya ukweli yanahitaji ushahidi." },
          { objective: "O6", q: "Ipi ni ishara bora kwamba chapisho lilifanya kazi?", options: ["Miadi mipya kutoka kwa watu wanaolitaja", "Like moja zaidi", "Rangi nzuri", "Caption ndefu"], answer: 0, why: "Wateja ni muhimu zaidi kuliko likes." },
          { objective: "O6", q: "Kwa nini kuongeza msimbo maalum kama FLYER10?", options: ["Unatakiwa kisheria", "Kuwachanganya wateja", "Kufuatilia masoko yapi yalileta wateja", "Kuficha bei"], answer: 2, why: "Misimbo inaonyesha sehemu ipi ilifanya kazi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI katika Masoko kwa Biashara Ndogo",
    questions: [
      { objective: "O1", q: "Kanuni ya ujumbe mkuu ni: Tunawasaidia [nani] kupata [nini] kwa...", options: ["Nywila yetu", "Kinachotufanya tuwe tofauti", "Punguzo kila wakati", "Jina la mshindani wetu"], answer: 1, why: "Kinachokutofautisha ndicho kinakamilisha kanuni." },
      { objective: "O1", q: "Ujumbe wako mkuu unapaswa kuwa:", options: ["Siri", "Mkubwa iwezekanavyo", "Umenakiliwa kutoka kwa mshindani", "Wa kweli na usikike kama wewe"], answer: 3, why: "Wateja huamini ujumbe wa kweli." },
      { objective: "O1", q: "Ujumbe wako mkuu unapaswa kuonekana wapi?", options: ["Hakuna mahali popote", "Kichwani mwako tu", "Kwenye kodi tu", "Katika machapisho, flyer na mabango yako"], answer: 3, why: "Kuurudia kunawafanya watu wakutambue." },
      { objective: "O2", q: "Lipi ni chapisho zuri la biashara ndogo?", options: ["Picha ya ufukwe ya kununua mtandaoni (stock photo)", "Nywele kabla na baada ya kunyolewa, kwa ruhusa", "Maoni bandia", "Picha ya mshindani"], answer: 1, why: "Kazi halisi hujenga uaminifu." },
      { objective: "O2", q: "Baada ya AI kuandika captions unapaswa:", options: ["Kuongeza madai makubwa zaidi", "Kuzichapisha bila kubadilisha", "Kuongeza mambo halisi na kuondoa chochote bandia", "Kufuta ukurasa wako"], answer: 2, why: "Kuhariri kunazifanya ziwe halisi na sahihi." },
      { objective: "O2", q: "Caption ni nini?", options: ["Maandishi yanayoambatana na picha au video kwenye mitandao", "Risiti", "Lebo ya bei", "Nembo (logo)"], answer: 0, why: "Captions zinaeleza machapisho." },
      { objective: "O3", q: "Zana zipi za bure zinaweza kutengeneza flyer?", options: ["Mashine ya kutunza fedha", "Kikokotoo", "Canva au Adobe Express", "Chaja ya simu"], answer: 2, why: "Ni zana za kubuni zenye violezo." },
      { objective: "O3", q: "Kichwa cha flyer kinapaswa kuwa:", options: ["Kikubwa na kuhusu ofa", "Kidogo sana", "Hakipo", "Nywila yako"], answer: 0, why: "Kichwa kinavutia macho." },
      { objective: "O3", q: "Wateja huamini picha ipi zaidi?", options: ["Picha za AI za vitu usivyouza", "Picha zako mwenyewe halisi", "Picha za kubahatisha za intaneti", "Picha za washindani"], answer: 1, why: "Picha halisi hujenga uaminifu." },
      { objective: "O4", q: "Unapaswa kupanga machapisho mangapi kwa wiki?", options: ["Mengi kama AI inavyopendekeza", "Hamsini", "Hakuna", "Idadi unayoweza kuendeleza kweli"], answer: 3, why: "Kuendelea kwa utaratibu ni bora kuliko kuchoka." },
      { objective: "O4", q: "Ipi ni safu ya kalenda ya machapisho?", options: ["Aina ya chapisho", "Namba ya kadi ya mteja", "Nywila", "PIN ya benki"], answer: 0, why: "Aina ya chapisho inakusaidia kuchanganya machapisho yako." },
      { objective: "O4", q: "Kuchanganya aina za machapisho kunamaanisha:", options: ["Kuchapisha upya tu", "Mapunguzo tu", "Selfie tu", "Machapisho ya ofa, ushauri, timu na jamii"], answer: 3, why: "Aina mbalimbali huwafanya wafuasi wavutiwe." },
      { objective: "O5", q: "Kwa mujibu wa FTC, matangazo lazima yawe:", options: ["Marefu", "Ya kuchekesha", "Ya kweli na yasiyopotosha", "Ya rangi"], answer: 2, why: "Hiyo ndiyo kanuni ya msingi ya FTC." },
      { objective: "O5", q: "AI iliongeza \"iliyoshinda tuzo\" lakini huna tuzo. Wewe:", options: ["Unaliacha", "Unaliondoa", "Unabuni tuzo", "Unaongeza \"imehakikishwa\""], answer: 1, why: "Madai yasiyothibitishika yanapotosha." },
      { objective: "O5", q: "Maoni bandia yaliyoandikwa na AI:", options: ["Yanatakiwa", "Ni sawa yakiwa mafupi", "Ni sawa wikendi", "Yamepigwa marufuku na kanuni ya FTC ya maoni"], answer: 3, why: "Kanuni hiyo inahusu pia maoni bandia yaliyotengenezwa na AI." },
      { objective: "O5", q: "Barua pepe ya masoko chini ya CAN-SPAM lazima iwe na:", options: ["Mtumaji bandia", "Namba ya kadi ya mteja", "Anwani yako ya posta na njia ya kujiondoa", "Isiwe na kichwa"], answer: 2, why: "Vyote viwili vinatakiwa." },
      { objective: "O6", q: "Reach inamaanisha:", options: ["Watu wangapi waliona chapisho", "Wangapi walinunua", "Wafanyakazi wangapi", "Nguvu ya Wi-Fi yako"], answer: 0, why: "Reach inahesabu walioona." },
      { objective: "O6", q: "Unapata wapi namba za bure za machapisho kwenye akaunti ya biashara?", options: ["Mashine yako ya kuchapisha risiti", "Sehemu ya insights au analytics", "Benki yako", "Hakuna mahali"], answer: 1, why: "Majukwaa yanaonyesha insights kwa akaunti za biashara." },
      { objective: "O6", q: "Kabla ya kubandika namba za ufuatiliaji kwenye AI, ondoa:", options: ["Tarehe", "Majina ya wateja", "Aina za machapisho", "Jumla"], answer: 1, why: "Majina ya wateja ni ya faragha." },
      { objective: "O6", q: "Baada ya AI kusema machapisho ya ushauri yanaleta miadi mingi zaidi, wewe:", options: ["Unathibitisha kwenye jedwali lako, kisha unapanga zaidi", "Unaacha machapisho yote ya ushauri", "Unapuuza", "Unafuta akaunti yako"], answer: 0, why: "Thibitisha, kisha chukua hatua." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 4, 5, 7, 8, 9, 12, 13, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ujumbe mkuu", objective: "O1", notYet: "Hauko wazi, au unasema jambo lisilo la kweli.", meets: "Sentensi moja au mbili za kweli: unamhudumia nani, unafanya nini, kwa nini wewe ni tofauti.", exceeds: "Unaonekana katika machapisho na kwenye flyer." },
      { name: "Kalenda ya machapisho", objective: "O4", notYet: "Machapisho chini ya manane, au tarehe hazijakaguliwa.", meets: "Wiki nne zenye angalau machapisho manane, tarehe zimekaguliwa.", exceeds: "Inachanganya machapisho ya ofa, ushauri, timu na jamii." },
      { name: "Captions", objective: "O2", notYet: "Chini ya nne, au zina mambo yasiyo ya kweli.", meets: "Captions nne zilizokamilika zenye jambo moja halisi katika kila moja.", exceeds: "Kila moja ina wito wa kuchukua hatua ulio wazi na inasikika kama mmiliki." },
      { name: "Flyer", objective: "O3", notYet: "Inakosa kichwa, maelezo au wito wa kuchukua hatua.", meets: "Kichwa, picha moja halisi, maelezo matatu na wito wa kuchukua hatua, vyote vimekaguliwa.", exceeds: "Ina promo code ya kufuatilia." },
      { name: "Madai na picha za kweli", objective: "O5", notYet: "Dai haliwezi kuthibitishwa, au picha si yako kuitumia.", meets: "Kila dai linaweza kuthibitishwa na kila picha ni yako au inatumiwa kwa ruhusa.", exceeds: "Mmiliki anaweza kusema jinsi kila dai linavyothibitishwa." },
      { name: "Jedwali la kufuatilia", objective: "O6", notYet: "Hakuna njia ya kujua machapisho yapi yalifanya kazi.", meets: "Jedwali la kuandika matokeo, lenye promo code kwa ofa moja.", exceeds: "Linatumia namba za bure za insights na lina mpango wa kukagua matokeo mwishoni mwa mwezi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaochapisha kufuata kalenda yao mwezi mzima (utafiti wa kufuatilia wa siku 30)",
      "Wamiliki wanaoweza kutaja chapisho au flyer ipi ilileta wateja wapya, kutoka kwenye jedwali lao la kufuatilia",
      "Wamiliki wanaoripoti miadi au mauzo zaidi baada ya mwezi huo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye kamera na intaneti; kompyuta inasaidia kwa flyer na jedwali",
      "Msaidizi wa AI wa bure na zana ya kubuni ya bure kama Canva au Adobe Express",
      "Picha halisi za biashara, bidhaa au kazi yako",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Waombe wamiliki walete picha chache halisi na ofa au tukio moja linalokuja kwenye kipindi.",
      "Wakumbushe wamiliki kupata ruhusa kabla ya kuchapisha picha ya mteja yeyote.",
      "Waambie wamiliki wapigie mstari kila dai katika captions na flyer zao pamoja, kisha waeleze jinsi watakavyothibitisha kila moja.",
      "Majina ya wateja yasiwekwe kwenye zana za AI wakati wa kubandika namba za ufuatiliaji.",
      "Pima masoko ya mwezi kwa rubriki, na toa maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
