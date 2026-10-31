"use strict";

// Koach Learn course (Swahili translation of leadership/edu-ai-stem.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-stem-sw",
  lang: "sw",
  translationOf: "edu-ai-stem",
  category: "Leadership Development",
  name: "AI katika Elimu ya STEM",
  skills: "Kutunga maswali ya STEM yenye majibu yaliyokaguliwa, Kutumia AI kama msaidizi wa kuandika code katika uchunguzi wa data, Kufundisha jinsi AI inavyojifunza kutoka kwa data, Kukagua madai ya AI kama mwanasayansi, Kutumia AI katika mchakato wa usanifu wa kihandisi, Kubuni kazi zinazoonyesha jinsi wanafunzi wanavyofikiri",
  outcome: "kubuni na kufundisha somo la STEM ambalo wanafunzi wanatumia AI kama chombo, kusaidia kuandika code, kuchambua data au kutoa mawazo ya miundo, kisha wanakagua matokeo yake kama wanasayansi na wahandisi, kwa kazi zinazoonyesha wazi jinsi wanafunzi wanavyofikiri.",
  about: [
    "Kozi hii ni ya walimu, wakufunzi na viongozi wa sayansi, teknolojia, uhandisi na hisabati (STEM). AI ni chombo cha kujifunzia STEM na pia ni somo la STEM lenyewe. Wanafunzi wanapaswa kujifunza kuitumia, kuikagua, na kuelewa jinsi inavyofanya kazi.",
    "Sura ya 1 inatumia AI kama chombo cha mwalimu na cha mwanafunzi: seti za maswali zenye majibu yaliyokaguliwa, simulizi na kuchora grafu, na uchunguzi wa data ambapo AI inasaidia kuandika code. Sura ya 2 inaifanya AI kuwa somo: jinsi mashine zinavyojifunza kutoka kwa data, kukagua madai ya AI kama mwanasayansi, AI katika mchakato wa usanifu wa kihandisi, na kazi zinazoweka fikra za wanafunzi katikati.",
    "Wanafunzi kutumia zana za AI kunategemea idhini ya wilaya yako ya shule na sheria za umri za kila zana. Usiweke taarifa za wanafunzi katika zana zisizoidhinishwa. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Panga na (ukiweza) fundisha somo moja la STEM ambalo wanafunzi wanatumia zana ya AI iliyoidhinishwa kama sehemu ya uchunguzi, kwa mfano kuiomba AI isaidie kuandika code ya Python katika Google Colab ili kuchora grafu ya seti ya data ya umma, au kutoa mawazo ya miundo kwa changamoto ya kihandisi. Somo lazima liwe na hatua ya kukagua (wanafunzi wanakagua code, namba au madai ya AI kwa kutumia data, hesabu au jaribio), kazi ambayo wanafunzi wanaeleza jinsi walivyofikiri kwa maneno yao wenyewe, na kiwango cha matumizi ya AI kwa kazi hiyo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Walimu wa sayansi, teknolojia, uhandisi na hisabati, wakufunzi wa ufundishaji na viongozi wa shule wanaotaka wanafunzi watumie AI kama chombo katika uchunguzi na usanifu huku bado wakijenga uwezo halisi wa kufikiri.",
    startingPoint: "Wanaweza kufundisha maudhui ya STEM, kuendesha maabara na kutoa seti za maswali. Baadhi wametumia msaidizi wa AI kutunga maswali ya mazoezi. Wachache wana utaratibu wa kukagua hesabu, code au madai ya AI, au wa kubuni kazi ambazo fikra za wanafunzi zinabaki wazi.",
    gap: "AI hufanya makosa kwa kujiamini katika hesabu za hatua nyingi, code, michoro na marejeo, na inaweza kutatua maswali mengi ya vitabu vya kiada kwa niaba ya wanafunzi. Walimu wanahitaji masomo ambayo wanafunzi wanatumia AI kama wanasayansi na wahandisi wangefanya: kama msaidizi ambaye matokeo yake ni dhana ya kujaribu, huku wanafunzi wakieleza fikra zao wenyewe.",
    constraints: [
      "Muda: masomo mafupi yanayotosha katika kipindi cha maandalizi",
      "Vifaa: kompyuta ya shule; baadhi ya zana (Google Colab, Teachable Machine) zinahitaji akaunti na idhini ya wilaya",
      "Faragha na kanuni: kagua sera ya wilaya na masharti ya zana kabla wanafunzi hawajatumia AI au zana yoyote ya mtandaoni",
      "Rasilimali za bure za zana hazina uhakika, kwa hiyo mipango inahitaji mpango mbadala na wanafunzi wahifadhi kazi mara kwa mara",
      "Kila swali, maelezo na code iliyotengenezwa na AI lazima ikaguliwe kabla wanafunzi hawajaiona"
    ],
    prerequisites: "Hakuna. Walimu wapya kwa zana za AI huenda wakataka kuanza na kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maswali ya mazoezi ya STEM yaliyotengenezwa na AI pamoja na majibu yake", action: "kukagua kila jibu kwa njia ya pili, kikokotoo au zana ya kuchora grafu", standard: "kabla wanafunzi hawajaona swali lolote" },
    { id: "O2", condition: "Ukipewa seti ya data ya umma na msaidizi wa AI wa kuandika code", action: "kupanga uchunguzi wa data ambapo wanafunzi wanaandika maelezo kwa kila mstari wa code, wanatabiri matokeo na wanakagua namba moja kwa mkono", standard: "pamoja na kila hatua ya kuelewa" },
    { id: "O3", condition: "Ukipewa maelezo, mfano-linganishi au mchoro kutoka AI", action: "kutambua na kurekebisha dhana potofu kwa kulinganisha na mtaala wako au chanzo cha kuaminika", standard: "kabla ya kuutumia darasani" },
    { id: "O4", condition: "Ukitumia zana ya bure au shughuli ya kadi bila kifaa", action: "kueleza jinsi machine learning inavyotumia data ya mafunzo kufanya utabiri na kwa nini data mbalimbali ni muhimu", standard: "kwa mfano wa darasani unaofanya kazi" },
    { id: "O5", condition: "Ukipewa dai la AI kama takwimu, ubadilishaji wa vipimo au rejeo", action: "kutumia utaratibu wa dai, ushahidi, jaribio, hitimisho", standard: "ukifikia kukubali, kukataa au ushahidi hautoshi pamoja na sababu" },
    { id: "O6", condition: "Unapopanga kazi ya STEM au changamoto ya usanifu", action: "kubuni kazi ambayo wanafunzi wanaonyesha fikra zao wenyewe na kuweka lebo ya kiwango chake cha matumizi ya AI", standard: "pamoja na hatua ya kukagua na maelezo kwa maneno ya wanafunzi wenyewe" }
  ],
  chapters: [
    {
      name: "Sura 1: AI kama chombo cha STEM",
      lessons: [
        {
          objectives: ["O1"],
          title: "Seti za maswali zenye majibu yaliyokaguliwa",
          minutes: 5,
          goal: "Tunga mazoezi ya STEM kwa AI na ukague kila jibu.",
          text: [
            "AI inaweza kutunga maswali mengi ya mazoezi kwa haraka: maswali ya maneno yenye mazingira ya maisha halisi, maswali ya viwango kadhaa vya ugumu, na majibu yanayoonyesha kila hatua. Hii inaokoa muda, lakini AI inajulikana kufanya makosa ya hesabu na ya kufikiri, hasa katika maswali ya hatua nyingi, na inaweza kutoa jibu lisilo sahihi kwa kujiamini.",
            "Kwa hiyo kagua kila jibu. Lifanye mwenyewe, likague kwa kikokotoo au zana ya kuchora grafu kama Desmos, au iombe AI ikague jibu lake kwa njia ya pili na ulinganishe. Njia mbili zisipokubaliana, lifanye mwenyewe.",
            "Omba maswali yenye namba rahisi kwa mazoezi, au namba halisi zisizo nadhifu kwa matumizi. Omba makosa ya kawaida ambayo wanafunzi hufanya katika kila swali; hayo ni maswali mazuri ya majadiliano."
          ],
          steps: ["Omba maswali ya kiwango na mazingira unayohitaji.", "Omba majibu ya hatua kwa hatua.", "Fanya au kagua kila jibu kwa kikokotoo au zana ya kuchora grafu.", "Omba njia ya pili na ulinganishe.", "Omba makosa ya kawaida ya kujadili."],
          words: [["Jibu la hatua kwa hatua", "jibu linaloonyesha kila hatua."], ["Kukagua", "kuhakikisha kitu ni sahihi kwa kutumia njia au chanzo kingine."]],
          slides: [
            { title: "Mazoezi ya haraka", bullets: ["Maswali ya maneno ya maisha halisi", "Viwango kadhaa vya ugumu", "Majibu ya hatua kwa hatua"] },
            { title: "AI hufanya makosa ya hesabu", bullets: ["Hasa maswali ya hatua nyingi", "Inaweza kukosea kwa kujiamini", "Kagua kila jibu"] },
            { title: "Jinsi ya kukagua", bullets: ["Lifanye mwenyewe", "Kikokotoo au zana ya grafu kama Desmos", "Njia ya pili; linganisha"] }
          ],
          tryIt: "Iombe AI maswali sita ya hatua nyingi kuhusu mada unayofundisha, pamoja na majibu. Kagua kila moja na uhesabu mangapi yalikuwa si sahihi.",
          youCanNow: "kutunga mazoezi ya STEM kwa AI na kukagua kila jibu kabla wanafunzi hawajaliona.",
          quickCheck: [
            { objective: "O1", q: "AI ina uwezekano mkubwa wa kukosea wapi katika hisabati?", options: ["Kunakili maneno ya swali", "Maswali ya hatua nyingi", "Kuandika mazingira ya swali la maneno", "Kuchagua namba rahisi"], answer: 1, why: "AI hufanya makosa ya hesabu na ya kufikiri, hasa katika hatua kadhaa." },
            { objective: "O1", q: "Jibu la hatua kwa hatua la AI na ukaguzi wako wa kikokotoo vinatoa majibu tofauti. Ungefanya nini?", options: ["Kuiamini AI kwa sababu ilionyesha hatua", "Kuamini kikokotoo bila kuangalia", "Kuondoa swali bila kukagua", "Kulifanya swali mwenyewe"], answer: 3, why: "Njia mbili zisipokubaliana, somo linasema ulifanye mwenyewe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Uchunguzi wa data ukitumia AI kama msaidizi wa code",
          minutes: 6,
          goal: "Panga uchunguzi wa data ambapo AI inasaidia kuandika code ambayo wanafunzi wanaikagua na kuieleza.",
          text: [
            "Data halisi inaifanya STEM kuwa halisi. Wanafunzi wanaweza kuchunguza seti za data za umma (hali ya hewa, afya, michezo, mazingira) katika Google Colab, daftari la Python la bure ndani ya kivinjari; linahitaji akaunti ya Google, na rasilimali za bure hazina uhakika, kwa hiyo hifadhi kazi mara kwa mara. Kwanza kagua sheria za wilaya yako kuhusu akaunti za Google za wanafunzi.",
            "AI inaweza kuwa msaidizi wa code: wanafunzi wanaeleza wanachotaka (\"soma CSV hii na utengeneze grafu ya mstari ya joto kwa kila mwezi\") na AI inapendekeza code. Wanafunzi wengi wanaweza kisha kuendesha code ambayo bado hawangeweza kuiandika peke yao, na kujifunza kutoka kwayo.",
            "Jenga uelewa: wanafunzi lazima waongeze maelezo (comment) kwa kila mstari yanayoeleza unachofanya, watabiri grafu kabla ya kuendesha code, na wakague namba moja ya matokeo kwa mkono. Wasipoweza kueleza code, bado hawajaielewa."
          ],
          steps: ["Chagua seti ya data ya umma na swali.", "Wanafunzi wanaiomba AI isaidie kuandika code ya hatua moja.", "Wanafunzi wanaandika maelezo kwa kila mstari kwa maneno yao.", "Tabiri matokeo, kisha endesha code.", "Kagua namba moja kwa mkono."],
          words: [["Seti ya data (dataset)", "mkusanyiko wa data uliopangwa, mara nyingi jedwali."], ["CSV", "aina rahisi ya faili ya majedwali, ambayo thamani zinatenganishwa kwa koma."], ["Maelezo ya code (comment)", "dokezo ndani ya code, mara nyingi linaanza na #, linaloeleza code inafanya nini."]],
          slides: [
            { title: "Data halisi, zana za bure", bullets: ["Data ya umma: hali ya hewa, afya, michezo", "Google Colab: bure, ndani ya kivinjari", "Kagua sheria za wilaya kuhusu akaunti za wanafunzi"] },
            { title: "AI kama msaidizi wa code", bullets: ["Eleza hatua kwa maneno", "AI inapendekeza code", "Wanafunzi wanaendesha wasichoweza bado kuandika"] },
            { title: "Jenga uelewa", bullets: ["Andika maelezo kwa kila mstari", "Tabiri, kisha endesha", "Kagua namba moja kwa mkono"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }],
          tryIt: "Tafuta seti ya data ya umma kuhusu mada ambayo wanafunzi wako wanaipenda. Tumia AI kusaidia kuandika code katika Colab inayochora grafu ya kigezo kimoja, ongeza maelezo kwa kila mstari, na ukague namba moja kwa mkono.",
          youCanNow: "kupanga uchunguzi wa data ambapo AI inasaidia na code na wanafunzi wanaonyesha uelewa.",
          quickCheck: [
            { objective: "O2", q: "Google Colab ni nini?", options: ["Daftari la Python la bure linalofanya kazi ndani ya kivinjari", "Programu ya takwimu ya kulipia", "Zana inayotengeneza slaidi tu", "Seti ya data ya rekodi za hali ya hewa"], answer: 0, why: "Colab inawawezesha wanafunzi kuendesha Python ndani ya kivinjari kwa akaunti ya Google." },
            { objective: "O2", q: "Mwanafunzi aliendesha code iliyoandikwa na AI akapata grafu lakini hawezi kusema code inafanya nini. Ungefanya nini?", options: ["Kukubali grafu kuwa kazi imekamilika", "Kumwambia aandike maelezo kwa kila mstari kwa maneno yake na akague namba moja kwa mkono", "Kuiomba AI iandike programu ndefu zaidi", "Kumpa alama ya chini na kuendelea"], answer: 1, why: "Wanafunzi wasipoweza kueleza code, bado hawajaielewa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Simulizi, picha na maelezo",
          minutes: 5,
          goal: "Tumia AI kutengeneza maelezo na picha, na uzikague kuona dhana potofu.",
          text: [
            "AI inaweza kueleza mawazo ya STEM kwa njia kadhaa (mfano-linganishi, hatua kwa hatua, hadithi) na kupendekeza michoro, simulizi au maonyesho. Zana za bure za simulizi na grafu kama simulizi za PhET na Desmos zinawawezesha wanafunzi kuchunguza; AI inaweza kukusaidia kuandika maswali ya kuwaongoza.",
            "Kuwa makini na dhana potofu. Mifano-linganishi ya AI inaweza kupotosha (kwa mfano, kueleza mkondo wa umeme kwa mtiririko wa maji kwa namna isiyofaa), na michoro iliyotengenezwa na AI inaweza kuwa na makosa ya kisayansi. Kagua kila maelezo ukilinganisha na mtaala wako na chanzo cha kuaminika.",
            "Mbinu nzuri darasani: wape wanafunzi maelezo ya AI yenye kosa la makusudi au kosa halisi na waombe walitafute na kulirekebisha. Kutafuta makosa katika matokeo ya AI ni ujuzi wa kisayansi."
          ],
          steps: ["Iombe AI maelezo mawili au matatu ya dhana moja.", "Kagua kila moja dhidi ya mtaala wako na chanzo cha kuaminika.", "Tumia AI kuandika maswali ya kuongoza kwa simulizi.", "Kagua michoro kama iko sahihi kisayansi.", "Waambie wanafunzi watafute makosa katika maelezo ya AI."],
          words: [["Simulizi (simulation)", "mfano wa kompyuta unaokuwezesha kuchunguza jinsi kitu kinavyofanya kazi."], ["Mfano-linganishi (analogy)", "kueleza kitu kwa kukilinganisha na kitu kinachojulikana."], ["Dhana potofu", "wazo la kawaida lisilo sahihi kuhusu jinsi kitu kinavyofanya kazi."]],
          slides: [
            { title: "Maelezo na simulizi", bullets: ["Njia kadhaa za kueleza wazo moja", "Maswali ya kuongoza kwa PhET au Desmos"] },
            { title: "Kuwa makini na dhana potofu", bullets: ["Mifano-linganishi inaweza kupotosha", "Michoro ya AI inaweza kuwa na makosa", "Kagua dhidi ya chanzo cha kuaminika"] },
            { title: "Tafuta kosa", bullets: ["Wape wanafunzi maelezo ya AI yenye kosa", "Wanalitafuta na kulirekebisha"] }
          ],
          tryIt: "Iombe AI ieleze dhana moja ya STEM unayofundisha kwa njia mbili tofauti. Tafuta dhana potofu yoyote katika kila moja, na uandike kazi ya kutafuta kosa kwa wanafunzi.",
          youCanNow: "kutumia maelezo na simulizi za AI huku ukigundua dhana potofu zilizomo.",
          quickCheck: [
            { objective: "O3", q: "Hatari ya mfano-linganishi wa AI katika sayansi ni ipi?", options: ["Daima ni mrefu mno", "Hauwezi kuchapishwa", "Unaweza kupotosha pale mfano unaposhindwa kulingana", "Unafanya kazi katika hisabati tu"], answer: 2, why: "Mifano-linganishi kama maji kwa mkondo wa umeme inaweza kushindwa na kuleta dhana potofu." },
            { objective: "O3", q: "Mchoro uliotengenezwa na AI unaopanga kuonyesha unaonekana si sahihi mahali pamoja. Ungefanya nini?", options: ["Kuukagua dhidi ya mtaala wako au chanzo cha kuaminika na kuurekebisha", "Kuuonyesha hivyo hivyo kwa sababu AI iliutengeneza", "Kuwaambia wanafunzi waukariri", "Kufuta kila mchoro wa AI ulio nao"], answer: 0, why: "Michoro ya AI inaweza kuwa na makosa ya kisayansi, kwa hiyo ikague kabla ya kuitumia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI kama chombo cha STEM",
        questions: [
          { objective: "O1", q: "AI inatoa jibu la hatua kwa hatua kwa swali la hatua nyingi. Unapaswa:", options: ["Kulitumia kama lilivyo", "Kulirefusha", "Kulikagua kabla wanafunzi hawajaliona", "Kufuta hatua"], answer: 2, why: "AI hufanya makosa ya hesabu na ya kufikiri." },
          { objective: "O1", q: "Njia nzuri ya kukagua jibu la AI ni:", options: ["Kulikagua kwa njia ya pili au kikokotoo", "Kuuliza swali lile lile tena na kukubali jibu lile lile", "Kuliamini likiwa na kujiamini", "Kumwomba mwanafunzi abahatishe"], answer: 0, why: "Njia ya pili inagundua makosa." },
          { objective: "O2", q: "Rasilimali za bure za Google Colab:", options: ["Zina uhakika na hazina kikomo", "Ni za kulipia tu", "Ni za walimu tu", "Hazina uhakika; hifadhi kazi mara kwa mara"], answer: 3, why: "Colab inasema rasilimali za bure hazina uhakika." },
          { objective: "O2", q: "Wanafunzi walitumia AI kuandika code. Wanaonyeshaje uelewa?", options: ["Kuiendesha bila kuisoma", "Kuandika maelezo kwa kila mstari kwa maneno yao na kukagua matokeo kwa mkono", "Kuinakili kwenye daftari jingine", "Kuiomba AI imweleze mwalimu"], answer: 1, why: "Kueleza na kukagua kunajenga uelewa." },
          { objective: "O3", q: "Kwa nini uwape wanafunzi maelezo ya AI yenye kosa?", options: ["Kuwachanganya", "Ni jaribio la kasi", "Kuokoa muda", "Kutafuta makosa katika matokeo ya AI ni ujuzi wa kisayansi"], answer: 3, why: "Kukagua madai ndicho wanasayansi wanachofanya." }
        ]
      }
    },
    {
      name: "Sura 2: AI kama somo la STEM",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jinsi mashine zinavyojifunza kutoka kwa data",
          minutes: 6,
          goal: "Fundisha wazo la msingi la machine learning kwa mfano wa vitendo.",
          text: [
            "Machine learning (ujifunzaji wa mashine) ni mada ya STEM ambayo wanafunzi wanaweza kuielewa. Wazo kuu: badala ya kuandika sheria, tunaionyesha programu mifano mingi yenye lebo (data ya mafunzo) nayo inapata mifumo, kisha inafanya utabiri kwa mifano mipya. Usahihi wake unategemea data: mifano michache mno, au mifano isiyo ya aina mbalimbali, inaleta utabiri usio sahihi.",
            "Kwa vitendo: zana za bure kama Teachable Machine ya Google zinawawezesha wanafunzi kufundisha kipangaji rahisi cha picha au sauti ndani ya kivinjari; kagua masharti yake na idhini ya wilaya yako kabla wanafunzi hawajaitumia. Toleo lisilotumia kifaa linafanya kazi pia: wanafunzi wanapanga kadi za wanyama kwa sifa zao na kuandika sheria, kisha wanazijaribu kwa kadi mpya.",
            "Kisha ulize maswali makubwa: Nini kinatokea kama data ya mafunzo inaonyesha aina moja tu ya mfano? Tungepimaje usahihi? Hii inaunganisha machine learning na takwimu, ubora wa data na haki."
          ],
          steps: ["Eleza: mifano yenye lebo inaingia, mifumo inapatikana, utabiri unatoka.", "Fundisha kipangaji rahisi, au fanya upangaji wa kadi bila kifaa.", "Kijaribu kwa mifano mipya.", "Badilisha data ya mafunzo na uone kinachotokea.", "Jadili usahihi, ubora wa data na haki."],
          words: [["Machine learning", "programu zinazojifunza mifumo kutoka kwa mifano badala ya kufuata sheria zilizoandikwa na mtu."], ["Data ya mafunzo", "mifano yenye lebo ambayo programu inajifunza kutoka kwayo."], ["Kipangaji (classifier)", "programu inayopanga vitu katika makundi."]],
          slides: [
            { title: "Machine learning kwa mstari mmoja", bullets: ["Mifano yenye lebo inaingia", "Mifumo inapatikana", "Utabiri kwa mifano mipya"] },
            { title: "Kwa vitendo", bullets: ["Fundisha kipangaji rahisi ndani ya kivinjari", "Au upangaji wa kadi bila kifaa", "Kagua masharti na idhini kwanza"] },
            { title: "Maswali makubwa", bullets: ["Je, data ikiwa ya upande mmoja?", "Tunapimaje usahihi?", "Inaunganisha na takwimu na haki"] }
          ],
          tryIt: "Panga shughuli ya dakika 20 ambapo wanafunzi wanafundisha (au wanaiga bila kifaa) kipangaji rahisi, kisha wanabadilisha data ya mafunzo na kueleza nini kilitokea kwa utabiri wake.",
          youCanNow: "kufundisha wazo kuu la machine learning kwa shughuli ya vitendo.",
          quickCheck: [
            { objective: "O4", q: "Wazo kuu la machine learning ni lipi?", options: ["Mtu anaandika kila sheria kwa mkono", "Programu inakariri jibu moja", "Kompyuta inabahatisha bila mpangilio", "Programu inapata mifumo katika mifano mingi yenye lebo"], answer: 3, why: "Machine learning inajifunza kutoka kwa data ya mafunzo badala ya sheria zilizoandikwa kwa mkono." },
            { objective: "O4", q: "Darasa lako halina vifaa vya Teachable Machine. Ungefanya nini?", options: ["Kuruka mada", "Kufanya toleo lisilotumia kifaa: kupanga kadi za wanyama kwa sifa, kuandika sheria, kujaribu kwa kadi mpya", "Kuonyesha video tu", "Kusubiri hadi mwaka ujao"], answer: 1, why: "Shughuli ya kadi bila kifaa inafundisha wazo lile lile bila vifaa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua madai ya AI kama mwanasayansi",
          minutes: 5,
          goal: "Wafundishe wanafunzi utaratibu wa kujaribu madai ya AI dhidi ya ushahidi.",
          text: [
            "Kufikiri kisayansi ndiyo kinga bora dhidi ya makosa ya AI. Fundisha utaratibu wa hatua nne: Dai: AI inasema nini hasa? Ushahidi: data au chanzo gani kingeonyesha ni kweli? Jaribio: kagua dai dhidi ya data, hesabu, jaribio la maabara au chanzo cha kuaminika. Hitimisho: kubali, kataa au \"ushahidi hautoshi\".",
            "Fanya mazoezi kwa madai ya STEM ambayo AI inaweza kukosea: ubadilishaji wa vipimo, takwimu, dai la chanzo na matokeo, fomula ya kikemia, au rejeo ambalo huenda halipo. Wanafunzi wanajifunza kwamba vyanzo vya AI lazima vitafutwe na kukaguliwa, si kuaminiwa.",
            "Utaratibu huu unafanya kazi katika masomo yote na unajenga tabia unayotaka kwa maisha yote: matokeo ya AI ni dhana ya kujaribu, si jibu la kunakili."
          ],
          steps: ["Dai: sema hasa AI inasema nini.", "Ushahidi: nini kingeonyesha ni kweli?", "Jaribio: data, hesabu, jaribio la maabara au chanzo cha kuaminika.", "Hitimisho: kubali, kataa au ushahidi hautoshi."],
          words: [["Dai", "kauli kwamba kitu fulani ni kweli."], ["Dhana (hypothesis)", "wazo linaloweza kujaribiwa."], ["Rejeo (citation)", "kutaja chanzo cha taarifa."]],
          slides: [
            { title: "Utaratibu wa hatua nne", bullets: ["Dai", "Ushahidi", "Jaribio", "Hitimisho"] },
            { title: "Madai ya kufanyia mazoezi", bullets: ["Ubadilishaji wa vipimo na takwimu", "Chanzo na matokeo", "Marejeo ambayo huenda hayapo"] },
            { title: "Tabia ya maisha", bullets: ["Matokeo ya AI ni dhana", "Ijaribu, usiinakili"] }
          ],
          tryIt: "Kusanya madai matatu ya STEM kutoka zana ya AI kuhusu mada unayofundisha. Pitisha kila moja katika utaratibu wa hatua nne na uandike yapi yalisimama.",
          youCanNow: "kuwafundisha wanafunzi kujaribu madai ya AI kama wanasayansi.",
          quickCheck: [
            { objective: "O5", q: "Katika utaratibu wa kukagua, nini kinafuata mara baada ya \"Dai\"?", options: ["Hitimisho", "Jaribio", "Ushahidi", "Kuchapisha"], answer: 2, why: "Utaratibu ni Dai, Ushahidi, Jaribio, Hitimisho." },
            { objective: "O5", q: "AI inawapa wanafunzi takwimu pamoja na rejeo. Wanapaswa kufanya nini?", options: ["Kunakili rejeo katika ripoti yao", "Kuiuliza AI kama rejeo ni la kweli", "Kupuuza takwimu", "Kutafuta chanzo na kuhakikisha kipo na kinasema hivyo"], answer: 3, why: "Vyanzo vya AI lazima vitafutwe na kukaguliwa, si kuaminiwa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usanifu wa kihandisi na kazi zinazoonyesha fikra",
          minutes: 6,
          goal: "Tumia AI katika mchakato wa usanifu wa kihandisi na ubuni kazi ambazo fikra zinabaki wazi.",
          text: [
            "Katika mchakato wa usanifu wa kihandisi (kufafanua tatizo, kutoa mawazo, kupanga, kujenga, kujaribu, kuboresha), AI ina manufaa zaidi katika hatua za kutoa mawazo na kuboresha: kutoa mawazo mengi ya miundo, kupendekeza majaribio, au kueleza kwa nini mfano wa majaribio ulishindwa. Wanafunzi bado wanachagua, wanajenga, wanajaribu na wanatetea uamuzi wao.",
            "Kwa sababu AI inaweza kutatua maswali mengi ya vitabu vya kiada, buni kazi ambazo fikra zinaonekana: waombe wanafunzi waeleze kwa nini njia inafanya kazi, walinganishe njia mbili, watafute kosa, watabiri kabla ya kuhesabu, au watumie wazo kwa data yao wenyewe au muundo wao. Maelezo ya mdomo na madaftari ya maabara yanaonyesha fikra.",
            "Weka lebo ya kiwango cha matumizi ya AI kwa kila kazi ili wanafunzi wajue lini AI ni chombo na lini ujuzi lazima uonyeshwe bila msaada, na ueleze kwa nini."
          ],
          steps: ["Tumia AI kutoa mawazo na kuboresha katika usanifu.", "Wanafunzi wanachagua, wanajenga, wanajaribu na wanatetea.", "Buni kazi: eleza, linganisha, tafuta makosa, tabiri, tumia.", "Tumia maelezo ya mdomo na madaftari ya maabara.", "Weka lebo ya kiwango cha matumizi ya AI kwa kila kazi."],
          words: [["Mchakato wa usanifu wa kihandisi", "mzunguko wa kufafanua tatizo, kubuni, kujenga, kujaribu na kuboresha."], ["Mfano wa majaribio (prototype)", "mfano wa mwanzo uliojengwa kujaribu wazo."], ["Daftari la maabara", "kumbukumbu ya kile mwanafunzi alichofanya, alichoona na alichohitimisha."]],
          slides: [
            { title: "AI katika usanifu wa kihandisi", bullets: ["Toa mawazo mengi", "Pendekeza majaribio; eleza kushindwa", "Wanafunzi wanachagua, wanajenga, wanajaribu, wanatetea"] },
            { title: "Weka fikra wazi", bullets: ["Eleza kwa nini, linganisha njia", "Tafuta kosa, tabiri kwanza", "Tumia kwa data au muundo wao wenyewe"] },
            { title: "Weka lebo ya kiwango cha AI", bullets: ["Lini AI ni chombo", "Lini ujuzi unaonyeshwa bila msaada"] }
          ],
          tryIt: "Kazi ya mwisho: panga somo lako la STEM ambalo wanafunzi wanatumia zana ya AI iliyoidhinishwa katika uchunguzi au changamoto ya usanifu, pamoja na hatua ya kukagua, kazi ya kufikiri kwa maneno yao wenyewe, na kiwango cha matumizi ya AI. Lifundishe ukiweza na uandike wanafunzi walipata nini walipokagua AI.",
          youCanNow: "kuongoza ujifunzaji wa STEM ambapo wanafunzi wanatumia AI kama chombo, wanaikagua kwa makini na wanaweka fikra zao wenyewe wazi.",
          quickCheck: [
            { objective: "O6", q: "AI ina manufaa zaidi katika hatua zipi za mchakato wa usanifu wa kihandisi?", options: ["Kutoa mawazo na kuboresha", "Kujenga na kujaribu tu", "Kufafanua tatizo tu", "Hakuna hatua yoyote"], answer: 0, why: "AI inasaidia kutoa mawazo na kueleza kushindwa; wanafunzi bado wanachagua, wanajenga, wanajaribu na wanatetea." },
            { objective: "O6", q: "AI inaweza kutatua seti yako ya maswali ya kitabu cha kiada. Ungebadilisha nini ili fikra zibaki wazi?", options: ["Kutoa maswali mengi zaidi ya aina hiyo hiyo", "Kupiga marufuku vikokotoo", "Kuwaomba wanafunzi watabiri kwanza na waeleze kwa nini njia inafanya kazi", "Kutoa majibu mapema"], answer: 2, why: "Kutabiri, kueleza na kulinganisha njia kunaonyesha fikra ambazo AI haiwezi kuwafanyia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: AI kama somo la STEM",
        questions: [
          { objective: "O4", q: "Katika machine learning, data ya mafunzo ni:", options: ["Alama ya mwisho", "Code ya programu", "Mifano yenye lebo ambayo programu inajifunza kutoka kwayo", "Nywila"], answer: 2, why: "Mifumo inajifunzwa kutoka kwa mifano." },
          { objective: "O4", q: "Kipangaji kilichofundishwa kwa picha za aina moja tu ya mbwa huenda kikawa:", options: ["Kinatoa utabiri usio sahihi kwa mifano mbalimbali", "Kinatambua wanyama wote kikamilifu", "Kinakataa kufanya kazi", "Kinakuwa na kasi zaidi"], answer: 0, why: "Data ya upande mmoja inaleta utabiri mbaya." },
          { objective: "O5", q: "Hatua ya 3 ya utaratibu wa kukagua ni ipi?", options: ["Dai", "Jaribio", "Ushahidi", "Hitimisho"], answer: 1, why: "Jaribu dai dhidi ya data au chanzo cha kuaminika." },
          { objective: "O5", q: "AI inatoa rejeo kwa takwimu. Wanafunzi wanapaswa:", options: ["Kutafuta chanzo na kuhakikisha kipo na kinasema hivyo", "Kulinakili", "Kulipuuza", "Kuitaja AI badala yake"], answer: 0, why: "Marejeo ya AI huenda hayapo." },
          { objective: "O6", q: "Kazi ipi inaweka fikra za wanafunzi wazi zaidi?", options: ["Kutatua maswali 20 ya kitabu cha kiada nyumbani", "Kutazama video tu", "Kunakili majibu", "Kutabiri kabla ya kuhesabu na kueleza kwa nini njia inafanya kazi"], answer: 3, why: "Kutabiri na kueleza kunaonyesha fikra." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI katika Elimu ya STEM",
    questions: [
      { objective: "O1", q: "STEM inasimama kwa:", options: ["Wanafunzi, walimu, wahariri, mameneja", "Sayansi, teknolojia, uhandisi na hisabati", "Kusoma, kupima, kutathmini, kukariri", "Programu, zana, barua pepe, vyombo vya habari"], answer: 1, why: "Nyanja hizo nne." },
      { objective: "O1", q: "AI hukosea hasa katika:", options: ["Orodha za rangi", "Ujumbe wa salamu", "Maswali ya hisabati ya hatua nyingi", "Kuandika maneno ya kawaida"], answer: 2, why: "Kufikiri kwa hatua nyingi kunaleta makosa." },
      { objective: "O1", q: "Desmos ina manufaa kwa:", options: ["Barua pepe", "Kusahihisha insha", "Kuchora grafu na kukagua hisabati", "Mahudhurio"], answer: 2, why: "Zana za grafu zinakagua majibu kwa kuonyesha." },
      { objective: "O1", q: "Kuiomba AI makosa ya kawaida katika swali kunakupa:", options: ["Maswali ya majadiliano kuhusu dhana potofu", "Jibu la mwisho", "Alama", "Njia ya mkato"], answer: 0, why: "Makosa ni mada nzuri ya majadiliano." },
      { objective: "O2", q: "Google Colab ni:", options: ["App ya video", "Kompyuta mpakato ya kulipia", "Zana ya kutoa alama", "Daftari la Python la bure ndani ya kivinjari"], answer: 3, why: "Inaendesha Python mtandaoni." },
      { objective: "O2", q: "Faili ya CSV ni:", options: ["Picha", "Faili rahisi ya jedwali yenye thamani zinazotenganishwa kwa koma", "Video", "Faili ya nywila"], answer: 1, why: "Inatumika sana kwa seti za data." },
      { objective: "O2", q: "Maelezo ya code (comment) yanaeleza:", options: ["Hakuna kitu", "Hali ya hewa", "Alama ya mwanafunzi", "Mstari wa code unafanya nini"], answer: 3, why: "Maelezo yanaonyesha uelewa." },
      { objective: "O2", q: "Kutabiri grafu kabla ya kuendesha code kunawasaidia wanafunzi:", options: ["Kuendesha code haraka zaidi", "Kuruka kujifunza", "Kufikiri code inapaswa kufanya nini", "Kuepuka makosa yenyewe"], answer: 2, why: "Kutabiri kunajenga uwezo wa kufikiri." },
      { objective: "O3", q: "Mifano-linganishi ya AI katika sayansi inaweza:", options: ["Kupotosha ikishindwa kulingana", "Kamwe isikosee", "Kuchukua nafasi ya majaribio", "Kuthibitisha madai"], answer: 0, why: "Kagua mifano-linganishi kuona dhana potofu." },
      { objective: "O3", q: "Simulizi inawawezesha wanafunzi:", options: ["Kuepuka kufikiri", "Kuchunguza jinsi kitu kinavyofanya kazi kwa mfano", "Kujipa alama wenyewe", "Kuruka somo"], answer: 1, why: "Mifano inasaidia uchunguzi." },
      { objective: "O4", q: "Machine learning inapata:", options: ["Mifumo katika mifano yenye lebo", "Sheria zilizoandikwa kwa mkono tu", "Nywila", "Faili zilizopotea"], answer: 0, why: "Inajifunza kutoka kwa data." },
      { objective: "O4", q: "Data ya mafunzo isipokuwa ya aina mbalimbali, utabiri:", options: ["Unasimama kabisa", "Daima ni sahihi", "Unakuwa wa haraka zaidi", "Huenda ukawa si sahihi kwa mifano mipya"], answer: 3, why: "Ubora wa data unaamua usahihi." },
      { objective: "O4", q: "Kabla wanafunzi hawajatumia zana kama Teachable Machine, kagua:", options: ["Rangi yake", "Masharti yake na idhini ya wilaya yako", "Umaarufu wake", "Hakuna kitu"], answer: 1, why: "Matumizi ya wanafunzi yanahitaji idhini na ukaguzi wa umri." },
      { objective: "O4", q: "Shughuli ya machine learning bila kifaa inatumia:", options: ["Simu tu", "Kompyuta mpakato tu", "Kadi na sheria, bila vifaa", "Roboti"], answer: 2, why: "Mawazo yanaweza kufundishwa bila vifaa." },
      { objective: "O5", q: "Katika utaratibu wa kukagua, \"hitimisho\" linaweza kuwa:", options: ["Kukataa kila wakati", "Kukubali kila wakati", "Kukubali, kukataa au ushahidi hautoshi", "Kuruka"], answer: 2, why: "Ushahidi unaamua." },
      { objective: "O5", q: "Matokeo ya AI yanapaswa kuchukuliwa kama:", options: ["Dhana ya kujaribu", "Jibu la mwisho", "Sheria", "Alama"], answer: 0, why: "Jaribu kabla ya kuamini." },
      { objective: "O6", q: "Katika usanifu wa kihandisi, AI ina manufaa zaidi kwa:", options: ["Kutoa alama kwa miundo", "Kujenga mfano wa majaribio kwa niaba ya wanafunzi", "Kujaribu vifaa halisi yenyewe", "Kutoa mawazo na kuboresha"], answer: 3, why: "Wanafunzi bado wanajenga, wanajaribu na wanatetea." },
      { objective: "O6", q: "Mfano wa majaribio (prototype) ni:", options: ["Bidhaa ya mwisho", "Mfano wa mwanzo wa kujaribu wazo", "Alama ya mtihani", "Leseni ya programu"], answer: 1, why: "Mifano ya majaribio inajaribiwa na kuboreshwa." },
      { objective: "O6", q: "Daftari la maabara linaonyesha:", options: ["Mahudhurio", "Jibu la mwisho tu", "Mpango wa mwalimu", "Kile mwanafunzi alichofanya, alichoona na alichohitimisha"], answer: 3, why: "Linaifanya fikra ionekane." },
      { objective: "O6", q: "Kila kazi ya STEM inapaswa kuwekewa lebo ya:", options: ["Nywila", "Bei", "Kiwango cha matumizi ya AI", "Hakuna kitu"], answer: 2, why: "Wanafunzi wanahitaji kujua lini AI inaruhusiwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      4,
      7,
      8,
      10,
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "AI kama chombo katika uchunguzi",
        objective: "O2",
        notYet: "AI inafanya uchunguzi kwa niaba ya wanafunzi, au zana haijaidhinishwa.",
        meets: "Wanafunzi wanatumia zana ya AI iliyoidhinishwa kwa sehemu moja iliyo wazi, kama kuandika code au kutoa mawazo ya miundo.",
        exceeds: "Wanafunzi pia wanatabiri matokeo ya AI yanapaswa kuonyesha nini kabla ya kuyaendesha."
      },
      {
        name: "Hatua ya kukagua",
        objective: "O5",
        notYet: "Hakuna hatua ambayo wanafunzi wanakagua matokeo ya AI.",
        meets: "Wanafunzi wanakagua code, namba au madai ya AI kwa kutumia data, hesabu au jaribio.",
        exceeds: "Wanafunzi wanaandika hitimisho: kubali, kataa au ushahidi hautoshi, pamoja na sababu."
      },
      {
        name: "Fikra kwa maneno yao wenyewe",
        objective: "O6",
        notYet: "Wanafunzi wanakabidhi jibu au grafu tu.",
        meets: "Kazi ambayo wanafunzi wanaeleza jinsi walivyofikiri kwa maneno yao wenyewe.",
        exceeds: "Wanafunzi pia wanalinganisha njia mbili au wanatafuta kosa."
      },
      {
        name: "Kiwango cha matumizi ya AI",
        objective: "O6",
        notYet: "Hakuna kiwango cha matumizi ya AI kilichotolewa.",
        meets: "Kazi imewekewa lebo ya kiwango cha matumizi ya AI.",
        exceeds: "Mpango unawaeleza wanafunzi kwa nini kiwango hicho kinafaa kazi hiyo."
      },
      {
        name: "Mwalimu alikagua vifaa vya kufundishia",
        objective: "O1",
        notYet: "Maswali, code au maelezo yaliyotengenezwa na AI hayakukaguliwa.",
        meets: "Kila jibu na maelezo yaliyotengenezwa na AI yalikaguliwa kabla ya darasa.",
        exceeds: "Mpango unataja njia iliyotumika kukagua, kama kikokotoo, Desmos au chanzo cha kuaminika."
      }
    ]
  },
  evaluation: {
    results: [
      "Walimu wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Walimu wanaofundisha somo la STEM lenye hatua ya kukagua AI ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoweza kutaja kosa la AI walilogundua na jinsi walivyolikagua",
      "Walimu wanaochukua kozi nyingine ya Koach Learn ya AI kwa waelimishaji"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye msaidizi wa AI ambao wilaya yako inaruhusu",
      "Zana za bure kama Desmos, simulizi za PhET, Google Colab au Teachable Machine, pale wilaya yako inapoziidhinisha",
      "Somo moja la STEM au changamoto ya usanifu utakayofundisha hivi karibuni",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Iendeshe kama kikao cha idara: fanyeni jaribio la awali pamoja, kisha kila mwalimu apange somo moja kwa darasa lake.",
      "Kagua idhini ya wilaya na sheria za akaunti za wanafunzi kabla mtu yeyote hajajaribu Colab au Teachable Machine na wanafunzi.",
      "Waambie walimu wawili wawili wabadilishane seti moja ya maswali iliyotengenezwa na AI na wakague majibu ya wenzao kwa njia ya pili.",
      "Tumia shughuli ya kadi bila kifaa pale vifaa au idhini havijawa tayari.",
      "Pima kazi ya mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
