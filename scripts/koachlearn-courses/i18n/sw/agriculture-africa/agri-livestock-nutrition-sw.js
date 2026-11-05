"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-livestock-nutrition.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FEEDIPEDIA = { name: "Feedipedia (INRAE, CIRAD, AFZ na FAO): mfumo wa taarifa kuhusu vyakula vya mifugo", url: "https://www.feedipedia.org/" };
const FEEDIPEDIA_MAIZE = { name: "Feedipedia: Nafaka ya mahindi (protini kama asilimia 8 hadi 10.5 ya uzito mkavu)", url: "https://www.feedipedia.org/node/556" };
const FEEDIPEDIA_SOY = { name: "Feedipedia: Mashudu ya soya (protini kulingana na aina)", url: "https://www.feedipedia.org/node/674" };
const ICIPE_PUSHPULL = { name: "icipe: Teknolojia ya push-pull (desmodium, Napier na Brachiaria kama malisho)", url: "https://www.icipe.org/impacts/demonstration-research-impacts-communities/push-pull-technology" };
const TENNESSEE_PEARSON = { name: "University of Tennessee Extension: Kifurushi cha mazoezi ya vyakula vya mifugo (mraba wa Pearson)", url: "https://animalscience.tennessee.edu/wp-content/uploads/sites/7/2020/07/BeefFeedstuffsActivityPacket.pdf" };
const FAO_SILAGE = { name: "FAO: Mbinu za kuvuna na kutengeneza sileji (sileji katika nchi za joto)", url: "https://www.fao.org/4/x8486e/x8486e0w.htm" };
const FAO_SILAGE_SMALL = { name: "FAO: Kutengeneza sileji kwa wakulima wadogo (hitimisho: sileji ya mfuko, njia za gharama nafuu)", url: "https://www.fao.org/4/x8486e/x8486e13.htm" };
const ILRI_MYCO = { name: "ILRI: Vifunga sumu kuvu (mycotoxin binders), njia ya maziwa salama zaidi nchini Kenya?", url: "https://www.ilri.org/knowledge/publications/mycotoxin-binders-option-safer-milk-kenya" };

