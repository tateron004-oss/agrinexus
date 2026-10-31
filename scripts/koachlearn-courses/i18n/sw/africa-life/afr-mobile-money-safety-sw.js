"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-mobile-money-safety.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Fees and help numbers change: learners read them on their own provider's official channels. No investment advice. Figures are examples only.

const SAF_FRAUD = { name: "The Star, Kenya (27 Machi 2025): aina za kawaida za ulaghai dhidi ya watumiaji wa M-Pesa; ripoti kwa 333, Zuri au kwenye app; Safaricom haiombi PIN yako kamwe", url: "https://www.the-star.co.ke/news/infographics/2025-03-27-common-fraud-schemes-targeting-m-pesa-users" };
const SAF_REV = { name: "Citizen Digital, Kenya: jinsi ya kurudisha malipo ya M-Pesa (tuma SMS ya uthibitisho kwa 456; Till au Paybill isiyo sahihi: piga 100)", url: "https://citizen.digital/news/how-to-easily-reverse-money-on-m-pesa-n295204" };
const MTN_GH = { name: "Shirika la Habari la Ghana (Oktoba 2026): MTN yawaonya wateja wasitoe PIN yao ya MoMo", url: "https://gna.org.gh/2026/10/mtn-cautions-customers-not-to-share-momo-pin/" };
const CBK = { name: "Benki Kuu ya Kenya (inasimamia pesa za simu na inaorodhesha watoa huduma za malipo wenye leseni)", url: "https://www.centralbank.go.ke" };
const CBN_CP = { name: "Benki Kuu ya Nigeria: ulinzi wa watumiaji", url: "https://www.cbn.gov.ng/supervision/cpd.html" };
const BOG = { name: "Benki ya Ghana: taratibu za malalamiko na orodha ya taasisi zenye leseni", url: "https://www.bog.gov.gh" };
const BCEAO_EME = { name: "BCEAO, Benki Kuu ya Mataifa ya Afrika Magharibi: taasisi za pesa za kielektroniki (nchi za XOF kama Senegal na Côte d'Ivoire)", url: "https://www.bceao.int/fr/content/monnaie-electronique" };

