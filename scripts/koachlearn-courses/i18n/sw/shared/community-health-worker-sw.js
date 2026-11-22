"use strict";

// Koach Learn course (Swahili translation of shared/community-health-worker.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "community-health-worker-sw",
  lang: "sw",
  translationOf: "community-health-worker",
  category: "Workforce Development",
  name: "Misingi ya Mhudumu wa Afya ya Jamii",
  skills: "Kueleza kazi ya CHW na njia ya jimbo lako, Kusikiliza na kutumia lugha rahisi, Kuuliza kuhusu mahitaji kwa heshima, Kutafuta na kukagua huduma za eneo lako, Kutoa rufaa na kufuatilia, Kulinda faragha na mipaka",
  outcome: "kutengeneza mwongozo wa huduma uliokaguliwa kwa ajili ya jamii yako na kuutumia kupanga rufaa ya heshima kwa jirani wa kubuni, kama anavyofanya mhudumu wa afya ya jamii.",
  about: [
    "Wahudumu wa afya ya jamii (CHWs) ni watu wanaoaminika kutoka katika jamii, wanaowasaidia majirani zao kupata huduma za afya na msaada mwingine, kama chakula, makazi, usafiri na bima ya afya. Pia wanaitwa majina kama promotor au promotora, mhudumu wa kufikia jamii (outreach worker), mwongozaji rika (peer navigator) au mwongozaji wa wagonjwa (patient navigator).",
    "CHWs wengi wanaajiriwa kwa sababu wanashiriki lugha, utamaduni au uzoefu wa maisha wa watu wanaowahudumia, wakiwemo watu waliowahi kuwa gerezani, wanajeshi wastaafu na wahamiaji. Uzoefu wako wa maisha una thamani.",
    "Kozi hii inakuandaa kwa mafunzo ya CHW na kazi ya kiwango cha mwanzo. Haikupi cheti. Baadhi ya majimbo yanatoa vyeti kwa CHWs na mengine hayatoi, kwa hiyo utajifunza mahali pa kukagua jimbo lako. Utafanya mazoezi ya kusikiliza, kuuliza kuhusu mahitaji, kutafuta na kukagua msaada wa eneo lako, kutoa rufaa, na kulinda faragha na mipaka.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" na jaribio fupi la maswali mawili. Mwishoni utatengeneza mwongozo wa huduma kwa ajili ya jamii yako na mpango wa rufaa kwa jirani wa kubuni."
  ],
  finalTask: "Tengeneza mwongozo wa huduma wa ukurasa mmoja kwa ajili ya jamii yako, wenye angalau huduma tano za eneo lako (chakula, makazi, huduma za afya, bima ya afya na moja zaidi), kila moja ikiwa imekaguliwa kwenye ukurasa wake rasmi, pamoja na anwani, simu na jinsi ya kuomba. Kisha andika mpango wa rufaa kwa jirani wa kubuni (zoezi tu): hitaji lake kwa maneno yake mwenyewe, huduma uliyochagua na kwa nini, utakachosema, jinsi utakavyomsaidia kuunganishwa, na lini utafuatilia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotaka kuisaidia jamii yao na kulipwa kwa kazi hiyo: wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu, wahamiaji, wajitolea wa makanisa na mashirika yasiyo ya faida, na vijana wazima. Wengi tayari huwasaidia majirani bila kazi rasmi.",
    startingPoint: "Wana ujuzi mzuri wa kushirikiana na watu na wanaijua jamii yao. Wengi hawana mafunzo rasmi ya afya, hawajui jina la kazi ya CHW wala sheria za vyeti, na hawajawahi kukagua huduma kwenye kurasa rasmi.",
    gap: "Kliniki, mipango ya bima ya afya, idara za afya na mashirika yasiyo ya faida huajiri CHWs ili kuwaunganisha watu na huduma. Wanafunzi wanahitaji kujua kazi hii, jinsi ya kusikiliza na kuuliza kuhusu mahitaji kwa heshima, jinsi ya kutafuta na kukagua huduma, jinsi ya kutoa rufaa na kufuatilia, na jinsi ya kulinda faragha na mipaka.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 7)",
      "Vifaa: simu au kompyuta ya maktaba; kila kazi inaweza kufanywa kwenye karatasi",
      "Vyeti vya CHW vinatofautiana kwa kila jimbo; kozi inaelekeza kwenye ukurasa wa jimbo na haitaji saa wala ada",
      "Hakuna ushauri wa matibabu wala wa dawa; maswali ya afya yanaenda kwa wataalamu wa afya",
      "Mazoezi yanatumia watu wa kubuni; hakuna majina halisi wala taarifa binafsi"
    ],
    prerequisites: "Hakuna. Kozi \"Elimu ya Afya: Kuelewa Huduma Yako ya Afya\" ni msaidizi mzuri."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia vyanzo vya kitaifa vya CHW na ukurasa rasmi wa jimbo lako", action: "kueleza kazi ya mhudumu wa afya ya jamii na hatua za kuanza katika jimbo lako", standard: "ukitaja angalau kazi 3 za CHW na kama jimbo lako linatoa vyeti kwa CHWs" },
    { id: "O2", condition: "Katika mazungumzo ya mazoezi na jirani wa kubuni", action: "kutumia usikilizaji makini, lugha rahisi na teach-back (kumwomba arudie)", standard: "ukirudia alichosema na kuhakikisha ameelewa, bila maneno magumu ya kitaalamu" },
    { id: "O3", condition: "Ukitumia orodha fupi ya mahitaji ya kijamii", action: "kumuuliza jirani wa kubuni kuhusu mahitaji yake kwa ridhaa na heshima", standard: "ukiomba ruhusa kwanza na kuuliza kuhusu chakula, makazi, usafiri, huduma za nyumbani (umeme, maji, gesi) na usalama" },
    { id: "O4", condition: "Ukipewa hitaji kama chakula au kliniki", action: "kutafuta huduma ya eneo lako na kuikagua kwenye ukurasa wake rasmi", standard: "ukiwa na anwani, simu, saa za kazi na jinsi ya kuomba, vyote vimethibitishwa kwenye ukurasa rasmi" },
    { id: "O5", condition: "Ukipewa hali inayohitaji rufaa", action: "kupanga rufaa na ufuatiliaji huku ukilinda faragha na mipaka", standard: "ukiwa na tarehe ya kufuatilia, ridhaa ya kushiriki taarifa, na hatua sahihi kwa dharura" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi ya CHW na kuungana na watu",
      lessons: [
        {
          title: "Wahudumu wa afya ya jamii hufanya nini na jinsi ya kuanza",
          objectives: ["O1"],
          minutes: 5,
          goal: "Eleza kazi ya CHW na utafute sheria za jimbo lako kuhusu CHWs.",
          text: [
            "Chama cha Afya ya Umma cha Marekani (APHA) kinamwita mhudumu wa afya ya jamii mfanyakazi wa mstari wa mbele wa afya ya umma anayeaminiwa na jamii, au anayeijua jamii vizuri. CHWs huwaunganisha watu na huduma za afya na za kijamii na husaidia huduma ziendane na utamaduni wa watu.",
            "Ofisi ya Takwimu za Kazi ya Marekani (BLS) inasema CHWs hufanya kazi ya kufikia jamii kama kutembelea nyumba, husaidia kupanga huduma, huwaunganisha watu na msaada wa usafiri, makazi na chakula, na wanaweza kufanya uchunguzi wa msingi wa afya. Baraza la Kitaifa la C3 (National C3 Council) linaorodhesha kazi kumi za CHW, zikiwemo kufikia jamii, elimu ya afya, kupanga huduma na kuongoza watu katika mfumo, utetezi, na ukocha na msaada wa kijamii.",
            "Kwa kawaida kiwango cha chini ni cheti cha shule ya sekondari (high school diploma), pamoja na mafunzo kazini. Baadhi ya majimbo yanahitaji cheti, ambacho kinaweza kuhitaji programu ya mafunzo iliyoidhinishwa. Kagua idara ya afya ya jimbo lako, bodi ya wauguzi au idara ya huduma za kijamii.",
            "Kozi hii inakuandaa. Haikupi cheti. Waajiri ni pamoja na kliniki za jamii, hospitali, idara za afya, mipango ya bima ya afya na mashirika yasiyo ya faida."
          ],
          steps: ["Tafuta jina la jimbo lako pamoja na maneno \"community health worker certification\".", "Fungua tokeo linalotoka kwenye tovuti ya serikali ya jimbo lako.", "Andika kama jimbo lako linatoa vyeti kwa CHWs na linahitaji nini.", "Angalia matangazo mawili ya kazi ya CHW karibu nawe na uorodheshe majukumu."],
          words: [["Mhudumu wa afya ya jamii (CHW)", "mwanajamii anayeaminika anayewasaidia watu kupata huduma za afya na huduma nyingine."], ["Promotor au promotora", "jina la Kihispania linalotumika sana kwa mhudumu wa afya ya jamii."], ["Kufikia jamii (outreach)", "kwenda mahali watu walipo, kama nyumbani, kwenye matukio au makanisani, kutoa taarifa na kutoa msaada."], ["Cheti (certification)", "kumbukumbu rasmi kwamba umetimiza masharti ya mafunzo na mtihani ya jimbo au ya kikundi."]],
          slides: [
            { title: "CHW ni...", bullets: ["Mwanajamii anayeaminika", "Kiungo kwa huduma za afya na huduma nyingine", "Pia anaitwa promotor, outreach worker, navigator"] },
            { title: "CHWs hufanya nini", bullets: ["Kufikia jamii na kutembelea nyumba", "Elimu ya afya kwa maneno rahisi", "Kuunganisha watu na chakula, makazi, usafiri na huduma", "Utetezi na msaada"] },
            { title: "Kuanza", bullets: ["Kwa kawaida cheti cha sekondari pamoja na mafunzo kazini", "Baadhi ya majimbo yanatoa vyeti kwa CHWs", "Kagua ukurasa wa idara ya afya ya jimbo lako"] },
            { title: "Kozi hii inakuandaa", bullets: ["Haikupi cheti", "Waajiri: kliniki, hospitali, mipango ya bima, mashirika yasiyo ya faida"] }
          ],
          sources: [
            { name: "APHA: Community Health Workers Section", url: "https://www.apha.org/apha-communities/member-sections/community-health-workers" },
            { name: "US Bureau of Labor Statistics: Community Health Workers", url: "https://www.bls.gov/ooh/community-and-social-service/community-health-workers.htm" },
            { name: "National C3 Council: CHW Roles and Competencies", url: "https://www.c3council.org/roles-competencies" }
          ],
          tryIt: "Tafuta kama jimbo lako linatoa vyeti kwa wahudumu wa afya ya jamii, ukitumia ukurasa rasmi wa jimbo lako. Kisha tafuta tangazo moja la kazi ya CHW karibu nawe. Kwenye karatasi, andika sheria ya jimbo lako, majukumu matatu kutoka kwenye tangazo la kazi, na njia moja ambayo uzoefu wako wa maisha unaendana na kazi hii.",
          youCanNow: "kueleza kazi ya mhudumu wa afya ya jamii na kupata sheria za jimbo lako kwenye ukurasa rasmi.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni sehemu kuu ya kazi ya CHW?", options: ["Kuandika dawa (prescription)", "Kufanya upasuaji", "Kugundua ugonjwa", "Kuwaunganisha watu na huduma za afya na huduma nyingine"], answer: 3, why: "CHWs huwaunganisha watu na huduma; wataalamu wa afya ndio hugundua magonjwa na kuandika dawa." },
            { objective: "O1", q: "Je, majimbo yote yanahitaji cheti cha CHW?", options: ["Ndiyo, ni sawa kila mahali", "Hapana; baadhi yanahitaji, kwa hiyo kagua ukurasa wa jimbo lako", "Kwa madaktari tu", "Wakati wa kiangazi tu"], answer: 1, why: "BLS inasema baadhi ya majimbo yanahitaji cheti; sheria zinatofautiana kwa kila jimbo." }
          ]
        },
        {
          title: "Kusikiliza na kuzungumza kwa maneno rahisi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tumia usikilizaji makini, maneno rahisi na teach-back katika mazungumzo ya mazoezi.",
          text: [
            "Watu husema zaidi wanapohisi wanasikilizwa. Usikilizaji makini ni kumpa mtu umakini wako wote, kumwacha amalize, na kurudia ulichosikia: \"Kwa hiyo kufika kliniki ni vigumu kwa sababu basi halianzi mapema. Nimeelewa sawa?\"",
            "Tumia lugha rahisi. Sema \"sukari ya damu\" badala ya \"glucose\", na \"karatasi inayoonyesha unapoishi\" badala ya \"uthibitisho wa makazi\". Tumia sentensi fupi na wazo moja kwa wakati. Mpe mtu mkalimani anapopendelea lugha nyingine.",
            "Teach-back hukagua kama ulieleza vizuri. Mwombe mtu aseme mpango kwa maneno yake mwenyewe: \"Ili nijue kama nimeeleza vizuri, unaweza kuniambia utapeleka nini kwenye kituo cha chakula (food pantry)?\" Asipoweza, kinachohitaji kurekebishwa ni maelezo yako, si kumbukumbu yake.",
            "Heshima ni kutohukumu. Uliza kuhusu kile kilicho muhimu kwa mtu huyo na kile alichojaribu tayari. Yeye ndiye mtaalamu wa maisha yake mwenyewe."
          ],
          steps: ["Mpe mtu umakini wako wote na umwache amalize.", "Rudia ulichosikia na uulize kama umeelewa sawa.", "Eleza hatua inayofuata kwa maneno rahisi, wazo moja kwa wakati.", "Tumia teach-back: mwombe aseme mpango kwa maneno yake mwenyewe."],
          words: [["Usikilizaji makini (active listening)", "kusikiliza kwa umakini wote na kurudia ulichosikia."], ["Lugha rahisi", "maneno na sentensi fupi za kawaida zinazoeleweka kwa urahisi."], ["Teach-back", "kumwomba mtu aeleze mpango kwa maneno yake mwenyewe ili kukagua kama ulieleza vizuri."], ["Maneno ya kitaalamu (jargon)", "maneno maalum yanayotumiwa na kikundi fulani ambayo wengine huenda wasiyaelewe."]],
          slides: [
            { title: "Usikilizaji makini", bullets: ["Umakini wote, mwache amalize", "Rudia ulichosikia", "\"Nimeelewa sawa?\""] },
            { title: "Lugha rahisi", bullets: ["\"Sukari ya damu\", si \"glucose\"", "Sentensi fupi, wazo moja kwa wakati", "Toa mkalimani"] },
            { title: "Teach-back", bullets: ["Mwombe aseme mpango kwa njia yake", "Kama si wazi, rekebisha maelezo yako", "Inakukagua wewe, si yeye"] }
          ],
          tryIt: "Igiza na rafiki au mwanafamilia, au andika kwenye karatasi. Jirani wako wa kubuni anasema: \"Ninakosa miadi yangu ya kliniki kila mara kwa sababu naanza kazi mapema na basi linachelewa.\" Andika sentensi ya kurudia alichosema, hatua inayofuata kwa lugha rahisi, na swali la teach-back.",
          youCanNow: "kusikiliza kwa makini, kueleza kwa maneno rahisi na kukagua uelewa kwa teach-back.",
          quickCheck: [
            { objective: "O2", q: "Lipi ni swali la teach-back?", options: ["\"Umeelewa?\"", "\"Kuna maswali? Hakuna? Vizuri.\"", "\"Unaweza kuniambia kwa maneno yako utapeleka nini?\"", "\"Umeelewa, sivyo?\""], answer: 2, why: "Teach-back humwomba mtu aseme mpango kwa maneno yake mwenyewe." },
            { objective: "O2", q: "Ipi ni lugha rahisi?", options: ["\"Sukari ya damu\"", "\"Kielezo cha glycemic\"", "\"Hyperglycemia\"", "\"Uvumilivu wa glucose\""], answer: 0, why: "Maneno mafupi ya kawaida ndiyo rahisi zaidi kuelewa." }
          ]
        },
        {
          title: "Kuuliza kuhusu mahitaji kwa heshima",
          objectives: ["O3"],
          minutes: 5,
          goal: "Muulize jirani wa kubuni kuhusu mahitaji yake kwa ridhaa, ukitumia orodha fupi.",
          text: [
            "Afya inategemea zaidi ya kumwona daktari. Chakula, mahali salama pa kuishi, pesa za huduma za nyumbani (umeme, maji, gesi), usafiri na usalama, vyote vinaathiri afya. Mara nyingi haya huitwa mahitaji ya kijamii.",
            "Kliniki na programu nyingi hutumia fomu fupi ya uchunguzi. Mwajiri wako atakupa fomu yake. Mada za kawaida ni: chakula, makazi, huduma za nyumbani, usafiri na usalama wa mtu binafsi.",
            "Kila mara omba ruhusa kwanza na ueleze kwa nini unauliza: \"Nauliza kila mtu maswali machache kuhusu mambo kama chakula na makazi, ili nikueleze msaada unaoweza kukufaa. Unaweza kuruka swali lolote.\" Mwache mtu achague anachotaka kusema.",
            "Andika tu kile unachohitaji, kwenye fomu ya programu, si kwenye simu yako mwenyewe. Mtu akisema hayuko salama nyumbani, au akizungumzia kujidhuru, fuata hatua za usalama za programu yako mara moja (angalia Somo la 6)."
          ],
          steps: ["Omba ruhusa na useme kwa nini unauliza.", "Sema anaweza kuruka swali lolote.", "Uliza kuhusu chakula, makazi, huduma za nyumbani, usafiri na usalama.", "Uliza ni hitaji gani lililo muhimu zaidi kwake sasa hivi.", "Andika tu kinachohitajika, kwenye fomu ya programu."],
          words: [["Mahitaji ya kijamii", "mahitaji ya kila siku kama chakula, makazi na usafiri yanayoathiri afya."], ["Uchunguzi (screening)", "maswali machache mafupi ya kujua msaada ambao mtu anaweza kuhitaji."], ["Ridhaa (consent)", "ruhusa anayotoa mtu baada ya kuelewa unachomwomba."]],
          slides: [
            { title: "Afya ni zaidi ya kliniki", bullets: ["Chakula na makazi", "Huduma za nyumbani na usafiri", "Usalama"] },
            { title: "Omba ruhusa kwanza", bullets: ["Sema kwa nini unauliza", "Anaweza kuruka swali lolote", "Yeye anachagua cha kusema"] },
            { title: "Anza na kilicho muhimu zaidi", bullets: ["\"Lipi kati ya haya ni muhimu zaidi sasa hivi?\"", "Andika tu kinachohitajika", "Tumia fomu ya programu, si simu yako"] }
          ],
          tryIt: "Andika maelezo mafupi ya uchunguzi (zoezi tu): sentensi yako ya kuomba ruhusa, swali moja rahisi kila moja kuhusu chakula, makazi, huduma za nyumbani, usafiri na usalama, na swali la kumalizia kuhusu kilicho muhimu zaidi. Yasome kwa sauti ili uhakikishe yanasikika ya upole na wazi.",
          youCanNow: "kumuuliza mtu kuhusu mahitaji yake kwa ridhaa na heshima, ukitumia orodha fupi.",
          quickCheck: [
            { objective: "O3", q: "Unafanya nini kabla ya kumuuliza mtu kuhusu mahitaji yake?", options: ["Kuanza na swali gumu zaidi", "Kuomba ruhusa na kusema kwa nini unauliza", "Kuomba namba yake ya Social Security", "Kuandika majibu yake kwenye simu yako mwenyewe"], answer: 1, why: "Ridhaa na sababu iliyo wazi hujenga uaminifu kabla ya uchunguzi." },
            { objective: "O3", q: "Lipi ni hitaji la kijamii?", options: ["Kipindi cha TV unachokipenda", "Chapa ya viatu", "Kufika kliniki wakati basi halifanyi kazi", "Rangi unayoipenda"], answer: 2, why: "Usafiri ni hitaji la kijamii linaloathiri afya." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi ya CHW na kuungana na watu",
        questions: [
          { objective: "O1", q: "Lipi ni jina jingine la mhudumu wa afya ya jamii?", options: ["Promotor au promotora", "Daktari wa upasuaji", "Mfamasia", "Hakimu"], answer: 0, why: "Promotor au promotora ni jina la kawaida la CHWs, hasa katika jamii zinazozungumza Kihispania." },
          { objective: "O1", q: "Unakagua wapi kama jimbo lako linatoa vyeti kwa CHWs?", options: ["Kikundi cha mitandao ya kijamii", "Makisio ya rafiki", "Ukurasa wa idara ya afya au bodi ya jimbo lako", "Tangazo la mtandaoni"], answer: 2, why: "Ukurasa rasmi wa kila jimbo unaeleza sheria zake." },
          { objective: "O2", q: "Usikilizaji makini ni nini?", options: ["Kuongea kuliko mtu mwingine", "Kupanga jibu lako wakati anaongea", "Kumpa umakini wote na kurudia ulichosikia", "Kuangalia simu yako huku unasikiliza"], answer: 2, why: "Usikilizaji makini ni umakini wote na kurudia ulichosikia." },
          { objective: "O2", q: "Jirani hawezi kukueleza mpango tena. Hiyo ina maana gani?", options: ["Hajitahidi", "Maelezo yako yanahitaji kuwa wazi zaidi", "Hapaswi kupata msaada", "Hakuna; endelea"], answer: 1, why: "Teach-back hukagua maelezo yako; eleza tena kwa maneno rahisi zaidi." },
          { objective: "O3", q: "Mtu hataki kujibu swali kuhusu makazi. Wewe:", options: ["Unalazimisha ajibu", "Unaandika makisio", "Unamwambia hawezi kupata msaada", "Unaheshimu uamuzi wake na kuendelea"], answer: 3, why: "Watu wanaweza kuruka swali lolote; ridhaa ni ya hiari." }
        ]
      }
    },
    {
      name: "Sura 2: Kuwaunganisha watu na msaada",
      lessons: [
        {
          title: "Kutafuta na kukagua huduma za eneo lako",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tafuta huduma ya eneo lako kwa hitaji fulani na uikague kwenye ukurasa wake rasmi.",
          text: [
            "Orodha ya huduma ya CHW ni nzuri kama ukaguzi wake wa mwisho tu. Programu huhama, hubadilisha saa na huishiwa pesa. Kila mara kagua huduma kwenye ukurasa wake rasmi au kwa kupiga simu kabla ya kumpa mtu rufaa.",
            "Mahali pazuri pa kuanzia: piga 211, huduma ya bure na ya siri inayowaunganisha watu na msaada wa eneo lao. Ukurasa wa mafao (benefits) wa USA.gov huwasaidia watu kupata programu za serikali za chakula, makazi, huduma za afya na bili za huduma za nyumbani. Find a Health Center ya HRSA inaonyesha vituo vya afya vya jamii. HealthCare.gov inaeleza bima ya afya na jinsi ya kuomba.",
            "Kwa kila huduma, andika: jina, inachotoa, nani anaweza kuitumia, anwani, simu, saa za kazi, jinsi ya kuomba, cha kubeba, lugha zinazotumika na tarehe uliyokagua.",
            "Kama tovuti si rasmi, tafuta ukurasa rasmi kabla ya kuiamini. Tovuti nyingi bandia hutoza ada kwa fomu ambazo ni za bure."
          ],
          steps: ["Taja hitaji, kwa mfano chakula au kliniki.", "Tafuta kupitia 211, USA.gov, Find a Health Center ya HRSA, au tovuti ya shirika lenyewe.", "Fungua ukurasa rasmi na ukague anwani, simu, saa za kazi na jinsi ya kuomba.", "Iandike pamoja na tarehe uliyokagua."],
          words: [["Huduma (resource)", "programu au huduma inayosaidia hitaji fulani, kama kituo cha chakula au kliniki."], ["211", "huduma ya simu ya bure na ya siri inayowaunganisha watu na msaada wa eneo lao."], ["Kituo cha afya cha jamii", "kliniki inayowahudumia watu wawe na bima au wasiwe nayo."], ["Ustahiki (eligibility)", "sheria kuhusu nani anaweza kutumia programu."]],
          slides: [
            { title: "Kagua kabla ya kutoa rufaa", bullets: ["Programu huhama na kubadilisha saa", "Kagua ukurasa rasmi au piga simu", "Andika tarehe uliyokagua"] },
            { title: "Mahali pa kuanzia", bullets: ["Piga 211", "Ukurasa wa mafao wa USA.gov", "HRSA Find a Health Center", "HealthCare.gov kwa bima ya afya"] },
            { title: "Andika", bullets: ["Jina, inachotoa, nani anaweza kuitumia", "Anwani, simu, saa za kazi", "Jinsi ya kuomba, cha kubeba, lugha"] },
            { title: "Jihadhari na tovuti bandia", bullets: ["Tafuta ukurasa rasmi kwanza", "Fomu nyingi ni za bure; usiwalipe watu usiowajua"] }
          ],
          sources: [
            { name: "211: Find your local 211", url: "https://www.211.org/" },
            { name: "USA.gov: Government benefits", url: "https://www.usa.gov/benefits" },
            { name: "HRSA: Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" },
            { name: "HealthCare.gov", url: "https://www.healthcare.gov/" }
          ],
          tryIt: "Chagua mahitaji mawili: chakula na kliniki ya gharama nafuu. Tafuta huduma moja halisi kwa kila moja karibu nawe, ikague kwenye ukurasa wake rasmi, na uandike jina, anwani, simu, saa za kazi, jinsi ya kuomba na tarehe ya leo.",
          youCanNow: "kutafuta huduma ya eneo lako na kuikagua kwenye ukurasa wake rasmi kabla ya kuishiriki.",
          quickCheck: [
            { objective: "O4", q: "Kabla ya kumpa mtu rufaa kwenda kituo cha chakula, unafanya nini?", options: ["Kukagua saa zake na anwani kwenye ukurasa wake rasmi au kwa simu", "Kuamini orodha ya miaka mitatu iliyopita", "Kukisia saa zake", "Kumpeleka bila kukagua"], answer: 0, why: "Huduma hubadilika, kwa hiyo kagua ukurasa rasmi au piga simu kwanza." },
            { objective: "O4", q: "Huduma ipi inawaunganisha watu na msaada wa eneo lao kwa simu?", options: ["411", "211", "311 katika jiji moja tu", "Namba yoyote kutoka kwenye tangazo"], answer: 1, why: "211 ni huduma ya bure na ya siri inayowaunganisha watu na msaada wa eneo lao." }
          ]
        },
        {
          title: "Kutoa rufaa na kufuatilia",
          objectives: ["O5", "O4"],
          minutes: 5,
          goal: "Panga rufaa ya karibu (warm referral) kwa ridhaa na tarehe ya kufuatilia.",
          text: [
            "Rufaa ni kumuunganisha mtu na huduma. Rufaa ya karibu (\"warm\" referral) ina maana unasaidia kufanya muunganiko, kwa mfano kupiga simu kliniki pamoja, badala ya kumpa namba ya simu tu.",
            "Uliza kabla ya kushiriki chochote kuhusu mtu: \"Je, ni sawa nikiiambia kliniki kwamba unahitaji miadi ya jioni?\" Shiriki tu kinachohitajika, na ufuate fomu ya ridhaa ya programu yako.",
            "Saidia kuondoa vikwazo. Je, mtu ana usafiri, mtu wa kuwaangalia watoto, karatasi anazohitaji, simu inayofanya kazi? Andika atakachobeba na lini atakwenda.",
            "Fuatilia. Weka tarehe ya kuwasiliana: \"Nitakupigia Ijumaa kujua ilivyokwenda.\" Kama huduma haikufaa, tafuta nyingine. Andika matokeo kwenye kumbukumbu za programu."
          ],
          steps: ["Mkubaliane na mtu kuhusu hitaji na huduma.", "Pata ridhaa kabla ya kushiriki taarifa yoyote.", "Fanya muunganiko wa karibu, kama kupiga simu pamoja.", "Panga kuhusu vikwazo: usafiri, kuangalia watoto, karatasi.", "Weka tarehe ya kufuatilia na uitimize, kisha andika matokeo."],
          words: [["Rufaa (referral)", "kumuunganisha mtu na huduma inayoweza kumsaidia."], ["Rufaa ya karibu (warm referral)", "kumsaidia mtu kuungana moja kwa moja, kama kupiga simu pamoja, si kumpa namba tu."], ["Kikwazo", "kitu kinachofanya iwe vigumu kupata msaada, kama kukosa usafiri au mtu wa kuwaangalia watoto."], ["Ufuatiliaji (follow-up)", "kuwasiliana tena baadaye kujua kama msaada ulifanya kazi."]],
          slides: [
            { title: "Rufaa ya karibu", bullets: ["Saidia kufanya muunganiko", "Pigeni simu pamoja inapowezekana", "Si namba ya simu tu"] },
            { title: "Ridhaa kwanza", bullets: ["Uliza kabla ya kushiriki chochote", "Shiriki tu kinachohitajika", "Tumia fomu ya ridhaa ya programu"] },
            { title: "Ondoa vikwazo", bullets: ["Usafiri na kuangalia watoto", "Karatasi za kubeba", "Simu inayofanya kazi"] },
            { title: "Fuatilia", bullets: ["Weka tarehe", "Ilifanya kazi? Kama sivyo, jaribu nyingine", "Andika matokeo"] }
          ],
          tryIt: "Zoezi tu: jirani wako wa kubuni, Bi. Carter, anahitaji chakula kwa watoto wake wawili na hana gari. Ukitumia huduma ya chakula uliyokagua katika Somo la 4, andika mpango wa rufaa ya karibu: utakachosema, swali la ridhaa, kikwazo kimoja na jinsi utakavyosaidia nacho, na tarehe ya kufuatilia.",
          youCanNow: "kupanga rufaa ya karibu kwa ridhaa, kusaidia na vikwazo na kuweka tarehe ya kufuatilia.",
          quickCheck: [
            { objective: "O5", q: "Nini kinafanya rufaa iwe \"ya karibu\" (warm)?", options: ["Kumpa namba ya simu tu", "Kumwambia atafute mtandaoni", "Kumsaidia kuungana, kama kupiga simu pamoja", "Kumtumia kipeperushi"], answer: 2, why: "Rufaa ya karibu humsaidia mtu kuungana moja kwa moja." },
            { objective: "O5", q: "Unataka kuiambia kliniki kuhusu hali ya jirani. Kwanza wewe:", options: ["Unashiriki kila kitu unachojua", "Unamwomba jirani ridhaa", "Unaiweka kwenye kikundi cha ujumbe", "Unaiambia familia ya jirani"], answer: 1, why: "Ridhaa huja kabla ya kushiriki taarifa yoyote." }
          ]
        },
        {
          title: "Faragha, mipaka, hatua za dharura na mwongozo wako wa huduma",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Linda faragha na mipaka, fuata hatua za dharura, na utengeneze mwongozo wako wa huduma.",
          text: [
            "Watu wanakuamini na mambo yao ya siri. Taarifa za afya zinalindwa na sheria ya serikali kuu ya Marekani inayoitwa HIPAA unapofanya kazi kwa kliniki, hospitali au mpango wa bima ya afya, na kila programu nzuri huweka taarifa za watu kuwa siri. Usiwazungumzie watu unaowahudumia na marafiki, usiweke habari zao mtandaoni wala usiweke maelezo kwenye simu yako mwenyewe.",
            "Mipaka huifanya kazi iwe na afya. Wewe ni mwongozaji, si daktari, wakili wala benki. Usitoe ushauri wa matibabu wala wa kisheria, usikopeshe pesa wala usiahidi usichoweza kutimiza. Maswali ya afya yanaenda kwa wataalamu wa afya.",
            "Jua hatua zako za dharura. Mtu akiwa hatarini sasa hivi, piga 911. Mtu akizungumzia kujiua au yuko katika dharura ya kihisia, anaweza kupiga simu au kutuma ujumbe kwa 988, Suicide and Crisis Lifeline (laini ya msaada wa kujiua na dharura), au kuzungumza mtandaoni. Mwambie msimamizi wako mara moja na ufuate mpango wa usalama wa programu yako.",
            "Jitunze wewe pia. Kuwasaidia watu wenye maisha magumu ni kazi nzito. Zungumza na msimamizi wako, pumzika na tumia msaada wako mwenyewe. Sasa uko tayari kutengeneza mwongozo wako wa huduma na mpango wa rufaa."
          ],
          steps: ["Weka taarifa kuwa siri: usizungumze, usiweke mtandaoni, usiandike kwenye simu yako.", "Baki katika nafasi yako: usitoe ushauri wa matibabu wala wa kisheria, usikopeshe pesa.", "Dharura: 911 kwa hatari sasa hivi; 988 kwa kujiua au dharura ya kihisia; mwambie msimamizi wako.", "Tengeneza mwongozo wako wa huduma wenye angalau huduma tano zilizokaguliwa na mpango wa rufaa."],
          words: [["HIPAA", "sheria ya serikali kuu ya Marekani inayolinda faragha ya taarifa za afya zinazoshikiliwa na watoa huduma za afya na mipango ya bima ya afya."], ["Mpaka", "kikomo kilicho wazi cha unachofanya katika uhusiano wa kazi."], ["988", "Suicide and Crisis Lifeline (laini ya msaada wa kujiua na dharura): piga simu, tuma ujumbe au zungumza mtandaoni."], ["Kujitunza", "mambo unayofanya ili kubaki na afya na kuweza kuendelea kusaidia."]],
          slides: [
            { title: "Faragha", bullets: ["Usiwazungumzie wala kuwaweka mtandaoni unaowahudumia", "Usiandike maelezo kwenye simu yako mwenyewe", "HIPAA inalinda taarifa za afya"] },
            { title: "Mipaka", bullets: ["Wewe ni mwongozaji, si daktari wala wakili", "Usikopeshe pesa wala kutoa ahadi kubwa", "Maswali ya afya yanaenda kwa wataalamu wa afya"] },
            { title: "Hatua za dharura", bullets: ["Hatari sasa hivi: 911", "Kujiua au dharura ya kihisia: piga simu au tuma ujumbe kwa 988", "Mwambie msimamizi wako mara moja"] },
            { title: "Mwongozo wako wa huduma", bullets: ["Huduma 5 au zaidi zilizokaguliwa", "Anwani, simu, saa za kazi, jinsi ya kuomba, tarehe ya ukaguzi", "Pamoja na mpango wa rufaa kwa jirani wa kubuni"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "MedlinePlus: Patient Rights", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mwongozo wako wa huduma za jamii wa ukurasa mmoja wenye angalau huduma tano (chakula, makazi, huduma za afya, bima ya afya na moja zaidi), kila moja ikiwa imekaguliwa kwenye ukurasa wake rasmi, pamoja na anwani, simu, saa za kazi, jinsi ya kuomba na tarehe uliyokagua. Kisha andika mpango wa rufaa kwa jirani wa kubuni: hitaji lake kwa maneno yake, huduma, utakachosema, swali la ridhaa, kikwazo kimoja na tarehe ya kufuatilia.",
          youCanNow: "kutengeneza mwongozo wa huduma uliokaguliwa na kupanga rufaa inayolinda faragha, mipaka na usalama.",
          quickCheck: [
            { objective: "O5", q: "Mtu unayemhudumia anasema anafikiria kujiua. Unafanya nini?", options: ["Kuahidi kuliweka siri", "Kubadilisha mada", "Kumwambia alale kwanza afikirie", "Kumuunganisha na 988 (au 911 kama yuko hatarini sasa hivi) na kumwambia msimamizi wako"], answer: 3, why: "Fuata hatua za dharura: 988 au 911, na mwambie msimamizi wako mara moja." },
            { objective: "O5", q: "Mtu anakuomba umkopeshe $100. Unafanya nini?", options: ["Kukataa kwa upole na kumsaidia kupata huduma kwa hitaji lake", "Kumkopesha kimya kimya", "Kumpa kadi yako", "Kumpuuza"], answer: 0, why: "Kukopesha pesa ni kuvuka mpaka; badala yake msaidie kuungana na huduma." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuwaunganisha watu na msaada",
        questions: [
          { objective: "O4", q: "Ipi ni njia bora ya kukagua saa za kazi za kliniki?", options: ["Kipeperushi cha miaka mitatu iliyopita", "Kukisia", "Ukurasa rasmi wa kliniki au kupiga simu", "Maoni yoyote mtandaoni"], answer: 2, why: "Ukurasa rasmi au simu hutoa taarifa za sasa." },
          { objective: "O4", q: "Zana ipi hutafuta vituo vya afya vya jamii?", options: ["Find a Health Center ya HRSA", "App ya filamu", "Tovuti ya manunuzi", "App ya hali ya hewa"], answer: 0, why: "Find a Health Center ya HRSA inaorodhesha vituo vya afya vya jamii." },
          { objective: "O5", q: "Unapaswa kufuatilia lini baada ya rufaa?", options: ["Kamwe", "Akikupigia tu", "Katika tarehe mliyoweka pamoja", "Baada ya mwaka mmoja"], answer: 2, why: "Kuweka tarehe ya kufuatilia kunahakikisha msaada ulifanya kazi." },
          { objective: "O5", q: "Unapaswa kuweka wapi maelezo kuhusu watu unaowahudumia?", options: ["Kwenye simu yako binafsi", "Kwenye kikundi cha ujumbe", "Kwenye mitandao ya kijamii", "Kwenye fomu au kumbukumbu za programu"], answer: 3, why: "Maelezo yanapaswa kuwa kwenye kumbukumbu za programu ili yabaki siri." },
          { objective: "O5", q: "Mtu anakuomba ushauri wa matibabu kuhusu dawa yake. Wewe:", options: ["Unamwambia ungetumia nini wewe", "Unamsaidia kumuuliza mtaalamu wake wa afya au mfamasia", "Unatafuta mtandaoni na kumwambia afanye nini", "Unasema dawa si muhimu"], answer: 1, why: "CHWs hubaki katika nafasi yao; maswali ya afya yanaenda kwa wataalamu wa afya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Mhudumu wa Afya ya Jamii",
    questions: [
      { objective: "O1", q: "Mhudumu wa afya ya jamii anaelezwa vizuri zaidi kama:", options: ["Mwanajamii anayeaminika anayewaunganisha watu na huduma", "Daktari", "Afisa wa polisi", "Mtayarishaji wa kodi"], answer: 0, why: "CHWs ni wafanyakazi wa mstari wa mbele wanaoaminika wanaowaunganisha watu na huduma." },
      { objective: "O1", q: "Ipi ni moja ya kazi za CHW zilizoorodheshwa na National C3 Council?", options: ["Kufanya upasuaji", "Kufikia jamii", "Kuandika dawa", "Kuendesha benki"], answer: 1, why: "Kufikia jamii ni moja ya kazi kumi za CHW." },
      { objective: "O1", q: "Kozi hii inafanya nini?", options: ["Inakupa cheti cha CHW", "Inakupa leseni ya jimbo", "Inachukua nafasi ya mafunzo ya mwajiri wako", "Inakuandaa kwa mafunzo ya CHW na kazi ya kiwango cha mwanzo"], answer: 3, why: "Kozi inakuandaa; baadhi ya majimbo yanatoa vyeti kwa CHWs kando." },
      { objective: "O1", q: "Kwa nini CHWs wengi wanaajiriwa?", options: ["Wanashiriki lugha, utamaduni au uzoefu wa maisha wa jamii", "Wana shahada za udaktari", "Hawazungumzi na watu kamwe", "Wanafanya kazi mtandaoni tu"], answer: 0, why: "Uzoefu wa pamoja hujenga uaminifu na watu wanaohudumiwa na CHWs." },
      { objective: "O2", q: "Ipi ni sentensi nzuri ya kurudia alichosema mtu?", options: ["\"Ulipaswa kupanga vizuri zaidi.\"", "\"Kwa hiyo basi linachelewa na hilo linakufanya ukose miadi. Ni sawa?\"", "\"Hilo si tatizo langu.\"", "\"Kila mtu ana tatizo hilo.\""], answer: 1, why: "Kurudia kunaonyesha ulisikia na kunamruhusu mtu akusahihishe." },
      { objective: "O2", q: "Teach-back hukagua:", options: ["Akili ya mtu", "Jinsi anavyoongea haraka", "Kama ulieleza vizuri", "Alama yake ya mtihani wa kusoma"], answer: 2, why: "Teach-back hukagua maelezo yako, si mtu." },
      { objective: "O2", q: "Jirani anapendelea kuzungumza Kihispania na wewe huzungumzi. Wewe:", options: ["Unaongea Kiingereza kwa sauti kubwa zaidi", "Unaruka ziara", "Unamtumia mtoto wake kutafsiri mambo ya matibabu", "Unatoa mkalimani aliyehitimu"], answer: 3, why: "Kutoa mkalimani kunamwezesha mtu kuelewa na kueleweka." },
      { objective: "O3", q: "Uchunguzi wa mahitaji ya kijamii kwa kawaida huuliza mada zipi?", options: ["Chakula, makazi, huduma za nyumbani, usafiri na usalama", "Vyakula na muziki unaopenda", "Michezo na mambo ya kujifurahisha", "Saizi za viatu na nguo"], answer: 0, why: "Mahitaji haya ya kijamii huathiri afya." },
      { objective: "O3", q: "Unapaswa kusema nini kabla ya uchunguzi?", options: ["\"Lazima ujibu kila kitu.\"", "Hakuna; anza tu", "\"Nauliza kila mtu maswali machache ili nikueleze msaada. Unaweza kuruka lolote.\"", "\"Huu ni mtihani.\""], answer: 2, why: "Kueleza kwa nini na kusema anaweza kuruka hujenga uaminifu na kuheshimu ridhaa." },
      { objective: "O3", q: "Baada ya maswali ya uchunguzi, swali zuri linalofuata ni:", options: ["\"Lipi kati ya haya ni muhimu zaidi kwako sasa hivi?\"", "\"Kwa nini hukurekebisha hili mapema?\"", "\"PIN yako ya benki ni ipi?\"", "\"Nimwambie nani mwingine?\""], answer: 0, why: "Kuanza na kilicho muhimu zaidi kwa mtu kunaheshimu machaguo yake." },
      { objective: "O4", q: "211 ni:", options: ["Namba ya dharura ya moto tu", "Huduma ya bure na ya siri inayowaunganisha watu na msaada wa eneo lao", "Laini ya simu ya kulipia", "App ya mitandao ya kijamii"], answer: 1, why: "211 huwaunganisha watu na msaada wa eneo lao." },
      { objective: "O4", q: "Ukurasa wa mafao wa USA.gov huwasaidia watu:", options: ["Kununua tiketi za tamasha", "Kulipa faini za maegesho", "Kupata programu za serikali za chakula, makazi, huduma za afya na bili", "Kukata tiketi za ndege"], answer: 2, why: "Unawasaidia watu kupata mafao ya serikali na jinsi ya kuomba." },
      { objective: "O4", q: "Kumbukumbu ya huduma inapaswa kuwa na nini?", options: ["Jina tu", "Makisio ya saa za kazi", "Jina la rafiki aliyewahi kwenda huko", "Anwani, simu, saa za kazi, jinsi ya kuomba na tarehe ya ukaguzi"], answer: 3, why: "Taarifa kamili zilizokaguliwa hufanya huduma iwe na manufaa." },
      { objective: "O4", q: "Tovuti inatoza ada \"kusaidia\" na fomu ya serikali. Wewe:", options: ["Unatafuta ukurasa rasmi kwanza; fomu nyingi ni za bure", "Unalipa haraka", "Unashiriki tovuti hiyo na kila mtu", "Unaipa taarifa za mteja wako"], answer: 0, why: "Tovuti bandia mara nyingi hutoza pesa kwa fomu za bure; tafuta ukurasa rasmi." },
      { objective: "O5", q: "Rufaa ya karibu (warm referral) ina maana:", options: ["Kumpa kadi ya biashara", "Kumsaidia mtu kuungana moja kwa moja, kama kupiga simu pamoja", "Kumwambia atafute mtandaoni", "Kumtumia kipeperushi kwa posta"], answer: 1, why: "Rufaa ya karibu husaidia kufanya muunganiko." },
      { objective: "O5", q: "Kabla ya kushiriki taarifa na kliniki, unahitaji:", options: ["Ridhaa ya mtu huyo", "Maoni ya rafiki yako", "Hakuna kitu", "Chapisho la mitandao ya kijamii"], answer: 0, why: "Ridhaa huja kwanza, na unashiriki tu kinachohitajika." },
      { objective: "O5", q: "Kipi ni kikwazo cha kupata msaada?", options: ["Simu inayofanya kazi", "Usafiri wa kwenda kwenye miadi", "Kukosa mtu wa kuwaangalia watoto wakati wa miadi", "Karatasi sahihi"], answer: 2, why: "Kukosa mtu wa kuwaangalia watoto kunaweza kumzuia mtu kufika kwenye huduma." },
      { objective: "O5", q: "Mtu yuko katika dharura ya kihisia na anataka kuzungumza na mtu sasa hivi. Anaweza:", options: ["Kusubiri ziara ya mwezi ujao", "Kupiga simu au kutuma ujumbe kwa 988", "Kuandika mtandaoni", "Kupiga 411"], answer: 1, why: "988 ni Suicide and Crisis Lifeline: piga simu, tuma ujumbe au zungumza mtandaoni." },
      { objective: "O5", q: "Rufaa haikufaulu. Wewe:", options: ["Unakata tamaa", "Unamlaumu mtu", "Unaacha kufuatilia", "Unatafuta huduma nyingine na kuweka tarehe mpya ya kufuatilia"], answer: 3, why: "Kufuatilia ni kujaribu njia nyingine wakati ya kwanza haikufanya kazi." },
      { objective: "O5", q: "Upi ni mpaka mzuri kwa CHW?", options: ["Kutoa ushauri wa matibabu", "Kukopesha pesa", "Kuahidi makazi kufikia Ijumaa", "Kupeleka maswali ya afya kwa mtaalamu wa afya wa mtu huyo"], answer: 3, why: "CHWs hubaki katika nafasi yao na huwaunganisha watu na wataalamu wa afya kwa maswali ya afya." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 5, 7, 8, 10, 12, 14, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na uikague tena.",
    criteria: [
      { name: "Huduma zilizokaguliwa", objective: "O4", notYet: "Huduma chini ya tano, au taarifa hazikukaguliwa kwenye kurasa rasmi.", meets: "Angalau huduma tano (chakula, makazi, huduma za afya, bima na moja zaidi), kila moja na anwani, simu, saa za kazi, jinsi ya kuomba na tarehe ya ukaguzi.", exceeds: "Pia inaonyesha nani anaweza kutumia kila moja, cha kubeba na lugha zinazotumika." },
      { name: "Hitaji kwa maneno yake", objective: "O3", notYet: "Hitaji ni makisio au linatumia maneno ya kitaalamu.", meets: "Hitaji la jirani wa kubuni limeandikwa kwa maneno yake mwenyewe, na ridhaa imeandikwa.", exceeds: "Inaonyesha hitaji lipi ni muhimu zaidi kwake na kwa nini." },
      { name: "Mazungumzo rahisi na ya heshima", objective: "O2", notYet: "Utakachosema kinatumia maneno ya kitaalamu au kinamhukumu mtu.", meets: "Maneno rahisi, sentensi ya kurudia alichosema na swali la teach-back.", exceeds: "Inatoa mkalimani au njia nyingine ya kuwasiliana inapohitajika." },
      { name: "Rufaa ya karibu na ufuatiliaji", objective: "O5", notYet: "Namba ya simu tu, au hakuna tarehe ya kufuatilia.", meets: "Muunganiko wa karibu, kikwazo kimoja na mpango wake, na tarehe ya kufuatilia.", exceeds: "Ina huduma mbadala ikiwa ya kwanza haitafanya kazi." },
      { name: "Faragha na nafasi yako", objective: "O5", notYet: "Inatumia taarifa za mtu halisi au inatoa ushauri wa matibabu.", meets: "Mtu wa kubuni, ridhaa kabla ya kushiriki, hakuna ushauri wa matibabu wala wa kisheria.", exceeds: "Inaorodhesha hatua za dharura (911, 988, mwambie msimamizi wako) kwenye mwongozo." },
      { name: "Njia ya jimbo lako", objective: "O1", notYet: "Hakuna taarifa kuhusu jinsi ya kuwa CHW katika jimbo lako.", meets: "Inaonyesha kama jimbo lako linatoa vyeti kwa CHWs, pamoja na ukurasa rasmi.", exceeds: "Inaongeza mwajiri mmoja wa eneo lako au programu ya mafunzo ya kuwasiliana nayo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaoomba kazi ya CHW au programu ya mafunzo ndani ya siku 60",
      "Wanafunzi wanaopata cheti cha CHW cha jimbo pale jimbo lao linapotoa vyeti",
      "Wanafunzi wanaoajiriwa kama CHWs, wahudumu wa kufikia jamii au waongozaji ndani ya miezi 6 (utafiti wa kufuatilia)",
      "Mashirika washirika yanaripoti rufaa zinazofika kwenye huduma na kufuatiliwa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti ya kukagua huduma kwenye kurasa rasmi",
      "Karatasi na kalamu kwa maelezo ya uchunguzi, mwongozo wa huduma na mpango wa rufaa",
      "Mwenzako wa kuigiza naye (si lazima; kuandika pia kunafaa)",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Kabla ya kozi, tafuta ukurasa wa vyeti vya CHW wa jimbo lako (au andika kwamba jimbo lako halina) na uushiriki.",
      "Fanyeni masomo ya kusikiliza na ya uchunguzi kama maigizo kwa jozi, mkitumia watu wa kubuni tu.",
      "Mlete CHW au promotora anayefanya kazi aeleze siku moja kazini, kama inawezekana.",
      "Wanafunzi waunganishe huduma walizokagua katika mwongozo mmoja wa kikundi na waandike tarehe kila moja ilipokaguliwa.",
      "Pitieni hatua za dharura (911, 988, mwambie msimamizi wako) na mpango wa usalama wa programu yenu kabla ya maigizo kuhusu mada ngumu."
    ]
  }
};
