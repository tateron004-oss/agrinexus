"use strict";

// Koach Learn course (Swahili translation of youth/youth-ai-side-hustles.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-side-hustles-sw",
  lang: "sw",
  translationOf: "youth-ai-side-hustles",
  category: "Youth",
  name: "AI kwa Ujasiriamali na Kazi za Pembeni (Vijana)",
  skills: "Kupata wazo la kazi ya pembeni linalokufaa, Kukagua sheria za kazi za vijana na kupata ruhusa ya mzazi, Kuweka bei ya huduma, Kutengeneza tangazo rahisi kwa AI, Kufuatilia pesa zinazoingia na kutoka, Kuwahudumia wateja vizuri",
  outcome: "kupanga kazi ndogo ya pembeni iliyo salama kwa ruhusa ya mzazi au mlezi: kuchagua wazo linalofaa ujuzi wako, kuweka bei ya haki, kutengeneza tangazo rahisi kwa msaada wa AI, na kufuatilia kila dola unayopata na kutumia.",
  about: [
    "Kozi hii ni kwa vijana wa miaka 13 hadi 18 wanaotaka kupata pesa zao wenyewe: kutunza wanyama wa nyumbani, kufundisha watoto wadogo, kukata nyasi, kuchora sanaa kwa oda, kuhariri video kwa vikundi vya mtaani, au kuuza kazi za mikono.",
    "Utapata wazo linalofaa ujuzi na ratiba yako, utakagua sheria za wafanyakazi vijana, utaweka bei, utatengeneza tangazo, utafuatilia pesa zako na utajifunza jinsi ya kuwahudumia wateja ili warudi. AI ni mwenzako wa kupanga njia yote.",
    "Muhimu: ongea na mzazi au mlezi kabla ya kuanza, na waache washughulikie apps za pesa, mikataba au akaunti za kuuza mtandaoni zinazohitaji mtu mzima. Kagua sheria ya umri ya kila zana ya AI na weka shule kwanza. Kila somo ni kama dakika tano na linaisha na kazi ya \"Jaribu sasa\"."
  ],
  finalTask: "Tengeneza mpango wa ukurasa mmoja wa kazi yako ya pembeni na umwonyeshe mzazi au mlezi: huduma yako na ni ya nani, bei yako na sababu yake, tangazo lililotengenezwa kwa msaada wa AI (bila anwani ya nyumbani), daftari rahisi la pesa lenye safu za tarehe, pesa zinazoingia, pesa zinazotoka na maelezo, na sheria mbili za usalama utakazofuata.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wa miaka 13 hadi 18 nchini Marekani wanaotaka kupata pesa zao wenyewe kwa kutunza wanyama, kufundisha, kukata nyasi, sanaa kwa oda, kuhariri video kwa vikundi vya mtaani au kuuza kazi za mikono.",
    startingPoint: "Wana ujuzi na mambo wanayopenda ambayo wengine wanaweza kulipia, na huenda wamefanya kazi ndogo ndogo kwa familia au majirani. Wachache wameweka bei, wametengeneza tangazo, wamefuatilia pesa zinazoingia na kutoka, au wamekagua sheria za kazi za vijana, kodi na usalama.",
    gap: "Vijana wanaoanza kazi ya pembeni bila mpango wanaweza kuweka bei ya chini mno, kupoteza hesabu ya pesa, kukosa sheria za kodi na kazi za vijana, au kujiweka hatarini mbele ya watu wasiowajua. Mpango rahisi uliofanywa pamoja na mzazi au mlezi unawasaidia kupata pesa kwa usalama, kujifunza ujuzi halisi wa biashara na kujenga kujiamini.",
    constraints: [
      "Mzazi au mlezi anakubali mpango na anashughulikia apps za malipo, mikataba na akaunti za kuuza zinazohitaji mtu mzima",
      "Sheria za kazi za vijana na kodi zinatofautiana kwa kila jimbo na hubadilika; wanafunzi wanakagua ofisi ya kazi ya jimbo lao na irs.gov",
      "Usalama: hakuna anwani ya nyumbani mtandaoni wala kwenye matangazo; wateja wapya wanakutana nao pamoja na mtu mzima",
      "Faragha: hakuna namba za benki wala za kadi ndani ya zana za AI",
      "Shule kwanza; saa chache kila wiki"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia ujuzi wako na saa ulizo nazo kweli", action: "kuchagua wazo salama la kazi ya pembeni linalofaa ratiba yako na kukagua kwamba watu wangelilipia", standard: "kwa kuuliza angalau watu watatu" },
    { id: "O2", condition: "Pamoja na mzazi au mlezi", action: "kukagua sheria za kazi za vijana za serikali kuu na za jimbo na sheria ya IRS ya kodi ya kujiajiri, na kukubaliana kuhusu sheria za usalama", standard: "zikiwa na angalau sheria mbili za usalama mnazokubaliana wote wawili" },
    { id: "O3", condition: "Kwa huduma moja", action: "kuweka bei ya haki inayolipa gharama zako na muda wako na inayolingana na bei za mtaani", standard: "ukiwa umeikagua na watu halisi, si AI peke yake" },
    { id: "O4", condition: "Ukitumia AI na zana ya bure ya kubuni", action: "kutengeneza tangazo lenye kichwa, vipengele vitatu vifupi, bei na mwito wa kuchukua hatua", standard: "bila anwani ya nyumbani na likiwa na mawasiliano yaliyokubaliwa na mzazi au mlezi wako" },
    { id: "O5", condition: "Kwa kila kazi na kila ununuzi", action: "kufuatilia pesa zinazoingia na kutoka katika daftari la safu nne na kuhesabu faida yako", standard: "ukiandika kila kitu siku hiyo hiyo na kukikagua kila wiki" },
    { id: "O6", condition: "Kwa kila mteja", action: "kuthibitisha maelezo ya kila kazi kwa ujumbe wa adabu na kushughulikia matatizo", standard: "ukimwambia mzazi au mlezi wako kuhusu jambo lolote la hatari au ambalo hujalipwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua na kupanga kazi yako ya pembeni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata wazo linalokufaa",
          minutes: 5,
          goal: "Chagua wazo la kazi ya pembeni linalofaa ujuzi wako, muda wako na mtaa wako.",
          text: [
            "Kazi bora ya pembeni inatumia kitu unachokifanya vizuri tayari na inatatua tatizo la mtu aliye karibu. Uko hodari wa hesabu? Fundisha watoto wadogo. Unapenda wanyama? Tunza wanyama au tembeza mbwa. Uko hodari wa video? Hariri video fupi kwa timu au kanisa la mtaani.",
            "Uliza AI: \"Nina miaka 15, nina saa 5 kwa wiki, niko hodari wa kuchora na michezo ya video, na ninaishi karibu na bustani. Nipe mawazo 10 ya kazi ya pembeni yaliyo salama kwa kijana.\" Kisha chagua mawazo yanayofaa muda wako halisi na ratiba ya shule.",
            "Hakikisha kuna watu wanaoitaka. Uliza majirani, marafiki wa familia au wanafunzi wenzako watatu: \"Ungelipia hii?\""
          ],
          steps: ["Andika ujuzi wako na saa ulizo nazo kweli.", "Omba AI mawazo 10 salama yanayolingana.", "Futa mawazo yasiyofaa shule au ratiba yako.", "Uliza watu watatu kama wangelipia wazo lako bora."],
          words: [["Kazi ya pembeni", "njia ndogo ya kupata pesa nje ya shule au kazi kuu (kwa Kiingereza \"side hustle\")."], ["Mteja", "mtu anayelipia kile unachotoa."]],
          slides: [
            { title: "Anza na unachokifanya vizuri", bullets: ["Hesabu: kufundisha", "Wanyama: kutunza wanyama", "Video: kuhariri kwa vikundi vya mtaani"] },
            { title: "Omba AI mawazo", bullets: ["Umri wako, ujuzi wako na saa zako", "\"Salama kwa kijana\"", "Futa yanayogongana na shule"] },
            { title: "Hakikisha watu wanaitaka", bullets: ["Uliza watu watatu", "\"Ungelipia hii?\""] }
          ],
          tryIt: "Andika ujuzi wako na saa ulizo nazo kweli kila wiki. Omba AI mawazo 10 salama ya kazi ya pembeni, chagua bora zaidi, na uwaulize watu watatu kama wangelilipia.",
          youCanNow: "kuchagua wazo la kazi ya pembeni linalokufaa na ambalo watu wanalitaka.",
          quickCheck: [
            { objective: "O1", q: "Nini kinafanya wazo la kazi ya pembeni kuwa imara?", options: ["Wazo linalosikika poa zaidi mtandaoni", "Linatumia ujuzi ulio nao na linatatua tatizo la mtu aliye karibu", "Lile linalohitaji saa nyingi zaidi", "Chochote anachofanya rafiki"], answer: 1, why: "Kazi bora ya pembeni inatumia kitu unachokifanya vizuri tayari na inatatua tatizo la karibu." },
            { objective: "O1", q: "Unalipenda wazo lako, lakini hakuna unayemuuliza angelilipia. Unafanya nini?", options: ["Kuanza tu na kutumaini", "Kupandisha bei", "Kuendelea kuuliza hadi mtu akubali", "Kujaribu wazo jingine kutoka kwenye orodha yako"], answer: 3, why: "Kuuliza watu kunakagua kama wanalitaka; kama hakuna angelipia, chagua wazo jingine." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sheria, usalama na mzazi au mlezi wako",
          minutes: 5,
          goal: "Kagua sheria za kazi za vijana na ukubaliane na mzazi au mlezi kuhusu sheria za usalama.",
          text: [
            "Baadhi ya kazi zina sheria za umri. Kwa sheria ya serikali kuu ya Marekani, kulea watoto kwa muda mfupi na kazi ndogo za nyumbani kwa watu binafsi hazihusiki na sheria za ajira ya watoto, na kazi kwa biashara inayomilikiwa kabisa na wazazi wako ina sheria maalum. Kazi nyingine nyingi zinahitaji uwe na miaka 14 au zaidi, na hakuna aliye chini ya miaka 18 anayeruhusiwa kufanya kazi ya hatari. Majimbo yanaweza kuwa na sheria kali zaidi, kwa hiyo kagua ofisi ya kazi ya jimbo lako.",
            "Sheria za pesa: kama mapato yako halisi ya kujiajiri ni $400 au zaidi kwa mwaka, IRS (ofisi ya kodi ya Marekani) inasema lazima ujaze fomu na ulipe kodi ya kujiajiri, bila kujali umri wako. Mwombe mzazi au mlezi akusaidie kutunza kumbukumbu na kukagua irs.gov.",
            "Sheria za usalama ndizo muhimu zaidi: mzazi au mlezi anajua uko wapi na unamfanyia nani kazi, unakutana na wateja wapya pamoja na mtu mzima, huingii kamwe peke yako nyumbani kwa mtu usiyemjua, na hauweki kamwe anwani ya nyumbani kwenu mtandaoni. Apps nyingi za malipo na tovuti za kuuza zinahitaji mtu mzima, kwa hiyo mwachie mzazi au mlezi wako azishughulikie."
          ],
          steps: ["Kagua sheria za kazi za vijana za serikali kuu na za jimbo lako.", "Mwonyeshe mzazi au mlezi mpango wako.", "Kubalianeni sheria za usalama pamoja.", "Mwachie mtu mzima ashughulikie apps za malipo na akaunti za kuuza."],
          words: [["Kujiajiri", "kujifanyia kazi wewe mwenyewe badala ya kumfanyia bosi."], ["Mapato halisi", "pesa ulizopata ukiondoa ulizotumia kuzipata."]],
          sources: [
            { name: "Idara ya Kazi ya Marekani (U.S. Department of Labor), Fact Sheet #43: Sheria za ajira ya watoto kwa kazi zisizo za kilimo", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
            { name: "IRS: Kodi ya kujiajiri (kodi za Social Security na Medicare)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" }
          ],
          slides: [
            { title: "Sheria za kazi za vijana", bullets: ["Kulea watoto kwa muda mfupi na kazi za nyumbani: hazihusiki na sheria za serikali kuu", "Kazi nyingine nyingi: miaka 14 na zaidi", "Hakuna kazi ya hatari chini ya miaka 18", "Kagua sheria za jimbo lako"] },
            { title: "Sheria za pesa", bullets: ["IRS: mapato halisi ya kujiajiri ya $400+ yanamaanisha kujaza fomu", "Umri haujalishi", "Tunza kumbukumbu kwa msaada wa mzazi"] },
            { title: "Usalama kwanza", bullets: ["Mtu mzima anajua uko wapi", "Kutana na wateja wapya pamoja na mtu mzima", "Usiweke kamwe anwani ya nyumbani"] }
          ],
          tryIt: "Tafuta sheria za kazi za vijana za jimbo lako na usome ukurasa wa IRS kuhusu kodi ya kujiajiri pamoja na mzazi au mlezi. Andika sheria tatu za usalama mnazokubaliana wote wawili.",
          youCanNow: "kukagua sheria za kazi yako ya pembeni na kuweka sheria za usalama pamoja na mzazi au mlezi.",
          quickCheck: [
            { objective: "O2", q: "Kwa sheria ya serikali kuu, ni kazi ya aina gani hakuna aliye chini ya miaka 18 anayeruhusiwa kufanya?", options: ["Kufundisha", "Kutunza wanyama", "Kazi ya hatari", "Kuchora sanaa"], answer: 2, why: "Sheria ya serikali kuu inamkataza yeyote aliye chini ya miaka 18 kufanya kazi ya hatari." },
            { objective: "O2", q: "Mteja mpya anakuomba uje peke yako nyumbani kwake mkutane. Unafanya nini?", options: ["Kukutana naye pamoja na mzazi au mlezi, anayejua uko wapi", "Kwenda peke yako ili uonyeshe adabu", "Kumtumia anwani ya nyumbani kwenu", "Kumwomba alipe kwanza"], answer: 0, why: "Kutana na wateja wapya pamoja na mtu mzima na usiingie kamwe peke yako nyumbani kwa mtu usiyemjua." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuweka bei ya haki",
          minutes: 5,
          goal: "Weka bei inayolipa gharama zako, inakulipa kwa haki na inawafaa wateja wako.",
          text: [
            "Ili kuweka bei, angalia mambo matatu: gharama zako (vifaa, usafiri), wanachotoza vijana wengine au huduma za mtaani zinazofanana, na thamani ya muda wako.",
            "Omba AI ikusaidie kufikiri, si kukuamulia: \"Ninatembeza mbwa kwa dakika 30. Nisaidie kufikiri kuhusu bei ya haki kwa kijana katika mji mdogo. Niulize maswali gani?\" Kisha waulize watu halisi wanacholipa mtaani, kwa sababu AI haijui mtaa wako.",
            "Andika bei yako waziwazi, kwa mfano \"Kutembeza mbwa, dakika 30\" pamoja na kiasi. Iwe rahisi na sawa kwa kila mtu."
          ],
          steps: ["Jumlisha gharama zako kwa kila kazi.", "Waulize watu huduma zinazofanana zinagharimu kiasi gani mtaani.", "Amua thamani ya muda wako.", "Andika bei moja wazi kwa kila huduma."],
          words: [["Gharama", "unachotumia ili kufanya kazi."], ["Faida", "pesa zinazobaki baada ya kulipa gharama zako."]],
          slides: [
            { title: "Mambo matatu yanaweka bei yako", bullets: ["Gharama zako", "Wanachotoza wengine mtaani", "Thamani ya muda wako"] },
            { title: "AI inakusaidia kufikiri", bullets: ["Uliza maswali ya kuzingatia", "Waulize watu halisi bei za mtaani", "AI haijui mtaa wako"] },
            { title: "Iwe wazi", bullets: ["Bei moja kwa kila huduma", "Sawa kwa kila mtu"] }
          ],
          tryIt: "Andika gharama zako kwa kazi moja, waulize watu wawili wanacholipa kwa kitu kinachofanana, na uandike bei moja wazi kwa huduma yako.",
          youCanNow: "kuweka bei ya haki na iliyo wazi kwa kazi yako ya pembeni.",
          quickCheck: [
            { objective: "O3", q: "Ni mambo gani matatu yanakusaidia kuweka bei?", options: ["Gharama zako, bei za mtaani na thamani ya muda wako", "Kisio la rafiki yako tu", "Bei ya juu zaidi unayoweza kupata mtandaoni", "Chochote AI inachosema"], answer: 0, why: "Bei ya haki inalipa gharama zako, inalingana na bei za mtaani na inakulipa kwa muda wako." },
            { objective: "O3", q: "AI inapendekeza bei ya kukata nyasi. Unafanya nini kabla ya kuitumia?", options: ["Kuitumia mara moja", "Kuizidisha mara mbili", "Kumtoza kila mteja bei tofauti", "Kuwauliza watu halisi wanacholipa mtaani"], answer: 3, why: "AI haijui mtaa wako, kwa hiyo kagua bei za mtaani na watu halisi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua na kupanga kazi yako ya pembeni",
        questions: [
          { objective: "O1", q: "Wazo bora la kazi ya pembeni kwa kawaida:", options: ["Linachukua muda wako wote wa shule", "Ni chochote kinachopendwa mtandaoni", "Linatumia ujuzi ulio nao na linatatua tatizo la karibu", "Linahitaji vifaa vya bei ghali"], answer: 2, why: "Ujuzi pamoja na hitaji halisi vinaleta wazo zuri." },
          { objective: "O1", q: "Unakaguaje kwamba watu wanalitaka wazo lako?", options: ["Kuwauliza watu wachache kama wangelilipia", "Kudhani tu wanalitaka", "Kuuliza AI tu", "Kuweka anwani yako mtandaoni"], answer: 0, why: "Majibu ya watu halisi yanaonyesha kama kweli wanalitaka." },
          { objective: "O2", q: "Kwa mujibu wa IRS, sheria za kodi ya kujiajiri:", options: ["Zinahusu kipindi cha kiangazi tu", "Zinawahusu watu wazima tu", "Haziwahusu vijana kamwe", "Zinahusika bila kujali umri wako"], answer: 3, why: "IRS inasema sheria hizi zinahusika bila kujali umri." },
          { objective: "O2", q: "Ipi ni sheria nzuri ya usalama?", options: ["Kwenda peke yako nyumbani kwa mtu usiyemjua", "Kukutana na wateja wapya pamoja na mtu mzima", "Kuweka anwani ya nyumbani kwenye tangazo lako", "Kuficha mipango yako"], answer: 1, why: "Kuwa na mtu mzima pamoja nawe kunakuweka salama." },
          { objective: "O3", q: "Kwa nini uwaulize watu halisi kuhusu bei za mtaani?", options: ["AI iko sahihi kila wakati", "AI haijui mtaa wako", "Bei ni sawa kila mahali", "Sheria inalazimisha"], answer: 1, why: "Watu wa mtaani wanajua bei za mtaani." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha kazi yako ya pembeni",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza tangazo rahisi kwa AI",
          minutes: 5,
          goal: "Andika na ubuni tangazo lililo wazi kwa huduma yako.",
          text: [
            "Tangazo linawaambia watu unachofanya, kinagharimu kiasi gani na jinsi ya kukupata. AI inaweza kusaidia maneno: \"Andika tangazo fupi la kirafiki kwa huduma ya kijana ya kutembeza mbwa. Weka kichwa, vipengele 3 na mwito wa kuchukua hatua.\"",
            "Libuni kwa zana ya bure kama Canva, Google Docs au Google Slides. Tumia kichwa kimoja kikubwa, mistari mifupi na rangi zinazosomeka kwa urahisi.",
            "Usalama: usiweke kamwe anwani ya nyumbani kwenye tangazo. Tumia namba ya simu au barua pepe ya mzazi au mlezi, au mawasiliano anayoyakubali. Omba ruhusa kabla ya kubandika matangazo kwenye mbao za matangazo madukani, maktaba au vituo vya jamii."
          ],
          steps: ["Omba AI kichwa, vipengele 3 na mwito wa kuchukua hatua.", "Rekebisha maneno ili yasikike kama wewe.", "Libuni kwa zana ya bure.", "Tumia mawasiliano yaliyokubaliwa na mzazi au mlezi, kamwe si anwani yako."],
          words: [["Mwito wa kuchukua hatua", "mstari unaowaambia watu wafanye nini baadaye, kama \"Tuma ujumbe kuagiza matembezi\" (kwa Kiingereza \"call to action\")."], ["Kichwa", "maneno makubwa juu kabisa ya tangazo."]],
          slides: [
            { title: "Tangazo linasema", bullets: ["Unachofanya", "Kinagharimu kiasi gani", "Jinsi ya kukupata"] },
            { title: "AI inaandika, wewe unarekebisha", bullets: ["Kichwa, vipengele 3, mwito wa kuchukua hatua", "Lifanye lisikike kama wewe", "Libuni kwa Canva au Google Docs"] },
            { title: "Kaa salama", bullets: ["Hakuna anwani ya nyumbani", "Tumia mawasiliano yaliyokubaliwa na mzazi wako", "Omba ruhusa kabla ya kubandika matangazo"] }
          ],
          tryIt: "Omba AI iandike maneno ya tangazo la huduma yako. Yarekebishe ili yasikike kama wewe, libuni kwa zana ya bure, na uongeze mawasiliano yaliyokubaliwa na mzazi au mlezi wako.",
          youCanNow: "kutengeneza tangazo lililo wazi na salama la kazi yako ya pembeni.",
          quickCheck: [
            { objective: "O4", q: "Kichwa cha tangazo ni nini?", options: ["Namba ya mawasiliano", "Mstari mkubwa juu unaosema unachotoa", "Maandishi madogo chini", "Orodha ya bei"], answer: 1, why: "Tangazo linatumia kichwa kimoja kikubwa ili watu waone haraka unachotoa." },
            { objective: "O4", q: "Maneno ya tangazo uliyopata kutoka AI yana jina la mtaa wa nyumbani kwenu. Unafanya nini?", options: ["Kuliacha ili watu wakupate", "Kulifanya jina la mtaa liwe dogo zaidi", "Kuliondoa na kutumia mawasiliano yaliyokubaliwa na mzazi au mlezi wako", "Kuweka tangazo mtandaoni tu"], answer: 2, why: "Usiweke kamwe anwani ya nyumbani kwenye tangazo; tumia mawasiliano yaliyokubaliwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufuatilia pesa zinazoingia na zinazotoka",
          minutes: 5,
          goal: "Tengeneza daftari rahisi la pesa na ulitumie kwa kila kazi.",
          text: [
            "Wenye biashara wanafuatilia kila dola. Daftari rahisi la pesa lina safu nne: tarehe, pesa zinazoingia, pesa zinazotoka, na maelezo (nani alilipa, ulinunua nini).",
            "Litengeneze kwa Google Sheets, Microsoft Excel, au daftari la karatasi. AI inaweza kusaidia: \"Tengeneza jedwali rahisi la kufuatilia pesa kwa biashara ya kijana ya kutunza wanyama, lenye jumla chini.\" Usiandike kamwe namba za benki au za kadi ndani ya AI.",
            "Liangalie kila wiki. Pesa zinazoingia ukiondoa pesa zinazotoka ndiyo faida yako. Kumbukumbu zako pia zinamsaidia mzazi au mlezi kwa maswali yoyote ya kodi."
          ],
          steps: ["Tengeneza safu nne: tarehe, pesa zinazoingia, pesa zinazotoka, maelezo.", "Andika kila kazi na kila ununuzi siku hiyo hiyo.", "Ongeza mstari wa jumla.", "Likague kila wiki: pesa zinazoingia ukiondoa zinazotoka ni faida."],
          words: [["Spreadsheet", "jedwali kwenye kompyuta, kama Google Sheets au Excel."], ["Faida", "pesa zinazoingia ukiondoa pesa zinazotoka."]],
          slides: [
            { title: "Fuatilia kila dola", bullets: ["Tarehe", "Pesa zinazoingia", "Pesa zinazotoka", "Maelezo"] },
            { title: "Zana za bure", bullets: ["Google Sheets au Excel", "Daftari la karatasi pia linafaa", "Usiweke kamwe namba za benki ndani ya AI"] },
            { title: "Kagua kila wiki", bullets: ["Pesa zinazoingia ukiondoa zinazotoka = faida", "Kumbukumbu zinasaidia kwa maswali ya kodi"] }
          ],
          tryIt: "Tengeneza daftari la pesa lenye safu nne. Ongeza kazi mbili za kubuni au za kweli na ununuzi mmoja, kisha uhesabu faida yako.",
          youCanNow: "kufuatilia pesa za kazi yako ya pembeni na kujua faida yako.",
          quickCheck: [
            { objective: "O5", q: "Nini kinaandikwa kwenye safu ya \"pesa zinazotoka\"?", options: ["Bakshishi ulizopokea", "Malipo kutoka kwa wateja", "Faida yako", "Ulichotumia, kama vifaa au usafiri"], answer: 3, why: "Pesa zinazotoka ni unachotumia; pesa zinazoingia ni wateja wanachokulipa." },
            { objective: "O5", q: "Unataka AI ikusaidie kutengeneza daftari lako. Unaacha nini nje?", options: ["Namba zako za benki au za kadi", "Majina ya safu", "Neno \"jumla\"", "Aina ya biashara yako"], answer: 0, why: "Usiandike kamwe namba za benki au za kadi ndani ya zana ya AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwahudumia wateja vizuri",
          minutes: 5,
          goal: "Andika jumbe zilizo wazi na za adabu na ushughulikie tatizo na mteja.",
          text: [
            "Wateja wanarudi, na wanawaambia marafiki, unapofika kwa wakati, una adabu na ni mkweli. Thibitisha kila kazi: siku, saa, bei na utakachofanya.",
            "AI inaweza kukusaidia kuandika jumbe, huku mzazi au mlezi wako akipata nakala: \"Andika ujumbe wa adabu wa kuthibitisha matembezi ya mbwa Jumamosi saa 4 asubuhi (10 am) kwa bei tuliyokubaliana.\" Jambo likienda vibaya, omba msamaha, eleza utakachofanya kulirekebisha, na utimize ahadi yako.",
            "Mteja akiwa mkorofi, akikuomba ufanye kitu cha hatari au asipolipa, simama na umwambie mzazi au mlezi wako. Huhitaji kulishughulikia peke yako."
          ],
          steps: ["Thibitisha siku, saa, bei na kazi kabla ya kila kazi.", "Fika kwa wakati na fanya ulichoahidi.", "Jambo likienda vibaya: omba msamaha, sema utakavyorekebisha, kisha fanya hivyo.", "Kuna hatari au hujalipwa? Mwambie mzazi au mlezi wako."],
          words: [["Kuthibitisha", "kukagua na kukubaliana kuhusu maelezo kabla ya kazi."], ["Maoni ya mteja", "anachosema mteja kuhusu kazi yako (kwa Kiingereza \"review\")."]],
          slides: [
            { title: "Wateja wanarudi unapokuwa", bullets: ["Kwa wakati", "Mwenye adabu", "Mkweli"] },
            { title: "Thibitisha kila kazi", bullets: ["Siku na saa", "Bei", "Utakachofanya"] },
            { title: "Mambo yakienda vibaya", bullets: ["Omba msamaha na sema utakavyorekebisha", "Kuna hatari au hujalipwa? Mwambie mzazi au mlezi wako"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mpango wako wa ukurasa mmoja wa kazi ya pembeni: huduma na mteja, bei na sababu yake, tangazo lako, daftari lako la pesa, na sheria mbili za usalama. Mwonyeshe mzazi au mlezi na umuulize angebadilisha nini.",
          youCanNow: "kupanga na kuendesha kazi ndogo ya pembeni iliyo salama huku AI ikiwa msaidizi wako.",
          quickCheck: [
            { objective: "O6", q: "Ujumbe wa kuthibitisha kazi unapaswa kuwa na nini?", options: ["Anwani ya nyumbani kwenu", "Siku, saa, bei na kazi", "Ratiba yako ya shule", "Maelezo ya benki yako"], answer: 1, why: "Kuthibitisha siku, saa, bei na kazi kunazuia kuchanganyikiwa." },
            { objective: "O6", q: "Ulisahau kujaza tena bakuli la maji la mnyama. Unafanya nini?", options: ["Kuficha", "Kumlaumu mnyama", "Kuomba msamaha, kueleza utakavyorekebisha na kufanya hivyo", "Kuacha kujibu jumbe"], answer: 2, why: "Kukubali kosa na kulirekebisha kunalinda imani ya wateja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha kazi yako ya pembeni",
        questions: [
          { objective: "O4", q: "Nini hakipaswi kamwe kuwa kwenye tangazo lako?", options: ["Bei yako", "Mwito wa kuchukua hatua", "Unachofanya", "Anwani ya nyumbani kwenu"], answer: 3, why: "Anwani ya nyumbani inahatarisha usalama wako." },
          { objective: "O4", q: "Mwito wa kuchukua hatua ni nini?", options: ["Mstari unaowaambia watu wafanye nini baadaye", "Mlio wa simu", "Aina ya bei", "Sheria ya shule"], answer: 0, why: "Unawaambia wateja jinsi ya kukuagiza." },
          { objective: "O5", q: "Daftari rahisi la pesa lina safu za:", options: ["Nywila", "Nyimbo unazozipenda tu", "Tarehe, pesa zinazoingia, pesa zinazotoka na maelezo", "Majina ya marafiki tu"], answer: 2, why: "Safu hizo nne zinafuatilia kila dola." },
          { objective: "O5", q: "Faida ni:", options: ["Bei yako", "Pesa zote ulizopokea", "Pesa ulizotumia", "Pesa zinazoingia ukiondoa pesa zinazotoka"], answer: 3, why: "Faida ni kinachobaki baada ya gharama." },
          { objective: "O6", q: "Mteja anakuomba ufanye kitu cha hatari. Wewe:", options: ["Unakifanya ili usimpoteze mteja", "Unabishana naye mtandaoni", "Unasimama na kumwambia mzazi au mlezi wako", "Unapuuza na kuendelea kufanya kazi"], answer: 2, why: "Usalama wako ni muhimu kuliko kazi yoyote." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Ujasiriamali na Kazi za Pembeni (Vijana)",
    questions: [
      { objective: "O1", q: "Kazi ya pembeni ni:", options: ["Mtindo wa kucheza densi", "Njia ndogo ya kupata pesa nje ya shule au kazi kuu", "Klabu ya shule", "Aina ya mtihani"], answer: 1, why: "Ni kazi ya ziada unayoifanya kwa muda wako mwenyewe." },
      { objective: "O1", q: "Prompt nzuri ya AI ya kuomba mawazo ya kazi ya pembeni ina:", options: ["Umri wako, ujuzi wako na saa zako, na \"salama kwa kijana\"", "Anwani ya nyumbani kwenu", "Namba yako ya benki", "Hakuna kitu"], answer: 0, why: "Maelezo hayo yanaleta mawazo yanayokufaa." },
      { objective: "O1", q: "Wazo linagongana na ratiba yako ya shule. Unapaswa:", options: ["Kulifanya hata hivyo", "Kukosa shule", "Kulifuta na kuchagua jingine", "Kuiomba AI ifanye kazi yako ya nyumbani"], answer: 2, why: "Shule kwanza." },
      { objective: "O2", q: "Kwa sheria ya serikali kuu, kulea watoto kwa muda mfupi:", options: ["Hakuhusiki na sheria za ajira ya watoto", "Kunahitaji uwe na miaka 18", "Kumekatazwa kwa vijana", "Kunahitaji leseni"], answer: 0, why: "Idara ya Kazi inasema kulea watoto kwa muda mfupi hakuhusiki na sheria za serikali kuu." },
      { objective: "O2", q: "Sheria ya jimbo lako kuhusu kazi za vijana ni kali kuliko ya serikali kuu. Unafuata:", options: ["Sheria ya rafiki yako", "Sheria iliyo rahisi zaidi", "Hakuna sheria", "Sheria iliyo kali zaidi"], answer: 3, why: "Sheria zote mbili zinapohusika, kiwango kilicho kali zaidi ndicho kinachofuatwa." },
      { objective: "O2", q: "IRS inasema lazima ujaze fomu ya kodi ya kujiajiri mapato halisi yanapokuwa:", options: ["Zaidi ya $1 milioni", "$400 au zaidi", "Kiasi chochote zaidi ya $1", "Kamwe, kwa vijana"], answer: 1, why: "Kiwango cha IRS ni $400 za mapato halisi, kwa umri wowote." },
      { objective: "O2", q: "Nani anapaswa kushughulikia apps za malipo na akaunti za kuuza zinazohitaji mtu mzima?", options: ["Mtu usiyemjua", "Mzazi au mlezi wako", "Binamu mkubwa wa rafiki", "Hakuna mtu"], answer: 1, why: "Nyingi zinahitaji mtu mzima, na mzazi au mlezi wako anapaswa kujua kuhusu pesa zako." },
      { objective: "O3", q: "Bei yako inapaswa kulipa:", options: ["Gharama za rafiki yako", "Kile AI inachosema tu", "Hakuna kitu", "Gharama zako na muda wako"], answer: 3, why: "Bei ya haki inalipa gharama zako na muda wako." },
      { objective: "O5", q: "Faida inamaanisha:", options: ["Pesa zinazobaki baada ya gharama", "Pesa zote ulizopokea", "Matumizi yako", "Bakshishi"], answer: 0, why: "Faida = pesa zinazoingia ukiondoa pesa zinazotoka." },
      { objective: "O3", q: "Kwa nini uwe na bei moja wazi kwa kila huduma?", options: ["Ni kinyume cha sheria usipofanya hivyo", "Inawachanganya wateja", "Ni rahisi na ya haki kwa kila mtu", "AI inalazimisha"], answer: 2, why: "Bei zilizo wazi na sawa zinajenga imani." },
      { objective: "O4", q: "AI inapoandika tangazo lako, unapaswa:", options: ["Kuiacha AI ichague bei yako", "Kulibandika bila kulisoma", "Kuongeza anwani ya nyumbani kwenu", "Kulirekebisha ili lisikike kama wewe"], answer: 3, why: "Sauti yako inalifanya tangazo kuwa lako." },
      { objective: "O4", q: "Mawasiliano gani yanafaa kwenye tangazo la kijana?", options: ["Ratiba yako ya shule", "Anwani ya nyumbani kwenu", "Mawasiliano yaliyokubaliwa na mzazi au mlezi wako", "Namba ya siri ya kabati lako la shule"], answer: 2, why: "Mawasiliano yaliyokubaliwa yanakuweka salama." },
      { objective: "O4", q: "Kabla ya kubandika matangazo dukani au maktaba unapaswa:", options: ["Kuyabandika popote", "Kuomba ruhusa", "Kufunika matangazo mengine", "Kutoomba"], answer: 1, why: "Maeneo hayo yana sheria kuhusu mbao zao za matangazo." },
      { objective: "O5", q: "Zana ipi ya bure inaweza kubeba daftari la pesa?", options: ["Google Sheets", "App ya muziki", "Mashine ya michezo ya video", "Kichujio cha picha"], answer: 0, why: "Spreadsheet kama Google Sheets ni za bure." },
      { objective: "O5", q: "Nini hupaswi kamwe kuandika ndani ya zana ya AI?", options: ["\"Andika tangazo\"", "\"Tengeneza jedwali la kufuatilia pesa\"", "Namba za benki au za kadi", "\"Nipe mawazo\""], answer: 2, why: "Namba za benki na za kadi ni siri." },
      { objective: "O5", q: "Unapaswa kukagua daftari lako mara ngapi?", options: ["Kila wiki", "Mara moja kwa mwaka", "Kamwe", "Unapopoteza pesa tu"], answer: 0, why: "Kukagua kila wiki kunaonyesha unavyoendelea." },
      { objective: "O6", q: "Kabla ya kila kazi unapaswa kuthibitisha:", options: ["Kitafunwa unachokipenda", "Bei tu", "Hakuna kitu", "Siku, saa, bei na kazi"], answer: 3, why: "Kuthibitisha kunazuia mambo ya kushtukiza." },
      { objective: "O6", q: "Ulichelewa kufika kazini. Jibu bora ni:", options: ["Kumlaumu mteja", "Kuomba msamaha, kueleza utakavyorekebisha na kutimiza ahadi yako", "Kupuuza", "Kutoza zaidi"], answer: 1, why: "Kukubali makosa kunawabakiza wateja." },
      { objective: "O6", q: "Mteja halipi. Unapaswa:", options: ["Kwenda nyumbani kwake peke yako kudai pesa", "Kumwambia mzazi au mlezi wako", "Kumwandika vibaya mtandaoni", "Kuendelea kufanya kazi bure"], answer: 1, why: "Mtu mzima anaweza kusaidia kulishughulikia kwa usalama." },
      { objective: "O2", q: "Nani anapaswa kuona mpango wako wa kazi ya pembeni kabla hujaanza?", options: ["AI tu", "Hakuna mtu", "Watu usiowajua mtandaoni tu", "Mzazi au mlezi"], answer: 3, why: "Mzazi au mlezi anasaidia kuhusu usalama, sheria na pesa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 5, 7, 8, 11, 13, 16, 17, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Huduma na mteja",
        objective: "O1",
        notYet: "Huduma au mteja haieleweki.",
        meets: "Inasema huduma ni nini, ni ya nani, na kwamba angalau watu watatu walisema wangelilipia.",
        exceeds: "Pia inaonyesha wazo linafaa saa halisi za mwanafunzi kila wiki."
      },
      {
        name: "Bei",
        objective: "O3",
        notYet: "Hakuna bei, au hakuna sababu yake.",
        meets: "Bei moja wazi inayolipa gharama na muda, iliyokaguliwa na watu wa mtaani.",
        exceeds: "Inaonyesha gharama kwa kila kazi na jinsi bei inavyolinganishwa na huduma nyingine za mtaani."
      },
      {
        name: "Tangazo",
        objective: "O4",
        notYet: "Tangazo lina anwani ya nyumbani, au halina bei au mawasiliano.",
        meets: "Kichwa, vipengele vifupi, bei na mawasiliano yaliyokubaliwa, bila anwani ya nyumbani.",
        exceeds: "Maneno yalirekebishwa ili yasikike kama mwanafunzi, na muundo unasomeka kwa urahisi."
      },
      {
        name: "Daftari la pesa",
        objective: "O5",
        notYet: "Safu zinakosekana au hakuna njia ya kuona faida.",
        meets: "Tarehe, pesa zinazoingia, pesa zinazotoka na maelezo, pamoja na jumla inayoonyesha faida.",
        exceeds: "Lina maingizo ya kweli au ya mazoezi na maelezo ya lini litakaguliwa kila wiki."
      },
      {
        name: "Sheria za usalama",
        objective: "O2",
        notYet: "Sheria za usalama chini ya mbili, au mzazi au mlezi hajaupitia.",
        meets: "Sheria mbili za usalama zilizokubaliwa na mzazi au mlezi, ambaye ameuona mpango.",
        exceeds: "Pia inataja sheria za kazi za vijana na za kodi zinazohusika, zilizokaguliwa kwenye tovuti rasmi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoanza kazi yao ya pembeni kwa ruhusa ya mzazi au mlezi ndani ya siku 60",
      "Wanafunzi wanaotunza daftari la pesa kwa angalau wiki nne",
      "Wanafunzi wanaoripoti mapato na wateja wanaorudi katika utafiti wa kufuatilia wa siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, kompyuta ya shule au kompyuta ya maktaba yenye intaneti",
      "Msaidizi wa AI wa bure ambao mwanafunzi anaruhusiwa kuutumia, pamoja na Canva, Google Docs au Google Slides",
      "Google Sheets, Excel au daftari la karatasi kwa ajili ya kufuatilia pesa",
      "Mzazi au mlezi wa kupitia mpango",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Tuma barua nyumbani ili wazazi na walezi wajue kozi inawaomba wapitie mpango na washughulikie akaunti zozote za watu wazima.",
      "Kagua matangazo kabla wanafunzi hawajayabandika au kuyachapisha ili kuhakikisha hakuna anwani ya nyumbani wala mawasiliano ya siri.",
      "Wakumbushe wanafunzi kwamba sheria za kazi za vijana na za kodi hubadilika; waambie wakague ofisi ya kazi ya jimbo lao na irs.gov pamoja na mtu mzima.",
      "Usiwaombe wanafunzi kamwe kuandika namba za benki au za kadi ndani ya zana za AI; madaftari ya mazoezi yanaweza kutumia kiasi cha kubuni.",
      "Fanyeni onyesho fupi la mipango na mpime kila mpango kwa rubriki, mkitoa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
