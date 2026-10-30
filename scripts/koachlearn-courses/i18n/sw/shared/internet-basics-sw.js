"use strict";

// Koach Learn course (Swahili translation of shared/internet-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC_TECH = { name: "FTC: How to spot, avoid and report tech support scams", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" };

module.exports = {
  id: "internet-basics-sw",
  lang: "sw",
  translationOf: "internet-basics",
  category: "Seniors and Technology",
  name: "Misingi ya Intaneti",
  skills: "Kuunganisha kwenye Wi-Fi, Kutumia kivinjari cha wavuti, Kufungua na kubadilisha tabo, Kutafuta kwenye wavuti, Kusoma anwani ya tovuti kwa usalama, Kuhifadhi tovuti unazozipenda",
  outcome: "kuunganisha simu au kompyuta kwenye Wi-Fi, kufungua kivinjari cha wavuti, kwenda kwenye tovuti kwa anwani yake, kutafuta unachohitaji, kutofautisha anwani ya tovuti salama na ya hatari, na kuhifadhi tovuti unayotumia mara kwa mara ili urudi kwake kwa kugusa mara moja.",
  about: [
    "Intaneti inakuwezesha kuangalia hali ya hewa, kupata saa za kazi za ofisi ya daktari, kusoma habari, kuangalia ratiba ya basi na kuona picha za familia. Kozi hii inaanza mwanzo kabisa na haihitaji uzoefu wowote.",
    "Katika Sura 1 utajifunza intaneti ni nini, jinsi ya kuunganisha kwenye Wi-Fi, na jinsi ya kutumia kivinjari cha wavuti. Katika Sura 2 utatafuta vitu, utajifunza kusoma anwani ya tovuti ili uepuke tovuti bandia na madirisha ya kutisha (pop-ups), na utahifadhi tovuti unazotumia zaidi.",
    "Kila somo linachukua kama dakika tano. Kaa na simu, tableti au kompyuta karibu ili ujaribu kila hatua. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Panga matembezi rahisi. Unganisha kwenye Wi-Fi, fungua kivinjari cha wavuti, na tafuta mahali ungependa kutembelea, kama bustani, makumbusho au maktaba. Fungua tovuti yake rasmi, angalia saa zake za kazi na anwani yake, fungua tabo ya pili yenye hali ya hewa ya kesho, fanya maandishi yawe makubwa ukihitaji, na weka alamisho (bookmark) kwenye tovuti rasmi ili uipate tena kwa kugusa mara moja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima ambao ni wageni kwenye intaneti au wanaoitumia kupitia app moja au mbili tu: wazee, wanaowatunza, watu wanaorudi katika jamii, wageni waliofika karibuni na yeyote anayetaka kuingia mtandaoni kwa kujiamini.",
    startingPoint: "Wanaweza kuwasha simu, tableti au kompyuta na kugusa au kubofya. Wengi hawajawahi kujiunga na mtandao wa Wi-Fi wenyewe, kuandika anwani ya tovuti, kutumia tabo au alamisho, au kukagua kama anwani ya tovuti ni halisi.",
    gap: "Saa za kazi, ramani, hali ya hewa, afya, mafao na manunuzi sasa vinapatikana mtandaoni. Watu wasioweza kuunganisha, kutafuta na kutofautisha tovuti halisi na bandia hutegemea wengine, hukosa taarifa, humaliza data ya simu zao au hudanganywa na pop-ups bandia na tovuti zinazofanana na halisi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama router, kivinjari, tabo na domain yanaelezwa",
      "Vifaa: simu, tableti au kompyuta; hatua zinatolewa kwa iPhone, Android na kompyuta",
      "Muda: kama dakika 5 kwa somo, kama dakika 60 kwa jumla",
      "Gharama: Wi-Fi ya bure nyumbani, maktaba au mgahawa; hakuna app za kulipia",
      "Usalama: hakuna mambo ya benki wala taarifa binafsi kwenye Wi-Fi ya umma wakati wa mazoezi"
    ],
    prerequisites: "Hakuna. Kozi \"Simu Janja na Tableti\" au \"Ujuzi wa Msingi wa Kompyuta\" inasaidia wanafunzi ambao hawajawahi kutumia kifaa."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Bila maandishi ya kusaidia", action: "kueleza intaneti na wavuti ni nini na njia mbili kuu ambazo kifaa huunganishwa", standard: "ukitaja Wi-Fi na data ya simu kwa usahihi na wakati Wi-Fi inaokoa data ya kifurushi cha simu yako" },
    { id: "O2", condition: "Ukipewa jina la mtandao na nywila", action: "kujiunga na mtandao wa Wi-Fi kwenye simu, tableti au kompyuta yako na kutaja cha kuepuka kwenye Wi-Fi ya umma", standard: "ukiwa umeunganishwa bila msaada na ukitaja mambo ya benki na taarifa binafsi kama vitu vya kuepuka" },
    { id: "O3", condition: "Ukitumia kivinjari cha wavuti", action: "kufungua tovuti kwa kuandika anwani yake, kisha kutumia kitufe cha kurudi nyuma, tabo na kukuza maandishi", standard: "tovuti sahihi ikiwa wazi, tabo ya pili ikiwa imefunguliwa na maandishi yakiwa yamekuzwa" },
    { id: "O4", condition: "Ukipewa kitu unachohitaji kupata", action: "kutafuta kwa maneno machache muhimu na kuchagua tokeo lenye manufaa ambalo si tangazo", standard: "ukisoma anwani ya tovuti kabla ya kufungua tokeo" },
    { id: "O5", condition: "Ukipewa anwani za tovuti, pop-up ya kutisha na tovuti unayotumia mara kwa mara", action: "kutofautisha anwani ya tovuti salama na ya hatari, kufunga pop-ups bandia, na kuweka alamisho kwenye tovuti rasmi ili urudi kwake kwa usalama", standard: "ukichagua sahihi kila wakati na ukifungua tena tovuti uliyohifadhi kwa kugusa mara moja" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuingia mtandaoni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Intaneti ni nini",
          minutes: 4,
          goal: "Eleza intaneti, wavuti na jinsi kifaa kinavyounganishwa.",
          text: [
            "Intaneti ni mtandao mkubwa sana unaounganisha kompyuta na simu duniani kote ili zishirikiane taarifa. World Wide Web, au wavuti, ni sehemu unayotembelea kwa kivinjari cha wavuti: tovuti zenye kurasa, picha na video. Barua pepe na simu za video pia zinapita kwenye intaneti.",
            "Kifaa chako huunganishwa kwa mojawapo ya njia mbili kuu. Wi-Fi ni muunganisho usiotumia waya kutoka kwenye kisanduku kinachoitwa router, nyumbani, maktaba au mgahawani. Data ya simu inatoka kwenye minara ya kampuni yako ya simu na ni sehemu ya kifurushi cha simu yako.",
            "Wi-Fi ya nyumbani kwa kawaida haitumii data ya kifurushi cha simu yako, kwa hiyo ni chaguo zuri kwa video na vitu vikubwa vya kupakua."
          ],
          words: [["Intaneti", "mtandao wa dunia nzima unaounganisha kompyuta na simu."], ["Wavuti (World Wide Web)", "tovuti unazotembelea kwa kivinjari."], ["Router", "kisanduku kinachotoa mawimbi ya Wi-Fi."], ["Data ya simu", "intaneti kutoka kwenye minara ya kampuni yako ya simu, sehemu ya kifurushi cha simu yako."]],
          slides: [
            { title: "Intaneti na wavuti", bullets: ["Intaneti: mtandao wa vifaa duniani kote", "Wavuti: tovuti unazotembelea kwa kivinjari", "Barua pepe na simu za video pia hutumia intaneti"] },
            { title: "Njia mbili za kuunganisha", bullets: ["Wi-Fi: bila waya, kutoka kwenye router", "Data ya simu: kutoka kwenye minara, sehemu ya kifurushi chako"] },
            { title: "Kidokezo", bullets: ["Tumia Wi-Fi nyumbani kwa video na vitu vikubwa vya kupakua", "Inaokoa data ya kifurushi cha simu yako"] }
          ],
          tryIt: "Kwenye simu au tableti yako, angalia juu ya skrini. Tafuta alama ya Wi-Fi (mistari iliyopinda) au alama ya data ya simu (vipande au herufi kama 5G). Ipi imewashwa sasa hivi?",
          youCanNow: "kueleza intaneti na wavuti ni nini, na kujua kama kifaa chako kiko kwenye Wi-Fi au data ya simu.",
          quickCheck: [
            { objective: "O1", q: "Data ya simu ni nini?", options: ["Kisanduku nyumbani kwako", "Orodha ya tovuti ulizohifadhi", "Intaneti kutoka kwenye minara ya kampuni yako ya simu, sehemu ya kifurushi cha simu yako", "Aina ya kivinjari cha wavuti"], answer: 2, why: "Data ya simu inatoka kwenye minara na ni sehemu ya kifurushi cha simu yako." },
            { objective: "O1", q: "Unataka kutazama video ndefu kwenye simu yako ukiwa nyumbani. Ungetumia muunganisho upi?", options: ["Wi-Fi ya nyumbani, ili usimalize data ya kifurushi cha simu yako", "Data ya simu, kwa sababu ni bure kila wakati", "Video hazihitaji muunganisho wowote", "Alamisho"], answer: 0, why: "Wi-Fi ya nyumbani kwa kawaida haitumii data ya kifurushi cha simu yako." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuunganisha kwenye Wi-Fi",
          minutes: 5,
          goal: "Jiunge na mtandao wa Wi-Fi kwenye simu, tableti au kompyuta.",
          text: [
            "Ili kujiunga na Wi-Fi, unahitaji jina la mtandao na nywila yake. Nyumbani, mara nyingi vyote viwili vimeandikwa kwenye kibandiko kilicho kwenye router. Maktaba au mgahawani, waulize wafanyakazi au tafuta tangazo.",
            "Kwenye iPhone au iPad: fungua Settings, gusa Wi-Fi, gusa jina la mtandao na andika nywila. Kwenye Android: fungua Settings, gusa Network and internet au Connections, kisha Wi-Fi, chagua mtandao na andika nywila. Kwenye kompyuta: bofya alama ya Wi-Fi karibu na saa, chagua mtandao na andika nywila.",
            "Wi-Fi ya umma ni rahisi kutumia, lakini watu wengine wanaitumia pia. Kwenye Wi-Fi ya umma, epuka mambo ya benki na usiandike taarifa binafsi. Jiunge tu na mitandao ambayo wafanyakazi walikupa majina yake, si yenye majina ya ajabu."
          ],
          steps: ["Tafuta jina la mtandao na nywila (kibandiko cha router, wafanyakazi au tangazo).", "Fungua Settings, kisha Wi-Fi (kwenye kompyuta, bofya alama ya Wi-Fi karibu na saa).", "Gusa au bofya jina la mtandao.", "Andika nywila kwa uangalifu; herufi kubwa na ndogo ni muhimu.", "Subiri alama ya Wi-Fi ionekane juu."],
          words: [["Jina la mtandao", "jina ambalo muunganisho wa Wi-Fi unaonyesha kwenye orodha, pia huitwa SSID."], ["Nywila ya Wi-Fi", "msimbo unaoandika ili kujiunga na mtandao wa Wi-Fi."], ["Wi-Fi ya umma", "Wi-Fi inayotumiwa na watu wengi katika maeneo kama maktaba na migahawa."]],
          slides: [
            { title: "Unahitaji vitu viwili", bullets: ["Jina la mtandao", "Nywila (kibandiko cha router, wafanyakazi au tangazo)"] },
            { title: "Jinsi ya kujiunga", bullets: ["Simu au tableti: Settings, kisha Wi-Fi", "Kompyuta: alama ya Wi-Fi karibu na saa", "Chagua mtandao, andika nywila"] },
            { title: "Usalama kwenye Wi-Fi ya umma", bullets: ["Hakuna mambo ya benki wala taarifa binafsi", "Jiunge tu na jina ulilopewa na wafanyakazi"] }
          ],
          tryIt: "Fungua mipangilio ya Wi-Fi na utafute orodha ya mitandao. Ukiwa nyumbani au maktaba, jiunge na mtandao sahihi. Hakikisha alama ya Wi-Fi inaonekana juu.",
          youCanNow: "kujiunga na mtandao wa Wi-Fi na kutumia Wi-Fi ya umma kwa usalama.",
          quickCheck: [
            { objective: "O2", q: "Unahitaji vitu gani viwili ili kujiunga na mtandao wa Wi-Fi?", options: ["Barua pepe yako na namba ya simu", "Jina la mtandao na nywila yake", "Kivinjari na alamisho", "Tabo na injini ya utafutaji"], answer: 1, why: "Unachagua mtandao kwa jina lake na kuandika nywila yake." },
            { objective: "O2", q: "Ukiwa mgahawani, unaona mitandao miwili: mmoja ambao wafanyakazi waliutaja na mwingine unaoitwa \"FREE_FAST_WIFI_123\". Ungefanya nini?", options: ["Kujiunga na ule wa ajabu kwa sababu unasema bure", "Kujiunga na yote miwili kwa wakati mmoja", "Kuandika taarifa zako za benki kujaribu ule wa ajabu", "Kujiunga tu na mtandao ambao wafanyakazi walikupa"], answer: 3, why: "Jiunge tu na mitandao ambayo wafanyakazi walikupa majina yake, si yenye majina ya ajabu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutumia kivinjari cha wavuti",
          minutes: 5,
          goal: "Fungua tovuti kwa anwani yake na uzunguke kwa kitufe cha kurudi nyuma na tabo.",
          text: [
            "Kivinjari cha wavuti ni app unayotumia kutembelea tovuti. Vinavyojulikana ni Chrome, Safari, Edge na Firefox. Juu kuna upau wa anwani, kisanduku kirefu ambapo unaandika anwani ya tovuti kama weather.gov na kubonyeza Enter au Go.",
            "Vitufe vyenye manufaa: mshale wa kurudi nyuma unarudi kwenye ukurasa uliokuwa; mshale wa duara unapakia ukurasa upya. Tabo zinakuwezesha kuwa na kurasa kadhaa wazi kwa wakati mmoja, kama mafaili juu ya meza. Fungua tabo mpya kwa kitufe cha kujumlisha (+) na ubadilishe kwa kugusa au kubofya tabo.",
            "Maneno yakiwa madogo sana, unaweza kukuza. Kwenye kompyuta, shikilia Ctrl na ubonyeze + (Command na + kwenye Mac); Ctrl na - hufanya yawe madogo. Kwenye simu, tanua vidole viwili kwenye skrini."
          ],
          steps: ["Fungua kivinjari (Chrome, Safari, Edge au Firefox).", "Gusa upau wa anwani ulio juu.", "Andika anwani ya tovuti, kama weather.gov, na ubonyeze Enter au Go.", "Tumia mshale wa kurudi nyuma ili urudi.", "Bonyeza + kufungua tabo mpya.", "Kukuza: Ctrl na + (Command na + kwenye Mac), au tanua vidole viwili kwenye simu."],
          words: [["Kivinjari cha wavuti", "app unayotumia kutembelea tovuti, kama Chrome, Safari, Edge au Firefox."], ["Upau wa anwani", "kisanduku kilicho juu ya kivinjari ambapo unaandika anwani ya tovuti."], ["Tabo", "ukurasa mmoja ulio wazi kwenye kivinjari; unaweza kuwa na kadhaa wazi kwa wakati mmoja."], ["Kukuza (zoom)", "kufanya kilicho kwenye skrini kiwe kikubwa au kidogo."]],
          slides: [
            { title: "Kivinjari", bullets: ["Chrome, Safari, Edge au Firefox", "Upau wa anwani uko juu", "Andika anwani, bonyeza Enter au Go"] },
            { title: "Vitufe vyenye manufaa", bullets: ["Mshale wa kurudi nyuma: ukurasa uliotangulia", "Mshale wa duara: pakia upya", "+ hufungua tabo mpya"] },
            { title: "Fanya maandishi yawe makubwa", bullets: ["Kompyuta: Ctrl na + (Command na + kwenye Mac)", "Simu: tanua vidole viwili"] }
          ],
          tryIt: "Fungua kivinjari na uandike weather.gov kwenye upau wa anwani. Kisha fungua tabo mpya na uende kwenye tovuti ya maktaba ya eneo lako. Badilisha kati ya tabo hizo mbili na ufanye maandishi yawe makubwa kwenye mojawapo.",
          youCanNow: "kufungua tovuti kwa anwani zake, kutumia kitufe cha kurudi nyuma, kubadilisha tabo na kufanya maandishi yawe makubwa.",
          quickCheck: [
            { objective: "O3", q: "Mshale wa duara kwenye kivinjari hufanya nini?", options: ["Hufunga kivinjari", "Hufungua tabo mpya", "Huhifadhi alamisho", "Hupakia ukurasa upya"], answer: 3, why: "Mshale wa duara unapakia upya ukurasa ulio nao." },
            { objective: "O3", q: "Unasoma mapishi na unataka kuangalia hali ya hewa bila kupoteza mapishi. Ungefanya nini?", options: ["Kufungua tabo mpya kwa kitufe cha kujumlisha (+)", "Kufunga ukurasa wa mapishi", "Kuzima Wi-Fi", "Kuzima na kuwasha kifaa upya"], answer: 0, why: "Tabo zinakuwezesha kuweka kurasa kadhaa wazi kwa wakati mmoja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuingia mtandaoni",
        questions: [
          { objective: "O1", q: "Wavuti ni nini?", options: ["Aina ya waya", "Nyumba ya buibui tu", "Bili ya simu yako", "Tovuti unazotembelea kwa kivinjari"], answer: 3, why: "Wavuti ni tovuti unazotembelea kwa kivinjari." },
          { objective: "O2", q: "Nywila ya Wi-Fi ya nyumbani mara nyingi imeandikwa wapi?", options: ["Kwenye rimoti ya TV", "Kwenye kibandiko kilicho kwenye router", "Kwenye kasha la simu yako", "Gazetini"], answer: 1, why: "Mara nyingi router huwa na jina na nywila kwenye kibandiko." },
          { objective: "O2", q: "Kwenye kompyuta, kwa kawaida unabofya wapi ili kujiunga na Wi-Fi?", options: ["Kapu la taka", "Alama ya Wi-Fi karibu na saa", "Printa", "Kamera"], answer: 1, why: "Alama ya Wi-Fi karibu na saa huonyesha mitandao." },
          { objective: "O2", q: "Uko kwenye Wi-Fi ya mgahawa. Unapaswa kuepuka nini?", options: ["Kuangalia hali ya hewa", "Kusoma habari", "Benki mtandaoni", "Kutafuta mapishi"], answer: 2, why: "Wi-Fi ya umma inatumiwa na wengi, kwa hiyo epuka mambo ya benki na taarifa binafsi." },
          { objective: "O3", q: "Unaandika wapi anwani ya tovuti kama weather.gov?", options: ["Kwenye kamera", "Kwenye ujumbe mfupi", "Kwenye kikokotoo", "Kwenye upau wa anwani juu ya kivinjari"], answer: 3, why: "Upau wa anwani unakupeleka kwenye tovuti." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata vitu na kubaki salama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutafuta kwenye wavuti",
          minutes: 5,
          goal: "Tafuta kitu maalum na ufungue tokeo lenye manufaa.",
          text: [
            "Kama hujui anwani ya tovuti, itafute. Andika maneno machache muhimu kwenye upau wa anwani au kwenye tovuti ya utafutaji kama Google au Bing, kisha ubonyeze Enter. Kwa mfano: \"Springfield public library hours\" (saa za maktaba ya umma ya Springfield).",
            "Ukurasa wa matokeo unaonyesha orodha ya viungo. Kila kimoja kina kichwa cha rangi ya buluu, anwani ya tovuti kwa maandishi madogo, na maelezo mafupi. Soma anwani ya tovuti kabla ya kugusa. Matokeo ya juu yaliyoandikwa \"Sponsored\" au \"Ad\" ni matangazo ya kulipiwa.",
            "Unaweza pia kutafuta kwa sauti yako. Gusa kipaza sauti kwenye kisanduku cha utafutaji na useme unachotaka, kama \"hali ya hewa kesho\"."
          ],
          steps: ["Gusa upau wa anwani au kisanduku cha utafutaji.", "Andika maneno machache muhimu, kama mahali, mji na unachotaka.", "Bonyeza Enter au kitufe cha kutafuta.", "Ruka matokeo yaliyoandikwa Sponsored au Ad.", "Soma anwani ya tovuti, kisha gusa tokeo unalotaka."],
          words: [["Kutafuta", "kuandika maneno ili kupata kurasa za wavuti zinazoyahusu."], ["Matokeo", "orodha ya kurasa za wavuti ambazo utafutaji unapata."], ["Kiungo (link)", "maneno au picha unayogusa ili kwenda kwenye ukurasa mwingine."]],
          slides: [
            { title: "Tafuta kwa maneno muhimu", bullets: ["\"Springfield public library hours\"", "Andika kwenye upau wa anwani au kwenye Google au Bing"] },
            { title: "Kusoma matokeo", bullets: ["Kichwa cha buluu, anwani ya tovuti, maelezo mafupi", "Sponsored au Ad = imelipiwa", "Soma anwani kabla ya kugusa"] },
            { title: "Tumia sauti yako", bullets: ["Gusa kipaza sauti", "Sema: \"hali ya hewa kesho\""] }
          ],
          tryIt: "Tafuta saa za kufunguliwa za mahali karibu nawe, kama duka la dawa au bustani. Ruka matangazo yoyote, fungua tokeo rasmi na upate saa za kazi.",
          youCanNow: "kutafuta kwenye wavuti na kuchagua tokeo lenye manufaa ambalo si tangazo.",
          quickCheck: [
            { objective: "O4", q: "Kwenye ukurasa wa matokeo, maandishi madogo chini ya kila kichwa cha buluu yanaonyesha nini?", options: ["Anwani ya tovuti", "Hali ya hewa", "Nywila yako", "Bei ya ukurasa"], answer: 0, why: "Kila tokeo linaonyesha anwani yake ya tovuti kwa maandishi madogo, ili uisome kabla ya kugusa." },
            { objective: "O4", q: "Mikono yako ina shughuli na unataka hali ya hewa ya kesho. Ungefanya nini?", options: ["Kuandika hadithi ndefu kwenye kisanduku cha utafutaji", "Kufungua alamisho ya tovuti ya manunuzi", "Kugusa kipaza sauti kwenye kisanduku cha utafutaji na kusema \"hali ya hewa kesho\"", "Kuzima na kuwasha simu upya"], answer: 2, why: "Unaweza kutafuta kwa sauti yako kwa kugusa kipaza sauti." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kusoma anwani ya tovuti na kuepuka ulaghai",
          minutes: 5,
          goal: "Tofautisha anwani ya tovuti salama na ya hatari na ushughulikie pop-ups za kutisha.",
          text: [
            "Anwani ya tovuti ina sehemu kuu, domain, iliyo kabla tu ya mkwaju (/) wa kwanza ulio peke yake, kama irs.gov au amazon.com. Sehemu hiyo kuu inakuambia nani anaendesha tovuti. Tovuti bandia hutumia majina yanayofanana na halisi kama \"amaz0n-deals.com\" au \"irs-refund.help\".",
            "Tafuta https na alama ya kufuli mwanzoni mwa anwani. Inamaanisha muunganisho ni wa faragha, lakini walaghai wanaweza kuwa nayo pia, kwa hiyo jina la domain bado ndilo muhimu zaidi.",
            "Baadhi ya pop-ups bandia husema kompyuta yako ina virusi na hutoa namba ya simu ya kupiga. FTC (shirika la Marekani linalolinda wanunuzi) inasema maonyo halisi ya usalama hayatakuomba kamwe upige namba ya simu, na kampuni halisi za teknolojia hazitakupigia wala kukutumia ujumbe kuhusu tatizo. Usipige. Funga tabo au kivinjari; kama hakifungi, zima na uwashe kifaa upya. Ukiwa na wasiwasi, muulize mtu unayemwamini."
          ],
          steps: ["Tafuta domain: jina lililo kabla tu ya mkwaju (/) wa kwanza ulio peke yake.", "Hakikisha ni jina halisi ulilotarajia.", "Tafuta https na kufuli, lakini usiziamini peke yake.", "Pop-up ya kutisha yenye namba ya simu? Usipige.", "Funga tabo au zima na uwashe kifaa upya.", "Ripoti ulaghai wa msaada wa kiufundi kwenye ReportFraud.ftc.gov."],
          words: [["Domain", "jina kuu katika anwani ya tovuti linalokuambia nani anaendesha tovuti, kama irs.gov."], ["Pop-up", "dirisha dogo linalotokea ghafla juu ya ukurasa wa wavuti."], ["Ulaghai wa msaada wa kiufundi", "onyo au simu bandia inayosema kifaa chako kina tatizo ili kupata pesa zako au kuingia kwenye kifaa chako."]],
          sources: [FTC_TECH],
          slides: [
            { title: "Tafuta domain", bullets: ["Jina lililo kabla tu ya mkwaju (/) wa kwanza ulio peke yake", "irs.gov ni halisi; irs-refund.help si halisi"] },
            { title: "https na kufuli", bullets: ["Muunganisho ni wa faragha", "Walaghai wanaweza kuwa nayo pia", "Jina la domain ndilo muhimu zaidi"] },
            { title: "Pop-ups za kutisha (FTC)", bullets: ["Maonyo halisi hayakuombi kamwe upige namba", "Usipige", "Funga tabo au zima na uwashe kifaa upya"] }
          ],
          tryIt: "Angalia anwani tatu za tovuti kwenye skrini yako au kwenye barua pepe yako. Kwa kila moja, onyesha domain na useme nani anaendesha tovuti hiyo.",
          youCanNow: "kusoma anwani ya tovuti ili kujua nani anaendesha tovuti na kushughulikia kwa usalama pop-ups bandia za virusi.",
          quickCheck: [
            { objective: "O5", q: "Sehemu gani ya anwani ya tovuti inakuambia nani anaendesha tovuti?", options: ["https iliyo mwanzoni", "Maneno yaliyo baada ya mkwaju wa kwanza ulio peke yake", "Domain, iliyo kabla tu ya mkwaju wa kwanza ulio peke yake", "Alama ya kufuli"], answer: 2, why: "Domain, kama irs.gov, inakuambia nani anaendesha tovuti." },
            { objective: "O5", q: "Pop-up inasema kompyuta yako ina virusi na inaonyesha namba ya kupiga. Haifungiki. Ungefanya nini?", options: ["Kupiga namba hiyo mara moja", "Kuzima na kuwasha kifaa upya bila kupiga", "Kuandika namba ya kadi yako kulipia matengenezo", "Kuiacha kwenye skrini kwa siku kadhaa"], answer: 1, why: "Maonyo halisi ya usalama hayakuombi kamwe upige; zima na uwashe upya kama pop-up haifungiki." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuhifadhi tovuti unazozipenda",
          minutes: 4,
          goal: "Weka alamisho kwenye tovuti na uifungue tena kwa kugusa mara moja.",
          text: [
            "Alamisho (bookmark, pia huitwa favorite) huhifadhi tovuti ili urudi bila kutafuta tena. Ndiyo njia salama zaidi ya kurudi kwenye tovuti unazotumia mara kwa mara, kama benki yako, duka la dawa au tovuti ya habari, kwa sababu unaruka matokeo bandia ya utafutaji.",
            "Kwenye kompyuta, bofya nyota iliyo mwishoni mwa upau wa anwani. Kwenye iPhone au iPad ukitumia Safari, gusa kitufe cha Share na uchague Add Bookmark. Kwenye Chrome ya simu, fungua menyu (vitone vitatu) na uguse nyota. Kwenye simu nyingi unaweza pia kuchagua \"Add to Home screen\" ili kutengeneza ikoni kama ya app.",
            "Ili kufungua alamisho baadaye, fungua orodha ya alamisho kwenye menyu ya kivinjari, au gusa ikoni kwenye skrini yako ya mwanzo."
          ],
          steps: ["Fungua tovuti rasmi unayotaka kuhifadhi.", "Kompyuta: bofya nyota kwenye upau wa anwani.", "Safari kwenye iPhone au iPad: kitufe cha Share, kisha Add Bookmark.", "Chrome kwenye simu: menyu ya vitone vitatu, kisha nyota.", "Kuifungua baadaye: nenda kwenye Bookmarks kwenye menyu, au gusa ikoni kwenye skrini ya mwanzo."],
          words: [["Alamisho / favorite", "kiungo cha tovuti kilichohifadhiwa ili uifungue tena haraka."], ["Skrini ya mwanzo (Home screen)", "skrini kuu ya simu au tableti inayoonyesha ikoni za app."]],
          slides: [
            { title: "Kwa nini uweke alamisho?", bullets: ["Rudi kwenye tovuti kwa kugusa mara moja", "Inaruka matokeo bandia ya utafutaji", "Nzuri kwa benki, duka la dawa, habari"] },
            { title: "Jinsi ya kuweka alamisho", bullets: ["Kompyuta: nyota kwenye upau wa anwani", "Safari: Share, kisha Add Bookmark", "Chrome kwenye simu: vitone vitatu, kisha nyota"] },
            { title: "Ifungue tena", bullets: ["Bookmarks kwenye menyu ya kivinjari", "Au gusa ikoni kwenye skrini ya mwanzo"] }
          ],
          tryIt: "Kazi ya mwisho: panga matembezi. Tafuta bustani, makumbusho au maktaba, fungua tovuti yake rasmi, angalia saa za kazi na anwani, fungua hali ya hewa ya kesho kwenye tabo ya pili, fanya maandishi yawe makubwa ukihitaji, na weka alamisho kwenye tovuti rasmi.",
          youCanNow: "kuingia mtandaoni peke yako, kupata unachohitaji, kuepuka tovuti bandia na kuhifadhi tovuti unazozipenda.",
          quickCheck: [
            { objective: "O5", q: "Kwenye kompyuta, unabofya nini ili kuweka alamisho kwenye tovuti?", options: ["Mshale wa kurudi nyuma", "Mshale wa duara", "Kitufe cha kujumlisha (+)", "Nyota iliyo mwishoni mwa upau wa anwani"], answer: 3, why: "Nyota iliyo mwishoni mwa upau wa anwani huhifadhi alamisho." },
            { objective: "O5", q: "Unaagiza dawa kutoka kwenye tovuti ya duka lako la dawa kila mwezi. Ungerudi kwake kwa usalama vipi?", options: ["Kuitafuta kila mara na kugusa tangazo la kwanza", "Kuweka alamisho kwenye tovuti rasmi na kuifungua kutoka kwenye alamisho zako", "Kubofya kiungo kutoka kwenye ujumbe mfupi", "Kubahatisha anwani kila mara"], answer: 1, why: "Alamisho kutoka kwenye tovuti rasmi huruka matokeo bandia ya utafutaji." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata vitu na kubaki salama",
        questions: [
          { objective: "O4", q: "Utafutaji upi uko wazi zaidi?", options: ["\"place\"", "\"Springfield library hours\"", "\"open?\"", "\"help me find it please now\""], answer: 1, why: "Maneno machache muhimu yenye mahali na unachotaka hufanya kazi vizuri zaidi." },
          { objective: "O5", q: "Katika www.irs.gov/refunds, domain ni ipi?", options: ["www", "refunds", "irs.gov", "https"], answer: 2, why: "Domain ni jina lililo kabla tu ya mkwaju wa kwanza ulio peke yake." },
          { objective: "O5", q: "Pop-up inasema kompyuta yako ina virusi na upige namba sasa hivi. Unafanya nini?", options: ["Kupiga namba hiyo", "Kulipa kwa kadi ya zawadi (gift card)", "Kuwaruhusu kuingia kwenye kifaa chako kwa mbali", "Kutopiga; kufunga tabo au kuzima na kuwasha upya"], answer: 3, why: "FTC inasema maonyo halisi hayakuombi kamwe upige namba." },
          { objective: "O5", q: "Tovuti inaonyesha https na kufuli. Hiyo inamaanisha:", options: ["Ni tovuti ya serikali", "Ni ya kweli bila shaka", "Muunganisho ni wa faragha, lakini bado unakagua domain", "Ni bure"], answer: 2, why: "Walaghai wanaweza kuwa na https pia; domain ndiyo muhimu zaidi." },
          { objective: "O5", q: "Njia salama zaidi ya kurudi kwenye tovuti ya duka lako la dawa kila mwezi ni ipi?", options: ["Kubofya tangazo", "Alamisho uliyohifadhi kutoka kwenye tovuti rasmi", "Kiungo kwenye ujumbe kutoka kwa mtu usiyemjua", "Kubahatisha anwani"], answer: 1, why: "Alamisho huruka matokeo bandia ya utafutaji na viungo bandia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Intaneti",
    questions: [
      { objective: "O1", q: "Intaneti ni:", options: ["Tovuti moja tu", "Chaneli ya TV", "Kitabu cha namba za simu", "Mtandao wa dunia nzima unaounganisha kompyuta na simu"], answer: 3, why: "Inaunganisha vifaa duniani kote." },
      { objective: "O1", q: "Wi-Fi inatoka kwenye:", options: ["Betri", "TV", "Router", "Printa"], answer: 2, why: "Router hutoa mawimbi ya Wi-Fi." },
      { objective: "O1", q: "Data ya simu ni:", options: ["Kivinjari", "Wi-Fi ya bure maktaba", "Aina ya barua pepe", "Intaneti kutoka kwenye minara ya simu, sehemu ya kifurushi cha simu yako"], answer: 3, why: "Data ya simu inakuja kupitia kampuni yako ya simu." },
      { objective: "O1", q: "Kwa nini utumie Wi-Fi ya nyumbani kwa video?", options: ["Video zinacheza kwenye Wi-Fi tu", "Kwa kawaida inaokoa data ya kifurushi cha simu yako", "Inatakiwa na sheria", "Inafanya simu iwe nyepesi"], answer: 1, why: "Wi-Fi ya nyumbani kwa kawaida haitumii data ya kifurushi chako." },
      { objective: "O2", q: "Ili kujiunga na Wi-Fi unahitaji:", options: ["Printa", "Namba yako ya benki", "Jina la mtandao na nywila", "Simu mpya"], answer: 2, why: "Jina pamoja na nywila vinakuwezesha kujiunga." },
      { objective: "O2", q: "Kwenye iPhone, Wi-Fi inapatikana ndani ya:", options: ["Clock", "Photos", "Calculator", "Settings"], answer: 3, why: "Settings, kisha Wi-Fi." },
      { objective: "O2", q: "Kwenye Wi-Fi ya umma, kipi si wazo zuri?", options: ["Kusoma habari", "Benki mtandaoni", "Kuangalia ramani", "Kutafuta saa za kazi"], answer: 1, why: "Wi-Fi ya umma inatumiwa na wengi; epuka mambo ya binafsi." },
      { objective: "O3", q: "Kipi kati ya hivi ni kivinjari cha wavuti?", options: ["Kikokotoo", "Chrome", "Kamera", "Saa"], answer: 1, why: "Chrome, Safari, Edge na Firefox ni vivinjari." },
      { objective: "O3", q: "Mshale wa kurudi nyuma kwenye kivinjari hufanya nini?", options: ["Hufuta tovuti", "Huzima kompyuta", "Hurudi kwenye ukurasa uliokuwa kabla", "Huchapisha ukurasa"], answer: 2, why: "Kurudi nyuma hukurudisha kwenye ukurasa uliotangulia." },
      { objective: "O3", q: "Tabo zinakuwezesha:", options: ["Kuzima Wi-Fi", "Kulipa bili moja kwa moja", "Kuchaji betri", "Kuweka kurasa kadhaa wazi kwa wakati mmoja"], answer: 3, why: "Kila tabo ni ukurasa mmoja ulio wazi." },
      { objective: "O3", q: "Maneno kwenye ukurasa wa wavuti ni madogo sana kwenye kompyuta. Bonyeza:", options: ["Delete", "Ctrl na + (Command na + kwenye Mac)", "Escape", "Shift na 0"], answer: 1, why: "Ctrl na + hukuza." },
      { objective: "O3", q: "Kwenye simu, unafanyaje ukurasa uwe mkubwa?", options: ["Tanua vidole viwili kwenye skrini", "Tikisa simu", "Zima simu", "Bonyeza kitufe cha sauti"], answer: 0, why: "Kutanua vidole viwili hukuza." },
      { objective: "O4", q: "Matokeo ya utafutaji yaliyoandikwa \"Sponsored\" ni:", options: ["Matangazo ya kulipiwa", "Tovuti rasmi kila wakati", "Kurasa za serikali", "Maonyo ya virusi"], answer: 0, why: "Sponsored inamaanisha mtu amelipia." },
      { objective: "O4", q: "Kabla ya kugusa tokeo la utafutaji, unapaswa:", options: ["Kusoma anwani yake ya tovuti", "Kufunga kivinjari", "Kuzima na kuwasha simu upya", "Kugusa kila tokeo"], answer: 0, why: "Anwani inaonyesha nani anaendesha tovuti." },
      { objective: "O4", q: "Unawezaje kutafuta bila kuandika?", options: ["Gusa kipaza sauti na uongee", "Tikisa simu", "Tumia kikokotoo", "Ongeza sauti"], answer: 0, why: "Utafutaji kwa sauti unakuwezesha kusema unachotaka." },
      { objective: "O5", q: "Anwani ipi ina uwezekano mkubwa wa kuwa bandia?", options: ["irs.gov", "amazon.com", "amaz0n-deals.com", "weather.gov"], answer: 2, why: "Sifuri mahali pa herufi O ni hila ya kuiga jina halisi." },
      { objective: "O5", q: "https na kufuli vinakuambia:", options: ["Muunganisho ni wa faragha", "Tovuti ni ya kweli bila shaka", "Tovuti ni bure", "Tovuti ni benki"], answer: 0, why: "Vinalinda muunganisho, si ukweli wa tovuti." },
      { objective: "O5", q: "Onyo halisi la usalama kwenye kompyuta yako:", options: ["Halitakuomba kamwe upige namba ya simu", "Litaomba kadi za zawadi", "Litakuomba upige simu mara moja", "Litaomba nywila yako ya benki"], answer: 0, why: "FTC inasema maonyo halisi hayakuombi kamwe upige namba." },
      { objective: "O5", q: "Pop-up haifungiki. Unafanya nini?", options: ["Kuzima na kuwasha kifaa upya", "Kupiga namba iliyo juu yake", "Kuandika nywila yako", "Kulipa ada"], answer: 0, why: "Kuzima na kuwasha upya huondoa pop-up kwa usalama." },
      { objective: "O5", q: "Alamisho ni:", options: ["Kiungo cha tovuti kilichohifadhiwa", "Kishikio cha ukurasa wa karatasi tu", "Virusi", "Nywila"], answer: 0, why: "Alamisho hukurudisha kwenye tovuti haraka." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      6,
      8,
      10,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kuunganisha kwenye Wi-Fi",
        objective: "O2",
        notYet: "Kifaa hakijaunganishwa, au kimejiunga na mtandao wenye jina lisilojulikana.",
        meets: "Kifaa kimeunganishwa kwenye mtandao wa Wi-Fi unaojulikana bila msaada.",
        exceeds: "Pia anaeleza cha kuepuka kwenye Wi-Fi ya umma."
      },
      {
        name: "Kupata tovuti rasmi",
        objective: "O4",
        notYet: "Tovuti iliyofunguliwa ni tangazo au si tovuti ya mahali hapo yenyewe.",
        meets: "Tovuti rasmi ya mahali hapo imepatikana kwa utafutaji, na saa zake za kazi na anwani zimepatikana.",
        exceeds: "Anwani ya tovuti ilisomwa na kukaguliwa kabla ya kugusa."
      },
      {
        name: "Kutumia kivinjari",
        objective: "O3",
        notYet: "Ukurasa mmoja tu ulifunguliwa, au mwanafunzi hakuweza kurudi kwenye ukurasa wa kwanza.",
        meets: "Tabo ya pili inaonyesha hali ya hewa ya kesho, na mwanafunzi anabadilisha kati ya tabo.",
        exceeds: "Pia anakuza maandishi hadi ukubwa unaofaa na anatumia kitufe cha kurudi nyuma."
      },
      {
        name: "Anwani salama na alamisho",
        objective: "O5",
        notYet: "Hakuna alamisho, au alamisho imewekwa kwenye tovuti inayoiga au ya tangazo.",
        meets: "Tovuti rasmi imewekewa alamisho na inafunguliwa tena kwa kugusa mara moja.",
        exceeds: "Pia anaeleza jinsi domain inavyoonyesha kuwa tovuti ni halisi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa kipimo kwa mpango wa matembezi",
      "Wanafunzi wanaosema wametumia intaneti wenyewe kwa hitaji halisi, kama saa za kazi, hali ya hewa au tovuti ya afya, katika siku 30 baada ya kozi (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaosema wamefunga pop-up bandia au wameepuka tovuti inayoiga",
      "Wanafunzi wanaoendelea na kozi inayofuata, kama Barua Pepe na Mawasiliano Mtandaoni au Misingi ya Ujuzi wa Kidijitali"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, tableti au kompyuta ambayo mwanafunzi anaweza kufanyia mazoezi",
      "Jina la mtandao wa Wi-Fi na nywila (nyumbani, maktaba au ya programu yenyewe)",
      "Karatasi na kalamu kuandika saa za kazi na anwani ya mahali",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Andika jina la Wi-Fi ya programu na nywila ubaoni ili wanafunzi wajiunge na mtandao sahihi na si unaoiga.",
      "Panga wanafunzi kwa kifaa (iPhone, Android au kompyuta) ili hatua kwenye skrini zilingane na wanachokiona.",
      "Tumia bustani, maktaba au makumbusho ya eneo lenu kwa kazi ya matembezi ili tovuti rasmi iwe rahisi kukagua.",
      "Onyesha picha ya pop-up bandia ya virusi ili wanafunzi waitambue, lakini kamwe usifungue tovuti halisi ya ulaghai darasani.",
      "Nenda polepole na wanafunzi wazee: waache waguse kila hatua wenyewe badala ya kuwafanyia."
    ]
  }
};
