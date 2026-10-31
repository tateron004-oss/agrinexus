"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-intro-ai-sw",
  lang: "sw",
  translationOf: "entrepreneurs-intro-ai",
  category: "Entrepreneurs",
  name: "Utangulizi wa AI kwa Wajasiriamali",
  skills: "Kutambua kazi za biashara zinazofaa AI, Kuandika prompt ya biashara, Kuboresha rasimu, Kukagua ukweli na namba, Kulinda taarifa za biashara na za wateja",
  outcome: "kuchagua kazi moja halisi katika biashara yako, kutumia msaidizi wa AI wa bure kuandika rasimu yake ya kwanza, kuboresha na kukagua matokeo, na kutoweka taarifa za wateja na za pesa kwenye mazungumzo.",
  about: [
    "Kozi hii ni kwa watu wanaoanzisha au kukuza biashara ndogo: gari la kuuza chakula, huduma ya usafi, saluni, duka la mtandaoni, huduma ya ushauri au biashara ya pembeni unayotaka kuikuza.",
    "Utajifunza msaidizi wa AI anaweza kumfanyia nini mwenye biashara, jinsi ya kupata kazi katika wiki yako ambazo AI inaweza kuharakisha, jinsi ya kuandika prompt ya biashara iliyo wazi, jinsi ya kuboresha na kukagua unachopewa na AI, na jinsi ya kulinda taarifa za wateja wako.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" ukitumia biashara yako mwenyewe. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Chagua kazi moja halisi ya biashara yako (kwa mfano orodha ya bei, barua pepe ya kuwakaribisha wateja wapya, au chapisho la kila wiki kwenye mitandao ya kijamii). Tumia msaidizi wa AI wa bure kuiandika kwa prompt ya biashara yenye sehemu tatu, omba maboresho mawili, kagua kila ukweli na kila namba wewe mwenyewe, ondoa taarifa zozote binafsi za wateja au za pesa, na uhifadhi toleo la mwisho likiwa tayari kutumika.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaoanzisha au kukuza biashara ndogo, kama gari la kuuza chakula, huduma ya usafi, saluni, duka la mtandaoni, huduma ya ushauri au biashara ya pembeni. Wengi hufanya kila kazi ya biashara wao wenyewe.",
    startingPoint: "Hufanya kazi za biashara zao kwa mkono na hutumia simu au kompyuta kila siku. Wengi wamesikia kuhusu wasaidizi wa AI lakini hawajawahi kumtumia mmoja kwa kazi ya biashara, au wamejaribu bila njia iliyo wazi.",
    gap: "Wenye biashara hupoteza saa nyingi kila wiki kwenye kazi za kuandika na kupanga ambazo msaidizi wa AI angeweza kuandika rasimu yake kwa dakika chache. AI ikitumiwa bila uangalifu, inaweza kuweka bei zisizo sahihi, madai ya uongo au taarifa binafsi za wateja kwa jina la biashara. Wenye biashara wanahitaji njia salama, wanayoweza kurudia, ya kuandika rasimu, kuboresha na kukagua maandishi ya biashara kwa AI.",
    constraints: [
      "Maneno rahisi; hakuna haja ya ujuzi wa teknolojia",
      "Vifaa: simu au kompyuta yenye msaidizi wa AI wa bure",
      "Muda: kama dakika tano kwa kila somo, kati ya shughuli za kuendesha biashara",
      "Madai ya matangazo lazima yawe ya kweli na yawe na ushahidi; maswali ya kodi na leseni yanaenda kwenye vyanzo rasmi au kwa mtaalamu",
      "Hakuna namba za kadi za wateja, taarifa za benki wala taarifa nyingine binafsi katika prompt yoyote"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa maneno yako mwenyewe", action: "kueleza msaidizi wa AI anachoweza na asichoweza kufanya kwa biashara", standard: "pamoja na kwa nini mwenye biashara hukagua kila kitu kabla hakijatoka" },
    { id: "O2", condition: "Ukipewa orodha ya kazi kumi za wiki yako", action: "kupanga kazi za biashara za wiki yako katika makundi matatu: kazi ambazo AI inaweza kuandika rasimu, kazi ambazo AI inakusaidia kufikiri, na kazi za kubaki nazo mwenyewe", standard: "ukichagua kazi moja ya kwanza iliyo salama na yenye manufaa kwa AI" },
    { id: "O3", condition: "Ukipewa kazi uliyochagua", action: "kuandika prompt ya biashara yenye kazi, maelezo ya biashara (context) na muundo", standard: "ili rasimu ya kwanza iwe karibu kutumika" },
    { id: "O4", condition: "Ukipewa rasimu ya kwanza ya AI", action: "kuomba maombi ya kufuatilia, moja baada ya jingine, na kuongeza taarifa zako halisi", standard: "hadi isikike kama biashara yako, kwa maombi ya kufuatilia yasiyozidi matatu" },
    { id: "O5", condition: "Ukipewa rasimu iliyoboreshwa", action: "kukagua kila ukweli, namba na dai dhidi ya kumbukumbu zako au chanzo rasmi", standard: "ukiondoa dai lolote usiloweza kuthibitisha" },
    { id: "O6", condition: "Kila unapotumia AI kwa biashara", action: "kuzuia taarifa binafsi za wateja na za pesa zisiingie kwenye prompt na kutambua ulaghai wa malipo", standard: "ukitumia vishika-nafasi na bila kutoa namba za kadi, benki au akaunti" }
  ],
  chapters: [
    {
      name: "Sura 1: AI inachoweza kufanya kwa biashara yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI ni nini, kwa lugha ya biashara",
          minutes: 4,
          goal: "Eleza kwa maneno yako mwenyewe msaidizi wa AI anachoweza na asichoweza kufanya kwa biashara.",
          text: [
            "Msaidizi wa AI ni programu ya kompyuta unayoiandikia au kuongea nayo kwa maneno ya kawaida. Wanaojulikana na walio bure ni pamoja na ChatGPT, Microsoft Copilot na Google Gemini. Unaomba kitu, nayo inaandika rasimu kwa sekunde chache.",
            "Kwa mwenye biashara, ifikirie kama msaidizi wa haraka wa rasimu ya kwanza. Ni hodari wa kuandika barua pepe, machapisho ya mitandao ya kijamii na maelezo ya bidhaa, kugeuza maandishi yako kuwa mpango, kufupisha nyaraka ndefu, kutoa mawazo ya majina na mambo mapya, na kueleza maneno ya biashara usiyoyajua.",
            "Si mhasibu wako, si wakili wako wala si mteja wako. Haijui bei zako, wateja wako au sheria za eneo lako usipoiambia, na inaweza kukosea huku ikisikika na uhakika. Wewe ndiye mwenye biashara: wewe unaamua kinachotoka kikiwa na jina la biashara yako."
          ],
          words: [["Msaidizi wa AI", "programu ya kompyuta unayozungumza nayo kwa kuandika au kuongea, inayoandika majibu na rasimu."], ["Rasimu ya kwanza", "toleo la mwanzo la kitu ambalo utakagua na kuboresha kabla ya kulitumia."]],
          slides: [
            { title: "AI kwa biashara = msaidizi wa haraka wa rasimu", bullets: ["Unaomba kwa maneno ya kawaida", "Inaandika rasimu kwa sekunde chache", "Za bure: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Ni hodari wa", bullets: ["Barua pepe, machapisho, maelezo ya bidhaa", "Kugeuza maandishi kuwa mipango", "Kufupisha na kutoa mawazo mapya"] },
            { title: "SI", bullets: ["Mhasibu wako au wakili wako", "Inajua bei au wateja wako bila wewe kuiambia", "Sahihi kila wakati, hata ikisikika na uhakika"] }
          ],
          tryIt: "Andika mambo matatu uliyoifanyia biashara yako wiki iliyopita yaliyohusu kuandika, kupanga au kueleza. Zungushia duara lile lililokuchukua muda mrefu zaidi.",
          youCanNow: "kusema msaidizi wa AI anachoweza kufanya kwa biashara, na kwa nini bado unakagua kila kitu kabla hakijatoka.",
          quickCheck: [
            { objective: "O1", q: "Msaidizi wa AI anahitaji nini kutoka kwako ili aandike kuhusu biashara yako?", options: ["Bei zako halisi, saa za kazi na taarifa nyingine", "Hakuna; tayari anaijua biashara yako", "Nywila ya benki yako", "Mpango wa kulipia"], answer: 0, why: "AI haijui biashara yako usipoiambia." },
            { objective: "O1", q: "AI inaandika tangazo la karatasi la saluni yako. Unafanya nini kabla ya kulichapisha?", options: ["Kulichapisha mara moja", "Kulisoma na kulikagua, kwa sababu linatoka kwa jina lako", "Kuiacha AI ilichapishe", "Kuwatumia wateja kwanza"], answer: 1, why: "Mwenye biashara anawajibika kwa kila kitu chenye jina la biashara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupata kazi ambazo AI inaweza kuharakisha",
          minutes: 5,
          goal: "Orodhesha kazi katika wiki yako zinazofaa AI, na zile zisizofaa.",
          text: [
            "Kazi bora za kwanza kwa AI ni zile unazozirudia, zinazohusu maneno, na ambazo kosa ni rahisi kuliona kabla mtu yeyote hajaliona. Mifano: kujibu maswali ya kawaida ya wateja, kuandika chapisho la kila wiki, kuandika rasimu ya tangazo la karatasi, kutengeneza orodha ya kukagua kwa msaidizi mpya, au kufupisha barua pepe ndefu ya msambazaji.",
            "Kazi ambazo HAZIFAI kuachiwa AI peke yake: chochote kinachotuma pesa, kinachosaini mkataba, kinachoamua jambo la kisheria au la kodi, au kinachotoa ahadi kwa mteja bila wewe kukisoma kwanza. AI inaweza kukusaidia kujiandaa, lakini uamuzi wa mwisho ni wako.",
            "Njia rahisi ya kupanga: andika kila kazi kwenye mstari wake, kisha iwekee alama \"AI inaandika rasimu, mimi nakagua\", \"AI inanisaidia kufikiri\" au \"Nafanya mwenyewe\"."
          ],
          steps: ["Orodhesha kazi kumi ulizofanya katika wiki mbili zilizopita.", "Iwekee kila moja alama: AI inaandika rasimu / AI inanisaidia kufikiri / Nafanya mwenyewe.", "Chagua kazi ya \"AI inaandika rasimu\" inayokuchukua muda mwingi zaidi.", "Hiyo ndiyo kazi yako ya kwanza ya AI."],
          words: [["Kazi ya kurudia", "kazi unayoifanya tena na tena, kama kujibu swali lilelile la wateja."]],
          slides: [
            { title: "Kazi nzuri za kwanza kwa AI", bullets: ["Unazirudia mara nyingi", "Nyingi ni maneno", "Makosa ni rahisi kuyaona kabla mtu hajayaona"] },
            { title: "Mifano", bullets: ["Majibu ya maswali ya kawaida ya wateja", "Chapisho la kila wiki au tangazo la karatasi", "Orodha ya kukagua kwa msaidizi mpya"] },
            { title: "Baki nazo mwenyewe", bullets: ["Kutuma pesa", "Kusaini mikataba, maamuzi ya kodi na ya kisheria", "Ahadi kwa wateja ambazo hujazisoma"] },
            { title: "Panga kazi zako", bullets: ["AI inaandika rasimu, mimi nakagua", "AI inanisaidia kufikiri", "Nafanya mwenyewe"] }
          ],
          tryIt: "Tengeneza orodha yako ya kazi kumi na uzipange katika makundi matatu. Chagua kazi moja ya \"AI inaandika rasimu, mimi nakagua\" utakayoitumia katika kozi hii yote.",
          youCanNow: "kupanga kazi zako za biashara na kuchagua kazi ya kwanza iliyo salama na yenye manufaa kwa AI.",
          quickCheck: [
            { objective: "O2", q: "Nini kinaifanya kazi iwe kazi nzuri ya kwanza kwa AI?", options: ["Inahamisha pesa", "Inahitaji sahihi", "Inarudiwa, ni maneno zaidi na ni rahisi kuikagua", "Inahusu taarifa binafsi za wateja"], answer: 2, why: "Kazi za kuandika zinazorudiwa ambazo unaweza kukagua kwa urahisi ni ushindi salama." },
            { objective: "O2", q: "Kazi moja kwenye orodha yako ni kuidhinisha malipo kwa msambazaji. Unaipanga wapi?", options: ["AI inaandika rasimu, mimi nakagua", "AI inaifanya peke yake", "AI inanisaidia kufikiri", "Nabaki nayo mwenyewe"], answer: 3, why: "Maamuzi ya pesa yanabaki kwa mwenye biashara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika prompt ya biashara iliyo wazi",
          minutes: 5,
          goal: "Andika prompt ya biashara yenye sehemu tatu inayoleta rasimu yenye manufaa mara ya kwanza.",
          text: [
            "Unachoandika kwa msaidizi wa AI kinaitwa prompt. Prompt ya biashara inafanya kazi vizuri zaidi ikiwa na sehemu tatu: kazi, maelezo ya biashara (context), na muundo unaotaka.",
            "Mfano: \"Andika barua pepe fupi ya kuwakaribisha wateja wapya wa huduma yangu ya kusafisha nyumba huko Atlanta. Tunasafisha nyumba kila baada ya wiki mbili, na wateja wanaweza kututumia ujumbe mfupi kubadilisha siku. Iwe ya kirafiki, chini ya maneno 120, na kichwa cha habari kilicho wazi.\"",
            "Prompt dhaifu kama \"andika barua pepe\" inamfanya msaidizi akisie. Haijui biashara yako, mteja wako wala mtindo wako, kwa hiyo rasimu itakuwa ya jumla. Usiweke kamwe majina ya wateja, namba za simu, namba za kadi au nywila kwenye prompt; unaweza kuziongeza mwenyewe baadaye."
          ],
          steps: ["Kazi: sema hasa unachotaka kiandikwe au kipangwe.", "Maelezo ya biashara: unachouza, mteja ni nani, uko wapi, mtindo wako.", "Muundo: urefu, orodha au aya, kichwa cha habari, kiwango cha kusoma.", "Soma prompt utafute taarifa binafsi na uziondoe kabla ya kuituma."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI kuomba kitu."], ["Maelezo ya biashara (context)", "ukweli wa msingi ambao AI inahitaji, kama unachouza na unamuuzia nani."]],
          slides: [
            { title: "Sehemu tatu za prompt ya biashara", bullets: ["1. Kazi: unachotaka", "2. Maelezo: biashara yako na mteja wako", "3. Muundo: urefu, mtindo, mpangilio"] },
            { title: "Dhaifu dhidi ya wazi", bullets: ["Dhaifu: \"andika barua pepe\"", "Wazi: barua pepe ya kukaribisha, huduma ya usafi, Atlanta,", "ya kirafiki, chini ya maneno 120, yenye kichwa cha habari"] },
            { title: "Usiviweke kwenye prompt", bullets: ["Majina ya wateja na namba zao za simu", "Namba za kadi na za benki", "Nywila"] }
          ],
          tryIt: "Andika prompt yenye sehemu tatu kwa kazi uliyochagua katika Somo la 2. Ituma kwa msaidizi wa AI wa bure na uhifadhi rasimu ya kwanza.",
          youCanNow: "kuandika prompt ya biashara yenye kazi, maelezo ya biashara na muundo, bila kuweka taarifa binafsi.",
          quickCheck: [
            { objective: "O3", q: "Sehemu ipi ya prompt ya biashara ni muundo?", options: ["\"Chini ya maneno 100 na kichwa cha habari\"", "\"Andika barua pepe ya kukaribisha\"", "\"Sisi ni duka la kuwatunza wanyama vipenzi huko Phoenix\"", "\"Asante kwa msaada wako\""], answer: 0, why: "Muundo unasema jinsi unavyotaka jibu: urefu, mpangilio au mtindo." },
            { objective: "O3", q: "Prompt yako inasema tu \"andika chapisho\". Unaongeza nini?", options: ["Hakuna zaidi", "Biashara yako, wateja wako, na urefu na mtindo unaotaka", "Orodha ya wateja wako", "Salio la benki yako"], answer: 1, why: "Maelezo ya biashara na muundo hugeuza ombi lisilo wazi kuwa rasimu yenye manufaa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI inachoweza kufanya kwa biashara yako",
        questions: [
          { objective: "O1", q: "Ni njia ipi bora ya kumfikiria msaidizi wa AI katika biashara yako?", options: ["Mhasibu wako", "Mbadala wa busara yako", "Msaidizi wa haraka wa rasimu ya kwanza unayemkagua", "Mteja"], answer: 2, why: "AI inaandika rasimu haraka, lakini wewe unakagua na kuamua kinachotoka." },
          { objective: "O2", q: "Kazi ipi ni kazi nzuri ya kwanza kumpa msaidizi wa AI?", options: ["Kuandika rasimu ya chapisho la kila wiki utakalosoma kwanza", "Kumlipa msambazaji", "Kusaini mkataba wa kukodi", "Kuchagua hali yako ya kuwasilisha kodi"], answer: 0, why: "Inarudiwa, ni maneno zaidi, na makosa ni rahisi kuyaona kabla mtu hajayaona." },
          { objective: "O3", q: "Ipi ni prompt ya biashara yenye sehemu tatu?", options: ["\"andika barua pepe\"", "\"nisaidie\"", "\"mambo ya biashara\"", "\"Barua pepe ya kuwakaribisha wateja wapya wa usafi huko Atlanta; tunasafisha kila baada ya wiki mbili; ya kirafiki, chini ya maneno 120, yenye kichwa cha habari.\""], answer: 3, why: "Inatoa kazi, maelezo ya biashara na muundo." },
          { objective: "O6", q: "Unapaswa kuacha nini nje ya prompt?", options: ["Aina ya biashara yako", "Namba ya kadi ya mteja", "Mtindo unaotaka", "Urefu unaotaka"], answer: 1, why: "Namba za kadi na taarifa nyingine binafsi hazipaswi kamwe kuingia kwenye mazungumzo ya AI." },
          { objective: "O1", q: "Rasimu ya AI ina jina la biashara yako. Nani anawajibika kwayo?", options: ["Kampuni ya AI", "Wewe, mwenye biashara", "Hakuna mtu", "Mteja"], answer: 1, why: "Wewe unaamua kinachotoka kikiwa na jina la biashara yako." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia AI kwa usalama na kwa ustadi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuboresha rasimu kwa maombi ya kufuatilia",
          minutes: 4,
          goal: "Geuza rasimu ya kwanza kuwa toleo ambalo kweli ungelitumia, kwa maombi ya kufuatilia.",
          text: [
            "Jibu la kwanza ni rasimu. Msaidizi anakumbuka ujumbe wa awali katika mazungumzo hayohayo, kwa hiyo unaweza kumwomba abadilishe jambo moja kwa wakati.",
            "Maombi ya kufuatilia yenye manufaa kwa maandishi ya biashara: \"Ifanye isikike zaidi kama biashara ndogo ya mtaani.\" \"Ifupishe hadi maneno 80.\" \"Ongeza hatua inayofuata iliyo wazi kwa mteja.\" \"Nipe vichwa vitatu vya habari nichague.\" \"Iandike kwa kiwango rahisi cha kusoma.\"",
            "Ongeza ukweli unaoujua wewe tu: saa zako halisi za kazi, bei halisi na sera halisi. Kisha isome kwa sauti. Isiposikika kama wewe, omba badiliko au uirekebishe mwenyewe."
          ],
          steps: ["Soma rasimu ya kwanza.", "Chagua jambo moja unalotaka zaidi libadilishwe.", "Omba badiliko hilo.", "Ongeza ukweli wako halisi.", "Isome kwa sauti na urudie ikihitajika."],
          words: [["Ombi la kufuatilia", "ombi la pili katika mazungumzo yaleyale linalobadilisha au kujenga juu ya jibu."], ["Mwito wa kuchukua hatua", "hatua inayofuata iliyo wazi unayotaka mteja aichukue, kama \"Tutumie ujumbe kuweka nafasi\"."]],
          slides: [
            { title: "Jibu la kwanza ni rasimu", bullets: ["Omba badiliko moja kwa wakati", "Mazungumzo yanakumbuka ulichosema"] },
            { title: "Maombi ya kufuatilia ya biashara", bullets: ["\"Isikike zaidi kama biashara ndogo ya mtaani.\"", "\"Ifupishe hadi maneno 80.\"", "\"Ongeza hatua inayofuata iliyo wazi kwa mteja.\""] },
            { title: "Ifanye iwe yako", bullets: ["Ongeza saa zako halisi, bei na sera", "Isome kwa sauti", "Irekebishe hadi isikike kama wewe"] }
          ],
          tryIt: "Chukua rasimu yako kutoka Somo la 3. Omba mabadiliko mawili, moja baada ya jingine, kisha ongeza taarifa zako halisi. Linganisha toleo la kwanza na la mwisho.",
          youCanNow: "kuboresha rasimu ya AI kwa maombi ya kufuatilia na kuifanya isikike kama biashara yako.",
          quickCheck: [
            { objective: "O4", q: "Ombi la kufuatilia ni nini?", options: ["Mazungumzo mapya kuhusu jambo jingine", "Kikumbusho cha malipo", "Ombi la pili katika mazungumzo yaleyale linalobadilisha jibu", "Maoni ya mteja"], answer: 2, why: "Maombi ya kufuatilia huboresha rasimu uliyonayo tayari." },
            { objective: "O4", q: "Rasimu ni nzuri lakini ni ndefu mno. Unaomba nini kinachofuata?", options: ["Kuanza upya katika mazungumzo mapya", "Kuomba matoleo matano zaidi kwa mara moja", "Kuikubali ilivyo", "\"Ifupishe, chini ya maneno 80\""], answer: 3, why: "Badiliko moja lililo wazi kwa wakati huboresha rasimu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua ukweli, namba na madai",
          minutes: 5,
          goal: "Kagua rasimu ya AI utafute ukweli usio sahihi, namba zisizo sahihi na ahadi usizoweza kutimiza.",
          text: [
            "AI inaweza kubuni mambo: bei ambayo hujawahi kuweka, sheria isiyokuwepo, jumla isiyo sahihi, au dai kama \"bora zaidi mjini\" ambalo huwezi kulithibitisha. Kubuni mambo kwa njia hii wakati mwingine huitwa hallucination.",
            "Kabla kitu chochote hakijamfikia mteja, kagua mambo matatu. Ukweli: saa za kazi, bei, anwani, sera. Namba: je, jumla na asilimia ni sahihi? Piga hesabu mwenyewe au kwenye spreadsheet (jedwali la hesabu). Madai: je, unaweza kulithibitisha? Nchini Marekani, FTC inasema matangazo lazima yawe ya kweli, yasiyopotosha, na yenye ushahidi.",
            "Kwa maswali ya kodi, sheria, leseni au pesa, tumia AI tu kuelewa maneno, kisha thibitisha kwenye chanzo rasmi (mara nyingi tovuti ya .gov) au kwa mtaalamu kama mhasibu au wakili."
          ],
          steps: ["Wekea alama kila ukweli, namba na dai katika rasimu.", "Kagua ukweli dhidi ya kumbukumbu zako.", "Rudia hesabu yoyote wewe mwenyewe.", "Ondoa au punguza dai lolote usiloweza kuthibitisha.", "Thibitisha mambo ya kodi, sheria au leseni kwenye chanzo rasmi au kwa mtaalamu."],
          words: [["Hallucination", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."], ["Dai", "kitu ambacho biashara yako inasema ni kweli, kama \"huduma siku hiyohiyo\"."], ["FTC", "Federal Trade Commission, shirika la serikali ya Marekani linalosimamia sheria za ukweli katika matangazo."]],
          slides: [
            { title: "AI inaweza kubuni mambo", bullets: ["Bei ambazo hujawahi kuweka", "Sheria zisizokuwepo", "Jumla zisizo sahihi"] },
            { title: "Kagua mambo matatu", bullets: ["Ukweli: saa za kazi, bei, sera", "Namba: rudia hesabu", "Madai: je, unaweza kulithibitisha?"] },
            { title: "Ukweli katika matangazo", bullets: ["FTC: matangazo lazima yawe ya kweli na yasiyopotosha", "Madai yanahitaji ushahidi"] },
            { title: "Kodi, sheria, leseni", bullets: ["Tumia AI kuelewa maneno", "Thibitisha kwenye tovuti rasmi ya .gov", "Au muulize mhasibu au wakili"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Wekea alama kila ukweli, namba na dai katika rasimu yako iliyoboreshwa. Kagua kila kimoja, rekebisha kisicho sahihi, na uondoe dai lolote usiloweza kuthibitisha.",
          youCanNow: "kukagua rasimu ya AI utafute ukweli usio sahihi, namba zisizo sahihi na madai usiyoweza kuyathibitisha.",
          quickCheck: [
            { objective: "O5", q: "Hallucination ya AI ni nini?", options: ["Kitu kinachosikika kuwa kweli lakini kimebuniwa", "Aina ya tangazo", "Intaneti inayokwenda polepole", "Malalamiko ya mteja"], answer: 0, why: "AI inaweza kuandika ukweli wa kubuni unaosikika na uhakika." },
            { objective: "O5", q: "Rasimu inasema \"namba 1 mjini\". Huna ushahidi. Unafanya nini?", options: ["Kuliacha; linasikika vizuri", "Kuliondoa au kulibadilisha liwe kitu cha kweli", "Kuongeza \"labda\"", "Kuiuliza AI kama ni kweli"], answer: 1, why: "Madai ya matangazo lazima yawe ya kweli na yawe na ushahidi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinda taarifa za wateja na za biashara",
          minutes: 5,
          goal: "Tumia AI kwa kazi za biashara bila kutoa taarifa binafsi za wateja au za pesa.",
          text: [
            "Unachoandika kwenye mazungumzo ya AI kinaweza kuhifadhiwa na kampuni inayoiendesha, na katika baadhi ya mipango ya bure kinaweza kutumiwa kuboresha AI yao. Soma mipangilio ya faragha ya zana hiyo, na chukulia kwamba chochote unachoandika kinaweza kuonwa na mtu mwingine.",
            "Usiandike kamwe kwenye mazungumzo ya AI: majina ya wateja pamoja na namba zao za simu au anwani, namba za kadi au za benki, nywila, namba za Social Security au za kodi (tax ID), au taarifa binafsi za afya. Tumia vishika-nafasi kama \"[jina la mteja]\" na ujaze taarifa halisi wewe mwenyewe baadaye.",
            "Pia jihadhari na ulaghai unaotumia AI unaolenga biashara: ankara (bili) za uongo, barua pepe zinazoiga mtindo wa msambazaji, na simu zenye sauti inayofanana na mtu unayemjua zikiomba malipo ya haraka. Kabla ya kulipa, piga simu tena kwa namba unayoijua tayari kuwa ni halisi."
          ],
          steps: ["Kabla ya kutuma prompt, isome utafute taarifa binafsi.", "Zibadilishe kwa vishika-nafasi kama \"[jina la mteja]\".", "Kagua mipangilio ya faragha au ya data ya zana hiyo.", "Thibitisha ombi lolote la malipo ya haraka kwa kupiga namba unayoijua tayari."],
          words: [["Kishika-nafasi", "neno la muda kama \"[jina la mteja]\" unalolibadilisha kwa taarifa halisi baadaye, nje ya mazungumzo ya AI."], ["Ulaghai wa ankara", "bili ya uongo iliyotengenezwa ionekane kama inatoka kwa msambazaji halisi."]],
          slides: [
            { title: "Chukulia kwamba inaweza kuonwa", bullets: ["Mazungumzo yanaweza kuhifadhiwa", "Mipango ya bure inaweza kuyatumia kuboresha AI", "Kagua mipangilio ya faragha"] },
            { title: "Usiandike kamwe kwenye AI", bullets: ["Namba za simu na anwani za wateja", "Namba za kadi, benki na kodi (tax ID)", "Nywila na taarifa za afya"] },
            { title: "Tumia vishika-nafasi", bullets: ["\"[jina la mteja]\", \"[jumla ya oda]\"", "Jaza taarifa halisi wewe mwenyewe baadaye"] },
            { title: "Ulaghai dhidi ya biashara", bullets: ["Ankara za uongo zinazoonekana halisi", "Simu za malipo ya haraka kwa sauti unayoijua", "Piga tena kwa namba unayoijua"] }
          ],
          tryIt: "Kazi ya mwisho: maliza kazi ya biashara uliyochagua. Hakikisha prompt na toleo la mwisho hazina taarifa binafsi za wateja au za pesa, kagua kila ukweli, namba na dai, na uihifadhi ikiwa tayari kutumika.",
          youCanNow: "kutumia AI kwa kazi halisi ya biashara huku ukiwalinda wateja wako, pesa zako na jina lako.",
          quickCheck: [
            { objective: "O6", q: "Kishika-nafasi katika prompt ni nini?", options: ["Namba halisi ya simu ya mteja", "Nywila", "Lebo kama [jina la mteja] badala ya taarifa halisi", "Ukurasa mtupu"], answer: 2, why: "Vishika-nafasi vinakuwezesha kupata msaada bila kutoa taarifa binafsi." },
            { objective: "O6", q: "Ujumbe kutoka kwa \"benki\" yako unakuomba uthibitishe namba ya akaunti yako kwa kujibu. Unafanya nini?", options: ["Kujibu ukitoa namba", "Kuiomba AI ikujibie", "Kuwatumia wateja", "Kuwasiliana na benki kwa namba unayoijua tayari"], answer: 3, why: "Tumia mawasiliano unayoyaamini tayari, kamwe si yale yaliyo katika ujumbe wa haraka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia AI kwa usalama na kwa ustadi",
        questions: [
          { objective: "O4", q: "Rasimu ya AI inasikika rasmi mno kwa duka lako dogo. Unafanya nini?", options: ["Kuitumia hivyohivyo", "Kufuta app ya AI", "Kuituma kwa wakili", "Kuomba: \"Ifanye isikike zaidi kama biashara ndogo ya mtaani.\""], answer: 3, why: "Ombi la kufuatilia linamwomba msaidizi abadilishe mtindo." },
          { objective: "O5", q: "Rasimu ya AI inasema \"tuko wazi hadi saa 3 usiku (9 pm)\" lakini unafunga saa 1 usiku (7 pm). Hii inaonyesha nini?", options: ["AI inaweza kubuni ukweli, kwa hiyo unaukagua", "AI ni sahihi kila wakati", "Saa zako za kazi si sahihi", "Mteja hatagundua"], answer: 0, why: "AI inaweza kubuni ukweli; unaukagua dhidi ya kumbukumbu zako." },
          { objective: "O5", q: "Rasimu inasema \"bei rahisi zaidi katika jimbo\". Hujalinganisha bei. Unapaswa kufanya nini?", options: ["Kuliacha, linasikika vizuri", "Kuliongezea ukubwa", "Kuliondoa au kulibadilisha liwe kitu unachoweza kuthibitisha", "Kuongeza \"imehakikishwa\""], answer: 2, why: "Matangazo lazima yawe ya kweli na yawe na ushahidi." },
          { objective: "O6", q: "Unapaswa kuweka jina la mteja vipi katika prompt ya AI?", options: ["Kuandika jina kamili na namba ya simu", "Kuandika pia namba yake ya kadi", "Kumwomba mteja nywila yake", "Kutumia kishika-nafasi kama \"[jina la mteja]\""], answer: 3, why: "Vishika-nafasi vinazuia taarifa binafsi zisiingie kwenye mazungumzo." },
          { objective: "O6", q: "Unapokea simu ya haraka kwa sauti ya msambazaji wako ikikuomba ulipe akaunti mpya leo. Unafanya nini?", options: ["Kulipa mara moja", "Kutuma taarifa zako za kuingia benki", "Kumpigia msambazaji tena kwa namba unayoijua tayari", "Kujibu kwa msimbo ulio kwenye simu yako"], answer: 2, why: "Sauti zinaweza kuigwa na AI; thibitisha kwa namba unayoijua kabla ya kulipa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa AI kwa Wajasiriamali",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI katika biashara yako anatumika vizuri zaidi kama:", options: ["Wakili wako", "Msaidizi wa haraka wa rasimu ya kwanza", "Benki yako", "Mwenye uamuzi wa mwisho"], answer: 1, why: "Inaandika rasimu; wewe unakagua na kuamua." },
      { objective: "O1", q: "Upi ni msaidizi wa AI wa bure anayejulikana?", options: ["Google Gemini", "Mashine ya kulipia dukani", "Printa", "Kisanduku cha spreadsheet"], answer: 0, why: "Gemini, ChatGPT na Copilot ni wasaidizi wa AI wanaojulikana." },
      { objective: "O1", q: "Kipi kati ya hivi msaidizi wa AI HAJUI usipomwambia?", options: ["Mpango wa biashara ni nini", "Jinsi ya kuandika orodha", "Bei zako halisi", "Maneno ya kawaida ya biashara"], answer: 2, why: "Haijui bei zako, wateja wako au sera zako usipozitoa." },
      { objective: "O2", q: "Kazi nzuri za kwanza kwa AI ni zile ambazo:", options: ["Zinarudiwa, ni maneno zaidi, na ni rahisi kukagua", "Zinatuma pesa", "Zinasaini mikataba", "Zinaamua hali yako ya kodi"], answer: 0, why: "Hizi zina hatari ndogo na zinaokoa muda." },
      { objective: "O2", q: "Kazi ipi unapaswa kubaki nayo mwenyewe?", options: ["Kutoa mawazo ya majina ya duka", "Kuandika rasimu ya tangazo la karatasi", "Kutengeneza orodha ya kukagua", "Kuidhinisha malipo kwa msambazaji"], answer: 3, why: "Maamuzi ya pesa yanabaki kwako." },
      { objective: "O2", q: "Unapopanga kazi, \"AI inanisaidia kufikiri\" maana yake ni:", options: ["AI inafanya uamuzi", "Unatumia AI kutoa mawazo au kueleza, kisha unaamua mwenyewe", "Hutumii AI kamwe", "AI inakutumia kwa niaba yako"], answer: 1, why: "AI inaunga mkono fikra zako; wewe unaamua." },
      { objective: "O3", q: "Sehemu tatu za prompt ya biashara ni:", options: ["Jina, nywila, anwani", "Kazi, maelezo ya biashara, muundo", "Habari, tafadhali, asante", "Bei, kodi, jumla"], answer: 1, why: "Kazi, maelezo ya biashara na muundo huipa AI inachohitaji." },
      { objective: "O3", q: "Kipi ni maelezo ya biashara (context)?", options: ["\"Chini ya maneno 100\"", "\"Andika barua pepe\"", "\"Asante\"", "\"Sisi ni huduma ya kuosha magari inayohamahama huko Dallas, tunawahudumia wazazi wenye shughuli nyingi\""], answer: 3, why: "Maelezo ya biashara yanaeleza biashara yako na mteja wako." },
      { objective: "O3", q: "Lipi ni agizo la muundo?", options: ["\"Nipe orodha ya vipengele 5 vifupi\"", "\"Tunauza keki\"", "\"Wateja wetu ni wanafunzi\"", "\"Tuko Lagos\""], answer: 0, why: "Muundo unasema jibu linapaswa kuonekana vipi." },
      { objective: "O4", q: "Ombi la kufuatilia ni:", options: ["App mpya", "Maoni ya mteja", "Ombi la pili katika mazungumzo yaleyale linalobadilisha jibu", "Aina ya ankara"], answer: 2, why: "Maombi ya kufuatilia huboresha rasimu hatua kwa hatua." },
      { objective: "O4", q: "Ombi lipi la kufuatilia linaongeza mwito wa kuchukua hatua?", options: ["\"Iongeze urefu bila sababu.\"", "\"Ondoa taarifa zote.\"", "\"Ongeza nywila yangu.\"", "\"Ongeza hatua inayofuata iliyo wazi, kama Tutumie ujumbe kuweka nafasi.\""], answer: 3, why: "Mwito wa kuchukua hatua unamwambia mteja afanye nini baadaye." },
      { objective: "O4", q: "Kwa nini usome rasimu kwa sauti?", options: ["Kuifanya AI iwe haraka zaidi", "Kuokoa betri", "Kukagua kama inasikika kama wewe", "Ni lazima kisheria"], answer: 2, why: "Kuisikia kunakusaidia kuona mtindo na makosa." },
      { objective: "O5", q: "\"Hallucination\" ya AI ni:", options: ["Jibu la polepole", "Kitu kinachosikika kuwa kweli lakini kimebuniwa", "Aina ya nembo", "Malalamiko ya mteja"], answer: 1, why: "AI inaweza kubuni ukweli unaosikika kuwa halisi." },
      { objective: "O5", q: "AI inajumlisha orodha yako ya bei vibaya. Funzo ni lipi?", options: ["Rudia hesabu wewe mwenyewe au kwenye spreadsheet", "Amini hesabu za AI", "Panda bei zako", "Acha kuuza"], answer: 0, why: "Kagua namba kila mara kabla ya kuzitumia." },
      { objective: "O5", q: "Kwa mujibu wa FTC, madai ya matangazo lazima yawe:", options: ["Ya kuchekesha", "Yameandikwa na AI", "Ya kweli, yasiyopotosha na yenye ushahidi", "Mafupi"], answer: 2, why: "Sheria za FTC za ukweli katika matangazo zinataka hivi." },
      { objective: "O5", q: "Kwa swali la kodi au leseni, AI inatumika vizuri zaidi:", options: ["Kuelewa maneno kabla hujakagua chanzo rasmi au kwa mtaalamu", "Kufanya uamuzi wa mwisho", "Kuwasilisha kwa niaba yako", "Kuchukua nafasi ya mhasibu wako"], answer: 0, why: "Thibitisha mambo ya kodi na sheria kwenye vyanzo rasmi au kwa wataalamu." },
      { objective: "O6", q: "Kipi KAMWE hakipaswi kuingia kwenye mazungumzo ya AI?", options: ["\"Ifanye iwe ya kirafiki zaidi\"", "Aina ya biashara yako", "Mtindo unaotaka", "Namba ya kadi ya mteja"], answer: 3, why: "Namba za kadi ni taarifa binafsi za pesa." },
      { objective: "O6", q: "Kishika-nafasi kama \"[jina la mteja]\" kinakuwezesha:", options: ["Kuficha bei kwa wateja", "Kupata msaada bila kutoa taarifa binafsi", "Kuruka ukaguzi", "Kulipa haraka zaidi"], answer: 1, why: "Unajaza taarifa halisi wewe mwenyewe baadaye." },
      { objective: "O6", q: "Katika baadhi ya mipango ya bure ya AI, mazungumzo yako yanaweza:", options: ["Kupotea kabla hujayasoma", "Kuhifadhiwa na kutumiwa kuboresha AI", "Kutumwa kwa wateja wako", "Kuchapishwa"], answer: 1, why: "Ndiyo sababu unakagua mipangilio ya faragha na kuzuia taarifa binafsi." },
      { objective: "O6", q: "Barua pepe inayoonekana kutoka kwa msambazaji wako inakuomba ulipe akaunti mpya ya benki haraka. Hatua bora ni ipi?", options: ["Kulipa sasa", "Kujibu kwa taarifa zako za kuingia benki", "Kuituma kwa wateja wote", "Kumpigia msambazaji kwa namba unayoijua tayari"], answer: 3, why: "Ankara za uongo ni za kawaida; thibitisha kwa namba unayoijua." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      6,
      8,
      9,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Prompt ya biashara",
        objective: "O3",
        notYet: "Prompt haiko wazi, kwa mfano \"andika barua pepe\".",
        meets: "Prompt ina kazi, maelezo kuhusu biashara na muundo.",
        exceeds: "Pia inamtaja mteja na lengo, na rasimu ya kwanza iko karibu kuwa tayari."
      },
      {
        name: "Rasimu iliyoboreshwa",
        objective: "O4",
        notYet: "Rasimu ya kwanza ilitumika kama ilivyo.",
        meets: "Mabadiliko mawili ya kufuatilia yamefanywa, moja baada ya jingine, pamoja na taarifa za mwenye biashara mwenyewe.",
        exceeds: "Anaweza kusema kila badiliko lilirekebisha nini, na toleo la mwisho linasikika kama biashara yenyewe."
      },
      {
        name: "Ukweli na madai yamekaguliwa",
        objective: "O5",
        notYet: "Bei, saa za kazi, jumla au dai lilinakiliwa bila kukaguliwa.",
        meets: "Kila ukweli na namba imekaguliwa; kila dai ni la kweli na linaweza kuthibitishwa.",
        exceeds: "Ameandika mahali kila ukweli ulipokaguliwa, na hesabu imerudiwa kwenye spreadsheet."
      },
      {
        name: "Taarifa binafsi zimezuiwa",
        objective: "O6",
        notYet: "Prompt au toleo la mwisho lina taarifa za kadi, za benki au taarifa binafsi za wateja.",
        meets: "Hakuna taarifa binafsi za wateja au za pesa; vishika-nafasi vimetumika inapohitajika.",
        exceeds: "Pia amekagua mpangilio wa faragha wa zana ya AI kuhusu kuhifadhi mazungumzo."
      },
      {
        name: "Tayari kutumika",
        objective: "O1",
        notYet: "Toleo la mwisho halijakamilika au halijahifadhiwa.",
        meets: "Limehifadhiwa, limekaguliwa na liko tayari kutumika kwa kazi iliyochaguliwa.",
        exceeds: "Limehifadhiwa kama kiolezo ambacho mwenye biashara anaweza kukitumia tena wakati ujao."
      }
    ]
  },
  evaluation: {
    results: [
      "Wenye biashara wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wenye biashara wanaotumia rasimu ya AI kwa kazi halisi ya biashara ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wenye biashara wanaoripoti saa wanazookoa kila wiki katika kuandika na kupanga",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini",
      "Bei zako halisi, saa za kazi na taarifa za biashara kwa ajili ya kukagua",
      "Kama dakika 60 kwa jumla kwa masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika warsha, kila mwenye biashara alete kazi moja halisi na aifanyie kazi katika masomo yote sita.",
      "Wakumbushe wenye biashara wasibandike kamwe namba za kadi, taarifa za benki au orodha za wateja kwenye mazungumzo ya AI.",
      "Waweke wenye biashara wawiliwawili wasomeane rasimu kwa sauti na watafute madai yanayohitaji ushahidi.",
      "Elekeza maswali ya kodi na leseni kwenye vyanzo rasmi au kwa mtaalamu, si kwa AI.",
      "Pima kazi ya mwisho kwa rubric, mstari mmoja wa Bado kwa wakati."
    ]
  }
};
