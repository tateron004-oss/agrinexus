"use strict";

// Koach Learn course, Hausa (ha) translation of shared/basic-computer-skills.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "basic-computer-skills-ha",
  lang: "ha",
  translationOf: "basic-computer-skills",
  category: "Seniors and Technology",
  name: "Ƙwarewar Kwamfuta ta Farko",
  skills: "Kunna da kashe kwamfuta, Amfani da linzami (mouse) ko trackpad, Rubutu da allon rubutu (keyboard), Buɗewa da rufe manhajoji da tagogi, Ajiye fayiloli da nemo su a cikin folda, Sabunta kwamfuta",
  outcome: "kunna kwamfutar Windows ko Mac ku shiga, amfani da linzami da allon rubutu da ƙarfin gwiwa, buɗe manhaja, rubuta gajeren rubutu ku ajiye shi a cikin foldar da kuka yi, sake nemo shi daga baya, da kashe kwamfutar ta hanyar da ta dace.",
  about: [
    "Wannan kwas na duk wanda yake jin rashin tabbas a gaban kwamfuta ne: mutanen da ba su taɓa amfani da ita ba, waɗanda suka koya shekaru da suka wuce, da waɗanda suka fi amfani da waya. Muna tafiya ƙaramin mataki ɗaya bayan ɗaya, kuma babu abin da za ku yi a waɗannan darussa da zai lalata kwamfutar.",
    "A Babi na 1 za ku koyi sassan kwamfuta, yadda ake kunna ta da shiga, da yadda ake amfani da linzami da allon rubutu. A Babi na 2 za ku buɗe manhajoji da tagogi, ku ajiye fayil a cikin folda, ku sake nemo shi, kuma ku kula da lafiyar kwamfutar.",
    "Akwai matakai don kwamfutocin Windows da na Mac. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku kunna kwamfutar ku shiga. Ku yi sabuwar folda mai suna \"Practice\" a cikin foldar Documents. Ku buɗe Notepad (Windows) ko TextEdit (Mac), ku rubuta gajeren rubutu, kamar jerin tambayoyi don ganin likita na gaba ko saƙo ga jika, da babban harafi a farkon kowace jimla. Ku ajiye shi a cikin foldar Practice da suna mai sarari, ku rufe manhajar, ku sake nemo fayil ɗin ku buɗe shi, sannan ku kashe kwamfutar ta hanyar da ta dace.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ba su da ƙwarewa, ko kaɗan, a kan kwamfuta: tsofaffi, mutanen da ke komawa aiki ko cikin al'umma, masu neman aiki da masu kula da marasa lafiya da ke son amfani da kwamfutar gida, ta ɗakin karatu ko ta cibiyar neman aiki da kansu.",
    startingPoint: "Wataƙila suna amfani da waya don kira ko saƙon tes. Da yawa ba su taɓa amfani da linzami ba, ko rubutu a cikakken allon rubutu, ko buɗe manhaja a kwamfuta, ko ajiye fayil a cikin folda, ko kashe kwamfuta ta hanyar da ta dace.",
    gap: "Neman aiki, hidimomin ɗakin karatu, makaranta da takardu da yawa suna buƙatar kwamfuta. Ba tare da waɗannan abubuwan farko ba, mutane dole su nemi taimakon wasu, su rasa aikinsu domin ba a ajiye shi ba, ko su guji kwamfuta gaba ɗaya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana faɗin sunan kowane sashe da maɓalli da kuma bayaninsa",
      "Na'urori: kwamfutar Windows ko Mac, ta tebur ko laptop, a gida ko a ɗakin karatu ko cibiyar neman aiki",
      "Lokaci: kusan minti 5 kowane darasi, kusan minti 60 gaba ɗaya, tare da ƙarin lokacin atisayen linzami",
      "Kuɗi: manhajoji kyauta da ke cikin kwamfutar kawai (Notepad ko TextEdit)",
      "Kwamfutocin da ake rabawa: masu koyo suna bin ƙa'idojin shiga na ma'aikata, kuma ba sa ajiye fayilolin sirri a kwamfutocin ɗakin karatu"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku kwamfutar tebur ko laptop", action: "faɗin sunayen manyan sassanta, kunna ta da shiga", standard: "ba tare da taimako ba, kuna faɗin allon gani, allon rubutu, linzami ko trackpad da maɓallin kunnawa" },
    { id: "O2", condition: "Ta amfani da linzami ko trackpad", action: "nuna wuri, danna sau ɗaya, danna sau biyu, danna maɓallin dama da gungurawa", standard: "kuna yin kowanne daidai idan aka nema" },
    { id: "O3", condition: "Ta amfani da allon rubutu", action: "rubuta jimla da manyan haruffa, tazara da alamomin rubutu, da gyara kurakurai", standard: "da babban harafi a farkon kowace jimla, kuma an gyara kowane kuskure da Backspace ko undo" },
    { id: "O4", condition: "A kwamfutar Windows ko Mac", action: "buɗe manhaja da sunanta, canja girman tagarta ko ɓoye ta, dawo da ita da rufe ta", standard: "ba tare da taimako ba" },
    { id: "O5", condition: "Idan aka ba ku gajeren rubutu da za ku ajiye", action: "yin folda, ajiye rubutun a ciki da suna mai sarari, da sake nemo shi", standard: "fayil ɗin yana cikin foldar da ta dace, kuma an sake buɗe shi daga baya" },
    { id: "O6", condition: "Idan kwamfuta tana buƙatar kulawa ko tana da matsala", action: "saka sabuntawa (updates), sake kunnawa, kashe ta yadda ya dace da zaɓar wuri mai aminci don neman taimako", standard: "kuna amfani da menu don kashewa, kuma ba ku taɓa kiran lambar da ke cikin taga mai tasowa (pop-up) ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sabawa da kwamfuta",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sassan kwamfuta, da kunna ta",
          minutes: 5,
          goal: "Faɗin sunayen manyan sassan kwamfuta, kunna ta da shiga.",
          text: [
            "Kwamfutar tebur tana da allon gani (monitor), allon rubutu (keyboard), linzami (mouse) da akwati ko allo da ke ɗauke da kwamfutar kanta. Laptop tana da duk waɗannan a guri ɗaya da ake buɗewa kamar littafi; a maimakon linzami tana da faffaɗan wurin taɓawa da ake kira trackpad.",
            "Don kunna ta, ku danna maɓallin kunnawa sau ɗaya. Yawanci yana da da'ira da layi a samanta. A laptop sau da yawa yana saman allon rubutu a dama, ko a gefe. Ku jira allon ya farka.",
            "Yawancin kwamfutoci sai su nemi ku shiga da kalmar sirri (password) ko PIN. Ku rubuta shi ku danna Enter. A kwamfutar da ake rabawa, kamar ta ɗakin karatu, ma'aikata za su faɗa muku yadda ake shiga."
          ],
          steps: ["Ku nemo maɓallin kunnawa (da'ira da layi a sama).", "Ku danna shi sau ɗaya ku sake shi.", "Ku jira allon shiga.", "Ku rubuta kalmar sirri ko PIN ɗinku ku danna Enter."],
          words: [["Monitor (allon gani)", "allon kwamfutar tebur."], ["Laptop", "kwamfutar da ake buɗewa, allon gani da allon rubutu a guri ɗaya."], ["Trackpad", "faffaɗan wurin taɓawa a laptop da ke aiki kamar linzami."], ["Shiga (sign in)", "rubuta kalmar sirri ko PIN don kwamfutar ta gane cewa ku ne."]],
          slides: [
            { title: "Sassan kwamfuta", bullets: ["Allon gani (monitor)", "Allon rubutu (keyboard)", "Linzami (mouse), ko trackpad a laptop"] },
            { title: "Kunna ta", bullets: ["Maɓallin kunnawa: da'ira da layi a sama", "Ku danna sau ɗaya ku jira"] },
            { title: "Shiga", bullets: ["Ku rubuta kalmar sirri ko PIN ɗinku", "Ku danna Enter", "A kwamfutar da ake rabawa, ku tambayi ma'aikata"] }
          ],
          tryIt: "Ku nuna allon gani, allon rubutu da linzami (ko trackpad) a kwamfutar da ke kusa da ku. Ku nemo maɓallin kunnawa, ku kunna kwamfutar ku shiga.",
          youCanNow: "faɗin sunayen sassan kwamfuta, kunna ta da shiga.",
          quickCheck: [
            { objective: "O1", q: "Mene ne monitor?", options: ["Linzami", "Allon gani", "Wayar wutar lantarki", "Allon rubutu"], answer: 1, why: "Monitor shi ne allon da kuke ganin aikinku a kai." },
            { objective: "O1", q: "Kuna son amfani da kwamfuta a ɗakin karatu kuma tana neman ku shiga. Me za ku yi?", options: ["Ku riƙe maɓallin kunnawa har ta mutu", "Ku cire ta daga wuta", "Ku rubuta haruffa barkatai har ta buɗe", "Ku tambayi ma'aikata yadda ake shiga"], answer: 3, why: "A kwamfutar da ake rabawa, ma'aikata za su faɗa muku yadda ake shiga." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Amfani da linzami ko trackpad",
          minutes: 5,
          goal: "Nuna wuri, danna sau ɗaya, danna sau biyu, danna maɓallin dama da gungurawa.",
          text: [
            "Linzami yana motsa alamar nuni (pointer), wato ƙaramar kibiya a kan allo. Ku ɗora hannunku a kan linzamin ku zame shi a hankali a kan tebur; kibiyar za ta bi shi. Idan wuri ya ƙare muku, ku ɗaga linzamin ku mayar da shi tsakiya.",
            "Danna (click): danna maɓallin hagu sau ɗaya don zaɓar wani abu. Danna sau biyu (double-click): danna maɓallin hagu sau biyu da sauri don buɗe wani abu, kamar folda. Danna maɓallin dama (right-click): danna maɓallin dama sau ɗaya don ganin ɗan gajeren menu na zaɓuɓɓuka. Gungurawa (scroll): juya ƙaramar dabaran da ke tsakanin maɓallan don motsa shafi sama ko ƙasa.",
            "A trackpad na laptop, ku zame yatsa ɗaya don motsa kibiyar, ku taɓa ko danna sau ɗaya don dannawa, kuma ku zame yatsu biyu sama ko ƙasa don gungurawa. Don danna maɓallin dama, ku taɓa da yatsu biyu."
          ],
          steps: ["Ku zame linzamin don motsa kibiyar.", "Danna: ku danna maɓallin hagu sau ɗaya.", "Danna sau biyu: ku danna maɓallin hagu sau biyu da sauri.", "Maɓallin dama: ku danna maɓallin dama sau ɗaya don menu.", "Gungurawa: ku juya dabaran, ko ku zame yatsu biyu a trackpad."],
          words: [["Pointer (alamar nuni)", "ƙaramar kibiya a kan allo da ke motsi tare da linzami."], ["Click (danna)", "danna maɓallin hagu na linzami sau ɗaya."], ["Double-click (danna sau biyu)", "danna maɓallin hagu sau biyu da sauri don buɗe wani abu."], ["Right-click (maɓallin dama)", "danna maɓallin dama don ganin menu na zaɓuɓɓuka."], ["Scroll (gungurawa)", "motsa shafi sama ko ƙasa."]],
          slides: [
            { title: "Motsa alamar nuni", bullets: ["Ku zame linzamin a hankali", "Wuri ya ƙare? Ku ɗaga shi ku mayar da shi tsakiya"] },
            { title: "Dannawa", bullets: ["Danna: maɓallin hagu sau ɗaya, don zaɓa", "Danna sau biyu: da sauri, don buɗewa", "Maɓallin dama: don menu"] },
            { title: "Gungurawa", bullets: ["Ku juya dabaran linzami", "Trackpad: ku zame yatsu biyu sama ko ƙasa"] },
            { title: "Trackpad", bullets: ["Yatsa ɗaya yana motsa kibiyar", "Ku taɓa don dannawa", "Taɓawa da yatsu biyu don maɓallin dama"] }
          ],
          tryIt: "Ku buɗe kowane shafin intanet ko takarda. Ku gungura ƙasa ku dawo sama. Ku danna maɓallin dama a wuri mara komai ku karanta menu ɗin, sannan ku danna maɓallin Esc don rufe shi. Ku danna wata kalma sau biyu don zaɓar ta.",
          youCanNow: "nuna wuri, danna sau ɗaya, danna sau biyu, danna maɓallin dama da gungurawa da linzami ko trackpad.",
          quickCheck: [
            { objective: "O2", q: "Me gungurawa (scroll) take yi?", options: ["Tana motsa shafi sama ko ƙasa", "Tana buɗe folda", "Tana kashe kwamfuta", "Tana rubuta babban harafi"], answer: 0, why: "Juya dabaran linzami, ko zame yatsu biyu a trackpad, yana motsa shafin." },
            { objective: "O2", q: "A trackpad na laptop, kuna son ganin ɗan gajeren menu na zaɓuɓɓuka. Me za ku yi?", options: ["Ku zame yatsa ɗaya", "Ku danna maɓallin kunnawa", "Ku taɓa da yatsu biyu", "Ku danna Caps Lock"], answer: 2, why: "A trackpad, taɓawa da yatsu biyu ita ce danna maɓallin dama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubutu da allon rubutu",
          minutes: 5,
          goal: "Rubuta jimla da manyan haruffa, tazara da alamomin rubutu, da gyara kurakurai.",
          text: [
            "Allon rubutu yana da haruffa, lambobi da maɓallai na musamman. Doguwar sandar da ke ƙasa ita ce Space bar (maɓallin tazara). Enter (Return a Mac) yana fara sabon layi ko yana cewa \"tafi\". Backspace (Delete a Mac) yana goge harafin da ke hagun layin da ke ƙyaftawa, wanda ake kira cursor.",
            "Don babban harafi ɗaya, ku riƙe Shift ku danna harafin. Caps Lock yana mayar da kowane harafi babba har sai kun sake danna shi. Shift kuma yana rubuta alamar da ke saman maɓalli, kamar ? ko !.",
            "Gajerun hanyoyi (shortcuts) suna adana lokaci. A Windows ku yi amfani da Ctrl; a Mac ku yi amfani da Command. Ctrl+Z yana soke kuskure (undo), Ctrl+C yana kwafa, Ctrl+V yana liƙawa, Ctrl+S kuma yana ajiyewa."
          ],
          steps: ["Ku danna inda kuke son rubutu; cursor zai riƙa ƙyaftawa a can.", "Ku riƙe Shift ku danna harafi don babban harafi.", "Ku danna Space bar tsakanin kalmomi.", "Ku danna Backspace (Delete a Mac) don gyara kuskure.", "Ku danna Enter (Return a Mac) don sabon layi."],
          words: [["Cursor", "layin da ke ƙyaftawa wanda ke nuna inda rubutunku zai shiga."], ["Shift", "maɓallin da kuke riƙewa don babban harafi ko alamar sama."], ["Backspace", "maɓallin da ke goge harafin da ke hagu (Delete a Mac)."], ["Shortcut (gajeriyar hanya)", "haɗin maɓallai da ke yin aiki da sauri, kamar Ctrl+S don ajiyewa."]],
          slides: [
            { title: "Muhimman maɓallai", bullets: ["Space bar: tazara", "Enter (Return a Mac): sabon layi", "Backspace (Delete a Mac): goge harafi"] },
            { title: "Manyan haruffa da alamomi", bullets: ["Shift + harafi = babban harafi ɗaya", "Caps Lock = duk manya har sai an sake danna shi", "Shift kuma yana rubuta ? da !"] },
            { title: "Gajerun hanyoyi masu amfani", bullets: ["Windows: Ctrl. Mac: Command", "Z soke kuskure, C kwafa, V liƙa, S ajiye"] }
          ],
          tryIt: "Ku buɗe akwatin bincike ko takarda mara rubutu ku rubuta: Sunana ___ kuma ina koyon kwamfuta! Ku yi amfani da babban harafi a farko, sannan ku goge kalma ɗaya da Backspace ku sake rubuta ta.",
          youCanNow: "rubuta jimloli da manyan haruffa da alamomin rubutu, gyara kurakurai da amfani da gajerun hanyoyin da aka saba.",
          quickCheck: [
            { objective: "O3", q: "Me Ctrl+C yake yi a Windows?", options: ["Yana ajiye aikinku", "Yana soke kuskure", "Yana kwafa", "Yana rufe manhajar"], answer: 2, why: "Ctrl+C yana kwafa; Ctrl+V yana liƙawa." },
            { objective: "O3", q: "Duk abin da kuke rubutawa yana fitowa da manyan haruffa. Me za ku yi?", options: ["Ku sake kunna kwamfutar", "Ku sake danna Caps Lock don kashe shi", "Ku riƙe Shift don kowane harafi", "Ku sayi sabon allon rubutu"], answer: 1, why: "Caps Lock yana mayar da kowane harafi babba har sai kun sake danna shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sabawa da kwamfuta",
        questions: [
          { objective: "O1", q: "Mene ne trackpad?", options: ["Allon gani", "Wani nau'in firinta", "Faffaɗan wurin taɓawa a laptop da ke aiki kamar linzami", "Waya (cable)"], answer: 2, why: "Trackpad yana yin aikin linzami a laptop." },
          { objective: "O1", q: "Yaya maɓallin kunnawa yawanci yake?", options: ["Tauraro", "Da'ira da layi a sama", "Zuciya", "Alamar tambaya"], answer: 1, why: "Wannan ita ce alamar kunnawa da aka saba gani." },
          { objective: "O2", q: "Yaya ake buɗe folda da linzami?", options: ["Danna maɓallin dama sau ɗaya", "Juya dabaran", "Danna ta sau biyu", "Girgiza linzamin"], answer: 2, why: "Danna sau biyu yana buɗe abubuwa." },
          { objective: "O3", q: "Yaya ake rubuta babban harafi ɗaya?", options: ["Danna Enter", "Riƙe Shift da danna harafin", "Danna Backspace", "Danna Space bar sau biyu"], answer: 1, why: "Shift tare da harafi yana yin babban harafi ɗaya." },
          { objective: "O3", q: "Kun rubuta harafin da ba daidai ba. Wane maɓalli ne yake goge shi?", options: ["Space bar", "Shift", "Caps Lock", "Backspace (Delete a Mac)"], answer: 3, why: "Backspace yana goge harafin da ke hagun cursor." }
        ]
      }
    },
    {
      name: "Babi na 2: Manhajoji, fayiloli da kulawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Buɗe manhajoji da sarrafa tagogi",
          minutes: 5,
          goal: "Buɗe manhaja, canja girman tagarta da rufe ta.",
          text: [
            "Manhajoji (apps ko programs) suna yin ayyuka: burauza don intanet, manhajar rubutu don rubutu, manhajar hotuna don hotuna. A Windows, ku danna maɓallin Start (tambarin Windows a ƙasan allo) ku rubuta sunan manhajar. A Mac, ku danna gilashin ƙara girma a saman dama (Spotlight), ku rubuta sunan ku danna Return.",
            "Kowace manhaja tana buɗewa a cikin taga (window). A kusurwar sama akwai ƙananan maɓallai. A Windows, a saman dama: layi (minimize, ɓoye ta na ɗan lokaci), murabba'i (maximize, cika allo) da X (rufewa). A Mac, a saman hagu: ja (rufewa), rawaya (ɓoyewa) da kore (cikakken allo).",
            "Manhajojin da aka ɓoye suna jira a taskbar (Windows, a ƙasa) ko a Dock (Mac). Ku danna alamar manhajar a can don dawo da ita."
          ],
          steps: ["Windows: ku danna Start ku rubuta sunan manhajar. Mac: ku danna gilashin ƙara girma ku rubuta sunan.", "Ku danna Enter ko Return don buɗe ta.", "Ku yi amfani da maɓallin minimize don ɓoye ta.", "Ku danna alamarta a taskbar ko Dock don dawo da ita.", "Ku rufe ta da X (Windows) ko maɓallin ja (Mac)."],
          words: [["Manhaja (app / program)", "shirin kwamfuta da ke yin aiki, kamar rubutu ko shiga intanet."], ["Taga (window)", "akwatin da manhaja ke buɗewa a ciki."], ["Minimize (ɓoyewa)", "ɓoye taga na ɗan lokaci ba tare da rufe ta ba."], ["Taskbar / Dock", "jerin alamomin manhajoji a ƙasan allo (taskbar a Windows, Dock a Mac)."]],
          slides: [
            { title: "Buɗe manhaja", bullets: ["Windows: maɓallin Start, ku rubuta sunan", "Mac: gilashin ƙara girma (Spotlight), ku rubuta sunan"] },
            { title: "Maɓallan taga a Windows", bullets: ["Saman dama", "Layi = ɓoyewa, murabba'i = cika allo, X = rufewa"] },
            { title: "Maɓallan taga a Mac", bullets: ["Saman hagu", "Ja = rufewa, rawaya = ɓoyewa, kore = cikakken allo"] },
            { title: "Dawo da ita", bullets: ["Ku danna alamarta a taskbar (Windows)", "Ko a Dock (Mac)"] }
          ],
          tryIt: "Ku buɗe Notepad (Windows) ko TextEdit (Mac) ta hanyar rubuta sunanta a Start ko Spotlight. Ku ɓoye ta, ku dawo da ita daga taskbar ko Dock, sannan ku sa ta cika allo.",
          youCanNow: "buɗe kowace manhaja da sunanta, kewaya tsakanin tagogi da rufe su.",
          quickCheck: [
            { objective: "O4", q: "A Windows, me maɓallin murabba'i da ke saman dama na taga yake yi?", options: ["Yana rufe tagar", "Yana ɓoye tagar", "Yana buɗe Spotlight", "Yana sa tagar ta cika allo"], answer: 3, why: "Murabba'i shi ne maximize; layi yana ɓoye tagar, X kuma yana rufe ta." },
            { objective: "O4", q: "Kun ɓoye manhajar rubutunku kuma yanzu kuna son dawo da ita. Me za ku yi?", options: ["Ku danna alamarta a taskbar (Windows) ko Dock (Mac)", "Ku kashe kwamfutar", "Ku buɗe sabuwar folda", "Ku danna Backspace"], answer: 0, why: "Manhajojin da aka ɓoye suna jira a taskbar ko Dock har sai kun danna su." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ajiye fayiloli da nemo su a cikin folda",
          minutes: 5,
          goal: "Ajiye rubutu a cikin foldar da kuka yi da sake nemo shi.",
          text: [
            "Fayil (file) abu ɗaya ne da aka ajiye: wasiƙa, hoto, jeri. Folda tana ɗauke da fayiloli, kamar aljihun tebur a cikin kabad na takardu. Foldar Documents wuri ne mai kyau don fayilolinku.",
            "Don yin folda: a Windows ku buɗe File Explorer (alamar folda mai launin rawaya), ku danna Documents, sannan ku zaɓi New da Folder. A Mac ku buɗe Finder (alamar fuska mai launin shuɗi), ku danna Documents, sannan ku buɗe menu na File ku zaɓi New Folder. Ku rubuta suna ku danna Enter ko Return.",
            "Don ajiyewa: ku danna Ctrl+S (Command+S a Mac). Akwati zai buɗe; ku zaɓi foldar, ku rubuta suna mai sarari kamar \"Tambayoyi ga Dr Lee\", ku danna Save. Don nemo fayil daga baya, ku buɗe File Explorer ko Finder ku duba cikin foldar, ko ku rubuta wani ɓangare na sunan a akwatin bincike."
          ],
          steps: ["Ku buɗe File Explorer (Windows) ko Finder (Mac).", "Ku je Documents ku yi sabuwar folda.", "A cikin manhajarku, ku danna Ctrl+S (Command+S a Mac).", "Ku zaɓi foldar, ku rubuta suna mai sarari, ku danna Save.", "Don nemo shi: ku buɗe foldar, ko ku bincika wani ɓangare na sunan."],
          words: [["Fayil (file)", "abu ɗaya da aka ajiye, kamar wasiƙa ko hoto."], ["Folda (folder)", "wurin da ke ɗauke da fayiloli, kamar aljihun tebur."], ["File Explorer / Finder", "manhajar duba fayiloli da folda (Windows / Mac)."]],
          slides: [
            { title: "Fayiloli da folda", bullets: ["Fayil = abu ɗaya da aka ajiye", "Folda = aljihun tebur da ke ɗauke da fayiloli", "Documents wuri ne mai kyau"] },
            { title: "Yin folda", bullets: ["Windows: File Explorer, Documents, New, Folder", "Mac: Finder, Documents, File, New Folder"] },
            { title: "Ajiye da suna mai sarari", bullets: ["Ctrl+S (Command+S a Mac)", "Ku zaɓi foldar, ku ba shi suna, ku danna Save"] },
            { title: "Sake nemo shi", bullets: ["Ku buɗe foldar", "Ko ku bincika wani ɓangare na sunan"] }
          ],
          tryIt: "Ku yi folda mai suna \"Practice\" a cikin Documents. Ku rubuta gajeren jeri a Notepad ko TextEdit, ku ajiye shi a Practice da suna \"My First Note\", ku rufe manhajar, sannan ku nemo fayil ɗin ku sake buɗe shi.",
          youCanNow: "yin folda, ajiye fayiloli da sunaye masu sarari da sake nemo su.",
          quickCheck: [
            { objective: "O5", q: "Mene ne fayil?", options: ["Abu ɗaya da aka ajiye, kamar wasiƙa, hoto ko jeri", "Aljihun tebur da ke ɗauke da folda", "Manhajar da ke buɗe intanet", "Maɓallin kunnawa"], answer: 0, why: "Fayil abu ɗaya ne da aka ajiye; folda tana ɗauke da fayiloli." },
            { objective: "O5", q: "Kun gama rubutu kuma kuna son ku riƙe shi. Me za ku yi?", options: ["Ku rufe manhajar ba tare da ajiyewa ba", "Ku kashe kwamfutar", "Ku cire allon rubutu", "Ku danna Ctrl+S (Command+S a Mac), ku zaɓi foldar, ku rubuta suna mai sarari ku danna Save"], answer: 3, why: "Ajiyewa tana sa rubutun a cikin folda da suna don ku same shi daga baya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kula da lafiyar kwamfutarku",
          minutes: 4,
          goal: "Saka sabuntawa, sake kunnawa da kashewa yadda ya dace, da sanin inda za ku nemi taimako.",
          text: [
            "Sabuntawa (updates) suna gyara matsaloli kuma suna toshe ramukan tsaro. A Windows, ku buɗe Settings ku zaɓi Windows Update. A Mac, ku buɗe System Settings ku zaɓi General, sannan Software Update. Ku saka sabuntawa idan aka nema, ku bar kwamfutar ta sake kunnawa.",
            "Idan kwamfutar tana jinkiri ko wani abu ya daskare (ya tsaya cak), ku ajiye aikinku ku sake kunna ta. Hakan yana gyara matsaloli da yawa. Don kashewa a Windows: Start, sannan alamar wuta, sannan Shut down. A Mac: menu na Apple a saman hagu, sannan Shut Down. Kada ku cire ta daga wuta kawai ko ku riƙe maɓallin kunnawa sai dai idan ta tsaya cak gaba ɗaya.",
            "Idan taga mai tasowa (pop-up) ta ce kwamfutarku tana da ƙwayar cuta (virus) kuma ta ba da lambar waya, kada ku kira; ku rufe ta. Ku nemi taimako daga wanda kuka amince da shi, zaman taimakon fasaha na ɗakin karatu, ko shagon da kuka sayi kwamfutar."
          ],
          steps: ["Ku duba sabuntawa: Windows Update (Windows) ko Software Update (Mac).", "Ku saka su ku bar kwamfutar ta sake kunnawa.", "Tana jinkiri ko ta daskare? Ku ajiye aiki ku sake kunnawa.", "Kashewa: Start, alamar wuta, Shut down (Windows) ko menu na Apple, Shut Down (Mac).", "Kuna buƙatar taimako? Wanda kuka amince da shi, taimakon fasaha na ɗakin karatu ko shagon."],
          words: [["Sabuntawa (update)", "gyara kyauta daga kamfanin da ya yi kwamfutar, da ke inganta tsaro da ayyuka."], ["Sake kunnawa (restart)", "kashe kwamfutar da kunna ta a mataki ɗaya."], ["Kashewa (shut down)", "kashe kwamfutar gaba ɗaya ta hanyar da ta dace."]],
          sources: [{ name: "FTC: Yadda ake gane, gujewa da kai rahoton zambar taimakon fasaha (Turanci)", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" }],
          slides: [
            { title: "Saka sabuntawa", bullets: ["Windows: Settings, Windows Update", "Mac: System Settings, General, Software Update"] },
            { title: "Sake kunnawa yana gyara abubuwa da yawa", bullets: ["Tana jinkiri ko ta daskare? Ku ajiye, sannan ku sake kunnawa"] },
            { title: "Kashewa yadda ya dace", bullets: ["Windows: Start, alamar wuta, Shut down", "Mac: menu na Apple, Shut Down", "Kada ku cire ta daga wuta kawai"] },
            { title: "Neman taimako", bullets: ["Kada ku taɓa kiran lambobin da ke cikin pop-up na virus", "Ku tambayi wanda kuka amince da shi ko taimakon fasaha na ɗakin karatu"] }
          ],
          tryIt: "Aikin ƙarshe: ku kunna ku shiga, ku yi foldar Practice, ku rubuta gajeren rubutu da manyan haruffa a Notepad ko TextEdit ku ajiye shi, ku rufe shi, ku nemo shi ku sake buɗe shi, ku duba sabuntawa, sannan ku kashe kwamfutar yadda ya dace.",
          youCanNow: "amfani da kwamfuta daga farko zuwa ƙarshe: shiga, aiki, ajiyewa, nemo fayilolinku da kashewa lafiya.",
          quickCheck: [
            { objective: "O6", q: "A ina ake samun sabuntawa a kwamfutar Windows?", options: ["A cikin Recycle Bin", "A cikin Settings, ƙarƙashin Windows Update", "A agogon taskbar", "A cikin Notepad"], answer: 1, why: "Sabuntawar Windows suna cikin Settings, ƙarƙashin Windows Update." },
            { objective: "O6", q: "Kun gama aikin yau a kwamfutar Windows. Me za ku yi?", options: ["Ku cire ta daga wuta", "Ku riƙe maɓallin kunnawa", "Ku danna Start, sannan alamar wuta, sannan Shut down", "Ku rufe murfin yayin da manhaja ke ajiyewa"], answer: 2, why: "Kashewa daga menu ita ce hanyar da ta dace; cire ta daga wuta na iya jawo matsaloli." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Manhajoji, fayiloli da kulawa",
        questions: [
          { objective: "O4", q: "A Windows, yaya ake buɗe manhajar da ba kwa gani?", options: ["Ku kashe allon gani", "Ku cire kwamfutar daga wuta", "Ku danna Backspace", "Ku danna Start ku rubuta sunanta"], answer: 3, why: "Binciken Start yana nemo kowace manhaja da sunanta." },
          { objective: "O4", q: "A Mac, maɓallin ja da ke saman hagu na taga:", options: ["Yana sa ta cika allo", "Yana ɓoye ta", "Yana rufe ta", "Yana buga ta a firinta"], answer: 2, why: "Ja yana rufewa, rawaya yana ɓoyewa, kore yana cika allo." },
          { objective: "O5", q: "Mece ce folda?", options: ["Wani nau'in allon rubutu", "Wurin da ke ɗauke da fayiloli, kamar aljihun tebur", "Sabuntawa", "Shafin intanet"], answer: 1, why: "Folda tana tsara fayiloli." },
          { objective: "O5", q: "Waɗanne maɓallai ne ke ajiye aikinku a Windows?", options: ["Ctrl+Z", "Ctrl+P", "Alt+Tab", "Ctrl+S"], answer: 3, why: "Ctrl+S yana ajiyewa (Command+S a Mac)." },
          { objective: "O6", q: "Kwamfutar tana jinkiri kuma wani shiri ya daskare. Mataki na farko mai kyau shi ne:", options: ["Kiran lambar da ke cikin pop-up", "Ajiye aikinku da sake kunnawa", "Zuba mata ruwa", "Sayen sabuwar kwamfuta"], answer: 1, why: "Sake kunnawa yana gyara matsaloli da yawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙwarewar Kwamfuta ta Farko",
    questions: [
      { objective: "O1", q: "Wane sashe kuke kallo don ganin aikinku?", options: ["Wayar wutar lantarki", "Linzami", "Allon gani (monitor)", "Allon rubutu"], answer: 2, why: "Allon gani yana nuna abin da kwamfutar ke yi." },
      { objective: "O1", q: "Laptop ita ce:", options: ["Cajar waya", "Wani nau'in linzami", "Firinta", "Kwamfutar da ake buɗewa, allon gani da allon rubutu tare"], answer: 3, why: "Laptop komai a guri ɗaya ne, kuma ana iya ɗaukarta." },
      { objective: "O1", q: "Bayan kwamfuta ta kunna, yawanci kuna:", options: ["Cire ta daga wuta", "Shiga da kalmar sirri ko PIN", "Danna Caps Lock", "Rufe murfin"], answer: 1, why: "Shiga yana faɗa wa kwamfutar cewa ku ne." },
      { objective: "O2", q: "Alamar nuni (pointer) ita ce:", options: ["Folda", "Maɓallin kunnawa", "Ƙaramar kibiya da ke motsi tare da linzami", "Maɓalli"], answer: 2, why: "Alamar nuni tana bin linzami." },
      { objective: "O2", q: "Linzaminku ya kai gefen tebur. Me za ku yi?", options: ["Ku juya shi", "Ku danna shi da ƙarfi", "Ku sake kunna kwamfutar", "Ku ɗaga shi ku mayar da shi tsakiya"], answer: 3, why: "Ɗaga linzami ba ya motsa alamar nuni." },
      { objective: "O2", q: "Danna maɓallin dama yana nuna:", options: ["Zaɓuɓɓukan wuta kawai", "Ɗan gajeren menu na zaɓuɓɓuka", "Sabuwar kwamfuta", "Babu komai har abada"], answer: 1, why: "Maɓallin dama yana buɗe menu." },
      { objective: "O2", q: "A trackpad, yaya ake gungurawa?", options: ["Danna Shift", "Taɓa maɓallin kunnawa", "Zame yatsu biyu sama ko ƙasa", "Rufe murfin"], answer: 2, why: "Yatsu biyu suna gungurawa a trackpad." },
      { objective: "O3", q: "Layin da ke ƙyaftawa inda rubutunku ke shiga shi ne:", options: ["Monitor", "Folda", "Dock", "Cursor"], answer: 3, why: "Cursor yana nuna inda haruffa za su bayyana." },
      { objective: "O3", q: "Caps Lock:", options: ["Yana goge kalma", "Yana mayar da kowane harafi babba har sai an sake danna shi", "Yana ajiye fayil", "Yana kashe kwamfuta"], answer: 1, why: "Yana kulle manyan haruffa." },
      { objective: "O3", q: "Wace gajeriyar hanya ce ke soke kuskure a Windows?", options: ["Ctrl+V", "Ctrl+S", "Ctrl+Z", "Ctrl+P"], answer: 2, why: "Ctrl+Z shi ne undo (Command+Z a Mac)." },
      { objective: "O3", q: "Ana amfani da Enter (Return a Mac) don:", options: ["Kashe allon gani", "Goge harafi", "Yin babban harafi", "Fara sabon layi"], answer: 3, why: "Enter yana fara sabon layi ko yana cewa tafi." },
      { objective: "O4", q: "A Mac, yaya za ku buɗe manhaja da sunanta?", options: ["Danna maɓallin kunnawa", "Danna gilashin ƙara girma (Spotlight) ku rubuta sunan", "Danna maɓallin dama a kan allo", "Riƙe Shift"], answer: 1, why: "Spotlight yana nemo manhajoji da sunansu." },
      { objective: "O4", q: "A Windows, X da ke saman dama na taga:", options: ["Yana rufe ta", "Yana ƙara girmanta", "Yana ajiye ta", "Yana ɓoye ta"], answer: 0, why: "X yana rufe tagar." },
      { objective: "O4", q: "Tagar da aka ɓoye (minimize) tana zuwa:", options: ["Taskbar (Windows) ko Dock (Mac)", "Kwandon shara har abada", "Firinta", "Intanet"], answer: 0, why: "Ku danna alamarta a can don dawo da ita." },
      { objective: "O5", q: "Wane ne mafi kyawun sunan fayil?", options: ["Tambayoyi ga Dr Lee", "asdf", "Untitled", "1"], answer: 0, why: "Suna mai sarari yana taimaka muku ku same shi daga baya." },
      { objective: "O5", q: "Manhajar duba fayiloli a Windows ita ce:", options: ["File Explorer", "Spotlight", "Dock", "Safari"], answer: 0, why: "File Explorer yana nuna fayiloli da folda." },
      { objective: "O5", q: "Ba ku tuna inda kuka ajiye fayil ba. Kuna iya:", options: ["Bincika wani ɓangare na sunansa", "Sake kunnawa har sai ya bayyana", "Sayen sabuwar kwamfuta", "Cire linzami"], answer: 0, why: "Bincike yana nemo fayiloli da sunansu." },
      { objective: "O6", q: "Me yasa ake saka sabuntawa?", options: ["Suna gyara matsaloli kuma suna toshe ramukan tsaro", "Suna goge fayilolinku", "Suna biyan kuɗi kowane lokaci", "Suna sa kwamfuta ta yi jinkiri har abada"], answer: 0, why: "Sabuntawa suna inganta tsaro kuma suna gyara matsaloli." },
      { objective: "O6", q: "Yaya ake kashe Mac yadda ya dace?", options: ["Menu na Apple, sannan Shut Down", "Cire ta daga wuta", "Rufe taga", "Danna Caps Lock"], answer: 0, why: "Ku yi amfani da menu na Apple don kashewa lafiya." },
      { objective: "O6", q: "Wani pop-up ya ce kuna da virus kuma ku kira wata lamba. Ya kamata ku:", options: ["Kada ku kira; ku rufe shi ku tambayi wanda kuka amince da shi", "Ku kira nan take", "Ku ba su kalmar sirrinku", "Ku biya da katin kyauta (gift card)"], answer: 0, why: "Gargaɗi na gaskiya ba sa taɓa cewa ku kira wata lamba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 2, 4, 5, 8, 9, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Kunnawa da shiga", objective: "O1", notYet: "Yana buƙatar taimako don kunna kwamfutar ko shiga.", meets: "Yana kunna kwamfutar kuma yana shiga ba tare da taimako ba.", exceeds: "Yana kuma faɗin sunayen manyan sassan kwamfutar." },
      { name: "Folda da rubutun da aka ajiye", objective: "O5", notYet: "Babu foldar Practice ko rubutun da aka ajiye, ko rubutun yana da suna kamar Untitled.", meets: "Foldar Practice a cikin Documents tana ɗauke da rubutun, an ajiye shi da suna mai sarari.", exceeds: "Yana sake nemo fayil ɗin ta akwatin bincike da kuma ta foldar." },
      { name: "Rubuta rubutun", objective: "O3", notYet: "Babu rubutun, ko jimloli ba su da manyan haruffa.", meets: "Gajeren rubutu da babban harafi a farkon kowace jimla, kuma an gyara kurakurai.", exceeds: "Yana kuma amfani da alamomi kamar ? ko ! daidai, kuma yana amfani da Ctrl+Z (Command+Z) don soke kuskure." },
      { name: "Buɗewa da rufe manhajar", objective: "O4", notYet: "Ba zai iya buɗe Notepad ko TextEdit ba, ko ba zai iya rufe ta ba.", meets: "Yana buɗe manhajar da sunanta, yana rufe ta, sannan yana nemo fayil ɗin da aka ajiye ya buɗe shi.", exceeds: "Yana kuma ɓoye tagar ya dawo da ita daga taskbar ko Dock." },
      { name: "Kashe kwamfuta", objective: "O6", notYet: "An cire kwamfutar daga wuta ko an riƙe maɓallin kunnawa.", meets: "Yana kashe ta yadda ya dace daga menu na Start ko menu na Apple.", exceeds: "Yana kuma duba sabuntawa kafin ya kashe ta." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na aikin ƙarshe",
      "Masu koyo da suka ce sun yi amfani da kwamfuta da kansu, kamar a ɗakin karatu ko cibiyar neman aiki, cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ci gaba zuwa wani kwas, kamar \"Tushen Amfani da Intanet\" ko Microsoft 365 and Google Docs",
      "Masu koyo da suka ce sun kammala aiki na gaske a kwamfuta, kamar wasiƙa ko takardar neman aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfutar Windows ko Mac, ta tebur ko laptop, mai linzami ko trackpad",
      "Bayanan shiga kwamfutar (daga gida, ko daga ma'aikatan ɗakin karatu ko ɗakin kwamfuta)",
      "Notepad (Windows) ko TextEdit (Mac), da ke cikin kwamfutar tun tuni",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da ƙarin lokacin atisayen linzami"
    ],
    facilitatorNotes: [
      "Ku shirya bayanan shiga kafin aji don kada a ɓata darasin farko kan asusu.",
      "Ku ba sababbin masu koyo ƙarin lokaci da linzami; ku bar su su yi atisayen dannawa sau ɗaya da sau biyu a kan alamomin da ke kan allo kafin a ci gaba.",
      "Ku raba masu amfani da Windows da na Mac, ko ku nuna matakan duka biyu a kan allo.",
      "A kwamfutocin da ake rabawa, ku sa masu koyo su goge fayilolin atisayensu su fita daga asusu a ƙarshe, kuma ku tunatar da su kada su ajiye bayanan sirri a can.",
      "Ku bar masu koyo su danna kowane maɓalli da kansu; ku guji karɓar linzamin daga hannunsu."
    ]
  }
};