module.exports = {
  id: "afr-mobile-money-safety-sw",
  lang: "sw",
  translationOf: "afr-mobile-money-safety",
  category: "Africa: Life and Work",
  name: "Kutumia Pesa za Simu kwa Usalama (M-Pesa, MTN MoMo, Orange Money, Wave)",
  skills: "Kulinda PIN na simu yako, Kukagua jina kabla ya kutuma, Kutumia mawakala na ada kwa usalama, Kutambua ulaghai wa pesa za simu, Kuchukua hatua haraka baada ya kutuma vibaya au ulaghai, Kuandika mpango wako wa usalama",
  outcome: "kutuma, kupokea na kulipa kwa pesa za simu kwa usalama: kulinda PIN yako, kukagua jina kabla ya kuthibitisha, kutambua ulaghai wa kawaida, kuchukua hatua haraka baada ya kutuma vibaya au ulaghai, na kuwa na mpango wa usalama wa ukurasa mmoja kwa ajili yako na familia yako.",
  about: [
    "Pesa za simu ndiyo njia ambayo mamilioni ya watu barani Afrika wanatuma, wanaweka akiba na wanalipa kila siku: M-Pesa nchini Kenya, MTN MoMo nchini Ghana na Nigeria, Orange Money nchini Côte d'Ivoire na Cameroon, Wave nchini Senegal, na pochi za simu nchini Misri na Moroko. Ni za haraka na zenye manufaa, na walaghai wanajua hilo pia.",
    "Kozi hii ni kwa wafanyabiashara, wazazi, wanafunzi, wafanyakazi na yeyote anayetumia simu ya kawaida au simu janja kwa pesa. Utajifunza jinsi pochi yako, PIN yako na wakala wanavyofanya kazi, jinsi ya kukagua kila malipo kabla ya kuthibitisha, hila za walaghai, na nini hasa cha kufanya pesa zikienda kwa mtu asiye sahihi.",
    "Kila somo linachukua kama dakika tano. Lisome, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" kwenye simu yako mwenyewe, bila kuandika PIN yako halisi kwa mazoezi kamwe. Kuna jaribio fupi baada ya kila somo na kila sura, na mtihani wa maswali 20 mwishoni. Ada, vikomo na namba za msaada hubadilika, kwa hiyo utajifunza kuzisoma kwenye njia rasmi za mtoa huduma wako."
  ],
  finalTask: "Andika mpango wa usalama wa pesa za simu wa ukurasa mmoja kwa ajili yako au familia yako: kanuni zako za PIN na kufunga simu, jinsi unavyokagua jina kabla ya kutuma, njia rasmi za msaada na za kuripoti ulaghai za mtoa huduma wako (zilizonakiliwa kutoka tovuti rasmi, app au pakiti ya SIM), dalili sita za hatari za ulaghai, unachofanya katika saa ya kwanza baada ya kutuma vibaya au ulaghai, na ukaguzi wa taarifa ya akaunti kila mwezi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana kote Afrika, mijini na vijijini: wafanyabiashara wa sokoni, madereva wa boda boda na okada, wazazi, wanafunzi, wafanyakazi na wamiliki wa biashara ndogo wanaotuma, wanaopokea na wanaolipa kwa pesa za simu. Mifano kutoka Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Misri na Moroko.",
    startingPoint: "Wengi tayari wanatuma na kupokea pesa kwa menyu ya USSD (*xxx#) au app. Wengi hawajawahi kusoma jedwali la ada, hawajui jinsi ya kurudisha pesa zilizotumwa vibaya, wanashiriki simu au PIN na familia, au wamewahi kulengwa na simu au SMS ya ulaghai.",
    gap: "Watu wanapoteza pesa kwa ujumbe bandia wa kurudisha pesa, maombi ya PIN na misimbo, mawakala bandia na hila za \"namba isiyo sahihi\", na wengi hawajui hatua za haraka na rasmi baada ya kutuma vibaya. Wanafunzi wanahitaji tabia na mpango ulioandikwa unaolinda pesa zao na za familia zao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; imetafsiriwa kwa Kifaransa na Kiarabu",
      "Vifaa: wengi wanatumia simu ya kawaida yenye menyu za USSD; data ni ghali",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na siku za soko",
      "Ada, vikomo na namba za msaada zinatofautiana kwa nchi na hubadilika: zisome kila wakati kwenye njia rasmi za mtoa huduma",
      "Usiandike kamwe PIN halisi, nywila au msimbo wa mara moja katika zoezi lolote"
    ],
    prerequisites: "Akaunti ya pesa za simu, au simu ya mwanafamilia ili kuangalia menyu pamoja (bila PIN)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia simu yako na akaunti yako ya pesa za simu", action: "kuweka PIN isiyo rahisi kukisia, kufunga simu yako na kuitunza PIN kuwa siri yako", standard: "bila kumpa mtu yeyote PIN, hata familia au mtu anayesema ni mfanyakazi wa kampuni" },
    { id: "O2", condition: "Unapotuma pesa, kumlipa mfanyabiashara au kutumia wakala", action: "kukagua jina la mpokeaji, namba na kiasi kwenye skrini ya uthibitisho kabla ya kuweka PIN yako, na kuhifadhi ujumbe wa uthibitisho", standard: "kila wakati, na kusimama ikiwa kitu chochote hakilingani" },
    { id: "O3", condition: "Ukipewa simu au jumbe sita kuhusu pesa za simu", action: "kutambua zipi ni ulaghai na kutaja dalili ya hatari katika kila moja", standard: "ukipata angalau 5 kati ya 6 sahihi" },
    { id: "O4", condition: "Baada ya pesa kwenda kwa namba isiyo sahihi au ukishuku ulaghai", action: "kuripoti kupitia njia rasmi za mtoa huduma wako na kufuata hatua za kurudisha pesa", standard: "siku hiyo hiyo, ukihifadhi ujumbe wa awali wa uthibitisho na bila kutumia namba uliyopewa na mtu usiyemjua" },
    { id: "O5", condition: "Ukitumia ulichojifunza na tovuti rasmi au pakiti ya SIM ya mtoa huduma wako", action: "kuandika mpango wa usalama wa pesa za simu wa ukurasa mmoja kwa ajili yako au familia yako", standard: "unaojumuisha kanuni za PIN, ukaguzi wa jina, njia rasmi za msaada, dalili za ulaghai, hatua za saa ya kwanza na ukaguzi wa taarifa ya akaunti kila mwezi" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi pesa za simu zinavyofanya kazi, na kuzitumia kwa usalama",
      lessons: [
        {
          title: "Pochi yako, PIN yako na simu yako",
          objectives: ["O1"],
          minutes: 5,
          goal: "Weka PIN imara, funga simu yako na utaje watu ambao hawapaswi kamwe kupata PIN yako.",
          text: [
            "Pochi ya pesa za simu ni akaunti iliyounganishwa na kadi yako ya SIM. Unaweka pesa taslimu kwa wakala, unazituma, unalipa nazo, na unazitoa tena. PIN yako (namba ya siri ya utambulisho) ndiyo ufunguo wa pochi. Yeyote mwenye simu yako na PIN yako anaweza kuimaliza pochi yote.",
            "Chagua PIN isiyo rahisi kukisia: si mwaka wako wa kuzaliwa, si 1234 au 0000, si tarakimu za mwisho za namba yako ya simu. Funika vitufe unapoiandika kwa wakala au ndani ya matatu au soko lenye watu wengi. Funga simu yenyewe kwa PIN, mchoro au alama ya kidole, na kama simu yako inaruhusu, weka pia PIN ya SIM, ili mwizi asiweze kuweka SIM yako kwenye simu nyingine.",
            "Usimpe mtu yeyote PIN yako ya pesa za simu au msimbo wa mara moja: si rafiki, si mtoto, si wakala, na si mpigaji simu anayesema anatoka Safaricom, MTN, Orange au Wave. Watoa huduma wanasema wazi kwamba wafanyakazi wao hawataomba PIN yako kamwe. Mtu akiiomba, ni ulaghai.",
            "Simu yako ikipotea au kuibiwa, au laini yako ikiacha kufanya kazi ghafla, mpigie mtoa huduma wako mara moja kutoka simu nyingine ili azuie SIM na pochi. Laini inayokufa bila sababu inaweza kuwa SIM swap, ambapo mhalifu anahamisha namba yako kwenda SIM yake."
          ],
          steps: ["Badilisha PIN yako kwenye menyu kama ni rahisi kukisia (mwaka wa kuzaliwa, 1234, namba zinazojirudia).", "Weka kifungo cha skrini kwenye simu yako.", "Washa PIN ya SIM kama simu yako inayo.", "Funika vitufe unapoandika PIN yako.", "Andika namba rasmi ya msaada ya mtoa huduma wako kwenye karatasi, si kutoka ujumbe wa mtu usiyemjua.", "Simu ikipotea au laini ikifa, mpigie mtoa huduma kutoka simu nyingine ili aizuie."],
          words: [["Pochi", "akaunti yako ya pesa za simu, iliyounganishwa na kadi yako ya SIM."], ["PIN", "namba ya siri ya utambulisho (personal identification number): namba inayokuruhusu kutumia pochi yako."], ["SIM swap", "namba yako ya simu inapohamishiwa kwenye kadi mpya ya SIM; wahalifu hujaribu hili ili kuchukua pochi yako."]],
          slides: [
            { title: "PIN yako ndiyo ufunguo", bullets: ["Simu + PIN = kufikia pesa zako zote", "Si mwaka wa kuzaliwa, 1234 au 0000", "Funika vitufe unapoiandika"] },
            { title: "Funga simu na SIM", bullets: ["Kifungo cha skrini: PIN, mchoro au alama ya kidole", "PIN ya SIM kama simu yako inayo", "Hivyo wezi hawawezi kutumia SIM yako kwingine"] },
            { title: "Usiitoe kamwe", bullets: ["Si kwa marafiki, watoto, mawakala wala wapigaji simu", "Wafanyakazi halisi hawaombi PIN yako kamwe", "Yeyote anayeiomba ni mlaghai"] },
            { title: "Simu imepotea au laini imekufa?", bullets: ["Mpigie mtoa huduma mara moja kutoka simu nyingine", "Zuia SIM na pochi", "Laini inayokufa bila sababu inaweza kuwa SIM swap"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Fikiria PIN yako kichwani (usiiandike wala usimwambie mtu). Je, ni mwaka wako wa kuzaliwa, 1234 au namba inayojirudia? Kama ndiyo, ibadilishe kwenye menyu leo. Kisha hakikisha simu yako ina kifungo cha skrini.",
          youCanNow: "kuweka PIN isiyo rahisi kukisia, kufunga simu na SIM yako, na kumkatalia yeyote anayeomba PIN yako.",
          quickCheck: [
            { objective: "O1", q: "PIN ipi ni salama zaidi?", options: ["1990, mwaka wako wa kuzaliwa", "1234", "Namba isiyohusiana na siku yako ya kuzaliwa wala namba yako ya simu", "Tarakimu nne za mwisho za namba yako ya simu"], answer: 2, why: "PIN isiyohusiana na mambo yanayojulikana kukuhusu ni ngumu kwa wengine kuikisia." },
            { objective: "O1", q: "Mpigaji simu anasema anatoka kwa mtoa huduma wako wa pesa za simu na anahitaji PIN yako kurekebisha akaunti yako. Unafanya nini?", options: ["Kukata simu; wafanyakazi halisi hawaombi PIN yako kamwe", "Kumpa PIN, kisha kuibadilisha baadaye", "Kumpa tarakimu mbili za kwanza tu", "Kumtumia msimbo kutoka simu yako badala yake"], answer: 0, why: "Watoa huduma hawaombi PIN yako wala misimbo kamwe; yeyote anayeomba ni mlaghai." }
          ]
        },
        {
          title: "Kutuma na kulipa: kagua jina kabla ya PIN",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kagua jina, namba na kiasi kwenye skrini ya uthibitisho kabla ya kuweka PIN yako.",
          text: [
            "Makosa mengi na ulaghai mwingi unaweza kuzuiwa mahali pamoja: skrini ya uthibitisho. Kabla ya kuandika PIN yako, simu yako inaonyesha unamlipa nani na kiasi gani. Nchini Kenya, M-Pesa inaonyesha jina la namba, till au Paybill; watoa huduma wengine wanaonyesha jina au jina la mfanyabiashara pia.",
            "Isome polepole. Je, ni mtu au duka sahihi? Je, kiasi ni sahihi? 5,000 si 50,000. Unapolipa duka, chukua namba ya till, ya mfanyabiashara au Paybill kutoka bango au risiti dukani, si kutoka namba ambayo mtu anakutumia.",
            "Jina likiwa si sahihi au la ajabu, ghairi. Usiweke PIN yako \"ili kuona kitakachotokea\". Baada ya kulipa, hifadhi ujumbe wa uthibitisho (SMS) hadi uwe na uhakika kwamba mtu au duka limepokea pesa. Ndio ushahidi wako.",
            "Mfano: Ama huko Kumasi anamlipa msambazaji GHS 600 kwa MTN MoMo. Skrini inaonyesha jina tofauti na la msambazaji. Anaghairi, anampigia msambazaji kwa namba aliyonayo tayari, na anagundua aliandika tarakimu moja vibaya."
          ],
          steps: ["Andika namba, msimbo wa mfanyabiashara au till.", "Andika kiasi na ukisome mara mbili.", "Kwenye skrini ya uthibitisho, soma jina, namba na kiasi.", "Kitu chochote kisipolingana, ghairi.", "Vyote vikilingana, funika vitufe na uandike PIN yako.", "Hifadhi SMS ya uthibitisho kama ushahidi."],
          words: [["Skrini ya uthibitisho", "skrini inayoonyesha unamlipa nani na kiasi gani, kabla ya kuweka PIN yako."], ["Till / msimbo wa mfanyabiashara / Paybill", "namba ambazo maduka na makampuni hutumia kupokea malipo."], ["SMS ya uthibitisho", "ujumbe ambao mtoa huduma wako anakutumia baada ya malipo; ushahidi wako."]],
          slides: [
            { title: "Simama kwenye skrini ya uthibitisho", bullets: ["Inaonyesha jina, namba na kiasi", "Isome polepole, kabla ya PIN", "5,000 si 50,000"] },
            { title: "Kulipa duka", bullets: ["Chukua till au msimbo wa mfanyabiashara kutoka bango la duka", "Si kutoka namba ambayo mtu anakutumia", "Kagua jina la duka kwenye skrini"] },
            { title: "Kuna kosa? Ghairi", bullets: ["Usiweke PIN ili kuona kitakachotokea", "Mpigie mtu huyo kwa namba uliyonayo tayari", "Kisha jaribu tena kwa uangalifu"] },
            { title: "Hifadhi ushahidi wako", bullets: ["Hifadhi SMS ya uthibitisho", "Hadi pesa zipokelewe salama", "Unaihitaji kwa kurudisha pesa yoyote"] }
          ],
          sources: [SAF_REV],
          tryIt: "Wakati ujao unapotuma pesa au kulipa, simama kwenye skrini ya uthibitisho na useme jina, namba na kiasi kwa sauti kabla ya kuandika PIN yako. Kisha tafuta SMS ya uthibitisho na usiifute.",
          youCanNow: "kukagua jina, namba na kiasi kabla ya kuweka PIN yako, na kuhifadhi ujumbe wa uthibitisho kama ushahidi.",
          quickCheck: [
            { objective: "O2", q: "Skrini ya uthibitisho inaonyesha jina usilolijua. Unafanya nini?", options: ["Kuweka PIN; majina mara nyingi si sahihi", "Kuweka PIN na kuuliza baadaye", "Kutuma kiasi kidogo kwanza", "Kughairi na kukagua namba na mtu huyo"], answer: 3, why: "Jina la ajabu linamaanisha namba isiyo sahihi au hila; ghairi kabla ya PIN." },
            { objective: "O2", q: "Kwa nini uhifadhi SMS ya uthibitisho baada ya kulipa?", options: ["Ni ushahidi wako kitu kikienda vibaya", "Inakupa pointi", "Sheria inasema uifute", "Inafanya malipo yajayo yawe nafuu"], answer: 0, why: "Ujumbe wa uthibitisho unathibitisha malipo na unahitajika kwa kurudisha pesa au malalamiko." }
          ]
        },
        {
          title: "Mawakala, ada na kumbukumbu zako",
          objectives: ["O2", "O5"],
          minutes: 5,
          goal: "Soma ada ya muamala kutoka jedwali rasmi la ada la mtoa huduma wako na utoe pesa kwa wakala kwa usalama.",
          text: [
            "Wakala ni duka ambapo unaweka pesa taslimu kwenye pochi yako (kuweka pesa) au unatoa pesa taslimu (kutoa pesa). Tumia wakala aliyesajiliwa mwenye bango la mtoa huduma na namba ya wakala. Fanya muamala wewe mwenyewe kwenye simu yako unapoweza, na uhesabu pesa kabla ya kuondoka.",
            "Ada zinategemea mtoa huduma, nchi, kiasi na aina ya muamala. Usikisie na usiamini ada ambayo mtu anakuambia. Soma jedwali rasmi la ada kwenye tovuti au app ya mtoa huduma, dukani, au kwa kupiga menyu. Apps nyingi pia zinaonyesha ada kabla ya kuthibitisha. Kutuma kwa mtu wa mtandao mwingine au kwenda benki kunaweza kugharimu zaidi.",
            "Wakala bandia anaweza kusema \"nipe simu yako, nitakufanyia\", au kuomba PIN yako. Usimpe mtu simu yako pamoja na PIN kamwe. Mawakala halisi hawaihitaji.",
            "Mara moja kwa mwezi, soma taarifa fupi au taarifa kamili ya akaunti kutoka menyu au app. Tafuta malipo usiyoyatambua. Mfano: Moussa, fundi cherehani huko Dakar, anakagua historia yake ya Wave kila mwisho wa mwezi na anaandika jumla aliyotuma na jumla aliyopokea kwenye daftari. Namba katika kozi hii ni mifano tu."
          ],
          steps: ["Tafuta jedwali rasmi la ada kwenye tovuti, app au bango dukani la mtoa huduma.", "Angalia ada ya kiasi unachotaka kutuma au kutoa.", "Kwa wakala, kagua bango na namba ya wakala.", "Anza kutoa pesa kwenye simu yako mwenyewe; kagua jina la wakala kwenye skrini.", "Hesabu pesa kabla ya kuondoka.", "Soma taarifa ya akaunti yako mara moja kwa mwezi."],
          words: [["Wakala", "duka lililosajiliwa linaloweka na kutoa pesa taslimu kwa niaba ya mtoa huduma wa pesa za simu."], ["Jedwali la ada", "orodha rasmi ya ada kwa kila aina na ukubwa wa muamala."], ["Taarifa fupi (mini statement)", "orodha fupi ya miamala yako michache ya mwisho, kutoka menyu au app."]],
          slides: [
            { title: "Kutumia wakala", bullets: ["Wakala aliyesajiliwa: bango la mtoa huduma na namba ya wakala", "Anza kwenye simu yako mwenyewe; kagua jina", "Hesabu pesa kabla ya kuondoka"] },
            { title: "Ada: soma, usikisie", bullets: ["Zinategemea mtoa huduma, nchi, kiasi na aina", "Jedwali rasmi: tovuti, app, bango dukani", "Mitandao mingine au benki inaweza kugharimu zaidi"] },
            { title: "Dalili za wakala bandia", bullets: ["\"Nipe simu yako, nitakufanyia\"", "Anaomba PIN yako", "Hana bango wala namba ya wakala"] },
            { title: "Ukaguzi wa kila mwezi", bullets: ["Soma taarifa ya akaunti kutoka menyu au app", "Tafuta malipo usiyoyajua", "Andika jumla uliyotuma na uliyopokea"] }
          ],
          sources: [CBK, BCEAO_EME],
          tryIt: "Tafuta jedwali rasmi la ada la mtoa huduma wako (tovuti, app au bango dukani). Andika ada ya kutuma kiasi kimoja unachotuma mara nyingi, kwa mfano KES 1,000, NGN 5,000, GHS 100 au XOF 10,000. Kisha fungua taarifa fupi ya akaunti yako na ukague kila mstari.",
          youCanNow: "kusoma ada halisi kutoka jedwali rasmi, kutumia wakala kwa usalama na kukagua taarifa ya akaunti yako kuona malipo ya ajabu.",
          quickCheck: [
            { objective: "O2", q: "Kwa wakala, wakala anaomba simu yako na PIN \"ili iwe haraka\". Unafanya nini?", options: ["Kumpa; mawakala ni wa kuaminika", "Kumpa simu lakini si PIN", "Kufanya mwenyewe na kuitunza PIN yako kuwa siri", "Kumwandikia wakala PIN kwenye karatasi"], answer: 2, why: "Mawakala halisi hawahitaji PIN yako kamwe; wewe mwenyewe unaanza na kuthibitisha muamala." },
            { objective: "O5", q: "Unapata wapi ada halisi ya kutuma pesa?", options: ["Anachokuambia mtu usiyemjua", "Jedwali rasmi la ada la mtoa huduma, app au bango dukani", "Ujumbe uliosambazwa kwenye WhatsApp", "Makisio ya jirani yako"], answer: 1, why: "Ada hubadilika na zinatofautiana kwa nchi, kwa hiyo zisome kwenye njia rasmi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi pesa za simu zinavyofanya kazi, na kuzitumia kwa usalama",
        questions: [
          { objective: "O1", q: "Nani anapaswa kujua PIN yako ya pesa za simu?", options: ["Wewe na wakala", "Familia yako yote", "Wewe peke yako", "Wewe na huduma kwa wateja"], answer: 2, why: "Wewe peke yako; wafanyakazi, mawakala na familia hawaihitaji kamwe." },
          { objective: "O1", q: "Laini yako inaacha kufanya kazi ghafla na hukubadilisha chochote. Inaweza kuwa nini, na unafanya nini?", options: ["SIM swap; mpigie mtoa huduma kutoka simu nyingine aizuie", "Betri imeisha; chaji simu", "Ni sikukuu; subiri wiki moja", "Hakuna; itarudi yenyewe"], answer: 0, why: "Laini iliyokufa inaweza kumaanisha mhalifu amehamisha namba yako; kuzuia haraka kunalinda pochi yako." },
          { objective: "O2", q: "Wakati gani sahihi wa kukagua unamlipa nani?", options: ["Baada ya kuweka PIN", "Kwenye skrini ya uthibitisho, kabla ya PIN", "Siku inayofuata", "Kwa kiasi kikubwa tu"], answer: 1, why: "PIN ikishawekwa pesa zinaondoka; ukaguzi lazima uje kwanza." },
          { objective: "O2", q: "Unalipa duka. Till au msimbo wa mfanyabiashara unapaswa kutoka wapi?", options: ["Ujumbe kutoka namba usiyoijua", "Mpigaji simu anayesema duka limebadilisha namba", "Status ya WhatsApp", "Bango au risiti dukani"], answer: 3, why: "Walaghai hutuma namba bandia za malipo; ichukue kutoka duka lenyewe na ukague jina kwenye skrini." },
          { objective: "O5", q: "Kwa nini usome taarifa ya akaunti yako mara moja kwa mwezi?", options: ["Kupata malipo usiyoyatambua", "Kupunguza ada zako", "Kubadilisha namba yako", "Kwa sababu mtoa huduma anakulipa kufanya hivyo"], answer: 0, why: "Ukaguzi wa kila mwezi unagundua ulaghai na makosa mapema." }
        ]
      }
    },
    {
      name: "Sura 2: Ulaghai, makosa na mpango wako wa usalama",
      lessons: [
        {
          title: "Kutambua ulaghai wa pesa za simu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tambua aina sita za kawaida za ulaghai wa pesa za simu na dalili ya hatari katika kila moja.",
          text: [
            "Walaghai wanatumia simu, SMS, WhatsApp na mitandao ya kijamii. Wanajifanya kuwa mtoa huduma wako, ndugu, wakala, mnunuzi au kampuni yenye kazi. Hila hubadilika, lakini dalili za hatari zinabaki zile zile.",
            "1. Kurudisha pesa bandia: unapata SMS inayoonekana kama malipo kwako, kisha simu: \"Nimekutumia pesa kwa makosa, tafadhali nirudishie.\" Kagua salio lako halisi kwanza. Mara nyingi hakuna pesa zilizofika; SMS ilitoka namba ya kawaida ya simu, si kwa mtoa huduma. 2. Kuomba PIN au msimbo: yeyote anayeomba PIN yako au msimbo wa mara moja. 3. Wafanyakazi bandia: \"Akaunti yako itazuiwa usipopiga msimbo huu au kutuambia maelezo yako.\" 4. Zawadi au promosheni: \"Umeshinda, tuma ada ili upokee zawadi yako.\" 5. Kazi au mkopo bandia: ofa inayokuomba ulipe ada kwanza. 6. Ujumbe wa haraka wa familia: \"Mama, nimepata matatizo, tuma pesa kwa namba hii mpya.\"",
            "Jumbe halisi za mtoa huduma zinatoka kwa jina lake rasmi au namba fupi rasmi, si namba ya kawaida ya simu. Watoa huduma hawakuombi upige misimbo ili kurekebisha akaunti yako au kushinda zawadi. Kitu kikionekana cha haraka, simama. Mpigie mtu huyo au mtoa huduma tena kwa namba unayoijua tayari.",
            "Mfano: Chinedu huko Enugu anapata SMS inayosema NGN 20,000 zimefika, kisha simu ikimwomba azirudishe. Anakagua salio lake kwenye app: hakuna kilichofika. Anakata simu na kuripoti namba hiyo."
          ],
          steps: ["Kagua mtumaji: jina rasmi au namba fupi, au namba ya kawaida?", "Kagua salio lako halisi kwenye menyu au app.", "Jiulize: wanaomba PIN yangu, msimbo, ada, au wananiharakisha?", "Simama na upige tena kwa namba unayoijua tayari.", "Ripoti namba ya mlaghai kwa mtoa huduma wako."],
          words: [["Kurudisha pesa bandia", "hila ambapo mtu anajifanya alikutumia pesa kwa makosa na anakuomba uzirudishe."], ["Msimbo wa mara moja (OTP)", "msimbo mfupi unaotumwa kwenye simu yako ili kuthibitisha kitendo; usiutoe kamwe."], ["Namba fupi", "namba fupi rasmi ambayo mtoa huduma anatumia kutuma jumbe."]],
          slides: [
            { title: "Ulaghai sita wa kawaida", bullets: ["Kurudisha pesa bandia; kuomba PIN au msimbo; wafanyakazi bandia", "Zawadi inayohitaji ada; kazi au mkopo unaohitaji ada", "Ujumbe wa haraka wa familia kutoka namba mpya"] },
            { title: "Kurudisha pesa bandia", bullets: ["SMS inaonekana kama pesa zimefika", "Simu: \"Nimetuma kwa makosa, nirudishie\"", "Kagua salio lako halisi: mara nyingi hakuna kilichofika"] },
            { title: "Dalili za hatari", bullets: ["Anaomba PIN au msimbo", "Anaomba ada kwanza", "Anakuharakisha; anatoka namba ya kawaida"] },
            { title: "Cha kufanya", bullets: ["Simama. Kagua salio lako", "Piga tena kwa namba unayoijua tayari", "Ripoti namba kwa mtoa huduma wako"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Pitia sanduku lako la SMS kutafuta jumbe kuhusu pesa. Kwa kila mmoja, amua: namba fupi rasmi au namba ya kawaida? Unaomba PIN, msimbo, ada au haraka? Andika dalili zozote za ulaghai unazopata.",
          youCanNow: "kutambua aina sita za kawaida za ulaghai wa pesa za simu na kutaja dalili ya hatari katika kila moja.",
          quickCheck: [
            { objective: "O3", q: "SMS kutoka namba ya kawaida ya simu inasema umepokea XAF 25,000. Kisha mpigaji simu anakuomba uzirudishe. Unafanya nini kwanza?", options: ["Kuzirudisha haraka ili uwe mwaminifu", "Kukagua salio lako halisi kwenye menyu au app", "Kumpa mpigaji PIN yako ili azirudishe", "Kuwatumia marafiki SMS hiyo"], answer: 1, why: "SMS bandia za kurudisha pesa zinatoka namba za kawaida; salio lako halisi linaonyesha ukweli." },
            { objective: "O3", q: "Ujumbe unasema umeshinda simu na lazima ulipe ada ya kusafirisha kwanza. Dalili ya hatari ni ipi?", options: ["Unataja simu", "Ulikuja jioni", "Unakuomba ulipe ada ili upate zawadi", "Unatumia jina lako la kwanza"], answer: 2, why: "Zawadi halisi hazihitaji ada kwanza; kulipa ili upokee ni ulaghai unaojulikana sana." }
          ]
        },
        {
          title: "Kutuma vibaya au ulaghai: saa ya kwanza",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ripoti pesa zilizotumwa vibaya au ulaghai kupitia njia rasmi za mtoa huduma wako siku hiyo hiyo.",
          text: [
            "Chukua hatua haraka. Kurudisha pesa ni rahisi zaidi pesa zikiwa bado kwenye pochi ya mtu mwingine. Hifadhi SMS ya awali ya uthibitisho; usiifute wala usiibadilishe.",
            "Tumia njia rasmi tu: namba ya msaada iliyochapishwa kwenye pakiti ya SIM au tovuti ya mtoa huduma, app rasmi, namba fupi rasmi, au duka la mtoa huduma. Usitumie kamwe namba kutoka kwa mtu usiyemjua au maoni kwenye mitandao ya kijamii, na usimlipe kamwe mtu anayejitolea \"kurejesha\" pesa zako kwa ada.",
            "Mfano kutoka Kenya: njia zilizotangazwa na Safaricom ni pamoja na kutuma SMS ya uthibitisho ya M-Pesa kwa 456 kuomba pesa zilizokwenda kwa mtu asiye sahihi zirudishwe, kupiga 100 kwa till au Paybill isiyo sahihi, na kutuma namba au ujumbe wa ulaghai kwa 333. Watoa huduma wengine wana hatua zao; zisome kwenye tovuti au app rasmi ya mtoa huduma, kwa sababu namba na hatua hubadilika.",
            "Kurudisha pesa hakuna uhakika. Ikiwa mtu huyo ameshatoa pesa na anakataa kuzirudisha, mtoa huduma anaweza kukuambia uende polisi. Ikiwa PIN yako au laini yako iliibiwa, ripoti kwa mtoa huduma kwanza, kisha polisi. Mtoa huduma asipotatua, benki kuu ina utaratibu wa malalamiko ya watumiaji (kwa mfano Benki Kuu ya Nigeria au Benki ya Ghana)."
          ],
          steps: ["Usifute SMS ya uthibitisho.", "Ndani ya saa moja, tumia njia rasmi ya mtoa huduma wako ya kurudisha pesa au ya ulaghai.", "Andika tarehe, saa, kiasi, namba ya muamala na uliyezungumza naye.", "Ikiwa PIN au laini iliibiwa, zuia SIM na pochi kwanza.", "Ikihitajika, ripoti polisi ukiwa na SMS.", "Mtoa huduma asipotatua, tumia utaratibu wa malalamiko wa benki kuu."],
          words: [["Kurudisha pesa (reversal)", "mtoa huduma anaporudisha pesa zilizotumwa kwa namba isiyo sahihi, ikiwa bado zipo."], ["Namba ya muamala (transaction ID)", "msimbo ulio kwenye SMS ya uthibitisho unaotambulisha malipo moja."], ["Ulaghai wa kurejesha pesa", "ofa bandia ya kukurudishia pesa ulizopoteza ukilipa ada."]],
          slides: [
            { title: "Chukua hatua katika saa ya kwanza", bullets: ["Ni rahisi kurudisha pesa zikiwa bado zipo", "Hifadhi SMS ya awali ya uthibitisho", "Andika tarehe, saa, kiasi, namba ya muamala"] },
            { title: "Njia rasmi tu", bullets: ["Namba ya msaada kwenye pakiti ya SIM au tovuti rasmi", "App rasmi, namba fupi au duka la mtoa huduma", "Kamwe namba kutoka kwa mtu usiyemjua"] },
            { title: "Mfano: Kenya (Safaricom)", bullets: ["Mtu asiye sahihi: tuma SMS kwa 456", "Till au Paybill isiyo sahihi: piga 100", "Namba au ujumbe wa ulaghai: tuma kwa 333"] },
            { title: "Isipotatuliwa", bullets: ["Ripoti polisi ukiwa na SMS", "Utaratibu wa malalamiko wa benki kuu", "Usilipe kamwe ada ya \"kurejesha\" pesa"] }
          ],
          sources: [SAF_REV, SAF_FRAUD, CBN_CP, BOG],
          tryIt: "Tafuta hatua rasmi za mtoa huduma wako za kurudisha pesa na kuripoti ulaghai kwenye tovuti, app au pakiti ya SIM. Ziandike kwenye karatasi: namba au msimbo, na cha kutuma. Usizinakili kutoka ujumbe uliosambazwa kwenye WhatsApp.",
          youCanNow: "kuchukua hatua ndani ya saa ya kwanza baada ya kutuma vibaya au ulaghai, ukitumia njia rasmi za mtoa huduma wako tu.",
          quickCheck: [
            { objective: "O4", q: "Umetuma pesa kwa namba isiyo sahihi. Unahifadhi nini?", options: ["Hakuna; futa SMS", "Kiasi tu kichwani mwako", "Picha ya skrini kutoka kwa mtu usiyemjua", "SMS ya awali ya uthibitisho"], answer: 3, why: "Ujumbe wa awali wa uthibitisho una namba ya muamala ambayo mtoa huduma anaihitaji." },
            { objective: "O4", q: "Mtu kwenye Facebook anajitolea kurejesha pesa ulizopoteza kwa ada ndogo. Hii ni nini?", options: ["Ulaghai wa kurejesha pesa; tumia njia rasmi tu", "Huduma ya kusaidia", "Utaratibu wa benki kuu", "Duka la mtoa huduma"], answer: 0, why: "Kumlipa mtu usiyemjua ili arejeshe pesa ni ulaghai wa pili; njia rasmi ni bure." }
          ]
        },
        {
          title: "Mpango wako wa usalama wa pesa za simu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Andika mpango wa usalama wa pesa za simu wa ukurasa mmoja kwa ajili yako au familia yako.",
          text: [
            "Mpango wa usalama unaweka kila kitu kutoka kozi hii kwenye ukurasa mmoja, ili wewe na familia yako mjue cha kufanya kabla kitu hakijaharibika. Uweke kwenye karatasi nyumbani, si kwenye simu peke yake.",
            "Una sehemu sita: 1. Kanuni za PIN na simu (PIN ngumu, kifungo cha skrini, PIN ya SIM, usiitoe kamwe). 2. Ukaguzi wa jina kabla ya kila PIN. 3. Njia rasmi za msaada na za kuripoti ulaghai za mtoa huduma wako, zilizonakiliwa kutoka tovuti, app au pakiti ya SIM. 4. Dalili sita za hatari za ulaghai. 5. Hatua za saa ya kwanza baada ya kutuma vibaya au ulaghai. 6. Ukaguzi wa taarifa ya akaunti kila mwezi, na tarehe.",
            "Ujadili na wazazi wazee na vijana, ambao mara nyingi hulengwa. Kubalianeni kanuni ya familia: \"Hatutumi pesa kamwe kwa namba mpya kwa sababu ya ujumbe wa haraka. Tunapiga kwanza kwa namba ya zamani.\"",
            "Mfano: Fatima, mfanyabiashara huko Casablanca, anaweka mpango wake ndani ya daftari lake la fedha. Kila mwisho wa mwezi anakagua historia ya pochi yake na kuweka alama kwenye tarehe katika mpango."
          ],
          steps: ["Andika kanuni zako za PIN na kufunga simu.", "Andika kanuni ya kukagua jina.", "Nakili njia rasmi za msaada na za ulaghai za mtoa huduma wako kutoka chanzo rasmi.", "Orodhesha dalili sita za hatari za ulaghai.", "Andika hatua zako za saa ya kwanza.", "Weka tarehe ya kila mwezi ya kukagua taarifa ya akaunti yako.", "Usome pamoja na familia yako."],
          words: [["Mpango wa usalama", "orodha fupi iliyoandikwa ya kanuni na hatua zinazolinda pesa zako."]],
          slides: [
            { title: "Ukurasa mmoja, sehemu sita", bullets: ["Kanuni za PIN na simu; ukaguzi wa jina", "Njia rasmi za msaada na za ulaghai", "Dalili za ulaghai; hatua za saa ya kwanza; ukaguzi wa kila mwezi"] },
            { title: "Njia rasmi tu", bullets: ["Zinakili kutoka tovuti, app au pakiti ya SIM", "Si kutoka ujumbe uliosambazwa wala mtu usiyemjua"] },
            { title: "Ushiriki nyumbani", bullets: ["Wazazi na vijana mara nyingi hulengwa", "Kanuni ya familia: piga kwanza kwa namba ya zamani", "Weka mpango kwenye karatasi"] }
          ],
          sources: [CBK, BOG, BCEAO_EME],
          tryIt: "Kazi ya mwisho: andika mpango wako wa usalama wa pesa za simu wa ukurasa mmoja wenye sehemu zote sita. Nakili njia za msaada na za ulaghai za mtoa huduma wako kutoka tovuti rasmi, app au pakiti ya SIM. Usome pamoja na mwanafamilia mmoja.",
          youCanNow: "kuandika na kushiriki mpango wa usalama wa pesa za simu unaokulinda wewe na familia yako.",
          quickCheck: [
            { objective: "O5", q: "Namba za msaada katika mpango wako zinapaswa kutoka wapi?", options: ["Ujumbe uliosambazwa kwenye WhatsApp", "Tovuti rasmi, app au pakiti ya SIM ya mtoa huduma", "Mpigaji simu anayesema ni mfanyakazi", "Maoni kwenye mitandao ya kijamii"], answer: 1, why: "Walaghai husambaza namba bandia za msaada; zinakili kutoka vyanzo rasmi tu." },
            { objective: "O5", q: "Kanuni ipi ya familia inalinda dhidi ya ulaghai wa ujumbe wa haraka?", options: ["Tuma haraka kila wakati kukiwa na dharura", "Tumieni PIN moja kwa familia nzima", "Jibu kwa PIN yako kuthibitisha ni wewe", "Mpigie mtu huyo kwa namba yake ya zamani kabla ya kutuma"], answer: 3, why: "Kupiga kwa namba unayoijua kunaonyesha kama ujumbe wa haraka ni wa kweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Ulaghai, makosa na mpango wako wa usalama",
        questions: [
          { objective: "O3", q: "\"Akaunti yako itazuiwa leo. Piga msimbo huu na uweke PIN yako ili kuiokoa.\" Huu ni:", options: ["Ujumbe wa kawaida wa mtoa huduma", "Ulaghai: unakuharakisha na unaomba PIN yako", "Kurudisha pesa", "Promosheni"], answer: 1, why: "Watoa huduma hawakuombi kamwe upige msimbo pamoja na PIN yako; kuharakishwa ni dalili ya hatari." },
          { objective: "O3", q: "Ujumbe upi una uwezekano mkubwa zaidi kuwa wa kweli?", options: ["Kutoka namba ya kawaida: \"Nirudishie pesa nilizotuma kwa makosa\"", "\"Umeshinda! Lipa ada ili upokee\"", "Uthibitisho wa malipo kutoka jina rasmi la mtoa huduma, unaolingana na salio lako", "\"Mama, namba mpya, tuma pesa sasa\""], answer: 2, why: "Uthibitisho halisi unatoka kwa jina rasmi au namba fupi na unalingana na salio lako halisi." },
          { objective: "O4", q: "Unapaswa kuripoti pesa zilizotumwa vibaya lini?", options: ["Mwezi ujao", "Ikiwa ni kiasi kikubwa tu", "Baada ya mtu mwingine kuzitumia", "Siku hiyo hiyo, haraka iwezekanavyo"], answer: 3, why: "Kurudisha pesa ni rahisi zaidi zikiwa bado kwenye pochi ya mtu mwingine." },
          { objective: "O4", q: "Mtu aliyepokea pesa zako kwa makosa amezitoa na anakataa kuzirudisha. Nini kinafuata?", options: ["Fuata ushauri wa mtoa huduma na uripoti polisi ukiwa na SMS yako", "Mlipe mtu usiyemjua ili azirudishe", "Futa SMS", "Mtumie pesa zaidi"], answer: 0, why: "Zikishatolewa, inaweza kuwa jambo la polisi; SMS yako ni ushahidi wako." },
          { objective: "O5", q: "Mpango wa usalama unasema ukague taarifa ya akaunti yako mara ngapi?", options: ["Kamwe", "Mara moja kwa mwezi", "Mara moja kila miaka mitano", "Simu ikipotea tu"], answer: 1, why: "Ukaguzi wa kawaida wa kila mwezi unagundua malipo ya ajabu mapema." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutumia Pesa za Simu kwa Usalama (M-Pesa, MTN MoMo, Orange Money, Wave)",
    questions: [
      { objective: "O1", q: "PIN ipi ni dhaifu zaidi?", options: ["Tarakimu nne za nasibu", "Namba unayoijua wewe peke yako", "PIN uliyobadilisha hivi karibuni", "Mwaka wako wa kuzaliwa"], answer: 3, why: "Mwaka wako wa kuzaliwa ni rahisi kwa wengine kuupata na kuukisia." },
      { objective: "O1", q: "Nani anaweza kuomba PIN yako ya pesa za simu kwa usalama?", options: ["Hakuna mtu", "Huduma kwa wateja", "Wakala aliyesajiliwa", "Benki yako"], answer: 0, why: "Hakuna mtu anayehitaji PIN yako; wafanyakazi halisi na mawakala hawaiombi kamwe." },
      { objective: "O1", q: "Simu yako imeibiwa. Hatua ya kwanza ni ipi?", options: ["Kununua simu mpya mwezi ujao", "Kumpigia mtoa huduma kutoka simu nyingine azuie SIM na pochi", "Kumtumia mwizi ujumbe", "Kusubiri uone kama itarudi"], answer: 1, why: "Kuzuia haraka kunamzuia mwizi kutumia pochi yako." },
      { objective: "O1", q: "Kwa nini uweke kifungo cha skrini na PIN ya SIM?", options: ["Ili simu iwe na kasi zaidi", "Ili kupunguza ada", "Ili mwizi asiweze kutumia simu au SIM yako kwa urahisi", "Kwa sababu mawakala wanavihitaji"], answer: 2, why: "Vifungo vinamchelewesha yeyote anayepata simu au SIM yako." },
      { objective: "O2", q: "Unakagua vitu gani vitatu kwenye skrini ya uthibitisho?", options: ["Saa, hali ya hewa na betri", "Jina, namba na kiasi", "Wakala, rangi na tarehe", "Ada, mtandao na mawimbi"], answer: 1, why: "Jina, namba na kiasi vinakuambia pesa zinakwenda mahali sahihi." },
      { objective: "O2", q: "Ulikusudia kutuma GHS 50 na skrini inaonyesha GHS 500. Unafanya nini?", options: ["Kughairi na kuandika tena", "Kuweka PIN na kuomba chenji", "Kutuma na kurudisha baadaye", "Kuweka nusu ya PIN"], answer: 0, why: "Ghairi kabla ya PIN; kurekebisha baadaye ni vigumu." },
      { objective: "O2", q: "Ujumbe unasema msambazaji wako ana \"namba mpya ya malipo\". Unafanya nini?", options: ["Kulipa namba mpya mara moja", "Kuwatumia wateja wengine ujumbe huo", "Kumpigia msambazaji kwa namba uliyonayo tayari ili kukagua", "Kulipa nusu kwa kila namba"], answer: 2, why: "Namba bandia za malipo ni hila ya kawaida; kagua na mtu huyo kwa namba unayoijua." },
      { objective: "O2", q: "Kwa wakala, kipi ni salama?", options: ["Kumpa wakala simu yako na PIN", "Kuondoka kabla ya kuhesabu pesa", "Kutumia wakala asiye na bango", "Kuanza kutoa pesa kwenye simu yako mwenyewe na kuhesabu pesa"], answer: 3, why: "Unabaki ukiidhibiti PIN yako na unakagua pesa kabla ya kuondoka." },
      { objective: "O3", q: "Katika ulaghai wa kurudisha pesa bandia, kwa kawaida nini kilitokea?", options: ["Pesa halisi zilifika kwa makosa", "SMS bandia kutoka namba ya kawaida ilijifanya pesa zimefika", "Mtoa huduma alikosea", "Wakala alipoteza pesa"], answer: 1, why: "SMS bandia inaonekana kama malipo, lakini salio lako halisi linaonyesha hakuna kilichofika." },
      { objective: "O3", q: "Ipi ni dalili ya hatari ya ulaghai?", options: ["Wanaomba ada kabla ya kukupa zawadi, kazi au mkopo", "Ujumbe unatoka namba fupi rasmi", "Kiasi kinalingana na salio lako", "Wewe mwenyewe ulianzisha malipo"], answer: 0, why: "Kulipa kwanza ili upokee ni dalili inayojulikana sana ya ulaghai." },
      { objective: "O3", q: "Ujumbe wa WhatsApp kutoka namba mpya: \"Baba, nimepoteza simu yangu, tuma XOF 30,000 kwa namba hii sasa.\" Unafanya nini?", options: ["Kutuma haraka", "Kutuma nusu", "Kumpigia mtoto wako kwa namba ya zamani kwanza", "Kujibu kwa PIN yako"], answer: 2, why: "Kupiga namba ya zamani kunakagua kama ujumbe wa haraka ni wa kweli." },
      { objective: "O3", q: "Jumbe halisi za mtoa huduma kwa kawaida zinafikaje?", options: ["Kutoka namba ya kawaida ya simu", "Kutoka jina rasmi au namba fupi ya mtoa huduma", "Kupitia WhatsApp ya mtu usiyemjua", "Kutoka ukurasa wa mitandao ya kijamii unaoomba PIN yako"], answer: 1, why: "Watoa huduma hutuma kutoka majina rasmi au namba fupi; namba za kawaida ni dalili ya hatari." },
      { objective: "O4", q: "Nchini Kenya, hatua iliyotangazwa na Safaricom ya kuomba pesa zilizokwenda kwa mtu asiye sahihi zirudishwe ni:", options: ["Kuandika kwenye Facebook", "Kupiga namba yoyote ya mtandaoni", "Kutuma SMS ya uthibitisho kwa 456", "Kutuma PIN yako kwa 100"], answer: 2, why: "Kutuma uthibitisho wa awali wa M-Pesa kwa 456 kunaanzisha ombi la kurudisha pesa (kagua tovuti ya Safaricom kwa hatua za sasa)." },
      { objective: "O4", q: "Unaandika maelezo gani unaporipoti tatizo?", options: ["Tarehe, saa, kiasi na namba ya muamala", "PIN yako", "Msimbo wako wa mara moja", "Nywila yako"], answer: 0, why: "Maelezo haya yanamsaidia mtoa huduma kupata malipo; usitoe kamwe PIN yako wala misimbo." },
      { objective: "O4", q: "Unapata wapi namba rasmi ya msaada ya mtoa huduma wako?", options: ["Maoni chini ya chapisho la Facebook", "Mpigaji simu anayesema ni mfanyakazi", "Ujumbe kutoka namba ya kawaida", "Pakiti ya SIM, tovuti rasmi au app rasmi"], answer: 3, why: "Vyanzo rasmi vinatoa namba halisi; walaghai husambaza namba bandia." },
      { objective: "O4", q: "Mtoa huduma hajatatua malalamiko yako. Unaweza kutumia nini kingine?", options: ["Mtu usiyemjua anayetoza ada ya kurejesha pesa", "Utaratibu wa malalamiko ya watumiaji wa benki kuu", "Hakuna kingine", "PIN mpya kwa mtu mwingine"], answer: 1, why: "Benki kuu kama CBN na Benki ya Ghana zina taratibu za malalamiko." },
      { objective: "O5", q: "Kipi kinafaa kuwa katika mpango wako wa usalama wa pesa za simu?", options: ["PIN yako imeandikwa yote", "Misimbo yako ya mara moja", "Njia rasmi ya mtoa huduma wako ya kuripoti ulaghai", "PIN ya jirani yako"], answer: 2, why: "Mpango unaorodhesha kanuni na njia rasmi, kamwe si namba za siri." },
      { objective: "O5", q: "Kwa nini uweke mpango wa usalama kwenye karatasi nyumbani?", options: ["Ili familia iutumie hata simu ikipotea", "Kwa sababu simu haziwezi kuhifadhi maelezo", "Kuwaonyesha mawakala", "Kuuweka mtandaoni"], answer: 0, why: "Simu ikiibiwa, mpango wa karatasi bado unakuambia cha kufanya." },
      { objective: "O5", q: "Unapaswa kupitia mpango wa usalama pamoja na nani?", options: ["Watu usiowajua sokoni", "Mpigaji simu anayesema anatoka kwa mtoa huduma", "Hakuna mtu", "Wanafamilia kama wazazi wazee na vijana"], answer: 3, why: "Wanafamilia mara nyingi hulengwa; kushiriki mpango kunawalinda pia." },
      { objective: "O5", q: "Unasoma wapi ada halisi ya muamala?", options: ["Ujumbe uliosambazwa kwenye WhatsApp", "Jedwali rasmi la ada la mtoa huduma, app au bango dukani", "Makisio ya rafiki", "Maoni kwenye mitandao ya kijamii"], answer: 1, why: "Ada zinatofautiana kwa nchi na hubadilika; njia rasmi zinaonyesha ada ya sasa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kanuni za PIN na simu", objective: "O1", notYet: "Hakuna kanuni za PIN, au mpango una PIN halisi au msimbo.", meets: "Unasema: PIN isiyo rahisi kukisia, kifungo cha skrini, usitoe kamwe PIN wala misimbo, zuia mara moja simu ikipotea.", exceeds: "Pia unajumuisha PIN ya SIM na cha kufanya laini ikifa ghafla (huenda ni SIM swap)." },
      { name: "Ukaguzi wa jina", objective: "O2", notYet: "Hakuna hatua ya kukagua kabla ya PIN.", meets: "Unasema kukagua jina, namba na kiasi kwenye skrini ya uthibitisho na kuhifadhi SMS ya uthibitisho.", exceeds: "Unaongeza kuchukua till au misimbo ya mfanyabiashara kutoka duka lenyewe tu na kupiga tena kwa namba unayoijua kuhusu namba \"mpya\" za malipo." },
      { name: "Dalili za hatari za ulaghai", objective: "O3", notYet: "Dalili za ulaghai chini ya nne, au zisizo wazi.", meets: "Unaorodhesha aina sita za kawaida za ulaghai na dalili ya hatari kwa kila moja.", exceeds: "Unaongeza mfano halisi ambao mwanafunzi au familia ameuona na jinsi walivyoutambua." },
      { name: "Njia rasmi na saa ya kwanza", objective: "O4", notYet: "Namba za msaada hazipo, au zimenakiliwa kutoka chanzo kisicho rasmi.", meets: "Unatoa njia rasmi za msaada, za kurudisha pesa na za ulaghai za mtoa huduma (kutoka tovuti, app au pakiti ya SIM) na hatua za saa ya kwanza.", exceeds: "Pia unataja njia ya malalamiko ya benki kuu na hatua ya polisi, na unasema kila njia ilinakiliwa kutoka wapi." },
      { name: "Ukaguzi wa kila mwezi na kushiriki", objective: "O5", notYet: "Hakuna ukaguzi wa mara kwa mara, na mpango haujashirikiwa.", meets: "Unaweka ukaguzi wa taarifa ya akaunti kila mwezi na mpango ulisomwa pamoja na mwanafamilia mmoja.", exceeds: "Unajumuisha kanuni ya familia ya kupiga tena na ukaguzi wa kwanza umeshafanywa na kuwekwa tarehe." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti, baada ya siku 30, kukagua jina kabla ya kila PIN na kusoma taarifa ya akaunti kila mwezi",
      "Wanafunzi wanaoripoti kutambua na kukataa simu au ujumbe wa ulaghai ndani ya siku 30",
      "Hasara chache za pesa za simu zinazoripotiwa na wanachama wa kikundi cha akiba, chama cha soko au kikundi cha jamii kinachoshirikiana nasi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye akaunti ya pesa za simu (simu ya kawaida au simu janja)",
      "Jedwali rasmi la ada na njia za msaada za mtoa huduma (tovuti, app, bango dukani au pakiti ya SIM)",
      "Karatasi na kalamu kwa mpango wa usalama",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Inafaa kwa vyama vya soko, vikundi vya akiba, makanisa, misikiti, vikundi vya vijana na vikundi vya wanawake: fanyeni jaribio la awali pamoja na sura moja kwa kila mkutano.",
      "Usiwaombe wanafunzi kamwe kuandika au kusema PIN halisi au msimbo katika mazoezi. Onyesha menyu kwenye simu ya maonyesho au kwa kuchora skrini.",
      "Kabla ya kipindi, tafuta hatua rasmi za kurudisha pesa na za ulaghai za watoa huduma ambao kikundi chako kinatumia nchini mwako, kutoka tovuti au maduka ya watoa huduma wenyewe, na uhakikishe ni za sasa.",
      "Waalike wanachama kushiriki jumbe za ulaghai walizopokea (namba za binafsi zikiwa zimefichwa) na kuzipanga kwa dalili ya hatari.",
      "Pima kazi ya mwisho kwa rubriki; usikusanye kamwe mipango ikiwa wanafunzi wameongeza maelezo binafsi."
    ]
  }
};
