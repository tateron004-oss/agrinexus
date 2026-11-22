"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-community-mobilization.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_MECH = { name: "FAO: Matumizi endelevu ya mashine katika kilimo: FAO inafanya nini (huduma za kukodisha, msaada kwa wakulima wadogo)", url: "https://www.fao.org/sustainable-agricultural-mechanization/overview/what-fao-does/en/" };
const KEPHIS_SEED = { name: "KEPHIS (Kenya): Huduma za uthibitishaji wa mbegu na ulinzi wa aina za mimea", url: "https://www.kephis.go.ke/seed-certification-services" };
const NASC_FAKE = { name: "Voice of Nigeria: Baraza la Taifa la Mbegu za Kilimo (NASC) linawaonya wakulima kuhusu mbegu bandia (nunua kwa wauzaji wa pembejeo waliosajiliwa; lebo ya uthibitisho)", url: "https://von.gov.ng/nasc-cautions-farmers-over-fake-seeds/" };
const GH_ACT803 = { name: "UNEP LEAP: Sheria ya Mimea na Mbolea ya Ghana, 2010 (Act 803): usajili wa mbegu na mbolea (PPRSD)", url: "https://leap.unep.org/en/countries/gh/national-legislation/plants-and-fertilizer-act-2010-no-803" };
const FAO_PEST_REG = { name: "Zana ya FAO ya Usajili wa Viuatilifu: rejista za kitaifa za viuatilifu barani Afrika", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const ICA = { name: "International Cooperative Alliance (Muungano wa Kimataifa wa Vyama vya Ushirika): utambulisho, maadili na kanuni za ushirika", url: "https://ica.coop/en/cooperatives/cooperative-identity" };

module.exports = {
  id: "agri-community-mobilization-sw",
  lang: "sw",
  translationOf: "agri-community-mobilization",
  category: "Agriculture (Africa)",
  name: "Kuhamasisha Jamii: Kuchangia Mashine na Kujadiliana Bei ya Pembejeo",
  skills: "Kutambua mahitaji ya jamii, Kuitisha na kuendesha mkutano wa kwanza, Kukubaliana malengo na kanuni, Kuchangia mashine na kukodi trekta, Kununua pembejeo halisi kwa jumla na kujadiliana bei, Kudumisha uaminifu kwa kumbukumbu zilizo wazi",
  outcome: "kuwaleta pamoja wakulima wa jamii yako kuhusu hitaji moja mnalolishiriki, kukubaliana malengo na kanuni za haki, na kuandika mpango wa kununua mbegu na mbolea kwa jumla au kushirikiana trekta au mashine, pamoja na kumbukumbu zilizo wazi zinazodumisha uaminifu wa kila mtu.",
  about: [
    "Mkulima mmoja peke yake analipa bei ya juu kabisa kwa mfuko wa mbolea na anasubiri trekta kwa wiki kadhaa. Wakulima ishirini pamoja wanaweza kujadiliana bei nzuri zaidi, kuhakikisha pembejeo ni halisi, na kuweka nafasi au kushirikiana mashine kwa wakati unaofaa. Kozi hii ni kwa wakulima viongozi, viongozi wa vikundi vya wakulima, maafisa ugani, vikundi vya vijana na vya wanawake, na yeyote aliye tayari kuwaunganisha majirani nchini Kenya, Nigeria, Ghana, Burkina Faso na kote Afrika.",
    "Utatambua mahitaji ya jamii yako, utaitisha na kuendesha mkutano wa kwanza, utakubaliana lengo la pamoja na kanuni rahisi, utapanga fedha za pamoja kwa mashine au huduma ya kukodi trekta, utanunua pembejeo kwa jumla na kujadiliana na wauzaji, utaepuka mbegu na mbolea bandia, utashughulikia migogoro, utaweka kumbukumbu zilizo wazi na kuhakikisha wanawake na vijana wana sauti ya kweli.",
    "Kozi hii inajenga juu ya kozi \"Vyama vya Ushirika vya Wakulima na Kufikia Soko\", inayoeleza usajili rasmi, katiba ndogo na kuuza kama kikundi, kwa hiyo haivirudii. Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\" katika jamii yako. Kiasi cha fedha ni mifano tu."
  ],
  finalTask: "Andika mpango kwa ajili ya jamii yako: ama mpango wa kununua pembejeo kwa jumla (wanachama, kiasi, malipo ya awali, bei kutoka kwa wauzaji watatu, jinsi mtakavyohakikisha pembejeo ni halisi, usafirishaji na mgawanyo) au makubaliano ya kushirikiana mashine (mashine au huduma ya kukodi, ratiba ya zamu, ada, mfuko wa matengenezo, mwendeshaji, na nini kitafanyika ikiharibika), pamoja na kumbukumbu mtakazowaonyesha wanachama na jinsi wanawake na vijana watashiriki.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima viongozi, viongozi wa vikundi vya wakulima na wa vijiji, maafisa ugani, na wanachama wa vikundi vya wanawake na vijana nchini Kenya, Nigeria, Ghana, Afrika Magharibi inayozungumza Kifaransa na kote Afrika. Wengi wanalima mashamba madogo ya mahindi, mihogo, mpunga, mtama, maharagwe, karanga au mboga.",
    startingPoint: "Wanawajua majirani zao na matatizo wanayoshiriki, kama kulima kwa kuchelewa, mbolea ya bei ghali na mbegu bandia. Baadhi ni wanachama wa vikundi visivyo rasmi au vikundi vya kuweka akiba. Wachache wameendesha mkutano wa kupanga, wamekusanya fedha kwa ununuzi wa pamoja au wamejadiliana bei na muuzaji.",
    gap: "Wakulima wanapoteza mavuno na fedha wakati kulima kunachelewa, pembejeo zinapokuwa ghali sana au kuwa bandia, na vikundi vinapovunjika kwa sababu ya fedha. Viongozi wanahitaji kutambua mahitaji, kuandaa mkutano wa haki, kukubaliana kanuni, kuendesha mpango wa ununuzi wa pamoja au wa kushirikiana mashine, na kuweka kumbukumbu wazi ili uaminifu udumu, wakiwahusisha wanawake na vijana ambao mara nyingi huachwa nje.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanazungumza lugha hii kama lugha ya pili, na mikutano inaweza kuwa katika lugha za kienyeji",
      "Vifaa: simu ya kawaida kwa kupiga, SMS na pesa kwa simu; daftari za karatasi",
      "Fedha: kiasi kidogo kinachochangwa na wanachama wengi; hasara yoyote isifichwe",
      "Kanuni: sheria na rejista za mbegu, mbolea na viuatilifu zinatofautiana kwa nchi na zinabadilika; wanafunzi wanakagua na mamlaka zao za kitaifa",
      "Muda: mikutano lazima iendane na kazi za shambani, masoko na kazi za nyumbani, hasa kwa wanawake"
    ],
    prerequisites: "Hakuna. Inasaidia: kozi \"Vyama vya Ushirika vya Wakulima na Kufikia Soko\", kwa usajili rasmi baadaye."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Katika kijiji chako au kikundi chako cha wakulima", action: "kutambua mahitaji ya kilimo yanayoshirikiwa na jamii na kupanga matatu ya juu", standard: "baada ya kuuliza angalau kaya kumi, zikiwemo wanawake na wakulima vijana" },
    { id: "O2", condition: "Ukipewa hitaji kuu linaloshirikiwa", action: "kuitisha na kuendesha mkutano wa kwanza unaokubaliana lengo moja la pamoja na kanuni zilizoandikwa", standard: "pamoja na ajenda, kumbukumbu za mkutano, kiongozi aliyetajwa kwa kila kazi na kanuni kuhusu fedha, maamuzi na kujitoa" },
    { id: "O3", condition: "Ukipewa hitaji la kulima, kupura au mashine nyingine", action: "kuandika mpango wa kushirikiana mashine au wa kukodi trekta", standard: "unaoeleza kukodi au kununua, ratiba ya zamu ya haki, ada, mfuko wa matengenezo, mwendeshaji na nini kitafanyika ikiharibika" },
    { id: "O4", condition: "Ukipewa maagizo ya wanachama ya mbegu na mbolea", action: "kupanga ununuzi wa jumla, kulinganisha bei kutoka kwa angalau wauzaji watatu na kujadiliana", standard: "malipo ya awali yakiwa yameandikwa, pembejeo zikiwa zimekaguliwa kuwa halisi na zilizosajiliwa, na risiti kwa jina la kikundi" },
    { id: "O5", condition: "Wakati kikundi kinashughulikia fedha na maamuzi", action: "kuweka kumbukumbu zilizo wazi, kumaliza kutoelewana kwa hatua zilizokubaliwa na kuwapa wanawake na vijana nafasi ya kweli", standard: "ili kila mwanachama aone kila malipo yalikwenda wapi, na wanawake na vijana wawe na kazi au nyadhifa za uongozi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuileta jamii pamoja",
      lessons: [
        {
          title: "Kutambua mahitaji ya jamii yako",
          objectives: ["O1"],
          minutes: 5,
          goal: "Uliza angalau kaya kumi kuhusu matatizo yao ya kilimo na upange mahitaji matatu ya juu yanayoshirikiwa.",
          text: [
            "Watu hujiunga na kikundi kinapotatua tatizo wanalolihisi. Kwa hiyo kabla ya kuitisha mkutano, tafuta kile majirani zako wanahitaji kwa kweli. Usidhani tu: kiongozi anaweza kudhani ni trekta, wakati wakulima wengi wanasema ni mbegu bandia au bei ya mbolea.",
            "Tembelea au piga simu kwa angalau kaya kumi. Uliza maswali yale yale machache: Mazao au mifugo yako mikuu ni ipi? Nini kilizuia mavuno yako ya mwisho? Unalipa kiasi gani kwa kulima, mbegu na mbolea, na unavipata lini? Ungefanya nini pamoja na majirani? Waulize pia wanawake na wakulima vijana, si mkuu wa kaya peke yake; matatizo yao yanaweza kuwa tofauti, kama kukosa hati ya ardhi ili kupata mkopo au kuhudumiwa mwisho na trekta.",
            "Andika majibu kwenye karatasi moja: mstari mmoja kwa kila kaya, safu moja kwa kila tatizo. Hesabu ni kaya ngapi zilitaja kila tatizo. Matatu ya juu ndiyo mahitaji ya pamoja ya jamii yako. Unaweza pia kuchora ramani rahisi ya kijiji inayoonyesha mashamba, barabara, maduka ya pembejeo na mahali trekta au kinu kilipo. Simu inaweza kukusaidia kuhesabu na kupanga majibu."
          ],
          steps: ["Andika maswali manne au matano rahisi.", "Uliza angalau kaya kumi, zikiwemo wanawake na wakulima vijana.", "Andika majibu kwenye jedwali: mstari mmoja kwa kila kaya.", "Hesabu ni wangapi walitaja kila tatizo.", "Panga mahitaji matatu ya juu yanayoshirikiwa."],
          words: [["Uhamasishaji", "kuwaleta watu pamoja ili wachukue hatua kuhusu hitaji wanalolishiriki."], ["Ramani ya mahitaji", "kumbukumbu rahisi ya matatizo ambayo kaya zinashiriki na mahali rasilimali zilipo."], ["Kaya", "watu wanaoishi na kulima pamoja na kushiriki chakula na fedha."]],
          slides: [
            { title: "Anza na hitaji", bullets: ["Watu hujiunga ili kutatua tatizo wanalolihisi", "Usidhani: uliza kwanza", "Wazo la kiongozi huenda si hitaji kuu"] },
            { title: "Uliza kaya kumi au zaidi", bullets: ["Nini kilizuia mavuno yako ya mwisho?", "Unalipa kiasi gani kwa kulima, mbegu, mbolea?", "Waulize pia wanawake na wakulima vijana"] },
            { title: "Hesabu na upange", bullets: ["Mstari mmoja kwa kila kaya", "Hesabu kila tatizo", "Matatu ya juu = mahitaji ya pamoja"] }
          ],
          tryIt: "Uliza angalau kaya kumi katika jamii yako maswali yako. Weka majibu kwenye jedwali, hesabu kila tatizo na uandike mahitaji matatu ya juu yanayoshirikiwa.",
          youCanNow: "kutambua mahitaji ya kilimo ya jamii yako na kupanga matatizo matatu ya juu yanayoshirikiwa.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini uulize kaya kabla ya kuitisha mkutano?", options: ["Ili kukusanya fedha mapema", "Ili kumchagua kiongozi", "Ili kuwauzia pembejeo", "Ili kujua matatizo ambayo watu wanashiriki kwa kweli"], answer: 3, why: "Kikundi hudumu kinapotatua hitaji ambalo wanachama wengi wanalihisi, si wazo la kiongozi peke yake." },
            { objective: "O1", q: "Unapouliza kuhusu mahitaji, unapaswa kuwahusisha akina nani?", options: ["Wanawake na wakulima vijana pamoja na wakuu wa kaya", "Wanaume wazee kabisa tu", "Watu wenye matrekta tu", "Watu wanaojua kusoma tu"], answer: 0, why: "Wanawake na vijana wanaweza kukabili matatizo tofauti, kwa hiyo kuwaacha nje kunatoa picha isiyo sahihi." }
          ]
        },
        {
          title: "Kuitisha na kuendesha mkutano wa kwanza",
          objectives: ["O2"],
          minutes: 5,
          goal: "Endesha mkutano wa kwanza wenye ajenda unaoisha kwa kazi zilizo wazi na kumbukumbu za mkutano.",
          text: [
            "Chagua muda na mahali panapowafaa watu wengi: baada ya kazi za shambani, si siku ya soko, mahali ambapo wanawake na vijana wanaweza kufika kwa urahisi, kama shule, kanisa, msikiti au chini ya mti unaojulikana. Waalike watu wewe mwenyewe, kwa simu, SMS au kwa mdomo, na kupitia watu wanaoheshimiwa kama chifu, kiongozi wa dini au afisa ugani. Waambie lengo kwa sentensi moja: 'Tuzungumze kuhusu kupata mbolea kwa bei nafuu msimu huu.'",
            "Weka ajenda ya mambo manne au matano na ufanye mkutano uwe mfupi: makaribisho na lengo; ramani ya mahitaji ilionyesha nini; mawazo ya mambo ya kufanya pamoja; kukubaliana hatua ya kwanza; nani anafanya nini na lini. Chagueni mtu wa kuongoza mkutano na mtu wa kuandika kumbukumbu. Mruhusu kila mtu aseme, na uwaulize moja kwa moja watu walio kimya.",
            "Malizeni kwa maamuzi, si maneno tu. Andika kila kazi, mtu anayehusika na tarehe. Soma kumbukumbu kwa sauti na mkubaliane mkutano ujao. Mfano: kikundi cha wakulima wa mtama nchini Burkina Faso kilikubaliana katika mkutano wake wa kwanza kukusanya maagizo ya mbolea ndani ya wiki mbili, na wanachama wawili, mmoja wao akiwa mwanamke kijana, wakikusanya orodha."
          ],
          steps: ["Chagua muda na mahali panapowafaa watu wengi, wakiwemo wanawake na vijana.", "Alika wewe mwenyewe na kupitia watu wanaoheshimiwa, ukitaja lengo kwa sentensi moja.", "Andaa ajenda fupi: lengo, mahitaji yaliyopatikana, mawazo, hatua ya kwanza, kazi.", "Chagueni mwenyekiti na mwandishi wa kumbukumbu; kila mtu aseme.", "Malizeni kwa kazi, majina na tarehe; someni kumbukumbu kwa sauti."],
          words: [["Ajenda", "orodha ya mambo ambayo mkutano utajadili, kwa mpangilio."], ["Kumbukumbu za mkutano", "maandishi ya kile mkutano ulichoamua na nani atafanya nini."], ["Mwenyekiti", "mtu anayeongoza mkutano na kuhakikisha unaenda kwa wakati."]],
          slides: [
            { title: "Muda, mahali, mwaliko", bullets: ["Baada ya kazi za shambani, si siku ya soko", "Mahali wanawake na vijana wanaweza kufika", "Alika wewe mwenyewe; lengo kwa sentensi moja"] },
            { title: "Ajenda fupi", bullets: ["Lengo; ramani ya mahitaji ilionyesha nini", "Mawazo; kukubaliana hatua ya kwanza", "Nani anafanya nini, na lini"] },
            { title: "Malizeni kwa maamuzi", bullets: ["Kazi, majina, tarehe katika kumbukumbu", "Someni kumbukumbu kwa sauti", "Pangeni mkutano ujao"] }
          ],
          tryIt: "Andika mwaliko (sentensi moja ya lengo, muda na mahali) na ajenda ya mambo matano kwa mkutano wako wa kwanza. Ukiweza, ufanye, na uandike kumbukumbu zenye angalau kazi mbili, majina na tarehe.",
          youCanNow: "kuitisha na kuendesha mkutano mfupi wa kwanza unaoisha kwa kazi, majina, tarehe na kumbukumbu.",
          quickCheck: [
            { objective: "O2", q: "Ni muda gani wa mkutano kwa kawaida ni bora kwa wakulima?", options: ["Siku ya soko saa sita mchana", "Baada ya kazi za shambani, mahali watu wengi wanaweza kufika", "Asubuhi na mapema sana, mbali na kijiji", "Wakati wowote kiongozi yuko huru"], answer: 1, why: "Muda na mahali panapofaa vinawawezesha wanachama wengi, wakiwemo wanawake na vijana, kuhudhuria." },
            { objective: "O2", q: "Mkutano wa kwanza unapaswa kuishaje?", options: ["Kwa hotuba ndefu", "Kila mtu akilipa fedha mara moja", "Kwa kazi, majina na tarehe zilizoandikwa katika kumbukumbu", "Bila uamuzi wowote"], answer: 2, why: "Kazi zilizo wazi zenye majina na tarehe zinageuza maneno kuwa vitendo." }
          ]
        },
        {
          title: "Malengo ya pamoja, kanuni za haki na kumhusisha kila mtu",
          objectives: ["O2", "O5"],
          minutes: 6,
          goal: "Andika lengo la pamoja na kanuni tano rahisi ambazo kikundi chako kinakubaliana.",
          text: [
            "Lengo la pamoja ni mahususi na lina tarehe: 'Kufikia tarehe 1 Machi, tununue pamoja mifuko 200 ya mbolea kwa bei ya chini kuliko wanachama wanavyolipa peke yao.' au 'Msimu huu, shamba la kila mwanachama lilimwe ndani ya wiki mbili baada ya mvua za kwanza.' Lengo lililo wazi linawaonyesha wanachama mafanikio yanaonekanaje.",
            "Kubalianeni kanuni rahisi kabla fedha yoyote haijatumika: nani anaweza kujiunga na analipa nini; maamuzi yanafanywaje (kwa mfano mwanachama mmoja, kura moja, kama vyama vya ushirika vinavyofanya); nani anashika fedha na jinsi gani (akaunti ya benki ya kikundi au ya pesa kwa simu, yenye watu wawili wa kuidhinisha malipo); nini kinatokea mtu asipolipa au asipotimiza ahadi; na mwanachama anawezaje kujitoa na kurudishiwa fedha zake. Andikeni kanuni na zisomwe kwa sauti ili wanachama wasiojua kusoma nao wakubali.",
            "Wapeni nafasi wanawake na vijana kwa makusudi. Fanyeni mikutano wakati wanaweza kuhudhuria, waruhusuni wanachama kujiunga kwa jina lao wenyewe hata bila hati ya ardhi, na wapeni nyadhifa za kweli kama mweka hazina, wakala wa zamu au mkaguzi wa pembejeo. Vikundi vinavyowahusisha mara nyingi vina wanachama wengi zaidi, uaminifu zaidi na ujuzi zaidi, kama wanachama vijana wanaotumia simu na pesa kwa simu vizuri. Kikundi chenu kikiwa tayari kusajiliwa rasmi, angalia kozi \"Vyama vya Ushirika vya Wakulima na Kufikia Soko\"."
          ],
          steps: ["Andika lengo moja lenye namba na tarehe.", "Kubalianeni kanuni kuhusu kujiunga, maamuzi, fedha, kutolipa au kutotimiza ahadi, na kujitoa.", "Someni kanuni kwa sauti na muandike makubaliano katika kumbukumbu.", "Wapeni wanawake na vijana nyadhifa za kweli na muda wa mikutano unaowafaa."],
          words: [["Lengo la pamoja", "matokeo moja yaliyo wazi ambayo kikundi kizima kinataka, yenye namba na tarehe."], ["Mtia saini", "mtu anayeruhusiwa kuidhinisha malipo kutoka akaunti ya kikundi."], ["Ujumuishaji", "kuhakikisha kila mtu, wakiwemo wanawake na vijana, anaweza kujiunga, kusema na kuongoza."]],
          slides: [
            { title: "Lengo lenye namba na tarehe", bullets: ["'Kufikia 1 Machi, tununue mifuko 200 pamoja'", "'Kila shamba lilimwe ndani ya wiki mbili baada ya mvua'", "Linaonyesha mafanikio yanaonekanaje"] },
            { title: "Kanuni kabla fedha haijatumika", bullets: ["Kujiunga na ada; mwanachama mmoja, kura moja", "Akaunti ya kikundi; watu wawili wanaidhinisha malipo", "Kutolipa au kutotimiza ahadi; kujitoa na kurudishiwa fedha"] },
            { title: "Wahusisheni wanawake na vijana", bullets: ["Muda na mahali wanapoweza kuhudhuria", "Kujiunga kwa jina lao, bila hati ya ardhi", "Nyadhifa za kweli: mweka hazina, wakala wa zamu, mkaguzi wa pembejeo"] }
          ],
          sources: [ICA],
          tryIt: "Andika lengo la pamoja la kikundi chako lenye namba na tarehe, na kanuni tano kuhusu kujiunga, maamuzi, fedha, kutolipa au kutotimiza ahadi, na kujitoa. Taja wadhifa mmoja ambao mwanachama mwanamke au kijana atashika.",
          youCanNow: "kuandika lengo la pamoja lililo wazi na kanuni za haki, na kuwapa wanawake na vijana nafasi ya kweli katika kikundi.",
          quickCheck: [
            { objective: "O2", q: "Ni lengo lipi la pamoja lililo wazi zaidi?", options: ["Kufikia 1 Machi, tununue pamoja mifuko 200 ya mbolea kwa bei ya chini", "Kuwasaidia wakulima", "Kufanya mambo kuwa bora", "Kupata mbolea wakati fulani"], answer: 0, why: "Lengo lenye namba na tarehe linaonyesha hasa mafanikio yanaonekanaje." },
            { objective: "O5", q: "Mwanamke kijana hana hati ya ardhi lakini analima shamba lake mwenyewe. Kanuni za kikundi zinapaswa kuruhusu nini?", options: ["Hawezi kujiunga", "Anajiunga kupitia mume wake tu", "Anaweza kuhudhuria lakini si kupiga kura", "Anajiunga kwa jina lake mwenyewe na anaweza kushika wadhifa"], answer: 3, why: "Kuwaruhusu wanawake na vijana kujiunga na kuongoza kwa jina lao kunajenga kikundi kikubwa na imara zaidi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuileta jamii pamoja",
        questions: [
          { objective: "O1", q: "Uliuliza kaya kumi na mbili. Nane zilitaja mbegu bandia na tatu zilitaja matrekta. Hitaji kuu la pamoja ni lipi?", options: ["Matrekta", "Barabara mpya", "Mbegu bandia", "Shule"], answer: 2, why: "Tatizo lililotajwa na kaya nyingi zaidi ndilo hitaji kuu la pamoja." },
          { objective: "O1", q: "Ramani ya mahitaji ni nini?", options: ["Kumbukumbu rahisi ya matatizo ambayo kaya zinashiriki na mahali rasilimali zilipo", "Ramani ya barabara kwenda mjini", "Orodha ya bei za mazao", "Taarifa ya benki"], answer: 0, why: "Ramani ya mahitaji inaonyesha matatizo ya pamoja na rasilimali za eneo kama maduka ya pembejeo na mashine." },
          { objective: "O2", q: "Nani anaandika kile mkutano unachoamua?", options: ["Chifu", "Muuzaji", "Hakuna mtu", "Mwandishi wa kumbukumbu"], answer: 3, why: "Mwandishi wa kumbukumbu anaandika maamuzi, kazi, majina na tarehe." },
          { objective: "O2", q: "Kikundi kinapaswa kukubaliana kanuni zake za fedha lini?", options: ["Baada ya tatizo kutokea", "Kabla fedha yoyote haijakusanywa", "Kikundi kinaposajiliwa tu", "Kamwe; uaminifu unatosha"], answer: 1, why: "Kukubaliana kanuni kwanza kunazuia migogoro fedha zinapochangwa." },
          { objective: "O5", q: "Kipi kinawasaidia wanawake kuhudhuria mikutano ya kikundi?", options: ["Mikutano kwa muda na mahali panapowafaa", "Mikutano siku ya soko tu", "Mikutano usiku sana mahali mbali", "Mikutano kwa wakuu wa kaya tu"], answer: 0, why: "Muda na mahali panapofaa vinaondoa kizuizi cha kawaida kwa wanawake." }
        ]
      }
    },
    {
      name: "Sura 2: Kuchangia, kununua pamoja na kudumisha uaminifu",
      lessons: [
        {
          title: "Kuchangia mashine na kukodi trekta",
          objectives: ["O3"],
          minutes: 6,
          goal: "Andika mpango wa kushirikiana mashine au kukodi huduma ya trekta kama kikundi.",
          text: [
            "Kwanza amueni: kukodi au kununua? Kununua trekta kunagharimu fedha nyingi sana na kunahitaji mafuta, matengenezo, mwendeshaji aliyefunzwa na kazi ya kutosha kuiweka ikifanya kazi. Kwa vikundi vingi vidogo, kukodi huduma ya trekta kama kikundi ndiyo hatua ya kwanza: mtoa huduma ya kukodisha mara nyingi atatoa muda bora au bei nzuri zaidi kwa mashamba mengi yaliyo karibu. FAO inaunga mkono huduma za kukodisha kama njia ya wakulima wadogo kupata mashine. Programu (apps) na mawakala wa kuweka nafasi, kama Hello Tractor katika sehemu za Nigeria na Kenya, wanawaunganisha wakulima na wamiliki wa matrekta; angalia kinachofanya kazi katika eneo lenu. Mashine ndogo za pamoja, kama mashine ya kupura, ya kupukuchua mahindi au kinu, zinaweza kununuliwa na kikundi.",
            "Pangeni ratiba kwa haki. Kulima au kupanda kwa kuchelewa kunapunguza mavuno, na kila mtu anataka mashine siku zile zile. Kubalianeni mpangilio mapema: kwa eneo na njia ili kuokoa mafuta na safari, kwa bahati nasibu, au kwa mahitaji ya kupanda, na mbadilishe nani anaanza kila msimu. Andikeni ratiba na muishiriki. Kubalianeni nini kitafanyika mvua au uharibifu ukisimamisha kazi.",
            "Kubalianeni ada na gharama: wanachama wanalipa kiasi gani kwa ekari au kwa saa (kiasi ni mifano tu: XOF, KES, NGN au GHS kwa ekari), malipo kabla au siku ile ile, na mfuko tofauti wa matengenezo kwa mashine inayomilikiwa na kikundi ili matengenezo yasisimamishe msimu. Mtajeni mwendeshaji aliyefunzwa, wekeni daftari la kumbukumbu la saa, mafuta, mashamba yaliyohudumiwa na matengenezo, na hifadhini mashine mahali salama."
          ],
          steps: ["Amueni kukodi au kununua, kwa kuzingatia gharama, ujuzi na kiasi cha kazi kilichopo.", "Orodhesheni mashamba ya wanachama, ukubwa wake na tarehe wanazohitaji mashine.", "Kubalianeni ratiba ya haki (kwa njia, bahati nasibu au hitaji la kupanda) na mbadilishe nani anaanza.", "Wekeni ada, muda wa malipo na mfuko wa matengenezo.", "Mtajeni mwendeshaji na wekeni daftari la kumbukumbu; kubalianeni nini kitafanyika ikiharibika."],
          words: [["Huduma ya kukodisha", "mtoa huduma anayeleta trekta au mashine na kufanya kazi kwa malipo."], ["Mfuko wa matengenezo", "fedha zinazowekwa kando kutoka kwenye ada ili kulipia matengenezo na huduma ya mashine."], ["Daftari la kumbukumbu", "kumbukumbu ya saa za mashine, mafuta, mashamba yaliyohudumiwa na matengenezo."]],
          slides: [
            { title: "Kukodi au kununua?", bullets: ["Kununua: gharama kubwa, mafuta, matengenezo, mwendeshaji", "Vikundi vingi vidogo huanza kwa kukodi pamoja", "Mashine ndogo za pamoja: ya kupura, ya kupukuchua, kinu"] },
            { title: "Ratiba ya haki", bullets: ["Orodhesheni mashamba, ukubwa na tarehe zinazohitajika", "Mpangilio kwa njia, bahati nasibu au hitaji la kupanda", "Badilisheni nani anaanza kila msimu"] },
            { title: "Ada na utunzaji", bullets: ["Ada kwa ekari au kwa saa (kiasi ni mifano tu)", "Mfuko wa matengenezo", "Mwendeshaji aliyefunzwa; daftari la saa na mafuta"] }
          ],
          sources: [FAO_MECH],
          tryIt: "Chagua mashine au huduma ya kukodisha ambayo kikundi chako kinahitaji. Orodhesha mashamba ya wanachama watano, ukubwa wake na tarehe, kisha andika ratiba ya zamu, ada kwa ekari, kanuni ya mfuko wa matengenezo kama mnamiliki mashine, na nini kitafanyika ikiharibika.",
          youCanNow: "kuandika mpango wa haki wa kukodi au kushirikiana trekta au mashine, wenye ratiba, ada na matengenezo.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini vikundi vingi vidogo hukodi huduma ya trekta badala ya kununua?", options: ["Kukodi ni bure kila wakati", "Matrekta hayawezi kununuliwa Afrika", "Kununua kunahitaji fedha nyingi, matengenezo, mwendeshaji na kazi ya kutosha", "Huduma za kukodisha hazifiki kwa wakati kamwe"], answer: 2, why: "Kumiliki trekta kunaleta gharama na mahitaji makubwa; kukodi kama kikundi kunatoa nafasi ya kuitumia bila hayo." },
            { objective: "O3", q: "Mfuko wa matengenezo ni wa nini?", options: ["Kumlipa mwenyekiti mshahara", "Kulipia matengenezo ili mashine iendelee kufanya kazi", "Kununua mbegu", "Kulipia mikutano"], answer: 1, why: "Kuweka kando fedha za matengenezo kunazuia uharibifu kumaliza msimu." }
          ]
        },
        {
          title: "Kununua kwa jumla, kujadiliana bei na kuepuka pembejeo bandia",
          objectives: ["O4"],
          minutes: 6,
          goal: "Panga ununuzi wa jumla wa mbegu au mbolea, linganisha bei kutoka kwa wauzaji watatu na uhakikishe pembejeo ni halisi.",
          text: [
            "Kusanya maagizo kwanza: jina la kila mwanachama, pembejeo, kiasi na malipo ya awali aliyolipa, vyote vikiwa vimeandikwa kwenye daftari la maagizo na kusomwa tena kwa sauti. Jumlisha. Agizo kubwa la uhakika linakupa nguvu ya kujadiliana. Omba angalau wauzaji watatu waliosajiliwa (wauzaji wa pembejeo, wasambazaji au kampuni) wakupe bei kwa maandishi: bei kwa mfuko, usafirishaji hadi kijijini kwenu, tarehe, chapa na aina, na punguzo lolote kwa mzigo mzima.",
            "Jadilianeni zaidi ya bei: usafirishaji wa bure au wa bei nafuu, tarehe ya kufikisha kabla ya kupanda, maonyesho au mafunzo ya bure, kulipa sehemu wakati wa kufikisha, na risiti kwa jina la kikundi. Linganisheni bei kwa gharama yote hadi mzigo ufike, si bei ya mfuko tu. Kamwe msimpe mtu mmoja fedha zote taslimu; lipeni kutoka akaunti ya kikundi dhidi ya risiti.",
            "Mbegu, mbolea na viuatilifu bandia ni hatari ya kweli. Nunueni kwa wauzaji waliosajiliwa tu. Kagueni lakiri (seal), lebo, namba za toleo (batch) na tarehe, na kwamba mifuko haijachanika wala kushonwa upya. Nchini Kenya, mbegu zilizothibitishwa zinasimamiwa na KEPHIS; nchini Nigeria, Baraza la Taifa la Mbegu za Kilimo (NASC) linawaambia wakulima wanunue kwa wauzaji wa pembejeo waliosajiliwa na watafute lebo yake ya uthibitisho; nchini Ghana, Kurugenzi ya Huduma za Ulinzi na Udhibiti wa Mimea (PPRSD) inasimamia mbegu na mbolea chini ya Sheria ya Mimea na Mbolea. Viuatilifu lazima viwe kwenye rejista ya taifa lenu. Wekeni risiti na sampuli ndogo, na ripotini bidhaa bandia kwa mamlaka ya taifa."
          ],
          steps: ["Kusanya agizo na malipo ya awali ya kila mwanachama kwenye daftari la maagizo; lisome tena kwa sauti.", "Pata bei kwa maandishi kutoka kwa angalau wauzaji watatu waliosajiliwa.", "Jadilianeni bei, usafirishaji, tarehe, mafunzo na masharti ya malipo.", "Linganisheni gharama yote hadi kufika na mchague; lipeni kutoka akaunti ya kikundi dhidi ya risiti.", "Mzigo ukifika, kagueni lakiri, lebo, namba za toleo na lebo za uthibitisho; gawanyeni kwa risiti kwa kila mwanachama."],
          words: [["Kununua kwa jumla", "kununua kiasi kikubwa pamoja ili kupata bei ya chini au masharti bora."], ["Bei ya maandishi (quote)", "bei na masharti ya muuzaji yaliyoandikwa kabla hujanunua."], ["Muuzaji wa pembejeo (agro-dealer)", "duka au mfanyabiashara anayeuza mbegu, mbolea na pembejeo nyingine za kilimo."], ["Mbegu zilizothibitishwa", "mbegu zilizokaguliwa na mamlaka ya taifa ya mbegu kuwa za aina sahihi na ubora unaofaa."]],
          slides: [
            { title: "Kusanyeni maagizo kwanza", bullets: ["Jina, pembejeo, kiasi, malipo ya awali", "Yameandikwa kwenye daftari la maagizo na kusomwa tena", "Agizo kubwa la uhakika linatoa nguvu ya kujadiliana"] },
            { title: "Bei tatu, kisha jadilianeni", bullets: ["Angalau wauzaji watatu waliosajiliwa, kwa maandishi", "Bei, usafirishaji, tarehe, mafunzo, masharti ya malipo", "Linganisheni gharama yote hadi kufika; risiti kwa jina la kikundi"] },
            { title: "Epukeni pembejeo bandia", bullets: ["Wauzaji waliosajiliwa tu; kagueni lakiri, lebo, tarehe", "Kenya: KEPHIS; Nigeria: lebo ya NASC; Ghana: PPRSD", "Viuatilifu kwenye rejista ya taifa; ripotini bidhaa bandia"] }
          ],
          sources: [KEPHIS_SEED, NASC_FAKE, GH_ACT803, FAO_PEST_REG],
          tryIt: "Tengeneza karatasi ya maagizo kwa angalau wanachama watano (jina, pembejeo, kiasi, malipo ya awali). Andika maswali utakayowauliza wauzaji watatu waliosajiliwa, na orodha ya ukaguzi ya siku ya kufikisha ili kutambua mbegu au mbolea bandia.",
          youCanNow: "kupanga ununuzi wa pembejeo kwa jumla, kujadiliana na wauzaji watatu na kuhakikisha mbegu na mbolea ni halisi.",
          quickCheck: [
            { objective: "O4", q: "Unapaswa kulinganisha bei za wauzaji vipi?", options: ["Bei ya mfuko tu", "Muuzaji yupi ni rafiki", "Yupi ana duka kubwa zaidi", "Gharama yote hadi kufika, pamoja na tarehe, ubora na masharti"], answer: 3, why: "Bei ya chini ya mfuko inaweza kuficha gharama kubwa ya usafiri au kuchelewa kufika; linganisheni makubaliano yote." },
            { objective: "O4", q: "Mzigo ukifika, baadhi ya mifuko ya mbegu inaonekana imeshonwa upya na haina lebo ya uthibitisho. Unafanya nini?", options: ["Kuikataa, kuweka ushahidi na kuripoti kwa mamlaka ya mbegu", "Kuipokea ili kuokoa muda", "Kuigawa kimya kimya", "Kuichanganya na mbegu nzuri"], answer: 0, why: "Mifuko iliyoshonwa upya bila lebo ni dalili za mbegu bandia; ikatae, weka ushahidi na uripoti." }
          ]
        },
        {
          title: "Kudumisha uaminifu: kumbukumbu zilizo wazi na kushughulikia migogoro",
          objectives: ["O5"],
          minutes: 5,
          goal: "Weka kumbukumbu zilizo wazi za fedha zilizochangwa na umalize kutoelewana kwa hatua zilizokubaliwa.",
          text: [
            "Vikundi mara chache huvunjika kwa kukosa mawazo; huvunjika wanachama wanapoacha kuamini fedha zilikokwenda. Fanyeni kila shilingi, naira, cedi au faranga iwe rahisi kufuatilia: daftari la maagizo kwa malipo ya awali, risiti kwa kila malipo yanayoingia na kutoka, malipo kutoka akaunti ya kikundi yanayoidhinishwa na watu wawili, na daftari la kumbukumbu la mashine kama mnashirikiana moja.",
            "Fanyeni kumbukumbu ziwe wazi. Someni muhtasari wa fedha kwa sauti katika kila mkutano: fedha zilizoingia, zilizotoka, salio, na nini kilinunuliwa kwa ajili ya nani. Bandikeni orodha ya maagizo na ratiba mahali wanachama wanaweza kuziona, au shirikini picha katika kikundi cha mazungumzo kwenye simu. Mruhusuni mwanachama yeyote kuangalia vitabu. Badilisheni mara kwa mara wanaoshughulikia fedha.",
            "Kutoelewana kutatokea: mtu anapata trekta kwa kuchelewa, mfuko unakosekana, mwanachama halipi. Tumieni hatua zilizo katika kanuni zenu: kwanza ongeeni moja kwa moja; kisha kamati inawasikiliza pande zote mbili na kukagua kumbukumbu; kisha kikundi kizima kinaamua; na ikihitajika, mwombeni mtu wa nje anayeheshimiwa kama afisa ugani, chifu au afisa wa ushirika. Amueni kwa ukweli ulio kwenye kumbukumbu, si kwa nani ana sauti kubwa zaidi. Hakikisheni wanawake na vijana nao wanaweza kuleta matatizo, na kwamba malalamiko yao yanasikilizwa."
          ],
          steps: ["Wekeni daftari la maagizo, risiti, akaunti ya kikundi yenye waidhinishaji wawili na daftari la kumbukumbu la mashine.", "Someni muhtasari wa fedha kwa sauti katika kila mkutano.", "Bandikeni orodha na ratiba mahali wanachama wanaweza kuziona.", "Malizeni kutoelewana kwa hatua zilizokubaliwa, mkitumia kumbukumbu.", "Badilisheni wanaoshika nyadhifa za fedha na hakikisheni kila mtu anaweza kuleta tatizo."],
          words: [["Uwazi", "kuweka fedha na maamuzi wazi ili kila mwanachama aweze kuyaona."], ["Msuluhishi", "mtu anayeheshimiwa, asiyependelea upande wowote, anayesaidia pande mbili kumaliza kutoelewana."], ["Salio", "fedha zinazobaki baada ya fedha zilizotoka kutolewa kutoka kwa fedha zilizoingia."]],
          slides: [
            { title: "Uaminifu unafuata fedha", bullets: ["Daftari la maagizo na risiti kwa kila kitu", "Akaunti ya kikundi; waidhinishaji wawili", "Daftari la kumbukumbu la mashine kama mnashirikiana moja"] },
            { title: "Fanyeni kumbukumbu ziwe wazi", bullets: ["Someni kwa sauti fedha zilizoingia, zilizotoka na salio", "Bandikeni orodha na ratiba; shirikini picha", "Mwanachama yeyote anaweza kuona vitabu"] },
            { title: "Malizeni kutoelewana", bullets: ["Ongeeni moja kwa moja; kamati inasikiliza pande zote", "Kikundi kizima kinaamua; msuluhishi wa nje ikihitajika", "Amueni kwa kumbukumbu; wasikilizeni wanawake na vijana"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa kununua pembejeo kwa jumla au makubaliano ya kushirikiana mashine. Weka wanachama, kumbukumbu mtakazoweka na kusoma kwa sauti, hatua za kumaliza kutoelewana, na nyadhifa ambazo wanawake na vijana watashika.",
          youCanNow: "kuweka fedha zilizochangwa wazi na zinazofuatilika, kumaliza kutoelewana kwa haki na kudumisha uaminifu wa kila mtu.",
          quickCheck: [
            { objective: "O5", q: "Nini kinajenga uaminifu zaidi katika kikundi kinachochanga fedha?", options: ["Mweka hazina anaweka vitabu nyumbani kwake", "Kusoma kwa sauti fedha zilizoingia, zilizotoka na salio katika kila mkutano", "Kuwalipa wauzaji taslimu bila risiti", "Mwenyekiti peke yake ndiye anajua salio"], answer: 1, why: "Kumbukumbu zilizo wazi zinamwezesha kila mwanachama kuona fedha zilikokwenda." },
            { objective: "O5", q: "Mwanachama anasema amepata trekta mwisho tena. Hatua ya kwanza ni ipi?", options: ["Kumwondoa kwenye kikundi", "Kupuuza", "Kuongea moja kwa moja, kisha kukagua ratiba na kumbukumbu", "Kumrudishia fedha zake na kufunga kikundi"], answer: 2, why: "Kufuata hatua zilizokubaliwa na kukagua kumbukumbu kunamaliza jambo kwa haki." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuchangia, kununua pamoja na kudumisha uaminifu",
        questions: [
          { objective: "O3", q: "Huduma ya kukodisha ni nini?", options: ["Akaunti ya akiba ya kikundi", "Mtoa huduma anayeleta mashine na kufanya kazi kwa malipo", "Kampuni ya mbegu", "Mkopo wa benki"], answer: 1, why: "Huduma ya kukodisha inawawezesha wakulima kutumia trekta au mashine bila kuimiliki." },
          { objective: "O3", q: "Kila mtu anataka trekta siku zile zile tatu. Nini ni haki?", options: ["Marafiki wa mwenyekiti wanaanza", "Yule anayepiga kelele zaidi", "Yule anayelipa zaidi kwa siri", "Mpangilio uliokubaliwa kwa njia, bahati nasibu au hitaji la kupanda, unaobadilika kila msimu"], answer: 3, why: "Mpangilio uliokubaliwa unaobadilika ni wa haki na unaokoa mafuta na safari." },
          { objective: "O4", q: "Kwa nini mkusanye maagizo na malipo ya awali kabla ya kuongea na wauzaji?", options: ["Ili kutumia fedha mapema", "Ili kuepuka kuandika chochote", "Agizo kubwa la uhakika linatoa nguvu ya kujadiliana", "Wauzaji wanaomba PIN za wanachama"], answer: 2, why: "Wauzaji hutoa masharti bora wanapojua agizo ni la kweli na kubwa." },
          { objective: "O4", q: "Ni ipi dalili ya mbolea au mbegu bandia?", options: ["Mifuko iliyochanika au kushonwa upya bila lebo", "Mfuko uliofungwa vizuri wenye namba ya toleo", "Risiti kutoka kwa muuzaji aliyesajiliwa", "Lebo ya uthibitisho"], answer: 0, why: "Lakiri zilizovunjika na kukosekana kwa lebo ni dalili za hatari za pembejeo bandia." },
          { objective: "O5", q: "Nani anapaswa kuidhinisha malipo kutoka akaunti ya kikundi?", options: ["Yeyote anayeomba", "Muuzaji", "Mtu mmoja peke yake", "Watia saini wawili waliokubaliwa"], answer: 3, why: "Waidhinishaji wawili wanafanya iwe vigumu zaidi fedha kutumiwa vibaya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuhamasisha Jamii: Kuchangia Mashine na Kujadiliana Bei ya Pembejeo",
    questions: [
      { objective: "O1", q: "Kuhamasisha jamii ni nini?", options: ["Kuhamia mjini", "Kuwaleta watu pamoja ili wachukue hatua kuhusu hitaji wanalolishiriki", "Kununua simu", "Kuuza mazao peke yako"], answer: 1, why: "Uhamasishaji ni kuwaunganisha watu kuhusu hitaji wanalolishiriki." },
      { objective: "O1", q: "Unapotambua mahitaji, unapaswa kuuliza angalau kaya ngapi?", options: ["Moja", "Mbili", "Viongozi tu", "Kumi"], answer: 3, why: "Kuuliza angalau kaya kumi kunatoa picha ya haki ya mahitaji ya pamoja." },
      { objective: "O1", q: "Kwa nini uwahusishe wakulima vijana katika ramani ya mahitaji?", options: ["Matatizo yao yanaweza kuwa tofauti, kama kukosa hati ya ardhi au kuhudumiwa mwisho", "Wana fedha zaidi", "Wanamiliki matrekta yote", "Haihitajiki"], answer: 0, why: "Vijana na wanawake wanaweza kukabili vizuizi tofauti ambavyo kikundi kinapaswa kutatua pia." },
      { objective: "O1", q: "Baada ya kuhesabu majibu, unafanya nini?", options: ["Kutupa karatasi", "Kuchagua kile kiongozi anachopenda", "Kupanga mahitaji matatu ya juu yanayoshirikiwa", "Kuanza kukusanya fedha"], answer: 2, why: "Kupanga kunaonyesha ni mahitaji yapi kaya nyingi zinashiriki." },
      { objective: "O2", q: "Mwaliko wa mkutano wa kwanza unapaswa kuwa na nini?", options: ["Orodha ya madeni ya wanachama", "Hakuna kitu, muda tu", "Dai la fedha", "Lengo kwa sentensi moja, muda na mahali"], answer: 3, why: "Lengo lililo wazi linawaambia watu kwa nini inafaa kuja." },
      { objective: "O2", q: "Ajenda ni nini?", options: ["Orodha ya mambo ambayo mkutano utajadili, kwa mpangilio", "Nafasi ya trekta iliyowekwa", "Bei ya muuzaji", "Taarifa ya benki"], answer: 0, why: "Ajenda inafanya mkutano uwe mfupi na usiende nje ya mada." },
      { objective: "O2", q: "Lengo lipi liko wazi zaidi?", options: ["Kufanya vizuri zaidi mwaka huu", "Kumsaidia kila mtu", "Shamba la kila mwanachama lilimwe ndani ya wiki mbili baada ya mvua za kwanza", "Kupata mashine siku moja"], answer: 2, why: "Linataja matokeo na muda, kwa hiyo kikundi kinaweza kuona kama kimefanikiwa." },
      { objective: "O2", q: "Kanuni ipi inapaswa kukubaliwa kabla fedha hazijakusanywa?", options: ["Rangi ya mashati ya kikundi", "Jinsi mwanachama anavyoweza kujitoa na kurudishiwa fedha zake", "Mwenyekiti anaishi wapi", "Kituo kipi cha redio cha kusikiliza"], answer: 1, why: "Kanuni kuhusu kujitoa na kurudishiwa fedha zinazuia migogoro fedha zinapochangwa." },
      { objective: "O3", q: "Kwa kawaida hatua ya kwanza ya kikundi kidogo kupata mashine ni ipi?", options: ["Kununua trekta kubwa kwa mkopo", "Kujenga kiwanda", "Kila mwanachama kununua trekta", "Kukodi huduma ya trekta pamoja"], answer: 3, why: "Kukodi kama kikundi kunatoa nafasi ya kutumia mashine bila gharama kubwa za kumiliki." },
      { objective: "O3", q: "Daftari la kumbukumbu la mashine linaandika nini?", options: ["Siku za kuzaliwa za wanachama", "Saa, mafuta, mashamba yaliyohudumiwa na matengenezo", "Bei za mazao", "Mahudhurio ya mikutano"], answer: 1, why: "Daftari la kumbukumbu linaonyesha jinsi mashine inavyotumika na kutunzwa." },
      { objective: "O3", q: "Kulima kwa kuchelewa kwa kawaida husababisha:", options: ["Mavuno zaidi", "Hakuna mabadiliko", "Mavuno kidogo", "Mbolea ya bure"], answer: 2, why: "Kulima na kupanda kwa kuchelewa kunapunguza mavuno, ndiyo maana ratiba ya haki ni muhimu." },
      { objective: "O3", q: "Kikundi kinamiliki mashine ya kupukuchua mahindi. Fedha za matengenezo zinatoka wapi?", options: ["Mfuko wa matengenezo uliowekwa kando kutoka kwenye ada", "Mfukoni mwa mwenyekiti mwenyewe", "Kwa muuzaji", "Hakuna mahali; acheni kuitumia"], answer: 0, why: "Mfuko wa matengenezo kutoka kwenye ada unaifanya mashine iendelee kufanya kazi." },
      { objective: "O4", q: "Unapaswa kulinganisha angalau bei ngapi za maandishi kutoka kwa wauzaji?", options: ["Tatu", "Moja", "Hakuna", "Ishirini"], answer: 0, why: "Bei tatu zinaonyesha bei ya haki na zinakupa nafasi ya kujadiliana." },
      { objective: "O4", q: "Mbali na bei, unaweza kujadiliana kuhusu nini?", options: ["Jina la ukoo la muuzaji", "PIN za wanachama", "Kufikishiwa mzigo kijijini kabla ya kupanda", "Bei ya juu zaidi"], answer: 2, why: "Usafirishaji, muda, mafunzo na masharti ya malipo yana thamani sawa na bei ya mfuko." },
      { objective: "O4", q: "Nchini Nigeria, ni mamlaka ipi inaonya kuhusu mbegu bandia na inatumia lebo ya uthibitisho?", options: ["KEPHIS", "Baraza la Taifa la Mbegu za Kilimo (NASC)", "PPRSD", "KEBS"], answer: 1, why: "NASC inawaambia wakulima wanunue kwa wauzaji wa pembejeo waliosajiliwa na watafute lebo yake ya uthibitisho." },
      { objective: "O4", q: "Kikundi kinapaswa kumlipa muuzaji vipi?", options: ["Taslimu kupitia mwanachama mmoja", "Kwenye akaunti ya mtu usiyemjua", "Bila risiti yoyote", "Kutoka akaunti ya kikundi, dhidi ya risiti kwa jina la kikundi"], answer: 3, why: "Malipo ya kikundi yenye risiti yanafanya fedha zifuatilike." },
      { objective: "O5", q: "Kwa nini msome muhtasari wa fedha kwa sauti katika mikutano?", options: ["Ili kujaza muda", "Ili kuwaaibisha wanachama", "Kwa sababu sheria inataka kuimba", "Ili wanachama wasiojua kusoma nao waone fedha zilikokwenda"], answer: 3, why: "Kusoma kwa sauti kunafanya kumbukumbu ziwe wazi kwa kila mwanachama." },
      { objective: "O5", q: "Nani anaweza kusaidia ikiwa kamati haiwezi kumaliza mgogoro?", options: ["Mtu wa nje anayeheshimiwa kama afisa ugani au afisa wa ushirika", "Muuzaji", "Hakuna mtu", "Mwanachama mwenye sauti kubwa zaidi"], answer: 0, why: "Msuluhishi asiyependelea upande wowote anaweza kusaidia pande zote mbili kukubaliana." },
      { objective: "O5", q: "Maamuzi katika mgogoro yanapaswa kutegemea nini?", options: ["Nani ni mzee zaidi", "Nani anapiga kelele zaidi", "Ukweli ulio kwenye kumbukumbu", "Uvumi"], answer: 2, why: "Kumbukumbu zinaonyesha kilichotokea kwa kweli, kwa hiyo maamuzi yanakuwa ya haki." },
      { objective: "O5", q: "Kipi kinawasaidia wanawake na vijana kushiriki?", options: ["Nyadhifa kwa wakuu wa kaya tu", "Nyadhifa za kweli kama mweka hazina au wakala wa zamu", "Mikutano usiku mahali mbali", "Uanachama kwa wenye hati ya ardhi tu"], answer: 1, why: "Kuwapa wanawake na vijana nafasi za kweli kunajenga uaminifu na kikundi imara zaidi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na ujaribu tena.",
    criteria: [
      { name: "Ramani ya mahitaji", objective: "O1", notYet: "Hitaji ni makisio ya kiongozi, au ziliulizwa kaya chini ya kumi.", meets: "Angalau kaya kumi ziliulizwa, zikiwemo wanawake na vijana, na mahitaji matatu ya juu yamepangwa.", exceeds: "Ina ramani rahisi ya kijiji inayoonyesha mashamba, barabara, maduka ya pembejeo na mashine." },
      { name: "Lengo na kanuni", objective: "O2", notYet: "Hakuna lengo lililo wazi, au hakuna kanuni zilizoandikwa kuhusu fedha na kujitoa.", meets: "Lengo lenye namba na tarehe, na kanuni zilizoandikwa kuhusu kujiunga, maamuzi, fedha, kutolipa na kujitoa, zilizokubaliwa katika kumbukumbu.", exceeds: "Kanuni zilisomwa kwa sauti na makubaliano ya wanachama yameandikwa kwa majina." },
      { name: "Mpango wa mashine", objective: "O3", notYet: "Hakuna ratiba wala ada, au hakuna mpango mashine ikiharibika.", meets: "Kukodi au kununua kumeamuliwa, ratiba ya haki, ada, mfuko wa matengenezo au masharti ya kukodi, mwendeshaji na kanuni ya uharibifu.", exceeds: "Mtoa huduma ya kukodisha au mmiliki wa mashine amethibitisha mpango, na nafasi ya kwanza inabadilika kila msimu." },
      { name: "Mpango wa ununuzi wa jumla", objective: "O4", notYet: "Hakuna daftari la maagizo, bei chini ya tatu, au hakuna ukaguzi wa pembejeo bandia.", meets: "Maagizo na malipo ya awali yameandikwa, bei tatu za maandishi zimelinganishwa kwa gharama hadi kufika, malipo kupitia akaunti ya kikundi na ukaguzi wa siku ya kufikisha kwa pembejeo halisi.", exceeds: "Inaonyesha kilichopatikana kwa kujadiliana (bei, usafirishaji, mafunzo) na inataja mamlaka ya kuripoti bidhaa bandia." },
      { name: "Uaminifu na ujumuishaji", objective: "O5", notYet: "Kumbukumbu zinawekwa na mtu mmoja tu, au wanawake na vijana hawana nafasi yoyote.", meets: "Kumbukumbu zilizo wazi zinazosomwa kwa sauti, hatua zilizokubaliwa za kutoelewana, na nyadhifa zilizotajwa za wanawake na vijana.", exceeds: "Nyadhifa za fedha zinabadilishwa, na wanawake na vijana wanashika angalau wadhifa mmoja wa uongozi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Vikundi vinavyokamilisha ununuzi wa pembejeo kwa jumla au msimu wa kushirikiana mashine ndani ya miezi 6 (utafiti wa kufuatilia)",
      "Wanachama wanaoripoti kulipa kidogo kwa mfuko au kulimiwa mapema kuliko walipokuwa peke yao",
      "Vikundi visivyo na migogoro ya fedha isiyomalizika baada ya msimu mmoja, na kumbukumbu zikisomwa kwa sauti katika mikutano",
      "Sehemu ya nyadhifa za kikundi zinazoshikwa na wanawake na wanachama vijana"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya kawaida kwa kupiga, SMS na pesa kwa simu; simu janja inasaidia kupiga picha za orodha",
      "Daftari kwa ramani ya mahitaji, kumbukumbu za mkutano, daftari la maagizo na daftari la kumbukumbu la mashine",
      "Violezo rahisi vya kanuni na vya karatasi ya maagizo (mwezeshaji anaweza kuvinakili kutoka kwenye masomo)",
      "Mifuko au lebo za mfano za mbegu na mbolea ili kufanya mazoezi ya kutambua bidhaa bandia",
      "Kama dakika 90 kwa jumla, katika vipindi vifupi, pamoja na muda wa kutembelea kaya na wauzaji"
    ],
    facilitatorNotes: [
      "Endesha kozi na kijiji au kikundi halisi: fanyeni ramani ya mahitaji na mkutano wa kwanza kwa kweli, kati ya vipindi.",
      "Fanyeni vipindi wakati wanawake na vijana wanaweza kuhudhuria, na waalike waongoze mkutano au waandike kumbukumbu.",
      "Leta mifuko au lebo halisi za pembejeo na uiulize mamlaka ya taifa ya mbegu au ya ulinzi wa mimea (KEPHIS, NASC, PPRSD au mamlaka ya nchi yako) jinsi ya kuzikagua; usitaje ada wala bei kwa kukumbuka tu.",
      "Igizeni kipindi cha kujadiliana bei na muuzaji na mgogoro kuhusu nafasi ya trekta iliyochelewa, mkitumia kumbukumbu za mfano.",
      "Pima kazi ya mwisho kwa rubriki; kikundi kikiwa tayari kusajiliwa rasmi, waelekeze kwenye kozi \"Vyama vya Ushirika vya Wakulima na Kufikia Soko\"."
    ]
  }
};
