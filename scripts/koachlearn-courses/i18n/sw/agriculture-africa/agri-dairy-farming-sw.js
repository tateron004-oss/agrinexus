"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-dairy-farming.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const ILRI_MANUAL = { name: "ILRI: Kitabu cha mafunzo kwa wafugaji wadogo wa ng'ombe wa maziwa (Goopy na Gakige, ILRI Manual 24, toleo la 2, 2019)", url: "https://hdl.handle.net/10568/77004" };
const FAO_PRESERVE = { name: "FAO Uzalishaji na bidhaa za maziwa: kuhifadhi maziwa (yapoze hadi 4 °C ndani ya saa 3 hadi 4 baada ya kukamua)", url: "https://www.fao.org/dairy-production-products/processing/milk-preservation/en" };
const FAO_TESTING = { name: "FAO Uzalishaji na bidhaa za maziwa: ubora wa maziwa na upimaji", url: "https://www.fao.org/dairy-production-products/products/quality-and-testing/en" };
const FAO_HEALTH = { name: "FAO Uzalishaji na bidhaa za maziwa: afya ya wanyama (ugonjwa wa kiwele hupunguza wingi na ubora wa maziwa)", url: "https://www.fao.org/dairy-production-products/production/animal-health/en" };
const MU_CMT = { name: "University of Missouri Extension: Kutumia California Mastitis Test (utaratibu na jinsi ya kusoma matokeo)", url: "https://extension.missouri.edu/publications/g3653" };
const KDB = { name: "Kenya Dairy Board (Bodi ya Maziwa ya Kenya: inasimamia sekta ya maziwa; vibali kwa wanaoshughulikia maziwa)", url: "https://www.kdb.go.ke/" };
const KDB_PERMITS = { name: "Kenya Dairy Board: masharti ya leseni", url: "https://www.kdb.go.ke/licensing-requirement/" };

