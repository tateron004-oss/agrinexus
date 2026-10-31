"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-farm-accounting-investment.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CBK = { name: "Benki Kuu ya Kenya (Central Bank of Kenya; benki, benki za mikopo midogo na watoa mikopo ya kidijitali wenye leseni)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Benki Kuu ya Nigeria (Central Bank of Nigeria; benki na benki za mikopo midogo zenye leseni)", url: "https://www.cbn.gov.ng" };
const BCEAO = { name: "BCEAO, Benki Kuu ya Nchi za Afrika Magharibi (sheria za benki na mikopo midogo katika nchi za XOF)", url: "https://www.bceao.int" };

module.exports = {
  id: "agri-farm-accounting-investment-sw",
  lang: "sw",
  translationOf: "agri-farm-accounting-investment",
  category: "Agriculture (Africa)",
  name: "Uhasibu wa Shamba na Usimamizi wa Uwekezaji",
  skills: "Kutenganisha gharama za kudumu na zinazobadilika, Kukokotoa gharama kwa kilo, gunia au lita, Kuweka daftari la matumizi, Kupanga mtiririko wa pesa kila mwezi, Kutafuta bei ya kurudisha gharama, Kupima uwekezaji kwa muda wa kurudisha na faida rahisi",
  outcome: "kujua gharama halisi ya kuzalisha kilo, gunia au lita moja, kuandika kila matumizi, kupanga pesa zako mwezi kwa mwezi, kupata bei ya chini kabisa unayoweza kuuza bila hasara, na kupima kama uwekezaji kama pampu ya jua, kitalu nyumba (greenhouse) au ng'ombe zaidi utarudisha pesa zake.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wakulima wa kibiashara wanaokua, mameneja wa mashamba, vijana wajasiriamali wa kilimo na maafisa ugani nchini Kenya, Nigeria, Ghana, Senegal, Cote d'Ivoire na kote Afrika ambao tayari wanaweka baadhi ya kumbukumbu na wanataka kufanya maamuzi bora zaidi ya pesa.",
    "Inajengwa juu ya kozi \"Biashara ya Kilimo na Usimamizi wa Shamba\", inayofundisha kumbukumbu rahisi na faida ghafi. Hapa unaenda mbele zaidi. Sura ya 1 inahusu kujua gharama zako: gharama za kudumu na zinazobadilika, gharama ya kuzalisha kipimo kimoja, na daftari la matumizi. Sura ya 2 inahusu kupanga na kuwekeza: mpango wa mtiririko wa pesa wa kila mwezi, bei ya kurudisha gharama, na kupima uwekezaji kwa muda wake wa kurudisha na faida rahisi.",
    "Mifano yote ya pesa ni namba za kubuni kwa KES, NGN, GHS na XOF za kuonyesha njia tu; tumia bei zako. Kozi hii haitoi ushauri wa uwekezaji. Kabla ya kununua kitu kikubwa au kuchukua mkopo, linganisha ofa, soma kila mkataba wote, na zungumza na mshauri unayemwamini kama chama chako cha ushirika, SACCO (chama cha akiba na mikopo), afisa ugani au mhasibu. Kila somo linaishia na zoezi fupi na jaribio dogo la maswali 2, kila sura na jaribio la maarifa, na kozi na mtihani wa maswali 20."
  ],
  finalTask: "Tengeneza karatasi ya gharama na uwekezaji ya shamba kwa mradi mmoja shambani kwako (au shamba la mfano): orodha ya gharama zake za kudumu na zinazobadilika kwa msimu mmoja, gharama kwa kilo, gunia, lita au yai, mwezi mmoja wa kuandika matumizi, mpango wa mtiririko wa pesa wa miezi 12 wenye salio zinazoendelea na miezi ya upungufu imewekwa alama, bei ya kurudisha gharama na mavuno ya kurudisha gharama ukilinganisha na bei unayotarajia, na muda wa kurudisha na faida rahisi ya uwekezaji mmoja unaoufikiria, pamoja na uamuzi wako na sababu zake.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa kibiashara wanaokua, mameneja wa mashamba, vijana wajasiriamali wa kilimo, viongozi wa vyama vya ushirika na maafisa ugani nchini Kenya, Nigeria, Ghana na Afrika Magharibi inayozungumza Kifaransa. Wengi wanalima mahindi, mihogo, mpunga, maharagwe, mboga, kahawa au kakao, au wanafuga ng'ombe wa maziwa, mbuzi, nguruwe, kuku au samaki.",
    startingPoint: "Wanaweza kujumlisha, kutoa, kuzidisha na kugawanya kwa kikokotoo cha simu. Wengi wanaweka baadhi ya kumbukumbu na wanajua takriban wanachotumia na kupata; baadhi wamesoma somo la faida ghafi katika \"Biashara ya Kilimo na Usimamizi wa Shamba\". Wachache wanajua gharama yao kwa kilo au lita, bei yao ya kurudisha gharama, au jinsi ya kupima kama kifaa kitarudisha pesa zake.",
    gap: "Mara nyingi wakulima wanauza chini ya gharama ya kuzalisha, wanaishiwa pesa kabla ya mavuno hata katika mwaka mzuri, au wananunua vifaa na mifugo ambayo hairudishi bei yake. Kujua gharama kwa kipimo, bei ya kurudisha gharama na muda wa kurudisha kunawawezesha kukataa bei mbaya, kupanga pesa na kufanya uwekezaji wenye faida, na kunawapa wakopeshaji na wanunuzi namba wanazoweza kuziamini.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la pesa linaelezwa",
      "Vifaa: kikokotoo cha simu na daftari vinatosha; jedwali (spreadsheet) la simu si lazima",
      "Muda: masomo ya dakika 5 hadi 6 yanayoingia kati ya kazi za shamba",
      "Pesa: namba zote ni mifano; bei, riba na ruzuku hubadilika na lazima zitoke eneo la mwanafunzi mwenyewe",
      "Hakuna ushauri wa uwekezaji: wanafunzi wanalinganisha njia na kumuuliza mshauri wanayemwamini kabla ya maamuzi makubwa"
    ],
    prerequisites: "Hakuna, lakini \"Biashara ya Kilimo na Usimamizi wa Shamba\" (kumbukumbu na faida ghafi) ni hatua ya kwanza yenye msaada."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya gharama za mradi mmoja kwa msimu na mavuno yake", action: "kupanga gharama kuwa za kudumu na zinazobadilika na kukokotoa gharama ya kuzalisha kilo, gunia, lita au yai moja", standard: "kila gharama ikiwa katika kundi sahihi na gharama kwa kipimo ikiwa sahihi hadi shilingi (au kipimo cha pesa) nzima iliyo karibu" },
    { id: "O2", condition: "Ukitumia daftari au jedwali la simu", action: "kuandika kila matumizi ya shamba kwa mwezi mmoja kwa tarehe, aina na mradi, na kuyajumlisha kwa kila aina", standard: "bila siku zinazokosekana na jumla zikilingana na kumbukumbu zako za pesa taslimu na pesa za simu" },
    { id: "O3", condition: "Ukipewa pesa zinazotarajiwa kuingia na kutoka kwa kila mwezi wa mwaka", action: "kutengeneza mpango wa mtiririko wa pesa wa kila mwezi wenye salio la mwanzo na la mwisho na kuweka alama miezi ya upungufu", standard: "kila salio la mwisho likipelekwa mwezi unaofuata na angalau hatua moja imepangwa kwa kila mwezi wa upungufu" },
    { id: "O4", condition: "Ukipewa jumla ya gharama, mavuno yanayotarajiwa na bei ya mnunuzi", action: "kukokotoa bei ya kurudisha gharama na mavuno ya kurudisha gharama na kuamua kama ofa inalipia gharama zako", standard: "sahihi hadi kipimo kizima cha pesa au cha mavuno kilicho karibu" },
    { id: "O5", condition: "Ukipewa gharama ya uwekezaji na mapato na gharama za ziada unaotarajiwa kuleta", action: "kukokotoa muda wake wa kurudisha na faida rahisi na kuandika uamuzi pamoja na sababu zako", standard: "namba zikiwa sahihi na angalau hatari mbili zimekaguliwa (maisha ya kifaa, gharama ya mkopo au mavuno dhaifu zaidi)" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujua gharama zako",
      lessons: [
        {
          title: "Gharama za kudumu na zinazobadilika",
          objectives: ["O1"],
          minutes: 5,
          goal: "Panga gharama za mradi mmoja kuwa za kudumu na zinazobadilika, pamoja na gharama ya kila mwaka ya zana na majengo.",
          text: [
            "Gharama zinazobadilika zinapanda au kushuka kulingana na kiasi unachozalisha: mbegu, mbolea, chakula cha mifugo, vibarua, huduma za daktari wa mifugo, magunia, mafuta na usafiri. Ukipanda nusu ya ardhi au kufuga nusu ya kuku, gharama hizi zinashuka.",
            "Gharama za kudumu zinabaki karibu sawa bila kujali unachozalisha msimu huo: kodi ya ardhi, mshahara wa mfanyakazi wa kudumu, leseni ya maji, bima, na kuchakaa kwa zana, pampu, mabanda na uzio. Kuchakaa huko kunaitwa uchakavu (depreciation). Njia rahisi ya kuukokotoa: (bei uliyolipa - thamani iliyobaki mwishoni) / miaka kitakayodumu. Mfano (namba za kubuni kwa shilingi za Kenya): bomba la kunyunyizia la mgongoni linagharimu 6,000, litadumu miaka 5 na halitakuwa na thamani mwishoni, kwa hiyo linaligharimu shamba 1,200 kwa mwaka.",
            "Zana au jengo likitumika kwa miradi kadhaa, gawa gharama yake ya mwaka kati yao, kwa mfano kwa ardhi au muda ambao kila mmoja unatumia. Hesabu pia kazi ya familia yako, kwa kiwango cha kibarua cha eneo lako, ili uone gharama halisi ya muda wako."
          ],
          steps: ["Chagua mradi mmoja, kama mahindi, samaki aina ya tilapia au ng'ombe wa maziwa.", "Orodhesha kila gharama kwa msimu mmoja au mwaka mmoja.", "Weka alama V (inabadilika: inategemea kiasi unachozalisha) au F (ya kudumu: inabaki sawa) kwa kila moja.", "Kwa zana, pampu na majengo, kokotoa uchakavu: (bei - thamani iliyobaki) / miaka ya kudumu.", "Gawa gharama za kudumu kati ya miradi inayotumia kitu kimoja."],
          words: [["Gharama inayobadilika", "gharama inayopanda au kushuka kulingana na kiasi unachozalisha, kama mbegu au chakula cha mifugo."], ["Gharama ya kudumu", "gharama inayobaki karibu sawa bila kujali unachozalisha msimu huo, kama kodi ya ardhi."], ["Uchakavu (depreciation)", "sehemu ya bei ya zana au jengo inayotumika kila mwaka kadiri linavyochakaa."], ["Mradi", "shughuli moja shambani, kama mahindi, kuku au ng'ombe wa maziwa."]],
          slides: [
            { title: "Gharama zinazobadilika", bullets: ["Zinabadilika kulingana na kiasi unachozalisha", "Mbegu, mbolea, chakula cha mifugo, vibarua, daktari wa mifugo, magunia, mafuta", "Ukizalisha kidogo, zinashuka"] },
            { title: "Gharama za kudumu", bullets: ["Zinabaki karibu sawa bila kujali unachozalisha", "Kodi ya ardhi, mishahara ya kudumu, leseni, bima", "Kuchakaa kwa zana na majengo"] },
            { title: "Uchakavu", bullets: ["(Bei - thamani iliyobaki) / miaka ya kudumu", "Bomba la kunyunyizia 6,000 KES, miaka 5: 1,200 kwa mwaka (mfano)", "Gawa kati ya miradi inayolitumia"] },
            { title: "Usisahau", bullets: ["Kazi ya familia kwa kiwango cha kibarua cha eneo lako", "Gharama ndogo: magunia, muda wa maongezi kwa wanunuzi, usafiri"] }
          ],
          tryIt: "Chagua mradi mmoja shambani kwako. Orodhesha angalau gharama nane za msimu uliopita, weka alama V au F kwa kila moja, na ukokotoe uchakavu wa mwaka wa zana au jengo moja unalotumia kwa mradi huo.",
          youCanNow: "kupanga gharama za mradi kuwa za kudumu na zinazobadilika na kukokotoa gharama ya kila mwaka ya zana na majengo yako.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi ni gharama inayobadilika kwa mradi wa kuku?", options: ["Kuchakaa kwa banda la kuku kila mwaka", "Kodi ya kiwanja ambacho banda limejengwa", "Chakula cha kuku", "Mshahara wa mwezi wa mfanyakazi wa kudumu"], answer: 2, why: "Chakula kinapanda na kushuka kulingana na idadi ya kuku unaofuga, kwa hiyo ni gharama inayobadilika." },
            { objective: "O1", q: "Pampu inagharimu 50,000, itadumu miaka 10 na thamani yake itakuwa 0 mwishoni. Uchakavu wake ni:", options: ["5,000 kwa mwaka", "50,000 kwa mwaka", "500 kwa mwaka", "10,000 kwa mwaka"], answer: 0, why: "(50,000 - 0) / miaka 10 = 5,000 kwa mwaka." }
          ]
        },
        {
          title: "Gharama ya kuzalisha kilo, gunia au lita moja",
          objectives: ["O1"],
          minutes: 6,
          goal: "Kokotoa gharama ya kuzalisha kilo, gunia, lita au yai moja kwa mradi mmoja.",
          text: [
            "Gharama kwa kipimo = jumla ya gharama kwa kipindi / vipimo vilivyozalishwa katika kipindi hicho. Jumla ya gharama ni gharama zinazobadilika pamoja na sehemu ya gharama za kudumu inayohusu mradi huu. Kipimo ni jinsi unavyouza: kilo ya nyanya, gunia la kilo 100 la mahindi, lita ya maziwa, trei ya mayai, kilo ya tilapia.",
            "Mfano (namba za kubuni kwa shilingi za Kenya), ng'ombe mmoja wa maziwa kwa mwezi mmoja: chakula 9,500, huduma za daktari wa mifugo na uzalishaji 1,000, kazi 3,000, sehemu ya gharama za kudumu (banda, mashine ya kukata majani, maji) 1,500. Jumla 15,000. Ng'ombe alitoa lita 300. Gharama kwa lita = 15,000 / 300 = shilingi 50. Mnunuzi wa maziwa akilipa chini ya 50, kila lita inapoteza pesa.",
            "Mfano (namba za kubuni kwa naira), hekta moja ya mahindi nchini Nigeria: gharama zinazobadilika 600,000, sehemu ya gharama za kudumu 150,000, jumla 750,000, mavuno magunia 30 ya kilo 100. Gharama kwa gunia = 750,000 / 30 = 25,000, yaani naira 250 kwa kilo. Ikokotoe kila msimu: mavuno yakishuka au bei za pembejeo zikipanda, gharama kwa kipimo inapanda pia."
          ],
          steps: ["Chagua kipimo unachouzia: kilo, gunia, lita, yai au trei.", "Jumlisha gharama zinazobadilika kwa kipindi hicho.", "Ongeza sehemu ya gharama za kudumu ya mradi huu.", "Hesabu vipimo vilivyozalishwa katika kipindi hicho hicho.", "Gharama kwa kipimo = jumla ya gharama / vipimo vilivyozalishwa.", "Linganisha na bei wanayolipa wanunuzi."],
          words: [["Gharama kwa kipimo", "gharama yako ya kuzalisha kilo, gunia, lita au yai moja: jumla ya gharama ikigawanywa kwa vipimo vilivyozalishwa."], ["Kipimo", "kiasi unachouzia, kama kilo, gunia la kilo 100 au lita."]],
          slides: [
            { title: "Kanuni", bullets: ["Gharama kwa kipimo = jumla ya gharama / vipimo vilivyozalishwa", "Jumla ya gharama = zinazobadilika + sehemu ya za kudumu", "Tumia kipimo unachouzia"] },
            { title: "Ng'ombe wa maziwa, mwezi mmoja (mfano KES)", bullets: ["Chakula 9,500 + daktari 1,000 + kazi 3,000 + za kudumu 1,500 = 15,000", "Lita 300: 15,000 / 300 = 50 kwa lita", "Mnunuzi akilipa chini ya 50, kila lita ni hasara"] },
            { title: "Mahindi, hekta moja (mfano NGN)", bullets: ["Jumla ya gharama 750,000; mavuno magunia 30", "750,000 / 30 = 25,000 kwa gunia = 250 kwa kilo"] },
            { title: "Ikokotoe kila msimu", bullets: ["Mavuno kidogo = gharama kubwa kwa kipimo", "Bei za pembejeo zikipanda = gharama kubwa kwa kipimo"] }
          ],
          tryIt: "Tumia gharama za Somo la 1. Zijumlishe, gawanya kwa vipimo ulivyozalisha, na uandike gharama yako kwa kilo, gunia, lita au yai. Kisha andika kando yake bei ya mwisho ambayo mnunuzi alikupa.",
          youCanNow: "kukokotoa gharama ya kuzalisha kipimo kimoja cha unachouza na kuilinganisha na bei unayopewa.",
          quickCheck: [
            { objective: "O1", q: "Jumla ya gharama ya shamba la nyanya ni 40,000 na lilizalisha kilo 800. Gharama kwa kilo ni ngapi?", options: ["800", "40", "500", "50"], answer: 3, why: "40,000 / kilo 800 = 50 kwa kilo." },
            { objective: "O1", q: "Mavuno yako yanashuka lakini gharama zinabaki sawa. Nini kinatokea kwa gharama yako kwa kipimo?", options: ["Inabaki sawa", "Inapanda", "Inashuka", "Inakuwa sifuri"], answer: 1, why: "Gharama ile ile ikigawanywa kwa vipimo vichache inaleta gharama kubwa zaidi kwa kila kipimo." }
          ]
        },
        {
          title: "Daftari la matumizi unaloweza kulitunza",
          objectives: ["O2"],
          minutes: 5,
          goal: "Andaa daftari la matumizi na uandike kila matumizi ya shamba kwa mwezi mmoja.",
          text: [
            "Daftari la matumizi ni orodha ya kila malipo ya shamba yenye safu zile zile kila mara: tarehe, ulichonunua, aina (mbegu, mbolea, chakula cha mifugo, kazi, daktari wa mifugo, mafuta, usafiri, matengenezo, kodi), mradi upi, F au V, kiasi, ulivyolipa (pesa taslimu au pesa za simu) na kama ulihifadhi risiti.",
            "Andika kila matumizi siku hiyo hiyo. Mwisho wa mwezi, jumlisha kila aina na kila mradi. Utaona haraka pesa zinakoenda. Mfano (namba za kubuni kwa cedi za Ghana), shamba la kuku wa mayai kwa mwezi mmoja: chakula 4,200, kazi 1,200, daktari wa mifugo na chanjo 400, usafiri 300, matengenezo 150, jumla 6,250. Chakula ni theluthi mbili ya gharama, kwa hiyo akiba bora zaidi itatoka kwenye chakula.",
            "Daftari la karatasi linafanya kazi vizuri. Kwenye simu, jedwali la bure kama Google Sheets au Microsoft Excel linaweza kukujumlishia kila aina kwa kanuni ya SUMIF. Kagua daftari lako dhidi ya taarifa zako za pesa taslimu na pesa za simu kila wiki, ili kisikosekane kitu."
          ],
          steps: ["Tengeneza safu: tarehe, kitu, aina, mradi, F au V, kiasi, ulivyolipa, risiti.", "Andika kila matumizi siku hiyo hiyo.", "Kila wiki, lilinganishe na taarifa yako ya pesa taslimu na pesa za simu.", "Mwisho wa mwezi, jumlisha kila aina na kila mradi.", "Tafuta aina kubwa zaidi na njia moja ya kuipunguza."],
          words: [["Daftari la matumizi", "orodha ya kila malipo ya shamba yenye safu zile zile, ili uweze kujumlisha kwa aina."], ["Aina", "kundi la gharama zinazofanana, kama chakula cha mifugo, kazi au usafiri."], ["Risiti", "karatasi au ujumbe unaothibitisha kuwa ulilipa."]],
          slides: [
            { title: "Safu zile zile kila mara", bullets: ["Tarehe, kitu, aina, mradi", "Ya kudumu au inayobadilika, kiasi", "Pesa taslimu au pesa za simu, risiti imehifadhiwa?"] },
            { title: "Jumla za mwisho wa mwezi (mfano GHS, kuku wa mayai)", bullets: ["Chakula 4,200, kazi 1,200, daktari 400", "Usafiri 300, matengenezo 150: jumla 6,250", "Chakula ni theluthi mbili: anza kuweka akiba hapo"] },
            { title: "Liwe la kweli", bullets: ["Andika siku hiyo hiyo", "Kagua kila wiki dhidi ya taarifa za pesa za simu", "Daftari au jedwali la simu (SUMIF)"] }
          ],
          tryIt: "Andaa daftari lako leo lenye safu zote nane. Jaza kila matumizi ya shamba ya siku saba zilizopita ukitumia kumbukumbu yako, risiti na taarifa ya pesa za simu, kisha uyajumlishe kwa aina.",
          youCanNow: "kutunza daftari la matumizi, kulijumlisha kwa aina na kwa mradi, na kujua pesa zako zinakoenda.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini uongeze safu ya mradi ambao kila matumizi yanahusu?", options: ["Ili uone kila mradi unagharimu kiasi gani kweli", "Kwa sababu benki zinataka hivyo kila siku", "Ili orodha iwe ndefu zaidi", "Ili usihitaji risiti"], answer: 0, why: "Jumla kwa mradi zinaingia moja kwa moja kwenye gharama kwa kipimo ya kila mradi." },
            { objective: "O2", q: "Jumla ya daftari lako ni ndogo kuliko pesa zilizotoka kwenye pochi yako ya pesa za simu mwezi huu. Unafanya nini?", options: ["Kupuuza; tofauti ndogo hazijalishi", "Kufuta daftari na kuanza upya mwaka ujao", "Kupitia taarifa na kuongeza matumizi yaliyokosekana", "Kuongeza namba ya kubuni ili zilingane"], answer: 2, why: "Taarifa inaonyesha ulicholipa kweli, kwa hiyo inakusaidia kupata na kuongeza yaliyokosekana." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujua gharama zako",
        questions: [
          { objective: "O1", q: "Ipi ni gharama ya kudumu kwa shamba la mahindi?", options: ["Mbegu", "Mbolea", "Vibarua wa kupalilia", "Kodi ya ardhi ya mwaka"], answer: 3, why: "Kodi inabaki sawa bila kujali unachopanda kwenye ardhi, kwa hiyo ni ya kudumu." },
          { objective: "O1", q: "Mashine ya kukata majani inagharimu 30,000, inadumu miaka 6 na thamani yake ni 0 mwishoni. Uchakavu wake wa mwaka ni upi?", options: ["5,000", "6,000", "30,000", "180,000"], answer: 0, why: "(30,000 - 0) / miaka 6 = 5,000 kwa mwaka." },
          { objective: "O1", q: "Jumla ya gharama ya mradi wa nguruwe ni 90,000 na uliuza kilo 600 za nyama. Gharama kwa kilo ni ngapi?", options: ["600", "150", "90", "1,500"], answer: 1, why: "90,000 / kilo 600 = 150 kwa kilo." },
          { objective: "O2", q: "Unapaswa kuandika matumizi kwenye daftari lini?", options: ["Mwisho wa msimu", "Ukiwa na risiti tu", "Siku hiyo hiyo unayolipa", "Kwa malipo makubwa tu"], answer: 2, why: "Kumbukumbu za siku hiyo hiyo zinakuwa kamili na sahihi." },
          { objective: "O2", q: "Baada ya mwezi wa kuandika, chakula ni 65% ya gharama. Hatua ipi inayofuata ina manufaa zaidi?", options: ["Kutafuta kwanza njia za kupunguza gharama au upotevu wa chakula", "Kuacha kuandika kwa sababu jibu liko wazi", "Kupunguza kwanza aina ndogo zaidi", "Kununua chakula zaidi ili upate punguzo, bei yoyote ile"], answer: 0, why: "Aina kubwa zaidi ndiko akiba inaleta tofauti kubwa zaidi." }
        ]
      }
    },
    {
      name: "Sura 2: Kupanga na kuwekeza",
      lessons: [
        {
          title: "Mpango wa mtiririko wa pesa wa kila mwezi wenye salio",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tengeneza mpango wa mtiririko wa pesa wa miezi 12 wenye salio la mwanzo na la mwisho na uweke alama miezi ya upungufu.",
          text: [
            "Mpango wa mtiririko wa pesa unaonyesha, mwezi kwa mwezi, pesa unazotarajia kuwa nazo. Kwa kila mwezi: salio la mwanzo (pesa unazoanza nazo) + pesa zinazoingia - pesa zinazotoka = salio la mwisho. Salio la mwisho linakuwa salio la mwanzo la mwezi unaofuata.",
            "Mfano (namba za kubuni kwa cedi za Ghana), shamba la mahindi na kuku. Machi: mwanzo 3,000 + kuingia 500 - kutoka 2,000 = mwisho 1,500. Aprili: mwanzo 1,500 + kuingia 500 - kutoka 2,500 = mwisho -500. Salio la mwisho lenye alama ya kutoa (minus) ni upungufu: hutaweza kulipa kila kitu mwezi huo usipopanga.",
            "Kwa kila mwezi wa upungufu, panga hatua kabla haujafika: weka akiba kutoka mavuno yaliyopita, sogeza ununuzi hadi mwezi wa baadaye, uza mazao kidogo kidogo, ongeza mradi mdogo unaoleta pesa mwezi huo (mayai, mboga, samaki), panga mkopo wa pembejeo, au kubaliana mapema mkopo mdogo utakaolipwa baada ya mavuno. Sasisha mpango kila mwezi kwa kilichotokea kweli."
          ],
          steps: ["Tengeneza safu 12 za miezi na mistari minne: mwanzo, pesa zinazoingia, pesa zinazotoka, mwisho.", "Weka pesa ulizo nazo sasa kama salio la mwanzo la kwanza.", "Jaza pesa zinazotarajiwa kuingia na kutoka kwa kila mwezi.", "Mwisho = mwanzo + kuingia - kutoka; lipeleke kuwa mwanzo wa mwezi unaofuata.", "Zungushia duara kila salio la mwisho lenye minus.", "Andika hatua moja kwa kila mwezi uliozungushiwa na usasishe kila mwezi."],
          words: [["Salio la mwanzo", "pesa ulizo nazo mwanzoni mwa mwezi."], ["Salio la mwisho", "pesa unazotarajia mwishoni mwa mwezi: mwanzo + pesa zinazoingia - pesa zinazotoka."], ["Upungufu", "mwezi ambao pesa zinazotoka ni nyingi kuliko pesa ulizo nazo."]],
          slides: [
            { title: "Mstari mmoja wa hesabu", bullets: ["Mwanzo + pesa zinazoingia - pesa zinazotoka = mwisho", "Mwisho unakuwa mwanzo wa mwezi unaofuata"] },
            { title: "Mfano (GHS, namba za kubuni)", bullets: ["Machi: 3,000 + 500 - 2,000 = 1,500", "Aprili: 1,500 + 500 - 2,500 = -500", "Minus = upungufu: panga sasa"] },
            { title: "Kurekebisha upungufu", bullets: ["Weka akiba kutoka mavuno; sogeza ununuzi baadaye", "Uza kidogo kidogo; ongeza mradi unaoleta pesa wakati huo", "Mkopo wa pembejeo au mkopo mdogo uliokubaliwa mapema"] },
            { title: "Uendelee kuutumia", bullets: ["Andika kilichotokea kweli kila mwezi", "Sasisha miezi inayokuja"] }
          ],
          tryIt: "Tengeneza mpango wako wa mtiririko wa pesa wa miezi 12 ukianza na pesa ulizo nazo leo. Kokotoa kila salio la mwisho, zungushia duara miezi ya upungufu, na uandike hatua moja kwa kila mmoja.",
          youCanNow: "kutengeneza mpango wa mtiririko wa pesa wa kila mwezi wenye salio zinazoendelea, kuona mapema miezi ya upungufu na kupanga la kufanya.",
          quickCheck: [
            { objective: "O3", q: "Salio la mwanzo 2,000, pesa zinazoingia 1,000, pesa zinazotoka 2,500. Salio la mwisho ni lipi?", options: ["5,500", "-500", "3,000", "500"], answer: 3, why: "2,000 + 1,000 - 2,500 = 500." },
            { objective: "O3", q: "Mpango wako unaonyesha upungufu mwezi Agosti. Unapaswa kupanga la kufanya lini?", options: ["Sasa, miezi kabla ya Agosti", "Agosti, bili zikifika", "Baada ya mavuno", "Kamwe; litajitatua lenyewe"], answer: 0, why: "Kupanga mapema kunakupa muda wa kuweka akiba, kusogeza ununuzi au kupanga mkopo kwa masharti mazuri." }
          ]
        },
        {
          title: "Bei na mavuno ya kurudisha gharama",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kokotoa bei ya kurudisha gharama na mavuno ya kurudisha gharama na uyatumie kupima ofa ya mnunuzi.",
          text: [
            "Kurudisha gharama (break-even) ni mahali ambapo mapato yanalipia jumla ya gharama tu: hakuna faida wala hasara. Bei ya kurudisha gharama = jumla ya gharama / mavuno yanayotarajiwa. Ni bei ya chini kabisa unayoweza kukubali bila kupoteza pesa. Mavuno ya kurudisha gharama = jumla ya gharama / bei unayotarajia. Ni mavuno madogo kabisa yanayolipia gharama zako kwa bei hiyo.",
            "Mfano (namba za kubuni kwa naira), hekta ya mahindi ya Somo la 2: jumla ya gharama 750,000, mavuno yanayotarajiwa magunia 30. Bei ya kurudisha gharama = 750,000 / 30 = 25,000 kwa gunia. Mnunuzi anatoa 28,000: unapata 3,000 kwa gunia, au 90,000 kwa magunia 30. Mavuno ya kurudisha gharama kwa 28,000 = 750,000 / 28,000 = magunia 26.8, kwa hiyo unahitaji angalau magunia 27. Ukame ukipunguza mavuno yako hadi magunia 25, unapoteza pesa hata kwa bei hiyo.",
            "Tumia hesabu hii kabla ya kupanda (je, zao hili lina faida kwa bei zinazowezekana?) na mnunuzi anapotoa ofa (je, inalipia gharama zangu?). Tofauti kati ya bei inayotarajiwa na bei yako ya kurudisha gharama ni nafasi yako ya usalama: ikiwa kubwa, ndivyo unavyoweza kustahimili msimu mbaya au bei kushuka."
          ],
          steps: ["Jumlisha gharama zote za mradi (zinazobadilika + sehemu ya za kudumu).", "Bei ya kurudisha gharama = jumla ya gharama / mavuno yanayotarajiwa.", "Mavuno ya kurudisha gharama = jumla ya gharama / bei inayotarajiwa.", "Linganisha na ofa ya mnunuzi na mavuno yako yanayowezekana.", "Andika nafasi yako ya usalama: bei inayotarajiwa - bei ya kurudisha gharama."],
          words: [["Kurudisha gharama (break-even)", "mahali ambapo mapato yanalipia jumla ya gharama tu: hakuna faida, hakuna hasara."], ["Bei ya kurudisha gharama", "bei ya chini kabisa kwa kipimo inayolipia gharama zako: jumla ya gharama / mavuno."], ["Mavuno ya kurudisha gharama", "mavuno madogo kabisa yanayolipia gharama zako kwa bei fulani: jumla ya gharama / bei."], ["Nafasi ya usalama", "kiasi ambacho bei au mavuno yanaweza kushuka kabla hujapata hasara."]],
          slides: [
            { title: "Namba mbili za kurudisha gharama", bullets: ["Bei ya kurudisha gharama = jumla ya gharama / mavuno", "Mavuno ya kurudisha gharama = jumla ya gharama / bei"] },
            { title: "Mfano wa mahindi (NGN, namba za kubuni)", bullets: ["750,000 / magunia 30 = 25,000 kwa gunia", "Ofa 28,000: faida 3,000 kwa gunia, 90,000 kwa jumla", "Mavuno ya kurudisha gharama kwa 28,000: karibu magunia 27"] },
            { title: "Wakati wa kuitumia", bullets: ["Kabla ya kupanda: je, lina faida?", "Mnunuzi anapotoa ofa: je, inalipia gharama?", "Nafasi kubwa ya usalama = nafasi zaidi ya kustahimili msimu mbaya"] }
          ],
          tryIt: "Tumia jumla ya gharama na mavuno yanayotarajiwa ya mradi wako. Kokotoa bei ya kurudisha gharama na mavuno ya kurudisha gharama kwa bei ya leo, na uandike nafasi yako ya usalama. Je, ungekubali ofa ya mwisho uliyopata?",
          youCanNow: "kukokotoa bei na mavuno ya kurudisha gharama kwa mradi na kuyatumia kukubali au kukataa ofa.",
          quickCheck: [
            { objective: "O4", q: "Jumla ya gharama 120,000, mavuno yanayotarajiwa magunia 40. Bei ya kurudisha gharama ni ipi?", options: ["4,000 kwa gunia", "40 kwa gunia", "3,000 kwa gunia", "160,000 kwa gunia"], answer: 2, why: "120,000 / magunia 40 = 3,000 kwa gunia." },
            { objective: "O4", q: "Bei yako ya kurudisha gharama kwa maziwa ni 50 kwa lita. Mnunuzi anatoa 45. Hii inamaanisha nini?", options: ["Unapata faida ya 5 kwa kila lita", "Unapoteza karibu 5 kwa kila lita usipopunguza gharama au kupata mnunuzi bora", "Ofa ni ya haki kwa sababu iko karibu", "Kurudisha gharama hakuhusu maziwa"], answer: 1, why: "Bei iliyo chini ya bei ya kurudisha gharama inamaanisha kila lita unayouza inapoteza pesa." }
          ]
        },
        {
          title: "Kupima uwekezaji: muda wa kurudisha na faida rahisi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kokotoa muda wa kurudisha na faida rahisi ya uwekezaji na uamue kama una maana.",
          text: [
            "Uwekezaji ni pesa zinazotumika sasa ili kupata zaidi baadaye: pampu ya jua, kitalu nyumba (greenhouse), ghala la baridi, banda la nguruwe au ng'ombe zaidi. Kwanza kokotoa mapato halisi ya ziada kwa mwaka: pesa za ziada unazoleta ukitoa gharama za ziada za uendeshaji (mafuta, matengenezo, chakula cha mifugo, kazi, vipuri). Kisha: muda wa kurudisha = gharama ya uwekezaji / mapato halisi ya ziada kwa mwaka. Faida rahisi = mapato halisi ya ziada kwa mwaka / gharama ya uwekezaji x 100.",
            "Mfano (namba za kubuni kwa shilingi za Kenya), pampu ya jua inayowezesha zao la nyanya wakati wa kiangazi: gharama 120,000; mapato ya ziada 55,000 kwa mwaka ukitoa gharama za ziada 15,000 = mapato halisi ya ziada 40,000. Muda wa kurudisha = 120,000 / 40,000 = miaka 3. Faida rahisi = 40,000 / 120,000 x 100 = karibu 33% kwa mwaka. Mfano (namba za kubuni kwa faranga za CFA), kitalu nyumba nchini Senegal: gharama 3,000,000; mapato halisi ya ziada 600,000 kwa mwaka. Muda wa kurudisha = miaka 5; faida rahisi = 20% kwa mwaka.",
            "Kisha kagua hatari. Je, kitadumu kuliko muda wa kurudisha (plastiki ya kitalu nyumba na vipuri vya pampu huchakaa)? Ukikopa, je, gharama ya mkopo kwa mwaka ni ndogo kuliko faida, na unaweza kulipa kabla kifaa hakijarudisha pesa zake? Itakuwaje mavuno au bei zikiwa chini kwa 20% kuliko ulivyotarajia? Tumia namba za tahadhari, muulize msambazaji akuonyeshe wakulima wanaokitumia tayari, na zungumza na mshauri unayemwamini kabla ya kununua. Kozi hii inaeleza njia; haikuambii ununue nini."
          ],
          steps: ["Andika gharama yote: kifaa, usafirishaji, ufungaji, mafunzo.", "Kadiria mapato ya ziada kwa mwaka, ukitumia mavuno na bei za tahadhari.", "Toa gharama za ziada za uendeshaji ili upate mapato halisi ya ziada kwa mwaka.", "Muda wa kurudisha = gharama / mapato halisi ya ziada kwa mwaka.", "Faida rahisi = mapato halisi ya ziada / gharama x 100.", "Kagua maisha ya kifaa, gharama ya mkopo na hali mbaya zaidi kwa 20%; andika uamuzi wako."],
          words: [["Uwekezaji", "pesa zinazotumika sasa kwa kitu kinachopaswa kuleta zaidi baadaye."], ["Mapato halisi ya ziada", "pesa za ziada ambazo uwekezaji unaleta kila mwaka ukitoa gharama zake za ziada za uendeshaji."], ["Muda wa kurudisha", "miaka inayohitajika ili mapato halisi ya ziada yarudishe ulichotumia: gharama / mapato halisi ya ziada kwa mwaka."], ["Faida rahisi", "mapato halisi ya ziada kwa mwaka kama asilimia ya gharama."]],
          slides: [
            { title: "Namba mbili za kupima uwekezaji", bullets: ["Muda wa kurudisha = gharama / mapato halisi ya ziada kwa mwaka", "Faida rahisi = mapato halisi ya ziada / gharama x 100", "Mapato halisi ya ziada = mapato ya ziada - gharama za ziada"] },
            { title: "Pampu ya jua (mfano KES)", bullets: ["Gharama 120,000; mapato halisi ya ziada 40,000 kwa mwaka", "Muda wa kurudisha miaka 3; faida rahisi karibu 33%"] },
            { title: "Kitalu nyumba nchini Senegal (mfano XOF)", bullets: ["Gharama 3,000,000; mapato halisi ya ziada 600,000 kwa mwaka", "Muda wa kurudisha miaka 5; faida rahisi 20%"] },
            { title: "Kagua kabla ya kununua", bullets: ["Je, kitadumu kuliko muda wa kurudisha?", "Gharama ya mkopo ni ndogo kuliko faida?", "Bado kina faida mavuno au bei zikishuka kwa 20%?", "Zungumza na wanaokitumia na mshauri unayemwamini"] }
          ],
          sources: [CBK, CBN, BCEAO],
          tryIt: "Kazi ya mwisho: tengeneza karatasi yako ya gharama na uwekezaji ya shamba. Kwa mradi mmoja, weka gharama za kudumu na zinazobadilika, gharama kwa kipimo, mwezi mmoja wa kuandika matumizi, mpango wa mtiririko wa pesa wa miezi 12 wenye miezi ya upungufu imewekwa alama, bei na mavuno ya kurudisha gharama, na muda wa kurudisha na faida rahisi ya uwekezaji mmoja, pamoja na uamuzi wako na sababu zake.",
          youCanNow: "kupima kama uwekezaji utarudisha pesa zake, ukitumia muda wa kurudisha, faida rahisi na ukaguzi wa hatari.",
          quickCheck: [
            { objective: "O5", q: "Ghala la baridi linagharimu 200,000 na linaongeza mapato halisi ya ziada 50,000 kwa mwaka. Muda wa kurudisha ni upi?", options: ["Miaka 2", "Miaka 25", "Miaka 5", "Miaka 4"], answer: 3, why: "200,000 / 50,000 = miaka 4." },
            { objective: "O5", q: "Kifaa kinarudisha pesa zake kwa miaka 6 lakini msambazaji anasema kinadumu karibu miaka 4. Hii inakuambia nini?", options: ["Kitachakaa kabla ya kurudisha pesa zake, kwa hiyo huenda ni hasara", "Ni uwekezaji mzuri sana", "Muda wa kurudisha haujalishi kama kifaa ni kipya", "Unapaswa kukopa zaidi ili ununue viwili"], answer: 0, why: "Kifaa kikichakaa kabla ya muda wa kurudisha, mapato yake ya ziada hayalipii gharama yake kamwe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupanga na kuwekeza",
        questions: [
          { objective: "O3", q: "Katika mpango wa mtiririko wa pesa, salio la mwanzo la mwezi unaofuata ni lipi?", options: ["Sifuri kila wakati", "Salio la mwisho la mwezi huu", "Pesa zinazoingia mwezi unaofuata", "Faida ya mwaka"], answer: 1, why: "Kila mwezi unaanza na pesa ambazo mwezi uliopita uliishia nazo." },
          { objective: "O3", q: "Hatua ipi ina busara kwa mwezi wa upungufu unaouona ukija?", options: ["Kusubiri na kutumaini", "Kuuza mavuno yote siku ya kwanza", "Kusogeza ununuzi hadi mwezi wa baadaye au kuweka akiba kutoka mavuno kwa ajili yake", "Kuchukua mkopo wowote unaotolewa kwa ujumbe mfupi"], answer: 2, why: "Kusogeza matumizi au kuweka akiba mapema kunaziba pengo bila kukopa kwa hatari." },
          { objective: "O4", q: "Jumla ya gharama 300,000; mnunuzi analipa 6,000 kwa gunia. Mavuno ya kurudisha gharama ni yapi?", options: ["Magunia 50", "Magunia 60", "Magunia 5", "Magunia 1,800"], answer: 0, why: "300,000 / 6,000 = magunia 50." },
          { objective: "O5", q: "Mapato halisi ya ziada 30,000 kwa mwaka kwa uwekezaji wa 150,000. Faida rahisi ni ipi?", options: ["5%", "50%", "30%", "20%"], answer: 3, why: "30,000 / 150,000 x 100 = 20% kwa mwaka." },
          { objective: "O5", q: "Unakokotoaje mapato halisi ya ziada ya pampu mpya ya jua?", options: ["Kuhesabu mapato ya ziada tu", "Kutoa bei ya pampu kutoka mavuno ya msimu mmoja", "Mapato ya ziada inayoleta ukitoa gharama zake za ziada za uendeshaji", "Kumwomba muuzaji akuambie faida"], answer: 2, why: "Gharama za uendeshaji kama matengenezo na kazi zinapunguza kile pampu inachopata kweli." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uhasibu wa Shamba na Usimamizi wa Uwekezaji",
    questions: [
      { objective: "O1", q: "Gharama ipi inabadilika kulingana na kiasi unachozalisha?", options: ["Gharama inayobadilika, kama chakula cha mifugo", "Gharama ya kudumu, kama kodi ya ardhi", "Uchakavu wa banda", "Leseni ya maji"], answer: 0, why: "Gharama zinazobadilika zinapanda na kushuka pamoja na uzalishaji." },
      { objective: "O1", q: "Uzio uligharimu 40,000, utadumu miaka 8 na thamani yake ni 0 mwishoni. Uchakavu wake wa mwaka ni upi?", options: ["8,000", "320,000", "40,000", "5,000"], answer: 3, why: "(40,000 - 0) / 8 = 5,000 kwa mwaka." },
      { objective: "O1", q: "Kwa nini uhesabu kazi ya familia kwa kiwango cha kibarua cha eneo lako?", options: ["Kwa sababu ofisi ya kodi inataka hivyo", "Ili uone gharama halisi ya kuzalisha kila kipimo", "Ili shamba lionekane maskini zaidi", "Haihitajiki"], answer: 1, why: "Muda wa familia yako una thamani; kuuacha nje kunaficha gharama halisi." },
      { objective: "O1", q: "Jumla ya gharama ya bwawa la tilapia ni 60,000 na ulivuna kilo 300. Gharama kwa kilo ni ngapi?", options: ["300", "2,000", "200", "20"], answer: 2, why: "60,000 / kilo 300 = 200 kwa kilo." },
      { objective: "O1", q: "Bei za pembejeo zinapanda lakini mavuno yako yanabaki sawa. Gharama yako kwa kipimo:", options: ["Inapanda", "Inashuka", "Inabaki sawa", "Haiwezi kukokotolewa"], answer: 0, why: "Jumla kubwa zaidi ya gharama ikigawanywa kwa idadi ile ile ya vipimo inaleta gharama kubwa zaidi kwa kipimo." },
      { objective: "O2", q: "Seti ipi ya safu inatengeneza daftari la matumizi lenye manufaa?", options: ["Kiasi tu", "Kitu na rangi", "Jina la mnunuzi na bei", "Tarehe, kitu, aina, mradi, F au V, kiasi, ulivyolipa, risiti"], answer: 3, why: "Safu hizi zinakuwezesha kujumlisha gharama kwa aina na kwa mradi na kuzikagua." },
      { objective: "O2", q: "Unapaswa kukagua daftari lako dhidi ya taarifa yako ya pesa za simu mara ngapi?", options: ["Mara moja kwa mwaka", "Kila wiki", "Kamwe", "Mkopeshaji anapouliza tu"], answer: 1, why: "Ukaguzi wa kila wiki unanasa matumizi yaliyokosekana ungali unayakumbuka." },
      { objective: "O2", q: "Kanuni ipi ya jedwali inaweza kujumlisha matumizi yote ya aina moja?", options: ["SUMIF", "LEN", "TODAY", "UPPER"], answer: 0, why: "SUMIF inajumlisha viasi vinavyolingana na sharti, kama aina \"chakula\"." },
      { objective: "O3", q: "Salio la mwisho linakokotolewa kama:", options: ["Pesa zinazoingia - pesa zinazotoka tu", "Salio la mwanzo x pesa zinazoingia", "Salio la mwanzo + pesa zinazoingia - pesa zinazotoka", "Pesa zinazotoka - salio la mwanzo"], answer: 2, why: "Unaanza na salio la mwanzo, unaongeza zinazoingia na kutoa zinazotoka." },
      { objective: "O3", q: "Mwanzo 4,000, kuingia 0, kutoka 5,000. Salio la mwisho linakuambia nini?", options: ["Una 9,000", "Utakuwa na upungufu wa 1,000", "Una 1,000 za ziada", "Hakuna chenye manufaa"], answer: 1, why: "4,000 + 0 - 5,000 = -1,000, upungufu." },
      { objective: "O3", q: "Nini kinasaidia zaidi kwa mwezi wa upungufu kabla ya mavuno?", options: ["Kuupuuza hadi ufike", "Kutumia zaidi mwezi uliotangulia", "Kukopa kwa mkopeshaji ambaye hujamkagua", "Mradi mdogo unaoleta pesa mwezi huo, kama mayai au mboga"], answer: 3, why: "Mapato katika mwezi wa njaa yanaziba pengo bila deni la hatari." },
      { objective: "O3", q: "Kwa nini usasishe mpango wa mtiririko wa pesa kila mwezi?", options: ["Ili ulingane na kilichotokea kweli na uone miezi inayofuata vizuri zaidi", "Kwa sababu benki inaubadilisha", "Ili namba zionekane kubwa zaidi", "Hupaswi kuusasisha"], answer: 0, why: "Mpango unaofuata hali halisi unakuonya mapema kuhusu mapengo mapya." },
      { objective: "O4", q: "Bei ya kurudisha gharama ni:", options: ["Jumla ya gharama / mavuno yanayotarajiwa", "Mavuno yanayotarajiwa / jumla ya gharama", "Bei x mavuno", "Mapato - jumla ya gharama"], answer: 0, why: "Kugawanya jumla ya gharama kwa vipimo unavyotarajia kunaleta bei ya chini kabisa inayolipia gharama." },
      { objective: "O4", q: "Jumla ya gharama 200,000; mavuno yanayotarajiwa magunia 50. Mnunuzi anatoa 3,500 kwa gunia. Ukiangalia gharama, ukubali?", options: ["Ndiyo, 3,500 inalipia gharama", "Ndiyo, ofa yoyote ni nzuri", "Hapana, bei ya kurudisha gharama ni 4,000 kwa gunia", "Haiwezi kujulikana"], answer: 2, why: "200,000 / 50 = 4,000 kwa gunia, kwa hiyo 3,500 inapoteza 500 kwa gunia." },
      { objective: "O4", q: "Mavuno ya kurudisha gharama yanakuambia:", options: ["Bei bora unayoweza kupata", "Mavuno madogo kabisa yanayolipia gharama zako kwa bei fulani", "Kiasi cha mbolea cha kutumia", "Faida yako ya mwaka"], answer: 1, why: "Ni jumla ya gharama ikigawanywa kwa bei: mavuno unayohitaji ili kuepuka hasara." },
      { objective: "O4", q: "Bei inayotarajiwa 30,000 kwa gunia, bei ya kurudisha gharama 25,000 kwa gunia. Nafasi yako ya usalama ni:", options: ["55,000 kwa gunia", "25,000 kwa gunia", "30,000 kwa gunia", "5,000 kwa gunia"], answer: 3, why: "30,000 - 25,000 = 5,000 kwa gunia kabla hujapata hasara." },
      { objective: "O5", q: "Muda wa kurudisha ni:", options: ["Gharama ya uwekezaji / mapato halisi ya ziada kwa mwaka", "Mapato halisi ya ziada / gharama x 100", "Riba ya mkopo x miaka", "Gharama - mapato ya mwaka"], answer: 0, why: "Unaonyesha miaka mingapi ya mapato halisi ya ziada inarudisha gharama." },
      { objective: "O5", q: "Ng'ombe watatu zaidi wa maziwa wanagharimu 450,000 na wanaongeza mapato halisi ya ziada 150,000 kwa mwaka. Faida rahisi ni ipi?", options: ["3%", "15%", "33%", "300%"], answer: 2, why: "150,000 / 450,000 x 100 = karibu 33% kwa mwaka." },
      { objective: "O5", q: "Ungekopa ili kujenga kitalu nyumba. Ukaguzi upi ni muhimu zaidi?", options: ["Rangi ya kitalu nyumba", "Kama gharama ya mkopo kwa mwaka ni ndogo kuliko faida na marejesho yanaingia katika mtiririko wako wa pesa", "Kama majirani wana kimoja", "Hakuna, kama muuzaji ni mkarimu"], answer: 1, why: "Mkopo unaogharimu zaidi ya faida, au usioweza kuulipa kwa wakati, unageuza uwekezaji kuwa hasara." },
      { objective: "O5", q: "Msambazaji anaahidi kuwa pampu itaongeza mapato yako mara mbili. Unapaswa kufanya nini?", options: ["Kuinunua mara moja", "Kutumia namba ya msambazaji kama makadirio yako", "Kulipa amana kabla ya kuuliza chochote", "Kutumia namba za tahadhari, kuzungumza na wakulima wanaoitumia na kumuuliza mshauri unayemwamini"], answer: 3, why: "Namba za tahadhari na uzoefu wa watumiaji halisi zinakulinda dhidi ya maneno matamu ya mauzo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 8, 9, 12, 13, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya karatasi na uikague tena.",
    criteria: [
      { name: "Gharama zimepangwa na gharama kwa kipimo", objective: "O1", notYet: "Gharama zinakosekana au zimechanganywa, au gharama kwa kipimo si sahihi au haipo.", meets: "Kila gharama imewekwa alama ya kudumu au inayobadilika, uchakavu umejumuishwa, na gharama kwa kipimo ni sahihi.", exceeds: "Gharama za kudumu zimegawanywa kwa haki kati ya miradi na kazi ya familia imethaminiwa kwa kiwango cha kibarua cha eneo hilo." },
      { name: "Daftari la matumizi", objective: "O2", notYet: "Chini ya nusu ya siku zimeandikwa, au hakuna jumla za kila aina.", meets: "Mwezi mmoja wa matumizi wenye safu zote, umejumlishwa kwa aina na kwa mradi, ukilingana na pesa taslimu na pesa za simu.", exceeds: "Pia inataja aina kubwa zaidi na njia moja inayowezekana ya kuipunguza." },
      { name: "Mpango wa mtiririko wa pesa", objective: "O3", notYet: "Miezi inakosekana au salio la mwisho halipelekwi mbele.", meets: "Miezi kumi na mbili yenye salio sahihi la mwanzo na la mwisho, miezi ya upungufu imezungushiwa duara, na hatua kwa kila mmoja.", exceeds: "Hatua zina tarehe na gharama, na mpango umesasishwa kwa mwezi mmoja halisi." },
      { name: "Kurudisha gharama", objective: "O4", notYet: "Bei au mavuno ya kurudisha gharama hayapo au si sahihi.", meets: "Bei na mavuno ya kurudisha gharama ni sahihi na yamelinganishwa na bei na mavuno yanayotarajiwa.", exceeds: "Pia inaonyesha nafasi ya usalama na kinachotokea mavuno yakishuka kwa 20%." },
      { name: "Uamuzi wa uwekezaji", objective: "O5", notYet: "Hakuna muda wa kurudisha wala faida, au uamuzi hauna sababu.", meets: "Muda wa kurudisha na faida rahisi ni sahihi na uamuzi unataja angalau hatari mbili zilizokaguliwa.", exceeds: "Inajumuisha hali mbaya zaidi kwa 20%, maisha ya kifaa na gharama ya mkopo wowote, pamoja na ndiyo, hapana au subiri iliyo wazi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa karatasi ya gharama na uwekezaji",
      "Wanafunzi ambao bado wanatunza daftari la matumizi siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kukataa bei iliyo chini ya bei yao ya kurudisha gharama au kubadilisha mauzo kwa sababu yake",
      "Wanafunzi wanaoripoti kuchelewesha, kubadilisha au kufanya uamuzi wa uwekezaji kwa kutumia muda wa kurudisha na faida rahisi",
      "Vyama vya ushirika au wakopeshaji washirika wanaripoti wanachama zaidi wakileta namba za gharama na mtiririko wa pesa katika mazungumzo ya mikopo au mikataba"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, au simu yenye app ya jedwali ya bure (Google Sheets au Microsoft Excel)",
      "Kikokotoo cha simu",
      "Gharama, risiti na taarifa za pesa za simu za mwanafunzi mwenyewe kwa mradi mmoja, au namba za mfano za kozi",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi, pamoja na mwezi mmoja wa kuandika matumizi kwa kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika kikundi cha wakulima au kipindi cha ugani: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi, na kazi za \"Jaribu sasa\" zifanywe wawili wawili.",
      "Leta bajeti ya mradi halisi au ya mfano ili wanafunzi wasio na kumbukumbu bado waweze kufanya mazoezi; hakikisha kila mtu anakagua hesabu kwa kikokotoo.",
      "Wakumbushe wanafunzi kuwa namba zote katika kozi ni mifano; waombe watumie bei za soko na wasambazaji wao wenyewe.",
      "Usipendekeze vifaa, wakopeshaji au wasambazaji maalum; waombe wanafunzi walinganishe ofa na kuzungumza na mshauri wanayemwamini.",
      "Waombe wanafunzi waanze daftari la matumizi baada ya Somo la 3 ili wawe na mwezi mzima kwa kazi ya mwisho; pima karatasi kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
