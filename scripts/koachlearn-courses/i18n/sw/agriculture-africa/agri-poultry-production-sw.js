"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-poultry-production.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KENBRO = { name: "Kenchic: Kenbro (kuku wa kienyeji walioboreshwa wa matumizi mawili)", url: "https://www.kenchic.com/kenbro/" };
const KUROILER = { name: "Sharma na wenzake 2015, Livestock Research for Rural Development: Kuroiler dhidi ya kuku wa kienyeji nchini Uganda", url: "https://lrrd.cipav.org.co/lrrd27/9/shar27178.html" };
const MU_BROODING = { name: "University of Missouri Extension G8351: Kulea na kukuza vifaranga (joto kwa kila wiki, tabia ya vifaranga)", url: "https://extension.missouri.edu/publications/g8351" };
const FAO_BIOSEC = { name: "FAO: Mbinu bora za usalama wa kibiolojia katika ufugaji wa kuku wa kibiashara mdogo na wa kuzurura nchini Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const WOAH_ND = { name: "Shirika la Dunia la Afya ya Wanyama (WOAH): Ugonjwa wa Newcastle (mdondo)", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const WOAH_AI = { name: "Shirika la Dunia la Afya ya Wanyama (WOAH): Mafua ya ndege", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Mafua ya ndege (dalili kwa ndege)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const KVB = { name: "Kenya Veterinary Board (orodha ya madaktari wa mifugo na wataalamu wasaidizi wa mifugo)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (orodha ya madaktari wa mifugo)", url: "https://vcn.gov.ng" };
const FAO_PRUDENT = { name: "FAO: Matumizi ya busara ya dawa za viuavijasumu kwa nguruwe na kuku (madaktari, mipango ya afya, muda wa kusubiri)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };

module.exports = {
  id: "agri-poultry-production-sw",
  lang: "sw",
  translationOf: "agri-poultry-production",
  category: "Agriculture (Africa)",
  name: "Ufugaji wa Kuku wa Kibiashara",
  skills: "Kuchagua kuku wa nyama, kuku wa mayai au kuku wa kienyeji walioboreshwa, Kuandaa banda na kulea vifaranga, Kulisha na kunywesha kwa kila hatua, Kufuata ratiba ya chanjo na usalama wa kibiolojia wa kundi pamoja na daktari wa mifugo, Kushughulikia mayai na kuweka kumbukumbu za kundi, Kukokotoa gharama za kundi na bei ya kurudisha gharama",
  outcome: "kupanga na kuendesha kundi la kuku lenye faida: kuchagua kuku wa nyama, wa mayai au wa kienyeji walioboreshwa kulingana na soko lako, kuandaa banda na kulea vifaranga, kuwalisha na kuwanywesha kwa kila hatua, kufuata ratiba ya chanjo uliyoweka na daktari wa mifugo na usalama mkali wa kibiolojia, kushughulikia mayai na kuweka kumbukumbu, na kukokotoa gharama za kundi ili ujue bei yako ya kurudisha gharama.",
  about: [
    "Kozi hii ni kwa wakulima, vijana wajasiriamali wa kilimo, wafanyakazi wa shambani na maafisa ugani nchini Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire na kote Afrika wanaotaka kuanza au kukuza biashara ya kuku wa nyama, kuku wa mayai au kuku wa kienyeji walioboreshwa.",
    "Sura ya 1 inaandaa kundi: kuchagua aina ya kuku, banda, nafasi na kulea vifaranga, na chakula na maji. Sura ya 2 inaliendesha kwa faida: ratiba ya chanjo pamoja na daktari wa mifugo na usalama wa kibiolojia wa kundi, kushughulikia mayai na kumbukumbu, na uchumi wa kundi: gharama kwa kila kuku au kwa kila trei, vifo na bei ya kurudisha gharama.",
    "Kozi hii inajenga juu ya kozi \"Afya na Usimamizi wa Mifugo\", inayofundisha ukaguzi wa afya wa kila siku na misingi ya ugonjwa wa Newcastle (mdondo). Haitoi vipimo vya chanjo wala dawa: fuata daktari wa mifugo na lebo kila wakati. Bei zote ni mifano ya kubuni; tumia bei zako. Kila somo linachukua kama dakika tano na linaisha na kazi. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wenye gharama kwa kundi moja kwenye shamba lako (au mfano kama kuku wa nyama 500 karibu na Thika, kuku wa mayai 300 karibu na Ibadan, kuku 200 wa Kenbro au Kuroiler karibu na Tamale, au kuku wa nyama 1,000 karibu na Thies): aina ya kuku na sababu; ukubwa wa banda na idadi ya kuku linaloweza kuwabeba; mpangilio wako wa kulea vifaranga; vyakula kwa kila hatua na kiasi unachotarajia kununua; ratiba ya chanjo uliyokubaliana na daktari wa mifugo na sheria zako za usalama wa kibiolojia; kumbukumbu utakazoweka; na karatasi ya gharama yenye kila gharama, vifo unavyotarajia, gharama kwa kila kuku anayeuzwa au kwa kila trei ya mayai, na bei yako ya kurudisha gharama.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima, vijana wajasiriamali wa kilimo, wafanyakazi wa shambani na maafisa ugani katika Afrika Mashariki, Magharibi na Kati (pamoja na nchi zinazozungumza Kifaransa) wanaoanza au kukuza biashara ya kuku kuanzia mamia machache hadi maelfu machache ya kuku.",
    startingPoint: "Wengi wanafuga kuku wachache wa kienyeji au wamelea kundi moja. Wengi hununua vifaranga na chakula bila mpango ulioandikwa, hulea vifaranga kwa kubahatisha, hutegemea duka la agrovet kwa chanjo, huweka kumbukumbu chache, na hawajui gharama yao kwa kila kuku au kwa kila trei, kwa hiyo hawawezi kujua kama kundi lilileta faida.",
    gap: "Kuku wanaweza kulipa haraka, lakini vifo vingi vya vifaranga wakati wa kulea, milipuko ya magonjwa, chakula kinachopotea na kuuza chini ya gharama hufuta faida. Wakulima wanaopanga kundi, kulea vizuri, kuchanja kwa ratiba ya daktari wa mifugo, kuweka kumbukumbu na kujua bei yao ya kurudisha gharama hupoteza kuku wachache na wanaweza kupanga bei na kuuza kwa kujiamini.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hesabu rahisi tu; kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: karatasi na kalamu au kikokotoo cha simu; jedwali (spreadsheet) la simu si lazima",
      "Pesa: bei kwa KES, NGN, GHS na XOF ni mifano ya kubuni; wanafunzi wanatumia bei za mahali walipo",
      "Kanuni za afya ya wanyama: hakuna vipimo vya chanjo wala dawa, na hakuna muda wa kusubiri kwa namba; fuata daktari wa mifugo na lebo",
      "Mafua ya ndege ni ugonjwa unaopaswa kuripotiwa: dalili zake zinaripotiwa kwa daktari wa mifugo au mamlaka ya mifugo mara moja"
    ],
    prerequisites: "Utunzaji wa msingi wa wanyama na hesabu rahisi. Inapendekezwa kuanza na \"Afya na Usimamizi wa Mifugo\"; \"Lishe ya Mifugo na Utengenezaji wa Chakula\" inasaidia kwa gharama za chakula."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukizingatia soko lako, pesa na muda wako", action: "kuchagua kuku wa nyama, wa mayai au wa kienyeji walioboreshwa na kutoa sababu", standard: "ukitaja angalau sababu tatu zinazofaa shamba lako na wanunuzi wako" },
    { id: "O2", condition: "Kabla vifaranga hawajafika na wakati wa kuwalea", action: "kuandaa banda, kuweka idadi ya kuku kulingana na nafasi, na kurekebisha joto la kulelea kwa kuangalia vifaranga", standard: "banda likiwa tayari siku moja kabla na vifaranga wakiwa wametawanyika sawasawa chini ya joto" },
    { id: "O3", condition: "Kwa kila hatua ya kundi lako", action: "kupanga aina ya chakula, tarehe za kubadilisha chakula na upatikanaji wa maji", standard: "maji safi yakiwepo wakati wote na kila hatua ikiwa imepangwa" },
    { id: "O4", condition: "Pamoja na daktari wa mifugo au afisa wa afya ya mifugo", action: "kuandika ratiba ya chanjo na sheria za usalama wa kibiolojia wa kundi, na kuandika kila chanjo", standard: "kila tarehe ya chanjo ikiwekwa na daktari wa mifugo na hakuna chanjo inayotolewa nje ya ratiba" },
    { id: "O5", condition: "Kila siku ya kundi", action: "kukusanya na kuhifadhi mayai ipasavyo na kuandika kuku, vifo, chakula, mayai na matibabu", standard: "bila siku inayokosekana katika kumbukumbu" },
    { id: "O6", condition: "Ukitumia bei za mahali ulipo na vifo unavyotarajia", action: "kukokotoa gharama kwa kila kuku anayeuzwa au kwa kila trei na bei ya kurudisha gharama ya kundi", standard: "kila gharama ikiwa imejumuishwa na hesabu ikiwa sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuandaa kundi",
      lessons: [
        {
          title: "Kuku wa nyama, kuku wa mayai au kuku wa kienyeji walioboreshwa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua aina ya kuku inayofaa soko lako, pesa na muda wako.",
          text: [
            "Kuku wa nyama (broilers) wanazalishwa kwa ajili ya nyama. Wanakua haraka sana na mara nyingi huuzwa ndani ya wiki 5 hadi 7 hivi, kulingana na aina na uzito wanaotaka wanunuzi. Pesa inarudi haraka, lakini wanahitaji chakula bora, uangalizi wa karibu na mnunuzi aliye tayari siku wanapokuwa tayari: kila siku ya ziada inakula chakula na faida.",
            "Kuku wa mayai (layers) wanazalishwa kwa ajili ya mayai. Wanaanza kutaga wakiwa na miezi 4 hadi 5 hivi na hutaga kwa zaidi ya mwaka mmoja, kwa hiyo unawalisha kwa miezi kabla ya mapato yoyote, na unahitaji soko la mayai lisilokatika. Kuku wa kienyeji walioboreshwa au wa matumizi mawili wako katikati: wana nguvu zaidi kuliko kuku wa nyama na wa mayai, wanaweza kujitafutia chakula wakiongezewa chakula kidogo, na huuzwa kwa nyama na mayai, mara nyingi kwa bei bora kwa kila kuku, lakini wanakua na kutaga kidogo kuliko kuku chotara wa kibiashara.",
            "Mifano: Kenbro, anayeuzwa na Kenchic nchini Kenya, ni kuku wa matumizi mawili; Kenchic inasema yuko tayari kwa nyama akiwa na wiki 10 hadi 14 hivi au hutaga kuanzia wiki 25 hivi, lakini hatafikia uzalishaji wa kuku maalum wa nyama au wa mayai. Kuroiler, aliyetengenezwa India, ni kuku wa matumizi mawili anayejitafutia chakula; utafiti nchini Uganda ulionyesha Kuroiler walikua wazito kuliko kuku wa kienyeji katika mazingira ya kijijini. Nunua aina yoyote kutoka kwa kituo cha kutotolea vifaranga (hatchery) kinachoaminiwa na ofisi ya mifugo au daktari wa mifugo tu, na uwaulize wakulima wengine jinsi aina hiyo ilivyofanya kwao."
          ],
          steps: ["Andika nani atanunua: kuku hai, nyama, mayai, hoteli, masoko.", "Andika pesa unazoweza kutumia kabla mapato hayajaanza.", "Andika muda unaoweza kutoa kila siku.", "Linganisha kuku wa nyama, wa mayai na wa kienyeji walioboreshwa na orodha zako.", "Chagua mmoja, pamoja na sababu tatu, na kituo cha kutotolea vifaranga kinachoaminika."],
          words: [["Kuku wa nyama (broiler)", "kuku anayezalishwa ili akue haraka kwa ajili ya nyama."], ["Kuku wa mayai (layer)", "kuku anayezalishwa ili atage mayai mengi."], ["Kuku wa kienyeji aliyeboreshwa", "kuku mwenye nguvu wa matumizi mawili aliyezalishwa kutoka au kwa ajili ya mazingira ya mahali, anayefugwa kwa nyama na mayai."], ["Kituo cha kutotolea vifaranga (hatchery)", "biashara inayototoa na kuuza vifaranga wa siku moja."]],
          slides: [
            { title: "Kuku wa nyama", bullets: ["Nyama; mara nyingi huuzwa baada ya wiki 5 hadi 7 hivi", "Pesa haraka; wanahitaji chakula bora na uangalizi wa karibu", "Wanahitaji mnunuzi aliye tayari siku hiyo"] },
            { title: "Kuku wa mayai", bullets: ["Mayai; wanaanza wakiwa na miezi 4 hadi 5 hivi", "Miezi ya kulisha kabla ya mapato", "Wanahitaji soko la mayai lisilokatika"] },
            { title: "Kuku wa kienyeji walioboreshwa", bullets: ["Wana nguvu zaidi; hujitafutia chakula wakiongezewa", "Nyama na mayai, mara nyingi bei bora kwa kila kuku", "Mifano: Kenbro (Kenchic), Kuroiler (kutoka India)"] },
            { title: "Chagua na ununue vizuri", bullets: ["Linganisha soko, pesa na muda", "Kituo cha vifaranga kinachoaminika tu", "Waulize wakulima waliofuga aina hiyo"] }
          ],
          sources: [KENBRO, KUROILER],
          tryIt: "Andika orodha zako tatu: wanunuzi, pesa ulizonazo kabla ya mapato, na muda wa kila siku. Chagua kuku wa nyama, wa mayai au wa kienyeji walioboreshwa na uandike sababu tatu, pamoja na jina la kituo cha kutotolea vifaranga kinachoaminiwa na ofisi ya mifugo au daktari wako wa mifugo.",
          youCanNow: "kuchagua kuku wa nyama, wa mayai au wa kienyeji walioboreshwa wanaofaa soko lako, pesa na muda wako.",
          quickCheck: [
            { objective: "O1", q: "Mkulima ana pesa kidogo za kusubiri na hoteli inayonunua kuku wa nyama kila wiki sita. Aina gani inafaa zaidi?", options: ["Kuku wa mayai", "Kuku wa nyama", "Bata", "Kuku wa kijijini wanaoachwa kujitafutia chakula"], answer: 1, why: "Kuku wa nyama huuzwa ndani ya wiki chache, jambo linalofaa mnunuzi wa kawaida wa nyama na kusubiri kwa muda mfupi kwa mapato." },
            { objective: "O1", q: "Kenchic inasema nini kuhusu Kenbro ukilinganisha na kuku maalum wa nyama na wa mayai?", options: ["Anakua haraka kuliko kuku wa nyama", "Anataga zaidi kuliko kuku wa mayai", "Hatafikia kiwango chao cha uzalishaji", "Hahitaji chakula kabisa"], answer: 2, why: "Kenbro ana nguvu zaidi na ni wa matumizi mawili lakini hafikii uzalishaji wa kuku chotara maalum." }
          ]
        },
        {
          title: "Banda, nafasi na kulea vifaranga",
          objectives: ["O2"],
          minutes: 6,
          goal: "Andaa banda, weka idadi ya kuku kulingana na nafasi, na ulee vifaranga kwa joto linalofaa.",
          text: [
            "Banda zuri la kuku ni kavu, lina hewa ya kutosha na ni salama. Katika maeneo ya joto, pande zilizo wazi zenye wavu imara huruhusu hewa kupita; banda refu mara nyingi hujengwa kuelekea mashariki hadi magharibi ili jua lisiingie sana, na paa linalojitokeza nje huzuia mvua. Tumia matandazo mazito na makavu kama maranda ya mbao au makapi ya mpunga. Zuia panya, nyoka, ndege wa porini na wezi. Kabla vifaranga hawajafika, safisha na uue vijidudu katika banda tupu na vifaa, kisha liache tupu kwa muda wa mapumziko anaoshauri daktari wa mifugo.",
            "Nafasi: msongamano husababisha joto kali, matandazo yaliyolowa, kudonoana na magonjwa. Kituo cha vifaranga, mwongozo wa aina au afisa ugani hukupa idadi ya kuku kwa kila mita ya mraba kwa aina yako, umri na banda lako. Zidisha eneo la sakafu kwa namba hiyo. Mfano tu: banda la mita 5 kwa 8 lina mita za mraba 40; kama mwongozo wako unasema kuku wa nyama 10 kwa kila mita ya mraba wakati wa kuuzwa, linabeba kuku wa nyama 400, si 500.",
            "Kulea vifaranga: vifaranga wa siku moja hawawezi kujipatia joto wenyewe. Weka duara la kulelea (duara la kadibodi au bati) lenye matandazo, chanzo cha joto (kipasha joto cha gesi au umeme, balbu, au jiko la mkaa lenye hewa ya kutosha, kwa sababu moshi wa mkaa unaweza kuua), vyombo vya chakula na vya maji, na ulipashe joto kabla vifaranga hawajafika. University of Missouri Extension inatoa kama 32 hadi 35 °C chini ya kipasha joto katika wiki ya kwanza, kisha kama 3 °C chini kila wiki. Angalia vifaranga: wakijikusanya chini ya joto ni baridi mno; wakiwa mbali na wakihema ni joto mno; wakisongamana upande mmoja kuna upepo unaopenya; wakitawanyika sawasawa ni sawa kabisa."
          ],
          steps: ["Safisha na uue vijidudu katika banda tupu na vifaa; liache lipumzike kama anavyoshauri daktari wa mifugo.", "Tandaza matandazo mazito na makavu.", "Kokotoa idadi ya kuku sakafu inayoweza kubeba kutoka mwongozo wa aina yako.", "Weka duara la kulelea, chanzo cha joto, vyombo vya chakula na vya maji.", "Pasha joto kabla vifaranga hawajafika.", "Angalia vifaranga mara kadhaa kwa siku na urekebishe joto."],
          words: [["Kulea vifaranga (brooding)", "kuwaweka vifaranga wadogo katika joto na kuwalisha katika wiki zao za kwanza."], ["Duara la kulelea", "duara la kadibodi au bati linalowaweka vifaranga karibu na joto, chakula na maji."], ["Matandazo", "malalo makavu sakafuni, kama maranda ya mbao au makapi ya mpunga."], ["Msongamano (stocking density)", "idadi ya kuku wanaowekwa kwa kila mita ya mraba ya sakafu."]],
          slides: [
            { title: "Banda zuri", bullets: ["Kavu, lenye hewa, pande wazi zenye wavu katika joto", "Paa linalojitokeza; mara nyingi mashariki hadi magharibi", "Matandazo mazito makavu; zuia panya na ndege wa porini"] },
            { title: "Nafasi", bullets: ["Msongamano = joto kali, matandazo yaliyolowa, magonjwa", "Kuku kwa kila mita ya mraba kutoka mwongozo wa aina yako", "Mfano: mita za mraba 40 x 10 = kuku wa nyama 400"] },
            { title: "Mpangilio wa kulea vifaranga", bullets: ["Duara la kulelea, joto, vyombo vya chakula na maji", "Pasha joto kabla vifaranga hawajafika", "Mkaa: hewa ya kutosha, moshi unaweza kuua"] },
            { title: "Soma tabia ya vifaranga", bullets: ["Kama 32 hadi 35 °C mwanzoni, kama 3 °C chini kila wiki", "Wamejikusanya = baridi; wako mbali = joto", "Wamesongamana upande mmoja = upepo; wametawanyika = sawa"] }
          ],
          sources: [MU_BROODING, FAO_BIOSEC],
          tryIt: "Pima banda lako la kuku (au unalopanga) na ukokotoe eneo la sakafu. Uliza kituo cha vifaranga au afisa ugani idadi ya kuku kwa kila mita ya mraba kwa aina yako, na uandike idadi ya kuku linaloweza kubeba. Chora mpangilio wako wa kulea vifaranga.",
          youCanNow: "kuandaa banda, kuweka idadi ya kuku kulingana na nafasi yake, na kulea vifaranga kwa kuangalia tabia yao.",
          quickCheck: [
            { objective: "O2", q: "Vifaranga wako wote wamejikusanya kwa karibu chini ya kipasha joto. Hii inamaanisha nini?", options: ["Wana joto mno", "Wana njaa", "Wako tayari kutoka kwenye duara la kulelea", "Wana baridi mno; ongeza joto au zuia upepo"], answer: 3, why: "Kujikusanya chini ya joto kunamaanisha vifaranga wana baridi." },
            { objective: "O2", q: "Banda lako ni mita 6 kwa 5. Mwongozo unasema kuku 10 kwa kila mita ya mraba. Kuku wangapi?", options: ["300", "110", "600", "50"], answer: 0, why: "6 x 5 = mita za mraba 30, x 10 = kuku 300." }
          ]
        },
        {
          title: "Chakula na maji kwa kila hatua",
          objectives: ["O3"],
          minutes: 5,
          goal: "Panga chakula cha kila hatua, wakati wa kukibadilisha, na maji safi yasiyokatika.",
          text: [
            "Chakula ndicho gharama kubwa zaidi ya kundi, kwa hiyo lisha chakula sahihi katika hatua sahihi. Kuku wa nyama: chakula cha kuanzia (broiler starter), kisha chakula cha kumalizia (broiler finisher); baadhi ya ratiba huongeza chakula cha kukuzia (grower). Kuku wa mayai: chakula cha vifaranga (chick mash), kisha chakula cha kukuzia (growers mash), kisha chakula cha kutaga (layers mash) kuanzia wanapokaribia kutaga, ambacho kina kalsiamu ya ziada wanayohitaji kuku kwa maganda imara. Kuku wa kienyeji walioboreshwa: fuata mwongozo wa kituo cha vifaranga; hata wakifugwa nusu huria bado wanahitaji chakula kamili juu ya kujitafutia ili wakue na kutaga vizuri. Badilisha chakula kwa siku chache kwa kuchanganya cha zamani na kipya.",
            "Nunua chakula kutoka kwa msagaji anayeaminika, hakikisha mfuko una lebo, ni mkavu na haujapita tarehe, na ukihifadhi juu ya mbao (pallets) mahali pakavu. Tumia vyombo vya chakula vya kutosha ili kuku wote waweze kula kwa wakati mmoja, vinyanyue hadi usawa wa migongo ya kuku wanapokua, na usivijaze hadi juu kabisa, kwa sababu kuku hupekua na kumwaga chakula na kukipoteza.",
            "Maji ni muhimu kuliko chakula: kuku hunywa maji mengi kuliko chakula wanachokula, na huacha kula na kutaga maji yakiisha au yakipata joto. Wape maji safi na baridi wakati wote, na vyombo vya maji vya kutosha vinavyosafishwa kila siku. Kushuka ghafla kwa matumizi ya maji mara nyingi ni dalili ya kwanza ya ugonjwa. Ukitoa chanjo au dawa kwenye maji, fuata daktari wa mifugo na lebo kikamilifu; baadhi zinahitaji maji yasiyo na klorini au dawa ya kuua vijidudu."
          ],
          steps: ["Andika hatua za aina yako ya kuku.", "Andika chakula cha kila hatua na umri wa kubadilisha.", "Panga vyombo vya chakula na vya maji vya kutosha kwa kuku wote kwa wakati mmoja.", "Nyanyua vyombo vya chakula na vya maji kuku wanapokua; usivijaze kupita kiasi.", "Safisha vyombo vya maji kila siku; usiache maji yaishe kamwe.", "Andika matumizi ya maji kila siku; kushuka ghafla kunamaanisha mpigie daktari wa mifugo."],
          words: [["Chakula cha kuanzia (starter)", "chakula cha kwanza chenye protini nyingi kwa vifaranga wadogo."], ["Chakula cha kumalizia (finisher)", "chakula cha mwisho kwa kuku wa nyama kabla ya kuuzwa."], ["Chakula cha kutaga (layers mash)", "chakula cha kuku wanaotaga chenye kalsiamu ya ziada kwa maganda ya mayai."], ["Kukaribia kutaga (point of lay)", "umri ambapo kuku wachanga wako karibu kuanza kutaga."]],
          slides: [
            { title: "Chakula kwa kila hatua", bullets: ["Kuku wa nyama: chakula cha kuanzia, kisha cha kumalizia", "Kuku wa mayai: chick mash, growers mash, kisha layers mash", "Badilisha kwa siku chache"] },
            { title: "Nunua na utumie chakula vizuri", bullets: ["Msagaji anayeaminika; lebo, kikavu, ndani ya tarehe", "Vyombo vya kutosha; vinyanyue kuku wanapokua", "Usijaze kupita kiasi: kupekua kunapoteza chakula"] },
            { title: "Maji kwanza", bullets: ["Kuku hunywa zaidi ya wanavyokula", "Maji safi na baridi wakati wote", "Kushuka ghafla kwa matumizi ya maji = dalili ya hatari"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Tengeneza jedwali la chakula kwa kundi lako: hatua, umri, aina ya chakula, na takriban mifuko mingapi unatarajia kununua (uliza muuzaji wako wa chakula au kituo cha vifaranga). Ongeza idadi ya vyombo vya chakula na vya maji unavyohitaji na nani atasafisha vyombo vya maji kila siku.",
          youCanNow: "kupanga chakula sahihi kwa kila hatua, wakati wa kukibadilisha, na maji safi yasiyokatika.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini kuku wanaotaga wanahitaji layers mash badala ya growers mash?", options: ["Ni rahisi zaidi kwa bei", "Kinawafanya warefuke", "Kina kalsiamu ya ziada inayohitajika kwa maganda imara ya mayai", "Kinachukua nafasi ya maji"], answer: 2, why: "Kuku wanaotaga wanahitaji kalsiamu ya ziada kwa maganda, ambayo layers mash inatoa." },
            { objective: "O3", q: "Ghafla kuku wako wa nyama wanakunywa maji kidogo sana kuliko jana. Hii inaashiria nini?", options: ["Huenda wanaanza kuugua; wakague na umpigie daktari wa mifugo", "Wana afya na wameshiba", "Chakula ni kizuri mno", "Ni wakati wa kuwauza"], answer: 0, why: "Kushuka ghafla kwa matumizi ya maji mara nyingi ni dalili ya kwanza ya ugonjwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuandaa kundi",
        questions: [
          { objective: "O1", q: "Hatari kuu ya kuku wa nyama ni ipi?", options: ["Wanachukua miaka miwili kuuzwa", "Wanataga mayai mengi mno", "Hawawezi kuliwa", "Kila siku ya ziada kabla ya kuuzwa inakula chakula na faida, kwa hiyo unahitaji mnunuzi aliye tayari"], answer: 3, why: "Kuku wa nyama wanaendelea kula; kuchelewa kuuza kunapunguza faida haraka." },
          { objective: "O1", q: "Kipi ni kweli kuhusu kuku wa kienyeji walioboreshwa kama Kuroiler?", options: ["Wana nguvu zaidi na ni wa matumizi mawili lakini wanazalisha kidogo kuliko kuku chotara maalum", "Hawahitaji maji", "Ni kwa mayai tu", "Ndio kuku wa nyama wanaokua haraka zaidi"], answer: 0, why: "Kuku wa matumizi mawili hupunguza uzalishaji kidogo ili kupata nguvu na matumizi ya nyama na mayai." },
          { objective: "O2", q: "Vifaranga wako mbali na kipasha joto na wanahema. Unafanya nini?", options: ["Ongeza joto zaidi", "Zuia hewa yote", "Punguza joto au nyanyua kipasha joto", "Ongeza vifaranga zaidi"], answer: 2, why: "Kuwa mbali na kuhema kunamaanisha vifaranga wana joto mno." },
          { objective: "O2", q: "Unapaswa kupasha joto duara la kulelea lini?", options: ["Baada ya vifaranga kufika", "Kabla vifaranga hawajafika", "Usiku tu katika wiki ya 3", "Kamwe; vifaranga hujipatia joto wenyewe"], answer: 1, why: "Vifaranga wa siku moja wanahitaji joto tangu wanapofika." },
          { objective: "O3", q: "Unapaswa kubadilisha kutoka chakula kimoja hadi kingine vipi?", options: ["Kwa usiku mmoja", "Kwanza acha kulisha kwa siku moja", "Pale tu kuku wanapoonekana wembamba", "Kwa siku chache, ukichanganya cha zamani na kipya"], answer: 3, why: "Kubadilisha taratibu kunazuia kuvuruga ulaji na mmeng'enyo wa kuku." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha kundi lenye faida",
      lessons: [
        {
          title: "Ratiba ya chanjo na usalama wa kibiolojia wa kundi",
          objectives: ["O4"],
          minutes: 6,
          goal: "Andika ratiba ya chanjo pamoja na daktari wa mifugo na uweke sheria za usalama wa kibiolojia kwa kundi.",
          text: [
            "Chanjo zinalinda kundi dhidi ya magonjwa yaliyozoeleka katika eneo lako. Chanjo zipi, katika umri gani na jinsi zinavyotolewa (kwenye maji ya kunywa, tone la jicho, sindano au kuchoma bawa) lazima viwekwe na daktari wa mifugo aliyesajiliwa au afisa wa afya ya mifugo, kwa sababu magonjwa hutofautiana kwa eneo na msimu. Mifano ya kawaida barani Afrika ni ugonjwa wa Newcastle (mdondo) na Gumboro, pamoja na ugonjwa wa Marek (mara nyingi hutolewa kituo cha vifaranga) na ndui ya kuku (fowl pox); daktari wako anaweza kuongeza nyingine. Omba kituo cha vifaranga kumbukumbu ya chanjo ambazo vifaranga tayari wamepata.",
            "Fanya chanjo zifanye kazi: nunua kutoka kwa agrovet yenye leseni, kagua tarehe ya kuisha muda, zihifadhi katika ubaridi kutoka dukani hadi kwa kuku, zitoe kama lebo na daktari wanavyosema kikamilifu, chanja kundi zima, na uandike tarehe, chanjo, namba ya bechi (batch number) na njia katika kumbukumbu zako. Usitibu kuku wagonjwa kwa viuavijasumu (antibiotics) peke yako kamwe: daktari wa mifugo anaamua, na wewe unaandika muda wa kusubiri kutoka kwenye lebo ili mayai wala nyama visiuzwe kabla haujaisha.",
            "Usalama wa kibiolojia wa kundi: nunua vifaranga kutoka kituo kimoja kinachoaminika na uendeshe banda kwa mtindo wa wote ndani, wote nje (kuku wote wa umri mmoja, wanaingia pamoja na wanatoka pamoja). Kati ya makundi, ondoa matandazo yote, osha na uue vijidudu katika banda na vifaa, na uliache tupu kwa muda wa mapumziko anaoshauri daktari wa mifugo. Zuia wageni, tumia dimbwi la kuchovya miguu (footbath) na viatu vya shambani, weka ndege wa porini na panya mbali, na usilete kamwe kuku wa sokoni nyumbani. Mafua ya ndege ni ugonjwa unaopaswa kuripotiwa: vifo vya ghafla, upanga (kishungi) uliovimba wenye rangi ya zambarau, kuhema kwa shida au kushuka ghafla kwa mayai kunamaanisha uwafungie kuku ndani, usimamishe mauzo na usafirishaji wote, na umpigie daktari wa mifugo mara moja."
          ],
          steps: ["Uliza kituo cha vifaranga chanjo ambazo vifaranga tayari wamepata.", "Keti na daktari wako wa mifugo muandike ratiba: ugonjwa, umri, njia.", "Nunua chanjo kutoka agrovet yenye leseni; kagua tarehe ya kuisha; zihifadhi kwenye ubaridi.", "Chanja kundi zima kama lebo na daktari wanavyosema kikamilifu; andika.", "Endesha wote ndani, wote nje; safisha, ua vijidudu na upumzishe banda kati ya makundi.", "Ukishuku mafua ya ndege au Newcastle: wafungie kuku ndani, simamisha mauzo, mpigie daktari wa mifugo."],
          words: [["Ratiba ya chanjo", "mpango ulioandikwa wa chanjo ambazo kundi linapata, katika umri gani na kwa njia gani, unaowekwa na daktari wa mifugo."], ["Wote ndani, wote nje (all-in, all-out)", "kuku wote katika banda ni wa umri mmoja, wanawekwa pamoja na wanaondolewa pamoja."], ["Muda wa kusubiri (withdrawal period)", "muda baada ya dawa kabla mayai au nyama havijauzwa; umeandikwa kwenye lebo."], ["Agrovet yenye leseni", "duka linaloruhusiwa kisheria kuuza dawa na chanjo za wanyama."]],
          slides: [
            { title: "Daktari wa mifugo anaweka ratiba", bullets: ["Chanjo zipi, umri gani, njia gani", "Za kawaida: Newcastle, Gumboro, Marek, ndui ya kuku", "Uliza kituo cha vifaranga walichopata tayari"] },
            { title: "Fanya chanjo zifanye kazi", bullets: ["Agrovet yenye leseni; kagua tarehe; hifadhi kwenye ubaridi", "Kama lebo na daktari wanavyosema; kundi zima", "Andika tarehe, chanjo, namba ya bechi, njia"] },
            { title: "Usalama wa kibiolojia wa kundi", bullets: ["Kituo kimoja cha vifaranga; wote ndani, wote nje", "Safisha, ua vijidudu na pumzisha kati ya makundi", "Dimbwi la miguu, viatu vya shambani, hakuna wageni, hakuna kuku wa sokoni"] },
            { title: "Mafua ya ndege: ripoti mara moja", bullets: ["Vifo vya ghafla, upanga wa zambarau, kuhema, mayai kushuka", "Wafungie kuku ndani; simamisha mauzo na usafirishaji", "Mpigie daktari wa mifugo au ofisi ya mifugo sasa"] }
          ],
          sources: [WOAH_ND, WOAH_AI, APHIS_AI, FAO_BIOSEC, FAO_PRUDENT, KVB, VCN],
          tryIt: "Panga mazungumzo na daktari wako wa mifugo au afisa wa afya ya mifugo. Beba jedwali lenye safu: ugonjwa, umri, njia, tarehe iliyotolewa, namba ya bechi. Jaza ratiba anayoweka daktari. Chini yake, andika sheria tano za usalama wa kibiolojia kwa kundi lako.",
          youCanNow: "kuandika ratiba ya chanjo pamoja na daktari wa mifugo, kuandika kila chanjo, na kuendesha usalama mkali wa kibiolojia wa kundi.",
          quickCheck: [
            { objective: "O4", q: "Nani anapaswa kuamua chanjo zipi kundi lako linapata na lini?", options: ["Muuzaji wa chakula", "Daktari wa mifugo aliyesajiliwa au afisa wa afya ya mifugo", "Jirani mwenye kuku", "Kikundi cha mitandao ya kijamii"], answer: 1, why: "Magonjwa hutofautiana kwa eneo, kwa hiyo daktari wa mifugo aliyesajiliwa anaweka ratiba." },
            { objective: "O4", q: "Wote ndani, wote nje inamaanisha nini?", options: ["Kuku hutoka kujitafutia chakula kila siku", "Wageni wanaweza kuingia na kutoka kwa uhuru", "Kuku wapya huongezwa kila wiki", "Kuku wote katika banda wanawekwa na kuondolewa pamoja"], answer: 3, why: "Kundi moja la umri mmoja kwa kila banda linakuwezesha kulisafisha na kulipumzisha kikamilifu kati ya makundi, na kuvunja mzunguko wa magonjwa." }
          ]
        },
        {
          title: "Kushughulikia mayai na kumbukumbu za kundi",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kusanya na uhifadhi mayai ipasavyo na uweke kumbukumbu za kundi kila siku.",
          text: [
            "Mayai hupoteza ubora na hupata vijidudu yakikaa kwenye viota. Kusanya angalau mara mbili kwa siku, zaidi wakati wa joto. Weka viota safi kwa matandazo mapya ili mayai yatoke safi. Tenganisha mayai yaliyopasuka, machafu na madogo sana. Safisha mayai yenye uchafu kidogo kwa kitambaa kikavu; usiyaloweke ndani ya maji, kwa sababu hilo linaweza kuvuta vijidudu kupitia ganda. Hifadhi mayai kwenye trei, ncha iliyochongoka ikiwa chini, mahali penye ubaridi, kivuli na hewa, mbali na harufu kali, na uuze ya zamani kwanza.",
            "Kumbukumbu zinakuambia kinachoendelea kabla haijachelewa. Kila siku andika: idadi ya kuku, vifo na sababu yake inayowezekana, chakula kilichotumika, maji yaliyotumika, na mayai yaliyokusanywa (kwa trei na daraja). Andika pia kila chanjo na matibabu, tarehe ya mwisho wa muda wa kusubiri kutoka kwenye lebo, kila ununuzi na kila mauzo. Daftari la karatasi linafaa; jedwali la simu linakujumlishia.",
            "Tumia kumbukumbu. Kiwango cha vifo = kuku waliokufa / kuku walioanza x 100. Kiwango cha kutaga = mayai yaliyokusanywa kwa siku / kuku wa mayai x 100. Vifo vikipanda, matumizi ya maji yakishuka au kiwango cha kutaga kikishuka ghafla, kagua kundi na umpigie daktari wa mifugo. Mwishoni mwa kundi, kumbukumbu zinakupa namba za karatasi yako ya gharama."
          ],
          steps: ["Kusanya mayai angalau mara mbili kwa siku.", "Tenganisha mayai yaliyopasuka, machafu na madogo; safisha kwa kitambaa kikavu yenye uchafu kidogo.", "Hifadhi kwenye trei, ncha iliyochongoka chini, penye ubaridi na kivuli; ya zamani kwanza.", "Kila siku andika kuku, vifo, chakula, maji na mayai.", "Andika chanjo, matibabu, tarehe za mwisho wa muda wa kusubiri, manunuzi na mauzo.", "Kokotoa kiwango cha vifo na cha kutaga kila wiki na utafute mabadiliko ya ghafla."],
          words: [["Kiwango cha vifo", "sehemu ya kuku waliokufa, kama asilimia ya kuku ulioanza nao."], ["Kiwango cha kutaga", "mayai yaliyokusanywa kwa siku kama asilimia ya idadi ya kuku wa mayai."], ["Daraja", "kupanga mayai kwa ukubwa na ubora."]],
          slides: [
            { title: "Kushughulikia mayai", bullets: ["Kusanya angalau mara mbili kwa siku", "Viota safi; tenganisha mayai yaliyopasuka na machafu", "Safisha kwa kitambaa kikavu; usiloweke ndani ya maji"] },
            { title: "Kuhifadhi mayai", bullets: ["Kwenye trei, ncha iliyochongoka chini", "Penye ubaridi, kivuli, hewa, bila harufu kali", "Uza ya zamani kwanza"] },
            { title: "Kumbukumbu za kila siku", bullets: ["Kuku, vifo na sababu, chakula, maji, mayai", "Chanjo, matibabu, tarehe za mwisho wa muda wa kusubiri", "Kila ununuzi na mauzo"] },
            { title: "Tumia namba", bullets: ["Vifo = waliokufa / walioanza x 100", "Kiwango cha kutaga = mayai kwa siku / kuku wa mayai x 100", "Mabadiliko ya ghafla: kagua kundi, mpigie daktari wa mifugo"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Tengeneza ukurasa wa kumbukumbu za kila siku wenye safu: tarehe, kuku, vifo na sababu, chakula kilichotumika, maji yaliyotumika, mayai yaliyokusanywa, maelezo. Jaza wiki ya mfano. Kisha kokotoa kiwango cha vifo na, kwa kuku wa mayai, kiwango cha kutaga kwa siku moja.",
          youCanNow: "kukusanya na kuhifadhi mayai ipasavyo na kuweka kumbukumbu za kila siku zinazoonyesha kiwango cha vifo na cha kutaga.",
          quickCheck: [
            { objective: "O5", q: "Mayai yanapaswa kuhifadhiwa vipi kwenye trei?", options: ["Ncha iliyochongoka juu, juani", "Ncha iliyochongoka chini, mahali penye ubaridi na kivuli", "Yaoshwe na kulowekwa kwanza", "Karibu na mafuta ya taa na vitunguu"], answer: 1, why: "Ncha iliyochongoka chini, penye ubaridi na kivuli, huweka mayai mabichi kwa muda mrefu." },
            { objective: "O5", q: "Ulianza na kuku wa nyama 500 na 25 wakafa. Kiwango cha vifo ni kipi?", options: ["Asilimia 25", "Asilimia 2.5", "Asilimia 50", "Asilimia 5"], answer: 3, why: "25 / 500 x 100 = asilimia 5." }
          ]
        },
        {
          title: "Uchumi wa kundi: gharama kwa kila kuku na bei ya kurudisha gharama",
          objectives: ["O6"],
          minutes: 6,
          goal: "Kokotoa gharama kwa kila kuku au kwa kila trei na bei ya kurudisha gharama ya kundi.",
          text: [
            "Orodhesha kila gharama ya kundi: vifaranga, chakula, chanjo na daktari wa mifugo, matandazo, mafuta au umeme wa kulea vifaranga, dawa ya kuua vijidudu, nguvukazi, usafiri na vifungashio. Mfano kwa bei za kubuni za shilingi za Kenya, kuku wa nyama 500: vifaranga 50,000; chakula 122,500; chanjo na daktari 5,000; matandazo, kulea na umeme 8,000; usafiri na mengineyo 6,500. Jumla KES 192,000. Tumia bei unazopewa wewe: bei hutofautiana kwa mahali na msimu, na kwa NGN, GHS au XOF njia ni ile ile.",
            "Vifo hubadilisha kila kitu, kwa sababu kuku waliokufa walikwisha kula chakula. Asilimia 5 wakifa, unauza kuku 475. Gharama kwa kila kuku anayeuzwa = 192,000 / 475 = KES 404. Hiyo ndiyo bei yako ya kurudisha gharama: ukiuza chini yake unapata hasara. Asilimia 15 wakifa, unauza 425 tu, na bei ya kurudisha gharama inapanda hadi KES 452 hivi. Kwa bei ya kuuza ya KES 550, kuku 475 wanaleta 261,250, faida ya 69,250. Kujua ni kuku wangapi lazima uuze ili kulipa gharama: 192,000 / 550 = 349.1, kwa hiyo kuku 350.",
            "Kuku wa mayai: fanya hesabu kila wiki. Mfano: kuku wa mayai 300 kwa kiwango cha kutaga cha asilimia 80 wanatoa 300 x 0.8 x 7 = mayai 1,680, au trei 56 za mayai 30. Kama chakula na gharama nyingine ni KES 15,000 kwa wiki, gharama kwa kila trei ni 15,000 / 56 = KES 268 hivi. Ilinganishe na bei wanayolipa wanunuzi. Kabla hujaanza, soma pia kwa ukamilifu mkopo wowote au mkataba wowote na mnunuzi au msambazaji, na umwulize mshauri unayemwamini."
          ],
          steps: ["Orodhesha kila gharama ya kundi kwa bei za mahali ulipo.", "Zijumlishe upate gharama yote.", "Kadiria vifo na ukokotoe kuku utakaouza.", "Gharama kwa kila kuku = gharama yote / kuku wanaouzwa: bei yako ya kurudisha gharama.", "Kuku wa mayai: gharama kwa kila trei = gharama za wiki / trei zilizokusanywa.", "Linganisha na bei ya kuuza; kokotoa faida au hasara."],
          words: [["Bei ya kurudisha gharama (break-even)", "bei kwa kila kuku au trei ambapo mapato yanalipa gharama zote, bila faida wala hasara."], ["Faida", "mapato ukitoa gharama zote."], ["Karatasi ya gharama", "orodha ya kila gharama ya kundi pamoja na jumla zake."]],
          slides: [
            { title: "Orodhesha kila gharama", bullets: ["Vifaranga, chakula, chanjo na daktari, matandazo, mafuta", "Nguvukazi, usafiri, vifungashio", "Jumla ya mfano: KES 192,000 kwa kuku wa nyama 500"] },
            { title: "Vifo vinapandisha gharama kwa kila kuku", bullets: ["Asilimia 5 wamekufa: 475 wanauzwa, KES 404 kila mmoja", "Asilimia 15 wamekufa: 425 wanauzwa, KES 452 hivi kila mmoja", "Kuku waliokufa walikwisha kula chakula"] },
            { title: "Bei ya kurudisha gharama na faida", bullets: ["Bei ya kurudisha gharama = gharama yote / kuku wanaouzwa", "Kwa KES 550: 475 x 550 - 192,000 = KES 69,250", "Kuku wanaohitajika kulipa gharama: 192,000 / 550 = 350"] },
            { title: "Kuku wa mayai: gharama kwa kila trei", bullets: ["Kuku 300 x 0.8 x 7 = mayai 1,680 = trei 56", "KES 15,000 / 56 = KES 268 hivi kwa trei", "Bei ni mifano; tumia zako"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wenye gharama kwa kundi moja: aina ya kuku, ukubwa wa banda na idadi ya kuku, mpangilio wa kulea vifaranga, vyakula kwa kila hatua, ratiba ya chanjo na sheria za usalama wa kibiolojia, kumbukumbu, na karatasi ya gharama yenye kila gharama, vifo unavyotarajia, gharama kwa kila kuku anayeuzwa au kwa kila trei, na bei yako ya kurudisha gharama.",
          youCanNow: "kukokotoa gharama za kundi, kuzingatia vifo, na kupata gharama yako kwa kila kuku au kwa kila trei na bei yako ya kurudisha gharama.",
          quickCheck: [
            { objective: "O6", q: "Kundi linagharimu NGN 900,000 na unatarajia kuuza kuku 450. Bei ya kurudisha gharama kwa kila kuku ni ipi?", options: ["NGN 200", "NGN 450", "NGN 2,000", "NGN 20,000"], answer: 2, why: "900,000 / 450 = NGN 2,000 kwa kila kuku." },
            { objective: "O6", q: "Kwa nini vifo vingi vinapandisha gharama yako kwa kila kuku?", options: ["Kuku waliokufa walikula chakula na kugharimu pesa lakini hawauzwi", "Kuku waliokufa wanauzwa kwa bei ya juu", "Chakula kinakuwa rahisi", "Chanjo zinagharimu kidogo"], answer: 0, why: "Gharama ile ile yote inagawanywa kwa kuku wachache wanaouzwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha kundi lenye faida",
        questions: [
          { objective: "O4", q: "Kabla ya kununua chanjo, unapaswa kukagua nini?", options: ["Kwamba ndizo za bei rahisi zaidi", "Kwamba zinatoka agrovet yenye leseni, hazijapita tarehe na zimehifadhiwa kwenye ubaridi", "Kwamba hazina lebo", "Kwamba jirani ana zilizobaki"], answer: 1, why: "Chanjo zilizopita tarehe au zilizopata joto huenda zisilinde kundi." },
          { objective: "O4", q: "Kuku wako wa mayai wanakufa ghafla kwa wingi wakiwa na upanga wa zambarau. Unafanya nini?", options: ["Uza mayai haraka", "Toa viuavijasumu kutoka dukani", "Leta kuku wapya", "Wafungie kuku ndani, simamisha mauzo na usafirishaji wote, na umpigie daktari wa mifugo mara moja"], answer: 3, why: "Dalili hizi zinaashiria mafua ya ndege, ambayo lazima yaripotiwe mara moja." },
          { objective: "O5", q: "Kwa nini kukusanya mayai angalau mara mbili kwa siku?", options: ["Mayai yanayobaki kwenye viota hupoteza ubora na hupata vijidudu", "Kuku hutaga usiku tu", "Kunafanya kuku watage mara mbili", "Wanunuzi wanapenda mayai yenye joto"], answer: 0, why: "Kukusanya mara kwa mara huweka mayai safi na mabichi." },
          { objective: "O5", q: "Kuku wa mayai 250 wametaga mayai 200 leo. Kiwango cha kutaga ni kipi?", options: ["Asilimia 50", "Asilimia 125", "Asilimia 80", "Asilimia 20"], answer: 2, why: "200 / 250 x 100 = asilimia 80." },
          { objective: "O6", q: "Gharama za kuku wa mayai kwa wiki ni GHS 2,400 na unakusanya trei 60. Gharama kwa kila trei ni ipi?", options: ["GHS 40", "GHS 144", "GHS 4", "GHS 400"], answer: 0, why: "2,400 / 60 = GHS 40 kwa kila trei." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ufugaji wa Kuku wa Kibiashara",
    questions: [
      { objective: "O1", q: "Aina gani ya kuku inaleta mapato mapema zaidi?", options: ["Kuku wa mayai", "Kuku wa nyama", "Majogoo wa kuzalisha", "Kuku wa kienyeji walioboreshwa wanaofugwa kwa mayai"], answer: 1, why: "Kuku wa nyama mara nyingi huuzwa ndani ya wiki 5 hadi 7 hivi." },
      { objective: "O1", q: "Kuku wa mayai wanahitaji nini ambacho kuku wa nyama hawahitaji?", options: ["Mnunuzi wa siku moja maalum", "Kutolishwa kwa miezi", "Miezi ya kulisha kabla ya mapato na soko la mayai lisilokatika", "Kuuzwa ndani ya wiki sita"], answer: 2, why: "Kuku wa mayai huanza kutaga wakiwa na miezi 4 hadi 5 hivi tu, kisha wanahitaji wanunuzi wa mayai wa kudumu." },
      { objective: "O1", q: "Unapaswa kununua vifaranga wa siku moja wapi?", options: ["Kutoka kituo cha kutotolea vifaranga kinachoaminiwa na ofisi ya mifugo au daktari wako wa mifugo", "Kutoka kwa muuzaji yeyote wa barabarani", "Kutoka tangazo la mtandaoni la bei rahisi zaidi", "Kutoka shamba lenye kuku wagonjwa"], answer: 0, why: "Kituo kinachoaminika kinatoa vifaranga wenye afya wa aina sahihi pamoja na kumbukumbu za chanjo." },
      { objective: "O2", q: "Vifaranga wamesongamana upande mmoja wa duara la kulelea, mbali na kipasha joto. Sababu inayowezekana ni ipi?", options: ["Joto mno", "Chakula kingi mno", "Wana usingizi", "Upepo unaopenya"], answer: 3, why: "Kusongamana upande mmoja mbali na joto kunaashiria upepo unaopenya." },
      { objective: "O2", q: "Nini kinatokea ukisongamanisha kuku wengi mno katika banda?", options: ["Wanakua haraka zaidi", "Joto kali, matandazo yaliyolowa, kudonoana na magonjwa", "Wanahitaji maji kidogo", "Mayai yanakuwa makubwa"], answer: 1, why: "Msongamano unadhuru afya na ukuaji." },
      { objective: "O2", q: "Kwa nini kipasha joto cha mkaa lazima kiwe na hewa ya kutosha?", options: ["Moshi wa mkaa unaweza kuua vifaranga na watu", "Ili kupoza vifaranga", "Ili kuruhusu ndege wa porini kuingia", "Ili kuokoa mkaa"], answer: 0, why: "Mkaa unaoungua hutoa moshi wa kuua katika nafasi iliyofungwa." },
      { objective: "O2", q: "Unapaswa kufanya nini kwa banda kabla ya kundi jipya kufika?", options: ["Ongeza kuku wapya kwa wale wa zamani", "Acha matandazo ya zamani kwa joto", "Safisha, ua vijidudu na ulipumzishe kama anavyoshauri daktari wa mifugo", "Hakuna kitu"], answer: 2, why: "Kusafisha, kuua vijidudu na kupumzisha kunavunja mzunguko wa magonjwa kati ya makundi." },
      { objective: "O3", q: "Mpangilio wa kawaida wa chakula kwa kuku wa nyama ni upi?", options: ["Layers mash, kisha chakula cha kuanzia", "Growers mash tu", "Chick mash, kisha layers mash", "Chakula cha kuanzia, kisha cha kumalizia"], answer: 3, why: "Kuku wa nyama huanza na chakula cha kuanzia chenye protini nyingi na kumalizia na chakula cha kumalizia." },
      { objective: "O3", q: "Kwa nini usijaze vyombo vya chakula hadi juu kabisa?", options: ["Kuku hupekua na kumwaga chakula na kukipoteza", "Chakula kinapoa", "Kunawafanya kuku watage kidogo", "Kunavutia madaktari wa mifugo"], answer: 0, why: "Vyombo vilivyojazwa kupita kiasi vinapoteza chakula, gharama kubwa zaidi ya kundi." },
      { objective: "O3", q: "Mara nyingi dalili ya kwanza kwamba kuku wanaanza kuugua ni ipi?", options: ["Wanataga mayai makubwa", "Manyoya yao yanakuwa meupe", "Kushuka ghafla kwa matumizi ya maji", "Wanakua haraka zaidi"], answer: 2, why: "Kuku wagonjwa hunywa kidogo, mara nyingi kabla dalili nyingine hazijaonekana." },
      { objective: "O4", q: "Ipi ni chanjo ya kawaida ya kuku barani Afrika inayowekwa na daktari wa mifugo?", options: ["Ugonjwa wa Newcastle", "Kichaa cha mbwa", "Ugonjwa wa miguu na midomo", "Ndigana kali (East Coast fever)"], answer: 0, why: "Chanjo ya Newcastle ni mojawapo ya chanjo za kuku zilizo za kawaida zaidi; daktari wa mifugo anaweka ratiba." },
      { objective: "O4", q: "Unapaswa kuandika nini kila unapochanja?", options: ["Hali ya hewa tu", "Hakuna; agrovet huweka kumbukumbu", "Bei ya mayai", "Tarehe, chanjo, namba ya bechi na njia"], answer: 3, why: "Kumbukumbu kamili zinaonyesha kundi lilipata nini na zinamsaidia daktari wa mifugo." },
      { objective: "O4", q: "Nani anaamua kama kuku wagonjwa wapewe viuavijasumu?", options: ["Mfanyakazi wa shambani", "Daktari wa mifugo", "Mnunuzi wa mayai", "Muuzaji wa chakula"], answer: 1, why: "Daktari wa mifugo anaamua, na wewe unaandika tarehe ya mwisho wa muda wa kusubiri kutoka kwenye lebo." },
      { objective: "O5", q: "Unapaswa kusafisha yai lenye uchafu kidogo vipi?", options: ["Liloweke ndani ya maji", "Lisugue kwa sabuni", "Lifute kwa kitambaa kikavu", "Liache kwenye kiota"], answer: 2, why: "Kusafisha kwa kitambaa kikavu kunazuia kuvuta vijidudu kupitia ganda." },
      { objective: "O5", q: "Kipi kinapaswa kuwa katika kumbukumbu za kundi za kila siku?", options: ["Kuku, vifo, chakula, maji na mayai", "Mayai yaliyouzwa tu", "Mauzo ya jirani", "Hakuna kitu ikiwa yote yanaonekana sawa"], answer: 0, why: "Namba za kila siku zinaonyesha matatizo mapema na zinajaza karatasi ya gharama." },
      { objective: "O5", q: "Ulianza na kuku wa nyama 1,000 na 80 wakafa. Kiwango cha vifo ni kipi?", options: ["Asilimia 80", "Asilimia 0.8", "Asilimia 12.5", "Asilimia 8"], answer: 3, why: "80 / 1,000 x 100 = asilimia 8." },
      { objective: "O6", q: "Bei ya kurudisha gharama kwa kila kuku ni ipi?", options: ["Bei ya juu zaidi sokoni", "Gharama yote ikigawanywa kwa kuku wanaouzwa", "Bei ya kifaranga mmoja", "Gharama ya chakula tu"], answer: 1, why: "Kwa bei hii, mapato yanalipa gharama zote tu." },
      { objective: "O6", q: "Kundi linagharimu XOF 1,500,000 na unauza kuku 500 kwa XOF 4,000. Faida ni ipi?", options: ["XOF 2,000,000", "XOF 1,500,000", "XOF 500,000", "XOF 4,000"], answer: 2, why: "500 x 4,000 = mapato 2,000,000; ukitoa gharama 1,500,000 = faida XOF 500,000." },
      { objective: "O6", q: "Kuku wa mayai 300 wanataga kwa asilimia 80 kwa wiki moja. Takriban trei ngapi za mayai 30?", options: ["56", "80", "240", "1,680"], answer: 0, why: "300 x 0.8 x 7 = mayai 1,680; 1,680 / 30 = trei 56." },
      { objective: "O6", q: "Gharama yako kwa kila kuku anayeuzwa ni KES 404 na wanunuzi wanalipa KES 380. Nini kinatokea?", options: ["Unapata faida ya KES 24 kwa kila kuku", "Unarudisha gharama bila faida wala hasara", "Hakuna; bei hazina maana", "Unapata hasara ya KES 24 hivi kwa kila kuku"], answer: 3, why: "Kuuza chini ya bei ya kurudisha gharama kunaleta hasara kwa kila kuku." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uukague tena.",
    criteria: [
      { name: "Aina ya kuku na soko", objective: "O1", notYet: "Hakuna sababu ya uchaguzi, au hakuna mnunuzi aliyetajwa.", meets: "Anataja aina ya kuku, kituo cha vifaranga kinachoaminika na angalau sababu tatu zinazofaa soko, pesa na muda.", exceeds: "Anataja mnunuzi maalum na wakati anaponunua, na anapanga kundi kulingana na hilo." },
      { name: "Banda, nafasi na kulea vifaranga", objective: "O2", notYet: "Idadi ya kuku haijakokotolewa kutoka eneo la sakafu, au hakuna mpango wa kulea vifaranga.", meets: "Eneo la sakafu x kuku kwa kila mita ya mraba kutoka mwongozo; mpangilio wa kulea vifaranga wenye joto linalokaguliwa kwa tabia ya vifaranga.", exceeds: "Pia inahusu kusafisha, kuua vijidudu na kupumzisha banda, na hewa salama kwa chanzo cha joto." },
      { name: "Mpango wa chakula na maji", objective: "O3", notYet: "Hatua au aina za chakula zinakosekana, au hakuna mpango wa maji.", meets: "Aina ya chakula kwa kila hatua, tarehe za kubadilisha, vyombo vya chakula na maji vya kutosha, na maji safi wakati wote.", exceeds: "Anakadiria mifuko ya chakula kwa kila hatua na nani anakagua maji kila siku." },
      { name: "Chanjo na usalama wa kibiolojia", objective: "O4", notYet: "Hakuna daktari wa mifugo aliyehusishwa, au vipimo vimebuniwa, au hakuna sheria za usalama wa kibiolojia.", meets: "Ratiba iliyowekwa na daktari wa mifugo aliyesajiliwa, imeandikwa; wote ndani, wote nje na angalau sheria nne za usalama wa kibiolojia; kuripoti mafua ya ndege.", exceeds: "Inajumuisha jina na namba ya daktari wa mifugo na kumbukumbu ya chanjo ya kituo cha vifaranga." },
      { name: "Kumbukumbu", objective: "O5", notYet: "Hakuna mpango wa kumbukumbu za kila siku.", meets: "Kumbukumbu za kila siku za kuku, vifo, chakula, maji na mayai, pamoja na chanjo, matibabu na mauzo.", exceeds: "Inaonyesha jinsi kiwango cha vifo na cha kutaga kitakavyokaguliwa kila wiki." },
      { name: "Karatasi ya gharama na bei ya kurudisha gharama", objective: "O6", notYet: "Gharama zinakosekana, vifo vimepuuzwa, au hesabu si sahihi.", meets: "Kila gharama imeorodheshwa, vifo vimezingatiwa, gharama sahihi kwa kila kuku au trei na bei ya kurudisha gharama.", exceeds: "Analinganisha bei ya kurudisha gharama na bei halisi za wanunuzi na anaonyesha faida katika viwango viwili vya vifo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoendesha kundi lao linalofuata kwa mpango ulioandikwa na kumbukumbu za kila siku (ufuatiliaji wa siku 30)",
      "Vifo kwa kila kundi vinavyoripotiwa na wanafunzi kabla na baada ya kozi",
      "Wanafunzi wanaojua na wanaoweza kutaja gharama yao kwa kila kuku au kwa kila trei wanapouza",
      "Matukio yanayoshukiwa ya mafua ya ndege au Newcastle yanayoripotiwa na wanafunzi kwa daktari wa mifugo ndani ya siku moja"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, kalamu na kikokotoo cha simu; jedwali la simu si lazima",
      "Utepe wa kupimia kwa ajili ya banda la kuku",
      "Bei za mahali ulipo za vifaranga, chakula, chanjo na gharama nyingine, na jina na namba ya daktari wa mifugo na kituo cha vifaranga kinachoaminika",
      "Kama dakika 70 hadi 80 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kabla ya kipindi, kusanya bei za mahali za vifaranga, chakula na chanjo ili wanafunzi wakokotoe gharama za kundi kwa namba halisi.",
      "Mwalike daktari wa mifugo au afisa wa afya ya mifugo wa eneo lako kwenye kipindi cha Sura ya 2 aeleze ratiba ya chanjo kwa eneo lenu; usitoe kamwe vipimo vya chanjo wala dawa wewe mwenyewe.",
      "Mkitembelea shamba la kuku, fuateni sheria zake za usalama wa kibiolojia na msitembelee shamba lingine la kuku siku hiyo hiyo.",
      "Fanya mfano wa bei ya kurudisha gharama ubaoni, kisha wanafunzi wawili wawili wakokotoe gharama za kundi lao wenyewe.",
      "Pima kila mpango wa kundi wenye gharama kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
