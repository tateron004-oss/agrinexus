"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-fintech.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Inaeleza jinsi teknolojia ya fedha inavyofanya kazi na hatari zake; haitoi ushauri wa uwekezaji (README rule 6).

module.exports = {
  id: "veterans-ai-fintech-sw",
  lang: "sw",
  translationOf: "veterans-ai-fintech",
  category: "Veterans (military)",
  name: "AI katika Teknolojia ya Fedha",
  skills: "Kueleza jinsi apps za fedha zinavyofanya kazi, Kujua kipi kina bima na kipi hakina, Kukagua app kabla ya kuiamini, Kuweka ulinzi wa akaunti, Kutambua na kuripoti ulaghai wa apps za fedha",
  outcome: "kueleza jinsi app ya pesa inavyotumia AI, kukagua kama ni halali na kama pesa zako zina bima, kuweka mipangilio yake ya ulinzi, na kutambua na kuripoti ulaghai wa apps za fedha unaowalenga wanajeshi wastaafu.",
  about: [
    "Teknolojia ya fedha, kwa Kiingereza fintech, ni apps na tovuti ambazo watu hutumia kuweka pesa benki, kulipa, kukopa, kupanga bajeti na kuwekeza. Nyingi sasa zinatumia AI nyuma ya pazia. Wanajeshi wastaafu (veterans) mara nyingi hulengwa na walaghai kwa sababu wana mshahara na mafao ya kudumu, kwa hiyo kujua jinsi zana hizi zinavyofanya kazi kunakulinda wewe na familia yako.",
    "Katika kozi hii utajifunza jinsi apps za malipo, benki za kidijitali, robo-advisors na crypto zinavyofanya kazi, bima ya amana inalinda nini na hailindi nini, jinsi ya kukagua app kabla ya kuiamini, jinsi ya kufunga akaunti zako kwa usalama, na jinsi ya kutambua na kuripoti ulaghai. Ujuzi huu pia unasaidia ukitaka kazi katika benki au fintech.",
    "Kila somo linachukua kama dakika tano. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi. Kozi hii inaeleza jinsi mambo yanavyofanya kazi na hatari zake; haikuambii ununue nini au uwekeze katika nini. Kwa maamuzi yako binafsi ya pesa, zungumza na mtaalamu aliyehitimu na huru, au mshauri wa fedha wa bure wa jeshi au wa VA."
  ],
  finalTask: "Tengeneza Kadi ya Usalama wa Fintech ya ukurasa mmoja kwa app moja ya pesa unayotumia au unayoifikiria: inafanya nini na inatumiaje AI, kama pesa zako ndani yake zina bima ya FDIC (na ulikaguaje), mipangilio ya ulinzi uliyowasha, dalili tatu za hatari za ulaghai, na wapi ungeripoti tatizo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu, wanajeshi walio kazini na familia zao wanaotumia au wanaofikiria kutumia apps za pesa kuweka pesa benki, kulipa, kukopa, kupanga bajeti au kuwekeza. Wanajeshi wastaafu mara nyingi hulengwa na walaghai kwa sababu wana mshahara na mafao ya kudumu.",
    startingPoint: "Wanatumia simu janja na angalau app moja ya pesa au ya malipo. Wengi hawajui app inaweka pesa zao wapi, kama zina bima, au jinsi app inavyotumia AI, na wachache wamewasha mipangilio yote ya ulinzi.",
    gap: "Apps za pesa zinaweza kuonekana kama benki bila kuwa benki, na walaghai hujifanya kuwa benki, ofisi za serikali na nafasi za uwekezaji. Wanafunzi wanahitaji kukagua uhalali na bima ya app kwenye vyanzo rasmi, kufunga akaunti zao kwa usalama, na kutambua na kuripoti ulaghai wa fintech kabla ya kupoteza pesa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hakuna ujuzi wa fedha unaodhaniwa",
      "Vifaa: simu janja yenye app ya pesa ya mwanafunzi mwenyewe",
      "Faragha: hakuna nywila, misimbo wala namba kamili za akaunti katika prompt yoyote ya AI au zoezi lolote",
      "Hakuna ushauri wa uwekezaji: crypto na robo-advisors zinaelezwa pamoja na hatari zake, na maamuzi yanapelekwa kwa mtaalamu aliyehitimu na huru",
      "Sheria na viwango vya bima hubadilika, kwa hiyo wanafunzi wanakagua fdic.gov, CFPB na FTC moja kwa moja"
    ],
    prerequisites: "Hakuna. Kozi \"AI for Financial and Personal Success\" ni kozi nzuri ya kwanza kuhusu bajeti na ulaghai."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa apps za pesa zilizo kwenye simu yako", action: "kutambua aina nne za fintech na njia moja ambayo kila moja inatumia AI", standard: "na kutaja unachoweza kufanya uamuzi wa AI kuhusu pesa zako ukiwa si sahihi" },
    { id: "O2", condition: "Kwa app moja ya pesa unayotumia", action: "kukagua kama pesa zilizo kwenye app zinalindwa na bima ya amana ya FDIC", standard: "kwa kupata benki yake mshirika na kuithibitisha kwenye FDIC BankFind" },
    { id: "O3", condition: "Unaposikia kuhusu robo-advisor au crypto", action: "kueleza jinsi kila moja inavyofanya kazi na kuorodhesha hatari zake kuu", standard: "ukilinganisha orodha ya hatari na chanzo rasmi kama FTC" },
    { id: "O4", condition: "Kabla ya kuweka pesa kwenye app", action: "kufanya ukaguzi wa hatua tano kwenye app hiyo", standard: "ukiandika ndiyo au hapana kwa kila hatua" },
    { id: "O5", condition: "Katika app moja ya pesa", action: "kuwasha uthibitisho wa hatua mbili na arifa za malipo na kuondoa vifaa usivyovijua", standard: "bila kutoa nywila wala msimbo wowote" },
    { id: "O6", condition: "Ukipewa ujumbe, simu au ofa kuhusu pesa", action: "kutambua dalili za hatari za ulaghai wa fintech na kuuripoti mahali sahihi", standard: "bila kutoa msimbo wowote na bila kulipa chochote" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi fintech inavyofanya kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fintech ni nini na AI inaingia wapi",
          minutes: 4,
          goal: "Kutaja aina nne za fintech na njia moja ambayo kila moja inatumia AI.",
          text: [
            "Fintech ni teknolojia ya fedha: apps na tovuti za pesa. Aina za kawaida ni benki kwa simu, apps za malipo za kutuma pesa kwa watu, apps za bajeti, wakopeshaji wa mtandaoni na apps za uwekezaji.",
            "AI inatumika nyuma ya pazia: kugundua udanganyifu (kadi moja ikitumika katika nchi mbili ndani ya saa moja), kujibu maswali kupitia chatbot, kupanga matumizi yako katika makundi, na kusaidia kuamua nani apate mkopo.",
            "Maamuzi ya AI yanaweza kuwa si sahihi. Ununuzi halali unaweza kuzuiwa, au mkopo kukataliwa kwa sababu ya taarifa mbaya. Una haki ya kuuliza kwa nini na kupinga makosa; Consumer Financial Protection Bureau (CFPB), ofisi ya serikali ya Marekani inayolinda watumiaji wa huduma za fedha, inaeleza haki hizo."
          ],
          words: [["Fintech", "teknolojia ya fedha: apps na tovuti za benki, kulipa, kukopa, kupanga bajeti na kuwekeza."], ["Kugundua udanganyifu", "zana zinazoangalia malipo yanayoonekana kuibwa au ya uongo."], ["Chatbot", "programu ya AI inayojibu maswali kwa njia ya mazungumzo ya maandishi."]],
          slides: [
            { title: "Fintech = apps za pesa", bullets: ["Benki kwa simu na apps za malipo", "Apps za bajeti na wakopeshaji wa mtandaoni", "Apps za uwekezaji"] },
            { title: "AI nyuma ya pazia", bullets: ["Inagundua udanganyifu", "Inajibu maswali kupitia chatbot", "Inapanga matumizi na kusaidia kuamua mikopo"] },
            { title: "AI inaweza kukosea", bullets: ["Ununuzi halali unazuiwa", "Mikopo inakataliwa kwa taarifa mbaya", "Unaweza kuuliza kwa nini na kupinga makosa"] }
          ],
          sources: [{ name: "CFPB: Military financial lifecycle (service members and veterans)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Orodhesha kila app ya pesa iliyo kwenye simu yako. Kando ya kila moja, andika ni aina gani ya fintech na njia moja ambayo huenda inatumia AI.",
          youCanNow: "kueleza aina kuu za fintech na jinsi zinavyotumia AI.",
          quickCheck: [
            { objective: "O1", q: "Kipi ni aina ya fintech?", options: ["Kitabu cha hundi cha karatasi", "Chupa ya kuweka pesa taslimu nyumbani", "App ya malipo kwenye simu yako", "Taarifa ya benki iliyochapishwa"], answer: 2, why: "Fintech ni apps na tovuti za pesa, kama apps za malipo, benki, bajeti na uwekezaji." },
            { objective: "O1", q: "AI ya app yako ya pesa inaona malipo yako ya kawaida ya kodi ya nyumba kama udanganyifu na kuyazuia. Unafanya nini?", options: ["Kuwasiliana na kampuni, kuuliza kwa nini na kupinga kosa", "Kufuta app na kutolipa kodi mtandaoni tena kamwe", "Kutoa nywila yako ili walirekebishe", "Kusubiri na kutumaini litapita"], answer: 0, why: "Uamuzi wa AI kuhusu pesa zako ukiwa si sahihi, unaweza kuuliza kwa nini na kuupinga." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pesa zako ziko wapi hasa: benki, apps na bima",
          minutes: 5,
          goal: "Kukagua kama pesa zilizo kwenye app zinalindwa na bima ya amana ya FDIC.",
          text: [
            "Bima ya amana ya FDIC inalinda pesa zilizo katika akaunti za amana (akaunti ya hundi, akiba, money market deposit account na CD) katika benki yenye bima ya FDIC. Tulipokagua fdic.gov mnamo Oktoba 2026, kiwango cha kawaida kilikuwa angalau $250,000 kwa kila mweka amana katika kila benki yenye bima.",
            "Bima ya FDIC hailindi hisa, hati fungani, mifuko ya uwekezaji (mutual funds), annuities, bima ya maisha wala mali za crypto. Apps nyingi za malipo si benki. Salio lililobaki kwenye app huenda halina bima isipokuwa app inaliweka kwa ajili yako katika akaunti ya benki yenye bima.",
            "Kukagua: soma ukurasa wa msaada wa app yenyewe upate jina la benki yake mshirika, kisha tafuta benki hiyo kwa zana ya FDIC iitwayo BankFind kwenye fdic.gov."
          ],
          steps: ["Fungua ukurasa wa msaada au wa kisheria wa app na utafute \"FDIC\" na jina la benki.", "Tafuta jina la benki hiyo kwa FDIC BankFind kwenye fdic.gov.", "Kagua kama aina ya pesa zako (amana, hisa, crypto) inalindwa.", "Ukiwa na shaka, hamisha pesa za matumizi kwenda akaunti ya benki yenye bima."],
          words: [["FDIC", "Federal Deposit Insurance Corporation: inalinda amana katika benki zenye bima benki ikifilisika."], ["Akaunti ya amana", "akaunti ya hundi, akiba, money market deposit account au CD katika benki."], ["BankFind", "zana ya bure ya FDIC ya kukagua kama benki ina bima ya FDIC."]],
          slides: [
            { title: "FDIC inalinda amana", bullets: ["Hundi, akiba, money market deposits, CD", "Angalau $250,000 kwa kila mweka amana, kila benki (Okt 2026)"] },
            { title: "FDIC HAILINDI", bullets: ["Hisa, hati fungani na mutual funds", "Annuities na bima ya maisha", "Mali za crypto"] },
            { title: "Kagua app yako", bullets: ["Pata benki yake mshirika kwenye kurasa za msaada", "Itafute kwa FDIC BankFind", "Una shaka? Weka pesa katika benki yenye bima"] }
          ],
          sources: [{ name: "FDIC: Deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Chagua app moja ya pesa unayotumia. Pata benki yake mshirika kwenye kurasa za msaada za app na ukague benki hiyo kwenye FDIC BankFind. Andika kama salio lako lina bima.",
          youCanNow: "kukagua kama pesa zilizo kwenye app zinalindwa na bima ya amana ya FDIC.",
          quickCheck: [
            { objective: "O2", q: "FDIC BankFind ni nini?", options: ["App ya mikopo", "Soko la crypto", "Zana ya alama za mikopo", "Zana ya FDIC ya kukagua kama benki ina bima"], answer: 3, why: "BankFind inakuwezesha kuthibitisha kwamba benki ina bima ya FDIC." },
            { objective: "O2", q: "App ya malipo inasema pesa zako ziko \"salama\". Unakaguaje kama zina bima?", options: ["Kuamini tangazo la app", "Kupata benki yake mshirika kwenye kurasa za msaada na kuitafuta kwenye BankFind", "Kumuuliza msaidizi wa AI", "Kudhani kwamba apps zote ni benki"], answer: 1, why: "Bima inategemea kama app inaweka pesa zako katika benki yenye bima, jambo unalothibitisha kwenye BankFind." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jinsi robo-advisors na crypto zinavyofanya kazi, na hatari zake",
          minutes: 5,
          goal: "Kueleza jinsi robo-advisor na crypto zinavyofanya kazi na kutaja hatari zake kuu.",
          text: [
            "Robo-advisor ni app inayotumia kanuni za kompyuta kuwekeza pesa zako kulingana na majibu unayotoa, kama malengo yako na muda uliobaki kabla ya kuhitaji pesa hizo. Inatoza ada. Uwekezaji unaweza kupoteza thamani, na hauna bima ya FDIC.",
            "Crypto (sarafu za kidijitali) ni pesa za kidijitali zinazorekodiwa katika daftari la pamoja la mtandaoni linaloitwa blockchain. Bei zinaweza kupanda na kushuka kwa kasi sana. FTC (Federal Trade Commission, ofisi ya serikali ya Marekani inayopambana na ulaghai) inaonya kwamba malipo ya crypto kwa kawaida hayawezi kurudishwa na crypto haina bima ya serikali kama amana za benki.",
            "Kozi hii haikuambii kama utumie mojawapo. Kabla ya uamuzi wowote wa uwekezaji, jifunze ada na hatari kwenye kurasa rasmi na zungumza na mtaalamu aliyehitimu na huru, au mshauri wa fedha wa bure wa jeshi au wa VA."
          ],
          words: [["Robo-advisor", "app inayowekeza pesa kwa kanuni za kompyuta kulingana na majibu yako."], ["Cryptocurrency", "pesa za kidijitali zinazorekodiwa kwenye blockchain."], ["Blockchain", "rekodi ya pamoja ya mtandaoni ya miamala ambayo ni vigumu sana kuibadilisha."], ["Bei isiyotulia", "bei inayoweza kupanda na kushuka sana, kwa haraka (kwa Kiingereza volatile)."]],
          slides: [
            { title: "Robo-advisors", bullets: ["Zinawekeza kwa kanuni za kompyuta na majibu yako", "Zinatoza ada", "Zinaweza kupoteza thamani; hazina bima ya FDIC"] },
            { title: "Crypto", bullets: ["Pesa za kidijitali kwenye blockchain", "Bei zinaweza kubadilika kwa kasi sana", "Malipo kwa kawaida hayawezi kurudishwa"] },
            { title: "Kabla ya uamuzi wowote", bullets: ["Jifunze ada na hatari kwenye kurasa rasmi", "Zungumza na mtaalamu aliyehitimu na huru", "Kozi hii haitoi ushauri wa uwekezaji"] }
          ],
          sources: [{ name: "FTC: What to know about cryptocurrency and scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "FDIC: Deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Muulize msaidizi wa AI: \"Eleza jinsi robo-advisor inavyofanya kazi na jinsi crypto inavyofanya kazi, kwa maneno rahisi, pamoja na hatari kuu za kila moja.\" Linganisha orodha yake ya hatari na ukurasa wa FTC kuhusu crypto na uandike chochote ilichokosa.",
          youCanNow: "kueleza jinsi robo-advisors na crypto zinavyofanya kazi na kutaja hatari zake kuu.",
          quickCheck: [
            { objective: "O3", q: "Robo-advisor inafanyaje kazi?", options: ["Inawekeza kwa kanuni za kompyuta kulingana na majibu yako", "Mtu wa benki anakuchagulia hisa bure", "Inahakikisha pesa zako zitaongezeka", "Ni sawa na akaunti ya akiba"], answer: 0, why: "Robo-advisor inatumia kanuni za kompyuta na majibu yako kuwekeza; ina hatari za soko." },
            { objective: "O3", q: "Rafiki anasema crypto ina \"bima kama akaunti ya benki\". Unamwambia nini?", options: ["Ni kweli", "Wikendi tu", "Crypto haina bima kama amana za benki na bei zinaweza kubadilika kwa kasi sana", "Malipo ya crypto yanaweza kurudishwa kila wakati"], answer: 2, why: "Crypto haina bima kama amana za benki, bei zake zinaweza kubadilika, na malipo kwa kawaida hayawezi kurudishwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi fintech inavyofanya kazi",
        questions: [
          { objective: "O1", q: "Kipi ni mfano wa AI katika fintech?", options: ["Mlango wa mbele wa benki", "Kuchapisha hundi za karatasi", "Kugundua kadi iliyotumika katika nchi mbili ndani ya saa moja", "Risiti ya karatasi"], answer: 2, why: "Kugundua udanganyifu ni matumizi ya kawaida ya AI." },
          { objective: "O1", q: "AI inazuia ununuzi wako halali kimakosa. Unaweza kufanya nini?", options: ["Kuuliza kwa nini na kupinga kosa", "Hakuna, uamuzi wa AI ni wa mwisho", "Kufunga akaunti zako zote", "Kuweka namba ya kadi yako mtandaoni"], answer: 0, why: "Una haki ya kuhoji na kupinga makosa." },
          { objective: "O2", q: "Kwa mujibu wa fdic.gov mnamo Oktoba 2026, kipi kina bima ya FDIC katika benki yenye bima?", options: ["Mutual fund", "Crypto", "Hisa", "Akaunti ya akiba"], answer: 3, why: "Akaunti za amana kama akiba zinalindwa." },
          { objective: "O2", q: "Unakaguaje kama benki mshirika ya app ina bima ya FDIC?", options: ["Kuamini matangazo ya app", "Kuitafuta benki hiyo kwa FDIC BankFind", "Kumuuliza mtu usiyemjua", "Kuangalia mitandao ya kijamii"], answer: 1, why: "BankFind ni zana rasmi ya FDIC." },
          { objective: "O3", q: "FTC inasema nini kuhusu malipo ya crypto?", options: ["Yana bima kila wakati", "Kwa kawaida hayawezi kurudishwa", "Benki zinayahakikisha", "Hayana hatari yoyote"], answer: 1, why: "FTC inaonya kwamba malipo ya crypto kwa kawaida hayawezi kurudishwa." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia fintech kwa usalama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kukagua app kabla ya kuiamini",
          minutes: 5,
          goal: "Kufanya ukaguzi wa hatua tano kwenye app ya pesa kabla ya kuweka pesa ndani yake.",
          text: [
            "Walaghai hutengeneza apps na tovuti za pesa za uongo zinazoonekana halisi. Kabla ya kupakua au kuweka pesa, kagua nani anaendesha app hiyo na kama ni halisi.",
            "Pata app kutoka duka rasmi la apps tu na hakikisha jina la msanidi (developer) linalingana na kampuni halisi. Soma tovuti ya kampuni yenyewe upate jina lake kamili na benki yake mshirika. Kagua benki hiyo kwenye FDIC BankFind. Tafuta jina la kampuni pamoja na neno \"complaints\" (malalamiko) na uangalie taarifa za malalamiko za CFPB.",
            "Unaweza kumwomba msaidizi wa AI akueleze masharti ya app yanamaanisha nini, lakini usiiamini AI ikuambie kwamba app ni salama. Kagua vyanzo rasmi wewe mwenyewe."
          ],
          steps: ["Pakua kutoka duka rasmi la apps tu.", "Hakikisha jina la msanidi linalingana na kampuni halisi.", "Pata jina kamili la kampuni na benki yake mshirika kwenye tovuti yake yenyewe.", "Kagua benki hiyo kwenye FDIC BankFind.", "Tafuta malalamiko, pamoja na kwenye consumerfinance.gov."],
          words: [["Msanidi (developer)", "kampuni iliyotengeneza app, inayoonyeshwa kwenye ukurasa wa app katika duka la apps."], ["Masharti ya huduma", "sheria na ada unazokubali unapotumia app (kwa Kiingereza terms of service)."]],
          slides: [
            { title: "Apps za uongo zinaonekana halisi", bullets: ["Kagua kabla ya kupakua au kuweka pesa"] },
            { title: "Ukaguzi wa hatua tano", bullets: ["Duka rasmi la apps, msanidi sahihi", "Jina kamili la kampuni na benki yake mshirika", "FDIC BankFind kwa benki hiyo", "Tafuta malalamiko"] },
            { title: "AI inaeleza, haithibitishi", bullets: ["Iulize AI masharti yanamaanisha nini", "Kagua usalama kwenye vyanzo rasmi wewe mwenyewe"] }
          ],
          sources: [{ name: "CFPB: Military financial lifecycle (complaints and rights)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }, { name: "FDIC: Deposit insurance (BankFind)", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Fanya ukaguzi wa hatua tano kwenye app moja ya pesa unayotumia au unayoifikiria. Andika ndiyo au hapana kando ya kila hatua.",
          youCanNow: "kukagua kama app ya pesa ni halisi kabla ya kuiamini na pesa zako.",
          quickCheck: [
            { objective: "O4", q: "Hatua ya kwanza ya ukaguzi wa app wa hatua tano ni ipi?", options: ["Kusoma maoni ya mtandaoni tu", "Kupakua kutoka duka rasmi la apps tu, kutoka kwa msanidi sahihi", "Kuangalia jinsi app inavyopendeza", "Kumuuliza chatbot wa app kama ni salama"], answer: 1, why: "Apps za uongo zinaiga zile halisi, kwa hiyo unaanza kwa kupata app halisi kutoka duka rasmi." },
            { objective: "O4", q: "Msaidizi wa AI anasema app mpya ya pesa ni \"salama kabisa\". Unafanya nini?", options: ["Kuweka akiba yako yote ndani yake", "Kuwashirikisha marafiki app hiyo", "Kuruka hatua nyingine za ukaguzi", "Kufanya ukaguzi wa hatua tano wewe mwenyewe kwenye vyanzo rasmi"], answer: 3, why: "AI haiwezi kuthibitisha kwa uhakika kwamba app ni salama; unakagua vyanzo rasmi wewe mwenyewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufunga akaunti zako za pesa kwa usalama",
          minutes: 5,
          goal: "Kuwasha mipangilio mikuu ya ulinzi katika app ya pesa.",
          text: [
            "Zichukulie akaunti zako za pesa kama eneo la ulinzi mkali: tabaka kadhaa za ulinzi. Tumia nywila imara na ya kipekee kwa kila akaunti ya pesa, na washa uthibitisho wa hatua mbili ili msimbo au app vihitajike kuingia.",
            "Washa arifa ili app ikujulishe kuhusu kila malipo, kila kuingia au kila badiliko la taarifa zako. Arifa za haraka zinakusaidia kuzuia udanganyifu mapema.",
            "Usimpe mtu yeyote msimbo wa kuingia kamwe, hata mtu anayesema anatoka benki, VA au kwenye app. Kampuni halisi haziuombi. Usiandike kamwe nywila au namba kamili za akaunti kwa msaidizi wa AI."
          ],
          steps: ["Weka nywila imara na ya kipekee.", "Washa uthibitisho wa hatua mbili katika mipangilio ya ulinzi ya app.", "Washa arifa za malipo, kuingia na mabadiliko.", "Kagua vifaa vilivyounganishwa na uondoe chochote usichokijua.", "Jiahidi: sitatoa msimbo wa kuingia kamwe."],
          words: [["Uthibitisho wa hatua mbili", "ukaguzi wa pili, kama msimbo au idhini kwenye app, unaohitajika kuingia."], ["Arifa", "ujumbe ambao app inatuma jambo linapotokea katika akaunti yako."]],
          slides: [
            { title: "Tabaka za ulinzi", bullets: ["Nywila imara na ya kipekee", "Uthibitisho wa hatua mbili umewashwa"] },
            { title: "Washa arifa", bullets: ["Kila malipo", "Kila kuingia", "Kila badiliko la taarifa zako"] },
            { title: "Usitoe kamwe", bullets: ["Misimbo ya kuingia, kwa mtu yeyote", "Nywila au namba za akaunti kwa zana za AI"] }
          ],
          tryIt: "Fungua mipangilio ya ulinzi katika app moja ya pesa. Washa uthibitisho wa hatua mbili na arifa za malipo, na uondoe kifaa chochote usichokitambua.",
          youCanNow: "kuweka mipangilio mikuu ya ulinzi inayolinda akaunti ya pesa.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini uwashe arifa za malipo?", options: ["Ili kupata matangazo", "Ili kuwaonyesha marafiki salio lako", "Ili kugundua na kuzuia udanganyifu mapema", "Ili app iwe na kasi zaidi"], answer: 2, why: "Arifa zinakujulisha kuhusu kila malipo ili ugundue udanganyifu haraka." },
            { objective: "O5", q: "Katika mipangilio ya ulinzi ya app yako unaona kifaa usichokitambua. Unafanya nini?", options: ["Kukiondoa na kubadilisha nywila yako", "Kukiacha; huenda hakina tatizo", "Kuzima uthibitisho wa hatua mbili", "Kuweka picha ya skrini mtandaoni"], answer: 0, why: "Kifaa usichokijua kinaweza kuwa mtu mwingine ndani ya akaunti yako, kwa hiyo unakiondoa na kulinda akaunti." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutambua na kuripoti ulaghai wa fintech",
          minutes: 5,
          goal: "Kutambua dalili za hatari za ulaghai wa fintech na kujua wapi pa kuuripoti.",
          text: [
            "FTC inaonya kwamba ni walaghai tu wanaodai malipo kwa crypto, ni walaghai tu wanaohakikisha faida au mapato makubwa, na kazi inayokutaka ulipe ada ya crypto mapema ni ulaghai. Watu wa kimapenzi wa mtandaoni wanaotoa ushauri wa uwekezaji pia ni dalili ya hatari.",
            "Walaghai pia hujifanya kuwa benki, ofisi ya serikali au VA na kusema pesa zako ziko hatarini. AI inawawezesha kuandika jumbe kamilifu na hata kuiga sauti. Usibofye viungo vyao wala kupiga tena namba wanazokupa; tumia namba iliyo kwenye tovuti rasmi au kwenye kadi yako.",
            "Kuripoti: wasilisha lalamiko kuhusu huduma ya fedha kwa CFPB kwenye consumerfinance.gov au kwa simu, na ripoti udanganyifu kwa FTC kwenye ReportFraud.ftc.gov. Iambie benki yako mara moja kama pesa zimetoka kwenye akaunti yako."
          ],
          steps: ["Angalia: madai ya malipo kwa crypto, faida zilizohakikishwa, ada za mapema, simu za haraka za \"pesa zako ziko hatarini\".", "Simama. Usibofye, usilipe wala usitoe misimbo.", "Piga simu kwa kampuni kwa namba kutoka tovuti yake rasmi au kadi yako.", "Iambie benki yako mara moja kama pesa zimehamishwa.", "Ripoti kwa CFPB au ReportFraud.ftc.gov."],
          words: [["Ulaghai wa kujifanya", "mlaghai anapojifanya kuwa kampuni, ofisi au mtu unayemwamini (kwa Kiingereza impostor scam)."], ["Faida zilizohakikishwa", "ahadi ya faida bila hatari yoyote; uwekezaji halisi hauahidi hivi kamwe."]],
          slides: [
            { title: "Dalili za hatari kwa mujibu wa FTC", bullets: ["Malipo yanadaiwa kwa crypto", "Faida au mapato makubwa yaliyohakikishwa", "Ada ya crypto ya mapema ili kupata kazi"] },
            { title: "Wanaojifanya wanatumia AI", bullets: ["Jumbe kamilifu na sauti zilizoigwa", "Usibofye viungo vyao wala kupiga namba zao", "Tumia namba rasmi"] },
            { title: "Iripoti", bullets: ["Iambie benki yako mara moja", "Lalamiko kwa CFPB: consumerfinance.gov", "FTC: ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: What to know about cryptocurrency and scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "CFPB: Military financial lifecycle (submit a complaint)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Kazi ya mwisho: tengeneza Kadi yako ya Usalama wa Fintech ya ukurasa mmoja kwa app moja: inafanya nini na inatumiaje AI, kama pesa zako zina bima na ulikaguaje, mipangilio ya ulinzi uliyowasha, dalili tatu za hatari za ulaghai, na wapi ungeripoti tatizo.",
          youCanNow: "kuelewa jinsi app ya pesa inavyofanya kazi, kuikagua na kuilinda, na kutambua na kuripoti ulaghai wa fintech.",
          quickCheck: [
            { objective: "O6", q: "Kipi ni dalili ya hatari ya ulaghai wa fintech?", options: ["Taarifa ya mwezi uliyokuwa ukiitarajia", "Saa za kazi zilizobandikwa kwenye tawi la benki", "Risiti ya kitu ulichonunua", "Kushinikizwa kuhamisha pesa zako haraka kwenda akaunti \"salama\""], answer: 3, why: "Kukuharakisha uhamishe pesa kwenda akaunti \"salama\" ni ulaghai wa kawaida wa kujifanya." },
            { objective: "O6", q: "Unapata ujumbe kutoka kwa \"benki yako\" wenye kiungo cha kurekebisha tatizo. Unafanya nini?", options: ["Kubofya kiungo na kuingia", "Usikibofye; piga simu kwa benki kwa namba iliyo kwenye tovuti yake rasmi au kadi yako", "Kujibu kwa namba ya akaunti yako", "Kuwatumia marafiki"], answer: 1, why: "Unawasiliana na kampuni wewe mwenyewe kwa namba unayoiamini, si ile iliyo kwenye ujumbe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia fintech kwa usalama",
        questions: [
          { objective: "O4", q: "Unapaswa kupakua app ya pesa wapi?", options: ["Tovuti yoyote", "Kiungo kwenye ujumbe kutoka kwa mtu usiyemjua", "Tangazo linalojitokeza ghafla (pop-up)", "Duka rasmi la apps, kutoka kwa kampuni halisi"], answer: 3, why: "Maduka rasmi na msanidi sahihi hupunguza apps za uongo." },
          { objective: "O4", q: "Je, msaidizi wa AI anaweza kukuambia kwa uhakika kwamba app ni salama?", options: ["Hapana; kagua vyanzo rasmi wewe mwenyewe", "Ndiyo, kila wakati", "Wikendi tu", "Kwa apps za crypto tu"], answer: 0, why: "AI inaweza kueleza masharti lakini haiwezi kuthibitisha usalama." },
          { objective: "O5", q: "Uthibitisho wa hatua mbili unafanya nini?", options: ["Unaondoa nywila yako", "Unaongeza pesa zako mara mbili", "Unahitaji ukaguzi wa pili, kama msimbo, ili kuingia", "Unashiriki akaunti yako na wengine"], answer: 2, why: "Ukaguzi wa pili unawazuia watu walioiba nywila yako." },
          { objective: "O6", q: "Mtu anasema anatoka benki yako na anaomba msimbo wa kuingia uliotumwa kwenye simu yako. Wewe:", options: ["Unauweka mtandaoni", "Unamsomea", "Unamtumia kwa ujumbe", "Hutoi kamwe; unapiga simu kwa benki kwa namba rasmi"], answer: 3, why: "Kampuni halisi haziombi kamwe msimbo wako wa kuingia." },
          { objective: "O6", q: "Kwa mujibu wa FTC, kipi ni dalili ya ulaghai?", options: ["Risiti kutoka dukani", "Taarifa ya benki ya mwezi", "Ahadi ya mapato makubwa yaliyohakikishwa", "Arifa uliyoiweka mwenyewe"], answer: 2, why: "Ni walaghai tu wanaohakikisha faida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI katika Teknolojia ya Fedha",
    questions: [
      { objective: "O1", q: "Fintech inamaanisha:", options: ["Teknolojia nzuri", "Teknolojia ya fedha: apps na tovuti za pesa", "Teknolojia ya mazoezi ya mwili", "Aina ya chumba cha kuhifadhia pesa benki"], answer: 1, why: "Inahusu teknolojia ya benki, kulipa, kukopa, kupanga bajeti na kuwekeza." },
      { objective: "O1", q: "Kipi ni matumizi ya kawaida ya AI katika apps za pesa?", options: ["Kupanga matumizi yako katika makundi", "Kuchapisha pesa taslimu", "Kufungua milango ya benki", "Kutuma taarifa kwa posta"], answer: 0, why: "AI inapanga matumizi katika makundi kwenye apps za bajeti." },
      { objective: "O1", q: "Mkopo unakataliwa kwa sababu ya taarifa zisizo sahihi. Unaweza:", options: ["Kumlipa mtu usiyemjua ili alirekebishe", "Kutofanya chochote", "Kuuliza kwa nini na kupinga kosa", "Kumpa chatbot nywila yako"], answer: 2, why: "Una haki ya kupinga makosa." },
      { objective: "O1", q: "Ofisi ipi inaeleza haki zako kuhusu huduma za fedha na kupokea malalamiko?", options: ["Consumer Financial Protection Bureau (CFPB)", "Huduma ya Posta", "NASA", "Huduma ya Hifadhi za Taifa"], answer: 0, why: "CFPB inashughulikia malalamiko ya watumiaji wa huduma za fedha." },
      { objective: "O2", q: "Bima ya FDIC inalinda:", options: ["Salio lolote la app", "Crypto zote", "Hisa zote", "Amana katika benki zenye bima ya FDIC"], answer: 3, why: "Inalinda akaunti za amana katika benki zenye bima." },
      { objective: "O2", q: "Kwa mujibu wa fdic.gov mnamo Oktoba 2026, kiwango cha kawaida cha bima ni angalau:", options: ["$2,500", "$250,000 kwa kila mweka amana, kwa kila benki yenye bima", "$25,000", "Bila kikomo"], answer: 1, why: "Ukurasa wa FDIC unasema angalau $250,000 katika kila benki yenye bima." },
      { objective: "O2", q: "Je, salio katika app ya malipo lina bima ya FDIC kila wakati?", options: ["Ndiyo, kila wakati", "Hapana; inategemea kama app inaliweka katika benki yenye bima", "Ijumaa tu", "Ikiwa ni crypto tu"], answer: 1, why: "Apps nyingi za malipo si benki." },
      { objective: "O2", q: "BankFind ni:", options: ["Tovuti ya nafasi za kazi", "Pochi ya crypto", "App ya mikopo", "Zana ya FDIC ya kukagua kama benki ina bima"], answer: 3, why: "BankFind iko kwenye fdic.gov." },
      { objective: "O3", q: "Robo-advisor ni:", options: ["App inayowekeza kwa kanuni za kompyuta kulingana na majibu yako", "Roboti ya benki inayogawa pesa taslimu", "Mkopo wa bure wa serikali", "Sera ya bima"], answer: 0, why: "Inafanya uwekezaji kiotomatiki kwa ada." },
      { objective: "O3", q: "Kipi ni kweli kuhusu crypto?", options: ["FDIC inaiwekea bima", "Ina uhakika wa kupanda bei", "Bei zinaweza kubadilika kwa kasi sana na haina bima kama amana za benki", "Malipo ni rahisi kurudishwa"], answer: 2, why: "Bei ya crypto haitulii na haina bima ya amana." },
      { objective: "O3", q: "Kabla ya uamuzi wowote wa uwekezaji, kozi hii inasema:", options: ["Wekeza kila kitu mara moja", "Fanya kile AI inachosema", "Fuata ushauri wa mitandao ya kijamii", "Jifunze ada na hatari na zungumza na mtaalamu aliyehitimu na huru"], answer: 3, why: "Kozi inaeleza, haishauri." },
      { objective: "O4", q: "Hatua ya kwanza ya ukaguzi wa app ni:", options: ["Kuwashirikisha marafiki", "Kuweka pesa kwanza", "Kupakua kutoka duka rasmi la apps tu, kutoka kwa msanidi sahihi", "Kuzima arifa"], answer: 2, why: "Apps za uongo ni nyingi nje ya maduka rasmi." },
      { objective: "O4", q: "Unapata benki mshirika ya app wapi?", options: ["Tangazo lolote", "Tovuti ya kampuni yenyewe au kurasa zake za msaada", "Ujumbe mfupi", "Kubahatisha kwa AI"], answer: 1, why: "Kurasa rasmi za kampuni zinataja benki." },
      { objective: "O5", q: "Kipi ni hatua imara ya ulinzi?", options: ["Kuwasha uthibitisho wa hatua mbili", "Kutumia nywila moja kila mahali", "Kutoa misimbo kwa wahudumu wa msaada", "Kuzima arifa"], answer: 0, why: "Hatua ya pili inazuia kuingia kwa nywila zilizoibwa." },
      { objective: "O5", q: "Kwa nini uwashe arifa za malipo?", options: ["Ili simu yako iwe nzito", "Ili kupata matangazo zaidi", "Ili kugundua na kuzuia udanganyifu mapema", "Ili kuwaonyesha wengine salio lako"], answer: 2, why: "Arifa za haraka zinakusaidia kuchukua hatua haraka." },
      { objective: "O5", q: "Kipi hupaswi KAMWE kuandika kwa msaidizi wa AI?", options: ["Nywila yako au namba kamili ya akaunti", "\"Eleza bima ya FDIC\"", "\"Robo-advisor ni nini?\"", "\"Orodhesha dalili za hatari za ulaghai\""], answer: 0, why: "Taarifa binafsi za fedha lazima zisiingie kwenye zana za AI." },
      { objective: "O6", q: "Mpigaji simu anasema pesa zako ziko hatarini na lazima uzihamishe kwenda akaunti \"salama\" ya crypto. Huu ni:", options: ["Sasisho la ulinzi", "Utaratibu wa kawaida wa benki", "Fao la VA", "Ulaghai wa kujifanya"], answer: 3, why: "FTC inaonya kwamba huu ni ulaghai." },
      { objective: "O6", q: "Kazi inakutaka ulipe ada ya crypto mapema. Hii ni:", options: ["Hatua ya kawaida ya kuajiri", "Ulaghai, kwa mujibu wa FTC", "Gharama ya mafunzo inayolipwa na VA", "Kodi"], answer: 1, why: "FTC inasema ada za crypto za mapema kwa ajili ya kazi ni ulaghai." },
      { objective: "O6", q: "Unapaswa kupiga simu tena kwa kampuni vipi kuhusu ujumbe wenye shaka?", options: ["Kutumia namba iliyo kwenye ujumbe", "Kutumia namba iliyo kwenye tovuti yake rasmi au kadi yako", "Kujibu ujumbe huo", "Kumwomba mpigaji akupe namba"], answer: 1, why: "Walaghai hutoa namba za uongo." },
      { objective: "O6", q: "Unaweza kuripoti udanganyifu kwa FTC wapi?", options: ["Chatbot ya AI", "Maoni kwenye mitandao ya kijamii", "Tovuti ya mlaghai", "ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov ni tovuti ya FTC ya kuripoti." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 6, 7, 9, 11, 13, 16, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Inafanya nini na inatumiaje AI", objective: "O1", notYet: "Kadi haisemi app inafanya nini wala jinsi inavyotumia AI.", meets: "Kadi inataja aina ya fintech na njia moja ambayo app inatumia AI.", exceeds: "Pia inasema cha kufanya AI ya app ikifanya uamuzi usio sahihi." },
      { name: "Bima imekaguliwa", objective: "O2", notYet: "Inasema pesa zina bima bila kukagua, au inabahatisha.", meets: "Inataja benki mshirika na kama ina bima ya FDIC, iliyokaguliwa kwenye BankFind.", exceeds: "Inaonyesha sehemu zipi za salio zinalindwa au hazilindwi na wapi hilo lilithibitishwa." },
      { name: "Mipangilio ya ulinzi", objective: "O5", notYet: "Hakuna mipangilio ya ulinzi iliyowashwa.", meets: "Uthibitisho wa hatua mbili na arifa za malipo vimewashwa, na vifaa visivyojulikana vimeondolewa.", exceeds: "Pia inaorodhesha mpangilio mmoja zaidi uliowashwa, kama kufunga kadi au kikomo cha matumizi." },
      { name: "Dalili za ulaghai na kuripoti", objective: "O6", notYet: "Chini ya dalili tatu za hatari, au hakuna mahali pa kuripoti.", meets: "Dalili tatu za hatari za ulaghai na wapi pa kuripoti tatizo.", exceeds: "Inaonyesha jinsi ya kupiga simu tena kwa kampuni kwa namba inayoaminika." },
      { name: "App imekaguliwa", objective: "O4", notYet: "App haikukaguliwa kabla ya kutumiwa.", meets: "Ukaguzi wa hatua tano ulifanywa, na ndiyo au hapana kwa kila hatua.", exceeds: "Mwanafunzi anaeleza angefanya nini kama hatua yoyote ingekuwa hapana." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kuwasha uthibitisho wa hatua mbili na arifa katika apps zao za pesa ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kutambua na kuepuka ulaghai wa fintech",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn kuhusu pesa au usalama ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye app ya pesa ya mwanafunzi mwenyewe",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Tovuti za bure za FDIC BankFind, CFPB na FTC",
      "Karatasi au hati kwa ajili ya Kadi ya Usalama wa Fintech ya ukurasa mmoja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Wanafunzi wanabadilisha mipangilio kwenye simu zao wenyewe; usiombe kamwe kuona salio, nywila au misimbo.",
      "Usipendekeze apps, uwekezaji wala crypto; peleka maswali ya uwekezaji kwa mtaalamu aliyehitimu na huru.",
      "Onyesha darasani ujumbe wa ulaghai wa kubuni, kisha fanyeni mazoezi ya kupiga simu tena kwa namba rasmi.",
      "Pima Kadi ya Usalama wa Fintech kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Wanafamilia wanaweza kujiunga, kwa kuwa walaghai mara nyingi huwalenga pia wenzi na wazazi."
    ]
  }
};
