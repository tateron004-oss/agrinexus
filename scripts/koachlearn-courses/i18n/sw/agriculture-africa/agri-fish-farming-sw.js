"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-fish-farming.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_OXYGEN = { name: "FAO, Kituo cha Ufugaji wa Samaki cha Kanda ya Afrika (Kutty, 1987): oksijeni iliyoyeyuka katika mabwawa ya samaki", url: "https://www.fao.org/4/AC175E/AC175E04.htm" };
const GHANA_MANUAL = { name: "Mwongozo wa wakulima wa ufugaji mdogo wa sato bwawani nchini Ghana (Agyakwah na wenzake, 2020; hazina ya CGIAR)", url: "https://hdl.handle.net/10568/143338" };
const WORLDFISH_NG = { name: "WorldFish: ufugaji wa sato wa GIFT nchini Nigeria (vituo vya kutotolesha, ukuaji, masoko), 2025", url: "https://worldfishcenter.org/impact-story/tilapia-farming-more-lucrative-catfish-inside-nigerias-aquaculture-shift" };
const ALR_CI = { name: "Aquatic Living Resources (2001): idadi kubwa ya samaki inapunguza mavuno ya sato wa Nile katika mabwawa ya Côte d'Ivoire", url: "https://www.alr-journal.org/articles/alr/abs/2001/05/alr1120/alr1120.html" };
const GHANA_FC = { name: "Fisheries Commission (Ghana): vibali na leseni, pamoja na ufugaji wa samaki", url: "https://www.fishcom.gov.gh/" };
const KENYA_ACT = { name: "Kenya: Sheria ya Usimamizi na Maendeleo ya Uvuvi, 2016 (usajili na leseni za ufugaji wa samaki), kwenye FAOLEX", url: "https://faolex.fao.org/docs/pdf/ken160880.pdf" };

