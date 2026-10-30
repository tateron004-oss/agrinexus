"use strict";

// Koach Learn course (Swahili translation of shared/ai-in-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-in-business-sw",
  lang: "sw",
  translationOf: "ai-in-business",
  category: "Small Business",
  name: "AI katika Biashara: Mikakati na Matumizi",
  skills: "Kutambua nafasi za kutumia AI, Kulinganisha kazi na zana za AI, Kupima thamani na hatari, Kuandika hoja ya biashara ya ukurasa mmoja, Kuendesha majaribio madogo, Kupima matokeo",
  outcome: "kupata mahali bora pa kutumia AI katika biashara au shirika, kupima thamani na hatari yake, kuandika hoja ya biashara ya ukurasa mmoja, na kuendesha na kupima majaribio madogo ya wiki mbili.",
  about: [
    "AI sasa ni sehemu ya biashara ya kila siku: kuandika, huduma kwa wateja, kupanga ratiba, mauzo, uhasibu na mipango. Sehemu ngumu si zana yenyewe. Ni kuchagua kazi sahihi ya kuipa, na kuthibitisha kwamba inasaidia.",
    "Kozi hii ni kwa wamiliki wa biashara ndogo, viongozi wa mashirika yasiyo ya faida, mameneja, wajasiriamali vijana na yeyote anayetaka kuleta AI kazini kwa njia ya busara na salama. Mifano ni pamoja na saluni ya nywele, ghala la chakula la msaada, kikundi cha kutunza bustani na duka linaloendeshwa na wanafunzi.",
    "Utaorodhesha muda unakokwenda katika shirika, utachagua nafasi bora ya AI, utaeleza kwa nini inafaa, na utaijaribu kwa majaribio madogo. Kila somo linachukua kama dakika tano, pamoja na kazi ya \"Jaribu sasa\". Jaribio la maarifa linamaliza kila sura, na mtihani wa maswali 20 unamaliza kozi."
  ],
  finalTask: "Kwa shirika halisi au la mazoezi, andika hoja ya biashara ya AI ya ukurasa mmoja: kazi, zana ya AI, muda au pesa zinazotarajiwa kuokolewa, hatari na jinsi utakavyozidhibiti, na mafanikio yataonekanaje. Kisha endesha majaribio ya wiki mbili (au toleo la mazoezi la siku moja), andika namba za kabla na baada, na uandike pendekezo la sentensi tatu: panua, badilisha au acha.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo, mameneja na wafanyakazi, na viongozi wa mashirika yasiyo ya faida na ya kijamii wanaotaka kutumia AI kuokoa muda au kuwahudumia wateja vizuri zaidi.",
    startingPoint: "Wanaijua vizuri biashara au shirika lao na huenda wamewahi kujaribu msaidizi wa AI. Wachache wamepima muda wa wafanyakazi unakokwenda, wamepima hatari za AI, au wamejaribu zana mpya kwa mpango.",
    gap: "Wamiliki wengi ama wanaikwepa AI ama wanaijaribu bila mpango kisha wanakata tamaa. Wanafunzi wanahitaji njia rahisi wanayoweza kurudia: kuchagua kazi sahihi, kupima thamani na hatari, kupata uungwaji mkono kwa hoja fupi ya biashara, na kuthibitisha matokeo kwa majaribio madogo, ili AI iokoe muda halisi bila kuhatarisha data au imani ya wateja.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi ya biashara; hakuna ujuzi wa kiufundi unaohitajika",
      "Vifaa: simu au kompyuta; spreadsheet (jedwali la kompyuta) inasaidia katika ukaguzi wa muda",
      "Muda: masomo ya dakika 5, pamoja na majaribio ya wiki mbili au toleo la mazoezi la siku moja",
      "Faragha: hakuna taarifa binafsi za wateja, wafanyakazi au wafadhili, nywila wala namba za benki katika zana za AI",
      "Hakuna maamuzi ya kisheria, ya kitabibu au ya kodi yanayoachiwa AI; mtu hukagua na kuamua"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi za biashara", action: "kutambua zipi zana za AI za leo zinazifanya vizuri na zipi zinahitaji mtu kukagua au kuamua", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Kwa shirika halisi au la mazoezi", action: "kuorodhesha kazi zinazorudiwa katika wiki ya kawaida na kuhesabu saa ambazo kila moja inachukua", standard: "ukiwa umezungushia duara kazi tano za juu kwa saa" },
    { id: "O3", condition: "Ukipewa kazi zako bora za kufanyiwa na AI", action: "kupima kila moja kwa thamani, juhudi na hatari na kuchagua moja ya kuanza nayo", standard: "ukitaja data yoyote binafsi inayohusika" },
    { id: "O4", condition: "Kwa kazi uliyochagua", action: "kuandika hoja ya biashara ya AI ya ukurasa mmoja", standard: "yenye sehemu zote sita na namba halisi kutoka kwenye ukaguzi wako wa muda" },
    { id: "O5", condition: "Kwa majaribio madogo ya AI", action: "kupanga na kuendesha majaribio yenye namba za mwanzo, sheria wazi na daftari la kila siku", standard: "ukiandika namba zile zile kabla na baada" },
    { id: "O6", condition: "Ukipewa namba zako za mwanzo na za majaribio", action: "kulinganisha matokeo na kupendekeza kupanua, kubadilisha au kuacha", standard: "ukihesabu muda uliotumika kurekebisha makosa ya AI, kwa sentensi tatu" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata nafasi sahihi ya AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI inafanya nini vizuri katika biashara leo",
          minutes: 5,
          goal: "Taja aina za kazi za biashara ambazo zana za AI za leo zinafanya vizuri na zinazofanya vibaya.",
          text: [
            "AI nyingi ya biashara leo ni AI ya kuzalisha (generative AI): zana kama ChatGPT, Microsoft Copilot na Google Gemini zinazoandika, kufupisha, kupanga na kujibu kwa lugha ya kawaida. AI nyingine imo ndani ya programu ambazo huenda unazitumia tayari, kama vichujio vya barua pepe, utabiri wa mauzo na tahadhari za udanganyifu.",
            "AI ina nguvu katika rasimu za kwanza (barua pepe, machapisho, mapendekezo), muhtasari (mikutano, nyaraka ndefu, maoni ya wateja), kupanga na kuweka lebo (maswali ya wateja, risiti), kutoa mawazo mapya, na kujibu maswali ya kawaida kutoka kwa taarifa zako mwenyewe.",
            "AI ni dhaifu katika ukweli kamili ambao haikupewa, maamuzi ya mwisho kuhusu watu au pesa, chochote kinachohitaji leseni (ushauri wa kisheria, wa kitabibu, wa kodi), na hali ambapo kosa ni ghali na ni gumu kuligundua. Katika hayo, mtu lazima akague au aamue."
          ],
          words: [["AI ya kuzalisha (generative AI)", "AI inayotengeneza maandishi, picha au maudhui mengine kutokana na ombi."], ["Matumizi (use case)", "kazi maalum ambayo zana inatumika kuifanya."]],
          slides: [
            { title: "AI ina nguvu katika", bullets: ["Rasimu za kwanza na muhtasari", "Kupanga na kuweka lebo", "Kutoa mawazo na kujibu maswali ya kawaida"] },
            { title: "AI ni dhaifu katika", bullets: ["Ukweli kamili ambao haikupewa", "Maamuzi ya mwisho kuhusu watu au pesa", "Ushauri wenye leseni: kisheria, kitabibu, kodi"] },
            { title: "Kanuni rahisi", bullets: ["AI inaandika rasimu; watu wanaamua", "Kosa likiwa ghali zaidi, ukaguzi uwe zaidi"] }
          ],
          tryIt: "Orodhesha kazi tano katika biashara au shirika unalolijua. Weka alama kwa kila moja \"AI ina nguvu\", \"AI pamoja na ukaguzi\" au \"iachie watu\", pamoja na sababu moja.",
          youCanNow: "kutambua kazi zipi za biashara AI inazifanya vizuri na zipi zinahitaji mtu.",
          quickCheck: [
            { objective: "O1", q: "AI ya leo ni dhaifu katika kazi ipi?", options: ["Kufupisha mkutano mrefu", "Kuandika rasimu ya chapisho la mitandao ya kijamii", "Kutoa ushauri wa mwisho wa kodi kwa biashara yako", "Kupanga maswali ya wateja kwa mada"], answer: 2, why: "Chochote kinachohitaji leseni, kama ushauri wa kodi, kinahitaji mtu au mtaalamu." },
            { objective: "O1", q: "Duka lako linapata mamia ya maoni mtandaoni. AI inaweza kusaidiaje kwanza?", options: ["Kuyafupisha ili kupata malalamiko yanayojirudia zaidi", "Kuwajibu wateja wenye hasira bila mtu kukagua", "Kuamua wafanyakazi gani waachishwe kazi kwa kutegemea maoni", "Kufuta maoni mabaya"], answer: 0, why: "Kufupisha maoni mengi ni nguvu ya AI, na bado mtu ndiye anaamua cha kufanya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuorodhesha muda unakokwenda",
          minutes: 5,
          goal: "Orodhesha kazi zinazorudiwa katika shirika na utambue kazi bora za kufanyiwa na AI.",
          text: [
            "Nafasi bora za AI zimejificha katika kazi zinazorudiwa na zinazochukua muda mwingi. Pitia wiki ya kawaida na uorodheshe kazi kwa idara au nafasi ya kazi: mauzo, huduma kwa wateja, masoko, utawala, fedha, uendeshaji.",
            "Kwa kila kazi, kadiria inafanyika mara ngapi na inachukua muda gani. Kazi inayofanywa mara 20 kwa wiki kwa dakika 10 ni zaidi ya saa tatu kwa wiki. Hapo ndipo AI inalipa.",
            "Tafuta mifumo inayojirudia: kujibu maswali yale yale, kuandika barua pepe zinazofanana, kunakili taarifa kutoka sehemu moja kwenda nyingine, kufupisha maelezo, kutengeneza ratiba. Hizi ni kazi za kawaida za kufanyiwa na AI au automation (kazi kujiendesha yenyewe)."
          ],
          steps: ["Orodhesha kazi zinazofanywa katika wiki ya kawaida, kwa nafasi ya kazi.", "Kadiria mara ngapi na muda gani kwa kila moja.", "Zidisha ili kupata saa kwa wiki.", "Zungushia duara kazi tano za juu kwa saa.", "Weka alama zipi kati ya hizo zinafaa nguvu za AI."],
          words: [["Kazi inayojirudia", "kazi inayofanywa kwa njia ile ile tena na tena."], ["Ukaguzi wa muda", "orodha ya kazi na muda ambao kila moja inachukua."]],
          slides: [
            { title: "Tafuta kazi zinazorudiwa", bullets: ["Maswali yale yale, barua pepe zinazofanana", "Kunakili taarifa kati ya sehemu", "Muhtasari na ratiba"] },
            { title: "Piga hesabu", bullets: ["Mara ngapi x muda gani = saa kwa wiki", "Mara 20 x dakika 10 = zaidi ya saa 3"] },
            { title: "Chagua kazi za AI", bullets: ["Tano za juu kwa saa", "Zilinganishe na nguvu za AI"] }
          ],
          tryIt: "Fanya ukaguzi wa muda kwa nafasi moja ya kazi katika shirika halisi au la mazoezi. Orodhesha angalau kazi nane pamoja na saa kwa wiki, na uzungushie duara kazi tatu bora za kufanyiwa na AI.",
          youCanNow: "kuorodhesha kazi zinazorudiwa katika shirika na kutambua kazi bora za kufanyiwa na AI.",
          quickCheck: [
            { objective: "O2", q: "Kazi inafanyika mara 12 kwa wiki na inachukua dakika 15 kila mara. Hiyo ni saa ngapi kwa wiki?", options: ["Saa 1", "Saa 2", "Saa 12", "Saa 3"], answer: 3, why: "Mara 12 x dakika 15 ni dakika 180, ambazo ni saa 3." },
            { objective: "O2", q: "Unaorodhesha muda katika shirika lisilo la faida. Kazi ipi unaiangalia kwanza kwa AI?", options: ["Kura ya bodi inayofanyika mara moja kwa mwaka", "Kuandika barua pepe ile ile ya shukrani kwa wafadhili kila wiki", "Kuchagua mkurugenzi mtendaji mpya", "Kusaini mikataba"], answer: 1, why: "Kazi za kuandika zinazorudiwa na zinazofanana ndipo AI inalipa zaidi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupima nafasi kwa thamani na hatari",
          minutes: 5,
          goal: "Pima mawazo ya AI kwa thamani, juhudi na hatari na uchague moja la kufuatilia.",
          text: [
            "Si kila wazo la AI linafaa kufanywa kwanza. Mpe kila wazo alama kutoka 1 hadi 5 kwa mambo matatu. Thamani: linaongeza muda, pesa au furaha ya wateja kiasi gani. Juhudi: ni vigumu kiasi gani kuliweka na kujifunza. Hatari: nini kinatokea AI ikikosea, na kama data binafsi inahusika.",
            "Chagua ushindi wa haraka: thamani kubwa, juhudi ndogo, hatari ndogo. Kuandika rasimu za majibu kwa barua pepe za kawaida za wateja, huku mtu akizikagua, ni ushindi wa haraka wa kawaida. Kutumia AI kuamua nani aajiriwe au nani apewe msaada ni hatari kubwa na si mradi wa kwanza.",
            "Kagua data na faragha mapema. Kama kazi inatumia taarifa za wateja, wafanyakazi, wafadhili au za afya, jua zana yako ya AI inafanya nini na data hiyo, na kama inahitajika toleo la biashara lenye ulinzi zaidi wa faragha."
          ],
          steps: ["Orodhesha mawazo yako matatu bora.", "Mpe kila moja alama 1-5 kwa thamani, juhudi na hatari.", "Pendelea thamani kubwa, juhudi ndogo, hatari ndogo.", "Andika data binafsi yoyote inayohusika.", "Chagua moja la kuanza nalo."],
          words: [["Ushindi wa haraka", "mradi unaoleta thamani wazi haraka kwa juhudi na hatari ndogo."], ["Hatari", "uwezekano na gharama ya jambo kwenda vibaya."]],
          slides: [
            { title: "Alama 1 hadi 5", bullets: ["Thamani: muda, pesa, furaha ya wateja", "Juhudi: kuweka na kujifunza", "Hatari: gharama ya makosa, data binafsi"] },
            { title: "Anza na ushindi wa haraka", bullets: ["Thamani kubwa, juhudi ndogo, hatari ndogo", "Mfano: AI inaandika rasimu ya majibu, mtu anakagua"] },
            { title: "Si mradi wa kwanza", bullets: ["Maamuzi ya kuajiri au kuidhinisha", "Chochote chenye maamuzi ya afya au pesa"] }
          ],
          tryIt: "Pima mawazo yako matatu bora ya AI kwa thamani, juhudi na hatari katika jedwali dogo. Chagua ushindi mmoja wa haraka na uandike sentensi mbili kueleza kwa nini.",
          youCanNow: "kupima mawazo ya AI kwa thamani, juhudi na hatari na kuchagua mradi wa kwanza wa busara.",
          quickCheck: [
            { objective: "O3", q: "Unapopima wazo la AI, \"juhudi\" inamaanisha nini?", options: ["Ni vigumu kiasi gani kuliweka na kujifunza", "Linaleta pesa kiasi gani", "Wateja wangapi wanalipenda", "Data ni ya faragha kiasi gani"], answer: 0, why: "Juhudi ni jinsi ilivyo vigumu kuliweka wazo na kujifunza." },
            { objective: "O3", q: "Mawazo mawili yana thamani sawa. Moja linatumia rekodi za afya na jingine linatumia taarifa za bidhaa zilizo wazi kwa umma. Unachagua lipi kwanza?", options: ["La rekodi za afya, kwa sababu ni gumu zaidi", "Hakuna; AI si salama kamwe", "La taarifa za bidhaa, kwa sababu lina hatari ndogo", "Yote mawili kwa pamoja"], answer: 2, why: "Thamani ikiwa sawa, chagua wazo lenye hatari ndogo lisilohusisha data binafsi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata nafasi sahihi ya AI",
        questions: [
          { objective: "O1", q: "AI ya kuzalisha ya leo ina nguvu zaidi katika kazi ipi?", options: ["Kuamua nani aajiriwe", "Kutoa ushauri wa kodi", "Kuandika rasimu ya jibu kwa barua pepe ya kawaida ya mteja", "Kusaini mikataba"], answer: 2, why: "Rasimu za kwanza ni nguvu kuu; maamuzi na ushauri wenye leseni unahitaji watu." },
          { objective: "O2", q: "Kazi inafanyika mara 30 kwa wiki na inachukua dakika 6. Hiyo ni saa ngapi kwa wiki?", options: ["Saa 3", "Saa 30", "Saa 6", "Nusu saa"], answer: 0, why: "30 x dakika 6 = dakika 180 = saa 3." },
          { objective: "O3", q: "Ushindi wa haraka ni nini?", options: ["Hatari kubwa, juhudi kubwa", "Mradi wowote wenye neno AI katika jina lake", "Zana ya bei ghali zaidi", "Thamani kubwa, juhudi ndogo, hatari ndogo"], answer: 3, why: "Ushindi wa haraka unathibitisha thamani haraka kwa hatari ndogo." },
          { objective: "O3", q: "Kwa nini kutumia AI kukubali au kukataa waombaji wa kazi ni mradi mbaya wa kwanza?", options: ["Ni rahisi mno", "Ni hatari kubwa: makosa yanaumiza watu na yanaweza kuwa si ya haki", "AI haiwezi kusoma", "Haiokoi muda wowote"], answer: 1, why: "Maamuzi kuhusu watu ni hatari kubwa na yanahitaji udhibiti makini wa binadamu." },
          { objective: "O3", q: "Kazi inatumia data ya wafadhili au wateja. Unapaswa kukagua nini mapema?", options: ["Rangi za zana", "Zana ya AI inafanya nini na data hiyo", "Hakuna kitu", "Inatumia emoji ngapi"], answer: 1, why: "Faragha lazima ikaguliwe kabla data binafsi haijaingia kwenye zana." }
        ]
      }
    },
    {
      name: "Sura 2: Kueleza hoja na kuithibitisha",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika hoja ya biashara ya AI ya ukurasa mmoja",
          minutes: 5,
          goal: "Andika hoja ya biashara ya ukurasa mmoja ambayo bosi, bodi au mshirika anaweza kuikubali.",
          text: [
            "Hoja ya biashara (business case) inaeleza kwa nini mradi unafaa kufanywa. Iweke ukurasa mmoja tu ili watu wenye shughuli nyingi waisome.",
            "Weka sehemu sita: tatizo (kwa saa au dola), suluhisho la AI linalopendekezwa na zana yake, faida inayotarajiwa, gharama (ada za usajili, muda wa mafunzo), hatari na jinsi utakavyozidhibiti, na jinsi utakavyopima mafanikio.",
            "Tumia namba halisi kutoka kwenye ukaguzi wako wa muda. \"Wafanyakazi wanatumia saa 4 kwa wiki kujibu maswali yale yale 10. Maktaba ya majibu yaliyoandikwa na AI, yanayokaguliwa na wafanyakazi, inaweza kupunguza hadi saa 1.5, na kuokoa kama saa 10 kwa mwezi.\" AI inaweza kukusaidia kuandika rasimu ya ukurasa; wewe unaleta ukweli."
          ],
          steps: ["Tatizo: linagharimu nini sasa kwa muda au pesa.", "Suluhisho: zana ya AI na jinsi itakavyotumika.", "Faida: akiba au maboresho yanayotarajiwa.", "Gharama: pesa na muda wa mafunzo.", "Hatari na udhibiti: nani anakagua kazi ya AI.", "Kipimo cha mafanikio: namba utakayofuatilia."],
          words: [["Hoja ya biashara", "hati fupi inayoeleza kwa nini mradi unafaa kufanywa."], ["Udhibiti", "hatua inayopunguza hatari, kama mtu kukagua kazi ya AI."]],
          slides: [
            { title: "Iweke ukurasa mmoja", bullets: ["Watu wenye shughuli nyingi husoma hati fupi", "Tumia namba halisi"] },
            { title: "Sehemu sita", bullets: ["Tatizo, suluhisho, faida", "Gharama, hatari na udhibiti", "Kipimo cha mafanikio"] },
            { title: "AI inaandika rasimu, wewe unaleta ukweli", bullets: ["Bandika namba za ukaguzi wako", "Kagua kila namba katika rasimu"] }
          ],
          tryIt: "Andika hoja ya biashara ya ukurasa mmoja kwa ushindi wako wa haraka uliouchagua, yenye sehemu zote sita. Unaweza kuiomba AI isafishe maneno, lakini kagua kila namba.",
          youCanNow: "kuandika hoja fupi ya biashara inayotegemea namba kwa mradi wa AI.",
          quickCheck: [
            { objective: "O4", q: "Sehemu ipi ya hoja ya biashara inasema nani anakagua kazi ya AI?", options: ["Tatizo", "Hatari na udhibiti", "Faida", "Gharama"], answer: 1, why: "Hatari na udhibiti zinasema nini kinaweza kwenda vibaya na nani anakagua kazi ya AI." },
            { objective: "O4", q: "Bosi wako anauliza kwa nini mradi wa AI unafaa. Nini kinafanya hoja yako iwe na nguvu zaidi?", options: ["Ripoti ndefu isiyo na namba", "Kusema AI ndiyo siku zijazo", "Orodha ya kila zana ya AI uliyoipata", "Namba halisi kutoka kwenye ukaguzi wako wa muda zinazoonyesha saa zilizookolewa"], answer: 3, why: "Namba halisi kutoka kwenye ukaguzi wako wa muda zinaonyesha faida inayotarajiwa kwa uwazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuendesha majaribio madogo",
          minutes: 5,
          goal: "Panga na uendeshe majaribio ya AI ya wiki mbili yenye sheria wazi na kipimo cha kabla na baada.",
          text: [
            "Majaribio (pilot) ni jaribio dogo lenye muda maalum. Yanakuwezesha kujifunza kwa gharama ndogo kabla ya kutumia pesa zaidi. Wiki mbili na mtu mmoja au wawili mara nyingi zinatosha.",
            "Pima kabla ya kuanza. Fuatilia namba za sasa kwa siku chache: muda unaotumika, idadi ya kazi, makosa au malalamiko ya wateja. Kisha endesha majaribio na ufuatilie namba zile zile.",
            "Weka sheria wazi: kazi zipi zinatumia AI, nani anakagua matokeo, taarifa zipi hazipaswi kamwe kuingia kwenye zana (taarifa binafsi za wateja, wafanyakazi au wafadhili, nywila, namba za benki), na nini cha kufanya AI ikikosea."
          ],
          steps: ["Chagua mtu mmoja au wawili na kipindi cha wiki mbili.", "Andika namba za mwanzo kwa siku chache.", "Andika sheria rahisi: kazi, nani anakagua, nini hakiingii kamwe.", "Endesha majaribio na uweke daftari fupi la kila siku.", "Andika namba zile zile mwishoni."],
          words: [["Majaribio (pilot)", "jaribio dogo la wazo jipya lenye muda maalum."], ["Namba za mwanzo (baseline)", "namba za kabla ya mabadiliko, zinazotumika kulinganisha baadaye."]],
          slides: [
            { title: "Madogo na yenye muda maalum", bullets: ["Wiki mbili, mtu mmoja au wawili", "Jifunze kwa gharama ndogo kabla ya kutumia zaidi"] },
            { title: "Pima kabla na baada", bullets: ["Muda unaotumika, kazi zilizofanywa", "Makosa au malalamiko"] },
            { title: "Sheria za majaribio", bullets: ["Kazi zipi zinatumia AI na nani anakagua", "Hakuna taarifa binafsi kwenye zana", "Nini cha kufanya AI ikikosea"] }
          ],
          tryIt: "Andika mpango wa majaribio kwa ushindi wako wa haraka: watu, tarehe, namba za mwanzo, sheria na muundo wa daftari la kila siku. Ukiweza, endesha toleo la mazoezi la siku moja na uandike namba.",
          youCanNow: "kupanga na kuendesha majaribio madogo ya AI yenye sheria na namba za kabla na baada.",
          quickCheck: [
            { objective: "O5", q: "Majaribio madogo ya AI ya kawaida katika kozi hii huchukua muda gani?", options: ["Mwaka mmoja", "Miezi sita", "Wiki mbili", "Saa moja"], answer: 2, why: "Wiki mbili na mtu mmoja au wawili mara nyingi zinatosha kujifunza kwa gharama ndogo." },
            { objective: "O5", q: "Unakaribia kuanza majaribio kesho. Lazima ufanye nini kwanza?", options: ["Kuandika namba za mwanzo kwa siku chache", "Kununua mpango wa bei ghali zaidi", "Kuipa zana taarifa za kila mteja", "Kuwaambia wafanyakazi waache kukagua kazi ya AI"], answer: 0, why: "Namba za mwanzo zinakuwezesha kulinganisha kabla na baada." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupima matokeo na kuamua hatua inayofuata",
          minutes: 5,
          goal: "Linganisha matokeo ya majaribio na namba za mwanzo na upendekeze kupanua, kubadilisha au kuacha.",
          text: [
            "Mwishoni mwa majaribio, linganisha. Je, muda ulipungua? Je, ubora ulibaki au uliboreka? Je, wateja au wafanyakazi waliona tofauti? Namba ni muhimu, lakini pia waulize watu walioitumia nini kilisaidia na nini kilizuia.",
            "Angalia gharama zilizojificha: muda uliotumika kurekebisha makosa ya AI, wafanyakazi kuchanganyikiwa, au wateja ambao hawakupenda mabadiliko. Zana inayookoa saa 3 lakini inasababisha saa 2 za marekebisho inaokoa saa 1 tu.",
            "Toa pendekezo lililo wazi. Panua kama ilifanya kazi. Badilisha kama ilifanya kazi kwa sehemu. Acha kama haikufanya kazi, na useme ulijifunza nini. Kuacha majaribio si kushindwa; kumekuokoa kutoka kwenye kosa kubwa zaidi."
          ],
          steps: ["Weka namba za mwanzo na za majaribio kando kwa kando.", "Toa muda uliotumika kurekebisha makosa ya AI.", "Waulize watu walioitumia maswali mawili: nini kilisaidia, nini kilizuia.", "Pendekeza kupanua, kubadilisha au kuacha, kwa sentensi tatu."],
          words: [["Gharama iliyojificha", "gharama iliyo rahisi kusahau, kama muda uliotumika kurekebisha makosa."], ["Pendekezo", "ushauri wako wa nini kifanyike baadaye, pamoja na sababu."]],
          slides: [
            { title: "Linganisha kwa uaminifu", bullets: ["Muda, ubora, maoni ya wateja", "Waulize watu walioitumia"] },
            { title: "Hesabu gharama zilizojificha", bullets: ["Muda wa kurekebisha makosa ya AI", "Kuchanganyikiwa au wateja wasioridhika"] },
            { title: "Amua", bullets: ["Panua, badilisha au acha", "Kuacha majaribio ni funzo, si kushindwa"] }
          ],
          tryIt: "Kazi ya mwisho: weka namba zako za kabla na baada katika jedwali (halisi au kutoka siku yako ya mazoezi), toa gharama zilizojificha, na uandike pendekezo la sentensi tatu la kuambatana na hoja yako ya biashara ya ukurasa mmoja.",
          youCanNow: "kupata, kutetea, kujaribu na kutathmini mradi wa AI katika biashara au shirika.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini uwaulize watu walioitumia zana ya AI nini kiliwazuia?", options: ["Ili kuwalaumu", "Kwa sababu namba hazina faida kamwe", "Ili kurefusha majaribio", "Ili kupata matatizo ambayo namba huenda zisionyeshe"], answer: 3, why: "Watumiaji wanaweza kutaja gharama zilizojificha na matatizo ambayo namba hazionyeshi." },
            { objective: "O6", q: "Majaribio yaliokoa muda lakini wateja walilalamikia majibu mapya. Unapendekeza nini?", options: ["Kuyapanua kwa kila mtu mara moja", "Kuyabadilisha, kwa mfano kuongeza hatua ya mfanyakazi kukagua, na kujaribu tena", "Kuficha malalamiko", "Kuacha kupima"], answer: 1, why: "Kama yalifanya kazi kwa sehemu, yabadilishe na ujaribu tena." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kueleza hoja na kuithibitisha",
        questions: [
          { objective: "O4", q: "Nini kinafaa kuwa katika hoja ya biashara ya AI?", options: ["Nywila za wafanyakazi", "Orodha ya kila zana ya AI iliyowahi kutengenezwa", "Namba za simu za wateja", "Hatari na nani anakagua kazi ya AI"], answer: 3, why: "Hatari na udhibiti ni mojawapo ya sehemu sita." },
          { objective: "O5", q: "Namba za mwanzo (baseline) ni nini?", options: ["Namba za kabla ya mabadiliko, zinazotumika kulinganisha", "Neno la michezo tu", "Bei ya AI", "Ripoti ya mwisho"], answer: 0, why: "Unalinganisha matokeo ya majaribio na namba za mwanzo." },
          { objective: "O5", q: "Sheria ipi ni nzuri kwa majaribio?", options: ["Iache AI itume kila kitu bila ukaguzi", "Ruka kupima", "Usiweke kamwe taarifa binafsi za wateja kwenye zana ya AI", "Yaendeshe kwa miaka mitatu kwanza"], answer: 2, why: "Kuzuia data binafsi isiingie ni sheria muhimu." },
          { objective: "O6", q: "AI iliokoa saa 3 lakini wafanyakazi walitumia saa 2 kurekebisha makosa yake. Akiba halisi ni ipi?", options: ["Saa 5", "Saa 3", "Hakuna inayohesabika", "Saa 1"], answer: 3, why: "Gharama zilizojificha zinatolewa kwenye akiba." },
          { objective: "O6", q: "Majaribio hayakuokoa muda. Unapaswa kupendekeza nini?", options: ["Kuyapanua kwa kampuni nzima", "Kuficha matokeo", "Kuyaacha au kuyabadilisha, na kuandika ulichojifunza", "Kununua mpango wa bei ghali zaidi bila kujaribu"], answer: 2, why: "Matokeo ya kweli yanaongoza hatua inayofuata." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI katika Biashara: Mikakati na Matumizi",
    questions: [
      { objective: "O1", q: "AI ya kuzalisha ni AI ambayo:", options: ["Inafanya hesabu tu", "Inatengeneza maandishi, picha au maudhui mengine kutokana na ombi", "Inachukua nafasi ya wafanyakazi wote", "Inafanya kazi bila intaneti tu"], answer: 1, why: "Inazalisha maudhui kutokana na ombi." },
      { objective: "O1", q: "Lipi ni matumizi mazuri ya AI katika biashara ndogo?", options: ["Kufupisha maoni ya wateja ili kupata malalamiko yanayojirudia", "Kuamua mishahara ya wafanyakazi peke yake", "Kuwapa wateja ushauri wa kisheria", "Kusaini hundi"], answer: 0, why: "Kufupisha ni nguvu kuu ya AI." },
      { objective: "O1", q: "Nani anapaswa kufanya maamuzi ya mwisho kuhusu watu au pesa?", options: ["AI", "Hakuna mtu", "Mtu", "Muuzaji wa programu"], answer: 2, why: "AI inaandika rasimu; watu wanaamua." },
      { objective: "O2", q: "Ukaguzi wa muda unaorodhesha:", options: ["Kazi na muda ambao kila moja inachukua", "Siku za kuzaliwa za wafanyakazi", "Bei za programu tu", "Wafuasi wa mitandao ya kijamii"], answer: 0, why: "Unaonyesha muda unakokwenda." },
      { objective: "O2", q: "Kazi ipi ni ya kawaida ya kufanyiwa na AI?", options: ["Ukaguzi wa jengo unaofanywa mara moja", "Kupeana mkono na mteja mpya", "Kusaini mkataba wa kukodisha", "Kuandika barua pepe zinazofanana tena na tena"], answer: 3, why: "Kazi za kuandika zinazorudiwa zinafaa AI." },
      { objective: "O2", q: "Kazi 15 kwa wiki za dakika 20 kila moja ni sawa na:", options: ["Saa 5", "Saa 15", "Saa 20", "Dakika 35"], answer: 0, why: "15 x 20 = dakika 300 = saa 5." },
      { objective: "O3", q: "Unapopima wazo la AI, \"hatari\" inamaanisha:", options: ["Bei ya zana", "Uwezekano na gharama ya jambo kwenda vibaya", "Linafurahisha kiasi gani", "Watu wangapi wanalipenda"], answer: 1, why: "Hatari inahusu makosa na gharama zake." },
      { objective: "O3", q: "Mradi upi ni bora wa kwanza wa AI?", options: ["AI inaamua nani apate huduma", "AI inachagua wafanyakazi gani waachishwe kazi", "AI inatoa ushauri wa kitabibu", "AI inaandika rasimu za majibu kwa barua pepe za kawaida, mtu anakagua"], answer: 3, why: "Una thamani kubwa, juhudi ndogo na hatari ndogo." },
      { objective: "O3", q: "Kwa nini ukague zana ya AI inafanya nini na data?", options: ["Data binafsi za wateja au wafadhili lazima zilindwe", "Inabadilisha mtindo wa herufi", "Si muhimu", "Ni kwa kampuni kubwa tu"], answer: 0, why: "Faragha ni muhimu kwa kila shirika." },
      { objective: "O4", q: "Hoja ya biashara inapaswa kuwa:", options: ["Ya kurasa hamsini", "Imeandikwa bila namba", "Fupi, kama ukurasa mmoja, yenye namba halisi", "Siri kwa wanaofanya maamuzi"], answer: 2, why: "Watu wenye shughuli nyingi husoma hati fupi zilizo wazi." },
      { objective: "O4", q: "Lipi ni \"udhibiti\"?", options: ["Kununua zana zaidi za AI", "Kuzima kompyuta", "Kupuuza makosa", "Mtu kukagua kazi ya AI kabla haijatumwa"], answer: 3, why: "Udhibiti unapunguza hatari." },
      { objective: "O4", q: "AI inaandika rasimu ya hoja yako ya biashara. Kazi yako ni:", options: ["Kuituma bila kuisoma", "Kuondoa namba zote", "Kukagua kila namba na kila ukweli", "Kuongeza akiba za uongo"], answer: 2, why: "Wewe unaleta na kukagua ukweli." },
      { objective: "O5", q: "Majaribio (pilot) ni:", options: ["Kuanzisha kitu katika kampuni nzima", "Jaribio dogo lenye muda maalum", "Aina ya mfumo wa AI", "Mkataba wa kudumu"], answer: 1, why: "Majaribio yanakuwezesha kujifunza kwa gharama ndogo." },
      { objective: "O5", q: "Unapaswa kuandika namba za mwanzo lini?", options: ["Kabla majaribio hayajaanza", "Baada ya kumalizika tu", "Kamwe", "Mwaka mmoja baadaye"], answer: 0, why: "Unahitaji namba za kabla ili kulinganisha." },
      { objective: "O5", q: "Nini HAKIPASWI KAMWE kuingia kwenye zana ya AI wakati wa majaribio?", options: ["Swali la mfano", "Rasimu ya kawaida ya barua pepe", "Namba za benki za wateja na nywila", "Saa za kazi za biashara yako"], answer: 2, why: "Taarifa binafsi na za kifedha zinabaki nje." },
      { objective: "O5", q: "Daftari la kila siku wakati wa majaribio linakusaidia:", options: ["Kukumbuka nini kilifanya kazi na nini kilienda vibaya", "Kuficha matatizo", "Kuepuka kupima", "Kuruka tathmini"], answer: 0, why: "Maelezo yanafanya tathmini ya mwisho iwe sahihi." },
      { objective: "O6", q: "Lipi ni gharama iliyojificha?", options: ["Bei ya zana iliyotangazwa", "Tarehe ya kuanza majaribio", "Idadi ya watumiaji", "Muda uliotumika kurekebisha makosa ya AI"], answer: 3, why: "Kurekebisha makosa ni rahisi kusahau." },
      { objective: "O6", q: "Mbali na namba, unapaswa kukusanya nini mwishoni mwa majaribio?", options: ["Nywila zao", "Kile watumiaji wanasema kilisaidia au kilizuia", "Anwani za nyumbani kwao", "Hakuna kitu"], answer: 1, why: "Maoni ya watumiaji yanaeleza namba." },
      { objective: "O6", q: "Majaribio yalifanya kazi kwa sehemu. Pendekezo la busara ni:", options: ["Kuyapanua kila mahali kwa wakati mmoja", "Kuyabadilisha na kujaribu tena", "Kuyaficha", "Kutojaribu AI tena kamwe"], answer: 1, why: "Mafanikio ya sehemu yanamaanisha rekebisha na ujaribu tena." },
      { objective: "O6", q: "Kuacha majaribio ambayo hayakufanya kazi ni:", options: ["Kushindwa kila mara", "Kinyume cha sheria", "Haiwezekani", "Funzo la manufaa lililoepusha kosa kubwa zaidi"], answer: 3, why: "Majaribio yapo ili kujua mambo kwa gharama ndogo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      2,
      4,
      5,
      7,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kazi na zana",
        objective: "O3",
        notYet: "Kazi ni ya hatari kubwa, kama maamuzi ya kuajiri, au hakuna zana iliyotajwa.",
        meets: "Kazi inayorudiwa yenye hatari ndogo na zana ya AI iliyotajwa, pamoja na data binafsi yoyote kuandikwa.",
        exceeds: "Inaonyesha alama za thamani, juhudi na hatari zilizoleta uchaguzi huu."
      },
      {
        name: "Hoja ya biashara",
        objective: "O4",
        notYet: "Sehemu zinakosekana, au hakuna namba.",
        meets: "Ukurasa mmoja wenye tatizo, suluhisho, faida, gharama, hatari na udhibiti, na kipimo cha mafanikio.",
        exceeds: "Kila namba inatoka kwenye ukaguzi wa muda na ni rahisi kuikagua."
      },
      {
        name: "Makadirio ya muda utakaookolewa",
        objective: "O2",
        notYet: "Akiba ni ubashiri bila ukaguzi wa muda.",
        meets: "Akiba inategemea kazi inafanyika mara ngapi na inachukua muda gani.",
        exceeds: "Pia inakadiria muda unaohitajika kukagua kazi ya AI."
      },
      {
        name: "Majaribio na namba za mwanzo",
        objective: "O5",
        notYet: "Hakuna namba za mwanzo, au majaribio hayakuwa na sheria.",
        meets: "Namba za mwanzo na za mwisho zimeandikwa, pamoja na sheria kuhusu kazi, nani anakagua na nini hakiingii kamwe.",
        exceeds: "Daftari la kila siku linaonyesha nini kilifanya kazi na nini kilienda vibaya."
      },
      {
        name: "Pendekezo",
        objective: "O6",
        notYet: "Hakuna pendekezo lililo wazi, au linapuuza namba.",
        meets: "Sentensi tatu zinazopendekeza kupanua, kubadilisha au kuacha, kwa kutegemea namba za kabla na baada.",
        exceeds: "Inatoa muda uliotumika kurekebisha makosa ya AI na inajumuisha kile watumiaji walisema."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mashirika yanayoendesha majaribio ndani ya siku 30 (utafiti wa kufuatilia)",
      "Saa kwa wiki zilizookolewa katika kazi iliyojaribiwa, kama zilivyoripotiwa na shirika",
      "Mashirika yanayopanua, kubadilisha au kuacha majaribio yao kwa kutegemea matokeo yaliyopimwa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini), au zana ambayo shirika tayari linatumia",
      "Spreadsheet (Google Sheets au Excel) kwa ukaguzi wa muda na namba za majaribio",
      "Kama dakika 60 kwa masomo na majaribio ya maarifa, pamoja na majaribio ya wiki mbili au toleo la mazoezi la siku moja"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; tengenezeni mfano wa ukaguzi wa muda kwenye skrini ya pamoja.",
      "Waombe wanafunzi walete orodha halisi ya kazi za wiki moja kutoka shirika lao.",
      "Kabla ya majaribio yoyote, pitieni sheria ili taarifa binafsi za wateja, wafanyakazi au wafadhili zisiingie kwenye zana za AI.",
      "Waalike wanafunzi kuwasilisha hoja yao ya biashara ya ukurasa mmoja kwa kikundi ili kupata maoni.",
      "Tathmini kazi ya mwisho kwa rubriki, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
