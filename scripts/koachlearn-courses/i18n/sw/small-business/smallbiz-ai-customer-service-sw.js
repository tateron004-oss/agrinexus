"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-customer-service.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC_REVIEWS = { name: "FTC: Kanuni ya Maoni na Ushuhuda wa Wateja, Maswali na Majibu", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const FTC_REVIEWS_PR = { name: "FTC: Kanuni ya mwisho inayopiga marufuku maoni na ushuhuda wa uongo (Agosti 2024)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" };

module.exports = {
  id: "smallbiz-ai-customer-service-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-customer-service",
  category: "Small Business",
  name: "AI kwa Huduma kwa Wateja na Mawasiliano",
  skills: "Kuandika FAQ ya wateja, Kutengeneza violezo vya majibu, Kuweka sauti ya biashara yako, Kujibu maoni ya wateja, Kushughulikia wateja waliokasirika, Kulinda taarifa za wateja",
  outcome: "kutengeneza kifurushi cha huduma kwa wateja wa biashara yako kwa msaada wa AI: FAQ ya maswali yako kumi yanayoulizwa zaidi, violezo vitano vya majibu kwa sauti ya biashara yako, na jibu tulivu kwa mteja aliyekasirika na kwa maoni ya hadharani, vyote vikiwa vimekaguliwa na wewe kabla ya kuvitumia.",
  about: [
    "Kozi hii ni kwa wamiliki na wafanyakazi wa biashara ndogo wanaojibu wateja kwa simu, ujumbe mfupi, barua pepe, ujumbe wa mitandao ya kijamii na maoni ya mtandaoni: mikahawa, saluni, maduka, wasafishaji, mafundi na magari ya kuuza chakula.",
    "Utatumia msaidizi wa AI wa bure kujibu maswali yale yale kwa haraka zaidi, kufanya majibu yako yawe ya kirafiki na yanayofanana, kujibu maoni ya wateja kwa njia sahihi, na kutuliza wateja waliokasirika bila kutoa zaidi ya unavyoweza. Wewe ndiye unayeamua kila jibu.",
    "Kila somo linachukua kama dakika tano, pamoja na kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi zako zinajenga kifurushi cha huduma kwa wateja unachoweza kutumia kesho yake."
  ],
  finalTask: "Tengeneza kifurushi chako cha huduma kwa wateja katika hati moja: sauti ya biashara yako (maneno matatu na orodha ya fanya/usifanye), FAQ yenye maswali yako kumi yanayoulizwa zaidi na majibu yaliyokaguliwa, violezo vitano vya majibu vyenye nafasi za kujaza, jibu moja kwa mteja aliyekasirika (halisi au wa mfano), na jibu moja kwa maoni ya hadharani. Kila ukweli umekaguliwa na wewe na hakuna taarifa binafsi za mteja zilizowekwa kwenye zana ya AI.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki na wafanyakazi wa biashara ndogo wanaojibu wateja kwa simu, ujumbe mfupi, barua pepe, mitandao ya kijamii na maoni ya mtandaoni: mikahawa, saluni, maduka, wasafishaji, mafundi na magari ya kuuza chakula.",
    startingPoint: "Wanajibu maswali ya wateja kila siku, mara nyingi yale yale, na huenda wanajibu maoni ya wateja. Wanatumia AI kidogo kwa majibu, na hawana FAQ iliyoandikwa, sauti ya biashara wala violezo.",
    gap: "Kujibu maswali yale yale moja moja kunachukua muda, majibu yanaweza kutofautiana kati ya mtu na mtu, na lalamiko au maoni yaliyoshughulikiwa vibaya yanaweza kukupotezea wateja. Wamiliki wanahitaji kifurushi cha huduma kwa wateja kilichokaguliwa na kinachofanana, kilichotengenezwa kwa msaada wa AI, huku wakibaki waaminifu, wakifuata kanuni ya FTC kuhusu maoni ya wateja na wakilinda taarifa za wateja.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu janja au kompyuta inayotumika kati ya mteja mmoja na mwingine",
      "Muda: masomo ya kama dakika 5 yanayoingia katika siku ya kazi yenye shughuli nyingi",
      "Sheria: kanuni ya FTC inapiga marufuku maoni mazuri ya uongo au ya kulipiwa; madai ya kuumia yanapelekwa kwa mtaalamu au kampuni ya bima",
      "Faragha: hakuna majina ya wateja, taarifa za kadi wala mawasiliano yao katika zana za AI"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Biashara Ndogo\" inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maswali ya wateja yanayoulizwa zaidi", action: "kuandika FAQ kwa msaada wa AI", standard: "yenye maswali kumi na kila jibu likiwa limekaguliwa dhidi ya unachofanya kweli" },
    { id: "O2", condition: "Ukijua jinsi unavyotaka biashara yako isikike", action: "kueleza sauti ya biashara yako na kuifanya AI iandike kwa sauti hiyo", standard: "kwa maneno matatu ya sauti na orodha ya fanya na usifanye iliyowekwa mwanzoni mwa mazungumzo" },
    { id: "O3", condition: "Ukitumia msaidizi wa AI", action: "kutengeneza violezo vitano vya majibu vinavyoweza kutumika tena, vyenye nafasi za kujaza", standard: "kwa sauti ya biashara yako, vimekaguliwa na kuhifadhiwa mahali unapoweza kuvinakili haraka" },
    { id: "O4", condition: "Ukipewa maoni mazuri au mabaya ya mtandaoni", action: "kuandika jibu la kweli na tulivu kwa msaada wa AI", standard: "kila kauli ikiwa ya kweli na bila maoni ya uongo au ya kulipiwa" },
    { id: "O5", condition: "Ukipewa mteja aliyekasirika na mipaka yako ya kurudisha pesa na kurudia kazi", action: "kuandika jibu kwa kutumia mbinu ya LAST", standard: "ukitoa tu suluhisho ambalo ungelitoa kweli" },
    { id: "O6", condition: "Ukipewa FAQ, violezo na majibu yako", action: "kuunganisha kifurushi cha huduma kwa wateja kinacholinda taarifa za wateja", standard: "katika hati moja, kila ukweli ukiwa umekaguliwa na bila taarifa halisi za mteja" }
  ],
  chapters: [
    {
      name: "Sura 1: Majibu ya kila siku ya haraka na ya kirafiki zaidi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutafuta maswali makuu ya wateja wako na kutengeneza FAQ",
          minutes: 5,
          goal: "Orodhesha maswali ya wateja yanayoulizwa zaidi na uyageuze kuwa FAQ iliyokaguliwa.",
          text: [
            "Biashara nyingi hujibu maswali kumi yale yale tena na tena: saa za kazi, bei, maegesho, usafirishaji, kuweka miadi, kurudisha bidhaa, njia za malipo, muda wa kusubiri, mzio au malighafi, na \"mnafanya...?\".",
            "Kwanza yaandike kutoka kumbukumbu yako, ujumbe wako mfupi na ujumbe wa mitandao. Kisha mpe msaidizi wa AI majibu yako halisi kwa ufupi na umwombe ayageuze kuwa FAQ iliyo wazi: \"Haya ni majibu yangu kwa ufupi. Tengeneza FAQ fupi kwa tovuti ya saluni yangu ya kucha. Ya kirafiki, kwa maneno rahisi.\"",
            "Kagua kila jibu dhidi ya unachofanya kweli. FAQ kwenye tovuti yako au kwenye bango ni ahadi kwa wateja."
          ],
          steps: ["Orodhesha maswali kumi unayoyasikia zaidi.", "Andika jibu lako halisi kwa kila moja, kwa ufupi.", "Omba AI iyageuze kuwa FAQ iliyo wazi.", "Kagua kila jibu, kisha iweke kwenye tovuti yako, ukurasa wa mitandao au kaunta."],
          words: [["FAQ", "kifupi cha frequently asked questions (maswali yanayoulizwa mara kwa mara): orodha ya maswali ya kawaida na majibu yake."]],
          slides: [
            { title: "Maswali kumi yale yale", bullets: ["Saa za kazi, bei, maegesho, usafirishaji", "Miadi, kurudisha bidhaa, njia za malipo", "\"Mnafanya...?\""] },
            { title: "Tengeneza FAQ", bullets: ["Orodhesha maswali", "Andika majibu yako halisi kwa ufupi", "Omba AI iyafanye yawe wazi na ya kirafiki"] },
            { title: "Kagua kabla ya kuweka hadharani", bullets: ["FAQ ni ahadi", "Kila jibu lilingane na unachofanya kweli"] }
          ],
          tryIt: "Andika maswali kumi ya wateja yanayoulizwa zaidi, na jibu fupi kwa kila moja. Omba msaidizi wa AI atengeneze FAQ fupi ya kirafiki kutokana nayo, kisha kagua kila jibu.",
          youCanNow: "kutengeneza FAQ iliyokaguliwa kutokana na maswali halisi ya wateja wako.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini FAQ ni kama ahadi kwa wateja?", options: ["Kwa sababu wateja wataitegemea inachosema", "Kwa sababu ni mkataba wa kisheria", "Kwa sababu AI iliiandika", "Kwa sababu inawekwa mara moja tu"], answer: 0, why: "Wateja hufanya maamuzi kwa FAQ yako, kwa hiyo kila jibu lazima liwe la kweli." },
            { objective: "O1", q: "FAQ ya AI inasema mna maegesho ya bure, lakini hamna. Ungefanya nini?", options: ["Kuiacha ili kuvutia wateja", "Kurekebisha jibu lilingane na unachofanya kweli", "Kuongeza \"labda\" kidogo", "Kuomba AI iondoe majibu yote"], answer: 1, why: "Majibu ya FAQ yanatoka kwenye taratibu zako halisi, yakiwa yamekaguliwa na wewe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuweka sauti ya biashara yako",
          minutes: 4,
          goal: "Eleza jinsi biashara yako inavyosikika na uifanye AI iandike kwa sauti hiyo.",
          text: [
            "Sauti ya biashara yako ni jinsi biashara yako inavyosikika. Mgahawa wa familia unaweza kuwa wa upendo na uchangamfu; mtayarishaji wa kodi akawa mtulivu na wa kitaalamu; kinyozi akawa wa kupumzika na wa kijirani.",
            "Chagua maneno matatu ya sauti yako na uandike orodha fupi ya fanya na usifanye: \"Fanya: tumia majina ya kwanza, sema asante, andika kwa ufupi. Usifanye: kutumia lugha ya mitaani, kuandika kwa herufi kubwa zote, kuahidi muda.\"",
            "Mpe AI haya mwanzoni mwa mazungumzo: \"Andika kwa sauti hii katika kila jibu.\" Sasa kila jibu linasikika kama biashara ile ile, bila kujali nani katika timu yako analituma."
          ],
          steps: ["Chagua maneno matatu ya jinsi unavyotaka kusikika.", "Andika mambo matatu ya kufanya na matatu ya kutofanya.", "Yabandike mwanzoni mwa mazungumzo.", "Omba jibu la mfano na ukague kama linasikika sawa."],
          words: [["Sauti ya biashara", "jinsi biashara inavyosikika katika ujumbe wake."], ["Kinachofanana", "kilicho sawa kila mara."]],
          slides: [
            { title: "Biashara yako inasikikaje?", bullets: ["Mgahawa wa familia: wa upendo, mchangamfu", "Mtayarishaji wa kodi: mtulivu, wa kitaalamu", "Kinyozi: wa kupumzika, wa kijirani"] },
            { title: "Iandike", bullets: ["Maneno matatu ya sauti", "Mambo matatu ya kufanya na matatu ya kutofanya"] },
            { title: "Itumie na AI", bullets: ["Ibandike mwanzoni mwa mazungumzo", "Kila jibu linasikika kama biashara yako"] }
          ],
          tryIt: "Andika maneno yako matatu ya sauti na orodha yako ya fanya na usifanye. Yabandike kwa msaidizi wa AI na uombe jibu kwa \"Mko wazi Jumapili?\" Je, linasikika kama wewe?",
          youCanNow: "kueleza sauti ya biashara yako na kupata majibu ya AI yanayosikika kama biashara yako.",
          quickCheck: [
            { objective: "O2", q: "Sauti ya biashara ni nini?", options: ["Namba ya simu ya biashara yako", "Rangi za nembo yako", "Jinsi biashara yako inavyosikika katika ujumbe", "Salamu iliyorekodiwa"], answer: 2, why: "Sauti ya biashara ni jinsi biashara yako inavyosikika inapozungumza na wateja." },
            { objective: "O2", q: "Unataka kila jibu la AI lisikike kama duka lako la mikate. Ungefanya nini?", options: ["Kutumaini itakisia", "Kuomba mtindo mpya kila mara", "Kutumia herufi kubwa zote ili kusikika na furaha", "Kuweka maneno yako ya sauti na orodha ya fanya na usifanye mwanzoni mwa mazungumzo"], answer: 3, why: "Kuipa AI sauti yako mwanzoni kunasaidia kila jibu lilingane nayo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Violezo vya majibu kwa ujumbe, SMS na barua pepe",
          minutes: 5,
          goal: "Tengeneza violezo vya majibu vinavyoweza kutumika tena, vyenye nafasi za kujaza.",
          text: [
            "Kiolezo cha jibu ni jibu lililo tayari lenye nafasi wazi. Unajaza nafasi hizo kila mara, kwa hiyo unajibu kwa sekunde bila kuandika upya.",
            "Violezo vyenye manufaa: kuthibitisha miadi, kukumbusha miadi, oda iko tayari, tunachelewa, samahani bidhaa imeisha, na asante baada ya kututembelea. Uliza AI: \"Kwa sauti ya biashara yangu, andika violezo vitano vifupi vya SMS kwa biashara ya kuosha magari inayohamahama. Tumia [jina la mteja], [tarehe] na [saa] kama nafasi za kujaza.\"",
            "Weka violezo katika maelezo (notes) ya simu yako, njia za mkato za ujumbe, au kwenye zana yako ya miadi ikiwa inaruhusu majibu yaliyohifadhiwa. Usibandike kamwe majina halisi ya wateja, namba za simu au taarifa za kadi kwenye AI ili kuvitengeneza; tumia nafasi za kujaza."
          ],
          steps: ["Chagua hali tano unazojibu mara nyingi.", "Omba AI kiolezo kifupi kwa kila moja, chenye nafasi za kujaza ndani ya mabano.", "Kagua maneno na ukweli.", "Vihifadhi mahali unapoweza kuvinakili haraka."],
          words: [["Kiolezo cha jibu", "jibu lililohifadhiwa lenye nafasi unazojaza kila mara."], ["Nafasi ya kujaza", "sehemu tupu kama [jina la mteja] unayoijaza kwa taarifa halisi baadaye."]],
          slides: [
            { title: "Jibu kwa sekunde", bullets: ["Kiolezo ni jibu lililo tayari lenye nafasi wazi", "Jaza [jina la mteja], [tarehe], [saa]"] },
            { title: "Violezo vitano vyenye manufaa", bullets: ["Kuthibitisha na kukumbusha miadi", "Oda iko tayari; tunachelewa", "Samahani imeisha; asante"] },
            { title: "Viweke salama na karibu", bullets: ["Maelezo ya simu, njia za mkato au majibu yaliyohifadhiwa", "Tumia nafasi za kujaza, si taarifa halisi za wateja"] }
          ],
          tryIt: "Omba AI violezo vitano vya majibu kwa sauti ya biashara yako, vyenye [nafasi za kujaza]. Vikague na uvihifadhi mahali unapoweza kuvinakili haraka.",
          youCanNow: "kutengeneza na kuhifadhi violezo vya majibu vinavyokuwezesha kujibu wateja haraka na kwa namna ile ile.",
          quickCheck: [
            { objective: "O3", q: "Kiolezo cha jibu ni nini?", options: ["Ujumbe unaoutumia tena wenye nafasi za kujaza", "Jibu la mara moja tu", "Maoni ya mteja", "Orodha ya bei"], answer: 0, why: "Kiolezo ni jibu lililo tayari lenye nafasi unazojaza kila mara." },
            { objective: "O3", q: "Unataka kiolezo cha \"oda yako iko tayari\". Ungeipa AI nini?", options: ["Jina halisi la mteja na namba yake ya simu", "Namba ya kadi yako", "Nafasi za kujaza kama [jina la mteja] na [saa]", "Hakuna kitu kabisa"], answer: 2, why: "Nafasi za kujaza zinazuia taarifa binafsi na zinafanya kiolezo kitumike tena." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Majibu ya kila siku ya haraka na ya kirafiki zaidi",
        questions: [
          { objective: "O1", q: "FAQ ni kifupi cha nini?", options: ["Bei ya jibu la haraka", "Maswali yanayoulizwa mara kwa mara", "Swali la bure", "Mtihani wa jibu la mwisho"], answer: 1, why: "FAQ inaorodhesha maswali ya kawaida na majibu yake." },
          { objective: "O1", q: "AI imegeuza majibu yako mafupi kuwa FAQ. Nini kinafuata?", options: ["Kuiweka hadharani bila kuisoma", "Kuongeza ahadi zaidi", "Kuifuta", "Kukagua kila jibu dhidi ya unachofanya kweli"], answer: 3, why: "FAQ ni ahadi kwa wateja." },
          { objective: "O2", q: "Sauti ya biashara ni nini?", options: ["Jinsi biashara yako inavyosikika katika ujumbe", "Sauti ya mmiliki akiimba", "Namba yako ya simu", "Rangi ya nembo yako"], answer: 0, why: "Sauti ya biashara ni jinsi unavyosikika." },
          { objective: "O3", q: "Ipi ni nafasi nzuri ya kujaza katika kiolezo?", options: ["Nywila yako", "Namba ya kadi ya mteja", "[jina la mteja]", "Anwani halisi ya nyumbani"], answer: 2, why: "Nafasi za kujaza zinazuia taarifa binafsi zisiingie kwenye zana za AI." },
          { objective: "O3", q: "Kwa nini utumie violezo vya majibu?", options: ["Ili kutoza zaidi", "Ili kuwaepuka wateja", "Ili kujibu haraka na kwa namna ile ile", "Ili kuficha bei"], answer: 2, why: "Violezo vinaokoa muda na vinaweka majibu katika ubora ule ule." }
        ]
      }
    },
    {
      name: "Sura 2: Maoni ya wateja, mazungumzo magumu na uaminifu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujibu maoni ya mtandaoni, mazuri na mabaya",
          minutes: 5,
          goal: "Andika majibu ya kweli kwa maoni mazuri na mabaya, na ufuate kanuni ya FTC kuhusu maoni.",
          text: [
            "Wateja husoma jinsi unavyojibu maoni. Shukuru maoni mazuri kwa ufupi, ukitaja chakula au huduma waliyoipenda. Kwa maoni mabaya, baki mtulivu: washukuru, sema samahani kwa yaliyowapata, rekebisha unachoweza, na uwakaribishe wawasiliane nawe moja kwa moja. Usibishane hadharani wala usitoe taarifa zao binafsi.",
            "AI inakusaidia kuandika jibu tulivu wakati umekasirika. Bandika maandishi ya maoni (si taarifa binafsi za mwandishi) na uombe: \"Andika jibu fupi la adabu. Omba radhi, taja kwamba tumewafundisha upya wafanyakazi wetu kuhusu muda wa kusubiri, na uwakaribishe watupigie simu.\" Sema tu yaliyo kweli.",
            "Usiandike kamwe maoni ya uongo, usiyanunue, wala usitumie AI kuyatengeneza. Federal Trade Commission (FTC, Tume ya Biashara ya Shirikisho la Marekani) ina kanuni, inayotumika tangu Oktoba 2024, inayopiga marufuku maoni na ushuhuda wa uongo, pamoja na ule uliotengenezwa na AI, na kulipia maoni ikiwa tu ni mazuri. Soma ukurasa wa maswali na majibu wa FTC ujue kinachoruhusiwa."
          ],
          steps: ["Soma maoni mara mbili na usubiri ukiwa umekasirika.", "Omba AI rasimu fupi ya adabu.", "Hakikisha kila kauli ni ya kweli.", "Wakaribishe wateja wasioridhika wawasiliane nawe moja kwa moja.", "Usiandike, usinunue wala usitunge maoni kamwe."],
          words: [["Maoni ya mteja", "alama na maoni ya hadharani ya mteja kuhusu biashara yako."], ["FTC", "Federal Trade Commission: ofisi ya serikali ya Marekani inayowalinda watumiaji dhidi ya mbinu za biashara zisizo za haki na za udanganyifu."], ["Ushuhuda", "kauli ya mteja inayosifu biashara, inayotumika katika matangazo yake."]],
          slides: [
            { title: "Maoni mazuri", bullets: ["Washukuru, taja walichokipenda", "Iwe fupi na ya kweli"] },
            { title: "Maoni mabaya", bullets: ["Baki mtulivu; subiri ukiwa umekasirika", "Shukuru, omba radhi, rekebisha unachoweza", "Wakaribishe wawasiliane nawe moja kwa moja"] },
            { title: "Kanuni ya FTC kuhusu maoni ya uongo", bullets: ["Inapiga marufuku maoni ya uongo, pamoja na ya AI", "Inapiga marufuku kulipia maoni mazuri tu", "Inatumika tangu Oktoba 2024: angalia ftc.gov"] }
          ],
          sources: [FTC_REVIEWS, FTC_REVIEWS_PR],
          tryIt: "Tafuta maoni moja halisi kuhusu biashara yako (au andika maoni mabaya ya mfano kuhusu oda iliyochelewa). Tumia AI kuandika rasimu ya jibu tulivu, hakikisha kila kauli ni ya kweli, na uihariri iwe kwa sauti yako.",
          youCanNow: "kujibu maoni mazuri na mabaya kwa utulivu na ukweli, bila kuvunja kanuni ya FTC kuhusu maoni ya uongo.",
          quickCheck: [
            { objective: "O4", q: "Kanuni ya FTC inapiga marufuku tabia ipi kuhusu maoni?", options: ["Kujibu maoni mabaya", "Kuwalipa wateja ikiwa tu wataacha maoni mazuri", "Kuwashukuru wateja kwa maoni", "Kuwaomba wateja wote maoni ya kweli"], answer: 1, why: "Kuzawadia maoni mazuri tu kumepigwa marufuku na kanuni ya FTC." },
            { objective: "O4", q: "Maoni makali yanakukasirisha. Ungefanya nini?", options: ["Kujibu mara moja kwa herufi kubwa", "Kuweka maoni mazuri ya uongo ili kusawazisha", "Kuwaomba marafiki wabishane na mwandishi", "Kusubiri, kusoma tena, kisha kuandika jibu tulivu la kweli"], answer: 3, why: "Kusubiri kunakusaidia kujibu kwa utulivu na ukweli." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kumtuliza mteja aliyekasirika",
          minutes: 5,
          goal: "Tumia mbinu rahisi ya hatua nne, kwa msaada wa AI, kumjibu mteja aliyekasirika.",
          text: [
            "Mbinu rahisi inafaa kwa malalamiko mengi: Listen, Apologize, Solve, Thank (LAST), yaani Sikiliza, Omba radhi, Tatua, Shukuru. Sikiliza lalamiko lote, omba radhi kwa yaliyompata, toa suluhisho la haki unaloweza kulitoa kweli, na umshukuru kwa kukuambia.",
            "Amua mipaka yako kabla hujaihitaji: lini unarudisha pesa, unarudia kazi, unatoa punguzo au kitu cha bure. AI inaweza kuandika rasimu ya ujumbe, lakini wewe unachagua suluhisho. Usiiache AI iahidi kitu ambacho hujakubali.",
            "Mteja akitishia, akinyanyasa au akitaja kuumia, usalama au hatua za kisheria, fanya jibu liwe fupi, usikubali kosa kwa maandishi, na zungumza na mtaalamu au kampuni yako ya bima."
          ],
          steps: ["Sikiliza: soma au sikia lalamiko lote.", "Omba radhi kwa yaliyompata.", "Tatua: toa marekebisho ya haki ndani ya mipaka yako.", "Mshukuru kwa kukuambia.", "Omba AI iandike rasimu, kisha hakikisha ahadi ni ile utakayoitimiza."],
          words: [["LAST", "Listen, Apologize, Solve, Thank (Sikiliza, Omba radhi, Tatua, Shukuru): mbinu ya kushughulikia malalamiko."], ["Kupandisha juu", "kupeleka tatizo kubwa kwa mmiliki, mtaalamu au kampuni ya bima."]],
          slides: [
            { title: "Mbinu ya LAST", bullets: ["Listen: Sikiliza", "Apologize: Omba radhi", "Solve: Tatua", "Thank: Shukuru"] },
            { title: "Weka mipaka yako kwanza", bullets: ["Lini unarudisha pesa, unarudia kazi au unatoa punguzo", "Wewe unachagua suluhisho, si AI"] },
            { title: "Lini kupandisha juu", bullets: ["Vitisho au unyanyasaji", "Madai ya kuumia, usalama au ya kisheria", "Jibu fupi; piga simu kwa mtaalamu au bima"] }
          ],
          tryIt: "Andika mipaka yako ya kurudisha pesa na kurudia kazi kwa mistari mitatu. Kisha tumia AI kuandika rasimu ya jibu la LAST kwa: \"Keki yangu ilikuwa na ladha isiyo sahihi na sherehe imeharibika.\" Hakikisha suluhisho ni lile ungelitoa kweli.",
          youCanNow: "kumjibu mteja aliyekasirika kwa mbinu ya LAST na suluhisho la haki na la kweli.",
          quickCheck: [
            { objective: "O5", q: "Hatua ya kwanza ya mbinu ya LAST ni ipi?", options: ["Tatua", "Shukuru", "Sikiliza", "Omba radhi"], answer: 2, why: "LAST inaanza kwa kumsikiliza mteja." },
            { objective: "O5", q: "Jibu la AI kwa mteja aliyekasirika linatoa kurudisha pesa zote pamoja na huduma ya bure kwa mwezi mmoja, zaidi ya mipaka yako inavyoruhusu. Ungefanya nini?", options: ["Kulibadilisha liwe suluhisho ndani ya mipaka yako", "Kulituma kama lilivyo", "Kuondoa kuomba radhi", "Kumpuuza mteja"], answer: 0, why: "Wewe unachagua suluhisho la haki ndani ya mipaka uliyoweka, si AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Faragha, ukweli na kifurushi chako cha huduma kwa wateja",
          minutes: 5,
          goal: "Unganisha zana zako za huduma na ulinde taarifa za wateja.",
          text: [
            "Wateja wanakuamini na majina yao, namba za simu, anwani na wakati mwingine taarifa za kadi. Usiziweke kwenye zana za AI. Fanya kazi na nafasi za kujaza, na ujaze taarifa halisi mwenyewe kwenye simu yako au mfumo wako wa miadi.",
            "Ukitumia chatbot kwenye tovuti au ujumbe wako, waambie wateja kwamba wanazungumza na msaidizi wa kiotomatiki na uwape njia ya kumfikia mtu. Kagua inachosema mara kwa mara.",
            "Sasa weka vyote katika hati moja: sauti ya biashara yako, FAQ yako, violezo vyako, mbinu yako ya LAST pamoja na mipaka yako, na jibu lako kwa maoni. Wape wafanyakazi wako ili kila mtu ajibu kwa namna ile ile."
          ],
          steps: ["Hakikisha kila kiolezo kinatumia nafasi za kujaza, si taarifa halisi.", "Ukitumia chatbot, iweke alama na utoe njia ya kumfikia mtu.", "Kusanya sauti, FAQ, violezo, mipaka ya LAST na majibu ya maoni katika hati moja.", "Wape timu yako."],
          words: [["Chatbot", "programu ya kiotomatiki inayojibu ujumbe."], ["Taarifa za wateja", "habari kuhusu wateja wako, kama majina, namba za simu na oda."]],
          slides: [
            { title: "Linda taarifa za wateja", bullets: ["Hakuna majina pamoja na simu, anwani au kadi katika AI", "Tumia nafasi za kujaza; jaza taarifa mwenyewe"] },
            { title: "Ukitumia chatbot", bullets: ["Sema ni ya kiotomatiki", "Toa njia ya kumfikia mtu", "Kagua majibu yake mara kwa mara"] },
            { title: "Kifurushi chako cha huduma kwa wateja", bullets: ["Sauti ya biashara na FAQ", "Violezo na mipaka ya LAST", "Majibu ya maoni, yakitolewa kwa timu yako"] }
          ],
          tryIt: "Kazi ya mwisho: weka sauti ya biashara yako, FAQ ya maswali kumi, violezo vitano, jibu moja kwa mteja aliyekasirika na jibu moja kwa maoni katika hati moja. Kagua kila ukweli na uondoe taarifa zozote halisi za wateja.",
          youCanNow: "kuendesha huduma yako kwa wateja kwa kifurushi kilichokaguliwa, cha faragha na kinachofanana, kilichotengenezwa kwa msaada wa AI.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini uwape wafanyakazi kifurushi chako cha huduma kwa wateja?", options: ["Ili waweze kubadilisha bei", "Ili kila mtu ajibu kwa namna ile ile", "Ili waruke mafunzo", "Ili wateja waweze kukihariri"], answer: 1, why: "Kifurushi cha pamoja kinaweka majibu sawa katika timu yako yote." },
            { objective: "O6", q: "Unatengeneza violezo na una taarifa halisi za kadi ya mteja katika maelezo yako. Ungefanya nini?", options: ["Kuzibandika kwenye AI ili ielewe", "Kuzitumia kama kiolezo cha mfano", "Kuwapa wafanyakazi ndani ya kifurushi", "Kuziweka nje ya zana ya AI na nje ya kifurushi"], answer: 3, why: "Taarifa za kadi za wateja lazima zibaki nje ya zana za AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Maoni ya wateja, mazungumzo magumu na uaminifu",
        questions: [
          { objective: "O4", q: "Mteja anaacha maoni ya nyota moja kuhusu kusubiri muda mrefu. Jibu bora ni lipi?", options: ["Kumshukuru, kuomba radhi, kusema unachorekebisha, na kumkaribisha awasiliane nawe", "Kubishana kwamba amekosea", "Kuweka namba yake ya simu hadharani", "Kuyapuuza milele"], answer: 0, why: "Majibu tulivu na ya kweli yanajenga uaminifu." },
          { objective: "O4", q: "Chini ya kanuni ya FTC, kipi HAKIRUHUSIWI?", options: ["Kumshukuru mtoa maoni", "Kujibu maoni mabaya", "Kuwaomba wateja walioridhika waache maoni ya kweli", "Kutumia AI kuandika maoni ya uongo ya wateja"], answer: 3, why: "Kanuni ya FTC inapiga marufuku maoni ya uongo, pamoja na yale yaliyotengenezwa na AI." },
          { objective: "O5", q: "Herufi S katika LAST inasimama kwa nini?", options: ["Sell (Uza)", "Solve (Tatua)", "Stop (Simama)", "Smile (Tabasamu)"], answer: 1, why: "Listen, Apologize, Solve, Thank: Sikiliza, Omba radhi, Tatua, Shukuru." },
          { objective: "O5", q: "Nani anachagua suluhisho kwa mteja aliyekasirika?", options: ["Wewe, ndani ya mipaka uliyoweka", "AI", "Mteja peke yake", "Mgeni wa mtandaoni"], answer: 0, why: "AI inaandika rasimu; wewe unaamua suluhisho." },
          { objective: "O6", q: "Chatbot ya tovuti yako inapaswa:", options: ["Kujifanya kuwa mtu", "Kukusanya namba za kadi katika mazungumzo", "Kusema ni ya kiotomatiki na kutoa njia ya kumfikia mtu", "Kutokaguliwa kamwe"], answer: 2, why: "Ukweli na njia ya kumfikia mtu vinajenga uaminifu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Huduma kwa Wateja na Mawasiliano",
    questions: [
      { objective: "O1", q: "Lipi ni swali la kawaida la wateja la kuweka kwenye FAQ?", options: ["Nywila yako ni ipi?", "Saa zenu za kazi ni zipi?", "Namba yako ya benki ni ipi?", "Wamiliki wa wasambazaji wako ni akina nani?"], answer: 1, why: "Saa za kazi ni mojawapo ya maswali makuu." },
      { objective: "O1", q: "Majibu katika FAQ yako yanatoka wapi?", options: ["Maoni ya bahati nasibu", "Makisio ya AI", "Tovuti ya mshindani", "Taratibu zako halisi, zilizoandikwa na wewe, zikafanywa wazi na AI"], answer: 3, why: "AI inapanga tu majibu yako halisi." },
      { objective: "O1", q: "Kwa nini ukague FAQ kabla ya kuiweka hadharani?", options: ["Ili kuirefusha", "AI iko sahihi kila wakati", "Haihitajiki", "Ni ahadi kwa wateja"], answer: 3, why: "Wateja watakudai uitimize." },
      { objective: "O2", q: "Maneno matatu ya sauti kwa duka la mikate la familia yanaweza kuwa:", options: ["Hasira, haraka, baridi", "Upendo, furaha, urahisi", "Siri, utata, urefu", "Kisheria, ukali, ugumu"], answer: 1, why: "Maneno ya sauti yanaeleza jinsi unavyotaka kusikika." },
      { objective: "O2", q: "Unaweka sauti ya biashara yako wapi ili AI iitumie?", options: ["Kwenye risiti", "Ndani ya nywila yako", "Mwanzoni mwa mazungumzo", "Popote pale hapana"], answer: 2, why: "Kuibandika juu kabisa kunaongoza kila jibu." },
      { objective: "O2", q: "\"Usifanye\" katika orodha ya sauti ya biashara inaweza kuwa:", options: ["Kuandika kwa herufi kubwa zote", "Kusema asante", "Kutumia majina ya kwanza", "Kuandika kwa ufupi"], answer: 0, why: "Herufi kubwa zote zinaweza kusikika kama kupiga kelele." },
      { objective: "O3", q: "Kipi ni kiolezo kizuri cha jibu?", options: ["\"Nitumie nywila yako.\"", "\"Habari Jane Smith, 555-0101, kadi 4111...\"", "\"Habari [jina la mteja], oda yako iko tayari kuchukuliwa saa [saa].\"", "\"Hapana.\""], answer: 2, why: "Kinatumia nafasi za kujaza na kiko wazi." },
      { objective: "O3", q: "Unaweza kuweka violezo wapi ili uvitumie haraka?", options: ["Maelezo ya simu, njia za mkato za ujumbe au majibu yaliyohifadhiwa", "Kichwani mwako tu", "Katika sanduku la barua la mteja", "Kwenye mitandao ya kijamii hadharani"], answer: 0, why: "Violezo vilivyohifadhiwa ni rahisi kunakili haraka." },
      { objective: "O3", q: "Ili kutengeneza violezo kwa AI unapaswa kuipa:", options: ["Majina na namba halisi za wateja", "Nafasi za kujaza kama [tarehe] na [saa]", "Taarifa za kadi", "Nywila zako"], answer: 1, why: "Tumia nafasi za kujaza, si taarifa halisi." },
      { objective: "O4", q: "Maoni mazuri yanasifu \"mkia wa ng'ombe bora mjini\" wenu. Jibu zuri:", options: ["Linatoa pesa kwa maoni mengine", "Linayapuuza", "Linauliza anwani yake", "Linamshukuru na kutaja mkia wa ng'ombe"], answer: 3, why: "Shukrani fupi na ya kibinafsi inafaa zaidi." },
      { objective: "O4", q: "Kuwalipa wateja ikiwa tu wataacha maoni mazuri ni:", options: ["Marufuku chini ya kanuni ya FTC", "Lazima", "Wazo zuri", "Sawa wikendi tu"], answer: 0, why: "Kanuni inapiga marufuku zawadi zinazotegemea maoni mazuri." },
      { objective: "O4", q: "Maoni ya hasira yakikukasirisha, unapaswa kwanza:", options: ["Kuandika maoni mazuri ya uongo", "Kujibu mara moja kwa herufi kubwa zote", "Kuweka taarifa za mteja hadharani", "Kusubiri na kuyasoma tena kabla ya kujibu"], answer: 3, why: "Majibu tulivu ni majibu bora." },
      { objective: "O5", q: "Katika mbinu ya LAST, hatua ya kwanza ni:", options: ["Kucheka", "Kuondoka", "Kusikiliza", "Kudanganya"], answer: 2, why: "Sikiliza lalamiko lote kwanza." },
      { objective: "O5", q: "Kwa nini uweke mipaka ya kurudisha pesa na kurudia kazi kabla ya lalamiko?", options: ["Ili kumkatalia kila mtu", "Ili utoe suluhisho za haki utakazozitimiza kweli", "Ili kuwachanganya wafanyakazi", "Ni sheria"], answer: 1, why: "Mipaka iliyo wazi inasaidia maamuzi ya haki na ya haraka." },
      { objective: "O5", q: "Mteja anasema aliumia ndani ya duka lako. Unapaswa:", options: ["Kuliweka mtandaoni", "Kuifanya AI ikubali kosa kwa undani", "Kulipuuza", "Kufanya jibu liwe fupi na kuzungumza na mtaalamu au kampuni yako ya bima"], answer: 3, why: "Madai ya kuumia na ya kisheria yanahitaji ushauri wa kitaalamu." },
      { objective: "O5", q: "AI inaandika rasimu ya jibu inayoahidi mlo wa bure kwa mwaka mzima. Wewe:", options: ["Unaongeza ahadi zaidi", "Unalituma", "Unaiondoa ahadi hiyo isipokuwa kama uliikubali kweli", "Unamwomba mteja aamue"], answer: 2, why: "Ahidi tu kile utakachotimiza." },
      { objective: "O6", q: "Taarifa za kadi za wateja zinapaswa:", options: ["Kuwekwa nje ya zana za AI", "Kubandikwa katika mazungumzo", "Kuwekwa katika majibu", "Kuhifadhiwa katika violezo"], answer: 0, why: "Taarifa za kadi ni za faragha." },
      { objective: "O6", q: "Ukitumia chatbot, wateja wanapaswa kuweza:", options: ["Kutomfikia mtu yeyote kamwe", "Kumfikia mtu", "Kulipa kwa kadi ya zawadi tu", "Kutumia neno moja tu"], answer: 1, why: "Njia ya kumfikia mtu inajenga uaminifu." },
      { objective: "O6", q: "Kifurushi chako cha huduma kwa wateja kina:", options: ["Nywila", "Sauti, FAQ, violezo, mipaka ya LAST na majibu ya maoni", "Namba za kadi za wateja", "Maoni ya uongo"], answer: 1, why: "Sehemu hizo zinafanya huduma iwe ya haraka na inayofanana." },
      { objective: "O6", q: "Kwa nini uwape wafanyakazi kifurushi?", options: ["Ili kila mtu ajibu kwa namna ile ile", "Ili kuwachelewesha", "Ili kukificha", "Hakina manufaa"], answer: 0, why: "Kufanana kunajenga uaminifu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 3, 6, 8, 9, 10, 12, 13, 16]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Sauti ya biashara", objective: "O2", notYet: "Hakuna maneno ya sauti au hakuna orodha ya fanya na usifanye.", meets: "Maneno matatu ya sauti na orodha ya fanya na usifanye.", exceeds: "Majibu ya mfano yanalingana wazi na sauti hiyo." },
      { name: "FAQ iliyokaguliwa", objective: "O1", notYet: "Maswali chini ya kumi, au jibu lisilo la kweli.", meets: "Maswali kumi ya kawaida, na majibu yamekaguliwa dhidi ya unachofanya kweli.", exceeds: "Majibu ni mafupi na kwa sauti ya biashara." },
      { name: "Violezo vya majibu", objective: "O3", notYet: "Chini ya vitano, au violezo vyenye taarifa halisi za wateja.", meets: "Violezo vitano vilivyokaguliwa vyenye nafasi za kujaza.", exceeds: "Vimehifadhiwa mahali wafanyakazi wanapoweza kuvinakili haraka." },
      { name: "Jibu kwa mteja aliyekasirika", objective: "O5", notYet: "Linajitetea, au linatoa suluhisho ambalo usingelitoa.", meets: "Linafuata LAST na linatoa suluhisho ndani ya mipaka yako.", exceeds: "Mipaka yako ya kurudisha pesa na kurudia kazi imeandikwa katika kifurushi." },
      { name: "Jibu kwa maoni", objective: "O4", notYet: "Linabishana, linasema jambo lisilo la kweli, au halipo.", meets: "Tulivu, la kweli na kwa sauti yako.", exceeds: "Linasema unachorekebisha na linamkaribisha mteja awasiliane nawe." },
      { name: "Faragha na ukweli", objective: "O6", notYet: "Taarifa halisi za wateja katika kifurushi au katika mazungumzo ya AI, au ukweli usiokaguliwa.", meets: "Hakuna taarifa binafsi za wateja zilizotumika, na kila ukweli umekaguliwa.", exceeds: "Kifurushi kinaeleza jinsi chatbot, ikitumika, inavyosema ni ya kiotomatiki na kutoa njia ya kumfikia mtu." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaotumia FAQ au violezo vyao kila wiki (utafiti wa kufuatilia baada ya siku 30)",
      "Wamiliki wanaojibu kila maoni mapya ya mtandaoni ndani ya wiki moja (utafiti wa kufuatilia)",
      "Wamiliki wanaoripoti majibu ya haraka zaidi au maoni bora zaidi ndani ya siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Zana ya bure ya hati kama Google Docs au Microsoft Word kwa ajili ya kifurushi",
      "Orodha ya maswali halisi ya wateja na mipaka yako ya kurudisha pesa na kurudia kazi",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Waombe wamiliki walete maswali yao halisi ya kawaida na maoni moja halisi au ya mfano.",
      "Tumia majina ya wateja ya mfano tu; usibandike kamwe ujumbe halisi wa wateja wenye majina au namba kwenye AI.",
      "Igizeni mbinu ya LAST wawili wawili kwa lalamiko la kubuni kabla ya kuandika jibu.",
      "Wakumbushe wamiliki kwamba madai ya kuumia yanapelekwa kwa mtaalamu au kampuni yao ya bima, si kwa jibu la AI.",
      "Pima kifurushi kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
