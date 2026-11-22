"use strict";

// Koach Learn course, Hausa (ha) translation of shared/time-management-goals.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "time-management-goals-ha",
  lang: "ha",
  translationOf: "time-management-goals",
  category: "Athletes",
  name: "Tsara Lokaci da Kafa Maƙasudai",
  skills: "Rubuta maƙasudin SMART, Raba maƙasudi zuwa matakan kowane mako, Tsara mako, Zaɓar abubuwan da suka fi muhimmanci, Shawo kan jinkiri, Bin diddigin ci gaba",
  outcome: "mayar da abin da kuke so zuwa maƙasudin SMART, raba shi zuwa matakan kowane mako, tsara makonku bisa abubuwan da suka fi muhimmanci, fara aiki ko da ba ku ji daɗin farawa ba, da bin diddigin ci gabanku da gajeren bita na kowane mako.",
  about: [
    "Kowa yana da awa 24 iri ɗaya a rana. Bambancin shi ne yadda muka san abin da muke so sosai, da yadda muke amfani da lokacin da muke da shi. Albishir: tsara lokaci fasaha ce, kuma kowa zai iya koyon ta.",
    "Wannan kwas ɗin na 'yan wasa ne da ke haɗa atisaye da makaranta, ma'aikata da masu neman aiki, masu kasuwanci, tsofaffin sojoji da ke fara sabon abu, matasa, da duk wanda ke sake gina tsarin rayuwarsa bayan babban canji, kamar dawowa gida daga gidan yari. Misalan na yau da kullum ne: neman aiki, maƙasudin motsa jiki, ƙaramin kasuwanci, tara kuɗi, kammala wani darasi.",
    "Za ku rubuta maƙasudi ɗaya na gaske, ku raba shi zuwa matakai, ku tsara mako, ku zaɓi abin da ya fi muhimmanci, ku shawo kan jinkiri, ku kuma bi diddigin ci gabanku. Kuna iya amfani da takarda, kalandar waya kyauta ko manhaja (app); mataimakin AI zai iya taimaka muku raba maƙasudi zuwa matakai, amma ku ne kuke yin tsarin. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta maƙasudin SMART ɗaya na makonni huɗu masu zuwa. Ku raba shi zuwa matakan kowane mako, ku tsara mako mai zuwa da lokutan aiki (time blocks) don abubuwa uku da suka fi muhimmanci, ku bi diddigin abin da kuka yi a zahiri na kwana bakwai, sannan ku kammala da bitar mako ta minti biyar da ke faɗin abin da ya yi aiki da abin da za ku canja.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa da ke haɗa atisaye da makaranta, ma'aikata da masu neman aiki, masu kasuwanci, tsofaffin sojoji da ke fara sabon abu, matasa, da duk wanda ke sake gina tsarin rayuwarsa bayan babban canji kamar dawowa gida daga gidan yari.",
    startingPoint: "Suna da abubuwan da suke son yi da ɗan tsarin yau da kullum, amma maƙasudansu sau da yawa buri ne marasa sarari, ba sa tsara makonsu, ayyukan gaggawa suna danne masu muhimmanci, kuma jinkirta abubuwa ya zama ruwan dare.",
    gap: "Ba tare da maƙasudai masu sarari da tsarin mako ba, mutane suna shagala ba tare da ci gaba a neman aiki, atisaye, kasuwanci ko tara kuɗi ba. Masu koyo suna buƙatar tsari mai sauƙi don kafa maƙasudi, tsara mako, fara ayyuka masu wuya da duba ci gabansu, domin su kai ga maƙasudan da suke da muhimmanci a gare su.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Kayan aiki: takarda, kalandar waya kyauta ko manhaja; AI zai iya ba da shawarar matakai amma mai koyo ne ke yin tsarin",
      "Masu koyo suna da alƙawura tsayayyu kamar lokutan aiki (shift), atisaye, makaranta, ganawa ko halartar ganawar sa ido (parole ko probation)",
      "Lokaci: darussa na kusan minti biyar, da kwana bakwai na bin diddigi"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku buri marar sarari", action: "sake rubuta shi a matsayin maƙasudin SMART na makonni huɗu masu zuwa", standard: "an duba kowane harafi na SMART" },
    { id: "O2", condition: "Farawa daga maƙasudinku na SMART", action: "raba shi zuwa mataki ɗaya a kowane mako da ƙaramin mataki na gaba", standard: "da mataki na gaba da za ku iya yi cikin kusan minti 15" },
    { id: "O3", condition: "Don mako mai zuwa", action: "tsara kalandarku: abubuwa tsayayyu da farko, lokutan aiki don maƙasudinku, da lokacin ajiya (buffer)", standard: "da aƙalla lokutan maƙasudi biyu da lokacin ajiya ɗaya marar komai" },
    { id: "O4", condition: "Idan aka ba ku jerin ayyuka goma", action: "rarraba ayyukan bisa gaggawa da muhimmanci, da zaɓar guda uku da suka fi muhimmanci", standard: "kuna zagaye wanda za ku fara yi" },
    { id: "O5", condition: "Idan aka ba ku aikin da kuka daɗe kuna jinkirtawa", action: "fara shi da ƙaramin mataki na farko, ba tare da abubuwan shagala ba, da agogon minti 10", standard: "kuna farawa a zaman ɗaya" },
    { id: "O6", condition: "Bayan kwana bakwai na bin diddigi", action: "kammala bitar mako ta minti biyar da canja tsarin mako mai zuwa", standard: "kuna amsa dukkan tambayoyin bita uku kuma kuna yin aƙalla canji ɗaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kafa maƙasudai da tsarawa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta maƙasudin SMART",
          minutes: 5,
          goal: "Mayar da buri marar sarari zuwa maƙasudin SMART.",
          text: [
            "\"In samu lafiyar jiki\" ko \"in samu aiki\" buri ne. Farawa ce mai kyau, amma ba sa faɗa muku abin da za ku yi yau. Maƙasudin SMART yana mayar da buri zuwa abin da za ku iya aikatawa ku kuma auna.",
            "SMART gajartawar kalmomin Turanci biyar ce: Specific (takamaiman: me daidai), Measurable (mai aunuwa: lamba ko layin ƙarshe mai sarari), Achievable (mai yiwuwa: mai ɗan wahala amma mai yiwuwa), Relevant (mai muhimmanci a gare ku) da Time-bound (mai wa'adi: rana ta ƙarshe). \"In samu aiki\" ya zama \"In nemi ayyuka 10 a rumbun kaya ko kicin kafin 30 ga Nuwamba.\" \"In ƙara sauri\" ya zama \"In rage daƙiƙa 2 a gudun mita 400 kafin ƙarshen kakar wasa.\"",
            "Ku lura cewa maƙasudin aikin game da abin da kuke iko da shi ne (neman aiki), ba abin da ba ku iko da shi ba (a ɗauke ku aiki). Maƙasudan da kuke iko da su suna sa ku ci gaba ko da wasu suna jinkirin amsawa."
          ],
          steps: ["Ku rubuta burinku a cikin 'yan kalmomi.", "Ku sa shi ya zama takamaimai: me daidai?", "Ku ƙara lamba ko layin ƙarshe mai sarari.", "Ku duba ko yana yiwuwa da lokaci da taimakon da kuke da su.", "Ku duba ko yana da muhimmanci a gare ku.", "Ku ƙara rana ta ƙarshe (wa'adi)."],
          words: [["Maƙasudin SMART", "maƙasudi da ke takamaimai, mai aunuwa, mai yiwuwa, mai muhimmanci, kuma mai wa'adi."], ["Wa'adi (deadline)", "ranar da ya kamata a gama wani abu."]],
          slides: [
            { title: "Buri da maƙasudi", bullets: ["Buri: \"In samu aiki\"", "Maƙasudi: \"In nemi ayyukan kicin 10 kafin 30 ga Nuwamba\""] },
            { title: "SMART", bullets: ["Specific (takamaimai) da Measurable (mai aunuwa)", "Achievable (mai yiwuwa) da Relevant (mai muhimmanci)", "Time-bound: yana da wa'adi"] },
            { title: "Ƙarin misalai", bullets: ["\"In tara $200 kafin 31 ga Disamba\"", "\"In rage daƙiƙa 2 a gudun mita 400 kafin ƙarshen kaka\"", "\"In samu abokan ciniki 5 masu biya a wannan wata\""] },
            { title: "Ku nufi abin da kuke iko da shi", bullets: ["Neman aiki, ba a ɗauke ku aiki ba", "Yin atisaye, ba cin nasara ba", "Kiran abokan ciniki, ba amsarsu ba"] }
          ],
          tryIt: "Ku rubuta buri ɗaya da kuke da shi yanzu. Sannan ku sake rubuta shi a matsayin maƙasudin SMART na makonni huɗu masu zuwa. Ku duba kowane harafi: S, M, A, R, T.",
          youCanNow: "mayar da buri marar sarari zuwa maƙasudin SMART mai lamba da wa'adi.",
          quickCheck: [
            { objective: "O1", q: "Me harafin M a SMART yake nufi?", options: ["Measurable (mai aunuwa)", "Meaningful (mai ma'ana)", "Monthly (na kowane wata)", "Maximum (mafi yawa)"], answer: 0, why: "Measurable yana nufin za ku iya ƙirga ko duba ko kun yi shi." },
            { objective: "O1", q: "Burinku shi ne \"in samu lafiyar jiki.\" Me za ku rubuta a maimakon haka?", options: ["\"In samu ƙarfin jiki sosai wata rana\"", "\"Kada in taɓa rasa atisaye ko sau ɗaya\"", "\"In yi gudu a hankali na minti 20, kwana 3 a mako, na makonni 4 masu zuwa\"", "\"In zama mafi ƙarfi a wurin motsa jiki\""], answer: 2, why: "Wannan maƙasudi takamaimai ne, mai aunuwa, mai yiwuwa, mai muhimmanci, kuma mai wa'adi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Raba maƙasudi zuwa matakan kowane mako",
          minutes: 5,
          goal: "Raba maƙasudin SMART zuwa matakan kowane mako da ƙaramin mataki na farko.",
          text: [
            "Maƙasudin makonni huɗu yana iya zama kamar babba. Raba shi zuwa matakan kowane mako yana sa ya zama mai yiwuwa. Ku fara daga wa'adin ku koma baya: me ya kamata ya kasance an gama kafin ƙarshen mako na 4, na 3, na 2 da na 1?",
            "Don \"In nemi ayyuka 10 kafin 30 ga Nuwamba\": mako na 1, ku sabunta takardar bayanin aikinku (CV ko résumé) ku rubuta wurare 15; mako na 2, ku nemi 3; mako na 3, ku nemi 4; mako na 4, ku nemi 3 ku kuma bibiyi duka. Don maƙasudin ƙaramin kasuwanci na sababbin abokan ciniki 5: mako na 1, ku rubuta mutane 30 da za ku tuntuɓa; makonni na 2 zuwa 4, ku tuntuɓi 10 a kowane mako.",
            "Sannan ku zaɓi mataki na gaba nan take, ƙarami da za a iya yi cikin minti 15 ko ƙasa da haka, kamar \"In buɗe résumé ɗina in gyara lambar waya.\" Mataimakin AI zai iya ba da shawarar matakai idan kun kasa; ku tambaye shi, sannan ku rage jerinsa zuwa abin da ya dace da makonku na gaske."
          ],
          steps: ["Ku rubuta maƙasudin da wa'adinsa a sama.", "Ku koma baya daga wa'adi: me dole a yi a kowane mako?", "Ku rubuta mataki ɗaya a kowane mako.", "Ku rubuta ƙaramin mataki na gaba da za ku iya yi cikin minti 15.", "Ku yi wannan matakin yau idan za ku iya."],
          words: [["Matakin bincike (milestone)", "wurin dubawa a hanyar zuwa maƙasudi, kamar ƙarshen kowane mako."], ["Mataki na gaba (next action)", "ƙaramin abu na zahiri da za ku yi nan gaba kaɗan."]],
          slides: [
            { title: "Manyan maƙasudai suna da nauyi", bullets: ["Ku raba su zuwa matakan kowane mako", "Ku fara daga wa'adi ku koma baya"] },
            { title: "Misali: neman ayyuka 10", bullets: ["Mako na 1: résumé + jerin wurare 15", "Makonni 2-4: ku nemi 3, 4, sannan 3", "Mako na 4: ku bibiyi duka"] },
            { title: "Mataki na gaba", bullets: ["Ƙarami: minti 15 ko ƙasa da haka", "Na zahiri: buɗe, kira, rubuta, gyara", "\"In buɗe résumé ɗina in gyara lambar waya\""] },
            { title: "AI zai iya taimakawa", bullets: ["Ku nemi ya ba da shawarar matakai", "Ku rage jerin zuwa abin da ya dace da makonku"] }
          ],
          tryIt: "Ku ɗauki maƙasudinku na SMART daga Darasi na 1. Ku rubuta mataki ɗaya don kowane ɗaya daga cikin makonni huɗu, sannan ku rubuta ƙaramin mataki na gaba ku yi shi yanzu idan za ku iya.",
          youCanNow: "raba maƙasudi zuwa matakan kowane mako da zaɓar ƙaramin mataki na gaba.",
          quickCheck: [
            { objective: "O2", q: "Mene ne mataki na gaba (next action)?", options: ["Sakamakon ƙarshe na maƙasudinku", "Ƙaramin mataki na zahiri da za ku iya yi cikin kusan minti 15", "Maƙasudi na shekara mai zuwa", "Lada bayan kun gama"], answer: 1, why: "Mataki na gaba ƙarami ne kuma a sarari, don haka za ku iya farawa nan take." },
            { objective: "O2", q: "Mataimakin AI ya ba ku matakai 25 don maƙasudinku. Me za ku yi?", options: ["Ku yi ƙoƙarin yin duka 25 a wannan mako", "Ku yi watsi da jerin", "Ku nemi AI ya yi muku maƙasudin", "Ku rage shi zuwa matakan da suka dace da makonku na gaske"], answer: 3, why: "AI zai iya ba da shawarar matakai, amma ku ne kuke rage su su dace da lokacinku na gaske." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsara makonku",
          minutes: 5,
          goal: "Tsara mako da lokutan aiki don abin da ya fi muhimmanci.",
          text: [
            "Tsarin mako yana mayar da maƙasudai zuwa lokaci a kalanda. Ku zaɓi lokaci ƙayyadadde, kamar yammacin Lahadi, ku ɗauki minti 15 kuna tsarawa.",
            "Da farko, ku saka abubuwa tsayayyu: lokutan aiki, darussa, atisaye, ganawa, halartar parole ko probation (sakin sharaɗi), ayyukan iyali da barci. Sannan ku ƙara lokutan aiki (time blocks) don matakan maƙasudinku, kamar \"Talata 6-7 na yamma: in nemi ayyuka 2.\" Ku ɗauki waɗannan lokutan kamar ganawa da kanku.",
            "Ku bar ɗan fili marar komai. Abubuwa suna lalacewa, motoci suna jinkiri, yara suna rashin lafiya. Tsarin da ba shi da wurin abubuwan ba-zata yana karyewa a rana ta farko. Ku yi amfani da duk abin da za ku riƙa kallo a zahiri: littafin tsari na takarda, allo, ko kalandar waya kyauta mai tunatarwa."
          ],
          steps: ["Ku zaɓi lokacin tsara mako (misali yammacin Lahadi).", "Ku saka abubuwa tsayayyu: aiki, makaranta, atisaye, ganawa, barci.", "Ku ƙara lokutan aiki don matakin maƙasudinku na wannan mako.", "Ku bar ɗan fili marar komai don abubuwan ba-zata.", "Ku saita tunatarwa don lokutan da suka fi muhimmanci."],
          words: [["Lokacin aiki (time block)", "ƙayyadadden lokaci a kalandarku don aiki ɗaya."], ["Lokacin ajiya (buffer)", "lokacin da kuka bar shi babu komai don abubuwan ba-zata."]],
          slides: [
            { title: "Ku tsara sau ɗaya a mako", bullets: ["Lokaci ɗaya kowane mako, kusan minti 15", "Misali, yammacin Lahadi"] },
            { title: "Abubuwa tsayayyu da farko", bullets: ["Aiki, makaranta, atisaye", "Ganawa da halartar sa ido", "Ayyukan iyali da barci"] },
            { title: "Sannan lokutan maƙasudinku", bullets: ["\"Talata 6-7 na yamma: in nemi ayyuka 2\"", "Ku ɗauke shi kamar ganawa"] },
            { title: "Ku bar fili", bullets: ["Ku bar ɗan lokacin ajiya babu komai", "Ku yi amfani da takarda ko kalandar waya", "Ku saita tunatarwa don muhimman lokuta"] }
          ],
          tryIt: "Ku tsara mako mai zuwa a takarda ko kalandar waya. Ku saka abubuwa tsayayyu, sannan ku ƙara aƙalla lokutan aiki biyu don matakin maƙasudinku da lokacin ajiya ɗaya marar komai.",
          youCanNow: "tsara mako da alƙawura tsayayyu, lokutan aiki don maƙasudi da lokacin ajiya.",
          quickCheck: [
            { objective: "O3", q: "Mene ne lokacin ajiya (buffer)?", options: ["Lokacin da aka bar shi babu komai a makonku don abubuwan ba-zata", "Lokacin aikinku mafi muhimmanci", "Lokacin barci kaɗai", "Ganawa da shugabanku"], answer: 0, why: "Lokacin ajiya yana ba tsarinku fili idan abubuwa sun lalace." },
            { objective: "O3", q: "Kuna tsara mako mai zuwa. Me za ku fara sakawa a kalanda?", options: ["Lokutan maƙasudi", "Lokacin kafofin sada zumunta", "Abubuwa tsayayyu kamar aiki, atisaye da ganawa", "Babu komai; ku tsara kowace rana da safe"], answer: 2, why: "Abubuwa tsayayyu ake fara sakawa, sannan lokutan maƙasudi su shiga tsakaninsu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kafa maƙasudai da tsarawa",
        questions: [
          { objective: "O1", q: "Wanne ne maƙasudin SMART?", options: ["\"In ƙara lafiya\"", "\"In ƙware wajen kuɗi\"", "\"In yi tafiya ta minti 30, kwana 5 a mako, na makonni 4 masu zuwa\"", "\"In ƙara ƙoƙari a wurin aiki\""], answer: 2, why: "Takamaimai ne, mai aunuwa, kuma yana da ƙayyadadden lokaci." },
          { objective: "O1", q: "Me harafin T a SMART yake nufi?", options: ["Time-bound (mai wa'adi)", "Tough (mai wahala)", "Team (ƙungiya)", "Trusted (amintacce)"], answer: 0, why: "Maƙasudin SMART yana da wa'adi." },
          { objective: "O2", q: "Maƙasudinku shi ne neman ayyuka 10 cikin makonni 4. Mene ne mataki na gaba mai kyau?", options: ["A ɗauke ku aiki gobe", "Ku buɗe résumé ɗinku ku gyara lambar waya", "Ku yi tunani a kai wata mai zuwa", "Ku nemi ayyuka 100 yau"], answer: 1, why: "Mataki na gaba ƙarami ne, na zahiri, kuma ana iya yin sa yanzu." },
          { objective: "O3", q: "Idan kuna tsara mako, me ake fara sakawa a kalanda?", options: ["Ƙarin abubuwan nishaɗi", "Babu komai; ku jira ku ga abin da zai faru", "Lokutan maƙasudi kaɗai", "Abubuwa tsayayyu kamar aiki, makaranta, atisaye da barci"], answer: 3, why: "Alƙawura tsayayyu suke fara zuwa; lokutan maƙasudi su shiga tsakaninsu." },
          { objective: "O3", q: "Me yasa za ku bar lokacin ajiya marar komai a makonku?", options: ["Abubuwa suna lalacewa kuma tsari yana buƙatar fili", "Don ɓata lokaci", "Domin tsarawa ba dole ba ne", "Don kada ku taɓa gamawa"], answer: 0, why: "Tsarin da ba shi da fili yana karyewa a farkon abin ba-zata." }
        ]
      }
    },
    {
      name: "Babi na 2: Aiwatar da abubuwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Zaɓar abubuwan da suka fi muhimmanci",
          minutes: 5,
          goal: "Rarraba ayyuka bisa gaggawa da muhimmanci da zaɓar guda uku da suka fi muhimmanci.",
          text: [
            "Koyaushe akwai ayyuka fiye da lokacin da ake da shi. Abubuwan da suka fi muhimmanci (priorities) su ne ke samun lokacinku mafi kyau. Wata hanya mai sauƙi tana rarraba ayyuka zuwa akwatuna huɗu da tambayoyi biyu: Shin yana da muhimmanci (yana ciyar da maƙasudaina gaba ko yana kare lafiyata, iyalina, aikina ko 'yancina)? Shin na gaggawa ne (yana buƙatar a yi shi yanzu)?",
            "Mai muhimmanci kuma na gaggawa: ku yi shi yanzu (kuɗin haya da za a biya yau, ganawar halartar sa ido). Mai muhimmanci, ba na gaggawa ba: ku sa masa lokaci (karatu, atisaye, gina kasuwancinku). Na gaggawa, ba mai muhimmanci ba: ku gajarta shi ko ku ba wani (kira da saƙonni da yawa). Ba ko ɗaya: ku bar shi (kallon waya marar iyaka).",
            "Yawancin ci gaba yana cikin akwatin mai muhimmanci amma ba na gaggawa ba, kuma shi ne mafi sauƙin tsallakewa. Kowace safiya ko yamma, ku zaɓi ayyuka uku mafi muhimmanci na gobe, ku fara yin mafi muhimmanci, kafin saƙonni su janye hankalinku."
          ],
          steps: ["Ku rubuta duk abin da ke zuciyarku.", "Ku tambayi game da kowanne: yana da muhimmanci? Na gaggawa ne?", "Ku saka kowane aiki a ɗaya daga cikin akwatuna huɗu: yi yanzu, sa masa lokaci, gajarta ko ba wani, bar shi.", "Ku zaɓi guda uku mafi muhimmanci na gobe.", "Ku fara yin mafi muhimmanci."],
          words: [["Abu mafi muhimmanci (priority)", "abin da ya fi muhimmanci kuma ake fara yinsa."], ["Na gaggawa (urgent)", "yana buƙatar a yi shi ba da daɗewa ba."], ["Mai muhimmanci (important)", "yana ciyar da maƙasudanku gaba ko yana kare abin da ya fi muhimmanci a gare ku."]],
          slides: [
            { title: "Tambayoyi biyu", bullets: ["Yana da muhimmanci?", "Na gaggawa ne?"] },
            { title: "Akwatuna huɗu", bullets: ["Mai muhimmanci + na gaggawa: ku yi shi yanzu", "Mai muhimmanci, ba na gaggawa ba: ku sa masa lokaci", "Na gaggawa, ba mai muhimmanci ba: ku gajarta ko ku ba wani", "Ba ko ɗaya: ku bar shi"] },
            { title: "Ci gaba yana cikin akwati na 2", bullets: ["Karatu, atisaye, gina kasuwancinku", "Yana da sauƙin tsallakewa domin ba na gaggawa ba ne", "Ku saka shi a kalanda"] },
            { title: "Guda uku mafi muhimmanci", bullets: ["Ku zaɓi ayyuka uku na gobe", "Ku fara yin mafi muhimmanci", "Kafin saƙonni su janye hankalinku"] }
          ],
          tryIt: "Ku rubuta abubuwa goma daga jerin ayyukanku. Ku saka kowanne a ɗaya daga cikin akwatuna huɗu. Sannan ku zaɓi guda uku mafi muhimmanci na gobe, ku zagaye wanda za ku fara yi.",
          youCanNow: "rarraba ayyuka bisa muhimmanci da gaggawa, da zaɓar guda uku mafi muhimmanci a kowace rana.",
          quickCheck: [
            { objective: "O4", q: "A wane akwati ne ganawar halartar sa ido da ke yau take shiga?", options: ["Ba na gaggawa ba kuma ba mai muhimmanci ba", "Na gaggawa amma ba mai muhimmanci ba", "Mai muhimmanci amma ba na gaggawa ba", "Na gaggawa kuma mai muhimmanci"], answer: 3, why: "Dole a yi ta yau kuma tana da muhimmanci, don haka na gaggawa ce kuma mai muhimmanci." },
            { objective: "O4", q: "Wayarku tana ta ƙara da saƙonnin rukunin hira yayin da kuke cike takardar neman aiki. Me za ku yi?", options: ["Ku amsa kowane saƙo nan take", "Ku gama takardar neman aikin da farko, ku duba saƙonni daga baya", "Ku daina takardar a wannan rana", "Ku fita daga rukunin har abada"], answer: 1, why: "Yawancin saƙonni suna kama da na gaggawa amma ba su kai muhimmancin babban aikinku ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Shawo kan jinkiri",
          minutes: 5,
          goal: "Yi amfani da dabaru masu sauƙi don fara aikin da kuka daɗe kuna jinkirtawa.",
          text: [
            "Jinkiri (procrastination) ba kasala ba ne. Yawanci muna jinkirta abubuwa domin aikin yana kama da ya yi girma, ba shi da sarari, yana da gundura ko yana ba da tsoro. Maganin shi ne a sauƙaƙa farawa.",
            "Dabaru huɗu da ke aiki. Ku rage shi: ku sa mataki na farko ya zama ƙarami sosai, kamar \"in rubuta jimla ɗaya ta wasiƙar neman aiki.\" Ku yi amfani da agogo: ku yi aiki na minti 10 kawai; kuna iya tsayawa bayan haka, amma sau da yawa za ku ci gaba. Ku cire abubuwan shagala: ku saka waya a wani ɗaki ko ku kunna do-not-disturb (kar a dame ni). Ku haɗa shi: ku yi aikin a lokaci da wuri ɗaya kowace rana, ko tare da abokin karatu ko na motsa jiki.",
            "Ku yi wa kanku sassauci idan kun kasa. Zargin kanku yana sa aikin ya ƙara wahala. Ku lura da shi, ku zaɓi ƙaramin mataki na farko, ku sake farawa."
          ],
          steps: ["Ku faɗi aikin da kuke gujewa.", "Ku tambayi dalili: ya yi girma, ba shi da sarari, yana da gundura ko yana ba da tsoro?", "Ku rage shi zuwa ƙaramin mataki na farko.", "Ku saita agogo na minti 10.", "Ku ajiye wayarku ku fara.", "Idan agogon ya ƙare, ku zaɓi: ku tsaya ko ku ci gaba."],
          words: [["Jinkiri (procrastination)", "jinkirta abin da kuka san ya kamata ku yi."], ["Do not disturb (kar a dame ni)", "saitin waya da ke kashe ƙarar kira da sanarwa na ɗan lokaci."]],
          slides: [
            { title: "Me yasa muke jinkirta abubuwa", bullets: ["Ya yi girma ko ba shi da sarari", "Yana da gundura", "Yana ba da tsoro"] },
            { title: "Ku sauƙaƙa farawa", bullets: ["Ku rage shi zuwa ƙaramin mataki na farko", "Ku saita agogo na minti 10", "Ku ajiye waya ko ku kunna do-not-disturb"] },
            { title: "Ku gina al'ada", bullets: ["Lokaci da wuri ɗaya kowace rana", "Abokin karatu ko na motsa jiki"] },
            { title: "Idan kun kasa", bullets: ["Ku yi wa kanku sassauci", "Ku zaɓi ƙaramin mataki na farko", "Ku sake farawa"] }
          ],
          tryIt: "Ku zaɓi aiki ɗaya da kuke gujewa. Ku rage shi zuwa ƙaramin mataki na farko, ku ajiye wayarku, ku saita agogo na minti 10, ku fara yanzu.",
          youCanNow: "fara aikin da kuke gujewa ta hanyar rage shi, saita masa agogo da cire abubuwan shagala.",
          quickCheck: [
            { objective: "O5", q: "Me yasa mutane sau da yawa suke jinkirta aiki?", options: ["Yana kama da ya yi girma, ba shi da sarari, yana da gundura ko yana ba da tsoro", "Suna da lokaci mai yawa na hutu", "Aikin ya yi sauƙi sosai", "Sun riga sun gama shi"], answer: 0, why: "Ayyukan da ke kama da manya, marasa sarari, masu gundura ko masu ba da tsoro su ne muke gujewa." },
            { objective: "O5", q: "Kun shafe watanni kuna gujewa gyaran ɗakin ajiyar kayanku (garage). Me za ku yi?", options: ["Ku jira sai kun ji ƙwarin gwiwa", "Ku shirya yin duka a Asabar mai zuwa", "Ku ɗauki akwati ɗaya, ku saita agogo na minti 10, ku fara yanzu", "Ku nemi wani ya yanke shawara"], answer: 2, why: "Ƙaramin mataki na farko da agogo suna sauƙaƙa farawa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bin diddigin ci gaba da bitar mako",
          minutes: 5,
          goal: "Bi diddigin ci gabanku kuma ku daidaita tsarinku a bitar mako ta minti biyar.",
          text: [
            "Abin da ake bin diddiginsa ana yin sa. Bin diddigi mai sauƙi yana nuna muku cewa kuna ci gaba, kuma hakan yana sa ku ci gaba. Zai iya zama jeri a takarda mai alamar kowace rana da kuka yi matakinku, lamba a rubutun wayarku (takardun neman aiki da kuka aika, kuɗin da kuka tara, mil da kuka gudu), ko manhajar al'ada kyauta.",
            "Sau ɗaya a mako, ku yi bita ta minti biyar. Ku yi tambayoyi uku: Me na gama? Me ya hana ni? Me zan canja a mako mai zuwa? Sannan ku tsara mako mai zuwa ta amfani da abin da kuka koya.",
            "Idan kuna ta rasa wani mataki, matsalar tana cikin tsarin ne, ba a cikinku ba. Ku rage matakin, ku canja lokacin, ko ku canja wa'adin. Masu horarwa suna canja tsarin atisaye idan ɗan wasa ba ya ci gaba; ku yi haka ga kanku. Ku kuma yi murnar ƙananan nasarori."
          ],
          steps: ["Ku zaɓi lamba ɗaya ko alama ɗaya da za ku riƙa rubutawa kowace rana.", "Ku rubuta ta a lokaci ɗaya kowace rana.", "Sau ɗaya a mako, ku tambaya: me aka gama, me ya hana, me zan canja?", "Ku daidaita tsarin mako mai zuwa.", "Ku yi murnar ƙaramar nasara ɗaya."],
          words: [["Bin diddigi (tracker)", "rubutu mai sauƙi na abin da kuka yi kowace rana."], ["Bitar mako (weekly review)", "gajeren duba baya kowane mako don koyo da daidaita tsarinku."]],
          slides: [
            { title: "Abin da ake bin diddiginsa ana yin sa", bullets: ["Ku yi alama a jeri, ku rubuta lamba ko ku yi amfani da manhajar al'ada", "Ganin ci gaba yana sa ku ci gaba"] },
            { title: "Bitar mako ta minti biyar", bullets: ["Me na gama?", "Me ya hana ni?", "Me zan canja a mako mai zuwa?"] },
            { title: "Kuna rasa matakai?", bullets: ["Ku canja tsarin, ba darajarku ba", "Ƙaramin mataki, sabon lokaci ko sabon wa'adi"] },
            { title: "Ku ci gaba", bullets: ["Ku yi murnar ƙananan nasarori", "Ku tsara mako mai zuwa da abin da kuka koya"] }
          ],
          tryIt: "Aikin ƙarshe: ku bi diddigin matakin maƙasudinku kowace rana na kwana bakwai. A rana ta 7, ku amsa tambayoyin bita uku a rubuce, ku tsara mako mai zuwa da aƙalla canji ɗaya.",
          youCanNow: "bin diddigin ci gaba a kan maƙasudi da amfani da bitar mako don daidaita tsarinku.",
          quickCheck: [
            { objective: "O6", q: "Bitar mako ya kamata ta ɗauki lokaci nawa?", options: ["Kusan minti biyar", "Yini guda", "Awa biyu", "Ba a buƙatar ta"], answer: 0, why: "Gajeren bita yana da sauƙin ci gaba da yi kowane mako." },
            { objective: "O6", q: "Bin diddiginku ya nuna ba ku taɓa yin matakin maƙasudinku a safiyar ranakun aiki ba. Me za ku yi?", options: ["Ku haƙura da maƙasudin", "Ku bar tsarin yadda yake ku yi fata", "Ku zargi jadawalinku", "Ku mayar da matakin zuwa lokacin da ya fi dacewa"], answer: 3, why: "Bitar ita ce don canja tsarin idan ba ya aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Aiwatar da abubuwa",
        questions: [
          { objective: "O4", q: "Yin karatu don jarabawa da ke nan da makonni uku:", options: ["Na gaggawa ne kuma ba mai muhimmanci ba", "Ba ko ɗaya", "Mai muhimmanci ne amma ba na gaggawa ba", "Abin da za a bari ne"], answer: 2, why: "Yana da muhimmanci amma ba yau ake buƙatar sa ba, don haka ku sa masa lokaci." },
          { objective: "O4", q: "Me ya kamata ku yi da aiki mai muhimmanci kuma na gaggawa, kamar ganawar halartar sa ido ta yau?", options: ["Ku bar shi", "Ku sa masa lokaci a wata mai zuwa", "Ku ba aboki", "Ku yi shi yanzu"], answer: 3, why: "Ayyuka masu muhimmanci kuma na gaggawa ake fara yi." },
          { objective: "O5", q: "Kuna ta jinkirta wani babban rahoto. Mene ne mataki na farko mai kyau?", options: ["Ku jira sai kun ji kun shirya", "Ku rubuta jimla ta farko kawai da agogo na minti 10", "Ku yi komai lokaci ɗaya da tsakar dare", "Ku fara duba kafofin sada zumunta"], answer: 1, why: "Rage aikin da amfani da agogo suna sauƙaƙa farawa." },
          { objective: "O6", q: "Wace tambaya ce ke cikin bitar mako?", options: ["Me zan canja a mako mai zuwa?", "Wa zan zarga?", "Ta yaya zan guji tsarawa?", "Me yasa nake da rauni haka a wannan?"], answer: 0, why: "Bitar tana duba baya don daidaita tsarin." },
          { objective: "O6", q: "Kun rasa matakinku makonni uku a jere. Mene ne mafi kyawun mataki?", options: ["Ku bar maƙasudin", "Ku zargi kanku", "Ku canja tsarin: ƙaramin mataki, sabon lokaci ko sabon wa'adi", "Ku bar tsarin yadda yake ku yi fata"], answer: 2, why: "Idan matakai suna ta kuɓucewa, ku daidaita tsarin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tsara Lokaci da Kafa Maƙasudai",
    questions: [
      { objective: "O1", q: "SMART yana nufin:", options: ["Simple, Modern, Active, Ready, Tough", "Specific, Measurable, Achievable, Relevant, Time-bound (takamaimai, mai aunuwa, mai yiwuwa, mai muhimmanci, mai wa'adi)", "Strong, Mighty, Able, Rich, Tall", "Short, Monthly, Annual, Real, Total"], answer: 1, why: "Waɗannan haruffa biyar suna sa maƙasudi ya zama a sarari kuma mai yiwuwa." },
      { objective: "O1", q: "Wane maƙasudi ne mai aunuwa?", options: ["\"In zama ɗan wasa mafi kyau\"", "\"In ƙara tallace-tallace\"", "\"In ƙara jin farin ciki\"", "\"In tara $50 a mako na makonni 8\""], answer: 3, why: "Yana da lamba da za ku iya dubawa." },
      { objective: "O1", q: "Me yasa za ku nufi maƙasudi a kan abin da kuke iko da shi?", options: ["Yana sa ku ci gaba ko da wasu suna jinkiri", "Yana sauƙaƙa yin magudi", "Yana da daɗin ji", "Wasu za su yi muku shi"], answer: 0, why: "Koyaushe za ku iya aikata abin da kuke iko da shi." },
      { objective: "O1", q: "Wane ne maƙasudin neman aiki mafi kyau?", options: ["\"A ɗauke ni aiki kafin Juma'a\"", "\"In yi fatan wani ya kira\"", "\"In nemi ayyuka 3 a wannan mako\"", "\"In yi tunani game da ayyuka\""], answer: 2, why: "Neman aiki yana hannunku kuma ana iya aunawa." },
      { objective: "O2", q: "Raba maƙasudi zuwa matakan kowane mako yana aiki mafi kyau idan kun:", options: ["Fara da mako mafi wahala", "Fara daga wa'adi kuka koma baya", "Tsallake mako na farko", "Riƙe komai a kanku"], answer: 1, why: "Komawa baya daga wa'adi yana nuna abin da kowane mako yake buƙata." },
      { objective: "O2", q: "\"Mataki na gaba\" ya kamata ya zama:", options: ["Ƙarami, na zahiri, kuma mai yiwuwa cikin kusan minti 15", "Babba gwargwadon iko", "Abu na shekara mai zuwa", "Marar sarari don ku sami zaɓuɓɓuka"], answer: 0, why: "Ƙananan matakai suna da sauƙin farawa." },
      { objective: "O2", q: "Ta yaya mataimakin AI zai iya taimakawa da maƙasudai?", options: ["Yana yi muku maƙasudin", "Yana yanke maƙasudanku", "Yana maye gurbin kalandarku", "Zai iya ba da shawarar matakai da za ku rage su dace da makonku na gaske"], answer: 3, why: "AI zai iya taimakawa wajen fito da ra'ayoyi; ku ne kuke yin tsarin." },
      { objective: "O3", q: "Yaushe ne lokaci mai kyau na tsara makonku?", options: ["Ba taɓa ba", "Lokaci ɗaya kowane mako, kamar yammacin Lahadi", "Sai lokacin da abubuwa suka lalace", "Sau ɗaya a shekara"], answer: 1, why: "Lokacin tsarawa na yau da kullum yana gina al'ada." },
      { objective: "O3", q: "Lokacin aiki (time block) shi ne:", options: ["Ƙayyadadden lokaci a kalandarku don aiki ɗaya", "Hutu daga aiki", "Wani nau'in ƙararrawa", "Atisayen wasanni"], answer: 0, why: "Yana keɓe lokaci don takamaiman aiki." },
      { objective: "O3", q: "Me ya kamata ya shiga tsarinku kafin lokutan maƙasudi?", options: ["Lokacin kafofin sada zumunta", "Ƙarin abubuwa marasa dole", "Abubuwa tsayayyu kamar lokutan aiki, atisaye da ganawa", "Babu komai"], answer: 2, why: "Alƙawura tsayayyu ake fara sakawa." },
      { objective: "O3", q: "Tsarin da ba shi da lokaci marar komai yawanci:", options: ["Yana aiki daidai sarai", "Yana karyewa a farkon abin ba-zata", "Yana adana lokaci mafi yawa", "Yana sa ku zama mawadaci"], answer: 1, why: "Lokacin ajiya yana ɗaukar abubuwan ba-zata." },
      { objective: "O4", q: "Kallon waya marar iyaka yawanci:", options: ["Mai muhimmanci ne kuma na gaggawa", "Mai muhimmanci ne, ba na gaggawa ba", "Na gaggawa ne, ba mai muhimmanci ba", "Ba mai muhimmanci ba ne kuma ba na gaggawa ba"], answer: 3, why: "Ba ya ciyar da maƙasudai gaba, kuma ba ya buƙatar a yi shi yanzu." },
      { objective: "O4", q: "A ina ne yawancin ci gaba na dogon lokaci yake faruwa?", options: ["Ayyuka masu muhimmanci amma ba na gaggawa ba", "Ayyuka na gaggawa amma ba masu muhimmanci ba", "Ayyukan da kuka bari", "Ayyuka barkatai"], answer: 0, why: "Atisaye, karatu da gini suna faruwa a nan, don haka ku sa musu lokaci." },
      { objective: "O4", q: "Me yasa za ku fara yin aikinku mafi muhimmanci kowace rana?", options: ["Koyaushe shi ne mafi sauƙi", "Saƙonni da abubuwan ba-zata za su iya janye ku daga baya", "Yana sa rana ta yi tsawo", "Babu wanda zai duba"], answer: 1, why: "Fara yin sa yana kare shi daga abubuwan shagala." },
      { objective: "O5", q: "Sau da yawa muna jinkiri domin aiki yana kama da:", options: ["Ya yi ƙanƙanta kuma a sarari", "Yana da daɗi sosai", "Ya yi girma, ba shi da sarari, yana da gundura ko yana ba da tsoro", "An riga an gama shi"], answer: 2, why: "Waɗannan ji suna sa farawa ya yi wahala." },
      { objective: "O5", q: "Dabarar agogon minti 10 tana nufin:", options: ["Ku yi aiki na minti 10 kawai a mako", "Ku fara na minti 10; sannan ku zaɓi ku tsaya ko ku ci gaba", "Ku gama komai cikin minti 10", "Ku jira minti 10 kafin farawa"], answer: 1, why: "Gajeren agogo yana rage wahalar farawa." },
      { objective: "O5", q: "Wanne ne ke taimaka muku cire abubuwan shagala?", options: ["Barin kowace sanarwa a kunne", "Yin aiki a gaban talabijin", "Duba saƙonni kowane minti", "Saka wayarku a wani ɗaki ko a do-not-disturb"], answer: 3, why: "Ƙarancin abubuwan shagala yana sauƙaƙa mayar da hankali." },
      { objective: "O6", q: "Mece ce hanya mai sauƙi ta bin diddigin ci gaba?", options: ["Yin alama a jeri kowace rana da kuka yi matakinku", "Ƙoƙarin tunawa da shi", "Tambayar baƙo", "Rashin bin diddigin komai"], answer: 0, why: "Rubutun da ake iya gani yana nuna cewa kuna ci gaba." },
      { objective: "O6", q: "A bitar mako, kuna tambayar me aka gama, me ya hana, da kuma:", options: ["Wa ke da laifi", "Me zan canja a mako mai zuwa", "Yadda zan tsallake mako mai zuwa", "Me wasu suka yi"], answer: 1, why: "Bitar tana kai wa ga mako mai zuwa mafi kyau." },
      { objective: "O6", q: "Mai horar da ku yana canja atisayenku idan kun daina ingantuwa. Me hakan yake koyar da ku game da tsare-tsarenku?", options: ["Kada ku taɓa canja tsari", "Ku haƙura idan ci gaba ya tsaya", "Ku daidaita tsarin idan ba ya aiki", "Tsare-tsare ba su da muhimmanci"], answer: 2, why: "Tsare-tsare masu kyau suna canjawa bisa sakamako." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      5,
      8,
      10,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Maƙasudin SMART",
        objective: "O1",
        notYet: "Maƙasudin ba shi da sarari, ko ba shi da wa'adi ko lamba.",
        meets: "Maƙasudin makonni huɗu da ke takamaimai, mai aunuwa, mai yiwuwa, mai muhimmanci, kuma mai wa'adi.",
        exceeds: "Maƙasudin yana mai da hankali ga ayyukan da mai koyo ke iko da su."
      },
      {
        name: "Matakan kowane mako",
        objective: "O2",
        notYet: "Babu matakan kowane mako, ko matakan sun yi girma da yawa don farawa.",
        meets: "Mataki ɗaya a kowane mako da ƙaramin mataki na gaba.",
        exceeds: "An tsara matakan ta komawa baya daga wa'adi."
      },
      {
        name: "Tsarin mako",
        objective: "O3",
        notYet: "Babu lokutan aiki, ko babu abubuwa tsayayyu.",
        meets: "Abubuwa tsayayyu da farko, lokutan aiki don abubuwa uku mafi muhimmanci, da lokacin ajiya ɗaya.",
        exceeds: "An tsara aiki mafi muhimmanci da wuri a rana."
      },
      {
        name: "Farawa da bin diddigi",
        objective: "O5",
        notYet: "An jinkirta matakan, ko an bi diddigin ƙasa da kwana bakwai.",
        meets: "An bi diddigin kwana bakwai, yana nuna abin da aka yi a zahiri.",
        exceeds: "Yana rubuta waɗanne dabarun farawa suka taimaka a ranaku masu wahala."
      },
      {
        name: "Bitar mako",
        objective: "O6",
        notYet: "Babu bita, ko ba a shirya canji ba.",
        meets: "Yana amsa me aka gama, me ya hana, da me za a canja, da aƙalla canji ɗaya.",
        exceeds: "An riga an saka canjin a kalandar mako mai zuwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka yi bitar mako na makonni huɗu a jere (binciken biyo baya)",
      "Masu koyo da suka ce sun cimma maƙasudinsu na SMART na makonni huɗu",
      "Masu koyo da suka ce sun yi amfani da wannan tsari a neman aiki, atisaye, kasuwanci ko maƙasudin tara kuɗi",
      "Masu koyo da suka fara wani kwas na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda da alƙalami, kalandar waya kyauta ko manhajar tsarawa",
      "Mataimakin AI kyauta (ba dole ba) don ba da shawarar matakai",
      "Agogo a waya ko agogon bango",
      "Kusan minti 60 don darussa da gwaje-gwaje, da kwana bakwai na bin diddigi"
    ],
    facilitatorNotes: [
      "Ku yi kwas ɗin a zama biyu da ke da tazarar mako ɗaya, domin masu koyo su bi diddigin kwana bakwai a tsakaninsu.",
      "Ku sa masu koyo su raba maƙasudin SMART ɗaya da abokin aiki, su duba shi harafi bayan harafi.",
      "Ku taimaki masu koyo da ke da alƙawura tsayayyu, kamar lokutan aiki, atisaye ko halartar sa ido, su fara saka su a kalanda.",
      "Ku yi amfani da agogon minti 10 na rukuni don yin atisayen fara aikin da aka jinkirta tare.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
