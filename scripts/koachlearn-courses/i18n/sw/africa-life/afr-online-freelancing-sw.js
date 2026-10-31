"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-online-freelancing.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const THREE_MTT = { name: "3MTT (3 Million Technical Talent), Nigeria: Wizara ya Shirikisho ya Mawasiliano, Ubunifu na Uchumi wa Kidijitali pamoja na NITDA", url: "https://3mtt.nitda.gov.ng/" };
const AJIRA = { name: "Shirika la Habari la Kenya (KNA): vijana wahimizwa kujiunga na Mpango wa Ajira Digital (mpango wa serikali wa kazi za mtandaoni)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };
const KRA = { name: "Kenya Revenue Authority (KRA), mamlaka ya kodi ya Kenya: kodi ya mapato, pamoja na mapato ya mtandaoni", url: "https://www.kra.go.ke" };
const GRA = { name: "Ghana Revenue Authority (GRA), mamlaka ya kodi ya Ghana", url: "https://gra.gov.gh" };
const SEC_NG = { name: "Nairametrics (14 Mei 2026): SEC ya Nigeria yaonya dhidi ya mipango inayotangazwa kwenye WhatsApp, TikTok na Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-online-freelancing-sw",
  lang: "sw",
  translationOf: "afr-online-freelancing",
  category: "Africa: Life and Work",
  name: "Kazi Huru na Kazi za Mbali Mtandaoni kutoka Afrika",
  skills: "Kuchagua huduma unayoweza kuuza mtandaoni, Kuandika wasifu na kujenga mkusanyiko mdogo wa kazi, Kuandika pendekezo kwa tangazo la kazi, Kukubaliana kuhusu kazi na kuikabidhi kwa wakati, Kulipwa na kutunza kumbukumbu, Kutambua kazi bandia na ulaghai wa malipo",
  outcome: "kugeuza ujuzi ulio nao tayari kuwa huduma ya mtandaoni: kuandika wasifu wenye mifano ya kazi, kuandika pendekezo kwa tangazo halisi la kazi, kukubaliana kuhusu kazi kwa maandishi, kulipwa kwa usalama, kutunza kumbukumbu, na kukataa kazi bandia.",
  about: [
    "Vijana na watu wazima kote Afrika wanapata pesa mtandaoni kwa kuandika, kutafsiri, kubuni michoro, kuingiza data, kuhudumia wateja, kunakili sauti kuwa maandishi, kutunza hesabu, kusimamia mitandao ya kijamii na kuwa wasaidizi wa mbali, kwa wateja wa nchi yao na wa nje. Baadhi wanafanya kazi kupitia majukwaa kama Upwork, Fiverr na LinkedIn; wengine wanapata wateja kupitia WhatsApp, Facebook na watu wanaowajua.",
    "Kozi hii ni kwa wanaotafuta kazi, wanafunzi, wahitimu, akina mama na akina baba walio nyumbani, na yeyote mwenye simu au kompyuta na ujuzi. Utachagua huduma moja, utaandika wasifu, utakusanya mifano midogo ya kazi, utaandika pendekezo, utakubaliana kuhusu kazi, utalipwa na utatambua kazi nyingi bandia zinazowalenga wafanyakazi huru wapya. Serikali pia zinatoa mafunzo ya bure, kama Ajira Digital nchini Kenya na 3MTT nchini Nigeria.",
    "Kila somo linachukua kama dakika tano, na lina kazi ya \"Jaribu sasa\" unayoweza kufanya kwenye simu. Kuna jaribio fupi baada ya kila somo na kila sura, na mtihani wa maswali 20 mwishoni. Ada za majukwaa na njia za malipo zinatofautiana kwa nchi na hubadilika, kwa hiyo utajifunza kuzisoma kwenye kurasa za msaada za kila jukwaa lenyewe."
  ],
  finalTask: "Tengeneza kifurushi chako cha kuanzia kazi huru: ofa ya huduma ya mstari mmoja, wasifu (kichwa na maelezo mafupi), mifano miwili au mitatu midogo ya kazi, pendekezo moja kwa tangazo la kazi halisi au la mfano, na orodha ya kukagua ya usalama na malipo (utakavyolipwa, kumbukumbu utakazotunza, mahali pa kuuliza kuhusu kodi, na dalili za hatari za kazi bandia).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima kote Afrika, mijini na vijijini: wahitimu na waliomaliza shule wanaotafuta kazi, watu wenye kazi wanaotaka mapato ya ziada, wazazi wanaofanya kazi nyumbani, na mafundi na wamiliki wa biashara ndogo wenye ujuzi wa kuuza. Mifano kutoka Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Misri na Morocco; wengi wanazungumza Kiingereza, Kifaransa au Kiarabu, na hilo lenyewe ni ujuzi wa kuuza.",
    startingPoint: "Wanaweza kutumia simu janja, WhatsApp na mitandao ya kijamii; baadhi wana kompyuta mpakato (laptop) au wanatumia mgahawa wa intaneti (cyber café). Wengi wana ujuzi (kuandika, lugha, kubuni michoro, kuchapa, hesabu, mauzo) lakini hawajawahi kuueleza kama huduma, kuandika pendekezo au kulipwa na mteja wa nje. Wengi wameona matangazo ya \"fanya kazi ukiwa nyumbani\" yaliyogeuka kuwa ulaghai.",
    gap: "Wanafunzi wanahitaji kuonyesha huduma moja iliyo wazi, kuandika mapendekezo yanayoshinda kazi, kukubaliana masharti kwa maandishi, kulipwa kwa usalama na kuepuka kazi bandia zinazoomba ada, ili kazi ya mtandaoni iwe mapato halisi badala ya kupoteza data na pesa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; imetafsiriwa kwa Kifaransa na Kiarabu",
      "Vifaa: mara nyingi simu janja tu; data ni ghali; umeme unaweza kukatika",
      "Muda: masomo ya dakika 4 hadi 6",
      "Ada, sheria na njia za malipo za majukwaa zinatofautiana kwa nchi na hubadilika; sheria za kodi zinatofautiana kwa nchi",
      "Usimpe kamwe mteja au mwajiri nywila, PIN, misimbo ya mara moja au nyaraka za kitambulisho"
    ],
    prerequisites: "Ujuzi wa msingi wa simu na ujuzi mmoja unaoweza kuwafanyia wengine. Anwani ya barua pepe."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia orodha ya ujuzi wako mwenyewe", action: "kuchagua huduma moja unayoweza kuuza mtandaoni na kuiandika kama ofa ya mstari mmoja", standard: "ukisema unachofanya, kwa nani na mteja anapata nini" },
    { id: "O2", condition: "Kwenye jukwaa au ukurasa rahisi wa mtandaoni", action: "kuandika kichwa na maelezo ya wasifu na kuongeza mifano miwili au mitatu midogo ya kazi", standard: "bila taarifa binafsi na kwa mifano uliyotengeneza mwenyewe" },
    { id: "O3", condition: "Ukipewa tangazo la kazi", action: "kuandika pendekezo fupi linalojibu hitaji la mteja, linaloonyesha mfano unaohusiana na linalouliza swali moja", standard: "kwa maneno chini ya 150, limeandikwa kwa tangazo hilo, si kunakiliwa" },
    { id: "O4", condition: "Kabla ya kuanza kazi", action: "kukubaliana kwa maandishi kuhusu wigo, bei, tarehe ya mwisho na idadi ya mabadiliko, na kukabidhi kazi kwa wakati", standard: "ukiwa na mpango wa akiba kwa kukatika kwa umeme au data" },
    { id: "O5", condition: "Baada ya kukubaliana kuhusu kazi", action: "kuchagua njia salama ya kulipwa na kutunza kumbukumbu ya kila malipo", standard: "ukiweka kazi na malipo ndani ya jukwaa unapotumia jukwaa, na ukiandika kila malipo ndani ya wiki moja" },
    { id: "O6", condition: "Ukipewa ofa au jumbe tano za kazi", action: "kutambua zilizo bandia na kutaja dalili ya hatari katika kila moja", standard: "ukipata angalau 4 kati ya 5 sahihi, kabla ya kulipa au kutoa taarifa zozote" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiandaa kufanya kazi mtandaoni",
      lessons: [
        {
          title: "Kuchagua huduma unayoweza kuuza",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua huduma moja na uiandike kama ofa ya mstari mmoja.",
          text: [
            "Kazi huru (freelancing) ni kufanya kazi ya kulipwa kwa wateja, kazi moja baada ya nyingine, badala ya kumfanyia mwajiri mmoja. Kazi ya mbali (remote work) ni kazi, ya muda wote au ya muda mfupi, unayoifanya ukiwa nyumbani au popote mtandaoni. Zote mbili zinaanza na ujuzi ambao wateja wanauhitaji.",
            "Orodhesha unachoweza kufanya tayari: kuandika, kutafsiri kati ya Kiingereza, Kifaransa, Kiarabu au lugha ya kwenu, kuchapa na kuingiza data, kutumia Excel au Google Sheets, kubuni michoro kwa Canva, mitandao ya kijamii, kuhudumia wateja, kutunza hesabu, kunakili sauti kuwa maandishi, kufundisha. Chagua MOJA kuanza; wateja huajiri wataalamu.",
            "Andika ofa ya mstari mmoja: unachofanya, kwa nani, na wanapata nini. Mfano: \"Ninatafsiri nyaraka za biashara kutoka Kiingereza kwenda Kifaransa kwa kampuni ndogo, kwa usahihi na ndani ya saa 48.\" Mfano: Kofi wa Accra: \"Ninabuni vipeperushi rahisi vya Canva na machapisho ya mitandao ya kijamii kwa maduka na makanisa.\"",
            "Ukihitaji ujuzi zaidi, tumia mafunzo ya bure. Serikali ya Kenya inaendesha Ajira Digital kwa kazi za mtandaoni, na mpango wa 3MTT wa Nigeria unawafundisha vijana ujuzi kama data, ubunifu wa michoro na programu za kompyuta."
          ],
          steps: ["Orodhesha vitu vitano unavyoweza kuwafanyia wengine.", "Zungushia duara kile unachofanya vizuri zaidi na unachokipenda.", "Uliza: nani analipia hiki?", "Andika: Ninafanya [nini] kwa [nani] ili wapate [matokeo].", "Ukihitaji ujuzi zaidi, tafuta mafunzo ya bure."],
          words: [["Mfanyakazi huru (freelancer)", "mtu anayefanya kazi ya kulipwa kwa wateja, kazi moja baada ya nyingine."], ["Kazi ya mbali (remote work)", "kazi inayofanywa mtandaoni ukiwa nyumbani au popote."], ["Ofa ya huduma", "sentensi moja inayosema unachofanya, kwa nani na wanapata nini."]],
          slides: [
            { title: "Anza na unachoweza kufanya", bullets: ["Kuandika, kutafsiri, kuchapa, majedwali (spreadsheets)", "Kubuni michoro, mitandao ya kijamii, kuhudumia wateja", "Kutunza hesabu, kunakili sauti kuwa maandishi, kufundisha"] },
            { title: "Chagua huduma MOJA", bullets: ["Wateja huajiri wataalamu", "Chagua unayofanya vizuri zaidi na unayoipenda"] },
            { title: "Ofa yako ya mstari mmoja", bullets: ["Ninafanya [nini] kwa [nani] ili wapate [matokeo]", "\"Ninatafsiri Kiingereza kwenda Kifaransa kwa kampuni ndogo, ndani ya saa 48\""] },
            { title: "Mafunzo ya bure", bullets: ["Kenya: Ajira Digital", "Nigeria: 3MTT", "Angalia nafasi za sasa kwenye tovuti rasmi"] }
          ],
          sources: [AJIRA, THREE_MTT],
          tryIt: "Orodhesha vitu vitano unavyoweza kuwafanyia wengine. Chagua kimoja na uandike ofa yako ya mstari mmoja: Ninafanya [nini] kwa [nani] ili wapate [matokeo].",
          youCanNow: "kuchagua huduma moja na kuieleza kwa ofa ya mstari mmoja iliyo wazi.",
          quickCheck: [
            { objective: "O1", q: "Ofa ipi ya mstari mmoja iko wazi zaidi?", options: ["\"Naweza kufanya chochote mtandaoni\"", "\"Niajiri tafadhali\"", "\"Ninachapa fomu zilizoandikwa kwa mkono kwenye Excel kwa zahanati, kwa usahihi na haraka\"", "\"Mfanyakazi huru, ujuzi wote\""], answer: 2, why: "Inasema nini, kwa nani na mteja anapata nini." },
            { objective: "O1", q: "Kwa nini uchague huduma MOJA kuanza?", options: ["Wateja hutafuta wataalamu", "Majukwaa yanaruhusu neno moja tu", "Ni sheria", "Inatumia data kidogo"], answer: 0, why: "Utaalamu ulio wazi ni rahisi kwa wateja kuuamini na kuuajiri." }
          ]
        },
        {
          title: "Wasifu wako na mkusanyiko mdogo wa kazi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Andika kichwa na maelezo ya wasifu, na uongeze mifano miwili au mitatu ya kazi.",
          text: [
            "Wasifu wako ni dirisha la duka lako. Kichwa kinasema huduma yako kwa maneno machache: \"Mtafsiri wa Kiingereza-Kifaransa wa Nyaraka za Biashara\". Maelezo, aya chache fupi, yanasema unawasaidia akina nani, unachofanya, jinsi unavyofanya kazi na ushahidi mmoja kama kazi ya zamani au mafunzo.",
            "Wateja wanataka ushahidi. Mkusanyiko wa kazi (portfolio) ni mifano michache ya kazi yako. Kama huna wateja bado, tengeneza mifano mwenyewe: tafsiri tangazo fupi la umma, buni kipeperushi cha duka la kubuni, safisha jedwali dogo la mfano. Usitumie kamwe kazi ya mtu mwingine, na usionyeshe kamwe taarifa halisi za mteja bila ruhusa.",
            "Weka taarifa binafsi nje ya wasifu wako: bila anwani ya nyumbani, namba ya kitambulisho wala taarifa za benki. Tumia picha iliyo wazi na ya kirafiki kama jukwaa linaiomba.",
            "Okoa data: andika wasifu wako kwanza kwenye app ya kuandikia maelezo (notes), kisha ubandike mara moja. Punguza ukubwa wa picha kabla ya kuzipakia. Mfano: Mariam wa Casablanca anaandika wasifu wake wa Kiarabu-Kifaransa bila intaneti, kisha anaupakia kwenye cyber café kwa dakika kumi."
          ],
          steps: ["Andika kichwa: huduma yako kwa maneno machache.", "Andika maelezo: unawasaidia akina nani, unachofanya, jinsi unavyofanya kazi, ushahidi mmoja.", "Tengeneza mifano miwili au mitatu midogo mwenyewe.", "Kagua: hakuna taarifa binafsi, hakuna kazi ya mtu mwingine.", "Andika bila intaneti kwanza, kisha ubandike."],
          words: [["Wasifu (profile)", "ukurasa wako kwenye jukwaa unaowaambia wateja wewe ni nani na unafanya nini."], ["Mkusanyiko wa kazi (portfolio)", "mifano michache ya kazi yako inayothibitisha ujuzi wako."], ["Kichwa (headline)", "mstari mfupi chini ya jina lako unaosema huduma yako."]],
          slides: [
            { title: "Kichwa na maelezo", bullets: ["Kichwa: huduma yako kwa maneno machache", "Maelezo: unamsaidia nani, unachofanya, jinsi, ushahidi mmoja"] },
            { title: "Mkusanyiko wa kazi: onyesha ushahidi", bullets: ["Mifano miwili au mitatu midogo", "Huna wateja bado? Tengeneza mifano mwenyewe", "Usitumie kamwe kazi ya watu wengine"] },
            { title: "Iwe salama na nyepesi", bullets: ["Bila anwani, kitambulisho wala taarifa za benki", "Andika bila intaneti, bandika mara moja", "Punguza ukubwa wa picha kuokoa data"] }
          ],
          tryIt: "Andika kichwa chako na maelezo mafupi kwenye app ya notes. Kisha tengeneza mfano mmoja mdogo wa kazi kwa huduma yako, kwa mfano aya iliyotafsiriwa, kipeperushi au jedwali lililosafishwa.",
          youCanNow: "kuandika wasifu ulio wazi na kuonyesha ujuzi wako kwa mifano midogo ya kazi.",
          quickCheck: [
            { objective: "O2", q: "Huna wateja bado. Unawezaje kujenga mkusanyiko wa kazi?", options: ["Kunakili kazi ya mbunifu maarufu", "Kutengeneza mifano midogo mwenyewe", "Kutumia kazi ya rafiki kwa jina lako", "Kusubiri hadi mteja akuajiri"], answer: 1, why: "Mifano unayotengeneza mwenyewe ni ushahidi wa kweli wa ujuzi wako." },
            { objective: "O2", q: "Nini HAKIPASWI kuwekwa kwenye wasifu wako?", options: ["Kichwa chako", "Huduma yako", "Mfano wa kazi yako", "Anwani yako ya nyumbani na namba ya kitambulisho"], answer: 3, why: "Taarifa binafsi zinaweza kutumiwa vibaya; wasifu wako unahitaji ujuzi na ushahidi tu." }
          ]
        },
        {
          title: "Kutafuta kazi na kuandika pendekezo",
          objectives: ["O3"],
          minutes: 6,
          goal: "Andika pendekezo fupi linalojibu hitaji la mteja.",
          text: [
            "Mahali pa kupata kazi: majukwaa ya kazi huru (kama Upwork na Fiverr), LinkedIn, tovuti za matangazo ya kazi, na watu unaowajua, kama biashara za karibu, makanisa, mashirika yasiyo ya kiserikali (NGOs) na shule zinazohitaji msaada mtandaoni. Wateja wako wa kwanza mara nyingi wako karibu nawe.",
            "Soma tangazo la kazi mara mbili. Tafuta hitaji la mteja, tarehe ya mwisho na swali lolote wanaloliuliza. Ruka matangazo yasiyo wazi, yasiyolipa chochote au yanayokuomba ulipe.",
            "Pendekezo ni jibu lako fupi. Liwe chini ya maneno 150: 1. Onyesha umeelewa hitaji kwa sentensi moja. 2. Sema utakavyolifanya. 3. Taja mfano mmoja unaohusiana. 4. Uliza swali moja lenye manufaa. Liandike kwa tangazo hilo; wateja wanaweza kutambua ujumbe ulionakiliwa.",
            "Mfano: mteja anahitaji majina 200 ya bidhaa yachapwe kwenye jedwali. Ngozi wa Lagos anaandika: \"Unahitaji majina 200 ya bidhaa na bei zake yachapwe kwenye jedwali kufikia Ijumaa. Nitachapa na kukagua kila mstari mara mbili. Huu ni mfano wa jedwali nililotengeneza. Je, bei ziwe kwa naira au kwa dola?\""
          ],
          steps: ["Soma tangazo mara mbili; andika hitaji, tarehe ya mwisho na swali lolote.", "Ruka matangazo yasiyo wazi au yanayokuomba ulipe.", "Sentensi ya 1: hitaji la mteja kwa maneno yako.", "Sentensi ya 2: utakavyolifanya.", "Ongeza mfano mmoja unaohusiana.", "Uliza swali moja lenye manufaa.", "Liwe chini ya maneno 150."],
          words: [["Tangazo la kazi (job post)", "maelezo ya mteja kuhusu kazi anayoihitaji."], ["Pendekezo (proposal)", "jibu lako fupi kwa tangazo la kazi, linalosema utakavyofanya kazi hiyo."]],
          slides: [
            { title: "Mahali pa kupata kazi", bullets: ["Majukwaa kama Upwork na Fiverr", "LinkedIn na tovuti za matangazo ya kazi", "Biashara za karibu, NGOs, makanisa, shule"] },
            { title: "Soma tangazo mara mbili", bullets: ["Hitaji, tarehe ya mwisho, swali lolote", "Ruka matangazo yasiyo wazi na yanayokuomba ulipe"] },
            { title: "Pendekezo lenye sehemu nne", bullets: ["1. Hitaji kwa maneno yako  2. Utakavyolifanya", "3. Mfano mmoja unaohusiana  4. Swali moja lenye manufaa", "Chini ya maneno 150, limeandikwa kwa tangazo hili"] }
          ],
          tryIt: "Tafuta tangazo moja halisi la kazi kwa huduma yako (au tumia mfano wa jedwali). Andika pendekezo la chini ya maneno 150 lenye sehemu zote nne.",
          youCanNow: "kuandika pendekezo fupi linalomwonyesha mteja kwamba umeelewa hitaji lake.",
          quickCheck: [
            { objective: "O3", q: "Sentensi ya kwanza ya pendekezo inapaswa kufanya nini?", options: ["Kuonyesha umeelewa hitaji la mteja", "Kueleza historia ya maisha yako", "Kuomba malipo kwanza", "Kuorodhesha kila ujuzi ulio nao"], answer: 0, why: "Kuonyesha umeelewa hitaji kunavuta umakini wa mteja." },
            { objective: "O3", q: "Kwa nini uandike kila pendekezo kwa tangazo hilo la kazi?", options: ["Majukwaa yanataka mapendekezo marefu", "Wateja wanaweza kutambua ujumbe ulionakiliwa na kuuruka", "Inatumia data kidogo", "Mapendekezo yaliyonakiliwa ni kinyume cha sheria"], answer: 1, why: "Pendekezo lililoandikwa kwa tangazo hilo linaonyesha umakini na uelewa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiandaa kufanya kazi mtandaoni",
        questions: [
          { objective: "O1", q: "Ofa ya mstari mmoja inasema mambo gani matatu?", options: ["Umri wako, mji wako na shule yako", "Bei yako, simu yako na benki yako", "Unachofanya, kwa nani na wanapata nini", "Mambo unayopenda, familia yako na malengo yako"], answer: 2, why: "Nini, kwa nani na matokeo hufanya ofa iwe wazi." },
          { objective: "O1", q: "Unazungumza Kiarabu na Kifaransa vizuri. Unaweza kutoa huduma gani?", options: ["Kutafsiri kati ya Kiarabu na Kifaransa", "Kutengeneza magari mtandaoni", "Kuuza akaunti za watu wengine", "Hakuna; lugha si ujuzi"], answer: 0, why: "Lugha ni ujuzi ambao wateja wengi hulipia." },
          { objective: "O2", q: "Mkusanyiko wa kazi (portfolio) ni nini?", options: ["Taarifa yako ya benki", "Mifano michache ya kazi yako inayothibitisha ujuzi wako", "Kitambulisho chako", "Orodha ya nywila za wateja"], answer: 1, why: "Mkusanyiko wa kazi unawaonyesha wateja unachoweza kufanya." },
          { objective: "O3", q: "Pendekezo zuri ni:", options: ["Refu, lenye kila ujuzi ulio nao", "Ujumbe ule ule unaotumwa kwa kila tangazo", "Ombi la ada ya awali", "Fupi, limeandikwa kwa tangazo, lenye mfano mmoja na swali moja"], answer: 3, why: "Mapendekezo mafupi na mahususi yenye ushahidi hushinda kazi zaidi." },
          { objective: "O3", q: "Tangazo la kazi linakuomba ulipe ada ili kuomba kazi. Unafanya nini?", options: ["Kulipa haraka", "Kulipa nusu", "Kuliruka", "Kutuma kitambulisho chako badala yake"], answer: 2, why: "Wateja halisi wanakulipa wewe; hawakuombi ulipe ili kuomba kazi." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya kazi na kulipwa",
      lessons: [
        {
          title: "Kukubaliana kuhusu kazi na kuikabidhi kwa wakati",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kubalianeni kwa maandishi kuhusu wigo, bei, tarehe ya mwisho na mabadiliko kabla ya kuanza.",
          text: [
            "Kabla ya kuanza, kubalianeni kwa maandishi (kwenye jumbe za jukwaa au barua pepe fupi) mambo manne: wigo (hasa utakachokabidhi), bei, tarehe ya mwisho (pamoja na saa za eneo), na idadi ya mizunguko ya mabadiliko iliyojumuishwa.",
            "Mfano: \"Wigo: kubuni machapisho 3 ya mitandao ya kijamii kwa duka lako la mikate. Bei: kama ilivyokubaliwa kwenye mkataba. Tarehe ya mwisho: Alhamisi saa 11 jioni (5 pm) kwa saa za kwako (London). Mabadiliko: hadi mizunguko 2.\" Mteja akiomba zaidi baadaye, mpe kwa adabu bei mpya ya kazi hiyo ya ziada.",
            "Jiandae kwa kukatika kwa umeme na data. Chaji simu yako na power bank, hifadhi kazi mara kwa mara kwenye hifadhi ya mtandaoni (cloud), jua mahali pa akiba pa kufanyia kazi (cyber café, kituo cha vijana au teknolojia, maktaba), na usiache kazi hadi siku ya mwisho. Jambo likienda vibaya, mwambie mteja mapema na kwa ukweli; wateja wengi hukubali kuchelewa kidogo wanachoambiwa mapema.",
            "Mfano: Ibrahima wa Thiès anaanza kazi saa 12 asubuhi (6 am), kabla umeme haujaanza kukatika kwa kawaida, na anaweka nakala ya kila faili kwenye Google Drive."
          ],
          steps: ["Andika wigo: hasa utakachokabidhi.", "Andika bei na tarehe ya mwisho, pamoja na saa za eneo.", "Andika idadi ya mizunguko ya mabadiliko iliyojumuishwa.", "Pata ndiyo ya mteja kwa maandishi.", "Hifadhi kazi mara kwa mara; kuwa na akiba ya umeme na data.", "Ukiona utachelewa, mwambie mteja mapema."],
          words: [["Wigo (scope)", "hasa kazi utakayokabidhi."], ["Saa za eneo (time zone)", "saa za mahali fulani; London, Lagos na Nairobi zinaweza kutofautiana kwa saa kadhaa."], ["Marekebisho (revision)", "badiliko ambalo mteja anaomba baada ya kuona kazi yako."]],
          slides: [
            { title: "Kubalianeni mambo manne kwa maandishi", bullets: ["Wigo: hasa unachokabidhi", "Bei", "Tarehe ya mwisho, pamoja na saa za eneo", "Mizunguko ya mabadiliko iliyojumuishwa"] },
            { title: "Kazi zaidi = bei mpya", bullets: ["Maombi ya ziada ni kazi mpya", "Toa bei mpya kwa adabu"] },
            { title: "Jiandae kwa kukatika", bullets: ["Power bank; hifadhi kwenye cloud mara kwa mara", "Mahali pa akiba pa kufanyia kazi", "Utachelewa? Mwambie mteja mapema"] }
          ],
          tryIt: "Andika ujumbe mfupi wa wigo kwa kazi ya huduma yako: wigo, bei (kama mfano), tarehe ya mwisho pamoja na saa za eneo, na mizunguko ya mabadiliko. Kisha andika mpango wako wa akiba kwa kukatika kwa umeme au data.",
          youCanNow: "kukubaliana kwa maandishi kuhusu wigo, bei, tarehe ya mwisho na mabadiliko ya kazi, na kuikabidhi kwa wakati ukiwa na mpango wa akiba.",
          quickCheck: [
            { objective: "O4", q: "Lipi SI kati ya mambo manne ya kukubaliana kabla ya kuanza?", options: ["Wigo", "Bei", "Tarehe ya mwisho", "Muziki unaoupenda"], answer: 3, why: "Wigo, bei, tarehe ya mwisho na mabadiliko ndiyo mambo manne." },
            { objective: "O4", q: "Umeme umekatika na huenda ukakosa tarehe ya mwisho ya kesho. Unafanya nini?", options: ["Kunyamaza na kutumaini", "Kumwambia mteja mapema na kumpa muda mpya", "Kufuta kazi", "Kumwomba mteja pesa zaidi"], answer: 1, why: "Habari za mapema na za kweli zinalinda imani ya mteja." }
          ]
        },
        {
          title: "Kulipwa na kutunza kumbukumbu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Chagua njia salama ya kulipwa na uandike kila malipo.",
          text: [
            "Kwenye jukwaa, weka kazi, jumbe na malipo ndani ya jukwaa. Ulinzi wake wa malipo unafanya kazi humo tu. Wateja wanaokuomba muondoke kwenye jukwaa ili wakulipe \"moja kwa moja\" mara nyingi ni walaghai, na inaweza kuvunja sheria za jukwaa.",
            "Majukwaa hulipa kwa njia tofauti: kwenye akaunti ya benki, kwenye huduma kama Payoneer, au kwa njia nyingine. Kinachofanya kazi kinategemea jukwaa na nchi yako, na ada hubadilika. Soma kurasa za malipo na ada kwenye kituo cha msaada cha jukwaa lenyewe kabla ya kuchukua kazi yako ya kwanza.",
            "Kwa wateja wa moja kwa moja unaowajua, kubalianeni jinsi watakavyolipa kabla ya kuanza: kwa uhamisho wa benki au pesa za simu, na lini (kwa mfano nusu kabla na nusu wakati wa kukabidhi). Kabidhi mfano au onyesho la awali kwanza kama huna uhakika.",
            "Andika kila malipo: tarehe, mteja, kazi, kiasi na sarafu (USD, EUR, KES, NGN, GHS, XOF, MAD), ada na kiasi ulichopokea. Mapato ya mtandaoni yanaweza kutozwa kodi. Uliza mamlaka ya kodi ya nchi yako, kwa mfano Kenya Revenue Authority au Ghana Revenue Authority, au mshauri wa kodi, unachopaswa kusajili na kulipa."
          ],
          steps: ["Kwenye jukwaa, weka kazi na malipo ndani yake.", "Soma kurasa za malipo na ada za jukwaa lenyewe.", "Kwa wateja wa moja kwa moja, kubalianeni jinsi na lini watalipa kabla ya kuanza.", "Andika kila malipo ndani ya wiki moja: tarehe, mteja, kazi, kiasi, sarafu, ada, kilichopokelewa.", "Uliza mamlaka ya kodi ya nchi yako kinachokuhusu."],
          words: [["Ulinzi wa malipo", "mfumo wa jukwaa unaoshikilia au kuhakikisha malipo ya kazi iliyofanywa ndani yake."], ["Sarafu", "aina ya pesa: dola za Marekani, yuro, naira, sedi, shilingi, faranga za CFA, dirham."], ["Mamlaka ya kodi", "ofisi ya serikali inayokusanya kodi, kama KRA nchini Kenya au GRA nchini Ghana."]],
          slides: [
            { title: "Baki kwenye jukwaa", bullets: ["Kazi, jumbe na malipo ndani yake", "Ulinzi unafanya kazi humo tu", "\"Nitakulipa moja kwa moja nje ya jukwaa\" = dalili ya hatari"] },
            { title: "Njia za kulipwa", bullets: ["Benki, Payoneer au nyingine: inategemea nchi", "Soma kurasa za msaada za jukwaa lenyewe", "Ada hubadilika: kagua kabla ya kazi yako ya kwanza"] },
            { title: "Kumbukumbu na kodi", bullets: ["Tarehe, mteja, kazi, kiasi, sarafu, ada", "Andika kila malipo ndani ya wiki moja", "Uliza KRA, GRA au mamlaka ya kodi ya nchi yako"] }
          ],
          sources: [KRA, GRA],
          tryIt: "Tengeneza jedwali la kumbukumbu za malipo lenye safu hizi: tarehe, mteja, kazi, kiasi, sarafu, ada, kiasi kilichopokelewa. Ongeza mstari mmoja wa mfano. Kisha tafuta ukurasa wa msaada wa malipo wa jukwaa moja unaloweza kutumia.",
          youCanNow: "kuchagua njia salama ya kulipwa, kutunza kumbukumbu ya kila malipo, na kujua mahali pa kuuliza kuhusu kodi.",
          quickCheck: [
            { objective: "O5", q: "Mteja mpya kwenye jukwaa anakuomba muhamie WhatsApp ili akulipe \"moja kwa moja\". Hatari ni ipi?", options: ["Unapoteza ulinzi wa malipo wa jukwaa, na mara nyingi ni ulaghai", "Hakuna; ni haraka zaidi", "Utalipwa mara mbili", "Jukwaa litalipa ada"], answer: 0, why: "Ulinzi wa malipo unafanya kazi ndani ya jukwaa tu; maombi ya kutoka nje ni dalili ya kawaida ya ulaghai." },
            { objective: "O5", q: "Nani anaweza kukuambia kodi unayodaiwa kwa mapato ya mtandaoni?", options: ["Mteja wako", "Kikundi cha WhatsApp", "Mamlaka ya kodi ya nchi yako au mshauri wa kodi", "Hakuna; mapato ya mtandaoni hayatozwi kodi kamwe"], answer: 2, why: "Sheria za kodi zinatofautiana kwa nchi; mamlaka ya kodi au mshauri anaweza kukuambia." }
          ]
        },
        {
          title: "Kazi bandia na ulaghai wa malipo",
          objectives: ["O6"],
          minutes: 6,
          goal: "Tambua ofa za kazi bandia na utaje dalili ya hatari katika kila moja.",
          text: [
            "Wafanyakazi huru wapya ni walengwa wakubwa. Dalili za hatari: 1. Wanakuomba WEWE ulipe: kwa usajili, mafunzo, \"kifurushi cha kuanzia\" au programu. 2. Malipo makubwa mno kwa kazi rahisi, kama \"pata USD 500 kwa siku kwa kupenda (like) video\". 3. Wanaomba nywila zako, PIN, misimbo ya mara moja au nyaraka za kitambulisho. 4. Wanataka uondoke kwenye jukwaa mara moja. 5. Wanakulipa \"zaidi\" kwa hundi au uhamisho na kukuomba urudishe ziada. 6. Kazi za \"kazi ndogo\" (task) au za \"uwekezaji\" ambapo unaweka pesa ili kufungua kazi au mapato, mara nyingi zinasukumwa kwenye WhatsApp, Telegram na TikTok.",
            "SEC ya Nigeria (tume ya usimamizi wa masoko ya mitaji) imeonya kuhusu mipango inayotangazwa kwenye mitandao ya kijamii inayoahidi faida kubwa. Wateja halisi wanakulipa kwa kazi; hawakuombi kamwe ulipe ili ufanye kazi.",
            "Linda akaunti zako: nywila imara na tofauti kwa barua pepe yako na kwa kila jukwaa, uthibitishaji wa hatua mbili umewashwa, na usitoe misimbo kamwe. Usimruhusu mtu yeyote \"kukodi\" au kutumia akaunti yako iliyothibitishwa; inaweza kutumiwa kwa udanganyifu kwa jina lako.",
            "Kisha kusanya kifurushi chako cha kuanzia: ofa yako, wasifu, mifano, pendekezo moja, na orodha yako ya kukagua ya usalama na malipo."
          ],
          steps: ["Uliza: wanataka mimi nilipe?", "Uliza: malipo ni mazuri mno kwa kazi hii?", "Uliza: wanataka nywila, misimbo au kitambulisho?", "Uliza: wananiharakisha kutoka kwenye jukwaa?", "Jibu lolote likiwa ndiyo: simama, usilipe, ripoti kwa jukwaa.", "Washa uthibitishaji wa hatua mbili na usitoe misimbo kamwe."],
          words: [["Ulaghai wa kulipwa zaidi", "malipo bandia ya pesa nyingi mno, kisha ombi la kurudisha ziada kabla malipo hayo bandia hayajarudishwa na benki."], ["Uthibitishaji wa hatua mbili", "ukaguzi wa pili, kama msimbo unaotumwa kwenye simu yako, unapoingia kwenye akaunti."], ["Ulaghai wa kazi ndogo (task scam)", "kazi bandia ambapo lazima uweke pesa ili kufungua kazi au mapato."]],
          slides: [
            { title: "Dalili za hatari za kazi bandia", bullets: ["Wanakuomba ulipe ili ufanye kazi", "Malipo makubwa mno kwa kazi rahisi", "Wanataka nywila, misimbo au kitambulisho"] },
            { title: "Hila zaidi", bullets: ["Kukuharakisha kutoka kwenye jukwaa", "Kukulipa zaidi, kisha \"rudisha ziada\"", "Weka pesa ili kufungua kazi au mapato"] },
            { title: "Linda akaunti zako", bullets: ["Nywila imara na tofauti", "Uthibitishaji wa hatua mbili umewashwa", "Usikodishe kamwe akaunti yako iliyothibitishwa"] },
            { title: "Kifurushi chako cha kuanzia", bullets: ["Ofa, wasifu, mifano", "Pendekezo moja", "Orodha ya kukagua ya usalama na malipo"] }
          ],
          sources: [SEC_NG],
          tryIt: "Kazi ya mwisho: kusanya kifurushi chako cha kuanzia kazi huru: ofa ya mstari mmoja, kichwa na maelezo ya wasifu, mifano miwili au mitatu, pendekezo moja kwa tangazo la kazi halisi au la mfano, na orodha ya kukagua yenye njia yako ya kulipwa, jedwali lako la kumbukumbu, mahali utakapouliza kuhusu kodi na dalili sita za hatari za kazi bandia.",
          youCanNow: "kutambua kazi bandia na ulaghai wa malipo, na kujionyesha kama mfanyakazi huru aliye tayari kuajiriwa.",
          quickCheck: [
            { objective: "O6", q: "\"Mwajiri\" anatoa kazi ya kuingiza data lakini anaomba USD 20 kwa kifurushi cha kuanzia. Dalili ya hatari ni ipi?", options: ["Kazi ni ya kuingiza data", "Mwajiri ana adabu", "Kazi ni ya muda mfupi", "Wanakuomba ulipe ili ufanye kazi"], answer: 3, why: "Wateja halisi wanakulipa wewe; kukuomba ulipe ndiyo dalili kuu ya kazi bandia." },
            { objective: "O6", q: "Mteja anatuma zaidi ya kiasi mlichokubaliana na anakuomba urudishe ziada haraka. Huu ni nini?", options: ["Mteja mkarimu", "Ulaghai wa kulipwa zaidi", "Bonasi ya jukwaa", "Marejesho ya kodi"], answer: 1, why: "Malipo ya kwanza mara nyingi ni bandia na hurudishwa baada ya wewe kutuma pesa zako mwenyewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya kazi na kulipwa",
        questions: [
          { objective: "O4", q: "Kwa nini mkubaliane idadi ya mabadiliko kabla ya kuanza?", options: ["Ili mabadiliko yasiyoisha yasimalize muda wako bila malipo", "Ili mteja alipe kidogo", "Kwa sababu majukwaa yanataka mabadiliko matano", "Si muhimu"], answer: 0, why: "Mabadiliko yaliyokubaliwa yanalinda muda wako; kazi ya ziada inapata bei mpya." },
          { objective: "O4", q: "Mteja wako yuko London na wewe uko Nairobi. Kwa nini uandike saa za eneo pamoja na tarehe ya mwisho?", options: ["Ni adabu", "Saa zinatofautiana, kwa hiyo nyote mnajua hasa kazi inatakiwa lini", "Inaifanya kazi igharimu zaidi", "Majukwaa yanakataza tarehe ya mwisho bila hiyo"], answer: 1, why: "Saa zinatofautiana kati ya nchi; saa za eneo zinaondoa mkanganyiko." },
          { objective: "O5", q: "Kipi kinafaa kuwa kwenye kumbukumbu yako ya malipo?", options: ["Nywila yako", "PIN yako", "Tarehe, mteja, kazi, kiasi, sarafu na ada", "Anwani binafsi ya mteja"], answer: 2, why: "Taarifa hizi zinafuatilia mapato yako na zinasaidia kwa kodi." },
          { objective: "O6", q: "Ofa ipi ina uwezekano mkubwa zaidi kuwa halisi?", options: ["\"Lipa USD 30 ili kufungua kazi\"", "\"Tuma msimbo wako wa kuingia ili tukutengenezee akaunti\"", "\"Pata USD 500 kwa siku kwa kupenda video\"", "Mteja kwenye jukwaa anayekubaliana wigo na bei na kulipa kupitia jukwaa"], answer: 3, why: "Kazi halisi ina wigo na bei iliyo wazi na inalipwa kupitia njia salama." },
          { objective: "O6", q: "Mtu anataka \"kukodi\" akaunti yako ya mfanyakazi huru iliyothibitishwa. Unafanya nini?", options: ["Kukataa; inaweza kutumiwa kwa udanganyifu kwa jina lako", "Kukubali kwa ada ndogo", "Kutoa nywila tu", "Kumpa rafiki kwanza"], answer: 0, why: "Akaunti yako imefungamana na utambulisho wako; wengine wanaweza kuitumia vibaya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kazi Huru na Kazi za Mbali Mtandaoni kutoka Afrika",
    questions: [
      { objective: "O1", q: "Mfanyakazi huru ni nani?", options: ["Mtu anayefanya kazi bure", "Mtu anayefanya kazi ya kulipwa kwa wateja, kazi moja baada ya nyingine", "Mfanyakazi wa serikali", "Mmiliki wa jukwaa"], answer: 1, why: "Wafanyakazi huru wanauza huduma zao kazi kwa kazi kwa wateja tofauti." },
      { objective: "O1", q: "Ipi ni ofa imara ya mstari mmoja?", options: ["\"Ninafanya kila kitu\"", "\"Mfanyakazi mzuri, niajiri\"", "\"Kazi za mtandaoni\"", "\"Ninaandika maelezo ya bidhaa kwa maduka ya mtandaoni yanayowasaidia kuuza\""], answer: 3, why: "Inasema nini, kwa nani na matokeo." },
      { objective: "O1", q: "Unahitaji ujuzi zaidi kabla ya kuanza. Chaguo zuri la bure nchini Nigeria ni lipi?", options: ["Mpango wa 3MTT", "\"Chuo\" cha kulipia cha WhatsApp kinachoahidi kazi", "Kununua akaunti iliyothibitishwa", "App ya kazi ndogo inayoomba uweke pesa"], answer: 0, why: "3MTT ni mpango wa mafunzo wa serikali; mengine ni dalili za hatari." },
      { objective: "O2", q: "Kichwa cha wasifu kinapaswa:", options: ["Kuorodhesha namba yako ya simu", "Kusema huduma yako kwa maneno machache", "Kueleza historia yako yote ya maisha", "Kuonyesha namba yako ya kitambulisho"], answer: 1, why: "Kichwa kifupi kinawaambia wateja unachofanya kwa haraka." },
      { objective: "O2", q: "Upi ni mfano wa kazi wa kweli?", options: ["Kipeperushi ulichobuni kwa duka la kubuni", "Kazi ya mbunifu maarufu", "Insha ya rafiki", "Faili binafsi la mteja lililoonyeshwa bila ruhusa"], answer: 0, why: "Mifano unayotengeneza mwenyewe ni ushahidi wa kweli." },
      { objective: "O2", q: "Unawezaje kuokoa data unapotengeneza wasifu wako?", options: ["Kupakia picha kubwa sana", "Kuuandika upya mtandaoni mara nyingi", "Kuuandika bila intaneti kwanza, kisha kuubandika mara moja", "Kutumia simu za video tu"], answer: 2, why: "Kuandika bila intaneti na kupunguza ukubwa wa picha kunaokoa data ya gharama." },
      { objective: "O3", q: "Pendekezo la kwanza kwa kawaida linapaswa kuwa refu kiasi gani?", options: ["Kurasa mbili", "Neno moja", "Refu kadri iwezekanavyo", "Chini ya maneno 150 hivi"], answer: 3, why: "Mapendekezo mafupi husomwa; marefu hurukwa." },
      { objective: "O3", q: "Kipi kinafaa kuwa kwenye pendekezo?", options: ["Mfano unaohusiana na swali moja lenye manufaa", "PIN ya benki yako", "Ombi la ada ya awali", "Nakala ya kitambulisho chako"], answer: 0, why: "Ushahidi na swali zuri vinaonyesha unaweza kufanya kazi hiyo." },
      { objective: "O3", q: "Wateja wa kwanza mara nyingi wanaweza kupatikana wapi?", options: ["Nje ya nchi tu", "Kwenye tovuti moja tu", "Biashara za karibu, NGOs, shule na makanisa, pamoja na majukwaa", "Popote bila kumlipa mwajiri"], answer: 2, why: "Wafanyakazi huru wengi huanza na watu na biashara zilizo karibu nao." },
      { objective: "O4", q: "\"Wigo\" una maana gani?", options: ["Nchi ya mteja", "Hasa utakachokabidhi", "Bei yako", "Ada ya jukwaa"], answer: 1, why: "Wigo ni kazi hasa iliyokubaliwa." },
      { objective: "O4", q: "Mteja anaomba muundo mpya ambao haukuwa kwenye wigo mliokubaliana. Unafanya nini?", options: ["Kuufanya bure, mara nyingi", "Kupuuza ujumbe", "Kufuta kazi", "Kutoa kwa adabu bei mpya ya kazi hiyo ya ziada"], answer: 3, why: "Kazi ya ziada nje ya wigo ni kazi mpya yenye bei mpya." },
      { objective: "O4", q: "Upi ni mpango mzuri wa akiba kwa kukatika kwa umeme?", options: ["Kuchaji power bank na kuhifadhi kazi kwenye cloud mara kwa mara", "Kutumaini umeme hautakatika", "Kufanya kazi usiku wa mwisho tu", "Kutomwambia mteja chochote"], answer: 0, why: "Power bank, kuhifadhi kwenye cloud na mahali pa akiba vinakuwezesha kuwahi." },
      { objective: "O5", q: "Kwa nini uweke kazi na malipo ndani ya jukwaa?", options: ["Ni polepole zaidi", "Ulinzi wake wa malipo unafanya kazi humo tu", "Hakuna ada zozote", "Mteja anapendelea hivyo"], answer: 1, why: "Kutoka kwenye jukwaa kunaondoa ulinzi wake na ni njia ya kawaida ya ulaghai." },
      { objective: "O5", q: "Unajifunza wapi njia za sasa za kulipwa na ada za jukwaa?", options: ["Maoni kwenye YouTube", "Kukisia kwa rafiki", "Kituo cha msaada cha jukwaa lenyewe", "Mteja"], answer: 2, why: "Njia na ada zinatofautiana kwa nchi na hubadilika; kurasa za jukwaa lenyewe ndizo za sasa." },
      { objective: "O5", q: "Unapaswa kuandika malipo baada ya muda gani?", options: ["Ndani ya wiki moja", "Mwisho wa mwaka", "Kamwe", "Malipo makubwa tu"], answer: 0, why: "Kuandika mapema kunafanya kumbukumbu zako ziwe kamili kwa mipango na kodi." },
      { objective: "O5", q: "Nchini Ghana, nani anaweza kukueleza kuhusu kodi ya mapato yako ya mtandaoni?", options: ["Mteja wako", "Video ya TikTok", "Ghana Revenue Authority au mshauri wa kodi", "Roboti ya mazungumzo (chat bot) ya jukwaa"], answer: 2, why: "Mamlaka ya kodi ya nchi ndiyo inayoweka na kueleza sheria za kodi." },
      { objective: "O6", q: "Ipi ni dalili ya hatari ya kazi bandia?", options: ["Wigo na bei iliyo wazi", "Wanakuomba ulipie usajili au kifurushi cha kuanzia", "Malipo kupitia jukwaa", "Tarehe ya mwisho pamoja na saa za eneo"], answer: 1, why: "Wateja halisi hawakuombi kamwe ulipe ili ufanye kazi." },
      { objective: "O6", q: "\"Kazi\" inakuomba uweke pesa ili kufungua kazi ndogo zinazolipa zaidi. Huu ni:", options: ["Kazi ya kawaida", "Ada ya mafunzo", "Kodi", "Ulaghai wa kazi ndogo"], answer: 3, why: "Kuweka pesa ili kufungua kazi au mapato ni ulaghai wa kawaida." },
      { objective: "O6", q: "Nini kinalinda akaunti zako za kazi huru na za barua pepe?", options: ["Nywila moja kwa kila kitu", "Kuwapa wateja misimbo", "Nywila imara na tofauti na uthibitishaji wa hatua mbili", "Kuwakodisha wengine akaunti yako"], answer: 2, why: "Nywila tofauti na ukaguzi wa pili wa kuingia vinazuia uvamizi mwingi wa akaunti." },
      { objective: "O6", q: "Mwajiri anaomba picha ya kitambulisho chako na nywila ya barua pepe yako \"ili kukuthibitisha\". Unafanya nini?", options: ["Kukataa na kuripoti", "Kutuma vyote viwili", "Kutuma nywila tu", "Kutuma kitambulisho tu"], answer: 0, why: "Wateja halisi hawahitaji kamwe nywila yako; maombi ya kitambulisho kutoka kwa wageni ni hatari ya udanganyifu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ofa iliyo wazi", objective: "O1", notYet: "Ofa haiko wazi (\"Ninafanya kila kitu mtandaoni\").", meets: "Huduma moja, inayosema unachofanya, kwa nani na mteja anapata nini.", exceeds: "Ofa inataja aina mahususi ya mteja na matokeo yaliyo wazi au muda wa kukabidhi." },
      { name: "Wasifu na mifano", objective: "O2", notYet: "Hakuna kichwa wala maelezo, hakuna mifano, au taarifa binafsi zinaonekana.", meets: "Kichwa, maelezo mafupi na mifano miwili au mitatu aliyotengeneza mwanafunzi, bila taarifa binafsi.", exceeds: "Mifano inalingana kwa karibu na ofa, na maelezo yana ushahidi mmoja (mafunzo au kazi ya zamani)." },
      { name: "Pendekezo", objective: "O3", notYet: "Ni refu, limenakiliwa au halitaji hitaji la mteja.", meets: "Chini ya maneno 150, limeandikwa kwa tangazo: hitaji, jinsi, mfano mmoja, swali moja.", exceeds: "Swali linaonyesha kufikiri kwa kweli kuhusu kazi, na pendekezo linaendana na mtindo wa mteja." },
      { name: "Kukubaliana kuhusu kazi", objective: "O4", notYet: "Hakuna wigo wala tarehe ya mwisho iliyoandikwa.", meets: "Ujumbe wa wigo wenye wigo, bei, tarehe ya mwisho pamoja na saa za eneo na mabadiliko, pamoja na mpango wa akiba wa umeme au data.", exceeds: "Pia unaeleza jinsi kazi ya ziada itakavyopangiwa bei." },
      { name: "Malipo na kumbukumbu", objective: "O5", notYet: "Hakuna njia ya malipo wala jedwali la kumbukumbu.", meets: "Njia salama ya malipo (ndani ya jukwaa, au iliyokubaliwa mapema na mteja anayejulikana), jedwali la kumbukumbu, na mahali pa kuuliza kuhusu kodi.", exceeds: "Njia ya malipo ilikaguliwa kwenye ukurasa wa msaada wa jukwaa lenyewe." },
      { name: "Kujua ulaghai", objective: "O6", notYet: "Dalili za hatari chini ya nne, au ana mpango wa kulipa ada ili kupata kazi.", meets: "Anaorodhesha dalili sita za hatari za kazi bandia na anasema uthibitishaji wa hatua mbili umewashwa.", exceeds: "Anaongeza ofa halisi ya bandia aliyoiona na jinsi alivyoitambua." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaotuma angalau mapendekezo matatu ndani ya siku 30",
      "Wanafunzi wanaoripoti kazi yao ya kwanza ya kulipwa mtandaoni ndani ya siku 90",
      "Wanafunzi wanaoripoti kukataa kazi bandia au ulaghai wa malipo ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye data kiasi, na anwani ya barua pepe",
      "App ya notes au karatasi ya kuandika rasimu ya wasifu na pendekezo",
      "Zana za bure za kutengeneza mifano, kama Google Docs au Sheets, Canva au Microsoft 365",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi, pamoja na muda wa kutengeneza mifano"
    ],
    facilitatorNotes: [
      "Inafanya kazi vizuri katika vituo vya vijana, vituo vya Ajira, vikundi (clusters) vya 3MTT, maktaba na vikundi vya vijana vya kanisa au msikiti: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi.",
      "Leta matangazo ya kazi ya mfano yaliyochapishwa ili wanafunzi wajizoeze kuandika mapendekezo bila kutumia data.",
      "Usipendekeze \"vyuo vya kazi huru\" vya kulipia wala wauzaji wa akaunti; elekeza kwenye mafunzo ya bure na rasmi.",
      "Usiwaombe kamwe wanafunzi kutoa nywila, misimbo, nyaraka za kitambulisho au taarifa za malipo darasani.",
      "Waweke wanafunzi wawili wawili wakague mapendekezo ya kila mmoja kwa rubriki kabla ya kuyatuma.",
      "Kabla ya kipindi, kagua kurasa za sasa za msaada wa malipo za kila jukwaa kwa nchi yako; hubadilika."
    ]
  }
};
