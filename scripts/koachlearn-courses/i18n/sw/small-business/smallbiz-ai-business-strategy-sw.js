"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-business-strategy.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-ai-business-strategy-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-business-strategy",
  category: "Small Business",
  name: "Kujenga Mkakati wa AI wa Biashara na Kuunganisha Zana",
  skills: "Kuchora ramani ya muda wako, Kuchagua miradi ya AI kwa thamani na hatari, Kuendesha majaribio ya siku 30, Kupima matokeo, Kuunganisha zana kwa usalama, Kuandika sera ya matumizi ya AI",
  outcome: "kuandika mpango wa AI wa ukurasa mmoja kwa biashara yako: kazi mbili utakazoboresha kwanza na kwa nini, majaribio ya siku 30 yenye kipimo cha kabla na baada, jinsi zana zako zitakavyounganishwa na nani anaidhinisha nini, na sera fupi ya matumizi ya AI kwa ajili yako na wafanyakazi wako.",
  about: [
    "Kozi hii ni kwa wamiliki wa biashara ndogo ambao wamejaribu AI kidogo na sasa wanataka mpango badala ya majaribio ya kubahatisha: maduka, mikahawa, saluni, huduma za usafi na za ukarabati, na ofisi ndogo.",
    "Utachora ramani ya jinsi muda wako unavyotumika, utachagua miradi ya AI yenye faida, utajaribu mmoja kwa siku 30 na kuupima, utajifunza jinsi zana zinavyounganishwa (integrations), na utaandika sheria rahisi za jinsi biashara yako inavyotumia AI.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi hizo zinajenga mpango wako wa AI wa ukurasa mmoja."
  ],
  finalTask: "Andika mpango wako wa AI wa ukurasa mmoja wenye sehemu tano: (1) ramani yako ya muda na kazi mbili ulizochagua, kila moja ikiwa na alama ya thamani na ya hatari; (2) majaribio ya siku 30 kwa kazi ya kwanza yenye kipimo cha kabla na baada; (3) mchoro rahisi au orodha ya jinsi zana zako zinavyounganishwa na hatua zipi zinahitaji idhini yako; (4) ukaguzi wa gharama; (5) sera ya matumizi ya AI yenye sheria tano kwa ajili yako na wafanyakazi wako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo ambao wamejaribu AI kidogo na sasa wanataka mpango badala ya majaribio ya kubahatisha: maduka, mikahawa, saluni, huduma za usafi na za ukarabati, na ofisi ndogo, baadhi zikiwa na wafanyakazi wachache.",
    startingPoint: "Wametumia msaidizi wa mazungumzo (chat) kwa kazi chache na wanatumia apps kadhaa za biashara kama zana ya kupanga miadi, malipo na spreadsheet (jedwali la hesabu). Hawana mpango ulioandikwa wa miradi ya AI ya kufanya, jinsi ya kuipima, jinsi zana zinavyounganishwa au sheria ni zipi.",
    gap: "Majaribio ya AI ya kubahatisha yanapoteza muda na pesa, na mifumo ya kujiendesha (automations) isiyo na idhini inaweza kurudia makosa ya gharama kubwa au kuvujisha data. Wamiliki wanahitaji kuchagua miradi yenye faida, kujaribu mmoja na kuupima, kuunganisha zana kwa usalama na kuweka sheria wazi za AI kwa ajili yao na wafanyakazi wao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: kompyuta au simu janja yenye apps ambazo biashara inatumia sasa",
      "Muda: masomo ya kama dakika 5 yanayoingia katika siku ya kazi yenye shughuli nyingi",
      "Bei na huduma za zana hubadilika; wamiliki wanakagua ukurasa wa bei wa kila zana",
      "Faragha na usalama: watu ndio wanaofanya maamuzi ya pesa, sheria, kuajiri na usalama; data ya wateja inalindwa"
    ],
    prerequisites: "Kwanza \"Utangulizi wa AI kwa Biashara Ndogo\" au \"Zana Muhimu za AI kwa Biashara Ndogo\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukikumbuka wiki ya kawaida", action: "kuchora ramani ya muda ya kazi zinazochukua muda wako", standard: "ikiwa na angalau kazi kumi, dakika za kila moja, zimepangwa katika makundi na kubwa tatu zimezungushiwa duara" },
    { id: "O2", condition: "Ukipewa angalau mawazo matano ya AI", action: "kupima kila wazo kwa thamani na hatari na kuchagua miradi miwili ya kuanzia", standard: "ukiwa na ushindi wa haraka na mradi mkubwa zaidi, kila mmoja ukiwa na sababu ya sentensi moja" },
    { id: "O3", condition: "Ukipewa mradi wako wa ushindi wa haraka", action: "kupanga majaribio ya siku 30 yenye kipimo cha kabla na baada", standard: "yakiwa na kipimo cha mwanzo, lengo lililo wazi na daftari la kila wiki" },
    { id: "O4", condition: "Ukipewa zana ambazo biashara yako inatumia", action: "kuchora jinsi zana zako zinavyopeana taarifa", standard: "kwa visanduku na mishale, na angalau hatua moja ya mkono inayoweza kujiendesha yenyewe" },
    { id: "O5", condition: "Ukipewa ramani ya zana zako na gharama zake", action: "kuweka alama kwenye hatua zinazohitaji idhini yako na kuhesabu gharama halisi ya kujiendesha", standard: "ukiweka nyota kwenye kila hatua inayotuma pesa au ujumbe kwa watu wengi, na kulinganisha gharama na saa zilizookolewa" },
    { id: "O6", condition: "Ukipewa jinsi biashara yako inavyotumia AI", action: "kuandika sera ya matumizi ya AI yenye sheria tano na mpango wa AI wa ukurasa mmoja", standard: "ukiwa na sehemu zote tano za mpango na sheria ambazo mfanyakazi anaziona wazi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua cha kuboresha",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchora ramani ya jinsi muda wako unavyotumika",
          minutes: 5,
          goal: "Chora ramani rahisi ya kazi zinazochukua muda wako kila wiki.",
          text: [
            "Mkakati unaanza na ukweli kuhusu biashara yako mwenyewe. Kwa wiki moja, andika kazi zinazochukua muda wako na takriban muda wa kila moja: kujibu ujumbe, kupanga miadi, kuagiza bidhaa, kuweka matangazo mitandaoni, kutunza hesabu, kutoa makadirio ya bei, kusafisha, kufundisha wafanyakazi.",
            "Zipange katika makundi: wateja, mauzo na masoko, uendeshaji (kuagiza, kupanga ratiba), pesa (ankara, hesabu), na watu (kuajiri, kufundisha).",
            "Mara nyingi utaona kazi chache zinakula muda wako mwingi. Hapo ndipo AI inaweza kusaidia, lakini tu ikiwa kazi hiyo inafaa kwa AI. Hilo ndilo somo linalofuata."
          ],
          steps: ["Kwa wiki moja, andika kila kazi na dakika inazochukua.", "Panga kazi katika makundi matano.", "Jumlisha muda wa kila kundi.", "Zungushia duara kazi tatu zinazokula muda zaidi."],
          words: [["Mkakati", "mpango wa kitu cha kufanya kwanza na kwa nini."], ["Ramani ya muda", "orodha ya kazi zako na muda ambao kila moja inachukua."], ["Uendeshaji", "kazi ya kila siku ya kuendesha biashara, kama kuagiza bidhaa na kupanga ratiba."]],
          slides: [
            { title: "Anza na ukweli wako mwenyewe", bullets: ["Andika kila kazi kwa wiki moja", "Andika takriban muda wa kila moja"] },
            { title: "Makundi matano", bullets: ["Wateja; mauzo na masoko", "Uendeshaji; pesa", "Watu"] },
            { title: "Tafuta kazi zinazokula muda", bullets: ["Jumlisha kila kundi", "Zungushia duara kazi tatu kubwa zaidi"] }
          ],
          tryIt: "Anza ramani yako ya muda. Kwa kukumbuka, andika angalau kazi kumi za kila wiki na dakika za kila moja, zipange katika makundi matano, na uzungushie duara kazi tatu kubwa zaidi.",
          youCanNow: "kuchora ramani ya jinsi muda wako unavyotumika na kupata kazi zinazokula muda wako zaidi.",
          quickCheck: [
            { objective: "O1", q: "Ramani ya muda inaorodhesha nini?", options: ["Kazi zako na muda wa kila moja", "Anwani za nyumbani za wafanyakazi wako", "Mauzo yako ya mwezi", "Saa zako za kufungua tu"], answer: 0, why: "Ramani ya muda inaonyesha muda wako wa wiki unakwenda wapi." },
            { objective: "O1", q: "Ramani yako ya muda inaonyesha kazi tatu zinachukua muda mwingi wa wiki yako. Ungefanya nini nazo?", options: ["Kuzipuuza", "Kuzizungushia duara kama sehemu ambazo AI inaweza kusaidia zaidi", "Kuzifuta kwenye orodha", "Kuzifanya haraka zaidi bila mabadiliko"], answer: 1, why: "Kazi zinazokula muda zaidi ndizo ambazo AI inaweza kusaidia zaidi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuchagua miradi ya AI kwa thamani na hatari",
          minutes: 5,
          goal: "Pima miradi ya AI inayowezekana na uchague miwili ya kuanzia.",
          text: [
            "Si kila kazi inayokula muda ni mradi mzuri wa AI. Ipe kila moja alama 1 hadi 5 kwa thamani (muda au pesa zinazookolewa, huduma bora) na 1 hadi 5 kwa hatari (kinachotokea AI ikikosea: wateja wenye hasira, pesa kupotea, matatizo ya kisheria).",
            "Anza na thamani kubwa na hatari ndogo. Kuandika rasimu za matangazo ya mitandaoni na kujibu maswali ya kawaida mara nyingi ni mwanzo mzuri. Kupanga hesabu au makadirio ya bei kunaweza kuwa na thamani kubwa lakini kunahitaji ukaguzi wa makini. Maamuzi ya kuajiri, nyaraka za kisheria na chochote kuhusu afya au usalama vina hatari kubwa: mtu na mtaalamu ndio wawe wasimamizi.",
            "Chagua miradi miwili. Ushindi mmoja wa haraka ili kujenga kujiamini, na mradi mmoja mkubwa zaidi utakaoupanga kwa makini."
          ],
          steps: ["Orodhesha kazi zako tatu zinazokula muda zaidi pamoja na mawazo mengine.", "Toa alama ya thamani 1-5 na ya hatari 1-5.", "Chagua ushindi mmoja wa haraka (thamani kubwa, hatari ndogo).", "Chagua mradi mmoja mkubwa zaidi utakaoupanga kwa makini."],
          words: [["Thamani", "kiasi ambacho mradi unaokoa au unaingiza, au jinsi unavyoboresha huduma."], ["Hatari", "kiasi cha madhara ambacho kosa linaweza kusababisha."], ["Ushindi wa haraka", "mradi mdogo unaofanya kazi haraka na kujenga kujiamini."]],
          slides: [
            { title: "Pima kila wazo", bullets: ["Thamani 1-5: muda, pesa, huduma bora", "Hatari 1-5: madhara AI ikikosea"] },
            { title: "Pa kuanzia", bullets: ["Kwanza thamani kubwa, hatari ndogo", "Matangazo ya mitandaoni na maswali ya kawaida ni mwanzo mzuri", "Kuajiri, sheria, afya na usalama: watu ndio wasimamizi"] },
            { title: "Chagua miwili", bullets: ["Ushindi mmoja wa haraka", "Mradi mmoja mkubwa zaidi uliopangwa kwa makini"] }
          ],
          tryIt: "Pima angalau mawazo matano ya AI kwa thamani na hatari katika jedwali dogo. Chagua ushindi wako wa haraka na mradi wako mkubwa zaidi, na uandike sentensi moja ya sababu kwa kila mmoja.",
          youCanNow: "kuchagua miradi ya AI kwa biashara yako kwa kulinganisha thamani na hatari.",
          quickCheck: [
            { objective: "O2", q: "Katika kupima thamani na hatari, hatari inamaanisha nini?", options: ["Bei ya zana", "Muda wa kuiweka tayari", "Madhara AI ikikosea", "Idadi ya wafanyakazi wanaoitumia"], answer: 2, why: "Hatari ni madhara yanayoweza kutokea AI ikifanya kosa." },
            { objective: "O2", q: "Wazo moja lina thamani kubwa na hatari ndogo, jingine lina thamani kubwa na hatari kubwa. Ungeanza na lipi?", options: ["Lenye hatari kubwa", "Hakuna kati yao", "Yote mawili kwa pamoja", "Lenye thamani kubwa na hatari ndogo"], answer: 3, why: "Thamani kubwa na hatari ndogo ndio mradi bora wa kwanza." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuendesha majaribio ya siku 30 na kuyapima",
          minutes: 5,
          goal: "Panga jaribio dogo la siku 30 lenye kipimo wazi cha kabla na baada.",
          text: [
            "Majaribio (pilot) ni jaribio dogo lenye muda maalum. Badala ya kubadilisha kila kitu, unajaribu AI kwenye kazi moja kwa siku 30 na kupima kama ilisaidia.",
            "Kwanza pima \"kabla\": kazi inachukua muda gani sasa, makosa mangapi, wateja wanaitikiaje. Kisha amua lengo la \"baada\": \"Kujibu ujumbe wa kawaida kunashuka kutoka dakika 60 hadi 25 kwa siku, bila malalamiko kuongezeka.\"",
            "Wakati wa majaribio, weka daftari fupi: kipi kilifanya kazi, kipi kilienda vibaya, ulirekebisha nini. Mwishoni, amua: kuendelea, kubadilisha au kuacha. Kuacha ni sawa; umejifunza kitu kwa gharama ndogo."
          ],
          steps: ["Chagua kazi na uandike namba za kabla.", "Andika lengo la baada.", "Endesha jaribio kwa siku 30 na uweke daftari fupi.", "Siku ya 30: endelea, badilisha au acha."],
          words: [["Majaribio (pilot)", "jaribio dogo lenye muda maalum la njia mpya ya kufanya kazi."], ["Kipimo cha mwanzo (baseline)", "namba za \"kabla\" unazolinganisha nazo."], ["Lengo", "matokeo unayotarajia kufikia."]],
          slides: [
            { title: "Majaribio ni jaribio dogo", bullets: ["Kazi moja, siku 30", "Pima kama ilisaidia"] },
            { title: "Kabla na baada", bullets: ["Kabla: muda, makosa, jinsi wateja wanavyoitikia", "Mfano wa lengo la baada: dakika 60 hadi 25 kwa siku", "Malalamiko hayaongezeki"] },
            { title: "Siku ya 30", bullets: ["Soma daftari lako", "Endelea, badilisha au acha", "Kuacha ni somo la gharama ndogo"] }
          ],
          tryIt: "Andika mpango wa majaribio kwa ushindi wako wa haraka: kazi yenyewe, namba za kabla (kadiria ikibidi), lengo la baada, na utakachoandika katika daftari lako kila wiki.",
          youCanNow: "kupanga na kupima majaribio ya AI ya siku 30 kwa kazi moja ya biashara.",
          quickCheck: [
            { objective: "O3", q: "Kipimo cha mwanzo (baseline) katika majaribio ni nini?", options: ["Namba za \"kabla\" unazolinganisha nazo", "Matokeo ya mwisho", "Bei ya zana", "Ratiba ya wafanyakazi"], answer: 0, why: "Kipimo cha mwanzo ndipo unapoanzia, ili uweze kupima mabadiliko." },
            { objective: "O3", q: "Siku ya 30 majaribio yako hayakuokoa muda wowote. Ungefanya nini?", options: ["Kuyaendeleza milele", "Kuyaacha au kuyabadilisha; umejifunza kwa gharama ndogo", "Kununua toleo la bei ghali zaidi", "Kuficha matokeo"], answer: 1, why: "Majaribio ni jaribio dogo, kwa hiyo likishindwa linagharimu kidogo na linafundisha mengi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua cha kuboresha",
        questions: [
          { objective: "O1", q: "Katika kozi hii, hatua ya kwanza ya mkakati wa AI ni ipi?", options: ["Kununua zana nyingi", "Kuchora ramani ya jinsi muda wako unavyotumika", "Kufukuza wafanyakazi", "Kuiga mshindani"], answer: 1, why: "Mkakati unaanza na ukweli kuhusu biashara yako." },
          { objective: "O2", q: "Mradi upi ni chaguo bora la kwanza?", options: ["Chochote kilicho kipya zaidi", "Thamani ndogo, hatari kubwa", "Hatari kubwa, thamani yoyote", "Thamani kubwa, hatari ndogo"], answer: 3, why: "Anza pale AI inaposaidia zaidi na inaweza kuleta madhara kidogo." },
          { objective: "O2", q: "Kazi ipi inapaswa kusimamiwa na mtu na mtaalamu?", options: ["Maamuzi ya kuajiri", "Kuandika rasimu za matangazo ya mitandaoni", "Kujibu \"Mnafungua saa ngapi?\"", "Kubuni majina ya vyakula kwenye menyu"], answer: 0, why: "Kuajiri kuna hatari kubwa." },
          { objective: "O3", q: "Majaribio (pilot) ni nini?", options: ["Kazi ya ndege", "Badiliko la kudumu", "Jaribio dogo lenye muda maalum", "Leseni ya programu"], answer: 2, why: "Majaribio yanajaribu kazi moja kwa muda maalum." },
          { objective: "O3", q: "Siku ya 30 majaribio hayakusaidia. Hatua sahihi ni ipi?", options: ["Kuficha matokeo", "Kuyapanua kwa kila kitu", "Kuyaacha au kuyabadilisha; umejifunza kwa gharama ndogo", "Kutopima tena kamwe"], answer: 2, why: "Kuacha jaribio ambalo halikufanya kazi ni uamuzi mzuri." }
        ]
      }
    },
    {
      name: "Sura 2: Kuunganisha zana na kuweka sheria",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jinsi zana zinavyounganishwa: integrations kwa maneno rahisi",
          minutes: 5,
          goal: "Chora jinsi zana za biashara yako zinavyopeana taarifa.",
          text: [
            "Integration ni muunganiko unaoruhusu zana moja kutuma taarifa kwa nyingine yenyewe. Kwa mfano: fomu ya kuweka miadi inaongeza miadi kwenye kalenda yako; oda iliyolipwa inaongeza mstari kwenye jedwali lako la mauzo; tathmini (review) mpya inakutumia ujumbe mfupi.",
            "Zana nyingi zina miunganiko iliyojengwa ndani inayoorodheshwa katika mipangilio (settings), mara nyingi inaitwa apps, integrations au akaunti zilizounganishwa. Huduma za kuunganisha kama Zapier, Make au Microsoft Power Automate zinaunganisha zana zisizoweza kuungana zenyewe. Kagua tovuti rasmi ya kila zana kuona inaungana na nini na inagharimu kiasi gani.",
            "Chora zana zako kama visanduku na taarifa kama mishale: \"app ya miadi -> kalenda\", \"POS -> jedwali la mauzo\". Kisha weka alama mishale ipi tayari inafanya kazi yenyewe, ipi unaifanya kwa mkono, na ipi unaweza kuifanya ijiendeshe."
          ],
          steps: ["Orodhesha zana unazotumia: POS (mashine ya mauzo), miadi, barua pepe, kalenda, spreadsheets, mitandao ya kijamii.", "Chora kila moja kama kisanduku.", "Chora mishale kwa taarifa zinazohama kati yao.", "Weka alama kila mshale: yenyewe, kwa mkono, au inaweza kujiendesha."],
          words: [["Integration (muunganiko)", "muunganiko unaoruhusu zana moja kutuma taarifa kwa nyingine yenyewe."], ["Huduma ya kuunganisha", "zana kama Zapier, Make au Power Automate inayounganisha zana nyingine."], ["Kujiendesha (automate)", "kufanya kazi itendeke yenyewe bila mtu kufanya kila hatua."]],
          slides: [
            { title: "Integration ni muunganiko", bullets: ["Fomu ya miadi -> kalenda", "Oda iliyolipwa -> jedwali la mauzo", "Tathmini mpya -> ujumbe wa tahadhari"] },
            { title: "Njia za kuunganisha", bullets: ["Miunganiko iliyo ndani ya mipangilio ya zana", "Huduma za kuunganisha: Zapier, Make, Power Automate", "Kagua kila tovuti rasmi kwa gharama"] },
            { title: "Chora ramani yako", bullets: ["Zana ni visanduku; taarifa ni mishale", "Weka alama: yenyewe, kwa mkono, inaweza kujiendesha"] }
          ],
          tryIt: "Chora ramani ya zana zako kwenye karatasi kwa visanduku na mishale. Weka alama kwenye angalau mshale mmoja unaoufanya kwa mkono leo ambao unaweza kujiendesha.",
          youCanNow: "kuchora jinsi zana za biashara yako zinavyounganishwa na kuona kazi zinazoweza kujiendesha.",
          quickCheck: [
            { objective: "O4", q: "Mishale kwenye ramani yako ya zana inaonyesha nini?", options: ["Nani ni msimamizi", "Zana ipi inagharimu zaidi", "Taarifa zinazohama kati ya zana", "Mpangilio ulionunua zana"], answer: 2, why: "Mishale inaonyesha jinsi taarifa zinavyotoka zana moja kwenda nyingine." },
            { objective: "O4", q: "Unanakili kwa mkono kila oda iliyolipwa kwenye jedwali lako la mauzo. Ungefanya nini?", options: ["Kuacha kurekodi mauzo", "Kuajiri mtu wa kuandika haraka zaidi", "Kufuta jedwali la mauzo", "Kuiweka alama kwenye ramani kama hatua inayoweza kujiendesha"], answer: 3, why: "Hatua za mkono zinazohamisha taarifa zinafaa sana kwa integration." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kubaki na udhibiti: idhini, gharama na data",
          minutes: 5,
          goal: "Amua hatua zipi za kujiendesha zinahitaji idhini yako na ukague gharama halisi.",
          text: [
            "Kujiendesha kunaokoa muda, lakini pia kunaweza kurudia kosa mara mia moja. Mtu aidhinishe chochote kinachotuma pesa, kutuma ujumbe kwa wateja wengi, kubadilisha bei, kufuta kumbukumbu au kutoa ahadi.",
            "Hesabu gharama yote: usajili wa kulipia (subscriptions), malipo kwa kila matumizi, muda wa kuweka tayari na muda wa kukagua kazi. Ilinganishe na muda uliookolewa katika majaribio yako. Hesabu zisipolingana, endelea kufanya kwa mkono kwa sasa.",
            "Jua data yako inakwenda wapi. Kabla ya kuunganisha zana, soma data inayoweza kuona na iweke kwa kiwango cha chini kabisa. Tumia nywila imara na kuingia kwa hatua mbili kwenye akaunti za biashara, na ondoa ruhusa za wafanyakazi wanaoondoka."
          ],
          steps: ["Weka alama kila hatua ya kujiendesha inayotuma pesa, kutuma ujumbe kwa watu wengi, kubadilisha bei au kufuta data.", "Weka sharti la idhini yako kwenye hatua hizo.", "Jumlisha gharama yote ya kila mwezi.", "Kagua data ambayo kila muunganiko unaweza kuona.", "Washa kuingia kwa hatua mbili."],
          words: [["Hatua ya idhini", "mahali ambapo mtu lazima akubali kabla ya kazi kuendelea."], ["Kuingia kwa hatua mbili", "ukaguzi wa pili, kama msimbo kwenye simu yako, unapoingia (log in)."], ["Usajili wa kulipia (subscription)", "malipo ya mara kwa mara ili kuendelea kutumia zana."]],
          slides: [
            { title: "Mtu anaidhinisha", bullets: ["Chochote kinachotuma pesa", "Ujumbe kwa wateja wengi", "Kubadilisha bei, kufuta, kutoa ahadi"] },
            { title: "Hesabu gharama yote", bullets: ["Usajili wa kulipia na malipo kwa kila matumizi", "Muda wa kuweka tayari na wa kukagua", "Linganisha na muda uliookolewa"] },
            { title: "Linda data yako", bullets: ["Ipe kila zana data kidogo zaidi inayohitaji", "Nywila imara na kuingia kwa hatua mbili", "Ondoa ruhusa wafanyakazi wanapoondoka"] }
          ],
          tryIt: "Kwenye ramani ya zana zako, weka nyota kwenye kila hatua inayohitaji idhini yako. Kisha andika ukaguzi wa gharama: gharama za zana kwa mwezi dhidi ya saa zilizookolewa mara thamani ya saa yako.",
          youCanNow: "kudhibiti mifumo ya kujiendesha kwa hatua za idhini, ukaguzi wa gharama na mipaka ya data.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini uweke idhini kwenye mifumo ya kujiendesha inayotuma pesa au ujumbe kwa watu wengi?", options: ["Kujiendesha kunaweza kurudia kosa mara nyingi", "Idhini zinafanya zana kuwa nafuu", "Sheria inataka hivyo kila wakati", "Inafanya kujiendesha kuwe haraka zaidi"], answer: 0, why: "Kosa moja katika mfumo wa kujiendesha linaweza kurudiwa mara nyingi kabla hujaona." },
            { objective: "O5", q: "Mfanyakazi anaacha kazi katika biashara yako. Ungefanya nini?", options: ["Kuacha ruhusa zake ikiwa atarudi", "Kumpa mfanyakazi mpya nywila yake", "Kuondoa ruhusa zake kwenye zana za biashara", "Kutobadilisha chochote"], answer: 2, why: "Kuondoa ruhusa kunalinda data ya biashara yako." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika sera yako ya matumizi ya AI na mpango wa ukurasa mmoja",
          minutes: 5,
          goal: "Andika sheria tano rahisi za AI kwa biashara yako na umalize mpango wako wa AI wa ukurasa mmoja.",
          text: [
            "Sera ya matumizi ya AI ni orodha fupi ya sheria za jinsi wewe na wafanyakazi wako mnavyotumia AI. Inawalinda wateja na kuwafanya wote wafanye kwa njia moja. Sheria tano zinatosha kuanza.",
            "Mifano ya sheria: (1) Hakuna majina ya wateja pamoja na mawasiliano yao, namba za kadi, nywila au kumbukumbu za wafanyakazi zinazowekwa kwenye zana za AI. (2) Mtu anakagua kila ukweli kabla wateja hawajauona. (3) Hatuandiki kamwe tathmini (reviews) au madai ya uongo. (4) Zana zilizoidhinishwa tu ndizo zinatumika kwa biashara. (5) Maamuzi ya pesa, sheria, kuajiri na usalama yanafanywa na watu.",
            "Iombe AI ifanye sheria zako ziwe wazi na fupi, kisha ziweke kwenye ukurasa mmoja pamoja na ramani yako ya muda, miradi uliyochagua, mpango wa majaribio, ramani ya zana na ukaguzi wa gharama. Pitia mpango huo kila baada ya miezi mitatu."
          ],
          steps: ["Andika sheria tano kwa maneno rahisi.", "Iombe AI izifanye ziwe wazi na fupi.", "Washirikishe wafanyakazi na upokee maswali yao.", "Weka kila kitu kwenye ukurasa mmoja na uweke tarehe ya kupitia."],
          words: [["Sera ya matumizi ya AI", "sheria zilizoandikwa za jinsi biashara inavyotumia AI."], ["Zana iliyoidhinishwa", "zana ambayo mmiliki ameikagua na kuiruhusu itumike kwa biashara."]],
          slides: [
            { title: "Kwa nini sera", bullets: ["Inawalinda wateja", "Wafanyakazi wanafanya kwa njia moja", "Sheria tano zinatosha kuanza"] },
            { title: "Mifano ya sheria", bullets: ["Hakuna data binafsi ya wateja au wafanyakazi ndani ya AI", "Mtu anakagua ukweli; hakuna tathmini za uongo", "Zana zilizoidhinishwa tu; watu wanafanya maamuzi makubwa"] },
            { title: "Mpango wako wa ukurasa mmoja", bullets: ["Ramani ya muda na miradi miwili", "Majaribio, ramani ya zana na ukaguzi wa gharama", "Sheria tano; pitia kila miezi mitatu"] }
          ],
          tryIt: "Kazi ya mwisho: andika sheria zako tano za AI na mpango wako wa AI wa ukurasa mmoja wenye sehemu zote tano. Mshirikishe mfanyakazi mmoja au mtu unayemwamini sheria hizo na umuulize kama kuna kitu kisicho wazi.",
          youCanNow: "kuongoza matumizi ya AI katika biashara yako kwa mpango ulioandikwa na sheria zilizo wazi.",
          quickCheck: [
            { objective: "O6", q: "Sera ya matumizi ya AI ni nini?", options: ["Kifurushi cha AI cha kulipia", "Sheria zilizoandikwa za jinsi biashara yako inavyotumia AI", "Tathmini ya mteja", "Masharti ya huduma ya zana"], answer: 1, why: "Sera ya matumizi ya AI inaweka sheria wazi kwa ajili yako na wafanyakazi wako." },
            { objective: "O6", q: "Umeandika sheria zako tano za AI. Ungefanya nini baadaye?", options: ["Kuzificha", "Kuziweka mtandaoni bila kuzisoma", "Kuiomba AI iziidhinishe", "Kumshirikisha mfanyakazi na kumuuliza kama kuna kitu kisicho wazi"], answer: 3, why: "Sheria zinafanya kazi tu ikiwa watu wanaozitumia wanazielewa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuunganisha zana na kuweka sheria",
        questions: [
          { objective: "O4", q: "Integration ni nini?", options: ["Muunganiko unaoruhusu zana moja kutuma taarifa kwa nyingine", "Mfanyakazi mpya", "Fomu ya kodi", "Aina ya mkopo"], answer: 0, why: "Integrations zinahamisha taarifa kati ya zana." },
          { objective: "O4", q: "Ipi ni huduma ya kuunganisha?", options: ["Stapla", "Droo ya pesa", "Mashine ya faksi", "Zapier"], answer: 3, why: "Zapier inaunganisha zana zisizoweza kuungana zenyewe." },
          { objective: "O5", q: "Hatua ipi ya kujiendesha inahitaji idhini yako zaidi?", options: ["Kuhifadhi jina la faili", "Kutuma barua pepe ya punguzo kwa wateja wote 800", "Kuongeza rangi kwenye kalenda", "Kupanga orodha"], answer: 1, why: "Ujumbe kwa wateja wengi unahitaji mtu akubali." },
          { objective: "O5", q: "Mfumo wa kujiendesha unagharimu zaidi kila mwezi kuliko muda unaookoa. Unafanya nini?", options: ["Kuendelea kufanya kwa mkono kwa sasa", "Kuendelea kulipa", "Kuongeza zana zaidi", "Kupuuza gharama"], answer: 0, why: "Hesabu lazima zilingane." },
          { objective: "O6", q: "Ipi ni sheria nzuri ya matumizi ya AI?", options: ["Weka namba za kadi za wateja ili kuokoa muda", "Tumia zana yoyote unayoipata", "Mtu anakagua kila ukweli kabla wateja hawajauona", "AI inafanya maamuzi ya kuajiri"], answer: 2, why: "Kukagua ukweli kunawalinda wateja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujenga Mkakati wa AI wa Biashara na Kuunganisha Zana",
    questions: [
      { objective: "O1", q: "Ramani ya muda inaorodhesha:", options: ["Nywila zako", "Kazi zako na muda wa kila moja", "Anwani za wateja wako", "Washindani wako"], answer: 1, why: "Inaonyesha muda wako unakwenda wapi." },
      { objective: "O1", q: "Lipi ni mojawapo ya makundi matano?", options: ["Filamu", "Hali ya hewa", "Michezo", "Uendeshaji"], answer: 3, why: "Wateja, mauzo na masoko, uendeshaji, pesa, watu." },
      { objective: "O1", q: "Kwa nini uzungushie duara kazi zako tatu zinazokula muda zaidi?", options: ["Kwa mapambo", "Ili kuzifuta", "Ili kuziweka mtandaoni", "Ndizo ambazo AI inaweza kusaidia zaidi"], answer: 3, why: "Kazi kubwa zinatoa nafasi kubwa zaidi ya kuokoa muda." },
      { objective: "O2", q: "Katika kupima thamani na hatari, hatari inamaanisha:", options: ["Jinsi inavyofurahisha", "Madhara AI ikikosea", "Jinsi zana ilivyo mpya", "Idadi ya apps ulizo nazo"], answer: 1, why: "Hatari inapima madhara yanayoweza kutokea." },
      { objective: "O2", q: "Ushindi wa haraka ni:", options: ["Tiketi ya bahati nasibu", "Mradi mkubwa zaidi wenye hatari zaidi", "Mradi mdogo unaofanya kazi haraka", "Kesi mahakamani"], answer: 2, why: "Ushindi wa haraka unajenga kujiamini." },
      { objective: "O2", q: "Mradi upi una hatari kubwa?", options: ["Kuandika mkataba wa kisheria", "Kuandika rasimu ya maelezo ya picha ya Instagram", "Kubuni jina la ofa maalum", "Kupanga orodha ya kukagua"], answer: 0, why: "Nyaraka za kisheria zinahitaji mtaalamu." },
      { objective: "O3", q: "Namba za \"kabla\" katika majaribio zinaitwa:", options: ["Bajeti", "Lengo", "Kipimo cha mwanzo (baseline)", "Nywila"], answer: 2, why: "Kipimo cha mwanzo ndicho unacholinganisha nacho." },
      { objective: "O3", q: "Lengo zuri la majaribio ni:", options: ["\"Ujumbe unashuka kutoka dakika 60 hadi 25 kwa siku bila malalamiko kuongezeka\"", "\"Kuwa bora\"", "\"Tumia AI zaidi\"", "\"Jaribu vitu\""], answer: 0, why: "Ni mahususi na linaweza kupimwa." },
      { objective: "O3", q: "Wakati wa majaribio unaweka:", options: ["Hakuna maelezo", "Daftari fupi la kilichofanya kazi na kilichoenda vibaya", "Namba za kadi za wateja", "Habari njema tu"], answer: 1, why: "Daftari linakuongoza katika uamuzi wa siku ya 30." },
      { objective: "O4", q: "\"Oda iliyolipwa -> jedwali la mauzo\" ni mfano wa:", options: ["Kodi", "Sera", "Tathmini", "Integration"], answer: 3, why: "Taarifa zinahama zenyewe kati ya zana." },
      { objective: "O4", q: "Miunganiko iliyojengwa ndani kwa kawaida hupatikana wapi?", options: ["Katika mipangilio ya zana", "Kwenye risiti", "Katika barua za posta", "Popote"], answer: 0, why: "Mipangilio mara nyingi inaorodhesha apps au integrations." },
      { objective: "O4", q: "Katika ramani yako ya zana, mishale inaonyesha:", options: ["Majina ya wafanyakazi", "Hisia za wateja", "Bei", "Taarifa zinazohama kati ya zana"], answer: 3, why: "Visanduku ni zana; mishale ni taarifa." },
      { objective: "O5", q: "Kwa nini uweke idhini kwenye mifumo ya kujiendesha inayotuma pesa?", options: ["Kuwaudhi wafanyakazi", "Ni polepole zaidi", "Kujiendesha kunaweza kurudia kosa mara nyingi", "Haihitajiki"], answer: 2, why: "Mtu anazuia makosa ya gharama kubwa yasijirudie." },
      { objective: "O5", q: "Gharama yote ya zana inajumuisha:", options: ["Bei iliyo kwenye tangazo tu", "Usajili wa kulipia, malipo kwa kila matumizi, muda wa kuweka tayari na wa kukagua", "Hakuna kitu", "Umeme tu"], answer: 1, why: "Gharama zote zinahesabiwa dhidi ya muda uliookolewa." },
      { objective: "O5", q: "Mfanyakazi anapoondoka, unapaswa:", options: ["Kutofanya chochote", "Kuiacha wazi", "Kutoa nywila yake kwa wengine", "Kuondoa ruhusa zake kwenye zana za biashara"], answer: 3, why: "Kuondoa ruhusa kunalinda data yako." },
      { objective: "O5", q: "Kuingia kwa hatua mbili kunaongeza nini?", options: ["Kupandishwa daraja bure", "Nywila ya pili kwenye karatasi", "Ukaguzi wa pili, kama msimbo wa simu", "Hakuna kitu"], answer: 2, why: "Kunafanya akaunti ziwe ngumu zaidi kuvunjwa." },
      { objective: "O6", q: "Sera ya matumizi ya AI ni:", options: ["Sheria zilizoandikwa za jinsi biashara yako inavyotumia AI", "Sera ya bima", "Mkataba wa kukodisha", "Zana"], answer: 0, why: "Inawaweka wote salama na kufanya kwa njia moja." },
      { objective: "O6", q: "Kipi kinafaa kuwa katika sera yako ya AI?", options: ["AI inaamua nani aajiriwe", "Watu wanafanya maamuzi ya pesa, sheria, kuajiri na usalama", "Zana yoyote ni sawa", "Tathmini za uongo ni sawa"], answer: 1, why: "Maamuzi makubwa yanabaki kwa watu." },
      { objective: "O6", q: "Unapaswa kupitia mpango wako wa AI mara ngapi?", options: ["Kamwe", "Takriban kila miezi mitatu", "Kila saa", "Baada ya maafa tu"], answer: 1, why: "Kupitia mara kwa mara kunaufanya uendelee kufaa." },
      { objective: "O6", q: "Mpango wako wa AI wa ukurasa mmoja unajumuisha:", options: ["Ramani ya muda, miradi, majaribio, ramani ya zana, ukaguzi wa gharama na sheria", "Orodha ya apps tu", "Nywila za wateja", "Bei za mshindani"], answer: 0, why: "Sehemu hizo zinakamilisha mpango." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 6, 7, 9, 11, 12, 13, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ramani ya muda na miradi miwili", objective: "O2", notYet: "Hakuna ramani ya muda, au miradi ilichaguliwa bila alama za thamani na hatari.", meets: "Ramani ya muda pamoja na kazi mbili zilizochaguliwa, kila moja na alama ya thamani na ya hatari.", exceeds: "Kila chaguo lina sababu wazi ya sentensi moja inayohusiana na ramani ya muda." },
      { name: "Majaribio ya siku 30", objective: "O3", notYet: "Hakuna kipimo, au hakuna namba za kabla.", meets: "Majaribio kwa kazi ya kwanza yenye kipimo cha mwanzo na lengo la baada.", exceeds: "Pia yana mpango wa daftari la kila wiki na sheria ya kuacha au kubadilisha siku ya 30." },
      { name: "Miunganiko ya zana na idhini", objective: "O4", notYet: "Hakuna ramani ya zana, au hakuna idhini zilizowekwa alama.", meets: "Mchoro au orodha ya jinsi zana zinavyounganishwa, na hatua za idhini zimewekwa alama.", exceeds: "Kila hatua inayotuma pesa au ujumbe kwa watu wengi ina nyota." },
      { name: "Ukaguzi wa gharama", objective: "O5", notYet: "Hakuna ukaguzi wa gharama.", meets: "Gharama za zana kwa mwezi zimelinganishwa na saa zilizookolewa mara thamani ya saa yako.", exceeds: "Inajumuisha malipo kwa kila matumizi, muda wa kuweka tayari na wa kukagua." },
      { name: "Sera ya matumizi ya AI", objective: "O6", notYet: "Sheria chini ya tano, au sheria zinazoipa AI maamuzi ya pesa, sheria, kuajiri au usalama.", meets: "Sheria tano zilizo wazi kwa ajili yako na wafanyakazi wako.", exceeds: "Imeshirikishwa kwa mfanyakazi au mtu unayemwamini na ikafanywa wazi zaidi kutokana na maoni yao." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaoendesha majaribio yao ya siku 30 na kuripoti matokeo ya kabla na baada (utafiti wa kufuatilia)",
      "Wamiliki wanaoripoti saa zilizookolewa kwa wiki baada ya majaribio",
      "Wamiliki wanaowashirikisha wafanyakazi sera ya matumizi ya AI iliyoandikwa ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu janja yenye intaneti na apps ambazo biashara inatumia sasa",
      "Msaidizi wa AI wa bure na spreadsheet ya bure kwa kupima na kufuatilia",
      "Karatasi na kalamu kwa ramani ya muda na ramani ya zana",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio ya maarifa na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Waombe wamiliki wakadirie kazi za wiki ya kawaida kabla ya kipindi ili ramani ya muda ifanywe haraka.",
      "Chora mfano wa ramani ya zana ubaoni kwa visanduku na mishale kabla wamiliki hawajachora zao.",
      "Wakumbushe wamiliki kukagua ukurasa wa bei wa kila zana; bei na huduma hubadilika.",
      "Sisitiza kwamba watu ndio wanaofanya maamuzi ya pesa, sheria, kuajiri na usalama, na kwamba data ya wateja inabaki salama.",
      "Pima mpango wa ukurasa mmoja kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
