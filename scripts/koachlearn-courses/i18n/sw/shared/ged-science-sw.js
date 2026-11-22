"use strict";

// Koach Learn course (Swahili translation of shared/ged-science.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const GED_SUBJECTS = { name: "GED Testing Service: masomo ya mtihani (muda, aina za maswali, kikokotoo)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SCIENCE = { name: "GED Testing Service: mtihani wa Sayansi", url: "https://ged.com/about_test/test_subjects/science/" };
const GED_SCORES = { name: "GED Testing Service: alama", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: mitihani ya mfano ya bure (Kiingereza na Kihispania)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, mtihani rasmi wa mazoezi", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, mtihani mwingine unaolingana na cheti cha sekondari (tovuti rasmi)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-science-sw",
  lang: "sw",
  translationOf: "ged-science",
  category: "Workforce Development",
  name: "Maandalizi ya Mtihani wa GED: Sayansi",
  skills: "Kusoma makala za sayansi, Kutambua vigeu katika jaribio, Kusoma majedwali na grafu, Hesabu za sayansi (wastani, kati, masafa, fomula), Kupima hitimisho, Kuandaa mpango wa kusoma",
  outcome: "kusoma makala ya sayansi, jedwali au grafu na kujibu maswali ya aina ya GED kuihusu, kutaja vigeu katika jaribio, kufanya hesabu za sayansi zinazoulizwa na mtihani, na kupima kama hitimisho linaungwa mkono na data.",
  about: [
    "Kozi hii ni kwa watu wazima wanaojiandaa kwa mtihani wa Sayansi wa GED: wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu, vijana, wahamiaji na yeyote anayerudi kusoma. Huhitaji kuwa mtaalamu wa sayansi. Mtihani unahusu zaidi kusoma sayansi, kuelewa majaribio na kufanya kazi na namba na grafu.",
    "Kozi hii inakuandaa kwa mtihani. Haikupi cheti cha GED. GED Testing Service ndiyo inayoendesha mtihani, na jimbo lako ndilo linaloweka sheria za kuufanya. Baadhi ya majimbo yanatumia mtihani mwingine unaoitwa HiSET. Angalia ged.com na ofisi ya elimu ya watu wazima ya jimbo lako kwa sheria, ada na mitihani ya sasa.",
    "Kila somo linafundisha ujuzi mmoja kwa mifano iliyofanyiwa kazi na zoezi la \"Jaribu sasa\" lenye majibu yaliyoelezwa, kisha jaribio fupi la maswali mawili. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni.",
    "Kazi ya mwisho ni jaribio lako dogo na salama la jikoni: unapanga jaribio la haki, unaandika data katika jedwali, unatafuta wastani, unachora grafu na unaandika hitimisho linaloungwa mkono na data."
  ],
  finalTask: "Panga na ufanye jaribio dogo na salama la jikoni (kwa mfano: je, kiasi cha kukoroga kinabadilisha jinsi sukari inavyoyeyuka haraka katika maji?). Andika swali na dhanio, taja kigeu huru, kigeu tegemezi na vigeu vinavyodhibitiwa, rudia kila jaribio mara tatu, andika matokeo katika jedwali, tafuta wastani wa kila kundi, chora grafu ya mihimili, na andika hitimisho la sentensi mbili linaloungwa mkono na data. Ongeza mpango wako wa kusoma GED wenye tarehe chini yake.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaojiandaa kwa mtihani wa Sayansi wa GED: wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu, vijana walioacha shule, wahamiaji na watu wazima wanaorudi kusoma baada ya miaka mingi.",
    startingPoint: "Wanaweza kusoma maandishi ya kila siku na kufanya hesabu za msingi. Wengi hawajasoma somo la sayansi kwa miaka mingi na wanaona somo hili ni gumu au limejaa mambo ya kukariri. Baadhi bado wanajenga kujiamini katika Kiingereza au hesabu.",
    gap: "Mtihani wa Sayansi wa GED unahusu kusoma maandishi ya sayansi, kuelewa jinsi majaribio yanavyofanya kazi, na kutumia namba, majedwali na grafu. Huu ni ujuzi unaoweza kujifunzwa, na pia unatumika kazini katika afya, viwanda, maabara na kazi za ufundi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la sayansi linaelezwa",
      "Vifaa: simu, kompyuta ya maktaba, au karatasi na kalamu; kikokotoo cha kawaida kinasaidia",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi, miadi na familia",
      "Usalama: majaribio ya nyumbani yanatumia maji, sukari, chumvi na maji ya bomba ya kawaida au ya uvuguvugu tu; hakuna moto, miali wala kemikali",
      "Sheria za mtihani, ada na mtihani unaotumiwa na jimbo (GED au HiSET) hubadilika; wanafunzi wanaangalia ged.com na jimbo lao"
    ],
    prerequisites: "Hakuna. Wanafunzi wanaohitaji msaada na wastani au kusoma grafu wanaweza kuchukua kozi ya Hesabu ya GED au kozi ya hesabu za kila siku wakati huo huo."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia tovuti rasmi ya GED", action: "kuorodhesha sehemu, aina za maswali, muda na zana za mtihani wa Sayansi wa GED na kuandika mpango wa kusoma wenye tarehe", standard: "ukitaja maeneo yote matatu ya ujuzi na angalau tarehe moja ya kusoma kila wiki hadi siku ya mtihani" },
    { id: "O2", condition: "Ukipewa makala fupi ya sayansi", action: "kutambua wazo kuu na dai linaloungwa mkono na ushahidi wa makala", standard: "ukionyesha sentensi au namba inayounga mkono kila jibu" },
    { id: "O3", condition: "Ukipewa maelezo ya jaribio", action: "kutaja dhanio na kigeu huru, kigeu tegemezi na vigeu vinavyodhibitiwa", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O4", condition: "Ukipewa jedwali au grafu", action: "kusoma thamani, kueleza mwelekeo na kuchagua hitimisho linaloungwa mkono na data", standard: "bila kuongeza mambo ambayo hayamo katika data" },
    { id: "O5", condition: "Ukipewa data kidogo au fomula", action: "kukokotoa wastani, kati, modi na masafa au kutumia fomula kupata jibu", standard: "ukiwa na vipimo sahihi na ukipata angalau 4 kati ya 5 sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kusoma sayansi na kuelewa majaribio",
      lessons: [
        {
          title: "Jinsi mtihani wa Sayansi wa GED unavyofanya kazi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha sehemu na zana za mtihani wa Sayansi wa GED na uandike mpango wa kusoma wenye tarehe.",
          text: [
            "GED ina mitihani minne: Hesabu, Kufikiri kupitia Lugha (Reasoning Through Language Arts), Sayansi na Mafunzo ya Jamii. Unaweza kuifanya mmoja mmoja. GED Testing Service ndiyo inayotunga mtihani. Baadhi ya majimbo yanatumia mtihani mwingine unaolingana na cheti cha sekondari, HiSET, kwa hiyo angalia jimbo lako linatumia mtihani gani.",
            "Kwenye ged.com, mtihani wa Sayansi umeorodheshwa kuwa dakika 90 bila mapumziko. Unahusu maeneo matatu ya ujuzi: kusoma ili kuelewa sayansi, kubuni na kufasiri majaribio ya sayansi, na kutumia namba na michoro katika sayansi. Maswali ni ya kuchagua jibu, kujaza nafasi, kuburuta na kuweka, kuchagua eneo, na orodha ya kushuka (drop-down).",
            "Unapata kikokotoo kwenye skrini na karatasi ya maelezo ya kikokotoo, na ged.com inasema unaweza kuleta kikokotoo chako cha TI-30XS kwenye kituo cha mtihani. Ged.com pia inasema huhitaji kukariri fomula: taarifa unayohitaji inatolewa pamoja na kila swali. Si mtihani wa mambo yaliyokaririwa; unapima jinsi unavyosoma na kufikiri.",
            "Ged.com inaonyesha alama ya kufaulu ya 145 kwa kila somo. Muda na sheria vinaweza kubadilika, kwa hiyo angalia ged.com kabla ya kujiandikisha. Ged.com ina mitihani ya mfano ya bure na mtihani rasmi wa mazoezi, GED Ready."
          ],
          steps: ["Nenda ged.com na usome ukurasa wa mtihani wa Sayansi.", "Andika muda, maeneo matatu ya ujuzi na zana unazopewa.", "Fanya mtihani wa mfano wa Sayansi wa bure ili ujue kiwango chako.", "Chagua wiki unayolenga kufanya mtihani.", "Andika angalau tarehe moja ya kusoma kila wiki, pamoja na ujuzi utakaoufanyia mazoezi."],
          words: [["GED", "mtihani unaolingana na cheti cha sekondari; kufaulu masomo yote manne kunakupa cheti ambacho waajiri na vyuo vingi vinakubali kama diploma."], ["HiSET", "mtihani mwingine unaolingana na cheti cha sekondari ambao baadhi ya majimbo yanatumia."], ["TI-30XS", "aina ya kikokotoo cha mkono ambacho mtihani wa GED unatumia kwenye skrini na kinaruhusiwa katika vituo vya mtihani."], ["Karatasi ya maelezo ya kikokotoo", "karatasi inayotolewa kwenye mtihani inayoonyesha jinsi ya kutumia vitufe vya kikokotoo."]],
          slides: [
            { title: "Mtihani wa Sayansi wa GED (angalia ged.com)", bullets: ["Dakika 90, bila mapumziko", "Maswali ya kuchagua jibu na aina nyingine", "Alama ya kufaulu iliyoorodheshwa: 145"] },
            { title: "Maeneo matatu ya ujuzi", bullets: ["Kusoma ili kuelewa sayansi", "Kubuni na kufasiri majaribio", "Kutumia namba na michoro"] },
            { title: "Zana unazopewa", bullets: ["Kikokotoo kwenye skrini na karatasi ya maelezo", "Unaweza kuleta TI-30XS kwenye kituo cha mtihani", "Taarifa inayohitajika inatolewa na kila swali"] },
            { title: "Panga mpango", bullets: ["Fanya mtihani wa mfano wa bure kwanza", "Chagua wiki unayolenga kufanya mtihani", "Soma kidogo, siku nyingi za wiki"] }
          ],
          sources: [GED_SUBJECTS, GED_SCIENCE, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Fungua ged.com na ufanye mtihani wa mfano wa Sayansi wa bure (au soma ukurasa wa Sayansi kama huwezi kuufanya sasa). Andika mpango wako wa kusoma: wiki unayolenga kufanya mtihani na tarehe moja kila wiki pamoja na ujuzi utakaoufanyia mazoezi: kusoma sayansi, majaribio, au namba na grafu. Uhifadhi kwa ajili ya kazi ya mwisho.",
          youCanNow: "kutaja sehemu na zana za mtihani wa Sayansi wa GED na kufuata mpango wa kusoma wenye tarehe.",
          quickCheck: [
            { objective: "O1", q: "Kwa mujibu wa ged.com, unahitaji kukariri nini kwa mtihani wa Sayansi wa GED?", options: ["Kila fomula ya sayansi", "Jedwali la vipengele (periodic table)", "Si fomula: taarifa unayohitaji inatolewa pamoja na kila swali", "Majina ya wanasayansi wote"], answer: 2, why: "Ged.com inasema huhitaji kukariri fomula; taarifa inayohitajika inatolewa." },
            { objective: "O1", q: "Lipi ni mojawapo ya maeneo matatu ya ujuzi ya mtihani wa Sayansi?", options: ["Kubuni na kufasiri majaribio ya sayansi", "Kuandika kwa usahihi maneno ya sayansi", "Kuchora wanyama", "Kujenga kompyuta"], answer: 0, why: "Ged.com inaorodhesha kusoma ili kuelewa, majaribio, na namba na michoro." }
          ]
        },
        {
          title: "Kusoma makala ya sayansi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tambua wazo kuu la makala ya sayansi na dai linaloungwa mkono na ushahidi wake.",
          text: [
            "Makala za sayansi zinaonekana ngumu kwa sababu ya maneno mapya, lakini unazisoma kama makala nyingine yoyote. Tafuta inahusu nini zaidi, na tafuta ukweli na namba zinazoiunga mkono. Mara nyingi makala inaeleza neno gumu ndani ya maandishi yenyewe. Tafuta \"kunaitwa\", \"maana yake\" au maneno ndani ya koma baada yake.",
            "Mfano uliofanyiwa kazi. \"Jasho hupoza mwili. Jasho linapovukiza, yaani linapobadilika kutoka kimiminika kuwa gesi, huondoa joto kutoka kwenye ngozi. Siku zenye unyevunyevu, hewa tayari ina maji mengi, kwa hiyo jasho huvukiza polepole zaidi.\" Wazo kuu: kutoa jasho hupoza mwili kwa uvukizaji. Dai linaloungwa mkono: unaweza kuhisi joto zaidi siku zenye unyevunyevu kwa sababu jasho hukauka polepole zaidi.",
            "Dai linaungwa mkono tu kama makala inatoa ushahidi wake. \"Kutoa jasho huchoma mafuta\" haliungwi mkono; makala haisemi lolote kuhusu mafuta. Chagua jibu ambalo maandishi yanathibitisha, si lile linalosikika la kisayansi zaidi."
          ],
          steps: ["Soma swali kwanza.", "Soma makala; zungushia duara maneno mapya na utafute maana yake karibu nayo.", "Sema wazo kuu kwa sentensi moja.", "Kwa kila jibu la kuchagua, uliza: makala inathibitisha hili wapi?", "Futa majibu yanayoongeza mambo ambayo makala haitoi."],
          words: [["Kuvukiza", "kubadilika kutoka kimiminika kuwa gesi, kama dimbwi la maji linavyokauka."], ["Unyevunyevu", "hali ambapo hewa ina mvuke mwingi wa maji."], ["Dai", "kauli inayosema kwamba jambo fulani ni kweli."], ["Linaloungwa mkono", "linalothibitishwa na ushahidi katika maandishi au data."]],
          slides: [
            { title: "Soma sayansi kama makala nyingine yoyote", bullets: ["Inahusu nini zaidi?", "Ukweli na namba gani zinaiunga mkono?"] },
            { title: "Maneno mapya", bullets: ["Tafuta \"kunaitwa\" au \"maana yake\"", "Tafuta maana ndani ya koma baada ya neno"] },
            { title: "Linaungwa mkono au la?", bullets: ["Linaungwa mkono: makala inalithibitisha", "Haliungwi mkono: linaongeza mambo yasiyomo katika maandishi", "Usichague jibu kwa sababu tu linasikika la kitaalamu"] }
          ],
          tryIt: "Makala ya mazoezi: \"Mimea hutengeneza chakula chake yenyewe kwa usanisinuru. Hutumia mwanga, maji na kaboni dioksidi, gesi iliyo hewani, kutengeneza sukari. Hutoa oksijeni kama matokeo.\" 1) Wazo kuu? 2) Dai lipi linaungwa mkono: (a) mmea uliowekwa kabatini gizani utapata shida kutengeneza chakula, au (b) mimea inahitaji soda ili ikue? Majibu: 1) Mimea hutengeneza chakula kutokana na mwanga, maji na kaboni dioksidi. 2) (a): makala inasema mimea inahitaji mwanga. (b) haimo katika maandishi.",
          youCanNow: "kupata wazo kuu la makala ya sayansi na kuchagua dai linaloungwa mkono na ushahidi wake.",
          quickCheck: [
            { objective: "O2", q: "Makala inasema, \"Chanjo hufundisha mfumo wa kinga, mfumo wa ulinzi wa mwili, kutambua vijidudu.\" \"Mfumo wa kinga\" una maana gani hapa?", options: ["Aina ya kijidudu", "Mfumo wa ulinzi wa mwili", "Ofisi ya daktari", "Aina ya dawa unayoimeza"], answer: 1, why: "Maana imetolewa ndani ya koma mara baada ya neno." },
            { objective: "O2", q: "Makala inasema chuma hupata kutu haraka zaidi katika hewa yenye unyevu na chumvi. Dai lipi linaungwa mkono?", options: ["Chuma hakipati kutu kamwe", "Chumvi hufanya chuma kiwe na nguvu zaidi", "Kutu hutokea jangwani tu", "Daraja la chuma karibu na bahari linaweza kuhitaji kinga zaidi dhidi ya kutu"], answer: 3, why: "Hewa ya baharini ina unyevu na chumvi, na makala inasema hilo huharakisha kutu." }
          ]
        },
        {
          title: "Majaribio: dhanio na vigeu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Taja dhanio na kigeu huru, kigeu tegemezi na vigeu vinavyodhibitiwa katika jaribio.",
          text: [
            "Jaribio linapima swali. Dhanio ni kisio kinachoweza kupimwa kuhusu jibu, mara nyingi huandikwa \"Kama ..., basi ...\". Kwa mfano: \"Kama mimea itapata saa nyingi zaidi za mwanga, basi itakua mirefu zaidi.\"",
            "Kigeu huru ni kitu kimoja ambacho mwanasayansi anabadilisha kwa makusudi (saa za mwanga). Kigeu tegemezi ni kinachopimwa ili kuona matokeo (urefu wa mmea). Vigeu vinavyodhibitiwa vinawekwa sawa ili jaribio liwe la haki (aina ileile ya mmea, chungu kilekile, maji yaleyale, udongo uleule).",
            "Njia ya kukumbuka: kigeu tegemezi kinategemea kigeu huru. Urefu unategemea mwanga. Jaribio la haki linabadilisha kitu kimoja tu kwa wakati. Ukibadilisha mwanga na maji pamoja, huwezi kujua ni kipi kilichofanya mmea ukue.",
            "Majaribio mazuri hurudia kila jaribio mara kadhaa na mara nyingi huwa na kundi dhibiti, kundi lisilopata badiliko lolote, ili kulinganisha nalo. Majaribio mengi zaidi hufanya matokeo yaaminike zaidi."
          ],
          steps: ["Tafuta swali linalopimwa.", "Tafuta kitu kimoja kinachobadilishwa kwa makusudi: kigeu huru.", "Tafuta kinachopimwa: kigeu tegemezi.", "Orodhesha vinavyowekwa sawa: vigeu vinavyodhibitiwa.", "Hakikisha kitu kimoja tu kinabadilika, na kwamba majaribio yanarudiwa."],
          words: [["Dhanio", "kisio kinachoweza kupimwa, mara nyingi \"Kama ..., basi ...\"."], ["Kigeu huru", "kitu kimoja unachobadilisha kwa makusudi."], ["Kigeu tegemezi", "unachopima ili kuona matokeo."], ["Kigeu kinachodhibitiwa", "kitu unachokiweka sawa ili jaribio liwe la haki."], ["Kundi dhibiti", "kundi lisilopata badiliko lolote, linalotumika kulinganisha."]],
          slides: [
            { title: "Dhanio", bullets: ["Kisio kinachoweza kupimwa", "\"Kama mwanga zaidi, basi mimea mirefu zaidi\""] },
            { title: "Aina tatu za vigeu", bullets: ["Huru: unachobadilisha", "Tegemezi: unachopima", "Kinachodhibitiwa: unachokiweka sawa"] },
            { title: "Jaribio la haki", bullets: ["Badilisha kitu kimoja tu", "Rudia kila jaribio", "Linganisha na kundi dhibiti"] }
          ],
          tryIt: "Zoezi: Mfanyakazi anapima kama glavu mpya inaweka mikono joto zaidi. Wafanyakazi kumi wanavaa glavu mpya na kumi wanavaa glavu ya zamani, nje kwa dakika 30 wakati mmoja. Joto la mikono linapimwa. Taja: 1) kigeu huru, 2) kigeu tegemezi, 3) vigeu viwili vinavyodhibitiwa, 4) dhanio. Majibu: 1) aina ya glavu; 2) joto la mikono; 3) muda wa kukaa nje, hali ya hewa ileile, wakati uleule wa siku; 4) \"Kama wafanyakazi watavaa glavu mpya, basi mikono yao itakuwa na joto zaidi.\"",
          youCanNow: "kusoma jaribio na kutaja dhanio lake na vigeu vyake, na kutambua jaribio lisilo la haki.",
          quickCheck: [
            { objective: "O3", q: "Mwanafunzi anapima kama chumvi inabadilisha jinsi barafu inavyoyeyuka haraka. Kigeu tegemezi ni kipi?", options: ["Kiasi cha chumvi", "Ukubwa wa vipande vya barafu", "Joto la chumba", "Muda ambao barafu inachukua kuyeyuka"], answer: 3, why: "Muda wa kuyeyuka ndio unaopimwa; unategemea chumvi." },
            { objective: "O3", q: "Kwa nini jaribio linapaswa kubadilisha kitu kimoja tu kwa wakati?", options: ["Ili ujue ni badiliko lipi lililosababisha matokeo", "Ili liwe la haraka zaidi", "Ili litumie karatasi kidogo", "Haijalishi"], answer: 0, why: "Vitu viwili vikibadilika, huwezi kujua ni kipi kilicholeta tofauti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kusoma sayansi na kuelewa majaribio",
        questions: [
          { objective: "O1", q: "Ged.com inasema unapata zana gani kwenye mtihani wa Sayansi?", options: ["Simu", "Kikokotoo kwenye skrini na karatasi ya maelezo ya kikokotoo", "Kitabu cha sayansi", "Daftari la fomula ulizoandika"], answer: 1, why: "Ged.com inaorodhesha kikokotoo kwenye skrini na karatasi ya maelezo ya kikokotoo." },
          { objective: "O2", q: "Makala inasema, \"Mazoezi huongeza mapigo ya moyo, idadi ya mapigo ya moyo kwa dakika.\" Dai lipi linaungwa mkono?", options: ["Mazoezi hupunguza mapigo ya moyo", "Mapigo ya moyo hupimwa kwa maili", "Mazoezi hufanya moyo upige mara nyingi zaidi kwa dakika", "Mapigo ya moyo hayabadiliki"], answer: 2, why: "Makala inasema mazoezi huongeza mapigo ya moyo kwa dakika." },
          { objective: "O3", q: "\"Kama nitamwagilia nyanya kila siku, basi zitazaa matunda mengi zaidi.\" Hiki ni nini?", options: ["Hitimisho", "Dhanio", "Jedwali la data", "Kundi dhibiti"], answer: 1, why: "Ni kisio kinachoweza kupimwa cha \"Kama ..., basi ...\"." },
          { objective: "O3", q: "Katika jaribio la nyanya, kigeu huru ni kipi?", options: ["Mara ngapi mimea inamwagiliwa", "Kiasi cha matunda", "Aina ya udongo", "Ukubwa wa vyungu"], answer: 0, why: "Umwagiliaji ndio unaobadilishwa kwa makusudi." },
          { objective: "O3", q: "Kipi ni kigeu kinachodhibitiwa katika jaribio la nyanya?", options: ["Mara ngapi zinamwagiliwa", "Idadi ya nyanya zilizozaliwa", "Dhanio", "Aina ileile ya mmea wa nyanya kwa kila kundi"], answer: 3, why: "Kutumia aina ileile ya mmea kunafanya jaribio liwe la haki." }
        ]
      }
    },
    {
      name: "Sura 2: Namba, majedwali na grafu katika sayansi",
      lessons: [
        {
          title: "Kusoma majedwali na grafu",
          objectives: ["O4"],
          minutes: 5,
          goal: "Soma thamani kutoka jedwali au grafu, eleza mwelekeo na uchague hitimisho linaloungwa mkono na data.",
          text: [
            "Maswali mengi ya sayansi yanakupa jedwali au grafu. Kwanza soma kichwa, lebo na vipimo. Kwenye grafu, lebo ya chini (mhimili wa x) kwa kawaida ni kigeu huru, na lebo ya pembeni (mhimili wa y) ni kigeu tegemezi.",
            "Mfano uliofanyiwa kazi. Jedwali: \"Saa za mwanga kwa siku: 4, 8, 12. Wastani wa urefu wa mmea baada ya wiki 3: 5 cm, 9 cm, 14 cm.\" Soma thamani: kwa saa 8, mimea ilikua 9 cm. Mwelekeo: mwanga unapoongezeka, urefu unaongezeka. Hitimisho linaloungwa mkono: katika jaribio hili, mwanga zaidi uliambatana na mimea mirefu zaidi.",
            "Usipite mipaka ya data. Jedwali halionyeshi saa 20 za mwanga, kwa hiyo huwezi kusema nini kinatokea hapo. Pia halionyeshi maji wala udongo, kwa hiyo hitimisho kuhusu hayo haliungwi mkono.",
            "Aina za grafu: grafu ya mihimili inalinganisha makundi, grafu ya mstari inaonyesha mabadiliko kwa muda au mwelekeo, na chati ya duara inaonyesha sehemu za kitu kizima."
          ],
          steps: ["Soma kichwa, lebo na vipimo.", "Tafuta thamani ambayo swali linauliza.", "Eleza mwelekeo: juu, chini, au hakuna mpangilio wazi.", "Chagua hitimisho linalobaki ndani ya data.", "Futa majibu yanayohusu mambo ambayo data haionyeshi."],
          words: [["Mwelekeo", "upande ambao data inaelekea kwa ujumla: kupanda, kushuka au kubaki sawa."], ["Mhimili wa x", "mstari unaopita chini ya grafu."], ["Mhimili wa y", "mstari unaopanda pembeni ya grafu."], ["Vipimo", "kile ambacho namba inapimwa nacho, kama cm, nyuzi au dakika."]],
          slides: [
            { title: "Soma lebo kwanza", bullets: ["Kichwa, lebo na vipimo", "Chini (mhimili wa x): kwa kawaida kilichobadilishwa", "Pembeni (mhimili wa y): kwa kawaida kilichopimwa"] },
            { title: "Tafuta mwelekeo", bullets: ["Juu, chini, au hakuna mpangilio wazi", "Ueleze kwa sentensi moja"] },
            { title: "Baki ndani ya data", bullets: ["Usikisie zaidi ya namba zilizoonyeshwa", "Hakuna hitimisho kuhusu vitu visivyopimwa"] },
            { title: "Aina za grafu", bullets: ["Mihimili: inalinganisha makundi", "Mstari: mabadiliko kwa muda", "Duara: sehemu za kitu kizima"] }
          ],
          tryIt: "Jedwali la mazoezi: \"Joto la maji (nyuzi C): 10, 20, 30, 40. Muda wa kipande cha sukari kuyeyuka (sekunde): 120, 90, 60, 40.\" 1) Muda gani kwa nyuzi 30? 2) Mwelekeo ni upi? 3) Hitimisho lipi linaungwa mkono: (a) maji ya joto zaidi yaliyeyusha sukari haraka zaidi katika jaribio hili, au (b) chumvi huyeyuka haraka kuliko sukari? Majibu: 1) Sekunde 60. 2) Joto linapopanda, muda wa kuyeyuka unashuka. 3) (a); chumvi haikupimwa.",
          youCanNow: "kusoma jedwali au grafu, kueleza mwelekeo wake, na kuchagua hitimisho linaloungwa mkono na data.",
          quickCheck: [
            { objective: "O4", q: "Grafu inaonyesha wastani wa joto la mji ukipanda kila muongo kutoka 1980 hadi 2020. Mwelekeo ni upi?", options: ["Kushuka", "Hakuna badiliko", "Kupanda kwa muda", "Haiwezi kusomeka"], answer: 2, why: "Thamani zinapanda kadiri miongo inavyopita." },
            { objective: "O4", q: "Jedwali linaonyesha urefu wa mimea kwa saa 4, 8 na 12 za mwanga. Hitimisho lipi linapita mipaka ya data?", options: ["Mimea yenye saa 8 ilikua mirefu kuliko yenye saa 4", "Mimea itakayopewa saa 24 za mwanga itakuwa mirefu zaidi", "Urefu uliongezeka mwanga ulipoongezeka", "Mimea yenye saa 12 ilikua zaidi katika jaribio hili"], answer: 1, why: "Saa 24 hazikupimwa, kwa hiyo data haiwezi kukuambia hilo." }
          ]
        },
        {
          title: "Hesabu za sayansi: wastani, masafa na fomula",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kokotoa wastani, kati, modi na masafa ya data na utumie fomula uliyopewa.",
          text: [
            "Data (kwa mazoezi tu): mapigo ya moyo baada ya kutembea, kwa mapigo kwa dakika: 80, 84, 84, 90, 92. Wastani: zijumlishe na ugawanye kwa idadi yake: 430 / 5 = 86. Kati (median): namba ya katikati zikiwa kwa mpangilio: 84. Modi: namba inayojitokeza mara nyingi zaidi: 84. Masafa: kubwa kabisa toa ndogo kabisa: 92 - 80 = 12.",
            "Kama idadi ya thamani ni shufwa (namba ya jozi), kati ni wastani wa namba mbili za katikati. Kwa 3, 5, 7, 9: (5 + 7) / 2 = 6.",
            "Fomula zinatolewa kwenye mtihani. Weka namba na ubaki na vipimo. Kasi = umbali / muda: lori linasafiri maili 120 kwa saa 2, kwa hiyo kasi = 120 / 2 = maili 60 kwa saa. Msongamano = uzito / ujazo: kipande chenye gramu 40 na ujazo wa sentimita za ujazo 20 kina msongamano wa 40 / 20 = gramu 2 kwa sentimita ya ujazo.",
            "Hakikisha jibu lako lina maana. Wastani lazima uwe kati ya thamani ndogo kabisa na kubwa kabisa. Andika kipimo pamoja na kila jibu."
          ],
          steps: ["Panga data kutoka ndogo kabisa hadi kubwa kabisa.", "Wastani: jumlisha thamani zote na ugawanye kwa idadi yake.", "Kati: tafuta ya katikati (au wastani wa thamani mbili za katikati).", "Modi: thamani inayojitokeza zaidi. Masafa: kubwa kabisa toa ndogo kabisa.", "Kwa fomula: iandike, weka namba, tatua, na uongeze vipimo."],
          words: [["Wastani (mean)", "jumla ikigawanywa kwa idadi ya thamani."], ["Kati (median)", "thamani ya katikati namba zikiwa kwa mpangilio."], ["Modi (mode)", "thamani inayojitokeza mara nyingi zaidi."], ["Masafa (range)", "thamani kubwa kabisa toa ndogo kabisa."], ["Msongamano (density)", "kiasi cha uzito (masi) kilichobanwa katika nafasi: uzito ukigawanywa kwa ujazo."]],
          slides: [
            { title: "Namba nne zinazoeleza data", bullets: ["Wastani: jumla ikigawanywa kwa idadi", "Kati: thamani ya katikati kwa mpangilio", "Modi: thamani inayojitokeza zaidi", "Masafa: kubwa kabisa toa ndogo kabisa"] },
            { title: "Mfano uliofanyiwa kazi", bullets: ["Data: 80, 84, 84, 90, 92", "Wastani 86, kati 84, modi 84, masafa 12"] },
            { title: "Kutumia fomula uliyopewa", bullets: ["Kasi = umbali / muda", "Msongamano = uzito / ujazo", "Weka namba, tatua, andika vipimo"] }
          ],
          tryIt: "Kwa mazoezi tu. 1) Dakika za kipande cha barafu kuyeyuka katika majaribio matano: 6, 7, 7, 8, 12. Tafuta wastani, kati, modi na masafa. 2) Mwendesha baiskeli anasafiri maili 30 kwa saa 3. Kasi = umbali / muda. Majibu: 1) Wastani 40 / 5 = dakika 8; kati 7; modi 7; masafa 12 - 6 = dakika 6. 2) 30 / 3 = maili 10 kwa saa.",
          youCanNow: "kutafuta wastani, kati, modi na masafa ya data na kutumia fomula ya sayansi kwa vipimo sahihi.",
          quickCheck: [
            { objective: "O5", q: "Data: 2, 4, 4, 6, 9. Wastani ni upi?", options: ["4", "5", "6", "7"], answer: 1, why: "2 + 4 + 4 + 6 + 9 = 25, na 25 / 5 = 5." },
            { objective: "O5", q: "Jiwe lina uzito wa gramu 60 na ujazo wa sentimita za ujazo 20. Msongamano = uzito / ujazo. Msongamano ni upi?", options: ["Gramu 40 kwa sentimita ya ujazo", "Gramu 1,200 kwa sentimita ya ujazo", "Gramu 80 kwa sentimita ya ujazo", "Gramu 3 kwa sentimita ya ujazo"], answer: 3, why: "60 / 20 = gramu 3 kwa sentimita ya ujazo." }
          ]
        },
        {
          title: "Kuunganisha yote: jaribio lako la haki",
          objectives: ["O3", "O4", "O5"],
          minutes: 6,
          goal: "Panga jaribio la haki, andika data katika jedwali, tafuta wastani na uandike hitimisho linaloungwa mkono na data.",
          text: [
            "Sasa tumia kila ujuzi kwa pamoja. Maswali mengi ya mtihani yanaeleza jaribio zima pamoja na jedwali, kisha yanauliza kuhusu vigeu, hesabu na hitimisho. Kufanya jaribio dogo wewe mwenyewe kunafanya maswali haya kuwa rahisi zaidi.",
            "Mfano salama wa jikoni. Swali: je, kukoroga kunabadilisha jinsi sukari inavyoyeyuka haraka? Dhanio: kama maji yatakorogwa, basi sukari itayeyuka haraka zaidi. Kigeu huru: kukorogwa au kutokorogwa. Kigeu tegemezi: muda wa kuyeyuka (sekunde). Vinavyodhibitiwa: kikombe kilekile, kiasi kilekile cha maji ya bomba, joto lilelile la maji, kipande kimoja cha sukari kila mara. Fanya majaribio matatu ya kila kundi.",
            "Matokeo ya mfano (kwa mazoezi tu). Yaliyokorogwa: sekunde 40, 45, 50; wastani 45. Yasiyokorogwa: sekunde 170, 180, 190; wastani 180. Hitimisho: katika jaribio hili, kukoroga kulifanya sukari iyeyuke haraka zaidi, takriban mara 4 zaidi kwa wastani. Grafu ya mihimili yenye mihimili miwili (yaliyokorogwa, yasiyokorogwa) inaonyesha hili wazi.",
            "Usalama: tumia maji ya bomba ya joto la chumba au ya uvuguvugu kutoka bombani tu, sukari au chumvi, na vikombe safi. Hakuna jiko, hakuna miali ya moto na hakuna kemikali za kusafishia. Usinywe wala kuonja chochote wakati wa jaribio."
          ],
          steps: ["Andika swali lako na dhanio la \"Kama ..., basi ...\".", "Taja kigeu huru, kigeu tegemezi na vigeu vinavyodhibitiwa.", "Fanya angalau majaribio matatu ya kila kundi na uandike matokeo katika jedwali.", "Tafuta wastani wa kila kundi.", "Chora grafu ya mihimili na uandike hitimisho la sentensi mbili linalobaki ndani ya data yako."],
          words: [["Jaribio moja (trial)", "mzunguko mmoja wa jaribio."], ["Jedwali la data", "safu na nguzo zinazohifadhi matokeo yako."], ["Hitimisho", "kile ambacho matokeo yanaonyesha, kwa sentensi moja au mbili."]],
          slides: [
            { title: "Jaribio lako la haki", bullets: ["Swali na dhanio", "Vigeu huru, tegemezi na vinavyodhibitiwa", "Majaribio matatu kwa kila kundi"] },
            { title: "Andika na ukokotoe", bullets: ["Andika matokeo katika jedwali", "Tafuta wastani wa kila kundi", "Chora grafu ya mihimili"] },
            { title: "Andika hitimisho", bullets: ["Sema data inaonyesha nini", "Baki ndani ya data yako", "Taja njia moja ya kuboresha jaribio"] },
            { title: "Kuwa salama", bullets: ["Maji ya bomba, sukari au chumvi tu", "Hakuna jiko, miali ya moto wala kemikali", "Usionje wala kunywa sampuli"] }
          ],
          tryIt: "Kazi ya mwisho: fanya jaribio lako dogo na salama la jikoni (kukoroga na sukari, au jaribio jingine la badiliko moja kwa maji, sukari au chumvi). Andika swali, dhanio na vigeu, andika majaribio matatu kwa kila kundi katika jedwali, tafuta kila wastani, chora grafu ya mihimili na uandike hitimisho la sentensi mbili. Ongeza mpango wako wa kusoma GED wenye tarehe chini yake na uupime kwa rubriki.",
          youCanNow: "kupanga na kufanya jaribio la haki, kuandika data na kutafuta wastani wake, na kuandika hitimisho linaloungwa mkono na data.",
          quickCheck: [
            { objective: "O3", q: "Katika jaribio la kukoroga, kipi lazima kibaki sawa ili jaribio liwe la haki?", options: ["Kiasi na joto la maji", "Kama maji yanakorogwa", "Muda wa kuyeyuka", "Hitimisho"], answer: 0, why: "Kiasi na joto la maji ni vigeu vinavyodhibitiwa; kukoroga tu ndiko kunakobadilika." },
            { objective: "O4", q: "Wastani wa yaliyokorogwa: sekunde 45. Wastani wa yasiyokorogwa: sekunde 180. Hitimisho lipi linaungwa mkono?", options: ["Kukoroga hufanya sukari iwe tamu zaidi", "Katika jaribio hili, kukoroga kulifanya sukari iyeyuke haraka zaidi", "Chumvi huyeyuka haraka kuliko sukari", "Kukoroga hakuna matokeo yoyote"], answer: 1, why: "Vikombe vilivyokorogwa viliyeyuka haraka zaidi sana, na hitimisho linabaki ndani ya data." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Namba, majedwali na grafu katika sayansi",
        questions: [
          { objective: "O4", q: "Kwenye grafu nyingi za sayansi, nini kinaonyeshwa kwenye mhimili wa chini (mhimili wa x)?", options: ["Kichwa", "Hitimisho", "Kwa kawaida kigeu huru, kilichobadilishwa", "Vipimo vya pesa"], answer: 2, why: "Mhimili wa x kwa kawaida unaonyesha kile mwanasayansi alichobadilisha." },
          { objective: "O4", q: "Grafu ipi ni bora kulinganisha wastani wa urefu wa mimea katika makundi matatu?", options: ["Grafu ya mihimili", "Ramani", "Chati ya duara ya bustani nzima", "Picha"], answer: 0, why: "Grafu za mihimili zinalinganisha makundi kando kwa kando." },
          { objective: "O5", q: "Data: 10, 12, 15, 15, 18. Masafa ni yapi?", options: ["15", "14", "13", "8"], answer: 3, why: "18 - 10 = 8." },
          { objective: "O5", q: "Data: 3, 8, 6, 1, 7. Kati ni ipi?", options: ["3", "6", "7", "5"], answer: 1, why: "Kwa mpangilio: 1, 3, 6, 7, 8. Thamani ya katikati ni 6." },
          { objective: "O5", q: "Basi linasafiri maili 150 kwa saa 3. Kasi = umbali / muda. Kasi ni ipi?", options: ["Maili 450 kwa saa", "Maili 153 kwa saa", "Maili 50 kwa saa", "Maili 147 kwa saa"], answer: 2, why: "150 / 3 = maili 50 kwa saa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Mtihani wa GED: Sayansi",
    questions: [
      { objective: "O1", q: "Kozi hii inakufanyia nini?", options: ["Inakuandaa kwa mtihani wa Sayansi wa GED", "Inakupa cheti cha GED", "Inakufanya mwanasayansi mwenye leseni", "Inachukua nafasi ya mtihani wa GED"], answer: 0, why: "Kozi inakuandaa; GED Testing Service inaendesha mtihani na jimbo lako linatoa cheti." },
      { objective: "O1", q: "Ni mtihani gani mwingine unaolingana na cheti cha sekondari ambao baadhi ya majimbo yanatumia?", options: ["ACT", "CDL", "HiSET", "TOEFL"], answer: 2, why: "HiSET ni mtihani mwingine unaolingana na cheti cha sekondari." },
      { objective: "O1", q: "Ged.com inaorodhesha eneo lipi la ujuzi kwenye mtihani wa Sayansi?", options: ["Kukariri majina ya mifupa", "Kutumia namba na michoro katika sayansi", "Kuchora ramani", "Kuandika mashairi"], answer: 1, why: "Maeneo matatu ni kusoma ili kuelewa, majaribio, na namba na michoro." },
      { objective: "O1", q: "Unapaswa kuangalia wapi muda, ada na sheria za sasa za mtihani wa GED?", options: ["Tangazo la zamani", "Rafiki", "Maoni chini ya video", "Ged.com na ofisi ya elimu ya watu wazima ya jimbo lako"], answer: 3, why: "Sheria na ada hubadilika; vyanzo rasmi vina taarifa za sasa." },
      { objective: "O2", q: "Makala inaeleza neno jipya ndani ya koma mara baada yake. Ufanye nini?", options: ["Ruka makala", "Tumia maana hiyo kuelewa makala", "Kisia maana nyingine", "Litafute kwenye simu yako wakati wa mtihani"], answer: 1, why: "Makala mara nyingi zinaeleza maneno magumu ndani ya maandishi yenyewe." },
      { objective: "O2", q: "Makala inasema nyuki hubeba chavua kati ya maua, jambo linalosaidia mazao mengi kuzaa matunda. Dai lipi linaungwa mkono?", options: ["Nyuki wachache wanaweza kumaanisha matunda machache kutoka kwa baadhi ya mazao", "Nyuki hutengeneza chakula chote", "Nyuki hula matunda", "Maua hayahitaji chavua"], answer: 0, why: "Kama nyuki husaidia mazao kuzaa matunda, nyuki wachache wanaweza kupunguza matunda." },
      { objective: "O2", q: "Ni jibu lipi la kuchagua unapaswa kulifuta?", options: ["Lile ambalo makala inalithibitisha", "Lile lenye namba kutoka kwenye makala", "Lile linaloongeza mambo ambayo makala haitoi kamwe", "Lile linalorudia wazo kuu"], answer: 2, why: "Majibu yanayoongeza mambo yasiyomo katika maandishi hayaungwi mkono." },
      { objective: "O3", q: "Dhanio ni nini?", options: ["Jibu la mwisho", "Kisio kinachoweza kupimwa, mara nyingi \"Kama ..., basi ...\"", "Grafu", "Orodha ya zana"], answer: 1, why: "Dhanio ni kisio kinachoweza kupimwa kuhusu kitakachotokea." },
      { objective: "O3", q: "Jaribio linapima kama muziki unabadilisha jinsi wafanyakazi wanavyofunga masanduku haraka. Kigeu huru ni kipi?", options: ["Idadi ya masanduku yaliyofungwa", "Ukubwa wa masanduku", "Wakati wa siku", "Muziki au bila muziki"], answer: 3, why: "Muziki ndio kitu kimoja kinachobadilishwa kwa makusudi." },
      { objective: "O3", q: "Katika jaribio la muziki, kigeu tegemezi ni kipi?", options: ["Idadi ya masanduku yaliyofungwa", "Muziki au bila muziki", "Majina ya wafanyakazi", "Aina ya utepe"], answer: 0, why: "Masanduku yaliyofungwa ndiyo yanayopimwa." },
      { objective: "O3", q: "Kwa nini kurudia kila jaribio mara kadhaa?", options: ["Ili kutumia vifaa zaidi", "Ili kurefusha jaribio", "Ili matokeo yaaminike zaidi", "Ili kubadilisha vigeu zaidi"], answer: 2, why: "Majaribio mengi zaidi hupunguza uwezekano wa tokeo moja la ajabu kukupotosha." },
      { objective: "O3", q: "Kundi dhibiti ni nini?", options: ["Kundi lenye watu wengi zaidi", "Kundi lisilopata badiliko lolote, kwa kulinganisha", "Wanasayansi wanaoendesha jaribio", "Kundi linalobadilisha vitu viwili"], answer: 1, why: "Kundi dhibiti linaonyesha kinachotokea bila badiliko." },
      { objective: "O4", q: "Grafu ya mstari inaonyesha joto la mgonjwa likishuka kila saa baada ya dawa (kwa mazoezi tu). Mwelekeo ni upi?", options: ["Kushuka", "Kupanda", "Kubaki sawa", "Hakuna data"], answer: 0, why: "Thamani zinashuka kila saa." },
      { objective: "O4", q: "Unapaswa kusoma nini kwanza kwenye grafu?", options: ["Namba ndogo kabisa", "Majibu ya kuchagua tu", "Rangi ya mihimili", "Kichwa, lebo na vipimo"], answer: 3, why: "Lebo na vipimo vinakuambia namba zina maana gani." },
      { objective: "O4", q: "Jedwali lilipima maji ya nyuzi 10, 20 na 30. Kauli ipi inapita mipaka ya data?", options: ["Maji ya nyuzi 30 yalipimwa", "Tokeo la nyuzi 20 limo katika jedwali", "Kwa nyuzi 100 sukari huyeyuka papo hapo", "Jaribio lilitumia viwango vitatu vya joto"], answer: 2, why: "Nyuzi 100 hazikupimwa, kwa hiyo data haiwezi kuonyesha hilo." },
      { objective: "O4", q: "Grafu ipi inaonyesha sehemu za kitu kizima?", options: ["Grafu ya mstari", "Chati ya duara", "Grafu ya nukta (scatter plot)", "Mstari wa namba"], answer: 1, why: "Chati ya duara inagawa kitu kizima kuwa sehemu." },
      { objective: "O5", q: "Data: 5, 7, 7, 9, 12. Modi ni ipi?", options: ["5", "8", "12", "7"], answer: 3, why: "7 inajitokeza mara nyingi zaidi." },
      { objective: "O5", q: "Data: 6, 8, 10, 12. Kati ni ipi?", options: ["9", "8", "10", "36"], answer: 0, why: "Thamani mbili za katikati ni 8 na 10, na (8 + 10) / 2 = 9." },
      { objective: "O5", q: "Gari linasafiri maili 200 kwa saa 4. Kasi = umbali / muda. Kasi ni ipi?", options: ["Maili 800 kwa saa", "Maili 50 kwa saa", "Maili 204 kwa saa", "Maili 196 kwa saa"], answer: 1, why: "200 / 4 = maili 50 kwa saa." },
      { objective: "O5", q: "Data: 20, 30, 40. Wastani ni upi?", options: ["90", "20", "30", "40"], answer: 2, why: "20 + 30 + 40 = 90, na 90 / 3 = 30." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [2, 3, 5, 8, 9, 13, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ufanye jaribio tena.",
    criteria: [
      { name: "Swali na dhanio", objective: "O3", notYet: "Hakuna swali, au dhanio haliwezi kupimwa.", meets: "Swali lililo wazi na dhanio la \"Kama ..., basi ...\".", exceeds: "Dhanio pia linasema kwa nini mwandishi anatarajia tokeo hilo." },
      { name: "Vigeu na jaribio la haki", objective: "O3", notYet: "Vigeu havipo au zaidi ya kitu kimoja kinabadilika.", meets: "Kigeu huru, kigeu tegemezi na angalau vigeu viwili vinavyodhibitiwa vimetajwa; kitu kimoja tu kinabadilika.", exceeds: "Pia lina kundi dhibiti na linaeleza kwa nini kila kigeu kinachodhibitiwa ni muhimu." },
      { name: "Data na hesabu", objective: "O5", notYet: "Chini ya majaribio matatu kwa kila kundi, au wastani si sahihi.", meets: "Majaribio matatu kwa kila kundi katika jedwali, pamoja na wastani sahihi na vipimo.", exceeds: "Pia linatoa masafa ya kila kundi na kueleza jinsi majaribio yalivyotofautiana." },
      { name: "Grafu na hitimisho", objective: "O4", notYet: "Hakuna grafu, au hitimisho linadai zaidi ya data inavyoonyesha.", meets: "Grafu ya mihimili yenye lebo na hitimisho la sentensi mbili linalobaki ndani ya data.", exceeds: "Pia linataja njia moja ya kuboresha jaribio wakati ujao." },
      { name: "Kusoma matokeo", objective: "O2", notYet: "Hitimisho haliendani na namba.", meets: "Hitimisho linaendana na namba katika jedwali.", exceeds: "Linaonyesha namba hasa zinazounga mkono hitimisho." },
      { name: "Mpango wa kusoma", objective: "O1", notYet: "Hakuna mpango wa kusoma, au hakuna tarehe.", meets: "Mpango wa kusoma wenye angalau tarehe moja kila wiki hadi wiki inayolengwa ya mtihani.", exceeds: "Pia una tarehe ya GED Ready au tarehe ya mtihani iliyokwisha kupangwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au zaidi katika kila mstari wa rubriki",
      "Wanafunzi wanaofanya GED Ready au mtihani wa mfano wa bure wa ged.com ndani ya siku 30",
      "Wanafunzi wanaojiandikisha au kufaulu mtihani wa Sayansi wa GED ndani ya siku 90 (kwa kujiripoti)",
      "Programu washirika zinaripoti wanafunzi zaidi wanaoendelea na mafunzo ya kazi katika afya, maabara au kazi za ufundi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, tableti au kompyuta yenye intaneti, au masomo yaliyochapishwa",
      "Karatasi, kalamu na kikokotoo cha kawaida (kikokotoo cha simu kinafaa kwa mazoezi)",
      "Kwa kazi ya mwisho: vikombe viwili safi, maji ya bomba, vipande vya sukari au chumvi, kijiko, na saa ya kupima muda ya simu",
      "Mitihani ya mfano ya bure ya ged.com; GED Ready kama mwanafunzi ataamua kuinunua",
      "Kama dakika 90 kwa masomo na majaribio, pamoja na kama dakika 45 kwa kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Anza na jaribio la awali na mtihani wa mfano wa Sayansi wa bure wa ged.com ili kujua kila mwanafunzi anahitaji zaidi eneo lipi la ujuzi.",
      "Fanyeni jaribio la kukoroga kama onyesho la kikundi kwanza, kisha wanafunzi wabuni jaribio lao la badiliko moja.",
      "Kagua kila mpango wa jaribio kwa usalama kabla wanafunzi hawajaufanya: hakuna vyanzo vya joto, miali ya moto, kemikali wala kuonja.",
      "Fanyeni mazoezi ya kusoma grafu kwa sauti: kichwa, lebo, vipimo, mwelekeo, kisha hitimisho.",
      "Angalia jimbo lako linatumia mtihani gani (GED au HiSET) na shiriki vituo vya mitihani vya karibu na msaada wowote wa ada."
    ]
  }
};
