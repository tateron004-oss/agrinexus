"use strict";

// Koach Learn course (Swahili translation of shared/pharmacy-technician-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Usalama: hakuna dozi halisi wala ushauri wa dozi. Kila agizo la daktari na kila swali la hesabu linatumia dawa za kubuni ("Dawa X") na ni la mazoezi tu.

module.exports = {
  id: "pharmacy-technician-prep-sw",
  lang: "sw",
  translationOf: "pharmacy-technician-prep",
  category: "Workforce Development",
  name: "Maandalizi ya Fundi wa Famasia",
  skills: "Kuchagua cheti na kukagua sheria za jimbo, Kusoma agizo la daktari, Hesabu za famasia za mazoezi, Ukaguzi wa usalama wa dawa, Kujua kinachopelekwa kwa mfamasia, Kulinda faragha ya mgonjwa (HIPAA)",
  outcome: "kuandaa mpango wako wa kusoma na wa mtihani wa fundi wa famasia, na kuonyesha ujuzi mkuu unaopimwa: kusoma agizo la daktari la mazoezi, kutatua hesabu za famasia za mazoezi, kufanya ukaguzi wa usalama anaofanya fundi, kupeleka maswali ya afya kwa mfamasia, na kuweka taarifa za mgonjwa kuwa siri.",
  about: [
    "Mafundi wa famasia (pharmacy technicians) huwasaidia wafamasia katika maduka ya dawa, hospitali, famasia zinazotuma dawa kwa posta na kliniki. Wanapokea maagizo ya daktari, wanayaingiza kwenye kompyuta, wanahesabu na kuweka lebo kwenye dawa, wanasimamia stoo na kuwasaidia wateja. Majimbo mengi ya Marekani yanataka mafundi wajisajili na bodi ya famasia ya jimbo, na waajiri wengi wanaomba cheti cha kitaifa.",
    "Kozi hii inakuandaa kwa njia hiyo. Utalinganisha vyeti viwili vya kitaifa (CPhT ya PTCB, unayoipata kwa kufaulu mtihani wa PTCE, na CPhT ya NHA, unayoipata kwa kufaulu mtihani wa ExCPT), utakagua sheria za jimbo lako, utasoma maagizo ya daktari ya mazoezi, utafanya hesabu za famasia za mazoezi, utajifunza ukaguzi wa usalama na sheria za serikali kuu anazofuata fundi, na utalinda faragha ya mgonjwa chini ya sheria ya HIPAA.",
    "Kozi hii haikupi cheti wala haikusajili, na haitoi kamwe ushauri wa kitabibu. Kila agizo la daktari na kila swali la hesabu ni la kubuni na limeandikwa kuwa la mazoezi tu. Maswali ya wagonjwa kuhusu dawa yanapelekwa kwa mfamasia kila wakati.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" kwenye karatasi. Jaribio fupi linafuata kila somo, jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Kazi yako ya mwisho ni mpango wako wa kusoma na wa mtihani pamoja na kitabu cha mazoezi."
  ],
  finalTask: "Andaa mpango wako wa kusoma na wa mtihani wa fundi wa famasia: taja mtihani utakaoufanya (PTCE au ExCPT), kile bodi ya famasia ya jimbo lako inachotaka, na tarehe za kusoma kila wiki hadi tarehe unayolenga ya mtihani. Ambatisha kitabu cha mazoezi: maagizo 5 ya daktari ya kubuni uliyoyasoma na kuyakagua, maswali 10 ya hesabu ya mazoezi yenye hatua zako, na orodha ya maswali 5 ya wateja ambayo ungeyapeleka kwa mfamasia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotafuta kazi ya kudumu ya huduma za afya bila shahada ndefu: wanaotafuta kazi, vijana, wahamiaji, wanajeshi wastaafu na watu wazima wanaorudi masomoni. Baadhi tayari wanafanya kazi madukani. Wengi hawajawahi kufanya kazi katika famasia.",
    startingPoint: "Wanaweza kusoma Kiingereza cha kila siku, kufanya hesabu za msingi kwa kikokotoo, na kutumia simu au kompyuta ya maktaba. Wengi hawajui majina ya dawa, vifupisho vya maagizo ya daktari, hesabu za famasia wala sheria za famasia.",
    gap: "Kazi na mitihani ya fundi wa famasia inatarajia usomaji sahihi wa maagizo ya daktari, hesabu za makini, ukaguzi wa usalama, ujuzi wa sheria za serikali kuu na za jimbo, na faragha kali. Makosa yanaweza kuwadhuru wagonjwa. Wanafunzi wanahitaji kujua njia ya kupata cheti na sheria za jimbo lao, na kufanya mazoezi ya ujuzi huu kwa usalama kabla ya mafunzo au mtihani.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la famasia linaelezwa",
      "Vifaa: simu au kompyuta ya maktaba; karatasi na kikokotoo cha kawaida vinatosha",
      "Usalama: hakuna dozi halisi wala ushauri wa dozi; dawa na namba zote ni za kubuni na zimeandikwa kuwa za mazoezi tu",
      "Sheria zinatofautiana kati ya majimbo: wanafunzi wanakagua bodi ya famasia ya jimbo lao",
      "Cheti na usajili wa jimbo vinaweza kuuliza kuhusu rekodi za uhalifu; wanafunzi wanakagua sheria rasmi",
      "Faragha: hakuna taarifa halisi za mgonjwa katika kazi yoyote"
    ],
    prerequisites: "Hesabu za msingi: sehemu, desimali na kuzidisha. Kozi \"Health Literacy\" (ufahamu wa taarifa za afya) inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia kurasa rasmi za PTCB, NHA na bodi ya famasia ya jimbo", action: "kulinganisha mitihani miwili ya kitaifa ya mafundi na kuandika mpango wa kusoma na wa mtihani unaotimiza sheria za jimbo lako", standard: "kila sharti likiwa limekaguliwa kwenye ukurasa rasmi" },
    { id: "O2", condition: "Ukipewa agizo la daktari la kubuni", action: "kutaja sehemu zake na kuandika upya maelekezo kwa maneno rahisi", standard: "ukipata angalau maagizo 4 kati ya 5 ya mazoezi sahihi kabisa" },
    { id: "O3", condition: "Ukipewa maswali ya mazoezi tu yenye namba za kubuni na kikokotoo cha kawaida", action: "kutatua hesabu za famasia za kubadilisha vipimo, idadi na siku za dawa", standard: "ukipata angalau 8 kati ya 10 sahihi huku hatua zikionyeshwa" },
    { id: "O4", condition: "Ukipewa agizo la mazoezi lililojazwa na chupa yake ya stoo", action: "kukagua mgonjwa, dawa, nguvu na NDC dhidi ya agizo la daktari na kuonyesha tofauti yoyote", standard: "ukigundua kila tofauti iliyowekwa makusudi" },
    { id: "O5", condition: "Ukipewa hali za mazoezi za famasia", action: "kupanga kila kazi kama kazi ya fundi au kazi ya mfamasia na kufuata sheria za ziada za dawa zinazodhibitiwa", standard: "ukipeleka kila swali la afya kwa mfamasia" },
    { id: "O6", condition: "Kwenye kaunta ya famasia au kwenye simu", action: "kushiriki taarifa za mgonjwa tu na watu wanaozihitaji, na kiasi kidogo tu wanachohitaji", standard: "katika kila hali ya mazoezi, ukifuata HIPAA" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi, maagizo ya daktari na hesabu",
      lessons: [
        {
          title: "Kazi, vyeti na sheria za jimbo lako",
          objectives: ["O1"],
          minutes: 5,
          goal: "Linganisha mitihani ya PTCE na ExCPT na utafute sheria za mafundi za jimbo lako.",
          text: [
            "Mafundi wa famasia wanapokea maagizo ya daktari, wanayaandika kwenye kompyuta, wanahesabu na kuweka lebo kwenye dawa, wanasimamia stoo, wanapokea malipo na kuwasaidia wateja. Mfamasia anakagua kazi na anajibu kila swali kuhusu dawa.",
            "Kuna vyeti viwili vya kitaifa, na vyote vinatoa cheo cha Certified Pharmacy Technician (CPhT, fundi wa famasia mwenye cheti). PTCB, Pharmacy Technician Certification Board, inakitoa kwa watu wanaofaulu mtihani wa PTCE. Ili ustahili, unahitaji programu ya mafunzo inayotambuliwa na PTCB au uzoefu wa kazi wa kutosha. NHA, National Healthcareer Association, inakitoa kwa watu wanaofaulu mtihani wa ExCPT, wakiwa na programu ya mafunzo au uzoefu wa kazi unaosimamiwa.",
            "Bodi ya famasia ya jimbo lako inaamua mafundi wanaruhusiwa kufanya nini, na kama lazima ujisajili au upate leseni kabla ya kufanya kazi. Sheria zinatofautiana sana kati ya majimbo. National Association of Boards of Pharmacy (NABP, chama cha kitaifa cha bodi za famasia) kina orodha ya bodi za kila jimbo.",
            "Ada, masharti ya kustahili na sheria za mitihani hubadilika, na vyeti vyote viwili vinakuomba utaje makosa ya jinai au hatua za bodi dhidi yako. Soma kurasa rasmi kabla ya kulipa. Kozi hii inakuandaa; haikupi cheti wala haikusajili."
          ],
          steps: ["Fungua ukurasa wa CPhT wa PTCB na ukurasa wa fundi wa famasia wa NHA.", "Andika kwa kila mmoja: jina la mtihani, jinsi ya kustahili na kila baada ya muda gani unahuisha cheti.", "Tafuta bodi ya famasia ya jimbo lako kwenye orodha ya NABP.", "Andika kile jimbo lako linachotaka kabla hujaanza kazi kama fundi.", "Chagua mtihani wako na mwezi unaoulenga."],
          words: [["Fundi wa famasia", "mfanyakazi aliyefunzwa anayemsaidia mfamasia kuandaa na kutoa dawa."], ["Mfamasia", "mtaalamu mwenye leseni anayekagua maagizo ya daktari na kuwashauri wagonjwa kuhusu dawa."], ["CPhT", "Certified Pharmacy Technician, cheo kinachotolewa na PTCB au NHA baada ya mitihani yao."], ["Bodi ya famasia ya jimbo", "ofisi ya jimbo inayotoa leseni kwa wafamasia na kuweka sheria kwa mafundi."]],
          slides: [
            { title: "Mafundi wanafanya nini", bullets: ["Kupokea na kuingiza maagizo ya daktari", "Kuhesabu, kuweka lebo na kupanga dawa stoo", "Kusaidia wateja; mfamasia anakagua na kushauri"] },
            { title: "Mitihani miwili ya kitaifa", bullets: ["PTCB: mtihani wa PTCE", "NHA: mtihani wa ExCPT", "Yote inatoa cheo cha CPhT"] },
            { title: "Jimbo lako linaamua", bullets: ["Usajili au leseni kabla ya kufanya kazi", "Mafundi wanaruhusiwa kufanya nini", "Tafuta bodi yako kwenye orodha ya NABP"] },
            { title: "Kagua kabla ya kulipa", bullets: ["Ada na sheria hubadilika", "Yote inauliza kuhusu makosa ya jinai au hatua za bodi", "Kozi hii inakuandaa; haitoi cheti"] }
          ],
          sources: [
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" },
            { name: "NHA: Certified Pharmacy Technician (ExCPT)", url: "https://www.nhanow.com/certifications/pharmacy-technician" },
            { name: "NABP: Bodi za famasia za majimbo", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Chora jedwali la safu mbili: PTCE na ExCPT. Jaza nani anautoa, jinsi ya kustahili na kila baada ya muda gani unahuisha, kutoka kurasa rasmi. Chini yake, andika kile bodi ya famasia ya jimbo lako inachotaka kabla hujaanza kazi kama fundi, na anwani ya tovuti ulipokipata.",
          youCanNow: "kusema mafundi wanafanya nini, kutaja mitihani miwili ya kitaifa na wanaoitoa, na kupata sheria za mafundi za jimbo lako.",
          quickCheck: [
            { objective: "O1", q: "Nani anatoa mtihani wa PTCE?", options: ["Ofisi ya magari ya jimbo lako", "Duka lolote la dawa", "PTCB, Pharmacy Technician Certification Board", "FDA"], answer: 2, why: "PTCB inatoa PTCE; ukiufaulu unapata CPhT ya PTCB." },
            { objective: "O1", q: "Nani anaamua kama lazima ujisajili kabla ya kufanya kazi kama fundi?", options: ["Bodi ya famasia ya jimbo lako", "Meneja wa duka", "Mteja", "Tangazo la mafunzo"], answer: 0, why: "Kila bodi ya famasia ya jimbo inaweka sheria za usajili na kazi ya mafundi." }
          ]
        },
        {
          title: "Kusoma agizo la daktari",
          objectives: ["O2"],
          minutes: 6,
          goal: "Taja sehemu za agizo la daktari la mazoezi na uandike upya maelekezo yake kwa maneno rahisi.",
          text: [
            "Agizo la daktari (prescription) lina sehemu maalum: jina la mgonjwa na tarehe ya kuzaliwa, jina la dawa, nguvu ya dawa (kwa mfano 10 mg), aina ya dawa (kidonge, kapsuli, maji), maelekezo (yanaitwa sig), idadi, idadi ya marudio, tarehe, na jina na sahihi ya aliyeandika agizo.",
            "Maelekezo mara nyingi yanatumia vifupisho vya Kilatini. Vinavyojulikana: po (kwa mdomo), bid (mara mbili kwa siku), tid (mara tatu kwa siku), qid (mara nne kwa siku), prn (inapohitajika), hs (wakati wa kulala). Lebo lazima iwe kwa maneno rahisi, kwa hiyo \"1 tab po bid\" inakuwa \"Meza kidonge 1 kwa mdomo mara mbili kwa siku.\"",
            "Baadhi ya vifupisho husababisha makosa, kwa hiyo vikundi vya usalama vinasema visitumike. Kwa mfano, \"QD\" (kila siku) imewahi kudhaniwa kuwa \"QID\" (mara nne kwa siku), na \"U\" ya units (vipimo) imesomwa kama sifuri. Pia angalia desimali: andika 0.5 mg (na sifuri mwanzoni), kamwe .5 mg, na kamwe 5.0 mg (sifuri ya mwisho inaweza kusomwa kama 50).",
            "Kitu chochote kikiwa hakiko wazi, kinakosekana au kinaonekana si sawa, usikisie. Kionyeshe kwa mfamasia."
          ],
          steps: ["Kagua jina la mgonjwa na tarehe ya kuzaliwa.", "Tafuta jina la dawa, nguvu yake na aina ya dawa.", "Soma sig na uiandike upya kwa maneno rahisi.", "Kagua idadi, marudio, tarehe na aliyeandika agizo.", "Onyesha kwa mfamasia kitu chochote kisicho wazi au kinachokosekana."],
          words: [["Sig", "maelekezo kwenye agizo la daktari yanayomwambia mgonjwa jinsi ya kutumia dawa."], ["Nguvu ya dawa (strength)", "kiasi cha dawa katika kila kipimo, kwa mfano 10 mg katika kidonge kimoja."], ["Aina ya dawa (dosage form)", "umbo la dawa: kidonge, kapsuli, maji, krimu na kadhalika."], ["Marudio (refill)", "kurudia agizo lilelile kwa ruhusa."], ["Aliyeandika agizo (prescriber)", "mtu mwenye leseni aliyeandika agizo, kama daktari au muuguzi mtaalamu (nurse practitioner)."]],
          slides: [
            { title: "Sehemu za agizo la daktari", bullets: ["Jina la mgonjwa na tarehe ya kuzaliwa", "Dawa, nguvu na aina ya dawa", "Sig, idadi, marudio, tarehe, aliyeandika agizo"] },
            { title: "Vifupisho vya kawaida", bullets: ["po = kwa mdomo  •  prn = inapohitajika", "bid = mara mbili kwa siku  •  tid = mara tatu", "qid = mara nne  •  hs = wakati wa kulala"] },
            { title: "Uandishi unaoleta makosa", bullets: ["QD inaweza kusomwa kama QID: andika \"daily\" (kila siku)", "U inaweza kufanana na 0: andika \"units\"", "Andika 0.5 (sifuri mwanzoni), kamwe 5.0 (sifuri mwishoni)"] },
            { title: "Ukiwa na shaka", bullets: ["Usikisie", "Kionyeshe kwa mfamasia"] }
          ],
          tryIt: "Mazoezi tu, dawa za kubuni. Andika upya kila sig kwa maneno rahisi: (1) \"Drug X 1 tab po bid\" (2) \"Drug Y 2 caps po hs\" (3) \"Drug Z 1 tab po q6h prn\". Majibu: (1) Meza kidonge 1 kwa mdomo mara mbili kwa siku. (2) Meza kapsuli 2 kwa mdomo wakati wa kulala. (3) Meza kidonge 1 kwa mdomo kila saa 6 inapohitajika. Kisha orodhesha sehemu zinazokosekana katika noti hii: \"Drug X 10 mg, #30, Dr. Lee\".",
          youCanNow: "kutaja sehemu za agizo la daktari, kusoma vifupisho vya kawaida vya sig, kutambua uandishi unaoleta makosa na kuonyesha maagizo yasiyo wazi.",
          quickCheck: [
            { objective: "O2", q: "Katika mazoezi, \"1 tab po tid\" inamaanisha nini?", options: ["Meza kidonge 1 wakati wa kulala", "Meza kidonge 1 kwa mdomo mara tatu kwa siku", "Meza kidonge 1 kila baada ya siku moja", "Meza vidonge 3 mara moja"], answer: 1, why: "po ni kwa mdomo na tid ni mara tatu kwa siku." },
            { objective: "O2", q: "Agizo la mazoezi halina maelekezo (sig). Unafanya nini?", options: ["Kuandika maelekezo ya kawaida wewe mwenyewe", "Kuacha lebo tupu", "Kumuuliza mteja jinsi anavyoitumia", "Kulionyesha kwa mfamasia"], answer: 3, why: "Sehemu inayokosekana au isiyo wazi haikisiwi kamwe; mfamasia anaishughulikia pamoja na aliyeandika agizo." }
          ]
        },
        {
          title: "Hesabu za famasia za mazoezi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tatua maswali ya mazoezi tu ya kubadilisha vipimo, idadi na siku za dawa.",
          text: [
            "Mazoezi tu: hizi ni namba za kubuni kwa mazoezi ya mtihani, kamwe si maelekezo kwa mgonjwa halisi. Katika kazi halisi mfamasia anakagua kila hesabu.",
            "Vipimo vya kujua: gramu 1 (g) = miligramu 1,000 (mg). Lita 1 (L) = mililita 1,000 (mL). Kilo 1 (kg) ni kama pauni 2.2 (lb). Kijiko kidogo 1 (tsp) = 5 mL na kijiko kikubwa 1 (tbsp) = 15 mL. Aunsi 1 ya majimaji (fl oz) ni kama 30 mL.",
            "Siku za dawa (days' supply) zinaonyesha dawa itadumu muda gani: siku za dawa = idadi ÷ kiasi kinachotumika kwa siku. Mazoezi: Dawa X, kidonge 1 mara mbili kwa siku, vidonge 60. Kinachotumika kwa siku = 2. 60 ÷ 2 = siku 30. Idadi inapatikana kwa njia ya kinyume: idadi = kiasi kwa siku × siku. Mazoezi: Dawa Y, kapsuli 1 mara tatu kwa siku kwa siku 10 = 3 × 10 = kapsuli 30.",
            "Andika vipimo kila wakati, panga swali kabla ya kubonyeza kikokotoo, na ujiulize kama jibu lina maana. Vidonge 6,000 kwa siku 30 havina maana."
          ],
          steps: ["Andika unachojua, pamoja na vipimo.", "Andika unachohitaji kutafuta.", "Badilisha kuwa vipimo vilevile ikihitajika.", "Panga swali, kisha kokotoa.", "Jiulize: je, jibu lina maana?"],
          words: [["mg", "miligramu: sehemu moja ya elfu ya gramu."], ["mL", "mililita: sehemu moja ya elfu ya lita."], ["Siku za dawa (days' supply)", "agizo la daktari litadumu siku ngapi likitumiwa kama ilivyoelekezwa."], ["Kubadilisha vipimo", "kugeuza namba kutoka kipimo kimoja kwenda kingine, kama gramu kwenda miligramu."]],
          slides: [
            { title: "Mazoezi tu", bullets: ["Namba za kubuni kwa mazoezi ya mtihani", "Mfamasia anakagua kila hesabu halisi"] },
            { title: "Vipimo vya kujua", bullets: ["1 g = 1,000 mg  •  1 L = 1,000 mL", "1 kg ≈ 2.2 lb  •  1 fl oz ≈ 30 mL", "1 tsp = 5 mL  •  1 tbsp = 15 mL"] },
            { title: "Siku za dawa na idadi", bullets: ["Siku = idadi ÷ kiasi kwa siku", "Vidonge 60 ÷ 2 kwa siku = siku 30", "Idadi = kwa siku × siku: 3 × 10 = 30"] },
            { title: "Fanya kazi kama mtaalamu", bullets: ["Andika vipimo kila wakati", "Panga kabla ya kukokotoa", "Kagua kama jibu lina maana"] }
          ],
          tryIt: "Mazoezi tu, namba za kubuni. Tatua na uonyeshe hatua zako: (1) 2.5 g = ? mg (2) 3 tsp = ? mL (3) 132 lb = ? kg (4) Dawa X, kidonge 1 mara 3 kwa siku, vidonge 90: siku za dawa? (5) Dawa Y, kapsuli 2 mara mbili kwa siku kwa siku 14: idadi? Majibu: 2,500 mg; 15 mL; 60 kg; siku 30; kapsuli 56.",
          youCanNow: "kubadilisha vipimo vya kawaida na kukokotoa siku za dawa na idadi katika maswali ya mazoezi, ukionyesha hatua zako.",
          quickCheck: [
            { objective: "O3", q: "Mazoezi tu: gramu 0.5 zina miligramu ngapi?", options: ["5 mg", "50 mg", "5,000 mg", "500 mg"], answer: 3, why: "1 g = 1,000 mg, kwa hiyo 0.5 × 1,000 = 500 mg." },
            { objective: "O3", q: "Mazoezi tu: Dawa X, kidonge 1 mara mbili kwa siku, vidonge 28. Siku za dawa ni ngapi?", options: ["Siku 14", "Siku 28", "Siku 56", "Siku 7"], answer: 0, why: "Siku za dawa = vidonge 28 ÷ 2 kwa siku = siku 14." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi, maagizo ya daktari na hesabu",
        questions: [
          { objective: "O1", q: "NHA inatoa mtihani gani kwa mafundi wa famasia?", options: ["PTCE", "CPC", "ExCPT", "NCLEX"], answer: 2, why: "Mtihani wa NHA wa fundi wa famasia ni ExCPT." },
          { objective: "O1", q: "Unapata wapi bodi ya famasia ya jimbo lako?", options: ["Kwenye orodha ya NABP ya bodi za famasia", "Kwenye tangazo la kampuni ya dawa", "Kwenye tovuti ya kuponi", "Nyuma ya chupa ya vidonge"], answer: 0, why: "NABP ina orodha ya kila bodi ya famasia ya jimbo pamoja na tovuti yake." },
          { objective: "O2", q: "\"prn\" inamaanisha nini kwenye agizo la daktari la mazoezi?", options: ["Kwa mdomo", "Wakati wa kulala", "Mara mbili kwa siku", "Inapohitajika"], answer: 3, why: "prn ni inapohitajika." },
          { objective: "O2", q: "Ni njia ipi salama ya kuandika nguvu ya dawa?", options: [".5 mg", "0.5 mg", "5.0 mg", "5.00 mg"], answer: 1, why: "Weka sifuri mwanzoni na usiweke sifuri mwishoni, ili 0.5 mg isisomwe vibaya." },
          { objective: "O3", q: "Mazoezi tu: vijiko vikubwa 2 ni mililita ngapi?", options: ["10 mL", "15 mL", "30 mL", "60 mL"], answer: 2, why: "1 tbsp = 15 mL, kwa hiyo 2 tbsp = 30 mL." }
        ]
      }
    },
    {
      name: "Sura 2: Usalama, sheria na faragha",
      lessons: [
        {
          title: "Ukaguzi wa usalama: dawa sahihi kwa mgonjwa sahihi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kagua agizo la mazoezi dhidi ya agizo la daktari na uonyeshe tofauti yoyote.",
          text: [
            "Makosa mengi yanatokana na mteremko mdogo: mgonjwa asiye sahihi, dawa yenye jina linalofanana, nguvu isiyo sahihi, au chupa isiyo sahihi kutoka kwenye rafu. Mafundi husaidia kuyagundua kabla ya ukaguzi wa mwisho wa mfamasia.",
            "Tumia vitambulisho viwili vya mgonjwa, kama jina kamili na tarehe ya kuzaliwa, kila wakati unapopokea au kutoa agizo la daktari. Watu wawili wanaweza kuwa na jina moja.",
            "Kila pakiti ya dawa ina National Drug Code (NDC), namba ya sehemu tatu ya FDA (mamlaka ya chakula na dawa ya Marekani) inayotambulisha mtengenezaji, bidhaa na pakiti. Kulinganisha NDC kwenye chupa ya stoo na ile iliyo kwenye kompyuta (mara nyingi kwa kuskani barcode) kunathibitisha kuwa umechagua dawa, nguvu na pakiti sahihi. FDA inapanga kubadilisha NDC ziwe na muundo mmoja wa tarakimu 12 siku zijazo, kwa hiyo jifunze wazo lenyewe, si urefu mmoja.",
            "Angalia dawa zenye majina yanayofanana kwa maandishi au kwa sauti. Soma jina kamili, nguvu na aina kwenye chupa, si herufi za kwanza tu. Kitu chochote kisipolingana, simama na umwambie mfamasia."
          ],
          steps: ["Thibitisha vitambulisho viwili vya mgonjwa: jina na tarehe ya kuzaliwa.", "Linganisha jina la dawa kwenye chupa na agizo la daktari, herufi kwa herufi.", "Linganisha nguvu na aina ya dawa.", "Skani au linganisha NDC kwenye chupa ya stoo.", "Simama na uonyeshe tofauti yoyote kwa mfamasia."],
          words: [["NDC", "National Drug Code: namba ya sehemu tatu ya FDA kwa mtengenezaji wa dawa, bidhaa na pakiti."], ["Vitambulisho vya mgonjwa", "taarifa kama jina kamili na tarehe ya kuzaliwa zinazotumika kuhakikisha una mtu sahihi."], ["Dawa zinazofanana kwa jina", "dawa zenye majina yanayofanana kwa maandishi au kwa sauti na ni rahisi kuchanganywa."], ["Chupa ya stoo", "chombo kikubwa ambacho famasia inahesabu dawa kutoka ndani yake."]],
          slides: [
            { title: "Mteremko mdogo, madhara makubwa", bullets: ["Mgonjwa au nguvu isiyo sahihi", "Majina ya dawa yanayofanana", "Chupa isiyo sahihi kutoka kwenye rafu"] },
            { title: "Vitambulisho viwili vya mgonjwa", bullets: ["Jina kamili na tarehe ya kuzaliwa", "Wakati wa kupokea na wakati wa kutoa"] },
            { title: "Linganisha NDC", bullets: ["Namba ya sehemu tatu ya FDA: mtengenezaji, bidhaa, pakiti", "Iskani au uilinganishe na kompyuta", "Inathibitisha dawa, nguvu na pakiti"] },
            { title: "Soma lebo yote", bullets: ["Jina kamili, nguvu na aina", "Si herufi za kwanza tu", "Hazilingani? Simama na umwambie mfamasia"] }
          ],
          sources: [
            { name: "FDA: Orodha ya National Drug Code (NDC)", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory" }
          ],
          tryIt: "Mazoezi tu. Andika maagizo matatu ya mazoezi ya kubuni kwenye karatasi, kila moja likiwa na jina la mgonjwa, tarehe ya kuzaliwa, dawa, nguvu na NDC. Mwombe rafiki ayanakili kama \"lebo za chupa za stoo\" na abadilishe kwa siri taarifa moja katika mawili kati yake. Linganisha kila jozi kama ulivyojifunza na uzungushie duara kila tofauti.",
          youCanNow: "kukagua agizo la mazoezi dhidi ya agizo la daktari kwa vitambulisho viwili vya mgonjwa na NDC, na kuonyesha kila tofauti.",
          quickCheck: [
            { objective: "O4", q: "Jozi ipi ni vitambulisho viwili vya mgonjwa?", options: ["Jina kamili na tarehe ya kuzaliwa", "Jina na rangi anayoipenda", "Jina la dawa na nguvu yake", "Aina ya simu na barua pepe"], answer: 0, why: "Jina kamili na tarehe ya kuzaliwa hutumika pamoja mara nyingi kuthibitisha mgonjwa sahihi." },
            { objective: "O4", q: "NDC kwenye chupa ya stoo hailingani na kompyuta. Unafanya nini?", options: ["Kujaza tu; jina linakaribiana", "Kubadilisha kompyuta ilingane", "Kusimama na kumwambia mfamasia", "Kumpa mteja punguzo"], answer: 2, why: "NDC isiyolingana inaweza kumaanisha dawa, nguvu au pakiti isiyo sahihi, kwa hiyo unasimama na kuionyesha." }
          ]
        },
        {
          title: "Kazi yako, kazi ya mfamasia na dawa zinazodhibitiwa",
          objectives: ["O5"],
          minutes: 5,
          goal: "Panga kazi za mazoezi kama kazi ya fundi au kazi ya mfamasia.",
          text: [
            "Mafundi wanafanya kazi za kiufundi: kupokea na kuingiza maagizo ya daktari, kuhesabu, kuweka lebo, kusimamia stoo, kushughulikia bima na kusaidia kwenye sehemu ya malipo. Wafamasia wanafanya kazi ya kitabibu: ukaguzi wa mwisho, kumshauri mgonjwa jinsi ya kutumia dawa, madhara ya dawa, mwingiliano wa dawa na kila swali la \"Je, hii ni salama kwangu?\". Jimbo lako linaweka mpaka kamili, kwa hiyo jifunze sheria za jimbo lako.",
            "Kanuni rahisi: mteja akiuliza kuhusu afya yake au dawa yake, jibu ni \"Ngoja nikuitie mfamasia.\" Usitoe kamwe ushauri wako mwenyewe, hata kama unadhani unajua.",
            "Dawa zinazodhibitiwa (controlled substances) ni dawa ambazo Drug Enforcement Administration (DEA) ya serikali kuu inaziweka katika Ratiba (Schedules) I hadi V, kulingana na matumizi yake ya kitabibu yanayokubalika na hatari yake ya kutumiwa vibaya na uraibu. Dawa za Ratiba I hazina matumizi ya kitabibu yanayokubalika Marekani; dawa za Ratiba II zina hatari kubwa ya kutumiwa vibaya; hatari inapungua kuelekea Ratiba V. Zina sheria za ziada za kuhifadhi, kuhesabu, kumbukumbu na marudio, na majimbo yanaweza kuongeza zaidi.",
            "Kwa mitihani, jua ratiba tano, kwamba famasia inaweka kumbukumbu makini za kila dawa inayodhibitiwa, na kwamba upungufu wowote katika hesabu unaripotiwa kwa mfamasia mara moja."
          ],
          steps: ["Jiulize: hii ni kazi ya kiufundi au ni swali la afya?", "Ya kiufundi: ifanye kwa makini, ukifuata utaratibu wa duka na sheria za jimbo.", "Swali la afya au la dawa: mwite mfamasia.", "Dawa inayodhibitiwa: fuata sheria za ziada za kuhesabu, kumbukumbu na kuhifadhi.", "Kitu chochote kinachokosekana au cha ajabu: mwambie mfamasia mara moja."],
          words: [["Ushauri (counseling)", "mfamasia anapomweleza mgonjwa jinsi ya kutumia dawa na nini cha kuangalia."], ["Dawa inayodhibitiwa", "dawa ambayo sheria inaidhibiti kwa karibu zaidi kwa sababu inaweza kutumiwa vibaya au kusababisha uraibu."], ["DEA", "Drug Enforcement Administration, ofisi ya serikali kuu ya Marekani inayosimamia sheria za dawa zinazodhibitiwa."], ["Ratiba (schedule)", "moja ya makundi matano (I hadi V) ambamo dawa zinazodhibitiwa zinawekwa."]],
          slides: [
            { title: "Kazi ya fundi", bullets: ["Kuingiza, kuhesabu, kuweka lebo, kupanga stoo", "Bima na sehemu ya malipo", "Inafanywa kwa makini, kwa sheria za jimbo"] },
            { title: "Kazi ya mfamasia", bullets: ["Ukaguzi wa mwisho na ushauri", "Madhara na mwingiliano wa dawa", "Kila swali la \"Je, hii ni salama kwangu?\""] },
            { title: "Dawa zinazodhibitiwa", bullets: ["Ratiba za DEA I hadi V", "I: hakuna matumizi ya kitabibu; II: hatari kubwa ya kutumiwa vibaya", "Sheria za ziada: kuhifadhi, kuhesabu, kumbukumbu, marudio"] },
            { title: "Sema hivi kila wakati", bullets: ["\"Ngoja nikuitie mfamasia.\"", "Usitoe kamwe ushauri wako wa kitabibu"] }
          ],
          sources: [
            { name: "DEA: Ratiba za dawa (Drug scheduling)", url: "https://www.dea.gov/drug-information/drug-scheduling" },
            { name: "NABP: Bodi za famasia za majimbo (sheria za mafundi)", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Mazoezi tu. Panga haya kama Fundi au Mfamasia: (1) kuhesabu vidonge kwa agizo lililojazwa, (2) mteja anauliza kama anaweza kutumia dawa yake mpya pamoja na vidonge vyake vya mzio, (3) kupanga mzigo mpya stoo, (4) mteja anauliza atarajie madhara gani, (5) kuingiza agizo jipya la daktari. Majibu: 1, 3 na 5 Fundi; 2 na 4 Mfamasia. Kisha andika maneno kamili utakayosema kupeleka swali kwa mfamasia.",
          youCanNow: "kutofautisha kazi ya fundi na kazi ya mfamasia, kupeleka kila swali la afya kwa mfamasia, na kutaja ratiba tano za dawa zinazodhibitiwa.",
          quickCheck: [
            { objective: "O5", q: "Mteja anauliza kama dawa yake mpya ni salama pamoja na pombe. Unasema nini?", options: ["\"Itakuwa sawa tu.\"", "\"Angalia mtandaoni.\"", "\"Usinywe tena kamwe.\"", "\"Ngoja nikuitie mfamasia.\""], answer: 3, why: "Maswali kuhusu usalama na mwingiliano ni ya kitabibu; ni mfamasia tu anayeyajibu." },
            { objective: "O5", q: "Ofisi ipi ya serikali kuu inaweka dawa katika Ratiba I hadi V?", options: ["DEA", "Posta", "IRS", "Ofisi ya magari ya jimbo"], answer: 0, why: "DEA inasimamia ratiba za dawa zinazodhibitiwa." }
          ]
        },
        {
          title: "Faragha kwenye kaunta, na mpango wako wa kusoma",
          objectives: ["O6"],
          minutes: 5,
          goal: "Shiriki taarifa za mgonjwa tu na watu wanaozihitaji, na kile tu wanachohitaji.",
          text: [
            "Famasia ina taarifa za siri za afya: majina, tarehe za kuzaliwa, dawa, bima. HIPAA, sheria ya serikali kuu ya faragha ya afya, inazilinda. Wazo lake la \"kiwango cha chini kinachohitajika\" (minimum necessary) linamaanisha unatumia na kushiriki tu kile kinachohitajika kwa kazi hiyo.",
            "Kwenye kaunta: ongea kwa sauti ya chini, usisome majina ya dawa kwa sauti ili foleni isikie, na thibitisha vitambulisho viwili kabla ya kutoa mfuko. Kwenye simu: thibitisha nani anapiga kabla ya kushiriki chochote, na fuata utaratibu wa duka kuhusu nani anaweza kuchukua dawa kwa niaba ya mtu mwingine.",
            "Usiweke kamwe habari za wateja mtandaoni, usitafute kamwe rekodi ya jirani au ya mtu maarufu kwa udadisi, na ficha skrini na makaratasi yasionekane. Ripoti makosa ya faragha kwa mfamasia au afisa wa faragha mara moja.",
            "Sasa andaa kazi yako ya mwisho: mpango wako wa kusoma na wa mtihani na kitabu cha mazoezi."
          ],
          steps: ["Jiulize: je, mtu huyu anahitaji taarifa hii kwa kazi yake au kwa matibabu?", "Shiriki kiwango cha chini tu anachohitaji.", "Thibitisha vitambulisho viwili kabla ya kutoa dawa.", "Ongea kwa sauti ya chini na ficha skrini na makaratasi.", "Ripoti makosa ya faragha mara moja."],
          words: [["HIPAA", "sheria ya serikali kuu ya Marekani inayolinda faragha na usalama wa taarifa za afya."], ["PHI", "protected health information: taarifa za afya zinazoweza kumtambulisha mtu."], ["Kiwango cha chini kinachohitajika", "kutumia au kushiriki tu taarifa zinazohitajika kwa kazi hiyo."]],
          slides: [
            { title: "HIPAA katika famasia", bullets: ["Majina, tarehe za kuzaliwa, dawa, bima", "Shiriki kiwango cha chini kinachohitajika tu"] },
            { title: "Kwenye kaunta", bullets: ["Ongea kwa sauti ya chini", "Usisome majina ya dawa kwa sauti", "Vitambulisho viwili kabla ya kutoa mfuko"] },
            { title: "Kamwe", bullets: ["Kuweka habari za wateja mtandaoni", "Kutafuta rekodi kwa udadisi", "Kuacha skrini au makaratasi yaonekane"] },
            { title: "Kazi ya mwisho", bullets: ["Mtihani wako na sheria za jimbo lako", "Tarehe za kusoma kila wiki hadi tarehe ya mtihani", "Kitabu cha mazoezi kimeambatishwa"] }
          ],
          sources: [
            { name: "HHS: HIPAA kwa wataalamu (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" },
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" }
          ],
          tryIt: "Kazi ya mwisho. Andika mpango wako wa kusoma na wa mtihani: mtihani (PTCE au ExCPT), kile bodi ya jimbo lako inachotaka, na tarehe za kusoma kila wiki hadi tarehe unayolenga ya mtihani. Ambatisha kitabu chako cha mazoezi: maagizo 5 ya daktari ya kubuni uliyoyasoma na kuyakagua, maswali 10 ya hesabu ya mazoezi yenye hatua zako, na maswali 5 ya wateja ambayo ungeyapeleka kwa mfamasia. Usitumie taarifa halisi za mgonjwa.",
          youCanNow: "kulinda faragha ya mgonjwa kwenye kaunta na kwenye simu, na kufuata mpango wako mwenyewe ulioandikwa kuelekea mtihani wa fundi wa famasia.",
          quickCheck: [
            { objective: "O6", q: "Mpigaji anasema ni jirani wa mteja na anauliza mteja huyo alichukua dawa gani. Unafanya nini?", options: ["Kumwambia; ni mwema tu", "Kumsomea orodha yake", "Kutoshiriki chochote na kufuata utaratibu wa duka", "Kumwambia dawa ya kwanza tu"], answer: 2, why: "HIPAA inalinda taarifa zake; jirani hana haki ya kuzipata." },
            { objective: "O6", q: "Nini kinasaidia kulinda faragha kwenye kaunta?", options: ["Kusoma majina ya dawa kwa sauti kubwa", "Kuongea kwa sauti ya chini na kuthibitisha vitambulisho viwili", "Kuacha mifuko wazi kwenye kaunta", "Kuonyesha skrini kwa foleni"], answer: 1, why: "Sauti ya chini na ukaguzi wa utambulisho huweka taarifa za afya kuwa siri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Usalama, sheria na faragha",
        questions: [
          { objective: "O4", q: "NDC inatambulisha nini?", options: ["Bima ya mgonjwa", "Leseni ya mfamasia", "Anwani ya duka", "Mtengenezaji wa dawa, bidhaa na pakiti"], answer: 3, why: "NDC ni namba ya sehemu tatu ya FDA kwa mtengenezaji, bidhaa na pakiti." },
          { objective: "O4", q: "Wateja wawili wana jina moja. Unahakikishaje unampa mfuko mtu sahihi?", options: ["Kuomba pia tarehe ya kuzaliwa", "Kumpa aliyefika kwanza", "Kuuliza dawa ni ya nini", "Kuangalia viatu vyao"], answer: 0, why: "Kitambulisho cha pili kama tarehe ya kuzaliwa kinatenganisha watu wenye jina moja." },
          { objective: "O5", q: "Kazi ipi ni ya mfamasia?", options: ["Kupanga rafu", "Kumshauri mgonjwa kuhusu madhara ya dawa", "Kupokea malipo", "Kuhesabu vidonge"], answer: 1, why: "Kushauri kuhusu madhara ni kazi ya kitabibu ya mfamasia." },
          { objective: "O5", q: "Hesabu ya dawa inayodhibitiwa imepungua. Unafanya nini?", options: ["Kurekebisha namba katika kumbukumbu", "Kuipuuza hadi mwezi ujao", "Kumwambia mfamasia mara moja", "Kuagiza zaidi kimyakimya"], answer: 2, why: "Dawa zinazodhibitiwa zina kumbukumbu kali; upungufu wowote unaripotiwa mara moja." },
          { objective: "O6", q: "\"Kiwango cha chini kinachohitajika\" kinamaanisha nini katika famasia?", options: ["Kutumia mifuko midogo kabisa", "Kujaza maagizo machache kabisa", "Kutoza bei ya chini kabisa", "Kushiriki tu taarifa zinazohitajika kwa kazi hiyo"], answer: 3, why: "Chini ya HIPAA unatumia na kushiriki tu kile kinachohitajika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Fundi wa Famasia",
    questions: [
      { objective: "O1", q: "Ukifaulu PTCE unapata cheo gani?", options: ["Certified Pharmacy Technician (CPhT) kutoka PTCB", "Mfamasia aliyesajiliwa", "Certified Professional Coder", "Muuguzi mwenye leseni (LPN)"], answer: 0, why: "PTCB inatoa CPhT kwa watu wanaofaulu PTCE." },
      { objective: "O1", q: "Sheria za mafundi ni tofauti katika kila jimbo. Unakagua zako wapi?", options: ["Tangazo la dawa", "Bodi ya famasia ya jimbo lako", "Rafiki katika jimbo lingine", "Ukurasa wa ajira wa DEA"], answer: 1, why: "Kila bodi ya famasia ya jimbo inaweka sheria za mafundi." },
      { objective: "O1", q: "Kozi hii inakufanyia nini?", options: ["Inakusajili na jimbo lako", "Inakupa CPhT", "Inakuandaa kwa mtihani wa fundi", "Inakuruhusu kuwashauri wagonjwa"], answer: 2, why: "Kozi inakuandaa; mtihani na jimbo ndivyo vinavyotoa vyeti." },
      { objective: "O2", q: "Kipi SI sehemu ya kawaida ya agizo la daktari?", options: ["Jina la mgonjwa", "Nguvu ya dawa", "Maelekezo (sig)", "Duka analolipenda mgonjwa"], answer: 3, why: "Agizo la daktari lina mgonjwa, dawa, nguvu, aina, sig, idadi, marudio, tarehe na aliyeandika agizo." },
      { objective: "O2", q: "Katika mazoezi, \"hs\" kwenye agizo la daktari inamaanisha:", options: ["Wakati wa kulala", "Kwa mdomo", "Inapohitajika", "Mara nne kwa siku"], answer: 0, why: "hs ni wakati wa kulala." },
      { objective: "O2", q: "Kwa nini \"QD\" iko kwenye orodha za vifupisho visivyopaswa kutumika?", options: ["Ni ndefu mno", "Inaweza kusomwa kama QID (mara nne kwa siku)", "Inamaanisha kwa mdomo", "Ni jina la dawa"], answer: 1, why: "QD imewahi kudhaniwa kuwa QID; kuandika \"daily\" (kila siku) kunazuia kosa hilo." },
      { objective: "O2", q: "Mazoezi tu: \"Drug X 2 tabs po bid\" kwa maneno rahisi ni:", options: ["Meza vidonge 2 wakati wa kulala", "Meza kidonge 1 mara mbili kwa siku", "Meza vidonge 2 kwa mdomo mara mbili kwa siku", "Meza vidonge 2 kila saa 2"], answer: 2, why: "po ni kwa mdomo na bid ni mara mbili kwa siku." },
      { objective: "O3", q: "Mazoezi tu: kijiko kidogo 1 ni mililita ngapi?", options: ["1 mL", "15 mL", "30 mL", "5 mL"], answer: 3, why: "1 tsp = 5 mL." },
      { objective: "O3", q: "Mazoezi tu: Dawa X, kapsuli 1 mara 4 kwa siku, kapsuli 120. Siku za dawa?", options: ["Siku 30", "Siku 40", "Siku 120", "Siku 4"], answer: 0, why: "120 ÷ 4 kwa siku = siku 30." },
      { objective: "O3", q: "Mazoezi tu: gramu 3 ni miligramu ngapi?", options: ["30 mg", "300 mg", "3,000 mg", "0.003 mg"], answer: 2, why: "1 g = 1,000 mg, kwa hiyo 3 g = 3,000 mg." },
      { objective: "O3", q: "Mazoezi tu: 176 lb ni kama kilo ngapi?", options: ["80 kg", "88 kg", "176 kg", "387 kg"], answer: 0, why: "176 ÷ 2.2 = 80 kg." },
      { objective: "O4", q: "Kwa nini unalinganisha NDC kwenye chupa ya stoo?", options: ["Kujua bei", "Kuthibitisha dawa, nguvu na pakiti sahihi", "Kupata anwani ya mgonjwa", "Haihitajiki"], answer: 1, why: "NDC inatambulisha bidhaa na pakiti hasa." },
      { objective: "O4", q: "Dawa mbili zina majina yanayoanza kwa namna moja. Nini kinamlinda mgonjwa?", options: ["Kusoma herufi za kwanza tu", "Kuchukua chupa iliyo karibu nawe", "Kumwomba mteja achague", "Kusoma jina kamili, nguvu na aina"], answer: 3, why: "Majina yanayofanana yanagunduliwa kwa kusoma lebo yote." },
      { objective: "O4", q: "Unaona tofauti kati ya agizo na chupa. Unafanya nini?", options: ["Kusimama na kuionyesha kwa mfamasia", "Kumaliza haraka na kutumaini", "Kurekebisha agizo la daktari wewe mwenyewe", "Kutupa chupa"], answer: 0, why: "Tofauti yoyote inasimamisha kazi hadi mfamasia aikague." },
      { objective: "O5", q: "Mteja anauliza kama dawa zake mbili ni salama zikitumiwa pamoja. Nani anajibu?", options: ["Fundi", "Mteja mwingine", "Mfamasia", "Mpokea malipo (cashier)"], answer: 2, why: "Maswali ya mwingiliano wa dawa ni ya kitabibu na yanapelekwa kwa mfamasia." },
      { objective: "O5", q: "Dawa zinazodhibitiwa za Ratiba I ni:", options: ["Dawa zenye hatari ndogo kabisa ya kutumiwa vibaya", "Dawa zisizo na matumizi ya kitabibu yanayokubalika Marekani", "Vitamini", "Dawa zote za agizo la daktari"], answer: 1, why: "Dawa za Ratiba I hazina matumizi ya kitabibu yanayokubalika Marekani na zina hatari kubwa ya kutumiwa vibaya." },
      { objective: "O5", q: "Kazi ipi ni ya fundi?", options: ["Kushauri kuhusu madhara", "Kufanya ukaguzi wa mwisho", "Kushauri kuhusu mwingiliano wa dawa", "Kuingiza agizo jipya la daktari kwenye kompyuta"], answer: 3, why: "Kuingiza maagizo ni kazi ya kiufundi; mfamasia anakagua na kushauri." },
      { objective: "O6", q: "Sheria ipi inalinda taarifa za afya za mgonjwa?", options: ["HIPAA", "OSHA", "Clean Air Act (sheria ya hewa safi)", "Sheria ya kodi"], answer: 0, why: "HIPAA inalinda faragha ya taarifa za afya." },
      { objective: "O6", q: "Mtu maarufu anachukua dawa katika duka lako. Unafanya nini?", options: ["Kutafuta rekodi yake kuona anatumia nini", "Kuweka mtandaoni kwamba alikuja", "Kumhudumia kama mteja yeyote na kutoshiriki chochote", "Kuwaambia marafiki zako"], answer: 2, why: "Kuangalia au kushiriki rekodi bila sababu ya kazi kunavunja sheria za HIPAA." },
      { objective: "O6", q: "Unaona mfanyakazi mwenzako aliacha makaratasi ya mteja kwenye kaunta. Unafanya nini?", options: ["Kuyaacha", "Kuyasoma", "Kumpa mteja anayefuata", "Kuyaficha yasionekane na kumwambia mfamasia"], answer: 3, why: "Linda taarifa na uripoti kosa la faragha." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 7, 8, 11, 14, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mpango wa kusoma na wa mtihani", objective: "O1", notYet: "Hakuna mtihani uliotajwa, au sheria za jimbo zinakosekana au zimekisiwa.", meets: "Anataja mtihani na anayeutoa, sharti la bodi ya jimbo pamoja na anwani ya tovuti yake, na tarehe za kila wiki hadi tarehe ya mtihani.", exceeds: "Pia anataja programu ya mafunzo na jinsi atakavyotimiza masharti ya kustahili mtihani." },
      { name: "Maagizo ya daktari yaliyosomwa", objective: "O2", notYet: "Chini ya maagizo 4 kati ya 5 yamesomwa sahihi, au sehemu inayokosekana haikuonyeshwa.", meets: "Angalau maagizo 4 kati ya 5 ya mazoezi yana sehemu zote zimetajwa na maelekezo kwa maneno rahisi.", exceeds: "Yote 5 ni sahihi, na kila kifupisho kinacholeta makosa kimetambuliwa." },
      { name: "Hesabu za mazoezi", objective: "O3", notYet: "Chini ya 8 kati ya 10 sahihi, au hakuna hatua zilizoonyeshwa.", meets: "Angalau maswali 8 kati ya 10 ya mazoezi ni sahihi, pamoja na vipimo na hatua.", exceeds: "10 kati ya 10 sahihi, na ukaguzi wa \"je, lina maana?\" umeandikwa kwa kila jibu." },
      { name: "Ukaguzi wa usalama", objective: "O4", notYet: "Tofauti iliyowekwa makusudi haikugunduliwa.", meets: "Kila tofauti iliyowekwa makusudi katika jina, nguvu au NDC imezungushiwa duara.", exceeds: "Anaeleza jinsi kila tofauti ingeweza kumdhuru mgonjwa." },
      { name: "Maswali ya mfamasia", objective: "O5", notYet: "Anatoa ushauri wake mwenyewe kwa swali la afya.", meets: "Anaorodhesha maswali 5 ya wateja yanayopelekwa kwa mfamasia na maneno ya kuyakabidhi.", exceeds: "Pia anaeleza sheria za ziada za dawa zinazodhibitiwa." },
      { name: "Faragha", objective: "O6", notYet: "Anatumia taarifa halisi za mgonjwa mahali popote katika kitabu cha mazoezi.", meets: "Anatumia taarifa za kubuni tu.", exceeds: "Anaorodhesha tabia tatu za kwenye kaunta au simu zinazolinda faragha." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiunga na programu ya mafunzo ya fundi wa famasia au kujisajili na bodi ya jimbo lao ndani ya siku 90",
      "Wanafunzi wanaofaulu PTCE au ExCPT (wanavyoripoti wenyewe)",
      "Wanafunzi wanaoajiriwa kama mafundi wa famasia au mafundi wanafunzi ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa kurasa za PTCB, NHA, NABP na bodi ya jimbo",
      "Karatasi, kalamu na kikokotoo cha kawaida",
      "Maagizo ya daktari ya kubuni na lebo za stoo zilizochapishwa kwa mazoezi ya ukaguzi wa usalama",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Weka kila dawa na kila namba kuwa za kubuni; usijibu maswali ya wanafunzi kuhusu dawa zao wenyewe. Wapeleke kwa mfamasia wao.",
      "Chapisha ukurasa wa mafundi wa bodi ya famasia ya jimbo lako ili kikundi kione sheria zake halisi.",
      "Weka tofauti makusudi (jina, nguvu, NDC) katika lebo za mazoezi na waache wanafunzi wawili wawili wazitafute.",
      "Waambie wanafunzi waseme \"Ngoja nikuitie mfamasia\" kwa sauti katika maigizo.",
      "Wanafunzi wenye rekodi ya uhalifu: waambie wasome sheria za PTCB, NHA na bodi ya jimbo lao kuhusu kutaja historia yao kabla ya kulipia mafunzo.",
      "Pima kazi ya mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
