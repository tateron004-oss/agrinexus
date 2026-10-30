"use strict";

// Koach Learn course, Hausa (ha) translation of re-entry/reentry-ai-digital-confidence.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "reentry-ai-digital-confidence-ha",
  lang: "ha",
  translationOf: "reentry-ai-digital-confidence",
  category: "Re-Entry",
  name: "Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani",
  skills: "Buɗe mataimakin AI kyauta, Yin tambaya a sarari, Inganta amsa, Tabbatar da amsa, Kiyaye bayanan sirri",
  outcome: "amfani da mataimakin AI kyauta a waya ko kwamfutar ɗakin karatu don samun taimako kan aikin yau da kullum: yin tambaya a sarari, inganta amsar, tabbatar da ita kafin ku amince da ita, da kiyaye bayananku na sirri daga cikinta.",
  about: [
    "Wataƙila fasaha ta canja sosai lokacin da ba ku nan. Wannan kwas ɗin yana farawa daga farko, kuma yana tafiya mataki-mataki, a hankali.",
    "Za ku koyi mene ne mataimakin AI, yadda ake buɗe shi kyauta, yadda ake neman taimakonsa, yadda ake tabbatar da abin da ya faɗa, da yadda ake kiyaye bayananku na sirri.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi amfani da mataimakin AI don rubuta gajeren saƙo mai ladabi da ke tambayar wani kamfani ko shago ko suna ɗaukar ma'aikata. Ku nemi a rubuta shi da kalmomi masu sauƙi, ku nemi gyara ɗaya don ya fi kyau, ku duba cewa babu bayanan sirri a cikinsa, sannan ku karanta shi da babbar murya don ku tabbata yana kama da yadda kuke magana.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari. Da yawa sun yi shekaru ba sa nan lokacin da wayoyin zamani (smartphone) da kayan AI suka canja; wasu ba su taɓa amfani da wayar zamani ba. Shekarunsu sun bambanta sosai, kuma yawancinsu suna neman aiki da gidan zama, kuma suna sake haɗuwa da iyalansu.",
    startingPoint: "Suna iya kira da tura saƙon tes a waya mai sauƙi. Ba sa amfani da manhajoji (apps), burauzar intanet ko mataimakan AI sosai, ko kwata-kwata. Wasu ba su da ƙarfin gwiwa wajen karatu ko fasaha.",
    gap: "Masu ɗaukar aiki, ofisoshin gidaje da sauran hidimomi yanzu suna sa ran mutane su yi abubuwa ta intanet. Masu koyo suna buƙatar amfani da mataimakin AI kyauta lafiya don taimakon yau da kullum (saƙonni, bayanin wasiƙu, jerin abubuwan yi) ba tare da amsoshi marasa gaskiya ko zamba sun ruɗe su ba. Yin haka yana ƙara ƙarfin gwiwa kuma yana hanzarta neman aiki da gida.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wataƙila suna da waya mai sauƙi kawai, ko kwamfutar ɗakin karatu mai ƙayyadadden lokaci",
      "Lokaci: darussa na minti 4 zuwa 5 da suka dace da ganawa da aiki",
      "Wasu sharuɗɗan parole ko probation (sakin sharaɗi) suna iyakance amfani da intanet; kowane mai koyo yana bin nasa sharuɗɗan",
      "Haɗarin zamba da sirri yana da yawa: babu lambar sirri ta gaske a kowane aikin gwaji"
    ],
    prerequisites: "Babu. Masu koyo da ba su taɓa amfani da allon taɓawa (touchscreen) ba za su iya fara ɗaukar kwas ɗin \"Using a Smartphone and Tablet\" (Amfani da Wayar Zamani da Tablet)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyuka biyar", action: "gane waɗanne ayyukan yau da kullum mataimakin AI zai iya taimakawa da su, da waɗanda ke buƙatar mutum ko wata majiya ta hukuma", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Ta amfani da waya ko kwamfutar ɗakin karatu", action: "buɗe mataimakin AI kyauta daga manhajarsa ko shafinsa na hukuma, aika saƙon farko, sannan fita daga asusun (sign out) idan kun gama", standard: "ba tare da taimakon kowa ba" },
    { id: "O3", condition: "Idan kuna da wani aiki na gaske daga rayuwarku", action: "rubuta prompt da ke faɗin abin da kuke buƙata, halin da kuke ciki, da yadda kuke son amsar", standard: "ta yadda amsar farko za ta yi amfani" },
    { id: "O4", condition: "Idan amsar AI ba ta yi daidai sosai ba", action: "neman canje-canje da tambayoyin biyo baya, ɗaya bayan ɗaya", standard: "har ta zama gajeriya, a sarari, kuma ta dace da buƙatarku cikin ƙoƙari uku ko ƙasa da haka" },
    { id: "O5", condition: "Idan amsar AI tana da wani bayani kamar lambar waya, adireshi ko doka", action: "tabbatar da bayanin a shafin hukuma (.gov ko shafin ƙungiyar da kanta)", standard: "kafin ku yi amfani da shi" },
    { id: "O6", condition: "Idan kuna rubuta prompt ko kun sami saƙon gaggawa", action: "kiyaye bayanan sirri daga ciki da gane alamun zamba", standard: "ba tare da bayyana lambobin sirri, kalmomin sirri (password) ko lambobin tabbatarwa (code) ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Fara amfani da AI",
      lessons: [
        {
          title: "Mene ne mataimakin AI, da abin da ba shi ba",
          objectives: ["O1"],
          minutes: 4,
          goal: "Bayyana da kalmominku abin da mataimakin AI zai iya yi da wanda ba zai iya yi ba.",
          text: [
            "Mataimakin AI shiri ne na kwamfuta da za ku iya rubuta masa ko ku yi masa magana da kalmomi na yau da kullum. Kuna yin tambaya, shi kuma yana rubuta amsa. Sanannu masu kyauta sun haɗa da ChatGPT, Microsoft Copilot da Google Gemini.",
            "Ya koya daga rubuce-rubuce masu yawan gaske, don haka yana da kyau wajen bayanin abubuwa, rubuta daftari, yin jerin abubuwa da tsare-tsare, da mayar da kalmomi masu wuya zuwa kalmomi masu sauƙi.",
            "Shi ba mutum ba ne, ba lauya ba ne, ba likita ba ne, kuma ba ofishin gwamnati ba ne. Bai san ku ba, kuma yana iya yin kuskure, ko da yana magana kamar ya tabbata. Ku ne kuke da iko: ku ne kuke yanke abin da za ku tambaya, da abin da za ku yarda da shi."
          ],
          words: [["AI", "gajartawar artificial intelligence (basirar na'ura): shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum, kamar rubutu ko amsa tambayoyi."], ["Mataimakin AI", "shirin AI da kuke hira da shi ta rubutu ko magana."]],
          slides: [
            { title: "Mataimakin AI shi ne...", bullets: ["Shirin kwamfuta da kuke hira da shi", "Kuna rubuta ko faɗin tambaya da kalmomin yau da kullum", "Yana rubuta amsa cikin daƙiƙoƙi"] },
            { title: "Yana da kyau wajen", bullets: ["Bayanin abubuwa da kalmomi masu sauƙi", "Rubuta daftari: wasiƙu, saƙonni, takardar bayanin aiki (CV)", "Yin jerin abubuwa, tsare-tsare da jadawali"] },
            { title: "Shi BA", bullets: ["Mutum, lauya, likita ko ofishin gwamnati ba ne", "Koyaushe daidai yake ba, ko da yana magana kamar ya tabbata", "Shi ne mai iko ba: ku ne"] }
          ],
          tryIt: "Ku rubuta abubuwa uku a rayuwarku da mataimakin AI zai iya taimakawa da su a wannan makon, misali jerin kayan cefane, saƙo ga wani a iyali, ko bayanin wata wasiƙa da kuka samu.",
          youCanNow: "faɗin mene ne mataimakin AI, ambaci abubuwa uku da zai iya taimakawa da su, da faɗin dalilin da yasa har yanzu kuke tabbatar da abin da ya faɗa.",
          quickCheck: [
            { objective: "O1", q: "Wane aiki mataimakin AI zai iya taimakawa da shi?", options: ["Rubuta jerin kayan cefane daga abincin da kuke shiryawa", "Sa hannu a takardar shari'a a madadinku", "Biyan kuɗaɗenku daga bankinku", "Zuwa ganawarku a madadinku"], answer: 0, why: "Mataimakin AI zai iya rubutu da bayani; ba zai iya sa hannu, biya ko zuwa wuri a madadinku ba." },
            { objective: "O1", q: "Mataimakin AI ya faɗa muku ranar zuwa kotu. Mene ne gaskiya?", options: ["Koyaushe daidai yake domin kwamfuta ce", "Yana iya yin kuskure, don haka ku tabbatar da kotun", "AI ne kaɗai zai iya canja ranar", "Ba sai kun rubuta ta ba"], answer: 1, why: "AI yana iya magana kamar ya tabbata amma ya yi kuskure; ranaku da dokoki daga ofishin hukuma suke." }
          ]
        },
        {
          title: "Buɗe mataimakin AI kyauta a waya ko kwamfutar ɗakin karatu",
          objectives: ["O2"],
          minutes: 5,
          goal: "Buɗe mataimakin AI kyauta kuma ku nemo akwatin da ake rubutu.",
          text: [
            "Kuna iya amfani da mataimakin AI a wayar zamani ko a kowace kwamfuta mai intanet, kamar ta ɗakin karatu na jama'a ko ta cibiyar neman aiki.",
            "A waya: ku buɗe shagon manhajoji (Google Play a Android, App Store a iPhone), ku nemi sunan mataimakin, sannan ku saka manhajar da ainihin kamfanin ya yi (OpenAI don ChatGPT, Microsoft don Copilot, Google don Gemini). Ku saka daga shagon manhajoji na hukuma kaɗai.",
            "A kwamfuta: ku buɗe burauzar intanet, ku rubuta adireshin: chatgpt.com, copilot.microsoft.com ko gemini.google.com. Wasu suna barin ku yi hira ba tare da asusu ba; wasu suna neman ku shiga asusu.",
            "A kwamfutar da ake rabawa ko ta ɗakin karatu, kada ku bari burauzar ta ajiye kalmar sirrinku, kuma ku fita daga asusu ku rufe burauzar idan kun gama."
          ],
          steps: ["Ku zaɓi waya ko kwamfuta mai intanet.", "Waya: ku saka manhajar hukuma daga shagon manhajoji. Kwamfuta: ku rubuta adireshin shafin a burauzar.", "Ku nemi akwatin saƙo kusa da ƙasan allo. Sau da yawa yana cewa \"Ask anything\" ko \"Message\".", "A kwamfutar da ake rabawa: ku fita daga asusu ku rufe burauzar idan kun gama."],
          words: [["Burauzar intanet (web browser)", "shirin da kuke amfani da shi don ziyartar shafukan intanet, kamar Chrome, Edge ko Safari."], ["Shagon manhajoji (app store)", "wurin hukuma a waya don samun manhajoji lafiya."]],
          slides: [
            { title: "Inda za ku iya amfani da shi", bullets: ["Wayarku ta zamani", "Kwamfutar ɗakin karatu na jama'a", "Kwamfutar cibiyar neman aiki ko ta masu dawowa gida"] },
            { title: "A waya", bullets: ["Ku buɗe shagon manhajoji na hukuma", "Ku nemi sunan mataimakin", "Ku saka manhajar ainihin kamfanin"] },
            { title: "A kwamfuta", bullets: ["Ku buɗe burauzar intanet", "Ku rubuta chatgpt.com, copilot.microsoft.com ko gemini.google.com", "Ku nemo akwatin saƙo a ƙasa"] },
            { title: "A kwamfutar da ake rabawa", bullets: ["Kada ku ajiye kalmar sirrinku", "Ku fita daga asusu idan kun gama", "Ku rufe burauzar"] }
          ],
          tryIt: "Ku buɗe mataimakin AI kyauta ɗaya a waya ko kwamfuta. Ku nemo akwatin saƙo ku rubuta: Sannu, ina koyon amfani da AI. Ku karanta abin da ya mayar.",
          youCanNow: "buɗe mataimakin AI kyauta a waya ko kwamfuta, nemo inda ake rubutu, da barin kwamfutar da ake rabawa lafiya.",
          quickCheck: [
            { objective: "O2", q: "Kuna son manhajar AI a wayarku. A ina za ku samo ta?", options: ["Hanyar haɗi (link) a cikin tes daga baƙo", "Kowane shafi mai maɓallin saukewa kyauta", "Shagon manhajoji na hukuma, daga ainihin kamfanin", "Kwafin da aboki ya turo muku a saƙo"], answer: 2, why: "Shagon manhajoji na hukuma da sunan ainihin kamfanin suna hana manhajoji na bogi shiga wayarku." },
            { objective: "O2", q: "Kun gama amfani da AI a kwamfutar ɗakin karatu. Me za ku fara yi?", options: ["Ku bar ta a buɗe don mutum na gaba", "Ku kashe allon kawai", "Ku rubuta kalmar sirrinku a takarda", "Ku fita daga asusu ku rufe burauzar"], answer: 3, why: "Fita daga asusu da rufe burauzar suna hana mutum na gaba shiga hirarku da asusunku." }
          ]
        },
        {
          title: "Yin tambaya a sarari",
          objectives: ["O3"],
          minutes: 5,
          goal: "Rubuta buƙata a sarari da za ta kawo amsa mai amfani tun farko.",
          text: [
            "Abin da kuke rubutawa mataimakin AI ana kiransa prompt (umarni). Prompt mai sarari yana kawo amsa mafi kyau.",
            "Prompt mai kyau yana da sassa uku: abin da kuke buƙata, ɗan bayani game da halin da kuke ciki (ba tare da bayanan sirri ba), da yadda kuke son amsar. Misali: \"Zan fara sabon aiki a rumbun ajiyar kaya ranar Litinin ƙarfe 7 na safe. Ka yi mini jerin abubuwan yi masu sauƙi na daren da ya gabata. Ka yi amfani da gajerun jimloli.\"",
            "Prompt mai rauni ya yi gajarta sosai, kamar \"shawarwarin aiki\". Mataimakin dole ya yi tsammani abin da kuke nufi, don haka amsar ta zama gama-gari."
          ],
          steps: ["Ku faɗi abin da kuke buƙata.", "Ku ƙara ɗan bayani game da halin da kuke ciki, ba tare da bayanan sirri ba.", "Ku faɗi yadda kuke son amsar: gajeriya, kalmomi masu sauƙi, matakai, jeri ko tebur."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI don neman wani abu."]],
          slides: [
            { title: "Prompt shi ne abin da kuke rubutawa", bullets: ["Prompt mai sarari = amsa mafi kyau", "Prompt gajere marar sarari = amsa ta gama-gari"] },
            { title: "Sassa uku na prompt mai kyau", bullets: ["1. Abin da kuke buƙata", "2. Ɗan bayani game da halin da kuke ciki", "3. Yadda kuke son amsar"] },
            { title: "Mai rauni da mai sarari", bullets: ["Mai rauni: \"shawarwarin aiki\"", "Mai sarari: \"Zan fara aiki a rumbun kaya ranar Litinin ƙarfe 7 na safe.", "Ka yi mini jerin abubuwan yi na daren da ya gabata.", "Ka yi amfani da gajerun jimloli.\""] }
          ],
          tryIt: "Ku zaɓi aiki ɗaya na gaske daga jerinku na Darasi na 1. Ku rubuta prompt mai dukkan sassa uku, ku aika, ku karanta amsar.",
          youCanNow: "rubuta prompt mai abin da kuke buƙata, halin da kuke ciki da yadda kuke son amsar.",
          quickCheck: [
            { objective: "O3", q: "Wane prompt ne yake da dukkan sassa uku: abin da kuke buƙata, halin da kuke ciki da yadda kuke son amsar?", options: ["\"Taimake ni.\"", "\"Ina da hirar neman aiki a rumbun kaya ranar Talata. Ka ba ni tambayoyi 5 da aka saba yi a gajeren jeri.\"", "\"Rubuta jeri.\"", "\"Hira.\""], answer: 1, why: "Yana faɗin abin da kuke buƙata (tambayoyi), halin da kuke ciki (hirar aiki a rumbun kaya ranar Talata) da tsarin amsa (gajeren jeri na 5)." },
            { objective: "O3", q: "Prompt ɗinku yana faɗin abin da kuke buƙata da halin da kuke ciki. Me ya rage?", options: ["Yadda kuke son amsar, kamar gajerun matakai ko jeri", "Cikakken sunanku da ranar haihuwarku", "Saƙon godiya", "Babu komai; ya cika"], answer: 0, why: "Faɗin yadda kuke son amsar (gajeriya, mai sauƙi, matakai, jeri) shi ne sashe na uku na prompt mai sarari." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Fara amfani da AI",
        questions: [
          { objective: "O1", q: "Mene ne mataimakin AI?", options: ["Mutumin da ke amsa saƙonninku", "Shirin kwamfuta da kuke hira da shi da kalmomin yau da kullum", "Shafin intanet na gwamnati", "Wani nau'in waya"], answer: 1, why: "Mataimakin AI shiri ne na kwamfuta da kuke rubuta masa ko magana da shi; yana rubuta amsoshi." },
          { objective: "O1", q: "Mataimakin AI yana magana kamar ya tabbata sosai da amsa. Me ya kamata ku yi?", options: ["Ku yarda da ita, domin yana magana kamar ya tabbata", "Kada ku sake amfani da AI", "Ku nemi aboki ya yarda da ita a madadinku", "Ku tabbatar da ita duk da haka, domin yana iya yin kuskure"], answer: 3, why: "AI yana iya yin kuskure ko da yana magana kamar ya tabbata. Ku ne masu iko, kuma ku tabbatar." },
          { objective: "O2", q: "Daga ina ya kamata ku saka manhajar AI a waya?", options: ["Daga shagon manhajoji na hukuma, wadda ainihin kamfanin ya yi", "Daga kowane shafin intanet", "Daga hanyar haɗi a cikin saƙon tes", "Daga tallar da ke tasowa (pop-up)"], answer: 0, why: "Shagon manhajoji na hukuma da manhajar ainihin kamfanin su ne zaɓi mafi aminci." },
          { objective: "O2", q: "Kun yi amfani da AI a kwamfutar ɗakin karatu. Me za ku yi idan kun gama?", options: ["Ku bar ta a buɗe don mutum na gaba", "Ku ajiye kalmar sirrinku don ya fi sauri a gaba", "Ku fita daga asusu ku rufe burauzar", "Ku kashe intanet ɗin ɗakin karatun"], answer: 2, why: "Fita daga asusu da rufe burauzar suna hana mutum na gaba shiga asusunku." },
          { objective: "O3", q: "Wane prompt ne ya fi sarari?", options: ["\"taimako\"", "\"shawarwarin aiki\"", "\"Zan fara aiki a rumbun kaya ranar Litinin ƙarfe 7 na safe. Ka yi jerin abubuwan yi na daren da ya gabata da gajerun jimloli.\"", "\"faɗa mini komai\""], answer: 2, why: "Yana faɗin abin da kuke buƙata, halin da kuke ciki, da yadda kuke son amsar." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da AI da ƙarfin gwiwa",
      lessons: [
        {
          title: "Inganta amsa",
          objectives: ["O4"],
          minutes: 4,
          goal: "Yi tambayoyin biyo baya don inganta amsa.",
          text: [
            "Ba dole ne ku karɓi amsar farko ba. Mataimakin AI yana tuna abin da kuka faɗa a baya a cikin hira ɗaya, don haka kuna iya neman ya canja amsarsa.",
            "Tambayoyin biyo baya masu amfani: \"Ka gajarta ta.\" \"Ka yi amfani da kalmomi masu sauƙi.\" \"Ka ƙara bayanin mataki na 2.\" \"Ka ba ni misali.\" \"Ka sa ta a jeri.\" \"Ka sa ta yi kama da ladabi sosai.\"",
            "Idan hirar ta kauce hanya, ku fara sabuwar hira ku rubuta prompt mafi sarari."
          ],
          steps: ["Ku karanta amsar farko.", "Ku yanke abin da kuke son a canja.", "Ku nemi wannan canjin ɗaya.", "Ku maimaita har amsar ta yi muku aiki."],
          words: [["Tambayar biyo baya (follow-up)", "tambaya ta biyu da ke ginuwa kan amsar da kuka samu."]],
          slides: [
            { title: "Amsar farko daftari ce", bullets: ["Kuna iya neman canje-canje", "Yana tuna hira ɗaya"] },
            { title: "Tambayoyin biyo baya masu aiki", bullets: ["\"Ka gajarta ta.\"", "\"Ka yi amfani da kalmomi masu sauƙi.\"", "\"Ka ƙara bayanin mataki na 2.\"", "\"Ka ba ni misali.\""] },
            { title: "Ta kauce hanya?", bullets: ["Ku fara sabuwar hira", "Ku rubuta prompt mafi sarari"] }
          ],
          tryIt: "Ku ɗauki amsar daga Darasi na 3. Ku nemi canje-canje biyu, ɗaya bayan ɗaya, kamar \"ka gajarta ta\" sannan \"ka yi amfani da kalmomi masu sauƙi\". Ku kwatanta amsar farko da ta ƙarshe.",
          youCanNow: "inganta amsar AI ta hanyar yin tambayoyin biyo baya masu sarari.",
          quickCheck: [
            { objective: "O4", q: "Amsar tana amfani da kalmomin da ke da wuyar karantawa. Me za ku aika a gaba?", options: ["\"Ba daidai ba. Sake gwadawa.\"", "Babu komai; ku rufe manhajar", "\"Ka tsawaita ta.\"", "\"Ka yi amfani da kalmomi masu sauƙi.\""], answer: 3, why: "Tambayar biyo baya mai sarari da ke faɗin canjin da kuke so tana gyara amsar ba tare da sake farawa ba." },
            { objective: "O4", q: "Me yasa za ku nemi canje-canje ɗaya bayan ɗaya?", options: ["AI yana iya karanta kalma ɗaya ne kawai a lokaci ɗaya", "Kuna iya ganin abin da kowane canji ya yi", "Yana rage kuɗi", "AI yana fushi da buƙatu masu tsawo"], answer: 1, why: "Canji ɗaya a lokaci ɗaya yana nuna muku wace buƙata ce ta inganta amsar." }
          ]
        },
        {
          title: "Tabbatar da amsa kafin ku amince da ita",
          objectives: ["O5"],
          minutes: 5,
          goal: "Tabbatar da amsar AI da wata majiya amintacciya.",
          text: [
            "Mataimakan AI wani lokaci suna ƙirƙirar abubuwa, kamar lambar waya marar gaskiya, ofishin da babu shi, tsohuwar doka ko ranar da ba daidai ba. Wani lokaci ana kiran wannan hallucination (hasashen ƙarya).",
            "Koyaushe ku tabbatar da duk wani abu game da kuɗi, doka, lafiyarku, tallafin gwamnati, ranaku, adireshi da lambobin waya. Ku tabbatar da majiyar hukuma: shafin gwamnati (adireshin yawanci yana ƙarewa da .gov), ofishin da kansa, ko mutumin da kuka amince da shi kamar mai kula da shari'arku (case manager), mai ba da shawara ga masu dawowa gida ko ma'aikacin ɗakin karatu.",
            "Kyakkyawar al'ada: ku tambayi mataimakin \"A ina zan tabbatar da wannan?\" sannan ku je wannan shafin hukuma da kanku, maimakon amincewa da hanyar haɗi ba tare da dubawa ba."
          ],
          steps: ["Ku nemo bayanan gaskiya a cikin amsar: lambobi, ranaku, sunaye, dokoki.", "Ku duba su a shafin hukuma (sau da yawa yana ƙarewa da .gov) ko ku kira ofishin.", "Idan ba su yi daidai ba, ku amince da majiyar hukuma.", "Don manyan shawarwari, ku kuma tambayi mutumin da kuka amince da shi."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], [".gov", "ƙarshen adireshin shafukan intanet na gwamnatin Amurka na hukuma."]],
          slides: [
            { title: "AI yana iya ƙirƙirar abubuwa", bullets: ["Lambobin waya ko adireshi marasa gaskiya", "Tsofaffin dokoki ko ranakun da ba daidai ba", "Ofisoshin da babu su"] },
            { title: "Koyaushe ku tabbatar da", bullets: ["Kuɗi da tallafi", "Doka da ƙa'idoji", "Lafiya", "Ranaku, adireshi, lambobin waya"] },
            { title: "Yadda ake tabbatarwa", bullets: ["Shafin hukuma, sau da yawa yana ƙarewa da .gov", "Ku kira ofishin", "Ku tambayi mai kula da shari'arku ko ma'aikacin ɗakin karatu"] }
          ],
          tryIt: "Ku tambayi mataimakin AI lambar waya ko shafin intanet na wani ofishi na gaske kusa da ku (misali ofishin motoci na jiharku). Sannan ku nemo shafin hukuma na ofishin da kanku, ku ga ko amsar ta yi daidai.",
          youCanNow: "gane bayanan da ke buƙatar tabbatarwa, da tabbatar da su da majiyar hukuma.",
          quickCheck: [
            { objective: "O5", q: "AI ya ba ku lambar wayar ofishin motoci. Me za ku yi?", options: ["Ku nemo lambar a shafin hukuma na ofishin ku kwatanta", "Ku kira ta nan take", "Ku raba ta a intanet", "Ku tambayi AI ko ya tabbata"], answer: 0, why: "Shafin hukuma ne kaɗai zai iya tabbatar da lambar; AI yana iya ƙirƙirar lambobin da suke kama da na gaske." },
            { objective: "O5", q: "Wane adireshin shafi ne ya fi yiwuwa ya zama shafin gwamnatin Amurka na hukuma?", options: ["dmv-help-now.com", "freegovforms.net", "dmv.ca.gov", "govservices.info"], answer: 2, why: "Shafukan gwamnatin Amurka na hukuma yawanci suna ƙarewa da .gov." }
          ]
        },
        {
          title: "Kiyaye bayananku na sirri",
          objectives: ["O6"],
          minutes: 5,
          goal: "Yi amfani da AI ba tare da bayyana bayanan sirri ba, da gane zamba da ake yi da AI.",
          text: [
            "Kada ku rubuta bayanan sirri a mataimakin AI: lambar Social Security ɗinku (lambar shaidar Amurka), lambobin katin shaida, lambar shari'a ko ta fursuna, kalmomin sirri, lambobin banki ko kati, ko cikakken adireshin gidanku. Kuna iya samun taimakon da kuke buƙata ba tare da su ba. Ku rubuta \"[lambata]\" a maimakon haka.",
            "'Yan damfara ma suna amfani da AI. Suna iya rubuta saƙonni da suke kama da na gaske, har ma su kwaikwayi muryar wani a iyali a kiran waya. Ku yi hankali da duk saƙon da ke gaggauta ku, ke neman kuɗi ko katin kyauta (gift card), ko ke neman lambar tabbatarwa (code) da aka turo wayarku.",
            "Idan wani abu bai yi muku daidai ba, ku tsaya. Ku katse wayar, sannan ku kira mutumin ko ofishin ta lambar da kuka riga kuka sani gaskiya ce."
          ],
          steps: ["Kafin ku aika prompt, ku karanta shi don neman bayanan sirri ku cire su.", "Ku yi amfani da madadi kamar \"[lambata]\".", "Ku ɗauki saƙonnin gaggawa, neman kuɗi da neman code a matsayin alamun gargaɗi.", "Ku sake kira ta lambar da kuka sani gaskiya ce."],
          words: [["Bayanan sirri", "bayanan da za su iya bar wani ya yi kamar shi ne ku, ko ya ɗauki kuɗinku."], ["Zamba", "dabarar satar kuɗi ko bayanai."]],
          slides: [
            { title: "Kada ku taɓa rubutawa AI", bullets: ["Lambar Social Security ko ta katin shaida", "Lambar shari'a ko ta fursuna", "Kalmomin sirri, lambobin banki ko kati"] },
            { title: "Ku yi amfani da madadi", bullets: ["Ku rubuta \"[lambata]\" a maimakon haka", "Har yanzu kuna samun taimakon da kuke buƙata"] },
            { title: "Alamun gargaɗin zamba", bullets: ["Suna gaggauta ku", "Suna neman kuɗi ko katin kyauta", "Suna neman code da aka turo wayarku"] },
            { title: "Idan kuna shakka", bullets: ["Ku tsaya", "Ku katse wayar", "Ku sake kira ta lambar da kuka sani gaskiya ce"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi amfani da mataimakin AI don rubuta gajeren saƙo mai ladabi da ke tambayar wani kamfani ko shago ko suna ɗaukar ma'aikata. Ku nemi canji ɗaya don ya fi kyau, ku duba cewa babu bayanan sirri a ciki, sannan ku karanta shi da babbar murya.",
          youCanNow: "amfani da mataimakin AI don aiki na gaske yayin da kuke kiyaye bayananku na sirri, da gane alamun zamba.",
          quickCheck: [
            { objective: "O6", q: "Takardar neman aiki tana neman lambar Social Security ɗinku, kuma kuna son taimakon AI da ita. Me za ku rubuta?", options: ["Lambarku ta gaske don AI ya duba ta", "Lambarku da aka canja lamba ɗaya", "Lambar katin bankinku a maimakonta", "Madadi kamar [lambata]"], answer: 3, why: "Madadi yana bar AI ya taimaka da kalmomin yayin da lambarku ta gaske ta kasance a sirri." },
            { objective: "O6", q: "Wani tes ya ce tallafinku zai tsaya yau sai dai idan kun aika code ɗin da aka turo muku yanzu. Mene ne wannan?", options: ["Zamba ce; kada ku taɓa bayar da code ɗin", "Saƙo na yau da kullum daga ofishinku", "Gwajin da dole ku ci", "Tunatarwa don sabunta wayarku"], answer: 0, why: "Gaggauta ku da neman code alamun zamba ne; ofisoshin gaske ba sa neman irin waɗannan code." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da AI da ƙarfin gwiwa",
        questions: [
          { objective: "O4", q: "Amsar farko ta yi tsawo sosai. Mene ne mataki mafi kyau na gaba?", options: ["Ku tambaya: \"Ka gajarta ta\"", "Ku haƙura", "Ku kwafe ta duk da haka", "Ku kashe wayar"], answer: 0, why: "Tambayar biyo baya tana neman mataimakin ya canja amsarsa." },
          { objective: "O5", q: "Wanne a cikin waɗannan ya kamata ku tabbatar da majiyar hukuma KOYAUSHE?", options: ["Barkwanci", "Jerin kayan cefane", "Waƙa", "Lambar wayar ofishin gwamnati"], answer: 3, why: "Lambobin waya, ranaku, kuɗi, doka da tallafi suna iya zama ba daidai ba, kuma dole a tabbatar da su." },
          { objective: "O5", q: "Mene ne ma'anar \"hallucination\" idan ana magana game da AI?", options: ["AI ya gaji", "AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne", "Allon ya karye", "Wani nau'in manhaja"], answer: 1, why: "AI yana iya ƙirƙirar bayanan da suke kama da na gaske." },
          { objective: "O6", q: "Me ya kamata ku rubuta a maimakon lambar Social Security ɗinku a cikin prompt?", options: ["Lambar ta gaske", "Madadi kamar \"[lambata]\"", "Rabin lambar", "Lambar bankinku"], answer: 1, why: "Madadi yana bar ku samun taimako ba tare da bayyana bayanan sirri ba." },
          { objective: "O6", q: "Kun sami kira da muryar wani a iyalinku yana neman katin kyauta nan take. Me za ku yi?", options: ["Ku sayi katin kyautar da sauri", "Ku ba shi code ɗin da ke wayarku", "Ku aika lambar bankinku", "Ku katse wayar ku sake kiransa ta lambar da kuka sani gaskiya ce"], answer: 3, why: "'Yan damfara suna iya kwaikwayon murya. Gaggawa da katin kyauta alamun gargaɗi ne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin mataimakin AI shi ne:", options: ["Shirin kwamfuta da kuke hira da shi", "Ma'aikacin gwamnati", "Kamfanin waya", "Shafin intanet da ke sayar da kaya kawai"], answer: 0, why: "Shiri ne da kuke rubuta masa ko magana da shi." },
      { objective: "O1", q: "Wane aiki ne mataimakin AI yake da kyau a kai?", options: ["Yanke shawarwarin shari'a a madadinku", "Sa hannu a takardu a madadinku", "Bayanin wasiƙa mai wuya da kalmomi masu sauƙi", "Sanin tarihinku na sirri"], answer: 2, why: "Bayani da kalmomi masu sauƙi yana ɗaya daga cikin ƙarfinsa." },
      { objective: "O1", q: "Wane ne mai iko idan kuna amfani da mataimakin AI?", options: ["AI", "Shagon manhajoji", "Ku", "Babu kowa"], answer: 2, why: "Ku ne kuke yanke abin da za ku tambaya da abin da za ku yarda da shi." },
      { objective: "O2", q: "Wanne ne sanannen mataimakin AI kyauta?", options: ["Microsoft Copilot", "Na'urar lissafi (calculator)", "Saƙon tes", "Firinta"], answer: 0, why: "Copilot, ChatGPT da Gemini sanannun mataimaka ne masu kyauta." },
      { objective: "O2", q: "A waya, wuri mai aminci don samun manhajar AI shi ne:", options: ["Hanyar haɗi a cikin tes daga baƙo", "Kowane shafin intanet", "Tallar da ke tasowa (pop-up)", "Shagon manhajoji na hukuma"], answer: 3, why: "Ku saka daga shagon manhajoji na hukuma kaɗai." },
      { objective: "O2", q: "Wane adireshin shafi ne ke buɗe mataimakin AI a kwamfuta?", options: ["myjob.gift", "copilot.microsoft.com", "freemoney.win", "babu ɗaya daga cikinsu"], answer: 1, why: "copilot.microsoft.com shi ne adireshin hukuma na Microsoft don Copilot." },
      { objective: "O2", q: "A ina kuke yawan rubuta tambayarku?", options: ["Wurin adireshi na wayar", "Akwatin saƙo kusa da ƙasan allo", "Alamar batir", "Kyamara"], answer: 1, why: "Akwatin saƙo sau da yawa yana cewa \"Ask anything\" ko \"Message\"." },
      { objective: "O2", q: "Bayan amfani da kwamfutar ɗakin karatu, ya kamata ku:", options: ["Ajiye kalmar sirrinku", "Rubuta kalmar sirrinku a takarda", "Bar asusunku a buɗe", "Fita daga asusu ku rufe burauzar"], answer: 3, why: "Wannan yana kiyaye asusunku daga mutum na gaba." },
      { objective: "O3", q: "Mene ne prompt?", options: ["Abin da kuke rubutawa ko faɗa wa mataimakin AI", "Ƙararrawar tunatarwa", "Wani nau'in cajar waya", "Ƙarshen adireshin shafi"], answer: 0, why: "Prompt ita ce buƙatarku ga AI." },
      { objective: "O3", q: "Prompt mai kyau ya haɗa da:", options: ["Kalma ɗaya kawai", "Lambar Social Security ɗinku", "Abin da kuke buƙata, halin da kuke ciki, da yadda kuke son amsar", "Kalmar sirrinku"], answer: 2, why: "Waɗannan sassa uku suna kawo amsa mai amfani." },
      { objective: "O3", q: "Wane prompt ne zai fi yiwuwa ya kawo amsa mafi amfani?", options: ["\"takardar aiki\"", "\"taimake ni\"", "\"Na yi shekaru 3 ina aiki a kicin. Ka taimake ni in jera ƙwarewata don aikin dafa abinci a gajerun layuka.\"", "\"abubuwa\""], answer: 2, why: "Yana ba da buƙata, halin da ake ciki da tsarin amsa." },
      { objective: "O4", q: "Amsar AI ta farko ba ta yi daidai sosai ba. Kuna iya:", options: ["Yin tambayar biyo baya don canja ta", "Karɓar ta kawai", "Biyan kuɗi don gyara ta", "Sake kunna wayarku"], answer: 0, why: "Tambayoyin biyo baya kamar \"ka yi amfani da kalmomi masu sauƙi\" suna inganta amsar." },
      { objective: "O4", q: "Wace ce tambayar biyo baya mai kyau?", options: ["\"Aika kuɗi.\"", "\"Ga lambar bankina.\"", "\"Goge wayata.\"", "\"Ka ƙara bayanin mataki na 2.\""], answer: 3, why: "Tana neman canji mai sarari ga amsar." },
      { objective: "O4", q: "Idan hira ta kauce hanya, mataki mai kyau shi ne:", options: ["Rubuta kalmar sirrinku", "Fara sabuwar hira da prompt mafi sarari", "Ci gaba da maimaita kalmomi iri ɗaya", "Daina amfani da AI har abada"], answer: 1, why: "Sabuwar hira da prompt mafi sarari yawanci tana aiki fiye da haka." },
      { objective: "O5", q: "Idan AI ya ba da lambar wayar wani ofishi, ya kamata ku:", options: ["Kira ta ba tare da tabbatarwa ba", "Tabbatar da ita a shafin hukuma na ofishin", "Saka ta a intanet", "Ba shi lambar katin shaidarku"], answer: 1, why: "AI yana iya ba da lambobi marasa gaskiya; ku tabbatar da majiyar hukuma." },
      { objective: "O5", q: "Shafukan gwamnatin Amurka na hukuma yawanci suna ƙarewa da:", options: [".xyz", ".win", ".gift", ".gov"], answer: 3, why: "Shafukan gwamnatin Amurka suna amfani da .gov." },
      { objective: "O6", q: "Wanne ne kada ku TAƁA rubutawa mataimakin AI?", options: ["Lambar katin bankinku", "\"Ka gajarta ta\"", "\"Ka ba ni misali\"", "\"Ka yi amfani da kalmomi masu sauƙi\""], answer: 0, why: "Lambobin banki da kati bayanan sirri ne." },
      { objective: "O6", q: "Wani saƙo yana gaggauta ku ku biya da katin kyauta. Wannan:", options: ["Kuɗin biya ne na yau da kullum", "Tayin aiki ne", "Alamar gargaɗin zamba ce", "Dokar gwamnati ce"], answer: 2, why: "Gaggawa da katin kyauta alamun zamba ne da aka saba gani." },
      { objective: "O6", q: "Wani yana neman code ɗin da aka turo wayarku ta tes yanzu. Ya kamata ku:", options: ["Karanta masa shi", "Saka shi a intanet", "Kada ku taɓa bayar da shi", "Tura shi ga abokai ta tes"], answer: 2, why: "Wannan code yana kare asusunku. Ofisoshin gaske ba sa neman sa." },
      { objective: "O6", q: "Idan wani abu bai yi muku daidai ba a kiran waya, mataki mafi aminci shi ne:", options: ["Katse wayar ku sake kira ta lambar da kuka sani gaskiya ce", "Ci gaba da magana", "Ba su adireshinku", "Aika ɗan kuɗi kaɗan"], answer: 0, why: "Sake kira ta lambar da kuka sani yana hana yawancin zamba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Buƙata a sarari", objective: "O3", notYet: "Prompt ɗin ba shi da sarari, misali \"rubuta saƙo\".", meets: "Prompt ɗin yana faɗin abin da ake buƙata, halin da ake ciki da yadda ake son amsar.", exceeds: "Yana kuma ambaton sunan kamfanin da aikin, kuma amsar farko ta kusa shiryawa." },
      { name: "An inganta shi", objective: "O4", notYet: "An yi amfani da amsar farko kamar yadda take.", meets: "An nemi canji ɗaya kuma saƙon ya inganta.", exceeds: "An nemi canje-canje biyu ko fiye, ɗaya bayan ɗaya, kuma za a iya faɗin abin da kowanne ya gyara." },
      { name: "Babu bayanan sirri", objective: "O6", notYet: "Prompt ko saƙon yana da lambar sirri, kalmar sirri, adireshi ko ranar haihuwa.", meets: "Babu bayanan sirri a cikin prompt ko saƙon.", exceeds: "An yi amfani da madadi kamar [lambar wayata], kuma an cike shi ne kawai a saƙon da mai koyo zai aika da kansa." },
      { name: "An tabbatar da bayanai", objective: "O5", notYet: "An kwafo sunan kamfani, adireshi ko lokutan aiki daga AI ba tare da tabbatarwa ba.", meets: "An tabbatar da kowane bayani game da kamfanin a shafinsa ko a jerin hukuma.", exceeds: "Mai koyo zai iya faɗin inda ya tabbatar da shi." },
      { name: "Yana kama da ku", objective: "O1", notYet: "Saƙon yana amfani da kalmomin da mai koyo ba zai faɗa ba ko bai fahimta ba.", meets: "Idan an karanta shi da babbar murya, yana da ladabi, gajere, kuma da kalmomin mai koyo.", exceeds: "Mai koyo ya canja wasu kalmomi da kansa don ya fi kama da shi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka fara wani kwas na Koach Learn cikin kwanaki 30",
      "Masu koyo da suka ce sun yi amfani da AI don neman aiki, saƙo ko wasiƙa cikin kwanaki 30 (binciken biyo baya)",
      "Abokan aiki masu taimakon masu dawowa gida sun ce an rage neman taimako kan ayyukan intanet na farko"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu ko ta shirin",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Takarda da alƙalami don rubutun \"Gwada yanzu\"",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A ɗakin kwamfuta ko cibiyar masu dawowa gida: ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuna yin ayyukan \"Gwada yanzu\" a lokacin.",
      "Kafin masu koyo su tafi, ku duba cewa kowanne ya fita daga asusunsa a kwamfutocin da ake rabawa.",
      "Kada ku taɓa neman masu koyo su rubuta bayanan sirri na gaske a atisaye; ku yi amfani da madadi kamar [lambata].",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku tunatar da masu koyo da ke kan parole ko probation su bi duk wani sharaɗi game da amfani da intanet."
    ]
  }
};
