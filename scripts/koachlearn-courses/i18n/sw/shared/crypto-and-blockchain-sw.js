"use strict";

// Koach Learn course (Swahili translation of shared/crypto-and-blockchain.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Inaeleza jinsi inavyofanya kazi na hatari zake; HAIPENDEKEZI kununua (README rule 6).

const FTC_CRYPTO = { name: "FTC: Unachopaswa kujua kuhusu sarafu za kidijitali na ulaghai", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" };

module.exports = {
  id: "crypto-and-blockchain-sw",
  lang: "sw",
  translationOf: "crypto-and-blockchain",
  category: "Seniors and Technology",
  name: "Kuelewa Sarafu za Kidijitali (Crypto) na Blockchain",
  skills: "Kueleza blockchain kwa maneno rahisi, Kueleza jinsi crypto inavyotumwa na kuhifadhiwa, Kutaja hatari, Kutambua ulaghai wa crypto, Kuripoti ulaghai",
  outcome: "kueleza kwa maneno rahisi jinsi blockchain na sarafu ya kidijitali zinavyofanya kazi, kutaja hatari kuu, na kukagua ofa au ujumbe wowote wa crypto dhidi ya dalili za ulaghai, ili ufanye uamuzi wako mwenyewe kwa uangalifu na ujue mahali pa kuripoti udanganyifu.",
  about: [
    "Unasikia kuhusu Bitcoin na crypto kwenye habari, kazini, kutoka kwa familia na kwenye matangazo. Watu wengine wanapata pesa; wengi wanapoteza, na crypto ni mojawapo ya njia za kawaida sana ambazo matapeli huomba walipwe. Kozi hii inaeleza jinsi inavyofanya kazi ili uielewe na ujilinde wewe na watu unaowapenda.",
    "Katika Sura 1 unajifunza blockchain ni nini, sarafu ya kidijitali ni nini, na jinsi pochi (wallet) na funguo zinavyofanya kazi. Katika Sura 2 unajifunza hatari, dalili za ulaghai wa crypto, na mahali pa kuripoti udanganyifu.",
    "Kozi hii haikuambii kama ununue crypto au la. Si ushauri wa kifedha. Kwa maamuzi ya pesa, ongea na mtaalamu mwenye leseni unayemchagua mwenyewe. Kila somo linachukua kama dakika tano, na kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza \"kadi ya usalama wa crypto\" ya ukurasa mmoja kwa ajili yako au kwa mtu wa familia: sentensi mbili kuhusu blockchain na sarafu ya kidijitali ni nini, hatari tatu, dalili nne za ulaghai wa crypto, na mahali rasmi pa kuripoti udanganyifu. Kisha soma tangazo au ujumbe mmoja halisi wa crypto (kutoka barua pepe, SMS au mitandao ya kijamii) na uweke alama kwenye dalili za hatari unazoziona.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaosikia kuhusu Bitcoin na crypto kwenye habari, kazini, kutoka kwa familia na kwenye matangazo: wazee, watoto wao wakubwa na walezi wao, vijana wanaoanza kutumia programu za pesa, na wanajamii wanaotaka kujilinda na kuwalinda wengine.",
    startingPoint: "Wanaweza kutumia simu kwa ujumbe, barua pepe na mitandao ya kijamii, na huenda wanatumia programu ya benki au kadi ya benki (debit card). Wengi hawawezi kusema blockchain au maneno ya kurejesha (recovery phrase) ni nini, crypto inatofautianaje na pesa benki, au ulaghai wa crypto kwa kawaida unafanyikaje.",
    gap: "Crypto ni mojawapo ya njia za kawaida sana ambazo matapeli huomba walipwe, na malipo ya crypto kwa kawaida hayawezi kurudishwa. Watu wasioielewa wanaweza kupoteza akiba zao kwa uwekezaji wa uongo, ulaghai wa mapenzi, watu wanaojifanya maafisa wa serikali na ulaghai wa \"kurejesha pesa\", au kutoa maneno ya kurejesha na kupoteza kila kitu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la crypto linaelezwa kwa mfano wa maisha ya kila siku",
      "Vifaa: simu au kompyuta ya kusoma kurasa rasmi za tahadhari; hakuna programu wala akaunti ya crypto inayohitajika",
      "Muda: kama dakika 5 kwa somo, kama dakika 60 kwa jumla",
      "Si ushauri wa kifedha: kozi haiwaambii wanafunzi wanunue au wauze; maamuzi ya pesa yanaenda kwa mtaalamu mwenye leseni anayechaguliwa na mwanafunzi",
      "Faragha na usalama: wanafunzi hawatoi kamwe maneno ya kurejesha wala ufunguo binafsi, na hawatumi pesa kamwe wakati wa mazoezi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia mfano wa daftari la pamoja", action: "kueleza blockchain ni nini, ukitumia maneno block, chain na decentralized", standard: "kwa sentensi mbili au tatu rahisi bila kosa kuhusu jinsi kumbukumbu zinavyohifadhiwa" },
    { id: "O2", condition: "Bila maelezo yako", action: "kueleza sarafu ya kidijitali ni nini na kuorodhesha jinsi inavyotofautiana na pesa katika akaunti ya benki yenye bima", standard: "ukitaja angalau tofauti tatu, ikiwemo kwamba malipo ya crypto kwa kawaida hayawezi kurudishwa" },
    { id: "O3", condition: "Ukipewa maneno pochi (wallet), anwani ya umma, maneno ya kurejesha na soko la kubadilishana (exchange)", action: "kueleza kila moja ni nini na kutambua yapi hayapaswi kutolewa kamwe", standard: "kila moja likielezwa sawasawa, na maneno ya kurejesha na ufunguo binafsi yakibaki siri daima" },
    { id: "O4", condition: "Bila maelezo yako", action: "kutaja hatari nne kuu za crypto na njia moja ya kujilinda dhidi ya kila moja", standard: "hatari zote nne (bei, kupoteza, kampuni na ulaghai) zikitajwa sawasawa" },
    { id: "O5", condition: "Ukipewa tangazo, ujumbe au chapisho halisi la crypto", action: "kulikagua dhidi ya dalili za ulaghai wa crypto na kuchagua jibu salama", standard: "ukiweka alama kwenye kila dalili ya hatari iliyopo na kuchagua kusimama, kutolipa na kuongea na mtu unayemwamini" },
    { id: "O6", condition: "Ukipewa ulaghai wa crypto uliokupata wewe au mtu unayemjua", action: "kuorodhesha mahali rasmi pa kuuripoti na taarifa za kuandika", standard: "ukitaja angalau tovuti mbili rasmi za kuripoti na angalau taarifa nne za kuandika" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi crypto na blockchain zinavyofanya kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Blockchain ni nini",
          minutes: 5,
          goal: "Eleza blockchain kwa maneno rahisi ukitumia mfano rahisi.",
          text: [
            "Fikiria daftari la malipo ambalo kompyuta maelfu kila moja ina nakala yake. Baada ya dakika chache, ukurasa mpya wa malipo unaongezwa. Kila ukurasa umefungwa kwa ukurasa uliotangulia kwa aina ya alama ya kidole ya kihesabu, kwa hiyo mtu akibadilisha ukurasa wa zamani, kila nakala nyingine inaonyesha kwamba haulingani.",
            "Daftari hilo la pamoja ndilo blockchain. Kila ukurasa ni block, na kurasa zimeunganishwa kama mnyororo (chain) kwa mpangilio. Hakuna benki wala kampuni moja inayoshika daftari hilo; mtandao wa kompyuta ndio unaolishika. Hii inaitwa decentralized (bila mamlaka moja ya kati).",
            "Kwa sababu ya muundo huu, malipo yaliyoandikwa kwenye blockchain ni magumu sana kubadilisha au kufuta. Blockchain nyingi pia ziko wazi kwa umma: mtu yeyote anaweza kuangalia malipo, hata kama majina ya wahusika hayaonyeshwi."
          ],
          words: [["Blockchain", "kumbukumbu ya pamoja ya miamala, inayohifadhiwa na kompyuta nyingi, ambapo kila block mpya inaunganishwa na ile iliyotangulia."], ["Block", "kundi la miamala linaloongezwa kwenye blockchain kwa pamoja."], ["Decentralized", "inayoendeshwa na mtandao wa kompyuta nyingi badala ya benki au kampuni moja."], ["Leja (ledger)", "kumbukumbu ya malipo, kama daftari la hesabu."]],
          slides: [
            { title: "Fikiria daftari la pamoja", bullets: ["Kompyuta maelfu zina nakala yake", "Kurasa mpya za malipo zinaongezwa mara kwa mara", "Kila ukurasa umefungwa kwa ule uliotangulia"] },
            { title: "Maneno ya blockchain", bullets: ["Block = ukurasa mmoja wa malipo", "Chain = kurasa zilizounganishwa kwa mpangilio", "Decentralized = hakuna benki moja inayoongoza"] },
            { title: "Maana yake kwako", bullets: ["Malipo ni magumu sana kubadilisha au kufuta", "Blockchain nyingi ni kumbukumbu za wazi kwa umma"] }
          ],
          tryIt: "Mweleze mtu (au jieleze kwa sauti) blockchain ni nini ukitumia mfano wa daftari la pamoja. Tumia maneno block, chain na decentralized.",
          youCanNow: "kueleza blockchain ni nini na kwa nini kumbukumbu zake ni ngumu kubadilisha.",
          quickCheck: [
            { objective: "O1", q: "Katika mfano wa daftari la pamoja, block ni nini?", options: ["Daftari lote", "Benki inayomiliki daftari", "Ukurasa mmoja wa malipo unaoongezwa kwenye daftari", "Nywila ya daftari"], answer: 2, why: "Kila ukurasa wa malipo ni block, na kurasa zimeunganishwa kwa mpangilio." },
            { objective: "O1", q: "Mtu anakuambia anaweza kubadilisha kimyakimya malipo ya zamani kwenye blockchain ya umma. Ungefikiri nini?", options: ["Haiwezekani kwa urahisi, kwa sababu nakala nyingine hazingelingana", "Ni rahisi, kwa sababu kampuni moja inashika daftari", "Ni kawaida, kwa sababu blockchain ni za siri", "Ni kweli, kwa sababu block haziunganishwi"], answer: 0, why: "Kila block imefungwa kwa ile iliyotangulia, kwa hiyo ukurasa uliobadilishwa usingelingana na nakala nyingine." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sarafu ya kidijitali ni nini",
          minutes: 5,
          goal: "Eleza sarafu ya kidijitali ni nini na inavyotofautiana na dola zilizo benki.",
          text: [
            "Sarafu ya kidijitali (cryptocurrency au crypto) ni pesa ya kidijitali iliyoandikwa kwenye blockchain. Bitcoin ilikuwa ya kwanza; sasa kuna maelfu, kama Ether. Stablecoin ni aina ya crypto iliyoundwa ibaki karibu na thamani ya sarafu ya kawaida kama dola ya Marekani, lakini bado inaweza kushindwa.",
            "Crypto haitolewi na serikali, na bei yake inapanda na kushuka kulingana na kiasi ambacho watu wako tayari kulipa. Bei inaweza kupanda au kushuka sana kwa siku moja.",
            "Malipo ya crypto ni tofauti na malipo ya kadi. FTC (Tume ya Biashara ya Marekani) inasema malipo ya crypto hayana kinga za kisheria ambazo kadi za mkopo na za benki zinazo, na kwa kawaida hayawezi kurudishwa. Pesa iliyo katika crypto pia si sawa na pesa iliyo katika akaunti ya benki yenye bima."
          ],
          words: [["Sarafu ya kidijitali (crypto)", "pesa ya kidijitali iliyoandikwa kwenye blockchain, kama Bitcoin au Ether."], ["Stablecoin", "crypto iliyoundwa ibaki karibu na thamani ya sarafu ya kawaida, kama dola ya Marekani."], ["Inayobadilika sana (volatile)", "bei inayoweza kupanda au kushuka sana, kwa haraka."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Crypto ni...", bullets: ["Pesa ya kidijitali iliyoandikwa kwenye blockchain", "Bitcoin ilikuwa ya kwanza; Ether ni nyingine", "Stablecoin hujaribu kulingana na sarafu kama dola"] },
            { title: "Si kama dola zilizo benki", bullets: ["Haitolewi na serikali", "Bei inaweza kubadilika sana kwa siku moja"] },
            { title: "Si kama malipo ya kadi", bullets: ["Haina kinga za kisheria kama za kadi (FTC)", "Kwa kawaida haiwezi kurudishwa"] }
          ],
          tryIt: "Andika tofauti tatu kati ya kulipa kwa kadi ya benki na kulipa kwa crypto. Tumia ukurasa wa FTC ulio katika vyanzo vya somo hili kukagua jibu lako.",
          youCanNow: "kueleza sarafu ya kidijitali ni nini na inavyotofautiana na pesa ya benki na malipo ya kadi.",
          quickCheck: [
            { objective: "O2", q: "Sarafu ya kidijitali ni nini?", options: ["Pesa ya karatasi kutoka serikalini", "Pesa ya kidijitali iliyoandikwa kwenye blockchain", "Akaunti ya akiba benki", "Kadi ya zawadi ya duka"], answer: 1, why: "Crypto ni pesa ya kidijitali iliyoandikwa kwenye blockchain, haitolewi na serikali." },
            { objective: "O2", q: "Muuzaji anakuomba ulipe kwa crypto badala ya kadi yako ya mkopo. Unapaswa kukumbuka nini?", options: ["Crypto ina kinga zaidi ya kisheria kuliko kadi", "Malipo ya crypto ni rahisi kusitisha kila wakati", "Crypto ina bima kama akaunti ya benki", "Malipo ya crypto kwa kawaida hayawezi kurudishwa jambo likienda vibaya"], answer: 3, why: "FTC inasema malipo ya crypto hayana kinga za kadi na kwa kawaida hayawezi kurudishwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pochi, funguo na masoko ya kubadilishana",
          minutes: 5,
          goal: "Eleza jinsi crypto inavyohifadhiwa na kutumwa, na kile ambacho hakipaswi kutolewa kamwe.",
          text: [
            "Crypto huhifadhiwa katika pochi (wallet): programu, tovuti au kifaa kidogo kinachoshika funguo zako. Anwani ya umma (public address) ni kama namba ya akaunti unayoweza kumpa mtu ili akutumie crypto. Ufunguo binafsi (private key), ambao mara nyingi huonyeshwa kama maneno ya kurejesha (recovery phrase, orodha ya maneno 12 au 24), ni kama ufunguo mkuu. Yeyote aliye nao ndiye anayemiliki crypto.",
            "Usimpe mtu yeyote maneno ya kurejesha wala ufunguo binafsi: si wafanyakazi wa msaada, si \"msaidizi\", si programu, si msaidizi wa AI. Kampuni halisi haitakuomba kamwe. Ukiyapoteza, crypto inaweza kupotea milele.",
            "Soko la kubadilishana (exchange) ni kampuni ambapo watu hununua, huuza na kuhifadhi crypto. Masoko haya yanaweza kudukuliwa au kufungwa. Nchini Marekani, kagua kama kampuni imesajiliwa na usome malalamiko dhidi yake kabla ya kuiamini; wasimamizi kama SEC na CFTC (mamlaka za Marekani zinazosimamia uwekezaji na biashara) hutoa tahadhari."
          ],
          words: [["Pochi (wallet)", "programu au kifaa kinachoshika funguo za crypto yako."], ["Anwani ya umma (public address)", "msimbo ambao wengine hutumia kukutumia crypto, kama namba ya akaunti."], ["Ufunguo binafsi / maneno ya kurejesha", "siri inayodhibiti crypto; usiitoe kamwe."], ["Soko la kubadilishana (exchange)", "kampuni ambapo watu hununua, huuza na kuhifadhi crypto."]],
          sources: [FTC_CRYPTO, { name: "SEC: Tuma taarifa au lalamiko", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Tuma lalamiko", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Pochi na funguo", bullets: ["Pochi = programu au kifaa kinachoshika funguo zako", "Anwani ya umma = kama namba ya akaunti", "Ufunguo binafsi / maneno ya kurejesha = ufunguo mkuu"] },
            { title: "Usitoe kamwe", bullets: ["Maneno yako ya kurejesha au ufunguo binafsi", "Si kwa wafanyakazi wa msaada, wasaidizi, programu wala AI", "Kampuni halisi haziyaombi kamwe"] },
            { title: "Masoko ya kubadilishana (exchanges)", bullets: ["Kampuni za kununua, kuuza na kuhifadhi crypto", "Yanaweza kudukuliwa au kufungwa", "Kagua malalamiko na tahadhari za wasimamizi kwanza"] }
          ],
          tryIt: "Andika sentensi moja kwa kila moja: anwani ya umma ni nini, maneno ya kurejesha ni nini, na ungesema nini kama \"wakala wa msaada\" angekuomba maneno yako ya kurejesha.",
          youCanNow: "kueleza jinsi crypto inavyohifadhiwa na kutumwa na kwa nini maneno ya kurejesha hayapaswi kutolewa kamwe.",
          quickCheck: [
            { objective: "O3", q: "Maneno ya kurejesha ni nini?", options: ["Salamu unayotuma pamoja na malipo", "Jina la soko la kubadilishana", "Anwani yako ya umma", "Orodha ya maneno 12 au 24 inayodhibiti crypto yako"], answer: 3, why: "Yeyote aliye na maneno ya kurejesha ndiye anayedhibiti crypto, kama ufunguo mkuu." },
            { objective: "O3", q: "Rafiki anataka kukutumia crypto na anauliza atumie nini. Ungempa nini?", options: ["Maneno yako ya kurejesha", "Ufunguo wako binafsi", "Anwani yako ya umma", "PIN ya benki yako"], answer: 2, why: "Anwani ya umma ni kama namba ya akaunti na ni salama kuitoa ili kupokea crypto." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi crypto na blockchain zinavyofanya kazi",
        questions: [
          { objective: "O1", q: "Mfano upi unaeleza vizuri zaidi blockchain?", options: ["Orodha ya majina kwenye simu", "Jedwali la siri la benki moja", "Hundi ya karatasi", "Daftari la pamoja la malipo ambalo kompyuta nyingi kila moja ina nakala yake"], answer: 3, why: "Blockchain ni kumbukumbu ya pamoja inayohifadhiwa na kompyuta nyingi." },
          { objective: "O1", q: "Kwa nini ni vigumu kubadilisha kumbukumbu ya zamani kwenye blockchain?", options: ["Imechapishwa kwenye karatasi", "Hakimu anailinda", "Kila block imeunganishwa na ile iliyotangulia, kwa hiyo mabadiliko hayalingani na nakala nyingine", "Inafutwa kila siku"], answer: 2, why: "Block zilizounganishwa na nakala nyingi hufanya mabadiliko yaonekane." },
          { objective: "O2", q: "FTC inasema nini kuhusu malipo ya crypto ukilinganisha na kadi za mkopo?", options: ["Yana kinga zaidi", "Ni sawa", "Hayana kinga zile zile za kisheria na kwa kawaida hayawezi kurudishwa", "Yana bima kila wakati"], answer: 2, why: "FTC inaonya kwamba malipo ya crypto hayana kinga kama za kadi." },
          { objective: "O2", q: "Stablecoin ni nini?", options: ["Sarafu iliyotengenezwa kwa chuma", "Aina ya pochi", "Hati ya akiba ya serikali", "Crypto iliyoundwa ibaki karibu na sarafu kama dola"], answer: 3, why: "Stablecoin zinalenga kufuata sarafu ya kawaida, ingawa bado zinaweza kushindwa." },
          { objective: "O3", q: "Mtu kutoka \"msaada wa pochi\" anakuomba maneno yako 12 ya kurejesha ili arekebishe tatizo. Unafanya nini?", options: ["Unampa ili akusaidie", "Unampa nusu yake", "Unayaandika kwenye AI ili kuyakagua", "Unakataa; kampuni halisi haziyaombi kamwe"], answer: 3, why: "Yeyote aliye na maneno ya kurejesha ndiye anayedhibiti crypto." }
        ]
      }
    },
    {
      name: "Sura 2: Hatari, ulaghai na kuripoti",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hatari halisi",
          minutes: 5,
          goal: "Taja hatari kuu za kumiliki au kupokea crypto.",
          text: [
            "Hatari ya bei: bei za crypto zinaweza kushuka ghafla sana, na hakuna anayeweza kuahidi kwamba zitarudi. Usiweke kamwe pesa unazohitaji kwa kodi ya nyumba, chakula, bili au dawa.",
            "Hatari ya kupoteza: ukipoteza maneno yako ya kurejesha, au ukituma crypto kwa anwani isiyo sahihi, kwa kawaida imepotea. Malipo kwa kawaida hayawezi kurudishwa.",
            "Hatari ya kampuni: masoko ya kubadilishana na programu zinaweza kudukuliwa au kufungwa. FDIC (shirika la Marekani linalowekea bima amana za benki) inasema mali za crypto hazilindwi na bima ya amana ya FDIC, ambayo inalinda tu amana katika benki zenye bima ya FDIC. Hatari ya ulaghai: crypto ni njia ya malipo inayopendwa na matapeli kwa sababu ni ya haraka na ni vigumu kuirudisha.",
            "Kozi hii haikuambii ununue. Kama unafikiria kununua, ongea na mtaalamu wa fedha mwenye leseni unayemchagua mwenyewe, na usome tahadhari rasmi kwanza."
          ],
          words: [["Hatari", "uwezekano wa kupoteza pesa au jambo kwenda vibaya."], ["Bima ya FDIC", "kinga ya serikali ya Marekani kwa pesa zilizo katika akaunti za amana za benki zenye bima; hailindi crypto."]],
          sources: [FTC_CRYPTO, { name: "FDIC: Kuelewa bima ya amana", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Hatari ya bei", bullets: ["Bei zinaweza kushuka ghafla sana", "Usitumie kamwe pesa ya kodi, chakula, bili au dawa"] },
            { title: "Hatari ya kupoteza", bullets: ["Maneno ya kurejesha yakipotea = crypto imepotea", "Anwani isiyo sahihi au ulaghai = kwa kawaida imepotea"] },
            { title: "Hatari ya kampuni na ya ulaghai", bullets: ["Programu na masoko yanaweza kudukuliwa au kufungwa", "Crypto haina bima ya FDIC", "Matapeli wanapenda malipo ya crypto"] },
            { title: "Si ushauri", bullets: ["Kozi hii haisemi nunua wala uza", "Ongea na mtaalamu mwenye leseni unayemchagua"] }
          ],
          tryIt: "Andika hatari nne kwa maneno yako mwenyewe: bei, kupoteza, kampuni na ulaghai. Kwa kila moja, andika njia moja ambayo mtu angeweza kujilinda.",
          youCanNow: "kutaja hatari kuu za crypto na kueleza kwa nini pesa unazohitaji hazipaswi kamwe kuwekwa hatarini.",
          quickCheck: [
            { objective: "O4", q: "Hatari ya bei katika crypto ni nini?", options: ["Bei inaweza kushuka ghafla sana na hakuna anayeweza kuahidi kwamba itarudi", "Bei inapangwa na serikali", "Bei inapanda tu kadiri muda unavyokwenda", "Bei ni sawa na dola kila siku"], answer: 0, why: "Bei za crypto zinaweza kushuka ghafla sana, kwa hiyo usiweke kamwe pesa unazohitaji kwa bili." },
            { objective: "O4", q: "Binamu yako anataka kuweka pesa ya kodi ya nyumba ya mwezi huu katika crypto. Ungemwambia nini?", options: ["Endelea; bei hurudi kila wakati", "Usitumie pesa unazohitaji kwa kodi, chakula, bili au dawa", "Iweke kwenye soko la kubadilishana kwa sababu masoko hayo yana bima", "Ituma haraka kabla bei haijabadilika"], answer: 1, why: "Bei zinaweza kushuka sana, kwa hiyo pesa ya mahitaji ya msingi haipaswi kuingia katika crypto kamwe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutambua ulaghai wa crypto",
          minutes: 5,
          goal: "Kagua ofa au ujumbe wa crypto dhidi ya dalili za ulaghai.",
          text: [
            "FTC inaorodhesha dalili za ulaghai wa crypto. Ni matapeli tu wanaodai malipo kwa crypto, hasa mapema au ili \"kulinda\" pesa yako. Ni matapeli tu wanaohakikisha faida au mapato makubwa ya haraka. Watu maarufu wanaoonekana kuunga mkono jambo wanaweza kuwa wa uongo.",
            "Kuwa macho na rafiki mpya wa mtandaoni au mpenzi anayeanza kukupa ushauri wa uwekezaji au kukuomba crypto. Kuwa macho na simu au SMS zinazodai kutoka ofisi ya serikali, benki au kampuni ya huduma (kama umeme au maji) zinazosema unadaiwa pesa au akaunti yako imezuiwa na lazima ulipe kwa crypto au kwenye ATM ya crypto.",
            "Pia kuwa macho na kazi zinazokutaka ulipe ada kwa crypto, na barua pepe zinazotishia kutangaza mambo yako ya siri usipolipa kwa crypto. Ukiona lolote kati ya haya, simama. Usilipe, usibonyeze, na ongea na mtu unayemwamini."
          ],
          steps: ["Inakuomba ulipe kwa crypto au utumie ATM ya crypto?", "Inaahidi faida ya uhakika au ya haraka?", "Imetoka kwa rafiki mpya wa mtandaoni, mtu wa mapenzi au mgeni?", "Inakuharakisha au inakutishia?", "Jibu lolote likiwa ndiyo: simama, usilipe, na kagua na mtu unayemwamini."],
          words: [["Ulaghai (scam)", "hila ya kuiba pesa au taarifa."], ["ATM ya crypto", "mashine inayobadilisha pesa taslimu kuwa crypto; matapeli mara nyingi huwaambia waathiriwa waitumie."], ["Ulaghai wa mapenzi", "ulaghai ambapo mtu anajenga uhusiano wa mtandaoni ili apate pesa."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Ni matapeli tu...", bullets: ["Wanaodai malipo kwa crypto", "Wanaohakikisha faida au mapato ya haraka", "Wanaotumia watu maarufu wa uongo kuunga mkono"] },
            { title: "Kuwa macho na", bullets: ["Marafiki wapya wa mtandaoni wanaotoa ushauri wa uwekezaji", "Simu za \"serikali\" au \"benki\" zinazosema lipa kwa crypto", "Kazi zinazotoza ada ya crypto"] },
            { title: "Ukiugundua", bullets: ["Simama", "Usilipe wala usibonyeze", "Ongea na mtu unayemwamini"] }
          ],
          tryIt: "Tafuta tangazo, ujumbe au chapisho moja la crypto kwenye mitandao ya kijamii. Pitia maswali matano ya kukagua na uandike kila dalili ya hatari unayoiona.",
          youCanNow: "kukagua ofa au ujumbe wa crypto dhidi ya dalili za hatari na kusimama kabla ya kulipa.",
          quickCheck: [
            { objective: "O5", q: "Ipi kati ya hizi ni dalili ya ulaghai wa crypto?", options: ["Barua ya benki uliyoiomba", "Rafiki anayekueleza blockchain ni nini", "Kudaiwa ulipe kwa crypto mapema ili kulinda pesa yako", "Habari kuhusu bei ya Bitcoin"], answer: 2, why: "Ni matapeli tu wanaodai malipo kwa crypto mapema au ili \"kulinda\" pesa yako." },
            { objective: "O5", q: "SMS inasema akaunti yako ya benki imezuiwa na lazima ulipe kwenye ATM ya crypto leo. Ungefanya nini?", options: ["Kwenda kwenye ATM ya crypto mara moja", "Kujibu kwa namba yako ya akaunti", "Kubonyeza kiungo kilicho kwenye SMS ili kukagua", "Kusimama, kutolipa wala kubonyeza, na kuongea na mtu unayemwamini"], answer: 3, why: "Madai kwamba unadaiwa pesa na lazima ulipe kwa crypto ni dalili ya ulaghai, kwa hiyo simama na usilipe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuripoti udanganyifu na kuwasaidia wengine",
          minutes: 5,
          goal: "Orodhesha mahali pa kuripoti ulaghai wa crypto na nini cha kuandika.",
          text: [
            "Kama wewe au mtu unayemjua alilengwa, ripoti. FTC inaorodhesha mahali hapa: FTC kwenye ReportFraud.ftc.gov, CFTC kwenye cftc.gov/complaint, SEC kwenye sec.gov/tcr, Kituo cha Malalamiko ya Uhalifu wa Mtandaoni cha FBI (IC3) kwenye ic3.gov, na soko la kubadilishana au programu iliyotumiwa kutuma pesa.",
            "Andika kilichotokea: tarehe, kiasi, anwani ya pochi au namba ya muamala (transaction ID), majina na namba za simu alizotumia tapeli, na picha za skrini za ujumbe. Usitume pesa zaidi kwa mtu yeyote anayeahidi \"kurejesha\" crypto yako iliyopotea; mara nyingi huo ni ulaghai wa pili.",
            "Ongea kuhusu ulaghai na familia na marafiki, hasa ndugu wazee na vijana wanaoanza kutumia programu za pesa. Mazungumzo mafupi yanaweza kuzuia hasara."
          ],
          steps: ["Simamisha malipo yote na mawasiliano yote na tapeli.", "Andika tarehe, kiasi, anwani za pochi, namba za miamala, majina na namba za simu.", "Hifadhi picha za skrini.", "Ripoti kwenye ReportFraud.ftc.gov na ic3.gov, pamoja na SEC au CFTC kama ulikuwa uwekezaji.", "Liambie soko la kubadilishana au programu uliyotumia.", "Puuza mtu yeyote anayejitolea kurejesha pesa yako kwa ada."],
          words: [["Namba ya muamala (transaction ID)", "msimbo unaotambulisha malipo moja ya crypto kwenye blockchain."], ["IC3", "Kituo cha Malalamiko ya Uhalifu wa Mtandaoni cha FBI, kinachopokea ripoti za uhalifu wa mtandaoni."], ["Ulaghai wa kurejesha pesa", "ulaghai wa pili unaoahidi kurejesha pesa yako iliyopotea kwa ada."]],
          sources: [FTC_CRYPTO, { name: "FTC: ReportFraud (kuripoti udanganyifu)", url: "https://reportfraud.ftc.gov" }, { name: "Kituo cha Malalamiko ya Uhalifu wa Mtandaoni cha FBI (IC3)", url: "https://www.ic3.gov" }, { name: "SEC: Tuma taarifa au lalamiko", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Tuma lalamiko", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Mahali pa kuripoti", bullets: ["ReportFraud.ftc.gov", "ic3.gov (FBI)", "sec.gov/tcr au cftc.gov/complaint kwa uwekezaji", "Soko la kubadilishana au programu uliyotumia"] },
            { title: "Iandike", bullets: ["Tarehe na kiasi", "Anwani ya pochi na namba ya muamala", "Majina, namba za simu, picha za skrini"] },
            { title: "Jihadhari na ulaghai wa kurejesha pesa", bullets: ["Hakuna mtu halali anayetoza ada ili \"kurejesha\" crypto", "Usilipe tena"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza kadi yako ya ukurasa mmoja ya usalama wa crypto (blockchain na crypto ni nini, hatari tatu, dalili nne za ulaghai, mahali pa kuripoti). Kisha weka alama kwenye dalili za hatari katika tangazo au ujumbe mmoja halisi wa crypto.",
          youCanNow: "kuripoti ulaghai wa crypto mahali sahihi na kusaidia familia na marafiki kuuepuka.",
          quickCheck: [
            { objective: "O6", q: "Ipi kati ya hizi ni mahali rasmi pa kuripoti udanganyifu wa crypto nchini Marekani?", options: ["Maoni kwenye chapisho la tapeli kwenye mitandao ya kijamii", "Kituo cha Malalamiko ya Uhalifu wa Mtandaoni cha FBI kwenye ic3.gov", "Mgeni anayesema anaweza kurejesha pesa yako", "Kikundi cha mazungumzo cha crypto"], answer: 1, why: "IC3 kwenye ic3.gov ni mojawapo ya mahali rasmi ambapo FTC inaorodhesha kwa kuripoti." },
            { objective: "O6", q: "Jirani yako alitapeliwa na anataka kuripoti. Ungemsaidia afanye nini kwanza?", options: ["Kuandika tarehe, kiasi, anwani ya pochi au namba ya muamala, na kuhifadhi picha za skrini", "Kufuta kila ujumbe kutoka kwa tapeli", "Kulipa huduma ya kurejesha pesa", "Kumtumia tapeli crypto zaidi ili kufunga akaunti"], answer: 0, why: "Taarifa hizo zinasaidia mamlaka na soko la kubadilishana kufuatilia ripoti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Hatari, ulaghai na kuripoti",
        questions: [
          { objective: "O4", q: "Pesa ipi haipaswi kuwekwa katika crypto kamwe?", options: ["Pesa ya kuchezea katika mchezo", "Pesa unayoweza kumudu kupoteza baada ya ushauri", "Pesa unayohitaji kwa kodi ya nyumba, chakula au dawa", "Hakuna pesa iliyo hatarini kamwe"], answer: 2, why: "Mabadiliko ya bei yanamaanisha unaweza kupoteza pesa unazohitaji." },
          { objective: "O4", q: "Kwa mujibu wa FDIC, crypto:", options: ["Ina bima kamili ya FDIC", "Ina bima siku za wikendi tu", "Hailindwi na bima ya amana ya FDIC", "Ina bima ikinunuliwa kwa simu"], answer: 2, why: "Bima ya amana ya FDIC hailindi crypto." },
          { objective: "O5", q: "Mpigaji simu anasema anatoka serikalini na lazima ulipe faini kwenye ATM ya crypto leo. Hii ni:", options: ["Malipo ya kawaida ya serikali", "Marejesho ya kodi", "Sheria ya benki", "Dalili ya ulaghai"], answer: 3, why: "Ni matapeli tu wanaodai malipo kwa crypto." },
          { objective: "O5", q: "Rafiki mpya wa mtandaoni anaahidi faida ya uhakika ukiwekeza katika crypto. Unafanya nini?", options: ["Unawekeza kidogo kujaribu", "Unamtumia maneno yako ya kurejesha", "Unaomba uhakikisho mkubwa zaidi", "Unasimama; faida ya uhakika ni dalili ya ulaghai"], answer: 3, why: "Ni matapeli tu wanaohakikisha faida." },
          { objective: "O6", q: "Baada ya kupoteza pesa kwa ulaghai wa crypto, mtu anajitolea kuirejesha kwa ada. Huenda huu ni:", options: ["Ulaghai wa kurejesha pesa", "FBI", "Benki yako", "Marejesho halali"], answer: 0, why: "Kulipa ada ili kurejesha crypto ni ulaghai wa pili wa kawaida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuelewa Sarafu za Kidijitali (Crypto) na Blockchain",
    questions: [
      { objective: "O1", q: "Blockchain ni:", options: ["Kumbukumbu ya pamoja ya miamala inayohifadhiwa na kompyuta nyingi", "Aina ya kufuli ya baiskeli", "Faili la siri la kampuni moja", "Risiti ya karatasi"], answer: 0, why: "Kompyuta nyingi zinahifadhi nakala za kumbukumbu ile ile iliyounganishwa." },
      { objective: "O1", q: "Katika blockchain, \"block\" ni:", options: ["Kundi la miamala linaloongezwa pamoja", "Nywila", "ATM ya crypto", "Tawi la benki"], answer: 0, why: "Kila block inashika kundi la miamala." },
      { objective: "O1", q: "\"Decentralized\" inamaanisha:", options: ["Inaendeshwa na benki moja", "Imefungwa siku za wikendi", "Inaendeshwa na mtandao wa kompyuta nyingi badala ya kampuni moja", "Ni kwa ajili ya serikali tu"], answer: 2, why: "Hakuna kampuni moja inayoshika kumbukumbu." },
      { objective: "O1", q: "Blockchain nyingi ni:", options: ["Za siri na zilizofichwa", "Hufutwa kila mwaka", "Huchapishwa kwenye magazeti", "Kumbukumbu za umma ambazo mtu yeyote anaweza kuangalia"], answer: 3, why: "Mtu yeyote anaweza kuangalia miamala, ingawa majina hayaonyeshwi." },
      { objective: "O2", q: "Bitcoin ni mfano wa:", options: ["Kadi ya mkopo", "Akaunti ya benki", "Sarafu ya kidijitali", "Stablecoin inayoendeshwa na serikali"], answer: 2, why: "Bitcoin ilikuwa sarafu ya kidijitali ya kwanza." },
      { objective: "O2", q: "Bei za crypto zinaitwa volatile (zinazobadilika sana) kwa sababu:", options: ["Hazibadiliki kamwe", "Zinapanda tu", "Zinapangwa kwa sheria", "Zinaweza kupanda au kushuka sana kwa haraka"], answer: 3, why: "Volatile inamaanisha mabadiliko makubwa na ya haraka ya bei." },
      { objective: "O2", q: "Ukimlipa tapeli kwa crypto, FTC inasema:", options: ["Unaweza kusitisha kila wakati", "Kwa kawaida huwezi kurudisha malipo", "Unapata marejesho kutoka benki", "Una bima"], answer: 1, why: "Malipo ya crypto kwa kawaida hayawezi kurudishwa." },
      { objective: "O3", q: "Pochi ya crypto ni:", options: ["Pochi ya ngozi", "Programu au kifaa kinachoshika funguo za crypto yako", "Akaunti ya benki", "Ofisi ya soko la kubadilishana"], answer: 1, why: "Pochi zinashika funguo zinazodhibiti crypto." },
      { objective: "O3", q: "Ni kipi salama kumpa mtu atakayekutumia crypto?", options: ["Anwani yako ya umma", "Maneno yako ya kurejesha", "Ufunguo wako binafsi", "Nywila ya benki yako"], answer: 0, why: "Anwani ya umma ni kama namba ya akaunti." },
      { objective: "O3", q: "Nani anadhibiti crypto iliyo katika pochi?", options: ["Kampuni ya simu", "Yeyote aliye na ufunguo binafsi au maneno ya kurejesha", "Serikali", "Mtu aliye na anwani ya umma"], answer: 1, why: "Ufunguo binafsi ndio ufunguo mkuu." },
      { objective: "O3", q: "Soko la kubadilishana (exchange) ni:", options: ["Kampuni ambapo watu hununua, huuza na kuhifadhi crypto", "Ofisi ya serikali", "Aina ya block ya blockchain", "Maneno ya kurejesha"], answer: 0, why: "Masoko ya kubadilishana ni kampuni za kufanya biashara na kuhifadhi crypto." },
      { objective: "O4", q: "Ipi ni hatari ya kampuni katika crypto?", options: ["Soko la kubadilishana linaweza kudukuliwa au kufungwa", "Bei haibadiliki", "Ina bima ya FDIC", "Haiwezi kuibwa"], answer: 0, why: "Masoko ya kubadilishana na programu yanaweza kudukuliwa au kufungwa." },
      { objective: "O4", q: "Je, kozi hii inakuambia ununue crypto?", options: ["Ndiyo, kila wakati", "Ndiyo, lakini Bitcoin tu", "Hapana; ongea na mtaalamu mwenye leseni unayemchagua kwa maamuzi ya pesa", "Ndiyo, kwa pesa ya kodi ya nyumba"], answer: 2, why: "Kozi inaeleza jinsi crypto inavyofanya kazi na hatari zake; si ushauri." },
      { objective: "O4", q: "Unatuma crypto kwa anwani isiyo sahihi. Kwa kawaida nini hutokea?", options: ["Inarudi yenyewe", "Kwa kawaida imepotea", "Benki inairejesha", "FTC inairudisha"], answer: 1, why: "Malipo ya blockchain kwa kawaida hayawezi kufutwa." },
      { objective: "O5", q: "Ipi ni dalili ya ulaghai wa crypto?", options: ["Ahadi ya faida ya uhakika", "Orodha ya bei iliyo wazi", "Duka linalokubali kadi", "Risiti kwa barua pepe"], answer: 0, why: "Ni matapeli tu wanaohakikisha faida." },
      { objective: "O5", q: "Mtu uliyekutana naye kwenye programu ya kutafuta wapenzi, ambaye hujawahi kumwona, anakuomba uwekeze katika crypto. Hii ni:", options: ["Mapenzi ya kweli", "Dalili ya kawaida ya ulaghai wa mapenzi", "Sharti la benki", "Sheria ya kodi"], answer: 1, why: "Watu wapya wa mtandaoni wanaosukuma crypto ni dalili ya ulaghai." },
      { objective: "O5", q: "Ofa ya kazi inasema lazima ulipe ada ya mafunzo kwa crypto. Unapaswa:", options: ["Kulipa haraka", "Kusimama; kazi zinazodai ada ya crypto ni dalili ya ulaghai", "Kulipa nusu", "Kutuma maneno yako ya kurejesha badala yake"], answer: 1, why: "FTC inaorodhesha kazi zinazodai ada ya crypto kama dalili ya ulaghai." },
      { objective: "O6", q: "Unaweza kuripoti udanganyifu wa crypto wapi nchini Marekani?", options: ["ReportFraud.ftc.gov na ic3.gov", "Kikundi chochote cha mitandao ya kijamii", "Simu ya msaada ya tapeli", "Hakuna mahali"], answer: 0, why: "FTC na IC3 ya FBI hupokea ripoti za udanganyifu." },
      { objective: "O6", q: "Unapaswa kuandika nini baada ya ulaghai?", options: ["Hakuna kitu", "Tarehe, kiasi, anwani ya pochi, namba ya muamala na picha za skrini", "Nywila yako tu", "Maneno yako ya kurejesha"], answer: 1, why: "Taarifa hizi zinawasaidia wachunguzi." },
      { objective: "O6", q: "Njia bora ya kumlinda mtu wa familia dhidi ya ulaghai wa crypto ni:", options: ["Kutozungumza kamwe kuhusu jambo hili", "Kumweleza dalili za hatari na mahali pa kuripoti", "Kumpa maneno yako ya kurejesha", "Kumwambia awekeze haraka"], answer: 1, why: "Mazungumzo mafupi kuhusu dalili za hatari yanaweza kuzuia hasara." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      6,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya kadi na uikague tena.",
    criteria: [
      {
        name: "Blockchain na crypto ni nini",
        objective: "O1",
        notYet: "Sentensi mbili hazipo, si sahihi au zimenakiliwa bila kueleza.",
        meets: "Sentensi mbili rahisi zinasema sawasawa blockchain na sarafu ya kidijitali ni nini.",
        exceeds: "Pia inasema kwa nini malipo ya crypto ni magumu kufuta."
      },
      {
        name: "Hatari tatu",
        objective: "O4",
        notYet: "Hatari chini ya tatu, au hatari moja si sahihi.",
        meets: "Hatari tatu sahihi kutoka bei, kupoteza, kampuni na ulaghai.",
        exceeds: "Kila hatari ina njia moja ya kujilinda."
      },
      {
        name: "Funguo na maneno ya kurejesha",
        objective: "O3",
        notYet: "Kadi haisemi maneno ya kurejesha yawe siri, au inasema ni salama kuyatoa.",
        meets: "Kadi inasema usimpe mtu yeyote kamwe maneno ya kurejesha wala ufunguo binafsi.",
        exceeds: "Pia inasema anwani ya umma ndiyo kitu pekee salama kutoa ili kupokea crypto."
      },
      {
        name: "Dalili nne za ulaghai",
        objective: "O5",
        notYet: "Dalili chini ya nne, au dalili moja si sahihi.",
        meets: "Dalili nne sahihi, na tangazo au ujumbe halisi umewekwa alama kwenye kila dalili iliyopo.",
        exceeds: "Pia inaandika jibu salama: simama, usilipe wala usibonyeze, na ongea na mtu unayemwamini."
      },
      {
        name: "Mahali pa kuripoti",
        objective: "O6",
        notYet: "Hakuna mahali rasmi pa kuripoti, au mahali pasipo rasmi.",
        meets: "Angalau mahali pawili rasmi pa kuripoti, kama ReportFraud.ftc.gov na ic3.gov.",
        exceeds: "Pia inaorodhesha taarifa za kuandika na inaonya kuhusu ulaghai wa kurejesha pesa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya kadi ya usalama wa crypto",
      "Wanafunzi wanaoripoti kutambua na kupuuza ujumbe au simu ya ulaghai wa crypto ndani ya siku 30 baada ya kozi (utafiti wa kufuatilia)",
      "Wanafunzi wanaomshirikisha mtu wa familia au rafiki kadi ya usalama au dalili za hatari",
      "Programu washirika zinaripoti wanachama wachache wanaopoteza pesa kwa ulaghai wa crypto, au ulaghai mwingi zaidi unaoripotiwa kwenye tovuti rasmi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti ya kusoma kurasa rasmi za tahadhari (FTC, FDIC, SEC, CFTC)",
      "Karatasi na kalamu, au programu ya kuandika, kwa kadi ya ukurasa mmoja ya usalama wa crypto",
      "Tangazo, ujumbe au chapisho moja halisi la crypto la kuchunguza (picha za skrini zinafaa)",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Sema mwanzoni kwamba kozi si ushauri wa kifedha na haimwambii mtu yeyote anunue au auze crypto; peleka maswali ya pesa kwa mtaalamu mwenye leseni anayechaguliwa na mwanafunzi.",
      "Usiwaombe wanafunzi kamwe kufungua programu ya crypto, kuunganisha pochi au kuandika maneno ya kurejesha darasani, hata kama mazoezi.",
      "Leta mifano michache iliyochapishwa au picha za skrini za ujumbe halisi wa ulaghai ili wanafunzi wasio na mfano bado waweze kufanya ukaguzi wa dalili za hatari.",
      "Baadhi ya wanafunzi huenda walipoteza pesa kwa ulaghai; zungumza bila kulaumu na waonyeshe jinsi ya kuripoti.",
      "Waalike wanafunzi walete mtu wa familia, hasa ndugu mzee au kijana anayeanza kutumia programu za pesa, na jozi zitengeneze kadi ya usalama pamoja."
    ]
  }
};
