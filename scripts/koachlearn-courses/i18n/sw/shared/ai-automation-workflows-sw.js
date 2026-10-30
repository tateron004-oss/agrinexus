"use strict";

// Koach Learn course (Swahili translation of shared/ai-automation-workflows.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-automation-workflows-sw",
  lang: "sw",
  translationOf: "ai-automation-workflows",
  category: "Small Business",
  name: "Automation ya AI na Mitiririko Bora ya Kazi",
  skills: "Kuchora mtiririko wa kazi, Kutambua kazi za kufanywa kiotomatiki, Kusanifu automation ya kichochezi na vitendo, Kuongeza hatua ya AI, Kujenga na kujaribu automation, Kuifuatilia na kuirekebisha",
  outcome: "kuchora ramani ya kazi inayojirudia, kusanifu automation yenye kichochezi, vitendo na hatua ya AI, kuijenga katika zana isiyohitaji kuandika code, kuijaribu kwa data ya mfano, na kumweka mtu katika mzunguko pale ambapo makosa yangeleta madhara.",
  about: [
    "Automation inamaanisha programu inakufanyia hatua zinazochosha: kunakili majibu ya fomu kwenye spreadsheet, kutuma barua pepe ya kuthibitisha, kuhifadhi risiti, kumkumbusha mtu tarehe ya mwisho. Ukiongeza AI, automation inaweza pia kusoma, kupanga na kuandika, kwa mfano kufupisha ombi au kuandika rasimu ya jibu.",
    "Kozi hii ni kwa wamiliki wa biashara ndogo, wafanyakazi na wanaojitolea katika mashirika yasiyo ya faida, na wafanyakazi wanaotaka ujuzi unaothaminiwa na waajiri. Mifano ni kampuni ya usafi inayoshughulikia maombi ya bei, shirika lisilo la faida linalosajili wanaojitolea, na msaidizi wa ofisi anayeshughulikia ankara.",
    "Utachora ramani ya kazi halisi, utasanifu automation kwenye karatasi, kisha utaijenga katika zana isiyohitaji code kama Zapier, Microsoft Power Automate au Make, au kwa vipengele vilivyomo ndani ya Google Forms na Sheets. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Jenga automation moja inayofanya kazi kwa shirika halisi au la mazoezi: kwa mfano, fomu ya maombi inayohifadhi kila jibu kwenye spreadsheet, inatumia hatua ya AI kufupisha na kupanga ombi, na inatuma rasimu ya jibu kwa barua pepe kwa mfanyakazi ili aidhinishe. Andika ramani ya mtiririko wa kazi, kichochezi na vitendo, majaribio matano pamoja na matokeo yake, na nani anakagua matokeo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo, mameneja na wafanyakazi wa ofisi, na waratibu wa mashirika yasiyo ya faida au makanisa wanaoshughulikia fomu, barua pepe, usajili na vikumbusho vile vile kila wiki.",
    startingPoint: "Wanatumia barua pepe, spreadsheet na fomu za mtandaoni, na huenda wamejaribu msaidizi wa AI. Wengi hawajawahi kujenga automation wala kuunganisha apps mbili, na hawana uzoefu wa kuandika code.",
    gap: "Saa nyingi zinapotea kwa kunakili, kuhifadhi, kukumbusha na kuthibitisha kwa mkono, na mambo mengine yanasahaulika. Wanafunzi wanahitaji kusanifu na kujenga automation salama isiyohitaji code yenye hatua ya AI, kuijaribu, na kumweka mtu kuwa msimamizi pale ambapo makosa yangeumiza, ili waokoe muda bila kutuma ujumbe usio sahihi wala kuvujisha data.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; hakuna kuandika code",
      "Vifaa: kompyuta inahitajika ili kujenga automation",
      "Gharama: mipango ya bure na ya majaribio ina mipaka; zana na bei hubadilika, kwa hiyo wanafunzi wanakagua ukurasa wa bei wa kila zana",
      "Faragha: hakuna namba za kadi, namba za Social Security, taarifa za afya wala nywila kupitia hatua ya AI; jaribu kwa data ya kubuni tu",
      "Muda: masomo ya dakika 5, kama dakika 60 kwa jumla pamoja na muda wa kujenga na kujaribu"
    ],
    prerequisites: "Hakuna. Kuzoea Google Forms au Microsoft Forms na spreadsheet kunasaidia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa automation ya kila siku", action: "kutambua kichochezi chake, vitendo vyake na mahali hatua ya AI inapofaa", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Kwa kazi inayofanywa angalau kila wiki", action: "kuchora kila hatua pamoja na nani anaifanya, zana gani na inachukua muda gani, na kuweka alama kila hatua: automation, rasimu ya AI pamoja na ukaguzi wa mtu, au ibaki kwa mtu", standard: "pamoja na makadirio ya muda unaookolewa kila wiki" },
    { id: "O3", condition: "Kabla ya kutumia zana yoyote", action: "kuandika usanifu wa automation wenye kichochezi, vitendo, prompt ya AI, vituo vya ukaguzi wa mtu na kanuni za data", standard: "pamoja na idhini ya mtu popote ambapo kosa lingeumiza" },
    { id: "O4", condition: "Ukitumia fomu, spreadsheet na zana isiyohitaji code", action: "kujenga automation inayohifadhi majibu, inaendesha hatua ya AI na inatuma rasimu ili iidhinishwe", standard: "ili mtiririko wa msingi ufanye kazi kabla ya kuongeza hatua ya AI" },
    { id: "O5", condition: "Ukipewa automation uliyojenga", action: "kuijaribu kwa maingizo matano ya mfano, yakiwemo magumu, na kurekebisha kinachoharibika", standard: "ukitumia data ya kubuni tu, kila hitilafu ikirekebishwa na kujaribiwa tena" },
    { id: "O6", condition: "Automation inapoanza kutumika kwa kweli", action: "kufuatilia historia ya utekelezaji, kuweka tahadhari ya hitilafu, kumtaja mmiliki na kuandika karatasi ya maelekezo ya ukurasa mmoja", standard: "ili mtu mwingine aweze kuiendesha au kuizima" }
  ],
  chapters: [
    {
      name: "Sura 1: Kusanifu mitiririko bora ya kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Automation na mitiririko ya kazi ya AI ni nini",
          minutes: 4,
          goal: "Eleza vichochezi, vitendo na mahali hatua ya AI inapofaa.",
          text: [
            "Kila automation ina umbo lile lile. Kichochezi (trigger) ni tukio linaloianzisha: fomu inatumwa, barua pepe inafika, tarehe fulani inafika. Vitendo (actions) ni kinachofuata: kuongeza mstari kwenye spreadsheet, kutuma barua pepe, kuunda kazi.",
            "Automation ya kawaida inafuata kanuni zisizobadilika: fomu ikifika, inakili kwenye sheet. Hatua ya AI inaongeza kazi inayofanana na kufikiri: kusoma ujumbe na kuamua kama ni lalamiko, swali au mteja anayetarajiwa; kuufupisha kwa sentensi mbili; kuandika rasimu ya jibu la adabu.",
            "Zana tofauti zinatumia majina tofauti. Zapier inaita automation Zap, Power Automate inaiita flow, na Make inaiita scenario. Wazo ni lile lile: jambo hili likitokea, fanya lile."
          ],
          words: [["Automation", "programu inayofanya hatua kwa niaba yako bila mtu kuifanya kila mara."], ["Kichochezi (trigger)", "tukio linaloanzisha automation."], ["Kitendo (action)", "hatua ambayo automation inafanya baada ya kichochezi."], ["Mtiririko wa kazi (workflow)", "mfululizo wa hatua zinazotumika kumaliza kazi."]],
          slides: [
            { title: "Jambo hili likitokea, fanya lile", bullets: ["Kichochezi: tukio linaloianzisha", "Vitendo: kinachofuata"] },
            { title: "Kuongeza hatua ya AI", bullets: ["Kupanga: lalamiko, swali au mteja anayetarajiwa", "Kufupisha kwa sentensi mbili", "Kuandika rasimu ya jibu ili mtu aikague"] },
            { title: "Wazo moja, majina tofauti", bullets: ["Zapier: Zap", "Power Automate: flow", "Make: scenario"] }
          ],
          tryIt: "Andika automation tatu za \"jambo hili likitokea, fanya lile\" ambazo ungetamani kuwa nazo kazini, nyumbani au katika kikundi chako. Zungushia duara ile inayoweza kutumia hatua ya AI.",
          youCanNow: "kueleza automation yoyote kama kichochezi pamoja na vitendo, na kusema mahali AI inaweza kusaidia.",
          quickCheck: [
            { objective: "O1", q: "Power Automate inaitaje automation?", options: ["Zap", "Scenario", "Flow", "Macro"], answer: 2, why: "Power Automate inaiita flow; Zapier inaiita Zap na Make inaiita scenario." },
            { objective: "O1", q: "Unataka kila ujumbe mpya upangwe kama lalamiko, swali au mteja anayetarajiwa. Sehemu gani inafanya hivyo?", options: ["Hatua ya AI", "Kichochezi", "Mstari wa spreadsheet", "Anwani ya barua pepe"], answer: 0, why: "Kusoma ujumbe na kuupanga ni kazi inayofanana na kufikiri, ya hatua ya AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuchora mtiririko wa kazi na kutafuta cha kufanya kiotomatiki",
          minutes: 5,
          goal: "Chora kazi inayojirudia hatua kwa hatua na uchague hatua za kufanya kiotomatiki.",
          text: [
            "Kabla ya kujenga, chora kazi jinsi inavyofanywa leo. Andika kila hatua, nani anaifanya, zana gani anatumia na inachukua muda gani. Usajili wa mtu wa kujitolea unaweza kuwa: kusoma barua pepe, kunakili taarifa kwenye spreadsheet, kuangalia ratiba, kutuma barua pepe ya kukaribisha, kuongeza kikumbusho kwenye kalenda.",
            "Hatua nzuri za kufanya kiotomatiki ni zile zinazojirudia, zinazofuata kanuni na zinazochosha: kunakili, kuhifadhi, kukumbusha, kuthibitisha. Hatua zinazohitaji busara, upole au uamuzi kuhusu maisha ya mtu zibaki kwa mtu, au AI itumike kuandika rasimu tu.",
            "Weka alama kila hatua: automation, rasimu ya AI pamoja na ukaguzi wa mtu, au ibaki kwa mtu. Ramani hiyo yenye alama ndiyo usanifu wako."
          ],
          steps: ["Chagua kazi inayofanywa angalau kila wiki.", "Andika kila hatua kwa mpangilio, pamoja na nani, zana gani na muda gani.", "Weka alama kila hatua: automation, rasimu ya AI pamoja na ukaguzi wa mtu, au ibaki kwa mtu.", "Kadiria muda unaookolewa kila wiki."],
          words: [["Ramani ya mtiririko wa kazi", "orodha au mchoro wa hatua kwa hatua wa jinsi kazi inavyofanywa."], ["Mtu katika mzunguko (human in the loop)", "mtu anakagua au anaidhinisha kabla automation haijaendelea."]],
          slides: [
            { title: "Chora kwanza", bullets: ["Kila hatua kwa mpangilio", "Nani, zana gani, muda gani"] },
            { title: "Nzuri kufanywa kiotomatiki", bullets: ["Kunakili na kuhifadhi", "Vikumbusho na uthibitisho", "Hatua zinazojirudia na kufuata kanuni"] },
            { title: "Weka alama kila hatua", bullets: ["Automation", "Rasimu ya AI pamoja na ukaguzi wa mtu", "Ibaki kwa mtu"] }
          ],
          tryIt: "Chora kazi moja inayojirudia yenye angalau hatua tano. Weka alama kila hatua: automation, rasimu ya AI pamoja na ukaguzi wa mtu, au ibaki kwa mtu, na ukadirie muda unaookolewa kila wiki.",
          youCanNow: "kuchora mtiririko wa kazi na kuamua hatua zipi zifanywe kiotomatiki, zipi AI iandike rasimu na zipi zibaki kwa mtu.",
          quickCheck: [
            { objective: "O2", q: "Hatua ipi inafaa kufanywa kiotomatiki kabisa?", options: ["Kuamua nani apate ufadhili wa masomo", "Kumfariji mtu wa kujitolea aliyekasirika", "Kuchagua mfanyakazi mpya", "Kuongeza kikumbusho kwenye kalenda baada ya usajili"], answer: 3, why: "Hatua zinazojirudia na kufuata kanuni, kama vikumbusho, zinafaa kufanywa kiotomatiki." },
            { objective: "O2", q: "Ramani yako ina hatua \"kujibu familia inayoomba msaada wa kodi ya nyumba\". Unaiwekea alama gani?", options: ["Automation kamili", "Rasimu ya AI pamoja na ukaguzi wa mtu, au ibaki kwa mtu", "Futa hatua hiyo", "Usitume jibu lolote"], answer: 1, why: "Hatua zinazohitaji upole au zinazogusa maisha ya mtu zinabaki kwa mtu, au AI inaandika rasimu tu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kusanifu automation kwenye karatasi",
          minutes: 5,
          goal: "Andika usanifu kamili wa automation: kichochezi, vitendo, prompt ya AI, ukaguzi na kanuni za data.",
          text: [
            "Sanifu kwenye karatasi kabla ya kugusa zana yoyote. Andika kichochezi, kila kitendo kwa mpangilio, na prompt kamili ya AI kama kuna hatua ya AI, kwa mfano: \"Soma ombi hili. Jibu kwa neno moja: Bei, Swali au Lalamiko. Kisha andika muhtasari wa sentensi mbili.\"",
            "Weka kituo cha ukaguzi wa mtu popote ambapo kosa lingeumiza: chochote kinachotumwa kwa mteja, pesa zinazohamishwa, au uamuzi kuhusu mtu. Automation inaweza kuandika rasimu kisha kusubiri idhini.",
            "Andika kanuni za data: taarifa gani zinapita katika automation, zinahifadhiwa wapi, na nini kisipite kamwe katika hatua ya AI, kama namba za kadi, namba za Social Security (namba ya utambulisho ya Marekani), taarifa za afya au nywila. Kagua kila zana iliyounganishwa inafanya nini na data yako."
          ],
          steps: ["Andika kichochezi.", "Orodhesha kila kitendo kwa mpangilio.", "Andika prompt kamili kwa kila hatua ya AI.", "Weka idhini ya mtu pale ambapo makosa yangeumiza.", "Andika kanuni za data: nini kinapita, kinahifadhiwa wapi, nini kisipite kamwe katika AI."],
          words: [["Prompt", "maelekezo unayoipa hatua ya AI."], ["Kituo cha ukaguzi", "mahali ambapo mtu anakagua kabla automation haijaendelea."]],
          slides: [
            { title: "Sanifu kabla ya kujenga", bullets: ["Kichochezi na vitendo kwa mpangilio", "Prompt kamili ya AI"] },
            { title: "Vituo vya ukaguzi wa mtu", bullets: ["Chochote kinachotumwa kwa wateja", "Pesa zinazohamishwa", "Maamuzi kuhusu watu"] },
            { title: "Kanuni za data", bullets: ["Nini kinapita na kinahifadhiwa wapi", "Kamwe kadi, SSN, taarifa za afya au nywila kupitia AI"] }
          ],
          tryIt: "Andika usanifu wa ukurasa mmoja wa automation yako: kichochezi, vitendo, prompt ya AI, kituo cha ukaguzi wa mtu na kanuni za data.",
          youCanNow: "kusanifu automation yenye hatua ya AI, kituo cha ukaguzi wa mtu na kanuni salama za data.",
          quickCheck: [
            { objective: "O3", q: "Kanuni za data katika usanifu zinasema nini?", options: ["Barua pepe inatumia aina gani ya herufi", "Nini kinapita, kinahifadhiwa wapi na nini kisipite kamwe katika AI", "Kompyuta ina kasi gani", "Nani alichora nembo"], answer: 1, why: "Kanuni za data zinahusu taarifa zipi zinapita, zinahifadhiwa wapi na nini kisipite kamwe katika AI." },
            { objective: "O3", q: "Automation yako itatuma majibu kwa wateja. Unaweka wapi kituo cha ukaguzi wa mtu?", options: ["Popote; inaokoa muda", "Mara moja tu kwa mwaka", "Baada ya jibu kutumwa", "Kabla jibu halijatumwa, ili mtu aidhinishe rasimu"], answer: 3, why: "Chochote kinachotumwa kwa mteja kisubiri idhini ya mtu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kusanifu mitiririko bora ya kazi",
        questions: [
          { objective: "O1", q: "Katika \"Fomu ikitumwa, ongeza mstari kwenye spreadsheet\", kichochezi ni kipi?", options: ["Kuongeza mstari", "Spreadsheet", "Fomu inatumwa", "Barua pepe"], answer: 2, why: "Kichochezi ni tukio linaloianzisha." },
          { objective: "O1", q: "Hatua ya AI inaongeza nini katika automation?", options: ["Uwezo wa kusoma, kupanga, kufupisha au kuandika rasimu", "Umeme wa bure", "Malipo ya kiotomatiki kwa mtu yeyote", "Hakuna kitu"], answer: 0, why: "Hatua za AI zinashughulikia kazi za lugha kama kupanga na kuandika rasimu." },
          { objective: "O2", q: "Hatua ipi inafaa zaidi kufanywa kiotomatiki kabisa?", options: ["Kuamua kama ombi la makazi la mtu likubaliwe", "Kumfariji mteja aliyekasirika", "Kumfukuza mfanyakazi kazi", "Kunakili majibu ya fomu kwenye spreadsheet"], answer: 3, why: "Kunakili kunakojirudia na kufuata kanuni kunafaa sana kufanywa kiotomatiki." },
          { objective: "O3", q: "\"Mtu katika mzunguko\" (human in the loop) inamaanisha nini?", options: ["Mtu amekwama katika mzunguko", "Mtu anakagua au anaidhinisha kabla automation haijaendelea", "Automation inaendeshwa bila watu", "Aina ya kichochezi"], answer: 1, why: "Inamweka mtu kuwa msimamizi pale ambapo makosa ni muhimu." },
          { objective: "O3", q: "Kipi kisipite kamwe katika hatua ya AI?", options: ["Muhtasari wa jumla wa ombi", "Namba za kadi za wateja", "Neno \"Swali\"", "Saa za kazi za biashara"], answer: 1, why: "Taarifa za malipo ni za siri na za hatari." }
        ]
      }
    },
    {
      name: "Sura 2: Kujenga, kujaribu na kuiendesha",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujenga automation yako ya kwanza",
          minutes: 6,
          goal: "Jenga automation rahisi kutoka fomu hadi spreadsheet hadi barua pepe.",
          text: [
            "Anza na toleo rahisi zaidi linalofanya kazi. Google Forms inaweza kuhifadhi kila jibu kwenye Google Sheet bila zana nyingine yoyote, na Microsoft Forms inaweza kutuma majibu kwa Excel. Hiyo peke yake ni automation.",
            "Ili kuongeza vitendo, tumia zana isiyohitaji code kama Zapier, Power Automate au Make. Nyingi zina mipango ya bure au ya majaribio yenye mipaka; kagua ukurasa wa bei wa kila zana, kwa sababu mipango hubadilika. Unganisha akaunti zako, chagua kichochezi (jibu jipya la fomu au mstari mpya wa spreadsheet), kisha ongeza vitendo (tuma barua pepe, unda kazi).",
            "Ongeza hatua ya AI mwisho, baada ya mtiririko wa msingi kufanya kazi. Zana nyingi zina kitendo cha AI kilichomo ndani au zinaunganishwa na huduma ya AI. Bandika prompt kutoka usanifu wako na upeleke matokeo yake kwa kitendo kinachofuata, kama rasimu ya barua pepe inayosubiri mtu aidhinishe."
          ],
          steps: ["Tengeneza fomu yenye sehemu unazohitaji.", "Iunganishe na spreadsheet.", "Katika zana isiyohitaji code, weka kichochezi: jibu jipya au mstari mpya.", "Ongeza kitendo: tuma barua pepe au unda kazi.", "Ongeza hatua ya AI pamoja na prompt yako, ukipeleka matokeo yake kwenye rasimu ili iidhinishwe."],
          words: [["Zana isiyohitaji code (no-code tool)", "programu inayokuruhusu kujenga bila kuandika code."], ["Kuunganisha (connect)", "kuipa app moja ruhusa ya kufanya kazi na app nyingine."], ["Sehemu (field)", "swali moja au kisanduku kimoja katika fomu."]],
          slides: [
            { title: "Anza kwa urahisi", bullets: ["Google Forms inahifadhi kwenye Sheets", "Microsoft Forms inaweza kutuma kwa Excel"] },
            { title: "Ongeza vitendo", bullets: ["Zapier, Power Automate au Make", "Mipango ya bure na ya majaribio ina mipaka", "Kagua ukurasa wa bei wa kila zana"] },
            { title: "Ongeza AI mwisho", bullets: ["Baada ya mtiririko wa msingi kufanya kazi", "Bandika prompt yako", "Matokeo yanaenda kwenye rasimu ili iidhinishwe"] }
          ],
          sources: [{ name: "Zapier", url: "https://zapier.com/" }, { name: "Microsoft Power Automate", url: "https://www.microsoft.com/power-platform/products/power-automate" }, { name: "Make", url: "https://www.make.com/" }],
          tryIt: "Jenga sehemu ya kwanza ya automation yako: fomu iliyounganishwa na spreadsheet. Ukiweza, ongeza kitendo kimoja katika zana isiyohitaji code, kama barua pepe kwako mwenyewe kwa kila jibu jipya.",
          youCanNow: "kujenga automation ya msingi ya fomu kwenda spreadsheet kwenda barua pepe kwa zana zisizohitaji code.",
          quickCheck: [
            { objective: "O4", q: "Mpangilio upi rahisi tayari ni automation bila zana nyingine?", options: ["Microsoft Forms ikituma majibu kwa Excel", "Kuandika majibu ya fomu kwenye sheet kwa mkono", "Kuchapisha kila jibu", "Kusoma majibu kwenye simu yako"], answer: 0, why: "Microsoft Forms inaweza kutuma majibu kwa Excel yenyewe." },
            { objective: "O4", q: "Mtiririko wako wa msingi wa fomu kwenda barua pepe unafanya kazi. Unaongeza nini baadaye?", options: ["Apps tano zaidi kwa wakati mmoja", "Namba halisi za kadi za wateja", "Hatua ya AI pamoja na prompt kutoka usanifu wako", "Hakuna; futa mtiririko"], answer: 2, why: "Ongeza hatua ya AI mwisho, baada ya mtiririko wa msingi kufanya kazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujaribu kwa data ya mfano",
          minutes: 5,
          goal: "Jaribu automation kwa maingizo ya mfano ya kawaida na magumu, na urekebishe kinachoharibika.",
          text: [
            "Usiwashe kamwe automation kwa watu halisi kabla haijafaulu majaribio. Tumia maingizo ya mfano ya kubuni, si data halisi ya wateja.",
            "Jaribu hali tano: ingizo la kawaida, sehemu iliyo wazi, ujumbe mrefu sana, ingizo lenye makosa ya tahajia au la ajabu, na moja ambalo hatua ya AI inaweza kulipanga vibaya. Kagua kila hatua: je, mstari ulionekana, barua pepe ilienda mahali sahihi, AI ilipanga na kufupisha vizuri?",
            "Andika daftari la majaribio: ingizo, matokeo yaliyotarajiwa, matokeo halisi, imefaulu au imeshindwa, marekebisho. Marekebisho ya kawaida: kufanya sehemu ya fomu kuwa ya lazima, kuibana prompt ya AI (\"Jibu kwa neno moja tu\"), au kuongeza kichujio ili maingizo fulani tu yaendelee."
          ],
          steps: ["Andika maingizo matano ya mfano, yakiwemo magumu.", "Pitisha kila moja katika automation.", "Kagua matokeo ya kila hatua.", "Andika imefaulu au imeshindwa katika daftari la majaribio.", "Rekebisha na ujaribu tena yaliyoshindwa."],
          words: [["Jaribio (test case)", "ingizo moja la mfano linalotumika kukagua kama kitu kinafanya kazi."], ["Kichujio (filter)", "kanuni inayoruhusu vitu fulani tu kuendelea katika automation."]],
          slides: [
            { title: "Jaribu kabla ya kuanza kutumia", bullets: ["Data ya mfano ya kubuni tu", "Kamwe data halisi ya wateja kwa majaribio"] },
            { title: "Majaribio matano", bullets: ["Kawaida, sehemu iliyo wazi, refu sana", "Lenye makosa ya tahajia au la ajabu", "Moja ambalo AI inaweza kulipanga vibaya"] },
            { title: "Andika na urekebishe", bullets: ["Sehemu za lazima na vichujio", "Prompt za AI zilizobanwa zaidi", "Jaribu tena baada ya kila marekebisho"] }
          ],
          tryIt: "Pitisha maingizo matano ya mfano katika automation yako, yakiwemo angalau mawili magumu. Andika daftari la majaribio na urekebishe tatizo moja.",
          youCanNow: "kujaribu automation kwa data ya mfano, kuandika matokeo na kurekebisha kinachoshindwa.",
          quickCheck: [
            { objective: "O5", q: "Nini kinaandikwa katika daftari la majaribio ya automation?", options: ["Taarifa halisi za wateja", "Majaribio yaliyofaulu tu", "Bei ya zana", "Ingizo, matokeo yaliyotarajiwa, matokeo halisi, imefaulu au imeshindwa, na marekebisho"], answer: 3, why: "Daftari la majaribio linaandika kilichoingia, kilichopaswa kutokea, kilichotokea, na marekebisho." },
            { objective: "O5", q: "Ingizo la majaribio lenye sehemu ya barua pepe iliyo wazi linaharibu mtiririko. Marekebisho ya kawaida ni yapi?", options: ["Kufanya sehemu ya barua pepe kuwa ya lazima katika fomu", "Kuiwasha automation hata hivyo", "Kuondoa hatua ya barua pepe", "Kutumia data halisi ya wateja kujaribu"], answer: 0, why: "Kufanya sehemu kuwa ya lazima kunazuia maingizo yaliyo wazi yasiharibu mtiririko." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuendesha, kufuatilia na kuboresha",
          minutes: 5,
          goal: "Washa automation kwa usalama, iangalie, na ujue la kufanya inaposhindwa.",
          text: [
            "Iwashe kwanza kwa kikundi kidogo, kama fomu moja au wiki moja. Kagua matokeo kila siku mwanzoni. Zana nyingi zinaonyesha historia ya utekelezaji (run history) inayoorodhesha kila mara ilipoendeshwa na kama ilifaulu.",
            "Automation huharibika: nywila inabadilika, sehemu inabadilishwa jina, mpango wa bure unafikia kikomo chake, au hatua ya AI inaanza kupanga kwa njia isiyo ya kawaida. Weka tahadhari ya hitilafu itumwe kwa barua pepe yako, na umtaje mmiliki anayeikagua.",
            "Andika karatasi ya maelekezo ya ukurasa mmoja: automation inafanya nini, iko wapi, mmiliki ni nani na jinsi ya kuizima. Mmiliki akiondoka, mtu mwingine anaweza kuiendeleza. Ipitie kila baada ya miezi michache na uulize: bado inaokoa muda?"
          ],
          steps: ["Iwashe kwa kikundi kidogo au kwa wiki moja.", "Kagua historia ya utekelezaji kila siku mwanzoni.", "Weka tahadhari ya hitilafu na umtaje mmiliki.", "Andika karatasi ya maelekezo ya ukurasa mmoja.", "Ipitie kila baada ya miezi michache."],
          words: [["Historia ya utekelezaji (run history)", "orodha ya kila mara automation ilipoendeshwa na kama ilifanya kazi."], ["Tahadhari ya hitilafu (error alert)", "ujumbe unaokuambia kwamba automation imeshindwa."]],
          slides: [
            { title: "Anza kidogo", bullets: ["Fomu moja au wiki moja", "Kagua matokeo kila siku mwanzoni"] },
            { title: "Kwa nini automation huharibika", bullets: ["Nywila au majina ya sehemu yanabadilika", "Mipaka ya mpango inafikiwa", "Upangaji wa AI unabadilika polepole"] },
            { title: "Iweke katika hali nzuri", bullets: ["Tahadhari za hitilafu na mmiliki", "Karatasi ya maelekezo ya ukurasa mmoja", "Ipitie kila baada ya miezi michache"] }
          ],
          tryIt: "Kazi ya mwisho: maliza automation yako pamoja na hatua yake ya AI na idhini ya mtu, endesha maingizo matano ya majaribio, kisha andika karatasi ya maelekezo ya ukurasa mmoja yenye ramani ya mtiririko wa kazi, kichochezi na vitendo, matokeo ya majaribio na mmiliki.",
          youCanNow: "kusanifu, kujenga, kujaribu na kuendesha automation inayotumia AI huku mtu akiwa msimamizi.",
          quickCheck: [
            { objective: "O6", q: "Tahadhari ya hitilafu inafanya nini?", options: ["Inaharakisha automation", "Inamtumia mmiliki barua pepe utekelezaji unaposhindwa", "Inafuta utekelezaji wa zamani", "Inabadilisha nywila yako"], answer: 1, why: "Tahadhari ya hitilafu inamwambia mmiliki mara moja kitu kinapoharibika." },
            { objective: "O6", q: "Mtu aliyejenga automation yako anaondoka. Nini kitaifanya iendelee?", options: ["Kutumaini kwamba hakuna kitakachoharibika", "Kuizima kabisa", "Karatasi ya maelekezo ya ukurasa mmoja na mmiliki mpya anayekagua tahadhari", "Kubadilisha nywila zote bila kumwambia mtu"], answer: 2, why: "Karatasi ya maelekezo na mmiliki aliyetajwa vinamwezesha mtu mwingine kuiendesha au kuizima." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujenga, kujaribu na kuiendesha",
        questions: [
          { objective: "O4", q: "Automation rahisi zaidi unayoweza kujenga bila zana nyingine ni ipi?", options: ["Mkono wa roboti", "App maalum ya simu", "Seva ya kulipia", "Google Forms ikihifadhi majibu kwenye Google Sheet"], answer: 3, why: "Fomu zinaweza kuhifadhi majibu kwenye spreadsheet zenyewe." },
          { objective: "O4", q: "Unapaswa kuongeza hatua ya AI lini?", options: ["Baada ya mtiririko wa msingi kufanya kazi", "Kabla ya kitu kingine chochote", "Kamwe", "Wikendi tu"], answer: 0, why: "Jenga kitu rahisi kwanza, kisha ongeza AI." },
          { objective: "O5", q: "Unapaswa kutumia data gani kwa majaribio?", options: ["Namba halisi za kadi za wateja", "Rekodi halisi za wagonjwa", "Maingizo ya mfano ya kubuni", "Nywila"], answer: 2, why: "Jaribu kwa data ya mfano ili kulinda watu halisi." },
          { objective: "O5", q: "Hatua ya AI inarudisha sentensi ndefu wakati ulitaka neno moja. Marekebisho ni yapi?", options: ["Kufuta automation", "Kupuuza", "Kuongeza fomu ya pili", "Kuibana prompt: \"Jibu kwa neno moja tu\""], answer: 3, why: "Prompt zilizo wazi zaidi zinatoa matokeo ya AI yanayotabirika zaidi." },
          { objective: "O6", q: "Kwa nini uandike karatasi ya maelekezo ya ukurasa mmoja?", options: ["Ili kuifanya polepole", "Inatakiwa na sheria", "Ili mtu mwingine aweze kuiendesha au kuizima automation", "Ili kushirikisha nywila"], answer: 2, why: "Inaifanya automation iendelee mmiliki akiondoka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Automation ya AI na Mitiririko Bora ya Kazi",
    questions: [
      { objective: "O1", q: "Automation inamaanisha:", options: ["Kuajiri wafanyakazi zaidi", "Programu inayofanya hatua kwa niaba yako bila mtu kuifanya kila mara", "Kufanya kazi saa nyingi zaidi", "Kununua roboti"], answer: 1, why: "Automation zinaendesha hatua zenyewe." },
      { objective: "O1", q: "Barua pepe inayofika na kuanzisha automation ni:", options: ["Kichochezi", "Kichujio", "Sehemu", "Historia ya utekelezaji"], answer: 0, why: "Tukio linaloanzisha ni kichochezi." },
      { objective: "O1", q: "\"Tuma barua pepe ya kuthibitisha\" katika automation ni:", options: ["Kichochezi", "Prompt", "Kitendo", "Mmiliki"], answer: 2, why: "Vitendo ni kinachotokea baada ya kichochezi." },
      { objective: "O1", q: "Zapier inaita automation:", options: ["Zap", "Flow", "Scenario", "Kadi ya mapishi"], answer: 0, why: "Jina la Zapier ni Zap." },
      { objective: "O2", q: "Kazi ipi ni bora iachiwe mtu?", options: ["Kuhifadhi risiti", "Kutuma kikumbusho", "Kunakili data ya fomu", "Kuamua kama mtu anastahili msaada"], answer: 3, why: "Maamuzi kuhusu watu yanahitaji busara ya mtu." },
      { objective: "O2", q: "Ramani ya mtiririko wa kazi inaorodhesha:", options: ["Matokeo ya mwisho tu", "Kila hatua, nani anaifanya, zana na muda", "Mishahara ya wafanyakazi", "Anwani za ofisi"], answer: 1, why: "Inaonyesha jinsi kazi inavyofanywa leo." },
      { objective: "O2", q: "\"Rasimu ya AI pamoja na ukaguzi wa mtu\" inafaa hatua ipi?", options: ["Kuongeza mstari kwenye sheet", "Kuandika jibu kwa mteja", "Kuhifadhi faili", "Kuanzisha automation"], answer: 1, why: "Ujumbe kwa wateja ukaguliwe kabla ya kutumwa." },
      { objective: "O3", q: "Prompt nzuri ya AI katika automation ni:", options: ["Isiyo wazi, kama \"fanya kitu\"", "Tupu", "Nywila", "Kamili, kama \"Jibu kwa neno moja: Bei, Swali au Lalamiko\""], answer: 3, why: "Prompt kamili zinatoa matokeo yanayotabirika." },
      { objective: "O3", q: "Unapaswa kuweka kituo cha ukaguzi wa mtu wapi?", options: ["Popote ambapo kosa lingeumiza, kama ujumbe kwa wateja", "Hakuna mahali", "Kwenye kichochezi tu", "Baada ya automation kufutwa tu"], answer: 0, why: "Vituo vya ukaguzi vinanasa makosa yenye gharama." },
      { objective: "O3", q: "Kanuni za data katika usanifu wako zinasema:", options: ["Aina gani ya herufi itumike", "Nani apate bonasi", "Nini kinapita, kinahifadhiwa wapi na nini kisipite kamwe katika AI", "Hakuna kitu"], answer: 2, why: "Zinalinda taarifa za siri." },
      { objective: "O4", q: "Swali au kisanduku katika fomu kinaitwa:", options: ["Kichochezi", "Zap", "Kichujio", "Sehemu (field)"], answer: 3, why: "Kila kisanduku ni sehemu." },
      { objective: "O4", q: "Mipango ya bure ya zana zisizohitaji code:", options: ["Haina mipaka milele", "Daima inagharimu $1,000", "Ina mipaka; kagua ukurasa wa bei", "Haipo"], answer: 2, why: "Mipango hubadilika, kwa hiyo kagua ukurasa rasmi wa bei." },
      { objective: "O4", q: "Kuunganisha apps katika zana ya automation inamaanisha:", options: ["Kuchomeka nyaya", "Kuipa app moja ruhusa ya kufanya kazi na app nyingine", "Kutangaza nywila yako hadharani", "Kununua kompyuta mpya"], answer: 1, why: "Miunganisho ni ruhusa kati ya apps." },
      { objective: "O5", q: "Kozi inapendekeza angalau majaribio mangapi?", options: ["Matano", "Moja", "Sifuri", "Mia tano"], answer: 0, why: "Majaribio matano yanashughulikia maingizo ya kawaida na magumu." },
      { objective: "O5", q: "Jaribio gumu ni lipi?", options: ["Ingizo la kawaida kabisa tu", "Kutokuwa na ingizo lolote, bila kujaribu kamwe", "Fomu yenye sehemu iliyo wazi", "Nywila yako"], answer: 2, why: "Sehemu zilizo wazi mara nyingi huharibu automation." },
      { objective: "O5", q: "Kichujio katika automation:", options: ["Kinaruhusu vitu fulani tu kuendelea", "Kinasafisha skrini", "Kinafuta spreadsheet", "Kinaanzisha automation"], answer: 0, why: "Vichujio vinadhibiti vitu vipi viendelee." },
      { objective: "O6", q: "Unapoanza kuitumia kwa kweli mara ya kwanza, unapaswa:", options: ["Kuiwasha kwa kila mtu na kutoikagua kamwe", "Kufuta daftari la majaribio", "Kuondoa kituo cha ukaguzi wa mtu", "Kuanza kidogo na kukagua matokeo kila siku"], answer: 3, why: "Kuanza kidogo kunapunguza madhara ya matatizo." },
      { objective: "O6", q: "Historia ya utekelezaji inaonyesha:", options: ["Historia ya kuvinjari kwako", "Kila mara automation ilipoendeshwa na kama ilifanya kazi", "Saa za kazi za wafanyakazi", "Nywila za wateja"], answer: 1, why: "Inakusaidia kugundua hitilafu." },
      { objective: "O6", q: "Sababu ya kawaida ya automation kuharibika ni ipi?", options: ["Jua lilizama", "Nywila au jina la sehemu lilibadilika", "Wateja wengi mno wenye furaha", "Nembo ilibadilisha rangi"], answer: 1, why: "Mabadiliko katika apps zilizounganishwa huharibu automation." },
      { objective: "O6", q: "Kila automation inapaswa kuwa na:", options: ["Hakuna anayewajibika", "Ruhusa isiyo na mipaka kwa data yote", "Mahali pa siri", "Mmiliki anayekagua tahadhari za hitilafu"], answer: 3, why: "Mmiliki anaiweka katika hali nzuri." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ramani ya mtiririko wa kazi",
        objective: "O2",
        notYet: "Hatua zinakosekana, au hakuna hatua iliyowekewa alama.",
        meets: "Kila hatua pamoja na nani, zana na muda, na alama: automation, rasimu ya AI pamoja na ukaguzi wa mtu, au ibaki kwa mtu.",
        exceeds: "Ina makadirio ya muda unaookolewa kila wiki."
      },
      {
        name: "Kichochezi, vitendo na hatua ya AI",
        objective: "O4",
        notYet: "Automation haiendeshwi na kichochezi chake, au hatua ya AI haipo.",
        meets: "Kichochezi kinachofanya kazi, vitendo kwa mpangilio na hatua ya AI inayofupisha na kupanga ombi.",
        exceeds: "Inatumia kichujio au prompt iliyobanwa ya neno moja ili matokeo yafanane kila mara."
      },
      {
        name: "Ukaguzi wa mtu na kanuni za data",
        objective: "O3",
        notYet: "Majibu yanatumwa bila idhini, au data ya siri inapita katika hatua ya AI.",
        meets: "Mtu anaidhinisha rasimu ya jibu, na kanuni za data zinasema nini kisipite kamwe katika AI.",
        exceeds: "Inaandika kila zana iliyounganishwa inafanya nini na data."
      },
      {
        name: "Majaribio matano",
        objective: "O5",
        notYet: "Majaribio chini ya matano, data halisi ilitumika, au hitilafu hazikurekebishwa.",
        meets: "Maingizo matano ya majaribio ya kubuni, yakiwemo magumu, yameandikwa na imefaulu au imeshindwa na marekebisho.",
        exceeds: "Kila hitilafu ilijaribiwa tena na ikafaulu."
      },
      {
        name: "Mmiliki na maelekezo",
        objective: "O6",
        notYet: "Hakuna mmiliki aliyetajwa wala maelekezo.",
        meets: "Mmiliki aliyetajwa, tahadhari ya hitilafu na karatasi ya maelekezo ya ukurasa mmoja.",
        exceeds: "Karatasi inasema jinsi ya kuizima na itapitiwa lini."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Automation ambazo bado zinafanya kazi na zina mmiliki siku 60 baadaye (utafiti wa kufuatilia)",
      "Saa kwa wiki zinazookolewa katika kazi iliyofanywa kiotomatiki, kama shirika linavyoripoti",
      "Mashirika yanayoripoti kwamba automation haikutuma ujumbe usio sahihi wala kufichua data ya siri"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Google Forms na Sheets, au Microsoft Forms na Excel",
      "Zana ya automation isiyohitaji code kama Zapier, Power Automate au Make (kagua mipaka ya sasa ya mpango wa bure)",
      "Karatasi au hati kwa ramani ya mtiririko wa kazi, usanifu na daftari la majaribio",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa kujenga na kujaribu"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; jengeni mtiririko wa fomu kwenda sheet moja kwa moja kwenye skrini ya pamoja.",
      "Waombe wanafunzi wasanifu kwenye karatasi na wapate maoni ya mwenzao kabla ya kufungua zana yoyote.",
      "Tumieni maingizo ya mfano ya kubuni tu kwa majaribio; kamwe data halisi ya wateja, wateja wa huduma au wafadhili.",
      "Hakikisha kila automation inayotuma ujumbe kwa watu ina hatua ya idhini ya mtu.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
