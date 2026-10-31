"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-scam-awareness.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-scam-awareness-sw",
  lang: "sw",
  translationOf: "seniors-ai-scam-awareness",
  category: "Seniors and Technology",
  name: "Usalama wa AI na Kutambua Ulaghai kwa Wazee",
  skills: "Kutambua dalili nne za ulaghai, Kutambua hila za sauti na ujumbe za AI, Kukagua ujumbe kwa usalama, Kukataa malipo ya hatari, Kuripoti ulaghai",
  outcome: "kuangalia simu, ujumbe mfupi au barua pepe, kuamua kama inaonyesha dalili za ulaghai, kuikagua kwa usalama kwa kutumia namba unayoiamini tayari, na kujua wapi pa kuiripoti.",
  about: [
    "Kozi hii ni kwa wazee, na watu wanaowajali, wanaotaka kuwa hatua moja mbele ya walaghai. Siku hizi walaghai wanatumia AI kuandika ujumbe bora zaidi na hata kuiga sauti za watu, kwa hiyo dalili za zamani za hatari ni muhimu kuliko wakati wowote.",
    "Utajifunza dalili nne za ulaghai, jinsi hila za AI zinavyofanya kazi, tabia rahisi ya Simama, Kagua, Piga simu, na wapi pa kuripoti ulaghai nchini Marekani.",
    "Kila somo linachukua kama dakika tano. Fanya kazi za \"Jaribu sasa\"; zinajenga kadi yako mwenyewe ya usalama dhidi ya ulaghai. Jaribio la maarifa linamaliza kila sura na mtihani wa maswali 20 unamaliza kozi. Kudanganywa si dalili ya udhaifu: wahalifu hawa ni wataalamu, na mtu yeyote anaweza kulengwa."
  ],
  finalTask: "Tengeneza kadi yako mwenyewe ya usalama dhidi ya ulaghai: andika namba tatu za simu unazoziamini (mwanafamilia, benki yako kutoka nyuma ya kadi yako, na ofisi ya daktari wako), neno la siri la familia yako, hatua za Simama, Kagua, Piga simu, na mahali pa kuripoti ulaghai. Kisha pima jumbe mbili za mfano kwa kutumia dalili nne.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee nchini Marekani wanaopokea simu, jumbe fupi na barua pepe kila siku, baadhi yake zikiwa za ulaghai. Wengi wanaishi peke yao, wana akiba au mafao, na wana wajukuu ambao sauti au picha zao ziko mtandaoni.",
    startingPoint: "Wanatumia simu na mara nyingi barua pepe. Wengi wanajua ulaghai upo lakini hawajasikia kuhusu nakala za sauti za AI, na wanaweza kuamini jumbe zenye tahajia nzuri au nembo rasmi.",
    gap: "AI inawawezesha walaghai kuiga sauti ya mpendwa na kuandika jumbe bandia zisizo na kosa, kwa hiyo dalili za zamani kama tahajia mbaya hazifanyi kazi tena. Wazee wanahitaji kutambua dalili nne, kutumia Simama, Kagua, Piga simu, kulinda pesa na taarifa zao, na kujua wapi pa kuripoti, ili wasipoteze akiba wala wasione aibu kuomba msaada.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: simu yoyote; kompyuta au tableti kwa barua pepe na madirisha yanayojitokeza (pop-ups)",
      "Muda: kama dakika 5 kwa kila somo, bila haraka",
      "Taarifa za ofisi za Marekani na za simu ya msaada zinaweza kubadilika; wanafunzi wakague tovuti rasmi",
      "Hakuna namba halisi za binafsi zinazotumika katika mazoezi; jumbe za mfano tu"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa simu, ujumbe mfupi au barua pepe", action: "kutambua dalili nne za ulaghai: kujifanya, tatizo au zawadi, shinikizo na malipo yasiyo ya kawaida", standard: "ukitaja kila dalili inayoonekana katika ujumbe" },
    { id: "O2", condition: "Mpigaji simu anaposikika kama mpendwa wako aliye katika dharura", action: "kukata simu na kukagua kwa mpendwa wako au mzazi wake kwa namba uliyo nayo tayari", standard: "bila kutuma pesa yoyote kabla ya kukagua" },
    { id: "O3", condition: "Ukipokea ujumbe mfupi, barua pepe, tovuti au dirisha linalojitokeza usilolitarajia", action: "kuwasiliana na kampuni wewe mwenyewe kwa kuandika anwani yake halisi au kupiga namba iliyo kwenye kadi au bili yako", standard: "bila kubofya kiungo wala kupiga namba iliyo katika ujumbe" },
    { id: "O4", condition: "Kila wakati ujumbe au simu inakutia wasiwasi", action: "kutumia hatua za Simama, Kagua, Piga simu", standard: "ukitumia namba unayoiamini tayari tu" },
    { id: "O5", condition: "Mpigaji simu au ujumbe usioutarajia unapoomba taarifa au pesa", action: "kukataa kutoa namba za binafsi, nywila, misimbo au malipo yasiyo ya kawaida, na kupiga simu benki yako kama tayari ulitoa", standard: "bila kumpa chochote mtu aliyewasiliana nawe bila kutarajia" },
    { id: "O6", condition: "Baada ya ulaghai au jaribio la ulaghai", action: "kutaja wapi pa kuuripoti na kupata msaada nchini Marekani", standard: "ukitaja angalau sehemu mbili sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi ulaghai unavyofanya kazi leo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Dalili nne za ulaghai",
          minutes: 5,
          goal: "Taja dalili nne zinazoonyesha kwamba simu, ujumbe mfupi au barua pepe huenda ni ulaghai.",
          text: [
            "Federal Trade Commission (FTC), ofisi ya serikali ya Marekani inayolinda wateja, inaeleza dalili nne za kawaida za ulaghai. Jifunze hizi nne na utagundua ulaghai mwingi, uwe unatumia AI au la.",
            "1. Wanajifanya kuwa mtu unayemwamini: ofisi ya serikali, benki yako, kampuni inayojulikana, shirika la misaada au mwanafamilia. 2. Wanasema kuna tatizo au zawadi: unadaiwa pesa, akaunti yako imefungwa, au umeshinda kitu lakini lazima ulipe ada. 3. Wanakushinikiza uchukue hatua sasa hivi na wanaweza kukuambia usikate simu au usimwambie mtu yeyote. 4. Wanataka malipo kwa njia isiyo ya kawaida: kadi za zawadi, kutuma pesa kwa wire transfer, sarafu za kidijitali (cryptocurrency), app ya malipo, au hundi wanayotaka uiweke benki kisha uwarudishie sehemu ya pesa.",
            "Ukiona hata dalili moja kati ya hizi, punguza mwendo na ukague kabla ya kufanya chochote."
          ],
          words: [["FTC", "Federal Trade Commission, ofisi ya serikali ya Marekani inayowalinda watu dhidi ya ulaghai."], ["Kujifanya", "kujionyesha kuwa mtu mwingine."]],
          slides: [
            { title: "Dalili 1: Wanajifanya", bullets: ["Serikali, benki, kampuni, shirika la misaada", "Hata mwanafamilia"] },
            { title: "Dalili 2: Tatizo au zawadi", bullets: ["\"Unadaiwa pesa\"", "\"Akaunti yako imefungwa\"", "\"Umeshinda, lipa ada tu\""] },
            { title: "Dalili 3: Shinikizo", bullets: ["\"Fanya sasa hivi\"", "\"Usikate simu\"", "\"Usimwambie mtu yeyote\""] },
            { title: "Dalili 4: Malipo ya ajabu", bullets: ["Kadi za zawadi au wire transfer", "Cryptocurrency au apps za malipo", "Weka hundi benki kisha urudishe pesa"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Chukua kadi ndogo au kipande cha karatasi. Andika \"Kadi yangu ya usalama dhidi ya ulaghai\" juu, kisha andika dalili nne kwa maneno yako mwenyewe.",
          youCanNow: "kutaja dalili nne za ulaghai.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni moja ya dalili nne za ulaghai?", options: ["Ujumbe kutoka namba uliyoihifadhi mwenyewe", "Barua uliyokuwa ukiitarajia", "Wanataka malipo kwa kadi ya zawadi au wire transfer", "Rafiki anayekuuliza hali yako"], answer: 2, why: "Malipo yasiyo ya kawaida, kama kadi za zawadi au wire transfer, ni moja ya dalili nne." },
            { objective: "O1", q: "Mpigaji simu anasema unadaiwa kodi na lazima ulipe leo au utakamatwa. Unaona dalili ngapi, na unafanya nini?", options: ["Hakuna; lipa ili uwe salama", "Dalili kadhaa: tatizo na shinikizo; punguza mwendo na ukague kabla ya kufanya chochote", "Dalili moja, kwa hiyo lazima ni kweli", "Hakuna dalili kwa sababu ni serikali"], answer: 1, why: "Tatizo pamoja na shinikizo la kufanya sasa ni dalili za ulaghai; hata dalili moja inamaanisha punguza mwendo na ukague." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nakala za sauti za AI na dharura bandia za familia",
          minutes: 5,
          goal: "Tambua simu ya dharura bandia inayoweza kutumia nakala ya AI ya sauti ya mpendwa wako.",
          text: [
            "Kwa rekodi fupi ya sauti ya mtu, kama video iliyowekwa mtandaoni, walaghai wanaweza kutumia AI kutengeneza nakala ya sauti hiyo. Kisha wanampigia bibi au babu, wakilia au wakiwa na hofu: \"Bibi, nimepata ajali, nahitaji pesa ya dhamana, tafadhali usimwambie Mama.\"",
            "Wakati mwingine mtu wa pili anaingia kwenye simu akijifanya kuwa wakili au polisi. Wanaomba pesa taslimu, kadi za zawadi au wire transfer, na wanaweza hata kutuma mjumbe kuchukua pesa mlangoni kwako.",
            "Sauti inaweza kusikika kama ya kweli, lakini dalili nne bado zipo: kujifanya, tatizo, shinikizo na usiri, na malipo yasiyo ya kawaida. Kata simu na umpigie mpendwa wako, au mzazi wake, kwa namba uliyo nayo tayari. Neno la siri la familia ambalo familia yako tu inalijua ni ukaguzi wa ziada wenye nguvu."
          ],
          steps: ["Tambua dalili: hofu, usiri, ombi la pesa.", "Kata simu, hata kama sauti inasikika kama ya kweli.", "Mpigie mpendwa wako au mzazi wake kwa namba uliyo nayo tayari.", "Uliza neno la siri la familia kama mnalo."],
          words: [["Kuiga sauti (voice cloning)", "kutumia AI kunakili sauti ya mtu kutoka rekodi fupi."], ["Mjumbe", "mtu anayetumwa kuchukua au kupeleka kitu."]],
          slides: [
            { title: "AI inaweza kuiga sauti", bullets: ["Kutoka video au rekodi fupi", "Inaweza kusikika sawa kabisa na mjukuu"] },
            { title: "Dharura bandia", bullets: ["Ajali, kukamatwa au hospitali", "\"Usimwambie Mama\"", "Pesa taslimu, kadi za zawadi, wire, au mjumbe mlangoni"] },
            { title: "Cha kufanya", bullets: ["Kata simu, hata kama inasikika kweli", "Wapigie kwa namba uliyo nayo", "Uliza neno la siri la familia"] }
          ],
          tryIt: "Kwenye kadi yako ya usalama, andika majina na namba za simu za wanafamilia wawili ambao ungewapigia kukagua dharura. Kisha mpigie mmoja wao na mkubaliane neno la siri la familia.",
          youCanNow: "kutambua simu ya dharura bandia ya familia na kuikagua kwa usalama.",
          quickCheck: [
            { objective: "O2", q: "Walaghai wanawezaje kuiga sauti ya mpendwa wako?", options: ["Kwa kukutana naye ana kwa ana tu", "Hawawezi", "Kwa kubahatisha", "Kwa AI na rekodi fupi, kama video iliyowekwa mtandaoni"], answer: 3, why: "Rekodi fupi inatosha kwa AI kuiga sauti." },
            { objective: "O2", q: "Sauti inayolia kama ya mjukuu wako wa kike inasema anahitaji pesa ya dhamana na usimwambie mama yake. Unafanya nini?", options: ["Kata simu na umpigie yeye au mzazi wake kwa namba uliyo nayo tayari", "Tuma pesa haraka", "Tunza siri kama anavyoomba", "Mpe wakili namba yako ya benki"], answer: 0, why: "Hata kama sauti inasikika kweli, piga tena kwa namba unayoiamini kabla ya kufanya chochote." }
          ]
        },
        {
          objectives: ["O3","O1"],
          title: "Jumbe, tovuti na madirisha yanayojitokeza bandia",
          minutes: 5,
          goal: "Tambua ujumbe mfupi, barua pepe, tovuti au onyo la dirisha linalojitokeza lililo bandia.",
          text: [
            "AI inawasaidia walaghai kuandika jumbe fupi na barua pepe zisizo na kosa la tahajia, zinazoonekana kutoka benki yako, kampuni ya usafirishaji wa vifurushi, Medicare au Amazon. Tahajia nzuri haithibitishi tena kwamba ujumbe ni wa kweli.",
            "Hila za kawaida: \"Kifurushi chako hakikuweza kufikishwa, bofya hapa.\" \"Shughuli isiyo ya kawaida kwenye akaunti yako, ingia sasa.\" Dirisha linalojitokeza kwenye kompyuta yako likisema ina virusi na lazima upige namba fulani. Viungo na namba hizi zinakupeleka kwa mlaghai.",
            "Usibofye viungo wala usipige namba zilizo katika jumbe usizozitarajia. Funga ujumbe, na nenda kwenye tovuti halisi ya kampuni kwa kuandika anwani wewe mwenyewe, au piga namba iliyo nyuma ya kadi yako au kwenye bili unayoiamini. Medicare inasema haitakupigia simu kamwe kukuuzia kitu wala kuja nyumbani kwako."
          ],
          steps: ["Usibofye kiungo wala usipige namba iliyo katika ujumbe.", "Funga ujumbe au dirisha linalojitokeza.", "Andika anwani halisi ya kampuni wewe mwenyewe, au piga namba iliyo kwenye kadi au bili yako.", "Dirisha likikataa kufungika, zima kifaa na umuulize mtu unayemwamini."],
          words: [["Kiungo (link)", "maandishi unayogusa au kubofya yanayokupeleka kwenye tovuti."], ["Dirisha linalojitokeza (pop-up)", "kisanduku kinachotokea ghafla kwenye skrini yako."], ["Phishing", "ujumbe bandia unaojaribu kukufanya utoe taarifa za binafsi."]],
          slides: [
            { title: "Tahajia nzuri si uthibitisho", bullets: ["AI inaandika jumbe zinazoonekana halisi", "Benki, vifurushi, Medicare, Amazon"] },
            { title: "Hila za kawaida", bullets: ["\"Kifurushi chako hakikuweza kufikishwa\"", "\"Ingia sasa, shughuli isiyo ya kawaida\"", "\"Virusi! Piga namba hii\""] },
            { title: "Cha kufanya", bullets: ["Usibofye wala usipige kutoka ujumbe", "Andika anwani halisi wewe mwenyewe", "Piga namba iliyo kwenye kadi au bili yako"] }
          ],
          sources: [{ name: "Medicare: Reporting Medicare fraud and abuse", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Kwenye kadi yako ya usalama, andika namba ya simu ya benki yako uliyoinakili kutoka nyuma ya kadi yako ya benki, na namba ya ofisi ya daktari wako kutoka kwenye bili au kadi ya miadi. Hizi ndizo namba zako unazoziamini.",
          youCanNow: "kutambua jumbe na madirisha yanayojitokeza bandia na kuwasiliana na kampuni kwa usalama ukitumia namba unazoziamini.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini tahajia nzuri si uthibitisho tena kwamba ujumbe ni wa kweli?", options: ["Benki hazikagui tahajia kamwe", "AI inawasaidia walaghai kuandika jumbe zisizo na kosa la tahajia", "Barua pepe zote zinakaguliwa na serikali", "Tahajia haina umuhimu katika jumbe fupi"], answer: 1, why: "AI inaandika jumbe safi zinazoonekana halisi, kwa hiyo tahajia nzuri haithibitishi kitu." },
            { objective: "O3", q: "Barua pepe inasema kuna shughuli isiyo ya kawaida kwenye akaunti yako ya benki na uingie kupitia kiungo. Unafanya nini?", options: ["Bofya kiungo na uingie", "Jibu kwa nywila yako", "Piga namba iliyo kwenye barua pepe", "Ifunge na uandike anwani halisi ya benki yako wewe mwenyewe, au upige namba iliyo kwenye kadi yako"], answer: 3, why: "Viungo na namba katika jumbe usizozitarajia zinakupeleka kwa mlaghai; wasiliana na benki wewe mwenyewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi ulaghai unavyofanya kazi leo",
        questions: [
          { objective: "O1", q: "Ipi ni moja ya dalili nne za ulaghai?", options: ["Ujumbe una tarehe iliyo wazi", "Unamjua mtumaji vizuri na ulikuwa ukiutarajia", "Wanakushinikiza uchukue hatua sasa hivi", "Ulikuja kwa posta ya kawaida"], answer: 2, why: "Shinikizo la kufanya sasa hivi ni dalili ya kawaida ya ulaghai." },
          { objective: "O1", q: "Mtu anakuomba ulipe \"ada ya serikali\" kwa kadi za zawadi. Hii ni:", options: ["Dalili ya ulaghai", "Kawaida", "Sheria ya kodi", "Sheria ya benki"], answer: 0, why: "Ofisi halisi hazipokei malipo kwa kadi za zawadi." },
          { objective: "O2", q: "Mpigaji simu anasikika sawa kabisa na mjukuu wako na anakuomba sana pesa ya dhamana. Unafanya nini?", options: ["Tuma pesa haraka", "Msubiri mjumbe", "Mpe namba ya kadi yako", "Kata simu na umpigie mjukuu wako au mzazi wake kwa namba uliyo nayo"], answer: 3, why: "AI inaweza kuiga sauti; kukagua kwa namba unayoijua ni salama." },
          { objective: "O3", q: "Barua pepe haina kosa la tahajia na ina nembo ya benki yako. Je, hiyo inathibitisha ni ya kweli?", options: ["Ndiyo, kila wakati", "Hapana, AI inafanya jumbe bandia zionekane halisi", "Ndiyo, kama ni ndefu", "Ndiyo, kama ina kiungo"], answer: 1, why: "Tahajia nzuri na nembo ni rahisi kwa walaghai kuiga." },
          { objective: "O3", q: "Dirisha linalojitokeza linasema kompyuta yako ina virusi na upige namba fulani. Unapaswa:", options: ["Kupiga namba hiyo", "Kutopiga; lifunge, au zima kifaa na umuulize mtu unayemwamini", "Kulipa ili irekebishwe", "Kuwapa ruhusa ya kuingia kwenye kompyuta yako kwa mbali"], answer: 1, why: "Maonyo ya virusi kwenye madirisha yanayojitokeza yenye namba za simu ni ulaghai wa kawaida." }
        ]
      }
    },
    {
      name: "Sura 2: Kujilinda",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tabia ya Simama, Kagua, Piga simu",
          minutes: 4,
          goal: "Tumia hatua tatu kila wakati ujumbe au simu inakutia wasiwasi.",
          text: [
            "Walaghai wanashinda kwa kukuharakisha. Kinga yako bora ni tabia unayoitumia kila wakati: Simama, Kagua, Piga simu.",
            "Simama: usibofye, usilipe, wala usitoe taarifa yoyote. Ni sawa kumkatia simu mtu yeyote, hata kama anasema ni polisi au benki. Kagua: tafuta dalili nne. Ongea na mtu unayemwamini kabla ya kuchukua hatua. Piga simu: wasiliana na mtu au kampuni wewe mwenyewe, ukitumia namba kutoka kadi yako ya usalama, kadi yako ya benki, bili au tovuti rasmi uliyoiandika wewe mwenyewe.",
            "Unaweza pia kumwomba msaidizi wa AI maoni ya pili. Bandika ujumbe, baada ya kuondoa taarifa zozote za binafsi, na uulize: \"Je, ujumbe huu unaonyesha dalili za ulaghai?\" Chukulia jibu lake kama msaidizi, si neno la mwisho; hatua zako za Simama, Kagua, Piga simu bado zinatangulia."
          ],
          steps: ["Simama: usibofye, usilipe wala usitoe chochote.", "Kagua: tafuta dalili nne na uongee na mtu unayemwamini.", "Piga simu: tumia namba unayoiamini tayari, kamwe si ile iliyo katika ujumbe."],
          words: [["Maoni ya pili", "kumwomba mtu mwingine aangalie jambo kabla hujaamua."]],
          slides: [
            { title: "Simama", bullets: ["Usibofye, usilipe wala usitoe kitu", "Ni sawa kumkatia simu mtu yeyote"] },
            { title: "Kagua", bullets: ["Tafuta dalili nne", "Ongea na mtu unayemwamini"] },
            { title: "Piga simu", bullets: ["Tumia namba unayoiamini tayari", "Kamwe si namba iliyo katika ujumbe"] },
            { title: "AI kama msaidizi", bullets: ["Ondoa taarifa za binafsi kwanza", "Uliza: \"Je, huu unaonyesha dalili za ulaghai?\"", "Hatua zako mwenyewe bado zinatangulia"] }
          ],
          tryIt: "Andika Simama, Kagua, Piga simu kwenye kadi yako ya usalama. Kisha muulize msaidizi wa AI: \"Je, ujumbe huu unaonyesha dalili za ulaghai? Kifurushi chako kimezuiwa. Lipa $1.99 kupitia kiungo hiki leo au kitarudishwa.\" Linganisha jibu lake na dalili nne.",
          youCanNow: "kutumia tabia ya Simama, Kagua, Piga simu na kuiomba AI maoni ya pili kwa uangalifu.",
          quickCheck: [
            { objective: "O4", q: "Katika Simama, Kagua, Piga simu, \"Piga simu\" inamaanisha nini?", options: ["Piga namba iliyo katika ujumbe", "Mpigie tena mtu aliyekupigia", "Wasiliana na mtu au kampuni ukitumia namba unayoiamini tayari", "Mpigie rafiki akulipie"], answer: 2, why: "Piga simu inamaanisha kutumia namba kutoka kadi yako ya usalama, kadi ya benki, bili au tovuti uliyoiandika mwenyewe." },
            { objective: "O4", q: "Mpigaji simu anasema ni polisi na hupaswi kukata simu. Unaweza kufanya nini?", options: ["Kata simu; ni sawa kumkatia simu mtu yeyote", "Baki kwenye simu kwa vyovyote vile", "Mpe anwani yako", "Mlipe ili simu iishe"], answer: 0, why: "Simama inamaanisha unaweza kumkatia simu mtu yeyote, hata anayesema ni polisi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kulinda pesa zako na taarifa zako",
          minutes: 5,
          goal: "Orodhesha taarifa na malipo ambayo kamwe hutoi kwa mpigaji simu au ujumbe usioutarajia.",
          text: [
            "Kamwe usimpe vitu hivi mtu yeyote anayewasiliana nawe bila kutarajia: namba yako ya Social Security au ya Medicare, namba za benki au za kadi, nywila, au msimbo uliotumwa kwa ujumbe kwenye simu yako. Benki yako tayari inaijua namba ya akaunti yako; benki halisi haitakuomba nywila yako wala msimbo uliotumwa kwa ujumbe.",
            "Kamwe usimlipe mtu usiyemjua kwa kadi za zawadi, wire transfer, cryptocurrency au app ya malipo, na kamwe usiweke hundi benki kisha urudishe sehemu ya pesa. FTC inasema ofisi halisi za serikali hazitakuambia kamwe uhamishe pesa ili \"kuzilinda\", utoe pesa taslimu, au ununue dhahabu.",
            "Kamwe usimruhusu mpigaji simu kuunganishwa na kompyuta yako ili \"kuirekebisha\". Kama tayari ulitoa pesa au taarifa, chukua hatua haraka: piga simu benki yako ukitumia namba iliyo kwenye kadi yako na uieleze kilichotokea."
          ],
          steps: ["Kamwe usitoe namba za Social Security, Medicare, benki au kadi kwa mtu aliyewasiliana nawe bila kutarajia.", "Kamwe usitoe nywila wala misimbo iliyotumwa kwa ujumbe.", "Kamwe usiwalipe usiowajua kwa kadi za zawadi, wire, crypto au apps za malipo.", "Kama tayari ulilipa au ulitoa taarifa, piga simu benki yako mara moja kwa namba iliyo kwenye kadi yako."],
          words: [["Msimbo uliotumwa kwa ujumbe", "namba fupi inayotumwa kwenye simu yako kuthibitisha kwamba ni wewe kweli unayeingia."], ["Wire transfer", "kutuma pesa kwa njia ya kielektroniki; ni vigumu sana kuzirudisha."]],
          slides: [
            { title: "Kamwe usitoe", bullets: ["Namba za Social Security au Medicare", "Namba za benki au kadi, nywila", "Misimbo iliyotumwa kwenye simu yako"] },
            { title: "Kamwe usiwalipe usiowajua kwa", bullets: ["Kadi za zawadi au wire transfer", "Cryptocurrency au apps za malipo", "Pesa za hundi uliyoiweka benki sasa hivi"] },
            { title: "Ofisi halisi hazikuambii kamwe", bullets: ["Uhamishe pesa ili \"kuzilinda\"", "Utoe pesa taslimu au ununue dhahabu"] },
            { title: "Tayari umelipa?", bullets: ["Piga simu benki yako mara moja", "Tumia namba iliyo kwenye kadi yako"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Kwenye kadi yako ya usalama, andika: \"Sitoi kamwe namba zangu, nywila au misimbo kwa mtu yeyote anayewasiliana nami kwanza. Siwalipi kamwe nisiowajua kwa kadi za zawadi, wire au crypto.\"",
          youCanNow: "kulinda taarifa zako za binafsi na kukataa malipo ya hatari.",
          quickCheck: [
            { objective: "O5", q: "Benki halisi haitakuomba kamwe nini?", options: ["Kutembelea tawi", "Nywila yako au msimbo uliotumwa kwenye simu yako", "Kusoma taarifa ya akaunti yako", "Kupiga namba iliyo kwenye kadi yako"], answer: 1, why: "Benki yako tayari inaijua akaunti yako; haitakuomba nywila wala msimbo uliotumwa kwa ujumbe." },
            { objective: "O5", q: "Unagundua kwamba ulimpa mlaghai namba ya kadi yako saa moja iliyopita. Unafanya nini kwanza?", options: ["Subiri uone kitakachotokea", "Mpigie mlaghai tena", "Andika habari hiyo mtandaoni", "Piga simu benki yako mara moja ukitumia namba iliyo kwenye kadi yako"], answer: 3, why: "Kuchukua hatua haraka na benki yako ndiyo hatua ya kwanza kama tayari ulitoa pesa au taarifa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuripoti ulaghai na kupata msaada",
          minutes: 5,
          goal: "Taja wapi pa kuripoti ulaghai na wapi pa kupata msaada.",
          text: [
            "Kuripoti kunasaidia kuwazuia walaghai na kunaweza kukusaidia wewe. Nchini Marekani, unaweza kuripoti ulaghai kwa Federal Trade Commission kupitia ReportFraud.ftc.gov. Uhalifu wa mtandaoni unaweza pia kuripotiwa kwa Internet Crime Complaint Center ya FBI kupitia ic3.gov.",
            "Kama una umri wa miaka 60 au zaidi, National Elder Fraud Hotline (simu ya msaada kuhusu ulaghai dhidi ya wazee), inayoendeshwa na Wizara ya Sheria (Department of Justice), ni bure: piga 833-FRAUD-11 (833-372-8311). Tulipokagua, ilikuwa wazi Jumatatu hadi Ijumaa, saa 10 am hadi 6 pm kwa saa za Eastern, na msaada kwa Kiingereza, Kihispania na lugha nyingine. Kagua tovuti ya simu hiyo ya msaada kwa saa za sasa.",
            "Mtu akitumia taarifa zako, nenda IdentityTheft.gov upate mpango wa bure wa kurejesha hali yako. Kama ni ulaghai wa Medicare, piga 1-800-MEDICARE (1-800-633-4227). Tovuti halisi za kuripoti hazitakuomba kamwe ulipe ili urudishiwe pesa zako; yeyote anayefanya hivyo ni ulaghai mwingine."
          ],
          steps: ["Piga simu benki yako kwanza kama pesa zilichukuliwa.", "Ripoti kupitia ReportFraud.ftc.gov.", "Umri wa miaka 60 au zaidi: piga Elder Fraud Hotline, 833-372-8311.", "Kama utambulisho wako ulitumiwa: nenda IdentityTheft.gov.", "Jihadhari na yeyote anayetoza pesa ili kurudisha pesa zako."],
          words: [["Kuripoti", "kuiambia ofisi inayohusika kilichotokea ili ichukue hatua."], ["Wizi wa utambulisho", "mtu anapotumia taarifa zako za binafsi kujifanya kuwa wewe."]],
          slides: [
            { title: "Wapi pa kuripoti", bullets: ["ReportFraud.ftc.gov", "ic3.gov ya FBI kwa uhalifu wa mtandaoni"] },
            { title: "Umri wa miaka 60 au zaidi", bullets: ["National Elder Fraud Hotline", "833-FRAUD-11 (833-372-8311)", "Bure; kagua tovuti yake kwa saa za sasa"] },
            { title: "Msaada zaidi", bullets: ["IdentityTheft.gov kama taarifa zako zimetumiwa", "1-800-MEDICARE kwa ulaghai wa Medicare", "Kamwe usimlipe mtu \"kurudisha\" pesa zako"] }
          ],
          sources: [{ name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }, { name: "FBI Internet Crime Complaint Center", url: "https://www.ic3.gov/" }, { name: "FTC: What to know about identity theft", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "Medicare: Reporting fraud and abuse", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Kazi ya mwisho: maliza kadi yako ya usalama dhidi ya ulaghai. Ongeza mahali pa kuripoti ulaghai na namba ya Elder Fraud Hotline. Kisha pima jumbe hizi mbili kwa dalili nne: (1) \"Habari Babu, hii ni namba mpya, niko matatani, tuma $500 kwa kadi za zawadi\"; (2) kikumbusho kutoka duka lako la dawa kwamba dawa zako ziko tayari, bila kiungo na bila kuomba pesa.",
          youCanNow: "kutambua ulaghai, kuukagua kwa usalama, kulinda pesa zako, na kuuripoti mahali panapofaa.",
          quickCheck: [
            { objective: "O6", q: "IdentityTheft.gov ni kwa ajili ya nini?", options: ["Mpango wa bure wa kurejesha hali kama mtu ametumia taarifa zako", "Kununua bima ya utambulisho", "Kulipa kodi zako", "Kuripoti simu iliyopotea"], answer: 0, why: "IdentityTheft.gov inatoa mpango wa bure wa kurejesha hali taarifa zako zinapotumiwa." },
            { objective: "O6", q: "Kampuni inakupigia ikijitolea kukurudishia pesa ulizopoteza kwa ada. Hii ni nini?", options: ["Huduma ya serikali", "Marejesho ya kawaida", "Huenda ni ulaghai mwingine", "Benki unayoweza kuiamini"], answer: 2, why: "Tovuti halisi za kuripoti hazikuombi kamwe ulipe ili urudishiwe pesa zako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujilinda",
        questions: [
          { objective: "O4", q: "Hatua tatu za tabia ya usalama ni zipi?", options: ["Bofya, Lipa, Sahau", "Jibu, Toa, Tuma", "Subiri, Tumaini, Lipa", "Simama, Kagua, Piga simu"], answer: 3, why: "Simama, Kagua, Piga simu inampunguzia mlaghai kasi." },
          { objective: "O4", q: "Unapopiga simu kukagua, unapaswa kutumia namba ipi?", options: ["Iliyo kwenye kadi yako ya usalama, kadi au bili", "Iliyo katika ujumbe", "Anayokupa mpigaji simu", "Iliyo kwenye dirisha linalojitokeza"], answer: 0, why: "Namba unazoziamini tayari tu ndizo salama." },
          { objective: "O5", q: "Mpigaji simu anasema uhamishe akiba yako kwenda \"akaunti salama\" ili kuilinda. Hii ni:", options: ["Ushauri mzuri", "Sheria ya benki", "Ulaghai; ofisi halisi haziombi hivi kamwe", "Sharti la kodi"], answer: 2, why: "FTC inasema ofisi halisi hazikuambii kamwe uhamishe pesa ili kuzilinda." },
          { objective: "O6", q: "Unaweza kuripoti ulaghai kwa FTC wapi?", options: ["Dirisha linalojitokeza", "Tovuti ya mlaghai", "Chapisho la mitandao ya kijamii", "ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov ni tovuti ya FTC ya kuripoti." },
          { objective: "O6", q: "Mtu anajitolea kukurudishia pesa ulizopoteza kwa ada. Hii ni nini?", options: ["Mpango wa serikali", "Msaada wa kawaida", "Huenda ni ulaghai mwingine", "Ushauri wa bure"], answer: 2, why: "Tovuti halisi za kuripoti hazitozi kamwe pesa ili kurudisha pesa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Usalama wa AI na Kutambua Ulaghai kwa Wazee",
    questions: [
      { objective: "O1", q: "Ofisi ipi ya Marekani inaeleza dalili nne za ulaghai?", options: ["Idara ya hali ya hewa", "Federal Trade Commission (FTC)", "Posta", "Kampuni ya simu"], answer: 1, why: "FTC inawalinda wateja dhidi ya ulaghai." },
      { objective: "O1", q: "Ujumbe unasema umeshinda zawadi lakini lazima ulipe ada kwanza. Hii ni:", options: ["Dalili ya ulaghai", "Zawadi ya kawaida", "Sheria ya kodi", "Sheria ya benki"], answer: 0, why: "Zawadi inayohitaji ada ni ulaghai wa kawaida." },
      { objective: "O1", q: "\"Usikate simu na usimwambie mtu yeyote\" ni dalili ya:", options: ["Shinikizo, dalili ya ulaghai", "Huduma nzuri", "Dharura halisi", "Simu ya daktari"], answer: 0, why: "Shinikizo na usiri ni dalili za ulaghai." },
      { objective: "O1", q: "Njia ipi ya malipo ni ishara ya hatari mtu usiyemjua anapoiomba?", options: ["Kulipa bili yako mwenyewe ya huduma kwenye tovuti yake rasmi", "Kadi za zawadi", "Kulipa kwenye kaunta ya duka la vyakula", "Hundi unayomtumia mwenye nyumba wako kwa posta"], answer: 1, why: "Walaghai wanaomba kadi za zawadi kwa sababu ni vigumu kuzifuatilia." },
      { objective: "O2", q: "Kuiga sauti (voice cloning) ni nini?", options: ["Somo la kuimba", "Kurekebisha simu", "Kutumia AI kunakili sauti ya mtu", "Aina ya kifaa cha kusaidia kusikia"], answer: 2, why: "AI inaweza kuiga sauti kutoka rekodi fupi." },
      { objective: "O2", q: "Katika simu ya dharura bandia, mtu wa pili anaweza kujifanya kuwa:", options: ["Mpishi", "Mbwa wa jirani yako", "Mtangazaji wa hali ya hewa", "Wakili au polisi"], answer: 3, why: "Walaghai wanaongeza maafisa bandia ili waonekane wa kweli." },
      { objective: "O2", q: "Neno la siri la familia linakusaidia:", options: ["Kufungua simu yako", "Kulipa bili", "Kukagua nani anapiga simu kweli", "Kubadilisha nywila yako"], answer: 2, why: "Familia yako halisi tu ndiyo inalijua." },
      { objective: "O3", q: "Je, tahajia isiyo na kosa inathibitisha kwamba ujumbe ni wa kweli?", options: ["Hapana", "Ndiyo", "Siku za Jumapili tu", "Kutoka benki tu"], answer: 0, why: "AI inaandika jumbe bandia zisizo na kosa la tahajia." },
      { objective: "O3", q: "Ujumbe mfupi unasema kifurushi chako kimezuiwa; lipa ada ndogo kupitia kiungo. Unapaswa:", options: ["Kubofya na kulipa", "Kuwatumia marafiki", "Kujibu kwa namba ya kadi yako", "Kutobofya; kukagua na kampuni ya vifurushi wewe mwenyewe"], answer: 3, why: "Viungo katika jumbe usizozitarajia vinakupeleka kwa walaghai." },
      { objective: "O3", q: "Dirisha linalojitokeza linasema \"Virusi! Piga namba hii sasa.\" Wewe:", options: ["Unaipiga", "Hupigi; unalifunga au unazima kifaa", "Unalipia matengenezo", "Unawaruhusu kuunganishwa na kompyuta yako"], answer: 1, why: "Maonyo ya virusi kwenye madirisha yanayojitokeza ni ulaghai wa kawaida." },
      { objective: "O3", q: "Kulingana na Medicare, Medicare haitafanya kamwe nini?", options: ["Kukutumia taarifa kwa posta", "Kukupigia simu kukuuzia kitu au kuja nyumbani kwako", "Kulipia matibabu", "Kuwa na tovuti"], answer: 1, why: "Medicare inasema haitapiga simu kuuza kitu wala kuja nyumbani kwako." },
      { objective: "O4", q: "Katika Simama, Kagua, Piga simu, \"Simama\" inamaanisha:", options: ["Acha kulipa bili", "Acha kutumia simu yako milele", "Acha kuongea na familia", "Usibofye, usilipe wala usitoe kitu"], answer: 3, why: "Kusimama kunaondoa haraka ya mlaghai." },
      { objective: "O4", q: "Kabla ya kubandika ujumbe kwenye AI kwa maoni ya pili, unapaswa:", options: ["Kuondoa taarifa za binafsi", "Kuongeza namba yako ya benki", "Kuongeza nywila yako", "Kuongeza anwani yako"], answer: 0, why: "Taarifa za binafsi haziingii kamwe kwenye AI." },
      { objective: "O4", q: "Maoni ya msaidizi wa AI kuhusu ujumbe ni:", options: ["Uamuzi wa kisheria", "Sahihi kila wakati", "Msaidizi, si neno la mwisho", "Uamuzi wa benki"], answer: 2, why: "AI inaweza kukosea; hatua zako mwenyewe zinatangulia." },
      { objective: "O5", q: "Benki halisi haitakuomba kamwe:", options: ["Kupiga namba yake", "Kutembelea tawi", "Kusoma taarifa ya akaunti yako", "Nywila yako au msimbo uliotumwa kwa ujumbe"], answer: 3, why: "Benki haziombi nywila wala misimbo." },
      { objective: "O5", q: "Mtu anakuomba uweke hundi yake benki kisha umrudishie sehemu. Hii ni:", options: ["Sheria ya benki", "Fadhila ya kawaida", "Ulaghai wa hundi bandia", "Marejesho ya kodi"], answer: 2, why: "Hundi inakataliwa na unapoteza pesa ulizotuma." },
      { objective: "O5", q: "Kama tayari ulimtumia mlaghai pesa, simu ya kwanza ni kwa:", options: ["Mlaghai", "Benki yako, ukitumia namba iliyo kwenye kadi yako", "Namba ya dirisha linalojitokeza", "Hakuna mtu"], answer: 1, why: "Benki yako inaweza kuzuia au kurudisha malipo." },
      { objective: "O6", q: "Namba ya National Elder Fraud Hotline ni:", options: ["833-372-8311", "911", "411", "Namba kutoka ujumbe mfupi"], answer: 0, why: "833-FRAUD-11 (833-372-8311) ni simu ya msaada ya Wizara ya Sheria (DOJ)." },
      { objective: "O6", q: "Mtu akitumia taarifa zako za binafsi, mpango wa bure wa kurejesha hali uko:", options: ["IdentityTheft.gov", "Tangazo linalojitokeza", "Tovuti ya mlaghai", "Ukurasa wa mitandao ya kijamii"], answer: 0, why: "IdentityTheft.gov ni tovuti ya FTC ya kurejesha hali." },
      { objective: "O6", q: "Tovuti ya FBI ya kuripoti uhalifu wa mtandaoni ni:", options: ["fbi-refund.win", "ic3.gov", "kiungo cha ujumbe mfupi", "tovuti ya kadi za zawadi"], answer: 1, why: "IC3 ni Internet Crime Complaint Center ya FBI." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      4,
      8,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Namba zinazoaminika na hatua",
        objective: "O4",
        notYet: "Namba zinazoaminika chini ya tatu, au namba iliyonakiliwa kutoka ujumbe.",
        meets: "Namba tatu zinazoaminika (familia, benki kutoka nyuma ya kadi, ofisi ya daktari) na hatua za Simama, Kagua, Piga simu zimeandikwa.",
        exceeds: "Anaweza kueleza kila namba ilitoka wapi na kwa nini inaweza kuaminika."
      },
      {
        name: "Neno la siri la familia",
        objective: "O2",
        notYet: "Hakuna neno la siri la familia, au ni rahisi kubahatisha au limewekwa mtandaoni.",
        meets: "Neno la siri la familia limeandikwa kwenye kadi na familia imeambiwa.",
        exceeds: "Amefanya mazoezi ya kuliuliza katika simu ya dharura ya kuigiza."
      },
      {
        name: "Mahali pa kuripoti",
        objective: "O6",
        notYet: "Hakuna mahali pa kuripoti, au ni pasipo sahihi.",
        meets: "Angalau sehemu mbili sahihi, kama ReportFraud.ftc.gov na Elder Fraud Hotline.",
        exceeds: "Pia anaorodhesha IdentityTheft.gov na anasema kupiga simu benki kwanza kama pesa zilichukuliwa."
      },
      {
        name: "Jumbe za mfano zimepimwa",
        objective: "O1",
        notYet: "Hakugundua kwamba ujumbe wa mfano ulikuwa ulaghai.",
        meets: "Alipima jumbe zote mbili za mfano kwa usahihi na kutaja dalili alizoziona.",
        exceeds: "Alisema angefanya nini baadaye, akitumia Simama, Kagua, Piga simu."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoweka kadi yao ya usalama dhidi ya ulaghai karibu na simu katika ufuatiliaji wa siku 30",
      "Wanafunzi wanaoripoti kutambua na kuepuka simu, ujumbe mfupi au barua pepe ya ulaghai ndani ya siku 30 (utafiti wa kufuatilia)",
      "Familia zinazokubaliana neno la siri la familia"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, na kompyuta au tableti kama ipo",
      "Kadi tupu au karatasi na kalamu kwa kadi ya usalama dhidi ya ulaghai",
      "Jumbe mbili za mfano zilizochapishwa (mmoja wa ulaghai, mmoja halisi) kwa kazi ya mwisho",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi bila haraka: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Tumia jumbe za mfano za kubuni; usiwaombe kamwe wanafunzi kutoa namba halisi za akaunti, Medicare au Social Security.",
      "Igizeni simu bandia ya mjukuu ili wanafunzi wafanye mazoezi ya kukata simu na kupiga tena.",
      "Waambie wanafunzi kwamba mtu yeyote anaweza kudanganywa; kutapeliwa si jambo la aibu, na kuripoti kunasaidia.",
      "Saa na namba za simu za msaada zinaweza kubadilika; kagua tovuti rasmi kabla ya kipindi.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
