"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-future-opportunities.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-future-opportunities-sw",
  lang: "sw",
  translationOf: "underserved-ai-future-opportunities",
  category: "Undeserved Community",
  name: "AI na Fursa za Baadaye",
  skills: "Kutambua mahali AI inabadilisha kazi, Kutafiti kazi inayokua, Kukagua ukweli wa kazi kwenye tovuti rasmi, Kupata mafunzo ya bure, Kuandaa mpango wa kujifunza",
  outcome: "kuchagua kazi moja inayokua inayokuvutia, kuitafiti kwa msaidizi wa AI wa bure na tovuti rasmi ya Marekani ya mwelekeo wa kazi, na kuandika mpango rahisi wa hatua tatu wa kuanza kujifunza kwa ajili yake kupitia mafunzo ya bure karibu nawe.",
  about: [
    "AI inabadilisha kazi nyingi: madukani, ofisini, maghalani, hospitalini, shuleni na nyumbani. Hilo linaweza kutisha. Kozi hii inakuonyesha jinsi ya kugeuza mabadiliko hayo kuwa fursa kwako na kwa familia yako.",
    "Utajifunza mahali AI inaonekana kazini, jinsi ya kutumia msaidizi wa AI wa bure kuchunguza kazi, jinsi ya kukagua anachosema kwenye tovuti rasmi, na jinsi ya kupata mafunzo ya bure kupitia maktaba yako, chuo cha jamii (community college) au American Job Center.",
    "Unaweza kufanya kila somo kwenye simu au kwenye kompyuta ya bure ya maktaba. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja kwa kazi moja inayokua: kazi hiyo ni nini, inalipa kiasi gani na inakua kwa kasi gani (umekagua kwenye Occupational Outlook Handbook rasmi), ujuzi miwili unaohitaji, na hatua tatu utakazochukua mwezi ujao kwa kutumia mafunzo ya bure karibu nawe.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana katika jamii zisizopata huduma za kutosha wanaofanya kazi madukani, ofisini, maghalani, katika huduma za afya, huduma za chakula au nyumbani, au wanaotafuta kazi, na wanaohofia jinsi AI itakavyobadilisha kazi zao.",
    startingPoint: "Wanaijua kazi yao vizuri na wanatumia simu. Wamesikia kwamba AI inabadilisha kazi lakini hawajui kazi zipi zinakua, wapi kupata ukweli rasmi kuhusu kazi, wala wapi kupata mafunzo ya bure.",
    gap: "AI inabadilisha kazi nyingi ndogo kazini, na watu wasio na mpango wanaweza kuachwa nyuma. Wanafunzi wanahitaji kupata kazi zinazokua kwa ukweli rasmi, kutumia AI kuzichunguza, kupata mafunzo ya bure na kuweka hatua ndogo zenye tarehe, huku wakiepuka ofa bandia za kazi na mafunzo.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: simu janja au kompyuta ya maktaba",
      "Gharama: tovuti rasmi za bure na mafunzo ya bure au ya gharama nafuu tu",
      "AI inaweza kukosea kuhusu mshahara, leseni na mafunzo: wanafunzi wanakagua bls.gov/ooh na tovuti rasmi za jimbo",
      "Hatari ya faragha na ulaghai: hakuna namba ya Social Security, namba za benki wala nywila katika AI au tovuti za kazi"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Utangulizi wa AI na Uwezeshaji wa Kidijitali\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi unayoijua wewe au familia yako", action: "kutambua kazi ndogo ambazo AI inaweza kusaidia na zile ambazo bado zinahitaji mtu", standard: "ukitaja angalau mbili za kila aina" },
    { id: "O2", condition: "Ukitumia Occupational Outlook Handbook kwenye bls.gov/ooh", action: "kupata kazi inayokua na kuandika mshahara wake wa wastani (median pay), mafunzo yake na mwelekeo wake", standard: "kutoka kwenye ukurasa wa sasa" },
    { id: "O3", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuuliza maswali yaliyo wazi kuhusu kazi za kila siku na ujuzi wa kazi fulani, kisha kukagua ukweli wa mshahara, leseni na mafunzo kwenye tovuti rasmi", standard: "bila taarifa binafsi ndani ya prompt" },
    { id: "O4", condition: "Ukipewa ujuzi ambao kazi inahitaji", action: "kupata sehemu mbili za bure au za gharama nafuu karibu nawe za kujifunza ujuzi huo", standard: "ukiandika jina, namba ya simu na saa za kazi za kila moja" },
    { id: "O5", condition: "Ukiwa na lengo la kazi", action: "kuandaa mpango wa ukurasa mmoja wenye hatua tatu ndogo na tarehe kwa kila moja", standard: "kila hatua iweze kufanyika ndani ya wiki moja au mbili na iendane na muda wako na familia yako" },
    { id: "O6", condition: "Ukipewa ofa ya kazi au ya mafunzo", action: "kuikagua kuona dalili za ulaghai na kutotoa namba zako za binafsi", standard: "kabla ya kulipa, kusaini au kutoa chochote" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi AI inavyobadilisha kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mahali AI inaonekana kazini leo",
          minutes: 4,
          goal: "Taja njia tatu ambazo AI tayari inatumika katika kazi zinazokuzunguka.",
          text: [
            "AI ni programu ya kompyuta inayoweza kufanya kazi ambazo kwa kawaida zinahitaji mtu, kama kuandika, kupanga, kujibu maswali au kutambua mifumo inayojirudia. Huenda tayari unaiona kila siku.",
            "Dukani, AI inasaidia kuamua kiasi cha bidhaa cha kuagiza. Katika kituo cha simu (call center), chatbot inajibu maswali rahisi kabla mtu hajachukua nafasi. Katika kliniki, programu inasaidia kuandika maelezo ya ziara ya mgonjwa. Ghalani, skana na roboti zinasaidia kufuatilia maboksi.",
            "Katika kazi nyingi, AI haichukui kazi nzima. Inachukua baadhi ya kazi ndogo, na watu wanafanya zilizobaki: kuzungumza na wateja, kutatua matatizo, kutengeneza vitu, kuwahudumia wengine na kufanya maamuzi."
          ],
          words: [["AI", "kifupi cha artificial intelligence (akili bandia): programu inayofanya kazi ambazo kwa kawaida zinahitaji mtu."], ["Kazi ndogo (task)", "sehemu moja ya kazi, kama kujibu simu au kuhesabu bidhaa."]],
          slides: [
            { title: "AI tayari iko kazini", bullets: ["Madukani: kuagiza bidhaa", "Vituo vya simu: chatbot zinajibu maswali rahisi", "Kliniki: kusaidia kuandika maelezo", "Maghalani: kufuatilia maboksi"] },
            { title: "AI inachukua kazi ndogo, si kazi nzima", bullets: ["Programu inafanya baadhi ya kazi ndogo", "Watu wanafanya zilizobaki"] },
            { title: "Watu bado ni bora katika", bullets: ["Kuzungumza na watu na kuwahudumia", "Kutatua matatizo mapya", "Kutengeneza vitu na kufanya maamuzi"] }
          ],
          tryIt: "Fikiria kazi ambayo wewe au mwanafamilia amewahi kuifanya. Andika kazi ndogo mbili ambazo AI inaweza kusaidia na mbili ambazo bado zinahitaji mtu.",
          youCanNow: "kutaja njia ambazo AI inatumika kazini na kueleza kwa nini watu bado wanahitajika.",
          quickCheck: [
            { objective: "O1", q: "AI ni nini?", options: ["Programu inayofanya kazi ambazo kwa kawaida zinahitaji mtu", "Aina mpya ya simu", "Mpango wa serikali wa ajira", "Roboti inayofanya kila kazi"], answer: 0, why: "AI ni programu inayoweza kuandika, kupanga, kujibu maswali au kutambua mifumo." },
            { objective: "O1", q: "Katika kliniki, programu inaandika maelezo ya ziara. Mtu bado anafanya kazi gani?", options: ["Kuandika kila neno la maelezo", "Kumfariji na kumhudumia mgonjwa", "Kuhesabu maelezo", "Hakuna; programu inafanya yote"], answer: 1, why: "AI inachukua baadhi ya kazi ndogo, lakini watu bado wanawahudumia wengine na kufanya maamuzi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kazi zinazokua na ujuzi zinazohitaji",
          minutes: 5,
          goal: "Pata kazi inayokua na mshahara wake kwenye Occupational Outlook Handbook rasmi.",
          text: [
            "Baadhi ya kazi zinakua kwa sababu ya teknolojia, na nyingine zinakua kwa sababu watu watazihitaji siku zote, kama huduma za afya, kazi za ufundi stadi na kuwatunza watoto na wazee.",
            "Ofisi ya Takwimu za Kazi ya Marekani (U.S. Bureau of Labor Statistics) inaendesha tovuti ya bure inayoitwa Occupational Outlook Handbook kwenye bls.gov/ooh. Kwa mamia ya kazi, inakuambia kazi ni nini, mshahara wa kawaida, mafunzo yanayohitajika na jinsi kazi inavyotarajiwa kukua kwa kasi.",
            "Kwa mfano, Handbook inatarajia kazi za kompyuta na teknolojia ya habari kwa ujumla kukua kwa kasi kuliko wastani kuanzia 2025 hadi 2035. Namba kama hizi zinasasishwa, kwa hiyo soma ukurasa wa sasa wewe mwenyewe kila wakati."
          ],
          steps: ["Nenda bls.gov/ooh kwenye simu au kompyuta ya maktaba.", "Chagua kundi la kazi, kama Healthcare au Computer and Information Technology.", "Bofya kazi moja.", "Andika mshahara, mafunzo yanayohitajika na mwelekeo wa kazi."],
          words: [["Mwelekeo wa kazi (job outlook)", "jinsi idadi ya kazi inavyotarajiwa kuongezeka au kupungua kwa kasi."], ["Mshahara wa wastani (median pay)", "mshahara wa katikati: nusu ya wafanyakazi wanapata zaidi na nusu wanapata kidogo."]],
          sources: [{ name: "U.S. Bureau of Labor Statistics: Occupational Outlook Handbook, Computer and Information Technology", url: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" }],
          slides: [
            { title: "Kazi zinazokua", bullets: ["Huduma za afya na utunzaji", "Kazi za ufundi stadi", "Kompyuta na teknolojia"] },
            { title: "Mwongozo wako wa bure wa kazi: bls.gov/ooh", bullets: ["Kazi ni nini", "Mshahara wa kawaida na mafunzo yanayohitajika", "Kazi inakua kwa kasi gani"] },
            { title: "Jinsi ya kuitumia", bullets: ["Chagua kundi la kazi", "Bofya kazi moja", "Andika mshahara, mafunzo na mwelekeo"] }
          ],
          tryIt: "Fungua bls.gov/ooh, chagua kazi moja inayokuvutia, na uandike mshahara wake wa wastani, mafunzo inayohitaji na mwelekeo wake.",
          youCanNow: "kutafuta kazi yoyote kwenye Occupational Outlook Handbook rasmi na kusoma mshahara, mafunzo na mwelekeo wake.",
          quickCheck: [
            { objective: "O2", q: "Nani anaendesha Occupational Outlook Handbook?", options: ["Tovuti binafsi ya kazi", "Kampuni ya habari", "Ofisi ya Takwimu za Kazi ya Marekani (U.S. Bureau of Labor Statistics)", "Chuo cha jamii"], answer: 2, why: "Handbook iliyo kwenye bls.gov/ooh inaendeshwa na U.S. Bureau of Labor Statistics." },
            { objective: "O2", q: "Rafiki anakuambia mshahara wa kazi kutoka ukurasa aliouhifadhi miaka iliyopita. Unafanya nini?", options: ["Unatumia namba yake", "Unakisia namba kubwa zaidi", "Unaiomba AI ithibitishe", "Unasoma ukurasa wa sasa kwenye bls.gov/ooh"], answer: 3, why: "Namba za mshahara na mwelekeo zinasasishwa, kwa hiyo unasoma ukurasa wa sasa wewe mwenyewe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutumia AI kuchunguza kazi",
          minutes: 5,
          goal: "Uliza msaidizi wa AI wa bure maswali yaliyo wazi kuhusu kazi, kisha kagua majibu.",
          text: [
            "Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini anaweza kueleza kazi kwa maneno rahisi, kuorodhesha ujuzi inaohitaji na kupendekeza maswali ya kuwauliza watu wanaoifanya.",
            "Mweleze hali yako bila taarifa binafsi. Kwa mfano: \"Nimefanya kazi katika mgahawa wa vyakula vya haraka kwa miaka 3 na napenda kusaidia watu. Eleza msaidizi wa matibabu (medical assistant) anafanya nini katika siku ya kawaida, kwa maneno rahisi.\"",
            "AI inaweza kukosea kuhusu mshahara, leseni na mafunzo. Kagua ukweli huo kwenye bls.gov/ooh au tovuti rasmi ya jimbo lako kabla ya kupanga mipango."
          ],
          steps: ["Fungua msaidizi wa AI wa bure.", "Mwambie kazi hiyo na kidogo kuhusu uzoefu wako.", "Uliza siku ya kawaida ikoje na ujuzi gani unahitajika.", "Kagua mshahara na mafunzo kwenye bls.gov/ooh."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI."], ["Leseni", "ruhusa rasmi kutoka kwa jimbo ya kufanya kazi fulani."]],
          slides: [
            { title: "AI inaweza kukusaidia kuchunguza", bullets: ["Kueleza kazi kwa maneno rahisi", "Kuorodhesha ujuzi unaohitajika", "Kupendekeza maswali ya kuwauliza wafanyakazi"] },
            { title: "Prompt nzuri", bullets: ["Kazi unayotaka kujifunza kuihusu", "Kidogo kuhusu uzoefu wako", "Jinsi unavyotaka jibu: maneno rahisi, orodha"] },
            { title: "Kagua kila wakati", bullets: ["Mshahara, leseni na mafunzo vinaweza kukosewa", "Kagua kwenye bls.gov/ooh au tovuti ya jimbo lako"] }
          ],
          tryIt: "Muulize msaidizi wa AI aeleze siku ya kawaida ya kazi uliyochagua na ujuzi wake mitano muhimu zaidi. Linganisha ukweli mmoja na kile bls.gov/ooh inasema.",
          youCanNow: "kutumia AI kujifunza kuhusu kazi na kukagua ukweli wake kwenye tovuti rasmi.",
          quickCheck: [
            { objective: "O3", q: "Ni ukweli upi kutoka AI lazima uukague kwenye tovuti rasmi?", options: ["Mshahara, leseni na mafunzo", "Jinsi ya kuandika jina la kazi", "Neno \"kazi\" linamaanisha nini", "Jina la AI"], answer: 0, why: "AI inaweza kukosea kuhusu mshahara, leseni na mafunzo, kwa hiyo unavikagua." },
            { objective: "O3", q: "Unataka AI ikueleze kazi ya msimamizi wa ghala. Unaweka nini?", options: ["Namba yako ya Social Security", "Uzoefu wako na unachopenda, bila taarifa binafsi", "Taarifa zako za benki", "Hakuna chochote kukuhusu"], answer: 1, why: "Uzoefu wako unaisaidia AI kukueleza kazi; taarifa binafsi zinabaki nje." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi AI inavyobadilisha kazi",
        questions: [
          { objective: "O1", q: "Katika kazi nyingi, AI inafanya nini?", options: ["Inachukua nafasi ya kila mfanyakazi", "Inachukua baadhi ya kazi ndogo huku watu wakifanya zilizobaki", "Haifanyi chochote", "Inafanya maamuzi yote"], answer: 1, why: "Kwa kawaida AI inashughulikia baadhi ya kazi ndogo; watu bado wanafanya sehemu zinazohitaji busara na huduma." },
          { objective: "O2", q: "Ni tovuti rasmi ipi ya bure inayoonyesha mshahara, mafunzo na mwelekeo wa kazi?", options: ["Ukurasa wa mitandao ya kijamii", "Tangazo linalojitokeza (pop-up)", "Occupational Outlook Handbook kwenye bls.gov/ooh", "Kiungo katika ujumbe mfupi"], answer: 2, why: "Bureau of Labor Statistics inaendesha Occupational Outlook Handbook." },
          { objective: "O2", q: "\"Mshahara wa wastani (median pay)\" unamaanisha nini?", options: ["Mshahara wa juu kabisa", "Mshahara wa chini kabisa", "Mshahara baada ya kodi", "Mshahara wa katikati: nusu wanapata zaidi, nusu wanapata kidogo"], answer: 3, why: "Median ni namba ya katikati." },
          { objective: "O3", q: "AI inakuambia kazi fulani haihitaji leseni katika jimbo lako. Unafanya nini?", options: ["Unakagua kwenye tovuti rasmi ya jimbo lako au bls.gov/ooh", "Unaiamini", "Unaacha kazi yako leo", "Unamwambia kila mtu"], answer: 0, why: "AI inaweza kukosea kuhusu leseni; tovuti rasmi ndizo chanzo cha kuaminika." },
          { objective: "O3", q: "Prompt ipi ni bora zaidi kuchunguza kazi?", options: ["\"kazi\"", "\"Nimefanya kazi miaka 3 katika vyakula vya haraka na napenda kusaidia watu. Eleza msaidizi wa matibabu anafanya nini kwa siku, kwa maneno rahisi.\"", "\"Hii ni namba yangu ya Social Security\"", "\"pesa\""], answer: 1, why: "Inataja kazi, inaeleza uzoefu wako na inasema jinsi unavyotaka jibu." }
        ]
      }
    },
    {
      name: "Sura 2: Kujiandaa kwa hatua yako inayofuata",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupata mafunzo ya bure karibu nawe",
          minutes: 5,
          goal: "Pata sehemu mbili za bure au za gharama nafuu za kujifunza ujuzi wa kazi yako.",
          text: [
            "Huhitaji pesa nyingi ili kuanza kujifunza. Maktaba za umma mara nyingi zinatoa madarasa ya bure ya kompyuta na mafunzo ya bure mtandaoni. Vyuo vya jamii (community colleges) vinatoa vyeti kwa gharama nafuu, na wanafunzi wengi wanastahili msaada wa kifedha (financial aid).",
            "American Job Centers zinaendeshwa kwa ushirikiano na Wizara ya Kazi ya Marekani (U.S. Department of Labor). Zinasaidia kutafuta kazi, kupendekezwa kwa waajiri na mafunzo. Baadhi ya huduma zina masharti ya kustahili, kwa hiyo uliza kituo cha karibu nawe unastahili nini. Pata kimoja kwa CareerOneStop American Job Center Finder au piga 1-877-US-2JOBS.",
            "Muulize msaidizi wa AI wa bure: \"Ni njia gani za bure ninazoweza kujifunza ujuzi wa msingi wa kazi ya msaidizi wa matibabu?\" Kisha kagua kila wazo na maktaba, chuo au kituo cha kazi chenyewe."
          ],
          steps: ["Uliza maktaba yako inatoa madarasa gani ya bure na mafunzo gani mtandaoni.", "Tafuta chuo cha jamii kilicho karibu na programu zake za vyeti.", "Pata American Job Center iliyo karibu nawe kwa kutumia CareerOneStop finder.", "Andika sehemu mbili, namba zao za simu na saa zao za kazi."],
          words: [["Cheti (certificate)", "programu fupi ya mafunzo inayothibitisha kwamba umejifunza ujuzi wa kazi."], ["American Job Center", "ofisi ya eneo lako, inayoendeshwa kwa ushirikiano na U.S. Department of Labor, inayosaidia watu kupata kazi na mafunzo."]],
          sources: [{ name: "U.S. Department of Labor: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" }, { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          slides: [
            { title: "Sehemu za bure na za gharama nafuu za kujifunza", bullets: ["Madarasa ya maktaba ya umma na mafunzo mtandaoni", "Vyeti vya vyuo vya jamii", "American Job Centers"] },
            { title: "American Job Centers", bullets: ["Msaada wa kutafuta kazi na mafunzo", "Baadhi ya huduma zina masharti ya kustahili", "Pata kimoja: CareerOneStop finder au 1-877-US-2JOBS"] },
            { title: "Tumia AI, kisha piga simu", bullets: ["Uliza AI njia za bure za kujifunza", "Kagua kila wazo na sehemu yenyewe"] }
          ],
          tryIt: "Pata sehemu mbili karibu nawe ambapo unaweza kujifunza ujuzi wa kazi yako. Andika jina, namba ya simu na saa za kazi za kila moja.",
          youCanNow: "kupata mafunzo ya bure au ya gharama nafuu karibu nawe kwa kazi unayotaka.",
          quickCheck: [
            { objective: "O4", q: "Vyuo vya jamii mara nyingi vinatoa nini?", options: ["Magari ya bure", "Shahada za miaka minne tu", "Vyeti vya gharama nafuu, na msaada wa kifedha kwa wanafunzi wengi", "Kazi zenye mshahara siku ya kwanza"], answer: 2, why: "Vyuo vya jamii vinatoa vyeti vya gharama nafuu, na wanafunzi wengi wanastahili msaada." },
            { objective: "O4", q: "Huna uhakika kama unastahili mafunzo katika American Job Center. Unafanya nini?", options: ["Unadhani hustahili", "Unalipa tovuti ili ujue", "Unaacha mafunzo", "Unauliza kituo cha karibu nawe unastahili nini"], answer: 3, why: "Baadhi ya huduma zina masharti ya kustahili, kwa hiyo unauliza kituo moja kwa moja." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kugeuza lengo kuwa hatua ndogo",
          minutes: 4,
          goal: "Gawa lengo la kazi kuwa hatua tatu ndogo zenye tarehe.",
          text: [
            "Lengo kubwa kama \"kupata kazi bora\" linaweza kuonekana kubwa mno. Hatua ndogo zenye tarehe zinalifanya kuwa halisi.",
            "Hatua nzuri ni kitu unachoweza kumaliza ndani ya wiki moja au mbili: \"Piga simu maktaba Jumanne ujiandikishe kwa darasa la kompyuta.\" \"Zungumza na mtu mmoja anayefanya kazi ya msaidizi wa matibabu kufikia tarehe 15.\"",
            "Unaweza kumwomba msaidizi wa AI akusaidie: \"Nisaidie kugawa lengo langu la kuwa msaidizi wa matibabu kuwa hatua tatu ndogo kwa mwezi ujao. Ninaweza kutumia saa 3 kwa wiki.\" Kisha badilisha mpango ili uendane na maisha yako, familia yako na ratiba yako."
          ],
          steps: ["Andika lengo lako kwa sentensi moja.", "Iombe AI ilikugawie kuwa hatua tatu ndogo.", "Ipe kila hatua tarehe.", "Badilisha mpango uendane na muda wako na familia yako."],
          words: [["Lengo", "kitu unachotaka kufikia."], ["Tarehe ya mwisho (deadline)", "tarehe unayopanga kumaliza hatua."]],
          slides: [
            { title: "Malengo makubwa yanahitaji hatua ndogo", bullets: ["\"Kupata kazi bora\" ni kubwa mno", "Hatua ndogo zinalifanya kuwa halisi"] },
            { title: "Hatua nzuri", bullets: ["Unaweza kuimaliza ndani ya wiki moja au mbili", "Ina tarehe", "Mfano: piga simu maktaba Jumanne"] },
            { title: "Acha AI isaidie, kisha rekebisha", bullets: ["Iambie lengo lako na muda wako", "Badilisha mpango uendane na maisha yako"] }
          ],
          tryIt: "Andika lengo lako la kazi kwa sentensi moja. Muombe msaidizi wa AI aligawe kuwa hatua tatu kwa mwezi ujao, kisha weka tarehe kwa kila hatua.",
          youCanNow: "kugeuza lengo la kazi kuwa hatua tatu ndogo zenye tarehe.",
          quickCheck: [
            { objective: "O5", q: "Ipi ni hatua ndogo unayoweza kumaliza ndani ya wiki moja au mbili?", options: ["Zungumza na msaidizi mmoja wa matibabu kufikia tarehe 15", "Kuwa muuguzi", "Pata kazi bora", "Badilisha taaluma siku moja"], answer: 0, why: "Hatua ndogo ni mahususi, inaweza kufanyika hivi karibuni na ina tarehe." },
            { objective: "O5", q: "Mpango wa AI unasema usome saa 10 kwa wiki, lakini una saa 3. Unafanya nini?", options: ["Unaufuata hata hivyo", "Unabadilisha mpango uendane na muda wako", "Unakata tamaa", "Unaiomba AI ikusomee"], answer: 1, why: "Unabadilisha mpango ili uendane na maisha yako, familia yako na ratiba yako." }
          ]
        },
        {
          objectives: ["O6","O5"],
          title: "Mpango wako, na kubaki salama unapotafuta",
          minutes: 5,
          goal: "Maliza mpango wako wa ukurasa mmoja na utambue ofa bandia za kazi na mafunzo.",
          text: [
            "Weka yote pamoja kwenye ukurasa mmoja: kazi, mshahara wake na mwelekeo wake kutoka bls.gov/ooh, ujuzi miwili unaohitaji, sehemu mbili za kujifunza, na hatua tatu zenye tarehe. Uuweke kwenye simu yako au uuchapishe maktaba.",
            "Kuwa mwangalifu. Matapeli wanatangaza kazi bandia na mafunzo bandia. Dalili za hatari: wanakuomba ulipe ili upate kazi, wanaomba namba yako ya benki au ya Social Security kabla ya usaili, wanaahidi mshahara mkubwa kwa kazi kidogo, au wanakuharakisha.",
            "Usiandike kamwe namba yako ya Social Security, taarifa za benki au nywila kwenye msaidizi wa AI. Kagua programu yoyote ya mafunzo na maktaba yako, kituo cha kazi au tovuti rasmi ya shule kabla ya kulipa au kusaini chochote."
          ],
          steps: ["Andika kazi, mshahara na mwelekeo.", "Ongeza ujuzi miwili na sehemu mbili za kujifunza.", "Ongeza hatua zako tatu zenye tarehe.", "Kagua kila ofa kuona dalili za ulaghai kabla ya kutoa chochote."],
          words: [["Ulaghai (scam)", "hila ya kuiba pesa au taarifa."]],
          slides: [
            { title: "Mpango wako wa ukurasa mmoja", bullets: ["Kazi, mshahara na mwelekeo (kutoka bls.gov/ooh)", "Ujuzi miwili na sehemu mbili za kujifunza", "Hatua tatu zenye tarehe"] },
            { title: "Dalili za kazi bandia", bullets: ["Lazima ulipe ili upate kazi", "Wanataka namba ya benki au SSN kabla ya usaili", "Mshahara mkubwa kwa kazi kidogo, au kukuharakisha"] },
            { title: "Baki salama", bullets: ["Hakuna namba za binafsi katika AI", "Kagua mafunzo na maktaba au kituo cha kazi", "Angalia kabla ya kulipa au kusaini"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wenye kazi, mshahara na mwelekeo, ujuzi miwili, sehemu mbili za kujifunza na hatua tatu zenye tarehe. Ukague uone kama kuna kitu cha binafsi kabla ya kuushiriki.",
          youCanNow: "kuandaa mpango halisi uliokaguliwa kwa kazi inayokua na kuepuka ulaghai wa kawaida wa kazi.",
          quickCheck: [
            { objective: "O6", q: "Ipi ni dalili ya hatari ya kazi bandia?", options: ["Usaili katika ofisi ya kampuni", "Tangazo kwenye tovuti ya kampuni yenyewe", "Kuharakishwa ulipe kabla ya kuajiriwa", "Kazi iliyoorodheshwa na American Job Center yako"], answer: 2, why: "Waajiri halisi hawakuombi ulipe ili upate kazi wala hawakuharakishi." },
            { objective: "O6", q: "Shule ya mafunzo mtandaoni inataka malipo leo kwa ajili ya \"kazi ya uhakika\". Unafanya nini?", options: ["Unalipa leo ili kushika nafasi yako", "Unatuma namba yako ya benki", "Unawashirikisha marafiki kwanza", "Unaikagua kwenye tovuti rasmi ya shule, maktaba yako au kituo cha kazi"], answer: 3, why: "Kagua programu yoyote ya mafunzo na vyanzo vya kuaminika kabla ya kulipa au kusaini." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujiandaa kwa hatua yako inayofuata",
        questions: [
          { objective: "O4", q: "Mara nyingi unaweza kupata madarasa ya bure ya kompyuta wapi?", options: ["Tangazo linalojitokeza (pop-up)", "Ujumbe kutoka kwa mtu usiyemjua", "Maktaba yako ya umma", "Duka la kadi za zawadi"], answer: 2, why: "Maktaba nyingi za umma zinatoa madarasa ya bure na mafunzo mtandaoni." },
          { objective: "O4", q: "American Job Center ni nini?", options: ["Ofisi ya eneo lako inayosaidia kupata kazi na mafunzo", "Duka", "Benki", "App ya mitandao ya kijamii"], answer: 0, why: "American Job Centers zinaendeshwa kwa ushirikiano na U.S. Department of Labor kuwasaidia watafuta kazi." },
          { objective: "O5", q: "Ipi ni hatua ndogo nzuri?", options: ["\"Kuwa tajiri\"", "\"Siku moja nijifunze mambo\"", "\"Pata kila kazi\"", "\"Piga simu maktaba Jumanne ujiandikishe kwa darasa la kompyuta\""], answer: 3, why: "Ni ndogo, iko wazi na ina tarehe." },
          { objective: "O6", q: "Tangazo la kazi linakuomba ulipe $100 ili uajiriwe. Hii ni:", options: ["Kawaida", "Dalili ya hatari ya ulaghai", "Ofa nzuri sana", "Sheria ya serikali"], answer: 1, why: "Waajiri halisi hawakutozi pesa ili upate kazi." },
          { objective: "O6", q: "AI inapendekeza programu ya mafunzo. Kabla ya kulipa, unapaswa:", options: ["Kuikagua kwenye tovuti rasmi ya shule, maktaba yako au kituo cha kazi", "Kulipa mara moja", "Kuipa AI namba yako ya benki", "Kupuuza mafunzo yote"], answer: 0, why: "Kagua programu yoyote na chanzo cha kuaminika kabla ya kulipa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI na Fursa za Baadaye",
    questions: [
      { objective: "O1", q: "AI inaelezwa vizuri zaidi kama:", options: ["Aina ya simu", "Programu inayofanya kazi ambazo kwa kawaida zinahitaji mtu", "Ofisi ya serikali", "Cheo cha kazi"], answer: 1, why: "AI ni programu inayoandika, kupanga, kujibu au kutambua mifumo." },
      { objective: "O1", q: "Ipi ni mfano wa AI kazini?", options: ["Chatbot inayojibu maswali rahisi ya wateja", "Stepla", "Kalenda ya karatasi", "Ufagio"], answer: 0, why: "Chatbot ni AI zinazojibu maswali rahisi." },
      { objective: "O1", q: "Ni kazi ndogo ipi ambayo mtu bado ni bora zaidi?", options: ["Kuhesabu vitu vilevile tena na tena", "Kupanga barua pepe kwa tarehe", "Kumfariji mgonjwa mwenye wasiwasi", "Kunakili namba kwenye jedwali"], answer: 2, why: "Kuwahudumia watu kunahitaji binadamu." },
      { objective: "O2", q: "Occupational Outlook Handbook ni nini?", options: ["Mwongozo wa bure wa serikali ya Marekani kuhusu kazi, mishahara na mafunzo", "Jarida la kulipia", "Ukurasa wa mitandao ya kijamii", "App ya benki"], answer: 0, why: "Inaendeshwa na Bureau of Labor Statistics kwenye bls.gov/ooh." },
      { objective: "O2", q: "\"Mwelekeo wa kazi (job outlook)\" unakuambia:", options: ["Mavazi ya kazini", "Jinsi idadi ya kazi inavyotarajiwa kuongezeka au kupungua kwa kasi", "Jina la bosi", "Anwani ya kazi"], answer: 1, why: "Mwelekeo unahusu ukuaji unaotarajiwa." },
      { objective: "O2", q: "Kwa nini usome ukurasa wa sasa badala ya kuamini namba ya zamani?", options: ["Namba za zamani ni sahihi kila wakati", "Kurasa hazibadiliki kamwe", "Namba za mshahara na mwelekeo zinasasishwa kadiri muda unavyokwenda", "Haijalishi"], answer: 2, why: "Namba za kazi zinabadilika, kwa hiyo soma ukurasa rasmi wa karibuni." },
      { objective: "O3", q: "Prompt ipi itakupa jibu lenye manufaa zaidi kuhusu kazi?", options: ["\"kazi\"", "\"msaada\"", "\"mambo ya kazi\"", "\"Napenda kutengeneza vitu na nina miaka 2 katika matengenezo. Eleza fundi wa HVAC (mifumo ya joto na viyoyozi) anafanya nini, kwa maneno rahisi.\""], answer: 3, why: "Inataja kazi, uzoefu wako na jinsi unavyotaka jibu." },
      { objective: "O3", q: "AI inakupa namba ya mshahara wa kazi. Unapaswa:", options: ["Kuikagua kwenye bls.gov/ooh", "Kuiamini kabisa", "Kuiweka mtandaoni", "Kupuuza mishahara yote"], answer: 0, why: "AI inaweza kukosea; kagua mshahara kwenye tovuti rasmi." },
      { objective: "O3", q: "Leseni ni nini?", options: ["App ya simu", "Ruhusa rasmi kutoka kwa jimbo ya kufanya kazi fulani", "Tangazo la kazi", "Aina ya CV (wasifu wa kazi)"], answer: 1, why: "Baadhi ya kazi zinahitaji leseni ya jimbo." },
      { objective: "O4", q: "Ipi ni sehemu ya gharama nafuu ya kupata cheti cha kazi?", options: ["Tangazo linalojitokeza (pop-up)", "Chuo cha jamii", "Mtu usiyemjua mtandaoni", "Duka la kadi za zawadi"], answer: 1, why: "Vyuo vya jamii vinatoa vyeti vya gharama nafuu, na msaada wa kifedha unaweza kusaidia." },
      { objective: "O4", q: "Unawezaje kupata American Job Center?", options: ["Kumuuliza tapeli", "Kukisia", "Kutumia CareerOneStop finder au kupiga 1-877-US-2JOBS", "Kwa barua tu"], answer: 2, why: "Hizo ndizo njia rasmi ambazo Department of Labor inaorodhesha." },
      { objective: "O4", q: "Baadhi ya huduma za American Job Center zina:", options: ["Masharti ya kustahili, kwa hiyo uliza unastahili nini", "Nywila ya siri", "Kadi ya zawadi ya lazima", "Hakuna wafanyakazi kabisa"], answer: 0, why: "Department of Labor inasema baadhi ya huduma zina masharti ya kustahili." },
      { objective: "O5", q: "Kwa nini ugawe lengo kubwa kuwa hatua ndogo?", options: ["Linafanya lengo litoweke", "Linafanya lengo kuwa halisi na linalowezekana", "Linatakiwa na sheria", "Linagharimu pesa"], answer: 1, why: "Hatua ndogo zenye tarehe ni rahisi kuanza na kumaliza." },
      { objective: "O5", q: "Hatua nzuri ina:", options: ["Haina tarehe", "Kitu unachoweza kumaliza ndani ya wiki moja au mbili, chenye tarehe", "Kazi ya miaka kumi", "Tamaa tu"], answer: 1, why: "Hatua ndogo zenye tarehe zinakufanya uendelee kusonga mbele." },
      { objective: "O5", q: "Baada ya AI kukutengenezea mpango, unapaswa:", options: ["Kuufuata hasa vilevile hata iweje", "Kuufuta", "Kuubadilisha uendane na muda wako na familia yako", "Kutoa namba yako ya benki"], answer: 2, why: "Wewe ndiye unayeyajua maisha yako vizuri zaidi; rekebisha mpango." },
      { objective: "O5", q: "Mpango wako wa ukurasa mmoja unapaswa kuwa na:", options: ["Nywila zako", "Namba yako ya benki", "Namba yako ya Social Security", "Kazi, mshahara na mwelekeo wake, ujuzi, sehemu za kujifunza na hatua zenye tarehe"], answer: 3, why: "Sehemu hizo zinafanya mpango kamili na salama." },
      { objective: "O6", q: "Ofa ya kazi inaomba namba yako ya Social Security kabla ya usaili wowote. Hii ni:", options: ["Dalili ya hatari", "Kawaida kwa kila kazi", "Zawadi", "Inatakiwa na AI"], answer: 0, why: "Kuomba namba za binafsi mapema mno ni dalili ya ulaghai." },
      { objective: "O6", q: "Ni kipi hupaswi kuandika kamwe kwenye msaidizi wa AI?", options: ["\"Ifanye rahisi zaidi\"", "\"Mpishi anahitaji ujuzi gani?\"", "Namba yako ya akaunti ya benki", "\"Nipe hatua tatu\""], answer: 2, why: "Taarifa za benki ni taarifa binafsi." },
      { objective: "O6", q: "\"Mshahara mkubwa kwa kazi kidogo, anza leo!\" kwa uwezekano mkubwa ni:", options: ["Kazi ya serikali", "Dalili ya hatari ya ulaghai", "Darasa la maktaba", "Cheti"], answer: 1, why: "Ahadi zinazoonekana nzuri mno ni dalili ya kawaida ya ulaghai." },
      { objective: "O6", q: "Kabla ya kulipia programu ya mafunzo, ikague na:", options: ["Tangazo linalojitokeza (pop-up)", "Mtu anayeiuza tu", "Hakuna mtu", "Tovuti rasmi ya shule, maktaba yako au kituo cha kazi"], answer: 3, why: "Vyanzo vya kuaminika na huru vinakusaidia kuepuka programu bandia." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      3,
      4,
      7,
      10,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ukweli wa kazi",
        objective: "O2",
        notYet: "Mshahara au mwelekeo haupo au haukutoka bls.gov/ooh.",
        meets: "Kazi, ni nini, mshahara wake na mwelekeo wake, vimekaguliwa kwenye ukurasa wa sasa wa bls.gov/ooh.",
        exceeds: "Pia inaorodhesha mafunzo ambayo kazi inahitaji."
      },
      {
        name: "Ujuzi",
        objective: "O3",
        notYet: "Hakuna ujuzi, au ujuzi usioendana na kazi.",
        meets: "Ujuzi miwili ambao kazi inahitaji.",
        exceeds: "Inaonyesha ujuzi upi mwanafunzi tayari anao kutoka kazi za zamani."
      },
      {
        name: "Sehemu za kujifunza",
        objective: "O4",
        notYet: "Chini ya sehemu mbili, au hakuna taarifa za mawasiliano.",
        meets: "Sehemu mbili za bure au za gharama nafuu zenye jina, namba ya simu na saa za kazi.",
        exceeds: "Inaonyesha kila sehemu inatoa nini na masharti yoyote ya kustahili ya kuuliza."
      },
      {
        name: "Hatua tatu zenye tarehe",
        objective: "O5",
        notYet: "Hatua haziko wazi au hazina tarehe.",
        meets: "Hatua tatu ndogo kwa mwezi ujao, kila moja na tarehe.",
        exceeds: "Zimeendana na muda halisi wa mwanafunzi na ratiba ya familia yake."
      },
      {
        name: "Salama kushiriki",
        objective: "O6",
        notYet: "Mpango una namba ya binafsi, au ofa ya mafunzo haikukaguliwa.",
        meets: "Hakuna namba za binafsi, na ofa zimekaguliwa kuona dalili za hatari.",
        exceeds: "Anaweza kutaja dalili za hatari alizotafuta."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaokamilisha angalau hatua moja ya mpango wao ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaojiandikisha katika mafunzo ya bure au ya gharama nafuu ndani ya siku 90",
      "Wanafunzi wanaopata kazi au kupandishwa cheo katika fani waliyochagua ndani ya miezi 12"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Occupational Outlook Handbook kwenye bls.gov/ooh",
      "Karatasi au kidokezo kwenye simu kwa mpango wa ukurasa mmoja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fungueni bls.gov/ooh pamoja kwenye projekta na mpitie kazi moja kabla wanafunzi hawajachagua zao.",
      "Leta orodha ya maktaba za eneo, vyuo vya jamii na American Job Center iliyo karibu zaidi.",
      "Wakumbushe wanafunzi kukagua ukweli wa mshahara na leseni kwenye tovuti rasmi, si kwenye AI peke yake.",
      "Pitieni dalili za hatari za kazi na mafunzo bandia; usiwaombe kamwe wanafunzi kutoa namba za binafsi.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
