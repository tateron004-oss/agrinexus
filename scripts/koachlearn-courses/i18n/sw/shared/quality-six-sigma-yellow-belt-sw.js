"use strict";

// Koach Learn course (Swahili translation of shared/quality-six-sigma-yellow-belt.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const ASQ = { name: "ASQ: Certified Six Sigma Yellow Belt (masharti, mtihani na Body of Knowledge)", url: "https://www.asq.org/cert/six-sigma-yellow-belt" };
const IASSC = { name: "IASSC: Certified Lean Six Sigma Yellow Belt (ICYB)", url: "https://www.iassc.org/six-sigma-certification/yellow-belt-certification/" };

module.exports = {
  id: "quality-six-sigma-yellow-belt-sw",
  lang: "sw",
  translationOf: "quality-six-sigma-yellow-belt",
  category: "Workforce Development",
  name: "Misingi ya Ubora (Maandalizi ya Six Sigma Yellow Belt)",
  skills: "Kutumia hatua za DMAIC, Kuandika taarifa ya tatizo, Kukusanya data kwenye fomu ya kuhesabu, Kutafuta chanzo kikuu kwa Pareto na Kwa nini 5, Kuondoa upotevu na kudumisha mafanikio, Kupanga mtihani wa Yellow Belt",
  outcome: "kufanya uboreshaji mdogo wa ubora kwenye mchakato halisi kwa hatua tano za DMAIC (Define, Measure, Analyze, Improve, Control), kuuonyesha kwenye ukurasa mmoja, na kufuata mpango wenye tarehe wa kujiandaa kwa mtihani wa Six Sigma Yellow Belt.",
  about: [
    "Kila mahali pa kazi kuna michakato inayoharibika: oda zinazochelewa, ankara zenye makosa, kusubiri kwa muda mrefu, vipuri visivyotoshea. Six Sigma ni njia ya kuyarekebisha kwa ukweli badala ya kubahatisha, na Lean ni njia ya kuondoa hatua zinazopoteza muda. Waajiri katika viwanda, maghala, huduma za afya, serikali, hoteli na ofisi wanatafuta watu wanaojua misingi hii.",
    "Kozi hii ni kwa watu wanaotafuta kazi, wafanyakazi wa mstari wa mbele wanaotaka kupanda cheo, wanajeshi wastaafu wanaohamia kazi za uendeshaji za kiraia, na wamiliki wa biashara ndogo. Huhitaji hesabu zaidi ya kujumlisha, kugawanya na asilimia.",
    "Utachagua mchakato mmoja halisi kutoka kazini kwako, kwenye biashara yako au nyumbani na kuuboresha hatua kwa hatua, hatua moja ya DMAIC kwa kila somo. Kozi hii INAKUANDAA kwa mtihani wa Yellow Belt, kama ASQ Certified Six Sigma Yellow Belt au IASSC Certified Lean Six Sigma Yellow Belt; haitoi cheti. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\" na maswali mawili mafupi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza mradi wa uboreshaji wa ukurasa mmoja kwa mchakato halisi: taarifa ya tatizo na lengo, ramani rahisi ya mchakato, fomu ya kuhesabu yenye angalau data 20 na kiwango cha kasoro, chati ya Pareto na Kwa nini 5 kwa tatizo kubwa zaidi, suluhisho moja dogo ulilojaribu, na ukaguzi wa udhibiti wa kudumisha mafanikio. Ongeza mpango wenye tarehe wa kusoma na kufanya mtihani wa Yellow Belt utakaochagua, pamoja na ukurasa rasmi ulipokagua masharti yake ya sasa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wanaotafuta kazi au kupandishwa cheo katika uendeshaji, viwanda, maghala, ofisi za huduma za afya, hoteli na serikali; wanajeshi wastaafu wanaohamia kazi za kiraia za uendeshaji na ubora; wamiliki wa biashara ndogo wanaotaka makosa machache na upotevu mdogo.",
    startingPoint: "Wengi wameona matatizo yakijirudia kazini na wana mawazo ya kuyarekebisha, lakini hawajatumia njia yenye mpangilio, hawajakusanya data kwa makusudi wala kutumia maneno ya ubora kama kasoro, chanzo kikuu au DMAIC. Hesabu ni ya kiwango cha kila siku: kuhesabu, kugawanya na asilimia.",
    gap: "Ujuzi wa ubora na uboreshaji endelevu unaonekana katika matangazo mengi ya kazi, na Yellow Belt ni cheti cha kwanza kinachojulikana. Wanafunzi wanahitaji kufanya uboreshaji mdogo kwa ukweli na kuuonyesha kwenye ukurasa mmoja, ambao wanaweza kuuzungumzia kwenye usaili wa kazi, na kujua hatua halisi za kufikia mtihani unaotambulika.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la ubora linaelezwa mara ya kwanza",
      "Vifaa: karatasi na kalamu vinatosha; jedwali la bure (Google Sheets au Excel) linasaidia kwa chati",
      "Muda: masomo ya dakika 5, pamoja na kama wiki moja hadi mbili za kukusanya data kwa kazi ya mwisho",
      "Masharti, miundo na ada za mitihani hubadilika na hutofautiana kati ya taasisi zinazotoa vyeti; wanafunzi hukagua ukurasa rasmi",
      "Hakuna majina ya wateja, taarifa za wagonjwa wala siri za kampuni katika data ya mazoezi"
    ],
    prerequisites: "Hakuna. Wanafunzi wasiojiamini na asilimia wanaweza kuanza na kozi \"Hesabu za Kila Siku\", na kozi \"Excel na Majedwali\" inasaidia kwa chati."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo ya mradi wa uboreshaji", action: "kutaja hatua tano za DMAIC kwa mpangilio na kusema kinachofanyika katika kila moja", standard: "zote tano zikiwa sahihi" },
    { id: "O2", condition: "Ukipewa mchakato wenye tatizo linalojirudia", action: "kuandika taarifa ya tatizo na lengo linalopimika na kuchora ramani rahisi ya mchakato", standard: "ikiwa na nini, wapi, lini na kwa ukubwa gani, bila chanzo wala suluhisho ndani ya taarifa" },
    { id: "O3", condition: "Ukipewa mchakato wa kuuangalia kwa wiki moja hadi mbili", action: "kukusanya data kwenye fomu ya kuhesabu na kukokotoa kiwango cha kasoro", standard: "ukiwa na angalau data 20 na hesabu ikionyeshwa" },
    { id: "O4", condition: "Ukipewa data ya fomu yako ya kuhesabu", action: "kutafuta tatizo kubwa zaidi kwa chati ya Pareto na kuchimba hadi chanzo chake kikuu kwa Kwa nini 5", standard: "ili chanzo kinachopatikana kiwe kitu ambacho timu inaweza kukifanyia kazi" },
    { id: "O5", condition: "Ukipewa chanzo kikuu", action: "kuchagua suluhisho linaloondoa upotevu au makosa, kulijaribu kwa kiwango kidogo na kuweka ukaguzi wa udhibiti", standard: "ukiwa na data ya kabla na baada ya suluhisho" },
    { id: "O6", condition: "Ukitumia ukurasa rasmi wa ASQ au IASSC", action: "kutengeneza mpango wenye tarehe wa kusoma na kufanya mtihani wa Yellow Belt", standard: "muundo na masharti ya mtihani yakiwa yamekaguliwa kwenye ukurasa huo" }
  ],
  chapters: [
    {
      name: "Sura 1: Fafanua na pima tatizo",
      lessons: [
        {
          title: "Ubora, Six Sigma na hatua tano za DMAIC",
          objectives: ["O1"],
          minutes: 5,
          goal: "Taja hatua tano za DMAIC na useme Yellow Belt hufanya nini katika kila moja.",
          text: [
            "Ubora ni kumpa mteja anachohitaji, kwa njia ile ile, kila mara. Kasoro ni kitu chochote ambacho mteja hangekikubali: oda isiyo sahihi, kufikisha kwa kuchelewa, kipuri kinachokosekana, kosa kwenye bili.",
            "Six Sigma ni njia ya kupunguza kasoro kwa kutumia data badala ya kubahatisha. Lean ni njia ya kupunguza upotevu, yaani hatua zinazoongeza muda lakini haziongezi thamani. Waajiri wengi hufundisha njia hizi pamoja kama Lean Six Sigma.",
            "Miradi hufuata hatua tano zinazoitwa DMAIC: Define (fafanua tatizo), Measure (pima ukubwa wake), Analyze (chambua ili kupata chanzo kikuu), Improve (boresha kwa kujaribu suluhisho) na Control (dhibiti ili kudumisha mafanikio). Mikanda (belts) huonyesha kiwango cha mafunzo: Yellow Belt anajua misingi na husaidia kwenye miradi, mara nyingi kwa kukusanya data na kuchora hatua; Green Belt na Black Belt huongoza miradi mikubwa zaidi.",
            "Vyeti viwili vinavyojulikana vya Yellow Belt ni ASQ Certified Six Sigma Yellow Belt na IASSC Certified Lean Six Sigma Yellow Belt. ASQ na IASSC ni mashirika yanayotoa vyeti vya ubora. Kozi hii inakuandaa; taasisi inayotoa cheti pekee ndiyo inayokipa."
          ],
          steps: ["Define: tatizo ni nini na lengo ni nini?", "Measure: linatokea mara ngapi sasa?", "Analyze: chanzo kikuu ni nini?", "Improve: suluhisho gani linafanya kazi unapolijaribu?", "Control: unadumishaje mafanikio?"],
          words: [["Kasoro", "kitu chochote ambacho mteja hangekikubali, kama bidhaa isiyo sahihi, iliyochelewa au iliyovunjika."], ["Six Sigma", "njia ya kupunguza kasoro kwa kutumia data; ubora wa juu sana ni kama kasoro 3.4 kwa kila nafasi milioni moja."], ["Lean", "njia ya kuondoa hatua zinazopoteza muda au vifaa."], ["DMAIC", "Define, Measure, Analyze, Improve, Control: hatua tano za mradi wa Six Sigma."], ["Yellow Belt", "mtu aliyefunzwa misingi anayesaidia kwenye miradi ya uboreshaji."]],
          slides: [
            { title: "Ubora na kasoro", bullets: ["Ubora: anachohitaji mteja, kwa njia ile ile kila mara", "Kasoro: kitu chochote ambacho mteja hangekikubali"] },
            { title: "Six Sigma na Lean", bullets: ["Six Sigma: kasoro chache, kwa kutumia data", "Lean: hatua chache zinazopoteza muda", "Pamoja: Lean Six Sigma"] },
            { title: "DMAIC kwa mpangilio", bullets: ["Define: fafanua tatizo", "Measure: pima ukubwa wake", "Analyze: chambua chanzo kikuu", "Improve kwa suluhisho lililojaribiwa, kisha Control ili kulidumisha"] },
            { title: "Mikanda na vyeti", bullets: ["Yellow Belt: anajua misingi, husaidia kwenye miradi", "ASQ na IASSC hutoa mitihani ya Yellow Belt", "Kozi hii inakuandaa; haikupi cheti"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Chagua mchakato mmoja unaoujua unaoharibika mara nyingi mno, kazini, kwenye biashara au nyumbani (kwa mfano oda zinazotumwa kwa kuchelewa, oda za chakula cha mchana zisizo sahihi, au ankara zinazotumwa na makosa). Uandike juu ya ukurasa, kisha andika D, M, A, I, C upande mmoja chini kwa chini na swali moja ambalo ungeuliza katika kila hatua.",
          youCanNow: "kutaja hatua tano za DMAIC kwa mpangilio, kusema Yellow Belt hufanya nini, na kuchagua mchakato wa kuboresha.",
          quickCheck: [
            { objective: "O1", q: "Mpangilio sahihi wa hatua za DMAIC ni upi?", options: ["Design, Make, Assess, Inspect, Close", "Measure, Define, Improve, Analyze, Control", "Define, Measure, Analyze, Improve, Control", "Define, Manage, Act, Improve, Check"], answer: 2, why: "DMAIC ni Define, Measure, Analyze, Improve, Control, kwa mpangilio huo." },
            { objective: "O1", q: "Timu yako inajaribu njia mpya ya kufunga oda ili kuona kama makosa yanapungua. Hii ni hatua gani?", options: ["Improve", "Define", "Measure", "Control"], answer: 0, why: "Kujaribu suluhisho ili kuona kama linafanya kazi hufanyika katika hatua ya Improve." }
          ]
        },
        {
          title: "Define: taarifa ya tatizo na ramani ya mchakato",
          objectives: ["O2"],
          minutes: 5,
          goal: "Andika taarifa ya tatizo na lengo, na uchore ramani rahisi ya mchakato.",
          text: [
            "Mradi mzuri unaanza na taarifa ya tatizo iliyo wazi. Inasema nini kimeharibika, wapi, tangu lini na kwa ukubwa gani, na kwa nini ni muhimu. HAITAJI chanzo wala suluhisho bado, kwa sababu bado hujavipata. Mfano: \"Tangu Juni, oda 12 kati ya kila 100 za chakula cha mchana kwenye mgahawa wa mjini zinatoka zikiwa si sahihi, na kusababisha kurudisha pesa na malalamiko.\"",
            "Lengo linasema ni bora kiasi gani, na kufikia lini: \"Punguza oda za chakula cha mchana zisizo sahihi hadi 3 kati ya kila 100 kufikia mwisho wa Septemba.\"",
            "Kisha chora ramani ya mchakato. Andika kila hatua ndani ya kisanduku kuanzia mwanzo hadi mwisho na uziunganishe kwa mishale. SIPOC ni jedwali fupi la picha kubwa: Suppliers (wasambazaji), Inputs (vinavyoingia), Process (hatua za mchakato), Outputs (vinavyotoka) na Customers (wateja). Sauti ya mteja (VOC) ni kile wateja wanachosema wanahitaji; sehemu zilizo muhimu zaidi kwao zinaitwa muhimu kwa ubora (CTQ)."
          ],
          steps: ["Andika nini kimeharibika, wapi, tangu lini na kwa ukubwa gani.", "Ongeza kwa nini ni muhimu (gharama, muda, wateja, usalama).", "Kagua: hakuna chanzo wala suluhisho ndani ya taarifa.", "Andika lengo lenye namba na tarehe.", "Chora mchakato kwa visanduku 5 hadi 8, mwanzo hadi mwisho."],
          words: [["Taarifa ya tatizo", "maelezo mafupi yenye ukweli ya nini kimeharibika, wapi, lini na kwa ukubwa gani."], ["Ramani ya mchakato", "mchoro wa hatua za mchakato kwa mpangilio, kwa visanduku na mishale."], ["SIPOC", "jedwali la ukurasa mmoja la Suppliers, Inputs, Process, Outputs na Customers."], ["Sauti ya mteja (VOC)", "kile wateja wanachosema wanahitaji au wanacholalamikia."], ["Muhimu kwa ubora (CTQ)", "sifa iliyo muhimu zaidi kwa mteja, kama kufika kwa wakati au kuwa sahihi."]],
          slides: [
            { title: "Taarifa nzuri ya tatizo", bullets: ["Nini, wapi, tangu lini, kwa ukubwa gani", "Kwa nini ni muhimu", "Hakuna chanzo wala suluhisho bado"] },
            { title: "Lengo zuri", bullets: ["Bora kiasi gani, kufikia lini", "Mfano: oda zisizo sahihi kutoka 12 hadi 3 kwa 100 kufikia mwisho wa Septemba"] },
            { title: "Chora ramani ya mchakato", bullets: ["Visanduku 5 hadi 8, mwanzo hadi mwisho", "Mishale inaonyesha mpangilio", "SIPOC: Suppliers, Inputs, Process, Outputs, Customers"] },
            { title: "Msikilize mteja", bullets: ["Sauti ya mteja: anachohitaji", "Muhimu kwa ubora: kilicho muhimu zaidi kwake"] }
          ],
          tryIt: "Kwa mchakato uliouchagua, andika taarifa ya tatizo yenye nini, wapi, tangu lini na kwa ukubwa gani (tumia makadirio yako bora kwa sasa), lengo lenye namba na tarehe, na ramani ya mchakato ya visanduku 5 hadi 8 kwenye karatasi.",
          youCanNow: "kuandika taarifa ya tatizo na lengo, na kuchora ramani rahisi ya mchakato.",
          quickCheck: [
            { objective: "O2", q: "Taarifa ipi ya tatizo ni bora zaidi?", options: ["\"Mpishi mpya ni mzembe.\"", "\"Tangu Machi, mizigo 8 kati ya kila 50 kutoka ghala la mashariki inafika ikiwa imechelewa, na kusababisha kurudishia wateja pesa.\"", "\"Tunahitaji mfumo mpya wa kompyuta.\"", "\"Usafirishaji ni mbaya.\""], answer: 1, why: "Inatoa nini, wapi, tangu lini na kwa ukubwa gani, na hailaumu chanzo wala kutaja suluhisho." },
            { objective: "O2", q: "Herufi P katika SIPOC inasimama kwa nini?", options: ["Price (bei)", "People (watu)", "Plan (mpango)", "Process (mchakato)"], answer: 3, why: "SIPOC ni Suppliers, Inputs, Process, Outputs na Customers." }
          ]
        },
        {
          title: "Measure: fomu za kuhesabu na viwango vya kasoro",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kusanya data kwenye fomu ya kuhesabu na ukokotoe kiwango cha kasoro.",
          text: [
            "Katika hatua ya Measure unagundua tatizo linatokea mara ngapi kweli. Makadirio mara nyingi si sahihi, kwa hiyo unahesabu.",
            "Fomu ya kuhesabu (check sheet) ni fomu rahisi ya karatasi au ya jedwali. Upande mmoja chini kwa chini, orodhesha aina za kasoro (bidhaa isiyo sahihi, bidhaa inayokosekana, kuchelewa). Juu, kutoka kushoto kwenda kulia, orodhesha siku. Weka alama ya mstari kila mara kasoro inapotokea, na pia hesabu jumla ya vitu ulivyokagua.",
            "Kiwango cha kasoro ni vitu vyenye kasoro ukigawanya kwa jumla ya vitu, mara 100. Kama oda 15 kati ya 200 hazikuwa sahihi: 15 / 200 = 0.075, yaani 7.5%. Six Sigma pia hutumia DPMO, kasoro kwa kila nafasi milioni moja: kasoro ukigawanya kwa (vitu mara nafasi kwa kila kitu), mara 1,000,000. Kama ankara 500 kila moja ina nafasi 4 za kosa na ukapata makosa 10: 10 / (500 x 4) = 0.005, mara 1,000,000 = 5,000 DPMO.",
            "Pima kwa njia ile ile kila mara: maana ile ile ya kasoro, wakati ule ule wa siku, mtu yule yule au sheria zilizo wazi. Hiki ndicho kipimo chako cha mwanzo (baseline), namba ya \"kabla\" utakayoilinganisha nayo baadaye."
          ],
          steps: ["Andika maana iliyo wazi ya kila kasoro.", "Tengeneza fomu ya kuhesabu: aina za kasoro upande mmoja, siku juu.", "Weka alama kwa kila kasoro na hesabu jumla ya vitu vilivyokaguliwa.", "Kiwango cha kasoro = vitu vyenye kasoro / jumla ya vitu x 100.", "Andika hiki kama kipimo chako cha mwanzo."],
          words: [["Fomu ya kuhesabu (check sheet)", "fomu rahisi ya kuweka alama kila aina ya tatizo inapotokea."], ["Kiwango cha kasoro", "sehemu ya vitu vyenye kasoro, ikionyeshwa kwa asilimia."], ["DPMO", "kasoro kwa kila nafasi milioni moja: kasoro / (vitu x nafasi kwa kila kitu) x 1,000,000."], ["Kipimo cha mwanzo (baseline)", "jinsi mchakato unavyofanya kazi kabla hujaubadilisha."]],
          slides: [
            { title: "Hesabu, usibahatishe", bullets: ["Pima tatizo linatokea mara ngapi", "Tumia maana moja iliyo wazi ya kasoro"] },
            { title: "Fomu ya kuhesabu", bullets: ["Aina za kasoro upande mmoja chini kwa chini", "Siku juu, kushoto kwenda kulia", "Alama za mistari, pamoja na jumla ya vitu vilivyokaguliwa"] },
            { title: "Hesabu", bullets: ["Kiwango cha kasoro = vyenye kasoro / jumla x 100", "15 zisizo sahihi kati ya 200 = 7.5%", "DPMO = kasoro / (vitu x nafasi) x 1,000,000"] },
            { title: "Kipimo chako cha mwanzo", bullets: ["Namba ya \"kabla\"", "Pima kwa njia ile ile kila mara", "Utailinganisha baada ya suluhisho"] }
          ],
          tryIt: "Tengeneza fomu ya kuhesabu kwa mchakato wako kwenye karatasi au kwenye jedwali. Kusanya angalau data 20 katika wiki ijayo (anza leo), kisha kokotoa kiwango chako cha kasoro na uonyeshe hesabu. Fanya mazoezi sasa: 9 zilizochelewa kati ya bidhaa 150 zilizofikishwa ni asilimia ngapi? (Jibu: 9 / 150 = 0.06 = 6%.)",
          youCanNow: "kukusanya data kwenye fomu ya kuhesabu, kukokotoa kiwango cha kasoro na kuweka kipimo chako cha mwanzo.",
          quickCheck: [
            { objective: "O3", q: "Ulikagua oda 80 na 4 hazikuwa sahihi. Kiwango cha kasoro ni kipi?", options: ["5%", "4%", "20%", "8%"], answer: 0, why: "4 / 80 = 0.05, yaani 5%." },
            { objective: "O3", q: "Kwa nini unaandika maana moja iliyo wazi ya kila kasoro kabla ya kuhesabu?", options: ["Ili chati ionekane nzuri zaidi", "Ili bosi aweze kuisaini", "Ili kila mtu ahesabu kwa njia ile ile na namba ziaminike", "Ili uhitaji data chache"], answer: 2, why: "Watu wakihesabu vitu tofauti, data haiwezi kulinganishwa wala kuaminika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Fafanua na pima tatizo",
        questions: [
          { objective: "O1", q: "Katika hatua ipi ya DMAIC unatafuta chanzo kikuu?", options: ["Define", "Analyze", "Control", "Measure"], answer: 1, why: "Analyze ndipo unapotumia data na zana kupata chanzo kikuu." },
          { objective: "O1", q: "Yellow Belt kwa kawaida hufanya nini kwenye mradi?", options: ["Anamiliki kampuni", "Anatoa vyeti", "Anaidhinisha bajeti peke yake", "Anasaidia kazi kama kukusanya data na kuchora hatua"], answer: 3, why: "Yellow Belt wanajua misingi na husaidia miradi, mara nyingi kwa kukusanya data na kuchora ramani ya mchakato." },
          { objective: "O2", q: "Taarifa ya tatizo inasema, \"Makosa yanatokea kwa sababu wafanyakazi hawajali.\" Kuna kosa gani?", options: ["Inalaumu chanzo kabla data yoyote haijakusanywa", "Ni fupi mno kusomeka", "Inatumia namba", "Hakuna kosa"], answer: 0, why: "Taarifa ya tatizo inaeleza tatizo kwa ukweli; chanzo kinapatikana baadaye, katika Analyze." },
          { objective: "O3", q: "Ulikagua fomu 250 na ukapata 10 zenye makosa. Kiwango cha kasoro ni kipi?", options: ["10%", "2.5%", "4%", "25%"], answer: 2, why: "10 / 250 = 0.04, yaani 4%." },
          { objective: "O3", q: "Kipimo cha mwanzo (baseline) ni nini?", options: ["Lengo unalotaka kufikia", "Mstari wa chini kwenye chati", "Ripoti ya mwisho", "Jinsi mchakato unavyofanya kazi kabla hujaubadilisha"], answer: 3, why: "Kipimo cha mwanzo ni namba ya \"kabla\" unayoilinganisha baada ya suluhisho." }
        ]
      }
    },
    {
      name: "Sura 2: Chambua, boresha na dhibiti",
      lessons: [
        {
          title: "Analyze: chati za Pareto, mchoro wa mfupa wa samaki na Kwa nini 5",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tafuta tatizo kubwa zaidi kwa chati ya Pareto na chanzo chake kikuu kwa Kwa nini 5.",
          text: [
            "Chati ya Pareto ni chati ya nguzo iliyopangwa kuanzia nguzo kubwa zaidi hadi ndogo zaidi. Inaonyesha kwamba vyanzo vichache kwa kawaida husababisha matatizo mengi, jambo linaloitwa mara nyingi kanuni ya 80/20. Anza na nguzo kubwa zaidi.",
            "Mchoro wa mfupa wa samaki (fishbone, pia huitwa mchoro wa chanzo na matokeo au mchoro wa Ishikawa) unasaidia timu kuorodhesha vyanzo vinavyowezekana. Andika tatizo kwenye \"kichwa\", kisha chora mifupa kwa makundi ya vyanzo, kama Njia, Mashine, Vifaa, Watu, Upimaji na Mazingira.",
            "Kisha uliza \"Kwa nini?\" kama mara tano ili kuchimba kutoka kwenye dalili hadi chanzo kikuu unachoweza kurekebisha. Mfano: Oda si sahihi. Kwa nini? Mpishi alisoma tiketi vibaya. Kwa nini? Tiketi iliandikwa kwa mkono. Kwa nini? Printa imeharibika. Kwa nini? Hakuna mtu anayehusika na kuitengeneza. Kwa nini? Hakuna ukaguzi wa matengenezo. Chanzo kikuu: hakuna ukaguzi wa matengenezo ya printa.",
            "Lawama si chanzo kikuu. Jibu likiwa \"mtu fulani alikuwa mzembe\", endelea kuuliza kwa nini mchakato uliruhusu kosa hilo kutokea."
          ],
          steps: ["Jumlisha kila aina ya kasoro kutoka kwenye fomu yako ya kuhesabu.", "Zipange kuanzia kubwa zaidi hadi ndogo zaidi na uchore nguzo.", "Chagua nguzo kubwa zaidi.", "Orodhesha vyanzo vinavyowezekana kwenye mfupa wa samaki.", "Uliza \"Kwa nini?\" kama mara tano hadi ufikie chanzo unachoweza kukifanyia kazi."],
          words: [["Chati ya Pareto", "chati ya nguzo iliyopangwa kuanzia kubwa zaidi hadi ndogo zaidi, kuonyesha matatizo machache yaliyo muhimu zaidi."], ["Kanuni ya 80/20", "hali ambapo vyanzo vichache mara nyingi husababisha matatizo mengi."], ["Mchoro wa mfupa wa samaki", "mchoro unaopanga kwa makundi vyanzo vinavyowezekana vya tatizo; pia huitwa mchoro wa Ishikawa."], ["Chanzo kikuu (root cause)", "sababu halisi ya tatizo kutokea; ukiirekebisha, tatizo linakoma au linapungua."], ["Kwa nini 5 (5 Whys)", "kuuliza \"Kwa nini?\" tena na tena, kama mara tano, ili kufikia chanzo kikuu."]],
          slides: [
            { title: "Chati ya Pareto", bullets: ["Nguzo zimepangwa kuanzia kubwa zaidi hadi ndogo zaidi", "Vyanzo vichache husababisha matatizo mengi (80/20)", "Anza na nguzo kubwa zaidi"] },
            { title: "Mchoro wa mfupa wa samaki", bullets: ["Tatizo kwenye kichwa", "Mifupa: Njia, Mashine, Vifaa, Watu, Upimaji, Mazingira"] },
            { title: "Kwa nini 5", bullets: ["Uliza \"Kwa nini?\" kama mara tano", "Oda si sahihi, kisha tiketi za mkono, kisha printa mbovu, kisha hakuna ukaguzi"] },
            { title: "Lawama si chanzo kikuu", bullets: ["Uliza kwa nini mchakato uliruhusu kosa kutokea", "Tafuta chanzo unachoweza kukifanyia kazi"] }
          ],
          tryIt: "Jumlisha kila aina ya kasoro kutoka kwenye fomu yako ya kuhesabu, zipange na uchore chati ya Pareto kwenye karatasi au kwenye jedwali. Kisha andika Kwa nini 5 kwa nguzo kubwa zaidi. Simama unapofikia chanzo unachoweza kurekebisha na kisichomlaumu mtu.",
          youCanNow: "kuchora chati ya Pareto, kuchagua tatizo kubwa zaidi na kuchimba hadi chanzo chake kikuu kwa Kwa nini 5.",
          quickCheck: [
            { objective: "O4", q: "Chati yako ya Pareto inaonyesha: saizi isiyo sahihi 40, bidhaa inayokosekana 25, kuchelewa 10, kuharibika 5. Unaanzia wapi?", options: ["Kuharibika, kwa sababu ni rahisi zaidi", "Zote nne kwa wakati mmoja", "Kuchelewa, kwa sababu wateja huchukia kusubiri", "Saizi isiyo sahihi, nguzo kubwa zaidi"], answer: 3, why: "Chati ya Pareto inakuambia uanze na nguzo kubwa zaidi, ambapo suluhisho linasaidia zaidi." },
            { objective: "O4", q: "Kwa nini 5 yako inaishia na \"mfanyakazi alikuwa mzembe\". Unapaswa kufanya nini?", options: ["Kusimama hapo na kumwandikia mfanyakazi onyo", "Kuendelea kuuliza kwa nini mchakato uliruhusu kosa kutokea", "Kuanza mradi mpya", "Kumwondoa mfanyakazi kwenye chati"], answer: 1, why: "Lawama si chanzo kikuu; tafuta kitu katika mchakato kilichoruhusu kosa." }
          ]
        },
        {
          title: "Improve: ondoa upotevu na uzuie makosa kazini",
          objectives: ["O5"],
          minutes: 5,
          goal: "Chagua suluhisho linaloondoa upotevu au makosa na ulijaribu kwa kiwango kidogo.",
          text: [
            "Lean inataja aina nane za upotevu. Njia rahisi ya kuzikumbuka ni neno la Kiingereza DOWNTIME: Defects (kasoro), Overproduction (kuzalisha kupita kiasi), Waiting (kusubiri), Non-used talent (vipaji visivyotumika), Transportation (kusafirisha), Inventory (bidhaa nyingi mno ghalani), Motion (kutembea au kunyoosha mkono kupita kiasi) na Extra processing (kazi ya ziada isiyohitajika).",
            "Suluhisho zuri mara nyingi hufanya njia sahihi kuwa njia rahisi. 5S hupanga eneo la kazi: Sort (chambua), Set in order (panga), Shine (safisha), Standardize (weka utaratibu mmoja), Sustain (dumisha). Kuzuia makosa (poka-yoke kwa Kijapani) hufanya makosa kuwa magumu au yasiwezekane, kama plagi inayoingia upande mmoja tu, fomu isiyotumwa ikiwa na kisanduku kitupu, au pipa lenye alama ya rangi.",
            "Jaribu suluhisho kwa kiwango kidogo kwanza: zamu moja, meza moja au wiki moja. Hili ni jaribio dogo (pilot). Pima kwa njia ile ile kama kipimo chako cha mwanzo na ulinganishe. Namba zikiwa bora, lieneze; zisipokuwa bora, jaribu wazo linalofuata."
          ],
          steps: ["Orodhesha suluhisho zinazoshambulia chanzo kikuu.", "Pendelea suluhisho zinazoondoa upotevu au kufanya makosa kuwa magumu.", "Fanya jaribio dogo: zamu moja, meza moja au wiki moja.", "Pima kwa njia ile ile kama kipimo cha mwanzo.", "Linganisha kabla na baada."],
          words: [["Upotevu", "hatua yoyote inayotumia muda au vifaa lakini haiongezi thamani kwa mteja."], ["DOWNTIME", "kifupi cha kukumbuka aina nane za upotevu: Defects, Overproduction, Waiting, Non-used talent, Transportation, Inventory, Motion, Extra processing."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain: njia ya kupanga eneo la kazi."], ["Kuzuia makosa (poka-yoke)", "muundo unaofanya makosa kuwa magumu au yasiwezekane."], ["Jaribio dogo (pilot)", "jaribio dogo la muda mfupi la suluhisho kabla ya kulitumia kila mahali."]],
          slides: [
            { title: "Aina nane za upotevu: DOWNTIME", bullets: ["Defects, Overproduction, Waiting, Non-used talent", "Transportation, Inventory, Motion, Extra processing"] },
            { title: "5S", bullets: ["Sort, Set in order, Shine", "Standardize, Sustain"] },
            { title: "Kuzuia makosa", bullets: ["Fanya njia sahihi iwe njia rahisi", "Plagi inayoingia upande mmoja; fomu inayozuia visanduku vitupu"] },
            { title: "Jaribio dogo kwanza", bullets: ["Zamu moja, meza moja au wiki moja", "Pima kama kipimo cha mwanzo", "Bora? Lieneze. Si bora? Jaribu wazo linalofuata"] }
          ],
          tryIt: "Andika suluhisho tatu zinazowezekana kwa chanzo chako kikuu. Weka alama ya upotevu ambao kila moja inaondoa au jinsi inavyozuia makosa kazini. Chagua moja, panga jaribio dogo (wapi, kwa muda gani, nani), na uanze kulipima kwa njia ile ile kama kipimo chako cha mwanzo.",
          youCanNow: "kutambua aina nane za upotevu, kuchagua suluhisho linaloondoa upotevu au makosa, na kulijaribu kwa jaribio dogo.",
          quickCheck: [
            { objective: "O5", q: "Wafanyakazi wanatembea kuvuka ghala mara nyingi kwa siku kuchukua utepe wa kufungia. Huu ni upotevu gani?", options: ["Overproduction", "Defects", "Motion", "Inventory"], answer: 2, why: "Kutembea na kunyoosha mkono kupita kiasi ni upotevu wa motion (mwendo)." },
            { objective: "O5", q: "Una suluhisho unalofikiri litafanya kazi. Hatua bora inayofuata ni ipi?", options: ["Kulijaribu kwa kiwango kidogo na kulinganisha na kipimo cha mwanzo", "Kulieneza kila tawi mara moja", "Kuacha kupima, kwa kuwa una uhakika", "Kusubiri mwaka mmoja kuona"], answer: 0, why: "Jaribio dogo lililopimwa kama kipimo cha mwanzo linaonyesha kama suluhisho linafanya kazi kweli." }
          ]
        },
        {
          title: "Dhibiti mafanikio, na upange mtihani wako wa Yellow Belt",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Weka ukaguzi wa udhibiti kwa suluhisho na utengeneze mpango wenye tarehe wa kusoma na kufanya mtihani.",
          text: [
            "Suluhisho nyingi hufifia watu wanaporudi kwenye mazoea ya zamani. Katika hatua ya Control unadumisha mafanikio: andika njia mpya kama kazi sanifu (orodha fupi au picha ya hatua sahihi), wafundishe watu, na uendelee kupima. Chati ya mwenendo (run chart) huonyesha namba zako kwa muda pamoja na mstari wa katikati; chati ya udhibiti (control chart) huongeza mipaka inayoonyesha mchakato unapobadilika kupita kawaida. Andika mpango rahisi wa udhibiti: nini cha kukagua, mara ngapi, nani anakagua, na nini cha kufanya namba ikiwa mbaya zaidi.",
            "Sasa panga cheti chako. ASQ Certified Six Sigma Yellow Belt haina sharti la uzoefu wala elimu, na mitihani yake ni ya kitabu wazi (open book) ukitumia vitabu vyako vya marejeo vilivyofungwa pamoja, kwa mujibu wa asq.org. IASSC Certified Lean Six Sigma Yellow Belt haina masharti ya awali, na mtihani wake ni wa kitabu kufungwa (closed book) na unasimamiwa na msimamizi, kwa mujibu wa iassc.org. Miundo, ada na masharti hubadilika, kwa hiyo soma ukurasa rasmi kabla ya kujiandikisha. Baadhi ya waajiri pia huendesha mafunzo yao wenyewe ya Yellow Belt.",
            "Pakua Body of Knowledge ya taasisi inayotoa cheti (orodha ya mada ambazo mtihani unaweza kuuliza), weka alama kwa kila mada unayoijua, na upange muda wa kusoma zilizobaki. Weka tarehe halisi kwenye kalenda na ujiandikishe kwa mtihani pale tu alama zako za mazoezi zinapokuwa thabiti."
          ],
          steps: ["Andika njia mpya kama kazi sanifu.", "Tengeneza mpango wa udhibiti: nini, mara ngapi, nani, na nini cha kufanya ikiwa mbaya zaidi.", "Endelea na chati ya mwenendo kwa angalau wiki kadhaa.", "Chagua mtihani na usome ukurasa wake rasmi.", "Tumia Body of Knowledge kupanga tarehe za kusoma na tarehe lengwa ya mtihani."],
          words: [["Kazi sanifu (standard work)", "njia bora iliyokubaliwa ya kufanya kazi, iliyoandikwa kama hatua rahisi au picha."], ["Chati ya mwenendo (run chart)", "chati ya mstari ya kipimo kwa muda, inayotumika kuona mwelekeo."], ["Chati ya udhibiti (control chart)", "chati ya mwenendo yenye mipaka inayoonyesha mchakato unapobadilika kupita kawaida."], ["Mpango wa udhibiti", "mpango mfupi unaosema nini cha kukagua, mara ngapi, nani anakagua na nini cha kufanya kikirudi nyuma."], ["Body of Knowledge", "orodha rasmi ya mada ambazo mtihani unaweza kuuliza."]],
          slides: [
            { title: "Dumisha mafanikio", bullets: ["Andika njia mpya kama kazi sanifu", "Wafundishe watu", "Endelea kupima"] },
            { title: "Chati zinazoangalia mchakato", bullets: ["Chati ya mwenendo: namba kwa muda na mstari wa katikati", "Chati ya udhibiti: inaongeza mipaka ya mabadiliko ya kawaida"] },
            { title: "Mitihani miwili ya Yellow Belt", bullets: ["ASQ CSSYB: kitabu wazi, hakuna sharti la uzoefu", "IASSC ICYB: kitabu kufungwa, kuna msimamizi, hakuna masharti ya awali", "Kagua ukurasa rasmi: masharti hubadilika"] },
            { title: "Mpango wako wa kusoma na mtihani", bullets: ["Pakua Body of Knowledge", "Weka alama unachokijua; panga vilivyobaki", "Tarehe halisi; jiandikishe alama za mazoezi zikiwa thabiti"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Kazi ya mwisho: maliza mradi wako wa ukurasa mmoja (taarifa ya tatizo na lengo, ramani ya mchakato, fomu ya kuhesabu na kiwango cha kasoro, chati ya Pareto na Kwa nini 5, suluhisho ulilojaribu pamoja na namba za kabla na baada, na mpango wa udhibiti). Kisha fungua ukurasa wa Yellow Belt wa ASQ au IASSC, andika muundo wa mtihani uliouona hapo, na utengeneze mpango wa kusoma wenye angalau vipindi vinne vya kusoma vyenye tarehe na tarehe lengwa ya mtihani.",
          youCanNow: "kudumisha mafanikio kwa kazi sanifu na mpango wa udhibiti, na kufuata mpango wenye tarehe kuelekea mtihani wa Yellow Belt.",
          quickCheck: [
            { objective: "O5", q: "Miezi mitatu baada ya suluhisho, makosa yanaanza kuongezeka tena. Hatua ipi ilikosekana?", options: ["Define", "Control", "Measure", "Analyze"], answer: 1, why: "Control hudumisha mafanikio kwa kazi sanifu, mafunzo na ukaguzi unaoendelea." },
            { objective: "O6", q: "Unapaswa kukagua wapi masharti na muundo wa sasa wa mtihani wa Yellow Belt?", options: ["Ujumbe kwenye mitandao ya kijamii", "Rafiki aliyefaulu miaka mingi iliyopita", "Tangazo la kozi ya bei nafuu", "Ukurasa rasmi wa taasisi inayotoa cheti, kama asq.org au iassc.org"], answer: 3, why: "Masharti, miundo na ada za mitihani hubadilika; ukurasa wa taasisi inayotoa cheti ndio chanzo cha kuaminika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Chambua, boresha na dhibiti",
        questions: [
          { objective: "O4", q: "Chati ya Pareto inaonyesha nini?", options: ["Matatizo machache yanayosababisha shida nyingi", "Hatua za mchakato kwa mpangilio", "Bajeti ya mradi", "Nani wa kulaumiwa"], answer: 0, why: "Chati ya Pareto hupanga matatizo kuanzia kubwa zaidi hadi ndogo zaidi ili uone yale machache muhimu." },
          { objective: "O4", q: "Zana ipi hupanga vyanzo vinavyowezekana katika mifupa kama Njia, Mashine na Vifaa?", options: ["Fomu ya kuhesabu", "Chati ya mwenendo", "Mchoro wa mfupa wa samaki", "SIPOC"], answer: 2, why: "Mchoro wa mfupa wa samaki (Ishikawa) hupanga vyanzo vinavyowezekana vya tatizo moja." },
          { objective: "O5", q: "Fomu haitumwi hadi kila kisanduku cha lazima kijazwe. Huu ni mfano wa:", options: ["Overproduction", "Kuzuia makosa", "Inventory", "Chati ya udhibiti"], answer: 1, why: "Kuzuia makosa (poka-yoke) hufanya kosa kuwa gumu au lisiwezekane." },
          { objective: "O5", q: "Hatua za 5S ni zipi?", options: ["Sell, Ship, Save, Serve, Smile", "See, Say, Stop, Start, Sign", "Scan, Score, Solve, Sort, Send", "Sort, Set in order, Shine, Standardize, Sustain"], answer: 3, why: "5S ni Sort, Set in order, Shine, Standardize, Sustain." },
          { objective: "O6", q: "Body of Knowledge ni nini?", options: ["Orodha rasmi ya mada ambazo mtihani unaweza kuuliza", "Kitabu cha kiada cha matibabu", "Kitabu cha kanuni za kampuni", "Orodha ya majibu ya mitihani iliyopita"], answer: 0, why: "Taasisi inayotoa cheti huchapisha Body of Knowledge ili ujue cha kusoma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Ubora (Maandalizi ya Six Sigma Yellow Belt)",
    questions: [
      { objective: "O1", q: "DMAIC inasimama kwa nini?", options: ["Do, Make, Ask, Inspect, Close", "Design, Monitor, Act, Inform, Check", "Define, Measure, Analyze, Improve, Control", "Decide, Measure, Approve, Install, Count"], answer: 2, why: "Hatua tano za mradi wa Six Sigma ni Define, Measure, Analyze, Improve na Control." },
      { objective: "O1", q: "Kuandika taarifa ya tatizo na lengo hufanyika katika hatua ipi?", options: ["Define", "Improve", "Control", "Analyze"], answer: 0, why: "Define huweka wazi tatizo, lengo na mchakato." },
      { objective: "O1", q: "Kauli ipi kuhusu kozi ya Yellow Belt kama hii ni kweli?", options: ["Kuimaliza kunakupa cheti cha ASQ", "Inachukua nafasi ya mtihani wowote", "Black Belt pekee ndio wanaoweza kuisoma", "Inakuandaa; taasisi inayotoa cheti ndiyo inayokipa"], answer: 3, why: "Kozi inakuandaa; taasisi inayotoa cheti pekee, kama ASQ au IASSC, ndiyo inayokipa." },
      { objective: "O2", q: "Taarifa nzuri ya tatizo ina nini?", options: ["Suluhisho unalolipenda", "Nini, wapi, tangu lini na kwa ukubwa gani", "Jina la mfanyakazi wa kulaumiwa", "Neno \"tatizo\" peke yake"], answer: 1, why: "Inatoa ukweli wa tatizo bila kutaja chanzo wala suluhisho." },
      { objective: "O2", q: "Lengo lipi linapimika?", options: ["\"Fanya vizuri zaidi kwenye oda\"", "\"Jitahidi zaidi\"", "\"Punguza kuchelewa kufikisha kutoka 10% hadi 3% kufikia Desemba 31\"", "\"Wafurahishe wateja zaidi siku moja\""], answer: 2, why: "Lina namba na tarehe, kwa hiyo unaweza kujua kama umelifikia." },
      { objective: "O2", q: "Ramani ya mchakato inaonyesha:", options: ["Hatua za mchakato kwa mpangilio, kwa visanduku na mishale", "Faida ya kampuni", "Ofisi ilipo kwenye ramani ya mtaa", "Mfanyakazi yupi ni mwepesi zaidi"], answer: 0, why: "Ramani ya mchakato huchora kila hatua kuanzia mwanzo hadi mwisho." },
      { objective: "O3", q: "Fomu ya kuhesabu hutumika kwa nini?", options: ["Kulipa wafanyakazi", "Kusaini mikataba", "Kuandika lengo", "Kuweka alama kila aina ya tatizo inapotokea"], answer: 3, why: "Fomu ya kuhesabu ni fomu rahisi ya kuhesabu kasoro kwa aina." },
      { objective: "O3", q: "Ulikagua ankara 400 na 12 zilikuwa na makosa. Kiwango cha kasoro ni kipi?", options: ["12%", "3%", "4%", "0.3%"], answer: 1, why: "12 / 400 = 0.03, yaani 3%." },
      { objective: "O3", q: "Vitu 100, kila kimoja na nafasi 5 za kosa, vina makosa 2 kwa jumla. DPMO ni ngapi?", options: ["2,000", "400", "4,000", "20,000"], answer: 2, why: "2 / (100 x 5) = 0.004, na 0.004 x 1,000,000 = 4,000." },
      { objective: "O4", q: "Kanuni ya 80/20 katika chati ya Pareto inamaanisha:", options: ["Vyanzo vichache mara nyingi husababisha matatizo mengi", "Wafanyakazi 80 hufanya makosa 20", "Rekebisha matatizo 20 kwa siku", "Kila chanzo ni muhimu sawa"], answer: 0, why: "Pareto inaonyesha vyanzo vichache muhimu, kwa hiyo unaanza na nguzo kubwa zaidi." },
      { objective: "O4", q: "Kwa nini unauliza \"Kwa nini?\" kama mara tano?", options: ["Ili kuchelewesha mkutano", "Ili kumpata mtu wa kulaumu", "Kwa sababu mtihani unataka tano kamili", "Ili kuchimba kupita dalili hadi chanzo kikuu unachoweza kurekebisha"], answer: 3, why: "Kila \"kwa nini\" kinashuka ngazi moja zaidi hadi ufikie chanzo unachoweza kukifanyia kazi." },
      { objective: "O4", q: "Jibu lipi ni chanzo kikuu unachoweza kukifanyia kazi?", options: ["\"Watu ni wavivu\"", "\"Hakuna ukaguzi wa matengenezo ya printa ya tiketi\"", "\"Bahati mbaya\"", "\"Wateja ni wasumbufu\""], answer: 1, why: "Chanzo kikuu ni pengo katika mchakato unaloweza kurekebisha, si lawama wala bahati." },
      { objective: "O5", q: "Maboksi ya bidhaa za ziada yamejaa chumba cha nyuma na baadhi zinaisha muda wake. Huu ni upotevu gani?", options: ["Motion", "Waiting", "Inventory", "Non-used talent"], answer: 2, why: "Kuwa na bidhaa nyingi mno ghalani ni upotevu wa inventory." },
      { objective: "O5", q: "Kabla ya kueneza suluhisho kila mahali, unapaswa:", options: ["Kulijaribu kwa jaribio dogo na kulinganisha na kipimo cha mwanzo", "Kuacha kupima", "Kubadilisha vitu vitano kwa wakati mmoja", "Kuwaomba wateja wasubiri"], answer: 0, why: "Jaribio dogo linaonyesha kama suluhisho linafanya kazi kabla hujatumia muda na pesa kulieneza." },
      { objective: "O5", q: "Mpango wa udhibiti unasema nini?", options: ["Nani anapata bonasi", "Tarehe ya kuanza mradi pekee", "Jinsi ya kuandika taarifa ya tatizo", "Nini cha kukagua, mara ngapi, nani anakagua na nini cha kufanya kikirudi nyuma"], answer: 3, why: "Mpango wa udhibiti hudumisha mafanikio kwa kuweka ukaguzi wa mara kwa mara na hatua ya kuchukua." },
      { objective: "O5", q: "Chati ya mwenendo (run chart) ni:", options: ["Orodha ya aina nane za upotevu", "Chati ya mstari ya kipimo kwa muda", "Mchoro wa vyanzo", "Ramani ya jengo"], answer: 1, why: "Chati ya mwenendo huonyesha data kwa muda ili uone kama mafanikio yanadumu." },
      { objective: "O6", q: "Kwa mujibu wa asq.org, mtihani wa ASQ Certified Six Sigma Yellow Belt ni:", options: ["Kwa watu wenye uzoefu wa miaka mitano pekee", "Hutolewa darasani tu na mwajiri wako", "Wa kitabu wazi, bila sharti la uzoefu wala elimu", "Wa kitabu kufungwa bila maandishi yoyote"], answer: 2, why: "ASQ inasema CSSYB haina sharti la uzoefu wala elimu na mitihani yake ni ya kitabu wazi." },
      { objective: "O6", q: "Kwa mujibu wa iassc.org, mtihani wa IASSC Yellow Belt ni:", options: ["Wa kitabu kufungwa na unasimamiwa na msimamizi", "Wa kitabu wazi na maandishi yoyote", "Unafanywa bila kikomo cha muda", "Kwa wanachama wa ASQ pekee"], answer: 0, why: "IASSC inaeleza mtihani wa ICYB kuwa wa kitabu kufungwa na unaosimamiwa." },
      { objective: "O6", q: "Hatua ya kwanza bora katika kujenga mpango wako wa kusoma ni ipi?", options: ["Kujiandikisha kwa mtihani kesho", "Kununua kozi ya bei ghali zaidi", "Kukariri majibu ya mitihani ya zamani kutoka tovuti", "Kupakua Body of Knowledge na kuweka alama mada unazohitaji kusoma"], answer: 3, why: "Body of Knowledge inaonyesha mtihani unahusu nini, ili upange muda wa kusoma maeneo unayoyakosa." },
      { objective: "O6", q: "Unapaswa kujiandikisha kwa tarehe ya mtihani lini?", options: ["Kabla hujasoma chochote", "Alama zako za mazoezi zikiwa thabiti na umekagua masharti rasmi", "Kamwe; vyeti havihitajiki", "Baada ya mwajiri wako kukuambia tu"], answer: 1, why: "Alama za mazoezi zilizo thabiti na masharti ya sasa yanamaanisha uko tayari kufanya mtihani." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 7, 9, 10, 12, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Tatizo na lengo", objective: "O2", notYet: "Taarifa haiko wazi au inataja chanzo au suluhisho; lengo halina namba wala tarehe.", meets: "Taarifa inatoa nini, wapi, tangu lini na kwa ukubwa gani; lengo lina namba na tarehe; ramani ya mchakato ya hatua 5 hadi 8 imewekwa.", exceeds: "Pia ina SIPOC au inataja kile mteja anachojali zaidi (CTQ)." },
      { name: "Data na kiwango cha kasoro", objective: "O3", notYet: "Data chini ya 20, au hakuna maana iliyo wazi ya kasoro.", meets: "Fomu ya kuhesabu yenye angalau data 20 na kiwango cha kasoro pamoja na hesabu ikionyeshwa.", exceeds: "Pia inatoa DPMO, au inaonyesha kuwa sheria zile zile za kuhesabu zilitumika kila siku." },
      { name: "Chanzo kikuu", objective: "O4", notYet: "Hakuna chati ya Pareto, au Kwa nini 5 inaishia na lawama.", meets: "Chati ya Pareto iliyopangwa kuanzia kubwa zaidi hadi ndogo zaidi na Kwa nini 5 inayoishia na chanzo cha mchakato ambacho mtu anaweza kukifanyia kazi.", exceeds: "Pia inatumia mfupa wa samaki kuonyesha vyanzo vingine ambavyo timu iliviondoa." },
      { name: "Suluhisho na udhibiti", objective: "O5", notYet: "Suluhisho halikujaribiwa, au hakuna namba za kabla na baada.", meets: "Suluhisho lililojaribiwa kwa jaribio dogo lenye namba za kabla na baada na mpango wa udhibiti (nini, mara ngapi, nani, nini kikirudi nyuma).", exceeds: "Pia ina kazi sanifu au chati ya mwenendo ya wiki kadhaa." },
      { name: "Hadithi ya DMAIC", objective: "O1", notYet: "Ukurasa unaruka huku na huku na hatua zinakosekana au haziko kwa mpangilio.", meets: "Ukurasa unafuata Define, Measure, Analyze, Improve, Control kwa mpangilio.", exceeds: "Mwanafunzi anaweza kueleza mradi kwa chini ya dakika mbili, kama katika usaili wa kazi." },
      { name: "Mpango wa kusoma na mtihani", objective: "O6", notYet: "Hakuna tarehe, au hakuna ukurasa rasmi uliokaguliwa.", meets: "Unataja mtihani, muundo uliokaguliwa kwenye ukurasa wake rasmi, angalau vipindi vinne vya kusoma vyenye tarehe na tarehe lengwa ya mtihani.", exceeds: "Pia unaunganisha vipindi vya kusoma na mada za Body of Knowledge na una tarehe za mitihani ya mazoezi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaofanya na kufaulu mtihani wa Yellow Belt ndani ya miezi 6 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaotumia mradi wao wa ukurasa mmoja kwenye usaili, au wanaopata kazi, kupandishwa cheo au nafasi katika timu ya uboreshaji (utafiti wa ufuatiliaji)",
      "Wanafunzi na wamiliki wa biashara ndogo wanaoripoti kiwango cha chini cha kasoro au upotevu mdogo kwenye mchakato waliouchagua siku 30 baadaye"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, kalamu na rula kwa fomu za kuhesabu, chati na ramani za mchakato",
      "Si lazima: jedwali la bure (Google Sheets au Microsoft Excel) kwa chati za Pareto na za mwenendo",
      "Mchakato halisi wa kuuangalia kwa wiki moja hadi mbili (kazini, kwenye biashara, au nyumbani)",
      "Intaneti ya kusoma ukurasa rasmi wa Yellow Belt wa ASQ au IASSC",
      "Kama dakika 60 za masomo na majaribio, pamoja na wiki moja hadi mbili za kukusanya data kwa kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika kikundi: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi. Kila mwanafunzi achague mchakato wake katika kipindi cha kwanza ili ukusanyaji wa data uanze mapema.",
      "Fanyeni mazoezi ya chati ya Pareto na Kwa nini 5 kama kikundi kwa mfano mmoja wa pamoja (kama oda zisizo sahihi za mgahawa) kabla wanafunzi hawajafanya zao.",
      "Simamisha Kwa nini 5 yoyote inayoishia na lawama na uliza ni kitu gani katika mchakato kiliruhusu kosa kutokea.",
      "Wakumbushe wanafunzi wasiandike majina ya wateja, taarifa za wagonjwa wala siri za kampuni katika data yao.",
      "Pima kazi ya mwisho kwa rubric na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati; wanafunzi wafanye mazoezi ya kueleza mradi wao kama jibu la usaili wa kazi.",
      "Usitaje ada za mitihani wala alama za kufaulu kwa kumbukumbu; waelekeze wanafunzi kwenye asq.org au iassc.org kwa masharti ya sasa."
    ]
  }
};
