"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-ai-tools-educators.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-ai-tools-educators-ha",
  lang: "ha",
  translationOf: "edu-ai-tools-educators",
  category: "Leadership Development",
  name: "AI ga Shugabannin Makaranta da na Ilimi 2: Kayan AI ga Malamai",
  skills: "Sanin nau'o'in kayan AI na makarantu, Rubuta prompt na malamai mai aiki, Amfani da AI don ayyukan malamai uku na yau da kullum, Duba sharuɗɗan sirri na kayan AI, Gina jerin kayan AI kore-rawaya-ja",
  outcome: "amfani da kayan AI don ayyukan malamai na yau da kullum da tsarin prompt amintacce, duba sharuɗɗan sirri na kayan AI da jerin dubawa kafin kowa ya yi amfani da shi da ɗalibai, da wallafa gajeren jerin kayan AI kore-rawaya-ja don makarantarku.",
  about: [
    "Wannan kwas na shugabannin makaranta ne (principal), masu horar da malamai, shugabannin malamai, masu kula da fasaha da malamai. Kwas ne na aiki da hannu: za ku yi amfani da kayan AI don ayyukan makaranta na gaske, sannan ku yanke waɗanne kaya ne lafiya a ba da shawarar su.",
    "Babi na 1 yana raba kayan AI masu yawa zuwa ƴan nau'o'i, yana koyar da tsarin prompt da ke aiki ga malamai, kuma yana aikata ayyuka uku na yau da kullum. Babi na 2 yana koya muku duba kaya kafin ma'aikata ko ɗalibai su yi amfani da shi: sharuɗɗan sirri, dokokin shekaru, amfani da bayanai, da yadda ake wallafa jerin kaya mai sauƙi da ma'aikata za su amince da shi.",
    "Kada ku taɓa saka sunayen ɗalibai, makinsu, bayanan IEP (shirin karatu na musamman) ko wasu bayanan da ke nuna ko wane ne a kowane kayan aiki da gundumar makarantarku ba ta amince da shi ba. Ku yi atisaye da misalan ƙirƙira. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas. Wannan shi ne kwas na 2 cikin 8 na AI ga Shugabannin Makaranta da na Ilimi."
  ],
  finalTask: "Ku ƙirƙiri kayan farko na AI na makarantarku: katin prompt mai prompt uku da kuka gwada (imel ga iyaye, rubutun karatu a matakai uku, da tambayoyin atisaye goma tare da amsoshinsu), da jerin kore-rawaya-ja na aƙalla kayan AI uku, kowanne an duba shi da jerin dubawar sirri da aka gina daga albarkatun Model Terms of Service a studentprivacy.ed.gov, tare da dalilin launinsa a layi ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabannin makaranta, masu horar da malamai, shugabannin malamai, masu kula da fasaha da malamai a makarantun Amurka waɗanda ke son atisaye da hannu da kayan AI, da hanyar yanke waɗanne ne lafiya.",
    startingPoint: "Sun san mene ne AI da tushen dokokin FERPA da COPPA daga kwas na 1. Sun taɓa gwada chatbot, amma ba su da tsarin prompt amintacce ko hanyar duba sharuɗɗan sirri na kayan aiki.",
    gap: "Ma'aikata suna gwada kayan AI da yawa, wasu da sharuɗɗan sirri marasa ƙarfi ko dokokin shekaru da ɗalibai ba za su iya cikawa ba. Shugabanni suna buƙatar samun sakamako mai kyau daga AI don ayyukan malamai na yau da kullum, duba kaya kafin kowa ya yi amfani da su da ɗalibai, da ba ma'aikata jerin mai sauƙi da za su amince da shi.",
    constraints: [
      "Kada a taɓa saka sunayen ɗalibai, makinsu, bayanan IEP ko wasu bayanan da ke nuna ko wane ne a kayan aiki da gundumar ba ta amince da shi ba; atisaye yana amfani da misalan ƙirƙira",
      "Sharuɗɗan kayan aiki da dokokin shekaru suna canjawa, don haka masu koyo suna duba sharuɗɗan yanzu da kansu",
      "Jami'in sirri na gundumar ko ƙungiyar fasaha ne ke tabbatar da jerin kaya na ƙarshe",
      "Na'urori: kwamfuta mai intanet da aƙalla mataimakin AI kyauta ɗaya",
      "Lokaci: gajerun darussa da suka dace da ranar makaranta"
    ],
    prerequisites: "\"AI for School and Educational Leaders 1: Introduction to AI in Education\" (AI ga Shugabannin Makaranta da na Ilimi 1: Gabatarwa ga AI a Ilimi)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku kayan AI da ma'aikatanku ke amfani da su", action: "raba kowane kayan aiki zuwa mataimaki na gama-gari, dandalin ilimi ko fasalin da ke ciki", standard: "kuna nuna ko gundumar tana da yarjejeniya a kansa" },
    { id: "O2", condition: "Don darasi da kuke koyarwa ko kuke tallafawa", action: "rubuta prompt na malami mai matsayi, masu koyo, manufa, iyakoki da tsari", standard: "da dukkan sassa biyar, kuma an ajiye shi a katin prompt na tare" },
    { id: "O3", condition: "Ta amfani da bayanan ƙirƙira", action: "amfani da AI don imel ga iyaye, rubutu mai matakai da tambayoyin atisaye tare da amsoshi, da duba kowanne", standard: "kuna gyara kowane kuskure kafin amfani, kuma kuna warware kowace amsa da kanku" },
    { id: "O4", condition: "Idan aka ba ku kayan AI da ma'aikata ke so", action: "duba manufar sirri da sharuɗɗansa da jerin dubawar sirri", standard: "kuna nuna kowane abu a matsayin a sarari, ba a sarari ba, ko matsala, don tsarin da za ku yi amfani da shi" },
    { id: "O5", condition: "Kafin ɗalibai su shiga wani kayan aiki", action: "duba mafi ƙarancin shekaru da dokokin izinin iyaye na kayan a yanzu, da yadda COPPA ke aiki a kansa", standard: "ta amfani da sharuɗɗan kayan na yanzu da kansu" },
    { id: "O6", condition: "Idan aka ba ku aƙalla kayan aiki uku da aka duba", action: "wallafa jerin kayan aiki kore-rawaya-ja don ma'aikata", standard: "yana nuna launin kowane kaya, dalili, amfanin da aka yarda da shi da ranar dubawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Amfani da kayan AI don ayyukan malamai",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nau'o'in kayan AI a makarantu",
          minutes: 5,
          goal: "Raba kayan AI zuwa mataimaka na gama-gari, dandalin ilimi da fasalolin da ke ciki.",
          text: [
            "Mataimakan AI na gama-gari, kamar ChatGPT, Microsoft Copilot, Google Gemini da Claude, suna iya yin kusan kowane aikin rubutu ko tunani. Suna da sassauci, amma ba su san komai game da manhajar karatunku ba sai kun faɗa musu, kuma sharuɗɗan bayanansu sun dogara da tsarin (plan) da kuke amfani da shi.",
            "Dandalin AI na ilimi an gina su ne don malamai ko ɗalibai: masu ƙirƙirar darasi da gwaji, kayan koyarwa na ɗaiɗai, kayan ba da ra'ayi. Suna iya dacewa da ayyukan makaranta fiye da haka, wasu kuma suna ba da yarjejeniya da gunduma, amma dole a duba kowanne don sirri da inganci.",
            "Fasalolin AI da ke ciki suna cikin kayan da kuke amfani da su tuni: Microsoft 365, Google Workspace, Canva, tsarin sarrafa koyo (LMS) ɗinku. Suna da sauƙin amfani, amma ana iya kunna su ba tare da wani ya yanke shawara ba, don haka ku tambayi ƙungiyar fasaharku waɗanne ne a kunne, kuma ƙarƙashin wace yarjejeniya."
          ],
          words: [["Mataimaki na gama-gari", "kayan hira na AI da zai iya taimakawa da kusan kowane aiki."], ["Dandalin ilimi", "kayan AI da aka yi don ayyukan koyarwa ko koyo."], ["Fasalin da ke ciki", "aikin AI a cikin manhajar da kuke amfani da ita tuni."]],
          slides: [
            { title: "Mataimaka na gama-gari", bullets: ["ChatGPT, Copilot, Gemini, Claude", "Suna da sassauci, amma ba su san manhajar karatunku ba", "Sharuɗɗan bayanai sun dogara da tsarin (plan)"] },
            { title: "Dandalin ilimi", bullets: ["Kayan darasi, gwaji, koyarwa ta ɗaiɗai da ba da ra'ayi", "Sun fi dacewa da ayyukan makaranta", "Dole a duba kowanne"] },
            { title: "Fasalolin da ke ciki", bullets: ["A cikin Microsoft 365, Google, Canva, LMS ɗinku", "Suna iya kasancewa a kunne tun farko", "Ku duba waɗanne ne a kunne, ƙarƙashin wace yarjejeniya"] }
          ],
          tryIt: "Ku rubuta jerin kayan AI da ku ko ma'aikatanku ke amfani da su yanzu. Ku saka kowanne a ɗaya daga cikin nau'o'i uku, kuma ku nuna ko gundumarku tana da yarjejeniya a kansa (eh, a'a, ban sani ba).",
          youCanNow: "raba kayan AI zuwa nau'o'i uku da sanin abin da za ku duba ga kowanne.",
          quickCheck: [
            { objective: "O1", q: "Mene ne fasalin AI da ke ciki?", options: ["Kayan AI da dole ku saya daban", "Fasalin AI a cikin manhajar da kuke amfani da ita tuni", "Chatbot da ɗalibi ya yi", "Takardar aiki ta takarda"], answer: 1, why: "Fasalolin da ke ciki suna bayyana a cikin kayan da kuka mallaka tuni, wani lokaci a kunne tun farko." },
            { objective: "O1", q: "Wani malami yana amfani da sabon dandalin AI na ilimi da ba ku taɓa ji ba. Me za ku fara yi?", options: ["Ku amince da shi, domin an yi shi don makarantu", "Ku hana duk dandalin AI", "Ku rubuta shi a jeri ku duba ko gundumar tana da yarjejeniya a kansa", "Ku tambayi ɗalibai ko suna son sa"], answer: 2, why: "Dandalin ilimi ma suna buƙatar a duba su don sirri da inganci." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tsarin prompt da ke aiki ga malamai",
          minutes: 5,
          goal: "Rubuta prompt na malami mai matsayi, masu koyo, manufa, iyakoki da tsari.",
          text: [
            "Malamai suna samun sakamako mafi kyau da prompt mai sassa biyar. Matsayi: \"Kai gogaggen malamin kimiyya ne na aji 7.\" Masu koyo: aji, matakin karatu, buƙatu a gaba ɗaya (ba sunaye). Manufa: manufar koyo ko ma'auni (standard). Iyakoki: lokaci, kayan aiki, tsawo, abin da za a guje wa. Tsari: tebur, matakai masu lamba, takardar rabawa.",
            "Misali: \"Kai gogaggen malamin aji 4 ne. Ajina yana karatu a matakai daban-daban. Ka rubuta rubutun kalmomi 300 game da zagayowar ruwa a matakan karatu uku da muhimman bayanai iri ɗaya, sannan tambayoyin fahimta biyar ga kowanne. Ka yi amfani da tebur.\"",
            "Sannan ku inganta shi da tambayoyin biyo baya: \"ka sauƙaƙa mataki na 1\", \"ka ƙara jerin kalmomi\", \"ka daidaita tambayoyi da babban ra'ayi\". Ku ajiye prompt da ke aiki a katin prompt na tare don abokan aiki su sake amfani da su."
          ],
          steps: ["Matsayi: a matsayin wa AI zai yi aiki?", "Masu koyo: aji, mataki, buƙatu a gaba ɗaya.", "Manufa: manufar koyo ko ma'auni.", "Iyakoki: lokaci, tsawo, kayan aiki.", "Tsari: tebur, matakai, takardar rabawa."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa kayan AI don neman wani abu."], ["Katin prompt", "jerin prompt da aka gwada da ma'aikata ke rabawa kuma suke sake amfani da su."]],
          slides: [
            { title: "Prompt na malami mai sassa biyar", bullets: ["Matsayi", "Masu koyo (ba sunaye)", "Manufa, iyakoki, tsari"] },
            { title: "Misali", bullets: ["Malamin aji 4, matakan karatu daban-daban", "Rubutu game da zagayowar ruwa a matakai uku", "Tambayoyi biyar ga kowanne, a tebur"] },
            { title: "Ku inganta ku ajiye", bullets: ["Biyo baya: mafi sauƙi, ƙara kalmomi", "Ku ajiye masu nasara a katin prompt na tare"] }
          ],
          tryIt: "Ku rubuta prompt mai sassa biyar don darasin da za ku koyar (ko ku tallafa) nan ba da daɗewa ba. Ku gudanar da shi, ku yi tambayar biyo baya ɗaya, sannan ku ajiye prompt na ƙarshe.",
          youCanNow: "rubuta prompt na malamai da ke kawo sakamako mai amfani tun farko.",
          quickCheck: [
            { objective: "O2", q: "Me ake sakawa a sashen \"iyakoki\" na prompt na malami?", options: ["Iyakoki kamar tsawo, matakin karatu ko abin da za a guje wa", "Cikakken sunan ɗalibi", "Kalmar sirrin malami", "Sunan kayan AI"], answer: 0, why: "Iyakoki suna saita kan iyaka don amsar ta dace da ajinku." },
            { objective: "O2", q: "AI ya ba da rubutun da ya yi wa ɗalibanku wuya. Me za ku aika?", options: ["Ku sake farawa a wani kayan aiki", "Ku karɓe shi ku bayyana kalmomi masu wuya a aji", "Ku liƙa makin karatun wani ɗalibi", "Tambayar biyo baya kamar \"Ka sauƙaƙa shi, da gajerun jimloli\""], answer: 3, why: "Tambayar biyo baya mai sarari tana daidaita amsar ba tare da raba bayanan ɗalibai ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ayyuka uku na yau da kullum, an yi su da kyau",
          minutes: 6,
          goal: "Amfani da AI don imel ga iyaye, rubutu mai matakai da tambayoyin atisaye, da duba kowanne.",
          text: [
            "Imel ga iyaye: ku ba da dalili, muhimman bayanai (taron, rana, abin da iyalai za su yi) da yanayin magana. Ku nemi gajeren saƙo mai daɗi a Turanci mai sauƙi. Idan dole ya fita a wasu harsuna, fassarar AI daftari ce kawai; ku sa ƙwararren mai magana da harshen ya duba ta kafin ta isa ga iyalai.",
            "Rubutu mai matakai: ku nemi abu ɗaya a matakan karatu uku da muhimman bayanai iri ɗaya. Ku duba bayanan da kanku; AI yana iya kawo kurakurai idan yana sauƙaƙawa.",
            "Tambayoyin atisaye: ku nemi tambayoyi goma tare da amsoshinsu da gajeren bayani ga kowace amsa. Ku warware amsoshin da kanku; amsoshin AI suna yin kuskure fiye da yadda mutane ke tsammani, musamman a lissafi da kimiyya. A dukkan ukun, ku ne editan, kuma ku ne masu duba na ƙarshe."
          ],
          steps: ["Imel ga iyaye: dalili, bayanai, yanayin magana; ƙwararre ya duba fassara.", "Rubutu mai matakai: bayanai iri ɗaya a matakai uku; ku duba bayanan.", "Tambayoyin atisaye: amsoshi tare da bayani; ku warware kowace amsa da kanku.", "Ku gyara komai kafin a yi amfani da shi."],
          words: [["Rubutu mai matakai (leveled text)", "abu ɗaya da aka rubuta a matakan karatu daban-daban."], ["Amsoshi (answer key)", "jerin amsoshi daidai na tambayoyi."]],
          slides: [
            { title: "Imel ga iyaye", bullets: ["Dalili, bayanai, yanayin magana", "Turanci mai sauƙi", "Ƙwararren mai magana da harshe ya duba fassara"] },
            { title: "Rubutu mai matakai", bullets: ["Bayanai iri ɗaya, matakai uku", "Ku duba bayanai: sauƙaƙawa na iya kawo kurakurai"] },
            { title: "Tambayoyin atisaye", bullets: ["Tambayoyi goma tare da amsoshi", "Ku warware kowace amsa da kanku", "Ku ne editan, kuma masu duba na ƙarshe"] }
          ],
          tryIt: "Ku yi dukkan ayyuka uku da bayanan ƙirƙira: imel ga iyaye game da ziyarar karatu, rubutu a matakai uku, da tambayoyi goma tare da amsoshi. Ku ƙirga kurakuran da dole kuka gyara.",
          youCanNow: "amfani da AI don ayyukan malamai uku na yau da kullum da duba sakamakon kamar edita.",
          quickCheck: [
            { objective: "O3", q: "Mene ne rubutu mai matakai?", options: ["Rubutun da aka buga da manyan haruffa", "Abu ɗaya da aka rubuta a matakan karatu daban-daban", "Rubutu marar hotuna", "Gwaji mai sassa uku"], answer: 1, why: "Rubutu mai matakai yana bar ɗalibai a matakan karatu daban-daban su koyi abu ɗaya." },
            { objective: "O3", q: "AI ya rubuta tambayoyin atisaye goma tare da amsoshi. Me za ku yi kafin ku yi amfani da su?", options: ["Ku warware kowace amsa da kanku ku gyara kurakurai", "Ku yi amfani da su yadda suke", "Ku duba tambaya ta farko kawai", "Ku tambayi AI ko amsoshinsa daidai ne"], answer: 0, why: "Amsoshin AI suna yin kuskure fiye da yadda mutane ke tsammani, don haka malami yana duba kowacce." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Amfani da kayan AI don ayyukan malamai",
        questions: [
          { objective: "O1", q: "Fasalolin AI a cikin manhajar da kuka mallaka tuni:", options: ["Koyaushe a kashe suke", "Ba sa taɓa bayanai", "Suna iya kasancewa a kunne tun farko; ku tambayi ƙungiyar fasaharku", "Ba sa buƙatar yarjejeniya"], answer: 2, why: "Ana iya kunna fasalolin da ke ciki ba tare da yanke shawara ba." },
          { objective: "O2", q: "Wanne ne ya dace a sashen \"masu koyo\" na prompt na malami?", options: ["Aji da matakan karatu a gaba ɗaya", "Cikakkun sunayen ɗalibai", "Burin IEP na ɗalibai da sunayensu", "Lambobin wayar iyaye"], answer: 0, why: "Ku bayyana masu koyo a gaba ɗaya, kada ku taɓa amfani da bayanan da ke nuna ko wane ne." },
          { objective: "O3", q: "Fassarar AI ta wasiƙa ga iyali:", options: ["Ta shirya a aika", "Koyaushe cikakkiya ce", "Haramun ce", "Daftari ce da ƙwararren mai magana da harshen ya kamata ya duba"], answer: 3, why: "Fassara na iya yin kuskure; iyalai sun cancanci bayanai daidai." },
          { objective: "O3", q: "Me yasa za ku warware kowace amsa a amsoshin AI da kanku?", options: ["Doka ce ta tilasta", "Amsoshin AI suna yin kuskure fiye da yadda mutane ke tsammani", "Yana tsawaita gwajin", "Ɗalibai suna son haka"], answer: 1, why: "Kurakurai a amsoshi suna ɓatar da ɗalibai." },
          { objective: "O2", q: "A ina ya kamata ku ajiye prompt da ke aiki da kyau?", options: ["Babu inda", "A cikin imel ga iyaye", "A asusun wani ɗalibi", "A katin prompt na tare"], answer: 3, why: "Prompt na tare da aka gwada suna ceton lokacin abokan aiki." }
        ]
      }
    },
    {
      name: "Babi na 2: Zaɓar kayan aiki da ke lafiya ga ɗalibai",
      lessons: [
        {
          objectives: ["O4"],
          title: "Karanta sharuɗɗan sirri na kayan aiki da jerin dubawa",
          minutes: 6,
          goal: "Duba manufar sirri da sharuɗɗan kayan AI da gajeren jerin dubawa.",
          text: [
            "Ofishin Manufofin Sirrin Ɗalibai na Ma'aikatar Ilimi ta Amurka (Student Privacy Policy Office) yana wallafa jerin dubawa mai suna Model Terms of Service don taimaka wa makarantu duba manufar sirri da sharuɗɗan kayan intanet kafin su yi rajista. Ku yi amfani da shi, ko jerin dubawa da gundumarku ke da shi tuni.",
            "Muhimman tambayoyi: Waɗanne bayanan ɗalibai yake tattarawa? Wane ne ke mallakar bayanan? Kamfanin yana amfani da bayanan ɗalibai don talla ko don horar da samfuran AI ɗinsa? Makaranta za ta iya sa a goge bayanai, kuma yaushe? Wa kuma ke samun bayanan? Yaya ake kare su, kuma me zai faru idan an yi kutse? Kamfanin zai iya canja sharuɗɗan ba tare da ya sanar da ku ba?",
            "Ku karanta manufar don tsarin (plan) da za ku yi amfani da shi a zahiri; tsarin kyauta na jama'a da tsarin ilimi sau da yawa suna da sharuɗɗa daban-daban. Idan amsoshin ba su da sarari, amsar ita ce \"ba tukuna ba\". FERPA da COPPA su ne mafi ƙarancin kariya, kuma jiharku na iya samun dokokin sirrin ɗalibai masu tsanani fiye da haka; jami'in sirri na gundumarku zai iya faɗa muku waɗanne ne ke aiki."
          ],
          steps: ["Ku buɗe manufar sirri da sharuɗɗan kayan aikin don tsarin da za ku yi amfani da shi.", "Ku bi jerin dubawa: bayanan da ake tattarawa, mallaka, talla da horarwa, gogewa, rabawa, tsaro, canje-canje.", "Ku nuna kowane abu a matsayin a sarari, ba a sarari ba, ko matsala.", "Ku tambayi kamfanin game da abubuwan da ba su da sarari a rubuce.", "Ku aika sakamakon ga jami'in sirri na gundumarku."],
          words: [["Manufar sirri (privacy policy)", "bayanin kamfani na irin bayanan da yake tattarawa da yadda yake amfani da su."], ["Sharuɗɗan amfani (terms of service)", "dokoki da yarjejeniyar amfani da wani kaya."], ["Kutsen bayanai (data breach)", "lokacin da aka shiga ko aka fitar da bayanai ba tare da izini ba."]],
          slides: [
            { title: "Ku yi amfani da jerin dubawa", bullets: ["Model Terms of Service (studentprivacy.ed.gov)", "Ko jerin dubawar gundumarku"] },
            { title: "Muhimman tambayoyi", bullets: ["Waɗanne bayanai, wane ne ke mallakarsu", "Talla ko horar da AI da bayanan ɗalibai?", "Gogewa, rabawa, tsaro, kutse"] },
            { title: "Ku karanta tsarin da ya dace", bullets: ["Sharuɗɗan jama'a da na ilimi sun bambanta", "Rashin sarari yana nufin \"ba tukuna ba\"", "Ku tambayi jami'in sirri game da dokokin jiha"] }
          ],
          sources: [{ name: "Privacy and Education Technology: jerin dubawar Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }, { name: "FERPA: Kare sirrin ɗalibai", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Ku zaɓi kayan AI ɗaya da ma'aikatanku ke so. Ku karanta manufar sirrinsa don tsarin da za ku yi amfani da shi, kuma ku nuna kowane abu na jerin dubawa a matsayin a sarari, ba a sarari ba, ko matsala.",
          youCanNow: "duba sharuɗɗan sirri na kayan AI da jerin dubawa kafin a yi amfani da shi da ɗalibai.",
          quickCheck: [
            { objective: "O4", q: "Wace ce tambayar jerin dubawar sirri?", options: ["Tambarin kayan yana da kyau?", "Mutane nawa ke amfani da shi?", "Kamfanin yana amfani da bayanan ɗalibai don horar da AI ɗinsa?", "Yana aiki a tablet?"], answer: 2, why: "Ko bayanan ɗalibai suna horar da AI babbar tambayar sirri ce." },
            { objective: "O4", q: "Sharuɗɗan sirri na tsarin kyauta sun bambanta da na tsarin ilimi. Wanne za ku duba?", options: ["Duk wanda ya fi gajarta", "Tsarin kyauta, domin ya fi arha", "Babu ɗaya; duk sharuɗɗa iri ɗaya ne", "Sharuɗɗan tsarin da makarantarku za ta yi amfani da shi a zahiri"], answer: 3, why: "Tsarin kyauta na jama'a da tsarin ilimi sau da yawa suna da sharuɗɗa daban-daban." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dokokin shekaru da asusun ɗalibai",
          minutes: 5,
          goal: "Duba dokokin shekaru na kayan aiki da yadda COPPA ke aiki kafin ɗalibai su shiga.",
          text: [
            "Kayan AI da yawa suna saita mafi ƙarancin shekaru da dokokin izinin iyaye a cikin sharuɗɗansu, kuma waɗannan suna canjawa. Ku duba sharuɗɗan kowane kaya na yanzu; kada ku dogara da abin da abokin aiki ya tuna. Kayan da ya dace da malamai ƙila ba a yarda ɗalibai su yi amfani da shi ba kwata-kwata.",
            "Ga yara ƴan ƙasa da shekara 13, COPPA tana aiki a kan hidimar intanet. Hukumar FTC (hukumar kasuwanci ta tarayyar Amurka) ta ce makaranta za ta iya ba da izini a madadin iyaye ne kawai idan hidimar tana tattara bayanan ɗalibai don amfani da amfanin makarantar, ba don wata manufar kasuwanci daban ba. FTC ta kuma ba da shawara, a matsayin kyakkyawar al'ada, cewa makarantu su sanar da iyaye waɗanne hidimomin intanet suka amince da su.",
            "Ku fi son asusun ɗalibai da makaranta ke sarrafawa ƙarƙashin yarjejeniyar gunduma, maimakon ɗalibai su yi rajista da kansu da imel ɗinsu na kansu. Ku yanke tun da wuri abin da ɗalibai za su iya amfani da AI a kai, kuma ku sanar da iyalai."
          ],
          steps: ["Ku karanta dokokin shekaru da izini na kayan aikin na yanzu.", "Idan ɗalibai ƴan ƙasa da shekara 13 ne, ku duba yadda izinin COPPA zai yi aiki.", "Ku fi son asusun da makaranta ke sarrafawa ƙarƙashin yarjejeniya.", "Ku sanar da iyalai waɗanne hidimomi aka amince da su.", "Ku yanke abin da ɗalibai za su iya amfani da shi a kai."],
          words: [["Mafi ƙarancin shekaru", "shekarun da suka fi ƙanƙanta da sharuɗɗan kaya suka yarda a yi amfani da shi."], ["Asusun da makaranta ke sarrafawa", "asusun ɗalibi da makaranta ta ƙirƙira kuma take sarrafawa."]],
          slides: [
            { title: "Ku duba dokokin shekaru na kowane kaya", bullets: ["An saita su a cikin sharuɗɗan kayan da kansa", "Suna canjawa: ku karanta na yanzu", "Dacewa da malami ba dacewa da ɗalibi ba ne"] },
            { title: "Ƙasa da shekara 13: COPPA", bullets: ["Izinin makaranta don amfanin makaranta kaɗai", "Ba wata manufar kasuwanci daban", "Ku sanar da iyaye abin da kuka amince da shi"] },
            { title: "Asusu", bullets: ["Makaranta ke sarrafawa, ƙarƙashin yarjejeniya", "Ba rajistar kai ba", "Ku sanar da iyalai amfanin da aka yarda da shi"] }
          ],
          sources: [{ name: "FTC: Bin dokar COPPA, tambayoyin da ake yawan yi", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Don kayan aikin Darasi na 4, ku nemo mafi ƙarancin shekarunsa da dokar izinin iyaye na yanzu a cikin sharuɗɗansa. Ku rubuta ko ɗalibai a makarantarku za su iya amfani da shi, da yadda.",
          youCanNow: "duba dokokin shekaru na kayan aiki da izinin COPPA kafin kowane ɗalibi ya shiga.",
          quickCheck: [
            { objective: "O5", q: "Yaya ya fi kyau a saita asusun ɗalibai a kayan AI?", options: ["Ɗalibai su yi rajista da imel ɗinsu na kansu", "Malamai su raba shiga ɗaya da aji", "Asusun da makaranta ke sarrafawa ƙarƙashin yarjejeniya", "Babu asusu; ɗalibai su yi amfani da asusun iyaye"], answer: 2, why: "Asusun da makaranta ke sarrafawa ƙarƙashin yarjejeniya suna ajiye bayanan ɗalibai ƙarƙashin ikon makaranta." },
            { objective: "O5", q: "Wani abokin aiki ya ce wani kaya ya dace da ƴan shekara 10. Me za ku duba?", options: ["Sharuɗɗan kayan na yanzu don mafi ƙarancin shekaru da dokar izinin iyaye", "Ra'ayi a kafofin sada zumunta", "Ko wasu makarantu suna amfani da shi", "Babu komai; ku amince da abokin aikin"], answer: 0, why: "Dokokin shekaru suna canjawa, don haka ku duba sharuɗɗan kayan na yanzu da kanku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Wallafa jerin kayan aiki kore-rawaya-ja",
          minutes: 6,
          goal: "Wallafa jeri mai sauƙi da ke faɗa wa ma'aikata waɗanne kayan AI aka amince da su, kuma don me.",
          text: [
            "Ma'aikata suna buƙatar amsa mai sauƙi ga tambayar \"zan iya amfani da wannan?\". Jerin kore-rawaya-ja yana ba da ita. Kore: an amince da shi ƙarƙashin yarjejeniyar gunduma, ana iya amfani da shi da bayanan ɗalibai yadda yarjejeniyar ta yarda. Rawaya: an yarda da shi don ayyukan malami ba tare da bayanan ɗalibai ba (ra'ayoyin darasi, kayan karatu na gama-gari). Ja: ba a yarda ba, saboda matsalolin sirri, shekaru ko inganci.",
            "Ga kowane kaya, ku rubuta launi, dalili, amfanin da aka yarda da shi, ko ɗalibai za su iya amfani da shi, da ranar da kuka duba. Jami'in sirri na gundumarku ko ƙungiyar fasaha ya kamata su yarda da jerin kore.",
            "Ku haɗa jerin da katin prompt ɗinku don ma'aikata su san abin da za su yi amfani da shi da yadda za su yi amfani da shi da kyau. Ku sake duba dukansu a kowane zangon karatu, domin kayan aiki da sharuɗɗa suna canjawa."
          ],
          steps: ["Ku rubuta jerin kayan da kuka duba.", "Ku ba kowanne launi: kore, rawaya ko ja.", "Ku rubuta dalili, amfanin da aka yarda da shi, amfanin ɗalibai da ranar dubawa.", "Ku sa jami'in sirri ko ƙungiyar fasaha su tabbatar.", "Ku raba shi tare da katin prompt; ku sake duba a kowane zangon karatu."],
          words: [["Jerin da aka amince da shi", "jerin kayan da aka wallafa da ma'aikata za su iya amfani da su, da yadda."], ["Yarjejeniya", "kwangila da aka sa hannu ko yarjejeniyar sirrin bayanai tsakanin gunduma da kamfani."]],
          slides: [
            { title: "Launuka uku", bullets: ["Kore: an amince ƙarƙashin yarjejeniya", "Rawaya: ayyukan malami, babu bayanan ɗalibai", "Ja: ba a yarda ba"] },
            { title: "Ga kowane kaya ku rubuta", bullets: ["Launi da dalili", "Amfanin da aka yarda da shi da amfanin ɗalibai", "Ranar dubawa"] },
            { title: "Ku sa shi ya yi amfani", bullets: ["Ku tabbatar da ƙungiyar sirri ko fasaha", "Ku raba shi tare da katin prompt", "Ku sake duba a kowane zangon karatu"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina kayan farkonku, katin prompt mai prompt uku da kuka gwada (imel ga iyaye, rubutu mai matakai, tambayoyin atisaye) da jerin kore-rawaya-ja na aƙalla kayan aiki uku da aka duba da jerin dubawar sirri, kowanne da dalili a layi ɗaya.",
          youCanNow: "ba ma'aikata jagora mai sauƙi kuma amintacce na waɗanne kayan AI za su yi amfani da su da yadda za su yi amfani da su.",
          quickCheck: [
            { objective: "O6", q: "Me kayan KORE ke nufi a jerin?", options: ["Kyauta ne", "Ana iya amfani da shi, har da bayanan ɗalibai yadda yarjejeniyar gunduma ta yarda", "An hana shi", "Ɗalibai ne kaɗai za su iya amfani da shi"], answer: 1, why: "An amince da kayan kore, kuma ana yarda da bayanan ɗalibai ne kawai yadda yarjejeniyar ta yarda." },
            { objective: "O6", q: "Sharuɗɗan wani kaya sun canja tun da aka yi jerinku. Me za ku yi?", options: ["Ku bar jerin yadda yake har shekara mai zuwa", "Ku goge dukkan jerin", "Ku sake duba kayan, ku sabunta launinsa da ranar dubawa", "Ku faɗa wa ma'aikata su yanke shawara da kansu"], answer: 2, why: "Jerin yana nuna ranar dubawa don ya ci gaba da kasancewa sabo yayin da sharuɗɗa ke canjawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Zaɓar kayan aiki da ke lafiya ga ɗalibai",
        questions: [
          { objective: "O4", q: "A ina za ku sami jerin dubawar Model Terms of Service?", options: ["Wani rubutu a kafofin sada zumunta", "Tallar wani kamfani", "studentprivacy.ed.gov", "Tambarin kayan"], answer: 2, why: "Ofishin Manufofin Sirrin Ɗalibai ne ya wallafa shi." },
          { objective: "O4", q: "Manufar sirrin wani kaya ba ta da sarari game da horar da AI da bayanan ɗalibai. Mene ne hukuncinku?", options: ["\"Ba tukuna ba\": ku tambayi kamfanin a rubuce", "Ku amince da shi", "Ku bar ɗalibai su yanke shawara", "Ku yi watsi da tambayar"], answer: 0, why: "Amsoshin da ba su da sarari suna nufin kayan bai shirya don amincewa ba." },
          { objective: "O5", q: "Wani abokin aiki ya ce mafi ƙarancin shekarun wani kaya 13 ne. Me ya kamata ku yi?", options: ["Ku amince da haka", "Ku duba sharuɗɗan kayan na yanzu da kanku", "Ku tambayi ɗalibi", "Ku ɗauka cewa babu iyaka"], answer: 1, why: "Kowane kaya ne ke saita dokokin shekaru, kuma suna canjawa." },
          { objective: "O6", q: "Me kayan RAWAYA ke nufi a jerin?", options: ["Ayyukan malami kaɗai, ba tare da bayanan ɗalibai ba", "An amince da shi don duk bayanan ɗalibai", "An hana shi", "Na iyaye ne kaɗai"], answer: 0, why: "Rawaya yana yarda da amfanin malami na gama-gari ba tare da bayanan ɗalibai ba." },
          { objective: "O6", q: "Sau nawa ya kamata a sake duba jerin kayan aiki?", options: ["Ba sau ɗaya ba", "Bayan kutse kawai", "Duk bayan shekaru goma", "A kowane zangon karatu"], answer: 3, why: "Kayan aiki da sharuɗɗa suna canjawa sau da yawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Shugabannin Makaranta da na Ilimi 2: Kayan AI ga Malamai",
    questions: [
      { objective: "O1", q: "Wanne ne mataimakin AI na gama-gari?", options: ["Littafin maki", "Google Gemini", "Na'urar haska hoto (projector)", "Jadawalin kararrawa"], answer: 1, why: "Gemini, ChatGPT, Copilot da Claude mataimaka ne na gama-gari." },
      { objective: "O1", q: "Mataimaka na gama-gari suna sanin manhajar karatunku:", options: ["Daga bayanan ɗalibanku", "Koyaushe", "Sai kun faɗa musu kawai", "Daga jadawalin kararrawa"], answer: 2, why: "Suna buƙatar bayani a cikin prompt." },
      { objective: "O1", q: "Dandalin AI na ilimi dole ne:", options: ["Ɗalibai su biya kuɗinsu", "A yi amfani da su ba tare da dubawa ba", "A duba su don sirri da inganci", "A hana su"], answer: 2, why: "Kowane kayan aiki yana buƙatar dubawa." },
      { objective: "O2", q: "Prompt na malami mai sassa biyar ya haɗa da:", options: ["Matsayi, masu koyo, manufa, iyakoki, tsari", "Sunaye, maki, IEP, adireshi, lambobin waya", "Batun kawai", "Kalmar sirri"], answer: 0, why: "Waɗannan sassa suna kawo sakamako mai amfani." },
      { objective: "O2", q: "Tambayar biyo baya mai kyau ita ce:", options: ["\"Ka goge amsar.\"", "\"Ga sunayen ɗalibaina.\"", "\"Ka ba ajina maki.\"", "\"Ka sauƙaƙa mataki na 1.\""], answer: 3, why: "Tana inganta sakamakon ba tare da bayanan sirri ba." },
      { objective: "O2", q: "Katin prompt shi ne:", options: ["Katin shaidar ɗalibi", "Jerin prompt da aka gwada da ake rabawa", "Takardar izinin ajiye mota", "Katin sakamakon ɗalibi"], answer: 1, why: "Yana bar abokan aiki su sake amfani da abin da ke aiki." },
      { objective: "O3", q: "Rubutu mai matakai yana nufin:", options: ["Girman haruffa", "Rubutu a kan shiryayye", "Makin gwaji", "Abu ɗaya a matakan karatu daban-daban"], answer: 3, why: "Yana faɗaɗa damar samun ra'ayoyi iri ɗaya." },
      { objective: "O3", q: "Idan AI ya sauƙaƙa rubutu, ya kamata ku:", options: ["Tsawaita shi", "Amince da shi", "Duba cewa bayanan sun kasance daidai", "Cire duk bayanan"], answer: 2, why: "Sauƙaƙawa na iya kawo kurakurai." },
      { objective: "O3", q: "A ayyukan malami da AI ke taimakawa, malami shi ne:", options: ["Editan, kuma mai duba na ƙarshe", "Ba a buƙatarsa", "Mataimakin AI", "Mai karatu kawai"], answer: 0, why: "Malamai ne ke da alhakin abin da ke isa ga ɗalibai." },
      { objective: "O4", q: "Wace tambaya ce ke cikin jerin dubawar sirri?", options: ["Wane launi ne manhajar?", "Kamfanin yana amfani da bayanan ɗalibai don horar da AI ɗinsa?", "An sauke shi sau nawa?", "Yana da farin jini?"], answer: 1, why: "Amfani da bayanan ɗalibai don horarwa babbar damuwa ce." },
      { objective: "O4", q: "Tsarin kyauta na jama'a da tsarin ilimi:", options: ["Sau da yawa suna da sharuɗɗa daban-daban", "Koyaushe suna da sharuɗɗa iri ɗaya", "Ba sa taɓa tattara bayanai", "Dukansu ba su da lafiya"], answer: 0, why: "Ku karanta sharuɗɗan tsarin da za ku yi amfani da shi." },
      { objective: "O4", q: "Wa ya kamata ya tabbatar da jerin kore ɗinku?", options: ["Babu kowa", "Ɗalibi", "Kamfanin", "Jami'in sirri na gunduma ko ƙungiyar fasaha"], answer: 3, why: "Amincewa tana buƙatar mutanen da ke da alhakin sirri." },
      { objective: "O4", q: "Dokokin sirrin ɗalibai na jiha:", options: ["Ba su taɓa wanzuwa ba", "Suna iya ƙara buƙatu fiye da FERPA da COPPA", "Suna maye gurbin dokar tarayya gaba ɗaya", "Na jami'o'i ne kaɗai"], answer: 1, why: "Dokar tarayya ita ce mafi ƙaranci; jihohi na iya ƙara wasu." },
      { objective: "O5", q: "A ƙarƙashin COPPA, izinin makaranta yana aiki ne kawai idan ana tattara bayanai:", options: ["Don kowane dalili", "Don talla", "Don amfani da amfanin makaranta, ba don wata manufar kasuwanci daban ba", "Ba sau ɗaya ba"], answer: 2, why: "Wannan shi ne sharaɗin FTC." },
      { objective: "O5", q: "FTC ta ba da shawarar makarantu su:", options: ["Bar ɗalibai su amince da kayan aiki", "Ɓoye abubuwan da suka amince da su", "Sanar da iyaye waɗanne hidimomin intanet suka amince da su", "Guje wa duk kayan aiki"], answer: 2, why: "Al'ada ce da aka ba da shawara." },
      { objective: "O5", q: "Ya fi kyau asusun ɗalibai su kasance:", options: ["Makaranta ke sarrafawa ƙarƙashin yarjejeniya", "Rajistar kai da imel na gida", "Dukan aji suna rabawa", "Kamfanin ne ya ƙirƙira"], answer: 0, why: "Asusun da makaranta ke sarrafawa suna ajiye iko a hannun makaranta." },
      { objective: "O6", q: "Kayan JA shi ne:", options: ["Ana duba shi har abada", "An amince da shi don kowane amfani", "Don ayyukan malami kaɗai", "Ba a yarda da shi ba"], answer: 3, why: "Ja yana nufin kada a yi amfani da shi." },
      { objective: "O6", q: "Ana iya amfani da kayan KORE da bayanan ɗalibai:", options: ["Ba tare da wata iyaka ba", "Yadda yarjejeniyar gunduma ta yarda", "Ba sau ɗaya ba", "A ƙarshen mako kawai"], answer: 1, why: "Yarjejeniyar ce ke saita iyakoki." },
      { objective: "O6", q: "Kowane kaya a jerin ya kamata ya nuna:", options: ["Yawan saukar da shi", "Tambarinsa kawai", "Farashinsa kawai", "Launi, dalili, amfanin da aka yarda da shi da ranar dubawa"], answer: 3, why: "Ma'aikata suna buƙatar dalili da iyakoki." },
      { objective: "O3", q: "Atisaye a wannan kwas ya kamata ya yi amfani da:", options: ["Sunayen ɗalibai", "Bayanan ɗalibai na gaske", "Misalan ƙirƙira", "Takardun IEP"], answer: 2, why: "Kada ku taɓa amfani da bayanan da ke nuna ko wane ne ɗalibi a atisaye." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 7, 8, 9, 10, 13, 15, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Katin prompt", objective: "O2", notYet: "Prompt ƙasa da uku, ko prompt da ke rasa wasu sassa.", meets: "Prompt uku da aka gwada (imel ga iyaye, rubutu mai matakai, tambayoyin atisaye) masu matsayi, masu koyo, manufa, iyakoki da tsari.", exceeds: "Kowane prompt yana da tambayar biyo baya mai amfani da ma'aikata za su iya sake amfani da ita." },
      { name: "An duba sakamako", objective: "O3", notYet: "An yi amfani da sakamako ba tare da dubawa ba, ko ba a warware amsoshi ba.", meets: "An duba kowane sakamako kuma an gyara kurakurai; an warware kowace amsa a cikin amsoshin.", exceeds: "Ya rubuta kurakurai nawa aka samu da irinsu." },
      { name: "Jerin dubawar sirri", objective: "O4", notYet: "Ba a duba kayan aiki ba, ko jerin dubawa bai dogara da albarkatun Model Terms of Service ba.", meets: "An duba kowane kaya da jerin dubawar sirri da aka gina daga albarkatun Model Terms of Service a studentprivacy.ed.gov.", exceeds: "An aika abubuwan da ba su da sarari ga kamfanin a matsayin tambayoyi a rubuce." },
      { name: "Dokokin shekaru", objective: "O5", notYet: "An yarda ɗalibai su yi amfani ba tare da duba dokokin shekaru ba.", meets: "Ya rubuta mafi ƙarancin shekaru da dokar izinin iyaye na kowane kaya na yanzu daga sharuɗɗansa.", exceeds: "Ya bayyana yadda ɗalibai za su iya amfani da shi, kamar asusun da makaranta ke sarrafawa." },
      { name: "Jerin kore-rawaya-ja", objective: "O6", notYet: "Kayan aiki ƙasa da uku, ko launuka ba tare da dalilai ba.", meets: "Aƙalla kayan aiki uku, kowanne da launi da dalili a layi ɗaya.", exceeds: "Yana kuma nuna amfanin da aka yarda da shi da ranar dubawa, kuma an aika shi ga jami'in sirri ko ƙungiyar fasaha don tabbatarwa." }
    ]
  },
  evaluation: {
    results: [
      "Shugabannin da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Makarantun da suka wallafa jerin kayan AI kore-rawaya-ja cikin kwanaki 30 (binciken biyo baya)",
      "Malaman da suka ce suna amfani da katin prompt na tare don ayyukan mako-mako (binciken biyo baya)",
      "Shugabannin da suka ci gaba zuwa kwas na 3 na AI ga Shugabannin Makaranta da na Ilimi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet da aƙalla mataimakin AI kyauta ɗaya",
      "Albarkatun Model Terms of Service daga studentprivacy.ed.gov",
      "Misalan ƙirƙira don ayyukan atisaye",
      "Jerin kayan aiki da yarjejeniyoyin da gundumarku ta amince da su, idan akwai",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi ayyuka uku na yau da kullum kai tsaye da bayanan ƙirƙira.",
      "Kada ku taɓa amfani da sunayen ɗalibai na gaske, makinsu ko bayanan IEP a atisaye.",
      "Ku raba ƙungiyar don kowane biyu su duba kaya daban, sannan ku haɗa sakamakon zuwa daftarin jeri ɗaya.",
      "Ku gayyaci jami'in sirri na gunduma ko ƙungiyar fasaha su duba daftarin jerin.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku duba cewa an rubuta ranar dubawa ta kowane kaya."
    ]
  }
};
