"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-clean-cooking.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Follows WHO guidance. Fuel and stove prices are never given as facts: money figures are examples only. No medical treatment advice.

const WHO_HAP = { name: "WHO, taarifa fupi: Uchafuzi wa hewa nyumbani (nishati chafu, madhara kwa afya, nishati safi, mafuta ya taa)", url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health" };
const WHO_BURNS = { name: "WHO, taarifa fupi: Kuungua (huduma ya kwanza na kuzuia nyumbani)", url: "https://www.who.int/news-room/fact-sheets/detail/burns" };
const WHO_CHEST = { name: "WHO: Zana ya Suluhisho za Nishati Safi Nyumbani (nishati safi, za mpito na chafu)", url: "https://www.who.int/tools/clean-household-energy-solutions-toolkit" };
const CCA = { name: "Clean Cooking Alliance (Muungano wa Upishi Safi)", url: "https://www.cleancooking.org/" };

module.exports = {
  id: "afr-clean-cooking-sw",
  lang: "sw",
  translationOf: "afr-clean-cooking",
  category: "Africa: Life and Work",
  name: "Upishi Safi: Majiko Salama na Jikoni Bila Moshi",
  skills: "Kueleza jinsi moshi wa kupikia unavyodhuru afya, Kupunguza moshi jikoni leo, Kutumia moto, mkaa, gesi na mafuta ya taa kwa usalama, Kulinganisha majiko na nishati safi zaidi, Kuhesabu gharama ya kubadilisha, Kuandika mpango wa usalama jikoni na wa kubadilisha",
  outcome: "kufanya jiko lako kuwa salama zaidi na lenye moshi mdogo: kueleza jinsi moshi unavyodhuru familia yako, kupunguza moshi leo kwa ulivyo navyo, kutumia moto, mkaa, gesi na mafuta ya taa kwa usalama, kulinganisha majiko na nishati safi zaidi kwa gharama na usalama, na kuandika mpango ambao watu wa nyumbani wanaukubali.",
  about: [
    "Kozi hii ni ya mtu yeyote anayepika kwa kuni, mkaa au mafuta ya taa, nyumbani au katika biashara ndogo ya chakula, mijini na vijijini kote Afrika: akina mama, akina baba, bibi, watoto wakubwa wanaosaidia kupika, na wauzaji wa chakula.",
    "Sura ya 1 inahusu moshi na usalama: jinsi moshi wa kupikia unavyodhuru afya, jinsi ya kupunguza moshi leo kwa vitu ulivyo navyo tayari, na jinsi ya kuwa salama na moto, mkaa, gesi na mafuta ya taa. Sura ya 2 inahusu kuhamia upishi safi zaidi: kulinganisha majiko na nishati, kuhesabu gharama, na kuandika mpango wa jikoni pamoja na watu wa nyumbani.",
    "Kozi hii inafuata ushauri wa Shirika la Afya Duniani (WHO). Haipendekezi chapa wala muuzaji yeyote. Bei za majiko na nishati hubadilika na hutofautiana kati ya mahali na mahali; kila namba katika kozi ni mfano tu, kwa hiyo tumia bei zako mwenyewe. Kila somo linachukua kama dakika tano. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa usalama jikoni na wa kubadilisha kwa ajili ya nyumba yako au biashara yako ya chakula (au mfano, kama familia ya Kisumu inayopika kwa jiko la mkaa, muuzaji wa chakula wa Lagos anayetumia kuni, au familia ya Ouagadougou inayopika juu ya mafiga matatu): unapika kwa nini sasa na inagharimu kiasi gani kila mwezi; hatua tatu za kupunguza moshi wiki hii; sheria zako za usalama kwa moto, mkaa, gesi au mafuta ya taa na watoto; njia mbili safi zaidi zikilinganishwa kwa gharama, upatikanaji wa nishati na usalama; uchaguzi wako, jinsi utakavyolipa, na tarehe utakayobadilisha; na nani nyumbani amekubali.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaopikia familia au biashara ndogo ya chakula nchini Kenya, Nigeria, Ghana, Burkina Faso, Senegal, Cameroon, Misri na kote Afrika, wengi kwa kuni, mkaa au mafuta ya taa. Wengi ni wanawake na wasichana ambao pia hutafuta kuni, na wengi wana simu ya kawaida na bajeti ndogo.",
    startingPoint: "Wengi hupika juu ya moto wa wazi, mafiga matatu, jiko la mkaa au jiko la mafuta ya taa, mara nyingi ndani ya jiko dogo lenye hewa kidogo. Wengi wanajua moshi unauma macho lakini hawauhusishi na magonjwa ya kifua kwa watoto. Wachache wamelinganisha wanachotumia kwa nishati kila mwezi na gharama ya jiko safi zaidi, na baadhi wanaogopa gesi.",
    gap: "WHO inakadiria kuwa watu karibu bilioni 2.1 duniani hupika kwa nishati na majiko yanayochafua hewa, na mamilioni ya vifo kila mwaka vinatokana na uchafuzi wa hewa nyumbani, huku wanawake na watoto wadogo wakiathirika zaidi. Moto wa wazi, mkaa na mafuta ya taa pia husababisha kuungua, sumu ya kaboni monoksidi na watoto kunywa sumu. Wanafunzi wanaopunguza moshi, wanaopika kwa usalama na wanaopanga kubadilisha wanalinda afya ya familia zao na mara nyingi wanaokoa muda na pesa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno gumu linaelezwa",
      "Bajeti: ndogo; kozi haitoi bei halisi kamwe, ni mifano tu, na wanafunzi wanatumia bei za mahali pao",
      "Upatikanaji wa nishati unatofautiana: gesi, umeme na majiko bora hayapatikani kila mahali, kwa hiyo wanafunzi wanachagua kinachofaa",
      "Usalama: hakuna kazi kwenye mabomba ya gesi, nyaya za umeme au gridi; wanafunzi wanatumia wauzaji wenye leseni na wanafuata maelekezo ya mtengenezaji",
      "Hakuna ushauri wa matibabu: kuungua na matatizo ya kupumua yanapelekwa kliniki"
    ],
    prerequisites: "Hakuna. Kujumlisha na kuzidisha kwa urahisi kunasaidia katika Somo la 5; kikokotoo cha simu kinatosha."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa jiko linalopika kwa kuni, mkaa au mafuta ya taa", action: "kueleza jinsi moshi wa kupikia unavyodhuru afya na unawaumiza zaidi kina nani", standard: "ukitaja angalau madhara matatu kwa afya na watu wanaoathirika zaidi" },
    { id: "O2", condition: "Ukitumia jiko na nishati uliyo nayo sasa", action: "kuorodhesha hatua za kupunguza moshi jikoni kwako wiki hii", standard: "ukiwa na angalau hatua tatu zinazogharimu kidogo au bila gharama" },
    { id: "O3", condition: "Unapopika kwa moto, mkaa, gesi au mafuta ya taa", action: "kufuata sheria za usalama zinazozuia kuungua, sumu ya kaboni monoksidi, moto wa gesi na sumu ya mafuta ya taa", standard: "ukichagua hatua salama katika angalau hali 4 kati ya 5" },
    { id: "O4", condition: "Ukipewa njia mbili au zaidi za majiko na nishati zinazopatikana unapoishi", action: "kulinganisha majiko na nishati safi zaidi kwa moshi, gharama, upatikanaji wa nishati na usalama", standard: "ukiwa na sababu sahihi ya njia unayochagua" },
    { id: "O5", condition: "Ukitumia matumizi yako ya nishati na bei za mahali pako", action: "kuhesabu gharama yako ya nishati kwa mwezi na kuilinganisha na gharama ya njia safi zaidi", standard: "hesabu zikiwa sahihi na hatari za malipo zikitajwa" },
    { id: "O6", condition: "Pamoja na watu wa nyumbani au wa biashara yako", action: "kuandika mpango wa usalama jikoni na wa kubadilisha ambao watu wa nyumbani wanaukubali", standard: "kila sehemu ikiwa imejazwa na tarehe ya kubadilisha" }
  ],
  chapters: [
    {
      name: "Sura 1: Moshi na usalama jikoni",
      lessons: [
        {
          title: "Jinsi moshi wa kupikia unavyodhuru familia yako",
          objectives: ["O1"],
          minutes: 5,
          goal: "Eleza jinsi moshi wa kupikia unavyodhuru afya na unawaumiza zaidi kina nani.",
          text: [
            "Moshi wa kuni, mkaa, mabaki ya mazao, kinyesi cha wanyama (samadi) na mafuta ya taa umejaa chembe ndogo sana na gesi. Nyingi huwezi kuziona, lakini zinaingia ndani kabisa ya mapafu. Hii inaitwa uchafuzi wa hewa nyumbani.",
            "WHO inasema uchafuzi wa hewa nyumbani husababisha nimonia na maambukizi mengine ya kifua kwa watoto, na kiharusi, ugonjwa wa moyo, ugonjwa wa muda mrefu wa mapafu na saratani ya mapafu kwa watu wazima. Pia unahusishwa na watoto kuzaliwa na uzito mdogo na magonjwa ya macho. WHO inakadiria watu karibu bilioni 2.1 duniani hupika kwa nishati na majiko yanayochafua hewa, wengi wao Afrika na Asia.",
            "Wanawake na watoto wadogo ndio wanaovuta moshi mwingi zaidi, kwa sababu wanakaa muda mrefu zaidi karibu na moto, na mara nyingi mtoto mchanga hubebwa mgongoni wakati mama anapika. Wasichana na wanawake pia hupoteza saa nyingi kutafuta kuni, muda ambao ungeweza kwenda shuleni, kazini au kupumzika.",
            "Moshi usiouona bado unadhuru. Harufu ya moshi, macho kuuma, kukohoa wakati wa kupika, na kuta au paa jeusi ni dalili kwamba familia yako inavuta moshi mwingi mno."
          ],
          words: [["Uchafuzi wa hewa nyumbani", "moshi na gesi ndani na karibu na nyumba, hasa kutokana na kupika, kupasha joto na kuwasha taa kwa nishati chafu."], ["Nishati chafu", "nishati zinazotoa moshi mwingi zikichomwa katika majiko ya kawaida: kuni, mkaa, mabaki ya mazao, samadi, makaa ya mawe na mafuta ya taa."], ["Nimonia", "ugonjwa mkali wa kifua (homa ya mapafu); ni moja ya visababishi vikubwa vya vifo vya watoto wadogo."]],
          slides: [
            { title: "Ndani ya moshi kuna nini", bullets: ["Chembe ndogo sana na gesi", "Zinaingia ndani kabisa ya mapafu", "Nyingi huwezi kuziona"] },
            { title: "Jinsi unavyodhuru (WHO)", bullets: ["Watoto: nimonia na maambukizi ya kifua", "Watu wazima: kiharusi, magonjwa ya moyo na mapafu, saratani ya mapafu", "Unahusishwa na uzito mdogo wa kuzaliwa na magonjwa ya macho"] },
            { title: "Nani anavuta moshi mwingi zaidi", bullets: ["Wanawake wanaopika", "Watoto wachanga mgongoni na watoto wadogo", "Wasichana wanaotafuta kuni hupoteza muda wa shule"] },
            { title: "Dalili za moshi mwingi mno", bullets: ["Macho kuuma, kukohoa wakati wa kupika", "Kuta au paa jeusi", "Harufu ya moshi katika nguo"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Angalia jiko lako wakati wa mlo mmoja. Andika moto unawaka kwa muda gani, nani yuko karibu nao, kama kuna mtoto mchanga au mtoto mdogo, na dalili za moshi unazoziona. Andika njia tatu ambazo moshi unaweza kudhuru familia yako.",
          youCanNow: "kueleza jinsi moshi wa kupikia unavyodhuru afya na nani nyumbani kwako anavuta moshi mwingi zaidi.",
          quickCheck: [
            { objective: "O1", q: "WHO inahusisha moshi wa kupikia na ugonjwa gani kwa watoto wadogo?", options: ["Nimonia na maambukizi ya kifua", "Kuvunjika mifupa", "Maumivu ya jino", "Tetekuwanga"], answer: 0, why: "Uchafuzi wa hewa nyumbani husababisha maambukizi ya njia ya chini ya hewa kama nimonia." },
            { objective: "O1", q: "Kwa kawaida nani anavuta moshi wa kupikia zaidi?", options: ["Wageni", "Wanaume wanaofanya kazi shambani", "Wanawake wanaopika na watoto wadogo walio karibu nao", "Hakuna; moshi unapanda juu"], answer: 2, why: "Wanawake na watoto wadogo wanakaa muda mrefu zaidi karibu na moto." }
          ]
        },
        {
          title: "Kupunguza moshi leo kwa ulivyo navyo",
          objectives: ["O2"],
          minutes: 5,
          goal: "Orodhesha hatua za kupunguza moshi jikoni kwako wiki hii, kwa jiko ulilo nalo sasa.",
          text: [
            "Jiko jipya linasaidia zaidi, lakini unaweza kupunguza moshi leo. Ruhusu hewa iingie na moshi utoke: pika nje au chini ya kibanda unapoweza, acha milango na madirisha wazi wakati wa kupika, na ukiweza, tengeneza dirisha, nafasi chini ya paa au tundu la bomba la moshi karibu na moto.",
            "Choma kidogo na choma kwa usafi zaidi. Tumia kuni kavu: kuni mbichi hutoa moshi mwingi zaidi. Pasua kuni ziwe vipande vyembamba na uzisukume ndani taratibu. Funika sufuria kwa mfuniko, loweka maharagwe na mahindi kabla ya kupika, na zima moto mara chakula kinapoiva.",
            "Waweke watoto mbali. Watoto wachanga na watoto wadogo wasiwe jikoni wakati moto unawaka, na usipike ukiwa umembeba mtoto mgongoni kama mtu mwingine anaweza kumshika.",
            "Usichome kamwe plastiki, mpira au mbao zilizopakwa rangi: moshi wake una sumu."
          ],
          steps: ["Ruhusu hewa iingie: pika nje au fungua milango na madirisha.", "Tumia kuni kavu zilizopasuliwa na uzisukume taratibu.", "Funika sufuria; loweka maharagwe na mahindi kwanza.", "Zima moto chakula kikiiva.", "Waweke watoto wachanga na wadogo mbali na moshi."],
          words: [["Upitishaji hewa", "kuruhusu hewa safi iingie na hewa yenye moshi itoke."], ["Nafasi chini ya paa", "tundu kati ya juu ya ukuta na paa linaloruhusu moshi kutoka."]],
          slides: [
            { title: "Hewa iingie, moshi utoke", bullets: ["Pika nje au chini ya kibanda", "Fungua milango na madirisha", "Tengeneza dirisha au nafasi chini ya paa karibu na moto"] },
            { title: "Choma kidogo, choma kwa usafi", bullets: ["Kuni kavu na nyembamba", "Mifuniko kwenye sufuria; loweka maharagwe na mahindi", "Zima moto chakula kikiiva"] },
            { title: "Linda watoto", bullets: ["Wasiwe katika jiko lenye moshi", "Mtu mwingine amshike mtoto mchanga", "Usichome kamwe plastiki au mpira"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Chagua hatua tatu kutoka somo hili unazoweza kuanza wiki hii bila pesa au kwa pesa kidogo sana. Ziandike, zijaribu kwa siku tatu, na uandike kilichobadilika (moshi mdogo, kuni chache, muda mfupi).",
          youCanNow: "kupunguza moshi jikoni kwako kwa hatua zinazogharimu kidogo au bila gharama.",
          quickCheck: [
            { objective: "O2", q: "Kuni zipi hutoa moshi mdogo zaidi?", options: ["Kuni mbichi zenye unyevu", "Magogo makubwa yaliyosukumwa yote mara moja", "Mbao zilizopakwa rangi kutoka mlango wa zamani", "Vipande vikavu na vyembamba vilivyosukumwa taratibu"], answer: 3, why: "Kuni kavu na nyembamba huungua kikamilifu zaidi na hutoa moshi mdogo." },
            { objective: "O2", q: "Hatua ipi inapunguza moshi na nishati kwa wakati mmoja?", options: ["Kupika ukiwa umefunika sufuria kwa mfuniko", "Kuacha moto ukiwaka baada ya kupika", "Kufunga madirisha", "Kuchoma plastiki kuwasha moto"], answer: 0, why: "Mfuniko unapika chakula haraka zaidi, kwa hiyo unachoma nishati kidogo na kutoa moshi mdogo." }
          ]
        },
        {
          title: "Kuwa salama na moto, mkaa, gesi na mafuta ya taa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Fuata sheria za usalama zinazozuia kuungua, sumu ya kaboni monoksidi, moto wa gesi na sumu ya mafuta ya taa.",
          text: [
            "Kuungua: weka jiko imara na, ukiweza, juu ya sakafu na kizuizi kuzunguka moto wa wazi. Geuza mikono ya sufuria iangalie ndani. Waweke watoto mbali na mahali pa kupikia. Mtu akiungua, huduma ya kwanza ya WHO ni: zuia kuungua kuendelea, poza jeraha chini ya maji baridi yanayotiririka (kama dakika 20 kwa majeraha madogo), vua pete na nguo zinazobana, na ufunike kwa kitambaa safi. Usipake siagi, mafuta, dawa ya meno wala dawa za kienyeji. Nenda kliniki kwa majeraha makubwa au ya ndani, au majeraha usoni, mikononi, miguuni au sehemu za siri.",
            "Mkaa: jiko la mkaa linalowaka hutoa kaboni monoksidi, gesi ambayo huwezi kuiona wala kuinusa na inaweza kuua. Usiingize kamwe jiko la mkaa linalowaka katika chumba kilichofungwa ili kupika au kupasha chumba joto, na usilale kamwe na jiko hilo ndani. Kuumwa kichwa, kizunguzungu na usingizi karibu na jiko ni dalili za hatari: watoe watu wote waende kwenye hewa safi.",
            "Gesi (LPG): nunua mitungi kwa muuzaji mwenye leseni, weka mtungi umesimama wima, na kagua mpira wa gesi na rekuleta. Ukinusa gesi: usiwashe kiberiti wala swichi yoyote, funga vali ya mtungi, fungua milango na madirisha, na watoe watu nje. Funga vali baada ya kupika.",
            "Mafuta ya taa: WHO inashauri yasitumike kupikia wala kuwasha taa, na kumeza mafuta ya taa ni moja ya visababishi vikubwa vya sumu kwa watoto. Yaweke katika chombo kilichofungwa chenye lebo, kamwe si katika chupa ya kinywaji, na mbali na watoto wasipoweza kufikia. Mtoto akiyameza, nenda kliniki sasa hivi."
          ],
          steps: ["Weka jiko imara na watoto mbali; geuza mikono ya sufuria ndani.", "Usitumie mkaa kamwe katika chumba kilichofungwa wala ukilala.", "Gesi: muuzaji mwenye leseni, mtungi wima, vali imefungwa baada ya kupika.", "Ukinusa gesi: hakuna moto wala swichi, funga vali, fungua, toka nje.", "Mafuta ya taa: chombo chenye lebo, kamwe si chupa ya kinywaji, mbali na watoto."],
          words: [["Kaboni monoksidi", "gesi yenye sumu inayotokana na kuchoma nishati; huwezi kuiona wala kuinusa."], ["LPG", "gesi ya petroli iliyogeuzwa kuwa kimiminika: gesi ya kupikia inayouzwa katika mitungi."], ["Rekuleta", "kifaa kilicho juu ya mtungi wa gesi kinachodhibiti gesi inayokwenda kwenye jiko."]],
          slides: [
            { title: "Kuungua", bullets: ["Jiko imara, mikono ya sufuria ndani, watoto mbali", "Huduma ya kwanza: maji baridi yanayotiririka kama dakika 20, kitambaa safi", "Hakuna siagi, mafuta wala dawa za kupaka; majeraha makubwa kliniki"] },
            { title: "Mkaa", bullets: ["Hutoa kaboni monoksidi: haina rangi, haina harufu", "Kamwe katika chumba kilichofungwa; kamwe ukilala", "Kichwa kinauma au kizunguzungu karibu nalo: nenda hewa safi"] },
            { title: "Gesi (LPG)", bullets: ["Muuzaji mwenye leseni; mtungi wima", "Ukinusa gesi: hakuna moto wala swichi, funga vali, fungua, toka nje", "Funga vali baada ya kupika"] },
            { title: "Mafuta ya taa", bullets: ["WHO inashauri yasitumike", "Chombo chenye lebo, kamwe si chupa ya kinywaji", "Mtoto akiyameza: kliniki sasa hivi"] }
          ],
          sources: [WHO_BURNS, WHO_HAP],
          tryIt: "Pita jikoni kwako na uandike sheria tano za usalama kwa nyumba yako: moja kwa kuungua na watoto, moja kwa mkaa, moja kwa gesi au mafuta ya taa (unachotumia), moja kwa kuhifadhi nishati, na moja kuhusu cha kufanya wakati wa dharura, pamoja na kliniki iliyo karibu zaidi.",
          youCanNow: "kupika kwa usalama kwa moto, mkaa, gesi na mafuta ya taa na kuchukua hatua haraka kitu kikienda vibaya.",
          quickCheck: [
            { objective: "O3", q: "Usiku ni baridi Ouagadougou. Je, ni salama kuingiza jiko la mkaa linalowaka katika chumba cha kulala kilichofungwa?", options: ["Ndiyo, mlango ukiwa umefungwa", "Ndiyo, mkaa ukiwa wa ubora mzuri", "Ndiyo, ukilala mbali nalo", "Hapana: hutoa kaboni monoksidi, ambayo inaweza kuua"], answer: 3, why: "Kaboni monoksidi hujikusanya katika chumba kilichofungwa na inaweza kuua watu waliolala." },
            { objective: "O3", q: "Unanusa gesi jikoni. Unafanya nini kwanza?", options: ["Kuwasha kiberiti kutafuta mahali inapovuja", "Kufunga vali na kufungua milango na madirisha", "Kuwasha taa", "Kupuuza"], answer: 1, why: "Hakuna moto wala swichi; funga gesi na uiruhusu itoke nje." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Moshi na usalama jikoni",
        questions: [
          { objective: "O1", q: "WHO inahusisha uchafuzi wa hewa nyumbani na ugonjwa gani wa watu wazima?", options: ["Kiharusi na ugonjwa wa moyo", "Malaria", "Homa ya matumbo", "Kuvunjika mifupa"], answer: 0, why: "WHO inataja kiharusi, ugonjwa wa moyo, ugonjwa wa mapafu na saratani ya mapafu." },
          { objective: "O1", q: "Mbali na moshi, kwa nini wasichana wanapoteza kutokana na kupika kwa kuni?", options: ["Wanapata pesa zaidi", "Wanapoteza muda kutafuta kuni, na hilo linaweza kuwagharimu shule", "Wanalala zaidi", "Haliwaathiri"], answer: 1, why: "Kutafuta nishati kunachukua muda wa shule na kazi." },
          { objective: "O2", q: "Hatua ipi inapunguza moshi jikoni leo?", options: ["Kufunga madirisha yote", "Kutumia kuni mbichi", "Kupika nje au kufungua milango na madirisha", "Kuchoma plastiki za zamani"], answer: 2, why: "Upitishaji hewa unaruhusu moshi kutoka." },
          { objective: "O3", q: "Mtoto huko Yaoundé ameungua kwa supu ya moto. Huduma ya kwanza sahihi ni ipi?", options: ["Kupaka siagi", "Kufunika kwa dawa ya meno", "Kupasua malengelenge", "Kupoza chini ya maji baridi yanayotiririka na kufunika kwa kitambaa safi"], answer: 3, why: "Huduma ya kwanza ya WHO ni maji baridi yanayotiririka na kifuniko safi; hakuna siagi wala dawa za kupaka." },
          { objective: "O3", q: "Mafuta ya taa yanapaswa kuhifadhiwa wapi?", options: ["Katika chombo kilichofungwa chenye lebo, mbali na watoto", "Katika chupa ya zamani ya soda", "Sakafuni karibu na kitanda", "Katika kikombe mezani"], answer: 0, why: "Watoto hunywa mafuta ya taa kutoka chupa za vinywaji na vikombe; ni moja ya visababishi vikubwa vya sumu kwa watoto." }
        ]
      }
    },
    {
      name: "Sura 2: Kuhamia upishi safi zaidi",
      lessons: [
        {
          title: "Majiko na nishati safi zaidi",
          objectives: ["O4"],
          minutes: 6,
          goal: "Linganisha majiko na nishati safi zaidi kwa moshi, gharama, upatikanaji wa nishati na usalama.",
          text: [
            "WHO inaorodhesha njia safi zaidi: nishati ya jua, umeme, biogesi, LPG (gesi ya kupikia), gesi asilia, nishati za alkoholi kama ethanoli, na majiko ya kuni na mabaki ya mimea yanayofikia viwango vya WHO vya utoaji wa moshi. WHO inashauri dhidi ya mafuta ya taa na makaa ya mawe yasiyochakatwa.",
            "Majiko bora ya kuni au mkaa (pia huitwa majiko banifu au majiko yaliyoboreshwa) huchoma nishati kidogo na kutoa moshi mdogo kuliko mafiga matatu au moto wa wazi. Ni hatua ya kusonga mbele, lakini mengi bado hutoa moshi mwingi, kwa hiyo hakikisha jiko lina hewa ya kutosha. Muulize muuzaji kama aina hiyo imejaribiwa.",
            "Kupika kwa gesi (LPG) na umeme hakutoi moshi karibu kabisa jikoni. Jiko la umeme la presha (pressure cooker) au sahani ya umeme inaweza kuwa nafuu kuitumia mahali umeme unapatikana kwa uhakika, na inafaa kwa maharagwe na mchuzi. Biogesi inafaa shamba lenye ng'ombe na nafasi ya tangi la kuzalisha gesi. Kipika-joto (kikapu au sanduku lililozuiwa joto vizuri) humalizia kupika bila nishati ya ziada na kinafanya kazi na jiko lolote.",
            "Chagua kinachofaa mahali pako: Je, nishati hiyo inauzwa karibu nawe mwaka mzima? Je, unaweza kulipia kujaza tena? Je, ni salama kwa nyumba yako? Katika miji mingi gesi au umeme vinaweza kufaa; vijijini mbali na upatikanaji, jiko bora pamoja na hewa ya kutosha linaweza kuwa hatua ya kwanza."
          ],
          steps: ["Orodhesha majiko na nishati zinazouzwa karibu nawe.", "Kwa kila kimoja, andika moshi (mwingi, kiasi, karibu hakuna).", "Andika upatikanaji wa nishati: daima, wakati mwingine, mara chache.", "Andika mahitaji ya usalama na gharama ya mwanzo na ya kuendesha.", "Chagua njia safi zaidi unayoweza kupata na kumudu."],
          words: [["Jiko bora", "jiko la kuni au mkaa lililoundwa kuchoma nishati kidogo na kutoa moshi mdogo kuliko moto wa wazi."], ["Biogesi", "gesi inayotengenezwa kutokana na samadi na mabaki ya mimea katika tangi lililofungwa linaloitwa digester."], ["Kipika-joto", "kikapu au sanduku lililozuiwa joto linalofanya sufuria ya moto iendelee kupika bila nishati zaidi."]],
          slides: [
            { title: "Njia safi zaidi (WHO)", bullets: ["Nishati ya jua, umeme, biogesi, LPG, gesi asilia, ethanoli", "Majiko ya kuni na mabaki ya mimea yanayofikia viwango vya WHO", "WHO inashauri dhidi ya mafuta ya taa na makaa ya mawe"] },
            { title: "Majiko bora ya kuni na mkaa", bullets: ["Nishati kidogo na moshi mdogo kuliko moto wa wazi", "Bado yana moshi: endelea kuingiza hewa", "Uliza kama aina hiyo imejaribiwa"] },
            { title: "Gesi na umeme", bullets: ["Karibu hakuna moshi jikoni", "Jiko la umeme la presha: zuri kwa maharagwe na mchuzi", "Kipika-joto kinaokoa nishati na jiko lolote"] },
            { title: "Chagua kinachofaa", bullets: ["Nishati inauzwa karibu nawe mwaka mzima?", "Unaweza kulipia kujaza tena?", "Ni salama kwa nyumba yako?"] }
          ],
          sources: [WHO_HAP, WHO_CHEST, CCA],
          tryIt: "Uliza sokoni, dukani au kwa muuzaji wa gesi karibu nawe ni majiko na nishati gani zinauzwa. Tengeneza jedwali dogo la njia mbili au tatu lenye safu nne: moshi, upatikanaji wa nishati, mahitaji ya usalama na gharama (tumia bei halisi unazoambiwa).",
          youCanNow: "kulinganisha majiko na nishati safi zaidi kwa moshi, gharama, upatikanaji wa nishati na usalama, na kuchagua kinachofaa.",
          quickCheck: [
            { objective: "O4", q: "Kipi kati ya hivi WHO inakiorodhesha kama nishati safi ya kupikia?", options: ["Mafuta ya taa", "Makaa ya mawe yasiyochakatwa", "LPG (gesi ya kupikia)", "Taka za plastiki"], answer: 2, why: "WHO inaorodhesha LPG, umeme, biogesi, nishati ya jua na ethanoli kati ya nishati safi." },
            { objective: "O4", q: "Familia katika kijiji kilicho mbali na muuzaji yeyote wa gesi inataka moshi mdogo sasa. Hatua ya kwanza yenye busara ni ipi?", options: ["Jiko bora pamoja na hewa ya kutosha", "Kununua mtungi wa gesi ambao hawawezi kuujaza tena", "Kuhamia mafuta ya taa", "Kupika ndani madirisha yakiwa yamefungwa"], answer: 0, why: "Jiko bora pamoja na upitishaji hewa hupunguza moshi mahali ambapo nishati safi bado hazipatikani." }
          ]
        },
        {
          title: "Kuhesabu gharama na kulipia kubadilisha",
          objectives: ["O5"],
          minutes: 6,
          goal: "Hesabu gharama yako ya nishati kwa mwezi na uilinganishe na gharama ya njia safi zaidi.",
          text: [
            "Familia nyingi hufikiri upishi safi ni ghali mno, lakini hawajumlishi kamwe wanachotumia tayari. Andika unachotumia kwa kuni, mkaa au mafuta ya taa katika wiki ya kawaida, na uzidishe kwa 4 kupata gharama ya mwezi kwa makadirio. Ukitafuta kuni mwenyewe, hesabu pia saa unazotumia.",
            "Kwa njia safi zaidi, hesabu gharama mbili: gharama ya mwanzo (jiko, mtungi na rekuleta) na gharama ya kuendesha (kujaza tena au umeme kila mwezi). Kisha linganisha gharama ya kuendesha na unachotumia sasa, na uhesabu itachukua miezi mingapi kwa akiba yoyote kurudisha gharama ya mwanzo.",
            "Mfano kwa namba za kubuni, si bei halisi: familia ya Kisumu inatumia KES 300 kwa wiki kwa mkaa, kama KES 1,200 kwa mwezi. Njia safi zaidi inagharimu KES 900 kwa mwezi kuiendesha na KES 3,600 mwanzoni. Wanaokoa KES 300 kwa mwezi, kwa hiyo gharama ya mwanzo inarudi baada ya miezi 12 (3,600 kugawanya kwa 300). Tumia bei zako mwenyewe.",
            "Njia za kulipa: weka akiba kidogo kila wiki, nunueni pamoja kupitia kikundi cha akiba au chama, tontine au esusu, au uliza kuhusu mipango ya gesi au majiko ya lipa-unapotumia inayotolewa mahali unapoishi. Kabla ya kusaini, uliza bei kamili, nini kinatokea ukikosa malipo, na nani anafanya matengenezo. Usimlipe mtu usiyemjua anayeahidi jiko la bure kwa ada, na nunua gesi kwa wauzaji wenye leseni tu."
          ],
          steps: ["Andika matumizi yako ya nishati kwa wiki na uzidishe kwa 4.", "Andika gharama ya mwanzo na ya kila mwezi ya njia safi zaidi.", "Toa kupata akiba ya kila mwezi (au gharama ya ziada).", "Gawanya gharama ya mwanzo kwa akiba ya kila mwezi kupata miezi ya kurudisha.", "Chagua jinsi ya kulipa na kagua masharti."],
          words: [["Gharama ya mwanzo", "pesa unazolipa mara moja mwanzoni, kama kwa ajili ya jiko."], ["Gharama ya kuendesha", "pesa unazolipa tena na tena, kama kujaza nishati."], ["Kurudisha gharama", "muda unaochukua kwa akiba kufidia ulicholipa mwanzoni."], ["Lipa-unapotumia", "kulipa kwa kiasi kidogo kidogo, mara nyingi kwa pesa za simu, unapotumia nishati au jiko (pay-as-you-go)."]],
          slides: [
            { title: "Unatumia kiasi gani sasa?", bullets: ["Matumizi ya nishati kwa wiki x 4 = gharama ya mwezi", "Hesabu pia saa za kutafuta kuni"] },
            { title: "Gharama mbili za kubadilisha", bullets: ["Ya mwanzo: jiko, mtungi, rekuleta", "Ya kuendesha: kujaza tena au umeme kila mwezi"] },
            { title: "Mfano (namba za kubuni)", bullets: ["Mkaa KES 1,200 kwa mwezi; njia safi zaidi KES 900", "Akiba KES 300 kwa mwezi", "Mwanzo KES 3,600 / 300 = miezi 12 kurudisha"] },
            { title: "Kulipa kwa usalama", bullets: ["Weka akiba kila wiki au nunua kupitia kikundi chako cha akiba", "Uliza bei kamili na sheria za kukosa malipo", "Hakuna ada kwa \"majiko ya bure\"; wauzaji wa gesi wenye leseni tu"] }
          ],
          tryIt: "Andika kile nyumba yako inachotumia kwa nishati ya kupikia katika wiki ya kawaida (kwa sarafu yako, kwa mfano NGN, GHS, XOF, XAF au EGP) na uhesabu ya mwezi. Kisha tumia bei halisi ulizopata katika Somo la 4 kuhesabu akiba ya kila mwezi na miezi ya kurudisha gharama kwa njia moja safi zaidi.",
          youCanNow: "kuhesabu nishati ya kupikia inakugharimu kiasi gani kila mwezi na kama njia safi zaidi inarudisha gharama yake.",
          quickCheck: [
            { objective: "O5", q: "Mfano tu: familia inatumia GHS 50 kwa wiki kwa mkaa. Hiyo ni kama kiasi gani kwa mwezi?", options: ["GHS 50", "GHS 100", "GHS 500", "GHS 200"], answer: 3, why: "50 kwa wiki mara wiki 4 ni kama 200 kwa mwezi." },
            { objective: "O5", q: "Mwanaume anapiga simu akitoa \"jiko la bure la serikali\" ukituma kwanza ada kwa pesa za simu. Hii ni nini?", options: ["Ofa nzuri", "Dalili ya hatari ya ulaghai; usilipe", "Kodi ya kawaida", "Amana inayohitajika"], answer: 1, why: "Kuomba ada ili upate kitu cha bure ni dalili ya kawaida ya ulaghai." }
          ]
        },
        {
          title: "Mpango wako wa usalama jikoni na wa kubadilisha",
          objectives: ["O6"],
          minutes: 5,
          goal: "Andika mpango wa usalama jikoni na wa kubadilisha ambao watu wa nyumbani kwako wanaukubali.",
          text: [
            "Mpango unageuza ulichojifunza kuwa vitendo. Una sehemu sita: unapika kwa nini sasa na gharama yake ya mwezi; hatua tatu za kupunguza moshi wiki hii; sheria zako za usalama; njia mbili safi zaidi zikilinganishwa; uchaguzi wako, jinsi utakavyolipa na tarehe utakayobadilisha; na nani amekubali.",
            "Zungumza na watu wote wa nyumbani. Anayelipa na anayepika wanaweza kuona mambo tofauti. Waeleze moshi unavyofanya kwa vifua vya watoto, pesa ulizohesabu, na muda unaookolewa kutokana na kutafuta kuni. Muulize kila mmoja kinachomtia wasiwasi, kama hofu ya gesi au ladha ya chakula, na ukijibu.",
            "Ukiendesha biashara ya chakula, kama chop bar huko Kumasi, mama put huko Lagos au dibiterie huko Dakar, waongeze wateja na wafanyakazi wako: moshi mdogo unamaanisha mahali safi zaidi na wafanyakazi wenye afya bora, na mara nyingi nishati ni moja ya gharama zako kubwa zaidi.",
            "Bandika mpango ukutani. Baada ya mwezi mmoja, kagua: je, moshi umepungua, na nishati iligharimu kiasi gani? Badilisha mpango ikihitajika."
          ],
          steps: ["Andika sehemu sita za mpango.", "Ujadili na watu wa nyumbani au wafanyakazi.", "Jibu wasiwasi wao.", "Kubalianeni uchaguzi, malipo na tarehe ya kubadilisha.", "Kagua baada ya mwezi mmoja na urekebishe."],
          words: [["Mpango wa kubadilisha", "mpango ulioandikwa wa kuhamia njia safi zaidi na salama zaidi ya kupika."]],
          slides: [
            { title: "Sehemu sita za mpango", bullets: ["Sasa: nishati na gharama ya mwezi", "Hatua tatu za kupunguza moshi; sheria za usalama", "Njia mbili zikilinganishwa; uchaguzi, malipo, tarehe; nani amekubali"] },
            { title: "Kubalianeni pamoja", bullets: ["Anayepika na anayelipa wanaweza kutofautiana", "Shirikisha ukweli wa afya, pesa na muda", "Jibu wasiwasi, kama hofu ya gesi"] },
            { title: "Kwa biashara za chakula", bullets: ["Mahali safi zaidi, wafanyakazi wenye afya bora", "Mara nyingi nishati ni gharama kubwa"] },
            { title: "Kagua baada ya mwezi", bullets: ["Moshi umepungua?", "Nishati iligharimu kiasi gani?", "Badilisha mpango ikihitajika"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa usalama jikoni na wa kubadilisha wenye sehemu zote sita. Ujadili na watu wa nyumbani au wafanyakazi wako na uandike majina ya waliokubali.",
          youCanNow: "kuandika mpango wa usalama jikoni na wa kubadilisha na kukubaliana nao na watu wa nyumbani kwako.",
          quickCheck: [
            { objective: "O6", q: "Kipi kinafaa kuwemo katika mpango wa kubadilisha jiko?", options: ["Tarehe ya kubadilisha na jinsi utakavyolipa", "Rangi ya jiko tu", "Hakuna chochote kuhusu usalama", "Ahadi ya kupika ndani kwa mkaa"], answer: 0, why: "Mpango unahitaji uchaguzi, mpango wa malipo na tarehe ili kubadilisha kufanyike." },
            { objective: "O6", q: "Anayepika anataka gesi, lakini anayelipa ana wasiwasi kuhusu gharama. Kipi kinasaidia zaidi?", options: ["Kupuuza wasiwasi", "Kununua bila kumwambia", "Kuonyesha gharama ya nishati ya mwezi uliyohesabu na ukweli wa afya", "Kukata tamaa"], answer: 2, why: "Namba halisi na ukweli wa afya husaidia watu wa nyumbani kukubaliana." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuhamia upishi safi zaidi",
        questions: [
          { objective: "O4", q: "Kipi hakitoi moshi karibu kabisa jikoni?", options: ["Mafiga matatu", "Jiko la mafuta ya taa", "Moto wa wazi", "Jiko la umeme la presha"], answer: 3, why: "Kupika kwa umeme na gesi hakutoi moshi karibu kabisa jikoni." },
          { objective: "O4", q: "Kipika-joto kinafanya nini?", options: ["Kinatengeneza gesi kutokana na samadi", "Kinafanya sufuria ya moto iendelee kupika bila nishati ya ziada", "Kinachoma plastiki kwa usafi", "Kinachaji simu"], answer: 1, why: "Kizuizi cha joto kinabakiza joto ndani ili chakula kimalizike kupika bila nishati zaidi." },
          { objective: "O5", q: "Mfano tu: njia safi zaidi inaokoa XAF 5,000 kwa mwezi na inagharimu XAF 30,000 mwanzoni. Ni miezi mingapi kurudisha gharama?", options: ["Miezi 6", "Miezi 3", "Miezi 25", "Miezi 35"], answer: 0, why: "30,000 kugawanya kwa 5,000 ni 6." },
          { objective: "O5", q: "Kabla ya kusaini mpango wa jiko wa lipa-unapotumia, unapaswa kuuliza nini?", options: ["Hakuna kitu", "Rangi tu", "Bei kamili na nini kinatokea ukikosa malipo", "Chakula anachopenda muuzaji"], answer: 2, why: "Gharama kamili na sheria za kukosa malipo zinaonyesha hatari halisi." },
          { objective: "O6", q: "Baada ya kubadilisha, watu wa nyumbani wanapaswa kufanya nini?", options: ["Kutowahi kulifikiria tena", "Kukagua baada ya mwezi moshi na gharama, na kurekebisha", "Kurudi kwenye mafuta ya taa", "Kutupa mpango"], answer: 1, why: "Kukagua kunaonyesha kama mpango ulifanya kazi na nini cha kubadilisha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Upishi Safi: Majiko Salama na Jikoni Bila Moshi",
    questions: [
      { objective: "O1", q: "Uchafuzi wa hewa nyumbani hasa unatokana na:", options: ["Honi za magari", "Kupika kwa nishati chafu katika majiko ya kawaida", "Simu za mkononi", "Maji ya kunywa"], answer: 1, why: "Moshi wa kuni, mkaa, samadi na mafuta ya taa ndio chanzo kikuu." },
      { objective: "O1", q: "Ipi ni dalili kwamba familia yako inavuta moshi mwingi mno?", options: ["Macho kuuma na kukohoa wakati wa kupika", "Kuta nyeupe safi", "Hakuna harufu katika nguo", "Hewa safi jikoni"], answer: 0, why: "Macho kuuma, kukohoa na kuta nyeusi ni dalili za moshi mwingi." },
      { objective: "O1", q: "Kwa nini ni hatari kupika juu ya moto wa wazi ukiwa umembeba mtoto mchanga mgongoni?", options: ["Mtoto anachoka", "Si hatari", "Mtoto anavuta moshi mwingi", "Chakula kinapika polepole zaidi"], answer: 2, why: "Watoto walio karibu na moto huvuta moshi na wanaweza kupata maambukizi ya kifua." },
      { objective: "O2", q: "Kipi kinapunguza moshi bure?", options: ["Kufunga mlango", "Kutumia kuni mbichi", "Kuchoma mpira", "Kufungua milango na madirisha wakati wa kupika"], answer: 3, why: "Upitishaji hewa unaruhusu moshi kutoka bila gharama." },
      { objective: "O2", q: "Kuloweka maharagwe kabla ya kupika kunasaidia kwa sababu:", options: ["Yanaiva haraka, yakitumia nishati kidogo na kutoa moshi mdogo", "Kunaongeza chumvi", "Kunatoa moshi zaidi", "Hakuna faida"], answer: 0, why: "Kupika kwa muda mfupi kunamaanisha nishati kidogo na moshi mdogo." },
      { objective: "O2", q: "Kipi hupaswi kuchoma kamwe?", options: ["Kuni kavu", "Mkaa mahali pa wazi", "Plastiki na mpira", "Magunzi ya mahindi"], answer: 2, why: "Kuchoma plastiki na mpira hutoa moshi wenye sumu." },
      { objective: "O3", q: "Kaboni monoksidi kutoka mkaa ni hatari kwa sababu:", options: ["Ina harufu kali", "Huwezi kuiona wala kuinusa, na inaweza kuua", "Ina rangi", "Inaathiri mimea tu"], answer: 1, why: "Haitoi onyo, kwa hiyo watu wanaweza kupata sumu katika vyumba vilivyofungwa." },
      { objective: "O3", q: "Huduma ya kwanza ya WHO kwa kuungua inasema:", options: ["Paka siagi", "Tumia barafu", "Pasua malengelenge", "Poza chini ya maji baridi yanayotiririka"], answer: 3, why: "Maji baridi yanayotiririka kwa kama dakika 20 ndio ushauri wa WHO kwa majeraha madogo ya kuungua." },
      { objective: "O3", q: "Ukinusa gesi, HUPASWI:", options: ["Kufungua madirisha", "Kufunga vali ya mtungi", "Kuwasha kiberiti au swichi", "Kuwatoa watu nje"], answer: 2, why: "Moto au cheche vinaweza kulipua gesi." },
      { objective: "O3", q: "Mtoto huko Kano amekunywa mafuta ya taa kutoka chupa ya soda. Familia inapaswa:", options: ["Kwenda kliniki sasa hivi", "Kusubiri na kuona", "Kumpa mtoto mafuta", "Kumfanya mtoto atapike"], answer: 0, why: "Sumu ya mafuta ya taa inahitaji huduma sasa hivi; kliniki inaamua matibabu." },
      { objective: "O4", q: "WHO inashauri dhidi ya kipi kwa kupikia?", options: ["LPG", "Umeme", "Mafuta ya taa", "Biogesi"], answer: 2, why: "WHO inashauri dhidi ya mafuta ya taa na makaa ya mawe yasiyochakatwa." },
      { objective: "O4", q: "Jiko bora la mkaa:", options: ["Halitoi moshi kabisa", "Linatumia nishati kidogo na kutoa moshi mdogo, lakini bado linahitaji hewa ya kutosha", "Ni sawa na moto wa wazi", "Linaweza kutumika katika chumba cha kulala kilichofungwa"], answer: 1, why: "Majiko bora yanasaidia, lakini mengi bado yanatoa moshi na kaboni monoksidi." },
      { objective: "O4", q: "Biogesi inafaa zaidi kwa:", options: ["Shamba lenye ng'ombe na nafasi ya tangi la kuzalisha gesi", "Nyumba ya ghorofa isiyo na wanyama", "Kibanda cha sokoni kisicho na nafasi", "Gari"], answer: 0, why: "Biogesi inatengenezwa kutokana na samadi na mabaki ya mimea katika tangi la kuzalisha gesi." },
      { objective: "O4", q: "Kabla ya kuchagua nishati, swali muhimu zaidi ni:", options: ["Jiko lina rangi gani?", "Inauzwa karibu nami mwaka mzima, na naweza kulipia kujaza tena?", "Majirani wanaionaje chapa hiyo?", "Je, boksi ni kubwa?"], answer: 1, why: "Jiko safi linasaidia tu kama unaweza kuendelea kununua nishati yake." },
      { objective: "O5", q: "Kupata gharama yako ya nishati ya mwezi, unaweza:", options: ["Kukisia", "Kuzidisha matumizi yako ya wiki kwa 4", "Kugawanya kwa 4", "Kumuuliza mtu usiyemjua"], answer: 1, why: "Matumizi ya wiki mara 4 yanatoa gharama ya mwezi kwa makadirio." },
      { objective: "O5", q: "Mfano tu: akiba ya mwezi EGP 100, gharama ya mwanzo EGP 800. Miezi mingapi kurudisha gharama?", options: ["100", "900", "700", "8"], answer: 3, why: "800 kugawanya kwa 100 ni 8." },
      { objective: "O5", q: "Unapaswa kununua mitungi ya gesi wapi?", options: ["Kwa muuzaji mwenye leseni", "Kwa mtu yeyote kando ya barabara", "Katika duka la kujaza lisilo na alama usiku", "Kwa mtu usiyemjua mtandaoni anayetaka malipo kwanza"], answer: 0, why: "Wauzaji wenye leseni wanafuata sheria za usalama kwa mitungi na kujaza tena." },
      { objective: "O6", q: "Nani anapaswa kukubali mpango wa kubadilisha jiko?", options: ["Muuzaji tu", "Hakuna mtu", "Watu wa nyumbani, pamoja na anayepika na anayelipa", "Watoto tu"], answer: 2, why: "Kila anayehusika anapaswa kukubali ili mpango ufanye kazi." },
      { objective: "O6", q: "Mpango mzuri wa kubadilisha una:", options: ["Hakuna tarehe", "Jina la chapa tu", "Hakuna chochote kuhusu usalama", "Njia mbili zikilinganishwa, uchaguzi, jinsi ya kulipa na tarehe ya kubadilisha"], answer: 3, why: "Sehemu hizi zinafanya mpango uwe wazi na unaowezekana." },
      { objective: "O6", q: "Muuzaji wa chakula huko Dakar anaongeza jambo gani la ziada katika mpango wake?", options: ["Moshi mdogo kwa wafanyakazi na wateja wake, na gharama zake za nishati", "Rangi ya sahani", "Hakuna", "Mafuta ya taa zaidi"], answer: 0, why: "Kwa biashara, afya ya wafanyakazi na gharama ya nishati ni muhimu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 8, 10, 13, 14, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kwa nini ni muhimu", objective: "O1", notYet: "Hakuna sababu ya kiafya iliyotolewa, au sababu si sahihi.", meets: "Anataja angalau madhara matatu ya moshi kwa afya na nani nyumbani anavuta moshi mwingi zaidi.", exceeds: "Anataja pia muda unaopotea kutafuta nishati na unamwathiri nani." },
      { name: "Moshi umepunguzwa wiki hii", objective: "O2", notYet: "Hatua chini ya tatu, au hatua zinazogharimu sana.", meets: "Hatua tatu zinazogharimu kidogo au bila gharama, kama upitishaji hewa, kuni kavu na mifuniko.", exceeds: "Hatua zimejaribiwa, pamoja na maelezo ya kilichobadilika." },
      { name: "Sheria za usalama", objective: "O3", notYet: "Hakuna sheria kwa nishati inayotumika, au sheria isiyo salama.", meets: "Sheria wazi kwa kuungua na watoto na kwa nishati zinazotumika nyumbani, pamoja na kliniki iliyo karibu zaidi.", exceeds: "Inajumuisha hatua za gesi ikivuja au sheria ya mkaa na kaboni monoksidi, na uhifadhi wa nishati." },
      { name: "Njia zimelinganishwa", objective: "O4", notYet: "Njia moja tu, au hakuna ulinganisho.", meets: "Njia mbili zimelinganishwa kwa moshi, upatikanaji wa nishati, usalama na gharama, pamoja na sababu sahihi ya uchaguzi.", exceeds: "Bei zinatoka kwa wauzaji halisi wa mahali hapo na upatikanaji wa nishati umekaguliwa." },
      { name: "Gharama na malipo", objective: "O5", notYet: "Hakuna gharama ya mwezi, au hesabu si sahihi.", meets: "Gharama ya nishati ya mwezi sasa, gharama za njia safi zaidi na njia ya kulipa, kwa hesabu sahihi.", exceeds: "Inaonyesha miezi ya kurudisha gharama na inataja maswali ya kuuliza kabla ya kusaini." },
      { name: "Mpango umekubaliwa", objective: "O6", notYet: "Hakuna tarehe ya kubadilisha, au hakuna mtu mwingine aliyeuona.", meets: "Sehemu zote sita zimejazwa, pamoja na tarehe ya kubadilisha na majina ya waliokubali.", exceeds: "Inajumuisha ukaguzi wa moshi na gharama baada ya mwezi mmoja." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Nyumba zinazoripoti angalau hatua tatu za kupunguza moshi zikitumika siku 30 baadaye (utafiti wa kufuatilia)",
      "Nyumba zinazoripoti kwamba hakuna jiko la mkaa linalotumika katika vyumba vilivyofungwa na mafuta ya taa yanahifadhiwa kwa usalama",
      "Nyumba au biashara za chakula zinazohamia jiko au nishati safi zaidi ndani ya miezi 6",
      "Wanafunzi wanaoripoti kutumia pesa au muda mdogo zaidi kwa nishati ya kupikia"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya kawaida yenye kikokotoo, au karatasi na kalamu",
      "Bei za mahali hapo za majiko na nishati, zilizokusanywa na mwanafunzi au mwezeshaji",
      "Ikiwezekana, jiko bora, jiko la gesi au kikapu cha kipika-joto cha kuonyesha kikundi",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Washirika wazuri: vikundi vya wanawake, vikundi vya akiba, shule, kliniki, wahudumu wa afya wa jamii na biashara za mahali hapo za upishi safi (usitangaze chapa moja).",
      "Kusanya bei halisi za mahali hapo za majiko na nishati kabla ya kipindi; kozi inatumia namba za mfano za kubuni tu.",
      "Maonyesho nje yanafanya kazi vizuri: linganisha moshi wa kuni mbichi na kavu, au wa mafiga matatu na jiko bora.",
      "Usalama wa gesi: onyesha jinsi ya kufunga vali na kukagua mpira wa gesi; usijaribu kamwe kutafuta gesi inayovuja kwa moto. Usiwaruhusu wanafunzi kufanya kazi kwenye nyaya za umeme au mabomba ya gesi.",
      "Kuungua na sumu: fundisha huduma ya kwanza kutoka WHO na uwapeleke wanafunzi kliniki; usitoe ushauri wa matibabu.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
