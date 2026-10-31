"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-livestock-health.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WOAH_ND = { name: "Shirika la Dunia la Afya ya Wanyama (WOAH): Ugonjwa wa Newcastle (kideri)", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const FAO_ND_VILLAGE = { name: "FAO: Ugonjwa wa Newcastle kwa kuku wa kienyeji", url: "https://www.fao.org/4/y5162e/y5162e05.htm" };
const FAO_BIOSEC = { name: "FAO: Mbinu bora za usalama wa kibiolojia katika ufugaji mdogo wa kuku wa kibiashara na wa kienyeji nchini Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const FAO_PRUDENT = { name: "FAO: Matumizi ya busara ya dawa za viuavijasumu kwa nguruwe na kuku (madaktari wa mifugo, mipango ya afya, vipindi vya kusubiri)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };
const VCN = { name: "Veterinary Council of Nigeria (rejista ya madaktari wa mifugo)", url: "https://vcn.gov.ng" };

module.exports = {
  id: "agri-livestock-health-sw",
  lang: "sw",
  translationOf: "agri-livestock-health",
  category: "Agriculture (Africa)",
  name: "Afya na Utunzaji wa Mifugo",
  skills: "Kutofautisha mnyama mzima na mgonjwa, Kulisha na kunywesha vizuri, Kuweka mabanda safi na salama, Kupanga chanjo pamoja na daktari wa mifugo, Kulinda kuku dhidi ya ugonjwa wa Newcastle, Kudhibiti vimelea na kuweka kumbukumbu za afya",
  outcome: "kuendesha mpango rahisi wa afya kwa ng'ombe, mbuzi au kuku wako: kukagua kila mnyama kila siku kuona dalili za ugonjwa, kuwalisha na kuwanywesha vizuri, kuweka mabanda safi, kufuata ratiba ya chanjo iliyopangwa na daktari wa mifugo wa eneo lako, kuzuia ugonjwa wa Newcastle na vimelea, kuandika kila tiba, na kujua wakati wa kumwita daktari wa mifugo.",
  about: [
    "Kozi hii ni kwa wafugaji wadogo na wanaokua, wachungaji, wafugaji wa kuku, wafanyakazi wa shamba na vijana wakulima nchini Kenya, Nigeria, Ghana na kote Afrika wanaofuga ng'ombe, mbuzi, kondoo au kuku. Wanyama wenye afya hukua haraka, hutoa maziwa na mayai zaidi, na huuzwa kwa bei nzuri sokoni; mlipuko mmoja wa ugonjwa unaweza kufuta akiba ya miaka mingi.",
    "Sura ya 1 inahusu utunzaji wa kila siku: kutofautisha mnyama mzima na mgonjwa, chakula na maji, na mabanda na usafi. Sura ya 2 inahusu kuzuia na kutibu magonjwa: ratiba za chanjo pamoja na daktari wa mifugo, usalama wa kibiolojia kwa kuku na ugonjwa wa Newcastle, na vimelea, kumbukumbu na wakati wa kumwita daktari wa mifugo.",
    "Kozi hii haitoi vipimo (dozi) vya dawa wala chanjo. Magonjwa, chanjo na dawa zilizoidhinishwa zinatofautiana kwa nchi na eneo, kwa hiyo fuata daima daktari wa mifugo au afisa wa afya ya mifugo wa eneo lako na maelekezo yaliyo kwenye lebo ya dawa. Kila somo linachukua kama dakika tano na linaisha na kazi na wanyama wako mwenyewe. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa afya wa ukurasa mmoja kwa wanyama wako (wako mwenyewe, au wa mfano kama ng'ombe 3 wa maziwa huko Kiambu, mbuzi 15 huko Kano, au kuku 200 wa mayai karibu na Kumasi): ukaguzi wako wa afya wa kila siku, mpango wa chakula na maji ukiwemo msimu wa kiangazi, sheria mbili za mabanda na usafi, ratiba ya chanjo uliyokubaliana na daktari wa mifugo, sheria zako za usalama wa kibiolojia (kwa kuku: ugonjwa wa Newcastle), jinsi utakavyodhibiti minyoo na kupe, kumbukumbu utakazoweka, na dalili zinazokufanya umwite daktari wa mifugo mara moja, pamoja na jina na namba ya simu ya daktari huyo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafugaji wadogo na wanaokua, wachungaji, wafugaji wa kuku, wafanyakazi wa shamba na vijana wakulima nchini Kenya, Nigeria, Ghana na kote Afrika wanaofuga ng'ombe, mbuzi, kondoo au kuku.",
    startingPoint: "Wengi huwatazama wanyama wao kila siku na hutibu ugonjwa wanapouona, mara nyingi kwa dawa walizonunua bila ushauri wa daktari wa mifugo. Wachache hufuata ratiba ya chanjo iliyoandikwa, huweka sheria za usalama wa kibiolojia, huandika tiba na vipindi vya kusubiri, au hupanga chakula na maji kwa msimu wa kiangazi.",
    gap: "Mlipuko mmoja wa ugonjwa unaweza kufuta akiba ya miaka mingi, na chakula duni, mabanda machafu, vimelea na matumizi mabaya ya dawa hupunguza maziwa, mayai na ukuaji, na yanaweza kudhuru watu. Mpango rahisi wa afya ulioandikwa pamoja na daktari wa mifugo huwaweka wanyama wakiwa na afya, huzuia hasara na huweka chakula kutoka shambani kikiwa salama.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la afya ya mifugo linaelezwa",
      "Vifaa: simu ya kawaida na daftari kwa kumbukumbu na namba ya daktari wa mifugo",
      "Hakuna vipimo vya dawa wala chanjo: magonjwa, chanjo na dawa zilizoidhinishwa zinatofautiana kwa eneo; wanafunzi wanafuata daktari wa mifugo na lebo",
      "Usalama: baadhi ya magonjwa ya wanyama huambukiza watu; kamwe usipasue mzoga wa mnyama aliyekufa ghafla akitoka damu",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi za kutunza wanyama"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Wakati wa ukaguzi wa kila siku wa wanyama wako", action: "kutambua dalili za mnyama mzima na mgonjwa na kumtenga mnyama anayeweza kuwa mgonjwa", standard: "ukitaja angalau dalili tano za hatari na kuwasiliana na daktari wa mifugo au afisa wa afya ya mifugo" },
    { id: "O2", condition: "Kwa wanyama wako mwaka mzima", action: "kupanga chakula na maji safi, ukiwemo msimu wa kiangazi", standard: "bila chakula chenye ukungu na ukibadilisha chakula polepole" },
    { id: "O3", condition: "Kwa mabanda ya wanyama wako", action: "kukagua mabanda na kuweka sheria za usafi kwa shamba", standard: "mabanda yakiwa makavu, yenye kivuli, yasiyo na msongamano, wanyama wapya wakiwekwa kando na wagonjwa wakitengwa" },
    { id: "O4", condition: "Pamoja na daktari wa mifugo aliyesajiliwa au afisa wa afya ya mifugo", action: "kukubaliana ratiba ya chanjo iliyoandikwa na kuweka chanjo zikiwa baridi na hazijapita muda wake", standard: "ikiwa na kila chanjo, wanyama, umri na lini kurudia" },
    { id: "O5", condition: "Kwa kundi la kuku", action: "kuweka sheria za usalama wa kibiolojia na mpango wa mlipuko wa ugonjwa wa Newcastle", standard: "chanjo ikitolewa kwa ratiba ya daktari wa mifugo, na hatua za kuchukua kuku wakifa ghafla" },
    { id: "O6", condition: "Kwa kundi lako la mifugo au kuku", action: "kupanga udhibiti wa vimelea pamoja na daktari wa mifugo, kuweka kumbukumbu za tiba na kuorodhesha dalili zinazohitaji daktari mara moja", standard: "ukiandika kila tiba pamoja na kipindi chake cha kusubiri" }
  ],
  chapters: [
    {
      name: "Sura 1: Utunzaji wa kila siku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Dalili za mnyama mzima na mnyama mgonjwa",
          minutes: 5,
          goal: "Fanya ukaguzi mfupi wa afya kila siku na umtambue mnyama anayeweza kuwa mgonjwa.",
          text: [
            "Wewe ndiye unayewajua wanyama wako vizuri zaidi. Kuwatazama kila siku, wakati wa kulisha au kukamua, hugundua ugonjwa mapema, wakati tiba ni nafuu zaidi na kabla haujaenea.",
            "Mnyama mzima yuko macho na mdadisi, anasimama na kutembea kawaida, anakula na kunywa vizuri, na ng'ombe, mbuzi na kondoo hucheua wanapopumzika. Macho yanang'aa na ni safi, pua ni safi, manyoya au nywele ni laini na zinang'aa, anapumua kwa utulivu, na mavi na mkojo vinaonekana kawaida. Kuku mzima ni mchangamfu, ana upanga (kilemba) mwekundu unaong'aa, na anataga kama kawaida.",
            "Dalili za hatari: kusimama mbali na wenzake, kuinamisha kichwa, kutokula au kutocheua, macho yaliyofifia au yanayotoa majimaji, kamasi puani, kukohoa au kupumua haraka, kuhara au damu kwenye mavi, kuchechemea, uvimbe, vidonda, kushuka ghafla kwa maziwa au mayai, manyoya yaliyotimka, shingo zilizopinda kwa ndege, au vifo vya ghafla. Mtenge mnyama mgonjwa na wengine na uwasiliane na daktari wa mifugo au afisa wa afya ya mifugo."
          ],
          steps: ["Kagua kila mnyama mara moja kwa siku, wakati wa kulisha au kukamua.", "Tazama: yuko macho, anasimama na kutembea kawaida, anakula, anacheua.", "Tazama kwa karibu: macho, pua, nywele au manyoya, kupumua, mavi.", "Angalia kama maziwa au mayai yamepungua.", "Mtenge mnyama yeyote mwenye dalili za hatari.", "Andika ulichoona na umpigie daktari wa mifugo au afisa wa afya ya mifugo."],
          words: [["Kucheua", "ng'ombe, mbuzi na kondoo wanaporudisha chakula mdomoni na kukitafuna tena; ni dalili ya afya njema."], ["Kutenga", "kumweka mnyama mgonjwa mbali na wengine."], ["Afisa wa afya ya mifugo", "mfanyakazi aliyefunzwa, wa serikali au binafsi, anayewasaidia wafugaji kuhusu afya ya wanyama."]],
          slides: [
            { title: "Mnyama mzima", bullets: ["Yuko macho, anatembea kawaida, anakula na kunywa", "Anacheua; macho yanang'aa, pua safi", "Nywele au manyoya laini; mavi ya kawaida"] },
            { title: "Dalili za hatari", bullets: ["Yuko peke yake, kichwa chini, hali", "Macho au pua yanatoa majimaji, kikohozi, kuhara", "Kuchechemea, uvimbe, maziwa au mayai kupungua"] },
            { title: "Chukua hatua mapema", bullets: ["Kagua kila mnyama kila siku", "Mtenge mnyama yeyote mgonjwa", "Mpigie daktari wa mifugo au afisa wa afya ya mifugo"] }
          ],
          tryIt: "Kesho wakati wa kulisha, kagua kila mnyama kwa orodha hii: yuko macho, anakula, anacheua, macho, pua, nywele, kupumua, mavi. Andika mstari mmoja kwa kila mnyama (au kwa kila banda la kuku). Weka alama kwa yeyote utakayemfuatilia au utakayempigia daktari wa mifugo kumhusu.",
          youCanNow: "kufanya ukaguzi wa afya wa kila siku na kutambua dalili za mnyama mgonjwa.",
          quickCheck: [
            { objective: "O1", q: "Ni dalili ipi ya hatari kwa kuku?", options: ["Upanga mwekundu unaong'aa", "Kutaga kama kawaida", "Mchangamfu na anakula vizuri", "Manyoya yaliyotimka"], answer: 3, why: "Manyoya yaliyotimka ni dalili ya hatari; kuku mzima ni mchangamfu na ana upanga mwekundu unaong'aa." },
            { objective: "O1", q: "Una shughuli nyingi na unapanga kukagua wanyama wako mara moja tu kwa wiki. Hatari ni ipi?", options: ["Wanyama watakula zaidi", "Ugonjwa utagunduliwa kwa kuchelewa, tiba ikiwa ghali zaidi na huenda umeshaenea", "Maziwa yataongezeka", "Hakuna hatari"], answer: 1, why: "Kuwatazama kila siku hugundua ugonjwa mapema, tiba ikiwa nafuu zaidi na kabla haujaenea." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Chakula na maji",
          minutes: 5,
          goal: "Panga chakula na maji safi kwa wanyama wako mwaka mzima, ukiwemo msimu wa kiangazi.",
          text: [
            "Maji ni kwanza. Wanyama wanahitaji maji safi kila siku, na zaidi wakati wa joto; ng'ombe anayekamuliwa hunywa maji mengi zaidi kuliko asiyekamuliwa, na maziwa hupungua haraka bila maji ya kutosha. Weka mabirika na vyombo vya maji vikiwa safi na kivulini, na kamwe usiwaache ndege wanywe maji machafu yaliyotuama.",
            "Ng'ombe, mbuzi na kondoo wanahitaji malisho ya nyuzinyuzi (nyasi, malisho kama majani ya tembo (Napier), Rhodes, desmodium au lusina (lucerne), na mabaki ya mazao kama mabua ya mahindi na mabaki ya maharagwe), pamoja na nguvu na protini kwa wanyama wanaokamuliwa, wenye mimba au wanaokua. Mbuzi pia hula vichaka na majani ya miti. Wape mawe ya madini au chumvi kama daktari wa mifugo au afisa ugani anavyoshauri. Kuku wa mayai au wa nyama wanahitaji chakula kamili chenye mchanganyiko sahihi; kuku wa kienyeji hujitafutia chakula lakini hutaga na kukua vizuri zaidi wakipewa nafaka kidogo zaidi, mboga za majani na maji safi.",
            "Panga kwa msimu wa kiangazi: panda malisho, na hifadhi hei (nyasi kavu), sileji au mabaki ya mazao yaliyokaushwa wakati yapo kwa wingi. Kamwe usilishe chakula chenye ukungu: ukungu unaweza kubeba sumu kuvu (aflatoxin), inayodhuru wanyama na kuingia kwenye maziwa na mayai. Badilisha chakula polepole kwa siku kadhaa ili kuepuka matatizo ya tumbo."
          ],
          steps: ["Toa maji safi kila siku; zaidi wakati wa joto na kwa wanyama wanaokamuliwa.", "Safisha mabirika na vyombo vya maji; viweke kivulini.", "Panga malisho ya nyuzinyuzi: malisho ya mbugani, malisho yaliyopandwa na mabaki ya mazao.", "Ongeza nguvu na protini kwa wanyama wanaokamuliwa, wenye mimba na wanaokua.", "Hifadhi hei, sileji au mabaki ya mazao kwa msimu wa kiangazi.", "Tupa chakula chenye ukungu; badilisha chakula polepole."],
          words: [["Malisho ya nyuzinyuzi", "chakula kingi chenye nyuzi kama nyasi, hei na mabaki ya mazao."], ["Malisho yaliyopandwa", "mazao yanayopandwa ili kulisha wanyama, kama majani ya tembo au lusina."], ["Sileji", "malisho mabichi yaliyohifadhiwa bila hewa ili yakae kwa miezi."], ["Jiwe la madini", "kipande cha chumvi na madini ambacho wanyama hulamba."]],
          slides: [
            { title: "Maji kwanza", bullets: ["Maji safi kila siku", "Zaidi wakati wa joto na kwa wanyama wanaokamuliwa", "Vyombo vya maji safi, kivulini"] },
            { title: "Chakula", bullets: ["Nyuzinyuzi: nyasi, malisho, mabaki ya mazao", "Nguvu na protini zaidi kwa wanaokamuliwa na wanaokua", "Madini kama daktari wa mifugo anavyoshauri"] },
            { title: "Panga na linda", bullets: ["Hifadhi hei, sileji au mabaki kwa kiangazi", "Kamwe usilishe chakula chenye ukungu", "Badilisha chakula polepole"] }
          ],
          tryIt: "Orodhesha vyakula ambavyo wanyama wako wanapata sasa na mahali kila kimoja kinapotoka. Weka alama kwa vile vinavyoisha wakati wa kiangazi na uandike njia moja ya kuhifadhi au kupanda zaidi kabla ya wakati huo. Kagua kila chombo cha maji leo na usafishe chochote kilicho kichafu.",
          youCanNow: "kupanga chakula na maji safi kwa wanyama wako mwaka mzima.",
          quickCheck: [
            { objective: "O2", q: "Kipi kati ya hivi ni malisho ya nyuzinyuzi kwa ng'ombe?", options: ["Mabua ya mahindi na mabaki ya maharagwe", "Chumvi peke yake", "Jiwe la madini peke yake", "Maji safi"], answer: 0, why: "Malisho ya nyuzinyuzi ni pamoja na nyasi, malisho yaliyopandwa na mabaki ya mazao kama mabua ya mahindi na mabaki ya maharagwe." },
            { objective: "O2", q: "Siku ya joto, birika la ng'ombe wako anayekamuliwa ni tupu na chafu. Unafanya nini?", options: ["Kusubiri hadi jioni", "Kumpa chakula kikavu zaidi badala yake", "Kulisafisha na kulijaza maji safi, kivulini", "Kumwacha anywe kwenye dimbwi la maji yaliyotuama"], answer: 2, why: "Wanyama wanahitaji maji safi kila siku, zaidi wakati wa joto, na maziwa hupungua haraka bila maji." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mabanda na usafi",
          minutes: 5,
          goal: "Kagua mabanda ya wanyama wako na uweke sheria tatu za usafi kwa shamba lako.",
          text: [
            "Banda zuri huwaweka wanyama wakiwa wakavu, kivulini, salama dhidi ya wezi na wanyama wawindaji, na bila msongamano. Linahitaji hewa safi bila upepo baridi unaopenya, sakafu kavu inayopitisha maji, na nafasi ya kutosha kwa kila mnyama kulala, kula na kunywa. Mabanda yenye msongamano, unyevu na uchafu hueneza magonjwa, minyoo na matatizo ya miguu.",
            "Liweke safi: ondoa mavi na matandiko yaliyolowa mara kwa mara (yanafaa kutengeneza mboji), safisha vyombo vya chakula na maji, na dhibiti nzi, panya na ndege wa porini. Kwa kuku, tumia matandiko makavu na uyabadilishe yakilowa. Nawa mikono baada ya kuwashika wanyama, hasa wagonjwa.",
            "Zuia magonjwa yasiingie na yasienee: weka wanyama wapya mbali na kundi lako kwa muda ambao daktari wa mifugo anashauri kabla ya kuwachanganya, na weka wanyama wagonjwa katika banda tofauti. Baadhi ya magonjwa ya wanyama huambukiza watu pia, kama brusela (brucellosis) na kimeta (anthrax). Mnyama akifa ghafla akitoa damu puani au kwenye matundu mengine, usipasue mzoga; waweke watu na wanyama mbali na umpigie daktari wa mifugo mara moja. Ondoa wanyama waliokufa kwa njia ambayo daktari wa mifugo au afisa wa afya ya mifugo anaelekeza."
          ],
          steps: ["Kagua banda: kavu, lenye kivuli, hewa ya kutosha, linapitisha maji, bila msongamano.", "Ondoa mavi na matandiko yaliyolowa mara kwa mara.", "Safisha vyombo vya chakula na maji; dhibiti nzi na panya.", "Weka wanyama wapya mbali kabla ya kuwachanganya, kama daktari wa mifugo anavyoshauri.", "Kuwa na banda tofauti kwa wanyama wagonjwa.", "Nawa mikono baada ya kushika wanyama; mpigie daktari kuhusu vifo vya ghafla."],
          words: [["Matandiko", "kitanda kikavu kama vumbi la randa sakafuni katika banda la kuku."], ["Karantini", "kuwaweka wanyama wapya au wagonjwa mbali ili kuzuia ugonjwa kuenea."], ["Zoonosisi", "ugonjwa unaoweza kupita kati ya wanyama na watu."], ["Mzoga", "mwili wa mnyama aliyekufa."]],
          slides: [
            { title: "Banda zuri", bullets: ["Kavu, lenye kivuli, hewa safi, bila upepo baridi", "Sakafu inayopitisha maji", "Nafasi ya kulala, kula na kunywa; salama dhidi ya wezi"] },
            { title: "Liweke safi", bullets: ["Ondoa mavi na matandiko yaliyolowa mara kwa mara", "Safisha vyombo vya chakula na maji", "Dhibiti nzi, panya na ndege wa porini"] },
            { title: "Zuia magonjwa", bullets: ["Wanyama wapya kando kabla ya kuchanganywa", "Banda tofauti kwa wanyama wagonjwa", "Nawa mikono baada ya kuwashika"] },
            { title: "Kifo cha ghafla", bullets: ["Usipasue mzoga", "Waweke watu na wanyama mbali", "Mpigie daktari wa mifugo mara moja"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Pita ndani ya banda au zizi la wanyama wako ukiwa na orodha hii: kavu, kivuli, hewa ya kutosha, linapitisha maji, bila msongamano, vyombo vya maji safi. Andika jambo moja la kurekebisha wiki hii, na sheria tatu za usafi kwa kila mtu anayefanya kazi na wanyama wako.",
          youCanNow: "kukagua banda na kuliweka safi, kuwaweka wanyama wagonjwa na wapya mbali, na kuchukua hatua salama mnyama akifa ghafla.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini uondoe mavi na matandiko yaliyolowa mara kwa mara?", options: ["Ili wanyama wale kidogo", "Ili kuokoa chakula", "Banda chafu lenye unyevu hueneza magonjwa, minyoo na matatizo ya miguu", "Ili banda lionekane tupu"], answer: 2, why: "Mabanda yenye msongamano, unyevu na uchafu hueneza magonjwa, minyoo na matatizo ya miguu." },
            { objective: "O3", q: "Mvua imevuja ndani ya banda lako la kuku na matandiko yamelowa. Unafanya nini?", options: ["Kubadilisha matandiko yaliyolowa kwa makavu na kuziba sehemu inayovuja", "Kuyaacha yakauke yenyewe", "Kuweka chakula juu yake", "Kuwahamishia kuku kwenye mvua"], answer: 0, why: "Kuku wanahitaji matandiko makavu; yaliyolowa yanabadilishwa na chanzo kinarekebishwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Utunzaji wa kila siku",
        questions: [
          { objective: "O1", q: "Ni ipi dalili ya ng'ombe au mbuzi mwenye afya?", options: ["Kusimama peke yake akiwa ameinamisha kichwa", "Kucheua anapopumzika", "Macho na pua yanayotoa majimaji", "Kutokunywa maji"], answer: 1, why: "Kucheua kunaonyesha tumbo linafanya kazi kawaida." },
          { objective: "O1", q: "Mbuzi hali na anasimama mbali na kundi. Unafanya nini kwanza?", options: ["Kusubiri wiki moja", "Kumuuza mara moja", "Kumtenga na kuwasiliana na daktari wa mifugo au afisa wa afya ya mifugo", "Kumpa dawa yoyote kutoka dukani"], answer: 2, why: "Kumtenga kunalinda kundi, na daktari wa mifugo anaweza kutafuta chanzo." },
          { objective: "O2", q: "Pumba zako za mahindi zimeota ukungu. Unapaswa kufanya nini?", options: ["Kuzitupa; usiwalishe wanyama", "Kuwalisha kuku", "Kuzichanganya na chakula kizuri", "Kuwalisha ng'ombe wanaokamuliwa tu"], answer: 0, why: "Ukungu unaweza kubeba sumu kuvu (aflatoxin), inayodhuru wanyama na kuingia kwenye maziwa na mayai." },
          { objective: "O2", q: "Unapaswa kujiandaaje kwa msimu wa kiangazi?", options: ["Kuuza mabirika yote ya maji", "Kulisha hei yenye ukungu", "Kuacha kutoa maji", "Kupanda malisho na kuhifadhi hei, sileji au mabaki ya mazao"], answer: 3, why: "Chakula kilichohifadhiwa huwavusha wanyama katika msimu wa kiangazi." },
          { objective: "O3", q: "Ng'ombe anakufa ghafla akitoa damu puani. Unafanya nini?", options: ["Kumpasua uone chanzo", "Usimpasue; waweke watu mbali na umpigie daktari wa mifugo mara moja", "Kuuza nyama haraka", "Kuwaachia mbwa"], answer: 1, why: "Kifo cha ghafla chenye kutoa damu kinaweza kuwa kimeta, kinachoweza kuambukiza watu; mzoga haupaswi kupasuliwa." }
        ]
      }
    },
    {
      name: "Sura 2: Kuzuia na kutibu magonjwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ratiba za chanjo pamoja na daktari wa mifugo wa eneo lako",
          minutes: 5,
          goal: "Kubaliana ratiba ya chanjo iliyoandikwa na daktari wa mifugo aliyesajiliwa na uhakikishe chanjo zinafanya kazi.",
          text: [
            "Chanjo huzuia magonjwa mengi makubwa ya mifugo kwa gharama ndogo sana kuliko tiba. Chanjo zipi wanyama wako wanahitaji, na lini, inategemea nchi yako, eneo lako na magonjwa yaliyopo huko. Mifano ya kawaida ni ugonjwa wa miguu na midomo, ugonjwa wa ngozi wenye vivimbe (lumpy skin), kimeta na chambavu (blackquarter) kwa ng'ombe; sotoka ya mbuzi na kondoo (PPR) kwa mbuzi na kondoo; na ugonjwa wa Newcastle, Gumboro na ndui ya kuku kwa kuku. Ni daktari wa mifugo au afisa wa afya ya mifugo anayelijua eneo lako tu anayeweza kutoa ratiba sahihi.",
            "Muombe daktari wa mifugo akuandikie kalenda ya mwaka: kila chanjo, kwa wanyama gani, katika umri gani, na lini kurudia. Tumia daktari wa mifugo aliyesajiliwa au mhudumu wa afya ya mifugo aliyefunzwa. Nchini Nigeria, Veterinary Council of Nigeria inatunza rejista ya madaktari wa mifugo; nchini Kenya, Kenya Veterinary Board inasajili madaktari wa mifugo na wasaidizi wao (para-vets); nchini Ghana, Veterinary Services Directorate ya Wizara ya Chakula na Kilimo (MoFA) inaendesha huduma za afya ya mifugo na kampeni za chanjo. Kampeni za serikali wakati mwingine ni za bure au za gharama ndogo, kwa hiyo fuatilia matangazo.",
            "Chanjo ni bidhaa hai au dhaifu. Nunua kutoka maduka ya pembejeo za kilimo na mifugo (agrovet) yenye leseni tu, kagua tarehe ya mwisho wa matumizi, ziweke baridi (kwenye sanduku la barafu au jokofu, mbali na jua) kutoka dukani hadi kwa mnyama, na uzitumie kama lebo na daktari wa mifugo wanavyosema. Chanjo iliyopata joto huenda isiwalinde wanyama wako."
          ],
          steps: ["Muulize daktari wa mifugo aliyesajiliwa au afisa wa afya ya mifugo magonjwa yapi ni hatari katika eneo lako.", "Pata kalenda ya mwaka iliyoandikwa: chanjo, wanyama, umri, tarehe za kurudia.", "Nunua chanjo kutoka agrovet zenye leseni tu; kagua tarehe ya mwisho wa matumizi.", "Weka chanjo baridi kutoka dukani hadi kwa mnyama.", "Zitumie sawasawa na lebo na daktari wa mifugo wanavyosema.", "Andika kila chanjo: tarehe, wanyama, chanjo, namba ya toleo (batch), aliyeitoa."],
          words: [["Chanjo", "bidhaa inayofundisha mwili wa mnyama kupambana na ugonjwa kabla hajaugua."], ["Ratiba ya chanjo", "kalenda ya chanjo zipi zitolewe, kwa wanyama gani, na lini."], ["Mnyororo wa baridi", "kuweka chanjo baridi njia nzima kutoka kwa mtengenezaji hadi kwa mnyama."], ["PPR", "peste des petits ruminants (sotoka ya mbuzi na kondoo), ugonjwa hatari wa virusi wa mbuzi na kondoo."]],
          slides: [
            { title: "Kwa nini chanjo", bullets: ["Kuzuia ni nafuu sana kuliko kutibu", "Chanjo zipi inategemea eneo lako", "Daktari wa mifugo wa eneo lako tu ndiye anayeweka ratiba"] },
            { title: "Mifano ya kawaida", bullets: ["Ng'ombe: miguu na midomo, lumpy skin, kimeta, chambavu", "Mbuzi na kondoo: PPR", "Kuku: Newcastle, Gumboro, ndui ya kuku"] },
            { title: "Tumia msaada uliosajiliwa", bullets: ["Nigeria: Veterinary Council of Nigeria", "Kenya: Kenya Veterinary Board", "Ghana: Veterinary Services Directorate (MoFA)"] },
            { title: "Hakikisha chanjo zinafanya kazi", bullets: ["Agrovet zenye leseni; kagua tarehe ya mwisho", "Ziweke baridi kutoka dukani hadi kwa mnyama", "Fuata lebo na daktari wa mifugo"] }
          ],
          sources: [VCN],
          tryIt: "Mpigie simu au mtembelee daktari wa mifugo au afisa wa afya ya mifugo wa eneo lako na umuulize: niwachanje wanyama wangu dhidi ya magonjwa yapi hapa, na lini? Andika jibu lake kama kalenda ya miezi 12 na uhifadhi namba ya daktari huyo kwenye simu yako.",
          youCanNow: "kupata ratiba ya chanjo kutoka kwa daktari wa mifugo aliyesajiliwa na kuweka chanjo baridi na zenye nguvu.",
          quickCheck: [
            { objective: "O4", q: "Ni ugonjwa upi wa kuku unaozuilika kwa chanjo?", options: ["Ndigana kali (East Coast fever)", "Ugonjwa wa Newcastle", "Brusela kwa mbuzi", "Kuoza kwa kwato"], answer: 1, why: "Ugonjwa wa Newcastle, Gumboro na ndui ya kuku ni magonjwa ya kawaida ya kuku yanayozuiwa kwa chanjo." },
            { objective: "O4", q: "Daktari wa mifugo alitoa chanjo za kwanza lakini hakuandika chochote. Unaomba nini?", options: ["Chanjo ya bei nafuu zaidi", "Hakuna; utakumbuka", "Chanjo ya kila ugonjwa duniani", "Kalenda ya mwaka iliyoandikwa: kila chanjo, wanyama gani, umri gani na lini kurudia"], answer: 3, why: "Kalenda iliyoandikwa na daktari wa mifugo inahakikisha kila chanjo inatolewa kwa wakati." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usalama wa kibiolojia kwa kuku na ugonjwa wa Newcastle",
          minutes: 5,
          goal: "Weka sheria za usalama wa kibiolojia zinazozuia ugonjwa wa Newcastle na maambukizi mengine kuingia kwenye kundi lako.",
          text: [
            "Ugonjwa wa Newcastle (kideri au mdondo) ni mmoja wa magonjwa hatari zaidi ya kuku barani Afrika. Shirika la Dunia la Afya ya Wanyama (WOAH) linaeleza dalili kama kuhema kwa shida, kukohoa na kupiga chafya; dalili za neva kama kutetemeka, kupooza na shingo kupinda; kuhara; na kushuka kwa utagaji wa mayai. Vifo vinaweza kufikia asilimia 100 ya kundi, na karibu kuku wote wa kundi wanaweza kuambukizwa ndani ya siku chache.",
            "WOAH inaeleza kwamba unaenea kwa kugusana na kuku wagonjwa na kinyesi chao, na kupitia chakula, maji, vifaa na nguo zenye vijidudu. Ndiyo sababu usalama wa kibiolojia, yaani hatua rahisi za kila siku zinazozuia vijidudu kuingia, ni muhimu kama chanjo. Mwongozo wa FAO kwa makundi madogo ya kuku nchini Kenya unasisitiza kwamba nyingi ya hatua hizi zinagharimu kidogo au hazigharimu chochote.",
            "Chanja kundi zima dhidi ya ugonjwa wa Newcastle kwa ratiba ambayo daktari wa mifugo anakupa. Kwa kuku wa kienyeji, FAO inaeleza chanjo zinazostahimili joto (kama I-2) zinazoweza kutolewa kwa tone la jichoni; muulize afisa wa afya ya mifugo zipi zinapatikana. Kuku wengi wakiugua au kufa ghafla, wafungie ndani, mjulishe daktari wa mifugo au afisa wa afya ya mifugo mara moja, na usiuze wala kuhamisha kuku. WOAH inashauri kuacha banda lililosafishwa bila kuku kwa siku 21 kabla ya kuweka kuku wapya baada ya mlipuko."
          ],
          steps: ["Zuia wageni kuingia kwenye banda la kuku; nawa mikono na tumia dawa ya kuchovya miguu au viatu maalum.", "Nunua kuku kutoka vyanzo vinavyoaminika na vyenye afya tu; waweke kuku wapya kando kwanza.", "Zuia ndege wa porini, panya na kuku wa watu wengine wasifikie chakula na maji.", "Safisha na uue vijidudu kwenye vyombo vya maji, vya chakula na makreti mara kwa mara.", "Chanja kundi zima kwa ratiba ya daktari wa mifugo.", "Kuku wakiugua au kufa ghafla: wafungie ndani, mpigie daktari, usiuze wala kuhamisha kuku."],
          words: [["Usalama wa kibiolojia", "hatua rahisi za kila siku zinazozuia vijidudu kuingia shambani na kuenea."], ["Ugonjwa wa Newcastle", "ugonjwa wa virusi wa kuku unaoenea haraka na unaoweza kuua kundi zima; pia huitwa kideri au mdondo."], ["Dawa ya kuchovya miguu", "chombo chenye dawa ya kuua vijidudu ambacho watu hukanyaga kabla ya kuingia kwenye banda la wanyama."], ["Chanjo inayostahimili joto", "chanjo inayovumilia joto zaidi, inayofaa vijijini; bado inapaswa kuwekwa baridi kadiri iwezekanavyo."]],
          slides: [
            { title: "Ugonjwa wa Newcastle (WOAH)", bullets: ["Kuhema kwa shida, kukohoa, shingo kupinda, kuhara", "Mayai kupungua; vifo hadi asilimia 100", "Kundi zima huambukizwa ndani ya siku chache"] },
            { title: "Jinsi unavyoenea", bullets: ["Kuku wagonjwa na kinyesi chao", "Chakula, maji, vifaa na nguo zenye vijidudu", "Usalama wa kibiolojia unauzuia; hatua nyingi ni za bure"] },
            { title: "Sheria za usalama wa kibiolojia", bullets: ["Punguza wageni; nawa mikono; dawa ya kuchovya miguu", "Kuku wapya kando kwanza", "Zuia ndege wa porini na panya; safisha vyombo vya maji"] },
            { title: "Chanja na chukua hatua haraka", bullets: ["Kundi zima, kwa ratiba ya daktari wa mifugo", "Kuku wa kienyeji: uliza kuhusu chanjo za tone la jichoni", "Vifo vya ghafla: wafungie, mpigie daktari, usiuze"] }
          ],
          sources: [WOAH_ND, FAO_ND_VILLAGE, FAO_BIOSEC],
          tryIt: "Andika sheria tano za usalama wa kibiolojia kwa kuku wako na uzibandike mlangoni mwa banda la kuku. Kisha muulize daktari wa mifugo au afisa wa afya ya mifugo lini kundi lako linapaswa kuchanjwa tena dhidi ya ugonjwa wa Newcastle, na uiongeze kwenye kalenda yako.",
          youCanNow: "kulinda kundi la kuku dhidi ya ugonjwa wa Newcastle kwa usalama wa kibiolojia na chanjo, na kuchukua hatua haraka kuku wakifa.",
          quickCheck: [
            { objective: "O5", q: "Usalama wa kibiolojia ni nini?", options: ["Aina ya chanjo", "Aina ya kuku", "Nyongeza ya chakula", "Hatua rahisi za kila siku zinazozuia vijidudu kuingia shambani"], answer: 3, why: "Usalama wa kibiolojia ni hatua za kila siku zinazozuia vijidudu kuingia, na nyingi zinagharimu kidogo au hazigharimu chochote." },
            { objective: "O5", q: "Jirani ambaye kuku wake wamekuwa wagonjwa anataka kuazima trei zako za mayai na vyombo vya chakula. Unafanya nini?", options: ["Kumwazimisha na kuvitumia tena vikirudi", "Usishiriki vifaa, kwa sababu vijidudu huenea kupitia vifaa", "Kumwazimisha kwa siku moja tu", "Kubadilishana kuku badala yake"], answer: 1, why: "Ugonjwa wa Newcastle huenea kupitia chakula, maji, vifaa na nguo zenye vijidudu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Vimelea, kumbukumbu na wakati wa kumwita daktari wa mifugo",
          minutes: 6,
          goal: "Panga udhibiti wa vimelea pamoja na daktari wa mifugo, weka kumbukumbu za tiba, na ujue dalili zinazohitaji daktari mara moja.",
          text: [
            "Minyoo ndani ya utumbo, na kupe, utitiri na viroboto nje ya mwili hufyonza damu, huchelewesha ukuaji na hueneza magonjwa; kupe hueneza ndigana kali (East Coast fever) kwa ng'ombe Afrika Mashariki. Dalili za minyoo ni pamoja na ukuaji duni, nywele zisizo laini, tumbo kubwa, kuhara na kope au fizi zilizopauka. Punguza vimelea kwa mabanda safi na makavu, kuwahamisha wanyama wanaochunga kwenye malisho mapya, na kuepuka msongamano. Daktari wa mifugo anaweza kukuambia lini kutoa dawa ya minyoo, kuogesha au kunyunyizia dawa, na kwa bidhaa gani. Daima tumia kipimo kilicho kwenye lebo au kutoka kwa daktari wa mifugo: kidogo mno huwafanya minyoo na kupe wawe sugu, na kingi mno kinaweza kumdhuru mnyama.",
            "Dawa huacha mabaki. Kila dawa ina kipindi cha kusubiri: muda baada ya tiba kabla maziwa, mayai au nyama ya mnyama huyo kuuzwa au kuliwa. FAO inasisitiza kufanya kazi na daktari wa mifugo kwenye mpango wa afya na kuandika kila tiba pamoja na kipindi chake cha kusubiri. Kamwe usitumie viuavijasumu (antibiotics) ili wanyama wakue haraka au bila ushauri wa daktari wa mifugo.",
            "Kumbukumbu hugeuza kubahatisha kuwa kujua. Kwa kila mnyama au kundi, andika: utambulisho, kuzaliwa, chanjo, tiba (tarehe, bidhaa, aliyeitoa, lini kipindi cha kusubiri kinaisha), uzito au uzalishaji, na vifo. Daftari linafaa; hata jedwali (spreadsheet) kwenye simu linafaa. Mpigie daktari wa mifugo mara moja kwa: vifo vya ghafla, wanyama kadhaa kuugua kwa wakati mmoja, mnyama kutokula kwa zaidi ya siku moja, uzazi mgumu, kutokwa damu nyingi, dalili za neva, au ugonjwa wowote ambao serikali yako inasema lazima uripotiwe."
          ],
          steps: ["Muombe daktari wa mifugo mpango wa vimelea: lini kutoa dawa ya minyoo na kuogesha au kunyunyizia, na kwa nini.", "Tumia kipimo kilicho kwenye lebo au kutoka kwa daktari wa mifugo, kamwe usibahatishe.", "Hamisha wanyama wanaochunga kwenye malisho mapya; weka mabanda makavu.", "Andika kila tiba pamoja na tarehe kipindi cha kusubiri kinapoisha.", "Usiuze maziwa, mayai au nyama kabla kipindi cha kusubiri hakijaisha.", "Mpigie daktari mara moja kwa vifo vya ghafla, wengi kuugua, uzazi mgumu au dalili za neva."],
          words: [["Kimelea", "mnyoo, kupe, utitiri au kiroboto anayeishi juu au ndani ya mnyama na kumdhuru."], ["Kutoa dawa ya minyoo", "kumpa mnyama dawa ya kuua minyoo iliyo ndani yake."], ["Kipindi cha kusubiri", "muda baada ya tiba kabla maziwa, mayai au nyama kuuzwa au kuliwa."], ["Usugu", "minyoo, kupe au vijidudu wanapostahimili dawa iliyokuwa ikiwaua."]],
          slides: [
            { title: "Vimelea", bullets: ["Minyoo: ukuaji duni, tumbo kubwa, kope zilizopauka", "Kupe hueneza magonjwa, k.m. ndigana kali (East Coast fever)", "Mabanda safi, malisho mapya, bila msongamano"] },
            { title: "Tibu kwa njia sahihi", bullets: ["Mpango wa daktari wa minyoo na kuogesha", "Kipimo kutoka lebo au daktari; usibahatishe", "Vipimo visivyo sahihi hujenga usugu"] },
            { title: "Vipindi vya kusubiri", bullets: ["Muda kabla maziwa, mayai au nyama kuuzwa", "Andika tarehe ya mwisho kwa kila tiba", "Hakuna viuavijasumu bila ushauri wa daktari wa mifugo"] },
            { title: "Mpigie daktari mara moja", bullets: ["Vifo vya ghafla; wengi kuugua kwa wakati mmoja", "Kutokula zaidi ya siku moja; uzazi mgumu", "Kutokwa damu, dalili za neva, magonjwa ya kuripotiwa"] }
          ],
          sources: [FAO_PRUDENT, WOAH_ND],
          tryIt: "Kazi ya mwisho: andika mpango wako wa afya wa ukurasa mmoja. Weka ukaguzi wako wa kila siku, mpango wa chakula na maji, sheria za mabanda, kalenda ya chanjo kutoka kwa daktari wa mifugo, sheria za usalama wa kibiolojia, mpango wa vimelea, kumbukumbu utakazoweka, na dalili zinazokufanya umwite daktari, pamoja na jina na namba ya daktari wa mifugo juu kabisa.",
          youCanNow: "kudhibiti vimelea pamoja na daktari wa mifugo, kuweka kumbukumbu za tiba pamoja na vipindi vya kusubiri, na kujua wakati wa kumwita daktari wa mifugo.",
          quickCheck: [
            { objective: "O6", q: "Kupe hueneza ugonjwa upi kwa ng'ombe Afrika Mashariki?", options: ["Ndigana kali (East Coast fever)", "Ugonjwa wa Newcastle", "Ndui ya kuku", "PPR"], answer: 0, why: "Kupe hueneza ndigana kali (East Coast fever) kwa ng'ombe Afrika Mashariki." },
            { objective: "O6", q: "Umemtibu mbuzi leo. Unaandika nini kwenye kumbukumbu?", options: ["Hakuna, kama mbuzi anaonekana bora", "Bei ya dawa tu", "Tarehe, bidhaa, aliyeitoa na lini kipindi cha kusubiri kinaisha", "Jina la jirani"], answer: 2, why: "Kuandika kila tiba pamoja na kipindi chake cha kusubiri huweka maziwa na nyama salama kuuzwa na kuliwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuzuia na kutibu magonjwa",
        questions: [
          { objective: "O4", q: "Nani anapaswa kuweka ratiba ya chanjo ya wanyama wako?", options: ["Jirani aliye nchi nyingine", "Bango la duka la chakula cha mifugo", "Daktari wa mifugo aliyesajiliwa au afisa wa afya ya mifugo anayelijua eneo lako", "Mtu yeyote mtandaoni"], answer: 2, why: "Chanjo zipi zinahitajika, na lini, inategemea magonjwa yaliyopo katika eneo lako." },
          { objective: "O4", q: "Unanunua chanjo na kusafiri nyumbani kwa saa tatu juani. Hatari ni ipi?", options: ["Chanjo inaweza kuharibiwa na joto na isiwalinde wanyama wako", "Inakuwa na nguvu zaidi", "Hakuna hatari kabisa", "Inakuwa dawa ya minyoo"], answer: 0, why: "Chanjo lazima ziwekwe baridi kutoka dukani hadi kwa mnyama." },
          { objective: "O5", q: "Ni ipi dalili ya ugonjwa wa Newcastle kwa kuku?", options: ["Upanga unaong'aa zaidi", "Mayai zaidi", "Kukua haraka zaidi", "Shingo kupinda, kuhema kwa shida na vifo vya ghafla"], answer: 3, why: "WOAH inataja dalili za kupumua na za neva, kushuka kwa mayai na vifo vingi." },
          { objective: "O5", q: "Kuku wako wengi wanakufa ghafla. Unapaswa kufanya nini?", options: ["Kuuza waliobaki haraka sokoni", "Kuwafungia ndani, kumpigia daktari wa mifugo na kutowahamisha wala kuwauza kuku", "Kuwapa majirani kuku waliokufa", "Kununua kuku wapya siku hiyo hiyo"], answer: 1, why: "Kuhamisha au kuuza kuku hueneza ugonjwa; daktari wa mifugo lazima atafute chanzo." },
          { objective: "O6", q: "Kipindi cha kusubiri ni nini?", options: ["Muda kabla maziwa, mayai au nyama ya mnyama aliyetibiwa kuuzwa au kuliwa", "Likizo ya wakulima", "Muda ambao chanjo inadumu", "Muda wa kukausha nafaka"], answer: 0, why: "Kinazuia mabaki ya dawa kuingia kwenye chakula." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Afya na Utunzaji wa Mifugo",
    questions: [
      { objective: "O1", q: "Ni wakati gani mzuri wa ukaguzi wa afya wa kila siku?", options: ["Mara moja kwa mwezi", "Mnyama akifa tu", "Wakati wa kulisha au kukamua", "Kamwe; wanyama hujitunza wenyewe"], answer: 2, why: "Wanyama wamekusanyika na wachangamfu wakati wa kulisha au kukamua." },
      { objective: "O1", q: "Kuku mwenye afya kwa kawaida ana:", options: ["Upanga uliopauka na kusinyaa", "Manyoya yaliyotimka", "Shingo iliyopinda", "Upanga mwekundu unaong'aa na ni mchangamfu"], answer: 3, why: "Upanga unaong'aa na uchangamfu ni dalili za afya njema." },
      { objective: "O1", q: "Ni ipi dalili ya hatari kwa ng'ombe wa maziwa?", options: ["Maziwa kushuka ghafla", "Kucheua", "Macho yanayong'aa", "Kula vizuri"], answer: 0, why: "Maziwa kushuka ghafla mara nyingi kunamaanisha ugonjwa." },
      { objective: "O2", q: "Nini kinatangulia katika kulisha wanyama?", options: ["Virutubisho vya bei ghali", "Maji safi kila siku", "Mawe ya madini peke yake", "Hei yenye ukungu"], answer: 1, why: "Bila maji safi ya kutosha, afya na uzalishaji hushuka haraka." },
      { objective: "O2", q: "Majani ya tembo (Napier) na lusina ni mifano ya:", options: ["Chanjo", "Dawa za minyoo", "Malisho yaliyopandwa", "Matandiko"], answer: 2, why: "Ni mazao ya malisho yanayopandwa ili kulisha wanyama." },
      { objective: "O2", q: "Kwa nini ubadilishe chakula cha wanyama polepole kwa siku kadhaa?", options: ["Ili kuepuka matatizo ya tumbo", "Kwa sababu chakula kipya ni kibaya daima", "Ili kuokoa maji", "Haijalishi"], answer: 0, why: "Kubadilisha chakula ghafla huvuruga usagaji wa chakula." },
      { objective: "O3", q: "Banda zuri la wanyama ni:", options: ["Lenye msongamano na joto", "Lenye unyevu na giza", "Kavu, lenye kivuli, hewa ya kutosha na bila msongamano", "Wazi kwa wezi"], answer: 2, why: "Banda kavu, lenye hewa na bila msongamano hupunguza magonjwa." },
      { objective: "O3", q: "Unanunua mbuzi watatu wapya. Ufanye nini kabla ya kuwachanganya na kundi lako?", options: ["Kuwachanganya mara moja", "Kuwaweka kando kwa muda ambao daktari wa mifugo anashauri", "Kuuza mbuzi wako wa zamani", "Kuwapa viuavijasumu kwa tahadhari tu"], answer: 1, why: "Kuwaweka wanyama wapya kando huwazuia kuleta magonjwa." },
      { objective: "O3", q: "Zoonosisi ni:", options: ["Aina ya malisho", "Chanjo", "Ugonjwa unaoweza kupita kati ya wanyama na watu", "Banda la kuku"], answer: 2, why: "Brusela na kimeta ni mifano." },
      { objective: "O4", q: "PPR ni ugonjwa hatari wa:", options: ["Mbuzi na kondoo", "Kuku", "Mahindi", "Samaki"], answer: 0, why: "Peste des petits ruminants (sotoka ya mbuzi na kondoo) huathiri mbuzi na kondoo." },
      { objective: "O4", q: "Nchini Nigeria, ni chombo kipi kinachotunza rejista ya madaktari wa mifugo?", options: ["Mamlaka ya Hali ya Hewa ya Nigeria", "Veterinary Council of Nigeria", "Benki Kuu", "Kampuni ya chakula cha mifugo"], answer: 1, why: "VCN inasajili madaktari wa mifugo." },
      { objective: "O4", q: "Unapaswa kununua chanjo wapi?", options: ["Kwa mtu yeyote kando ya barabara", "Mtandaoni kutoka kwa wauzaji usiowajua", "Kutoka kwenye jokofu kuukuu la jirani", "Kutoka agrovet yenye leseni, ukikagua tarehe ya mwisho wa matumizi"], answer: 3, why: "Wauzaji wenye leseni na chanjo ambazo muda wake haujapita zina uwezekano mkubwa zaidi wa kufanya kazi." },
      { objective: "O5", q: "Kwa mujibu wa WOAH, ugonjwa wa Newcastle huenea kupitia:", options: ["Mwanga wa jua peke yake", "Maji safi", "Kuku waliochanjwa peke yao", "Kuku wagonjwa, kinyesi, na chakula, maji, vifaa na nguo zenye vijidudu"], answer: 3, why: "Kugusana moja kwa moja na vitu vyenye vijidudu hueneza virusi." },
      { objective: "O5", q: "Ni hatua ipi ya usalama wa kibiolojia ya gharama ndogo?", options: ["Kuwaruhusu wageni kupita ndani ya banda la kuku", "Kushiriki makreti na mashamba mengine bila kuyasafisha", "Kunawa mikono na kutumia dawa ya kuchovya miguu kabla ya kuingia", "Kuwaacha ndege wa porini wale kwenye chombo cha chakula"], answer: 2, why: "Usafi rahisi huzuia vijidudu kuingia." },
      { objective: "O5", q: "Kwa kuku wa kienyeji, FAO inaeleza chanjo za Newcastle ambazo:", options: ["Huchanganywa kwenye saruji", "Ni za ng'ombe tu", "Hazihitajiki kamwe", "Hutolewa kwa tone la jichoni na zinastahimili joto zaidi"], answer: 3, why: "Chanjo zinazostahimili joto kama I-2 zinafaa makundi ya kuku wa kienyeji." },
      { objective: "O5", q: "Baada ya mlipuko wa Newcastle, WOAH inashauri kuacha banda lililosafishwa bila kuku kwa:", options: ["Siku 1", "Siku 21", "Saa 2", "Linaweza kujazwa kuku mara moja"], answer: 1, why: "WOAH inataja siku 21 bila kuku kabla ya kuweka kuku wapya." },
      { objective: "O6", q: "Ni ipi dalili ya minyoo kwa mbuzi?", options: ["Kukua haraka na nywele zinazong'aa", "Kope nyekundu zinazong'aa", "Kula zaidi ya kawaida na kuongezeka uzito", "Ukuaji duni, tumbo kubwa na kope zilizopauka"], answer: 3, why: "Minyoo hufyonza damu na virutubisho, na kusababisha dalili hizi." },
      { objective: "O6", q: "Unaamuaje kipimo cha dawa ya minyoo?", options: ["Kubahatisha kwa macho", "Kutumia nusu ili kuokoa pesa", "Kufuata lebo au daktari wa mifugo", "Kutumia mara mbili ili uwe na uhakika"], answer: 2, why: "Vipimo visivyo sahihi humdhuru mnyama au hujenga usugu." },
      { objective: "O6", q: "Ng'ombe alitibiwa jana na kipindi cha kusubiri hakijaisha. Na maziwa yake je?", options: ["Kuyauza kama kawaida", "Usiyauze wala kuyanywa hadi kipindi cha kusubiri kiishe", "Kuyachanganya na maziwa mengine", "Kuyachemsha na kuyauza"], answer: 1, why: "Maziwa wakati wa kipindi cha kusubiri yanaweza kubeba mabaki ya dawa." },
      { objective: "O6", q: "Hali ipi inamaanisha unapaswa kumpigia daktari wa mifugo mara moja?", options: ["Wanyama kadhaa kuugua kwa wakati mmoja", "Mnyama anayecheua", "Kuku wanaotaga kama kawaida", "Ndama anayekunywa vizuri"], answer: 0, why: "Wanyama kadhaa kuugua kunaweza kumaanisha ugonjwa unaoenea." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 3, 6, 7, 9, 11, 12, 16, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na ukague tena.",
    criteria: [
      { name: "Ukaguzi wa kila siku", objective: "O1", notYet: "Hakuna ukaguzi wa kila siku, au hakuna dalili za hatari zilizoorodheshwa.", meets: "Ukaguzi wa kila siku wakati wa kulisha au kukamua, pamoja na dalili kuu za hatari na la kufanya.", exceeds: "Unarekebisha ukaguzi kwa kila aina ya mnyama anayefugwa." },
      { name: "Chakula, maji na mabanda", objective: "O2", notYet: "Hakuna mpango wa kiangazi, au sheria za mabanda na usafi hazipo.", meets: "Chakula na maji safi mwaka mzima pamoja na mpango wa kiangazi, na sheria mbili za mabanda na usafi.", exceeds: "Unajumuisha kupanda au kuhifadhi malisho na kuwaweka wanyama wapya kando." },
      { name: "Ratiba ya chanjo", objective: "O4", notYet: "Hakuna ratiba, au ratiba isiyokubaliwa na daktari wa mifugo.", meets: "Ratiba iliyoandikwa na daktari wa mifugo aliyesajiliwa, pamoja na jinsi chanjo zinavyowekwa baridi na kabla ya tarehe ya mwisho.", exceeds: "Inataja kampeni za serikali na jina na namba ya daktari wa mifugo." },
      { name: "Usalama wa kibiolojia", objective: "O5", notYet: "Hakuna sheria za usalama wa kibiolojia.", meets: "Sheria za usalama wa kibiolojia, na kwa kuku, chanjo ya Newcastle na hatua za kuchukua kuku wakifa ghafla.", exceeds: "Hatua za gharama ndogo kama kunawa mikono na dawa ya kuchovya miguu zipo." },
      { name: "Vimelea, kumbukumbu na daktari wa mifugo", objective: "O6", notYet: "Hakuna kumbukumbu, au vipimo vinabahatishwa.", meets: "Udhibiti wa vimelea uliopangwa na daktari wa mifugo, kumbukumbu za tiba pamoja na vipindi vya kusubiri, na dalili zinazomaanisha umpigie daktari mara moja.", exceeds: "Kumbukumbu pia zinajumuisha kuzaliwa, uzito au uzalishaji na vifo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya mpango wa afya",
      "Wanafunzi wanaoripoti kuwa na ratiba ya chanjo iliyoandikwa na daktari wa mifugo aliyesajiliwa ndani ya siku 60 (utafiti wa ufuatiliaji)",
      "Mabadiliko katika vifo vya wanyama au kuku na katika uzalishaji wa maziwa au mayai yanayoripotiwa na wanafunzi baada ya miezi sita",
      "Wanafunzi wanaoripoti kuweka kumbukumbu za tiba na kuheshimu vipindi vya kusubiri"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari au jedwali kwenye simu kwa kumbukumbu",
      "Namba ya simu ya daktari wa mifugo aliyesajiliwa au afisa wa afya ya mifugo",
      "Kuweza kuwafikia wanyama wa mwanafunzi mwenyewe kwa ukaguzi wa kila siku",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuandika mpango wa afya"
    ],
    facilitatorNotes: [
      "Katika kikundi cha wakulima: fanyeni jaribio la awali pamoja, kisha fanyeni mazoezi ya ukaguzi wa afya wa kila siku kwa wanyama halisi.",
      "Mwalike daktari wa mifugo aliyesajiliwa au afisa wa afya ya mifugo aeleze magonjwa na chanjo za eneo hilo; usitoe vipimo vya dawa wewe mwenyewe.",
      "Nawa mikono baada ya kushika wanyama, na kamwe usishike wanyama waliokufa ghafla wakitoa damu.",
      "Msaidie kila mwanafunzi kuandika jina na namba ya daktari wake wa mifugo kabla hajaondoka.",
      "Pima mpango wa afya kwa rubriki na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
