"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-extension-farmer-trainer.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_FFS = { name: "FAO: Jukwaa la Kimataifa la Shule za Wakulima Shambani (Farmer Field Schools): maelezo ya jumla", url: "https://www.fao.org/farmer-field-schools/overview/en/" };
const IDE_FBA = { name: "iDE: Washauri wa Biashara ya Shamba (Farm Business Advisors)", url: "https://www.ideglobal.org/story/fbas" };
const GIZ_FBS = { name: "GIZ: Biashara Endelevu ya Kilimo kwa Wakulima Wadogo (Farmer Business School, Afrika Magharibi na Kati)", url: "https://www.giz.de/en/projects/sustainable-smallholder-agribusiness" };
const ICRAF_VFT = { name: "CGIAR / ICRAF: Mbinu ya wakulima wakufunzi wa kujitolea Afrika Mashariki", url: "https://cgspace.cgiar.org/handle/10568/123260" };
const NAERLS = { name: "National Agricultural Extension and Research Liaison Services (NAERLS), Nigeria", url: "https://www.naerls.gov.ng/" };
const KALRO = { name: "Shirika la Utafiti wa Kilimo na Mifugo la Kenya (KALRO)", url: "https://www.kalro.org" };
const PCPB = { name: "Bodi ya Kudhibiti Bidhaa za Kuua Wadudu (Pest Control Products Board, Kenya): bidhaa zilizosajiliwa", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigeria): usajili wa kemikali za kilimo", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Ofisi ya Kamishna wa Ulinzi wa Data (ODPC, Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Tume ya Ulinzi wa Data ya Nigeria (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-extension-farmer-trainer-sw",
  lang: "sw",
  translationOf: "agri-extension-farmer-trainer",
  category: "Agriculture (Africa)",
  name: "Kuwa Mkulima Mkufunzi: Ugani wa Kilimo na Washauri wa Biashara ya Wakulima",
  skills: "Kujua majukumu katika ugani wa wakulima, Kupanga kipindi cha mafunzo cha onyesha-jaribu-jadili, Kuendesha shamba la maonyesho na kipindi cha shule ya wakulima shambani, Kushauri kwa uwajibikaji na kupeleka kwa mtaalamu, Kupata mapato kwa uadilifu kutokana na pembejeo na huduma, Kuweka kumbukumbu za mafunzo",
  outcome: "kupanga na kuendesha siku fupi ya mafunzo kwa wakulima katika jamii yako: somo la vitendo linalojengwa juu ya kuonyesha, kujaribu na kujadili, shamba la maonyesho linalolinganisha mbinu ya kawaida na mbinu bora zaidi, ushauri wa kweli unaojua wakati wa kupeleka kwa mtaalamu, na kumbukumbu za uliowafundisha na kilichobadilika.",
  about: [
    "Kozi hii ni kwa wakulima wanaotaka kuwafundisha majirani zao: wakulima viongozi, wakulima wakufunzi wa kujitolea, watu wanaotaka kuwa Washauri wa Biashara ya Wakulima (au ya Shamba), vijana wajasiriamali wa kilimo, viongozi wa vyama vya ushirika na maafisa ugani wapya nchini Kenya, Nigeria, Ghana, Côte d'Ivoire, Cameroon na kote Afrika.",
    "Utajifunza jinsi ugani unavyofanya kazi na nafasi yako ndani yake, jinsi watu wazima wanavyojifunza vizuri zaidi, jinsi ya kuendesha shamba la maonyesho na kipindi cha shule ya wakulima shambani, jinsi ya kupanga kipindi kifupi, jinsi ya kutumia simu na video kuwafikia wakulima wengi zaidi, jinsi ya kutoa ushauri kwa uwajibikaji na wakati wa kumpeleka mkulima kwa mtaalamu, jinsi ya kupata riziki kwa uadilifu kwa kuuza pembejeo na huduma, na jinsi ya kuweka kumbukumbu za uliowafundisha na kilichobadilika.",
    "Unamaliza na mpango wa somo na mpango wa shamba la maonyesho kwa siku halisi ya mafunzo katika jamii yako. Takwimu za pesa ni mifano tu. Kila somo linaisha na kazi; jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Panga siku ya mafunzo kwa wakulima 15 hadi 25 katika jamii yako kuhusu mbinu moja unayoijua vizuri (kwa mfano kupanda mahindi kwa mistari pamoja na mboji, kuhifadhi nafaka kwenye mifuko isiyopitisha hewa, au kuchanja kuku kupitia daktari wa mifugo). Andika: (1) mpango wa somo wa dakika 60 hadi 90 unaofuata onyesha, jaribu, jadili, wenye ujuzi mmoja, vifaa, muda wa kila sehemu na jinsi utakavyohakikisha kila mkulima anaweza kuufanya; (2) mpango wa shamba la maonyesho wenye vishamba viwili kando kwa kando (mbinu ya kawaida na mbinu mpya), vya ukubwa sawa, vyenye vibao, pamoja na utakachorekodi na tarehe za kutembelea shamba; (3) orodha yako ya kupeleka kwa wataalamu (daktari wa mifugo, ofisi ya ugani, mdhibiti wa pembejeo) na mambo ambayo hutashauri; (4) karatasi ya rejista ya mafunzo yenye ridhaa na tarehe ya kufuatilia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima viongozi, wakulima wakufunzi wa kujitolea, wanaotaka kuwa Washauri wa Biashara ya Wakulima au ya Shamba, vijana wajasiriamali wa kilimo, viongozi wa vyama vya ushirika na maafisa ugani wapya kote Afrika, ikiwa ni pamoja na Kenya, Nigeria, Ghana, Côte d'Ivoire na Cameroon. Wengi ni wakulima wanaoheshimika wenye ujuzi wa vitendo lakini bila mafunzo ya kufundisha au kushauri.",
    startingPoint: "Wanaweza kulima mazao au kufuga wanyama vizuri na mara nyingi huwapa majirani ushauri usio rasmi. Wachache wamewahi kupanga somo, kuandaa shamba la kulinganisha kwa haki, kuweka kumbukumbu za waliowafundisha, au kufikiria ushauri wao unapaswa kuishia wapi. Baadhi huuza pembejeo na hawana uhakika jinsi ya kufanya hivyo kwa haki.",
    gap: "Maafisa ugani ni wachache mno kulingana na idadi ya wakulima, kwa hiyo wakulima wakufunzi na washauri wanabeba sehemu kubwa ya kazi. Bila ujuzi wa kufundisha, mipaka ya kweli na kumbukumbu, msaada wao una matokeo madogo na unaweza kuleta madhara (dozi zisizo sahihi, bidhaa zisizosajiliwa, kulazimisha watu kununua). Wanafunzi wanahitaji kufundisha kwa njia inayokumbukwa, kushauri kwa usalama, kupata mapato kwa haki na kuonyesha matokeo.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: simu janja ya kawaida; wakulima wa wanafunzi huenda wana simu za kawaida tu",
      "Mahali: mafunzo yanafanyika mashambani, kwa vifaa vichache na bila projekta",
      "Usalama: hakuna dozi za dawa, chanjo au homoni na hakuna vipindi vya kusubiri; viuatilifu vilivyosajiliwa tu, kama lebo inavyosema",
      "Pesa: takwimu zote ni mifano; ushauri wa kupata mapato unahusu haki, si uwekezaji",
      "Taarifa binafsi za wafanyakazi na wakulima zinalindwa na sheria za kitaifa za ulinzi wa data"
    ],
    prerequisites: "Uzoefu wa vitendo katika angalau zao moja au aina moja ya ufugaji. Kozi ya mazao au mifugo kutoka katalogi hii inakusaidia kuandaa maudhui utakayofundisha."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa watu wanaosaidia wakulima katika eneo lako", action: "kueleza majukumu ya mkulima kiongozi, Mshauri wa Biashara ya Wakulima na afisa ugani na utakaoshirikiana nao", standard: "ukitaja mtu mmoja wa kuwasiliana naye au ofisi moja ya eneo lako kwa kila mmoja pale wanapopatikana" },
    { id: "O2", condition: "Ukipewa mbinu moja unayoijua vizuri", action: "kupanga kipindi cha mafunzo cha dakika 60 hadi 90 kinachofuata onyesha, jaribu, jadili", standard: "chenye ujuzi mmoja ulio wazi, muda wa kila sehemu, vifaa na ukaguzi kwamba kila mkulima anaweza kuufanya" },
    { id: "O3", condition: "Kwa mbinu unayotaka wakulima waitumie", action: "kupanga shamba la maonyesho linalolinganisha mbinu ya kawaida na mbinu mpya", standard: "lenye vishamba vya ukubwa sawa, vyenye vibao, vinavyorekodiwa na kutembelewa kwa tarehe zilizopangwa" },
    { id: "O4", condition: "Mkulima anapoomba ushauri ulio nje ya mafunzo yako", action: "kutoa ushauri ule tu uliofunzwa na kumpeleka mkulima kwa mtaalamu sahihi", standard: "ukitumia orodha iliyoandikwa ya kupeleka kwa wataalamu na bila kamwe kutoa dozi za dawa au kupendekeza viuatilifu visivyosajiliwa" },
    { id: "O5", condition: "Ukiuza pembejeo au huduma kwa wakulima unaowafundisha", action: "kueleza jinsi unavyopata mapato na kanuni za maadili unazofuata", standard: "kwa bei zilizoandikwa, kamisheni zinazowekwa wazi na bila kulazimisha mtu kununua" },
    { id: "O6", condition: "Baada ya kila mafunzo", action: "kurekodi uliowafundisha, kuhusu nini, na matokeo", standard: "kwa ridhaa, kwa siri, na kwa kufuatilia angalau mara moja" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuwafundisha wakulima ili wakumbuke",
      lessons: [
        {
          title: "Wakulima viongozi, Washauri wa Biashara ya Wakulima na maafisa ugani",
          objectives: ["O1"],
          minutes: 5,
          goal: "Eleza majukumu katika ugani wa wakulima na utaje utakaoshirikiana nao.",
          text: [
            "Ugani maana yake ni kuwasaidia wakulima kujifunza na kutumia mbinu bora zaidi. Maafisa ugani wa serikali (nchini Nigeria, Programu za Maendeleo ya Kilimo za majimbo, zinazosaidiwa na NAERLS; nchini Kenya, maafisa wa kilimo wa kaunti wanaofanya kazi na mashirika ya utafiti kama KALRO) ni washauri waliofunzwa, lakini kila mmoja anahudumia wakulima wengi sana. Kwa hiyo wakulima wenyewe wanabeba sehemu kubwa ya kufundisha.",
            "Mkulima kiongozi au mkulima mkufunzi wa kujitolea ni mkulima anayeheshimika anayeandaa maonyesho na kuwafundisha majirani, kwa kawaida amefunzwa na kusaidiwa na mradi au ofisi ya ugani. Afrika Mashariki, ICRAF na washirika wake wametumia sana wakulima wakufunzi wa kujitolea, kwa mfano katika ufugaji wa ng'ombe wa maziwa; tathmini moja nchini Uganda iligundua kuwa maarifa ya wakulima, uzalishaji wa maziwa na mapato viliongezeka.",
            "Mshauri wa Biashara ya Shamba (FBA), anayeitwa pia Mshauri wa Biashara ya Wakulima, ni mjasiriamali wa eneo hilo anayeuza pembejeo na ushauri kwa wakulima wa karibu na kupata mapato kutokana na kamisheni na ada. iDE inawafunza FBA nchini Zambia na Msumbiji, kila mmoja akihudumia wakulima kama 80 hadi 120. Afrika Magharibi na Kati, Farmer Business School ya GIZ imewafunza wakulima wa kakao na mazao ya chakula nchini Côte d'Ivoire, Ghana, Togo, Nigeria na Cameroon ujuzi wa biashara ya shamba, ikishirikiana na huduma za ugani. Cheo chako kiwe chochote, unamsaidia afisa ugani; humchukui nafasi yake."
          ],
          steps: ["Orodhesha wanaosaidia wakulima katika eneo lako: ofisi ya ugani, miradi, vyama vya ushirika, maduka ya pembejeo (agrovet).", "Amua jukumu lipi linakufaa: mkulima kiongozi, FBA, au yote mawili.", "Kutana na afisa ugani wa eneo lako na umweleze unachopanga kufanya.", "Andika mtu mmoja wa kuwasiliana naye kwa kila jukumu na lini mtaongea tena."],
          words: [["Ugani", "huduma zinazowasaidia wakulima kujifunza na kutumia mbinu bora zaidi."], ["Mkulima kiongozi", "mkulima anayeheshimika anayeandaa maonyesho na kuwafundisha majirani, mara nyingi kwa msaada wa mradi au ofisi ya ugani."], ["Mshauri wa Biashara ya Shamba (au ya Wakulima) (FBA)", "mjasiriamali wa eneo hilo anayeuza pembejeo na kutoa ushauri kwa wakulima wa karibu kwa kamisheni au ada."]],
          slides: [
            { title: "Maafisa ugani", bullets: ["Washauri wa serikali waliofunzwa", "Nigeria: ADP, NAERLS; Kenya: maafisa wa kaunti, KALRO", "Kila mmoja anahudumia wakulima wengi sana"] },
            { title: "Wakulima viongozi na wakufunzi wa kujitolea", bullets: ["Wanaandaa maonyesho, wanafundisha majirani", "Wanatumika sana Afrika Mashariki (ICRAF, ng'ombe wa maziwa)"] },
            { title: "Washauri wa Biashara ya Shamba", bullets: ["Wajasiriamali wa eneo hilo: pembejeo pamoja na ushauri", "iDE: Zambia, Msumbiji; wakulima 80-120 kila mmoja", "Farmer Business School ya GIZ: Afrika Magharibi na Kati"] },
            { title: "Fanyeni kazi pamoja", bullets: ["Unamsaidia afisa ugani", "Kutana kwanza na ofisi ya eneo lako"] }
          ],
          sources: [NAERLS, KALRO, ICRAF_VFT, IDE_FBA, GIZ_FBS],
          tryIt: "Tengeneza jedwali la wanaosaidia wakulima katika eneo lako: ofisi ya ugani, mradi au chama cha ushirika chochote, na duka la pembejeo (agrovet) au muuzaji wa pembejeo aliye karibu. Andika jukumu utakalochukua (mkulima kiongozi, FBA au yote mawili) na mtu mmoja wa kuwasiliana naye kwa kila jukumu.",
          youCanNow: "kueleza majukumu katika ugani wa wakulima na nafasi yako ndani yake.",
          quickCheck: [
            { objective: "O1", q: "Ni kitu gani hasa kinachomtofautisha Mshauri wa Biashara ya Shamba na mkulima kiongozi wa kujitolea?", options: ["FBA anapata mapato kwa kuuza pembejeo na huduma", "FBA ni mfanyakazi wa serikali", "FBA hatoi ushauri kamwe", "FBA anafanya kazi mijini tu"], answer: 0, why: "FBA ni wajasiriamali wa eneo hilo wanaopata mapato kutokana na kamisheni na ada." },
            { objective: "O1", q: "Unapanga kuanza kuwafundisha majirani. Unapaswa kukutana na nani kwanza?", options: ["Mnunuzi wa mjini", "Kituo cha redio", "Afisa ugani wa eneo lako", "Hakuna; anza tu"], answer: 2, why: "Kufanya kazi na ugani kunaweka ushauri wako wa kisasa na kunajenga msaada." }
          ]
        },
        {
          title: "Jinsi watu wazima wanavyojifunza, na kupanga kipindi kifupi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Panga kipindi cha mafunzo cha dakika 60 hadi 90 kinachofuata onyesha, jaribu, jadili.",
          text: [
            "Wakulima watu wazima hujifunza vizuri zaidi kwa kufanya, kutoka kwa watu wanaowaamini, kuhusu matatizo waliyo nayo sasa. Wanakuja na uzoefu: uheshimu na uwaulize wanachofanya tayari. Hotuba ndefu husahaulika; kufanya kwa mikono yao wenyewe hukumbukwa. Tumia hatua tatu: onyesha (unaonyesha ujuzi polepole, ukieleza kwa nini), jaribu (kila mkulima anaufanya wakati wewe unaangalia na kusaidia), jadili (kikundi kinazungumzia walichoona, kilicho kigumu, na kama kitafanya kazi mashambani mwao).",
            "Fundisha ujuzi mmoja kwa kila kipindi, kama \"pima na upande mahindi kwa mistari, ukitia konzi moja ya mboji kwa kila shimo\", si \"kila kitu kuhusu mahindi\". Upange: ujuzi; vifaa ili kila mtu ajaribu; muda (kwa mfano dakika 10 za kukaribisha na mnachofanya sasa, 15 kuonyesha, 30 kujaribu, 20 kujadili, 10 kupanga na kukagua); na jinsi utakavyohakikisha kila mkulima anaweza kuufanya, kama kumwangalia kila mmoja akipanda mashimo matatu kwa usahihi.",
            "Chagua muda unaowafaa wakulima (baada ya kazi za asubuhi, si siku ya soko), mahali wanapoweza kufika, na lugha wanayoizungumza. Washirikishe wanawake na vijana: uliza nani anafanya kazi nyumbani na umwalike. Weka vikundi vidogo vya kutosha ili kila mtu ajaribu, kama watu 15 hadi 25 kwa kila mkufunzi."
          ],
          steps: ["Chagua ujuzi mmoja ambao wakulima wanauhitaji sasa.", "Panga onyesha, jaribu na jadili, pamoja na muda wa kila sehemu.", "Orodhesha vifaa ili kila mtu ajaribu.", "Amua jinsi utakavyohakikisha kila mkulima anaweza kuufanya.", "Chagua muda, mahali na lugha vinavyowafaa wakulima."],
          words: [["Onyesha, jaribu, jadili", "mbinu ya kufundisha: onyesha, waache wote wafanye mazoezi, kisha mzungumzie."], ["Mpango wa somo", "mpango mfupi ulioandikwa wa utakachofundisha, jinsi gani, kwa vifaa gani, na muda wa kila sehemu."], ["Kujifunza kwa kufanya", "kujifunza ujuzi kwa kuufanyia mazoezi kwa mikono yako mwenyewe."]],
          slides: [
            { title: "Jinsi watu wazima wanavyojifunza", bullets: ["Kwa kufanya, kutoka kwa watu wanaowaamini", "Kuhusu matatizo waliyo nayo sasa", "Heshimu wanachojua tayari"] },
            { title: "Onyesha, jaribu, jadili", bullets: ["Onyesha: fanya polepole, eleza kwa nini", "Jaribu: kila mtu anafanya", "Jadili: kipi ni kigumu, kitafanya kazi hapa?"] },
            { title: "Ujuzi mmoja kwa kila kipindi", bullets: ["Mfano: mistari na mboji kwa kila shimo", "Muda, vifaa, ukaguzi kwa kila mtu"] },
            { title: "Ifanye rahisi kuja", bullets: ["Muda na mahali pazuri", "Lugha ya wakulima wenyewe", "Waalike wanawake na vijana"] }
          ],
          tryIt: "Andika mpango wa somo kwa ujuzi mmoja unaoujua vizuri: ujuzi kwa sentensi moja, vifaa, muda wa onyesha-jaribu-jadili kwa dakika 60 hadi 90, na jinsi utakavyohakikisha kila mkulima anaweza kuufanya.",
          youCanNow: "kupanga kipindi kifupi cha mafunzo kinachofundisha ujuzi mmoja kwa kuonyesha, kujaribu na kujadili.",
          quickCheck: [
            { objective: "O2", q: "Ujuzi upi ni bora zaidi kwa kipindi kimoja cha dakika 90?", options: ["Kila kitu kuhusu mahindi", "Afya yote ya mifugo", "Kilimo kwa ujumla", "Kupanda mahindi kwa mistari na konzi ya mboji kwa kila shimo"], answer: 3, why: "Ujuzi mmoja ulio wazi unaweza kuonyeshwa, kufanyiwa mazoezi na kukaguliwa katika kipindi kimoja." },
            { objective: "O2", q: "Katika hatua ya \"jaribu\", nini kinatokea?", options: ["Mkufunzi anatoa hotuba ndefu", "Kila mkulima anafanya ujuzi wakati mkufunzi anaangalia na kusaidia", "Wakulima wanaenda nyumbani", "Kikundi kinauza pembejeo"], answer: 1, why: "Kufanya mazoezi kwa mikono yao wenyewe ndiyo njia watu wazima wanavyokumbuka." }
          ]
        },
        {
          title: "Mashamba ya maonyesho na shule za wakulima shambani",
          objectives: ["O3"],
          minutes: 6,
          goal: "Panga shamba la maonyesho linalolinganisha kwa haki mbinu ya kawaida na mbinu mpya.",
          text: [
            "Wakulima huamini wanachokiona kwenye shamba kama lao. Shamba la maonyesho linaonyesha mbinu mpya kando kwa kando na ile ya kawaida. Chagua mahali panapoonekana karibu na njia, penye udongo unaofanana. Weka alama ya vishamba viwili vya ukubwa sawa (kwa mfano m 10 x m 10 kila kimoja): kishamba A, mbinu ya kawaida; kishamba B, mbinu mpya. Badilisha kitu kimoja tu kati yao, kama aina ya mbegu, nafasi kati ya mimea au mboji, ili tofauti iwe na sababu moja. Weka kibao kilicho wazi kwa kila kimoja.",
            "Weka kumbukumbu tangu mwanzo: tarehe ya kupanda, pembejeo na nguvu kazi kwa kila kishamba, picha kila wiki mbili, matatizo, na mavuno yanayopimwa kwa uzito kando kando. Panga siku za shamba katika hatua muhimu (baada ya kuota, wakati wa kutoa maua, wakati wa kuvuna) ili wakulima waone na kulinganisha. Kuwa mkweli ikiwa mbinu mpya haishindi: hilo pia ni funzo lenye manufaa.",
            "Shule ya Wakulima Shambani (FFS) inaenda mbele zaidi. FAO inaieleza kama kikundi cha wakulima wanaokutana mara kwa mara shambani katika mzunguko mzima wa uzalishaji, wakiongozwa na mwezeshaji aliyefunzwa. Wanalinganisha vishamba (mbinu ya kienyeji na mbinu bora inayopendekezwa) na kufanya Uchambuzi wa Mfumo-Ikolojia wa Kilimo (AESA): katika vikundi vidogo wanaangalia mimea, wadudu waharibifu, maadui wao wa asili, udongo na hali ya hewa, wanachora wanachokiona, na wanaamua pamoja la kufanya. FFS imetumika katika nchi zaidi ya 90. Ukitaka kuiwezesha moja, uliza ofisi yako ya ugani au mradi kuhusu mafunzo ya wawezeshaji."
          ],
          steps: ["Chagua mahali panapoonekana penye udongo unaofanana.", "Weka alama ya vishamba viwili vya ukubwa sawa: mbinu ya kawaida na mbinu mpya.", "Badilisha kitu kimoja tu kati yao; weka vibao kwa vyote viwili.", "Rekodi tarehe, pembejeo, nguvu kazi, picha na mavuno kwa kila kishamba.", "Panga siku za shamba wakati wa kuota, kutoa maua na kuvuna."],
          words: [["Shamba la maonyesho", "shamba dogo linaloonyesha mbinu ili wakulima waione ikifanya kazi."], ["Shule ya Wakulima Shambani (FFS)", "kikundi kinachokutana mara kwa mara shambani katika msimu mzima, kikiongozwa na mwezeshaji, kujifunza kwa kuangalia na kujaribu."], ["Uchambuzi wa Mfumo-Ikolojia wa Kilimo (AESA)", "kuangalia mimea, wadudu waharibifu, maadui wao wa asili, udongo na hali ya hewa shambani, kisha kuamua pamoja la kufanya."]],
          slides: [
            { title: "Kuona ni kuamini", bullets: ["Mbinu ya kawaida kando ya mbinu mpya", "Ukubwa sawa, panaonekana, vibao"] },
            { title: "Ulinganisho wa haki", bullets: ["Badilisha kitu kimoja tu", "Udongo unaofanana, utunzaji mwingine sawa"] },
            { title: "Rekodi na onyesha", bullets: ["Tarehe, pembejeo, nguvu kazi, picha", "Mavuno yanapimwa kwa kila kishamba", "Siku za shamba katika hatua muhimu"] },
            { title: "Shule ya Wakulima Shambani (FAO)", bullets: ["Inakutana mara kwa mara msimu mzima", "Mwezeshaji aliyefunzwa, kulinganisha vishamba", "Uchambuzi wa Mfumo-Ikolojia wa Kilimo, kuamua pamoja"] }
          ],
          sources: [FAO_FFS],
          tryIt: "Chora mpangilio wa shamba la maonyesho kwa ujuzi uliopanga katika Somo la 2: vishamba viwili vya ukubwa sawa, kitu kimoja kinachotofautiana, vibao, utakachorekodi, na tarehe za siku tatu za shamba.",
          youCanNow: "kupanga shamba la maonyesho la haki na kueleza jinsi shule ya wakulima shambani inavyofanya kazi.",
          quickCheck: [
            { objective: "O3", q: "Katika maonyesho yako, kishamba B kina aina mpya ya mbegu NA mboji NA nafasi pana zaidi. Tatizo ni nini?", options: ["Hakuna; mabadiliko mengi ni bora", "Vishamba ni vidogo mno", "Huwezi kujua ni badiliko lipi lililoleta tofauti", "Wakulima hawapendi vibao"], answer: 2, why: "Badilisha kitu kimoja ili tofauti iwe na sababu moja." },
            { objective: "O3", q: "Wakulima katika shule ya wakulima shambani ya FAO hufanya nini katika Uchambuzi wa Mfumo-Ikolojia wa Kilimo?", options: ["Wanaangalia shamba katika vikundi vidogo na kuamua pamoja la kufanya", "Wanasikiliza hotuba tu", "Wanunua pembejeo", "Wanajaza fomu za mikopo"], answer: 0, why: "AESA ni kuangalia mimea, wadudu, udongo na hali ya hewa, kisha kuamua kama kikundi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuwafundisha wakulima ili wakumbuke",
        questions: [
          { objective: "O1", q: "Kwa nini wakulima wakufunzi ni muhimu sana katika ugani barani Afrika?", options: ["Maafisa ugani hawajafunzwa", "Kila afisa ugani anahudumia wakulima wengi sana", "Wakulima hawapendi wataalamu", "Sheria inawataka"], answer: 1, why: "Wakulima wakufunzi wanasaidia ugani kuwafikia watu wengi zaidi." },
          { objective: "O1", q: "Farmer Business School ya GIZ imefanya kazi na wakulima wa kakao katika nchi zipi?", options: ["Kenya tu", "Asia tu", "Zambia na Msumbiji tu", "Côte d'Ivoire, Ghana, Togo, Nigeria na Cameroon"], answer: 3, why: "Mradi unahusu nchi hizo tano za Afrika Magharibi na Kati." },
          { objective: "O2", q: "Hatua tatu za mbinu ya kufundisha katika kozi hii ni zipi?", options: ["Onyesha, jaribu, jadili", "Ongea, ongea, pima", "Soma, andika, saini", "Nunua, uza, lipa"], answer: 0, why: "Onyesha, fanya mazoezi na mzungumzie." },
          { objective: "O2", q: "Unajuaje kwamba kipindi kilifanikiwa?", options: ["Kuhesabu watu waliokuja", "Kuuliza kama walifurahia", "Kumwangalia kila mkulima akifanya ujuzi kwa usahihi", "Kugawa kijitabu kirefu"], answer: 2, why: "Kipimo cha kipindi cha ujuzi ni kwamba kila mkulima anaweza kuufanya." },
          { objective: "O3", q: "Shamba la maonyesho linapaswa kuwekwa:", options: ["Limefichwa nyuma ya nyumba", "Mahali panapoonekana karibu na njia, penye udongo unaofanana", "Kwenye udongo mbaya zaidi tu", "Mbali na mkulima yeyote"], answer: 1, why: "Wakulima lazima walione, na udongo unaofanana unaweka ulinganisho kuwa wa haki." }
        ]
      }
    },
    {
      name: "Sura 2: Kushauri, kupata mapato na kuonyesha matokeo",
      lessons: [
        {
          title: "Kuwafikia wakulima kwa simu, na kujua wakati wa kupeleka kwa mtaalamu",
          objectives: ["O4"],
          minutes: 6,
          goal: "Toa ushauri ule tu uliofunzwa na uwapeleke wakulima kwa mtaalamu sahihi.",
          text: [
            "Simu zinakusaidia kuwafikia wakulima wengi zaidi kati ya ziara. Rekodi video fupi (dakika moja hadi mbili) ya hatua ya \"onyesha\" kwenye simu yako na uishiriki katika kikundi cha WhatsApp; tuma vikumbusho kwa SMS kwa wakulima wenye simu za kawaida; tumia ujumbe wa sauti kwa lugha ya eneo hilo; fanya simu fupi ya kikundi kabla ya siku ya shamba. Omba ruhusa kabla ya kuwarekodi watu au mashamba yao, na kikundi kiwe cha mambo ya kilimo tu.",
            "Ushauri unaweza kusaidia au kudhuru. Shauri tu kuhusu ulichofunzwa na ulichoona kikifanya kazi. Usitoe kamwe dozi za dawa za mifugo, chanjo au homoni, na usitoe kamwe vipindi vya kusubiri: sema \"fuata daktari wa mifugo na lebo ya bidhaa\". Pendekeza tu viuatilifu vilivyosajiliwa katika nchi yako (kwa mfano na Pest Control Products Board ya Kenya au NAFDAC ya Nigeria), vinavyotumiwa kama lebo inavyosema, pamoja na vifaa vya kujikinga. Kagua orodha ya chombo cha usajili ikiwa huna uhakika.",
            "Mpeleke mkulima kwa mtaalamu haraka jambo likiwa juu ya uwezo wako: wanyama wagonjwa au wanaokufa waende kwa daktari wa mifugo; vifo vya ghafla vya nguruwe au kuku vinaweza kuwa Homa ya Nguruwe ya Afrika (African Swine Fever) au homa ya ndege, ambayo ni magonjwa yanayopaswa kuripotiwa, kwa hiyo mwambie mkulima aripoti kwa daktari wa mifugo au mamlaka ya mifugo mara moja na asiwahamishe wala kuwauza wanyama. Wadudu au magonjwa ya mazao yasiyojulikana yaende ofisi ya ugani au taasisi ya utafiti. Mikopo na mikataba iende kwa mshauri anayeaminika. Weka orodha iliyoandikwa ya kupeleka kwa wataalamu yenye majina na namba za simu, na ufuatilie kujua kilichotokea."
          ],
          steps: ["Shiriki video fupi, vikumbusho vya SMS na ujumbe wa sauti; omba ruhusa kabla ya kurekodi.", "Shauri tu kuhusu ulichofunzwa.", "Hakuna dozi wala vipindi vya kusubiri: daktari wa mifugo na lebo tu.", "Viuatilifu vilivyosajiliwa tu, kama lebo inavyosema.", "Mpeleke kwa mtaalamu haraka ukitumia orodha yako iliyoandikwa, na ufuatilie."],
          words: [["Kupeleka kwa mtaalamu", "kumtuma mkulima kwa mtaalamu anayeweza kusaidia jambo lililo juu ya ujuzi wako."], ["Ugonjwa unaopaswa kuripotiwa", "ugonjwa ambao kwa sheria lazima uripotiwe kwa mamlaka ya mifugo, kama Homa ya Nguruwe ya Afrika (African Swine Fever) au homa ya ndege."], ["Kiuatilifu kilichosajiliwa", "bidhaa iliyoidhinishwa kutumika na mdhibiti wa kitaifa."]],
          slides: [
            { title: "Simu zinawafikia wakulima wengi zaidi", bullets: ["Video za dakika 1-2 za hatua ya \"onyesha\"", "Vikumbusho vya SMS, ujumbe wa sauti, simu za kikundi", "Omba ruhusa kabla ya kurekodi"] },
            { title: "Shauri ndani ya mafunzo yako", bullets: ["Hakuna dozi za dawa, chanjo au homoni", "Daktari wa mifugo na lebo ya bidhaa tu", "Viuatilifu vilivyosajiliwa, kama lebo inavyosema"] },
            { title: "Peleka kwa mtaalamu haraka", bullets: ["Wanyama wagonjwa: daktari wa mifugo", "Vifo vya nguruwe au kuku: ripoti mara moja", "Matatizo ya mazao yasiyojulikana: ugani"] },
            { title: "Orodha yako ya wataalamu", bullets: ["Majina na namba za simu", "Fuatilia kujua kilichotokea"] }
          ],
          sources: [PCPB, NAFDAC],
          tryIt: "Andika orodha yako ya kupeleka kwa wataalamu: daktari wa mifugo au ofisi ya mifugo iliyo karibu, ofisi ya ugani, chombo cha usajili wa viuatilifu cha nchi yako, na mshauri anayeaminika kwa pesa na mikataba, pamoja na namba za simu. Kisha andika maswali matatu ambayo HUTAYAJIBU mwenyewe na utampeleka nani.",
          youCanNow: "kuwafikia wakulima kwa simu na kutoa ushauri ndani ya mipaka yako, ukipeleka mengine kwa mtaalamu sahihi.",
          quickCheck: [
            { objective: "O4", q: "Mkulima anauliza ampe mbuzi mgonjwa kiasi gani cha dawa ya antibiotiki. Unasema:", options: ["\"Mpe vijiko viwili kwa siku.\"", "\"Tumia iliyo rahisi zaidi.\"", "\"Mpe mara mbili ili kuwa salama.\"", "\"Mpigie daktari wa mifugo na ufuate lebo ya bidhaa; siwezi kutoa dozi.\""], answer: 3, why: "Dozi zinatoka kwa daktari wa mifugo na lebo, si kwa mkulima mkufunzi." },
            { objective: "O4", q: "Nguruwe kadhaa kijijini wanakufa ghafla. Unawaambia wakulima nini?", options: ["Wauzeni waliobaki haraka", "Ripotini kwa daktari wa mifugo au mamlaka ya mifugo mara moja na msiwahamishe nguruwe", "Subirini wiki moja", "Kuleni nyama"], answer: 1, why: "Huenda ni Homa ya Nguruwe ya Afrika, ugonjwa unaopaswa kuripotiwa mara moja." }
          ]
        },
        {
          title: "Kupata riziki kama Mshauri wa Biashara ya Wakulima, kwa uadilifu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Eleza jinsi utakavyopata mapato kutokana na pembejeo na huduma na kanuni za maadili utakazofuata.",
          text: [
            "FBA anapata mapato kwa kuwaletea pembejeo na huduma wakulima walio mbali na maduka: kamisheni kwa mbegu, mbolea, mifuko ya kuhifadhi isiyopitisha hewa au zana zilizouzwa; ada za huduma kama kunyunyizia dawa kwa vifaa sahihi, kulima kwa plau, kuchukua sampuli za udongo, kukusanya mavuno kwa ajili ya wanunuzi, au kuweka kumbukumbu. iDE inaeleza kwamba uhusiano wa muda mrefu wa FBA na jamii unampa sababu kubwa ya kupendekeza tu bidhaa zinazowaletea wakulima faida.",
            "Maadili ni biashara nzuri. Uza bidhaa halisi tu, zilizosajiliwa, kutoka kwa wasambazaji wenye leseni. Andika bei zako na uwaambie wakulima unapopata kamisheni. Pendekeza kile mkulima anachohitaji, si kile kinachokulipa zaidi; sema wazi wakati jibu bora ni \"huhitaji kununua chochote\". Usimlazimishe mtu kamwe, usiuze kamwe kwa mkopo unaojua hawawezi kuulipa, na tenganisha mafunzo na kuuza: kila mtu anaweza kuhudhuria mafunzo akinunua au asiponunua.",
            "Jua hesabu zako. Mfano tu: ukipata kamisheni ya XOF 500 kwa kila mfuko na ukauza mifuko 120 kwa msimu, hiyo ni XOF 60,000, kabla ya gharama za usafiri na muda wako. Weka kumbukumbu rahisi za mauzo, kamisheni na ada za huduma, na kagua kama usajili wa biashara au leseni yoyote inahitajika katika nchi yako kwa kuuza pembejeo, hasa kemikali za kilimo."
          ],
          steps: ["Orodhesha pembejeo na huduma unazoweza kutoa.", "Andika bei zako na kamisheni yako kwa kila moja.", "Andika kanuni zako za maadili: bidhaa halisi, kamisheni wazi, bila kulazimisha, mafunzo wazi kwa wote.", "Rekodi mauzo, kamisheni na ada.", "Kagua sheria za usajili na leseni kwa wauzaji wa pembejeo."],
          words: [["Kamisheni", "pesa ambayo muuzaji anapata kwa kila bidhaa inayouzwa, inayolipwa na msambazaji."], ["Ada ya huduma", "pesa inayotozwa kwa kufanya kazi, kama kunyunyizia dawa au kulima kwa plau."], ["Mgongano wa maslahi", "wakati kinachokulipa zaidi si kilicho bora kwa mtu unayemshauri."]],
          slides: [
            { title: "Jinsi FBA wanavyopata mapato", bullets: ["Kamisheni kwa pembejeo zilizouzwa", "Ada za huduma: kunyunyizia, kulima, kukusanya mavuno", "Kuleta pembejeo karibu na wakulima"] },
            { title: "Maadili ni biashara nzuri", bullets: ["Bidhaa halisi, zilizosajiliwa tu", "Bei zilizoandikwa, kamisheni wazi", "Ushauri kwanza, kuuza baadaye"] },
            { title: "Bila kulazimisha", bullets: ["\"Huhitaji kununua\" inaruhusiwa", "Mafunzo wazi kwa wote, wanunuzi au la", "Hakuna mkopo ambao watu hawawezi kulipa"] },
            { title: "Jua hesabu zako", bullets: ["Mfano tu: XOF 500 x mifuko 120 = XOF 60,000", "Toa usafiri na muda", "Kagua sheria za leseni"] }
          ],
          sources: [IDE_FBA],
          tryIt: "Andika maelezo ya biashara ya FBA ya ukurasa mmoja: pembejeo au huduma tatu unazoweza kutoa, bei na kamisheni ya mfano kwa kila moja, mapato ya mfano kwa msimu, na kanuni zako tano za maadili.",
          youCanNow: "kupanga jinsi ya kupata mapato kama FBA kutokana na pembejeo na huduma huku ukilinda imani ya wakulima.",
          quickCheck: [
            { objective: "O5", q: "Ipi ni kanuni ya maadili ya FBA?", options: ["Waambie wakulima unapopata kamisheni", "Wafundishe tu wanaonunua kutoka kwako", "Sukuma bidhaa yenye kamisheni kubwa zaidi", "Uza bidhaa zisizosajiliwa kama ni rahisi zaidi"], answer: 0, why: "Kuweka kamisheni wazi kunaufanya ushauri kuwa wa kweli na kunajenga imani." },
            { objective: "O5", q: "Zao la mkulima halihitaji mbolea msimu huu. Unapaswa:", options: ["Kuiuza hata hivyo", "Kunyamaza na kuuza mfuko mdogo", "Kumwambia kwa ukweli kwamba hahitaji kuinunua", "Kukataa kumtembelea tena"], answer: 2, why: "Imani ya muda mrefu ina thamani kuliko mauzo moja." }
          ]
        },
        {
          title: "Kuweka kumbukumbu za mafunzo na kupanga siku yako ya mafunzo",
          objectives: ["O6", "O2", "O3"],
          minutes: 6,
          goal: "Weka rejista ya mafunzo yenye ridhaa na upange siku kamili ya mafunzo.",
          text: [
            "Kumbukumbu zinaonyesha kazi yako inafanikisha nini, zinakusaidia kufuatilia, na ndizo miradi, vyama vya ushirika na waajiri huomba. Weka rejista ya mafunzo kwa kila kipindi: tarehe, mahali, mada, jina la kila mkulima, jinsia, kundi la umri (kijana au la) na kijiji, na namba ya simu tu ikiwa amekubali. Andika kama kila mkulima aliweza kufanya ujuzi mwishoni.",
            "Fuatilia angalau mara moja, kwa mfano mwezi mmoja baadaye au wakati wa mavuno: walitumia mbinu hiyo, kwenye eneo gani la ardhi au wanyama wangapi, na nini kilitokea? Rekodi matokeo ya shamba la maonyesho kwa kila kishamba. Baada ya muda unaweza kusema, kwa mfano, \"Niliwafundisha wakulima 60; 35 sasa wanapanda kwa mistari; mavuno yao ya mahindi yaliongezeka kwa wastani\", ukiungwa mkono na kumbukumbu. Usibuni takwimu: kama hukupima, sema hivyo.",
            "Omba ruhusa ya kurekodi taarifa za watu, eleza kwa nini, na uweke rejista kwa siri: kwenye karatasi mahali salama au kwenye simu iliyofungwa, si katika kikundi cha WhatsApp cha wazi. Kenya, Nigeria na nchi nyingine zina sheria za ulinzi wa data. Sasa weka kila kitu pamoja kwa siku yako ya mafunzo: mpango wa somo, shamba la maonyesho, orodha yako ya wataalamu na rejista hii."
          ],
          steps: ["Tengeneza rejista: tarehe, mahali, mada, jina, jinsia, kundi la umri, kijiji, simu kwa ridhaa.", "Andika nani aliweza kufanya ujuzi mwishoni.", "Fuatilia angalau mara moja na urekodi kilichobadilika.", "Rekodi matokeo ya shamba la maonyesho kwa kila kishamba.", "Weka rejista kwa siri; omba ruhusa kwanza."],
          words: [["Rejista ya mafunzo", "orodha ya waliohudhuria mafunzo, kuhusu nini, na matokeo."], ["Ufuatiliaji", "kukagua baadaye kama wakulima walitumia walichojifunza na nini kilitokea."], ["Ridhaa", "ruhusa ya mtu ya kurekodi au kushiriki taarifa zake."]],
          slides: [
            { title: "Kwa nini kuweka kumbukumbu", bullets: ["Zinaonyesha kazi yako inafanikisha nini", "Kuwafuatilia wakulima", "Miradi na waajiri huziomba"] },
            { title: "Rejista ya mafunzo", bullets: ["Tarehe, mahali, mada", "Jina, jinsia, kundi la umri, kijiji", "Simu kwa ridhaa tu; waliweza kufanya?"] },
            { title: "Fuatilia", bullets: ["Angalau mara moja: mwezi mmoja au wakati wa mavuno", "Walitumia? Nini kilitokea?", "Usibuni takwimu kamwe"] },
            { title: "Iweke kwa siri", bullets: ["Omba ruhusa, eleza kwa nini", "Karatasi salama au simu iliyofungwa", "Si katika kikundi cha wazi"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Kazi ya mwisho: panga siku yako ya mafunzo. Andika mpango wa somo wa dakika 60 hadi 90 (onyesha, jaribu, jadili, pamoja na ujuzi, vifaa, muda na ukaguzi), mpango wa shamba la maonyesho (vishamba viwili vya ukubwa sawa vyenye vibao, tofauti moja, kumbukumbu na tarehe za siku za shamba), orodha yako ya wataalamu na mambo ambayo hutashauri, na karatasi ya rejista ya mafunzo yenye mstari wa ridhaa na tarehe ya kufuatilia.",
          youCanNow: "kupanga siku kamili ya mafunzo na kuweka kumbukumbu zinazoonyesha uliowafundisha na kilichobadilika.",
          quickCheck: [
            { objective: "O6", q: "Kabla ya kuandika namba ya simu ya mkulima kwenye rejista yako, unapaswa:", options: ["Kuiweka katika kikundi", "Kuomba ruhusa yake na kueleza kwa nini", "Kuinakili kutoka kwa mtu mwingine", "Kuiandika bila kuuliza"], answer: 1, why: "Ridhaa inahitajika ili kurekodi taarifa binafsi." },
            { objective: "O6", q: "Hukupima mavuno baada ya mafunzo. Katika ripoti yako unapaswa:", options: ["Kukisia namba kubwa", "Kunakili takwimu za mkufunzi mwingine", "Kuacha kutaja mafunzo", "Kusema mavuno hayakupimwa"], answer: 3, why: "Kumbukumbu za kweli zina thamani kuliko matokeo yaliyobuniwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kushauri, kupata mapato na kuonyesha matokeo",
        questions: [
          { objective: "O4", q: "Mkulima mkufunzi anaweza kupendekeza kiuatilifu kipi?", options: ["Chochote cha bei rahisi kutoka sokoni", "Bidhaa iliyosajiliwa nchini, inayotumiwa kama lebo inavyosema", "Mchanganyiko wa kemikali kadhaa wa nyumbani", "Chochote alichotumia jirani"], answer: 1, why: "Bidhaa zilizosajiliwa tu, zinazotumiwa kama lebo inavyosema, pamoja na vifaa vya kujikinga." },
          { objective: "O4", q: "Kabla ya kumrekodi mkulima kwa video ya mafunzo, wewe:", options: ["Unaomba ruhusa yake", "Unarekodi kwa siri", "Unaweka mtandaoni kwanza, unauliza baadaye", "Humwambii kamwe"], answer: 0, why: "Ruhusa inawaheshimu watu na mashamba yao." },
          { objective: "O5", q: "Mafunzo yanapaswa kuwa:", options: ["Kwa wanaonunua kutoka kwako tu", "Yanalipwa kwa kamisheni tu", "Wazi kwa wote, wanunue au wasinunue", "Yafutwe mauzo yakiwa madogo"], answer: 2, why: "Kutenganisha mafunzo na kuuza kunalinda imani." },
          { objective: "O5", q: "Mfano tu: kamisheni XOF 500 kwa kila mfuko, mifuko 120 imeuzwa. Kamisheni ya jumla ni:", options: ["XOF 6,000", "XOF 600", "XOF 620", "XOF 60,000"], answer: 3, why: "500 x 120 = 60,000, kabla ya gharama." },
          { objective: "O6", q: "Rejista ya mafunzo inapaswa kuwekwa wapi?", options: ["Kwa siri: karatasi salama au simu iliyofungwa", "Katika kikundi cha WhatsApp cha wazi", "Kwenye ubao wa matangazo", "Apewe mnunuzi yeyote"], answer: 0, why: "Taarifa binafsi lazima ziwekwe kwa siri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuwa Mkulima Mkufunzi: Ugani wa Kilimo na Washauri wa Biashara ya Wakulima",
    questions: [
      { objective: "O1", q: "Ugani maana yake ni:", options: ["Kupanua shamba", "Kuwasaidia wakulima kujifunza na kutumia mbinu bora zaidi", "Kuuza ardhi", "Kukopesha pesa"], answer: 1, why: "Ugani ni ushauri na mafunzo kwa wakulima." },
      { objective: "O1", q: "Mkulima kiongozi kwa kawaida ni:", options: ["Mkulima anayeheshimika anayeandaa maonyesho na kuwafundisha majirani", "Afisa wa benki", "Waziri wa serikali", "Mnunuzi"], answer: 0, why: "Wakulima viongozi wanafundisha kwa mfano kwenye mashamba yao wenyewe." },
      { objective: "O1", q: "Shirika gani linawafunza Washauri wa Biashara ya Shamba nchini Zambia na Msumbiji?", options: ["NAFDAC", "Idara ya Hali ya Hewa ya Kenya", "iDE", "WOAH"], answer: 2, why: "iDE inaendesha mitandao ya FBA huko." },
      { objective: "O2", q: "Watu wazima hujifunza ujuzi wa shamba vizuri zaidi kwa:", options: ["Kusikiliza hotuba ndefu", "Kusoma kijitabu kirefu", "Kutazama TV", "Kuufanya kwa mikono yao wenyewe"], answer: 3, why: "Kujifunza kwa kufanya hukumbukwa." },
      { objective: "O2", q: "Katika kipindi cha dakika 90, muda mwingi zaidi unapaswa kwenda kwa:", options: ["Kukaribisha", "Kujaribu ujuzi", "Kuuza pembejeo", "Kusubiri"], answer: 1, why: "Mazoezi ndipo ujuzi unapojifunzwa." },
      { objective: "O2", q: "Kipi kinasaidia wanawake na vijana wengi zaidi kuhudhuria?", options: ["Kuuliza nani anafanya kazi nyumbani na kuwaalika, kwa muda unaofaa", "Kufanya siku ya soko", "Kutumia lugha wasiyoizungumza", "Kuwaalika wakuu wa kaya tu"], answer: 0, why: "Kuwaalika wanaofanya kazi, kwa muda mzuri, kunafanya mafunzo yawafikie." },
      { objective: "O3", q: "Shamba la maonyesho la haki linalinganisha:", options: ["Vishamba viwili vyenye tofauti nyingi", "Kishamba kimoja tu", "Vishamba vya ukubwa sawa vinavyotofautiana kwa mbinu moja", "Shamba lako na la jirani"], answer: 2, why: "Badilisha kitu kimoja ili matokeo yawe na sababu moja." },
      { objective: "O3", q: "Unapaswa kufanya siku za shamba kwenye shamba la maonyesho lini?", options: ["Baada ya mavuno tu", "Kamwe", "Kabla ya kupanda tu", "Katika hatua muhimu kama kuota, kutoa maua na kuvuna"], answer: 3, why: "Wakulima wanaona tofauti mazao yanapokua." },
      { objective: "O3", q: "Kwa mujibu wa FAO, Shule ya Wakulima Shambani hukutana:", options: ["Mara kwa mara katika mzunguko mzima wa uzalishaji, pamoja na mwezeshaji aliyefunzwa", "Mara moja, kwa saa moja", "Mtandaoni tu", "Darasani tu"], answer: 0, why: "Vikundi vya FFS hujifunza shambani msimu mzima." },
      { objective: "O4", q: "Mkulima mkufunzi anapaswa kutoa dozi za dawa au chanjo:", options: ["Anapoombwa", "Kamwe; mpeleke mkulima kwa daktari wa mifugo na lebo", "Kwa kuku tu", "Mkulima akisisitiza"], answer: 1, why: "Dozi zinatoka kwa daktari wa mifugo na lebo." },
      { objective: "O4", q: "Kuku kadhaa wanakufa ghafla shambani. Unamwambia mkulima:", options: ["Auze waliobaki sokoni", "Asubiri aone", "Aripoti kwa daktari wa mifugo au mamlaka ya mifugo mara moja", "Awazike na anyamaze"], answer: 2, why: "Huenda ni homa ya ndege, ugonjwa unaopaswa kuripotiwa." },
      { objective: "O4", q: "Nchini Nigeria, kemikali za kilimo zinasajiliwa na:", options: ["Benki Kuu", "NiMet", "Polisi", "NAFDAC"], answer: 3, why: "NAFDAC inasajili kemikali za kilimo nchini Nigeria." },
      { objective: "O4", q: "Mkulima anauliza kuhusu mkataba wa mkopo. Wewe:", options: ["Unamwambia asaini haraka", "Unampeleka kwa mshauri anayeaminika na kumshauri ausome wote", "Unausaini kwa niaba yake", "Unamshauri akope zaidi"], answer: 1, why: "Pesa na mikataba viko nje ya jukumu la mkulima mkufunzi." },
      { objective: "O5", q: "FBA kwa kawaida hupata mapato kutokana na:", options: ["Kamisheni kwa pembejeo na ada za huduma", "Mishahara ya serikali tu", "Faini kwa wakulima", "Kuuza taarifa za wakulima"], answer: 0, why: "FBA ni wajasiriamali wanaolipwa kwa kamisheni na ada." },
      { objective: "O5", q: "Mgongano wa maslahi kwa FBA ni nini?", options: ["Kuuza mbegu halisi", "Kurekodi mauzo", "Wakati bidhaa inayokulipa zaidi si bora kwa mkulima", "Kutoa mafunzo"], answer: 2, why: "Kanuni za maadili zipo ili kushughulikia mgongano huu." },
      { objective: "O5", q: "Ipi ni desturi nzuri ya FBA?", options: ["Ficha kamisheni yako", "Uza kwa mkopo ambao watu hawawezi kulipa", "Uza bidhaa zisizo na lebo", "Andika bei zako"], answer: 3, why: "Bei zilizoandikwa zinafanya kuuza kuwe kwa haki na wazi." },
      { objective: "O6", q: "Rejista ya mafunzo inapaswa kuwa na:", options: ["Tarehe, mada, majina na kama kila mkulima aliweza kufanya ujuzi", "PIN za pesa za simu za wakulima", "Jina la mkufunzi tu", "Hakuna; kumbukumbu ya akili inatosha"], answer: 0, why: "Hii inaonyesha nani alifundishwa na kwa kiwango gani." },
      { objective: "O6", q: "Kwa nini kuwafuatilia wakulima baada ya mafunzo?", options: ["Ili kuuza zaidi", "Ili kuona kama walitumia mbinu hiyo na nini kilitokea", "Kwa sababu wanakudai", "Haihitajiki"], answer: 1, why: "Ufuatiliaji unaonyesha matokeo na mahali pa kusaidia zaidi." },
      { objective: "O6", q: "Kama hukupima matokeo, unapaswa:", options: ["Kubuni takwimu nzuri", "Kutumia takwimu za mwaka jana", "Kusema hayakupimwa", "Kunakili ripoti nyingine"], answer: 2, why: "Usibuni matokeo kamwe." },
      { objective: "O6", q: "Kurekodi namba ya simu ya mkulima kunahitaji:", options: ["Hakuna kitu", "Malipo", "Idhini ya mnunuzi", "Ridhaa yake"], answer: 3, why: "Taarifa binafsi zinarekodiwa kwa ruhusa tu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 8, 9, 10, 13, 14, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mpango wa somo", objective: "O2", notYet: "Hotuba bila mazoezi, au ujuzi kadhaa kwa wakati mmoja.", meets: "Ujuzi mmoja, onyesha-jaribu-jadili pamoja na muda na vifaa, unaotosha dakika 60 hadi 90, pamoja na ukaguzi kwamba kila mkulima anaweza kuufanya.", exceeds: "Pia unapanga wanawake na vijana wahudhurie na unajumuisha video fupi ya simu au ufuatiliaji kwa SMS." },
      { name: "Shamba la maonyesho", objective: "O3", notYet: "Hakuna ulinganisho, au vishamba vinatofautiana kwa njia kadhaa.", meets: "Vishamba viwili vya ukubwa sawa vyenye vibao vinavyotofautiana kwa mbinu moja, pamoja na kumbukumbu na tarehe za siku za shamba.", exceeds: "Unajumuisha jinsi mavuno yatakavyopimwa kwa kila kishamba na kushirikishwa kwa ukweli, hata kama mbinu mpya haishindi." },
      { name: "Ushauri salama na kupeleka kwa wataalamu", objective: "O4", notYet: "Anatoa dozi au anataja bidhaa zisizosajiliwa; hakuna orodha ya wataalamu.", meets: "Orodha ya wataalamu yenye mawasiliano, na mambo ambayo mkufunzi hatashauri, pamoja na magonjwa yanayopaswa kuripotiwa.", exceeds: "Anataja chombo cha kitaifa cha usajili wa viuatilifu na jinsi ya kukagua orodha yake." },
      { name: "Mapato ya haki", objective: "O5", notYet: "Mafunzo yamefungwa na kununua, au kamisheni zimefichwa.", meets: "Ikiwa anauza: bei zilizoandikwa, kamisheni wazi na mafunzo wazi kwa wote.", exceeds: "Anajumuisha mapato ya mfano ya msimu baada ya gharama na kanuni ya kusema \"huhitaji kununua\"." },
      { name: "Kumbukumbu na majukumu", objective: "O6", notYet: "Hakuna rejista, au taarifa binafsi zimeshirikiwa wazi.", meets: "Rejista yenye ridhaa, tarehe ya kufuatilia na kuhifadhiwa kwa siri; mawasiliano ya ugani wa eneo hilo yametajwa.", exceeds: "Anarekodi matokeo ya shamba la maonyesho na wakulima waliotumia mbinu wakati wa ufuatiliaji." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoendesha angalau siku moja ya mafunzo ndani ya siku 30 (utafiti wa kufuatilia)",
      "Idadi ya wakulima waliofundishwa na kila mwanafunzi, kutoka rejista za mafunzo",
      "Sehemu ya wakulima waliofundishwa wanaotumia mbinu wakati wa ufuatiliaji",
      "Matokeo ya shamba la maonyesho ukilinganisha na mbinu ya kawaida baada ya msimu mmoja",
      "Wanafunzi wanaofanya kazi na ofisi ya ugani ya eneo lao au programu kama wakulima viongozi au FBA"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja kwa video fupi, SMS na WhatsApp",
      "Karatasi, kalamu na daftari kwa mpango wa somo, mpango wa shamba la maonyesho na rejista",
      "Kipande kidogo cha ardhi kwa shamba la maonyesho, vigingi, kamba na vibao",
      "Mawasiliano ya ofisi ya ugani ya eneo hilo, daktari wa mifugo na chombo cha kitaifa cha usajili wa viuatilifu",
      "Kama dakika 90 kwa jumla, pamoja na muda wa kuendesha siku ya mafunzo"
    ],
    facilitatorNotes: [
      "Fundisha kozi hii kwa njia inayowataka wanafunzi kufundisha: onyesha, jaribu, jadili, huku mpango wa somo na mpangilio wa shamba la maonyesho vikifanywa wakati wa kipindi.",
      "Shirikisha ofisi ya ugani ya eneo hilo; mwalike afisa ugani kwenye Somo la 1 ikiwezekana.",
      "Usiwaruhusu kamwe wanafunzi kutoa dozi za dawa za mifugo, chanjo au homoni au vipindi vya kusubiri katika michezo ya kuigiza; fanyeni mazoezi ya kupeleka kwa mtaalamu badala yake.",
      "Kwa wanaotaka kuwa FBA, igizeni mazungumzo ya mauzo ambapo jibu sahihi ni \"huhitaji kununua\".",
      "Hakikisha rejista za mazoezi zinatumia majina ya kubuni isipokuwa wakulima halisi wamekubali.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
