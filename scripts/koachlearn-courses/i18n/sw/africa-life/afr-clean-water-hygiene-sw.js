"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-clean-water-hygiene.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WHO_WATER = { name: "Shirika la Afya Duniani (WHO): Taarifa kuhusu maji ya kunywa (Drinking-water fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };
const CDC_SAFE_WATER = { name: "Vituo vya Marekani vya Kudhibiti na Kuzuia Magonjwa (CDC): Jinsi ya kufanya maji kuwa salama (kuchemsha, kutuliza na kuchuja, kuua vijidudu)", url: "https://www.cdc.gov/healthywater/emergency/making-water-safe.html" };
const CDC_HANDS = { name: "CDC: Kuhusu kunawa mikono (nyakati muhimu na hatua)", url: "https://www.cdc.gov/clean-hands/about/index.html" };
const JMP_SANITATION = { name: "Mpango wa Pamoja wa Ufuatiliaji wa WHO/UNICEF (JMP): Ngazi za usafi wa mazingira (Sanitation ladder)", url: "https://washdata.org/monitoring/sanitation" };
const WHO_DIARRHOEA = { name: "Shirika la Afya Duniani (WHO): Taarifa kuhusu magonjwa ya kuhara (Diarrhoeal disease fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_CHOLERA = { name: "Shirika la Afya Duniani (WHO): Taarifa kuhusu kipindupindu (Cholera fact sheet)", url: "https://www.who.int/news-room/fact-sheets/detail/cholera" };

module.exports = {
  id: "afr-clean-water-hygiene-sw",
  lang: "sw",
  translationOf: "afr-clean-water-hygiene",
  category: "Africa: Life and Work",
  name: "Maji Safi, Usafi wa Mazingira na Usafi Binafsi Nyumbani",
  skills: "Kuchagua chanzo salama zaidi cha maji, Kufanya maji ya kunywa kuwa salama zaidi, Kuhifadhi maji kwa usalama, Kunawa mikono kwa sabuni, Kuweka choo na kinyesi cha watoto salama, Kutambua dalili za hatari za kuhara na kipindupindu",
  outcome: "kulinda maji, mikono na choo cha familia yako: kuchagua maji salama zaidi, kuyafanya salama zaidi nyumbani, kuyahifadhi yakiwa yamefunikwa, kunawa mikono kwa sabuni katika nyakati muhimu, kushughulikia kinyesi kwa usalama, na kujua dalili za hatari zinazomaanisha uende kliniki sasa hivi.",
  about: [
    "Vijidudu vilivyo kwenye maji, mikononi na kwenye kinyesi husababisha kuhara, kipindupindu na homa ya matumbo (typhoid). Kuhara ni moja ya vitu vinavyoua watoto wadogo zaidi, na sehemu kubwa yake inaweza kuzuiwa kwa maji salama, sabuni na choo safi. Kozi hii ni kwa akina mama, akina baba, bibi na babu, walezi na vijana mijini na vijijini nchini Kenya, Nigeria, Ghana, DR Congo, Senegal, Misri na kote Afrika.",
    "Utalinganisha vyanzo vya maji vilivyo karibu nawe, utafanya maji ya kunywa kuwa salama zaidi kwa kuchemsha au kwa dawa ya klorini, utayahifadhi ili yabaki safi, utaandaa mahali pa kunawa mikono kwa sabuni, utaweka choo na kinyesi cha watoto salama, na utajifunza dalili za hatari za kuhara na kipindupindu.",
    "Kozi hii inafundisha kuzuia magonjwa na wakati wa kutafuta msaada. Haikuambii jinsi ya kutibu ugonjwa wala dawa gani utoe: hilo ni kazi ya kliniki, mhudumu wa afya wa jamii na wizara yako ya afya. Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" ya kufanya nyumbani."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa maji safi na usafi kwa nyumba yako: chanzo chako salama zaidi cha maji na cha akiba, jinsi utakavyofanya maji ya kunywa kuwa salama zaidi, jinsi utakavyoyahifadhi na kuyagawa, mahali pako pa kunawa mikono na nyakati muhimu ambazo familia yako inanawa mikono, jinsi unavyoweka choo na kinyesi cha watoto salama, na kadi ya dalili za hatari yenye jina na namba ya simu ya kliniki iliyo karibu nawe au ya mhudumu wa afya wa jamii.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Akina mama, akina baba, bibi na babu, walezi na vijana kote Afrika, mijini, katika makazi yasiyo rasmi na vijijini. Wengi huchota maji kutoka kisima kirefu (borehole), kisima, kioski, mto au bomba la pamoja, au huyanunua kwa mifuko midogo au madumu, na hutumia choo cha pamoja.",
    startingPoint: "Wanajua kuwa maji machafu yanaweza kuwaugua watu, na mara nyingi huchemsha maji ya watoto wachanga. Wengi hawayatibu maji yote ya kunywa, huyahifadhi katika vyombo vilivyo wazi, huchota kwa kuchovya kikombe kwa mkono, hunawa mikono bila sabuni au kwa maji tu, na hawana uhakika ni dalili zipi za kuhara zinazohitaji kliniki mara moja.",
    gap: "Kuhara, kipindupindu na homa ya matumbo huenea kupitia maji yasiyo salama, mikono isiyooshwa na kinyesi, na huua watoto wadogo wengi. Familia zinahitaji tabia chache za kila siku, yaani maji salama, sabuni katika nyakati sahihi na vyoo salama, pamoja na kujua wakati wa kwenda kliniki mara moja, ili kuwalinda watoto wao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanazungumza Kiswahili au Kiingereza kama lugha ya pili",
      "Vifaa: simu ya kawaida yenye data ya gharama kubwa; masomo yanafanya kazi bila intaneti yakishapakiwa",
      "Pesa: bajeti ndogo; tumia njia za gharama nafuu (kuchemsha, dawa za klorini zinazouzwa kwa ajili ya maji, sabuni, kituo rahisi cha kunawa mikono)",
      "Afya: kuzuia magonjwa na dalili za hatari tu; hakuna vipimo vya dawa, matibabu wala utambuzi wa ugonjwa; wanafunzi wanafuata kliniki yao, mhudumu wa afya wa jamii na wizara ya afya",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi za nyumbani na kazi nyingine"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa vyanzo vya maji vilivyo karibu na nyumba yako", action: "kupanga vyanzo vya maji kuanzia salama zaidi hadi hatari zaidi na kuchagua kimoja cha maji ya kunywa", standard: "ukitoa sababu kwa kila kimoja na kutaja chanzo cha akiba" },
    { id: "O2", condition: "Ukipewa maji kutoka chanzo chako na vitu ulivyo navyo nyumbani", action: "kufanya maji ya kunywa kuwa salama zaidi kwa kuyachemsha au kwa dawa ya klorini inayouzwa kwa ajili ya maji", standard: "ukifuata kila hatua, pamoja na kutuliza au kuchuja kwanza maji yenye tope na kufuata maelekezo ya kifurushi" },
    { id: "O3", condition: "Ukipewa maji yaliyotibiwa na vyombo vilivyo nyumbani kwako", action: "kuhifadhi na kugawa maji ya kunywa ili mikono na uchafu visiyaguse", standard: "ukitumia chombo safi kilichofunikwa na kumimina au kutumia bomba, bila kuchovya kamwe" },
    { id: "O4", condition: "Ukipewa sabuni au majivu na maji nyumbani", action: "kunawa mikono kwa sabuni katika nyakati muhimu na kuandaa mahali pa kunawa mikono", standard: "ukisugua kila sehemu ya mikono kwa angalau sekunde 20, na kituo kikiwa karibu na choo na jikoni" },
    { id: "O5", condition: "Ukipewa choo chako na watoto wadogo nyumbani", action: "kuweka choo kikiwa safi na kutupa kinyesi cha watoto kwa usalama", standard: "bila kinyesi kuachwa wazi na kifuniko kikiwa kinatumika" },
    { id: "O6", condition: "Ukipewa mwanafamilia anayeharisha au mwenye choo cha majimaji", action: "kutambua dalili za hatari za upungufu wa maji mwilini na kipindupindu na kumpeleka mtu huyo kliniki mara moja", standard: "ukitaja angalau dalili nne za hatari na kliniki iliyo karibu au mhudumu wa afya wa jamii" }
  ],
  chapters: [
    {
      name: "Sura 1: Maji salama ya kunywa",
      lessons: [
        {
          title: "Kuchagua chanzo salama zaidi cha maji",
          objectives: ["O1"],
          minutes: 5,
          goal: "Panga vyanzo vya maji vilivyo karibu na nyumba yako kuanzia salama zaidi hadi hatari zaidi.",
          text: [
            "Maji yanaweza kuonekana safi na bado yakabeba vijidudu. Hatari kubwa zaidi ni kinyesi (uchafu wa binadamu au wanyama) kuingia kwenye maji. WHO inasema maji yasiyo salama yanaweza kueneza kuhara, kipindupindu, kuhara damu, homa ya matumbo, homa ya ini A na polio. Maji ya mito na maziwa pia yanaweza kubeba minyoo inayosababisha kichocho (bilharzia).",
            "Vyanzo salama zaidi kwa kawaida ni maji ya bomba, kisima kirefu au kisima kilicholindwa chenye kifuniko na pampu, chemchemi zilizolindwa, na maji ya mvua yanayokusanywa katika tangi safi lililofunikwa. Vyanzo vya hatari zaidi ni visima vilivyo wazi, chemchemi zisizolindwa, mito, mabwawa, maziwa na mabwawa ya kuzuia maji, ambapo watu na wanyama huoga, hufua na hunywa. Maji ya kioski, ya gari la maji (tanker) au ya mfuko mdogo ni salama kama chanzo chake na jinsi yalivyoshughulikiwa tu.",
            "Angalia kila chanzo kilicho karibu nawe. Je, kimefunikwa? Kuna choo au zizi la wanyama karibu nacho, au juu yake kwenye mteremko? Watu hufua nguo au huwanywesha wanyama hapo? Chagua kilicho salama zaidi kwa kunywa na kupikia, na cha akiba kwa wakati kinapokauka au kuharibika. Hata maji mazuri yanaweza kuchafuka njiani kurudi nyumbani, kwa hiyo bado utayatibu na kuyahifadhi vizuri (masomo yanayofuata)."
          ],
          steps: ["Orodhesha kila chanzo cha maji ambacho familia yako inatumia.", "Kwa kila kimoja uliza: kimefunikwa, kimelindwa na kiko mbali na vyoo na wanyama?", "Vipange kuanzia salama zaidi hadi hatari zaidi.", "Chagua kimoja cha kunywa na kupikia, na cha akiba.", "Tumia maji ya hatari zaidi kwa kufulia na kuoga tu, na bado tibu maji yoyote unayokunywa."],
          words: [["Kinyesi", "uchafu wa binadamu au wanyama (mavi)."], ["Chanzo kilicholindwa", "kisima, kisima kirefu au chemchemi iliyofunikwa na kuzibwa ili uchafu na maji ya mvua yanayotiririka yasiingie."], ["Kichocho (bilharzia, schistosomiasis)", "ugonjwa unaotokana na minyoo midogo sana iliyo katika baadhi ya mito na maziwa."]],
          slides: [
            { title: "Maji safi kwa macho si lazima yawe salama", bullets: ["Kinyesi kwenye maji kinaeneza vijidudu", "Kuhara, kipindupindu, homa ya matumbo, homa ya ini A", "Mito na maziwa yanaweza kubeba minyoo ya kichocho"] },
            { title: "Kwa kawaida salama zaidi", bullets: ["Maji ya bomba", "Kisima kirefu au kisima kilicholindwa chenye kifuniko na pampu", "Chemchemi iliyolindwa; mvua katika tangi safi lililofunikwa"] },
            { title: "Kwa kawaida hatari zaidi", bullets: ["Visima vilivyo wazi na chemchemi zisizolindwa", "Mito, mabwawa, maziwa na mabwawa ya kuzuia maji", "Kioski, gari la maji, mfuko mdogo: salama kama chanzo chake tu"] },
            { title: "Kagua kila chanzo", bullets: ["Kimefunikwa? Kiko mbali na vyoo na wanyama?", "Chagua kilicho salama zaidi kwa kunywa, pamoja na cha akiba", "Bado yatibu na uyahifadhi vizuri"] }
          ],
          sources: [WHO_WATER],
          tryIt: "Andika kila chanzo cha maji ambacho familia yako inatumia. Weka alama kila kimoja kama salama zaidi au hatari zaidi, na kwa nini. Zungushia duara kile utakachotumia kwa kunywa na cha akiba.",
          youCanNow: "kulinganisha vyanzo vya maji vilivyo karibu nawe na kuchagua kilicho salama zaidi kwa kunywa, pamoja na cha akiba.",
          quickCheck: [
            { objective: "O1", q: "Chanzo kipi kwa kawaida ni salama zaidi kwa kunywa?", options: ["Kisima kirefu kilicholindwa chenye kifuniko na pampu", "Mto ambapo ng'ombe hunywa", "Bwawa lililo wazi", "Bwawa ambapo watu hufua nguo"], answer: 0, why: "Chanzo kilicholindwa na kufunikwa kinazuia kinyesi na maji yanayotiririka yasiingie." },
            { objective: "O1", q: "Maji ya mto yanaonekana safi. Kipi ni kweli?", options: ["Maji yanayoonekana safi ni salama kila wakati", "Maji yanayoonekana safi bado yanaweza kubeba vijidudu, kwa hiyo yatibu kabla ya kunywa", "Maji ya rangi ya kahawia tu ndiyo hatari", "Mito hujisafisha yenyewe"], answer: 1, why: "Vijidudu haviwezi kuonekana; maji yanayoonekana safi bado yanaweza kuvibeba." }
          ]
        },
        {
          title: "Kufanya maji ya kunywa kuwa salama zaidi nyumbani",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fanya maji ya kunywa kuwa salama zaidi kwa kuyachemsha au kwa dawa ya klorini inayouzwa kwa ajili ya maji.",
          text: [
            "Kama maji yako huenda si salama, yatibu kabla ya kunywa, kabla ya kuchanganya chakula cha mtoto au maziwa ya kopo, na kabla ya kupiga mswaki. Njia mbili za kawaida ni kuchemsha na klorini. Zote mbili zinafanya kazi vizuri zaidi kwenye maji yasiyo na tope.",
            "Kama maji yana tope, kwanza yaache yatulie katika chombo safi ili uchafu uzame chini, kisha mimina maji safi ya juu kupitia kitambaa safi kilichokunjwa mara kadhaa. Kutuliza na kuchuja kwa kitambaa hakufanyi maji kuwa salama peke yake; kunayaandaa kwa ajili ya kuchemsha au klorini.",
            "Kuchemsha: chemsha maji hadi yachemke kwa nguvu, yenye mapovu makubwa, kwa dakika 1. Juu milimani, zaidi ya mita 2,000 hivi, chemsha kwa dakika 3. Yaache yapoe yakiwa yamefunikwa, katika sufuria ile ile au chombo safi.",
            "Klorini: tumia dawa ya klorini inayouzwa kwa ajili ya maji ya kunywa (ya maji, vidonge au vifurushi vidogo) au ile anayokupa mhudumu wa afya. Fuata maelekezo ya kifurushi hasa: kiasi gani kwa maji kiasi gani, na usubiri muda gani kabla ya kunywa (mara nyingi angalau dakika 30). Maji yenye tope yanaweza kuhitaji zaidi; kifurushi kinakuambia. Weka klorini mbali na watoto. Kama huna maelekezo au huna uhakika, muulize mhudumu wa afya wa jamii au kliniki. WHO hupima baadhi ya bidhaa za kutibu maji nyumbani; wizara yako ya afya inaweza kukuambia zipi zimeidhinishwa mahali unapoishi."
          ],
          steps: ["Kama yana tope: yaache yatulie, kisha yamimine kupitia kitambaa safi kilichokunjwa.", "Chemsha: yachemke kwa nguvu kwa dakika 1 (dakika 3 juu milimani), kisha yapoe yakiwa yamefunikwa.", "Au klorini: weka dawa kama kifurushi kinavyosema, koroga, na usubiri muda ulioandikwa.", "Yamimine katika chombo safi kilichofunikwa.", "Weka dawa za klorini mbali na watoto wasizifikie."],
          words: [["Kuchemka kwa nguvu", "maji yanayochemka sana yakiwa na mapovu makubwa yasiyokoma hata ukikoroga."], ["Dawa ya klorini", "kioevu, kidonge au kifurushi kidogo kinachouzwa kuua vijidudu katika maji ya kunywa."], ["Kutuliza", "kuacha maji yakae bila kutikiswa ili uchafu uzame chini."]],
          slides: [
            { title: "Wakati wa kutibu maji", bullets: ["Kabla ya kunywa", "Kabla ya kuchanganya chakula cha mtoto au maziwa ya kopo", "Kabla ya kupiga mswaki"] },
            { title: "Maji yenye tope kwanza", bullets: ["Yaache yatulie", "Yamimine kupitia kitambaa safi kilichokunjwa", "Hii inayaandaa; bado si salama"] },
            { title: "Kuchemsha", bullets: ["Yachemke kwa nguvu kwa dakika 1", "Dakika 3 zaidi ya mita 2,000 hivi", "Yapoe yakiwa yamefunikwa"] },
            { title: "Klorini", bullets: ["Dawa inayouzwa kwa ajili ya maji ya kunywa", "Fuata kifurushi: kiasi na muda wa kusubiri", "Huna uhakika? Muulize mhudumu wa afya; iweke mbali na watoto"] }
          ],
          sources: [CDC_SAFE_WATER, WHO_WATER],
          tryIt: "Chagua njia moja, kuchemsha au dawa ya klorini, na utibu chombo kimoja cha maji ya kunywa leo, hatua kwa hatua. Andika kila hatua uliyofanya.",
          youCanNow: "kufanya maji yenye tope au yenye shaka kuwa salama zaidi kwa kunywa kwa kuyatuliza, kisha kuyachemsha au kutumia dawa ya klorini kama kifurushi kinavyosema.",
          quickCheck: [
            { objective: "O2", q: "Maji yako yana tope. Unafanya nini kabla ya kuchemsha au kuweka klorini?", options: ["Kuweka sukari", "Kuyanywa haraka", "Kuyaacha yatulie na kuyamimina kupitia kitambaa safi kilichokunjwa", "Hakuna; maji yenye tope ni sawa"], answer: 2, why: "Kutuliza na kuchuja kunaondoa uchafu ili kuchemsha au klorini vifanye kazi vizuri zaidi." },
            { objective: "O2", q: "Katika maeneo ya kawaida, maji yachemke kwa nguvu kwa muda gani?", options: ["Hadi yapate joto tu", "Sekunde 5", "Hadi nusu yake iishe", "Dakika 1"], answer: 3, why: "CDC inashauri yachemke kwa nguvu kwa dakika 1, au dakika 3 juu milimani." }
          ]
        },
        {
          title: "Kuhifadhi na kugawa maji kwa usalama",
          objectives: ["O3"],
          minutes: 4,
          goal: "Hifadhi na ugawe maji ya kunywa ili mikono na uchafu visiweze kuyagusa.",
          text: [
            "Maji salama yanaweza kuchafuka tena nyumbani. Vijidudu huingia mikono au vikombe vinapochovywa kwenye chombo, chombo kinapoachwa wazi, au chombo chenyewe kinapokuwa kichafu.",
            "Weka maji ya kunywa katika chombo safi chenye mfuniko, ikiwezekana chenye mdomo mwembamba au bomba. Kiweke juu, si sakafuni, na mbali na wanyama. Mimina maji au tumia bomba; usichovye kamwe kikombe wala mkono wako. Osha chombo na mfuniko wake kwa sabuni na maji salama mara kwa mara, na ukiache kikauke kikiwa kimepinduliwa.",
            "Kufunika maji pia kunazuia mbu wasitage mayai ndani yake. Tenganisha maji ya kunywa na maji ya kufulia na kuoga. Familia ya Kumasi, Lubumbashi au Kano inaweza kutumia kanuni ile ile: chombo kimoja safi kilichofunikwa cha maji ya kunywa kwa kila nyumba, na hakuna anayechovya."
          ],
          steps: ["Tumia chombo safi chenye mfuniko, mdomo mwembamba au bomba.", "Kiweke juu, si sakafuni, mbali na wanyama.", "Mimina au tumia bomba: usichovye vikombe wala mikono.", "Osha chombo kwa sabuni na maji salama mara kwa mara.", "Tenganisha maji ya kunywa na maji ya kufulia na kuoga."],
          words: [["Chombo", "dumu, ndoo, sufuria au chupa inayobeba maji."], ["Kuchovya", "kuingiza kikombe au mkono ndani ya maji ili kuchota."]],
          slides: [
            { title: "Maji salama yanaweza kuchafuka tena", bullets: ["Kuchovya mikono au vikombe", "Vyombo vilivyo wazi", "Vyombo vichafu"] },
            { title: "Yahifadhi vizuri", bullets: ["Chombo safi chenye mfuniko, mdomo mwembamba au bomba", "Juu, si sakafuni, mbali na wanyama", "Tofauti na maji ya kufulia na kuoga"] },
            { title: "Yagawe vizuri", bullets: ["Mimina, au tumia bomba", "Usichovye kamwe kikombe wala mkono", "Osha chombo kwa sabuni mara kwa mara"] }
          ],
          sources: [WHO_WATER, CDC_SAFE_WATER],
          tryIt: "Angalia jinsi nyumba yako inavyohifadhi maji ya kunywa. Yamefunikwa? Kuna anayechovya? Fanya badiliko moja leo, kama mfuniko, upawa wenye mpini mrefu unaotundikwa kwenye ndoano, au chombo chenye bomba.",
          youCanNow: "kuhifadhi na kugawa maji ya kunywa ili yabaki safi baada ya kuyatibu.",
          quickCheck: [
            { objective: "O3", q: "Njia ipi ni salama zaidi ya kutoa maji kwenye chombo cha kuhifadhia?", options: ["Kuchovya kikombe", "Kuyamimina au kutumia bomba", "Kuchovya mkono wako", "Kuacha mfuniko wazi ili iwe haraka"], answer: 1, why: "Kumimina au kutumia bomba kunazuia mikono na vikombe visiingie kwenye maji safi." },
            { objective: "O3", q: "Kwa nini chombo cha maji ya kunywa kifunikwe?", options: ["Kinazuia uchafu, mikono na mbu", "Kinafanya maji yawe baridi zaidi", "Ni kwa urembo tu", "Kinafanya maji yachemke"], answer: 0, why: "Mfuniko unazuia uchafu, vijidudu na mayai ya mbu visiingie." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Maji salama ya kunywa",
        questions: [
          { objective: "O1", q: "Kuna choo cha shimo juu kidogo ya kisima kifupi kilicho wazi. Unafanya nini?", options: ["Kunywa kutoka humo; maji yanaonekana safi", "Kutumia kisima kwa maji ya kunywa tu", "Kuchagua chanzo salama zaidi cha maji ya kunywa, na kutibu maji yoyote unayokunywa", "Kuweka mfuniko kwenye choo tu"], answer: 2, why: "Kinyesi kinaweza kutiririka kutoka choo cha shimo hadi kisima kilicho wazi karibu; chagua chanzo salama zaidi na utibu maji ya kunywa." },
          { objective: "O2", q: "Sentensi ipi kuhusu dawa za klorini za maji ni sahihi?", options: ["Tumia kiasi chochote unachotaka", "Kunywa mara moja", "Dawa yoyote ya kusafishia (bleach) ni sawa", "Fuata kifurushi kwa kiasi na muda wa kusubiri"], answer: 3, why: "Kifurushi kinatoa kiasi sahihi na muda wa kusubiri kwa dawa hiyo." },
          { objective: "O2", q: "Unaishi juu milimani, zaidi ya mita 2,000 hivi. Unachemsha kwa muda gani?", options: ["Dakika 3 yakichemka kwa nguvu", "Sekunde 10", "Dakika 1 tu", "Hakuna haja ya kuchemsha"], answer: 0, why: "Juu milimani maji huchemka kwa joto la chini, kwa hiyo CDC inashauri dakika 3 huko." },
          { objective: "O3", q: "Mtoto wako anachovya kikombe kwenye ndoo ya maji. Badiliko lipi ni bora zaidi?", options: ["Kumwambia achovye haraka zaidi", "Kutumia chombo kilichofunikwa unachomimina kutoka kwake, au chenye bomba", "Kuacha ndoo wazi", "Kuweka sukari kwenye maji"], answer: 1, why: "Kumimina au bomba kunazuia mikono na vikombe vichafu kufikia maji safi." },
          { objective: "O1", q: "Maji kutoka kioski au gari la maji ni...", options: ["Salama kila wakati", "Si salama kamwe", "Salama yakiwa ya moto tu", "Salama kama chanzo chake na jinsi yalivyoshughulikiwa tu"], answer: 3, why: "Maji ya kununua yanaweza kuwa safi au machafu; uliza kuhusu chanzo na bado uyahifadhi vizuri." }
        ]
      }
    },
    {
      name: "Sura 2: Mikono safi, vyoo salama, hatua za haraka",
      lessons: [
        {
          title: "Kunawa mikono kwa sabuni katika nyakati muhimu",
          objectives: ["O4"],
          minutes: 5,
          goal: "Nawa mikono kwa sabuni katika nyakati muhimu na uandae mahali pa kunawa mikono nyumbani.",
          text: [
            "Kunawa mikono kwa sabuni ni moja ya njia za bei nafuu zaidi za kuzuia kuhara na maambukizi ya kifua. Maji peke yake hayatoshi; sabuni inaondoa vijidudu.",
            "Nyakati muhimu: baada ya kutumia choo; baada ya kumsafisha mtoto matako au kubadilisha nepi; kabla, wakati na baada ya kuandaa chakula; kabla ya kula na kabla ya kumlisha mtoto; baada ya kumhudumia mgonjwa anayeharisha au kutapika; baada ya kupenga kamasi, kukohoa au kupiga chafya; na baada ya kugusa wanyama au takataka.",
            "Jinsi: lowesha mikono kwa maji safi yanayotiririka, weka sabuni, sugua viganja, migongo ya mikono, katikati ya vidole na chini ya kucha kwa angalau sekunde 20 (kama muda wa kuimba wimbo mfupi mara mbili), suuza kwa maji yanayotiririka na uache ikauke hewani au tumia kitambaa safi. Mahali pasipo na bomba, kituo cha kunawa mikono kinasaidia: dumu au chupa yenye tundu dogo na kizibo, iliyotundikwa au inayoinamishwa kwa kijiti cha mguu (mara nyingi huitwa tippy tap), na sabuni iliyofungwa kwa kamba na changarawe kidogo chini kwa ajili ya maji machafu. Kiweke karibu na choo na karibu na mahali unapopikia."
          ],
          steps: ["Lowesha mikono kwa maji safi yanayotiririka.", "Weka sabuni.", "Sugua viganja, migongo ya mikono, katikati ya vidole na chini ya kucha kwa angalau sekunde 20.", "Suuza kwa maji yanayotiririka.", "Iache ikauke hewani au tumia kitambaa safi.", "Andaa kituo karibu na choo na jikoni."],
          words: [["Nyakati muhimu", "nyakati ambazo kunawa mikono kunazuia vijidudu vingi zaidi."], ["Kituo cha kunawa mikono", "mahali maalum penye maji na sabuni pa kunawa mikono."], ["Tippy tap", "kituo rahisi cha kunawa mikono kilichotengenezwa kwa dumu au chupa unayoiinamisha kwa kukanyaga kijiti."]],
          slides: [
            { title: "Sabuni, si maji tu", bullets: ["Sabuni inaondoa vijidudu mikononi", "Inazuia kuhara na maambukizi ya kifua"] },
            { title: "Nyakati muhimu", bullets: ["Baada ya choo au kumsafisha mtoto matako", "Kabla ya kupika, kula au kumlisha mtoto", "Baada ya kumhudumia mgonjwa; baada ya wanyama au takataka"] },
            { title: "Jinsi ya kunawa", bullets: ["Lowesha, weka sabuni, sugua angalau sekunde 20", "Viganja, migongo, katikati ya vidole, chini ya kucha", "Suuza kwa maji yanayotiririka; kausha hewani au kwa kitambaa safi"] },
            { title: "Kituo nyumbani", bullets: ["Dumu au chupa yenye bomba au kijiti cha kuinamisha", "Sabuni kwenye kamba; changarawe chini", "Karibu na choo na jikoni"] }
          ],
          sources: [CDC_HANDS, WHO_WATER],
          tryIt: "Andaa au boresha mahali pamoja pa kunawa mikono nyumbani leo, penye maji na sabuni, karibu na choo au jikoni. Kisha mwonyeshe kila mtu nyumbani kwako jinsi ya kunawa kwa sekunde 20.",
          youCanNow: "kunawa mikono vizuri kwa sabuni katika nyakati muhimu na kuandaa mahali pa kunawa mikono nyumbani.",
          quickCheck: [
            { objective: "O4", q: "Ni lini lazima unawe mikono kwa sabuni?", options: ["Mara moja tu kwa siku", "Kabla ya kwenda kanisani au msikitini tu", "Baada ya choo, baada ya kumsafisha mtoto matako na kabla ya kupika au kula", "Inapoonekana chafu tu"], answer: 2, why: "Nyakati hizi muhimu zinazuia vijidudu vya kinyesi kufikia chakula na midomo." },
            { objective: "O4", q: "Usugue kwa sabuni kwa muda gani?", options: ["Sekunde 2", "Hadi sabuni iishe", "Viganja tu, haraka", "Angalau sekunde 20, sehemu zote za mikono"], answer: 3, why: "Kusugua kila sehemu kwa angalau sekunde 20 kunaondoa vijidudu." }
          ]
        },
        {
          title: "Vyoo salama na kinyesi cha watoto",
          objectives: ["O5"],
          minutes: 5,
          goal: "Weka choo chako kikiwa safi na utupe kinyesi cha watoto kwa usalama.",
          text: [
            "Kinyesi kinachoachwa wazi, kichakani, shambani, kwenye mtaro au mtoni, hubeba vijidudu ambavyo nzi, miguu, mvua na mikono huvirudisha kwenye chakula na maji. WHO na UNICEF huhesabu choo kuwa salama zaidi kinapotenganisha kinyesi na watu: choo cha kuvuta maji au cha kumwagia maji, au choo cha shimo chenye sakafu imara (slab). Choo ambacho nyumba yako haishiriki na nyumba nyingine ni bora zaidi.",
            "Weka choo kikiwa safi: osha sakafu au kiti mara kwa mara, weka mfuniko au kifuniko kwenye tundu ili kuzuia nzi, na weka mahali pa kunawa mikono karibu kabisa nacho. Watoto pia wanahitaji choo wanachoweza kutumia kwa usalama, kama poti au kifuniko kidogo cha tundu.",
            "Kinyesi cha watoto wadogo ni hatari kama cha watu wazima. Kiweke chooni mara moja, pamoja na kile cha nepi na poti, kisha osha poti na mikono yako kwa sabuni. Usikiache uani wala kukitupa kwenye mtaro au takataka."
          ],
          steps: ["Osha sakafu au kiti mara kwa mara.", "Weka mfuniko au kifuniko kwenye tundu.", "Weka sabuni na maji karibu kabisa na choo.", "Weka kinyesi cha watoto chooni mara moja.", "Osha poti na mikono yako kwa sabuni."],
          words: [["Choo cha shimo", "choo kilichojengwa juu ya shimo ardhini."], ["Sakafu imara (slab)", "sakafu ngumu juu ya choo cha shimo unayosimama juu yake."], ["Kujisaidia hovyo", "kutoa haja kubwa mashambani, vichakani, mitoni au mahali pengine wazi."]],
          slides: [
            { title: "Kinyesi kilicho wazi kinarudi", bullets: ["Nzi, miguu, mvua na mikono hubeba vijidudu", "Hadi kwenye chakula na maji"] },
            { title: "Choo salama zaidi", bullets: ["Cha kuvuta maji, cha kumwagia maji, au cha shimo chenye sakafu imara", "Kisichoshirikiwa na nyumba nyingine ni bora zaidi", "Mfuniko juu; sabuni na maji kando yake"] },
            { title: "Kinyesi cha watoto", bullets: ["Ni hatari kama cha watu wazima", "Chooni mara moja", "Osha poti na mikono yako kwa sabuni"] }
          ],
          sources: [JMP_SANITATION, WHO_DIARRHOEA],
          tryIt: "Kagua choo chako leo: kiko safi, kimefunikwa na kiko karibu na sabuni na maji? Rekebisha kitu kimoja. Kubalianeni kama familia mahali kinyesi cha watoto kitakapowekwa kila mara.",
          youCanNow: "kuweka choo kikiwa safi na kimefunikwa na kuondoa kinyesi cha watoto kwa usalama.",
          quickCheck: [
            { objective: "O5", q: "Kinyesi cha mtoto mchanga kutoka kwenye nepi kinapelekwa wapi?", options: ["Chooni mara moja", "Uani", "Kwenye mtaro", "Kwenye jalala la takataka"], answer: 0, why: "Kinyesi cha watoto pia kinabeba vijidudu na lazima kiende chooni." },
            { objective: "O5", q: "Kwa nini tundu la choo cha shimo lifunikwe?", options: ["Ili kibaki na joto", "Ili kuzuia nzi wasibebe vijidudu hadi kwenye chakula", "Ili kuficha harufu tu", "Hakuhitajiki"], answer: 1, why: "Nzi wanaotua kwenye kinyesi wanaweza kubeba vijidudu hadi kwenye chakula." }
          ]
        },
        {
          title: "Kuhara na kipindupindu: wakati wa kwenda kliniki sasa hivi",
          objectives: ["O6"],
          minutes: 6,
          goal: "Tambua dalili za hatari za upungufu wa maji mwilini na kipindupindu na utafute msaada mara moja.",
          text: [
            "Kuhara kunaondoa maji na chumvi mwilini. Hii inaitwa upungufu wa maji mwilini, na unaweza kumuua mtoto mdogo haraka. Kipindupindu kinaweza kusababisha choo kingi sana cha majimaji na, WHO inasema, kinaweza kuua ndani ya saa chache kisipotibiwa. Usisubiri kuona kama kitapona.",
            "Nenda kliniki, kituo cha afya au kwa mhudumu wa afya wa jamii SASA HIVI kama mtu: ana usingizi mwingi sana, ni dhaifu, mlegevu au ni vigumu kumwamsha; hawezi kunywa au anakunywa kidogo sana; macho yake yamezama ndani; ngozi ikibanwa inarudi polepole sana; ana choo kingi cha majimaji, kama maji ya mchele; ana damu kwenye choo; anatapika tena na tena; au anaharisha kwa siku nyingi. Mtoto mchanga au mtoto mdogo anayeharisha anahitaji uangalizi zaidi.",
            "Chumvi za kunywa za kurudisha maji mwilini (ORS) zinarudisha maji na chumvi zilizopotea, na wahudumu wa afya pia huwapa watoto zinki. Muulize kliniki yako, mhudumu wa afya wa jamii au duka la dawa jinsi ya kutumia ORS; mpe njiani, kama wanavyokuambia, lakini bado nenda. Endelea kunyonyesha. Wakati wa mlipuko wa kipindupindu, sikiliza wizara yako ya afya: inaweza kuendesha kampeni za chanjo na vituo vya matibabu. Andika jina na namba ya simu ya kliniki iliyo karibu nawe na ya mhudumu wa afya wa jamii kwenye kadi, na weka pesa za usafiri ukiweza."
          ],
          steps: ["Mwangalie kwa makini yeyote anayeharisha, hasa watoto wadogo.", "Angalia dalili za hatari.", "Ukiona yoyote, nenda kliniki au mpigie simu mhudumu wa afya wa jamii sasa hivi.", "Muulize mhudumu wa afya jinsi ya kutoa ORS, na endelea kunyonyesha.", "Nawa mikono kwa sabuni baada ya kila mguso na usafishe kwa usalama."],
          words: [["Upungufu wa maji mwilini", "mwili unapopoteza maji na chumvi nyingi mno."], ["ORS (chumvi za kunywa za kurudisha maji mwilini)", "mchanganyiko wa chumvi na sukari ambao, ukichanganywa na maji salama, unarudisha kile kuhara kinachoondoa."], ["Kipindupindu", "ugonjwa unaotokana na maji au chakula kichafu unaosababisha kuhara kwa majimaji mengi na unaweza kuua haraka."], ["Mlipuko", "wagonjwa wengi wa ugonjwa mmoja katika eneo moja kwa wakati mmoja."]],
          slides: [
            { title: "Kuhara kunaweza kuua haraka", bullets: ["Mwili unapoteza maji na chumvi", "Kipindupindu kinaweza kuua ndani ya saa chache", "Usisubiri"] },
            { title: "Nenda kliniki SASA HIVI kama", bullets: ["Usingizi mwingi, mlegevu, vigumu kuamka; hawezi kunywa", "Macho yamezama; ngozi ikibanwa inarudi polepole", "Choo kingi kama maji ya mchele; damu kwenye choo", "Anatapika tena na tena; inadumu siku nyingi"] },
            { title: "Njiani", bullets: ["Muulize mhudumu wa afya jinsi ya kutoa ORS", "Endelea kunyonyesha", "Nawa mikono baada ya kila mguso"] },
            { title: "Kuwa tayari", bullets: ["Kadi yenye namba za kliniki na za mhudumu wa afya", "Pesa za usafiri ukiweza", "Wakati wa mlipuko, fuata wizara ya afya"] }
          ],
          sources: [WHO_DIARRHOEA, WHO_CHOLERA],
          tryIt: "Tengeneza kadi ya dalili za hatari: andika dalili nne au zaidi za hatari, jina na namba ya simu ya kliniki iliyo karibu nawe au ya mhudumu wa afya wa jamii, na jinsi utakavyofika huko. Ibandike ukutani.",
          youCanNow: "kutambua dalili za hatari za upungufu wa maji mwilini na kipindupindu na kumfikisha mtu kliniki mara moja.",
          quickCheck: [
            { objective: "O6", q: "Ipi ni dalili ya hatari inayomaanisha uende kliniki sasa hivi?", options: ["Choo kimoja laini", "Mtoto anayecheza kama kawaida", "Mtoto mwenye usingizi mwingi sana asiyeweza kunywa", "Kuhisi kiu baada ya kucheza mpira"], answer: 2, why: "Usingizi mwingi sana na kushindwa kunywa ni dalili za upungufu mkubwa wa maji mwilini." },
            { objective: "O6", q: "Jirani ana choo kingi sana cha majimaji kama maji ya mchele wakati wa mlipuko wa kipindupindu. Unafanya nini?", options: ["Kusubiri hadi kesho", "Kumpa dawa yoyote uliyo nayo nyumbani", "Kuwaficha wahudumu wa afya", "Kumsaidia afike kliniki au kituo cha matibabu sasa hivi"], answer: 3, why: "Kipindupindu kinaweza kuua ndani ya saa chache; huduma ya haraka kliniki inaokoa maisha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mikono safi, vyoo salama, hatua za haraka",
        questions: [
          { objective: "O4", q: "Kuna maji lakini hakuna sabuni mahali pa kunawa mikono. Kipi ni kweli?", options: ["Maji peke yake yanatosha", "Sabuni inahitajika kuondoa vijidudu; leta sabuni kwenye kituo", "Mikono haihitaji kuoshwa", "Tumia ndoo ya maji ya kunywa"], answer: 1, why: "Sabuni inaondoa vijidudu ambavyo maji peke yake yanaviacha." },
          { objective: "O4", q: "Mahali gani ni bora zaidi kwa kituo cha kunawa mikono?", options: ["Karibu na choo na karibu na mahali unapopikia", "Mbali na nyumba", "Ndani ya ndoo ya maji ya kunywa", "Chumbani"], answer: 0, why: "Karibu na choo na jikoni kunarahisisha kunawa katika nyakati muhimu." },
          { objective: "O5", q: "Kinyesi cha mtoto mdogo kiko uani. Unafanya nini?", options: ["Kukifagia kwenye mtaro", "Kukiacha kikauke", "Kukifunika kwa mchanga na kukiacha", "Kukiweka chooni na kunawa mikono kwa sabuni"], answer: 3, why: "Kinyesi cha watoto kinapaswa kuwa chooni; kisha nawa mikono." },
          { objective: "O6", q: "Mtoto wako anaharisha, macho yamezama, na ngozi ikibanwa inarudi polepole. Unafanya nini?", options: ["Kusubiri siku mbili", "Kuacha vinywaji vyote", "Kwenda kliniki sasa hivi na kuuliza jinsi ya kutoa ORS njiani", "Kumpa dawa ya mtu mzima"], answer: 2, why: "Hizi ni dalili za upungufu wa maji mwilini; mhudumu wa afya lazima amwone mtoto sasa hivi." },
          { objective: "O6", q: "ORS inafanya nini?", options: ["Inaua mbu", "Inarudisha maji na chumvi zilizopotea kwa kuhara", "Inasafisha choo", "Inafanya maji yachemke haraka"], answer: 1, why: "ORS inarudisha maji na chumvi ambazo kuhara kunaondoa mwilini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maji Safi, Usafi wa Mazingira na Usafi Binafsi Nyumbani",
    questions: [
      { objective: "O1", q: "Hatari kubwa zaidi kwa usalama wa maji ya kunywa ni ipi?", options: ["Kinyesi kuingia kwenye maji", "Maji baridi", "Maji magumu (yenye madini mengi)", "Maji yenye ladha ya chuma"], answer: 0, why: "WHO inasema vijidudu kutoka kinyesi ndiyo hatari kubwa zaidi kwa maji ya kunywa." },
      { objective: "O1", q: "Swali lipi linakusaidia kupima kisima?", options: ["Ndoo ina rangi gani?", "Kimefunikwa na kiko mbali na vyoo na wanyama?", "Nani alikichimba?", "Kiko karibu na soko?"], answer: 1, why: "Chanzo kilichofunikwa na kilicho mbali na vyoo na wanyama kina uwezekano mdogo wa kubeba kinyesi." },
      { objective: "O1", q: "Kisima kirefu unachotumia kawaida kimeharibika. Unafanya nini?", options: ["Kunywa maji ya mto bila kuyatibu", "Kuacha kunywa", "Kutumia chanzo chako cha akiba na kutibu maji kabla ya kunywa", "Kutumia maji ya kufulia"], answer: 2, why: "Chanzo cha akiba pamoja na kutibu kunaweka maji ya kunywa salama zaidi chanzo kikuu kinaposhindwa." },
      { objective: "O2", q: "Njia zipi mbili zinafanya maji ya kunywa kuwa salama zaidi nyumbani?", options: ["Kuweka sukari au chumvi", "Kuyaacha juani kwa saa moja au kuyatikisa", "Kuyapoza au kuyagandisha", "Kuyachemsha, au kutumia dawa ya klorini inayouzwa kwa ajili ya maji"], answer: 3, why: "Kuchemsha na dawa za klorini vinaua vijidudu; njia nyingine haziui." },
      { objective: "O2", q: "Je, kumimina maji yenye tope kupitia kitambaa kunayafanya salama?", options: ["Hapana; kunaondoa uchafu, lakini bado unachemsha au kuweka klorini", "Ndiyo, kila wakati", "Kama kitambaa ni kipya tu", "Ndiyo, ukifanya mara mbili"], answer: 0, why: "Kitambaa kinaondoa uchafu, si vijidudu vyote; bado unahitaji kuchemsha au kutumia klorini." },
      { objective: "O2", q: "Una dawa ya klorini lakini umepoteza kifurushi chenye maelekezo. Unafanya nini?", options: ["Kukisia kiasi", "Kuweka nyingi ili kuwa salama", "Kumuuliza mhudumu wa afya wa jamii au kliniki jinsi ya kuitumia", "Kunywa mara moja baada ya kuiweka"], answer: 2, why: "Kiasi sahihi na muda wa kusubiri ni muhimu; mhudumu wa afya anaweza kukuambia." },
      { objective: "O2", q: "Kabla ya kuchanganya maziwa ya kopo ya mtoto, maji yanapaswa kuwa...", options: ["Moja kwa moja kutoka mtoni", "Yaliyotibiwa: yaliyochemshwa na kupozwa, au yaliyotibiwa kwa usalama", "Ya moto kwa jua", "Maji yoyote tu"], answer: 1, why: "Watoto wachanga wako hatarini zaidi; maji yao lazima yatibiwe kwanza." },
      { objective: "O3", q: "Chombo kipi cha maji ya kunywa ni bora zaidi?", options: ["Ndoo iliyo wazi sakafuni", "Chombo kilichotumika kwa mafuta ya taa au petroli", "Chombo safi kilichofunikwa chenye mdomo mwembamba au bomba, kilicho juu si sakafuni", "Sufuria yoyote"], answer: 2, why: "Safi, kilichofunikwa na kilicho juu ya sakafu kinaweka maji yaliyotibiwa salama." },
      { objective: "O3", q: "Kwa nini mtu yeyote asichovye kikombe kwenye maji ya kunywa?", options: ["Mikono na vikombe huleta vijidudu kwenye maji safi", "Kunapoteza maji", "Kunapiga kelele", "Ni utovu wa adabu"], answer: 0, why: "Kuchovya kunabeba vijidudu kutoka mikononi na vikombeni hadi kwenye chombo kizima." },
      { objective: "O3", q: "Uoshe chombo cha maji mara ngapi?", options: ["Kamwe", "Mara moja kwa mwaka", "Kinaponuka tu", "Mara kwa mara, kwa sabuni na maji salama, kisha kikauke kikiwa kimepinduliwa"], answer: 3, why: "Kuosha mara kwa mara kunazuia vijidudu kujikusanya ndani ya chombo." },
      { objective: "O4", q: "Ipi ni wakati muhimu wa kunawa mikono?", options: ["Kabla ya kumlisha mtoto", "Baada ya kutazama televisheni", "Kabla ya kulala tu", "Baada ya kunywa maji"], answer: 0, why: "Mikono safi kabla ya kumlisha mtoto inazuia vijidudu kuingia mdomoni mwa mtoto." },
      { objective: "O4", q: "Unasugua sehemu zipi za mikono?", options: ["Ncha za vidole tu", "Viganja, migongo ya mikono, katikati ya vidole na chini ya kucha", "Viganja tu", "Mkono wa kulia tu"], answer: 1, why: "Vijidudu hujificha kila sehemu ya mkono, kwa hiyo zisugue zote." },
      { objective: "O4", q: "Huna bomba nyumbani. Unawezaje kunawa mikono kwa maji yanayotiririka?", options: ["Kuchovya mikono kwenye ndoo ya maji ya kunywa", "Kuifuta kwa kitambaa tu", "Kutengeneza kituo kwa dumu au chupa inayomimina, na sabuni kwenye kamba", "Kuacha kunawa"], answer: 2, why: "Kituo rahisi kinatoa maji yanayotiririka ya kunawa bila kuharibu maji yaliyohifadhiwa." },
      { objective: "O5", q: "Choo kipi WHO na UNICEF huhesabu kuwa salama zaidi?", options: ["Shamba lililo mbali na nyumba", "Ndoo inayomwagwa kwenye mtaro", "Shimo lisilo na sakafu imara", "Choo cha shimo chenye sakafu imara, au choo cha kuvuta maji au cha kumwagia maji"], answer: 3, why: "Hivi vinatenganisha kinyesi na watu; shimo lisilo na sakafu imara au mashamba ya wazi hayatenganishi." },
      { objective: "O5", q: "Nini kinapaswa kuwa karibu na choo kila wakati?", options: ["Sabuni na maji ya kunawa mikono", "Chombo cha maji ya kunywa", "Chakula", "Hakuna kitu"], answer: 0, why: "Kunawa mikono mara baada ya choo kunazuia vijidudu kuenea." },
      { objective: "O5", q: "Kwa nini kinyesi cha watoto ni hatari?", options: ["Si hatari", "Kinabeba vijidudu kama kinyesi cha watu wazima", "Kwa sababu ya harufu tu", "Mtoto akiwa mgonjwa tu"], answer: 1, why: "Kinyesi cha watoto kinabeba vijidudu vile vile na lazima kiende chooni." },
      { objective: "O6", q: "Kipi kati ya hivi kinahitaji kliniki sasa hivi?", options: ["Choo kimoja laini na mtoto anacheza", "Mtoto mwenye kiu baada ya kukimbia", "Damu kwenye choo", "Mtoto anayetaka kula"], answer: 2, why: "Damu kwenye choo ni dalili ya hatari inayohitaji mhudumu wa afya." },
      { objective: "O6", q: "Kwa nini usisubiri mtu akiwa na dalili za kipindupindu?", options: ["Kwa sababu ni aibu", "Kwa sababu kliniki hufungwa mapema", "Huisha chenyewe", "Kipindupindu kinaweza kuua ndani ya saa chache bila huduma"], answer: 3, why: "WHO inasema kipindupindu kinaweza kuua ndani ya saa chache kisipotibiwa." },
      { objective: "O6", q: "Mtoto mchanga anaharisha. Unaendelea kufanya nini wakati unatafuta msaada?", options: ["Kuendelea kunyonyesha", "Kuacha maziwa yote", "Kuacha vinywaji vyote", "Kumpa dawa ya mtu mzima"], answer: 0, why: "Kunyonyesha kunaendelea kumpa mtoto maji na chakula; mhudumu wa afya anashauri mengine." },
      { objective: "O6", q: "Kadi yako ya dalili za hatari inapaswa kuwa na nini?", options: ["PIN yako ya pesa za simu", "Dalili za hatari na jina na namba ya kliniki iliyo karibu au ya mhudumu wa afya", "Orodha ya dawa na vipimo vyake", "Hakuna; utakumbuka"], answer: 1, why: "Wakati wa dharura, dalili na nani wa kumpigia ndivyo unavyohitaji mara moja." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 8, 11, 13, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Chanzo cha maji", objective: "O1", notYet: "Hakuna chanzo kilichochaguliwa, au chanzo cha hatari kimechaguliwa bila sababu.", meets: "Vyanzo vimepangwa pamoja na sababu; kilicho salama zaidi kimechaguliwa kwa kunywa na cha akiba kimetajwa.", exceeds: "Pia anaeleza kinachofanya kila chanzo kiwe hatari (vyoo, wanyama, hakuna kifuniko) na nani wa kumwambia kuhusu chanzo kilichoharibika au kichafu." },
      { name: "Kufanya maji kuwa salama zaidi", objective: "O2", notYet: "Hakuna njia ya kutibu, au njia inayokosa hatua (hakuna muda wa kuchemsha, hakuna muda wa kusubiri wa kifurushi).", meets: "Kuchemsha au dawa ya klorini, pamoja na kutuliza kwanza maji yenye tope, kila hatua na kanuni ya kifurushi.", exceeds: "Njia ya akiba pia imepangwa, na klorini inawekwa mbali na watoto." },
      { name: "Kuhifadhi na kugawa", objective: "O3", notYet: "Chombo kilicho wazi, au kuchovya bado kunaruhusiwa.", meets: "Chombo safi kilichofunikwa, kilicho juu si sakafuni, maji yanamiminwa au kutolewa kwa bomba, kinaoshwa mara kwa mara.", exceeds: "Maji ya kunywa yanawekwa tofauti na maji ya kufulia na kuoga, na kila mtu nyumbani anajua kanuni ya kutochovya." },
      { name: "Kunawa mikono", objective: "O4", notYet: "Hakuna mahali pa kunawa mikono au hakuna sabuni; nyakati muhimu hazipo.", meets: "Mahali penye maji na sabuni karibu na choo au jikoni, na nyakati muhimu zimeandikwa.", exceeds: "Mahali karibu na choo na jikoni pia, na kila mwanafamilia ameonyeshwa kunawa kwa sekunde 20." },
      { name: "Choo na kinyesi cha watoto", objective: "O5", notYet: "Kinyesi kimeachwa wazi au hakuna mpango wa kinyesi cha watoto.", meets: "Choo kinawekwa kikiwa safi na kimefunikwa, na kinyesi cha watoto kinaenda humo kila mara.", exceeds: "Ratiba ya kusafisha imegawanywa kati ya wanafamilia, na sabuni iko karibu na choo." },
      { name: "Kadi ya dalili za hatari", objective: "O6", notYet: "Dalili za hatari chini ya nne, au hakuna mawasiliano ya kliniki.", meets: "Angalau dalili nne za hatari na jina na namba ya kliniki iliyo karibu au ya mhudumu wa afya.", exceeds: "Pia jinsi ya kufika huko na mpango wa pesa za usafiri, bila vipimo vya dawa kwenye kadi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Nyumba zinazotibu maji yote ya kunywa na kuyahifadhi yakiwa yamefunikwa siku 30 baadaye (utafiti wa kufuatilia)",
      "Nyumba zenye mahali pa kunawa mikono penye sabuni siku 30 baadaye",
      "Matukio machache ya kuhara kwa watoto wadogo yanayoripotiwa na familia au wahudumu wa afya wa jamii katika msimu unaofuata",
      "Kufika kliniki haraka zaidi kwa kuhara chenye dalili za hatari, kama wanavyoripoti wahudumu wa afya wa jamii"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Sabuni, chombo cha maji chenye mfuniko, na dumu au chupa kwa ajili ya kituo cha kunawa mikono",
      "Sufuria ya kuchemshia maji, au dawa ya klorini inayouzwa kwa ajili ya maji ya kunywa pamoja na kifurushi chake chenye maelekezo",
      "Karatasi na kalamu kwa ajili ya mpango na kadi ya dalili za hatari",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Inafaa kwa vikundi vya wanawake, vilabu vya akina mama, shule, vikundi vya kidini na ziara za wahudumu wa afya wa jamii; fanyeni jaribio la awali pamoja.",
      "Jengeni kituo cha kunawa mikono pamoja wakati wa Somo la 4; ndiyo sehemu wanafunzi wanayoikumbuka zaidi.",
      "Mwalike mhudumu wa afya wa jamii au muuguzi wa kliniki ya eneo hilo kwenye kipindi cha dalili za hatari na ORS.",
      "Usitoe vipimo vya dawa wala ushauri wa matibabu; peleka maswali yote ya matibabu kwa kliniki, mhudumu wa afya wa jamii au wizara ya afya.",
      "Wakati wa mlipuko wa kipindupindu, tumia ujumbe wa sasa wa wizara ya afya na mahali vilipo vituo vya matibabu.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
