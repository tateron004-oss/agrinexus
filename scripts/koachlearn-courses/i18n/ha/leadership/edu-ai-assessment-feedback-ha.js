"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-ai-assessment-feedback.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-ai-assessment-feedback-ha",
  lang: "ha",
  translationOf: "edu-ai-assessment-feedback",
  category: "Leadership Development",
  name: "AI ga Shugabannin Makaranta da Ilimi 4: AI don Jarrabawa da Ra'ayi kan Aikin Ɗalibai",
  skills: "Rubuta tambayoyin jarrabawa da suka dace da manufa ta amfani da AI, Gina rubric, Tsara ƙananan gwaje-gwaje na lokacin koyarwa, Rubuta daftarin ra'ayi da malami ke da iko a kai, Kare aikin ɗalibai da makinsu, Magance zargin amfani da AI cikin adalci",
  outcome: "gina kunshin jarrabawa da AI: tambayoyi da suka dace da manufa tare da amsoshin da kuka duba, rubric mai matakai huɗu tare da sigar da ɗalibai za su fahimta, tikitin fita (exit ticket) da bankin sharhi (comment bank), da kuma amfani da shi a tsarin ba da ra'ayi da ke kare sirrin ɗalibai, kuma kowane maki yana hannun malami.",
  about: [
    "Wannan kwas ɗin na malamai ne, masu horar da malamai (instructional coaches), shugabannin jarrabawa da shugabannin makaranta. Jarrabawa da ba da ra'ayi kan aikin ɗalibai suna ɗaukar lokacin malami sosai, kuma AI zai iya taimakawa, amma maki da hukunci kan ɗalibai abubuwa ne masu muhimmanci sosai. Wannan kwas ɗin yana nuna inda AI ke taimakawa da inda ba za a bar shi ya yanke hukunci ba.",
    "Babi na 1 yana amfani da AI don gina jarrabawa: tambayoyi da suka dace da manufa, rubric, da ƙananan gwaje-gwaje na lokacin koyarwa. Babi na 2 game da ra'ayi kan aiki ne: tsarin da AI ke rubuta daftari, malami kuma ke yanke hukunci, yadda ake kare aikin ɗalibai a ƙarƙashin dokar FERPA (dokar sirrin bayanan ɗalibai ta Amurka), da yadda ake magance zargin amfani da AI a aikin ɗalibai cikin adalci.",
    "Ku yi atisaye da aikin ɗalibai na ƙirƙira kawai, ko aikin da aka cire duk bayanan da ke nuna ko wane ne ɗalibin, kuma ku yi amfani da kayan aikin da gundumar makarantarku (district) ta amince da su don aikin ɗalibai kaɗai. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Wannan shi ne kwas na 4 cikin 8 a jerin AI ga Shugabannin Makaranta da Ilimi."
  ],
  finalTask: "Ku gina kunshin jarrabawa don manufa ɗaya: tambayoyi biyar da suka dace da manufar tare da amsoshin da kuka duba da kanku, rubric mai matakai huɗu da sharuɗɗa uku ko huɗu tare da sigar da ɗalibai za su fahimta, tikitin fita mai tambayoyi uku, da bankin sharhi mai aƙalla sharhi takwas da ke da alaƙa da rubric ɗin. Ku gwada tsarin ba da ra'ayi kan amsoshin ɗalibai uku na ƙirƙira, ku canja aƙalla sharhi ɗaya da AI ya rubuta, kuma ku rubuta makin da kanku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Malamai, masu horar da malamai, shugabannin jarrabawa da shugabannin makarantu a Amurka waɗanda ke rubuta jarrabawa, ba da ra'ayi kan aikin ɗalibai, ko taimakon malaman da ke yin haka.",
    startingPoint: "Suna iya tsara darasi da AI kuma su duba shi, kuma sun san muhimman abubuwan dokar FERPA daga kwasa-kwasan baya. Suna rubuta jarrabawa da ra'ayi da hannu, kuma wataƙila ba su tabbata yadda za su mayar da martani ga zargin ɗalibai sun yi amfani da AI ba.",
    gap: "Jarrabawa da ba da ra'ayi suna ɗaukar lokacin malami sosai, kuma AI zai iya taimakawa, amma maki abubuwa ne masu muhimmanci sosai. Malamai suna buƙatar gina jarrabawa da ta dace da manufa ta amfani da AI, su yi amfani da tsarin da AI ke rubuta daftari, malami kuma ke yanke hukunci, su kare aikin ɗalibai, kuma su magance zargin amfani da AI cikin adalci.",
    constraints: [
      "Ku yi atisaye da aikin ɗalibai na ƙirƙira kawai, ko aikin da aka cire duk bayanan da ke nuna ko wane ne ɗalibin",
      "Ku yi amfani da kayan aikin da gundumar makaranta ta amince da su don aikin ɗalibai kaɗai",
      "Malamai ne ke yanke kowane maki; AI ba ya taɓa ba ɗalibai maki shi kaɗai",
      "Makin na'urar gano rubutun AI (AI detector) ba ya taɓa zama shaida kaɗai ta rashin amfani da AI daidai",
      "Lokaci: gajerun darussa da suka dace da ranar koyarwa"
    ],
    prerequisites: "\"AI ga Shugabannin Makaranta da Ilimi 3: AI don Tsara Darasi\" (AI for School and Educational Leaders 3: AI for Lesson Planning)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku manufa ɗaya", action: "samar da tambayoyi a matakai uku da suka dace da manufar ta amfani da AI, da warware kowace amsa a cikin jerin amsoshi (key)", standard: "kuna gyara ko cire duk tambayar da ke da kuskure ko amsoshi biyu masu yiwuwa" },
    { id: "O2", condition: "Don aikin da kuka ba ɗalibai", action: "ƙirƙirar rubric mai matakai huɗu da sigar da ɗalibai za su fahimta ta amfani da AI", standard: "kowane akwati ya fito fili sosai ta yadda malamai biyu za su ba aiki ɗaya maki iri ɗaya" },
    { id: "O3", condition: "Don manufa ɗaya", action: "tsara tambayar hinge da tikitin fita mai tambayoyi uku", standard: "kuna yanke shawara kafin gwajin abin da za ku sake koyarwa ga kowace amsar da ba daidai ba" },
    { id: "O4", condition: "Idan aka ba ku amsoshin ɗalibai da rubric ɗinku", action: "amfani da AI don rubuta daftarin sharhin glow-and-grow (ƙarfi da mataki na gaba), sannan gyara su da rubuta makin da kanku", standard: "an canja aƙalla sharhi ɗaya na AI kuma ku ne kuka yanke kowane maki" },
    { id: "O5", condition: "Idan kayan AI suna taɓa aikin ɗalibai ko makinsu", action: "aiwatar da muhimman abubuwan FERPA da bayyana wa iyaye yadda ake amfani da AI wajen ba da ra'ayi", standard: "kuna amfani da kayan aikin da aka amince da su kawai, tare da cire bayanan da ke nuna ko wane ne ɗalibi" },
    { id: "O6", condition: "Idan kuna zargin an yi amfani da AI ba daidai ba a aikin ɗalibi", action: "mayar da martani da tsari na adalci da dokar amfani da AI a sarari ga kowane aiki", standard: "ba tare da taɓa amfani da makin na'urar gano AI a matsayin shaida kaɗai ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gina jarrabawa da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta tambayoyi da suka dace da manufa da duba amsoshi",
          minutes: 5,
          goal: "Samar da tambayoyin jarrabawa da suka dace da manufa, da tabbatar da amsoshin.",
          text: [
            "Ku ba AI manufar darasi da ma'aunin nasara (kamar a kwas na 3), ajin ɗalibai, da irin tambayoyin da kuke so: zaɓi daga jeri (multiple choice), gajeriyar amsa, matsalar da za a warware, ko aikin bayyana tunani. Ku nemi tambayoyi a matakan tunani daban-daban: tunawa, amfani da ilimi, da bayani ko nazari.",
            "Ku nemi jerin amsoshi (key) tare da ɗan dalilin kowace amsa, kuma don zaɓi daga jeri, dalilin da yasa kowane zaɓin da ba daidai ba yake jan hankali. Zaɓuɓɓukan da ba daidai ba da ke nuna kuskuren fahimta na gaske suna ƙara gaya muku yadda ɗalibai ke tunani.",
            "Sannan ku duba kowace tambaya da kanku. Jerin amsoshin AI suna da kurakurai, tambayar zaɓi daga jeri tana iya samun amsoshi biyu daidai, kuma kalmomi suna iya rikitar da masu koyon Turanci. Ku cire duk tambayar da ba ta auna manufar ba."
          ],
          steps: ["Ku ba da manufa, ma'aunin nasara, aji da irin tambayoyi.", "Ku nemi haɗaka: tunawa, amfani, bayani.", "Ku nemi jerin amsoshi da dalilai, da dalilin da zaɓuɓɓukan kuskure ke jan hankali.", "Ku warware kowace amsa ku karanta kowace tambaya don ganin ko a sarari take.", "Ku cire tambayoyin da ba sa auna manufar."],
          words: [["Tambayar da ta dace da manufa (aligned question)", "tambayar da ke auna manufar da aka yi ta don ta auna."], ["Distractor (zaɓin ruɗi)", "zaɓin da ba daidai ba a tambayar zaɓi daga jeri."], ["Key (jerin amsoshi)", "jerin amsoshin da suke daidai."]],
          slides: [
            { title: "Ku faɗa wa AI abin da za a auna", bullets: ["Manufa da ma'aunin nasara", "Aji da irin tambayoyi", "Tunawa, amfani, bayani"] },
            { title: "Ku nemi jerin amsoshi da dalilai", bullets: ["Dalilin da yasa kowace amsa daidai ce", "Dalilin da kowane zaɓin kuskure ke jan hankali", "Zaɓuɓɓukan ruɗi da ke nuna kuskuren fahimta"] },
            { title: "Ku duba kowace tambaya", bullets: ["Jerin amsoshi suna da kurakurai", "Amsoshi biyu daidai? Kalmomi masu rikitarwa?", "Ku cire tambayoyin da ba sa kan manufa"] }
          ],
          tryIt: "Ku nemi AI ya ba ku tambayoyi shida kan manufa ɗaya a matakai uku tare da jerin amsoshi. Ku warware kowace amsa da kanku ku ƙirga duk kurakurai ko tambayoyin da ba su fito fili ba.",
          youCanNow: "rubuta tambayoyin jarrabawa da suka dace da manufa ta amfani da AI, da duba jerin amsoshin.",
          quickCheck: [
            { objective: "O1", q: "Mene ne distractor (zaɓin ruɗi) a tambayar zaɓi daga jeri?", options: ["Zaɓin da ba daidai ba a cikin jerin", "Tambayar da ta yi wuya sosai", "Hayaniya a cikin aji", "Amsar da take daidai"], answer: 0, why: "Zaɓuɓɓukan ruɗi masu kyau suna nuna kuskuren fahimta na gaske, wanda ke nuna yadda ɗalibai ke tunani." },
            { objective: "O1", q: "Kun warware jerin amsoshin AI kuma amsa ɗaya ba daidai ba ce. Me za ku yi?", options: ["Ku bar ta; ɗalibai ba za su lura ba", "Ku nemi AI ya sake ba ajin maki", "Ku gyara jerin amsoshin ku duba sauran tambayoyin da kyau", "Ku cire dukkan tambayoyin"], answer: 2, why: "Warware kowace amsa yana kama kurakurai kafin a ba ɗalibai maki." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gina rubric da ɗalibai za su fahimta",
          minutes: 6,
          goal: "Ƙirƙiri rubric mai matakai huɗu da sigar da ɗalibai za su fahimta ta amfani da AI.",
          text: [
            "Rubric yana bayyana ingancin aiki a kowane mataki ga kowane sharaɗi. Ku nemi AI ya ba ku analytic rubric: sharuɗɗa uku ko huɗu daga ma'aunin nasararku, matakai huɗu (misali: farawa, tasowa, ƙwarewa, ci gaba), da ɗan bayanin yadda aikin yake a kowane mataki.",
            "Kyakkyawan bayanin mataki yana faɗin abin da ke cikin aikin, ba kawai \"fiye\" ko \"ƙasa\" ba: \"yana amfani da shaidu biyu kuma yana bayyana yadda kowanne ke tallafa wa ra'ayin\" ya fi \"amfani mai kyau da shaida\". Ku nemi AI ya sake rubuta akwatunan da ba su fito fili ba.",
            "Sannan ku nemi sigar da ɗalibai za su fahimta da jimloli masu farawa da \"Ni\" (misali \"Ina amfani da...\"), kuma ku gwada dukkan biyun a kan misalin aiki: shin aiki yana faɗawa a mataki ɗaya a fili? Rubric yana da adalci ne kawai idan malamai biyu za su ba aiki ɗaya maki iri ɗaya."
          ],
          steps: ["Ku ba da aikin da ma'aunin nasara.", "Ku nemi sharuɗɗa 3-4 da matakai 4.", "Ku sake rubuta akwatunan da ba su fito fili ba zuwa abin da ke cikin aikin.", "Ku nemi sigar \"Ni\" da ɗalibai za su fahimta.", "Ku gwada a kan misali: shin malamai biyu za su yarda?"],
          words: [["Rubric", "jagorar ba da maki da ke bayyana ingancin aiki a matakai daban-daban."], ["Sharaɗi (criterion)", "inganci ɗaya da ake yin hukunci a kai, kamar amfani da shaida."], ["Analytic rubric", "rubric da ke ba kowane sharaɗi maki daban."]],
          slides: [
            { title: "Analytic rubric", bullets: ["Sharuɗɗa 3-4 daga ma'aunin nasara", "Matakai 4 ga kowanne", "Ɗan bayani a kowane akwati"] },
            { title: "Ku faɗi abin da ke cikin aikin", bullets: ["Ba \"amfani mai kyau da shaida\" ba", "Amma \"shaidu biyu, an bayyana kowanne\""] },
            { title: "Ku sa ya zama na adalci kuma a sarari", bullets: ["Sigar \"Ni\" da ɗalibai za su fahimta", "Shin malamai biyu za su yarda?"] }
          ],
          tryIt: "Ku gina rubric mai matakai huɗu da AI don aikin da kuke ba ɗalibai. Ku sake rubuta duk akwatin da bai fito fili ba, ku yi sigar ɗalibai, kuma ku gwada shi a kan amsa ɗaya ta ƙirƙira.",
          youCanNow: "gina rubric mai matakai huɗu a sarari da sigar da ɗalibai za su fahimta ta amfani da AI.",
          quickCheck: [
            { objective: "O2", q: "Mene ne analytic rubric?", options: ["Rubric mai maki ɗaya gaba ɗaya", "Rubric da ke ba kowane sharaɗi maki daban", "Rubric da AI ya rubuta", "Jerin kayan aiki"], answer: 1, why: "Analytic rubric yana ba kowane sharaɗi matakinsa daban." },
            { objective: "O2", q: "Wani akwatin rubric yana cewa \"amfani mai kyau da shaida\". Me za ku canja?", options: ["Babu komai, a sarari yake", "Ku cire akwatin", "Ku ƙara kalmar \"sosai\"", "Ku faɗi daidai abin da ɗalibai ke yi, kamar \"yana amfani da shaidu biyu kuma yana bayyana kowanne\""], answer: 3, why: "Akwatuna masu fitowa fili suna sa ba da maki ya zama na adalci, kuma suna taimakon ɗalibai su san abin da za su yi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ƙananan gwaje-gwaje na lokacin koyarwa",
          minutes: 5,
          goal: "Tsara tikitin fita da gwaje-gwaje a cikin darasi da ke nuna wanda ke buƙatar me a gaba.",
          text: [
            "Formative assessment shi ne duba koyo a lokacin koyarwa don ku iya daidaita koyarwarku. Ba shi da nauyi sosai kuma yana da sauri. AI yana da kyau wajen samar da gajerun gwaje-gwaje masu yawa: tikitin fita mai tambayoyi uku, tambayar hinge ɗaya a tsakiyar darasi, ƙananan matsaloli a kan allo.",
            "Tambayar hinge tana da zaɓuɓɓukan amsa da aka tsara ta yadda kowace amsar da ba daidai ba ke nuna wani kuskuren fahimta na musamman. Ku tambayi AI: \"Write one multiple-choice hinge question for [objective]. Each wrong answer should reveal a different common misconception; explain which.\" (Ka rubuta tambayar hinge ɗaya ta zaɓi daga jeri don [manufa]. Kowace amsar kuskure ta nuna wani kuskuren fahimta daban; ka bayyana wanne.)",
            "Ku tsara abin da za ku yi da sakamakon kafin ku ba da gwajin: wa zai sami sake koyarwa, wa zai ci gaba. Gwajin da ba ku yi aiki da shi ba takarda ce kawai."
          ],
          steps: ["Ku zaɓi lokaci: tsakiyar darasi ko ƙarshen darasi.", "Ku nemi AI ya ba ku tambayar hinge ko tikitin fita mai tambayoyi uku.", "Ku duba cewa kowace amsar kuskure tana nuna kuskuren fahimta na gaske.", "Ku yanke shawara tun da wuri abin da za ku yi da kowane sakamako.", "Ku yi aiki da shi washegari."],
          words: [["Formative assessment", "gwaje-gwaje marasa nauyi a lokacin koyo, da ake amfani da su don daidaita koyarwa."], ["Tikitin fita (exit ticket)", "gajeren aiki da ɗalibai ke yi a ƙarshen darasi."], ["Tambayar hinge (hinge question)", "tambayar da kowace amsarta ta kuskure ke nuna wani kuskuren fahimta na musamman."]],
          slides: [
            { title: "Formative = duba da daidaitawa", bullets: ["Ba shi da nauyi kuma yana da sauri", "Tikitin fita, tambayoyin hinge, allo"] },
            { title: "Tambayoyin hinge", bullets: ["Tambaya ɗaya a tsakiyar darasi", "Kowace amsar kuskure = kuskuren fahimta", "Ku nemi AI ya bayyana wanne"] },
            { title: "Ku tsara martaninku", bullets: ["Wa zai sami sake koyarwa?", "Wa zai ci gaba?", "Gwajin da ba a yi amfani da shi ba takarda ce kawai"] }
          ],
          tryIt: "Ku nemi AI ya ba ku tambayar hinge ɗaya da tikitin fita mai tambayoyi uku don manufarku. Ga kowace amsar kuskure ta tambayar hinge, ku rubuta abin da za ku sake koyarwa.",
          youCanNow: "tsara ƙananan gwaje-gwaje na lokacin koyarwa da tsara abin da za ku yi da sakamakon.",
          quickCheck: [
            { objective: "O3", q: "Mene ne formative assessment?", options: ["Jarrabawar ƙarshe", "Jarrabawar jiha", "Duba koyo mara nauyi a lokacin koyarwa don daidaita koyarwa", "Maki na ɗabi'a"], answer: 2, why: "Gwaje-gwajen formative suna gaya muku abin da za ku koyar a gaba." },
            { objective: "O3", q: "Rabin ajin sun zaɓi amsar kuskure iri ɗaya a tambayar hinge. Me za ku yi?", options: ["Ku sake koyar da kuskuren fahimtar da amsar ke nunawa", "Ku ci gaba zuwa darasi na gaba", "Ku ba kowa ƙaramin maki", "Ku nemi AI ya ba tambayar hinge maki"], answer: 0, why: "Kowace amsar kuskure ta tambayar hinge tana nuna kuskuren fahimta da za ku iya sake koyarwa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gina jarrabawa da AI",
        questions: [
          { objective: "O1", q: "Me yasa za ku nemi AI ya bayyana dalilin da kowane zaɓin kuskure ke jan hankali?", options: ["Yana tsawaita jarrabawar", "Don a yaudari ɗalibai ba bisa adalci ba", "Zaɓuɓɓukan ruɗi da ke nuna kuskuren fahimta suna nuna yadda ɗalibai ke tunani", "Dole ne"], answer: 2, why: "Zaɓuɓɓukan ruɗi masu kyau suna nuna kuskuren fahimta." },
          { objective: "O1", q: "Wata tambayar zaɓi daga jeri ta AI tana da amsoshi biyu da za su iya zama daidai. Ya kamata ku:", options: ["Gyara ta ko cire ta", "Bar ta", "Karɓi kowace daga cikinsu", "Ba kowa cikakken maki"], answer: 0, why: "Kowace tambaya tana buƙatar amsa ɗaya da ke daidai a fili." },
          { objective: "O2", q: "Wane akwatin rubric ne aka fi rubutawa da kyau?", options: ["\"Shaida mai kyau\"", "\"Ƙarin shaida\"", "\"Aiki mai kyau\"", "\"Yana amfani da shaidu biyu kuma yana bayyana yadda kowanne ke tallafa wa ra'ayin\""], answer: 3, why: "Yana bayyana abin da ke cikin aikin." },
          { objective: "O3", q: "Mece ce tambayar hinge?", options: ["Tambaya game da ƙofofi", "Tambayar da kowace amsarta ta kuskure ke nuna kuskuren fahimta", "Tambayar jarrabawar ƙarshe", "Tambayar aikin gida"], answer: 1, why: "Tana nuna abin da za a sake koyarwa a tsakiyar darasi." },
          { objective: "O3", q: "Yaushe ya kamata ku yanke shawarar abin da za ku yi da sakamakon tikitin fita?", options: ["Sai idan yawancin ɗalibai sun faɗi", "Ba a taɓa ba", "A ƙarshen shekara", "Kafin ku ba da gwajin"], answer: 3, why: "Tsara martani tun da wuri yana sa gwajin ya yi amfani." }
        ]
      }
    },
    {
      name: "Babi na 2: Ra'ayin da malami ke da iko a kai",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsarin ba da ra'ayi: AI na rubuta daftari, malami na yanke hukunci",
          minutes: 6,
          goal: "Yi amfani da AI don rubuta daftarin ra'ayi da ke da alaƙa da rubric, sannan ku gyara shi ku mallake shi.",
          text: [
            "Kyakkyawan ra'ayi yana fitowa fili, yana da alaƙa da sharuɗɗan, kuma yana gaya wa ɗalibi abin da zai yi a gaba. Bankin sharhi (comment bank) yana taimakawa: ku nemi AI ya ba ku sharhi biyu ko uku ga kowane sharaɗi da mataki na rubric, kowanne da ƙarfi ɗaya (\"glow\") da mataki ɗaya na gaba (\"grow\").",
            "Tsarin aiki: ku fara karanta aikin ɗalibin da kanku ku yanke matakin rubric. Sannan ku zaɓi ko ku rubuta sharhi, kuna amfani da AI don daidaita kalmomi idan ana buƙata. Idan kuna amfani da AI don rubuta sharhi kan aikin ɗalibai na gaske, ku yi haka a kayan aikin da gundumarku ta amince da shi don aikin ɗalibai kaɗai, kuma ku cire sunaye da bayanan da ke nuna ko wane ne ɗalibin.",
            "Ku ne kuke rubuta makin. Makin AI yana iya canzawa ba bisa ka'ida ba, yana iya ba aiki mai tsawo maki fiye da mai inganci, kuma yana iya zama rashin adalci ga masu koyon Turanci da ɗalibai masu nakasa. Ku gyara kowane sharhi don ya yi kama da ku kuma ya dace da ɗalibin; ɗalibai suna lura da ra'ayi na gama-gari."
          ],
          steps: ["Ku gina bankin sharhi bisa sharaɗi da mataki: glow da grow.", "Ku karanta aikin da kanku ku zaɓi matakin rubric.", "Ku zaɓi ko ku daidaita sharhi; ku yi amfani da kayan aikin da aka amince da su kawai don aiki na gaske.", "Ku cire sunaye da bayanan da ke nuna ko wane ne ɗalibi.", "Ku rubuta makin da kanku; ku gyara kowane sharhi."],
          words: [["Bankin sharhi (comment bank)", "jerin sharhi na ra'ayi da aka ajiye wanda za ku iya sake amfani da shi ku daidaita shi."], ["Glow and grow", "ra'ayi mai ƙarfi ɗaya (glow) da mataki ɗaya na gaba (grow)."]],
          slides: [
            { title: "Kyakkyawan ra'ayi", bullets: ["A sarari kuma yana da alaƙa da sharuɗɗa", "Ƙarfi ɗaya, mataki ɗaya na gaba"] },
            { title: "Tsarin aiki", bullets: ["Ku karanta aikin ku zaɓi matakin", "Ku zaɓi ko ku daidaita sharhi", "Kayan aikin da aka amince da su kawai don aiki na gaske; babu sunaye"] },
            { title: "Ku ne kuke rubuta makin", bullets: ["Makin AI yana iya canzawa ba bisa ka'ida ba", "Yana iya fifita tsawo fiye da inganci", "Ku gyara don ya yi kama da ku"] }
          ],
          tryIt: "Ku gina bankin sharhi mai sharhin glow-and-grow guda takwas don rubric ɗinku. Ku rubuta amsoshin ɗalibai uku na ƙirƙira, ku ba su maki da kanku, sannan ku zaɓi ku gyara sharhi ga kowanne.",
          youCanNow: "gudanar da tsarin ba da ra'ayi inda AI ke taimakawa wajen rubuta daftari, ku kuma kuke yanke hukunci.",
          quickCheck: [
            { objective: "O4", q: "Mene ne bankin sharhi (comment bank)?", options: ["Ra'ayin da AI ke aika wa ɗalibai shi kaɗai", "Sharhin ra'ayi da aka ajiye wanda kuke sake amfani da shi kuna daidaita shi", "Jerin maki", "Asusun banki na kuɗin makaranta"], answer: 1, why: "Bankin sharhi yana adana lokaci yayin da malami har yanzu ke zaɓar kowane sharhi yana gyara shi." },
            { objective: "O4", q: "AI ya rubuta daftarin sharhi da bai dace da aikin wani ɗalibi ba. Me za ku yi?", options: ["Ku aika shi duk da haka", "Ku bar AI ya canja makin", "Ku tsallake ra'ayi ga wannan ɗalibin", "Ku gyara sharhin don ya dace da aikin, kuma ku riƙe makinku"], answer: 3, why: "AI na rubuta daftari, malami kuma na yanke hukunci, don haka ku ne masu kowane sharhi da kowane maki." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kare aikin ɗalibai da makinsu",
          minutes: 5,
          goal: "Aiwatar da muhimman abubuwan FERPA ga aikin ɗalibai, maki da kayan AI.",
          text: [
            "Aikin ɗalibai da makin da makaranta ke ajiyewa yawanci suna cikin bayanan ilimi (education records) a ƙarƙashin FERPA. Bayyana bayanan da ke nuna ko wane ne ɗalibi (PII) daga cikinsu ga wani kamfani na waje yawanci yana buƙatar izini, sai dai idan wani keɓancewa ya shafa; misali, kamfanin da ke sayar da hidima (vendor) zai iya zama kamar jami'in makaranta idan yana yin hidimar makaranta, yana ƙarƙashin ikon makarantar kai tsaye, kuma yana bin iyaka kan sake raba bayanai. Shi yasa yarjejeniyoyin gunduma suke da muhimmanci.",
            "Dokoki masu amfani ga ma'aikata: ku yi amfani da kayan aikin da gunduma ta amince da su kawai don aikin ɗalibai na gaske; ku cire sunaye da bayanan da ke nuna ko wane ne ɗalibi ko da a lokacin; kada ku taɓa ɗora littafin maki (grade book), takardun IEP ko 504 (shirye-shiryen ɗalibai masu buƙatu na musamman), ko bayanan horo (discipline) a kayan aikin da ba a amince da su ba; kuma ku duba sharuɗɗan kayan aikin kan ko yana ajiye aikin da aka ɗora ko yana horar da kansa da shi.",
            "Ku faɗa wa iyaye yadda ake amfani da AI wajen ba da ra'ayi. Iyaye suna da haƙƙi a ƙarƙashin FERPA na dubawa da nazarin bayanan ilimin ɗansu, kuma bayyana gaskiya yana gina amincewa. Don ainihin dokokin gundumarku, ku tambayi jami'in sirrin bayanai (privacy officer)."
          ],
          steps: ["Ku yi amfani da kayan aikin da aka amince da su kawai don aikin ɗalibai na gaske.", "Ku cire sunaye da bayanan da ke nuna ko wane ne ɗalibi.", "Kada ku taɓa ɗora littafin maki, IEP, 504 ko bayanan horo a kayan aikin da ba a amince da su ba.", "Ku duba ko kayan aikin yana ajiye abin da aka ɗora ko yana horar da kansa da shi.", "Ku faɗa wa iyaye yadda ake amfani da AI wajen ba da ra'ayi."],
          words: [["Bayanin ilimi (education record)", "bayanin da ke da alaƙa kai tsaye da ɗalibi kuma makaranta ke ajiyewa."], ["Keɓancewar jami'in makaranta (school official exception)", "dokar FERPA da ke bar wasu kamfanoni da ke ƙarƙashin ikon makaranta su sami bayanai don manufar makaranta."]],
          slides: [
            { title: "Aiki da maki bayanai ne", bullets: ["Yawanci bayanan ilimi ne a ƙarƙashin FERPA", "Raba PII yawanci yana buƙatar izini", "Sai dai idan wani keɓancewa ya shafa"] },
            { title: "Dokoki ga ma'aikata", bullets: ["Kayan aikin da aka amince da su kawai don aiki na gaske", "Ku cire sunaye duk da haka", "Babu littafin maki, IEP ko fayilolin horo"] },
            { title: "Ku bayyana gaskiya ga iyaye", bullets: ["Ku bayyana yadda AI ke taimakawa wajen ra'ayi", "Iyaye za su iya duba bayanai", "Ku tambayi jami'in sirrin bayanai don cikakken bayani"] }
          ],
          sources: [{ name: "FERPA: Kare Sirrin Ɗalibai (Ma'aikatar Ilimi ta Amurka, US Department of Education)", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Ku rubuta takarda mai jimloli uku ga iyaye da ke bayyana yadda ajinku ko makarantarku ke amfani da AI wajen taimakon ra'ayi, abin da ake karewa, kuma cewa malamai ne ke yanke duk maki.",
          youCanNow: "kare aikin ɗalibai da makinsu idan AI yana cikin tsarin ba da ra'ayi.",
          quickCheck: [
            { objective: "O5", q: "A ƙarƙashin FERPA, aikin ɗalibai da makaranta ke ajiyewa yawanci yana cikin me?", options: ["Bayanan ilimi", "Bayanan jama'a da kowa zai iya gani", "Bayanan sirri na malami", "Mallakar kamfanin hidima"], answer: 0, why: "Aikin ɗalibai da makaranta ke ajiyewa yawanci yana cikin bayanan ilimi da ake karewa." },
            { objective: "O5", q: "Wani malami yana son taimakon AI don ba da ra'ayi kan rubuce-rubucen ɗalibai na gaske. Wace shawara za ku ba shi?", options: ["Ya liƙa rubuce-rubucen a kowane chatbot na kyauta", "Ya ɗora littafin maki ma, don ƙarin bayani", "Ya yi amfani da kayan aikin da gunduma ta amince da shi kawai, tare da cire bayanan da ke nuna ko wane ne ɗalibi", "Ya nemi ɗalibai su liƙa rubuce-rubucensu a AI da kansu"], answer: 2, why: "Kayan aikin da aka amince da su da cire bayanan da ke nuna ko wane ne ɗalibi suna kare bayanan ɗalibai." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Zargin amfani da AI a aikin ɗalibai: magance shi cikin adalci",
          minutes: 6,
          goal: "Ku mayar da martani ga zargin amfani da AI da dokoki a sarari da tsari na adalci, ba da makin na'urar gano AI ba.",
          text: [
            "Na'urorin gano rubutun AI (AI detectors) suna iya yin kuskure. Suna iya nuna aikin gaskiya a matsayin na AI, kuma bincike da malamai sun nuna damuwa cewa suna yawan nuna rubutun masu koyon Turanci. Makin na'urar ganowa shi kaɗai bai kamata ya taɓa zama shaidar hukuncin satar amsa ba.",
            "Ku fara da rigakafi: ku faɗa wa ɗalibai a sarari wane amfani da AI aka yarda da shi a kowane aiki (misali: babu, tunanin farko kawai, ko an yarda tare da rubutu da ke faɗin yadda aka yi amfani da shi). Ku tsara ayyukan da tunanin ɗalibi ke bayyana: daftari, rubutu a cikin aji, bayani da baki, alaƙa da rayuwar ɗalibin.",
            "Idan kuna zargin an yi amfani da AI ba daidai ba, ku yi magana da ɗalibin: ku nemi ya bayyana aikinsa, ya nuna daftarinsa ko ya sake yin wani sashe a cikin aji. Ku bi manufar gaskiya a karatu (academic integrity) ta makarantarku, ku sa iyaye a ciki kamar yadda manufar ta buƙata, kuma ku mai da shi lokacin koyo idan zai yiwu."
          ],
          steps: ["Ku faɗi amfani da AI da aka yarda da shi a kowane aiki.", "Ku tsara ayyukan da tunani ke bayyana.", "Kada ku taɓa dogara ga makin na'urar ganowa shi kaɗai.", "Ku yi magana da ɗalibin; ku nemi ya bayyana ko ya nuna daftari.", "Ku bi manufar gaskiya a karatu ta makarantarku."],
          words: [["Gaskiya a karatu (academic integrity)", "gaskiya a aikin makaranta: yin aikinku da kanku da faɗin lokacin da aka taimake ku."], ["False positive (kuskuren gano)", "lokacin da na'urar ganowa ta nuna aikin gaskiya ba daidai ba."]],
          slides: [
            { title: "Na'urorin ganowa suna iya yin kuskure", bullets: ["Suna iya nuna aikin gaskiya", "Damuwa game da masu koyon Turanci", "Ba su taɓa zama shaida kaɗai ba"] },
            { title: "Ku fara da rigakafi", bullets: ["Ku faɗi amfani da AI da aka yarda da shi a kowane aiki", "Ku sa tunani ya bayyana: daftari, magana, aiki a aji"] },
            { title: "Idan kuna zargin rashin amfani daidai", bullets: ["Ku yi magana da ɗalibin", "Ku nemi ya bayyana ko ya sake yin wani sashe", "Ku bi manufar gaskiya a karatu"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala kunshin jarrabawarku (tambayoyi biyar da aka duba, rubric da sigar ɗalibai, tikitin fita, bankin sharhi mai sharhi takwas), ku gudanar da tsarin ba da ra'ayi kan amsoshi uku na ƙirƙira da makinku na kanku, kuma ku ƙara dokar amfani da AI ta layi ɗaya ga aikin.",
          youCanNow: "amfani da AI a duk fannin jarrabawa da ba da ra'ayi yayin da kuke kiyaye maki su zama na adalci, a sirri, kuma a hannun malami.",
          quickCheck: [
            { objective: "O6", q: "Wane kuskure na'urorin gano rubutun AI za su iya yi?", options: ["Babu; koyaushe suna daidai", "Su nuna aikin gaskiya a matsayin wanda AI ya rubuta", "Su ba rubuce-rubuce maki", "Su rubuta rubuce-rubuce"], answer: 1, why: "Na'urorin ganowa suna iya nuna aikin gaskiya ba daidai ba, don haka ba su taɓa zama shaida kaɗai ba." },
            { objective: "O6", q: "Kuna zargin wani ɗalibi ya yi amfani da AI saɓanin dokar aikin. Mene ne mataki na farko na adalci?", options: ["Ku ba shi sifili nan take", "Ku faɗa wa dukkan ajin", "Ku gwada ƙarin na'urorin ganowa uku", "Ku nemi ɗalibin ya bayyana aikinsa ko ya nuna daftari"], answer: 3, why: "Tattaunawa da wasu shaidu sun fi makin na'urar ganowa adalci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ra'ayin da malami ke da iko a kai",
        questions: [
          { objective: "O4", q: "A tsarin ba da ra'ayi, me malami ke fara yi?", options: ["Ya liƙa aikin a kowane kayan AI", "Ya bar AI ya ba shi maki", "Ya karanta aikin ya zaɓi matakin rubric", "Ya aika shi ga iyaye"], answer: 2, why: "Hukuncin malami ne ke zuwa farko." },
          { objective: "O4", q: "Wa ke rubuta makin?", options: ["Malami", "AI", "Ɗalibi", "Kamfanin hidima"], answer: 0, why: "Maki hukunci ne na malami." },
          { objective: "O5", q: "A ƙarƙashin FERPA, aikin ɗalibai da makaranta ke ajiyewa yawanci:", options: ["Bayanin jama'a ne", "Yana cikin bayanan ilimi", "Mallakar kamfanin AI ne", "Dokar ba ta shafe shi ba"], answer: 1, why: "Bayanan da ke da alaƙa kai tsaye da ɗalibi kuma makaranta ke ajiyewa bayanan ilimi ne." },
          { objective: "O6", q: "Na'urar ganowa ta ce AI ya rubuta kashi 90% na wani rubutu. Me ya kamata ku yi?", options: ["Ku yi magana da ɗalibin ku duba wasu shaidu", "Ku ba da sifili", "Ku kai ƙarar iyalin", "Ku yi watsi da dukkan manufofi"], answer: 0, why: "Makin na'urar ganowa shi kaɗai ba hujja ba ne." },
          { objective: "O6", q: "Me ya fi hana amfani da AI ba daidai ba?", options: ["Rashin faɗin komai", "Hana kwamfutoci har abada", "Amfani da ƙarin na'urorin ganowa", "Faɗin amfani da AI da aka yarda da shi a kowane aiki da sa tunani ya bayyana"], answer: 3, why: "Dokoki a sarari da tunanin da ke bayyana suna hana matsaloli." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Shugabannin Makaranta da Ilimi 4: AI don Jarrabawa da Ra'ayi kan Aikin Ɗalibai",
    questions: [
      { objective: "O1", q: "Tambayar da ta dace da manufa:", options: ["Ita ce mafi wuya", "Tana auna manufar da aka yi ta don ta auna", "Ita ce mafi tsawo", "AI ne kaɗai ya zaɓe ta"], answer: 1, why: "Dacewa da manufa shi ne gwaji na farko na tambaya mai kyau." },
      { objective: "O1", q: "Distractor (zaɓin ruɗi) shi ne:", options: ["Waya", "Ɗalibi mai hayaniya", "Zaɓin da ba daidai ba a tambayar zaɓi daga jeri", "Tambayar ƙarin maki"], answer: 2, why: "Zaɓuɓɓukan ruɗi masu kyau suna nuna kuskuren fahimta." },
      { objective: "O1", q: "Bayan AI ya rubuta jerin amsoshi, ya kamata ku:", options: ["Buga shi", "Amince da shi", "Warware kowace amsa da kanku", "Ba ɗalibai shi"], answer: 2, why: "Jerin amsoshi suna da kurakurai." },
      { objective: "O1", q: "Haɗakar matakan tambayoyi tana nufin:", options: ["Tunawa, amfani da bayani", "Masu sauƙi kawai", "Masu wuya kawai", "Gaskiya ko ƙarya kawai"], answer: 0, why: "Matakai daban-daban suna nuna zurfin koyo daban-daban." },
      { objective: "O2", q: "Analytic rubric:", options: ["Ɗalibai ne ke rubuta shi", "Yana ba da maki ɗaya gaba ɗaya kawai", "Ba shi da matakai", "Yana ba kowane sharaɗi maki daban"], answer: 3, why: "Kowane sharaɗi yana samun matakinsa." },
      { objective: "O2", q: "Rubric da ɗalibai za su fahimta yana amfani da:", options: ["Kalmomin shari'a", "Jimloli masu farawa da \"Ni\"", "Code na kwamfuta", "Lambobi kawai"], answer: 1, why: "Ya kamata ɗalibai su fahimci manufar." },
      { objective: "O2", q: "Rubric yana da adalci idan:", options: ["Kowa ya sami A", "Yana da tsawo sosai", "AI ne ya rubuta shi", "Malamai biyu za su ba aiki ɗaya maki iri ɗaya"], answer: 3, why: "Daidaito shi ne adalci." },
      { objective: "O3", q: "Formative assessment shi ne:", options: ["Katin sakamako (report card)", "Jarrabawar ƙarshe", "Duba koyo mara nauyi a lokacin koyarwa don daidaita koyarwa", "Jarrabawar jiha"], answer: 2, why: "Yana nuna mataki na gaba." },
      { objective: "O3", q: "Ana ba da tikitin fita:", options: ["A ƙarshen darasi", "A farkon shekara", "A ranar Juma'a kawai", "Ga iyaye kawai"], answer: 0, why: "Yana duba koyon ranar." },
      { objective: "O3", q: "Gwajin da ba ku taɓa yin aiki da shi ba:", options: ["Shi ne mafi kyau", "Takarda ce kawai", "Dole ne", "Summative ne (jarrabawar ƙarshen koyo)"], answer: 1, why: "Gwaje-gwajen formative suna da muhimmanci idan sun canja koyarwa." },
      { objective: "O4", q: "Ra'ayin glow and grow yana ba da:", options: ["Ƙarfi ɗaya da mataki ɗaya na gaba", "Yabo kawai", "Suka kawai", "Maki kawai"], answer: 0, why: "Ɗalibai suna buƙatar dukkan biyun." },
      { objective: "O4", q: "Bankin sharhi shi ne:", options: ["Manhajar ba da maki", "Asusun ajiyar kuɗi", "Jerin ɗalibai", "Sharhin ra'ayi da aka ajiye wanda kuke sake amfani da shi kuna daidaita shi"], answer: 3, why: "Yana adana lokaci yayin da ra'ayi ke ci gaba da fitowa fili." },
      { objective: "O4", q: "Makin AI na iya zama rashin adalci domin yana iya:", options: ["Kasancewa cikakke koyaushe", "Ba tsawo maki fiye da inganci", "Rashin karanta aikin kwata-kwata", "Amfani da rubric daidai"], answer: 1, why: "Fifita tsawo matsala ce da aka saba gani." },
      { objective: "O5", q: "Don aikin ɗalibai na gaske, ku yi amfani da:", options: ["Kafofin sada zumunta", "Kowane kayan aiki na kyauta", "Kayan aikin da gunduma ta amince da su kawai, tare da cire bayanan da ke nuna ko wane ne ɗalibi", "Imel ɗinku na kanku"], answer: 2, why: "Kayan aikin da aka amince da su da cire bayanai suna kare sirri." },
      { objective: "O5", q: "Wanne bai kamata ya taɓa shiga kayan AI da ba a amince da shi ba?", options: ["Tikitin fita mara rubutu", "Rubric na gama-gari", "Littafin maki", "Amsar ƙirƙira"], answer: 2, why: "Littafin maki yana ɗauke da bayanan ilimi da ke nuna ko wane ne ɗalibi." },
      { objective: "O5", q: "A ƙarƙashin FERPA, iyaye za su iya:", options: ["Dubawa da nazarin bayanan ilimin ɗansu", "Ba aikin maki", "Amince da kamfanonin hidima", "Rubuta rubric"], answer: 0, why: "Dubawa haƙƙi ne na asali a FERPA." },
      { objective: "O5", q: "Kamfanin hidima zai iya zama kamar jami'in makaranta idan:", options: ["Yana da masu amfani da yawa", "Kyauta ne", "Ya nema cikin ladabi", "Yana yin hidimar makaranta a ƙarƙashin ikon makarantar kai tsaye, tare da iyaka kan sake raba bayanai"], answer: 3, why: "Waɗannan su ne sharuɗɗan FERPA." },
      { objective: "O6", q: "Na'urorin gano rubutun AI:", options: ["Koyaushe suna daidai", "Suna iya nuna aikin gaskiya ba daidai ba", "Doka ta wajabta su", "Suna tabbatar da satar amsa"], answer: 1, why: "Kuskuren gano (false positive) yana faruwa." },
      { objective: "O6", q: "Idan kuna zargin amfani da AI ba daidai ba, mataki na farko na adalci shi ne:", options: ["Yin watsi da manufarku", "Ba da sifili", "Wallafa labarin a intanet", "Neman ɗalibin ya bayyana aikinsa ko ya nuna daftari"], answer: 3, why: "Tattaunawa tana tattara shaida ta gaske." },
      { objective: "O6", q: "Kowane aiki ya kamata ya faɗi:", options: ["Cewa an hana AI koyaushe", "Babu komai game da AI", "Wane amfani da AI aka yarda da shi", "Makin ɗalibin"], answer: 2, why: "Dokoki a sarari suna hana rashin fahimta." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      6,
      7,
      10,
      12,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tambayoyi da suka dace da manufa",
        objective: "O1",
        notYet: "Tambayoyi ƙasa da biyar, ko ba a duba jerin amsoshin ba.",
        meets: "Tambayoyi biyar da suka dace da manufar tare da jerin amsoshin da kuka warware da kanku.",
        exceeds: "Tambayoyin sun haɗa tunawa, amfani da bayani, kuma zaɓuɓɓukan ruɗi suna nuna kuskuren fahimta na gaske."
      },
      {
        name: "Rubric",
        objective: "O2",
        notYet: "Matakai ƙasa da huɗu, akwatunan da ba su fito fili ba, ko babu sigar ɗalibai.",
        meets: "Rubric mai matakai huɗu da sharuɗɗa uku ko huɗu tare da sigar da ɗalibai za su fahimta.",
        exceeds: "Kowane akwati yana bayyana abin da ɗalibai ke yi, kuma an gwada shi a kan amsar ƙirƙira."
      },
      {
        name: "Tikitin fita",
        objective: "O3",
        notYet: "Babu tikitin fita, ko bai dace da manufar ba.",
        meets: "Tikitin fita mai tambayoyi uku don manufar.",
        exceeds: "Yana faɗin abin da za ku yi da kowane sakamako kafin a ba da shi."
      },
      {
        name: "Tsarin ba da ra'ayi",
        objective: "O4",
        notYet: "Sharhi ƙasa da takwas, an yi amfani da sharhin AI ba tare da canji ba, ko AI ne ya rubuta makin.",
        meets: "Aƙalla sharhi takwas da ke da alaƙa da rubric, amsoshi uku na ƙirƙira, an canja sharhin AI ɗaya, kuma ku ne kuka rubuta makin.",
        exceeds: "Kowace amsa tana samun glow ɗaya da grow ɗaya da ke da alaƙa da matakin rubric."
      },
      {
        name: "Sirri da amfani da AI cikin adalci",
        objective: "O6",
        notYet: "An yi amfani da bayanan ɗalibai na gaske, ko babu dokar amfani da AI ga aikin.",
        meets: "An yi amfani da aikin ƙirƙira kawai, kuma aikin yana da dokar amfani da AI ta layi ɗaya.",
        exceeds: "Ya haɗa da gajeriyar takarda ga iyaye kan yadda AI ke taimakawa wajen ra'ayi da wanda ke yanke maki."
      }
    ]
  },
  evaluation: {
    results: [
      "Malaman da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Malaman da suka ce sun yi amfani da kunshin jarrabawa ko bankin sharhi da wani aji cikin kwanaki 30 (binciken biyo baya)",
      "Malaman da suka ce sun adana lokacin ba da ra'ayi yayin da har yanzu suke rubuta kowane maki da kansu (binciken biyo baya)",
      "Makarantun da kowane babban aiki ke faɗin amfani da AI da aka yarda da shi (binciken biyo baya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet da mataimakin AI da gunduma ta amince da shi don wannan amfani",
      "Manufa ɗaya da aikin da kuke ba ɗalibai",
      "Amsoshin ɗalibai uku na ƙirƙira",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku sa malamai su warware jerin amsoshin AI bibbiyu su kwatanta kurakuran da suka gano.",
      "Ku yi amfani da aikin ɗalibai na ƙirƙira kawai; kada ku taɓa liƙa aikin ɗalibai na gaske ko makinsu a kayan aikin da ba a amince da su ba.",
      "Ku sa malamai biyu su ba amsar ƙirƙira ɗaya maki da kowane rubric don gwada adalci.",
      "Ku tattauna tsarin adalci na zargin amfani da AI kafin wata matsala ta taso, kuma ku yarda cewa makin na'urar ganowa ba ya taɓa zama shaida kaɗai.",
      "Ku ba aikin ƙarshe maki da rubric, kuma ku duba cewa malami ne ya rubuta kowane maki."
    ]
  }
};
