"use strict";

// Koach Learn course (Swahili translation of workforce/workforce-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "workforce-essential-ai-tools-sw",
  lang: "sw",
  translationOf: "workforce-essential-ai-tools",
  category: "Workforce Development",
  name: "Zana Muhimu za AI Kazini",
  skills: "Kufuata sera ya AI ya mwajiri wako, Kutumia msaidizi wa mazungumzo kuandika kazini, Kutumia AI ndani ya Microsoft 365 au Google Workspace, Kufupisha nyaraka na mikutano, Kupata msaada wa spreadsheet, Kukagua kazi ya AI kabla ya kuishiriki",
  outcome: "kutumia zana za AI zinazoruhusiwa kazini kwako kumaliza kazi za kila siku haraka zaidi: kuandika na kuboresha ujumbe wa kazi, kufupisha hati ndefu au maelezo ya mkutano, kupata msaada wa spreadsheet, na kukagua kila jibu kabla ya kulishiriki, bila kuweka taarifa za siri mahali zisipostahili.",
  about: [
    "Kozi hii ni kwa watu wanaofanya kazi na wanaotafuta kazi wanaotaka ujuzi wa AI wa kutumia kazini: wafanyakazi wa ofisi na utawala, viongozi wa duka na ghala, wasaidizi wa huduma za afya, huduma kwa wateja, na yeyote anayeandika barua pepe, kusoma sera au kutumia spreadsheet kazini.",
    "Utaanza na kanuni muhimu kuliko zote, sera ya AI ya mwajiri wako, kisha utafanya mazoezi na wasaidizi wa mazungumzo (ChatGPT, Microsoft Copilot, Google Gemini) na msaada wa AI uliojengwa ndani ya Microsoft 365 na Google Workspace katika baadhi ya mipango. Utafupisha, utaandika rasimu, utachambua na, kila mara, utakagua.",
    "Vipengele unavyoviona vinategemea leseni na mipangilio ya mwajiri wako, kwa hiyo tunaeleza cha kufanya badala ya majina kamili ya vitufe. Kila somo linachukua kama dakika tano, na jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Kamilisha seti ya kazi za AI kazini ukitumia zana zinazoruhusiwa kazini kwako tu (au zana za bure zenye data ya kubuni kama unatafuta kazi): (1) andika kanuni tatu muhimu za sera ya AI kazini kwako, au kanuni tatu ambazo ungefuata; (2) geuza maelezo ghafi kuwa barua pepe ya kazi iliyo wazi; (3) fupisha hati ndefu kuwa vitone vitano na kazi tatu za kufuatilia; (4) pata msaada wa AI kuongeza fomula kwenye spreadsheet; na (5) weka alama ya ulichokagua katika kila moja kabla ya kushiriki.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaofanya kazi na wanaotafuta kazi wanaotaka ujuzi wa AI wa kutumia kazini: wafanyakazi wa ofisi na utawala, viongozi wa duka na ghala, wasaidizi wa huduma za afya, huduma kwa wateja, na yeyote anayeandika barua pepe, kusoma sera au kutumia spreadsheet kazini.",
    startingPoint: "Wanatumia barua pepe, nyaraka na wakati mwingine spreadsheet kazini, kwenye kompyuta au simu. Wengi wameziona zana za AI lakini hawajazitumia kwa kazi, na huenda hawajui sera ya AI ya mwajiri wao.",
    gap: "Waajiri wanazidi kutarajia wafanyakazi watumie zana za AI zilizoidhinishwa ili kuokoa muda, na makosa au kuvuja kwa taarifa za siri kunaweza kugharimu kazi. Wanafunzi wanahitaji kutumia zana zinazoruhusiwa kazini kwa kuandika, kufupisha na spreadsheet, na kukagua kila jibu kabla ya kulishiriki.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: kompyuta ni bora kwa nyaraka na spreadsheet; zana zinategemea anachoruhusu mwajiri",
      "Sera na faragha: sera ya AI ya mwajiri inakuja kwanza; hakuna taarifa binafsi za wateja au wafanyakazi katika zana za AI; wanaotafuta kazi wanatumia zana za bure na data ya kubuni",
      "Vipengele vya AI vilivyojengwa ndani ya Microsoft 365 na Google Workspace vinategemea mpango na mipangilio ya mwajiri",
      "Muda: masomo ya kama dakika 5 yanayoingia ndani ya siku ya kazi"
    ],
    prerequisites: "Hakuna. Kozi \"AI na Nguvu Kazi Mpya\" ni kozi saidizi yenye manufaa."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kabla ya kutumia AI kazini", action: "kupata sera ya AI ya kazini kwako na kuandika kanuni zake tatu muhimu, au kanuni tatu salama za msingi kama hakuna sera", standard: "bila taarifa binafsi za wateja au wafanyakazi kuingia katika zana za AI" },
    { id: "O2", condition: "Ukipewa maelezo ghafi ya ujumbe wa kazi", action: "kuandika barua pepe ya kazi iliyo wazi kwa msaidizi wa mazungumzo ukitumia prompt yenye lengo, msomaji, mambo makuu na mtindo", standard: "kila ukweli ukiwa umekaguliwa na barua pepe ikisikika kama wewe" },
    { id: "O3", condition: "Katika apps za ofisi unazotumia", action: "kupata na kutumia msaidizi wa AI uliojengwa ndani, au msaidizi wa mazungumzo ulioidhinishwa kama akaunti yako haina", standard: "ukitumia maandishi yasiyo ya siri tu katika zana yoyote ambayo kazini kwako hawajaiidhinisha" },
    { id: "O4", condition: "Ukipewa hati ndefu au maelezo ya mkutano", action: "kuifupisha kuwa mambo makuu matano na kazi tatu za kufuatilia zenye wahusika", standard: "ikiwa imekaguliwa dhidi ya hati asili" },
    { id: "O5", condition: "Ukipewa spreadsheet ndogo", action: "kutumia AI kuandika na kueleza fomula, kisha kuijaribu", standard: "dhidi ya jibu ulilopata kwa kuhesabu mwenyewe" },
    { id: "O6", condition: "Kabla ya kushiriki jibu lolote la AI", action: "kulikagua kwa ukweli, ufaafu, usalama na chanzo", standard: "na kuwajibika kwa toleo la mwisho" }
  ],
  chapters: [
    {
      name: "Sura 1: Kanuni na zana za msingi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sera ya AI ya mwajiri wako inakuja kwanza",
          minutes: 5,
          goal: "Pata na ufuate kanuni za kazini kwako kuhusu zana za AI.",
          text: [
            "Waajiri wengi wana kanuni kuhusu zana za AI: zana zipi zimeidhinishwa, taarifa gani zinaweza kuwekwa ndani yake, na lini lazima useme umetumia AI. Kuvunja kanuni hizi kunaweza kukuletea matatizo, hata kama ulikuwa na nia njema.",
            "Angalia katika kitabu cha mwongozo wa wafanyakazi, intranet au kurasa za IT, au muulize meneja wako au IT: \"Tunaruhusiwa kutumia zana zipi za AI, na ni taarifa gani ninaweza kuweka ndani yake?\" Baadhi ya waajiri wanatoa toleo la kibiashara la zana, kama Microsoft Copilot kwa akaunti ya kazi, lenye ulinzi zaidi wa data kuliko akaunti binafsi ya bure.",
            "Kama hakuna sera, fuata kanuni salama za msingi: hakuna taarifa za wateja au wagonjwa, hakuna taarifa binafsi za wafanyakazi, hakuna nywila, hakuna mipango ya siri wala namba za fedha katika akaunti binafsi za AI. Kagua kila ukweli kabla ya kushiriki."
          ],
          steps: ["Tafuta neno \"AI\" katika kitabu cha mwongozo au intranet.", "Muulize meneja wako au IT zana zipi zimeidhinishwa.", "Uliza ni taarifa gani zinaruhusiwa.", "Kama hakuna sera, tumia kanuni salama za msingi."],
          words: [["Sera ya AI", "kanuni za mwajiri kuhusu kutumia zana za AI kazini."], ["Zana iliyoidhinishwa", "zana ambayo mwajiri wako anaruhusu kwa kazi."], ["Siri", "taarifa zilizokusudiwa kwa watu walio ndani ya kampuni tu."]],
          slides: [
            { title: "Kanuni zinakuja kwanza", bullets: ["Zana zipi zimeidhinishwa", "Taarifa gani zinaweza kuwekwa ndani", "Lini useme umetumia AI"] },
            { title: "Mahali pa kuzipata", bullets: ["Kitabu cha mwongozo wa wafanyakazi au intranet", "Muulize meneja wako au IT", "Akaunti za kazi zinaweza kuwa na ulinzi zaidi"] },
            { title: "Kanuni salama za msingi", bullets: ["Hakuna data ya wateja, wagonjwa au wafanyakazi", "Hakuna nywila wala mipango ya siri", "Kagua kila ukweli kabla ya kushiriki"] }
          ],
          tryIt: "Tafuta sera ya AI ya kazini kwako, au uulize kuihusu. Andika kanuni tatu muhimu kuliko zote. Kama unatafuta kazi, andika kanuni tatu salama za msingi utakazofuata.",
          youCanNow: "kupata na kufuata kanuni za zana za AI kazini kwako.",
          quickCheck: [
            { objective: "O1", q: "Kwa kawaida unaweza kupata wapi sera ya AI ya kazini kwako?", options: ["Kwenye ukurasa wa mitandao ya kijamii", "Katika kitabu cha mwongozo au intranet, au kwa kumuuliza meneja wako au IT", "Katika matangazo ya zana ya AI", "Popote; sera hazipo"], answer: 1, why: "Sera mara nyingi ziko katika kitabu cha mwongozo au intranet, na meneja wako au IT wanaweza kukuambia." },
            { objective: "O1", q: "Kazini kwako hakuna sera ya AI na unataka msaada wa kujibu malalamiko ya mteja. Unafanya nini?", options: ["Unabandika jina la mteja, anwani na historia ya oda zake", "Unatumia AI na data yoyote unayotaka", "Huandiki majibu tena kamwe", "Unaacha nje taarifa binafsi za mteja na kutumia kanuni salama ya msingi"], answer: 3, why: "Kukiwa hakuna sera, kanuni salama ya msingi ni kuweka nje taarifa binafsi za wateja na wafanyakazi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Msaidizi wa mazungumzo kwa uandishi wa kila siku kazini",
          minutes: 5,
          goal: "Geuza maelezo ghafi kuwa ujumbe wa kazi ulio wazi kwa msaidizi wa mazungumzo.",
          text: [
            "Wasaidizi wa mazungumzo kama ChatGPT, Microsoft Copilot na Google Gemini hugeuza maelezo ghafi kuwa maandishi yaliyo wazi. Tumia yule anayeruhusiwa kazini kwako.",
            "Prompt nzuri ya kazi inasema lengo, msomaji, mambo makuu na mtindo: \"Andika barua pepe fupi kwa timu yangu. Lengo: gati la kupakia limefungwa Alhamisi kwa matengenezo. Tumieni gati B badala yake. Mizigo inafika saa 7-11 asubuhi. Mtindo: wazi na wa kirafiki. Chini ya maneno 100.\"",
            "Kisha omba mabadiliko (\"fupi zaidi\", \"rasmi zaidi\", \"ongeza orodha ya vitone\"), kagua kila ukweli, na uifanye isikike kama wewe kabla ya kutuma."
          ],
          steps: ["Andika maelezo yako ghafi.", "Andika prompt yenye lengo, msomaji, mambo makuu na mtindo.", "Omba badiliko moja kwa wakati.", "Kagua majina, tarehe, saa na namba.", "Hariri isikike kama wewe, kisha tuma."],
          words: [["Prompt", "unachoandika kuiomba zana ya AI kitu fulani."], ["Mtindo", "jinsi maandishi yanavyosikika: ya kirafiki, rasmi, thabiti."]],
          slides: [
            { title: "Maelezo yanaingia, ujumbe wazi unatoka", bullets: ["ChatGPT, Copilot au Gemini", "Tumia zana inayoruhusiwa kazini kwako"] },
            { title: "Prompt nzuri ya kazi", bullets: ["Lengo na msomaji", "Mambo makuu", "Mtindo na urefu"] },
            { title: "Kabla ya kutuma", bullets: ["Omba mabadiliko moja baada ya jingine", "Kagua majina, tarehe, saa, namba", "Ifanye isikike kama wewe"] }
          ],
          tryIt: "Andika maelezo ghafi ya ujumbe halisi au wa mfano wa kazi. Tumia msaidizi wa mazungumzo kuyageuza kuwa barua pepe iliyo wazi, omba badiliko moja, na ukague kila ukweli.",
          youCanNow: "kugeuza maelezo ghafi kuwa ujumbe wa kazi ulio wazi kwa msaidizi wa mazungumzo.",
          quickCheck: [
            { objective: "O2", q: "Maneno \"kwa meneja wangu, mtindo wa kirafiki\" katika prompt yanaweka nini?", options: ["Msomaji na mtindo", "Urefu", "Tarehe ya mwisho", "Aina ya faili"], answer: 0, why: "Kumtaja msomaji na mtindo kunaisaidia AI kuandika aina sahihi ya ujumbe." },
            { objective: "O2", q: "Rasimu ya barua pepe ya AI inasema mkutano ni Alhamisi, lakini maelezo yako yanasema Jumatano. Unafanya nini?", options: ["Unaituma; huenda AI iko sahihi", "Unafuta maelezo yako", "Unarekebisha siku kabla ya kuituma", "Unaongeza siku zote mbili"], answer: 2, why: "Unakagua kila ukweli dhidi ya maelezo yako kabla ya kutuma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "AI ndani ya Microsoft 365 na Google Workspace",
          minutes: 5,
          goal: "Pata na utumie msaidizi wa AI katika apps za ofisi unazotumia, kama akaunti yako inao.",
          text: [
            "Microsoft inaongeza Copilot kwenye apps kama Word, Outlook, Excel, PowerPoint na Teams, na Google inaongeza Gemini kwenye Gmail, Docs, Sheets na Meet. Kama unavyo hivi au huna inategemea mpango na mipangilio ya mwajiri wako.",
            "Mahali unapovyo, AI inaweza kufanya kazi kwenye kilichofunguliwa tayari: \"Fupisha hati hii\", \"Andika rasimu ya jibu la barua pepe hii\", \"Pendekeza fomula kwa safu hii\". Tafuta alama (icon) au kidirisha cha AI ndani ya app, au uliza IT jinsi ya kukiwasha.",
            "Kama huna, bado unaweza kunakili maandishi yasiyo ya siri kwenye msaidizi wa mazungumzo ulioidhinishwa na kubandika jibu tena. Kwa njia yoyote, toleo la mwisho ni lako na wewe ndiye unayelikagua."
          ],
          steps: ["Fungua Word, Outlook, Docs au Gmail kwa akaunti yako ya kazi.", "Tafuta alama au kidirisha cha AI, au uliza IT.", "Iombe ifupishe au iandike rasimu kutoka faili lililofunguliwa.", "Kama haipatikani, tumia msaidizi wa mazungumzo ulioidhinishwa na maandishi yasiyo ya siri.", "Kagua na uhariri jibu."],
          words: [["Microsoft 365", "seti ya apps za kazi za Microsoft: Word, Excel, Outlook, Teams na nyingine."], ["Google Workspace", "seti ya apps za kazi za Google: Gmail, Docs, Sheets, Meet na nyingine."]],
          slides: [
            { title: "AI iliyojengwa ndani ya apps za ofisi", bullets: ["Microsoft: Copilot katika Word, Outlook, Excel, Teams", "Google: Gemini katika Gmail, Docs, Sheets, Meet", "Inategemea mpango wa mwajiri wako"] },
            { title: "Inafanya kazi kwenye kilichofunguliwa", bullets: ["\"Fupisha hati hii\"", "\"Andika rasimu ya jibu la barua pepe hii\"", "Tafuta alama ya AI au uliza IT"] },
            { title: "Hakuna AI iliyojengwa ndani?", bullets: ["Tumia msaidizi wa mazungumzo ulioidhinishwa", "Maandishi yasiyo ya siri tu", "Wewe unakagua toleo la mwisho"] }
          ],
          tryIt: "Fungua hati au barua pepe ya kazi (au ya mfano). Tumia msaidizi wa AI uliojengwa ndani kama unao, au msaidizi wa mazungumzo ulioidhinishwa kama huna, kuandika rasimu ya jibu au muhtasari. Ukague.",
          youCanNow: "kutumia msaidizi wa AI katika apps zako za ofisi, au njia mbadala salama, kuandika rasimu na kufupisha.",
          quickCheck: [
            { objective: "O3", q: "Copilot katika Word au Outlook ni nini?", options: ["Nyongeza ya bure ambayo kila mtu anayo", "Fomula ya spreadsheet", "Virusi", "Msaidizi wa AI uliojengwa ndani ya Microsoft 365, katika baadhi ya mipango"], answer: 3, why: "Copilot imejengwa ndani ya apps za Microsoft 365, kutegemea mpango na mipangilio ya mwajiri." },
            { objective: "O3", q: "Huoni alama ya AI katika app yako ya ofisi. Unafanya nini?", options: ["Unasakinisha nyongeza yoyote ya AI unayoipata", "Unauliza IT, au unatumia msaidizi wa mazungumzo ulioidhinishwa na maandishi yasiyo ya siri", "Unabandika faili za siri kwenye akaunti binafsi ya AI", "Unaachana na AI"], answer: 1, why: "IT wanaweza kukuambia kinachopatikana, na msaidizi ulioidhinishwa unafanya kazi na maandishi yasiyo ya siri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kanuni na zana za msingi",
        questions: [
          { objective: "O1", q: "Kabla ya kutumia AI kazini, kwanza unapaswa:", options: ["Kubandika data ya wateja", "Kujua sera ya AI ya mwajiri wako", "Kushiriki nywila yako", "Kutumia app yoyote unayoipata"], answer: 1, why: "Sera zinaweka kinachoruhusiwa." },
          { objective: "O1", q: "Hakuna sera. Ufuate kanuni ipi salama ya msingi?", options: ["Kuacha kukagua ukweli", "Kubandika chochote", "Kushiriki nywila", "Hakuna taarifa binafsi za wateja au wafanyakazi katika zana za AI"], answer: 3, why: "Data binafsi inabaki nje." },
          { objective: "O2", q: "Prompt nzuri ya kazi ina:", options: ["Lengo, msomaji, mambo makuu na mtindo", "Neno moja tu", "Nywila yako", "Anwani ya mteja"], answer: 0, why: "Sehemu hizo zinaleta rasimu yenye manufaa." },
          { objective: "O3", q: "Copilot ndani ya Word au Outlook inapatikana:", options: ["Kamwe", "Kwa kila mtu moja kwa moja", "Kutegemea mpango na mipangilio ya mwajiri wako", "Kwenye simu tu"], answer: 2, why: "Upatikanaji unategemea leseni na mipangilio." },
          { objective: "O6", q: "Toleo la mwisho la kazi iliyoandikwa na AI ni la nani?", options: ["IT", "AI", "Wewe", "Hakuna mtu"], answer: 2, why: "Wewe unawajibika kwa unachotuma." }
        ]
      }
    },
    {
      name: "Sura 2: Muhtasari, spreadsheet na ukaguzi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kufupisha nyaraka na mikutano",
          minutes: 5,
          goal: "Geuza hati ndefu au maelezo ya mkutano kuwa mambo makuu na kazi za kufuatilia.",
          text: [
            "Muhtasari unaokoa muda wa kila mtu. Omba umbo maalum: \"Fupisha sera hii kwa vitone vitano kwa mfanyakazi mpya, kisha orodhesha kazi tatu za kufuatilia.\" Au kwa maelezo ya mkutano: \"Orodhesha maamuzi, kazi za kufuatilia zenye wahusika na tarehe za mwisho, na maswali yaliyobaki wazi.\"",
            "Baadhi ya zana za mikutano zinaweza kunakili maneno na kufupisha mikutano mwajiri wako akiwasha kipengele hicho. Kila mtu katika mkutano anapaswa kujua kwamba unarekodiwa au unanakiliwa; fuata kanuni za kazini kwako.",
            "Muhtasari unaweza kuacha kitu muhimu au kukosea undani. Kagua ukweli muhimu dhidi ya hati asili, hasa namba, tarehe, majina na nani alikubali kufanya nini."
          ],
          steps: ["Bandika au fungua hati (kama inaruhusiwa).", "Omba vitone, maamuzi na kazi za kufuatilia zenye wahusika na tarehe.", "Linganisha ukweli muhimu na hati asili.", "Rekebisha chochote kilichokosekana au kilicho kosa kabla ya kushiriki."],
          words: [["Muhtasari", "toleo fupi linalobaki na mambo makuu."], ["Kazi ya kufuatilia", "kazi ambayo mtu amekubali kuifanya, ikiwezekana ikiwa na mhusika na tarehe ya mwisho (kwa Kiingereza \"action item\")."], ["Kunakili maneno", "kugeuza maneno yanayosemwa kuwa maandishi (kwa Kiingereza \"transcribe\")."]],
          slides: [
            { title: "Omba umbo maalum", bullets: ["Vitone vitano kwa mfanyakazi mpya", "Maamuzi, kazi za kufuatilia, maswali yaliyo wazi", "Wahusika na tarehe za mwisho"] },
            { title: "Zana za mikutano", bullets: ["Baadhi zinanakili maneno na kufupisha mikutano", "Kila mtu ajue kwamba inarekodi", "Fuata kanuni za kazini kwako"] },
            { title: "Kagua dhidi ya hati asili", bullets: ["Namba, tarehe na majina", "Nani alikubali kufanya nini", "Kitu chochote muhimu kilichoachwa"] }
          ],
          tryIt: "Chukua hati ndefu ya kazi au maelezo ya mkutano (au sera ya umma kama unatafuta kazi). Iombe AI vitone vitano na kazi tatu za kufuatilia zenye wahusika, kisha uvikague dhidi ya hati asili.",
          youCanNow: "kufupisha nyaraka na mikutano kuwa mambo yaliyo wazi na kazi za kufuatilia, na kuvikagua.",
          quickCheck: [
            { objective: "O4", q: "Kazi ya kufuatilia (action item) ni nini?", options: ["Muhtasari wa mkutano mzima", "Swali ambalo hakuna aliyelijibu", "Kazi yenye mhusika na tarehe ya mwisho", "Saa ya kuanza mkutano"], answer: 2, why: "Kazi za kufuatilia zinasema nani anafanya nini na kufikia lini." },
            { objective: "O4", q: "Muhtasari wa AI umeacha tarehe ya mwisho iliyomo katika hati asili. Unafanya nini?", options: ["Unaongeza tarehe hiyo baada ya kulinganisha na hati asili", "Unashiriki muhtasari kama ulivyo", "Unafuta hati asili", "Unaomba muhtasari mrefu zaidi na hauukagui"], answer: 0, why: "Muhtasari unaweza kuacha undani, kwa hiyo unalinganisha na hati asili na kurekebisha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupata msaada wa spreadsheet kutoka kwa AI",
          minutes: 5,
          goal: "Tumia AI kuandika na kueleza fomula ya spreadsheet, kisha uijaribu.",
          text: [
            "Wafanyakazi wengi hupoteza muda kwenye spreadsheet. AI ni mwalimu mzuri: \"Katika Excel, ninahesabuje safu ngapi katika safu wima B zinasema 'Late'?\" Inaweza kujibu =COUNTIF(B:B,\"Late\") na kueleza kila sehemu.",
            "Eleza safu wima zako badala ya kubandika data ya siri: \"Safu wima A ni tarehe, B ni hali, C ni saa.\" Kama mwajiri wako anaruhusu AI iliyojengwa ndani ya Excel au Sheets, unaweza kuiuliza kuhusu faili lililofunguliwa.",
            "Jaribu fomula kila mara kwenye safu chache ambazo unajua jibu lake. Fomula za AI zinaweza kukaribia lakini zikawa na kosa, kwa mfano kuhesabu safu ya vichwa au kutumia masafa yasiyo sahihi."
          ],
          steps: ["Eleza safu wima zako na unachotaka kujua.", "Iombe AI fomula na maelezo yake.", "Bandika fomula kwenye spreadsheet yako.", "Ijaribu kwenye safu ambazo unajua jibu lake.", "Iombe AI iirekebishe kama ina kosa."],
          words: [["Fomula", "agizo ndani ya kisanduku cha spreadsheet linalohesabu kitu."], ["COUNTIF", "fomula inayohesabu visanduku vinavyolingana na sharti fulani."], ["Masafa", "kundi la visanduku, kama B2:B50 (kwa Kiingereza \"range\")."]],
          slides: [
            { title: "AI kama mwalimu wa spreadsheet", bullets: ["\"Ninahesabuje safu zinazosema Late?\"", "=COUNTIF(B:B,\"Late\")", "Iombe ieleze kila sehemu"] },
            { title: "Eleza, usibandike", bullets: ["\"Safu wima A ni tarehe, B ni hali\"", "AI iliyojengwa ndani tu kama inaruhusiwa"] },
            { title: "Ijaribu", bullets: ["Kagua safu ambazo unajua jibu lake", "Angalia safu ya vichwa na masafa yasiyo sahihi"] }
          ],
          tryIt: "Tengeneza spreadsheet ndogo yenye safu 10 za data ya mfano. Iombe AI fomula moja (kuhesabu, kujumlisha au wastani), ibandike na uijaribu dhidi ya jibu unalopata kwa kuhesabu mwenyewe.",
          youCanNow: "kupata, kuelewa na kujaribu fomula za spreadsheet kwa msaada wa AI.",
          quickCheck: [
            { objective: "O5", q: "Masafa (range) katika spreadsheet ni nini?", options: ["Chati", "Kundi la visanduku, kama B2:B50", "Jina la faili", "Kosa la fomula"], answer: 1, why: "Masafa ni kundi la visanduku ambalo fomula inafanyia kazi." },
            { objective: "O5", q: "Fomula ya COUNTIF ya AI inatoa 11, lakini wewe unahesabu safu 10 za \"Late\" kwa mkono. Unafanya nini?", options: ["Unatumia 11 hata hivyo", "Unafuta data", "Unaomba AI nyingine", "Unakagua masafa, kwa mfano kama yanajumuisha safu ya vichwa, na unarekebisha"], answer: 3, why: "Kosa la kawaida ni masafa yasiyo sahihi au kuhesabu vichwa, kwa hiyo unajaribu na kurekebisha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukagua kazi ya AI kabla ya kuishiriki",
          minutes: 5,
          goal: "Tumia orodha fupi ya ukaguzi kupitia jibu lolote la AI kabla halijawafikia wengine.",
          text: [
            "Kazini, jina lako liko kwenye unachoshiriki. Tumia ukaguzi wa mambo manne kila mara: Ukweli (namba, majina, tarehe na sera zinalingana na chanzo), Ufaafu (mtindo na urefu sahihi kwa msomaji), Usalama (hakuna data ya siri au binafsi isiyostahili kuwepo), na Chanzo (kama inataja kanuni au takwimu, unajua ilikotoka).",
            "AI inaweza kubuni maelezo yanayosikika sahihi, yanayoitwa hallucinations (maono ya uongo). Inaweza pia kunakili upendeleo, kwa mfano katika maelezo ya kazi. Isome kana kwamba wewe ndiye mtu anayeipokea.",
            "Kama kazini kwako wanakuomba useme ulipotumia AI, sema. Kuwa wazi kuhusu jinsi unavyofanya kazi kunajenga uaminifu."
          ],
          steps: ["Ukweli: kagua dhidi ya chanzo.", "Ufaafu: mtindo na urefu sahihi kwa msomaji.", "Usalama: hakuna data isiyostahili kuwepo.", "Chanzo: jua kanuni au namba yoyote ilikotoka.", "Sema umetumia AI kama kazini kwako wanataka hivyo."],
          words: [["Hallucination", "AI inapoandika kitu kinachosikika kweli lakini kimebuniwa."], ["Upendeleo", "mwelekeo usio wa haki kwa ajili ya au dhidi ya kundi fulani (kwa Kiingereza \"bias\")."]],
          slides: [
            { title: "Jina lako liko juu yake", bullets: ["Kagua kila jibu la AI kabla ya kushiriki"] },
            { title: "Ukaguzi wa mambo manne", bullets: ["Ukweli", "Ufaafu", "Usalama", "Chanzo"] },
            { title: "Angalia", bullets: ["Maelezo yaliyobuniwa (hallucinations)", "Upendeleo, kama katika maelezo ya kazi", "Sema umetumia AI kama inatakiwa"] }
          ],
          tryIt: "Kazi ya mwisho: kamilisha seti yako ya kazi za AI kazini: kanuni tatu za sera, barua pepe iliyo wazi kutoka maelezo, muhtasari wa vitone vitano wenye kazi za kufuatilia, fomula ya spreadsheet iliyojaribiwa, na kumbukumbu ya ulichokagua katika kila moja kwa Ukweli, Ufaafu, Usalama na Chanzo.",
          youCanNow: "kutumia zana za AI kazini kumaliza kazi haraka zaidi, kwa usalama na kwa ukaguzi wako mwenyewe makini.",
          quickCheck: [
            { objective: "O6", q: "Ukaguzi wa Usalama unauliza nini kabla ya kushiriki kazi ya AI?", options: ["Kama ina taarifa za siri au binafsi zisizopaswa kushirikiwa", "Kama ni ndefu ya kutosha", "Kama inatumia maneno makubwa", "Kama AI iliipenda"], answer: 0, why: "Ukaguzi wa Usalama unahakikisha hakuna kitu cha siri au binafsi kinachoenda mahali kisipostahili." },
            { objective: "O6", q: "AI imeandika muhtasari wa sera unaonukuu kanuni. Unafanya nini kabla ya kushiriki?", options: ["Unaushiriki haraka", "Unaondoa jina lako", "Unakagua kanuni ilikotoka (Chanzo) na kwamba ni sahihi", "Unaongeza kanuni zaidi"], answer: 2, why: "Ukaguzi wa Chanzo unathibitisha kanuni au namba yoyote ilikotoka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Muhtasari, spreadsheet na ukaguzi",
        questions: [
          { objective: "O4", q: "Muhtasari mzuri wa mkutano unaorodhesha:", options: ["Maamuzi, kazi za kufuatilia zenye wahusika na tarehe, na maswali yaliyo wazi", "Jina la mkutano tu", "Nywila za kila mtu", "Hakuna kitu"], answer: 0, why: "Umbo hilo linarahisisha ufuatiliaji." },
          { objective: "O4", q: "Kabla mkutano haujanakiliwa, watu wanapaswa:", options: ["Kuzima kamera zao", "Kutoambiwa", "Kuondoka", "Kujua kwamba unarekodiwa au unanakiliwa"], answer: 3, why: "Fuata kanuni za kazini na uwe wazi." },
          { objective: "O5", q: "=COUNTIF(B:B,\"Late\") inafanya nini?", options: ["Inajumlisha safu wima B", "Inahesabu visanduku katika safu wima B vinavyosema Late", "Inafuta safu za Late", "Inapanga spreadsheet"], answer: 1, why: "COUNTIF inahesabu visanduku vinavyolingana." },
          { objective: "O5", q: "Unajuaje fomula ya AI inafanya kazi?", options: ["Unaijaribu kwenye safu ambazo unajua jibu lake", "Inaonekana sawa", "AI inasema hivyo", "Hakuna anayelalamika"], answer: 0, why: "Kujaribu kunathibitisha." },
          { objective: "O6", q: "Kipi SI mojawapo ya ukaguzi wa mambo manne?", options: ["Ufaafu", "Ukweli", "Umaarufu", "Usalama"], answer: 2, why: "Ukaguzi ni Ukweli, Ufaafu, Usalama na Chanzo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Zana Muhimu za AI Kazini",
    questions: [
      { objective: "O1", q: "Kwa kawaida unaweza kupata wapi sera ya AI ya kazini kwako?", options: ["Chapisho la mitandao ya kijamii", "Kitabu cha mwongozo, intranet, au kwa kumuuliza meneja wako au IT", "Mazungumzo na AI", "Popote"], answer: 1, why: "Sera zinakaa katika sehemu rasmi za kampuni." },
      { objective: "O1", q: "Toleo la akaunti ya kazi la zana ya AI linaweza:", options: ["Lisiwepo", "Kuwa salama kidogo kila mara", "Kushiriki data yako hadharani", "Kuwa na ulinzi zaidi wa data kuliko akaunti binafsi ya bure"], answer: 3, why: "Matoleo ya kibiashara yanaweza kutoa ulinzi zaidi; angalia mwongozo wa mwajiri wako." },
      { objective: "O1", q: "Kipi kisiwekwe kamwe katika akaunti binafsi ya AI?", options: ["Swali la jumla", "\"Ifanye hii iwe fupi zaidi\"", "Makala ya habari ya umma", "Taarifa binafsi za mteja"], answer: 3, why: "Data ya wateja ni ya faragha." },
      { objective: "O2", q: "ChatGPT, Copilot na Gemini ni:", options: ["Spreadsheet", "Wasaidizi wa mazungumzo", "Printa", "Simu"], answer: 1, why: "Ni wasaidizi wa mazungumzo wa AI." },
      { objective: "O2", q: "\"Chini ya maneno 100\" katika prompt kunaweka:", options: ["Lengo", "Msomaji", "Urefu", "Nywila"], answer: 2, why: "Kunadhibiti urefu." },
      { objective: "O2", q: "Baada ya AI kuandika rasimu ya barua pepe, wewe:", options: ["Unakagua ukweli na kuifanya isikike kama wewe", "Unaituma bila kuisoma", "Unaongeza ukweli zaidi iliyoubuni", "Unaifuta"], answer: 0, why: "Toleo la mwisho ni lako." },
      { objective: "O3", q: "Copilot inaonekana katika:", options: ["Madaftari ya karatasi", "Gmail tu", "Apps za Microsoft 365, katika baadhi ya mipango", "Hakuna kitu"], answer: 2, why: "Microsoft inaongeza Copilot kwenye apps zake katika baadhi ya mipango." },
      { objective: "O3", q: "Gemini inaonekana katika:", options: ["Apps za Google Workspace, katika baadhi ya mipango", "Excel tu", "Mashine za faksi", "Hakuna kitu"], answer: 0, why: "Google inaongeza Gemini kwenye apps zake katika baadhi ya mipango." },
      { objective: "O3", q: "Huoni alama ya AI katika app yako ya ofisi. Unaweza:", options: ["Kusakinisha nyongeza zozote tu", "Kuuliza IT, au kutumia msaidizi wa mazungumzo ulioidhinishwa na maandishi yasiyo ya siri", "Kukata tamaa", "Kutumia akaunti ya mfanyakazi mwenzako"], answer: 1, why: "Baki ndani ya zana zilizoidhinishwa." },
      { objective: "O4", q: "Kazi ya kufuatilia inapaswa kuwa na:", options: ["Hakuna kitu", "Siri", "Nywila", "Mhusika na tarehe ya mwisho"], answer: 3, why: "Wahusika na tarehe zinaifanya ifanyike." },
      { objective: "O4", q: "Kwa nini ulinganishe muhtasari na hati asili?", options: ["Muhtasari unaweza kuacha au kubadilisha undani", "Kupoteza muda", "Haihitajiki", "Kwa kujifurahisha"], answer: 0, why: "Kukagua kunanasa makosa." },
      { objective: "O4", q: "Kunakili maneno (transcribe) maana yake ni:", options: ["Kutuma barua pepe", "Kufuta faili", "Kutafsiri lugha", "Kugeuza maneno yanayosemwa kuwa maandishi"], answer: 3, why: "Kunakili kunaandika maneno yanayosemwa." },
      { objective: "O5", q: "Badala ya kubandika data ya siri ya spreadsheet kwenye AI, unaweza:", options: ["Kuituma kwa marafiki kwa barua pepe", "Kuibandika hata hivyo", "Kueleza safu wima", "Kuichapisha mtandaoni"], answer: 2, why: "Maelezo yanaweka data salama." },
      { objective: "O5", q: "Masafa katika spreadsheet ni:", options: ["Jiko", "Kundi la visanduku, kama B2:B50", "Nywila", "Chati"], answer: 1, why: "Masafa ni makundi ya visanduku." },
      { objective: "O5", q: "Kosa la kawaida la fomula ya AI ni:", options: ["Hakuna", "Kuwa fupi mno", "Kutumia rangi", "Kuhesabu safu ya vichwa au kutumia masafa yasiyo sahihi"], answer: 3, why: "Jaribu ili kunasa makosa haya." },
      { objective: "O6", q: "Hallucination ya AI ni:", options: ["Mkutano", "Hitilafu ya skrini", "Undani uliobuniwa unaosikika kweli", "Virusi"], answer: 2, why: "AI inaweza kubuni ukweli." },
      { objective: "O6", q: "Ukaguzi wa \"Ufaafu\" unauliza kama:", options: ["Mtindo na urefu vinamfaa msomaji", "Faili inatosha kwenye USB", "Kiti kinatosha", "Inatosha katika tweet"], answer: 0, why: "Ufaafu unahusu msomaji." },
      { objective: "O6", q: "Ukaguzi wa \"Chanzo\" unauliza:", options: ["Ulitumia kibodi gani", "Kanuni au namba yoyote ilitoka wapi", "Nani aliandika kwa kasi zaidi", "Hakuna kitu"], answer: 1, why: "Kanuni na namba zinahitaji chanzo." },
      { objective: "O6", q: "Kama kazini kwako wanakutaka useme umetumia AI, unapaswa:", options: ["Kuficha", "Kusema", "Kumlaumu mfanyakazi mwenzako", "Kupuuza kanuni"], answer: 1, why: "Uwazi unajenga uaminifu na unafuata sera." },
      { objective: "O6", q: "Jina la nani liko kwenye kazi iliyosaidiwa na AI unayoishiriki?", options: ["Lako", "La AI", "La IT", "La hakuna mtu"], answer: 0, why: "Wewe unawajibika kwayo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      8,
      9,
      10,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kanuni za sera",
        objective: "O1",
        notYet: "Hakuna kanuni zilizoandikwa, au kanuni zinazoruhusu data binafsi katika zana za AI.",
        meets: "Kanuni tatu muhimu kutoka sera ya AI ya kazini, au kanuni tatu salama za msingi.",
        exceeds: "Anasema sera iko wapi na nani wa kumuuliza kuihusu."
      },
      {
        name: "Barua pepe iliyo wazi",
        objective: "O2",
        notYet: "Barua pepe haiko wazi, au ukweli mmoja si sahihi.",
        meets: "Barua pepe iliyo wazi kutoka maelezo ghafi, ukweli ukiwa umekaguliwa dhidi ya maelezo.",
        exceeds: "Mwanafunzi aliomba badiliko moja na kuifanya isikike kama yeye."
      },
      {
        name: "Muhtasari na kazi za kufuatilia",
        objective: "O4",
        notYet: "Mambo machache kuliko matano, au kazi za kufuatilia bila wahusika.",
        meets: "Vitone vitano na kazi tatu za kufuatilia zenye wahusika, vimekaguliwa dhidi ya hati asili.",
        exceeds: "Kazi za kufuatilia pia zina tarehe za mwisho, na undani uliokosekana ulipatikana na kuongezwa."
      },
      {
        name: "Fomula iliyojaribiwa",
        objective: "O5",
        notYet: "Fomula haikujaribiwa au inatoa jibu lisilo sahihi.",
        meets: "Fomula inayofanya kazi, iliyojaribiwa dhidi ya jibu lililopatikana kwa kuhesabu mwenyewe.",
        exceeds: "Mwanafunzi anaweza kueleza kila sehemu ya fomula inafanya nini."
      },
      {
        name: "Ukaguzi kabla ya kushiriki",
        objective: "O6",
        notYet: "Hakuna kumbukumbu ya kilichokaguliwa.",
        meets: "Kila kipengele kina kumbukumbu ya ukaguzi wa Ukweli, Ufaafu, Usalama na Chanzo.",
        exceeds: "Kumbukumbu zinataja rekebisho maalum lililofanywa baada ya ukaguzi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia zana ya AI iliyoidhinishwa kwa kazi kila wiki, siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi au mameneja wanaoripoti muda uliookolewa kwenye barua pepe, muhtasari au spreadsheet",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya nguvu kazi ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Zana za AI zinazoruhusiwa kazini, au msaidizi wa mazungumzo wa bure (ChatGPT, Microsoft Copilot au Google Gemini) na data ya kubuni kwa wanaotafuta kazi",
      "Spreadsheet ya bure: Google Sheets au Microsoft Excel mtandaoni",
      "Hati ndefu ya mfano au maelezo ya mkutano yasiyo na taarifa za siri",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika kikundi cha kazini, leteni sera ya AI ya mwajiri kwenye kipindi cha kwanza na muipitie pamoja.",
      "Toa maelezo, nyaraka na data ya spreadsheet ya mfano ili mtu yeyote asitumie taarifa za siri.",
      "Zana zilizojengwa ndani zinatofautiana kwa mpango; kuwa na msaidizi wa mazungumzo wa bure tayari kwa wanafunzi ambao akaunti zao hazina zana hizo.",
      "Wanafunzi wabadilishane majibu na kufanya ukaguzi wa Ukweli, Ufaafu, Usalama na Chanzo kwenye kazi za wenzao.",
      "Pima seti ya kazi kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
