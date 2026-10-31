"use strict";

// Koach Learn course (Swahili translation of shared/youth-first-job.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Kozi hii inahusu kazi nchini Marekani; majina ya ofisi na fomu za Marekani yamebaki kama yalivyo.

const SRC = {
  youthRules: { name: "Wizara ya Kazi ya Marekani (US Department of Labor): YouthRules!", url: "https://www.dol.gov/agencies/whd/youthrules" },
  fs43: { name: "Wizara ya Kazi ya Marekani: Fact Sheet 43, sheria za ajira ya watoto kwa kazi zisizo za shamba", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
  childLabor: { name: "Wizara ya Kazi ya Marekani: Ajira ya watoto (Child labor)", url: "https://www.dol.gov/agencies/whd/child-labor" },
  stateChildLabor: { name: "Wizara ya Kazi ya Marekani: Sheria za majimbo kuhusu ajira ya watoto", url: "https://www.dol.gov/agencies/whd/state/child-labor" },
  minWage: { name: "Wizara ya Kazi ya Marekani: Kima cha chini cha mshahara (Minimum wage)", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
  stateMinWage: { name: "Wizara ya Kazi ya Marekani: Sheria za majimbo kuhusu kima cha chini cha mshahara", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
  i9: { name: "USCIS: Form I-9, Uthibitisho wa Ruhusa ya Kufanya Kazi", url: "https://www.uscis.gov/i-9" },
  w4: { name: "IRS: Kuhusu Form W-4", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  irs751: { name: "IRS: Topic 751, viwango vya makato ya Social Security na Medicare", url: "https://www.irs.gov/taxtopics/tc751" },
  oshaYoung: { name: "OSHA: Wafanyakazi vijana (Young workers)", url: "https://www.osha.gov/young-workers" },
  ftcJobScams: { name: "FTC: Ulaghai wa kazi (Job scams)", url: "https://consumer.ftc.gov/articles/job-scams" }
};

module.exports = {
  id: "youth-first-job-sw",
  lang: "sw",
  translationOf: "youth-first-job",
  category: "Workforce Development",
  name: "Kazi Yako ya Kwanza: Vibali vya Kazi, Mishahara na Matarajio ya Bosi",
  skills: "Kukagua sheria za kazi za vijana, Kuandaa nyaraka za kazi, Kusoma hati ya mshahara, Kufuatilia saa zako, Kutimiza matarajio ya bosi, Kusema kuhusu usalama",
  outcome: "kuanza kazi yako ya kwanza ukiwa tayari: kukagua kwamba kazi na saa ni halali kwa umri wako, kukusanya nyaraka zako za kazi, kusoma na kukagua hati yako ya mshahara, kufanya kazi jinsi bosi anavyotarajia, na kusema ikiwa kitu si salama au si haki.",
  about: [
    "Kozi hii ni ya vijana wanaojiandaa kwa kazi yao ya kwanza, kwa mfano dukani, mgahawani, kambi ya kiangazi, jumba la sinema au ofisini. Pia inawasaidia wazazi, washauri (mentors) na programu za ajira za vijana. Inahusu kazi nchini Marekani.",
    "Utakagua sheria za umri wako, utaandaa nyaraka zako, utasoma hati ya mshahara na kuilinganisha na saa zako, utajifunza bosi anatarajia nini katika wiki za kwanza, na utajifunza haki zako na cha kufanya kazi ikiwa si salama.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" kwenye karatasi au simu. Mwishoni utatengeneza Karatasi yako ya Kuanza Kazi ya Kwanza. Kozi hii inafundisha sheria; haichukui nafasi ya ofisi ya kazi ya jimbo lako. Kagua kila wakati ukurasa rasmi wa jimbo lako."
  ],
  finalTask: "Tengeneza Karatasi ya Kuanza Kazi ya Kwanza ya ukurasa mmoja kwa kazi halisi au unayoipanga: (1) umri wako, kazi, na saa unazoruhusiwa kufanya kazi kwa sheria za shirikisho (federal) na za jimbo lako, pamoja na ukurasa rasmi ulioukagua; (2) orodha ya nyaraka unazohitaji (kibali cha kazi kama jimbo lako kinakihitaji, nyaraka za utambulisho kwa Form I-9, Form W-4) na mahali pa kupata kila moja; (3) zoezi la kukagua hati ya mshahara: kutoka hati ya kubuni, andika mshahara ghafi, kila makato na mshahara halisi, na uthibitishe hesabu; (4) tabia tatu utakazomwonyesha bosi wako katika wiki zako mbili za kwanza; (5) mpango wako ikiwa kitu si salama: utamwambia nani kwanza na namba rasmi ya simu ya kupiga.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana (kama miaka 14 hadi 19) na vijana wazima wanaotafuta kazi ya kwanza, wakiwemo wanafunzi katika programu za ajira za vijana za kiangazi, vijana wa malezi ya kambo (foster youth) na vijana katika programu za mafunzo ya kazi. Baadhi ni wa kwanza katika familia yao kufanya kazi mahali pa kazi nchini Marekani.",
    startingPoint: "Wanaweza kutumia simu na kujaza fomu rahisi. Wengi hawajawahi kuona hati ya mshahara, Form W-4 au kibali cha kazi, na hawajui sheria za ajira ya watoto wala haki zao kazini.",
    gap: "Mara nyingi wafanyakazi vijana hupangiwa saa au kazi ambazo sheria hairuhusu kwa umri wao, hawana uhakika wanahitaji nyaraka gani, hawawezi kujua kama mshahara wao ni sahihi, na wanaogopa kusema kuhusu usalama. Kujua sheria na tabia ambazo bosi anatarajia kunawasaidia kuajiriwa, kudumu kazini na kubaki salama.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8)",
      "Vifaa: simu au kompyuta ya shule au maktaba; karatasi na kalamu zinafaa kwa kila kazi",
      "Muda: masomo ya dakika 4 hadi 6",
      "Sheria zinatofautiana kati ya majimbo; sheria ya shirikisho ni kiwango cha chini na sheria kali zaidi ndiyo inayotumika, kwa hiyo kila somo linaelekeza kwenye ukurasa rasmi",
      "Faragha: hakuna namba halisi za Social Security, taarifa za benki wala hati halisi za mshahara zinazoshirikiwa darasani; mazoezi yanatumia namba za kubuni"
    ],
    prerequisites: "Hakuna. Wanafunzi wanaotaka msaada wa wasifu wa kazi (CV) na usaili wanaweza pia kusoma kozi \"Wasifu, LinkedIn na Usaili\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa umri wako na ofa ya kazi yenye ratiba", action: "kukagua kama kazi na saa zinaruhusiwa kwa umri wako kwa sheria za shirikisho na za jimbo", standard: "ukitaja ukurasa rasmi uliotumia" },
    { id: "O2", condition: "Kwa kazi katika jimbo lako", action: "kuorodhesha nyaraka unazohitaji kuanza kazi na mahali pa kupata kila moja", standard: "pamoja na kibali cha kazi kama jimbo lako kinakihitaji, utambulisho kwa Form I-9 na Form W-4" },
    { id: "O3", condition: "Ukipewa hati ya mshahara na kumbukumbu yako mwenyewe ya saa", action: "kupata mshahara ghafi, kila makato na mshahara halisi, na kuvilinganisha na saa zako", standard: "hesabu ikiwa sahihi hadi senti" },
    { id: "O4", condition: "Ukipewa hali ya kazini katika wiki zako za kwanza", action: "kuchagua na kueleza kitendo cha kitaaluma ambacho bosi anatarajia", standard: "ukipata angalau hali 4 kati ya 5 sahihi" },
    { id: "O5", condition: "Ukipewa hali isiyo salama au isiyo ya haki kazini", action: "kueleza hatua za kusema na kuripoti tatizo", standard: "ukitaja utamwambia nani kwanza na ofisi rasmi ya serikali ya kupiga simu isiporekebishwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiandaa kufanya kazi",
      lessons: [
        {
          title: "Kazi na saa zipi ni halali kwa umri wako",
          objectives: ["O1"],
          minutes: 6,
          goal: "Kagua kama kazi na saa za kazi zinaruhusiwa kwa umri wako.",
          text: [
            "Nchini Marekani, sheria ya shirikisho (federal) kuhusu ajira ya watoto ni Fair Labor Standards Act (FLSA). Majimbo pia yana sheria zao za ajira ya watoto. Sheria hizo mbili zikitofautiana, sheria kali zaidi ndiyo inayotumika.",
            "Kwa sheria za shirikisho kwa kazi nyingi zisizo za shamba: chini ya miaka 14 kwa kawaida huwezi kufanya kazi (kuna vighairi vichache kwenye ukurasa rasmi). Ukiwa na miaka 14 na 15 unaweza kufanya kazi nje ya saa za shule, lakini hadi saa 3 tu siku ya shule (pamoja na Ijumaa), saa 18 katika wiki ya shule, saa 8 siku isiyo ya shule na saa 40 katika wiki isiyo na shule, na kati ya 7 a.m. na 7 p.m. tu. Kuanzia June 1 hadi Labor Day (siku ya mapumziko ya Septemba), kikomo cha jioni kinasogea hadi 9 p.m.",
            "Ukiwa na miaka 16 na 17, sheria ya shirikisho haiweki kikomo cha saa zako, lakini huruhusiwi kufanya kazi ambazo Wizara ya Kazi (Department of Labor) inaziita za hatari. Mifano: kuendesha gari barabarani kama sehemu ya kazi (wenye miaka 17 wana kighairi kidogo), kuendesha forklift au mashine nyingine za umeme za kuinua mizigo, na mashine nyingi za umeme za kukata mbao. Jimbo lako linaweza kuongeza vikomo zaidi.",
            "Ukiwa chini ya miaka 18, ratiba au kazi ikionekana kwenda kinyume na sheria hizi, wewe huna kosa: sheria zipo kukulinda, na mwajiri ndiye anayepaswa kuzifuata."
          ],
          steps: ["Andika umri wako na kazi na saa za kazi hiyo.", "Soma sheria za shirikisho kwenye YouthRules ya Wizara ya Kazi au Fact Sheet 43.", "Fungua ukurasa wa jimbo lako kuhusu ajira ya watoto (Wizara ya Kazi inaorodhesha kila jimbo).", "Tumia sheria kali zaidi. Zungushia duara saa au kazi yoyote isiyoruhusiwa."],
          words: [["FLSA", "Fair Labor Standards Act, sheria ya shirikisho kuhusu kima cha chini cha mshahara, saa za ziada (overtime) na ajira ya watoto."], ["Sheria ya ajira ya watoto", "sheria kuhusu kazi na saa zinazoruhusiwa kwa wafanyakazi walio chini ya miaka 18."], ["Kazi ya hatari", "kazi ambayo Wizara ya Kazi inasema ni hatari mno kwa wafanyakazi walio chini ya miaka 18, kama kuendesha gari au forklift."], ["Wiki ya shule", "wiki ambayo shule iko wazi angalau siku moja."]],
          slides: [
            { title: "Seti mbili za sheria", bullets: ["Sheria ya shirikisho (FLSA) na sheria ya jimbo lako", "Zikitofautiana, sheria kali zaidi ndiyo inayotumika"] },
            { title: "Umri wa miaka 14 na 15 (shirikisho)", bullets: ["Saa 3 siku ya shule, saa 18 katika wiki ya shule", "Saa 8 siku isiyo ya shule, 40 katika wiki isiyo na shule", "7 a.m. hadi 7 p.m.; 9 p.m. kuanzia June 1 hadi Labor Day"] },
            { title: "Umri wa miaka 16 na 17 (shirikisho)", bullets: ["Hakuna kikomo cha saa cha shirikisho", "Hakuna kazi za hatari: kuendesha gari, forklift, mashine nyingi za umeme", "Jimbo lako linaweza kuongeza vikomo"] },
            { title: "Jinsi ya kukagua", bullets: ["Andika umri wako, kazi na saa", "Soma YouthRules na ukurasa wa jimbo lako", "Zungushia duara kitu chochote kisichoruhusiwa"] }
          ],
          sources: [SRC.youthRules, SRC.fs43, SRC.stateChildLabor],
          tryIt: "Kijana wa miaka 15 anapewa kazi ya duka la vyakula Jumanne na Alhamisi kuanzia 4 hadi 8 p.m. mwezi October, na Jumamosi kuanzia 9 a.m. hadi 3 p.m. Kwenye karatasi, kagua kila zamu ukilinganisha na sheria za shirikisho. Kisha fungua ukurasa wa jimbo lako kuhusu ajira ya watoto na uandike sheria moja linaloongeza.",
          youCanNow: "kukagua kama kazi na saa ni halali kwa umri wako, ukitumia sheria za shirikisho na ukurasa wa jimbo lako.",
          quickCheck: [
            { objective: "O1", q: "Una miaka 15. Ni mwezi October. Bosi wako anakupangia kazi hadi 8 p.m. usiku wa siku ya shule. Kipi ni kweli kwa sheria za shirikisho?", options: ["Ni sawa kwa sababu ni chini ya saa 3", "Ni kuchelewa mno: wenye miaka 14 na 15 wanaacha saa 7 p.m. nje ya kiangazi", "Ni sawa kama wazazi wako wanakubali", "Jimbo tu ndilo linaloweza kuamua"], answer: 1, why: "Nje ya kipindi cha June 1 hadi Labor Day, wenye miaka 14 na 15 wanaweza kufanya kazi kati ya 7 a.m. na 7 p.m. tu." },
            { objective: "O1", q: "Sheria ya jimbo lako ni kali zaidi kuliko ya shirikisho. Unafuata ipi?", options: ["Ya shirikisho, kila wakati", "Yoyote ambayo bosi wako anachagua", "Hakuna; zinafutana", "Sheria kali zaidi ya jimbo"], answer: 3, why: "Sheria za shirikisho na za jimbo kuhusu ajira ya watoto zikitofautiana, sheria kali zaidi ndiyo inayotumika." }
          ]
        },
        {
          title: "Vibali vya kazi na nyaraka za siku ya kwanza",
          objectives: ["O2"],
          minutes: 5,
          goal: "Orodhesha nyaraka unazohitaji kuanza kazi yako na mahali pa kupata kila moja.",
          text: [
            "Sheria ya shirikisho haihitaji kibali cha kazi, lakini majimbo mengi yanakihitaji kwa wafanyakazi walio chini ya miaka 18. Kibali cha kazi wakati mwingine kinaitwa working papers au employment certificate. Kulingana na jimbo, unaweza kukipata shuleni kwako, ofisi ya kazi ya jimbo au mtandaoni, na huenda kikahitaji sahihi ya mzazi. Kagua ukurasa wa jimbo lako ujue kama unakihitaji na jinsi ya kukipata.",
            "Siku yako ya kwanza au kabla yake, kila mwajiri wa Marekani anakuomba ujaze Form I-9. Inaonyesha kwamba unaruhusiwa kufanya kazi nchini Marekani. Unaonyesha nyaraka halisi za utambulisho kutoka orodha iliyo kwenye fomu, kwa mfano pasipoti ya Marekani, au kitambulisho cha shule au cha jimbo pamoja na kadi ya Social Security au cheti cha kuzaliwa.",
            "Pia unajaza Form W-4. Inamwambia mwajiri wako kiasi cha kodi ya mapato ya shirikisho cha kukata kutoka kila mshahara. Jimbo lako linaweza pia kuwa na fomu yake ya kodi. Muulize bosi wako au mzazi swali likikuchanganya.",
            "Kuwa salama: toa namba yako ya Social Security kwenye nyaraka halisi za kuajiriwa tu, baada ya kuajiriwa. Mwajiri halisi hakuombi kamwe ulipe pesa ili upate kazi au ununue kadi za zawadi (gift cards). Huo ni ulaghai."
          ],
          steps: ["Kagua ukurasa wa jimbo lako kuhusu ajira ya watoto: unahitaji kibali cha kazi? Nani anakitoa?", "Tafuta nyaraka zako halisi za utambulisho kwa Form I-9 (angalia orodha iliyo kwenye fomu).", "Soma Form W-4 kabla ya siku yako ya kwanza ili ujue inauliza nini.", "Weka nakala za nyaraka zako kwenye faili moja. Hifadhi nyaraka halisi salama nyumbani."],
          words: [["Kibali cha kazi", "karatasi ambayo baadhi ya majimbo yanaihitaji kabla mtu aliye chini ya miaka 18 hajaanza kazi; pia inaitwa working papers au employment certificate."], ["Form I-9", "fomu ya shirikisho inayoonyesha kwamba unaruhusiwa kufanya kazi nchini Marekani; unaonyesha nyaraka za utambulisho kwa ajili yake."], ["Form W-4", "fomu ya shirikisho inayomwambia mwajiri wako kiasi cha kodi ya mapato cha kukata kutoka mshahara wako."], ["Nyaraka halisi", "karatasi au kadi yenyewe, si picha wala nakala."]],
          slides: [
            { title: "Kibali cha kazi", bullets: ["Haihitajiki kwa sheria ya shirikisho", "Majimbo mengi yanakihitaji chini ya miaka 18", "Ukurasa wa jimbo lako unasema nani anakitoa"] },
            { title: "Form I-9", bullets: ["Inaonyesha unaweza kufanya kazi nchini Marekani", "Leta nyaraka halisi za utambulisho kutoka orodha ya fomu"] },
            { title: "Form W-4", bullets: ["Inamwambia mwajiri wako kiasi cha kodi cha kukata", "Jimbo lako linaweza kuwa na fomu yake"] },
            { title: "Kuwa salama", bullets: ["Toa namba ya Social Security kwenye nyaraka halisi za kuajiriwa tu", "Usilipe pesa kamwe ili upate kazi"] }
          ],
          sources: [SRC.fs43, SRC.stateChildLabor, SRC.i9, SRC.w4, SRC.ftcJobScams],
          tryIt: "Tengeneza orodha ya \"Nyaraka za Siku ya Kwanza\" kwenye karatasi. Kwa jimbo lako, andika: ninahitaji kibali cha kazi, na nitakipata wapi? Nitaleta nyaraka zipi mbili za utambulisho kwa Form I-9? Nani anaweza kunisaidia na Form W-4?",
          youCanNow: "kuorodhesha nyaraka unazohitaji kuanza kazi, mahali pa kupata kila moja, na jinsi ya kulinda namba zako za siri.",
          quickCheck: [
            { objective: "O2", q: "Fomu ipi inamwonyesha mwajiri wako kwamba unaruhusiwa kufanya kazi nchini Marekani?", options: ["Form I-9", "Form W-4", "Ripoti ya shule", "Hati ya mshahara"], answer: 0, why: "Form I-9 inakagua kwamba unaruhusiwa kufanya kazi nchini Marekani; unaonyesha nyaraka halisi za utambulisho kwa ajili yake." },
            { objective: "O2", q: "Mtu anakupa kazi ukilipa kwanza $50 kwa ajili ya \"vifaa vya mafunzo\". Huenda hii ni nini?", options: ["Gharama ya kawaida ya siku ya kwanza", "Ada ya Form W-4", "Ulaghai: waajiri halisi hawakutozi pesa ili upate kazi", "Ada ya kibali cha kazi kutoka jimbo lako"], answer: 2, why: "Kukuomba ulipe ili upate kazi ni dalili ya kawaida ya ulaghai wa kazi." }
          ]
        },
        {
          title: "Bosi anatarajia nini katika wiki zako za kwanza",
          objectives: ["O4"],
          minutes: 5,
          goal: "Chagua kitendo cha kitaaluma ambacho bosi anatarajia katika hali za kawaida za kazi ya kwanza.",
          text: [
            "Mabosi wengi wa kazi ya kwanza hawajali sana uzoefu; wanajali tabia: kufika kwa wakati, kuwa tayari kufanya kazi, kufuata maelekezo, kuwa na adabu kwa wateja na wafanyakazi wenzako, na kuwaambia mapema kitu kikitokea.",
            "Kufika kwa wakati maana yake ni kuwa tayari kufanya kazi zamu yako inapoanza, si kuingia mlangoni wakati huo. Ukiwa mgonjwa au utachelewa, mwambie bosi wako mapema kadiri unavyoweza, kwa njia ambayo mahali pako pa kazi panaomba (mara nyingi kupiga simu, si ujumbe tu). Usiache tu kwenda kwenye zamu.",
            "Weka simu yako mbali ukiwa kazini isipokuwa kazi yako inaruhusu. Usipojua jinsi ya kufanya kitu, uliza. Rudia maelekezo ili uhakikishe umeelewa. Pokea maoni (feedback) kwa utulivu na useme asante; inamaanisha bosi wako anataka ufanikiwe.",
            "Soma ratiba yako kila wiki, na uombe likizo (siku ya kupumzika) mapema. Kuwa mtu wa kutegemewa ndiko kunakokuletea saa zaidi, mdhamini mzuri (reference) na kazi yako inayofuata."
          ],
          steps: ["Fika dakika chache mapema, ukiwa tayari kufanya kazi.", "Ukichelewa au ukiwa mgonjwa, mwambie bosi wako mapema kadiri unavyoweza, kwa njia aliyoomba.", "Weka simu yako mbali isipokuwa kazi inaruhusu.", "Uliza usipokuwa na uhakika; rudia maelekezo.", "Pokea maoni kwa utulivu na uyatumie."],
          words: [["Zamu", "kipindi cha muda ulichopangiwa kufanya kazi."], ["Kutoa taarifa ya kutofika (call out)", "kumwambia bosi wako mapema kwamba hutaweza kufika kwenye zamu."], ["Mdhamini (reference)", "mtu, mara nyingi bosi wa zamani, anayemwambia mwajiri mpya wewe ni mfanyakazi wa aina gani."], ["Maoni (feedback)", "maneno kuhusu jinsi unavyofanya na jinsi ya kufanya vizuri zaidi."]],
          slides: [
            { title: "Tabia ambazo mabosi wanatafuta", bullets: ["Kufika kwa wakati na kuwa tayari kufanya kazi", "Kufuata maelekezo", "Adabu kwa wateja na wafanyakazi wenzako"] },
            { title: "Umechelewa au mgonjwa?", bullets: ["Mwambie bosi wako mapema kadiri unavyoweza", "Tumia njia ambayo mahali pako pa kazi panaomba", "Usiache tu kwenda kwenye zamu"] },
            { title: "Ukiwa kazini", bullets: ["Simu mbali isipokuwa inaruhusiwa", "Uliza usipokuwa na uhakika; rudia maelekezo", "Pokea maoni kwa utulivu"] },
            { title: "Kwa nini ni muhimu", bullets: ["Saa zaidi", "Mdhamini mzuri", "Kazi yako inayofuata"] }
          ],
          tryIt: "Andika utakachosema katika hali mbili: (1) unaamka ukiwa mgonjwa saa mbili kabla ya zamu yako; (2) meneja wako anakuambia ulipanga bidhaa kwenye rafu vibaya. Sema yote mawili kwa sauti kana kwamba unaongea na bosi wako.",
          youCanNow: "kuchagua na kueleza kile bosi anachotarajia unapochelewa au ukiwa mgonjwa, usipojua cha kufanya, au unapopewa maoni.",
          quickCheck: [
            { objective: "O4", q: "Zamu yako inaanza 4 p.m. \"Kufika kwa wakati\" maana yake nini?", options: ["Kuingia mlangoni saa 4:00", "Kufika kabla ya 4:15", "Kuwa tayari kufanya kazi saa 4:00, kwa hiyo kufika dakika chache mapema", "Wakati wowote kabla ya mapumziko yako"], answer: 2, why: "Kufika kwa wakati maana yake ni kuwa tayari kuanza kazi zamu inapoanza." },
            { objective: "O4", q: "Huna uhakika jinsi ya kutumia mashine ya kulipia (cash register). Hatua bora ni ipi?", options: ["Kukisia na kutumaini itafanya kazi", "Kusubiri hadi mteja alalamike", "Kutafuta kwenye simu yako wakati wa zamu", "Kumwomba msimamizi wako akuonyeshe, kisha kurudia"], answer: 3, why: "Kuuliza na kurudia maelekezo kunaonyesha unajali na kunazuia makosa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiandaa kufanya kazi",
        questions: [
          { objective: "O1", q: "Una miaka 14. Ni wiki ya shule. Unaweza kufanya kazi saa ngapi kwa jumla wiki hiyo kwa sheria za shirikisho?", options: ["18", "40", "Hakuna kikomo", "8"], answer: 0, why: "Sheria za shirikisho zinawaruhusu wenye miaka 14 na 15 hadi saa 18 katika wiki ambayo shule iko wazi." },
          { objective: "O1", q: "Una miaka 16. Bosi wako anakuomba uendeshe gari la duka kupeleka oda. Kipi ni kweli kwa sheria za shirikisho?", options: ["Mtu yeyote mwenye leseni anaweza kufanya hivyo", "Kuendesha gari barabarani kama sehemu ya kazi ni kazi ya hatari iliyopigwa marufuku chini ya miaka 17, na kighairi kidogo tu ukiwa na miaka 17", "Ni sawa wikendi", "Ni sawa ukilipwa zaidi"], answer: 1, why: "Sheria za shirikisho za kazi za hatari zinapiga marufuku kuendesha gari kazini chini ya miaka 17, na zinaruhusu uendeshaji mdogo tu ukiwa na miaka 17." },
          { objective: "O2", q: "Je, sheria ya shirikisho inahitaji kibali cha kazi kwa kijana wa miaka 15?", options: ["Ndiyo, kila wakati", "Wakati wa kiangazi tu", "Hapana, lakini majimbo mengi yanakihitaji, kwa hiyo kagua ukurasa wa jimbo lako", "Kwa kazi za mgahawa tu"], answer: 2, why: "Sheria za shirikisho hazihitaji vibali vya kazi, lakini majimbo mengi yanavihitaji." },
          { objective: "O2", q: "Form W-4 inafanya nini?", options: ["Inaonyesha unaruhusiwa kufanya kazi nchini Marekani", "Inakupa kibali cha kazi", "Inaorodhesha saa zako", "Inamwambia mwajiri wako kiasi cha kodi ya mapato ya shirikisho cha kukata"], answer: 3, why: "Form W-4 inaweka kiasi cha kodi ya mapato ya shirikisho kinachokatwa kutoka mshahara wako." },
          { objective: "O4", q: "Utachelewa dakika 20 kwa sababu basi limeharibika. Unafanya nini?", options: ["Kumwambia bosi wako mara moja, kwa njia ambayo mahali pako pa kazi panaomba", "Kunyamaza na kuingia ukiwa umechelewa", "Kuacha kwenda kwenye zamu", "Kuandika kuhusu hilo mtandaoni"], answer: 0, why: "Kumwambia bosi wako mapema, kwa njia aliyoomba, kunaonyesha wewe ni mtu wa kutegemewa." }
        ]
      }
    },
    {
      name: "Sura 2: Mshahara wako, haki zako na usalama wako",
      lessons: [
        {
          title: "Kusoma hati yako ya kwanza ya mshahara",
          objectives: ["O3"],
          minutes: 6,
          goal: "Pata mshahara ghafi, kila makato na mshahara halisi kwenye hati ya mshahara.",
          text: [
            "Hati ya mshahara (paystub au pay statement) inakuja na kila malipo ya mshahara au kila malipo yanayowekwa moja kwa moja benki (direct deposit). Inaonyesha kipindi cha malipo, saa zako, kiwango chako cha malipo, mshahara wako ghafi, kila makato na mshahara wako halisi.",
            "Mshahara ghafi (gross pay) ni saa zidisha kiwango chako cha kila saa, kabla ya kitu chochote kukatwa. Makato ni kiasi kinachokatwa. Makato ya kawaida: kodi ya mapato ya shirikisho (kulingana na Form W-4 yako), Social Security (asilimia 6.2 ya mshahara wako) na Medicare (asilimia 1.45), ambayo mara nyingi huonyeshwa pamoja kama FICA, na katika majimbo mengi kodi ya mapato ya jimbo. Mshahara halisi (net pay), au mshahara wa kwenda nao nyumbani, ndio unaobaki.",
            "Zoezi tu, namba za kubuni: saa 20 kwa $12.00 kwa saa = $240.00 ghafi. Social Security: 240 x 0.062 = $14.88. Medicare: 240 x 0.0145 = $3.48. Kodi ya mapato ya shirikisho: $6.00. Kodi ya jimbo: $3.00. Makato yote ni $27.36, kwa hiyo mshahara halisi = $240.00 - $27.36 = $212.64.",
            "Kima cha chini cha mshahara cha shirikisho ni $7.25 kwa saa. Majimbo na miji mingi yanaweka kima cha juu zaidi, na kile cha juu zaidi ndicho kinachokuhusu. Kagua ukurasa wa jimbo lako ili ujue kiwango chako ni halali."
          ],
          steps: ["Tafuta tarehe za kipindi cha malipo na saa zako.", "Kagua mshahara ghafi: saa x kiwango.", "Orodhesha kila makato na uyajumlishe.", "Kagua mshahara halisi: mshahara ghafi toa jumla ya makato.", "Kitu kisipolingana, uliza ofisi ya mishahara (payroll) au bosi wako kwa adabu."],
          words: [["Mshahara ghafi (gross pay)", "mshahara wako kabla ya kitu chochote kukatwa: saa x kiwango."], ["Makato", "kiasi kinachokatwa kutoka mshahara wako, kama kodi."], ["Mshahara halisi (net pay)", "mshahara wa kwenda nao nyumbani: mshahara ghafi toa makato."], ["FICA", "kodi za Social Security na Medicare zinazokatwa kutoka mshahara wako."], ["Kipindi cha malipo", "tarehe za kazi ambazo malipo ya mshahara yanahusu."]],
          slides: [
            { title: "Kilichopo kwenye hati ya mshahara", bullets: ["Kipindi cha malipo, saa na kiwango cha malipo", "Mshahara ghafi na kila makato", "Mshahara halisi (wa kwenda nao nyumbani)"] },
            { title: "Makato ya kawaida", bullets: ["Kodi ya mapato ya shirikisho (kutoka W-4 yako)", "Social Security 6.2% na Medicare 1.45% (FICA)", "Kodi ya mapato ya jimbo katika majimbo mengi"] },
            { title: "Zoezi: namba za kubuni", bullets: ["Saa 20 x $12.00 = $240.00 ghafi", "Makato: $14.88 + $3.48 + $6.00 + $3.00 = $27.36", "Mshahara halisi: $240.00 - $27.36 = $212.64"] },
            { title: "Kima cha chini cha mshahara", bullets: ["Shirikisho: $7.25 kwa saa", "Majimbo na miji mingi inalipa zaidi; cha juu zaidi ndicho kinachotumika"] }
          ],
          sources: [SRC.irs751, SRC.minWage, SRC.stateMinWage, SRC.w4],
          tryIt: "Zoezi tu: ulifanya kazi saa 15 kwa $13.00 kwa saa. Kodi ya mapato ya shirikisho ni $5.00 na kodi ya jimbo ni $2.00. Kwenye karatasi, hesabu mshahara ghafi, Social Security, Medicare, jumla ya makato na mshahara halisi. (Jibu: $195.00 ghafi, $12.09, $2.83, $21.92 jumla, $173.08 halisi.)",
          youCanNow: "kusoma hati ya mshahara, kupata mshahara ghafi, kila makato na mshahara halisi, na kukagua hesabu.",
          quickCheck: [
            { objective: "O3", q: "Ulifanya kazi saa 10 kwa $14.00 kwa saa. Mshahara wako ghafi ni kiasi gani?", options: ["$14.00", "$124.00", "$104.00", "$140.00"], answer: 3, why: "Mshahara ghafi ni saa zidisha kiwango: 10 x $14.00 = $140.00." },
            { objective: "O3", q: "Mshahara ghafi ni $300.00 na jumla ya makato ni $35.00. Mshahara halisi ni kiasi gani?", options: ["$265.00", "$335.00", "$300.00", "$35.00"], answer: 0, why: "Mshahara halisi ni mshahara ghafi toa makato: $300.00 - $35.00 = $265.00." }
          ]
        },
        {
          title: "Kufuatilia saa zako ili mshahara wako uwe sahihi",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tunza kumbukumbu yako mwenyewe ya saa na uilinganishe na hati yako ya mshahara.",
          text: [
            "Makosa ya mshahara hutokea. Kinga bora ni kumbukumbu yako mwenyewe. Kila zamu, andika tarehe, muda ulioanza, mapumziko yako yalipoanza na kuisha, na muda uliomaliza. Wizara ya Kazi ina app ya bure ya kurekodi saa (timesheet), au unaweza kutumia daftari au maelezo (notes) ya simu yako.",
            "Jumlisha saa za kipindi cha malipo. Kumbuka kutoa mapumziko ya chakula yasiyolipwa. Kisha linganisha jumla yako na saa zilizo kwenye hati yako ya mshahara.",
            "Namba zisipolingana, usiogope na usimlaumu mtu. Peleka kumbukumbu yako kwa bosi wako au ofisi ya mishahara na uulize: \"Maelezo yangu yanaonyesha saa 22, na hati yangu ya mshahara inaonyesha 19. Unaweza kunisaidia kukagua?\" Makosa mengi yanarekebishwa hivi.",
            "Usipolipwa kwa saa ulizofanya kazi na kosa lisirekebishwe, Wage and Hour Division ya Wizara ya Kazi inapokea malalamiko. Ni bure na ni siri."
          ],
          steps: ["Kila zamu: andika tarehe, muda wa kuanza, muda wa mapumziko na muda wa kumaliza.", "Mwisho wa kipindi cha malipo, jumlisha saa zako (toa mapumziko yasiyolipwa).", "Linganisha jumla yako na saa zilizo kwenye hati yako ya mshahara.", "Zikitofautiana, peleka kumbukumbu yako na uombe kwa adabu zikaguliwe.", "Kosa lisiporekebishwa, wasiliana na Wage and Hour Division."],
          words: [["Kumbukumbu ya saa (timesheet)", "rekodi ya siku na saa ulizofanya kazi."], ["Mapumziko yasiyolipwa", "mapumziko ya chakula ambapo uko nje ya kazi kabisa na hulipwi."], ["Ofisi ya mishahara (payroll)", "mtu au timu inayowalipa wafanyakazi."], ["Wage and Hour Division", "sehemu ya Wizara ya Kazi ya Marekani inayosimamia sheria za mshahara na ajira ya watoto."]],
          slides: [
            { title: "Tunza kumbukumbu yako mwenyewe", bullets: ["Tarehe, muda wa kuanza, mapumziko na kumaliza", "Daftari, maelezo ya simu au app ya bure ya DOL ya timesheet"] },
            { title: "Linganisha kila kipindi cha malipo", bullets: ["Jumlisha saa zako, toa mapumziko yasiyolipwa", "Linganisha na hati ya mshahara"] },
            { title: "Zisipolingana", bullets: ["Peleka kumbukumbu yako na uulize kwa adabu", "\"Unaweza kunisaidia kukagua?\""] },
            { title: "Bado halijarekebishwa?", bullets: ["Wage and Hour Division: bure na siri", "1-866-487-9243 (1-866-4-US-WAGE)"] }
          ],
          sources: [SRC.youthRules, SRC.childLabor],
          tryIt: "Zoezi tu: Jumatatu 3:30 hadi 7:00 p.m., Jumatano 3:30 hadi 7:00 p.m., Jumamosi 9:00 a.m. hadi 3:00 p.m. na mapumziko ya chakula ya dakika 30 yasiyolipwa. Jumlisha saa. Hati yako ya mshahara inasema saa 11. Andika utakachomwambia bosi wako. (Jibu: 3.5 + 3.5 + 5.5 = saa 12.5.)",
          youCanNow: "kutunza kumbukumbu ya saa zako, kuilinganisha na hati yako ya mshahara, na kuomba kwa adabu kosa lirekebishwe.",
          quickCheck: [
            { objective: "O3", q: "Ulifanya kazi 9 a.m. hadi 2 p.m. na mapumziko ya chakula ya dakika 30 yasiyolipwa. Saa ngapi zinalipwa?", options: ["5", "5.5", "4.5", "4"], answer: 2, why: "9 a.m. hadi 2 p.m. ni saa 5; ukitoa mapumziko ya dakika 30 yasiyolipwa ni saa 4.5." },
            { objective: "O3", q: "Maelezo yako yanaonyesha saa 22, lakini hati yako ya mshahara inaonyesha 19. Unafanya nini kwanza?", options: ["Kuacha kazi mara moja", "Kupeleka kumbukumbu yako kwa bosi wako au ofisi ya mishahara na kuomba kwa adabu zikaguliwe", "Kunyamaza", "Kuweka hati ya mshahara mtandaoni"], answer: 1, why: "Makosa mengi ya mshahara yanarekebishwa kwa kuonyesha kumbukumbu yako na kuuliza kwa adabu." }
          ]
        },
        {
          title: "Haki zako na usalama wako: kusema",
          objectives: ["O5"],
          minutes: 6,
          goal: "Eleza hatua za kusema na kuripoti hali isiyo salama au isiyo ya haki.",
          text: [
            "Kila mfanyakazi, wakiwemo vijana, ana haki. Mwajiri wako lazima akupe mahali pa kazi salama na akulipe angalau kima cha chini cha mshahara cha kisheria kwa kila saa unayofanya kazi. Unapaswa kupata mafunzo kabla ya kufanya kazi fulani, na unaweza kuuliza maswali. Mwajiri wako hawezi kukuadhibu kwa kuuliza kuhusu haki zako au kwa kutoa malalamiko.",
            "Wafanyakazi vijana huumia mara nyingi zaidi wanapokuwa wapya, wanaharakishwa au hawajapata mafunzo. Dalili za hatari: kuambiwa utumie mashine ambayo hukufundishwa, kazi iliyopigwa marufuku kwa umri wako, kutokuwa na vifaa vya kujikinga, sakafu zinazoteleza, mafuta ya moto, au kuachwa peke yako usiku sana.",
            "Hatua za kusema: simama ukiwa hatarini. Mwambie msimamizi wako kwa utulivu tatizo ni nini. Asiporekebisha, mwambie meneja mwingine na mzazi, mwalimu au mfanyakazi wa programu ya ajira. Bado lisiporekebishwa, wasiliana na serikali: OSHA (1-800-321-6742) kwa usalama, au Wage and Hour Division (1-866-487-9243) kwa matatizo ya mshahara, saa au ajira ya watoto.",
            "Mtu akiumia vibaya, piga 911 (au namba ya dharura ya eneo lako) kwanza."
          ],
          steps: ["Ukiwa hatarini, simama na uondoke hapo.", "Mwambie msimamizi wako kwa utulivu kipi si sawa.", "Lisiporekebishwa, mwambie meneja mwingine na mtu mzima unayemwamini.", "Bado halijarekebishwa: piga OSHA kwa usalama au Wage and Hour Division kwa mshahara, saa au ajira ya watoto.", "Dharura: piga 911 kwanza."],
          words: [["OSHA", "Occupational Safety and Health Administration, ofisi ya serikali ya shirikisho inayosimamia usalama mahali pa kazi."], ["Kulipiza kisasi (retaliation)", "kumwadhibu mfanyakazi kwa kusema au kutoa malalamiko; hairuhusiwi."], ["Vifaa vya kujikinga", "vitu kama glavu, miwani ya kinga au viatu visivyoteleza vinavyokuweka salama."]],
          slides: [
            { title: "Haki zako", bullets: ["Mahali pa kazi salama", "Angalau kima cha chini cha mshahara cha kisheria kwa kila saa", "Mafunzo, maswali, na kutoadhibiwa kwa kusema"] },
            { title: "Dalili za hatari", bullets: ["Mashine ambayo hukufundishwa", "Kazi iliyopigwa marufuku kwa umri wako", "Hakuna vifaa vya kujikinga, mafuta ya moto, sakafu zinazoteleza"] },
            { title: "Sema hatua kwa hatua", bullets: ["Simama ukiwa hatarini", "Mwambie msimamizi wako, kisha meneja mwingine na mtu mzima unayemwamini", "Halijarekebishwa: OSHA au Wage and Hour Division"] },
            { title: "Namba za kujua", bullets: ["Dharura: 911 kwanza", "OSHA: 1-800-321-6742", "Wage and Hour: 1-866-487-9243"] }
          ],
          sources: [SRC.oshaYoung, SRC.youthRules, SRC.fs43],
          tryIt: "Una miaka 16. Meneja wako anakuambia utumie mashine ya kukata nyama kwenye duka la vyakula vilivyopikwa (deli), na hujapata mafunzo yoyote. Andika maneno utakayomwambia meneja wako, na utamwambia nani baadaye akilazimisha. Hifadhi namba za OSHA na Wage and Hour kwenye simu yako.",
          youCanNow: "kutambua hali isiyo salama au isiyo ya haki na kusema hatua kwa hatua: msimamizi wako, mtu mzima unayemwamini, kisha ofisi rasmi ya serikali.",
          quickCheck: [
            { objective: "O5", q: "Bosi wako anakuambia usafishe kikaango (fryer) chenye mafuta ya moto na hakupi glavu wala mafunzo. Unafanya nini kwanza?", options: ["Kumwambia msimamizi wako kwa utulivu kwamba unahitaji mafunzo na vifaa kabla ya kufanya hivyo", "Kufanya haraka ili usipate matatizo", "Kupiga 911", "Kuacha kazi bila kusema sababu"], answer: 0, why: "Kumweleza msimamizi wako kwanza ndiyo hatua ya kawaida ya kwanza wakati hakuna mtu aliyeumia bado." },
            { objective: "O5", q: "Uliwaambia mameneja wawili kuhusu tatizo la mshahara na hakuna kilichobadilika. Unaweza kuwasiliana na nani?", options: ["Hakuna; lazima ukubali", "Mtu usiyemjua mtandaoni", "Wage and Hour Division ya Wizara ya Kazi ya Marekani", "Kocha wa michezo wa shule yako tu"], answer: 2, why: "Wage and Hour Division inapokea malalamiko ya bure na ya siri kuhusu mshahara, saa na ajira ya watoto." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mshahara wako, haki zako na usalama wako",
        questions: [
          { objective: "O3", q: "Kwenye hati ya mshahara, mshahara halisi ni nini?", options: ["Mshahara kabla ya kodi", "Kiwango chako cha kila saa", "Mshahara wa kwenda nao nyumbani baada ya makato", "Jumla ya kodi iliyokatwa"], answer: 2, why: "Mshahara halisi ndio unaobaki baada ya makato yote kutolewa kutoka mshahara ghafi." },
          { objective: "O3", q: "Zoezi tu: mshahara ghafi ni $200.00. Makato ya Social Security kwa asilimia 6.2 ni kiasi gani?", options: ["$6.20", "$2.90", "$15.30", "$12.40"], answer: 3, why: "$200.00 x 0.062 = $12.40." },
          { objective: "O3", q: "Kwa nini utunze kumbukumbu yako mwenyewe ya saa?", options: ["Ili uilinganishe na hati yako ya mshahara na ugundue makosa", "Kwa sababu sheria inasema ni wewe tu unayeweza kufuatilia saa", "Ili uweze kuruka mapumziko", "Ili usihitaji hati ya mshahara"], answer: 0, why: "Kumbukumbu yako mwenyewe inakuwezesha kukagua kwamba ulilipwa kwa kila saa uliyofanya kazi." },
          { objective: "O5", q: "Mfanyakazi mwenzako ameungua vibaya. Unafanya nini kwanza?", options: ["Kumaliza kazi yako", "Kupiga 911 (au namba ya dharura ya eneo lako)", "Kupiga OSHA", "Kuwatumia marafiki zako ujumbe"], answer: 1, why: "Katika dharura, piga 911 kwanza; ripoti kwa ofisi za serikali zinakuja baadaye." },
          { objective: "O5", q: "Je, mwajiri wako anaweza kukuadhibu kwa kutoa malalamiko kuhusu usalama au mshahara?", options: ["Ndiyo, ukiwa chini ya miaka 18", "Ndiyo, kama malalamiko si sahihi", "Hapana, kulipiza kisasi kwa kusema hakuruhusiwi", "Katika mwezi wako wa kwanza tu"], answer: 2, why: "Sheria inawalinda wafanyakazi dhidi ya kulipiziwa kisasi kwa kuuliza kuhusu haki zao au kutoa malalamiko." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kazi Yako ya Kwanza: Vibali vya Kazi, Mishahara na Matarajio ya Bosi",
    questions: [
      { objective: "O1", q: "Una miaka 15 na shule imefungwa kwa kiangazi mwezi July. Unaweza kufanya kazi hadi saa ngapi jioni kwa sheria za shirikisho?", options: ["7 p.m.", "9 p.m.", "11 p.m.", "Wakati wowote"], answer: 1, why: "Kuanzia June 1 hadi Labor Day, kikomo cha jioni kwa wenye miaka 14 na 15 kinasogea hadi 9 p.m." },
      { objective: "O2", q: "Ni nyaraka zipi kila mfanyakazi mpya anajaza, kwa umri wowote?", options: ["Form I-9 na Form W-4", "Kibali cha kazi na ripoti ya shule", "Hati ya mshahara na kumbukumbu ya saa", "Jaribio la leseni ya udereva"], answer: 0, why: "Kila mfanyakazi mpya anajaza Form I-9 na Form W-4; vibali vya kazi vinategemea umri na jimbo." },
      { objective: "O3", q: "Zoezi tu: saa 18 kwa $12.50 kwa saa. Mshahara ghafi ni kiasi gani?", options: ["$215.00", "$250.00", "$225.00", "$180.00"], answer: 2, why: "18 x $12.50 = $225.00." },
      { objective: "O4", q: "Unaamka ukiwa mgonjwa saa mbili kabla ya zamu yako. Hatua ya kitaaluma ni ipi?", options: ["Kwenda kazini ukiwa mgonjwa bila kusema kitu", "Kuacha kwenda kwenye zamu na kueleza wiki ijayo", "Kumwomba rafiki aende badala yako bila kumwambia mtu", "Kumwambia bosi wako mara moja, kwa njia ambayo mahali pako pa kazi panaomba"], answer: 3, why: "Kumwambia bosi wako mapema, kwa njia aliyoomba, kunamruhusu kupata mtu wa kushika zamu na kunaonyesha wewe ni mtu wa kutegemewa." },
      { objective: "O5", q: "Ni ofisi ipi ya serikali inayoshughulikia malalamiko ya usalama mahali pa kazi?", options: ["IRS", "OSHA", "Posta", "Wilaya ya shule yako"], answer: 1, why: "OSHA ni ofisi ya serikali ya shirikisho ya usalama na afya mahali pa kazi." },
      { objective: "O1", q: "Una miaka 14. Siku ya shule, unaweza kufanya kazi saa ngapi kwa sheria za shirikisho?", options: ["3", "5", "8", "Hakuna kikomo"], answer: 0, why: "Wenye miaka 14 na 15 wanaweza kufanya kazi hadi saa 3 siku ya shule, pamoja na Ijumaa." },
      { objective: "O1", q: "Una miaka 17. Kazi ipi imepigwa marufuku kwako kwa sheria za shirikisho za kazi za hatari?", options: ["Kufunga bidhaa za wateja kwenye mifuko", "Kujibu simu", "Kupanga bidhaa kwenye rafu kwa mkono", "Kuendesha forklift"], answer: 3, why: "Kuendesha mashine za umeme za kuinua mizigo kama forklift ni kazi ya hatari iliyopigwa marufuku chini ya miaka 18." },
      { objective: "O2", q: "Unajuaje kama jimbo lako linahitaji kibali cha kazi?", options: ["Ukurasa rasmi wa jimbo lako kuhusu ajira ya watoto (Wizara ya Kazi inaziorodhesha)", "Chapisho kwenye mitandao ya kijamii", "Tovuti yoyote ya kazi", "Nyuma ya hati ya mshahara"], answer: 0, why: "Vibali vya kazi ni sheria ya jimbo, kwa hiyo ukurasa rasmi wa jimbo ndio mahali pa kukagua." },
      { objective: "O2", q: "Bosi mpya anakutumia ujumbe kabla ya usaili wowote akiomba taarifa zako za kuingia benki (bank login) \"ili kuweka mshahara\". Hii ni nini?", options: ["Kawaida kwa direct deposit", "Sehemu ya Form W-4", "Dalili ya hatari ya ulaghai; usitoe kamwe taarifa za kuingia", "Sehemu ya Form I-9"], answer: 2, why: "Waajiri halisi hawahitaji kamwe taarifa zako za kuingia benki; kuziomba ni dalili ya ulaghai." },
      { objective: "O3", q: "Makato yapi yanategemea ulichoandika kwenye Form W-4?", options: ["Medicare", "Social Security", "Kiwango chako cha kila saa", "Kodi ya mapato ya shirikisho"], answer: 3, why: "Form W-4 inamwambia mwajiri wako kiasi cha kodi ya mapato ya shirikisho cha kukata." },
      { objective: "O3", q: "Zoezi tu: mshahara ghafi $240.00, makato $27.36. Mshahara halisi ni kiasi gani?", options: ["$212.64", "$267.36", "$222.64", "$213.64"], answer: 0, why: "$240.00 - $27.36 = $212.64." },
      { objective: "O3", q: "Kima cha chini cha mshahara cha shirikisho ni $7.25, lakini cha mji wako ni cha juu zaidi. Kipi kinakuhusu?", options: ["Cha shirikisho $7.25", "Chochote ambacho bosi wako anachagua", "Cha juu zaidi", "Cha chini zaidi"], answer: 2, why: "Kima cha chini cha jimbo au mji kikiwa juu kuliko cha shirikisho, cha juu zaidi ndicho kinachotumika." },
      { objective: "O4", q: "Meneja wako anasema ulipanga bidhaa kwenye rafu vibaya. Jibu bora ni lipi?", options: ["Kubishana kwamba ni sawa", "Kusema \"Asante kwa kuniambia. Unaweza kunionyesha njia sahihi?\"", "Kupuuza", "Kulalamika kwa wateja"], answer: 1, why: "Kupokea maoni kwa utulivu na kuuliza jinsi ya kurekebisha ndicho mabosi wanachotarajia." },
      { objective: "O4", q: "Ni lini ni sawa kutumia simu yako wakati wa zamu?", options: ["Wakati wowote kazi ikiwa chache", "Pale tu kazi inaporuhusu", "Wakati wowote wateja hawaangalii", "Wakati wowote ukiendelea kufanya kazi"], answer: 1, why: "Weka simu yako mbali ukiwa kazini isipokuwa mahali pako pa kazi panaruhusu." },
      { objective: "O4", q: "Unahitaji kupumzika Jumamosi moja kwa sherehe ya familia mwezi ujao. Unafanya nini?", options: ["Kumwomba bosi wako mapema, kwa njia ambayo mahali pako pa kazi panaomba", "Kutokwenda tu", "Kumwambia mfanyakazi mwenzako tu", "Kuomba usiku uliotangulia"], answer: 0, why: "Kuomba likizo mapema kunampa bosi wako muda wa kupanga." },
      { objective: "O5", q: "Una miaka 16 na unaambiwa utumie mashine ya kukata nyama. Unapaswa kujua nini?", options: ["Ni sawa baada ya jaribio moja", "Ni sawa kama hakuna wateja wanaoona", "Ni uamuzi wako", "Mashine za umeme za kukata nyama ni kazi ya hatari iliyopigwa marufuku chini ya miaka 18, kwa hiyo sema"], answer: 3, why: "Sheria za shirikisho za kazi za hatari zinawakataza wafanyakazi walio chini ya miaka 18 kuendesha mashine za umeme za kukata nyama." },
      { objective: "O5", q: "Hatua ya kawaida ya kwanza ni ipi kitu kazini kikiwa si salama lakini hakuna aliyeumia?", options: ["Kupigia vyombo vya habari", "Kukiweka mtandaoni", "Kumwambia msimamizi wako kwa utulivu", "Kuacha kazi bila kusema kitu"], answer: 2, why: "Kumwambia msimamizi wako kunampa nafasi ya kurekebisha; kisha nenda juu zaidi lisiporekebishwa." },
      { objective: "O1", q: "Una miaka 16. Unaweza kufanya kazi saa ngapi kwa wiki kwa sheria ya shirikisho?", options: ["18", "40", "Hakuna kikomo cha shirikisho, lakini kagua jimbo lako", "8"], answer: 2, why: "Sheria ya shirikisho haiweki kikomo cha saa kwa wenye miaka 16 na 17, lakini jimbo lako linaweza." },
      { objective: "O4", q: "Bosi kwa kawaida anajali nini zaidi kwa mfanyakazi wa kazi ya kwanza?", options: ["Nguo za bei ghali", "Miaka mingi ya uzoefu", "Kumjua mwenye biashara", "Kufika kwa wakati na kuwa mtu wa kutegemewa"], answer: 3, why: "Mabosi wa kazi ya kwanza wanatafuta zaidi tabia za kutegemewa kama kufika kwa wakati na kufuata maelekezo." },
      { objective: "O5", q: "Mshahara wako si sahihi na mameneja wawili hawakuurekebisha. Unaweza kupiga namba ipi?", options: ["Wage and Hour Division, 1-866-487-9243", "OSHA tu", "911", "IRS"], answer: 0, why: "Wage and Hour Division inashughulikia malalamiko ya mshahara, saa na ajira ya watoto." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 2, 3, 4, 6, 9, 15] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Saa na kazi zimekaguliwa", objective: "O1", notYet: "Hakuna sheria za umri zilizoandikwa, au zamu au kazi inayovunja sheria haikugunduliwa.", meets: "Kila zamu na kazi imekaguliwa kwa sheria za shirikisho na za jimbo, na ukurasa rasmi umetajwa.", exceeds: "Pia anataja sheria ya jimbo iliyo kali zaidi kuliko ya shirikisho na jinsi inavyobadilisha ratiba." },
      { name: "Nyaraka ziko tayari", objective: "O2", notYet: "Orodha inakosa Form I-9, Form W-4 au swali la kibali cha kazi cha jimbo.", meets: "Inaorodhesha kibali cha kazi (kama kinahitajika), utambulisho kwa Form I-9 na Form W-4, na mahali pa kupata kila moja.", exceeds: "Pia inaorodhesha jinsi ya kulinda namba za siri na dalili moja ya ulaghai wa kazi." },
      { name: "Hati ya mshahara imekaguliwa", objective: "O3", notYet: "Mshahara ghafi, makato au mshahara halisi haupo au hesabu si sahihi.", meets: "Mshahara ghafi, kila makato na mshahara halisi vimeandikwa na hesabu ni sahihi hadi senti.", exceeds: "Pia analinganisha saa za hati ya mshahara na kumbukumbu ya saa iliyoandikwa na anasema cha kufanya zikitofautiana." },
      { name: "Matarajio ya bosi", objective: "O4", notYet: "Tabia hazieleweki, kama \"kuwa mzuri\".", meets: "Tabia tatu zilizo wazi, kama kufika mapema, kutoa taarifa mapema ya kutofika na kuuliza usipokuwa na uhakika.", exceeds: "Kila tabia ina maneno mafupi ambayo mwanafunzi angeyasema." },
      { name: "Mpango wa usalama", objective: "O5", notYet: "Hakuna mpango, au mpango unaruka kumwambia msimamizi au kutaja ofisi ya serikali.", meets: "Anataja atamwambia nani kwanza, mtu mzima anayemwamini, na OSHA au Wage and Hour Division pamoja na namba ya simu.", exceeds: "Pia anasema kupiga 911 kwanza katika dharura na anaorodhesha dalili za hatari kwa kazi yake mwenyewe." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoanza kazi, mafunzo kazini (internship) au nafasi ya ajira ya vijana ya kiangazi ndani ya siku 90 (utafiti wa kufuatilia au rekodi za programu)",
      "Wanafunzi ambao bado wako kwenye kazi hiyo baada ya siku 60, na sehemu ya wale wanaopata mdhamini mzuri",
      "Wanafunzi wanaoripoti kukagua hati ya mshahara kwa saa zao wenyewe angalau mara moja (ufuatiliaji wa siku 30)",
      "Programu za vijana na waajiri wanaripoti matatizo machache ya ratiba au kazi yanayovunja sheria za ajira ya watoto"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti ya kufungua kurasa za Wizara ya Kazi na za jimbo, au nakala zilizochapishwa za ukurasa wa jimbo kuhusu ajira ya watoto",
      "Karatasi, kalamu na kikokotoo (kikokotoo cha simu kinafaa)",
      "Nakala tupu za Form W-4 na Form I-9 zilizochapishwa kutoka irs.gov na uscis.gov za kuangalia (msiandike namba halisi darasani)",
      "Hati ya mshahara ya mfano ya kubuni kwa mazoezi",
      "Kama dakika 60 hadi 75 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kabla ya kozi, tafuta kurasa za jimbo lako kuhusu ajira ya watoto na kima cha chini cha mshahara na uchapishe sheria kuu; zinatofautiana kati ya majimbo na zinabadilika.",
      "Katika programu ya ajira ya vijana ya kiangazi: fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi na kazi za \"Jaribu sasa\" zifanywe kwa jozi.",
      "Usikusanye kamwe namba halisi za Social Security, nakala za vitambulisho au hati halisi za mshahara; tumia mifano ya kubuni.",
      "Igizeni maneno ya kutoa taarifa ya kutofika na ya kupokea maoni katika Somo la 3 na hatua za kusema katika Somo la 6.",
      "Pima kazi ya mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Mwanafunzi akieleza kazi halisi isiyo salama au isiyo halali, msaidie kufuata hatua za Somo la 6 na umhusishe mzazi au mlezi."
    ]
  }
};
