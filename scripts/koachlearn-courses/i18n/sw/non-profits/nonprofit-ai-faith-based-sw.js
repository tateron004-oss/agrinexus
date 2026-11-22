"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-ai-faith-based.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-faith-based-sw",
  lang: "sw",
  translationOf: "nonprofit-ai-faith-based",
  category: "Non Profits",
  name: "AI kwa Mashirika ya Kidini",
  skills: "Kuweka kanuni za matumizi ya AI katika huduma, Kuandika matangazo na taarifa za ibada, Kupanga ratiba za wajitolea na matukio, Kulinda faragha ya waumini, Kukagua rasimu za AI kwa imani na mtindo",
  outcome: "kutumia msaidizi wa AI wa bure kuandika rasimu ya tangazo la wiki na ratiba ya wajitolea kwa ajili ya kusanyiko lako au mpango wako wa kidini, kulinda taarifa za waumini zisitoke, na kukagua kila rasimu ili ilingane na mapokeo ya imani yako na sauti yenu.",
  about: [
    "Kozi hii ni kwa wachungaji, maimamu, marabi, viongozi wa huduma, wafanyakazi wa ofisi za kanisa na wajitolea katika makanisa, misikiti, mahekalu, masinagogi na mashirika ya kidini yasiyo ya faida.",
    "Utajifunza mahali ambapo AI inaweza kuokoa muda katika kazi za ofisi za huduma (matangazo, taarifa za ibada, ratiba, majarida, rasimu za maombi ya ruzuku) na mahali ambapo haipaswi kutumika: huduma ya kichungaji, mazungumzo ya siri na maamuzi kuhusu watu.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika ujumbe wa ukurasa mmoja wa \"Jinsi tunavyotumia AI\" kwa viongozi wa kusanyiko lako, kisha tumia msaidizi wa AI kuandika rasimu ya tangazo la wiki hii na ratiba ya wajitolea yenye vishika-nafasi badala ya majina. Kagua rasimu zote mbili kwa usahihi, imani na mtindo, na uweke alama kwenye ulichobadilisha.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wachungaji, maimamu, marabi, viongozi wa huduma, wafanyakazi wa ofisi za kanisa na wajitolea katika makanisa, misikiti, mahekalu, masinagogi na mashirika ya kidini yasiyo ya faida.",
    startingPoint: "Wanaandika matangazo, taarifa za ibada na ratiba za wajitolea kwa mkono kila wiki. Wengi wamesikia kuhusu AI lakini hawajaitumia, na baadhi wana wasiwasi kuhusu faragha na kuhusu AI kukosea mambo ya imani yao.",
    gap: "Kazi za uandishi wa ofisi zinachukua saa ambazo viongozi wangependa kuwapa watu. Wanafunzi wanahitaji kutumia AI kwa rasimu na mipango huku wakiweka maombi ya maombezi na taarifa za waumini kuwa siri, na kuhakikisha kila rasimu inalingana na mapokeo yao, ukweli na sauti yao.",
    constraints: [
      "Faragha: majina, maombi ya maombezi, kumbukumbu za matoleo, afya, taarifa za watoto na mawasiliano kamwe haviingii kwenye AI",
      "Huduma ya kichungaji, ushauri na maamuzi kuhusu watu yanabaki kwa watu wanaoaminika",
      "Maandiko na mafundisho yanakaguliwa katika vitabu vitakatifu vya kusanyiko lenyewe",
      "Kanuni za mashirika yasiyolipa kodi kuhusu siasa zinatumika (IRS Publication 1828)",
      "Maneno rahisi; wajitolea wengi ni wageni katika teknolojia"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi za huduma", action: "kuzigawa katika \"AI inaweza kuandika rasimu\" na \"watu pekee\"", standard: "ukiacha huduma ya kichungaji, maombi ya maombezi na maamuzi kuhusu watu mikononi mwa watu" },
    { id: "O2", condition: "Kwa ajili ya viongozi wa kusanyiko lako", action: "kuandika ujumbe wa ukurasa mmoja wa \"Jinsi tunavyotumia AI\" unaojibu maswali manne ya kanuni", standard: "kwa maneno rahisi, tayari kwa bodi, wazee au baraza lenu kukubaliana nao" },
    { id: "O3", condition: "Ukipewa ombi lenye taarifa za waumini", action: "kuliandika upya kama prompt salama yenye vishika-nafasi", standard: "bila majina, maombi ya maombezi, kumbukumbu za matoleo, afya wala mawasiliano" },
    { id: "O4", condition: "Ukipewa matukio ya wiki hii", action: "kuandika prompt iliyo wazi na kupata rasimu ya tangazo la wiki kwa sauti ya kusanyiko lako", standard: "ukiwa umekagua mwenyewe kila tarehe, saa na mahali" },
    { id: "O5", condition: "Ukipewa nafasi za kazi, tarehe na idadi ya watu wanaohitajika kwa kila moja", action: "kutengeneza ratiba ya wajitolea kwa AI ukitumia vishika-nafasi badala ya majina", standard: "majina halisi yakiongezwa katika hati yako mwenyewe tu" },
    { id: "O6", condition: "Ukipewa rasimu ya AI", action: "kuikagua kwa imani, usahihi na mtindo na kurekebisha kisichofaa", standard: "maandiko yakiwa yamekaguliwa katika vitabu vyenu vitakatifu kabla mkaguzi aliyetajwa hajaikubali" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutumia AI kwa hekima katika huduma",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mahali AI inaposaidia kusanyiko, na mahali isiposaidia",
          minutes: 4,
          goal: "Gawa kazi za huduma katika \"AI inaweza kuandika rasimu\" na \"watu pekee\".",
          text: [
            "Msaidizi wa AI, kama ChatGPT, Microsoft Copilot au Google Gemini, ni programu ya kompyuta unayozungumza nayo kwa maneno ya kawaida. Inaandika rasimu, orodha na mipango kwa sekunde chache.",
            "Katika kusanyiko, inafaa kwa kazi za ofisi: matangazo ya wiki, maandishi ya taarifa ya ibada, majarida, mipango ya matukio, ujumbe wa kuwaalika wajitolea, barua za shukrani kwa wafadhili na rasimu za kwanza za maombi ya ruzuku.",
            "Haipaswi kuchukua nafasi ya watu katika huduma ya kichungaji, maombi ya maombezi, ushauri, maungamo, migogoro kati ya waumini, au maamuzi kuhusu nani anahudumu au nani anapokea msaada. Mambo hayo yanahitaji mtu anayeaminika, si programu."
          ],
          words: [["Msaidizi wa AI", "programu ya kompyuta unayozungumza nayo kwa kuandika au kuongea; inakuandikia majibu."], ["Huduma ya kichungaji", "malezi ya binafsi ambayo kiongozi wa imani huwapa waumini: kuwatembelea, kuwashauri, kuwafariji na kuwaombea."]],
          slides: [
            { title: "AI inaweza kuandika rasimu ya", bullets: ["Matangazo na taarifa za ibada", "Majarida na mipango ya matukio", "Ujumbe wa kuwaalika wajitolea na barua za shukrani"] },
            { title: "Watu pekee", bullets: ["Huduma ya kichungaji na ushauri", "Maombi ya maombezi na mazungumzo ya siri", "Maamuzi kuhusu waumini na nani anapokea msaada"] },
            { title: "Kanuni ya kukumbuka", bullets: ["AI inasaidia kwa maneno na mipango", "Watu wanashughulikia mioyo na maamuzi"] }
          ],
          tryIt: "Orodhesha kazi kumi ambazo ofisi ya kusanyiko lako hufanya kwa mwezi. Weka alama kila moja: \"AI inaweza kuandika rasimu\" au \"watu pekee\".",
          youCanNow: "kutaja kazi za huduma ambazo AI inaweza kusaidia na zile ambazo lazima zibaki kwa watu.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni kazi nzuri ya ofisi kwa AI katika kusanyiko?", options: ["Kuandika rasimu ya ujumbe wa kuwaalika wajitolea", "Kusikiliza maungamo", "Kuamua nani apokee msaada", "Kusuluhisha mgogoro kati ya waumini"], answer: 0, why: "AI inasaidia kwa uandishi wa ofisi; huduma ya kichungaji na maamuzi yanahitaji mtu anayeaminika." },
            { objective: "O1", q: "Muumini anauliza kama AI inaweza kumshauri kuhusu huzuni yake ya msiba. Unasema nini?", options: ["Ndiyo, AI ipo wakati wote", "Hapana; hilo linahitaji mtu anayeaminika, si programu", "Ndiyo, ikinukuu maandiko", "Usiku tu"], answer: 1, why: "Ushauri na huduma ya kichungaji vinahitaji mtu anayeaminika." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika kanuni rahisi za AI",
          minutes: 5,
          goal: "Andika ujumbe mfupi wa \"Jinsi tunavyotumia AI\" ambao viongozi wenu wanaweza kukubaliana nao.",
          text: [
            "Kabla wafanyakazi na wajitolea hawajaanza kutumia AI, kubalianeni kanuni chache rahisi. Hii inawaweka wote salama na kuepusha mshangao.",
            "Ujumbe mzuri unajibu maswali manne: Tunaweza kutumia AI kwa nini? Nini kamwe hakiingii kwenye AI (majina, maombi ya maombezi, kumbukumbu za matoleo, afya au mambo ya familia)? Nani anakagua rasimu za AI kabla hazijatolewa? Je, tunawaambia watu AI iliposaidia kuandika kitu?",
            "Uwe wa ukurasa mmoja na kwa maneno rahisi. Uwashirikishe bodi, wazee au baraza la huduma, na mupitie upya mara moja kwa mwaka."
          ],
          steps: ["Orodhesha kazi ambazo AI inaweza kusaidia.", "Orodhesha kisichopaswa kamwe kuandikwa kwenye AI.", "Taja nani anakagua kila rasimu ya AI kabla haijatolewa.", "Amueni kama na jinsi mtakavyosema AI ilisaidia.", "Viongozi wenu wakubaliane, na wekeni tarehe ya kupitia upya kila mwaka."],
          words: [["Kanuni", "orodha fupi ya sheria mlizokubaliana ambazo kila mtu anafuata."], ["Kukagua", "kusoma rasimu kwa makini na kuirekebisha kabla haijatolewa."]],
          slides: [
            { title: "Kwa nini kanuni", bullets: ["Kila mtu anajua kinachoruhusiwa", "Imani ya waumini kwenu inalindwa"] },
            { title: "Maswali manne ya kujibu", bullets: ["Tunaweza kutumia AI kwa nini?", "Nini kamwe hakiingii kwenye AI?", "Nani anakagua rasimu?", "Tunasema AI ilisaidia?"] },
            { title: "Iwe rahisi", bullets: ["Ukurasa mmoja, maneno rahisi", "Imekubaliwa na viongozi wenu", "Inapitiwa upya mara moja kwa mwaka"] }
          ],
          tryIt: "Andika rasimu ya ujumbe wa ukurasa mmoja wa \"Jinsi tunavyotumia AI\" wa kusanyiko lako kwa kujibu maswali manne. Unaweza kumwomba msaidizi wa AI afanye rasimu yako iwe wazi zaidi, lakini andika kanuni wewe mwenyewe.",
          youCanNow: "kuandika kanuni fupi za matumizi ya AI kwa kusanyiko au mpango wa kidini.",
          quickCheck: [
            { objective: "O2", q: "Ujumbe wa \"Jinsi tunavyotumia AI\" unajibu swali gani?", options: ["Mchungaji analipwa kiasi gani", "Waumini gani wanatoa zaidi", "Nani anakagua rasimu za AI kabla hazijatolewa", "Kampuni ipi ya AI ni bora"], answer: 2, why: "Ujumbe unajibu AI ni ya nini, nini hakiingii, nani anakagua na kama mnawaambia watu." },
            { objective: "O2", q: "Timu yenu ya huduma imeandika kanuni za AI. Mnafanya nini baadaye?", options: ["Kuzificha", "Kuzifanya kurasa kumi", "Kumruhusu kila mjitolea kuzibadilisha", "Kuzishirikisha bodi, wazee au baraza na kuzipitia upya kila mwaka"], answer: 3, why: "Viongozi wanakubaliana na ujumbe, na unapitiwa upya mara moja kwa mwaka." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kulinda taarifa za waumini",
          minutes: 5,
          goal: "Geuza ombi lenye taarifa za siri kuwa prompt salama yenye vishika-nafasi.",
          text: [
            "Waumini wanakuamini kwa mambo ya siri: maombi ya maombezi, magonjwa, matatizo ya familia, kiasi wanachotoa, anwani na namba za simu. Zana nyingi za AI zinaweza kuhifadhi unachoandika, kwa hiyo ichukulie prompt kama postikadi ambayo mtu yeyote anaweza kusoma.",
            "Usiandike kamwe majina, maombi ya maombezi, kumbukumbu za matoleo, taarifa za afya, taarifa za watoto au mawasiliano kwenye msaidizi wa AI. Tumia vishika-nafasi kama [jina la muumini] au [kiasi] na uvijaze wewe mwenyewe baadaye, katika hati yako mwenyewe.",
            "Ikiwa shirika lenu linalipia toleo la biashara au la elimu la zana ya AI, muulize msimamizi wenu mipangilio yake ya faragha ikoje. Hata hivyo, mambo ya siri ya kichungaji yasiingie humo."
          ],
          steps: ["Andika unachotaka AI ikusaidie.", "Kisome ukitafuta majina, viasi vya pesa, afya, familia na mawasiliano.", "Badilisha kila kimoja kwa kishika-nafasi kama [jina la muumini].", "Tuma prompt, kisha jaza taarifa halisi wewe mwenyewe nje ya zana ya AI."],
          words: [["Kishika-nafasi", "neno la muda kama [jina la muumini] unalobadilisha baadaye kwa taarifa halisi."], ["Siri", "taarifa binafsi uliyoambiwa kwa kuaminiwa ambayo haipaswi kupelekwa kwa wengine."]],
          slides: [
            { title: "Ichukulie prompt kama postikadi", bullets: ["Fikiria kwamba mtu mwingine anaweza kuisoma", "Linda imani ya waumini wako kwako"] },
            { title: "Usiandike kamwe kwenye AI", bullets: ["Majina na mawasiliano", "Maombi ya maombezi, afya au matatizo ya familia", "Kumbukumbu za matoleo na viasi", "Taarifa za watoto"] },
            { title: "Tumia vishika-nafasi", bullets: ["[jina la muumini], [kiasi], [tarehe]", "Jaza taarifa halisi wewe mwenyewe baadaye"] }
          ],
          tryIt: "Chukua ombi hili: \"Andika kadi ya kumtakia nafuu Dada Mary Jones, aliyefanyiwa upasuaji wa moyo katika County Hospital.\" Liandike upya kwa vishika-nafasi ili hakuna taarifa ya siri inayoingia kwenye AI, kisha ulitume.",
          youCanNow: "kuondoa taarifa za siri za waumini kwenye prompt na kutumia vishika-nafasi badala yake.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini uichukulie prompt kama postikadi?", options: ["Zana nyingi za AI zinaweza kuhifadhi unachoandika", "Postikadi ni fupi zaidi", "AI inachapisha prompt yako", "Inafanya jibu liwe la kirafiki zaidi"], answer: 0, why: "Zana nyingi za AI zinaweza kuhifadhi unachoandika, kwa hiyo fikiria kwamba mtu anaweza kukisoma." },
            { objective: "O3", q: "Unataka AI ikusaidie kuandika kadi ya kumtakia nafuu muumini aliye hospitalini. Unaandika nini?", options: ["Jina la muumini na ugonjwa wake", "\"Andika kadi fupi ya kumtakia nafuu [jina la muumini] kutoka kwa kusanyiko letu.\"", "Chumba chake cha hospitali na namba yake ya simu", "Ombi la maombezi la familia yake"], answer: 1, why: "Tumia vishika-nafasi na ujaze taarifa halisi wewe mwenyewe baadaye." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutumia AI kwa hekima katika huduma",
        questions: [
          { objective: "O1", q: "Kazi ipi inafaa kwa msaidizi wa AI katika ofisi ya kanisa?", options: ["Kuandika rasimu ya tangazo la wiki", "Kumshauri muumini aliyefiwa", "Kuamua nani apokee mfuko wa msaada", "Kujibu ombi la siri la maombezi"], answer: 0, why: "Matangazo ni uandishi wa ofisi; mengine yanahitaji mtu anayeaminika." },
          { objective: "O2", q: "Ujumbe wa \"Jinsi tunavyotumia AI\" unapaswa kuwa na nini?", options: ["Namba ya simu ya kila muumini", "Orodha ya bei za kampuni za AI", "AI inaweza kutumika kwa nini na nini kamwe hakiingii humo", "Nywila za mchungaji"], answer: 2, why: "Kanuni zinasema kinachoruhusiwa na kinachopaswa kubaki nje." },
          { objective: "O3", q: "Mjitolea anataka kubandika orodha ya maombi ya maombezi kwenye AI ili \"aipange vizuri\". Unasema nini?", options: ["Endelea, inaokoa muda", "Bandika nusu yake tu", "Ibandike lakini ufute mazungumzo baadaye", "Hapana. Maombi ya maombezi ni siri na hayaingii kwenye AI"], answer: 3, why: "Maombi ya maombezi ni ya siri na hayapaswi kuandikwa kwenye zana za AI." },
          { objective: "O3", q: "Kishika-nafasi ni nini?", options: ["Kiti kilichohifadhiwa ndani ya ukumbi wa ibada", "Neno la muda kama [jina la muumini] unalojaza baadaye", "Aina ya app ya AI", "Nywila"], answer: 1, why: "Vishika-nafasi vinakuwezesha kupata msaada bila kutoa taarifa za siri." },
          { objective: "O2", q: "Nani anapaswa kukagua rasimu ya AI kabla haijatolewa kwa kusanyiko?", options: ["Hakuna, AI iko sahihi kila wakati", "AI yenyewe", "Mtu aliyetajwa ambaye viongozi wenu walikubaliana", "Mgeni yeyote"], answer: 2, why: "Kanuni zenu zinamtaja anayekagua rasimu ili makosa yagunduliwe." }
        ]
      }
    },
    {
      name: "Sura 2: Kuitumia AI kufanya kazi kwa ajili ya kusanyiko lako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika rasimu za matangazo na taarifa za ibada",
          minutes: 5,
          goal: "Tumia prompt iliyo wazi kupata rasimu ya tangazo la wiki kwa sauti ya kusanyiko lako.",
          text: [
            "Prompt iliyo wazi inaleta rasimu bora. Iambie AI unachohitaji, kidogo kuhusu kusanyiko lako (bila taarifa za siri), na jinsi unavyotaka iandikwe.",
            "Kwa mfano: \"Andika tangazo fupi na la upendo kwa taarifa yetu ya ibada ya Jumapili. Matukio: ghala la chakula Jumamosi saa 3 asubuhi hadi saa 6 mchana (9 am hadi 12 pm), kikundi cha vijana Jumatano saa 12 jioni (6 pm), kwaya inahitaji sauti mbili zaidi. Mtindo wa kirafiki na wa kukaribisha, chini ya maneno 120.\"",
            "Kisha omba mabadiliko: \"Lifupishe.\" \"Ongeza mstari wa kuwakaribisha wageni.\" \"Tumia maneno rahisi zaidi.\" Kagua kila tarehe, saa na mahali wewe mwenyewe kabla halijatolewa."
          ],
          steps: ["Orodhesha matukio pamoja na tarehe, saa na mahali.", "Sema mtindo unaoutaka na urefu.", "Iombe AI rasimu.", "Omba badiliko moja au mawili.", "Kagua kila tarehe, saa na mahali ukilinganisha na kalenda yako."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI kuomba kitu."], ["Mtindo", "jinsi maandishi yanavyosikika: ya upendo, rasmi, ya furaha, ya utulivu."]],
          slides: [
            { title: "Prompt iliyo wazi ina", bullets: ["Unachohitaji", "Matukio, tarehe na mahali", "Mtindo na urefu"] },
            { title: "Kisha liboreshe", bullets: ["\"Lifupishe.\"", "\"Ongeza makaribisho kwa wageni.\"", "\"Tumia maneno rahisi zaidi.\""] },
            { title: "Kabla halijatolewa", bullets: ["Kagua kila tarehe na saa", "Kagua kila mahali na mawasiliano", "Hakikisha linasikika kama ninyi"] }
          ],
          tryIt: "Andika prompt kwa matangazo halisi ya wiki hii katika kusanyiko lako au mpango wako. Pata rasimu, omba badiliko moja, kisha kagua kila tarehe na saa ukilinganisha na kalenda yako.",
          youCanNow: "kuandika rasimu ya tangazo la kusanyiko kwa AI na kuikagua kabla haijatolewa.",
          quickCheck: [
            { objective: "O4", q: "Prompt iliyo wazi ya tangazo inaiambia AI mambo gani matatu?", options: ["Majina ya waumini, simu na anwani zao", "Neno \"tangazo\" tu", "Unachohitaji, kidogo kuhusu kusanyiko lako, na jinsi unavyotaka liandikwe", "Nywila yako na jina lako la kuingia"], answer: 2, why: "Iambie AI unachohitaji, kuhusu kusanyiko lako (bila taarifa za siri) na jinsi liandikwe." },
            { objective: "O4", q: "Rasimu ni nzuri lakini ni ndefu mno kwa taarifa ya ibada. Unaomba nini?", options: ["\"Ongeza matukio zaidi.\"", "\"Tumia maneno magumu zaidi.\"", "\"Liandike kwa lugha mpya.\"", "\"Lifupishe.\""], answer: 3, why: "Omba mabadiliko kama \"Lifupishe\" hadi litoshe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga ratiba za wajitolea na matukio",
          minutes: 5,
          goal: "Tumia AI kutengeneza ratiba ya wajitolea yenye nafasi za kazi na vishika-nafasi, si majina.",
          text: [
            "Wakaribishaji, wapokeaji, wasaidizi wa chumba cha watoto wadogo, timu za ghala la chakula na madereva wote wanahitaji ratiba. AI inaweza kugeuza orodha ya nafasi za kazi na tarehe kuwa jedwali lililo wazi kwa sekunde chache.",
            "Ipe nafasi za kazi, tarehe na idadi ya watu wanaohitajika kwa kila nafasi, na tumia [Mjitolea 1], [Mjitolea 2] badala ya majina halisi. Kisha nakili jedwali katika hati yako au lahajedwali yako na uongeze majina humo.",
            "AI inaweza pia kutengeneza orodha za kukagua za matukio, kwa mfano kwa mkutano wa uamsho, chakula cha jioni cha kuchangisha pesa au maonyesho ya afya ya jamii: nini cha kufanya wiki sita, wiki mbili na siku moja kabla."
          ],
          steps: ["Orodhesha nafasi za kazi na idadi ya watu wanaohitajika kwa kila moja.", "Orodhesha tarehe.", "Iombe AI jedwali ukitumia vishika-nafasi [Mjitolea 1], [Mjitolea 2].", "Linakili katika hati yako mwenyewe na uongeze majina halisi humo.", "Omba orodha ya kukagua ya tukio ikiwa unapanga tukio."],
          words: [["Jedwali", "taarifa zilizopangwa katika mistari na safu."], ["Orodha ya kukagua", "orodha ya kazi unazoweka alama kadiri zinavyokamilika."]],
          slides: [
            { title: "AI inaweza kutengeneza", bullets: ["Ratiba za wajitolea kama majedwali", "Orodha za kukagua za matukio kwa wiki", "Ujumbe wa kuwakumbusha wajitolea"] },
            { title: "Majina yabaki nje", bullets: ["Tumia [Mjitolea 1], [Mjitolea 2]", "Ongeza majina halisi katika faili lako mwenyewe"] },
            { title: "Orodha ya kukagua ya tukio", bullets: ["Wiki sita kabla", "Wiki mbili kabla", "Siku moja kabla na siku yenyewe"] }
          ],
          tryIt: "Mwombe msaidizi wa AI ratiba ya wiki nne kwa nafasi tatu za kazi (kwa mfano mkaribishaji, mpokeaji, chumba cha watoto wadogo) zenye watu wawili kila moja, ukitumia vishika-nafasi. Inakili katika hati yako mwenyewe.",
          youCanNow: "kutengeneza ratiba ya wajitolea na orodha ya kukagua ya tukio kwa AI huku ukiweka majina kuwa siri.",
          quickCheck: [
            { objective: "O5", q: "Unaipa AI nini ili itengeneze ratiba ya wajitolea?", options: ["Nafasi za kazi, tarehe na idadi ya watu wanaohitajika kwa kila nafasi", "Namba ya simu ya kila mjitolea", "Kumbukumbu za matoleo za waumini", "Anwani ya kanisa tu"], answer: 0, why: "Toa nafasi za kazi, tarehe na idadi inayohitajika, ukitumia vishika-nafasi badala ya majina." },
            { objective: "O5", q: "Unapanga chakula cha jioni cha kuchangisha pesa. AI inaweza kukutengenezea nini?", options: ["Orodha ya mwisho ya wageni yenye majina", "Orodha ya kukagua ya kufanya wiki sita, wiki mbili na siku moja kabla", "Viasi vya zawadi za wafadhili", "Maamuzi kuhusu nani anahudumu"], answer: 1, why: "AI inaweza kutengeneza orodha za kukagua za matukio kwa muda kabla ya tukio." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukagua rasimu kwa imani, usahihi na mtindo",
          minutes: 5,
          goal: "Kagua rasimu ya AI na urekebishe chochote kisicholingana na mapokeo yenu, ukweli au sauti yenu.",
          text: [
            "AI inaweza kukosea. Inaweza kunukuu maandiko vibaya, kutumia maneno ya mapokeo mengine, kukosea siku takatifu, au kusikika kavu. Inaweza pia kubuni mambo yanayosikika kuwa ya kweli.",
            "Soma kila rasimu ukitafuta mambo matatu: imani (inalingana na imani yetu na maneno yetu?), usahihi (nukuu, tarehe na ukweli ni sahihi?), na mtindo (inasikika kama sisi na inamheshimu kila mtu?). Kagua maandiko na mafundisho katika vitabu vyenu vitakatifu, si kwenye AI.",
            "Ikiwa shirika lenu ni shirika la hisani lisilolipa kodi, rasimu za AI hazipaswi kumuunga mkono wala kumpinga mgombea wa kisiasa. IRS (mamlaka ya kodi ya Marekani) inaeleza kanuni kwa makanisa na mashirika ya kidini katika Publication 1828; waulize viongozi wenu au mshauri ikiwa huna uhakika."
          ],
          steps: ["Soma kwa imani: inalingana na imani yetu na maneno yetu?", "Kagua kila nukuu, andiko na tarehe katika vyanzo vyenu.", "Isome kwa sauti ili kusikia mtindo.", "Rekebisha kilicho kibaya, na uandike ulichobadilisha.", "Mkaguzi mliyekubaliana aikubali."],
          words: [["Hallucination (kubuni)", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."], ["Lisilolipa kodi", "shirika ambalo IRS inalitambua kuwa halilipi kodi ya mapato ya serikali kuu ya Marekani, likiwa na kanuni za kufuata."]],
          sources: [{ name: "IRS Publication 1828, Tax Guide for Churches and Religious Organizations (mwongozo wa kodi kwa makanisa na mashirika ya kidini)", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" }],
          slides: [
            { title: "AI inaweza kukosea mambo ya imani", bullets: ["Maandiko yaliyonukuliwa vibaya", "Maneno ya mapokeo mengine", "Siku takatifu zisizo sahihi au mambo yaliyobuniwa"] },
            { title: "Ukaguzi mara tatu", bullets: ["Imani: inalingana na imani yetu", "Usahihi: nukuu, tarehe, ukweli", "Mtindo: inasikika kama sisi, kwa heshima"] },
            { title: "Baki ndani ya kanuni", bullets: ["Usimuunge mkono mgombea wa kisiasa", "Tazama IRS Publication 1828", "Waulize viongozi wenu ukiwa na shaka"] }
          ],
          tryIt: "Kazi ya mwisho: andika rasimu ya ujumbe wako wa \"Jinsi tunavyotumia AI\", kisha tumia AI kuandika rasimu ya tangazo la wiki hii na ratiba ya wajitolea yenye vishika-nafasi. Kagua zote mbili kwa imani, usahihi na mtindo, na uweke alama kwenye ulichobadilisha.",
          youCanNow: "kukagua rasimu za AI kwa imani, usahihi na mtindo kabla hazijafika kwa kusanyiko lako.",
          quickCheck: [
            { objective: "O6", q: "Ukaguzi mara tatu katika kozi hii ni upi?", options: ["Urefu, aina ya herufi na rangi", "Bei, tarehe na mahali", "Imani, usahihi na mtindo", "Tahajia, sarufi na kasi"], answer: 2, why: "Soma kila rasimu kwa imani, usahihi na mtindo." },
            { objective: "O6", q: "Rasimu ya AI imekosea tarehe ya siku takatifu. Unafanya nini?", options: ["Iache; AI inajua tarehe", "Iulize AI kama ina uhakika", "Ondoa siku takatifu kwenye kalenda", "Ikague ukilinganisha na kalenda ya mapokeo yenu na uirekebishe"], answer: 3, why: "AI inaweza kukosea siku takatifu, kwa hiyo kagua na urekebishe wewe mwenyewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuitumia AI kufanya kazi kwa ajili ya kusanyiko lako",
        questions: [
          { objective: "O4", q: "Prompt ipi italeta rasimu bora ya taarifa ya ibada?", options: ["\"Andika tangazo la upendo la maneno 100: ghala la chakula Jmos 9-12, vijana Jtano 6 pm, kwaya inahitaji sauti.\"", "\"taarifa ya ibada\"", "\"mambo ya kanisa\"", "\"andika kila kitu\""], answer: 0, why: "Inatoa matukio, mtindo na urefu." },
          { objective: "O5", q: "Majina yanapaswa kuonekanaje katika ratiba ya wajitolea iliyotengenezwa na AI?", options: ["Kama vishika-nafasi kama [Mjitolea 1]", "Majina kamili na namba za simu", "Majina ya kwanza na anwani tu", "Majina pamoja na anwani za barua pepe"], answer: 0, why: "Vishika-nafasi vinazuia taarifa za wajitolea zisiingie kwenye zana ya AI." },
          { objective: "O6", q: "AI imenukuu andiko katika tangazo lako. Unafanya nini?", options: ["Iamini", "Iulize AI kama ina uhakika", "Kagua nukuu katika kitabu chenu kitakatifu", "Futa tangazo lote"], answer: 2, why: "AI inaweza kunukuu vibaya; kagua katika vyanzo vyenu." },
          { objective: "O6", q: "Kipi ni mojawapo ya ukaguzi mara tatu katika kozi hii?", options: ["Kasi", "Mtindo", "Bei", "Ukubwa wa herufi"], answer: 1, why: "Imani, usahihi na mtindo ndio ukaguzi mara tatu." },
          { objective: "O6", q: "Kanisa linaweza kujifunza wapi kanuni za IRS kwa mashirika ya kidini?", options: ["Chapisho la mitandao ya kijamii", "Msaidizi wa AI peke yake", "Blogu yoyote tu", "IRS Publication 1828"], answer: 3, why: "Publication 1828 ni mwongozo wa kodi wa IRS kwa makanisa na mashirika ya kidini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Mashirika ya Kidini",
    questions: [
      { objective: "O1", q: "Kazi ipi inapaswa kubaki kwa watu, si AI?", options: ["Kuandika rasimu ya orodha ya kukagua ya tukio", "Kumshauri muumini aliye katika dharura", "Kuandika rasimu ya jarida", "Kutengeneza jedwali la wajitolea"], answer: 1, why: "Huduma ya kichungaji inahitaji mtu anayeaminika." },
      { objective: "O1", q: "Katika huduma, AI inasaidia zaidi kwa:", options: ["Uandishi na mipango ya ofisi", "Kusikiliza maungamo", "Kuamua nani apokee msaada", "Kutunza siri za maombi"], answer: 0, why: "AI inaandika rasimu za maneno na mipango; watu wanashughulikia malezi na maamuzi." },
      { objective: "O1", q: "Kanuni nzuri ya kukumbuka ni:", options: ["AI inaamua, watu wanafuata", "AI inashughulikia kila kitu", "Usisome kamwe rasimu za AI", "AI inasaidia kwa maneno na mipango; watu wanashughulikia mioyo na maamuzi"], answer: 3, why: "Hiyo inaacha malezi na busara mikononi mwa watu." },
      { objective: "O2", q: "Ujumbe wa \"Jinsi tunavyotumia AI\" unapaswa kuwa na urefu gani?", options: ["Kurasa hamsini", "Neno moja", "Kama ukurasa mmoja kwa maneno rahisi", "Kadiri AI inavyotaka"], answer: 2, why: "Mfupi na rahisi maana yake watu watausoma na kuufuata." },
      { objective: "O2", q: "Nani anapaswa kukubaliana na kanuni za AI?", options: ["Kampuni ya AI tu", "Mgeni mmoja", "Bodi, wazee au baraza lenu la huduma", "Hakuna"], answer: 2, why: "Viongozi wakikubaliana, kanuni zinapata mamlaka." },
      { objective: "O2", q: "Mnapaswa kupitia upya kanuni zenu za AI mara ngapi?", options: ["Kama mara moja kwa mwaka", "Kamwe", "Kila saa", "Ikiwa tu AI itaomba"], answer: 0, why: "Zana zinabadilika, kwa hiyo kupitia upya kila mwaka kunaweka kanuni kuwa za kisasa." },
      { objective: "O3", q: "Kipi KAMWE hakipaswi kuandikwa kwenye msaidizi wa AI?", options: ["\"Lifupishe\"", "Orodha ya tarehe za matukio", "\"Tumia mtindo wa upendo\"", "Ombi la maombezi la muumini pamoja na jina lake"], answer: 3, why: "Maombi ya maombezi na majina ni siri." },
      { objective: "O3", q: "Kwa nini uichukulie prompt kama postikadi?", options: ["Postikadi ni fupi", "Mtu mwingine anaweza kusoma unachoandika", "AI inasoma postikadi tu", "Ni haraka zaidi"], answer: 1, why: "Zana za AI zinaweza kuhifadhi unachoandika." },
      { objective: "O3", q: "Unahitaji barua ya shukrani kwa zawadi ya mfadhili. Unaandikaje prompt kwa usalama?", options: ["Weka jina lake na kiasi", "Tumia [jina la mfadhili] na [kiasi] na uvijaze wewe mwenyewe", "Bandika kumbukumbu ya matoleo", "Weka anwani yake"], answer: 1, why: "Vishika-nafasi vinaweka kumbukumbu za matoleo kuwa siri." },
      { objective: "O3", q: "Kanisa lenu linalipia mpango wa AI wa biashara. Je, uandike mambo ya siri ya kichungaji humo?", options: ["Ndiyo, umelipiwa", "Jumapili tu", "Ikiwa ni mafupi tu", "Hapana, mambo ya siri ya kichungaji yabaki nje"], answer: 3, why: "Malezi ya siri yanabaki nje ya AI hata kwenye mipango ya kulipia." },
      { objective: "O4", q: "Prompt iliyo wazi ya tangazo ina:", options: ["Matukio, tarehe, mtindo na urefu", "Neno \"tangazo\" tu", "Namba za simu za waumini", "Nywila ya mchungaji"], answer: 0, why: "Maelezo hayo yanaiwezesha AI kuandika rasimu yenye manufaa." },
      { objective: "O4", q: "Baada ya kupata rasimu, swali lipi la kufuatilia linafaa?", options: ["\"Hii ndiyo orodha ya waumini wetu.\"", "\"Amua bajeti yetu.\"", "\"Ongeza mstari wa kuwakaribisha wageni.\"", "\"Itume kwa kila mtu sasa.\""], answer: 2, why: "Linaomba uboreshaji ulio wazi." },
      { objective: "O4", q: "Kabla tangazo halijatolewa ni lazima:", options: ["Uongeze maandishi zaidi ya AI", "Uondoe tarehe zote", "Usilisome", "Ukague kila tarehe, saa na mahali"], answer: 3, why: "AI inaweza kukosea ukweli." },
      { objective: "O5", q: "Unaongeza wapi majina halisi ya wajitolea?", options: ["Katika prompt ya AI", "Katika hati yako mwenyewe baada ya kunakili jedwali", "Katika chapisho la wazi kwa umma", "Mahali popote"], answer: 1, why: "Majina yanabaki katika mafaili yako mwenyewe, si kwenye zana ya AI." },
      { objective: "O5", q: "Orodha ya kukagua ya tukio kwa kawaida hupanga kazi:", options: ["Kwa kipato cha waumini", "Bila mpangilio", "Kwa muda kabla ya tukio, kama wiki sita na wiki mbili", "Baada ya tukio tu"], answer: 2, why: "Kupanga kurudi nyuma kutoka tarehe ya tukio kunaweka mipango katika mstari." },
      { objective: "O6", q: "AI imetumia maneno ya mapokeo mengine ya imani katika rasimu yako. Unapaswa:", options: ["Kuirekebisha ili ilingane na mapokeo yenu", "Kuiacha", "Kuwaomba waumini wapige kura", "Kuichapisha hata hivyo"], answer: 0, why: "Ukaguzi wa imani unahakikisha inalingana na imani yenu na maneno yenu." },
      { objective: "O6", q: "Hallucination katika AI ni nini?", options: ["Kitu ambacho AI inaandika kinachosikika kuwa kweli lakini kimebuniwa", "Maono wakati wa maombi", "Intaneti ya polepole", "Aina ya app"], answer: 0, why: "AI inaweza kubuni mambo yanayosikika kuwa ya kweli." },
      { objective: "O6", q: "Kusoma rasimu kwa sauti kunakusaidia kukagua:", options: ["Kasi ya intaneti", "Bei ya AI", "Mtindo", "Hali ya hewa"], answer: 2, why: "Kuisikia kunaonyesha kama inasikika kama ninyi." },
      { objective: "O6", q: "Rasimu ya AI kwa kanisa lisilolipa kodi inamuunga mkono mgombea wa kisiasa. Unapaswa:", options: ["Kuichapisha", "Kuiondoa na kuangalia IRS Publication 1828 au kuwauliza viongozi wenu", "Kuongeza mgombea wa pili", "Kuipuuza"], answer: 1, why: "Mashirika ya hisani yasiyolipa kodi yana kanuni za IRS kuhusu kampeni za kisiasa." },
      { objective: "O6", q: "Nani anatoa idhini ya mwisho kabla rasimu ya AI haijatolewa?", options: ["AI", "Yeyote aliye karibu", "Hakuna", "Mkaguzi ambaye viongozi wenu walikubaliana"], answer: 3, why: "Mkaguzi aliyetajwa anagundua makosa na kulinda imani ya watu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      6,
      10,
      13,
      15
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ujumbe wa \"Jinsi tunavyotumia AI\"",
        objective: "O2",
        notYet: "Ujumbe hautaji kisichopaswa kamwe kuingia kwenye AI, au nani anakagua.",
        meets: "Ukurasa mmoja kwa maneno rahisi unaojibu maswali yote manne.",
        exceeds: "Unaorodhesha viongozi watakaoukubali na tarehe ya kuupitia upya kila mwaka."
      },
      {
        name: "Tangazo lililo wazi",
        objective: "O4",
        notYet: "Tarehe, saa au mahali si sahihi au hakupo.",
        meets: "Tangazo la wiki hii limeandikwa kutoka prompt iliyo wazi, na kila taarifa imekaguliwa.",
        exceeds: "La upendo na la kukaribisha, na linasikika kama kusanyiko lenyewe."
      },
      {
        name: "Ratiba ya wajitolea yenye faragha",
        objective: "O5",
        notYet: "Majina halisi au mawasiliano yaliingia kwenye AI.",
        meets: "Ratiba yenye nafasi za kazi, tarehe na vishika-nafasi; majina yameongezwa katika hati yako mwenyewe.",
        exceeds: "Pia ina orodha ya kukagua ya tukio kwa muda kabla ya tukio."
      },
      {
        name: "Ukaguzi wa imani, usahihi na mtindo",
        objective: "O6",
        notYet: "Nukuu au tarehe isiyo sahihi, au neno la mapokeo mengine, limeachwa.",
        meets: "Rasimu zote mbili zimekaguliwa kwa imani, usahihi na mtindo, na mabadiliko yamewekewa alama.",
        exceeds: "Maandiko yamekaguliwa katika kitabu chenu kitakatifu, na rejea imeandikwa."
      },
      {
        name: "Faragha ya waumini",
        objective: "O3",
        notYet: "Ombi lolote la maombezi, kumbukumbu ya matoleo au taarifa ya muumini iliandikwa kwenye AI.",
        meets: "Vishika-nafasi tu vilitumika katika kila prompt.",
        exceeds: "Anaweza kuonyesha prompt salama kando ya ombi la awali."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Makusanyiko ambayo viongozi wake wanapitisha ujumbe wa \"Jinsi tunavyotumia AI\" ndani ya siku 60 (utafiti wa kufuatilia)",
      "Saa za ofisi zinazookolewa kila wiki kwa matangazo na ratiba, kama wafanyakazi wanavyoripoti",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya mashirika yasiyo ya faida ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Taarifa za matukio ya wiki hii na orodha ya nafasi za kazi za wajitolea, bila majina",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni kipindi mchungaji, imamu, rabi au kiongozi wa huduma akiwepo, ili kanuni zikubaliwe pamoja.",
      "Kamwe msitumie maombi halisi ya maombezi, kumbukumbu za matoleo au taarifa za waumini katika mazoezi; tumieni vishika-nafasi.",
      "Leteni kitabu chenu kitakatifu ili wanafunzi waweze kukagua andiko lolote ambalo AI inanukuu.",
      "Yakumbusheni makusanyiko yasiyolipa kodi kuhusu kanuni za shughuli za kisiasa katika IRS Publication 1828.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
