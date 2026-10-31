"use strict";

// Koach Learn course (Swahili translation of shared/ai-community-advocacy.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-community-advocacy-sw",
  lang: "sw",
  translationOf: "ai-community-advocacy",
  category: "Non Profits",
  name: "AI kwa Utetezi wa Jamii",
  skills: "Kueleza tatizo na ombi lililo wazi, Kutafuta ukweli na kukagua vyanzo, Kumtambua mwenye mamlaka ya kuamua, Kuandika barua au maoni ya umma kwa msaada wa AI, Kutengeneza karatasi ya ukweli ya ukurasa mmoja, Kutoa ushuhuda wa hadharani wa dakika mbili",
  outcome: "kupanga kampeni ndogo ya utetezi kuhusu tatizo la eneo lako kwa msaada wa AI: kueleza ombi lililo wazi, kuliunga mkono kwa ukweli uliokaguliwa na hadithi za kweli, kumfikia mwenye mamlaka sahihi kwa barua au maoni ya umma na karatasi ya ukweli ya ukurasa mmoja, na kusema hadharani kwa ushuhuda wa dakika mbili, huku ukifuata kanuni za mashirika yasiyo ya faida.",
  about: [
    "Utetezi ni kusema wazi ili kubadilisha jambo: kivuko hatari cha barabara, njia ya basi iliyofutwa, bustani inayohitaji taa, au kanuni inayowazuia watu kupata kazi au makazi. Jamii zinazosema kwa uwazi na kwa ukweli husikilizwa mara nyingi zaidi.",
    "Kozi hii ni kwa wafanyakazi na wajitolea wa mashirika yasiyo ya faida, vikundi vya dini na vya mtaa, na wanajamii wanaotaka kuleta mabadiliko. Wasaidizi wa AI kama ChatGPT, Microsoft Copilot na Google Gemini wanaweza kusaidia kutafuta habari, kuandika barua, kutengeneza karatasi za ukweli na kufanya mazoezi ya hotuba, huku sauti ya jamii yako na hadithi zake za kweli zikibaki katikati.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi. Utetezi hapa unahusu masuala, si wagombea; mashirika yasiyo ya faida yana kanuni maalum, zinazoelezwa katika Somo la 6."
  ],
  finalTask: "Tengeneza kifurushi cha utetezi kwa tatizo moja halisi la eneo lako: tatizo kwa sentensi moja na ombi mahususi, ukweli tatu wenye vyanzo rasmi, hadithi mbili fupi za jamii zilizoshirikiwa kwa ruhusa, jina la mwenye mamlaka ya kuamua na jinsi ya kumfikia, barua au maoni ya umma yasiyozidi maneno 300, karatasi ya ukweli ya ukurasa mmoja, na ushuhuda wa dakika mbili ulioufanyia mazoezi kwa sauti.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyakazi na wajitolea wa mashirika yasiyo ya faida, vikundi vya dini na vya mtaa, na wanajamii wanaotaka kubadilisha tatizo la eneo lao, kama kivuko hatari cha barabara, njia ya basi iliyofutwa au kanuni inayowazuia watu kupata kazi au makazi.",
    startingPoint: "Wanajali tatizo la eneo lao na wanaweza kulizungumzia na majirani. Wengi hawajawahi kuandika maoni ya umma, kumtafuta mwenye mamlaka sahihi, kukagua ukweli kwenye vyanzo rasmi au kusema katika mkutano wa hadhara.",
    gap: "Jamii zinazosema kwa ombi lililo wazi, ukweli uliokaguliwa na hadithi za kweli husikilizwa mara nyingi zaidi. Wanafunzi wanahitaji kupanga kampeni ndogo kwa msaada wa AI huku sauti ya jamii ikibaki katikati na wakifuata kanuni za mashirika yasiyo ya faida, ili juhudi zao zilete mabadiliko halisi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu au kompyuta yenye msaidizi wa AI wa bure na zana ya bure ya kubuni au ya kuandika nyaraka",
      "Hadithi zinashirikiwa kwa ruhusa tu, na taarifa binafsi haziwekwi kwenye prompt za AI",
      "Kanuni za mashirika yasiyo ya faida: utetezi wa masuala tu, bila kuunga mkono wagombea; wanafunzi wanakagua mwongozo wa IRS",
      "Muda: masomo ya kama dakika tano, pamoja na muda wa kutafuta habari na kufanya mazoezi"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa zana za AI wanaweza kuanza na kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa wasiwasi wa jamii", action: "kuandika tatizo kwa sentensi moja na ombi mahususi linalosema nini, kutoka kwa nani na lini", standard: "lililoundwa pamoja na angalau watu wawili walioathirika" },
    { id: "O2", condition: "Kwa tatizo lako", action: "kutafuta ukweli kutoka vyanzo rasmi au vinavyoaminika na kukusanya hadithi za jamii", standard: "ukiwa na ukweli tatu, kila mmoja na chanzo, kiungo na tarehe, na hadithi zilizoshirikiwa kwa ruhusa tu" },
    { id: "O3", condition: "Ukitumia tovuti rasmi", action: "kumtambua mwenye mamlaka ya kuamua, mkutano unaofuata au mwisho wa kutoa maoni, washirika wako na wapinzani wanaowezekana", standard: "huku mwenye mamlaka akithibitishwa kwenye chanzo rasmi" },
    { id: "O4", condition: "Ukitumia ukweli uliokagua na hadithi moja", action: "kuandika barua au maoni ya umma yenye heshima yanayotoa ombi lako", standard: "kwa maneno chini ya 300, yakiwa na wewe ni nani, ukweli, hadithi na ombi" },
    { id: "O5", condition: "Ukitumia AI kwa maandishi na zana ya bure ya kubuni", action: "kutengeneza karatasi ya ukweli ya ukurasa mmoja yenye ombi ndani ya kisanduku kilicho wazi", standard: "ili msomaji aweze kukuambia ombi baada ya dakika moja" },
    { id: "O6", condition: "Katika mkutano wa hadhara", action: "kutoa ushuhuda wa dakika mbili na kupanga hatua za wafuasi ndani ya kanuni za utetezi za mashirika yasiyo ya faida", standard: "kwa muda wa dakika mbili au chini na bila kuunga mkono wagombea" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujenga hoja yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kueleza tatizo na ombi lako",
          minutes: 5,
          goal: "Geuza wasiwasi wa jamii kuwa maelezo wazi ya tatizo na ombi mahususi.",
          text: [
            "Wasiwasi mkubwa kama \"mtaa wetu si salama\" ni mgumu kwa viongozi kuushughulikia. Upunguze uwe tatizo moja mahususi: \"Watoto wanavuka njia sita za Barabara Kuu kwenye Barabara ya 5 kwenda shuleni, na hakuna taa ya kuvukia.\"",
            "Kisha toa ombi mahususi: unataka nini hasa, kutoka kwa nani, na kufikia lini. \"Tunaiomba Idara ya Usafiri ya Jiji iweke taa ya watembea kwa miguu kwenye Barabara Kuu na ya 5 kabla ya mwaka ujao wa shule.\" Ombi lililo wazi linawapa wenye mamlaka kitu cha kukubali.",
            "Iombe AI ikusaidie kuliboresha: \"Nisaidie kugeuza wasiwasi huu kuwa tatizo la sentensi moja na ombi mahususi linalowezekana: [wasiwasi wako].\" Kisha likague pamoja na watu walioathirika zaidi. Utetezi unafanya kazi vizuri zaidi jamii inapounda ombi."
          ],
          steps: ["Andika wasiwasi kwa maneno yako mwenyewe.", "Upunguze uwe tatizo moja mahususi, mahali na kundi lililoathirika.", "Andika ombi: nini, nani anaamua, kufikia lini.", "Iombe AI iboreshe maneno.", "Likague pamoja na watu walioathirika zaidi."],
          words: [["Utetezi", "kusema wazi ili kubadilisha sera, desturi au uamuzi."], ["Ombi", "hatua mahususi unayotaka mwenye mamlaka ya kuamua achukue."], ["Maelezo ya tatizo", "sentensi moja au mbili zinazoeleza tatizo kwa uwazi."]],
          slides: [
            { title: "Kutoka wasiwasi hadi tatizo", bullets: ["\"Si salama\" ni pana mno", "Taja mahali, watu na tatizo"] },
            { title: "Ombi mahususi", bullets: ["Nini hasa", "Kutoka kwa nani", "Kufikia lini"] },
            { title: "Jamii kwanza", bullets: ["AI inaboresha maneno", "Watu walioathirika wanaunda ombi"] }
          ],
          tryIt: "Chagua wasiwasi halisi wa eneo lako. Andika tatizo kwa sentensi moja na ombi mahususi, tumia AI kuyaboresha, na uyashiriki na watu wawili walioathirika.",
          youCanNow: "kugeuza wasiwasi kuwa maelezo wazi ya tatizo na ombi mahususi.",
          quickCheck: [
            { objective: "O1", q: "Ombi lenye nguvu lina vitu gani vitatu?", options: ["Jina lako, umri na anwani", "Nini, kutoka kwa nani na kufikia lini", "Kauli mbiu, nembo na rangi", "Lalamiko, tishio na tarehe ya mwisho"], answer: 1, why: "Ombi lenye nguvu linataja hatua, mwenye mamlaka ya kuamua na tarehe ya mwisho." },
            { objective: "O1", q: "Wasiwasi wa kikundi chako ni \"mtaa wetu si salama.\" Ungefanya nini kwanza?", options: ["Kuupunguza uwe tatizo moja mahususi ambalo viongozi wanaweza kulishughulikia", "Kuutuma kwa kila kiongozi katika jimbo", "Kuuweka mtandaoni bila mabadiliko", "Kusubiri mambo yawe mabaya zaidi"], answer: 0, why: "Matatizo mahususi yanaleta hatua mahususi ambazo viongozi wanaweza kuchukua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutafuta ukweli na kukagua vyanzo",
          minutes: 6,
          goal: "Tafuta ukweli unaounga mkono hoja yako na ukague kila mmoja kwenye chanzo rasmi au kinachoaminika.",
          text: [
            "Ukweli unawafanya viongozi wasikilize. Vyanzo vyenye manufaa: tovuti za jiji na kaunti, kumbukumbu za mikutano na bajeti, mashirika ya serikali ya jimbo, U.S. Census Bureau (ofisi ya sensa ya Marekani, data.census.gov) kwa takwimu za idadi ya watu na mapato, takwimu za polisi au za usafiri, habari za eneo, na tafiti za vyuo vikuu au mashirika yasiyo ya faida.",
            "AI inaweza kupendekeza mahali pa kutafuta na nini cha kutafuta: \"Ni aina gani ya takwimu za umma zingeonyesha matatizo ya usalama wa watembea kwa miguu kwenye makutano katika jiji la Marekani, na ningezipata wapi?\" Lakini AI inaweza kubuni takwimu na tafiti. Usitumie kamwe namba kutoka AI isipokuwa umeipata wewe mwenyewe kwenye chanzo cha asili.",
            "Kusanya ukweli tatu wenye nguvu, kila mmoja na jina la chanzo, kiungo na tarehe. Ongeza hadithi za kweli: mzazi, mwanafunzi, mlinzi wa kivuko. Daima omba ruhusa ya kushiriki hadithi ya mtu, na acha nje taarifa binafsi ambazo hataki zijulikane."
          ],
          steps: ["Iulize AI mahali pa kupata takwimu kuhusu tatizo lako.", "Nenda kwenye vyanzo hivyo wewe mwenyewe.", "Andika ukweli tatu wenye chanzo, kiungo na tarehe.", "Usitumie kamwe namba usiyoweza kuipata kwenye chanzo cha asili.", "Kusanya hadithi mbili kwa ruhusa."],
          words: [["Chanzo", "mahali ukweli unapotoka."], ["Chanzo cha asili", "mahali pa kwanza takwimu au taarifa zilipochapishwa."], ["Kumbukumbu za mkutano", "rekodi rasmi iliyoandikwa ya mkutano wa hadhara (kwa Kiingereza \"minutes\")."]],
          slides: [
            { title: "Ukweli unapatikana wapi", bullets: ["Tovuti za jiji, kaunti na jimbo", "Takwimu za sensa na ripoti za mashirika", "Habari za eneo na tafiti"] },
            { title: "AI inaonyesha, wewe unathibitisha", bullets: ["AI inaweza kubuni takwimu", "Tafuta kila namba kwenye chanzo cha asili", "Andika chanzo, kiungo na tarehe"] },
            { title: "Ukweli pamoja na hadithi", bullets: ["Uzoefu wa watu halisi", "Daima omba ruhusa", "Acha nje taarifa binafsi"] }
          ],
          sources: [{ name: "U.S. Census Bureau: data.census.gov", url: "https://data.census.gov/" }],
          tryIt: "Tafuta ukweli tatu kuhusu tatizo lako kutoka vyanzo rasmi au vinavyoaminika, kila mmoja na kiungo na tarehe. Waulize watu wawili kama unaweza kushiriki hadithi zao.",
          youCanNow: "kutafuta ukweli uliokaguliwa na kukusanya hadithi za jamii kwa ruhusa.",
          quickCheck: [
            { objective: "O2", q: "Chanzo kinachoaminika cha ukweli kuhusu jiji lako ni kipi?", options: ["Chapisho lolote la mitandao ya kijamii", "Jibu la AI lisilo na kiungo", "Tovuti rasmi au ripoti ya jiji lenyewe", "Uvumi kutoka kwa jirani"], answer: 2, why: "Vyanzo rasmi ni mahali ukweli unapoweza kukaguliwa na kunukuliwa." },
            { objective: "O2", q: "Jirani anakusimulia hadithi yenye nguvu kuhusu kuumia kwenye kivuko. Ungefanya nini kabla ya kuitumia?", options: ["Kuitumia na jina lake kamili na anwani", "Kubadilisha maelezo na kuitumia hata hivyo", "Kuiweka mtandaoni kwanza", "Kumwomba ruhusa na kumuuliza anataka kutajwa vipi"], answer: 3, why: "Hadithi zinashirikiwa kwa ruhusa ya mwenye hadithi tu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kumtambua mwenye mamlaka ya kuamua na wakati sahihi",
          minutes: 5,
          goal: "Tambua nani anaweza kukubali ombi lako na lini ataamua.",
          text: [
            "Utetezi unashindwa unapopelekwa kwa mtu asiye sahihi. Tafuta nani ana mamlaka ya kukubali: mjumbe wa baraza la jiji, bodi ya kaunti, bodi ya shule, mbunge wa jimbo, mkuu wa idara au meneja wa kampuni.",
            "Iulize AI: \"Katika jiji la kawaida la Marekani, nani anaamua kama taa mpya ya kivuko itawekwa, na utaratibu ni upi?\" Kisha thibitisha kwenye tovuti ya jiji lako, au piga simu ofisini. Jifunze kalenda: bajeti zinapangwa lini, baraza au bodi inakutana lini, na maoni ya umma yanapokelewa lini.",
            "Orodhesha washirika wako (majirani, shule, makanisa, biashara, mashirika mengine yasiyo ya faida) na yeyote anayeweza kupinga, na kwa nini. Washirika wanakuongezea nguvu; kuelewa upinzani kunakusaidia kujibu wasiwasi wao."
          ],
          steps: ["Iulize AI kwa kawaida nani anaamua kuhusu tatizo lako.", "Thibitisha kwenye tovuti ya serikali ya eneo lako au kwa simu.", "Tafuta tarehe za mikutano, wakati wa bajeti na vipindi vya maoni ya umma.", "Orodhesha washirika na wapinzani wanaowezekana.", "Chagua wakati wako wa kuchukua hatua."],
          words: [["Mwenye mamlaka ya kuamua", "mtu au chombo chenye mamlaka ya kukubali ombi lako."], ["Maoni ya umma", "nafasi kwa umma kusema au kuwaandikia viongozi kabla ya uamuzi."], ["Mshirika", "mtu au kikundi kinachounga mkono lengo lako."]],
          slides: [
            { title: "Nani anaweza kukubali?", bullets: ["Baraza, bodi, mbunge, mkuu wa idara", "Thibitisha kwenye tovuti rasmi"] },
            { title: "Ijue kalenda", bullets: ["Tarehe za mikutano", "Wakati wa bajeti", "Vipindi vya maoni ya umma"] },
            { title: "Ramani ya uwanja", bullets: ["Washirika: majirani, shule, makanisa, biashara", "Wapinzani na sababu zao"] }
          ],
          tryIt: "Tafuta mwenye mamlaka ya kuamua kuhusu tatizo lako na mkutano wake unaofuata au mwisho wa kutoa maoni kwenye tovuti rasmi. Orodhesha washirika watatu na wasiwasi mmoja unaowezekana kutoka kwa wapinzani.",
          youCanNow: "kumpata mwenye mamlaka sahihi ya kuamua, wakati na washirika kwa ombi la utetezi.",
          quickCheck: [
            { objective: "O3", q: "Mwenye mamlaka ya kuamua katika utetezi ni nani?", options: ["Mtu au chombo kinachoweza kukubali ombi lako", "Yeyote anayekubaliana nawe", "Gazeti", "Mtu anayelalamika kwa sauti kubwa zaidi"], answer: 0, why: "Mwenye mamlaka ya kuamua ana uwezo wa kukubali ombi lako." },
            { objective: "O3", q: "Unataka taa mpya ya bustani, lakini hujui nani anaamua. Ungefanya nini?", options: ["Kumwandikia Rais", "Kuangalia tovuti ya jiji au kupiga simu jijini kujua", "Kubahatisha na kuituma kwa bodi ya shule", "Kusubiri mtu akuambie"], answer: 1, why: "Thibitisha mwenye mamlaka kwenye chanzo rasmi kabla ya kumfikia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujenga hoja yako",
        questions: [
          { objective: "O1", q: "Ombi lipi la utetezi ndilo lililo wazi zaidi?", options: ["\"Fanyeni mambo yawe bora\"", "\"Rekebisheni usalama\"", "\"Tunaiomba Idara ya Usafiri iweke taa ya watembea kwa miguu kwenye Barabara Kuu na ya 5 kabla ya mwaka ujao wa shule\"", "\"Fanyeni kitu sasa\""], answer: 2, why: "Linasema nini, nani na lini." },
          { objective: "O2", q: "AI inakupa takwimu kuhusu ajali kwenye makutano yako. Unafanya nini?", options: ["Unaitafuta kwenye chanzo cha asili kabla ya kuitumia", "Unaitumia mara moja", "Unaiongeza juu", "Unaiandika kwa herufi nzito"], answer: 0, why: "AI inaweza kubuni takwimu." },
          { objective: "O2", q: "Kabla ya kushiriki hadithi ya jirani katika kampeni yako, lazima:", options: ["Uweke anwani yake", "Uibadilishe isikike mbaya zaidi", "Hakuna kitu", "Upate ruhusa yake"], answer: 3, why: "Hadithi ni mali ya watu walioziishi." },
          { objective: "O3", q: "Kwa nini umtafute mwenye mamlaka ya kuamua?", options: ["Ili kuweka anwani ya nyumbani kwake", "Utetezi unashindwa unapopelekwa kwa mtu asiye sahihi", "Haijalishi", "Ili kumkwepa"], answer: 1, why: "Ni mtu sahihi tu anayeweza kukubali." },
          { objective: "O3", q: "Kipindi cha maoni ya umma ni nini?", options: ["Kipindi cha televisheni", "Nafasi kwa umma kusema au kuandika kabla ya uamuzi", "Mwisho wa kulipa kodi", "Mkutano wa siri"], answer: 1, why: "Ni wakati rasmi wa umma kutoa maoni." }
        ]
      }
    },
    {
      name: "Sura 2: Kusema kwa ufanisi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika barua au maoni ya umma kwa msaada wa AI",
          minutes: 5,
          goal: "Andika barua fupi yenye heshima au maoni ya umma yanayotoa ombi lako.",
          text: [
            "Barua au maoni yenye nguvu ni mafupi (chini ya maneno 300) na yana sehemu nne: wewe ni nani na uhusiano wako na tatizo, tatizo pamoja na ukweli mmoja au miwili, hadithi fupi ya kweli, na ombi lako mahususi pamoja na shukrani.",
            "Iulize AI: \"Andika maoni ya umma yenye heshima, chini ya maneno 300, kwa Baraza la Jiji. Mimi ni mzazi katika shule ya Lincoln Elementary. Tatizo: [tatizo]. Ukweli: [ukweli uliokagua]. Hadithi: [iliyoshirikiwa kwa ruhusa]. Ombi: [ombi lako].\" Kisha yahariri yasikike kama wewe.",
            "Barua binafsi ni bora kuliko barua za nakala moja: viongozi wanagundua mamia ya ujumbe wa AI unaofanana yanapofika. Wahimize wafuasi waongeze sentensi yao wenyewe. Baki na heshima hata kama umekasirika; matusi hupuuzwa."
          ],
          steps: ["Wewe ni nani na uhusiano wako na tatizo.", "Tatizo pamoja na ukweli mmoja au miwili uliokaguliwa.", "Hadithi fupi ya kweli, iliyoshirikiwa kwa ruhusa.", "Ombi lako mahususi na shukrani.", "Ihariri isikike kama wewe; iwe chini ya maneno 300."],
          words: [["Barua ya nakala moja", "barua ileile inayotumwa na watu wengi bila mabadiliko au kwa mabadiliko kidogo (kwa Kiingereza \"form letter\")."], ["Mkazi wa eneo la kiongozi", "mtu anayeishi katika eneo la kiongozi na ambaye kiongozi huyo anamwakilisha (kwa Kiingereza \"constituent\")."]],
          slides: [
            { title: "Sehemu nne", bullets: ["Wewe ni nani", "Tatizo na ukweli", "Hadithi ya kweli", "Ombi lako na shukrani"] },
            { title: "AI inaandika rasimu, wewe unaifanya yako", bullets: ["Ipe ukweli uliokaguliwa tu", "Chini ya maneno 300", "Ifanye isikike kama wewe"] },
            { title: "Sikika", bullets: ["Barua binafsi ni bora kuliko barua zinazofanana", "Wafuasi wanaongeza sentensi yao wenyewe", "Baki na heshima"] }
          ],
          tryIt: "Andika barua au maoni ya umma yasiyozidi maneno 300 kuhusu tatizo lako kwa msaada wa AI, ukitumia ukweli uliokagua na hadithi iliyoshirikiwa kwa ruhusa. Isome kwa sauti na uihariri.",
          youCanNow: "kuandika barua fupi yenye heshima au maoni ya umma yanayotoa ombi lililo wazi.",
          quickCheck: [
            { objective: "O4", q: "Mkazi wa eneo la kiongozi (constituent) ni nani?", options: ["Mfanyakazi wa shirika lisilo la faida", "Mshawishi anayelipwa", "Mwandishi wa habari wa gazeti", "Mtu anayeishi katika eneo la kiongozi"], answer: 3, why: "Viongozi wanawasikiliza watu wanaowawakilisha." },
            { objective: "O4", q: "AI inaandika barua inayosikika ya hasira na inalaumu baraza. Ungefanya nini?", options: ["Kuituma kuonyesha jinsi ulivyokasirika", "Kuiandika upya iwe ya heshima, yenye ukweli, hadithi na ombi", "Kuongeza maneno zaidi ya hasira", "Kutuma barua ileile kwa majina 100 ya uongo"], answer: 1, why: "Barua binafsi zenye heshima na ombi lililo wazi zina nafasi kubwa zaidi ya kusikilizwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza karatasi ya ukweli ya ukurasa mmoja",
          minutes: 5,
          goal: "Tengeneza karatasi ya ukweli ya ukurasa mmoja ambayo viongozi na majirani wenye shughuli nyingi wanaweza kuisoma kwa dakika moja.",
          text: [
            "Karatasi ya ukweli ni karatasi ya ukurasa mmoja unayowaachia viongozi, unayoshiriki mtandaoni na unayowapa wafuasi. Watu wenye shughuli nyingi wanasoma sehemu ya juu na kupitia haraka iliyobaki.",
            "Mpangilio: kichwa kikubwa kinachotaja tatizo, ukweli tatu muhimu wenye vyanzo, nukuu fupi au hadithi, ombi ndani ya kisanduku, na wewe ni nani pamoja na mawasiliano. Tumia lugha rahisi, herufi kubwa na chati moja rahisi au picha moja kama inasaidia.",
            "Iombe AI iandike rasimu ya maandishi kutokana na ukweli wako, kisha uipange katika Canva au Google Docs. Kagua kila namba na chanzo tena. Itafsiri kama jamii yako inazungumza lugha nyingine; AI inaweza kuandika rasimu ya tafsiri, lakini mzungumzaji fasaha aikague."
          ],
          steps: ["Andika kichwa kinachotaja tatizo.", "Ongeza ukweli tatu wenye vyanzo.", "Ongeza nukuu fupi moja au hadithi moja.", "Weka ombi ndani ya kisanduku.", "Ipange kwenye ukurasa mmoja; kagua namba; tafsiri zikaguliwe na wazungumzaji fasaha."],
          words: [["Karatasi ya ukweli", "karatasi ya ukurasa mmoja inayofupisha tatizo, ukweli na ombi (kwa Kiingereza \"fact sheet\")."], ["Lugha rahisi", "maandishi wazi na mepesi ambayo watu wengi wanaweza kuelewa."]],
          slides: [
            { title: "Ukurasa mmoja, dakika moja", bullets: ["Watu wenye shughuli nyingi wanasoma juu", "Kisha wanapitia haraka"] },
            { title: "Mpangilio", bullets: ["Kichwa chenye tatizo", "Ukweli tatu wenye vyanzo", "Nukuu, ombi ndani ya kisanduku, mawasiliano"] },
            { title: "Iboreshe", bullets: ["Canva au Google Docs", "Kagua kila namba tena", "Tafsiri zikaguliwe na wazungumzaji fasaha"] }
          ],
          tryIt: "Tengeneza karatasi ya ukweli ya ukurasa mmoja kuhusu tatizo lako, AI ikiandika rasimu ya maandishi na Canva au Google Docs kwa mpangilio. Mwombe mtu aisome kwa dakika moja na akuambie ombi.",
          youCanNow: "kutengeneza karatasi ya ukweli ya ukurasa mmoja iliyo wazi kwa tatizo la utetezi.",
          quickCheck: [
            { objective: "O5", q: "Karatasi ya ukweli ni hasa kwa ajili ya nani?", options: ["Viongozi na majirani wenye shughuli nyingi wanaohitaji mambo muhimu haraka", "Wale walioiandika tu", "Mawakili mahakamani", "Wanafunzi wanaoandika insha"], answer: 0, why: "Karatasi ya ukweli inawapa wasomaji wenye shughuli nyingi tatizo, ukweli na ombi kwa dakika moja." },
            { objective: "O5", q: "Rasimu ya karatasi yako ya ukweli ni kurasa mbili kamili za herufi ndogo. Ungefanya nini?", options: ["Kufanya herufi kuwa ndogo zaidi", "Kuongeza ukurasa wa tatu kwa ukweli zaidi", "Kuipunguza iwe ukurasa mmoja na ombi ndani ya kisanduku kilicho wazi", "Kuondoa ombi ili kupata nafasi"], answer: 2, why: "Ukurasa mmoja wenye ombi lililo wazi ni rahisi kusoma na kuchukulia hatua." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ushuhuda wa hadharani, wafuasi na kanuni",
          minutes: 6,
          goal: "Toa ushuhuda wa dakika mbili, wahamasishe wafuasi na ufuate kanuni za utetezi za mashirika yasiyo ya faida.",
          text: [
            "Mabaraza na bodi nyingi zinampa kila msemaji dakika mbili au tatu. Andaa toleo la dakika mbili la barua yako: kama maneno 250 ya kusema. Iombe AI iipunguze, kisha fanya mazoezi kwa sauti ukitumia kipima muda. Anza na jina lako na uhusiano wako, malizia na ombi lako, na ubebe nakala za karatasi yako ya ukweli.",
            "Waje na wafuasi. Chumba chenye majirani waliovaa rangi moja kinatuma ujumbe. Tumia AI kuandika rasimu ya ujumbe mfupi wa kujiandikisha na vikumbusho, na uwasaidie wafuasi kuandika maoni yao wenyewe.",
            "Jua kanuni za mashirika yasiyo ya faida. IRS (mamlaka ya kodi ya Marekani) inasema shirika la 501(c)(3) linaweza kufanya ushawishi wa sheria kiasi fulani, lakini si kama sehemu kubwa ya shughuli zake, na kuelimisha umma kuhusu sera si ushawishi. Limekatazwa kabisa kuunga mkono au kupinga wagombea wa nafasi za uongozi, ingawa elimu ya wapiga kura na usajili wa wapiga kura usioegemea upande wowote vinaruhusiwa. Uliza wakili wa mashirika yasiyo ya faida au chama cha mashirika yasiyo ya faida cha jimbo lako kwa maelezo zaidi."
          ],
          steps: ["Punguza barua yako iwe kama maneno 250 ya kusema.", "Fanya mazoezi kwa sauti na kipima muda cha dakika mbili.", "Beba nakala za karatasi ya ukweli na uje na wafuasi.", "Tumia AI kuandika rasimu za ujumbe wa kujiandikisha na vikumbusho.", "Kagua kanuni za mashirika yasiyo ya faida kuhusu ushawishi na wagombea."],
          words: [["Ushuhuda", "kusema mbele ya viongozi katika mkutano wa hadhara kuhusu tatizo (kwa Kiingereza \"testimony\")."], ["Ushawishi wa sheria", "kujaribu kuathiri sheria, kama kuwasiliana na wabunge kuhusu muswada (kwa Kiingereza \"lobbying\")."], ["Isiyoegemea upande wowote", "kutounga mkono chama chochote cha siasa wala mgombea (kwa Kiingereza \"nonpartisan\")."]],
          slides: [
            { title: "Ushuhuda wa dakika mbili", bullets: ["Kama maneno 250 ya kusema", "Jina na uhusiano kwanza, ombi mwisho", "Fanya mazoezi na kipima muda"] },
            { title: "Njoo na wafuasi", bullets: ["Fikeni pamoja", "AI inaandika rasimu za kujiandikisha na vikumbusho", "Kila mtu anaongeza maneno yake mwenyewe"] },
            { title: "Kanuni za 501(c)(3) (IRS)", bullets: ["Ushawishi kiasi unaruhusiwa, si sehemu kubwa", "Hakuna kuunga mkono au kupinga wagombea", "Elimu ya wapiga kura isiyoegemea upande wowote inaruhusiwa"] }
          ],
          sources: [{ name: "IRS: Lobbying", url: "https://www.irs.gov/charities-non-profits/lobbying" }, { name: "IRS: Restriction of political campaign intervention by 501(c)(3) organizations", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/the-restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations" }],
          tryIt: "Kazi ya mwisho: punguza barua yako iwe ushuhuda wa dakika mbili na uufanyie mazoezi kwa sauti ukitumia kipima muda. Uweke pamoja na tatizo na ombi lako, ukweli, hadithi, mwenye mamlaka ya kuamua, barua na karatasi ya ukweli ili kukamilisha kifurushi chako cha utetezi.",
          youCanNow: "kupanga na kuendesha kampeni ndogo ya utetezi inayotegemea ukweli kwa msaada wa AI, ndani ya kanuni.",
          quickCheck: [
            { objective: "O6", q: "\"Isiyoegemea upande wowote\" (nonpartisan) inamaanisha nini?", options: ["Kuunga mkono chama kimoja", "Inalipiwa na serikali", "Kutounga mkono mgombea wala chama chochote", "Kupinga viongozi wote"], answer: 2, why: "Kutoegemea upande wowote ni kutochukua upande wa wagombea au vyama." },
            { objective: "O6", q: "Ushuhuda wako unachukua dakika tatu na nusu, lakini una dakika mbili. Ungefanya nini?", options: ["Kusema haraka zaidi", "Kuendelea hata kipima muda kikiisha", "Kuruka ombi", "Kuupunguza uwe jina lako, uhusiano, ukweli mmoja, hadithi moja na ombi, na kufanya mazoezi na kipima muda"], answer: 3, why: "Kupunguza hadi sehemu muhimu na kufanya mazoezi kunakuweka ndani ya muda." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kusema kwa ufanisi",
        questions: [
          { objective: "O4", q: "Kwa nini barua binafsi ni bora kuliko mamia ya barua zinazofanana?", options: ["Barua zinazofanana ni kinyume cha sheria", "Barua binafsi ni ndefu zaidi", "Si bora", "Viongozi wanagundua na kuthamini sauti za mtu mmoja mmoja"], answer: 3, why: "Hadithi na maneno binafsi yana uzito zaidi." },
          { objective: "O5", q: "Karatasi ya ukweli inapaswa kuwa:", options: ["Ukurasa mmoja unaoweza kusomwa kwa kama dakika moja", "Kurasa ishirini", "Picha tu", "Imeandikwa kwa maneno magumu ya kitaalamu"], answer: 0, why: "Wasomaji wenye shughuli nyingi wanahitaji kitu kifupi na wazi." },
          { objective: "O5", q: "AI inatafsiri karatasi yako ya ukweli kwa Kihispania. Ufanye nini baadaye?", options: ["Kuichapisha bila kuikagua", "Kufuta toleo la Kiingereza", "Mzungumzaji fasaha aikague", "Kuacha tafsiri"], answer: 2, why: "Tafsiri za AI zinaweza kuwa na makosa." },
          { objective: "O6", q: "Takriban maneno mangapi ya kusema yanaingia katika dakika mbili?", options: ["Kama 2,500", "Kama 20", "Kama 1,000", "Kama 250"], answer: 3, why: "Watu wengi husema kama maneno 120-130 kwa dakika." },
          { objective: "O6", q: "Kulingana na IRS, je, shirika la 501(c)(3) linaweza kumuunga mkono mgombea hadharani?", options: ["Ndiyo, wakati wowote", "Kwenye mitandao ya kijamii tu", "Hapana, imekatazwa kabisa", "Michango midogo tu"], answer: 2, why: "IRS inasema kuingilia kampeni za kisiasa kumekatazwa kabisa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Utetezi wa Jamii",
    questions: [
      { objective: "O1", q: "Utetezi ni:", options: ["Kupiga kura tu", "Kusema wazi ili kubadilisha sera, desturi au uamuzi", "Kugombea nafasi ya uongozi", "Kumshtaki mtu"], answer: 1, why: "Utetezi ni kuleta mabadiliko kwa kusema wazi." },
      { objective: "O1", q: "Kwa nini upunguze wasiwasi mkubwa uwe tatizo mahususi?", options: ["Viongozi wanaweza kushughulikia matatizo mahususi", "Linasikika dogo zaidi", "AI inalitaka", "Ili kukwepa hatua"], answer: 0, why: "Matatizo mahususi yanaleta suluhisho mahususi." },
      { objective: "O1", q: "Ombi lenye nguvu lina:", options: ["Hisia tu", "Tishio", "Nini, kutoka kwa nani na kufikia lini", "Hakuna maelezo"], answer: 2, why: "Maombi yaliyo wazi ni rahisi kukubaliwa." },
      { objective: "O1", q: "Nani anapaswa kuunda ombi?", options: ["Watu walioathirika zaidi", "AI tu", "Watu wa nje tu", "Hakuna mtu"], answer: 0, why: "Utetezi unaoongozwa na jamii una nguvu zaidi." },
      { objective: "O2", q: "Unaweza kupata wapi takwimu za idadi ya watu na mapato za Marekani?", options: ["Picha ya mzaha isiyo na chanzo", "Kubahatisha kwa AI", "Maoni kwenye mitandao ya kijamii", "data.census.gov"], answer: 3, why: "Census Bureau inachapisha takwimu rasmi." },
      { objective: "O2", q: "Chanzo cha asili ni:", options: ["Blogu yoyote", "Mahali pa kwanza taarifa zilipochapishwa", "Muhtasari wa AI", "Uvumi"], answer: 1, why: "Vyanzo vya asili ndivyo vinavyoaminika zaidi." },
      { objective: "O2", q: "Kwa kila ukweli unaokusanya, andika:", options: ["Namba tu", "Chanzo, kiungo na tarehe", "Hakuna kitu", "Kubahatisha kwako"], answer: 1, why: "Vyanzo vinawawezesha wengine kuthibitisha ukweli wako." },
      { objective: "O3", q: "Kumbukumbu za mkutano ni:", options: ["Muda ambao mkutano ulichukua", "Aina ya saa", "Shajara ya siri", "Rekodi rasmi iliyoandikwa ya mkutano wa hadhara"], answer: 3, why: "Kumbukumbu zinarekodi kilichoamuliwa." },
      { objective: "O3", q: "AI inasema bodi ya shule ndiyo inaamua kuhusu vivuko. Unapaswa:", options: ["Kuthibitisha kwenye tovuti ya jiji lako au kwa kupiga simu", "Kuiamini", "Kuandikia kila ofisi mara moja bila kukagua", "Kukata tamaa"], answer: 0, why: "Taratibu za maeneo zinatofautiana; thibitisha rasmi." },
      { objective: "O3", q: "Kwa nini ujifunze kalenda ya bajeti?", options: ["Bajeti ni siri", "Haina manufaa", "Maamuzi mengi hufanywa bajeti zinapopangwa", "Ili kuruka mikutano"], answer: 2, why: "Kupanga ombi lako na wakati wa maamuzi ya bajeti ni muhimu." },
      { objective: "O3", q: "Mshirika ni:", options: ["Mpinzani", "Mwenye mamlaka ya kuamua tu", "Tovuti", "Mtu au kikundi kinachounga mkono lengo lako"], answer: 3, why: "Washirika wanaongeza nguvu na sauti." },
      { objective: "O3", q: "Kwa nini uelewe wapinzani wanaowezekana?", options: ["Ili kuwatukana", "Ili kuwapuuza", "Ili uweze kujibu wasiwasi wao", "Ili kuwaiga"], answer: 2, why: "Kushughulikia wasiwasi kunajenga uungwaji mkono." },
      { objective: "O4", q: "Mkazi wa eneo la kiongozi (constituent) ni:", options: ["Aina ya sheria", "Mtu anayeishi katika eneo la kiongozi", "Wakili", "Jengo la jiji"], answer: 1, why: "Viongozi wanawasikiliza wakazi wa maeneo yao." },
      { objective: "O4", q: "Maoni ya umma yenye nguvu ni:", options: ["Chini ya maneno 300 yakiwa na wewe ni nani, ukweli, hadithi na ombi", "Marefu kadiri iwezekanavyo", "Ya hasira na matusi", "Takwimu tu"], answer: 0, why: "Mafupi, binafsi na mahususi yanafanya kazi vizuri zaidi." },
      { objective: "O4", q: "Umewakasirikia viongozi. Katika barua yako unapaswa:", options: ["Kutumia matusi", "Kutoa vitisho", "Kubaki na heshima", "Kuandika kwa herufi kubwa zote"], answer: 2, why: "Ujumbe wenye heshima husomwa na kuzingatiwa." },
      { objective: "O5", q: "Ombi linapaswa kuonekana wapi kwenye karatasi ya ukweli?", options: ["Ndani ya kisanduku kilicho wazi", "Limefichwa chini kwa herufi ndogo", "Mahali popote hapana", "Nyuma ya karatasi tu"], answer: 0, why: "Ombi linapaswa kuonekana wazi." },
      { objective: "O6", q: "Katika ushuhuda wa hadharani, unapaswa kuanza na:", options: ["Historia ndefu", "Ombi lako tu", "Mzaha", "Jina lako na uhusiano wako na tatizo"], answer: 3, why: "Inawaambia viongozi kwa nini wewe ni muhimu katika suala hili." },
      { objective: "O6", q: "Kulingana na IRS, kuelimisha umma kuhusu sera:", options: ["Ni kinyume cha sheria kila wakati", "Hakuhesabiwi kama ushawishi wa sheria", "Kunahesabiwa kama kampeni", "Kumepigwa marufuku kwa mashirika yasiyo ya faida"], answer: 1, why: "IRS inasema shughuli za kielimu si ushawishi wa sheria." },
      { objective: "O6", q: "Shirika la 501(c)(3) linaweza kufanya ushawishi wa sheria kiasi fulani, lakini:", options: ["Bila kikomo", "Si kama sehemu kubwa ya shughuli zake", "Kwa ajili ya wagombea tu", "Kamwe kabisa"], answer: 1, why: "Ushawishi mwingi mno unahatarisha msamaha wa kodi wa shirika." },
      { objective: "O6", q: "Kampeni za usajili wa wapiga kura zisizoegemea upande wowote za shirika la 501(c)(3) ni, kwa mujibu wa IRS:", options: ["Zimekatazwa kila wakati", "Zinaruhusiwa kwa chama kimoja tu", "Ni lazima", "Kwa ujumla zinaruhusiwa kama kweli hazina upande"], answer: 3, why: "Usajili wa wapiga kura usioegemea upande wowote haujakatazwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      2,
      5,
      6,
      8,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Tatizo na ombi",
        objective: "O1",
        notYet: "Tatizo ni pana mno, au ombi halina nini, kutoka kwa nani au kufikia lini.",
        meets: "Tatizo kwa sentensi moja na ombi mahususi lenye nini, kutoka kwa nani na kufikia lini.",
        exceeds: "Linaonyesha jinsi watu walioathirika walivyosaidia kuunda ombi."
      },
      {
        name: "Ukweli na hadithi",
        objective: "O2",
        notYet: "Ukweli mmoja hauna chanzo, au hadithi imetumika bila ruhusa.",
        meets: "Ukweli tatu wenye chanzo, kiungo na tarehe, na hadithi mbili zilizoshirikiwa kwa ruhusa.",
        exceeds: "Ukweli unatoka kwenye vyanzo vya asili na hadithi zinatumia majina ambayo watu walichagua."
      },
      {
        name: "Mwenye mamlaka ya kuamua",
        objective: "O3",
        notYet: "Mwenye mamlaka si sahihi au hajathibitishwa.",
        meets: "Mwenye mamlaka na mwisho unaofuata vimethibitishwa kwenye tovuti rasmi.",
        exceeds: "Pia inaorodhesha washirika na jibu kwa wasiwasi mkuu wa wapinzani."
      },
      {
        name: "Barua au maoni na karatasi ya ukweli",
        objective: "O4",
        notYet: "Zaidi ya maneno 300, bila heshima, au hakuna ombi lililo wazi.",
        meets: "Chini ya maneno 300, yenye heshima, ikiwa na wewe ni nani, ukweli, hadithi na ombi; karatasi ya ukweli inaingia kwenye ukurasa mmoja.",
        exceeds: "Msomaji anaweza kusema ombi baada ya dakika moja na karatasi ya ukweli."
      },
      {
        name: "Ushuhuda na kanuni",
        objective: "O6",
        notYet: "Zaidi ya dakika mbili, haukufanyiwa mazoezi, au unataja kuunga mkono mgombea.",
        meets: "Umefanyiwa mazoezi kwa sauti kwa dakika mbili au chini, unaanza na jina na uhusiano, na unahusu suala tu.",
        exceeds: "Unajumuisha mpango wa wafuasi kuhudhuria au kutoa maoni."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaowasilisha barua au maoni ya umma, au wanaosema katika mkutano wa hadhara, ndani ya siku 60 (utafiti wa kufuatilia)",
      "Kampeni ambazo mwenye mamlaka ya kuamua anajibu, anaweka suala kwenye ratiba au anakubali ombi",
      "Idadi ya wanajamii wanaojiunga na kampeni baada ya kozi",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya mashirika yasiyo ya faida ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini",
      "Canva au Google Docs kwa karatasi ya ukweli",
      "Kipima muda kwa mazoezi ya ushuhuda",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa kutafuta habari na kufanya mazoezi"
    ],
    facilitatorNotes: [
      "Acha vikundi vifanye kazi kwenye tatizo moja la pamoja la eneo lao ili wanafunzi wagawane utafiti na wafanye mazoezi ya ushuhuda pamoja.",
      "Wakumbushe wafanyakazi wa mashirika yasiyo ya faida kwamba vikundi vya 501(c)(3) haviruhusiwi kuunga mkono wagombea; waelekeze kwenye mwongozo wa IRS kwa hali yao wenyewe.",
      "Hadithi zinashirikiwa kwa ruhusa tu; taarifa binafsi zisiwekwe kwenye prompt za AI.",
      "Wanafunzi wafanye mazoezi ya ushuhuda kwa sauti na kipima muda mbele ya kikundi.",
      "Pima kifurushi cha utetezi kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
