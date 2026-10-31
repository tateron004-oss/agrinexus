"use strict";

// Koach Learn course (Swahili translation of shared/ged-reasoning-language-arts.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// The grammar examples stay in English inside quotes: the RLA test is in English and its grammar items test English.

const GED_SUBJECTS = { name: "GED Testing Service: masomo ya mtihani (muda, aina za maswali, insha)", url: "https://ged.com/about_test/test_subjects/" };
const GED_RLA = { name: "GED Testing Service: Reasoning Through Language Arts (kufikiri kupitia lugha)", url: "https://ged.com/about_test/test_subjects/language_arts/" };
const GED_SCORES = { name: "GED Testing Service: alama", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: mitihani ya mfano ya bure (kwa Kiingereza na Kihispania)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, mtihani rasmi wa mazoezi", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, mtihani mwingine unaolingana na shule ya sekondari (tovuti rasmi)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-reasoning-language-arts-sw",
  lang: "sw",
  translationOf: "ged-reasoning-language-arts",
  category: "Workforce Development",
  name: "Maandalizi ya Mtihani wa GED: Kufikiri Kupitia Lugha (Reasoning Through Language Arts)",
  skills: "Kupata wazo kuu na ushahidi, Kufanya makisio, Kurekebisha sarufi na uakifishaji, Kupima hoja na ushahidi, Kuandika insha ndefu (extended response), Kutengeneza mpango wa kujisomea",
  outcome: "kusoma kifungu na kujibu maswali ya aina ya GED kuhusu wazo lake kuu, ushahidi wake na sarufi yake, na kuandika kwa dakika 45 insha ya mazoezi (extended response) inayochagua hoja yenye ushahidi bora na kueleza sababu kwa ushahidi.",
  about: [
    "Kozi hii ni kwa watu wazima wanaojiandaa kwa mtihani wa GED wa Reasoning Through Language Arts (RLA): wanaotafuta kazi, wanaorudi nyumbani kutoka gerezani, maveterani, vijana, wahamiaji na yeyote anayerudi kusoma. Cheti cha GED kinaweza kufungua milango ya kazi, mafunzo na chuo nchini Marekani.",
    "Kozi hii inakuandaa kwa mtihani. Haikupi cheti cha GED. GED Testing Service ndiyo inayoendesha mtihani, na jimbo lako linaweka masharti ya kuufanya. Baadhi ya majimbo yanatumia mtihani mwingine unaoitwa HiSET. Angalia ged.com na ofisi ya elimu ya watu wazima ya jimbo lako kwa masharti, ada na mitihani ya sasa.",
    "Utajifunza jinsi mtihani unavyofanya kazi, kusoma ili kupata wazo kuu na ushahidi, kurekebisha makosa ya kawaida ya sarufi, kupima hoja, na kuandika insha ndefu (extended response). Mtihani wenyewe uko kwa Kiingereza, kwa hiyo mifano ya sarufi iko kwa Kiingereza. Kila somo lina mifano iliyofanyiwa kazi, zoezi la \"Jaribu sasa\" lenye majibu yaliyoelezwa, na jaribio fupi la maswali mawili.",
    "Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi ya mwisho ni insha ya mazoezi unayoiandika kwa dakika 45 na kuipima kwa rubriki."
  ],
  finalTask: "Andika kwa dakika 45 insha ya mazoezi ya GED (extended response) kuhusu vifungu viwili vya maktaba katika Somo la 6. Chagua hoja yenye ushahidi bora, eleza sababu kwa angalau vipande viwili vya ushahidi kutoka kwenye vifungu, na tumia utangulizi, aya za kati na hitimisho. Kisha kagua sarufi na upime insha yako kwa rubriki ya kozi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaojiandaa kwa mtihani wa GED wa Reasoning Through Language Arts: wanaotafuta kazi, wanaorudi nyumbani kutoka gerezani, maveterani, vijana walioacha shule, wahamiaji na watu wazima wanaorudi kusoma baada ya miaka mingi.",
    startingPoint: "Wanaweza kusoma maandishi ya kila siku kama alama, fomu na makala fupi. Wengi hawajaandika insha wala kusoma sarufi kwa miaka, na baadhi wana wasiwasi kuhusu mitihani au bado wanajifunza Kiingereza.",
    gap: "Kazi nyingi, programu za mafunzo na vyuo vinaomba cheti cha shule ya sekondari au cheti kinacholingana nacho. Wanafunzi wanahitaji kusoma kwa makini ili kupata ushahidi, kupima hoja, kutumia sarufi sahihi na kuandika insha kwa muda maalum: ujuzi unaopimwa kwenye mtihani na ambao watautumia pia kazini.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi katika ufundishaji; vifungu vya mazoezi ni vifupi",
      "Vifaa: simu, kompyuta ya maktaba, au karatasi na kalamu",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi, miadi na familia",
      "Masharti ya mtihani, ada na mtihani unaotumiwa na jimbo (GED au HiSET) hubadilika; wanafunzi wanaangalia ged.com na jimbo lao",
      "Baadhi ya wanafunzi wana wasiwasi wa mitihani; mazoezi hayana shinikizo na majibu yanaelezwa"
    ],
    prerequisites: "Hakuna. Wanafunzi wanaosoma chini ya kiwango cha darasa la 6 wanaweza kutaka darasa la kusoma la elimu ya watu wazima wakati huo huo."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia tovuti rasmi ya GED", action: "kuorodhesha sehemu, aina za maswali na muda wa mtihani wa lugha wa GED na kuandika mpango wa kujisomea wenye tarehe", standard: "kila sehemu ya mtihani ikiwa imetajwa na angalau tarehe moja ya kujisomea kila wiki hadi mtihani" },
    { id: "O2", condition: "Ukipewa kifungu kifupi", action: "kutambua wazo kuu, maelezo yanayoliunga mkono na kisio linaloungwa mkono na ushahidi", standard: "ukionyesha sentensi kamili inayothibitisha kila jibu" },
    { id: "O3", condition: "Ukipewa sentensi zenye makosa", action: "kurekebisha makosa ya sarufi, uakifishaji, herufi kubwa na uchaguzi wa maneno", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O4", condition: "Ukipewa hoja fupi", action: "kutambua dai na ushahidi na kupima kila kipande cha ushahidi kama imara au dhaifu", standard: "ukitoa sababu kwa kila kipimo" },
    { id: "O5", condition: "Ukipewa vifungu viwili visivyokubaliana, na saa ya dakika 45", action: "kuandika insha ndefu (extended response) inayochagua hoja yenye ushahidi bora na kueleza sababu kwa ushahidi", standard: "ikiwa na utangulizi, angalau vipande viwili vya ushahidi kutoka kwenye vifungu na hitimisho" }
  ],
  chapters: [
    {
      name: "Sura 1: Kusoma kwa makini na kuandika kwa usahihi",
      lessons: [
        {
          title: "Jinsi mtihani wa lugha wa GED unavyofanya kazi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha sehemu za mtihani wa lugha wa GED na uandike mpango wa kujisomea wenye tarehe.",
          text: [
            "GED ina mitihani minne: Hisabati (Math), Reasoning Through Language Arts (RLA), Sayansi (Science) na Masomo ya Jamii (Social Studies). Unaweza kuifanya mmoja mmoja. GED Testing Service ndiyo inayotunga mtihani. Baadhi ya majimbo yanatumia mtihani mwingine unaolingana na shule ya sekondari, HiSET, kwa hiyo angalia jimbo lako linatumia upi.",
            "Kwenye ged.com, mtihani wa RLA umeorodheshwa kuwa dakika 150 katika sehemu tatu, na mapumziko ya dakika 10 kati ya sehemu ya 2 na ya 3. Unahusu kusoma ili kuelewa maana, kupata na kujenga hoja, na sarufi na lugha. Sehemu moja ni insha ya kuandika, inayoitwa extended response, ya dakika 45.",
            "Maswali mengi ni ya kuchagua jibu (multiple choice). Mengine yanakuomba kuburuta na kuweka (drag and drop), kuchagua eneo la skrini, au kuchagua kutoka orodha inayofunguka (drop-down) ndani ya sentensi. Ged.com inaorodhesha alama ya kufaulu ya 145 kwa kila somo. Muda na masharti yanaweza kubadilika, kwa hiyo angalia ged.com kabla ya kujiandikisha.",
            "Mpango ni bora kuliko kukariri usiku mmoja. Mazoezi mafupi siku nne au tano kwa wiki yanafanya kazi vizuri kuliko usiku mmoja mrefu. Ged.com ina mitihani ya mfano ya bure na mtihani rasmi wa mazoezi, GED Ready, unaoonyesha kama una uwezekano wa kufaulu."
          ],
          steps: ["Nenda ged.com na usome ukurasa wa Reasoning Through Language Arts.", "Andika muda, sehemu na aina za maswali.", "Fanya mtihani wa mfano wa RLA wa bure ili kuona ulipo.", "Chagua wiki unayolenga kufanya mtihani na uhesabu wiki zilizobaki.", "Andika angalau tarehe moja ya kujisomea kila wiki, pamoja na somo au ujuzi wa siku hiyo."],
          words: [["GED", "mtihani wa Marekani unaolingana na shule ya sekondari; kufaulu masomo yote manne kunakupa cheti ambacho waajiri na vyuo vingi vinakubali kama diploma."], ["HiSET", "mtihani mwingine unaolingana na shule ya sekondari ambao baadhi ya majimbo yanautumia."], ["Extended response", "jina la GED la insha unayoandika kwenye mtihani."], ["Drop-down", "orodha inayofunguka unapoibofya, ili uchague jibu moja."], ["Mpango wa kujisomea", "kalenda ya kile utakachofanyia mazoezi na lini."]],
          slides: [
            { title: "Masomo manne ya GED", bullets: ["Hisabati (Math)", "Reasoning Through Language Arts (RLA)", "Sayansi (Science)", "Masomo ya Jamii (Social Studies)"] },
            { title: "Mtihani wa RLA (angalia ged.com)", bullets: ["Dakika 150, sehemu tatu, mapumziko moja ya dakika 10", "Kusoma ili kuelewa, hoja, sarufi", "Insha moja: extended response, dakika 45"] },
            { title: "Aina za maswali", bullets: ["Kuchagua jibu (multiple choice)", "Kuburuta na kuweka (drag and drop)", "Kuchagua eneo la skrini", "Orodha inayofunguka (drop-down)"] },
            { title: "Tengeneza mpango", bullets: ["Fanya kwanza mtihani wa mfano wa bure", "Chagua wiki unayolenga kufanya mtihani", "Jisomee kidogo, siku nyingi za wiki"] }
          ],
          sources: [GED_SUBJECTS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Fungua ged.com na ufanye mtihani wa mfano wa RLA wa bure (au soma ukurasa wa RLA kama huwezi kuufanya sasa). Kisha andika mpango wako wa kujisomea: wiki unayolenga kufanya mtihani, na tarehe moja kila wiki pamoja na ujuzi utakaoufanyia mazoezi (kusoma, sarufi, hoja au insha). Uutunze; utauongezea.",
          youCanNow: "kutaja sehemu za mtihani wa lugha wa GED na kufuata mpango wa kujisomea wenye tarehe.",
          quickCheck: [
            { objective: "O1", q: "Extended response ni nini katika mtihani wa lugha wa GED?", options: ["Orodha ya msamiati", "Mahojiano ya kuzungumza", "Insha unayoandika kwenye mtihani", "Sehemu ya hisabati"], answer: 2, why: "Ged.com inaita insha ya kuandika extended response." },
            { objective: "O1", q: "Mtihani wako uko wiki 8 kutoka sasa. Mpango upi ni bora?", options: ["Jisomee dakika 30 siku nne kila wiki, na ujuzi maalum kwa kila siku", "Jisomee usiku mzima siku moja kabla", "Fanya mtihani bila mazoezi uone kitakachotokea", "Soma vidokezo vya insha tu"], answer: 0, why: "Mazoezi mafupi ya mara kwa mara yenye ujuzi uliopangwa kila siku hujenga ujuzi vizuri kuliko kukariri usiku mmoja." }
          ]
        },
        {
          title: "Wazo kuu, maelezo na makisio",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tambua wazo kuu, maelezo mawili yanayoliunga mkono na kisio kimoja katika kifungu kifupi.",
          text: [
            "Wazo kuu ni kile ambacho kifungu kizima kinahusu zaidi. Maelezo yanayounga mkono ni ukweli, mifano na sababu zinazolithibitisha. Jiulize: \"Kama ningelazimika kusema kifungu hiki kwa sentensi moja, ningesema nini?\"",
            "Mfano uliofanyiwa kazi. Kifungu: \"Maghala mengi sasa yanafanya kazi usiku mzima. Zamu za usiku mara nyingi hulipa zaidi kwa saa. Lakini wafanyakazi wa zamu za usiku wanaripoti shida zaidi ya kulala, na baadhi wanasema ni vigumu zaidi kuona familia zao.\" Wazo kuu: zamu za usiku hulipa zaidi lakini zina gharama kwa wafanyakazi. Maelezo: zinalipa zaidi; wafanyakazi wanaripoti shida ya kulala; muda na familia ni mgumu zaidi.",
            "Kisio ni kubahatisha kwa busara kunakotokana na dalili katika maandishi. Hakijaandikwa neno kwa neno, lakini maandishi yanakiunga mkono. Kutoka kwenye kifungu, unaweza kukisia kwamba mfanyakazi mwenye watoto wadogo anaweza kufikiri mara mbili kabla ya kuchukua zamu ya usiku. Huwezi kukisia kwamba zamu za usiku ni kinyume cha sheria; hakuna kinachosema hivyo.",
            "Kwenye mtihani, daima onyesha sentensi inayothibitisha jibu lako. Kama huwezi kuionyesha, huenda jibu si sahihi."
          ],
          steps: ["Soma swali kwanza, ili ujue unatafuta nini.", "Soma kifungu mara moja hadi mwisho.", "Sema wazo kuu kwa sentensi moja.", "Tafuta maelezo mawili yanayoliunga mkono.", "Kwa kisio, chagua jibu ambalo maandishi yanaliunga mkono, na utafute sentensi inayolithibitisha."],
          words: [["Wazo kuu", "kile ambacho kifungu kinahusu zaidi."], ["Maelezo yanayounga mkono", "ukweli, mfano au sababu inayothibitisha wazo kuu."], ["Kisio (inference)", "hitimisho unalofikia kutokana na dalili katika maandishi."], ["Ushahidi", "maneno katika maandishi yanayothibitisha jibu."]],
          slides: [
            { title: "Wazo kuu", bullets: ["Kile ambacho kifungu kinahusu zaidi", "Lisema kwa sentensi moja"] },
            { title: "Maelezo yanayounga mkono", bullets: ["Ukweli, mifano na sababu", "Yanathibitisha wazo kuu"] },
            { title: "Kisio", bullets: ["Kubahatisha kwa busara kutokana na dalili katika maandishi", "Hakijaandikwa neno kwa neno", "Lazima kiungwe mkono na maandishi"] },
            { title: "Thibitisha", bullets: ["Onyesha sentensi inayothibitisha jibu lako", "Hakuna sentensi ya kuonyesha? Chagua tena"] }
          ],
          tryIt: "Kifungu cha mazoezi: \"Jiji lilifungua vituo vitatu vipya vya kupoza joto msimu huu wa joto. Siku zenye joto zaidi ya nyuzi 100 (Fahrenheit), vilibaki wazi hadi saa 4 usiku (10 pm). Watu waliotembelea zaidi walikuwa wazee na watu wasio na kiyoyozi.\" 1) Wazo kuu? 2) Maelezo mawili? 3) Kisio kipi kinaungwa mkono: (a) jiji linataka kuwalinda watu dhidi ya joto, au (b) vituo vinagharimu sana? Majibu: 1) Jiji lilifungua vituo vya kupoza joto kusaidia watu wakati wa joto kali. 2) Viko wazi hadi saa 4 usiku (10 pm) siku za joto kali; wageni wengi walikuwa wazee na watu wasio na kiyoyozi. 3) (a). Hakuna kitu katika kifungu kinachozungumzia gharama.",
          youCanNow: "kupata wazo kuu, maelezo na kisio kinachoungwa mkono, na kuonyesha uthibitisho.",
          quickCheck: [
            { objective: "O2", q: "Kifungu kinasema duka la mikate liliongeza zamu ya jioni, likaajiri watu watano na likauza mikate 30% zaidi. Wazo kuu ni lipi?", options: ["Mkate ni chakula bora", "Kuongeza zamu ya jioni kulisaidia duka la mikate kukua", "Watu watano waliajiriwa", "Maduka ya mikate hufunga usiku"], answer: 1, why: "Kifungu kizima kinahusu zamu ya jioni kusaidia duka; walioajiriwa na mauzo ni maelezo." },
            { objective: "O2", q: "Kipi ni kisio, si maelezo yaliyoandikwa katika maandishi?", options: ["Ukweli ulionakiliwa neno kwa neno kutoka kwenye kifungu", "Kichwa cha kifungu", "Idadi ya aya", "Hitimisho unalofikia kutokana na dalili ambazo maandishi yanatoa"], answer: 3, why: "Kisio ni hitimisho linaloungwa mkono na dalili, si ukweli uliosemwa moja kwa moja." }
          ]
        },
        {
          title: "Kurekebisha sarufi na uakifishaji",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rekebisha aina tano za kawaida za makosa ya sarufi na uakifishaji katika sentensi.",
          text: [
            "Maswali mengi ya RLA yanaonyesha sentensi yenye chaguo la drop-down na kuuliza toleo lipi ni sahihi. Makosa machache hujitokeza tena na tena. Yajifunze na utapata alama nyingi. Mifano iko kwa Kiingereza ndani ya alama za kunukuu, kwa sababu sehemu hii ya mtihani inapima sarufi ya Kiingereza.",
            "1) Kiima na kitenzi vinapatana: \"The list of jobs is long\" (kiima ni list, si jobs). 2) Sentensi kamili: \"Because the bus was late.\" ni kipande cha sentensi; kirekebishe: \"I was late because the bus was late.\" 3) Sentensi zilizoungana vibaya: \"I applied I got the job\" inahitaji nukta, nukta-mkato au neno la kuunganisha: \"I applied, and I got the job.\"",
            "4) Maneno yanayosikika sawa: their (yao), there (pale), they're (they are, wao ni); its (yake, kwa kitu), it's (it is, ni); your (yako), you're (you are, wewe ni). 5) Herufi kubwa na apostrofi: kwa Kiingereza, majina ya watu, mahali na siku huanza na herufi kubwa (Monday, Texas); apostrofi inaonyesha umiliki (the manager's office) au herufi iliyokosekana (don't), si wingi (two shifts, si two shift's).",
            "Maneno ya mpito huunganisha mawazo: however (lakini), therefore (kwa hiyo), for example (kwa mfano), in addition (zaidi ya hayo). Chagua linalofaa maana kati ya sentensi mbili."
          ],
          steps: ["Soma sentensi nzima, si sehemu iliyopigiwa mstari tu.", "Tafuta kiima na kitenzi, na uhakikishe vinapatana.", "Hakikisha ni sentensi kamili na si sentensi mbili zilizoungana vibaya.", "Kagua maneno yanayosikika sawa, herufi kubwa na apostrofi.", "Soma chaguo ulilochagua ndani ya sentensi ili uhakikishe linasikika sawa."],
          words: [["Kiima", "nani au nini sentensi inamhusu."], ["Kitenzi", "neno la kitendo au hali, kama runs au is."], ["Kipande cha sentensi (fragment)", "sehemu ya sentensi isiyoweza kusimama peke yake."], ["Sentensi zilizoungana vibaya (run-on)", "sentensi mbili zilizounganishwa bila uakifishaji sahihi."], ["Neno la mpito", "neno linalounganisha mawazo mawili, kama however au therefore."]],
          slides: [
            { title: "Makosa matano ya kutafuta", bullets: ["Kiima na kitenzi visivyopatana", "Vipande vya sentensi na sentensi zilizoungana vibaya", "Maneno yanayosikika sawa", "Herufi kubwa na apostrofi"] },
            { title: "Maneno yanayosikika sawa", bullets: ["their / there / they're", "its / it's", "your / you're"] },
            { title: "Apostrofi", bullets: ["Umiliki: the manager's office", "Herufi iliyokosekana: don't, it's", "Kamwe si kwa wingi wa kawaida: two shifts"] },
            { title: "Maneno ya mpito", bullets: ["however = lakini", "therefore = kwa hiyo", "for example (kwa mfano), in addition (zaidi ya hayo)"] }
          ],
          tryIt: "Rekebisha kila sentensi. 1) \"The box of gloves are on the shelf.\" 2) \"Their going to the job fair on friday.\" 3) \"I finished my shift I went home.\" 4) \"The company changed it's hours.\" 5) \"Because I wanted to learn.\" Majibu: 1) \"is\" (kiima ni box). 2) \"They're going to the job fair on Friday.\" 3) \"I finished my shift, and I went home.\" 4) \"its\" (umiliki). 5) Ongeza wazo kuu: \"I signed up for class because I wanted to learn.\"",
          youCanNow: "kutambua na kurekebisha makosa ya kawaida zaidi ya sarufi na uakifishaji kwenye mtihani.",
          quickCheck: [
            { objective: "O3", q: "Sentensi ipi ni sahihi?", options: ["The team of nurses are ready.", "The team of nurses were ready.", "The team of nurses is ready.", "The team of nurses be ready."], answer: 2, why: "Kiima ni team (kikundi kimoja), kwa hiyo kitenzi ni is." },
            { objective: "O3", q: "Neno lipi linafaa: \"___ going to start training on Monday.\"", options: ["There", "They're", "Their", "Thier"], answer: 1, why: "They're maana yake they are: wao wataanza mafunzo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kusoma kwa makini na kuandika kwa usahihi",
        questions: [
          { objective: "O1", q: "Kwa mujibu wa ged.com, ni aina gani za maswali ziko kwenye mtihani wa lugha wa GED?", options: ["Kweli au si kweli tu", "Majibu ya kuzungumza tu", "Insha tu", "Kuchagua jibu, kuburuta na kuweka, kuchagua eneo, drop-down na insha moja"], answer: 3, why: "Ged.com inaorodhesha aina hizi za maswali pamoja na extended response moja." },
          { objective: "O2", q: "Kifungu kinasema kliniki iliongeza saa za Jumamosi, na ziara za wazazi wanaofanya kazi ziliongezeka mara mbili. Kisio kipi kinaungwa mkono?", options: ["Wazazi wengi wanaofanya kazi hawakuweza kuja siku za kazi", "Kliniki itafungwa hivi karibuni", "Jumamosi ni sikukuu", "Madaktari hawapendi Jumamosi"], answer: 0, why: "Wazazi wengi zaidi walikuja Jumamosi ilipofunguliwa, jambo linaloonyesha kwamba siku za kazi zilikuwa ngumu kwao." },
          { objective: "O2", q: "Unahakikishaje kwamba jibu lako kuhusu kifungu ni sahihi?", options: ["Chagua jibu refu zaidi", "Onyesha sentensi katika kifungu inayolithibitisha", "Chagua jibu unalolipenda zaidi", "Chagua C kila mara"], answer: 1, why: "Jibu sahihi linaungwa mkono na maneno katika maandishi." },
          { objective: "O3", q: "Sentensi ipi ni sahihi?", options: ["The store changed it's hours.", "The store changed its hours.", "The store changed its' hours.", "The store changed it is hours."], answer: 1, why: "Its bila apostrofi maana yake ni ya kitu hicho (umiliki)." },
          { objective: "O3", q: "\"I passed the test I was so happy.\" Tatizo ni nini?", options: ["Ni sentensi zilizoungana vibaya; inahitaji nukta au neno la kuunganisha", "Neno moja limeandikwa vibaya", "Inahitaji herufi kubwa kwenye test", "Hakuna tatizo"], answer: 0, why: "Sentensi mbili kamili zimeunganishwa bila kitu chochote kati yake." }
        ]
      }
    },
    {
      name: "Sura 2: Hoja na insha ndefu (extended response)",
      lessons: [
        {
          title: "Madai, ushahidi na sababu imara",
          objectives: ["O4"],
          minutes: 5,
          goal: "Tambua dai na ushahidi katika hoja na upime kila kipande cha ushahidi kama imara au dhaifu.",
          text: [
            "Hoja inajaribu kukushawishi. Dai ni kile mwandishi anataka uamini. Ushahidi ni kile anachotumia kulithibitisha.",
            "Ushahidi imara ni mahususi na unaweza kukaguliwa: namba kutoka kwa utafiti au rekodi, ukweli, au mtaalamu wa fani hiyo. Ushahidi dhaifu ni hisia, hadithi ya mtu mmoja inayotumiwa kuwakilisha kila mtu, mtu maarufu asiye mtaalamu, au dai lisilo na uthibitisho.",
            "Mfano uliofanyiwa kazi. Dai: \"Mji wetu unapaswa kuongeza njia ya basi kwenda eneo la viwanda.\" Ushahidi A: \"Utafiti wa kaunti wa wafanyakazi 600 uligundua 1 kati ya 4 hukosa zamu kwa sababu ya usafiri.\" Imara: namba kutoka kwa utafiti. Ushahidi B: \"Binamu yangu anasema basi lingekuwa zuri.\" Dhaifu: maoni ya mtu mmoja.",
            "Pia jihadhari na hila: maneno kama \"kila mtu anajua\", kumshambulia mtu badala ya wazo lake, na kutoa machaguo mawili tu wakati yapo zaidi."
          ],
          steps: ["Tafuta dai: mwandishi anataka uamini nini?", "Pigia mstari kila kipande cha ushahidi.", "Jiulize: ni mahususi, na ningeweza kuukagua?", "Upime kuwa imara au dhaifu, na uandike sababu moja."],
          words: [["Hoja", "maandishi yanayojaribu kukushawishi kuhusu jambo fulani."], ["Dai", "jambo kuu ambalo mwandishi anataka uamini."], ["Ushahidi imara", "ukweli au namba mahususi unazoweza kukagua, au mtaalamu wa fani hiyo."], ["Ushahidi dhaifu", "hisia, hadithi moja, au madai yasiyo na uthibitisho."]],
          slides: [
            { title: "Sehemu za hoja", bullets: ["Dai: kile mwandishi anataka uamini", "Ushahidi: kile anachotumia kulithibitisha"] },
            { title: "Ushahidi imara", bullets: ["Namba kutoka kwa utafiti au rekodi", "Ukweli unaoweza kukagua", "Mtaalamu wa fani hiyo"] },
            { title: "Ushahidi dhaifu", bullets: ["Hisia au \"kila mtu anajua\"", "Hadithi ya mtu mmoja", "Mtu maarufu asiye mtaalamu"] },
            { title: "Jihadhari na hila", bullets: ["Kumshambulia mtu, si wazo", "Machaguo mawili tu wakati yapo zaidi"] }
          ],
          tryIt: "Hoja ya mazoezi: \"Jiji linapaswa kupanda miti zaidi katikati ya mji. Utafiti wa jiji ulipima mitaa yenye miti kuwa baridi kwa takriban nyuzi 10 (Fahrenheit) wakati wa joto. Mwimbaji wa hapa alisema miti inapendeza. Yeyote asiyekubali anachukia mazingira tu.\" Tafuta dai na upime kila kipande cha uungaji mkono. Majibu: Dai: panda miti zaidi katikati ya mji. Utafiti wa jiji: imara (namba iliyopimwa kutoka kwa utafiti). Mwimbaji: dhaifu (si mtaalamu; ni maoni tu). \"Yeyote asiyekubali anachukia mazingira\": dhaifu (inashambulia watu badala ya kutoa uthibitisho).",
          youCanNow: "kupata dai, kutenganisha ushahidi imara na dhaifu, na kusema kwa nini.",
          quickCheck: [
            { objective: "O4", q: "Ushahidi upi ni imara zaidi kwamba programu ya mafunzo ya kazi inafanya kazi?", options: ["Mkurugenzi anasema ni nzuri sana", "Mtu maarufu anaipenda", "Rekodi zinaonyesha 70% ya waliohitimu walipata kazi ndani ya miezi sita", "Kila mtu anajua inafanya kazi"], answer: 2, why: "Ni namba mahususi kutoka kwa rekodi inayoweza kukaguliwa." },
            { objective: "O4", q: "\"Jirani yangu aliugua baada ya kula pale, kwa hiyo mgahawa si salama.\" Huu ni ushahidi wa aina gani?", options: ["Ushahidi wa mtaalamu", "Utafiti", "Takwimu rasmi", "Dhaifu: hadithi ya mtu mmoja"], answer: 3, why: "Hadithi moja haithibitishi jambo kuhusu kila mlo unaopikwa pale." }
          ]
        },
        {
          title: "Kulinganisha hoja mbili na kupanga insha yako",
          objectives: ["O4", "O5"],
          minutes: 5,
          goal: "Linganisha hoja mbili na uandike mpango mfupi wa insha ndefu (extended response).",
          text: [
            "Kwenye mtihani unasoma vifungu viwili vinavyochukua pande tofauti. Ged.com inasema unavichambua, unaamua hoja ipi ina ushahidi wenye kushawishi zaidi, na unaeleza kwa nini. Huulizwi unakubaliana na upande upi; unapima ushahidi.",
            "Tumia jedwali rahisi. Kwa kila kifungu, andika dai, ushahidi, na alama ya imara au dhaifu. Kifungu chenye ushahidi imara zaidi kwa kawaida ndicho chaguo lako, hata kama wewe binafsi unaamini upande mwingine.",
            "Tumia takriban dakika 10 kupanga. Mpango wako: 1) tasnifu yako (thesis), sentensi moja inayosema hoja ipi inaungwa mkono vizuri zaidi; 2) vipande viwili au vitatu vya ushahidi kutoka kifungu hicho na kwa nini ni imara; 3) udhaifu mmoja katika kifungu kingine.",
            "Vifungu vya mazoezi viko katika Somo la 6. Leo, fanya mazoezi ya jedwali kwa makala mbili fupi za maoni zisizokubaliana, kama barua mbili kwa mhariri."
          ],
          steps: ["Soma vifungu vyote viwili na upate dai la kila kimoja.", "Tengeneza jedwali la safu mbili: ushahidi katika kila kifungu.", "Weka alama kwa kila kipande cha ushahidi: imara au dhaifu.", "Andika sentensi moja ya tasnifu: hoja ipi inaungwa mkono vizuri zaidi.", "Orodhesha ushahidi utakaotumia katika kila aya ya kati."],
          words: [["Tasnifu (thesis)", "sentensi moja inayotaja jambo lako kuu; katika insha ya GED, hoja ipi inaungwa mkono vizuri zaidi."], ["Kuchambua", "kuangalia sehemu kwa makini ili kuona jinsi zinavyofanya kazi."], ["Aya ya kati", "aya ya katikati inayotoa sababu moja pamoja na ushahidi."]],
          slides: [
            { title: "Insha inauliza nini", bullets: ["Soma vifungu viwili visivyokubaliana", "Amua kipi kina ushahidi wenye kushawishi zaidi", "Eleza kwa nini; si upande unaoupenda"] },
            { title: "Tengeneza jedwali", bullets: ["Dai la kila kifungu", "Ushahidi wake", "Imara au dhaifu?"] },
            { title: "Panga kwa takriban dakika 10", bullets: ["Tasnifu: hoja ipi inaungwa mkono vizuri zaidi", "Vipande 2 au 3 vya ushahidi na kwa nini ni imara", "Udhaifu mmoja katika kifungu kingine"] }
          ],
          sources: [GED_RLA],
          tryIt: "Mazoezi: Kifungu 1 kinasema wiki ya kazi ya siku nne ni nzuri na kinataja rekodi ya kampuni: siku za ugonjwa zilishuka kutoka 6 hadi 4 kwa kila mfanyakazi kwa mwaka mmoja. Kifungu 2 kinasema ni mbaya kwa sababu \"wafanyakazi watakuwa wavivu\" na meneja \"ana hisia\" kwamba uzalishaji utashuka. Andika tasnifu. Jibu: \"Kifungu 1 kinaungwa mkono vizuri zaidi kwa sababu kinatumia rekodi za kampuni kuhusu siku za ugonjwa, wakati Kifungu 2 kinategemea hisia bila takwimu.\"",
          youCanNow: "kulinganisha hoja mbili kwa jedwali na kuandika tasnifu na mpango wa insha yako.",
          quickCheck: [
            { objective: "O5", q: "Insha ndefu ya GED (extended response) inakuomba ufanye nini?", options: ["Kuandika kuhusu hadithi ya maisha yako", "Kuamua hoja ipi ina ushahidi wenye kushawishi zaidi na kueleza kwa nini", "Kufupisha riwaya", "Kuandika shairi"], answer: 1, why: "Ged.com inasema unachambua vifungu viwili na kueleza hoja ipi ina ushahidi bora." },
            { objective: "O4", q: "Unakubaliana na Kifungu B, lakini Kifungu A kina ushahidi imara zaidi. Tasnifu yako ichague kipi?", options: ["Kifungu A, kwa sababu kinaungwa mkono vizuri zaidi", "Kifungu B, kwa sababu unakubaliana nacho", "Hakuna hata kimoja", "Vyote kwa usawa"], answer: 0, why: "Insha inapima ushahidi, si maoni yako kuhusu mada." }
          ]
        },
        {
          title: "Kuandika insha ndefu (extended response) kwa dakika 45",
          objectives: ["O5"],
          minutes: 6,
          goal: "Andika insha ndefu kwa muda maalum inayochagua hoja yenye ushahidi bora na kueleza sababu kwa ushahidi.",
          text: [
            "Tumia muundo rahisi. Utangulizi (sentensi 2 hadi 3): taja mada na utoe tasnifu yako. Aya za kati (mbili au tatu): kila moja inatoa sababu moja, inanukuu au kueleza ushahidi kutoka kwenye kifungu, na inaeleza kwa nini ni imara au dhaifu. Hitimisho (sentensi 2): rudia tasnifu yako kwa maneno mapya. Kwenye mtihani, insha inaandikwa kwa Kiingereza.",
            "Vifungu vya mazoezi (vimetungwa kwa ajili ya kozi hii). Kifungu A, cha mkutubi wa jiji: \"Acheni maktaba kuu iwe wazi hadi saa 3 usiku (9 pm). Katika majaribio ya miezi mitatu, kihesabu cha mlangoni kilirekodi takriban ziara 340 baada ya saa 12 jioni (6 pm) kila wiki. Rekodi ya kompyuta zetu inaonyesha kwamba 6 kati ya 10 ya vipindi vya kutafuta kazi vilifanyika baada ya saa 12 jioni (6 pm). Saa za ziada zinagharimu chini ya 1% ya bajeti yetu.\" Kifungu B, cha mjumbe wa baraza la jiji: \"Fungeni saa 12 jioni (6 pm). Nilipita pale jioni moja na ilionekana tupu. Watu wanaweza kutumia simu zao tu. Ni upotevu wa pesa.\"",
            "Mpango wa muda: takriban dakika 10 kusoma na kupanga, dakika 30 kuandika, dakika 5 kukagua makosa. Tumia maneno ya mpito (first, in addition, however, therefore). Andika kwa sentensi kamili na kwa maneno yako mwenyewe, na unukuu vipande vifupi vya vifungu kama ushahidi.",
            "Kagua makosa ya Somo la 3: kiima na kitenzi, sentensi zilizoungana vibaya, maneno yanayosikika sawa, herufi kubwa na apostrofi."
          ],
          steps: ["Weka saa ya dakika 45.", "Soma vifungu vyote viwili na ujaze jedwali lako la imara-au-dhaifu (takriban dakika 10).", "Andika utangulizi pamoja na tasnifu yako.", "Andika aya mbili au tatu za kati, kila moja na ushahidi na kwa nini ni imara au dhaifu.", "Andika hitimisho fupi.", "Kagua makosa katika dakika 5 za mwisho."],
          words: [["Utangulizi", "aya ya kwanza; inataja mada na kutoa tasnifu yako."], ["Hitimisho", "aya ya mwisho; inarudia jambo lako kuu."], ["Kunukuu", "kunakili maneno machache kamili kutoka kwenye kifungu, ndani ya alama za kunukuu."], ["Kukagua makosa", "kusoma maandishi yako tena ili kupata na kurekebisha makosa."]],
          slides: [
            { title: "Muundo wa insha", bullets: ["Utangulizi pamoja na tasnifu yako", "Aya mbili au tatu za kati zenye ushahidi", "Hitimisho fupi"] },
            { title: "Kila aya ya kati", bullets: ["Sababu moja", "Ushahidi kutoka kwenye kifungu", "Kwa nini ni imara, au kwa nini upande mwingine ni dhaifu"] },
            { title: "Mpango wa muda wa dakika 45", bullets: ["Takriban dakika 10: soma na upange", "Takriban dakika 30: andika", "Takriban dakika 5: kagua makosa"] }
          ],
          tryIt: "Kazi ya mwisho: weka saa ya dakika 45 na uandike insha yako ndefu kuhusu vifungu vya maktaba hapo juu. Kisha kagua makosa na uipime kwa rubriki. Tasnifu ya mfano: \"Kifungu A kinaungwa mkono vizuri zaidi kwa sababu kinatumia hesabu za ziara na rekodi za kompyuta za maktaba yenyewe, wakati Kifungu B kinategemea kuangalia jioni moja na maoni.\" Ushahidi imara wa kutumia: takriban ziara 340 baada ya saa 12 jioni (6 pm) kila wiki; 6 kati ya 10 ya vipindi vya kutafuta kazi baada ya saa 12 jioni (6 pm); gharama chini ya 1% ya bajeti. Udhaifu katika B: ziara moja, hakuna namba.",
          youCanNow: "kuandika insha ndefu kamili kwa muda maalum inayopima hoja mbili kwa ushahidi wake.",
          quickCheck: [
            { objective: "O5", q: "Nini kinapaswa kuwa katika utangulizi wako?", options: ["Orodha ya kanuni za sarufi", "Kila kipande cha ushahidi", "Mada na tasnifu yako", "Jina na anwani yako"], answer: 2, why: "Utangulizi unataja mada na kusema hoja ipi inaungwa mkono vizuri zaidi." },
            { objective: "O5", q: "Katika vifungu vya maktaba, ushahidi upi ni imara zaidi?", options: ["\"Ilionekana tupu\" jioni moja", "\"Watu wanaweza kutumia simu zao tu\"", "\"Ni upotevu wa pesa\"", "Kihesabu cha mlangoni kilirekodi takriban ziara 340 baada ya saa 12 jioni (6 pm) kila wiki"], answer: 3, why: "Ni namba mahususi kutoka kwa rekodi inayoweza kukaguliwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Hoja na insha ndefu (extended response)",
        questions: [
          { objective: "O4", q: "Dai katika hoja ni nini?", options: ["Jambo kuu ambalo mwandishi anataka uamini", "Kichwa", "Sentensi ndefu zaidi", "Kosa la sarufi"], answer: 0, why: "Dai ni kile mwandishi anachojaribu kukushawishi." },
          { objective: "O4", q: "\"Watu wanaotaka saa ndefu za maktaba ni wavivu tu.\" Kuna kosa gani katika uungaji mkono huu?", options: ["Unatumia namba nyingi mno", "Unanukuu mtaalamu", "Unashambulia watu badala ya kutoa uthibitisho", "Hakuna; ni ushahidi imara"], answer: 2, why: "Kuwashambulia watu wasiokubali si ushahidi kuhusu wazo lenyewe." },
          { objective: "O5", q: "Katika insha ya dakika 45, unapaswa kutumia takriban muda gani kusoma na kupanga?", options: ["Dakika 0", "Takriban dakika 40", "Takriban dakika 2", "Takriban dakika 10"], answer: 3, why: "Takriban dakika 10 za kupanga zinaacha takriban 30 za kuandika na 5 za kukagua makosa." },
          { objective: "O5", q: "Aya imara ya kati ina nini?", options: ["Sababu moja, ushahidi kutoka kwenye kifungu na kwa nini ni imara", "Maoni yako tu", "Mada mpya", "Orodha ya maneno bila sentensi"], answer: 0, why: "Kila aya ya kati inaunganisha sababu moja na ushahidi na kuueleza." },
          { objective: "O1", q: "Unapaswa kuangalia wapi masharti, muda na ada za sasa za mtihani wa GED?", options: ["Kumbukumbu ya rafiki", "Chapisho la mitandao ya kijamii", "Ged.com na ofisi ya elimu ya watu wazima ya jimbo lako", "Kitabu cha zamani"], answer: 2, why: "Masharti na ada hubadilika; tovuti rasmi na jimbo lako zina yale ya sasa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Mtihani wa GED: Kufikiri Kupitia Lugha",
    questions: [
      { objective: "O1", q: "Kozi hii inakuandaa kwa mtihani gani?", options: ["Mtihani wa GED wa Reasoning Through Language Arts", "Mtihani wa leseni ya udereva", "Mtihani wa kuchapa", "Mahojiano ya uraia"], answer: 0, why: "Kozi inakuandaa kwa mtihani wa GED RLA; haitoi cheti." },
      { objective: "O1", q: "Ni mtihani gani mwingine unaolingana na shule ya sekondari ambao baadhi ya majimbo yanautumia?", options: ["SAT", "HiSET", "CDL", "ESL"], answer: 1, why: "HiSET ni mtihani mwingine unaolingana na shule ya sekondari unaotumiwa katika baadhi ya majimbo." },
      { objective: "O1", q: "Hatua bora ya kwanza ya mpango wa kujisomea ni ipi?", options: ["Jiandikishe kwa mtihani wa kesho", "Ruka sehemu ngumu", "Fanya mtihani wa mfano wa bure ili uone ulipo", "Jisomee usiku wa kabla tu"], answer: 2, why: "Mtihani wa mfano unaonyesha ujuzi upi unahitaji mazoezi zaidi." },
      { objective: "O1", q: "Kwa mujibu wa ged.com, sehemu ya insha ya mtihani wa RLA ni ya muda gani?", options: ["Dakika 10", "Saa 2", "Hakuna insha", "Dakika 45"], answer: 3, why: "Ged.com inaorodhesha dakika 45 kwa extended response." },
      { objective: "O2", q: "Wazo kuu la kifungu ni:", options: ["Neno la kwanza", "Kile ambacho kifungu kinahusu zaidi", "Neno gumu zaidi", "Sentensi ya mwisho tu"], answer: 1, why: "Wazo kuu ni kifungu kikisemwa kwa sentensi moja." },
      { objective: "O2", q: "Kifungu kinasema kiwanda kiliongeza mafunzo ya usalama na majeraha yakapungua kwa nusu. Maelezo yapi yanaunga mkono \"mafunzo yaliboresha usalama wa kiwanda\"?", options: ["Majeraha yalipungua kwa nusu", "Kiwanda ni kikubwa", "Mafunzo yalikuwa Jumatatu", "Kiwanda kinatengeneza viti"], answer: 0, why: "Kupungua kwa majeraha ndio ushahidi kwamba usalama uliboreka." },
      { objective: "O2", q: "Kisio kipi kinaungwa mkono na: \"Foleni katika benki ya chakula ziliongezeka mara mbili baada ya kiwanda kufungwa\"?", options: ["Benki ya chakula inafungwa", "Bei za chakula zilishuka", "Watu wengi waliopoteza kazi walihitaji msaada wa chakula", "Kiwanda kilifunguliwa tena"], answer: 2, why: "Wakati wa kufungwa kwa kiwanda na foleni ndefu zaidi unaunga mkono hitimisho hili." },
      { objective: "O3", q: "Sentensi ipi ni sahihi?", options: ["The list of tasks are on the board.", "The list of tasks is on the board.", "The list of tasks were on the board.", "The list of tasks be on the board."], answer: 1, why: "Kiima ni list (orodha moja), kwa hiyo kitenzi ni is." },
      { objective: "O3", q: "Sentensi ipi inatumia herufi kubwa kwa usahihi?", options: ["I start work on monday in ohio.", "I Start Work on Monday in Ohio.", "i start work on Monday in ohio.", "I start work on Monday in Ohio."], answer: 3, why: "Siku na mahali huanza na herufi kubwa; maneno mengine hayaanzi hivyo." },
      { objective: "O3", q: "Kipi ni kipande cha sentensi (fragment)?", options: ["I got the job.", "Because the shift ended late.", "She called the manager.", "We passed."], answer: 1, why: "Hakiwezi kusimama peke yake; kinahitaji wazo kuu, kama \"I was tired because the shift ended late.\"" },
      { objective: "O3", q: "Chagua neno sahihi: \"___ a good day to apply.\"", options: ["Its", "Its'", "It's", "It"], answer: 2, why: "It's maana yake it is: ni siku nzuri ya kuomba kazi." },
      { objective: "O4", q: "Upi ni ushahidi imara?", options: ["Ripoti ya jimbo inayoonyesha kazi mpya 2,000 za uuguzi mwaka jana", "\"Najua tu\"", "Maoni ya nyota wa filamu kuhusu uuguzi", "\"Kila mtu anasema hivyo\""], answer: 0, why: "Namba mahususi kutoka kwa ripoti rasmi zinaweza kukaguliwa." },
      { objective: "O4", q: "\"Ama tukate njia zote za basi au jiji lifilisike.\" Hila ni ipi?", options: ["Inatumia utafiti", "Inanukuu mtaalamu", "Ni ukweli", "Inatoa machaguo mawili tu wakati yapo zaidi"], answer: 3, why: "Kuna njia nyingine, kama kukata baadhi ya njia au kutafuta pesa mpya." },
      { objective: "O4", q: "Kwa nini hadithi ya mtu mmoja ni ushahidi dhaifu kwa dai kubwa?", options: ["Hadithi daima ni za uongo", "Tukio moja huenda lisiwe kweli kwa watu wengi", "Hadithi ni ndefu mno", "Ni kinyume cha kanuni"], answer: 1, why: "Mfano mmoja hauonyeshi kilicho kweli kwa ujumla." },
      { objective: "O4", q: "Ili kupima hoja, kwanza unatafuta:", options: ["Neno refu zaidi", "Umri wa mwandishi", "Dai na ushahidi wake", "Makosa ya sarufi"], answer: 2, why: "Unapima hoja kwa jinsi ushahidi wake unavyounga mkono dai lake." },
      { objective: "O5", q: "Katika insha ya GED, tasnifu yako inapaswa kusema:", options: ["Hoja ipi inaungwa mkono vizuri zaidi", "Rangi unayoipenda", "Mwandishi unayempenda", "Kwamba vyote ni kamili"], answer: 0, why: "Kazi ni kuamua hoja ipi ina ushahidi wenye kushawishi zaidi." },
      { objective: "O5", q: "Njia nzuri ya kutumia ushahidi katika insha yako ni ipi?", options: ["Nakili vifungu vizima", "Tunga namba", "Acha ushahidi nje", "Nukuu kipande kifupi na ueleze kwa nini ni imara"], answer: 3, why: "Nukuu fupi pamoja na maelezo yako zinaonyesha kwamba ulichambua ushahidi." },
      { objective: "O5", q: "Unafanya nini katika dakika chache za mwisho za insha?", options: ["Anza insha mpya", "Kagua makosa ya sarufi na uakifishaji", "Futa tasnifu yako", "Toka chumbani"], answer: 1, why: "Kukagua makosa kunapata makosa yanayopunguza alama." },
      { objective: "O5", q: "Hitimisho lipi ni bora?", options: ["\"Mwisho.\"", "\"Ninapenda maktaba.\"", "\"Kwa sababu Kifungu A kinatumia rekodi na hesabu, na Kifungu B kinatumia maoni tu, Kifungu A kinaungwa mkono vizuri zaidi.\"", "\"Watu wengine wanakubali na wengine hawakubali.\""], answer: 2, why: "Linarudia tasnifu na sababu kuu kwa maneno mapya." },
      { objective: "O2", q: "Usipokuwa na uhakika wa jibu kuhusu kifungu, unapaswa:", options: ["Kurudi nyuma kutafuta sentensi inayothibitisha jibu", "Kuchagua chaguo fupi zaidi", "Kuruka kusoma na kubahatisha", "Kuchagua jibu lenye maneno magumu zaidi"], answer: 0, why: "Jibu sahihi linaungwa mkono na maandishi, kwa hiyo rudi utafute uthibitisho." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [2, 3, 4, 6, 7, 10, 11, 13, 15, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, fanyia mazoezi sehemu hiyo na uandike insha mpya kuhusu jozi mpya ya vifungu.",
    criteria: [
      { name: "Tasnifu iliyo wazi", objective: "O5", notYet: "Hakuna tasnifu, au inasema mwandishi anakubaliana na upande upi badala ya upi unaoungwa mkono vizuri zaidi.", meets: "Utangulizi una sentensi moja inayosema hoja ipi inaungwa mkono vizuri zaidi.", exceeds: "Tasnifu pia inataja sababu kuu, kama rekodi dhidi ya maoni." },
      { name: "Ushahidi kutoka kwenye vifungu", objective: "O4", notYet: "Hakuna ushahidi kutoka kwenye vifungu, au ushahidi umetungwa.", meets: "Angalau vipande viwili vya ushahidi kutoka kwenye vifungu, kila kimoja kimeelezwa kuwa imara au dhaifu.", exceeds: "Pia anaonyesha hila au udhaifu katika kifungu kingine na kuueleza." },
      { name: "Mpangilio", objective: "O5", notYet: "Kipande kimoja cha maandishi, au mawazo yanaruka huku na huko.", meets: "Utangulizi, angalau aya mbili za kati na hitimisho, pamoja na maneno ya mpito.", exceeds: "Kila aya ya kati inaanza na sentensi kuu iliyo wazi inayorudi kwenye tasnifu." },
      { name: "Sarufi na uakifishaji", objective: "O3", notYet: "Makosa mengi yanafanya iwe vigumu kusoma.", meets: "Makosa machache madogo, lakini maana iko wazi daima.", exceeds: "Karibu hakuna makosa; maneno yanayosikika sawa, herufi kubwa na apostrofi zote ni sahihi." },
      { name: "Usahihi wa kusoma", objective: "O2", notYet: "Anakosea wazo kuu la kifungu.", meets: "Anaeleza wazo kuu la kila kifungu kwa usahihi.", exceeds: "Anatumia nukuu fupi kamili zinazolingana na kile vifungu vinasema." },
      { name: "Mpango na muda", objective: "O1", notYet: "Hakumaliza kwa dakika 45 na hana mpango wa kujisomea.", meets: "Alimaliza kwa dakika 45 na mpango wa kujisomea una tarehe hadi wiki ya mtihani.", exceeds: "Pia alijiandikisha kwa mtihani wa mazoezi wa GED Ready au tarehe halisi ya mtihani kwenye ged.com." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au zaidi katika kila mstari wa rubriki",
      "Wanafunzi wanaofanya GED Ready au mtihani wa mfano wa bure wa ged.com ndani ya siku 30",
      "Wanafunzi wanaojiandikisha au kufaulu mtihani wa lugha wa GED ndani ya siku 90 (wanavyoripoti wenyewe)",
      "Programu washirika zinaripoti wanafunzi wengi zaidi wanaoendelea na mafunzo ya kazi au madarasa ya chuo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, tableti au kompyuta yenye intaneti, au masomo yaliyochapishwa",
      "Karatasi na kalamu kwa majedwali, majibu ya mazoezi na insha",
      "Saa ya kupima muda (saa ya simu inafaa) kwa insha ya dakika 45",
      "Mitihani ya mfano ya bure ya ged.com; GED Ready kama mwanafunzi ataamua kuinunua",
      "Takriban dakika 90 kwa jumla kwa masomo na majaribio, pamoja na dakika 45 kwa insha ya mwisho"
    ],
    facilitatorNotes: [
      "Anza na jaribio la awali na mtihani wa mfano wa RLA wa bure wa ged.com, kisha panga wanafunzi katika vikundi kulingana na ujuzi wanaouhitaji zaidi.",
      "Onyesha kwa sauti jedwali moja la imara-au-dhaifu kabla wanafunzi hawajajaribu lao wenyewe.",
      "Waambie wanafunzi wasome insha kwa sauti wawili wawili na watoe maoni kuhusu mstari mmoja wa rubriki kwa wakati.",
      "Angalia jimbo lako linatumia mtihani upi (GED au HiSET) na ushiriki maeneo ya mitihani ya karibu na msaada wowote wa ada.",
      "Mazoezi yasiwe na shinikizo; wanafunzi wengi wazima wana wasiwasi wa mitihani tangu shuleni."
    ]
  }
};
