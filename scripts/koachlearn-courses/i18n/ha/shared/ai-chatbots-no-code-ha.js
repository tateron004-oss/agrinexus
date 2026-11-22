"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-chatbots-no-code.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-chatbots-no-code-ha",
  lang: "ha",
  translationOf: "ai-chatbots-no-code",
  category: "Small Business",
  name: "Gina Chatbot na AI (Ba Sai Kun Iya Rubuta Code Ba)",
  skills: "Zaɓar aikin chatbot, Rubuta umarnin chatbot, Gina fayil na bayanai, Saka ƙa'idojin tsaro, Gwaji da tambayoyi na gaske, Ƙaddamarwa da ingantawa",
  outcome: "gina chatbot na AI ba tare da code ba wanda ke amsa tambayoyin da aka saba yi wa kamfani, ƙungiyar sa-kai ko kulob daga bayananku, da umarni a sarari da ƙa'idojin tsaro, kuma an gwada shi da tambayoyi na gaske kafin kowa ya yi amfani da shi.",
  about: [
    "Chatbot yana amsa tambayoyi a cikin akwatin hira, a kowane lokaci na rana. Da kayan AI na yau, za ku iya gina shi ba tare da rubuta code ba: kuna ba shi umarni da bayananku, shi kuma yana amsawa da kalmomi masu sauƙi.",
    "Wannan kwas ɗin na masu ƙananan kamfanoni ne, ma'aikata da masu sa-kai a ƙungiyoyin sa-kai, da matasa masu son wani aiki na gaske. Misalai: gidan burodi da ke amsa \"Kuna buɗe ranar Lahadi?\", rumbun abinci na taimako da ke bayanin abin da za a kawo, da kulob na makaranta da ke amsa tambayoyi game da gwajin shiga.",
    "Za ku tsara aikin chatbot ɗin, ku rubuta umarninsa, ku ba shi fayil na bayanai, ku saka ƙa'idojin tsaro, ku gwada shi, sannan ku ƙaddamar da shi. Kowane darasi yana ɗaukar kusan minti biyar, da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku gina chatbot mai aiki ba tare da code ba don wata ƙungiya ta gaske ko ta gwaji: aiki a jimla ɗaya, rubutaccen umarni mai salon magana da ƙa'idojin tsaro, fayil na bayanai mai shafi ɗaya, da rajistar gwaji ta aƙalla tambayoyi goma na gaske tare da gyaran da kuka yi. Ku raba shi da mutum ɗaya, ku rubuta ra'ayinsa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kamfanoni, ma'aikatansu, da masu gudanar da ƙungiyoyin sa-kai, coci-coci, masallatai ko kulob, waɗanda suke amsa tambayoyi iri ɗaya akai-akai ta waya, tes, imel da kafofin sada zumunta.",
    startingPoint: "Suna iya amfani da waya ko kwamfuta, imel da kafofin sada zumunta, kuma wataƙila sun taɓa gwada mataimakin AI. Ba su da ƙwarewar rubuta code, kuma yawancinsu ba su taɓa kafa chatbot ba.",
    gap: "Amsa tambayoyin da ake maimaitawa yana ɗaukar sa'o'i a kowane mako, kuma abokan ciniki suna son amsa a kowane lokaci. Masu koyo suna buƙatar gina chatbot mai ƙunƙuntaccen aiki kuma mai gaskiya daga bayanansu, da ƙa'idojin tsaro da gwaji, don ya rage musu lokaci ba tare da ya ba da amsoshi marasa daidai ko masu haɗari da ke ɓata amana ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; babu rubuta code",
      "Na'urori: kwamfuta ce ta fi sauƙi; wasu kayan gini suna aiki a waya",
      "Kuɗi da abubuwan da ake samu: abubuwan kayan gina chatbot da tsare-tsarensu suna canjawa; masu koyo suna duba shafin taimako na kayan",
      "Sirri: babu sunayen abokan ciniki, lambobin waya, bayanan masu ba da gudummawa, kalmomin sirri ko bayanan banki a kowane fayil",
      "Lokaci: darussa na minti 5, kusan minti 60 gaba ɗaya, da ƙarin lokacin gwaji"
    ],
    prerequisites: "Babu. Masu koyo da suke sababbi ga mataimakan AI za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da tambayoyin da ƙungiyarku take samu yanzu", action: "rubuta aikin chatbot a jimla ɗaya da jera tambayoyi goma da dole ya amsa", standard: "ba tare da tambayoyi masu haɗari na lafiya, doka ko kuɗi a cikin jerin ba" },
    { id: "O2", condition: "Ta amfani da kayan gina chatbot ba tare da code ba", action: "rubuta umarnin da ke faɗin matsayin chatbot ɗin, masu sauraronsa, aikinsa, salon maganarsa da iyakokinsa", standard: "da dukkan sassa biyar da layi na abin da zai yi idan bai sani ba" },
    { id: "O3", condition: "Idan kuna da bayanan ƙungiyarku", action: "ƙirƙirar fayil na bayanai mai shafi ɗaya da kwanan wata, a tsarin tambaya da amsa, da saka shi a cikin chatbot ɗin", standard: "ba tare da bayanan sirri a ciki ba" },
    { id: "O4", condition: "Don chatbot da jama'a za su yi amfani da shi", action: "rubuta ƙa'idojin tsaro da ke sa ya tsaya kan batunsa, ya yi gaskiya kuma ya kasance lafiya", standard: "har da rashin neman lambobin sirri, rashin ba da shawarar ƙwararru, faɗin cewa shi AI ne da tura gaggawa zuwa 911" },
    { id: "O5", condition: "Kafin kowa ya yi amfani da chatbot ɗin", action: "gwada shi da aƙalla tambayoyi goma na gaske da masu wuya, rubuta sakamako a rajista da gyara kurakurai", standard: "kuna sake gwada kowace tambayar da ta kasa har sai ta yi nasara" },
    { id: "O6", condition: "Idan chatbot ɗin ya shirya", action: "raba shi da wasu mutane kaɗan, tattara ra'ayoyinsu da kafa tsarin sabuntawa", standard: "kuma koyaushe akwai mutum da za a iya samu don abin da chatbot ɗin ba zai iya ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsarawa da gina chatbot",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da chatbot na AI zai iya yi, da zaɓar aikinsa ɗaya",
          minutes: 4,
          goal: "Rubuta aikin chatbot a jimla ɗaya da jera tambayoyin da dole ya amsa.",
          text: [
            "Chatbot na AI mataimakin AI ne da aka shirya don manufa ɗaya. Maimakon ya amsa komai, yana amsa tambayoyi game da ƙungiyarku ne, ta amfani da bayanan da kuka ba shi.",
            "Ayyuka masu kyau na farko ƙunƙuntattu ne kuma ana maimaita su: lokutan aiki da wuri, farashi, yadda ake rajista, abin da za a kawo, ƙa'idar mayar da kaya, lokutan aikin sa-kai. Ayyuka marasa kyau na farko masu haɗari ne: shawarar lafiya, doka ko kuɗi, ko duk abin da ke buƙatar hukuncin mutum.",
            "Ku fara da tambayoyin da mutane suke yi muku yanzu. Ku duba imel ɗinku, saƙonni, kiran waya da sharhin kafofin sada zumunta. Tambayoyi goma da aka fi yi su ne za su zama aikin chatbot ɗin."
          ],
          steps: ["Ku rubuta tambayoyi goma da mutane suka fi yi muku.", "Ku goge duk wadda ke buƙatar hukuncin mutum ko take da haɗari.", "Ku rubuta aikin chatbot ɗin a jimla ɗaya: \"Wannan chatbot yana amsa tambayoyi game da [batu] don [su wane].\""],
          words: [["Chatbot", "shirin da ke amsa tambayoyi a cikin akwatin hira."], ["Use case (amfani)", "takamaiman aikin da ake amfani da wani kayan aiki don shi."]],
          slides: [
            { title: "Chatbot mataimaki ne mai manufa ɗaya", bullets: ["An shirya shi don manufa ɗaya", "Yana amsawa daga bayananku"] },
            { title: "Ayyuka masu kyau na farko", bullets: ["Lokutan aiki, wuri, farashi", "Yadda ake rajista ko abin da za a kawo", "Lokutan aikin sa-kai, ƙa'idar mayar da kaya"] },
            { title: "Ku bar wa mutane", bullets: ["Shawarar lafiya, doka ko kuɗi", "Ƙorafi da abubuwan da ke buƙatar hukunci"] },
            { title: "Ku fara da tambayoyi na gaske", bullets: ["Imel, kira, saƙonni, sharhi", "Tambayoyi goma da aka fi yi = aikin"] }
          ],
          tryIt: "Ku zaɓi kamfani, ƙungiyar sa-kai ko kulob (naku ko na gwaji). Ku rubuta tambayoyi goma da aka fi yi musu da aikin chatbot ɗinsu a jimla ɗaya.",
          youCanNow: "zaɓar aiki mai aminci kuma ƙunƙuntacce don chatbot da jera tambayoyin da dole ya amsa.",
          quickCheck: [
            { objective: "O1", q: "Me ke sa aiki ya zama mai kyau na farko ga chatbot na kamfani?", options: ["Ba da shawarar shari'a", "Yanke hukuncin mayar da kuɗi ga kowane mutum daban", "Amsa ƙunƙuntattun tambayoyi da ake maimaitawa kamar lokutan aiki da rajista", "Amsa kowace tambaya a duniya"], answer: 2, why: "Ƙunƙuntattun tambayoyi da ake maimaitawa ba su da haɗari kuma su suka fi rage lokaci." },
            { objective: "O1", q: "Shagon askinku yana samun tambayoyi da yawa. Wace za ku goge daga jerin chatbot ɗin?", options: ["\"Wannan ƙurajen da ke kaina suna da haɗari?\"", "\"Ƙarfe nawa kuke buɗewa ranar Asabar?\"", "\"Yaya zan yi alƙawari?\"", "\"A ina ake ajiye mota?\""], answer: 0, why: "Tambayoyin lafiya suna buƙatar hukuncin ƙwararre, don haka ba aikin chatbot ba ne." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta umarnin chatbot",
          minutes: 5,
          goal: "Rubuta umarni a sarari da ke faɗin matsayin chatbot ɗin, salon maganarsa da iyakokinsa.",
          text: [
            "Kayan gina chatbot ba tare da code ba suna bar ku ku rubuta umarnin da AI zai bi a kowace hira. Misalai sun haɗa da custom GPTs a ChatGPT, Gems a Google Gemini da agents a Microsoft Copilot Studio. Sunayen abubuwan, menu da tsare-tsaren da ke da su suna canjawa sau da yawa, don haka ku duba shafin taimako na kayan don matakan yanzu.",
            "Umarni masu kyau suna da abubuwa biyar: wane ne chatbot ɗin (\"Kai ne mataimakin taimako na Sunrise Food Pantry\"), da wa yake magana, me yake amsawa, yaya yake magana (cikin fara'a, a taƙaice, da kalmomi masu sauƙi), da abin da kada ya yi.",
            "Ku rubuta umarni da gajerun jimloli kai tsaye. Ku faɗa masa abin da zai yi idan bai sani ba: \"Idan amsar ba ta cikin fayil na bayanai, ka ce ba ka da tabbas kuma ka ba da lambar waya.\""
          ],
          steps: ["Matsayi: \"Kai ne mataimakin taimako na [ƙungiya].\"", "Masu sauraro: su wane ne za su yi tambayoyi.", "Aiki: waɗanne batutuwa yake amsawa.", "Salon magana: cikin fara'a, a taƙaice, kalmomi masu sauƙi.", "Iyakoki: abin da kada ya yi, da abin da zai faɗa idan bai sani ba."],
          words: [["Umarni (instructions)", "jagororin da chatbot yake bi a kowace hira; wani lokaci ana kiran su system prompt."], ["Salon magana (tone)", "yadda rubutun yake sauti: na girmamawa, na fara'a, gajere."]],
          slides: [
            { title: "Kayan gina chatbot ba tare da code ba", bullets: ["Custom GPTs, Gemini Gems, agents na Copilot Studio", "Sunaye da tsare-tsare suna canjawa: ku duba shafin taimako"] },
            { title: "Sassa biyar na umarni", bullets: ["Matsayi da masu sauraro", "Abin da yake amsawa", "Salon magana", "Abin da kada ya yi"] },
            { title: "Idan bai sani ba", bullets: ["Ya ce \"Ban da tabbas\"", "Ya ba da lambar waya ko imel na wani mutum"] }
          ],
          sources: [{ name: "Google Gemini Help: Gems", url: "https://support.google.com/gemini/answer/15146780" }],
          tryIt: "Ku rubuta umarni don chatbot ɗinku masu dukkan sassa biyar, a jimloli takwas ko ƙasa da haka.",
          youCanNow: "rubuta umarnin chatbot da ke faɗin matsayinsa, masu sauraronsa, aikinsa, salon maganarsa da iyakokinsa.",
          quickCheck: [
            { objective: "O2", q: "Wane sashe na umarni ne \"cikin fara'a, a taƙaice, kalmomi masu sauƙi\"?", options: ["Matsayi", "Masu sauraro", "Iyakoki", "Salon magana"], answer: 3, why: "Salon magana yana bayanin yadda chatbot ɗin yake sauti." },
            { objective: "O2", q: "Umarninku ba su faɗi abin da chatbot zai yi idan bai sani ba. Me za ku ƙara?", options: ["\"Koyaushe ka ba da amsa, ko da hasashe ne.\"", "\"Idan amsar ba ta cikin fayil na bayanai, ka ce ba ka da tabbas kuma ka ba da lambar waya.\"", "\"Ka canja batun.\"", "\"Ka nemi kalmar sirrin mai tambaya.\""], answer: 1, why: "Faɗa masa ya amince cewa bai da tabbas kuma ya nuna wani mutum yana hana amsoshin ƙarya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ba chatbot bayananku: fayil na bayanai",
          minutes: 5,
          goal: "Gina fayil na bayanai mai shafi ɗaya da haɗa shi da chatbot da aka gina ba tare da code ba.",
          text: [
            "Kayan AI sun san abubuwa da yawa gaba ɗaya, amma ba su san komai game da lokutan aikinku na ranar Talata ba. Yawancin kayan gina chatbot ba tare da code ba suna bar ku ku ɗora fayil, sau da yawa a wani sashe mai suna Knowledge, wanda chatbot ɗin yake amfani da shi don amsawa.",
            "Ku sa fayil ɗin ya zama mai sauƙi: kanun labari ga kowane batu da gajerun bayanai masu sauƙi. Ku yi amfani da tsarin tambaya da amsa don tambayoyinku goma da aka fi yi. Ku saka kwanan wata a sama don ku san lokacin sabunta shi.",
            "Kada ku taɓa saka bayanan sirri a cikin fayil ɗin: babu sunayen abokan ciniki, lambobin waya, kalmomin sirri, bayanan masu ba da gudummawa ko bayanan banki. Duk abin da ke cikin fayil ɗin zai iya bayyana a cikin amsa."
          ],
          steps: ["Ku buɗe Google Doc ko takardar Word.", "Ku saka kwanan wata da sunan ƙungiyar a sama.", "Ku rubuta kowace babbar tambaya da amsarta a ƙarƙashinta.", "Ku ƙara muhimman abubuwa: lokutan aiki, adireshi, hanyar tuntuɓa, farashi ko ayyuka.", "Ku cire duk abin da yake na sirri, ku ajiye shi, sannan ku ɗora shi a sashen bayanai na kayan gina chatbot."],
          words: [["Fayil na bayanai (knowledge file)", "takardar da kuke ɗorawa don chatbot ya amsa daga bayananku."], ["Ɗorawa (upload)", "tura fayil daga na'urarku zuwa shafin intanet ko manhaja."]],
          slides: [
            { title: "AI bai san bayananku ba", bullets: ["Lokutan aikinku, farashinku, ƙa'idojinku", "Ku ba shi fayil na bayanai"] },
            { title: "Fayil na bayanai mai kyau", bullets: ["Kwanan wata a sama", "Tambaya da amsa ga kowace babbar tambaya", "Gajerun bayanai masu sauƙi"] },
            { title: "Kada ku taɓa sakawa", bullets: ["Sunaye da lambobin abokan ciniki ko masu gudummawa", "Kalmomin sirri ko bayanan banki", "Duk abin da ba za ku saka a fili ba"] }
          ],
          tryIt: "Ku rubuta fayil na bayanai mai shafi ɗaya don chatbot ɗinku, da kwanan wata da amsoshin tambayoyinku goma da aka fi yi. Sannan ku buɗe kayan gina chatbot ba tare da code ba da za ku iya amfani da shi, ku liƙa umarninku, ku ɗora fayil ɗin ku ajiye.",
          youCanNow: "gina fayil na bayanai mai aminci da haɗa shi da umarni a kayan gina chatbot ba tare da code ba.",
          quickCheck: [
            { objective: "O3", q: "Me yasa ake saka kwanan wata a saman fayil na bayanai?", options: ["Don fayil ɗin ya yi tsawo", "Don ku san lokacin sabunta shi", "Domin AI yana buƙatarsa don farawa", "Don ɓoye tsofaffin bayanai"], answer: 1, why: "Kwanan wata yana nuna yadda bayanan suke sababbi da lokacin sabunta su." },
            { objective: "O3", q: "Kuna gina fayil na bayanai na wata coci. Wanne za ku bari a waje?", options: ["Lokutan ibada", "Adireshi", "Yadda ake shiga ƙaramin rukuni", "Lambobin wayar membobi"], answer: 3, why: "Bayanan sirri kamar lambobin waya za su iya bayyana a cikin amsa, don haka ba sa shiga fayil ɗin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsarawa da gina chatbot",
        questions: [
          { objective: "O1", q: "Wanne ne aiki mafi kyau na farko ga chatbot na ƙaramar ƙungiya?", options: ["Ba da shawarar lafiya", "Amincewa da bashi", "Amsa tambayoyin lokutan aiki, wuri da rajista", "Kula da kowane ƙorafi shi kaɗai"], answer: 2, why: "Ƙunƙuntattun tambayoyi da ake maimaitawa, marasa haɗari, su ne aiki mafi kyau na farko." },
          { objective: "O1", q: "A ina ya kamata ku nemo tambayoyin da dole chatbot ɗinku ya amsa?", options: ["Imel, kira, saƙonni da sharhin da mutane suka riga suka aiko", "Ku ƙirƙira su", "Ku kwafi jerin wani kamfani", "Ku nemi AI ya yi hasashe"], answer: 0, why: "Tambayoyi na gaske daga mutane na gaske suna nuna aikin chatbot ɗin." },
          { objective: "O2", q: "Me ya kamata umarnin su ce chatbot ya yi idan bai san amsa ba?", options: ["Ya ƙirƙiri abin da yake kama da daidai", "Ya rufe hirar shiru", "Ya nemi kalmar sirrin abokin ciniki", "Ya ce ba shi da tabbas kuma ya ba da hanyar samun wani mutum"], answer: 3, why: "Amincewa da cewa bai sani ba da nuna wani mutum yana hana amsoshi marasa daidai." },
          { objective: "O3", q: "Me yasa ake ɗora fayil na bayanai?", options: ["Don chatbot ya yi jinkiri", "Don chatbot ya iya amsawa daga bayananku", "Don ajiye kalmomin sirrin abokan ciniki", "Ba a taɓa buƙatarsa ba"], answer: 1, why: "AI bai san bayananku ba sai kun ba shi." },
          { objective: "O3", q: "Wanne ya dace a cikin fayil na bayanai na chatbot?", options: ["Lambobin wayar masu ba da gudummawa", "Lokutan buɗewarku", "Kalmomin sirrin ma'aikata", "Lambobin asusun banki"], answer: 1, why: "Bayanan da za a iya bayyanawa jama'a kaɗai ne suka dace a cikin fayil ɗin." }
        ]
      }
    },
    {
      name: "Babi na 2: Gwaji, ƙaddamarwa da ingantawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Saka ƙa'idojin tsaro don chatbot ya kasance lafiya",
          minutes: 5,
          goal: "Rubuta ƙa'idojin tsaro da ke sa chatbot ya tsaya kan batunsa, ya yi gaskiya kuma ya kasance lafiya.",
          text: [
            "Ƙa'idojin tsaro (guardrails) dokoki ne da ke hana chatbot zuwa inda bai kamata ba. Ku saka su a cikin umarni a matsayin layukan \"kada ka\" da \"koyaushe\" a sarari.",
            "Ƙa'idojin tsaro masu amfani: ya tsaya kan batutuwanku kuma ya ƙi sauran cikin ladabi; kada ya taɓa nema ko ajiye bayanan sirri kamar lambobin kati ko lambobin Social Security (lambar shaidar Amurka); kada ya taɓa ba da shawarar lafiya, doka ko kuɗi; ya faɗa wa mutane cewa shi AI ne, ba mutum ba; kuma ya tura gaggawa zuwa 911 ko layin taimako da ya dace.",
            "Faɗin gaskiya cewa shi AI ne yana gina amana. Ku fara hirar da ɗan gajeren saƙo: \"Sannu, ni mataimakin AI ne na Sunrise Food Pantry. Zan iya amsa tambayoyi game da lokutan aiki da abin da za a kawo.\""
          ],
          steps: ["Ku ƙara layi: ka tsaya kan [batutuwanku]; ka ƙi sauran cikin ladabi.", "Ku ƙara: kada ka taɓa neman lambobin kati, banki, katin shaida ko Social Security.", "Ku ƙara: babu shawarar lafiya, doka ko kuɗi; ka tura su ga ƙwararre.", "Ku ƙara: ka faɗi cewa kai mataimakin AI ne.", "Ku ƙara: idan akwai gaggawa, ka faɗa wa mutane su kira 911."],
          words: [["Ƙa'idar tsaro (guardrail)", "doka da ke sa kayan AI ya tsaya kan batunsa kuma ya kasance lafiya."], ["Ƙi (decline)", "cewa a'a cikin ladabi."]],
          slides: [
            { title: "Ƙa'idojin tsaro suna kiyaye shi", bullets: ["Layukan \"kada ka\" da \"koyaushe\" a cikin umarni"] },
            { title: "Ƙa'idojin tsaro da dole a samu", bullets: ["Ya tsaya kan batu; ya ƙi sauran", "Kada ya taɓa neman lambobin sirri", "Babu shawarar lafiya, doka ko kuɗi"] },
            { title: "Ya yi gaskiya", bullets: ["Ya faɗi cewa shi mataimakin AI ne", "Ya tura gaggawa zuwa 911"] }
          ],
          tryIt: "Ku ƙara aƙalla ƙa'idojin tsaro biyar a cikin umarnin chatbot ɗinku, da gajeriyar gaisuwa da ke faɗin cewa shi mataimakin AI ne da abin da zai iya taimakawa da shi.",
          youCanNow: "rubuta ƙa'idojin tsaro da ke sa chatbot ya tsaya kan batunsa, ya yi gaskiya kuma ya kasance lafiya.",
          quickCheck: [
            { objective: "O4", q: "Mene ne amfanin ƙa'idar tsaro a cikin umarnin chatbot?", options: ["Sa chatbot ya tsaya kan batunsa, ya yi gaskiya kuma ya kasance lafiya", "Sa amsoshi su yi tsawo", "Hanzarta shafin intanet", "Tattara lambobin katin abokan ciniki"], answer: 0, why: "Ƙa'idojin tsaro dokoki ne na \"kada ka\" da \"koyaushe\" da ke riƙe chatbot a inda ya kamata." },
            { objective: "O4", q: "Abokin ciniki yana son ya ba chatbot na shagonku lambar katinsa don ya kammala oda. Me ƙa'idar tsaro za ta sa ya yi?", options: ["Ya nemi cikakkiyar lambar katin", "Ya nemi lambobi huɗu na ƙarshe kawai", "Kada ya taɓa neman lambobin kati, ya nuna hanyar biya mai aminci ko wani mutum", "Ya ajiye lambar katin don lokaci na gaba"], answer: 2, why: "Dole chatbot kada ya taɓa nema ko ajiye lambobin kati, banki ko katin shaida." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gwada chatbot kamar abokin ciniki mai tsauri",
          minutes: 6,
          goal: "Gwada chatbot da tambayoyi na gaske da masu wuya, rubuta sakamako a rajista da gyara matsaloli.",
          text: [
            "Kada ku taɓa ƙaddamar da chatbot da ba ku gwada ba. Ku yi masa aƙalla tambayoyi goma: manyan tambayoyinku da aka faɗa ta hanyoyi daban-daban, tambayoyin da bai kamata ya amsa ba, da masu wuya.",
            "Gwaje-gwaje masu wuya: ku tambaye shi wani abu da ba ya cikin fayil (shin zai amince cewa bai sani ba?), ku nemi shawarar da ya kamata ya ƙi, ku rubuta kalmomi ba daidai ba, kuma ku yi ƙoƙarin kauce masa daga batunsa (\"Rubuta mini waƙa\"). Ku nemi wani mutum shi ma ya gwada shi; zai yi tambayoyin da ba ku yi tsammani ba.",
            "Ku riƙe rajistar gwaji: tambayar, abin da ya faɗa, ya yi nasara ko ya kasa, da gyaran. Yawancin gyare-gyare ƙanana ne: ƙara bayanin da ya ɓace a fayil na bayanai, ko ƙara layi a cikin umarni. Ku sake gwadawa bayan kowane gyara."
          ],
          steps: ["Ku rubuta tambayoyin gwaji goma: na yau da kullum, da aka canja kalmominsu, na waje da batu, da masu haɗari.", "Ku yi kowace tambaya ku kwafi amsar a rajistar gwaji.", "Ku rubuta ya yi nasara ko ya kasa.", "Ku gyara kurakurai ta hanyar sabunta fayil na bayanai ko umarni.", "Ku sake gwada tambayoyin da suka kasa."],
          words: [["Rajistar gwaji (test log)", "rubutaccen bayanin kowane gwaji, sakamakonsa da gyaran."], ["Edge case (tambaya ta musamman)", "tambaya da ba a saba gani ba da za ta iya ɓata tsari."]],
          slides: [
            { title: "Ku gwada kafin ƙaddamarwa", bullets: ["Aƙalla tambayoyi goma", "Na yau da kullum, da aka canja, na waje da batu, masu haɗari"] },
            { title: "Gwaje-gwaje masu wuya", bullets: ["Abin da ba ya cikin fayil", "Shawarar da ya kamata ya ƙi", "Kuskuren rubutu da buƙatu na waje da batu"] },
            { title: "Rubuta ku gyara", bullets: ["Tambaya, amsa, nasara ko kasawa, gyara", "Ku sabunta fayil ko umarni", "Ku sake gwadawa"] }
          ],
          tryIt: "Ku yi tambayoyin gwaji goma ga chatbot ɗinku, har da aƙalla uku masu wuya. Ku rubuta su a rajistar gwaji, ku gyara kowace kasawa ku sake gwadawa.",
          youCanNow: "gwada chatbot da tambayoyi na yau da kullum da masu wuya, riƙe rajistar gwaji da gyara abin da ya kasa.",
          quickCheck: [
            { objective: "O5", q: "Me ke shiga cikin rajistar gwajin chatbot?", options: ["Tambayoyin da ya amsa daidai kaɗai", "Lambobin wayar abokan ciniki", "Umarnin chatbot ɗin", "Tambayar, amsar, nasara ko kasawa, da gyaran"], answer: 3, why: "Rajistar gwaji tana rubuta kowace tambaya, amsar, nasara ko kasawa, da abin da kuka gyara." },
            { objective: "O5", q: "A lokacin gwaji, chatbot ya ƙirƙiri farashin da ba ya cikin fayil ɗinku. Me za ku fara yi?", options: ["Ku ƙara farashin a fayil na bayanai ko layi da ke faɗa masa ya amince cewa bai sani ba, sannan ku sake gwadawa", "Ku ƙaddamar da shi duk da haka", "Ku goge chatbot ɗin", "Ku ƙyale shi; abokan ciniki ba za su tambaya ba"], answer: 0, why: "Yawancin gyare-gyare bayanin da ya ɓace ne ko layin umarni, sannan a sake gwadawa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ƙaddamarwa, rabawa da sabunta shi",
          minutes: 5,
          goal: "Raba chatbot da masu amfani na gaske, tattara ra'ayoyi da kafa tsarin sabuntawa.",
          text: [
            "Yawancin kayan gini suna bar ku ku raba chatbot ta hanyar haɗi (link), wasu kuma suna bar ku ku saka shi a shafin intanet. Ku fara kaɗan: ku raba shi da wasu abokan ciniki, membobi ko masu sa-kai kaɗan da farko, ku faɗa musu cewa sabo ne.",
            "Ku nemi ra'ayoyi: \"Ya amsa tambayarku? Me ya yi ba daidai ba?\" Ku karanta hirarraki na gaske idan kayan aikinku yana nuna su, ku nemi tambayoyin da bai iya amsawa ba.",
            "Ku kafa tsari. Kowane wata, ko a duk lokacin da lokutan aiki, farashi ko ƙa'idoji suka canja, ku sabunta fayil na bayanai da kwanan watansa. Chatbot da bayanansa suka tsufa ya fi rashin chatbot muni. Ku tabbata akwai mutum da za a iya samu don duk abin da chatbot ba zai iya ba."
          ],
          steps: ["Ku raba hanyar haɗin chatbot da mutane uku zuwa biyar.", "Ku yi musu tambayoyin ra'ayi biyu.", "Ku ƙara amsoshin da suka ɓace a fayil na bayanai.", "Ku saka tunatarwar sabuntawa ta kowane wata a kalandarku.", "Ku tabbata mutane koyaushe suna iya samun wani mutum."],
          words: [["Ƙaddamarwa (launch)", "bayar da wani abu don mutane su yi amfani da shi."], ["Ra'ayi (feedback)", "abin da masu amfani suke faɗa muku game da abin da ya yi aiki da wanda bai yi ba."]],
          slides: [
            { title: "Ku fara kaɗan", bullets: ["Ku raba hanyar haɗi da mutane kaɗan", "Ku faɗa musu cewa sabo ne"] },
            { title: "Ku nemi ra'ayoyi", bullets: ["\"Ya amsa tambayarku?\"", "\"Me ya yi ba daidai ba?\""] },
            { title: "Ku riƙa sabunta shi", bullets: ["Ku sabunta kowane wata ko idan bayanai suka canja", "Ku canja kwanan wata a fayil ɗin", "Koyaushe akwai mutum da za a iya samu"] }
          ],
          tryIt: "Aikin ƙarshe: ku raba chatbot ɗinku da aka gwada da aƙalla mutum ɗaya. Ku rubuta ra'ayinsa, ku yi gyara ɗaya, sannan ku saka tunatarwa ta kowane wata don sabunta fayil na bayanai.",
          youCanNow: "gina, gwadawa, ƙaddamarwa da kula da chatbot na AI ba tare da code ba don ƙungiya ta gaske.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku raba sabon chatbot da mutane kaɗan da farko?", options: ["Don ɓoye shi", "Domin hanyoyin haɗi suna aiki ga mutane biyar kaɗai", "Don gano matsaloli da samun ra'ayoyi kafin kowa ya yi amfani da shi", "Don kada ku taɓa sabunta shi"], answer: 2, why: "Farawa kaɗan yana bar ku ku gano matsaloli ku tattara ra'ayoyi cikin aminci." },
            { objective: "O6", q: "Gidan burodinku zai canja lokutan aiki mako mai zuwa. Me za ku yi da chatbot ɗin?", options: ["Babu komai; zai koya da kansa", "Ku sabunta fayil na bayanai da kwanan watansa", "Ku kashe chatbot ɗin har abada", "Ku faɗa wa abokan ciniki su ƙyale shi"], answer: 1, why: "Ku sabunta fayil ɗin da kwanan watansa a duk lokacin da bayanai suka canja; chatbot da bayanansa suka tsufa ya fi rashin chatbot muni." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gwaji, ƙaddamarwa da ingantawa",
        questions: [
          { objective: "O4", q: "Mene ne ƙa'idar tsaro (guardrail)?", options: ["Shinge a kewayen ofis", "Ƙarin abu da ake biya", "Wani nau'in fayil na bayanai", "Doka da ke sa kayan AI ya tsaya kan batunsa kuma ya kasance lafiya"], answer: 3, why: "Ƙa'idojin tsaro dokoki ne a cikin umarni." },
          { objective: "O4", q: "Wani yana neman shawarar lafiya daga chatbot na gidan burodinku game da rashin lafiyar abinci (allergy). Me ya kamata ya yi?", options: ["Ya ƙi, ya tura shi wurin likita, ko 911 idan gaggawa ce", "Ya faɗi cutar da yake da ita", "Ya nemi lambar inshorarsa", "Ya canja batun zuwa kek"], answer: 0, why: "Kada chatbot ya ba da shawarar lafiya, kuma ya tura gaggawa zuwa 911." },
          { objective: "O5", q: "Me yasa za ku yi tambayar da BA ta cikin fayil na bayanai a lokacin gwaji?", options: ["Don sa shi jinkiri", "Don goge fayil ɗin", "Don ganin ko zai amince cewa bai sani ba maimakon ƙirƙirar wani abu", "Babu dalili"], answer: 2, why: "Chatbot mai kyau yana cewa ba shi da tabbas maimakon ƙirƙirar amsa." },
          { objective: "O6", q: "Chatbot yana ba da lokutan aiki na watan da ya wuce. Mene ne gyaran?", options: ["Ku rufe kamfanin", "Ku faɗa wa masu amfani su yi hasashe", "Ku ƙara ƙa'idojin tsaro kawai", "Ku sabunta fayil na bayanai da kwanan watansa"], answer: 3, why: "Tsofaffin bayanai suna fitowa daga fayil da ya tsufa." },
          { objective: "O6", q: "Wace hanya ce mafi kyau ta ƙaddamarwa?", options: ["Ku saka shi ko'ina ba tare da gwaji ba", "Ku ɓoye shi", "Ku raba shi da mutane kaɗan da farko ku nemi ra'ayoyi", "Ku cire hanyar samun mutum"], answer: 2, why: "Ƙaramar ƙaddamarwa tana gano matsaloli kafin mutane da yawa su gani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gina Chatbot na AI (Ba Sai Kun Iya Rubuta Code Ba)",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin chatbot na AI na wata ƙungiya shi ne:", options: ["Mutum mai karɓar baƙi", "Mataimakin AI da aka shirya don manufa ɗaya", "Hidimar ajiye shafin intanet", "Tsarin biyan kuɗi"], answer: 1, why: "Mataimaki ne mai manufa ɗaya don aiki ɗaya." },
      { objective: "O1", q: "Wane aiki na farko na chatbot ne ya fi ƙarancin haɗari?", options: ["Lokutan aikin rumbun abinci na taimako da abin da za a kawo", "Shawarar shari'a", "Gano cuta", "Shawarwarin zuba jari"], answer: 0, why: "Lokutan aiki da umarni masu sauƙi bayanai ne marasa haɗari." },
      { objective: "O1", q: "A ina za ku nemo manyan tambayoyin chatbot ɗin?", options: ["Wani jeri na bazata a intanet", "Hasashen AI", "Tambayoyin da mutane suke yi muku yanzu", "Tallace-tallacen abokin hamayya"], answer: 2, why: "Tambayoyi na gaske suna nuna aikin na gaske." },
      { objective: "O2", q: "Wace ce hanyar gina chatbot ba tare da code ba?", options: ["Custom GPT, Gemini Gem ko agent na Copilot Studio", "Ƙera ƙwaƙwalwar kwamfuta (chip)", "Haɗa server daga sassanta", "Aika wasiƙa ta gidan waya"], answer: 0, why: "Waɗannan kayan suna bar ku ku gina da umarni da fayiloli, ba tare da code ba." },
      { objective: "O2", q: "Menu da abubuwan tsare-tsare a kayan chatbot suna canjawa. A ina za ku tabbatar da matakan yanzu?", options: ["Jita-jita", "Tsohon bidiyo kawai", "Hasashe", "Shafin taimako na hukuma na kayan"], answer: 3, why: "Shafin taimako na hukuma yana da matakan yanzu." },
      { objective: "O2", q: "Wane layi ne ya dace a cikin umarnin chatbot?", options: ["\"Ga kalmar sirrin mai gudanarwa.\"", "\"Kai ne mataimakin taimako na Sunrise Food Pantry.\"", "\"Ka ƙyale duk tambayoyi.\"", "\"Koyaushe ka yi hasashe idan ba ka da tabbas.\""], answer: 1, why: "Faɗin matsayi muhimmin sashe ne na umarni." },
      { objective: "O2", q: "Salo na fara'a, gajere, da kalmomi masu sauƙi ana kiransa chatbot ɗin:", options: ["Ɗorawa", "Salon magana", "Ƙa'idar tsaro", "Ƙaddamarwa"], answer: 1, why: "Salon magana shi ne yadda rubutun yake sauti." },
      { objective: "O3", q: "Me ya kamata ya kasance a saman fayil na bayanai?", options: ["Lambobin wayar abokan ciniki", "Kalmar sirri", "Babu komai", "Kwanan wata da sunan ƙungiya"], answer: 3, why: "Kwanan wata yana faɗa muku lokacin da yake buƙatar sabuntawa." },
      { objective: "O3", q: "Me yasa za a bar bayanan sirri a waje da fayil na bayanai?", options: ["Duk abin da ke ciki zai iya bayyana a cikin amsa", "Yana sa fayil ɗin ya yi gajarta sosai", "AI ba ya iya karanta sunaye", "Ba laifi a saka su"], answer: 0, why: "Chatbot zai iya maimaita abin da ke cikin fayil ɗin." },
      { objective: "O3", q: "Tsari mai kyau na fayil na bayanai shi ne:", options: ["Sakin layi ɗaya mai tsawo ba tare da kanun labari ba", "Hoton allon rubutu", "Kowace babbar tambaya da amsarta a ƙarƙashinta", "Jerin kalmomin sirri"], answer: 2, why: "Tsarin tambaya da amsa yana da sauƙin amfani ga AI." },
      { objective: "O4", q: "Wace ƙa'idar tsaro ce dole a samu?", options: ["Koyaushe ya rubuta waƙoƙi", "Ya amsa kowane batu a duniya", "Ya yi kamar shi mutum ne", "Kada ya taɓa neman lambobin kati, banki ko Social Security"], answer: 3, why: "Kada chatbot ya taɓa tattara lambobin sirri." },
      { objective: "O4", q: "Shin ya kamata chatbot ya faɗi cewa shi AI ne?", options: ["A'a, ya yi kamar shi mutum ne", "Sai an tambaye shi sau uku kawai", "Ee, gaskiya tana gina amana", "A ƙarshen mako kawai"], answer: 2, why: "Bayyana a sarari cewa shi AI ne gaskiya ne kuma yana gina amana." },
      { objective: "O4", q: "Wani ya faɗa wa chatbot cewa yana cikin gaggawa. Ya kamata ya:", options: ["Nemi adireshinsa da lambar katinsa", "Faɗa masa ya kira 911", "Ƙyale shi", "Canja batun"], answer: 1, why: "Gaggawa tana zuwa 911." },
      { objective: "O5", q: "Tambayoyin gwaji nawa ne mafi ƙaranci da wannan kwas ɗin yake ba da shawara?", options: ["Goma", "Ɗaya", "Babu", "Dubu uku"], answer: 0, why: "Aƙalla tambayoyi goma suna rufe na yau da kullum da masu wuya." },
      { objective: "O5", q: "Aika \"Rubuta mini waƙa\" ga chatbot na rumbun abinci yana gwada ko:", options: ["Ya san lokutan aiki", "Yana iya ɗora fayiloli", "Yana tsayawa kan batunsa", "Yana da kalmar sirri"], answer: 2, why: "Buƙata ce ta waje da batu; ya kamata chatbot ya ƙi cikin ladabi." },
      { objective: "O5", q: "Rajistar gwaji tana rubuta:", options: ["Tambayar, amsar, nasara ko kasawa, da gyaran", "Amsoshi masu kyau kaɗai", "Kalmomin sirrin abokan ciniki", "Yanayi"], answer: 0, why: "Tana bin kowane gwaji da abin da kuka canja." },
      { objective: "O5", q: "Bayan gyara gwajin da ya kasa, ya kamata ku:", options: ["Goge rajistar gwaji", "Ƙaddamar ba tare da dubawa ba", "Cire duk ƙa'idojin tsaro", "Sake gwada wannan tambayar"], answer: 3, why: "Sake gwadawa yana tabbatar da cewa gyaran ya yi aiki." },
      { objective: "O5", q: "Me yasa za ku sa wani mutum ya gwada chatbot ɗin?", options: ["Doka ce ta tilasta", "Yana yin tambayoyin da ba ku yi tsammani ba", "Don sa shi jinkiri", "Don kada ku yi da kanku"], answer: 1, why: "Sabon ido yana gano sababbin tambayoyi na musamman." },
      { objective: "O6", q: "Sau nawa ya kamata ku sabunta fayil na bayanai?", options: ["Ba a taɓa ba", "Kowane wata, ko a duk lokacin da bayanai suka canja", "Sau ɗaya a kowace shekara goma", "Sai AI ya nema kawai"], answer: 1, why: "Tsofaffin bayanai suna kawo amsoshi marasa daidai." },
      { objective: "O6", q: "Ko da akwai chatbot, ya kamata mutane koyaushe su iya:", options: ["Ganin kalmomin sirrin ma'aikata", "Gyara umarnin", "Samun shawarar shari'a daga gare shi", "Samun wani mutum"], answer: 3, why: "Mutum a matsayin madadi yana kula da abin da chatbot ba zai iya ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [1, 2, 5, 8, 9, 10, 12, 14, 15, 19]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Aiki a sarari",
        objective: "O1",
        notYet: "Babu jimlar aiki, ko aikin ya haɗa da shawara mai haɗari.",
        meets: "Aiki a jimla ɗaya don ƙunƙuntattun tambayoyi marasa haɗari.",
        exceeds: "Tambayoyi goman da yake amsawa sun fito daga saƙonni na gaske da mutane suka aiko."
      },
      {
        name: "Umarni da ƙa'idojin tsaro",
        objective: "O4",
        notYet: "Umarnin ba su da matsayi ko kowace dokar \"kada ka\".",
        meets: "Matsayi, masu sauraro, aiki, salon magana da iyakoki, da ƙa'idojin tsaro kan lambobin sirri, shawara, faɗin cewa shi AI ne, da gaggawa.",
        exceeds: "Yana da saƙon buɗewa da ke faɗa wa mutane cewa shi AI ne da abin da zai iya taimakawa da shi."
      },
      {
        name: "Fayil na bayanai",
        objective: "O3",
        notYet: "Babu fayil, ko fayil ɗin yana da bayanan sirri.",
        meets: "Fayil mai shafi ɗaya da kwanan wata, da manyan tambayoyi da amsoshinsu, ba tare da bayanan sirri ba.",
        exceeds: "An tsara bayanan a ƙarƙashin kanun labarai a sarari, kuma mutum na biyu ya duba su."
      },
      {
        name: "Rajistar gwaji",
        objective: "O5",
        notYet: "Tambayoyi ƙasa da goma, ko ba a gyara kurakurai ba.",
        meets: "Aƙalla tambayoyi goma, har da na waje da batu da masu haɗari, da gyare-gyare da sake gwaji.",
        exceeds: "Wani mutum shi ma ya gwada shi, kuma tambayoyinsa suna cikin rajistar."
      },
      {
        name: "Ra'ayoyi da kulawa",
        objective: "O6",
        notYet: "Ba a raba shi ba, ko ba a rubuta ra'ayi ba.",
        meets: "An raba shi da mutum ɗaya, an rubuta ra'ayinsa, kuma akwai hanyar samun wani mutum.",
        exceeds: "An saka tunatarwar sabuntawa ta kowane wata, kuma an yi gyara ɗaya daga ra'ayoyin."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka ƙaddamar da chatbot cikin kwanaki 30 (binciken biyo baya)",
      "Sa'o'in da aka rage a kowane mako kan tambayoyin da ake maimaitawa, kamar yadda mai kamfanin ya faɗa",
      "Chatbot da har yanzu ake sabuntawa bayan kwanaki 90, ba tare da rahoton raba bayanan sirri ba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet (waya tana aiki ga wasu kayan gini)",
      "Kayan gina chatbot ba tare da code ba kamar custom GPT, Gemini Gem ko agent na Copilot Studio (ku duba tsare-tsaren kayan na yanzu)",
      "Google Doc ko takardar Word don fayil na bayanai da rajistar gwaji",
      "Kusan minti 60 don darussa da gwaje-gwaje, da ƙarin lokacin gwadawa da raba chatbot ɗin"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku gina chatbot na misali a kan allo da kowa yake gani.",
      "Ku nemi masu koyo su kawo manyan tambayoyinsu goma na gaske daga imel, tes ko sharhi.",
      "Ku duba kowane fayil na bayanai don bayanan sirri kafin a ɗora shi.",
      "Ku haɗa masu koyo bibbiyu don su gwada chatbot na juna da tambayoyi na waje da batu da masu haɗari.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
