"use strict";

// Koach Learn course (Swahili translation of shared/manufacturing-technician.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const MSSC_CPT = { name: "MSSC: Fundi Mzalishaji Aliyethibitishwa (Certified Production Technician, CPT 4.0)", url: "https://www.msscusa.org/certification/production-certification-cpt/" };
const MSSC_COURSES = { name: "MSSC: Moduli na kozi za CPT 4.0", url: "https://www.msscusa.org/certified-production-technician-cpt-courses/" };
const OSHA_LOTO = { name: "OSHA: Udhibiti wa nishati hatari (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" };
const OSHA_147 = { name: "OSHA 29 CFR 1910.147: Udhibiti wa nishati hatari (lockout/tagout)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" };
const OSHA_GUARD = { name: "OSHA: Vizuizi vya mashine (Machine Guarding)", url: "https://www.osha.gov/machine-guarding" };
const OSHA_212 = { name: "OSHA 29 CFR 1910.212: Masharti ya jumla kwa mashine zote (vizuizi)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212" };
const DOL_YOUTH = { name: "Wizara ya Kazi ya Marekani: Kazi zisizoruhusiwa kwa wafanyakazi walio chini ya miaka 18", url: "https://www.dol.gov/agencies/whd/child-labor/what-jobs-are-off-limits" };
const APPRENTICE = { name: "Apprenticeship.gov: Kitafutaji cha Uanagenzi (Wizara ya Kazi ya Marekani)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" };