module.exports = {
  id: "agri-livestock-nutrition-sw",
  lang: "sw",
  translationOf: "agri-livestock-nutrition",
  category: "Agriculture (Africa)",
  name: "Lishe ya Mifugo na Kuchanganya Chakula kwa Viungo vya Nyumbani",
  skills: "Kulinganisha virutubisho na mahitaji ya mnyama, Kuchagua viungo vya chakula na malisho ya eneo lako, Kusawazisha mgao kwa mraba wa Pearson, Kutengeneza sileji na hei na kuhifadhi chakula kwa usalama, Kupanga ulishaji kwa hatua za ukuaji, Kukokotoa gharama ya chakula kwa kila kilo ya uzito au lita ya maziwa",
  outcome: "kutengeneza na kukokotoa gharama ya mgao uliosawazishwa kwa viungo vya eneo lako kwa kundi moja la wanyama: kulinganisha nishati, protini, madini na maji na hatua yake ya ukuaji, kusawazisha protini kwa mraba wa Pearson, kuhifadhi chakula kwa usalama, na kukokotoa gharama ya chakula kwa kila kilo ya uzito, kwa kila trei ya mayai au kwa kila lita ya maziwa.",
  about: [
    "Kozi hii ni kwa wafugaji wadogo na wanaokua wa mifugo na kuku, wafanyakazi wa shamba, vijana wajasiriamali wa kilimo, wachanganyaji wadogo wa chakula na maafisa ugani nchini Kenya, Nigeria, Ghana, Côte d'Ivoire, Burkina Faso na kote Afrika. Kwa kawaida chakula ndicho gharama kubwa zaidi ya kufuga, kwa hiyo kulisha vizuri na kwa bei nafuu kunaamua kama shamba linaleta faida.",
    "Sura ya 1 inahusu kile wanyama wanachohitaji na kile ulicho nacho: virutubisho, viungo vya eneo lako kama mahindi, pumba za mahindi, pumba za ngano, mashudu ya soya na ya pamba, unga wa samaki, na malisho kama majani ya Napier, desmodium na lablab, na jinsi ya kusawazisha mgao kwa mraba wa Pearson, hatua kwa hatua. Sura ya 2 inahusu kuhifadhi na kupanga: sileji na hei, kuhifadhi chakula kwa usalama dhidi ya ukungu na sumu kuvu, kulisha kwa hatua za ukuaji kwa mpango wa chakula wa sehemu tatu, na kukokotoa gharama ya chakula kwa kila kilo ya uzito au kila lita ya maziwa.",
    "Bei zote hapa ni mifano ya kubuni: tumia bei zako za eneo lako. Thamani za virutubisho vya viungo zinatofautiana, kwa hiyo zikague na msambazaji wako, maabara ya chakula au afisa ugani wako. Kozi hii haitoi vipimo vya dawa wala viongezeo; fuata lebo na daktari wa mifugo. Kila somo linachukua kama dakika tano na linaishia na kazi. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tengeneza mgao wenye gharama kwa kundi moja la wanyama shambani kwako (au mfano kama kuku wa mayai karibu na Kumasi, nguruwe wanaokua karibu na Ibadan, kuku wa nyama karibu na Bouake, au ng'ombe wa maziwa Kiambu): taja kundi na hatua; andika mpango wa chakula wa sehemu tatu (chakula cha msingi au malisho, chakula cha nguvu, virutubisho vya ziada) na maji; sawazisha protini ya chakula cha nguvu kwa mraba wa Pearson, ukionyesha hesabu yako; orodhesha kilo za kila kiungo kwa kila kilo 100 za mchanganyiko; kokotoa gharama yake kwa kilo kwa bei zako za eneo lako; na kokotoa gharama ya chakula kwa kila kilo ya uzito, kwa kila trei ya mayai au kwa kila lita ya maziwa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafugaji wadogo na wa kibiashara wanaokua wa mifugo na kuku, wafanyakazi wa shamba, vijana wajasiriamali wa kilimo, wachanganyaji wadogo wa chakula na maafisa ugani katika Afrika Mashariki, Magharibi na Kati (pamoja na nchi zinazozungumza Kifaransa).",
    startingPoint: "Wanalisha wanyama kwa malisho ya kuchunga, mabaki ya mazao na chakula cha kiwandani cha kununua. Wengi hawawezi kusoma lebo ya chakula au kusawazisha mgao, hawahifadhi malisho kwa kiangazi, na hawajui chakula chao kinagharimu kiasi gani kwa kila kilo ya nyama, yai au maziwa.",
    gap: "Chakula cha kununua ni ghali na ubora wake unatofautiana; chakula duni au chenye ukungu kinapunguza ukuaji, mayai na maziwa na kinaweza kuwaugua wanyama. Wakulima wanaoweza kuchanganya mgao uliosawazishwa kwa viungo vya eneo lao, kuhifadhi malisho na kukokotoa gharama ya chakula wanaweza kupunguza gharama, kuwafanya wanyama waendelee kuzalisha wakati wa kiangazi na kupanga bei za mazao yao kwa kujiamini.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hesabu rahisi tu (kuzidisha, kugawanya, asilimia); kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: karatasi na kalamu au kikokotoo cha simu; jedwali (spreadsheet) la simu si lazima",
      "Pesa: bei kwa KES, NGN, GHS na XOF ni mifano ya kubuni; wanafunzi wanatumia bei za eneo lao",
      "Thamani za viungo zinatofautiana: wanafunzi wanazikagua na wasambazaji, maabara au afisa ugani",
      "Kanuni za afya ya wanyama: hakuna vipimo vya dawa, viongezeo au chakula chenye dawa; fuata daktari wa mifugo na lebo"
    ],
    prerequisites: "Utunzaji wa msingi wa wanyama na hesabu rahisi. Inapendekezwa kuanza na kozi \"Afya na Utunzaji wa Mifugo\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kundi la wanyama na hatua yake ya ukuaji", action: "kuorodhesha virutubisho anavyohitaji (nishati, protini, madini na maji) na chakula cha eneo lako kinachotoa kila kimoja", standard: "ukitaja chakula kimoja sahihi kwa kila kirutubisho" },
    { id: "O2", condition: "Ukipewa vyakula vinavyopatikana karibu nawe", action: "kupanga viungo na malisho ya eneo lako katika makundi ya vyakula vya nishati, vyakula vya protini, makapi na virutubisho vya ziada", standard: "ukipanga angalau 8 kati ya 10 sahihi" },
    { id: "O3", condition: "Ukipewa viungo viwili na kiwango cha protini kinacholengwa", action: "kusawazisha mgao kwa mraba wa Pearson na kuandika kilo za kila kiungo kwa kila kilo 100 za mchanganyiko", standard: "mchanganyiko ukiwa ndani ya pointi 0.5 za asilimia kutoka kwenye lengo" },
    { id: "O4", condition: "Ukitumia malisho na chakula cha shamba lako", action: "kutengeneza sileji au hei na kuhifadhi chakula ili kibaki kikavu na bila ukungu", standard: "ukifuata kila hatua ya orodha ya kukagua" },
    { id: "O5", condition: "Kwa kundi moja la wanyama", action: "kuandika mpango wa kulisha kwa hatua wenye chakula cha msingi au malisho, chakula cha nguvu na virutubisho vya ziada kwa kila hatua", standard: "ukishughulikia kila hatua kuanzia mdogo hadi kuuzwa, kutaga au kukamuliwa" },
    { id: "O6", condition: "Ukitumia bei za eneo lako na kumbukumbu zako", action: "kukokotoa gharama ya chakula kwa kila kilo ya mchanganyiko na kwa kila kilo ya uzito, trei ya mayai au lita ya maziwa", standard: "kwa hesabu sahihi na kila kiungo kikiwa kimejumuishwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kile wanyama wanachohitaji na kile ulicho nacho",
      lessons: [
        {
          title: "Virutubisho: nishati, protini, madini na maji",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha kile mnyama anachohitaji kula na kunywa, na chakula cha eneo lako kwa kila hitaji.",
          text: [
            "Kila mnyama anahitaji vitu vinne kutoka kwenye chakula na maji yake. Nishati inamweka hai, mwenye joto na anayetembea, na inaleta ukuaji, maziwa na mayai; inatoka hasa kwenye nafaka (mahindi, mtama, muhogo), pumba na nyasi mbichi au zilizohifadhiwa. Protini inajenga misuli, maziwa, mayai na watoto; inatoka kwenye mashudu ya mbegu za mafuta (soya, pamba, karanga, alizeti), unga wa samaki na mikunde kama desmodium na lablab. Madini na vitamini yanajenga mifupa na maganda ya mayai na yanaufanya mwili ufanye kazi: chumvi, kalsiamu kutoka chokaa au makombe, fosforasi na mchanganyiko wa madini na vitamini (premix).",
            "Maji ndiyo kirutubisho muhimu zaidi na cha bei nafuu zaidi. Mnyama anaacha kula haraka bila maji, na ng'ombe wanaokamuliwa na kuku wanaotaga wanakunywa maji mengi. Toa maji safi wakati wote, zaidi wakati wa joto, katika vinywesheo safi vilivyo kivulini.",
            "Mahitaji yanabadilika kulingana na mnyama na hatua yake. Mnyama mdogo anayekua haraka, kuku anayetaga na ng'ombe anayekamuliwa wanahitaji protini zaidi kuliko mnyama mzima anayepumzika. Ng'ombe, mbuzi na kondoo ni wacheuaji: tumbo lao linaweza kumeng'enya nyasi na mabaki ya mazao, kwa hiyo makapi ndiyo msingi wa chakula chao. Nguruwe na kuku hawawezi kumeng'enya makapi mengi, kwa hiyo wanahitaji chakula cha unga (mash) cha nafaka kilichochanganywa na protini, madini na vitamini."
          ],
          words: [["Kirutubisho", "sehemu ya chakula ambayo mwili unahitaji: nishati, protini, madini, vitamini na maji."], ["Mcheuaji", "mnyama mwenye tumbo la sehemu nne anayeweza kumeng'enya nyasi: ng'ombe, mbuzi na kondoo."], ["Premix", "mchanganyiko wa kununua wa madini na vitamini unaoongezwa kwa kiasi kidogo kwenye chakula, kama lebo inavyosema."], ["Makapi", "chakula kingi chenye nyuzi nyingi kama nyasi, hei, sileji na mabaki ya mazao."]],
          slides: [
            { title: "Mahitaji manne", bullets: ["Nishati: nafaka, pumba, muhogo, nyasi", "Protini: mashudu ya mbegu za mafuta, unga wa samaki, mikunde", "Madini na vitamini: chumvi, chokaa, premix", "Maji: safi, wakati wote"] },
            { title: "Maji kwanza", bullets: ["Kirutubisho cha bei nafuu na muhimu zaidi", "Zaidi wakati wa joto; wanaokamuliwa na wanaotaga hunywa sana", "Vinywesheo safi kivulini"] },
            { title: "Mahitaji yanabadilika kwa hatua", bullets: ["Wadogo, wanaotaga na wanaokamuliwa wanahitaji protini zaidi", "Wazima wanaopumzika wanahitaji kidogo"] },
            { title: "Wacheuaji dhidi ya nguruwe na kuku", bullets: ["Ng'ombe, mbuzi, kondoo: makapi ndiyo msingi", "Nguruwe na kuku: chakula cha unga cha nafaka chenye protini na premix"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Chagua kundi moja la wanyama shambani kwako (kwa mfano nguruwe wanaokua, kuku wa mayai au ng'ombe anayekamuliwa). Andika mahitaji yake manne na, kando ya kila moja, chakula kimoja unachoweza kupata karibu kinachotoa hitaji hilo.",
          youCanNow: "kuorodhesha mahitaji ya nishati, protini, madini na maji ya mnyama na kutaja chakula cha eneo lako kwa kila moja.",
          quickCheck: [
            { objective: "O1", q: "Kirutubisho kipi ni cha bei nafuu zaidi na muhimu zaidi?", options: ["Protini", "Nishati", "Maji", "Vitamini"], answer: 2, why: "Wanyama wanaacha kula na kuzalisha haraka bila maji safi." },
            { objective: "O1", q: "Chakula kipi kinatoa hasa protini?", options: ["Mashudu ya soya", "Nafaka ya mahindi", "Chumvi", "Vipande vya muhogo"], answer: 0, why: "Mashudu ya mbegu za mafuta kama mashudu ya soya yana protini nyingi; mahindi na muhogo hutoa hasa nishati." }
          ]
        },
        {
          title: "Viungo na malisho ya eneo lako",
          objectives: ["O2"],
          minutes: 6,
          goal: "Panga vyakula unavyoweza kupata katika vyakula vya nishati, vyakula vya protini, makapi na virutubisho vya ziada.",
          text: [
            "Vyakula vya nishati: nafaka ya mahindi, mtama na uwele, muhogo (uliomenywa, kukaushwa au kusindikwa ili uwe salama), pumba za mahindi na pumba za ngano. Pumba ni nafuu kuliko nafaka na zinatoa protini kidogo na nyuzi, lakini pumba nyingi mno katika chakula cha kuku zinapunguza nishati. Nafaka ya mahindi ina protini kama asilimia 8 hadi 10 tu, kwa hiyo peke yake haiwezi kulisha mnyama anayekua.",
            "Vyakula vya protini: mashudu ya soya (mara nyingi kama asilimia 44 hadi 48 ya protini, kulingana na jinsi yalivyotengenezwa), mashudu ya pamba, mashudu ya karanga, mashudu ya alizeti na unga wa samaki (kama dagaa au omena nchini Kenya). Mashudu ya pamba yana gossypol, inayoweza kuwadhuru nguruwe, kuku na wanyama wadogo, kwa hiyo yatumie tu ndani ya mipaka iliyo katika mwongozo wa chakula au kutoka kwa mtaalamu wa lishe. Unga wa samaki una protini nyingi lakini ni ghali na ubora wake unatofautiana: nunua kutoka chanzo unachokiamini na uhakikishe haujachanganywa na mchanga au chumvi.",
            "Malisho na makapi kwa wacheuaji: majani ya Napier, nyasi ya Brachiaria, mabua ya mahindi, mikunde kama desmodium na lablab, na majani ya miti kama leucaena na calliandra. Mikunde ina protini nyingi na inaweza kuchukua nafasi ya sehemu ya chakula cha nguvu cha kununua. Mfumo wa push-pull wa icipe unapanda desmodium kati ya mistari ya mahindi na Napier au Brachiaria kuzunguka shamba: unalinda mahindi dhidi ya wadudu na unatoa malisho bora. Virutubisho vya ziada: chumvi, chokaa au makombe kwa kalsiamu, na premix ya madini na vitamini inayotumika kama lebo inavyosema."
          ],
          steps: ["Orodhesha kila chakula unachoweza kununua au kukuza karibu nawe.", "Weka alama kila kimoja: nishati, protini, makapi au kirutubisho cha ziada.", "Andika bei yake kwa kilo na wakati gani wa mwaka unaweza kukipata.", "Muulize msambazaji wako au afisa ugani thamani yake ya protini.", "Andika mipaka yoyote, kama mashudu ya pamba kwa nguruwe na kuku."],
          words: [["Chakula cha nguvu", "chakula chenye nishati au protini nyingi, kama nafaka, pumba, mashudu au chakula cha ng'ombe wa maziwa cha kununua (dairy meal)."], ["Mashudu", "kinachobaki baada ya kukamua mafuta kutoka mbegu kama soya au pamba; kina protini nyingi."], ["Mkunde", "mmea kama desmodium, lablab au maharagwe wenye protini nyingi unaoongeza naitrojeni kwenye udongo."], ["Gossypol", "kitu cha asili ndani ya mbegu za pamba kinachoweza kuwadhuru nguruwe, kuku na wanyama wadogo."]],
          slides: [
            { title: "Vyakula vya nishati", bullets: ["Mahindi, mtama, uwele, muhogo uliosindikwa kwa usalama", "Pumba za mahindi na za ngano: nafuu zaidi, nyuzi zaidi", "Mahindi peke yake: protini kama asilimia 8 hadi 10 tu"] },
            { title: "Vyakula vya protini", bullets: ["Mashudu ya soya, mara nyingi kama asilimia 44 hadi 48 ya protini", "Mashudu ya pamba, karanga na alizeti", "Unga wa samaki: una protini nyingi lakini kagua ubora"] },
            { title: "Malisho kwa wacheuaji", bullets: ["Napier, Brachiaria, mabua ya mahindi", "Mikunde: desmodium, lablab, leucaena, calliandra", "Push-pull inatoa malisho na kulinda mahindi"] },
            { title: "Virutubisho vya ziada na mipaka", bullets: ["Chumvi, chokaa au makombe, premix kama lebo inavyosema", "Mashudu ya pamba: mipaka kwa nguruwe, kuku, wanyama wadogo", "Kagua thamani na msambazaji au afisa ugani"] }
          ],
          sources: [FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY, ICIPE_PUSHPULL],
          tryIt: "Tengeneza jedwali la vyakula 8 hadi 10 unavyoweza kupata karibu nawe lenye safu nne: chakula, aina (nishati, protini, makapi au kirutubisho cha ziada), bei kwa kilo, na miezi kinapopatikana.",
          youCanNow: "kupanga vyakula vilivyo karibu nawe katika vyakula vya nishati, vyakula vya protini, makapi na virutubisho vya ziada, na kuandika bei zake na mipaka yake.",
          quickCheck: [
            { objective: "O2", q: "Kipi ni mkunde wa malisho wenye protini nyingi kwa ng'ombe na mbuzi?", options: ["Mabua ya mahindi", "Pumba za ngano", "Desmodium", "Maganda ya muhogo"], answer: 2, why: "Desmodium ni mkunde wenye protini nyingi; vingine vinatoa hasa nishati au nyuzi." },
            { objective: "O2", q: "Kwa nini uwe makini na mashudu ya pamba kwa nguruwe na kuku?", options: ["Hayana protini", "Yana gossypol, inayoweza kuwadhuru", "Ni nafuu mno", "Ni kwa ajili ya samaki tu"], answer: 1, why: "Gossypol katika mbegu za pamba inaweza kuwadhuru nguruwe, kuku na wanyama wadogo, kwa hiyo yatumie ndani ya mipaka ya mwongozo." }
          ]
        },
        {
          title: "Kusawazisha mgao kwa mraba wa Pearson",
          objectives: ["O3"],
          minutes: 6,
          goal: "Sawazisha viungo viwili hadi kiwango cha protini kinacholengwa kwa mraba wa Pearson.",
          text: [
            "Mraba wa Pearson ni mchoro rahisi unaokuambia uchanganye kiasi gani cha vyakula viwili ili kufikia lengo moja, mara nyingi protini. Unafanya kazi na kirutubisho kimoja na vyakula viwili kwa wakati mmoja, na lengo lazima liwe kati ya thamani za vyakula hivyo viwili. Tumia thamani za kipimo kimoja (zote kama zilivyo, as-fed, au zote za uzito mkavu).",
            "Mfano wenye thamani za kawaida (kagua zako): mahindi asilimia 9 ya protini, mashudu ya soya asilimia 44, na lengo la asilimia 18. Lengo lako linatoka kwenye mwongozo wa chakula, afisa ugani wako au mtaalamu wa lishe kwa mnyama huyo na hatua hiyo. Chora mraba. Andika 18 katikati, mahindi 9 juu kushoto na mashudu ya soya 44 chini kushoto. Toa kwa kufuata mistari ya mshazari na usijali alama za kutoa (minus): 44 kutoa 18 = sehemu 26 za mahindi (juu kulia); 18 kutoa 9 = sehemu 9 za mashudu ya soya (chini kulia). Jumla ya sehemu = 26 + 9 = 35.",
            "Badilisha sehemu kuwa kilo kwa kila kilo 100: mahindi = 26 / 35 x 100 = kilo 74.3; mashudu ya soya = 9 / 35 x 100 = kilo 25.7. Kagua: 74.3 x 9 % = kilo 6.7 za protini, pamoja na 25.7 x 44 % = kilo 11.3, jumla kilo 18.0 za protini katika kilo 100: asilimia 18. Katika chakula halisi cha unga, kwanza tenga nafasi ya vitu vya kudumu (premix, chumvi, chokaa kwa kuku wa mayai, kama lebo au mwongozo unavyosema), kisha tumia mraba kwa vilivyobaki. Mraba unasawazisha protini tu, kwa hiyo kagua nishati, nyuzi na madini na afisa ugani wako."
          ],
          steps: ["Andika protini inayolengwa katikati ya mraba.", "Andika chakula A (protini kidogo) juu kushoto na chakula B (protini nyingi) chini kushoto.", "Toa kwa kufuata kila mshazari; usijali alama za kutoa.", "Juu kulia = sehemu za chakula A; chini kulia = sehemu za chakula B.", "Gawanya kila moja kwa jumla ya sehemu na uzidishe kwa 100 kupata kilo kwa kila kilo 100.", "Kagua: kilo x asilimia ya protini kwa kila chakula zinajumlika kufikia lengo."],
          words: [["Mraba wa Pearson", "mchoro rahisi unaoonyesha uchanganye kiasi gani cha vyakula viwili ili kufikia lengo la kirutubisho kimoja."], ["Protini ghafi (crude protein)", "thamani ya protini iliyoandikwa kwenye lebo za chakula na ripoti za maabara, kwa asilimia."], ["Mgao", "chakula anachopata mnyama kwa siku, au mchanganyiko anaolishwa."], ["As-fed", "kipimo cha chakula kama kilivyo, pamoja na maji yake; thamani za uzito mkavu zinaondoa maji."]],
          slides: [
            { title: "Mraba wa Pearson", bullets: ["Kirutubisho kimoja, vyakula viwili", "Lengo lazima liwe kati ya thamani hizo mbili", "Kipimo kimoja: as-fed au uzito mkavu"] },
            { title: "Uandae", bullets: ["Katikati: lengo asilimia 18", "Juu kushoto: mahindi 9; chini kushoto: mashudu ya soya 44"] },
            { title: "Toa kwa kufuata mishazari", bullets: ["44 - 18 = sehemu 26 za mahindi", "18 - 9 = sehemu 9 za mashudu ya soya", "Jumla sehemu 35"] },
            { title: "Kwa kila kilo 100, kisha kagua", bullets: ["Mahindi 26 / 35 x 100 = kilo 74.3", "Mashudu ya soya 9 / 35 x 100 = kilo 25.7", "6.7 + 11.3 = kilo 18.0 za protini: lengo limefikiwa"] }
          ],
          sources: [TENNESSEE_PEARSON, FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY],
          tryIt: "Tumia mraba wa Pearson kuchanganya pumba za mahindi (tumia asilimia 10 ya protini kama thamani ya mazoezi) na mashudu ya soya (asilimia 44) kwa lengo la asilimia 16. Andika kilo kwa kila kilo 100 na ukague kama protini inajumlika. (Jibu: sehemu 28 za pumba na sehemu 6 za mashudu, yaani kilo 82.4 na kilo 17.6.)",
          youCanNow: "kusawazisha vyakula viwili hadi lengo la protini kwa mraba wa Pearson na kukagua matokeo.",
          quickCheck: [
            { objective: "O3", q: "Katika mraba wa Pearson, nini kinaandikwa katikati?", options: ["Bei ya chakula", "Uzito wa mnyama", "Idadi ya wanyama", "Kiwango cha protini kinacholengwa"], answer: 3, why: "Kiwango cha kirutubisho kinacholengwa kinaandikwa katikati; vyakula vinaandikwa upande wa kushoto." },
            { objective: "O3", q: "Unachanganya mahindi (asilimia 9) na mashudu ya soya (asilimia 44) kwa asilimia 18. Sehemu ngapi za mahindi?", options: ["Sehemu 26 (44 kutoa 18)", "Sehemu 9 (18 kutoa 9)", "Sehemu 35", "Sehemu 18"], answer: 0, why: "Toa kwa kufuata mshazari: 44 - 18 = sehemu 26 za mahindi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kile wanyama wanachohitaji na kile ulicho nacho",
        questions: [
          { objective: "O1", q: "Kwa nini ng'ombe na mbuzi wanaweza kuishi hasa kwa nyasi lakini nguruwe na kuku hawawezi?", options: ["Nguruwe na kuku hawahitaji nishati", "Nyasi ni sumu kwa nguruwe", "Ng'ombe na mbuzi ni wacheuaji na wanaweza kumeng'enya makapi", "Kuku hunywa maji tu"], answer: 2, why: "Matumbo ya wacheuaji yanameng'enya makapi; nguruwe na kuku wanahitaji chakula cha unga cha nafaka." },
          { objective: "O1", q: "Mnyama yupi anahitaji protini zaidi katika chakula chake?", options: ["Kuku wa nyama mdogo anayekua haraka", "Mbuzi mzima anayepumzika wakati wa kiangazi", "Ng'ombe mzima asiye na mimba wala hakamuliwi", "Fahali aliyekomaa anayepumzika"], answer: 0, why: "Wanyama wadogo wanaokua haraka, wanaotaga na wanaokamuliwa wanahitaji protini zaidi." },
          { objective: "O2", q: "Kipi kati ya hivi ni hasa chakula cha nishati?", options: ["Unga wa samaki", "Nafaka ya mahindi", "Mashudu ya soya", "Desmodium"], answer: 1, why: "Nafaka ya mahindi ni hasa nishati, ikiwa na protini kama asilimia 8 hadi 10 tu." },
          { objective: "O3", q: "Jozi ipi inaweza kusawazishwa kwa mraba wa Pearson kufikia lengo la asilimia 16 ya protini?", options: ["Mahindi (asilimia 9) na pumba za mahindi (asilimia 10)", "Unga wa samaki (asilimia 60) na mashudu ya soya (asilimia 44)", "Vyakula viwili vyote zaidi ya asilimia 30", "Mahindi (asilimia 9) na mashudu ya soya (asilimia 44)"], answer: 3, why: "Lengo lazima liwe kati ya thamani za vyakula hivyo viwili: 16 iko kati ya 9 na 44." },
          { objective: "O3", q: "Baada ya mraba, sehemu 26 za mahindi na sehemu 9 za mashudu ya soya. Kilo ngapi za mashudu ya soya katika kilo 100?", options: ["Kilo 9", "Kilo 35", "Kama kilo 25.7", "Kama kilo 74.3"], answer: 2, why: "9 / 35 x 100 = kilo 25.7 za mashudu ya soya katika kilo 100 za mchanganyiko." }
        ]
      }
    },
    {
      name: "Sura 2: Hifadhi, panga na kokotoa gharama ya chakula chako",
      lessons: [
        {
          title: "Sileji, hei na kuhifadhi chakula kwa usalama",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tengeneza sileji au hei na uhifadhi chakula ili kibaki kikavu na bila ukungu.",
          text: [
            "Wakati wa mvua kuna nyasi nyingi mno; wakati wa kiangazi kidogo mno, na maziwa na uzito vinashuka. Kuhifadhi malisho kunasawazisha hali hii. Sileji ni malisho mabichi (mahindi, mtama au Napier) yanayohifadhiwa bila hewa ili yachachuke na yabaki na unyevu na mazuri kuliwa kwa miezi. Hei ni nyasi au mikunde iliyokatwa na kukaushwa juani hadi kuwa mikavu ya kutosha kuhifadhiwa bila kuoza.",
            "Sileji kwa njia ya FAO: katakata vipande vidogo, jaza haraka, shindilia sana na funga bila hewa kuingia. Vuna mahindi au mtama wakati punje ni laini zenye maziwa hadi kuwa kama unga mzito. Katakata malisho vipande vifupi, jaza shimo, mrija wa plastiki, mfuko au pipa safi haraka, ondoa kila nafasi ya hewa kwa kukanyaga au kushindilia, kisha funga kwa plastiki na uweke uzito juu. Napier na nyasi nyingine zina sukari kidogo; mara nyingi wakulima wanaongeza molasi kuzisaidia kuchachuka (muulize afisa ugani wako kiasi gani). Iache imefungwa kwa wiki kadhaa, na ikishafunguliwa, toa unachohitaji kila siku na uifunge tena. Sileji nzuri inanukia tamu na chachu; tupa sehemu zenye ukungu au zilizooza.",
            "Ukungu kwenye chakula unaweza kutengeneza sumu kuvu (mycotoxins), kama aflatoxin. Ni sumu zisizoonekana zinazopunguza ukuaji, maziwa na uzazi, zinazougua wanyama, na zinazoweza kuingia kwenye maziwa, mayai na nyama. Tafiti za ILRI nchini Kenya zilipata aflatoxin katika vyakula vingi vya ng'ombe wa maziwa. Zuia: nunua chakula kutoka viwanda unavyoviamini, hakikisha ni kikavu, kinamwagika kwa urahisi na kinanukia vizuri, weka magunia juu ya chaga (pallets) mbali na sakafu na kuta, chini ya paa lisilovuja, tumia chakula cha zamani kwanza, na usilishe kamwe chakula chenye ukungu, hata kwa wanyama wengine."
          ],
          steps: ["Sileji: vuna kwa wakati sahihi na katakata vipande vidogo.", "Jaza shimo, mrija, mfuko au pipa haraka na ushindilie sana kutoa hewa.", "Funga bila hewa kuingia kwa plastiki na uweke uzito juu; iache imefungwa kwa wiki kadhaa.", "Hei: kata, kausha juani, geuza mara kwa mara, hifadhi ikiwa kavu chini ya paa.", "Stoo ya chakula: chaga juu ya sakafu, mbali na kuta, paa lisilovuja.", "Tumia chakula cha zamani kwanza; tupa chochote chenye ukungu, kilichoganda au kinachonuka vibaya."],
          words: [["Sileji", "malisho mabichi yanayohifadhiwa bila hewa ili yachachuke na yabaki mazuri kulisha kwa miezi."], ["Hei", "nyasi au mikunde iliyokatwa na kukaushwa juani kwa ajili ya kuhifadhi."], ["Sumu kuvu (mycotoxin)", "sumu inayotengenezwa na ukungu kwenye chakula, kama aflatoxin; haionekani kwa macho."], ["Chaga (pallet)", "jukwaa la mbao au plastiki lililoinuliwa linaloweka magunia juu ya sakafu."]],
          slides: [
            { title: "Kwa nini kuhifadhi malisho", bullets: ["Nyasi nyingi mno wakati wa mvua, kidogo mno wakati wa kiangazi", "Sileji na hei zinaweka maziwa na ukuaji sawa"] },
            { title: "Sileji kwa hatua nne (FAO)", bullets: ["Katakata vipande vidogo", "Jaza haraka", "Shindilia sana kutoa hewa", "Funga bila hewa na weka uzito juu"] },
            { title: "Hei", bullets: ["Kata nyasi au mikunde", "Kausha juani, ukigeuza mara kwa mara", "Hifadhi ikiwa kavu, chini ya paa, juu ya ardhi"] },
            { title: "Zuia ukungu na sumu kuvu", bullets: ["Nunua kutoka viwanda unavyoviamini; kagua ni kikavu na kinanukia vizuri", "Chaga, mbali na kuta, paa lisilovuja", "Cha zamani kwanza; usilishe kamwe chakula chenye ukungu"] }
          ],
          sources: [FAO_SILAGE, FAO_SILAGE_SMALL, ILRI_MYCO],
          tryIt: "Nenda mahali unapohifadhi chakula. Andika vitu vitatu vinavyoweza kuingiza unyevu au ukungu, na jinsi utakavyorekebisha kila kimoja. Kisha panga kundi moja la sileji au hei: malisho gani, wakati gani wa kuyakata, na utayahifadhi ndani ya nini.",
          youCanNow: "kutengeneza sileji au hei na kuhifadhi chakula kwa njia inayozuia unyevu, ukungu na sumu kuvu.",
          quickCheck: [
            { objective: "O4", q: "Kitu gani ni muhimu zaidi unapotengeneza sileji?", options: ["Kuiacha wazi ili ipumue", "Kutoa hewa na kuifunga bila hewa kuingia", "Kuongeza maji kila siku", "Kuihifadhi juani"], answer: 1, why: "Sileji inadumu tu hewa ikitolewa na kuzuiwa isiingie, ili ichachuke." },
            { objective: "O4", q: "Gunia la chakula cha ng'ombe wa maziwa lina mabonge ya kijivu yaliyoganda na linanuka uvundo. Unafanya nini?", options: ["Kuwalisha ng'ombe wasiokamuliwa", "Kukichanganya na chakula kipya", "Kuwalisha kuku badala yake", "Kutokilisha mnyama yeyote"], answer: 3, why: "Ukungu unaweza kubeba sumu kuvu zinazodhuru kila mnyama na zinazoweza kuingia kwenye maziwa na mayai." }
          ]
        },
        {
          title: "Kulisha kwa hatua: mpango wa chakula wa sehemu tatu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Andika mpango wa chakula kwa kila hatua ya kundi moja la wanyama.",
          text: [
            "Wanyama wanahitaji vyakula tofauti katika hatua tofauti. Kuku wa nyama: chakula cha kuanzia (starter), kisha cha kumalizia (finisher) (baadhi ya wakulima wanaongeza cha kukuzia, grower, katikati). Kuku wa mayai: chakula cha vifaranga (chick mash), kisha cha kukuzia (growers mash), kisha cha kutaga (layers mash) kuanzia wanapokaribia kutaga, chenye kalsiamu ya ziada kwa maganda ya mayai. Nguruwe: chakula cha watoto (creep au weaner), cha kukuzia, cha kumalizia, kisha vyakula maalum kwa nguruwe jike wenye mimba na wanaonyonyesha. Ng'ombe wa maziwa: ndama, mtamba, ng'ombe aliyekaushwa na anayekamuliwa, chakula cha nguvu kikilinganishwa na maziwa anayotoa kila ng'ombe. Badilisha kutoka chakula kimoja hadi kingine kwa siku kadhaa, si usiku mmoja.",
            "Tumia mpango rahisi wa sehemu tatu kwa kila hatua. Sehemu ya 1, chakula cha msingi: kile ambacho sehemu kubwa ya chakula imetengenezwa nacho. Kwa ng'ombe na mbuzi ni malisho (kuchunga, Napier, hei, sileji, mabua); kwa nguruwe na kuku ni nafaka za nishati na pumba zilizo katika chakula cha unga. Sehemu ya 2, chakula cha nguvu: sehemu yenye protini nyingi (mashudu, unga wa samaki, chakula cha ng'ombe wa maziwa cha kununua au chakula cha unga kilichosawazishwa) inayojaza kile ambacho chakula cha msingi kinakosa. Sehemu ya 3, virutubisho vya ziada: chumvi, madini, vitamini na kalsiamu, vinavyotumika kama lebo inavyosema. Pamoja na maji safi wakati wote.",
            "Kulisha kwa hatua kunaokoa pesa: hulipii chakula cha kuanzia chenye protini nyingi kwa mnyama asiyekihitaji tena. Pima au kadiria kila hatua inakula kiasi gani na uwaangalie wanyama: wakiwa wembamba, wakitaga kidogo au wakitoa maziwa kidogo, muombe afisa ugani wako akague mpango. Lebo ya gunia au mwongozo wa kiwanda cha vifaranga au wa aina ya mnyama unasema wakati wa kubadilisha chakula kwa aina za kibiashara."
          ],
          steps: ["Chagua kundi moja la wanyama.", "Orodhesha hatua zake kuanzia mdogo hadi kuuzwa, kutaga au kukamuliwa.", "Kwa kila hatua andika chakula cha msingi.", "Ongeza chakula cha nguvu kinachokijaza.", "Ongeza virutubisho vya ziada na maji.", "Andika wakati wa kubadilisha kwenda hatua inayofuata, na ubadilishe kwa siku kadhaa."],
          words: [["Chakula cha msingi", "sehemu kuu ya chakula: malisho kwa wacheuaji, nafaka za nishati kwa nguruwe na kuku."], ["Kukaribia kutaga (point of lay)", "umri ambapo kuku wachanga wanakaribia kuanza kutaga mayai."], ["Kipindi cha kukamuliwa (lactation)", "wakati ambapo mnyama jike anatoa maziwa."]],
          slides: [
            { title: "Chakula kinabadilika kwa hatua", bullets: ["Kuku wa nyama: starter, kisha finisher", "Kuku wa mayai: chick mash, growers mash, kisha layers mash", "Nguruwe: weaner, grower, finisher, jike; maziwa: kwa kiasi cha maziwa"] },
            { title: "Mpango wa sehemu tatu", bullets: ["1. Msingi: malisho, au nafaka na pumba", "2. Chakula cha nguvu: nyongeza ya protini", "3. Virutubisho vya ziada: chumvi, madini, vitamini, kalsiamu"] },
            { title: "Maji, na badilisha polepole", bullets: ["Maji safi wakati wote", "Badilisha chakula kwa siku kadhaa"] },
            { title: "Kwa nini kunaokoa pesa", bullets: ["Hakuna chakula ghali cha kuanzia kwa wanyama wasiokihitaji", "Angalia hali ya mwili, mayai na maziwa"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Chagua kundi moja la wanyama. Andika jedwali lenye mstari mmoja kwa kila hatua na safu nne: chakula cha msingi, chakula cha nguvu, virutubisho vya ziada, na wakati wa kubadilisha kwenda hatua inayofuata.",
          youCanNow: "kuandika mpango wa kulisha kwa hatua wenye chakula cha msingi, chakula cha nguvu na virutubisho vya ziada kwa kila hatua.",
          quickCheck: [
            { objective: "O5", q: "Katika mpango wa chakula wa sehemu tatu kwa ng'ombe wa maziwa, chakula cha msingi ni kipi?", options: ["Malisho kama majani ya Napier, hei au sileji", "Premix ya madini", "Chakula cha ng'ombe wa maziwa cha kununua", "Chumvi"], answer: 0, why: "Kwa wacheuaji, malisho ni sehemu kubwa ya chakula; chakula cha nguvu na virutubisho vya ziada vinaongeza." },
            { objective: "O5", q: "Kuku wako wachanga wanakaribia kutaga. Wanahamia chakula gani?", options: ["Starter ya kuku wa nyama", "Chick mash", "Layers mash, ikibadilishwa kwa siku kadhaa", "Nafaka ya mahindi tu"], answer: 2, why: "Layers mash inatoa kalsiamu ya ziada inayohitajika kwa maganda ya mayai; badilisha polepole kwa siku kadhaa." }
          ]
        },
        {
          title: "Kukokotoa gharama ya chakula kwa kilo ya uzito au lita ya maziwa",
          objectives: ["O6"],
          minutes: 6,
          goal: "Kokotoa gharama ya mgao wako kwa kilo, na gharama ya chakula kwa kila kilo ya uzito, trei ya mayai au lita ya maziwa.",
          text: [
            "Hatua ya 1, gharama kwa kilo ya mchanganyiko. Zidisha kilo za kila kiungo kwa bei yake, jumlisha, na ugawanye kwa jumla ya kilo. Mfano kwa bei za kubuni za shilingi za Kenya: kilo 74.3 za mahindi kwa KES 40 = 2,972; kilo 25.7 za mashudu ya soya kwa KES 90 = 2,313. Jumla KES 5,285 kwa kilo 100, kwa hiyo KES 52.85 kwa kilo. Ongeza gharama ya kusaga, usafiri na premix ukizilipia.",
            "Hatua ya 2, chakula kwa kila kipimo cha mazao. Kwa nyama, andika chakula kilicholiwa na uzito ulioongezeka: nguruwe 10 wakila kilo 900 za chakula cha kukuzia na kuongeza kilo 300, kila kilo ya uzito ilihitaji kilo 3 za chakula (uwiano wa ubadilishaji wa chakula, FCR). Gharama ya chakula kwa kila kilo ya uzito = 3 x KES 52.85 = KES 158.55. Kwa mayai: chakula kilicholiwa na kundi kwa wiki x bei kwa kilo, ugawanye kwa trei zilizokusanywa. Kwa maziwa: gharama ya chakula cha ng'ombe kwa siku (malisho pamoja na chakula cha ng'ombe wa maziwa) ugawanye kwa lita anazotoa siku hiyo.",
            "Tumia namba hizi kufanya maamuzi. Linganisha gharama ya chakula kwa kila kilo ya uzito au kwa kila lita na bei yako ya kuuza. Jaribu kiungo cha bei nafuu zaidi, kama mikunde zaidi ya malisho au pumba za eneo lako, lakini hakikisha bado kinafikia lengo na hakipunguzi ukuaji au maziwa. Fanya kazi kwa sarafu yako mwenyewe, iwe NGN, GHS au XOF: njia ni ile ile. Bei zinabadilika, kwa hiyo sasisha jedwali kila unaponunua."
          ],
          steps: ["Orodhesha kila kiungo, kilo zake kwa kila kilo 100 na bei yake kwa kilo.", "Zidisha kilo kwa bei kwa kila kiungo na ujumlishe.", "Ongeza gharama za kusaga, usafiri na premix; gawanya kwa jumla ya kilo.", "Andika chakula kilicholiwa na uzito ulioongezeka, mayai au maziwa yaliyozalishwa.", "Gharama ya chakula kwa kila kilo ya uzito = FCR x gharama kwa kilo ya chakula.", "Gharama ya chakula kwa lita au trei = gharama ya chakula ya siku au wiki / lita au trei."],
          words: [["Uwiano wa ubadilishaji wa chakula (FCR)", "kilo za chakula zinazohitajika kwa kilo 1 ya uzito ulioongezeka; ndogo ni bora zaidi."], ["Gharama kwa kilo ya uzito", "pesa za chakula zinazotumika kwa kila kilo anayoongeza mnyama."], ["Trei", "trei ya mayai 30, kipimo cha kawaida cha kuuza mayai."]],
          slides: [
            { title: "Hatua ya 1: gharama kwa kilo ya mchanganyiko", bullets: ["kilo x bei kwa kila kiungo, kisha jumlisha", "Mfano: KES 5,285 kwa kilo 100 = KES 52.85 kwa kilo", "Ongeza kusaga, usafiri na premix"] },
            { title: "Hatua ya 2: chakula kwa kila kilo ya uzito", bullets: ["Kilo 900 za chakula / kilo 300 za uzito = FCR ya 3", "3 x KES 52.85 = KES 158.55 kwa kila kilo ya uzito"] },
            { title: "Mayai na maziwa", bullets: ["Mayai: gharama ya chakula kwa wiki / trei zilizokusanywa", "Maziwa: gharama ya chakula kwa siku / lita za siku hiyo"] },
            { title: "Itumie kufanya maamuzi", bullets: ["Linganisha na bei yako ya kuuza", "Jaribu viungo vya eneo lako vya bei nafuu; kagua lengo", "Sasisha kila unaponunua; bei ni mifano"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mgao wenye gharama kwa kundi moja la wanyama. Andika mpango wa sehemu tatu, sawazisha chakula cha nguvu kwa mraba wa Pearson, orodhesha kilo kwa kila kilo 100, kokotoa gharama kwa kilo kwa bei za eneo lako, na kokotoa gharama ya chakula kwa kila kilo ya uzito, kwa kila trei ya mayai au kwa kila lita ya maziwa.",
          youCanNow: "kukokotoa gharama ya mgao kwa kilo na gharama ya chakula chako kwa kila kilo ya uzito, trei ya mayai au lita ya maziwa.",
          quickCheck: [
            { objective: "O6", q: "Kilo 100 za mchanganyiko zinagharimu jumla ya XOF 20,000. Gharama kwa kilo ni kiasi gani?", options: ["XOF 2,000", "XOF 20", "XOF 100", "XOF 200"], answer: 3, why: "20,000 / kilo 100 = XOF 200 kwa kilo." },
            { objective: "O6", q: "Kuku wa nyama walikula kilo 400 za chakula na kuongeza kilo 250. FCR ni ipi?", options: ["1.6", "0.6", "2.5", "4.0"], answer: 0, why: "FCR = chakula kilicholiwa / uzito ulioongezeka = 400 / 250 = 1.6." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Hifadhi, panga na kokotoa gharama ya chakula chako",
        questions: [
          { objective: "O4", q: "Kwa nini wakulima wanaongeza molasi wanapotengeneza sileji ya majani ya Napier?", options: ["Napier ina sukari kidogo, na molasi inaisaidia kuchachuka", "Kuifanya tamu zaidi kwa watoto", "Kuzuia mvua", "Kuchukua nafasi ya kifuniko cha plastiki"], answer: 0, why: "Nyasi zenye sukari kidogo zinachachuka vibaya; molasi inatoa sukari inayohitajika kwa uchachushaji." },
          { objective: "O4", q: "Stoo ipi inaweka chakula salama zaidi dhidi ya ukungu?", options: ["Magunia juu ya sakafu tupu yakiegemea ukuta", "Magunia nje chini ya mti", "Magunia juu ya chaga, mbali na kuta, chini ya paa lisilovuja", "Mirundo wazi ndani ya banda la wanyama"], answer: 2, why: "Kuweka magunia makavu na mbali na sakafu na kuta kunazuia unyevu, ukungu na sumu kuvu." },
          { objective: "O5", q: "Sehemu tatu za mpango wa chakula katika kozi hii ni zipi?", options: ["Chakula cha asubuhi, mchana na usiku", "Chakula cha msingi au malisho, chakula cha nguvu, na virutubisho vya ziada", "Nyasi, maji na chumvi tu", "Starter, grower na finisher tu"], answer: 1, why: "Mpango ni chakula cha msingi, chakula cha nguvu na virutubisho vya ziada, pamoja na maji, kwa kila hatua." },
          { objective: "O6", q: "Chakula kinagharimu KES 50 kwa kilo na FCR ni 3. Gharama ya chakula kwa kila kilo ya uzito ni kiasi gani?", options: ["KES 53", "KES 17", "KES 300", "KES 150"], answer: 3, why: "Gharama ya chakula kwa kila kilo ya uzito = FCR x bei kwa kilo = 3 x 50 = KES 150." },
          { objective: "O6", q: "Chakula cha ng'ombe kinagharimu NGN 3,000 kwa siku na anatoa lita 10. Gharama ya chakula kwa lita ni kiasi gani?", options: ["NGN 30", "NGN 300", "NGN 3,000", "NGN 30,000"], answer: 1, why: "3,000 / lita 10 = NGN 300 kwa lita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Lishe ya Mifugo na Kuchanganya Chakula kwa Viungo vya Nyumbani",
    questions: [
      { objective: "O1", q: "Mahitaji makuu manne ambayo mnyama anapata kutoka kwenye chakula na maji ni yapi?", options: ["Nishati, protini, madini na vitamini, na maji", "Nyasi, chumvi, sukari na mafuta", "Mahindi, maharagwe, mchele na maziwa", "Joto, mwanga, hewa na udongo"], answer: 0, why: "Nishati, protini, madini na vitamini, na maji ndiyo mahitaji manne." },
      { objective: "O1", q: "Chakula kipi kinatoa hasa kalsiamu kwa maganda ya mayai?", options: ["Pumba za mahindi", "Majani ya Napier", "Chokaa au makombe", "Molasi"], answer: 2, why: "Chokaa na makombe yaliyosagwa ni vyanzo vya kalsiamu kwa kuku wanaotaga." },
      { objective: "O1", q: "Wanyama gani wanahitaji makapi kama msingi wa chakula chao?", options: ["Kuku wa nyama", "Kuku wa mayai", "Nguruwe walioachishwa kunyonya", "Ng'ombe, mbuzi na kondoo"], answer: 3, why: "Wacheuaji wanameng'enya makapi; ndiyo msingi wa chakula chao." },
      { objective: "O2", q: "Nafaka ya mahindi ina protini kiasi gani takriban?", options: ["Kama asilimia 8 hadi 10", "Kama asilimia 44", "Kama asilimia 60", "Haina kabisa"], answer: 0, why: "Feedipedia inaonyesha mahindi yana protini kama asilimia 8 hadi 10.5, kwa hiyo ni hasa chakula cha nishati." },
      { objective: "O2", q: "Kipi kati ya hivi ni chakula cha protini?", options: ["Vipande vya muhogo", "Pumba za ngano", "Unga wa samaki", "Mabua ya mahindi"], answer: 2, why: "Unga wa samaki una protini nyingi; vingine ni hasa nishati au makapi." },
      { objective: "O2", q: "Faida gani ya mfumo wa push-pull wa icipe kwa mfugaji wa ng'ombe wa maziwa?", options: ["Unachukua nafasi ya maji", "Desmodium na Napier au Brachiaria zinatoa malisho bora", "Unaondoa haja ya madini", "Unawafanya ng'ombe kuwa wacheuaji"], answer: 1, why: "Push-pull inalinda mahindi na mimea inayopandwa pamoja nayo ni malisho bora." },
      { objective: "O2", q: "Unapaswa kukagua nini unaponunua unga wa samaki?", options: ["Kwamba unatoka chanzo unachokiamini na haujachanganywa na mchanga au chumvi", "Kwamba ndio wa bei nafuu zaidi", "Kwamba ni mbichi na wenye maji", "Kwamba unanuka ukungu"], answer: 0, why: "Ubora wa unga wa samaki unatofautiana na unaweza kuchakachuliwa, kwa hiyo nunua kutoka vyanzo unavyoviamini." },
      { objective: "O3", q: "Mraba wa Pearson unasawazisha virutubisho vingapi kwa wakati mmoja?", options: ["Vyote", "Vitatu", "Viwili", "Kimoja"], answer: 3, why: "Unasawazisha kirutubisho kimoja, mara nyingi protini, kati ya vyakula viwili." },
      { objective: "O3", q: "Mahindi (asilimia 9) na mashudu ya soya (asilimia 44), lengo 18. Sehemu ngapi za mashudu ya soya?", options: ["26", "9", "35", "44"], answer: 1, why: "18 - 9 = sehemu 9 za mashudu ya soya." },
      { objective: "O3", q: "Kwa nini huwezi kutumia mahindi (asilimia 9) na pumba (asilimia 10) kufikia asilimia 18 ya protini?", options: ["Lengo lazima liwe kati ya thamani za vyakula hivyo viwili", "Pumba ni nafuu mno", "Mraba unafanya kazi kwa ng'ombe tu", "Mahindi hayana protini"], answer: 0, why: "18 iko juu ya vyakula vyote viwili, kwa hiyo hakuna mchanganyiko wake unaoweza kuifikia." },
      { objective: "O3", q: "Baada ya mraba, unakaguaje mchanganyiko wako?", options: ["Kumuuliza jirani", "Kuunusa", "Kilo x asilimia ya protini kwa kila chakula zinapaswa kujumlika kufikia lengo", "Kupima wanyama siku hiyo hiyo"], answer: 2, why: "Kujumlisha protini kutoka kila kiungo kunathibitisha kwamba mchanganyiko unafikia lengo." },
      { objective: "O4", q: "Hatua nne za sileji zinazofundishwa na FAO ni zipi?", options: ["Kata, osha, kausha, choma", "Katakata, jaza haraka, shindilia, funga", "Panda, mwagilia, palilia, uza", "Loweka, chemsha, poza, weka kwenye mfuko"], answer: 1, why: "Kukatakata, kujaza haraka, kushindilia na kufunga kunatengeneza sileji nzuri." },
      { objective: "O4", q: "Sumu kuvu (mycotoxin) ni nini?", options: ["Vitamini katika chakula", "Aina ya nyasi", "Kirutubisho cha ziada cha protini", "Sumu isiyoonekana inayotengenezwa na ukungu kwenye chakula"], answer: 3, why: "Ukungu unaweza kutengeneza sumu kuvu kama aflatoxin, zinazodhuru wanyama na zinazoweza kuingia kwenye maziwa." },
      { objective: "O4", q: "Kanuni ipi inasaidia kuweka chakula kilichohifadhiwa salama?", options: ["Tumia chakula cha zamani kwanza", "Hifadhi magunia sakafuni karibu na ukuta", "Weka chakula ndani ya banda la wanyama", "Changanya chakula chenye ukungu na chakula kipya"], answer: 0, why: "Kinachoingia kwanza kinatoka kwanza: chakula hakikai hadi kiharibike." },
      { objective: "O5", q: "Kwa nini kulisha kwa hatua?", options: ["Kunawafanya wanyama wale zaidi", "Kila hatua ina mahitaji tofauti, kwa hiyo hulipii virutubisho wasivyohitaji", "Kampuni za chakula zinakitaka", "Kunaondoa haja ya maji"], answer: 1, why: "Kulinganisha chakula na hatua kunatimiza mahitaji na kuokoa pesa." },
      { objective: "O5", q: "Unapaswa kubadilisha kutoka chakula kimoja hadi kingine vipi?", options: ["Usiku mmoja", "Wanyama wakiwa wagonjwa tu", "Kwa siku kadhaa", "Usibadilishe chakula kamwe"], answer: 2, why: "Mabadiliko ya polepole yanazuia kuvuruga mmeng'enyo na ulaji wa mnyama." },
      { objective: "O5", q: "Kwa nguruwe na kuku, sehemu ya msingi ya chakula ni ipi?", options: ["Majani ya Napier", "Chumvi", "Unga wa samaki", "Nafaka za nishati na pumba katika chakula cha unga"], answer: 3, why: "Nguruwe na kuku hawawezi kumeng'enya makapi mengi, kwa hiyo nafaka na pumba ndizo msingi wao." },
      { objective: "O6", q: "FCR ya 2 inamaanisha nini?", options: ["Kilo 2 za chakula kwa kila kilo 1 ya uzito ulioongezeka", "Milo 2 kwa siku", "Wanyama 2 kwa kila kilishio", "Asilimia 2 ya protini"], answer: 0, why: "FCR ni kilo za chakula zinazohitajika kwa kilo 1 ya uzito ulioongezeka." },
      { objective: "O6", q: "Kilo 50 za mahindi kwa GHS 4 na kilo 50 za pumba kwa GHS 2. Gharama kwa kilo ya mchanganyiko?", options: ["GHS 6", "GHS 3", "GHS 300", "GHS 2"], answer: 1, why: "(50 x 4) + (50 x 2) = 300 kwa kilo 100, kwa hiyo GHS 3 kwa kilo." },
      { objective: "O6", q: "Kundi la kuku wa mayai linakula chakula cha KES 7,000 kwa wiki na unakusanya trei 70. Gharama ya chakula kwa trei ni kiasi gani?", options: ["KES 10", "KES 70", "KES 100", "KES 490"], answer: 2, why: "7,000 / trei 70 = KES 100 za chakula kwa trei." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 7, 8, 12, 14, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mgao na uikague tena.",
    criteria: [
      { name: "Kundi, hatua na mpango wa sehemu tatu", objective: "O5", notYet: "Hakuna kundi wala hatua iliyotajwa, au mojawapo ya chakula cha msingi, chakula cha nguvu na virutubisho vya ziada inakosekana.", meets: "Anataja kundi na hatua na anatoa chakula cha msingi, chakula cha nguvu, virutubisho vya ziada na maji.", exceeds: "Pia anaonyesha hatua inayofuata na wakati na jinsi ya kubadilisha chakula." },
      { name: "Viungo vimepangwa na vinafaa", objective: "O2", notYet: "Viungo vimepangwa vibaya au si salama (kwa mfano vina ukungu, au mashudu ya pamba bila mpaka kwa kuku).", meets: "Anatumia viungo vya eneo lake vilivyopangwa sahihi katika nishati, protini, makapi na virutubisho vya ziada.", exceeds: "Anatumia mkunde au pumba za eneo lake za bei nafuu zaidi na anaeleza jinsi lengo linavyofikiwa bado." },
      { name: "Mraba wa Pearson", objective: "O3", notYet: "Hakuna hesabu iliyoonyeshwa, au lengo haliko kati ya vyakula hivyo viwili.", meets: "Mraba umechorwa, sehemu na kilo kwa kila kilo 100 ni sahihi, na ukaguzi unajumlika kufikia lengo ndani ya pointi 0.5.", exceeds: "Anatenga kwanza vitu vya kudumu kama premix na anasawazisha vilivyobaki." },
      { name: "Kukokotoa gharama", objective: "O6", notYet: "Gharama kwa kilo inakosekana au hesabu si sahihi.", meets: "Gharama sahihi kwa kilo ya mchanganyiko na gharama ya chakula kwa kila kilo ya uzito, trei ya mayai au lita ya maziwa, kwa sarafu ya eneo lake.", exceeds: "Anailinganisha na bei ya kuuza na anaonyesha njia moja ya kupunguza gharama." },
      { name: "Ubora wa chakula na uhifadhi", objective: "O4", notYet: "Hasemi chochote kuhusu mahali chakula kinapowekwa au jinsi ukungu unavyozuiwa.", meets: "Anasema chakula kinahifadhiwa wapi na jinsi kinavyowekwa kikavu na bila ukungu, cha zamani kwanza.", exceeds: "Anajumuisha mpango wa sileji au hei kwa kiangazi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaochanganya au kurekebisha angalau mgao mmoja kwa mraba wa Pearson ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaotengeneza sileji au hei kabla ya kiangazi kijacho",
      "Mabadiliko ya gharama ya chakula kwa kila kilo ya uzito, kwa kila trei ya mayai au kwa kila lita ya maziwa yanayoripotiwa na wanafunzi baada ya miezi mitatu",
      "Ripoti chache zaidi za chakula chenye ukungu na magonjwa yanayotokana na chakula katika makundi ya mifugo na kuku ya wanafunzi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, kalamu na kikokotoo cha simu; jedwali (spreadsheet) la simu si lazima",
      "Bei za eneo lako za vyakula 8 hadi 10, na lebo au thamani za msambazaji za protini yake",
      "Kwa onyesho la kikundi: malisho yaliyokatwakatwa, mfuko au mrija imara wa plastiki, na mizani",
      "Kama dakika 70 hadi 80 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kabla ya kipindi, kusanya bei za vyakula za eneo lako na thamani za protini (lebo za wasambazaji, maabara ya chakula au ofisi ya ugani) ili wanafunzi wafanye mazoezi kwa namba halisi.",
      "Fanyeni mraba wa Pearson pamoja ubaoni au kwenye chati kwa mfano mmoja wa eneo lenu, kisha waache wanafunzi wawili wawili wafanye mfano wa pili.",
      "Fanya onyesho la sileji ya mfuko msimu ukiruhusu, na mlifungue pamoja na kikundi baada ya wiki chache.",
      "Usitoe vipimo vya chakula chenye dawa, viongezeo au dawa; peleka maswali hayo kwa daktari wa mifugo na kwenye lebo.",
      "Pima mgao wenye gharama kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
