"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-tools-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-tools",
  category: "Entrepreneurs",
  name: "Zana za AI Ambazo Kila Mjasiriamali Anapaswa Kuzijua",
  skills: "Kuchagua aina sahihi ya zana ya AI, Kutumia msaidizi wa mazungumzo kuandika, Kutengeneza michoro kwa Canva, Kutumia AI katika nyaraka na lahajedwali, Kujenga seti rahisi ya zana za AI",
  outcome: "kuchagua na kutumia zana za AI za bure kwa kazi kuu za biashara yako (kuandika, kubuni michoro, nyaraka na lahajedwali, na mikutano) na kuandaa ukurasa mmoja wa seti yako ya zana unaosema unatumia zana gani kwa kazi gani.",
  about: [
    "Kuna maelfu ya zana za AI, na mpya zinatokea kila wiki. Kozi hii ni kwa wamiliki wa biashara wanaotaka seti fupi ya zana zinazofaa badala ya kukimbiza kila app mpya.",
    "Utajifunza aina kuu za zana za AI, kisha utafanya mazoezi kwa zana halisi za bure zinazotumiwa na watu wengi: wasaidizi wa mazungumzo (ChatGPT, Microsoft Copilot, Google Gemini), kubuni michoro (Canva), nyaraka na lahajedwali (Google Docs na Sheets, Microsoft 365), na msaada wa kuandika kumbukumbu na mikutano.",
    "Kila somo ni kama dakika tano na linaisha na kazi unayofanya kwenye biashara yako mwenyewe. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Majina ya zana, huduma zake na bei hubadilika mara kwa mara, kwa hiyo kozi inakuonyesha jinsi ya kukagua kilichopo sasa."
  ],
  finalTask: "Tengeneza ukurasa mmoja wa \"Seti Yangu ya Zana za AI\" kwa biashara yako: orodhesha kazi nne (kuandika, kubuni michoro, nyaraka au hesabu, na mikutano au kumbukumbu), zana ya bure utakayotumia kwa kila kazi, kitu kimoja ulichotengeneza nayo katika kozi hii, na kanuni moja ya kulinda taarifa za wateja katika zana hiyo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo na watu wenye biashara za pembeni wanaotaka seti fupi ya zana za AI zinazofaa badala ya kukimbiza kila app mpya.",
    startingPoint: "Wanatumia barua pepe, simu na labda zana za ofisi za Google au Microsoft. Baadhi wamejaribu msaidizi wa mazungumzo. Wengi hawana mpango wa zana ipi inafanya kazi ipi, wala kanuni za taarifa za wateja katika zana hizo.",
    gap: "Zana mpya za AI zinatokea kila wiki, na wamiliki wanapoteza muda na pesa kwa kujaribu nyingi mno au kulipia kazi moja mara mbili. Wengine wanaweka taarifa za wateja kwenye zana bila kukagua mipangilio. Wamiliki wanahitaji zana moja ya bure iliyojaribiwa kwa kila kazi kuu na kanuni ya usalama kwa kila moja.",
    constraints: [
      "Maneno rahisi; hakuna haja ya ujuzi wa teknolojia",
      "Vifaa: simu au kompyuta; mipango ya bure tu",
      "Muda: kama dakika tano kwa kila somo pamoja na kazi fupi kwenye biashara ya mmiliki mwenyewe",
      "Majina ya zana, huduma na bei hubadilika mara kwa mara; kagua ukurasa wa bei wa kila zana",
      "Omba ruhusa kabla ya kumrekodi mtu yeyote, na usiweke taarifa za wateja katika mazungumzo na AI"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Wajasiriamali\", au uzoefu fulani wa kuomba msaada kutoka kwa msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa zana yoyote ya AI", action: "kutambua inafanya kazi ipi kati ya kazi nne za biashara: kuandika, kubuni michoro, nyaraka na hesabu, au mikutano na kumbukumbu", standard: "na kukagua kazi yake, gharama na kufaa kwake kabla ya kuiongeza" },
    { id: "O2", condition: "Ukitumia akaunti ambazo biashara yako tayari inazo", action: "kuchagua msaidizi wa mazungumzo wa bure na kuutumia kwa kazi halisi ya kuandika ya biashara", standard: "baada ya kulinganisha prompt ileile katika wasaidizi wawili" },
    { id: "O3", condition: "Ukitumia kiolezo cha Canva", action: "kutengeneza mchoro wa chapa yako wenye ujumbe mmoja, picha moja na mwito mmoja wa kuchukua hatua", standard: "kila picha ya AI ikiwa imekaguliwa kwa makosa na nembo zilizonakiliwa kabla ya kutumika" },
    { id: "O4", condition: "Ukipewa jedwali rahisi la mauzo au hati", action: "kutumia AI kuandika fomula ya lahajedwali na rasimu ya hati", standard: "ukijaribu fomula kwenye mistari uliyoikagua kwa mkono na kupeleka hati za kisheria zipitiwe" },
    { id: "O5", condition: "Ukipewa mkutano au ujumbe wa sauti", action: "kuugeuza kuwa kumbukumbu za maandishi na orodha ya hatua kwa kutumia AI", standard: "kila kipengele kikiwa na nani, nini na lini, na ruhusa kabla ya kuwarekodi wengine" },
    { id: "O6", condition: "Mwishoni mwa kozi", action: "kutengeneza ukurasa mmoja wa seti ya zana za AI wenye zana moja kwa kila kazi na kanuni ya usalama kwa kila moja", standard: "ukiorodhesha kitu ulichotengeneza kwa kila zana" }
  ],
  chapters: [
    {
      name: "Sura 1: Aina kuu za zana za AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ramani ya zana za AI: kazi nne, si apps mia nne",
          minutes: 4,
          goal: "Panga zana za AI kulingana na kazi zinazofanya kwa biashara yako.",
          text: [
            "Zana nyingi za AI ambazo biashara ndogo inahitaji zinaangukia katika kazi nne. Kuandika na kufikiri: wasaidizi wa mazungumzo kama ChatGPT, Microsoft Copilot na Google Gemini. Kubuni michoro: zana kama Canva zinazotengeneza michoro, vipeperushi na picha za mitandao ya kijamii. Nyaraka na hesabu: AI iliyojengwa ndani ya Google Docs na Sheets au Microsoft Word na Excel. Mikutano na kumbukumbu: zana zinazorekodi, kuandika maneno yaliyosemwa na kufupisha.",
            "Zana nyingi sasa zinafanya zaidi ya kazi moja. Msaidizi wa mazungumzo anaweza pia kutengeneza picha au kusoma lahajedwali unayopakia. Hilo ni sawa, lakini kuanza na zana moja kwa kila kazi kunaweka mambo rahisi.",
            "Kabla ya kuongeza zana yoyote mpya, uliza: Inafanya kazi gani? Je, tayari nina zana ya kazi hiyo? Je, kuna mpango wa bure? Nini kinatokea kwa taarifa ninazoweka ndani yake?"
          ],
          words: [["Msaidizi wa mazungumzo", "zana ya AI unayozungumza nayo katika dirisha la mazungumzo (chat), kama ChatGPT, Copilot au Gemini."], ["Kunakili sauti kuwa maandishi", "kugeuza maneno yaliyosemwa kuwa maandishi (kwa Kiingereza \"transcribe\")."]],
          slides: [
            { title: "Kazi nne", bullets: ["Kuandika na kufikiri: wasaidizi wa mazungumzo", "Kubuni michoro: Canva na zinazofanana nayo", "Nyaraka na hesabu: Docs, Sheets, Word, Excel", "Mikutano na kumbukumbu: kunakili sauti kuwa maandishi na kufupisha"] },
            { title: "Anza kwa urahisi", bullets: ["Zana moja kwa kila kazi mwanzoni", "Zana nyingi zinaingiliana, na hilo ni sawa"] },
            { title: "Kabla ya kuongeza zana, uliza", bullets: ["Inafanya kazi gani?", "Je, tayari ninayo moja?", "Je, kuna mpango wa bure? Taarifa zangu zinakwenda wapi?"] }
          ],
          tryIt: "Andika kazi nne kwenye ukurasa. Kando ya kila moja, andika zana yoyote unayoitumia tayari kwa kazi hiyo (hata isiyo ya AI). Acha nafasi tupu pale ambapo huna.",
          youCanNow: "kupanga zana za AI katika kazi nne za biashara na kuuliza maswali manne kabla ya kuongeza zana mpya.",
          quickCheck: [
            { objective: "O1", q: "Zana ya kunakili sauti kuwa maandishi inafanya kazi gani?", options: ["Mikutano na kumbukumbu", "Kubuni michoro", "Kuandika matangazo", "Malipo"], answer: 0, why: "Kunakili sauti kunageuza maneno yaliyosemwa kuwa kumbukumbu, na hiyo ni kazi ya mikutano na kumbukumbu." },
            { objective: "O1", q: "App mpya ya AI inaahidi kuandika machapisho ya mitandao ya kijamii, lakini tayari una msaidizi wa mazungumzo anayefanya hivyo. Unafanya nini?", options: ["Kujisajili mara moja", "Kuiacha isipokuwa inafanya kazi hiyo vizuri zaidi waziwazi", "Kulipia zote mbili", "Kufuta msaidizi wako wa mazungumzo"], answer: 1, why: "Zana moja kwa kila kazi inaweka mambo rahisi na inazuia kulipa mara mbili." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wasaidizi wa mazungumzo: kuchagua mmoja na kuutumia vizuri",
          minutes: 5,
          goal: "Fungua msaidizi wa mazungumzo wa bure na uutumie kwa kazi halisi ya kuandika ya biashara.",
          text: [
            "ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) na Google Gemini (gemini.google.com) zote zina matoleo ya bure. Zote zinaandika, zinafupisha, zinatoa mawazo na zinaeleza. Chagua unaofaa akaunti unazotumia tayari: Copilot kama biashara yako inatumia Microsoft, Gemini kama inatumia Google, au yeyote kati yao kama huna uhakika.",
            "Tumia prompt ileile yenye sehemu tatu kwa kila mmoja: kazi, hali ya biashara yako, na muundo wa jibu. Kisha uiboreshe kwa maombi ya kufuatilia kama \"fupisha\", \"iwe ya kirafiki zaidi\" au \"nipe chaguo tatu\".",
            "Jaribu prompt ileile katika wasaidizi wawili na ulinganishe. Utaona haraka yupi anafaa mtindo wako. Mipango ya bure ina mipaka inayobadilika; kagua ukurasa wa bei wa zana yenyewe kuona kilichojumuishwa leo."
          ],
          steps: ["Fungua msaidizi mmoja kwenye kivinjari cha wavuti au app yake rasmi.", "Andika prompt yenye sehemu tatu kwa kazi halisi ya biashara.", "Omba uboreshaji mmoja.", "Bandika prompt ileile katika msaidizi wa pili na ulinganishe."],
          words: [["Mpango wa bure", "toleo la zana unaloweza kutumia bila kulipa, kwa kawaida likiwa na mipaka."]],
          slides: [
            { title: "Wasaidizi watatu wa mazungumzo wa bure", bullets: ["ChatGPT: chatgpt.com", "Microsoft Copilot: copilot.microsoft.com", "Google Gemini: gemini.google.com"] },
            { title: "Yupi?", bullets: ["Akaunti za Microsoft: jaribu Copilot", "Akaunti za Google: jaribu Gemini", "Huna uhakika: jaribu wawili na ulinganishe"] },
            { title: "Utumie vizuri", bullets: ["Kazi + hali + muundo", "Omba badiliko moja kwa wakati", "Kagua mipaka kwenye ukurasa wa bei wa zana yenyewe"] }
          ],
          tryIt: "Andika prompt inayoomba maelezo ya maneno 50 kuhusu biashara yako kwa ajili ya wasifu wa mitandao ya kijamii. Iendeshe katika wasaidizi wawili wa mazungumzo. Weka lililo bora na uandike ulichagua zana gani.",
          youCanNow: "kuchagua msaidizi wa mazungumzo unaofaa akaunti zako na kuutumia kwa uandishi halisi wa biashara.",
          quickCheck: [
            { objective: "O2", q: "Njia ya haki ya kulinganisha wasaidizi wawili wa mazungumzo ni ipi?", options: ["Kuchagua mwenye nembo nzuri zaidi", "Kuuliza swali tofauti kwa kila mmoja", "Kuendesha prompt ileile kwa wote wawili", "Kutumia yule anayefunguka kwanza"], answer: 2, why: "Prompt ileile inaonyesha zana ipi inajibu hitaji lako vizuri zaidi." },
            { objective: "O2", q: "Duka lako linatumia Outlook na Word kila siku. Unajaribu msaidizi gani wa mazungumzo kwanza?", options: ["Unaohitaji akaunti mpya", "Zana ya kulipia ambayo hujawahi kuisikia", "Hakuna", "Microsoft Copilot"], answer: 3, why: "Zana inayofaa akaunti unazotumia tayari ni chaguo la kawaida la kwanza." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kubuni michoro kwa AI katika Canva",
          minutes: 5,
          goal: "Tengeneza mchoro rahisi wenye chapa ya biashara yako kwa Canva.",
          text: [
            "Canva (canva.com) ni zana ya kubuni michoro yenye mpango wa bure, maelfu ya violezo na huduma za AI zinazoweza kupendekeza maandishi, kutengeneza picha na kubadilisha ukubwa wa michoro. Huhitaji mafunzo ya ubunifu kutengeneza kipeperushi au chapisho safi la mitandao ya kijamii.",
            "Anza na kiolezo, si ukurasa mtupu. Tafuta unachohitaji, kama \"Instagram post bakery\" au \"flyer cleaning service\". Badilisha maneno, weka rangi zako na nembo yako, na uweke mambo rahisi: ujumbe mmoja, picha moja, mwito mmoja wa kuchukua hatua.",
            "Ukitumia picha iliyotengenezwa na AI, iangalie kwa makini kuona makosa kama mikono ya ajabu au maneno yaliyoandikwa vibaya, na usitengeneze picha inayonakili nembo au chapa ya mtu mwingine au mtu halisi bila ruhusa."
          ],
          steps: ["Fungua canva.com na uingie (sign in) au fungua akaunti ya bure.", "Tafuta kiolezo cha mchoro unaouhitaji.", "Badilisha maandishi yawe ujumbe wako na mwito wa kuchukua hatua.", "Ongeza rangi zako na nembo yako.", "Kagua tahajia na picha, kisha pakua."],
          words: [["Kiolezo", "mchoro ulio tayari ambao unaubadilisha ili ufae biashara yako (kwa Kiingereza \"template\")."], ["Rangi za chapa", "rangi mbili au tatu unazotumia kila wakati ili wateja wakutambue."]],
          slides: [
            { title: "Canva kwa biashara", bullets: ["Mpango wa bure wenye violezo", "AI ya kupendekeza maandishi na kutengeneza picha", "Hakuna haja ya mafunzo ya ubunifu"] },
            { title: "Anza na kiolezo", bullets: ["Tafuta \"flyer cleaning service\" au kitu kama hicho", "Badilisha maneno", "Ongeza rangi zako na nembo yako"] },
            { title: "Weka mambo rahisi", bullets: ["Ujumbe mmoja", "Picha moja", "Mwito mmoja wa kuchukua hatua"] },
            { title: "Kagua picha za AI", bullets: ["Tafuta mikono ya ajabu au maneno yaliyoandikwa vibaya", "Usinakili chapa nyingine au watu halisi"] }
          ],
          tryIt: "Tengeneza chapisho moja la mitandao ya kijamii au kipeperushi kimoja cha biashara yako katika Canva kutoka kwa kiolezo. Tumia maelezo ya biashara yako kutoka somo lililopita na mwito mmoja wa kuchukua hatua. Kipakue.",
          youCanNow: "kutengeneza mchoro safi wenye chapa yako katika Canva na kukagua picha za AI kabla ya kuzitumia.",
          quickCheck: [
            { objective: "O3", q: "Mwito wa kuchukua hatua kwenye kipeperushi ni nini?", options: ["Hatua inayofuata iliyo wazi, kama \"Tutumie ujumbe kuweka nafasi\"", "Picha", "Ukubwa wa herufi", "Nembo yako"], answer: 0, why: "Mwito wa kuchukua hatua unawaambia watu wafanye nini baadaye." },
            { objective: "O3", q: "AI inakutengenezea picha inayofanana na nembo ya chapa maarufu. Unafanya nini?", options: ["Kuitumia; AI ndiyo iliyoitengeneza", "Kutoitumia na kutengeneza picha nyingine", "Kuipunguza ukubwa ili mtu asione", "Kuongeza jina lako juu yake"], answer: 1, why: "Hupaswi kutumia picha zinazonakili nembo ya kampuni nyingine." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Aina kuu za zana za AI",
        questions: [
          { objective: "O1", q: "Zana gani inafaa kazi ya \"kubuni michoro\"?", options: ["Kikokotoo", "Canva", "Sanduku la barua pepe", "App ya benki"], answer: 1, why: "Canva inatengeneza vipeperushi, picha za mitandao ya kijamii na michoro mingine." },
          { objective: "O2", q: "Biashara yako inatumia Microsoft Outlook na Word. Msaidizi gani wa mazungumzo ni chaguo la kawaida la kwanza?", options: ["App ya ramani", "App ya kuchora", "App ya muziki", "Microsoft Copilot"], answer: 3, why: "Copilot inafaa biashara ambazo tayari zinatumia akaunti za Microsoft." },
          { objective: "O1", q: "Kabla ya kuongeza zana mpya ya AI, swali lipi ni muhimu zaidi?", options: ["Inafanya kazi gani, na je, tayari nina zana ya kazi hiyo?", "Je, nembo yake ni nzuri?", "Je, ni maarufu kwenye TikTok?", "Je, ina hali ya giza (dark mode)?"], answer: 0, why: "Anza na kazi; epuka kulipia zana zinazorudia ulicho nacho." },
          { objective: "O3", q: "Njia bora ya kuanza mchoro katika Canva ni ipi?", options: ["Ukurasa mtupu", "Kunakili kipeperushi cha mshindani", "Kiolezo unachokibadilisha", "Kuandika taarifa zako za benki"], answer: 2, why: "Violezo vinakupa mpangilio safi wa kurekebisha." },
          { objective: "O3", q: "Picha ya AI kwa kipeperushi chako ina neno lililoandikwa vibaya kwenye bango. Unafanya nini?", options: ["Kuitumia hivyo hivyo", "Kuichapisha mara mbili", "Kuirekebisha au kutengeneza picha mpya kabla ya kuitumia", "Kumlaumu mteja"], answer: 2, why: "Kagua picha za AI kwa makosa kabla hazijatoka." }
        ]
      }
    },
    {
      name: "Sura 2: AI katika zana zako za kila siku za biashara",
      lessons: [
        {
          objectives: ["O4"],
          title: "AI katika nyaraka na lahajedwali",
          minutes: 5,
          goal: "Tumia AI kuandika rasimu ya hati na kuelewa lahajedwali.",
          text: [
            "Google Docs na Sheets na Microsoft Word na Excel sasa zina wasaidizi wa AI katika mipango mingi (Gemini katika Google Workspace, Copilot katika Microsoft 365). Huduma unazopata zinategemea mpango wako, na hilo hubadilika, kwa hiyo kagua kurasa za msaada (help) za akaunti yako.",
            "Kama mpango wako hauna msaidizi uliojengwa ndani, bado unaweza kutumia msaidizi wa mazungumzo wa bure: bandika maandishi yasiyo na taarifa binafsi, au eleza safu zako, na uombe rasimu, fomula au maelezo.",
            "Maombi yenye manufaa: \"Geuza maelezo haya kuwa rasimu ya ukurasa mmoja ya mkataba wa huduma ili wakili wangu aipitie.\" \"Andika fomula ya lahajedwali inayojumlisha safu C pale safu B inaposema Paid.\" \"Eleza fomula hii inafanya nini.\" Kila wakati jaribu fomula kwenye mistari michache unayoweza kuikagua kwa mkono."
          ],
          steps: ["Fungua hati au lahajedwali unayotumia tayari.", "Tafuta msaidizi wa AI uliojengwa ndani; kama hakuna, fungua msaidizi wa mazungumzo.", "Omba rasimu au fomula, ukieleza safu zako bila taarifa binafsi.", "Jaribu fomula yoyote kwenye mistari michache unayoweza kuikagua mwenyewe."],
          words: [["Fomula", "maagizo katika kisanduku cha lahajedwali yanayokokotoa kitu, kama jumla."], ["Google Workspace / Microsoft 365", "matoleo ya kulipia ya biashara ya zana za ofisi za Google na Microsoft."]],
          slides: [
            { title: "Wasaidizi wa AI waliojengwa ndani", bullets: ["Gemini katika Google Workspace", "Copilot katika Microsoft 365", "Huduma zinategemea mpango wako; kagua kurasa za msaada"] },
            { title: "Hakuna msaidizi uliojengwa ndani?", bullets: ["Tumia msaidizi wa mazungumzo wa bure", "Eleza safu zako, bila taarifa binafsi", "Omba rasimu, fomula au maelezo"] },
            { title: "Jaribu kabla ya kuamini", bullets: ["Jaribu fomula kwenye mistari michache", "Kagua jibu kwa mkono", "Wakili apitie rasimu za kisheria"] }
          ],
          sources: [{ name: "Google Workspace: huduma za Gemini", url: "https://workspace.google.com/solutions/ai/" }, { name: "Microsoft Support: Copilot", url: "https://support.microsoft.com/en-us/copilot" }],
          tryIt: "Eleza jedwali rahisi la mauzo (tarehe, bidhaa, kiasi, imelipwa au la) kwa msaidizi wa AI na uombe fomula inayojumlisha mauzo yaliyolipwa tu. Tengeneza jedwali la majaribio la mistari mitano na ukague fomula kwa mkono.",
          youCanNow: "kutumia AI kuandika rasimu za nyaraka na kuandika na kujaribu fomula za lahajedwali.",
          quickCheck: [
            { objective: "O4", q: "Fomula ya lahajedwali ni nini?", options: ["Chati", "Aina ya herufi", "Maagizo katika kisanduku yanayokokotoa kitu", "Jina la faili"], answer: 2, why: "Fomula zinakokotoa matokeo kutoka kwa taarifa zilizo katika jedwali lako." },
            { objective: "O4", q: "Unataka AI ikuandikie fomula ya jedwali lako la mauzo ya wateja. Unashiriki nini?", options: ["Jedwali zima lenye majina ya wateja", "Namba za simu za wateja", "Taarifa zako za kuingia benki", "Maelezo ya safu bila taarifa binafsi"], answer: 3, why: "Kueleza safu kunakupatia fomula bila kushiriki taarifa binafsi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kumbukumbu za mikutano na kunakili sauti kuwa maandishi",
          minutes: 4,
          goal: "Geuza mkutano au ujumbe wa sauti kuwa kumbukumbu wazi na hatua za kufanya kwa kutumia AI.",
          text: [
            "Zana nyingi sasa zinaweza kugeuza maneno yaliyosemwa kuwa maandishi: kinasa sauti kwenye simu nyingi, huduma za kunakili sauti katika Microsoft Teams, Google Meet na Zoom kwenye baadhi ya mipango, na kuandika kwa sauti katika Google Docs (Tools, kisha Voice typing) au dictation katika Word.",
            "Ukishapata maandishi, msaidizi wa mazungumzo anaweza kuyageuza kuwa muhtasari wenye maamuzi na hatua za kufanya: nani anafanya nini ifikapo lini. Ondoa taarifa binafsi za wateja kabla ya kubandika.",
            "Kila wakati waambie watu kabla ya kurekodi au kunakili mazungumzo. Sheria kuhusu kurekodi simu zinatofautiana kati ya majimbo na nchi, na baadhi zinahitaji idhini ya kila mtu, kwa hiyo kuuliza kwanza ni tabia salama."
          ],
          steps: ["Waambie wote kwamba unataka kurekodi au kunakili, na upate ndiyo.", "Rekodi au nakili mkutano au ujumbe wa sauti.", "Ondoa taarifa binafsi kutoka kwenye maandishi.", "Uliza AI: \"Fupisha haya kuwa maamuzi na hatua za kufanya: nani, nini, ifikapo lini.\"", "Linganisha muhtasari na unachokumbuka."],
          words: [["Hatua ya kufanya", "kazi inayotokana na mkutano yenye mtu wa kuifanya na tarehe ya mwisho (kwa Kiingereza \"action item\")."], ["Idhini", "ruhusa anayotoa mtu kabla ya jambo kufanyika."]],
          slides: [
            { title: "Kutoka sauti hadi maandishi", bullets: ["Vinasa sauti vya simu", "Teams, Meet na Zoom kwenye baadhi ya mipango", "Voice typing katika Docs, dictation katika Word"] },
            { title: "Kutoka maandishi hadi hatua za kufanya", bullets: ["Bandika maandishi, bila taarifa binafsi", "Omba maamuzi na hatua za kufanya", "Nani, nini, ifikapo lini"] },
            { title: "Uliza kwanza kila wakati", bullets: ["Waambie watu kabla ya kurekodi", "Sheria za kurekodi zinatofautiana kati ya maeneo", "Baadhi ya maeneo yanahitaji idhini ya kila mtu"] }
          ],
          tryIt: "Rekodi ujumbe wa sauti wa dakika mbili kuhusu kile biashara yako inapaswa kufanya wiki hii. Unakili kuwa maandishi kwa voice typing au kwa simu yako, kisha umwombe msaidizi wa AI auigeuze kuwa orodha ya hatua yenye tarehe.",
          youCanNow: "kugeuza maelezo yaliyosemwa kuwa orodha ya hatua iliyoandikwa, na kuomba ruhusa kabla ya kuwarekodi wengine.",
          quickCheck: [
            { objective: "O5", q: "Kila hatua ya kufanya inapaswa kusema vitu gani vitatu?", options: ["Nani, nini na ifikapo lini", "Wapi, kwa nini na kiasi gani", "Tarehe, hali ya hewa na mada", "Mada tu"], answer: 0, why: "Nani anafanya nini ifikapo lini kunafanya hatua iwe wazi." },
            { objective: "O5", q: "Unataka kurekodi simu na msambazaji ili uandike kumbukumbu. Unafanya nini kwanza?", options: ["Kuirekodi kimya kimya", "Kumwambia na kuomba ruhusa yake", "Kurekodi nusu ya simu tu", "Kuuliza AI kama inaruhusiwa"], answer: 1, why: "Waambie watu na upate ruhusa kabla ya kurekodi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujenga seti yako ya zana na kuiweka salama",
          minutes: 5,
          goal: "Chagua zana moja kwa kila kazi na uweke kanuni ya usalama kwa kila moja.",
          text: [
            "Seti ya zana unayoitumia kweli ni bora kuliko orodha ndefu ya apps ulizojaribu mara moja. Kwa kila moja ya kazi nne, chagua zana moja, andika kama uko kwenye mpango wa bure au wa kulipia, na andika kitu kimoja ulichotengeneza nayo.",
            "Kagua mipangilio ya taarifa ya kila zana. Nyingi zinakuruhusu kuzima historia ya mazungumzo au kuzuia maudhui yako yasitumike kufundisha AI. Mipango ya biashara mara nyingi ina masharti ya faragha yenye nguvu zaidi; soma ukurasa wa faragha wa zana kabla ya kuweka nyaraka za biashara ndani yake.",
            "Weka kanuni moja rahisi kwa kila zana, kama \"Hakuna namba za simu za wateja katika ChatGPT\" au \"Napakua tu picha za Canva nilizozikagua\". Pitia seti yako ya zana kila baada ya miezi michache, kwa sababu zana, huduma na bei hubadilika."
          ],
          steps: ["Orodhesha kazi nne.", "Chagua zana moja kwa kila kazi na uandike kama ni ya bure au ya kulipia.", "Fungua mipangilio ya kila zana na utafute chaguo zake za taarifa au faragha.", "Andika kanuni moja ya usalama kwa kila zana.", "Weka kikumbusho cha kupitia seti ya zana baada ya miezi mitatu."],
          words: [["Seti ya zana", "orodha fupi ya zana unazozitegemea, pamoja na kila moja ni ya nini (kwa Kiingereza \"toolkit\")."], ["Mipangilio ya faragha", "chaguo zinazodhibiti kile zana inachohifadhi na jinsi inavyotumia taarifa zako."]],
          slides: [
            { title: "Zana moja kwa kila kazi", bullets: ["Kuandika, kubuni michoro, nyaraka, mikutano", "Ya bure au ya kulipia?", "Kitu kimoja ulichotengeneza nayo"] },
            { title: "Kagua mipangilio ya taarifa", bullets: ["Zima historia au mafunzo ya AI kama chaguo lipo", "Mipango ya biashara inaweza kulinda taarifa vizuri zaidi", "Soma ukurasa wa faragha kwanza"] },
            { title: "Kanuni moja ya usalama kwa kila zana", bullets: ["\"Hakuna namba za simu za wateja katika mazungumzo\"", "\"Natumia tu picha nilizozikagua\""] },
            { title: "Pitia kila baada ya miezi michache", bullets: ["Zana, huduma na bei hubadilika"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza ukurasa wako mmoja wa \"Seti Yangu ya Zana za AI\": kazi nne, zana moja kwa kila moja, kitu kimoja ulichotengeneza nayo katika kozi hii, na kanuni moja ya usalama kwa kila zana.",
          youCanNow: "kuendesha biashara yako kwa seti ndogo na salama ya zana za AI unayoipitia mara kwa mara.",
          quickCheck: [
            { objective: "O6", q: "Kanuni ya usalama ya seti ya zana ni nini?", options: ["Orodha ya bei", "Ukurasa wa kuingia wa zana", "Kanuni kama \"hakuna namba za simu za wateja katika mazungumzo na AI\"", "Nakala ya akiba ya faili zako"], answer: 2, why: "Kanuni ya usalama inasema jinsi unavyolinda taarifa katika kila zana." },
            { objective: "O6", q: "Miezi sita baada ya kutengeneza seti yako ya zana, zana moja inabadilisha mpango wake wa bure. Unafanya nini?", options: ["Kupuuza", "Kufuta seti ya zana", "Kuendelea kulipa bila kuangalia", "Kukagua ukurasa wa bei wa zana yenyewe na kusasisha seti yako ya zana"], answer: 3, why: "Zana na bei hubadilika, kwa hiyo unapitia seti ya zana mara kwa mara." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: AI katika zana zako za kila siku za biashara",
        questions: [
          { objective: "O4", q: "Mpango wa lahajedwali yako hauna msaidizi wa AI uliojengwa ndani. Unaweza kufanya nini?", options: ["Kueleza safu zako kwa msaidizi wa mazungumzo wa bure na kuomba fomula", "Kukata tamaa", "Kubandika namba za kadi za wateja wako katika AI", "Kununua kila app ya AI"], answer: 0, why: "Msaidizi wa mazungumzo anaweza kuandika fomula kutokana na maelezo bila taarifa binafsi." },
          { objective: "O4", q: "AI imekuandikia fomula ya lahajedwali. Unapaswa kufanya nini kabla ya kuiamini?", options: ["Kufuta jedwali", "Kuitumia kwa mwaka mzima mara moja", "Kuwatumia wateja", "Kuijaribu kwenye mistari michache unayoweza kuikagua kwa mkono"], answer: 3, why: "Kujaribu kwenye mistari michache kunagundua makosa." },
          { objective: "O5", q: "Unapaswa kufanya nini kabla ya kurekodi simu na mteja?", options: ["Kurekodi kwa siri", "Kumwambia na kupata ruhusa yake", "Kurekodi dakika ya kwanza tu", "Kuiweka mtandaoni"], answer: 1, why: "Sheria za kurekodi zinatofautiana, na baadhi zinahitaji idhini ya kila mtu." },
          { objective: "O5", q: "Hatua ya kufanya inapaswa kusema:", options: ["Nani anafanya nini ifikapo lini", "Tarehe ya mkutano tu", "Mkutano ulichukua muda gani", "Nani alichelewa"], answer: 0, why: "Hatua za kufanya zinataja mtu, kazi na tarehe ya mwisho." },
          { objective: "O6", q: "Kwa nini upitie seti yako ya zana za AI kila baada ya miezi michache?", options: ["Ili kufuta biashara yako", "Inatakiwa na sheria", "Zana, huduma na bei hubadilika", "Kwa sababu AI husahau"], answer: 2, why: "Kupitia mara kwa mara kunaweka seti yako ya zana ikiwa ya kisasa na yenye gharama nafuu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Zana za AI Ambazo Kila Mjasiriamali Anapaswa Kuzijua",
    questions: [
      { objective: "O1", q: "Kazi nne za zana za AI katika kozi hii ni:", options: ["Benki, usafirishaji, kuajiri, kodi", "Kuandika, kubuni michoro, nyaraka na hesabu, mikutano na kumbukumbu", "Muziki, michezo ya video, filamu, michezo", "Simu, kompyuta ndogo, tableti, saa"], answer: 1, why: "Kazi hizo nne zinashughulikia mahitaji mengi ya biashara ndogo." },
      { objective: "O2", q: "Kipi ni msaidizi wa mazungumzo?", options: ["Gari la kusafirisha mizigo", "Kisoma msimbopau", "Droo ya pesa", "Google Gemini"], answer: 3, why: "Gemini, ChatGPT na Copilot ni wasaidizi wa mazungumzo." },
      { objective: "O1", q: "Kwa nini uanze na zana moja kwa kila kazi?", options: ["Ili wateja waone apps zako", "Ni sheria", "Zana za AI haziwezi kushiriki kazi", "Inaweka mambo rahisi na inazuia kulipa mara mbili"], answer: 3, why: "Seti ndogo ya zana ni rahisi kujifunza na ni nafuu zaidi." },
      { objective: "O1", q: "Unapaswa kukagua wapi kile mpango wa bure wa zana unachojumuisha leo?", options: ["Maoni ya nasibu chini ya video", "Ukurasa wa bei wa zana yenyewe", "Kwa mteja wako", "Kipeperushi cha zamani"], answer: 1, why: "Mipango hubadilika; ukurasa rasmi ndio wa sasa." },
      { objective: "O2", q: "Biashara yako inatumia Gmail na Google Drive. Msaidizi wa mazungumzo wa kawaida kujaribu kwanza ni:", options: ["Mashine ya faksi", "Kichujio cha picha", "Google Gemini", "Kihesabu maneno"], answer: 2, why: "Gemini inafaa biashara zinazotumia akaunti za Google." },
      { objective: "O2", q: "Njia nzuri ya kulinganisha wasaidizi wawili wa mazungumzo ni:", options: ["Kuendesha prompt ileile kwa wote wawili", "Kusoma matangazo yao tu", "Kumuuliza mgeni", "Kuchagua mpya zaidi"], answer: 0, why: "Prompt ileile katika zana mbili inaonyesha ipi inafaa mtindo wako." },
      { objective: "O3", q: "Katika Canva, njia ya haraka zaidi ya kupata mchoro safi ni:", options: ["Kunakili nembo ya chapa nyingine", "Kuanza na ukurasa mtupu", "Kuanza na kiolezo", "Kutumia aina kumi za herufi"], answer: 2, why: "Violezo vinakupa mpangilio ulio tayari." },
      { objective: "O3", q: "Kipeperushi rahisi kinapaswa kuwa na:", options: ["Ujumbe mmoja, picha moja, mwito mmoja wa kuchukua hatua", "Kila bidhaa unayouza", "Maandishi madogo tu", "Bila jina la biashara"], answer: 0, why: "Michoro rahisi ni rahisi kusoma." },
      { objective: "O3", q: "HUPASWI kutumia AI kutengeneza picha ambayo:", options: ["Inaonyesha bidhaa yako mwenyewe", "Inanakili nembo ya kampuni nyingine", "Inatumia rangi za chapa yako", "Ina jina la duka lako limeandikwa sawa"], answer: 1, why: "Kunakili chapa nyingine kunaweza kuvunja sheria za alama za biashara au hakimiliki." },
      { objective: "O4", q: "Gemini katika Google Workspace na Copilot katika Microsoft 365 ni:", options: ["Huduma za usafirishaji", "Printa", "Apps za malipo", "Wasaidizi wa AI waliojengwa ndani ya zana za ofisi katika mipango mingi"], answer: 3, why: "Zinaongeza AI kwenye nyaraka, barua pepe na lahajedwali." },
      { objective: "O4", q: "Unapoomba AI fomula ya lahajedwali, unapaswa kushiriki:", options: ["Maelezo ya safu, bila taarifa binafsi", "Namba za kadi za wateja", "Nywila yako ya benki", "Namba yako ya utambulisho wa kodi"], answer: 0, why: "Kueleza safu kunatosha kupata fomula." },
      { objective: "O4", q: "Fomula ya lahajedwali ni:", options: ["Anwani ya barua pepe", "Aina ya chati", "Aina ya herufi", "Maagizo katika kisanduku yanayokokotoa kitu"], answer: 3, why: "Fomula zinakokotoa thamani kama jumla." },
      { objective: "O4", q: "AI imekuandikia rasimu ya mkataba wa huduma. Nini kinafuata?", options: ["Kuuweka mtandaoni", "Kuusaini na wateja mara moja", "Wakili aupitie kabla ya kuutumia", "Kufuta wa zamani bila kuusoma"], answer: 2, why: "Nyaraka za kisheria zinapaswa kupitiwa na mtaalamu." },
      { objective: "O5", q: "Voice typing katika Google Docs inakuwezesha:", options: ["Kulipa bili", "Kuongea na maneno yako yakaandikwa", "Kubuni nembo", "Kusafirisha bidhaa"], answer: 1, why: "Inageuza maneno yaliyosemwa kuwa maandishi." },
      { objective: "O5", q: "Baada ya kunakili mkutano kuwa maandishi, ombi lenye manufaa kwa AI ni:", options: ["\"Tafsiri kuwa msimbo wa kompyuta.\"", "\"Urefushe.\"", "\"Ongeza mambo ya nasibu.\"", "\"Fupisha haya kuwa maamuzi na hatua za kufanya: nani, nini, ifikapo lini.\""], answer: 3, why: "Hili linageuza maandishi marefu kuwa hatua zinazofuata zilizo wazi." },
      { objective: "O5", q: "Kabla ya kurekodi simu, unapaswa:", options: ["Kumrekodi mtu mwingine tu", "Kuficha kinasa sauti", "Kuwaambia watu na kupata ruhusa yao", "Kuuliza AI kama ni halali na kutowauliza wao"], answer: 2, why: "Kanuni za idhini zinatofautiana kati ya maeneo; kuuliza kwanza ni salama." },
      { objective: "O6", q: "Zana nyingi za AI zinakuruhusu kubadilisha mipangilio ya taarifa ili:", options: ["Mazungumzo yako yasihifadhiwe wala kutumika kufundisha AI", "Bei zako zipande", "Wateja wako wapate barua pepe", "Nembo yako ibadilike"], answer: 0, why: "Mipangilio ya faragha inadhibiti kile zana inachohifadhi." },
      { objective: "O6", q: "Kipi ni kanuni nzuri ya usalama ya seti ya zana?", options: ["\"Shiriki nywila na AI\"", "\"Hakuna namba za simu za wateja katika mazungumzo na AI\"", "\"Usikague picha za AI kamwe\"", "\"Tumia kila app mpya\""], answer: 1, why: "Kanuni rahisi zinawalinda wateja wako." },
      { objective: "O6", q: "Ukurasa wako mmoja wa seti ya zana unaorodhesha kwa kila kazi:", options: ["Salio lako la benki", "Zana, bure au kulipia, kitu ulichotengeneza, kanuni ya usalama", "Nywila za washindani wako", "Kila app uliyowahi kujaribu"], answer: 1, why: "Hilo linafanya seti ya zana iwe ya vitendo na salama." },
      { objective: "O6", q: "Kwa nini unaweza kuchagua mpango wa biashara wa zana ya AI?", options: ["Unaweza kutoa masharti ya faragha yenye nguvu zaidi kwa nyaraka za biashara", "Ni wa bure kila wakati", "Unaondoa haja ya kukagua kazi", "Unaandika kodi zako"], answer: 0, why: "Mipango ya biashara mara nyingi inalinda taarifa vizuri zaidi; soma ukurasa wa faragha." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 4, 6, 8, 10, 11, 14, 15, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kazi nne zimeshughulikiwa", objective: "O1", notYet: "Kazi moja haipo au zana mbili zinafanya kazi moja.", meets: "Kuandika, kubuni michoro, nyaraka au hesabu, na mikutano au kumbukumbu, kila moja na zana moja.", exceeds: "Anasema kwa nini kila zana ilichaguliwa badala ya nyingine." },
      { name: "Kimetengenezwa kwa kila zana", objective: "O3", notYet: "Zana moja au zaidi haina kitu kilichotengenezwa nayo.", meets: "Anaorodhesha kitu kimoja halisi kilichotengenezwa kwa kila zana, kama maelezo ya wasifu, kipeperushi, fomula na orodha ya hatua.", exceeds: "Vitu vilivyotengenezwa tayari vinatumika katika biashara." },
      { name: "Matokeo yamekaguliwa", objective: "O4", notYet: "Fomula, picha au hati ilitumika bila kukaguliwa.", meets: "Fomula imejaribiwa kwenye mistari iliyokaguliwa kwa mkono; picha na nyaraka zimekaguliwa kabla ya kutumika.", exceeds: "Anaandika nyaraka zipi zinahitaji kupitiwa na wakili au mtaalamu." },
      { name: "Kanuni za usalama", objective: "O6", notYet: "Zana haina kanuni ya usalama, au kanuni haiko wazi.", meets: "Kila zana ina kanuni moja wazi kwa taarifa za wateja.", exceeds: "Pia anaandika mpangilio wa taarifa uliobadilishwa katika kila zana na wakati wa kupitia seti ya zana." },
      { name: "Mpango wa bure na kufaa", objective: "O2", notYet: "Haijasemwa kama ni ya bure au ya kulipia, au zana haifai akaunti za biashara.", meets: "Bure au kulipia imeandikwa kwa kila zana, ikiwa imekaguliwa kwenye ukurasa wake wa bei.", exceeds: "Anaandika mpango wa kulipia ungeongeza nini na kama unastahili." }
    ]
  },
  evaluation: {
    results: [
      "Wamiliki wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki ambao bado wanatumia zana zao nne za seti baada ya siku 30 (utafiti wa kufuatilia)",
      "Wamiliki wanaoripoti kusitisha zana ya kulipia iliyojirudia au isiyotumika",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Akaunti za bure: msaidizi wa mazungumzo, Canva, na Google Docs na Sheets au Microsoft 365",
      "Simu kwa ajili ya ujumbe mfupi wa sauti",
      "Kama dakika 60 kwa jumla kwa masomo, kazi, majaribio na ukurasa wa seti ya zana"
    ],
    facilitatorNotes: [
      "Waambie wamiliki walete maelezo halisi ya biashara zao; yanatumika tena katika Somo la 2 na la 3.",
      "Kagua mipango ya bure ya sasa kwenye ukurasa wa bei wa kila zana kabla ya kipindi, kwa sababu hubadilika mara kwa mara.",
      "Wakumbushe wanafunzi kuomba ruhusa kabla ya kumrekodi mtu yeyote na kutoweka taarifa za wateja katika mazungumzo na AI.",
      "Tumia jedwali la majaribio la mistari mitano lenye taarifa za kubuni kwa zoezi la fomula.",
      "Pima ukurasa wa seti ya zana kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};
