"use strict";

// Koach Learn course (Swahili translation of shared/intro-cybersecurity.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CISA_PASSWORDS = { name: "CISA (shirika la Marekani la usalama wa mtandao) Secure Our World: tumia nywila imara", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" };
const CISA_SOW = { name: "CISA: Secure Our World (linda dunia yetu)", url: "https://www.cisa.gov/secure-our-world" };
const FTC_PHISHING = { name: "FTC (shirika la Marekani la kulinda wateja): jinsi ya kutambua na kuepuka ulaghai wa phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" };

module.exports = {
  id: "intro-cybersecurity-sw",
  lang: "sw",
  translationOf: "intro-cybersecurity",
  category: "Youth",
  name: "Utangulizi wa Usalama wa Mtandao",
  skills: "Kueleza CIA triad (malengo matatu ya usalama), Kutambua mashambulizi ya kawaida, Kutambua na kuripoti phishing, Kulinda akaunti kwa nywila imara na MFA, Kusasisha vifaa, Kukabili tukio la usalama",
  outcome: "kufanya ukaguzi wa usalama wa akaunti na vifaa vyako mwenyewe: kuweka nywila imara ya kipekee kwa kidhibiti cha nywila, kuwasha uthibitishaji wa hatua nyingi (MFA), kusasisha programu zako, kutambua ujumbe wa phishing na kuuripoti, na kufuata mpango rahisi akaunti ikidukuliwa.",
  about: [
    "Usalama wa mtandao ni kulinda kompyuta, simu, akaunti na taarifa dhidi ya mashambulizi. Ni muhimu kwa akaunti ya shule ya mwanafunzi, akaunti ya benki ya familia na orodha ya wateja wa biashara ndogo, na pia ni fani ya kazi inayokua.",
    "Katika Sura ya 1 utajifunza malengo ya msingi ya usalama, mashambulizi ya kawaida zaidi na jinsi ya kutambua phishing. Katika Sura ya 2 utalinda akaunti na vifaa vyako mwenyewe na utajifunza la kufanya jambo likienda vibaya.",
    "Hatua hizi zinafuata hatua nne za msingi ambazo CISA, shirika la Marekani la usalama wa mtandao na miundombinu, linamfundisha kila mtu. Kila somo linachukua kama dakika tano. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Fanya ukaguzi wa usalama wa akaunti moja muhimu (barua pepe ni bora): ipe nywila imara ya kipekee iliyohifadhiwa katika kidhibiti cha nywila, washa MFA, hakikisha simu au kompyuta yako imesasishwa, na andika mpango wa mistari mitano wa utakachofanya akaunti hiyo ikidukuliwa. Kisha tafuta ujumbe mmoja wa kutiliwa shaka katika barua pepe au SMS zako na uorodheshe dalili za phishing unazoziona.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima wanaotumia barua pepe, mitandao ya kijamii, akaunti za shule au kazi na simu kila siku: wanafunzi, programu za vijana, watafuta kazi, wafanyakazi wapya wa ofisi, wajitolea na familia.",
    startingPoint: "Wanaweza kuingia kwenye akaunti, kutumia apps na kutuma ujumbe. Wengi wanatumia nywila ileile mara nyingi, hawajawasha MFA, wanaruka masasisho, na hawana uhakika jinsi ya kutofautisha ujumbe wa phishing na ujumbe halisi au la kufanya akaunti ikidukuliwa.",
    gap: "Mashambulizi mengi dhidi ya watu wa kawaida yanamlenga yeyote aliye rahisi zaidi, kupitia nywila zinazotumiwa tena, phishing na ulaghai wa kumdanganya mtu. Tabia chache nzuri zinazuia mashambulizi mengi haya, zinalinda akaunti za shule, kazi na pesa, na zinawafanya watu kuwa wafanyakazi na wanafamilia salama zaidi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno ya usalama kama MFA na phishing yanaelezwa",
      "Vifaa: simu au kompyuta ya mwanafunzi mwenyewe na akaunti moja muhimu, kama barua pepe",
      "Muda: kama dakika 5 kwa somo, kama dakika 60 kwa jumla",
      "Gharama: zana za bure tu, kama kidhibiti cha nywila kilichojengwa ndani ya kivinjari au simu",
      "Faragha: wanafunzi hawampi mtu yeyote nywila wala msimbo wa MFA, hata mwalimu, na hawaziandiki kamwe kwenye zana ya AI"
    ],
    prerequisites: "Hakuna. Wanafunzi wanahitaji akaunti moja wanayoweza kuingia, kama barua pepe."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo mafupi ya shambulizi", action: "kueleza malengo matatu ya usalama (usiri, usahihi na upatikanaji) na kutambua shambulizi linavunja lipi", standard: "ukipata angalau mifano 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa mifano ya malware, ransomware, kutekwa kwa akaunti na ulaghai wa kumdanganya mtu", action: "kutaja kila shambulizi na kueleza jinsi linavyoingia kwa kawaida", standard: "kila shambulizi likitajwa sawasawa pamoja na njia moja ya kawaida linavyoingia" },
    { id: "O3", condition: "Ukipewa barua pepe au SMS halisi au ya mfano", action: "kutambua dalili za phishing ndani yake na kuiripoti kwa njia sahihi", standard: "ukiorodhesha angalau dalili mbili na kuchagua mahali sahihi pa kuripoti" },
    { id: "O4", condition: "Ukitumia kidhibiti cha nywila cha bure", action: "kutengeneza nywila imara ya kipekee kwa akaunti moja muhimu na kuihifadhi katika kidhibiti cha nywila", standard: "kwa nywila yenye angalau herufi 16 isiyotumika kwenye akaunti nyingine yoyote" },
    { id: "O5", condition: "Kwenye akaunti moja muhimu na kifaa chako mwenyewe", action: "kuwasha uthibitishaji wa hatua nyingi (MFA) na kuhakikisha kifaa na apps zimesasishwa", standard: "MFA ikifanya kazi kwenye akaunti na masasisho ya moja kwa moja yakiwa yamewashwa" },
    { id: "O6", condition: "Ukipewa dalili kwamba akaunti imedukuliwa au kifaa kimeambukizwa", action: "kuandika na kufuata mpango wa hatua kwa hatua wa kurejesha usalama", standard: "kila hatua muhimu ikiwa katika mpangilio salama: badilisha nywila, washa MFA, toka kwenye vipindi vingine, kagua taarifa za kurejesha akaunti, waonye unaowasiliana nao na uripoti" }
  ],
  chapters: [
    {
      name: "Sura 1: Vitisho na jinsi mashambulizi yanavyofanya kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Usalama wa mtandao unalinda nini",
          minutes: 4,
          goal: "Eleza malengo matatu ya usalama ukitumia CIA triad.",
          text: [
            "Watu wa usalama mara nyingi hutumia maneno matatu, yanayoitwa CIA triad. Usiri (confidentiality): ni watu sahihi tu wanaoweza kuona taarifa, kama alama zako za shule au rekodi zako za matibabu. Usahihi (integrity): taarifa ni sahihi na haijabadilishwa na mtu asiyepaswa kuibadilisha, kama salio la benki. Upatikanaji (availability): taarifa na mifumo inafanya kazi unapoihitaji, kama tovuti inayoendelea kufanya kazi.",
            "Kila shambulizi linaumiza angalau lengo moja kati ya hayo matatu. Mtu anayesoma ujumbe wako anavunja usiri. Mtu anayebadilisha kiasi cha malipo anavunja usahihi. Ransomware inayofunga kompyuta za hospitali inavunja upatikanaji.",
            "Watu wanaoshambulia wanaitwa wahusika wa vitisho (threat actors). Ni kuanzia matapeli wanaotafuta pesa za haraka hadi magenge ya uhalifu yaliyopangwa. Mashambulizi mengi dhidi ya watu wa kawaida si ya binafsi; washambuliaji wanamlenga yeyote aliye rahisi zaidi."
          ],
          words: [["Usalama wa mtandao", "kulinda kompyuta, simu, akaunti na taarifa dhidi ya mashambulizi."], ["CIA triad", "usiri, usahihi na upatikanaji: malengo matatu ya usalama."], ["Mhusika wa vitisho (threat actor)", "mtu au kikundi kinachoshambulia kompyuta au akaunti."]],
          slides: [
            { title: "CIA triad", bullets: ["Usiri: ni watu sahihi tu wanaoona", "Usahihi: taarifa inabaki sahihi", "Upatikanaji: inafanya kazi unapoihitaji"] },
            { title: "Mashambulizi yanavunja moja kati ya matatu", bullets: ["Kusoma ujumbe wako: usiri", "Kubadilisha malipo: usahihi", "Kufunga kompyuta: upatikanaji"] },
            { title: "Nani hushambulia", bullets: ["Matapeli na magenge ya uhalifu", "Wanamlenga yeyote aliye rahisi zaidi", "Tabia nzuri zinakufanya kuwa vigumu kulengwa"] }
          ],
          tryIt: "Fikiria app moja unayotumia, kama tovuti ya shule, app ya benki au app ya ratiba ya kazi. Andika mfano mmoja wa maana ya usiri, usahihi na upatikanaji kwa app hiyo.",
          youCanNow: "kueleza CIA triad na kusema shambulizi linavunja lengo lipi.",
          quickCheck: [
            { objective: "O1", q: "Katika CIA triad, usahihi (integrity) una maana gani?", options: ["Mfumo una kasi kila wakati", "Ni watu sahihi tu wanaoweza kuona taarifa", "Taarifa ni bure kwa kila mtu", "Taarifa ni sahihi na haijabadilishwa na mtu asiyepaswa kuibadilisha"], answer: 3, why: "Usahihi ni kwamba taarifa ni sahihi na haijabadilishwa bila ruhusa." },
            { objective: "O1", q: "Mtu anasoma ujumbe binafsi wa mwanafunzi mwenzake bila ruhusa. Ungesema lengo lipi limevunjwa?", options: ["Upatikanaji", "Usiri", "Usahihi", "Hakuna kati ya matatu"], answer: 1, why: "Usiri ni kwamba ni watu sahihi tu wanaoweza kuona taarifa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mashambulizi ya kawaida: malware, ransomware na kutekwa kwa akaunti",
          minutes: 5,
          goal: "Taja mashambulizi ya kawaida zaidi na jinsi kila moja linavyoingia kwa kawaida.",
          text: [
            "Malware ni programu hasidi. Mara nyingi inakuja kama kiambatisho cha barua pepe, app bandia, mchezo wa wizi (pirated) au dirisha bandia la \"sasisho\" (update). Ransomware ni malware inayofunga faili zako na kudai malipo ili kuzifungua.",
            "Kutekwa kwa akaunti kunatokea mtu anapoingia kwenye akaunti yako. Njia za kawaida zaidi ni nywila iliyoibiwa au kubahatishwa, nywila iliyotumika pia kwenye tovuti nyingine iliyovujishwa data, au kukudanganya utoe msimbo wa mara moja.",
            "Ulaghai wa kumdanganya mtu (social engineering) ni kumdanganya mtu badala ya kuvunja teknolojia. Mpigaji anayejifanya msaada wa IT, SMS bandia ya mzigo, au ujumbe kutoka kwa \"rafiki\" anayeomba msimbo, yote ni social engineering. Mara nyingi watu ndio njia rahisi zaidi ya kuingia, ndiyo maana tabia zako ni muhimu."
          ],
          words: [["Malware", "programu hasidi inayoweza kupeleleza, kuiba au kuharibu."], ["Ransomware", "malware inayofunga faili na kudai malipo."], ["Uvujaji wa data (data breach)", "taarifa zilizohifadhiwa na kampuni, kama nywila, zinapoibiwa."], ["Social engineering", "kumdanganya mtu ili atoe ruhusa ya kuingia au taarifa."]],
          slides: [
            { title: "Malware na ransomware", bullets: ["Programu hasidi", "Inakuja kwa viambatisho, apps bandia, michezo ya wizi", "Ransomware inafunga faili na kudai malipo"] },
            { title: "Kutekwa kwa akaunti", bullets: ["Nywila zilizoibiwa au kubahatishwa", "Nywila zilizotumika tena kutoka tovuti iliyovujishwa", "Kudanganywa kutoa msimbo wa mara moja"] },
            { title: "Social engineering", bullets: ["Kudanganya watu, si mashine", "Simu bandia za IT, SMS bandia za mzigo", "Akaunti za marafiki zilizodukuliwa zinaomba misimbo"] }
          ],
          tryIt: "Kwa kila shambulizi (malware, ransomware, kutekwa kwa akaunti, social engineering), andika njia moja ya maisha halisi linaloweza kukufikia wewe au familia yako, na tabia moja itakayolizuia.",
          youCanNow: "kutaja mashambulizi ya kawaida na jinsi yanavyoingia kwa kawaida.",
          quickCheck: [
            { objective: "O2", q: "Ipi kati ya hizi ni njia ya kawaida malware inavyoingia kwenye kifaa?", options: ["Mchezo wa wizi au dirisha bandia la \"sasisho\"", "Kuwasha masasisho ya moja kwa moja", "Kutumia kidhibiti cha nywila", "Kuzima na kuwasha simu yako"], answer: 0, why: "Malware mara nyingi inakuja kwa viambatisho, apps bandia, michezo ya wizi na madirisha bandia ya sasisho." },
            { objective: "O2", q: "\"Rafiki\" anakutumia ujumbe akiomba msimbo ambao simu yako imepokea sasa hivi. Ungefanya nini?", options: ["Kutuma msimbo kwa sababu ni rafiki", "Kutuma nusu ya msimbo", "Kutotoa msimbo; huenda huu ni social engineering", "Kuweka msimbo kwenye mitandao ya kijamii ili kukagua"], answer: 2, why: "Kukudanganya utoe msimbo wa mara moja ni njia ya kawaida ya kuteka akaunti." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutambua na kuripoti phishing",
          minutes: 5,
          goal: "Tambua ujumbe wa phishing na uuripoti kwa njia sahihi.",
          text: [
            "Phishing ni barua pepe, SMS au ujumbe bandia unaojaribu kukufanya ubofye kiungo, ufungue faili au utoe taarifa. FTC inaorodhesha hila za kawaida: kudai kuna shughuli za kutiliwa shaka kwenye akaunti yako, tatizo la malipo yako, kukuomba uthibitishe taarifa binafsi, ankara usiyoitambua, kiungo cha kulipa, marejesho ya pesa kutoka serikali, au kuponi ya vitu vya bure.",
            "Kagua anwani halisi ya mtumaji, si jina tu. Weka kishale juu ya kiungo kwenye kompyuta (au bonyeza na ushikilie kwenye simu) ili uone kinakwenda wapi hasa. Angalia haraka ya kulazimisha: \"chukua hatua sasa la sivyo akaunti yako itafungwa.\"",
            "Kama humjui mtumaji, uripoti na uufute. Kama una akaunti kwa kampuni hiyo, wasiliana nayo kwa tovuti au namba ya simu unayoijua tayari kuwa halisi, si ile iliyo kwenye ujumbe. FTC inasema: tuma barua pepe za phishing kwa reportphishing@apwg.org, tuma SMS za phishing kwa SPAM (7726), na uripoti kwenye ReportFraud.ftc.gov. Shuleni au kazini, tumia kitufe cha \"Report phishing\" au mwambie IT."
          ],
          steps: ["Kagua anwani halisi ya mtumaji.", "Weka kishale juu ya kiungo au bonyeza na ushikilie ili uone kinakwenda wapi.", "Angalia haraka ya kulazimisha, vitisho au zawadi.", "Usibofye, usijibu wala usifungue viambatisho.", "Wasiliana na kampuni kwa namba au tovuti unayoijua tayari.", "Ripoti: barua pepe kwa reportphishing@apwg.org, SMS kwa 7726, na ReportFraud.ftc.gov; shuleni au kazini mwambie IT."],
          words: [["Phishing", "ujumbe bandia unaojaribu kukudanganya ubofye, ufungue faili au utoe taarifa."], ["Smishing", "phishing kwa SMS."], ["Spoofing", "kughushi jina, namba au anwani ya mtumaji ili ujumbe uonekane halisi."]],
          sources: [FTC_PHISHING, { name: "FTC: ReportFraud (ripoti ulaghai)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Hila za kawaida za phishing (FTC)", bullets: ["\"Shughuli za kutiliwa shaka\" au \"tatizo la malipo\"", "\"Thibitisha taarifa zako\"", "Ankara usizozijua, marejesho ya pesa, kuponi za bure"] },
            { title: "Kagua kabla ya kubofya", bullets: ["Anwani halisi ya mtumaji, si jina tu", "Weka kishale au bonyeza na ushikilie viungo", "Haraka na vitisho ni dalili za hatari"] },
            { title: "Wasiliana na kampuni wewe mwenyewe", bullets: ["Tumia tovuti au namba unayoijua tayari", "Kamwe si ile iliyo kwenye ujumbe"] },
            { title: "Uripoti", bullets: ["Barua pepe: reportphishing@apwg.org", "SMS: tuma kwa 7726 (SPAM)", "ReportFraud.ftc.gov; kazini au shuleni, mwambie IT"] }
          ],
          tryIt: "Fungua folda ya spam au junk (au SMS zako) na utafute ujumbe mmoja wa kutiliwa shaka. Bila kubofya chochote, orodhesha kila dalili ya phishing unayoiona, kisha uuripoti au uufute.",
          youCanNow: "kutambua ujumbe wa phishing, kuepuka mitego yake na kuuripoti kwa njia sahihi.",
          quickCheck: [
            { objective: "O3", q: "Kwenye simu, unawezaje kuona kiungo kinakwenda wapi hasa kabla ya kukifungua?", options: ["Kukigusa haraka mara mbili", "Kubonyeza na kushikilia kiungo", "Kumjibu mtumaji", "Kuzima na kuwasha simu"], answer: 1, why: "Kubonyeza na kushikilia kunaonyesha anwani halisi bila kukifungua." },
            { objective: "O3", q: "SMS inasema mzigo wako umezuiwa na lazima ulipe ada ndogo kwa kiungo. Huna mzigo unaokuja. Ungefanya nini?", options: ["Kulipa ada ili kuwa salama", "Kujibu ukiuliza ni mzigo gani", "Kubofya kiungo uone kinasema nini", "Kuituma kwa SPAM (7726), kuiripoti na kuifuta"], answer: 3, why: "FTC inasema tuma SMS za phishing kwa SPAM (7726) na uziripoti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Vitisho na jinsi mashambulizi yanavyofanya kazi",
        questions: [
          { objective: "O1", q: "Ransomware inafunga kompyuta za kliniki ili wafanyakazi wasiweze kuzitumia. Lengo lipi limevunjwa?", options: ["Usiri", "Hakuna", "Usahihi", "Upatikanaji"], answer: 3, why: "Upatikanaji ni kwamba mifumo inafanya kazi unapoihitaji." },
          { objective: "O1", q: "Mtu anabadilisha kiasi kwenye ombi la malipo. Lengo lipi limevunjwa?", options: ["Kasi", "Upatikanaji", "Usiri", "Usahihi"], answer: 3, why: "Usahihi ni kwamba taarifa inabaki sahihi." },
          { objective: "O2", q: "Mpigaji anasema anatoka IT na anahitaji msimbo uliotumwa kwako kwa SMS sasa hivi. Huu ni:", options: ["Kazi ya kawaida ya IT", "Sasisho la programu", "Social engineering", "Nakala ya akiba (backup)"], answer: 2, why: "Kumdanganya mtu atoe msimbo ni social engineering." },
          { objective: "O2", q: "Ulitumia nywila ileile kwenye tovuti ya michezo iliyovujishwa data. Hatari ni ipi?", options: ["Hakuna", "Simu yako inaharibika", "Skrini yako inakuwa giza", "Washambuliaji wanaweza kujaribu nywila hiyo kwenye akaunti zako nyingine"], answer: 3, why: "Nywila zinazotumiwa tena kutoka uvujaji wa data husababisha kutekwa kwa akaunti." },
          { objective: "O3", q: "Barua pepe inasema akaunti yako ya benki imefungwa na inatoa kiungo. Hatua salama zaidi ni:", options: ["Kubofya kiungo haraka", "Kujibu kwa nywila yako", "Kwenda kwenye tovuti halisi ya benki au kupiga namba unayoijua", "Kuituma kwa marafiki"], answer: 2, why: "Wasiliana na kampuni kwa tovuti au namba unayoijua tayari kuwa halisi." }
        ]
      }
    },
    {
      name: "Sura 2: Kulinda akaunti na vifaa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nywila imara na kidhibiti cha nywila",
          minutes: 5,
          goal: "Tengeneza nywila imara ya kipekee na uihifadhi katika kidhibiti cha nywila.",
          text: [
            "CISA inasema nywila imara ni ndefu (angalau herufi 16), ya nasibu, na ya kipekee (tofauti kwa kila akaunti). Kifungu cha maneno (passphrase) cha maneno manne hadi saba yasiyohusiana, kama mfano wa CISA \"HorsePurpleHatRun\", ni kirefu na rahisi kukumbuka.",
            "Hakuna anayeweza kukumbuka nywila imara tofauti kwa kila akaunti, kwa hiyo tumia kidhibiti cha nywila (password manager). Kinakutengenezea na kukuhifadhia nywila; wewe unakumbuka nywila kuu moja tu iliyo imara. CISA inasema baadhi ni bure, ikiwemo vile vilivyojengwa ndani ya vivinjari vya wavuti na simu.",
            "Usimpe mtu nywila kamwe, usiziandike kamwe kwenye zana ya AI, na ubadilishe nywila mara moja kampuni ikikuambia ilikuwa katika uvujaji wa data."
          ],
          steps: ["Fungua kidhibiti cha nywila: kile kilichojengwa ndani ya kivinjari au simu yako, au app inayoaminika.", "Chagua akaunti yako muhimu zaidi, kwa kawaida barua pepe.", "Tumia kidhibiti kutengeneza nywila ndefu ya nasibu, au tunga passphrase ya maneno 4 hadi 7.", "Ihifadhi katika kidhibiti.", "Badilisha nywila kwenye akaunti na ujaribu kuingia."],
          words: [["Kidhibiti cha nywila (password manager)", "app inayotengeneza na kuhifadhi nywila zako kwa usalama."], ["Passphrase", "nywila iliyotengenezwa kwa maneno kadhaa yasiyohusiana."], ["Nywila ya kipekee", "nywila inayotumika kwa akaunti moja tu."]],
          sources: [CISA_PASSWORDS],
          slides: [
            { title: "Nywila imara (CISA)", bullets: ["Ndefu: angalau herufi 16", "Ya nasibu", "Ya kipekee: tofauti kwa kila akaunti"] },
            { title: "Passphrase", bullets: ["Maneno 4 hadi 7 yasiyohusiana", "Mfano: HorsePurpleHatRun"] },
            { title: "Tumia kidhibiti cha nywila", bullets: ["Kinatengeneza na kuhifadhi nywila", "Unakumbuka nywila kuu moja", "Baadhi ni bure, ndani ya vivinjari na simu"] }
          ],
          tryIt: "Fungua kidhibiti cha nywila kwenye simu au kivinjari chako. Kitumie kutengeneza na kuhifadhi nywila mpya imara kwa akaunti moja unayoijali.",
          youCanNow: "kutengeneza nywila imara ya kipekee na kuiweka katika kidhibiti cha nywila.",
          quickCheck: [
            { objective: "O4", q: "Nywila \"ya kipekee\" ina maana gani?", options: ["Ina jina lako ndani yake", "Ni fupi na rahisi kuandika", "Ni tofauti kwa kila akaunti", "Ni sawa na PIN ya simu yako"], answer: 2, why: "Nywila ya kipekee inatumika kwa akaunti moja tu, kwa hiyo uvujaji mmoja haufungui akaunti nyingine." },
            { objective: "O4", q: "Kampuni inakutumia barua pepe kusema nywila yako ilikuwa katika uvujaji wa data. Ungefanya nini?", options: ["Kubadilisha nywila hiyo mara moja", "Kusubiri kuona kama kitu kitatokea", "Kutumia nywila ileile kwenye akaunti mpya", "Kumpa rafiki nywila ili aikague"], answer: 0, why: "Badilisha nywila mara moja kampuni inaposema ilikuwa katika uvujaji." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Uthibitishaji wa hatua nyingi na masasisho",
          minutes: 5,
          goal: "Washa uthibitishaji wa hatua nyingi na usasishe kifaa.",
          text: [
            "Uthibitishaji wa hatua nyingi (MFA) unaomba uthibitisho wa pili baada ya nywila yako, kama msimbo kutoka app ya uthibitishaji (authenticator app), ombi kwenye simu yako, ufunguo wa usalama (security key) au passkey. Hata mtu akiiba nywila yako, hawezi kuingia bila hatua hiyo ya pili. Iwashe kwanza kwa barua pepe, benki, shule na mitandao ya kijamii. CISA inasema MFA yoyote ni bora kuliko kutokuwa nayo, na aina imara zaidi ni MFA inayozuia phishing (FIDO, inayotumiwa na passkeys na funguo za usalama), ambayo ni vigumu zaidi kudanganya kuliko msimbo wa SMS.",
            "Usimpe mtu msimbo wa MFA kamwe. Ukipokea msimbo au ombi la kuingia ambalo hukuliomba, huenda mtu ana nywila yako: likatae na ubadilishe nywila yako.",
            "Masasisho yanaziba mianya ya usalama ambayo washambuliaji tayari wanaijua. Washa masasisho ya moja kwa moja kwa simu, kompyuta, kivinjari na apps zako, na uwashe upya kifaa unapoombwa. CISA inaorodhesha kusasisha programu kama moja ya hatua zake nne za msingi, pamoja na kuepuka phishing, nywila imara na MFA."
          ],
          steps: ["Fungua mipangilio ya usalama ya akaunti yako ya barua pepe.", "Tafuta two-step verification, two-factor au multifactor authentication.", "Fuata hatua; passkey, ufunguo wa usalama au authenticator app ni vigumu zaidi kudanganya kuliko msimbo wa SMS, lakini MFA yoyote ni bora kuliko kutokuwa nayo.", "Hifadhi misimbo ya akiba (backup codes) mahali salama, nje ya mtandao.", "Fungua mipangilio ya simu au kompyuta yako na uwashe masasisho ya moja kwa moja."],
          words: [["Uthibitishaji wa hatua nyingi (MFA)", "uthibitisho wa pili, baada ya nywila yako, kwamba ni wewe kweli."], ["Authenticator app", "app inayoonyesha misimbo ya kuingia inayobadilika kila baada ya sekunde chache."], ["Passkey", "njia ya kuingia inayotumia kifaa chako pamoja na uso, alama ya kidole au PIN badala ya nywila."], ["Sasisho / patch", "marekebisho kutoka kwa mtengenezaji yanayoziba mianya ya usalama."]],
          sources: [CISA_SOW, { name: "CISA: zaidi ya nywila (MFA)", url: "https://www.cisa.gov/MFA" }],
          slides: [
            { title: "MFA: kufuli ya pili", bullets: ["Nywila + msimbo, ombi, ufunguo au passkey", "Nywila iliyoibiwa haitoshi", "Iwashe kwa barua pepe, benki, shule, mitandao ya kijamii"] },
            { title: "Msimbo au ombi usilolitarajia?", bullets: ["Usimpe mtu kamwe", "Likatae", "Badilisha nywila yako"] },
            { title: "Sasisha kila kitu", bullets: ["Simu, kompyuta, kivinjari, apps", "Washa masasisho ya moja kwa moja", "Washa upya unapoombwa"] }
          ],
          tryIt: "Washa MFA kwa akaunti yako ya barua pepe na uhifadhi misimbo yako ya akiba. Kisha kagua kama simu au kompyuta yako ina masasisho na usakinishe yoyote yanayosubiri.",
          youCanNow: "kuwasha MFA na kuweka vifaa vyako vikiwa vimesasishwa.",
          quickCheck: [
            { objective: "O5", q: "Ipi kati ya hizi ni mfano wa hatua ya pili ya MFA?", options: ["Jina lako la mtumiaji", "Rangi unayoipenda", "Anwani yako ya barua pepe", "Msimbo kutoka authenticator app"], answer: 3, why: "MFA inaomba uthibitisho wa pili baada ya nywila yako, kama msimbo wa authenticator." },
            { objective: "O5", q: "Simu yako inaomba kusakinisha sasisho na kuwasha upya. Ungefanya nini?", options: ["Kulipuuza kwa miezi", "Kuzima masasisho ili iache kuomba", "Kulisakinisha na kuwasha upya unapoombwa", "Kusasisha tu rafiki akikuambia"], answer: 2, why: "Masasisho yanaziba mianya ya usalama ambayo washambuliaji tayari wanaijua." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Jambo likienda vibaya",
          minutes: 5,
          goal: "Fuata mpango rahisi akaunti ikidukuliwa au kifaa kikiambukizwa.",
          text: [
            "Dalili za tatizo: huwezi kuingia, marafiki wanapokea ujumbe wa ajabu kutoka kwako, unaona kuingia au manunuzi ambayo hukufanya, au kifaa chako ghafla kinaonyesha madirisha yanayojitokeza (pop-ups) au kinakwenda polepole sana.",
            "Akaunti ikidukuliwa: ukitumia kifaa salama, badilisha nywila, washa MFA, toka kwenye vipindi vingine vyote (akaunti nyingi zina hili katika mipangilio ya usalama), na kagua barua pepe na namba za simu za kurejesha akaunti. Waambie unaowasiliana nao wasibofye ujumbe kutoka kwako. Kama pesa zinahusika, piga simu benki yako kwa namba iliyo kwenye kadi yako.",
            "Kama ulibofya kiungo kibaya au unafikiri kifaa kimeambukizwa, FTC inasema sasisha programu yako ya usalama, endesha uchunguzi (scan) na uondoe chochote kinachoonyeshwa. Shuleni au kazini, mwambie IT mara moja; kuripoti haraka si kujiingiza matatani, kunapunguza madhara. Ripoti ulaghai kwenye ReportFraud.ftc.gov au ic3.gov ya FBI."
          ],
          steps: ["Tumia kifaa salama.", "Badilisha nywila na uwashe MFA.", "Toka kwenye vipindi vingine vyote.", "Kagua barua pepe na simu ya kurejesha akaunti.", "Waonye unaowasiliana nao; piga simu benki yako kama pesa zinahusika.", "Sasisha programu ya usalama na uendeshe scan.", "Mwambie IT shuleni au kazini; ripoti ulaghai kwenye ReportFraud.ftc.gov au ic3.gov."],
          words: [["Tukio (incident)", "tatizo la usalama, kama akaunti iliyodukuliwa au kifaa kilichoambukizwa."], ["Kipindi (session)", "mahali ulipoingia kwenye akaunti, kama simu au kivinjari."], ["Taarifa za kurejesha akaunti", "barua pepe na simu ambazo huduma inatumia kukusaidia kurudi kwenye akaunti yako."]],
          sources: [FTC_PHISHING, { name: "FBI: kituo cha malalamiko ya uhalifu wa mtandaoni (IC3)", url: "https://www.ic3.gov" }, { name: "FTC: ReportFraud (ripoti ulaghai)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Dalili za tatizo", bullets: ["Huwezi kuingia", "Marafiki wanapokea ujumbe wa ajabu kutoka kwako", "Kuingia au manunuzi ambayo hukufanya"] },
            { title: "Mpango wa akaunti iliyodukuliwa", bullets: ["Badilisha nywila, washa MFA", "Toka kwenye vipindi vyote", "Kagua barua pepe na simu ya kurejesha akaunti"] },
            { title: "Kifaa kimeambukizwa au pesa zinahusika", bullets: ["Sasisha programu ya usalama na uendeshe scan", "Piga simu benki yako kwa namba iliyo kwenye kadi yako"] },
            { title: "Ripoti haraka", bullets: ["Mwambie IT shuleni au kazini", "ReportFraud.ftc.gov au ic3.gov"] }
          ],
          tryIt: "Kazi ya mwisho: fanya ukaguzi wa usalama wa barua pepe yako (nywila imara katika kidhibiti, MFA imewashwa, kifaa kimesasishwa), andika mpango wako wa mistari mitano wa akaunti iliyodukuliwa, na uorodheshe dalili za phishing katika ujumbe mmoja wa kutiliwa shaka.",
          youCanNow: "kulinda akaunti kikamilifu na kuchukua hatua kwa utulivu ikiwa itadukuliwa.",
          quickCheck: [
            { objective: "O6", q: "Ipi kati ya hizi ni dalili kwamba akaunti huenda imedukuliwa?", options: ["Marafiki wanapokea ujumbe wa ajabu kutoka kwako ambao hukutuma", "Uliingia jana", "Nywila yako ni ndefu", "Uliwasha MFA"], answer: 0, why: "Ujumbe wa ajabu unaotumwa kutoka akaunti yako ni dalili ya kawaida ya kutekwa." },
            { objective: "O6", q: "Kazini unafikiri ulibofya kiungo kibaya. Ungefanya nini?", options: ["Kunyamaza ili usiingie matatani", "Kumwambia IT mara moja", "Kubofya kiungo tena ili kukagua", "Kuzima MFA"], answer: 1, why: "Kuripoti haraka kunapunguza madhara na si kujiingiza matatani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kulinda akaunti na vifaa",
        questions: [
          { objective: "O4", q: "Kulingana na CISA, nywila imara ni:", options: ["Fupi na rahisi", "Ileile kwa kila akaunti", "Jina la mnyama wako wa nyumbani", "Ndefu, ya nasibu na ya kipekee"], answer: 3, why: "CISA inasema ndefu (angalau herufi 16), ya nasibu na ya kipekee." },
          { objective: "O4", q: "Kidhibiti cha nywila kinafanya nini?", options: ["Kinawapa marafiki zako nywila zako", "Kinafuta akaunti zako", "Kinakutengenezea na kukuhifadhia nywila imara", "Kinazima MFA"], answer: 2, why: "Unakumbuka nywila kuu moja; kinahifadhi nyingine zote." },
          { objective: "O5", q: "Unapokea ombi la MFA ambalo hukuliomba. Unafanya nini?", options: ["Unalikubali", "Unamtumia rafiki msimbo kwa SMS", "Unalipuuza milele", "Unalikataa na kubadilisha nywila yako"], answer: 3, why: "Ombi usilolitarajia lina maana huenda mtu ana nywila yako." },
          { objective: "O5", q: "Kwa nini usakinishe masasisho?", options: ["Yanaziba mianya ya usalama ambayo washambuliaji wanaijua", "Yanaifanya simu kuwa nzito zaidi", "Yanafuta picha zako", "Ni kwa ajili ya michezo tu"], answer: 0, why: "Masasisho yanaziba mianya ya usalama inayojulikana." },
          { objective: "O6", q: "Akaunti yako ilidukuliwa. Baada ya kubadilisha nywila, hatua muhimu ni:", options: ["Kuweka nywila yako mpya mtandaoni", "Kufuta unaowasiliana nao", "Kuzima masasisho", "Kutoka kwenye vipindi vingine vyote"], answer: 3, why: "Kutoka kila mahali kunamtoa mshambuliaji nje." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Usalama wa Mtandao",
    questions: [
      { objective: "O1", q: "Usalama wa mtandao ni:", options: ["Kulinda vifaa, akaunti na taarifa dhidi ya mashambulizi", "Kuzipa tovuti rangi nzuri", "Aina ya simu", "Mchezo wa video"], answer: 0, why: "Unalinda vifaa, akaunti na taarifa." },
      { objective: "O1", q: "Katika CIA triad, \"usiri\" una maana:", options: ["Mfumo una kasi", "Taarifa ina nakala ya akiba", "Ni watu sahihi tu wanaoweza kuona taarifa", "Umeme upo"], answer: 2, why: "Usiri unaweka taarifa kuwa siri." },
      { objective: "O1", q: "Tovuti inaangushwa ili wateja wasiweze kuitumia. Lengo lipi limeumizwa?", options: ["Usahihi", "Usiri", "Upatikanaji", "Uthibitishaji"], answer: 2, why: "Upatikanaji ni kwamba inafanya kazi inapohitajika." },
      { objective: "O2", q: "Malware ni:", options: ["Sasisho lenye msaada", "Firewall (ukuta wa kinga)", "Kidhibiti cha nywila", "Programu hasidi"], answer: 3, why: "Malware ni programu hasidi." },
      { objective: "O2", q: "Ransomware:", options: ["Inaongeza kasi ya kompyuta yako", "Inafunga faili na kudai malipo", "Inahifadhi nakala za picha zako", "Inazuia spam"], answer: 1, why: "Ransomware inashikilia faili kama mateka." },
      { objective: "O2", q: "Social engineering ni:", options: ["Kujenga madaraja", "Kuwadanganya watu watoe ruhusa ya kuingia au taarifa", "Kusasisha apps", "Somo la shule tu"], answer: 1, why: "Inawashambulia watu badala ya teknolojia." },
      { objective: "O2", q: "Ipi ni njia ya kawaida akaunti zinavyotekwa?", options: ["Kutumia tena nywila iliyovuja katika uvujaji wa data", "Kutumia MFA", "Kusakinisha masasisho", "Kutumia kidhibiti cha nywila"], answer: 0, why: "Nywila zilizovuja na kutumiwa tena zinawaruhusu washambuliaji kuingia kwenye akaunti nyingine." },
      { objective: "O3", q: "Phishing ni:", options: ["Ujumbe bandia unaojaribu kukudanganya", "App ya uvuvi", "Njia ya kuhifadhi nakala", "Aina ya nywila"], answer: 0, why: "Phishing inakudanganya ubofye au utoe taarifa." },
      { objective: "O3", q: "Ipi ni dalili ya phishing ambayo FTC inaiorodhesha?", options: ["Ujumbe kutoka kwa rafiki uliyekuwa ukimtarajia", "Risiti ya kitu ulichonunua", "Dai la shughuli za kutiliwa shaka pamoja na kiungo cha kulirekebisha", "Jarida la habari la shule"], answer: 2, why: "Arifa bandia za \"shughuli za kutiliwa shaka\" ni hila ya kawaida." },
      { objective: "O3", q: "Kabla ya kubofya kiungo katika barua pepe kwenye kompyuta, unaweza:", options: ["Kuweka kishale juu yake uone kinakwenda wapi hasa", "Kubofya mara mbili", "Kujibu kwa nywila yako", "Kuzima kompyuta"], answer: 0, why: "Kuweka kishale juu kunaonyesha anwani halisi ya wavuti." },
      { objective: "O3", q: "FTC inasema SMS za phishing zitumwe wapi?", options: ["Kwa wote unaowasiliana nao", "SPAM (7726)", "Kwa mtumaji", "911"], answer: 1, why: "Tuma SMS za phishing kwa 7726 (SPAM)." },
      { objective: "O3", q: "Kazini unapokea barua pepe ya kutiliwa shaka. Unafanya nini?", options: ["Kubofya uone kama ni halisi", "Kuiripoti kwa kitufe cha phishing au kumwambia IT", "Kuituma kwa wafanyakazi wenzako", "Kujibu na kuuliza"], answer: 1, why: "IT inaweza kuizuia kwa kila mtu." },
      { objective: "O4", q: "Urefu wa chini wa CISA kwa nywila imara ni:", options: ["Angalau herufi 16", "Herufi 4", "Herufi 8 kamili", "Urefu wowote"], answer: 0, why: "CISA inasema angalau herufi 16; ndefu zaidi ni imara zaidi." },
      { objective: "O4", q: "Ipi ni passphrase nzuri?", options: ["password123", "Siku yako ya kuzaliwa", "HorsePurpleHatRun", "abc"], answer: 2, why: "Maneno kadhaa yasiyohusiana yanaifanya kuwa ndefu na vigumu kubahatisha." },
      { objective: "O4", q: "Kidhibiti cha nywila kinamaanisha unahitaji kukumbuka tu:", options: ["Kila nywila", "Nywila kuu moja iliyo imara", "Hakuna nywila wala kifaa", "Nywila ya rafiki yako"], answer: 1, why: "Kidhibiti kinahifadhi nyingine zote." },
      { objective: "O5", q: "MFA inakulinda kwa sababu:", options: ["Nywila iliyoibiwa peke yake haitoshi kuingia", "Inaifanya nywila yako kuwa fupi zaidi", "Inashiriki taarifa zako za kuingia", "Inazima simu yako"], answer: 0, why: "MFA inahitaji uthibitisho wa pili." },
      { objective: "O5", q: "CISA inaita aina ipi ya MFA kuwa imara zaidi?", options: ["Kuandika msimbo kwenye kikaratasi cha kubandika", "MFA inayozuia phishing, kama passkey au ufunguo wa usalama", "Kumwambia rafiki msimbo", "Kutokuwa na hatua ya pili"], answer: 1, why: "CISA inaita MFA inayozuia phishing kuwa kiwango cha kulenga; passkeys na funguo za usalama ni vigumu zaidi kudanganya kuliko misimbo ya SMS." },
      { objective: "O5", q: "Hatua nne za msingi za CISA ni: kuepuka phishing, nywila imara, MFA na:", options: ["Kununua simu mpya", "Kusasisha programu", "Kuzima Wi-Fi milele", "Kuwapa wengine nywila"], answer: 1, why: "Kusasisha programu ni hatua ya nne ya msingi." },
      { objective: "O6", q: "Unafikiri ulibofya kiungo kibaya. FTC inasema:", options: ["Kupuuza", "Kusasisha programu ya usalama, kuendesha scan na kuondoa kinachoonyeshwa", "Kutuma kiungo kwa marafiki", "Kumlipa yeyote anayeomba"], answer: 1, why: "Scan inapata na kuondoa programu hasidi." },
      { objective: "O6", q: "Unaweza kuripoti ulaghai wa mtandaoni kwa FBI wapi?", options: ["ic3.gov", "Maoni kwenye mitandao ya kijamii", "Barua pepe ya tapeli", "Hakuna mahali"], answer: 0, why: "IC3 ni kituo cha FBI cha malalamiko ya uhalifu wa mtandaoni." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      5,
      7,
      8,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Nywila imara ya kipekee",
        objective: "O4",
        notYet: "Nywila ni fupi, imetumika tena au haijahifadhiwa mahali salama.",
        meets: "Nywila yenye angalau herufi 16, inayotumika kwa akaunti hii tu, imehifadhiwa katika kidhibiti cha nywila.",
        exceeds: "Pia anakagua akaunti nyingine moja muhimu na kuipa nywila ya kipekee."
      },
      {
        name: "Uthibitishaji wa hatua nyingi",
        objective: "O5",
        notYet: "MFA haijawashwa.",
        meets: "MFA imewashwa na inafanya kazi kwa akaunti hiyo.",
        exceeds: "Anatumia authenticator app, passkey au ufunguo wa usalama badala ya msimbo wa SMS."
      },
      {
        name: "Kifaa kimesasishwa",
        objective: "O5",
        notYet: "Masasisho hayakukaguliwa, au masasisho ya moja kwa moja yamezimwa.",
        meets: "Simu au kompyuta imesasishwa na masasisho ya moja kwa moja yamewashwa.",
        exceeds: "Pia anakagua kivinjari na apps kuu."
      },
      {
        name: "Mpango wa kurejesha usalama",
        objective: "O6",
        notYet: "Mpango haupo au una hatua sahihi chini ya tatu.",
        meets: "Mistari mitano inayohusu kubadilisha nywila, MFA, kutoka kwenye vipindi vingine, kukagua taarifa za kurejesha akaunti na kuwaonya unaowasiliana nao.",
        exceeds: "Pia inasema wapi pa kuripoti na nani wa kumpigia simu kama pesa zinahusika."
      },
      {
        name: "Dalili za phishing",
        objective: "O3",
        notYet: "Hakuna ujumbe uliopatikana, au hakuna dalili sahihi zilizoorodheshwa.",
        meets: "Ujumbe mmoja wa kutiliwa shaka wenye angalau dalili mbili sahihi za phishing zilizoorodheshwa.",
        exceeds: "Pia anasema jinsi na wapi pa kuuripoti."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya ukaguzi wa usalama",
      "Wanafunzi ambao bado wanatumia MFA na kidhibiti cha nywila siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti ujumbe wa phishing kwa IT au FTC, au wanaoepuka ulaghai, katika siku 30 baada ya kozi",
      "Wanafunzi wanaoendelea na kozi au cheti kinachofuata katika usalama wa mtandao au IT"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya mwanafunzi mwenyewe yenye intaneti",
      "Akaunti moja muhimu anayoweza kuingia, bora zaidi barua pepe",
      "Kidhibiti cha nywila cha bure, kama kile kilichojengwa ndani ya kivinjari au simu",
      "Karatasi na kalamu kwa mpango wa mistari mitano wa kurejesha usalama; kama dakika 60 kwa jumla"
    ],
    facilitatorNotes: [
      "Usiombe kamwe kuona, kukusanya au kuandika nywila au msimbo wa MFA wa mtu yeyote; wanafunzi wanafanya hatua za akaunti kwenye skrini zao wenyewe.",
      "Hakikisha kila mwanafunzi bado anaweza kufikia barua pepe au simu yake ya kurejesha akaunti kabla ya kuwasha MFA, ili mtu yeyote asifungiwe nje darasani.",
      "Leta mifano ya phishing iliyochapishwa au picha za skrini ili wanafunzi wasio na ujumbe wa kutiliwa shaka bado waweze kufanya kazi ya phishing.",
      "Kwenye kompyuta za pamoja au za maabara, usihifadhi nywila kwenye kivinjari; waache wanafunzi watumie kidhibiti cha nywila cha simu zao wenyewe na watoke (sign out) mwishoni.",
      "Mwanafunzi akigundua akaunti halisi iliyodukuliwa, simama na umwongoze katika mpango wa kurejesha usalama kutoka kifaa salama."
    ]
  }
};
