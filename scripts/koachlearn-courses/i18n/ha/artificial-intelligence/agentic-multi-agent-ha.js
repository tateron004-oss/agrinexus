"use strict";

// Koach Learn course, Hausa (ha) translation of artificial-intelligence/agentic-multi-agent.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "agentic-multi-agent-ha",
  lang: "ha",
  translationOf: "agentic-multi-agent",
  category: "Artificial Intelligence",
  name: "Tsarin Wakilai Masu Yawa (Multi-Agent Systems)",
  skills: "Gane lokacin da wakili ɗaya ya isa, Zaɓar tsari: pipeline, orchestrator, mai bita, Rubuta ayyuka da miƙa aiki, Raba bayanai lafiya, Dakatar da zagayen bita, Kwatanta da wakili ɗaya",
  outcome: "tsarawa da gina ƙaramin tsarin wakilai masu yawa a Python, wakilin marubuci da wakilin mai bita masu ayyuka a sarari, miƙa aiki a rubuce, bayanai na bai ɗaya da iyakar zagaye, da nuna da gwaji mai sauƙi ko ya fi wakili ɗaya.",
  about: [
    "Wannan shi ne kwas na 5 na shirin Design, Build, and Deploy Autonomous AI Agents (Tsarawa, Gina da Ƙaddamar da Wakilan AI Masu Aiki da Kansu). Tsarin wakilai masu yawa yana raba aiki tsakanin wakilai da dama, kowanne da nasa aiki, umarni da kayan aiki, kamar yadda ƙungiya ke raba aiki. Idan an yi shi da kyau, yana iya ƙara inganci. Idan an yi shi ba daidai ba, yana ninka kuɗi, ruɗani da kurakurai.",
    "Babi na 1 game da tsarawa ne: lokacin amfani da wakili fiye da ɗaya, tsare-tsaren da aka saba (pipeline, orchestrator da ma'aikata, marubuci da mai bita), da yadda ake rubuta ayyuka da miƙa aiki. Babi na 2 game da gini ne: bayanai na bai ɗaya, dakatar da kai-da-komo marar ƙarewa, barin mutane su ci gaba da iko, da gwada ko ƙungiyar ta fi wakili ɗaya da gaske.",
    "Za ku sake amfani da zagayen Python ɗinku (loop) da mataimakin ask_model daga kwas na 3. Ana nuna lambar shiri (code) a gajerun layuka a cikin darussan. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku gina tsarin wakilai biyu a Python: wakilin marubuci yana rubuta daftarin bayanin kaya na sakin layi ɗaya daga gajeriyar takardar bayanai (fact sheet), wakilin mai bita kuma yana duba shi da jerin dubawa a rubuce (yana amfani da bayanan takardar kaɗai, ƙasa da kalmomi 80, babu iƙirari kamar \"best\" ko \"guaranteed\") sannan ya mayar da JSON: approve (amince) ko revise (gyara) tare da dalilai. Ku wuce da aikin ta ƙamus ɗin bayanai na bai ɗaya (shared state dictionary), ku tsaya bayan zagaye 3 a mafi yawa, ku buga cikakken rajistar aiki (log). Sannan ku wuce da takardun bayanai 3 ɗin nan ta wakili ɗaya, ku rubuta wanne ya fi kyau da dalili.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a shirin Design, Build, and Deploy Autonomous AI Agents waɗanda suka kammala kwas na 1 zuwa 4: masu ƙananan kasuwanci, masu sauya sana'a, ɗalibai da ma'aikata da ke son sanin yaushe da yadda ake amfani da ƙungiyar wakilai.",
    startingPoint: "Suna iya gina wakili ɗaya a Python mai kayan aiki, duba bayanan da ake bayarwa (arguments), iyakar matakai, rajistar aiki da neman izini kafin ayyukan rubutu. Ba su taɓa raba aiki tsakanin wakilai ba.",
    gap: "Tsarin wakilai masu yawa ya shahara, amma idan an yi shi ba daidai ba yana ninka kuɗi, ruɗani da kurakurai. Masu koyo suna buƙatar sanin yaushe ƙungiya ta cancanta, tsara ayyuka da miƙa aiki a sarari, dakatar da zagaye marar ƙarewa, barin mutum ya ci gaba da iko, da tabbatar da gwaji ko ƙungiyar ta fi wakili ɗaya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana nuna code a gajerun layuka don a kwafa",
      "Na'urori: kwamfuta mai burauzar intanet; matakan API na kyauta suna iyakance yawan kiran model da za ku iya yi",
      "Atisaye yana amfani da takardun bayanai na ƙirƙira kaɗai",
      "Kowane zagaye yana da iyakar zagaye kuma yana miƙa aikin da bai ƙare ba ga mutum",
      "Lokaci: gajerun darussa masu aikin atisaye ɗaya kowanne"
    ],
    prerequisites: "Kwas na 3 da na 4 na Design, Build, and Deploy Autonomous AI Agents (\"Gina AI Agents (Wakilan AI)\" da \"Amfani da Kayan Aiki da Aiki da Kai a Wakilin AI\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku aikin da za ku iya sa na'ura ta yi", action: "yanke shawara ko yana buƙatar wakili ɗaya ko ƙungiya, ta amfani da gwajin ɗaukar ma'aikata", standard: "da dalili na jimla ɗaya ga kowane aiki" },
    { id: "O2", condition: "Idan aka ba ku aikin da ke buƙatar ƙungiya", action: "zaɓar tsari (pipeline, orchestrator da ma'aikata, ko marubuci da mai bita) da zana yadda aiki ke wucewa tsakanin wakilai", standard: "kuna rubuta abin da ke wucewa a kan kowace kibiya" },
    { id: "O3", condition: "Ga kowane wakili a cikin ƙungiyar", action: "rubuta prompt na aiki (role prompt) da tsarin miƙa aiki na JSON", standard: "da aiki ɗaya ga kowane wakili da jerin dubawa na mai bita da za a iya dubawa" },
    { id: "O4", condition: "A cikin code ɗinku na Python", action: "ajiye aikin ƙungiyar a bayanai na bai ɗaya (shared state) da code ɗinku kaɗai ke sabuntawa", standard: "kuna rubuta bayanan a rajista bayan kowane mataki" },
    { id: "O5", condition: "Idan aka ba ku zagayen marubuci da mai bita", action: "ƙara iyakar zagaye da miƙa aikin da bai ƙare ba ga mutum", standard: "kuna tsayawa da needs_human bayan zagaye 3 a mafi yawa" },
    { id: "O6", condition: "Idan aka ba ku bayanan gwaji iri ɗaya", action: "kwatanta ƙungiyar da wakili ɗaya (baseline) kan inganci da yawan kiran model", standard: "kuna ba duka biyun maki da jerin dubawa ɗaya kuma kuna zaɓar mafi sauƙi idan makinsu ya yi daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara ƙungiyar wakilai",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lokacin da wakili ɗaya ya isa, da lokacin da bai isa ba",
          minutes: 5,
          goal: "Yanke shawara ko aiki yana buƙatar wakili fiye da ɗaya.",
          text: [
            "Ku fara da wakili ɗaya. Kowane ƙarin wakili yana ƙara kiran model (kuɗi da lokaci), miƙa aiki (wuraren da bayani zai iya ɓacewa) da ƙarin abubuwan gwadawa. Ayyuka da yawa da suke kama da suna buƙatar ƙungiya suna aiki lafiya da wakili ɗaya mai prompt mai kyau da kayan aiki masu kyau.",
            "Ku yi tunanin wakili fiye da ɗaya idan: aikin yana da ƙwarewa daban-daban a sarari (bincike, sannan rubutu, sannan dubawa); prompt ɗaya yana yin tsawo sosai kuma yana ruɗewa; kuna son dubawa mai zaman kansa, domin mai bita mai sabbin umarni yana kama kurakuran da marubuci bai gani ba; ko wasu sassa za su iya gudana a lokaci ɗaya.",
            "Gwaji mai amfani: idan za ku ɗauki mutane biyu daban-daban don aikin, wakilai biyu za su iya taimakawa. Idan mutum ɗaya zai iya yinsa da jerin dubawa, wakili ɗaya mai jerin dubawa ya fi kyau mai yiwuwa."
          ],
          words: [["Tsarin wakilai masu yawa (multi-agent system)", "wakilan AI da dama, kowanne da nasa aiki, suna aiki tare kan aiki ɗaya."], ["Miƙa aiki (handoff)", "wuce da aiki da bayani daga wani wakili zuwa wani."], ["Ƙarin nauyi (overhead)", "ƙarin kuɗi da ƙoƙarin da wani tsari yake kawowa."]],
          slides: [
            { title: "Ku fara da wakili ɗaya", bullets: ["Kowane ƙarin wakili yana ƙara kuɗi da lokaci", "Kowane miƙa aiki zai iya rasa bayani", "Ƙarin sassan da za a gwada"] },
            { title: "Ku yi tunanin ƙungiya idan", bullets: ["Aikin yana buƙatar ƙwarewa daban-daban a sarari", "Prompt ɗaya ya yi tsawo kuma yana ruɗewa", "Kuna son dubawa mai zaman kansa", "Wasu sassa za su iya gudana a lokaci ɗaya"] },
            { title: "Gwajin ɗaukar ma'aikata", bullets: ["Mutane biyu daban-daban? Wataƙila wakilai biyu", "Mutum ɗaya da jerin dubawa? Wakili ɗaya"] }
          ],
          tryIt: "Ku jera ayyuka uku da za ku iya sa na'ura ta yi. Ga kowanne, ku rubuta \"wakili ɗaya\" ko \"ƙungiya\" da jimla ɗaya ta dalili, ta amfani da gwajin ɗaukar ma'aikata.",
          youCanNow: "yanke shawara lokacin da aiki ke buƙatar wakili fiye da ɗaya da gaske.",
          quickCheck: [
            { objective: "O1", q: "Mene ne gwajin ɗaukar ma'aikata?", options: ["Tambaya ko mutum zai ci hirar neman aiki", "Gwada ko kamfani zai iya ɗaukar model aiki", "Tambaya ko za ku ɗauki mutane biyu daban-daban don wannan aikin", "Ƙirga yawan kayan aikin da aiki ke buƙata"], answer: 2, why: "Idan ba za ku ɗauki mutane biyu ba, wakili ɗaya yawanci ya isa." },
            { objective: "O1", q: "Aikin shi ne raba saƙonni zuwa rukuni huɗu da jerin dubawa. Me za ku gina?", options: ["Wakili ɗaya mai umarni a sarari", "Ƙungiyar wakilai huɗu, ɗaya ga kowane rukuni", "Orchestrator mai ma'aikata", "Marubuci da mai bita"], answer: 0, why: "Aiki mai sauƙi da aka bayyana sosai ba ya buƙatar ƙarin kuɗi da miƙa aikin ƙungiya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tsare-tsaren da aka saba: pipeline, orchestrator, mai bita",
          minutes: 6,
          goal: "Zaɓar tsarin wakilai masu yawa da ya dace da aiki.",
          text: [
            "Pipeline (layin aiki): wakilai suna aiki a jeri ƙayyadadde, kowanne yana miƙa abin da ya yi ga na gaba, kamar layin haɗa kaya a masana'anta: bincike, sannan rubutu, sannan tsarawa. Yana da sauƙin ginawa da gyarawa, domin kullum kun san wanda zai yi aiki na gaba.",
            "Orchestrator da ma'aikata: wakili ɗaya (orchestrator, mai jagoranci) yana raba buri zuwa sassa, yana ba kowane sashe ga wakilin ma'aikaci, sannan ya haɗa sakamakon. Yana da sassauci, amma orchestrator zai iya raba aikin ba daidai ba, kuma ƙarin 'yanci yana nufin ƙarin abubuwan dubawa.",
            "Marubuci da mai bita: wakili ɗaya yana samarwa, na biyu yana yin hukunci da jerin dubawa, sannan ko dai ya amince ko ya mayar da shi da dalilai. Wannan shi ne tsari mafi amfani ga masu farawa domin yana ƙara dubawa mai zaman kansa kan inganci. Yana buƙatar iyakar zagaye don kada su biyun su yi jayayya har abada."
          ],
          words: [["Pipeline (layin aiki)", "wakilai suna aiki a jeri ƙayyadadde, kowanne yana miƙa aiki ga na gaba."], ["Orchestrator (mai jagoranci)", "wakilin da ke raba buri zuwa ayyuka yana ba wa sauran wakilai."], ["Wakilin mai bita (reviewer)", "wakilin da ke duba aikin wani wakili da dokoki a sarari."]],
          slides: [
            { title: "Pipeline (layin aiki)", bullets: ["Jeri ƙayyadadde: bincike, rubutu, tsarawa", "Mai sauƙin ginawa da gyarawa"] },
            { title: "Orchestrator da ma'aikata", bullets: ["Wakili ɗaya yana raba buri", "Ma'aikata suna yin sassan", "Mai sassauci, amma ya fi wuyar dubawa"] },
            { title: "Marubuci da mai bita", bullets: ["Ɗaya yana samarwa, ɗaya yana hukunci da jerin dubawa", "Amincewa, ko mayarwa da dalilai", "Yana buƙatar iyakar zagaye"] }
          ],
          tryIt: "Ga aikin \"ƙungiya\" daga Darasi na 1, ku zana wakilan a matsayin akwatuna masu kibiyoyi (a takarda ma ya yi). Ku rubuta sunan tsarin da abin da ke wucewa a kan kowace kibiya.",
          youCanNow: "zaɓa tsakanin pipeline, orchestrator mai ma'aikata, da marubuci mai mai bita.",
          quickCheck: [
            { objective: "O2", q: "Me orchestrator ke yi a tsarin orchestrator da ma'aikata?", options: ["Yana duba kowane daftari da jerin dubawa", "Yana raba buri yana ba ma'aikata sassa", "Yana ajiye fayiloli a faifai", "Yana aiki ne a ƙarshe kawai"], answer: 1, why: "Orchestrator yana raba aikin yana miƙa sassa ga wakilan ma'aikata." },
            { objective: "O2", q: "Aikinku kullum yana tafiya bincike, sannan rubutu, sannan tsarawa, a wannan jerin. Wane tsari ya dace?", options: ["Marubuci da mai bita", "Orchestrator da ma'aikata", "Babu tsari; ku yi amfani da chatbot uku", "Pipeline"], answer: 3, why: "Jerin matakai ƙayyadadde pipeline ne, kuma yana da sauƙin gyarawa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta ayyuka da miƙa aiki",
          minutes: 5,
          goal: "Rubuta prompt na aiki ga kowane wakili da tsarin miƙa aiki tsakaninsu.",
          text: [
            "Kowane wakili yana samun nasa gajeren system prompt: wane ne shi, aikinsa ɗaya, kayan aikinsa (abin da yake buƙata kaɗai), da tsarin amsarsa. Marubuci ba ya buƙatar cikakken jerin dubawa na mai bita; mai bita kuma ba ya buƙatar kayan rubutu ko kaɗan.",
            "Miƙa aiki (handoff) shi ne saƙon da ke wucewa tsakanin wakilai. Ku sa shi ya zama mai tsari, ba hira ba: {\"draft\": \"...\", \"facts_used\": [...]} daga marubuci zuwa mai bita, da {\"decision\": \"approve\" ko \"revise\", \"reasons\": [...]} a mayar. Miƙa aiki mai tsari yana nuna a fili abin da aka wuce da shi, kuma code yana iya duba shi cikin sauƙi.",
            "Ku ba mai bita jerin dubawa, ba ji ba. \"Yana da kyau?\" yana kawo amincewa kawai. \"Kowane bayani yana cikin takardar bayanai? Ya yi ƙasa da kalmomi 80? Ya guji kalmomin best da guaranteed?\" yana kawo dubawa ta gaske."
          ],
          steps: ["Ku rubuta prompt na aiki ga kowane wakili: aiki, aiki ɗaya, kayan aiki, tsarin amsa.", "Ku ba kowane wakili kayan aikin da yake buƙata kaɗai.", "Ku ayyana miƙa aiki a matsayin JSON mai ƙayyadaddun maɓallai (keys).", "Ku rubuta jerin dubawa na mai bita a matsayin tambayoyin eh/a'a."],
          words: [["Prompt na aiki (role prompt)", "system prompt da ke ba wakili ɗaya aikinsa da dokokinsa."], ["Jerin dubawa (checklist)", "jerin takamaiman dubawa na eh/a'a da ake amfani da su wajen yin hukunci kan aiki."]],
          slides: [
            { title: "Prompt na aiki ɗaya ga kowane wakili", bullets: ["Wane ne shi da aikinsa ɗaya", "Kayan aikin da yake buƙata kaɗai", "Tsarin amsarsa"] },
            { title: "Miƙa aiki mai tsari", bullets: ["Marubuci -> mai bita: daftari da bayanan da aka yi amfani da su", "Mai bita -> marubuci: shawara da dalilai", "Code yana iya duba kowane miƙa aiki"] },
            { title: "Ku ba mai bita jerin dubawa", bullets: ["\"Yana da kyau?\" yana kawo amincewa da sauƙi", "Dubawar eh/a'a tana kawo bita ta gaske"] }
          ],
          tryIt: "Ku rubuta prompt na aikin marubuci, prompt na aikin mai bita mai jerin dubawa na abubuwa 3, da tsare-tsaren miƙa aiki na JSON guda biyu don tsarin aikin ƙarshe.",
          youCanNow: "rubuta prompt na aiki da miƙa aiki mai tsari ga ƙungiyar wakilai.",
          quickCheck: [
            { objective: "O3", q: "Me ya kamata ya kasance a prompt na aiki?", options: ["Aikin wakilin ɗaya, kayan aikinsa da tsarin amsarsa", "Umarnin kowane sauran wakili", "Maɓallin API ɗinku (API key)", "Jerin dukkan ayyukan da suka gabata"], answer: 0, why: "Prompt na aiki yana sa kowane wakili ya mai da hankali kan nasa aikin da tsarinsa." },
            { objective: "O3", q: "An ce wa mai bitarku \"Ka duba ko daftarin yana da kyau.\" Me za ku canja?", options: ["Babu komai, gajere ne", "Ku ba shi kayan rubutu don ya gyara daftari", "Ku maye gurbinsa da jerin takamaiman tambayoyin da zai iya amsawa da eh ko a'a", "Ku bar shi ya zaɓi nasa dokokin"], answer: 2, why: "Tambayoyin bita marasa sarari suna kawo amincewa da sauƙi; jerin dubawa yana kawo dubawa ta gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara ƙungiyar wakilai",
        questions: [
          { objective: "O1", q: "Mene ne mafarin da ya fi kyau ga yawancin sabbin ayyukan wakilai?", options: ["Wakilai biyar", "Orchestrator mai ma'aikata goma", "Wakili ɗaya mai kayan aiki masu kyau", "Babu wakilai"], answer: 2, why: "Ƙarin wakilai suna ƙara kuɗi da sarƙaƙiya; ku fara a sauƙaƙe." },
          { objective: "O1", q: "Wanne ne dalili mai kyau na ƙara wakilin mai bita?", options: ["Don samun dubawa mai zaman kansa da dokoki a sarari", "Don aikin ya yi kama da babba", "Don amfani da ƙarin tokens", "Domin biyu kullum ya fi"], answer: 0, why: "Sabbin umarni da jerin dubawa suna kama kurakuran da marubuci bai gani ba." },
          { objective: "O2", q: "Bincike, sannan rubutu, sannan tsarawa, a jeri ƙayyadadde, shi ne:", options: ["Schema", "Orchestrator", "Trigger", "Pipeline"], answer: 3, why: "Pipeline yana wuce da aiki a jeri ƙayyadadde." },
          { objective: "O3", q: "Wane miƙa aiki ne ya fi sauƙi ga code ya duba?", options: ["\"Ga abin da nake tunani, ina fata zai taimaka!\"", "{\"decision\": \"revise\", \"reasons\": [\"over 80 words\"]}", "Doguwar sakin layi", "Hoto"], answer: 1, why: "JSON mai tsari yana da ƙayyadaddun maɓallai da code zai iya karantawa." },
          { objective: "O3", q: "Wane umarni ga mai bita ne yake kawo dubawa ta gaske mafi yawa?", options: ["\"Yana da kyau?\"", "\"Ka yi suka sosai.\"", "\"Kana son shi?\"", "\"Kowane bayani yana cikin takardar bayanai, kuma ya yi ƙasa da kalmomi 80?\""], answer: 3, why: "Takamaiman dubawar eh/a'a tana hana amincewa da sauƙi." }
        ]
      }
    },
    {
      name: "Babi na 2: Gina da gwada ƙungiyar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bayanai na bai ɗaya: wuri ɗaya don aikin",
          minutes: 5,
          goal: "Ajiye aikin ƙungiya a bayanai na bai ɗaya da kowane wakili ke karantawa daga ciki.",
          text: [
            "Bayanai na bai ɗaya (shared state) wuri ɗaya ne da aikin ƙungiyar yake, mallakar code ɗinku, ba na kowane wakili ba. A Python, ƙamus (dictionary) yana aiki: state = {'facts': FACTS, 'draft': None, 'reviews': [], 'round': 0, 'status': 'drafting'}.",
            "Kowane wakili yana samun sassan da yake buƙata kaɗai kuma yana mayar da miƙa aiki; code ɗinku yana duba miƙa aikin sannan ya sabunta state. Marubuci yana karanta bayanai (facts) da bita ta ƙarshe; mai bita yana karanta bayanai da daftari. Babu wakilin da ke gyara state kai tsaye.",
            "Wannan yana ajiye gaskiya a wuri ɗaya, yana sauƙaƙa rajistar aiki (ku ajiye state bayan kowane mataki), kuma yana hana wakilai wuce da kwafe-kwafe da ke rabuwa a hankali. Idan amsar wani wakili ba ta da kyau, code ɗinku zai iya ƙin ta kafin ta kai ga wakili na gaba."
          ],
          steps: ["Ku ƙirƙiri ƙamus na state mai kowane fili da ƙungiyar ke buƙata.", "Ku ba kowane wakili filayen da yake buƙata kaɗai.", "Ku duba kowane miƙa aiki a code kafin ku sabunta state.", "Ku ajiye kwafin state a rajistar aiki bayan kowane mataki."],
          words: [["Bayanai na bai ɗaya (shared state)", "rubutu guda ɗaya na aikin ƙungiya da code ke ajiyewa, kuma kowane wakili yana karantawa daga ciki."], ["Rabuwa (drift)", "lokacin da kwafe-kwafen bayani suke zama daban da juna a hankali."]],
          slides: [
            { title: "Wuri ɗaya don aikin", bullets: ["state = {facts, draft, reviews, round, status}", "Mallakar code ɗinku, ba ta wakili ba"] },
            { title: "Wakilai suna karantawa, code yana rubutawa", bullets: ["Kowane wakili yana samun filayen da yake buƙata kaɗai", "Code yana duba miƙa aiki, sannan ya sabunta state"] },
            { title: "Dalilin da yasa yake taimakawa", bullets: ["Gaskiya ɗaya, babu kwafe-kwafen da ke rabuwa", "Rajista mai sauƙi: ku ajiye state a kowane mataki", "Ana dakatar da mummunar amsa kafin wakili na gaba"] }
          ],
          tryIt: "Ku ƙirƙiri ƙamus na state don aikin ƙarshe. Ku rubuta ayyuka (functions) biyu, run_writer(state) da run_reviewer(state), da kowanne ke kiran ask_model da nasa prompt na aiki kuma ya mayar da JSON da aka fassara, ba tare da canja state da kansa ba.",
          youCanNow: "ajiye aikin tsarin wakilai masu yawa a bayanai na bai ɗaya da code ɗinku ke sarrafawa.",
          quickCheck: [
            { objective: "O4", q: "Mene ne bayanai na bai ɗaya (shared state) a tsarin wakilai masu yawa?", options: ["Rubutun sirri na kowane wakili", "Wuri ɗaya, mallakar code ɗinku, da ke riƙe aikin ƙungiyar", "Ƙwaƙwalwar model tsakanin kwanaki", "Kalmar sirri ta bai ɗaya"], answer: 1, why: "Bayanai na bai ɗaya da code ɗinku ke sabuntawa suna sa kowane wakili ya yi aiki daga bayanai iri ɗaya." },
            { objective: "O4", q: "Marubuci da mai bita kowanne yana riƙe nasa kwafin daftari, kuma kwafe-kwafen sun fara bambanta. Me za ku yi?", options: ["Ku bar kowane wakili ya sabunta state kai tsaye", "Ku ƙara wakili na uku don ya haɗa su", "Ku ƙyale shi idan amsar ƙarshe ta yi kama da daidai", "Ku riƙe bayanai na bai ɗaya guda ɗaya da code ɗinku kaɗai ke sabuntawa bayan duba kowane miƙa aiki"], answer: 3, why: "Kwafe-kwafe daban-daban suna rabuwa; bayanai na bai ɗaya da aka duba suna hana hakan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dakatar da zagaye da barin mutane su ci gaba da iko",
          minutes: 5,
          goal: "Ƙara iyakar zagaye da miƙawa ga mutum a zagayen marubuci da mai bita.",
          text: [
            "Wakilai biyu za su iya zagayawa har abada: mai bita kullum yana samun wani abu, marubuci kullum yana canja wani abu. Ku saita MAX_ROUNDS = 3. Idan mai bita bai amince ba zuwa lokacin, ku tsaya da status 'needs_human' ku nuna daftari na ƙarshe da dalilan.",
            "Ku lura da wasu kurakuran ƙungiya guda biyu. Amincewa ba tare da dubawa ba (rubber-stamping): mai bita yana amincewa da komai, sau da yawa domin jerin dubawarsa ba shi da sarari. Kai-da-komo (ping-pong): marubuci yana gyara matsala ɗaya kuma ya dawo da wata tsohuwa. Ku karanta rajistar aiki don ganin duka biyun.",
            "Ku bar mutane su ci gaba da iko kan sakamakon. Ƙungiyar tana samar da daftari da bita; mutum ne yake amincewa da duk abin da za a wallafa, a aika, ko a yi amfani da shi wajen yanke shawara. Ƙarin wakilai ba sa cire buƙatar wannan wurin dubawa; suna ƙara masa muhimmanci."
          ],
          steps: ["Ku saita MAX_ROUNDS.", "Zagaye: marubuci yana rubuta daftari, mai bita yana yanke shawara.", "Idan approve: status 'approved', ku tsaya.", "Idan revise: ku mayar da dalilan ga marubuci.", "A iyaka: status 'needs_human', ku nuna daftari da dalilai."],
          words: [["Zagaye (round)", "zagaye ɗaya na rubuta daftari da bita."], ["Amincewa ba tare da dubawa ba (rubber-stamping)", "amincewa da komai ba tare da duba da gaske ba."], ["Miƙawa ga mutum (escalation)", "ba mutum matsala idan tsarin ba zai iya warware ta ba."]],
          slides: [
            { title: "Wakilai biyu za su iya zagayawa har abada", bullets: ["MAX_ROUNDS = 3", "Babu amincewa zuwa lokacin: 'needs_human'"] },
            { title: "Kurakuran ƙungiya guda biyu", bullets: ["Rubber-stamping: yana amincewa da komai", "Ping-pong: tsofaffin matsaloli suna dawowa", "Ku karanta rajistar aiki don duka biyun"] },
            { title: "Mutane suna ci gaba da iko", bullets: ["Ƙungiyar tana rubuta daftari da bita", "Mutum yana amincewa da abin da za a wallafa ko a aika"] }
          ],
          tryIt: "Ku rubuta zagayen marubuci da mai bita da MAX_ROUNDS = 3. Ku gwada shi da takardar bayanai da marubuci zai iya ƙara gishiri a kanta. Sannan ku gwada iyakar ta hanyar sa jerin dubawar mai bita ya zama ba zai yiwu ba (\"ƙasa da kalmomi 5\") ku tabbatar ya tsaya da needs_human.",
          youCanNow: "dakatar da kai-da-komon wakilai da iyakar zagaye da miƙa aikin da bai ƙare ba ga mutum.",
          quickCheck: [
            { objective: "O5", q: "Mene ne ping-pong a zagayen marubuci da mai bita?", options: ["Gyara matsala ɗaya yana dawo da wata tsohuwa, zagaye bayan zagaye", "Mai bita yana amincewa da kowane daftari", "Wakilai biyu suna aiki a lokaci ɗaya", "Zagaye mai sauri da ke ƙarewa a zagaye ɗaya"], answer: 0, why: "Ping-pong kai-da-komo ne marar ƙarewa, shi yasa zagayen yake buƙatar iyakar zagaye." },
            { objective: "O5", q: "Mai bita bai amince ba bayan zagaye 3. Me ya kamata tsarin ya yi?", options: ["Ya amince da daftari na ƙarshe duk da haka", "Ya sake farawa daga zagaye na 1", "Ya tsaya da needs_human ya nuna daftari da dalilan", "Ya ɗaga iyakar zuwa zagaye 10"], answer: 2, why: "Aikin da bai ƙare ba yana zuwa ga mutum tare da duk abin da yake buƙata don yanke shawara." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ƙungiyar ta fi wakili ɗaya? Gwada ta",
          minutes: 6,
          goal: "Kwatanta tsarin wakilai masu yawa da wakili ɗaya a gwaje-gwaje iri ɗaya.",
          text: [
            "Ƙungiya ta cancanta ne kawai idan ta fi aiki. Ku gwada ta kamar yadda kuka gwada prompts a kwas na 2: bayanan shigarwa iri ɗaya, maki a sarari, da kwatantawa. Ku yi takardun bayanai uku, ku wuce da su ta ƙungiyar da ta wakili ɗaya da ke da jerin dubawa a cikin nasa prompt.",
            "Ku ba kowace amsa maki da jerin dubawar mai bita da kanku (ba da wakilin mai bita ba), ku kuma ƙirga kiran model na kowace hanya. Kiran model yana wakiltar kuɗi da lokaci.",
            "Ku rubuta sakamakon da gaskiya. Idan wakili ɗaya ya sami maki iri ɗaya da kashi ɗaya cikin uku na kiran, ku yi amfani da wakili ɗaya. Idan ƙungiyar ta kama kurakurai na gaske da wakili ɗaya bai gani ba, ƙarin kiran sun saya muku inganci. Kowace amsa sakamako ne mai kyau na injiniya."
          ],
          steps: ["Ku yi takardun bayanai uku na gwaji.", "Ku wuce da kowacce ta ƙungiyar da ta wakili ɗaya.", "Ku ba kowace amsa maki da kanku da jerin dubawa.", "Ku ƙirga kiran model na kowace hanya.", "Ku rubuta wace hanya ta yi nasara da dalili."],
          words: [["Baseline (ma'aunin kwatantawa)", "sigar mai sauƙi da kuke kwatantawa da ita, a nan wakili ɗaya."], ["Kiran model (model call)", "buƙata ɗaya ga model; ƙarin kira yana nufin ƙarin kuɗi da lokaci."]],
          slides: [
            { title: "Dole ƙungiya ta cancanci matsayinta", bullets: ["Bayanai iri ɗaya, maki a sarari, kwatantawa", "Baseline: wakili ɗaya mai jerin dubawa"] },
            { title: "Ku auna abubuwa biyu", bullets: ["Inganci: ku ba da maki da jerin dubawa da kanku", "Kuɗi: ku ƙirga kiran model"] },
            { title: "Ku ba da rahoto da gaskiya", bullets: ["Maki iri ɗaya, kira kaɗan? Ku yi amfani da wakili ɗaya", "An kama kurakurai na gaske? Ƙungiyar ta cancanta"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala tsarin marubuci da mai bita mai bayanai na bai ɗaya, miƙa aiki mai tsari da MAX_ROUNDS = 3, ku gudanar da shi a takardun bayanai uku, ku gudanar da baseline na wakili ɗaya a takardu iri ɗaya, sannan ku rubuta gajeren kwatanci na inganci da kiran model.",
          youCanNow: "gina ƙaramin tsarin wakilai masu yawa da tabbatar da ko ya fi wakili ɗaya.",
          quickCheck: [
            { objective: "O6", q: "Mene ne baseline a wannan kwas?", options: ["Daftari na farko da marubuci ya yi", "Wakili ɗaya da kuke kwatanta ƙungiyar da shi", "Mafi ƙarancin makin da aka yarda", "Iyakar zagaye"], answer: 1, why: "Kwatantawa da wakili ɗaya yana nuna ko ƙungiyar ta cancanci ƙarin kuɗinta." },
            { objective: "O6", q: "Ƙungiyar ta sami maki kaɗan fiye da wakili ɗaya amma tana amfani da kiran model ninki uku. Me za ku yi?", options: ["Kullum ku zaɓi ƙungiya, domin ƙungiyoyi sun fi", "Ku daina gwaji", "Ku ƙara wakilai don ɗaga makin", "Ku auna ko ƙaramin ƙarin ya cancanci ƙarin kuɗi da lokaci, ku rubuta dalili"], answer: 3, why: "Kiran model yana wakiltar kuɗi da lokaci, don haka zaɓin yana auna inganci da su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gina da gwada ƙungiyar",
        questions: [
          { objective: "O4", q: "Wane ne ya kamata ya sabunta bayanai na bai ɗaya?", options: ["Kowane wakili, duk lokacin da ya so", "Mai bita kaɗai", "Code ɗinku, bayan duba kowane miƙa aiki", "Babu kowa"], answer: 2, why: "State mallakar code yana riƙe gaskiya ɗaya kuma yana hana mummunar amsa." },
          { objective: "O5", q: "Mai bita bai amince ba bayan zagaye 3. Me ya kamata ya faru?", options: ["A tsaya da 'needs_human' a nuna daftari da dalilai", "A amince da shi kai tsaye", "A ci gaba har ya amince", "A goge daftarin"], answer: 0, why: "A miƙa wa mutum maimakon a ci gaba da zagayawa." },
          { objective: "O5", q: "Mai bita yana amincewa da kowane daftari, har ma marasa kyau. Wannan shi ne:", options: ["Ping-pong", "Rubber-stamping", "Pipeline", "Shared state"], answer: 1, why: "Jerin dubawa marasa sarari suna kai wa ga amincewa da komai." },
          { objective: "O6", q: "Yaya ya kamata ku ba da maki ga amsoshin ƙungiya da na wakili ɗaya?", options: ["Ku ba su maki da kanku da jerin dubawa ɗaya", "Ku tambayi wakilin mai bita", "Ku zaɓi mafi tsawo", "Ku ƙirga kalmomi kawai"], answer: 0, why: "Maki mai zaman kansa kuma iri ɗaya yana sa kwatantawar ta yi adalci." },
          { objective: "O6", q: "Wakili ɗaya ya sami maki iri ɗaya da ƙungiyar da kashi ɗaya cikin uku na kiran model. Me ya kamata ku yi?", options: ["Ku yi amfani da ƙungiyar duk da haka", "Ku ƙara wakilai", "Ku daina gwaji", "Ku yi amfani da wakili ɗaya"], answer: 3, why: "Inganci iri ɗaya da ƙaramin kuɗi yana nufin tsari mafi sauƙi ya yi nasara." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tsarin Wakilai Masu Yawa (Multi-Agent Systems)",
    questions: [
      { objective: "O1", q: "Tsarin wakilai masu yawa shi ne:", options: ["Wakili ɗaya mai dogon prompt", "Wakilai da dama masu nasu ayyuka suna aiki kan aiki ɗaya", "Chatbot mai masu amfani da yawa", "Rumbun bayanai (database)"], answer: 1, why: "Kowane wakili yana da nasa aiki, umarni da kayan aiki." },
      { objective: "O1", q: "Kowane ƙarin wakili yana ƙara:", options: ["Inganci kyauta", "Babu komai", "Kuɗi, miƙa aiki da aikin gwaji", "Ƙarancin lokaci"], answer: 2, why: "Ƙarin wakilai yana nufin ƙarin kira da ƙarin abubuwan dubawa." },
      { objective: "O1", q: "Gwajin ɗaukar ma'aikata yana tambaya:", options: ["Wakilin yana da fara'a?", "Nawa ne kuɗin model?", "Za ku ɗauki mutane biyu daban-daban don wannan aikin?", "Prompt ɗin yana da tsawo?"], answer: 2, why: "Ƙwarewa daban-daban a sarari suna nuna buƙatar wakilai dabam-dabam." },
      { objective: "O1", q: "Wane aiki ne zai fi yiwuwa ya buƙaci wakili ɗaya kawai?", options: ["Raba saƙonni zuwa rukuni huɗu da jerin dubawa", "Bincike, rubutu da tabbatar da bayanan doguwar takardar rahoto", "Gudanar da bincike goma a lokaci ɗaya", "Rubuta tallace-tallace da yin bita a kansu daban"], answer: 0, why: "Mutum ɗaya da jerin dubawa zai iya yin sa." },
      { objective: "O2", q: "A tsarin orchestrator, orchestrator ɗin yana:", options: ["Amincewa da nasa aikin", "Tsara rubutu kawai", "Ajiye maɓallin API", "Raba buri yana ba ma'aikata sassa"], answer: 3, why: "Yana tsarawa yana ba da aiki, sannan ya haɗa sakamakon." },
      { objective: "O2", q: "Me yasa marubuci da mai bita yake da kyau ga masu farawa?", options: ["Ba ya buƙatar iyaka", "Yana ƙara dubawa mai zaman kansa kan inganci", "Ba ya amfani da model", "Ba ya taɓa zagayawa"], answer: 1, why: "Wakili na biyu mai jerin dubawa yana kama kurakurai." },
      { objective: "O2", q: "Pipeline yana da sauƙin gyarawa domin:", options: ["Yana aiki a ɓoye", "Ba shi da wakilai", "Ba ya taɓa kasawa", "Kullum kun san wane wakili zai yi aiki na gaba"], answer: 3, why: "Jeri ƙayyadadde yana sa kowane mataki ya bayyana." },
      { objective: "O3", q: "Prompt na aiki ya kamata ya haɗa da:", options: ["Kalmar sirrinku", "Cikakken prompt na kowane sauran wakili", "Aikin wakilin ɗaya, kayan aikinsa da tsarin amsarsa", "Barkwanci"], answer: 2, why: "Kowane wakili yana buƙatar nasa aikin da dokokinsa kaɗai." },
      { objective: "O3", q: "Ya kamata wakilin mai bita ya sami kayan rubutu?", options: ["A'a, sai abin da yake buƙata don bita kaɗai", "Eh, dukkan kayan aiki", "Kayan imel kaɗai", "Ya kamata ya sami maɓallin API"], answer: 0, why: "Ƙaramin izini (least privilege) ya shafi kowane wakili." },
      { objective: "O3", q: "Miƙa aiki mai tsari yana da amfani domin:", options: ["Sun fi tsawo", "Code yana iya duba abin da aka wuce da shi", "Suna ɓoye bayani", "Model ba za su iya karanta rubutu ba"], answer: 1, why: "Ƙayyadaddun maɓallai suna sa a iya duba miƙa aiki." },
      { objective: "O3", q: "Mai bita da aka tambaya \"Yana da kyau?\" zai fi yiwuwa ya:", options: ["Amince da sauƙi sosai", "Duba kowane bayani", "Ƙi amsawa", "Ƙirga kalmomi daidai"], answer: 0, why: "Tambayoyi marasa sarari suna kawo amincewa marar sarari." },
      { objective: "O4", q: "Bayanai na bai ɗaya mallakar:", options: ["Burauzar mai amfani", "Wakilin marubuci", "Kamfanin model", "Code ɗinku"], answer: 3, why: "Code yana riƙe tushen gaskiya guda ɗaya." },
      { objective: "O4", q: "Rabuwa (drift) yana nufin:", options: ["Model yana ƙara sauri", "Kwafe-kwafen bayani suna zama daban a hankali", "Iyakar zagaye", "Trigger"], answer: 1, why: "Bayanai na bai ɗaya suna hana kwafe-kwafen da ke rabuwa." },
      { objective: "O4", q: "Me yasa za a ajiye state a rajistar aiki bayan kowane mataki?", options: ["Don tsallake zagaye", "Don sa model ya fi wayo", "Don ganin daidai yadda aikin ya canja", "Don raba maɓallinku"], answer: 2, why: "Rajistar aiki tana nuna kowane canji don gyara kurakurai." },
      { objective: "O5", q: "MAX_ROUNDS yana hana:", options: ["Kiran model gaba ɗaya", "Daftari masu kyau", "Kai-da-komo marar ƙarewa tsakanin wakilai", "Rajistar aiki"], answer: 2, why: "Iyakar zagaye tana kawo ƙarshen ping-pong." },
      { objective: "O5", q: "Ping-pong a zagayen marubuci da mai bita shi ne lokacin da:", options: ["Gyara matsala ɗaya yana dawo da wata tsohuwa", "Mai bita yana amincewa da komai", "Daftarin ya cika ba aibi", "An ajiye state"], answer: 0, why: "Wakilai suna ci gaba da musayar matsaloli iri ɗaya." },
      { objective: "O5", q: "Miƙawa ga mutum (escalation) yana nufin:", options: ["Goge rajistar aiki", "Ƙara wakilai", "Ɗaga iyakar zagaye har abada", "Ba mutum aikin da bai ƙare ba"], answer: 3, why: "Mutane suna warware abin da tsarin ba zai iya ba." },
      { objective: "O5", q: "Da ƙarin wakilai, wurin dubawar mutum yana zama:", options: ["Ba a buƙatarsa", "Mafi muhimmanci", "Na atomatik", "Haramun"], answer: 1, why: "Ƙarin sassa masu motsi yana nufin ƙarin hanyoyin kuskure." },
      { objective: "O6", q: "Baseline a wannan kwas shi ne:", options: ["Amsa mafi tsawo", "Daftari na farko", "Maɓallin API", "Wakili ɗaya da kuke kwatanta ƙungiyar da shi"], answer: 3, why: "Kuna kwatanta ƙungiyar da zaɓi mai sauƙi." },
      { objective: "O6", q: "Ana ƙirga kiran model domin suna wakiltar:", options: ["Yawan kalmomi", "Inganci", "Kuɗi da lokaci", "Yawan masu amfani"], answer: 2, why: "Ƙarin kira yana ƙara kuɗi kuma yana ɗaukar lokaci mai tsawo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 2, 4, 7, 9, 11, 13, 14, 16, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Ayyuka a sarari da jerin dubawa", objective: "O3", notYet: "Ayyukan sun haɗu, ko mai bita yana tambaya ne kawai ko daftarin yana da kyau.", meets: "Marubuci da mai bita kowanne yana da aiki ɗaya; mai bita yana duba bayanai daga takardar, ƙasa da kalmomi 80 kuma babu iƙirari kamar \"best\".", exceeds: "Mai bita ba shi da kayan rubutu kuma yana ba da dalili ga kowane revise." },
      { name: "Miƙa aiki mai tsari", objective: "O3", notYet: "Wakilai suna wuce da rubutu kawai da code ba zai iya dubawa ba.", meets: "Mai bita yana mayar da JSON mai approve ko revise da dalilai.", exceeds: "Code yana duba kowane miƙa aiki kafin ya yi amfani da shi." },
      { name: "Bayanai na bai ɗaya", objective: "O4", notYet: "Wakilai suna riƙe kwafe-kwafen aikin daban-daban.", meets: "Aikin yana wucewa ta ƙamus na state guda ɗaya da code ke sabuntawa.", exceeds: "Ana rubuta state a rajistar aiki bayan kowane mataki." },
      { name: "Iyakar zagaye da miƙawa ga mutum", objective: "O5", notYet: "Babu iyakar zagaye, ko zagayen zai iya tafiya har abada.", meets: "Yana tsayawa bayan zagaye 3 a mafi yawa kuma yana buga cikakken rajistar aiki.", exceeds: "Aikin da bai ƙare ba yana tsayawa da needs_human kuma yana nuna daftari da dalilai." },
      { name: "Kwatantawa mai adalci", objective: "O6", notYet: "Babu baseline na wakili ɗaya, ko an yi amfani da bayanan shigarwa daban-daban.", meets: "An wuce da takardun bayanai 3 iri ɗaya ta duka biyun, da rubutaccen bayani na wanne ya fi kyau da dalili.", exceeds: "An ba duka biyun maki da jerin dubawa ɗaya kuma an ƙirga kiran model." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ci gaba zuwa kwas na 6 na shirin wakilai cikin kwanaki 30",
      "Masu koyo da suka ce suna zaɓar wakili ɗaya ko ƙungiya bisa gwaji maimakon hasashe (binciken biyo baya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai burauzar intanet da intanet; Colab ko Python a kwamfutarku",
      "Zagayen wakilinku da mataimakin ask_model daga kwas na 3, da maɓallin API na model",
      "Gajerun takardun bayanai uku na ƙirƙira game da kaya",
      "Takarda don zana tsare-tsaren wakilai",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku sa ƙungiyar ta yi amfani da gwajin ɗaukar ma'aikata kan ayyuka na gaske kafin kowa ya rubuta code.",
      "Ku ba kowa takardun bayanai uku iri ɗaya don a iya kwatanta sakamakon ƙungiya da na wakili ɗaya a cikin rukunin gaba ɗaya.",
      "Ku lura da yawan kiran model a matakan kyauta; ku bar iyakar zagaye a 3.",
      "Ku nemi masu koyo su nuna aiki ɗaya da ya tsaya da needs_human, ku tattauna abin da mutumin zai yanke.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku karɓi \"wakili ɗaya ya yi daidai\" a matsayin sakamako mai kyau idan gwajin ya nuna haka."
    ]
  }
};
