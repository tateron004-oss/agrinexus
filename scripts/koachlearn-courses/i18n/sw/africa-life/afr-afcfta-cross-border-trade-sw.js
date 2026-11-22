"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-afcfta-cross-border-trade.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const AFCFTA = { name: "Sekretarieti ya AfCFTA: Kuhusu AfCFTA (nchi 55 za AU, biashara tangu 1 Januari 2021, Sekretarieti iko Accra)", url: "https://au-afcfta.org/about/" };
const GTI = { name: "Sekretarieti ya AfCFTA: Mpango wa Biashara Elekezi (Guided Trade Initiative, ulizinduliwa 7 Oktoba 2022)", url: "https://au-afcfta.org/operational-instruments/guided-trade-initiative/" };
const ROO = { name: "Sekretarieti ya AfCFTA: Kanuni za Asili ya Bidhaa (Kiambatisho 2 na Mwongozo wa Kanuni za Asili)", url: "https://au-afcfta.org/operational-instruments/rules-of-origin/" };
const NTB = { name: "Mfumo wa AfCFTA wa kuripoti, kufuatilia na kuondoa vikwazo visivyo vya ushuru", url: "https://www.tradebarriers.africa/" };
const PAPSS = { name: "Mfumo wa Malipo na Usuluhishi wa Afrika (PAPSS)", url: "https://papss.com/" };
const ETLS = { name: "Mpango wa Uhuru wa Biashara wa ECOWAS (ETLS), Tume ya ECOWAS", url: "https://etls.ecowas.int/" };
const COMESA = { name: "COMESA: Biashara na Forodha (pamoja na Utaratibu Rahisi wa Biashara kwa wafanyabiashara wadogo)", url: "https://www.comesa.int/trade-customs-division-2/" };

