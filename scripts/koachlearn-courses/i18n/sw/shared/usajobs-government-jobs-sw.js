"use strict";

// Koach Learn course (Swahili translation of shared/usajobs-government-jobs.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "usajobs-government-jobs-sw",
  lang: "sw",
  translationOf: "usajobs-government-jobs",
  category: "Workforce Development",
  name: "Kuomba Kazi za Serikali ya Marekani (USAJOBS)",
  skills: "Kupata njia yako ya kuajiriwa, Kutafuta kwenye USAJOBS, Kusoma tangazo la kazi, Kuandika wasifu wa kazi (resume) wa serikali, Kujibu dodoso kwa uaminifu, Kufuatilia ombi lako kwa usalama",
  outcome: "kuomba kazi halisi ya serikali kuu ya Marekani (federal) kwenye USAJOBS: kupata kazi zilizo wazi kwako, kusoma tangazo, kuandika resume ya serikali inayolingana nalo, kukusanya nyaraka sahihi, kujibu dodoso kwa uaminifu na kufuatilia ombi lako bila kudanganywa na walaghai.",
  about: [
    "Serikali kuu ya Marekani (federal) inaajiri watu katika kila jimbo na katika aina nyingi za kazi: ofisini na huduma kwa wateja, ufundi na matengenezo, maghala, afya, hifadhi za taifa, IT na zaidi. Karibu kazi hizi zote zinatangazwa kwenye USAJOBS (usajobs.gov), tovuti rasmi inayoendeshwa na Office of Personnel Management (OPM), ofisi ya serikali ya wafanyakazi. Ni bure kuitumia.",
    "Maombi ya kazi za serikali ni tofauti na kazi nyingi za makampuni binafsi. Tangazo ni refu, resume inahitaji maelezo zaidi, mara nyingi kuna dodoso, na njia maalum za kuajiriwa zinasaidia wanajeshi wastaafu (veterans), wenzi wa wanajeshi, watu wenye ulemavu, wanafunzi na waliohitimu karibuni. Kozi hii inakupitisha kila hatua ukitumia tangazo halisi utakalochagua.",
    "Kozi hii ni kwa wanaotafuta kazi, wanajeshi wastaafu, watu wanaorudi nyumbani kutoka gerezani, vijana na yeyote anayebadilisha kazi. Inakuandaa kuomba; haikupatii kazi wala haiamui kama unastahili. Kila ofisi ya serikali inaamua hilo kutokana na ombi lako. Kila somo linachukua kama dakika tano, linaishia na jaribio fupi na kazi ya \"Jaribu sasa\", na linajenga kifurushi chako cha mazoezi cha ombi."
  ],
  finalTask: "Tengeneza kifurushi cha mazoezi cha ombi kwa tangazo moja halisi la USAJOBS unaloweza kuomba: (1) muhtasari wa tangazo wa ukurasa mmoja (nani anaweza kuomba, daraja na mshahara, tarehe ya mwisho, majukumu, uzoefu maalum, nyaraka zinazohitajika); (2) angalau kazi mbili kwenye resume ya serikali zinazolingana na tangazo, zenye tarehe, saa kwa wiki, majukumu na matokeo; (3) orodha ya kila hati inayohitajika na mahali utakapoipata; (4) daftari la maombi lenye namba ya kazi, tarehe uliyoomba na tarehe ya kukagua tena.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana nchini Marekani wanaotafuta kazi ya kudumu yenye marupurupu mazuri: wanaotafuta kazi, wanajeshi wastaafu na wenzi wa wanajeshi, watu wanaorudi nyumbani kutoka gerezani, watu wenye ulemavu, wanafunzi na waliohitimu karibuni, na wanaobadilisha kazi. Wengi hawajawahi kuomba kazi ya serikali kuu, na baadhi wana historia fupi au isiyo ya mfululizo ya kazi.",
    startingPoint: "Wanaweza kutumia simu au kompyuta kwa barua pepe na tovuti, na wameomba angalau kazi moja ya kawaida, au wana resume rahisi. Wengi hawajawahi kusoma tangazo la kazi ya serikali kuu na hawajui kuhusu njia za kuajiriwa, madaraja au uzoefu maalum.",
    gap: "Maombi ya kazi za serikali mara nyingi yanakataliwa kwa sababu zinazoweza kurekebishwa: kuomba kazi isiyo wazi kwako, resume isiyo na tarehe, saa au uzoefu unaoombwa na tangazo, hati inayokosekana kama DD-214, au majibu ya dodoso yasiyoungwa mkono na resume. Wanafunzi wanahitaji njia ya makini, hatua kwa hatua, ya kuomba, na wanahitaji kujua kwamba kuomba ni bure ili waepuke ulaghai wa kazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8); maneno ya serikali yanaelezwa kila wakati",
      "Vifaa: simu au kompyuta ya maktaba au kituo cha ajira; kompyuta kamili ni rahisi zaidi kwa resume",
      "Muda: masomo ya dakika 4 hadi 6; kifurushi cha mwisho kinachukua saa moja hadi mbili za ziada",
      "Sheria zinabadilika: kikomo cha kurasa, njia za kuajiriwa na nyaraka zinazohitajika zinatoka katika kila tangazo na USAJOBS, si katika kozi hii",
      "Faragha: hakuna namba za Social Security wala namba nyingine za binafsi katika mazoezi au zana za AI",
      "Baadhi ya wanafunzi wana rekodi za uhalifu au ulemavu; kozi inafundisha majibu ya kweli na mahali pa kupata sheria rasmi, si ushauri wa kisheria"
    ],
    prerequisites: "Ujuzi wa msingi wa kompyuta au simu na anwani ya barua pepe. Kozi \"Resume, LinkedIn na Usaili\" inasaidia kuanza nayo lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa tangazo la kazi ya serikali kuu na historia yako mwenyewe", action: "kutambua njia za kuajiriwa unazoweza kustahili na kukagua kama kazi iko wazi kwako", standard: "kwa kusoma sehemu ya \"This job is open to\" kwa usahihi" },
    { id: "O2", condition: "Ukitumia simu au kompyuta ya maktaba", action: "kufungua wasifu (profile) wa USAJOBS na kuhifadhi utafutaji wa kazi uliochujwa kwa mahali, daraja la mshahara na njia ya kuajiriwa", standard: "ukitumia tovuti rasmi ya usajobs.gov tu na bila kumlipa mtu yeyote" },
    { id: "O3", condition: "Ukipewa tangazo halisi la kazi", action: "kuorodhesha majukumu, sifa, daraja, tarehe ya mwisho na nyaraka zinazohitajika", standard: "kwenye karatasi ya muhtasari ya ukurasa mmoja bila kukosa hata kimoja kati ya vitu vitano" },
    { id: "O4", condition: "Ukipewa uzoefu maalum unaoombwa na tangazo", action: "kuandika kazi zako kwenye resume ya serikali zenye tarehe, saa kwa wiki, majukumu na matokeo yanayolingana na tangazo", standard: "ukitumia maneno muhimu ya tangazo na taarifa za kweli tu" },
    { id: "O5", condition: "Kabla ya kutuma ombi", action: "kujibu dodoso kwa uaminifu na kukusanya kila hati inayohitajika na tangazo", standard: "ili kila jibu la juu liungwe mkono na resume yako na hakuna hati inayohitajika inayokosekana" },
    { id: "O6", condition: "Baada ya kuomba", action: "kufuatilia hali ya ombi lako na kutambua matoleo bandia ya kazi za serikali", standard: "ukiweka daftari lenye tarehe na bila kulipa ada wala kutoa namba za binafsi nje ya USAJOBS" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata kazi ya serikali iliyo wazi kwako",
      lessons: [
        {
          title: "Jinsi uajiri wa serikali unavyofanya kazi na njia zako za kuajiriwa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambua njia za kuajiriwa unazoweza kustahili na ukague kazi iko wazi kwa nani.",
          text: [
            "Kazi za serikali kuu zinatangazwa kwenye USAJOBS, tovuti rasmi inayoendeshwa na Office of Personnel Management (OPM). Kila tangazo linaitwa job announcement (tangazo la kazi). Kila ofisi ya serikali (kwa mfano Department of Veterans Affairs, Forest Service au IRS) inasoma maombi na kuamua nani anastahili.",
            "Kila tangazo linasema nani anaweza kuomba, katika sehemu inayoitwa \"This job is open to\" (kazi hii iko wazi kwa). USAJOBS inawagawa waombaji katika njia za kuajiriwa (hiring paths). Baadhi yake: Open to the public (raia na wenyeji wa Marekani), Veterans (wanajeshi wastaafu), Military spouses (wenzi wa wanajeshi), Individuals with disabilities (watu wenye ulemavu), Students (wanafunzi), Recent graduates (waliohitimu karibuni), Federal employees (wafanyakazi wa serikali kuu), na National Guard and reserves (jeshi la akiba).",
            "Kama kazi iko wazi kwa wafanyakazi wa serikali kuu tu na wewe si mmoja wao, ombi lako halitafikiriwa, hata likiwa zuri kiasi gani. Kwa hiyo kagua sehemu hii kwanza kila wakati. Baadhi ya njia maalum zina sheria zao: kwa mfano watu wenye ulemavu wanaweza kuomba chini ya Schedule A kwa barua inayothibitisha ulemavu, na wanajeshi wastaafu wanaweza kupata kipaumbele cha wastaafu (veterans' preference).",
            "Mshahara wa kazi nyingi za ofisini na za kitaaluma unatumia General Schedule (GS): madaraja 15, kutoka GS-1 hadi GS-15, kila moja likiwa na hatua 10, pamoja na nyongeza ya eneo (locality pay) inayotegemea mahali unapofanya kazi. Kazi nyingi za ufundi na kazi za mikono zinatumia kipimo kingine, Federal Wage System (mara nyingi kinaonyeshwa kama WG)."
          ],
          steps: ["Andika njia za kuajiriwa zinazoweza kukufaa: umma, mwanajeshi mstaafu, mwenzi wa mwanajeshi, ulemavu, mwanafunzi, aliyehitimu karibuni au nyingine.", "Fungua tangazo na utafute \"This job is open to\".", "Kagua kwamba angalau njia moja iliyoorodheshwa inakufaa.", "Kama hakuna inayokufaa, iache kazi hiyo na utafute nyingine."],
          words: [["USAJOBS", "tovuti rasmi na ya bure ambapo kazi za serikali kuu ya Marekani zinatangazwa."], ["OPM", "Office of Personnel Management, ofisi inayoendesha sheria za uajiri wa serikali kuu na USAJOBS."], ["Tangazo la kazi", "tangazo kamili la kazi: nani anaweza kuomba, majukumu, sifa, mshahara na jinsi ya kuomba."], ["Njia ya kuajiriwa", "kundi la watu ambao kazi iko wazi kwao, kama umma, wanajeshi wastaafu au wanafunzi."], ["Schedule A", "mamlaka ya kuajiri inayoruhusu ofisi za serikali kuajiri watu wenye ulemavu bila ushindani wa kawaida."], ["General Schedule (GS)", "kipimo kikuu cha mishahara ya serikali kuu, chenye madaraja GS-1 hadi GS-15 na hatua 10 katika kila daraja."], ["Locality pay", "nyongeza ya mshahara inayotegemea eneo ilipo kazi."]],
          slides: [
            { title: "Kazi za serikali ziko wapi", bullets: ["USAJOBS (usajobs.gov), inayoendeshwa na OPM", "Bure kutafuta na bure kuomba", "Kila ofisi ya serikali inaamua nani anastahili"] },
            { title: "Njia za kuajiriwa", bullets: ["Open to the public: raia na wenyeji wa Marekani", "Wanajeshi wastaafu, wenzi wa wanajeshi, National Guard na jeshi la akiba", "Watu wenye ulemavu (Schedule A), wanafunzi, waliohitimu karibuni"] },
            { title: "Kagua \"This job is open to\" kwanza", bullets: ["Kama hakuna njia inayokufaa, ombi lako halifikiriwi", "Iache kazi hiyo na utafute iliyo wazi kwako"] },
            { title: "Jinsi mshahara wa serikali unavyoonyeshwa", bullets: ["GS: madaraja 1 hadi 15, hatua 10 kila moja, pamoja na nyongeza ya eneo", "Kazi nyingi za ufundi zinatumia Federal Wage System (WG)"] }
          ],
          sources: [
            { name: "USAJOBS: Njia za kuajiriwa", url: "https://www.usajobs.gov/hiringpath/" },
            { name: "USAJOBS: Open to the public (wazi kwa umma)", url: "https://www.usajobs.gov/HiringPath/Public" },
            { name: "OPM: General Schedule", url: "https://www.opm.gov/policy-data-oversight/pay-leave/pay-systems/general-schedule/" }
          ],
          tryIt: "Kwenye karatasi, orodhesha kila njia ya kuajiriwa inayoweza kukufaa na kwa nini (kwa mfano: \"Open to the public: mimi ni raia wa Marekani\" au \"Veterans: nilihudumu katika Jeshi\"). Kisha fungua usajobs.gov/hiringpath na usome ukurasa wa kila njia iliyo kwenye orodha yako.",
          youCanNow: "kutaja njia za kuajiriwa zinazoweza kukufaa na kukagua kama kazi ya serikali iko wazi kwako kabla ya kutumia muda juu yake.",
          quickCheck: [
            { objective: "O1", q: "Tangazo linasema \"This job is open to: Federal employees - competitive service\". Hujawahi kufanya kazi serikalini. Unafanya nini?", options: ["Kuomba hata hivyo kwa resume nzuri", "Kupiga simu ofisini kuomba ruhusa maalum", "Kuiacha na kutafuta kazi iliyo wazi kwa umma", "Kuomba kwa kutumia hadhi ya rafiki aliye serikalini"], answer: 2, why: "Kama hakuna njia iliyoorodheshwa inayokufaa, ombi halitafikiriwa, kwa hiyo ni bora utumie muda wako kwenye kazi iliyo wazi kwako." },
            { objective: "O1", q: "Njia ipi ya kuajiriwa ni kwa raia na wenyeji wa Marekani kwa ujumla?", options: ["Special authorities (mamlaka maalum)", "Senior executives (viongozi wakuu)", "Federal employees (wafanyakazi wa serikali)", "Open to the public (wazi kwa umma)"], answer: 3, why: "\"Open to the public\" ni njia ya raia na wenyeji wa Marekani kwa ujumla." }
          ]
        },
        {
          title: "Kufungua USAJOBS na kutafuta kwa busara",
          objectives: ["O2"],
          minutes: 5,
          goal: "Fungua wasifu (profile) wa USAJOBS na uhifadhi utafutaji wa kazi uliochujwa.",
          text: [
            "Nenda usajobs.gov na uchague kufungua profile. USAJOBS inatumia Login.gov, huduma ya serikali ya kuingia, kwa hiyo unafungua akaunti ya Login.gov kwa barua pepe yako, nywila imara na hatua ya pili ya kuingia (kama msimbo unaotumwa kwenye simu yako). Andika anwani wewe mwenyewe; usifuate viungo kwenye ujumbe mfupi au matangazo.",
            "Kwenye profile yako unaongeza mawasiliano yako na kujibu maswali kukuhusu, kama wewe ni mwanajeshi mstaafu au mfanyakazi wa sasa wa serikali kuu. Majibu haya yanaisaidia USAJOBS kukuonyesha njia za kuajiriwa zinazokufaa. Profile pia ndipo resume na nyaraka zako zinapohifadhiwa.",
            "Kutafuta, andika neno la kazi au ujuzi (kwa mfano \"maintenance\", \"customer service\" au \"medical support\") na jiji au jimbo. Kisha tumia vichujio (filters): mahali, daraja la mshahara, njia ya kuajiriwa, ratiba ya kazi (muda wote au muda mfupi), na kazi ya mbali au kufanya kazi ukiwa nyumbani (telework) kama unazitaka. Matokeo yakionekana sawa, hifadhi utafutaji ili USAJOBS ikutumie kazi mpya kwa barua pepe.",
            "Kutumia USAJOBS ni bure. Hakuna ofisi halisi ya serikali inayokutoza pesa kufungua profile, kutafuta au kuomba."
          ],
          steps: ["Andika usajobs.gov kwenye kivinjari wewe mwenyewe.", "Fungua profile na uingie kupitia Login.gov.", "Jaza profile yako, pamoja na maswali kuhusu hadhi ya mwanajeshi mstaafu na huduma serikalini.", "Tafuta kwa neno la kazi na mahali.", "Ongeza vichujio: daraja la mshahara, njia ya kuajiriwa, ratiba.", "Hifadhi utafutaji na uwashe arifa za barua pepe."],
          words: [["Profile", "ukurasa wa akaunti yako ya USAJOBS, ambapo taarifa zako, resume na nyaraka zinahifadhiwa."], ["Login.gov", "huduma ya kuingia ya serikali ya Marekani, inayotumika kuingia USAJOBS na tovuti nyingine za serikali."], ["Kichujio (filter)", "mpangilio unaopunguza matokeo ya utafutaji, kama mahali au daraja la mshahara."], ["Utafutaji uliohifadhiwa", "utafutaji ambao USAJOBS inaukumbuka na kuutumia kukutumia kazi mpya zinazolingana kwa barua pepe."], ["Telework", "kufanya kazi ukiwa nyumbani kwa muda fulani au wakati wote."]],
          slides: [
            { title: "Anza kwenye tovuti halisi", bullets: ["Andika usajobs.gov wewe mwenyewe", "Ingia kwa Login.gov", "Ni bure: usilipe kamwe ili kuomba"] },
            { title: "Jaza profile yako", bullets: ["Mawasiliano yako", "Maswali ya mwanajeshi mstaafu na mfanyakazi wa serikali", "Resume na nyaraka zako zinakaa hapa"] },
            { title: "Tafuta, kisha chuja", bullets: ["Neno la kazi na mahali", "Daraja la mshahara, njia ya kuajiriwa, ratiba, telework", "Hifadhi utafutaji na uwashe arifa za barua pepe"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "Login.gov", url: "https://www.login.gov/" },
            { name: "FTC: Ulaghai wa kazi", url: "https://consumer.ftc.gov/articles/job-scams" }
          ],
          tryIt: "Fungua (au ingia kwenye) profile yako ya USAJOBS. Tafuta mara moja aina ya kazi unayoweza kufanya katika eneo lako, ongeza angalau vichujio viwili, na uuhifadhi. Andika kazi ngapi zilitokea na majina ya kazi tatu.",
          youCanNow: "kufungua profile ya USAJOBS kwa usalama na kuhifadhi utafutaji unaokutumia kazi zinazokufaa.",
          quickCheck: [
            { objective: "O2", q: "Ujumbe mfupi unasema: \"Omba kazi za serikali hapa, ada ya kujiandikisha $25\" pamoja na kiungo. Kipi ni kweli?", options: ["Ni ulaghai: USAJOBS ni bure kutumia", "Ni sawa kama kiungo kinaishia na .com", "Kazi za serikali zinahitaji akaunti ya kulipia", "Ulipe kwa kadi ya zawadi (gift card) ili uwe salama"], answer: 0, why: "Kutafuta na kuomba kazi za serikali kuu ni bure kila wakati, kwa hiyo yeyote anayetoza ada ni mlaghai." },
            { objective: "O2", q: "Unataka USAJOBS ikuambie kuhusu kazi mpya za ghala karibu nawe. Unafanya nini?", options: ["Kutafuta tena kila saa", "Kuhifadhi utafutaji na kuwasha arifa za barua pepe", "Kumwomba rafiki aangalie tovuti", "Kufungua profile mpya kila wiki"], answer: 1, why: "Utafutaji uliohifadhiwa wenye arifa unakutumia kwa barua pepe kazi mpya zinazolingana na vichujio vyako." }
          ]
        },
        {
          title: "Kusoma tangazo la kazi ya serikali",
          objectives: ["O3"],
          minutes: 6,
          goal: "Orodhesha majukumu, sifa, daraja, tarehe ya mwisho na nyaraka zinazohitajika kutoka kwenye tangazo.",
          text: [
            "Matangazo ya kazi za serikali ni marefu, lakini yanafuata mpangilio mmoja. Karibu na juu: jina la kazi, ofisi ya serikali, mahali, mshahara na daraja, tarehe ya kufunguliwa na tarehe ya mwisho, na kazi iko wazi kwa nani. Kisha zinakuja sehemu kama Duties (majukumu), Requirements (masharti ya ajira na sifa), How you will be evaluated (jinsi utakavyopimwa), Required documents (nyaraka zinazohitajika) na How to apply (jinsi ya kuomba).",
            "Sehemu muhimu zaidi ni Qualifications (sifa). Kazi nyingi zinaomba uzoefu maalum (specialized experience): uzoefu wa kufanya aina ya kazi hiyo, mara nyingi unaoelezwa kama mwaka mmoja katika kiwango kama daraja la chini linalofuata. Baadhi ya kazi zinakuruhusu kustahili kwa elimu badala yake, au mchanganyiko wa vyote viwili. Resume yako lazima ionyeshe uzoefu huu wazi, la sivyo unaweza kuonekana hustahili.",
            "Masharti ya ajira (conditions of employment) ni sheria unazopaswa kutimiza ili uajiriwe, kwa mfano uraia wa Marekani, kufaulu uchunguzi wa historia (background check) au kipimo cha dawa za kulevya, au kuwa na leseni ya udereva. Yasome kabla ya kuomba.",
            "Angalia tarehe ya mwisho. Baadhi ya matangazo pia yanafungwa mapema yakishapokea idadi fulani ya maombi, kwa hiyo omba mara tu unapokuwa tayari."
          ],
          steps: ["Nakili jina la kazi, ofisi ya serikali, namba ya tangazo, daraja na mshahara.", "Nakili tarehe ya kufunguliwa na tarehe ya mwisho.", "Soma \"This job is open to\".", "Nakili uzoefu maalum au elimu unayohitaji.", "Orodhesha majukumu makuu.", "Orodhesha kila kitu kilicho katika Required documents."],
          words: [["Uzoefu maalum (specialized experience)", "uzoefu wa kufanya aina ya kazi inayohitajika, katika kiwango kinachoombwa na tangazo."], ["Masharti ya ajira", "sheria unazopaswa kutimiza ili uajiriwe, kama uraia au uchunguzi wa historia."], ["Tarehe ya mwisho", "siku ya mwisho unayoweza kuomba. Baadhi ya kazi zinafungwa mapema."], ["Namba ya tangazo", "msimbo unaotambulisha tangazo moja la kazi; uitumie kufuatilia ombi lako."], ["Nyaraka zinazohitajika", "karatasi ambazo tangazo linasema lazima uzipakie, kama resume, nakala za matokeo ya shule (transcripts) au DD-214."]],
          slides: [
            { title: "Juu ya tangazo", bullets: ["Jina, ofisi, mahali, mshahara na daraja", "Tarehe ya kufunguliwa na tarehe ya mwisho", "This job is open to (iko wazi kwa)"] },
            { title: "Sifa zinaamua mengi", bullets: ["Uzoefu maalum, elimu, au vyote viwili", "Resume yako lazima iuonyeshe wazi"] },
            { title: "Soma kabla ya kuomba", bullets: ["Masharti ya ajira: uraia, uchunguzi wa historia, leseni", "Nyaraka zinazohitajika: orodha unayopaswa kupakia"] },
            { title: "Angalia tarehe", bullets: ["Omba kabla ya tarehe ya mwisho", "Baadhi ya kazi zinafungwa mapema baada ya maombi ya kutosha"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM: Maswali kuhusu uajiri wa serikali kuu", url: "https://www.opm.gov/frequently-asked-questions/employment-faq/federal-hiring/" }
          ],
          tryIt: "Chagua tangazo moja halisi kutoka utafutaji wako uliohifadhiwa lililo wazi kwako. Kwenye karatasi moja tengeneza muhtasari wa tangazo: jina la kazi, ofisi, namba ya tangazo, daraja na mshahara, tarehe ya mwisho, iko wazi kwa nani, uzoefu maalum kwa maneno yako mwenyewe, majukumu makuu matatu, na kila hati inayohitajika.",
          youCanNow: "kusoma tangazo la kazi ya serikali kuu na kutoa unachohitaji kwenye ukurasa mmoja.",
          quickCheck: [
            { objective: "O3", q: "Sehemu ipi inakuambia uzoefu ambao resume yako lazima ionyeshe?", options: ["How to apply (jinsi ya kuomba)", "Required documents (nyaraka zinazohitajika)", "Next steps (hatua zinazofuata)", "Qualifications (uzoefu maalum)"], answer: 3, why: "Qualifications inaeleza uzoefu maalum au elimu unayohitaji ili kustahili." },
            { objective: "O3", q: "Tangazo linafungwa Ijumaa lakini linasema linaweza kufungwa mapema. Uombe lini?", options: ["Mara tu ombi lako likiwa tayari", "Ijumaa saa sita usiku", "Wiki ijayo", "Baada tu ya ofisi kukupigia simu"], answer: 0, why: "Kazi zinazoweza kufungwa mapema zinaweza kuacha kupokea maombi kabla ya tarehe ya mwisho, kwa hiyo omba ukiwa tayari." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata kazi ya serikali iliyo wazi kwako",
        questions: [
          { objective: "O1", q: "Usome nini kwanza katika tangazo lolote ili kuokoa muda?", options: ["Historia ya ofisi", "\"This job is open to\"", "Sehemu ya marupurupu", "Picha ya ofisi"], answer: 1, why: "Kama hakuna njia ya kuajiriwa inayokufaa, ombi halitafikiriwa, kwa hiyo kagua hili kwanza." },
          { objective: "O1", q: "Mwanajeshi mstaafu anataka kuona kazi zipi za serikali zinawapa wastaafu kipaumbele maalum. Aangalie wapi?", options: ["Njia ya Veterans kwenye USAJOBS", "Tovuti ya kazi ya kulipia inayowatoza wastaafu", "Mbao za matangazo za kambi za jeshi tu", "Matangazo ya mitandao ya kijamii yanayoahidi kazi za serikali"], answer: 0, why: "USAJOBS ina njia ya Veterans inayoeleza kipaumbele cha wastaafu na njia za kuajiri wastaafu." },
          { objective: "O2", q: "Unaingiaje kwenye USAJOBS?", options: ["Kwa namba yako ya Social Security tu", "Kwa msimbo anaokutumia mwajiri kwa ujumbe mfupi", "Kwa akaunti ya Login.gov", "Kwa uanachama wa kulipia"], answer: 2, why: "USAJOBS inatumia Login.gov, huduma ya serikali ya kuingia." },
          { objective: "O3", q: "\"Specialized experience\" (uzoefu maalum) inamaanisha nini katika tangazo?", options: ["Kazi yoyote uliyowahi kufanya", "Uzoefu wa kufanya aina ya kazi inayohitajika, katika kiwango kinachoombwa", "Shahada ya chuo katika somo lolote", "Muda wa kujitolea tu"], answer: 1, why: "Uzoefu maalum ni uzoefu katika aina ya kazi inayohitajika, katika kiwango kinachoombwa na tangazo." },
          { objective: "O3", q: "Tangazo linaorodhesha \"lazima ufaulu uchunguzi wa historia\" na \"uraia wa Marekani\". Hivi ni nini?", options: ["Majukumu", "Nyaraka zinazohitajika", "Marupurupu", "Masharti ya ajira"], answer: 3, why: "Sheria unazopaswa kutimiza ili uajiriwe ni masharti ya ajira." }
        ]
      }
    },
    {
      name: "Sura 2: Kuomba na kufuatilia",
      lessons: [
        {
          title: "Kuandika resume ya serikali inayolingana na kazi",
          objectives: ["O4"],
          minutes: 6,
          goal: "Andika kazi zako kwenye resume ya serikali zinazoonyesha uzoefu maalum unaoombwa na tangazo.",
          text: [
            "Resume ya serikali kuu inahitaji maelezo zaidi kuliko resume nyingi za makampuni binafsi. Kwa kila kazi, weka jina la kazi, mwajiri, tarehe ya kuanza na ya kumaliza (mwezi na mwaka) na saa ulizofanya kazi kwa wiki. Ofisi za serikali zinatumia tarehe na saa kuhesabu uzoefu wako, kwa hiyo kazi isiyo navyo huenda isihesabiwe.",
            "Chini ya kila kazi, andika majukumu na matokeo yako kwa maneno ya tangazo lenyewe. Kama tangazo linaomba uzoefu wa \"maintaining inventory records\" (kutunza kumbukumbu za mali ghalani), na ulifanya hivyo, andika maneno hayo na uongeze maelezo: ulifanya nini, kiasi gani, mara ngapi na nini kiliboreka. Kwa mfano: \"Nilitunza kumbukumbu za mali kwa vitu 1,200 nikitumia skana ya mkononi; nilipunguza makosa ya kuhesabu kwa nusu katika miezi sita.\"",
            "Hesabu uzoefu wote halisi: kazi za kulipwa, kazi za muda mfupi, huduma ya jeshi, kazi za kujitolea na kazi ulizofanya ukiwa gerezani, kama jikoni, matengenezo au ukarani. Kuwa mkweli; usidai kamwe uzoefu usio nao.",
            "Soma tangazo na USAJOBS Help Center (kituo cha msaada) kuhusu kikomo chochote cha kurasa au sheria za mpangilio, kwa sababu zinabadilika. Unaweza kutengeneza resume ndani ya USAJOBS au kupakia yako mwenyewe. Ukitumia zana ya AI kusaidia maneno, usiweke namba za binafsi na ukague kwamba kila mstari ni kweli."
          ],
          steps: ["Nakili sentensi ya uzoefu maalum kutoka karatasi yako ya muhtasari.", "Chagua kazi ambazo ulifanya aina hiyo ya kazi.", "Kwa kila kazi, andika jina la kazi, mwajiri, mwezi na mwaka wa kuanza na kumaliza, na saa kwa wiki.", "Andika mistari 3 hadi 5 ya majukumu na matokeo ukitumia maneno muhimu ya tangazo.", "Ongeza namba katika angalau mstari mmoja: ngapi, kiasi gani au mara ngapi.", "Kagua tangazo kuhusu kikomo cha kurasa na uisome yote kwa sauti kuhakikisha ni kweli na tahajia ni sahihi."],
          words: [["Resume ya serikali", "resume ya kazi ya serikali, yenye tarehe, saa kwa wiki na majukumu ya kina kwa kila kazi."], ["Maneno muhimu", "maneno makuu ya tangazo ambayo resume yako inapaswa kuyarudia pale yanapokuwa kweli."], ["Matokeo", "kilichoboreka kwa sababu ya kazi yako, bora zaidi kikiwa na namba."], ["Saa kwa wiki", "saa ngapi kwa wiki ulifanya kazi fulani; ofisi zinazitumia kuhesabu uzoefu wako."]],
          slides: [
            { title: "Kila kazi kwenye resume inahitaji", bullets: ["Jina la kazi na mwajiri", "Tarehe ya kuanza na kumaliza: mwezi na mwaka", "Saa kwa wiki", "Majukumu na matokeo"] },
            { title: "Linganisha na tangazo", bullets: ["Tumia maneno yake muhimu pale yalipo kweli", "Ongeza namba: ngapi, kiasi gani, mara ngapi"] },
            { title: "Uzoefu wote halisi unahesabiwa", bullets: ["Kazi za kulipwa na za muda mfupi, huduma ya jeshi", "Kazi za kujitolea na kazi ulizofanya ukiwa gerezani", "Usidai kamwe usichofanya"] },
            { title: "Kagua sheria", bullets: ["Kikomo cha kurasa na mpangilio: soma tangazo", "Msaada wa AI ni sawa; bila namba za binafsi, kila mstari uwe kweli"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM FedsHireVets (kazi za serikali kwa wastaafu)", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Ukitumia muhtasari wa tangazo lako, andika kazi mbili za resume ya serikali kwenye karatasi au kwenye hati. Kila moja inahitaji jina la kazi, mwajiri, tarehe za mwezi na mwaka, saa kwa wiki, na mistari 3 hadi 5 ya majukumu na matokeo inayotumia maneno muhimu ya tangazo. Pigia mstari kila neno muhimu ulilotumia.",
          youCanNow: "kuandika kazi kwenye resume ya serikali zenye tarehe, saa na uzoefu unaolingana ambao ofisi inahitaji ili kuhesabu kazi yako.",
          quickCheck: [
            { objective: "O4", q: "Kazi ipi iko tayari kwa resume ya serikali?", options: ["\"Mfanyakazi wa ghala, nilifanya mambo mengi\"", "\"Msaidizi wa ghala, ABC Supply, 03/2022 hadi 08/2024, saa 40 kwa wiki; nilitunza kumbukumbu za mali kwa vitu 1,200\"", "\"Nilifanya kazi ghalani kwa muda\"", "\"Mchapakazi, mshirikiano mzuri\""], answer: 1, why: "Ina jina la kazi, mwajiri, tarehe za mwezi na mwaka, saa kwa wiki na jukumu lenye namba." },
            { objective: "O4", q: "Tangazo linaomba uzoefu wa \"operating a forklift\" (kuendesha forklift). Uliendesha forklift ukiwa gerezani. Unafanya nini?", options: ["Kuiacha kwa sababu haihesabiwi", "Kusema uliendesha forklift katika kampuni ambayo hukuwahi kufanya kazi", "Kuandika \"kazi za jumla\" tu", "Kuiorodhesha kwa ukweli pamoja na tarehe, saa na ulichofanya"], answer: 3, why: "Uzoefu halisi wa kazi unahesabiwa, pamoja na kazi ukiwa gerezani, ukiorodheshwa kwa ukweli na maelezo." }
          ]
        },
        {
          title: "Dodoso na nyaraka zako",
          objectives: ["O5"],
          minutes: 5,
          goal: "Jibu dodoso kwa uaminifu na ukusanye kila hati inayohitajika na tangazo.",
          text: [
            "Matangazo mengi yana dodoso (questionnaire) la mtandaoni. Unajipima mwenyewe uzoefu wako katika kazi za nafasi hiyo, kwa mfano kutoka \"Sina uzoefu\" hadi \"Mimi ni mtaalamu au nimewafundisha wengine\". Majibu yako yanasaidia kuamua kama unastahili na nafasi yako katika orodha.",
            "Jibu kwa uaminifu, na hakikisha resume yako inaunga mkono kila jibu la juu. Ukisema wewe ni mtaalamu wa kupanga ratiba lakini resume yako haitaji ratiba hata mara moja, mkaguzi anaweza kushusha alama yako au kukuona hustahili.",
            "Kisha kusanya nyaraka zilizo katika sehemu ya Required documents. Za kawaida: resume yako; nakala za matokeo ya chuo (transcripts) kama unastahili kwa elimu; kwa wanajeshi wastaafu DD-214 inayoonyesha aina ya huduma (character of service), pamoja na SF-15 au barua ya VA kama unadai kipaumbele cha alama 10; barua ya Schedule A inayothibitisha ulemavu kama unaomba kupitia njia hiyo; na fomu ya karibuni ya wafanyakazi (SF-50) kwa wafanyakazi wa sasa au wa zamani wa serikali kuu. Pakia nakala zilizo wazi na zinazosomeka.",
            "Baadhi ya fomu zinauliza kuhusu historia ya uhalifu. Sheria ya serikali kuu kwa ujumla inaweka mipaka ya wakati ofisi zinaweza kuuliza kabla ya ofa ya kazi yenye masharti, isipokuwa kwa baadhi ya kazi kama za vyombo vya usalama. Unapoulizwa, jibu kwa ukweli: majibu ya uongo yanaweza kukupotezea kazi baadaye. Kagua tangazo na OPM kwa sheria za sasa, na uliza programu ya kurudi katika jamii au ya msaada wa kisheria kama una maswali."
          ],
          steps: ["Soma kila swali la dodoso polepole.", "Chagua jibu lililo kweli kwako.", "Kwa kila jibu la juu, tafuta mstari wa resume unaoliunga mkono; ongeza mmoja kama uzoefu ni halisi lakini haupo.", "Orodhesha kila hati inayohitajika kutoka karatasi yako ya muhtasari.", "Andika utakapopata kila moja (kwa mfano: DD-214 kutoka kumbukumbu zako au National Archives, transcripts kutoka shule yako).", "Pakia nakala zilizo wazi na ukague kwamba kila moja inafunguka."],
          words: [["Dodoso (questionnaire)", "maswali ya mtandaoni ambapo unajipima uzoefu wako katika kazi za nafasi hiyo."], ["DD-214", "karatasi inayoonyesha tarehe na aina ya huduma ya jeshi ya mwanajeshi mstaafu."], ["SF-15", "fomu inayotumika kudai kipaumbele cha wastaafu cha alama 10."], ["Kipaumbele cha wastaafu (veterans' preference)", "kufikiriwa zaidi katika uajiri wa serikali kuu kwa wanajeshi wastaafu wanaostahili."], ["SF-50", "fomu ya wafanyakazi wa serikali kuu inayoonyesha kazi, daraja na hadhi ya mfanyakazi."], ["Ofa ya kazi yenye masharti", "ofa ya kazi inayotegemea kufaulu ukaguzi wa mwisho, kama uchunguzi wa historia."]],
          slides: [
            { title: "Dodoso", bullets: ["Unajipima uzoefu wako mwenyewe", "Jibu kwa ukweli", "Resume yako lazima iunge mkono kila jibu la juu"] },
            { title: "Nyaraka za kawaida zinazohitajika", bullets: ["Resume; transcripts kama unatumia elimu", "Wastaafu: DD-214; SF-15 au barua ya VA kwa alama 10", "Barua ya Schedule A; SF-50 kwa wafanyakazi wa serikali"] },
            { title: "Maswali kuhusu historia ya uhalifu", bullets: ["Sheria zinaweka mipaka ya wakati ofisi zinaweza kuuliza; baadhi ya kazi ni tofauti", "Ukiulizwa, jibu kwa ukweli kila wakati", "Kagua OPM na programu ya kurudi katika jamii au ya msaada wa kisheria"] },
            { title: "Kabla ya kutuma", bullets: ["Kila hati inayohitajika imepakiwa na inasomeka", "Hakuna kinachokosekana kwenye orodha"] }
          ],
          sources: [
            { name: "USAJOBS: Njia ya Veterans (DD-214, SF-15, barua ya VA)", url: "https://www.usajobs.gov/HiringPath/Veterans" },
            { name: "OPM FedsHireVets: Kipaumbele cha wastaafu", url: "https://www.opm.gov/fedshirevets/current-veteran-employees/veterans-preference/" },
            { name: "USAJOBS: Njia za kuajiriwa (watu wenye ulemavu)", url: "https://www.usajobs.gov/hiringpath/" }
          ],
          tryIt: "Tengeneza orodha ya nyaraka kwa tangazo lako yenye safu tatu: hati, nitaipata wapi, imekamilika. Kisha andika kazi tatu za mtindo wa dodoso kutoka majukumu ya nafasi hiyo, ujipime kwa ukweli katika kila moja, na kando ya kila alama ya juu andika mstari wa resume unaoithibitisha.",
          youCanNow: "kujibu dodoso la serikali kuu kwa uaminifu ukiwa na resume nyuma ya kila jibu, na kukusanya nyaraka zote ambazo kazi inaomba.",
          quickCheck: [
            { objective: "O5", q: "Unajipima \"mtaalamu\" wa kupanga ratiba, lakini resume yako haitaji ratiba hata mara moja. Kipi kinaweza kutokea?", options: ["Mkaguzi anaweza kushusha alama yako au kukuona hustahili", "Hakuna; dodoso tu ndilo linalohesabiwa", "Utaajiriwa haraka zaidi", "Ofisi itakuongezea kwenye resume yako"], answer: 0, why: "Wakaguzi wanahakikisha resume yako inaunga mkono majibu yako ya dodoso." },
            { objective: "O5", q: "Mwanajeshi mstaafu anadai kipaumbele cha alama 10. Apakie nini, kulingana na USAJOBS?", options: ["Resume tu", "Barua kutoka kwa rafiki", "DD-214 pamoja na SF-15 au barua ya VA inayokubalika", "Picha ya sare yake"], answer: 2, why: "USAJOBS inaomba DD-214, na SF-15 au uthibitisho mwingine unaokubalika kama barua ya VA kwa kipaumbele cha alama 10." }
          ]
        },
        {
          title: "Kutuma, kufuatilia na kubaki salama",
          objectives: ["O6", "O4"],
          minutes: 5,
          goal: "Fuatilia hali ya ombi lako kwenye USAJOBS na utambue matoleo bandia ya kazi za serikali.",
          text: [
            "Unapoomba, USAJOBS inakupeleka kwenye mfumo wa maombi wa ofisi husika ili umalize. Hakikisha unakamilisha kila hatua na kupata uthibitisho; kuondoka baada ya dodoso ni sababu ya kawaida ombi kutofika kamwe.",
            "Fuatilia kila ombi kwenye profile yako ya USAJOBS. Hali inabadilika ofisi inapofanya kazi: kwa mfano limepokelewa, linakaguliwa, limepelekwa kwa meneja wa kuajiri (referred) au halikupelekwa (not referred), na baadaye umechaguliwa au hukuchaguliwa. Uajiri wa serikali kuu unaweza kuchukua wiki au miezi, kwa hiyo endelea kuomba kazi nyingine unaposubiri. Kama halikupelekwa, soma taarifa na urekebishe sehemu hiyo (mara nyingi uzoefu, tarehe au nyaraka zinazokosekana) kwa ombi linalofuata.",
            "Weka daftari rahisi: jina la kazi, namba ya tangazo, ofisi, tarehe uliyoomba, hali na tarehe inayofuata utakapokagua. Kagua kama mara moja kwa wiki.",
            "Jihadhari na ulaghai. Kuomba kazi za serikali kuu ni bure kila wakati. Kuwa makini na yeyote anayeahidi kazi ya serikali kwa ada, anayeomba malipo au kadi za zawadi (gift cards), anayeomba namba yako ya Social Security au ya benki kwa ujumbe mfupi au gumzo, au anayekuhoji kwa ujumbe mfupi tu. Barua pepe na tovuti halisi za serikali kuu zinaishia na .gov au .mil. Ukiwa na shaka, andika usajobs.gov wewe mwenyewe na ukague hapo."
          ],
          steps: ["Maliza kila hatua katika mfumo wa ofisi na uhifadhi uthibitisho.", "Anza daftari lako la maombi.", "Kagua hali kwenye USAJOBS kama mara moja kwa wiki.", "Kama halikupelekwa, soma kwa nini na urekebishe wakati ujao.", "Usilipe kamwe, na usitume kamwe namba za binafsi kwa ujumbe mfupi au gumzo."],
          words: [["Referred (limepelekwa)", "ombi lako limetumwa kwa meneja wa kuajiri ili alifikirie."], ["Not referred (halikupelekwa)", "ombi lako halikutumwa mbele, mara nyingi kwa sababu ofisi iliona hustahili au waombaji wengine walipata nafasi za juu zaidi."], ["Daftari la maombi", "orodha yako mwenyewe ya kazi ulizoomba, pamoja na tarehe na hali."], [".gov", "mwisho wa anwani ya tovuti unaotumiwa na ofisi za serikali ya Marekani tu."]],
          slides: [
            { title: "Maliza ombi", bullets: ["USAJOBS inakupeleka kwenye mfumo wa ofisi", "Kamilisha kila hatua", "Hifadhi uthibitisho"] },
            { title: "Lifuatilie", bullets: ["Hali iko kwenye profile yako ya USAJOBS", "Referred, not referred, selected, not selected", "Endelea kuomba unaposubiri"] },
            { title: "Daftari lako la maombi", bullets: ["Jina la kazi, namba, ofisi, tarehe uliyoomba", "Hali na tarehe ya kukagua tena"] },
            { title: "Dalili za hatari za ulaghai", bullets: ["Ada ya kupata au kuomba kazi ya serikali", "Kadi za zawadi, namba za benki au Social Security kwa ujumbe mfupi", "Usaili kwa ujumbe mfupi tu; anwani zisizoishia na .gov au .mil"] }
          ],
          sources: [
            { name: "FTC: Ulaghai wa kazi (kuomba kazi za serikali kuu ni bure)", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "USAJOBS", url: "https://www.usajobs.gov/" }
          ],
          tryIt: "Kazi ya mwisho: unganisha kifurushi chako cha mazoezi cha ombi kwa tangazo lako: muhtasari wa ukurasa mmoja, angalau kazi mbili za resume zinazolingana, orodha ya nyaraka na daftari la maombi lenye namba ya kazi, tarehe utakayoomba na tarehe ya kukagua tena. Kisha soma kifurushi ukilinganisha na rubriki na urekebishe sehemu moja dhaifu.",
          youCanNow: "kuandaa ombi kamili la kazi ya serikali kuu, kulifuatilia, na kujilinda dhidi ya matoleo bandia ya kazi.",
          quickCheck: [
            { objective: "O6", q: "Mtu kwenye mitandao ya kijamii anakupa kazi ya uhakika katika ofisi ya serikali kuu kwa ada ya $200 ya kushughulikia. Hii ni nini?", options: ["Hatua ya kawaida ya uajiri wa serikali", "Njia halali ya kuruka foleni", "Ulaghai: kuomba kazi za serikali kuu ni bure", "Ada ambayo USAJOBS inawatoza wastaafu"], answer: 2, why: "FTC inasema kuomba kazi za serikali kuu ni bure kila wakati na yeyote anayetoza pesa kwa ajili yake ni mlaghai." },
            { objective: "O6", q: "Hali yako kwenye USAJOBS inasema \"Not referred\". Hatua bora inayofuata ni ipi?", options: ["Kuacha kuomba kazi za serikali", "Kusoma taarifa na kurekebisha sehemu dhaifu katika ombi lako linalofuata", "Kumlipa mtu abadilishe hali yako", "Kuomba tena kazi ile ile iliyokwisha fungwa"], answer: 1, why: "Taarifa mara nyingi inaonyesha kilichokosekana, ili urekebishe wakati ujao." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuomba na kufuatilia",
        questions: [
          { objective: "O4", q: "Kwa nini resume ya serikali inahitaji tarehe za kuanza na kumaliza na saa kwa wiki?", options: ["Ili ofisi iweze kuhesabu uzoefu wako", "Kwa sababu inaifanya resume ionekane ndefu zaidi", "Kuonyesha umri wako", "Haizihitaji"], answer: 0, why: "Ofisi zinatumia tarehe na saa kuhesabu una uzoefu unaostahili kiasi gani." },
          { objective: "O4", q: "Utumie vipi maneno muhimu ya tangazo katika resume yako?", options: ["Kunakili tangazo lote kwenye resume yako", "Kuyaepuka ili usikike tofauti", "Kuyatumia kwa uzoefu ulio nao kweli", "Kuyatumia hata kwa vitu ambavyo hukuwahi kufanya"], answer: 2, why: "Kutumia maneno muhimu kwa uzoefu halisi kunawasaidia wakaguzi kulinganisha resume yako na kazi." },
          { objective: "O5", q: "Ufanye nini kabla ya kutuma ombi?", options: ["Kuruka dodoso", "Kupakia nyaraka ulizo nazo tayari tu", "Kujipima \"mtaalamu\" katika kila kitu", "Kukagua kwamba kila hati inayohitajika imepakiwa na inasomeka"], answer: 3, why: "Hati inayohitajika inayokosekana au isiyosomeka inaweza kusimamisha ombi lako." },
          { objective: "O6", q: "Anwani ipi ya tovuti ina uwezekano mkubwa zaidi kuwa ofisi halisi ya serikali kuu?", options: ["fedjobs-hiring.com", "agency-careers.net", "kiungo katika ujumbe mfupi kutoka namba usiyoijua", "anwani inayoishia na .gov"], answer: 3, why: "Ofisi za serikali ya Marekani tu ndizo zinazotumia anwani za .gov." },
          { objective: "O6", q: "Daftari lako la maombi liwe na nini?", options: ["Namba yako ya Social Security", "Jina la kazi, namba ya tangazo, tarehe uliyoomba, hali na tarehe ya kukagua tena", "Nywila yako ya Login.gov", "Jina la ofisi tu"], answer: 1, why: "Maelezo haya yanakuwezesha kufuatilia kila ombi bila kuandika namba za binafsi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuomba Kazi za Serikali ya Marekani (USAJOBS)",
    questions: [
      { objective: "O1", q: "USAJOBS ni nini?", options: ["Wakala binafsi wa ajira", "Tovuti ya kazi ya kulipia", "Tovuti rasmi na ya bure ambapo kazi za serikali kuu zinatangazwa", "Tovuti ya chama cha wafanyakazi"], answer: 2, why: "USAJOBS ni tovuti rasmi ya kazi ya serikali kuu, inayoendeshwa na OPM, na ni bure." },
      { objective: "O1", q: "Maria ni raia wa Marekani ambaye hajawahi kufanya kazi serikalini. Anaweza kuomba kazi zipi?", options: ["Kazi zilizo wazi kwa umma", "Kazi zilizo wazi kwa wafanyakazi wa serikali kuu tu", "Kazi za viongozi wakuu (Senior executive) tu", "Kazi yoyote, bila kujali iko wazi kwa nani"], answer: 0, why: "Kazi za \"Open to the public\" ni kwa raia na wenyeji wa Marekani kwa ujumla." },
      { objective: "O1", q: "GS-7 inamaanisha nini kwenye tangazo?", options: ["Kazi katika jimbo la Georgia", "Daraja la 7 katika kipimo cha mishahara cha General Schedule", "Miaka saba ya uzoefu inahitajika", "Nafasi saba zilizo wazi"], answer: 1, why: "GS ni General Schedule; ina madaraja 1 hadi 15, na 7 ni daraja." },
      { objective: "O2", q: "Njia salama zaidi ya kufika USAJOBS ni ipi?", options: ["Kubofya kiungo katika ujumbe mfupi kutoka kwa mwajiri", "Kubofya tangazo la utafutaji linaloahidi kazi za serikali", "Kutumia kiungo katika chapisho la mitandao ya kijamii", "Kuandika usajobs.gov kwenye kivinjari wewe mwenyewe"], answer: 3, why: "Kuandika anwani rasmi wewe mwenyewe kunakuepusha na tovuti bandia." },
      { objective: "O2", q: "Vichujio vipi vinakusaidia kupata kazi zinazokufaa?", options: ["Mahali, daraja la mshahara na njia ya kuajiriwa", "Rangi za nembo ya ofisi", "Idadi ya maneno katika jina la kazi", "Hakuna; vichujio vinaficha kazi nzuri"], answer: 0, why: "Mahali, daraja na njia ya kuajiriwa vinapunguza matokeo hadi kazi unazoweza na unazotaka kufanya." },
      { objective: "O2", q: "Kwa nini unajibu maswali ya mwanajeshi mstaafu na mfanyakazi wa serikali kwenye profile yako ya USAJOBS?", options: ["Ili ulipe ada ndogo zaidi", "Ili USAJOBS ikuonyeshe njia za kuajiriwa zinazokufaa", "Kwa sababu yanachapishwa kwenye resume yako", "Ili waajiri wakutumie ujumbe mfupi"], answer: 1, why: "Majibu ya profile yanaisaidia USAJOBS kukulinganisha na njia za kuajiriwa; hakuna ada." },
      { objective: "O3", q: "Unapata wapi orodha ya karatasi unazopaswa kupakia?", options: ["Duties (majukumu)", "Ukurasa wa mwanzo wa ofisi", "Required documents (nyaraka zinazohitajika)", "This job is open to"], answer: 2, why: "Sehemu ya Required documents inaorodhesha unachopaswa kupakia." },
      { objective: "O3", q: "Kipi kati ya hivi ni sharti la ajira?", options: ["Kujibu simu", "Kufaulu uchunguzi wa historia", "Bima ya afya", "Likizo yenye malipo"], answer: 1, why: "Uchunguzi wa historia ni sheria unayopaswa kutimiza ili uajiriwe, kwa hiyo ni sharti la ajira." },
      { objective: "O3", q: "Vitu vipi vitano vinafaa kuwa kwenye karatasi yako ya muhtasari wa tangazo?", options: ["Nembo ya ofisi, picha, anwani, ramani, historia", "Nywila yako, SSN, benki, siku ya kuzaliwa, anwani", "Mshahara tu", "Majukumu, sifa, daraja, tarehe ya mwisho, nyaraka zinazohitajika"], answer: 3, why: "Vitu hivi vitano vinakuambia kazi ni nini, kama unastahili, lini uombe na nini upakie." },
      { objective: "O3", q: "Tangazo linasema linaweza kufungwa mapema. Hiyo inamaanisha nini?", options: ["Linaweza kuacha kupokea maombi kabla ya tarehe ya mwisho", "Litakaa wazi muda mrefu zaidi", "Wanajeshi wastaafu tu ndio wanaweza kuomba", "Nafasi imeshajazwa"], answer: 0, why: "Baadhi ya kazi zinafungwa zikishapokea idadi fulani ya maombi." },
      { objective: "O4", q: "Mstari upi una nguvu zaidi kwa resume ya serikali?", options: ["\"Nilifanya huduma kwa wateja\"", "\"Nilijibu simu za wateja kama 60 kwa siku na kutatua nyingi katika simu ya kwanza\"", "\"Napenda watu\"", "\"Nilihusika na mambo\""], answer: 1, why: "Unaonyesha jukumu halisi lenye namba, jambo linalomsaidia mkaguzi kuona uzoefu wako." },
      { objective: "O4", q: "James alifanya kazi jikoni kwa miaka miwili akiwa gerezani. Kazi inaomba uzoefu wa huduma ya chakula. Afanye nini?", options: ["Kuiacha", "Kusema ilikuwa katika mgahawa", "Kuiorodhesha kama \"sikuwa na kazi\" tu", "Kuiorodhesha kwa ukweli pamoja na tarehe, saa na majukumu"], answer: 3, why: "Kazi halisi inahesabiwa popote ilipofanyika, ikiorodheshwa kwa ukweli na maelezo." },
      { objective: "O4", q: "Unajuaje kikomo cha kurasa au sheria za mpangilio wa resume?", options: ["Kusoma tangazo na USAJOBS Help Center", "Kukisia: ndefu zaidi ni bora kila wakati", "Kumuuliza mgeni mtandaoni", "Hakuna sheria kamwe"], answer: 0, why: "Sheria zinaweza kubadilika, kwa hiyo tangazo na USAJOBS ndipo pa kukagua." },
      { objective: "O4", q: "Taarifa ipi kila kazi kwenye resume ya serikali inahitaji?", options: ["Anwani ya nyumbani ya msimamizi wako", "Namba yako ya Social Security", "Saa za kazi kwa wiki", "Picha yako"], answer: 2, why: "Saa kwa wiki, pamoja na tarehe, zinaiwezesha ofisi kuhesabu uzoefu wako." },
      { objective: "O5", q: "Ujibu vipi dodoso?", options: ["Kuchagua jibu la juu kabisa kila wakati", "Kujibu kwa ukweli, na resume yako ikiunga mkono kila jibu la juu", "Kuruka swali lolote unaloona gumu", "Kunakili majibu ya rafiki"], answer: 1, why: "Majibu ya kweli yanayoungwa mkono na resume yako ndiyo wakaguzi wanayokagua." },
      { objective: "O5", q: "Nani anahitaji kupakia barua ya Schedule A inayothibitisha ulemavu?", options: ["Kila mtu", "Wanafunzi tu", "Wafanyakazi wa sasa wa serikali kuu tu", "Watu wanaoomba kupitia njia ya Individuals with disabilities"], answer: 3, why: "Barua ya Schedule A inaunga mkono maombi kupitia njia ya kuajiriwa ya watu wenye ulemavu." },
      { objective: "O5", q: "Fomu inauliza kuhusu historia yako ya uhalifu baada ya ofa ya kazi yenye masharti. Unafanya nini?", options: ["Kujibu kwa ukweli", "Kuiacha wazi", "Kutoa jibu la uongo", "Kumwomba rafiki akujibie"], answer: 0, why: "Majibu ya uongo yanaweza kukupotezea kazi baadaye; majibu ya kweli yanahitajika." },
      { objective: "O6", q: "Unakagua hali ya ombi lako wapi?", options: ["Katika ujumbe mfupi kutoka namba usiyoijua", "Katika profile yako ya USAJOBS", "Kwenye tovuti ya kufuatilia ya kulipia", "Kwa kwenda ofisini ana kwa ana tu"], answer: 1, why: "USAJOBS inaonyesha hali ya maombi yako kwenye profile yako." },
      { objective: "O6", q: "Kipi ni dalili ya hatari ya ofa bandia ya kazi ya serikali kuu?", options: ["Barua pepe inaishia na .gov", "Tangazo liko kwenye USAJOBS", "Wanaomba ada au kadi za zawadi", "Tangazo lina tarehe ya mwisho"], answer: 2, why: "Kazi halisi za serikali kuu hazikutozi pesa kamwe; ada na kadi za zawadi ni dalili za ulaghai." },
      { objective: "O6", q: "Umeomba na unasubiri. Mpango bora ni upi?", options: ["Kuacha kutafuta hadi usikie jibu", "Kupiga simu ofisini kila siku", "Kulipa ili liharakishwe", "Kuendelea kuomba kazi nyingine na kukagua hali yako kila wiki"], answer: 3, why: "Uajiri wa serikali kuu unaweza kuchukua wiki au miezi, kwa hiyo endelea kuomba na kukagua mara kwa mara." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 3, 6, 8, 11, 13, 14, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ukague tena.",
    criteria: [
      { name: "Kazi iko wazi kwako", objective: "O1", notYet: "Kazi iliyochaguliwa haiko wazi kwa njia yoyote ya kuajiriwa inayomfaa mwanafunzi.", meets: "Kazi iko wazi kwa njia ya kuajiriwa inayomfaa, na muhtasari unaitaja.", exceeds: "Pia anaorodhesha njia nyingine anazoweza kutumia na kazi moja zaidi iliyo wazi." },
      { name: "Muhtasari wa tangazo", objective: "O3", notYet: "Kimoja au zaidi kati ya majukumu, sifa, daraja, tarehe ya mwisho au nyaraka zinazohitajika kinakosekana.", meets: "Vyote vitano viko kwenye ukurasa mmoja kwa maneno ya mwanafunzi mwenyewe.", exceeds: "Pia anaandika masharti ya ajira na kama kazi inaweza kufungwa mapema." },
      { name: "Kazi kwenye resume", objective: "O4", notYet: "Kazi hazina tarehe za mwezi na mwaka, saa kwa wiki au majukumu yanayolingana na nafasi.", meets: "Kazi mbili au zaidi zenye jina la kazi, mwajiri, tarehe, saa na majukumu yanayotumia maneno muhimu ya tangazo.", exceeds: "Kila kazi ina angalau tokeo moja lenye namba, na mistari yote ni ya kweli na iko wazi." },
      { name: "Nyaraka na dodoso", objective: "O5", notYet: "Hati inayohitajika haipo kwenye orodha, au alama ya juu haina mstari wa resume unaoiunga mkono.", meets: "Kila hati inayohitajika imeorodheshwa pamoja na mahali pa kuipata, na kila alama ya juu inaungwa mkono na mstari wa resume.", exceeds: "Nyaraka zimeshakusanywa na kukaguliwa kwamba zinasomeka." },
      { name: "Ufuatiliaji na usalama", objective: "O6", notYet: "Hakuna daftari, au daftari au kifurushi kina namba za binafsi.", meets: "Daftari lenye namba ya kazi, tarehe, hali na tarehe ya kukagua tena; hakuna namba za binafsi.", exceeds: "Mwanafunzi anaweza kutaja dalili tatu za hatari za ulaghai na jinsi ya kukagua kazi kwenye usajobs.gov." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaotuma angalau ombi moja halisi la USAJOBS ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopelekwa kwa meneja wa kuajiri, wanaohojiwa au wanaoajiriwa ndani ya miezi 6",
      "Programu washirika (za wastaafu wa jeshi, za kurudi katika jamii na vituo vya ajira) zinaripoti maombi machache yanayokataliwa kwa kukosa nyaraka au maelezo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti; kompyuta ni rahisi zaidi kwa kuandika resume",
      "Anwani ya barua pepe na simu kwa hatua ya pili ya kuingia ya Login.gov",
      "Karatasi na kalamu, au programu ya bure ya kuandika hati kama Google Docs au Microsoft Word mtandaoni",
      "Resume yoyote iliyopo, na nakala za nyaraka kama DD-214, transcripts au barua ya Schedule A kama mwanafunzi anazo",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na saa moja hadi mbili kwa kifurushi cha mwisho"
    ],
    facilitatorNotes: [
      "Katika kituo cha ajira, programu ya wastaafu wa jeshi au programu ya kurudi katika jamii, fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi mkiwa na tangazo halisi kwenye skrini.",
      "Kila mwanafunzi achague tangazo lililo wazi kwake kweli kabla ya Somo la 3; inaokoa kazi ya kurudia.",
      "Wapange wanafunzi wawili wawili wakaguane kazi zao za resume kuhusu tarehe, saa na maneno muhimu.",
      "Usikusanye kamwe namba za Social Security wala namba nyingine za binafsi; wanafunzi wanatunza nyaraka zao wenyewe.",
      "Sheria kuhusu kikomo cha kurasa, njia za kuajiriwa na maswali ya historia ya uhalifu zinabadilika: kagua tangazo, USAJOBS na OPM kabla ya kila kundi, na peleka maswali ya kisheria kwa programu ya msaada wa kisheria au ya kurudi katika jamii.",
      "Pima kifurushi cha mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
