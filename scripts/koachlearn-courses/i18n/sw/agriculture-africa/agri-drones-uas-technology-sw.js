"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-uas-technology.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Mamlaka ya Usafiri wa Anga ya Kenya (KCAA): Mifumo ya Ndege Zisizo na Rubani (Unmanned Aircraft Systems)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Mamlaka ya Usafiri wa Anga ya Nigeria (NCAA): Nig.CARs 2023 Sehemu ya 21, Mifumo ya Ndege Zinazoendeshwa kwa Mbali (RPAS)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO na ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-uas-technology-sw",
  lang: "sw",
  translationOf: "agri-drones-uas-technology",
  category: "Agriculture (Africa)",
  name: "Droni za Kilimo: Teknolojia ya UAS na Matengenezo",
  skills: "Kutaja sehemu za mfumo wa droni na kazi ya kila moja, Kutunza betri za lithium-polymer kwa usalama, Kuchagua na kushughulikia mizigo (payload), Kufanya ukaguzi kabla na baada ya kuruka, Kufuata ratiba ya matengenezo na kuweka kumbukumbu, Kutafuta chanzo cha hitilafu za kawaida",
  outcome: "kueleza jinsi kila sehemu ya mfumo wa droni ya kilimo inavyofanya kazi, kutunza betri na mizigo yake kwa usalama, na kuendesha mpango wa matengenezo wenye ukaguzi, ratiba, hatua za kutafuta hitilafu na kumbukumbu kamili kwa droni moja.",
  about: [
    "Kozi hii ni kwa marubani wa droni, mafundi, biashara za huduma za droni, wafanyakazi wa biashara za kilimo na mashamba makubwa, na vijana wanaotaka droni za kilimo ziendelee kuruka kwa usalama nchini Kenya, Nigeria na kote Afrika.",
    "Sura ya 1 inafungua mfumo wa droni: kiunzi, mota na panga (propellers), kidhibiti cha kuruka na vihisi, kiungo cha redio na kituo cha ardhini, betri na mizigo kama kamera na mifumo ya kunyunyizia. Sura ya 2 ni matengenezo: ukaguzi wa kila siku, matengenezo ya ratiba, kurekebisha hitilafu za kawaida, masasisho ya firmware, kumbukumbu, na kuzifanya droni zifanye kazi kwenye vumbi, joto, mvua na sehemu zenye umeme usioaminika.",
    "Daima fuata kwanza mwongozo wa mtengenezaji na mwongozo wako wa uendeshaji; kozi hii inafundisha ujuzi wa jumla ulio nyuma yake. Mamlaka za usafiri wa anga zinatarajia waendeshaji watunze ndege zao na waweke kumbukumbu, kwa hiyo matengenezo mazuri ni usalama na pia ni kufuata sheria. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa matengenezo kwa droni moja ya kilimo (halisi au ya mfano, kama droni ya mapanga mengi ya kupiga ramani inayotumiwa na chama cha ushirika): orodha ya sehemu pamoja na kazi ya kila sehemu, utaratibu wa kutunza na kuchaji betri, orodha ya ukaguzi kabla na baada ya kuruka, ratiba ya matengenezo kwa saa za kuruka na kwa kalenda, jedwali la kutafuta chanzo cha angalau hitilafu tano za kawaida, na kiolezo cha daftari la matengenezo chenye maingizo mawili ya mfano.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Marubani wa droni, mafundi, biashara za huduma za droni, wafanyakazi wa biashara za kilimo na mashamba makubwa, na vijana nchini Kenya, Nigeria na kote Afrika wanaotaka droni za kilimo ziendelee kuruka kwa usalama.",
    startingPoint: "Wengi wameona au wamerusha droni ya kilimo na wanaweza kuchaji betri na kuipaisha kwa app. Wachache wanaweza kutaja kila sehemu ya mfumo na kazi yake, kufuata orodha ya ukaguzi iliyoandikwa, kupanga matengenezo kwa saa za kuruka, au kuweka daftari la matengenezo.",
    gap: "Droni ni ghali na zinaharibika kwa urahisi kwenye vumbi, joto na mvua, na betri za lithium zisizotunzwa vizuri zinaweza kuwaka moto. Droni inayoanguka au kuzuiwa kuruka inapoteza wateja na pesa, na mamlaka, wateja na kampuni za bima zinatarajia kumbukumbu za matengenezo. Kujua mfumo na kuendesha mpango wa matengenezo kunaweka droni salama, zikifanya kazi na zikifuata sheria.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; kila neno la kitaalamu linaelezwa",
      "Vifaa: simu au kompyuta kwa ajili ya kozi; droni halisi inasaidia lakini si lazima",
      "Usalama: betri za lithium zinaweza kuwaka moto; hakuna kutengeneza ndani ya betri au vifaa vya kielektroniki",
      "Mwongozo wa mtengenezaji na mwongozo wa uendeshaji vinatangulia; kozi inafundisha ujuzi wa jumla ulio nyuma yake",
      "Hali za shambani: vumbi, joto, mvua na umeme usioaminika katika maeneo mengi"
    ],
    prerequisites: "Inapendekezwa kuanza na kozi \"Droni kwa Ufuatiliaji wa Kilimo 1: Utangulizi, Sheria na Usalama\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mfumo wa droni ya kilimo", action: "kutaja kila sehemu kuu ya ndege na ya mfumo wa ardhini na kueleza kazi yake", standard: "pamoja na kidhibiti cha kuruka, vihisi, kiungo cha C2 na mzigo" },
    { id: "O2", condition: "Ukiwa na seti ya betri za droni", action: "kueleza jinsi ya kuzichaji, kuzihifadhi, kuzisafirisha na kuziondoa kazini kwa usalama", standard: "ukifuata kila hatua ya usalama, bila kutumia betri iliyovimba au kuharibika" },
    { id: "O3", condition: "Ukipewa kamera, kihisi au mzigo wa kunyunyizia", action: "kueleza jinsi ya kuufunga, kuusafisha na kuukagua", standard: "mzigo ukiwa umefungwa imara, lenzi safi na sehemu za kunyunyizia zimekaguliwa kama zimechakaa" },
    { id: "O4", condition: "Kabla na baada ya kila safari ya kuruka", action: "kufanya ukaguzi kabla na baada ya kuruka na kuandika unachokiona", standard: "ukikagua kila kitu kwenye orodha" },
    { id: "O5", condition: "Kwa droni moja", action: "kuandika ratiba ya matengenezo kwa saa za kuruka na kalenda, utaratibu wa kusasisha firmware na daftari la matengenezo", standard: "kwa vipindi vya \"kipi kinatangulia\" na kila sehemu ya daftari ikijazwa" },
    { id: "O6", condition: "Ukipewa hitilafu au hali ngumu za shambani", action: "kutafuta chanzo cha hitilafu hatua kwa hatua na kulinda droni dhidi ya vumbi, joto, mvua na kukatika kwa umeme", standard: "ukisimamisha droni isiruke hitilafu ya usalama inapojirudia" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi mfumo wa droni ya shamba unavyofanya kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sehemu za mfumo wa droni",
          minutes: 6,
          goal: "Taja sehemu kuu za mfumo wa droni na ueleze kazi ya kila moja.",
          text: [
            "Mamlaka zinaita droni mfumo (UAS au RPAS) kwa sababu ndege ni sehemu moja tu. Mfumo una ndege, kituo cha ardhini (kidhibiti, simu au tableti, programu), kiungo cha redio kati yao (mara nyingi huitwa kiungo cha amri na udhibiti, au C2), betri na chaja, na mzigo (kamera, kihisi au mfumo wa kunyunyizia).",
            "Kwenye ndege: kiunzi (mwili na mikono, au mabawa); mota na panga zinazoinua droni; vidhibiti vya kasi vya kielektroniki (ESC) vinavyoiambia kila mota izunguke kwa kasi gani; kidhibiti cha kuruka, ambacho ni ubongo wa droni; na vihisi: GNSS (kutambua mahali kwa satelaiti kama GPS), dira, kipimo cha mwendo (IMU) kinachohisi kuinama na kusogea, baromita ya kupima kimo, na mara nyingi vihisi vya vizuizi.",
            "Kidhibiti cha kuruka kinasoma vihisi mamia ya mara kwa sekunde na kurekebisha kila mota ili droni ibaki imara na kwenye njia yake. Kihisi kimoja kikitoa taarifa mbaya, kama dira iliyo karibu na chuma, droni nzima inaweza kwenda kwa namna ya ajabu. Ndiyo maana kurekebisha vihisi (calibration) na kuchagua kwa makini mahali pa kupaa ni muhimu."
          ],
          words: [["Kiunzi (airframe)", "mwili, mikono au mabawa ya droni."], ["ESC", "kidhibiti cha kasi cha kielektroniki: kinadhibiti kasi ya kuzunguka kwa kila mota."], ["Kidhibiti cha kuruka (flight controller)", "kompyuta iliyo ndani ya droni inayoiweka imara na kwenye njia yake."], ["GNSS", "mifumo ya satelaiti ya kutambua mahali duniani, kama GPS."], ["IMU", "kipimo cha mwendo: kinahisi kuinama, kugeuka na kusogea."], ["Kiungo cha C2", "kiungo cha amri na udhibiti: muunganiko wa redio kati ya kidhibiti na droni."]],
          slides: [
            { title: "Ni mfumo, si ndege tu", bullets: ["Ndege", "Kituo cha ardhini: kidhibiti, simu, programu", "Kiungo cha redio cha C2", "Betri na mzigo"] },
            { title: "Kwenye ndege", bullets: ["Kiunzi, mota, panga", "ESC zinadhibiti kila mota", "Kidhibiti cha kuruka: ubongo"] },
            { title: "Vihisi", bullets: ["GNSS kwa mahali, dira kwa uelekeo", "IMU kwa kuinama na kusogea", "Baromita kwa kimo, vihisi vya vizuizi"] },
            { title: "Kwa nini ni muhimu", bullets: ["Taarifa mbaya ya kihisi = mwenendo wa ajabu", "Rekebisha vihisi na chagua mahali pa kupaa kwa makini"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Chukua droni (au picha wazi au mchoro wake) na uweke majina kwenye angalau sehemu nane: kiunzi, mota, panga, mahali kilipo kidhibiti cha kuruka, kifaa cha GNSS, kamera au mzigo, betri, kidhibiti. Karibu na kila moja, andika kazi yake kwa mstari mmoja.",
          youCanNow: "kutaja sehemu za mfumo wa droni na kusema kazi ya kila moja.",
          quickCheck: [
            { objective: "O1", q: "Kidhibiti cha kuruka ni nini?", options: ["Kidhibiti cha mkononi cha rubani", "Ubongo wa droni unaosoma vihisi na kurekebisha mota", "Chaja ya betri", "Kishikio cha kamera"], answer: 1, why: "Kidhibiti cha kuruka kinasoma vihisi mara nyingi kwa sekunde na kurekebisha kila mota ili droni ibaki imara." },
            { objective: "O1", q: "Unakaribia kupaa karibu na tanki la maji la chuma, na droni inaelea kwa namna ya ajabu. Chanzo kinachowezekana ni nini?", options: ["Panga ni mpya sana", "Mzigo ni safi sana", "Betri imejaa sana", "Taarifa mbaya ya dira kwa sababu ya chuma kilicho karibu"], answer: 3, why: "Dira iliyo karibu na chuma inatoa taarifa mbaya, na droni nzima inaweza kwenda kwa namna ya ajabu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Betri: sehemu inayohitaji utunzaji zaidi",
          minutes: 6,
          goal: "Chaji, hifadhi, safirisha na ondoa kazini betri za droni kwa usalama.",
          text: [
            "Droni nyingi zinatumia betri za lithium-polymer (LiPo) au betri nyingine za lithium. Zinabeba nishati nyingi kwa uzito wake, na ndiyo sababu zinaweza pia kuwaka moto zikiharibika, zikichajiwa kupita kiasi, zikitumika hadi kuisha kabisa au zikipata joto kupita kiasi. Kutunza betri ni kazi muhimu zaidi ya matengenezo.",
            "Chaji kwa chaja sahihi tu, juu ya sehemu isiyoshika moto, usiiache bila mtu, na kamwe usichaji betri iliyovimba, iliyotobolewa au yenye joto. Acha betri ipoe baada ya kuruka kabla ya kuichaji, na iache ipoe au ipate joto hadi kiwango cha kawaida kabla ya kuruka. Usiache betri ndani ya gari lenye joto au kwenye jua kali shambani.",
            "Kwa kuhifadhi zaidi ya siku chache, weka betri kwenye chaji ya kuhifadhi (zimechajiwa kiasi, si zimejaa wala tupu; betri nyingi janja zinafanya hivi zenyewe), mahali penye ubaridi na pakavu, ikiwezekana ndani ya mfuko au sanduku linalozuia moto. Fuatilia mizunguko ya chaji na hali ya kila betri. Ondoa kazini betri zilizovimba au kuharibika na uzipeleke mahali sahihi pa kukusanya taka za kielektroniki au betri, kamwe usizitupe motoni au kwenye taka za kawaida. Kubeba betri kwenye ndege za abiria kuna sheria zake za mashirika ya ndege."
          ],
          steps: ["Weka namba kwenye kila betri na uandike mizunguko yake.", "Chaji kwa chaja sahihi, juu ya sehemu isiyoshika moto, ukiwepo.", "Kamwe usichaji wala kurusha kwa betri iliyovimba, iliyotobolewa au yenye joto.", "Weka betri mbali na magari yenye joto na jua kali.", "Hifadhi kwenye chaji ya kuhifadhi, ndani ya chombo kikavu, chenye ubaridi na kinachozuia moto.", "Peleka betri zilizoharibika mahali sahihi pa kukusanya."],
          words: [["LiPo", "betri ya lithium-polymer: nyepesi na yenye nguvu, lakini inaweza kuwaka moto isipotunzwa."], ["Mzunguko wa chaji", "matumizi kamili ya uwezo wa betri mara moja, kutoka imejaa hadi imetumika na kurudi tena."], ["Chaji ya kuhifadhi", "kiwango cha chaji ya kiasi kinachoweka betri za lithium zikiwa na afya zisipotumika."], ["Taka za kielektroniki (e-waste)", "vifaa vya kielektroniki vilivyotupwa, vinavyohitaji kukusanywa na kurejelezwa kwa njia maalum."]],
          slides: [
            { title: "Nguvu yenye hatari", bullets: ["LiPo: nishati nyingi kwa uzito wake", "Inaweza kuwaka moto ikiharibika au isipotunzwa", "Kutunza betri ni kazi ya kwanza"] },
            { title: "Sheria za kuchaji", bullets: ["Chaja sahihi, sehemu isiyoshika moto", "Kamwe usiache bila mtu", "Kamwe betri iliyovimba, iliyotobolewa au yenye joto"] },
            { title: "Joto na kuhifadhi", bullets: ["Si ndani ya gari lenye joto wala jua kali", "Chaji ya kuhifadhi, mahali pa baridi na pakavu", "Mfuko au sanduku linalozuia moto"] },
            { title: "Fuatilia na ondoa kazini", bullets: ["Weka namba kwenye betri, andika mizunguko", "Ondoa zilizovimba au kuharibika", "Tupa mahali sahihi pa kukusanya"] }
          ],
          tryIt: "Andika utaratibu wa betri wa ukurasa mmoja kwa timu ya droni: kuweka namba, kuchaji, kushughulikia betri shambani wakati wa joto, kuhifadhi, daftari la mizunguko na kuondoa kazini. Ongeza jedwali la betri lenye safu za namba ya betri, tarehe, mizunguko, hali na maelezo.",
          youCanNow: "kuchaji, kuhifadhi, kusafirisha na kuondoa kazini betri za droni kwa usalama na kuweka daftari la betri.",
          quickCheck: [
            { objective: "O2", q: "Chaji ya kuhifadhi ni nini?", options: ["Imechajiwa kiasi, si imejaa wala tupu, kwa kuhifadhi zaidi ya siku chache", "Imechajiwa kikamilifu", "Tupu kabisa", "Imechajiwa ndani ya gari lenye joto"], answer: 0, why: "Betri zinazohifadhiwa zaidi ya siku chache zinawekwa zikiwa zimechajiwa kiasi, mahali penye ubaridi na pakavu." },
            { objective: "O2", q: "Umetua tu na unataka kuruka tena hivi karibuni. Betri ina joto. Unafanya nini?", options: ["Unaichaji mara moja juani", "Unaichaji ndani ya gari na kuondoka", "Unaiacha ipoe kabla ya kuichaji, na unaichaji ukiwepo juu ya sehemu isiyoshika moto", "Unaiweka kwenye friza"], answer: 2, why: "Kuchaji betri yenye joto au kuchaji bila mtu kunaongeza hatari ya moto." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mizigo: kamera, vihisi na mifumo ya kunyunyizia",
          minutes: 5,
          goal: "Shughulikia, funga na tunza mizigo mikuu ya droni za kilimo.",
          text: [
            "Mzigo (payload) ni kile droni inachobeba kufanya kazi. Droni za kupiga ramani zinabeba kamera ya RGB (picha za rangi za kawaida), mara nyingi juu ya gimbal inayoishikilia imara. Droni za afya ya mazao zinaweza kubeba kamera ya multispectral pamoja na kihisi cha mwanga wa jua na bamba la kurekebisha. Kamera za joto (thermal) zinapima joto. Droni za kunyunyizia zinabeba tanki, pampu, mipira na nozeli, na baadhi zinamwaga chembechembe au mbegu.",
            "Tunza lenzi: weka lenzi na kihisi cha mwanga wa jua safi kwa kitambaa laini cha lenzi, zilinde kwa vifuniko, na weka kamera mbali na vumbi na unyevu. Hakikisha gimbal inazunguka bila kukwama na mzigo umefungwa imara; mzigo uliolegea unavuruga uwiano wa droni na kidhibiti cha kuruka.",
            "Mifumo ya kunyunyizia inahitaji utunzaji zaidi: baada ya kila matumizi inaoshwa na kusafishwa kama mtengenezaji na lebo ya dawa ya kuua wadudu wanavyotaka, nozeli zinakaguliwa kama zimechakaa au zimeziba, na mfumo mzima unarekebishwa ili umwage kiasi sahihi. Kumbuka kwamba kunyunyizia kwa droni kunahitaji vibali vya usafiri wa anga na vya dawa za kuua wadudu; matengenezo hayachukui nafasi yake."
          ],
          words: [["Mzigo (payload)", "kifaa ambacho droni inabeba kufanya kazi, kama kamera au tanki la kunyunyizia."], ["Gimbal", "kishikio cha kamera chenye mota kinachoishikilia kamera imara."], ["Kihisi cha mwanga wa jua", "kihisi kidogo juu ya baadhi ya droni za multispectral kinachopima mwanga unaoingia ili kusahihisha vipimo."], ["Nozeli", "ncha inayogeuza kimiminika kuwa matone ya kunyunyizia."]],
          slides: [
            { title: "Mizigo ya kawaida", bullets: ["Kamera ya RGB juu ya gimbal", "Multispectral yenye kihisi cha mwanga wa jua", "Kamera ya joto", "Tanki, pampu, nozeli; vifaa vya kumwaga"] },
            { title: "Tunza lenzi", bullets: ["Safisha lenzi na vihisi kwa kitambaa laini", "Vifuniko juu, mbali na vumbi na unyevu", "Gimbal inazunguka vizuri, kishikio imara"] },
            { title: "Mifumo ya kunyunyizia", bullets: ["Osha na safisha kama mtengenezaji na lebo wanavyotaka", "Kagua nozeli kama zimechakaa au zimeziba", "Rekebisha kiwango; vibali bado vinahitajika"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Chagua mzigo mmoja (kamera ya RGB, kamera ya multispectral au mfumo wa kunyunyizia). Andika orodha ya utunzaji yenye angalau vitu sita vya kufanya kabla na baada ya kila matumizi.",
          youCanNow: "kufunga, kusafisha na kukagua mizigo mikuu ya droni za kilimo.",
          quickCheck: [
            { objective: "O3", q: "Mzigo kwenye droni ya kilimo ni nini?", options: ["Betri", "Kituo cha ardhini", "Kile droni inachobeba kufanya kazi, kama kamera au mfumo wa kunyunyizia", "Kiungo cha redio"], answer: 2, why: "Mzigo ni kamera, kihisi, mfumo wa kunyunyizia au wa kumwaga unaofanya kazi." },
            { objective: "O3", q: "Baada ya kazi ya kunyunyizia, unafanya nini na mfumo wa kunyunyizia?", options: ["Unauosha na kuusafisha kama mtengenezaji na lebo wanavyotaka, na unakagua nozeli", "Unaacha mchanganyiko uliobaki ndani ya tanki", "Unaosha droni nzima kwa mrusho mkali wa maji", "Unauhifadhi ukiwa umelowa juani"], answer: 0, why: "Mifumo ya kunyunyizia inaoshwa na kusafishwa baada ya kila matumizi, na nozeli zinakaguliwa kama zimechakaa au zimeziba." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi mfumo wa droni ya shamba unavyofanya kazi",
        questions: [
          { objective: "O1", q: "Kwa nini droni inaitwa mfumo (UAS au RPAS)?", options: ["Inasikika vizuri zaidi", "Ina ndege, kituo cha ardhini, kiungo cha redio, betri na mzigo", "Ina panga nyingi", "Imetengenezwa kiwandani"], answer: 1, why: "Sehemu zote kwa pamoja ndizo zinazofanya droni ifanye kazi." },
          { objective: "O1", q: "IMU inahisi nini?", options: ["Kuinama, kugeuka na kusogea", "Unyevu wa udongo", "Bei za mazao", "Rangi ya betri"], answer: 0, why: "IMU inahisi mwendo wa droni ili kidhibiti cha kuruka kiiweke imara." },
          { objective: "O2", q: "Betri imevimba kidogo baada ya kuruka. Unapaswa:", options: ["Kuichaji haraka", "Kuibonyeza iwe bapa", "Kurusha nayo mara moja zaidi", "Kuacha kuitumia na kuiondoa kazini kwa usalama"], answer: 3, why: "Kuvimba ni dalili ya uharibifu na hatari ya moto." },
          { objective: "O2", q: "Betri za droni zihifadhiwe wapi kwa mapumziko marefu?", options: ["Zikiwa zimejaa ndani ya gari lenye joto", "Zikiwa tupu kwenye jua kali", "Kwenye chaji ya kuhifadhi ndani ya chombo kikavu, chenye ubaridi na kinachozuia moto", "Ndani ya moto wa jikoni"], answer: 2, why: "Chaji ya kuhifadhi na mahali penye ubaridi vinaweka betri za lithium salama na zenye afya." },
          { objective: "O3", q: "Gimbal inafanya nini?", options: ["Inashikilia kamera imara", "Inachaji betri", "Inanyunyizia dawa ya kuua wadudu", "Inapima kimo"], answer: 0, why: "Gimbal inaituliza kamera ili picha ziwe wazi." }
        ]
      }
    },
    {
      name: "Sura 2: Matengenezo shambani na karakana",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ukaguzi kabla na baada ya kila safari ya kuruka",
          minutes: 5,
          goal: "Fanya ukaguzi kabla na baada ya kuruka na uandike unachokiona.",
          text: [
            "Ukaguzi unagundua matatizo madogo kabla hayajasababisha ajali. Ukaguzi kabla ya kuruka unahakikisha droni iko tayari kuruka sasa; ukaguzi baada ya kuruka unagundua uharibifu au uchakavu kutoka safari iliyomalizika na kuandaa siku inayofuata.",
            "Kabla ya kuruka: kiunzi na mikono havina nyufa, mikono imefungwa; panga ni safi, zimekazwa na hazina mipasuko wala vipande vilivyovunjika; mota zinazunguka bila kusaga; mzigo umefungwa imara na lenzi ni safi; betri imekaa vizuri na imefungwa; vihisi na madirisha ya kamera za kuona ni safi; kidhibiti na app viko tayari; hali ya firmware imekaguliwa kabla ya kuondoka kituoni.",
            "Baada ya kuruka: acha mota na betri zipoe; kagua joto la mota (mota yenye joto kuliko kawaida inaweza kuwa inaharibika); tafuta uharibifu mpya, vumbi au nyasi ndani ya mota na matundu ya hewa; safisha droni kwa brashi laini au kitambaa kikavu (hakuna mrusho wa maji kwenye vifaa vya kielektroniki); andika muda wa kuruka, matatizo na ujumbe wowote wa onyo kwenye daftari."
          ],
          steps: ["Kabla ya kuruka: kiunzi, mikono, panga, mota, mzigo, betri, vihisi, kidhibiti.", "Ruka tu kama kila kitu kimepita ukaguzi.", "Baada ya kuruka: acha ipoe, kagua joto la mota, tafuta uharibifu na uchafu.", "Safisha kwa brashi laini au kitambaa kikavu.", "Andika muda wa kuruka, matatizo na maonyo."],
          words: [["Ukaguzi", "kuangalia kwa makini kama kuna uharibifu, uchakavu au hitilafu."], ["Firmware", "programu iliyowekwa ndani ya droni, kidhibiti na betri."]],
          slides: [
            { title: "Ukaguzi wa aina mbili", bullets: ["Kabla ya kuruka: iko tayari kuruka sasa?", "Baada ya kuruka: kuna uharibifu au uchakavu wa leo?"] },
            { title: "Kabla ya kuruka", bullets: ["Kiunzi, mikono imefungwa, panga hazijaharibika", "Mota zinazunguka vizuri, mzigo imara", "Betri imefungwa, vihisi safi, app iko tayari"] },
            { title: "Baada ya kuruka", bullets: ["Acha ipoe; kagua joto la mota", "Uharibifu, vumbi, nyasi kwenye mota na matundu", "Safisha ikiwa kavu, andika muda, matatizo, maonyo"] }
          ],
          tryIt: "Andika orodha ya ukaguzi kabla ya kuruka na nyingine baada ya kuruka, kila moja ikiwa na angalau vitu vinane, kwa droni ya kupiga ramani. Kama una droni, zitumie mara moja na uandike matokeo.",
          youCanNow: "kukagua droni kabla na baada ya kila safari ya kuruka na kuandika unachokiona.",
          quickCheck: [
            { objective: "O4", q: "Ukaguzi kabla ya kuruka ni wa nini?", options: ["Kugundua uharibifu wa safari iliyopita tu", "Kuchaji betri", "Kusasisha firmware shambani", "Kuhakikisha droni iko tayari kuruka sasa"], answer: 3, why: "Ukaguzi kabla ya kuruka unahakikisha droni iko tayari kuruka kabla ya kupaa." },
            { objective: "O4", q: "Wakati wa ukaguzi kabla ya kuruka, mota inatoa sauti ya kusaga unapoizungusha. Unafanya nini?", options: ["Unaruka kwa uangalifu", "Huruki; unakagua mota kama ina mchanga, nyasi au uharibifu", "Unaweka mafuta kwenye panga", "Unaruka safari fupi zaidi"], answer: 1, why: "Mota zinapaswa kuzunguka vizuri; kusaga ni tatizo la kurekebisha kabla ya kuruka." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Matengenezo ya ratiba, firmware na kumbukumbu",
          minutes: 5,
          goal: "Weka ratiba ya matengenezo kwa saa za kuruka na kalenda, na uweke kumbukumbu za matengenezo.",
          text: [
            "Baadhi ya sehemu zinachakaa kwa kutumika. Panga, mota, bearing, gimbal, miguu ya kutua, na pampu na nozeli za kunyunyizia zinahitaji kubadilishwa kwa ratiba. Mwongozo wa mtengenezaji unatoa vipindi; mwongozo wako wa uendeshaji unaweka ratiba yako mwenyewe. Panga kwa saa za kuruka (kwa mfano kila saa 50) na kwa kalenda (kwa mfano kila miezi mitatu), kipi kinatangulia.",
            "Masasisho ya firmware yanarekebisha makosa na kuongeza vipengele vya usalama, lakini sasisho linaweza pia kubadilisha jinsi droni inavyofanya kazi. Soma maelezo ya toleo (release notes), sasisha kabla ya kuondoka kituoni (si shambani), sasisha droni, kidhibiti na betri pamoja, na jaribu kwa safari fupi kabla ya kazi halisi.",
            "Weka daftari la matengenezo kwa kila droni: tarehe, saa za kuruka, kilichokaguliwa, kilichobadilishwa au kilichorekebishwa, vipuri vilivyotumika, toleo la firmware, aliyefanya kazi, na matokeo. Mamlaka zinatarajia waendeshaji watunze ndege na waweke kumbukumbu; wateja na kampuni za bima wanaweza pia kuziomba."
          ],
          steps: ["Soma vipindi vya matengenezo vya mtengenezaji.", "Andika ratiba yako kwa saa za kuruka na kalenda.", "Panga masasisho ya firmware kituoni, baada ya kusoma maelezo ya toleo, na ufanye safari ya majaribio.", "Weka daftari la matengenezo kwa kila droni.", "Weka akiba ya panga na vipuri vya kawaida."],
          words: [["Matengenezo ya ratiba", "ukaguzi na ubadilishaji wa vipuri uliopangwa kwa vipindi maalum."], ["Daftari la matengenezo", "kumbukumbu ya matengenezo yote yaliyofanywa kwenye droni."], ["Maelezo ya toleo (release notes)", "maelezo ya mtengenezaji kuhusu kile ambacho sasisho la programu linabadilisha."]],
          slides: [
            { title: "Sehemu zinachakaa", bullets: ["Panga, mota, bearing, gimbal", "Miguu ya kutua, pampu, nozeli", "Badilisha kwa ratiba"] },
            { title: "Saa na kalenda", bullets: ["Kwa mfano kila saa 50 au miezi 3", "Kipi kinatangulia", "Fuata mwongozo wa mtengenezaji"] },
            { title: "Firmware kwa usalama", bullets: ["Soma maelezo ya toleo", "Sasisha kituoni, sehemu zote pamoja", "Safari ya majaribio kabla ya kazi halisi"] },
            { title: "Daftari la matengenezo", bullets: ["Tarehe, saa, kazi iliyofanywa, vipuri, firmware", "Aliyefanya na matokeo", "Kwa usalama, mamlaka, wateja, bima"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Tengeneza jedwali la ratiba ya matengenezo kwa droni moja lenye angalau vitu sita (panga, mota, gimbal, miguu ya kutua, betri, firmware), kila kimoja na kipindi kwa saa na kwa miezi, na anza daftari la matengenezo lenye ingizo moja la mfano.",
          youCanNow: "kupanga matengenezo ya ratiba na masasisho ya firmware na kuweka daftari sahihi la matengenezo.",
          quickCheck: [
            { objective: "O5", q: "\"Kipi kinatangulia\" kinamaanisha nini katika ratiba ya matengenezo?", options: ["Fanya kazi kila miezi mitatu tu", "Fanya kazi ukifika kikomo cha saa za kuruka au tarehe ya kalenda, chochote kinachofikiwa kwanza", "Ruka kazi kama droni inaruka vizuri", "Fanya kazi baada ya ajali tu"], answer: 1, why: "Kupanga kwa saa za kuruka na kalenda, kipi kinatangulia, kunazuia sehemu zisichakae kupita kiasi." },
            { objective: "O5", q: "Sasisho la firmware linatokea ukiwa kwenye shamba la mteja. Unafanya nini?", options: ["Unalisakinisha mara moja shambani", "Unasasisha droni tu na si kidhibiti", "Unazima masasisho yote milele", "Unasubiri, kisha unasasisha kituoni baada ya kusoma maelezo ya toleo na unajaribu kwa safari fupi"], answer: 3, why: "Masasisho yanaweza kubadilisha jinsi droni inavyofanya kazi, kwa hiyo yanafanywa kituoni, yote pamoja, na kujaribiwa kabla ya kazi halisi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutafuta hitilafu na hali za shambani Afrika",
          minutes: 6,
          goal: "Tafuta chanzo cha hitilafu za kawaida hatua kwa hatua na linda droni dhidi ya vumbi, joto, mvua na kukatika kwa umeme.",
          text: [
            "Tafuta hitilafu hatua moja kwa wakati: soma ujumbe wa onyo kwenye app, kagua sababu rahisi kwanza, badilisha kitu kimoja, kisha jaribu. Hitilafu za kawaida: hitilafu ya dira (ondoka mbali na chuma, magari na nyaya za umeme, kisha rekebisha dira ukiombwa); GNSS dhaifu (subiri satelaiti zaidi, ondoka mbali na miti mirefu); mtikisiko au kuyumba (kagua kama panga imeharibika au imelegea au mkono umepinda); hitilafu ya mota (kagua kama kuna nyasi, mchanga au mota imeharibika); muda mfupi wa kuruka (betri iliyozeeka, joto au mzigo mzito).",
            "Vumbi na mchanga vinaingia kwenye mota na gimbal: paa kutoka kwenye mkeka au turubai, safisha baada ya kuruka na hifadhi ndani ya sanduku lililofungwa. Joto linafupisha maisha ya betri na linaweza kupasha moto vifaa vya kielektroniki kupita kiasi: weka betri na kidhibiti kivulini, ruka saa zenye ubaridi zaidi, na ipe droni mapumziko kati ya safari. Mvua na unyevu vinaharibu vifaa vya kielektroniki isipokuwa droni imeundwa kuvihimili: usiruke kwenye mvua, kausha vifaa na uvihifadhi pamoja na pakiti za kunyonya unyevu.",
            "Mahali ambapo umeme hauaminiki, panga uchajiji: inverter ya gari au kifaa cha kuchaji kwa jua, betri za kutosha kwa siku nzima, na kuchaji usiku kucha kituoni. Jua wakati wa kusimama: hitilafu ikijirudia au ikiathiri usalama, simamisha droni isiruke na uipeleke kwenye kituo cha huduma cha mtengenezaji au kwa fundi mwenye sifa."
          ],
          steps: ["Soma ujumbe kamili wa onyo.", "Kagua sababu rahisi kwanza.", "Badilisha kitu kimoja kwa wakati, kisha jaribu.", "Tumia mkeka wa kutua; safisha droni na uiweke sandukuni baada ya kazi yenye vumbi.", "Weka betri kivulini; ruka saa zenye ubaridi; usiruke kwenye mvua isipokuwa imeundwa kwa hilo.", "Simamisha droni isiruke kama hitilafu ya usalama inajirudia."],
          words: [["Kutafuta hitilafu (troubleshooting)", "kutafuta chanzo cha hitilafu hatua kwa hatua."], ["Kurekebisha kihisi (calibration)", "utaratibu unaoweka upya kihisi, kama dira, ili kisome sawasawa."], ["Kusimamishwa kuruka (grounded)", "kutoruhusiwa kuruka hadi irekebishwe."]],
          slides: [
            { title: "Tafuta hitilafu hatua kwa hatua", bullets: ["Soma onyo", "Sababu rahisi kwanza", "Badilisha kitu kimoja, kisha jaribu"] },
            { title: "Hitilafu za kawaida", bullets: ["Hitilafu ya dira: mbali na chuma, rekebisha dira", "Kuyumba: panga au mikono", "Safari fupi: betri ya zamani, joto, mzigo mzito"] },
            { title: "Vumbi, joto na mvua", bullets: ["Mkeka wa kutua, safisha, sanduku lililofungwa", "Betri kivulini, ruka saa zenye ubaridi", "Hakuna mvua isipokuwa imeundwa kwa hilo; kausha na hifadhi vizuri"] },
            { title: "Umeme na mipaka", bullets: ["Kuchaji kwa gari au jua, betri za akiba", "Simamisha droni kama hitilafu ya usalama inajirudia"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wa matengenezo kwa droni moja: orodha ya sehemu na kazi zake, utaratibu wa betri, orodha za ukaguzi kabla na baada ya kuruka, ratiba kwa saa na kalenda, jedwali la kutafuta chanzo cha angalau hitilafu tano, na kiolezo cha daftari la matengenezo chenye maingizo mawili ya mfano.",
          youCanNow: "kutafuta chanzo cha hitilafu za kawaida za droni, kulinda droni katika hali za shambani Afrika, na kuendesha mpango kamili wa matengenezo.",
          quickCheck: [
            { objective: "O6", q: "Hatua ya kwanza ya kutafuta hitilafu ni ipi?", options: ["Soma ujumbe wa onyo na kagua sababu rahisi kwanza", "Badilisha vipuri kadhaa kwa pamoja", "Fungua betri", "Ruka juu zaidi kujaribu"], answer: 0, why: "Soma ujumbe, kagua sababu rahisi kwanza, badilisha kitu kimoja na ujaribu." },
            { objective: "O6", q: "Utarusha droni siku nzima kwenye shamba lenye joto na vumbi bila umeme. Unapanga nini?", options: ["Betri moja na kupaa kutoka mchanga mtupu", "Kuacha betri juani zibaki na joto", "Mkeka wa kupaa, kivuli kwa betri, saa zenye ubaridi na betri za kutosha zilizochajiwa au chaja ya jua au ya gari", "Kurusha bila kuipa droni mapumziko"], answer: 2, why: "Mikeka inazuia vumbi, kivuli na saa zenye ubaridi vinalinda betri, na uchajiji lazima upangwe pale umeme usipoaminika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Matengenezo shambani na karakana",
        questions: [
          { objective: "O4", q: "Panga ina kipande kidogo kilichovunjika ukingoni. Unapaswa:", options: ["Kuruka kwa uangalifu", "Kuifunga kwa tepu", "Kuibadilisha kabla ya kuruka", "Kuisugua iwe laini na kuruka"], answer: 2, why: "Panga zilizoharibika zinasababisha mtikisiko na zinaweza kuvunjika angani." },
          { objective: "O4", q: "Baada ya kuruka, mota moja ina joto zaidi sana kuliko nyingine. Hii inaweza kumaanisha:", options: ["Mota inaharibika au imezibwa", "Droni imeruka vizuri", "Kamera ni chafu", "Betri ni mpya"], answer: 0, why: "Joto lisilo la kawaida linaweza kuonyesha bearing mbaya, uchafu ndani au mota inayoharibika." },
          { objective: "O5", q: "Unapaswa kusakinisha sasisho la firmware lini?", options: ["Katikati ya shamba la mteja", "Wakati wa kuruka", "Kamwe", "Kituoni, baada ya kusoma maelezo ya toleo, kisha ruka kwa majaribio"], answer: 3, why: "Masasisho yanaweza kubadilisha jinsi droni inavyofanya kazi; jaribu kabla ya kazi halisi." },
          { objective: "O6", q: "App inaonyesha hitilafu ya dira wakati wa kupaa. Hatua nzuri ya kwanza ni:", options: ["Kupaa hata hivyo", "Kuondoka mbali na chuma, magari na nyaya za umeme na kurekebisha dira ukiombwa", "Kuondoa dira", "Kuruka kwa sport mode"], answer: 1, why: "Chuma na vyanzo vya sumaku vinavuruga dira." },
          { objective: "O6", q: "Unailindaje droni dhidi ya vumbi kwenye shamba kavu?", options: ["Paa kutoka kwenye mkeka, safisha baada ya kuruka, hifadhi ndani ya sanduku lililofungwa", "Ioshe kwa mpira wa maji", "Ruka karibu zaidi na ardhi", "Iache wazi bila kufunika"], answer: 0, why: "Vumbi linaharibu mota na gimbal; mikeka, kusafisha na masanduku vinasaidia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni za Kilimo: Teknolojia ya UAS na Matengenezo",
    questions: [
      { objective: "O1", q: "Kiungo cha C2 ni:", options: ["Aina ya betri", "Muunganiko wa redio kati ya kidhibiti na droni", "Ukubwa wa panga", "Lenzi ya kamera"], answer: 1, why: "Kiungo cha amri na udhibiti kinabeba amri na taarifa." },
      { objective: "O1", q: "ESC zinadhibiti:", options: ["Kukuza picha kwa kamera", "Kuhifadhi betri", "Kasi ya kuzunguka kwa kila mota", "Satelaiti za GPS"], answer: 2, why: "Vidhibiti vya kasi vya kielektroniki vinaendesha mota." },
      { objective: "O1", q: "Kidhibiti cha kuruka ni:", options: ["Ubongo ulio ndani ya droni unaoiweka imara", "Mtu anayerusha droni", "Kisanduku cha rimoti", "Kituo cha kutua"], answer: 0, why: "Kinasoma vihisi na kurekebisha mota mara nyingi kwa sekunde." },
      { objective: "O1", q: "GNSS inaipa droni:", options: ["Rangi yake", "Joto lake", "Kiwango cha betri", "Mahali ilipo kutoka kwa satelaiti"], answer: 3, why: "GNSS, kama GPS, inatoa mahali." },
      { objective: "O1", q: "Baromita kwenye droni inapima:", options: ["Uelekeo wa upepo", "Shinikizo la hewa, linalotumika kwa kimo", "Afya ya mazao", "Mizunguko ya betri"], answer: 1, why: "Shinikizo la hewa linabadilika kulingana na kimo." },
      { objective: "O2", q: "Kwa nini betri za LiPo zinaweza kuwa hatari?", options: ["Ni nzito", "Zina kelele", "Zinaweza kuwaka moto zikiharibika, zikichajiwa kupita kiasi au zikipata joto kupita kiasi", "Hazichaji kamwe"], answer: 2, why: "Nishati nyingi katika uzito mdogo inamaanisha hatari kubwa zisipotunzwa." },
      { objective: "O2", q: "Betri zinapaswa kuchajiwa:", options: ["Kwa chaja sahihi, ukiwepo, juu ya sehemu isiyoshika moto", "Usiku kucha juu ya kitanda", "Ndani ya gari lenye joto", "Kwa chaja yoyote inayoingia"], answer: 0, why: "Hatua hizi zinapunguza hatari ya moto." },
      { objective: "O2", q: "Mzunguko wa chaji ni:", options: ["Sehemu ya baiskeli", "Mpango wa safari ya kuruka", "Mwenendo wa hali ya hewa", "Matumizi kamili ya uwezo wa betri mara moja"], answer: 3, why: "Kuandika mizunguko kunaonyesha betri inavyozeeka." },
      { objective: "O2", q: "Betri ya droni iliyoharibika na kuondolewa kazini inapaswa kupelekwa:", options: ["Kwenye moto wa kupikia", "Mahali sahihi pa kukusanya taka za kielektroniki au betri", "Kwenye taka za kawaida", "Mtoni"], answer: 1, why: "Betri za lithium zinahitaji kukusanywa na kurejelezwa kwa usalama." },
      { objective: "O3", q: "Kihisi cha mwanga wa jua cha droni ya multispectral:", options: ["Kinachaji betri", "Kinapima upepo", "Kinapima mwanga unaoingia ili kusahihisha vipimo", "Kinanyunyizia maji"], answer: 2, why: "Kinasaidia kusahihisha mabadiliko ya mwanga." },
      { objective: "O3", q: "Mzigo uliolegea unaweza:", options: ["Kuvuruga uwiano na udhibiti wa droni", "Kuboresha picha", "Kuifanya droni iwe nyepesi", "Kuchaji haraka zaidi"], answer: 0, why: "Kidhibiti cha kuruka kinatarajia mzigo uliofungwa imara na wenye uwiano." },
      { objective: "O3", q: "Nozeli za kunyunyizia zinapaswa kukaguliwa kama:", options: ["Rangi yake", "Stika za chapa", "Muziki", "Zimechakaa au zimeziba"], answer: 3, why: "Nozeli zilizochakaa au kuziba zinamwaga kiasi kisicho sahihi." },
      { objective: "O3", q: "Je, matengenezo mazuri ya mfumo wa kunyunyizia yanachukua nafasi ya vibali vya kunyunyizia?", options: ["Ndiyo", "Hapana; vibali vya usafiri wa anga na vya dawa za kuua wadudu bado vinahitajika", "Kwenye mashamba madogo tu", "Usiku tu"], answer: 1, why: "Matengenezo na kibali cha kisheria ni mahitaji tofauti." },
      { objective: "O4", q: "Ukaguzi baada ya kuruka unafanywa ili:", options: ["Kuchaji kidhibiti", "Kupanga mteja anayefuata", "Kugundua uharibifu au uchakavu kutoka safari iliyomalizika", "Kuhariri picha"], answer: 2, why: "Unagundua matatizo kabla ya safari inayofuata." },
      { objective: "O4", q: "Unapaswa kusafishaje droni baada ya kuruka kwenye vumbi?", options: ["Kwa brashi laini au kitambaa kikavu", "Kwa maji ya shinikizo kubwa", "Kwa msasa", "Kwa petroli"], answer: 0, why: "Maji na kemikali vinaweza kuharibu vifaa vya kielektroniki." },
      { objective: "O5", q: "Matengenezo ya ratiba yanapangwa kwa:", options: ["Rangi tu", "Hali ya hewa tu", "Mteja tu", "Saa za kuruka na kalenda, kipi kinatangulia"], answer: 3, why: "Sehemu zinachakaa kwa kutumika na kwa muda." },
      { objective: "O5", q: "Daftari la matengenezo linaandika:", options: ["Bei ya droni tu", "Tarehe, saa, kazi iliyofanywa, vipuri, firmware, aliyefanya, matokeo", "Namba za simu za wakulima", "Bei za mazao"], answer: 1, why: "Kumbukumbu kamili zinasaidia usalama na kufuata sheria." },
      { objective: "O6", q: "Droni inayumba angani. Kagua kwanza:", options: ["Ramani ya mteja", "Utabiri wa hali ya hewa wa mwezi ujao", "Panga na mikono kama zimeharibika au zimelegea", "Kadi ya kumbukumbu"], answer: 2, why: "Panga zilizoharibika na mikono iliyopinda zinasababisha mtikisiko." },
      { objective: "O6", q: "Wakati wa joto kali unapaswa:", options: ["Kuweka betri kivulini na kuruka saa zenye ubaridi", "Kuacha betri juani", "Kuruka mfululizo bila mapumziko", "Kuchaji betri zikiwa na joto"], answer: 0, why: "Joto linafupisha maisha ya betri na kuchosha vifaa vya kielektroniki." },
      { objective: "O6", q: "Hitilafu ya usalama inaendelea kurudi baada ya marekebisho yako. Unapaswa:", options: ["Kuendelea kuruka", "Kuificha kwa wateja", "Kufunika onyo", "Kusimamisha droni isiruke na kuipeleka kwa fundi mwenye sifa"], answer: 3, why: "Hitilafu za usalama zinazojirudia zinahitaji kurekebishwa na mtaalamu kabla ya kuruka." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      5,
      6,
      9,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Inafikia au Inazidi kwenye kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      {
        name: "Orodha ya sehemu",
        objective: "O1",
        notYet: "Sehemu kuu zinakosekana, au kazi zake hazijaelezwa.",
        meets: "Kila sehemu kuu ya ndege na ya mfumo wa ardhini imeorodheshwa pamoja na kazi yake.",
        exceeds: "Inaonyesha sehemu zipi zinachakaa na zipi zinahitaji kurekebishwa (calibration)."
      },
      {
        name: "Utunzaji wa betri",
        objective: "O2",
        notYet: "Hatua za kuchaji, kuhifadhi au kuondoa kazini zinakosekana au si salama.",
        meets: "Hatua salama za kuchaji, kupoza, chaji ya kuhifadhi, kusafirisha na kuondoa kazini, pamoja na kufuatilia mizunguko.",
        exceeds: "Ina mpango wa moto kwa eneo la kuchajia."
      },
      {
        name: "Orodha za ukaguzi",
        objective: "O4",
        notYet: "Hakuna orodha, au vitu muhimu kama panga na kifungo cha betri vinakosekana.",
        meets: "Orodha za kabla na baada ya kuruka zinahusu kiunzi, panga, mota, mzigo, betri, vihisi na maelezo ya daftari.",
        exceeds: "Ukaguzi wa mzigo unalingana na kazi halisi ya droni, kama kupiga ramani au kunyunyizia."
      },
      {
        name: "Ratiba na daftari",
        objective: "O5",
        notYet: "Hakuna vipindi, au daftari linakosa sehemu.",
        meets: "Ratiba kwa saa za kuruka na kalenda, utaratibu wa firmware, na kiolezo cha daftari chenye maingizo mawili ya mfano.",
        exceeds: "Vipindi vimechukuliwa kutoka mwongozo wa mtengenezaji na chanzo kimeandikwa."
      },
      {
        name: "Jedwali la kutafuta hitilafu",
        objective: "O6",
        notYet: "Hitilafu chini ya tano, au hakuna hatua.",
        meets: "Angalau hitilafu tano za kawaida, kila moja na ukaguzi rahisi wa kwanza na wakati wa kusimamisha droni isiruke.",
        exceeds: "Inaongeza hatua za vumbi, joto, mvua na kukatika kwa umeme kwenye mashamba ya mwanafunzi mwenyewe."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Inafikia au Inazidi kwenye kila mstari wa rubriki wa mpango wa matengenezo",
      "Wanafunzi wanaoripoti kutumia orodha ya ukaguzi iliyoandikwa na daftari la matengenezo siku 30 baadaye (dodoso la ufuatiliaji)",
      "Biashara za droni au vyama vya ushirika vinavyoripoti ajali chache, matukio machache ya betri au siku chache za droni kusimamishwa baada ya mafunzo",
      "Wanafunzi wanaochukua kozi inayofuata ya droni au mafunzo ya ufundi ya mtengenezaji"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta kwa ajili ya masomo; droni halisi ya kilimo, au picha wazi zake, kwa mazoezi",
      "Mwongozo wa mtengenezaji wa droni, kama unapatikana",
      "Daftari au spreadsheet kwa orodha za ukaguzi, ratiba na daftari la matengenezo",
      "Takriban dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuandika mpango wa matengenezo"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha zungukeni droni halisi (imezimwa, panga zimeondolewa) mkitaja kila sehemu.",
      "Shikeni betri juu ya sehemu isiyoshika moto tu, na kamwe msichaji, msitoboe wala msifungue betri iliyovimba darasani.",
      "Tumieni mwongozo wa droni yenyewe kwa vipindi na taratibu; kozi inatoa njia ya jumla tu.",
      "Msiendeshe mifumo ya kunyunyizia yenye dawa ya kuua wadudu darasani; fanyeni mazoezi ya ukaguzi kwa maji safi au bila kimiminika.",
      "Pimeni mpango wa matengenezo kwa rubriki na toeni maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
