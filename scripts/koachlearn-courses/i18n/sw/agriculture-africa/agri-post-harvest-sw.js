"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-post-harvest.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_LOSS = { name: "FAO: Kupunguza upotevu na upotezaji wa chakula (karibu asilimia 14 ya chakula hupotea kati ya mavuno na duka, 2019)", url: "https://www.fao.org/newsroom/detail/A-major-step-forward-in-reducing-food-loss-and-waste-is-critical-to-achieve-the-SDGs/en" };
const FAO_AFLA = { name: "FAO: Kuzuia na kudhibiti sumukuvu katika nafaka: kudhibiti aflatoxin katika mahindi", url: "https://www.fao.org/4/x5036e/x5036e0s.htm" };
const FAO_DRYER = { name: "FAO TECA/STI: Mahindi yaliyokaushwa vizuri yanamfaa kila mtu: kikaushio cha jua cha mahindi", url: "https://sti-portal.fao.org/innovations/well-dried-maize-benefits-all-solar-maize-dryer" };
const IITA_AFLASAFE = { name: "IITA: Aflasafe, bidhaa za udhibiti wa kibiolojia wa aflatoxin kwa wakulima wa Afrika", url: "https://www.iita.org/news-item/iita-moves-to-commercialize-and-disseminate-aflatoxin-biocontrol-products-to-africas-farmers/" };
const PICS = { name: "Chuo Kikuu cha Purdue: mifuko isiyopitisha hewa ya Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const FAO_ZECC = { name: "FAO TECA/STI: Chumba cha kupoza mboga kisichotumia nishati (Zero Energy Cooling Chamber)", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-post-harvest-sw",
  lang: "sw",
  translationOf: "agri-post-harvest",
  category: "Agriculture (Africa)",
  name: "Utunzaji na Uhifadhi wa Mazao Baada ya Mavuno",
  skills: "Kutambua mahali mavuno yako yanapopotea, Kuvuna kwa wakati unaofaa, Kukausha nafaka hadi unyevu salama, Kuzuia aflatoxin, Kuhifadhi nafaka katika mifuko isiyopitisha hewa, Kupoza, kupanga madaraja na kufunga mazao mabichi",
  outcome: "kutekeleza mpango wa baada ya mavuno kwa zao moja: kulivuna kwa wakati unaofaa, kukausha nafaka hadi unyevu salama, kuzuia aflatoxin, kuihifadhi katika mifuko isiyopitisha hewa, na kuweka mazao mabichi yakiwa baridi, yamepangwa kwa madaraja na yamefungwa vizuri kwa ajili ya mnunuzi.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wanaokua, wafanyakazi wa mashamba, wafanyabiashara na vijana wanaofanya kazi katika biashara ya kilimo nchini Kenya, Nigeria, Ghana na kote Afrika. Mavuno mazuri bado yanaweza kupoteza thamani kubwa baada ya kutoka shambani: nafaka inaota ukungu au dumuzi wanaila, nyanya zinapondeka, na wanunuzi wanalipa kidogo au wanaikataa.",
    "Sura ya 1 inahusu kuingiza mavuno vizuri: mahali na sababu za upotevu, kuvuna kwa wakati unaofaa, na kukausha nafaka hadi unyevu salama. Sura ya 2 inahusu kuyatunza: kuzuia aflatoxin, kuhifadhi nafaka katika mifuko isiyopitisha hewa, na kuweka mazao mabichi yakiwa baridi, yamepangwa kwa madaraja na yamefungwa vizuri.",
    "Wanunuzi na viwango vya kitaifa vina sheria zao za ubora, kwa hiyo daima muulize mnunuzi wako, chama chako cha ushirika au afisa ugani wanachohitaji. Kila somo linachukua kama dakika tano na linaisha na kazi kwenye shamba au ghala lako. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa baada ya mavuno kwa zao moja (lako mwenyewe, au mfano kama ekari 2 za mahindi Trans Nzoia, ekari 1 ya nyanya Kaduna, au kunde Tamale): lini na jinsi utakavyovuna, jinsi utakavyokausha na kukagua unyevu (kwa nafaka), jinsi utakavyozuia aflatoxin, jinsi na wapi utakavyohifadhi, na jinsi utakavyopoza, kupanga madaraja na kufunga kwa ajili ya mnunuzi wako, huku sheria za ubora za mnunuzi zikiwa zimeandikwa juu kabisa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wanaokua, wafanyakazi wa mashamba, wafanyabiashara na vijana wanaofanya kazi katika biashara ya kilimo nchini Kenya, Nigeria, Ghana na kote Afrika wanaoshughulikia nafaka, mikunde na mazao mabichi baada ya mavuno.",
    startingPoint: "Wengi wanavuna zao linapoonekana tayari, wanakausha nafaka juani juu ya chochote kilicho karibu, wanaihifadhi katika magunia, na wanabeba mazao katika magunia au mafungu. Wachache wanakagua unyevu wa nafaka, wanajua jinsi aflatoxin inavyotokea, wanatumia mifuko isiyopitisha hewa, au wanapanga madaraja na kufunga mazao kwa sheria za mnunuzi.",
    gap: "Sehemu kubwa ya mavuno mazuri inapoteza kiasi au thamani baada ya kutoka shambani: dumuzi, ukungu na panya ghalani, mazao yaliyopondeka, na nafaka inayokataliwa kwa sababu ya aflatoxin, ambayo pia inadhuru familia zinazoila. Mpango wa baada ya mavuno unahifadhi sehemu kubwa zaidi ya mavuno, unaweka chakula salama na unaleta bei bora.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno maalum linaelezwa",
      "Vifaa: simu ya kawaida; turubai, mifuko na kreti ambazo mwanafunzi tayari anazo au anaweza kuazima",
      "Wanunuzi na viwango vya kitaifa vina sheria zao za ubora: wanafunzi wanauliza mnunuzi, chama cha ushirika au afisa ugani",
      "Usalama wa chakula: kamwe usile, usiuze wala usilishe mifugo nafaka yenye ukungu; bidhaa za udhibiti wa kibiolojia zitumike tu kama zilivyoidhinishwa na kama lebo inavyosema",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi za mavuno"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa zao moja", action: "kuchora njia yake kutoka shambani hadi kwa mnunuzi na kuweka alama mahali linapopoteza kiasi au thamani", standard: "ukitaja angalau sehemu tatu za upotevu na kile kitakachozirekebisha" },
    { id: "O2", condition: "Kwa kila zao lako", action: "kutambua dalili kwamba liko tayari na kupanga siku za mavuno kwa kufuata utabiri wa hali ya hewa", standard: "ukiwa na zana, mifuko au kreti na wafanyakazi tayari kabla ya mavuno" },
    { id: "O3", condition: "Kwa nafaka iliyovunwa karibuni", action: "kuikausha haraka mbali na udongo na kukagua kwamba imefikia unyevu salama", standard: "karibu asilimia 13 hadi 14 au kikomo cha mnunuzi, ikikaguliwa kwa mita ya unyevu au jaribio la chumvi" },
    { id: "O4", condition: "Kwa mahindi, karanga au mazao mengine yaliyo hatarini", action: "kuorodhesha na kutumia hatua kuu zinazozuia aflatoxin", standard: "nafaka yenye ukungu na iliyoharibika ikiwa imeondolewa na kamwe isiliwe, isiuzwe wala isilishwe mifugo" },
    { id: "O5", condition: "Ukiwa na nafaka kavu, safi na iliyochaguliwa", action: "kujaza, kufunga na kuhifadhi mfuko usiopitisha hewa", standard: "kila mfuko wa ndani ukiwa umefungwa bila hewa kupita, na mfuko ukiwa juu ya sakafu, mbali na kuta na salama dhidi ya panya" },
    { id: "O6", condition: "Kwa mazao mabichi", action: "kuyaweka baridi, kuyapanga kwa madaraja kwa kiwango cha mnunuzi na kuyafunga yafike bila kuchubuka", standard: "katika kreti safi zenye matundu ya hewa na zilizo na lebo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuingiza mavuno vizuri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mahali mavuno yanapopotea, na kwa nini",
          minutes: 4,
          goal: "Fuata zao lako kutoka shambani hadi kwa mnunuzi na uweke alama mahali linapopoteza kiasi au thamani.",
          text: [
            "Mwaka 2019 FAO ilikadiria kwamba karibu asilimia 14 ya chakula cha dunia hupotea kati ya mavuno na duka, kabla hata hakijafika sokoni. Katika mashamba mengi ya Afrika, upotevu wa baadhi ya mazao ni mkubwa zaidi. Kila gunia linalopotea ni mbegu, mbolea na kazi iliyotupwa.",
            "Upotevu unatokea katika kila hatua: kuvuna mapema mno au kuchelewa mno, kuacha zao kwenye mvua, kushughulikia vibaya na kuchubua, joto, kukausha polepole, wadudu kama dumuzi na dumuzi mkubwa wa nafaka (larger grain borer), panya, ukungu, na kufunga vibaya kwenye barabara mbovu. Baadhi ya upotevu unaonekana (magunia machache); mwingine hauonekani (daraja la chini, bei ya chini, au nafaka isiyo salama kuliwa).",
            "Hatua ya kwanza ni kutafuta upotevu wako mkubwa zaidi. Fuata zao lako kutoka shambani hadi kwa mnunuzi na uliza katika kila hatua: nini kinaharibika hapa, kiasi gani kinapotea, na kurekebisha kutagharimu kiasi gani?"
          ],
          steps: ["Orodhesha kila hatua ambayo zao lako linapitia: kuvuna, kubeba, kukausha, kupura au kupukuchua, kuhifadhi, kufunga, kusafirisha, kuuza.", "Katika kila hatua, andika kinachoharibika (mvua, kuchubuka, wadudu, panya, ukungu).", "Kadiria kiasi kinachopotea au kiasi ambacho bei inashuka.", "Zungushia duara upotevu mkubwa zaidi miwili; hapo ndipo unapoanzia."],
          words: [["Upotevu wa baada ya mavuno", "chakula au thamani inayopotea kati ya mavuno na mauzo."], ["Dumuzi mkubwa wa nafaka (larger grain borer)", "mbawakawa anayetoboa mahindi na mihogo iliyohifadhiwa na kuigeuza kuwa unga."], ["Daraja", "kundi la ubora, kama daraja la kwanza au la pili, linaloamua bei."]],
          slides: [
            { title: "Ukubwa wa upotevu (FAO)", bullets: ["Karibu asilimia 14 ya chakula hupotea kati ya mavuno na duka", "Mara nyingi zaidi kwa baadhi ya mazao katika mashamba ya Afrika", "Kila gunia linalopotea ni mbegu, mbolea na kazi iliyopotea"] },
            { title: "Kwa nini unatokea", bullets: ["Kuvuna wakati usiofaa, mvua, kukausha polepole", "Kuchubuka, joto, usafiri mbaya", "Dumuzi, dumuzi wakubwa wa nafaka, panya, ukungu"] },
            { title: "Tafuta upotevu wako mkubwa zaidi", bullets: ["Fuata zao kutoka shambani hadi kwa mnunuzi", "Uliza nini kinaharibika katika kila hatua", "Anza na miwili mikubwa zaidi"] }
          ],
          sources: [FAO_LOSS],
          tryIt: "Chora njia ya zao lako kutoka shambani hadi kwa mnunuzi kama mstari wa visanduku. Chini ya kila kisanduku, andika kinachoharibika hapo na takriban kiasi kinachopotea. Zungushia duara upotevu mkubwa zaidi miwili.",
          youCanNow: "kuchora mahali mavuno yako yanapopoteza kiasi au thamani na kuchagua upotevu wa kurekebisha kwanza.",
          quickCheck: [
            { objective: "O1", q: "Ni mdudu gani aliyetajwa kama mdudu wa ghalani anayekula nafaka?", options: ["Nyuki wa asali", "Kombamwiko mwekundu wa bustani (ladybird)", "Dumuzi mkubwa wa nafaka", "Kipepeo"], answer: 2, why: "Dumuzi na dumuzi mkubwa wa nafaka ni wadudu wa ghalani wanaosababisha upotevu wa nafaka." },
            { objective: "O1", q: "Sokoni, nyanya zako nyingi zinakataliwa kwa sababu zimepondeka. Unafanya nini?", options: ["Fuata zao nyuma, tafuta hatua ambapo zinapondeka na kurekebisha kutagharimu kiasi gani", "Uza kwa mnunuzi mwingine wakati ujao bila kubadilisha chochote", "Panda zao jingine", "Mlaumu mnunuzi"], answer: 0, why: "Kufuata zao hatua kwa hatua kunaonyesha mahali upotevu unapotokea na nini cha kurekebisha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuvuna kwa wakati unaofaa",
          minutes: 5,
          goal: "Tambua dalili kwamba kila zao lako liko tayari na upange siku za mavuno.",
          text: [
            "Kuvuna mapema mno kunaleta nafaka ndogo na nyepesi au mazao yasiyoiva vizuri; kuchelewa mno kunakaribisha uharibifu wa mvua, wadudu, ndege, wizi na kuoza. Jifunze dalili za kila zao.",
            "Mahindi yamekomaa maganda yanapokauka na punje zinapokuwa ngumu zikiwa na tabaka jeusi chini yake; kisha yanaweza kuendelea kukauka shinani kwa muda mfupi ikiwa hali ya hewa ni kavu, lakini usiyaache nje wakati wa mvua. Maharagwe na kunde ziko tayari maganda mengi yanapokauka na kutoa sauti yakitikiswa. Mtama uko tayari punje zinapokuwa ngumu na haziwezi kubonyezwa kwa ukucha. Nyanya zinachumwa katika hatua ya rangi anayotaka mnunuzi wako (mara nyingi zikianza tu kubadilika rangi kwa masoko ya mbali). Kahawa: chuma tu cheri nyekundu zilizoiva. Chai: chuma chipukizi changa, kwa kawaida majani mawili na kitumba. Mizizi ya mihogo inaharibika ndani ya siku chache baada ya kuvunwa, kwa hiyo ng'oa tu kile unachoweza kuuza au kusindika haraka.",
            "Panga siku za mavuno kwa kufuata utabiri wa hali ya hewa. Vuna mazao mabichi asubuhi na mapema wakati wa baridi, yaweke kivulini, na uwe na mifuko, kreti, turubai na wafanyakazi tayari kabla ya kuanza."
          ],
          steps: ["Andika dalili za kuwa tayari kwa kila zao unalolima.", "Tembea shambani na ukague dalili kila wiki mavuno yanapokaribia.", "Angalia utabiri na uchague siku kavu kwa nafaka.", "Kuwa na turubai, mifuko au kreti na wafanyakazi tayari.", "Vuna mazao mabichi asubuhi yenye baridi na uyaweke kivulini."],
          words: [["Ukomavu", "hatua ambapo zao limekua kikamilifu na liko tayari kuvunwa."], ["Tabaka jeusi", "doa jeusi chini ya punje ya mahindi linaloonyesha kwamba imekomaa."], ["Majani mawili na kitumba", "chipukizi changa cha chai ambacho wachumaji huchuma kwa chai bora."]],
          slides: [
            { title: "Mapema mno au kuchelewa mno, zote zinakugharimu", bullets: ["Mapema mno: ndogo, nyepesi, haziivi vizuri", "Kuchelewa mno: mvua, wadudu, ndege, wizi, kuoza"] },
            { title: "Dalili za kuwa tayari", bullets: ["Mahindi: maganda makavu, punje ngumu, tabaka jeusi", "Maharagwe: maganda mengi makavu yanatoa sauti", "Kahawa: cheri nyekundu zilizoiva tu; chai: majani mawili na kitumba"] },
            { title: "Mazao mabichi", bullets: ["Nyanya: hatua ya rangi anayotaka mnunuzi", "Mihogo: ng'oa tu unachoweza kuuza karibuni", "Vuna asubuhi yenye baridi; weka kivulini"] },
            { title: "Kuwa tayari", bullets: ["Angalia utabiri; chagua siku kavu", "Turubai, mifuko, kreti na wafanyakazi kwanza"] }
          ],
          tryIt: "Kwa mazao mawili unayolima, andika dalili za kuwa tayari na tarehe unayotarajia kuvuna. Muulize mnunuzi wako hatua au ubora anaotaka na uandike. Weka kikumbusho kwenye simu cha kuangalia utabiri wiki moja kabla.",
          youCanNow: "kujua mazao yako yanapokuwa tayari na kupanga siku za mavuno zinazolinda ubora.",
          quickCheck: [
            { objective: "O2", q: "Unajuaje kwamba mtama uko tayari kuvunwa?", options: ["Majani bado ni mabichi", "Vichwa ni vidogo", "Punje ni laini na zina maziwa", "Punje ni ngumu na haziwezi kubonyezwa kwa ukucha"], answer: 3, why: "Mtama uko tayari punje zinapokuwa ngumu na haziwezi kubonyezwa kwa ukucha." },
            { objective: "O2", q: "Mahindi yako yamekomaa na utabiri unasema mvua kubwa wiki ijayo. Unafanya nini?", options: ["Yaache shinani wakati wote wa mvua", "Vuna kabla ya mvua, ukiwa na turubai na mifuko tayari", "Vuna tu baada ya mvua kuisha", "Yakate na uyaache chini"], answer: 1, why: "Panga mavuno kwa kufuata utabiri na usiache mahindi yaliyokomaa nje wakati wa mvua." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kukausha nafaka hadi unyevu salama",
          minutes: 6,
          goal: "Kausha nafaka haraka na ukague kwamba imefikia unyevu salama wa kuhifadhi.",
          text: [
            "Nafaka iliyovunwa karibuni ina maji mengi. Nafaka yenye unyevu inapata joto, inaota ukungu na inavutia wadudu. Mwongozo wa FAO kuhusu mahindi unasema kwamba kuyakausha hadi unyevu salama wa karibu asilimia 13 hadi 14 kabla ukungu haujaota ndiyo njia ya uhakika zaidi ya kuzuia aflatoxin, na kwamba kukausha kunapaswa kuwa haraka: nafaka inayoachwa na unyevu kwa zaidi ya kama siku mbili iko katika hatari kubwa zaidi. Mnunuzi wako, chama cha ushirika au kiwango cha kitaifa kinaweza kuweka kiwango chake cha juu, kwa hiyo uliza.",
            "Kausha juu ya turubai safi, kichanja kilichoinuliwa, mkeka au sakafu ya saruji, kamwe si juu ya udongo mtupu. Tandaza nafaka kwa tabaka jembamba, igeuze mara kadhaa kwa siku, na uifunike au uiingize ndani kabla ya mvua na usiku. Nafaka iliyopukuchuliwa inakauka haraka kuliko iliyo kwenye gunzi. Vikaushio vya jua, fremu rahisi zenye kifuniko cha plastiki angavu, vinakausha haraka zaidi na vinazuia mvua, vumbi na wanyama.",
            "Kagua unyevu kabla ya kuhifadhi. Kifaa bora ni mita ya unyevu; vyama vya ushirika, wanunuzi, ofisi za ugani na maghala mara nyingi wanazo. Ukaguzi wa takriban nyumbani ni jaribio la chumvi: weka kiganja cha chumvi kavu na nafaka kidogo katika chupa safi na kavu ya kioo, tikisa kwa dakika mbili hadi tatu, na chumvi ikinata kwenye kioo, nafaka bado ina unyevu mwingi. Nafaka inayofaulu bado inaweza kuwa na unyevu kidogo zaidi ya inavyofaa, kwa hiyo thibitisha kwa mita unapoweza."
          ],
          steps: ["Vuna wakati wa hali ya hewa kavu.", "Tandaza nafaka kwa tabaka jembamba juu ya turubai, mkeka, kichanja au saruji, kamwe si udongo mtupu.", "Igeuze mara kadhaa kwa siku; ifunike dhidi ya mvua na usiku.", "Kausha haraka: lenga kufikia unyevu salama ndani ya kama siku mbili baada ya kupukuchua.", "Fanya jaribio la chumvi; thibitisha kwa mita ya unyevu kwenye chama chako cha ushirika au kwa mnunuzi.", "Hifadhi tu ikiwa kavu."],
          words: [["Kiwango cha unyevu", "kiasi cha maji kilicho ndani ya nafaka, kama asilimia ya uzito wake."], ["Mita ya unyevu", "kifaa kinachopima unyevu wa nafaka."], ["Jaribio la chumvi", "ukaguzi wa takriban nyumbani: chumvi kavu inanata kwenye chupa ikiwa nafaka ina unyevu mwingi."], ["Kikaushio cha jua", "fremu yenye kifuniko angavu inayotumia jua kukausha mazao haraka na kwa usafi zaidi."]],
          slides: [
            { title: "Kwa nini kukausha", bullets: ["Nafaka yenye unyevu inapata joto, ukungu na kuvutia wadudu", "FAO: kausha mahindi hadi karibu asilimia 13 hadi 14", "Haraka: ndani ya kama siku mbili"] },
            { title: "Jinsi ya kukausha", bullets: ["Turubai, mkeka, kichanja au saruji, kamwe si udongo mtupu", "Tabaka jembamba, geuza mara kwa mara", "Funika kabla ya mvua na usiku"] },
            { title: "Kagua kabla ya kuhifadhi", bullets: ["Bora: mita ya unyevu (chama cha ushirika, mnunuzi, ugani)", "Ukaguzi wa takriban: jaribio la chumvi katika chupa kavu", "Chumvi ikinata = unyevu mwingi; endelea kukausha"] }
          ],
          sources: [FAO_AFLA, FAO_DRYER],
          tryIt: "Fanya jaribio la chumvi kwa kiganja cha nafaka yako (au ya jirani): chupa kavu, chumvi kavu, tikisa kwa dakika mbili hadi tatu, angalia kioo. Kisha tafuta nani karibu nawe ana mita ya unyevu, na kiwango cha juu cha unyevu anachokubali mnunuzi.",
          youCanNow: "kukausha nafaka haraka juu ya sehemu safi na kukagua kwamba imefikia unyevu salama kabla ya kuhifadhi.",
          quickCheck: [
            { objective: "O3", q: "Kikaushio cha jua ni nini?", options: ["Oveni ya umeme", "Fremu yenye kifuniko cha plastiki angavu inayokausha nafaka haraka na kuzuia mvua na vumbi", "Silo ya chuma ya kuhifadhia", "Mita ya unyevu"], answer: 1, why: "Vikaushio vya jua ni fremu rahisi zenye kifuniko angavu zinazokausha nafaka haraka na kuilinda." },
            { objective: "O3", q: "Mawingu ya mvua yanatanda mchana wakati mahindi yako yaliyopukuchuliwa yanakauka nje. Unafanya nini?", options: ["Yaache; yatakauka baadaye", "Yatandaze kwa tabaka jembamba zaidi", "Mwaga maji kutoka kwayo baada ya mvua", "Yafunike au uyaingize ndani kabla ya mvua"], answer: 3, why: "Funika nafaka au uiingize ndani kabla ya mvua na usiku, ili isipate unyevu tena." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuingiza mavuno vizuri",
        questions: [
          { objective: "O1", q: "FAO ilikadiria kwamba takriban sehemu gani ya chakula hupotea kati ya mavuno na duka (2019)?", options: ["Asilimia 1", "Asilimia 50", "Karibu asilimia 14", "Hakuna"], answer: 2, why: "Makadirio ya FAO ya 2019 yalikuwa karibu asilimia 14 hupotea kati ya mavuno na uuzaji wa rejareja." },
          { objective: "O2", q: "Ipi ni dalili kwamba punje za mahindi zimekomaa?", options: ["Maganda mabichi yenye unyevu", "Punje laini zenye maziwa", "Nywele za mahindi ndiyo zinaanza kutokea", "Tabaka jeusi chini ya punje"], answer: 3, why: "Tabaka jeusi linaonyesha kwamba punje imefikia ukomavu." },
          { objective: "O2", q: "Una ekari 2 za mihogo na unaweza kuuza robo tu wiki hii. Unafanya nini?", options: ["Ng'oa tu unachoweza kuuza au kusindika karibuni", "Ng'oa yote mara moja", "Ng'oa yote na uiache juani", "Usivune mihogo kamwe"], answer: 0, why: "Mizizi ya mihogo inaharibika ndani ya siku chache baada ya kuvunwa." },
          { objective: "O3", q: "Unapaswa kukausha mahindi wapi?", options: ["Juu ya udongo mtupu", "Juu ya turubai safi, mkeka, kichanja au sakafu ya saruji", "Katika gunia lililofungwa kwenye mvua", "Katika fungu shambani"], answer: 1, why: "Sehemu safi, iliyoinuliwa au iliyofunikwa inaweka nafaka safi na kuikausha haraka." },
          { objective: "O3", q: "Katika jaribio la chumvi, chumvi inanata kwenye kioo. Inamaanisha nini?", options: ["Nafaka ni kavu ya kutosha kuhifadhiwa", "Nafaka ina aflatoxin", "Nafaka bado ina unyevu mwingi; endelea kukausha", "Chumvi ni mbaya"], answer: 2, why: "Chumvi inayonata kwenye kioo inaonyesha nafaka bado ina unyevu mwingi." }
        ]
      }
    },
    {
      name: "Sura 2: Kuweka mavuno salama na yanayouzika",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aflatoxin: ni nini na jinsi ya kuizuia",
          minutes: 6,
          goal: "Tumia hatua kuu zinazozuia aflatoxin katika mahindi na karanga zako.",
          text: [
            "Aflatoxin ni sumu (sumukuvu) inayotengenezwa na aina fulani za ukungu (Aspergillus) zinazoota kwenye mahindi, karanga, mtama na mazao mengine, shambani na ghalani. Mara nyingi huwezi kuiona, kuinusa wala kuionja. Kuila kwa muda mrefu kunadhuru ini na kunahusishwa na saratani ya ini na kudumaa kwa watoto; kiasi kikubwa kinaweza kuua. Pia inapita kutoka kwenye chakula cha mifugo hadi kwenye maziwa na mayai. Wanunuzi na mamlaka za kitaifa za viwango vya chakula wanaipima na kukataa nafaka iliyozidi kikomo cha kisheria.",
            "Kuzuia kunaanzia shambani: mazao yenye afya, kupanda kwa wakati, na kudhibiti wadudu wanaoharibu magunzi na maganda. Vuna kwa wakati, usiache zao likiwa chini, na likaushe haraka hadi unyevu salama. FAO inaeleza kwamba kiwango cha aflatoxin katika mahindi yaliyohifadhiwa kinapanda pamoja na uharibifu wa dumuzi, kwa hiyo weka ghala safi na zuia wadudu.",
            "Chagua kabla ya kuhifadhi: ondoa punje na magunzi yenye ukungu, yaliyovunjika, yaliyobadilika rangi, yaliyoharibiwa na wadudu na yaliyonyauka. Kamwe usile, usiuze wala usilishe mifugo nafaka yenye ukungu. Bidhaa za udhibiti wa kibiolojia kama Aflasafe, zilizotengenezwa na IITA na kusajiliwa katika nchi zikiwemo Kenya, Nigeria na Ghana, zinanyunyizwa shambani kabla ya kutoa maua ili kufukuza ukungu wenye sumu; muulize afisa ugani au muuzaji wa pembejeo kama kuna iliyoidhinishwa kwa zao na eneo lako, na ufuate lebo."
          ],
          steps: ["Dhibiti wadudu wanaoharibu magunzi na maganda shambani.", "Vuna kwa wakati; usiache zao likiwa chini.", "Kausha haraka hadi unyevu salama.", "Chagua na uondoe nafaka yenye ukungu, iliyovunjika, iliyobadilika rangi na iliyoharibiwa na wadudu.", "Hifadhi katika ghala safi, kavu lisiloingiwa na wadudu.", "Uliza ugani kuhusu bidhaa ya udhibiti wa kibiolojia iliyoidhinishwa kwa eneo lako."],
          words: [["Aflatoxin", "sumu inayotengenezwa na baadhi ya ukungu kwenye mazao kama mahindi na karanga."], ["Aspergillus", "kundi la ukungu linaloweza kutengeneza aflatoxin."], ["Udhibiti wa kibiolojia", "kutumia kiumbe hai kisicho na madhara kufukuza kiumbe chenye madhara."], ["Kuchagua", "kuokota nafaka au mazao mabaya kwa mkono au kwa mashine."]],
          slides: [
            { title: "Aflatoxin ni nini", bullets: ["Sumu inayotengenezwa na baadhi ya ukungu", "Mara nyingi haionekani: haina harufu, haina ladha", "Inadhuru ini; inahusishwa na saratani na kudumaa"] },
            { title: "Izuie katika kila hatua", bullets: ["Zao lenye afya; dhibiti wadudu wa magunzi na maganda", "Vuna kwa wakati; kausha haraka hadi unyevu salama", "Ghala safi, kavu, lisiloingiwa na wadudu"] },
            { title: "Chagua, na usitumie kamwe nafaka yenye ukungu", bullets: ["Ondoa punje zenye ukungu, zilizovunjika, zilizobadilika rangi", "Kamwe usile, usiuze wala usilishe mifugo nafaka yenye ukungu", "Inapita kwenye maziwa na mayai"] },
            { title: "Udhibiti wa kibiolojia", bullets: ["Aflasafe (IITA): imesajiliwa Kenya, Nigeria, Ghana", "Inanyunyizwa shambani kabla ya kutoa maua", "Uliza ugani; fuata lebo"] }
          ],
          sources: [FAO_AFLA, IITA_AFLASAFE],
          tryIt: "Chukua sampuli ya nafaka au karanga zilizohifadhiwa na uzichague juu ya sinia: tenganisha punje zenye ukungu, zilizovunjika, zilizobadilika rangi na zilizoharibiwa na wadudu. Zipime au zihesabu na uandike sehemu uliyoondoa. Andika hatua mbili utakazobadilisha msimu ujao ili kuipunguza.",
          youCanNow: "kueleza kwa nini aflatoxin ni hatari na kutumia hatua za shambani, za kukausha, za kuchagua na za kuhifadhi kuizuia.",
          quickCheck: [
            { objective: "O4", q: "Ukungu wa aflatoxin unaweza kuota kwenye mazao gani?", options: ["Mahindi, karanga na mtama", "Nyanya tu", "Chai tu", "Majani ya mihogo tu"], answer: 0, why: "Ukungu wa Aspergillus unaota kwenye mahindi, karanga, mtama na mazao mengine." },
            { objective: "O4", q: "Unakuta dumuzi katika mahindi yako yaliyohifadhiwa. Unafanya nini?", options: ["Wapuuze; hawana madhara", "Walishe kuku nafaka iliyoharibika", "Ondoa nafaka iliyoharibika na usafishe ghala kuzuia wadudu, kwa sababu uharibifu wa dumuzi unaongeza aflatoxin", "Changanya nafaka iliyoharibika na nafaka nzuri"], answer: 2, why: "Kiwango cha aflatoxin kinapanda pamoja na uharibifu wa dumuzi; nafaka iliyoharibika inaondolewa na kamwe hailishwi mifugo wala kuuzwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuhifadhi nafaka katika mifuko isiyopitisha hewa",
          minutes: 5,
          goal: "Jaza, funga na uhifadhi mfuko usiopitisha hewa ili wadudu wafe bila kemikali.",
          text: [
            "Hermetic maana yake ni isiyopitisha hewa. Mfuko usiopitisha hewa, kama mfuko wa PICS uliotengenezwa katika Chuo Kikuu cha Purdue, una mifuko miwili ya ndani ya plastiki ndani ya gunia la nje lililofumwa. Ukishafungwa, wadudu na nafaka wanamaliza oksijeni iliyo ndani na wadudu wanakufa au wanaacha kuzaliana, bila dawa ya kuua wadudu. Purdue inataja mahindi, mtama, maharagwe, kunde, karanga, mchele na mazao mengine kuwa yanafaa kwa mifuko hii.",
            "Mfuko unafanya kazi tu ikiwa nafaka ni kavu na mfuko haupitishi hewa. Hifadhi tu nafaka kavu, safi na iliyochaguliwa. Jaza mfuko wa ndani, toa hewa nyingi kadiri unavyoweza, sokota shingo yake na uifunge kwa nguvu; kisha fanya vivyo hivyo kwa mfuko wa pili wa ndani na mwisho kwa gunia la nje. Kagua kama kuna matundu kabla ya kutumia; tundu dogo linaingiza hewa na mfuko unaacha kufanya kazi.",
            "Weka mifuko juu ya sakafu kwenye chaga au mbao, mbali na kuta, katika ghala safi, kavu na lenye kivuli, na uilinde dhidi ya panya, wanaotafuna matundu. Usiifungue mara kwa mara: kila unapoifungua unaingiza hewa mpya. Mifuko ambayo bado iko mizima inaweza kutumika tena msimu ujao. Njia nyingine nzuri ni silo za chuma na vihenge safi, vilivyoinuliwa na vyenye hewa ya kutosha kwa magunzi."
          ],
          steps: ["Hakikisha nafaka ni kavu, safi na imechaguliwa.", "Kagua mifuko ya ndani kama ina matundu.", "Jaza mfuko wa ndani, toa hewa, sokota na ufunge kwa nguvu.", "Funga mfuko wa pili wa ndani, kisha gunia la nje, kwa njia ileile.", "Hifadhi juu ya chaga, mbali na kuta, katika ghala kavu, lenye kivuli na lisiloingiwa na panya.", "Fungua tu inapohitajika; tumia tena mifuko iliyo mizima."],
          words: [["Hermetic (isiyopitisha hewa)", "hewa haiwezi kuingia wala kutoka."], ["Mfuko wa ndani (liner)", "mfuko wa plastiki ulio ndani ya gunia la nje."], ["Chaga (pallet)", "jukwaa la mbao linaloweka mifuko juu ya sakafu."], ["Silo ya chuma", "pipa la chuma lililofungwa la kuhifadhia nafaka."]],
          slides: [
            { title: "Jinsi mifuko isiyopitisha hewa inavyofanya kazi", bullets: ["Mifuko miwili ya plastiki ndani ya gunia lililofumwa (PICS)", "Ikifungwa: oksijeni inaisha, wadudu wanakufa", "Hakuna haja ya dawa ya kuua wadudu"] },
            { title: "Ifunge vizuri", bullets: ["Nafaka kavu, safi na iliyochaguliwa tu", "Toa hewa; sokota na ufunge kila tabaka", "Kagua matundu katika mifuko ya ndani kwanza"] },
            { title: "Ihifadhi vizuri", bullets: ["Juu ya chaga, mbali na kuta", "Ghala kavu, lenye kivuli, lisiloingiwa na panya", "Fungua mara chache; tumia tena mifuko mizima"] }
          ],
          sources: [PICS],
          tryIt: "Angalia ghala lako. Andika mabadiliko matatu yatakayolinda mifuko (chaga, nafasi kutoka kwenye kuta, kuzuia panya, kivuli). Ukiweza, nunua mfuko mmoja usiopitisha hewa kwa muuzaji wa pembejeo na ujizoeze kufunga kila tabaka kwa nafaka kavu.",
          youCanNow: "kufunga na kuhifadhi nafaka katika mifuko isiyopitisha hewa ili ikae bila kemikali.",
          quickCheck: [
            { objective: "O5", q: "Nini kiko ndani ya gunia la nje lililofumwa la mfuko wa PICS?", options: ["Ganda la chuma", "Unga wa dawa ya kuua wadudu", "Mifuko miwili ya ndani ya plastiki", "Hakuna kitu"], answer: 2, why: "Mfuko wa PICS una mifuko miwili ya ndani ya plastiki ndani ya gunia la nje lililofumwa." },
            { objective: "O5", q: "Umejaza na kufunga mfuko wa kwanza wa ndani. Unafanya nini baadaye?", options: ["Toa hewa, sokota na ufunge mfuko wa pili wa ndani, kisha ufunge gunia la nje", "Acha mfuko wa pili wa ndani wazi ili hewa iingie", "Kata tundu ili kukagua nafaka", "Uhifadhi juani"], answer: 0, why: "Kila mfuko wa ndani na gunia la nje vinafungwa kwa nguvu ili mfuko usipitishe hewa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuweka mazao baridi, kupanga madaraja na kufunga",
          minutes: 5,
          goal: "Weka mazao mabichi yakiwa baridi, yapange kwa madaraja kwa kiwango cha mnunuzi na uyafunge yafike bila kuchubuka.",
          text: [
            "Mazao mabichi kama nyanya, sukuma wiki, maembe na maparachichi yanaendelea kuishi na kupumua baada ya kuvunwa. Joto linaharakisha hili, kwa hiyo yanaiva, yananyauka na kuoza haraka zaidi. Vuna asubuhi yenye baridi, weka mazao kivulini wakati wote, na uyafikishe kwa mnunuzi haraka.",
            "Bila umeme, kipoza cha mvuke kinasaidia. Chumba cha Kupoza Kisichotumia Nishati (Zero Energy Cooling Chamber) kilichoorodheshwa na FAO ni ukuta wa matofali maradufu wenye mchanga wenye maji katikati ya kuta na kifuniko chenye maji juu; maji yanapokauka kuwa mvuke yanapoza ndani na kuweka hewa yenye unyevu ili mazao yasinyauke. Kinafanya kazi vizuri zaidi mahali pakavu na penye joto. Vipoza vya vyungu vya udongo vinafanya kazi kwa njia ileile kwa kiwango kidogo.",
            "Kupanga madaraja maana yake ni kupanga mazao katika makundi kwa ukubwa, kuiva na ubora, na kuondoa yaliyoharibika ili yasiharibu mengine. Wanunuzi wanalipa zaidi kwa mazao yanayolingana, safi na yaliyopangwa kwa madaraja. Funga katika kreti safi, imara zenye matundu ya hewa badala ya magunia kwa mazao laini, usijaze kupita kiasi, na weka lebo kwenye kila kreti yenye daraja, tarehe na jina lako. Picha ya simu ya kila kundi lililopangwa inasaidia kumaliza mabishano na wanunuzi."
          ],
          steps: ["Muulize mnunuzi madaraja yake: ukubwa, kuiva, ubora.", "Vuna asubuhi yenye baridi na weka mazao kivulini.", "Panga kwa madaraja; ondoa yaliyoharibika.", "Tumia kipoza cha mvuke ikiwa lazima uyaweke mazao kwa muda.", "Funga katika kreti safi zenye matundu ya hewa; usijaze kupita kiasi.", "Weka lebo kwenye kreti yenye daraja, tarehe na jina; piga picha."],
          words: [["Kipoza cha mvuke", "chumba kinachopozwa na maji yanayokauka kutoka kwenye kuta, mchanga au kitambaa chenye maji."], ["Kupanga madaraja", "kupanga mazao katika makundi ya ubora."], ["Kreti yenye matundu ya hewa", "sanduku lenye matundu linaloruhusu hewa kupita kuzunguka mazao."]],
          slides: [
            { title: "Joto ni adui", bullets: ["Mazao yanaendelea kupumua baada ya mavuno", "Vuna asubuhi yenye baridi", "Kivulini wakati wote; uza haraka"] },
            { title: "Kupoza bila umeme (FAO)", bullets: ["Zero Energy Cooling Chamber: mchanga wenye maji kati ya kuta za matofali", "Ndani ni baridi na kuna unyevu", "Bora mahali pakavu na penye joto"] },
            { title: "Panga madaraja na funga", bullets: ["Panga kwa ukubwa, kuiva na ubora", "Kreti safi zenye matundu ya hewa, si magunia", "Lebo ya daraja, tarehe, jina; piga picha"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa baada ya mavuno kwa zao moja. Weka sheria za ubora za mnunuzi juu kabisa, kisha wakati wa mavuno, kukausha na kukagua unyevu (kwa nafaka), hatua za aflatoxin, uhifadhi, na jinsi utakavyopoza, kupanga madaraja na kufunga.",
          youCanNow: "kuweka mazao mabichi yakiwa baridi, kuyapanga kwa madaraja na kuyafunga kwa kiwango cha mnunuzi, na kutekeleza mpango kamili wa baada ya mavuno kwa zao moja.",
          quickCheck: [
            { objective: "O6", q: "Zero Energy Cooling Chamber inafanya kazi vizuri zaidi wapi?", options: ["Mahali pa baridi na penye unyevu", "Mahali pakavu na penye joto", "Ndani ya friji tu", "Usiku tu"], answer: 1, why: "Vipoza vya mvuke vinafanya kazi vizuri zaidi mahali pakavu na penye joto, ambapo maji yanakauka haraka." },
            { objective: "O6", q: "Mnunuzi anasema kreti zako zilikuwa za daraja lisilo sahihi. Nini kinasaidia kumaliza mabishano?", options: ["Kupiga kelele", "Kushusha bei yako mara moja", "Kurudisha kreti nyumbani", "Lebo zenye daraja na tarehe, na picha ya simu ya kila kundi lililopangwa"], answer: 3, why: "Kreti zenye lebo na picha ya kila kundi lililopangwa vinasaidia kumaliza mabishano na wanunuzi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuweka mavuno salama na yanayouzika",
        questions: [
          { objective: "O4", q: "Aflatoxin ni nini?", options: ["Mbolea", "Sumu inayotengenezwa na baadhi ya ukungu kwenye mazao", "Aina ya dumuzi", "Mfuko wa kuhifadhia"], answer: 1, why: "Aflatoxin ni sumu inayotengenezwa na aina fulani za ukungu wa Aspergillus." },
          { objective: "O4", q: "Mahindi yako yana magunzi kadhaa yenye ukungu. Unapaswa kuyafanya nini?", options: ["Walishe kuku", "Yachanganye na nafaka nzuri", "Yauze kwa bei nafuu", "Yaondoe; usiyale, usiyauze wala usiyalishe mifugo"], answer: 3, why: "Aflatoxin inadhuru watu na inapita kutoka kwenye chakula cha mifugo hadi kwenye maziwa na mayai." },
          { objective: "O5", q: "Mfuko usiopitisha hewa unaua wadudu wa ghalani jinsi gani?", options: ["Oksijeni iliyo ndani inaisha ukishafungwa", "Una sumu ndani", "Unapashwa moto", "Unaingiza hewa mpya"], answer: 0, why: "Ukifungwa kwa nguvu, oksijeni inatumika yote na wadudu wanakufa bila kemikali." },
          { objective: "O5", q: "Kwa nini uweke magunia ya nafaka juu ya chaga na mbali na kuta?", options: ["Ni kwa unadhifu tu", "Ili yawe mazito zaidi", "Kuzuia unyevu na kurahisisha kuona panya na wadudu", "Ili mifuko ipate jua"], answer: 2, why: "Chaga na nafasi kutoka kwenye kuta vinaweka mifuko kavu na rahisi kukagua." },
          { objective: "O6", q: "Njia bora ya kufunga nyanya zilizoiva kwa ajili ya soko ni ipi?", options: ["Kubanwa katika gunia", "Kumwagwa sakafuni mwa lori", "Katika mfuko wa plastiki uliofungwa juani", "Katika kreti safi zenye matundu ya hewa, bila kujazwa kupita kiasi"], answer: 3, why: "Kreti zinalinda mazao laini yasipondeke na zinaruhusu hewa kupita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utunzaji na Uhifadhi wa Mazao Baada ya Mavuno",
    questions: [
      { objective: "O1", q: "Ipi ni sababu ya kawaida ya upotevu wa baada ya mavuno?", options: ["Kukausha haraka", "Dumuzi, panya na ukungu ghalani", "Kreti safi", "Kupanga madaraja"], answer: 1, why: "Wadudu na ukungu ghalani ni sababu kubwa za upotevu." },
      { objective: "O1", q: "Kwa nini uchore njia ya zao lako kutoka shambani hadi kwa mnunuzi?", options: ["Kutafuta mahali upotevu mkubwa zaidi unapotokea", "Kufanya njia iwe ndefu zaidi", "Kumkwepa mnunuzi", "Haina faida"], answer: 0, why: "Kujua mahali upotevu unapotokea kunakuonyesha mahali pa kuanza kuchukua hatua." },
      { objective: "O1", q: "Bei ya chini kwa sababu ya ubora duni ni:", options: ["Si upotevu", "Faida", "Upotevu wa baada ya mavuno uliofichika", "Kodi"], answer: 2, why: "Kupoteza daraja au bei ni kupoteza thamani hata kama hakuna gunia lililopotea." },
      { objective: "O2", q: "Maharagwe yako tayari kuvunwa wakati:", options: ["Maua yanachanua", "Majani ni ya kijani kibichi kilichokolea", "Maganda bado ni laini", "Maganda mengi ni makavu na yanatoa sauti yakitikiswa"], answer: 3, why: "Maganda makavu yanayotoa sauti yanaonyesha maharagwe yamekomaa." },
      { objective: "O2", q: "Unapochuma kahawa, unapaswa kuchuma:", options: ["Cheri nyekundu zilizoiva tu", "Cheri mbichi za kijani", "Majani na cheri pamoja", "Cheri zilizoanguka chini"], answer: 0, why: "Cheri nyekundu zilizoiva zinatoa kahawa ya ubora bora zaidi." },
      { objective: "O2", q: "Kiwango cha kawaida cha kuchuma chai ni:", options: ["Majani ya zamani na magumu", "Majani mawili na kitumba", "Matawi mazima", "Mizizi"], answer: 1, why: "Machipukizi changa ya majani mawili na kitumba yanatoa chai nzuri." },
      { objective: "O2", q: "Kwa nini uvune mazao mabichi asubuhi yenye baridi?", options: ["Wanunuzi wanaamka baadaye", "Ni rahisi zaidi kwa gharama", "Joto linaharakisha kuiva, kunyauka na kuoza", "Umande wa asubuhi unaongeza uzito"], answer: 2, why: "Mazao yaliyo baridi yanadumu muda mrefu zaidi." },
      { objective: "O3", q: "Mwongozo wa FAO unatoa unyevu salama wa kuhifadhi mahindi wa karibu:", options: ["Asilimia 13 hadi 14", "Asilimia 25", "Asilimia 40", "Asilimia 2"], answer: 0, why: "FAO inasema kukausha hadi karibu asilimia 13 hadi 14 kabla ukungu haujaota ndiyo njia salama zaidi ya kuzuia aflatoxin." },
      { objective: "O3", q: "Mahindi yaliyopukuchuliwa karibuni yanapaswa kukaushwa kwa haraka kiasi gani?", options: ["Kwa muda wa kama wiki mbili", "Hakuna haraka", "Baada ya msimu ujao wa mvua", "Ndani ya kama siku mbili"], answer: 3, why: "FAO inaeleza kwamba aflatoxin inapanda haraka ikiwa mahindi yanabaki na unyevu kwa zaidi ya kama siku mbili." },
      { objective: "O3", q: "Njia sahihi zaidi ya kukagua unyevu wa nafaka ni:", options: ["Kuuma punje", "Mita ya unyevu", "Kuangalia rangi", "Kupima uzito wa gunia"], answer: 1, why: "Mita ya unyevu inaupima; jaribio la chumvi ni ukaguzi wa takriban tu." },
      { objective: "O3", q: "Kwa nini usikaushe nafaka juu ya udongo mtupu?", options: ["Inakauka haraka mno", "Ni kinyume cha sheria zote", "Udongo, unyevu na vijidudu vya ukungu vinaingia kwenye nafaka", "Udongo unaifanya nafaka iwe nzito na yenye thamani zaidi"], answer: 2, why: "Udongo mtupu unachafua nafaka na kuiweka na unyevu." },
      { objective: "O4", q: "Aflatoxin ni hatari kwa sehemu kwa sababu:", options: ["Ina harufu kali hivyo watu wanaiepuka", "Mara nyingi huwezi kuiona, kuinusa wala kuionja", "Inaathiri mimea tu", "Inatoweka nafaka inapopikwa"], answer: 1, why: "Kwa kawaida haionekani, kwa hiyo kuzuia na kupima ni muhimu." },
      { objective: "O4", q: "Aflatoxin katika chakula cha mifugo inaweza:", options: ["Kupita kwenye maziwa na mayai", "Kufanya wanyama wakue haraka", "Kutowadhuru wanyama hata kidogo", "Kugeuka kuwa mbolea"], answer: 0, why: "Aflatoxin kutoka kwenye chakula cha mifugo inaweza kuonekana katika maziwa na mayai." },
      { objective: "O4", q: "Aflasafe ni:", options: ["Mfuko wa kuhifadhia", "Mita ya unyevu", "Chapa ya mbegu za mahindi", "Bidhaa ya udhibiti wa kibiolojia inayofukuza ukungu wenye sumu"], answer: 3, why: "Aflasafe, kutoka IITA, inatumia ukungu usio na madhara kufukuza ukungu wenye sumu." },
      { objective: "O4", q: "Kabla ya kutumia bidhaa ya udhibiti wa kibiolojia, unapaswa:", options: ["Kuichanganya katika nafaka iliyohifadhiwa", "Kuhakikisha na ugani kwamba imeidhinishwa kwa zao na eneo lako, na kufuata lebo", "Kuongeza kiasi mara mbili", "Kuitumia baada ya mavuno tu"], answer: 1, why: "Tumia bidhaa zilizoidhinishwa tu, kama lebo inavyosema." },
      { objective: "O5", q: "Nini lazima kiwe kweli kabla nafaka haijaingia katika mfuko usiopitisha hewa?", options: ["Ni kavu, safi na imechaguliwa", "Bado ina unyevu", "Imechanganywa na dawa ya kuua wadudu", "Ina joto la jua"], answer: 0, why: "Mifuko isiyopitisha hewa haikaushi nafaka; nafaka yenye unyevu bado itaota ukungu." },
      { objective: "O5", q: "Mfuko wa ndani wa mfuko usiopitisha hewa una tundu dogo. Nini kinatokea?", options: ["Hakuna kitu", "Unafanya kazi vizuri zaidi", "Hewa inaingia na mfuko unaacha kufanya kazi", "Nafaka inakauka haraka zaidi"], answer: 2, why: "Mfuko lazima usipitishe hewa ili wadudu wakose oksijeni." },
      { objective: "O5", q: "Kwa nini usifungue mifuko isiyopitisha hewa mara kwa mara?", options: ["Inakuwa mizito zaidi", "Kila unapoifungua unaingiza hewa mpya", "Kuifungua ni kinyume cha sheria", "Wadudu wanapenda mwanga"], answer: 1, why: "Hewa mpya inarudisha oksijeni kwa wadudu." },
      { objective: "O6", q: "Zero Energy Cooling Chamber inapoza mazao kwa:", options: ["Umeme", "Barafu kutoka dukani", "Gesi", "Maji yanayokauka kutoka kwenye mchanga wenye maji kati ya kuta za matofali"], answer: 3, why: "Maji yanayokauka yanapoza chumba na kuweka hewa yenye unyevu." },
      { objective: "O6", q: "Kwa nini upange mazao kwa madaraja kabla ya kuuza?", options: ["Wanunuzi wanalipa zaidi kwa mazao yanayolingana, safi na yaliyopangwa", "Inafanya mazao yaoze haraka zaidi", "Inaficha mazao yaliyoharibika", "Ni kwa mauzo ya nje tu"], answer: 0, why: "Kupanga madaraja kunafikia viwango vya wanunuzi na kuondoa mazao yaliyoharibika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 3, 7, 9, 11, 14, 15, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uukague tena.",
    criteria: [
      { name: "Sheria za mnunuzi na wakati wa mavuno", objective: "O2", notYet: "Hakuna sheria za mnunuzi, au hakuna dalili za kuwa tayari.", meets: "Sheria za ubora za mnunuzi ziko juu kabisa, pamoja na dalili za kuwa tayari na jinsi siku za mavuno zitakavyopangwa.", exceeds: "Inaonyesha zana, mifuko au kreti na wafanyakazi wamepatikana kabla ya mavuno." },
      { name: "Kukausha na unyevu", objective: "O3", notYet: "Hakuna sehemu ya kukaushia wala ukaguzi wa unyevu (kwa nafaka).", meets: "Kukausha mbali na udongo, kugeuza na kufunika, na ukaguzi wa unyevu kwa mita au jaribio la chumvi.", exceeds: "Inataja mahali mita ya unyevu inaweza kutumika, kama chama cha ushirika au kwa mnunuzi." },
      { name: "Kuzuia aflatoxin", objective: "O4", notYet: "Hakuna hatua dhidi ya aflatoxin, au nafaka yenye ukungu inabakizwa.", meets: "Hatua za shambani, za kukausha, za kuchagua na za ghala, nafaka yenye ukungu ikiondolewa na kamwe isiliwe, isiuzwe wala isilishwe mifugo.", exceeds: "Inauliza ugani kama bidhaa iliyoidhinishwa ya udhibiti wa kibiolojia inafaa zao na eneo hilo." },
      { name: "Uhifadhi", objective: "O5", notYet: "Njia ya kuhifadhi haipo, au nafaka inahifadhiwa ikiwa na unyevu.", meets: "Nafaka kavu, safi na iliyochaguliwa katika mifuko isiyopitisha hewa au ghala jingine zuri, juu ya sakafu na salama dhidi ya panya.", exceeds: "Inaeleza mifuko itakaguliwa mara ngapi bila kuifungua." },
      { name: "Kupoza, kupanga madaraja na kufunga", objective: "O6", notYet: "Mazao mabichi katika magunia au juani, au hakuna kupanga madaraja.", meets: "Kuvuna wakati wa baridi, kivuli, kupanga madaraja kwa kiwango cha mnunuzi, na kreti safi zenye matundu ya hewa na lebo.", exceeds: "Inatumia kipoza cha mvuke au picha za kila kundi lililopangwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya mpango wa baada ya mavuno",
      "Wanafunzi wanaoripoti kutumia mifuko isiyopitisha hewa, ukaguzi wa unyevu au kreti ndani ya msimu mmoja (utafiti wa kufuatilia)",
      "Mabadiliko katika upotevu ghalani, mizigo iliyokataliwa au bei kwa gunia yanayoripotiwa na wanafunzi au kikundi chao baada ya msimu mmoja",
      "Wanafunzi wanaoanza kozi nyingine ya kilimo ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari, kalamu na simu ya kawaida",
      "Chupa safi ya kioo na chumvi kavu kwa jaribio la chumvi; mita ya unyevu ikiwa inaweza kuazimwa",
      "Mfuko usiopitisha hewa na kreti kwa maonyesho, ikiwa vinapatikana",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuandika mpango wa baada ya mavuno"
    ],
    facilitatorNotes: [
      "Katika kikundi cha wakulima au ghalani: fanyeni jaribio la awali pamoja, kisha fuateni njia ya zao moja kutoka shambani hadi kwa mnunuzi.",
      "Onyesha jaribio la chumvi na, ikiwezekana, mita ya unyevu kutoka kwa chama cha ushirika au mnunuzi.",
      "Jizoezeni kujaza na kufunga mfuko usiopitisha hewa kama kikundi.",
      "Kamwe msionje wala msilishe mifugo nafaka yenye ukungu katika maonyesho; onyesha jinsi ya kuichagua na kuiondoa kwa usalama.",
      "Pima mpango wa baada ya mavuno kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
