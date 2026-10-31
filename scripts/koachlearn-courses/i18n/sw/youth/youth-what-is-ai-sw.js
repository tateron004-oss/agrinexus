"use strict";

// Koach Learn course (Swahili translation of youth/youth-what-is-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-what-is-ai-sw",
  lang: "sw",
  translationOf: "youth-what-is-ai",
  category: "Youth",
  name: "AI ni Nini? (kwa Vijana)",
  skills: "Kueleza AI ni nini, Kutambua AI katika apps za kila siku, Kufuata vikomo vya umri na sheria za shule, Kumuuliza msaidizi wa AI swali lililo wazi, Kukagua ukweli wa jibu la AI",
  outcome: "kueleza AI ni nini kwa maneno yako mwenyewe, kuitambua katika apps unazotumia tayari, na kutumia msaidizi wa AI wa bure kwa njia sahihi: ndani ya kikomo chake cha umri na sheria za shule yako, kwa swali lililo wazi, na ukikagua jibu kabla ya kuliamini.",
  about: [
    "AI tayari iko kwenye simu yako, michezo yako, app yako ya muziki na zana zako za shule. Kozi hii ni ya vijana wenye umri wa kama miaka 13 hadi 18 wanaotaka kuelewa AI ni nini hasa na jinsi ya kuitumia vizuri.",
    "Utajifunza AI ni nini na si nini, inajificha wapi katika apps unazotumia kila siku, jinsi ya kufuata vikomo vya umri na sheria za AI za shule yako, jinsi ya kuuliza swali lililo wazi, na jinsi ya kukagua jibu kabla ya kuliamini.",
    "Kila somo linachukua kama dakika tano. Lisome, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza \"maelezo ya AI\" ya ukurasa mmoja kwa mwanafunzi mdogo kuliko wewe au rafiki: eleza AI ni nini kwa sentensi mbili, taja apps tatu unazotumia zenye AI, na weka swali moja ulilomuuliza msaidizi wa AI, jibu lake, na jinsi ulivyolikagua.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wenye umri wa kama miaka 13 hadi 18, walio shuleni au nje ya shule, ambao tayari wanatumia simu, michezo na apps na wanataka kuelewa AI ni nini hasa na jinsi ya kuitumia vizuri.",
    startingPoint: "Wanatumia apps za muziki, video, michezo na ujumbe kila siku na huenda wamejaribu msaidizi wa mazungumzo. Wengi hawawezi kueleza AI inavyofanya kazi, inajificha wapi katika apps zao, au jinsi ya kukagua inachosema.",
    gap: "AI iko katika zana ambazo vijana wanatumia kwa shule na burudani, lakini wengi wanaitumia bila kujua vikomo vyake vya umri, sheria za shule yao, au kwamba inaweza kukosea. Kujifunza kuuliza kwa uwazi, kukagua majibu na kubaki salama kunawasaidia kujifunza vizuri zaidi, kuepuka matatizo ya udanganyifu, na kujilinda wao na wengine.",
    constraints: [
      "Vikomo vya umri: zana nyingi za AI zinataka watumiaji wawe na miaka 13 au zaidi, na baadhi zinataka ruhusa ya mzazi au mlezi kwa walio chini ya miaka 18",
      "Sheria za shule kuhusu AI zinatofautiana kati ya shule na kati ya walimu",
      "Vifaa: simu au kompyuta ya shule; baadhi wana intaneti kidogo nyumbani",
      "Faragha na usalama: hakuna taarifa binafsi wala picha za watu halisi katika zana za AI",
      "Maneno rahisi na masomo mafupi kwa viwango tofauti vya kusoma"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa maneno yako mwenyewe", action: "kueleza AI ni nini, inavyojifunza kutoka kwa mifano, na kwa nini inaweza kukosea", standard: "kwa sentensi mbili ambazo mwanafunzi mdogo anaweza kuzielewa" },
    { id: "O2", condition: "Ukitumia apps kwenye simu yako au kompyuta ya shule", action: "kutambua mahali AI inapopendekeza, kupanga, kukisia au kuunda kitu, ikiwa ni pamoja na AI zalishi", standard: "ukitaja angalau apps tatu na kile AI inachofanya katika kila moja" },
    { id: "O3", condition: "Kabla ya kutumia zana mpya ya AI nyumbani au shuleni", action: "kukagua sheria ya umri ya zana hiyo na sheria za AI za shule yako, na kumwonyesha mzazi au mlezi app hiyo", standard: "ukitumia ukurasa rasmi wa msaada au masharti wa zana hiyo" },
    { id: "O4", condition: "Ukiwa na kitu unachotaka kujifunza", action: "kuandika prompt inayosema unachotaka, maelezo kidogo ya hali yako na jinsi unavyotaka jibu", standard: "ili jibu la kwanza liwe na manufaa" },
    { id: "O5", condition: "Ukipewa jibu la AI lenye ukweli ndani yake", action: "kukagua majina, tarehe na namba kwenye chanzo cha kuaminika", standard: "ukiandika ulipokagua kila ukweli" },
    { id: "O6", condition: "Unapoandika prompt au unapoona kitu kilichotengenezwa na AI", action: "kuzuia taarifa binafsi zisiingie, kukataa kutengeneza bandia za watu halisi, na kuhoji majibu yasiyo ya haki", standard: "bila kutoa taarifa binafsi, na ukimwambia mtu mzima unayemwamini kuhusu bandia zinazoumiza" }
  ],
  chapters: [
    {
      name: "Sura 1: AI ni nini na unakutana nayo wapi",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI ni nini, kwa maneno rahisi",
          minutes: 4,
          goal: "Eleza kwa sentensi mbili AI ni nini na si nini.",
          text: [
            "AI ni kifupi cha artificial intelligence, yaani akili bandia. Maana yake ni programu za kompyuta zinazofanya mambo ambayo kwa kawaida yanahitaji fikira za mtu, kama kutambua uso, kuelewa maneno yanayosemwa, kupendekeza wimbo au kuandika jibu.",
            "AI nyingi hujifunza kutoka kwa idadi kubwa sana ya mifano. Programu iliyoona mamilioni ya picha za paka inaweza kukisia kama picha mpya ina paka. Programu iliyosoma maandishi mengi sana inaweza kuandika sentensi zinazosikika kama za mtu.",
            "AI si kiumbe hai, haina hisia, na haielewi dunia kweli kama unavyoielewa wewe. Inatafuta mifumo na kutoa makisio yake bora. Ndiyo sababu inaweza kuwa na manufaa sana na bado ikakosea."
          ],
          words: [["AI", "akili bandia (artificial intelligence): programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji fikira za binadamu."], ["Mfumo (pattern)", "kitu kinachojirudia kwa namna ambayo programu inaweza kujifunza na kuitumia kukisia."]],
          slides: [
            { title: "AI = akili bandia", bullets: ["Programu zinazofanya kazi za kufikiri", "Zinatambua nyuso, zinaelewa maneno, zinaandika majibu"] },
            { title: "Inavyojifunza", bullets: ["Inasoma idadi kubwa sana ya mifano", "Inatafuta mifumo", "Inatoa makisio yake bora"] },
            { title: "AI SI", bullets: ["Kiumbe hai, haina hisia", "Haielewi kama unavyoelewa wewe", "Inaweza kukosea, hata inaposikika na uhakika"] }
          ],
          tryIt: "Andika sentensi mbili zinazomweleza mtoto wa miaka kumi AI ni nini. Usitumie neno lolote asilolijua. Msomee mtu na umuulize kama zilieleweka.",
          youCanNow: "kueleza AI ni nini na si nini kwa sentensi mbili rahisi.",
          quickCheck: [
            { objective: "O1", q: "Ina maana gani kwamba AI \"inatafuta mifumo\"?", options: ["Inahisi unachohisi", "Inajua kila kitu kuhusu dunia", "Inajifunza kutoka kwa mifano mingi na kutoa makisio yake bora", "Inasoma mawazo yako"], answer: 2, why: "AI hujifunza kutoka kwa idadi kubwa sana ya mifano na kukisia kutokana na mifumo iliyoipata." },
            { objective: "O1", q: "Rafiki yako anasema, \"AI ni hai na inanielewa.\" Unamwambia nini?", options: ["AI si hai na haina hisia; inakisia kutokana na mifumo", "Ndiyo, ina hisia kama mtu", "AI ya kulipia pekee ndiyo hai", "AI inafanya kazi kwenye simu tu"], answer: 0, why: "AI ni programu inayotafuta mifumo; si hai na haielewi kweli." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutambua AI katika apps unazotumia tayari",
          minutes: 5,
          goal: "Taja angalau mahali patatu AI inapojitokeza katika apps zako za kila siku.",
          text: [
            "Huenda unatumia AI kila siku bila kuiita hivyo. Apps za muziki na video zinapendekeza cha kucheza baadaye kulingana na ulichopenda awali. Hiyo ni AI inayotafuta mifumo katika machaguo yako.",
            "Kamera za simu zinatumia AI kufanya picha ziwe wazi zaidi na kufifisha nyuma ya picha. Kibodi zinakisia neno lako linalofuata. Ramani zinakisia msongamano wa magari. Michezo inatumia AI kuongoza wahusika unaocheza dhidi yao. Apps za barua pepe na ujumbe zinachuja barua taka (spam).",
            "Wasaidizi wa mazungumzo, kama ChatGPT, Microsoft Copilot na Google Gemini, ni aina mpya zaidi inayoitwa AI zalishi (generative AI). Badala ya kupanga au kupendekeza tu, wanatengeneza maandishi, picha au sauti mpya."
          ],
          steps: ["Fungua app unayoitumia sana.", "Jiulize: je, inanipendekezea, inanipangia, inakisia au inaniundia kitu?", "Kama ndiyo, huenda hiyo ni AI inafanya kazi.", "Andika jina la app na kile AI inachofanya."],
          words: [["Pendekezo", "ushauri ambao app inakupa kulingana na ulichofanya awali."], ["AI zalishi (generative AI)", "AI inayotengeneza vitu vipya, kama maandishi, picha au muziki."]],
          slides: [
            { title: "AI unayoitumia tayari", bullets: ["Mapendekezo ya muziki na video", "Kamera ya simu inayorekebisha picha", "Kibodi inayokisia neno linalofuata", "Wahusika wa michezo na vichujio vya spam"] },
            { title: "Jiulize", bullets: ["Je, app inapendekeza, inapanga, inakisia au inaunda?", "Kama ndiyo, huenda ni AI"] },
            { title: "AI zalishi", bullets: ["Inatengeneza maandishi, picha au sauti mpya", "Mifano: ChatGPT, Copilot, Gemini"] }
          ],
          tryIt: "Pitia apps kwenye simu yako au kompyuta ya shule. Orodhesha tatu zinazotumia AI na uandike mstari mmoja kwa kila moja ukisema AI inafanya nini, kwa mfano \"App ya muziki: inapendekeza nyimbo ninazoweza kupenda\".",
          youCanNow: "kutambua AI katika apps za kila siku na kusema inafanya nini.",
          quickCheck: [
            { objective: "O2", q: "Ni nini kinachofanya AI zalishi iwe tofauti na mapendekezo ya nyimbo ya app ya muziki?", options: ["Inapanga barua pepe tu", "Inatengeneza maandishi, picha au sauti mpya", "Inafanya kazi bila intaneti tu", "Haitumii mifumo kamwe"], answer: 1, why: "AI zalishi inaunda vitu vipya badala ya kupanga au kupendekeza tu." },
            { objective: "O2", q: "Unataka kujua kama app inatumia AI. Swali gani linasaidia zaidi?", options: ["Je, app ni ya bure?", "Je, alama yake ni ya bluu?", "App ina umri gani?", "Je, inanipendekezea, inanipangia, inakisia au inaniundia kitu?"], answer: 3, why: "Kama app inakupendekezea, inakupangia, inakisia au inakuundia kitu, huenda AI inafanya kazi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Vikomo vya umri, sheria za shule na mzazi au mlezi wako",
          minutes: 5,
          goal: "Kagua kama unaruhusiwa kutumia zana ya AI, nyumbani na shuleni, kabla ya kujisajili.",
          text: [
            "Kila zana ya AI ina sheria kuhusu nani anaweza kuitumia. Nyingi zinataka uwe na angalau miaka 13, na baadhi zinaomba ruhusa ya mzazi au mlezi kama uko chini ya miaka 18. Kwa mfano, Google inasema lazima uwe na miaka 13 au zaidi (au umri unaotumika katika nchi yako) ili kutumia Gemini kwa akaunti binafsi au ya shule. Sheria hubadilika, kwa hiyo soma ukurasa wa masharti au wa msaada wa zana yenyewe.",
            "Shule yako nayo ina sheria. Baadhi ya madarasa yanaruhusu AI kwa kutafuta mawazo lakini si kwa kuandika kazi yako. Baadhi yanaikataza wakati wa mitihani. Kuitumia kinyume na sheria kunaweza kuhesabiwa kama udanganyifu, hata kama hukukusudia. Ukiwa na shaka, muulize mwalimu wako kabla ya kuitumia.",
            "Kabla ya kufungua akaunti kwenye app yoyote mpya, ongea na mzazi au mlezi. Mwonyeshe app hiyo, sheria yake ya umri na taarifa inazoomba. Shule nyingi pia zinakupa akaunti ya shule kwa zana zilizoidhinishwa; tumia hiyo kwa kazi za shule."
          ],
          steps: ["Tafuta sheria ya umri ya zana kwenye ukurasa wake rasmi wa msaada au masharti.", "Kagua sheria za AI za shule yako na za mwalimu wako.", "Mwonyeshe mzazi au mlezi app kabla ya kujisajili.", "Tumia akaunti yako ya shule kwa zana za shule zilizoidhinishwa."],
          words: [["Masharti ya matumizi", "sheria ambazo kampuni inaweka kwa kutumia app au tovuti yake."], ["Uadilifu wa kitaaluma", "kuwa mkweli kuhusu kazi yako ya shule: kazi unayowasilisha inaonyesha ulichofanya wewe."]],
          sources: [{ name: "Msaada wa Google Gemini Apps: unachohitaji ili kuingia (sharti la umri)", url: "https://support.google.com/gemini/answer/13278668" }],
          slides: [
            { title: "Kwanza kagua sheria ya umri", bullets: ["Zana nyingi za AI zinataka uwe na miaka 13 au zaidi", "Baadhi zinataka ruhusa ya mzazi kama uko chini ya miaka 18", "Soma ukurasa wa msaada au masharti wa zana yenyewe"] },
            { title: "Jua sheria za shule yako", bullets: ["Baadhi ya madarasa yanaruhusu AI kwa mawazo tu", "Baadhi yanaikataza wakati wa mitihani", "Huna uhakika? Muulize mwalimu wako kwanza"] },
            { title: "Mshirikishe mzazi au mlezi", bullets: ["Mwonyeshe app kabla ya kujisajili", "Angalieni taarifa inazoomba", "Tumia akaunti yako ya shule kwa zana za shule"] }
          ],
          tryIt: "Chagua msaidizi mmoja wa AI. Tafuta sheria yake ya umri kwenye ukurasa wa msaada au masharti wa kampuni yenyewe. Kisha andika sheria ya shule yako au ya mwalimu mmoja kuhusu AI. Mwonyeshe mzazi au mlezi vyote viwili.",
          youCanNow: "kukagua sheria ya umri ya zana ya AI na sheria za AI za shule yako, na kumshirikisha mzazi au mlezi kabla ya kujisajili.",
          quickCheck: [
            { objective: "O3", q: "Ni wapi mahali bora pa kupata sheria ya umri ya zana ya AI?", options: ["Ukurasa wa msaada au masharti wa zana yenyewe", "Makisio ya rafiki", "Maoni yoyote chini ya video", "Nyota za ukadiriaji wa app"], answer: 0, why: "Sheria hubadilika, kwa hiyo zisome kwenye ukurasa wa msaada au masharti wa kampuni yenyewe." },
            { objective: "O3", q: "Huna uhakika kama AI inaruhusiwa kwa mradi wa darasa. Unafanya nini?", options: ["Unaitumia na kutumaini ni sawa", "Unamuuliza rafiki wa shule nyingine", "Unaitumia lakini humwambii mtu", "Unamuuliza mwalimu wako kabla ya kuitumia"], answer: 3, why: "Sheria za shule zinatofautiana, na kutumia AI kinyume nazo kunaweza kuhesabiwa kama udanganyifu, kwa hiyo uliza kwanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI ni nini na unakutana nayo wapi",
        questions: [
          { objective: "O1", q: "Sentensi ipi inaeleza AI vizuri zaidi?", options: ["Roboti yenye hisia", "Programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji fikira za binadamu", "Aina ya chaja ya simu", "Tovuti ambayo iko sahihi kila wakati"], answer: 1, why: "AI ni programu zinazofanya kazi za kufikiri kama kutambua, kupendekeza na kuandika." },
          { objective: "O1", q: "AI nyingi hujifunza vipi?", options: ["Kwa kwenda shule", "Kwa kusoma mawazo yako", "Haijifunzi kamwe", "Kwa kusoma idadi kubwa sana ya mifano na kutafuta mifumo"], answer: 3, why: "AI inatafuta mifumo katika makundi makubwa ya mifano na kuyatumia kukisia." },
          { objective: "O2", q: "App yako ya muziki inakupendekezea wimbo mpya unaoweza kuupenda. Hii ni:", options: ["AI inatoa pendekezo", "Virusi", "Sheria ya mwalimu", "Simu inayopigwa"], answer: 0, why: "Mapendekezo kulingana na machaguo yako ya awali ni matumizi ya kawaida ya AI." },
          { objective: "O3", q: "Unataka kujaribu app mpya ya AI. Ufanye nini kwanza?", options: ["Ujisajili kwa tarehe yoyote ya kuzaliwa", "Uipe nywila yako ya shule", "Ukague sheria yake ya umri na umwonyeshe mzazi au mlezi", "Uipakue kutoka kwa tangazo linalojitokeza ghafla"], answer: 2, why: "Sheria za umri na ruhusa ya mzazi au mlezi zinatangulia kujisajili." },
          { objective: "O3", q: "Mwalimu wako anasema AI inafaa kwa kutafuta mawazo lakini si kwa kuandika insha yako. Wewe:", options: ["Unaiacha AI iandike insha hata hivyo", "Unapuuza sheria", "Unatumia AI kwa mawazo tu, kisha unaandika insha mwenyewe", "Unanakili insha ya rafiki"], answer: 2, why: "Kufuata sheria ya mwalimu wako kunaifanya kazi yako iwe ya kweli." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia msaidizi wa AI kwa busara",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuuliza swali lililo wazi",
          minutes: 5,
          goal: "Andika prompt iliyo wazi inayoleta jibu lenye manufaa mara ya kwanza.",
          text: [
            "Unachoandika kwa msaidizi wa AI kinaitwa prompt (ombi). Prompts zilizo wazi zinaleta majibu bora.",
            "Prompt nzuri ina sehemu tatu: unachotaka, maelezo kidogo ya hali yako, na jinsi unavyotaka jibu. Kwa mfano: \"Niko darasa la 9 na tunaanza mada ya mzunguko wa maji. Ieleze kwa hatua 5 fupi na mfano mmoja wa maisha ya kila siku.\"",
            "Prompt dhaifu kama \"mzunguko wa maji\" inamlazimisha msaidizi akisie unachohitaji. Kwa kawaida utapata jibu refu la jumla."
          ],
          steps: ["Sema unachotaka.", "Ongeza maelezo kidogo (darasa lako, mada, unachojua tayari).", "Sema jinsi unavyotaka jibu: hatua, orodha, fupi, maneno rahisi au mfano."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI."]],
          slides: [
            { title: "Prompt ni ombi lako", bullets: ["Prompt iliyo wazi = jibu bora", "Prompt isiyo wazi = jibu la jumla"] },
            { title: "Sehemu tatu", bullets: ["1. Unachotaka", "2. Maelezo kidogo ya hali yako", "3. Jinsi unavyotaka jibu"] },
            { title: "Dhaifu dhidi ya wazi", bullets: ["Dhaifu: \"mzunguko wa maji\"", "Wazi: \"Niko darasa la 9. Eleza mzunguko wa maji kwa hatua 5 fupi na mfano.\""] }
          ],
          tryIt: "Chagua kitu unachotaka kujua, kama injini ya mchezo inavyofanya kazi au kwa nini anga ni la bluu. Andika prompt yenye sehemu zote tatu, mtumie msaidizi wa AI unayeruhusiwa kumtumia, na usome jibu.",
          youCanNow: "kuandika prompt iliyo wazi yenye sehemu tatu.",
          quickCheck: [
            { objective: "O4", q: "Sehemu ya \"maelezo ya hali yako\" katika prompt ni nini?", options: ["Rangi ya skrini", "Kidogo kukuhusu wewe na mada, kama darasa lako au unachojua tayari", "Nywila yako", "Mipangilio ya app"], answer: 1, why: "Maelezo kama darasa lako na mada yanamsaidia msaidizi kukufaa jibu." },
            { objective: "O4", q: "Uliandika \"volkano\" na ukapata jibu refu la jumla. Unatuma nini baadaye?", options: ["\"volkano\" tena", "Hakuna; unakata tamaa", "\"Niko darasa la 8. Eleza volkano zinavyolipuka kwa hatua 4 fupi.\"", "Anwani ya nyumbani kwako"], answer: 2, why: "Kuongeza unachotaka, maelezo ya hali yako na muundo wa jibu kunafanya prompt iwe wazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua jibu kabla ya kuliamini",
          minutes: 5,
          goal: "Kagua jibu la AI kwa kulinganisha na angalau chanzo kimoja cha kuaminika.",
          text: [
            "Wasaidizi wa AI wakati mwingine hubuni mambo. Wanaweza kubuni tarehe, nukuu, kitabu ambacho hakipo, au ukweli unaosikika sahihi lakini si sahihi. Hii inaitwa hallucination (kubuni).",
            "Kagua kitu chochote muhimu, hasa ukweli wa shule, afya, pesa na habari. Angalia kitabu chako cha kiada, muulize mwalimu wako au mkutubi, au tafuta tovuti ya kuaminika, kama ya jumba la makumbusho, shirika la sayansi, ensaiklopidia ambayo shule yako inatumia, au tovuti inayoishia na .gov au .edu.",
            "Tabia nzuri: linganisha vyanzo viwili. Kama AI na chanzo cha kuaminika havikubaliani, amini chanzo, na pengine mwambie mwalimu wako AI ilikosea nini."
          ],
          steps: ["Tafuta ukweli ndani ya jibu: majina, tarehe, namba.", "Tafuta kila mmoja kwenye chanzo cha kuaminika.", "Kama havikubaliani, fuata chanzo cha kuaminika.", "Andika ulipokagua."],
          words: [["Hallucination (kubuni)", "AI inapoandika kitu kinachosikika kweli lakini kimebuniwa."], ["Chanzo", "mahali taarifa inapotoka."]],
          slides: [
            { title: "AI inaweza kubuni mambo", bullets: ["Tarehe na namba zisizo sahihi", "Nukuu au vitabu bandia", "Ukweli unaosikika sahihi lakini si sahihi"] },
            { title: "Kagua kwenye vyanzo vya kuaminika", bullets: ["Kitabu chako cha kiada, mwalimu au mkutubi", "Makumbusho, mashirika ya sayansi, tovuti za .gov au .edu"] },
            { title: "Kama havikubaliani", bullets: ["Amini chanzo cha kuaminika", "Andika ulipokagua"] }
          ],
          tryIt: "Chukua jibu la prompt yako ya mwisho. Chagua ukweli miwili ndani yake na ukague kila mmoja kwenye chanzo cha kuaminika. Andika kama kila mmoja ulikuwa sahihi na ulipokagua.",
          youCanNow: "kutambua ukweli unaohitaji kukaguliwa na kuukagua kwenye chanzo cha kuaminika.",
          quickCheck: [
            { objective: "O5", q: "Kipi ni chanzo cha kuaminika kwa kukagua ukweli wa shule?", options: ["Maoni yoyote mtandaoni", "AI ileile ukiiuliza tena", "Meme", "Kitabu chako cha kiada au tovuti inayoishia na .edu au .gov"], answer: 3, why: "Vitabu vya kiada, walimu, wakutubi na tovuti za kuaminika ni mahali pazuri pa kukagua ukweli." },
            { objective: "O5", q: "AI inataja kitabu kwa ripoti yako, lakini hukipati popote. Unafanya nini?", options: ["Unakichukulia kama huenda kimebuniwa na kutumia chanzo unachoweza kukipata", "Unakiweka kwenye ripoti yako hata hivyo", "Unabuni namba ya ukurasa", "Unaiomba AI iahidi kwamba kipo kweli"], answer: 0, why: "AI inaweza kubuni vitabu na ukweli; amini vyanzo unavyoweza kuvikagua kweli." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kubaki salama na kuwa wa haki na AI",
          minutes: 5,
          goal: "Tumia AI bila kutoa taarifa binafsi na bila kumuumiza mtu yeyote.",
          text: [
            "Usiandike taarifa binafsi katika zana ya AI: jina lako kamili pamoja na anwani yako, shule yako na ratiba yako, namba za simu, nywila, au picha za marafiki bila kuwauliza. Unachoandika kinaweza kuhifadhiwa.",
            "AI inaweza kutengeneza picha bandia, sauti bandia na video bandia, ambazo wakati mwingine huitwa deepfakes. Kamwe usitumie AI kutengeneza picha bandia au za aibu za watu halisi. Inaweza kuwaumiza, kuvunja sheria za shule na hata kuvunja sheria za nchi. Mtu akikufanyia hivyo wewe au rafiki yako, mwambie mtu mzima unayemwamini.",
            "AI pia inaweza kuwa si ya haki. Ilijifunza kutoka kwa maandishi ya binadamu, kwa hiyo inaweza kurudia dhana potofu kuhusu makundi ya watu. Kama jibu linaonekana si la haki kwa kundi fulani la watu, lihoji."
          ],
          steps: ["Soma prompt yako kabla ya kuituma na uondoe taarifa binafsi.", "Kamwe usitengeneze picha au sauti bandia za watu halisi.", "Ukiona deepfake inayoumiza, mwambie mtu mzima unayemwamini.", "Hoji majibu yanayoonekana si ya haki."],
          words: [["Deepfake", "picha, sauti au video bandia iliyotengenezwa kwa AI ili ionekane halisi."], ["Upendeleo (bias)", "matokeo yasiyo ya haki kwa baadhi ya watu, mara nyingi kwa sababu ya kile AI ilichojifunza."]],
          slides: [
            { title: "Linda faragha yako", bullets: ["Hakuna anwani, ratiba wala namba ya simu", "Hakuna nywila", "Hakuna picha za marafiki bila kuwauliza"] },
            { title: "Deepfakes zinaumiza", bullets: ["Kamwe usiwatengenezee watu halisi bandia", "Inaweza kuvunja sheria za shule na za nchi", "Ukiona moja, mwambie mtu mzima unayemwamini"] },
            { title: "Angalia upendeleo", bullets: ["AI inaweza kurudia dhana potofu", "Hoji majibu yanayoonekana si ya haki"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza \"maelezo ya AI\" yako ya ukurasa mmoja: AI ni nini kwa sentensi mbili, apps tatu unazotumia zenye AI, na swali moja ulilomuuliza msaidizi wa AI pamoja na jibu na jinsi ulivyolikagua. Hakikisha hakuna taarifa binafsi ndani yake.",
          youCanNow: "kutumia AI kwa usalama na kwa haki, na kumweleza mtu mwingine AI ni nini.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini uzuie taarifa binafsi zisiingie katika zana za AI?", options: ["Zana za AI ni za polepole", "Unachoandika kinaweza kuhifadhiwa", "Inafanya majibu yawe mafupi", "Taarifa binafsi zinaifanya AI iwe na akili zaidi"], answer: 1, why: "Unachoandika kinaweza kuhifadhiwa, kwa hiyo taarifa binafsi kama anwani na ratiba yako zibaki nje." },
            { objective: "O6", q: "Rafiki anataka kutumia AI kutengeneza picha bandia ya kuchekesha ya mwanafunzi mwenzenu. Unafanya nini?", options: ["Unasaidia kuitengeneza lakini huisambazi", "Unaiweka mtandaoni, kwa kuwa ni utani", "Unakataa, kwa sababu bandia za watu halisi zinaweza kuwaumiza na kuvunja sheria", "Unaituma kwa marafiki wa karibu tu"], answer: 2, why: "Picha bandia za watu halisi zinaweza kuwaumiza, kuvunja sheria za shule na hata sheria za nchi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia msaidizi wa AI kwa busara",
        questions: [
          { objective: "O4", q: "Prompt ipi iko wazi zaidi?", options: ["\"Niko darasa la 9. Eleza mzunguko wa maji kwa hatua 5 fupi na mfano.\"", "\"sayansi\"", "\"nisaidie\"", "\"niambie mambo\""], answer: 0, why: "Inasema unachotaka, inatoa maelezo ya hali yako na inasema jinsi unavyotaka jibu." },
          { objective: "O5", q: "\"Hallucination\" ya AI ni nini?", options: ["Ngazi ya mchezo wa video", "Aina ya skrini ya simu", "Sheria ya shule", "AI inapobuni kitu kinachosikika kweli"], answer: 3, why: "Hallucination ni jibu lililobuniwa linalosikika halisi." },
          { objective: "O5", q: "AI inakupa tarehe kwa mradi wa historia. Unapaswa:", options: ["Kuinakili mara moja", "Kuikagua kwenye kitabu chako cha kiada au chanzo kingine cha kuaminika", "Kuiuliza AI tena na kuamini jibu la pili", "Kuiacha tarehe"], answer: 1, why: "Ukweli muhimu hukaguliwa kwenye chanzo cha kuaminika." },
          { objective: "O6", q: "Ni kipi HUPASWI kukiandika kwa msaidizi wa AI?", options: ["Anwani ya nyumbani kwako na ratiba yako ya shule", "\"Eleza usanisinuru kwa urahisi\"", "\"Nipe mawazo 3 ya bango la klabu\"", "\"Lifupishe\""], answer: 0, why: "Anwani na ratiba ni taarifa binafsi." },
          { objective: "O6", q: "Mwanafunzi mwenzako ametengeneza picha bandia ya AI ya mwanafunzi mwingine. Unapaswa kufanya nini?", options: ["Kuisambaza", "Kutengeneza nyingine", "Kumwambia mtu mzima unayemwamini", "Kuandika maoni"], answer: 2, why: "Deepfakes za watu halisi zinaweza kuwaumiza; mtu mzima unayemwamini anaweza kusaidia kuzizuia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI ni Nini? (kwa Vijana)",
    questions: [
      { objective: "O1", q: "AI ni kifupi cha:", options: ["Intaneti ya kujiendesha", "Akili bandia (artificial intelligence)", "Taarifa za hali ya juu", "Kisakinishi cha apps"], answer: 1, why: "AI ni kifupi cha artificial intelligence, yaani akili bandia." },
      { objective: "O1", q: "Kipi ni kweli kuhusu AI?", options: ["Ina hisia", "Iko sahihi kila wakati", "Ni kiumbe hai", "Inatafuta mifumo na kutoa makisio yake bora"], answer: 3, why: "AI inakisia kutokana na mifumo; si hai na inaweza kukosea." },
      { objective: "O1", q: "Kwa nini AI inaweza kukosea hata inaposikika na uhakika?", options: ["Ni mvivu", "Inataka kukudanganya", "Simu ni za polepole", "Inakisia kutokana na mifumo, haielewi kweli"], answer: 3, why: "Inatabiri kutokana na mifumo, kwa hiyo jibu linalosikika na uhakika bado linaweza kuwa si sahihi." },
      { objective: "O2", q: "Kibodi ya simu yako inakisia neno lako linalofuata. Hiyo ni:", options: ["Virusi", "AI inafanya kazi", "Mwalimu", "Nywila"], answer: 1, why: "Kukisia neno linalofuata ni kipengele cha kawaida cha AI." },
      { objective: "O2", q: "Kipi ni mfano wa AI zalishi?", options: ["Kikokotoo", "Swichi ya taa", "Msaidizi wa mazungumzo anayeandika hadithi", "Ramani ya karatasi"], answer: 2, why: "AI zalishi inatengeneza maandishi, picha au sauti mpya." },
      { objective: "O2", q: "App ya video inaonyesha \"Kwa sababu ulitazama...\". Hilo ni:", options: ["Pendekezo lililotolewa na AI", "Ujumbe mfupi", "Sheria ya shule", "Kidhibiti cha mchezo"], answer: 0, why: "Inapendekeza video kulingana na machaguo yako ya awali." },
      { objective: "O3", q: "Unapaswa kupata wapi sheria ya umri ya zana ya AI?", options: ["Makisio ya rafiki", "Ukurasa wa msaada au masharti wa zana yenyewe", "Tangazo linalojitokeza ghafla", "Popote, hakuna sheria"], answer: 1, why: "Kurasa za kampuni yenyewe zinatoa sheria ya sasa." },
      { objective: "O3", q: "Ukurasa wa msaada wa Google unasema nini kuhusu kutumia Gemini kwa akaunti binafsi au ya shule?", options: ["Umri wowote ni sawa", "Lazima uwe na miaka 21", "Walimu pekee wanaweza kuitumia", "Lazima uwe na miaka 13 au zaidi, au umri unaotumika katika nchi yako"], answer: 3, why: "Ukurasa wa msaada wa Google unaweka miaka 13 au zaidi, au umri wa nchi yako." },
      { objective: "O3", q: "Kabla ya kujisajili kwenye app mpya unapaswa:", options: ["Kuongea na mzazi au mlezi", "Kutumia tarehe ya kuzaliwa bandia", "Kumpa rafiki nywila yako", "Kubofya kila tangazo"], answer: 0, why: "Mzazi au mlezi anapaswa kujua kuhusu akaunti mpya." },
      { objective: "O3", q: "Kutumia AI kuandika kazi ambayo mwalimu wako alisema uiandike mwenyewe ni:", options: ["Sawa kama hakuna anayegundua", "Ni lazima", "Kuvunja sheria, na kunaweza kuhesabiwa kama udanganyifu", "Tabia nzuri ya kusoma"], answer: 2, why: "Sheria za shule zinaamua jinsi AI inavyoweza kutumika; kuzivunja si uaminifu." },
      { objective: "O4", q: "Prompt ni nini?", options: ["Kidhibiti cha mchezo", "Aina ya nywila", "Unachoandika au kusema kwa msaidizi wa AI", "Duka la apps"], answer: 2, why: "Prompt ni ombi lako kwa AI." },
      { objective: "O4", q: "Sehemu ipi inafanya prompt iwe wazi zaidi?", options: ["Kusema jinsi unavyotaka jibu, kama hatua 5 fupi", "Kuandika neno moja tu", "Kuongeza anwani yako", "Kutumia herufi kubwa zote"], answer: 0, why: "Kusema muundo wa jibu kunaisaidia AI kutoa jibu lenye manufaa." },
      { objective: "O4", q: "Prompt dhaifu kama \"mzunguko wa maji\" kwa kawaida inaleta:", options: ["Jibu kamili", "Hakuna jibu kamwe", "Virusi", "Jibu refu la jumla"], answer: 3, why: "AI inalazimika kukisia, kwa hiyo jibu linakuwa la jumla." },
      { objective: "O5", q: "Chanzo kipi ni cha kuaminika zaidi kwa kukagua ukweli wa sayansi?", options: ["Maoni yoyote mtandaoni", "Shirika la sayansi au kitabu chako cha kiada", "Meme", "Tangazo linalojitokeza ghafla"], answer: 1, why: "Vitabu vya kiada na tovuti rasmi za sayansi ni za kuaminika." },
      { objective: "O5", q: "AI na kitabu chako cha kiada havikubaliani. Unapaswa:", options: ["Kuamini kitabu cha kiada au chanzo cha kuaminika", "Kuamini AI", "Kurusha sarafu", "Kutumia majibu yote mawili"], answer: 0, why: "Chanzo cha kuaminika kinashinda jibu la AI ambalo halijakaguliwa." },
      { objective: "O5", q: "Ukweli upi unahitaji kukaguliwa zaidi?", options: ["Maoni yako mwenyewe", "Utani uliouomba", "Tarehe, namba na majina", "Shairi uliloliomba"], answer: 2, why: "Ukweli kama tarehe na namba ndipo AI hukosea mara nyingi." },
      { objective: "O6", q: "Kipi ni taarifa binafsi unayopaswa kuizuia isiingie katika AI?", options: ["\"Eleza sehemu (fractions)\"", "Nywila yako", "\"Lifupishe\"", "Rangi unayoipenda"], answer: 1, why: "Nywila hazipaswi kutolewa kamwe." },
      { objective: "O6", q: "Deepfake ni:", options: ["Bwawa refu la kuogelea", "Aina ya mchezo", "Mwongozo wa kusoma", "Picha, sauti au video bandia iliyotengenezwa kwa AI"], answer: 3, why: "Deepfakes ni bandia zilizotengenezwa na AI zinazoonekana halisi." },
      { objective: "O6", q: "AI inatoa jibu linalosikika si la haki kwa kundi fulani la watu. Unapaswa:", options: ["Kulisambaza", "Kuliamini", "Kuacha AI yote milele", "Kulihoji, kwa sababu AI inaweza kurudia dhana potofu"], answer: 3, why: "AI inaweza kubeba upendeleo kutoka kwa kile ilichojifunza." },
      { objective: "O6", q: "Mtu akitengeneza bandia ya AI inayokuumiza, hatua bora ni:", options: ["Kuiweka siri", "Kumwambia mtu mzima unayemwamini", "Kutengeneza nyingine ya kulipiza", "Kuisambaza zaidi"], answer: 1, why: "Mtu mzima unayemwamini anaweza kusaidia kuiripoti na kuizuia." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "AI ni nini",
        objective: "O1",
        notYet: "Maelezo hayapo, si sahihi au ni magumu mno kwa mwanafunzi mdogo.",
        meets: "Sentensi mbili zilizo wazi zinazosema AI ni nini na kwamba inaweza kukosea.",
        exceeds: "Pia inasema AI inavyojifunza kutoka kwa mifano, kwa maneno ambayo mtoto wa miaka kumi angeyajua."
      },
      {
        name: "AI katika apps zangu",
        objective: "O2",
        notYet: "Chini ya apps tatu, au hakuna mstari kuhusu AI inachofanya.",
        meets: "Apps tatu, kila moja na mstari mmoja kuhusu AI inachofanya.",
        exceeds: "Pia inaonyesha ipi ni AI zalishi."
      },
      {
        name: "Swali lililo wazi",
        objective: "O4",
        notYet: "Prompt ni neno moja au mawili.",
        meets: "Prompt inasema unachotaka, maelezo kidogo ya hali yako na jinsi unavyotaka jibu.",
        exceeds: "Jibu lilikuwa na manufaa mara ya kwanza, au swali moja la kufuatilia lililiboresha."
      },
      {
        name: "Jibu limekaguliwa",
        objective: "O5",
        notYet: "Jibu lilitumika bila kukaguliwa.",
        meets: "Angalau ukweli mmoja ulikaguliwa kwenye chanzo cha kuaminika, na chanzo kimetajwa.",
        exceeds: "Ukweli miwili ulikaguliwa kwenye vyanzo viwili, pamoja na maelezo kuhusu chochote AI ilichokosea."
      },
      {
        name: "Salama na inaruhusiwa",
        objective: "O6",
        notYet: "Maelezo yana taarifa binafsi, au zana ilitumika kinyume na sheria yake ya umri au sheria za shule.",
        meets: "Hakuna taarifa binafsi, na zana iliyotumika inafaa sheria yake ya umri na sheria za shule.",
        exceeds: "Inaongeza ushauri kwa msomaji mdogo kuhusu kubaki salama na AI."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoanza kozi nyingine ya vijana ya Koach Learn ndani ya siku 30",
      "Wanafunzi wanaoripoti kukagua majibu ya AI kwa kazi za shule katika utafiti wa kufuatilia wa siku 30",
      "Walimu au programu za vijana zinazoripoti matatizo machache ya sheria yanayohusu AI miongoni mwa wanafunzi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya shule yenye intaneti",
      "Msaidizi wa AI wa bure ambao mwanafunzi ana umri wa kutosha na ruhusa ya kuutumia, kama zana iliyoidhinishwa na shule",
      "Karatasi au hati kwa maelezo ya ukurasa mmoja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kagua sheria za umri za zana yoyote ya AI kabla ya darasa, na tumia akaunti zilizoidhinishwa na shule pale zilipo.",
      "Eleza sheria za AI za shule au programu yako mwanzoni ili wanafunzi wajue kinachoruhusiwa.",
      "Kamwe usiwaombe wanafunzi kuandika taarifa binafsi au kupakia picha za watu halisi.",
      "Wanafunzi walio chini ya kikomo cha umri wanaweza kufanya kazi kwenye karatasi au mwalimu akionyesha zana hiyo.",
      "Waambie wanafunzi waonyeshe maelezo yao kwa mwanafunzi mdogo au mwenzao na wayapime kwa rubriki."
    ]
  }
};
