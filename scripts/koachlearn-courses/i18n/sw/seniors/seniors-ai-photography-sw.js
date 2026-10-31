"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-photography.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-photography-sw",
  lang: "sw",
  translationOf: "seniors-ai-photography",
  category: "Seniors and Technology",
  name: "AI kwa Upigaji Picha",
  skills: "Kupiga picha wazi kwa simu, Kutumia uboreshaji wa kiotomatiki na uhariri, Kuondoa vitu vidogo visivyotakiwa kwa zana za AI, Kupata picha kwa kutafuta, Kutengeneza albamu ya kushiriki na familia",
  outcome: "kupiga picha wazi kwa simu yako, kuiboresha kwa zana za uhariri za kiotomatiki na za AI, kupata picha za zamani kwa kutafuta, na kushiriki albamu ndogo na familia yako.",
  about: [
    "Kozi hii ni kwa wazee wanaopenda kupiga picha za wajukuu, bustani, wanyama wa nyumbani, safari na mikusanyiko ya familia, na wanataka picha hizo zionekane vizuri bila kujifunza kamera ngumu.",
    "Kamera ya simu yako na app ya picha tayari zina vipengele vya AI: uboreshaji wa kiotomatiki, zana zinazoondoa vitu vidogo visivyotakiwa, na utafutaji unaoweza kupata \"mbwa\" au \"ufukwe\" kati ya maelfu ya picha. Utajifunza kuvitumia, na pia wakati wa kusema ukweli kuhusu picha zilizohaririwa.",
    "Kila somo linachukua kama dakika tano. Kaa na simu au tableti yako, na ufanye mazoezi kwa picha zako mwenyewe. Jaribio fupi la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Piga picha tatu za kitu unachokipenda (mtu kwa ruhusa yake, mnyama wa nyumbani, mmea au mlo). Boresha iliyo bora zaidi kwa uboreshaji wa kiotomatiki na uhariri mwingine mmoja, tafuta picha mbili za zamani kwenye app yako ya picha, na ushiriki zote tatu katika albamu ndogo au ujumbe kwa mwanafamilia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee wanaopenda kupiga na kushiriki picha za wajukuu, wanyama wa nyumbani, bustani, milo na safari, na ambao mara nyingi wana masanduku ya picha za zamani za familia zilizochapishwa.",
    startingPoint: "Wanaweza kupiga picha kwa kamera ya simu. Wengi wanaona picha zao hazieleweki au zina giza, hawajawahi kufungua skrini ya Edit (Hariri), wanapitia picha kwa muda mrefu kutafuta za zamani, na hawana uhakika jinsi ya kushiriki albamu.",
    gap: "Picha ni mojawapo ya njia kuu za familia kubaki karibu. Picha wazi, uhariri rahisi wa AI, utafutaji wa haraka, albamu za pamoja na nakala za kidijitali za picha za zamani zilizochapishwa zinawasaidia wazee kushiriki na kutunza kumbukumbu, huku kuomba ruhusa na kusema ukweli kuhusu uhariri wa AI kukidumisha uaminifu katika familia.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: simu janja yenye kamera; apps za picha na zana za AI zinatofautiana kwa kila simu, na baadhi ya simu hazina kifutio cha AI",
      "Muda: kama dakika 5 kwa kila somo kwa mwendo wa taratibu, pamoja na mazoezi",
      "Ruhusa: waombe watu, na wazazi wa watoto, kabla ya kushiriki picha zao",
      "Ukweli: picha zilizohaririwa kwa AI na zilizotiwa rangi zinawekewa alama, na picha asili zinatunzwa"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia kamera ya simu yako", action: "kupiga picha wazi yenye mwanga mzuri kwa kusafisha lenzi, kushika simu bila kutikisika, kutumia mwanga mzuri na kugusa skrini ili kulenga", standard: "ukibakiza iliyo bora kati ya picha kadhaa" },
    { id: "O2", condition: "Ukipewa picha kwenye simu yako", action: "kuiboresha kwa uboreshaji wa kiotomatiki, kukata pembe na kunyoosha", standard: "na kurudisha hali ya awali kwa Revert ukibadili nia" },
    { id: "O3", condition: "Ukipewa picha yenye kitu kidogo kisichotakiwa", action: "kukiondoa kwa zana ya kifutio cha AI na kusema ukweli kuhusu jinsi picha ilivyohaririwa", standard: "bila kubadilisha kilichotokea kweli kwa njia ya kupotosha" },
    { id: "O4", condition: "Ukipewa maktaba ya picha yenye picha nyingi", action: "kupata picha kwa kutafuta kitu, mahali au tarehe, na kuweka alama ya vipendwa", standard: "ukipata picha mbili za zamani bila kupitia moja moja" },
    { id: "O5", condition: "Ukipewa picha kadhaa za kushiriki", action: "kutengeneza albamu au ujumbe na kuushiriki na mwanafamilia", standard: "baada ya kuomba ruhusa kwa picha za watu wengine" },
    { id: "O6", condition: "Ukipewa picha ya zamani iliyochapishwa", action: "kutengeneza nakala ya kidijitali na kuiboresha, ukiweka alama kwenye nakala yoyote iliyotiwa rangi na AI", standard: "ikiwa na pembe zilizonyooka, mng'ao kidogo na picha asili ikitunzwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupiga na kuboresha picha",
      lessons: [
        {
          objectives: ["O1","O5"],
          title: "Kupiga picha wazi kwa simu yako",
          minutes: 5,
          goal: "Piga picha wazi yenye mwanga mzuri kwa simu yako.",
          text: [
            "Picha nzuri zinaanza na tabia chache rahisi. Futa lenzi ya kamera taratibu kwa kitambaa laini; alama za vidole hufanya picha zisieleweke. Shika simu kwa mikono miwili na weka viwiko karibu na mwili wako ili picha zisitikisike.",
            "Mwanga ndio muhimu zaidi. Mgeuze unayempiga picha aelekee dirisha au mwanga wa mchana, mwanga ukiwa nyuma yako, si nyuma yake. Gusa skrini kwenye uso wa mtu au ua unalotaka liwe wazi; kamera inalenga hapo.",
            "Sogea karibu, na ujaze picha kwa kile kilicho muhimu. Piga picha kadhaa badala ya moja; unaweza kubakiza iliyo bora na kufuta nyingine. Daima waombe watu ruhusa, hasa wazazi wa wajukuu, kabla ya kushiriki picha zao."
          ],
          steps: ["Futa lenzi kwa kitambaa laini.", "Shika simu kwa mikono miwili.", "Weka mwanga nyuma yako, ukimwangazia unayempiga picha.", "Gusa skrini mahali unapotaka pawe wazi.", "Piga picha kadhaa na ubakize iliyo bora."],
          words: [["Lenzi", "kioo kidogo cha duara nyuma ya simu ambacho kamera huonea kupitia kwake."], ["Kulenga (focus)", "kufanya sehemu ya picha iwe wazi na safi."]],
          slides: [
            { title: "Kabla ya kupiga picha", bullets: ["Futa lenzi taratibu", "Shika kwa mikono miwili, viwiko karibu"] },
            { title: "Mwanga na kulenga", bullets: ["Mwanga nyuma yako, ukimwangazia mtu", "Gusa skrini ili kulenga"] },
            { title: "Pata picha bora", bullets: ["Sogea karibu", "Piga kadhaa, bakiza iliyo bora", "Omba ruhusa kabla ya kushiriki picha za watu"] }
          ],
          tryIt: "Futa lenzi yako, kisha piga picha tatu za ua, mnyama wa nyumbani au kitu kilicho karibu na dirisha. Gusa ili kulenga kwa kila moja. Ziangalie na uchague unayoipenda zaidi.",
          youCanNow: "kupiga picha wazi yenye mwanga mzuri kwa simu yako.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini uguse skrini kwenye uso kabla ya kupiga picha?", options: ["Inapunguza ukubwa wa picha", "Inafanya kamera ilenge sehemu hiyo", "Inafuta picha", "Inawasha mwanga wa flash"], answer: 1, why: "Kugusa skrini kunaiambia kamera ilenge wapi ili sehemu hiyo iwe wazi." },
            { objective: "O1", q: "Unampiga picha rafiki yako ndani ya nyumba. Unasimama wapi?", options: ["Dirisha likiwa nyuma ya rafiki yako", "Kwenye kona yenye giza", "Dirisha likiwa nyuma yako, ili mwanga umwangukie rafiki yako", "Mbali, upande wa pili wa chumba"], answer: 2, why: "Mwanga unapaswa kumwangazia unayempiga picha, ukiwa nyuma yako, si nyuma yake." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Uboreshaji wa kiotomatiki na uhariri rahisi",
          minutes: 5,
          goal: "Boresha picha kwa uboreshaji wa mguso mmoja, kukata pembe na kunyoosha.",
          text: [
            "App yako ya picha ina kitufe cha Edit (Hariri). Fungua picha na uguse Edit. Apps nyingi zina kitufe cha kiotomatiki cha mguso mmoja, mara nyingi chenye picha ya fimbo ya uchawi, kinachotumia AI kurekebisha mwangaza, rangi na utofauti kwa sekunde moja.",
            "Kisha, kata pembe (crop) ili kuondoa nafasi tupu, na unyooshe mstari wa upeo ulioinama. Tafuta zana ya kukata (mara nyingi ni mraba wenye mishale), vuta pembe kuelekea ndani, na zungusha kidogo ikihitajika.",
            "Kwa kawaida uhariri hauharibu picha yako asili. Apps nyingi zinakuruhusu kurudi nyuma kwa Revert au Undo. Gusa Done au Save ukiridhika."
          ],
          steps: ["Fungua picha na uguse Edit.", "Gusa kitufe cha kiotomatiki au cha fimbo ya uchawi.", "Tumia zana ya kukata ili kuondoa nafasi tupu.", "Nyoosha ikiwa picha imeinama.", "Gusa Done au Save; tumia Revert ukibadili nia."],
          words: [["Kuboresha (enhance)", "kuboresha mwangaza na rangi ya picha kiotomatiki."], ["Kukata (crop)", "kuondoa kingo za picha."]],
          slides: [
            { title: "Mguso mmoja kwa picha bora", bullets: ["Fungua picha, gusa Edit", "Gusa kitufe cha kiotomatiki au fimbo ya uchawi"] },
            { title: "Kata na nyoosha", bullets: ["Ondoa nafasi tupu", "Nyoosha upeo ulioinama"] },
            { title: "Hakuna madhara", bullets: ["Apps nyingi zinatunza picha asili", "Tumia Revert au Undo", "Gusa Done au Save"] }
          ],
          tryIt: "Fungua picha uliyoipenda zaidi kutoka Somo la 1. Tumia uboreshaji wa kiotomatiki, ikate kidogo, na uihifadhi. Kisha ilinganishe na picha asili.",
          youCanNow: "kuboresha picha kwa uboreshaji wa kiotomatiki, kukata pembe na kunyoosha.",
          quickCheck: [
            { objective: "O2", q: "Kukata (crop) picha kunafanya nini?", options: ["Kunaondoa kingo na nafasi tupu", "Kunafanya rangi ziwe angavu zaidi", "Kunashiriki picha", "Kunafuta picha"], answer: 0, why: "Kukata kunaondoa nafasi tupu ili picha ijae kile kilicho muhimu." },
            { objective: "O2", q: "Umehariri picha na sasa inaonekana mbaya zaidi. Unafanya nini?", options: ["Unafuta picha", "Unapiga picha ya skrini", "Unahariri zaidi", "Unagusa Revert au Undo ili kurudi nyuma"], answer: 3, why: "Kwa kawaida uhariri hauharibu picha asili; Revert au Undo inairudisha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zana za AI zinazoondoa vitu visivyotakiwa",
          minutes: 5,
          goal: "Ondoa kitu kidogo kisichotakiwa kwenye picha kwa kifutio cha AI, na ujue wakati wa kusema ukweli kuhusu uhariri.",
          text: [
            "Simu nyingi mpya na apps za picha zina kifutio cha AI: unazungushia duara au unapaka juu ya kitu kidogo usichokitaka, kama pipa la taka, mtu usiyemjua nyuma au waya wa umeme, na AI inajaza nafasi hiyo.",
            "Tafuta kwenye skrini ya Edit zana yenye jina kama Magic Eraser, Clean Up au Object Eraser. Majina yanatofautiana kwa kila simu, na baadhi ya simu hazina zana hii. Kama yako haina, muulize msaidizi wa AI: \"Ninaondoaje kitu kwenye picha kwenye simu yangu?\" na umwambie aina ya simu yako.",
            "Kusafisha vitu vidogo ni sawa kwa picha za familia. Lakini usitumie AI kubadilisha kilichotokea kweli kwenye picha kwa njia inayoweza kuwapotosha watu, na sema ukweli mtu akiuliza kama picha ilihaririwa."
          ],
          steps: ["Fungua picha na uguse Edit.", "Tafuta zana ya kifutio au ya kusafisha.", "Paka au zungushia duara kitu kidogo kisichotakiwa.", "Angalia matokeo na uhifadhi, au urudishe.", "Sema ukweli kuhusu picha zilizohaririwa."],
          words: [["Kifutio cha AI", "zana inayoondoa kitu kwenye picha na kujaza mandhari ya nyuma."], ["Kupotosha", "kumfanya mtu aamini jambo ambalo si kweli."]],
          slides: [
            { title: "Futa vitu vidogo visivyotakiwa", bullets: ["Mapipa ya taka, watu usiowajua, waya wa umeme", "Vipake au vizungushie duara", "AI inajaza nafasi"] },
            { title: "Tafuta zana", bullets: ["Majina yanatofautiana kwa kila simu", "Tafuta kwenye Edit zana ya kifutio au kusafisha", "Uliza AI ukitaja aina ya simu yako"] },
            { title: "Sema ukweli", bullets: ["Kusafisha vitu vidogo ni sawa", "Usibadilishe kilichotokea kweli", "Sema kama picha ilihaririwa"] }
          ],
          tryIt: "Tafuta picha yenye kitu kidogo kisichotakiwa. Tafuta kwenye Edit zana ya kifutio au ya kusafisha na ujaribu kukiondoa. Kama simu yako haina zana hiyo, muulize msaidizi wa AI jinsi ya kufanya hivyo kwenye aina ya simu yako.",
          youCanNow: "kutumia zana ya kifutio cha AI kusafisha picha, na kuitumia kwa ukweli.",
          quickCheck: [
            { objective: "O3", q: "Kifutio cha AI kinafanya nini?", options: ["Kinafuta picha nzima", "Kinaondoa kitu kidogo unachopaka juu yake na kujaza nafasi", "Kinaongeza watu kwenye picha", "Kinafanya picha iwe nyeusi na nyeupe"], answer: 1, why: "Unapaka au unazungushia duara kitu kidogo kisichotakiwa na AI inajaza nafasi." },
            { objective: "O3", q: "Mjukuu wako anauliza kama ulihariri picha ya ufukweni. Uliondoa pipa la taka. Unasema nini?", options: ["Unasema hapana, haijawahi kuhaririwa", "Unabadilisha mada", "Unafuta picha", "Unasema ukweli kwamba uliondoa pipa la taka"], answer: 3, why: "Kusafisha vitu vidogo ni sawa, lakini sema ukweli mtu akiuliza kama picha ilihaririwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupiga na kuboresha picha",
        questions: [
          { objective: "O1", q: "Picha zako hazieleweki. Ni jambo gani rahisi la kujaribu kwanza?", options: ["Kutikisa simu", "Kununua simu mpya", "Kufuta lenzi kwa kitambaa laini", "Kuzima skrini"], answer: 2, why: "Alama za vidole kwenye lenzi hufanya picha zisieleweke." },
          { objective: "O1", q: "Mwanga unapaswa kuwa wapi kwa picha nzuri ya mtu?", options: ["Ukimwangazia mtu, ukiwa nyuma yako", "Nyuma ya mtu", "Popote", "Chini ya meza"], answer: 0, why: "Mwanga kwenye uso unauonyesha vizuri." },
          { objective: "O1", q: "Kugusa skrini kabla ya kupiga picha kunafanya nini?", options: ["Kunatuma picha", "Kunafuta picha", "Kunawasha muziki", "Kunalenga sehemu hiyo"], answer: 3, why: "Kugusa kunaiambia kamera ilenge wapi." },
          { objective: "O2", q: "Kitufe cha fimbo ya uchawi au cha kiotomatiki kwa kawaida kinafanya nini?", options: ["Kinafuta picha", "Kinarekebisha mwangaza na rangi kwa mguso mmoja", "Kinaishiriki hadharani", "Kinaichapisha"], answer: 1, why: "Ni uboreshaji wa AI wa mguso mmoja." },
          { objective: "O3", q: "Ni wakati gani SI sawa kutumia kifutio cha AI?", options: ["Kuondoa pipa la taka", "Kubadilisha kilichotokea kweli kwa njia ya kupotosha", "Kuondoa waya wa umeme", "Kusafisha picha ya familia"], answer: 1, why: "Uhariri haupaswi kuwapotosha watu." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata, kupanga na kushiriki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupata picha kwa kutafuta",
          minutes: 5,
          goal: "Pata picha za zamani kwa kuandika neno kwenye sehemu ya kutafuta ya app yako ya picha.",
          text: [
            "Ukiwa na maelfu ya picha, kuzipitia moja moja kunachosha. Apps za picha kama Apple Photos na Google Photos zinatumia AI kutambua kilicho kwenye picha zako, kwa hiyo unaweza kutafuta \"mbwa\", \"ufukwe\", \"keki ya siku ya kuzaliwa\" au \"theluji\".",
            "Fungua app yako ya picha, gusa Search (mara nyingi ni kioo cha kukuza), na uandike neno. Unaweza pia kutafuta kwa mahali (\"Florida\") au kwa mwezi na mwaka (\"July 2019\"). Apps nyingi zinaweza kuweka pamoja picha za uso mmoja ili uwape watu majina; hili ni hiari, na unaweza kulizima kwenye mipangilio (settings).",
            "Tumia vipendwa (favorites) kuweka picha zako bora pamoja: gusa moyo kwenye picha, kisha utapata vipendwa vyote katika albamu moja."
          ],
          steps: ["Fungua app yako ya picha.", "Gusa Search au kioo cha kukuza.", "Andika kitu, mahali au tarehe.", "Gusa moyo kwenye picha unazozipenda ili ziwe vipendwa."],
          words: [["Albamu", "kundi la picha zilizowekwa pamoja, kama ukurasa katika kitabu cha picha."], ["Vipendwa (favorites)", "picha unazowekea alama ya moyo ili uzipate haraka."]],
          slides: [
            { title: "Acha AI ikutafutie picha zako", bullets: ["Tafuta \"mbwa\", \"ufukwe\", \"keki ya siku ya kuzaliwa\"", "Au mahali, au mwezi na mwaka"] },
            { title: "Jinsi ya kutafuta", bullets: ["Fungua app yako ya picha", "Gusa kioo cha kukuza", "Andika neno"] },
            { title: "Tunza picha zako bora", bullets: ["Gusa moyo kwa vipendwa", "Kuweka nyuso pamoja ni hiari"] }
          ],
          tryIt: "Tafuta vitu viwili kwenye app yako ya picha, kama \"ua\" na mahali ulipotembelea. Weka picha moja kutoka kila utafutaji kuwa kipendwa.",
          youCanNow: "kupata picha za zamani kwa kutafuta na kutunza zilizo bora kama vipendwa.",
          quickCheck: [
            { objective: "O4", q: "App ya picha inawezaje kupata picha zako zote za theluji?", options: ["AI inatambua kilicho kwenye picha zako, kwa hiyo unaweza kutafuta \"theluji\"", "Inauliza familia yako", "Inasoma majina ya faili uliyoandika", "Haiwezi; lazima uzipitie moja moja"], answer: 0, why: "Apps za picha zinatumia AI kutambua vitu kwenye picha ili utafute kwa neno." },
            { objective: "O4", q: "Unataka kupata picha za safari yako ya July 2019. Unaandika nini kwenye Search?", options: ["\"Picha\"", "\"July 2019\"", "\"Kamera\"", "Hakuna; unazipitia moja moja"], answer: 1, why: "Unaweza kutafuta kwa mwezi na mwaka, kwa mahali au kwa kitu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza na kushiriki albamu",
          minutes: 6,
          goal: "Tengeneza albamu na uishiriki na familia.",
          text: [
            "Albamu ni mkusanyiko wa picha za mada moja, kama \"Kiangazi ziwani\" au \"Mwaka wa kwanza wa Emma\". Kuitengeneza ni njia nzuri ya kushiriki kumbukumbu.",
            "Katika apps nyingi za picha: chagua picha kadhaa kwa kugusa Select kisha kila picha, gusa kitufe cha Share au alama ya kujumlisha (+), na uchague kuziweka katika albamu mpya au albamu ya pamoja. Ipe jina. Albamu ya pamoja inawaruhusu wanafamilia unaowaalika kuona picha, na mara nyingi kuongeza zao.",
            "Unaweza pia kutuma tu picha chache kwa ujumbe mfupi au barua pepe. Kabla ya kushiriki picha za wajukuu, waulize wazazi wao kama ni sawa na kwa watu wangapi uzishiriki."
          ],
          steps: ["Gusa Select na uchague picha kadhaa.", "Gusa Share au alama ya +.", "Chagua albamu mpya au albamu ya pamoja na uipe jina.", "Waalike wanafamilia kwa jina, namba ya simu au barua pepe.", "Waulize wazazi kabla ya kushiriki picha za watoto."],
          words: [["Albamu ya pamoja", "albamu ambayo watu unaowaalika wanaweza kuiona na mara nyingi kuongeza picha."], ["Kuchagua (select)", "kuchagua vitu kadhaa kwa wakati mmoja."]],
          slides: [
            { title: "Albamu inasimulia hadithi", bullets: ["\"Kiangazi ziwani\"", "\"Mwaka wa kwanza wa Emma\""] },
            { title: "Tengeneza moja", bullets: ["Gusa Select, chagua picha", "Gusa Share au +", "Albamu mpya au ya pamoja, kisha ipe jina"] },
            { title: "Shiriki kwa upendo", bullets: ["Waalike wanafamilia", "Au tuma chache kwa ujumbe au barua pepe", "Waulize wazazi kabla ya kushiriki picha za watoto"] }
          ],
          tryIt: "Tengeneza albamu ya picha tano unazozipenda yenye jina lililo wazi. Ishiriki, au tuma picha mbili kati yake, kwa mwanafamilia mmoja.",
          youCanNow: "kutengeneza albamu ya picha na kuishiriki na familia.",
          quickCheck: [
            { objective: "O5", q: "Albamu ya pamoja ni nini?", options: ["Kitabu cha picha cha karatasi", "Picha unazoziona wewe peke yako", "Albamu ambayo wanafamilia unaowaalika wanaweza kuiona na mara nyingi kuongeza picha", "Orodha ya vipendwa"], answer: 2, why: "Albamu ya pamoja inawaruhusu watu unaowaalika kuona picha, na mara nyingi kuongeza zao." },
            { objective: "O5", q: "Unataka kushiriki picha za mjukuu wako wa kike katika albamu ya familia. Unafanya nini kwanza?", options: ["Unawauliza wazazi wake kama ni sawa na kwa watu wangapi uzishiriki", "Unaziweka hadharani", "Unazishiriki na kila mtu kwenye orodha yako ya mawasiliano", "Unaondoa uso wake kwa uhariri"], answer: 0, why: "Waulize wazazi kabla ya kushiriki picha za watoto." }
          ]
        },
        {
          objectives: ["O6","O2"],
          title: "Kuingiza picha za zamani zilizochapishwa kwenye simu",
          minutes: 5,
          goal: "Geuza picha ya zamani iliyochapishwa kuwa nakala ya kidijitali na uiboreshe.",
          text: [
            "Familia nyingi zina masanduku ya picha za zamani zilizochapishwa. Unaweza kutengeneza nakala za kidijitali za kushiriki na kutunza salama, ukitumia simu yako peke yake.",
            "Laza picha juu ya kitu tambarare karibu na dirisha, mbali na jua la moja kwa moja, na uipige picha moja kwa moja kutoka juu ili kingo zionekane zimenyooka. Apps za bure za kuskani, kama PhotoScan ya Google, zimetengenezwa kwa kazi hii na zinapunguza mng'ao. Kisha tumia uboreshaji wa kiotomatiki na ukate, kama katika Somo la 2.",
            "Baadhi ya apps zinatumia AI kutia rangi au kukarabati picha za zamani. Hizi zinaweza kufurahisha, lakini rangi ni makisio ya AI, si kilichotokea kweli. Tunza pia nakala asili uliyoskani, na uweke alama kwenye nakala zilizotiwa rangi unapozishiriki. Unaweza kumwomba msaidizi wa AI akusaidie kuandika maelezo mafupi ya picha yenye majina na mwaka."
          ],
          steps: ["Laza picha iliyochapishwa juu ya kitu tambarare katika mwanga laini wa mchana.", "Shika simu moja kwa moja juu yake.", "Piga picha, au tumia app ya kuskani ili kupunguza mng'ao.", "Boresha na ukate.", "Tunza picha asili; weka alama kwenye nakala yoyote iliyotiwa rangi na AI."],
          words: [["Kuskani (scan)", "kutengeneza nakala ya kidijitali ya picha ya karatasi au hati."], ["Mng'ao (glare)", "mwanga mkali kwenye picha unaotokana na mwanga unaoakisiwa juu yake."], ["Kutia rangi (colorize)", "kuongeza rangi kwenye picha nyeusi na nyeupe."]],
          slides: [
            { title: "Hifadhi picha zako za zamani", bullets: ["Tengeneza nakala za kidijitali za kushiriki na kutunza salama"] },
            { title: "Jinsi ya kunakili", bullets: ["Juu ya kitu tambarare, katika mwanga laini wa mchana", "Simu moja kwa moja juu", "App ya kuskani inapunguza mng'ao"] },
            { title: "Kutia rangi kwa AI", bullets: ["Rangi ni makisio", "Tunza nakala asili uliyoskani", "Weka alama kwenye nakala zilizotiwa rangi"] }
          ],
          tryIt: "Kazi ya mwisho: piga picha tatu mpya za kitu unachokipenda, boresha iliyo bora kwa uboreshaji na uhariri mwingine mmoja, tafuta picha mbili za zamani, na ushiriki zote tatu katika albamu ndogo au ujumbe kwa familia. Ukiwa na picha ya zamani iliyochapishwa, ongeza nakala yake uliyoskani pia.",
          youCanNow: "kupiga, kuboresha, kupata, kupanga na kushiriki picha, pamoja na nakala za picha za zamani za familia zilizochapishwa.",
          quickCheck: [
            { objective: "O6", q: "Mng'ao kwenye picha ya picha iliyochapishwa ni nini?", options: ["Uso usioeleweka", "Mwanga mkali kutoka kwa mwanga unaoangukia picha", "Alama ya kukata", "Pembe iliyokosekana"], answer: 1, why: "Mng'ao ni mwanga mkali; apps za kuskani kama PhotoScan zinasaidia kuupunguza." },
            { objective: "O6", q: "App imetia rangi picha ya harusi ya wazazi wako. Unaishirikije?", options: ["Unasema ilikuwa na rangi tangu mwanzo", "Unafuta picha asili nyeusi na nyeupe", "Unaiwekea alama kuwa imetiwa rangi na unatunza nakala asili uliyoskani", "Humwambii mtu yeyote"], answer: 2, why: "Rangi za AI ni makisio, kwa hiyo weka alama kwenye nakala zilizotiwa rangi na utunze picha asili." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata, kupanga na kushiriki",
        questions: [
          { objective: "O4", q: "Unapataje picha zako zote za ufukweni haraka?", options: ["Kumuuliza mtu usiyemjua", "Kuzipitia moja moja kwa saa nzima", "Kufuta picha nyingine", "Kutafuta \"ufukwe\" kwenye app yako ya picha"], answer: 3, why: "Utafutaji wa AI unatambua kilicho kwenye picha." },
          { objective: "O4", q: "Kugusa moyo kwenye picha kunafanya nini?", options: ["Kunaiweka kuwa kipendwa", "Kunaifuta", "Kunaiweka hadharani", "Kunaichapisha"], answer: 0, why: "Vipendwa vinawekwa pamoja ili vipatikane kwa urahisi." },
          { objective: "O5", q: "Albamu ya pamoja ni nini?", options: ["Kitabu cha karatasi", "Albamu iliyofutwa", "Albamu ambayo watu unaowaalika wanaweza kuiona", "Orodha ya nywila"], answer: 2, why: "Albamu za pamoja zinairuhusu familia kuona na kuongeza picha." },
          { objective: "O5", q: "Kabla ya kushiriki picha za wajukuu, unapaswa:", options: ["Kutofanya chochote", "Kuziweka kila mahali", "Kuzichapisha kwa ajili ya watu usiowajua", "Kuwauliza wazazi wao"], answer: 3, why: "Wazazi ndio wanaoamua picha za watoto wao zishirikiwe kwa watu wangapi." },
          { objective: "O6", q: "App ya AI inatia rangi picha ya zamani nyeusi na nyeupe. Rangi hizo ni:", options: ["Zimetoka kwenye filamu asili", "Kile kilichotokea hasa", "Makisio ya AI", "Sahihi daima"], answer: 2, why: "Kutia rangi ni makisio; tunza picha asili na uweke alama." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Upigaji Picha",
    questions: [
      { objective: "O1", q: "Lenzi ni:", options: ["Skrini", "Kioo kidogo ambacho kamera huonea kupitia kwake", "Betri", "Chaja"], answer: 1, why: "Lenzi ndiyo inayopokea picha." },
      { objective: "O1", q: "Ili picha zisitikisike, shika simu:", options: ["Kwa mikono miwili, viwiko karibu", "Kwa kidole kimoja", "Juu ya kichwa chako", "Juu chini"], answer: 0, why: "Mikono miwili inaishika simu bila kutikisika." },
      { objective: "O1", q: "Kwa picha ya mtu, mwanga unapaswa kuwa:", options: ["Kwenye uso wa mtu", "Nyuma ya mtu", "Umezimwa", "Chini ya mtu"], answer: 0, why: "Mwanga kwenye uso unauonyesha vizuri." },
      { objective: "O1", q: "Kupiga picha kadhaa kunasaidia kwa sababu:", options: ["Simu zinahitaji mazoezi", "Unaweza kubakiza iliyo bora", "Kunaokoa betri", "Kunafuta picha za zamani"], answer: 1, why: "Picha nyingi, nafasi nyingi za kupata picha nzuri sana." },
      { objective: "O2", q: "Ili kuanza kuhariri picha, gusa:", options: ["Share", "Delete", "Edit", "Settings"], answer: 2, why: "Edit inafungua zana za kuhariri." },
      { objective: "O2", q: "\"Kukata\" (crop) maana yake ni:", options: ["Kufuta", "Kuongeza rangi", "Kushiriki", "Kuondoa kingo"], answer: 3, why: "Kukata kunapunguza ukubwa wa picha." },
      { objective: "O2", q: "Usipopenda uhariri wako, kwa kawaida unaweza:", options: ["Kununua picha asili", "Kutorudi nyuma kamwe", "Kutumia Revert au Undo", "Kuzima na kuwasha simu upya"], answer: 2, why: "Apps nyingi zinatunza picha asili." },
      { objective: "O3", q: "Kifutio cha AI kinatumika:", options: ["Kuondoa kitu kidogo kisichotakiwa kwenye picha", "Kufuta maktaba yako yote", "Kuchapisha picha", "Kuipigia familia simu"], answer: 0, why: "Kinaondoa vitu na kujaza nafasi." },
      { objective: "O3", q: "Inaonekana simu yako haina kifutio cha AI. Hatua nzuri ni:", options: ["Kufuta app ya picha", "Kuacha kupiga picha", "Kutoa nywila yako", "Kumuuliza msaidizi wa AI jinsi ya kufanya hivyo kwenye aina ya simu yako"], answer: 3, why: "Majina ya zana yanatofautiana; AI inaweza kukuongoza." },
      { objective: "O3", q: "Kutumia AI kubadilisha kilichotokea kweli kwenye picha ili kuwadanganya watu ni:", options: ["Sawa daima", "Kupotosha, na kunapaswa kuepukwa", "Lazima", "Kipengele cha usalama"], answer: 1, why: "Uhariri haupaswi kupotosha." },
      { objective: "O4", q: "Utafutaji wa app ya picha unaweza kupata picha kwa:", options: ["Namba za faili tu", "Vitu, mahali na tarehe", "Rangi tu", "Hakuna kitu"], answer: 1, why: "AI inatambua yaliyomo, mahali na tarehe." },
      { objective: "O4", q: "Kuweka nyuso pamoja katika app ya picha ni:", options: ["Nywila", "Lazima", "Virusi", "Hiari, na kunaweza kuzimwa"], answer: 3, why: "Unaweza kuchagua kama utakitumia." },
      { objective: "O5", q: "Albamu ni:", options: ["Kundi la picha zilizowekwa pamoja", "Picha moja", "Kamera", "Kichujio (filter)"], answer: 0, why: "Albamu zinakusanya picha zinazohusiana." },
      { objective: "O5", q: "Ili kuchagua picha kadhaa kwa wakati mmoja, gusa:", options: ["Camera", "Delete", "Select", "Settings"], answer: 2, why: "Select inakuruhusu kuchagua picha nyingi." },
      { objective: "O5", q: "Njia rahisi ya kushiriki picha chache ni:", options: ["Kuziweka kwenye ukurasa wa mtu usiyemjua", "Kutuma simu kwa posta", "Kuzichapisha na kuzituma kwa faksi", "Kuzituma kwa ujumbe mfupi au barua pepe"], answer: 3, why: "Ujumbe mfupi na barua pepe zinashiriki kwa urahisi." },
      { objective: "O6", q: "Ili kunakili picha ya zamani iliyochapishwa, shika simu:", options: ["Nyuma ya picha", "Ikiwa imeinama sana", "Moja kwa moja juu ya picha", "Mbali, upande wa pili wa chumba"], answer: 2, why: "Moja kwa moja juu kunafanya kingo zibaki zimenyooka." },
      { objective: "O6", q: "Mng'ao ni:", options: ["Aina ya albamu", "Mwanga mkali kutoka kwa mwanga unaoangukia picha", "Kichujio (filter)", "Nywila"], answer: 1, why: "Mng'ao unaficha sehemu za picha." },
      { objective: "O6", q: "Apps za kuskani kama PhotoScan ya Google zinasaidia kwa:", options: ["Kupunguza mng'ao", "Kuongeza nywila", "Kufuta picha zilizochapishwa", "Kupiga simu"], answer: 0, why: "Zimetengenezwa kunakili picha zilizochapishwa vizuri." },
      { objective: "O6", q: "Unaposhiriki picha iliyotiwa rangi na AI, unapaswa:", options: ["Kuiwekea alama kuwa imetiwa rangi na kutunza picha asili", "Kusema ndiyo picha asili", "Kufuta picha asili", "Kuificha"], answer: 0, why: "Rangi ni makisio; ukweli ni muhimu." },
      { objective: "O6", q: "AI inaweza kusaidia na maelezo mafupi ya picha ya zamani kwa:", options: ["Kujua walio kwenye picha", "Kusaidia kuyaandika baada ya wewe kutoa majina na mwaka", "Kutafuta anwani zao", "Kubashiri siku zao za kuzaliwa kwa usahihi"], answer: 1, why: "Wewe unatoa ukweli; AI inasaidia na maneno." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      4,
      7,
      9,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Picha wazi",
        objective: "O1",
        notYet: "Picha hazieleweki au zina giza, au mtu alipigwa picha bila kuombwa ruhusa.",
        meets: "Picha tatu wazi zenye mwanga mzuri, kwa ruhusa ya mtu yeyote aliye ndani yake.",
        exceeds: "Kinachopigwa picha kinajaza picha, na picha bora ilichaguliwa kati ya kadhaa."
      },
      {
        name: "Picha imeboreshwa",
        objective: "O2",
        notYet: "Hakuna uhariri, au uhariri ulifanya picha iwe mbaya zaidi.",
        meets: "Picha bora iliboreshwa kwa uboreshaji wa kiotomatiki na uhariri mwingine mmoja, kama kukata.",
        exceeds: "Anaweza kuonyesha jinsi ya kurudisha uhariri (Revert) na kueleza kwa nini aliuchagua."
      },
      {
        name: "Picha za zamani zimepatikana",
        objective: "O4",
        notYet: "Alipata picha kwa kuzipitia moja moja kwa muda mrefu tu, au hakuzipata kabisa.",
        meets: "Alipata picha mbili za zamani kwa kutumia Search na kitu, mahali au tarehe.",
        exceeds: "Aliweka vipendwa ili zipatikane kwa urahisi tena."
      },
      {
        name: "Zimeshirikiwa na familia",
        objective: "O5",
        notYet: "Picha hazikushirikiwa, au zilishirikiwa bila ruhusa.",
        meets: "Picha zote tatu zilishirikiwa katika albamu ndogo au ujumbe kwa mwanafamilia.",
        exceeds: "Aliipa albamu jina lililo wazi na akaialika familia kuongeza picha."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoshiriki albamu ya picha na familia ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaogeuza picha za zamani za familia zilizochapishwa kuwa za kidijitali na kuzishiriki",
      "Wanafunzi wanaoanza kozi nyingine ya Seniors and Technology ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye kamera na app ya picha kama Apple Photos au Google Photos",
      "Kitambaa laini cha lenzi, na picha moja au mbili za zamani zilizochapishwa",
      "App ya bure ya kuskani kama PhotoScan ya Google (hiari)",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vya taratibu: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Panga wanafunzi kwa aina ya simu; zana za Edit na za kifutio zina majina tofauti kwenye simu tofauti.",
      "Waombe wanafunzi walete picha ya zamani iliyochapishwa ili wafanye mazoezi ya kutengeneza nakala ya kidijitali.",
      "Onyesha kwa mfano jinsi ya kuomba ruhusa kabla ya kupiga au kushiriki picha za watu wengine, hasa watoto.",
      "Zungumzeni kuhusu ukweli katika uhariri wa AI na picha zilizotiwa rangi, na kutunza picha asili.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
