"use strict";

// Koach Learn course (Swahili translation of shared/ged-social-studies.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const GED_SUBJECTS = { name: "GED Testing Service: masomo ya mtihani (muda, aina za maswali, kikokotoo)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SS = { name: "GED Testing Service: mtihani wa Social Studies (Maarifa ya Jamii)", url: "https://ged.com/about_test/test_subjects/social_studies/" };
const GED_SCORES = { name: "GED Testing Service: alama", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: mitihani ya mfano ya bure (Kiingereza na Kihispania)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, mtihani rasmi wa mazoezi", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, mtihani mwingine unaolingana na kumaliza sekondari (tovuti rasmi)", url: "https://hiset.org/" };
const USA_BRANCHES = { name: "USAGov: Mihimili ya serikali ya Marekani", url: "https://www.usa.gov/branches-of-government" };
const ARCHIVES_CONST = { name: "National Archives: Katiba ya Marekani (maandishi kwa Kiingereza)", url: "https://www.archives.gov/founding-docs/constitution-transcript" };
const ARCHIVES_BOR = { name: "National Archives: Bill of Rights, Hati ya Haki (maandishi kwa Kiingereza)", url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript" };

module.exports = {
  id: "ged-social-studies-sw",
  lang: "sw",
  translationOf: "ged-social-studies",
  category: "Workforce Development",
  name: "Maandalizi ya Mtihani wa GED: Maarifa ya Jamii (Social Studies)",
  skills: "Kusoma vyanzo vya msingi na vya pili, Kutofautisha ukweli na maoni, Kueleza jinsi serikali ya Marekani inavyofanya kazi, Kupata chanzo na matokeo, Kusoma ramani, chati na grafu, Kuandaa mpango wa kusoma",
  outcome: "kusoma kifungu cha maarifa ya jamii, hati ya kihistoria, ramani au grafu na kujibu maswali ya aina ya GED kuihusu: wazo kuu, mtazamo wa mwandishi, ukweli au maoni, chanzo na matokeo, jinsi serikali ya Marekani inavyofanya kazi, na kile takwimu zinachoonyesha.",
  about: [
    "Kozi hii ni kwa watu wazima wanaojiandaa kwa mtihani wa GED wa Social Studies (Maarifa ya Jamii). GED ni mtihani wa Marekani unaolingana na kumaliza shule ya sekondari. Kozi ni kwa wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu, vijana, wahamiaji na yeyote anayerudi kusoma. Ged.com inasema si mtihani wa kukariri. Unapima jinsi unavyosoma, unavyofikiri na unavyotumia grafu kuhusu serikali, historia na pesa.",
    "Kozi hii inakuandaa kwa mtihani. Haikupi cheti cha GED. GED Testing Service (shirika linalotunga mtihani wa GED) ndilo linaloendesha mtihani, na jimbo lako linaweka sheria za kuufanya. Majimbo mengine yanatumia mtihani mwingine unaoitwa HiSET. Angalia ged.com na ofisi ya elimu ya watu wazima ya jimbo lako kwa sheria, ada na tarehe za mtihani za sasa.",
    "Kila somo linafundisha ujuzi mmoja kwa mifano iliyofanyiwa kazi, zoezi la \"Jaribu sasa\" lenye majibu yaliyoelezwa, na ukaguzi mfupi wa maswali mawili. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni.",
    "Kazi ya mwisho ni karatasi ya kuchambua chanzo, unayoijaza kuhusu hati halisi ya kuanzishwa kwa taifa kutoka National Archives (Hifadhi ya Taifa ya Marekani), pamoja na mpango wako wa kusoma GED wenye tarehe."
  ],
  finalTask: "Jaza karatasi ya ukurasa mmoja ya kuchambua chanzo kuhusu Preamble (Utangulizi) wa Katiba ya Marekani (au hati nyingine ya kuanzishwa kwa taifa kwenye archives.gov): nani aliiandika na lini, ni chanzo cha msingi au cha pili, wazo kuu kwa sentensi moja, mtazamo wa mwandishi, ukweli mmoja na maoni au lengo moja, chanzo kimoja na matokeo moja yanayohusiana nayo, na inahusu mhimili gani wa serikali na kwa nini. Ongeza mpango wako wa kusoma GED wenye tarehe chini ya karatasi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaojiandaa kwa mtihani wa GED wa Social Studies: wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wanajeshi wastaafu, vijana walioacha shule, wahamiaji (wengine wanajiandaa pia kupata uraia) na watu wazima wanaorudi kusoma baada ya miaka mingi.",
    startingPoint: "Wanaweza kusoma maandishi ya kila siku na chati rahisi. Wengi wanakumbuka kidogo historia au uraia wa Marekani kutoka shuleni na wanadhani mtihani ni kukariri tarehe. Wengine bado wanajifunza Kiingereza.",
    gap: "Mtihani unawataka wanafunzi wasome vyanzo, watambue mtazamo na ushahidi, waeleze jinsi serikali inavyofanya kazi, na wasome grafu na ramani. Ujuzi huu pia unasaidia watu kufuatilia habari, kupiga kura pale wanaporuhusiwa, kuelewa haki zao na kufanya maamuzi ya pesa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hati za zamani zinaelezwa mstari kwa mstari",
      "Vifaa: simu, kompyuta ya maktaba, au karatasi na kalamu",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi, miadi na familia",
      "Mada za siasa zinafundishwa bila upendeleo: jinsi mambo yanavyofanya kazi na jinsi ya kupima ushahidi, si upande gani wa kuchagua",
      "Sheria za mtihani, ada na mtihani gani jimbo linatumia (GED au HiSET) hubadilika; wanafunzi wanaangalia ged.com na jimbo lao"
    ],
    prerequisites: "Hakuna. Kozi ya GED ya lugha (Language Arts) inasaidia kusoma kwa ajili ya wazo kuu na kupima ushahidi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia tovuti rasmi ya GED", action: "kuorodhesha sehemu, aina za maswali, muda na zana za mtihani wa GED wa Social Studies na kuandika mpango wa kusoma wenye tarehe", standard: "ukitaja maeneo yote matatu ya ujuzi na angalau tarehe moja ya kusoma kila wiki hadi mtihani" },
    { id: "O2", condition: "Ukipewa chanzo cha msingi au cha pili", action: "kutambua wazo kuu, mtazamo wa mwandishi, na kauli zipi ni ukweli na zipi ni maoni", standard: "ukionyesha maneno yanayothibitisha kila jibu" },
    { id: "O3", condition: "Ukipewa hali fupi ya uraia", action: "kueleza mhimili gani wa serikali unachukua hatua na jinsi udhibiti na mizani au haki ya kikatiba inavyohusika", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O4", condition: "Ukipewa tukio la kihistoria au hoja", action: "kutambua chanzo na matokeo na ushahidi unaounga mkono hitimisho", standard: "ukitaja ushahidi kutoka kwenye chanzo" },
    { id: "O5", condition: "Ukipewa ramani, chati au grafu kuhusu historia, uchumi au jiografia", action: "kusoma thamani, kueleza mwelekeo na kuchagua hitimisho linaloungwa mkono na takwimu", standard: "bila kuongeza ukweli usioonyeshwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kusoma vyanzo na jinsi serikali inavyofanya kazi",
      lessons: [
        {
          title: "Jinsi mtihani wa GED wa Social Studies unavyofanya kazi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha sehemu na zana za mtihani wa GED wa Social Studies na uandike mpango wa kusoma wenye tarehe.",
          text: [
            "GED ina mitihani minne: Hisabati (Math), Lugha (Reasoning Through Language Arts), Sayansi (Science) na Maarifa ya Jamii (Social Studies). Unaweza kuifanya mmoja mmoja. GED Testing Service ndilo linalotunga mtihani. Majimbo mengine yanatumia mtihani mwingine unaolingana na kumaliza sekondari, HiSET, kwa hiyo angalia jimbo lako linatumia mtihani upi.",
            "Kwenye ged.com, mtihani wa Social Studies umeorodheshwa kuwa dakika 70 bila mapumziko. Unahusu maeneo matatu ya ujuzi: kusoma kwa kuelewa maana katika maarifa ya jamii, kuchambua matukio ya kihistoria na hoja, na kutumia namba na grafu katika maarifa ya jamii. Maswali ni ya kuchagua jibu, kujaza nafasi, kuburuta na kuweka (drag and drop), kuchagua eneo, na orodha ya kushuka (drop-down).",
            "Unapata kikokotoo kwenye skrini na karatasi ya maelezo ya kikokotoo, na ged.com inasema unaweza kuleta kikokotoo chako cha TI-30XS kwenye kituo cha mtihani. Ged.com inasema si mtihani wa kukariri: unatumia taarifa uliyopewa kufikia hitimisho.",
            "Ged.com inaonyesha alama ya kufaulu ni 145 kwa kila somo. Muda na sheria zinaweza kubadilika, kwa hiyo angalia ged.com kabla ya kujiandikisha. Ged.com ina mitihani ya mfano ya bure na mtihani rasmi wa mazoezi, GED Ready."
          ],
          steps: ["Nenda ged.com na usome ukurasa wa mtihani wa Social Studies.", "Andika muda, maeneo matatu ya ujuzi na zana unazopata.", "Fanya mtihani wa mfano wa bure wa Social Studies ili ujue uko wapi.", "Chagua wiki unayolenga kufanya mtihani.", "Andika angalau tarehe moja ya kusoma kila wiki, pamoja na ujuzi utakaoufanyia mazoezi."],
          words: [["GED", "mtihani unaolingana na kumaliza shule ya sekondari; kufaulu masomo yote manne kunakupa cheti ambacho waajiri na vyuo vingi vinakubali kama diploma."], ["HiSET", "mtihani mwingine unaolingana na kumaliza sekondari ambao majimbo mengine yanatumia."], ["Uraia (Civics)", "elimu ya serikali na haki na wajibu wa raia."], ["Uchumi (Economics)", "elimu ya jinsi watu wanavyozalisha, kununua, kuuza na kutumia bidhaa na pesa."]],
          slides: [
            { title: "Mtihani wa Social Studies (angalia ged.com)", bullets: ["Dakika 70, bila mapumziko", "Maswali ya kuchagua jibu na aina nyingine", "Alama ya kufaulu iliyoorodheshwa: 145"] },
            { title: "Maeneo matatu ya ujuzi", bullets: ["Kusoma kwa kuelewa maana katika maarifa ya jamii", "Kuchambua matukio ya kihistoria na hoja", "Kutumia namba na grafu"] },
            { title: "Si mtihani wa kukariri", bullets: ["Tumia taarifa uliyopewa", "Fikia hitimisho kutoka kwayo", "Kikokotoo kwenye skrini na karatasi ya maelezo"] },
            { title: "Andaa mpango", bullets: ["Fanya kwanza mtihani wa mfano wa bure", "Chagua wiki unayolenga kufanya mtihani", "Soma kidogo, siku nyingi za wiki"] }
          ],
          sources: [GED_SUBJECTS, GED_SS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Fungua ged.com na ufanye mtihani wa mfano wa bure wa Social Studies (au soma ukurasa wa Social Studies kama huwezi kuufanya sasa). Andika mpango wako wa kusoma: wiki unayolenga kufanya mtihani na tarehe moja kila wiki pamoja na ujuzi utakaoufanyia mazoezi: kusoma vyanzo, serikali, historia au grafu. Uhifadhi kwa ajili ya kazi ya mwisho.",
          youCanNow: "kutaja sehemu na zana za mtihani wa GED wa Social Studies na kufuata mpango wa kusoma wenye tarehe.",
          quickCheck: [
            { objective: "O1", q: "Ged.com inasema nini kuhusu mtihani wa Social Studies?", options: ["Ni hasa kukariri tarehe", "Si mtihani wa kukariri", "Hauna grafu", "Unahusu nchi nyingine tu"], answer: 1, why: "Ged.com inasema si mtihani wa kukariri; unafikiri kwa kutumia taarifa uliyopewa." },
            { objective: "O1", q: "Lipi ni mojawapo ya maeneo matatu ya ujuzi katika mtihani?", options: ["Kutaja miji mikuu ya majimbo", "Kuchora bendera", "Kutumia namba na grafu katika maarifa ya jamii", "Kasi ya kuandika kwa kompyuta"], answer: 2, why: "Ged.com inaorodhesha kusoma kwa kuelewa maana, matukio ya kihistoria na hoja, na namba na grafu." }
          ]
        },
        {
          title: "Vyanzo, mtazamo, ukweli na maoni",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tambua wazo kuu, mtazamo, ukweli na maoni katika chanzo.",
          text: [
            "Chanzo cha msingi kilitengenezwa na mtu aliyekuwepo wakati huo: barua, hotuba, sheria, picha, shajara. Chanzo cha pili kilitengenezwa baadaye na mtu anayechunguza tukio, kama kitabu cha kiada au uchambuzi wa habari. Vyote vina manufaa; vyanzo vya msingi vinaonyesha jinsi watu walivyoona mambo wakati huo.",
            "Mtazamo ni jinsi mwandishi anavyoiona mada, kutokana na yeye ni nani na anataka nini. Uliza: nani aliandika hiki, lini, na kwa nini? Mwenye kiwanda na mfanyakazi wa kiwanda mwaka 1900 wangeweza kueleza mgomo uleule kwa njia tofauti sana.",
            "Ukweli unaweza kukaguliwa na kuthibitishwa kuwa kweli au si kweli: \"Marekebisho ya 19 ya Katiba yaliidhinishwa mwaka 1920.\" Maoni ni imani au hisia: \"Lilikuwa badiliko muhimu zaidi katika historia yetu.\" Maneno kama bora zaidi, mbaya zaidi, inapaswa, muhimu na naamini mara nyingi yanaonyesha maoni.",
            "Mfano uliofanyiwa kazi. Tangazo la gazeti la mwaka 1910: \"Mashine zetu mpya zinatengeneza mashati 500 kwa siku. Kila familia ya kisasa inapaswa kununua mashati yetu!\" Ukweli: mashati 500 kwa siku (unaweza kukaguliwa). Maoni: kila familia inapaswa kuyanunua. Mtazamo: biashara inayouza bidhaa yake."
          ],
          steps: ["Uliza nani alitengeneza chanzo, lini na kwa nini.", "Amua: cha msingi (kilitengenezwa wakati huo) au cha pili (kilitengenezwa baadaye).", "Sema wazo kuu kwa sentensi moja.", "Weka alama kila kauli: ukweli (unaweza kukaguliwa) au maoni (imani au uamuzi).", "Eleza mtazamo wa mwandishi na anataka msomaji afanye au afikiri nini."],
          words: [["Chanzo cha msingi", "kitu kilichotengenezwa wakati wa tukio na mtu aliyekuwepo."], ["Chanzo cha pili", "kitu kilichotengenezwa baadaye na mtu anayechunguza tukio."], ["Mtazamo", "jinsi mwandishi anavyoiona mada, kutokana na yeye ni nani na anataka nini."], ["Ukweli", "kauli inayoweza kukaguliwa na kuthibitishwa."], ["Maoni", "imani, hisia au uamuzi wa mtu."]],
          slides: [
            { title: "Cha msingi au cha pili?", bullets: ["Cha msingi: kilitengenezwa wakati huo, na mtu aliyekuwepo", "Cha pili: kilitengenezwa baadaye, na mtu anayekichunguza"] },
            { title: "Mtazamo", bullets: ["Nani aliandika?", "Lini?", "Kwa nini, na anataka nini?"] },
            { title: "Ukweli au maoni?", bullets: ["Ukweli: unaweza kukaguliwa", "Maoni: imani au uamuzi", "Maneno ya ishara: bora zaidi, mbaya zaidi, inapaswa, naamini"] }
          ],
          tryIt: "Zoezi: barua ya mkulima ya mwaka 1935: \"Dhoruba za vumbi zilifunika mashamba yetu mara tatu masika haya. Serikali inapaswa kuwasaidia wakulima kama sisi kabla haijachelewa.\" 1) Cha msingi au cha pili? 2) Ukweli mmoja. 3) Maoni moja. 4) Mtazamo? Majibu: 1) Cha msingi: kiliandikwa wakati huo na mtu aliyekuwepo. 2) Dhoruba za vumbi zilifunika mashamba mara tatu masika hayo. 3) Serikali inapaswa kuwasaidia wakulima. 4) Mkulima anayetaabika anayeomba msaada.",
          youCanNow: "kutofautisha vyanzo vya msingi na vya pili, kueleza mtazamo, na kutenganisha ukweli na maoni.",
          quickCheck: [
            { objective: "O2", q: "Kipi ni chanzo cha msingi kuhusu Vita vya Pili vya Dunia?", options: ["Sura ya kitabu cha kiada ya mwaka 2020", "Muhtasari wa tovuti ulioandikwa mwaka jana", "Filamu iliyotengenezwa mwaka 2015", "Barua ambayo mwanajeshi aliandika nyumbani mwaka 1944"], answer: 3, why: "Ilitengenezwa wakati huo na mtu aliyekuwepo." },
            { objective: "O2", q: "Kauli ipi ni maoni?", options: ["Congress ilipitisha sheria hiyo mwaka 1964.", "Mji una wakazi 40,000.", "Hiyo ilikuwa sheria bora zaidi ambayo Congress imewahi kupitisha.", "Daraja lilifunguliwa mwaka 1937."], answer: 2, why: "\"Bora zaidi\" ni uamuzi usioweza kuthibitishwa." }
          ]
        },
        {
          title: "Jinsi serikali ya Marekani inavyofanya kazi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Eleza mhimili gani wa serikali unachukua hatua katika hali fulani na jinsi udhibiti na mizani unavyohusika.",
          text: [
            "Katiba ya Marekani inagawa serikali ya shirikisho katika mihimili mitatu ili mtu au kikundi kimoja kisiwe na mamlaka mengi kupita kiasi. Mhimili wa kutunga sheria ni Congress (Bunge: Seneti na Baraza la Wawakilishi); unatunga sheria. Mhimili wa utendaji ni rais, makamu wa rais na baraza la mawaziri; unatekeleza sheria. Mhimili wa mahakama ni Mahakama Kuu (Supreme Court) na mahakama nyingine za shirikisho; zinatafsiri sheria na kuamua kama zinapingana na Katiba.",
            "Udhibiti na mizani (checks and balances) unaruhusu kila mhimili kuweka mipaka kwa mingine. Rais anaweza kukataa (veto) mswada uliopitishwa na Congress. Seneti inaidhinisha au inakataa watu walioteuliwa na rais, kama majaji wa shirikisho. Mahakama Kuu inaweza kubatilisha sheria inayoona inakiuka Katiba. Congress inaweza, katika hali mbaya sana, kumwondoa rais madarakani.",
            "Bill of Rights (Hati ya Haki) ni marekebisho kumi ya kwanza ya Katiba. Inalinda haki kama uhuru wa kujieleza, wa dini, wa vyombo vya habari na wa kukusanyika (Marekebisho ya Kwanza), na haki za watu wanaoshtakiwa kwa uhalifu, kama kesi ya haki na ya haraka. Mamlaka pia yanagawanywa kati ya serikali ya shirikisho na majimbo; hii inaitwa shirikisho (federalism).",
            "Mfano uliofanyiwa kazi. \"Congress inapitisha mswada. Rais anaukataa (veto).\" Huu ni udhibiti upi? Mhimili wa utendaji unadhibiti mhimili wa kutunga sheria."
          ],
          steps: ["Tafuta nani anachukua hatua: Congress, rais au mahakama.", "Taja mhimili: wa kutunga sheria, wa utendaji au wa mahakama.", "Uliza mamlaka gani yanatumika: kutunga, kutekeleza au kutafsiri sheria.", "Kama mhimili mmoja unaweka mipaka kwa mwingine, taja udhibiti huo.", "Kama haki za mtu zinahusika, tafuta haki hiyo katika Bill of Rights."],
          words: [["Katiba", "sheria kuu kabisa ya Marekani; inaweka mfumo wa serikali."], ["Mhimili wa kutunga sheria", "Congress; unatunga sheria."], ["Mhimili wa utendaji", "rais, makamu wa rais na baraza la mawaziri; unatekeleza sheria."], ["Mhimili wa mahakama", "mahakama; zinatafsiri sheria."], ["Veto", "rais anapokataa mswada uliopitishwa na Congress."], ["Marekebisho (Amendment)", "badiliko au nyongeza katika Katiba."]],
          slides: [
            { title: "Mihimili mitatu", bullets: ["Kutunga sheria (Congress): inatunga sheria", "Utendaji (rais): unatekeleza sheria", "Mahakama: zinatafsiri sheria"] },
            { title: "Udhibiti na mizani", bullets: ["Rais anaweza kukataa (veto) miswada", "Seneti inaidhinisha au inakataa walioteuliwa", "Mahakama Kuu inaweza kubatilisha sheria zinazokiuka Katiba"] },
            { title: "Bill of Rights (Hati ya Haki)", bullets: ["Marekebisho kumi ya kwanza", "Kujieleza, dini, vyombo vya habari, kukusanyika", "Haki za watu wanaoshtakiwa kwa uhalifu"] },
            { title: "Shirikisho (federalism)", bullets: ["Mamlaka yanagawanywa kati ya taifa na majimbo"] }
          ],
          sources: [USA_BRANCHES, ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Zoezi: taja mhimili au haki. 1) Seneti inapiga kura kuhusu mtu aliyechaguliwa na rais kuwa jaji wa shirikisho. 2) Mahakama Kuu inaamua kwamba sheria inakiuka Katiba. 3) Gazeti linachapisha habari inayomkosoa meya. 4) Rais anatia saini mswada kuwa sheria. Majibu: 1) Kutunga sheria unadhibiti utendaji. 2) Mahakama unadhibiti kutunga sheria. 3) Uhuru wa vyombo vya habari, Marekebisho ya Kwanza. 4) Utendaji (ukitimiza nafasi yake katika kutunga sheria).",
          youCanNow: "kutaja mihimili mitatu, kueleza udhibiti na mizani katika hali fulani, na kuunganisha hali na Bill of Rights.",
          quickCheck: [
            { objective: "O3", q: "Mhimili upi unatunga sheria za shirikisho?", options: ["Mhimili wa kutunga sheria (Congress)", "Mhimili wa mahakama", "Mhimili wa utendaji", "Majimbo peke yake"], answer: 0, why: "Congress, mhimili wa kutunga sheria, ndiyo inayotunga sheria." },
            { objective: "O3", q: "Mahakama Kuu inaamua kwamba sheria inakiuka Katiba. Huu ni mfano wa nini?", options: ["Shirikisho", "Veto", "Udhibiti wa mhimili wa mahakama juu ya mhimili wa kutunga sheria", "Marekebisho"], answer: 2, why: "Mahakama zinaweza kubatilisha sheria zinazopingana na Katiba." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kusoma vyanzo na jinsi serikali inavyofanya kazi",
        questions: [
          { objective: "O1", q: "Unapaswa kuangalia wapi muda, ada na sheria za sasa za mtihani wa GED?", options: ["Ujumbe kwenye mitandao ya kijamii", "Ged.com na ofisi ya elimu ya watu wazima ya jimbo lako", "Kitabu cha kiada cha zamani", "Kumbukumbu za rafiki"], answer: 1, why: "Sheria na ada hubadilika; vyanzo rasmi vina zile za sasa." },
          { objective: "O2", q: "Kipi ni chanzo cha pili?", options: ["Hotuba iliyotolewa mwaka 1963", "Picha iliyopigwa wakati wa dhoruba ya vumbi ya miaka ya 1930", "Barua ya mwaka 1776", "Kitabu cha historia kilichoandikwa mwaka 2015"], answer: 3, why: "Kitabu cha kiada kinatengenezwa baadaye na watu wanaochunguza matukio." },
          { objective: "O2", q: "Tangazo la kampuni la mwaka 1912 linasema treni zake ni \"bora kabisa nchini.\" Hiki ni nini?", options: ["Maoni kutoka mtazamo wa biashara", "Ukweli", "Sheria", "Chanzo cha pili"], answer: 0, why: "\"Bora kabisa\" ni uamuzi, na kampuni inataka kuuza tiketi." },
          { objective: "O3", q: "Rais anakataa (veto) mswada. Mhimili upi unadhibitiwa?", options: ["Mhimili wa mahakama", "Mhimili wa utendaji", "Mhimili wa kutunga sheria", "Majimbo"], answer: 2, why: "Veto inaruhusu mhimili wa utendaji kudhibiti Congress, mhimili wa kutunga sheria." },
          { objective: "O3", q: "Bill of Rights ni nini?", options: ["Bajeti ya rais", "Marekebisho kumi ya kwanza ya Katiba", "Orodha ya sheria za majimbo", "Uamuzi wa Mahakama Kuu"], answer: 1, why: "Bill of Rights ni marekebisho kumi ya kwanza." }
        ]
      }
    },
    {
      name: "Sura 2: Historia, uchumi na grafu",
      lessons: [
        {
          title: "Chanzo, matokeo na ushahidi katika historia",
          objectives: ["O4"],
          minutes: 5,
          goal: "Tambua chanzo na matokeo katika tukio la kihistoria na ushahidi unaounga mkono hitimisho.",
          text: [
            "Maswali ya historia mara nyingi yanauliza kwa nini jambo lilitokea (chanzo) na nini kilitokea kwa sababu yake (matokeo). Maneno ya ishara: kwa sababu, kwa hiyo, matokeo yake, kulisababisha, hivyo, kutokana na.",
            "Mfano uliofanyiwa kazi. \"Mwishoni mwa miaka ya 1800, viwanda vya mijini vilitoa kazi nyingi mpya. Matokeo yake, mamilioni ya watu walihama kutoka mashambani kwenda mijini. Idadi ya watu mijini iliongezeka haraka, na msongamano wa makazi ukawa tatizo.\" Chanzo: kazi za viwandani mijini. Matokeo: watu walihamia mijini. Matokeo ya baadaye: msongamano wa makazi. Chanzo kimoja kinaweza kuleta mfululizo wa matokeo.",
            "Hitimisho (inference) ni uamuzi unaoungwa mkono na ushahidi. Maswali ya GED yanaweza kuuliza kauli ipi kutoka kwenye chanzo inaunga mkono hitimisho. Chagua kauli inayotoa ushahidi, si ile inayohusu mada ileile tu.",
            "Kuwa mwangalifu: mambo mawili kutokea wakati mmoja haimaanishi kila mara kwamba moja lilisababisha jingine. Tafuta chanzo kiseme au kionyeshe uhusiano huo."
          ],
          steps: ["Tafuta tukio ambalo swali linauliza.", "Tafuta maneno ya ishara: kwa sababu, kwa hiyo, matokeo yake, kulisababisha.", "Taja chanzo (kwa nini) na matokeo (nini kilifuata).", "Kwa hitimisho, chagua kauli inayotoa ushahidi wake.", "Hakikisha chanzo kweli kinaunganisha mambo hayo mawili; usidhanie."],
          words: [["Chanzo (sababu)", "kwa nini jambo lilitokea."], ["Matokeo", "kilichotokea kwa sababu ya chanzo."], ["Hitimisho (inference)", "uamuzi unaoungwa mkono na ushahidi."], ["Ukuaji wa viwanda", "kuongezeka kwa viwanda na mashine zinazotengeneza bidhaa."]],
          slides: [
            { title: "Chanzo na matokeo", bullets: ["Chanzo: kwa nini lilitokea", "Matokeo: nini kilifuata", "Maneno ya ishara: kwa sababu, matokeo yake, kulisababisha"] },
            { title: "Mfululizo wa matokeo", bullets: ["Kazi za viwandani mijini", "Watu walihama kutoka mashambani kwenda mijini", "Msongamano wa makazi mijini"] },
            { title: "Ushahidi wa hitimisho", bullets: ["Chagua kauli inayolithibitisha", "Mada ileile si sawa na ushahidi", "Kutokea pamoja haimaanishi kulisababisha"] }
          ],
          tryIt: "Zoezi: \"Dust Bowl (dhoruba za vumbi) ya miaka ya 1930 iliharibu mazao katika Great Plains. Familia nyingi za wakulima zilipoteza ardhi yao na kuhamia magharibi kutafuta kazi.\" 1) Chanzo? 2) Matokeo? 3) Kauli ipi inaunga mkono vizuri zaidi hitimisho \"Dust Bowl ilibadilisha mahali watu walipoishi\": (a) \"Dust Bowl iliharibu mazao\" au (b) \"Familia nyingi za wakulima zilihamia magharibi\"? Majibu: 1) Dhoruba za vumbi ziliharibu mazao. 2) Familia zilipoteza ardhi na kuhamia magharibi. 3) (b): inaonyesha watu wakihama.",
          youCanNow: "kupata vyanzo na matokeo katika historia na kuchagua ushahidi unaounga mkono hitimisho.",
          quickCheck: [
            { objective: "O4", q: "\"Bei za mafuta zilipanda sana, kwa hiyo watu wengi zaidi walipanda basi.\" Matokeo ni yapi?", options: ["Bei za mafuta zilipanda", "Watu wengi zaidi walipanda basi", "Mabasi yakawa nafuu", "Magari yakawa makubwa"], answer: 1, why: "Kupanda basi ndicho kilichotokea kwa sababu bei za mafuta zilipanda." },
            { objective: "O4", q: "Kauli ipi inaunga mkono vizuri zaidi hitimisho kwamba barabara kuu mpya ilisaidia biashara za mji?", options: ["\"Barabara kuu ina njia nne.\"", "\"Barabara kuu ilifunguliwa mwaka 1960.\"", "\"Barabara kuu zinatengenezwa kwa zege.\"", "\"Mauzo ya maduka mjini yaliongezeka mara mbili katika miaka mitano baada ya barabara kuu kufunguliwa.\""], answer: 3, why: "Inatoa ushahidi wa ukuaji wa biashara unaohusiana na barabara kuu." }
          ]
        },
        {
          title: "Uchumi na grafu",
          objectives: ["O5"],
          minutes: 6,
          goal: "Soma chati au ramani, eleza mwelekeo na uchague hitimisho linaloungwa mkono na takwimu.",
          text: [
            "Ugavi ni kiasi cha kitu kilichopo kwa ajili ya kuuzwa. Mahitaji ni kiasi ambacho watu wanataka kununua. Mahitaji yakiongezeka na ugavi ukibaki uleule, kwa kawaida bei hupanda. Ugavi ukiongezeka na mahitaji yakibaki yaleyale, kwa kawaida bei hushuka. Mfano: baridi kali ikiharibu mazao ya machungwa, ugavi wa machungwa hupungua na bei hupanda.",
            "Grafu: soma kwanza kichwa, maandishi ya mihimili (labels) na vipimo. Jedwali la mazoezi (la kubuni): kiwango cha ukosefu wa ajira cha mji kilikuwa 8% mwaka 2020, 6% mwaka 2021, 5% mwaka 2022 na 4% mwaka 2023. Mwelekeo: kinashuka kila mwaka. Hitimisho linaloungwa mkono: mwaka 2023 sehemu ndogo zaidi ya watu wanaotafuta kazi walikosa kazi kuliko mwaka 2020. Lisiloungwa mkono: kwa nini kilishuka, kwa sababu jedwali halisemi.",
            "Ramani: soma kichwa, ufunguo (legend) na dira (compass rose). Ufunguo unakuambia rangi au alama zina maana gani. Ramani ya mvua inaweza kutumia rangi nzito zaidi kwa mvua nyingi zaidi. Tumia kipimo (scale) kukadiria umbali.",
            "Badiliko la asilimia ni la kawaida: kutoka 8% hadi 4% ni kushuka kwa pointi 4 za asilimia. Unaweza kutumia kikokotoo kwenye skrini kwa hesabu."
          ],
          steps: ["Soma kichwa, maandishi, vipimo au ufunguo wa ramani.", "Tafuta thamani ambayo swali linauliza.", "Eleza mwelekeo: unapanda, unashuka au hakuna mwelekeo wazi.", "Chagua hitimisho linalobaki ndani ya takwimu.", "Kwa bei, uliza: je, ugavi au mahitaji yalibadilika?"],
          words: [["Ugavi", "kiasi cha bidhaa au huduma kilichopo kwa ajili ya kuuzwa."], ["Mahitaji", "kiasi chake ambacho watu wanataka kununua."], ["Kiwango cha ukosefu wa ajira", "sehemu ya watu wanaotafuta kazi ambao hawana kazi."], ["Ufunguo (legend)", "maelezo kwenye ramani au chati yanayosema rangi au alama zina maana gani."], ["Pointi ya asilimia", "tofauti ya moja kwa moja kati ya asilimia mbili, kama 8% hadi 4% ni pointi 4."]],
          slides: [
            { title: "Ugavi na mahitaji", bullets: ["Mahitaji juu, ugavi uleule: kwa kawaida bei hupanda", "Ugavi juu, mahitaji yaleyale: kwa kawaida bei hushuka"] },
            { title: "Kusoma grafu", bullets: ["Kwanza kichwa, maandishi, vipimo", "Tafuta thamani", "Eleza mwelekeo"] },
            { title: "Kusoma ramani", bullets: ["Kichwa na ufunguo (legend)", "Dira kwa ajili ya mwelekeo", "Kipimo (scale) kwa ajili ya umbali"] },
            { title: "Baki ndani ya takwimu", bullets: ["Chati inaonyesha nini, si kila mara kwa nini", "Hakuna hitimisho kuhusu mambo yasiyoonyeshwa"] }
          ],
          tryIt: "Zoezi (takwimu za kubuni): chati ya mihimili inaonyesha wastani wa kodi ya nyumba kwa mwezi katika mji: 2019: $1,000; 2021: $1,150; 2023: $1,400. 1) Kodi mwaka 2021? 2) Mwelekeo? 3) Kodi iliongezeka kiasi gani kutoka 2019 hadi 2023? 4) Hitimisho lipi linaungwa mkono: (a) kodi iliongezeka katika kipindi hiki, au (b) kodi iliongezeka kwa sababu ya kazi mpya? Majibu: 1) $1,150. 2) Inapanda. 3) $400. 4) (a); chati haionyeshi kwa nini.",
          youCanNow: "kutumia ugavi na mahitaji kueleza mabadiliko ya bei, na kusoma chati na ramani ili kuchagua hitimisho linaloungwa mkono.",
          quickCheck: [
            { objective: "O5", q: "Dhoruba inaharibu viwanda vingi vya mbao, kwa hiyo mbao chache zinauzwa wakati wajenzi bado wanazitaka. Kwa kawaida bei za mbao zinafanya nini?", options: ["Zinapanda", "Zinashuka", "Zinabaki zilezile", "Mbao zinakuwa bure"], answer: 0, why: "Ugavi ulishuka wakati mahitaji yalibaki yaleyale, kwa hiyo kwa kawaida bei hupanda." },
            { objective: "O5", q: "Kwenye ramani, nini kinakuambia kila rangi ina maana gani?", options: ["Dira", "Kichwa", "Ufunguo (legend)", "Kipimo (scale)"], answer: 2, why: "Ufunguo unaeleza rangi na alama." }
          ]
        },
        {
          title: "Kuunganisha yote: kuchambua hati ya kuanzishwa kwa taifa",
          objectives: ["O2", "O3", "O4"],
          minutes: 6,
          goal: "Jaza karatasi ya kuchambua chanzo kuhusu hati ya kuanzishwa kwa taifa.",
          text: [
            "Maswali ya GED mara nyingi yanakupa kipande kifupi cha hati ya zamani na kuuliza kuhusu wazo lake kuu, lengo lake au jinsi inavyohusiana na serikali ya leo. Preamble (Utangulizi), sentensi ya kwanza ya Katiba, ni nzuri ya kufanyia mazoezi. Isome kwenye tovuti ya National Archives.",
            "Preamble inaanza na \"We the People of the United States\" (Sisi Watu wa Marekani) na inaorodhesha malengo: kuunda muungano kamili zaidi, kuweka haki, kuhakikisha utulivu wa ndani (amani nyumbani), kutoa ulinzi wa pamoja, kukuza ustawi wa jumla (hali njema ya wote) na kulinda baraka za uhuru.",
            "Uchambuzi uliofanyiwa kazi. Nani na lini: wajumbe wa Mkutano wa Katiba (Constitutional Convention), 1787. Aina: chanzo cha msingi. Wazo kuu: watu wanaunda serikali ili kufikia malengo ya pamoja. Mtazamo: viongozi waliotaka serikali ya taifa yenye nguvu kuliko ile waliyokuwa nayo awali. Chanzo na matokeo: serikali ya awali chini ya Articles of Confederation (Vifungu vya Shirikisho) ilikuwa dhaifu, jambo lililosababisha kuandikwa kwa Katiba mpya. Mihimili: Preamble inatanguliza Katiba yote, ambayo inaweka mihimili yote mitatu.",
            "Karatasi yako haihitaji majibu kamili. Inahitaji majibu unayoweza kuyathibitisha kwa kuonyesha maneno katika hati."
          ],
          steps: ["Fungua maandishi ya Katiba kwenye archives.gov na usome Preamble.", "Andika nani aliiandika, lini, na kama ni chanzo cha msingi au cha pili.", "Andika wazo kuu kwa sentensi moja na mtazamo wa mwandishi.", "Andika ukweli mmoja kuihusu na lengo au maoni moja ndani yake.", "Andika chanzo kimoja na matokeo moja, na mhimili au haki inayohusiana nayo.", "Ongeza mpango wako wa kusoma wenye tarehe chini ya karatasi."],
          words: [["Preamble (Utangulizi)", "sentensi ya kwanza ya Katiba inayoeleza lengo lake."], ["Articles of Confederation", "mpango wa kwanza wa serikali ya Marekani, uliotumika kabla ya Katiba."], ["Utulivu wa ndani", "amani nyumbani."], ["Ustawi wa jumla", "hali njema ya watu wote."]],
          slides: [
            { title: "Preamble (Utangulizi)", bullets: ["Sentensi ya kwanza ya Katiba", "Inaanza na \"We the People\" (Sisi Watu)", "Inaorodhesha malengo ya serikali mpya"] },
            { title: "Karatasi yako ya uchambuzi", bullets: ["Nani, lini, cha msingi au cha pili", "Wazo kuu na mtazamo", "Ukweli mmoja na lengo au maoni moja"] },
            { title: "Iunganishe", bullets: ["Chanzo kimoja na matokeo moja", "Mhimili au haki inayohusika", "Onyesha maneno yanayothibitisha"] }
          ],
          sources: [ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Kazi ya mwisho: jaza karatasi yako ya ukurasa mmoja ya kuchambua chanzo kuhusu Preamble (au Bill of Rights) kutoka archives.gov, kwa kufuata hatua zilizo juu. Ongeza mpango wako wa kusoma GED wenye tarehe chini ya karatasi, kisha upime kazi yako kwa rubriki ya kozi.",
          youCanNow: "kuchambua hati ya kuanzishwa kwa taifa: aina ya chanzo, wazo kuu, mtazamo, vyanzo na matokeo, na uhusiano wake na jinsi serikali inavyofanya kazi.",
          quickCheck: [
            { objective: "O2", q: "Preamble iliandikwa mwaka 1787 na wajumbe wa Mkutano wa Katiba. Ni chanzo cha aina gani?", options: ["Cha pili", "Kura ya maoni", "Ramani", "Cha msingi"], answer: 3, why: "Kilitengenezwa wakati huo na watu walioandika Katiba." },
            { objective: "O4", q: "Articles of Confederation ziliunda serikali ya taifa dhaifu. Matokeo moja yalikuwa yapi?", options: ["Viongozi waliandika Katiba mpya", "Bill of Rights iliondolewa", "Congress ilifungwa milele", "Majimbo yaliacha kuwepo"], answer: 0, why: "Udhaifu wa Articles ulisababisha Katiba ya 1787." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Historia, uchumi na grafu",
        questions: [
          { objective: "O4", q: "\"Kwa sababu kiwanda kilifungwa, wafanyakazi wengi walihama.\" Chanzo ni kipi?", options: ["Wafanyakazi walihama", "Mji ulikua", "Kiwanda kilifungwa", "Maduka mapya yalifunguliwa"], answer: 2, why: "Kufungwa kwa kiwanda ndiyo sababu wafanyakazi walihama." },
          { objective: "O4", q: "Mambo mawili yalitokea mwaka mmoja. Unaweza kusema nini kwa uhakika?", options: ["Moja lilisababisha jingine", "Yalitokea wakati mmoja; angalia chanzo kama kuna uhusiano", "Yote mawili ni maoni", "Hakuna lililotokea"], answer: 1, why: "Kutokea pamoja hakuthibitishi kwamba moja lilisababisha jingine." },
          { objective: "O5", q: "Mahitaji ya baiskeli yanaongezeka na ugavi unabaki uleule. Kwa kawaida bei za baiskeli zinafanya nini?", options: ["Zinashuka", "Zinabaki zilezile", "Baiskeli zinakuwa bure", "Zinapanda"], answer: 3, why: "Wanunuzi wengi zaidi kwa ugavi uleule kwa kawaida husukuma bei juu." },
          { objective: "O5", q: "Jedwali linaonyesha idadi ya watu wa mji: 2000: 10,000; 2010: 12,000; 2020: 15,000. Hitimisho lipi linaungwa mkono?", options: ["Idadi ya watu iliongezeka katika miaka hii", "Mji utakuwa na watu 50,000 mwaka 2030", "Watu walihamia kwa sababu ya shule nzuri", "Mji ulipoteza watu"], answer: 0, why: "Namba zinapanda kila muongo; jedwali halionyeshi siku zijazo wala sababu." },
          { objective: "O3", q: "Seneti inamkataa mtu ambaye rais alimchagua kuwa jaji wa shirikisho. Huu ni udhibiti upi?", options: ["Mhimili wa mahakama unadhibiti utendaji", "Mhimili wa kutunga sheria unadhibiti utendaji", "Shirikisho", "Veto"], answer: 1, why: "Seneti, sehemu ya Congress, inaidhinisha au inakataa walioteuliwa na rais." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Mtihani wa GED: Maarifa ya Jamii (Social Studies)",
    questions: [
      { objective: "O1", q: "Kozi hii inakufanyia nini?", options: ["Inakupa cheti cha GED", "Inakufanya raia wa Marekani", "Inakuandaa kwa mtihani wa GED wa Social Studies", "Inachukua nafasi ya mtihani wa GED"], answer: 2, why: "Inakuandaa; GED Testing Service inaendesha mtihani na jimbo lako linatoa cheti." },
      { objective: "O1", q: "Ni mtihani gani mwingine unaolingana na kumaliza sekondari ambao majimbo mengine yanatumia?", options: ["HiSET", "SAT", "CDL", "LSAT"], answer: 0, why: "HiSET ni mtihani mwingine unaolingana na kumaliza sekondari." },
      { objective: "O1", q: "Kulingana na ged.com, mtihani wa Social Studies:", options: ["Ni wa kukariri tarehe tu", "Ni wa insha tu", "Si mtihani wa kukariri", "Ni mahojiano ya kuongea"], answer: 2, why: "Ged.com inasema si mtihani wa kukariri." },
      { objective: "O2", q: "Chanzo cha msingi ni nini?", options: ["Kitabu cha kiada kilichoandikwa mwaka jana", "Kitu kilichotengenezwa wakati huo na mtu aliyekuwepo", "Muhtasari kwenye tovuti", "Maelezo ya mwalimu"], answer: 1, why: "Vyanzo vya msingi vinatoka kwa watu waliokuwepo wakati wa tukio." },
      { objective: "O2", q: "Kipi ni ukweli?", options: ["Civil Rights Act (Sheria ya Haki za Kiraia) ilitiwa saini mwaka 1964.", "Ilikuwa sheria bora zaidi kuwahi kuandikwa.", "Kila mtu anapaswa kuipenda.", "Ilikuwa siku ya kusisimua zaidi katika historia."], answer: 0, why: "Tarehe ya kutiwa saini inaweza kukaguliwa; nyingine ni maamuzi ya mtu." },
      { objective: "O2", q: "Ili kupata mtazamo wa mwandishi, uliza:", options: ["Chanzo ni kirefu kiasi gani", "Karatasi ina rangi gani", "Kina kurasa ngapi", "Nani aliandika, lini na kwa nini"], answer: 3, why: "Nani, lini na kwa nini vinaathiri jinsi mwandishi anavyoiona mada." },
      { objective: "O2", q: "Neno lipi mara nyingi linaonyesha maoni?", options: ["Iliidhinishwa", "Inapaswa", "1920", "Congress"], answer: 1, why: "\"Inapaswa\" inasema kile mtu anaamini kinafaa kutokea." },
      { objective: "O3", q: "Mhimili upi unatekeleza sheria?", options: ["Wa kutunga sheria", "Wa mahakama", "Wa utendaji", "Hakuna"], answer: 2, why: "Rais na mhimili wa utendaji wanatekeleza sheria." },
      { objective: "O3", q: "Congress inaundwa na:", options: ["Seneti na Baraza la Wawakilishi", "Rais na baraza la mawaziri", "Mahakama Kuu", "Magavana"], answer: 0, why: "Congress ina sehemu mbili: Seneti na Baraza la Wawakilishi." },
      { objective: "O3", q: "Kikundi kinafanya maandamano ya amani katika bustani. Haki ipi inalinda hili?", options: ["Haki ya kesi ya haraka", "Haki ya kupiga kura ukiwa na miaka 18", "Veto ya rais", "Uhuru wa kukusanyika (Marekebisho ya Kwanza)"], answer: 3, why: "Marekebisho ya Kwanza yanalinda mikusanyiko ya amani." },
      { objective: "O3", q: "Mamlaka yanayogawanywa kati ya serikali ya taifa na majimbo yanaitwa:", options: ["Veto", "Shirikisho (federalism)", "Preamble", "Maoni"], answer: 1, why: "Shirikisho linagawa mamlaka kati ya taifa na majimbo." },
      { objective: "O4", q: "Maneno gani ya ishara yanaonyesha chanzo na matokeo?", options: ["Matokeo yake", "Pia", "Kwa mfano", "Zaidi ya hayo"], answer: 0, why: "\"Matokeo yake\" yanatanguliza matokeo." },
      { objective: "O4", q: "\"Kazi za viwandani ziliongezeka mijini, kwa hiyo watu walihama kutoka mashambani.\" Chanzo ni kipi?", options: ["Watu walihama kutoka mashambani", "Mashamba yalikua makubwa", "Kazi za viwandani ziliongezeka mijini", "Miji ilipungua"], answer: 2, why: "Kazi za viwandani ndizo sababu watu walihama." },
      { objective: "O4", q: "Kauli ipi inaunga mkono vizuri zaidi hitimisho kwamba sheria mpya ilipunguza majeraha kazini?", options: ["\"Sheria ilikuwa na kurasa 20.\"", "\"Ripoti za majeraha zilipungua kwa theluthi moja katika miaka mitatu baada ya sheria kuanza.\"", "\"Watu wengi waliizungumzia sheria.\"", "\"Sheria ilikuwa na jina refu.\""], answer: 1, why: "Inatoa ushahidi wa majeraha machache baada ya sheria." },
      { objective: "O5", q: "Baridi kali inaharibu sehemu kubwa ya mazao ya machungwa. Kwa kawaida bei za machungwa zinafanya nini?", options: ["Zinashuka", "Zinabaki zilezile", "Machungwa yanakuwa bure", "Zinapanda"], answer: 3, why: "Ugavi mdogo pamoja na mahitaji yaleyale kwa kawaida hupandisha bei." },
      { objective: "O5", q: "Unapaswa kusoma nini kwanza kwenye chati?", options: ["Kichwa, maandishi na vipimo", "Majibu ya kuchagua tu", "Namba ndogo kabisa", "Rangi tu"], answer: 0, why: "Vinakuambia namba zina maana gani." },
      { objective: "O5", q: "Ukosefu wa ajira ulikuwa 8% mwaka 2020 na 4% mwaka 2023. Ulishuka kiasi gani?", options: ["Pointi 2 za asilimia", "Pointi 12 za asilimia", "Pointi 4 za asilimia", "Pointi 8 za asilimia"], answer: 2, why: "8% - 4% = pointi 4 za asilimia." },
      { objective: "O5", q: "Chati inaonyesha kodi ya nyumba ikipanda kila mwaka. Hitimisho lipi linavuka takwimu?", options: ["Kodi ilipanda katika miaka hii", "Kodi itaongezeka mara mbili mwaka ujao", "Kodi ilikuwa juu zaidi mwishoni kuliko mwanzoni", "Chati inaonyesha miaka kadhaa"], answer: 1, why: "Chati haionyeshi mwaka ujao." },
      { objective: "O2", q: "Preamble inaanza na \"We the People\" (Sisi Watu). Hii inaonyesha nini kuhusu mtazamo wa serikali?", options: ["Mamlaka yanatoka kwa watu", "Mamlaka yanatoka kwa mfalme", "Majimbo peke yake ndiyo yana mamlaka", "Mahakama ziliiandika"], answer: 0, why: "\"We the People\" inaonyesha serikali imeundwa na watu na kwa ajili ya watu." },
      { objective: "O4", q: "Kwa nini viongozi waliandika Katiba mwaka 1787?", options: ["Nchi haikuwa na majimbo", "Mfalme aliwaomba", "Bill of Rights ilikuwa imeshindwa", "Serikali chini ya Articles of Confederation ilikuwa dhaifu mno"], answer: 3, why: "Articles of Confederation dhaifu zilisababisha mpango mpya wa serikali." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [2, 3, 4, 7, 9, 12, 13, 14, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, soma tena sehemu hiyo ya hati na urekebishe jibu lako.",
    criteria: [
      { name: "Chanzo na mtazamo", objective: "O2", notYet: "Aina ya chanzo au mwandishi si sahihi au hayupo.", meets: "Mwandishi, tarehe na aina ya chanzo sahihi, na mtazamo unaolingana na nani aliandika na kwa nini.", exceeds: "Pia anaeleza jinsi mtazamo unavyoathiri kile hati inachosema." },
      { name: "Wazo kuu, ukweli na maoni", objective: "O2", notYet: "Wazo kuu si sahihi, au ukweli na maoni vimechanganywa.", meets: "Wazo kuu sahihi kwa sentensi moja, ukweli mmoja na lengo au maoni moja, kila kimoja kikiunganishwa na maneno.", exceeds: "Ananukuu maneno halisi yanayoonyesha kila jibu." },
      { name: "Chanzo na matokeo", objective: "O4", notYet: "Hakuna chanzo wala matokeo, au vimegeuzwa.", meets: "Chanzo kimoja sahihi na matokeo moja sahihi yanayohusiana na hati.", exceeds: "Anaonyesha mfululizo: chanzo, matokeo na matokeo ya baadaye." },
      { name: "Uhusiano na serikali", objective: "O3", notYet: "Hakuna mhimili wala haki iliyotajwa, au ni isiyo sahihi.", meets: "Anataja mhimili au haki inayohusika na anaeleza kwa nini kwa sentensi moja.", exceeds: "Pia anatoa mfano wa udhibiti na mizani au haki inayotumika leo." },
      { name: "Kusoma takwimu", objective: "O5", notYet: "Hakumaliza zoezi la grafu katika Somo la 5.", meets: "Alimaliza zoezi la grafu la Somo la 5 kwa hitimisho linalobaki ndani ya takwimu.", exceeds: "Pia anaeleza badiliko la bei kwa kutumia ugavi na mahitaji." },
      { name: "Mpango wa kusoma", objective: "O1", notYet: "Hakuna mpango wa kusoma, au hakuna tarehe.", meets: "Mpango wa kusoma wenye angalau tarehe moja kila wiki hadi wiki anayolenga kufanya mtihani.", exceeds: "Pia una tarehe ya GED Ready au tarehe ya mtihani iliyokwisha kupangwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au zaidi katika kila mstari wa rubriki",
      "Wanafunzi wanaofanya GED Ready au mtihani wa mfano wa bure wa ged.com ndani ya siku 30",
      "Wanafunzi wanaojiandikisha au kufaulu mtihani wa GED wa Social Studies ndani ya siku 90 (wanavyoripoti wenyewe)",
      "Programu washirika zinaripoti wanafunzi wengi zaidi wakimaliza masomo yote manne ya GED na kuendelea na mafunzo ya kazi au chuo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, tableti au kompyuta yenye intaneti, au masomo yaliyochapishwa",
      "Karatasi na kalamu kwa majibu ya mazoezi na karatasi ya kuchambua chanzo",
      "Nakala iliyochapishwa au ya kwenye skrini ya Preamble na Bill of Rights kutoka archives.gov",
      "Mitihani ya mfano ya bure ya ged.com; GED Ready kama mwanafunzi ataamua kuinunua",
      "Kama dakika 90 kwa masomo na majaribio, pamoja na kama dakika 45 kwa kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Anza na jaribio la awali na mtihani wa mfano wa bure wa Social Studies wa ged.com ili kujua kila mwanafunzi anahitaji zaidi eneo gani la ujuzi.",
      "Someni Preamble kwa sauti pamoja na mweke kila lengo kwa maneno ya kila siku kabla wanafunzi hawajaandika karatasi zao.",
      "Weka mada za siasa bila upendeleo: fundisha jinsi serikali inavyofanya kazi na jinsi ya kupima ushahidi, si upande gani wa kuchagua.",
      "Tumia chati halisi za eneo lenu (kwa mfano takwimu za kazi au za kodi ya nyumba za kaunti) kwa mazoezi zaidi ya grafu, na ukague namba kwenye chanzo rasmi.",
      "Angalia jimbo lako linatumia mtihani upi (GED au HiSET) na ushiriki vituo vya mtihani vya eneo lako na msaada wowote wa ada."
    ]
  }
};
