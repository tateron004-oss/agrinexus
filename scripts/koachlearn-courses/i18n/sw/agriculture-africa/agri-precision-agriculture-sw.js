"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-precision-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COPERNICUS = { name: "Copernicus Data Space Ecosystem na Copernicus Browser (data ya Sentinel ya bure na huria)", url: "https://dataspace.copernicus.eu/" };
const ESA_S2 = { name: "Shirika la Anga la Ulaya (ESA): Sentinel-2 (pikseli za m 10, kila siku 5)", url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2" };
const DEAFRICA = { name: "Digital Earth Africa (huduma za bure za setilaiti, zikiwemo NDVI isiyo ya kawaida na ramani za mashamba)", url: "https://www.digitalearthafrica.org/" };
const GPS_ACC = { name: "GPS.gov: Usahihi wa GPS (simu janja karibu m 4.9 chini ya anga wazi)", url: "https://archive.gps.gov/systems/gps/performance/accuracy/" };
const IFDC_KITS = { name: "IFDC: Tathmini ya vifaa vya kubebeka vya kupima udongo, mafunzo yaliyopatikana", url: "https://hub.ifdc.org/handle/20.500.14297/2026" };
const EMBU = { name: "Tathmini ya utendaji wa vihisi vya karibu vya kupima udongo katika mashamba madogo, Kaunti ya Embu, Kenya", url: "https://alliancebioversityciat.org/publications-data/performance-evaluation-proximal-sensors-soil-assessment-smallholder-farms-embu" };
const ISDA = { name: "iSDAsoil: ramani za sifa za udongo za Afrika nzima kwa m 30 (PLOS Biology, 2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8584968/" };
const KALRO = { name: "Shirika la Utafiti wa Kilimo na Mifugo la Kenya (KALRO)", url: "https://www.kalro.org" };

module.exports = {
  id: "agri-precision-agriculture-sw",
  lang: "sw",
  translationOf: "agri-precision-agriculture",
  category: "Agriculture (Africa)",
  name: "Kilimo cha Usahihi: Ufuatiliaji kwa Setilaiti na Vihisi vya Udongo",
  skills: "Kuona tofauti ndani ya shamba, Kusoma kwa makini ramani za bure za NDVI za setilaiti, Kupima shamba kwa GPS ya simu, Kuchagua na kuamini vipimo na vihisi vya udongo, Kulinganisha gharama na faida, Kutengeneza ramani ya kanda za shamba na mpango kwa kila kanda",
  outcome: "kugawa moja ya mashamba yako katika kanda kwa kutumia ramani za bure za setilaiti, GPS ya simu, vipimo vya udongo na macho na kumbukumbu zako, na kuandika mpango wa gharama ndogo kwa kila kanda ambao unaweza kuumudu na kuukagua.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wakulima wa biashara wanaokua, mameneja wa mashamba, vijana wajasiriamali wa kilimo na maafisa ugani wanaotaka kulima \"kwa usahihi\" bila mashine kubwa. Kilimo cha usahihi kinamaanisha kuipa kila sehemu ya shamba kile inachohitaji, badala ya kulitendea shamba zima kwa njia moja.",
    "Utajifunza kuona tofauti ndani ya shamba, kusoma ramani za bure za mazao kutoka setilaiti (na kujua mipaka yake), kupima shamba na kanda zake kwa simu, kuchagua vipimo na vihisi vya udongo na kuamua uviamini kiasi gani, na kuamua kama zana inastahili gharama yake. Unamaliza ukiwa na ramani ya kanda za shamba lako na mpango kwa kila kanda.",
    "Huhitaji droni. Ukitaka kupima ramani kwa droni, kozi za \"Droni kwa Ufuatiliaji wa Kilimo\" zinafundisha hilo. Takwimu za pesa ni mifano tu. Kila somo linaishia na kazi katika shamba lako; jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tengeneza ramani ya kanda za moja ya mashamba yako: tembea na urekodi mpaka kwa app ya GPS ya simu, gawa shamba katika kanda 2 hadi 4 kwa kutumia angalau aina mbili za ushahidi (NDVI ya setilaiti katika tarehe mbili, matokeo ya kipimo cha udongo au kifaa cha kupima, mavuno ya zamani, unachokiona), weka kila kanda lebo ya ukubwa wake na ushahidi wake, na uandike mpango kwa kila kanda (utakachofanya tofauti, gharama yake kwa pesa ya nchi yako kama mfano, na jinsi utakavyokagua msimu ujao kama ulifanya kazi).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa biashara wanaokua, mameneja wa mashamba, vijana wajasiriamali wa kilimo na maafisa ugani nchini Kenya, Nigeria, Ghana, Côte d'Ivoire, Senegal na kote Afrika, wanaolima mahindi, mpunga, mtama, muhogo, maharagwe, karanga, nyanya, kahawa na kakao katika mashamba ya chini ya hekta moja hadi hekta kadhaa za makumi.",
    startingPoint: "Wanayajua mashamba yao vizuri kwa macho na wanatumia simu janja. Wengi wanalitendea kila shamba kwa njia moja: kiwango kimoja cha mbolea, kiwango kimoja cha mbegu. Wachache wametumia ramani ya setilaiti, zana ya GPS ya simu ya kupima eneo au kipimo cha udongo, na wengi wamesikia madai makubwa kuhusu vihisi na apps.",
    gap: "Ndani ya shamba moja, udongo, maji na mavuno yanaweza kutofautiana sana, kwa hiyo kiwango kimoja kinapoteza pembejeo katika sehemu fulani na kunyima sehemu nyingine. Wanafunzi wanahitaji kuona tofauti hizi kwa zana za bure na za gharama ndogo, kujua zana zipi zinaaminika kwa kitu gani, na kuzigeuza kuwa mipango rahisi ya kanda inayolipa katika shamba dogo.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kozi hii inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: simu janja; kompyuta inasaidia kwa vitazamaji vya setilaiti lakini si lazima",
      "Mashamba madogo yenye mazao mchanganyiko: picha za bure za setilaiti (pikseli za karibu m 10) si za kina kwa vipande vya chini ya karibu nusu hekta",
      "Mawingu katika msimu wa mvua yanapunguza picha za setilaiti",
      "Pesa: zana za gharama ndogo kwanza; takwimu zote ni mifano; hakuna bidhaa inayopendekezwa",
      "Viuatilifu na mbolea: bidhaa zilizosajiliwa tu, zikitumiwa kama lebo inavyosema"
    ],
    prerequisites: "Kuweza kutumia simu janja bila shida. \"Afya na Rutuba ya Udongo\" na \"Data na Teknolojia katika Kilimo\" zinasaidia kuzichukua kwanza."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitembea katika moja ya mashamba yako", action: "kuorodhesha tofauti ndani ya shamba ambazo kilimo cha usahihi kinaweza kuzishughulikia", standard: "ukitaja angalau tofauti tatu na jinsi ulivyoona kila moja" },
    { id: "O2", condition: "Ukitumia kitazamaji cha bure cha setilaiti kama Copernicus Browser", action: "kupata shamba lako na kulinganisha NDVI yake katika tarehe mbili", standard: "na kusema kitu kimoja ramani inachoonyesha na kitu kimoja isichoweza kuonyesha" },
    { id: "O3", condition: "Ukitumia app ya GPS ya simu", action: "kurekodi mpaka wa shamba na kingo za kanda zake na kusoma maeneo yake", standard: "ukikubali kosa la karibu mita 5" },
    { id: "O4", condition: "Ukipewa chaguo la kipimo cha maabara, kifaa cha kupima au kihisi cha mkononi", action: "kuchagua njia ya kupima udongo, kuchukua sampuli kutoka kila kanda na kusema uamini kila tokeo kiasi gani", standard: "ukiamini pH kuliko vipimo vya naitrojeni, fosforasi na potasiamu kutoka vifaa vya kupima" },
    { id: "O5", condition: "Ukipewa zana au mbinu ya usahihi na takwimu za shamba lako", action: "kulinganisha gharama yake na faida inayotarajiwa na kuamua kama uitumie", standard: "ukitumia bajeti ndogo rahisi kwa pesa ya nchi yako" },
    { id: "O6", condition: "Ukipewa ushahidi kutoka angalau vyanzo viwili", action: "kugawa shamba katika kanda 2 hadi 4 za usimamizi na kuandika mpango kwa kila kanda", standard: "kila mpango ukiwa wa gharama unayoimudu na unaoweza kukaguliwa msimu ujao" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuona shamba lako kwa sehemu",
      lessons: [
        {
          title: "Kilimo cha usahihi ni nini, katika shamba dogo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha tofauti ndani ya moja ya mashamba yako ambazo unaweza kuzisimamia kila moja peke yake.",
          text: [
            "Kilimo cha usahihi kinamaanisha kusimamia sehemu za shamba kwa njia tofauti, kwa sababu ni tofauti. Kona moja ya shamba la mahindi inaweza kuwa ya mchanga na kavu, upande wa chini ukawa na maji yaliyotuama, na katikati kukawa na rutuba kwa sababu ng'ombe walifugwa hapo. Kulitendea shamba zima kwa njia moja kunapoteza mbolea na mbegu katika sehemu fulani na kunyima sehemu nyingine.",
            "Katika mashamba makubwa hili linafanywa kwa matrekta yanayobadilisha kiwango yenyewe. Katika shamba dogo unaweza kufanya jambo hilo hilo kwa mkono: samadi zaidi pale udongo ni duni, mifereji katika sehemu yenye maji mengi, aina tofauti ya mbegu kwenye mwinuko mkavu, au kutoweka mbolea pale ambapo zao halilipi kamwe. Wazo ni lile lile: chunguza, pima, amua kwa kanda, na ukague matokeo.",
            "Tayari unajua mengi kwa macho. Tembea shambani na uandike mahali zao ni fupi, la njano au lenye mabaka, mahali maji yanatuama, mahali magugu kama kiduha (Striga) yanatokea, na mahali mavuno yalikuwa mazuri au mabaya. Waulize wafanyakazi wanaopalilia na kuvuna: wanaona kila kona. Ramani za setilaiti, GPS na vipimo vya udongo, katika masomo yanayofuata, vinakusaidia kuthibitisha na kupima unachokiona."
          ],
          steps: ["Tembea shamba zima, pembeni na katikati.", "Andika mahali zao ni dhaifu, mahali maji yanatuama, mahali magugu au wadudu ni wengi zaidi.", "Waulize wafanyakazi mahali mavuno ni mazuri au mabaya.", "Andika kila tofauti na jinsi ulivyoiona.", "Ziweke alama kwenye mchoro rahisi wa shamba."],
          words: [["Kilimo cha usahihi", "kusimamia sehemu tofauti za shamba kwa njia tofauti, kwa kutegemea uchunguzi na vipimo."], ["Utofauti", "kiasi ambacho udongo, maji au ukuaji wa zao hubadilika kutoka sehemu moja ya shamba hadi nyingine."], ["Kanda ya usimamizi", "sehemu ya shamba inayosimamiwa kama kitu kimoja kwa sababu inatenda kwa namna inayofanana."]],
          slides: [
            { title: "Shamba moja, sehemu nyingi", bullets: ["Mwinuko wa mchanga, upande wa chini wenye maji, zizi la zamani lenye rutuba", "Matumizi yale yale yanapoteza pembejeo"] },
            { title: "Usahihi kwa mkono", bullets: ["Samadi zaidi pale udongo ni duni", "Mifereji katika sehemu yenye maji mengi", "Aina sahihi ya mbegu kwa kila sehemu"] },
            { title: "Chunguza, pima, amua, kagua", bullets: ["Macho na kumbukumbu zako kwanza", "Zana zinathibitisha na kupima"] },
            { title: "Tembea na uulize", bullets: ["Zao dhaifu, la njano au lenye mabaka", "Maji yaliyotuama, magugu, wadudu", "Waulize wafanyakazi"] }
          ],
          tryIt: "Tembea katika moja ya mashamba yako. Chora mchoro rahisi na uweke alama angalau tofauti tatu (kwa mfano sehemu dhaifu, sehemu yenye maji, sehemu yenye magugu). Kando ya kila moja, andika jinsi ulivyoiona: kwa macho, kutokana na mavuno, au kutoka kwa wafanyakazi.",
          youCanNow: "kuona shamba kama sehemu zinazotofautiana, na kuorodhesha tofauti unazoweza kuzisimamia kila moja peke yake.",
          quickCheck: [
            { objective: "O1", q: "Wazo kuu la kilimo cha usahihi ni lipi?", options: ["Kununua mashine za bei ghali zaidi", "Kutumia kiwango kimoja kila mahali", "Kusimamia sehemu tofauti za shamba kwa njia tofauti", "Kulima kwa droni tu"], answer: 2, why: "Kinaipa kila sehemu ya shamba kile inachohitaji." },
            { objective: "O1", q: "Nani anaweza kukuambia haraka mahali mavuno ni duni shambani?", options: ["Wafanyakazi wanaolipalilia na kulivuna", "Tangazo la kihisi", "Mnunuzi mjini", "Hakuna mtu"], answer: 0, why: "Wafanyakazi wanaona kila kona ya shamba msimu mzima." }
          ]
        },
        {
          title: "Ramani za bure za setilaiti na kile NDVI inachoonyesha",
          objectives: ["O2"],
          minutes: 6,
          goal: "Linganisha NDVI ya shamba lako katika tarehe mbili kwenye kitazamaji cha bure cha setilaiti.",
          text: [
            "Setilaiti za Ulaya za Sentinel-2 zinapiga picha Afrika nzima karibu kila siku 5, kwa pikseli za mita 10 (pikseli moja ni mraba wa m 10 x m 10). Picha ni za bure na huria. Copernicus Browser inakuruhusu kuziona bila kulipa; unaweza kuanza bila akaunti, na akaunti ya bure inakupa machaguo zaidi. Digital Earth Africa pia inatoa huduma za bure za setilaiti zilizoundwa kwa ajili ya Afrika, kama ramani za NDVI isiyo ya kawaida na ramani za mashamba.",
            "NDVI (Normalised Difference Vegetation Index, kiashiria cha uoto) ni namba inayotokana na rangi ambazo mimea huakisi. Majani mabichi, yenye afya na mengi yanatoa NDVI ya juu; udongo mtupu, zao kavu au lililo hafifu linatoa NDVI ya chini. Kwenye kitazamaji, tafuta shamba lako, chagua mwonekano wa NDVI, na ulinganishe tarehe mbili, kwa mfano wiki nne na wiki nane baada ya kupanda. Sehemu inayobaki chini wakati sehemu nyingine ziko juu inastahili kutembelewa.",
            "Kile ambacho NDVI HAIONYESHI: chanzo. NDVI ya chini inaweza kuwa ukame, maji yaliyotuama, upungufu wa naitrojeni, wadudu, magonjwa, magugu au kupanda kwa kuchelewa. Pia haiwezi kuona chini ya mawingu, na katika msimu wa mvua unaweza kusubiri wiki kadhaa kupata picha safi. Katika mashamba madogo kuliko karibu nusu hekta, au vipande virefu vyembamba, pikseli za m 10 si za kina na zinachanganya zao la jirani au miti. Magugu pia yanaweza kuonekana mabichi na yenye afya. Kwa hiyo NDVI inakuambia wapi pa kuangalia, na miguu yako inakuambia kwa nini."
          ],
          steps: ["Fungua Copernicus Browser kwenye kompyuta au kivinjari cha simu.", "Tafuta eneo lako na uvute karibu hadi shamba lako.", "Chagua picha yenye mawingu machache na mwonekano wa NDVI.", "Linganisha tarehe mbili katika msimu mmoja.", "Weka alama sehemu za chini kwenye mchoro wako na uzitembelee ili upate chanzo."],
          words: [["Sentinel-2", "jozi ya setilaiti za Ulaya zinazopiga picha za bure za dunia karibu kila siku 5 kwa kina cha m 10."], ["NDVI", "namba inayotokana na rangi za setilaiti inayoonyesha jinsi mimea ilivyo mibichi na mingi."], ["Pikseli", "mraba mmoja wa picha ya setilaiti; kwa Sentinel-2, m 10 x m 10."]],
          slides: [
            { title: "Picha za bure za setilaiti", bullets: ["Sentinel-2: karibu kila siku 5, pikseli za m 10", "Copernicus Browser: bure kutazama", "Digital Earth Africa: huduma za bure kwa Afrika"] },
            { title: "NDVI inachoonyesha", bullets: ["Juu: mimea mibichi na mingi", "Chini: udongo mtupu, zao kavu au hafifu", "Linganisha tarehe mbili"] },
            { title: "NDVI HAIONYESHI", bullets: ["Chanzo cha sehemu ya chini", "Chochote chini ya mawingu", "Undani katika vipande vya chini ya karibu nusu hekta"] },
            { title: "Ramani inaonyesha wapi, miguu kwa nini", bullets: ["Weka alama sehemu za chini", "Zitembelee na upate chanzo"] }
          ],
          sources: [COPERNICUS, ESA_S2, DEAFRICA],
          tryIt: "Fungua Copernicus Browser, tafuta moja ya mashamba yako (au shamba lililo karibu nawe), na uangalie NDVI katika tarehe mbili safi msimu huu. Weka alama sehemu yoyote ya chini kwenye mchoro wako, kisha uitembelee na uandike unachofikiri ni chanzo.",
          youCanNow: "kusoma ramani ya bure ya NDVI ya setilaiti ya shamba lako na kuitumia kuamua wapi pa kuangalia, si chanzo ni nini.",
          quickCheck: [
            { objective: "O2", q: "Sehemu ya shamba lako la mahindi ina NDVI ya chini. Hiyo inakuambia nini?", options: ["Ina upungufu wa naitrojeni", "Ina viwavijeshi vamizi (fall armyworm)", "Inahitaji umwagiliaji", "Mimea hapo si mibichi sana au ni hafifu, kwa hiyo itembelee ujue kwa nini"], answer: 3, why: "NDVI inaonyesha mahali ukuaji ni dhaifu, si chanzo." },
            { objective: "O2", q: "Kwa nini ramani ya bure ya Sentinel-2 inaweza kuwa ngumu kutumia kwenye kipande cha hekta 0.2?", options: ["Pikseli za m 10 si za kina na zinachanganya ardhi ya jirani", "Picha ni za Ulaya tu", "Inagharimu pesa nyingi mno", "NDVI haifanyi kazi kwa mahindi"], answer: 0, why: "Kipande cha ha 0.2 ni pikseli kama ishirini tu, nyingi zikichanganyika na kingo zake." }
          ]
        },
        {
          title: "Kupima shamba kwa GPS ya simu yako",
          objectives: ["O3"],
          minutes: 5,
          goal: "Rekodi mpaka wa shamba na kanda zake kwa app ya GPS ya simu na usome maeneo yake.",
          text: [
            "GPS ya simu inaweza kupima ramani ya shamba lako. Apps nyingi za bure zinaweza kurekodi mpaka unaoutembea au kukuruhusu kuweka alama kuzunguka shamba kisha kuonyesha eneo. Unaweza pia kuweka pini kwenye app ya ramani na kushiriki viwianishi vyake. Kujua ukubwa halisi wa shamba na wa kila kanda ni muhimu: mbolea, mbegu, kazi na mavuno kwa ekari au kwa hekta vyote vinategemea hilo, na wakulima wengi hugundua kwamba shamba lao ni kubwa au dogo kuliko walivyodhani.",
            "GPS si sahihi kabisa. Chini ya anga wazi, simu janja kwa kawaida ni sahihi ndani ya karibu mita 5, na mbaya zaidi karibu na miti, majengo na mabondeni. Katika kipande kidogo kosa hilo lina maana: tembea polepole, simama sekunde chache katika kila kona, weka simu chini ya anga wazi, na utembee mpaka mara mbili ili kulinganisha. Maeneo hayo mawili yakitofautiana sana, utembee tena.",
            "Pima kanda pia. Tembea kingo za sehemu yenye maji au mwinuko wa mchanga na uihifadhi kama umbo tofauti, au weka pini katika kona zake. Lipe kila umbo jina la shamba na kanda (\"S2 Kanda A maji\"), na uhifadhi faili au picha ya skrini yenye eneo. Maumbo haya yanakuwa msingi wa ramani yako ya kanda katika Somo la 6."
          ],
          steps: ["Fungua app ya GPS ya kupima eneo au ya ramani nje, chini ya anga wazi.", "Tembea mpaka wa shamba polepole, ukisimama katika kila kona.", "Soma na urekodi eneo; litembee tena ili kukagua.", "Tembea au weka pini kwenye kingo za kila kanda na uhifadhi kila moja kwa jina.", "Hifadhi faili au picha ya skrini yenye maeneo."],
          words: [["GPS", "Global Positioning System: setilaiti zinazoiwezesha simu kujua iko wapi duniani."], ["Mpaka", "ukingo wa shamba."], ["Hekta", "eneo la m 100 x m 100, karibu ekari 2.5."]],
          slides: [
            { title: "Simu yako inaweza kupima shamba", bullets: ["Tembea mpaka au weka alama za kona", "Soma eneo", "Ukubwa wa shamba unaongoza kila hesabu ya kwa ekari"] },
            { title: "GPS si sahihi kabisa", bullets: ["Karibu m 5 chini ya anga wazi", "Mbaya zaidi karibu na miti, majengo, mabonde"] },
            { title: "Vipimo bora zaidi", bullets: ["Tembea polepole, simama kwenye kona", "Tembea mara mbili na ulinganishe"] },
            { title: "Pima kanda", bullets: ["Umbo moja lililohifadhiwa kwa kila kanda", "Jina: S2 Kanda A maji", "Hifadhi eneo"] }
          ],
          sources: [GPS_ACC],
          tryIt: "Tumia app ya GPS ya simu kutembea mpaka wa shamba moja mara mbili na uandike maeneo yote mawili. Kisha pima ukingo wa kanda moja uliyoipata katika Somo la 1, ipe jina, na uandike eneo lake.",
          youCanNow: "kupima shamba na kanda zake kwa GPS ya simu na kurekodi maeneo yake, ukizingatia kosa la GPS.",
          quickCheck: [
            { objective: "O3", q: "Ulitembea mpaka wa shamba mara mbili na ukapata ekari 0.9 na ekari 1.4. Unafanya nini?", options: ["Kuchukua wastani na kuacha", "Kulitembea tena polepole, ukisimama kwenye kona, chini ya anga wazi", "Kutumia namba kubwa zaidi", "Kuacha kutumia GPS"], answer: 1, why: "Tofauti kubwa inamaanisha vipimo vibaya; tembea tena kwa uangalifu." },
            { objective: "O3", q: "GPS ya simu kwa kawaida si sahihi zaidi wapi?", options: ["Katika shamba wazi", "Siku ya jua", "Katika uwanda tambarare", "Chini ya miti na karibu na majengo"], answer: 3, why: "Miti na majengo yanazuia na kuakisi mawimbi ya setilaiti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuona shamba lako kwa sehemu",
        questions: [
          { objective: "O1", q: "Mkulima mdogo anaweka samadi ya ziada tu kwenye upande wa mchanga, wenye udongo duni wa shamba. Hiki ni:", options: ["Upotevu", "Kilimo cha usahihi kwa mkono", "Kinyume cha sheria", "Kinawezekana tu kwa trekta"], answer: 1, why: "Kusimamia sehemu za shamba kwa njia tofauti ndio kiini cha kilimo cha usahihi." },
          { objective: "O2", q: "Setilaiti za Sentinel-2 zinapiga picha ya mahali pale pale mara ngapi kwa takriban?", options: ["Karibu kila siku 5", "Mara moja kwa mwaka", "Kila saa", "Ukiomba tu"], answer: 0, why: "Setilaiti hizo mbili zinarudi karibu kila siku 5; mawingu yanaweza kuficha baadhi ya picha." },
          { objective: "O2", q: "Kipi ni kitu ambacho NDVI HAIWEZI kukuambia?", options: ["Mahali zao ni bichi zaidi", "Mahali ukuaji ni dhaifu", "Kwa nini sehemu ni dhaifu", "Tarehe mbili zinalinganishwaje"], answer: 2, why: "Vyanzo vingi vinatoa NDVI ya chini; unaitembelea sehemu hiyo ili ujue ni kipi." },
          { objective: "O3", q: "Usahihi wa kawaida wa GPS ya simu janja chini ya anga wazi ni karibu:", options: ["Sentimita 1", "Mita 500", "Kilomita 5", "Mita 5"], answer: 3, why: "Karibu m 4.9 chini ya anga wazi, mbaya zaidi karibu na miti na majengo." },
          { objective: "O3", q: "Kwa nini kujua eneo halisi la shamba ni muhimu?", options: ["Mbegu, mbolea, kazi na mavuno kwa ekari vyote vinategemea hilo", "Wanunuzi wanalipa kwa eneo", "Apps za GPS zinalihitaji", "Si muhimu"], answer: 0, why: "Maeneo yasiyo sahihi yanafanya kila hesabu ya kwa ekari kuwa si sahihi." }
        ]
      }
    },
    {
      name: "Sura 2: Kupima udongo na kupanga kwa kanda",
      lessons: [
        {
          title: "Vifaa vya kupima udongo na vihisi: uviamini kiasi gani",
          objectives: ["O4"],
          minutes: 6,
          goal: "Chagua njia ya kupima udongo kwa kila kanda na useme uamini matokeo yake kiasi gani.",
          text: [
            "Kuna njia tatu kuu za kupima udongo. Kipimo cha maabara (kutoka taasisi ya taifa ya utafiti kama KALRO, chuo kikuu au maabara binafsi iliyoidhinishwa) ndicho sahihi zaidi, kinachukua siku hadi wiki na kinagharimu zaidi. Kifaa cha kupima shambani (vipande vya rangi au kemikali ndani ya mirija) kinatoa matokeo ya haraka papo hapo. Kihisi au mita ya kielektroniki ya mkononi inatoa kipimo kwa dakika chache na mara nyingi inauzwa pamoja na app.",
            "Majaribio huru ya vifaa vya kubebeka, kama tathmini ya IFDC, yalikuta vinakubaliana vizuri na maabara kwa pH ya udongo lakini matokeo yasiyo thabiti kwa naitrojeni, fosforasi na potasiamu. Utafiti katika Kaunti ya Embu, Kenya, ulikuta kwamba baadhi ya vihisi vya kisasa vya mkononi vinaweza kutabiri vizuri sifa kadhaa za udongo, lakini vifaa hivyo ni ghali na vinahitaji kurekebishwa kwa kulinganisha na sampuli za maabara. Kuwa makini na vijiti vya bei nafuu vinavyodai kusoma NPK papo hapo: takwimu za usahihi za wauzaji wenyewe si ushahidi huru.",
            "Mpango unaofaa: peleka sampuli mchanganyiko moja nzuri kwa kila kanda maabara kila baada ya miaka michache, na utumie kifaa au mita kwa ukaguzi wa haraka wa pH kati ya vipimo vya maabara. Chukua kila sampuli kwa njia ile ile (vipande vidogo vingi vya udongo, vimechanganywa, kutoka kina kile kile, ukiepuka njia na marundo ya samadi). Ramani za bure za iSDAsoil zinakadiria sifa za udongo kote Afrika kwa m 30 na zinasaidia kuona picha ya jumla, lakini ni makadirio kutoka modeli, si kipimo cha shamba lako."
          ],
          steps: ["Amua: kipimo cha maabara, kifaa au kihisi, kwa kila swali ulilonalo.", "Chukua sampuli mchanganyiko kwa kila kanda: vipande vingi, kina kile kile, vimechanganywa.", "Peleka sampuli kwenye maabara iliyoidhinishwa kila baada ya miaka michache.", "Tumia kifaa au mita kwa ukaguzi wa haraka wa pH katikati.", "Andika kila tokeo kando ya kanda yake, pamoja na njia iliyotumika."],
          words: [["Sampuli mchanganyiko", "vipande vingi vidogo vya udongo kutoka kanda moja vilivyochanganywa kuwa sampuli moja."], ["Urekebishaji (calibration)", "kukagua na kurekebisha kihisi kwa kulinganisha na tokeo la maabara linaloaminika."], ["pH", "kipimo cha kiasi cha asidi au alkali katika udongo."]],
          slides: [
            { title: "Njia tatu za kupima", bullets: ["Maabara: sahihi zaidi, polepole, ghali zaidi", "Kifaa cha shambani: haraka, papo hapo", "Kihisi cha mkononi: dakika chache, mara nyingi na app"] },
            { title: "Uviamini kiasi gani", bullets: ["Vifaa: vizuri kwa pH", "Vifaa: si thabiti kwa N, P na K", "Vihisi vya kisasa vinahitaji urekebishaji"] },
            { title: "Mpango unaofaa", bullets: ["Sampuli moja ya maabara kwa kila kanda kila baada ya miaka michache", "Kifaa au mita kwa ukaguzi wa haraka wa pH", "Njia ile ile ya kuchukua sampuli kila mara"] },
            { title: "Ramani za bure za udongo", bullets: ["iSDAsoil: makadirio kwa m 30", "Picha ya jumla, si kipimo cha shamba lako"] }
          ],
          sources: [IFDC_KITS, EMBU, ISDA, KALRO],
          tryIt: "Kwa kila kanda kwenye mchoro wako, andika kipimo utakachotumia (maabara, kifaa au kihisi) na kwa nini. Chukua, au panga kuchukua, sampuli mchanganyiko moja kwa kila kanda, na uandike ungeamini kiasi gani tokeo la kifaa kwa pH na kwa naitrojeni.",
          youCanNow: "kuchagua njia ya kupima udongo kwa kila kanda na kupima uamini matokeo yake kiasi gani.",
          quickCheck: [
            { objective: "O4", q: "Vifaa vya kubebeka vya kupima udongo vinaaminika zaidi kwa tokeo lipi, ukilinganisha na maabara?", options: ["Naitrojeni", "Potasiamu", "pH ya udongo", "Fosforasi"], answer: 2, why: "Majaribio huru yalikuta pH inakubaliana vizuri lakini N, P na K si thabiti." },
            { objective: "O4", q: "Muuzaji anasema kijiti chake cha bei nafuu kinasoma NPK papo hapo kwa usahihi wa asilimia 95. Unapaswa:", options: ["Kuomba matokeo ya majaribio huru na kulinganisha vipimo vichache na maabara", "Kukinunua mara moja", "Kukitumia badala ya vipimo vyote vya maabara", "Kukiamini kwa sababu kina app"], answer: 0, why: "Takwimu za wauzaji wenyewe si ushahidi huru; linganisha na maabara." }
          ]
        },
        {
          title: "Gharama dhidi ya faida, na droni zinasaidia lini",
          objectives: ["O5"],
          minutes: 5,
          goal: "Linganisha gharama ya zana au mbinu ya usahihi na faida yake inayotarajiwa.",
          text: [
            "Zana ya usahihi ina maana tu kama faida ni kubwa kuliko gharama. Tumia bajeti ndogo rahisi (partial budget): nitapata au kuokoa kiasi gani cha ziada (mavuno zaidi, mbolea au mbegu chache zinazopotea), na itagharimu kiasi gani cha ziada (kipimo, kihisi, app, muda wako, kazi)? Mfano tu: kama kugawa kanda kunaokoa mifuko 2 ya mbolea kwenye kanda dhaifu ambayo haikuwahi kulipa (2 x GHS 400 = GHS 800 zimeokolewa), na kipimo cha maabara kiligharimu GHS 300, kinalipa.",
            "Katika mashamba madogo, anza na kilicho bure au cha bei nafuu: macho yako, kumbukumbu, GPS ya simu na ramani za bure za setilaiti. Kisha tumia pesa kwa kipimo cha maabara kwa kila kanda. Nunua kihisi cha mkononi tu kama utakitumia mara nyingi na unaweza kukikagua kwa kulinganisha na maabara. Vikundi vinaweza kugawana gharama: chama cha ushirika nchini Côte d'Ivoire au kikundi cha wakulima nchini Nigeria kinaweza kununua mita moja au kulipia vipimo vya maabara pamoja.",
            "Droni zinatoa picha za sentimita chache badala ya mita 10, zinaruka chini ya mawingu, na zinaweza kuruka siku unayohitaji. Zinasaidia kwa mazao ya thamani kubwa, mashamba makubwa zaidi, au kwa kikundi kinachonunua huduma pamoja. Zinagharimu zaidi sana, na kuziendesha kunahitaji leseni kutoka mamlaka ya usafiri wa anga. Ukifikiri unahitaji moja, chukua kozi za \"Droni kwa Ufuatiliaji wa Kilimo\" na \"Droni za Kilimo: Uchambuzi wa Data na Kilimo cha Usahihi\"; kozi hii hairudii mafunzo hayo."
          ],
          steps: ["Andika gharama ya zana au mbinu: pesa, muda, kazi.", "Andika mapato ya ziada au akiba unayotarajia, kwa namba za mfano.", "Linganisha: faida toa gharama.", "Anza na zana za bure; kisha kipimo cha maabara kwa kila kanda; kisha kihisi au huduma ya droni tu kama inalipa.", "Fikiria kugawana gharama na kikundi."],
          words: [["Bajeti ndogo (partial budget)", "hesabu rahisi ya gharama za ziada na faida za ziada za badiliko moja tu."], ["Huduma ya droni", "biashara inayorusha droni juu ya shamba lako kwa malipo."], ["Mapato", "unachopata kwa kile unachotumia."]],
          slides: [
            { title: "Faida lazima ishinde gharama", bullets: ["Mapato ya ziada au akiba", "Toa gharama ya ziada", "Mfano tu: GHS 800 zimeokolewa dhidi ya kipimo cha GHS 300"] },
            { title: "Tumia pesa kwa mpangilio huu", bullets: ["Bure: macho, kumbukumbu, GPS, setilaiti", "Kipimo cha maabara kwa kila kanda", "Kihisi tu kama kinatumiwa mara nyingi na kinakaguliwa"] },
            { title: "Gawaneni gharama", bullets: ["Vikundi na vyama vya ushirika", "Mita moja au vipimo vingi vya maabara pamoja"] },
            { title: "Droni zinasaidia lini", bullets: ["Undani wa sentimita, chini ya mawingu", "Mazao ya thamani kubwa, mashamba makubwa, huduma za vikundi", "Angalia kozi za droni; leseni inahitajika"] }
          ],
          tryIt: "Chagua zana au mbinu moja ya usahihi kwa shamba lako (kipimo cha maabara kwa kila kanda, mita ya udongo, huduma ya droni, au mbolea kwa kanda). Andika bajeti ndogo kwa namba za mfano kwa pesa ya nchi yako: gharama ya ziada, faida ya ziada, na uamuzi wako.",
          youCanNow: "kuamua kama zana ya usahihi inastahili kwa shamba lako kwa bajeti ndogo rahisi.",
          quickCheck: [
            { objective: "O5", q: "Katika shamba dogo, unapaswa kwa kawaida kujaribu nini kwanza?", options: ["Droni", "Mtandao mkubwa wa vihisi", "Usajili wa app wa bei ghali", "Macho yako, kumbukumbu, GPS ya simu na ramani za bure za setilaiti"], answer: 3, why: "Anza na zana za bure na utumie pesa tu pale inapolipa." },
            { objective: "O5", q: "Mita ya udongo inagharimu zaidi ya utakachookoa katika misimu mitano. Chaguo la busara ni lipi?", options: ["Kuinunua hata hivyo", "Kugawana gharama kupitia kikundi, au kutumia vipimo vya maabara badala yake", "Kukopa pesa kununua mbili", "Kuacha kuweka mbolea"], answer: 1, why: "Kama faida haishindi gharama ukiwa peke yako, gawana gharama au chagua njia ya bei nafuu." }
          ]
        },
        {
          title: "Kutengeneza ramani ya kanda za shamba na mpango kwa kila kanda",
          objectives: ["O6", "O5"],
          minutes: 6,
          goal: "Gawa shamba katika kanda 2 hadi 4 na uandike mpango kwa kila kanda.",
          text: [
            "Sasa weka ushahidi pamoja. Weka maumbo yako ya GPS juu ya mchoro wako. Kwa kila sehemu ya shamba, orodhesha unachojua: NDVI katika tarehe mbili, matokeo ya kipimo cha udongo au kifaa, mavuno ya zamani, unachokiona wewe na wafanyakazi. Kanda inahitaji angalau aina mbili za ushahidi zinazokubaliana, kwa mfano NDVI ya chini na tokeo la pH ya chini, au sehemu yenye maji inayoonekana kila msimu na mavuno duni yaliyorekodiwa.",
            "Iweke rahisi: kanda 2 hadi 4 zinatosha katika shamba dogo. Zipe majina kulingana na zilivyo: \"Kanda A udongo mzuri\", \"Kanda B asidi na dhaifu\", \"Kanda C maji yaliyotuama\". Andika eneo la kila kanda kutoka ramani yako ya GPS.",
            "Kisha andika mpango kwa kila kanda: utakachofanya tofauti (mboji zaidi na chokaa pale pH iko chini kama maabara inavyoshauri; mifereji au zao la mpunga au mboga katika kanda yenye maji; kiwango cha chini cha mbolea pale zao halilipi kamwe), kitakachogharimu kama mfano kwa pesa yako, na jinsi utakavyokikagua: rekodi mavuno kwa kanda wakati wa mavuno na ulinganishe NDVI msimu ujao. Tumia mbolea na viuatilifu vilivyosajiliwa tu, kama lebo inavyosema. Mpango wa usahihi ni sahihi tu kama kumbukumbu za msimu ujao zinaonyesha ulifanya kazi."
          ],
          steps: ["Weka maumbo ya GPS, maelezo ya NDVI, matokeo ya udongo na mavuno kwenye ramani moja.", "Chora kanda 2 hadi 4 pale aina mbili za ushahidi zinapokubaliana.", "Ipe kila kanda jina na uandike eneo lake.", "Andika mpango, gharama na ukaguzi kwa kila kanda.", "Rekodi mavuno kwa kanda wakati wa mavuno na ulinganishe msimu ujao."],
          words: [["Ramani ya kanda", "ramani ya shamba iliyogawanywa katika kanda za usimamizi."], ["Ushahidi", "ukweli unaoweza kuuonyesha, kama tokeo la kipimo, picha ya NDVI au kumbukumbu ya mavuno."], ["Chokaa", "kitu cha kutibu udongo kinachopunguza asidi ya udongo wenye asidi."]],
          slides: [
            { title: "Weka ushahidi pamoja", bullets: ["Maumbo ya GPS na mchoro", "NDVI katika tarehe mbili, matokeo ya udongo", "Mavuno na unachokiona"] },
            { title: "Chora kanda 2 hadi 4", bullets: ["Aina mbili za ushahidi lazima zikubaliane", "Zipe majina kulingana na zilivyo", "Andika kila eneo"] },
            { title: "Mpango kwa kila kanda", bullets: ["Kinachobadilika", "Gharama ya mfano", "Jinsi utakavyokikagua"] },
            { title: "Kagua msimu ujao", bullets: ["Mavuno kwa kanda wakati wa mavuno", "Linganisha NDVI", "Pembejeo zilizosajiliwa, kama lebo inavyosema"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza ramani ya kanda za shamba lako yenye kanda 2 hadi 4, kila moja ikiwa na lebo ya eneo lake na angalau aina mbili za ushahidi. Andika mpango kwa kila kanda: badiliko, gharama ya mfano kwa pesa yako, na jinsi utakavyokagua msimu ujao kama ulifanya kazi.",
          youCanNow: "kutengeneza ramani ya kanda za shamba kutokana na aina kadhaa za ushahidi na kuandika mpango unaoweza kukaguliwa kwa kila kanda.",
          quickCheck: [
            { objective: "O6", q: "Kipi ni ushahidi wa kutosha kuchora kanda?", options: ["NDVI ya chini katika tarehe moja yenye mawingu", "Kisio la jirani", "NDVI ya chini katika tarehe mbili na tokeo la pH ya chini ya udongo", "Tangazo"], answer: 2, why: "Aina mbili za ushahidi zinazokubaliana zinaifanya kanda iaminike." },
            { objective: "O6", q: "Utajuaje kwamba mpango wa kanda ulifanya kazi?", options: ["Kwa kurekodi mavuno kwa kanda wakati wa mavuno na kulinganisha msimu ujao", "Kwa kudhani ulifanya kazi", "Kwa kumuuliza muuzaji wa pembejeo", "Kwa kuangalia mpango tena"], answer: 0, why: "Kumbukumbu kwa kanda tu zinaonyesha kama badiliko lililipa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupima udongo na kupanga kwa kanda",
        questions: [
          { objective: "O4", q: "Sampuli mchanganyiko ya udongo ni nini?", options: ["Jembe moja la udongo kutoka katikati", "Vipande vingi vidogo kutoka kanda moja vilivyochanganywa pamoja", "Udongo kutoka rundo la samadi", "Sampuli kutoka barabarani"], answer: 1, why: "Kuchanganya vipande vingi kunatoa picha ya haki ya kanda." },
          { objective: "O4", q: "Ramani za bure za iSDAsoil zinatumika vizuri zaidi:", options: ["Kuchukua nafasi ya vipimo vyote vya udongo", "Kuamua viwango vya viuatilifu", "Kuona picha ya jumla ya udongo kabla ya kupima shamba lako", "Kupima unyevu wa udongo wa leo"], answer: 2, why: "Ni makadirio ya modeli, si kipimo cha shamba lako." },
          { objective: "O5", q: "Bajeti ndogo inalinganisha:", options: ["Gharama ya ziada na faida ya ziada ya badiliko moja", "Gharama zote za shamba kwa miaka kumi", "Bei ya zao tu", "Salio lako la benki"], answer: 0, why: "Inaangalia tu kinachobadilika." },
          { objective: "O5", q: "Huduma ya droni inaweza kuwa na maana lini?", options: ["Kila wakati, katika kila kipande", "Kamwe barani Afrika", "Bila leseni tu", "Kwa mazao ya thamani kubwa au mashamba makubwa zaidi, au ikigawanwa na kikundi, inapolipa"], answer: 3, why: "Droni zinagharimu zaidi; zinasaidia pale thamani ni kubwa au gharama zinagawanwa." },
          { objective: "O6", q: "Kozi hii inapendekeza kanda ngapi kwa shamba dogo?", options: ["2 hadi 4", "20 hadi 40", "Moja", "Moja kwa kila mmea"], answer: 0, why: "Kanda chache zinatosha kusimamia na kukagua kwa mkono." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kilimo cha Usahihi: Ufuatiliaji kwa Setilaiti na Vihisi vya Udongo",
    questions: [
      { objective: "O1", q: "Kilimo cha usahihi katika shamba dogo kinamaanisha:", options: ["Kununua trekta yenye vihisi", "Kusimamia sehemu tofauti za shamba kwa njia tofauti", "Kutumia kiwango kimoja cha mbolea kila mahali", "Kulima bila kumbukumbu"], answer: 1, why: "Kila sehemu inapata inachohitaji." },
      { objective: "O1", q: "Kipi ni tofauti ndani ya shamba unayoweza kuishughulikia?", options: ["Rangi ya simu yako", "Bei ya sokoni", "Sehemu yenye maji upande wa chini", "Zao la jirani yako"], answer: 2, why: "Sehemu yenye maji inaweza kuchimbiwa mifereji au kupandwa kwa njia tofauti." },
      { objective: "O1", q: "Nini kinakuja kwanza katika kilimo cha usahihi kwenye shamba dogo?", options: ["Kutembea shambani na kuandika tofauti", "Kununua kihisi", "Kukodi droni", "Kubadilisha pembejeo zote"], answer: 0, why: "Uchunguzi ni bure na unaongoza mengine yote." },
      { objective: "O2", q: "Sentinel-2 inatoa nini bure?", options: ["Picha zenye undani wa sentimita 1", "Utabiri wa hali ya hewa", "Vipimo vya udongo", "Picha karibu kila siku 5 kwa pikseli za m 10"], answer: 3, why: "Data ya Sentinel-2 ni ya bure na huria kwa m 10." },
      { objective: "O2", q: "NDVI ya juu kwa kawaida inamaanisha:", options: ["Udongo mtupu", "Mimea mibichi na mingi", "Maji yaliyotuama", "Wingu"], answer: 1, why: "Majani yenye afya yanaakisi mwanga kwa namna inayotoa NDVI ya juu." },
      { objective: "O2", q: "Kwa nini kulinganisha NDVI katika tarehe mbili?", options: ["Kuona sehemu zipi zinabaki dhaifu wakati nyingine zinakua", "Kwa sababu picha moja si sahihi kila mara", "Kuifanya ramani iwe na rangi nyingi", "Kuhesabu mimea"], answer: 0, why: "Sehemu inayobaki chini katika tarehe zote inastahili kutembelewa." },
      { objective: "O2", q: "Katika msimu wa mvua huenda usipate picha safi ya setilaiti kwa sababu:", options: ["Setilaiti zinasimama", "NDVI inafanya kazi msimu wa kiangazi tu", "Mawingu yanaficha ardhi", "Mazao ni marefu mno"], answer: 2, why: "Sentinel-2 haiwezi kuona kupitia mawingu." },
      { objective: "O3", q: "Hekta moja ni:", options: ["m 10 x m 10", "km 1 x km 1", "Nusu ekari", "m 100 x m 100, karibu ekari 2.5"], answer: 3, why: "Hekta moja = mita za mraba 10,000." },
      { objective: "O3", q: "Unapataje kipimo bora zaidi cha eneo kwa GPS?", options: ["Kukimbia haraka kuzunguka shamba", "Kutembea polepole chini ya anga wazi, kusimama kwenye kona, na kutembea mara mbili", "Kuweka simu mfukoni", "Kusimama chini ya mti"], answer: 1, why: "Kutembea polepole, kusimama na anga wazi vinaboresha usahihi." },
      { objective: "O3", q: "Kwa nini kupima kila kanda kama umbo lake lenye jina?", options: ["Ili ujue eneo la kila kanda kwa kupanga na kwa kumbukumbu", "Kwa sababu GPS inalazimisha", "Kushiriki kwenye mitandao ya kijamii", "Haina manufaa"], answer: 0, why: "Eneo la kila kanda linaongoza pembejeo zake na mavuno kwa ekari." },
      { objective: "O4", q: "Njia ipi ya kupima udongo ni sahihi zaidi?", options: ["Kijiti cha bei nafuu", "Kukisia kwa rangi", "Kipimo cha maabara iliyoidhinishwa", "Picha ya WhatsApp"], answer: 2, why: "Maabara ndio kipimo cha kulinganishia ambacho vifaa na vihisi vinakaguliwa nacho." },
      { objective: "O4", q: "Vifaa vya kubebeka vilitoa matokeo yasiyo thabiti kwa:", options: ["Rangi ya udongo", "Naitrojeni, fosforasi na potasiamu", "Ukubwa wa shamba", "Kiasi cha mvua"], answer: 1, why: "Majaribio huru yalikuta pH nzuri lakini N, P na K si thabiti." },
      { objective: "O4", q: "Ili kuamini kihisi cha mkononi zaidi, unapaswa:", options: ["Kukitumia usiku tu", "Kutokilinganisha kamwe na kitu chochote", "Kununua cha pili", "Kulinganisha baadhi ya vipimo vyake na matokeo ya maabara"], answer: 3, why: "Urekebishaji kwa kulinganisha na maabara unaonyesha ukiamini kiasi gani." },
      { objective: "O5", q: "Mfano tu: kugawa kanda kunaokoa mbolea ya GHS 800 na kipimo cha maabara kiligharimu GHS 300. Tokeo ni:", options: ["Hasara ya GHS 500", "Hakuna badiliko", "Faida ya GHS 500", "Faida ya GHS 1,100"], answer: 2, why: "800 zimeokolewa toa 300 gharama = 500 faida." },
      { objective: "O5", q: "Kikundi cha wakulima kinaweza kupunguza gharama ya zana za usahihi kwa:", options: ["Kugawana mita moja au kulipia vipimo vya maabara pamoja", "Kila mmoja kununua droni", "Kuruka vipimo vyote", "Kutumia mbolea isiyosajiliwa"], answer: 0, why: "Kugawana kunasambaza gharama kwa mashamba mengi." },
      { objective: "O5", q: "Ili kujifunza kupima ramani kwa droni, unapaswa:", options: ["Kurusha bila leseni", "Kuchukua kozi zilizopo za droni na kufuata sheria za usafiri wa anga", "Kutumia kozi hii tu", "Kunakili video mtandaoni"], answer: 1, why: "Kozi za droni zinafundisha hilo; leseni inahitajika." },
      { objective: "O6", q: "Kanda inapaswa kutegemea:", options: ["Picha moja yenye mawingu", "Ushauri wa muuzaji", "Hali yako ya moyo", "Angalau aina mbili za ushahidi zinazokubaliana"], answer: 3, why: "Vyanzo viwili vinavyokubaliana vinaifanya kanda iaminike." },
      { objective: "O6", q: "Kipi ni mpango mzuri kwa kanda yenye maji yaliyotuama?", options: ["Kuongeza mbolea zaidi na kutumaini", "Kuipuuza", "Kuchimba mifereji au kupanda zao linalovumilia udongo wenye maji, na kurekodi tokeo", "Kupanda sawa na mwinuko mkavu"], answer: 2, why: "Mpango unaendana na chanzo, na unakaguliwa kwa kumbukumbu." },
      { objective: "O6", q: "Kila mpango wa kanda unapaswa kuwa na:", options: ["Kinachobadilika, gharama yake ya mfano na jinsi utakavyokikagua", "Rangi ya kanda tu", "Bei ya zao tu", "Hakuna; kanda ni za ramani tu"], answer: 0, why: "Mpango usioweza kuupigia gharama wala kuukagua si mpango." },
      { objective: "O6", q: "Mbolea na viuatilifu katika mpango wa kanda lazima viwe:", options: ["Vya bei nafuu zaidi unavyopata", "Bidhaa zilizosajiliwa zinazotumiwa kama lebo inavyosema", "Vimechanganywa kwa kukisia", "Mara mbili katika kanda dhaifu"], answer: 1, why: "Bidhaa zilizosajiliwa tu, zikitumiwa kama lebo inavyosema, ndizo salama na halali." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 7, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Shamba na kanda zimepimwa", objective: "O3", notYet: "Hakuna mpaka, au maeneo yamekisiwa.", meets: "Mpaka umetembewa kwa GPS na kila kanda ina umbo lenye jina na eneo.", exceeds: "Mpaka umetembewa mara mbili na maeneo yanakaribiana sana." },
      { name: "Ushahidi wa setilaiti umetumika kwa makini", objective: "O2", notYet: "Hakuna mwonekano wa setilaiti, au NDVI imechukuliwa kama chanzo.", meets: "NDVI imelinganishwa katika tarehe mbili na sehemu za chini zimetembelewa ili kupata chanzo.", exceeds: "Anaandika kile ramani isichoweza kuonyesha (mawingu, vipande vidogo, magugu) kwa shamba hili." },
      { name: "Ushahidi wa udongo", objective: "O4", notYet: "Hakuna taarifa za udongo, au vipimo vya NPK vya kifaa vimechukuliwa kuwa kamili.", meets: "Njia ya kupima imechaguliwa kwa kila kanda pamoja na kiasi inavyoweza kuaminika.", exceeds: "Angalau tokeo moja la maabara kwa kila kanda, au vipimo vya kifaa vimelinganishwa na maabara." },
      { name: "Kanda na mipango", objective: "O6", notYet: "Kanda zimechorwa kutoka chanzo kimoja, au hakuna mpango kwa kila kanda.", meets: "Kanda 2 hadi 4, kila moja ikiwa na aina mbili za ushahidi na mpango, gharama na ukaguzi.", exceeds: "Kila mpango unataja kumbukumbu itakayoonyesha kama ulifanya kazi msimu ujao." },
      { name: "Inastahili gharama", objective: "O5", notYet: "Zana zimechaguliwa bila kuhesabu gharama.", meets: "Bajeti ndogo yenye namba za mfano kwa pesa ya nchi inaunga mkono mpango.", exceeds: "Anafikiria kugawana gharama na kikundi, au njia ya bei nafuu inayotoa jibu lile lile." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaotumia angalau mpango mmoja wa kanda msimu unaofuata (ufuatiliaji wa siku 30 na wa mwisho wa msimu)",
      "Wanafunzi wanaorekodi mavuno kwa kanda wakati wa mavuno",
      "Akiba ya pembejeo au mabadiliko ya mavuno kwa kanda yanayoripotiwa baada ya msimu mmoja",
      "Vikundi vya wakulima vinavyogawana vipimo vya udongo au zana baada ya kozi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye app ya bure ya GPS ya kupima eneo au ya ramani",
      "Intaneti ya kufikia Copernicus Browser (kompyuta au kivinjari cha simu)",
      "Shamba la kutembea, karatasi, kalamu na mchoro rahisi wa shamba",
      "Bomba la kuchimba udongo (auger) au jembe na ndoo safi kwa sampuli mchanganyiko; maabara au kifaa cha kupima kama kinapatikana",
      "Kama dakika 90 kwa jumla pamoja na muda wa shambani"
    ],
    facilitatorNotes: [
      "Fanyeni Somo la 1 na la 3 shambani: tembeeni mpaka na kanda pamoja, na mlinganishe maeneo ya GPS ya simu tofauti.",
      "Andaa mapema picha safi ya Copernicus Browser ya shamba la karibu; mawingu ya msimu wa mvua yanaweza kuzuia maonyesho ya moja kwa moja.",
      "Usiuze wala usipendekeze kihisi cha udongo au app; muuzaji akihudhuria, mwombe matokeo ya majaribio huru.",
      "Wakumbushe wanafunzi kwamba NDVI inaonyesha wapi, si kwa nini, na kwamba vipimo vya NPK vya vifaa vinahitaji kukaguliwa na maabara.",
      "Elekeza maswali ya droni kwenye kozi za droni; kozi hii haifundishi kurusha droni.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
