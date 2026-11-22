"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-climate-smart.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CSA = { name: "FAO: Kitabu cha marejeo cha kilimo kinachozingatia tabianchi (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const KMD = { name: "Kenya Meteorological Department (utabiri wa msimu, taarifa za hali ya hewa kwa kilimo)", url: "https://meteo.go.ke" };
const NIMET = { name: "Mamlaka ya Hali ya Hewa ya Nigeria (NiMet)", url: "https://nimet.gov.ng" };
const CGIAR_MAIZE = { name: "CGIAR: Mahindi yanayozingatia tabianchi (yanayostahimili ukame)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const ICIPE_PUSHPULL = { name: "icipe: Teknolojia ya push-pull inazuia viwavijeshi vamizi (fall armyworm)", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const FAO_EO = { name: "FAO GIEWS: Uchunguzi wa dunia kwa satelaiti (viashiria vya ukame na mimea)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };

module.exports = {
  id: "agri-climate-smart-sw",
  lang: "sw",
  translationOf: "agri-climate-smart",
  category: "Agriculture (Africa)",
  name: "Kilimo Kinachozingatia Tabianchi",
  skills: "Kueleza kilimo kinachozingatia tabianchi, Kusoma utabiri rasmi wa msimu, Kuchora hatari za tabianchi za shamba lako, Kuchagua mbinu za udongo na maji, Kuchagua mazao na aina zinazostahimili, Kutumia miti, mifugo na bima kugawanya hatari",
  outcome: "kuandika na kuanza mpango wa kilimo kinachozingatia tabianchi kwa shamba lako mwenyewe: hatari za tabianchi zinazolikabili mwaka mzima, kile utabiri rasmi wa msimu unachosema, na mbinu za udongo, maji, mazao, miti, mifugo na bima utakazotumia msimu huu.",
  about: [
    "Kozi hii ni kwa wakulima wadogo, vijana wakulima, maafisa ugani na viongozi wa vikundi vya wakulima nchini Kenya, Nigeria na kote Afrika wanaoona vipindi virefu vya ukame, mvua kubwa zaidi, joto zaidi na wadudu wapya, na wanataka njia za vitendo za kuweka mavuno na mapato imara.",
    "Sura ya 1 inakusaidia kuelewa hatari ya tabianchi kwenye shamba lako: kilimo kinachozingatia tabianchi ni nini, jinsi ya kusoma utabiri rasmi wa msimu kutoka idara ya hali ya hewa ya nchi yako, na jinsi ya kuchora kalenda rahisi ya hatari za tabianchi. Sura ya 2 inahusu mbinu: kuweka udongo na maji shambani, kuchagua mazao na aina zinazostahimili, na kutumia miti, mifugo na bima kugawanya hatari.",
    "Kila shamba ni tofauti. Tumia kozi hii pamoja na ushauri wa afisa ugani, duka la pembejeo za kilimo na mifugo (agrovet) au taasisi ya utafiti, na jaribu mbinu mpya kwenye kipande kidogo kwanza. Kila somo linachukua kama dakika tano na linaisha na kazi kwenye shamba lako. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa kilimo kinachozingatia tabianchi kwa shamba lako (au shamba la mfano kama ekari 2 za mahindi na maharagwe huko Machakos, au ekari 3 za mtama na kunde huko Kano): kalenda ya hatari za tabianchi mwezi kwa mwezi, kile utabiri rasmi wa msimu huu unachosema na tarehe uliyousoma, na angalau mbinu tano utakazotumia (angalau moja kwa kila kundi: udongo na maji, mazao na aina, na kugawanya hatari), pamoja na lini utaanza kila moja na utajuaje kama ilifanya kazi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo, vijana wakulima, maafisa ugani na viongozi wa vikundi vya wakulima nchini Kenya, Nigeria na kote Afrika wanaokabiliwa na vipindi virefu vya ukame, mvua kubwa zaidi, joto zaidi na wadudu wapya.",
    startingPoint: "Wanaijua vizuri ardhi yao, mazao yao na misimu yao, na wengi tayari wanatumia baadhi ya mbinu za kilimo kinachozingatia tabianchi bila kuziita hivyo. Wachache husoma utabiri rasmi wa msimu, huchora kalenda ya hatari za tabianchi au hupanga mbinu za kugawanya hatari katika msimu.",
    gap: "Mvua zinazobadilika na wadudu wapya hufanya mavuno na mapato yasiwe imara. Wakulima wanahitaji kusoma utabiri rasmi, kuona sehemu za hatari katika mwaka wao, na kuchagua mbinu za udongo, maji, mazao, miti, mifugo na bima zinazofaa shamba lao, wakizijaribu kabla ya kuzitumia kila mahali.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanatumia Kiswahili au Kiingereza kama lugha ya pili",
      "Vifaa: simu ya kawaida, redio au taarifa ya ugani; simu janja inasaidia lakini si lazima",
      "Gharama na nguvu kazi: anza na mbinu za gharama ndogo zilizojaribiwa kwenye eneo dogo",
      "Utabiri, aina za mbegu, bima na mamlaka za usimamizi zinatofautiana kwa nchi: wanafunzi wanakagua KMD, NiMet au idara ya nchi yao, maafisa ugani na wauzaji wenye leseni",
      "Muda: wanafunzi wanapanga masomo kati ya kazi za shamba na misimu"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mbinu zinazotumika kwenye shamba lako au kijijini kwenu", action: "kueleza malengo matatu ya kilimo kinachozingatia tabianchi na kuamua kama kila mbinu inazingatia tabianchi", standard: "ukitaja lengo ambalo kila mbinu inasaidia" },
    { id: "O2", condition: "Kabla ya msimu wa mvua", action: "kupata utabiri wa msimu wa idara ya hali ya hewa ya nchi yako na kuandika mabadiliko mawili unayoleta katika mpango wako", standard: "ukiandika unachosema, tarehe uliyousoma, na kwamba unatoa uwezekano, si ahadi" },
    { id: "O3", condition: "Kwa shamba lako mwenyewe au shamba la mfano", action: "kuchora kalenda ya hatari za tabianchi mwezi kwa mwezi na kuzungushia duara sehemu za hatari", standard: "ikiwa na misimu, kazi za shamba, hatari na angalau sehemu mbili za hatari zilizowekwa alama" },
    { id: "O4", condition: "Ukizingatia mteremko na mtiririko wa maji kwenye shamba lako", action: "kuchagua mbinu za udongo na maji zinazofaa na kupanga jaribio dogo", standard: "ukilinganisha eneo lililojaribiwa na njia yako ya kawaida" },
    { id: "O5", condition: "Ukizingatia zao lako kuu na hatari za eneo lako", action: "kuchagua aina zilizothibitishwa zinazostahimili ukame au zinazokomaa mapema, zao linalostahimili ukame na mpango wa upandaji unaopunguza hatari", standard: "ukinunua mbegu kwa wauzaji waliosajiliwa tu" },
    { id: "O6", condition: "Zaidi ya zao lako kuu", action: "kupanga angalau njia moja ya kugawanya hatari kwa miti, chakula na maji ya mifugo, au bima", standard: "ukikagua kichocheo cha malipo ya bima na kwamba kampuni ya bima ina leseni" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuelewa hatari ya tabianchi kwenye shamba lako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kilimo kinachozingatia tabianchi ni nini",
          minutes: 5,
          goal: "Eleza malengo matatu ya kilimo kinachozingatia tabianchi na uamue kama mbinu fulani inazingatia tabianchi.",
          text: [
            "Kilimo kinachozingatia tabianchi (kwa Kiingereza climate-smart agriculture, CSA) ni njia ya kuchagua mbinu za kilimo huku ukifikiria mabadiliko ya tabianchi. FAO (Shirika la Chakula na Kilimo la Umoja wa Mataifa) inaeleza malengo matatu: kuongeza uzalishaji na mapato kwa njia endelevu; kusaidia mashamba na familia kuzoea na kujenga ustahimilivu dhidi ya majanga ya tabianchi; na kupunguza au kuondoa uzalishaji wa gesi joto pale inapowezekana.",
            "FAO inasisitiza kwamba mbinu haihitaji kutimiza malengo yote matatu. Kwa wakulima wadogo wengi, chakula na mapato vinakuja kwanza; kupunguza gesi joto ni faida ya ziada. Mbinu inazingatia tabianchi ikiwa inafaa shamba lako na inalifanya lizalishe zaidi na listahimili zaidi.",
            "Mifano ambayo wakulima wa Afrika tayari wanatumia: matandazo na kulima kidogo ili udongo ubaki na unyevu, mashimo ya kupandia na mabwawa madogo ya maji, aina zinazostahimili ukame na zinazokomaa mapema, kuchanganya mahindi na maharagwe au kunde, push-pull dhidi ya vipekecha shina na viwavijeshi vamizi, miti shambani, malisho bora ya mifugo, na bima ya mazao au mifugo."
          ],
          words: [["Kilimo kinachozingatia tabianchi (CSA)", "kilimo kinachoongeza uzalishaji, kinachosaidia mashamba kuzoea mabadiliko ya tabianchi, na kinachopunguza gesi joto pale inapowezekana."], ["Ustahimilivu", "uwezo wa shamba na familia kukabili janga, kama ukame, na kupona haraka."], ["Kuzoea (adaptation)", "kubadilisha jinsi unavyolima ili kukabili tabianchi inayobadilika."]],
          slides: [
            { title: "Malengo matatu (FAO)", bullets: ["Kuongeza uzalishaji na mapato", "Kuzoea na kujenga ustahimilivu", "Kupunguza gesi joto pale inapowezekana"] },
            { title: "Si yote matatu kwa pamoja", bullets: ["Chakula na mapato vinakuja kwanza", "Kupunguza gesi joto ni faida ya ziada", "Inafaa shamba lako + inastahimili zaidi = inazingatia tabianchi"] },
            { title: "Mifano barani Afrika", bullets: ["Matandazo, kulima kidogo, mashimo ya kupandia, mabwawa madogo", "Aina zinazostahimili ukame, kuchanganya mazao, push-pull", "Miti shambani, malisho, bima"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Orodhesha mbinu tatu zinazotumika tayari kwenye shamba lako au kijijini kwenu. Kwa kila moja, andika lengo la CSA linalosaidiwa kati ya matatu (uzalishaji, ustahimilivu, gesi joto).",
          youCanNow: "kueleza malengo matatu ya kilimo kinachozingatia tabianchi na kuamua kama mbinu fulani inazingatia tabianchi.",
          quickCheck: [
            { objective: "O1", q: "Ni mbinu ipi inayozingatia tabianchi ambayo wakulima wa Afrika tayari wanatumia?", options: ["Kuweka matandazo ili udongo ubaki na unyevu", "Kuchoma mabaki yote ya mazao", "Kupanda zao moja tu kila mwaka", "Kulima shamba mara nyingi"], answer: 0, why: "Matandazo yanaweka udongo na unyevu na kuufunika, na hivyo yanasaidia uzalishaji na ustahimilivu." },
            { objective: "O1", q: "Mbinu inaongeza mavuno yako na inakusaidia kuvumilia vipindi vya ukame, lakini haipunguzi gesi joto. Je, inazingatia tabianchi?", options: ["Hapana; lazima itimize yote matatu", "Ndiyo, ikiwa inafaa shamba lako na inaboresha uzalishaji na ustahimilivu", "Ikiwa tu serikali imeikubali", "Ikiwa tu ni mpya"], answer: 1, why: "FAO inasema mbinu haihitaji kutimiza malengo yote matatu; kwa wakulima wadogo, chakula na mapato vinakuja kwanza." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusoma utabiri rasmi wa msimu",
          minutes: 5,
          goal: "Pata na utumie utabiri wa msimu wa idara ya hali ya hewa ya nchi yako kupanga msimu.",
          text: [
            "Kabla ya kila msimu wa mvua, idara za hali ya hewa za nchi hutoa utabiri wa msimu: kama mvua zinatarajiwa kuwa juu ya kawaida, karibu na kawaida au chini ya kawaida, na lini zinaweza kuanza na kuisha. Nchini Kenya, Kenya Meteorological Department (KMD) inatoa utabiri wa msimu na taarifa za hali ya hewa kwa kilimo. Nchini Nigeria, Nigerian Meteorological Agency (NiMet) inatoa utabiri wa tabianchi wa msimu. Nchi nyingine zina idara zao; utabiri mwingi pia hutangazwa redioni na kupitia maafisa ugani.",
            "Utabiri wa msimu unatoa uwezekano, si ahadi. \"Chini ya kawaida\" inamaanisha uwezekano mkubwa zaidi wa mvua kidogo kuliko kawaida katika eneo lako, si kwamba hakika kutakuwa kukavu. Utumie kurekebisha mpango, si kuweka kila kitu kwenye dau moja: kwa mfano chagua aina inayokomaa mapema, panda tarehe sahihi, panga kuvuna maji ya mvua, au punguza eneo la zao linalohitaji maji mengi.",
            "Tumia utabiri wa muda mfupi (siku chache zijazo) kwa maamuzi ya kila siku, kama lini kupanda baada ya mvua kuanza, lini kunyunyizia dawa au kuweka mbolea ya kukuzia, na lini kuvuna na kukausha."
          ],
          steps: ["Tafuta tovuti, kipindi cha redio au taarifa ya ugani ya idara ya hali ya hewa ya nchi yako.", "Soma utabiri wa msimu kwa kaunti au jimbo lako.", "Andika: juu, karibu au chini ya kawaida; mwanzo na mwisho unaotarajiwa wa mvua.", "Andika mabadiliko mawili utakayofanya kwa sababu yake.", "Kagua utabiri wa muda mfupi kwa siku za kupanda, kuweka mbolea ya kukuzia na kuvuna."],
          words: [["Utabiri wa msimu", "makadirio ya mvua na joto kwa msimu ujao, yanayotolewa kama uwezekano."], ["Kuanza kwa mvua (onset)", "mwanzo wa msimu wa mvua."], ["Taarifa ya hali ya hewa kwa kilimo (agrometeorological bulletin)", "ripoti ya hali ya hewa iliyoandikwa kwa ajili ya wakulima, inayounganisha hali ya hewa na mazao."]],
          slides: [
            { title: "Utabiri rasmi wa msimu", bullets: ["Kenya: Kenya Meteorological Department (KMD)", "Nigeria: NiMet", "Pia redioni na kutoka kwa maafisa ugani"] },
            { title: "Uwezekano, si ahadi", bullets: ["Juu, karibu au chini ya kawaida", "Mwanzo na mwisho unaotarajiwa wa mvua", "Rekebisha; usiweke kila kitu kwenye dau moja"] },
            { title: "Utumie", bullets: ["Aina inayokomaa mapema ikiwa mvua ni chache", "Panga kuvuna maji ya mvua", "Utabiri wa muda mfupi kwa kazi za kila siku"] }
          ],
          sources: [KMD, NIMET],
          tryIt: "Tafuta utabiri wa karibuni wa msimu kwa eneo lako kutoka KMD, NiMet au idara ya hali ya hewa ya nchi yako. Andika unachosema, tarehe uliyousoma, na mabadiliko mawili utakayofanya katika mpango wako.",
          youCanNow: "kupata utabiri rasmi wa msimu na kuutumia kurekebisha mpango wako wa msimu.",
          quickCheck: [
            { objective: "O2", q: "Utabiri wa msimu unakuambia nini?", options: ["Mvua kamili ya kila siku", "Bei ya mahindi", "Kama mvua huenda zikawa juu, karibu au chini ya kawaida", "Mbegu gani ya kununua"], answer: 2, why: "Utabiri wa msimu unatoa uwezekano wa mvua kuwa juu, karibu au chini ya kawaida, na lini mvua zinaweza kuanza na kuisha." },
            { objective: "O2", q: "Utabiri unasema mvua zinaweza kuisha mapema. Badiliko la busara ni lipi?", options: ["Panda aina inayochelewa kukomaa", "Panda muda mrefu baadaye kuliko kawaida", "Usifanye chochote", "Chagua aina inayokomaa mapema"], answer: 3, why: "Aina inayokomaa mapema inaweza kumaliza kabla mvua hazijaisha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuchora kalenda ya hatari za tabianchi ya shamba lako",
          minutes: 5,
          goal: "Chora kalenda ya mwezi kwa mwezi ya hatari za tabianchi zinazolikabili shamba lako.",
          text: [
            "Kalenda ya hatari za tabianchi inaweka mazao na mifugo yako kando ya hatari za kila mwezi. Chora safu wima 12 za miezi. Kwenye mstari wa kwanza, andika misimu yako (masika, vuli, kiangazi, au msimu wa mvua na msimu wa kiangazi katika sehemu kubwa ya Nigeria). Chini yake, andika unachofanya kila mwezi: kutayarisha shamba, kupanda, kupalilia, kuweka mbolea ya kukuzia, kuvuna, kukausha, kuuza, na lini mifugo inahitaji chakula na maji zaidi.",
            "Kisha weka alama kwenye hatari: mvua kuchelewa kuanza au kuisha mapema, vipindi vya ukame katikati ya msimu, dhoruba kali na mafuriko, joto wakati wa kutoa maua, wadudu na magonjwa yanayofuata hali ya hewa (viwavijeshi vamizi, vidukari, magonjwa ya ukungu wakati wa unyevu), na hasara baada ya mavuno nafaka inapohifadhiwa ikiwa na unyevu.",
            "Tafuta sehemu za hatari: miezi ambapo kazi muhimu inakutana na hatari kubwa, kama mahindi kutoa maua katika mwezi ambao mara nyingi una kipindi cha ukame. Hapo ndipo mbinu za kilimo kinachozingatia tabianchi zinasaidia zaidi. Waulize wakulima wazee jinsi hali imebadilika kwa miaka."
          ],
          steps: ["Chora safu wima 12 za miezi; andika misimu yako.", "Andika kazi zako za shamba na mahitaji ya mifugo kwa kila mwezi.", "Weka alama kwenye hatari za tabianchi na wadudu wanaofuata hali ya hewa.", "Zungushia duara sehemu za hatari ambapo kazi muhimu inakutana na hatari kubwa.", "Waulize wakulima wazee nini kimebadilika."],
          words: [["Kipindi cha ukame", "siku au wiki bila mvua ya kutosha katikati ya msimu wa mvua."], ["Sehemu ya hatari", "wakati ambapo kazi muhimu ya shamba inakutana na hatari kubwa ya tabianchi."]],
          slides: [
            { title: "Safu wima kumi na mbili", bullets: ["Misimu juu", "Kazi za shamba na mahitaji ya mifugo kwa kila mwezi"] },
            { title: "Weka alama kwenye hatari", bullets: ["Mvua kuchelewa, kuisha mapema, vipindi vya ukame", "Dhoruba, mafuriko, joto wakati wa kutoa maua", "Wadudu wanaofuata hali ya hewa, hifadhi yenye unyevu"] },
            { title: "Tafuta sehemu za hatari", bullets: ["Kazi muhimu inakutana na hatari kubwa", "Hapo mbinu za CSA zinasaidia zaidi", "Waulize wakulima wazee nini kimebadilika"] }
          ],
          sources: [FAO_EO],
          tryIt: "Chora kalenda ya hatari za tabianchi ya shamba lako kwenye karatasi au kwenye jedwali (spreadsheet) la simu. Zungushia duara angalau sehemu mbili za hatari.",
          youCanNow: "kuchora kalenda ya hatari za tabianchi ya shamba lako na kupata sehemu zake za hatari.",
          quickCheck: [
            { objective: "O3", q: "Nini kinaingia kwenye mistari iliyo chini ya miezi katika kalenda ya hatari za tabianchi?", options: ["Kazi zako za shamba, mahitaji ya mifugo na hatari", "Bei za soko tu", "Siku za kuzaliwa za familia yako", "Jumla ya mvua tu"], answer: 0, why: "Kalenda inaweka kazi za shamba na mahitaji ya mifugo kando ya hatari za kila mwezi." },
            { objective: "O3", q: "Unahifadhi mahindi katika mwezi ambao mara nyingi una unyevu. Unaweka alama gani?", options: ["Hakuna; hifadhi iko salama", "Hatari ya hasara baada ya mavuno kutokana na nafaka yenye unyevu", "Hatari ya ukame", "Kazi ya kupanda"], answer: 1, why: "Nafaka iliyohifadhiwa ikiwa na unyevu katika miezi ya mvua ni hatari ya hasara baada ya mavuno." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuelewa hatari ya tabianchi kwenye shamba lako",
        questions: [
          { objective: "O1", q: "Ni lipi kati ya malengo matatu ya FAO ya kilimo kinachozingatia tabianchi?", options: ["Kutumia kemikali nyingi iwezekanavyo", "Kusaidia mashamba kuzoea na kujenga ustahimilivu", "Kupanda zao moja tu", "Kukata miti yote"], answer: 1, why: "CSA inalenga uzalishaji, kuzoea na ustahimilivu, na kupunguza gesi joto pale inapowezekana." },
          { objective: "O1", q: "Je, mbinu inayozingatia tabianchi lazima itimize malengo yote matatu kwa wakati mmoja?", options: ["Ndiyo, kila wakati", "Nchini Kenya tu", "Hapana; inapaswa kufaa shamba na kuboresha uzalishaji na ustahimilivu", "Kwenye mashamba makubwa tu"], answer: 2, why: "FAO inasema mbinu haihitaji kutimiza kila lengo; chakula na mapato vinakuja kwanza." },
          { objective: "O2", q: "Utabiri wa msimu unasema \"mvua chini ya kawaida\". Hii inamaanisha:", options: ["Uwezekano mkubwa zaidi wa mvua kidogo kuliko kawaida", "Hakika haitanyesha", "Mafuriko ni hakika", "Hakuna kitu cha maana"], answer: 0, why: "Utabiri wa msimu unatoa uwezekano, si uhakika." },
          { objective: "O2", q: "Mkulima wa Nigeria anapaswa kutafuta wapi utabiri rasmi wa msimu?", options: ["Uvumi sokoni", "Kalenda ya mwaka jana", "Mtu asiyejulikana kwenye mitandao ya kijamii", "NiMet au utabiri wake unaotangazwa na maafisa ugani na redio"], answer: 3, why: "NiMet ni idara rasmi ya hali ya hewa ya Nigeria." },
          { objective: "O3", q: "Sehemu ya hatari kwenye kalenda ya hatari za tabianchi ni:", options: ["Wakati ambapo kazi muhimu ya shamba inakutana na hatari kubwa ya tabianchi", "Mahali pa kuuza mazao", "Aina ya mdudu", "Mwezi usio na kazi ya shamba"], answer: 0, why: "Sehemu za hatari zinaonyesha mahali ambapo mbinu zinasaidia zaidi." }
        ]
      }
    },
    {
      name: "Sura 2: Mbinu za kilimo kinachozingatia tabianchi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuweka udongo na maji shambani",
          minutes: 6,
          goal: "Chagua mbinu za udongo na maji zinazofaa shamba lako na mteremko wake.",
          text: [
            "Udongo wenye afya unashika maji mengi zaidi na unalisha mazao wakati wa vipindi vya ukame. Kanuni tatu za kilimo hifadhi zinasaidia: usisumbue udongo zaidi ya inavyohitajika (kulima kidogo), uweke udongo ukiwa umefunikwa (mabaki ya mazao au matandazo badala ya kuchoma), na badilisha au changanya mazao (kwa mfano mahindi na maharagwe, kunde au mbaazi). Ongeza samadi au mboji ili kujenga viumbehai vya udongo.",
            "Vuna mvua pale inapoangukia. Mashimo ya kupandia au mabonde madogo (yanayoitwa zai katika Sahel) yanakusanya maji na samadi kuzunguka kila mmea. Matuta yaliyofungwa na kingo za kontua yanazuia maji kutiririka nje. Kwenye miteremko, matuta ya ngazi kama fanya juu nchini Kenya, vipande vya nyasi na miti kwenye kontua vinazuia mmomonyoko. Mabwawa madogo na kuvuna maji ya paa vinahifadhi maji kwa mifugo, vitalu na bustani za jikoni.",
            "Anza kidogo: jaribu mbinu kwenye sehemu moja ya shamba, ilinganishe na njia yako ya kawaida, na endelea na kinachofanya kazi. Muulize afisa ugani kuhusu miundo ya eneo lako na nguvu kazi inayohitajika."
          ],
          steps: ["Acha kuchoma mabaki; yaache kama matandazo.", "Punguza kulima pale magugu yanapoweza kudhibitiwa.", "Badilisha au changanya mazao na jamii ya kunde.", "Vuna mvua: mashimo ya kupandia, matuta yaliyofungwa, kingo za kontua.", "Kwenye miteremko: matuta ya ngazi, vipande vya nyasi, miti kwenye kontua.", "Jaribu kwenye eneo dogo kwanza na ulinganishe."],
          words: [["Kilimo hifadhi (conservation agriculture)", "kilimo chenye usumbufu mdogo wa udongo, udongo kufunikwa wakati wote, na kubadilisha mazao."], ["Matandazo", "tabaka la mabaki ya mazao, nyasi au majani juu ya udongo ili kuuweka na unyevu na baridi."], ["Mashimo ya zai / mabonde ya kupandia", "mashimo madogo yanayokusanya maji ya mvua na samadi kuzunguka mimea."], ["Fanya juu", "tuta la ngazi la Kenya linalotengenezwa kwa kurusha udongo kwenda juu ya mteremko kutoka kwenye mtaro ili kufanya ukingo."]],
          slides: [
            { title: "Udongo wenye afya unashika maji", bullets: ["Kulima kidogo", "Funika udongo: matandazo, usichome", "Badilisha au changanya mazao na jamii ya kunde"] },
            { title: "Vuna mvua pale inapoangukia", bullets: ["Mashimo na mabonde ya kupandia (zai)", "Matuta yaliyofungwa na kingo za kontua", "Mabwawa madogo na kuvuna maji ya paa"] },
            { title: "Linda miteremko", bullets: ["Matuta ya ngazi kama fanya juu", "Vipande vya nyasi na miti kwenye kontua"] },
            { title: "Anza kidogo", bullets: ["Jaribu kwenye sehemu ya shamba", "Linganisha na njia yako ya kawaida", "Muulize afisa ugani kuhusu miundo ya eneo lako"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Tembea shambani kwako baada ya mvua au litazame sasa. Weka alama mahali maji yanapotiririka nje, mahali udongo unaposombwa, na mahali maji yanaposimama. Chagua mbinu moja ya udongo au maji kwa sehemu moja na uandike jinsi utakavyoijaribu.",
          youCanNow: "kuchagua na kujaribu mbinu za udongo na maji zinazoweka unyevu na udongo shambani kwako.",
          quickCheck: [
            { objective: "O4", q: "Matuta yaliyofungwa na kingo za kontua ni kwa ajili ya nini?", options: ["Kuhifadhi nafaka", "Kulisha mifugo", "Kuzuia maji kutiririka nje ya shamba", "Kuweka alama ya mpaka wa shamba"], answer: 2, why: "Vinashika mvua shambani ili iingie ardhini badala ya kutiririka nje." },
            { objective: "O4", q: "Maji yanakimbia kwa kasi kwenye shamba lako la mteremko baada ya mvua na kubeba udongo. Unachagua nini?", options: ["Lima kwenda juu na chini ya mteremko", "Choma mabaki", "Acha udongo wazi", "Vipande vya nyasi au matuta ya ngazi kwenye kontua"], answer: 3, why: "Matuta ya ngazi na vipande vya nyasi kwenye kontua vinazuia mmomonyoko kwenye miteremko." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuchagua mazao na aina zinazostahimili",
          minutes: 5,
          goal: "Chagua mazao, aina na mipango ya upandaji inayopunguza hatari ya tabianchi.",
          text: [
            "Aina za mbegu ni muhimu. Kituo cha utafiti wa mahindi cha CGIAR, CIMMYT, pamoja na washirika wamezalisha aina za mahindi zinazostahimili ukame ambazo zimetolewa katika nchi nyingi za Afrika kusini mwa Sahara; CGIAR inaripoti kwamba zinaweza kutoa mavuno mengi zaidi kwa wazi kuliko aina za kawaida wakati wa ukame. Maharagwe na mahindi yanayokomaa mapema yanaepuka ukame wa mwisho wa msimu. Muulize muuzaji wa pembejeo (agrovet) au afisa ugani aina gani zilizothibitishwa zinafaa eneo lako, na nunua mbegu zilizothibitishwa kwa wauzaji waliosajiliwa.",
            "Mazao pia ni muhimu. Mtama, uwele, muhogo, kunde na mbaazi yanastahimili ukavu kuliko mahindi katika maeneo mengi. Kulima zaidi ya zao moja, na kuchanganya mazao, kunagawanya hatari: zao moja likishindwa, jingine linaweza kufaulu.",
            "Wadudu hubadilika pamoja na tabianchi. Push-pull, iliyotengenezwa na icipe pamoja na washirika, inachanganya mahindi au mtama na desmodium na kuyazungushia mpaka wa nyasi ya Napier au Brachiaria; icipe inaripoti kwamba inapunguza sana uharibifu wa vipekecha shina, striga (kiduha) na viwavijeshi vamizi. Panda kwa tarehe tofauti katika vitalu vidogo, na panda haraka mvua za kweli zinapoanza."
          ],
          steps: ["Muulize afisa ugani au agrovet kuhusu aina zilizothibitishwa zinazostahimili ukame au zinazokomaa mapema kwa eneo lako.", "Nunua mbegu zilizothibitishwa kwa muuzaji aliyesajiliwa.", "Ongeza zao linalostahimili ukame (mtama, muhogo, kunde, mbaazi).", "Changanya mazao ili kugawanya hatari; fikiria push-pull kwa mahindi au mtama.", "Panda haraka mvua za kweli zinapoanza; panda vitalu vidogo kwa tarehe tofauti."],
          words: [["Aina inayostahimili ukame", "aina ya zao iliyozalishwa ili kutoa mavuno bora kuliko nyingine maji yanapokuwa machache."], ["Inayokomaa mapema", "iko tayari kuvunwa mapema, kwa hiyo inaweza kuepuka ukame wa mwisho wa msimu."], ["Mbegu zilizothibitishwa", "mbegu zilizokaguliwa na mamlaka rasmi ya mbegu kwa usafi na ubora."], ["Push-pull", "mfumo ambapo desmodium inafukuza wadudu kutoka kwenye mahindi au mtama na nyasi ya mpakani inawavuta mbali."]],
          slides: [
            { title: "Aina za mbegu", bullets: ["Mahindi yanayostahimili ukame (CGIAR/CIMMYT)", "Mahindi na maharagwe yanayokomaa mapema", "Mbegu zilizothibitishwa kutoka kwa wauzaji waliosajiliwa"] },
            { title: "Mazao", bullets: ["Mtama, uwele, muhogo, kunde, mbaazi", "Zaidi ya zao moja kunagawanya hatari"] },
            { title: "Wadudu na muda", bullets: ["Push-pull: desmodium + nyasi ya mpakani (icipe)", "Panda haraka mvua za kweli zinapoanza", "Panda vitalu vidogo kwa tarehe tofauti"] }
          ],
          sources: [CGIAR_MAIZE, ICIPE_PUSHPULL],
          tryIt: "Kwa zao lako kuu, tafuta aina moja iliyothibitishwa inayostahimili ukame au inayokomaa mapema inayouzwa karibu nawe (muulize agrovet au afisa ugani), na chagua zao moja linalostahimili ukame la kuongeza. Andika utakapopanda kila moja.",
          youCanNow: "kuchagua mazao, aina na mipango ya upandaji inayopunguza hatari ya tabianchi ya shamba lako.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini aina zinazokomaa mapema zinasaidia katika maeneo makavu?", options: ["Zinaweza kuepuka ukame wa mwisho wa msimu", "Zinahitaji maji mengi zaidi", "Hazipati wadudu kamwe", "Hazihitaji mbegu"], answer: 0, why: "Mazao yanayokomaa mapema yanamaliza kabla ukame wa mwisho wa msimu haujafika." },
            { objective: "O5", q: "Mahindi yako mara nyingi yanashindwa katika miaka ya ukame. Nini kinaongeza kinga?", options: ["Panda mahindi zaidi tu", "Ongeza zao linalostahimili ukame kama mtama au kunde", "Panda baada ya kila mtu", "Nunua mbegu zisizothibitishwa sokoni"], answer: 1, why: "Kulima zaidi ya zao moja, ikiwemo zao linalostahimili ukame, kunagawanya hatari." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Miti, mifugo na bima: kugawanya hatari",
          minutes: 6,
          goal: "Ongeza angalau njia moja ya kugawanya hatari zaidi ya zao lako kuu, kisha andika mpango wako.",
          text: [
            "Miti shambani (kilimo mseto cha miti, agroforestry) inatoa kivuli, kizuizi cha upepo, malisho, matunda, kuni na mbao, inalinda udongo, na inahifadhi kaboni. Miti ya matunda kama miembe na miparachichi, miti inayoongeza naitrojeni udongoni, na miti ya mipakani yote inaweza kuongeza mapato yasiyotegemea mvua za msimu mmoja.",
            "Mifugo inaweza kuwa kinga, lakini pia huteseka wakati wa ukame. Panda na uhifadhi malisho (Napier, Brachiaria, mabaki ya mazao, nyasi kavu), linda vyanzo vya maji, chagua mifugo imara, na weka idadi ya mifugo kulingana na chakula unachoweza kulima au kununua. Mifugo midogo kama mbuzi na kuku inaweza kuwa rahisi zaidi kutunza katika miaka ya ukame.",
            "Bima inahamishia sehemu ya hatari kwa kampuni ya bima. Bima ya fahirisi ya hali ya hewa na bima ya mavuno ya eneo hulipa mvua au mavuno ya eneo yanaposhuka chini ya kiwango kilichowekwa, na huuzwa katika baadhi ya maeneo kupitia vyama vya ushirika, wauzaji wa pembejeo au pesa kwa simu. Uliza chama chako cha ushirika au afisa ugani, soma kinachosababisha malipo, na hakikisha kampuni ya bima ina leseni ya mamlaka ya bima ya nchi yako (nchini Kenya Insurance Regulatory Authority, nchini Nigeria NAICOM). Vikundi vya kuweka akiba na vyanzo mbalimbali vya mapato pia vinagawanya hatari."
          ],
          steps: ["Chagua miti inayofaa shamba lako: ya matunda, ya malisho, ya mipakani au inayoongeza naitrojeni.", "Panga malisho na maji ya mifugo katika msimu wote wa kiangazi.", "Linganisha idadi ya mifugo na chakula unachoweza kulima au kununua.", "Uliza kuhusu bima ya fahirisi ya hali ya hewa au ya mavuno ya eneo; soma kichocheo cha malipo; hakikisha kampuni ina leseni.", "Andika mpango wako wa kilimo kinachozingatia tabianchi."],
          words: [["Kilimo mseto cha miti (agroforestry)", "kupanda miti pamoja na mazao au mifugo kwenye ardhi moja."], ["Malisho", "mimea inayopandwa au kuhifadhiwa ili kulisha mifugo."], ["Bima ya fahirisi ya hali ya hewa (weather-index insurance)", "bima inayolipa kipimo cha hali ya hewa, kama mvua, kinaposhuka chini ya kiwango kilichowekwa."], ["Kichocheo cha malipo (payout trigger)", "hali inayofanya kampuni ya bima ilipe."]],
          slides: [
            { title: "Miti shambani", bullets: ["Kivuli, kizuizi cha upepo, malisho, matunda, kuni", "Inalinda udongo, inahifadhi kaboni", "Mapato zaidi ya msimu mmoja"] },
            { title: "Mifugo kama kinga", bullets: ["Panda na uhifadhi malisho", "Linda maji, mifugo imara", "Idadi kulingana na chakula"] },
            { title: "Bima na akiba", bullets: ["Bima ya fahirisi ya hali ya hewa na ya mavuno ya eneo", "Soma kichocheo cha malipo", "Hakikisha kampuni ya bima ina leseni"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa kilimo kinachozingatia tabianchi: kalenda ya hatari, utabiri wa msimu huu na tarehe uliyousoma, na angalau mbinu tano (udongo na maji, mazao na aina, kugawanya hatari), pamoja na tarehe za kuanza na jinsi utakavyopima mafanikio.",
          youCanNow: "kutumia miti, mifugo, bima na akiba kugawanya hatari ya tabianchi, na kuandika mpango kamili wa kilimo kinachozingatia tabianchi kwa shamba lako.",
          quickCheck: [
            { objective: "O6", q: "Kilimo mseto cha miti (agroforestry) ni nini?", options: ["Kukata miti kwa ajili ya mkaa", "Kupanda miti tu", "Kupanda miti pamoja na mazao au mifugo", "Kununua mbao"], answer: 2, why: "Kilimo mseto cha miti ni miti shambani pamoja na mazao au mifugo." },
            { objective: "O6", q: "Msimu wa kiangazi unakuja na unafuga mbuzi na ng'ombe. Unapanga nini?", options: ["Nunua mifugo zaidi", "Uza malisho yote", "Puuza vyanzo vya maji", "Malisho na maji, na idadi ya mifugo kulingana na chakula"], answer: 3, why: "Kupanga malisho na maji na kulinganisha idadi na chakula kunalinda mifugo wakati wa ukame." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mbinu za kilimo kinachozingatia tabianchi",
        questions: [
          { objective: "O4", q: "Ipi ni kanuni ya kilimo hifadhi?", options: ["Choma mabaki baada ya mavuno", "Lima kwa kina kila msimu", "Weka udongo ukiwa umefunikwa kwa matandazo au mabaki", "Lima zao lilelile milele"], answer: 2, why: "Kufunika udongo kunashika unyevu na kunalinda dhidi ya mmomonyoko." },
          { objective: "O4", q: "Mashimo ya kupandia (zai) yanasaidia kwa sababu:", options: ["Yanakusanya mvua na samadi kuzunguka kila mmea", "Yanafukuza ndege", "Yanaharakisha mavuno", "Yanachukua nafasi ya mbegu"], answer: 0, why: "Yanakusanya maji na virutubisho pale mizizi ilipo." },
          { objective: "O5", q: "Unapaswa kununua wapi mbegu za aina inayostahimili ukame?", options: ["Kwa muuzaji yeyote wa barabarani", "Ghala la nafaka la jirani", "Kutoka nafaka iliyonunuliwa sokoni", "Kwa muuzaji aliyesajiliwa anayeuza mbegu zilizothibitishwa"], answer: 3, why: "Mbegu zilizothibitishwa zimekaguliwa kwa usafi na ubora." },
          { objective: "O5", q: "Katika push-pull, desmodium inafanya nini?", options: ["Inavutia wadudu kwenye mahindi", "Inafukuza wadudu kutoka kwenye mahindi au mtama", "Inachukua nafasi ya mbolea kabisa", "Inalisha ndege"], answer: 1, why: "Desmodium inasukuma wadudu mbali; nyasi ya mpakani inawavuta nje." },
          { objective: "O6", q: "Kabla ya kununua bima ya fahirisi ya hali ya hewa unapaswa:", options: ["Kusoma kichocheo cha malipo na kuhakikisha kampuni ya bima ina leseni", "Kumlipa mtu wa kwanza anayeuliza", "Kutoa PIN yako ya pesa kwa simu", "Kuwanunulia majirani"], answer: 0, why: "Jua lini inalipa, na hakikisha kampuni ya bima ni halali." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kilimo Kinachozingatia Tabianchi",
    questions: [
      { objective: "O1", q: "Kilimo kinachozingatia tabianchi ni:", options: ["Kulima kwa mashine tu", "Kuchagua mbinu zinazoongeza uzalishaji, zinazojenga ustahimilivu na zinazopunguza gesi joto pale inapowezekana", "Kulima mijini tu", "Aina ya mbolea"], answer: 1, why: "Hayo ndiyo maelezo ya FAO kuhusu CSA." },
      { objective: "O1", q: "Kwa wakulima wadogo wengi, lengo lipi la CSA kwa kawaida linakuja kwanza?", options: ["Kupunguza gesi joto", "Kununua ndege zisizo na rubani (drones)", "Uhakika wa chakula na mapato", "Kuuza nje ya nchi"], answer: 2, why: "FAO inaeleza kwamba chakula na mapato vinakuja kwanza; kupunguza gesi joto mara nyingi ni faida ya pamoja." },
      { objective: "O1", q: "Ustahimilivu unamaanisha:", options: ["Uwezo wa kukabili janga na kupona", "Kupanda kwa kuchelewa", "Kutumia maji mengi zaidi", "Aina ya udongo"], answer: 0, why: "Mashamba yenye ustahimilivu yanainuka tena baada ya ukame au mafuriko." },
      { objective: "O2", q: "Utabiri rasmi wa msimu wa Kenya unatoka kwa:", options: ["KCAA", "NiMet", "Kampuni ya mbegu", "Kenya Meteorological Department (KMD)"], answer: 3, why: "KMD inatoa utabiri wa msimu na taarifa za hali ya hewa kwa kilimo." },
      { objective: "O2", q: "Utabiri wa msimu unapaswa kutumiwa:", options: ["Kuweka kila kitu kwenye zao moja", "Kurekebisha mipango, kama kuchagua aina inayokomaa mapema", "Kupuuza tarehe za kupanda", "Kuacha kulima"], answer: 1, why: "Utabiri unatoa uwezekano; rekebisha kwa busara." },
      { objective: "O3", q: "Kuanza kwa mvua (onset) kunamaanisha:", options: ["Mwisho wa mavuno", "Mdudu", "Mwanzo wa msimu wa mvua", "Mbolea"], answer: 2, why: "Onset ni wakati mvua zinapoanza." },
      { objective: "O3", q: "Kipindi cha ukame ni:", options: ["Siku au wiki bila mvua ya kutosha katikati ya msimu wa mvua", "Mafuriko", "Usiku wa baridi", "Siku ya soko"], answer: 0, why: "Vipindi vya ukame katikati ya msimu vinaweza kudhuru mazao katika hatua muhimu." },
      { objective: "O3", q: "Mahindi kutoa maua katika mwezi ambao mara nyingi una kipindi cha ukame ni:", options: ["Fursa ya soko", "Dalili nzuri", "Mbinu ya kupanda", "Sehemu ya hatari"], answer: 3, why: "Hatua muhimu inayokutana na hatari kubwa ni sehemu ya hatari." },
      { objective: "O4", q: "Kuchoma mabaki ya mazao:", options: ["Ni kanuni ya kilimo hifadhi", "Kunaacha udongo wazi na kupoteza viumbehai vya udongo", "Kunashika maji mengi zaidi udongoni", "Kunazingatia tabianchi"], answer: 1, why: "Mabaki yanayoachwa kama matandazo yanalinda na kulisha udongo." },
      { objective: "O4", q: "Kulima kidogo kunamaanisha:", options: ["Kulima mara mbili", "Kutopalilia", "Kusumbua udongo kidogo iwezekanavyo", "Kupanda miti tu"], answer: 2, why: "Usumbufu mdogo unalinda muundo wa udongo na unyevu." },
      { objective: "O4", q: "Mbinu ipi inazuia mmomonyoko kwenye mteremko?", options: ["Matuta ya ngazi kama fanya juu, na vipande vya nyasi kwenye kontua", "Kulima moja kwa moja kuteremka", "Kuondoa nyasi zote", "Kuchoma mteremko"], answer: 0, why: "Matuta ya ngazi na vipande vya kontua vinapunguza kasi ya maji na kushika udongo." },
      { objective: "O4", q: "Bwawa dogo la maji (water pan) ni:", options: ["Sufuria ya kupikia", "Mtego wa wadudu", "Pakiti ya mbegu", "Bwawa lililochimbwa linalohifadhi maji ya mvua"], answer: 3, why: "Mabwawa madogo yanahifadhi maji kwa mifugo na umwagiliaji mdogo." },
      { objective: "O5", q: "CGIAR inaripoti kwamba aina za mahindi zinazostahimili ukame:", options: ["Zinahitaji maji mengi zaidi", "Zinaweza kutoa mavuno mengi zaidi kwa wazi kuliko aina za kawaida wakati wa ukame", "Haziwezi kulimwa Afrika", "Ni sawa na mahindi ya kawaida"], answer: 1, why: "Zilizalishwa ili zifanye vizuri zaidi maji yanapokuwa machache." },
      { objective: "O5", q: "Zao lipi mara nyingi linastahimili ukavu kuliko mahindi?", options: ["Mpunga wa mashamba ya maji", "Miwa", "Mtama", "Chai"], answer: 2, why: "Mtama ni nafaka inayostahimili ukame." },
      { objective: "O5", q: "Kuchanganya mahindi na maharagwe au kunde:", options: ["Kunagawanya hatari na kuongeza zao la jamii ya kunde", "Kila wakati kunapunguza mapato", "Hakuruhusiwi", "Kunahitaji ndege isiyo na rubani (drone)"], answer: 0, why: "Mazao mawili yanagawanya hatari; jamii ya kunde inaongeza naitrojeni." },
      { objective: "O5", q: "Katika push-pull, nyasi ya mpakani:", options: ["Inafukuza wadudu", "Inavunwa kwa ajili ya kuuza nje", "Inanyunyiziwa dawa", "Inavuta wadudu mbali na zao"], answer: 3, why: "Mipaka ya Napier au Brachiaria inavuta wadudu mbali." },
      { objective: "O6", q: "Kilimo mseto cha miti (agroforestry) kinamaanisha:", options: ["Kukata msitu kwa ajili ya mazao", "Kupanda miti pamoja na mazao au mifugo", "Kupanda maua tu", "Kununua mbao"], answer: 1, why: "Miti shambani inaongeza mapato, kivuli na ulinzi wa udongo." },
      { objective: "O6", q: "Wakati wa ukame, wafugaji wanapaswa:", options: ["Kuendelea kuongeza mifugo", "Kuuza malisho yote", "Kupanga malisho na maji na kulinganisha idadi ya mifugo na chakula", "Kuacha kunywesha mifugo"], answer: 2, why: "Kupanga chakula na maji kunaweka mifugo hai katika misimu ya kiangazi." },
      { objective: "O6", q: "Kichocheo cha malipo katika bima ya fahirisi ya hali ya hewa ni:", options: ["Hali inayofanya kampuni ya bima ilipe", "Bei ya mbegu", "Aina ya bunduki", "Anwani ya kampuni ya bima"], answer: 0, why: "Kinaeleza lini bima inalipa." },
      { objective: "O4", q: "Kabla ya kutumia mbinu mpya kwenye shamba lako lote, unapaswa:", options: ["Kuitumia kila mahali mara moja", "Kupuuza ushauri wa afisa ugani", "Kusubiri miaka kumi", "Kuijaribu kwenye eneo dogo na kulinganisha"], answer: 3, why: "Majaribio madogo yanaonyesha kama inafanya kazi kwenye shamba lako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 7, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kalenda ya hatari za tabianchi", objective: "O3", notYet: "Miezi, kazi au hatari hazipo, au hakuna sehemu za hatari.", meets: "Miezi kumi na mbili yenye misimu, kazi za shamba, hatari na angalau sehemu mbili za hatari zilizozungushiwa duara.", exceeds: "Inajumuisha kile wakulima wazee wanachosema kimebadilika." },
      { name: "Utabiri wa msimu", objective: "O2", notYet: "Hakuna utabiri, au hakuna tarehe wala chanzo.", meets: "Kile utabiri rasmi wa msimu huu unachosema, chanzo chake na tarehe uliposomwa.", exceeds: "Inaonyesha mabadiliko mawili ya mpango yaliyofanywa kwa sababu ya utabiri." },
      { name: "Mbinu ya udongo na maji", objective: "O4", notYet: "Hakuna mbinu ya udongo wala maji.", meets: "Angalau mbinu moja ya udongo au maji inayofaa shamba, pamoja na tarehe ya kuanza.", exceeds: "Imepangwa kama jaribio dogo linalolinganishwa na njia ya kawaida." },
      { name: "Mazao na aina", objective: "O5", notYet: "Hakuna mbinu ya zao wala aina.", meets: "Angalau mbinu moja ya aina au zao inayopunguza hatari, pamoja na mbegu zilizothibitishwa kutoka kwa muuzaji aliyesajiliwa.", exceeds: "Pia inajumuisha kuchanganya mazao au push-pull pale inapofaa." },
      { name: "Kugawanya hatari", objective: "O6", notYet: "Hakuna njia ya kugawanya hatari zaidi ya zao kuu.", meets: "Angalau mbinu moja ya miti, mifugo au bima, pamoja na tarehe ya kuanza.", exceeds: "Kwa bima, inataja kichocheo cha malipo na inakagua kwamba kampuni ya bima ina leseni." },
      { name: "Mbinu tano na vipimo vya mafanikio", objective: "O1", notYet: "Chini ya mbinu tano, au hakuna njia ya kupima mafanikio.", meets: "Angalau mbinu tano, kila moja ikiwa na lini ya kuanza na jinsi utakavyojua kama ilifanya kazi.", exceeds: "Inaandika lengo la kilimo kinachozingatia tabianchi ambalo kila mbinu inasaidia." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wakulima wanaotumia angalau mbinu mbili mpya za kilimo kinachozingatia tabianchi msimu huu (utafiti wa kufuatilia)",
      "Mavuno na mapato ukilinganisha na msimu wa karibuni wa ukame au mgumu, kama wanavyoripoti wakulima au washirika",
      "Wakulima wanaokagua utabiri rasmi wa msimu kabla ya kupanda, au wanaochukua bima ya mazao au mifugo yenye leseni"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au redio ya kupata utabiri wa msimu, au taarifa ya ugani",
      "Karatasi na kalamu (au jedwali la simu) kwa kalenda ya hatari za tabianchi na mpango",
      "Nafasi ya kutembea kwenye shamba la mwanafunzi au shamba la mfano",
      "Mawasiliano ya afisa ugani au agrovet kwa aina za mbegu na miundo ya eneo lako",
      "Kama dakika 60 za masomo, pamoja na muda shambani kwa matembezi na mpango"
    ],
    facilitatorNotes: [
      "Endesha vipindi na vikundi vya wakulima kabla msimu haujaanza ili mipango iwe tayari kabla ya kupanda.",
      "Someni utabiri rasmi wa karibuni pamoja na eleza kwamba unatoa uwezekano, si ahadi.",
      "Chora kalenda moja ya hatari za tabianchi ya kikundi kwanza, kisha waache wakulima wachore zao; waalike wakulima wazee waeleze mabadiliko.",
      "Himiza majaribio madogo ya mbinu mpya, na mwalike afisa ugani kwa miundo na aina za mbegu za eneo lako.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
