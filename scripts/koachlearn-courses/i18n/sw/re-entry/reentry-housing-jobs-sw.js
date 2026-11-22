"use strict";

// Koach Learn course (Swahili translation of re-entry/reentry-housing-jobs.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// This course is about the United States: US programs, agencies and laws keep their English names, with a short explanation.

module.exports = {
  id: "reentry-housing-jobs-sw",
  lang: "sw",
  translationOf: "reentry-housing-jobs",
  category: "Re-Entry",
  name: "Kupata Makazi na Kazi za Nafasi ya Pili",
  skills: "Kupata msaada wa makazi kupitia 211, Kuomba makazi ukiwa na rekodi, Kuandaa faili la kupangisha, Kutumia American Job Centers, Kupata waajiri wa nafasi ya pili, Kumweleza mwajiri kuhusu WOTC na dhamana ya serikali kuu",
  outcome: "kupata makazi unayoweza kuomba ukiwa na rekodi, kuandaa faili la kupangisha, kupata waajiri wa nafasi ya pili na msaada wa kazi karibu nawe, na kumweleza mwajiri kuhusu motisha za kuajiri zinazokuja pamoja nawe.",
  about: [
    "Mahali salama pa kuishi na kazi ya kudumu ndivyo vitu viwili vinavyosaidia zaidi baada ya kutoka gerezani. Vyote viwili vinaweza kuonekana mbali ukiwa na rekodi, lakini kuna programu, sheria na waajiri walio tayari kusaidia.",
    "Katika kozi hii utatumia 211 kupata msaada wa makazi karibu nawe, utajifunza sheria za makazi ya umma kuhusu rekodi, utaandaa faili la kupangisha linalojibu wasiwasi wa mwenye nyumba, utapata American Job Center, utatafuta waajiri wa nafasi ya pili, na utajifunza jinsi Work Opportunity Tax Credit na Federal Bonding Program zinavyoweza kumfanya mwajiri awe tayari zaidi kukuajiri.",
    "Sheria hubadilika na ni tofauti katika kila jimbo na jiji. Kila somo linaonyesha mahali pa kukagua sheria za sasa. Kwa maswali ya kisheria, uliza msaada wa kisheria (legal aid) au mshauri wa kurudi katika jamii.",
    "Kila somo linachukua kama dakika tano na linaisha kwa kazi unayoifanya papo hapo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andaa mpango wa ukurasa mmoja wa makazi na kazi: chaguo mbili za makazi pamoja na mawasiliano yake na unachopaswa kuleta, orodha ya kukagua ya faili lako la kupangisha, American Job Center iliyo karibu nawe, waajiri watatu wa nafasi ya pili au nafasi za kazi, na maelezo mafupi ya sentensi mbili yanayomweleza mwajiri kuhusu Work Opportunity Tax Credit na Federal Bonding Program.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) wanaohitaji mahali salama pa kuishi na kazi ya kudumu, mara nyingi wakiwa na rekodi inayofanya vyote viwili kuwa vigumu kupata. Baadhi wako kwenye parole au probation.",
    startingPoint: "Wanaweza kupiga simu na kutumia simu ya kawaida. Wengi hawajui kuhusu 211, sheria za makazi ya umma kuhusu rekodi, faili la kupangisha, American Job Centers, Work Opportunity Tax Credit wala Federal Bonding Program.",
    gap: "Makazi na kazi ndivyo vitu viwili vinavyosaidia zaidi baada ya kutoka gerezani, lakini watu wengi hukata tamaa baada ya kukataliwa mara za kwanza au hudanganywa na matapeli wa nyumba za kupangisha. Wanafunzi wanahitaji kupata programu, sheria na waajiri walio tayari kusaidia, na kujieleza kwa kujiamini na kwa uaminifu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu ya kawaida au simu janja, wakati mwingine kompyuta ya maktaba",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya miadi na kazi",
      "Sheria ni tofauti kwa kila jimbo na jiji na hubadilika; maswali ya kisheria yanapelekwa kwa msaada wa kisheria au mshauri wa kurudi katika jamii",
      "Masharti ya parole au probation yanaweza kuzuia mahali wanafunzi wanapoweza kuishi; faragha: hakuna namba za kesi katika zana za AI"
    ],
    prerequisites: "Hakuna. Kozi \"Zana za AI za Kila Siku\" inawasaidia wanafunzi wanaotaka kutumia ramani na vikumbusho kufika kwenye miadi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia 211 na programu za kurudi katika jamii", action: "kuorodhesha chaguo za makazi unazoweza kuomba", standard: "pamoja na namba ya simu, gharama, masharti na unachopaswa kuleta kwa kila moja" },
    { id: "O2", condition: "Ukipewa mtoa makazi na sheria kuhusu rekodi", action: "kueleza sheria zinasema nini kuhusu rekodi na kuomba ombi lako liangaliwe kwa haki", standard: "ukiuliza kama kuna sera iliyoandikwa na kama unaweza kutoa ushahidi wa kubadilika" },
    { id: "O3", condition: "Ukipewa nyaraka ulizonazo", action: "kuandaa faili la kupangisha na kutambua matapeli wa nyumba za kupangisha", standard: "pamoja na orodha ya kukagua nyaraka na barua fupi kuhusu ulichofanya tangu wakati huo, na bila kulipa kabla ya kuona nyumba" },
    { id: "O4", condition: "Ukitumia CareerOneStop au 211", action: "kupata American Job Center iliyo karibu nawe na nafasi za kazi za nafasi ya pili", standard: "pamoja na anwani, simu, saa za kazi na maswali ya kuuliza katika ziara yako ya kwanza" },
    { id: "O5", condition: "Ukipewa Work Opportunity Tax Credit na Federal Bonding Program", action: "kumweleza mwajiri jinsi zinavyoweza kumsaidia kukuajiri", standard: "kwa maelezo ya sentensi mbili, yaliyokaguliwa kwenye irs.gov kama WOTC bado inatumika" },
    { id: "O6", condition: "Ukiulizwa swali kuhusu rekodi yako katika usaili", action: "kulijibu kwa ufupi na kwa uaminifu", standard: "ukisema kilichotokea, ulichofanya tangu wakati huo na kwa nini uko tayari, bila kuandika namba za kesi kwenye AI" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata mahali pa kuishi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Chaguo zako za makazi na mahali pa kuanzia",
          minutes: 5,
          goal: "Tumia 211 na programu za kurudi katika jamii kuorodhesha chaguo tatu za makazi unazoweza kuomba.",
          text: [
            "Watu wengi wanaorudi nyumbani hupitia aina zaidi ya moja ya makazi: kukaa na familia, makazi ya dharura (shelter), makazi ya mpito au ya kurudi katika jamii, makazi ya watu wanaoacha pombe na dawa za kulevya (sober living), kupanga chumba, na baadaye nyumba yao wenyewe. Kila hatua ni sawa. Lengo ni mahali salama sasa na mahali bora baadaye.",
            "211 ndiyo njia rahisi zaidi ya kuanza. Unaweza kupiga 211 au kwenda 211.org kumfikia msaidizi wa eneo lako anayekuunganisha na makazi, chakula, msaada wa bili za maji na umeme, huduma za afya na zaidi. Simu ni za siri. Waambie unarudi nyumbani kutoka gerezani au jela na uulize kuhusu makazi ya kurudi katika jamii.",
            "Makazi ya umma na Housing Choice Vouchers (mara nyingi huitwa Section 8) yanaendeshwa na Public Housing Agency (PHA) ya eneo lako. Orodha za kusubiri zinaweza kuwa ndefu au zimefungwa, kwa hiyo jiandikishe mapema na uhakikishe mawasiliano yako ni ya sasa kila wakati.",
            "Ukiwa kwenye parole au probation, afisa wako anaweza kuhitaji kukubali mahali unapoishi. Uliza kabla ya kusaini chochote."
          ],
          steps: ["Piga 211 au tembelea 211.org na uulize kuhusu makazi ya kurudi katika jamii na makazi ya mpito.", "Omba orodha za makazi kutoka kwa programu ya kurudi katika jamii au kwa afisa wako wa parole au probation.", "Tafuta Public Housing Agency ya eneo lako na uulize jinsi ya kujiunga na orodha zake za kusubiri.", "Andika chaguo tatu: jina, simu, gharama, masharti na unachopaswa kuleta.", "Hakikisha na afisa wako kwamba anwani hiyo inaruhusiwa."],
          words: [["211", "huduma ya bure na ya siri kwa simu na kwenye wavuti inayokuunganisha na msaada wa eneo lako."], ["Makazi ya mpito", "makazi ya muda mfupi yenye msaada, mara nyingi kwa watu wanaorudi nyumbani."], ["Public Housing Agency (PHA)", "ofisi ya eneo lako inayoendesha makazi ya umma na vocha za makazi."], ["Housing Choice Voucher", "msaada wa kulipa kodi ya nyumba kwa mwenye nyumba binafsi, mara nyingi huitwa Section 8."]],
          slides: [
            { title: "Makazi ni ngazi", bullets: ["Familia, shelter, makazi ya kurudi katika jamii au sober living", "Chumba, kisha nyumba", "Salama sasa, bora baadaye"] },
            { title: "Anza na 211", bullets: ["Piga 211 au tembelea 211.org", "Msaada wa siri wa eneo lako", "Uliza kuhusu makazi ya kurudi katika jamii"] },
            { title: "Makazi ya umma na vocha", bullets: ["Yanaendeshwa na Public Housing Agency ya eneo lako", "Orodha za kusubiri zinaweza kuwa ndefu: omba mapema", "Hakikisha mawasiliano yako ni ya sasa"] },
            { title: "Uko kwenye parole au probation?", bullets: ["Afisa wako anaweza kuhitaji kukubali anwani", "Uliza kabla ya kusaini"] }
          ],
          sources: [
            { name: "211: Pata msaada wa eneo lako", url: "https://www.211.org/" },
            { name: "HUD: Programu ya makazi ya umma", url: "https://www.hud.gov/topics/rental_assistance/phprog" }
          ],
          tryIt: "Piga 211 au tembelea 211.org na uombe makazi ya kurudi katika jamii au makazi ya mpito karibu nawe. Andika chaguo tatu pamoja na namba ya simu, gharama, masharti na kile kila moja inakuomba uje nacho.",
          youCanNow: "kutumia 211 na Public Housing Agency ya eneo lako kupata chaguo za makazi na kuorodhesha kile kila moja inahitaji.",
          quickCheck: [
            { objective: "O1", q: "Makazi ya mpito ni nini?", options: ["Hoteli unayolipia kila usiku", "Makazi ya muda mfupi yenye msaada, mara nyingi kwa watu wanaorudi nyumbani", "Nyumba unayonunua", "Shelter inayofunguliwa wakati wa baridi tu"], answer: 1, why: "Makazi ya mpito ni makazi ya muda mfupi yenye msaada wakati unajipanga." },
            { objective: "O1", q: "Uko kwenye parole na rafiki anakupa chumba. Ungefanya nini kabla ya kuhamia?", options: ["Kuhamia usiku huu", "Kusaini mkataba mara moja", "Kuhakikisha afisa wako anakubali anwani hiyo", "Kutomwambia mtu yeyote"], answer: 2, why: "Masharti ya parole yanaweza kuzuia mahali unapoweza kuishi, kwa hiyo unakagua kwanza." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuomba makazi ukiwa na rekodi",
          minutes: 6,
          goal: "Eleza sheria za makazi zinasema nini kuhusu rekodi na jinsi ya kuomba ombi lako liangaliwe kwa haki.",
          text: [
            "Sheria za serikali kuu (federal) zinazitaka ofisi za makazi ya umma kukataa makundi machache: mtu yeyote anayepaswa kujiandikisha kama mkosaji wa makosa ya ngono maisha yake yote; mtu yeyote aliyewahi kutiwa hatiani kwa kutengeneza methamphetamine kwenye makazi yanayosaidiwa na serikali kuu; na, kwa miaka mitatu, kaya iliyofukuzwa kutoka makazi yanayosaidiwa na serikali kuu kwa sababu ya dawa za kulevya, isipokuwa mtu huyo alimaliza programu iliyoidhinishwa ya kuacha dawa au hali imebadilika. Pia zinaweza kukataa mtu anayetumia dawa haramu sasa.",
            "Kwa rekodi nyingine nyingi, ofisi ya makazi inaamua kwa kutumia sera yake iliyoandikwa. Kabla ya kukukataa kwa sababu ya rekodi ya uhalifu, lazima ikuambie, ikupe nakala ya rekodi hiyo na nafasi ya kuipinga. Haiwezi kukutoza pesa kwa ukaguzi wa rekodi. Omba sera yake, na uombe mapitio ukikataliwa.",
            "Wenye nyumba binafsi kwa kawaida wanaweza kuangalia historia ya uhalifu. Rekodi si kundi linalolindwa chini ya sheria ya serikali kuu ya Fair Housing Act, na HUD imesema inaondoa mwongozo wa zamani wa serikali kuu uliopunguza ukaguzi wa historia. Sheria za jimbo na jiji zinaweza kukulinda zaidi. Katika California, wenye nyumba hawawezi kutumia makamato ambayo hayakuleta hatia, rekodi zilizofungwa au kufutwa, wala rekodi za utotoni, hawawezi kumkataa kila mtu mwenye rekodi, na lazima waonyeshe kuwa hatia inahusiana moja kwa moja na kuwa mpangaji mzuri.",
            "Ukifikiri mwenye nyumba katika California amevunja sheria hizi, unaweza kuwasiliana na California Civil Rights Department, kwa kawaida ndani ya mwaka mmoja. Katika majimbo mengine, uliza msaada wa kisheria au ofisi ya haki za kiraia ya jimbo lako."
          ],
          steps: ["Omba kila mtoa makazi sera yake iliyoandikwa kuhusu rekodi za uhalifu.", "Soma rekodi yako mwenyewe kwanza ili kusiwe na kitu cha kukushangaza.", "Leta ushahidi wa kubadilika pamoja na ombi lako.", "Ukikataliwa, omba kwa maandishi sababu, nakala ya rekodi iliyotumika na mapitio.", "Ukifikiri sheria imevunjwa, wasiliana na msaada wa kisheria au ofisi ya haki za kiraia ya jimbo lako."],
          words: [["Fair Housing Act", "sheria ya serikali kuu inayokataza ubaguzi katika makazi kwa sababu ya rangi, asili ya taifa, dini, jinsia, hali ya familia au ulemavu."], ["Kundi linalolindwa", "kundi ambalo sheria inalilinda dhidi ya ubaguzi."], ["Makazi yanayosaidiwa na serikali kuu", "makazi yanayolipiwa kwa sehemu na programu za serikali kuu, kama makazi ya umma."], ["Mapitio yasiyo rasmi (informal review)", "mkutano wa kuiomba ofisi ya makazi iangalie tena uamuzi wa kukukataa."]],
          slides: [
            { title: "Makazi ya umma: makatazo ya lazima", bullets: ["Usajili wa maisha yote kama mkosaji wa makosa ya ngono", "Kutengeneza meth kwenye makazi yanayosaidiwa na serikali kuu", "Kufukuzwa kwa sababu ya dawa: miaka 3, pamoja na vighairi"] },
            { title: "Rekodi nyingine nyingi: PHA inaamua", bullets: ["Omba sera iliyoandikwa", "Lazima wakuonyeshe rekodi na wakuruhusu kuipinga", "Omba mapitio ukikataliwa"] },
            { title: "Wenye nyumba binafsi", bullets: ["Kwa kawaida wanaweza kukagua rekodi", "Mwongozo wa serikali kuu umebadilika: kagua hud.gov", "Sheria za jimbo na jiji zinaweza kukulinda zaidi"] },
            { title: "Ulinzi katika California", bullets: ["Hakuna makamato bila hatia, rekodi zilizofungwa au za utotoni", "Hakuna kumkataa kila mtu mwenye rekodi", "Malalamiko: California Civil Rights Department"] }
          ],
          sources: [
            { name: "24 CFR 960.204: Kukataliwa kuingia kwa sababu ya uhalifu au matumizi ya dawa za kulevya (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/24/960.204" },
            { name: "HUD: Muhtasari wa Fair Housing Act", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
            { name: "California Civil Rights Department: Makazi", url: "https://calcivilrights.ca.gov/housing/" }
          ],
          tryIt: "Piga simu au tembelea tovuti ya mtoa makazi mmoja kutoka orodha yako na uulize: Mna sera iliyoandikwa kuhusu rekodi za uhalifu? Naweza kuwapa ushahidi wa kubadilika pamoja na ombi langu? Andika majibu.",
          youCanNow: "kueleza sheria kuu za makazi kuhusu rekodi, kumwomba mtoa makazi sera yake, na kuomba mapitio ukikataliwa.",
          quickCheck: [
            { objective: "O2", q: "Nani anaendesha makazi ya umma na Housing Choice Vouchers katika eneo lako?", options: ["Public Housing Agency ya eneo lako", "Idara ya polisi", "Afisa wako wa parole", "IRS (ofisi ya kodi ya serikali kuu)"], answer: 0, why: "Public Housing Agency ya eneo lako inaendesha programu hizi na inaweka sera yake." },
            { objective: "O2", q: "Unataka kuomba kwa mtoa makazi lakini una wasiwasi kuhusu rekodi yako. Ungefanya nini?", options: ["Kuacha rekodi nje na kutumaini", "Kukata tamaa na kutoomba", "Kulipa zaidi ili kuruka ukaguzi", "Kuomba sera yao iliyoandikwa na kuuliza kama unaweza kuongeza ushahidi wa kubadilika"], answer: 3, why: "Kuuliza kuhusu sera na kutoa ushahidi kunasaidia ombi lako liangaliwe kwa haki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandaa faili la kupangisha",
          minutes: 5,
          goal: "Andaa faili la kupangisha linalojibu wasiwasi wa mwenye nyumba kabla hajauliza.",
          text: [
            "Mwenye nyumba anataka kujua mambo matatu: utalipa kwa wakati, utaitunza nyumba, na utaelewana na majirani. Faili la kupangisha linajibu yote matatu katika folda moja.",
            "Weka ndani: kitambulisho chenye picha; ushahidi wa mapato kama hati za mshahara, barua ya kupewa kazi au barua ya mafao; barua za kumbukumbu (references) kutoka kwa mwajiri, msimamizi wa kesi, wafanyakazi wa programu au kiongozi wa dini; vyeti vya programu ulizomaliza; na barua fupi kuhusu rekodi yako inayosema kilichotokea, ulichofanya tangu wakati huo, na kwa nini utakuwa mpangaji mzuri.",
            "Jihadhari na matapeli wa nyumba za kupangisha. Usitume pesa kamwe kwa wire, kadi ya zawadi (gift card) au app ya malipo kabla hujaiona nyumba mwenyewe na kusaini mkataba. Kuwa mwangalifu na mpango wowote unaoonekana rahisi mno au unaokuharakisha.",
            "Jua kiasi unachoweza kulipa. Programu nyingi hutumia kanuni ya jumla kwamba kodi ya nyumba iwe karibu theluthi moja ya mapato yako au chini. Uliza kuhusu gharama zote za kuhamia: amana, mwezi wa kwanza na ada za maombi."
          ],
          steps: ["Pata folda na utengeneze nakala za kitambulisho chako na ushahidi wa mapato.", "Waombe watu wawili au watatu barua za kumbukumbu.", "Ongeza vyeti vya programu ulizomaliza.", "Andika barua fupi kuhusu rekodi yako, ukimaliza kwa kusema kwa nini utakuwa mpangaji mzuri.", "Kabla ya kulipa chochote, iona nyumba mwenyewe na upate mkataba ulioandikwa."],
          words: [["Faili la kupangisha", "folda ya nyaraka inayomwonyesha mwenye nyumba kuwa wewe ni mpangaji mzuri."], ["Mtu wa kumbukumbu (reference)", "mtu anayeweza kusema mazuri kukuhusu."], ["Amana (security deposit)", "pesa unazolipa kabla ya kuhamia ambazo mwenye nyumba anazishika iwapo kutakuwa na uharibifu."], ["Mkataba wa kupanga (lease)", "makubaliano ya kupanga yaliyoandikwa."]],
          slides: [
            { title: "Wasiwasi wa mwenye nyumba", bullets: ["Utalipa kwa wakati?", "Utaitunza nyumba?", "Utaelewana na majirani?"] },
            { title: "Faili lako la kupangisha", bullets: ["Kitambulisho chenye picha na ushahidi wa mapato", "Barua za kumbukumbu na vyeti vya programu", "Barua fupi kuhusu rekodi yako"] },
            { title: "Dalili za utapeli wa kupangisha", bullets: ["Lipa kabla ya kuiona nyumba", "Wire, gift card au app ya malipo tu", "Rahisi mno, haraka mno"] },
            { title: "Jua hesabu zako", bullets: ["Kodi karibu theluthi moja ya mapato au chini", "Uliza kuhusu amana, mwezi wa kwanza na ada"] }
          ],
          tryIt: "Anza faili lako la kupangisha. Tengeneza orodha ya kukagua ya nyaraka ulizonazo na zile ambazo bado unahitaji. Andika rasimu ya kwanza ya barua yako fupi: sentensi moja kuhusu kilichotokea, mbili kuhusu ulichofanya tangu wakati huo, na moja kuhusu kwa nini utakuwa mpangaji mzuri.",
          youCanNow: "kuandaa faili la kupangisha linalomwonyesha mwenye nyumba kwamba utalipa, utaitunza nyumba na utakuwa jirani mwema, na kutambua matapeli wa nyumba za kupangisha.",
          quickCheck: [
            { objective: "O3", q: "Kipi kinafaa kuwa ndani ya faili la kupangisha?", options: ["Ushahidi wa mapato na barua za kumbukumbu", "Faili lako lote la kesi", "Nywila ya benki yako", "Nakala ya kadi yako ya Social Security kwa mtu yeyote"], answer: 0, why: "Ushahidi wa mapato na barua za kumbukumbu zinajibu wasiwasi mkuu wa mwenye nyumba." },
            { objective: "O3", q: "Mwenye nyumba anataka amana kwa wire kabla hujaiona nyumba. Ungefanya nini?", options: ["Kuituma haraka kabla mtu mwingine hajaituma", "Kutuma nusu", "Kukataa na kutafuta mahali pengine", "Kuituma kwa gift card badala yake"], answer: 2, why: "Kuomba malipo kabla hujaiona nyumba ni dalili ya utapeli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata mahali pa kuishi",
        questions: [
          { objective: "O1", q: "Umerudi nyumbani tu na unahitaji msaada wa makazi usiku huu. Hatua nzuri ya kwanza ni ipi?", options: ["Kusubiri mwezi mmoja", "Kupiga 211 au kutembelea 211.org", "Kusaini mkataba wowote unaouona mtandaoni", "Kutuma amana kwa gift card"], answer: 1, why: "211 inakuunganisha na makazi na msaada mwingine wa eneo lako." },
          { objective: "O2", q: "Nani anaendesha makazi ya umma na Housing Choice Vouchers katika eneo lako?", options: ["Public Housing Agency ya eneo lako", "Ofisi ya posta", "Benki yako", "DMV (ofisi ya leseni za udereva)"], answer: 0, why: "Public Housing Agency ya eneo lako inaendesha programu hizi na orodha zake za kusubiri." },
          { objective: "O2", q: "Kabla ofisi ya makazi ya umma haijakukataa kwa sababu ya rekodi ya uhalifu, lazima:", options: ["Ikutoze pesa kwa ukaguzi", "Iiweke mtandaoni", "Ikuambie, ikupe nakala ya rekodi na nafasi ya kuipinga", "Ipigie familia yako simu"], answer: 2, why: "Sheria zinataka utaarifiwe, upewe nakala ya rekodi na nafasi ya kuipinga." },
          { objective: "O2", q: "Katika California, mwenye nyumba HAWEZI kutumia kipi dhidi yako?", options: ["Mapato yako", "Watu wako wa kumbukumbu", "Historia yako ya kupanga", "Rekodi iliyofungwa"], answer: 3, why: "California hairuhusu wenye nyumba kutumia rekodi zilizofungwa au kufutwa, makamato bila hatia, wala rekodi za utotoni." },
          { objective: "O3", q: "Mwenye nyumba anakuomba ulipe amana kwa gift card kabla hujaiona nyumba. Unafanya nini?", options: ["Kulipa haraka usiikose", "Kulipa nusu", "Kukataa; ni dalili ya utapeli", "Kutuma nywila ya benki yako"], answer: 2, why: "Kulipa kwa gift card kabla ya kuiona nyumba ni utapeli wa kawaida wa kupangisha." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata kazi ya nafasi ya pili",
      lessons: [
        {
          objectives: ["O4"],
          title: "American Job Centers na programu za kazi za kurudi katika jamii",
          minutes: 5,
          goal: "Pata American Job Center iliyo karibu nawe na programu ya kazi ya kurudi katika jamii, na ujue cha kuwauliza.",
          text: [
            "American Job Centers ni ofisi za umma za kazi zinazopatikana kote nchini Marekani. Zinasaidia kutafuta kazi, kuandika résumé (CV), mafunzo, na wakati mwingine mafunzo yanayolipwa au msaada wa nguo na vifaa vya kazi. Unaweza kupata iliyo karibu nawe kwenye CareerOneStop (careeronestop.org), tovuti ya US Department of Labor (Wizara ya Kazi ya Marekani), au kwa kupiga 211.",
            "Department of Labor pia inafadhili programu za ajira za kurudi katika jamii kwa watu wazima na vijana waliowahi kufungwa. Mashirika ya kurudi katika jamii, vyuo vya jamii na baadhi ya vyama vya wafanyakazi pia yanaendesha mafunzo ya kazi na uanagenzi (apprenticeships).",
            "Unapotembelea, uliza: Ni mafunzo gani ni ya bure kwangu? Mnafanya kazi na waajiri wanaoajiri watu wenye rekodi? Mnaweza kunisaidia na barua ya dhamana (bonding) au nyaraka za Work Opportunity Tax Credit? Mnaweza kunisaidia na nguo za kazi, vifaa au pasi ya basi?"
          ],
          steps: ["Nenda careeronestop.org na utafute American Job Center karibu nawe, au piga 211.", "Uliza programu ya kurudi katika jamii inafanya kazi na programu zipi za ajira.", "Leta kitambulisho chako, résumé yoyote uliyonayo, na vyeti.", "Uliza maswali manne ya somo hili na uandike majibu.", "Weka tarehe ya ziara yako inayofuata."],
          words: [["American Job Center", "ofisi ya umma ya bure inayosaidia watu kupata kazi na mafunzo."], ["CareerOneStop", "tovuti ya US Department of Labor ya kazi, mafunzo na kutafuta vituo vya ajira."], ["Uanagenzi (apprenticeship)", "kazi ya kulipwa ambapo unajifunza ufundi wakati unafanya kazi."]],
          slides: [
            { title: "American Job Centers", bullets: ["Ofisi za umma za kazi kote nchini", "Kutafuta kazi, résumé, mafunzo", "Pata moja kwenye careeronestop.org au piga 211"] },
            { title: "Programu za kazi za kurudi katika jamii", bullets: ["Programu za Department of Labor za kurudi katika jamii", "Mashirika ya kurudi katika jamii na vyuo", "Vyama vya wafanyakazi na uanagenzi"] },
            { title: "Waulize", bullets: ["Ni mafunzo gani ni ya bure kwangu?", "Ni waajiri gani wanaajiri watu wenye rekodi?", "Msaada wa nyaraka za dhamana au tax credit?", "Msaada wa nguo, vifaa au pasi ya basi?"] }
          ],
          sources: [
            { name: "CareerOneStop: Tafuta American Job Centers", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "US Department of Labor: Ajira ya kurudi katika jamii", url: "https://www.dol.gov/agencies/eta/reentry" }
          ],
          tryIt: "Pata American Job Center iliyo karibu nawe. Andika anwani yake, namba ya simu na saa za kazi, na maswali manne utakayouliza katika ziara yako ya kwanza.",
          youCanNow: "kupata American Job Center na programu ya kazi ya kurudi katika jamii na kuwaomba msaada unaohitaji.",
          quickCheck: [
            { objective: "O4", q: "American Job Center inatoa nini?", options: ["Kazi za kulipwa ndani ya kituo tu", "Msaada wa bure wa kutafuta kazi, résumé na mafunzo", "Vocha za makazi", "Mikopo ya magari"], answer: 1, why: "American Job Centers zinatoa msaada wa bure wa kutafuta kazi, résumé na mafunzo." },
            { objective: "O4", q: "Uko kwenye kituo cha ajira kwa mara ya kwanza. Ungeuliza swali gani?", options: ["Mnaweza kufuta rekodi yangu?", "Mnatoza kiasi gani?", "Naweza kuruka fomu ya maombi?", "Ni waajiri gani hapa wanaajiri watu wenye rekodi?"], answer: 3, why: "Wafanyakazi wa vituo vya ajira mara nyingi wanawajua waajiri wa nafasi ya pili wa eneo hilo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Waajiri wa nafasi ya pili, WOTC na dhamana ya serikali kuu",
          minutes: 6,
          goal: "Mweleze mwajiri jinsi Work Opportunity Tax Credit na Federal Bonding Program zinavyoweza kumsaidia kukuajiri.",
          text: [
            "Mwajiri wa nafasi ya pili ni biashara iliyo tayari kuajiri watu wenye rekodi. Watafute kupitia vituo vya ajira, programu za kurudi katika jamii, mawakala wa ajira wanaofanya kazi na watu wanaorudi katika jamii, vyama vya wafanyakazi, na matangazo ya kazi yanayosema fair chance au second chance.",
            "Work Opportunity Tax Credit (WOTC) ni punguzo la kodi la serikali kuu kwa waajiri, si pesa unazolipwa wewe. Kundi moja linalohusika ni waliowahi kutiwa hatiani kwa makosa makubwa (felony) wanaostahiki: watu walioajiriwa ndani ya mwaka mmoja tangu kutiwa hatiani kwa felony au kutoka gerezani. Mwajiri na wewe mnajaza IRS Form 8850 siku ya kupewa kazi au kabla yake, na mwajiri anaituma kwa jimbo ndani ya siku 28 baada ya wewe kuanza kazi. Ukurasa wa IRS ulisema punguzo hili lilihusu watu walioanza kazi kufikia 31 Desemba 2025. Kagua irs.gov kuona kama limeongezewa muda kabla ya kulitaja.",
            "Federal Bonding Program inawapa waajiri dhamana ya uaminifu (fidelity bond) ya bure, aina ya bima dhidi ya wizi wa mfanyakazi, kwa miezi sita ya kwanza ya kazi. Kila dhamana inalipa hadi $5,000 bila kiasi cha kujilipia mwenyewe (deductible), na hakuna fomu za wewe kujaza. Watu wenye rekodi ni mojawapo ya makundi inayoyahudumia. Mratibu wa dhamana wa jimbo lako, aliyeorodheshwa kwenye bonds4jobs.com, ndiye anayeipanga.",
            "Waajiri wengi hawajawahi kusikia kuhusu programu hizi. Kuwaambia kunaonyesha umejiandaa vizuri na kunapunguza hatari yao."
          ],
          steps: ["Tengeneza orodha ya waajiri wa nafasi ya pili kutoka vituo vya ajira, programu za kurudi katika jamii na matangazo ya kazi.", "Kagua irs.gov kuona kama WOTC inatumika sasa.", "Tafuta mratibu wa dhamana wa jimbo lako kwenye bonds4jobs.com.", "Jizoeze maelezo ya sentensi mbili kuhusu WOTC na dhamana.", "Leta Form 8850 na taarifa za dhamana kwenye usaili."],
          words: [["Mwajiri wa nafasi ya pili", "biashara iliyo tayari kuajiri watu wenye rekodi."], ["Work Opportunity Tax Credit (WOTC)", "punguzo la kodi la serikali kuu kwa waajiri wanaoajiri watu kutoka makundi fulani."], ["Dhamana ya uaminifu (fidelity bond)", "bima inayomlinda mwajiri dhidi ya hasara kutokana na wizi wa mfanyakazi."], ["Form 8850", "fomu ya IRS inayotumika kuanzisha mchakato wa WOTC."]],
          slides: [
            { title: "Waajiri wa nafasi ya pili", bullets: ["Tayari kuajiri watu wenye rekodi", "Watafute kupitia vituo vya ajira na programu za kurudi katika jamii", "Tafuta fair chance au second chance kwenye matangazo ya kazi"] },
            { title: "Work Opportunity Tax Credit", bullets: ["Punguzo la kodi kwa mwajiri, si malipo kwako", "Linahusu walioajiriwa ndani ya mwaka mmoja tangu hatia au kutoka gerezani", "Form 8850 siku ya kupewa kazi au kabla; kagua irs.gov"] },
            { title: "Federal Bonding Program", bullets: ["Dhamana ya bure kwa miezi sita ya kwanza", "Hadi $5,000, bila deductible", "Inapangwa na mratibu wa dhamana wa jimbo lako"] },
            { title: "Kwa nini umwambie mwajiri", bullets: ["Wengi hawajawahi kusikia kuhusu hizi", "Inapunguza hatari yao", "Inaonyesha umejiandaa vizuri"] }
          ],
          sources: [
            { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "US Department of Labor: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" },
            { name: "Federal Bonding Program: Kuhusu sisi", url: "https://bonds4jobs.com/about-us" }
          ],
          tryIt: "Andika maelezo yako ya sentensi mbili kwa mwajiri. Kwa mfano: Ukiniajiri, huenda ukaweza kudai Work Opportunity Tax Credit. Pia naweza kuja na dhamana ya bure ya Federal Bonding Program inayolinda miezi yangu sita ya kwanza. Kisha tafuta mratibu wa dhamana wa jimbo lako kwenye bonds4jobs.com.",
          youCanNow: "kupata waajiri wa nafasi ya pili na kumweleza mwajiri kuhusu WOTC na dhamana ya serikali kuu kwa maneno rahisi.",
          quickCheck: [
            { objective: "O5", q: "Nani anapata Work Opportunity Tax Credit?", options: ["Mfanyakazi", "Ofisi ya parole", "Mwajiri", "Kituo cha ajira"], answer: 2, why: "WOTC ni punguzo la kodi ambalo mwajiri anaweza kudai kwa kukuajiri." },
            { objective: "O5", q: "Unapanga kumweleza mwajiri kuhusu WOTC katika usaili. Ungefanya nini kwanza?", options: ["Kukagua irs.gov kuona kama inatumika sasa", "Kumwahidi kiasi maalum cha dola", "Kuiomba AI ijaze Form 8850 kwa taarifa zako", "Kuacha kwa sababu waajiri hawajali kamwe"], answer: 0, why: "Sheria za WOTC zinaweza kubadilika, kwa hiyo unakagua irs.gov kabla ya kuitaja." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuomba kazi na kujibu maswali kuhusu rekodi yako",
          minutes: 6,
          goal: "Omba kazi ya nafasi ya pili na ujibu maswali kuhusu rekodi yako kwa kujiamini.",
          text: [
            "Omba kazi kadhaa kila wiki. Weka orodha rahisi yenye mwajiri, kazi, tarehe uliyoomba na kinachofuata. Fuatilia baada ya kama wiki moja kama hujapata jibu.",
            "Majimbo na majiji mengi yana sheria za fair-chance au ban-the-box zinazochelewesha maswali kuhusu rekodi hadi baadaye katika mchakato wa kuajiri. Jifunze sheria ya eneo lako. Swali likija, kuwa mkweli. Kudanganya kuhusu rekodi ni sababu ya kawaida ya kupoteza kazi baadaye.",
            "Jibu kwa sehemu tatu fupi: kilichotokea, kwa sentensi moja na bila visingizio; ulichofanya tangu wakati huo, kama programu, kazi, shule na kuendelea vizuri; na kwa nini uko tayari kwa kazi hii. Kisha rudi kwenye ujuzi wako. Jizoeze kwa sauti hadi uhisi utulivu.",
            "Leta ushahidi: vyeti, barua ya kumbukumbu, na taarifa zako za WOTC na dhamana. Msaidizi wa AI anaweza kukusaidia kujizoeza maswali ya usaili, lakini usiandike kamwe namba za kesi yako au taarifa nyingine binafsi ndani yake."
          ],
          steps: ["Omba kazi kadhaa kila wiki na uzifuatilie katika orodha.", "Jifunze sheria ya fair-chance ya jimbo au jiji lako.", "Andika jibu lako la sehemu tatu kuhusu rekodi yako.", "Jizoeze kwa sauti na mtu au msaidizi wa AI, bila taarifa binafsi.", "Leta vyeti, barua za kumbukumbu, na taarifa za WOTC na dhamana kwenye usaili."],
          words: [["Kufuatilia (follow up)", "kuwasiliana tena na mwajiri kuuliza kuhusu ombi lako."], ["Sheria ya fair-chance", "sheria inayoweka mipaka ya lini waajiri wanaweza kuuliza kuhusu rekodi."], ["Barua ya kumbukumbu", "barua kutoka kwa mtu anayeweza kusema mazuri kuhusu kazi yako au tabia yako."]],
          slides: [
            { title: "Omba kwa uthabiti", bullets: ["Maombi kadhaa kila wiki", "Fuatilia mwajiri, kazi, tarehe na hatua inayofuata", "Fuatilia baada ya kama wiki moja"] },
            { title: "Swali la rekodi likija", bullets: ["Jua sheria ya fair-chance ya eneo lako", "Kuwa mkweli: kudanganya kunaweza kukupotezea kazi baadaye"] },
            { title: "Jibu lako la sehemu tatu", bullets: ["Kilichotokea: sentensi moja, bila visingizio", "Ulichofanya tangu wakati huo", "Kwa nini uko tayari kwa kazi hii"] },
            { title: "Leta ushahidi", bullets: ["Vyeti na barua ya kumbukumbu", "Taarifa za WOTC na dhamana", "Jizoeze na AI, lakini bila taarifa binafsi"] }
          ],
          tryIt: "Kazi ya mwisho: andaa mpango wako wa ukurasa mmoja wa makazi na kazi pamoja na chaguo mbili za makazi, orodha ya kukagua ya faili lako la kupangisha, American Job Center iliyo karibu nawe, waajiri watatu wa nafasi ya pili au nafasi za kazi, na maelezo yako ya sentensi mbili kuhusu WOTC na dhamana. Kisha sema jibu lako la sehemu tatu kuhusu rekodi yako kwa sauti mara moja.",
          youCanNow: "kuomba kazi za nafasi ya pili, kufuatilia maombi yako, na kujibu maswali kuhusu rekodi yako kwa uaminifu na kwa utulivu.",
          quickCheck: [
            { objective: "O6", q: "Sehemu tatu za jibu zuri kuhusu rekodi yako ni zipi?", options: ["Namba ya kesi yako, kifungo chako na tarehe ya kutoka", "Kilichotokea, ulichofanya tangu wakati huo na kwa nini uko tayari", "Nani alikuwa na kosa, jinsi haikuwa haki na ni muda gani umepita", "Hakuna, kwa sababu hupaswi kujibu"], answer: 1, why: "Jibu fupi na la kweli la sehemu tatu linaonyesha umekua na uko tayari." },
            { objective: "O6", q: "Unataka AI ikusaidie kujizoeza majibu ya usaili. Ungefanya nini?", options: ["Kuandika namba za kesi yako ili ijue historia yako", "Kubandika rekodi yako yote ndani yake", "Kutumia maneno ya jumla na kuacha namba za kesi nje", "Kuiomba ikubunie rekodi safi"], answer: 2, why: "Unaweza kujizoeza na AI bila kutoa taarifa binafsi za kesi yako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata kazi ya nafasi ya pili",
        questions: [
          { objective: "O4", q: "Unaweza kupata wapi American Job Center iliyo karibu nawe?", options: ["Kwenye duka kubwa", "Kwa mwenye nyumba wako", "CareerOneStop (careeronestop.org) au 211", "Kwa ujumbe kutoka kwa mtu usiyemjua"], answer: 2, why: "CareerOneStop, tovuti ya Department of Labor, na 211 zinaweza kukuelekeza kwenye kituo cha ajira." },
          { objective: "O5", q: "Nani anapata Work Opportunity Tax Credit?", options: ["Mwajiri", "Mtafuta kazi kama malipo ya pesa taslimu", "Ofisi ya parole", "Mwenye nyumba"], answer: 0, why: "WOTC ni punguzo la kodi kwa waajiri wanaoajiri watu kutoka makundi fulani." },
          { objective: "O5", q: "Federal Bonding Program inampa mwajiri nini?", options: ["Gari la bure", "Mkopo", "Bili ya kodi", "Dhamana ya bure kwa miezi sita ya kwanza ya kazi"], answer: 3, why: "Programu inatoa dhamana ya uaminifu ya bure inayolinda miezi sita ya kwanza." },
          { objective: "O6", q: "Msaili anauliza kuhusu rekodi yako. Njia bora ni ipi?", options: ["Kuikana", "Kuwa mkweli: kilichotokea, ulichofanya tangu wakati huo, kwa nini uko tayari", "Kukasirika", "Kuondoka kwenye usaili"], answer: 1, why: "Jibu fupi na la kweli linalolenga mabadiliko na utayari linajenga uaminifu." },
          { objective: "O6", q: "Ni kipi HUPASWI KAMWE kuandika kwenye msaidizi wa AI unapojizoeza usaili?", options: ["\"Niulize swali la kawaida la usaili\"", "\"Fupisha jibu langu\"", "Namba za kesi yako", "\"Nipe maoni\""], answer: 2, why: "Namba za kesi na taarifa nyingine binafsi zinapaswa kukaa nje ya zana za AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kupata Makazi na Kazi za Nafasi ya Pili",
    questions: [
      { objective: "O1", q: "211 ni nini?", options: ["Huduma ya bure na ya siri inayokuunganisha na msaada wa eneo lako", "Simu ya polisi", "Benki", "Tovuti ya matangazo ya kazi"], answer: 0, why: "211 inawaunganisha watu na makazi, chakula na msaada mwingine wa eneo lao." },
      { objective: "O1", q: "Makazi ya mpito ni:", options: ["Hoteli ya watalii", "Makazi ya muda mfupi yenye msaada, mara nyingi kwa watu wanaorudi nyumbani", "Ghala la kuhifadhia vitu", "Gari"], answer: 1, why: "Makazi ya mpito ni hatua ya muda mfupi yenye msaada." },
      { objective: "O1", q: "Uko kwenye parole na umepata chumba cha kupanga. Unapaswa kufanya nini kabla ya kusaini?", options: ["Kusaini mara moja", "Kuiweka siri", "Kuhakikisha afisa wako anakubali anwani hiyo", "Kumlipa mtu usiyemjua pesa taslimu"], answer: 2, why: "Parole au probation inaweza kutaka afisa wako akubali mahali unapoishi." },
      { objective: "O1", q: "Orodha za kusubiri makazi ya umma zinaweza kuwa ndefu. Ni busara gani?", options: ["Kutoomba kamwe", "Kuomba tu ukishakosa makazi", "Kuomba mara moja na kubadilisha namba yako ya simu", "Kuomba mapema na kuhakikisha mawasiliano yako ni ya sasa"], answer: 3, why: "Kujiandikisha mapema na kupatikana kwa urahisi kunalinda nafasi yako." },
      { objective: "O2", q: "Ni lipi katazo la lazima kwa makazi ya umma ya serikali kuu?", options: ["Usajili wa maisha yote kama mkosaji wa makosa ya ngono", "Tiketi yoyote ya barabarani", "Kukosa kazi", "Kuwa na watoto"], answer: 0, why: "Sheria za serikali kuu zinataka kukataliwa kwa mtu yeyote anayepaswa kujiandikisha maisha yote kama mkosaji wa makosa ya ngono." },
      { objective: "O2", q: "Kwa rekodi nyingine nyingi, nani anaamua kuhusu ombi la makazi ya umma?", options: ["FBI", "Public Housing Agency ya eneo lako, kwa kutumia sera yake", "Majirani wako", "Mwombaji"], answer: 1, why: "Nje ya makatazo ya lazima, ofisi ya makazi inaamua kwa sera yake iliyoandikwa." },
      { objective: "O2", q: "Je, ofisi ya makazi ya umma inaweza kukutoza pesa kwa ukaguzi wake wa rekodi za uhalifu?", options: ["Ndiyo, kiasi chochote", "Mwisho wa wiki tu", "Hapana, haiwezi kukutoza", "Kwa pesa taslimu tu"], answer: 2, why: "Sheria inasema ofisi haiwezi kumtoza mwombaji pesa kwa ukaguzi wa rekodi." },
      { objective: "O2", q: "Je, rekodi ya uhalifu ni kundi linalolindwa chini ya Fair Housing Act ya serikali kuu?", options: ["Ndiyo, kila wakati", "Kwa vocha tu", "Wakati wa kiangazi tu", "Hapana; sheria za jimbo na jiji zinaweza kutoa ulinzi zaidi"], answer: 3, why: "Fair Housing Act ya serikali kuu haiorodheshi rekodi za uhalifu kama kundi linalolindwa." },
      { objective: "O2", q: "Katika California, mwenye nyumba anataka kumkataa kila mtu mwenye rekodi yoyote. Hili ni:", options: ["Haliruhusiwi: kukataa wote kwa jumla hakuruhusiwi", "Linatakiwa na sheria", "Sera nzuri", "Linaruhusiwa kwa nyumba za ghorofa tu"], answer: 0, why: "California hairuhusu kumkataa kila mtu mwenye historia ya uhalifu." },
      { objective: "O3", q: "Kipi kinafaa kuwa ndani ya faili la kupangisha?", options: ["Namba ya kadi yako ya Social Security imeandikwa juu ya jalada", "Ushahidi wa mapato na barua za kumbukumbu", "Nywila ya benki yako", "Hakuna kitu"], answer: 1, why: "Ushahidi wa mapato na barua za kumbukumbu zinajibu wasiwasi mkuu wa mwenye nyumba." },
      { objective: "O3", q: "Kanuni ya jumla ambayo programu nyingi hutumia kwa kodi ya nyumba ni:", options: ["Mapato yako yote", "Mara mbili ya mapato yako", "Karibu theluthi moja ya mapato yako au chini", "Kodi haijalishi"], answer: 2, why: "Kodi ikiwa karibu theluthi moja ya mapato au chini, inabaki pesa kwa mahitaji mengine." },
      { objective: "O3", q: "Ni ipi dalili ya utapeli wa kupangisha?", options: ["Unaiona nyumba mwenyewe kwanza", "Unapata mkataba ulioandikwa", "Mwenye nyumba anakupa risiti", "Wanataka malipo kwa wire kabla hujaiona nyumba"], answer: 3, why: "Malipo kwa wire au gift card kabla ya kuiona nyumba ni utapeli wa kawaida." },
      { objective: "O4", q: "American Job Center inatoa nini?", options: ["Msaada wa bure wa kutafuta kazi, résumé na mafunzo", "Magari ya bure", "Mikopo ya likizo", "Hati za umiliki wa nyumba"], answer: 0, why: "American Job Centers ni ofisi za umma zinazosaidia kazi na mafunzo." },
      { objective: "O4", q: "Ni swali gani zuri kuuliza kwenye kituo cha ajira?", options: ["Mnaweza kuwadanganya waajiri kwa niaba yangu?", "Ni waajiri gani hapa wanaajiri watu wenye rekodi?", "Naweza kuacha kwenda kazini?", "Mnaweza kunilipia kodi ya nyumba milele?"], answer: 1, why: "Vituo vya ajira mara nyingi vinawajua waajiri wa nafasi ya pili wa eneo hilo." },
      { objective: "O4", q: "Mwajiri wa nafasi ya pili ni:", options: ["Mwajiri anayeajiri mara moja tu", "Jela ya serikali", "Biashara iliyo tayari kuajiri watu wenye rekodi", "Kazi ya muda isiyolipa kamwe"], answer: 2, why: "Waajiri wa nafasi ya pili wako tayari kuajiri watu wenye rekodi." },
      { objective: "O5", q: "Ni fomu gani ya IRS inayoanzisha mchakato wa WOTC?", options: ["Form 1040", "Form W-2", "Form 1099", "Form 8850"], answer: 3, why: "Form 8850 inajazwa siku ya kupewa kazi au kabla yake." },
      { objective: "O5", q: "Kabla ya kumweleza mwajiri kuhusu WOTC, unapaswa:", options: ["Kukagua irs.gov kuona kama inatumika sasa", "Kumwahidi kiasi fulani cha dola", "Kumjazia kodi zake", "Kuiacha"], answer: 0, why: "Punguzo hili lina tarehe ya mwisho na lazima liongezewe muda kwa sheria, kwa hiyo kagua hali yake ya sasa." },
      { objective: "O5", q: "Dhamana ya Federal Bonding Program inamgharimu mwajiri kiasi gani?", options: ["$500", "Hakuna; ni bure", "Nusu ya mshahara wako", "$5,000"], answer: 1, why: "Dhamana ni bure kwa mwajiri na kwa mtafuta kazi; $5,000 ni kiwango cha juu cha kinga." },
      { objective: "O5", q: "Nani anapanga dhamana ya serikali kuu katika jimbo lako?", options: ["Mwenye nyumba wako", "Benki", "Mratibu wa dhamana wa jimbo lako", "Daktari wako"], answer: 2, why: "Waratibu wa dhamana wa majimbo, walioorodheshwa kwenye bonds4jobs.com, wanapanga dhamana." },
      { objective: "O6", q: "Njia bora ya kujibu swali kuhusu rekodi yako ni:", options: ["Kusema haikutokea kamwe", "Kusimulia hadithi ya maisha yako yote", "Kubadilisha mada", "Kusema kwa ufupi kilichotokea, ulichofanya tangu wakati huo na kwa nini uko tayari"], answer: 3, why: "Jibu fupi na la kweli la sehemu tatu linajenga uaminifu na linarudi kwenye ujuzi wako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 5, 7, 9, 11, 12, 13, 17, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Chaguo za makazi", objective: "O1", notYet: "Chaguo chini ya mbili, au hakuna mawasiliano.", meets: "Chaguo mbili za makazi pamoja na mawasiliano na unachopaswa kuleta.", exceeds: "Pia inataja gharama na masharti, na kwamba anwani ilikaguliwa na parole kama inahitajika." },
      { name: "Orodha ya faili la kupangisha", objective: "O3", notYet: "Hakuna orodha ya kukagua.", meets: "Orodha ya kukagua ya nyaraka ulizonazo na nyaraka ambazo bado unahitaji.", exceeds: "Inajumuisha rasimu ya kwanza ya barua fupi kuhusu ulichofanya tangu wakati huo." },
      { name: "Msaada wa kazi na nafasi za kazi", objective: "O4", notYet: "Hakuna kituo cha ajira au nafasi chini ya tatu.", meets: "American Job Center iliyo karibu na waajiri watatu wa nafasi ya pili au nafasi za kazi.", exceeds: "Inajumuisha maswali utakayouliza katika ziara yako ya kwanza." },
      { name: "Maelezo kwa mwajiri", objective: "O5", notYet: "Hakuna maelezo, au yanaahidi kiasi maalum cha dola.", meets: "Maelezo ya sentensi mbili kuhusu WOTC na Federal Bonding Program.", exceeds: "Pia yanamtaja mratibu wa dhamana wa jimbo na yanasema WOTC ilikaguliwa kwenye irs.gov." },
      { name: "Jibu kuhusu rekodi yako", objective: "O6", notYet: "Halijazoezwa, au ni refu, linalaumu wengine au si kweli.", meets: "Limesemwa kwa sauti mara moja: kilichotokea, ulichofanya tangu wakati huo, kwa nini uko tayari.", exceeds: "Fupi, tulivu na limezoezwa zaidi ya mara moja." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaohamia makazi ya kudumu au ya mpito ndani ya siku 90 (utafiti wa kufuatilia)",
      "Wanafunzi wanaotembelea American Job Center au wanaopata kazi ndani ya siku 90",
      "Waajiri wanaotumia WOTC au dhamana ya serikali kuu kumwajiri mwanafunzi, kama wanavyoripoti washirika"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya kupiga 211 na vituo vya ajira, au kompyuta yenye intaneti",
      "Karatasi na kalamu, au folda, kwa mpango na faili la kupangisha",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kuwa na namba ya 211 ya eneo lako, American Job Center iliyo karibu na mratibu wa dhamana wa jimbo tayari kabla ya kipindi.",
      "Jizoezeni jibu la sehemu tatu kuhusu rekodi kwa jozi; linajenga kujiamini haraka.",
      "Sheria ni tofauti kwa kila jimbo na jiji; peleka maswali ya kisheria kwa msaada wa kisheria au mshauri wa kurudi katika jamii.",
      "Wakumbushe wanafunzi walio kwenye parole au probation kukagua anwani yoyote mpya na afisa wao kwanza.",
      "Pima mpango kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
