"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-mechanization.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_HIRE = { name: "FAO: Huduma za kukodisha mashine kama biashara (Hire services as a business; mashine endelevu za kilimo)", url: "https://www.fao.org/sustainable-agricultural-mechanization/hire-services-as-a-business/hire-services/en/" };
const FAO_HIRE_MANUAL = { name: "FAO: Huduma za kukodisha kama biashara (Hire services as a business enterprise; mwongozo wa mafunzo)", url: "https://www.fao.org/documents/card/en/c/I9207EN" };
const FAO_SAMA = { name: "FAO na Tume ya Umoja wa Afrika: Sustainable Agricultural Mechanization: A Framework for Africa (2018; mfumo wa matumizi endelevu ya mashine za kilimo Afrika)", url: "https://www.fao.org/documents/card/en/c/ca1136en" };
const FAO_MECH = { name: "FAO: Matumizi endelevu ya mashine za kilimo (Sustainable agricultural mechanization; kutoka zana za mkono hadi mashine za injini)", url: "https://www.fao.org/sustainable-agricultural-mechanization/en" };
const HELLO = { name: "Hello Tractor: kukodi trekta kwa app, tovuti au wakala wa kuhifadhi; kufuatilia matrekta; kumiliki kwa kulipa kidogo kidogo (pay-as-you-go)", url: "https://hellotractor.com/" };
const ILO_TRACTORS = { name: "ILO: Utengenezaji na uendeshaji salama wa matrekta (Safe construction and operation of tractors; kanuni za utendaji)", url: "https://www.ilo.org/resource/safe-construction-and-operation-tractors" };
const PCPB = { name: "Bodi ya Bidhaa za Kudhibiti Wadudu (Pest Control Products Board, Kenya): bidhaa zilizosajiliwa", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Shirika la Taifa la Usimamizi na Udhibiti wa Chakula na Dawa (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };

module.exports = {
  id: "agri-mechanization-sw",
  lang: "sw",
  translationOf: "agri-mechanization",
  category: "Agriculture (Africa)",
  name: "Mashine za Shamba na Huduma za Kukodisha Mashine",
  skills: "Kuchagua kazi za kufanya kwa mashine, Kulinganisha gharama ya kukodi na kumiliki, Kukodi na kukagua huduma za trekta, Kuchagua mashine ndogo, Kufanya kazi kwa usalama na kuweka daftari la matengenezo, Kupanga biashara ya kukodisha mashine",
  outcome: "kuamua, kwa hesabu, kama ukodi au ununue mashine kwa kazi ya shamba: kuchagua kazi zinazolipa kufanywa kwa mashine, kulinganisha gharama ya kukodi na ya kumiliki, kukodi na kukagua huduma ya kukodisha, kuchagua mashine ndogo inayofaa, kuiendesha kwa usalama na daftari la matengenezo, na kupanga huduma ya kuwakodishia majirani ikiwa kumiliki kunalipa kwa njia hiyo tu.",
  about: [
    "Kozi hii ni ya wakulima wadogo na wanaokua, wafanyakazi wa shamba, vijana wajasiriamali wa kilimo na maafisa ugani nchini Nigeria, Ghana, Kenya, Senegal, Burkina Faso na kote Afrika. Kazi nyingi za shamba Afrika bado zinafanywa kwa mkono. Mashine zinaweza kupanda kwa wakati, kupunguza kazi ngumu na kupunguza hasara, lakini mashine inayokaa bila kazi sehemu kubwa ya mwaka inaweza kulitumbukiza shamba katika madeni.",
    "Sura ya 1 inahusu uamuzi: kazi zipi zinalipa kufanywa kwa mashine, kukodi dhidi ya kumiliki kwa mfano wa hesabu ya gharama, na kukodi huduma za trekta, zikiwemo za app kama Hello Tractor. Sura ya 2 inahusu kuendesha mashine: mashine ndogo kama trekta za magurudumu mawili, mashine za kupukuchua, mashine za kupura na vinyunyizi vya injini; usalama na daftari la matengenezo; na kuanzisha biashara ya kukodisha mashine kwa majirani zako. Kushirikiana mashine kama kikundi kunafundishwa katika kozi \"Kuhamasisha Jamii: Kushirikiana Mashine na Kujadiliana Bei za Pembejeo\" (Community Mobilization: Pooling Machinery and Bargaining for Inputs).",
    "Kiasi cha pesa katika kozi hii ni mifano tu; tumia bei halisi kutoka kwa wauzaji, huduma za kukodisha na wakopeshaji. Kozi hii inaeleza jinsi mikopo na mikataba ya kukodisha inavyofanya kazi lakini haitoi ushauri wa uwekezaji: soma kila mkataba wote na umwulize mshauri unayemwamini. Kila somo linachukua kama dakika tano na linaishia na kazi ya kufanya kwenye shamba lako. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tengeneza karatasi ya uamuzi wa kukodi au kununua kwa mashine moja na kazi moja kwenye shamba lako (au mfano kama trekta ya kulima hekta 10 za mahindi Kaduna, au mashine ya kupukuchua mahindi kwa kikundi cha wakulima karibu na Tamale): kazi hiyo na kwa nini inalipa kuifanya kwa mashine; gharama ya kumiliki kwa mwaka (gharama za kudumu na za kila hekta); gharama ya kukodi; eneo la kurudisha gharama; uamuzi wako; na kanuni za usalama na daftari la matengenezo utakalotumia. Ukiamua kununua, ongeza mpango wa ukurasa mmoja wa kuikodisha mashine kwa majirani: huduma, wateja na hekta, bei, gharama, eneo la kurudisha gharama, kuhifadhi kazi na malipo, na hatari kuu.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wanaokua, wafanyakazi wa shamba, viongozi wa vikundi vya wakulima, vijana wajasiriamali wa kilimo na maafisa ugani nchini Nigeria, Ghana, Kenya, Afrika Magharibi inayozungumza Kifaransa na sehemu nyingine za Afrika ambao hukodi, au wanafikiria kununua, trekta au mashine ndogo.",
    startingPoint: "Hufanya kazi nyingi kwa mkono au kwa ng'ombe wa kulima, na mara nyingine hukodi trekta kupitia dalali. Wachache wamelinganisha gharama kamili ya kumiliki na ya kukodi, wamekagua kazi waliyolipia, au wameweka daftari la matengenezo. Baadhi ya vijana wanaona kukodisha mashine kama biashara lakini hawajahesabu gharama zake.",
    gap: "Wakulima hununua mashine zisizotumika vya kutosha na zenye gharama kubwa kuendesha, au husubiri matrekta yanayochelewa na kupanda kwa kuchelewa. Wanahitaji kuchagua kazi zinazolipa kufanywa kwa mashine, kulinganisha kukodi na kumiliki kwa hesabu halisi, kukodi na kukagua huduma za kukodisha, kuendesha mashine kwa usalama, na, wakinunua, kupata mapato kutokana na kazi za majirani.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: simu ya kawaida au simu janja na kikokotoo; app za kukodi zinahitaji simu janja au wakala wa kuhifadhi",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi za shamba",
      "Kiasi cha pesa ni mifano; bei, riba na viwango vya kukodi vinatofautiana kwa mahali na hubadilika",
      "Fedha: eleza mikopo na mikataba ya kukodisha na hatari zake; hakuna ushauri wa uwekezaji",
      "Usalama: mashine zinaweza kuua; hakuna ajira ya watoto karibu na mashine; vinyunyizi tu kwa viuatilifu vilivyosajiliwa kama lebo inavyosema"
    ],
    prerequisites: "Hakuna. Kozi \"Biashara ya Kilimo na Usimamizi wa Shamba\" inasaidia katika kuhesabu gharama."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi za shamba lako", action: "kutambua kazi zipi zinalipa kufanywa kwa mashine", standard: "ukitoa sababu kwa kila moja: wakati unaofaa, nguvu kazi, hasara au wingi wa kazi" },
    { id: "O2", condition: "Ukipewa bei, gharama za uendeshaji na kiwango cha kukodi cha mashine", action: "kuhesabu gharama ya kumiliki kwa mwaka, gharama ya kukodi na eneo la kurudisha gharama", standard: "hesabu zikiwa sahihi na uamuzi wazi wa kukodi au kununua" },
    { id: "O3", condition: "Unapokodi huduma ya trekta au mashine", action: "kukubaliana mapema bei, eneo, tarehe na ubora, na kukagua kazi kabla ya kulipa", standard: "ukipima shamba na kupata risiti" },
    { id: "O4", condition: "Ukipewa kazi ya shamba na soko la eneo lako", action: "kuchagua mashine ndogo inayofaa kazi, wingi wa kazi, na vipuri na mafundi walio karibu", standard: "ukiorodhesha angalau mambo manne ya kukagua kabla ya kununua" },
    { id: "O5", condition: "Kabla na baada ya kila matumizi ya mashine", action: "kufanya ukaguzi wa usalama na kuandika kazi na matengenezo katika daftari", standard: "bila kuruka kanuni yoyote ya usalama na kila maandishi yakiwa na tarehe" },
    { id: "O6", condition: "Ukipewa mashine na mashamba yanayokuzunguka", action: "kuandika mpango wa ukurasa mmoja wa huduma ya kukodisha mashine", standard: "wenye huduma, wateja, bei, gharama, eneo la kurudisha gharama na hatari" }
  ],
  chapters: [
    {
      name: "Sura 1: Kukodi au kununua?",
      lessons: [
        {
          title: "Kazi zipi zinalipa kufanywa kwa mashine",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambua kazi za shamba lako zinazolipa kufanywa kwa mashine.",
          text: [
            "Matumizi ya mashine (mechanization) ni kutumia zana na mashine, kuanzia zana bora za mkono na wanyama wa kazi hadi matrekta na mashine za injini, kufanya kazi za shamba. FAO inasisitiza kuchagua kinachofaa shamba, watu na mahali. Mashine inalipa inapoleta mapato au kuokoa zaidi ya gharama yake.",
            "Kazi ambazo mara nyingi zinalipa: kutayarisha shamba, pale kulima au kupasua udongo kwa wakati baada ya mvua za kwanza kunakuwezesha kupanda kwa wakati; kupura na kupukuchua, ambapo mashine inafanya kwa saa chache kile ambacho watu wengi wangefanya kwa siku kadhaa, na inapoteza nafaka kidogo chini; kusafirisha mavuno na pembejeo; kusukuma maji; na usindikaji kama kukuna mihogo au kusaga. Kazi zinazolipa kidogo: mashamba madogo sana, kazi iliyo rahisi na ya haraka kwa mkono, au kazi unayoifanya mara moja tu kwa mwaka kwa saa chache.",
            "Uliza maswali manne kuhusu kila kazi. Wakati: kuifanya kwa kuchelewa kunapunguza mavuno? Nguvu kazi: wafanyakazi ni wachache au ghali wakati huo? Hasara: kuifanya kwa mkono kunapoteza mazao? Wingi: kuna kazi ya kutosha kuifanya mashine iwe na shughuli? Kisha linganisha gharama kwa mkono na kwa mashine. Mfano (kiasi ni mfano tu): kulima hekta 1 kwa mkono kunachukua siku-mtu 25 kwa GHS 50 = GHS 1,250, wakati kukodi trekta kunagharimu GHS 600 kwa hekta."
          ],
          steps: ["Orodhesha kila kazi kubwa ya shamba lako katika mwaka.", "Kwa kila moja, uliza: wakati, nguvu kazi, hasara, wingi.", "Hesabu gharama kwa mkono: siku-mtu x mshahara wa siku.", "Tafuta gharama kwa mashine: kiwango cha kukodi x hekta.", "Weka alama kwenye kazi ambazo mashine inagharimu kidogo au inaleta zaidi."],
          words: [["Matumizi ya mashine (mechanization)", "kutumia zana na mashine, kuanzia zana bora za mkono hadi matrekta, kufanya kazi za shamba."], ["Wakati unaofaa (timeliness)", "kufanya kazi wakati sahihi, kama kupanda mara tu mvua zinapoanza."], ["Siku-mtu", "kazi anayofanya mtu mmoja kwa siku moja."]],
          slides: [
            { title: "Mashine inapolipa", bullets: ["Inaleta au inaokoa zaidi ya gharama yake", "Kuanzia zana bora za mkono hadi matrekta", "Ifae shamba, watu na mahali"] },
            { title: "Kazi ambazo mara nyingi zinalipa", bullets: ["Kutayarisha shamba kwa wakati", "Kupura na kupukuchua: haraka, hasara kidogo", "Usafiri, kusukuma maji, usindikaji"] },
            { title: "Maswali manne", bullets: ["Wakati: kuchelewa kunapunguza mavuno?", "Nguvu kazi: wachache au ghali?", "Hasara? Wingi wa kazi?"] },
            { title: "Linganisha gharama", bullets: ["Kwa mkono: siku-mtu x mshahara", "Mfano: siku 25 x GHS 50 = GHS 1,250 kwa ha", "Mfano wa kukodi mashine: GHS 600 kwa ha"] }
          ],
          sources: [FAO_MECH, FAO_SAMA],
          tryIt: "Orodhesha kazi tano kubwa za shamba lako. Kwa kila moja, jibu maswali manne (wakati, nguvu kazi, hasara, wingi) na ulinganishe gharama kwa mkono na gharama kwa mashine. Zungushia duara kazi mbili zinazolipa zaidi kufanywa kwa mashine.",
          youCanNow: "kuchagua kazi za shamba lako zinazolipa kufanywa kwa mashine na kusema kwa nini.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini kulima kwa wakati mara nyingi kunalipa?", options: ["Matrekta ni rahisi zaidi wakati wa kiangazi", "Kupanda kwa wakati baada ya mvua kunaweza kuongeza mavuno", "Kulima kwa kuchelewa kunaua magugu vizuri zaidi", "Kunafanya shamba lionekane nadhifu"], answer: 1, why: "Wakati ni muhimu: kupanda kwa kuchelewa mara nyingi kunapunguza mavuno." },
            { objective: "O1", q: "Kupukuchua tani 2 za mahindi kwa mkono kunachukua siku-mtu 20 kwa NGN 4,000. Huduma ya mashine ya kupukuchua inagharimu NGN 50,000. Kipi ni rahisi zaidi?", options: ["Huduma ya mashine ya kupukuchua", "Kupukuchua kwa mkono", "Vinagharimu sawa", "Huwezi kujua"], answer: 0, why: "Kupukuchua kwa mkono kunagharimu 20 x 4,000 = NGN 80,000, zaidi ya NGN 50,000." }
          ]
        },
        {
          title: "Kukodi dhidi ya kumiliki: mfano wa hesabu ya gharama",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hesabu gharama ya kumiliki na ya kukodi na upate eneo la kurudisha gharama.",
          text: [
            "Kumiliki mashine kuna gharama za kudumu unazolipa kila mwaka hata kama haisogei kamwe: thamani inayopotea katika maisha yake (uchakavu), riba ya mkopo au kile ambacho pesa hizo zingeweza kupata mahali pengine, bima, na banda. Pia kuna gharama za uendeshaji kwa kila hekta: mafuta, oili, matengenezo na dereva. Kukodi kuna gharama moja: kiwango cha kukodi kwa hekta.",
            "Mfano wa hesabu kwa trekta na plau nchini Nigeria (kiasi chote ni mifano tu; tumia bei halisi na riba halisi ya mkopeshaji wako): bei NGN 30,000,000, thamani NGN 6,000,000 baada ya miaka 10, hivyo uchakavu = (30,000,000 - 6,000,000) / 10 = NGN 2,400,000 kwa mwaka. Riba ya mkopo (mfano) NGN 1,800,000 kwa mwaka, bima na banda NGN 600,000. Gharama za kudumu = NGN 4,800,000 kwa mwaka. Gharama za uendeshaji = NGN 25,000 kwa hekta. Kiwango cha kukodi = NGN 60,000 kwa hekta.",
            "Kila hekta unayolima kwa trekta yako mwenyewe inaokoa 60,000 - 25,000 = NGN 35,000 ukilinganisha na kukodi. Eneo la kurudisha gharama = gharama za kudumu / akiba kwa hekta = 4,800,000 / 35,000 = kama hekta 137 kwa mwaka. Mkulima mwenye hekta 10 anapaswa kukodi; kumiliki kunalipa tu ikiwa trekta inafanya kazi pia kwenye mashamba ya majirani. Pia pima yale ambayo hesabu haionyeshi: kumiliki kunamaanisha unalima kwa wakati, wakati kukodi kunamaanisha hakuna mkopo wala matengenezo. Mikataba ya kukodisha na ya kulipa kidogo kidogo ni njia nyingine; soma kila mkataba wote na umwulize mshauri unayemwamini."
          ],
          steps: ["Uchakavu kwa mwaka = (bei - thamani mwishoni) / miaka ya matumizi.", "Ongeza riba, bima na banda: hizi ni gharama za kudumu kwa mwaka.", "Ongeza mafuta, oili, matengenezo na dereva kwa hekta: gharama za uendeshaji.", "Akiba kwa hekta = kiwango cha kukodi - gharama za uendeshaji.", "Eneo la kurudisha gharama = gharama za kudumu / akiba kwa hekta.", "Linganisha na hekta zako na uamue; zingatia wakati na hatari."],
          words: [["Uchakavu (depreciation)", "thamani ambayo mashine inapoteza kila mwaka inapozeeka."], ["Gharama za kudumu", "gharama unazolipa kila mwaka iwe mashine inafanya kazi au haifanyi."], ["Eneo la kurudisha gharama (break-even)", "hekta kwa mwaka ambapo kumiliki kunagharimu sawa na kukodi."]],
          slides: [
            { title: "Gharama za kumiliki", bullets: ["Za kudumu: uchakavu, riba, bima, banda", "Za uendeshaji kwa hekta: mafuta, oili, matengenezo, dereva", "Kukodi: kiwango kimoja cha kukodi kwa hekta"] },
            { title: "Mfano: trekta nchini Nigeria", bullets: ["Uchakavu (30M - 6M) / 10 = NGN 2.4M kwa mwaka", "Gharama za kudumu jumla NGN 4.8M kwa mwaka", "Uendeshaji NGN 25,000 kwa ha; kukodi NGN 60,000 kwa ha"] },
            { title: "Eneo la kurudisha gharama", bullets: ["Akiba kwa ha: 60,000 - 25,000 = 35,000", "4,800,000 / 35,000 = kama ha 137 kwa mwaka", "Shamba la ha 10: kodi. Mifano tu"] },
            { title: "Zaidi ya hesabu", bullets: ["Kumiliki: unalima kwa wakati", "Kukodi: hakuna mkopo, hakuna matengenezo", "Mikataba na mikopo: soma yote, uliza mshauri"] }
          ],
          sources: [FAO_HIRE, FAO_SAMA],
          tryIt: "Pata bei halisi za mashine moja unayoifikiria (bei, maisha yanayotarajiwa na thamani mwishoni, gharama za uendeshaji na kiwango cha kukodi cha eneo lako). Hesabu gharama zake za kudumu kwa mwaka, akiba kwa hekta na eneo la kurudisha gharama, kisha andika kama unapaswa kukodi au kununua.",
          youCanNow: "kulinganisha gharama ya kumiliki na ya kukodi mashine na kupata eneo la kurudisha gharama.",
          quickCheck: [
            { objective: "O2", q: "Mashine ya kupukuchua inagharimu GHS 20,000 na thamani yake ni GHS 4,000 baada ya miaka 8. Uchakavu wake kwa mwaka ni kiasi gani?", options: ["GHS 1,500", "GHS 2,500", "GHS 2,000", "GHS 3,000"], answer: 2, why: "(20,000 - 4,000) / 8 = 2,000 kwa mwaka." },
            { objective: "O2", q: "Gharama za kudumu ni KES 300,000 kwa mwaka na kumiliki kunaokoa KES 6,000 kwa hekta. Eneo la kurudisha gharama ni lipi?", options: ["Hekta 30", "Hekta 40", "Hekta 60", "Hekta 50"], answer: 3, why: "300,000 / 6,000 = hekta 50 kwa mwaka." }
          ]
        },
        {
          title: "Huduma za kukodi trekta na huduma za app",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kodi huduma na ukague kazi kabla ya kulipa.",
          text: [
            "Unaweza kukodi mashine kutoka kwa jirani au mwenye trekta, chama cha ushirika au kikundi cha wakulima, kituo cha kukodisha cha serikali au cha binafsi, au huduma ya app. Hello Tractor ni mfano mmoja: wakulima hukodi huduma za trekta kupitia app yake ya simu au app ya tovuti au kupitia mawakala wa kuhifadhi (maafisa ugani na mawakala wa shambani wanaowahifadhia wakulima kazi), na wenye matrekta huitumia kufuatilia matrekta yao na mafuta kwa GPS. Pia inatoa mipango ya kulipa kidogo kidogo kusaidia watu kumiliki matrekta. Kampuni inasema inafanya kazi katika nchi zaidi ya 20 za Afrika, ikiwemo Nigeria; kagua kinachopatikana katika eneo lako.",
            "Matrekta huenda kwanza mahali penye kazi nyingi sehemu moja. Kuhifadhi pamoja na majirani, ili trekta ifanye mashamba mengi kwa safari moja, kunaongeza uwezekano wa kufika kwa wakati.",
            "Kabla kazi haijaanza, kubalianeni kwa maandishi au kwa ujumbe: bei kwa ekari au hekta, jinsi eneo litakavyopimwa, tarehe, kina na aina ya kazi, na nani analipa mafuta. Pima shamba mwenyewe, kwa tepu au app ya GPS ya simu. Baada ya kazi, ikague: kina sahihi, hakuna vipande vilivyorukwa, shamba lote limefanywa. Lipa tu baada ya kukagua, kupitia app rasmi, pesa za simu au kwa risiti. Kamwe usimlipe mgeni mapema nje ya app rasmi, na kamwe usishiriki PIN au misimbo."
          ],
          steps: ["Chagua huduma: jirani, kikundi, kituo cha kukodisha au app (kwa mfano Hello Tractor).", "Hifadhi mapema, pamoja na majirani ukiweza.", "Kubalianeni mapema bei, upimaji wa eneo, tarehe, kina na mafuta.", "Pima shamba mwenyewe.", "Kagua kazi: kina, hakuna vipande vilivyorukwa, shamba lote.", "Lipa baada ya kukagua; pata risiti au rekodi ya app; usishiriki PIN kamwe."],
          words: [["Wakala wa kuhifadhi (booking agent)", "mtu anayewahifadhia wakulima huduma za mashine, mara nyingi kwa kutumia app."], ["Lipa kidogo kidogo (pay-as-you-go, PAYG)", "kulipia kitu kwa kiasi kidogo kwa muda unapokitumia, hadi kiwe chako."], ["Kiwango cha kukodi", "bei ambayo huduma inatoza, mara nyingi kwa ekari au kwa hekta."]],
          slides: [
            { title: "Mahali pa kukodi", bullets: ["Majirani, vikundi, vituo vya kukodisha", "App kama Hello Tractor: app, tovuti au wakala wa kuhifadhi", "Kagua kinachofanya kazi katika eneo lako"] },
            { title: "Pata trekta kwa wakati", bullets: ["Hifadhi mapema", "Hifadhi pamoja na majirani", "Mashamba mengi kwa safari moja"] },
            { title: "Kubalianeni kabla ya kazi", bullets: ["Bei kwa ekari au hekta; jinsi eneo linavyopimwa", "Tarehe, kina, aina ya kazi, mafuta", "Kwa maandishi au kwa ujumbe"] },
            { title: "Kagua, kisha lipa", bullets: ["Pima shamba mwenyewe", "Kina sahihi; hakuna vipande vilivyorukwa", "Lipa kwa app, pesa za simu au risiti; hakuna PIN"] }
          ],
          sources: [HELLO, FAO_HIRE],
          tryIt: "Tafuta huduma mbili za kukodisha karibu nawe (mwenye trekta, kikundi, kituo cha kukodisha au app). Uliza kila moja bei kwa hekta, jinsi wanavyopima eneo, lini wanaweza kuja, na jinsi unavyolipa. Andika ujumbe mfupi wa kuhifadhi unaoeleza masharti yote.",
          youCanNow: "kukodi huduma ya trekta au mashine kwa masharti yaliyo wazi na kukagua kazi kabla ya kulipa.",
          quickCheck: [
            { objective: "O3", q: "Unapaswa kulipa lini kwa kulimiwa na trekta?", options: ["Baada ya kukagua kazi na eneo, ukiwa na risiti au rekodi ya app", "Kabla trekta haijafika, kwa pesa taslimu kwa yeyote anayepiga simu", "Nusu kwa mgeni kwa ujumbe", "Kamwe"], answer: 0, why: "Kukagua kwanza na kupata rekodi kunakulinda dhidi ya kazi mbaya na ulaghai." },
            { objective: "O3", q: "Unawezaje kuongeza uwezekano wa trekta ya kukodi kufika kwa wakati?", options: ["Hifadhi dakika za mwisho", "Hifadhi peke yako kwa kipande kidogo sana", "Hifadhi mapema, pamoja na majirani", "Mlipe mgeni zaidi mapema"], answer: 2, why: "Mashamba mengi sehemu moja yanafanya safari ilipe kwa mwenye trekta." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kukodi au kununua?",
        questions: [
          { objective: "O1", q: "Kazi ipi kwa kawaida inalipa KIDOGO ZAIDI kufanywa kwa mashine?", options: ["Kulima hekta 20 kwa wakati", "Kupura mavuno makubwa ya mpunga", "Kazi ya saa moja mara moja kwa mwaka kwenye kipande kidogo sana", "Kusafirisha mavuno sokoni"], answer: 2, why: "Mashine kwa kazi ndogo na za nadra inagharimu zaidi ya inachookoa." },
          { objective: "O1", q: "Swali lipi linakagua wakati unaofaa?", options: ["Je, mashine ni nyekundu?", "Je, kuifanya kazi kwa kuchelewa kunapunguza mavuno?", "Je, muuzaji ni mkarimu?", "Mkulima ana umri gani?"], answer: 1, why: "Wakati unahusu kama kufanya kazi kwa kuchelewa kunapoteza mavuno." },
          { objective: "O2", q: "Ipi ni gharama ya kudumu ya kumiliki trekta?", options: ["Bima", "Mafuta kwa hekta", "Malipo ya dereva kwa hekta", "Oili kwa saa"], answer: 0, why: "Bima inalipwa kila mwaka iwe trekta inafanya kazi au haifanyi." },
          { objective: "O2", q: "Eneo la kurudisha gharama ni hekta 137 kwa mwaka na unalima hekta 10. Ufanye nini?", options: ["Nunua mara moja", "Nunua matrekta mawili", "Acha kulima", "Kodi, au nunua tu ikiwa unaweza pia kuwahudumia majirani"], answer: 3, why: "Ukiwa chini sana ya eneo la kurudisha gharama, kumiliki kunagharimu zaidi ya kukodi isipokuwa mashine ifanye kazi mahali pengine pia." },
          { objective: "O3", q: "Kabla trekta ya kukodi haijaanza, mkubaliane nini?", options: ["Jina la dereva tu", "Bei kwa hekta, jinsi eneo linavyopimwa, tarehe, kina na mafuta", "Hakuna; waamini", "PIN yako ya pesa za simu"], answer: 1, why: "Masharti wazi yanazuia mabishano na kazi mbaya; PIN haishirikiwi kamwe." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha mashine na biashara ya huduma",
      lessons: [
        {
          title: "Mashine ndogo kwa wakulima wadogo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Chagua mashine ndogo inayofaa kazi yako na eneo lako.",
          text: [
            "Si kila shamba linahitaji trekta ya magurudumu manne. Trekta ya magurudumu mawili (power tiller) inaweza kulima, kutifua, kusukuma maji na kuvuta tela kwenye mashamba madogo. Mashine ya injini ya kupukuchua mahindi au mashine ya kupura mazao mengi (kwa mpunga, mtama, uwele, maharagwe au soya) inaokoa siku za kazi na inapoteza nafaka kidogo. Kinyunyizi cha mgongoni cha injini au mistblower kinafunika eneo kubwa kuliko kinyunyizi cha mkono. Mifano mingine ni mashine za kukuna mihogo, mashine za kuvuna mpunga na mashine za kukata malisho.",
            "Kabla ya kununua, kagua: Je, kuna kazi ya kutosha, kwenye shamba lako na la majirani, kuifanya iwe na shughuli? Je, fundi wa karibu anaweza kuitengeneza, na vipuri vinauzwa karibu nawe? Je, muuzaji anakufundisha na anatoa dhamana (warranty)? Je, inaweza kuhamishwa kati ya mashamba? Je, watu watakaoitumia, wakiwemo wanawake na vijana, wanaweza kuiendesha kwa usalama? FAO imechapisha orodha ya mashine zinazofaa wakulima wanawake.",
            "Vinyunyizi: tumia tu viuatilifu vilivyosajiliwa katika nchi yako, kama lebo inavyosema, na vifaa vya kujikinga. Nchini Kenya kagua orodha ya Bodi ya Bidhaa za Kudhibiti Wadudu (PCPB); nchini Nigeria, NAFDAC. Kinyunyizi cha injini kinatoa kemikali nyingi zaidi kwa haraka, kwa hiyo kiweke sawa (kirekebishe) kama mwongozo wake unavyosema kabla ya kila msimu."
          ],
          steps: ["Taja kazi na hekta au tani ngapi kwa mwaka.", "Chagua aina ya mashine kwa kazi hiyo.", "Kagua vipuri na fundi karibu nawe.", "Muulize muuzaji kuhusu mafunzo na dhamana.", "Hakikisha inaweza kuhamishwa na kutumiwa kwa usalama na madereva wako.", "Kwa vinyunyizi: viuatilifu vilivyosajiliwa tu, lebo na vifaa vya kujikinga."],
          words: [["Trekta ya magurudumu mawili", "trekta ndogo inayoendeshwa ukitembea nyuma yake, pia huitwa power tiller, inayovuta zana na kuendesha pampu."], ["Mashine ya kupura", "mashine inayotenganisha nafaka na mabua ya mmea."], ["Kurekebisha kinyunyizi (calibrate)", "kukiweka kinyunyizi sawa ili kitoe kiasi sahihi, kama mwongozo wake na lebo ya kiuatilifu vinavyosema."]],
          slides: [
            { title: "Mashine ndogo", bullets: ["Trekta ya magurudumu mawili: kulima, pampu, tela", "Mashine ya kupukuchua mahindi; mashine ya kupura mazao mengi", "Kinyunyizi cha injini; mashine ya kukuna mihogo; ya kukata malisho"] },
            { title: "Kabla ya kununua", bullets: ["Kazi ya kutosha kuifanya iwe na shughuli?", "Vipuri na fundi karibu?", "Mafunzo, dhamana, rahisi kuhamisha?"] },
            { title: "Nani ataitumia?", bullets: ["Salama kwa madereva wako", "Wanawake na vijana pia", "Orodha ya FAO ya mashine kwa wakulima wanawake"] },
            { title: "Vinyunyizi", bullets: ["Viuatilifu vilivyosajiliwa tu, kama lebo inavyosema", "Kenya: orodha ya PCPB. Nigeria: NAFDAC", "Vifaa vya kujikinga; rekebisha kwanza"] }
          ],
          sources: [FAO_MECH, PCPB, NAFDAC],
          tryIt: "Chagua kazi moja kutoka Somo la 1. Chagua mashine ndogo kwa kazi hiyo na umtembelee au umpigie simu muuzaji. Uliza bei, vipuri na matengenezo yanapatikana wapi, mafunzo na dhamana gani wanatoa, na inaweza kufanya kazi kiasi gani kwa siku. Andika majibu.",
          youCanNow: "kuchagua mashine ndogo inayofaa kazi yako, eneo lako na watu watakaoitumia.",
          quickCheck: [
            { objective: "O4", q: "Mashine ipi inafaa kulima na kusukuma maji kwenye mashamba madogo?", options: ["Kombaini ya kuvuna", "Trekta ya magurudumu mawili (power tiller)", "Mashine ya kupukuchua mahindi", "Mashine ya kukata malisho"], answer: 1, why: "Power tiller inalima mashamba madogo na inaweza kuendesha pampu." },
            { objective: "O4", q: "Mashine ya kupukuchua iliyo rahisi zaidi haina vipuri wala fundi ndani ya km 200. Hatari ni ipi?", options: ["Hakuna; mashine haziharibiki kamwe", "Itapukuchua haraka mno", "Ikiharibika, inaweza kukaa bila kazi kwa wiki kadhaa", "Itatumia mafuta kidogo mno"], answer: 2, why: "Mashine isiyo na vipuri wala matengenezo karibu inaweza kukaa bila kazi wakati unaihitaji zaidi." }
          ]
        },
        {
          title: "Usalama na daftari la matengenezo",
          objectives: ["O5"],
          minutes: 6,
          goal: "Endesha mashine kwa usalama na uweke daftari lake la matengenezo.",
          text: [
            "Mashine zinaweza kuua au kulemaza kwa sekunde chache. Trekta kupinduka, watu kuanguka chini ya magurudumu, na nguo kunaswa na shafti zinazozunguka ni sababu za kawaida za vifo mashambani. ILO inachapisha kanuni za utendaji kuhusu matumizi salama ya trekta. Kanuni kuu: watu wazima waliofunzwa tu ndio waendeshe mashine; hakuna watoto karibu na mashine zinazofanya kazi; hakuna abiria juu ya trekta au zana; tumia kinga ya kupinduka na mkanda wa kiti pale vilipowekwa; enda polepole na moja kwa moja kwenye miteremko na mbali na mitaro; weka vizuizi (guards) vyote mahali pake, hasa kwenye shafti ya PTO; na vaa nguo zinazobana mwili na nywele zimefungwa nyuma.",
            "Mashine za kupura na kupukuchua: kamwe usiweke mkono wako ndani ya mdomo wa kulishia au mahali palipoziba. Zima injini na usubiri sehemu zote zisimame kabla ya kuondoa kizuizi. Linda masikio na mapafu kutokana na kelele na vumbi. Weka mafuta tu injini ikiwa imezimwa na imepoa, bila kuvuta sigara. Weka sanduku la huduma ya kwanza na simu karibu.",
            "Mashine inayotunzwa vizuri inadumu muda mrefu na inaharibika kidogo wakati wa msimu wenye shughuli nyingi. Fanya ukaguzi wa kila siku kabla ya kazi: oili ya injini, mafuta, maji au kipozeo, kichujio cha hewa, matairi, nati na bolti zilizolegea, na sehemu za kutia grisi. Ifanyie huduma kwa saa zilizo kwenye mita yake kama mwongozo unavyosema. Weka daftari lenye: tarehe, saa, kazi na hekta au tani, mafuta, matengenezo na vipuri, gharama, na jina la dereva. Daftari linaonyesha gharama halisi ya uendeshaji kwa hekta."
          ],
          steps: ["Dereva mtu mzima aliyefunzwa tu; hakuna watoto, hakuna abiria.", "Vizuizi viwe mahali pake, kinga ya kupinduka na mkanda wa kiti vitumike pale vilipowekwa.", "Enda polepole kwenye miteremko; kaa mbali na mitaro.", "Zima injini na usubiri kabla ya kuondoa kizuizi chochote.", "Ukaguzi wa kila siku: oili, mafuta, kipozeo, kichujio cha hewa, matairi, bolti, grisi.", "Andika kazi ya kila siku, mafuta, matengenezo na gharama katika daftari."],
          words: [["Shafti ya PTO (power take-off)", "shafti inayozunguka kwenye trekta inayoendesha zana; inaweza kunasa nguo na kuua."], ["Kinga ya kupinduka (roll-over protection)", "fremu juu ya kiti cha dereva inayomlinda trekta ikipinduka."], ["Daftari la mashine (logbook)", "daftari ambalo unaandika kila kazi, mafuta, matengenezo na gharama ya mashine."]],
          slides: [
            { title: "Watu kwanza", bullets: ["Watu wazima waliofunzwa tu; hakuna watoto karibu", "Hakuna abiria", "Kinga ya kupinduka na mkanda wa kiti"] },
            { title: "Sehemu za hatari", bullets: ["Miteremko na mitaro: enda polepole", "Shafti ya PTO: vizuizi mahali pake; nguo zinazobana, nywele zimefungwa", "Mahali palipoziba: zima injini, subiri, kisha ondoa"] },
            { title: "Ukaguzi wa kila siku", bullets: ["Oili, mafuta, kipozeo, kichujio cha hewa", "Matairi, nati na bolti, grisi", "Huduma kwa saa, kama mwongozo unavyosema"] },
            { title: "Daftari la mashine", bullets: ["Tarehe, saa, kazi, hekta au tani", "Mafuta, matengenezo, vipuri, gharama, dereva", "Linaonyesha gharama halisi kwa hekta"] }
          ],
          sources: [ILO_TRACTORS],
          tryIt: "Tengeneza orodha ya ukaguzi wa usalama ya ukurasa mmoja kwa mashine moja unayotumia au unayokodi, na ukurasa wa daftari wenye safu za tarehe, saa, kazi, hekta au tani, mafuta, matengenezo na vipuri, gharama, na dereva. Jaza mstari mmoja kutoka kazi halisi au ya mfano.",
          youCanNow: "kuendesha mashine kwa kufuata kanuni kuu za usalama na kuweka daftari la matengenezo linaloonyesha gharama yake halisi ya uendeshaji.",
          quickCheck: [
            { objective: "O5", q: "Mashine ya kupura imeziba. Unafanya nini?", options: ["Sukuma mazao ndani kwa mkono wakati inafanya kazi", "Mwombe mtoto aitoe", "Ipige teke mashine", "Zima injini, subiri sehemu zote zisimame, kisha ondoa kizuizi"], answer: 3, why: "Sehemu zinazosogea zinaweza kukata mkono kwa sekunde moja; ondoa kizuizi kwenye mashine iliyosimama tu." },
            { objective: "O5", q: "Nini kinapaswa kuwa katika daftari la mashine?", options: ["Tarehe, saa, kazi, mafuta, matengenezo na gharama", "PIN ya pesa za simu ya dereva", "Rangi ya mashine tu", "Hakuna; kumbukumbu inatosha"], answer: 0, why: "Rekodi hizi zinaonyesha gharama halisi ya uendeshaji na wakati huduma inapohitajika." }
          ]
        },
        {
          title: "Kuanzisha biashara ya kukodisha mashine",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika mpango wa ukurasa mmoja wa huduma ya kukodisha mashine.",
          text: [
            "Huduma nyingi za kukodisha zinaendeshwa na wakulima walionunua mashine kwa ajili ya shamba lao kisha wakawapa majirani huduma, kwa pesa taslimu au kwa kubadilishana na kazi nyingine au mazao. Mfumo wa FAO na Umoja wa Afrika kuhusu mashine za kilimo Afrika unaona vijana wanaoendesha huduma za kukodisha kama njia kuu ya kuwafikishia wakulima wadogo mashine. FAO pia inachapisha mwongozo wa mafunzo kuhusu huduma za kukodisha kama biashara.",
            "Mpango wa ukurasa mmoja unajibu: Huduma gani, katika misimu ipi (kulima, kupukuchua, kupura, usafiri, kusukuma maji)? Wateja ni nani, na hekta au tani ngapi kwa jumla? Bei gani, na inalinganaje na huduma nyingine? Gharama ni zipi (za kudumu kwa mwaka na za uendeshaji kwa hekta, kutoka Masomo ya 2 na 5)? Eneo la kurudisha gharama ni lipi? Utapokeaje maombi ya kazi na malipo (malipo ya awali, pesa za simu, risiti)? Dereva ni nani, na amefunzwa? Hatari ni zipi: kuharibika wakati wa msimu wa kilele, kazi zisizolipwa, ajali, wizi? Utazipunguzaje (matengenezo, masharti ya maandishi, bima, kifaa cha kufuatilia cha GPS)?",
            "Mfano wa huduma ya power tiller nchini Senegal au Burkina Faso (kiasi chote ni mifano tu): gharama za kudumu XOF 600,000 kwa mwaka, gharama za uendeshaji XOF 15,000 kwa hekta, bei XOF 35,000 kwa hekta. Eneo la kurudisha gharama = 600,000 / (35,000 - 15,000) = hekta 30. Hekta 50 zikihifadhiwa, faida = 50 x 20,000 - 600,000 = XOF 400,000. Panga mashamba ya karibu pamoja ili kupunguza safari, na ongeza kazi za nje ya msimu kama kupukuchua na usafiri. Njia za fedha ni pamoja na mikopo, mikataba ya kukodisha na mipango ya kulipa kidogo kidogo: soma kila mkataba wote na umwulize mshauri unayemwamini."
          ],
          steps: ["Orodhesha huduma zako na misimu.", "Orodhesha wateja na jumla ya hekta au tani.", "Weka bei inayolipa gharama kwa hekta pamoja na faida; linganisha na wengine.", "Hesabu eneo la kurudisha gharama: gharama za kudumu / (bei - gharama ya uendeshaji kwa hekta).", "Panga maombi ya kazi, dereva, malipo na rekodi.", "Orodhesha hatari na jinsi utakavyopunguza kila moja."],
          words: [["Huduma ya kukodisha", "biashara inayofanya kazi za shamba kwa mashine zake kwa wakulima wengine, kwa malipo."], ["Faida juu ya gharama (margin)", "sehemu ya bei inayobaki baada ya gharama."], ["Kazi za nje ya msimu", "kazi ambazo mashine inaweza kufanya nje ya msimu mkuu, kama usafiri au kupukuchua."]],
          slides: [
            { title: "Huduma za kukodisha", bullets: ["Wakulima wanawahudumia majirani kwa malipo", "Njia kuu ya kuwafikishia wakulima wadogo mashine", "Mwongozo wa mafunzo wa FAO: huduma za kukodisha kama biashara"] },
            { title: "Mpango wa ukurasa mmoja", bullets: ["Huduma, misimu, wateja, hekta", "Bei, gharama, eneo la kurudisha gharama", "Maombi ya kazi, dereva, malipo, hatari"] },
            { title: "Mfano: power tiller (XOF)", bullets: ["Za kudumu 600,000; uendeshaji 15,000 kwa ha; bei 35,000", "Kurudisha gharama 600,000 / 20,000 = ha 30", "Ha 50: faida XOF 400,000. Mifano tu"] },
            { title: "Ifanye ifanikiwe", bullets: ["Panga mashamba ya karibu pamoja; punguza safari", "Ongeza kazi za nje ya msimu", "Mikopo na mikataba: soma yote, uliza mshauri"] }
          ],
          sources: [FAO_HIRE, FAO_HIRE_MANUAL, FAO_SAMA, HELLO],
          tryIt: "Kazi ya mwisho: tengeneza karatasi yako ya uamuzi wa kukodi au kununua kwa mashine moja na kazi moja. Ikiwa kumiliki kunalipa tu kwa kazi za majirani, ongeza mpango wa ukurasa mmoja wa huduma ya kukodisha: huduma, wateja na hekta, bei, gharama, eneo la kurudisha gharama, maombi ya kazi na malipo, na hatari kuu.",
          youCanNow: "kupanga huduma ya kukodisha mashine yenye bei, gharama, eneo la kurudisha gharama na hatari.",
          quickCheck: [
            { objective: "O6", q: "Gharama za kudumu ni XOF 400,000 kwa mwaka, gharama za uendeshaji XOF 10,000 kwa hekta na bei XOF 30,000 kwa hekta. Eneo la kurudisha gharama ni lipi?", options: ["Hekta 10", "Hekta 13", "Hekta 40", "Hekta 20"], answer: 3, why: "400,000 / (30,000 - 10,000) = hekta 20." },
            { objective: "O6", q: "Hatua ipi inapunguza gharama ya safari ya huduma ya kukodisha trekta?", options: ["Kupanga pamoja maombi kutoka mashamba ya karibu", "Kuchukua kazi zilizo mbali mbali siku moja", "Kukataa mashamba madogo", "Kutopanga maombi kamwe"], answer: 0, why: "Kufanya mashamba ya karibu pamoja kunaokoa mafuta na muda barabarani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha mashine na biashara ya huduma",
        questions: [
          { objective: "O4", q: "Kabla ya kununua mashine ndogo, ukaguzi upi ni muhimu zaidi ili iendelee kufanya kazi?", options: ["Rangi yake", "Vipuri na fundi karibu nawe", "Bei aliyolipa jirani", "Kibandiko cha chapa yake"], answer: 1, why: "Bila vipuri na matengenezo karibu, mashine iliyoharibika inakaa bila kazi." },
          { objective: "O4", q: "Utatumia kinyunyizi cha injini. Kipi ni sahihi?", options: ["Kiuatilifu chochote kutoka sokoni", "Changanya viuatilifu viwili kuokoa muda", "Viuatilifu vilivyosajiliwa tu, kama lebo inavyosema, na vifaa vya kujikinga", "Nyunyiza bila kurekebisha"], answer: 2, why: "Bidhaa zilizosajiliwa tu, zikitumiwa kama lebo inavyosema, ndizo salama na halali." },
          { objective: "O5", q: "Ipi ni kanuni ya usalama wa trekta?", options: ["Hakuna abiria juu ya trekta au zana", "Watoto wanaweza kupanda wakiwa waangalifu", "Ondoa kizuizi cha PTO ili kufanya kazi haraka", "Endesha kwa kasi kwenye miteremko"], answer: 0, why: "Abiria huanguka chini ya magurudumu; hii ni sababu ya kawaida ya vifo mashambani." },
          { objective: "O5", q: "Kwa nini uweke daftari la mashine?", options: ["Ni kwa ajili ya benki tu", "Kuonyesha rangi ya mashine", "Kumfanya dereva afanye kazi polepole", "Kuona gharama halisi kwa hekta na wakati huduma inapohitajika"], answer: 3, why: "Kuandika kazi, mafuta na matengenezo kunaonyesha gharama halisi na nyakati za huduma." },
          { objective: "O6", q: "Nini kinapaswa kuwa katika mpango wa huduma ya kukodisha?", options: ["Bei ya mashine tu", "Huduma, wateja, bei, gharama, eneo la kurudisha gharama na hatari", "PIN ya mmiliki", "Nembo tu"], answer: 1, why: "Mpango unaonyesha kama huduma inaleta zaidi ya gharama yake na jinsi hatari zinavyoshughulikiwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mashine za Shamba na Huduma za Kukodisha Mashine",
    questions: [
      { objective: "O1", q: "Matumizi ya mashine (mechanization) yanajumuisha:", options: ["Matrekta makubwa tu", "Mashine za kuagiza kutoka nje tu", "Zana na mashine kuanzia zana bora za mkono hadi matrekta", "Ndege zisizo na rubani tu"], answer: 2, why: "FAO inahesabu kila kiwango, kuanzia zana za mkono hadi mashine za injini." },
      { objective: "O1", q: "Ipi ni sababu nzuri ya kupura kwa mashine?", options: ["Inafanya kwa saa chache kile ambacho watu wengi wangefanya kwa siku kadhaa, na nafaka kidogo inapotea", "Mashine zinaonekana za kisasa", "Kupura kwa mkono ni kinyume cha sheria", "Majirani wana mashine"], answer: 0, why: "Muda unaookolewa na hasara ndogo zinafanya kupura kuwa kazi nzuri ya kufanywa kwa mashine." },
      { objective: "O1", q: "Kupalilia hekta 1 kwa mkono kunagharimu KES 6,000 na huduma ya mashine inagharimu KES 9,000. Kwa gharama peke yake:", options: ["Mashine ni rahisi zaidi", "Ni sawa", "Huwezi kuvilinganisha", "Kupalilia kwa mkono ni rahisi zaidi"], answer: 3, why: "KES 6,000 ni chini ya KES 9,000, kwa hiyo mashine hailipi kwa gharama peke yake." },
      { objective: "O2", q: "Uchakavu ni:", options: ["Mafuta ambayo mashine inatumia", "Thamani ambayo mashine inapoteza kila mwaka", "Kiwango cha kukodi", "Mshahara wa dereva"], answer: 1, why: "Uchakavu unagawa upotevu wa thamani katika maisha yote ya mashine." },
      { objective: "O2", q: "Ipi ni gharama ya uendeshaji kwa hekta?", options: ["Bima", "Banda", "Mafuta", "Riba ya mkopo kwa mwaka"], answer: 2, why: "Mafuta yanaongezeka kwa kila hekta inayofanyiwa kazi; vingine ni vya kudumu." },
      { objective: "O2", q: "Gharama za kudumu NGN 2,000,000 kwa mwaka; kiwango cha kukodi NGN 50,000 kwa ha; gharama ya uendeshaji NGN 25,000 kwa ha. Eneo la kurudisha gharama?", options: ["Hekta 80", "Hekta 40", "Hekta 50", "Hekta 100"], answer: 0, why: "2,000,000 / (50,000 - 25,000) = hekta 80." },
      { objective: "O2", q: "Faida ipi ya kumiliki ambayo hesabu za gharama mara nyingi haziionyeshi?", options: ["Kulipa riba zaidi", "Kulima kwa wakati bila kusubiri trekta ya kukodi", "Bima kubwa zaidi", "Matengenezo zaidi"], answer: 1, why: "Wakati unaofaa una thamani hata kukodi kukiwa rahisi zaidi kwenye karatasi." },
      { objective: "O3", q: "Hello Tractor inawawezesha wakulima kukodi huduma za trekta:", options: ["Kwa posta tu", "Benki tu", "Ana kwa ana kiwandani tu", "Kupitia app ya simu, app ya tovuti au mawakala wa kuhifadhi"], answer: 3, why: "Hello Tractor inasema wakulima hukodi kupitia app zake au mawakala wa kuhifadhi." },
      { objective: "O3", q: "Unapaswa kupimaje shamba kwa kazi ya kukodi?", options: ["Amini makisio ya dereva", "Lipime mwenyewe kwa tepu au app ya GPS ya simu", "Hesabu miti", "Usilipime"], answer: 1, why: "Kipimo chako mwenyewe kinakulinda usilipe eneo kubwa kuliko lililofanyiwa kazi." },
      { objective: "O3", q: "Mpigaji simu anasema ni wakala wa trekta na anaomba malipo yote mapema kwa pesa za simu. Wewe:", options: ["Unalipa mara moja", "Unatuma PIN yako", "Unahifadhi kupitia app rasmi au wakala unayemjua, na unalipa baada ya kukagua kazi", "Unalipa mara mbili ili kuwa na uhakika"], answer: 2, why: "Wapigaji simu usiowajua wanaoomba malipo ya mapema ni ulaghai wa kawaida." },
      { objective: "O4", q: "Mashine ya kupura mazao mengi inaweza kupura:", options: ["Mpunga, mtama, uwele, maharagwe au soya", "Mihogo tu", "Kahawa tu", "Nyasi tu"], answer: 0, why: "Mashine za kupura mazao mengi zinafanya kazi na nafaka na mikunde mingi." },
      { objective: "O4", q: "Kipi SI ukaguzi muhimu kabla ya kununua mashine ndogo?", options: ["Vipuri karibu", "Mafunzo na dhamana kutoka kwa muuzaji", "Kazi ya kutosha kuifanya iwe na shughuli", "Rangi ya rangi yake"], answer: 3, why: "Vipuri, mafunzo na matumizi ndivyo vinavyoamua thamani; rangi haiamui." },
      { objective: "O4", q: "Nchini Kenya, orodha ya chombo kipi inaonyesha viuatilifu vilivyosajiliwa kwa vinyunyizi?", options: ["Bodi ya Maziwa ya Kenya", "Huduma ya Uvuvi ya Kenya", "Bodi ya Bidhaa za Kudhibiti Wadudu (PCPB)", "Huduma ya Wanyamapori ya Kenya"], answer: 2, why: "Bodi ya Bidhaa za Kudhibiti Wadudu inasajili viuatilifu nchini Kenya." },
      { objective: "O5", q: "Nani anaweza kuendesha trekta?", options: ["Mtoto yeyote aliye mwangalifu", "Mtu mzima aliyefunzwa", "Yeyote mwenye simu", "Abiria"], answer: 1, why: "Watu wazima waliofunzwa tu ndio wanaopaswa kuendesha mashine." },
      { objective: "O5", q: "Kwa nini vizuizi lazima vibaki kwenye shafti ya PTO?", options: ["Shafti inayozunguka inaweza kunasa nguo na kuua", "Vinafanya trekta iende haraka", "Ni mapambo tu", "Vinaokoa mafuta"], answer: 0, why: "Kunaswa na PTO ni sababu ya kawaida ya majeraha makubwa na vifo mashambani." },
      { objective: "O5", q: "Unapaswa kuweka mafuta kwenye mashine lini?", options: ["Ikiwa inafanya kazi", "Ukivuta sigara", "Karibu na moto wazi", "Injini ikiwa imezimwa na imepoa, bila kuvuta sigara"], answer: 3, why: "Mafuta kwenye injini ya moto au karibu na miali yanaweza kushika moto." },
      { objective: "O5", q: "Unapaswa kufanya ukaguzi wa msingi (oili, mafuta, kipozeo, matairi, bolti) mara ngapi?", options: ["Mara moja kwa mwaka", "Inapoharibika tu", "Kila siku kabla ya kazi", "Kamwe"], answer: 2, why: "Ukaguzi wa kila siku unagundua matatizo madogo kabla hayajasimamisha mashine wakati wa msimu wenye shughuli nyingi." },
      { objective: "O6", q: "Gharama za kudumu XOF 500,000 kwa mwaka; gharama ya uendeshaji XOF 15,000 kwa ha; bei XOF 40,000 kwa ha. Eneo la kurudisha gharama?", options: ["Hekta 12", "Hekta 20", "Hekta 25", "Hekta 33"], answer: 1, why: "500,000 / (40,000 - 15,000) = hekta 20." },
      { objective: "O6", q: "Kipi kinapunguza hatari ya mashine kuharibika wakati wa msimu wa kilele?", options: ["Kuruka matengenezo ili kuokoa pesa", "Kuiazimisha bila daftari", "Matengenezo ya mara kwa mara na vipuri vilivyo tayari", "Kuifanyisha kazi mchana na usiku bila ukaguzi"], answer: 2, why: "Matengenezo na vipuri vinaifanya mashine ifanye kazi wakati wateja wanaihitaji zaidi." },
      { objective: "O6", q: "Kabla ya kusaini mkataba wa kukodisha au mkopo wa mashine, unapaswa:", options: ["Kusoma mkataba wote na kumwuliza mshauri unayemwamini", "Kusaini haraka kabla ofa haijaisha", "Kusoma ukurasa wa kwanza tu", "Kumwacha muuzaji akujazie"], answer: 0, why: "Mikataba ina gharama na hatari; isome yote na upate ushauri." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi alipata kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 5, 8, 9, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Uchaguzi wa kazi", objective: "O1", notYet: "Hakuna sababu iliyotolewa ya kufanya kazi hiyo kwa mashine.", meets: "Kazi imechaguliwa kwa sababu (wakati, nguvu kazi, hasara au wingi) na gharama kwa mkono.", exceeds: "Analinganisha kazi mbili au zaidi na kueleza kwa nini hii inalipa zaidi." },
      { name: "Kulinganisha gharama", objective: "O2", notYet: "Gharama za kudumu au za uendeshaji hazipo, au hesabu si sahihi.", meets: "Uchakavu, gharama za kudumu, gharama za uendeshaji, gharama ya kukodi na eneo la kurudisha gharama ni sahihi, na uamuzi uko wazi.", exceeds: "Anatumia bei halisi na anazingatia wakati na hatari kando ya hesabu." },
      { name: "Ukaguzi wa mashine na huduma ya kukodisha", objective: "O4", notYet: "Hakuna ukaguzi wa vipuri, matengenezo au huduma ya kukodisha.", meets: "Anaorodhesha ukaguzi wa vipuri, fundi, mafunzo na dhamana, au wa masharti ya huduma ya kukodisha.", exceeds: "Amemwuliza muuzaji au huduma ya kukodisha na ameandika majibu." },
      { name: "Usalama na matengenezo", objective: "O5", notYet: "Hakuna kanuni za usalama au hakuna daftari.", meets: "Kanuni kuu za usalama na daftari lenye tarehe, saa, kazi, mafuta, matengenezo na gharama.", exceeds: "Anataja nani amefunzwa kuendesha na huduma ya kwanza inahitajika lini." },
      { name: "Uamuzi na mpango wa biashara", objective: "O6", notYet: "Hakuna uamuzi, au uamuzi wa kununua bila mpango wa kuifanya mashine iwe na kazi.", meets: "Uamuzi uko wazi; ikiwa ni kununua, kuna mpango wa ukurasa mmoja wa kukodisha wenye huduma, wateja, bei, gharama, eneo la kurudisha gharama na hatari.", exceeds: "Anaonyesha mpango bado unafanya kazi hekta zilizohifadhiwa zikipungua kwa 20%, au anasema nini kingebadilika." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofanya uamuzi wa kukodi au kununua kwa kutumia karatasi ya uamuzi ndani ya miezi 3 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kupanda kwa wakati kwa sababu ya mashine walizohifadhi au wanazomiliki katika msimu unaofuata",
      "Wanafunzi wanaoanzisha au kukuza huduma ya kukodisha, na hekta wanazohudumia, ndani ya miezi 12",
      "Majeraha yanayohusiana na mashine yanayoripotiwa na wanafunzi (lengo: hakuna)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, au simu yenye app ya jedwali (spreadsheet) au ya maelezo",
      "Kikokotoo (kikokotoo cha simu kinatosha)",
      "Tepu ya kupimia au simu yenye app ya GPS ya kupima eneo",
      "Bei halisi kutoka kwa muuzaji wa eneo lako na huduma za kukodisha, zinazokusanywa wakati wa kozi",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi, pamoja na ziara ya kuona mashine"
    ],
    facilitatorNotes: [
      "Panga onyesho na huduma ya kukodisha au muuzaji wa eneo lako: ukaguzi wa kila siku, vizuizi, na kuondoa kwa usalama kizuizi kwenye mashine ya kupukuchua au kupura injini ikiwa imezimwa.",
      "Badilisha bei za mfano kwa bei za eneo lako kabla ya Masomo ya 2 na 6, na useme wazi kuwa ni mifano.",
      "Eleza mikopo, mikataba ya kukodisha na mipango ya kulipa kidogo kidogo na hatari zake, lakini usitoe ushauri wa uwekezaji; waelekeze wanafunzi kwa mshauri wanayemwamini.",
      "Weka watoto mbali na maonyesho yote ya mashine.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Unganisha vikundi vinavyotaka kushirikiana mashine na kozi \"Kuhamasisha Jamii: Kushirikiana Mashine na Kujadiliana Bei za Pembejeo\" (Community Mobilization: Pooling Machinery and Bargaining for Inputs)."
    ]
  }
};
