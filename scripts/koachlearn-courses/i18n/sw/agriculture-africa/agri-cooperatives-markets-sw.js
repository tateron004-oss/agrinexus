"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-cooperatives-markets.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const ICA = { name: "International Cooperative Alliance (Muungano wa Kimataifa wa Vyama vya Ushirika): utambulisho, maadili na kanuni za ushirika", url: "https://ica.coop/en/cooperatives/cooperative-identity" };
const KE_ACT = { name: "Kenya Law: Sheria ya Vyama vya Ushirika (Co-operative Societies Act; usajili kupitia Kamishna wa Maendeleo ya Ushirika)", url: "https://new.kenyalaw.org/akn/ke/act/1997/12" };
const NG_ACT = { name: "Sheria ya Vyama vya Ushirika ya Nigeria (Co-operative Societies Act; Wakurugenzi wa Ushirika wa Shirikisho na Majimbo; masharti; ukaguzi wa kila mwaka)", url: "https://placng.org/lawsofnigeria/print.php?sn=356" };
const GH_COOP = { name: "Idara ya Huduma za Habari ya Ghana: Serikali yaanza mageuzi ya sekta ya ushirika (Department of Co-operatives)", url: "https://www.isd.gov.gh/government-begins-reform-of-cooperative-sector-with-new-policy-and-legal-framework/" };
const KAMIS = { name: "Mfumo wa Taarifa za Masoko ya Kilimo wa Kenya (KAMIS), Wizara ya Kilimo", url: "https://kamis.kilimo.go.ke" };

