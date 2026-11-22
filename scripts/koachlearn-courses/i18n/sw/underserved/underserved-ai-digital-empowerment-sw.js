"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-digital-empowerment.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-digital-empowerment-sw",
  lang: "sw",
  translationOf: "underserved-ai-digital-empowerment",
  category: "Undeserved Community",
  name: "Utangulizi wa AI na Uwezeshaji wa Kidijitali",
  skills: "Kuingia mtandaoni bure au kwa gharama ndogo, Kufungua msaidizi wa AI wa bure, Kuomba msaada kwa maneno rahisi, Kugeuza barua ngumu kuwa orodha ya mambo ya kufanya, Kukagua majibu na kulinda taarifa zako",
  outcome: "kuingia mtandaoni kwenye maktaba, kituo cha jamii au kwenye simu yako, na kutumia msaidizi wa AI wa bure kugeuza barua au tangazo linalochanganya kuwa maneno rahisi na orodha fupi ya mambo ya kufanya, bila kutoa taarifa binafsi.",
  about: [
    "Kozi hii ni kwa yeyote anayehisi ameachwa nyuma na teknolojia, au aliyewahi kuambiwa kwamba kompyuta na AI \"si za watu kama sisi\". Ni zako pia, na zana nyingi bora ni za bure.",
    "Utapata njia za bure au za gharama ndogo za kuingia mtandaoni, utafungua msaidizi wa AI wa bure, na utautumia kwa kazi halisi za familia: kusoma barua ngumu, kupanga wiki yenye shughuli nyingi, au kuandika ujumbe kwa shule au mwenye nyumba.",
    "Kila somo linachukua kama dakika tano. Lisome, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa mwishoni mwa kila sura, na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Chukua barua au tangazo halisi ulilopokea (kutoka shule, kliniki, mwenye nyumba au kampuni ya huduma kama umeme au maji). Funika au acha nje kila namba na jina la binafsi. Muombe msaidizi wa AI wa bure alieleze kwa maneno rahisi na atengeneze orodha fupi ya mambo ya kufanya yenye tarehe. Kisha kagua tarehe moja au namba moja ya simu kwenye tovuti rasmi au kwa kupiga simu ofisini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika jamii zisizohudumiwa vya kutosha wanaohisi wameachwa nyuma na teknolojia: familia zenye kipato kidogo, wazee, wazazi, watu wasio na kompyuta nyumbani, na watu wanaozungumza Kiingereza kama lugha ya pili.",
    startingPoint: "Wanaweza kupiga simu na kutuma ujumbe mfupi kwenye simu. Wanatumia kidogo au hawatumii kabisa kompyuta, vivinjari vya wavuti au wasaidizi wa AI, na baadhi wameambiwa kwamba teknolojia \"si ya watu kama sisi\".",
    gap: "Shule, kliniki, wenye nyumba na ofisi za serikali hutuma barua na kutarajia watu wachukue hatua mtandaoni. Wanafunzi wanahitaji mahali pa bure pa kuingia mtandaoni na njia salama ya kutumia msaidizi wa AI wa bure kuelewa barua na kupanga la kufanya, bila kudanganywa na majibu yasiyo sahihi au ulaghai.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: huenda wana simu ya kawaida tu au kompyuta ya maktaba yenye muda mfupi",
      "Gharama: zana za bure tu na mahali pa bure pa kuingia mtandaoni",
      "Hatari kubwa ya ulaghai na faragha: hakuna namba wala majina halisi ya binafsi katika zoezi lolote",
      "Muda: masomo mafupi yanayoingia kati ya kazi, familia na miadi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Mahali unapoishi", action: "kutaja mahali pa bure pa kuingia mtandaoni na programu moja inayoweza kupunguza bili yako ya simu au intaneti", standard: "ukitaja angalau mahali pawili pamoja na saa zake za kazi" },
    { id: "O2", condition: "Ukipewa orodha ya kazi za kila siku", action: "kutambua zipi msaidizi wa AI anaweza kusaidia na nani anaamua la kufanya na jibu lake", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O3", condition: "Ukitumia kompyuta ya maktaba au simu", action: "kufungua msaidizi wa AI wa bure kutoka kwenye app au tovuti yake rasmi na kuuliza swali linalosema unachohitaji, hali yako na jinsi unavyotaka jibu", standard: "bila msaada" },
    { id: "O4", condition: "Ukipewa barua au tangazo linalochanganya", action: "kumwomba msaidizi wa AI alieleze kwa maneno rahisi na atengeneze orodha ya mambo ya kufanya yenye tarehe, ukitumia vishika-nafasi badala ya taarifa binafsi", standard: "bila majina wala namba halisi katika prompt" },
    { id: "O5", condition: "Ukipewa jibu la AI lenye tarehe, namba ya simu au sheria", action: "kulikagua dhidi ya barua, tovuti rasmi ya .gov, ofisi husika au 211", standard: "kabla ya kuchukua hatua" },
    { id: "O6", condition: "Unapoandika prompt au unapopokea ujumbe wa haraka", action: "kuzuia taarifa binafsi zisiingie na kutambua dalili za hatari za ulaghai", standard: "bila kutoa namba za binafsi, na ukiwasiliana na ofisi tu kupitia namba au tovuti uliyoipata mwenyewe" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuunganishwa na mtandao",
      lessons: [
        {
          objectives: ["O1"],
          title: "Njia za bure na za gharama ndogo za kuingia mtandaoni",
          minutes: 5,
          goal: "Taja mahali pawili karibu nawe unapoweza kutumia intaneti bure, na programu moja inayoweza kupunguza bili yako ya simu au intaneti.",
          text: [
            "Huhitaji kumiliki kompyuta ili kutumia teknolojia. Maktaba za umma zina kompyuta za bure na Wi-Fi ya bure, na nyingi pia zinaazima kompyuta mpakato (laptop) au hotspot. Vituo vya jamii, vituo vya ajira na baadhi ya makanisa pia vina kompyuta unazoweza kutumia.",
            "Lifeline ni programu ya serikali kuu ya Marekani inayopunguza gharama ya kila mwezi ya huduma ya simu au intaneti kwa watu wenye kipato kidogo au wanaoshiriki programu kama SNAP (msaada wa chakula) au Medicaid (bima ya afya ya serikali). Unaomba mtandaoni, kisha unachagua kampuni ya simu au intaneti inayoshiriki.",
            "Wafanyakazi wa maktaba wanaweza kukusaidia kuanza. Kuomba msaada ni jambo la kawaida; kusaidia watu na kompyuta ni sehemu ya kazi yao."
          ],
          steps: ["Tafuta maktaba ya umma iliyo karibu nawe na saa zake za kazi.", "Uliza kama inaazima kompyuta mpakato au hotspot, na kama ina madarasa ya bure ya kompyuta.", "Kama pesa ni chache, soma kuhusu Lifeline kwenye tovuti rasmi na uone kama unastahili.", "Andika mahali na wakati utakapoingia mtandaoni wiki hii."],
          words: [["Wi-Fi", "njia ya kuunganishwa na intaneti bila waya."], ["Hotspot", "kifaa kidogo (au mpangilio wa simu) kinachogawa muunganisho wa intaneti kwa vifaa vingine."], ["Lifeline", "programu ya serikali kuu ya Marekani inayotoa punguzo la kila mwezi kwenye huduma ya simu au intaneti kwa watu wanaostahili."]],
          sources: [{ name: "Lifeline Support (USAC, tovuti rasmi ya Lifeline)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Unaweza kuingia mtandaoni bila kumiliki kompyuta", bullets: ["Maktaba za umma: kompyuta na Wi-Fi za bure", "Vituo vya jamii na vituo vya ajira", "Baadhi ya maktaba zinaazima laptop na hotspot"] },
            { title: "Punguza bili yako ya simu au intaneti", bullets: ["Lifeline inatoa punguzo la kila mwezi kwa wanaostahili", "Unaweza kustahili kwa kipato chako, SNAP au Medicaid", "Omba kwenye tovuti rasmi ya Lifeline"] },
            { title: "Omba msaada", bullets: ["Wafanyakazi wa maktaba husaidia watu na kompyuta kila siku", "Uliza kuhusu madarasa ya bure ya kompyuta", "Kuuliza ni hatua ya busara, si udhaifu"] }
          ],
          tryIt: "Andika mahali pawili karibu nawe unapoweza kutumia intaneti bure, pamoja na saa zao za kazi. Kama bili yako ya simu au intaneti ni ngumu kulipa, fungua lifelinesupport.org na usome nani anastahili.",
          youCanNow: "kutaja mahali pa bure pa kuingia mtandaoni na kujua wapi pa kujifunza kuhusu Lifeline.",
          quickCheck: [
            { objective: "O1", q: "Hotspot ambayo baadhi ya maktaba zinaazima ni nini?", options: ["Kifaa kidogo kinachokuwezesha kuingia kwenye intaneti", "Hita ya vyumba vya baridi", "Mpango wa simu wa bure", "Darasa la kompyuta"], answer: 0, why: "Hotspot ni kifaa kidogo kinachokupa intaneti ili uingie mtandaoni ukiwa mbali na maktaba." },
            { objective: "O1", q: "Bili yako ya intaneti ni ngumu kulipa na unapata SNAP. Unafanya nini?", options: ["Kukatisha intaneti kabisa", "Kusoma kuhusu Lifeline kwenye tovuti rasmi ili uone kama unastahili", "Kumwomba mgeni mtandaoni akulipie", "Kusubiri kampuni ikupigie simu"], answer: 1, why: "Lifeline inapunguza gharama ya kila mwezi kwa watu wenye kipato kidogo au walio katika programu kama SNAP." }
          ]
        },
        {
          objectives: ["O2"],
          title: "AI ni nini, kwa maneno ya kila siku",
          minutes: 4,
          goal: "Eleza msaidizi wa AI ni nini na utaje njia tatu anazoweza kusaidia familia yako.",
          text: [
            "AI ni kifupi cha artificial intelligence (akili bandia). Msaidizi wa AI ni programu unayoweza kuiandikia, au kuongea nayo, kwa maneno yako mwenyewe. Inaandika jibu kwa sekunde chache. Wasaidizi wa bure ni pamoja na ChatGPT, Microsoft Copilot na Google Gemini.",
            "Anaweza kueleza barua ngumu, kuandika ujumbe mfupi, kupanga milo kwa bajeti, kumsaidia mtoto kuelewa kazi ya nyumbani, au kutafsiri kati ya lugha.",
            "Ni msaidizi, si bosi. Hayajui maisha yako, na wakati mwingine anakosea ukweli. Wewe ndiye unayeamua cha kuuliza na cha kutumia."
          ],
          words: [["AI", "artificial intelligence (akili bandia): programu za kompyuta zinazofanya kazi kama kuandika na kujibu maswali."], ["Msaidizi wa AI", "programu ya AI unayozungumza nayo kwa kuandika au kuongea."]],
          slides: [
            { title: "Msaidizi wa AI ni msaidizi", bullets: ["Unaandika au kuongea kwa maneno yako mwenyewe", "Anaandika jibu kwa sekunde chache", "Wa bure: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Njia anazoweza kusaidia familia yako", bullets: ["Kueleza barua ngumu", "Kupanga milo kwa bajeti", "Kusaidia maswali ya kazi ya nyumbani", "Kutafsiri ujumbe"] },
            { title: "Wewe ndiye bosi", bullets: ["Hayajui maisha yako", "Anaweza kukosea ukweli", "Wewe unaamua cha kuuliza na cha kutumia"] }
          ],
          tryIt: "Andika kazi tatu kutoka wiki yako ambapo msaidizi wa AI anaweza kukusaidia wewe, familia yako au kikundi chako cha jamii.",
          youCanNow: "kusema msaidizi wa AI ni nini na kutaja njia tatu anazoweza kukusaidia.",
          quickCheck: [
            { objective: "O2", q: "Msaidizi wa AI ni nini?", options: ["Mtu anayesoma barua zako", "Ofisi ya serikali", "Programu unayoiandikia au kuongea nayo kwa maneno yako mwenyewe", "Kampuni ya simu"], answer: 2, why: "Msaidizi wa AI ni programu inayoandika jibu unapouliza kwa maneno yako mwenyewe." },
            { objective: "O2", q: "Mtoto wako amekwama kwenye kazi ya nyumbani. Msaidizi wa AI anawezaje kusaidia?", options: ["Kumfanyia mtihani wote", "Kusaini fomu za shule", "Kumpigia mwalimu simu kwa niaba yako", "Kueleza mada kwa maneno rahisi zaidi"], answer: 3, why: "AI inaweza kueleza mambo kwa maneno rahisi zaidi; wewe na mtoto wako mnabaki kuwa viongozi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kufungua msaidizi wa AI wa bure na kuuliza swali lako la kwanza",
          minutes: 5,
          goal: "Fungua msaidizi wa AI wa bure na umuulize swali lililo wazi kuhusu kazi halisi.",
          text: [
            "Kwenye kompyuta ya maktaba au ya kituo cha jamii, fungua kivinjari cha wavuti na uende copilot.microsoft.com, chatgpt.com au gemini.google.com. Kwenye simu, sakinisha app rasmi kutoka duka la apps.",
            "Tafuta kisanduku unachoandikia. Uliza swali lako kama unavyomwuliza jirani mwema: sema unachohitaji, kidogo kuhusu hali yako, na jinsi unavyotaka jibu.",
            "Kwa mfano: \"Nina $60 za vyakula wiki hii kwa familia ya watu wanne. Nipe mawazo matano ya chakula cha jioni cha bei nafuu pamoja na orodha ya manunuzi. Tumia maneno rahisi.\""
          ],
          steps: ["Fungua kivinjari au app rasmi.", "Tafuta kisanduku cha ujumbe.", "Andika unachohitaji, hali yako (bila taarifa binafsi), na jinsi unavyotaka jibu.", "Bonyeza Enter au gusa mshale wa kutuma, kisha soma jibu."],
          words: [["Kivinjari", "programu unayotumia kutembelea tovuti, kama Chrome, Edge au Safari."], ["Prompt", "swali au ombi unaloandika kwa msaidizi wa AI."]],
          slides: [
            { title: "Kifungue", bullets: ["Kompyuta: copilot.microsoft.com, chatgpt.com au gemini.google.com", "Simu: app rasmi kutoka duka la apps"] },
            { title: "Uliza kama unavyomwuliza jirani", bullets: ["Unachohitaji", "Kidogo kuhusu hali yako", "Jinsi unavyotaka jibu"] },
            { title: "Mfano", bullets: ["\"Nina $60 za vyakula kwa familia ya watu wanne.", "Nipe milo mitano ya jioni ya bei nafuu na orodha ya manunuzi.", "Tumia maneno rahisi.\""] }
          ],
          tryIt: "Fungua msaidizi wa AI wa bure. Muombe msaada kwa kazi moja kutoka orodha yako ya Somo la 2, ukitumia sehemu zote tatu za swali zuri. Soma jibu.",
          youCanNow: "kufungua msaidizi wa AI wa bure na kuuliza swali lililo wazi linaloleta jibu lenye manufaa.",
          quickCheck: [
            { objective: "O3", q: "Kwenye kompyuta ya maktaba, unaandika copilot.microsoft.com wapi?", options: ["Kwenye upau wa anwani wa kivinjari", "Kwenye ujumbe mfupi", "Kwenye menyu ya printa", "Kwenye barua pepe kwa maktaba"], answer: 0, why: "Unafungua kivinjari cha wavuti na kuandika anwani ili kufikia msaidizi wa AI." },
            { objective: "O3", q: "Unataka msaada wa kupanga sherehe ya kuzaliwa kwa bajeti ndogo. Swali lipi ni bora?", options: ["\"Sherehe.\"", "\"Nisaidie kupanga sherehe ya watoto 8 kwa $50. Nipe orodha rahisi.\"", "\"Niambie kila kitu.\"", "\"Sherehe ni nini?\""], answer: 1, why: "Linasema unachohitaji, hali yako na jinsi unavyotaka jibu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuunganishwa na mtandao",
        questions: [
          { objective: "O1", q: "Humiliki kompyuta. Kwa kawaida unaweza kutumia moja bure wapi?", options: ["Maktaba ya umma", "Duka la kuuza magari", "Chumba cha kuhifadhia pesa benki", "Kituo cha mafuta"], answer: 0, why: "Maktaba za umma zina kompyuta na Wi-Fi za bure." },
          { objective: "O1", q: "Lifeline inafanya nini?", options: ["Inakupa gari la bure", "Inapunguza gharama ya kila mwezi ya huduma ya simu au intaneti kwa wanaostahili", "Inalipa kodi yako ya nyumba", "Inakupa kompyuta mpya kila mwaka"], answer: 1, why: "Lifeline ni punguzo la serikali kuu ya Marekani kwenye huduma ya simu au intaneti." },
          { objective: "O2", q: "Kipi ni msaidizi wa AI wa bure?", options: ["App ya kikokotoo", "Printa", "Microsoft Copilot", "Ujumbe mfupi"], answer: 2, why: "Copilot, ChatGPT na Gemini ni wasaidizi wa AI wa bure wanaojulikana." },
          { objective: "O2", q: "Nani anaamua la kufanya na jibu la msaidizi wa AI?", options: ["AI", "Duka la apps", "Maktaba", "Wewe"], answer: 3, why: "AI ni msaidizi; wewe unabaki kuwa kiongozi." },
          { objective: "O3", q: "Swali lipi litaleta jibu lenye manufaa zaidi?", options: ["\"chakula\"", "\"Nina $60 za vyakula kwa watu wanne. Nipe milo mitano ya jioni ya bei nafuu na orodha kwa maneno rahisi.\"", "\"msaada\"", "\"niambie mambo\""], answer: 1, why: "Linasema unachohitaji, hali yako na jinsi unavyotaka jibu." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia AI katika maisha halisi, kwa usalama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kugeuza barua ngumu kuwa maneno rahisi",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kueleza barua inayochanganya na kutengeneza orodha ya mambo ya kufanya.",
          text: [
            "Barua kutoka shule, kliniki, wenye nyumba na ofisi za serikali zinaweza kujaa maneno magumu. Msaidizi wa AI anaweza kuyaweka kwa maneno rahisi na kutoa kile unachohitaji kufanya na kufikia lini.",
            "Kwanza, ondoa taarifa binafsi. Andika au bandika maneno tu yanayoeleza barua inahusu nini, na badilisha majina na namba kwa vishika-nafasi kama [jina langu] au [namba ya akaunti].",
            "Kisha uliza: \"Ieleze barua hii kwa maneno rahisi. Ninahitaji kufanya nini, na kufikia tarehe gani? Tengeneza orodha fupi ya mambo ya kufanya.\""
          ],
          steps: ["Soma barua mara moja na uzungushie duara sehemu usizozielewa.", "Nakili au andika sehemu hizo, ukibadilisha majina na namba kwa vishika-nafasi.", "Muombe AI aieleze kwa maneno rahisi na atengeneze orodha ya mambo ya kufanya yenye tarehe.", "Uliza swali la kufuatilia kama kitu bado hakiko wazi, kama \"'Recertification' ina maana gani?\""],
          words: [["Kishika-nafasi", "neno la kusimama badala, kama [jina langu], unaloandika badala ya taarifa halisi za binafsi."], ["Swali la kufuatilia", "swali la pili linalojengwa juu ya jibu la kwanza."]],
          slides: [
            { title: "Barua ngumu, maneno rahisi", bullets: ["Barua za shule, kliniki, mwenye nyumba au ofisi ya serikali", "AI anaweza kueleza maneno magumu", "Anaweza kuorodhesha la kufanya na kufikia lini"] },
            { title: "Kwanza ondoa taarifa binafsi", bullets: ["Badilisha majina kwa [jina langu]", "Badilisha namba kwa [namba ya akaunti]", "Baki na maneno tu yanayoeleza barua"] },
            { title: "Cha kuuliza", bullets: ["\"Ieleze hii kwa maneno rahisi.\"", "\"Ninahitaji kufanya nini, na kufikia lini?\"", "\"Tengeneza orodha fupi ya mambo ya kufanya.\""] }
          ],
          tryIt: "Chagua barua au tangazo ulilonalo (au mfano kutoka tovuti ya shule). Ondoa taarifa binafsi, kisha muombe msaidizi wa AI alieleze na atengeneze orodha ya mambo ya kufanya.",
          youCanNow: "kugeuza barua inayochanganya kuwa maneno rahisi na orodha ya mambo ya kufanya, bila taarifa zako binafsi.",
          quickCheck: [
            { objective: "O4", q: "Kipi ni kishika-nafasi kizuri katika prompt?", options: ["Namba yako halisi ya akaunti", "Jina kamili la mtoto wako", "[namba ya akaunti]", "Anwani ya nyumba yako"], answer: 2, why: "Kishika-nafasi kama [namba ya akaunti] kinasimama badala ya taarifa halisi ili ibaki siri." },
            { objective: "O4", q: "Maelezo ya AI bado yanatumia neno \"recertification\" na hulijui. Unafanya nini?", options: ["Kuiacha barua", "Kubahatisha maana yake", "Kubandika namba ya kesi yako", "Kuuliza: \"Recertification ina maana gani?\""], answer: 3, why: "Swali la kufuatilia linamwomba AI aeleze neno gumu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua kile AI inakuambia",
          minutes: 4,
          goal: "Kagua tarehe, namba ya simu au sheria kutoka jibu la AI kwa chanzo rasmi.",
          text: [
            "Wasaidizi wa AI wanaweza kukosea. Wanaweza kutoa namba ya simu ya zamani, tarehe ya mwisho isiyo sahihi, au sheria ya jimbo lingine.",
            "Kabla ya kuchukua hatua kuhusu jambo lolote la pesa, misaada ya serikali, afya, shule, makazi au sheria, likague. Angalia barua yenyewe, tovuti rasmi (tovuti za serikali nchini Marekani kwa kawaida zinaishia na .gov), au piga simu ofisini.",
            "Usipopata jibu, piga 211. Ni namba ya bure na ya siri inayokuunganisha na msaada wa karibu kwa chakula, makazi, huduma kama umeme na maji, na mengine."
          ],
          steps: ["Zungushia duara kila tarehe, namba na sheria katika jibu la AI.", "Linganisha kila moja na barua ya asili.", "Kagua tovuti rasmi au piga simu ofisini.", "Ukikwama, piga 211 au muulize mfanyakazi wa maktaba."],
          words: [[".gov", "mwisho wa anwani za tovuti rasmi za serikali ya Marekani."], ["211", "namba ya simu ya bure na ya siri inayowaunganisha watu na msaada wa karibu."]],
          sources: [{ name: "211.org: Kuhusu 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "AI inaweza kukosea", bullets: ["Namba za simu za zamani", "Tarehe za mwisho zisizo sahihi", "Sheria za jimbo lingine"] },
            { title: "Kagua haya kila wakati", bullets: ["Pesa na misaada ya serikali", "Afya na shule", "Makazi na sheria"] },
            { title: "Wapi pa kukagua", bullets: ["Barua ya asili", "Tovuti rasmi, mara nyingi inaishia na .gov", "Piga simu ofisini, au piga 211 kwa msaada wa karibu"] }
          ],
          tryIt: "Chukua orodha ya mambo ya kufanya kutoka Somo la 4. Kagua tarehe moja au namba moja ya simu dhidi ya barua ya asili au tovuti rasmi.",
          youCanNow: "kukagua jibu la AI dhidi ya chanzo rasmi kabla ya kuchukua hatua.",
          quickCheck: [
            { objective: "O5", q: "211 ni nini?", options: ["Namba ya bure na ya siri inayokuunganisha na msaada wa karibu", "Namba ya dharura ya polisi", "Huduma ya kisheria ya kulipia", "Tovuti ya manunuzi"], answer: 0, why: "211 ni ya bure na ya siri, na inawaunganisha watu na msaada wa karibu kama chakula na huduma za umeme na maji." },
            { objective: "O5", q: "AI inakupa namba ya simu ya ofisi ya makazi. Unafanya nini kabla ya kupiga?", options: ["Kuipiga mara moja", "Kuikagua kwenye tovuti rasmi ya ofisi au kwenye barua yako", "Kuiweka kwenye mitandao ya kijamii", "Kumwuliza AI kama ana uhakika"], answer: 1, why: "AI inaweza kutoa namba za zamani au zisizo sahihi, kwa hiyo unakagua chanzo rasmi kwanza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinda taarifa zako na familia yako",
          minutes: 5,
          goal: "Zuia taarifa binafsi zisiingie kwenye zana za AI na utambue ujumbe wa ulaghai.",
          text: [
            "Usiandike kamwe haya kwa msaidizi wa AI: namba za Social Security (namba ya utambulisho ya Marekani), namba za kesi au za misaada, namba za benki au kadi, nywila, au majina kamili ya watoto wako pamoja na shule yao.",
            "Matapeli huzilenga familia zinazotaabika. Jihadhari na ujumbe unaoahidi pesa za bure au ruzuku za serikali, unaosema misaada yako itasimamishwa usipochukua hatua sasa hivi, au unaokuomba ulipe kwa kadi za zawadi (gift cards).",
            "Ofisi halisi haziombi malipo kwa kadi za zawadi. Ujumbe ukikutia wasiwasi, usibofye viungo vyake. Nenda kwenye tovuti rasmi wewe mwenyewe au piga namba unayoijua tayari."
          ],
          steps: ["Soma kila prompt kabla ya kuituma na uondoe taarifa binafsi.", "Shuku ujumbe unaokuharakisha au unaoahidi pesa za bure.", "Usilipe kamwe kwa kadi za zawadi kwa sababu ujumbe umekuambia.", "Wasiliana na ofisi kwa namba au tovuti uliyoipata mwenyewe."],
          words: [["Ulaghai", "hila ya kuiba pesa au taarifa."], ["Phishing", "ujumbe bandia unaojaribu kukufanya ubofye kiungo au utoe taarifa binafsi."]],
          slides: [
            { title: "Usiandike kamwe kwa AI", bullets: ["Namba za Social Security, kesi au misaada", "Namba za benki au kadi, nywila", "Majina kamili ya watoto wako na shule yao"] },
            { title: "Dalili za hatari za ulaghai", bullets: ["Ahadi za pesa za bure au ruzuku", "\"Misaada yako itasimamishwa leo\"", "Lipa kwa kadi za zawadi"] },
            { title: "Kaa salama", bullets: ["Usibofye viungo katika ujumbe unaotia wasiwasi", "Nenda kwenye tovuti rasmi wewe mwenyewe", "Piga namba unayojua tayari kuwa ni halisi"] }
          ],
          tryIt: "Kazi ya mwisho: chukua barua au tangazo halisi, ondoa taarifa zote binafsi, muombe msaidizi wa AI alieleze na atengeneze orodha ya mambo ya kufanya yenye tarehe, kisha kagua tarehe moja au namba moja ya simu kwa chanzo rasmi.",
          youCanNow: "kutumia AI kwa kazi halisi ya familia huku ukilinda taarifa zako na kutambua ulaghai.",
          quickCheck: [
            { objective: "O6", q: "Kipi ni dalili ya hatari ya ulaghai?", options: ["Barua inayolingana na tovuti ya ofisi", "Kikumbusho kutoka ofisi ya shule ya mtoto wako", "Ujumbe unaokuharakisha ulipe kwa kadi za zawadi", "Bili yenye kiasi sahihi"], answer: 2, why: "Ofisi halisi haziombi kadi za zawadi wala kukuharakisha ulipe sasa hivi." },
            { objective: "O6", q: "Ujumbe mfupi unasema umeshinda ruzuku ya serikali na una kiungo. Unafanya nini?", options: ["Kubofya kiungo ili uidai", "Kujibu kwa namba yako ya benki", "Kuutuma kwa marafiki", "Kutobofya; kutafuta ofisi wewe mwenyewe"], answer: 3, why: "Kwenda kwenye tovuti rasmi au namba uliyoipata mwenyewe kunakulinda dhidi ya viungo bandia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia AI katika maisha halisi, kwa usalama",
        questions: [
          { objective: "O4", q: "Kabla ya kubandika barua kwa msaidizi wa AI, unapaswa kufanya nini?", options: ["Kuongeza namba yako ya Social Security", "Kubadilisha majina na namba kwa vishika-nafasi", "Kuongeza taarifa zako za benki ili asaidie zaidi", "Hakuna kitu"], answer: 1, why: "Vishika-nafasi vinakuwezesha kupata msaada bila kutoa taarifa binafsi." },
          { objective: "O5", q: "AI inasema tarehe yako ya mwisho ni Juni 5, lakini barua inasema Juni 1. Unaamini kipi?", options: ["AI", "Hakuna kati ya hivyo", "Tarehe iliyo ya baadaye", "Barua au ofisi rasmi"], answer: 3, why: "Chanzo rasmi ndicho kinachoshinda AI inapotofautiana nacho." },
          { objective: "O5", q: "211 ni nini?", options: ["Namba ya bure na ya siri inayokuunganisha na msaada wa karibu", "Benki", "App ya AI", "Namba ya ulaghai"], answer: 0, why: "211 inawaunganisha watu na msaada wa karibu kwa chakula, makazi na mengine." },
          { objective: "O6", q: "Ujumbe mfupi unasema misaada yako itasimamishwa leo usipolipa kwa kadi za zawadi. Huu ni:", options: ["Tangazo la kawaida", "Sheria mpya", "Dalili ya hatari ya ulaghai", "Ujumbe wa shule"], answer: 2, why: "Kukuharakisha na kukuomba kadi za zawadi ni dalili za ulaghai." },
          { objective: "O6", q: "Ujumbe unakutia wasiwasi. Njia salama zaidi ya kuukagua ni ipi?", options: ["Kubofya kiungo chake", "Kujibu kwa taarifa zako", "Kuutuma kwa marafiki", "Kwenda kwenye tovuti rasmi wewe mwenyewe au kupiga namba unayoijua"], answer: 3, why: "Kuwasiliana na ofisi wewe mwenyewe kunaepuka viungo bandia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa AI na Uwezeshaji wa Kidijitali",
    questions: [
      { objective: "O1", q: "Mara nyingi unaweza kuazima laptop au hotspot wapi?", options: ["Baadhi ya maktaba za umma", "Duka lolote la vyakula", "Sanduku la posta", "Eneo la kuegesha magari"], answer: 0, why: "Maktaba nyingi zinaazima laptop na hotspot." },
      { objective: "O1", q: "Lifeline inasaidia kwa:", options: ["Matengenezo ya gari", "Gharama ya kila mwezi ya huduma ya simu au intaneti", "Kodi ya nyumba", "Vyakula"], answer: 1, why: "Lifeline ni punguzo kwenye huduma ya simu au intaneti." },
      { objective: "O1", q: "Unapaswa kusoma kuhusu Lifeline wapi?", options: ["Tangazo kwenye mitandao ya kijamii", "Ujumbe mfupi kutoka kwa mgeni", "Tovuti rasmi ya Lifeline", "Dirisha linalojitokeza (pop-up)"], answer: 2, why: "Tovuti rasmi zina sheria halisi na fomu halisi ya kuomba." },
      { objective: "O2", q: "Msaidizi wa AI ni:", options: ["Mtu aliye maktaba", "Ofisi ya serikali", "Kampuni ya simu", "Programu unayozungumza nayo kwa maneno yako mwenyewe"], answer: 3, why: "Ni programu ya kompyuta unayoiandikia au kuongea nayo." },
      { objective: "O2", q: "Kipi ni kitu msaidizi wa AI anaweza kusaidia?", options: ["Kupanga milo kwa bajeti", "Kusaini mkataba wako wa kupanga nyumba", "Kwenda kwenye miadi yako", "Kulipa bili zako kutoka akaunti yako"], answer: 0, why: "Ni hodari wa mipango, orodha na maelezo." },
      { objective: "O2", q: "AI wakati mwingine inakosea ukweli. Hiyo inamaanisha unapaswa:", options: ["Kutoitumia kamwe", "Kukagua ukweli muhimu", "Kuiamini zaidi", "Kulipia iliyo bora zaidi"], answer: 1, why: "Inafaa, lakini ukweli muhimu unahitaji kukaguliwa." },
      { objective: "O3", q: "Kwenye kompyuta ya maktaba, unafunguaje Copilot?", options: ["Kupiga simu maktaba", "Kuzima na kuwasha kompyuta", "Kuandika copilot.microsoft.com kwenye kivinjari", "Kutuma barua pepe"], answer: 2, why: "Anwani ya wavuti inafungua Copilot kwenye kivinjari." },
      { objective: "O3", q: "Swali zuri kwa AI lina:", options: ["Nywila yako", "Neno moja tu", "Namba yako ya benki", "Unachohitaji, hali yako na jinsi unavyotaka jibu"], answer: 3, why: "Sehemu hizo tatu zinaleta jibu lenye manufaa." },
      { objective: "O3", q: "Unasakinisha app ya AI kwenye simu kutoka wapi?", options: ["Duka rasmi la apps", "Kiungo katika ujumbe mfupi kutoka kwa mgeni", "Tangazo linalojitokeza (pop-up)", "Tovuti yoyote"], answer: 0, why: "Duka rasmi la apps ndilo mahali salama." },
      { objective: "O4", q: "Kishika-nafasi ni nini?", options: ["Aina ya app", "Neno la kusimama badala, kama [jina langu], badala ya taarifa halisi", "Nywila", "Tovuti"], answer: 1, why: "Kinazuia taarifa binafsi zisiingie katika prompt yako." },
      { objective: "O4", q: "Unataka msaada kuhusu barua ya shule. Ombi zuri ni lipi?", options: ["\"barua\"", "\"Hili ni jina kamili la mtoto wangu na namba yake ya utambulisho\"", "\"Ieleze hii kwa maneno rahisi na uorodheshe ninachohitaji kufanya na kufikia lini.\"", "\"shule\""], answer: 2, why: "Linaomba maneno rahisi na orodha ya mambo ya kufanya, bila taarifa binafsi." },
      { objective: "O4", q: "AI inatumia neno gumu usilolijua. Unaweza:", options: ["Kukata tamaa", "Kujifanya unalijua", "Kufunga kivinjari", "Kuuliza swali la kufuatilia: \"Neno hilo lina maana gani?\""], answer: 3, why: "Maswali ya kufuatilia yanafafanua sehemu zinazochanganya." },
      { objective: "O5", q: "Kipi unapaswa kukagua kila wakati kabla ya kuchukua hatua?", options: ["Tarehe ya mwisho ya misaada", "Wazo la chakula cha jioni", "Mzaha", "Orodha ya rangi"], answer: 0, why: "Tarehe za mwisho, pesa na misaada lazima vikaguliwe kwa chanzo rasmi." },
      { objective: "O5", q: "Tovuti za serikali ya Marekani kwa kawaida zinaishia na:", options: [".win", ".gov", ".gift", ".shop"], answer: 1, why: ".gov inatumiwa na tovuti rasmi za serikali ya Marekani." },
      { objective: "O5", q: "Huwezi kupata msaada wa karibu kwa bili yako ya umeme au maji. Unaweza kumpigia nani?", options: ["Namba katika tangazo linalojitokeza (pop-up)", "Hakuna mtu", "211", "Namba yoyote ya mtandaoni"], answer: 2, why: "211 inakuunganisha na msaada wa karibu kwa bili, chakula na makazi." },
      { objective: "O6", q: "Kipi hupaswi kamwe kuandika kwa msaidizi wa AI?", options: ["\"Tumia maneno rahisi\"", "\"Tengeneza orodha\"", "Wazo la chakula cha jioni", "Namba ya kadi yako ya benki"], answer: 3, why: "Namba za benki na kadi ni za siri." },
      { objective: "O6", q: "Ujumbe unaahidi ruzuku ya bure ya serikali ukilipa ada kwanza. Huenda ni:", options: ["Ulaghai", "Programu ya kawaida", "Tangazo la shule", "Marejesho ya kodi"], answer: 0, why: "Kulipa ili upate pesa za \"bure\" ni ulaghai wa kawaida." },
      { objective: "O6", q: "Ofisi halisi zinaomba malipo kwa:", options: ["Kadi za zawadi", "Kamwe si kwa kadi za zawadi", "Kadi za zawadi siku za mwisho wa wiki tu", "Pesa taslimu kwa ujumbe mfupi"], answer: 1, why: "Malipo kwa kadi za zawadi ni dalili ya ulaghai." },
      { objective: "O6", q: "Ujumbe mfupi unasema \"Bofya hapa sasa au utapoteza misaada yako.\" Unafanya nini?", options: ["Kubofya haraka", "Kujibu kwa namba yako ya kesi", "Kutobofya; kwenda kwenye tovuti rasmi au kupiga namba unayoijua", "Kuwashirikisha majirani"], answer: 2, why: "Wasiliana na ofisi wewe mwenyewe badala ya kutumia kiungo cha ujumbe." },
      { objective: "O5", q: "Katika kazi ya mwisho, baada ya AI kutengeneza orodha yako ya mambo ya kufanya, wewe:", options: ["Unafuta barua", "Unaiweka mtandaoni", "Unaongeza taarifa zako za benki", "Unakagua tarehe moja au namba moja ya simu kwa chanzo rasmi"], answer: 3, why: "Kukagua kwa chanzo rasmi ndiyo hatua ya mwisho." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      7,
      9,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Taarifa binafsi zimeondolewa",
        objective: "O6",
        notYet: "Prompt ina jina halisi, namba ya kesi, namba ya akaunti au anwani.",
        meets: "Kila jina na namba ya binafsi imeachwa nje au imebadilishwa kwa kishika-nafasi.",
        exceeds: "Anatumia vishika-nafasi vilivyo wazi kama [jina langu] ili jibu bado lieleweke."
      },
      {
        name: "Ombi lililo wazi",
        objective: "O3",
        notYet: "Ombi haliko wazi, kwa mfano \"nisaidie na hili\".",
        meets: "Linasema unachohitaji, hali yako na jinsi unavyotaka jibu.",
        exceeds: "Jibu la kwanza linakaribia kile unachohitaji."
      },
      {
        name: "Maneno rahisi na orodha ya mambo ya kufanya",
        objective: "O4",
        notYet: "Hakuna maelezo kwa maneno rahisi au hakuna orodha ya mambo ya kufanya.",
        meets: "Anapata maelezo kwa maneno rahisi na orodha fupi ya mambo ya kufanya yenye tarehe.",
        exceeds: "Aliuliza swali la kufuatilia ili kueleza neno gumu au hatua."
      },
      {
        name: "Ukweli umekaguliwa",
        objective: "O5",
        notYet: "Hakuna tarehe wala namba ya simu iliyokaguliwa.",
        meets: "Alikagua tarehe moja au namba moja ya simu dhidi ya barua au chanzo rasmi.",
        exceeds: "Anaweza kusema alikagua wapi na alipata nini."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia msaidizi wa AI kwa usalama kwa barua, fomu au ujumbe ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoomba Lifeline au wanaoanza kutumia kompyuta ya maktaba au hotspot",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba au ya kituo cha jamii",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Barua halisi yenye taarifa binafsi zilizofunikwa, au barua ya mfano kutoka tovuti ya shule",
      "Karatasi na kalamu kwa maelezo na orodha ya mambo ya kufanya",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Anza kwa kusema kwamba teknolojia ni ya kila mtu na kwamba kuomba msaada ni jambo la kawaida.",
      "Leta barua za mfano ili mtu yeyote asilazimike kutoa barua zake mwenyewe.",
      "Kagua kila prompt kabla haijatumwa; hakuna majina halisi, namba za kesi wala namba za akaunti.",
      "Kuwa na taarifa za 211 na Lifeline tayari, na hakikisha wanafunzi wanatoka (sign out) kwenye kompyuta za pamoja.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
