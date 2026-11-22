"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-in-business.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-in-business-ha",
  lang: "ha",
  translationOf: "ai-in-business",
  category: "Small Business",
  name: "AI a Kasuwanci: Dabaru da Amfani",
  skills: "Gano damar amfani da AI, Haɗa ayyuka da kayan AI, Auna amfani da haɗari, Rubuta takardar shawarar kasuwanci mai shafi ɗaya, Gudanar da ƙaramin gwaji, Auna sakamako",
  outcome: "gano wuri mafi kyau na amfani da AI a kasuwanci ko ƙungiya, auna shi bisa amfani da haɗari, rubuta takardar shawarar kasuwanci mai shafi ɗaya, da gudanar da ƙaramin gwaji na makonni biyu da auna shi.",
  about: [
    "Yanzu AI ya zama wani ɓangare na kasuwanci na yau da kullum: rubutu, hidimar abokan ciniki, tsara jadawali, tallace-tallace, lissafin kuɗi da tsare-tsare. Abu mai wuya ba kayan aikin ba ne. Shi ne zaɓar aikin da ya dace da shi, da tabbatar da cewa yana taimakawa.",
    "Wannan kwas ɗin na masu ƙananan kasuwanci ne, shugabannin ƙungiyoyin sa-kai, manajoji, matasa masu kasuwanci da duk wanda ke son kawo AI wurin aikinsa cikin hikima da aminci. Misalai sun haɗa da shagon gyaran gashi, cibiyar rabon abinci, ƙungiyar masu gyaran lambu da shagon da ɗalibai ke gudanarwa.",
    "Za ku gano inda lokaci ke tafiya a cikin ƙungiya, ku zaɓi damar AI mafi kyau, ku kawo hujjarta, sannan ku gwada ta da ƙaramin gwaji. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Don ƙungiya ta gaske ko ta atisaye, ku rubuta takardar shawarar kasuwanci ta AI mai shafi ɗaya: aikin, kayan AI, lokaci ko kuɗin da ake sa ran za a tanada, haɗurra da yadda za ku sarrafa su, da yadda nasara za ta kasance. Sannan ku gudanar da gwaji na makonni biyu (ko na atisaye na kwana ɗaya), ku rubuta lambobin kafin da bayan, ku rubuta shawara mai jimloli uku: faɗaɗa, canja ko dakatarwa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci, manajoji da ma'aikata, da shugabannin ƙungiyoyin sa-kai da na al'umma da ke son amfani da AI don tanadin lokaci ko yi wa abokan ciniki hidima mafi kyau.",
    startingPoint: "Sun san kasuwancinsu ko ƙungiyarsu sosai, kuma wataƙila sun taɓa gwada mataimakin AI. Kaɗan ne suka taɓa auna inda lokacin ma'aikata ke tafiya, suka auna haɗurran AI, ko suka gwada sabon kayan aiki bisa tsari.",
    gap: "Masu kasuwanci da yawa ko dai suna guje wa AI ko su gwada shi ba tare da tsari ba su haƙura. Masu koyo suna buƙatar hanya mai sauƙi da za a iya maimaitawa don zaɓar aikin da ya dace, auna amfani da haɗari, samun goyon baya da gajeriyar takardar shawara, da tabbatar da sakamako da ƙaramin gwaji, domin AI ya tanadi lokaci na gaske ba tare da jefa bayanan abokan ciniki ko amincewarsu cikin haɗari ba.",
    constraints: [
      "Matakin karatu: kalmomin kasuwanci masu sauƙi; ba a buƙatar ilimin fasaha",
      "Na'urori: waya ko kwamfuta; maƙunsar bayanai (spreadsheet) tana taimakawa wajen binciken lokaci",
      "Lokaci: darussa na minti 5, da gwaji na makonni biyu ko na atisaye na kwana ɗaya",
      "Sirri: babu bayanan sirri na abokan ciniki, ma'aikata ko masu bayar da gudummawa, kalmomin sirri ko lambobin banki a cikin kayan AI",
      "Ba a ba AI shawarwarin doka, lafiya ko haraji ba; mutum ne ke dubawa yana yanke shawara"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan kasuwanci", action: "gane waɗanda kayan AI na yau ke yi da kyau, da waɗanda ke buƙatar mutum ya duba ko ya yanke shawara", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Don ƙungiya ta gaske ko ta atisaye", action: "jera ayyukan da ake maimaitawa a mako na yau da kullum da lissafin awannin da kowanne ke ɗauka", standard: "tare da zagaye ayyuka biyar mafi yawan awanni" },
    { id: "O3", condition: "Idan kuna da manyan zaɓuɓɓukanku na AI", action: "ba kowanne maki bisa amfani, wahala da haɗari, da zaɓar ɗaya da za a fara da shi", standard: "kuna lura da duk wani bayanin sirri da ke ciki" },
    { id: "O4", condition: "Don aikin da kuka zaɓa", action: "rubuta takardar shawarar kasuwanci ta AI mai shafi ɗaya", standard: "mai dukkan sassa shida da lambobi na gaske daga binciken lokacinku" },
    { id: "O5", condition: "Don ƙaramin gwajin AI", action: "tsarawa da gudanar da gwajin tare da lambobin farko (baseline), dokoki masu sarari da rubutun kullum", standard: "kuna rubuta lambobi iri ɗaya kafin da bayan" },
    { id: "O6", condition: "Idan kuna da lambobin farko da na gwaji", action: "kwatanta sakamakon da ba da shawarar faɗaɗa, canja ko dakatarwa", standard: "kuna lissafa lokacin gyaran kurakuran AI, cikin jimloli uku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gano damar AI da ta dace",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da AI ke yi da kyau a kasuwanci a yau",
          minutes: 5,
          goal: "Ambaci irin ayyukan kasuwanci da kayan AI na yau ke yi da kyau da waɗanda ba sa yi da kyau.",
          text: [
            "Yawancin AI na kasuwanci a yau AI mai ƙirƙira ne (generative AI): kayan aiki kamar ChatGPT, Microsoft Copilot da Google Gemini da ke rubutu, taƙaitawa, rarrabawa da amsa da kalmomi masu sauƙi. Wani AI kuma yana cikin manhajojin da wataƙila kuna amfani da su, kamar matatar imel, hasashen tallace-tallace da gargaɗin zamba.",
            "AI yana da ƙarfi wajen daftarin farko (imel, rubutun kafofin sada zumunta, shawarwari), taƙaitawa (taruka, dogayen takardu, ra'ayoyin abokan ciniki), rarrabawa da yi wa abubuwa alama (tambayoyin abokan ciniki, rasit), tunanin sababbin dabaru, da amsa tambayoyin da aka saba yi daga bayananku.",
            "AI yana da rauni wajen ainihin bayanan da ba a ba shi ba, shawarar ƙarshe game da mutane ko kuɗi, duk abin da ke buƙatar lasisi (shawarar doka, lafiya, haraji), da yanayin da kuskure yake da tsada kuma yana da wuyar ganowa. A waɗannan, dole mutum ya duba ko ya yanke shawara."
          ],
          words: [["AI mai ƙirƙira (generative AI)", "AI da ke ƙirƙirar rubutu, hotuna ko wasu abubuwa daga buƙata."], ["Amfani (use case)", "takamaiman aikin da ake amfani da kayan aiki don shi."]],
          slides: [
            { title: "AI yana da ƙarfi wajen", bullets: ["Daftarin farko da taƙaitawa", "Rarrabawa da yi wa abubuwa alama", "Tunanin dabaru da tambayoyin da aka saba yi"] },
            { title: "AI yana da rauni wajen", bullets: ["Ainihin bayanan da ba a ba shi ba", "Shawarar ƙarshe game da mutane ko kuɗi", "Shawara mai buƙatar lasisi: doka, lafiya, haraji"] },
            { title: "Ƙa'ida mai sauƙi", bullets: ["AI yana rubuta daftari; mutane ke yanke shawara", "Idan kuskure ya fi tsada, a fi dubawa"] }
          ],
          tryIt: "Ku jera ayyuka biyar a wani kasuwanci ko ƙungiya da kuka sani. Ku yi wa kowanne alama \"AI yana da ƙarfi\", \"AI tare da dubawa\" ko \"a bar wa mutane\", tare da dalili ɗaya.",
          youCanNow: "gane ayyukan kasuwanci da AI ke yi da kyau da waɗanda ke buƙatar mutum.",
          quickCheck: [
            { objective: "O1", q: "Wane aiki ne AI na yau yake da rauni a kai?", options: ["Taƙaita dogon taro", "Rubuta daftarin saƙo a kafofin sada zumunta", "Ba da shawarar haraji ta ƙarshe ga kasuwancinku", "Rarraba tambayoyin abokan ciniki bisa batu"], answer: 2, why: "Duk abin da ke buƙatar lasisi, kamar shawarar haraji, yana buƙatar mutum ko ƙwararre." },
            { objective: "O1", q: "Shagonku yana samun ra'ayoyi ɗaruruwa a intanet. Ta yaya AI zai fara taimakawa?", options: ["Taƙaita su don gano korafe-korafen da suka fi yawa", "Amsa wa abokan ciniki masu fushi ba tare da wani ya duba ba", "Yanke shawarar ma'aikatan da za a sallama bisa ra'ayoyin", "Goge munanan ra'ayoyin"], answer: 0, why: "Taƙaita ra'ayoyi masu yawa ƙarfin AI ne, kuma mutum ne har yanzu ke yanke shawarar abin da za a yi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gano inda lokaci ke tafiya",
          minutes: 5,
          goal: "Jera ayyukan da ake maimaitawa a ƙungiya da gano mafi kyawun zaɓuɓɓukan AI.",
          text: [
            "Mafi kyawun damar AI suna ɓoye a cikin ayyukan da ake maimaitawa masu cin lokaci. Ku bi mako na yau da kullum, ku jera ayyuka bisa sashe ko matsayi: tallace-tallace, hidimar abokan ciniki, talla, gudanarwa, kuɗi, ayyukan yau da kullum.",
            "Ga kowane aiki, ku ƙiyasta sau nawa yake faruwa da tsawon lokacin da yake ɗauka. Aikin da ake yi sau 20 a mako na minti 10 ya wuce awa uku a mako. A nan ne AI ke kawo riba.",
            "Ku nemi abubuwan da ke maimaituwa: amsa tambayoyi iri ɗaya, rubuta imel masu kama da juna, kwafa bayanai daga wuri zuwa wuri, taƙaita bayanan taro, tsara jadawali. Waɗannan sanannun zaɓuɓɓuka ne na AI ko na sarrafa kai (automation)."
          ],
          steps: ["Ku jera ayyukan da ake yi a mako na yau da kullum, bisa matsayi.", "Ku ƙiyasta sau nawa da tsawon lokaci ga kowanne.", "Ku ninka don samun awanni a mako.", "Ku zagaye ayyuka biyar mafi yawan awanni.", "Ku yi wa waɗanda suka dace da ƙarfin AI alama."],
          words: [["Aikin maimaitawa", "aikin da ake yi hanya ɗaya akai-akai."], ["Binciken lokaci (time audit)", "jerin ayyuka da lokacin da kowanne ke ɗauka."]],
          slides: [
            { title: "Ku nemi aikin da ake maimaitawa", bullets: ["Tambayoyi iri ɗaya, imel masu kama da juna", "Kwafa bayanai daga wuri zuwa wuri", "Taƙaitawa da jadawali"] },
            { title: "Ku yi lissafi", bullets: ["Sau nawa x tsawon lokaci = awanni a mako", "Sau 20 x minti 10 = fiye da awa 3"] },
            { title: "Ku zaɓi zaɓuɓɓuka", bullets: ["Biyar mafi yawan awanni", "Ku haɗa su da ƙarfin AI"] }
          ],
          tryIt: "Ku yi binciken lokaci don matsayi ɗaya a ƙungiya ta gaske ko ta atisaye. Ku jera aƙalla ayyuka takwas tare da awanni a mako, ku zagaye manyan zaɓuɓɓukan AI guda uku.",
          youCanNow: "gano ayyukan da ake maimaitawa a ƙungiya da mafi kyawun zaɓuɓɓukan AI.",
          quickCheck: [
            { objective: "O2", q: "Wani aiki yana faruwa sau 12 a mako kuma yana ɗaukar minti 15 kowane lokaci. Awanni nawa ne a mako?", options: ["Awa 1", "Awa 2", "Awa 12", "Awa 3"], answer: 3, why: "Sau 12 na minti 15 minti 180 ne, wato awa 3." },
            { objective: "O2", q: "Kuna gano inda lokaci ke tafiya a ƙungiyar sa-kai. Wane aiki za ku fara dubawa don AI?", options: ["Zaɓen kwamitin gudanarwa na sau ɗaya a shekara", "Rubuta imel ɗin godiya iri ɗaya ga masu bayar da gudummawa kowane mako", "Zaɓar sabon babban darakta", "Sa hannu a kwangiloli"], answer: 1, why: "Ayyukan rubutu masu maimaituwa da kama da juna su ne inda AI ya fi kawo riba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Auna damammaki bisa amfani da haɗari",
          minutes: 5,
          goal: "Ba dabarun AI maki bisa amfani, wahala da haɗari, da zaɓar ɗaya da za a bi.",
          text: [
            "Ba kowace dabarar AI ce ta cancanci a fara da ita ba. Ku ba kowane zaɓi maki daga 1 zuwa 5 kan abubuwa uku. Amfani: yawan lokaci, kuɗi ko farin cikin abokan ciniki da yake ƙarawa. Wahala: yadda yake da wuyar kafawa da koyo. Haɗari: abin da zai faru idan AI ya yi kuskure, da ko akwai bayanan sirri a ciki.",
            "Ku zaɓi nasara mai sauri (quick win): amfani mai yawa, ƙaramar wahala, ƙaramin haɗari. Rubuta daftarin amsoshin imel ɗin abokan ciniki da aka saba samu, tare da mutum yana dubawa, sanannen misali ne na nasara mai sauri. Amfani da AI don yanke shawarar wanda za a ɗauka aiki ko wanda za a amince masa da taimako yana da babban haɗari, kuma ba aikin farko ba ne.",
            "Ku duba bayanai da sirri tun da wuri. Idan aikin yana amfani da bayanan abokan ciniki, ma'aikata, masu bayar da gudummawa ko na lafiya, ku gano abin da kayan AI ɗinku ke yi da bayanan, da ko ana buƙatar sigar kasuwanci mai ƙarfin kiyaye sirri."
          ],
          steps: ["Ku jera manyan zaɓuɓɓukanku guda uku.", "Ku ba kowanne maki 1-5 bisa amfani, wahala da haɗari.", "Ku fifita amfani mai yawa, ƙaramar wahala, ƙaramin haɗari.", "Ku lura da duk wani bayanin sirri da ke ciki.", "Ku zaɓi ɗaya da za a fara da shi."],
          words: [["Nasara mai sauri (quick win)", "aikin da ke kawo amfani a sarari da sauri, da ƙaramar wahala da haɗari."], ["Haɗari", "yiwuwar wani abu ya lalace da kuma tsadar hakan."]],
          slides: [
            { title: "Maki daga 1 zuwa 5", bullets: ["Amfani: lokaci, kuɗi, farin cikin abokan ciniki", "Wahala: kafawa da koyo", "Haɗari: tsadar kurakurai, bayanan sirri"] },
            { title: "Ku fara da nasara mai sauri", bullets: ["Amfani mai yawa, ƙaramar wahala, ƙaramin haɗari", "Misali: AI yana rubuta daftarin amsoshi, mutum yana dubawa"] },
            { title: "Ba aikin farko ba ne", bullets: ["Shawarwarin ɗaukar aiki ko amincewa", "Duk wani abu mai shawarar lafiya ko kuɗi"] }
          ],
          tryIt: "Ku ba manyan zaɓuɓɓukanku na AI guda uku maki bisa amfani, wahala da haɗari a ƙaramin tebur. Ku zaɓi nasara mai sauri ɗaya ku rubuta jimloli biyu kan dalili.",
          youCanNow: "ba dabarun AI maki bisa amfani, wahala da haɗari, da zaɓar aikin farko mai hikima.",
          quickCheck: [
            { objective: "O3", q: "Idan kuna ba dabarar AI maki, mece ce ma'anar \"wahala\"?", options: ["Yadda yake da wuyar kafawa da koyo", "Yawan kuɗin da yake samarwa", "Yawan abokan cinikin da ke son sa", "Yadda bayanan suke na sirri"], answer: 0, why: "Wahala ita ce yadda dabarar take da wuyar kafawa da koyo." },
            { objective: "O3", q: "Dabaru biyu suna da amfani iri ɗaya. Ɗaya na amfani da bayanan lafiya, ɗayan kuma bayanan kayayyaki na fili. Wanne za ku fara?", options: ["Ta bayanan lafiya, domin ta fi wuya", "Babu ɗaya; AI ba ya taɓa zama lafiya", "Ta bayanan kayayyaki, domin haɗarinta ya fi ƙanƙanta", "Duka biyun a lokaci ɗaya"], answer: 2, why: "Idan amfani daidai yake, ku zaɓi dabarar da haɗarinta ya fi ƙanƙanta, wadda ba ta da bayanan sirri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gano damar AI da ta dace",
        questions: [
          { objective: "O1", q: "Wane aiki ne AI mai ƙirƙira na yau ya fi ƙarfi a kai?", options: ["Yanke shawarar wanda za a ɗauka aiki", "Ba da shawarar haraji", "Rubuta daftarin amsa ga imel ɗin abokin ciniki da aka saba samu", "Sa hannu a kwangiloli"], answer: 2, why: "Daftarin farko babban ƙarfi ne; shawarwari da shawarar masu lasisi suna buƙatar mutane." },
          { objective: "O2", q: "Wani aiki yana faruwa sau 30 a mako kuma yana ɗaukar minti 6. Awanni nawa ne a mako?", options: ["Awa 3", "Awa 30", "Awa 6", "Rabin awa"], answer: 0, why: "30 x minti 6 = minti 180 = awa 3." },
          { objective: "O3", q: "Mece ce nasara mai sauri (quick win)?", options: ["Haɗari mai yawa, wahala mai yawa", "Kowane aiki mai sunan AI a ciki", "Kayan aiki mafi tsada", "Amfani mai yawa, ƙaramar wahala, ƙaramin haɗari"], answer: 3, why: "Nasarori masu sauri suna tabbatar da amfani da sauri da ƙaramin haɗari." },
          { objective: "O3", q: "Me yasa amfani da AI don amincewa ko ƙin masu neman aiki ba aikin farko mai kyau ba ne?", options: ["Ya fi sauƙi sosai", "Yana da babban haɗari: kurakurai suna cutar da mutane kuma suna iya zama rashin adalci", "AI ba ya iya karatu", "Ba ya tanadin lokaci"], answer: 1, why: "Shawarwari game da mutane suna da babban haɗari kuma suna buƙatar kulawar mutum sosai." },
          { objective: "O3", q: "Wani aiki yana amfani da bayanan masu bayar da gudummawa ko abokan ciniki. Me ya kamata ku duba tun da wuri?", options: ["Launukan kayan aikin", "Abin da kayan AI ke yi da waɗannan bayanan", "Babu komai", "Yawan emoji da yake amfani da su"], answer: 1, why: "Dole a duba sirri kafin bayanan sirri su shiga kayan aiki." }
        ]
      }
    },
    {
      name: "Babi na 2: Kawo hujja da tabbatar da ita",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta takardar shawarar kasuwanci ta AI mai shafi ɗaya",
          minutes: 5,
          goal: "Rubuta takardar shawarar kasuwanci mai shafi ɗaya da shugaba, kwamiti ko abokin hulɗa zai iya amincewa da ita.",
          text: [
            "Takardar shawarar kasuwanci (business case) tana bayyana dalilin da yasa aiki ya cancanci a yi shi. Ku sa ta zama shafi ɗaya domin mutane masu aiki da yawa su karanta ta.",
            "Ku haɗa sassa shida: matsalar (a awanni ko dala), maganin AI da ake shawara da kayan aikin, amfanin da ake sa ran samu, kuɗin da za a kashe (biyan kuɗin wata-wata, lokacin horo), haɗurra da yadda za ku sarrafa su, da yadda za ku auna nasara.",
            "Ku yi amfani da lambobi na gaske daga binciken lokacinku. \"Ma'aikata suna kashe awa 4 a mako suna amsa tambayoyi 10 iri ɗaya. Ɗakin amsoshin da AI ya rubuta, ma'aikata suna dubawa, zai iya rage hakan zuwa awa 1.5, a tanadi kusan awa 10 a wata.\" AI zai iya taimaka muku rubuta daftarin shafin; ku ne kuke kawo bayanan gaskiya."
          ],
          steps: ["Matsala: abin da take ci yanzu a lokaci ko kuɗi.", "Mafita: kayan AI da yadda za a yi amfani da shi.", "Amfani: tanadi ko ingancin da ake sa ran samu.", "Kuɗi: kuɗi da lokacin horo.", "Haɗurra da sarrafawa: wane ne ke duba aikin AI.", "Ma'aunin nasara: lambar da za ku bi."],
          words: [["Takardar shawarar kasuwanci (business case)", "gajeriyar takarda da ke bayyana dalilin da yasa aiki ya cancanci a yi shi."], ["Sarrafawa (control)", "matakin da ke rage haɗari, kamar mutum yana duba abin da AI ya rubuta."]],
          slides: [
            { title: "Ku sa ta zama shafi ɗaya", bullets: ["Mutane masu aiki da yawa suna karanta gajerun takardu", "Ku yi amfani da lambobi na gaske"] },
            { title: "Sassa shida", bullets: ["Matsala, mafita, amfani", "Kuɗi, haɗurra da sarrafawa", "Ma'aunin nasara"] },
            { title: "AI yana rubuta daftari, ku kuna kawo gaskiya", bullets: ["Ku liƙa lambobin binciken lokacinku", "Ku duba kowace lamba a cikin daftarin"] }
          ],
          tryIt: "Ku rubuta takardar shawarar kasuwanci mai shafi ɗaya don nasarar mai sauri da kuka zaɓa, mai dukkan sassa shida. Kuna iya neman AI ya gyara kalmomin, amma ku duba kowace lamba.",
          youCanNow: "rubuta gajeriyar takardar shawarar kasuwanci mai tushe a lambobi don aikin AI.",
          quickCheck: [
            { objective: "O4", q: "Wane sashe na takardar shawarar kasuwanci ke faɗin wanda ke duba aikin AI?", options: ["Matsalar", "Haɗurra da sarrafawa", "Amfanin", "Kuɗin"], answer: 1, why: "Haɗurra da sarrafawa suna faɗin abin da zai iya lalacewa da wanda ke duba abin da AI ya rubuta." },
            { objective: "O4", q: "Shugabanku ya tambayi dalilin da yasa aikin AI ya cancanta. Me ke sa hujjarku ta fi ƙarfi?", options: ["Dogon rahoto ba tare da lambobi ba", "Cewa AI ne makoma", "Jerin kowane kayan AI da kuka samu", "Lambobi na gaske daga binciken lokacinku da ke nuna awannin da aka tanada"], answer: 3, why: "Lambobi na gaske daga binciken lokacinku suna nuna amfanin da ake sa ran samu a sarari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gudanar da ƙaramin gwaji",
          minutes: 5,
          goal: "Tsara da gudanar da gwajin AI na makonni biyu tare da dokoki masu sarari da ma'aunin kafin da bayan.",
          text: [
            "Gwaji (pilot) ƙaramin gwaji ne mai ƙayyadadden lokaci. Yana ba ku damar koyo da ƙaramin kuɗi kafin ku kashe fiye da haka. Makonni biyu tare da mutum ɗaya ko biyu sau da yawa sun isa.",
            "Ku auna kafin ku fara. Ku rubuta lambobin yanzu na 'yan kwanaki: lokacin da aka kashe, yawan ayyuka, kurakurai ko korafe-korafen abokan ciniki. Sannan ku gudanar da gwajin ku rubuta lambobi iri ɗaya.",
            "Ku kafa dokoki masu sarari: waɗanne ayyuka ke amfani da AI, wane ne ke duba abin da ya rubuta, waɗanne bayanai ne kada su taɓa shiga kayan aikin (bayanan sirri na abokan ciniki, ma'aikata ko masu bayar da gudummawa, kalmomin sirri, lambobin banki), da abin da za a yi idan AI ya yi kuskure."
          ],
          steps: ["Ku zaɓi mutum ɗaya ko biyu da lokacin makonni biyu.", "Ku rubuta lambobin farko (baseline) na 'yan kwanaki.", "Ku rubuta dokoki masu sauƙi: ayyuka, wane ne ke dubawa, abin da kada ya taɓa shiga.", "Ku gudanar da gwajin ku riƙa ɗan rubutu kowace rana.", "Ku rubuta lambobi iri ɗaya a ƙarshe."],
          words: [["Gwaji (pilot)", "ƙaramin gwaji mai ƙayyadadden lokaci na sabuwar dabara."], ["Lambobin farko (baseline)", "lambobin kafin canji, da ake amfani da su don kwatantawa daga baya."]],
          slides: [
            { title: "Ƙarami kuma mai ƙayyadadden lokaci", bullets: ["Makonni biyu, mutum ɗaya ko biyu", "Ku koya da ƙaramin kuɗi kafin ku kashe fiye"] },
            { title: "Ku auna kafin da bayan", bullets: ["Lokacin da aka kashe, ayyukan da aka yi", "Kurakurai ko korafe-korafe"] },
            { title: "Dokokin gwaji", bullets: ["Waɗanne ayyuka ke amfani da AI da wane ne ke dubawa", "Babu bayanan sirri a cikin kayan aikin", "Abin da za a yi idan AI ya yi kuskure"] }
          ],
          tryIt: "Ku rubuta tsarin gwaji don nasarar ku mai sauri: mutane, ranaku, lambobin farko, dokoki da tsarin rubutun kullum. Idan za ku iya, ku gudanar da gwajin atisaye na kwana ɗaya ku rubuta lambobin.",
          youCanNow: "tsarawa da gudanar da ƙaramin gwajin AI tare da dokoki da lambobin kafin da bayan.",
          quickCheck: [
            { objective: "O5", q: "Tsawon wane lokaci ne ƙaramin gwajin AI na yau da kullum a wannan kwas ɗin?", options: ["Shekara ɗaya", "Watanni shida", "Makonni biyu", "Awa ɗaya"], answer: 2, why: "Makonni biyu tare da mutum ɗaya ko biyu sau da yawa sun isa don koyo da ƙaramin kuɗi." },
            { objective: "O5", q: "Za ku fara gwaji gobe. Me ya zama dole ku fara yi?", options: ["Rubuta lambobin farko na 'yan kwanaki", "Sayen tsari mafi tsada", "Ba kayan aikin bayanan kowane abokin ciniki", "Gaya wa ma'aikata su daina duba abin da AI ya rubuta"], answer: 0, why: "Lambobin farko suna ba ku damar kwatanta kafin da bayan." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Auna sakamako da yanke shawarar abin da ke gaba",
          minutes: 5,
          goal: "Kwatanta sakamakon gwaji da lambobin farko, da ba da shawarar faɗaɗa, canja ko dakatarwa.",
          text: [
            "A ƙarshen gwajin, ku kwatanta. Lokaci ya ragu? Inganci ya tsaya ko ya ƙaru? Abokan ciniki ko ma'aikata sun lura? Lambobi suna da muhimmanci, amma ku kuma tambayi mutanen da suka yi amfani da shi abin da ya taimaka da abin da ya kawo cikas.",
            "Ku lura da kuɗaɗen ɓoye: lokacin gyaran kurakuran AI, ruɗanin ma'aikata, ko abokan cinikin da ba su son canjin. Kayan aikin da ke tanadin awa 3 amma yana jawo awa 2 na gyara yana tanadin awa 1 kawai.",
            "Ku ba da shawara a sarari. Ku faɗaɗa idan ya yi aiki. Ku canja idan ya yi aiki rabi-rabi. Ku dakatar idan bai yi aiki ba, ku faɗi abin da kuka koya. Dakatar da gwaji ba faɗuwa ba ne; ya cece ku daga babban kuskure."
          ],
          steps: ["Ku sa lambobin farko da na gwaji gefe da gefe.", "Ku cire lokacin da aka kashe wajen gyaran kurakuran AI.", "Ku yi wa mutanen da suka yi amfani da shi tambayoyi biyu: me ya taimaka, me ya kawo cikas.", "Ku ba da shawarar faɗaɗa, canja ko dakatarwa, cikin jimloli uku."],
          words: [["Kuɗin ɓoye", "kuɗi ko asarar da ke da sauƙin mantawa, kamar lokacin gyaran kurakurai."], ["Shawara", "ra'ayinku kan abin da za a yi a gaba, tare da dalilai."]],
          slides: [
            { title: "Ku kwatanta da gaskiya", bullets: ["Lokaci, inganci, yadda abokan ciniki suka ji", "Ku tambayi mutanen da suka yi amfani da shi"] },
            { title: "Ku lissafa kuɗaɗen ɓoye", bullets: ["Lokacin gyaran kurakuran AI", "Ruɗani ko abokan ciniki marasa jin daɗi"] },
            { title: "Ku yanke shawara", bullets: ["Faɗaɗa, canja ko dakatarwa", "Dakatar da gwaji darasi ne, ba faɗuwa ba"] }
          ],
          tryIt: "Aikin ƙarshe: ku sa lambobinku na kafin da bayan a tebur (na gaske ko daga ranar atisayenku), ku cire kuɗaɗen ɓoye, ku rubuta shawara mai jimloli uku da za ta tafi tare da takardar shawarar kasuwancinku mai shafi ɗaya.",
          youCanNow: "gano, kawo hujja, gwadawa da tantance aikin AI a kasuwanci ko ƙungiya.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku tambayi mutanen da suka yi amfani da kayan AI abin da ya kawo cikas?", options: ["Don ɗora musu laifi", "Domin lambobi ba sa taɓa amfani", "Don tsawaita gwajin", "Don gano matsalolin da lambobi ba za su nuna ba"], answer: 3, why: "Masu amfani za su iya faɗin kuɗaɗen ɓoye da matsalolin da lambobi ba sa nunawa." },
            { objective: "O6", q: "Gwajin ya tanadi lokaci amma abokan ciniki sun yi korafi game da sababbin amsoshin. Wace shawara za ku bayar?", options: ["A faɗaɗa shi ga kowa nan take", "A canja shi, kamar ƙara matakin dubawa na ma'aikata, a sake gwadawa", "A ɓoye korafe-korafen", "A daina aunawa"], answer: 1, why: "Idan ya yi aiki rabi-rabi, ku canja shi ku sake gwadawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kawo hujja da tabbatar da ita",
        questions: [
          { objective: "O4", q: "Wanne ne ya dace a cikin takardar shawarar kasuwanci ta AI?", options: ["Kalmomin sirrin ma'aikata", "Jerin kowane kayan AI da aka taɓa yi", "Lambobin wayar abokan ciniki", "Haɗurra da wanda ke duba aikin AI"], answer: 3, why: "Haɗurra da sarrafawa suna ɗaya daga cikin sassa shida." },
          { objective: "O5", q: "Mene ne lambobin farko (baseline)?", options: ["Lambobin kafin canji, da ake amfani da su don kwatantawa", "Kalmar wasanni ce kawai", "Farashin AI", "Rahoton ƙarshe"], answer: 0, why: "Kuna kwatanta sakamakon gwaji da lambobin farko." },
          { objective: "O5", q: "Wace ce doka mai kyau ta gwaji?", options: ["Bar AI ya aika komai ba tare da dubawa ba", "Tsallake aunawa", "Kada a taɓa saka bayanan sirri na abokan ciniki a cikin kayan AI", "Gudanar da shi na shekaru uku tukuna"], answer: 2, why: "Hana bayanan sirri shiga babbar doka ce." },
          { objective: "O6", q: "AI ya tanadi awa 3 amma ma'aikata sun kashe awa 2 suna gyaran kurakuransa. Mene ne ainihin tanadin?", options: ["Awa 5", "Awa 3", "Babu ɗaya da ake ƙirgawa", "Awa 1"], answer: 3, why: "Ana cire kuɗaɗen ɓoye daga tanadin." },
          { objective: "O6", q: "Gwajin bai tanadi lokaci ba. Wace shawara ya kamata ku bayar?", options: ["A faɗaɗa shi ga dukkan kamfanin", "A ɓoye sakamakon", "A dakatar ko a canja shi, a rubuta abin da aka koya", "A sayi tsari mafi tsada ba tare da gwaji ba"], answer: 2, why: "Sakamako na gaskiya ke jagorantar mataki na gaba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI a Kasuwanci: Dabaru da Amfani",
    questions: [
      { objective: "O1", q: "AI mai ƙirƙira (generative AI) shi ne AI da:", options: ["Ke yin lissafi kawai", "Ke ƙirƙirar rubutu, hotuna ko wasu abubuwa daga buƙata", "Ke maye gurbin dukkan ma'aikata", "Ke aiki ba tare da intanet kawai ba"], answer: 1, why: "Yana ƙirƙirar abubuwa daga buƙata." },
      { objective: "O1", q: "Wanne ne kyakkyawan amfani da AI a ƙaramin kasuwanci?", options: ["Taƙaita ra'ayoyin abokan ciniki don gano korafe-korafen da suka fi yawa", "Yanke albashin ma'aikata shi kaɗai", "Ba abokan hulɗa shawarar doka", "Sa hannu a cak"], answer: 0, why: "Taƙaitawa babban ƙarfin AI ne." },
      { objective: "O1", q: "Wane ne ya kamata ya yanke shawarar ƙarshe game da mutane ko kuɗi?", options: ["AI", "Babu kowa", "Mutum", "Kamfanin da ya sayar da manhajar"], answer: 2, why: "AI yana rubuta daftari; mutane ke yanke shawara." },
      { objective: "O2", q: "Binciken lokaci yana jera:", options: ["Ayyuka da lokacin da kowanne ke ɗauka", "Ranakun haihuwar ma'aikata", "Farashin manhajoji kawai", "Mabiya a kafofin sada zumunta"], answer: 0, why: "Yana nuna inda lokaci ke tafiya." },
      { objective: "O2", q: "Wane aiki ne sanannen zaɓi na AI?", options: ["Binciken gini na sau ɗaya", "Gaisawa da sabon abokin hulɗa", "Sa hannu a kwangilar haya", "Rubuta imel masu kama da juna akai-akai"], answer: 3, why: "Ayyukan rubutu masu maimaituwa sun dace da AI." },
      { objective: "O2", q: "Ayyuka 15 a mako na minti 20 kowanne daidai yake da:", options: ["Awa 5", "Awa 15", "Awa 20", "Minti 35"], answer: 0, why: "15 x 20 = minti 300 = awa 5." },
      { objective: "O3", q: "Idan ana ba dabarar AI maki, \"haɗari\" yana nufin:", options: ["Farashin kayan aikin", "Yiwuwar wani abu ya lalace da tsadar hakan", "Yadda yake da daɗi", "Yawan mutanen da ke son sa"], answer: 1, why: "Haɗari yana game da kurakurai da tsadarsu." },
      { objective: "O3", q: "Wane ne mafi kyawun aikin AI na farko?", options: ["AI yana yanke shawarar wanda zai sami hidima", "AI yana zaɓar ma'aikatan da za a sallama", "AI yana ba da shawarar lafiya", "AI yana rubuta daftarin amsoshin imel da aka saba samu, mutum yana dubawa"], answer: 3, why: "Yana da amfani mai yawa, ƙaramar wahala da ƙaramin haɗari." },
      { objective: "O3", q: "Me yasa za a duba abin da kayan AI ke yi da bayanai?", options: ["Dole a kiyaye bayanan sirri na abokan ciniki ko masu bayar da gudummawa", "Yana canja salon rubutu", "Ba shi da muhimmanci", "Don manyan kamfanoni kawai"], answer: 0, why: "Sirri yana da muhimmanci ga kowace ƙungiya." },
      { objective: "O4", q: "Takardar shawarar kasuwanci ya kamata ta kasance:", options: ["Mai shafuka hamsin", "An rubuta ta ba tare da lambobi ba", "Gajeriya, kusan shafi ɗaya, da lambobi na gaske", "Sirri ga masu yanke shawara"], answer: 2, why: "Mutane masu aiki da yawa suna karanta gajerun takardu masu sarari." },
      { objective: "O4", q: "Wanne ne \"sarrafawa\" (control)?", options: ["Sayen ƙarin kayan AI", "Kashe kwamfuta", "Watsi da kurakurai", "Mutum yana duba abin da AI ya rubuta kafin a aika"], answer: 3, why: "Sarrafawa suna rage haɗari." },
      { objective: "O4", q: "AI ya rubuta daftarin takardar shawarar kasuwancinku. Aikinku shi ne:", options: ["Aika ta ba tare da karantawa ba", "Cire dukkan lambobi", "Duba kowace lamba da kowane bayani", "Ƙara tanadin ƙarya"], answer: 2, why: "Ku ne kuke kawo bayanan gaskiya kuke duba su." },
      { objective: "O5", q: "Gwaji (pilot) shi ne:", options: ["Fara amfani a dukkan kamfani", "Ƙaramin gwaji mai ƙayyadadden lokaci", "Wani nau'in tsarin AI", "Kwangila ta dindindin"], answer: 1, why: "Gwaje-gwaje suna ba ku damar koyo da ƙaramin kuɗi." },
      { objective: "O5", q: "Yaushe ya kamata ku rubuta lambobin farko?", options: ["Kafin gwajin ya fara", "Bayan ya ƙare kawai", "Ba a taɓa ba", "Bayan shekara ɗaya"], answer: 0, why: "Kuna buƙatar lambobin kafin don kwatantawa." },
      { objective: "O5", q: "Wanne ne kada ya TAƁA shiga kayan AI a lokacin gwaji?", options: ["Tambayar misali", "Daftarin imel na gama-gari", "Lambobin banki da kalmomin sirrin abokan ciniki", "Lokutan aikin kasuwancinku"], answer: 2, why: "Bayanan sirri da na kuɗi ba sa shiga." },
      { objective: "O5", q: "Rubutun kullum a lokacin gwaji yana taimaka muku:", options: ["Tuna abin da ya yi aiki da abin da ya lalace", "Ɓoye matsaloli", "Guje wa aunawa", "Tsallake bita"], answer: 0, why: "Bayanan da aka rubuta suna sa bitar ƙarshe ta yi daidai." },
      { objective: "O6", q: "Wanne ne kuɗin ɓoye?", options: ["Farashin kayan aikin da aka rubuta", "Ranar fara gwajin", "Yawan masu amfani", "Lokacin gyaran kurakuran AI"], answer: 3, why: "Gyaran kurakurai yana da sauƙin mantawa." },
      { objective: "O6", q: "Ban da lambobi, me ya kamata ku tattara a ƙarshen gwaji?", options: ["Kalmomin sirrinsu", "Abin da masu amfani suka ce ya taimaka ko ya kawo cikas", "Adireshin gidajensu", "Babu komai"], answer: 1, why: "Ra'ayoyin masu amfani suna bayyana lambobin." },
      { objective: "O6", q: "Wani gwaji ya yi aiki rabi-rabi. Shawara mai hikima ita ce:", options: ["A faɗaɗa shi ko'ina a lokaci ɗaya", "A canja shi a sake gwadawa", "A ɓoye shi", "A daina gwada AI har abada"], answer: 1, why: "Nasara rabi-rabi tana nufin a gyara a sake gwadawa." },
      { objective: "O6", q: "Dakatar da gwajin da bai yi aiki ba:", options: ["Faɗuwa ne koyaushe", "Ya saɓa wa doka", "Ba zai yiwu ba", "Darasi ne mai amfani da ya hana babban kuskure"], answer: 3, why: "Gwaje-gwaje suna nan don gano abubuwa da ƙaramin kuɗi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      2,
      4,
      5,
      7,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Aiki da kayan aiki",
        objective: "O3",
        notYet: "Aikin yana da babban haɗari, kamar shawarwarin ɗaukar aiki, ko ba a ambaci kayan aiki ba.",
        meets: "Aiki mai maimaituwa mai ƙaramin haɗari da kayan AI da aka ambata, tare da lura da duk wani bayanin sirri.",
        exceeds: "Yana nuna makin amfani, wahala da haɗari da suka kai ga wannan zaɓi."
      },
      {
        name: "Takardar shawarar kasuwanci",
        objective: "O4",
        notYet: "Akwai sassan da suka ɓace, ko babu lambobi.",
        meets: "Shafi ɗaya mai matsala, mafita, amfani, kuɗi, haɗurra da sarrafawa, da ma'aunin nasara.",
        exceeds: "Kowace lamba ta fito daga binciken lokaci kuma tana da sauƙin dubawa."
      },
      {
        name: "Ƙiyasin tanadin lokaci",
        objective: "O2",
        notYet: "Tanadin hasashe ne ba tare da binciken lokaci ba.",
        meets: "Tanadin ya dogara da sau nawa aikin ke faruwa da tsawon lokacin da yake ɗauka.",
        exceeds: "Yana kuma ƙiyasta lokacin da ake buƙata don duba aikin AI."
      },
      {
        name: "Gwaji da lambobin farko",
        objective: "O5",
        notYet: "Babu lambobin farko, ko gwajin ba shi da dokoki.",
        meets: "An rubuta lambobin farko da na ƙarshe, tare da dokoki kan ayyuka, wanda ke dubawa da abin da kada ya taɓa shiga.",
        exceeds: "Rubutun kullum yana nuna abin da ya yi aiki da abin da ya lalace."
      },
      {
        name: "Shawara",
        objective: "O6",
        notYet: "Babu shawara a sarari, ko ta yi watsi da lambobin.",
        meets: "Jimloli uku da ke ba da shawarar faɗaɗa, canja ko dakatarwa, bisa lambobin kafin da bayan.",
        exceeds: "Ta cire lokacin gyaran kurakuran AI kuma ta haɗa da abin da masu amfani suka faɗa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka gudanar da gwaji cikin kwanaki 30 (binciken biyo baya)",
      "Awannin da aka tanada a mako kan aikin da aka gwada, kamar yadda ƙungiyar ta bayar da rahoto",
      "Ƙungiyoyin da suka faɗaɗa, suka canja ko suka dakatar da gwajinsu bisa sakamakon da aka auna"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini), ko kayan aikin da ƙungiyar ta riga take amfani da shi",
      "Maƙunsar bayanai (Google Sheets ko Excel) don binciken lokaci da lambobin gwaji",
      "Kusan minti 60 don darussa da gwaje-gwaje, da gwaji na makonni biyu ko na atisaye na kwana ɗaya"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku gina misalin binciken lokaci a allon da kowa ke gani.",
      "Ku sa masu koyo su kawo jerin ayyukan mako na gaske daga ƙungiyarsu.",
      "Kafin kowane gwaji, ku sake duba dokokin don kada bayanan sirri na abokan ciniki, ma'aikata ko masu bayar da gudummawa su shiga kayan AI.",
      "Ku gayyaci masu koyo su gabatar da takardar shawarar kasuwancinsu mai shafi ɗaya ga ƙungiya don jin ra'ayoyi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