module.exports = {
  id: "agri-cooperatives-markets-sw",
  lang: "sw",
  translationOf: "agri-cooperatives-markets",
  category: "Agriculture (Africa)",
  name: "Vyama vya Ushirika vya Wakulima na Kufikia Soko",
  skills: "Kueleza kwa nini wakulima huungana, Kuandika masharti ya kikundi na kukisajili, Kuendesha mikutano na kuweka kumbukumbu za kikundi, Kukusanya mazao na kuuza pamoja, Kukagua bei za soko kwa simu, Kusoma mkataba wa mnunuzi",
  outcome: "kusaidia kuanzisha au kuimarisha kikundi cha wakulima: kukubaliana masharti yake, kujua mahali pa kukisajili, kuendesha mikutano na kuweka kumbukumbu zilizo wazi, kukusanya mazao ya wanachama na kuyauza pamoja kwa bei iliyokaguliwa, na kusoma mkataba wa mnunuzi kabla mtu yeyote hajasaini.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wanaokua, viongozi wa vikundi vya wakulima na vyama vya ushirika, na vijana wanaofanya kazi katika biashara ya kilimo nchini Kenya, Nigeria, Ghana na kote Afrika. Mkulima peke yake mwenye magunia matano ya mahindi au makreti machache ya nyanya hupokea bei yoyote anayotoa mfanyabiashara. Wakiwa pamoja, kikundi kinaweza kununua pembejeo kwa bei nafuu, kutimiza oda ya mnunuzi mkubwa na kujadiliana kupata bei bora.",
    "Sura ya 1 inahusu kujenga kikundi: kwa nini wakulima huungana, kuanzisha kikundi cha wazalishaji au chama cha ushirika (masharti na usajili), na kukiendesha vizuri kwa mikutano na kumbukumbu. Sura ya 2 inahusu kufikia soko: kukusanya na kuuza pamoja, kukagua bei kwa simu, na mikataba na wanunuzi.",
    "Sheria za ushirika, ofisi za usajili na ada zinatofautiana kati ya nchi na hubadilika kwa wakati. Kozi hii inataja ofisi za kuwasiliana nazo; kila wakati kagua sheria za sasa nao kabla ya kusajili. Kila somo linachukua kama dakika tano na linaisha na kazi unayoweza kufanya na kikundi chako. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa kuuza kama kikundi kwa zao moja (la kikundi chako, au mfano kama wakulima 25 wa mahindi huko Bungoma, kikundi cha wanawake cha nyanya huko Kaduna, au kikundi cha kakao au kunde karibu na Tamale): jina na lengo la kikundi, masharti matano muhimu, mahali ungesajili na unachopaswa kukagua, kumbukumbu utakazoweka, jinsi wanachama watakavyoleta mazao, yatakavyopangwa kwa daraja na watakavyolipwa, bei ulizopata kutoka angalau vyanzo vitatu, na masharti sita ya mkataba utakayokagua kabla ya kusaini na mnunuzi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wanaokua, viongozi wa vikundi vya wakulima na vyama vya ushirika, na vijana wanaofanya kazi katika biashara ya kilimo nchini Kenya, Nigeria, Ghana na kote Afrika wanaotaka kununua na kuuza pamoja.",
    startingPoint: "Wengi huuza kiasi kidogo peke yao shambani na hupokea bei ya mfanyabiashara. Baadhi ni wanachama wa kikundi kisicho rasmi au chama. Wachache wana masharti yaliyoandikwa, wameweka kumbukumbu za kikundi, wameendesha siku ya kukusanya mazao, wamekagua bei kutoka vyanzo kadhaa, au wamesoma mkataba wa mnunuzi kabla ya kusaini.",
    gap: "Peke yao, wakulima hawana nguvu kubwa ya kujadiliana, na vikundi vingi vinashindwa kwa sababu ya kutoaminiana, kumbukumbu mbaya, kuuza pembeni na malipo yanayochelewa. Kikundi kinachoendeshwa vizuri chenye sheria wazi, kumbukumbu, bei zilizokaguliwa na mikataba iliyoandikwa kinaweza kutimiza oda za wanunuzi wakubwa, kununua pembejeo kwa bei nafuu na kuwaletea wanachama mapato zaidi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la kikundi na la soko linaelezwa",
      "Vifaa: simu ya kawaida kwa SMS, WhatsApp, kukagua bei na kikokotoo; vitabu vya kumbukumbu vya karatasi",
      "Sheria, ofisi na ada za ushirika zinatofautiana kati ya nchi na hubadilika: wanafunzi wanakagua na ofisi ya ushirika",
      "Pesa na faragha: watu wawili wanaidhinisha malipo; usiwape kamwe zana za AI au wanaopiga simu PIN au taarifa za benki",
      "Si ushauri wa kisheria: mikataba mikubwa inakaguliwa na ofisi ya ushirika, afisa ugani au wakili"
    ],
    prerequisites: "Hakuna. Kozi \"Utunzaji na Uhifadhi wa Mazao Baada ya Mavuno\" inasaidia katika kupanga madaraja na ubora."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa shamba lako na majirani zako", action: "kuorodhesha kile kikundi kinachoweza kufanya ambacho mkulima mmoja hawezi, na hatari za kudhibiti", standard: "ukitaja angalau faida tatu na sababu tatu za kawaida vikundi kushindwa" },
    { id: "O2", condition: "Kwa kikundi kipya au kilichopo cha wakulima", action: "kuandika rasimu ya masharti makuu ya kikundi na kutaja ofisi ambapo kikundi kingesajiliwa", standard: "ukiwa na angalau sheria tano muhimu na hatua za sasa zimekaguliwa na ofisi" },
    { id: "O3", condition: "Kwa mkutano wa kikundi na pesa zake", action: "kuendesha mkutano wenye ajenda na kumbukumbu za mkutano, na kuweka kumbukumbu za msingi za kikundi", standard: "ukiwa na rejista ya wanachama, daftari la fedha, daftari la mazao yaliyoletwa na kumbukumbu ya malipo, na watu wawili wakiidhinisha malipo" },
    { id: "O4", condition: "Siku ya kukusanya mazao", action: "kukagua, kupanga kwa daraja, kupima, kuandika na kulipia mazao ya kila mwanachama", standard: "ukipima mbele ya mwanachama, ukitoa risiti na ukilipa kulingana na kumbukumbu" },
    { id: "O5", condition: "Kabla ya kuuza", action: "kulinganisha bei kutoka angalau vyanzo vitatu na kukokotoa bei ya ofa ikiwa shambani kwako", standard: "ukiondoa usafiri, ada na hasara, na ukitambua ofa za ulaghai" },
    { id: "O6", condition: "Ukipewa mkataba wa mnunuzi", action: "kukagua masharti muhimu kabla kikundi hakijasaini", standard: "ukishughulikia zao, daraja, kiasi, bei, uwasilishaji, ukaguzi wa ubora, malipo, kushindwa na migogoro" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujenga kikundi imara cha wakulima",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kwa nini wakulima huungana",
          minutes: 4,
          goal: "Orodhesha kile kikundi kinachoweza kufanyia shamba lako ambacho huwezi peke yako, na hatari za kudhibiti.",
          text: [
            "International Cooperative Alliance (Muungano wa Kimataifa wa Vyama vya Ushirika) inaeleza chama cha ushirika kama muungano wa watu wanaojiunga kwa hiari ili kutimiza mahitaji yao ya pamoja ya kiuchumi, kijamii na kitamaduni kupitia biashara wanayoimiliki pamoja na kuisimamia kidemokrasia. Wanachama ni wamiliki na pia watumiaji.",
            "Vikundi vinawasaidia wakulima: kununua mbegu, mbolea na chakula cha mifugo kwa wingi kwa bei nafuu; kukusanya mazao hadi kujaza malori ambayo wanunuzi wakubwa wanataka; kujadiliana kupata bei bora; kushiriki maghala, vikaushio, usafiri na vifaa; kupata mafunzo, vyeti na mikopo ambayo wakopeshaji hutoa kwa urahisi zaidi kwa kikundi chenye kumbukumbu; na kuzungumza kwa sauti moja na serikali na wanunuzi.",
            "Vikundi pia hushindwa. Sababu za kawaida ni kutoaminiana, viongozi wanaojichukulia mamlaka yote, kumbukumbu mbaya, wanachama kuuza kwa wanunuzi wa pembeni baada ya kikundi kukubaliana mpango, na malipo yanayochelewa. Sehemu iliyobaki ya kozi hii inahusu jinsi ya kuepuka haya. Vikundi vinaanzia vikundi visivyo rasmi vya kujisaidia au vya wazalishaji hadi vyama vya ushirika vilivyosajiliwa; kikundi kinaweza kuanza bila usajili na kusajiliwa baadaye."
          ],
          words: [["Chama cha ushirika", "biashara inayomilikiwa na kusimamiwa na wanachama wake, ambao pia wanatumia huduma zake."], ["Kikundi cha wazalishaji", "wakulima wanaolima zao moja na wanaofanya kazi pamoja, kiwe kimesajiliwa au la."], ["Kununua kwa wingi", "kununua kiasi kikubwa pamoja kwa bei ya chini."], ["Kuuza pembeni", "mwanachama kuuza kwa mnunuzi mwingine baada ya kikundi kukubaliana kuuza pamoja."]],
          slides: [
            { title: "Chama cha ushirika ni nini (ICA)", bullets: ["Watu wanaojiunga kwa hiari", "Biashara wanayoimiliki pamoja", "Inasimamiwa kidemokrasia: wanachama wanaimiliki na kuitumia"] },
            { title: "Vikundi vinaweza kufanya nini", bullets: ["Kununua pembejeo kwa wingi, kwa bei nafuu", "Kujaza malori kwa wanunuzi wakubwa; kujadiliana bei", "Kushiriki maghala, usafiri; kupata mafunzo na mikopo"] },
            { title: "Kwa nini vikundi hushindwa", bullets: ["Kutoaminiana; viongozi wanajichukulia mamlaka", "Kumbukumbu mbaya; malipo yanayochelewa", "Kuuza pembeni baada ya mpango wa kikundi"] }
          ],
          sources: [ICA],
          tryIt: "Andika vitu vitatu ambavyo kikundi kinaweza kufanyia shamba lako ambavyo huwezi peke yako, na hatari moja inayokutia wasiwasi zaidi. Waulize majirani wawili wangetaka nini kutoka kwa kikundi na uandike majibu yao.",
          youCanNow: "kueleza chama cha ushirika ni nini, kikundi kinaweza kuwafanyia wakulima nini, na sababu kuu za vikundi kushindwa.",
          quickCheck: [
            { objective: "O1", q: "Kuna aina gani za vikundi vya wakulima?", options: ["Kuanzia vikundi visivyo rasmi vya kujisaidia au vya wazalishaji hadi vyama vya ushirika vilivyosajiliwa", "Kampuni zilizosajiliwa tu", "Ofisi za serikali tu", "Vikundi vya wakulima zaidi ya 1,000 tu"], answer: 0, why: "Vikundi vinaanzia vikundi visivyo rasmi vya kujisaidia au vya wazalishaji hadi vyama vya ushirika vilivyosajiliwa." },
            { objective: "O1", q: "Majirani zako wanataka kuuza mahindi pamoja lakini hawako tayari kusajili. Wanaweza kufanya nini?", options: ["Kusubiri hadi waweze kusajili kabla ya kufanya chochote", "Kila mmoja auze peke yake milele", "Kumwomba mfanyabiashara awe kiongozi wao", "Kuanza kama kikundi kisicho rasmi na kusajili baadaye"], answer: 3, why: "Kikundi kinaweza kuanza bila usajili na kusajiliwa baadaye." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuanzisha kikundi: masharti na usajili",
          minutes: 6,
          goal: "Andika rasimu ya masharti makuu ya kikundi na ujue mahali pa kukisajili.",
          text: [
            "Anza na watu wanaolima zao moja au wanaohitaji huduma moja, wanaoishi karibu kiasi cha kuweza kukutana, na wanaoaminiana. Kubalianeni lengo lililo wazi, kama \"kuuza mahindi yetu pamoja na kununua pembejeo kwa wingi\". Fanyeni mkutano wa kwanza, andikeni kumbukumbu za mkutano, na chagueni kamati ya muda.",
            "Masharti (by-laws) ni sheria zilizoandikwa za kikundi. Kwa kawaida yanahusu: jina, anwani na lengo; nani anaweza kujiunga na jinsi gani; ada ya kujiunga na hisa; mikutano, akidi na upigaji kura (vyama vya ushirika vinatumia mwanachama mmoja, kura moja); kamati, mamlaka yake na muda wa uongozi; jinsi pesa zinavyotunzwa na kukaguliwa; jinsi ziada yoyote inavyogawanywa; na jinsi wanachama wanaovunja sheria wanavyoadhibiwa. Mara nyingi ofisi yako ya ushirika ina masharti ya mfano unayoweza kuyarekebisha.",
            "Usajili unakipa kikundi hadhi ya kisheria ya kumiliki mali, kufungua akaunti ya benki kwa jina lake, kusaini mikataba na kukopa. Sheria zinatofautiana kati ya nchi. Nchini Kenya, vyama vinasajiliwa chini ya Sheria ya Vyama vya Ushirika (Co-operative Societies Act) kupitia Kamishna wa Maendeleo ya Ushirika, kuanzia ofisi ya ushirika ya kaunti. Nchini Nigeria, Sheria ya Vyama vya Ushirika inasema chama cha msingi kinahitaji angalau wanachama kumi wenye sifa na kinaomba, pamoja na masharti yake, kwa Mkurugenzi wa Ushirika wa Jimbo (State Director of Co-operatives). Nchini Ghana, vikundi vinasajiliwa na Idara ya Ushirika (Department of Co-operatives) kupitia ofisi yake ya wilaya. Ada, fomu na hatua hubadilika, kwa hiyo tembelea au piga simu ofisini kabla ya kuomba."
          ],
          steps: ["Kubalianeni lengo la kikundi kwa sentensi moja.", "Fanyeni mkutano wa kwanza; andikeni kumbukumbu za mkutano na majina ya wanachama.", "Chagueni kamati ya muda: mwenyekiti, katibu, mweka hazina.", "Pateni masharti ya mfano kutoka ofisi yenu ya ushirika na myarekebishe.", "Kubalianeni sheria muhimu katika mkutano wa wanachama na andikeni kura.", "Tembeleeni ofisi ya ushirika: ombeni fomu, ada na hatua za sasa."],
          words: [["Masharti (by-laws)", "sheria zilizoandikwa ambazo kikundi kinakubali kuzifuata."], ["Akidi", "idadi ndogo kabisa ya wanachama wanaopaswa kuwepo ili maamuzi ya mkutano yahesabiwe."], ["Mwanachama mmoja, kura moja", "kila mwanachama ana kura moja, hata akiwa na hisa nyingi kiasi gani."], ["Usajili", "kutambuliwa rasmi kunakokipa kikundi hadhi ya kisheria."]],
          slides: [
            { title: "Anza vizuri", bullets: ["Zao moja au hitaji moja; karibu; kuaminiana", "Lengo la sentensi moja", "Mkutano wa kwanza, kumbukumbu, kamati ya muda"] },
            { title: "Masharti yanahusu", bullets: ["Lengo, uanachama, ada na hisa", "Mikutano, akidi, mwanachama mmoja kura moja", "Kamati, pesa, ziada, nidhamu"] },
            { title: "Mahali pa kusajili", bullets: ["Kenya: ofisi ya ushirika ya kaunti / Kamishna wa Maendeleo ya Ushirika", "Nigeria: Mkurugenzi wa Ushirika wa Jimbo", "Ghana: ofisi ya wilaya ya Idara ya Ushirika"] },
            { title: "Kabla ya kuomba", bullets: ["Sheria, fomu na ada hubadilika", "Tembelea au piga simu ofisini kwanza", "Omba masharti ya mfano"] }
          ],
          sources: [KE_ACT, NG_ACT, GH_COOP],
          tryIt: "Andika sheria tano za masharti ya kikundi chako: nani anaweza kujiunga, ada ya kujiunga au hisa, mnakutana mara ngapi na akidi, kura zinavyopigwa, na kinachotokea mwanachama akiuza pembeni. Kisha tafuta anwani au namba ya simu ya ofisi ya ushirika iliyo karibu nawe.",
          youCanNow: "kuandika rasimu ya masharti makuu ya kikundi cha wakulima na kujua mahali pa kukisajili katika nchi yako.",
          quickCheck: [
            { objective: "O2", q: "Usajili unakipa kikundi cha wakulima nini?", options: ["Bei ya uhakika", "Pembejeo za bure", "Hadhi ya kisheria ya kumiliki mali, kufungua akaunti ya benki, kusaini mikataba na kukopa", "Mshahara wa serikali"], answer: 2, why: "Usajili unakipa kikundi hadhi ya kisheria ya kumiliki mali, kutumia benki, kusaini mikataba na kukopa." },
            { objective: "O2", q: "Kikundi chako kinaandika masharti na hakijui pa kuanzia. Unafanya nini?", options: ["Kunakili sheria za kampuni kutoka intaneti", "Kuomba ofisi ya ushirika masharti ya mfano ya kurekebisha", "Kumwacha mwenyekiti ayaandike peke yake", "Kuacha masharti"], answer: 1, why: "Mara nyingi ofisi za ushirika zina masharti ya mfano ambayo vikundi vinaweza kurekebisha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuendesha kikundi: mikutano na kumbukumbu",
          minutes: 5,
          goal: "Endesha mkutano mfupi wenye ajenda na kumbukumbu za mkutano, na uweke kumbukumbu za msingi za kikundi.",
          text: [
            "Mikutano mizuri hujenga uaminifu. Tuma tarehe na ajenda mapema (ujumbe wa SMS au WhatsApp unafaa), anza kwa wakati, hakikisha akidi imetimia, fuata ajenda, mruhusu kila mwanachama aseme, pigeni kura juu ya maamuzi, na andika kumbukumbu za mkutano: nani alikuja, nini kiliamuliwa, na nani atafanya nini kufikia lini. Soma kumbukumbu za mkutano uliopita mwanzoni mwa kila mkutano. Fanyeni mkutano mkuu wa mwaka ambapo wanachama wanasikia hesabu na kuchagua kamati.",
            "Kumbukumbu ni kumbukumbu ya kikundi na ushahidi wake kwa wanunuzi, benki na ofisi ya ushirika. Weka angalau: rejista ya wanachama (majina, mawasiliano, hisa zilizolipwa), daftari la fedha la pesa zote zinazoingia na kutoka pamoja na risiti, daftari la mazao yaliyoletwa linaloonyesha kila mwanachama alileta nini, daraja lake na uzito wake, na kumbukumbu ya malipo inayoonyesha kila mwanachama alilipwa kiasi gani. Kwa mfano, Sheria ya Vyama vya Ushirika ya Nigeria inataka hesabu za chama kilichosajiliwa zikaguliwe kila mwaka.",
            "Linda pesa: tumia akaunti ya benki au ya pesa za simu ya kikundi, watu wawili wasaini au waidhinishe kila malipo, toa risiti kwa kila shilingi, naira au cedi, na msome hesabu kwa sauti mikutanoni. Jedwali (spreadsheet) kwenye simu au app ya bure inaweza kuhifadhi kumbukumbu, lakini weka pia nakala ya karatasi, na usishiriki kamwe PIN au nywila."
          ],
          steps: ["Tuma tarehe na ajenda mapema.", "Hakikisha akidi; fuata ajenda; pigeni kura juu ya maamuzi.", "Andika kumbukumbu za mkutano: nani alikuja, nini kiliamuliwa, nani anafanya nini kufikia lini.", "Weka kumbukumbu nne: wanachama, daftari la fedha, mazao yaliyoletwa, malipo.", "Tumia akaunti ya kikundi yenye watia sahihi wawili; toa risiti.", "Someni hesabu kwa sauti kila mkutano; zikaguliwe mara moja kwa mwaka."],
          words: [["Ajenda", "orodha ya mada za mkutano."], ["Kumbukumbu za mkutano", "maandishi ya kile mkutano ulichoamua."], ["Mkutano mkuu wa mwaka (AGM)", "mkutano wa kila mwaka wa wanachama wote kusikia hesabu na kuchagua viongozi."], ["Ukaguzi wa hesabu", "ukaguzi huru wa hesabu za kikundi."], ["Mtia sahihi", "mtu anayeruhusiwa kuidhinisha malipo kutoka kwenye akaunti."]],
          slides: [
            { title: "Mikutano mizuri", bullets: ["Ajenda inatumwa mapema; anza kwa wakati", "Hakikisha akidi; kila mtu anasema; pigeni kura", "Kumbukumbu: maamuzi, nani anafanya nini kufikia lini"] },
            { title: "Kumbukumbu nne za msingi", bullets: ["Rejista ya wanachama", "Daftari la fedha lenye risiti", "Daftari la mazao yaliyoletwa na kumbukumbu ya malipo"] },
            { title: "Linda pesa", bullets: ["Akaunti ya kikundi; watia sahihi wawili", "Risiti kwa kila malipo", "Someni hesabu kwa sauti; ukaguzi kila mwaka"] }
          ],
          sources: [NG_ACT],
          tryIt: "Andika ajenda ya mkutano ujao wa kikundi chako yenye mada nne. Kisha chora safu za daftari la mazao yaliyoletwa: tarehe, jina la mwanachama, zao, daraja, uzito, aliyepokea.",
          youCanNow: "kuendesha mkutano wa kikundi wenye ajenda na kumbukumbu za mkutano na kuweka kumbukumbu zinazojenga uaminifu.",
          quickCheck: [
            { objective: "O3", q: "Nini kinatokea katika mkutano mkuu wa mwaka?", options: ["Mnunuzi anaweka bei", "Wanachama wanasikia hesabu na kuchagua kamati", "Kikundi kinauza ghala lake", "Mwenyekiti peke yake ndiye anasema"], answer: 1, why: "Katika AGM, wanachama wanasikia hesabu na kuchagua kamati." },
            { objective: "O3", q: "Wewe ni mwenyekiti wa mkutano wa leo na akidi imetimia. Unafanya nini kwanza?", options: ["Kusoma kumbukumbu za mkutano uliopita", "Kuomba pesa", "Kuruka ajenda", "Kumaliza mkutano mapema"], answer: 0, why: "Kusoma kumbukumbu za mkutano uliopita mwanzoni kunawaweka wote pamoja na kujenga uaminifu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujenga kikundi imara cha wakulima",
        questions: [
          { objective: "O1", q: "Katika chama cha ushirika, nani anamiliki na kusimamia biashara?", options: ["Mnunuzi", "Serikali", "Wanachama", "Mwenyekiti peke yake"], answer: 2, why: "Wanachama wanamiliki, wanasimamia na wanatumia chama cha ushirika." },
          { objective: "O1", q: "Mwanachama anamuuzia mfanyabiashara mwingine baada ya kikundi kukubaliana mpango. Hii inaitwa:", options: ["Kununua kwa wingi", "Kuuza pembeni", "Kukusanya mazao", "Kukagua hesabu"], answer: 1, why: "Kuuza pembeni kunavunja mipango ya kikundi na ni sababu ya kawaida ya vikundi kushindwa." },
          { objective: "O2", q: "Nchini Nigeria, chama cha msingi cha ushirika kinaomba usajili wapi?", options: ["Kwa Mkurugenzi wa Ushirika wa Jimbo", "Polisi", "Shirikisho la mpira wa miguu", "Benki yoyote"], answer: 0, why: "Sheria ya Vyama vya Ushirika inapeleka maombi, pamoja na masharti, kwa Mkurugenzi wa Ushirika." },
          { objective: "O3", q: "Akidi ni nini?", options: ["Akaunti ya benki ya kikundi", "Aina ya zao", "Mapumziko ya chai ya mkutano", "Idadi ndogo kabisa ya wanachama inayohitajika ili maamuzi yahesabiwe"], answer: 3, why: "Bila akidi, maamuzi ya mkutano si halali." },
          { objective: "O3", q: "Tabia ipi inalinda pesa za kikundi vizuri zaidi?", options: ["Mtu mmoja anaweka pesa zote nyumbani", "Hakuna risiti, ili kuokoa karatasi", "Watia sahihi wawili, risiti na hesabu kusomwa kwa sauti", "Kushiriki PIN na wanachama wote"], answer: 2, why: "Waidhinishaji wawili, risiti na hesabu zilizo wazi zinafanya wizi na makosa kuwa magumu zaidi." }
        ]
      }
    },
    {
      name: "Sura 2: Kufikia soko pamoja",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kukusanya mazao na kuuza pamoja",
          minutes: 5,
          goal: "Andaa siku ya kukusanya ambapo mazao ya wanachama yanakaguliwa, yanapimwa, yanaandikwa na kulipiwa kwa haki.",
          text: [
            "Kukusanya mazao (aggregation) ni kukusanya kiasi kidogo cha wanachama wengi kuwa shehena moja kubwa yenye ubora mmoja. Wanunuzi wakubwa kama viwanda vya usindikaji, wasagaji, shule, maduka makubwa na wasafirishaji nje wanataka kiasi cha kudumu cha ubora mmoja, kinacholetwa kwa wakati. Kikundi kinachoweza kujaza lori kwa mazao safi, makavu na yaliyopangwa kwa daraja kinaweza kuwauzia na kupata zaidi kuliko kuuza shambani.",
            "Endesha kituo au siku ya kukusanya kwa sheria wazi: ubora anaoutaka mnunuzi (kwa mfano mahindi makavu, safi, yaliyochaguliwa, yasiyozidi unyevu wa juu unaokubaliwa na mnunuzi), mizani inayoaminika, na kumbukumbu ya kila mzigo unaoletwa. Kagua na panga kwa daraja mazao ya kila mwanachama, yapime mbele yake, yaandike kwenye daftari la mazao yaliyoletwa na umpe risiti. Hifadhi shehena kwa usalama hadi mnunuzi aichukue.",
            "Walipe wanachama kulingana na kumbukumbu: uzito mara bei iliyokubaliwa kwa daraja lao, ukiondoa ada yoyote ya kikundi iliyokubaliwa kwa usafiri, uhifadhi au magunia, yote yakiwa yameamuliwa mapema na kuandikwa kwenye masharti au kumbukumbu za mkutano. Lipa kwa wakati, kupitia pesa za simu au benki inapowezekana. Malipo ya haraka, ya haki na yaliyo wazi ndiyo kinga bora dhidi ya kuuza pembeni."
          ],
          steps: ["Kubalianeni sheria za ubora za mnunuzi na waambieni wanachama wote mapema.", "Pangeni siku ya kukusanya, mahali na mizani inayoaminika.", "Kagueni, pangeni kwa daraja na pimeni kila mzigo mbele ya mwanachama.", "Andikeni kwenye daftari la mazao yaliyoletwa; toeni risiti.", "Hifadhini shehena kwa usalama; peleka kwa mnunuzi pamoja.", "Mlipeni kila mwanachama kulingana na kumbukumbu, ukiondoa ada zilizokubaliwa, kwa wakati."],
          words: [["Kukusanya mazao", "kukusanya kiasi kidogo kingi kuwa shehena moja kubwa."], ["Kituo cha kukusanya", "mahali ambapo wanachama huleta mazao yakaguliwe na kuandikwa."], ["Shehena", "fungu moja la mazao ya aina moja na daraja moja."]],
          slides: [
            { title: "Kwa nini kukusanya", bullets: ["Wanunuzi wakubwa wanataka kiasi, ubora, wakati", "Jaza lori kwa daraja moja", "Bei bora kuliko kuuza shambani"] },
            { title: "Siku ya kukusanya", bullets: ["Sheria za ubora za mnunuzi zinajulikana mapema", "Panga daraja na pima mbele ya mwanachama", "Andika na toa risiti"] },
            { title: "Lipa kwa haki na haraka", bullets: ["Uzito x bei ya daraja", "Ondoa ada zilizokubaliwa mapema", "Kwa wakati, kwa pesa za simu au benki"] }
          ],
          tryIt: "Panga siku moja ya kukusanya kwa kikundi chako: tarehe, mahali, mizani, sheria za ubora za mnunuzi, nani anaandika, na ada ya kikundi kwa kila gunia au kilo iliyokubaliwa mapema. Andika wanachama watalipwa vipi na lini.",
          youCanNow: "kuendesha siku ya kukusanya iliyo ya haki na kuwalipa wanachama kulingana na kumbukumbu zilizo wazi.",
          quickCheck: [
            { objective: "O4", q: "Kituo au siku ya kukusanya ni nini?", options: ["Sherehe ya wanachama", "Tawi la benki", "Ofisi ya mnunuzi", "Mahali na siku ambapo wanachama huleta mazao yakaguliwe, yapimwe na kuandikwa"], answer: 3, why: "Katika kituo cha kukusanya, mazao yanakaguliwa, yanapangwa kwa daraja, yanapimwa, yanaandikwa na kuhifadhiwa hadi mnunuzi ayachukue." },
            { objective: "O4", q: "Mahindi ya mwanachama yana unyevu zaidi kuliko anavyokubali mnunuzi. Unafanya nini kwenye kituo cha kukusanya?", options: ["Kuyachanganya na mahindi makavu ili mtu asigundue", "Kumlipa mwanachama mara mbili", "Kutoyaongeza kwenye shehena hadi yakaushwe kufikia kiwango cha mnunuzi", "Kuyaficha chini ya lori"], answer: 2, why: "Shehena lazima ifikie ubora wa mnunuzi, kwa hiyo mazao yanakaguliwa na kupangwa kwa daraja kabla ya kukubaliwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua bei za soko kwa simu",
          minutes: 5,
          goal: "Pata bei kutoka angalau vyanzo vitatu na ukokotoe ofa ina thamani gani hasa ikiwa shambani kwako.",
          text: [
            "Usiuze kamwe bila kujua bei. Uliza angalau wanunuzi watatu, sikiliza taarifa za soko redioni, na kagua huduma rasmi za taarifa za masoko. Nchini Kenya, mfumo wa KAMIS wa Wizara ya Kilimo unachapisha bei za jumla, za rejareja na za shambani kwa mazao na mifugo mingi kutoka masoko ya kaunti mbalimbali. Nchini Nigeria na Ghana, uliza ofisi yako ya ugani, chama cha wazalishaji wa zao lako au muungano wa vyama vya ushirika ni huduma ipi ya bei inayohusu zao lako.",
            "Linganisha vitu vinavyofanana: bei kwa kilo au kwa gunia la daraja moja, mahali pamoja. Bei ya juu katika soko la mbali inaweza kuwa na thamani ndogo baada ya usafiri, kupakia, ada za soko na hasara. Kokotoa bei ikiwa shambani kwako: bei ya soko ukiondoa gharama zote za kuyafikisha huko.",
            "Simu inasaidia. Weka daftari rahisi la bei kila wiki, lishiriki kwenye WhatsApp ya kikundi, na tumia kikokotoo au msaidizi wa AI kulinganisha ofa. Jihadhari na ulaghai: mtu yeyote anayekuomba ulipe ada ili upate bei ya juu \"iliyohakikishwa\", au anayeomba PIN yako ya pesa za simu, si mnunuzi halisi."
          ],
          steps: ["Pata bei kutoka angalau vyanzo vitatu: wanunuzi, redio, huduma rasmi.", "Hakikisha kila bei ni ya zao, daraja na kipimo kimoja.", "Ondoa usafiri, kupakia, ada na hasara ili upate bei ya shambani.", "Andika bei kila wiki na uzishiriki na kikundi.", "Mpuuze yeyote anayeomba ada au PIN ili akupatie bei."],
          words: [["Bei ya shambani", "bei anayokulipa mnunuzi ukiwa shambani kwako."], ["Bei ya jumla", "bei ya kiasi kikubwa kinachouzwa kwa wafanyabiashara au maduka."], ["Huduma ya taarifa za masoko", "huduma inayochapisha bei za sasa za masoko."]],
          slides: [
            { title: "Angalau vyanzo vitatu", bullets: ["Wanunuzi kadhaa", "Taarifa za soko redioni", "Huduma rasmi (Kenya: KAMIS)"] },
            { title: "Linganisha vinavyofanana", bullets: ["Zao, daraja na kipimo kimoja", "Bei ya soko ukiondoa usafiri na ada", "= thamani yake shambani kwako"] },
            { title: "Tumia simu kwa busara", bullets: ["Daftari la bei la kila wiki; shiriki na kikundi", "Kikokotoo au AI kulinganisha ofa", "Wanunuzi halisi hawaombi ada wala PIN"] }
          ],
          sources: [KAMIS],
          tryIt: "Wiki hii, pata bei ya zao moja kutoka vyanzo vitatu na uziandike kwenye jedwali: chanzo, bei, daraja, kipimo, mahali. Kokotoa bei ikiwa shambani kwako kwa ofa mbili bora baada ya gharama za usafiri. Ofa ipi inalipa zaidi hasa?",
          youCanNow: "kukagua bei kutoka vyanzo kadhaa na kukokotoa ofa ipi inalipa zaidi hasa.",
          quickCheck: [
            { objective: "O5", q: "\"Linganisha vinavyofanana\" inamaanisha nini kwa bei?", options: ["Linganisha bei kwa kilo au gunia la daraja moja mahali pamoja", "Linganisha bei za juu kabisa tu", "Linganisha mwaka huu na miaka kumi iliyopita", "Linganisha mahindi na nyanya"], answer: 0, why: "Bei zinalinganishwa kwa haki tu zikiwa za daraja, kipimo na mahali pamoja." },
            { objective: "O5", q: "Kikundi chako kinataka kufuatilia bei kila wiki. Unafanya nini?", options: ["Kumuuliza mfanyabiashara mmoja mara moja kwa msimu", "Kuweka daftari rahisi la bei la kila wiki na kulishiriki kwenye WhatsApp ya kikundi", "Kukisia kutoka mwaka jana", "Kusubiri mnunuzi akuambie"], answer: 1, why: "Daftari la bei la kila wiki linaloshirikiwa kwenye kikundi linawasaidia wanachama kujua bei kabla ya kuuza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mikataba na wanunuzi",
          minutes: 6,
          goal: "Soma mkataba wa mnunuzi na ukague masharti muhimu kabla kikundi hakijasaini.",
          text: [
            "Mkataba ni makubaliano yaliyoandikwa kati ya kikundi na mnunuzi. Mkataba mzuri unatoa soko la uhakika na bei inayojulikana; mbaya unaweza kukiacha kikundi na mazao ambayo hakuna anayeyachukua, au pesa ambazo hazifiki kamwe. Hakikisha kila mpango umeandikwa, hata na mnunuzi unayemjua.",
            "Kagua masharti haya: zao gani na daraja gani; kiasi gani na lini; bei, au jinsi itakavyowekwa hasa (kwa mfano bei ya soko siku ya kuwasilisha ikiongezwa au kupunguzwa kiasi fulani); mahali pa kuwasilisha na nani analipa usafiri; jinsi ubora unavyokaguliwa na kinachotokea kwa mazao yanayokataliwa; malipo yanafanywa lini na kwa njia gani; kinachotokea mavuno yakishindwa au mnunuzi asipokuja kuchukua; na jinsi migogoro inavyotatuliwa.",
            "Sehemu yoyote isipokuwa wazi, mwombe mnunuzi aieleze kwa maandishi. Usomeni kwa sauti katika mkutano wa wanachama ili kila mtu aelewe wajibu wake, ikiwemo kutouza pembeni. Omba ofisi yako ya ushirika, afisa ugani au wakili akague mikataba mikubwa. Msaidizi wa AI anaweza kueleza maneno magumu kwa lugha rahisi, lakini usiandike kamwe taarifa za benki za kikundi au PIN ndani yake, na hachukui nafasi ya ushauri wa kisheria."
          ],
          steps: ["Pata ofa kwa maandishi.", "Kagua zao, daraja, kiasi na tarehe.", "Kagua bei au jinsi inavyowekwa, mahali pa kuwasilisha na nani analipa usafiri.", "Kagua ukaguzi wa ubora, sheria za kukataa, tarehe na njia ya malipo.", "Kagua kinachotokea mavuno yakishindwa au mnunuzi asipochukua, na jinsi migogoro inavyotatuliwa.", "Wasomee wanachama; mikataba mikubwa ikaguliwe kabla ya kusaini."],
          words: [["Mkataba", "makubaliano yaliyoandikwa ambayo pande zote mbili lazima ziyatimize."], ["Kukataliwa", "mnunuzi anapokataa mazao yasiyofikia ubora uliokubaliwa."], ["Mgogoro", "kutokubaliana kati ya kikundi na mnunuzi."]],
          slides: [
            { title: "Kila wakati kwa maandishi", bullets: ["Hata na mnunuzi unayemjua", "Soko la uhakika na bei inayojulikana", "Masharti mabaya yanaweza kugharimu kikundi kizima"] },
            { title: "Kagua masharti", bullets: ["Zao, daraja, kiasi, tarehe", "Bei au jinsi inavyowekwa; uwasilishaji na usafiri", "Ukaguzi wa ubora, kukataliwa, tarehe na njia ya malipo"] },
            { title: "Mambo yakienda vibaya", bullets: ["Mavuno yakishindwa au mnunuzi asipochukua", "Jinsi migogoro inavyotatuliwa", "Mwombe mnunuzi aeleze kwa maandishi"] },
            { title: "Kabla ya kusaini", bullets: ["Wasomee wanachama kwa sauti", "Mikataba mikubwa: ofisi ya ushirika, afisa ugani au wakili", "AI inaweza kueleza maneno; hakuna taarifa za benki wala PIN"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa kuuza kama kikundi kwa zao moja. Weka lengo la kikundi, sheria tano za masharti, mahali ungesajili, kumbukumbu zenu, jinsi wanachama wanavyoleta mazao na kulipwa, bei kutoka vyanzo vitatu, na masharti ya mkataba utakayokagua kabla ya kusaini.",
          youCanNow: "kusoma mkataba wa mnunuzi, kukagua masharti yake muhimu, na kupanga jinsi kikundi chako kitakavyouza pamoja.",
          quickCheck: [
            { objective: "O6", q: "Mkataba wa mnunuzi ni nini?", options: ["Risiti ya gunia moja", "Ujumbe wa WhatsApp wa kusalimia", "Makubaliano yaliyoandikwa kati ya kikundi na mnunuzi", "Mkopo kutoka benki"], answer: 2, why: "Mkataba ni makubaliano yaliyoandikwa yanayoeleza kile ambacho pande zote mbili zitafanya." },
            { objective: "O6", q: "Wanachama hawaelewi masharti ya ubora ya mkataba. Unafanya nini kabla ya kusaini?", options: ["Kusaini haraka kabla mnunuzi hajaondoka", "Kumwacha mwenyekiti asaini peke yake", "Kupuuza masharti ya ubora", "Kumwomba mnunuzi aeleze kwa maandishi na kuusoma kwa sauti katika mkutano wa wanachama"], answer: 3, why: "Sehemu zisizo wazi zinaelezwa kwa maandishi na kusomwa kwa sauti ili kila mwanachama aelewe wajibu wake." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufikia soko pamoja",
        questions: [
          { objective: "O4", q: "Kwa nini wanunuzi wakubwa wanapendelea kununua kutoka kwa vikundi?", options: ["Vikundi huuza kwa bei rahisi kabisa kila wakati", "Vikundi vinaweza kuleta shehena kubwa za ubora mmoja kwa wakati", "Vikundi havihitaji ubora", "Wanunuzi wanalazimishwa na sheria"], answer: 1, why: "Kukusanya mazao kunatoa kiasi na ubora wa kudumu ambao wanunuzi wakubwa wanahitaji." },
          { objective: "O4", q: "Katika kituo cha kukusanya, mazao ya mwanachama yapimwe lini?", options: ["Mbele ya mwanachama, kisha yaandikwe na kutolewa risiti", "Kwa siri usiku", "Baada ya mnunuzi kulipa tu", "Kamwe; kadirieni tu"], answer: 0, why: "Kupima waziwazi na risiti kunajenga uaminifu na kuthibitisha sehemu ya kila mwanachama." },
          { objective: "O5", q: "Soko la mbali linalipa asilimia 10 zaidi, lakini usafiri na ada zinagharimu asilimia 15. Kipi ni kweli?", options: ["Soko la mbali linalipa zaidi", "Yote mawili yanalipa sawa", "Gharama za usafiri hazijalishi", "Soko la mbali linalipa kidogo zaidi ikiwa shambani kwako"], answer: 3, why: "Baada ya gharama, bei ya shambani kutoka soko la mbali iko chini zaidi." },
          { objective: "O5", q: "Nchini Kenya, huduma ipi rasmi inachapisha bei za soko za mazao na mifugo?", options: ["KAMIS", "KEBS", "KRA", "KMD"], answer: 0, why: "KAMIS, inayoendeshwa na Wizara ya Kilimo, inachapisha bei za soko." },
          { objective: "O6", q: "Sharti lipi la mkataba linakuambia kinachotokea mnunuzi asipochukua mazao?", options: ["Jina la kikundi", "Tarehe ya mkutano", "Masharti ya kushindwa kuchukua au kuwasilisha", "Rangi ya magunia"], answer: 2, why: "Mikataba inapaswa kusema kinachotokea upande wowote ukishindwa kutimiza mpango." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Vyama vya Ushirika vya Wakulima na Kufikia Soko",
    questions: [
      { objective: "O1", q: "Ipi ni faida ya kikundi cha wakulima?", options: ["Kulipa zaidi kwa pembejeo", "Kununua pembejeo kwa wingi kwa bei nafuu", "Kuuza peke yako shambani", "Kutoweka kumbukumbu"], answer: 1, why: "Kununua kwa wingi kunapunguza gharama za pembejeo." },
      { objective: "O1", q: "Kulingana na International Cooperative Alliance, wanachama wa chama cha ushirika:", options: ["Wanakimiliki na kukisimamia kidemokrasia", "Wanafanya kazi kwa mmiliki binafsi", "Hawana kura", "Lazima wote wawe wafanyakazi wa serikali"], answer: 0, why: "Chama cha ushirika kinamilikiwa kwa pamoja na kusimamiwa kidemokrasia." },
      { objective: "O1", q: "Ipi ni sababu ya kawaida ya vikundi vya wakulima kushindwa?", options: ["Kumbukumbu zilizo wazi", "Malipo kwa wakati", "Kutoaminiana na kumbukumbu mbaya", "Mikutano iliyo wazi"], answer: 2, why: "Kutoaminiana na kumbukumbu mbaya huvunja vikundi." },
      { objective: "O2", q: "Masharti (by-laws) ni nini?", options: ["Mikopo ya benki", "Bei za soko", "Mikataba ya wanunuzi", "Sheria zilizoandikwa za kikundi"], answer: 3, why: "Masharti yanaeleza jinsi kikundi kinavyofanya kazi." },
      { objective: "O2", q: "\"Mwanachama mmoja, kura moja\" inamaanisha:", options: ["Wanachama wenye hisa nyingi wanapata kura zaidi", "Viongozi tu ndio wanapiga kura", "Kila mwanachama ana kura moja", "Kura zinanunuliwa"], answer: 2, why: "Vyama vya ushirika vinampa kila mwanachama kura moja." },
      { objective: "O2", q: "Nchini Kenya, vyama vya ushirika vinasajiliwa chini ya Sheria ya Vyama vya Ushirika kupitia:", options: ["Kamishna wa Maendeleo ya Ushirika", "Shirika la Huduma kwa Wanyamapori la Kenya (Kenya Wildlife Service)", "Mnunuzi binafsi", "Idara ya hali ya hewa"], answer: 0, why: "Kamishna anasajili vyama, kuanzia ofisi ya ushirika ya kaunti." },
      { objective: "O2", q: "Nchini Ghana, vikundi vya ushirika vinasajiliwa wapi?", options: ["Mamlaka ya hali ya hewa", "Kituo cha redio", "Duka lolote", "Idara ya Ushirika (ofisi ya wilaya)"], answer: 3, why: "Idara ya Ushirika ya Ghana (Department of Co-operatives) inasajili na kusimamia vyama." },
      { objective: "O2", q: "Kabla ya kuomba usajili, unapaswa:", options: ["Kukisia ada", "Kukagua fomu, ada na hatua za sasa na ofisi ya ushirika", "Kunakili sheria za nchi nyingine", "Kuacha masharti"], answer: 1, why: "Sheria na ada hubadilika, kwa hiyo kagua na ofisi." },
      { objective: "O3", q: "Kumbukumbu za mkutano zinaandika:", options: ["Muda kila mtu alipofika tu", "Bei za soko", "PIN za wanachama", "Nani alikuja, nini kiliamuliwa na nani anafanya nini kufikia lini"], answer: 3, why: "Kumbukumbu za mkutano ni maandishi ya maamuzi na hatua." },
      { objective: "O3", q: "Ipi ni moja ya kumbukumbu nne za msingi za kikundi?", options: ["Daftari la mazao yaliyoletwa", "Shajara ya hali ya hewa", "Orodha ya PIN za simu za wanunuzi", "Albamu ya picha"], answer: 0, why: "Daftari la mazao yaliyoletwa linaonyesha kila mwanachama alileta nini." },
      { objective: "O3", q: "Kwa nini akaunti ya kikundi iwe na watia sahihi wawili?", options: ["Ili kuchelewesha malipo yote", "Ili mtu mmoja asiweze kutoa pesa peke yake", "Kwa sababu benki zinatoza kidogo", "Ili wanachama wasione hesabu kamwe"], answer: 1, why: "Waidhinishaji wawili wanalinda pesa za kikundi." },
      { objective: "O3", q: "Sheria ya Vyama vya Ushirika ya Nigeria inataka hesabu za chama kilichosajiliwa:", options: ["Zifichwe", "Zichomwe kila mwaka", "Zikaguliwe kila mwaka", "Zihifadhiwe kichwani tu"], answer: 2, why: "Sheria inataka ukaguzi mwishoni mwa kila mwaka wa fedha." },
      { objective: "O4", q: "Kukusanya mazao (aggregation) kunamaanisha:", options: ["Kuuza gunia moja kwa wakati", "Kugawanya kikundi", "Kupandisha bei peke yako", "Kukusanya mazao ya wanachama wengi kuwa shehena moja kubwa"], answer: 3, why: "Kukusanya kunaunganisha kiasi kidogo kwa ajili ya wanunuzi wakubwa." },
      { objective: "O4", q: "Wanachama walipwe vipi baada ya kikundi kuuza?", options: ["Kulingana na kumbukumbu: uzito x bei ya daraja, ukiondoa ada zilizokubaliwa", "Sawa kwa wote, hata kama walileta kiasi gani", "Viongozi tu ndio wanalipwa", "Wakati wowote mweka hazina anapotaka"], answer: 0, why: "Malipo ya haki yaliyoandikwa yanadumisha uaminifu na kupunguza kuuza pembeni." },
      { objective: "O4", q: "Kinga bora dhidi ya kuuza pembeni ni:", options: ["Bei za siri", "Malipo yanayochelewa", "Malipo ya haraka, ya haki na yaliyo wazi", "Kutokuwa na mikataba"], answer: 2, why: "Wanachama wanabaki waaminifu kikundi kinapolipa vizuri na kwa wakati." },
      { objective: "O5", q: "Unapaswa kukagua vyanzo vingapi vya bei kabla ya kuuza?", options: ["Hakuna", "Mnunuzi mmoja tu", "Redio tu", "Angalau vitatu"], answer: 3, why: "Vyanzo kadhaa vinaonyesha bei halisi ya soko." },
      { objective: "O5", q: "Mtu anaahidi bei ya juu iliyohakikishwa ukilipa ada kwanza na kumpa PIN yako ya pesa za simu. Huu ni:", options: ["Mnunuzi wa kawaida", "Huenda ni ulaghai", "Sheria ya ushirika", "Huduma ya serikali"], answer: 1, why: "Wanunuzi halisi hawaombi ada wala PIN." },
      { objective: "O5", q: "Bei ya shambani ya ofa ni:", options: ["Bei ya soko ukiondoa usafiri, ada na hasara", "Bei ya juu kabisa uliyosikia", "Bei katika mji mkuu", "Bei ya rejareja"], answer: 0, why: "Kinachojalisha ni kile unachopokea hasa ukiwa shambani." },
      { objective: "O6", q: "Kipi kinapaswa kuandikwa katika mkataba wa mnunuzi?", options: ["Jina la mnunuzi tu", "Bei au jinsi inavyowekwa, kiasi, ubora, masharti ya uwasilishaji na malipo", "PIN za benki za wanachama", "Hakuna; kupeana mikono kunatosha"], answer: 1, why: "Masharti haya yanalinda kikundi jambo lolote likienda vibaya." },
      { objective: "O6", q: "Unatumia msaidizi wa AI kuelewa mkataba. Kipi ni salama?", options: ["Kuandika taarifa za benki za kikundi na PIN", "Kusaini chochote inachosema ni sawa", "Kuiomba ieleze maneno magumu, kisha mikataba mikubwa ikaguliwe na mshauri", "Kuiacha isaini kwa niaba yako"], answer: 2, why: "AI inaweza kueleza maneno lakini haichukui nafasi ya ushauri wa kisheria, na taarifa binafsi zinabaki siri." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      3,
      7,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      {
        name: "Lengo na masharti",
        objective: "O2",
        notYet: "Hakuna lengo lililo wazi, au sheria chini ya tano.",
        meets: "Jina la kikundi, lengo na sheria tano muhimu za masharti, kama uanachama, kupiga kura, pesa na nidhamu.",
        exceeds: "Sheria pia zinahusu kuuza pembeni na jinsi ziada yoyote inavyogawanywa."
      },
      {
        name: "Usajili",
        objective: "O2",
        notYet: "Hakuna ofisi ya usajili iliyotajwa.",
        meets: "Inataja ofisi ambapo kikundi kingesajiliwa na kile kinachopaswa kukaguliwa huko.",
        exceeds: "Amepiga simu au ametembelea ofisi na ameandika hatua za sasa na tarehe."
      },
      {
        name: "Kumbukumbu na pesa",
        objective: "O3",
        notYet: "Kumbukumbu hazipo, au mtu mmoja anasimamia pesa.",
        meets: "Rejista ya wanachama, daftari la fedha, daftari la mazao yaliyoletwa na kumbukumbu ya malipo, na watu wawili wakiidhinisha malipo.",
        exceeds: "Inaeleza jinsi hesabu zitakavyosomwa kwa wanachama na kukaguliwa kila mwaka."
      },
      {
        name: "Kuleta mazao, madaraja na malipo",
        objective: "O4",
        notYet: "Hakuna sheria za kukusanya wala za malipo.",
        meets: "Jinsi wanachama wanavyoleta mazao, jinsi yanavyopangwa kwa daraja na kupimwa mbele yao, na jinsi na lini wanavyolipwa.",
        exceeds: "Ada za kikundi zilizokubaliwa na tarehe za malipo zimeandikwa mapema."
      },
      {
        name: "Bei",
        objective: "O5",
        notYet: "Vyanzo vya bei chini ya vitatu, au hakuna ukokotoaji wa bei ya shambani.",
        meets: "Bei kutoka angalau vyanzo vitatu, zikilinganishwa kwa vinavyofanana, na bei ya shambani imekokotolewa.",
        exceeds: "Ina daftari la bei la kila wiki kwa wiki kadhaa."
      },
      {
        name: "Masharti ya mkataba",
        objective: "O6",
        notYet: "Masharti chini ya sita, au masharti muhimu kama malipo hayapo.",
        meets: "Masharti sita ya mkataba ya kukagua, ikiwemo bei, ubora, uwasilishaji, malipo na kushindwa kuchukua.",
        exceeds: "Inamtaja atakayekagua mikataba mikubwa, kama ofisi ya ushirika au wakili."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa mpango wa kuuza kama kikundi",
      "Vikundi vinavyoripoti kuandika masharti, kuweka kumbukumbu au kusajili ndani ya siku 90 (utafiti wa kufuatilia)",
      "Vikundi vinavyoripoti mauzo ya kikundi yenye mkataba ulioandikwa, na bei ikilinganishwa na kuuza peke yao",
      "Wanafunzi wanaoripoti kuepuka ulaghai wa ada ili kupata bei au wa kuomba PIN"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, au vitabu vya kumbukumbu vya kikundi",
      "Simu ya kawaida kwa bei, SMS au WhatsApp na kikokotoo",
      "Masharti ya mfano kutoka ofisi ya ushirika na mfano wa mkataba wa mnunuzi, kama vinapatikana",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda na kikundi kuandika mpango wa kuuza"
    ],
    facilitatorNotes: [
      "Endesha kozi na kikundi halisi au kinachoanzishwa: fanyeni jaribio la awali pamoja, kisha fanyeni mkutano mfupi wa mazoezi wenye ajenda na kumbukumbu za mkutano.",
      "Mwalike afisa wa ushirika aeleze usajili; kagua ada na hatua za sasa kabla ya kipindi.",
      "Fanyeni mazoezi ya siku ya kukusanya kwa mizani, kupanga madaraja na daftari la mazao yaliyoletwa.",
      "Usiwaombe kamwe wanachama kushiriki PIN au taarifa za benki; tumia vishika-nafasi katika mifano ya kumbukumbu.",
      "Pima mpango wa kuuza kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