module.exports = {
  id: "agri-dairy-farming-sw",
  lang: "sw",
  translationOf: "agri-dairy-farming",
  category: "Agriculture (Africa)",
  name: "Ufugaji wa Ng'ombe wa Maziwa: Uzalishaji na Usafi wa Maziwa",
  skills: "Kuchagua ng'ombe na mbuzi wa maziwa, Kujenga banda la zero-grazing, Kukamua kwa usafi, Kutambua na kupima ugonjwa wa kiwele (mastitis), Kupoza na kuuza maziwa bora, Kulea ndama na kukokotoa gharama kwa lita",
  outcome: "kuendesha shamba dogo la maziwa linalozalisha maziwa safi ambayo mnunuzi anayakubali: kuchagua na kuwajengea banda ng'ombe au mbuzi wako, kuwakamua kwa utaratibu safi, kugundua mapema ugonjwa wa kiwele kwa California Mastitis Test, kupoza na kuuza maziwa yanayofaulu vipimo vya ubora, kulea ndama wenye afya, na kukokotoa kila lita inakugharimu kiasi gani.",
  about: [
    "Kozi hii ni kwa wafugaji wadogo na wanaokua wa ng'ombe wa maziwa, wafanyakazi wa shamba, vijana wajasiriamali wa kilimo na maafisa ugani nchini Kenya, Nigeria, Ghana, Burkina Faso na kote Afrika wanaofuga, au wanaopanga kufuga, ng'ombe au mbuzi wa maziwa. Maziwa safi yanauzwa kwa bei bora, yanakataliwa mara chache, na yanalinda familia; maziwa machafu na ugonjwa wa kiwele uliojificha hula faida yako kimya kimya.",
    "Sura ya 1 inaanzisha shamba la maziwa: kuchagua wanyama, banda la zero-grazing na kulisha kwa ajili ya maziwa, na utaratibu safi wa kukamua. Sura ya 2 inalinda na kuuza maziwa: ugonjwa wa kiwele na California Mastitis Test, kupoza na kuuza kwa chama cha ushirika au kiwanda, na kulea ndama, kumbukumbu na gharama kwa lita. Ulishaji unafundishwa kwa kina katika kozi \"Lishe ya Mifugo na Kuchanganya Chakula kwa Viungo vya Nyumbani\"; hapa unajifunza jinsi chakula kinavyohusiana na maziwa na gharama.",
    "Kozi hii haitoi kamwe vipimo (dozi) vya dawa, chanjo au homoni wala muda wa kusubiri baada ya dawa. Fuata daima daktari wako wa mifugo au afisa wa afya ya mifugo na maelekezo kwenye lebo ya dawa. Kiasi cha pesa ni mifano tu; tumia bei zako. Kila somo linachukua kama dakika tano na linaisha na kazi kwenye shamba lako. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andaa kurasa mbili kwa shamba lako la maziwa (au la mfano kama ng'ombe 3 huko Kiambu au mbuzi 10 wa maziwa karibu na Kumasi). Ukurasa 1, utaratibu wa usafi wa kukamua wa kubandika mahali pa kukamulia: hatua kuanzia kumwandaa mkamuaji na vyombo hadi kupoza maziwa, dalili za ugonjwa wa kiwele za kuangalia, lini unafanya CMT, na maziwa ya wanyama wagonjwa au waliotibiwa yanafanywa nini. Ukurasa 2, karatasi ya gharama kwa lita kwa mwezi mmoja: kila gharama (chakula na majani, vibarua, daktari wa mifugo na uzalishaji, mengineyo), lita zilizozalishwa, gharama kwa lita, bei anayolipa mnunuzi wako, na badiliko moja utakalofanya kupunguza gharama kwa lita.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafugaji wadogo na wanaokua wa ng'ombe wa maziwa, wafanyakazi wa shamba, vijana wajasiriamali wa kilimo na maafisa ugani nchini Kenya, Nigeria, Ghana, Afrika Magharibi inayozungumza Kifaransa na sehemu nyingine za Afrika, wanaofuga ng'ombe 1 hadi 20 au kundi dogo la mbuzi wa maziwa, mara nyingi kwa zero-grazing au nusu zero-grazing.",
    startingPoint: "Wanaweza kulisha, kunywesha na kukamua wanyama kwa mkono na kuuza maziwa karibu nao. Wengi wanakamua bila utaratibu maalum wa usafi, wanatumia vyombo vya plastiki, wanagundua ugonjwa wa kiwele tu maziwa yanapoonekana mabaya, na hawajui lita moja inawagharimu kiasi gani kuzalisha.",
    gap: "Wanunuzi na vyama vya ushirika hupima maziwa na hukataa au hulipa kidogo kwa maziwa yaliyochacha, yaliyoongezwa maji au yenye mabaki ya dawa. Ugonjwa wa kiwele uliojificha (subclinical) hupunguza maziwa bila dalili zinazoonekana. Wafugaji wanahitaji utaratibu unaozalisha maziwa safi na yaliyopozwa, njia ya kugundua ugonjwa wa kiwele mapema, na kumbukumbu zinazoonyesha kama kila lita inaleta faida.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: simu ya kawaida au simu janja; kikokotoo; kumbukumbu za karatasi zinatosha",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya nyakati za kukamua",
      "Mashamba mengi hayana umeme wala kipozeo cha maziwa",
      "Afya ya wanyama: hakuna vipimo vya dawa, chanjo au homoni wala namba za muda wa kusubiri; fuata daktari wa mifugo na lebo",
      "Kiasi cha pesa ni mifano; bei, vibali na masharti ya wanunuzi hutofautiana kwa nchi na kwa mnunuzi"
    ],
    prerequisites: "Hakuna. Kozi \"Afya na Utunzaji wa Mifugo\" (ukaguzi wa afya kila siku) na \"Lishe ya Mifugo na Kuchanganya Chakula kwa Viungo vya Nyumbani\" (mgao wa chakula) ni wenzi wazuri."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukizingatia ardhi yako, pesa zako, majani yako na soko lako", action: "kuchagua ng'ombe au mbuzi wa maziwa na kupanga banda la zero-grazing lenye sehemu ya kulala, hori ya chakula, maji na mfereji wa kutolea uchafu", standard: "ukitaja angalau ukaguzi minne uliofanya kabla ya kununua" },
    { id: "O2", condition: "Katika kila ukamuaji", action: "kufuata utaratibu safi wa kukamua kuanzia kumwandaa mkamuaji na vyombo hadi kuchuja na kufunika maziwa", standard: "ukifanya kila hatua kwa mpangilio bila kuruka hatua yoyote" },
    { id: "O3", condition: "Ukipewa ng'ombe au mbuzi anayekamuliwa", action: "kuangalia dalili za ugonjwa wa kiwele na kufanya California Mastitis Test kwa kila chuchu", standard: "ukiandika matokeo ya kila robo au nusu ya kiwele na kumwita daktari wa mifugo kwa mnyama yeyote mwenye matokeo chanya au mgonjwa" },
    { id: "O4", condition: "Baada ya kukamua, ukiwa na kipozeo au bila", action: "kupoza, kuhifadhi na kupeleka maziwa ili yafaulu vipimo vya ubora vya mnunuzi", standard: "yakifika kwenye kipozeo au kwa mnunuzi ndani ya muda anaoweka mnunuzi, bila kuongezwa chochote" },
    { id: "O5", condition: "Ukipewa kumbukumbu za shamba za mwezi mmoja", action: "kukokotoa gharama ya lita moja ya maziwa na kuilinganisha na bei anayolipa mnunuzi wako", standard: "ukijumuisha kila gharama na hesabu ikiwa sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuanzisha shamba safi la maziwa",
      lessons: [
        {
          title: "Kuchagua ng'ombe na mbuzi wa maziwa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua wanyama wa maziwa wanaolingana na chakula chako, pesa zako na soko lako.",
          text: [
            "Mnyama wa maziwa ni mzuri kadiri ya chakula na matunzo unayoweza kumpa. Ng'ombe wa Friesian (Holstein) anayetoa maziwa mengi anahitaji chakula kingi kizuri na maji kila siku; kama huwezi kumpa, chotara na mbegu ya kienyeji, au mbegu ndogo kama Jersey au Ayrshire, huenda ikakuletea zaidi. Katika maeneo makavu, mbegu za kienyeji zilizo imara na chotara zake, kama chotara za zebu kaskazini mwa Nigeria au zebu wa Azawak nchini Niger na Burkina Faso, zinastahimili joto na majani duni vizuri zaidi.",
            "Mbuzi wa maziwa wanafaa vipande vidogo vya ardhi na bajeti ndogo. Wanakula kidogo, wanagharimu kidogo, na maziwa ya mbuzi yana wanunuzi wake. Nchini Kenya, mbuzi wa Saanen, Toggenburg na Alpine na chotara zao na mbuzi wa kienyeji hufugwa kwa ajili ya maziwa.",
            "Kabla ya kununua, jiulize: Una majani na maji mwaka mzima, pamoja na kiangazi? Nani atanunua maziwa yako, na kwa bei gani? Unaweza kumfikia daktari wa mifugo na huduma ya uhamilishaji (AI)? Kisha mkague mnyama: nunua kwa mfugaji anayejulikana mwenye kumbukumbu, tafuta mnyama mwenye afya na mchangamfu, mwenye kiwele chenye umbo zuri na chuchu nne (ng'ombe) au mbili (mbuzi) zinazofanya kazi, uliza kuhusu maziwa aliyotoa zamani, kuzaa na magonjwa, na umwombe daktari wa mifugo au afisa wa afya ya mifugo amkague kabla ya kulipa."
          ],
          steps: ["Orodhesha majani na maji yako kwa msimu wa mvua na kiangazi.", "Tafuta mnunuzi wako na bei kwa lita.", "Tafuta daktari wa mifugo na huduma ya AI walio karibu nawe.", "Chagua mbegu au chotara ambayo chakula chako kinaweza kuilisha.", "Nunua kwa muuzaji anayejulikana mwenye kumbukumbu; kagua kiwele, chuchu na afya.", "Mwombe daktari wa mifugo amkague mnyama kabla ya kulipa."],
          words: [["Mbegu ya maziwa", "aina ya mnyama inayofugwa hasa kwa maziwa, kama ng'ombe wa Friesian, Jersey au Ayrshire, au mbuzi wa Saanen na Toggenburg."], ["Chotara", "mnyama ambaye wazazi wake ni wa mbegu mbili tofauti, mara nyingi mbegu ya kigeni ya maziwa na mbegu ya kienyeji."], ["Uhamilishaji (AI)", "kuweka mbegu ya dume aliyechaguliwa (fahali au beberu) ndani ya jike, kunakofanywa na fundi aliyefunzwa."]],
          slides: [
            { title: "Chakula kinaamua mbegu", bullets: ["Wanaotoa maziwa mengi wanahitaji chakula kingi kizuri na maji", "Chotara na mbegu ndogo zinafaa chakula kidogo", "Mbegu za kienyeji zilizo imara zinastahimili joto na kiangazi"] },
            { title: "Mbuzi wa maziwa", bullets: ["Chakula kidogo, pesa kidogo, nafasi ndogo", "Saanen, Toggenburg, Alpine na chotara", "Tafuta kwanza wanunuzi wa maziwa ya mbuzi"] },
            { title: "Kabla ya kununua", bullets: ["Majani na maji mwaka mzima?", "Mnunuzi na bei kwa lita?", "Daktari wa mifugo na huduma ya AI unaoweza kuwafikia?"] },
            { title: "Mkague mnyama", bullets: ["Muuzaji anayejulikana mwenye kumbukumbu", "Afya, mchangamfu; kiwele kizuri; chuchu zote zinafanya kazi", "Daktari wa mifugo amkague kabla ya kulipa"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Andika orodha yako ya ukaguzi wa kununua: majani na maji yako ya kiangazi, mnunuzi wako na bei, daktari wa mifugo na huduma ya AI walio karibu, mbegu au chotara unayoweza kuilisha, na vitu vitano utakavyomkagua mnyama kabla ya kulipa.",
          youCanNow: "kulinganisha mbegu ya maziwa na chakula chako na soko lako, na kumkagua mnyama vizuri kabla ya kumnunua.",
          quickCheck: [
            { objective: "O1", q: "Una majani kidogo wakati wa kiangazi. Uamuzi upi ni wa busara zaidi?", options: ["Kununua Friesian anayetoa maziwa mengi zaidi unayeweza kupata", "Kununua chotara au mbegu ndogo ambayo chakula chako kinaweza kuilisha", "Kununua ng'ombe wengi zaidi ili baadhi waishi", "Kununua sasa na kupanga majani baadaye"], answer: 1, why: "Ng'ombe anatoa tu kile chakula chake kinachoruhusu; chotara au mbegu ndogo inafaa majani machache." },
            { objective: "O1", q: "Ni ukaguzi upi unapaswa kufanya kabla ya kulipia ng'ombe?", options: ["Kumwomba daktari wa mifugo amkague na kuangalia kumbukumbu zake", "Kuhesabu madoa yake", "Kuangalia rangi yake tu", "Kumuuliza muuzaji kama ni mzuri"], answer: 0, why: "Ukaguzi wa daktari wa mifugo na kumbukumbu zinaonyesha afya, maziwa ya zamani na kuzaa." }
          ]
        },
        {
          title: "Banda la zero-grazing na kulisha kwa ajili ya maziwa",
          objectives: ["O1"],
          minutes: 6,
          goal: "Panga banda la zero-grazing na upange chakula na maji kwa ajili ya maziwa.",
          text: [
            "Katika zero-grazing, wanyama wanakaa bandani na wewe unawaletea chakula, kama majani ya Napier (mabingobingo) yaliyokatwa, majani mengine na mabaki ya mazao. Inaokoa ardhi na inakuwezesha kudhibiti chakula, lakini inahitaji kazi kila siku na usafi mzuri.",
            "Banda zuri lina: paa la kivuli na kuzuia mvua; sehemu ya kulala kwa kila ng'ombe yenye matandiko makavu na laini ili aweze kulala; sakafu yenye mteremko ili mkojo na maji yatoke; hori ya chakula na hori ya maji zilizo rahisi kusafisha; mahali safi na tofauti pa kukamulia; zizi la ndama; shimo la samadi mbali na mahali pa kukamulia; na stoo ya chakula. Kwa mbuzi, sakafu iliyoinuliwa ya mbao zenye nafasi inawaweka wakavu. Ondoa kinyesi kila siku, kwa sababu matandiko machafu ni chanzo kikuu cha ugonjwa wa kiwele.",
            "Maziwa yanatengenezwa kwa chakula na maji. Ng'ombe anayekamuliwa anahitaji maji mengi safi siku nzima, majani mazuri, na nishati, protini na madini ya ziada kwa uwiano; maziwa hupungua haraka maji au chakula vikipungua. Jinsi ya kutengeneza mgao wa chakula kwa vyakula vya kienyeji inafundishwa katika \"Lishe ya Mifugo na Kuchanganya Chakula kwa Viungo vya Nyumbani\". Hapa, kumbuka mambo mawili: andika gharama ya kila chakula, kwa sababu kwa kawaida chakula ndicho gharama yako kubwa zaidi, na badilisha vyakula polepole."
          ],
          steps: ["Weka alama ya banda lenye paa kwenye ardhi inayotoa maji vizuri.", "Mpe kila mnyama sehemu ya kulala yenye matandiko makavu na sakafu yenye mteremko.", "Weka hori za chakula na maji mahali rahisi kujaza na kusafisha.", "Ongeza mahali safi pa kukamulia, zizi la ndama na stoo ya chakula.", "Weka shimo la samadi mbali na mahali pa kukamulia na maji.", "Ondoa kinyesi kila siku; andika chakula ulichonunua na gharama yake."],
          words: [["Zero-grazing", "kufuga wanyama bandani na kuwaletea chakula chao chote badala ya kuwaacha walishe malishoni."], ["Matandiko", "kitu kikavu na laini sakafuni ambapo wanyama hulala, kama vumbi la mbao, majani makavu au mchanga."], ["Majani (chakula cha nyuzi)", "chakula kingi chenye nyuzi kama nyasi, majani ya kulishia, nyasi kavu (hay) na mabaki ya mazao."]],
          slides: [
            { title: "Zero-grazing", bullets: ["Wanyama wanakaa bandani; wewe unaleta chakula", "Inaokoa ardhi; unadhibiti chakula", "Inahitaji kazi na usafi kila siku"] },
            { title: "Banda zuri", bullets: ["Paa; sehemu moja ya kulala kwa kila ng'ombe; matandiko makavu", "Sakafu yenye mteremko inayotoa maji", "Hori za chakula na maji rahisi kusafisha"] },
            { title: "Liweke safi", bullets: ["Mahali safi na tofauti pa kukamulia", "Zizi la ndama; stoo ya chakula", "Shimo la samadi mbali na mahali pa kukamulia; safisha kila siku"] },
            { title: "Chakula kinatengeneza maziwa", bullets: ["Maji mengi safi siku nzima", "Majani pamoja na nishati, protini na madini kwa uwiano", "Andika gharama za chakula; badilisha vyakula polepole"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Chora mchoro rahisi wa banda lako la zero-grazing (au lile utakalojenga): sehemu za kulala, matandiko, mteremko wa sakafu, hori ya chakula, hori ya maji, mahali pa kukamulia, zizi la ndama, stoo ya chakula na shimo la samadi. Weka alama kwenye kitu kimoja utakachorekebisha kwanza.",
          youCanNow: "kupanga banda la zero-grazing linalowaweka wanyama wakavu na safi, na kueleza jinsi chakula na maji vinavyogeuka kuwa maziwa.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini sakafu ya banda la zero-grazing iwe na mteremko?", options: ["Ili ng'ombe ateleze kutoka", "Ili mkojo na maji yatoke na matandiko yabaki makavu", "Kuokoa saruji", "Ili chakula kiviringike kwa ng'ombe"], answer: 1, why: "Sakafu na matandiko makavu huweka kiwele safi na kupunguza ugonjwa wa kiwele." },
            { objective: "O1", q: "Shimo la samadi liwe wapi?", options: ["Karibu na hori ya maji", "Ndani ya mahali pa kukamulia", "Mbali na mahali pa kukamulia na maji", "Chini ya stoo ya chakula"], answer: 2, why: "Samadi karibu na mahali pa kukamulia au maji hueneza uchafu na vijidudu ndani ya maziwa." }
          ]
        },
        {
          title: "Utaratibu safi wa kukamua",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kamua ng'ombe au mbuzi kwa utaratibu safi, hatua kwa hatua.",
          text: [
            "Vijidudu huingia kwenye maziwa kutoka mikono michafu, viwele vichafu, vyombo vichafu na hewa ya banda chafu. Utaratibu maalum, unaofanywa kwa njia ile ile kila ukamuaji, unavizuia. Kamua kwa nyakati zile zile kila siku, mahali safi, kwa utulivu: mnyama aliyeogopa hutoa maziwa kidogo.",
            "Tumia vyombo laini vya chuma (aluminiamu au chuma cha pua) vilivyo rahisi kusafisha. Madumu ya plastiki hukwaruzika na kushika uchafu, na wanunuzi wengi hukataa maziwa yanayoletwa ndani yake. Osha vyombo baada ya kila matumizi kwa maji safi na sabuni, suuza, na uvikaushe vikiwa vimepinduliwa juu ya kichanja juani.",
            "Kamua wanyama wenye afya kwanza na mnyama yeyote mgonjwa au aliyetibiwa mwisho. Weka kando maziwa ya mnyama aliyetibiwa kwa dawa na usiyauze hadi muda wa kusubiri ulioandikwa kwenye lebo ya dawa, au uliotolewa na daktari wako wa mifugo, upite."
          ],
          steps: ["Vaa nguo safi; weka kucha fupi; nawa mikono kwa sabuni.", "Leta vyombo safi na vikavu vya chuma, kikombe cha kukagua (strip cup) na chujio au kichujio safi.", "Mfunge au mtulize mnyama kwa upole mahali safi pa kukamulia.", "Osha chuchu (na kiwele tu kikiwa kichafu) kwa maji safi ya uvuguvugu na uzikaushe kwa kitambaa safi au karatasi tofauti kwa kila mnyama.", "Kamua maziwa ya kwanza ya kila chuchu ndani ya kikombe cha kukagua na uangalie mabonge, vipande au maziwa mepesi kama maji.", "Kamua haraka na kikamilifu kwa mkono mzima, si kwa kuvuta kwa vidole.", "Chovya au nyunyizia chuchu baada ya kukamua kama daktari wako wa mifugo anashauri, na mpe chakula ili mnyama abaki amesimama kwa muda.", "Chuja maziwa, yafunike, na uanze kuyapoza mara moja."],
          words: [["Kikombe cha kukagua (strip cup)", "kikombe chenye bamba au kitambaa cheusi juu; mikamuo ya kwanza ya maziwa huonyesha mabonge au vipande juu yake."], ["Dawa ya kuchovya chuchu", "kimiminika cha kuua vijidudu ambacho chuchu huchovywa ndani yake baada ya kukamua; tumia ile anayopendekeza daktari wako wa mifugo, kama lebo inavyosema."], ["Muda wa kusubiri", "muda baada ya kutoa dawa ambapo maziwa au nyama haipaswi kuuzwa wala kuliwa; umeandikwa kwenye lebo au unatolewa na daktari wa mifugo."]],
          slides: [
            { title: "Vijidudu vinatoka wapi", bullets: ["Mikono na viwele vichafu", "Vyombo vichafu", "Banda chafu lenye vumbi"] },
            { title: "Kabla ya kukamua", bullets: ["Nguo safi, kucha fupi, nawa mikono", "Vyombo safi na vikavu vya chuma", "Osha na kausha chuchu: kitambaa kimoja kwa kila mnyama"] },
            { title: "Wakati wa kukamua", bullets: ["Kikombe cha kukagua: angalia maziwa ya kwanza", "Kamua haraka na kikamilifu, kwa mkono mzima", "Wenye afya kwanza, wagonjwa au waliotibiwa mwisho"] },
            { title: "Baada ya kukamua", bullets: ["Dawa ya kuchovya chuchu kama daktari wa mifugo anashauri", "Chuja, funika na poza maziwa mara moja", "Waliotibiwa: usiuze hadi lebo iruhusu"] }
          ],
          sources: [ILRI_MANUAL, FAO_TESTING],
          tryIt: "Tazama au fanya ukamuaji mmoja kwenye shamba lako na uweke alama kwa kila hatua ya somo hili. Andika kila hatua iliyorukwa na badiliko moja la kufanya kesho, kama kitambaa kimoja cha kukausha kwa kila mnyama au mtungi wa chuma badala ya dumu la plastiki.",
          youCanNow: "kukamua ng'ombe au mbuzi kwa utaratibu safi unaozuia vijidudu visiingie kwenye maziwa.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini ukamue maziwa ya kwanza ndani ya kikombe cha kukagua?", options: ["Kumlisha paka", "Ndiyo maziwa mazito zaidi", "Kuona mabonge au vipande vinavyoonyesha ugonjwa wa kiwele", "Kumtuliza ng'ombe"], answer: 2, why: "Kikombe cha kukagua kinaonyesha maziwa yasiyo ya kawaida mapema, kabla hayajachanganyika na maziwa mazuri." },
            { objective: "O2", q: "Ng'ombe alitibiwa na daktari wa mifugo siku mbili zilizopita. Unafanya nini na maziwa yake?", options: ["Kuyachanganya na mengine; kidogo si tatizo", "Kuyauza kwa mnunuzi mwingine", "Kumpa ndama wake bila kuuliza", "Kuyaweka kando na kutoyauza hadi muda wa kusubiri wa lebo au wa daktari wa mifugo upite"], answer: 3, why: "Mabaki ya dawa hufanya maziwa yasiwe salama na wanunuzi huyapima; lebo au daktari wa mifugo hutoa muda wa kusubiri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuanzisha shamba safi la maziwa",
        questions: [
          { objective: "O1", q: "Ni nini kinapaswa kuamua mbegu ya maziwa utakayonunua?", options: ["Chakula, maji na matunzo unayoweza kumpa mwaka mzima", "Rangi unayoipenda zaidi", "Alichonunua jirani yako", "Mnyama wa bei rahisi zaidi sokoni"], answer: 0, why: "Mnyama wa maziwa anazalisha tu kile chakula na matunzo yake vinachoruhusu." },
          { objective: "O1", q: "Kipi SI sehemu ya banda zuri la zero-grazing?", options: ["Matandiko makavu katika kila sehemu ya kulala", "Sakafu inayotoa maji", "Shimo la samadi karibu na mahali pa kukamulia", "Hori za chakula na maji rahisi kusafisha"], answer: 2, why: "Samadi lazima iwekwe mbali na mahali pa kukamulia ili vijidudu visiingie kwenye maziwa." },
          { objective: "O2", q: "Chombo kipi ni bora kwa maziwa?", options: ["Dumu la plastiki", "Mtungi safi na laini wa aluminiamu au chuma cha pua", "Ndoo ya zamani ya rangi", "Chombo chochote chenye mfuniko"], answer: 1, why: "Chuma laini ni rahisi kusafisha; plastiki hukwaruzika na kushika uchafu." },
          { objective: "O2", q: "Unapaswa kukausha chuchu vipi kabla ya kukamua?", options: ["Kwa taulo moja kwa wanyama wote", "Kuziacha zikiwa na maji", "Kwa nguo zako", "Kwa kitambaa safi au karatasi tofauti kwa kila mnyama"], answer: 3, why: "Taulo la pamoja hubeba vijidudu vya ugonjwa wa kiwele kutoka mnyama mmoja hadi mwingine." },
          { objective: "O2", q: "Unapaswa kuwakamua wanyama wako kwa mpangilio gani?", options: ["Wenye afya kwanza, wagonjwa au waliotibiwa mwisho", "Wagonjwa kwanza", "Mpangilio wowote", "Wadogo kwanza"], answer: 0, why: "Kuwakamua wagonjwa mwisho kunazuia vijidudu kuenea kwenye viwele vyenye afya." }
        ]
      }
    },
    {
      name: "Sura 2: Viwele vyenye afya, maziwa salama na faida",
      lessons: [
        {
          title: "Ugonjwa wa kiwele: dalili, kinga na CMT",
          objectives: ["O3"],
          minutes: 6,
          goal: "Mkague mnyama kwa ugonjwa wa kiwele na ufanye California Mastitis Test.",
          text: [
            "Ugonjwa wa kiwele (mastitis) ni maambukizi na uvimbe wa kiwele. Hupunguza wingi na ubora wa maziwa na ni mojawapo ya magonjwa ya maziwa yanayogharimu zaidi. Ugonjwa wa kiwele unaoonekana (clinical) una dalili: robo ya kiwele yenye joto, iliyovimba au inayouma; maziwa yenye mabonge, vipande, mepesi kama maji au yenye damu; na wakati mwingine homa na kukosa hamu ya kula. Ugonjwa wa kiwele uliojificha (subclinical) hauonyeshi chochote unachoweza kuona, lakini mnyama anatoa maziwa kidogo. Ndiyo maana unapima.",
            "California Mastitis Test (CMT) hugundua ugonjwa wa kiwele uliojificha shambani. Unahitaji kibao chenye vikombe vinne na kimiminika cha CMT (kemikali ya kupimia). Kamua kidogo kutoka kila chuchu ndani ya kikombe chake, ongeza kiasi sawa cha kemikali, zungusha, na usome ndani ya sekunde chache. Maziwa yanayobaki majimaji ni ya kawaida. Ute, ulaini kama kamasi au mabonge yanamaanisha seli nyingi, ambazo zinaashiria ugonjwa wa kiwele katika robo hiyo. Kadiri ute unavyokuwa mzito, ndivyo mwitikio unavyokuwa mkubwa. Usipime katika siku za kwanza baada ya kuzaa, wakati matokeo huwa juu kwa kawaida. Maziwa ya mbuzi yanaweza kuonyesha mwitikio mkubwa zaidi hata yakiwa na afya, kwa hiyo muulize daktari wako wa mifugo jinsi ya kusoma matokeo kwa mbuzi.",
            "Zuia ugonjwa wa kiwele kwa matandiko safi na makavu, utaratibu safi wa kukamua, dawa ya kuchovya chuchu kama daktari wako wa mifugo anashauri, kuwakamua wanyama walioambukizwa mwisho, na kutibu tu kwa ushauri wa daktari wako wa mifugo. Usitoe kamwe antibiotiki peke yako: fuata daktari wa mifugo na lebo. Andika kila tukio na kila matibabu."
          ],
          steps: ["Angalia na papasa: kila robo ya kiwele kama ina joto, uvimbe au maumivu.", "Angalia maziwa ya kwanza kwenye kikombe cha kukagua kama yana mabonge, vipande au damu.", "Kwa CMT: mwaga mikamuo ya kwanza, kisha kamua kidogo kutoka kila chuchu ndani ya kikombe chake.", "Inamisha kibao ili kiasi sahihi kibaki; ongeza kiasi sawa cha kemikali.", "Zungusha taratibu na usome ndani ya sekunde chache: majimaji ni kawaida, ute unamaanisha mwitikio.", "Andika matokeo ya kila robo au nusu ya kiwele.", "Mwite daktari wako wa mifugo kwa ugonjwa wowote unaoonekana au matokeo chanya; fuata daktari wa mifugo na lebo."],
          words: [["Ugonjwa wa kiwele (mastitis)", "maambukizi na uvimbe wa kiwele unaopunguza wingi na ubora wa maziwa."], ["Ugonjwa wa kiwele uliojificha (subclinical mastitis)", "ugonjwa wa kiwele usio na dalili zinazoonekana; ni kipimo kama CMT tu kinachouonyesha."], ["Robo", "mojawapo ya sehemu nne za kiwele cha ng'ombe, kila moja ikiwa na chuchu yake."], ["Kemikali ya kupimia (reagent)", "kimiminika kinachotumiwa katika kipimo kinachoitikia na maziwa."]],
          slides: [
            { title: "Ugonjwa wa kiwele unagharimu pesa", bullets: ["Maambukizi na uvimbe wa kiwele", "Maziwa kidogo, ubora wa chini", "Unaoonekana: unauona. Uliojificha: huuoni"] },
            { title: "Dalili zinazoonekana", bullets: ["Robo yenye joto, iliyovimba au inayouma", "Mabonge, vipande, maziwa mepesi kama maji au yenye damu", "Wakati mwingine homa na kukosa hamu ya kula"] },
            { title: "CMT", bullets: ["Kikombe kimoja kwa kila chuchu; kiasi sawa cha kemikali", "Zungusha na usome ndani ya sekunde chache", "Majimaji = kawaida; ute au kamasi = mwitikio"] },
            { title: "Zuia na uchukue hatua", bullets: ["Matandiko makavu, utaratibu safi, dawa ya chuchu kama umeshauriwa", "Walioambukizwa wakamuliwe mwisho", "Daktari wa mifugo anaamua matibabu; fuata lebo"] }
          ],
          sources: [MU_CMT, FAO_HEALTH],
          tryIt: "Fanya CMT kwa ng'ombe au mbuzi mmoja (azima kibao na kemikali kutoka chama chako cha ushirika, daktari wa mifugo au afisa ugani kama huna). Andika matokeo ya kila robo au nusu ya kiwele kwenye daftari lako, na uandike utakachofanya kuhusu mwitikio wowote.",
          youCanNow: "kutambua dalili za ugonjwa wa kiwele, kufanya CMT kwa kila chuchu, kuandika matokeo na kujua lini kumwita daktari wa mifugo.",
          quickCheck: [
            { objective: "O3", q: "Maziwa ya ng'ombe wako yanaonekana kawaida, lakini maziwa yake yamepungua. Nini kinaweza kugundua ugonjwa wa kiwele uliojificha?", options: ["Kusubiri hadi maziwa yaonyeshe mabonge", "California Mastitis Test", "Kumpa chumvi zaidi", "Kunusa maziwa"], answer: 1, why: "Ugonjwa wa kiwele uliojificha hauna dalili zinazoonekana; CMT inauonyesha." },
            { objective: "O3", q: "Katika CMT, kikombe kimoja kinageuka kuwa ute mzito. Hii inamaanisha nini?", options: ["Kipimo kimefanywa sawa na robo hiyo ina afya", "Uliweka maziwa kidogo mno", "Maziwa ni mazito zaidi", "Mwitikio mkubwa katika robo hiyo; andika na umwite daktari wa mifugo"], answer: 3, why: "Ute unamaanisha seli nyingi, dalili ya ugonjwa wa kiwele katika robo hiyo." }
          ]
        },
        {
          title: "Kupoza, kushughulikia na kuuza maziwa",
          objectives: ["O4"],
          minutes: 6,
          goal: "Poza na upeleke maziwa yanayofaulu vipimo vya ubora vya mnunuzi.",
          text: [
            "Maziwa mabichi yana kinga ya asili inayozuia vijidudu kwa muda wa kama saa tatu hadi nne tu baada ya kukamua. FAO inashauri kuyapoza hadi 4 °C ndani ya muda huo ili kuhifadhi ubora wake. Bila kipozeo, simamisha mtungi wa chuma uliofunikwa ndani ya maji baridi na safi yanayotiririka au yaliyohifadhiwa, kivulini, na upeleke maziwa haraka kwenye kipozeo cha kituo cha kukusanya. Usiache kamwe maziwa juani.",
            "Wafugaji wadogo wengi huuza kwa chama cha ushirika cha maziwa, kituo cha kukusanya maziwa, kiwanda cha kusindika, au kiwanda kidogo cha maziwa (kwa mfano, viwanda vidogo vya maziwa nchini Burkina Faso hununua maziwa kutoka kwa wachungaji na wakulima). Unapopeleka, mnunuzi anapima maziwa yako. Vipimo vya kawaida ni: kuangalia na kunusa; kipimo cha alkoholi na kipimo cha kuchemsha (kuona kama yanaganda), vinavyoonyesha maziwa yanayoanza kuchacha; laktomita, inayoonyesha maziwa yaliyoongezwa maji; na, katika baadhi ya viwanda, kipimo cha mabaki ya dawa. Maziwa yasiyofaulu hukataliwa au hulipwa kidogo.",
            "Usiongeze kamwe maji, unga, dawa za kuhifadhi au kitu kingine chochote kwenye maziwa: ni udanganyifu, mara nyingi ni kinyume cha sheria, na vipimo vinaugundua. Muulize mnunuzi wako analipa vipi (kwa lita, wakati mwingine na nyongeza kwa ubora au mafuta), analipa lini (mara nyingi kila mwezi kupitia benki au pesa kwa simu), na makato gani anayofanya. Soma mkataba wowote wote kabla ya kusaini. Kuuza maziwa mabichi kwa umma kunaweza kuhitaji kibali: nchini Kenya, Kenya Dairy Board hutoa leseni kwa wanaoshughulikia maziwa, kwa hiyo kagua masharti yake au ya mamlaka ya maziwa ya nchi yako."
          ],
          steps: ["Chuja na funika maziwa mara baada ya kukamua.", "Yapoze mara moja: kwenye kipozeo, au mtungi ukiwa umesimama ndani ya maji baridi kivulini.", "Peleka kwenye kituo cha kukusanya au kwa mnunuzi ndani ya muda wanaoweka.", "Tazama vipimo na uombe matokeo.", "Andika lita ulizopeleka, kukataliwa kokote na sababu yake.", "Kagua kila malipo dhidi ya kumbukumbu zako za kupeleka."],
          words: [["Laktomita", "kipimo kinachoelea kinachopima uzito (msongamano) wa maziwa; maji yaliyoongezwa hufanya maziwa kuwa mepesi zaidi."], ["Kipimo cha alkoholi", "kuchanganya maziwa na alkoholi; maziwa yanayoanza kuchacha hutengeneza mabonge."], ["Kituo cha kukusanya maziwa", "mahali ambapo wafugaji hupeleka maziwa ili yapimwe, yapozwe na kupelekwa kiwandani."]],
          slides: [
            { title: "Yapoze haraka", bullets: ["Kinga ya asili hudumu kama saa 3 hadi 4", "FAO: poza hadi 4 °C ndani ya muda huo", "Bila kipozeo: mtungi ndani ya maji baridi, kivulini"] },
            { title: "Vipimo vya mnunuzi", bullets: ["Kuangalia na kunusa", "Alkoholi na kuchemsha: maziwa yanayochacha", "Laktomita: maji yaliyoongezwa; wengine hupima dawa"] },
            { title: "Usiongeze chochote kamwe", bullets: ["Hakuna maji, unga wala dawa za kuhifadhi", "Ni udanganyifu, mara nyingi kinyume cha sheria, na vipimo vinaugundua"] },
            { title: "Kulipwa", bullets: ["Kwa lita; uliza kuhusu nyongeza kwa ubora", "Wanalipa lini na vipi; makato", "Soma mikataba; kagua vibali (Kenya: KDB)"] }
          ],
          sources: [FAO_PRESERVE, FAO_TESTING, KDB, KDB_PERMITS],
          tryIt: "Tembelea au piga simu kwa kituo cha kukusanya maziwa, chama cha ushirika au mnunuzi aliye karibu nawe. Uliza: vipimo gani wanafanya, saa ya mwisho wanayopokea maziwa, wanalipa vipi na lini, na makato gani wanafanya. Andika majibu na uyalinganishe na jinsi unavyoshughulikia maziwa sasa.",
          youCanNow: "kupoza na kushughulikia maziwa ili yahifadhi ubora wake, kueleza vipimo vya mnunuzi, na kukagua jinsi unavyolipwa.",
          quickCheck: [
            { objective: "O4", q: "Huna kipozeo cha maziwa. Ni jambo gani bora la kufanya baada ya kukamua?", options: ["Kusimamisha mtungi wa chuma uliofunikwa ndani ya maji baridi kivulini na kupeleka haraka", "Kuacha maziwa juani ili yabaki ya moto", "Kuongeza maji kidogo ili yabaki mabichi", "Kuyaweka hadi kesho na kupeleka mikamuo yote miwili pamoja"], answer: 0, why: "Kupoza haraka na kupeleka upesi kunazuia vijidudu visizaliane." },
            { objective: "O4", q: "Kipimo cha laktomita katika kituo cha kukusanya kinagundua nini?", options: ["Ugonjwa wa kiwele katika robo moja", "Maziwa yaliyoongezwa maji", "Mbegu ya ng'ombe", "Maziwa yaliyo baridi mno"], answer: 1, why: "Maji yaliyoongezwa hupunguza msongamano wa maziwa, na laktomita inaonyesha hilo." }
          ]
        },
        {
          title: "Kulea ndama, kumbukumbu na gharama kwa lita",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kokotoa gharama yako kwa lita na uweke kumbukumbu zinazohitajika kwa hesabu hiyo.",
          text: [
            "Ndama na wana-mbuzi wako ndio kundi lako la baadaye. Hakikisha mtoto aliyezaliwa anakunywa dang'a (maziwa ya kwanza mazito) haraka iwezekanavyo baada ya kuzaliwa, ikiwezekana ndani ya saa chache za kwanza, kwa sababu yanabeba kinga ya mama dhidi ya magonjwa. Weka ndama katika zizi safi, kavu na tofauti, mpe maji safi, mpe nyasi kavu nzuri au majani laini na chakula cha ndama mapema ili tumbo likue, na umwachishe maziwa afisa ugani au daktari wako wa mifugo anaposema ndama anakula chakula kigumu cha kutosha. Fuata mpango wa daktari wako wa mifugo kwa utunzaji wa kitovu, dawa za minyoo na chanjo.",
            "Weka kumbukumbu rahisi kila siku: lita kwa kila mnyama kwa kila ukamuaji, chakula ulichonunua na gharama yake, dalili za joto na tarehe za AI au kupandishwa, tarehe za kuzaa, matibabu pamoja na tarehe ambayo maziwa yanaweza kuuzwa tena, maziwa yaliyopelekwa, yaliyokataliwa na malipo. Daftari linatosha; jedwali (spreadsheet) kwenye simu hufanya hesabu kuwa rahisi.",
            "Gharama kwa lita = gharama zote za mwezi zikigawanywa kwa lita zilizozalishwa. Mfano (namba hizi ni mfano tu): ng'ombe 3 nchini Kenya wanazalisha lita 1,050 kwa mwezi. Gharama: chakula na majani KES 27,000, vibarua KES 9,000, daktari wa mifugo na AI KES 3,000, mengineyo KES 3,000; jumla KES 42,000. Gharama kwa lita = 42,000 / 1,050 = KES 40. Kama mnunuzi wako analipa chini ya gharama yako kwa lita, unapoteza pesa kwa kila lita; angalia kwanza upotevu wa chakula, hasara za ugonjwa wa kiwele na maziwa yaliyokataliwa."
          ],
          steps: ["Mpe dang'a haraka iwezekanavyo baada ya kuzaliwa.", "Weka ndama katika zizi safi na kavu lenye maji, nyasi kavu na chakula cha ndama.", "Andika lita, chakula, uzalishaji, kuzaa, matibabu, maziwa yaliyopelekwa na malipo.", "Mwisho wa mwezi, jumlisha gharama zote.", "Gawanya jumla ya gharama kwa lita zilizozalishwa: hii ndiyo gharama yako kwa lita.", "Linganisha na bei uliyolipwa na uchague badiliko moja la kupunguza gharama."],
          words: [["Dang'a (kolostramu)", "maziwa ya kwanza mazito ya rangi ya njano baada ya kuzaa; yanamlinda mtoto aliyezaliwa dhidi ya magonjwa."], ["Kuachisha", "kumhamisha mnyama mchanga kutoka maziwa kwenda chakula kigumu."], ["Gharama kwa lita", "gharama zako zote za maziwa kwa kipindi fulani zikigawanywa kwa lita ulizozalisha."]],
          slides: [
            { title: "Ndama ndio kundi lako la baadaye", bullets: ["Dang'a haraka iwezekanavyo baada ya kuzaliwa", "Zizi safi na kavu; maji, nyasi kavu, chakula cha ndama mapema", "Mpango wa daktari wa mifugo kwa kitovu, minyoo, chanjo"] },
            { title: "Kumbukumbu za kila siku", bullets: ["Lita kwa kila mnyama; chakula na gharama yake", "Joto, AI, kuzaa, matibabu", "Maziwa yaliyopelekwa, yaliyokataliwa, malipo"] },
            { title: "Gharama kwa lita", bullets: ["Gharama zote za mwezi / lita zilizozalishwa", "Mfano: KES 42,000 / lita 1,050 = KES 40 kwa lita", "Namba ni mifano: tumia zako"] },
            { title: "Kama hailipi", bullets: ["Bei chini ya gharama: unapoteza kwa kila lita", "Kagua upotevu wa chakula, ugonjwa wa kiwele, maziwa yaliyokataliwa", "Chagua badiliko moja na ulifuatilie"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Kazi ya mwisho: andika utaratibu wako wa usafi wa kukamua wa kubandika mahali pa kukamulia, kisha jaza karatasi ya gharama kwa lita kwa mwezi uliopita (au mwezi wa mfano): kila gharama, lita zilizozalishwa, gharama kwa lita, bei ya mnunuzi wako, na badiliko moja utakalofanya.",
          youCanNow: "kulea ndama wenye afya, kuweka kumbukumbu za maziwa na kukokotoa gharama ya kila lita ya maziwa.",
          quickCheck: [
            { objective: "O5", q: "Ndama aliyezaliwa anapaswa kunywa dang'a lini?", options: ["Baada ya wiki moja", "Tu akionekana dhaifu", "Haraka iwezekanavyo baada ya kuzaliwa, ikiwezekana katika saa chache za kwanza", "Kamwe; mpe maji tu"], answer: 2, why: "Dang'a hubeba kinga ya mama, na ndama huipokea vizuri zaidi katika saa za kwanza." },
            { objective: "O5", q: "Gharama za mwezi ni KES 36,000 na ng'ombe walizalisha lita 900. Gharama kwa lita ni ngapi?", options: ["KES 25", "KES 32", "KES 36", "KES 40"], answer: 3, why: "36,000 ikigawanywa kwa 900 ni 40." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Viwele vyenye afya, maziwa salama na faida",
        questions: [
          { objective: "O3", q: "Ipi ni dalili ya ugonjwa wa kiwele unaoonekana?", options: ["Robo yenye joto na iliyovimba na mabonge ndani ya maziwa", "Manyoya yanayong'aa", "Kucheua", "Hamu nzuri ya kula"], answer: 0, why: "Joto, uvimbe, maumivu na maziwa yasiyo ya kawaida ni dalili za ugonjwa wa kiwele unaoonekana." },
          { objective: "O3", q: "CMT inaonyesha mwitikio katika robo moja. Unafanya nini?", options: ["Kumpa antibiotiki uliyo nayo nyumbani", "Kuandika na kumwita daktari wako wa mifugo; kufuata ushauri wake na lebo", "Kupuuza; maziwa yanaonekana sawa", "Kumuuza ng'ombe leo"], answer: 1, why: "Daktari wa mifugo anaamua matibabu; kutibu nyumbani bila ushauri kunaleta hatari ya mabaki ya dawa na usugu wa dawa." },
          { objective: "O4", q: "Kulingana na FAO, maziwa yapozwe hadi kama 4 °C baada ya muda gani?", options: ["Ndani ya wiki moja", "Kufikia kesho yake", "Ndani ya kama saa tatu hadi nne baada ya kukamua", "Wakati wa joto tu"], answer: 2, why: "Kinga ya asili ya maziwa huzuia vijidudu kwa kama saa tatu hadi nne tu." },
          { objective: "O4", q: "Kituo cha kukusanya kinafanya kipimo cha alkoholi. Kinaonyesha nini?", options: ["Maji yaliyoongezwa", "Kiasi cha mafuta", "Mbegu ya ng'ombe", "Maziwa yanayoanza kuchacha"], answer: 3, why: "Maziwa yanayoanza kuchacha hutengeneza mabonge yakichanganywa na alkoholi." },
          { objective: "O5", q: "Gharama yako kwa lita ni KES 45 na mnunuzi analipa KES 40. Hii inamaanisha nini?", options: ["Unapoteza kama KES 5 kwa kila lita", "Unapata KES 5 kwa lita", "Hupati faida wala hasara", "Hakuna kitu; bei hazijalishi"], answer: 0, why: "Gharama kwa lita ikiwa juu ya bei, kila lita inapoteza pesa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ufugaji wa Ng'ombe wa Maziwa: Uzalishaji na Usafi wa Maziwa",
    questions: [
      { objective: "O1", q: "Kabla ya kununua ng'ombe wa maziwa, kitu cha kwanza cha kukagua ni:", options: ["Rangi ya ng'ombe", "Kama una majani na maji mwaka mzima, pamoja na kiangazi", "Mbegu ipi inajulikana zaidi", "Jirani yako ana ng'ombe wangapi"], answer: 1, why: "Chakula na maji vinaamua kiasi cha maziwa ambacho ng'ombe yeyote anaweza kutoa." },
      { objective: "O1", q: "Kwa nini mfugaji anaweza kuchagua mbuzi wa maziwa badala ya ng'ombe?", options: ["Mbuzi hawahitaji maji", "Mbuzi hawaugui kamwe", "Mbuzi wanakula kidogo na wanafaa vipande vidogo vya ardhi na bajeti ndogo", "Maziwa ya mbuzi hayahitaji usafi"], answer: 2, why: "Mbuzi wanahitaji chakula, nafasi na pesa kidogo, jambo linalowafaa wafugaji wadogo wengi." },
      { objective: "O1", q: "Katika zero-grazing, kwa nini kinyesi kiondolewe kila siku?", options: ["Matandiko machafu ni chanzo kikuu cha ugonjwa wa kiwele", "Ili kukiuza kila siku", "Ng'ombe hawapendi harufu", "Si lazima"], answer: 0, why: "Viwele hulala juu ya matandiko; uchafu pale hueneza vijidudu vya ugonjwa wa kiwele." },
      { objective: "O1", q: "Kitu kipi husaidia kuweka banda la zero-grazing kavu?", options: ["Sakafu tambarare isiyo na mfereji", "Kukosa paa", "Majani yaliyolowa", "Sakafu yenye mteremko kuelekea mfereji"], answer: 3, why: "Sakafu yenye mteremko hutoa mkojo na maji." },
      { objective: "O2", q: "Hatua ya kwanza ya utaratibu safi wa kukamua ni ipi?", options: ["Kuanza kukamua mara moja", "Mkamuaji kuvaa nguo safi, kucha fupi, kunawa mikono kwa sabuni", "Kumimina maziwa ndani ya dumu la plastiki", "Kumlisha ndama"], answer: 1, why: "Mikono na nguo safi huzuia vijidudu kuingia kwenye maziwa tangu mwanzo." },
      { objective: "O2", q: "Kwa nini ukamue kwa mkono mzima badala ya kuvuta kwa vidole?", options: ["Ni haraka kujifunza", "Inatumia maziwa kidogo", "Ni salama zaidi kwa chuchu na husaidia maziwa kutoka yote", "Vidole ni vichafu zaidi"], answer: 2, why: "Kukamua kwa mkono mzima kunazuia kuumiza chuchu na kunamaliza maziwa kwenye kiwele." },
      { objective: "O2", q: "Baada ya kukamua, unapaswa kufanya nini kwanza na maziwa?", options: ["Kuyachuja, kuyafunika na kuanza kuyapoza mara moja", "Kuyaacha wazi yapoe bandani", "Kuongeza maji ili yaongezeke", "Kuchanganya na maziwa ya jana"], answer: 0, why: "Kuchuja, kufunika na kupoza haraka huzuia uchafu na vijidudu." },
      { objective: "O2", q: "Kwa nini umpe ng'ombe chakula mara baada ya kukamua?", options: ["Ili alale", "Kuongeza mafuta", "Ili abaki amesimama wakati chuchu inafunga", "Haina maana yoyote"], answer: 2, why: "Kusimama wakati tundu la chuchu linafunga huzuia uchafu wa matandiko usiingie." },
      { objective: "O3", q: "Ugonjwa wa kiwele uliojificha (subclinical) ni:", options: ["Ugonjwa wa kiwele wenye robo iliyovimba na yenye joto", "Ugonjwa wa mbuzi tu", "Tatizo la chakula", "Ugonjwa wa kiwele usio na dalili zinazoonekana, unaogunduliwa kwa kipimo"], answer: 3, why: "Ni kipimo kama CMT tu kinachoonyesha ugonjwa wa kiwele uliojificha." },
      { objective: "O3", q: "Katika CMT, unasoma matokeo vipi?", options: ["Kusubiri saa moja, kisha kunusa", "Kuzungusha na kusoma ndani ya sekunde chache: majimaji ni kawaida, ute ni mwitikio", "Kuonja", "Kuchemsha kwanza"], answer: 1, why: "Mwitikio husomwa ndani ya sekunde chache; ute unamaanisha seli nyingi." },
      { objective: "O3", q: "Ni lini HUPASWI kutegemea CMT kwa ng'ombe?", options: ["Katika siku za kwanza baada ya kuzaa", "Asubuhi", "Akiwa mtulivu", "Baada ya kula"], answer: 0, why: "Seli huwa nyingi kwa kawaida mara baada ya kuzaa, kwa hiyo matokeo hupotosha." },
      { objective: "O3", q: "Nani anaamua jinsi ya kutibu ugonjwa wa kiwele?", options: ["Jirani", "Mnunuzi wa maziwa", "Daktari wako wa mifugo, huku lebo ya dawa ikifuatwa", "Video ya mtandaoni"], answer: 2, why: "Matibabu na muda wa kusubiri kabla ya kuuza maziwa vinatoka kwa daktari wa mifugo na lebo." },
      { objective: "O4", q: "Chombo kipi kinafanya maziwa yawezekane zaidi kukataliwa?", options: ["Mtungi safi wa aluminiamu", "Mtungi wa chuma cha pua", "Chombo kikubwa safi cha chuma cha maziwa", "Dumu la plastiki lililokwaruzika"], answer: 3, why: "Mikwaruzo ya plastiki hushika uchafu na vijidudu, na wanunuzi wengi hukataa maziwa yaliyomo ndani yake." },
      { objective: "O4", q: "Mfanyabiashara anapendekeza kuongeza maji kidogo kwenye kila mtungi. Wewe:", options: ["Unakataa: ni udanganyifu, mara nyingi kinyume cha sheria, na laktomita inaugundua", "Unakubali kama bei ziko chini", "Unaongeza unga badala yake", "Unaongeza maji wakati wa kiangazi tu"], answer: 0, why: "Kuongeza kitu chochote kwenye maziwa ni udanganyifu na vipimo vya mnunuzi vinaugundua." },
      { objective: "O4", q: "Kipimo cha kuchemsha (kuona kama yanaganda) kinakagua:", options: ["Maji yaliyoongezwa", "Maziwa yaliyochacha au yasiyo ya kawaida", "Umri wa mnyama", "Kiasi cha mafuta"], answer: 1, why: "Maziwa yaliyochacha au yasiyo ya kawaida huganda yakichemshwa." },
      { objective: "O4", q: "Nchini Kenya, ni chombo kipi hutoa leseni kwa wanaoshughulikia maziwa?", options: ["Kenya Wildlife Service", "Ofisi ya maji ya kaunti", "Kenya Dairy Board", "Pest Control Products Board"], answer: 2, why: "Kenya Dairy Board inasimamia sekta ya maziwa na hutoa vibali kwa wanaoshughulikia maziwa." },
      { objective: "O5", q: "Gharama kwa lita ni:", options: ["Bei anayolipa mnunuzi", "Gharama ya chakula tu", "Lita zikigawanywa kwa ng'ombe", "Gharama zote za kipindi zikigawanywa kwa lita zilizozalishwa"], answer: 3, why: "Inajumuisha kila gharama, si chakula tu." },
      { objective: "O5", q: "Gharama za mwezi ni KES 50,000 na ulizalisha lita 1,250. Gharama kwa lita?", options: ["KES 25", "KES 40", "KES 50", "KES 62"], answer: 1, why: "50,000 ikigawanywa kwa 1,250 ni 40." },
      { objective: "O5", q: "Unahitaji kumbukumbu ipi ili kujua lini maziwa ya ng'ombe aliyetibiwa yanaweza kuuzwa tena?", options: ["Tarehe ya matibabu na muda wa kusubiri kutoka lebo au kwa daktari wa mifugo", "Rangi yake", "Hali ya hewa", "Bei ya chakula"], answer: 0, why: "Kuandika matibabu na muda wake wa kusubiri kunazuia mabaki ya dawa kuwafikia wanunuzi." },
      { objective: "O5", q: "Gharama yako kwa lita iko juu kuliko bei. Mahali pazuri pa kuanza kuangalia ni:", options: ["Kununua ng'ombe wengi zaidi mara moja", "Kuuza maziwa bila kupima", "Upotevu wa chakula, hasara za ugonjwa wa kiwele na maziwa yaliyokataliwa", "Kuacha kuweka kumbukumbu zote"], answer: 2, why: "Kwa kawaida chakula ndicho gharama kubwa zaidi, na ugonjwa wa kiwele na kukataliwa hupoteza maziwa uliyolipia kuzalisha." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 8, 9, 13, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Wanyama na banda", objective: "O1", notYet: "Hakuna uhusiano kati ya wanyama, banda na chakula kilichopo shambani.", meets: "Utaratibu unalingana na wanyama na banda la shamba: mahali safi pa kukamulia, matandiko makavu na samadi iliyowekwa mbali.", exceeds: "Anataja rekebisho moja la banda pamoja na tarehe, kama mfereji bora au mahali tofauti pa kukamulia." },
      { name: "Utaratibu wa kukamua", objective: "O2", notYet: "Hatua zinakosekana au ziko nje ya mpangilio, kwa mfano hakuna kunawa mikono au kukausha chuchu.", meets: "Hatua zote kuanzia mkamuaji na vyombo hadi kuchuja, kufunika na kupoza, kwa mpangilio.", exceeds: "Anasema nani anafanya kila hatua na jinsi utaratibu unavyokaguliwa kila wiki." },
      { name: "Ukaguzi wa ugonjwa wa kiwele", objective: "O3", notYet: "Hakuna dalili za ugonjwa wa kiwele wala CMT katika utaratibu, au matibabu ya nyumbani bila daktari wa mifugo.", meets: "Anaorodhesha dalili, lini CMT inafanywa, jinsi matokeo yanavyoandikwa, na kumwita daktari wa mifugo kwa matokeo chanya; maziwa ya wanyama waliotibiwa yanawekwa kando hadi lebo au daktari wa mifugo aruhusu.", exceeds: "Anajumuisha jedwali rahisi la kumbukumbu za CMT kwa kila mnyama na kila robo." },
      { name: "Kupoza na kupeleka", objective: "O4", notYet: "Maziwa yanaachwa ya moto au yanapelekwa kwa kuchelewa; vyombo vya plastiki vinatumika.", meets: "Maziwa yanapozwa mara moja na kupelekwa ndani ya muda wa mnunuzi, katika vyombo vya chuma, bila kuongezwa chochote.", exceeds: "Anaandika saa za kupeleka, matokeo ya vipimo na kukataliwa kokote pamoja na sababu yake." },
      { name: "Gharama kwa lita", objective: "O5", notYet: "Gharama zinakosekana au hesabu si sahihi.", meets: "Gharama zote zimeorodheshwa, gharama kwa lita ni sahihi, imelinganishwa na bei ya mnunuzi.", exceeds: "Anataja badiliko moja la kupunguza gharama kwa lita na jinsi matokeo yake yatakavyopimwa mwezi ujao." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Maziwa machache kukataliwa katika kituo cha kukusanya au kwa mnunuzi ndani ya miezi 3 (kumbukumbu za kupeleka)",
      "Wanafunzi wanaofanya CMT kwa wanyama wao angalau mara moja kwa mwezi (utafiti wa kufuatilia)",
      "Wanafunzi wanaojua na kufuatilia gharama yao kwa lita baada ya siku 30 (utafiti wa kufuatilia)",
      "Mabadiliko ya wastani wa maziwa yanayopelekwa kwa kila mnyama katika miezi 3, pale kumbukumbu zinaporuhusu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, au simu yenye jedwali (spreadsheet) au app ya maelezo",
      "Kikokotoo (kikokotoo cha simu kinatosha)",
      "Kupata mnyama anayekamuliwa kwa kazi za mazoezi, au shamba la maonyesho",
      "Kibao cha CMT na kemikali yake, vya kuazima kutoka chama cha ushirika, daktari wa mifugo au ofisi ya ugani ikihitajika",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi, pamoja na mazoezi wakati wa kukamua"
    ],
    facilitatorNotes: [
      "Fanyeni utaratibu wa kukamua na CMT kama maonyesho ya moja kwa moja kwenye shamba la mwanachama au la chama cha ushirika; kila mwanafunzi afanye CMT mwenyewe.",
      "Alikeni kituo cha kukusanya maziwa au chama cha ushirika cha eneo lenu kuonyesha vipimo vyake vya maziwa (alkoholi, kuchemsha, laktomita).",
      "Usitoe kamwe vipimo (dozi) vya dawa, chanjo au homoni wala muda wa kusubiri; waelekeze wanafunzi kwa daktari wao wa mifugo na lebo ya dawa.",
      "Waombe wanafunzi walete risiti za chakula za mwezi uliopita na stakabadhi za kupeleka maziwa kwa kazi ya gharama kwa lita; tumia namba za mfano kwa wasio na kumbukumbu.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Unganisha kozi hii na \"Lishe ya Mifugo na Kuchanganya Chakula kwa Viungo vya Nyumbani\" kwa wanafunzi ambao gharama yao kwa lita iko juu kwa sababu ya chakula."
    ]
  }
};
