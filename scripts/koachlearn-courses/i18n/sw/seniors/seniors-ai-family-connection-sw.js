"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-family-connection.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-family-connection-sw",
  lang: "sw",
  translationOf: "seniors-ai-family-connection",
  category: "Seniors and Technology",
  name: "AI kwa Mawasiliano na Kuungana na Familia",
  skills: "Kuandika ujumbe wa upendo kwa msaada wa AI, Kutuma ujumbe mfupi au barua pepe, Kujiunga na simu ya video, Kushiriki picha, Kuwa salama katika ujumbe wa familia",
  outcome: "kutumia msaidizi wa AI kukusaidia kuandika ujumbe wa upendo kwa mwanafamilia, kuutuma kwa ujumbe mfupi au barua pepe, na kupanga na kujiunga na simu ya video pamoja naye.",
  about: [
    "Kozi hii ni kwa ajili ya babu na bibi, wazazi, shangazi, wajomba na marafiki wanaotaka kubaki karibu na watu wanaowapenda, hata wanapoishi mbali.",
    "Utatumia msaidizi wa AI kukusaidia kupata maneno sahihi kwa siku ya kuzaliwa, ujumbe wa kumtakia mgonjwa apone, au salamu tu. Kisha utatuma ujumbe wako, utashiriki picha, na utajiunga na simu ya video ili uone nyuso za familia yako.",
    "Kila somo linachukua kama dakika tano na linaenda hatua moja kwa wakati. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Ni vizuri kufanya mazoezi na mwanafamilia ambaye tayari anatumia zana hizi. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Tumia msaidizi wa AI kukusaidia kuandika ujumbe mfupi wa upendo unaomkaribisha mwanafamilia kwenye simu ya video. Fanya badiliko moja ili usikike kama wewe, utume kwa ujumbe mfupi au barua pepe, kisha ujiunge na simu kwa wakati mliokubaliana na useme salamu.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee wanaotaka kubaki karibu na watoto, wajukuu na ndugu wengine wanaoishi mbali au walio na shughuli nyingi. Wengi wanajisikia kuachwa nje familia inapozungumza kwa ujumbe mfupi, video na picha.",
    startingPoint: "Wanaweza kupiga simu na huenda wanatuma ujumbe mfupi rahisi. Baadhi wana simu janja au tableti lakini hawajawahi kutumia msaidizi wa AI, kunakili na kubandika, kujiunga na simu ya video wala kushiriki picha.",
    gap: "Maisha ya familia sasa yanaendelea kwa ujumbe mfupi, simu ya video na kushiriki picha. Wazee wanaoweza kuandika ujumbe wa upendo kwa msaada wa AI, kuutuma, kujiunga na simu ya video na kushiriki picha wanabaki wameungana na hawajisikii upweke sana, na wale wanaoweza kutambua dharura bandia ya familia wanalinda akiba yao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: simu janja, tableti au kompyuta yenye kamera; vitufe vidogo vinaweza kuwa vigumu kugusa",
      "Muda: kama dakika 5 kwa kila somo kwa mwendo wa taratibu, pamoja na simu ya mazoezi na familia",
      "Wanafamilia wanatumia apps tofauti; wanafunzi wanatumia ile ambayo familia yao tayari inatumia",
      "Hatari kubwa ya ulaghai: usitume pesa wala misimbo kabla ya kupiga simu kwa familia kwenye namba unayoijua"
    ],
    prerequisites: "Ni vizuri kwanza kusoma kozi \"AI for Seniors: Using AI Assistants\" (AI kwa Wazee: Kutumia Wasaidizi wa AI), lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuomba rasimu ya ujumbe wa familia inayosema ni kwa nani, inahusu nini, sauti yake na urefu wake", standard: "ili rasimu ya kwanza imfae mtu huyo" },
    { id: "O2", condition: "Ukipewa rasimu ya AI", action: "kubadilisha rasimu ili isikike kama wewe na kuongeza jambo moja binafsi", standard: "ili isomeke kwa urahisi unapoisema kwa sauti" },
    { id: "O3", condition: "Ukipewa ujumbe uliokamilika ndani ya app ya AI", action: "kuunakili na kuubandika kwenye ujumbe mfupi au barua pepe, kisha kuutuma", standard: "kwa mtu sahihi, ukiwa umeukagua kabla ya kugusa Send (Tuma)" },
    { id: "O4", condition: "Ukipewa simu ya video au kiungo kutoka kwa mwanafamilia", action: "kujiunga na simu na kuwasha maikrofoni na kamera", standard: "uso wako ukionekana na sauti yako ikisikika vizuri" },
    { id: "O5", condition: "Ukitumia kamera ya simu au tableti yako", action: "kupiga picha na kuishiriki na mwanafamilia pamoja na maelezo mafupi", standard: "bila msaada" },
    { id: "O6", condition: "Ujumbe au simu inaposema mwanafamilia yuko matatani na anahitaji pesa", action: "kutambua dalili za hatari za ulaghai wa dharura ya familia na kuhakikisha kwa kupiga namba uliyonayo tayari", standard: "bila kutuma pesa wala misimbo kabla ya kuhakikisha" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata maneno sahihi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutumia AI kusaidia kuandika ujumbe wa familia",
          minutes: 5,
          goal: "Mwombe msaidizi wa AI aandike rasimu ya ujumbe mfupi kwa mwanafamilia.",
          text: [
            "Wakati mwingine sehemu ngumu zaidi ya kuwasiliana ni kujua nini cha kusema. Msaidizi wa AI kama ChatGPT, Microsoft Copilot au Google Gemini anaweza kukuandikia rasimu ya kwanza kwa sekunde chache.",
            "Mwambie ujumbe ni kwa nani, unahusu nini, na unataka usikike vipi. Kwa mfano: \"Andika ujumbe mfupi wa furaha kwa mjukuu wangu Leo, ambaye amemaliza wiki yake ya kwanza chuoni. Ninajivunia yeye. Usizidi maneno 40.\"",
            "Rasimu ni mwanzo tu, si neno la mwisho. Wewe unaijua familia yako; msaidizi haijui."
          ],
          steps: ["Fungua msaidizi wako wa AI.", "Sema ujumbe ni kwa nani na unahusu nini.", "Sema unavyotaka usikike: wa furaha, wa upole, wa kuchekesha au rahisi.", "Sema urefu wake."],
          words: [["Rasimu", "toleo la kwanza la ujumbe ambalo unaweza kulibadilisha kabla ya kulituma."], ["Sauti ya ujumbe", "jinsi ujumbe unavyosikika, kama wa upendo, wa kuchekesha au wa makini."]],
          slides: [
            { title: "Umekosa maneno?", bullets: ["Msaidizi wa AI anaweza kuandika rasimu ya kwanza", "Inachukua sekunde chache tu"] },
            { title: "Mwambie mambo manne", bullets: ["Ni kwa nani", "Unahusu nini", "Usikike vipi", "Uwe na urefu gani"] },
            { title: "Kumbuka", bullets: ["Rasimu ni mwanzo tu", "Wewe ndiye unayeijua familia yako zaidi"] }
          ],
          tryIt: "Fikiria mwanafamilia mmoja ambaye ungependa kusikia habari zake. Mwombe msaidizi akuandikie ujumbe mfupi wa upendo kwake kuhusu jambo halisi, kama siku ya kuzaliwa, kazi mpya au salamu tu.",
          youCanNow: "kumwomba msaidizi wa AI aandike rasimu ya ujumbe mfupi kwa mtu unayempenda.",
          quickCheck: [
            { objective: "O1", q: "Rasimu ya ujumbe kutoka AI ni nini?", options: ["Ujumbe wa mwisho ambao AI inakutumia", "Ujumbe kutoka kwa familia yako", "Mwanzo ambao unaweza kuubadilisha", "Msimbo wa siri"], answer: 2, why: "Rasimu ni mwanzo tu; wewe unaijua familia yako na msaidizi haijui." },
            { objective: "O1", q: "Unataka ujumbe wa siku ya kuzaliwa ya mjukuu wako wa kike. Unamwambia msaidizi nini?", options: ["Ni kwa nani, unahusu nini, usikike vipi na uwe na urefu gani", "Neno \"siku ya kuzaliwa\" tu", "Anwani ya nyumbani kwake na namba yake ya simu", "Hakuna kitu; atakisia"], answer: 0, why: "Kusema ni kwa nani, nini, sauti na urefu kunaleta rasimu inayofaa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuufanya ujumbe usikike kama wewe",
          minutes: 4,
          goal: "Badilisha rasimu ya AI ili isikike kama sauti yako mwenyewe.",
          text: [
            "Rasimu za AI zinaweza kusikika ngumu kidogo au za kifahari sana. Familia yako itagundua kama hausikiki kama wewe, kwa hiyo uufanye kuwa wako.",
            "Unaweza kumwambia msaidizi: \"Uufanye usikike wa kawaida zaidi.\" \"Tumia maneno mafupi zaidi.\" \"Ongeza kwamba nitampikia keki ya tufaha anayoipenda akija kunitembelea.\" Au unaweza kubadilisha maneno wewe mwenyewe.",
            "Ongeza jambo moja ambalo ni wewe tu unalijua: jina la utani, kumbukumbu, au mzaha wenu wa ndani. Hilo ndilo linalofanya ujumbe uwe wa binafsi."
          ],
          steps: ["Soma rasimu kwa sauti.", "Weka alama kwenye maneno ambayo hungeyasema kamwe.", "Omba badiliko, au badilisha maneno wewe mwenyewe.", "Ongeza jambo moja binafsi ambalo ni wewe tu unalijua."],
          words: [["Jambo binafsi", "kitu maalum kati yako na mtu huyo, kama kumbukumbu au jina la utani."]],
          slides: [
            { title: "Uufanye kuwa wako", bullets: ["Soma rasimu kwa sauti", "Badilisha maneno ambayo hungeyasema kamwe"] },
            { title: "Omba mabadiliko", bullets: ["\"Uufanye usikike wa kawaida zaidi.\"", "\"Tumia maneno mafupi zaidi.\"", "\"Ongeza kwamba ninamuokea keki anayoipenda.\""] },
            { title: "Ongeza mguso wako", bullets: ["Jina la utani", "Kumbukumbu mnayoshiriki", "Mzaha wenu wa ndani"] }
          ],
          tryIt: "Chukua rasimu yako kutoka Somo la 1. Isome kwa sauti, fanya badiliko moja ili isikike kama wewe, na uongeze jambo moja binafsi.",
          youCanNow: "kugeuza rasimu ya AI kuwa ujumbe unaosikika kama wewe.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini ubadilishe rasimu ya AI kabla ya kuituma?", options: ["AI inafanya kila ujumbe kuwa mfupi sana", "Ili isikike kama wewe, kwa sababu familia yako itagundua kama haisikiki hivyo", "Kwa sababu rasimu za AI daima hazina adabu", "Kwa sababu ujumbe mfupi lazima uwe mrefu"], answer: 1, why: "Rasimu za AI zinaweza kusikika ngumu; kuzifanya kuwa zako kunazifanya ziwe za binafsi." },
            { objective: "O2", q: "Rasimu yako ni nzuri lakini inaonekana ya kawaida mno. Unaongeza nini?", options: ["Shairi refu", "Taarifa za benki yako", "Jambo ambalo ni wewe tu unalijua, kama jina la utani au kumbukumbu", "Maneno mengi ya kifahari"], answer: 2, why: "Jina la utani, kumbukumbu au mzaha wa ndani unafanya ujumbe uwe wa binafsi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutuma ujumbe wako kwa ujumbe mfupi au barua pepe",
          minutes: 6,
          goal: "Nakili ujumbe wako na uutume kwa ujumbe mfupi au barua pepe.",
          text: [
            "Ujumbe wako ukiwa tayari, unahitaji kuuhamisha kutoka kwa msaidizi wa AI hadi kwenye app yako ya ujumbe mfupi au barua pepe. Unafanya hivyo kwa kunakili na kubandika.",
            "Kunakili kwenye simu au tableti: bonyeza na ushikilie kidole chako juu ya maandishi hadi menyu itokee, kisha gusa Copy (Nakili). Apps nyingi za AI pia zinaonyesha kitufe kidogo cha kunakili chini ya jibu. Kwenye kompyuta, chagua maandishi kwa kipanya, kisha bofya kulia na uchague Copy.",
            "Kisha fungua app yako ya Messages (Ujumbe) au barua pepe, anza ujumbe mpya kwa mwanafamilia wako, bonyeza na ushikilie ndani ya kisanduku cha ujumbe na ugusa Paste (Bandika) (kwenye kompyuta, bofya kulia na uchague Paste). Usome mara ya mwisho na uutume."
          ],
          steps: ["Nakili ujumbe: bonyeza na ushikilie, kisha gusa Copy, au tumia kitufe cha kunakili.", "Fungua app yako ya Messages au barua pepe.", "Anza ujumbe mpya kwa mwanafamilia wako.", "Bonyeza na ushikilie ndani ya kisanduku cha ujumbe na ugusa Paste.", "Usome mara moja zaidi, kisha gusa Send (Tuma)."],
          words: [["Kunakili na kubandika", "kuchukua maandishi kutoka sehemu moja na kuyaweka sehemu nyingine, bila kuyaandika upya."], ["Ujumbe mfupi", "ujumbe mfupi wa maandishi unaotumwa kutoka simu moja hadi nyingine (SMS)."]],
          slides: [
            { title: "Nakili ujumbe", bullets: ["Bonyeza na ushikilie maandishi, kisha gusa Copy", "Au gusa kitufe cha kunakili chini ya jibu", "Kompyuta: bofya kulia, kisha Copy"] },
            { title: "Ubandike", bullets: ["Fungua Messages au barua pepe", "Anza ujumbe mpya", "Bonyeza na ushikilie, kisha gusa Paste"] },
            { title: "Kabla ya kutuma", bullets: ["Kagua jina la mtu", "Usome mara moja zaidi", "Gusa Send"] }
          ],
          tryIt: "Nakili ujumbe wako uliokamilika kutoka Somo la 2 na uutume kwa mwanafamilia wako kwa ujumbe mfupi au barua pepe.",
          youCanNow: "kunakili ujumbe kutoka kwa msaidizi wa AI na kuutuma kwa ujumbe mfupi au barua pepe.",
          quickCheck: [
            { objective: "O3", q: "Kubandika (Paste) kunafanya nini?", options: ["Kunaweka maandishi uliyonakili mahali pengine", "Kunafuta ujumbe wako", "Kunatuma ujumbe mara moja", "Kunapiga picha"], answer: 0, why: "Unanakili maandishi katika app moja na kuyabandika kwenye kisanduku cha ujumbe cha app nyingine." },
            { objective: "O3", q: "Umenakili ujumbe wako kutoka app ya AI. Unafanya nini baadaye?", options: ["Kuzima simu yako", "Kuunakili tena", "Kumpigia simu mwanafamilia", "Kufungua Messages au barua pepe, kuanza ujumbe kwake na kuubandika ndani"], answer: 3, why: "Fungua app ya Messages au barua pepe, anza ujumbe mpya na ubandike maandishi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata maneno sahihi",
        questions: [
          { objective: "O1", q: "Unapaswa kumwambia msaidizi wa AI nini unapoomba ujumbe wa familia?", options: ["Namba yako ya benki", "Neno moja tu", "Ni kwa nani, unahusu nini, sauti yake na urefu wake", "Nywila yako"], answer: 2, why: "Mambo hayo manne yanamsaidia msaidizi kuandika rasimu yenye manufaa." },
          { objective: "O2", q: "Rasimu inasikika ya kifahari sana. Unafanya nini?", options: ["Kuomba isikike ya kawaida zaidi au kubadilisha maneno wewe mwenyewe", "Kufuta app", "Kuituma hivyo hivyo", "Kukata tamaa"], answer: 0, why: "Unaweza kuomba mabadiliko au kuihariri ili isikike kama wewe." },
          { objective: "O2", q: "Nini kinafanya ujumbe uwe wa binafsi?", options: ["Kunakili kadi kutoka dukani", "Maneno marefu sana", "Alama nyingi za mshangao", "Jambo ambalo ni wewe tu unalijua, kama kumbukumbu"], answer: 3, why: "Kumbukumbu mnayoshiriki au jina la utani linaufanya kuwa wako." },
          { objective: "O3", q: "Kwenye simu, kwa kawaida unanakili maandishi vipi?", options: ["Kutikisa simu", "Kubonyeza na kushikilia maandishi, kisha kugusa Copy", "Kuzima simu", "Kuyapiga picha"], answer: 1, why: "Kubonyeza na kushikilia kunafungua menyu yenye Copy." },
          { objective: "O3", q: "Unapaswa kukagua nini kabla ya kugusa Send?", options: ["Kiwango cha betri tu", "Kwamba unaenda kwa mtu sahihi", "Hakuna kitu", "Hali ya hewa"], answer: 1, why: "Kukagua jina kunazuia ujumbe wako kwenda kwa mtu asiye sahihi." }
        ]
      }
    },
    {
      name: "Sura 2: Kuonana na kushiriki na familia",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujiunga na simu ya video",
          minutes: 6,
          goal: "Jiunge na simu ya video na mwanafamilia na utumie kamera na maikrofoni.",
          text: [
            "Simu ya video inakuwezesha kumwona na kumsikia mtu kwa wakati mmoja, kutoka popote. Apps za bure zinazojulikana ni FaceTime (kwenye iPhone na iPad), WhatsApp, Google Meet na Zoom. Mara nyingi familia huchagua ile ambayo wengi wao tayari wanaitumia.",
            "Njia rahisi zaidi ya kuanza ni kumwacha mwanafamilia akupigie. Simu inapokuja, gusa kitufe cha kijani au Accept (Kubali). Akikutumia kiungo, gusa kiungo hicho kwa wakati mliokubaliana kisha gusa Join (Jiunge).",
            "Ukishaingia kwenye simu, tafuta vitufe vya maikrofoni na kamera. Kitufe kikiwa na mstari juu yake, kimezimwa; kiguse ili kukiwasha. Shika kifaa usawa wa macho na mwanga ukiwa mbele yako, si nyuma yako, ili waone uso wako."
          ],
          steps: ["Kubalianeni wakati na app na mwanafamilia wako.", "Simu ikija, gusa Accept, au gusa kiungo alichotuma na ugusa Join.", "Hakikisha maikrofoni na kamera zimewashwa.", "Shika kifaa usawa wa macho na mwanga ukiwa mbele yako.", "Gusa kitufe chekundu kumaliza simu."],
          words: [["Simu ya video", "simu ambayo mnaonana na kusikiana kwenye skrini."], ["Kiungo", "maandishi ya rangi ya bluu au yaliyopigiwa mstari unayoyagusa ili kwenda mahali fulani, kama kwenye simu."], ["Mute (Nyamazisha)", "kuzima maikrofoni yako ili wengine wasikusikie."]],
          slides: [
            { title: "Apps za bure za simu ya video", bullets: ["FaceTime kwenye iPhone na iPad", "WhatsApp, Google Meet, Zoom", "Tumia ile ambayo familia yako inatumia"] },
            { title: "Kujiunga", bullets: ["Gusa Accept wanapokupigia", "Au gusa kiungo chao, kisha Join", "Jiunge kwa wakati mliokubaliana"] },
            { title: "Ukiwa kwenye simu", bullets: ["Mstari juu ya kitufe unamaanisha kimezimwa", "Washa maikrofoni na kamera", "Kitufe chekundu kinamaliza simu"] },
            { title: "Onekana vizuri", bullets: ["Kifaa usawa wa macho", "Mwanga mbele yako, si nyuma"] }
          ],
          tryIt: "Mwombe mwanafamilia akupigie kwenye app anayoitumia. Ijibu, hakikisha kamera na maikrofoni yako zimewashwa, sema salamu, kisha maliza simu kwa kitufe chekundu.",
          youCanNow: "kujiunga na simu ya video, kuwasha na kuzima kamera na maikrofoni yako, na kumaliza simu.",
          quickCheck: [
            { objective: "O4", q: "Simu ya video ni nini?", options: ["Filamu iliyorekodiwa", "Simu ambayo mnaonana na kusikiana kwa wakati mmoja", "Ujumbe wa sauti", "Albamu ya picha"], answer: 1, why: "Simu ya video inakuwezesha kumwona na kumsikia mtu kwa wakati mmoja, kutoka popote." },
            { objective: "O4", q: "Kwenye simu ya video, familia yako inasema haioni uso wako vizuri. Unabadilisha nini?", options: ["Kuongeza sauti", "Kumaliza simu", "Kukaa ukiwa na dirisha lenye mwanga mkali nyuma yako", "Kushika kifaa usawa wa macho na mwanga ukiwa mbele yako"], answer: 3, why: "Usawa wa macho na mwanga mbele yako vinawawezesha kuona uso wako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kushiriki picha na familia",
          minutes: 5,
          goal: "Piga picha na uitume kwa mwanafamilia.",
          text: [
            "Kushiriki picha ni mojawapo ya njia bora za kubaki karibu. Unaweza kutuma picha ya bustani yako, chakula ulichopika au ukurasa kutoka albamu ya zamani ya picha.",
            "Fungua app ya Camera (Kamera), elekeza kwenye unachotaka, na ugusa kitufe kikubwa cha duara. Kuituma, fungua app ya Photos au Gallery (Picha), gusa picha, kisha gusa kitufe cha Share (Shiriki) (mara nyingi ni mraba wenye mshale, au nukta tatu zilizounganishwa kwa mistari). Chagua Messages, barua pepe au WhatsApp, kisha mchague mwanafamilia wako.",
            "Msaidizi wa AI anaweza kukusaidia kuandika maelezo ya picha, kama: \"Andika maelezo mafupi ya kufurahisha kwa picha ya nyanya yangu ya kwanza iliyoiva msimu huu wa joto.\""
          ],
          steps: ["Fungua app ya Camera na ugusa kitufe cha duara.", "Fungua Photos au Gallery na ugusa picha.", "Gusa kitufe cha Share.", "Chagua Messages, barua pepe au WhatsApp, kisha mwanafamilia wako.", "Ongeza maneno machache na utume."],
          words: [["Kitufe cha Share", "kitufe kinachotuma picha au ukurasa kwa mtu mwingine."], ["Maelezo ya picha", "mstari mfupi wa maneno unaoenda pamoja na picha (caption)."]],
          slides: [
            { title: "Piga picha", bullets: ["Fungua app ya Camera", "Gusa kitufe kikubwa cha duara"] },
            { title: "Tuma picha", bullets: ["Fungua Photos au Gallery", "Gusa picha, kisha kitufe cha Share", "Chagua app, kisha mwanafamilia wako"] },
            { title: "Ongeza maelezo", bullets: ["Andika maneno machache wewe mwenyewe", "Au omba AI maelezo mafupi ya kufurahisha"] }
          ],
          tryIt: "Piga picha ya kitu unachojivunia. Mwombe msaidizi wa AI maelezo mafupi, kisha tuma picha pamoja na maelezo kwa mwanafamilia.",
          youCanNow: "kupiga picha, kuongeza maelezo, na kuishiriki na familia.",
          quickCheck: [
            { objective: "O5", q: "Kitufe cha Share kinafanya nini kwenye app ya Photos?", options: ["Kinafuta picha", "Kinaifanya picha iwe kubwa zaidi", "Kinakuwezesha kutuma picha kwa Messages, barua pepe au WhatsApp", "Kinapiga picha mpya"], answer: 2, why: "Gusa picha, gusa Share, kisha chagua jinsi ya kutuma na kwa nani." },
            { objective: "O5", q: "Unataka maneno machache ya kufurahisha kwa picha ya bustani yako. Unaweza kufanya nini?", options: ["Kumwomba msaidizi wa AI aandike maelezo mafupi", "Kutuma picha bila maneno kamwe", "Kuiweka kwa watu usiowajua", "Kupiga picha nyingine kumi"], answer: 0, why: "Msaidizi wa AI anaweza kukusaidia kuandika maelezo mafupi ya picha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwa salama katika ujumbe wa familia",
          minutes: 5,
          goal: "Tambua ujumbe bandia wa \"dharura ya familia\" na uukague kwa usalama.",
          text: [
            "Walaghai wakati mwingine wanajifanya kuwa mjukuu au ndugu aliye matatani. Wanaweza kutuma ujumbe kutoka namba mpya (\"Habari Bibi, nimepoteza simu yangu\") au hata kutumia AI kuiga sauti kwenye simu. Kwa kawaida wanaomba pesa haraka, mara nyingi kwa kadi za zawadi (gift cards), kuhamisha pesa kwa wire au app ya malipo, na wanakuomba ufiche siri.",
            "Familia halisi inaweza kusubiri dakika chache unapohakikisha. Kata simu au acha kujibu, kisha mpigie mwanafamilia wako, au mzazi wake, kwenye namba uliyohifadhi tayari.",
            "Baadhi ya familia hukubaliana neno la siri la familia ambalo ni wao tu wanalijua, la kutumia wakati wa dharura. Usitume pesa kamwe hadi uwe umeongea na mtu huyo kwenye namba unayoiamini. Nchini Marekani unaweza kuripoti ulaghai kwa Federal Trade Commission (FTC, tume ya serikali ya biashara) kwenye ReportFraud.ftc.gov."
          ],
          steps: ["Angalia dalili: namba mpya, haraka, ombi la pesa, ufiche siri.", "Acha kujibu au kata simu.", "Mpigie mwanafamilia wako kwenye namba uliyonayo tayari.", "Kubalianeni neno la siri la familia kwa dharura.", "Ripoti ulaghai kwenye ReportFraud.ftc.gov."],
          words: [["Ulaghai wa babu na bibi", "hila ambapo mtu anajifanya kuwa mjukuu aliye matatani ili apate pesa."], ["Neno la siri", "neno la siri ambalo familia yako inakubaliana ili kuthibitisha nani hasa anapiga simu."]],
          slides: [
            { title: "Dharura bandia", bullets: ["\"Habari Bibi, nimepoteza simu yangu\"", "Sauti iliyoigwa kwenye simu", "Anaomba pesa haraka na kwa siri"] },
            { title: "Cha kufanya", bullets: ["Acha kujibu au kata simu", "Mpigie kwenye namba uliyonayo tayari", "Usitume pesa kamwe hadi uwe na uhakika"] },
            { title: "Kuwa tayari", bullets: ["Kubalianeni neno la siri la familia", "Ripoti ulaghai kwenye ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Jinsi ya kuepuka ulaghai", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Ripoti ulaghai", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Kazi ya mwisho: mwombe msaidizi wa AI akusaidie kuandika ujumbe mfupi wa upendo unaomkaribisha mwanafamilia kwenye simu ya video. Uufanye usikike kama wewe, utume kwa ujumbe mfupi au barua pepe, na ujiunge na simu kwa wakati mliokubaliana. Mnapoongea, kubalianeni neno la siri la familia.",
          youCanNow: "kuwasiliana na familia kwa ujumbe, picha na simu ya video, na kukagua kwa usalama ujumbe wa \"familia\" unaotia shaka.",
          quickCheck: [
            { objective: "O6", q: "Neno la siri la familia ni nini?", options: ["Nywila ya simu yako", "Neno ambalo ni familia yako tu inalijua, la kuthibitisha nani anapiga simu wakati wa dharura", "Jina la app yako ya video", "Neno unaloliweka mtandaoni"], answer: 1, why: "Baadhi ya familia hukubaliana neno la siri ili kukagua nani hasa anapiga simu." },
            { objective: "O6", q: "Sauti inayofanana na ya mjukuu wako inakuomba utume pesa haraka na ufiche siri. Unafanya nini kwanza?", options: ["Kutuma pesa na kuuliza baadaye", "Kuficha siri kama ulivyoombwa", "Kusimama na kumpigia mjukuu wako au mzazi wake kwenye namba uliyonayo tayari", "Kuwapa msimbo kutoka kwenye simu yako"], answer: 2, why: "Haraka, siri na ombi la pesa ni dalili za ulaghai; piga tena kwenye namba unayoiamini." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuonana na kushiriki na familia",
        questions: [
          { objective: "O4", q: "Mwanafamilia anakutumia kiungo cha simu ya video. Unafanya nini kwa wakati mliokubaliana?", options: ["Kukifuta", "Kuzima simu yako", "Kukituma kwa watu usiowajua", "Kugusa kiungo, kisha kugusa Join"], answer: 3, why: "Kugusa kiungo na Join kunakuingiza kwenye simu." },
          { objective: "O4", q: "Kitufe cha maikrofoni kina mstari juu yake. Hiyo inamaanisha nini?", options: ["Maikrofoni yako imezimwa", "Simu imekwisha", "Betri iko chini", "Kamera yako imeharibika"], answer: 0, why: "Mstari juu ya kitufe unamaanisha kimezimwa." },
          { objective: "O4", q: "Mwanga unapaswa kuwa wapi wakati wa simu ya video?", options: ["Nyuma yako", "Kusiwe na mwanga", "Mbele yako", "Chini ya meza"], answer: 2, why: "Mwanga mbele yako unawezesha familia yako kuona uso wako." },
          { objective: "O5", q: "Unatumaje picha kutoka app yako ya Photos?", options: ["Kugeuza simu juu chini", "Kupiga picha ya skrini ya betri", "Kufuta picha", "Kugusa picha, kisha kitufe cha Share, kisha kuchagua mtu"], answer: 3, why: "Kitufe cha Share kinatuma picha kwa app na mtu unayemchagua." },
          { objective: "O6", q: "Ujumbe kutoka namba mpya unasema \"Babu, niko matatani, tuma kadi za zawadi na usimwambie Mama.\" Unafanya nini?", options: ["Kununua kadi za zawadi", "Kujibu kwa namba yako ya benki", "Kumpigia mjukuu wako au mzazi wake kwenye namba uliyonayo tayari", "Kuficha siri"], answer: 2, why: "Haraka, siri na kadi za zawadi ni dalili za ulaghai; kagua kwenye namba unayoiamini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Mawasiliano na Kuungana na Familia",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI anaweza kukusaidiaje kuwasiliana na familia?", options: ["Anaweza kuwatembelea kwa niaba yako", "Anaweza kuandika rasimu ya kwanza ya ujumbe", "Anajua namba zao za simu", "Anatuma pesa kwa niaba yako"], answer: 1, why: "Kuandika rasimu za ujumbe ni uwezo mkubwa wa wasaidizi wa AI." },
      { objective: "O1", q: "Prompt ipi italeta ujumbe bora wa familia?", options: ["\"Andika ujumbe mfupi wa furaha kwa mjukuu wangu Ava, ambaye timu yake ilishinda mechi ya mpira wa miguu. Usizidi maneno 40.\"", "\"ujumbe\"", "\"maandishi\"", "\"habari\""], answer: 0, why: "Inasema ni kwa nani, nini, sauti na urefu." },
      { objective: "O1", q: "Rasimu ni nini?", options: ["Toleo la kwanza ambalo unaweza kulibadilisha", "Upepo wa baridi", "Nakala ya mwisho", "Aina ya app"], answer: 0, why: "Rasimu ni mwanzo ambao unaweza kuuboresha." },
      { objective: "O1", q: "\"Sauti\" ya ujumbe inamaanisha nini?", options: ["Mlio wa simu", "Jinsi ujumbe unavyosikika, kama wa upendo au wa kuchekesha", "Ukubwa wa herufi", "Namba ya simu"], answer: 1, why: "Sauti ni jinsi ujumbe unavyomgusa msomaji." },
      { objective: "O2", q: "Njia nzuri ya kukagua kama rasimu inasikika kama wewe ni:", options: ["Kuituma bila kuisoma", "Kuifanya ndefu zaidi", "Kuisoma kwa sauti", "Kuongeza maneno makubwa"], answer: 2, why: "Kusoma kwa sauti kunaonyesha maneno ambayo hungeyasema kamwe." },
      { objective: "O2", q: "Nini kinafanya ujumbe uwe wa binafsi?", options: ["Maneno ya kifahari", "Kuandika kwa herufi kubwa zote", "Kuunakili kutoka kwenye kadi", "Kumbukumbu mnayoshiriki au jina la utani"], answer: 3, why: "Mambo ambayo ni wewe tu unayajua yanaufanya kuwa wako." },
      { objective: "O3", q: "Kunakili maandishi kwenye simu kwa kawaida:", options: ["Unagusa kamera", "Unatikisa simu", "Unabonyeza na kushikilia, kisha unagusa Copy", "Unaongeza sauti"], answer: 2, why: "Kubonyeza na kushikilia kunafungua menyu ya Copy." },
      { objective: "O3", q: "Baada ya kunakili, unaweka ujumbe kwenye ujumbe mfupi vipi?", options: ["Kubonyeza na kushikilia ndani ya kisanduku cha ujumbe na kugusa Paste", "Kuandika upya kila neno", "Kupiga picha", "Kumpigia mtu simu"], answer: 0, why: "Paste inaweka maandishi uliyonakili kwenye kisanduku cha ujumbe." },
      { objective: "O3", q: "Unapaswa kukagua nini kabla ya kugusa Send?", options: ["Hakuna kitu", "Hali ya hewa", "Nywila yako", "Jina la mtu"], answer: 3, why: "Kukagua jina kunazuia kutuma kwa mtu asiye sahihi." },
      { objective: "O4", q: "Ipi kati ya hizi ni app ya simu ya video?", options: ["Kikokotoo", "FaceTime", "Saa", "Tochi"], answer: 1, why: "FaceTime, WhatsApp, Google Meet na Zoom zinatoa simu za video." },
      { objective: "O4", q: "Mwanafamilia anapokupigia simu ya video, unagusa:", options: ["Kitufe chekundu", "Kitufe cha kijani au Accept", "Picha zilizohifadhiwa", "Settings (Mipangilio)"], answer: 1, why: "Kijani au Accept inajibu simu; chekundu kinaimaliza." },
      { objective: "O4", q: "Kitufe chenye mstari juu yake:", options: ["Kimewashwa", "Kinarekodi", "Kimeharibika", "Kimezimwa"], answer: 3, why: "Mstari juu yake unamaanisha kimezimwa." },
      { objective: "O4", q: "Kumaliza simu ya video kwa kawaida unagusa:", options: ["Kitufe chekundu", "Kitufe cha kijani", "Kitufe cha sauti", "Maikrofoni"], answer: 0, why: "Kitufe chekundu kinamaliza simu." },
      { objective: "O4", q: "Unapaswa kushika kifaa wapi wakati wa simu ya video?", options: ["Karibu na sakafu", "Nyuma ya kichwa chako", "Usawa wa macho", "Mfukoni mwako"], answer: 2, why: "Usawa wa macho unawezesha familia yako kuona uso wako." },
      { objective: "O5", q: "Kitufe cha Share kinatumika:", options: ["Kufuta picha", "Kuzima simu", "Kupiga picha", "Kutuma picha kwa mtu"], answer: 3, why: "Share inatuma picha kupitia app unayoichagua." },
      { objective: "O5", q: "Maelezo ya picha (caption) ni:", options: ["Namba ya simu", "Aina ya kamera", "Mstari mfupi wa maneno pamoja na picha", "Nywila"], answer: 2, why: "Maelezo ya picha yanaeleza picha." },
      { objective: "O6", q: "Ujumbe kutoka namba mpya unasema ni mjukuu wako na anahitaji pesa haraka. Jambo la kwanza la kufanya ni:", options: ["Kutuma pesa", "Kusimama na kumpigia mjukuu wako kwenye namba uliyonayo tayari", "Kutoa taarifa za benki yako", "Kuficha siri"], answer: 1, why: "Kuhakikisha kwenye namba unayoijua kunazuia ulaghai huu." },
      { objective: "O6", q: "Walaghai wanaweza kutumia AI:", options: ["Kuiga sauti ya mwanafamilia", "Kurekebisha simu yako", "Kukutumia barua kutoka benki", "Kutembelea nyumba yako"], answer: 0, why: "Kuiga sauti kwa AI kunatumika katika ulaghai wa dharura ya familia." },
      { objective: "O6", q: "Neno la siri la familia linaweza kusaidia nini?", options: ["Kuthibitisha nani hasa anapiga simu wakati wa dharura", "Kufungua simu yako", "Kufanya simu za video ziwe wazi zaidi", "Kulipa bili"], answer: 0, why: "Ni familia yako halisi tu inayojua neno la siri." },
      { objective: "O6", q: "Nchini Marekani unaweza kuripoti ulaghai wapi?", options: ["Tangazo linalojitokeza (pop-up)", "ReportFraud.ftc.gov", "Namba ya mpigaji", "Maoni kwenye mitandao ya kijamii"], answer: 1, why: "Federal Trade Commission inapokea ripoti za ulaghai kwenye ReportFraud.ftc.gov." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      6,
      9,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ombi lililo wazi kwa AI",
        objective: "O1",
        notYet: "Prompt inasema \"andika ujumbe\" tu.",
        meets: "Prompt inasema ni kwa nani, kwamba ni mwaliko wa simu ya video, sauti yake na urefu wake.",
        exceeds: "Rasimu ya kwanza ilihitaji mabadiliko machache sana."
      },
      {
        name: "Unasikika kama wewe",
        objective: "O2",
        notYet: "Alituma rasimu ya AI kama ilivyokuwa.",
        meets: "Alifanya angalau badiliko moja ili usikike kama yeye.",
        exceeds: "Aliongeza jambo binafsi ambalo ni yeye tu analijua, kama jina la utani au kumbukumbu."
      },
      {
        name: "Umetumwa kwa mtu sahihi",
        objective: "O3",
        notYet: "Ujumbe haukutumwa, au ulienda kwa mtu asiye sahihi.",
        meets: "Alinakili, akabandika na kutuma ujumbe kwa ujumbe mfupi au barua pepe kwa mtu sahihi.",
        exceeds: "Alikagua jina na maneno mara moja zaidi kabla ya kutuma."
      },
      {
        name: "Alijiunga na simu",
        objective: "O4",
        notYet: "Hakuweza kujiunga, au maikrofoni au kamera ilibaki imezimwa.",
        meets: "Alijiunga kwa wakati mliokubaliana maikrofoni na kamera zikiwa zimewashwa, na akasema salamu.",
        exceeds: "Alishika kifaa usawa wa macho kwenye mwanga mzuri na akamaliza simu kwa kitufe chekundu."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti simu ya video au picha waliyoshiriki na familia ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi ambao familia yao inakubaliana neno la siri la familia, na wanaoripoti kukagua ujumbe wa familia unaotia shaka",
      "Wanafunzi wanaoanza kozi nyingine ya Seniors and Technology (Wazee na Teknolojia) ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja, tableti au kompyuta yenye kamera na intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini) na app ya simu ya video ya familia",
      "Mwanafamilia au msaidizi anayekubali kushiriki katika simu ya video ya mazoezi",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vya taratibu: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kabla ya kozi, waulize wanafunzi familia yao tayari inatumia app gani ya video na fanyeni mazoezi kwa hiyo.",
      "Pangeni simu za video za mazoezi kati ya wanafunzi walio darasani kabla ya kupigia familia.",
      "Onyesha hatua za kunakili na kubandika kwenye kifaa cha kila mwanafunzi mwenyewe; menyu zinaonekana tofauti kwenye simu tofauti.",
      "Zungumzieni ulaghai wa dharura ya familia kwa igizo, na wahimize wanafunzi wakubaliane neno la siri la familia.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
