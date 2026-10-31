"use strict";

// Koach Learn course (Swahili translation of youth/youth-ai-activism.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-activism-sw",
  lang: "sw",
  translationOf: "youth-ai-activism",
  category: "Youth",
  name: "AI kwa Uanaharakati na Kuleta Mabadiliko katika Jamii",
  skills: "Kuchagua tatizo la mahali ulipo, Kutafiti na kukagua ukweli kwa AI, Kupanga kitendo kidogo, Kumwandikia mwenye mamlaka ya kuamua, Kueneza ujumbe kwa usalama na kwa heshima",
  outcome: "kupanga kitendo kidogo na salama kuhusu tatizo la shule au la jamii unalolijali, ukitumia AI kulitafiti, kukagua ukweli kwa vyanzo vya kuaminika, kuandika ujumbe wa heshima kwa mwenye mamlaka ya kuamua, na kuweka mpango rahisi wa kuueneza.",
  about: [
    "Kozi hii ni ya vijana wanaotaka kuleta mabadiliko: bustani safi zaidi, kivuko salama karibu na shule, mapipa zaidi ya kuchakata taka, uchangishaji wa chakula, au klabu inayowakaribisha wanafunzi wapya. Vitendo vidogo vya mahali ulipo ni mwanzo mzuri.",
    "Utachagua tatizo, utatumia msaidizi wa AI kama ChatGPT, Microsoft Copilot au Google Gemini kulitafiti na kubuni suluhisho, utakagua kila ukweli kwa vyanzo vya kuaminika, utapanga kitendo kimoja kidogo, utaandika barua au barua pepe ya heshima kwa mtu anayeweza kusaidia, na utaeneza ujumbe wako kwa usalama.",
    "Angalia sheria za shule yako kuhusu AI na masharti ya umri ya kila zana, na mshirikishe mzazi, mlezi au mwalimu kabla ya kujisajili popote, kuwasiliana na viongozi, au kuandaa tukio. Kila somo linaishia na kazi ya \"Jaribu sasa\", jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa kitendo wa ukurasa mmoja kuhusu tatizo la shule au la jamii unalolijali: tatizo kwa sentensi moja, ukweli miwili uliokagua kwa vyanzo vya kuaminika, kitendo kimoja kidogo chenye tarehe na wasaidizi, na mtu mzima anayekuunga mkono. Tumia AI kukusaidia kuandika rasimu ya barua au barua pepe ya heshima kwa mwenye mamlaka ya kuamua (mkuu wa shule, bodi ya shule au diwani wa jiji), ikague na uiandike upya kwa maneno yako mwenyewe, kisha weka mpango rahisi wa kueneza ujumbe wako kwa usalama.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wanaotaka kuleta mabadiliko shuleni au katika jamii yao, kama bustani safi zaidi, kivuko salama, mapipa zaidi ya kuchakata taka, uchangishaji wa chakula au klabu inayokaribisha zaidi.",
    startingPoint: "Wanajali mambo na wanaona matatizo yanayowazunguka, na wanatumia mitandao ya kijamii na huenda wasaidizi wa AI. Wachache wamewahi kukagua ukweli kwa vyanzo vya kuaminika, kupanga kitendo kwa ruhusa, au kumwandikia mwenye mamlaka ya kuamua.",
    gap: "Shauku bila mpango inaweza kufifia, na AI inaweza kueneza ukweli wa kubuni au picha bandia zinazovunja imani. Vijana wanahitaji kuchagua badiliko wanaloweza kulileta, kukagua kila ukweli, kupanga kwa usalama pamoja na mtu mzima, na kuongea kwa heshima na watu wenye mamlaka ya kusaidia, ili sauti yao ilete matokeo halisi.",
    constraints: [
      "Mipaka ya umri na sheria za shule kuhusu AI; mzazi, mlezi au mwalimu anashirikishwa kabla ya kuwasiliana na viongozi au kuandaa tukio",
      "Usalama: ruhusa kwa matukio, kamwe usiende peke yako, na hakuna taarifa binafsi mtandaoni",
      "Ukweli lazima ukaguliwe kwa vyanzo vya kuaminika; hakuna picha wala nukuu bandia",
      "Vifaa: simu au kompyuta ya shule au ya maktaba yenye zana za bure",
      "Masomo mafupi na maneno rahisi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukifikiria shule yako au jamii yako", action: "kuchagua tatizo moja la mahali ulipo na kulieleza kwa sentensi moja, ukitaja nani anaathirika na nani anaweza kulitatua", standard: "ukichagua tatizo unaloweza kulifanyia kazi kwa usalama" },
    { id: "O2", condition: "Ukitumia msaidizi wa AI na vyanzo vya kuaminika", action: "kutafiti tatizo lako na kukagua kila ukweli, na pia kukusanya ushahidi wako mwenyewe", standard: "ukitumia tu ukweli uliothibitishwa na tovuti rasmi au mtu halisi" },
    { id: "O3", condition: "Ukipewa tatizo lako", action: "kupanga kitendo kimoja kidogo chenye tarehe, wasaidizi, ruhusa zinazohitajika na mtu mzima anayekuunga mkono", standard: "ukiwa na ruhusa kabla ya kuanza" },
    { id: "O4", condition: "Ukipewa ukweli uliokagua", action: "kuandika ujumbe mfupi wa heshima kwa mwenye mamlaka ya kuamua wenye ombi mahususi", standard: "ukiwa umeuandika upya kwa maneno yako na kusomwa na mtu mzima kabla ya kuutuma" },
    { id: "O5", condition: "Unapoeneza habari za kitendo chako", action: "kutengeneza bango au chapisho linalosema nini, lini, wapi na kwa nini, na kulieneza kwa usalama", standard: "kutoka akaunti iliyoidhinishwa, bila taarifa binafsi na bila mashambulizi ya kibinafsi" },
    { id: "O6", condition: "Kabla ya kueneza chochote kuhusu lengo lako", action: "kukagua kwamba ni kweli, kimekaguliwa na ni cha haki, kuweka alama kwenye picha za AI, na kuandika mpango wa kitendo wa ukurasa mmoja", standard: "bila kutumia picha wala nukuu bandia za watu halisi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutoka kujali hadi kuwa na mpango",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchagua tatizo unaloweza kulibadilisha kweli",
          minutes: 4,
          goal: "Chagua tatizo moja la mahali ulipo na ulieleze kwa sentensi moja iliyo wazi.",
          text: [
            "Kuleta mabadiliko katika jamii maana yake ni kuyafanya maisha ya watu wengine kuwa bora. Uanaharakati maana yake ni kufanya kazi ili kuleta badiliko. Huhitaji kutatua matatizo ya dunia nzima. Tatizo dogo la mahali ulipo unaloweza kuliona, kama mabomba ya maji ya kunywa yaliyoharibika shuleni au takataka kwenye kituo cha basi, ni rahisi zaidi kubadilisha na linakufundisha jinsi mabadiliko yanavyotokea.",
            "Jiulize: Nani anaathirika? Hali bora ingeonekanaje? Nani ana mamlaka ya kulitatua, kama mkuu wa shule, mlezi wa klabu, bodi ya shule au baraza la jiji?",
            "Msaidizi wa AI anaweza kukusaidia kubuni mawazo: \"Nina miaka 15. Ni matatizo gani madogo ambayo vijana wanaweza kusaidia kuyatatua katika shule ya sekondari au mtaani?\" Kisha chagua moja linalokuhusu na unaloweza kulifanyia kazi kwa usalama."
          ],
          words: [["Kuleta mabadiliko katika jamii", "kuyafanya maisha ya watu wengine kuwa bora (kwa Kiingereza: social impact)."], ["Uanaharakati", "kufanya kazi ili kuleta badiliko shuleni kwako, katika jamii au duniani."], ["Mwenye mamlaka ya kuamua", "mtu au kikundi chenye uwezo wa kuleta badiliko."]],
          slides: [
            { title: "Anza na kidogo, mahali ulipo", bullets: ["Tatizo unaloweza kuliona", "Ni rahisi zaidi kubadilisha", "Linakufundisha jinsi mabadiliko yanavyotokea"] },
            { title: "Maswali matatu", bullets: ["Nani anaathirika?", "Hali bora ingeonekanaje?", "Nani ana mamlaka ya kulitatua?"] },
            { title: "Buni mawazo kwa AI", bullets: ["Omba mawazo ambayo vijana wanaweza kuyafanyia kazi", "Chagua moja linalokuhusu", "Chagua moja unaloweza kulifanyia kazi kwa usalama"] }
          ],
          tryIt: "Andika tatizo lako kwa sentensi moja, kama \"Shule yetu haina mapipa ya kuchakata taka kwenye bwalo la chakula, kwa hiyo makopo yanatupwa kwenye taka.\" Ongeza nani anaathirika na nani anaweza kulitatua.",
          youCanNow: "kuchagua tatizo la mahali ulipo na kusema linamwathiri nani na nani anaweza kulibadilisha.",
          quickCheck: [
            { objective: "O1", q: "Uanaharakati maana yake ni nini?", options: ["Kuchapisha mambo kukuhusu wewe", "Kutatua matatizo ya dunia nzima kwa mara moja", "Kufanya kazi ili kuleta badiliko", "Kubishana mtandaoni"], answer: 2, why: "Uanaharakati ni kufanya kazi ili kuleta badiliko; kuleta mabadiliko katika jamii ni kuyafanya maisha ya wengine kuwa bora." },
            { objective: "O1", q: "Unajali matatizo mengi. Lipi ni chaguo bora la kwanza?", options: ["Takataka kwenye kituo chako cha basi unazoweza kuziona na kusaidia kuziondoa", "Kumaliza uchafuzi wote duniani", "Tatizo katika nchi usiyoijua kabisa", "Chochote kinachovuma mtandaoni"], answer: 0, why: "Tatizo dogo la mahali ulipo ni rahisi zaidi kubadilisha na linakufundisha jinsi mabadiliko yanavyotokea." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutafiti kwa AI na kukagua kila ukweli",
          minutes: 6,
          goal: "Tumia AI kuanza utafiti, kisha thibitisha ukweli kwa vyanzo vya kuaminika.",
          text: [
            "AI ni mahali pazuri pa kuanzia: \"Eleza kwa nini shule huchakata taka na ni nini kwa kawaida huzizuia. Nipendekezee maswali ya kumuuliza mkuu wangu wa shule.\" Lakini AI inaweza kukosea au kuwa na habari za zamani, na wakati mwingine inabuni namba au vyanzo. Hii inaitwa hallucination (kubuni mambo).",
            "Kila ukweli unaopanga kutumia katika ujumbe lazima ukaguliwe. Vyanzo vya kuaminika ni pamoja na tovuti ya shule yako au wilaya ya shule, tovuti rasmi ya jiji lako, tovuti za serikali (nyingi zinaishia na .gov), na watu halisi kama mwalimu, mtunza maktaba au ofisi inayohusika.",
            "Ushahidi wako mwenyewe pia una thamani. Hesabu mapipa ya taka yanayofurika, piga picha za tatizo (si za watu bila ruhusa), au fanya utafiti mfupi wa maswali kwa wanafunzi wenzako kwa idhini ya mwalimu."
          ],
          steps: ["Muombe AI aeleze tatizo na apendekeze maswali.", "Andika ukweli wowote unaotaka kutumia.", "Kagua kila ukweli kwenye tovuti rasmi au kwa mtu halisi.", "Kusanya ushahidi wako mwenyewe: hesabu, picha za mahali, utafiti mfupi wa maswali.", "Ondoa ukweli wowote usioweza kuuthibitisha."],
          words: [["Hallucination (kubuni mambo)", "AI inapoandika kitu kinachosikika kuwa kweli lakini ni cha kubuni."], ["Ushahidi", "ukweli au uthibitisho unaounga mkono unachosema."], ["Utafiti wa maswali", "maswali machache mafupi unayowauliza watu wengi (kwa Kiingereza: survey)."]],
          slides: [
            { title: "AI ni mahali pa kuanzia", bullets: ["Inaeleza tatizo", "Inapendekeza maswali ya kuuliza", "Inaweza kukosea au kubuni mambo"] },
            { title: "Kagua kila ukweli", bullets: ["Tovuti ya shule au ya jiji", "Tovuti za serikali, mara nyingi .gov", "Walimu, watunza maktaba, ofisi inayohusika"] },
            { title: "Ushahidi wako mwenyewe", bullets: ["Hesabu na picha za mahali", "Utafiti mfupi wa maswali, kwa idhini ya mwalimu", "Hakuna picha za watu bila ruhusa"] }
          ],
          tryIt: "Muombe msaidizi wa AI aeleze tatizo lako na akupe ukweli mitatu. Kagua kila ukweli kwa chanzo cha kuaminika na uandike \"umethibitishwa\" au \"haujathibitishwa\". Kisha kusanya kipande kimoja cha ushahidi wako mwenyewe.",
          youCanNow: "kutafiti tatizo kwa AI na kubaki tu na ukweli uliouthibitisha kwa vyanzo vya kuaminika.",
          quickCheck: [
            { objective: "O2", q: "Kipi ni chanzo cha kuaminika kwa sheria ya wilaya ya shule?", options: ["Chapisho lolote la mitandao ya kijamii", "Jibu la AI lisilo na chanzo", "Kisio la rafiki", "Tovuti ya shule yako au ya wilaya"], answer: 3, why: "Tovuti rasmi za shule, wilaya, jiji na serikali ni vyanzo vya kuaminika." },
            { objective: "O2", q: "Unataka picha za kuonyesha tatizo la takataka. Unapiga picha ya nini?", options: ["Watu usiowajua wakitupa taka", "Mahali penye takataka, si watu bila ruhusa", "Nyuso za wanafunzi wenzako", "Anwani ya nyumbani kwako"], answer: 1, why: "Picha za tatizo ni ushahidi mzuri; usipige picha za watu bila ruhusa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga kitendo kimoja kidogo",
          minutes: 5,
          goal: "Geuza tatizo lako kuwa kitendo kimoja kidogo chenye tarehe, wasaidizi na mtu mzima anayekuunga mkono.",
          text: [
            "Vitendo vizuri ni mahususi: siku ya usafi, pendekezo la mapipa ya kuchakata taka kwa mkuu wa shule, uchangishaji wa vifaa, hotuba kwenye mkutano wa baraza la wanafunzi. Chagua kimoja unachoweza kufanya katika wiki chache zijazo.",
            "Muulize AI: \"Nisaidie kupanga usafi wa bustani wa saa moja kwa wanafunzi 10. Orodhesha vifaa, sheria za usalama, nani wa kuomba ruhusa na ratiba rahisi.\" Kisha kagua mpango huo pamoja na mtu mzima.",
            "Usalama kwanza: pata ruhusa kutoka shuleni kwako au kwa mmiliki wa bustani, mshirikishe mzazi, mlezi au mwalimu, kamwe usiende peke yako, na fuata sheria zozote kuhusu glavu, barabara au taka."
          ],
          steps: ["Chagua kitendo kimoja mahususi.", "Muombe AI orodha ya kukagua: vifaa, hatua, ratiba, ruhusa.", "Chagua tarehe na wasaidizi.", "Muombe mzazi, mlezi, mwalimu au mlezi wa klabu akuunge mkono.", "Pata ruhusa yoyote unayohitaji kabla ya kuanza."],
          words: [["Mpango wa kitendo", "orodha ya utakachofanya, lini, na nani atasaidia."], ["Mtu mzima anayekuunga mkono", "mtu mzima anayekusaidia na kukagua mpango wako."]],
          slides: [
            { title: "Kitendo kimoja mahususi", bullets: ["Usafi, pendekezo, uchangishaji au hotuba", "Kinachowezekana katika wiki chache zijazo"] },
            { title: "Panga kwa AI", bullets: ["Vifaa na hatua", "Ratiba", "Nani wa kuomba ruhusa"] },
            { title: "Usalama kwanza", bullets: ["Pata ruhusa", "Mtu mzima ashirikishwe", "Kamwe usiwe peke yako; fuata sheria"] }
          ],
          tryIt: "Tumia msaidizi wa AI kupanga kitendo kimoja kidogo kwa tatizo lako. Andika tarehe, wasaidizi wawili, ruhusa unayohitaji, na mtu mzima atakayekuunga mkono.",
          youCanNow: "kugeuza tatizo kuwa mpango wa kitendo salama na mahususi wenye msaada wa mtu mzima.",
          quickCheck: [
            { objective: "O3", q: "Nini kinafanya kitendo kiwe mahususi?", options: ["Kina \"nini\" kilicho wazi, tarehe na nani anasaidia", "Ni kikubwa sana", "Hakina tarehe ya mwisho", "Ni wazo tu"], answer: 0, why: "Vitendo mahususi vinasema utafanya nini, lini na pamoja na nani." },
            { objective: "O3", q: "Unapanga usafi katika bustani ya jiji. Unafanya nini kabla ya siku hiyo?", options: ["Unajitokeza tu", "Unaenda peke yako mapema", "Unapata ruhusa kutoka kwa mmiliki wa bustani na kumshirikisha mtu mzima", "Unachapisha anwani ya nyumbani kwako kwa ajili ya wasaidizi"], answer: 2, why: "Usalama kwanza: pata ruhusa, mshirikishe mtu mzima na kamwe usiende peke yako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutoka kujali hadi kuwa na mpango",
        questions: [
          { objective: "O1", q: "Tatizo lipi ni mahali bora pa kuanzia?", options: ["Kumaliza njaa yote duniani kufikia Ijumaa", "Kupata mapipa ya kuchakata taka kwenye bwalo la chakula la shule yako", "Kubadilisha kila sheria", "Kurekebisha intaneti yote"], answer: 1, why: "Matatizo madogo ya mahali ulipo ni rahisi zaidi kubadilisha na yanakufundisha jinsi ya kufanya hivyo." },
          { objective: "O1", q: "Mwenye mamlaka ya kuamua ni nani?", options: ["Mtu au kikundi chenye uwezo wa kuleta badiliko", "Mtumiaji yeyote wa mitandao ya kijamii", "Msaidizi wa AI", "Mwanafunzi mwenzako anayekubaliana nawe"], answer: 0, why: "Wenye mamlaka ya kuamua, kama mkuu wa shule au baraza, wanaweza kuleta badiliko." },
          { objective: "O2", q: "AI inakupa takwimu kwa ajili ya barua yako. Unafanya nini?", options: ["Unaitumia mara moja", "Unaiongeza iwe kubwa zaidi", "Unaikagua kwa chanzo cha kuaminika kabla ya kuitumia", "Unauliza AI kama ina uhakika kisha unaitumia"], answer: 2, why: "AI inaweza kubuni namba; thibitisha kwa vyanzo vya kuaminika." },
          { objective: "O2", q: "Kipi ni ushahidi wako mwenyewe?", options: ["Uvumi", "Kisio", "Hadithi ya kubuni", "Hesabu ya mapipa ya taka yanayofurika"], answer: 3, why: "Hesabu na picha za mahali ni ushahidi unaoukusanya mwenyewe." },
          { objective: "O3", q: "Kabla ya usafi wa bustani, lazima ufanye nini?", options: ["Uende peke yako usiku", "Upate ruhusa na umshirikishe mtu mzima", "Uruke sheria za usalama", "Uchapishe anwani yako mtandaoni"], answer: 1, why: "Ruhusa na msaada wa mtu mzima vinafanya kitendo kiwe salama." }
        ]
      }
    },
    {
      name: "Sura 2: Kupaza sauti na kueneza ujumbe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika ujumbe wa heshima kwa mwenye mamlaka ya kuamua",
          minutes: 5,
          goal: "Tumia AI kuandika rasimu ya barua au barua pepe iliyo wazi na ya heshima, kisha uifanye iwe yako.",
          text: [
            "Ujumbe imara ni mfupi na wa adabu: wewe ni nani (jina la kwanza, darasa, shule au mtaa), tatizo kwa sentensi moja, ukweli mmoja au miwili uliokaguliwa, ombi mahususi, na shukrani.",
            "Muulize AI: \"Nisaidie kuandika barua pepe fupi ya heshima kwa mkuu wangu wa shule nikiomba mapipa ya kuchakata taka kwenye bwalo la chakula. Niko darasa la 10. Huu ndio ukweli wangu: [ukweli wako uliokaguliwa]. Isizidi maneno 150.\" Kisha iandike upya kwa maneno yako mwenyewe na uondoe chochote ambacho hukukikagua.",
            "Ili kujua uwasiliane na nani, angalia tovuti ya shule yako au ya wilaya, au tovuti rasmi ya jiji lako. USA.gov (tovuti rasmi ya serikali ya Marekani) ina ukurasa wenye viungo vya viongozi waliochaguliwa wa shirikisho, wa jimbo na wa eneo lako. Mwombe mzazi, mlezi au mwalimu asome ujumbe wako kabla ya kuutuma."
          ],
          steps: ["Sema wewe ni nani bila taarifa binafsi zaidi ya jina la kwanza na darasa.", "Eleza tatizo kwa sentensi moja.", "Ongeza ukweli mmoja au miwili uliokaguliwa.", "Toa ombi mahususi na useme asante.", "Andika upya rasimu ya AI kwa maneno yako na mtu mzima aisome kabla ya kuituma."],
          words: [["Ombi mahususi", "kitu hasa unachotaka mtu huyo afanye."], ["Kiongozi aliyechaguliwa", "mtu aliyepigiwa kura kushika kazi, kama diwani wa jiji."]],
          slides: [
            { title: "Ujumbe imara", bullets: ["Wewe ni nani", "Tatizo kwa sentensi moja", "Ukweli mmoja au miwili uliokaguliwa", "Ombi mahususi na shukrani"] },
            { title: "AI inaandika rasimu, wewe unaamua", bullets: ["Ipe ukweli uliokaguliwa tu", "Andika upya kwa maneno yako", "Isizidi maneno 150"] },
            { title: "Uwasiliane na nani", bullets: ["Tovuti ya shule au ya wilaya", "Tovuti rasmi ya jiji", "Ukurasa wa viongozi waliochaguliwa wa USA.gov"] }
          ],
          sources: [{ name: "USA.gov: Tafuta viongozi wako waliochaguliwa", url: "https://www.usa.gov/elected-officials" }],
          tryIt: "Tumia msaidizi wa AI kuandika rasimu ya ujumbe kwa mwenye mamlaka ya kuamua kuhusu tatizo lako, ukitumia ukweli uliouthibitisha tu. Uandike upya kwa maneno yako na umwombe mtu mzima ausome. Usiutume hadi atakapokuwa ameusoma.",
          youCanNow: "kuandika ujumbe mfupi wa heshima, wenye ukweli uliokaguliwa, unaomwomba mwenye mamlaka ya kuamua badiliko mahususi.",
          quickCheck: [
            { objective: "O4", q: "\"Ombi mahususi\" katika ujumbe ni nini?", options: ["Orodha ndefu ya malalamiko", "Ombi lililo wazi, kama kuweka mapipa ya kuchakata taka kwenye bwalo la chakula", "Swali kuhusu hali ya hewa", "Namba yako ya simu"], answer: 1, why: "Ombi mahususi linamwambia mwenye mamlaka ya kuamua hasa unachotaka afanye." },
            { objective: "O4", q: "Rasimu ya AI ina namba ambayo hujawahi kuikagua. Unafanya nini?", options: ["Unaiacha; inasikika vizuri", "Unaiongeza", "Unaiandika kwa herufi nzito", "Unaiondoa au kuikagua kabla ya kutuma"], answer: 3, why: "Andika upya rasimu na uondoe chochote ambacho hukukikagua." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kueneza ujumbe kwa usalama",
          minutes: 5,
          goal: "Tengeneza bango au chapisho rahisi kuhusu kitendo chako na ulieneze kwa usalama.",
          text: [
            "Watu hujiunga ujumbe ukiwa wazi: nini, lini, wapi na kwa nini ni muhimu. AI inaweza kukusaidia kuandika kauli mbiu fupi au chapisho, na zana za bure kama Canva (programu ya kubuni picha) zinaweza kukusaidia kutengeneza bango. Kagua kila tarehe, saa na mahali.",
            "Kuwa salama mtandaoni: chapisha kutoka akaunti ya klabu ya shule au akaunti iliyoidhinishwa na familia ukiweza, usitoe jina lako kamili, namba ya simu na anwani ya nyumbani, na usieneze picha za watu wengine bila ruhusa.",
            "Watu wengine hawatakubaliana nawe. Hiyo ni sawa. Jibu kwa adabu au usijibu kabisa, na kamwe usichapishe mashambulizi ya kibinafsi. Mtu akikutishia au kukunyanyasa, usimjibu; hifadhi ujumbe, mzuie (block), ripoti na umwambie mtu mzima unayemwamini."
          ],
          steps: ["Andika nini, lini, wapi na kwa nini kwa maneno machache.", "Muombe AI mawazo matatu ya kauli mbiu na uchague au uandike upya moja.", "Tengeneza bango au chapisho na ukague kila undani.", "Eneza kutoka akaunti ya klabu au iliyoidhinishwa na familia.", "Usiweke taarifa binafsi na mwambie mtu mzima kuhusu vitisho vyovyote."],
          words: [["Kauli mbiu", "msemo mfupi unaovutia kuhusu lengo lako."], ["Unyanyasaji", "ujumbe wa ubaya au wa vitisho unaorudiwa mara nyingi."]],
          slides: [
            { title: "Ujumbe ulio wazi", bullets: ["Nini, lini, wapi, kwa nini", "Kauli mbiu fupi", "Kagua kila undani"] },
            { title: "Eneza kwa usalama", bullets: ["Akaunti ya klabu au iliyoidhinishwa na familia", "Hakuna namba ya simu wala anwani ya nyumbani", "Hakuna picha za wengine bila ruhusa"] },
            { title: "Watu wasipokubaliana nawe", bullets: ["Kuwa na adabu au usijibu", "Hakuna mashambulizi ya kibinafsi", "Vitisho: hifadhi, zuia, ripoti, mwambie mtu mzima"] }
          ],
          tryIt: "Muombe msaidizi wa AI mawazo matatu ya kauli mbiu kwa kitendo chako. Chagua moja, tengeneza bango au chapisho rahisi lenye nini, lini, wapi na kwa nini, na mtu mzima alikague kabla ya kulieneza.",
          youCanNow: "kutengeneza ujumbe ulio wazi kuhusu lengo lako na kuueneza kwa usalama na kwa heshima.",
          quickCheck: [
            { objective: "O5", q: "Bango la kitendo chako linapaswa kuwaambia watu mambo gani manne?", options: ["Nini, lini, wapi na kwa nini", "Jina lako kamili, simu, anwani na shule", "Kauli mbiu tu", "Nani wa kulaumiwa"], answer: 0, why: "Ujumbe ulio wazi unasema nini, lini, wapi na kwa nini ni muhimu." },
            { objective: "O5", q: "Mtu anaandika maoni ya ubaya akikutukana. Unafanya nini?", options: ["Unamtukana naye", "Unachapisha taarifa zake binafsi", "Unajibu kwa adabu au hujibu kabisa, na unamwambia mtu mzima ikigeuka kuwa kitisho", "Unafuta kampeni yako yote"], answer: 2, why: "Kamwe usichapishe mashambulizi ya kibinafsi; kwa vitisho, hifadhi, zuia, ripoti na mwambie mtu mzima." }
          ]
        },
        {
          objectives: ["O6"],
          title: "AI kwa uwajibikaji katika uanaharakati, na mpango wako wa kitendo",
          minutes: 6,
          goal: "Epuka maudhui ya kupotosha na umalize mpango wa kitendo wa ukurasa mmoja.",
          text: [
            "AI inafanya iwe rahisi kutengeneza picha bandia, nukuu bandia na habari bandia. Kuzitumia, hata kwa lengo zuri, kunavunja imani na kunaweza kueneza uongo. Kamwe usitengeneze picha au nukuu bandia za watu halisi, na weka alama kwenye picha yoyote iliyotengenezwa na AI unayoitumia.",
            "Kabla ya kueneza chochote, jiulize: Je, ni kweli? Je, nimekikagua? Je, ni haki kwa watu wanaohusika? Je, ningeridhika kama mtu ninayemwandikia angekisoma?",
            "Sasa unganisha yote katika ukurasa mmoja: tatizo, ukweli miwili uliokaguliwa, kitendo kimoja chenye tarehe na wasaidizi, mtu mzima anayekuunga mkono, ujumbe wako kwa mwenye mamlaka ya kuamua, na jinsi utakavyoueneza. Kisha tafakari: nini kilifanya kazi, na ungefanya nini baadaye?"
          ],
          steps: ["Hakikisha kila picha na nukuu ni halisi au ina alama wazi kuwa ni ya AI.", "Jiulize: ni kweli, imekaguliwa na ni ya haki?", "Andika mpango wako wa kitendo wa ukurasa mmoja.", "Ambatisha ujumbe wako na mpango wa kuueneza.", "Baada ya kitendo chako, andika nini kilifanya kazi na nini kinafuata."],
          words: [["Habari za kupotosha", "taarifa za uongo zinazoenezwa kwa makosa au kwa makusudi (kwa Kiingereza: misinformation)."], ["Alama", "maelezo mafupi yanayosema kitu kilitengenezwa na AI."]],
          slides: [
            { title: "Hakuna vitu bandia", bullets: ["Hakuna picha au nukuu bandia za watu halisi", "Weka alama kwenye picha zilizotengenezwa na AI", "Vitu bandia vinavunja imani, hata kwa malengo mazuri"] },
            { title: "Kabla ya kueneza", bullets: ["Je, ni kweli?", "Je, nimekikagua?", "Je, ni haki?"] },
            { title: "Mpango wako wa ukurasa mmoja", bullets: ["Tatizo na ukweli miwili uliokaguliwa", "Kitendo kimoja, tarehe, wasaidizi, mtu mzima", "Ujumbe na mpango wa kuueneza"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa kitendo wa ukurasa mmoja wenye tatizo, ukweli miwili uliokaguliwa, kitendo kimoja chenye tarehe na wasaidizi, mtu mzima anayekuunga mkono, ujumbe wako ulioandikwa upya kwa mwenye mamlaka ya kuamua, na mpango wako wa kuueneza kwa usalama.",
          youCanNow: "kutumia AI kwa uwajibikaji kupanga, kupaza sauti na kueneza kitendo kidogo kinacholeta tofauti halisi.",
          quickCheck: [
            { objective: "O6", q: "Habari za kupotosha ni nini?", options: ["Ukweli uliokaguliwa", "Alama kwenye picha ya AI", "Muundo wa bango", "Taarifa za uongo zinazoenezwa kwa makosa au kwa makusudi"], answer: 3, why: "Habari za kupotosha ni taarifa za uongo, na AI inafanya iwe rahisi kuzitengeneza." },
            { objective: "O6", q: "Nukuu ya kubuni kutoka kwa kiongozi wa eneo lako ingesaidia lengo lako lienee sana mtandaoni. Unafanya nini?", options: ["Unaitumia mara moja", "Huitumii; nukuu bandia zinavunja imani na kueneza uongo", "Unaitumia lakini unafifisha jina", "Unaomba AI iifanye isikike halisi"], answer: 1, why: "Nukuu au picha bandia za watu halisi zinavunja imani, hata kwa lengo zuri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupaza sauti na kueneza ujumbe",
        questions: [
          { objective: "O4", q: "Kipi kinafaa katika ujumbe kwa mwenye mamlaka ya kuamua?", options: ["Ombi mahususi na shukrani", "Matusi ya kibinafsi", "Ukweli ambao hukuukagua", "Anwani ya nyumbani kwako na namba ya simu"], answer: 0, why: "Ombi lililo wazi na adabu vinaufanya ujumbe kuwa imara." },
          { objective: "O4", q: "Unaweza kupata wapi viungo vya viongozi wako waliochaguliwa?", options: ["Chapisho lolote la mitandao ya kijamii", "Kisio la AI", "Ukurasa wa viongozi waliochaguliwa wa USA.gov", "Barua pepe ya mnyororo"], answer: 2, why: "USA.gov ina viungo vya viongozi wa shirikisho, wa jimbo na wa eneo." },
          { objective: "O5", q: "Mtu anaandika kitisho kwenye chapisho la kampeni yako. Unafanya nini?", options: ["Unajibu kwa kitisho", "Unaeneza anwani yake", "Unakipuuza na humwambii mtu yeyote", "Unakihifadhi, unamzuia, unaripoti na kumwambia mtu mzima unayemwamini"], answer: 3, why: "Vitisho vinapaswa kuhifadhiwa, kuzuiwa, kuripotiwa na kuambiwa mtu mzima." },
          { objective: "O6", q: "Rafiki anapendekeza picha bandia ya AI ya meya ili kuvutia watu. Wewe:", options: ["Unakataa; vitu bandia vinaeneza uongo na kuvunja imani", "Unaitengeneza lakini huiwekei alama", "Unaitengeneza kwa lengo zuri", "Unaichapisha na kuifuta baadaye"], answer: 0, why: "Picha bandia za watu halisi zinapotosha, hata kwa malengo mazuri." },
          { objective: "O6", q: "Unapaswa kujiuliza nini kabla ya kueneza chochote kuhusu lengo lako?", options: ["Je, kitaenea sana mtandaoni?", "Je, ni kweli, kimekaguliwa na ni cha haki?", "Je, ni chapisho refu zaidi?", "Je, AI iliandika chote?"], answer: 1, why: "Ukweli, ukaguzi na haki vinafanya kampeni yako iaminike." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Uanaharakati na Kuleta Mabadiliko katika Jamii",
    questions: [
      { objective: "O1", q: "Kuleta mabadiliko katika jamii maana yake ni:", options: ["Kuyafanya maisha ya watu wengine kuwa bora", "Kupata likes", "Kushinda mabishano", "Kutumia AI sana"], answer: 0, why: "Kuleta mabadiliko katika jamii ni kuboresha maisha ya wengine." },
      { objective: "O1", q: "Kwa nini uanze na tatizo dogo la mahali ulipo?", options: ["Haijalishi", "Ni rahisi zaidi kubadilisha na linakufundisha jinsi mabadiliko yanavyotokea", "Matatizo makubwa ni kinyume cha sheria", "Watu wazima wanalazimisha hivyo"], answer: 1, why: "Ushindi mdogo unajenga ujuzi na kujiamini." },
      { objective: "O1", q: "Kipi ni tatizo lililo wazi kwa sentensi moja?", options: ["\"Mambo ni mabaya\"", "\"Kila kitu kinapaswa kubadilika\"", "\"Bwalo letu la chakula halina mapipa ya kuchakata taka, kwa hiyo makopo yanatupwa kwenye taka\"", "\"Watu wanaudhi\""], answer: 2, why: "Linasema tatizo ni nini na kwa nini ni muhimu." },
      { objective: "O1", q: "Nani anaweza kutatua tatizo la mabomba ya maji ya kunywa shuleni?", options: ["Kampuni ya michezo ya video", "Msaidizi wa AI", "Mfuasi yeyote mtandaoni", "Mkuu wa shule au wilaya ya shule"], answer: 3, why: "Viongozi wa shule wanaweza kufanya matengenezo shuleni." },
      { objective: "O2", q: "Hallucination (kubuni mambo) katika AI maana yake ni:", options: ["AI imeandika kitu kinachosikika kuwa kweli lakini ni cha kubuni", "AI imeharibika", "AI ni mbunifu sana", "AI ni ya polepole"], answer: 0, why: "AI inaweza kubuni ukweli na vyanzo." },
      { objective: "O2", q: "Kipi ni chanzo cha kuaminika kwa sheria ya jiji?", options: ["Picha ya utani (meme)", "Tovuti rasmi ya jiji", "Maoni ya mtu asiyejulikana", "Jibu la AI peke yake"], answer: 1, why: "Tovuti rasmi ndizo mahali pa kuthibitisha sheria." },
      { objective: "O2", q: "Huwezi kuthibitisha ukweli ambao AI ilikupa. Unapaswa:", options: ["Kuutumia hata hivyo", "Kuufanya usikike kuwa na uhakika zaidi", "Kuuacha", "Kuitaja AI kama chanzo"], answer: 2, why: "Tumia tu ukweli uliouthibitisha." },
      { objective: "O2", q: "Kabla ya kufanya utafiti mfupi wa maswali kwa wanafunzi wenzako, unapaswa:", options: ["Kuwaomba anwani zao za nyumbani", "Kuufanya kwa siri", "Kuwaomba nywila", "Kupata idhini ya mwalimu"], answer: 3, why: "Utafiti wa maswali shuleni unapaswa kuidhinishwa na mwalimu." },
      { objective: "O3", q: "Kitendo kipi ni mahususi?", options: ["Usafi wa bustani wa saa moja Jumamosi tarehe 14 pamoja na wanafunzi 10", "\"Kufanya kitu siku moja\"", "\"Kurekebisha mazingira\"", "\"Kuwa mwema zaidi\""], answer: 0, why: "Kina nini, lini na nani." },
      { objective: "O3", q: "Unapaswa kuiomba AI nini unapopanga kitendo?", options: ["Ikufanyie kitendo hicho", "Vifaa, hatua, ratiba na nani wa kuomba ruhusa", "Taarifa binafsi za watu", "Itengeneze ushahidi bandia"], answer: 1, why: "AI inaweza kutengeneza orodha ya kukagua yenye manufaa ambayo kisha unaikagua pamoja na mtu mzima." },
      { objective: "O3", q: "Ipi ni sheria ya usalama kwa kitendo cha jamii?", options: ["Nenda peke yako", "Ruka ruhusa", "Mshirikishe mzazi, mlezi au mwalimu", "Fanya kazi karibu na magari bila mpango"], answer: 2, why: "Msaada wa mtu mzima na ruhusa vinawaweka wote salama." },
      { objective: "O4", q: "Kipi kinafaa katika ujumbe wako kwa mkuu wa shule?", options: ["Namba yako ya simu kwa watu usiowajua", "Matusi", "Uvumi usiokaguliwa", "Jina lako la kwanza, darasa na ombi mahususi"], answer: 3, why: "Sema wewe ni nani kwa urahisi na uombe kwa uwazi." },
      { objective: "O4", q: "Baada ya AI kuandika rasimu ya barua yako, unapaswa:", options: ["Kuiandika upya kwa maneno yako na kuondoa ukweli usiokaguliwa", "Kuituma mara moja", "Kuirefusha", "Kuongeza nukuu bandia"], answer: 0, why: "Ujumbe wako unapaswa kuwa wako na sahihi." },
      { objective: "O4", q: "Nani anapaswa kusoma ujumbe wako kabla ya kuutuma?", options: ["Hakuna mtu", "Mzazi, mlezi au mwalimu", "Mtu usiyemjua mtandaoni", "AI peke yake"], answer: 1, why: "Mtu mzima anaweza kugundua makosa na kukuweka salama." },
      { objective: "O5", q: "Bango imara linawaambia watu:", options: ["Anwani ya nyumbani kwako", "Kauli mbiu tu", "Nini, lini, wapi na kwa nini", "Insha ndefu"], answer: 2, why: "Mambo hayo yanawasaidia watu kujiunga." },
      { objective: "O5", q: "Akaunti ipi ni bora kwa kueneza kampeni yako?", options: ["Akaunti ya mtu usiyemjua", "Akaunti yenye namba yako ya simu kwenye maelezo", "Akaunti bandia", "Akaunti ya klabu ya shule au iliyoidhinishwa na familia"], answer: 3, why: "Akaunti zilizoidhinishwa zinakuweka salama zaidi." },
      { objective: "O5", q: "Mtu hakubaliani na chapisho lako kwa adabu. Wewe:", options: ["Unajibu kwa adabu au hujibu kabisa", "Unamtukana", "Unaeneza taarifa zake binafsi", "Unatengeneza chapisho bandia kumhusu"], answer: 0, why: "Heshima inaliweka lengo lako imara." },
      { objective: "O6", q: "Habari za kupotosha ni:", options: ["Aina ya bango", "Taarifa za uongo zinazoenezwa kwa makosa au kwa makusudi", "Ukweli uliokaguliwa", "Utafiti wa maswali"], answer: 1, why: "Habari za kupotosha ni taarifa za uongo." },
      { objective: "O6", q: "Unatumia picha iliyotengenezwa na AI ya bustani safi kwenye bango lako. Unapaswa:", options: ["Kusema ni picha halisi", "Kuificha kwa maandishi madogo", "Kuiwekea alama kuwa imetengenezwa na AI", "Kuondoa tarehe"], answer: 2, why: "Alama zinakufanya uwe mkweli kwa wasomaji wako." },
      { objective: "O6", q: "Baada ya kitendo chako, hatua nzuri ya mwisho ni:", options: ["Kufuta kila kitu", "Kutokufanya tena kamwe", "Kuwalaumu wengine", "Kuandika nini kilifanya kazi na nini cha kufanya baadaye"], answer: 3, why: "Kutafakari kunasaidia kitendo chako kijacho kiende vizuri zaidi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 4, 6, 8, 10, 11, 13, 14, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Tatizo lililo wazi", objective: "O1", notYet: "Tatizo halieleweki au ni kubwa mno kulifanyia kazi.", meets: "Tatizo kwa sentensi moja, likitaja nani anaathirika na nani anaweza kulitatua.", exceeds: "Pia linasema hali bora ingeonekanaje." },
      { name: "Ukweli uliokaguliwa", objective: "O2", notYet: "Ukweli haujakaguliwa au unatoka kwa AI peke yake.", meets: "Ukweli miwili uliothibitishwa kwa vyanzo vya kuaminika, na vyanzo vimetajwa.", exceeds: "Pia una ushahidi wa mwanafunzi mwenyewe, kama hesabu au utafiti wa maswali." },
      { name: "Kitendo na usalama", objective: "O3", notYet: "Hakuna tarehe, wasaidizi au mtu mzima anayeunga mkono, au hakuna ruhusa.", meets: "Kitendo kimoja kidogo chenye tarehe, wasaidizi, mtu mzima anayeunga mkono na ruhusa inayohitajika.", exceeds: "Kina orodha fupi ya kukagua usalama kwa siku hiyo." },
      { name: "Ujumbe kwa mwenye mamlaka ya kuamua", objective: "O4", notYet: "Ujumbe hauna adabu, hauko wazi au unatumia ukweli usiokaguliwa.", meets: "Ujumbe mfupi wa heshima wenye tatizo, ukweli uliokaguliwa, ombi mahususi na shukrani, kwa maneno ya mwanafunzi mwenyewe.", exceeds: "Mtu mzima ameusoma, na unamtaja mtu sahihi wa kuwasiliana naye." },
      { name: "Kueneza kwa usalama na kwa ukweli", objective: "O6", notYet: "Mpango wa kueneza una taarifa binafsi, picha bandia au maudhui ya AI yasiyo na alama.", meets: "Mpango wa kueneza kutoka akaunti iliyoidhinishwa bila taarifa binafsi, na picha yoyote ya AI ina alama.", exceeds: "Pia unasema jinsi mwanafunzi atakavyojibu watu wasiokubaliana naye." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa kipimo cha tathmini)",
      "Wanafunzi wanaotekeleza kitendo walichopanga ndani ya siku 60 pamoja na mtu mzima anayewaunga mkono",
      "Ujumbe uliotumwa kwa mwenye mamlaka ya kuamua na majibu au mabadiliko yoyote yaliyofuata",
      "Wanafunzi wanaojiunga au kuanzisha klabu ya huduma, mradi wa baraza la wanafunzi au kikundi cha jamii ndani ya siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya shule au ya maktaba yenye intaneti",
      "Msaidizi wa AI wa bure ambao mwanafunzi anaruhusiwa kuutumia, na zana ya bure ya kubuni kama Canva",
      "Karatasi au hati kwa ajili ya mpango wa kitendo wa ukurasa mmoja",
      "Mtu mzima anayeunga mkono: mzazi, mlezi, mwalimu au mlezi wa klabu",
      "Takriban dakika 60 kwa jumla, pamoja na muda wa kitendo chenyewe"
    ],
    facilitatorNotes: [
      "Wasaidie wanafunzi kuchagua matatizo ya mahali walipo wanayoweza kuyafanyia kazi kwa usalama; waepushe na chochote kinachowahitaji waende peke yao au wakabiliane na watu.",
      "Idhinisha ruhusa na mtu mzima anayeunga mkono kabla ya tukio lolote au ujumbe wowote kutumwa.",
      "Soma kila ujumbe na kila bango kabla halijatoka ili kukagua ukweli, sauti ya maneno na faragha.",
      "Jadilini jinsi ya kujibu watu wasiokubaliana na unyanyasaji mtandaoni, na mtaje nani wanafunzi wanapaswa kumwambia.",
      "Pima mpango wa kitendo kwa kipimo cha tathmini (rubric) na fuatilia baada ya kitendo ili kuwasaidia wanafunzi kutafakari."
    ]
  }
};
