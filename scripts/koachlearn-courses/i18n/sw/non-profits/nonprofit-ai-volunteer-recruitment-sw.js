"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-ai-volunteer-recruitment.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-volunteer-recruitment-sw",
  lang: "sw",
  translationOf: "nonprofit-ai-volunteer-recruitment",
  category: "Non Profits",
  name: "Kuajiri Wanaojitolea kwa Msaada wa AI",
  skills: "Kuandika maelezo ya nafasi ya kujitolea, Kuandika matangazo ya kuajiri, Kutengeneza fomu ya kujiandikisha, Kuandika ujumbe wa kukaribisha na wa kukumbusha, Kuwafanya wanaojitolea warudi tena",
  outcome: "kutumia msaidizi wa AI wa bure kuandika maelezo yaliyo wazi ya nafasi ya kujitolea, tangazo la kuajiri na ujumbe wa kukaribisha, kutengeneza fomu rahisi ya kujiandikisha, na kupanga jinsi utakavyowashukuru na kuwabakiza wanaojitolea unaowaajiri.",
  about: [
    "Kozi hii ni kwa wafanyakazi wa mashirika yasiyo ya kiserikali na ya kidini, na waratibu wa wanaojitolea, wanaohitaji wasaidizi zaidi kwa programu kama benki za chakula, kufundisha wanafunzi, matukio, usafi wa mazingira na ushauri (mentoring).",
    "Utatumia msaidizi wa AI (kama ChatGPT, Microsoft Copilot au Google Gemini) kuandika maneno, na zana za bure kama Google Forms au Microsoft Forms kukusanya majina ya wanaojiandikisha. Wewe ndiye unayesimamia kila ujumbe, na hauweki taarifa binafsi za wanaojitolea ndani ya AI.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza kifurushi kamili cha kuajiri kwa nafasi moja halisi ya kujitolea: maelezo ya nafasi, tangazo moja la mitandao ya kijamii, barua pepe moja kwa wafuasi, fomu ya kujiandikisha yenye maswali machache rahisi, ujumbe wa kukaribisha na ukumbusho wa wiki moja kabla, pamoja na mpango mfupi wa kushukuru. Tumia AI kuandika rasimu, kisha hariri kila kipande kwa sauti yako mwenyewe na ukague tarehe na maelezo yote.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyakazi wa mashirika yasiyo ya kiserikali na ya kidini, na waratibu wa wanaojitolea, wanaohitaji wasaidizi zaidi kwa programu kama benki za chakula, kufundisha wanafunzi, matukio, usafi wa mazingira na ushauri.",
    startingPoint: "Wanaajiri kwa kuwaomba watu wale wale wachache, mara nyingi kwa ujumbe wa jumla wa \"tunahitaji msaada\". Baadhi hutumia barua pepe na mitandao ya kijamii; wachache wameandika maelezo ya nafasi, wametengeneza fomu za kujiandikisha au wamepanga jinsi ya kuwabakiza wanaojitolea.",
    gap: "Maombi yasiyo wazi hupata majibu machache, na wanaojitolea wapya wanaojihisi wamepotea hawarudi. Waratibu wanahitaji kifurushi kilicho wazi wanachoweza kutumia tena na tena ili kuajiri, kukaribisha na kuwabakiza wanaojitolea, wakitumia AI kuandika rasimu haraka huku wakilinda taarifa za wanaojitolea.",
    constraints: [
      "Muda: waratibu wana kazi nyingi, kwa hiyo kila somo ni kama dakika 5",
      "Faragha: hakuna namba za Social Security (namba ya utambulisho ya Marekani) wala tarehe za kuzaliwa kwenye fomu rahisi; taarifa za wanaojitolea zinabaki kwenye zana ya fomu, si kwenye AI",
      "Ukaguzi wa historia kwa nafasi zinazohusu watoto au watu walio hatarini unafuata utaratibu ulioidhinishwa na shirika",
      "Hadithi zinahitaji ruhusa au ziwe za kubuni",
      "Zana za bure kama Google Forms au Microsoft Forms"
    ],
    prerequisites: "Kozi \"Introduction to AI for Nonprofits\" (Utangulizi wa AI kwa Mashirika Yasiyo ya Kiserikali), au uzoefu fulani wa kutumia msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ukweli kuhusu nafasi moja ya kujitolea", action: "kuandika maelezo ya nafasi yanayosema nini, lini, wapi, kwa nini, ukaguzi gani unahitajika na nani wa kuwasiliana naye", standard: "kila ukweli ukiwa umekaguliwa na taarifa zako za mawasiliano zikiwa zimeongezwa" },
    { id: "O2", condition: "Ukitumia maelezo yako ya nafasi", action: "kuandika tangazo fupi la mitandao ya kijamii na barua pepe kwa wafuasi kwa msaada wa AI", standard: "kila kimoja kikiwa na wito mmoja wa kuchukua hatua na hadithi za kubuni au zilizoidhinishwa tu" },
    { id: "O3", condition: "Kwa ajili ya jamii yako", action: "kuorodhesha maeneo mapya ya kupata wanaojitolea na njia za kufanya nafasi iwe rahisi kujiunga nayo", standard: "kila kikundi au tovuti ikiwa imekaguliwa kuwa ipo kweli kabla ya kuwasiliana nayo" },
    { id: "O4", condition: "Ukitumia Google Forms au Microsoft Forms", action: "kutengeneza fomu fupi ya kujiandikisha inayouliza tu unachohitaji", standard: "bila kuuliza taarifa nyeti, na fomu ikiwa imejaribiwa na wewe" },
    { id: "O5", condition: "Kwa ajili ya mtu mpya anayejitolea", action: "kuandika ujumbe wa kukaribisha na ukumbusho wenye vishika-nafasi", standard: "ukiwa na tarehe, saa, mahali, cha kuleta na mtu wa kuwasiliana naye" },
    { id: "O6", condition: "Kwa ajili ya wanaojitolea unaowaajiri", action: "kupanga jinsi utakavyowashukuru, kuwaeleza matokeo na kuomba maoni yao", standard: "tarehe zikiwa kwenye kalenda yako" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata wanaojitolea wanaofaa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika maelezo yaliyo wazi ya nafasi ya kujitolea",
          minutes: 5,
          goal: "Andika maelezo ya nafasi yanayomwambia anayejitolea hasa nini, lini, wapi na kwa nini.",
          text: [
            "Watu hukubali wanapojua hasa wanajiandikisha kwa ajili ya nini. Ombi lisilo wazi kama \"Tunahitaji msaada!\" hupata majibu machache. Nafasi iliyo wazi hupata mengi zaidi.",
            "Maelezo mazuri ya nafasi yanajibu: Nitafanya nini? Lini na kwa muda gani? Wapi? Ujuzi au ukaguzi gani unahitajika (kwa mfano, ukaguzi wa historia ili kufanya kazi na watoto)? Kwa nini ni muhimu? Niwasiliane na nani?",
            "Ipe AI ukweli na uiombe iuandike vizuri. Kwa mfano: \"Write a short volunteer role description for a Saturday food pantry helper, 9 am to noon twice a month, lifting up to 20 pounds, no experience needed. Warm and clear, under 150 words.\" (Andika maelezo mafupi ya nafasi ya msaidizi wa benki ya chakula siku ya Jumamosi, saa 3 asubuhi hadi saa 6 mchana (9 am hadi 12 noon) mara mbili kwa mwezi, kubeba hadi pauni 20, hakuna uzoefu unaohitajika. Kwa uchangamfu na uwazi, chini ya maneno 150.)"
          ],
          steps: ["Andika kazi, ratiba, mahali na masharti yoyote.", "Andika sentensi moja kuhusu kwa nini nafasi hii ni muhimu.", "Iombe AI igeuze maelezo yako kuwa maelezo mafupi ya nafasi.", "Kagua kila ukweli na uongeze taarifa zako za mawasiliano wewe mwenyewe."],
          words: [["Maelezo ya nafasi", "maandishi mafupi kuhusu kazi ya kujitolea: kazi zenyewe, muda, mahali, mahitaji na lengo."], ["Ukaguzi wa historia", "ukaguzi wa rekodi za mtu (background check), mara nyingi unahitajika ili kufanya kazi na watoto au watu walio hatarini."]],
          slides: [
            { title: "Maombi yaliyo wazi hupata ndiyo nyingi", bullets: ["\"Tunahitaji msaada!\" haiko wazi vya kutosha", "Sema hasa nini, lini na wapi"] },
            { title: "Maelezo ya nafasi yanajibu", bullets: ["Nitafanya nini? Lini na kwa muda gani?", "Wapi? Ujuzi au ukaguzi gani?", "Kwa nini ni muhimu? Niwasiliane na nani?"] },
            { title: "Iache AI iandike", bullets: ["Ipe ukweli wako", "Omba maandishi ya uchangamfu, wazi na mafupi", "Kagua kila jambo wewe mwenyewe"] }
          ],
          tryIt: "Chagua nafasi moja halisi ya kujitolea ambayo shirika lako linahitaji. Andika ukweli wake, iombe AI maelezo ya nafasi chini ya maneno 150, na urekebishe chochote kisicho sahihi.",
          youCanNow: "kuandika maelezo yaliyo wazi ya nafasi ya kujitolea kwa msaada wa AI.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini maelezo yaliyo wazi ya nafasi hupata majibu mengi zaidi?", options: ["Watu hukubali wanapojua hasa wanajiandikisha kwa ajili ya nini", "Ni marefu zaidi", "Yana alama nyingi za mshangao", "Yanaficha muda unaohitajika"], answer: 0, why: "Ombi lisilo wazi hupata majibu machache; nafasi iliyo wazi hupata mengi zaidi." },
            { objective: "O1", q: "Nafasi yako ya kufundisha inahusu watoto. Maelezo lazima yataje nini?", options: ["Hakuna cha ziada", "Kwamba ukaguzi wa historia unahitajika", "Majina ya watoto", "Alama za shule za watoto"], answer: 1, why: "Maelezo ya nafasi yanasema ukaguzi gani unahitajika, kama ukaguzi wa historia ili kufanya kazi na watoto." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika matangazo na barua pepe za kuajiri",
          minutes: 5,
          goal: "Geuza maelezo moja ya nafasi kuwa tangazo la mitandao ya kijamii na barua pepe kwa wafuasi.",
          text: [
            "Mahali tofauti panahitaji urefu tofauti. Tangazo la mitandao ya kijamii ni fupi na la kirafiki, likiwa na hatua moja iliyo wazi. Barua pepe kwa wafuasi inaweza kusimulia hadithi fupi na kutoa maelezo zaidi.",
            "Iombe AI vyote viwili kutoka maelezo yale yale ya nafasi: \"Using this role description, write a 50-word Facebook post with one call to action, and a 150-word email to our supporters that starts with a short story about a family we serve.\" (Ukitumia maelezo haya, andika tangazo la Facebook la maneno 50 lenye wito mmoja wa kuchukua hatua, na barua pepe ya maneno 150 kwa wafuasi wetu inayoanza na hadithi fupi kuhusu familia tunayoihudumia.) Tumia hadithi ya kubuni au iliyoidhinishwa, kamwe usitumie taarifa binafsi za mtu halisi bila ruhusa.",
            "Omba matoleo machache na uchague lile linalosikika zaidi kama wewe. Ongeza kiungo halisi cha kujiandikisha wewe mwenyewe."
          ],
          steps: ["Bandika maelezo yako ya nafasi kwenye AI.", "Omba tangazo fupi la mitandao ya kijamii lenye wito mmoja wa kuchukua hatua.", "Omba barua pepe ndefu zaidi kwa wafuasi.", "Omba matoleo mawili ya kila kimoja na uchague moja.", "Ongeza kiungo chako halisi cha kujiandikisha na ukague maelezo."],
          words: [["Wito wa kuchukua hatua", "jambo moja unalomwomba msomaji afanye, kama \"Jiandikishe hapa\" (call to action)."], ["Wafuasi", "watu wanaolijua na kulijali shirika lako tayari: wafadhili, wanachama, waliowahi kujitolea."]],
          slides: [
            { title: "Linganisha ujumbe na mahali", bullets: ["Tangazo la mitandao: fupi, hatua moja", "Barua pepe: hadithi fupi na maelezo zaidi"] },
            { title: "Iombe AI vyote viwili", bullets: ["Bandika maelezo ya nafasi", "Omba tangazo na barua pepe", "Omba matoleo mawili ya kila kimoja"] },
            { title: "Kabla ya kuchapisha", bullets: ["Chagua lile linalosikika kama wewe", "Ongeza kiungo halisi cha kujiandikisha", "Hakuna hadithi binafsi bila ruhusa"] }
          ],
          tryIt: "Tumia maelezo yako ya nafasi kutoka Somo la 1 kupata tangazo la mitandao la maneno 50 na barua pepe kwa wafuasi ya maneno 150. Chagua toleo bora la kila kimoja na ulihariri.",
          youCanNow: "kutengeneza matangazo na barua pepe za kuajiri kwa wasomaji tofauti kutoka maelezo moja ya nafasi.",
          quickCheck: [
            { objective: "O2", q: "Kipi ni kirefu zaidi na kinaweza kusimulia hadithi fupi?", options: ["Tangazo la mitandao ya kijamii", "Ujumbe mfupi wa kukumbusha", "Barua pepe kwa wafuasi", "Swali la fomu"], answer: 2, why: "Tangazo la mitandao ni fupi; barua pepe kwa wafuasi inaweza kusimulia hadithi na kutoa maelezo zaidi." },
            { objective: "O2", q: "Tangazo la AI halina kiungo cha kujiandikisha. Unafanya nini?", options: ["Unalichapisha hivyo hivyo", "Unaiomba AI ibuni kiungo", "Unaondoa wito wa kuchukua hatua", "Unaongeza kiungo halisi cha kujiandikisha wewe mwenyewe"], answer: 3, why: "Ongeza kiungo halisi cha kujiandikisha wewe mwenyewe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuwafikia aina mpya za wanaojitolea",
          minutes: 5,
          goal: "Tumia AI kutafuta mawazo ya wapi kupata wanaojitolea na jinsi ya kufanya nafasi ziwe rahisi kujiunga nazo.",
          text: [
            "Mashirika mengi huwaomba watu wale wale wachache tena na tena. AI ni hodari wa kutoa mawazo ya maeneo mapya ya kutafuta: vyuo na shule za sekondari za karibu zinazohitaji saa za huduma, waajiri wenye siku za kujitolea, jumuiya za kidini, vituo vya wazee, na tovuti za mtandaoni zinazoorodhesha nafasi za kujitolea.",
            "Iulize AI: \"List 10 places in a mid-sized city to recruit weekend food pantry volunteers, and one sentence to say to each.\" (Orodhesha maeneo 10 katika mji wa ukubwa wa kati ya kuajiri wanaojitolea wa benki ya chakula wikendi, na sentensi moja ya kusema kwa kila moja.) Kagua kwamba kila kikundi au tovuti inayotajwa ipo kweli kabla ya kuwasiliana nayo.",
            "Uliza pia jinsi ya kufanya nafasi ziwe rahisi kukubali: zamu fupi, nafasi zinazofaa familia, kazi za mbali kama kupiga simu au kuandika kadi, na nyenzo katika lugha zinazozungumzwa na jamii yako."
          ],
          steps: ["Iombe AI orodha ya maeneo ya kupata wanaojitolea.", "Omba sentensi moja ya kusema kwa kila eneo.", "Kagua kwamba kila eneo au tovuti ipo kweli.", "Uliza jinsi ya kufanya nafasi iwe rahisi kujiunga nayo.", "Chagua maeneo yako matatu bora ya kujaribu."],
          words: [["Saa za huduma", "saa za kujitolea ambazo shule au programu zinawataka wanafunzi wakamilishe."], ["Kazi ya mbali", "kazi ya kujitolea inayofanywa nyumbani, kama kupiga simu, kuandika kadi au msaada wa mtandaoni."]],
          slides: [
            { title: "Angalia zaidi ya wale wachache wa kawaida", bullets: ["Shule na vyuo", "Waajiri wenye siku za kujitolea", "Jumuiya za kidini na vituo vya wazee"] },
            { title: "Tafuta mawazo pamoja na AI", bullets: ["Omba maeneo 10 na cha kusema", "Kagua kwamba kila eneo lipo kweli"] },
            { title: "Fanya ndiyo iwe rahisi", bullets: ["Zamu fupi", "Nafasi zinazofaa familia na kazi za mbali", "Lugha za jamii yako"] }
          ],
          tryIt: "Iombe AI maeneo 10 ya kuajiri wanaojitolea kwa nafasi yako katika eneo lako. Yakague, kisha chagua matatu bora na uandike utawasiliana na nani.",
          youCanNow: "kupata vyanzo vipya vya wanaojitolea na kufanya nafasi ziwe rahisi kujiunga nazo.",
          quickCheck: [
            { objective: "O3", q: "Ipi ni kazi ya mbali inayofanya nafasi iwe rahisi kujiunga nayo?", options: ["Kupiga simu au kuandika kadi", "Kubeba masanduku Jumamosi", "Kuendesha gari la kusambaza", "Kuendesha jukwaa la tukio"], answer: 0, why: "Kazi za mbali kama kupiga simu au kuandika kadi ni rahisi kukubali." },
            { objective: "O3", q: "Familia nyingi unazozihudumia zinazungumza Kihispania, na unataka nazo zijitolee. Nini kinasaidia?", options: ["Kuchapisha kwa Kiingereza tu", "Kutoa nyenzo katika lugha zinazozungumzwa na jamii yako", "Kuiomba AI ichague wanaojitolea", "Kudai zamu ndefu"], answer: 1, why: "Nyenzo katika lugha za jamii yako hufanya nafasi ziwe rahisi kujiunga nazo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata wanaojitolea wanaofaa",
        questions: [
          { objective: "O1", q: "Ombi lipi la kujitolea huenda likapata majibu mengi zaidi?", options: ["\"Tunahitaji msaada!\"", "\"Tunatafuta wanaojitolea, maelezo baadaye.\"", "\"Msaidizi wa benki ya chakula, Jumamosi saa 3 asubuhi hadi saa 6 mchana (9 am hadi 12 noon), mara mbili kwa mwezi, hakuna uzoefu unaohitajika.\"", "\"Kuna mtu yeyote?\""], answer: 2, why: "Nafasi iliyo wazi inasema nini, lini na wapi." },
          { objective: "O2", q: "Wito wa kuchukua hatua ni nini?", options: ["Jambo moja unalomwomba msomaji afanye", "Simu kwa mtu anayejitolea", "Aina ya AI", "Mkutano wa bodi"], answer: 0, why: "Unamwambia msomaji hatua inayofuata, kama \"Jiandikishe hapa\"." },
          { objective: "O3", q: "AI inapendekeza kikundi cha kujitolea cha eneo lako ambacho hujawahi kukisikia. Unafanya nini?", options: ["Unawasiliana nacho mara moja na orodha yako ya wanaojitolea", "Unakiweka kwenye tovuti yako", "Unadhani kipo kweli", "Unakagua kwamba kipo kweli kabla ya kuwasiliana nacho"], answer: 3, why: "AI inaweza kubuni majina; kagua kwanza." },
          { objective: "O3", q: "Ipi ni njia ya kufanya nafasi iwe rahisi kujiunga nayo?", options: ["Zamu ndefu tu", "Kutoa zamu fupi na kazi za mbali", "Kudai uzoefu wa miaka kumi", "Kukubali tu watu ambao tayari wanajitolea"], answer: 1, why: "Nafasi zinazonyumbulika zinaruhusu watu wengi zaidi kukubali." },
          { objective: "O2", q: "Unataka hadithi katika barua pepe yako kwa wafuasi. Nini ni salama?", options: ["Jina na hali ya mteja halisi bila ruhusa", "Hadithi ya kubuni au iliyoidhinishwa", "Anwani ya nyumbani ya mtu anayejitolea", "Kiasi cha mchango wa mfadhili"], answer: 1, why: "Kamwe usishiriki taarifa binafsi za watu halisi bila ruhusa." }
        ]
      }
    },
    {
      name: "Sura 2: Kujiandikisha, kukaribisha na kuwabakiza wanaojitolea",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza fomu rahisi ya kujiandikisha",
          minutes: 5,
          goal: "Tengeneza fomu fupi ya mtandaoni ya kujiandikisha na uulize tu unachohitaji.",
          text: [
            "Zana ya bure ya fomu kama Google Forms au Microsoft Forms inawaruhusu watu kujiandikisha kupitia kiungo. Majibu yanaingia kwenye lahajedwali (spreadsheet) unayoidhibiti.",
            "Uliza tu unachohitaji: jina, barua pepe au simu, zamu zipi wanaweza kufanya, na chochote lazima ujue (kama ujuzi wa lugha). Usiulize namba za Social Security, tarehe za kuzaliwa au taarifa nyingine nyeti kwenye fomu rahisi. Ikiwa ukaguzi wa historia unahitajika, tumia utaratibu ulioidhinishwa na shirika lako.",
            "AI inaweza kupendekeza maswali na maneno: \"Suggest 6 short sign-up form questions for a food pantry volunteer role.\" (Pendekeza maswali 6 mafupi ya fomu ya kujiandikisha kwa nafasi ya kujitolea katika benki ya chakula.) Wewe unatengeneza fomu mwenyewe, na majibu yanabaki kwenye zana yako ya fomu, si kwenye AI."
          ],
          steps: ["Fungua Google Forms au Microsoft Forms na uanze fomu tupu.", "Iombe AI ipendekeze maswali mafupi.", "Baki na kile unachohitaji kweli tu.", "Ongeza chaguo za zamu kama visanduku vya kuweka alama.", "Jaribu fomu wewe mwenyewe, kisha nakili kiungo cha kushiriki."],
          words: [["Fomu", "seti ya maswali ya mtandaoni ambayo watu wanajaza; majibu yanahifadhiwa kwa ajili yako."], ["Taarifa nyeti", "taarifa zinazoweza kumdhuru mtu zikishirikiwa, kama namba za utambulisho au taarifa za afya."]],
          slides: [
            { title: "Zana za bure za fomu", bullets: ["Google Forms au Microsoft Forms", "Watu wanajiandikisha kupitia kiungo", "Majibu yanaingia kwenye lahajedwali unayoidhibiti"] },
            { title: "Uliza tu unachohitaji", bullets: ["Jina na jinsi ya kuwasiliana naye", "Zamu zipi anaweza kufanya", "Hakuna namba za utambulisho wala tarehe za kuzaliwa"] },
            { title: "Sehemu ya AI", bullets: ["Inapendekeza maswali na maneno", "Wewe unatengeneza fomu", "Majibu hayaingii kamwe kwenye AI"] }
          ],
          tryIt: "Tengeneza fomu ya kujiandikisha kwa nafasi yako yenye maswali yasiyozidi sita. Ijaze wewe mwenyewe ili kuijaribu, na unakili kiungo kwenye tangazo lako la kuajiri.",
          youCanNow: "kutengeneza fomu fupi na salama ya kujiandikisha kwa wanaojitolea.",
          quickCheck: [
            { objective: "O4", q: "Majibu ya kujiandikisha yanaenda wapi katika zana ya bure ya fomu?", options: ["Kwenye msaidizi wa AI", "Kwenye ukurasa wako wa mitandao ya kijamii", "Kwenye lahajedwali unayoidhibiti", "Kwa kila anayejitolea"], answer: 2, why: "Majibu yanaingia kwenye lahajedwali unayoidhibiti." },
            { objective: "O4", q: "Nafasi inahitaji ukaguzi wa historia. Unalishughulikiaje?", options: ["Kuongeza namba ya Social Security kwenye fomu rahisi", "Kuuliza tarehe za kuzaliwa kwenye fomu", "Kuuacha", "Kutumia utaratibu wa ukaguzi wa historia ulioidhinishwa na shirika lako"], answer: 3, why: "Usikusanye taarifa nyeti kwenye fomu rahisi; tumia utaratibu ulioidhinishwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ujumbe wa kukaribisha na wa kukumbusha",
          minutes: 4,
          goal: "Andika ujumbe wa kukaribisha na ukumbusho unaowafanya wanaojitolea wapya wajihisi tayari.",
          text: [
            "Siku chache za kwanza huamua kama mtu mpya anayejitolea atarudi. Karibu ya haraka huwafanya watu wajihisi wanatakiwa na wako tayari.",
            "Karibu nzuri inasema asante, inathibitisha tarehe, saa na mahali, inasema cha kuvaa au kuleta, inamtaja mtu wa kuwasiliana naye, na inaeleza zamu ya kwanza itakuwaje. Ukumbusho siku chache kabla unarudia maelezo muhimu.",
            "Iombe AI vyote viwili, ukitumia vishika-nafasi: \"Write a warm welcome email for a new food pantry volunteer. Use [name], [shift date], [contact person]. Under 120 words.\" (Andika barua pepe ya kukaribisha yenye uchangamfu kwa mtu mpya anayejitolea katika benki ya chakula. Tumia [jina], [tarehe ya zamu], [mtu wa kuwasiliana naye]. Chini ya maneno 120.) Kisha jaza maelezo kwa zana yako ya barua pepe au mail merge, si kwa AI."
          ],
          steps: ["Orodhesha kile mtu mpya anayejitolea anahitaji kujua.", "Iombe AI ujumbe wa kukaribisha wenye vishika-nafasi.", "Iombe AI ukumbusho mfupi wa siku chache kabla.", "Jaza maelezo kwenye zana yako ya barua pepe.", "Kagua kila tarehe na saa."],
          words: [["Kumwandaa mgeni", "kumsaidia mtu mpya anayejitolea kujiandaa: karibu, mafunzo na zamu ya kwanza (onboarding)."], ["Kishika-nafasi", "neno la muda kama [jina] ambalo baadaye unalibadilisha kwa taarifa halisi (placeholder)."]],
          slides: [
            { title: "Siku za kwanza ni muhimu", bullets: ["Karibu yenye uchangamfu huwarudisha watu"] },
            { title: "Karibu nzuri inasema", bullets: ["Asante", "Tarehe, saa na mahali", "Cha kuvaa au kuleta", "Wa kuwasiliana naye"] },
            { title: "Andika rasimu kwa vishika-nafasi", bullets: ["[jina], [tarehe ya zamu], [mtu wa kuwasiliana naye]", "Jaza maelezo kwenye zana yako ya barua pepe", "Tuma ukumbusho siku chache kabla"] }
          ],
          tryIt: "Iombe AI barua pepe ya kukaribisha na ujumbe mfupi wa kukumbusha wenye vishika-nafasi kwa nafasi yako. Hariri vyote viwili ili visikike kama shirika lako.",
          youCanNow: "kuandika ujumbe wa kukaribisha na wa kukumbusha unaowasaidia wanaojitolea wapya kufika wakiwa tayari.",
          quickCheck: [
            { objective: "O5", q: "Nini huamua kama mtu mpya anayejitolea atarudi?", options: ["Siku chache za kwanza", "Urefu wa fomu", "Rangi ya kipeperushi", "Idadi ya hashtag ulizotumia"], answer: 0, why: "Siku chache za kwanza huamua kama mtu mpya anayejitolea atarudi." },
            { objective: "O5", q: "Mtu mpya anayejitolea anaanza Jumamosi na hajasikia kutoka kwako. Unatuma nini kwanza?", options: ["Hakuna kitu hadi Jumamosi", "Karibu yenye uchangamfu yenye tarehe, saa, mahali, cha kuleta na mtu wa kuwasiliana naye", "Ombi la mchango", "Kitabu kirefu cha sera"], answer: 1, why: "Karibu nzuri inathibitisha maelezo na inamtaja mtu wa kuwasiliana naye ili ajihisi tayari." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwashukuru na kuwabakiza wanaojitolea",
          minutes: 5,
          goal: "Tengeneza mpango rahisi wa kuwashukuru wanaojitolea na kujua kwa nini wanabaki au wanaondoka.",
          text: [
            "Kumbakiza mtu anayejitolea ni rahisi kuliko kumpata mpya. Watu hubaki wanapojihisi wameshukuriwa, wana manufaa na ni sehemu ya timu.",
            "Njia rahisi za kushukuru: barua fupi binafsi baada ya zamu ya kwanza, kueleza kazi yao imewezesha nini (\"Timu ya Jumamosi ilifunga masanduku 300\"), kuwatambua kwenye mkusanyiko, na kuuliza mawazo yao. AI inaweza kusaidia kuandika barua za shukrani na dodoso fupi, kama maswali matatu kuhusu kilichoenda vizuri na cha kubadilisha.",
            "Andika mpango mfupi: lini utawashukuru watu, jinsi utakavyowaeleza matokeo, na lini utaomba maoni yao. Kisha uuweke kwenye kalenda yako."
          ],
          steps: ["Panga shukrani baada ya zamu ya kwanza.", "Panga jinsi utakavyowaeleza wanaojitolea matokeo.", "Iombe AI iandike rasimu ya dodoso la maoni lenye maswali matatu.", "Weka tarehe za shukrani na dodoso kwenye kalenda yako."],
          words: [["Kuwabakiza", "kuwafanya wanaojitolea waendelee kurudi kwa muda mrefu (retention)."], ["Dodoso la maoni", "maswali machache yanayowauliza watu kilichoenda vizuri na cha kubadilisha."]],
          slides: [
            { title: "Kwa nini watu hubaki", bullets: ["Wanajihisi wameshukuriwa", "Wanajihisi wana manufaa", "Wanajihisi ni sehemu ya timu"] },
            { title: "Njia za kushukuru", bullets: ["Barua fupi baada ya zamu ya kwanza", "Eleza matokeo: \"tulifunga masanduku 300\"", "Kuwatambua na kuuliza mawazo yao"] },
            { title: "Mpango wako wa kuwabakiza", bullets: ["Lini utashukuru", "Jinsi utakavyoeleza matokeo", "Lini utaomba maoni"] }
          ],
          tryIt: "Kazi ya mwisho: unganisha kifurushi chako kamili cha kuajiri: maelezo ya nafasi, tangazo la mitandao, barua pepe, fomu ya kujiandikisha, ujumbe wa kukaribisha, ukumbusho na mpango wa kushukuru. Hariri kila kipande na ukague kila jambo.",
          youCanNow: "kuajiri, kukaribisha na kuwabakiza wanaojitolea kwa ujumbe ulioandikwa na AI ambao umeukagua na kuufanya kuwa wako.",
          quickCheck: [
            { objective: "O6", q: "Ipi ni njia rahisi ya kuwashukuru wanaojitolea?", options: ["Kuwaomba walete marafiki watano", "Kuwatumia bili ya vifaa", "Kueleza kazi yao imewezesha nini", "Kuwapa zamu zaidi bila kuwauliza"], answer: 2, why: "Kueleza matokeo, kama masanduku yaliyofungwa, kunawaonyesha wanaojitolea kwamba kazi yao ina maana." },
            { objective: "O6", q: "Uliandika mpango wa kushukuru lakini unausahau kila mara. Unafanya nini?", options: ["Kuuacha mpango", "Kuiomba AI iukumbuke", "Kuwashukuru watu mara moja tu kwa mwaka", "Kuweka kila hatua kwenye kalenda yako pamoja na tarehe"], answer: 3, why: "Andika mpango na uuweke kwenye kalenda yako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujiandikisha, kukaribisha na kuwabakiza wanaojitolea",
        questions: [
          { objective: "O4", q: "Swali lipi HALIFAI kwenye fomu rahisi ya kujiandikisha kujitolea?", options: ["Unaweza kufanya zamu zipi?", "Barua pepe au simu yako", "Lugha unazozungumza", "Namba yako ya Social Security"], answer: 3, why: "Namba nyeti za utambulisho hazifai kwenye fomu rahisi." },
          { objective: "O4", q: "Majibu ya fomu ya wanaojitolea yanapaswa kubaki wapi?", options: ["Kwenye zana yako ya fomu na lahajedwali", "Yakibandikwa kwenye mazungumzo ya AI", "Yakichapishwa mtandaoni", "Kwenye kikundi cha ujumbe mfupi"], answer: 0, why: "Taarifa binafsi zinabaki kwenye zana unazozidhibiti, si kwenye AI." },
          { objective: "O5", q: "Ujumbe mzuri wa kukaribisha una:", options: ["Nembo tu", "Ombi la pesa", "Tarehe, saa, mahali na mtu wa kuwasiliana naye", "\"Asante\" tu na si kingine"], answer: 2, why: "Maelezo yaliyo wazi huwasaidia wanaojitolea wapya kufika wakiwa tayari." },
          { objective: "O5", q: "Unapaswa kutuma ukumbusho lini?", options: ["Mwezi mmoja baada ya zamu", "Kamwe", "Tu wakiikosa", "Siku chache kabla ya zamu"], answer: 3, why: "Ukumbusho muda mfupi kabla huwasaidia watu kukumbuka." },
          { objective: "O6", q: "Nini husaidia wanaojitolea waendelee kurudi?", options: ["Kutowasiliana nao kamwe", "Zamu ndefu zaidi bila mapumziko", "Kueleza kazi yao imewezesha nini", "Kupuuza mawazo yao"], answer: 2, why: "Watu hubaki wanapoona matokeo ya kazi yao na kujihisi wameshukuriwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuajiri Wanaojitolea kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Maelezo yaliyo wazi ya nafasi yanajibu:", options: ["Jina la shirika tu", "Nini, lini, wapi, kwa nini na nani wa kuwasiliana naye", "Mshahara wa mkurugenzi", "Hakuna kitu mahususi"], answer: 1, why: "Maelezo yaliyo wazi huwasaidia watu kukubali." },
      { objective: "O1", q: "Ukaguzi wa historia mara nyingi unahitajika lini?", options: ["Kwa nafasi za kufanya kazi na watoto au watu walio hatarini", "Kwa kila barua pepe", "Kamwe", "Kwa wafadhili tu"], answer: 0, why: "Mashirika mara nyingi yanadai ukaguzi kwa nafasi zinazohusu watoto au watu walio hatarini." },
      { objective: "O1", q: "Unaipa AI nini ili iandike maelezo ya nafasi?", options: ["Namba za simu za wanaojitolea", "Nywila yako", "Ukweli kuhusu nafasi", "Hakuna kitu"], answer: 2, why: "AI inaandika ukweli unaoipa." },
      { objective: "O1", q: "Baada ya AI kuandika rasimu ya maelezo ya nafasi, wewe:", options: ["Unakagua kila ukweli na kuongeza taarifa zako za mawasiliano", "Unaichapisha bila kuisoma", "Unaongeza anwani ya mtu anayejitolea", "Unaifuta"], answer: 0, why: "Wewe ndiye unayewajibika kwa usahihi." },
      { objective: "O2", q: "Tangazo la kuajiri la mitandao ya kijamii linapaswa kuwa:", options: ["La kurasa kumi", "Lililojaa hadithi binafsi", "Lisilo na kiungo", "Fupi lenye hatua moja iliyo wazi"], answer: 3, why: "Matangazo mafupi yenye hatua moja hufanya kazi vizuri zaidi." },
      { objective: "O2", q: "Barua pepe kwa wafuasi inaweza:", options: ["Kutaja kiasi cha michango ya wafadhili", "Kusimulia hadithi fupi na kutoa maelezo zaidi", "Kuorodhesha majina ya wateja", "Kuacha kiungo cha kujiandikisha"], answer: 1, why: "Barua pepe inatoa nafasi zaidi kwa hadithi na maelezo." },
      { objective: "O2", q: "Kwa nini uiombe AI matoleo mawili?", options: ["Kutumia data mara mbili zaidi", "Kuchagua lile linalosikika zaidi kama wewe", "AI inadai hivyo", "Kuwachanganya wasomaji"], answer: 1, why: "Kulinganisha matoleo kunakusaidia kuchagua sauti yako." },
      { objective: "O3", q: "Lipi ni eneo jipya zuri la kupata wanaojitolea?", options: ["Watu wale wale watano tu", "Orodha binafsi ya simu ya mgeni", "Orodha ya barua pepe taka (spam)", "Shule ya sekondari ya karibu inayohitaji saa za huduma"], answer: 3, why: "Mara nyingi wanafunzi wanahitaji saa za huduma." },
      { objective: "O3", q: "AI inataja tovuti ya kujitolea usiyoijua. Unapaswa:", options: ["Kukagua kwanza kwamba ipo kweli", "Kuitumia orodha yako ya wanaojitolea", "Kuilipa mara moja", "Kuiamini"], answer: 0, why: "AI inaweza kubuni majina na tovuti." },
      { objective: "O3", q: "Nini kinafanya nafasi iwe rahisi kujiunga nayo?", options: ["Zamu ya saa 12", "Masharti makali ya uzoefu", "Kazi ya mbali kama kuandika kadi", "Nyenzo za Kiingereza tu katika eneo linalozungumza Kihispania"], answer: 2, why: "Kazi za mbali na zinazonyumbulika zinawafaa watu wengi zaidi." },
      { objective: "O4", q: "Zana zipi za bure zinaweza kutengeneza fomu ya kujiandikisha?", options: ["Kikokotoo", "App ya picha", "App ya muziki", "Google Forms au Microsoft Forms"], answer: 3, why: "Zote mbili zinatengeneza fomu za mtandaoni zinazohifadhi majibu." },
      { objective: "O4", q: "Kwenye fomu rahisi ya kujiandikisha, uliza:", options: ["Kila jambo unaloweza kufikiria", "Taarifa za benki", "Kile unachohitaji kweli tu", "Tarehe za kuzaliwa na namba za utambulisho"], answer: 2, why: "Taarifa chache zinamaanisha hatari ndogo na kujiandikisha haraka zaidi." },
      { objective: "O4", q: "Sehemu ya AI katika kutengeneza fomu ni:", options: ["Kuhifadhi majibu ya wanaojitolea", "Kupendekeza maswali na maneno", "Kufanya ukaguzi wa historia", "Kuwaidhinisha wanaojitolea"], answer: 1, why: "Wewe unatengeneza fomu; majibu yanabaki kwenye zana yako." },
      { objective: "O4", q: "Kabla ya kushiriki kiungo cha fomu yako, unapaswa:", options: ["Kuijaza wewe mwenyewe ili kuijaribu", "Kufuta nusu ya maswali bila mpangilio", "Kuficha kiungo", "Kuiomba AI iijaze"], answer: 0, why: "Kujaribu kunagundua makosa kabla wanaojitolea hawajayaona." },
      { objective: "O5", q: "Kumwandaa mgeni (onboarding) maana yake ni:", options: ["Kuwaondoa wanaojitolea", "Kununua mashua", "Kumsaidia mtu mpya anayejitolea kujiandaa", "Kuandika ombi la ruzuku"], answer: 2, why: "Kumwandaa mgeni kunajumuisha karibu, mafunzo na zamu ya kwanza." },
      { objective: "O5", q: "Jina la mtu anayejitolea linapaswa kuonekanaje katika prompt ya AI ya barua pepe ya kukaribisha?", options: ["Kama [jina], linalojazwa baadaye", "Jina kamili na anwani", "Jina na namba ya simu", "Jina na tarehe ya kuzaliwa"], answer: 0, why: "Vishika-nafasi vinazuia taarifa binafsi zisiingie kwenye AI." },
      { objective: "O5", q: "Unajaza maelezo halisi ya barua pepe za kukaribisha wapi?", options: ["Kwenye mazungumzo ya AI", "Kwenye tangazo la umma", "Kwenye skrini ya pamoja ya maktaba", "Kwenye zana yako ya barua pepe au mail merge"], answer: 3, why: "Maelezo halisi yanabaki kwenye zana unazozidhibiti." },
      { objective: "O6", q: "Kwa nini wanaojitolea hubaki?", options: ["Hawawasiliani nao kamwe", "Wanajihisi wameshukuriwa, wana manufaa na ni sehemu ya timu", "Hawana chaguo", "Zamu zinakuwa ndefu zaidi"], answer: 1, why: "Shukrani na lengo huwafanya watu waendelee kurudi." },
      { objective: "O6", q: "Dodoso fupi la maoni linapaswa kuuliza:", options: ["Akaunti yao ya benki", "Kilichoenda vizuri na cha kubadilisha", "Historia yao ya matibabu", "Nywila yao"], answer: 1, why: "Maoni yanakusaidia kuboresha uzoefu wao." },
      { objective: "O6", q: "Mpango wako wa kushukuru unapaswa:", options: ["Kubaki kichwani mwako tu", "Kufanywa mara moja kila miaka mitano", "Kuachiwa AI iutume", "Kuwekwa kwenye kalenda yako pamoja na tarehe"], answer: 3, why: "Kuuweka kwenye ratiba kunahakikisha unafanyika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      7,
      11,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Maelezo ya nafasi",
        objective: "O1",
        notYet: "Yanakosa nini, lini, wapi, kwa nini au nani wa kuwasiliana naye.",
        meets: "Yanajibu nini, lini, wapi, kwa nini, ukaguzi wowote unaohitajika na nani wa kuwasiliana naye.",
        exceeds: "Mafupi, yenye uchangamfu na yamekaguliwa na mtu anayeijua nafasi hiyo."
      },
      {
        name: "Tangazo na barua pepe",
        objective: "O2",
        notYet: "Hakuna wito ulio wazi wa kuchukua hatua, au hadithi ya mtu halisi imetumika bila ruhusa.",
        meets: "Tangazo fupi na barua pepe kwa wafuasi, kila kimoja na hatua moja na kiungo halisi cha kujiandikisha.",
        exceeds: "Mwanafunzi alijaribu matoleo na akachagua lile linalosikika zaidi kama shirika."
      },
      {
        name: "Fomu ya kujiandikisha",
        objective: "O4",
        notYet: "Inauliza taarifa nyeti au haikujaribiwa.",
        meets: "Maswali machache rahisi yanayouliza tu kinachohitajika, yamejaribiwa na mwanafunzi.",
        exceeds: "Inauliza kuhusu lugha au chaguo za zamu zinazosaidia kuwapangia wanaojitolea kazi inayowafaa."
      },
      {
        name: "Karibu na ukumbusho",
        objective: "O5",
        notYet: "Inakosa tarehe, saa, mahali au mtu wa kuwasiliana naye.",
        meets: "Karibu na ukumbusho wa wiki moja kabla vyenye maelezo yote muhimu, vikitumia vishika-nafasi.",
        exceeds: "Inaeleza zamu ya kwanza itakuwaje na cha kuvaa au kuleta."
      },
      {
        name: "Mpango wa kushukuru",
        objective: "O6",
        notYet: "Hakuna mpango, au hakuna tarehe.",
        meets: "Unasema lini kuwashukuru watu, jinsi ya kueleza matokeo na lini kuomba maoni, pamoja na tarehe.",
        exceeds: "Una dodoso fupi la maoni kuhusu kilichoenda vizuri na cha kubadilisha."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanaojitolea wapya wanaojiandikisha kwa nafasi hiyo ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanaojitolea wapya wanaorudi kwa zamu ya pili",
      "Mashirika yanayofikia kundi jipya la wanaojitolea, kama wanafunzi au waajiri"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure na Google Forms au Microsoft Forms",
      "Ukweli kuhusu nafasi moja halisi ya kujitolea",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mwombe kila mwanafunzi alete nafasi moja halisi anayohitaji kuijaza.",
      "Waache wanafunzi wajaze fomu za kujiandikisha za wenzao ili kuzijaribu.",
      "Wakumbushe wanafunzi wasikusanye namba za Social Security wala tarehe za kuzaliwa kwenye fomu rahisi.",
      "Wakumbushe wanafunzi wakague kwamba kikundi au tovuti yoyote inayopendekezwa na AI ipo kweli kabla ya kuwasiliana nayo.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
