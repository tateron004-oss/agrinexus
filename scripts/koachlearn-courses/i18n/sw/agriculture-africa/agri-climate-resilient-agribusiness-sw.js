"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-climate-resilient-agribusiness.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CSA = { name: "FAO: Kitabu cha Kilimo Kinachostahimili Tabianchi (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const CGIAR_MAIZE = { name: "CGIAR: Mahindi yanayostahimili ukame (climate-smart maize)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const CBK = { name: "Benki Kuu ya Kenya (Central Bank of Kenya; orodha za benki na benki za mikopo midogo zenye leseni)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Benki Kuu ya Nigeria (Central Bank of Nigeria; taasisi zenye leseni na ulinzi wa watumiaji)", url: "https://www.cbn.gov.ng" };
const BOA = { name: "Benki ya Kilimo, Nigeria (Bank of Agriculture)", url: "https://www.boanig.com" };
const ADB_GH = { name: "Benki ya Maendeleo ya Kilimo, Ghana (Agricultural Development Bank)", url: "https://agricbank.com" };
const GCF = { name: "Mfuko wa Kijani wa Tabianchi (Green Climate Fund; unafanya kazi kupitia serikali, benki na mashirika yaliyoidhinishwa, si moja kwa moja na wakulima)", url: "https://www.greenclimate.fund" };
const IRA = { name: "Mamlaka ya Udhibiti wa Bima, Kenya (Insurance Regulatory Authority; hakikisha kampuni ya bima ina leseni)", url: "https://www.ira.go.ke" };
const ABPP = { name: "SNV/Hivos: Taarifa fupi ya Africa Biogas Partnership Programme (mitambo ya biogesi ya nyumbani na bio-slurry)", url: "https://snv.org/assets/explore/download/20200526_-_abpp-4bf_factsheet.pdf" };
const FAO_AGROFOR = { name: "FAO: Kilimo mseto cha miti (Agroforestry)", url: "https://www.fao.org/agroforestry/en/" };
const KE_CARBON = { name: "Kenya: Kanuni za Mabadiliko ya Tabianchi (Masoko ya Kaboni), 2024 (muhtasari na maandishi kamili)", url: "https://climate-laws.org/document/the-climate-change-carbon-markets-regulations-2024_e0fd" };
const VERRA = { name: "Rejista ya Verra (tafuta mradi wa kaboni kwa jina au namba yake)", url: "https://registry.verra.org" };
const GOLD = { name: "Rejista ya Gold Standard (tafuta mradi wa kaboni kwa jina au namba yake)", url: "https://registry.goldstandard.org" };

module.exports = {
  id: "agri-climate-resilient-agribusiness-sw",
  lang: "sw",
  translationOf: "agri-climate-resilient-agribusiness",
  category: "Agriculture (Africa)",
  name: "Biashara ya Kilimo Inayostahimili Tabianchi",
  skills: "Kupima hatari za tabianchi kwa pesa, Kukokotoa gharama ya uwekezaji wa kukabiliana, Kutafuta na kukagua fedha za tabianchi, Kupunguza gharama na uzalishaji wa gesi pamoja, Kutambua ulaghai wa mikopo ya kaboni, Kuandika mpango wa kustahimili tabianchi",
  outcome: "kuandika mpango wa ukurasa mmoja wa kustahimili tabianchi kwa biashara yako ya shamba: hatari za tabianchi zinazokugharimu zaidi, uwekezaji wa kukabiliana utakaofanya na gharama yake, jinsi utakavyoulipia, njia za kuokoa pesa utakazoongeza, na jinsi utakavyopima ofa yoyote ya mikopo ya kaboni.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wakulima wa kibiashara wanaokua, vijana wajasiriamali wa kilimo, viongozi wa vikundi vya wakulima na maafisa ugani nchini Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire na kote Afrika ambao tayari wanaona mabadiliko ya tabianchi mashambani mwao na wanataka kuyashughulikia kama tatizo la biashara lenye mpango wa biashara.",
    "Sura ya 1 inaweka hatari za tabianchi katika pesa: unapima hatari kwa biashara yako ya shamba, unachagua na kukokotoa gharama ya uwekezaji wa kukabiliana kama mbegu zinazostahimili ukame, kuhifadhi maji, kivuli na miradi mipya, na unajifunza aina za fedha za tabianchi na mikopo ya kijani na jinsi ya kuzikagua. Sura ya 2 inahusu njia zinazopunguza uzalishaji wa gesi na gharama kwa wakati mmoja, mipango ya mikopo ya kaboni na jinsi ya kuepuka ulaghai na mikataba isiyo ya haki, na kuongeza yote haya katika mpango wako wa biashara.",
    "Kozi \"Kilimo Kinachozingatia Tabianchi\" inahusu utabiri wa msimu na kalenda ya hatari za tabianchi; isome kwanza ukiweza. Namba zote za pesa hapa ni mifano ya kubuni: tumia bei zako za eneo lako. Kozi hii inaeleza jinsi fedha na mikataba zinavyofanya kazi; haikuambii uwekeze katika nini. Soma kila mkataba wote na zungumza na mshauri unayemwamini kabla ya kusaini. Kila somo linachukua kama dakika tano na linaisha na kazi kwa shamba lako mwenyewe."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa kustahimili tabianchi kwa biashara yako ya shamba (au shamba la mfano kama ekari 3 za mahindi na maharagwe pamoja na mbuzi 6 wa maziwa huko Makueni, hekta 4 za kakao katika Mkoa wa Magharibi wa Ghana, au hekta 2 za mpunga na karanga karibu na Kaolack, Senegal): hatari zako tatu kuu za tabianchi pamoja na makadirio ya gharama ya kila moja; uwekezaji wa kukabiliana miwili au mitatu pamoja na gharama yake, faida ya kila mwaka na muda wa kurudisha pesa; jinsi utakavyolipa (akiba, kikundi, mkopo, ruzuku) pamoja na maswali utakayomuuliza mkopeshaji; angalau njia mbili zinazopunguza gharama na uzalishaji wa gesi; kanuni zako za kupima ofa yoyote ya mikopo ya kaboni; na tarehe utakayoupitia mpango upya.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa kibiashara wanaokua, wafanyakazi wa mashambani, vijana wajasiriamali wa kilimo na maafisa ugani kote Afrika (Kenya, Nigeria, Ghana na Afrika Magharibi inayozungumza Kifaransa). Wengi wana mashamba mchanganyiko ya mazao na mifugo na wanauza sehemu ya wanachozalisha. Baadhi huweka kumbukumbu rahisi; wengi hawaweki.",
    startingPoint: "Wanaweza kutaja mabadiliko ya tabianchi wanayoyaona (mvua kuchelewa, vipindi vya ukavu, joto, mafuriko) na wengi wanajua baadhi ya njia za kilimo kinachostahimili tabianchi. Wachache huweka thamani ya pesa kwenye hatari za tabianchi, hulinganisha uwekezaji wa kukabiliana kwa muda wa kurudisha pesa, au wanajua jinsi ya kukagua mkopo wa kijani au mkataba wa mikopo ya kaboni.",
    gap: "Mishtuko ya tabianchi inapunguza mapato na uwezo wa kulipa mikopo, lakini wakulima wengi hutumia pesa kukabiliana bila kukokotoa gharama, hukopa bila kulinganisha gharama yote, au husaini mikataba ya kaboni wasiyoielewa. Wanafunzi wanahitaji kupanga kustahimili tabianchi kama uamuzi wa kibiashara, kujilinda dhidi ya ulaghai na kuwaonyesha wakopeshaji, wanunuzi na programu mpango unaoaminika.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanatumia Kiingereza kama lugha ya pili na kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: simu ya kawaida au simu janja, karatasi na kikokotoo; intaneti inaweza kuwa ya polepole au ghali",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi za shamba",
      "Pesa: namba zote ni mifano; hakuna bei, riba wala ruzuku inayotolewa kama ukweli",
      "Usalama wa fedha: hakuna ushauri wa uwekezaji; wanafunzi hawatoi kamwe PIN, vitambulisho au namba za akaunti katika kazi za mazoezi"
    ],
    prerequisites: "Kumbukumbu rahisi za shamba na faida ghafi zinasaidia (\"Biashara ya Kilimo na Usimamizi wa Shamba\"). Inapendekezwa kusoma kwanza \"Kilimo Kinachozingatia Tabianchi\" (utabiri na kalenda ya hatari za tabianchi)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa miradi ya shamba lako na yaliyotokea katika misimu mitano iliyopita", action: "kupima hatari kuu za tabianchi kwa biashara yako ya shamba kwa uwezekano wake na kiasi cha pesa zinazoweza kukugharimu", standard: "ukiorodhesha angalau hatari tatu, kila moja ikiwa na makadirio ya gharama kwa sarafu ya nchi yako" },
    { id: "O2", condition: "Ukipewa uwekezaji wa kukabiliana miwili au mitatu inayowezekana", action: "kukokotoa gharama ya kila uwekezaji na kulinganisha faida yake ya kila mwaka na gharama yake", standard: "ukitumia bei zako za eneo lako na kuonyesha muda wa kurudisha pesa kwa misimu au miaka" },
    { id: "O3", condition: "Kabla ya kuomba mkopo wa tabianchi au wa kijani, ruzuku au programu", action: "kuorodhesha maswali ya kumuuliza mkopeshaji na kuhakikisha ana leseni", standard: "yakihusu gharama yote, tarehe za kulipa, masharti na nani anamdhibiti" },
    { id: "O4", condition: "Ukipewa njia unazotumia sasa", action: "kutambua njia mbili zinazopunguza uzalishaji wa gesi joto na pia kupunguza gharama zako", standard: "ukitaja pembejeo au pesa ambazo kila njia inaokoa" },
    { id: "O5", condition: "Ukipewa ofa au mkataba wa mikopo ya kaboni", action: "kukagua ofa hiyo kuona dalili za hatari za ulaghai au mpango usio wa haki", standard: "ukijibu angalau maswali manne ya ukaguzi kabla ya kusaini au kulipa chochote" },
    { id: "O6", condition: "Ukitumia kazi yako ya kozi hii", action: "kuandika mpango wa ukurasa mmoja wa kustahimili tabianchi kwa biashara yako ya shamba", standard: "wenye hatari, uwekezaji, gharama, fedha, njia za kuokoa pesa na tarehe ya kuupitia upya" }
  ],
  chapters: [
    {
      name: "Sura 1: Hatari za tabianchi ni hatari za biashara",
      lessons: [
        {
          title: "Kupima hatari za tabianchi kwa biashara yako ya shamba",
          objectives: ["O1"],
          minutes: 5,
          goal: "Pima hatari za tabianchi kwa biashara yako ya shamba kwa uwezekano wake na athari yake ya pesa.",
          text: [
            "Kalenda ya hatari za tabianchi inaonyesha hali ya hewa inapoumiza shamba lako. Upimaji wa hatari za tabianchi unaenda hatua moja zaidi: unauliza kila hatari inaweza kugharimu biashara yako kiasi gani, ili ujue ni zipi za kutumia pesa kwanza.",
            "Kwa kila mradi (mahindi, nyanya, mbuzi, kakao, sato), orodhesha majanga ya tabianchi: mvua kuanza kuchelewa, kipindi cha ukavu wakati wa kutoa maua, joto kali kwa wanyama, mafuriko, upepo mkali, wadudu wapya. Uliza maswali mawili kwa kila moja: Uwezekano wake ni upi katika misimu mitano ijayo (mdogo, wa kati au mkubwa)? Na likitokea, utapoteza mapato kiasi gani? Tumia kumbukumbu zako na uwaulize wakulima wazee kilichotokea katika miaka mibaya iliyopita.",
            "Kisha fikiria biashara yote, si shamba tu: Bado unaweza kulipa mkopo katika mwaka mbaya? Wanunuzi bado watachukua mazao yako ubora ukishuka? Wafanyakazi wanaweza kufika shambani wakati wa mafuriko? Kipindi cha ukavu kinachopunguza magunia 40 ya mahindi hadi 25 si tatizo la mavuno tu; ni tatizo la mtiririko wa pesa pia.",
            "Weka hatari katika jedwali rahisi na uzipange. Hatari zenye uwezekano mkubwa na gharama kubwa zinakwenda juu ya mpango wako."
          ],
          steps: ["Orodhesha miradi yako.", "Chini ya kila mmoja, orodhesha majanga ya tabianchi kutoka uzoefu wako na kalenda yako ya hatari.", "Weka alama ya uwezekano wa kila janga: mdogo, wa kati au mkubwa.", "Kadiria pesa utakazopoteza likitokea, kwa sarafu yako.", "Panga: hatari zenye uwezekano mkubwa na gharama kubwa kwanza.", "Ongeza athari kwa biashara: kulipa mkopo, mikataba na wanunuzi, nguvu kazi, usafiri."],
          words: [["Upimaji wa hatari za tabianchi", "orodha ya majanga ya tabianchi yanayokabili biashara yako, uwezekano wa kila moja na kiasi linaloweza kugharimu."], ["Janga", "tukio linaloweza kuleta madhara, kama ukame, mafuriko au joto kali."], ["Uwezekano", "kiasi ambacho kitu kinaweza kutokea."], ["Athari", "kiasi cha uharibifu au hasara ya pesa ambayo tukio linaleta."]],
          slides: [
            { title: "Kutoka kalenda hadi gharama", bullets: ["Kalenda: hali ya hewa inapoumiza", "Upimaji: inagharimu biashara yako kiasi gani", "Tumia pesa kwanza kwa hatari kubwa zaidi"] },
            { title: "Maswali mawili kwa kila janga", bullets: ["Uwezekano wake katika misimu mitano ijayo?", "Mapato kiasi gani yatapotea likitokea?", "Tumia kumbukumbu na kumbukumbu za wakulima wazee"] },
            { title: "Fikiria zaidi ya shamba", bullets: ["Kulipa mikopo katika mwaka mbaya", "Mikataba na wanunuzi na ubora", "Nguvu kazi, usafiri, uhifadhi"] },
            { title: "Panga hatari", bullets: ["Uwezekano mkubwa + gharama kubwa = juu ya mpango", "Mfano: ukavu unapunguza magunia 40 hadi 25", "Hilo ni tatizo la mtiririko wa pesa pia"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Tengeneza jedwali lenye safu nne: janga, uwezekano (mdogo, wa kati, mkubwa), makadirio ya pesa zitakazopotea, na athari kwa biashara. Jaza angalau majanga matatu kwa shamba lako mwenyewe na uzungushie duara lile la juu.",
          youCanNow: "kupima hatari za tabianchi kwa biashara yako ya shamba kwa uwezekano wake na kiasi zinachoweza kugharimu.",
          quickCheck: [
            { objective: "O1", q: "Hatari ipi inapaswa kuwa juu ya mpango wa hatari za tabianchi wa shamba?", options: ["Ile yenye uwezekano mdogo na gharama ndogo", "Ile yenye uwezekano mkubwa na ingegharimu pesa nyingi", "Ile inayomhusu jirani tu", "Ile iliyotokea mara moja miaka 40 iliyopita"], answer: 1, why: "Hatari zenye uwezekano mkubwa na gharama kubwa zinaleta madhara zaidi kwa biashara, kwa hiyo zinakuja kwanza." },
            { objective: "O1", q: "Kipindi cha ukavu kinapunguza mavuno ya mahindi ya mkulima na hawezi kulipa mkopo wake kwa wakati. Hii inaonyesha nini?", options: ["Hatari za tabianchi zinaathiri mavuno tu", "Mikopo haiathiriwi kamwe na hali ya hewa", "Hatari za tabianchi zinaathiri pia mtiririko wa pesa na malipo ya mkopo", "Mkulima aache kuweka kumbukumbu"], answer: 2, why: "Upimaji wa hatari za tabianchi unaangalia biashara yote, pamoja na mtiririko wa pesa na madeni." }
          ]
        },
        {
          title: "Kuchagua na kukokotoa gharama ya uwekezaji wa kukabiliana",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kokotoa gharama ya uwekezaji wa kukabiliana miwili na ulinganishe muda wa kurudisha pesa.",
          text: [
            "Uwekezaji wa kukabiliana ni pesa au kazi unayotumia sasa ili upoteze kidogo katika miaka mibaya. Ya kawaida Afrika ni mbegu zinazostahimili ukame au zinazokomaa mapema (vituo vya CGIAR kama CIMMYT vimezalisha mahindi yanayostahimili ukame), kuhifadhi maji (matangi, mabwawa yaliyotandikwa), miti ya kivuli kwa kakao, kahawa au wanyama, mabanda bora ya wanyama, na kuwa na vyanzo vingi vya mapato: kuongeza zao la pili, mbuzi, kuku au samaki ili msimu mmoja mbaya usikuangushe.",
            "Kwa kila chaguo, andika gharama (kununua, kujenga, nguvu kazi, matunzo) na faida ya kila mwaka (mavuno zaidi katika mwaka mbaya, chakula cha mifugo kidogo kununuliwa, mapato mapya). Kisha kokotoa muda wa kurudisha pesa: gharama ikigawanywa kwa faida ya kila mwaka inakupa takriban miaka mingapi hadi uwekezaji ujilipe. Kumbuka kwamba faida nyingine zinakuja katika miaka mibaya tu, kwa hiyo zigawanye kwa wastani wa misimu kadhaa.",
            "Mfano kwa namba za kubuni: mkulima wa Machakos analinganisha tangi la maji la KES 60,000 linalookoa takriban KES 20,000 kwa mwaka katika maji yanayonunuliwa na mboga zinazopotea (pesa zinarudi kwa takriban miaka 3), na mbegu zinazostahimili ukame zinazogharimu KES 2,000 zaidi kwa ekari na kuokoa takriban KES 8,000 katika mwaka wa ukame unaokuja mwaka mmoja kati ya miwili (wastani KES 4,000 kwa mwaka, pesa zinarudi katika msimu wa kwanza). Vyote viwili vinaweza kufaa; mbegu ni rahisi zaidi kuanza nazo.",
            "Kagua pia: Unaweza kuutunza? Unafaa nguvu kazi yako na ardhi yako? Unafanya kazi katika mwaka mzuri pia? Muulize afisa ugani wako aina za mbegu na miundo inayofaa eneo lako."
          ],
          steps: ["Chagua hatari yako kuu kutoka Somo la 1.", "Orodhesha uwekezaji miwili au mitatu inayoipunguza.", "Andika gharama yote ya kila mmoja: kununua, kujenga, nguvu kazi, matunzo.", "Kadiria faida ya kila mwaka, kwa wastani wa miaka mizuri na mibaya.", "Muda wa kurudisha pesa = gharama ÷ faida ya kila mwaka.", "Kagua nguvu kazi, matunzo na ushauri wa afisa ugani."],
          words: [["Uwekezaji wa kukabiliana", "pesa au kazi inayotumiwa sasa ili upoteze kidogo tabianchi inapokugonga."], ["Muda wa kurudisha pesa", "muda unaohitajika hadi pesa ambazo uwekezaji unaokoa au kuingiza zifikie gharama yake."], ["Vyanzo vingi vya mapato", "kuwa na zaidi ya chanzo kimoja cha mapato ili kushindwa kwa kimoja kusiangushe biashara."]],
          slides: [
            { title: "Uwekezaji wa kukabiliana wa kawaida", bullets: ["Mbegu zinazostahimili ukame au zinazokomaa mapema", "Kuhifadhi maji: matangi, mabwawa yaliyotandikwa", "Miti ya kivuli, mabanda bora ya wanyama", "Miradi mipya: mbuzi, kuku, samaki"] },
            { title: "Gharama na faida", bullets: ["Gharama: kununua, kujenga, nguvu kazi, matunzo", "Faida: hasara zinazoepukwa, mapato mapya", "Gawanya faida za miaka mibaya kwa wastani wa misimu"] },
            { title: "Muda wa kurudisha pesa (mfano wa kubuni, KES)", bullets: ["Tangi 60,000 ÷ 20,000 kwa mwaka = takriban miaka 3", "Mbegu +2,000 kwa ekari ÷ 4,000 kwa mwaka = msimu wa kwanza", "Tumia bei zako za eneo lako"] },
            { title: "Kabla ya kuchagua", bullets: ["Unaweza kuutunza?", "Unafaa ardhi yako na nguvu kazi yako?", "Muulize afisa ugani kinachofaa eneo lako"] }
          ],
          sources: [CGIAR_MAIZE, FAO_CSA],
          tryIt: "Kwa hatari yako kuu, kokotoa gharama ya uwekezaji wa kukabiliana miwili kwa bei zako za eneo lako. Andika gharama, wastani wa faida ya kila mwaka na muda wa kurudisha pesa kwa kila mmoja, kisha zungushia duara ule ungeanza nao na useme kwa nini.",
          youCanNow: "kukokotoa gharama ya uwekezaji wa kukabiliana na kuilinganisha kwa muda wa kurudisha pesa.",
          quickCheck: [
            { objective: "O2", q: "Wavu wa kivuli unagharimu GHS 3,000 na kuokoa takriban GHS 1,000 kwa mwaka katika nyanya zinazopotea. Muda wa kurudisha pesa ni takriban upi?", options: ["Miezi 3", "Mwaka 1", "Miaka 10", "Takriban miaka 3"], answer: 3, why: "Muda wa kurudisha pesa ni gharama ikigawanywa kwa faida ya kila mwaka: 3,000 ÷ 1,000 = takriban miaka 3 (namba za mfano)." },
            { objective: "O2", q: "Mbegu zinazostahimili ukame zinasaidia katika miaka ya ukame tu, inayokuja takriban mwaka mmoja kati ya mitatu. Uhesabu faida yake vipi?", options: ["Gawanya akiba ya mwaka wa ukame kwa wastani wa miaka yote", "Hesabu akiba ya mwaka wa ukame kila mwaka", "Usihesabu faida yoyote", "Ihesabu katika miaka ya mvua tu"], answer: 0, why: "Faida zinazokuja katika miaka mibaya tu zinapaswa kugawanywa kwa wastani wa miaka mizuri na mibaya." }
          ]
        },
        {
          title: "Fedha za tabianchi na mikopo ya kijani",
          objectives: ["O3"],
          minutes: 5,
          goal: "Orodhesha maswali ya kuuliza kabla ya kuchukua mkopo wa tabianchi au wa kijani na uhakikishe mkopeshaji ana leseni.",
          text: [
            "Fedha za tabianchi ni pesa zilizokusudiwa kukabiliana na mabadiliko ya tabianchi au kupunguza uzalishaji wa gesi. Mifuko mikubwa kama Green Climate Fund (Mfuko wa Kijani wa Tabianchi) haikopeshi wakulima moja kwa moja; inafanya kazi kupitia serikali, benki na mashirika. Kinachowafikia wakulima kwa kawaida kinakuja kama: mikopo ya kijani au ya tabianchi kutoka benki, benki za mikopo midogo na SACCO (kwa matangi, pampu za jua, vifaa vya umwagiliaji wa matone, biogesi); mipango ya kulipa kidogo kidogo kutoka kwa wauzaji wa vifaa; programu za serikali au mashirika yasiyo ya kiserikali zinazochangia gharama ya mbegu, matangi au miti; na ruzuku au fedha za kulingana kwa vikundi na vyama vya ushirika.",
            "Wapi pa kuuliza: benki yako au SACCO, chama chako cha ushirika, ofisi ya kilimo ya kaunti au jimbo lako na afisa ugani, na benki za kilimo kama Bank of Agriculture nchini Nigeria au Agricultural Development Bank nchini Ghana. Programu hubadilika mara kwa mara, kwa hiyo uliza zipi ziko wazi sasa na upate maelezo kwa maandishi.",
            "Jina la \"kijani\" halifanyi mkopo kuwa rahisi wala salama. Linganisha gharama yote (riba, ada, bima), malipo yanaangukia lini (yanalingana na mavuno yako?), nini kinatokea mavuno yakishindwa, na masharti yoyote (wauzaji walioidhinishwa, mafunzo, bima). Hakikisha mkopeshaji ana leseni: nchini Kenya kwenye orodha za Benki Kuu ya Kenya, nchini Nigeria kwa Benki Kuu ya Nigeria, kwingineko kwa benki kuu yako au mdhibiti wa vyama vya ushirika.",
            "Usimlipe kamwe wakala \"ada ya kushughulikia\" ili upate ruzuku au mkopo, na usitoe kamwe PIN yako au msimbo wa pesa za simu."
          ],
          steps: ["Amua pesa zitanunua nini na muda wake wa kurudisha pesa (Somo la 2).", "Uliza benki yako, SACCO, chama cha ushirika na ofisi ya kilimo kipi kiko wazi sasa.", "Pata gharama yote, tarehe za kulipa na masharti kwa maandishi.", "Mkague mkopeshaji kwenye orodha ya benki kuu au mdhibiti.", "Uliza: nini kinatokea mavuno yangu yakishindwa?", "Zungumza na mshauri unayemwamini kabla ya kusaini."],
          words: [["Fedha za tabianchi", "pesa za kukabiliana na mabadiliko ya tabianchi au kupunguza uzalishaji wa gesi."], ["Mkopo wa kijani", "mkopo wa kitu kinachosaidia mazingira, kama pampu ya jua au mtambo wa biogesi."], ["SACCO", "chama cha akiba na mikopo kinachomilikiwa na wanachama wake."], ["Kulipa kidogo kidogo (pay-as-you-go)", "kulipia kifaa kwa kiasi kidogo cha mara kwa mara, mara nyingi kwa pesa za simu."]],
          slides: [
            { title: "Pesa za tabianchi zinavyowafikia wakulima", bullets: ["Mikopo ya kijani: benki, mikopo midogo, SACCO", "Mipango ya kulipa vifaa kidogo kidogo", "Programu za kuchangia gharama na ruzuku za vikundi"] },
            { title: "Wapi pa kuuliza", bullets: ["Benki yako, SACCO au chama cha ushirika", "Ofisi ya kilimo na afisa ugani", "Benki za kilimo, k.m. Bank of Agriculture (NG), ADB (GH)"] },
            { title: "Kijani haimaanishi rahisi", bullets: ["Gharama yote: riba + ada + bima", "Malipo yanalingana na mavuno yako?", "Itakuwaje mavuno yakishindwa?"] },
            { title: "Kaa salama", bullets: ["Mkopeshaji ana leseni? Kagua orodha za benki kuu", "Usimlipe wakala \"ada ya kushughulikia\" kamwe", "Usitoe PIN wala msimbo wako kamwe"] }
          ],
          sources: [GCF, CBK, CBN, BOA, ADB_GH],
          tryIt: "Andika maswali matano utakayomuuliza mkopeshaji au programu kuhusu uwekezaji uliouchagua katika Somo la 2. Weka gharama yote, tarehe za kulipa, masharti, nini kinatokea mavuno yakishindwa, na jinsi utakavyohakikisha wana leseni.",
          youCanNow: "kuorodhesha maswali ya kuuliza kuhusu mkopo wa tabianchi au wa kijani na kuhakikisha mkopeshaji ana leseni.",
          quickCheck: [
            { objective: "O3", q: "Wakala anasema utapata ruzuku ya tabianchi ukituma kwanza KES 3,000 kama ada ya kushughulikia. Ufanye nini?", options: ["Kulipa haraka kabla ruzuku haijafungwa", "Kutuma nusu sasa na nusu baadaye", "Kukataa; programu halisi haziwaagizi mawakala kukusanya ada kama hii", "Kumpa wakala PIN yako ya pesa za simu badala yake"], answer: 2, why: "\"Ada za kushughulikia\" zinazolipwa mapema kwa mawakala ni ulaghai wa kawaida; kagua programu kwa ofisi rasmi." },
            { objective: "O3", q: "Swali lipi ni muhimu zaidi unapolinganisha mikopo miwili ya kijani ya pampu ya jua?", options: ["Upi una nembo nzuri zaidi", "Gharama yote na kama malipo yanalingana na mavuno yako", "Wakala yupi ni mkarimu zaidi", "Upi unaitwa wa kijani"], answer: 1, why: "Gharama yote na wakati wa malipo vinaamua kama unaweza kumudu mkopo, vyovyote jina lake." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Hatari za tabianchi ni hatari za biashara",
        questions: [
          { objective: "O1", q: "Upimaji wa hatari za tabianchi unaongeza nini kwenye kalenda ya hatari za tabianchi?", options: ["Majina ya miezi", "Utabiri wa mvua", "Uwezekano wa kila hatari na kiasi inachoweza kugharimu biashara", "Orodha ya mazao ya kuacha kulima"], answer: 2, why: "Upimaji unaweka uwezekano na athari ya pesa kwa kila hatari ili uweze kuzipanga." },
          { objective: "O1", q: "Mafuriko yanakata barabara ya kwenda kwa mnunuzi wako kwa wiki mbili kila mwaka. Hili linaenda wapi?", options: ["Popote; halihusu mavuno", "Katika athari za biashara za upimaji wako wa hatari za tabianchi", "Katika shajara yako tu", "Katika mpango wa mnunuzi, si wako"], answer: 1, why: "Hatari za tabianchi kwa usafiri, wanunuzi na nguvu kazi ni hatari za biashara na zinahusika katika upimaji." },
          { objective: "O2", q: "Mfugaji wa sato nchini Nigeria analinganisha karatasi ya kutandika bwawa ya NGN 400,000 inayookoa NGN 200,000 kwa mwaka. Muda wa kurudisha pesa ni upi?", options: ["Takriban miaka 2", "Takriban miaka 20", "Takriban miezi 2", "Pesa hazirudi kamwe"], answer: 0, why: "400,000 ÷ 200,000 = takriban miaka 2 (namba za mfano)." },
          { objective: "O2", q: "Kipi ni mfano wa kuwa na vyanzo vingi vya mapato kama uwekezaji wa kukabiliana?", options: ["Kupanda aina ileile ya mahindi kwenye ardhi zaidi", "Kuuza mbuzi wako wote", "Kukopa zaidi kwa zao lilelile", "Kuongeza kuku kwenye shamba la mahindi ili msimu mmoja mbaya usikuangushe"], answer: 3, why: "Chanzo cha pili cha mapato kinasambaza hatari ya tabianchi katika biashara." },
          { objective: "O3", q: "Mkulima nchini Kenya anawezaje kuhakikisha kwamba mkopeshaji anayetoa mkopo wa kijani ana leseni?", options: ["Kumuuliza wakala wa mkopeshaji", "Kukagua orodha za Benki Kuu ya Kenya za taasisi zenye leseni", "Kuangalia idadi ya \"likes\" kwenye mitandao ya kijamii", "Kumwamini akisema \"kijani\""], answer: 1, why: "Benki kuu inachapisha orodha za benki na benki za mikopo midogo zenye leseni." }
        ]
      }
    },
    {
      name: "Sura 2: Kupunguza gharama, kaboni na kupanga",
      lessons: [
        {
          title: "Kupunguza uzalishaji wa gesi kunakookoa pesa pia",
          objectives: ["O4"],
          minutes: 5,
          goal: "Tambua njia mbili shambani mwako zinazopunguza uzalishaji wa gesi na gharama kwa wakati mmoja.",
          text: [
            "Kupunguza uzalishaji wa gesi (mitigation) kunamaanisha kupunguza gesi joto ambazo shamba linatoa, au kuhifadhi kaboni zaidi katika udongo na miti. Kwa mkulima, njia bora ni ile inayookoa pesa pia, kwa sababu unafaidika hata kama hakuna anayekulipa kwa kaboni.",
            "Mbolea kidogo inayopotea: mbolea inayopotea kwa mvua, upepo au wakati usiofaa ni pesa zilizopotea na pia inatoa gesi. Kuiweka karibu na mizizi kwa wakati unaofaa, na kuongeza samadi na mboji, kunaleta mavuno zaidi kutoka kila mfuko. Biogesi: mtambo wa biogesi wa nyumbani unageuza kinyesi cha ng'ombe au nguruwe kuwa gesi ya kupikia, kupunguza unachotumia kwa kuni au mkaa, na bio-slurry inayobaki ni mbolea. Africa Biogas Partnership Programme imesaidia kujenga mitambo ya biogesi ya nyumbani nchini Kenya, Burkina Faso na nchi nyingine.",
            "Kilimo mseto cha miti: miti shambani inahifadhi kaboni na inaweza kutoa matunda, chakula cha mifugo, kuni, mbao na kivuli (kwa mfano miti ya kivuli katika kakao nchini Côte d'Ivoire na Ghana), kupunguza unachonunua. Njia nyingine za kuokoa: kutochoma mabaki ya mazao (kunahifadhi virutubisho na kuokoa mbolea), chakula bora kwa wanyama (maziwa zaidi kwa kila mnyama), na pampu za jua badala ya dizeli (gharama ndogo ya kuendesha).",
            "Andika akiba kwa pesa. Mtambo wa biogesi ukigharimu XOF 500,000 na kuokoa XOF 120,000 kwa mwaka katika mkaa na mbolea (namba za kubuni), unaweza kukokotoa muda wake wa kurudisha pesa kama uwekezaji mwingine wowote."
          ],
          steps: ["Orodhesha pembejeo unazonunua zaidi: mbolea, mafuta, chakula cha mifugo, kuni.", "Kwa kila moja, tafuta njia inayotumia kidogo au inayoibadilisha.", "Kadiria pesa zitakazookolewa kwa mwaka.", "Kagua gharama na muda wa kurudisha pesa.", "Chagua mbili za kuanza nazo."],
          words: [["Kupunguza uzalishaji wa gesi (mitigation)", "kupunguza utoaji wa gesi joto, au kuhifadhi kaboni zaidi katika udongo na miti."], ["Mtambo wa biogesi", "tangi lililofungwa ambamo kinyesi cha wanyama kinaoza na kutengeneza biogesi ya kupikia au mwanga."], ["Bio-slurry", "kimiminika kinachobaki baada ya kutengeneza biogesi; kinaweza kutumika kama mbolea."], ["Kilimo mseto cha miti", "kupanda miti pamoja na mazao au wanyama kwenye ardhi ileile."]],
          slides: [
            { title: "Kupunguza gesi kunakolipa", bullets: ["Kunapunguza gesi au kunahifadhi kaboni", "Pia kunapunguza gharama zako", "Unafaidika hata bila malipo ya kaboni"] },
            { title: "Njia tatu za kuokoa pesa", bullets: ["Mbolea kidogo inayopotea: mahali sahihi, wakati sahihi", "Biogesi: gesi ya kupikia + mbolea ya bio-slurry", "Kilimo mseto cha miti: matunda, chakula cha mifugo, kuni, kivuli"] },
            { title: "Njia zaidi za kuokoa", bullets: ["Usichome mabaki ya mazao", "Chakula bora: maziwa zaidi kwa kila mnyama", "Pampu ya jua badala ya dizeli"] },
            { title: "Iweke kwa pesa", bullets: ["Mfano: mtambo wa biogesi wa XOF 500,000", "Unaokoa XOF 120,000 kwa mwaka (namba za kubuni)", "Pesa zinarudi kwa takriban miaka 4"] }
          ],
          sources: [ABPP, FAO_AGROFOR, FAO_CSA],
          tryIt: "Orodhesha pembejeo tatu unazotumia pesa nyingi zaidi. Kwa kila moja, andika njia moja ambayo ingetumia kidogo, na ukadirie pesa zitakazookolewa kwa mwaka. Chagua mbili za kuweka katika mpango wako.",
          youCanNow: "kutambua njia zinazopunguza uzalishaji wa gesi na gharama pamoja, na kuweka akiba hiyo kwa pesa.",
          quickCheck: [
            { objective: "O4", q: "Njia ipi inapunguza uzalishaji wa gesi na pia kuokoa pesa za mfugaji wa nguruwe?", options: ["Kuchoma kinyesi wazi", "Kununua mkaa zaidi", "Kuacha kinyesi kwenye lundo karibu na mto", "Mtambo wa biogesi unaotengeneza gesi ya kupikia na mbolea ya bio-slurry"], answer: 3, why: "Biogesi inachukua nafasi ya mafuta yanayonunuliwa na bio-slurry inachukua nafasi ya sehemu ya mbolea." },
            { objective: "O4", q: "Kwa nini kupunguza upotevu wa mbolea ni chaguo zuri la kupunguza gesi kwa mkulima?", options: ["Kunaokoa pesa na pia kupunguza uzalishaji wa gesi", "Kunafanya udongo kuwa mgumu zaidi", "Kunamaanisha hutahitaji kuweka mbolea tena kamwe", "Kunatakiwa na kila mnunuzi"], answer: 0, why: "Upotevu mdogo unamaanisha mavuno zaidi kwa kila mfuko, kwa hiyo mkulima anaokoa pesa na kutoa gesi kidogo." }
          ]
        },
        {
          title: "Mikopo ya kaboni: nafasi, ulaghai na mikataba isiyo ya haki",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kagua ofa ya mikopo ya kaboni kuona dalili za hatari kabla ya kusaini au kulipa chochote.",
          text: [
            "Mkopo wa kaboni (carbon credit) ni cheti kinachosema tani moja ya hewa ya ukaa (kaboni dioksidi) ilizuiwa kuingia hewani au ilihifadhiwa, kwa mfano kwa kupanda miti, kurejesha ardhi au kutumia majiko safi. Makampuni yananunua mikopo hii. Baadhi ya miradi inawalipa wakulima au jamii kwa njia zinazohifadhi kaboni. Miradi halisi imesajiliwa na kiwango kama Verra au Gold Standard, na rejista zao zinaweza kutafutwa kwa jina la mradi.",
            "Kuwa mwangalifu sana. Malipo ya kaboni mara nyingi ni madogo, ya polepole (wakati mwingine miaka baada ya kuanza) na hayana uhakika, na gharama za kupima na kukagua zinachukuliwa kwanza. Ulaghai na mipango isiyo ya haki ni ya kawaida: watu wanaowaomba wakulima ada ya \"kujiunga\", wanaoahidi malipo makubwa ya haraka, au wanaokuomba usaini mikataba mirefu inayotoa haki za ardhi yako, miti yako au kaboni yako kwa miaka 20 au zaidi.",
            "Dalili za hatari: lazima ulipe ili kujiunga; malipo makubwa yanaahidiwa haraka; huwezi kuchukua mkataba kwenda kuusoma; hauko katika lugha unayoielewa; unampa mtu haki juu ya ardhi au miti yako, au unakuzuia kuikata au kuiuza; hausemi utapata kiasi gani, lini, na sehemu ipi inakwenda kwa mwendeshaji wa mradi; mradi hauko kwenye rejista yoyote.",
            "Baadhi ya nchi sasa zina kanuni. Kanuni za Mabadiliko ya Tabianchi (Masoko ya Kaboni), 2024 za Kenya zinataka miradi ya kaboni iidhinishwe na, kwa miradi kwenye ardhi ya jamii, makubaliano ya maendeleo ya jamii kuhusu jinsi faida zinavyogawanywa. Kagua kanuni za nchi yako kwa wizara ya mazingira. Usisaini kamwe siku hiyo hiyo; usome wote, uliza chama chako cha ushirika, wakili au mshauri unayemwamini, na uweke nakala."
          ],
          steps: ["Uliza: mradi unaitwaje na namba yake ya rejista ni ipi?", "Utafute kwenye rejista (Verra, Gold Standard au nyingine).", "Uliza utalipwa kiasi gani, lini, na mwendeshaji anabaki na sehemu ipi.", "Soma haki gani juu ya ardhi, miti au kaboni unazotoa, na kwa muda gani.", "Kataa ada yoyote ya kujiunga.", "Chukua mkataba uende nao; pata ushauri kabla ya kusaini; weka nakala."],
          words: [["Mkopo wa kaboni", "cheti cha tani moja ya kaboni dioksidi iliyozuiwa kuingia hewani au iliyohifadhiwa."], ["Mwendeshaji wa mradi wa kaboni", "kampuni inayoendesha mradi wa kaboni na kuuza mikopo yake."], ["Rejista", "orodha rasmi ya umma ya miradi ya kaboni na mikopo yake."], ["Kugawana faida", "jinsi pesa za mikopo zinavyogawanywa kati ya mwendeshaji, wakulima na jamii."]],
          slides: [
            { title: "Mkopo wa kaboni ni nini", bullets: ["Tani 1 ya CO2 iliyozuiwa kuingia hewani au iliyohifadhiwa", "Makampuni yanainunua", "Miradi halisi iko kwenye rejista (Verra, Gold Standard)"] },
            { title: "Ukweli wenyewe", bullets: ["Malipo mara nyingi ni madogo, ya polepole na bila uhakika", "Gharama za kupima zinatolewa kwanza", "Baadhi ya ofa ni ulaghai"] },
            { title: "Dalili za hatari", bullets: ["Ada ya kujiunga; pesa nyingi za haraka zinaahidiwa", "Huwezi kuchukua mkataba kwenda kuusoma", "Haki juu ya ardhi au miti yako kwa miongo", "Hakuna namba ya rejista; hakuna mgawo wa malipo ulio wazi"] },
            { title: "Jilinde", bullets: ["Kenya: Kanuni za Masoko ya Kaboni 2024", "Kagua kwa wizara ya mazingira ya nchi yako", "Usisaini siku hiyo hiyo; pata ushauri; weka nakala"] }
          ],
          sources: [VERRA, GOLD, KE_CARBON],
          tryIt: "Andika orodha ya angalau maswali matano utakayouliza kabla ya kujiunga na mpango wowote wa mikopo ya kaboni. Kisha fikiria wakala anakipa kikundi chako XOF 50,000 kwa kila mkulima mkisaini leo na kulipa XOF 5,000 kujisajili: weka alama dalili za hatari ambazo ofa hii inaonyesha.",
          youCanNow: "kukagua ofa ya mikopo ya kaboni kuona dalili za hatari za ulaghai au mkataba usio wa haki.",
          quickCheck: [
            { objective: "O5", q: "Wakala wa kaboni anamwomba kila mkulima alipe NGN 10,000 kujiunga na anaahidi malipo mwezi ujao. Hili lina uwezekano mkubwa kuwa nini?", options: ["Mradi wa kawaida uliosajiliwa", "Ruzuku ya serikali", "Ulaghai au ofa isiyo ya haki kabisa", "Mafunzo ya bure"], answer: 2, why: "Ada za kujiunga na ahadi kubwa za haraka ni dalili za kawaida za ulaghai wa kaboni." },
            { objective: "O5", q: "Uangalie nini katika mkataba wa kaboni kabla ya kusaini?", options: ["Utapata kiasi gani, lini, na haki gani juu ya ardhi au miti unazotoa na kwa muda gani", "Rangi ya nembo tu", "Kama wakala ni mkarimu", "Hakuna kitu, kama mradi unahusu miti"], answer: 0, why: "Malipo, wakati wake na haki juu ya ardhi au miti yako vinaamua kama mpango ni wa haki." }
          ]
        },
        {
          title: "Kuongeza hatari za tabianchi katika mpango wako wa biashara",
          objectives: ["O6", "O1", "O2"],
          minutes: 5,
          goal: "Andika mpango wa ukurasa mmoja wa kustahimili tabianchi kwa biashara yako ya shamba.",
          text: [
            "Wakopeshaji, wanunuzi na programu wanazidi kuuliza shamba litakabilianaje na mishtuko ya tabianchi. Sehemu fupi ya tabianchi katika mpango wako wa biashara inaonyesha umelifikiria, na inakusaidia kuamua pesa zako mwenyewe ziende wapi kwanza.",
            "Mpango wako wa ukurasa mmoja una sehemu sita: 1. hatari zako tatu kuu za tabianchi pamoja na uwezekano na gharama yake (Somo la 1); 2. uwekezaji wa kukabiliana miwili au mitatu pamoja na gharama, faida na muda wa kurudisha pesa (Somo la 2); 3. jinsi utakavyolipa: akiba, kikundi, mkopo au programu, na maswali yako kwa mkopeshaji (Somo la 3); 4. njia mbili zinazopunguza gharama na uzalishaji wa gesi (Somo la 4); 5. kanuni zako kwa ofa yoyote ya kaboni (Somo la 5); 6. tarehe ya kuupitia upya baada ya kila msimu.",
            "Ongeza mstari wa \"mwaka mbaya\" katika mtiririko wako wa pesa: mapato unayotarajia hatari kuu ikitokea, na jinsi bado utakavyolipa mikopo, ada za shule na pembejeo, kwa mfano kutoka akiba, mradi wa pili au bima. Ukitumia bima ya mazao au ya mifugo, hakikisha kampuni ya bima ina leseni (nchini Kenya kwa Mamlaka ya Udhibiti wa Bima) na usome kinachosababisha malipo.",
            "Unaweza kumwomba msaidizi wa AI kwenye simu ageuze maelezo yako kuwa jedwali nadhifu au akuulize maswali kuhusu mapengo katika mpango wako, lakini namba lazima zitoke kwenye kumbukumbu zako mwenyewe na bei za eneo lako. Usiandike namba za vitambulisho, namba za akaunti wala PIN."
          ],
          steps: ["Nakili jedwali lako la hatari kutoka Somo la 1: hatari tatu kuu.", "Ongeza uwekezaji wako miwili au mitatu uliokokotolewa gharama.", "Andika jinsi utakavyolipa na maswali yako kwa mkopeshaji.", "Ongeza njia mbili za kupunguza gesi zinazookoa pesa.", "Andika kanuni zako kwa ofa za kaboni.", "Ongeza mstari wa mtiririko wa pesa wa mwaka mbaya na tarehe ya kuupitia upya."],
          words: [["Mpango wa biashara", "mpango mfupi ulioandikwa wa kile shamba lako linafanya, gharama zake, mapato na malengo."], ["Hali ya mwaka mbaya", "mpango wa kitakachotokea kwa mapato na malipo hatari kuu ikitokea."], ["Kinachosababisha malipo ya bima", "tukio, kama mvua kidogo iliyopimwa kwenye kituo, linalofanya bima ilipe."]],
          slides: [
            { title: "Kwa nini kuongeza tabianchi katika mpango", bullets: ["Wakopeshaji na wanunuzi wanauliza utakabilianaje", "Inaonyesha pesa zako ziende wapi kwanza"] },
            { title: "Sehemu sita, ukurasa mmoja", bullets: ["Hatari, uwekezaji na muda wa kurudisha pesa", "Jinsi utakavyolipa", "Njia za kuokoa pesa, kanuni za kaboni", "Tarehe ya kuupitia upya"] },
            { title: "Panga kwa mwaka mbaya", bullets: ["Mapato hatari kuu ikitokea", "Jinsi mikopo na ada bado zitakavyolipwa", "Bima: kampuni yenye leseni, kichocheo cha malipo kilicho wazi"] },
            { title: "AI inaweza kupanga, si kuamua", bullets: ["Iombe itengeneze jedwali au ione mapengo", "Namba zinatoka kwenye kumbukumbu zako", "Hakuna vitambulisho, namba za akaunti wala PIN"] }
          ],
          sources: [IRA, FAO_CSA],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa kustahimili tabianchi wenye sehemu zote sita na mstari wa mtiririko wa pesa wa mwaka mbaya. Msomee mwanafamilia, mwanakikundi au afisa ugani na umwombe akuulize swali moja ambalo hujalijibu.",
          youCanNow: "kuandika mpango wa ukurasa mmoja wa kustahimili tabianchi kwa biashara yako ya shamba ambao mkopeshaji, mnunuzi au programu wanaweza kuusoma.",
          quickCheck: [
            { objective: "O6", q: "Sehemu ipi INAKOSEKANA katika mpango huu: hatari, uwekezaji uliokokotolewa gharama, jinsi ya kulipa, njia za kupunguza gesi, kanuni za kaboni?", options: ["Zao analolipenda mkulima", "Orodha ya majirani", "Hali ya hewa ya kesho", "Tarehe ya kuupitia upya"], answer: 3, why: "Mpango unahitaji tarehe ya kuupitia upya ili usasishwe baada ya kila msimu." },
            { objective: "O6", q: "Mstari wa mwaka mbaya katika mtiririko wako wa pesa unaonyesha nini?", options: ["Utapata kiasi gani katika mwaka bora", "Jinsi bado utakavyolipa mikopo na gharama hatari kuu ikitokea", "Bei ya mbolea mwaka jana", "Unawajua wafanyakazi wangapi"], answer: 1, why: "Unapima kama biashara itastahimili mshtuko ulioupima kuwa na uwezekano mkubwa na gharama kubwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupunguza gharama, kaboni na kupanga",
        questions: [
          { objective: "O4", q: "Mkulima wa kahawa anapanda miti ya kivuli inayotoa pia matunda na kuni. Hii ni nini?", options: ["Kilimo mseto cha miti kinachookoa pesa na kuhifadhi kaboni", "Kuchoma mabaki", "Ulaghai wa kaboni", "Kuweka mbolea kupita kiasi"], answer: 0, why: "Miti pamoja na mazao inahifadhi kaboni na inatoa bidhaa ambazo mkulima angezinunua." },
          { objective: "O4", q: "Kipi SI njia ya kupunguza gesi inayookoa pesa?", options: ["Kuweka mbolea karibu na mizizi kwa wakati unaofaa", "Kuchoma mabaki ya mazao baada ya mavuno", "Kutumia mtambo wa biogesi kwa gesi ya kupikia", "Chakula bora kwa maziwa zaidi kwa kila ng'ombe"], answer: 1, why: "Kuchoma mabaki kunapoteza virutubisho na kutoa gesi; njia nyingine zinapunguza gharama na gesi." },
          { objective: "O5", q: "Unawezaje kuhakikisha kwamba mradi wa kaboni ni halisi?", options: ["Kumuuliza wakala kama ni halisi", "Kuhesabu watu waliokuja mkutanoni", "Kuutafuta kwa jina au namba kwenye rejista kama Verra au Gold Standard", "Kuangalia gari la wakala"], answer: 2, why: "Miradi halisi imeorodheshwa kwenye rejista za umma zinazowekwa na viwango vya kaboni." },
          { objective: "O5", q: "Mkataba wa kaboni unakuzuia kukata au kuuza miti yako mwenyewe kwa miaka 30. Ufanye nini?", options: ["Kusaini; miti ni pesa za bure", "Kusaini sasa na kusoma baadaye", "Kumwomba wakala akusomee sehemu nzuri", "Kuuchukua uende nao, kupata ushauri na kusaini tu ukielewa na kukubali masharti hayo"], answer: 3, why: "Vizuizi virefu juu ya ardhi na miti yako ni jambo zito; soma wote na upate ushauri wa kuaminika kwanza." },
          { objective: "O6", q: "Kwa nini mpango wa kustahimili tabianchi uwe na tarehe ya kuupitia upya?", options: ["Wakopeshaji wanapenda tarehe", "Hatari, bei na matokeo hubadilika, kwa hiyo mpango husasishwa kila msimu", "Unafanya ukurasa kuwa mrefu zaidi", "Sheria inataka mapitio"], answer: 1, why: "Kuupitia upya baada ya kila msimu kunaufanya mpango ulingane na kilichotokea kweli." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Biashara ya Kilimo Inayostahimili Tabianchi",
    questions: [
      { objective: "O1", q: "Upimaji wa hatari za tabianchi unauliza maswali mawili kuhusu kila janga. Ni yapi?", options: ["Uwezekano wake ni upi, na lingegharimu kiasi gani?", "Nani alilisababisha, na lilianza lini?", "Redio ipi iliripoti, na saa ngapi?", "Ni habari njema, na ni la haki?"], answer: 0, why: "Uwezekano na athari ya pesa vinakuwezesha kupanga hatari." },
      { objective: "O1", q: "Unaweza kupata wapi hasara za zamani ili kukadiria gharama ya hatari?", options: ["Kwa wakala wa kaboni tu", "Kutoka matokeo ya bahati nasibu", "Kutoka kumbukumbu za shamba lako na kumbukumbu za wakulima wazee kuhusu miaka mibaya", "Kutoka bei ya simu"], answer: 2, why: "Kumbukumbu na kumbukumbu za wenyeji zinaonyesha miaka mibaya iligharimu kiasi gani kweli." },
      { objective: "O1", q: "Joto kali linapunguza utagaji wa mayai katika banda lako la kuku wa mayai karibu kila mwaka. Unalipimaje?", options: ["Uwezekano mdogo, bila gharama", "Si hatari ya tabianchi", "Ni tatizo la chakula tu", "Uwezekano mkubwa wenye gharama ya pesa kutokana na mayai yanayopotea"], answer: 3, why: "Linatokea karibu kila mwaka na linagharimu mayai, kwa hiyo lina uwezekano mkubwa na gharama kubwa." },
      { objective: "O2", q: "Muda wa kurudisha pesa ni nini?", options: ["Riba ya mkopo", "Muda hadi akiba au mapato ya uwekezaji yafikie gharama yake", "Bei ya mbegu", "Kurudishiwa pesa na duka"], answer: 1, why: "Muda wa kurudisha pesa = gharama ÷ faida ya kila mwaka." },
      { objective: "O2", q: "Kipi kinahesabiwa kama sehemu ya gharama ya tangi la maji?", options: ["Kununua, kujenga, nguvu kazi na matunzo", "Bei ya dukani tu", "Usafiri tu", "Hakuna kitu, kama ni zawadi"], answer: 0, why: "Gharama yote inajumuisha kila kitu kinachohitajika kulijenga na kulifanya liendelee kufanya kazi." },
      { objective: "O2", q: "Kipi ni uwekezaji wa kukabiliana na vipindi vya ukavu?", options: ["Kuuza pampu ya maji", "Kupanda kwa kuchelewa kila mwaka bila sababu", "Mbegu zinazostahimili ukame au zinazokomaa mapema", "Kuchoma mabaki"], answer: 2, why: "Aina zinazostahimili ukame na zinazokomaa mapema zinapunguza hasara katika vipindi vya ukavu." },
      { objective: "O2", q: "Uwekezaji miwili ina faida sawa. Mmoja unagharimu kidogo na ni rahisi kuutunza. Kwa kawaida unaanza na upi?", options: ["Ule wa gharama kubwa", "Hakuna kati yao", "Yote miwili kwa mkopo kwa wakati mmoja", "Ule wa bei nafuu unaoweza kuutunza"], answer: 3, why: "Gharama ndogo na matunzo rahisi vinaleta urejeshaji wa pesa wa haraka na salama zaidi." },
      { objective: "O3", q: "Mifuko mikubwa ya tabianchi kwa kawaida inawafikiaje wakulima?", options: ["Kupitia benki, serikali na mashirika, kama mikopo na programu", "Kwa kutuma pesa taslimu kwenye simu ya kila mkulima", "Kupitia mawakala wa kaboni wanaotoza ada", "Haiwafikii wakulima kamwe"], answer: 0, why: "Mifuko kama Green Climate Fund inafanya kazi kupitia serikali, benki na mashirika yaliyoidhinishwa." },
      { objective: "O3", q: "Kabla ya kuchukua mkopo wa kijani, swali muhimu ni lipi?", options: ["Afisa wa mikopo ni mkarimu?", "Gharama yote ni ipi na malipo yanalingana na mavuno yangu?", "Una neno \"kijani\" katika jina lake?", "Ofisi iko karibu na soko?"], answer: 1, why: "Gharama yote na wakati wa malipo vinaamua kama unaweza kuumudu." },
      { objective: "O3", q: "Nchini Nigeria, unaweza kuhakikisha wapi kwamba mkopeshaji ana leseni?", options: ["Kwenye kikundi cha WhatsApp", "Kwa wakala wa mkopeshaji", "Kwa Benki Kuu ya Nigeria", "Kwenye bango sokoni"], answer: 2, why: "Benki Kuu ya Nigeria inadhibiti na kuorodhesha taasisi zenye leseni." },
      { objective: "O3", q: "Mtu anajitolea \"kuharakisha\" ruzuku yako ya tabianchi kwa ada inayolipwa kwenye namba yake ya pesa za simu. Hii ni nini?", options: ["Dalili ya hatari ya ulaghai", "Hatua ya kawaida", "Kanuni ya serikali", "Ada ya chama cha ushirika"], answer: 0, why: "Programu halisi hazikuombi uwalipe mawakala ili kuharakisha ruzuku." },
      { objective: "O4", q: "Kupunguza uzalishaji wa gesi (mitigation) ni nini?", options: ["Kuhamia shamba jipya", "Bima dhidi ya ukame", "Kuuza mazao mapema", "Kupunguza utoaji wa gesi joto au kuhifadhi kaboni zaidi"], answer: 3, why: "Kunapunguza gesi au kuhifadhi kaboni katika udongo na miti." },
      { objective: "O4", q: "Bio-slurry ni nini?", options: ["Dawa ya wadudu", "Kimiminika kinachobaki baada ya kutengeneza biogesi, kinachotumika kama mbolea", "Aina ya mafuta yanayouzwa madukani", "Ugonjwa wa ng'ombe"], answer: 1, why: "Bio-slurry kutoka mtambo wa biogesi inaweza kulisha udongo." },
      { objective: "O4", q: "Njia ipi inaokoa pesa NA kupunguza uzalishaji wa gesi kwenye shamba la ng'ombe wa maziwa?", options: ["Chakula bora ili kila ng'ombe atoe maziwa zaidi", "Kuchoma kinyesi", "Kununua ng'ombe wengi kuliko chakula kinachotosha", "Kuacha malisho bila kitu"], answer: 0, why: "Maziwa zaidi kwa kila mnyama kutokana na chakula bora yanamaanisha gharama na gesi kidogo kwa kila lita." },
      { objective: "O5", q: "Mkopo wa kaboni ni nini?", options: ["Mkopo wa mbegu", "Punguzo la bei ya mbolea", "Cheti cha tani moja ya CO2 iliyozuiwa kuingia hewani au iliyohifadhiwa", "Bonasi ya pesa za simu"], answer: 2, why: "Kila mkopo unasimama kwa tani moja ya kaboni dioksidi iliyoepukwa au kuhifadhiwa." },
      { objective: "O5", q: "Kipi ni dalili ya hatari katika ofa ya kaboni?", options: ["Mradi una namba ya rejista unayoweza kuitafuta", "Unaweza kuchukua mkataba nyumbani kuusoma", "Malipo na mgawo vimeandikwa wazi", "Lazima ulipe ada ili kujiunga"], answer: 3, why: "Ada za kujiunga ni dalili ya kawaida ya ulaghai." },
      { objective: "O5", q: "Nchini Kenya, miradi ya kaboni kwenye ardhi ya jamii inahitaji nini?", options: ["Hakuna kitu kabisa", "Makubaliano ya maendeleo ya jamii kuhusu jinsi faida zinavyogawanywa", "Ahadi ya mdomo tu", "Mkopo kutoka kwa wakala"], answer: 1, why: "Kanuni za Masoko ya Kaboni za Kenya, 2024 zinataka makubaliano ya maendeleo ya jamii kwa miradi kama hiyo." },
      { objective: "O6", q: "Kipi kinahusika katika mpango wa ukurasa mmoja wa kustahimili tabianchi?", options: ["Hatari kuu, uwekezaji uliokokotolewa gharama, jinsi ya kulipa, njia za kuokoa pesa, kanuni za kaboni na tarehe ya kuupitia upya", "Jina la shamba tu", "PIN yako ya pesa za simu", "Orodha ya kila siku ya mvua mwaka jana"], answer: 0, why: "Sehemu hizo sita zinaunda mpango kamili unaoweza kutumika." },
      { objective: "O6", q: "Msaidizi wa AI kwenye simu anawezaje kusaidia katika mpango wako?", options: ["Anaweza kubuni bei zako", "Anapaswa kushika PIN yako ya benki", "Anaweza kupanga maelezo yako katika jedwali na kuonyesha mapengo", "Anakusainia fomu za mkopo"], answer: 2, why: "AI inaweza kupanga na kuuliza maswali, lakini namba zinatoka kwenye kumbukumbu zako." },
      { objective: "O6", q: "Mpango wako unaonyesha huwezi kulipa mkopo kipindi cha ukavu kikitokea. Unafanya nini?", options: ["Kuupuuza", "Kumficha mkopeshaji", "Kukopa zaidi", "Kubadilisha mpango: mkopo mdogo, akiba, mradi wa pili au bima"], answer: 3, why: "Mstari wa mwaka mbaya upo ili kubadilisha mpango kabla ya mshtuko, si baada yake." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na ujaribu tena.",
    criteria: [
      { name: "Hatari za tabianchi kwa pesa", objective: "O1", notYet: "Hatari zimeorodheshwa bila uwezekano au gharama, au ni chini ya tatu.", meets: "Hatari tatu, kila moja ikiwa na uwezekano na makadirio ya gharama kwa sarafu ya nchi.", exceeds: "Pia inaonyesha athari kwa biashara (mikopo, wanunuzi, nguvu kazi) na makadirio yalitoka wapi." },
      { name: "Uwekezaji uliokokotolewa gharama", objective: "O2", notYet: "Uwekezaji umetajwa lakini gharama haijakokotolewa.", meets: "Uwekezaji miwili au mitatu yenye gharama yote, wastani wa faida ya kila mwaka na muda wa kurudisha pesa.", exceeds: "Inatumia bei halisi za eneo na inaeleza kwa nini upi unaanzwa kwanza." },
      { name: "Fedha na ukaguzi wa mkopeshaji", objective: "O3", notYet: "Hakuna mpango wa kulipa, au mkopeshaji bila ukaguzi wowote.", meets: "Inasema itakavyolipwa na inaorodhesha maswali kuhusu gharama yote, tarehe za kulipa, masharti na leseni.", exceeds: "Imelinganisha njia mbili za fedha na kumkagua mkopeshaji kwenye orodha ya mdhibiti." },
      { name: "Njia zinazookoa pesa", objective: "O4", notYet: "Hakuna njia ya kupunguza gesi, au moja bila akiba kuonyeshwa.", meets: "Njia mbili zinazopunguza gesi, kila moja ikiwa na pembejeo au pesa zinazookolewa.", exceeds: "Inaonyesha muda wa kurudisha pesa kwa njia yoyote inayohitaji matumizi, kama mtambo wa biogesi." },
      { name: "Kanuni za ofa za kaboni", objective: "O5", notYet: "Hakuna kanuni, au angesaini au kulipa siku hiyo hiyo.", meets: "Angalau ukaguzi manne: rejista, malipo na mgawo, haki juu ya ardhi na miti, hakuna ada, ushauri kabla ya kusaini.", exceeds: "Inataja kanuni za kitaifa au ofisi ya kukagua, kama Kanuni za Masoko ya Kaboni za Kenya." },
      { name: "Mpango kamili wa ukurasa mmoja", objective: "O6", notYet: "Sehemu zinakosekana au hakuna tarehe ya kuupitia upya.", meets: "Sehemu zote sita, mstari wa mtiririko wa pesa wa mwaka mbaya na tarehe ya kuupitia upya kwenye ukurasa mmoja.", exceeds: "Umesomwa na mwanakikundi, afisa ugani au mshauri na umesasishwa kwa swali lake." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofanya angalau uwekezaji mmoja wa kukabiliana uliokokotolewa gharama ndani ya msimu ujao (utafiti wa kufuatilia)",
      "Wanafunzi au vikundi vinavyoomba fedha wakiwa na mpango ulioandikwa na maswali kwa mkopeshaji",
      "Ulaghai wa kaboni au wa fedha ulioripotiwa kuepukwa, na mikataba michache inayosainiwa bila ushauri (ripoti za maafisa ugani au vyama vya ushirika)",
      "Hasara ya mapato katika msimu mbaya ujao ikilinganishwa na msimu mbaya uliopita (kwa ripoti ya mwanafunzi mwenyewe, kwa kila mradi)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, kalamu na kikokotoo rahisi (au kikokotoo cha simu)",
      "Kumbukumbu za shamba lako, au shamba la mfano kutoka kazi ya mwisho",
      "Bei za eneo lako za mbegu, matangi, pembejeo na mafuta (kutoka kwa wauzaji wa pembejeo au chama cha ushirika)",
      "Simu ya kutafuta wakopeshaji na rejista (si lazima)",
      "Takriban dakika 90 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Inafaa zaidi kufanywa na kikundi cha wakulima, chama cha ushirika au Shule ya Biashara ya Wakulima (Farmer Business School): fanyeni Masomo ya 1 na 2 kwa kumbukumbu halisi za wanachama wawili au watatu.",
      "Kusanya bei halisi za eneo kabla ya kipindi; usiwasilishe kamwe bei za mfano kama ukweli.",
      "Mwalike afisa wa mikopo kutoka benki, benki ya mikopo midogo au SACCO yenye leseni ajibu maswali ya Somo la 3, na mkague leseni yake mbele ya kikundi.",
      "Kwa Somo la 5, leta mkataba au ofa ya mfano ya kaboni (bila majina) na mwekeni alama dalili za hatari pamoja. Usiunge mkono mradi wowote wa kaboni.",
      "Usitoe ushauri wa uwekezaji; wakumbushe wanafunzi kusoma mikataba yote na kuzungumza na mshauri wanayemwamini.",
      "Pima mpango wa mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