module.exports = {
  id: "manufacturing-technician-sw",
  lang: "sw",
  translationOf: "manufacturing-technician",
  category: "Workforce Development",
  name: "Misingi ya Fundi wa Uzalishaji Viwandani",
  skills: "Kutambua hatari za mashine na kutumia lockout/tagout, Kupima vipande dhidi ya uvumilivu, Kukagua ubora na kutafuta chanzo halisi cha tatizo, Kutumia 5S, lean na utunzaji wa mashine wa kila siku, Kupanga maandalizi ya MSSC CPT 4.0",
  outcome: "kutambua hatari kwenye mashine na kuchagua kinga sahihi, kupima kipande na kuamua kama kiko ndani ya uvumilivu, kuandika kasoro na kutafuta chanzo halisi cha tatizo, kutumia 5S na ukaguzi wa mashine wa kila siku mahali pa kazi, na kutengeneza mpango wenye tarehe wa kujiandaa kwa mitihani ya MSSC Certified Production Technician (CPT 4.0) na kazi yako ya kwanza ya uzalishaji.",
  about: [
    "Viwanda vinatengeneza magari, chakula, dawa, samani, vipande vya chuma na vifaa vya elektroniki, na vinaajiri wafanyakazi wa uzalishaji, waendeshaji wa mashine na mafundi. Kozi hii ni kwa wanaotafuta kazi, vijana, wanajeshi wastaafu, watu wanaorudi nyumbani kutoka gerezani na yeyote anayetaka kuanza kazi kiwandani.",
    "Utajifunza maeneo manne ambayo kazi ya kuanzia viwandani na cheti cha Certified Production Technician (CPT 4.0) cha Manufacturing Skill Standards Council (MSSC, baraza la Marekani la viwango vya ujuzi wa viwanda) vimejengwa juu yake: usalama, ubora na upimaji, uzalishaji, na ufahamu wa matengenezo. Utafanya mazoezi kwenye karatasi na kwa rula nyumbani.",
    "Muhimu: kozi hii inakuandaa; haikupi CPT 4.0 wala cheti kingine chochote. MSSC ndiyo inayotoa mitihani na vyeti. Kuendesha mashine, lockout/tagout na kutumia vifaa vya kupimia kwa usahihi hujifunzwa ana kwa ana na mwalimu mwenye sifa au mkufunzi wa mwajiri, ukiwa na vifaa sahihi vya kujikinga. Usifanye mazoezi kwenye mashine halisi peke yako.",
    "Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\". Kuna swali fupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza kifurushi chako cha utayari wa fundi wa uzalishaji: orodha ya hatari na kinga kwa mashine moja, daftari la vipimo lenye uamuzi wa ndani au nje ya uvumilivu kwa vipande vitano vya mazoezi, 5 Whys (\"Kwa nini?\" mara tano) kwa kasoro moja ya mazoezi, mpango wa 5S na ukaguzi wa kila siku kwa eneo moja la kazi, na mpango wenye tarehe wa kujiandaa kwa mitihani minne ya CPT 4.0 pamoja na mstari wa wasifu (CV) ulio wa kweli.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wanaotafuta kazi za uzalishaji, uendeshaji wa mashine, uunganishaji wa vipande au ufundi: wanaotafuta kazi, wanajeshi wastaafu, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na vijana wanaomaliza shule. Baadhi wamefanya kazi kwenye maghala au mistari ya uunganishaji; wengi hawajasoma kuhusu viwanda.",
    startingPoint: "Wanaweza kufuata hatua zilizoandikwa na kufanya hesabu za msingi za namba kamili. Wengi hawajatumia kalipa, kusoma uvumilivu, kutumia lockout/tagout wala kusikia kuhusu 5S, lean au uchambuzi wa chanzo halisi. Wengi hawajui kuwa kuna cheti cha sekta kwa kazi ya kuanzia ya uzalishaji.",
    gap: "Waajiri wanataka waajiriwa wapya wanaofanya kazi kwa usalama karibu na mashine, wanaopima kwa usahihi, wanaogundua vipande vibovu na wanaotunza eneo lao kwa mpangilio. Majeraha ya mashine yanaweza kuwa makubwa, kama kukatika viungo, kwa hiyo tabia za usalama lazima zije kwanza. Wanafunzi wanahitaji maarifa hayo, na njia wazi ya kupata cheti kinachotambuliwa kama MSSC CPT 4.0, ili washindane kwa kazi za uzalishaji na uanagenzi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; MSSC inapendekeza kama kiwango cha hesabu cha darasa la 9 na cha kusoma cha darasa la 10 kwa CPT 4.0, kwa hiyo hesabu zinaonyeshwa hatua kwa hatua",
      "Hakuna uendeshaji wa mashine katika kozi hii: mazoezi ya vitendo yanafanyika tu na mwalimu mwenye sifa au mkufunzi wa mwajiri",
      "Sheria za shirikisho za ajira ya watoto zinawazuia wafanyakazi walio chini ya miaka 18 kutumia mashine nyingi za kiwandani",
      "Vifaa: simu au kompyuta ya maktaba kwa kurasa rasmi; rula au utepe wa kupimia na karatasi nyumbani",
      "Masharti, ada na tarehe za mitihani ya CPT 4.0 hubadilika: wanafunzi wanakagua msscusa.org au kituo cha mtihani"
    ],
    prerequisites: "Hesabu za msingi za namba kamili. Kozi \"Hesabu za Kila Siku\" na \"Misingi ya Usalama Kazini (OSHA)\" ni kozi saidizi zenye manufaa."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo au picha ya mashine na kazi fulani", action: "kutambua hatari na kuchagua kinga sahihi, ikiwemo lockout/tagout", standard: "ukitaja angalau hatari 3 na kinga sahihi kwa kila moja" },
    { id: "O2", condition: "Ukipewa kipimo cha rula au kalipa na uvumilivu wa kipande", action: "kupima kipande na kuamua kama kiko ndani ya uvumilivu", standard: "ukipata sahihi angalau maamuzi 4 kati ya 5 ya mazoezi" },
    { id: "O3", condition: "Ukipewa tatizo la ubora kwenye mstari wa uzalishaji", action: "kuandika kasoro na kutafuta chanzo halisi kinachowezekana kwa 5 Whys", standard: "ukitenganisha vipande vibovu na kufikia chanzo kinachoweza kurekebishwa" },
    { id: "O4", condition: "Ukipewa eneo la kazi na mashine", action: "kutumia 5S na ukaguzi wa kila siku wa mwendeshaji katika eneo hilo", standard: "ukiorodhesha kitendo kwa kila moja ya S 5 na angalau vitu 5 vya ukaguzi wa kila siku" },
    { id: "O5", condition: "Ukitumia ukurasa wa MSSC CPT 4.0 na nafasi za mafunzo za eneo lako", action: "kuandika mpango wenye tarehe wa kujiandaa kwa CPT 4.0 na kazi ya kwanza ya uzalishaji", standard: "unaotaja moduli nne zinazohitajika, tarehe ya mtihani ya kuthibitisha, na mstari wa wasifu ulio wa kweli" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi, usalama na upimaji",
      lessons: [
        {
          title: "Kazi ya fundi wa uzalishaji na CPT 4.0",
          objectives: ["O5"],
          minutes: 5,
          goal: "Eleza fundi wa uzalishaji anafanya nini na cheti gani kinawaonyesha waajiri kuwa uko tayari.",
          text: [
            "Fundi wa uzalishaji anasaidia kutengeneza bidhaa kwa usalama na kwa usahihi. Katika zamu ya kawaida unaweza kuandaa au kuendesha mashine, kuunganisha vipande, kukagua vipande kwa vifaa vya kupimia, kuandika namba kwenye karatasi au skrini, kutunza eneo lako likiwa safi, na kuripoti matatizo ya mashine au vipande.",
            "Waajiri wengi wanatafuta cheti cha Certified Production Technician (CPT 4.0) kutoka Manufacturing Skill Standards Council (MSSC). Kina mitihani mitano: Usalama (Safety); Mbinu za Ubora na Upimaji (Quality Practices & Measurement); Mchakato wa Viwanda na Uzalishaji (Manufacturing Process & Production); Ufahamu wa Matengenezo (Maintenance Awareness); na Uzalishaji Rafiki kwa Mazingira (Green Production). Unapata cheti kwa kila mtihani unaofaulu. Mitihani minne ya kwanza kwa pamoja inakupa CPT 4.0 kamili. Green Production ni ya hiari.",
            "MSSC inasema mitihani ni ya kuchagua jibu (multiple choice) na inaweza kufanywa mtandaoni au kwenye karatasi. Mafunzo yanatolewa na vyuo vya jamii, programu za ajira na baadhi ya shule za sekondari. MSSC pia ina chaguo la vitendo linaloitwa CPT+ with Skill Boss. Kagua msscusa.org kwa ada za sasa, vituo vya mtihani na masharti; kozi hii haitoi cheti.",
            "Njia nyingine za kuingia kazini: uanagenzi uliosajiliwa, ambapo unalipwa huku unajifunza (tafuta kwenye apprenticeship.gov), na kazi ambazo mwajiri anakufundisha. Wanajeshi wastaafu waliofanya kazi ya matengenezo au ugavi jeshini mara nyingi wana ujuzi unaofaa kazi hii."
          ],
          words: [["Fundi wa uzalishaji", "mfanyakazi anayeendesha, kuandaa, kukagua na kutunza vifaa vinavyotengeneza bidhaa."], ["MSSC", "Manufacturing Skill Standards Council, shirika linalotoa mitihani na vyeti vya CPT."], ["Mtihani (assessment)", "jaribio linaloonyesha kama unajua somo."], ["Moduli", "eneo moja la mada la CPT, lenye mtihani wake na cheti chake."], ["Uanagenzi uliosajiliwa", "kazi yenye malipo pamoja na mafunzo na mshauri, inayotambuliwa na Wizara ya Kazi ya Marekani au jimbo."]],
          slides: [
            { title: "Kazi inavyoonekana", bullets: ["Kuandaa au kuendesha mashine, kuunganisha vipande", "Kupima na kukagua vipande, kuandika namba", "Kutunza eneo likiwa safi, kuripoti matatizo"] },
            { title: "MSSC CPT 4.0", bullets: ["Usalama (Safety)", "Mbinu za Ubora na Upimaji", "Mchakato wa Viwanda na Uzalishaji", "Ufahamu wa Matengenezo"] },
            { title: "Inavyofanya kazi", bullets: ["Cheti kwa kila moduli unayofaulu", "Moduli nne za kwanza = CPT 4.0 kamili", "Green Production ni ya hiari"] },
            { title: "Njia nyingine za kuingia", bullets: ["Uanagenzi uliosajiliwa: apprenticeship.gov", "Waajiri wanaowafundisha waajiriwa wapya", "Kozi hii inakuandaa; MSSC inathibitisha"] }
          ],
          sources: [MSSC_CPT, MSSC_COURSES, APPRENTICE],
          tryIt: "Kwenye karatasi, andika moduli nne za CPT 4.0 unazohitaji kwa cheti kamili. Kando ya kila moja, andika jambo moja unalolijua tayari kuhusu moduli hiyo na swali moja ulilonalo. Kisha fungua msscusa.org na uandike ungetafuta wapi kituo cha mtihani.",
          youCanNow: "kueleza fundi wa uzalishaji anafanya nini na kutaja moduli nne za CPT 4.0 unazohitaji kwa cheti kamili.",
          quickCheck: [
            { objective: "O5", q: "Lazima ufaulu moduli ngapi za CPT 4.0 ili upate cheti kamili?", options: ["Mbili", "Zote tano, pamoja na Green Production", "Nne za kwanza", "Usalama tu"], answer: 2, why: "MSSC inasema watahiniwa lazima wapate vyeti vinne vya kwanza ili wapate CPT 4.0 kamili; Green Production ni ya hiari." },
            { objective: "O5", q: "Nani anatoa cheti cha CPT 4.0?", options: ["Manufacturing Skill Standards Council (MSSC)", "Kozi hii ya mtandaoni", "OSHA", "Maktaba ya eneo lako"], answer: 0, why: "MSSC inatoa mitihani na vyeti; kozi hii inakuandaa tu." }
          ]
        },
        {
          title: "Usalama wa mashine: vizuizi, PPE na lockout/tagout",
          objectives: ["O1"],
          minutes: 6,
          goal: "Tambua hatari kwenye mashine na uchague kinga sahihi.",
          text: [
            "OSHA (shirika la Marekani la usalama na afya kazini) inasema sehemu yoyote ya mashine, kazi yake au mchakato unaoweza kusababisha jeraha lazima uwekewe kinga. Sheria yake ya mashine inataja hatari kama sehemu ya kazi (point of operation, mahali mashine inapokata, kubana au kutengeneza umbo), sehemu za kunasa (nip points, mahali sehemu mbili zinapozunguka kuelekeana na zinaweza kukuvuta ndani), sehemu zinazozunguka, na vibanzi na cheche zinazoruka. Majeraha yanaweza kuwa kupondwa, kukatika kiungo, kuungua na upofu.",
            "Kinga yako, kuanzia yenye nguvu zaidi hadi dhaifu zaidi: vizuizi (guards) vinavyozuia mwili wako usiingie eneo la hatari (kamwe usiviondoe wala kuvikwepa), taratibu salama, na vifaa vya kujikinga (PPE) kama miwani ya usalama, kinga ya masikio, glavu pale zinaporuhusiwa na viatu vyenye chuma mbele. Weka nguo zilizolegea, nywele ndefu na vito mbali na sehemu zinazosogea; glavu zinaweza kunaswa na sehemu zinazozunguka, kwa hiyo fuata sheria ya kila mashine.",
            "Lockout/tagout (LOTO, kufunga na kuweka kibandiko) ni sheria ya OSHA 29 CFR 1910.147. Mashine inapofanyiwa huduma au kitu kilichokwama kinapotolewa, nishati yake (ya umeme, ya mitambo, ya majimaji, ya hewa iliyobanwa, ya kemikali au ya joto) lazima izimwe na ifungwe kwa kufuli ili isiweze kuwaka. Ni wafanyakazi waliofunzwa na kuidhinishwa tu wanaoweka kufuli. Wengine wote wanaambiwa wasiondoe kufuli kamwe wala kuwasha upya kifaa kilichofungwa.",
            "Sheria za shirikisho za ajira ya watoto zinawazuia wafanyakazi walio chini ya miaka 18 kutumia mashine nyingi zinazoendeshwa kwa nguvu, kama mashine za kutengeneza umbo la chuma, kutoboa na kukata mabati, misumeno ya umeme na forklift. Kagua ukurasa wa Wizara ya Kazi kama uko chini ya miaka 18."
          ],
          steps: ["Jiandae: jua kila chanzo cha nishati cha mashine.", "Waambie wafanyakazi wanaohusika kuwa mashine inazimwa.", "Zima mashine kwa njia ya kawaida.", "Tenga nishati: zima swichi, funga vali, tenganisha.", "Weka kufuli lako na kibandiko chako.", "Achilia au zuia nishati iliyohifadhiwa (springi, hewa, shinikizo, joto).", "Thibitisha: jaribu kuiwasha, kisha rudisha vidhibiti kwenye hali ya kuzima."],
          words: [["Sehemu ya kazi (point of operation)", "mahali mashine inapokata, kupinda, kubana au kutengeneza umbo la malighafi."], ["Sehemu ya kunasa (nip point)", "mahali sehemu mbili zinazosogea zinapokutana na zinaweza kuvuta vidole, nywele au nguo."], ["Kizuizi (guard)", "kizuizi kinachoweka mwili wako mbali na sehemu zinazosogea."], ["PPE", "vifaa vya kujikinga, kama miwani ya usalama, vizibo vya masikio na viatu vya usalama."], ["Lockout/tagout (LOTO)", "kuzima nishati ya mashine na kuweka kufuli na kibandiko ili isiweze kuwaka wakati mtu anaifanyia kazi."], ["Nishati iliyohifadhiwa", "nishati inayobaki kwenye mashine baada ya kuzimwa, kama springi, shinikizo la hewa au joto."]],
          slides: [
            { title: "Mahali mashine zinapowaumiza watu", bullets: ["Sehemu ya kazi (point of operation)", "Sehemu za kunasa na sehemu zinazozunguka", "Vibanzi na cheche zinazoruka"] },
            { title: "Kinga yako", bullets: ["Vizuizi: kamwe usiviondoe wala kuvikwepa", "Taratibu salama", "PPE: miwani, kinga ya masikio, viatu"] },
            { title: "Lockout/tagout", bullets: ["Kwa huduma na kutoa vitu vilivyokwama", "Zima, tenga, funga kufuli, weka kibandiko", "Achilia nishati iliyohifadhiwa, kisha thibitisha"] },
            { title: "Jua mipaka", bullets: ["Walioidhinishwa tu ndio wanaoweka kufuli", "Kamwe usiondoe kufuli la mtu mwingine", "Chini ya miaka 18: mashine nyingi haziruhusiwi"] }
          ],
          sources: [OSHA_GUARD, OSHA_212, OSHA_LOTO, OSHA_147, DOL_YOUTH],
          tryIt: "Chagua mashine unayoijua au unayoweza kuitazama kwenye video: mashine ya kutoboa (drill press), mashine ya kusaga karatasi au mkanda wa kusafirisha (conveyor). Orodhesha angalau hatari tatu (sehemu ya kazi, sehemu za kunasa, sehemu zinazozunguka, vibanzi vinavyoruka) na kinga kwa kila moja. Kisha soma kisa hiki cha mazoezi: kipande kimekwama kwenye mashine ya kubana (press). Andika nini lazima kitokee kabla mtu yeyote hajaingiza mkono.",
          youCanNow: "kutambua hatari kwenye mashine na kuchagua vizuizi, PPE au lockout/tagout ili kujikinga wewe na wengine.",
          quickCheck: [
            { objective: "O1", q: "Kizuizi kinakuchelewesha, na mfanyakazi mwenzako anasema ukiondoe. Unafanya nini?", options: ["Kiondoe msimamizi akiwa hayupo", "Kipinde kando", "Kiondoe kwa zamu moja tu", "Kiache mahali pake na umripoti msimamizi tatizo"], answer: 3, why: "Vizuizi vinaweka mwili wako nje ya eneo la hatari na kamwe havipaswi kuondolewa wala kukwepwa." },
            { objective: "O1", q: "Mashine inahitaji huduma. Ni hatua gani inakuja mara tu baada ya kuweka kufuli lako na kibandiko?", options: ["Washa mashine", "Achilia au zuia nishati iliyohifadhiwa, kisha thibitisha kuwa haiwezi kuwaka", "Ondoa kizuizi na uanze", "Ondoa kufuli ili kulijaribu"], answer: 1, why: "Baada ya kufunga, unaachilia nishati iliyohifadhiwa na kuthibitisha kuwa mashine haiwezi kuwaka." }
          ]
        },
        {
          title: "Kupima vipande na kusoma uvumilivu",
          objectives: ["O2"],
          minutes: 6,
          goal: "Pima kipande na uamue kama kiko ndani ya uvumilivu.",
          text: [
            "Kila kipande kina ukubwa unaolengwa kwenye mchoro wake, unaoitwa ukubwa wa kawaida (nominal size), na uvumilivu (tolerance): kiasi kinachoweza kutofautiana na lengo na bado kikawa kizuri. Kwa mfano, inchi 1.250 ± 0.005 maana yake ukubwa wowote kuanzia inchi 1.245 hadi 1.255 ni mzuri. Chochote kidogo zaidi au kikubwa zaidi kiko nje ya uvumilivu.",
            "Vifaa vya kawaida: utepe wa kupimia au rula ya chuma kwa vipimo vya jumla; kalipa (caliper) kwa ukubwa wa nje, wa ndani na wa kina, mara nyingi hadi elfu moja ya inchi (0.001) au mia moja ya milimita (0.01); na mikromita (micrometer) kwa ukubwa wa nje ulio sahihi zaidi. Karakana nyingi hutumia kalipa za kidijitali.",
            "Tabia nzuri: safisha kipande na kifaa, weka kalipa kwenye sifuri taya zikiwa zimefungwa, shika taya zikinyooka sawasawa na kipande bila kubana, soma namba ukiitazama moja kwa moja, na uiandike mara moja. Pima zaidi ya mara moja kama huna uhakika. Jifunze kutumia vifaa vya kupimia kwa usahihi na mwalimu, ambaye pia atakufundisha kusoma skeli za dial na vernier."
          ],
          steps: ["Soma mchoro: ukubwa wa kawaida na uvumilivu.", "Kokotoa mipaka: ukubwa wa kawaida toa na jumlisha uvumilivu.", "Safisha kipande na kifaa; weka kalipa kwenye sifuri.", "Pima taya zikiwa zimenyooka, bila kubana; soma namba.", "Iandike. Ndani ya mipaka = kizuri; nje = nje ya uvumilivu."],
          words: [["Ukubwa wa kawaida (nominal size)", "ukubwa unaolengwa unaoonyeshwa kwenye mchoro."], ["Uvumilivu (tolerance)", "kiasi ambacho ukubwa unaweza kutofautiana na lengo na bado ukawa mzuri."], ["Kalipa (caliper)", "kifaa chenye taya zinazoteleza kinachopima ukubwa wa nje, wa ndani na wa kina."], ["Mikromita (micrometer)", "kifaa cha aina ya skrubu kinachopima ukubwa wa nje kwa usahihi mkubwa."], ["Sifuri (zero)", "kuweka kifaa kisome 0 taya zikiwa zimefungwa, ili vipimo vianzie mahali sahihi."]],
          slides: [
            { title: "Lengo na uvumilivu", bullets: ["Ukubwa wa kawaida: ukubwa unaolengwa", "Uvumilivu: kiasi kinachoweza kutofautiana", "1.250 ± 0.005 = 1.245 hadi 1.255"] },
            { title: "Vifaa", bullets: ["Utepe au rula ya chuma: vipimo vya jumla", "Kalipa: nje, ndani, kina", "Mikromita: ukubwa wa nje kwa usahihi mkubwa"] },
            { title: "Pima kama mtaalamu", bullets: ["Safisha kipande na kifaa; weka sifuri kwanza", "Taya zimenyooka, bila kubana", "Soma moja kwa moja; iandike"] },
            { title: "Amua", bullets: ["Ndani ya mipaka: kipande kizuri", "Nje: nje ya uvumilivu, kiripoti"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Mazoezi tu, namba za kubuni. Kipande ni inchi 2.000 ± 0.010. Kokotoa mipaka, kisha amua kizuri au nje ya uvumilivu kwa: 1.995, 2.012, 1.989, 2.010, 2.004. Kisha pima vitu vitatu nyumbani kwa rula (kitabu, simu, kijiko) mara mbili kila kimoja na uandike vipimo vyote viwili.",
          youCanNow: "kukokotoa mipaka ya uvumilivu, kupima kipande kwa uangalifu na kuamua kama ni kizuri au kiko nje ya uvumilivu.",
          quickCheck: [
            { objective: "O2", q: "Kipande ni inchi 0.500 ± 0.002. Masafa gani ni mazuri?", options: ["0.400 hadi 0.600", "0.498 hadi 0.502", "0.500 hadi 0.502 tu", "0.490 hadi 0.510"], answer: 1, why: "Toa na jumlisha 0.002 kwa 0.500: masafa mazuri ni 0.498 hadi 0.502." },
            { objective: "O2", q: "Unafanya nini na kalipa ya kidijitali kabla ya kupima?", options: ["Bana taya kwa nguvu", "Pima kipande kikiwa kichafu", "Funga taya na uiweke kwenye sifuri", "Isome ukiitazama kwa pembeni"], answer: 2, why: "Kuweka sifuri taya zikiwa zimefungwa kunafanya kila kipimo kianzie mahali sahihi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi, usalama na upimaji",
        questions: [
          { objective: "O5", q: "Moduli gani ni ya hiari kwa CPT 4.0 kamili?", options: ["Usalama (Safety)", "Green Production", "Ufahamu wa Matengenezo", "Mbinu za Ubora na Upimaji"], answer: 1, why: "MSSC inasema Green Production si sehemu ya cheti kamili cha CPT 4.0." },
          { objective: "O1", q: "Mahali roli mbili zinapozunguka kuelekeana na zinaweza kuvuta mkono wa shati lako panaitwa:", options: ["Kibao cha taarifa za mashine", "Uvumilivu", "Uzito wa kusawazisha", "Sehemu ya kunasa (ingoing nip point)"], answer: 3, why: "Sehemu ya kunasa ni mahali sehemu mbili zinazosogea zinapokutana na zinaweza kukuvuta ndani." },
          { objective: "O1", q: "Kipande kimekwama kwenye mashine. Nini lazima kitokee kabla mtu yeyote hajaingiza mkono?", options: ["Lockout/tagout na mtu aliyeidhinishwa", "Weka mashine kwenye kasi ndogo", "Vaa glavu na uingize mkono haraka", "Mwombe mfanyakazi mwenzako aangalie swichi"], answer: 0, why: "Kutoa kitu kilichokwama ni kazi ya huduma, kwa hiyo nishati ya mashine lazima ifungwe kwanza." },
          { objective: "O2", q: "Kipande ni mm 25.00 ± 0.10. Unapima mm 25.14. Kipi ni kweli?", options: ["Ni kizuri", "Ni kizuri kama kinaonekana vizuri", "Kiko nje ya uvumilivu", "Uvumilivu hauhusu vipande vya mfumo wa mita"], answer: 2, why: "Mpaka wa juu ni mm 25.10, na mm 25.14 iko juu yake." },
          { objective: "O2", q: "Kifaa gani ni bora kwa kupima upana wa ndani wa mfereji?", options: ["Nyundo", "Kipimo cha usawa (level)", "Brashi ya rangi", "Kalipa"], answer: 3, why: "Kalipa ina taya za ndani zilizotengenezwa kupima ukubwa wa ndani." }
        ]
      }
    },
    {
      name: "Sura 2: Ubora, uzalishaji na kupata kazi",
      lessons: [
        {
          title: "Ukaguzi wa ubora na kutafuta chanzo halisi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Andika kasoro na utafute chanzo halisi kinachowezekana kwa 5 Whys.",
          text: [
            "Ubora maana yake kila kipande kinatimiza vipimo vyake rasmi (specification), yaani masharti yaliyoandikwa ya ukubwa, mwonekano na kazi yake. Kipande kisichotimiza ni kasoro (defect), au kipande kisichokidhi. Kazi yako ni kugundua kasoro mapema, kuziweka mbali na vipande vizuri na kuziripoti.",
            "Tumia karatasi ya kuhesabu (check sheet): jedwali rahisi ambapo unaweka alama ya mstari kila mara unapoona aina ya kasoro, kama mkwaruzo, ukubwa usio sahihi au tundu linalokosekana. Baada ya zamu, alama zinaonyesha tatizo gani linatokea mara nyingi zaidi. Weka vipande vibovu kwenye pipa la vilivyokataliwa lenye alama, au uviwekee kibandiko ili mtu yeyote asivisafirishe kwa makosa.",
            "Ili kurekebisha tatizo kabisa, tafuta chanzo chake halisi (root cause), si dalili tu. 5 Whys ni rahisi: eleza tatizo, uliza \"Kwa nini?\", kisha uliza \"Kwa nini?\" kuhusu jibu hilo, kama mara tano, hadi ufikie chanzo unachoweza kurekebisha. Viwanda vingi kisha hutumia Plan-Do-Check-Act (Panga-Fanya-Kagua-Tekeleza): panga suluhisho, lijaribu, kagua matokeo, na lifanye kuwa utaratibu wa kawaida likifanya kazi."
          ],
          steps: ["Kagua vipande dhidi ya vipimo rasmi.", "Weka alama kwa kila aina ya kasoro kwenye karatasi ya kuhesabu.", "Wekea vipande vibovu kibandiko au viweke kwenye pipa la vilivyokataliwa; viripoti.", "Uliza \"Kwa nini?\" kama mara tano ili kufikia chanzo halisi.", "Pendekeza suluhisho; kagua kuwa kasoro zinapungua."],
          words: [["Vipimo rasmi (specification)", "masharti yaliyoandikwa ambayo kipande lazima kitimize."], ["Kasoro (defect)", "kipande au bidhaa isiyotimiza vipimo rasmi; pia huitwa kisichokidhi (nonconforming)."], ["Karatasi ya kuhesabu (check sheet)", "jedwali la kuhesabu mara ngapi kila aina ya kasoro inatokea."], ["Chanzo halisi (root cause)", "sababu ya kweli ya tatizo; kuirekebisha kunazuia tatizo lisirudi."], ["5 Whys", "kuuliza \"Kwa nini?\" tena na tena ili kutoka kwenye dalili hadi chanzo chake halisi."], ["Plan-Do-Check-Act", "mzunguko wa hatua nne wa kujaribu suluhisho na kulifanya kuwa utaratibu wa kawaida."]],
          slides: [
            { title: "Ubora kwenye mstari", bullets: ["Kila kipande kinatimiza vipimo rasmi", "Gundua kasoro mapema", "Weka vipande vibovu mbali na vizuri"] },
            { title: "Karatasi za kuhesabu", bullets: ["Weka alama kwa kila aina ya kasoro", "Ona tatizo gani linatokea mara nyingi zaidi", "Wekea vilivyokataliwa kibandiko au pipa; viripoti"] },
            { title: "5 Whys", bullets: ["Eleza tatizo", "Uliza \"Kwa nini?\" kama mara tano", "Simama kwenye chanzo unachoweza kurekebisha"] },
            { title: "Plan-Do-Check-Act", bullets: ["Panga suluhisho, lijaribu", "Kagua matokeo", "Lifanye utaratibu wa kawaida likifanya kazi"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Kisa cha mazoezi: matundu yanayotobolewa kwenye mabano yako mahali pasipo sahihi katika kama kipande kimoja kati ya kumi. Tengeneza karatasi ya kuhesabu yenye aina tatu za kasoro na uijaze kwa alama za kubuni. Kisha andika mnyororo wa 5 Whys (kwa mfano: kishikio cha kipande kinasogea, kwa sababu bano limelegea, kwa sababu ...) na umalizie kwa suluhisho unaloweza kumpendekezea msimamizi wako.",
          youCanNow: "kuandika kasoro kwenye karatasi ya kuhesabu, kutenganisha vipande vibovu, na kutumia 5 Whys kutafuta chanzo halisi.",
          quickCheck: [
            { objective: "O3", q: "Unakuta vipande vitano vyenye mikwaruzo kwenye pipa la vipande vizuri. Unafanya nini kwanza?", options: ["Vitenganishe na uviwekee kibandiko, kisha uripoti", "Visafirishe; mikwaruzo ni midogo", "Vitupe na usiseme kitu", "Visugue mwenyewe viwe laini"], answer: 0, why: "Vipande vibovu vinawekwa mbali na vizuri na kuripotiwa ili chanzo kipatikane." },
            { objective: "O3", q: "Lengo la 5 Whys ni nini?", options: ["Kumlaumu mfanyakazi mwenzako", "Kuhesabu vipande", "Kupunguza kasi ya mstari", "Kupata chanzo halisi unachoweza kurekebisha"], answer: 3, why: "5 Whys inatoka kwenye dalili hadi chanzo halisi, ili suluhisho lidumu." }
          ]
        },
        {
          title: "Uzalishaji wa lean, 5S na utunzaji wa mashine wa kila siku",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tumia 5S na ukaguzi wa kila siku wa mwendeshaji katika eneo la kazi.",
          text: [
            "Uzalishaji wa lean maana yake ni kutengeneza kile mteja anachohitaji kwa upotevu mdogo. Upotevu unajumuisha kusubiri, kutengeneza kupita kiasi, kutembea zaidi ya lazima, kushughulikia vitu zaidi ya lazima, akiba nyingi kupita kiasi, kasoro na hatua zisizoongeza thamani. Kuona upotevu na kupendekeza maboresho madogo ni sehemu ya kazi ya fundi.",
            "5S inaweka eneo la kazi salama na lenye ufanisi. Panga (Sort): ondoa usichohitaji. Weka kwa mpangilio (Set in order): mahali penye alama kwa kila kifaa. Ng'arisha (Shine): safisha eneo na mashine, jambo ambalo pia linaonyesha mivujo na uharibifu. Weka viwango (Standardize): andika jinsi eneo linavyopaswa kuonekana. Dumisha (Sustain): endelea kufanya hivyo kila zamu.",
            "Ufahamu wa matengenezo unaanza na utunzaji wa kila siku wa mwendeshaji. Kabla na wakati wa zamu yako, tafuta mivujo, boliti zilizolegea, mikanda iliyochakaa, mafuta au kipozaji kilichopungua, kelele za ajabu, joto, mtetemo na vizuizi au nyaya zilizoharibika. Fuata orodha ya ukaguzi ya mashine. Ripoti unachokiona; ni watu waliofunzwa na kuidhinishwa tu wanaotengeneza mashine, na matengenezo yanahitaji lockout/tagout.",
            "Matengenezo ya kinga (preventive maintenance) ni utunzaji uliopangwa, kama kutia mafuta na kubadilisha vichujio kwa ratiba, ili mashine ziharibike mara chache. Maelezo yako kwenye orodha ya ukaguzi yanasaidia timu ya matengenezo kugundua matatizo mapema."
          ],
          steps: ["Panga (Sort): ondoa usichohitaji.", "Weka kwa mpangilio (Set in order): mahali penye alama kwa kila kifaa.", "Ng'arisha (Shine): safisha, na utafute mivujo na uharibifu unaposafisha.", "Weka viwango (Standardize): andika au bandika jinsi eneo linavyopaswa kuonekana.", "Dumisha (Sustain): fanya hivyo kila zamu.", "Ukaguzi wa kila siku: mivujo, kelele, joto, mtetemo, mikanda, vimiminika, vizuizi; ripoti matatizo."],
          words: [["Lean", "njia ya kufanya kazi inayoondoa upotevu ili thamani imfikie mteja."], ["Upotevu (waste)", "chochote kinachoongeza muda au gharama bila kuongeza thamani, kama kusubiri au kutembea zaidi ya lazima."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain (Panga, Weka kwa mpangilio, Ng'arisha, Weka viwango, Dumisha): mbinu ya eneo la kazi lenye mpangilio."], ["Matengenezo ya kinga", "utunzaji uliopangwa kwa ratiba ili mashine ziharibike mara chache."], ["Mtetemo", "kutikisika ambako kunaweza kuwa dalili ya sehemu iliyolegea au iliyochakaa."]],
          slides: [
            { title: "Lean: punguza upotevu", bullets: ["Kusubiri, kutembea na kushughulikia vitu zaidi ya lazima", "Kutengeneza kupita kiasi, akiba nyingi kupita kiasi", "Kasoro na hatua zisizo na thamani"] },
            { title: "5S", bullets: ["Panga na Weka kwa mpangilio", "Ng'arisha: safisha na ukague", "Weka viwango na Dumisha"] },
            { title: "Ukaguzi wa mashine wa kila siku", bullets: ["Mivujo, boliti zilizolegea, mikanda iliyochakaa", "Kelele, joto, mtetemo", "Vimiminika, vizuizi na nyaya"] },
            { title: "Ripoti, usitengeneze", bullets: ["Iandike kwenye orodha ya ukaguzi", "Walioidhinishwa tu ndio wanaotengeneza", "Matengenezo yanahitaji lockout/tagout"] }
          ],
          sources: [MSSC_COURSES, OSHA_147],
          tryIt: "Chagua eneo moja la kazi unaloweza kuliona sasa: meza ya jikoni, rafu ya gereji au dawati. Andika kitendo kimoja kwa kila moja ya S 5. Kisha andika orodha ya ukaguzi wa kila siku yenye angalau vitu vitano kwa mashine unayoijua (gari, baiskeli, mashine ya kukata nyasi au mashine ya kufulia) na kile ungeripoti.",
          youCanNow: "kuona upotevu, kutumia 5S katika eneo la kazi na kufanya ukaguzi wa kila siku wa mwendeshaji, ukiripoti matatizo badala ya kuyatengeneza mwenyewe.",
          quickCheck: [
            { objective: "O4", q: "Hatua gani ya 5S maana yake ni \"mahali penye alama kwa kila kifaa\"?", options: ["Panga (Sort)", "Ng'arisha (Shine)", "Weka kwa mpangilio (Set in order)", "Dumisha (Sustain)"], answer: 2, why: "Weka kwa mpangilio inampa kila kifaa mahali penye alama ili kiwe rahisi kupata na kurudisha." },
            { objective: "O4", q: "Wakati wa ukaguzi wako wa kila siku unasikia kelele mpya ya kusagika. Unafanya nini?", options: ["Ongeza sauti ya muziki", "Iandike kwenye orodha ya ukaguzi na uiripoti", "Fungua mashine vipande vipande", "Ipuuze hadi iharibike"], answer: 1, why: "Waendeshaji wanaripoti kelele isiyo ya kawaida; watu waliofunzwa na kuidhinishwa wanaitengeneza." }
          ]
        },
        {
          title: "Mpango wako: maandalizi ya CPT 4.0 na kazi yako ya kwanza ya uzalishaji",
          objectives: ["O5"],
          minutes: 5,
          goal: "Andika mpango wenye tarehe wa kujiandaa kwa CPT 4.0 na kuomba kazi za uzalishaji.",
          text: [
            "Anza na ukurasa rasmi. Kwenye msscusa.org, kagua moduli za sasa, jinsi mitihani inavyotolewa, ada na mahali pa kufanyia mtihani. Vyuo vingi vya jamii na vituo vya ajira (mara nyingi huitwa American Job Centers) vinaendesha mafunzo ya CPT na vinaweza kusaidia kuyalipia. Uliza kama programu inajumuisha mazoezi ya vitendo kwa vifaa na mashine halisi.",
            "Panga moduli moja kwa wakati. Usalama ni moduli nzuri ya kuanza nayo. Kwa kila moja, weka wiki za kusoma, njia ya kufanya mazoezi (maelezo, kadi za kukariri, mazoezi ya kozi hii) na tarehe ya mtihani unayolenga ambayo unaithibitisha na kituo cha mtihani.",
            "Omba kazi huku unasoma. Tafuta kazi za msaidizi wa uzalishaji (production associate), mwendeshaji wa mashine, muunganishaji wa vipande na fundi wa uzalishaji, na utafute uanagenzi uliosajiliwa kwenye apprenticeship.gov. Baadhi ya waajiri huajiri watu wenye rekodi ya uhalifu; programu za ajira na za kurudi katika jamii zinaweza kukuelekeza kwao.",
            "Kwenye wasifu wako (CV), kuwa mkweli. Andika \"Completed Manufacturing Technician Basics (Koach Learn), 2026\" na uorodheshe moduli za CPT baada tu ya kuzifaulu. Katika mahojiano, zungumza kwanza kuhusu usalama, kupima kwa uangalifu, kugundua vipande vibovu na kutunza eneo lako kwa mpangilio."
          ],
          steps: ["Soma ukurasa wa CPT 4.0 kwenye msscusa.org; andika moduli nne zinazohitajika.", "Tafuta programu moja ya mafunzo au kituo cha mtihani karibu nawe na kile kinachotoa.", "Weka wiki za kusoma na tarehe unayolenga kwa kila moduli; thibitisha tarehe na kituo.", "Orodhesha vyeo vitatu vya kazi na waajiri au nafasi tatu za uanagenzi za kuomba.", "Andika mstari wa wasifu ulio wa kweli na jibu la sekunde 30: \"Kwa nini viwanda?\""],
          words: [["American Job Center", "ofisi ya umma ya ajira inayowasaidia watu kupata kazi na mafunzo."], ["Msaidizi wa uzalishaji (production associate)", "cheo cha kawaida cha kazi ya kuanzia kiwandani."], ["Kituo cha mtihani", "shule au kituo kilichoidhinishwa kutoa mtihani."]],
          slides: [
            { title: "Anza na MSSC", bullets: ["Kagua moduli, mitihani na ada kwenye msscusa.org", "Tafuta programu au kituo cha mtihani karibu nawe", "Uliza kuhusu mazoezi ya vitendo"] },
            { title: "Moduli moja kwa wakati", bullets: ["Usalama ni moduli nzuri ya kuanza nayo", "Wiki za kusoma na njia ya mazoezi", "Tarehe unayolenga na kuithibitisha"] },
            { title: "Omba kazi huku unasoma", bullets: ["Msaidizi wa uzalishaji, mwendeshaji, muunganishaji", "Uanagenzi uliosajiliwa", "Programu za ajira na za kurudi katika jamii"] },
            { title: "Kuwa mkweli", bullets: ["Orodhesha kozi uliyomaliza", "Orodhesha moduli za CPT baada tu ya kuzifaulu", "Zungumza kwanza kuhusu usalama na ubora"] }
          ],
          sources: [MSSC_CPT, APPRENTICE],
          tryIt: "Andika mpango wako kwenye ukurasa mmoja: moduli nne pamoja na wiki ya kuanza kusoma na tarehe ya mtihani unayolenga kwa kila moja, programu moja au kituo kimoja cha mtihani cha kuwasiliana nacho, kazi tatu au nafasi tatu za uanagenzi za kuomba, na mstari wako wa wasifu ulio wa kweli. Soma kwa sauti jibu lako la sekunde 30 la \"Kwa nini viwanda?\".",
          youCanNow: "kuandika mpango wenye tarehe wa kujiandaa kwa CPT 4.0 na kazi ya kwanza ya uzalishaji, na kueleza mafunzo yako kwa ukweli.",
          quickCheck: [
            { objective: "O5", q: "Umefaulu moduli ya Usalama tu. Mstari gani wa wasifu ni wa kweli?", options: ["\"Full CPT 4.0 certified\"", "\"Master technician\"", "\"OSHA certified machinist\"", "\"MSSC Safety certificate (CPT 4.0 module), 2026\""], answer: 3, why: "Unataja hasa kile ulichopata na haudai CPT 4.0 kamili." },
            { objective: "O5", q: "Unathibitisha wapi ada za sasa za CPT na vituo vya mtihani?", options: ["Tovuti rasmi ya MSSC au kituo cha mtihani kilichoidhinishwa", "Tangazo la mitandao ya kijamii", "Makisio ya rafiki", "Tovuti yoyote ya matangazo ya kazi"], answer: 0, why: "Ada na mitihani hubadilika, kwa hiyo kagua moja kwa moja kwa MSSC au kituo cha mtihani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Ubora, uzalishaji na kupata kazi",
        questions: [
          { objective: "O3", q: "Karatasi ya kuhesabu inakuonyesha nini baada ya zamu?", options: ["Aina gani ya kasoro inatokea mara nyingi zaidi", "Bei ya mashine", "Hali ya hewa", "Nani alichelewa kufika"], answer: 0, why: "Alama kwenye karatasi ya kuhesabu zinaonyesha mara ngapi kila aina ya kasoro inatokea." },
          { objective: "O3", q: "Vipande ni virefu mno. Kwa nini? Kizuizi cha kusimamisha (stop) kimesogea. Kwa nini? Boliti yake imelegea. Kwa nini? Hakuna anayeikagua. Suluhisho zuri ni lipi?", options: ["Tengeneza vipande haraka zaidi", "Ilaumu zamu iliyopita", "Ongeza boliti ya stop kwenye ukaguzi wa kila siku", "Tupa vipande vyote"], answer: 2, why: "Suluhisho linalenga chanzo halisi kilichofikiwa na 5 Whys: boliti haikaguliwi kamwe." },
          { objective: "O4", q: "Wafanyakazi wanasubiri dakika 20 kila zamu vipande vifike. Kwa lugha ya lean hii ni:", options: ["Thamani", "Upotevu", "5S", "Uvumilivu"], answer: 1, why: "Kusubiri kunaongeza muda bila thamani, kwa hiyo ni mojawapo ya upotevu wa lean." },
          { objective: "O4", q: "Hatua gani ya 5S pia inakusaidia kuona mivujo na uharibifu?", options: ["Panga (Sort)", "Dumisha (Sustain)", "Weka viwango (Standardize)", "Ng'arisha (Shine)"], answer: 3, why: "Kusafisha mashine wakati wa Ng'arisha kunaonyesha mivujo, nyufa na uchakavu." },
          { objective: "O5", q: "Ipi ni hatua nzuri ya kwanza kwa mpango wa CPT 4.0?", options: ["Soma ukurasa wa CPT 4.0 kwenye msscusa.org na utafute kituo cha mtihani", "Nunua cheti mtandaoni", "Fanya mitihani yote mitano siku moja bila kusoma", "Subiri hadi mtu akuambie"], answer: 0, why: "Kuanza na ukurasa rasmi kunakupa moduli za sasa, mitihani na vituo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Fundi wa Uzalishaji Viwandani",
    questions: [
      { objective: "O5", q: "Shirika gani linatoa cheti cha Certified Production Technician (CPT 4.0)?", options: ["OSHA", "Mwajiri wako tu", "Manufacturing Skill Standards Council (MSSC)", "Kozi hii"], answer: 2, why: "MSSC inatoa mitihani ya CPT na vyeti." },
      { objective: "O5", q: "Moduli gani zinaunda CPT 4.0 kamili?", options: ["Usalama; Mbinu za Ubora na Upimaji; Mchakato wa Viwanda na Uzalishaji; Ufahamu wa Matengenezo", "Uchomeleaji, ufundi bomba, udereva na upishi", "Green Production tu", "Forklift, kreni, ngazi na paa"], answer: 0, why: "MSSC inasema moduli nne za kwanza zinatoa CPT 4.0 kamili." },
      { objective: "O1", q: "Ipi ni hatari inayotajwa na sheria ya mashine ya OSHA?", options: ["Sakafu safi", "Chati ya 5S iliyobandikwa", "Penseli iliyochongoka", "Sehemu zinazozunguka"], answer: 3, why: "Sheria ya jumla ya mashine ya OSHA inataja sehemu zinazozunguka pamoja na sehemu ya kazi, sehemu za kunasa na vibanzi vinavyoruka." },
      { objective: "O1", q: "Kinga yenye nguvu zaidi dhidi ya sehemu zinazosogea za mashine ni ipi?", options: ["Kufanya kazi haraka zaidi", "Kizuizi kinachoweka mwili wako nje ya eneo la hatari", "Glavu zilizolegea", "Kelele ya onyo"], answer: 1, why: "Vizuizi vinakuweka mbali na hatari na kamwe havipaswi kuondolewa wala kukwepwa." },
      { objective: "O1", q: "Unaona kufuli la mfanyakazi mwingine kwenye mashine unayoihitaji. Unafanya nini?", options: ["Kata kufuli", "Muulize msimamizi wako; kamwe usiondoe kufuli la mtu mwingine", "Washa mashine hata hivyo", "Ondoa kibandiko tu"], answer: 1, why: "Ni mfanyakazi aliyeweka kufuli tu, kwa kufuata utaratibu, anayeliondoa." },
      { objective: "O1", q: "Una miaka 17. Kazi gani haikuruhusiwi chini ya sheria za shirikisho za ajira ya watoto?", options: ["Kufagia chumba cha mapumziko", "Kupanga makaratasi", "Kupanga masanduku mepesi kwa mkono", "Kuendesha mashine ya kutoboa chuma"], answer: 3, why: "Wafanyakazi walio chini ya miaka 18 hawaruhusiwi kuendesha mashine za nguvu za kutengeneza umbo la chuma, kutoboa au kukata mabati." },
      { objective: "O2", q: "Kipande ni inchi 3.000 ± 0.005. Unapima 2.996. Je, ni kizuri?", options: ["Ndiyo, kiko ndani ya 2.995 hadi 3.005", "Hapana, lazima kiwe 3.000 kamili", "Hapana, ni kikubwa mno", "Kama tu kinang'aa"], answer: 0, why: "2.996 iko ndani ya mipaka ya 2.995 hadi 3.005." },
      { objective: "O2", q: "Uvumilivu ni nini?", options: ["Uzito wa kipande", "Kasi ya mashine", "Kiasi ambacho ukubwa unaweza kutofautiana na lengo na bado ukawa mzuri", "Bei ya kipande"], answer: 2, why: "Uvumilivu unaweka masafa yanayoruhusiwa kuzunguka ukubwa wa kawaida." },
      { objective: "O2", q: "Tabia gani inatoa kipimo sahihi cha kalipa?", options: ["Kubana taya kwa nguvu zako zote", "Kusafisha kipande, kuweka kifaa kwenye sifuri na kushika taya zikiwa zimenyooka", "Kupima kupitia glavu", "Kubahatisha tarakimu ya mwisho"], answer: 1, why: "Nyuso safi, kifaa kilichowekwa sifuri na taya zilizonyooka vinatoa vipimo sahihi." },
      { objective: "O2", q: "Kipande ni mm 10.00 ± 0.05. Kipimo gani kiko nje ya uvumilivu?", options: ["mm 9.97", "mm 10.04", "mm 10.00", "mm 10.08"], answer: 3, why: "Mpaka wa juu ni mm 10.05, kwa hiyo mm 10.08 ni kikubwa mno." },
      { objective: "O3", q: "Kipande kisichotimiza vipimo vyake rasmi kinaitwa:", options: ["Kisichokidhi (kasoro)", "Ukubwa wa kawaida", "Lean", "Kilichowekwa sifuri"], answer: 0, why: "Kipande kisichotimiza vipimo rasmi ni kasoro, au kipande kisichokidhi." },
      { objective: "O3", q: "Kwa nini unawekea vipande vibovu kibandiko au kuviweka kwenye pipa mara moja?", options: ["Ili pipa liwe zito", "Ili vipande vipakwe rangi", "Ili mtu yeyote asivichanganye na vizuri au kuvisafirisha", "Ili kuvificha kwa msimamizi"], answer: 2, why: "Kutenganisha vilivyokataliwa kunazuia vipande vibovu visimfikie mteja." },
      { objective: "O3", q: "Katika Plan-Do-Check-Act, nini kinatokea katika \"Check\"?", options: ["Unapanga suluhisho", "Unasimamisha mstari kabisa", "Unaagiza mashine mpya", "Unaona kama suluhisho limefanya kazi"], answer: 3, why: "Check maana yake ni kutazama matokeo kuona kama suluhisho limefanya kazi." },
      { objective: "O4", q: "Upi ni upotevu wa lean?", options: ["Kusogeza vipande huku na huko bila sababu", "Kipande kizuri kilichotumwa kwa mteja", "Eneo safi la kazi", "Ukaguzi wa usalama uliokamilika"], answer: 0, why: "Kusogeza na kushughulikia vitu zaidi ya lazima kunaongeza muda na gharama bila thamani." },
      { objective: "O4", q: "\"Dumisha\" (Sustain) maana yake nini katika 5S?", options: ["Tupa vitu visivyotumika", "Endelea kufanya 5S kila zamu", "Paka sakafu rangi", "Nunua vifaa vipya"], answer: 1, why: "Dumisha maana yake ni kuifanya 5S kuwa mazoea ili eneo libaki na mpangilio." },
      { objective: "O4", q: "Wakati wa ukaguzi wa kila siku unagundua mafuta yanavuja chini ya mashine. Kitendo sahihi ni kipi?", options: ["Yafute na usiseme kitu", "Tengeneza bomba mwenyewe mashine ikiwa inafanya kazi", "Ripoti na ufuate orodha ya ukaguzi; waache walioidhinishwa waitengeneze", "Funika kwa sanduku"], answer: 2, why: "Waendeshaji wanaripoti matatizo; walioidhinishwa wanayatengeneza chini ya lockout/tagout." },
      { objective: "O4", q: "Matengenezo ya kinga ni nini?", options: ["Kutengeneza mashine tu baada ya kuharibika", "Utunzaji uliopangwa kwa ratiba ili mashine ziharibike mara chache", "Kusafisha chumba cha mapumziko", "Kununua sare za ziada"], answer: 1, why: "Matengenezo ya kinga ni utunzaji wa ratiba unaozuia kuharibika." },
      { objective: "O5", q: "Unataka kazi yenye malipo inayojumuisha mafunzo na mshauri. Unaweza kutafuta wapi?", options: ["Tovuti ya bahati nasibu", "Programu ya kuponi", "Apprenticeship Finder ya Apprenticeship.gov", "Jukwaa la michezo ya video"], answer: 2, why: "Apprenticeship Finder ya Wizara ya Kazi inaorodhesha nafasi za uanagenzi uliosajiliwa." },
      { objective: "O1", q: "Katika lockout/tagout, kwa nini unajaribu kuwasha mashine baada ya kuifunga?", options: ["Ili kuipasha moto", "Ili kujaribu rangi ya kufuli", "Ili kumaliza kazi haraka", "Ili kuthibitisha kuwa nishati imezimwa kweli kabla ya kufanya kazi"], answer: 3, why: "Kuthibitisha kunaonyesha nishati imetengwa; kisha unarudisha vidhibiti kwenye hali ya kuzima." },
      { objective: "O3", q: "Rangi inabanduka kwenye vipande vingi. Kwa nini? Uso una mafuta. Kwa nini? Hatua ya kuosha iliachwa. Jibu gani liko karibu zaidi na chanzo halisi?", options: ["Vipande ni vibovu", "Hatua ya kuosha iliachwa", "Rangi inabanduka", "Mteja ni mchaguzi sana"], answer: 1, why: "Hatua ya kuosha iliyoachwa ni chanzo unachoweza kurekebisha; rangi kubanduka ni dalili tu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 7, 10, 12, 13, 15] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Orodha ya hatari na kinga", objective: "O1", notYet: "Hatari chini ya tatu, au hatari isiyo na kinga au yenye kinga isiyo sahihi.", meets: "Angalau hatari tatu kwenye mashine moja, kila moja ikiwa na kizuizi, PPE au utaratibu sahihi, na wakati gani lockout/tagout inahitajika.", exceeds: "Anaorodhesha hatua za lockout/tagout kwa mpangilio na kutaja vyanzo vya nishati vya mashine." },
      { name: "Daftari la vipimo", objective: "O2", notYet: "Mipaka imekokotolewa vibaya, au maamuzi mawili au zaidi si sahihi.", meets: "Mipaka ni sahihi na angalau vipande 4 kati ya 5 vya mazoezi vimeamuliwa sawasawa.", exceeds: "Vyote 5 ni sahihi, na tabia za upimaji zilizotumika zimeandikwa kando ya daftari." },
      { name: "Kumbukumbu ya kasoro na 5 Whys", objective: "O3", notYet: "Hakuna kutenganisha vipande vibovu, au mnyororo unasimama kwenye dalili.", meets: "Karatasi ya kuhesabu, hatua ya kuwekea vipande vibovu kibandiko na 5 Whys inayoishia kwenye chanzo kinachoweza kurekebishwa.", exceeds: "Anaongeza maelezo ya Plan-Do-Check-Act kuhusu jinsi ya kukagua kuwa suluhisho limefanya kazi." },
      { name: "Mpango wa 5S na ukaguzi wa kila siku", objective: "O4", notYet: "Moja ya S 5 inakosekana, au vitu vya ukaguzi chini ya vitano.", meets: "Kitendo kimoja kwa kila S na angalau vitu vitano vya ukaguzi wa kila siku pamoja na cha kuripoti.", exceeds: "Anataja angalau aina mbili za upotevu wa lean katika eneo hilo na boresho dogo kwa kila moja." },
      { name: "Mpango wa CPT 4.0 na kazi", objective: "O5", notYet: "Moduli zisizo sahihi, hakuna tarehe, au mstari wa wasifu unaodai cheti ambacho hakijapatikana.", meets: "Unataja moduli nne zinazohitajika pamoja na tarehe zinazolengwa za kuthibitisha, programu moja au kituo kimoja cha mtihani, nafasi tatu za kazi na mstari wa wasifu ulio wa kweli.", exceeds: "Unajumuisha jibu la sekunde 30 lililofanyiwa mazoezi na njia mbadala kama uanagenzi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kifurushi cha utayari kinachofikia rubriki",
      "Wanafunzi wanaojiunga na mafunzo ya CPT 4.0 au kufanya moduli ya kwanza ya CPT ndani ya siku 90 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaofaulu moduli moja au zaidi za CPT 4.0 (taarifa yao wenyewe pamoja na cheti cha MSSC)",
      "Wanafunzi wanaoajiriwa katika kazi za uzalishaji au uanagenzi uliosajiliwa (ripoti za washirika na za ufuatiliaji)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa msscusa.org, osha.gov na apprenticeship.gov",
      "Rula au utepe wa kupimia, karatasi na kalamu",
      "Hiari: kalipa ya kidijitali na vipande vichache vidogo (boliti, washa) vya kupima pamoja na mwalimu",
      "Kama dakika 60 kwa jumla"
    ],
    facilitatorNotes: [
      "Sema mapema na mara kwa mara: kozi hii inawaandaa wanafunzi; MSSC ndiyo inayotoa vyeti vya CPT na ujuzi wa mashine unafundishwa ana kwa ana.",
      "Usiwafanyishe wanafunzi kuendesha mashine wala kufanya mazoezi ya lockout/tagout kwenye vifaa vyenye umeme kama sehemu ya kozi hii. Tumia picha, video na vipande vya maonyesho visivyounganishwa na umeme.",
      "Kagua ada za sasa za MSSC, njia za mitihani na vituo vya mtihani vya eneo lako kabla ya kipindi, na ueleze msaada wowote wa kifedha ambao programu yako ya ajira inatoa.",
      "Pitia hesabu za uvumilivu polepole ubaoni; wanafunzi wengi wanahitaji mifano miwili au mitatu iliyotatuliwa.",
      "Waangalie wanafunzi walio chini ya miaka 18: wanaweza kusoma kozi hii, lakini mashine nyingi za kiwandani haziruhusiwi kwao kazini.",
      "Pima kifurushi cha utayari kwa rubriki na upitie mstari mmoja wa Bado kwa wakati."
    ]
  }
};
