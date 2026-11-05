"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-saas.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-saas-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-saas",
  category: "Entrepreneurs",
  name: "Kujenga Bidhaa za AI SaaS",
  skills: "Kuchagua soko dogo la SaaS, Kupanga bidhaa ndogo inayofaa (MVP), Kuelewa API za AI na gharama za matumizi, Kutengeneza mfano bila kuandika msimbo mwingi, Kupanga bei ya usajili, Kuzindua kwa uaminifu na usalama",
  outcome: "kugeuza tatizo dogo la biashara kuwa mpango wa ukurasa mmoja wa bidhaa ndogo ya AI ya programu kama huduma (SaaS), kujenga mfano wa kubofya au unaofanya kazi wa kipengele chake kikuu, kupanga bei ya usajili inayolipia gharama za matumizi ya AI, na kuandaa orodha ya ukaguzi ya uzinduzi ulio wa kweli na salama.",
  about: [
    "SaaS (software as a service, yaani programu kama huduma) ni programu ambayo watu wanaitumia mtandaoni na kuilipia kwa usajili, kama mpango wa kila mwezi. Bidhaa nyingi mpya za SaaS zinaweka modeli ya AI nyuma ya skrini rahisi inayofanya kazi moja vizuri sana: kuandika matangazo kwa wasimamizi wa nyumba, kufupisha simu kwa karakana za matengenezo, kutafsiri menyu.",
    "Kozi hii ni kwa wajasiriamali wanaotaka kujenga bidhaa ndogo ya AI SaaS, wakiwemo watu ambao bado hawaandiki msimbo. Utachagua soko dogo, utafafanua bidhaa ndogo inayofaa, utajifunza jinsi API za AI na gharama zake za matumizi zinavyofanya kazi, utajenga mfano, utaupangia bei, na utaandaa uzinduzi ulio wa kweli kuhusu kile AI inachofanya na unaolinda data ya watumiaji.",
    "Kila somo linachukua kama dakika tano pamoja na kazi ya vitendo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Bei za modeli za AI na mipango ya zana hubadilika mara kwa mara: kagua kila wakati ukurasa wa bei wa mtoa huduma mwenyewe."
  ],
  finalTask: "Andaa kifurushi cha kuanzia cha AI SaaS: mpango wa bidhaa wa ukurasa mmoja (soko, mtumiaji, tatizo, kipengele kikuu kimoja), mfano wa kipengele kikuu (mfano wa skrini wa kubofya, app isiyohitaji msimbo, au notebook fupi inayofanya kazi), karatasi ya bei inayoonyesha gharama ya matumizi ya AI kwa kila mtumiaji kwa mwezi na bei yako, na orodha ya ukaguzi ya uzinduzi inayohusu madai ya kweli, faragha, masharti, ukaguzi wa binadamu na jinsi watumiaji wanavyoweza kukufikia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wajasiriamali wanaotaka kujenga bidhaa ndogo ya AI ya programu kama huduma kwa soko dogo wanalolijua, wakiwemo watu ambao bado hawaandiki msimbo.",
    startingPoint: "Wanatumia wasaidizi wa AI wa mazungumzo vizuri na wanajua fani au sekta fulani. Wengi hawajawahi kupanga bidhaa ya programu, kutumia API ya AI, kukadiria gharama za matumizi au kuandaa uzinduzi wenye sera ya faragha na masharti.",
    gap: "Bidhaa nyingi za AI zinajaribu kufanya mambo mengi mno, zinagharimu zaidi katika matumizi ya AI kuliko zinavyotoza, zinavujisha funguo za API au data ya watumiaji, au zinaahidi zaidi ya AI inavyoweza. Wanafunzi wanahitaji kupanga kipengele kikuu kimoja, kuthibitisha kinafanya kazi, kukipangia bei inayolipia matumizi na kuzindua kwa ukweli na usalama.",
    constraints: [
      "Maneno rahisi; kuandika msimbo si lazima, na mifano isiyohitaji msimbo au mifano ya skrini inakubalika",
      "Vifaa: kompyuta yenye spreadsheet (lahajedwali), msaidizi wa AI wa bure na, kwa hiari, notebook au zana ya bure isiyohitaji msimbo",
      "Muda: kama dakika tano kwa kila somo pamoja na kazi za vitendo",
      "Bei za modeli za AI na mipango ya zana hubadilika mara kwa mara; kagua ukurasa wa bei wa mtoa huduma mwenyewe",
      "Data ya majaribio isiyo na majina tu; sera ya faragha na masharti yakaguliwe na wakili; kodi ya mauzo ikaguliwe na jimbo au mhasibu"
    ],
    prerequisites: "Inapendekezwa kozi \"Kujenga Bidhaa na Huduma Zinazotumia AI\", pamoja na kuzoea spreadsheet."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa fani unayoijua", action: "kuchagua mtumiaji mmoja maalum na kazi moja inayojirudia kwa bidhaa ya AI SaaS", standard: "ikiandikwa kama wazo la sentensi moja na kukaguliwa na angalau mtu mmoja katika soko hilo" },
    { id: "O2", condition: "Ukipewa wazo lako la bidhaa", action: "kuandika mtiririko mkuu wa mstari mmoja, orodha ya \"si sasa\" na sheria tatu za \"kamwe\" kwa toleo la kwanza", standard: "huku kipengele kikuu kikitosha kwenye skrini moja" },
    { id: "O3", condition: "Ukitumia bei ya sasa kutoka ukurasa wa bei wa mtoa huduma wako", action: "kueleza jinsi app yako inavyotumia modeli ya AI kupitia API na kukadiria gharama ya AI kwa kila mtumiaji kwa mwezi", standard: "kila fomula ikiwa imekaguliwa na ufunguo wa API ukiwa siri" },
    { id: "O4", condition: "Ukipewa mifano kumi halisi isiyo na majina", action: "kujaribu prompt yako, kupima matokeo na kujenga mfano wa kipengele kikuu", standard: "ukiboresha prompt hadi matokeo mengi yawe mazuri na kuuonyesha angalau mtumiaji mmoja wa soko hilo" },
    { id: "O5", condition: "Ukipewa thamani na gharama kwa kila mtumiaji", action: "kutengeneza karatasi ya bei yenye mipango miwili, mipaka ya matumizi na faida kwa kila mtumiaji", standard: "ili kila mpango ulipie matumizi ya AI na gharama nyingine na kubaki na faida" },
    { id: "O6", condition: "Kabla ya kupokea malipo", action: "kuandaa orodha ya ukaguzi ya uzinduzi kwa madai ya kweli, data, masharti ya mtoa huduma, sera ya faragha na masharti, na njia ya mawasiliano", standard: "ukaguzi wa wakili ukiwa umepangwa na uzinduzi wa kwanza ukiwa mdogo" }
  ],
  chapters: [
    {
      name: "Sura 1: Fafanua bidhaa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchagua soko dogo",
          minutes: 5,
          goal: "Chagua mtumiaji maalum na kazi maalum inayojirudia kwa bidhaa yako ya AI SaaS.",
          text: [
            "Zana kubwa za AI za jumla tayari zipo na mara nyingi ni za bure. Bidhaa ndogo za SaaS zinashinda kwa kuwa na lengo finyu: aina moja ya mtumiaji, kazi moja inayojirudia, inayofanywa vizuri kuliko msaidizi wa AI wa jumla. \"Zana ya AI ya kuandika\" ni pana mno. \"Inageuza maelezo ya kazi ya fundi kuwa nukuu safi ya bei kwa mteja ndani ya dakika mbili\" ni finyu.",
            "Soko zuri lina watumiaji wanaofanya kazi ileile mara kwa mara, wanaopoteza muda au pesa juu yake, na ambao tayari wanalipia programu. Unaweza kuwafikia kupitia chama cha wafanyabiashara, jukwaa la mtandaoni au mtandao wa watu wa eneo lako.",
            "Omba AI ikusaidie kubuni masoko kutokana na uzoefu wako: \"Nimefanya kazi katika [fani]. Orodhesha kazi kumi za kuandika au kupanga zinazojirudia ambazo watu wa fani hii hufanya kila wiki.\" Kisha ongea na watu watatu wa soko hilo kabla ya kuendelea."
          ],
          steps: ["Orodhesha fani unazozijua vizuri.", "Omba AI ikupe kazi zinazojirudia katika fani hizo.", "Chagua mtumiaji mmoja na kazi moja.", "Kagua: inafanywa mara kwa mara, inagharimu, tayari wanalipia programu, ni rahisi kuwafikia.", "Ongea na watu watatu wanaofanya kazi hiyo."],
          words: [["SaaS", "software as a service (programu kama huduma): programu ya mtandaoni ambayo watu wanailipia kwa usajili."], ["Soko dogo (niche)", "kikundi kidogo maalum cha watumiaji wenye hitaji moja."]],
          slides: [
            { title: "Lengo finyu linashinda", bullets: ["Mtumiaji mmoja, kazi moja inayojirudia", "Bora kuliko msaidizi wa AI wa jumla", "\"Maelezo ya kazi kuwa nukuu ya bei kwa dakika mbili\""] },
            { title: "Masoko mazuri", bullets: ["Wanafanya kazi hiyo mara kwa mara", "Wanapoteza muda au pesa juu yake", "Tayari wanalipia programu; ni rahisi kuwafikia"] },
            { title: "Anza na unachokijua", bullets: ["Omba AI ikupe kazi zinazojirudia katika fani yako", "Ongea na watu watatu kabla ya kujenga"] }
          ],
          tryIt: "Tumia AI kuorodhesha kazi kumi zinazojirudia katika fani unayoijua, chagua mtumiaji mmoja na kazi moja, na uandike wazo la bidhaa la sentensi moja. Muulize angalau mtu mmoja wa soko hilo kama lingemsaidia.",
          youCanNow: "kuchagua soko dogo, lililo wazi na linalofikika kwa bidhaa ya AI SaaS.",
          quickCheck: [
            { objective: "O1", q: "Nini kinafanya soko liwe zuri kwa bidhaa ndogo ya AI SaaS?", options: ["Watumiaji wanaofanya kazi hiyo mara kwa mara na tayari wanalipia programu", "Kila mtu duniani", "Kazi ambayo watu hufanya mara moja tu maishani", "Fani usiyoijua kabisa"], answer: 0, why: "Kazi za mara kwa mara na watumiaji ambao tayari wanalipa hufanya bidhaa iwe rahisi kuuza." },
            { objective: "O1", q: "Wazo lako ni \"AI kwa biashara zote ndogo\". Unafanya nini?", options: ["Kuliacha pana ili kufikia watu wengi zaidi", "Kulifinya hadi mtumiaji mmoja na kazi moja inayojirudia", "Kuongeza vipengele zaidi", "Kuanza kuandika msimbo mara moja"], answer: 1, why: "Bidhaa ndogo za AI SaaS zinashinda kwa kufanya kazi moja kwa mtumiaji mmoja vizuri sana." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupanga bidhaa ndogo inayofaa (MVP)",
          minutes: 5,
          goal: "Fafanua kipengele kikuu kimoja ambacho toleo lako la kwanza lazima likifanye vizuri.",
          text: [
            "Bidhaa ndogo inayofaa (MVP) ni toleo dogo kabisa linalotatua tatizo kuu vizuri kiasi kwamba mtu angelilipia. Kwa AI SaaS kwa kawaida ni skrini moja: mtumiaji anaweka kitu, AI inafanya kazi, mtumiaji anakagua na kunakili matokeo.",
            "Andika mtiririko wako mkuu kwa mstari mmoja: \"Fundi anabandika maelezo ya kazi, anachagua kiolezo, anapata rasimu ya nukuu ya bei, anahariri, anapakua.\" Kila kitu kingine (akaunti, timu, miunganisho, dashibodi) kinasubiri hadi watu wawe wanalipa.",
            "Pia amua kile ambacho AI haipaswi kufanya kamwe, kama kubuni bei, kutoa ushauri wa kisheria au kutuma chochote bila mtumiaji kubofya. Sheria hizi zinaunda prompt yako ya maelekezo na skrini yako."
          ],
          steps: ["Andika mtiririko mkuu kwa mstari mmoja: kinachowekwa, kazi ya AI, ukaguzi wa mtumiaji, matokeo.", "Orodhesha vipengele ambavyo HUTAVIJENGA bado.", "Andika mambo matatu ambayo AI haipaswi kufanya kamwe.", "Chora skrini hiyo moja kwenye karatasi."],
          words: [["MVP", "minimum viable product (bidhaa ndogo inayofaa): toleo dogo kabisa linalotatua tatizo kuu vizuri kiasi cha kuuzwa."], ["Mtiririko mkuu", "njia kuu ambayo mtumiaji anapitia ili kumaliza kazi."]],
          slides: [
            { title: "Toleo dogo kabisa lenye manufaa", bullets: ["Skrini moja", "Kinachowekwa, kazi ya AI, ukaguzi wa mtumiaji, matokeo"] },
            { title: "Si sasa", bullets: ["Timu na dashibodi", "Miunganisho", "Chochote kisicho katika mtiririko mkuu"] },
            { title: "AI haipaswi kamwe", bullets: ["Kubuni bei au ukweli", "Kutoa ushauri wa kisheria au wa matibabu", "Kutenda bila mtumiaji kubofya"] }
          ],
          tryIt: "Andika mtiririko wako mkuu wa mstari mmoja, orodha yako ya \"si sasa\" na sheria zako tatu za \"kamwe\", na uchore skrini hiyo moja.",
          youCanNow: "kupanga MVP ya AI SaaS kuzunguka kipengele kikuu kimoja chenye mipaka iliyo wazi.",
          quickCheck: [
            { objective: "O2", q: "Nini kinaingia kwenye orodha ya \"si sasa\"?", options: ["Kipengele chako kikuu", "Bei yako", "Vipengele vinavyosubiri hadi watu wawe wanalipa", "Sheria zako za \"kamwe\""], answer: 2, why: "Orodha ya \"si sasa\" inaweka toleo la kwanza kuwa dogo." },
            { objective: "O2", q: "Unataka kuongeza dashibodi za timu, mazungumzo na ripoti kwenye toleo la kwanza. Unafanya nini?", options: ["Kuvijenga vyote sasa", "Kuajiri timu kubwa", "Kuacha kipengele kikuu", "Kubaki na kipengele kikuu kimoja na kuweka vingine kwenye orodha ya \"si sasa\""], answer: 3, why: "MVP inatatua tatizo kuu kwanza." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jinsi API za AI zinavyofanya kazi na gharama zake",
          minutes: 6,
          goal: "Eleza jinsi app inavyotumia modeli ya AI kupitia API na ukadirie gharama kwa kila mtumiaji.",
          text: [
            "API (application programming interface) inaruhusu app yako kutuma ombi kwa modeli ya AI na kupata jibu. App yako inatuma prompt yako ya maelekezo pamoja na kile mtumiaji ameweka; modeli inarudisha maandishi (au picha, au data iliyopangwa); app yako inaonyesha jibu hilo.",
            "Watoa huduma wengi wa modeli za AI wanatoza kulingana na matumizi, mara nyingi yakihesabiwa kwa tokeni (vipande vidogo vya maandishi, takriban sehemu za maneno), kwa bei tofauti kwa kinachoingia na kinachotoka na kwa modeli tofauti. Bei hubadilika mara kwa mara, kwa hiyo zitafute kwenye ukurasa wa bei wa mtoa huduma siku unayopanga.",
            "Kadiria gharama kwa kila mtumiaji: takriban maombi mangapi mtumiaji anafanya kwa mwezi, mara ukubwa wa wastani wa kila ombi na jibu, mara bei. Omba AI ikusaidie kuandaa spreadsheet, na ukague hesabu. Weka ufunguo wako wa API kuwa siri: usiubandike kamwe kwenye mazungumzo, ukurasa wa wavuti au faili la umma."
          ],
          steps: ["Andika kile app yako inachotuma: prompt ya maelekezo + kile mtumiaji ameweka.", "Kadiria maombi kwa kila mtumiaji kwa mwezi.", "Kadiria ukubwa wa kila ombi na jibu.", "Tafuta bei za sasa kwenye ukurasa wa bei wa mtoa huduma.", "Hesabu gharama kwa kila mtumiaji kwa mwezi na uweke ufunguo wako wa API kuwa siri."],
          words: [["API", "njia ya programu moja kutuma maombi kwa programu nyingine na kupata majibu."], ["Tokeni", "kipande kidogo cha maandishi ambacho watoa huduma wa AI hukihesabu kupima matumizi na bei."], ["Ufunguo wa API (API key)", "msimbo wa siri unaoruhusu app yako kutumia API ya mtoa huduma, na bili yake inakuja kwako."]],
          slides: [
            { title: "Jinsi inavyofanya kazi", bullets: ["App yako inatuma prompt + kile mtumiaji ameweka", "Modeli inarudisha jibu", "App yako inamwonyesha mtumiaji"] },
            { title: "Bei kwa matumizi", bullets: ["Mara nyingi yanahesabiwa kwa tokeni", "Kinachoingia na kinachotoka vina bei tofauti", "Kagua ukurasa wa bei wa mtoa huduma"] },
            { title: "Gharama kwa kila mtumiaji", bullets: ["Maombi kwa mwezi", "x ukubwa wa kila ombi na jibu", "x bei ya sasa"] },
            { title: "Weka ufunguo wa API kuwa siri", bullets: ["Kamwe kwenye mazungumzo, ukurasa wa wavuti au faili la umma", "Yeyote mwenye ufunguo anaweza kutumia pesa zako"] }
          ],
          tryIt: "Tengeneza spreadsheet ndogo inayokadiria gharama yako ya AI kwa kila mtumiaji kwa mwezi: maombi, ukubwa na bei ya sasa kutoka ukurasa wa bei wa mtoa huduma uliyemchagua. Kagua kila fomula.",
          youCanNow: "kueleza jinsi app ya AI SaaS inavyotumia API na kukadiria gharama yake ya matumizi kwa kila mtumiaji.",
          quickCheck: [
            { objective: "O3", q: "API inaruhusu app yako kufanya nini?", options: ["Kutuma maombi kwa modeli ya AI na kupata majibu", "Kubuni nembo", "Kukusanya malipo", "Kuandika masharti yako"], answer: 0, why: "API inaunganisha app yako na modeli ya AI." },
            { objective: "O3", q: "Msaidizi anakuomba ubandike ufunguo wako wa API kwenye kikundi cha mazungumzo. Unafanya nini?", options: ["Kuubandika", "Kuuweka siri na kutoubandika kamwe kwenye mazungumzo au faili", "Kuuweka kwenye tovuti yako", "Kuuweka kwenye faili la umma"], answer: 1, why: "Yeyote mwenye ufunguo wako anaweza kutumia API na kutumia pesa zako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Fafanua bidhaa",
        questions: [
          { objective: "O1", q: "Lipi ni soko bora kwa bidhaa ndogo ya AI SaaS?", options: ["Zana ya AI kwa kila mtu", "Kugeuza maelezo ya kazi ya mafundi kuwa nukuu za bei kwa wateja", "Msaidizi wa AI wa jumla", "Biashara yote"], answer: 1, why: "Mtumiaji mmoja maalum pamoja na kazi inayojirudia ni bora kuliko zana za jumla." },
          { objective: "O2", q: "MVP ni nini?", options: ["Bidhaa iliyokamilika yenye kila kipengele", "Toleo la bei ghali zaidi", "Tuzo ya michezo", "Toleo dogo kabisa linalotatua tatizo kuu vizuri kiasi cha kuuzwa"], answer: 3, why: "MVP = minimum viable product (bidhaa ndogo inayofaa)." },
          { objective: "O2", q: "Kipengele kipi kinapaswa kusubiri hadi watu wawe wanalipa?", options: ["Dashibodi za timu", "Mtiririko mkuu kutoka kinachowekwa hadi matokeo", "Hatua ya ukaguzi wa mtumiaji", "Kazi ya AI yenyewe"], answer: 0, why: "Mtiririko mkuu tu ndio unaostahili kuwa katika MVP." },
          { objective: "O3", q: "Watoa huduma wa AI mara nyingi hupima matumizi kwa:", options: ["Dakika za mchana", "Kurasa", "Tokeni", "Wateja"], answer: 2, why: "Tokeni ni vipande vidogo vya maandishi vinavyotumika kupanga bei." },
          { objective: "O3", q: "Ufunguo wako wa API haupaswi KAMWE kuwekwa wapi?", options: ["Kwenye kidhibiti cha nywila", "Kwenye sehemu salama ya mipangilio ya app yako", "Kwenye mazungumzo, ukurasa wa wavuti au faili la umma", "Kwenye akaunti yako ya mtoa huduma"], answer: 2, why: "Yeyote mwenye ufunguo anaweza kuutumia na kutumia pesa zako." }
        ]
      }
    },
    {
      name: "Sura 2: Jenga, panga bei na zindua",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza mfano wa kipengele kikuu",
          minutes: 6,
          goal: "Jenga mfano wa kipengele chako kikuu na uujaribu kwa mifano halisi.",
          text: [
            "Anza kwa kujaribu kazi ya AI yenyewe, kabla ya app yoyote: weka prompt yako ya maelekezo na mifano kumi halisi (isiyo na majina) kwenye msaidizi wa mazungumzo na ukague matokeo. Kama AI haiwezi kufanya kazi vizuri kwenye mazungumzo, app haitarekebisha hilo. Boresha prompt hadi matokeo 8 au 9 kati ya 10 yawe mazuri.",
            "Kisha tengeneza mfano kwa kiwango unachoweza: mfano wa skrini wa kubofya (kwenye zana ya kubuni kama Canva au kwenye slaidi), zana ya kujenga app bila msimbo inayoweza kuita modeli ya AI, au notebook fupi ya Python kwenye Google Colab inayoita API huku ufunguo wako ukiwa siri.",
            "Waonyeshe watu watatu wa soko lako mfano huo na uwatazame wakiutumia. Andika mahali wanapokwama na mahali matokeo ya AI yalipohitaji kurekebishwa."
          ],
          steps: ["Kusanya mifano kumi halisi na uondoe taarifa binafsi.", "Jaribu prompt yako ya maelekezo kwenye msaidizi wa mazungumzo.", "Boresha prompt hadi matokeo mengi yawe mazuri.", "Jenga mfano: mfano wa skrini, app isiyohitaji msimbo au notebook.", "Tazama watumiaji watatu wa soko wakiujaribu na uandike matatizo."],
          words: [["Mfano (prototype)", "toleo la mapema na rahisi linalotumika kujaribu wazo."], ["Mfano wa skrini (mock-up)", "picha au mfano wa kubofya wa skrini unaoonyesha jinsi app itakavyoonekana."], ["Google Colab", "notebook ya bure ya mtandaoni ambapo unaweza kuendesha msimbo wa Python kwenye kivinjari."]],
          slides: [
            { title: "Jaribu kazi ya AI kwanza", bullets: ["Prompt ya maelekezo + mifano kumi halisi", "Kwenye msaidizi wa mazungumzo", "Lenga matokeo mazuri 8 au 9 kati ya 10"] },
            { title: "Chagua kiwango cha mfano wako", bullets: ["Mfano wa skrini wa kubofya", "Zana ya kujenga app bila msimbo", "Notebook ya Python kwenye Google Colab"] },
            { title: "Tazama watumiaji halisi", bullets: ["Watu watatu wa soko lako", "Wanakwama wapi?", "AI ilihitaji kurekebishwa wapi?"] }
          ],
          tryIt: "Jaribu prompt yako kwa mifano kumi isiyo na majina na upime matokeo. Kisha jenga mfano rahisi kabisa unaoweza na umwonyeshe angalau mtu mmoja wa soko lako.",
          youCanNow: "kuthibitisha kwamba kipengele cha AI kinafanya kazi na kujenga mfano ambao watu wanaweza kuujaribu.",
          quickCheck: [
            { objective: "O4", q: "Unapaswa kujaribu nini kabla ya kujenga app yoyote?", options: ["Nembo", "Bei", "Kama AI inafanya kazi vizuri kwa prompt yako", "Rangi za tovuti yako"], answer: 2, why: "Kama AI haiwezi kufanya kazi, app haitasaidia." },
            { objective: "O4", q: "Mtumiaji wa majaribio anakwama kwenye kisanduku cha kuweka maandishi cha mfano wako. Unafanya nini?", options: ["Kupuuza", "Kumlaumu mtumiaji", "Kuongeza vipengele zaidi", "Kuliandika na kuifanya hatua hiyo iwe wazi zaidi"], answer: 3, why: "Mahali watumiaji wanapokwama panaonyesha cha kurekebisha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga bei ya usajili",
          minutes: 5,
          goal: "Weka bei ya kila mwezi inayolipia matumizi ya AI na gharama nyingine na kubaki na faida.",
          text: [
            "Anza na thamani: bidhaa yako inamwokolea mtumiaji muda au pesa kiasi gani kila mwezi? Kama inamwokolea fundi saa tatu, ni rahisi kutetea bei iliyo chini sana ya thamani ya saa hizo.",
            "Kisha kagua gharama: matumizi ya AI kwa kila mtumiaji (kutoka Somo la 3), hosting (kuweka app mtandaoni) na zana, ada za kupokea malipo, muda wa kusaidia wateja, na muda wako mwenyewe. Watumiaji wazito wanaweza kugharimu zaidi sana kuliko watumiaji wa wastani, kwa hiyo fikiria mipaka ya matumizi kwa kila mpango.",
            "Bidhaa nyingi za SaaS zinatoa mipango miwili au mitatu yenye mipaka iliyo wazi, na kipindi cha majaribio cha bure. Omba AI ipendekeze miundo ya mipango, lakini weka namba za mwisho wewe mwenyewe na uzikague kwenye spreadsheet. Kwa kodi ya mauzo na kodi ya biashara kwa programu, kagua ofisi ya mapato ya jimbo lako na irs.gov, au muulize mhasibu, kwa sababu sheria zinatofautiana."
          ],
          steps: ["Kadiria thamani kwa mtumiaji kila mwezi.", "Ongeza gharama kwa kila mtumiaji: matumizi ya AI, hosting, malipo, msaada.", "Panga kwa ajili ya watumiaji wazito kwa kuweka mipaka.", "Buni mipango miwili au mitatu na kipindi cha majaribio.", "Kagua hesabu na umuulize mhasibu kuhusu kodi."],
          words: [["Usajili (subscription)", "kulipa kiasi cha kawaida, kama kila mwezi, ili kuendelea kutumia bidhaa."], ["Mpaka wa matumizi", "kikomo cha kiasi ambacho mpango unaweza kutumia, kama nukuu 100 kwa mwezi."], ["Majaribio ya bure", "kipindi kifupi ambacho watu wanaweza kutumia bidhaa bila kulipa."]],
          slides: [
            { title: "Anza na thamani", bullets: ["Muda au pesa inayookolewa kila mwezi", "Bei iliyo chini sana ya thamani hiyo"] },
            { title: "Lipia gharama zako", bullets: ["Matumizi ya AI kwa kila mtumiaji", "Hosting, malipo, msaada", "Watumiaji wazito: weka mipaka"] },
            { title: "Mipango", bullets: ["Mipango miwili au mitatu yenye mipaka iliyo wazi", "Majaribio ya bure", "Sheria za kodi zinatofautiana: muulize mhasibu"] }
          ],
          sources: [{ name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Tengeneza karatasi ya bei: thamani kwa kila mtumiaji, gharama kwa kila mtumiaji (pamoja na matumizi ya AI), mipango miwili yenye mipaka, na faida kwa kila mtumiaji katika kila mpango. Kagua kila fomula.",
          youCanNow: "kupanga bei ya usajili wa AI inayolipia gharama za matumizi na inayolingana na thamani kwa watumiaji.",
          quickCheck: [
            { objective: "O5", q: "Kupanga bei ya usajili kunapaswa kuanzia wapi?", options: ["Thamani ambayo bidhaa inampa mtumiaji", "Bei ya chini kabisa unayoweza kupata", "Namba yoyote tu", "Wanachofikiri marafiki zako"], answer: 0, why: "Panga bei kutokana na thamani, kisha kagua kama inalipia gharama." },
            { objective: "O5", q: "Watumiaji wazito wachache wanakugharimu zaidi katika matumizi ya AI kuliko wanavyolipa. Unafanya nini?", options: ["Kuondoa mipaka yote", "Kuweka mipaka ya matumizi kwa kila mpango", "Kupunguza bei", "Kuacha kufuatilia gharama"], answer: 1, why: "Mipaka ya matumizi inazuia watumiaji wazito kumaliza faida." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuzindua kwa uaminifu na usalama",
          minutes: 6,
          goal: "Andaa orodha ya ukaguzi ya uzinduzi inayoweka madai kuwa ya kweli na data ya watumiaji salama.",
          text: [
            "Uaminifu ndio mali yako kubwa zaidi kama SaaS mpya. Kuwa mkweli kuhusu kile AI inachofanya na mipaka yake: sema kwamba matokeo yametengenezwa na AI na yanapaswa kukaguliwa. FTC (Tume ya Biashara ya Shirikisho ya Marekani) inasema matangazo lazima yawe ya kweli, yasiyopotosha na yenye ushahidi, na imechukua hatua dhidi ya kampuni kwa madai ya uongo kuhusu AI.",
            "Linda data ya watumiaji. Fuata kanuni za FTC za usalama wa data: jua unachokusanya, punguza hadi unachohitaji, kifungie, ondoa usichohitaji tena, na jiandae mapema kwa matatizo. Kagua mtoa huduma wako wa AI anafanya nini na data inayotumwa kupitia API yake, na ulieleze hilo katika sera ya faragha.",
            "Kuwa na sera ya faragha na masharti ya huduma kabla ya kupokea malipo; violezo vipo, lakini mwombe wakili avikague kwa hali yako. Wape watumiaji njia rahisi ya kumfikia mtu, na uzindue kidogo: watumiaji wachache wa soko lako kwanza, kisha ukue."
          ],
          steps: ["Andika matangazo ya kweli: inachofanya, mipaka yake, \"kagua matokeo ya AI\".", "Orodhesha data ya watumiaji unayokusanya na uondoe usiyohitaji.", "Kagua masharti ya data ya mtoa huduma wako wa AI.", "Andaa sera ya faragha na masharti, yakaguliwe na wakili.", "Ongeza njia ya kumfikia mtu na uzindue kwa kikundi kidogo kwanza."],
          words: [["Sera ya faragha", "taarifa ya wazi kwa umma kuhusu data unayokusanya na jinsi unavyoitumia."], ["Masharti ya huduma", "sheria ambazo watumiaji wanakubali wanapotumia bidhaa yako."], ["Uzinduzi", "kuifanya bidhaa yako ipatikane kwa watumiaji."]],
          slides: [
            { title: "Kuwa mkweli kuhusu AI", bullets: ["Sema inachofanya na mipaka yake", "\"Imetengenezwa na AI: tafadhali kagua\"", "FTC: madai yanahitaji ushahidi"] },
            { title: "Linda data ya watumiaji", bullets: ["Jua unachokusanya, punguza, kifungie", "Ondoa usichohitaji; jiandae mapema", "Kagua masharti ya data ya mtoa huduma wako wa AI"] },
            { title: "Kabla ya kupokea malipo", bullets: ["Sera ya faragha na masharti", "Yakaguliwe na wakili", "Njia rahisi ya kumfikia mtu"] },
            { title: "Zindua kidogo", bullets: ["Watumiaji wachache wa soko lako kwanza", "Rekebisha, kisha ukue"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Protecting Personal Information, A Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Kazi ya mwisho: andika orodha yako ya ukaguzi ya uzinduzi (madai ya kweli, orodha ya data, masharti ya mtoa huduma, sera ya faragha na masharti kwa ajili ya wakili kukagua, njia ya mawasiliano, uzinduzi mdogo wa kwanza) na uunganishe kifurushi chako cha kuanzia cha AI SaaS pamoja na mpango, mfano na karatasi ya bei.",
          youCanNow: "kupanga, kutengeneza mfano, kupangia bei na kuandaa uzinduzi wa kweli na salama wa bidhaa ndogo ya AI SaaS.",
          quickCheck: [
            { objective: "O6", q: "Matangazo yako yanapaswa kusema nini kuhusu matokeo ya AI?", options: ["Ni kamili kila wakati", "Yanachukua nafasi ya wataalamu", "Yametengenezwa na AI na yanapaswa kukaguliwa", "Hakuna chochote kuhusu AI"], answer: 2, why: "Madai ya kweli yanawaambia watumiaji kile AI inachofanya na mipaka yake." },
            { objective: "O6", q: "Uko tayari kuzindua. Unazindua kwa nani kwanza?", options: ["Kwa kila mtu mara moja kwa matangazo ya kulipia", "Kwa hakuna mtu; endelea kujaribu milele", "Kwa watu walio nje ya soko lako tu", "Kwa kikundi kidogo cha watumiaji wa soko lako"], answer: 3, why: "Uzinduzi mdogo wa kwanza unakuruhusu kurekebisha matatizo kwa usalama." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Jenga, panga bei na zindua",
        questions: [
          { objective: "O4", q: "Unapaswa kujaribu nini kabla ya kujenga app yoyote?", options: ["Kama AI inaweza kufanya kazi vizuri kwa prompt yako kwenye mazungumzo", "Nembo", "Ukurasa wa bei", "Jina la kikoa (domain)"], answer: 0, why: "Kama AI haiwezi kufanya kazi, app haitarekebisha hilo." },
          { objective: "O4", q: "Kipi ni kiwango cha haraka cha mfano kwa mtu asiyeandika msimbo?", options: ["Hakuna kitu hadi uzinduzi", "Kituo kizima cha data cha kipekee", "Kuajiri wahandisi 20", "Mfano wa skrini wa kubofya"], answer: 3, why: "Mifano ya skrini inawaruhusu watumiaji kutoa maoni bila msimbo." },
          { objective: "O5", q: "Kwa nini uweke mipaka ya matumizi kwenye mipango?", options: ["Ili kuwaudhi watumiaji", "Watumiaji wazito wanaweza kugharimu zaidi sana katika matumizi ya AI", "Kwa sababu sheria inalazimisha", "Ili kuficha bei"], answer: 1, why: "Mipaka inafanya gharama za AI zitabirike." },
          { objective: "O6", q: "Matangazo yako yanapaswa kusema nini kuhusu matokeo ya AI?", options: ["Yametengenezwa na AI na yanapaswa kukaguliwa", "Ni sahihi kwa 100%", "Yanachukua nafasi ya wataalamu", "Hakuna chochote"], answer: 0, why: "Kusema mipaka kwa ukweli kunajenga uaminifu na kuepuka madai yanayopotosha." },
          { objective: "O6", q: "Kabla ya kupokea malipo, unapaswa kuwa na:", options: ["Mtu maarufu anayekupigia debe", "Vipengele elfu moja", "Sera ya faragha na masharti ya huduma yaliyokaguliwa na wakili", "Hakuna taarifa za mawasiliano"], answer: 2, why: "Vinaweka sheria zilizo wazi na vinakulinda wewe na watumiaji." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujenga Bidhaa za AI SaaS",
    questions: [
      { objective: "O1", q: "SaaS ni kifupi cha:", options: ["Mauzo na duka", "Software as a service (programu kama huduma)", "AI rahisi na utafutaji", "Huduma ya app ya kuingia salama"], answer: 1, why: "Ni programu ya mtandaoni inayolipiwa kwa usajili." },
      { objective: "O1", q: "Bidhaa ndogo za AI SaaS kwa kawaida zinashinda kwa:", options: ["Kunakili msaidizi mkubwa wa AI", "Kufanya kila kitu kwa kila mtu", "Kuwa ghali kuliko zote", "Kufanya kazi moja kwa aina moja ya mtumiaji vizuri sana"], answer: 3, why: "Lengo finyu ni bora kuliko zana za jumla." },
      { objective: "O1", q: "Soko zuri lina watumiaji ambao:", options: ["Hawana bajeti", "Hawafanyi kazi hiyo kamwe", "Hawawezi kufikiwa", "Wanafanya kazi hiyo mara kwa mara na tayari wanalipia programu"], answer: 3, why: "Watumiaji hao wana uwezekano wa kununua." },
      { objective: "O1", q: "Kabla ya kujenga, unapaswa kuongea na:", options: ["Hakuna mtu", "Watu watatu wa soko hilo", "Wawekezaji tu", "AI tu"], answer: 1, why: "Watumiaji halisi wanathibitisha tatizo." },
      { objective: "O2", q: "MVP ya AI SaaS kwa kawaida ni:", options: ["Kampuni kamili", "Apps kumi", "Skrini moja: kinachowekwa, kazi ya AI, ukaguzi wa mtumiaji, matokeo", "Nembo"], answer: 2, why: "Ni toleo dogo kabisa lenye manufaa." },
      { objective: "O2", q: "Kuandika kile AI haipaswi kufanya kamwe kunasaidia:", options: ["Kuunda prompt yako ya maelekezo na skrini yako", "Kufanya app iwe polepole", "Kupandisha bei", "Hakuna kitu"], answer: 0, why: "Mipaka iliyo wazi inapunguza makosa yenye madhara." },
      { objective: "O3", q: "API inaruhusu app yako:", options: ["Kulipa kodi", "Kuchapisha nyaraka", "Kutuma maombi kwa modeli ya AI na kupata majibu", "Kuajiri wafanyakazi"], answer: 2, why: "Hiyo ndiyo kazi ya API." },
      { objective: "O3", q: "Unapaswa kukagua bei za sasa za modeli za AI wapi?", options: ["Ukurasa wa bei wa mtoa huduma", "Makala ya zamani ya blogu", "Kwa kubahatisha", "App ya mshindani"], answer: 0, why: "Bei hubadilika mara kwa mara." },
      { objective: "O3", q: "Gharama kwa kila mtumiaji inakadiriwa kutokana na:", options: ["Idadi ya nembo", "Maombi kwa mwezi x ukubwa x bei", "Kodi ya nyumba yako tu", "Umri wa mtumiaji"], answer: 1, why: "Matumizi ndiyo yanayoamua gharama ya AI." },
      { objective: "O3", q: "Mtu akipata ufunguo wako wa API anaweza:", options: ["Kurekebisha hitilafu zako", "Hakuna kitu", "Kusoma barua pepe yako tu", "Kutumia API na kutumia pesa zako"], answer: 3, why: "Bili ya funguo inakuja kwako." },
      { objective: "O4", q: "Unajaribu prompt yako kwa mifano kumi na 4 ni mazuri. Nini kinafuata?", options: ["Kuboresha prompt kabla ya kujenga app", "Kujenga app hata hivyo", "Kuzindua kesho", "Kupandisha bei"], answer: 0, why: "Lenga matokeo mengi kuwa mazuri kwanza." },
      { objective: "O4", q: "Google Colab ni:", options: ["Spreadsheet tu", "App ya malipo", "Mtandao wa kijamii", "Notebook ya bure ya mtandaoni ya kuendesha Python kwenye kivinjari"], answer: 3, why: "Inakuruhusu kujaribu msimbo bila kusakinisha chochote." },
      { objective: "O4", q: "Unapotazama watumiaji wakijaribu mfano wako, andika:", options: ["Anwani zao za nyumbani", "Nywila zao", "Mahali wanapokwama na mahali matokeo ya AI yalipohitaji kurekebishwa", "Hakuna kitu"], answer: 2, why: "Hii inaonyesha cha kurekebisha." },
      { objective: "O5", q: "Kupanga bei kunapaswa kuanzia:", options: ["Namba yoyote tu", "Thamani ambayo bidhaa inampa mtumiaji", "Nembo ya mshindani wako", "Rangi ya tovuti yako"], answer: 1, why: "Thamani inaamua kiasi watumiaji watakacholipa." },
      { objective: "O5", q: "Kipi ni gharama ya SaaS kwa kila mtumiaji?", options: ["Kombe la ushindi", "Chakula cha mchana cha mtumiaji", "Likizo yako", "Matumizi ya AI"], answer: 3, why: "Matumizi ya AI yanaongezeka kwa kila mtumiaji." },
      { objective: "O5", q: "Kwa kodi ya mauzo kwenye programu, unapaswa:", options: ["Kuwauliza watumiaji", "Kudhani haihusiki kamwe", "Kukagua ofisi ya mapato ya jimbo lako au kumuuliza mhasibu", "Kuipuuza"], answer: 2, why: "Sheria zinatofautiana kati ya majimbo." },
      { objective: "O6", q: "Kanuni ya data ya FTC ya \"punguza\" (scale down) ina maana:", options: ["Kukusanya na kuweka unachohitaji tu", "Kufanya nembo yako iwe ndogo", "Kupunguza bei yako", "Kuajiri watu wachache"], answer: 0, why: "Data kidogo ina maana hatari kidogo." },
      { objective: "O6", q: "Kwa nini ukague masharti ya data ya mtoa huduma wako wa AI?", options: ["Ili kubadilisha fonti", "Ili kujua kinachotokea kwa data ya watumiaji inayotumwa kupitia API", "Ili kupata salio la bure", "Haihitajiki"], answer: 1, why: "Lazima uwaambie watumiaji jinsi data yao inavyoshughulikiwa." },
      { objective: "O6", q: "Nani anapaswa kukagua sera yako ya faragha na masharti?", options: ["Mazungumzo ya AI tu", "Wakili", "Mtumiaji wako wa kwanza", "Hakuna mtu"], answer: 1, why: "Nyaraka za kisheria zinahitaji ukaguzi wa mtaalamu." },
      { objective: "O6", q: "Njia salama ya kuzindua ni:", options: ["Kwa kikundi kidogo cha watumiaji wa soko lako kwanza", "Kwa kila mtu mara moja bila msaada", "Bila njia ya mawasiliano", "Bila kujaribu"], answer: 0, why: "Uzinduzi mdogo unakuruhusu kurekebisha matatizo mapema." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 1, 4, 6, 8, 10, 12, 13, 16, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mpango wa bidhaa", objective: "O2", notYet: "Soko, mtumiaji, tatizo au kipengele kikuu haviko wazi au havipo.", meets: "Ukurasa mmoja wenye soko, mtumiaji, tatizo, kipengele kikuu kimoja na sheria za \"kamwe\".", exceeds: "Unajumuisha kile mtumiaji wa soko alichosema kuhusu wazo." },
      { name: "Mfano", objective: "O4", notYet: "Hakuna mfano, au prompt haikujaribiwa kwa mifano halisi.", meets: "Mfano wa skrini, app isiyohitaji msimbo au notebook ya kipengele kikuu, iliyojaribiwa kwa mifano kumi isiyo na majina.", exceeds: "Ulionyeshwa kwa mtumiaji wa soko, na mabadiliko yalifanywa kutokana na alichofanya." },
      { name: "Makadirio ya gharama ya AI", objective: "O3", notYet: "Hakuna gharama kwa kila mtumiaji, au bei hazikutoka ukurasa wa mtoa huduma.", meets: "Gharama ya AI kwa kila mtumiaji kwa mwezi kutokana na maombi, ukubwa na bei ya sasa, fomula zikiwa zimekaguliwa.", exceeds: "Inaonyesha gharama kwa mtumiaji mwepesi na mtumiaji mzito." },
      { name: "Karatasi ya bei", objective: "O5", notYet: "Bei hailipii matumizi ya AI na gharama nyingine.", meets: "Mipango miwili yenye mipaka na faida kwa kila mtumiaji katika kila mpango, fomula zikiwa zimekaguliwa.", exceeds: "Inaunganisha bei ya kila mpango na thamani unayowapa watumiaji." },
      { name: "Orodha ya ukaguzi ya uzinduzi", objective: "O6", notYet: "Inakosa madai ya kweli, data, faragha na masharti, au njia ya mawasiliano.", meets: "Kila kipengele cha orodha, ukaguzi wa wakili umepangwa na uzinduzi wa kwanza ni mdogo.", exceeds: "Inaorodhesha hasa data ipi ya watumiaji inakusanywa na mtoa huduma anaifanyia nini." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoonyesha mfano wao kwa angalau watumiaji watatu wa soko ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaozindua kwa kikundi kidogo cha kwanza au kupata mtumiaji wa kwanza anayelipa",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye spreadsheet na msaidizi wa AI wa bure",
      "Kwa hiari: notebook ya bure kama Google Colab, au zana isiyohitaji msimbo au ya kutengeneza mifano ya skrini",
      "Mifano kumi halisi isiyo na majina kutoka soko lililochaguliwa",
      "Kama dakika 75 kwa masomo na majaribio, pamoja na muda wa kujenga na kujaribu mfano"
    ],
    facilitatorNotes: [
      "Waruhusu wasioandika msimbo kujenga mfano wa skrini wa kubofya; app inayofanya kazi si lazima.",
      "Usionyeshe kamwe ufunguo halisi wa API kwenye skrini; wafundishe wanafunzi kutoweka funguo kwenye mazungumzo na faili.",
      "Kagua bei za sasa za modeli za AI kwenye ukurasa wa mtoa huduma kabla ya kipindi cha kupanga bei.",
      "Wakumbushe wanafunzi kwamba sera za faragha na masharti zinahitaji wakili, na maswali ya kodi ya mauzo yanahitaji mhasibu.",
      "Pima kifurushi cha kuanzia kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};