module.exports = {
  id: "agri-fish-farming-sw",
  lang: "sw",
  translationOf: "agri-fish-farming",
  category: "Agriculture (Africa)",
  name: "Misingi ya Ufugaji wa Samaki",
  skills: "Kuchagua sato au kambale, Kuchagua mahali na kujenga bwawa, Kukagua ubora wa maji, Kununua na kuweka vifaranga bora, Kulisha na uwiano wa chakula (FCR), Kupiga hesabu ya gharama za mzunguko mmoja",
  outcome: "kupanga na kuendesha mzunguko mmoja wa ufugaji wa sato au kambale wa Afrika bwawani au tangini: kuchagua aina ya samaki na mahali, kukagua vibali, kupima maji kwa vifaa rahisi, kuweka vifaranga bora kwa idadi salama, kulisha vizuri na kufuatilia uwiano wa chakula, kushughulikia matatizo ya kawaida, na kuvuna na kuuza kwa faida uliyoipiga hesabu mapema.",
  about: [
    "Kozi hii ni kwa wafugaji wapya na wadogo wa samaki, wafanyakazi wa mashamba, vijana wajasiriamali wa kilimo na maafisa ugani nchini Ghana, Nigeria, Kenya, Côte d'Ivoire na kote Afrika wanaotaka kufuga sato au kambale wa Afrika katika mabwawa au matangi. Ufugaji wa samaki unaweza kuleta pesa nzuri na chakula kwa familia, lakini mabwawa mengi ya kwanza hushindwa kwa sababu ya vifaranga duni, maji mabaya na chakula kinachogharimu zaidi ya bei ya samaki.",
    "Sura ya 1 inapanga shamba: kuchagua aina ya samaki, kuchagua mahali na kujenga bwawa au tangi na kukagua vibali, na kuweka maji katika hali nzuri kwa vipimo rahisi. Sura ya 2 inakuza na kuuza samaki: vifaranga bora na idadi ya kuweka, kulisha na uwiano wa chakula pamoja na matatizo ya kawaida, na kuvuna, kuuza na hesabu za mzunguko mmoja.",
    "Sheria na vibali vya mashamba ya samaki vinatofautiana kati ya nchi na hubadilika; kozi hii inataja ofisi za kuuliza. Haitoi vipimo vya dawa wala kemikali: samaki wakiugua, mpigie afisa ugani wa uvuvi au daktari wa mifugo. Takwimu za pesa ni mifano tu; tumia bei zako mwenyewe. Kila somo linachukua kama dakika tano na linaisha na kazi kwa shamba lako. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wenye gharama kwa mzunguko mmoja wa bwawa (au tangi) katika shamba lako, au kwa mfano kama bwawa la sato la mita za mraba 300 karibu na Kumasi au matangi ya kambale karibu na Ibadan: aina ya samaki na sababu; mahali, chanzo cha maji na kibali ulichokagua; vipimo vya maji na mara ngapi utavifanya; idadi ya vifaranga, idadi kwa eneo na kituo kilichosajiliwa cha kutotolesha utakachonunua kwacho; samaki wanaotarajiwa kuishi, uzito wa mavuno na chakula kinachohitajika kwa kutumia FCR inayotarajiwa; kila gharama; mauzo yanayotarajiwa; faida au hasara; na bei yako ya kurudisha gharama kwa kilo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafugaji wapya na wadogo wa samaki, wafanyakazi wa mashamba, vijana wajasiriamali wa kilimo na maafisa ugani nchini Ghana, Nigeria, Kenya, Afrika Magharibi inayozungumza Kifaransa na kwingineko Afrika, wanaopanga au kuendesha bwawa moja hadi machache ya udongo, mabwawa yenye karatasi ngumu (liner) au matangi ya sato au kambale wa Afrika.",
    startingPoint: "Wanajua kwamba samaki wanaweza kufugwa, na huenda wana chanzo cha maji na ardhi kidogo. Wengi hawajawahi kupima maji, hununua vifaranga kwa muuzaji yeyote, hulisha kwa kubahatisha, na hawajapiga hesabu ya gharama za mzunguko kabla ya kuanza.",
    gap: "Sababu za kawaida za kushindwa ni vifaranga duni au wa jinsia mchanganyiko, samaki wengi kupita kiasi, oksijeni kushuka ghafla alfajiri, kulisha kupita kiasi na gharama za chakula kuzidi mauzo ya samaki. Wafugaji wanahitaji kupanga mzunguko kwenye karatasi, kuweka maji salama kwa vipimo rahisi, kuweka idadi sahihi ya vifaranga wazuri, na kufuatilia chakula dhidi ya ukuaji ili wajue kabla ya mavuno kama watapata faida.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: simu ya kawaida au simu janja, kikokotoo, na vifaa vya bei nafuu vya kupima (kipimajoto, vipande vya pH, diski ya Secchi ya kutengeneza nyumbani)",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi za shamba",
      "Vibali na sheria za aina za samaki zinatofautiana kati ya nchi; wanafunzi lazima waulize ofisi ya uvuvi ya taifa au ya kaunti",
      "Hakuna vipimo vya dawa wala kemikali; samaki wagonjwa wanapelekwa kwa afisa ugani au daktari wa mifugo",
      "Takwimu za pesa ni mifano; bei za chakula na samaki zinatofautiana sana kwa mahali na msimu"
    ],
    prerequisites: "Hakuna. Mawazo ya \"Kumbukumbu za Shamba na Faida Ghafi\" kutoka kozi ya \"Biashara ya Kilimo na Usimamizi wa Shamba\" yanasaidia katika hesabu za gharama katika Somo la 6."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukizingatia maji yako, ardhi yako, pesa zako na soko la karibu", action: "kuchagua sato au kambale wa Afrika na mfumo wa bwawa au tangi", standard: "ukitoa angalau sababu tatu zinazohusiana na mahali pako na wanunuzi wako" },
    { id: "O2", condition: "Ukipewa mahali panapowezekana", action: "kukagua mahali hapo kwa maji, udongo, mteremko na mafuriko na kuorodhesha vibali vya kuulizia", standard: "ukitaja ofisi ya uvuvi ya nchi yako utakayowasiliana nayo" },
    { id: "O3", condition: "Ukiwa na kipimajoto, vipande vya pH na diski ya Secchi", action: "kupima maji ya bwawa na kusema la kufanya oksijeni, joto au pH vikiwa nje ya kiwango", standard: "ukiandika kila kipimo pamoja na tarehe na saa" },
    { id: "O4", condition: "Ukipewa ukubwa wa bwawa au tangi", action: "kukokotoa idadi ya vifaranga vya kuweka na kuorodhesha mambo ya kukagua katika kituo kilichosajiliwa cha kutotolesha", standard: "hesabu ikiwa sahihi na idadi kwa eneo ikikubaliwa na afisa ugani au kituo cha kutotolesha" },
    { id: "O5", condition: "Ukipewa kumbukumbu za chakula na uzito wa sampuli", action: "kukokotoa uwiano wa ubadilishaji wa chakula (FCR) na kugundua matatizo ya kawaida mapema", standard: "sahihi hadi nafasi moja ya desimali" },
    { id: "O6", condition: "Ukipewa gharama, samaki wanaotarajiwa kuishi, uzito wa mavuno na bei", action: "kuandika mpango wenye gharama kwa mzunguko mmoja pamoja na faida na bei ya kurudisha gharama", standard: "kila gharama ikiwemo na hesabu zikiwa sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga shamba la samaki",
      lessons: [
        {
          title: "Kuchagua aina ya samaki na mfumo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua sato au kambale wa Afrika na mfumo wa bwawa au tangi kwa shamba lako.",
          text: [
            "Samaki wawili wanafugwa zaidi Afrika. Sato wa Nile (tilapia) anapendwa Ghana, Kenya, Côte d'Ivoire na Misri. Anakula vidonge vya chakula (pellets) na chakula cha asili kilicho katika maji ya kijani, na anauzwa mbichi, wa kukaanga au wa kuchoma. Sato wa jinsia mchanganyiko huzaliana bwawani na kulijaza samaki wadogo, kwa hiyo wafugaji hununua vifaranga wa jinsia moja (mono-sex, karibu wote madume). Aina zilizoboreshwa kama GIFT hukua haraka zaidi; WorldFish inaripoti kuwa wafugaji nchini Nigeria hufikia takriban gramu 600 kwa miezi sita kwa GIFT na ulishaji mzuri.",
            "Kambale wa Afrika (Clarias) ndiye samaki anayefugwa zaidi Nigeria, na anapendwa mbichi na wa kukaushwa kwa moshi. Anaweza kupumua hewa, kwa hiyo anastahimili oksijeni kidogo vizuri zaidi na anaweza kuwekwa wengi zaidi, mara nyingi katika matangi. Lakini anahitaji chakula chenye protini nyingi zaidi, na samaki wakubwa huwala wadogo, kwa hiyo unawapanga kwa ukubwa.",
            "Chagua mfumo: bwawa la udongo ni nafuu kuendesha mahali ambapo udongo unashika maji; bwawa lenye karatasi ngumu (liner) au tangi la saruji au plastiki linafaa udongo wa mchanga au viwanja vidogo, lakini linagharimu zaidi kujenga na linahitaji kubadilisha maji mara nyingi zaidi. Muhimu zaidi: kabla ya kuchagua, waulize wanunuzi wanataka samaki gani, wa ukubwa gani, na kwa bei gani."
          ],
          steps: ["Waulize wanunuzi watatu (wauzaji sokoni, hoteli, wanaokausha kwa moshi) wanataka samaki gani, ukubwa gani na bei gani.", "Kagua maji yako: kiasi gani, mwaka mzima, na usafi wake.", "Kagua udongo wako: unashika maji?", "Chagua aina ambayo wanunuzi wanataka na maji yako yanaweza kuitunza.", "Chagua bwawa au tangi kwa kuzingatia udongo, nafasi na pesa."],
          words: [["Ufugaji wa samaki (aquaculture)", "kufuga samaki na wanyama wengine wa majini."], ["Kifaranga cha samaki (fingerling)", "samaki mchanga, wa ukubwa wa kidole hivi, anayenunuliwa kuwekwa bwawani."], ["Jinsia moja (mono-sex)", "vifaranga ambao karibu wote ni wa jinsia moja (sato madume), ili wakue badala ya kuzaliana."], ["GIFT", "Genetically Improved Farmed Tilapia: aina ya sato inayokua haraka iliyotengenezwa na WorldFish."]],
          slides: [
            { title: "Sato wa Nile", bullets: ["Anapendwa Ghana, Kenya, Côte d'Ivoire", "Anakula vidonge na chakula cha maji ya kijani", "Nunua vifaranga wa jinsia moja; GIFT hukua haraka"] },
            { title: "Kambale wa Afrika", bullets: ["Samaki anayefugwa zaidi Nigeria; mbichi au wa moshi", "Anapumua hewa; anaweza kuwekwa wengi, katika matangi", "Anahitaji chakula chenye protini; wapange kwa ukubwa"] },
            { title: "Bwawa au tangi", bullets: ["Bwawa la udongo: nafuu mahali udongo unashika maji", "Bwawa lenye liner au tangi: udongo wa mchanga, viwanja vidogo", "Matangi yanagharimu zaidi na yanahitaji kubadilisha maji zaidi"] },
            { title: "Anza na mnunuzi", bullets: ["Samaki gani? Ukubwa gani? Bei gani?", "Uliza angalau wanunuzi watatu", "Kisha chagua aina na mfumo"] }
          ],
          sources: [WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Waulize angalau wanunuzi watatu walio karibu nawe wanataka samaki gani, wa ukubwa gani na kwa bei gani. Andika majibu yao, kisha chagua sato au kambale na bwawa au tangi, ukiwa na sababu tatu kutoka mahali pako na wanunuzi wako.",
          youCanNow: "kuchagua kati ya sato na kambale wa Afrika, na kati ya bwawa na tangi, ukitumia maji yako, udongo wako na wanunuzi wako.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini wafugaji wa sato hununua vifaranga wa jinsia moja?", options: ["Ni nafuu zaidi", "Ili samaki wakue badala ya kuzaliana na kujaza bwawa samaki wadogo", "Hawahitaji chakula", "Wana ladha nzuri zaidi"], answer: 1, why: "Sato wa jinsia mchanganyiko huzaliana bwawani na mwishowe wanadumaa na kubaki wadogo." },
            { objective: "O1", q: "Udongo wako ni wa mchanga na haushiki maji. Mfumo gani unafaa zaidi?", options: ["Bwawa la udongo lisilo na liner", "Haiwezekani kufuga samaki kabisa", "Bwawa kando ya mto", "Bwawa lenye liner au tangi"], answer: 3, why: "Liner au tangi linashika maji mahali ambapo udongo haushiki." }
          ]
        },
        {
          title: "Kuchagua mahali, kujenga bwawa, na vibali",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kagua mahali pa bwawa na uorodheshe vibali vya kuulizia.",
          text: [
            "Mahali pazuri pa bwawa pana: maji mwaka mzima, safi na yasiyochafuliwa na viwanda, migodi au mashamba yanayonyunyiziwa dawa; udongo wenye mfinyanzi (clay) wa kutosha kushika maji (finya kiganja cha udongo wenye unyevu: ukibaki na umbo lake, hiyo ni dalili nzuri); mteremko mdogo ili bwawa lijazwe na kumwagwa kwa mvuto wa ardhi; hakuna mafuriko; na karibu vya kutosha kulilinda dhidi ya wezi na wanyama wanaokula samaki.",
            "Jenga bwawa lenye tuta (kingo) imara lenye mteremko na lililopandwa nyasi kuzuia mmomonyoko, mlango wa kuingiza maji wenye chujio ili samaki wa porini wasiingie, na mlango wa kutoa maji au bomba la kumwaga ili uweze kulimwaga wakati wa mavuno. Bwawa la mita za mraba mia chache ni rahisi kwa mwanzilishi kusimamia. Liwekee uzio ukiweza, na zuia wanyama na watoto wasikaribie. Andaa bwawa kabla ya kuweka samaki: likaushe, ondoa matope na samaki wa porini, na weka chokaa na mbolea kama afisa ugani wako atashauri.",
            "Mashamba ya samaki mara nyingi yanahitaji usajili au kibali, na wakati mwingine idhini ya kutumia maji au ya mazingira. Nchini Kenya, Sheria ya Usimamizi na Maendeleo ya Uvuvi, 2016 inataka ufugaji wa samaki usajiliwe na upewe leseni na Kenya Fisheries Service. Nchini Ghana, Fisheries Commission inatoa vibali vya ufugaji wa samaki. Nchini Nigeria, uliza Federal Department of Fisheries and Aquaculture na wizara ya jimbo lako; nchini Côte d'Ivoire, wizara inayoshughulikia uvuvi. Baadhi ya maeneo yanaruhusu aina fulani tu za samaki. Sheria hubadilika, kwa hiyo kagua kabla ya kuchimba."
          ],
          steps: ["Kagua chanzo cha maji: yanatosha mwaka mzima, na ni safi.", "Fanya kipimo cha kufinya udongo; mwombe afisa ugani athibitishe.", "Chagua ardhi yenye mteremko mdogo juu ya kiwango cha mafuriko, karibu na mahali unapoweza kuilinda.", "Panga tuta imara, mlango wa kuingiza maji wenye chujio na mlango wa kutoa maji.", "Wasiliana na ofisi ya uvuvi: usajili, vibali, matumizi ya maji, aina zinazoruhusiwa.", "Andaa bwawa kabla ya kuweka samaki, kama afisa ugani wako anavyoshauri."],
          words: [["Tuta", "ukingo wa udongo unaozunguka bwawa."], ["Mlango wa kuingiza na wa kutoa maji", "mabomba au mifereji ambapo maji yanaingia na kutoka bwawani."], ["Kibali", "ruhusa rasmi unayohitaji kabla ya kuanza au kuendesha shamba."]],
          slides: [
            { title: "Mahali pazuri", bullets: ["Maji safi mwaka mzima", "Udongo wenye mfinyanzi unaoshika maji", "Mteremko mdogo; hakuna mafuriko; rahisi kulinda"] },
            { title: "Jenga vizuri", bullets: ["Tuta imara lenye nyasi", "Mlango wa kuingiza maji wenye chujio; mlango wa kumwaga", "Uzio; zuia wanyama na watoto"] },
            { title: "Vibali: kagua kwanza", bullets: ["Kenya: sajili na upate leseni kutoka Kenya Fisheries Service", "Ghana: kibali cha Fisheries Commission", "Nigeria na Côte d'Ivoire: ofisi za uvuvi za taifa na jimbo"] },
            { title: "Kabla ya kuchimba", bullets: ["Uliza kuhusu sheria za matumizi ya maji na mazingira", "Uliza aina gani za samaki zinaruhusiwa", "Sheria hubadilika: kagua na ofisi"] }
          ],
          sources: [GHANA_MANUAL, KENYA_ACT, GHANA_FC],
          tryIt: "Tembelea mahali unapofikiria. Andika chanzo cha maji, matokeo ya kipimo cha kufinya udongo, mteremko, hatari yoyote ya mafuriko na jinsi utakavyopalinda. Kisha tafuta namba ya simu au ofisi ya mamlaka ya uvuvi na uorodheshe maswali matatu ya kuuliza kuhusu vibali na aina za samaki.",
          youCanNow: "kupima kama mahali panafaa bwawa la samaki, kupanga sehemu zake kuu, na kujua ofisi ya uvuvi ya kuuliza kuhusu vibali.",
          quickCheck: [
            { objective: "O2", q: "Unafinya udongo wenye unyevu na unabaki na umbo lake. Hii inaonyesha nini?", options: ["Udongo una mfinyanzi na unaweza kushika maji", "Udongo una mchanga mwingi mno", "Mahali patafurika", "Maji yamechafuka"], answer: 0, why: "Udongo wa mfinyanzi unaobaki na umbo kwa kawaida unashika maji ya bwawa; mwombe afisa ugani athibitishe." },
            { objective: "O2", q: "Kabla ya kuchimba bwawa la samaki nchini Ghana, uulize nani kuhusu vibali?", options: ["Benki tu", "Hakuna; mabwawa ya samaki hayahitaji vibali", "Fisheries Commission", "Bodi ya kudhibiti wadudu"], answer: 2, why: "Fisheries Commission ya Ghana inatoa vibali vya ufugaji wa samaki." }
          ]
        },
        {
          title: "Ubora wa maji kwa vipimo rahisi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Pima maji ya bwawa na uchukue hatua yakiharibika.",
          text: [
            "Samaki wanaishi majini, kwa hiyo maji mabaya yanawaua haraka. Angalia mambo matatu. Oksijeni: katika mabwawa ya kijani iko juu zaidi mchana na chini zaidi alfajiri, kwa sababu mimea na mwani hutumia oksijeni usiku. Siku za mawingu, mwani mwingi mno, chakula kinachooza na samadi vinaifanya kuwa mbaya zaidi. Karatasi ya FAO inaeleza kuwa sato hupunguza sana shughuli zao oksijeni ikishuka hadi takriban mg 1 hadi 2 kwa lita. Joto: sato na kambale ni samaki wa maji ya joto; wanakula na kukua polepole katika maji baridi, kama maeneo ya nyanda za juu au msimu wa baridi. pH (kiwango cha asidi ya maji): maji yenye asidi nyingi mno au alkali nyingi mno yanawasumbua samaki.",
            "Vipimo rahisi: kipimajoto kwa joto; vipande vya karatasi vya pH au kifaa cha kupima; diski ya Secchi (sahani nyeupe na nyeusi kwenye fimbo yenye alama) kuona jinsi maji yalivyo ya kijani; na macho yako alfajiri. Samaki wanaotweta juu ya maji alfajiri ni ishara kwamba oksijeni iko chini. Ukiweza kumudu, kifaa au mita ya kupima oksijeni kinakupa namba.",
            "Oksijeni ikiwa chini: acha au punguza kulisha hadi samaki wapone, ongeza maji safi, piga au pampu maji ili kuchanganya hewa, na ondoa samaki waliokufa. Maji yakiwa ya kijani sana, punguza mbolea. pH ikiwa si sahihi, muulize afisa ugani wako kuhusu kuweka chokaa. Andika kila kipimo pamoja na tarehe na saa."
          ],
          steps: ["Kagua bwawa alfajiri: samaki wanatweta juu ya maji?", "Pima joto la maji kwa kipimajoto.", "Pima pH kwa vipande au kifaa mara moja kwa wiki.", "Shusha diski ya Secchi hadi isionekane; andika kina.", "Oksijeni chini: acha kulisha, ongeza maji safi, piga maji au weka hewa, ondoa samaki waliokufa.", "Andika kila matokeo pamoja na tarehe na saa."],
          words: [["Oksijeni iliyoyeyuka", "oksijeni iliyochanganyika ndani ya maji, ambayo samaki huipumua kupitia mashavu yao (gills)."], ["pH", "namba inayoonyesha kama maji yana asidi au alkali kiasi gani."], ["Diski ya Secchi", "sahani nyeusi na nyeupe inayoshushwa majini kuona jinsi maji yalivyo safi au ya kijani."], ["Kuweka hewa (aeration)", "kuchanganya hewa ndani ya maji, kwa pampu, kasia au kwa kupiga maji."]],
          slides: [
            { title: "Oksijeni", bullets: ["Juu zaidi mchana, chini zaidi alfajiri", "Mbaya zaidi siku za mawingu, na chakula kinachooza", "Sato hupunguza shughuli karibu mg 1 hadi 2 kwa lita"] },
            { title: "Joto na pH", bullets: ["Maji ya joto: kukua haraka; baridi: polepole", "Asidi au alkali nyingi mno inasumbua samaki", "Muulize afisa ugani kuhusu chokaa"] },
            { title: "Vipimo rahisi", bullets: ["Kipimajoto; vipande vya pH", "Diski ya Secchi: maji ni ya kijani kiasi gani?", "Ukaguzi wa alfajiri: samaki wanatweta = oksijeni chini"] },
            { title: "Oksijeni chini: chukua hatua sasa", bullets: ["Acha au punguza kulisha", "Ongeza maji safi; piga maji au weka hewa", "Ondoa samaki waliokufa; liandike"] }
          ],
          sources: [FAO_OXYGEN, GHANA_MANUAL],
          tryIt: "Tengeneza diski ya Secchi kutoka sahani nyeupe iliyopakwa rangi nyeusi robo mbili, iliyofungwa kwenye fimbo yenye alama kila sm 5. Kisha tengeneza karatasi ya kumbukumbu za vipimo vya maji yenye safu za tarehe, saa, joto, pH, kina cha Secchi, tabia ya samaki na hatua iliyochukuliwa, na ujaze mstari mmoja kutoka bwawa au chanzo cha maji kilicho karibu nawe.",
          youCanNow: "kukagua oksijeni, joto, pH na ukijani wa maji kwa vifaa rahisi na kuchukua hatua haraka maji yakiharibika.",
          quickCheck: [
            { objective: "O3", q: "Oksijeni kwa kawaida iko chini zaidi lini katika bwawa la samaki la kijani?", options: ["Saa sita mchana", "Alasiri", "Alfajiri", "Haibadiliki kamwe"], answer: 2, why: "Usiku mimea na mwani hutumia oksijeni bila kuitengeneza, kwa hiyo inashuka hadi alfajiri." },
            { objective: "O3", q: "Alfajiri unaona samaki wanatweta juu ya maji. Unafanya nini kwanza?", options: ["Kuwalisha zaidi", "Kuacha kulisha, kuongeza maji safi na kupiga maji au kuweka hewa", "Kuongeza mbolea", "Kusubiri hadi kesho"], answer: 1, why: "Kutweta kunamaanisha oksijeni iko chini; chakula kidogo na maji safi yaliyochanganywa yanairudisha juu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga shamba la samaki",
        questions: [
          { objective: "O1", q: "Lipi ni kweli kuhusu kambale wa Afrika?", options: ["Anaweza kupumua hewa na anastahimili oksijeni kidogo vizuri zaidi", "Anakula nyasi tu", "Huzaliana na kujaza mabwawa kama sato wa jinsia mchanganyiko", "Hawezi kufugwa katika matangi"], answer: 0, why: "Kambale wana kiungo cha kupumua hewa, kwa hiyo wanastahimili oksijeni kidogo na matangi." },
          { objective: "O1", q: "Unapaswa kujua nini kwanza, kabla ya kuchagua samaki?", options: ["Rangi ya samaki", "Binamu yako anafuga nini", "Samaki mkubwa zaidi anayewezekana", "Wanunuzi wako wanataka samaki gani, ukubwa gani na bei gani"], answer: 3, why: "Samaki usiyeweza kumuuza kwa bei nzuri ni hasara, hata akikua vizuri namna gani." },
          { objective: "O2", q: "Kwa nini bwawa linahitaji mlango wa kutoa maji au bomba la kumwaga?", options: ["Kuruhusu samaki wa porini kuingia", "Ili uweze kulimwaga kwa ajili ya mavuno na usafishaji", "Kuweka maji ya joto", "Halihitaji"], answer: 1, why: "Kumwaga maji kunafanya mavuno na maandalizi ya bwawa kuwa rahisi." },
          { objective: "O2", q: "Nchini Kenya, ufugaji wa samaki lazima usajiliwe na upewe leseni na:", options: ["Kenya Dairy Board", "Kenya Wildlife Service", "Kenya Fisheries Service", "Ofisi ya barabara ya kaunti"], answer: 2, why: "Sheria ya Usimamizi na Maendeleo ya Uvuvi, 2016 inataka usajili na leseni kutoka Kenya Fisheries Service." },
          { objective: "O3", q: "Diski ya Secchi inaonyesha nini?", options: ["Jinsi maji yalivyo ya kijani au safi", "Uzito wa samaki", "pH ya bwawa", "Oksijeni kwa mg kwa lita"], answer: 0, why: "Kina ambapo diski inapotea kinaonyesha kiasi cha mwani kilicho majini." }
        ]
      }
    },
    {
      name: "Sura 2: Kukuza na kuuza samaki",
      lessons: [
        {
          title: "Vifaranga bora na idadi ya kuweka",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kokotoa idadi ya vifaranga vya kuweka na ukague kituo cha kutotolesha.",
          text: [
            "Vifaranga wazuri ni nusu ya mafanikio. Nunua kutoka kituo cha kutotolesha vifaranga kilichosajiliwa au kuthibitishwa na mamlaka ya uvuvi, au kinachopendekezwa na afisa ugani wako. Uliza: Je, sato ni wa jinsia moja, na ni aina gani? Je, vifaranga wote wana ukubwa unaokaribiana? Wangapi hufa katika wiki za kwanza, na je, wanawabadilisha? Naweza kuona kituo? Vifaranga wenye afya huogelea kwa nguvu, hawana majeraha, na wana ukubwa sawa. Samaki waliovuliwa porini au wenye ukubwa mchanganyiko huleta magonjwa, kuzaliana na kulana wao kwa wao.",
            "Idadi ya kuweka ni idadi ya samaki kwa mita moja ya mraba (mabwawa) au kwa mita moja ya ujazo (matangi). Samaki wengi mno wanaleta oksijeni kidogo, ukuaji wa polepole na samaki wadogo. Utafiti wa mabwawa ya sato nchini Côte d'Ivoire yaliyolishwa kwa mbolea tu uligundua kwamba samaki 2 hadi 3 kwa mita ya mraba tayari walipunguza mavuno. Kwa chakula kizuri cha vidonge, samaki wengi zaidi wanaweza kuwekwa, na matangi yenye maji yanayotiririka au yanayowekewa hewa zaidi tena, hasa kwa kambale. Kubaliana na afisa ugani au kituo cha kutotolesha juu ya idadi inayofaa mfumo wako.",
            "Mfano (takwimu ni mfano tu): bwawa la mita 20 kwa mita 15 ni mita za mraba 300. Kwa idadi ya mfano ya samaki 3 kwa mita ya mraba, unaweka vifaranga 900. Hamisha vifaranga wakati wa baridi ya asubuhi, katika mifuko yenye oksijeni au maji safi, na acha mifuko ielee bwawani kwa muda ili joto lilingane kabla ya kuwaachilia."
          ],
          steps: ["Pima bwawa: urefu x upana = eneo kwa mita za mraba.", "Kubaliana na afisa ugani au kituo cha kutotolesha juu ya idadi kwa eneo.", "Eneo x idadi kwa eneo = idadi ya vifaranga.", "Chagua kituo kilichosajiliwa au kinachopendekezwa; uliza kuhusu aina, jinsia moja, ukubwa na vifo.", "Kagua vifaranga: wachangamfu, bila majeraha, ukubwa sawa.", "Safirisha wakati wa baridi ya asubuhi; elea mifuko ili joto lilingane kabla ya kuachilia."],
          words: [["Idadi ya kuweka (stocking density)", "idadi ya samaki kwa mita moja ya mraba ya bwawa, au kwa mita moja ya ujazo ya maji ya tangi."], ["Kituo cha kutotolesha (hatchery)", "shamba linalozalisha samaki na kukuza samaki wachanga ili kuwauza."], ["Kulana", "samaki kula samaki wengine wa aina yao, jambo la kawaida kwa kambale wa ukubwa mchanganyiko."]],
          slides: [
            { title: "Vifaranga wazuri", bullets: ["Kituo kilichosajiliwa au kinachopendekezwa", "Sato: jinsia moja, aina inayojulikana", "Wachangamfu, bila majeraha, ukubwa sawa"] },
            { title: "Idadi ni muhimu", bullets: ["Wengi mno: oksijeni kidogo, ukuaji polepole, samaki wadogo", "Côte d'Ivoire: 2-3 kwa m2 ni wengi mno kwa mbolea tu", "Kubaliana na afisa ugani au kituo juu ya idadi"] },
            { title: "Hesabu ya mfano", bullets: ["m 20 x m 15 = m2 300", "m2 300 x samaki 3 kwa m2 = vifaranga 900", "Takwimu ni mfano tu"] },
            { title: "Siku ya kuweka samaki", bullets: ["Baridi ya asubuhi", "Mifuko yenye oksijeni au maji safi", "Elea mifuko ili joto lilingane"] }
          ],
          sources: [ALR_CI, WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Pima bwawa au tangi lako (au tumia mita 20 kwa mita 15). Muulize afisa ugani au kituo cha kutotolesha idadi inayofaa mfumo wako, na ukokotoe vifaranga wangapi wa kununua. Kisha andika maswali matano ya kuuliza kituo cha kutotolesha kabla ya kulipa.",
          youCanNow: "kukokotoa idadi ya vifaranga kwa bwawa na kuchagua kituo cha kutotolesha kinachouza samaki bora.",
          quickCheck: [
            { objective: "O4", q: "Bwawa ni mita 25 kwa mita 10 na idadi iliyokubaliwa ni samaki 2 kwa mita ya mraba. Vifaranga wangapi?", options: ["250", "350", "500", "700"], answer: 2, why: "25 x 10 = mita za mraba 250, na 250 x 2 = vifaranga 500." },
            { objective: "O4", q: "Ni kundi gani la vifaranga wa kambale unapaswa kukataa?", options: ["Samaki wachangamfu wa ukubwa sawa", "Samaki kutoka kituo kilichosajiliwa", "Samaki wasio na majeraha", "Samaki wa ukubwa mchanganyiko sana"], answer: 3, why: "Ukubwa mchanganyiko unaleta kulana, kwa sababu kambale wakubwa huwala wadogo." }
          ]
        },
        {
          title: "Kulisha, uwiano wa chakula na matatizo ya kawaida",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kokotoa uwiano wa ubadilishaji wa chakula na ugundue matatizo mapema.",
          text: [
            "Chakula kwa kawaida ndiyo gharama kubwa zaidi katika ufugaji wa samaki. Tumia chakula bora chenye vidonge vya ukubwa unaofaa mdomo wa samaki; vidonge vinavyoelea vinakuwezesha kuona kiasi kinacholiwa. Lisha saa zile zile kila siku, na toa tu kile samaki wanachokula kwa dakika chache; chakula kisicholiwa huoza na kumaliza oksijeni. Kiasi kinaongezeka samaki wanapokua: kila wiki mbili hadi nne, vua kwa wavu na upime uzito wa sampuli ya samaki, kokotoa uzito wa wastani, na rekebisha chakula kwa kutumia jedwali la mtengenezaji wa chakula au la afisa ugani. Hifadhi chakula mahali pakavu na juu ya sakafu; chakula chenye ukungu ni sumu.",
            "Uwiano wa ubadilishaji wa chakula (FCR) unaonyesha jinsi chakula kinavyogeuka kuwa samaki: FCR = chakula kilichotolewa / uzito ulioongezeka. Mfano: ulilisha kg 400 na samaki waliongezeka kg 250, kwa hiyo FCR = 400 / 250 = 1.6. FCR ya chini inamaanisha chakula kidogo kwa kila kg ya samaki. FCR inapanda kwa kulisha kupita kiasi, chakula duni, maji mabaya na samaki wagonjwa.",
            "Matatizo ya kawaida: oksijeni kidogo alfajiri; wanyama wanaokula samaki kama ndege, nyoka na fisi maji, pamoja na wezi; sato kuzaliana pale vifaranga walipokuwa wa jinsia mchanganyiko; kambale kulana ukubwa ukitofautiana (wapange); mafuriko kusomba samaki; na magonjwa. Dalili za samaki wagonjwa ni kutokula, vidonda, kuogelea kwa namna isiyo ya kawaida au vifo vingi. Ondoa samaki waliokufa, acha kulisha, kagua maji, na mpigie afisa ugani wa uvuvi au daktari wa mifugo; usitumie dawa wala kemikali bila ushauri wao."
          ],
          steps: ["Lisha chakula bora cha ukubwa unaofaa kwa saa maalum.", "Toa tu kile samaki wanachokula kwa dakika chache.", "Kila wiki 2 hadi 4, pima uzito wa sampuli na urekebishe chakula kwa jedwali.", "Andika chakula chote kilichotolewa.", "FCR = chakula kilichotolewa / uzito ulioongezeka.", "Angalia matatizo kila siku; mpigie afisa ugani au daktari wa mifugo kwa samaki wagonjwa."],
          words: [["Uwiano wa ubadilishaji wa chakula (FCR)", "kilo za chakula zinazotumika kukuza kilo moja ya samaki."], ["Kupima uzito wa sampuli", "kuvua kwa wavu na kupima baadhi ya samaki ili kupata uzito wao wa wastani."], ["Mnyama anayewinda samaki", "mnyama anayekula samaki, kama baadhi ya ndege, nyoka na fisi maji."]],
          slides: [
            { title: "Lisha vizuri", bullets: ["Chakula bora, vidonge vya ukubwa sahihi", "Saa maalum; kile tu wanachokula kwa dakika chache", "Pima uzito wa sampuli kila wiki 2 hadi 4"] },
            { title: "Uwiano wa chakula (FCR)", bullets: ["FCR = chakula kilichotolewa / uzito ulioongezeka", "Chakula kg 400 / ongezeko kg 250 = 1.6", "Ya chini ni bora"] },
            { title: "Matatizo ya kawaida", bullets: ["Oksijeni kidogo; wanyama wanaowinda samaki na wezi", "Sato kuzaliana; kambale kulana", "Mafuriko; magonjwa"] },
            { title: "Samaki wagonjwa", bullets: ["Hawali, vidonda, kuogelea vibaya, vifo", "Ondoa samaki waliokufa; acha kulisha; kagua maji", "Mpigie afisa ugani au daktari; hakuna dawa bila ushauri"] }
          ],
          sources: [GHANA_MANUAL, FAO_OXYGEN],
          tryIt: "Tengeneza kumbukumbu ya ulishaji yenye safu za tarehe, chakula kilichotolewa (kg), uzito wa wastani wa sampuli na maelezo. Kisha kokotoa FCR kwa mfano huu: chakula kg 300 kilitolewa, samaki waliongezeka kg 200. Andika njia moja ya kuishusha.",
          youCanNow: "kulisha samaki vizuri, kukokotoa FCR na kugundua matatizo ya kawaida mapema.",
          quickCheck: [
            { objective: "O5", q: "Ulilisha kg 450 za chakula na samaki waliongezeka kg 300. FCR ni ngapi?", options: ["0.7", "1.2", "1.5", "2.0"], answer: 2, why: "450 ukigawanya kwa 300 ni 1.5." },
            { objective: "O5", q: "Kwa nini utoe tu kile samaki wanachokula kwa dakika chache?", options: ["Chakula kisicholiwa huoza, humaliza oksijeni na kupoteza pesa", "Samaki hawapendi chakula", "Chakula ni bure", "Kinafanya maji kuwa safi zaidi kwa kuogelea"], answer: 0, why: "Chakula kisicholiwa ni pesa iliyopotea na kinachafua maji." }
          ]
        },
        {
          title: "Kuvuna, kuuza na hesabu za mzunguko mmoja",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika mpango wenye gharama kwa mzunguko mmoja pamoja na faida na bei ya kurudisha gharama.",
          text: [
            "Panga mauzo kabla ya kuweka samaki. Kubaliana na wanunuzi juu ya ukubwa, siku na bei, na vuna wakati wa baridi ya asubuhi. Acha kulisha siku moja kabla ili samaki wasafiri vizuri zaidi. Mwaga bwawa kiasi na uvue samaki kwa wavu, au limwage lote kwa mavuno kamili. Weka samaki baridi na safi kwenye barafu au kivulini, na uza haraka: samaki mbichi huharibika ndani ya saa chache kwenye joto. Kukausha kwa moshi au kwa jua, jambo la kawaida kwa kambale nchini Nigeria, huongeza thamani na muda wa kuuza. Mavuno ya sehemu ya samaki wakubwa zaidi yanaweza kugawa mauzo katika wiki kadhaa.",
            "Piga hesabu ya gharama za mzunguko mmoja kwenye karatasi kwanza. Mfano wa bwawa la sato la mita za mraba 300 nchini Ghana (takwimu zote ni mifano tu; tumia bei zako mwenyewe): vifaranga 900 kwa GHS 1.50 = GHS 1,350; chakula: mavuno yanayotarajiwa samaki 720 (80% wanaishi) x kg 0.35 = kg 252, na kwa FCR inayotarajiwa ya 1.6 hiyo inahitaji takriban kg 400 za chakula kwa GHS 12 = GHS 4,800; maandalizi ya bwawa GHS 300; kazi na ulinzi GHS 1,200; mavuno na usafiri GHS 300. Jumla ya gharama GHS 7,950.",
            "Mauzo: kg 252 kwa GHS 40 kwa kg = GHS 10,080. Faida = 10,080 - 7,950 = GHS 2,130. Bei ya kurudisha gharama = jumla ya gharama / kg zilizovunwa = 7,950 / 252 = takriban GHS 31.50 kwa kg. Bei ya mnunuzi ikiwa karibu na bei yako ya kurudisha gharama, badilisha mpango: vifaranga bora zaidi, upotevu mdogo wa chakula, au mnunuzi bora zaidi."
          ],
          steps: ["Kubaliana na wanunuzi juu ya ukubwa, siku na bei kabla ya kuweka samaki.", "Orodhesha kila gharama: vifaranga, chakula, maandalizi ya bwawa, kazi, ulinzi, mavuno, usafiri.", "Mavuno yanayotarajiwa = vifaranga x wanaoishi x uzito wa mavuno.", "Chakula kinachohitajika = uzito ulioongezeka x FCR inayotarajiwa.", "Faida = mauzo - jumla ya gharama.", "Bei ya kurudisha gharama = jumla ya gharama / kg zilizovunwa."],
          words: [["Kiwango cha kuishi", "sehemu ya samaki waliowekwa ambao bado wako hai wakati wa mavuno."], ["Bei ya kurudisha gharama (break-even)", "bei kwa kg ambapo mauzo yanalipa gharama zote, bila faida wala hasara."], ["Mavuno ya sehemu", "kuvua samaki wakubwa zaidi na kuwaacha wengine waendelee kukua."]],
          slides: [
            { title: "Vuna na uza", bullets: ["Mnunuzi, ukubwa, siku na bei vikubaliwe kwanza", "Baridi ya asubuhi; acha kulisha siku moja kabla", "Barafu au kivuli; uza haraka, au kausha kwa moshi au jua"] },
            { title: "Gharama za mfano (GHS)", bullets: ["Vifaranga 1,350; chakula 4,800", "Maandalizi ya bwawa 300; kazi, ulinzi 1,200; mavuno 300", "Jumla 7,950. Mifano tu"] },
            { title: "Matokeo ya mfano", bullets: ["Samaki 720 x kg 0.35 = kg 252", "kg 252 x GHS 40 = GHS 10,080", "Faida takriban GHS 2,130"] },
            { title: "Bei ya kurudisha gharama", bullets: ["Jumla ya gharama / kg zilizovunwa", "7,950 / 252 = takriban GHS 31.50 kwa kg", "Iko karibu na bei ya soko? Badilisha mpango"] }
          ],
          sources: [GHANA_MANUAL, WORLDFISH_NG],
          tryIt: "Kazi ya mwisho: andika mpango wenye gharama kwa mzunguko mmoja wa bwawa au tangi lako (au la mfano): aina ya samaki, mahali na kibali ulichokagua, vipimo vya maji, vifaranga na kituo cha kutotolesha, samaki wanaotarajiwa kuishi, uzito wa mavuno na chakula, kila gharama, mauzo yanayotarajiwa, faida na bei ya kurudisha gharama kwa kg.",
          youCanNow: "kupanga mavuno na mauzo na kukokotoa faida na bei ya kurudisha gharama ya mzunguko mmoja wa ufugaji wa samaki.",
          quickCheck: [
            { objective: "O6", q: "Jumla ya gharama ni NGN 900,000 na unatarajia kuvuna kg 600 za kambale. Bei ya kurudisha gharama ni ipi?", options: ["NGN 600 kwa kg", "NGN 1,000 kwa kg", "NGN 1,200 kwa kg", "NGN 1,500 kwa kg"], answer: 3, why: "900,000 ukigawanya kwa 600 ni 1,500 kwa kg." },
            { objective: "O6", q: "Unapaswa kukubaliana na wanunuzi juu ya mauzo lini?", options: ["Baada ya mavuno, samaki wakiwa kwenye barafu", "Kabla ya kuweka samaki, na uthibitishe kabla ya mavuno", "Kamwe; uza kando ya barabara", "Tu kama samaki wamebaki"], answer: 1, why: "Samaki mbichi huharibika haraka; mnunuzi aliyekubaliwa mapema anazuia kuuza kwa bei ya chini kwa kulazimika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kukuza na kuuza samaki",
        questions: [
          { objective: "O4", q: "Unapaswa kununua vifaranga wapi?", options: ["Kutoka kituo cha kutotolesha kilichosajiliwa au kinachopendekezwa", "Kutoka mto ulio karibu nawe", "Kutoka kwa yeyote aliye nafuu zaidi", "Kutoka kwa muuzaji yeyote anayepita"], answer: 0, why: "Vituo vilivyosajiliwa au vinavyopendekezwa vinatoa aina inayojulikana, sato wa jinsia moja na samaki wenye afya." },
          { objective: "O4", q: "Bwawa la mita 30 kwa mita 10 kwa samaki 2 kwa mita ya mraba linahitaji vifaranga wangapi?", options: ["300", "400", "500", "600"], answer: 3, why: "30 x 10 = mita za mraba 300, na 300 x 2 = 600." },
          { objective: "O5", q: "Samaki hawali, wana vidonda na baadhi wanakufa. Unafanya nini?", options: ["Kuwalisha zaidi", "Kununua dawa sokoni na kuiweka", "Kuondoa samaki waliokufa, kuacha kulisha, kukagua maji na kumpigia afisa ugani au daktari wa mifugo", "Kuongeza vifaranga zaidi"], answer: 2, why: "Samaki wagonjwa wanahitaji ushauri wa afisa au daktari; dawa bila ushauri zinaweza kudhuru samaki na wanunuzi." },
          { objective: "O5", q: "FCR inayoshuka wakati wa mzunguko kwa kawaida inamaanisha:", options: ["Chakula kinapotea", "Chakula kinageuka kuwa samaki kwa ufanisi zaidi", "Samaki ni wagonjwa", "Bwawa ni la kijani mno"], answer: 1, why: "Chakula kidogo kwa kila kg ya ongezeko kinamaanisha ubadilishaji bora wa chakula." },
          { objective: "O6", q: "Mauzo ni GHS 12,000 na jumla ya gharama ni GHS 9,500. Faida ni ngapi?", options: ["GHS 1,500", "GHS 2,000", "GHS 2,500", "GHS 21,500"], answer: 2, why: "12,000 toa 9,500 ni 2,500." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Ufugaji wa Samaki",
    questions: [
      { objective: "O1", q: "Samaki gani ndiye anayefugwa zaidi Nigeria?", options: ["Kambale wa Afrika", "Salmoni", "Trauti", "Kapu (carp)"], answer: 0, why: "Kambale wa Afrika ndiye samaki anayefugwa zaidi Nigeria, anauzwa mbichi na wa moshi." },
      { objective: "O1", q: "Sato wa jinsia mchanganyiko bwawani kwa kawaida huleta:", options: ["Samaki wakubwa zaidi", "Mauzo ya haraka zaidi", "Samaki wengi wadogo waliodumaa kutokana na kuzaliana", "Chakula kidogo kinachohitajika"], answer: 2, why: "Sato huzaliana bwawani na kulijaza samaki wadogo." },
      { objective: "O1", q: "Sato wa GIFT ni nini?", options: ["Zawadi ya bure kutoka kwa wanunuzi", "Ugonjwa wa samaki", "Muundo wa bwawa", "Aina iliyoboreshwa ya sato inayokua haraka kutoka WorldFish"], answer: 3, why: "GIFT inamaanisha Genetically Improved Farmed Tilapia (sato wa kufugwa aliyeboreshwa kijenetiki)." },
      { objective: "O2", q: "Mahali gani panafaa zaidi kwa bwawa la udongo?", options: ["Udongo wa mchanga kwenye uwanda wa mafuriko wa mto", "Udongo wa mfinyanzi kwenye mteremko mdogo juu ya kiwango cha mafuriko, wenye maji safi mwaka mzima", "Kilele cha mlima chenye mawe bila maji", "Karibu na mfereji wa maji ya mgodi"], answer: 1, why: "Mfinyanzi unashika maji, mteremko unakuwezesha kujaza na kumwaga, na maji safi yanawaweka samaki hai." },
      { objective: "O2", q: "Kwa nini uweke chujio kwenye mlango wa kuingiza maji?", options: ["Kuzuia samaki wa porini na wanyama wanaowinda samaki", "Kupasha maji joto", "Kulisha samaki", "Kuchelewesha mavuno"], answer: 0, why: "Samaki wa porini hushindania chakula, huleta magonjwa na hula vifaranga." },
      { objective: "O2", q: "Kabla ya kujenga bwawa la samaki, unapaswa:", options: ["Kuanza kuchimba na kuuliza baadaye", "Kuwauliza majirani zako tu", "Kuuliza ofisi ya uvuvi ya taifa au ya kaunti kuhusu vibali na aina zinazoruhusiwa", "Kudhani hakuna sheria"], answer: 2, why: "Nchi nyingi zinataka usajili au kibali, na baadhi zinazuia aina fulani za samaki." },
      { objective: "O3", q: "Kipi kinafanya oksijeni kidogo alfajiri kuwa mbaya zaidi?", options: ["Siku za jua na mwani kidogo", "Siku za mawingu, mwani mwingi mno na chakula kinachooza", "Maji safi na mapya", "Samaki wachache"], answer: 1, why: "Mambo haya hupunguza utengenezaji wa oksijeni au huimaliza usiku." },
      { objective: "O3", q: "Sato na kambale hukua polepole maji yakiwa:", options: ["Baridi", "Ya joto", "Safi", "Ya kijani"], answer: 0, why: "Wote ni samaki wa maji ya joto; maji baridi yanapunguza kula na kukua." },
      { objective: "O3", q: "Kifaa gani kinapima asidi ya maji ya bwawa?", options: ["Diski ya Secchi", "Kipimajoto", "Wavu wa kuvulia", "Vipande vya pH au kifaa cha pH"], answer: 3, why: "Vipande au vifaa vya pH vinaonyesha kama maji yana asidi au alkali kiasi gani." },
      { objective: "O3", q: "Oksijeni ikiwa chini, hatua ipi ni MBAYA?", options: ["Kuongeza maji safi", "Kupiga maji au kuweka hewa", "Kulisha zaidi ya kawaida", "Kuondoa samaki waliokufa"], answer: 2, why: "Chakula cha ziada huoza na kumaliza oksijeni zaidi." },
      { objective: "O4", q: "Idadi ya kuweka inamaanisha:", options: ["Uzito wa chakula kwa siku", "Idadi ya samaki kwa mita ya mraba au mita ya ujazo", "Kina cha bwawa", "Bei kwa kila kifaranga"], answer: 1, why: "Idadi kwa eneo ni samaki wangapi wanaoshiriki kila kipimo cha nafasi." },
      { objective: "O4", q: "Bwawa la mita za mraba 400 kwa samaki 2.5 kwa mita ya mraba linahitaji:", options: ["Vifaranga 600", "Vifaranga 800", "Vifaranga 1,000", "Vifaranga 1,600"], answer: 2, why: "400 x 2.5 = 1,000." },
      { objective: "O4", q: "Kwa nini uelee mifuko ya vifaranga bwawani kabla ya kuwaachilia?", options: ["Ili joto la maji lilingane", "Kuhesabu samaki", "Kuwalisha", "Kusafisha mifuko"], answer: 0, why: "Mabadiliko ya ghafla ya joto yanashtua na yanaweza kuua vifaranga." },
      { objective: "O5", q: "FCR inakokotolewa kama:", options: ["Samaki waliouzwa / samaki waliowekwa", "Bei / gharama", "Eneo la bwawa x idadi kwa eneo", "Chakula kilichotolewa / uzito ulioongezeka"], answer: 3, why: "Inaonyesha kg ngapi za chakula zinatengeneza kg moja ya samaki." },
      { objective: "O5", q: "Ulilisha kg 600 na samaki waliongezeka kg 400. FCR?", options: ["1.5", "0.7", "2.4", "1.0"], answer: 0, why: "600 ukigawanya kwa 400 ni 1.5." },
      { objective: "O5", q: "Unapaswa kupima uzito wa sampuli ya samaki mara ngapi ili kurekebisha ulishaji?", options: ["Kamwe", "Wakati wa mavuno tu", "Kila wiki 2 hadi 4", "Kila saa"], answer: 2, why: "Kupima uzito mara kwa mara kunaonyesha ukuaji ili chakula kiendane nao." },
      { objective: "O5", q: "Kambale wa ukubwa tofauti sana katika bwawa moja wanaweza kuleta:", options: ["Ukuaji wa haraka kwa wote", "Kulana", "Maji safi zaidi", "Gharama ndogo za chakula"], answer: 1, why: "Kambale wakubwa huwala wadogo, kwa hiyo wafugaji huwapanga kwa ukubwa." },
      { objective: "O6", q: "Uzito wa mavuno unaotarajiwa unapatikana kwa:", options: ["Chakula x bei", "Eneo la bwawa x kina", "Vifaranga x wanaoishi x uzito wa mavuno", "Gharama / bei"], answer: 2, why: "Ni samaki walio hai tu wanaohesabiwa, kwa uzito wao unaotarajiwa." },
      { objective: "O6", q: "Bei ya kurudisha gharama kwa kg ni:", options: ["Bei ya juu zaidi sokoni", "Jumla ya gharama / kg zilizovunwa", "Gharama ya chakula tu", "Bei ya kifaranga"], answer: 1, why: "Kwa bei hii, mauzo yanalipa kila gharama tu." },
      { objective: "O6", q: "Ni gharama gani kwa kawaida ndiyo kubwa zaidi katika mzunguko wa samaki?", options: ["Wavu", "Bango la bwawa", "Vipimo vya maji", "Chakula"], answer: 3, why: "Chakula kwa kawaida kinachukua sehemu kubwa zaidi ya gharama, kwa hiyo FCR ni muhimu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 5, 6, 9, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Aina ya samaki na mahali", objective: "O1", notYet: "Hakuna sababu iliyotolewa ya aina ya samaki, au hakuna mnunuzi aliyeulizwa.", meets: "Aina na mfumo vimechaguliwa kwa sababu tatu kutoka mahali na wanunuzi.", exceeds: "Anataja wanunuzi, ukubwa wanaotaka na bei waliyotaja." },
      { name: "Mahali na vibali", objective: "O2", notYet: "Mahali hapajakaguliwa au hakuna ofisi ya uvuvi iliyotajwa.", meets: "Maji, udongo, mteremko na mafuriko vimekaguliwa; ofisi ya uvuvi na maswali ya vibali yameorodheshwa.", exceeds: "Amewasiliana na ofisi ya uvuvi na ameandika jibu." },
      { name: "Mpango wa ubora wa maji", objective: "O3", notYet: "Hakuna vipimo vya maji katika mpango.", meets: "Ukaguzi wa alfajiri, vipimo vya joto, pH na Secchi pamoja na mara ngapi na la kufanya vikiwa nje ya kiwango.", exceeds: "Ina kumbukumbu ya vipimo iliyojazwa na mpango wa dharura wa oksijeni kidogo." },
      { name: "Vifaranga na kuweka samaki", objective: "O4", notYet: "Idadi ya vifaranga haipo au si sahihi, au hakuna kituo cha kutotolesha kilichotajwa.", meets: "Idadi sahihi kutokana na eneo na idadi iliyokubaliwa; kituo kilichosajiliwa au kinachopendekezwa kimetajwa pamoja na ukaguzi.", exceeds: "Anaeleza aina, hali ya jinsia moja na utaratibu wa kituo wa kubadilisha samaki waliokufa." },
      { name: "Gharama, faida na bei ya kurudisha gharama", objective: "O6", notYet: "Gharama hazipo, chakula hakijahusishwa na FCR, au hesabu si sahihi.", meets: "Gharama zote, chakula kutokana na ongezeko linalotarajiwa x FCR, faida na bei ya kurudisha gharama ni sahihi.", exceeds: "Anaonyesha hali ya pili yenye samaki wachache wanaoishi au bei ya chini, na mfugaji angefanya nini." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoweka samaki kutoka kituo cha kutotolesha kilichosajiliwa au kinachopendekezwa ndani ya miezi 6 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoweka kumbukumbu za vipimo vya maji na ulishaji katika mzunguko mzima (utafiti wa kufuatilia)",
      "Kiwango cha kuishi na FCR vinavyoripotiwa wakati wa mavuno, vikilinganishwa na mpango",
      "Wanafunzi wanaopata faida katika mzunguko wao wa kwanza, pale kumbukumbu zinaporuhusu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, au simu yenye app ya jedwali (spreadsheet) au ya maelezo",
      "Kikokotoo (kikokotoo cha simu kinafaa)",
      "Kipimajoto, vipande vya pH na diski ya Secchi ya kutengeneza nyumbani (sahani nyeupe, rangi, fimbo)",
      "Utepe wa kupimia bwawa",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi, pamoja na mazoezi kwenye bwawa"
    ],
    facilitatorNotes: [
      "Fanyeni Masomo ya 3 na 4 kwenye bwawa linalofanya kazi: fanyeni ukaguzi wa alfajiri, vipimo vya Secchi na pH na kupima uzito wa sampuli pamoja.",
      "Mwalike afisa ugani wa uvuvi kueleza vibali na vituo vya kutotolesha vilivyosajiliwa katika nchi au kaunti yenu.",
      "Usitoe kamwe vipimo vya dawa wala kemikali; wapeleke wanafunzi wenye samaki wagonjwa kwa afisa ugani au daktari wa mifugo.",
      "Badilisha bei za mfano kwa bei za karibu za vifaranga, chakula na samaki kabla ya somo la gharama, na sema wazi kwamba ni mifano.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