module.exports = {
  id: "afr-afcfta-cross-border-trade-sw",
  lang: "sw",
  translationOf: "afr-afcfta-cross-border-trade",
  category: "Africa: Life and Work",
  name: "Kuuza Nje ya Mipaka: Wafanyabiashara Wadogo na AfCFTA",
  skills: "Kueleza AfCFTA na mipango ya biashara ya kikanda, Kuandaa nyaraka za kuvuka mpaka rasmi, Kukokotoa gharama ya mzigo wa kuvuka mpaka kwa sarafu mbili, Kupokea malipo kwa usalama kutoka nchi nyingine, Kuripoti malipo yasiyo rasmi na vikwazo vya biashara",
  outcome: "kupanga mauzo ya kuvuka mpaka yaliyo halali, salama na yenye faida: kukagua kanuni zinazohusu bidhaa zako, kuandaa nyaraka sahihi, kukokotoa gharama yote na bei kwa sarafu zote mbili, kuchagua njia salama ya kupokea malipo, na kujua cha kufanya mtu akikuomba malipo yasiyo rasmi.",
  about: [
    "Kozi hii ni kwa wafanyabiashara wadogo, akina mama wa sokoni, mafundi na wazalishaji wadogo kote Afrika wanaouza, au wanaotaka kuuza, katika nchi jirani: siagi ya shea kutoka Tamale hadi Ouagadougou, vitambaa kutoka Lagos hadi Cotonou, viatu kutoka Nairobi hadi Kampala, au vipodozi kutoka Dakar hadi Bamako.",
    "Sura ya 1 inaeleza Eneo Huru la Biashara la Bara la Afrika (AfCFTA) na mipango ya kikanda ambayo tayari inawasaidia wafanyabiashara wadogo, na nyaraka unazohitaji katika kituo rasmi cha mpakani. Sura ya 2 inahusu pesa: gharama yote ya mzigo, kupokea malipo kwa usalama, na cha kufanya kuhusu malipo yasiyo rasmi na ucheleweshaji.",
    "Ushuru, ada, fomu na viwango vinatofautiana kati ya nchi na hubadilika. Kozi hii haitoi viwango vya ushuru wala ada. Inakuambia uulize ofisi gani, nawe unakagua kabla ya kusafiri. Takwimu zote za pesa ni mifano tu. Kila somo linachukua kama dakika tano na linaisha na kazi. Majaribio mafupi yanafuata kila somo, jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa biashara ya kuvuka mpaka kwa bidhaa moja na njia moja (yako, au mfano kama siagi ya shea kutoka Tamale, Ghana, hadi Ouagadougou, Burkina Faso): bidhaa na kituo rasmi cha mpakani, kanuni ulizokagua na ulikozikagua, orodha ya nyaraka utakazobeba, gharama yote na bei yako ya kuuza kwa sarafu zote mbili, jinsi utakavyolipwa na jinsi utakavyojikinga na ulaghai, na utakachofanya na utakayemripoti mtu akikuomba malipo yasiyo rasmi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyabiashara wadogo, akina mama wa sokoni, mafundi na wazalishaji wadogo katika miji na maeneo ya mipakani kote Afrika (Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Burkina Faso, Cameroon na kwingineko) wanaouza au wanaotaka kuuza katika nchi jirani.",
    startingPoint: "Wengi tayari wanafanya biashara ya kuvuka mipaka, mara nyingi bila taratibu rasmi, wakibeba bidhaa kupitia vituo vya mpakani au wakitumia wasafirishaji. Wachache wanaijua AfCFTA au mpango wa kanda yao, nyaraka zinazowapa ushuru mdogo, jinsi ya kukokotoa gharama ya mzigo kwa sarafu mbili, au mahali pa kuripoti malipo yasiyo rasmi.",
    gap: "Wafanyabiashara wasio rasmi mara nyingi hulipa malipo yasiyo rasmi, hupoteza bidhaa mpakani, huuza kwa hasara baada ya gharama za kubadilisha pesa na usafiri, na hudanganywa na ulaghai wa malipo. Kujua kanuni, kubeba nyaraka sahihi, kukokotoa gharama vizuri na kuripoti vikwazo kunawawezesha kufanya biashara kihalali, kubaki na faida zaidi na kukua.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la biashara linaelezwa",
      "Vifaa: simu ya kawaida ya Android yenye data ya gharama kubwa; kikokotoo na daftari",
      "Kanuni, ushuru, ada na viwango vinatofautiana kati ya nchi na hubadilika: wanafunzi wanakagua na ofisi za forodha na biashara; kozi haitoi viwango vya ushuru wala ada",
      "Usalama wa pesa: hakuna kutoa PIN wala nywila; hakuna ushauri wa uwekezaji",
      "Kozi pia imetafsiriwa kwa Kifaransa na Kiarabu, kwa hiyo mifano inajumuisha wafanyabiashara wa nchi zinazozungumza Kifaransa na wa Afrika Kaskazini"
    ],
    prerequisites: "Uwezo wa msingi wa kusoma na kutumia simu. Kozi \"Kutumia Pesa za Simu kwa Usalama\" na \"Kusajili na Kuendesha Biashara Ndogo Afrika\" zinasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa bidhaa yako na nchi unayotaka kuuza", action: "kueleza AfCFTA na mpango wa biashara wa kanda yako vinaweza kumfanyia nini mfanyabiashara mdogo, na kutaja ofisi za kukagua nazo kanuni za sasa", standard: "ukitaja angalau ofisi mbili au tovuti rasmi mbili" },
    { id: "O2", condition: "Kabla ya kupitisha bidhaa katika kituo rasmi cha mpakani", action: "kuorodhesha nyaraka na hatua unazohitaji kwa bidhaa zako, kama risiti, ankara, tamko la forodha na cheti cha asili", standard: "kila hati kwenye orodha ikiwa imekaguliwa na forodha au dawati la biashara" },
    { id: "O3", condition: "Ukipewa gharama za mzigo mmoja na kiwango cha kubadilisha fedha", action: "kukokotoa gharama yote kwa kila bidhaa na bei ya kuuza kwa sarafu zote mbili", standard: "ukijumuisha kila gharama na faida, na hesabu ikiwa sahihi" },
    { id: "O4", condition: "Mnunuzi wa nchi nyingine anapokulipa", action: "kuchagua njia salama ya kupokea pesa na kutambua dalili za hatari za ulaghai wa malipo", standard: "bila kutoa PIN kamwe wala kutuma bidhaa kabla ya pesa kuthibitishwa" },
    { id: "O5", condition: "Mtu aliye mpakani au karibu nao anapokuomba malipo yasiyo rasmi au anaposhikilia bidhaa zako", action: "kueleza hatua salama za kuchukua na kuripoti tatizo kama kikwazo kisicho cha ushuru", standard: "ukitaja njia rasmi ya kuripoti na mambo ya kuandika" }
  ],
  chapters: [
    {
      name: "Sura 1: Kanuni na nyaraka",
      lessons: [
        {
          title: "AfCFTA inamaanisha nini kwa mfanyabiashara mdogo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Eleza kwa maneno yako mwenyewe AfCFTA ni nini na jinsi inavyoweza kusaidia biashara yako.",
          text: [
            "Eneo Huru la Biashara la Bara la Afrika (AfCFTA) ni makubaliano kati ya nchi 55 za Umoja wa Afrika ili kuunda soko moja kubwa la watu takriban bilioni 1.3. Biashara chini yake ilianza tarehe 1 Januari 2021. Sekretarieti yake iko Accra, Ghana.",
            "Wazo kuu: kadiri muda unavyokwenda, nchi zilizojiunga hupunguza au huondoa ushuru wa kuingiza bidhaa zilizotengenezwa katika nchi nyingine wanachama, na hufanya kazi kuondoa vikwazo vingine, kama ucheleweshaji mrefu na nyaraka za ziada. Ili upate ushuru mdogo, bidhaa zako lazima \"zitoke\" katika nchi mwanachama kwa mujibu wa kanuni za asili. Bidhaa zilizonunuliwa tu kutoka nje ya Afrika na kuuzwa tena hazistahili.",
            "Si kila nchi inaitumia kwa njia moja au kwa kasi moja, na si kila bidhaa imejumuishwa bado. Mpango wa Biashara Elekezi (Guided Trade Initiative), uliozinduliwa tarehe 7 Oktoba 2022, ulianzisha biashara halisi chini ya kanuni za AfCFTA katika kundi la nchi. Kwa hiyo kabla ya kutegemea ushuru mdogo, kagua na mamlaka yako ya forodha, wizara yako ya biashara au chama cha wafanyabiashara (chamber of commerce), na tovuti ya AfCFTA.",
            "Hata pale AfCFTA bado haifanyi kazi kwa bidhaa yako, mipango ya kikanda inaweza tayari kukusaidia. Hilo ndilo somo linalofuata."
          ],
          words: [["AfCFTA", "Eneo Huru la Biashara la Bara la Afrika: makubaliano ya kuifanya Afrika soko moja kubwa lenye ushuru mdogo na vikwazo vichache."], ["Ushuru wa kuingiza bidhaa (tariff)", "kodi ambayo nchi inatoza kwa bidhaa zinazoingia kutoka nchi nyingine."], ["Kanuni za asili", "kanuni zinazoamua bidhaa \"inatoka\" nchi gani, ili ipate ushuru mdogo."]],
          slides: [
            { title: "AfCFTA ni nini", bullets: ["Nchi 55 za Umoja wa Afrika, soko moja kubwa", "Takriban watu bilioni 1.3", "Biashara ilianza 1 Januari 2021; Sekretarieti iko Accra"] },
            { title: "Inaweza kukufanyia nini", bullets: ["Ushuru mdogo au hakuna kwa bidhaa za nchi wanachama", "Ucheleweshaji na nyaraka za ziada chache kadiri muda unavyokwenda", "Masoko makubwa zaidi jirani"] },
            { title: "Tahadhari", bullets: ["Bidhaa lazima zitimize kanuni za asili", "Nchi zinaitumia kwa kasi tofauti", "Si kila bidhaa imejumuishwa bado"] },
            { title: "Kagua kabla ya kuitegemea", bullets: ["Mamlaka yako ya forodha", "Wizara ya biashara au chama cha wafanyabiashara", "au-afcfta.org"] }
          ],
          sources: [AFCFTA, GTI, ROO],
          tryIt: "Andika bidhaa moja unayouza au unayoweza kuuza, na nchi jirani moja unayoweza kuiuzia. Kisha andika mahali pawili utakapokagua kama AfCFTA inapunguza ushuru wa bidhaa hiyo.",
          youCanNow: "kusema AfCFTA ni nini, jinsi inavyoweza kumsaidia mfanyabiashara mdogo, na mahali pa kukagua kama inahusu bidhaa zako.",
          quickCheck: [
            { objective: "O1", q: "Lengo kuu la AfCFTA kwa wafanyabiashara ni lipi?", options: ["Kupanga bei za bidhaa zote Afrika", "Kupunguza ushuru na vikwazo kwa bidhaa zilizotengenezwa katika nchi wanachama", "Kuunda sarafu moja kwa Afrika yote", "Kusimamisha ukaguzi wote mpakani"], answer: 1, why: "AfCFTA inalenga kupunguza ushuru na vikwazo kwa bidhaa zinazotoka nchi wanachama; haipangi bei, haiundi sarafu moja wala haisimamishi ukaguzi." },
            { objective: "O1", q: "Mfanyabiashara ananunua vifuniko vya simu vilivyotengenezwa nje ya Afrika na anataka kuviuza tena nchi jirani chini ya AfCFTA. Kipi ni kweli?", options: ["Atapata ushuru sifuri kila wakati", "AfCFTA inahusu chakula tu", "Huenda hastahili, kwa sababu bidhaa hazikutengenezwa katika nchi mwanachama", "Hahitaji nyaraka zozote"], answer: 2, why: "Kwa kanuni za asili, bidhaa zilizonunuliwa tu kutoka nje ya Afrika na kuuzwa tena hazitoki katika nchi mwanachama." }
          ]
        },
        {
          title: "Mipango ya kikanda ambayo tayari inasaidia wafanyabiashara wadogo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tafuta mpango wa biashara wa kikanda wa njia yako na dawati au ofisi inayoueleza.",
          text: [
            "Kabla ya AfCFTA, jumuiya za kiuchumi za kikanda za Afrika tayari zilirahisisha biashara. Afrika Magharibi, Mpango wa Uhuru wa Biashara wa ECOWAS (ETLS) unaruhusu bidhaa zilizoidhinishwa kutoka nchi za ECOWAS kusafiri kati ya nchi wanachama kwa ushuru mdogo au bila ushuru. Senegal, Mali, Côte d'Ivoire, Ghana na Nigeria zote ni wanachama wa ECOWAS.",
            "Afrika Mashariki na Kusini, Jumuiya ya Afrika Mashariki (EAC) na COMESA zina Taratibu Rahisi za Biashara (Simplified Trade Regimes) kwa wafanyabiashara wadogo. Zinaruhusu mizigo midogo ya bidhaa zilizoorodheshwa kuvuka kwa nyaraka rahisi zaidi, kama cheti rahisi cha asili. Baadhi ya vituo vya mpakani vina madawati ya taarifa za biashara ambapo maafisa wanawaeleza wafanyabiashara wadogo kanuni, bure.",
            "Viwango vya thamani, orodha ya bidhaa na fomu vinawekwa na kila mpango na vinaweza kubadilika. Uliza ofisi ya forodha katika kituo chako cha mpakani, dawati la taarifa za biashara, au chama chako cha wafanyabiashara wa mipakani. Andika wanachokuambia, pamoja na tarehe na jina la afisa.",
            "Afrika ya Kati (kwa mfano Cameroon) na Afrika Kaskazini (kwa mfano Morocco, Misri na Tunisia) pia zina makubaliano yao ya kikanda. Uliza mamlaka yako ya forodha ni yapi yanahusu njia yako."
          ],
          steps: ["Andika njia yako: kutoka nchi gani, kupitia kituo gani cha mpakani, hadi nchi gani.", "Tafuta jumuiya ya kikanda ambayo nchi zote mbili ni wanachama (kwa mfano ECOWAS, EAC au COMESA).", "Uliza ofisi ya forodha, dawati la biashara au chama cha wafanyabiashara bidhaa zako zinaweza kutumia mpango upi.", "Uliza: bidhaa zipi zinastahili, kiwango gani cha thamani kinatumika, na unahitaji fomu au cheti gani.", "Andika majibu pamoja na tarehe na jina la afisa."],
          words: [["Jumuiya ya kiuchumi ya kikanda", "kundi la nchi jirani zinazoshirikiana katika biashara, kwa mfano ECOWAS, EAC au COMESA."], ["Utaratibu Rahisi wa Biashara", "mpango wa EAC au COMESA unaowaruhusu wafanyabiashara wadogo kuvusha mizigo midogo ya bidhaa zilizoorodheshwa kwa nyaraka rahisi zaidi."], ["Shehena (mzigo)", "mzigo mmoja au kundi moja la bidhaa unalotuma au kubeba."]],
          slides: [
            { title: "Mipango ya kikanda inasaidia sasa", bullets: ["Afrika Magharibi: Mpango wa Uhuru wa Biashara wa ECOWAS (ETLS)", "Afrika Mashariki na Kusini: Taratibu Rahisi za Biashara za EAC na COMESA", "Afrika ya Kati na Kaskazini: makubaliano yao wenyewe"] },
            { title: "Kanuni rahisi kwa wafanyabiashara wadogo", bullets: ["Mizigo midogo ya bidhaa zilizoorodheshwa", "Nyaraka rahisi zaidi, kama cheti rahisi cha asili", "Madawati ya taarifa za biashara katika baadhi ya vituo"] },
            { title: "Uliza, kisha andika", bullets: ["Bidhaa zipi zinastahili? Kiwango gani cha thamani?", "Fomu au cheti gani?", "Andika tarehe na jina la afisa"] }
          ],
          sources: [ETLS, COMESA],
          tryIt: "Kwa njia yako ya Somo la 1, andika jumuiya ya kikanda ambayo nchi zote mbili ni wanachama, na maswali matatu utakayouliza katika ofisi ya forodha au dawati la biashara.",
          youCanNow: "kutafuta mpango wa kikanda wa njia yako na kuuliza ofisi sahihi maswali sahihi kuuhusu.",
          quickCheck: [
            { objective: "O1", q: "Mpango upi una uwezekano mkubwa wa kumhusu mfanyabiashara anayepeleka siagi ya shea kutoka Ghana hadi Burkina Faso?", options: ["Utaratibu Rahisi wa Biashara wa COMESA", "Umoja wa Forodha wa EAC", "Hakuna mpango wowote", "Mpango wa Uhuru wa Biashara wa ECOWAS"], answer: 3, why: "Ghana na Burkina Faso zote ziko katika kanda ya ECOWAS ya Afrika Magharibi, kwa hiyo ETLS ndio mpango wa kuuliza." },
            { objective: "O1", q: "Unataka kujua kiwango cha thamani cha cheti rahisi kwenye njia yako. Unafanya nini?", options: ["Kuuliza ofisi ya forodha au dawati la biashara kituoni na kuandika jibu", "Kukisia, kwa sababu ni sawa kila mahali", "Kumwuliza dereva wa basi", "Kutumia kiwango cha rafiki alichovuka nacho mwaka jana"], answer: 0, why: "Viwango vinatofautiana kati ya mipango na hubadilika, kwa hiyo ofisi ya forodha au dawati la biashara ndipo pa kuuliza." }
          ]
        },
        {
          title: "Nyaraka unazobeba katika kituo rasmi cha mpakani",
          objectives: ["O2"],
          minutes: 5,
          goal: "Orodhesha nyaraka na hatua za kupitisha bidhaa zako katika kituo rasmi cha mpakani.",
          text: [
            "Kutumia kituo rasmi cha mpakani kunakulinda. Bidhaa zako zinaandikwa, unaweza kudai ushuru mdogo chini ya mipango, na una ushahidi jambo likienda vibaya. Bidhaa zinazopitishwa kwa magendo kupitia njia zisizo rasmi zinaweza kunyang'anywa, na huna ulinzi wowote.",
            "Nyaraka za kawaida ni pamoja na: kitambulisho chako au pasipoti; risiti au ankara inayoonyesha ulichonunua au ulichotengeneza na thamani yake; orodha ya bidhaa zako (packing list); tamko la forodha, ambalo afisa au wakala wa forodha anakusaidia kujaza; na cheti cha asili unapotaka ushuru mdogo. Chakula, mimea, wanyama, dawa na vipodozi vinaweza pia kuhitaji cheti cha afya, cha afya ya mimea (phytosanitary) au cha idhini ya bidhaa.",
            "Baadhi ya bidhaa zimezuiliwa au zimepigwa marufuku. Uliza kabla ya kununua mzigo. Wakala wa forodha anaweza kusaidia kwa mizigo mikubwa zaidi, lakini kila wakati pata risiti kwa kila malipo rasmi, na weka nakala za nyaraka zote kwenye simu yako na kwenye karatasi.",
            "Mfano: Awa anauza sabuni ya kutengenezwa kwa mkono kutoka Dakar hadi Bamako. Anauliza ofisi ya forodha anahitaji nyaraka gani, anapata ankara yake na cheti cha asili, na anaweka picha ya kila hati. Mpakani analipa tu kilichoandikwa kwenye risiti rasmi."
          ],
          steps: ["Uliza forodha bidhaa zako zinahitaji nyaraka gani, na kama zipo zilizozuiliwa.", "Pata risiti au ankara za bidhaa zako, na tengeneza orodha ya bidhaa.", "Pata cheti cha asili kama unataka ushuru mdogo chini ya mpango.", "Uliza kuhusu vyeti vya afya, vya mimea au vya bidhaa kwa chakula, mimea, wanyama na vipodozi.", "Tumia kituo rasmi, jaza tamko la forodha, na weka risiti ya kila malipo.", "Weka nakala za kila hati kwenye karatasi na kama picha kwenye simu yako."],
          words: [["Tamko la forodha", "fomu inayoiambia forodha unabeba bidhaa gani na thamani yake."], ["Cheti cha asili", "hati inayoonyesha bidhaa zako zinatoka nchi gani, ili upate ushuru mdogo."], ["Wakala wa forodha (clearing agent)", "mtu au kampuni yenye leseni inayowasaidia wafanyabiashara kukamilisha nyaraka za forodha, kwa malipo."], ["Cheti cha afya ya mimea (phytosanitary)", "cheti cha afya ya mimea kwa mimea, mbegu, nafaka, matunda na mboga."]],
          slides: [
            { title: "Kwa nini utumie kituo rasmi", bullets: ["Bidhaa zinaandikwa; unaweza kudai ushuru mdogo", "Ushahidi jambo likienda vibaya", "Bidhaa za magendo zinaweza kunyang'anywa"] },
            { title: "Nyaraka za kawaida", bullets: ["Kitambulisho au pasipoti; risiti au ankara", "Orodha ya bidhaa; tamko la forodha", "Cheti cha asili kwa ushuru mdogo"] },
            { title: "Nyaraka za ziada kwa baadhi ya bidhaa", bullets: ["Chakula, mimea, wanyama: vyeti vya afya au vya mimea", "Vipodozi na dawa: idhini ya bidhaa", "Baadhi ya bidhaa zimezuiliwa: uliza kabla ya kununua mzigo"] },
            { title: "Jilinde", bullets: ["Risiti kwa kila malipo rasmi", "Nakala kwenye karatasi na picha kwenye simu yako", "Wakala wa forodha kwa mizigo mikubwa zaidi"] }
          ],
          sources: [ROO, ETLS],
          tryIt: "Tengeneza orodha ya kukagua nyaraka kwa bidhaa na njia yako: kila hati unayofikiri unahitaji, pamoja na kisanduku cha kuweka alama baada ya forodha au dawati la biashara kuthibitisha.",
          youCanNow: "kuorodhesha nyaraka na hatua unazohitaji kupitisha bidhaa zako katika kituo rasmi, na kuweka ushahidi wa kila malipo.",
          quickCheck: [
            { objective: "O2", q: "Hati ipi inakusaidia kudai ushuru mdogo chini ya mpango wa biashara?", options: ["Tiketi ya basi", "Cheti cha asili", "Risiti ya simu", "Cheti cha shule"], answer: 1, why: "Cheti cha asili kinaonyesha bidhaa zinatoka nchi mwanachama, na ushuru mdogo unategemea hilo." },
            { objective: "O2", q: "Unalipa ada katika forodha. Unapaswa kupata nini?", options: ["Hakuna; ada huwa si rasmi kila wakati", "Kupeana mkono", "Risiti rasmi, ambayo unaiweka", "Ahadi ya kukuona wakati ujao"], answer: 2, why: "Risiti rasmi ni ushahidi wa ada halisi na inakulinda jambo lolote likienda vibaya." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kanuni na nyaraka",
        questions: [
          { objective: "O1", q: "Unapaswa kukagua wapi kama AfCFTA inapunguza ushuru wa bidhaa yako?", options: ["Ujumbe kwenye mitandao ya kijamii", "Binamu wa mnunuzi", "Mamlaka yako ya forodha na tovuti ya AfCFTA", "Mfanyabiashara yeyote sokoni"], answer: 2, why: "Forodha na Sekretarieti ya AfCFTA zinatoa jibu la sasa na rasmi." },
          { objective: "O1", q: "Mfanyabiashara anapeleka viatu kutoka Nairobi hadi Kampala. Aulize kuhusu mpango upi rahisi?", options: ["Mpango wa Uhuru wa Biashara wa ECOWAS", "Hakuna uliopo Afrika Mashariki", "Mpango wa Ulaya", "Utaratibu Rahisi wa Biashara wa EAC au COMESA"], answer: 3, why: "Kenya na Uganda ziko Afrika Mashariki, ambako EAC na COMESA zina taratibu rahisi kwa wafanyabiashara wadogo." },
          { objective: "O2", q: "Kwa nini kituo rasmi cha mpakani ni bora kuliko njia ya porini?", options: ["Bidhaa zako zinaandikwa na unaweza kudai ushuru mdogo na ulinzi", "Ni haraka zaidi kila wakati", "Hakuna anayekagua chochote", "Ni bure kila wakati"], answer: 0, why: "Vituo rasmi vinaandika bidhaa, vinakuruhusu kutumia mipango ya biashara na vinakupa ushahidi na ulinzi." },
          { objective: "O2", q: "Kofi atabeba samaki waliokaushwa hadi Togo. Huenda akahitaji hati gani ya ziada?", options: ["Leseni ya udereva wa lori asiloliendesha", "Cheti cha afya kwa chakula", "Ripoti ya shule", "Hakuna cha ziada kwa chakula"], answer: 1, why: "Bidhaa za chakula, wanyama na mimea mara nyingi zinahitaji cheti cha afya au cha mimea; anapaswa kuuliza forodha." },
          { objective: "O2", q: "Njia bora ya kuhifadhi nyaraka zako ni ipi?", options: ["Kichwani mwako tu", "Kumpa msafirishaji", "Kuzitupa baada ya mpaka", "Kwenye karatasi na kama picha kwenye simu yako"], answer: 3, why: "Kuweka nakala zote mbili kunamaanisha bado una ushahidi moja ikipotea." }
        ]
      }
    },
    {
      name: "Sura 2: Pesa, malipo na matatizo mpakani",
      lessons: [
        {
          title: "Kukokotoa gharama ya mzigo wa kuvuka mpaka kwa sarafu mbili",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kokotoa gharama yote kwa kila bidhaa na bei ya kuuza kwa sarafu zote mbili.",
          text: [
            "Wafanyabiashara wengi hupoteza pesa nje ya mipaka kwa sababu wanahesabu tu gharama ya bidhaa. Hesabu kila kitu: bidhaa, ufungaji, usafiri hadi mpakani na zaidi, kupakia, ushuru na ada rasmi (zilizokaguliwa na forodha), wakala wa forodha, kuhifadhi, simu na data yako, chakula na malazi yako safarini, na kiasi kidogo cha ziada kwa hasara.",
            "Jumlisha gharama zote na ugawanye kwa idadi ya bidhaa unazoweza kuuza kweli. Hiyo ndiyo gharama yako kwa kila bidhaa. Ongeza faida yako upate bei ya kuuza. Kisha ibadilishe kuwa sarafu ya mnunuzi kwa kiwango cha kubadilisha fedha cha leo, na ukague bei ya bidhaa zinazofanana katika soko hilo.",
            "Mfano (takwimu ni mifano tu): Ama ananunua na kufunga vikopo 100 vya siagi ya shea Tamale kwa GHS 2,000 kwa jumla. Usafiri, kupakia na malazi vinagharimu GHS 600. Ada rasmi zilizokaguliwa forodhani: GHS 200. Jumla GHS 2,800, kwa hiyo GHS 28 kwa kila kikopo. Anaongeza faida ya GHS 7: GHS 35. Kama kiwango cha siku hiyo kingekuwa 1 GHS = 40 XOF, hiyo ni 1,400 XOF kwa kila kikopo. Anakagua kwamba maduka ya Ouagadougou yanauza vikopo vinavyofanana kwa bei karibu na hiyo.",
            "Viwango vya kubadilisha fedha hubadilika kila siku. Kagua kiwango siku unayouza na siku unayobadilisha pesa, na ukubaliane na mnunuzi bei iko kwa sarafu gani."
          ],
          steps: ["Orodhesha kila gharama ya mzigo, kuanzia kununua hadi kuuza.", "Zijumlishe upate gharama yote.", "Gawanya kwa idadi ya bidhaa unazoweza kuuza kweli: gharama kwa kila bidhaa.", "Ongeza faida yako: bei ya kuuza kwa sarafu yako.", "Ibadilishe kuwa sarafu ya mnunuzi kwa kiwango cha leo, na ulinganishe na bei ya soko huko."],
          words: [["Kiwango cha kubadilisha fedha", "kiasi cha sarafu moja unachopata kwa kipimo kimoja cha sarafu nyingine, kwa mfano XOF ngapi kwa 1 GHS."], ["Gharama kwa kila bidhaa", "gharama yote ya mzigo ikigawanywa kwa idadi ya bidhaa unazoweza kuuza."], ["Gharama ya kufika sokoni (landed cost)", "gharama yote ya bidhaa zinapofika katika soko la mnunuzi, pamoja na usafiri na ushuru."]],
          slides: [
            { title: "Hesabu kila gharama", bullets: ["Bidhaa, ufungaji, usafiri, kupakia", "Ushuru na ada rasmi, wakala, kuhifadhi", "Simu, chakula, malazi, na kidogo kwa hasara"] },
            { title: "Kutoka gharama hadi bei", bullets: ["Gharama yote / bidhaa unazoweza kuuza = gharama kwa kila bidhaa", "Gharama kwa kila bidhaa + faida = bei ya kuuza", "Kisha ibadilishe kuwa sarafu ya mnunuzi"] },
            { title: "Mfano (takwimu ni mifano tu)", bullets: ["Vikopo 100: GHS 2,800 kwa jumla = GHS 28 kila kimoja", "Ongeza faida ya GHS 7 = GHS 35", "Kwa 1 GHS = 40 XOF: 1,400 XOF kwa kila kikopo"] },
            { title: "Angalia kiwango", bullets: ["Viwango hubadilika kila siku", "Kagua siku unayouza na kubadilisha pesa", "Kubaliana na mnunuzi sarafu ipi"] }
          ],
          tryIt: "Kokotoa gharama ya mzigo mmoja wa bidhaa yako kwa njia yako: orodhesha kila gharama, tafuta gharama kwa kila bidhaa, ongeza faida yako, na andika bei kwa sarafu zote mbili ukitumia kiwango cha leo.",
          youCanNow: "kukokotoa gharama yote kwa kila bidhaa ya mzigo wa kuvuka mpaka na bei ya kuuza kwa sarafu zote mbili.",
          quickCheck: [
            { objective: "O3", q: "Mzigo wa mifuko 50 unagharimu NGN 250,000 kwa jumla, pamoja na usafiri na ada. Gharama kwa kila mfuko ni ngapi?", options: ["NGN 500", "NGN 50,000", "NGN 2,500", "NGN 5,000"], answer: 3, why: "250,000 ikigawanywa kwa mifuko 50 ni 5,000 kwa kila mfuko." },
            { objective: "O3", q: "Wafanyabiashara husahau gharama ipi mara nyingi zaidi?", options: ["Malazi, chakula na hasara zao wenyewe safarini", "Bei ya bidhaa", "Bei ya kuuza", "Idadi ya bidhaa"], answer: 0, why: "Gharama za safari kama malazi, chakula na hasara ni rahisi kusahau, na zinakula faida." }
          ]
        },
        {
          title: "Kupokea malipo kwa usalama kutoka nchi nyingine",
          objectives: ["O4"],
          minutes: 5,
          goal: "Chagua njia salama ya kupokea malipo kutoka kwa mnunuzi wa nchi nyingine na utambue ulaghai wa malipo.",
          text: [
            "Pesa taslimu mpakani ni hatari: unaweza kuibiwa, na kubadilisha pesa barabarani kunaweza kukupa kiwango kibaya au noti bandia. Njia salama zaidi ni pamoja na uhamisho wa benki, huduma ya pesa za simu inayotuma nje ya mipaka kwenye njia yako, na mifumo ya malipo kama PAPSS (Mfumo wa Malipo na Usuluhishi wa Afrika), unaomruhusu mlipaji wa nchi moja ya Afrika kulipa kwa sarafu ya nchi yake na mpokeaji kupata sarafu ya nchi yake, kupitia benki na watoa huduma za malipo waliojiunga nao. Uliza benki yako au mtoa huduma wako wa pesa za simu kipi kinafanya kazi kwenye njia yako na kinagharimu kiasi gani.",
            "Kwa mnunuzi mpya, omba malipo ya awali (amana) kabla ya kutuma, au malipo kamili kabla ya kukabidhi bidhaa. Hakikisha pesa zimefika kweli kwenye akaunti yako, kwa kuangalia salio lako mwenyewe, si kwa kuamini ujumbe ambao mnunuzi anakutumia.",
            "Dalili za hatari za ulaghai: mnunuzi anayetuma ujumbe bandia wa \"malipo yamepokelewa\" au picha ya skrini; mtu anayesema alituma pesa nyingi kwa makosa na anakuomba umrudishie tofauti; mtu yeyote anayeomba PIN yako, nywila au msimbo uliotumwa kwenye simu yako; na mnunuzi anayekuharakisha uachilie bidhaa kabla hujakagua. Benki halisi au mtoa huduma halisi wa pesa za simu kamwe haombi PIN yako."
          ],
          steps: ["Kubaliana kwa maandishi kuhusu bei, sarafu na njia ya malipo.", "Mwombe mnunuzi mpya amana au malipo kamili kwanza.", "Angalia salio lako mwenyewe kuthibitisha pesa zimefika.", "Hapo tu achilia bidhaa, na utoe risiti.", "Usitoe kamwe PIN yako, nywila au msimbo uliotumwa kwenye simu yako."],
          words: [["PAPSS", "Mfumo wa Malipo na Usuluhishi wa Afrika: unaruhusu malipo kati ya nchi za Afrika kufanywa kwa sarafu za nchi husika, kupitia benki na watoa huduma za malipo waliojiunga."], ["Amana (malipo ya awali)", "sehemu ya bei inayolipwa kabla hujatuma bidhaa."], ["PIN", "namba ya siri ya kadi yako ya benki au akaunti yako ya pesa za simu. Usiitoe kamwe."]],
          slides: [
            { title: "Salama kuliko pesa taslimu mpakani", bullets: ["Uhamisho wa benki", "Pesa za simu za kuvuka mipaka kwenye njia yako", "PAPSS: lipa na pokea kwa sarafu za nchi husika kupitia benki"] },
            { title: "Lipwa kabla ya kukabidhi", bullets: ["Mnunuzi mpya: amana au malipo kamili kwanza", "Angalia salio lako mwenyewe", "Kisha achilia bidhaa na utoe risiti"] },
            { title: "Dalili za hatari za ulaghai", bullets: ["Ujumbe bandia wa \"malipo yamepokelewa\" au picha ya skrini", "\"Nimetuma nyingi mno, nirudishie\"", "Anaomba PIN au msimbo wako; anakuharakisha"] },
            { title: "Kumbuka", bullets: ["Mtoa huduma halisi kamwe haombi PIN yako", "Usitoe kamwe msimbo uliotumwa kwenye simu yako"] }
          ],
          sources: [PAPSS],
          tryIt: "Andika kanuni ya malipo ya biashara yako kwa mistari mitatu: njia gani unakubali, unaachilia bidhaa lini, na unakaguaje kwamba pesa zimefika. Uliza benki yako au mtoa huduma wako wa pesa za simu huduma ipi ya kuvuka mipaka inafanya kazi kwenye njia yako.",
          youCanNow: "kuchagua njia salama ya kulipwa na mnunuzi wa nchi nyingine na kutambua dalili za ulaghai wa malipo.",
          quickCheck: [
            { objective: "O4", q: "Mnunuzi mpya wa Abidjan anatuma picha ya skrini inayosema amelipa. Unafanya nini kabla ya kutuma bidhaa?", options: ["Kutuma bidhaa mara moja", "Kuangalia salio lako mwenyewe kuthibitisha pesa zimefika", "Kumwomba picha nyingine ya skrini", "Kumtumia PIN yako ili akague"], answer: 1, why: "Picha za skrini zinaweza kuwa bandia; salio lako mwenyewe tu linathibitisha pesa zimefika." },
            { objective: "O4", q: "Mnunuzi anasema alituma pesa nyingi mno na anakuomba umrudishie tofauti. Huenda hili ni nini?", options: ["Kurudisha pesa kwa kawaida", "Kosa la benki unalopaswa kurekebisha haraka", "Ulaghai wa kawaida: angalia salio lako na zungumza na mtoa huduma wako", "Kodi"], answer: 2, why: "\"Nimetuma nyingi mno, nirudishie\" ni ulaghai unaojulikana sana; angalia salio lako na piga namba rasmi ya mtoa huduma wako." }
          ]
        },
        {
          title: "Malipo yasiyo rasmi, ucheleweshaji na mpango wako wa biashara",
          objectives: ["O5"],
          minutes: 6,
          goal: "Eleza hatua salama za kuchukua unapoombwa malipo yasiyo rasmi, na uripoti kama kikwazo kisicho cha ushuru.",
          text: [
            "Kikwazo kisicho cha ushuru (NTB) ni chochote kisicho ushuru kinachofanya biashara kuwa ngumu zaidi: malipo yasiyo rasmi kwenye vizuizi vya barabarani, ucheleweshaji mrefu, nyaraka ambazo haziko katika kanuni, au bidhaa kushikiliwa bila sababu. AfCFTA ina mfumo wa mtandaoni, tradebarriers.africa, ambapo mfanyabiashara yeyote, wakiwemo wafanyabiashara wasio rasmi, wanawake na vijana, anaweza kuripoti NTB. Ripoti zinakwenda kwa vituo vya uratibu vya kitaifa (focal points) na Sekretarieti ya AfCFTA ili zifuatiliwe.",
            "Mtu akikuomba pesa bila risiti: tulia na uwe na adabu, na weka usalama wako mbele. Omba ada rasmi na risiti. Omba kuzungumza na afisa msimamizi, au na dawati la taarifa za biashara. Usibishane kwa namna inayokuweka hatarini.",
            "Baadaye, andika mambo yaliyotokea: tarehe, saa, mahali, kilichoombwa, kiasi, na jina lolote au namba ya beji uliyoiona. Ripoti kwenye tradebarriers.africa (mtandaoni au kupitia njia yake ya simu ya mkononi), kwa namba ya malalamiko ya mamlaka yako ya forodha, au kupitia chama chako cha wafanyabiashara. Wafanyabiashara wanawake wanaonyanyaswa wanaweza pia kuomba msaada kutoka chama chao au kundi la wafanyabiashara wanawake.",
            "Sasa unganisha yote. Mpango wako wa biashara ya kuvuka mpaka una: bidhaa na kituo cha mpakani, kanuni ulizokagua, nyaraka zako, gharama na bei yako kwa sarafu mbili, jinsi unavyolipwa, na utakachofanya kuhusu malipo yasiyo rasmi."
          ],
          steps: ["Tulia na uwe na adabu; usalama wako unakuja kwanza.", "Omba ada rasmi na risiti, au afisa msimamizi au dawati la biashara.", "Andika mambo: tarehe, saa, mahali, kiasi, jina au namba ya beji.", "Ripoti kwenye tradebarriers.africa, kwa forodha, au kupitia chama chako cha wafanyabiashara.", "Ongeza hatua hizi kwenye mpango wako wa biashara ya kuvuka mpaka."],
          words: [["Kikwazo kisicho cha ushuru (NTB)", "chochote kisicho ushuru kinachofanya biashara kuwa ngumu zaidi, kama malipo yasiyo rasmi, ucheleweshaji mrefu au nyaraka za ziada."], ["Kituo cha uratibu (focal point)", "mtu au ofisi katika kila nchi inayofuatilia ripoti za NTB."]],
          slides: [
            { title: "Kikwazo kisicho cha ushuru ni nini?", bullets: ["Malipo yasiyo rasmi kwenye vizuizi au mipakani", "Ucheleweshaji mrefu; nyaraka zisizo katika kanuni", "Bidhaa kushikiliwa bila sababu"] },
            { title: "Ukiombwa pesa bila risiti", bullets: ["Tulia na uwe na adabu: usalama kwanza", "Omba ada rasmi na risiti", "Omba afisa msimamizi au dawati la biashara"] },
            { title: "Andika, kisha ripoti", bullets: ["Tarehe, saa, mahali, kiasi, jina au beji", "tradebarriers.africa: mtandaoni au kwa simu", "Namba ya malalamiko ya forodha au chama cha wafanyabiashara"] },
            { title: "Mpango wako wa biashara ya kuvuka mpaka", bullets: ["Bidhaa, njia, kanuni ulizokagua; nyaraka", "Gharama na bei kwa sarafu mbili", "Njia ya malipo; cha kufanya kuhusu malipo yasiyo rasmi"] }
          ],
          sources: [NTB, AFCFTA],
          tryIt: "Andika mpango wako wa ukurasa mmoja wa biashara ya kuvuka mpaka, kama ilivyoelezwa katika kazi ya mwisho. Ongeza mambo ambayo ungeyaandika na mahali ambapo ungeripoti malipo yasiyo rasmi.",
          youCanNow: "kushughulikia kwa usalama malipo yasiyo rasmi, kuyaripoti kama kikwazo kisicho cha ushuru, na kuandika mpango kamili wa biashara ya kuvuka mpaka.",
          quickCheck: [
            { objective: "O5", q: "Mfanyabiashara mdogo anaweza kuripoti wapi malipo yasiyo rasmi katika mpaka wa Afrika?", options: ["tradebarriers.africa, forodha au chama cha wafanyabiashara", "Kwenye mitandao ya kijamii tu", "Popote pale; haiwezi kuripotiwa", "Kwa mtu aliyeomba pesa"], answer: 0, why: "Mfumo wa NTB wa AfCFTA, namba za malalamiko za forodha na vyama vya wafanyabiashara ndizo njia rasmi." },
            { objective: "O5", q: "Unapaswa kuandika nini baada ya malipo yasiyo rasmi?", options: ["Jinsi ulivyojisikia tu", "Tarehe, saa, mahali, kiasi na jina lolote au namba ya beji", "Hakuna; sahau", "Bei ya bidhaa zako tu"], answer: 1, why: "Mambo yaliyo wazi yanafanya ripoti inayoweza kufuatiliwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Pesa, malipo na matatizo",
        questions: [
          { objective: "O3", q: "Gharama yote ya mzigo ni XAF 300,000 kwa bidhaa 60. Unaongeza faida ya XAF 1,000 kwa kila bidhaa. Bei ya kuuza ni ngapi?", options: ["XAF 6,000", "XAF 5,000", "XAF 1,000", "XAF 7,000"], answer: 0, why: "300,000 / 60 = 5,000 gharama kwa kila bidhaa; ukiongeza faida ya 1,000 = 6,000." },
          { objective: "O3", q: "Kwa nini ukague kiwango cha kubadilisha fedha siku unayouza?", options: ["Viwango havibadiliki kamwe", "Mnunuzi ndiye anakiweka", "Viwango hubadilika kila siku na vinaweza kufuta faida yako", "Ni kwa benki tu"], answer: 2, why: "Viwango vya kubadilisha fedha hubadilika kila siku, kwa hiyo kiwango cha zamani kinaweza kugeuza faida kuwa hasara." },
          { objective: "O4", q: "Ombi lipi linapaswa kukufanya usimame mara moja?", options: ["\"Naweza kulipa kwa uhamisho wa benki?\"", "\"Nitumie risiti.\"", "\"Bei yako kwa XOF ni ngapi?\"", "\"Niambie msimbo tuliotuma kwenye simu yako sasa hivi.\""], answer: 3, why: "Hakuna mnunuzi halisi wala mtoa huduma anayehitaji msimbo au PIN yako; kuuomba ni dalili ya ulaghai." },
          { objective: "O4", q: "PAPSS ni nini?", options: ["Fomu ya forodha", "Mfumo wa kulipana kati ya nchi za Afrika kwa sarafu za nchi husika kupitia benki na watoa huduma", "Aina ya simu ya mkononi", "Kituo cha mpakani"], answer: 1, why: "PAPSS inamruhusu mlipaji kulipa kwa sarafu ya nchi yake na mpokeaji kupata sarafu ya nchi yake kati ya nchi za Afrika." },
          { objective: "O5", q: "Afisa anaomba pesa bila risiti. Hatua ya kwanza iliyo salama zaidi ni ipi?", options: ["Kutulia, kuomba ada rasmi na risiti au afisa msimamizi", "Kupiga kelele na kukataa kuondoka", "Kukimbia kuvuka mpaka", "Kulipa mara mbili ili uende haraka"], answer: 0, why: "Kutulia kunakuweka salama, na kuomba risiti au afisa msimamizi kunafuata njia rasmi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuuza Nje ya Mipaka: Wafanyabiashara Wadogo na AfCFTA",
    questions: [
      { objective: "O1", q: "Nchi ngapi za Umoja wa Afrika ni sehemu ya AfCFTA?", options: ["15", "55", "8", "100"], answer: 1, why: "AfCFTA inaziunganisha nchi 55 za Umoja wa Afrika." },
      { objective: "O1", q: "Biashara chini ya AfCFTA ilianza lini?", options: ["1 Januari 2021", "1 Januari 2000", "Bado haijaanza", "1 Januari 2030"], answer: 0, why: "Biashara chini ya AfCFTA ilianza tarehe 1 Januari 2021." },
      { objective: "O1", q: "Nini huamua kama bidhaa zako zinaweza kupata ushuru mdogo wa AfCFTA?", options: ["Rangi ya kifungashio", "Umbali unaosafiri", "Kanuni za asili", "Siku ya wiki"], answer: 2, why: "Bidhaa lazima zitimize kanuni za asili, zikionyesha zinatoka nchi mwanachama." },
      { objective: "O1", q: "Moussa anauza vipodozi kutoka Dakar hadi Bamako. Aulize kwanza kuhusu mpango upi?", options: ["Utaratibu Rahisi wa Biashara wa EAC", "Utaratibu Rahisi wa Biashara wa COMESA", "Mpango wa Asia", "Mpango wa Uhuru wa Biashara wa ECOWAS"], answer: 3, why: "Senegal na Mali ni wanachama wa ECOWAS, kwa hiyo ETLS ndio mpango wa kuuliza." },
      { objective: "O1", q: "Nani anaweza kueleza kanuni rahisi kwa wafanyabiashara wadogo katika baadhi ya vituo vya mpakani?", options: ["Afisa wa dawati la taarifa za biashara", "Mbadilishaji pesa yeyote", "Kondakta wa basi", "Mtu usiyemjua kwenye simu"], answer: 0, why: "Madawati ya taarifa za biashara katika baadhi ya vituo vya mpakani yanawaeleza wafanyabiashara wadogo kanuni." },
      { objective: "O2", q: "Orodha ipi inaonyesha nyaraka za kawaida za kituo rasmi cha mpakani?", options: ["Picha za harusi na shajara", "Namba ya simu tu", "Kitambulisho, ankara au risiti, orodha ya bidhaa, tamko la forodha", "Barua kutoka kwa rafiki"], answer: 2, why: "Kitambulisho, ankara au risiti, orodha ya bidhaa na tamko la forodha ndizo nyaraka za kawaida." },
      { objective: "O2", q: "Kabla ya kununua mzigo wa kuvusha, unapaswa kuuliza forodha nini?", options: ["Bidhaa ziwe na rangi gani", "Kama bidhaa zako zimezuiliwa na zinahitaji nyaraka gani", "Kama wanataka kununua baadhi", "Hakuna"], answer: 1, why: "Baadhi ya bidhaa zimezuiliwa, na nyaraka zinatofautiana kwa bidhaa, kwa hiyo uliza kwanza." },
      { objective: "O2", q: "Grace anabeba nyanya mbichi kutoka Kenya hadi Tanzania. Huenda akahitaji cheti gani?", options: ["Shahada ya chuo kikuu", "Cheti cha ndoa", "Kibali cha udereva", "Cheti cha afya ya mimea (phytosanitary)"], answer: 3, why: "Mazao mabichi ya mimea mara nyingi yanahitaji cheti cha afya ya mimea; anapaswa kuuliza forodha." },
      { objective: "O2", q: "Wakala wa forodha anafanya nini?", options: ["Anakusaidia kukamilisha nyaraka za forodha, kwa malipo", "Anakuuzia bidhaa zako", "Anabadilisha pesa barabarani", "Anaweka kiwango cha ushuru"], answer: 0, why: "Wakala wa forodha ana leseni ya kusaidia nyaraka za forodha kwa malipo." },
      { objective: "O3", q: "Hatua ya kwanza ya kukokotoa gharama ya mzigo ni ipi?", options: ["Kuchagua bei unayoipenda", "Kuorodhesha kila gharama kuanzia kununua hadi kuuza", "Kunakili bei ya jirani", "Kubadilisha pesa"], answer: 1, why: "Huwezi kuweka bei ya haki hadi ujue kila gharama." },
      { objective: "O3", q: "Gharama yote ni KES 36,000 kwa jozi 120 za makubadhi. Gharama kwa kila jozi ni ngapi?", options: ["KES 30", "KES 3,000", "KES 300", "KES 120"], answer: 2, why: "36,000 ikigawanywa kwa 120 ni 300." },
      { objective: "O3", q: "Gharama kwa kila bidhaa ni GHS 20 na faida ni GHS 5. Kwa kiwango cha mfano cha 1 GHS = 40 XOF, bei kwa XOF ni ngapi?", options: ["800 XOF", "200 XOF", "1,000 XOF", "25 XOF"], answer: 2, why: "GHS 20 + GHS 5 = GHS 25; 25 x 40 = 1,000 XOF." },
      { objective: "O3", q: "Baada ya kupata bei yako, unapaswa kukagua nini kingine?", options: ["Hali ya hewa", "Bei ya bidhaa zinazofanana katika soko la mnunuzi", "Hakuna", "Simu ya jirani yako"], answer: 1, why: "Kulinganisha na soko kunaonyesha kama wanunuzi watalipa bei yako." },
      { objective: "O4", q: "Mnunuzi mpya anataka bidhaa sasa na anaahidi kulipa wiki ijayo. Kipi ni salama zaidi?", options: ["Kuomba amana au malipo kamili kwanza", "Kutuma kila kitu sasa", "Kutoa PIN yako kama ishara ya kuaminiana", "Kutuma mara mbili"], answer: 0, why: "Kwa mnunuzi mpya, amana au malipo kamili kwanza yanalinda bidhaa zako." },
      { objective: "O4", q: "Unajuaje kwamba malipo yamefika kweli?", options: ["Mnunuzi anasema hivyo", "Picha ya skrini", "Ujumbe kutoka namba usiyoijua", "Unaangalia salio lako mwenyewe"], answer: 3, why: "Salio lako mwenyewe tu linathibitisha pesa zipo kweli." },
      { objective: "O4", q: "Nani atakuomba PIN yako ya pesa za simu?", options: ["Mtoa huduma wako wa pesa za simu", "Benki yako", "Hakuna mtoa huduma halisi: walaghai tu", "Forodha"], answer: 2, why: "Mtoa huduma halisi kamwe haombi PIN yako; yeyote anayeiomba ni mlaghai." },
      { objective: "O4", q: "Kwa nini kubeba pesa taslimu nyingi kuvuka mpaka ni hatari?", options: ["Pesa taslimu ni haramu kila wakati", "Wizi, viwango vibaya vya barabarani na noti bandia", "Pesa taslimu haziwezi kuhesabiwa", "Benki zinakataza"], answer: 1, why: "Pesa taslimu zinaweza kuibiwa, na wabadilishaji wa barabarani wanaweza kutoa viwango vibaya au noti bandia." },
      { objective: "O5", q: "Kipi ni kikwazo kisicho cha ushuru?", options: ["Ushuru rasmi wa kuingiza bidhaa", "Malipo yasiyo rasmi kwenye kizuizi cha barabarani", "Bei ya bidhaa zako", "Faida yako"], answer: 1, why: "NTB ni chochote kisicho ushuru kinachofanya biashara kuwa ngumu zaidi, kama malipo yasiyo rasmi." },
      { objective: "O5", q: "Nani anaweza kuripoti kwenye tradebarriers.africa?", options: ["Kampuni kubwa tu", "Serikali tu", "Wanaume tu", "Mfanyabiashara yeyote, wakiwemo wafanyabiashara wasio rasmi, wanawake na vijana"], answer: 3, why: "Mfumo uko wazi kwa biashara za kila ukubwa, wafanyabiashara wasio rasmi, wanawake na vijana." },
      { objective: "O5", q: "Afisa anashikilia bidhaa zako na anaomba pesa taslimu bila risiti. Mpango bora ni upi?", options: ["Kutulia, kuomba risiti au afisa msimamizi, kuandika mambo, na kuripoti", "Kuacha bidhaa zako na kurudi nyumbani", "Kubishana kwa sauti kubwa hadi akate tamaa", "Kulipa na kunyamaza milele"], answer: 0, why: "Kukaa salama, kuomba njia rasmi, kuandika mambo na kuripoti ndio mpango sahihi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango wako na ujaribu tena.",
    criteria: [
      { name: "Kanuni zimekaguliwa", objective: "O1", notYet: "Mpango hausemi chochote kuhusu kanuni zinazohusika, au unategemea uvumi.", meets: "Mpango unataja mpango wa kikanda au kanuni ya AfCFTA kwa njia hiyo na angalau ofisi mbili au tovuti mbili za kukagua nazo.", exceeds: "Pia unaandika ofisi ilichosema, pamoja na tarehe na jina la afisa." },
      { name: "Nyaraka zimeorodheshwa", objective: "O2", notYet: "Hakuna orodha ya nyaraka, au kitambulisho tu.", meets: "Orodha ya nyaraka za bidhaa na njia hii, pamoja na ankara na tamko la forodha, na cheti cha asili pale ushuru mdogo unapotakiwa.", exceeds: "Pia inataja cheti chochote cha afya, cha mimea au cha bidhaa na jinsi nakala zinavyohifadhiwa." },
      { name: "Gharama yote na bei", objective: "O3", notYet: "Gharama ya bidhaa tu ndiyo imehesabiwa, au hesabu si sahihi.", meets: "Kila gharama imeorodheshwa, gharama kwa kila bidhaa na bei ya kuuza ni sahihi, na bei imeonyeshwa kwa sarafu zote mbili.", exceeds: "Pia inalinganisha bei na soko la mnunuzi na inazingatia mabadiliko ya kiwango cha kubadilisha fedha." },
      { name: "Malipo salama", objective: "O4", notYet: "Bidhaa zinaachiliwa kabla ya malipo kukaguliwa, au mpango unatoa PIN.", meets: "Njia salama imetajwa, bidhaa zinaachiliwa tu baada ya salio kukaguliwa, na PIN haitolewi kamwe.", exceeds: "Pia inaorodhesha dalili za hatari za ulaghai ambazo mfanyabiashara atazitazama." },
      { name: "Malipo yasiyo rasmi", objective: "O5", notYet: "Hakuna mpango, au mpango ni kulipa na kunyamaza.", meets: "Hatua salama, mambo ya kuandika na njia rasmi ya kuripoti vimetajwa.", exceeds: "Unataja njia mbili za kuripoti na chama cha wafanyabiashara kwa msaada." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia kituo rasmi cha mpakani na nyaraka sahihi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti malipo yasiyo rasmi machache zaidi, au wanaowasilisha ripoti ya NTB, ndani ya siku 90",
      "Wanafunzi wanaoripoti mauzo ya kuvuka mpaka kwa faida iliyopangwa ndani ya siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya kawaida yenye kikokotoo; intaneti kwa au-afcfta.org na tradebarriers.africa ikiwezekana",
      "Karatasi na kalamu kwa orodha ya kukagua nyaraka, kukokotoa gharama na mpango wa biashara",
      "Kiwango cha leo cha kubadilisha fedha kwa njia ya mwanafunzi (kutoka benki au benki kuu)",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Kabla ya kipindi, uliza ofisi ya forodha au dawati la biashara la eneo lako mipango na nyaraka zipi zinahusu njia ambazo wanafunzi wako wanatumia, ili uweze kujibu maswali; usitaje kamwe viwango vya ushuru kwa kukumbuka tu.",
      "Katika chama cha wafanyabiashara au kundi la sokoni: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi, huku wanafunzi wakikokotoa gharama za mizigo yao halisi.",
      "Waheshimu wafanyabiashara wasio rasmi: lengo ni biashara salama zaidi, halali na yenye faida zaidi, si kulaumu.",
      "Usiwaombe wanafunzi kamwe kutoa PIN, nywila au namba za akaunti darasani.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
