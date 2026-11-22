"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-restaurants.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FDA_ALLERGENS = { name: "FDA (Mamlaka ya Chakula na Dawa ya Marekani): Mzio wa chakula (vyakula tisa vikuu vinavyosababisha mzio)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" };
const FDA_CODE = { name: "FDA: Food Code (kanuni za usalama wa chakula)", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code" };
const FTC_REVIEWS = { name: "FTC (Tume ya Biashara ya Marekani): Kanuni ya maoni ya wateja na shuhuda, Maswali na Majibu", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-restaurants-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-restaurants",
  category: "Small Business",
  name: "AI kwa Migahawa",
  skills: "Kuandika maelezo ya vyakula kwenye menyu, Kutengeneza chati ya vyakula vya mzio kutoka kwa mapishi, Kuandaa orodha za maandalizi na za kuagiza, Kuandaa rasimu ya ratiba ya wafanyakazi, Kujibu maoni ya wateja, Kupanga vyakula maalum",
  outcome: "kutumia AI kuendesha kazi za ofisini za mgahawa mdogo au gari la chakula: kuandika maelezo ya vyakula kwenye menyu, kutengeneza chati ya vyakula vya mzio kutoka kwa mapishi yako na kuikagua, kuandaa orodha za maandalizi na za kuagiza kutokana na mauzo yako, kuandaa rasimu ya ratiba ya haki ya wafanyakazi, na kujibu maoni ya wateja kwa uaminifu.",
  about: [
    "Kozi hii ni ya wamiliki, mameneja na wapishi wa migahawa midogo, mikahawa, magari ya chakula, wanaopika kwa sherehe na jiko la chakula cha nyumbani. Wanafunzi wetu wengi wanaendesha migahawa ya familia na ya jamii za wachache, ambapo mmiliki pia anapika, anaagiza bidhaa na anajibu simu.",
    "Utatumia msaidizi wa AI wa bure na spreadsheet (jedwali la kompyuta) kuokoa muda wa kuandika, kupanga na kazi za makaratasi. Kanuni za usalama wa chakula na za vyakula vya mzio zinatoka kwenye vyanzo rasmi na idara ya afya ya eneo lako, si kwa AI; kozi hii inakuonyesha mahali pa kuangalia.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza kifurushi cha mgahawa wako: maelezo ya menyu kwa vyakula vitano, chati ya vyakula vya mzio kwa vyakula hivyo vitano iliyotengenezwa kutoka kwa mapishi yako halisi na lebo za viungo (uliyoikagua mwenyewe dhidi ya vyakula tisa vikuu vya mzio vya FDA), orodha ya maandalizi na orodha ya kuagiza kwa wiki moja kulingana na mauzo yako, rasimu ya ratiba ya wafanyakazi, na majibu kwa maoni mazuri moja na mabaya moja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki, mameneja na wapishi wa migahawa midogo, mikahawa, magari ya chakula, wanaopika kwa sherehe na jiko la chakula cha nyumbani, wengi wao wa familia na wa jamii za wachache, ambapo mmiliki pia anapika, anaagiza bidhaa na anajibu simu.",
    startingPoint: "Wanaweza kupika, kuendesha zamu na kupokea oda. Wengi wanatumia simu na mfumo wa mauzo (POS), lakini wana uzoefu mdogo au hawana kabisa wa wasaidizi wa AI au fomula za spreadsheet.",
    gap: "Kuandika, kupanga na kazi za makaratasi vinachukua saa ambazo mmiliki hana. Wanafunzi wanahitaji kutumia AI kuokoa muda huo huku wakihakikisha taarifa za vyakula vya mzio, kanuni za kazi na majibu kwa maoni ni sahihi na ya kweli, kwa sababu kosa linaweza kumdhuru mteja au kuvunja kanuni.",
    constraints: [
      "Muda: wamiliki wanafanya zamu ndefu, kwa hiyo kila somo ni kama dakika 5",
      "Vifaa: mara nyingi ni simu au kompyuta moja ya ofisini inayotumiwa na wote",
      "Kanuni za usalama wa chakula na vyakula vya mzio zinatoka FDA na idara ya afya ya eneo lako, si kwa AI",
      "Kanuni za kazi kuhusu mapumziko, saa za ziada (overtime) na watoto wanaofanya kazi zinategemea jimbo na jiji",
      "Faragha: usiweke namba za Social Security, mishahara pamoja na majina, wala maelezo binafsi ya wafanyakazi kwenye zana za AI"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kwanza kusoma kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa viungo halisi na njia ya kupika chakula", action: "kuandika maelezo mafupi ya menyu kwa msaada wa AI na kuondoa chochote kisicho cha kweli", standard: "kila neno la kiungo likilingana na mapishi yako" },
    { id: "O2", condition: "Ukitumia mapishi yako mwenyewe na lebo za bidhaa unazonunua", action: "kutengeneza chati ya vyakula vya mzio inayoonyesha vyakula tisa vikuu vya mzio vya FDA kwa kila chakula", standard: "kila chakula kikiwa kimekaguliwa na mtu wa pili" },
    { id: "O3", condition: "Ukipewa wastani wa mauzo yako kwa siku na sahani kwa kila mpiko", action: "kutengeneza orodha ya maandalizi ya wiki na orodha ya kuagiza kwenye spreadsheet", standard: "mipiko ikiwa imezungushwa juu na kurekebishwa kwa matukio, wikendi na hali ya hewa" },
    { id: "O4", condition: "Ukipewa saa zako za kazi, zamu, na majina ya kwanza ya wafanyakazi na muda wao wa kupatikana", action: "kuandaa rasimu ya ratiba ya wafanyakazi ya wiki kwa AI na kuikagua kwa idadi ya kutosha, haki na kanuni za kazi", standard: "bila maelezo binafsi ya wafanyakazi kwenye prompt" },
    { id: "O5", condition: "Ukipewa swali la mteja au maoni mazuri au mabaya", action: "kuandika jibu tulivu na la kweli kwa msaada wa AI", standard: "kila kauli ikiwa ya kweli na bila maoni bandia au ya kulipiwa" },
    { id: "O6", condition: "Ukipewa viungo vya ziada au vya msimu", action: "kupanga chakula maalum cha wiki, kukokotoa gharama ya sahani yake na kuweka bei yenye faida", standard: "vyakula vya mzio vikiwa vimekaguliwa na chakula hicho kikiwa kimeongezwa kwenye orodha ya maandalizi" }
  ],
  chapters: [
    {
      name: "Sura 1: Menyu, vyakula vya mzio na orodha za jikoni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika maelezo ya menyu",
          minutes: 5,
          goal: "Andika maelezo mafupi, ya kuvutia na sahihi ya vyakula kwenye menyu kwa msaada wa AI.",
          text: [
            "Maelezo mazuri ya menyu yanasema chakula kina nini, kimepikwa vipi, na kwa nini ni maalum, kwa maneno 10 hadi 25. \"Wali wa jollof uliopikwa polepole kwenye mchuzi wa nyanya na pilipili, pamoja na ndizi za kukaanga na paja la kuku la kuchoma.\"",
            "Mpe AI viungo halisi na njia ya kupika: \"Andika maelezo ya menyu ya maneno 20 kwa: mchuzi wa mbuzi wenye mifupa, uliopikwa polepole saa 4 na pilipili kali, thyme na viazi, pamoja na wali mweupe. Maneno rahisi na ya kukaribisha.\" Omba matoleo matatu na uchague moja.",
            "Yakague. AI inaweza kuongeza viungo usivyotumia (\"pamoja na korosho\") au maneno kama \"organic\" au \"limetengenezwa hapa\" yasiyo ya kweli. Kiungo kisicho sahihi kwenye menyu kinaweza kumdhuru mtu mwenye mzio."
          ],
          steps: ["Andika viungo halisi na njia ya kupika.", "Muombe AI maelezo mafupi matatu.", "Chagua moja na ukague kila neno la kiungo.", "Ondoa chochote kisicho cha kweli, kama \"organic\"."],
          words: [["Maelezo ya menyu", "maandishi mafupi chini ya jina la chakula yanayowaambia wateja ni nini."]],
          slides: [
            { title: "Maelezo mazuri", bullets: ["Kina nini", "Kimepikwa vipi", "Kwa nini ni maalum, kwa maneno 10 hadi 25"] },
            { title: "Mpe AI mapishi halisi", bullets: ["Viungo na njia ya kupika", "Omba matoleo matatu"] },
            { title: "Kagua kila neno", bullets: ["Hakuna viungo usivyotumia", "Hakuna \"organic\" au \"limetengenezwa hapa\" isipokuwa ni kweli", "Viungo visivyo sahihi vinaweza kuwadhuru wateja wenye mzio"] }
          ],
          tryIt: "Andika maelezo ya menyu kwa vyakula vyako vitano kwa msaada wa AI. Kagua kila neno la kiungo dhidi ya mapishi yako.",
          youCanNow: "kuandika maelezo ya menyu yaliyo sahihi na ya kuvutia kwa msaada wa AI.",
          quickCheck: [
            { objective: "O1", q: "Maelezo mazuri ya menyu yanasema mambo gani matatu?", options: ["Chakula kina nini, kimepikwa vipi, na kwa nini ni maalum", "Bei, jina la mpishi na ukubwa wa sahani", "Kalori, msambazaji na tarehe", "Jina la chakula tu kwa herufi kubwa"], answer: 0, why: "Somo linasema maelezo mazuri yanataja kina nini, kimepikwa vipi na kwa nini ni maalum." },
            { objective: "O1", q: "AI inaandika \"tortilla za organic zilizotengenezwa hapa\" lakini unanunua tortilla za kawaida. Unafanya nini?", options: ["Unaiacha kwa sababu inasikika vizuri zaidi", "Unaondoa \"zilizotengenezwa hapa\" na \"organic\" kwa sababu si kweli", "Unaongeza maneno zaidi kama \"za kisanii\"", "Unaiomba AI iiandike kwa herufi kubwa"], answer: 1, why: "Maneno ya menyu lazima yawe ya kweli, kwa hiyo unaondoa chochote ambacho AI iliongeza na wewe hukifanyi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutengeneza chati ya vyakula vya mzio kwa usalama",
          minutes: 6,
          goal: "Tengeneza chati ya vyakula vya mzio kutoka kwa mapishi na lebo zako, ukiikagua mwenyewe.",
          text: [
            "FDA inataja vyakula tisa vikuu vinavyosababisha mzio: maziwa, mayai, samaki, samakigamba (kama kamba na kaa), karanga za miti, karanga (njugu), ngano, soya na ufuta. Wateja wenye mzio wanakutegemea ujue kilichomo kwenye kila chakula.",
            "Tengeneza chati: vyakula upande wa kushoto, vyakula tisa vya mzio juu. Ijaze kutoka kwa mapishi yako halisi NA lebo za viungo vya kila kitu unachonunua, kwa sababu michuzi, mchanganyiko wa viungo na mikate mara nyingi huficha vyakula vya mzio. AI inaweza kukusaidia kupanga jedwali na kukukumbusha viungo vipi mara nyingi vina chakula cha mzio, lakini haijui bidhaa za wasambazaji wako. Wewe na lebo zako ndio mnajua.",
            "Sasisha chati kila mapishi au msambazaji anapobadilika. Wafundishe wafanyakazi kusema \"Ngoja niangalie\" na kuuliza jikoni, wasibahatishe kamwe. Idara ya afya ya eneo lako na Food Code ya FDA zina kanuni kuhusu usalama wa chakula na uelewa wa vyakula vya mzio; angalia kinachotumika mahali ulipo."
          ],
          steps: ["Orodhesha vyakula vyako na kila kiungo kilichomo.", "Soma lebo ya kila kiungo unachonunua.", "Weka alama kwa kila kimoja kati ya vyakula tisa vya mzio kwa kila chakula.", "Mtu wa pili aikague chati.", "Isasishe mapishi au wasambazaji wanapobadilika."],
          words: [["Chakula cha mzio (allergen)", "chakula kinachoweza kusababisha mzio mkali kwa baadhi ya watu."], ["Mguso mtambuka (cross-contact)", "chakula cha mzio kinapoingia kwenye chakula kingine kupitia sehemu, mafuta au vyombo vinavyotumika pamoja."], ["Food Code", "kanuni za mfano za FDA za usalama wa chakula ambazo majimbo na kaunti nyingi zinazitumia."]],
          slides: [
            { title: "Vyakula tisa vikuu vya mzio vya FDA", bullets: ["Maziwa, mayai, samaki, samakigamba", "Karanga za miti, karanga (njugu), ngano", "Soya, ufuta"] },
            { title: "Tengeneza chati kwa ukweli", bullets: ["Vyakula pembeni, vyakula vya mzio juu", "Mapishi yako NA lebo ya kila kiungo", "AI inapanga jedwali; haijui wasambazaji wako"] },
            { title: "Iweke sahihi", bullets: ["Mtu wa pili aikague", "Isasishe mapishi au wasambazaji wanapobadilika", "Wafanyakazi wasibahatishe: \"Ngoja niangalie\""] },
            { title: "Kanuni mahali ulipo", bullets: ["Idara ya afya ya eneo lako", "Food Code ya FDA"] }
          ],
          sources: [FDA_ALLERGENS, FDA_CODE],
          tryIt: "Muombe AI apange chati tupu ya vyakula vya mzio kwa vyakula vitano, na vyakula tisa vya mzio kama safu. Ijaze mwenyewe kutoka kwa mapishi na lebo zako, kisha mtu mwingine aikague.",
          youCanNow: "kutengeneza na kutunza chati ya vyakula vya mzio kutoka kwa mapishi na lebo zako mwenyewe.",
          quickCheck: [
            { objective: "O2", q: "Nini kinakaa juu ya chati ya vyakula vya mzio katika somo hili?", options: ["Bei zako", "Majina ya wasambazaji wako", "Vyakula tisa vikuu vya mzio", "Majina ya wafanyakazi wako"], answer: 2, why: "Vyakula vinakaa pembeni na vyakula tisa vya mzio vinakaa juu." },
            { objective: "O2", q: "Msambazaji wako anabadilisha aina ya mchanganyiko wa viungo unaotumia. Unafanya nini?", options: ["Hakuna, mchanganyiko wa viungo hauna vyakula vya mzio kamwe", "Unaiuliza AI kama aina mpya ina vyakula vya mzio na kuiamini", "Unasubiri hadi mteja aulize", "Unasoma lebo mpya na kusasisha chati"], answer: 3, why: "AI haijui bidhaa za wasambazaji wako; unasasisha chati kutoka kwa lebo mpya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Orodha za maandalizi na za kuagiza kutokana na mauzo yako",
          minutes: 5,
          goal: "Tengeneza orodha ya maandalizi ya wiki na orodha ya kuagiza kutokana na namba za mauzo yako.",
          text: [
            "Kuandaa kupita kiasi kunapoteza chakula; kuandaa kidogo kunamaanisha \"samahani, kimekwisha\". Anza na idadi ya kila chakula unachouza kwa siku. Mfumo wako wa mauzo (POS) mara nyingi unaweza kuonyesha hili, au weka hesabu rahisi.",
            "Kwenye spreadsheet: Chakula, Wastani wa mauzo kwa siku, Sahani kwa kila mpiko, Mipiko inayohitajika. Kisha orodhesha viungo kwa kila sahani ili uone cha kuagiza. Muombe AI msaada wa fomula: \"Niandikie fomula ya Google Sheets ya kuzungusha juu mipiko inayohitajika: wastani wa mauzo ugawanywe kwa sahani kwa kila mpiko.\" (=ROUNDUP(B2/C2,0) ni njia moja.)",
            "Rekebisha kwa unachokijua: wikendi, matukio, hali ya hewa, sikukuu. AI inaweza kupendekeza mpangilio wa orodha ya maandalizi na orodha ya kukagua, lakini namba zako na uzoefu wako ndivyo vinavyoweka viwango."
          ],
          steps: ["Pata wastani wa mauzo kwa siku kwa kila chakula.", "Ongeza sahani kwa kila mpiko na ukokotoe mipiko kwa ROUNDUP.", "Orodhesha viungo kwa kila sahani na ujumlishe oda.", "Rekebisha kwa wikendi, matukio na hali ya hewa."],
          words: [["Orodha ya maandalizi", "orodha ya kile jiko linachopaswa kuandaa kabla ya huduma."], ["Kiwango cha akiba (par level)", "kiasi cha bidhaa unachotaka kuwa nacho mwanzoni mwa huduma."], ["Mpiko (batch)", "kupika mapishi mara moja na kupata idadi fulani ya sahani."]],
          slides: [
            { title: "Upotevu au kuishiwa", bullets: ["Kuandaa kupita kiasi kunapoteza chakula", "Kuandaa kidogo kunawakatisha tamaa wateja", "Anza na mauzo ya kila chakula"] },
            { title: "Jedwali rahisi la maandalizi", bullets: ["Chakula, mauzo kwa siku, sahani kwa kila mpiko", "Mipiko = ROUNDUP(mauzo / sahani, 0)", "Viungo kwa kila sahani -> orodha ya kuagiza"] },
            { title: "Tumia unachokijua", bullets: ["Wikendi, matukio, hali ya hewa", "AI inasaidia mpangilio; wewe unaweka viwango"] }
          ],
          tryIt: "Tengeneza jedwali la maandalizi kwa vyakula vitano lenye mauzo kwa siku, sahani kwa kila mpiko na fomula ya ROUNDUP ya mipiko. Ligeuze kuwa orodha ya kuagiza kwa wiki moja.",
          youCanNow: "kutengeneza orodha za maandalizi na za kuagiza kutokana na namba za mauzo yako mwenyewe.",
          quickCheck: [
            { objective: "O3", q: "Kuandaa kupita kiasi kunaleta tatizo gani?", options: ["Chakula kinapotea", "Chakula kinakwisha", "Saa ndefu zaidi za kufungua", "Kodi ya juu zaidi"], answer: 0, why: "Somo linasema kuandaa kupita kiasi kunapoteza chakula na kuandaa kidogo kunamaanisha chakula kinakwisha." },
            { objective: "O3", q: "Kuna tamasha kubwa mjini wikendi hii. Unafanya nini na orodha yako ya maandalizi?", options: ["Unatumia namba za kawaida kama zilivyo", "Unaongeza viwango kulingana na unachokijua", "Unaiacha AI iweke viwango bila mabadiliko", "Unaacha kutengeneza orodha ya maandalizi"], answer: 1, why: "Unarekebisha kwa matukio, wikendi na hali ya hewa, kwa sababu uzoefu wako ndio unaoweka viwango." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Menyu, vyakula vya mzio na orodha za jikoni",
        questions: [
          { objective: "O1", q: "Maelezo ya menyu ya AI yanaongeza \"pamoja na korosho\" lakini chakula chako hakina. Unafanya nini?", options: ["Unayaacha; yanasikika vizuri", "Unayaondoa", "Unaongeza korosho", "Unapuuza"], answer: 1, why: "Viungo visivyo sahihi vinaweza kuwadhuru wateja wenye mzio na kumpotosha kila mtu." },
          { objective: "O2", q: "FDA inataja vyakula vikuu vingapi vya mzio?", options: ["Ishirini", "Vitatu", "Kumi na vinne", "Tisa"], answer: 3, why: "FDA inataja tisa, pamoja na ufuta." },
          { objective: "O2", q: "Taarifa za vyakula vya mzio kwenye chati yako zinatoka wapi?", options: ["Mapishi yako na lebo za unachonunua", "Kubahatisha kwa AI", "Menyu ya mshindani", "Wateja"], answer: 0, why: "Mapishi na lebo zako tu ndizo zinazoonyesha kilichomo hasa kwenye chakula chako." },
          { objective: "O2", q: "Mteja anauliza kama chakula kina ufuta na huna uhakika. Wewe:", options: ["Unaiuliza AI", "Unabahatisha hapana", "Unasema \"Ngoja niangalie\" na kuuliza jikoni na kuangalia chati", "Unasema hakuna shida"], answer: 2, why: "Usibahatishe kamwe kuhusu vyakula vya mzio." },
          { objective: "O3", q: "Unauza 22 kwa siku na mpiko mmoja unatoa 8. Kwa ROUNDUP, mipiko mingapi?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2.75, ikizungushwa juu inakuwa 3." }
        ]
      }
    },
    {
      name: "Sura 2: Wafanyakazi, wateja na ukuaji",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandaa rasimu ya ratiba ya wafanyakazi",
          minutes: 5,
          goal: "Andaa rasimu ya ratiba ya wiki kwa msaada wa AI, kisha uikague dhidi ya kanuni zako.",
          text: [
            "Mpe AI ukweli: saa zako za kazi, watu wangapi unahitaji kila zamu, muda ambao kila mfanyakazi anapatikana na kazi zake, na kanuni zako. \"Niandalie rasimu ya ratiba ya wiki kwa mgahawa wangu wa taco, unaofunguliwa 11-9 Jumanne hadi Jumapili. Nahitaji wapishi 2 na wahudumu 2 wa mbele wakati wa mchana na jioni. Huu ndio muda wa kupatikana: [majina ya kwanza tu].\"",
            "Kagua rasimu mwenyewe. Hakikisha ni ya haki, inajaza nyakati zenye shughuli nyingi, na inafuata sheria za kazi kuhusu mapumziko, saa za ziada na watoto wanaofanya kazi. Kanuni hizo zinategemea jimbo na jiji lako; angalia idara ya kazi ya jimbo lako au mtaalamu. AI haizijui kwa uhakika.",
            "Usiweke namba za Social Security, viwango vya mshahara pamoja na majina, wala maelezo binafsi ya wafanyakazi kwenye zana za AI. Majina ya kwanza na muda wa kupatikana vinatosha."
          ],
          steps: ["Orodhesha zamu na watu wanaohitajika.", "Orodhesha wafanyakazi kwa jina la kwanza pamoja na muda wa kupatikana na kazi zao.", "Muombe AI rasimu.", "Kagua haki, idadi ya kutosha na kanuni za kazi za jimbo lako.", "Bandika ratiba ya mwisho."],
          words: [["Muda wa kupatikana", "siku na saa ambazo mfanyakazi anaweza kufanya kazi."], ["Saa za ziada (overtime)", "saa za ziada ambazo huenda zikahitaji malipo ya juu zaidi chini ya sheria ya kazi."], ["Idadi ya kutosha (coverage)", "kuwa na wafanyakazi wa kutosha kila zamu."]],
          slides: [
            { title: "Mpe AI ukweli", bullets: ["Saa za kazi na wafanyakazi wanaohitajika kila zamu", "Majina ya kwanza, muda wa kupatikana na kazi zao"] },
            { title: "Wewe unakagua rasimu", bullets: ["Ya haki na inajaza nyakati zenye shughuli nyingi", "Mapumziko, saa za ziada na watoto: angalia kanuni za jimbo lako"] },
            { title: "Linda taarifa za wafanyakazi", bullets: ["Hakuna SSN wala mishahara pamoja na majina", "Majina ya kwanza na muda wa kupatikana vinatosha"] }
          ],
          tryIt: "Andaa rasimu ya ratiba ya wiki ijayo kwa AI ukitumia majina ya kwanza na muda wa kupatikana. Kagua idadi ya kutosha na haki, na uandike mahali utakapoangalia kanuni za jimbo lako kuhusu mapumziko na saa za ziada.",
          youCanNow: "kuandaa rasimu ya ratiba ya wafanyakazi kwa AI na kuikagua dhidi ya mahitaji yako na kanuni za kazi.",
          quickCheck: [
            { objective: "O4", q: "AI inahitaji ukweli gani ili kuandaa rasimu ya ratiba?", options: ["Namba za Social Security na mishahara ya wafanyakazi", "Jina la mgahawa tu", "Saa zako za kazi, watu wanaohitajika kila zamu, na muda wa kupatikana na kazi za wafanyakazi", "Maelezo binafsi kuhusu kila mfanyakazi"], answer: 2, why: "Saa, mahitaji ya zamu, muda wa kupatikana na kazi vinatosha; maelezo binafsi yanabaki nje." },
            { objective: "O4", q: "Rasimu ya AI inampangia kijana wa miaka 16 zamu ya usiku. Unafanya nini?", options: ["Unaibandika kama ilivyo", "Unaiuliza AI kama ni halali na kuamini jibu", "Unamwondoa mfanyakazi huyo kwenye ratiba milele", "Unaangalia kanuni za jimbo lako kuhusu watoto na kurekebisha rasimu"], answer: 3, why: "Kanuni kuhusu watoto zinategemea jimbo lako, kwa hiyo unazikagua na kurekebisha ratiba mwenyewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujibu maoni na ujumbe wa wateja",
          minutes: 5,
          goal: "Jibu maoni na maswali ya kawaida ya wateja haraka na kwa uaminifu.",
          text: [
            "Wateja wanauliza mambo yale yale: saa za kazi, maegesho, kuhifadhi meza, huduma ya chakula kwa sherehe, vyakula visivyo na nyama wala bidhaa za wanyama (vegan), mzio. Tumia AI kugeuza majibu yako halisi kuwa majibu mafupi unayoweza kubandika. Kwa maswali ya mzio, kila wakati elekeza kwenye chati yako ya vyakula vya mzio iliyokaguliwa na kwa wafanyakazi.",
            "Kwa maoni: shukuru maoni mazuri kwa ufupi na utaje chakula. Kwa mabaya, tulia, omba msamaha kwa uzoefu huo, sema unachorekebisha, na mkaribishe awasiliane nawe. Usibishane hadharani. Ukiwa na hasira, iache AI iandike toleo tulivu, kisha ukague kwamba kila kauli ni ya kweli.",
            "Usiandike kamwe maoni bandia wala kulipa kwa maoni mazuri tu. Kanuni ya FTC kuhusu maoni ya wateja inakataza hili, pamoja na maoni bandia yaliyoandikwa na AI."
          ],
          steps: ["Andika majibu halisi kwa maswali makuu ya wateja wako.", "Muombe AI atengeneze majibu mafupi tayari kubandika.", "Andaa majibu ya maoni kwa utulivu kwa AI, kisha uyakague.", "Usitengeneze wala kununua maoni kamwe."],
          words: [["Maoni (review)", "tathmini na maoni ya mteja yanayoonekana hadharani."], ["Huduma ya chakula kwa sherehe (catering)", "kutoa chakula kwa tukio nje ya huduma ya kawaida ya kula mgahawani."]],
          slides: [
            { title: "Majibu tayari kubandika", bullets: ["Saa za kazi, maegesho, kuhifadhi meza, huduma kwa sherehe", "Maswali ya mzio: tumia chati yako iliyokaguliwa"] },
            { title: "Kujibu maoni", bullets: ["Mazuri: shukuru, taja chakula", "Mabaya: tulia, omba msamaha, rekebisha, karibisha mawasiliano", "Kagua kwamba kila kauli ni ya kweli"] },
            { title: "Hakuna maoni bandia", bullets: ["Kanuni ya FTC inakataza maoni bandia", "Pamoja na yaliyoandikwa na AI"] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Muombe AI aandae majibu kwa maoni mazuri moja na mabaya moja (halisi au ya mfano, kama chakula baridi siku ya Ijumaa yenye shughuli nyingi). Hakikisha kila kauli ni ya kweli na kwa sauti yako.",
          youCanNow: "kujibu maswali na maoni ya wateja haraka, kwa utulivu na kwa uaminifu.",
          quickCheck: [
            { objective: "O5", q: "Unapaswa kujibu vipi maoni mazuri?", options: ["Shukuru kwa ufupi na utaje chakula", "Yapuuze", "Mpe pesa kwa maoni mengine", "Andika hadithi ndefu kuhusu mgahawa wako"], answer: 0, why: "Somo linasema shukuru maoni mazuri kwa ufupi na utaje chakula." },
            { objective: "O5", q: "Una hasira kuhusu maoni mabaya yasiyo ya haki. Unafanya nini?", options: ["Unabishana na mteja hadharani", "Unaiacha AI iandike jibu tulivu, kisha unakagua kwamba kila kauli ni ya kweli", "Unaweka maoni mazuri bandia kuyaficha", "Unafuta ukurasa wa biashara yako"], answer: 1, why: "AI inaweza kukusaidia kutulia, na wewe unakagua kwamba jibu ni la kweli; hubishani hadharani wala hutengenezi maoni bandia." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupanga vyakula maalum kwa kutumia ulicho nacho",
          minutes: 5,
          goal: "Panga chakula maalum cha wiki kinachopunguza upotevu na kuleta faida.",
          text: [
            "Vyakula maalum vinaweza kuuza bidhaa za ziada kabla hazijaharibika, kujaribu vyakula vipya na kuwarudisha wateja wa kawaida. Angalia ulichoagiza kupita kiasi au kilicho cha msimu.",
            "Uliza AI: \"Nina ndizi, maharage meusi na mapaja ya kuku ya ziada wiki hii. Nipendekezee vyakula maalum vitatu vinavyoendana na menyu yangu ya Karibiani na vinavyotumia hasa hivi.\" Chagua kimoja, kokotoa gharama yake (viungo kwa kila sahani), na uweke bei yenye faida.",
            "Andika maelezo ya chakula hicho maalum, kagua vyakula vya mzio kwa njia ya chati yako, kiongeze kwenye orodha ya maandalizi, na ukitangaze pamoja na picha ya chakula halisi."
          ],
          steps: ["Orodhesha viungo vya ziada au vya msimu.", "Muombe AI mawazo ya vyakula maalum vinavyoendana na menyu yako.", "Kokotoa gharama ya sahani na uweke bei yenye faida.", "Kagua vyakula vya mzio na ukiongeze kwenye orodha ya maandalizi.", "Kitangaze pamoja na picha halisi."],
          words: [["Gharama ya sahani", "gharama ya viungo vilivyomo kwenye sahani moja."], ["Asilimia ya gharama ya chakula", "gharama ya sahani ikigawanywa kwa bei ya menyu, mara 100."]],
          slides: [
            { title: "Kwa nini vyakula maalum", bullets: ["Tumia bidhaa za ziada kabla hazijaharibika", "Jaribu vyakula vipya", "Warudishe wateja wa kawaida"] },
            { title: "AI kwa mawazo", bullets: ["Orodhesha ulicho nacho cha ziada", "Omba vyakula maalum vinavyoendana na menyu yako"] },
            { title: "Kabla ya kutangaza", bullets: ["Kokotoa gharama ya sahani na uweke bei", "Kagua vyakula vya mzio; ongeza kwenye orodha ya maandalizi", "Tumia picha halisi"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza kifurushi cha mgahawa wako: maelezo matano ya menyu, chati ya vyakula vya mzio kutoka kwa mapishi na lebo zako, orodha za maandalizi na za kuagiza za wiki moja, rasimu ya ratiba, majibu mawili ya maoni, na chakula maalum kimoja pamoja na gharama ya sahani yake.",
          youCanNow: "kutumia AI kwa usalama katika mipango, makaratasi na mawasiliano na wateja wa mgahawa wako.",
          quickCheck: [
            { objective: "O6", q: "Ni sababu gani moja ya kuwa na chakula maalum?", options: ["Kupandisha bei ya kila kitu", "Kumaliza saa za wafanyakazi", "Kuuza bidhaa za ziada kabla hazijaharibika", "Kuepuka kukagua vyakula vya mzio"], answer: 2, why: "Vyakula maalum vinaweza kuuza bidhaa za ziada, kujaribu vyakula vipya na kuwarudisha wateja wa kawaida." },
            { objective: "O6", q: "AI inapendekeza vyakula maalum vitatu kutokana na ndizi zako za ziada. Unafanya nini baadaye?", options: ["Unavitangaza vyote vitatu mara moja na picha za mtandaoni", "Unaiomba AI iweke bei", "Unaacha kukokotoa gharama kwa sababu ni kwa wiki moja tu", "Unachagua kimoja, unakokotoa gharama ya sahani na kuweka bei yenye faida"], answer: 3, why: "Unakokotoa gharama ya sahani na kuweka bei yenye faida, kisha unakagua vyakula vya mzio na kukiongeza kwenye orodha ya maandalizi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Wafanyakazi, wateja na ukuaji",
        questions: [
          { objective: "O4", q: "Unaangalia wapi kanuni za mapumziko na saa za ziada?", options: ["Idara ya kazi ya jimbo lako au mtaalamu", "Rasimu ya AI", "Mteja", "Chapisho la mitandao ya kijamii"], answer: 0, why: "Kanuni za kazi zinategemea jimbo na jiji lako." },
          { objective: "O4", q: "Taarifa zipi za wafanyakazi ziingie kwenye prompt ya ratiba ya AI?", options: ["Anwani za nyumbani", "Namba za Social Security", "Mishahara pamoja na majina", "Majina ya kwanza na muda wa kupatikana"], answer: 3, why: "Kinachohitajika tu, hakuna binafsi." },
          { objective: "O5", q: "Mteja anatuma ujumbe akiuliza kama chakula hakina karanga. Jibu lako linapaswa kutegemea:", options: ["Kubahatisha kwa AI", "Chati yako ya vyakula vya mzio iliyokaguliwa na wafanyakazi", "Picha ya menyu", "Kumbukumbu yako tu"], answer: 1, why: "Majibu kuhusu vyakula vya mzio yanatoka kwenye chati yako iliyokaguliwa." },
          { objective: "O5", q: "Chini ya kanuni ya FTC, nini kimekatazwa?", options: ["Kuandika maoni bandia kwa AI", "Kumshukuru aliyetoa maoni", "Kujibu maoni mabaya", "Kuwaomba wateja maoni ya kweli"], answer: 0, why: "Maoni bandia, pamoja na yaliyoandikwa na AI, yamekatazwa." },
          { objective: "O6", q: "Chakula maalum kinatumia viungo vya $3.50 na kinauzwa $14. Asilimia ya gharama ya chakula ni ngapi?", options: ["14%", "25%", "35%", "50%"], answer: 1, why: "3.50 / 14 = 0.25, au 25%." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Migahawa",
    questions: [
      { objective: "O1", q: "Maelezo mazuri ya menyu ni ya takriban:", options: ["Maneno 200", "Maneno 10 hadi 25", "Herufi moja", "Ukurasa mzima"], answer: 1, why: "Maelezo mafupi yanasomwa haraka." },
      { objective: "O1", q: "Unampa AI nini ili aandike maelezo ya menyu?", options: ["Hakuna kitu", "Taarifa zako za benki", "Majina ya wateja", "Viungo halisi na njia ya kupika"], answer: 3, why: "Ukweli halisi unaleta maelezo sahihi." },
      { objective: "O1", q: "Kwa nini ukague kila neno la kiungo ambalo AI inaandika?", options: ["Si lazima", "Ili kuyafanya marefu zaidi", "Kwa tahajia tu", "Kiungo kisicho sahihi kinaweza kumdhuru mteja mwenye mzio"], answer: 3, why: "Usahihi ni suala la usalama." },
      { objective: "O2", q: "Kipi ni kimoja kati ya vyakula tisa vikuu vya mzio vya FDA?", options: ["Mchele", "Ufuta", "Mahindi", "Kuku"], answer: 1, why: "Ufuta uliongezwa kama cha tisa." },
      { objective: "O2", q: "Kwa nini usome lebo ya kila kiungo unachonunua?", options: ["Kwa kujifurahisha", "Kujua bei", "Michuzi na michanganyiko inaweza kuficha vyakula vya mzio", "Si lazima"], answer: 2, why: "Vyakula vya mzio vilivyofichwa ni vya kawaida katika viungo vilivyokwisha kuandaliwa." },
      { objective: "O2", q: "Unapaswa kusasisha chati yako ya vyakula vya mzio lini?", options: ["Mapishi au msambazaji anapobadilika", "Mara moja kila miaka kumi", "Kamwe", "Baada ya malalamiko tu"], answer: 0, why: "Mabadiliko yanaweza kuongeza vyakula vya mzio." },
      { objective: "O2", q: "Mguso mtambuka (cross-contact) ni nini?", options: ["Simu", "Wafanyakazi wawili wakiongea", "Chakula cha mzio kuingia kwenye chakula kingine kupitia vyombo au mafuta vinavyotumika pamoja", "Mabadiliko ya menyu"], answer: 2, why: "Sehemu zinazotumika pamoja zinaweza kusambaza vyakula vya mzio." },
      { objective: "O2", q: "Nani anaweka kanuni za usalama wa chakula kwa mgahawa wako?", options: ["Idara ya afya ya eneo lako, mara nyingi kwa kufuata Food Code ya FDA", "AI", "Wateja wako", "Tovuti ya maoni"], answer: 0, why: "Mamlaka rasmi ndizo zinazoweka kanuni." },
      { objective: "O3", q: "Orodha ya maandalizi ni:", options: ["Ratiba ya wafanyakazi", "Kile jiko linachopaswa kuandaa kabla ya huduma", "Maoni ya mteja", "Fomu ya kodi"], answer: 1, why: "Inaongoza maandalizi ya jikoni." },
      { objective: "O3", q: "=ROUNDUP(B2/C2,0) inatoa:", options: ["Vyakula vya mzio", "Faida", "Saa za wafanyakazi", "Mipiko kamili inayohitajika, ikizungushwa juu"], answer: 3, why: "Inazungusha juu idadi ya mipiko." },
      { objective: "O3", q: "Nani anaweka viwango vya mwisho vya maandalizi?", options: ["Wewe, kutokana na namba na uzoefu wako", "AI peke yake", "Msambazaji", "Wateja"], answer: 0, why: "AI inasaidia mpangilio; wewe unaamua viwango." },
      { objective: "O3", q: "Ipi ni sababu nzuri ya kurekebisha maandalizi?", options: ["Hakuna", "Mtindo mpya wa herufi", "AI imesema hivyo", "Tukio la eneo lako wikendi hii"], answer: 3, why: "Matukio yanabadilisha mahitaji." },
      { objective: "O4", q: "Rasimu ya ratiba ya AI inampa mfanyakazi mmoja zamu 7. Wewe:", options: ["Unapuuza", "Unaibandika", "Unakagua haki na kanuni za kazi, kisha unairekebisha", "Unamwomba mfanyakazi aache kazi"], answer: 2, why: "Unakagua kila rasimu." },
      { objective: "O4", q: "Je, AI ni chanzo cha kuaminika kwa sheria ya saa za ziada ya jimbo lako?", options: ["Ndiyo, kila wakati", "Hapana, angalia idara ya kazi ya jimbo", "Wikendi tu", "Kwa watoto tu"], answer: 1, why: "Sheria ya kazi inahitaji chanzo rasmi." },
      { objective: "O5", q: "Maoni mabaya yanalalamikia chakula baridi. Jibu zuri:", options: ["Linatoa pesa kwa maoni bora zaidi", "Linabishana hadharani", "Linatoa taarifa za mteja", "Linaomba msamaha, linasema unachorekebisha, linakaribisha mawasiliano"], answer: 3, why: "Majibu tulivu na ya kweli yanajenga imani." },
      { objective: "O5", q: "Kuwalipa wateja tu wakiacha nyota 5 ni:", options: ["Lazima", "Mbinu nzuri ya masoko", "Kumekatazwa chini ya kanuni ya maoni ya FTC", "Sawa"], answer: 2, why: "Zawadi zinazotegemea maoni mazuri zimekatazwa." },
      { objective: "O6", q: "Matumizi mazuri ya chakula maalum ni:", options: ["Kutumia bidhaa za ziada kabla hazijaharibika", "Kuficha chakula kilichochakaa", "Kupandisha bei zote", "Kuacha kukagua vyakula vya mzio"], answer: 0, why: "Vyakula maalum vinapunguza upotevu." },
      { objective: "O6", q: "Gharama ya sahani ni nini?", options: ["Bei ya vyombo vya kulia", "Gharama ya viungo vilivyomo kwenye sahani moja", "Kodi ya pango", "Bakshishi"], answer: 1, why: "Ni gharama ya viungo kwa kila sahani." },
      { objective: "O6", q: "Kabla ya kutangaza chakula maalum unapaswa:", options: ["Kuacha kuweka bei", "Kukagua vyakula vya mzio na kukiongeza kwenye orodha ya maandalizi", "Kutumia picha ya mtandaoni ya chakula kingine", "Kuahidi ni organic"], answer: 1, why: "Usalama na mipango vinakuja kwanza." },
      { objective: "O6", q: "Asilimia ya gharama ya chakula ni:", options: ["Gharama ya sahani ikigawanywa kwa bei ya menyu, mara 100", "Kodi ya pango ikigawanywa kwa mauzo", "Bakshishi mara wafanyakazi", "Bei pamoja na kodi"], answer: 0, why: "Inaonyesha sehemu ya bei inayokwenda kwenye viungo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      3,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Maelezo sahihi ya menyu",
        objective: "O1",
        notYet: "Maelezo yanataja kiungo au dai lisilo kwenye chakula.",
        meets: "Maelezo mafupi matano, kila neno la kiungo likilingana na mapishi.",
        exceeds: "Kila moja pia linasema chakula kinapikwa vipi na kwa nini ni maalum."
      },
      {
        name: "Chati ya vyakula vya mzio iliyokaguliwa",
        objective: "O2",
        notYet: "Chati imenakiliwa kutoka AI au inakosa chakula au chakula cha mzio.",
        meets: "Vyakula vyote vitano vimewekewa alama kwa vyakula tisa vya mzio kutoka kwa mapishi na lebo, na kukaguliwa na mtu wa pili.",
        exceeds: "Inaonyesha bidhaa zipi zilizonunuliwa zinaficha vyakula vya mzio na lini chati ilisasishwa mara ya mwisho."
      },
      {
        name: "Orodha za maandalizi na za kuagiza",
        objective: "O3",
        notYet: "Viwango vimebahatishwa au mipiko haijazungushwa juu.",
        meets: "Orodha za maandalizi na za kuagiza za wiki moja zimetengenezwa kutokana na mauzo, mipiko ikiwa imezungushwa juu.",
        exceeds: "Viwango vimerekebishwa kwa tukio, wikendi au hali ya hewa iliyotajwa."
      },
      {
        name: "Ratiba ya haki iliyokaguliwa",
        objective: "O4",
        notYet: "Ratiba inaacha zamu yenye shughuli nyingi bila watu wa kutosha au ilitumia maelezo binafsi ya wafanyakazi.",
        meets: "Inajaza kila zamu kwa haki, inatumia majina ya kwanza tu, na inaonyesha mahali kanuni za kazi zilipoangaliwa.",
        exceeds: "Pia inaonyesha mapumziko na kanuni zozote kuhusu watoto kutoka chanzo cha jimbo."
      },
      {
        name: "Majibu ya kweli kwa maoni",
        objective: "O5",
        notYet: "Jibu linabishana, linatoa ahadi ya uongo au linatoa zawadi kwa maoni.",
        meets: "Maoni mazuri moja na mabaya moja yamejibiwa kwa utulivu kwa kauli za kweli tu.",
        exceeds: "Jibu kwa maoni mabaya linataja marekebisho halisi na linamkaribisha mteja awasiliane."
      },
      {
        name: "Chakula maalum chenye gharama",
        objective: "O6",
        notYet: "Chakula maalum hakina gharama ya sahani wala bei.",
        meets: "Chakula maalum kimoja chenye gharama ya sahani, bei yenye faida, na vyakula vya mzio vimekaguliwa.",
        exceeds: "Pia kimeongezwa kwenye orodha ya maandalizi na kinatumia bidhaa za ziada au za msimu."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaoripoti kutumia chati yao ya vyakula vya mzio na orodha za maandalizi jikoni ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wamiliki wanaoripoti upotevu mdogo wa chakula au vyakula vichache kuisha ndani ya siku 30",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya biashara ndogo ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure na spreadsheet ya bure kama Google Sheets",
      "Mapishi yako mwenyewe, lebo za viungo na namba za mauzo za wiki moja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Waombe wamiliki walete mapishi na lebo halisi, au tumia za mfano, ili chati ya vyakula vya mzio itengenezwe kwa taarifa halisi.",
      "Sisitiza kwamba kanuni za vyakula vya mzio, usalama wa chakula na kazi zinatoka FDA, idara ya afya ya eneo na idara ya kazi ya jimbo, si kwa AI.",
      "Wakumbushe wanafunzi watumie majina ya kwanza tu ya wafanyakazi na wasiandike kamwe namba za Social Security wala mishahara pamoja na majina.",
      "Panga vipindi nje ya nyakati za msongamano wa milo, kwa mfano katikati ya mchana.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
