"use strict";

// Koach Learn course (Swahili translation of shared/health-literacy.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "health-literacy-sw",
  lang: "sw",
  translationOf: "health-literacy",
  category: "Seniors and Technology",
  name: "Elimu ya Afya: Kuelewa Huduma Yako ya Afya",
  skills: "Kupata taarifa za afya zinazoaminika, Kujiandaa kwa ziara ya kumwona daktari, Kuuliza maswali na kuhakikisha umeelewa, Kusoma lebo za dawa na kuweka orodha ya dawa, Kutumia matokeo ya vipimo na tovuti za wagonjwa, Kuelewa maneno ya bima ya afya",
  outcome: "kujiandaa kwa ziara ya daktari ukiwa na maelezo ya dalili, orodha ya maswali na orodha ya dawa, kuuliza maswali hadi uelewe, kurudia mpango kwa maneno yako mwenyewe, na kupata majibu yanayoaminika na mtu sahihi wa kumuuliza kuhusu dawa, matokeo ya vipimo na gharama.",
  about: [
    "Elimu ya afya ni uwezo wa kupata, kuelewa na kutumia taarifa za afya ili kufanya maamuzi kwa ajili yako na watu unaowatunza. Ni ujuzi ambao mtu yeyote anaweza kujifunza. Hata madaktari huchanganyikiwa na maneno ya kitabibu yaliyo nje ya fani yao.",
    "Kozi hii ni ya kila mtu: wazee wanaotumia dawa kadhaa, vijana wanaokwenda kwa daktari peke yao kwa mara ya kwanza, wanajeshi wastaafu (veterans) wanaotumia huduma za VA, wafanyakazi wanaochagua mpango wa bima ya afya, watu wanaorudi nyumbani kutoka gerezani wanaohitaji kuanza tena matibabu, na yeyote aliyewahi kutoka kwa daktari akijiuliza \"Amesema nini sasa hivi?\"",
    "Utajifunza jinsi ya kutambua taarifa za afya zinazoaminika, kujiandaa kwa ziara, kuuliza maswali mazuri, kusoma lebo ya dawa, kutumia tovuti ya wagonjwa (patient portal) na kuelewa maneno ya bima. Kozi hii inafundisha ujuzi; haitoi ushauri wa kitabibu. Kila wakati kagua maamuzi kuhusu afya yako na daktari, muuguzi au mfamasia wako.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza karatasi ya ziara ya ukurasa mmoja kwa miadi halisi au ya mazoezi: maelezo mafupi kuhusu dalili au wasiwasi wako (ulianza lini, nini kinaufanya uwe bora au mbaya zaidi), maswali yako matatu muhimu zaidi, na orodha kamili ya dawa (dawa za daktari, dawa za dukani bila agizo la daktari, vitamini, virutubisho na mzio). Baada ya ziara (au mazoezi na rafiki), andika mpango kwa maneno yako mwenyewe: tatizo ni nini, unahitaji kufanya nini, na kwa nini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee wanaotumia dawa kadhaa, vijana wanaokwenda kwa daktari peke yao kwa mara ya kwanza, wanajeshi wastaafu wanaotumia huduma za VA, wafanyakazi wanaochagua mpango wa bima ya afya, watu wanaorudi nyumbani kutoka gerezani wanaohitaji kuanza tena matibabu, na walezi.",
    startingPoint: "Wanakwenda kwa daktari na wanatumia dawa, lakini mara nyingi wanatoka kwenye ziara bila kuwa na uhakika wa kilichosemwa, hawana orodha kamili ya dawa, hawajawahi kutumia tovuti ya wagonjwa na maneno ya bima yanawachanganya.",
    gap: "Kutoelewa taarifa za afya kunaleta makosa ya dawa, kukosa matibabu na gharama za kushtukiza. Wanafunzi wanahitaji kupata taarifa zinazoaminika, kujiandaa kwa ziara, kuuliza hadi waelewe na kujua wamuulize nani kuhusu dawa, matokeo na gharama, ili washiriki katika maamuzi kuhusu afya yao na ya familia zao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Si ushauri wa kitabibu; kila uamuzi wa afya unakaguliwa na daktari, muuguzi au mfamasia",
      "Faragha: hakuna taarifa za afya wala nywila za tovuti ya wagonjwa zinazoshirikiwa darasani au kuandikwa kwenye zana za AI",
      "Vifaa: simu au kompyuta; baadhi ya wanafunzi bado hawana tovuti ya wagonjwa",
      "Lugha: baadhi ya wanafunzi wanahitaji mkalimani wakati wa ziara"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa tovuti au chapisho kuhusu afya", action: "kukagua kama chanzo kinaaminika na kutafuta neno la afya kwenye tovuti inayoaminika kama medlineplus.gov", standard: "ukiandika maana yake kwa maneno yako mwenyewe" },
    { id: "O2", condition: "Kabla ya ziara ya kumwona daktari", action: "kuandika karatasi ya ziara yenye wasiwasi wako, maswali yako matatu muhimu zaidi na orodha kamili ya dawa", standard: "ikiwa na lini dalili ilianza na nini kinaifanya iwe bora au mbaya zaidi" },
    { id: "O3", condition: "Wakati wa ziara au mchezo wa kuigiza", action: "kuuliza maswali hadi uelewe na kurudia mpango kwa maneno yako mwenyewe", standard: "ukieleza tatizo ni nini, ufanye nini na kwa nini" },
    { id: "O4", condition: "Ukipewa dawa, vitamini au kirutubisho", action: "kusoma lebo na kuiongeza kwenye orodha yako ya dawa ukiwa na jina, kipimo, mara ngapi, ni ya nini na onyo moja", standard: "ukiwa na swali moja lililoandikwa kwa ajili ya mfamasia" },
    { id: "O5", condition: "Ukitumia tovuti ya wagonjwa au kliniki yako", action: "kupata matokeo ya kipimo au maelezo ya ziara na kuandika maswali kuyahusu", standard: "ukiwa na angalau maswali mawili kwa mtoa huduma wako" },
    { id: "O6", condition: "Ukipewa maneno ya kawaida ya bima ya afya", action: "kueleza maneno kama deductible, copay na in-network na kutaja wa kumuuliza kuhusu gharama", standard: "kwa maneno yako mwenyewe bila msaada" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiandaa na kuongea na mtoa huduma wako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata taarifa za afya unazoweza kuziamini",
          minutes: 5,
          goal: "Tofautisha chanzo cha taarifa za afya kinachoaminika na kisichoaminika.",
          text: [
            "Taarifa za afya ziko kila mahali: tovuti, mitandao ya kijamii, matangazo ya TV, marafiki na chatbot za AI. Baadhi ni nzuri sana. Nyingine ni za zamani, si sahihi, au zinajaribu kukuuzia kitu.",
            "Mahali pazuri pa bure pa kuanzia nchini Marekani: MedlinePlus (medlineplus.gov) kutoka Maktaba ya Kitaifa ya Tiba (National Library of Medicine), CDC (cdc.gov), na Taasisi za Kitaifa za Afya (nih.gov). Tovuti rasmi za serikali ya Marekani huishia na .gov. Hospitali, vyuo vikuu na vikundi vya kitabibu vinavyojulikana mara nyingi ni vizuri pia.",
            "Uliza maswali manne kuhusu chanzo chochote: Nani aliandika? Kilisasishwa lini? Kinajaribu kuniuzia kitu? Kinakubaliana na vyanzo vingine vinavyoaminika? Msaidizi wa AI anaweza kueleza neno gumu la kitabibu kwa lugha rahisi, lakini anaweza kukosea. Kagua anachosema kwenye tovuti inayoaminika, na usiandike kamwe jina lako kamili, kitambulisho au namba za bima ndani yake. Daktari au mfamasia wako ndiye mwenye neno la mwisho kwako."
          ],
          steps: ["Tafuta nani aliyetengeneza ukurasa.", "Tafuta tarehe uliposasishwa mara ya mwisho.", "Kagua kama unauza kitu.", "Linganisha na MedlinePlus au tovuti nyingine ya .gov.", "Peleka maswali yako kwa daktari au mfamasia wako."],
          words: [["Elimu ya afya (health literacy)", "uwezo wa kupata, kuelewa na kutumia taarifa za afya ili kufanya maamuzi."], ["MedlinePlus", "tovuti ya bure ya serikali ya Marekani yenye taarifa za afya, kutoka Maktaba ya Kitaifa ya Tiba."]],
          slides: [
            { title: "Elimu ya afya ni ujuzi", bullets: ["Kupata taarifa za afya", "Kuzielewa", "Kuzitumia kufanya maamuzi"] },
            { title: "Mahali panapoaminika pa kuanzia", bullets: ["medlineplus.gov", "cdc.gov na nih.gov", "Tovuti rasmi za Marekani huishia na .gov"] },
            { title: "Maswali manne kwa chanzo chochote", bullets: ["Nani aliandika?", "Kilisasishwa lini?", "Kinauza kitu?", "Kinakubaliana na vyanzo vingine vinavyoaminika?"] },
            { title: "AI inaweza kueleza, si kuamua", bullets: ["Itumie kueleza maneno magumu", "Kagua kwenye tovuti inayoaminika", "Daktari au mfamasia wako ana neno la mwisho"] }
          ],
          sources: [
            { name: "MedlinePlus: Health Literacy", url: "https://medlineplus.gov/healthliteracy.html" },
            { name: "CDC: What Is Health Literacy?", url: "https://www.cdc.gov/health-literacy/php/about/index.html" }
          ],
          tryIt: "Chagua neno la afya ulilowahi kulisikia lakini hulielewi vizuri (kwa mfano shinikizo la damu, kolesteroli au pumu). Litafute kwenye medlineplus.gov na uandike maana yake kwa sentensi moja kwa maneno yako mwenyewe.",
          youCanNow: "kupata taarifa za afya kwenye tovuti zinazoaminika na kukagua chanzo chochote kwa maswali manne rahisi.",
          quickCheck: [
            { objective: "O1", q: "Ni kipi kinachofanya tovuti ya afya iaminike zaidi?", options: ["Inauza bidhaa kwenye kila ukurasa", "Ina alama nyingi za mshangao", "Inaonyesha nani aliandika na ilisasishwa lini mara ya mwisho", "Inaahidi tiba kamili"], answer: 2, why: "Kujua nani aliandika na lini kunakusaidia kupima taarifa." },
            { objective: "O1", q: "Rafiki anashiriki chapisho linalosema chai fulani inatibu shinikizo la damu. Ungefanya nini?", options: ["Kuacha dawa yako ya shinikizo la damu", "Kuishiriki na familia", "Kununua chai hiyo mara moja", "Kukagua tovuti inayoaminika na kumuuliza daktari wako"], answer: 3, why: "Madai ya afya yanakaguliwa kwenye tovuti zinazoaminika na kwa mtoa huduma wako." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kujiandaa kwa ziara ya kumwona daktari",
          minutes: 5,
          goal: "Tengeneza karatasi ya ziara yenye wasiwasi wako, maswali na orodha ya dawa.",
          text: [
            "Ziara mara nyingi ni fupi. Kujiandaa mapema kunakusaidia kukumbuka kila kitu na kunamsaidia mtoa huduma kukuelewa. MedlinePlus inashauri kuandika maswali yako, kueleza dalili zako kwa maandishi, na kuorodhesha mzio wako na kila dawa, dawa ya mitishamba, vitamini na kirutubisho unachotumia.",
            "Kwa dalili, andika: ni nini, ilianza lini, inatokea mara ngapi, nini kinaifanya iwe bora au mbaya zaidi, na umejaribu nini. Weka maswali yako matatu muhimu zaidi mwanzoni, ili yale muhimu zaidi yajibiwe.",
            "Unaweza kwenda na rafiki au mwanafamilia unayemwamini ili asikilize na aandike. Ukihitaji mkalimani, uliza ofisi mapema wakupangie mmoja. Beba kadi yako ya bima au ya Medicare, kitambulisho chenye picha na orodha yako ya dawa au chupa zenyewe za dawa."
          ],
          steps: ["Andika wasiwasi wako: ni nini, ulianza lini, mara ngapi, nini kinasaidia au kinazidisha.", "Andika maswali yako matatu muhimu zaidi.", "Orodhesha kila dawa, vitamini, kirutubisho na mzio.", "Mwombe mtu aende nawe kama inasaidia.", "Omba mkalimani mapema kama unamhitaji."],
          words: [["Mtoa huduma (provider)", "daktari, muuguzi mtaalamu (nurse practitioner), msaidizi wa daktari (physician assistant) au mtaalamu mwingine anayetoa huduma ya afya."], ["Dalili", "badiliko katika mwili au akili yako unaloliona, kama maumivu, kikohozi au uchovu."], ["Kirutubisho (supplement)", "vitamini, madini, mitishamba au bidhaa nyingine unayotumia kuongeza kwenye chakula chako."]],
          slides: [
            { title: "Kwa nini ujiandae", bullets: ["Ziara ni fupi", "Unakumbuka kila kitu", "Mtoa huduma anakuelewa vizuri zaidi"] },
            { title: "Eleza dalili yako", bullets: ["Ni nini na ilianza lini", "Inatokea mara ngapi", "Nini kinaifanya iwe bora au mbaya zaidi"] },
            { title: "Beba pamoja nawe", bullets: ["Maswali matatu muhimu zaidi", "Orodha ya dawa au chupa za dawa", "Kadi ya bima au ya Medicare na kitambulisho"] },
            { title: "Huhitaji kwenda peke yako", bullets: ["Nenda na mtu wa kuandika", "Omba mkalimani mapema"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Anza karatasi yako ya ziara. Andika wasiwasi mmoja halisi au wa mazoezi, ukieleza ulianza lini na nini kinaufanya uwe bora au mbaya zaidi, kisha maswali yako matatu muhimu zaidi.",
          youCanNow: "kuandaa karatasi ya ziara yenye wasiwasi wako, maswali yako muhimu na vitu vya kubeba.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini ubebe orodha kamili ya dawa kwenye ziara?", options: ["Ili daktari akague kwamba kila unachotumia kinafanya kazi pamoja kwa usalama", "Kwa sababu inahitajika ili uingie", "Ili usihitaji kuongea", "Kuonyesha kwamba unatumia dawa nyingi"], answer: 0, why: "Orodha kamili inamsaidia mtoa huduma kuepuka michanganyiko hatari na makosa." },
            { objective: "O2", q: "Una wasiwasi mitano lakini miadi ni fupi. Ungefanya nini?", options: ["Kutotaja hata mmoja", "Kuandika maswali yako matatu muhimu zaidi na kuuliza lile muhimu zaidi kwanza", "Kuongea haraka sana kuhusu yote matano", "Kuyaacha yote hadi mwaka ujao"], answer: 1, why: "Kuweka maswali muhimu mwanzoni kunahakikisha yale muhimu zaidi yanajibiwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wakati wa ziara: kuuliza maswali na kuhakikisha umeelewa",
          minutes: 5,
          goal: "Uliza maswali hadi uelewe na urudie mpango kwa maneno yako mwenyewe.",
          text: [
            "Una haki ya kuelewa matibabu yako. Mtoa huduma akitumia neno usilolijua, sema: \"Unaweza kulieleza kwa maneno rahisi zaidi?\" Akienda haraka sana, sema: \"Unaweza kwenda polepole?\" Unaweza kumwomba akuandikie maelekezo.",
            "Maswali matatu yanatosha kwa ziara nyingi: Tatizo langu kuu ni nini? Ninahitaji kufanya nini? Kwa nini ni muhimu kwangu kufanya hivi? Endelea kuuliza hadi uweze kujibu yote matatu.",
            "Kabla hujaondoka, tumia teach-back: rudia mpango kwa maneno yako mwenyewe. \"Kwa hiyo nameza kidonge kimoja kila asubuhi pamoja na chakula, na narudi baada ya wiki mbili. Kifundo changu cha mguu kikivimba, nakupigia simu.\" Kama ulikosa kitu, mtoa huduma anaweza kukirekebisha papo hapo. Pia uliza jinsi ya kuwasiliana na ofisi baadaye na ufanye nini hali ikizidi kuwa mbaya."
          ],
          steps: ["Uliza maana ya neno lolote usilolijua.", "Uliza maswali matatu: tatizo kuu, nifanye nini, kwa nini.", "Andika maelezo au mwache msaidizi wako aandike.", "Rudia mpango kwa maneno yako mwenyewe (teach-back).", "Uliza jinsi ya kuwasiliana na ofisi na ufanye nini hali ikizidi kuwa mbaya."],
          words: [["Teach-back", "kurudia mpango kwa maneno yako mwenyewe ili kuhakikisha umeuelewa."], ["Ufuatiliaji (follow-up)", "ziara au simu ya baadaye kuangalia unaendeleaje."]],
          slides: [
            { title: "Ni sawa kuuliza", bullets: ["\"Unaweza kulieleza kwa maneno rahisi zaidi?\"", "\"Unaweza kwenda polepole?\"", "\"Unaweza kuniandikia hilo?\""] },
            { title: "Maswali matatu muhimu", bullets: ["Tatizo langu kuu ni nini?", "Ninahitaji kufanya nini?", "Kwa nini ni muhimu?"] },
            { title: "Teach-back", bullets: ["Rudia mpango kwa maneno yako mwenyewe", "Mtoa huduma anarekebisha chochote ulichokosa"] },
            { title: "Kabla hujaondoka", bullets: ["Nitawasiliana vipi na ofisi?", "Nifanye nini hali ikizidi kuwa mbaya?"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Igizeni na rafiki au sema kwa sauti: rafiki yako anasoma agizo fupi la daktari (kwa mfano \"Tumia hii mara mbili kwa siku kwa siku 10 na uimalize yote\"). Uliza swali moja kulihusu, kisha lirudie kwa maneno yako mwenyewe (teach-back).",
          youCanNow: "kuuliza maswali yaliyo wazi wakati wa ziara na kutumia teach-back kuhakikisha umeuelewa mpango.",
          quickCheck: [
            { objective: "O3", q: "Ni lipi kati ya maswali matatu muhimu ya kuuliza kwenye ziara?", options: ["Daktari analipwa kiasi gani?", "Kwa nini ni muhimu kwangu kufanya hivi?", "Naweza kuruka dawa yangu?", "Kusubiri ni muda gani?"], answer: 1, why: "Maswali matatu muhimu ni: tatizo langu kuu ni nini, ninahitaji kufanya nini, na kwa nini ni muhimu." },
            { objective: "O3", q: "Daktari anasema umeze kidonge \"mara mbili kwa siku pamoja na chakula.\" Ungefanya nini kabla ya kuondoka?", options: ["Kutikisa kichwa na kuondoka", "Kumuuliza mtu usiyemjua kwenye chumba cha kusubiri", "Kurudia: \"Kwa hiyo nakimeza wakati wa kifungua kinywa na wa chakula cha jioni pamoja na chakula, sivyo?\"", "Kukisia baadaye nyumbani"], answer: 2, why: "Teach-back inahakikisha umeuelewa mpango kwa usahihi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiandaa na kuongea na mtoa huduma wako",
        questions: [
          { objective: "O1", q: "Ni tovuti gani mahali panapoaminika pa kuanza kutafuta taarifa za afya?", options: ["Chapisho la mitandao ya kijamii kutoka kwa mtu usiyemjua", "Tangazo la kidonge cha miujiza", "medlineplus.gov", "Maoni ya nasibu kwenye jukwaa la mtandaoni"], answer: 2, why: "MedlinePlus ni tovuti ya bure ya afya ya serikali ya Marekani kutoka Maktaba ya Kitaifa ya Tiba." },
          { objective: "O2", q: "Unapaswa kuandika nini kuhusu dalili kabla ya ziara?", options: ["Ilianza lini na nini kinaifanya iwe bora au mbaya zaidi", "Hakuna kitu; daktari atakisia", "Rangi unayoipenda tu", "Namba ya akaunti yako ya benki"], answer: 0, why: "Maelezo wazi kuhusu dalili yanamsaidia mtoa huduma kukuelewa." },
          { objective: "O2", q: "Nini kinapaswa kuwa kwenye orodha yako ya dawa?", options: ["Dawa za daktari tu", "Vidonge ulivyomeza leo tu", "Hakuna; famasia inajua", "Dawa za daktari, dawa za dukani bila agizo, vitamini, virutubisho na mzio"], answer: 3, why: "Kila unachotumia kinaweza kuwa muhimu, pamoja na vitamini na virutubisho." },
          { objective: "O3", q: "Daktari anatumia neno usilolielewa. Unafanya nini?", options: ["Kutikisa kichwa na kujifanya umeelewa", "Kumwomba alieleze kwa maneno rahisi zaidi", "Kuondoka kwenye ziara", "Kulitafuta mwaka ujao"], answer: 1, why: "Una haki ya kuelewa matibabu yako; kuuliza ni jambo la kawaida." },
          { objective: "O3", q: "Teach-back ni nini?", options: ["Kumfundisha daktari tiba", "Kuomba urejeshewe pesa", "Kurudia mpango kwa maneno yako mwenyewe", "Kusoma mpango kimya kimya"], answer: 2, why: "Teach-back inahakikisha umeelewa, ili makosa yarekebishwe mara moja." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia taarifa zako za afya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dawa: kusoma lebo na kuweka orodha",
          minutes: 5,
          goal: "Soma lebo ya dawa na uweke orodha ya dawa iliyo ya sasa.",
          text: [
            "Makosa ya dawa ni ya kawaida na mara nyingi yanaweza kuzuiwa. MedlinePlus inashauri kuweka orodha ya kila dawa pamoja na kipimo chake na wakati unaoitumia, ikiwemo bidhaa za dukani bila agizo la daktari, vitamini, virutubisho na mitishamba, pamoja na mzio wowote, na kuibeba kwenye kila ziara.",
            "Soma lebo kila mara, si kwa kukumbuka. Tafuta: jina la dawa, kiasi cha kutumia (kipimo), mara ngapi na lini, kwa muda gani, maonyo (kwa mfano \"inaweza kusababisha usingizi\" au \"tumia pamoja na chakula\"), na taarifa za kujaza tena (refill) na tarehe ya kuisha muda wake. Dawa za dukani bila agizo zina lebo ya Drug Facts yenye matumizi, maonyo na maelekezo.",
            "Mfamasia wako ni mtaalamu wa bure. Uliza: Kwa nini natumia dawa hii? Madhara gani ya pembeni ni ya kawaida na nifanye nini? Niache lini? Ni salama pamoja na dawa na virutubisho vyangu vingine? Je, niepuke vyakula fulani au pombe? Usiache wala usibadilishe kamwe dawa uliyoandikiwa bila kumuuliza daktari au mfamasia wako kwanza."
          ],
          steps: ["Soma jina, kipimo, mara ngapi na kwa muda gani.", "Soma maonyo.", "Iongeze kwenye orodha yako ya dawa pamoja na kipimo na wakati.", "Muulize mfamasia maswali yako.", "Beba orodha kwenye kila ziara na uisasishe kitu chochote kikibadilika."],
          words: [["Kipimo (dose)", "kiasi cha dawa cha kutumia kwa wakati mmoja."], ["Dawa za dukani bila agizo (over-the-counter, OTC)", "dawa unayoweza kununua bila agizo la daktari."], ["Madhara ya pembeni (side effect)", "athari ya ziada ya dawa ambayo hukuitaka, kama tumbo kuvurugika."]],
          slides: [
            { title: "Soma lebo kila mara", bullets: ["Jina na kipimo", "Mara ngapi, lini na kwa muda gani", "Maonyo: usingizi, tumia pamoja na chakula"] },
            { title: "Weka orodha ya dawa", bullets: ["Kila dawa, vitamini, kirutubisho, mitishamba", "Kipimo na wakati wa siku", "Mzio; ibebe kwenye kila ziara"] },
            { title: "Muulize mfamasia wako", bullets: ["Kwa nini natumia hii? Madhara gani ya pembeni?", "Ni salama pamoja na dawa zangu nyingine?", "Niepuke vyakula fulani au pombe?"] },
            { title: "Usibadilishe kamwe mwenyewe", bullets: ["Muulize daktari au mfamasia wako kabla ya kuacha au kubadilisha"] }
          ],
          sources: [{ name: "MedlinePlus: Medication Errors", url: "https://medlineplus.gov/medicationerrors.html" }],
          tryIt: "Chukua dawa moja, vitamini au kirutubisho unachotumia wewe (au mwanafamilia). Soma lebo na ukiongeze kwenye orodha yako ya dawa: jina, kipimo, mara ngapi, ni cha nini na onyo moja. Andika swali moja la kumuuliza mfamasia.",
          youCanNow: "kusoma lebo ya dawa, kuweka orodha kamili ya dawa na kumuuliza mfamasia maswali sahihi.",
          quickCheck: [
            { objective: "O4", q: "\"Kipimo\" (dose) kinamaanisha nini kwenye lebo ya dawa?", options: ["Kiasi cha dawa cha kutumia kwa wakati mmoja", "Bei ya dawa", "Tarehe ilipotengenezwa", "Jina la famasia"], answer: 0, why: "Kipimo ni kiasi unachotumia kwa wakati mmoja." },
            { objective: "O4", q: "Unaanza vitamini mpya. Ungefanya nini na orodha yako ya dawa?", options: ["Kuiacha nje kwa sababu vitamini hazihesabiwi", "Kusubiri hadi siku yako ya kuzaliwa ijayo", "Kuwaambia marafiki zako tu", "Kuiongeza kwenye orodha na kumuuliza mfamasia kama ni salama pamoja na dawa zako nyingine"], answer: 3, why: "Vitamini na virutubisho vinapaswa kuwa kwenye orodha na vinaweza kuingiliana na dawa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Matokeo ya vipimo, tovuti za wagonjwa na kumbukumbu zako",
          minutes: 5,
          goal: "Pata matokeo ya kipimo kwenye tovuti ya wagonjwa na uandike maswali kuyahusu.",
          text: [
            "Kliniki na hospitali nyingi zina tovuti ya wagonjwa (patient portal): tovuti au app salama ambapo unaweza kuona matokeo ya vipimo, maelezo ya ziara na miadi ijayo, kuomba kujaziwa dawa tena, na kutuma ujumbe kwa timu yako ya matibabu. MedlinePlus inashauri kujifunza jinsi ya kufikia kumbukumbu zako ili ufuatilie matokeo, mipango ya matibabu na dawa. Wanajeshi wastaafu wanaweza kutumia zana za mtandaoni za VA; uliza timu yako ya VA jinsi ya kujisajili.",
            "Matokeo ya vipimo mara nyingi yanaonyesha namba yako kando ya kiwango cha \"kawaida\" (reference range). Matokeo yaliyowekwa alama ya juu au chini si tatizo kila mara; inategemea wewe, historia yako na matokeo mengine. Usiogope na usibadilishe matibabu yako mwenyewe. Andika maswali na umuulize mtoa huduma wako matokeo yanamaanisha nini kwako.",
            "Linda tovuti yako ya wagonjwa: tumia nywila imara, usiishiriki kamwe, na utoke (sign out) kwenye kompyuta za pamoja au za maktaba. Ukihitaji msaada wa kujisajili, piga simu mapokezi ya kliniki. Mwanafamilia au mlezi mara nyingi anaweza kupata ufikiaji kwa ruhusa yako; uliza ofisi jinsi gani."
          ],
          steps: ["Uliza kliniki yako jinsi ya kujisajili kwenye tovuti ya wagonjwa.", "Tafuta matokeo yako ya kipimo ya karibuni.", "Angalia namba yako na kiwango cha kawaida (reference range).", "Andika maswali: Hii inamaanisha nini kwangu? Nahitaji kufanya kitu?", "Tuma swali kupitia tovuti au uliza kwenye ziara yako ijayo."],
          words: [["Tovuti ya wagonjwa (patient portal)", "tovuti au app salama ambapo unaona kumbukumbu zako za afya na kutuma ujumbe kwa timu yako ya matibabu."], ["Kiwango cha kawaida (reference range)", "kiwango cha matokeo kilicho cha kawaida kwa watu wengi wenye afya."]],
          slides: [
            { title: "Tovuti ya wagonjwa inafanya nini", bullets: ["Kuona matokeo ya vipimo na maelezo ya ziara", "Kuomba kujaziwa dawa na kuona miadi", "Kutuma ujumbe kwa timu yako ya matibabu"] },
            { title: "Kusoma matokeo", bullets: ["Namba yako na kiwango cha kawaida", "Juu au chini si tatizo kila mara", "Uliza yanamaanisha nini kwako"] },
            { title: "Ilinde", bullets: ["Nywila imara, usiishiriki kamwe", "Toka (sign out) kwenye kompyuta za pamoja", "Uliza kliniki kuhusu ufikiaji wa mlezi"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Kama una tovuti ya wagonjwa, ingia na utafute matokeo moja ya karibuni au maelezo ya ziara. Kama huna, piga simu au uliza kliniki yako jinsi ya kujisajili. Kwa vyovyote vile, andika maswali mawili ambayo ungeuliza kuhusu matokeo ya kipimo.",
          youCanNow: "kutumia tovuti ya wagonjwa kwa usalama, kusoma matokeo kando ya kiwango chake cha kawaida na kumuuliza mtoa huduma wako yanamaanisha nini kwako.",
          quickCheck: [
            { objective: "O5", q: "Kwa kawaida unaweza kufanya nini kwenye tovuti ya wagonjwa?", options: ["Kubadilisha dawa zako mwenyewe", "Kuona kumbukumbu zako na kutuma ujumbe kwa timu yako ya matibabu", "Kuagiza dawa bila agizo la daktari", "Kusoma matokeo ya wagonjwa wengine"], answer: 1, why: "Tovuti ya wagonjwa ni mahali salama pa kuona kumbukumbu zako na kutuma ujumbe kwa timu yako ya matibabu." },
            { objective: "O5", q: "Ulitumia kompyuta ya maktaba kuangalia tovuti yako ya wagonjwa. Ungefanya nini ukimaliza?", options: ["Kuiacha wazi kwa ajili ya wakati ujao", "Kuandika nywila yako kwenye karatasi kando ya kompyuta", "Kutoka (sign out) na kufunga kivinjari", "Kuzima skrini tu"], answer: 2, why: "Kutoka kwenye kompyuta za pamoja kunaweka kumbukumbu zako za afya kuwa siri." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Maneno ya bima ya afya na mkoba wako wa ziara",
          minutes: 6,
          goal: "Eleza maneno ya kawaida ya bima ya afya na ujue wa kumuuliza kuhusu gharama.",
          text: [
            "Maneno ya gharama yanamchanganya karibu kila mtu. HealthCare.gov inayafafanua. Premium ni kiasi unacholipa kwa mpango wako, kwa kawaida kila mwezi. Deductible ni kiasi unacholipa kwa huduma zinazolipiwa na bima kabla mpango wako haujaanza kulipa. Copayment (copay) ni kiasi maalum cha dola unacholipa kwa huduma inayolipiwa na bima, kama ziara. Watoa huduma walio in-network wana mkataba na mpango wako na kwa kawaida wanakugharimu kidogo.",
            "Kabla ya kipimo au ziara, unaweza kuuliza: \"Mtoa huduma huyu yuko kwenye mtandao (network) wa mpango wangu?\" \"Nitalipa takriban kiasi gani?\" Piga namba iliyo kwenye kadi yako ya bima. Medicare: piga 1-800-MEDICARE (1-800-633-4227), iko wazi saa 24 kwa siku, siku 7 kwa wiki isipokuwa baadhi ya sikukuu za serikali kuu. Wanajeshi wastaafu wanaweza kuuliza VA kuhusu mafao yao. Vituo vingi vya afya vya jamii vinatoa huduma kwa ada inayopanda na kushuka kulingana na kipato (sliding scale); tafuta findahealthcenter.hrsa.gov na uliza kituo kuhusu ada.",
            "Sasa unganisha yote. Mkoba wako wa ziara ni karatasi yako ya ziara (wasiwasi na maswali muhimu), orodha yako ya dawa, kadi yako ya bima na kitambulisho, na kalamu au simu ya kuandika. Baada ya ziara, andika mpango kwa maneno yako mwenyewe."
          ],
          steps: ["Jifunze maneno manne: premium, deductible, copay, in-network.", "Kabla ya huduma, uliza kama mtoa huduma yuko kwenye mtandao wako na unaweza kulipa kiasi gani.", "Piga namba iliyo kwenye kadi yako, au 1-800-MEDICARE kwa Medicare.", "Andaa mkoba wako wa ziara: karatasi ya ziara, orodha ya dawa, kadi, kitambulisho, maelezo.", "Baada ya ziara, andika mpango kwa maneno yako mwenyewe."],
          words: [["Premium", "kiasi unacholipa kwa mpango wako wa bima ya afya, kwa kawaida kila mwezi."], ["Deductible", "kiasi unacholipa kwa huduma zinazolipiwa na bima kabla mpango wako haujaanza kulipa."], ["Copay", "kiasi maalum cha dola unacholipa kwa huduma inayolipiwa na bima."], ["In-network", "watoa huduma wenye mkataba na mpango wako; kwa kawaida wanakugharimu kidogo."]],
          slides: [
            { title: "Maneno manne ya bima", bullets: ["Premium: unacholipa kwa mpango, mara nyingi kila mwezi", "Deductible: unacholipa kabla mpango haujaanza kulipa", "Copay: kiasi maalum kwa kila huduma", "In-network: watoa huduma wenye mkataba, kwa kawaida nafuu zaidi"] },
            { title: "Uliza kabla hujaenda", bullets: ["\"Mtoa huduma huyu yuko kwenye mtandao wangu?\"", "\"Nitalipa takriban kiasi gani?\"", "Piga namba iliyo kwenye kadi yako"] },
            { title: "Wapi pa kuuliza", bullets: ["Medicare: 1-800-633-4227, saa 24 siku 7", "Wanajeshi wastaafu: uliza VA", "Vituo vya afya vya jamii: findahealthcenter.hrsa.gov"] },
            { title: "Mkoba wako wa ziara", bullets: ["Karatasi ya ziara na orodha ya dawa", "Kadi ya bima na kitambulisho", "Maelezo; andika mpango baadaye"] }
          ],
          sources: [
            { name: "HealthCare.gov Glossary: Deductible", url: "https://www.healthcare.gov/glossary/deductible/" },
            { name: "HealthCare.gov Glossary: Copayment", url: "https://www.healthcare.gov/glossary/co-payment/" },
            { name: "Medicare.gov: Talk to Someone", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "HRSA: Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" }
          ],
          tryIt: "Kazi ya mwisho: maliza karatasi yako ya ziara ya ukurasa mmoja yenye wasiwasi wako, maswali yako matatu muhimu zaidi na orodha yako kamili ya dawa. Baada ya ziara halisi, au mazoezi na rafiki anayeigiza kama daktari, andika mpango kwa maneno yako mwenyewe: tatizo kuu, ufanye nini, na kwa nini.",
          youCanNow: "kueleza maneno ya kawaida ya bima, kuuliza kuhusu gharama kabla ya huduma, na kubeba mkoba kamili wa ziara kwenye kila miadi.",
          quickCheck: [
            { objective: "O6", q: "\"In-network\" inamaanisha nini?", options: ["Mtoa huduma yuko kwenye mitandao ya kijamii", "Mtoa huduma yuko mtaani kwako", "Mtoa huduma ni bure", "Mtoa huduma ana mkataba na mpango wako na kwa kawaida anakugharimu kidogo"], answer: 3, why: "Watoa huduma walio in-network wana mkataba na mpango wako." },
            { objective: "O6", q: "Huna uhakika ziara itakugharimu kiasi gani. Ungefanya nini?", options: ["Kuuliza mpango wako au ofisi kuhusu gharama kabla ya ziara", "Kuacha kwenda kwenye ziara", "Kukisia na kutumaini", "Kumuuliza mtu usiyemjua mtandaoni"], answer: 0, why: "Mpango wako au ofisi inaweza kukueleza kuhusu gharama mapema." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia taarifa zako za afya",
        questions: [
          { objective: "O4", q: "Kabla ya kutumia kipimo cha dawa, unapaswa:", options: ["Kutegemea kumbukumbu", "Kusoma lebo kila mara", "Kukisia kipimo", "Kumeza kidonge cha rafiki"], answer: 1, why: "Kusoma lebo kila mara kunazuia makosa." },
          { objective: "O4", q: "Unataka kuacha dawa uliyoandikiwa kwa sababu ya madhara ya pembeni. Unafanya nini kwanza?", options: ["Kuiacha mara moja", "Kuongeza kipimo mara mbili", "Kumpa rafiki", "Kumuuliza daktari au mfamasia wako"], answer: 3, why: "Usiache wala usibadilishe kamwe dawa uliyoandikiwa bila kuuliza kwanza." },
          { objective: "O5", q: "Tovuti ya wagonjwa ni nini?", options: ["Tovuti au app salama ya kuona kumbukumbu zako na kutuma ujumbe kwa timu yako ya matibabu", "Mlango wa hospitali", "Kikundi cha mitandao ya kijamii", "Kuponi ya famasia"], answer: 0, why: "Tovuti za wagonjwa zinaonyesha matokeo na zinakuruhusu kutuma ujumbe kwa timu yako." },
          { objective: "O5", q: "Matokeo ya kipimo yamewekwa alama \"juu\" kwenye tovuti yako ya wagonjwa. Hatua bora inayofuata ni ipi?", options: ["Kuogopa", "Kubadilisha dawa yako mwenyewe", "Kuandika maswali yako na kumuuliza mtoa huduma wako yanamaanisha nini kwako", "Kuyapuuza milele"], answer: 2, why: "Juu au chini si tatizo kila mara; mtoa huduma wako anaeleza yanamaanisha nini kwako." },
          { objective: "O6", q: "Deductible ni nini?", options: ["Kiasi maalum kwa kila ziara", "Gharama ya kila mwezi ya mpango wako", "Kuponi ya punguzo", "Kiasi unacholipa kwa huduma zinazolipiwa na bima kabla mpango wako haujaanza kulipa"], answer: 3, why: "HealthCare.gov inafafanua deductible kama kiasi unacholipa kabla mpango wako haujaanza kulipa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Elimu ya Afya: Kuelewa Huduma Yako ya Afya",
    questions: [
      { objective: "O1", q: "Elimu ya afya inamaanisha:", options: ["Kuwa daktari", "Uwezo wa kupata, kuelewa na kutumia taarifa za afya", "Kusoma haraka", "Kujua kila neno la kitabibu"], answer: 1, why: "Ni ujuzi wa kupata, kuelewa na kutumia taarifa za afya." },
      { objective: "O1", q: "Tovuti rasmi za serikali ya Marekani huishia na:", options: [".gov", ".shop", ".win", ".xyz"], answer: 0, why: "Tovuti za .gov kama medlineplus.gov na cdc.gov ni rasmi." },
      { objective: "O1", q: "Ni swali lipi linakusaidia kupima tovuti ya afya?", options: ["Ina rangi nyingi?", "Ina matangazo mengi?", "Ilisasishwa lini mara ya mwisho?", "Ni ndefu?"], answer: 2, why: "Taarifa za zamani zinaweza kuwa si sahihi; kagua tarehe ya kusasishwa." },
      { objective: "O1", q: "Msaidizi wa AI anaeleza neno la kitabibu. Unapaswa kufanya nini?", options: ["Kuandika namba yako ya bima ili upate jibu bora", "Kubadilisha matibabu yako kulingana nalo", "Kulishiriki kama ukweli", "Kulikagua kwenye tovuti inayoaminika na kumuuliza mtoa huduma wako"], answer: 3, why: "AI inaweza kukosea; ikague na umwachie mtoa huduma wako neno la mwisho." },
      { objective: "O2", q: "Nini kinafaa kuwa kwenye karatasi ya ziara?", options: ["Maswali yako matatu muhimu zaidi", "Nywila yako ya benki", "Orodha ya manunuzi", "Hakuna kitu"], answer: 0, why: "Kuandika maswali kwanza kunahakikisha yale muhimu zaidi yanajibiwa." },
      { objective: "O2", q: "Unahitaji mkalimani kwa ziara. Unapaswa kuomba lini?", options: ["Kamwe", "Baada ya ziara", "Mapema, unapopanga miadi", "Ikiwa tu daktari atajitolea"], answer: 2, why: "Kuomba mapema kunaiwezesha ofisi kumpanga mmoja." },
      { objective: "O2", q: "Ni ipi inaeleza dalili vizuri?", options: ["\"Najisikia vibaya.\"", "\"Maumivu makali ya goti kwa wiki 2, yanazidi ninapopanda ngazi, yanapungua ninapopumzika.\"", "\"Kuna kitu hakiko sawa.\"", "\"Kama kawaida.\""], answer: 1, why: "Inasema ni nini, kwa muda gani, na nini kinaifanya iwe bora au mbaya zaidi." },
      { objective: "O2", q: "Unaweza kwenda na nani kwenye ziara ili akusaidie?", options: ["Hakuna mtu anayeruhusiwa kamwe", "Wakili tu", "Mtoto chini ya miaka 5 tu", "Rafiki au mwanafamilia unayemwamini wa kuandika maelezo"], answer: 3, why: "Msaidizi anaweza kusikiliza na kuandika maelezo." },
      { objective: "O3", q: "Ni lipi kati ya maswali matatu muhimu ya kuuliza kwenye ziara?", options: ["Ninahitaji kufanya nini?", "Unaendesha gari gani?", "Jengo hili lina umri gani?", "Naweza kuruka ziara yangu ya ufuatiliaji?"], answer: 0, why: "Tatizo kuu, nifanye nini na kwa nini: haya matatu yanatosha kwa ziara nyingi." },
      { objective: "O3", q: "Daktari anaongea haraka sana. Unaweza kusema:", options: ["Hakuna kitu", "\"Nitajua baadaye.\"", "\"Unaweza kwenda polepole na kuniandikia hilo?\"", "\"Si kitu.\""], answer: 2, why: "Kumwomba aende polepole au akuandikie ni haki yako." },
      { objective: "O3", q: "Kurudia mpango kwa maneno yako mwenyewe kunaitwa:", options: ["Kujaza dawa tena (refill)", "Teach-back", "Deductible", "Copay"], answer: 1, why: "Teach-back inakagua uelewa wako kabla hujaondoka." },
      { objective: "O3", q: "Kabla ya kuondoka kwenye ziara unapaswa pia kuuliza:", options: ["Hakuna kitu", "Mgahawa uko wapi", "Sampuli za bure tu", "Jinsi ya kuwasiliana na ofisi na ufanye nini hali ikizidi kuwa mbaya"], answer: 3, why: "Kujua jinsi ya kuwasiliana nao na wakati wa kupiga simu kunakuweka salama." },
      { objective: "O4", q: "Nani ni mtaalamu wa bure kuhusu dawa zako?", options: ["Mtu maarufu wa mitandao ya kijamii", "Tangazo la mtandaoni", "Mfamasia wako", "Mtu usiyemjua kwenye kituo cha basi"], answer: 2, why: "Wafamasia hujibu maswali kuhusu dawa bila malipo." },
      { objective: "O4", q: "\"Kipimo\" (dose) kinamaanisha:", options: ["Kiasi cha dawa cha kutumia kwa wakati mmoja", "Bei ya dawa", "Jina la famasia", "Tarehe ya kuisha muda"], answer: 0, why: "Kipimo ni kiasi kwa kila mara." },
      { objective: "O4", q: "Ni swali lipi unapaswa kumuuliza mfamasia kuhusu dawa mpya?", options: ["Chupa ina rangi gani?", "Naweza kuigawa na familia yangu?", "Naweza kuacha wakati wowote nikitaka?", "Ni salama pamoja na dawa na virutubisho vyangu vingine?"], answer: 3, why: "Dawa na virutubisho vinaweza kuathiriana." },
      { objective: "O5", q: "\"Kiwango cha kawaida\" (reference range) kwenye matokeo ya kipimo ni:", options: ["Namba ya simu ya daktari wako", "Kiwango cha matokeo kilicho cha kawaida kwa watu wengi wenye afya", "Bei ya kipimo", "Aina ya bima"], answer: 1, why: "Namba yako inaonyeshwa kando ya kiwango cha kawaida." },
      { objective: "O5", q: "Unalindaje tovuti yako ya wagonjwa?", options: ["Kutumia nywila imara na kutoka (sign out) kwenye kompyuta za pamoja", "Kushiriki nywila yako na marafiki", "Kuandika nywila kwenye skrini", "Kubaki umeingia kwenye maktaba"], answer: 0, why: "Nywila imara ya siri na kutoka kunalinda kumbukumbu zako." },
      { objective: "O6", q: "Copay ni nini?", options: ["Gharama ya kila mwezi ya mpango wako", "Ziara ya bure", "Kiasi maalum cha dola unacholipa kwa huduma inayolipiwa na bima", "Lebo ya dawa"], answer: 2, why: "HealthCare.gov inafafanua copay kama kiasi maalum kwa huduma inayolipiwa na bima." },
      { objective: "O6", q: "Mtu mwenye Medicare anaweza kupiga wapi akiwa na maswali?", options: ["911", "411", "Namba yoyote kutoka ujumbe mfupi (SMS)", "1-800-MEDICARE (1-800-633-4227)"], answer: 3, why: "1-800-MEDICARE ni namba rasmi ya Medicare." },
      { objective: "O6", q: "Watoa huduma walio \"in-network\":", options: ["Hawakubali bima kamwe", "Wana mkataba na mpango wako na kwa kawaida wanakugharimu kidogo", "Wanafanya kazi mtandaoni tu", "Ni bure kila wakati"], answer: 1, why: "Watoa huduma walio in-network wana mkataba na mpango wako, jambo ambalo kwa kawaida linapunguza gharama yako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [2, 4, 6, 10, 12, 13, 15, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maelezo ya dalili", objective: "O2", notYet: "Wasiwasi hauko wazi, au haukusema ulianza lini.", meets: "Inasema wasiwasi ni nini, ulianza lini na nini kinaufanya uwe bora au mbaya zaidi.", exceeds: "Pia inaeleza jinsi unavyoathiri maisha ya kila siku." },
      { name: "Maswali matatu muhimu zaidi", objective: "O3", notYet: "Maswali chini ya matatu, au hayako wazi.", meets: "Maswali matatu yaliyo wazi, lile muhimu zaidi likiwa la kwanza.", exceeds: "Yanajumuisha maswali matatu muhimu: tatizo, nifanye nini na kwa nini." },
      { name: "Orodha ya dawa", objective: "O4", notYet: "Inakosa dawa za dukani bila agizo, vitamini, virutubisho au mzio.", meets: "Kila dawa ya daktari, dawa ya dukani bila agizo, vitamini, kirutubisho na mzio, pamoja na kipimo na mara ngapi.", exceeds: "Pia inaorodhesha kila kimoja ni cha nini na swali moja kwa mfamasia." },
      { name: "Mpango kwa maneno yako mwenyewe", objective: "O3", notYet: "Mpango haupo, au unanakili maneno ya daktari bila kuelewa.", meets: "Inasema tatizo kuu, nini cha kufanya na kwa nini, kwa maneno ya mwanafunzi mwenyewe.", exceeds: "Pia inaeleza jinsi ya kuwasiliana na ofisi na nini cha kufanya hali ikizidi kuwa mbaya." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaobeba karatasi ya ziara au orodha ya dawa kwenye miadi halisi ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kutumia teach-back au kuuliza swali ambalo wasingeliuliza hapo awali",
      "Wanafunzi wanaojisajili au kutumia tovuti ya wagonjwa ndani ya siku 60",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya afya au stadi za maisha ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi na kalamu au maelezo kwenye simu kwa ajili ya karatasi ya ziara",
      "Lebo za dawa moja, vitamini au kirutubisho",
      "Simu au kompyuta yenye intaneti kwa medlineplus.gov na tovuti ya wagonjwa, kama mwanafunzi anayo",
      "Kama dakika 60 kwa jumla"
    ],
    facilitatorNotes: [
      "Mwanzoni wakumbushe wanafunzi kwamba kozi hii inafundisha ujuzi na haitoi ushauri wa kitabibu.",
      "Tumieni wasiwasi wa mazoezi na lebo za dawa za mfano darasani; wanafunzi hawalazimiki kamwe kushiriki taarifa zao wenyewe za afya.",
      "Fanyeni mazoezi ya teach-back wawili wawili, mwanafunzi mmoja akisoma agizo la mfano kama daktari.",
      "Wasaidie wanafunzi wanaohitaji mkalimani kujifunza jinsi ya kumwomba wanapopanga ziara.",
      "Pima karatasi ya ziara na mpango kwa rubriki na utoe maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
