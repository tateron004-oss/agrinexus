"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-nonprofit-leadership.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-nonprofit-leadership-ha",
  lang: "ha",
  translationOf: "underserved-ai-nonprofit-leadership",
  category: "Undeserved Community",
  name: "AI don Shugabancin Ƙungiyoyin Sa-kai",
  skills: "Rubuta manufa da buri a sarari, Tsara shiri da AI, Shirya masu aikin sa-kai lafiya, Nemo tallafi (grant) da taƙaita shi, Sanar da magoya baya, Kafa dokoki masu sauƙi na AI ga ƙungiyarku",
  outcome: "amfani da mataimakin AI kyauta don rubuta shirin aiki na shafi ɗaya ga ƙungiyar al'ummarku (buri, jadawali, ayyukan masu aikin sa-kai da gajeren taƙaitaccen bayanin tallafi), da kafa dokoki masu sauƙi kan yadda ƙungiyarku za ta yi amfani da AI lafiya.",
  about: [
    "Wannan kwas na mutanen da ke jagorantar ayyukan al'umma ne, ko masu son jagoranta: rumbun abinci kyauta, ƙungiyar masu haya, hidimar coci ko masallaci, shirin matasa, ƙungiyar unguwa ko ƙaramar ƙungiyar sa-kai (nonprofit). Sau da yawa kuna yin hakan da ɗan kuɗi kaɗan, ma'aikata kaɗan, amma da zuciya mai yawa.",
    "Za ku yi amfani da mataimakin AI kyauta don inganta manufarku, tsara shiri, shirya masu aikin sa-kai, nemo damar tallafi (grant) da sanar da magoya baya, yayin da kuke kare mutanen da kuke yi wa hidima. AI yana rage lokacin rubutu da tsarawa; ku ne ke kawo hikima, dangantaka da sanin al'umma.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" da ke gina shirinku na gaske. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Don tambayoyin doka, haraji ko matsayin ƙungiyar sa-kai, ku duba majiyoyin hukuma kamar irs.gov da ofishin attorney general ko secretary of state na jiharku."
  ],
  finalTask: "Ku rubuta shirin aiki na shafi ɗaya don wani aikin al'umma na gaske ko na atisaye, tare da taimakon mataimakin AI kyauta: manufa a jimla ɗaya, buri ɗaya da za a iya aunawa, jadawali mai sauƙi, ayyuka uku na masu aikin sa-kai (da matakan tsaro idan akwai yara), taƙaitaccen bayanin tallafi mai jimloli biyar, da dokoki biyar masu sauƙi kan yadda ƙungiyarku za ta yi amfani da AI. Ku cire duk wani bayanin sirri kafin ku raba shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke jagorantar ayyukan al'umma, ko masu son jagoranta, a wuraren da ba a ba su isasshen hidima ba: shugabannin rumbun abinci, ƙungiyar masu haya, hidimar coci ko masallaci, shirin matasa da ƙungiyar unguwa, da ma'aikata ko membobin kwamitin ƙananan ƙungiyoyin sa-kai.",
    startingPoint: "Suna gudanar da shirye-shirye da ɗan kuɗi kaɗan da ma'aikata kaɗan, kuma suna rubuta takardun talla, imel da rahotanni da hannu. Yawancinsu sun yi amfani da mataimakin AI kaɗan ko ba su taɓa ba, kuma kaɗan ne ke da rubutacciyar manufa, buri da za a iya aunawa, ayyukan masu aikin sa-kai ko dokokin AI.",
    gap: "Ƙananan ƙungiyoyi suna rasa awoyi a kan takardu kuma suna rasa tallafi domin ba su da lokaci da tsare-tsare a sarari. AI zai iya rubuta daftarin yawancin wannan aiki, amma dole shugabanni su kiyaye mutanen da suke yi wa hidima, su tabbatar da kowane bayani, kuma su bar yanke shawara a hannun mutane.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 7)",
      "Na'urori: wayar zamani, ko kwamfutar ɗakin karatu ko ta ofis",
      "Kuɗi: kayan aiki kyauta ko na gudummawa kaɗai",
      "Sirri: babu sunaye, adireshi, lambobin waya, bayanan lafiya ko na shige da fice (immigration) na mutanen da ake yi wa hidima a cikin AI",
      "Tsaro tare da yara da manya masu rauni yana bin dokar ƙungiyar da dokokin jiha"
    ],
    prerequisites: "Babu. Masu koyo da ke sababbi ga mataimakan AI za su iya fara ɗaukar kwas ɗin \"Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ayyukan da ƙungiyarku ke yi kowane wata", action: "gane waɗanda AI zai iya taimakawa wajen rubuta daftarinsu da waɗanda ke buƙatar mutane", standard: "kuna ambaton aƙalla ayyuka uku ga AI da aikin ɗan Adam da yake ba ku lokacinsa" },
    { id: "O2", condition: "Idan aka ba ku abin da ƙungiyarku ke yi", action: "rubuta manufa a jimla ɗaya da buri ɗaya da za a iya aunawa tare da taimakon AI", standard: "an gyara su tare da ƙungiyarku ta yadda suke faɗin su wa, me da dalili, kuma za a iya ƙirga burin zuwa wata rana" },
    { id: "O3", condition: "Idan aka ba ku burin shiri ko taro", action: "ƙirƙiri jadawali da jerin ayyuka da AI", standard: "kuna ƙara abin da AI ya manta, kuma kuna saka suna da rana a gefen kowane aiki" },
    { id: "O4", condition: "Idan aka ba ku ayyukan masu aikin sa-kai a shirinku", action: "rubuta gajerun bayanan ayyukan masu aikin sa-kai da matakan tsaron da suke buƙata", standard: "kuna bin dokar ƙungiyarku idan akwai yara ko manya masu rauni, kuma ba ku saka sunaye na gaske a AI ba" },
    { id: "O5", condition: "Idan aka ba ku aikin da ke buƙatar kuɗi", action: "nemo damar tallafi ɗaya da rubuta daftarin taƙaitaccen bayanin tallafi mai jimloli biyar da AI", standard: "kowane bayani ya yi daidai da bayananku, kuma an bi dokokin mai ba da tallafin" },
    { id: "O6", condition: "Idan kuna raba sakamako kuma kuna amfani da AI a matsayin ƙungiya", action: "rubuta saƙon labari ga magoya baya da dokoki biyar masu sauƙi na AI ga ƙungiyarku", standard: "kuna amfani da labaran mutane ne kawai da rubutaccen izini, kuma yanke shawara game da mutane yana hannun mutane" }
  ],
  chapters: [
    {
      name: "Babi na 1: Jagoranci da tsarawa da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da AI zai iya yi wa ƙungiyar al'umma",
          minutes: 4,
          goal: "Ku jera ayyuka uku masu cin lokaci a ƙungiyarku da AI zai iya taimakawa da su.",
          text: [
            "Shugabannin al'umma suna kashe awoyi wajen rubuta takardun talla, imel, bayanan taro, jerin sunayen masu rajista da rahotanni. Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini zai iya rubuta daftarinsu cikin mintoci.",
            "AI yana da kyau wajen daftarin farko, taƙaitawa, jerin abubuwan dubawa, jadawali, mayar da takardar talla zuwa kalmomi masu sauƙi, da tunanin sababbin ra'ayoyi. Ba shi da kyau wajen sanin maƙwabtanku, yanke hukuncin abin da al'ummarku ke buƙata da gaske, ko kiyaye labaran sirri.",
            "Shugaba nagari yana amfani da AI don samun lokaci don aikin ɗan Adam: sauraro, gina amana, da zuwa wurin da ake buƙatarsa."
          ],
          words: [["Ƙungiyar sa-kai (nonprofit)", "ƙungiyar da ke bauta wa manufa maimakon neman riba ga masu ita."], ["Daftari (draft)", "sigar farko da za ku inganta."]],
          slides: [
            { title: "Inda shugabanni ke kashe lokaci", bullets: ["Takardun talla, imel da bayanan taro", "Jerin sunayen masu rajista da rahotanni"] },
            { title: "AI yana da kyau wajen", bullets: ["Daftarin farko da taƙaitawa", "Jerin abubuwan dubawa da jadawali", "Sake rubutu da kalmomi masu sauƙi, da ra'ayoyi"] },
            { title: "AI ba shi da kyau wajen", bullets: ["Sanin maƙwabtanku", "Yanke hukuncin ainihin buƙatun al'umma", "Kiyaye labaran sirri"] }
          ],
          tryIt: "Ku rubuta ayyuka uku da suka fi cin lokacin ƙungiyarku kowane wata. A gefen kowanne, ku rubuta yadda AI zai iya taimakawa da daftarin farko.",
          youCanNow: "gane ayyukan ƙungiyarku da AI zai iya hanzartawa, da waɗanda ke buƙatar mutane.",
          quickCheck: [
            { objective: "O1", q: "Me AI yake da kyau a kai ga ƙungiyar al'umma?", options: ["Rubuta daftarin farko na bayanan taro", "Sanin maƙwabtanku", "Yanke hukuncin abin da al'ummarku ke buƙata", "Kiyaye labaran sirri"], answer: 0, why: "AI yana da kyau wajen daftari da taƙaitawa; mutane ne suka san al'umma." },
            { objective: "O1", q: "AI yana rage muku awoyi uku a mako na aikin takardu. Mene ne mafi kyawun amfani da wannan lokacin?", options: ["Ƙarin aikin takardu", "Sauraron iyalai da gina amana", "Barin AI ya yi magana da iyalai a madadinku", "Babu komai"], answer: 1, why: "Shugabanni suna amfani da AI don samun lokaci don aikin ɗan Adam kamar sauraro da zuwa wurin mutane." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Manufa a sarari da buri da za a iya aunawa",
          minutes: 5,
          goal: "Ku rubuta manufa a jimla ɗaya da buri ɗaya da za a iya aunawa tare da taimakon AI.",
          text: [
            "Manufa (mission) tana faɗin dalilin da yasa ƙungiyarku take nan a jimla ɗaya: su wa kuke yi wa hidima, me kuke yi, da me yasa yake da muhimmanci. Misali: \"Muna tabbatar da cewa babu iyalin da ke jin yunwa a Gabashin gari ta hanyar gudanar da rumbun abinci kyauta kowane mako.\"",
            "Buri (goal) yana faɗin abin da za ku cimma da lokacin da za ku cimma shi, ta yadda za ku iya ƙirgawa. \"Taimaka wa mutane da yawa\" ba za a iya auna shi ba. \"Yi wa iyalai 150 hidima a wata kafin watan Yuni\" ana iya auna shi.",
            "Ku tambayi AI: \"Ga abin da ƙungiyarmu ke yi: [bayani]. Ka rubuta manufofi uku na jimla ɗaya da kalmomi masu sauƙi, da buri biyu da za a iya aunawa na watanni shida masu zuwa.\" Sannan ku zaɓa ku gyara tare da ƙungiyarku don kalmomin su yi kama da na al'ummarku."
          ],
          steps: ["Ku bayyana su wa kuke yi wa hidima, me kuke yi da dalili.", "Ku nemi AI ya ba ku zaɓuɓɓuka uku na manufa da buri biyu da za a iya aunawa.", "Ku zaɓi ɗaya daga kowanne tare da ƙungiyarku.", "Ku gyara su don su yi kama da al'ummarku."],
          words: [["Manufa (mission)", "jimla ɗaya da ke faɗin dalilin da yasa ƙungiyarku take nan."], ["Buri da za a iya aunawa", "burin da za ku iya ƙirgawa ku duba zuwa wata rana."]],
          slides: [
            { title: "Manufa: dalilin da yasa kuke nan", bullets: ["Su wa kuke yi wa hidima", "Me kuke yi", "Me yasa yake da muhimmanci"] },
            { title: "Buri: abin da za ku cimma", bullets: ["Ba za a iya auna shi ba: \"Taimaka wa mutane da yawa\"", "Ana iya auna shi: \"Yi wa iyalai 150 hidima a wata kafin Yuni\""] },
            { title: "AI ya rubuta daftari, ku yanke shawara tare", bullets: ["Ku nemi manufofi uku da buri biyu", "Ku zaɓa ku gyara tare da ƙungiyarku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya ba ku manufofi uku da buri biyu da za a iya aunawa ga ƙungiyarku. Ku zaɓi ɗaya daga kowanne ku gyara su da kalmominku.",
          youCanNow: "rubuta manufa a sarari da buri da za a iya aunawa ga ƙungiyarku.",
          quickCheck: [
            { objective: "O2", q: "Me ke sa a iya auna buri?", options: ["Yana ƙarfafa gwiwa", "Yana da tsawo sosai", "Kuna iya ƙirga shi zuwa wata rana", "Yana amfani da manyan kalmomi"], answer: 2, why: "Buri da za a iya aunawa yana faɗin abin da za ku cimma da lokacin, ta yadda za ku iya ƙirgawa." },
            { objective: "O2", q: "Manufar da AI ya rubuta tana amfani da kalmomin da membobinku ba za su taɓa faɗa ba. Me za ku yi?", options: ["Ku yi amfani da ita duk da haka", "Ku nemi AI ya rubuta mai tsawo", "Ku watsar da manufar", "Ku gyara ta tare da ƙungiyarku don ta yi kama da al'ummarku"], answer: 3, why: "Ya kamata manufa ta yi kama da al'ummarku, don haka kuna gyara ta tare." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsara shiri ko taro da AI",
          minutes: 5,
          goal: "Ku yi amfani da AI don yin jadawali mai sauƙi da jerin ayyuka na shiri ko taro.",
          text: [
            "Da zarar kuna da buri, ku tsara aikin. AI zai iya mayar da buri zuwa jadawali (abin da zai faru da lokacinsa) da jerin ayyuka (wa zai yi me).",
            "Misalin prompt: \"Za mu raba kayan makaranta kyauta ga yara 100 a ranar 10 ga Agusta a cibiyar al'umma. Ka yi jadawali mai sauƙi na makonni 6 da jerin ayyuka mai ayyukan masu aikin sa-kai uku. Ka yi amfani da gajerun jimloli.\"",
            "Ku duba shi tare da ƙungiyarku. Ku cire matakan da ba su dace da al'ummarku ba, ku ƙara abin da AI ya manta (kamar izinin hukuma, fassara ko abin hawa ga tsofaffi), sannan ku saka suna da rana a gefen kowane aiki."
          ],
          steps: ["Ku ba AI taron, ranar, wurin da yawan mutane.", "Ku nemi jadawali da jerin ayyuka.", "Ku duba shi tare da ƙungiyarku ku ƙara abin da ya ɓace.", "Ku saka suna da rana a gefen kowane aiki."],
          words: [["Jadawali (timeline)", "jerin abin da zai faru da lokacinsa, bi da bi."], ["Jerin ayyuka (task list)", "jerin ayyuka tare da wanda zai yi kowanne."]],
          slides: [
            { title: "Daga buri zuwa shiri", bullets: ["Jadawali: abin da zai faru da lokacinsa", "Jerin ayyuka: wa zai yi me"] },
            { title: "Misalin prompt", bullets: ["Raba kayan makaranta, yara 100, 10 ga Agusta", "Jadawalin makonni 6 da jerin ayyuka", "Ayyukan masu aikin sa-kai uku, gajerun jimloli"] },
            { title: "Ku mai da shi naku", bullets: ["Ku cire abin da bai dace ba", "Ku ƙara abin da AI ya manta: izini, fassara, abin hawa", "Suna da rana ga kowane aiki"] }
          ],
          tryIt: "Ku nemi AI ya ba ku jadawali da jerin ayyuka na shiri ko taro ɗaya da ƙungiyarku za ta iya yi. Ku ƙara abu ɗaya da AI ya manta, ku saka suna a gefen kowane aiki.",
          youCanNow: "mayar da buri zuwa jadawali da jerin ayyuka tare da AI da ƙungiyarku.",
          quickCheck: [
            { objective: "O3", q: "Mene ne jerin ayyuka?", options: ["Jerin wa zai yi me", "Jerin masu ba da gudummawa", "Kasafin kuɗi", "Bayanin manufa"], answer: 0, why: "Jerin ayyuka yana nuna kowane aiki da wanda zai yi shi." },
            { objective: "O3", q: "Shirin AI na taron cin abinci a waje bai ambaci izinin amfani da filin shaƙatawa ba. Me za ku yi?", options: ["Ku tsallake shi; AI ya fi sani", "Ku ƙara duba izinin a jerin ayyuka tare da suna da rana", "Ku soke taron", "Ku nemi AI ya nemi izinin"], answer: 1, why: "Kuna ƙara abin da AI ya manta, kamar izini, kuma ku ba aikin mai shi da rana." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Jagoranci da tsarawa da AI",
        questions: [
          { objective: "O1", q: "Wane aiki ne AI yake da kyau a kai ga ƙungiyar al'umma?", options: ["Sanin abin da maƙwabtanku ke buƙata", "Rubuta daftarin takardar talla", "Gina amana da iyalai", "Kiyaye labaran sirri"], answer: 1, why: "AI yana da kyau wajen daftarin farko; mutane ne ke yin aikin dangantaka." },
          { objective: "O2", q: "Wanne ne bayanin manufa?", options: ["\"Yi wa iyalai 150 hidima kafin Yuni\"", "\"Taro ranar Talata ƙarfe 6\"", "\"Muna tabbatar da cewa babu iyalin Gabashin gari da ke jin yunwa ta hanyar gudanar da rumbun abinci kyauta kowane mako.\"", "\"Sayi ƙarin kujeru\""], answer: 2, why: "Manufa tana faɗin su wa kuke yi wa hidima, me kuke yi da dalili." },
          { objective: "O2", q: "Wane buri ne za a iya aunawa?", options: ["\"Taimaka wa mutane da yawa\"", "\"Yi alheri\"", "\"Zama mafi kyau\"", "\"Yi wa iyalai 150 hidima a wata kafin Yuni\""], answer: 3, why: "Ana iya ƙirga shi a duba shi zuwa wata rana." },
          { objective: "O3", q: "Shirin taron da AI ya yi ya manta da abin hawa ga tsofaffi. Me za ku yi?", options: ["Ku ƙara shi a shirin", "Ku bi shirin AI daidai yadda yake", "Ku soke taron", "Ku nemi AI ya cire tsofaffi"], answer: 0, why: "Ku kuka san al'ummarku; ku ƙara abin da AI ya manta." },
          { objective: "O3", q: "Me ya kamata ya kasance a gefen kowane aiki a jerinku?", options: ["Hoton emoji", "Suna da rana", "Kalmar sirri", "Babu komai"], answer: 1, why: "Sunaye da ranaku suna tabbatar da cewa an yi ayyukan." }
        ]
      }
    },
    {
      name: "Babi na 2: Mutane, kuɗi da amana",
      lessons: [
        {
          objectives: ["O4"],
          title: "Shirya masu aikin sa-kai, da kiyaye lafiyar kowa",
          minutes: 5,
          goal: "Ku rubuta bayanan ayyukan masu aikin sa-kai a sarari da matakan tsaro.",
          text: [
            "Masu aikin sa-kai suna zama idan sun san abin da za su yi. AI zai iya rubuta gajerun bayanan ayyuka: menene aikin, tsawon lokacin da yake ɗauka, waɗanne ƙwarewa ke taimakawa, da wanda za a tambaya don taimako. Zai iya kuma rubuta daftarin saƙon rajista da saƙonnin tes na tunatarwa.",
            "Idan shirinku yana yi wa yara ko manya masu rauni hidima, tsaro ne farko. Abubuwan da aka saba yi sun haɗa da binciken tarihin masu aikin sa-kai (background check), dokar cewa manya biyu su kasance a wurin maimakon babba ɗaya shi kaɗai tare da yaro, da dokoki a sarari game da tuntuɓa ta waya da kafofin sada zumunta. Ku bi dokar ƙungiyarku da kowace dokar jiha, kuma ku tambayi kamfanin inshorarku ko lauya idan ba ku tabbata ba.",
            "Ku kiyaye bayanan masu aikin sa-kai da na mutanen da kuke yi wa hidima a sirri. Kada ku liƙa sunaye, lambobin waya ko labaran mutane a kayan AI; ku yi amfani da matsayin aiki da madadi a maimakon haka."
          ],
          steps: ["Ku nemi AI ya rubuta gajerun bayanan kowane aikin sa-kai.", "Ku ƙara matakan tsaro idan akwai yara ko manya masu rauni.", "Ku bi dokar ƙungiyarku da dokokin jiha.", "Ku yi amfani da madadi, ba sunaye ko lambobi na gaske ba, a prompt na AI."],
          words: [["Binciken tarihi (background check)", "duba bayanan mutum kafin ya yi aiki da yara ko mutane masu rauni."], ["Dokar manya biyu", "abin tsaro da aka saba yi: aƙalla manya biyu suna tare da yara, ba babba ɗaya shi kaɗai ba."], ["Babba mai rauni", "babban mutum da zai iya buƙatar ƙarin kariya, kamar wasu tsofaffi ko masu nakasa."]],
          slides: [
            { title: "Ayyuka a sarari suna riƙe masu aikin sa-kai", bullets: ["Menene aikin da tsawon lokacinsa", "Ƙwarewa masu taimako", "Wanda za a tambaya don taimako"] },
            { title: "Tsaro tare da yara", bullets: ["Binciken tarihi (background check)", "Manya biyu a wurin, ba ɗaya shi kaɗai ba", "Dokoki kan tuntuɓa ta waya da kafofin sada zumunta"] },
            { title: "Ku bi dokoki", bullets: ["Dokar ƙungiyarku", "Dokokin jiha", "Ku tambayi kamfanin inshorarku ko lauya idan ba ku tabbata ba"] },
            { title: "Ku kare sirri", bullets: ["Babu sunaye ko lambobi na gaske a AI", "Ku yi amfani da matsayin aiki da madadi"] }
          ],
          tryIt: "Ku nemi AI ya rubuta gajerun bayanan ayyukan masu aikin sa-kai uku don shirinku. Idan akwai yara, ku ƙara matakan tsaron da ƙungiyarku ke buƙata.",
          youCanNow: "rubuta ayyukan masu aikin sa-kai a sarari da saka matakan tsaron da ƙungiyarku ke buƙata.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata bayanin aikin mai aikin sa-kai ya ƙunsa?", options: ["Adireshin gidan mai aikin sa-kai", "Sunan aikin kawai", "Menene aikin, tsawon lokacinsa da wanda za a tambaya don taimako", "Lambar wayar mai aikin sa-kai"], answer: 2, why: "Ayyuka a sarari suna faɗin abin da za a yi, tsawon lokaci da wanda za a tambaya." },
            { objective: "O4", q: "Kuna son AI ya rubuta daftarin saƙon tunatarwa ga masu aikin sa-kai. Me za ku liƙa?", options: ["Sunan kowane mai aikin sa-kai da lambar wayarsa", "Sakamakon binciken tarihinsu", "Adireshin gidajensu", "Aikin, rana da lokaci, tare da madadi a maimakon sunaye"], answer: 3, why: "Ku yi amfani da matsayin aiki da madadi, ba sunaye ko lambobi na gaske ba, a prompt na AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nemo tallafi da rubuta taƙaitaccen bayanin tallafi",
          minutes: 6,
          goal: "Ku nemo damar tallafi ɗaya ku rubuta daftarin taƙaitaccen bayanin aikinku mai jimloli biyar.",
          text: [
            "Tallafi (grant) kuɗi ne da ake bayarwa don wata manufa wanda ba za ku mayar ba. Majiyoyin yankinku sau da yawa sun fi dacewa da ƙananan ƙungiyoyi: gidauniyoyin al'umma (community foundations), kamfanonin yankin, bankuna, ƙungiyoyin addini, da shirye-shiryen birni ko gundumar (county). Ɗakin karatunku zai iya ba da taimakon binciken tallafi kyauta.",
            "Grants.gov yana jera tallafin gwamnatin tarayya ta Amurka. Yawancinsu na ƙungiyoyi ne, ba na mutum ɗaya ba, kuma babu ɗayansu da ke ba da taimakon kuɗi na kashin kai. Neman tallafi ta Grants.gov yana buƙatar yi wa ƙungiyarku rajista, wanda ke ɗaukar lokaci, don haka ku karanta matakan rajista a Grants.gov ku fara da wuri.",
            "AI zai iya taimaka muku rubuta gajeren bayanin aiki: buƙatar, abin da za ku yi, wanda zai amfana, burinku da za a iya aunawa, da adadin kuɗin da kuke nema. Dole kowane bayani da kowace lamba su zama gaskiya kuma su yi daidai da bayananku. Ku karanta dokokin mai ba da tallafin, ku yi amfani da tambayoyinsa, iyakar kalmominsa da wa'adinsa."
          ],
          steps: ["Ku tambayi ɗakin karatunku ko gidauniyar al'umma game da tallafin yankinku.", "Ku bincika Grants.gov idan ƙungiyarku ta shirya don tallafin tarayya.", "Ku nemi AI ya rubuta taƙaitawa mai jimloli biyar: buƙata, shiri, wanda zai amfana, buri, adadi.", "Ku tabbatar da kowane bayani ku bi dokokin mai ba da tallafin."],
          words: [["Tallafi (grant)", "kuɗi da ake bayarwa don wata manufa wanda ba za ku mayar ba."], ["Mai ba da tallafi (funder)", "ƙungiya ko hukumar da ke bayar da tallafin."], ["Gidauniyar al'umma (community foundation)", "ƙungiyar agaji ta yanki da ke ba da tallafi ga ƙungiyoyi a yankinta."]],
          sources: [{ name: "Grants.gov: Grant eligibility (wanda ya cancanci tallafi)", url: "https://www.grants.gov/learn-grants/grant-eligibility" }],
          slides: [
            { title: "Inda ƙananan ƙungiyoyi ke samun tallafi", bullets: ["Gidauniyoyin al'umma", "Kamfanonin yanki, bankuna, ƙungiyoyin addini", "Shirye-shiryen birni ko gunduma; ku tambayi ɗakin karatu"] },
            { title: "Tallafin tarayya: Grants.gov", bullets: ["Yawanci na ƙungiyoyi ne, ba na mutum ɗaya ba", "Rajista tana ɗaukar lokaci: ku fara da wuri", "Ku karanta matakan a Grants.gov"] },
            { title: "Taƙaitawa mai jimloli biyar", bullets: ["Buƙatar da shirinku", "Wanda zai amfana da burinku", "Adadin kuɗin da kuke nema"] },
            { title: "Ku kasance masu gaskiya", bullets: ["Dole kowane bayani ya zama gaskiya", "Ku bi dokokin mai ba da tallafi da wa'adinsa"] }
          ],
          tryIt: "Ku nemo tallafi ɗaya da ƙungiyarku za ta iya nema (na yanki ko a Grants.gov). Ku nemi AI ya rubuta daftarin taƙaitaccen bayanin aikinku mai jimloli biyar, sannan ku tabbatar da kowane bayani.",
          youCanNow: "nemo damar tallafi da rubuta daftarin taƙaitaccen bayanin aiki na gaskiya.",
          quickCheck: [
            { objective: "O5", q: "Mene ne tallafi (grant)?", options: ["Kuɗi don wata manufa wanda ba za ku mayar ba", "Bashi mai ƙaramin ruwa", "Gudummawar abinci", "Takardar haraji"], answer: 0, why: "Tallafi kuɗi ne da ake bayarwa don wata manufa, ba a mayar da shi." },
            { objective: "O5", q: "Mai ba da tallafi ya yarda da kalmomi 100, AI kuma ya rubuta 180. Me za ku yi?", options: ["Ku aika duk kalmomi 180", "Ku rage shi ya dace da iyakar kalmomi 100 na mai ba da tallafin", "Ku mai da shi kalmomi 200", "Ku tsallake taƙaitawar"], answer: 1, why: "Ku bi dokokin mai ba da tallafi, har da iyakar kalmomi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sanar da magoya baya da kafa dokokin AI ga ƙungiyarku",
          minutes: 5,
          goal: "Ku rubuta saƙon labari ga magoya baya da dokoki biyar masu sauƙi na AI ga ƙungiyarku.",
          text: [
            "Magoya baya suna sake bayarwa idan sun ga sakamako. AI zai iya mayar da lambobinku zuwa gajeren saƙo mai daɗi: \"A wannan watan mun yi wa iyalai 142 hidima kuma mun raba jakunkunan makaranta 300. Mun gode!\" Ku raba labaran mutane ne kawai da rubutaccen izini, kuma ku canja sunaye idan mutumin yana so.",
            "Kowace ƙungiya da ke amfani da AI ya kamata ta amince da wasu dokoki masu sauƙi. Misali: 1) Kada mu taɓa saka sunaye, adireshi, lambobin waya, bayanan lafiya ko na shige da fice na mutanen da muke yi wa hidima a AI. 2) Mutum yana karantawa yana duba komai kafin ya fita. 3) Ba ma barin AI ya yanke shawarar wanda zai sami taimako. 4) Muna faɗa wa mutane idan AI ne ya rubuta yawancin saƙo, idan sun tambaya. 5) Muna amfani da kayan aikin da aka amince da su ne kawai, na kyauta ko na gudummawa.",
            "Ku rubuta dokokinku, ku raba su da masu aikin sa-kai, ku sake duba su sau ɗaya a shekara."
          ],
          steps: ["Ku nemi AI ya mayar da sakamakonku zuwa gajeren saƙon godiya.", "Ku yi amfani da labarai ne kawai da rubutaccen izini.", "Ku rubuta dokoki biyar na AI tare da ƙungiyarku.", "Ku raba dokokin da masu aikin sa-kai ku sake duba su kowace shekara."],
          words: [["Mai goyon baya (supporter)", "wanda ke ba da lokaci, kuɗi ko taimako ga ƙungiyarku."], ["Dokar ƙungiya (policy)", "rubutattun dokoki da ƙungiyarku ta amince ta bi."]],
          slides: [
            { title: "Saƙonnin labari suna riƙe magoya baya", bullets: ["Ku raba lambobi na gaske", "Ku ce mun gode", "Labarai sai da rubutaccen izini"] },
            { title: "Dokoki biyar masu sauƙi na AI", bullets: ["Babu bayanan sirri na mutanen da muke yi wa hidima", "Mutum yana duba komai", "AI ba ya yanke wanda zai sami taimako"] },
            { title: "Ku riƙe dokokin a raye", bullets: ["Ku faɗi gaskiya game da amfani da AI idan an tambaya", "Ku yi amfani da kayan aikin da aka amince da su", "Ku raba da masu aikin sa-kai; ku duba kowace shekara"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa komai a shirin aiki na shafi ɗaya: manufa, buri da za a iya aunawa, jadawali, ayyukan masu aikin sa-kai uku da matakan tsaro, taƙaitaccen bayanin tallafi mai jimloli biyar, da dokoki biyar na AI na ƙungiyarku. Ku cire duk wani abu na sirri kafin ku raba shi.",
          youCanNow: "jagorantar aikin al'umma da shiri a sarari da amfani da AI lafiya kuma da gaskiya.",
          quickCheck: [
            { objective: "O6", q: "Yaushe za ku iya raba labarin wani iyali a saƙon labari?", options: ["Duk lokacin da zai taimaka wajen tara kuɗi", "Idan kun canja kalma ɗaya", "Sai da rubutaccen izininsu kawai", "Idan labarin gajere ne"], answer: 2, why: "Ana raba labarai ne kawai da rubutaccen izini." },
            { objective: "O6", q: "Wani memban kwamiti ya ba da shawarar barin AI ya zaɓi iyalan da za su fara samun taimako. Me dokar AI ɗinku ta ce?", options: ["Eh, AI yana da adalci", "Eh, idan ya fi sauri", "A ranakun da ake da aiki sosai kawai", "A'a; mutane ne ke yanke shawarar wanda zai sami taimako"], answer: 3, why: "AI ba ya yanke shawarar wanda zai sami taimako; mutane ne ke yi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Mutane, kuɗi da amana",
        questions: [
          { objective: "O4", q: "Shirinku yana yi wa yara hidima. Wanne ne abin tsaro da aka saba yi?", options: ["Babba ɗaya shi kaɗai tare da kowane yaro", "Masu aikin sa-kai suna tura wa yara tes a ɓoye", "Binciken tarihi da manya biyu a wurin", "Ba a buƙatar dokoki"], answer: 2, why: "Binciken tarihi da dokar manya biyu kariya ne da aka saba yi; ku bi dokar ƙungiyarku." },
          { objective: "O4", q: "Za ku iya liƙa sunan wanda kuke yi wa hidima da labarinsa a AI don rubuta rahoto?", options: ["Eh, koyaushe", "Idan gajere ne kawai", "Eh, idan AI ɗin kyauta ne", "A'a; ku yi amfani da madadi ku bar bayanan sirri a waje"], answer: 3, why: "Ku kare mutanen da kuke yi wa hidima ta hanyar barin bayanansu a wajen kayan AI." },
          { objective: "O5", q: "Yawancin kuɗin tallafi a Grants.gov na:", options: ["Ƙungiyoyi ne", "Kuɗaɗen biyan bukatun kai ne", "Kuɗin hayar mutum ɗaya ne", "Sayen motoci ne"], answer: 0, why: "Grants.gov ya ce yawancin damarmaki na ƙungiyoyi ne, ba na mutum ɗaya ba." },
          { objective: "O5", q: "AI ya rubuta cewa ƙungiyarku ta yi wa iyalai 500 hidima, amma bayananku sun ce 312. Ku:", options: ["Ku bar 500, ya fi kyau a ji", "Ku canja shi zuwa 312", "Ku cire dukkan lambobi", "Ku nemi AI ya ba da lamba mafi girma"], answer: 1, why: "Dole kowane bayani a tallafi ko saƙon labari ya yi daidai da bayananku." },
          { objective: "O6", q: "Wace ce dokar AI mai kyau ga ƙungiyar al'umma?", options: ["AI ne ke yanke wanda zai sami taimako", "Babu wanda ke duba rubutun AI", "Mutum yana karantawa yana duba komai kafin ya fita", "Ku liƙa duk fayilolin mutanen da kuke yi wa hidima a AI"], answer: 2, why: "Dubawar mutum tana sa ƙungiyarku ta kasance daidai kuma amintacciya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Shugabancin Ƙungiyoyin Sa-kai",
    questions: [
      { objective: "O1", q: "Wane aiki ne ya fi kyau a bar wa mutane, ba AI ba?", options: ["Gina amana da iyalai", "Rubuta daftarin takardar talla", "Yin jerin abubuwan dubawa", "Taƙaita bayanan taro"], answer: 0, why: "Dangantaka da amana aikin ɗan Adam ne." },
      { objective: "O1", q: "Me yasa ya kamata shugabanni su yi amfani da AI don daftari?", options: ["Don maye gurbin ƙungiyar", "Don samun lokaci don sauraro da zuwa wurin mutane", "Don guje wa duba aiki", "Don tattara bayanan sirri"], answer: 1, why: "AI yana rage lokacin rubutu don shugabanni su mai da hankali kan mutane." },
      { objective: "O2", q: "Bayanin manufa yana faɗin:", options: ["Lokacin taro", "Kuɗin da ke bankinku", "Su wa kuke yi wa hidima, me kuke yi da dalili", "Lambobin wayar masu aikin sa-kai"], answer: 2, why: "Wannan shi ne aikin manufa." },
      { objective: "O2", q: "Wane buri ne za ku iya aunawa?", options: ["\"Kawo canji\"", "\"Taimaka sosai\"", "\"Zama sananne\"", "\"Raba jakunkunan makaranta 300 kafin 10 ga Agusta\""], answer: 3, why: "Yana da lamba da rana." },
      { objective: "O2", q: "Bayan AI ya ba da shawarar bayanan manufa, ya kamata ku:", options: ["Zaɓa ku gyara tare da ƙungiyarku", "Yi amfani da na farko ba tare da karantawa ba", "Saka dukkan uku a intanet", "Yi watsi da ƙungiyarku"], answer: 0, why: "Ƙungiyarku tana tabbatar da cewa ya yi kama da al'ummarku." },
      { objective: "O3", q: "Jadawali yana nuna:", options: ["Waɗanda suka ba da gudummawa", "Abin da zai faru da lokacinsa, bi da bi", "Kasafin kuɗinku kawai", "Adireshin masu aikin sa-kai"], answer: 1, why: "Jadawali yana jera matakai bi da bi." },
      { objective: "O3", q: "Wane bayani ya kamata ku ba AI don tsara taro?", options: ["Lambobin wayar masu aikin sa-kai", "Adireshin iyalai", "Taron, rana, wuri da yawan mutane", "Bayanan shiga bankinku"], answer: 2, why: "Waɗannan bayanai suna taimakawa ba tare da raba bayanan sirri ba." },
      { objective: "O3", q: "Shirin AI ya manta da fassara ga iyalan da ke magana da Sifaniyanci (Spanish). Ku:", options: ["Bi AI daidai yadda yake", "Soke shi", "Cire waɗannan iyalai", "Ƙara fassara a shirin"], answer: 3, why: "Kuna ƙara abin da al'ummarku ke buƙata." },
      { objective: "O4", q: "Kyakkyawan bayanin aikin mai aikin sa-kai ya ƙunshi:", options: ["Menene aikin, tsawon lokacinsa da wanda za a tambaya", "Lambar Social Security ta mai aikin sa-kai", "Babu komai", "Sunan taron kawai"], answer: 0, why: "Ayyuka a sarari suna taimaka wa masu aikin sa-kai su yi nasara." },
      { objective: "O4", q: "Dokar manya biyu tana nufin:", options: ["Masu aikin sa-kai biyu suna amfani da waya ɗaya", "Aƙalla manya biyu suna tare da yara, ba babba ɗaya shi kaɗai ba", "Manya biyu suna sa hannu a kowane cak", "Manya biyu ne kawai za su iya aikin sa-kai"], answer: 1, why: "Abu ne da aka saba yi da ke kare yara da masu aikin sa-kai." },
      { objective: "O4", q: "Idan ba ku tabbata da dokokin tsaro na aiki da yara ba, ya kamata ku:", options: ["Ƙirƙiri naku", "Tsallake su", "Bi dokar ƙungiyarku da dokokin jiha, ku tambayi kamfanin inshorarku ko lauya", "Tambayi abokin wani mai aikin sa-kai"], answer: 2, why: "Dokar hukuma da ƙwararru ne ke ba da amsar da ta dace." },
      { objective: "O5", q: "Tallafi (grant) shi ne:", options: ["Bashi da za ku mayar da ruwa", "Katin bashi (credit card)", "Takardar biyan haraji", "Kuɗi don wata manufa wanda ba za ku mayar ba"], answer: 3, why: "Ba a mayar da tallafi." },
      { objective: "O5", q: "Wanne ne wurin yanki da ƙananan ƙungiyoyi ke yawan samun tallafi?", options: ["Gidauniyar al'umma", "Tallar da ke tasowa (pop-up)", "Mai ba da bashin gaggawa mai tsada (payday lender)", "Tes daga baƙo"], answer: 0, why: "Gidauniyoyin al'umma suna ba da tallafi ga ƙungiyoyin yankinsu." },
      { objective: "O5", q: "Game da rajistar tallafin tarayya a Grants.gov, hikima ce ku:", options: ["Jira har ranar da ke gaban wa'adin", "Fara da wuri, domin rajista tana ɗaukar lokaci", "Tsallake rajista", "Biya baƙo ya yi muku"], answer: 1, why: "Rajista tana ɗaukar lokaci, don haka ku fara da wuri." },
      { objective: "O5", q: "Taƙaitaccen bayanin tallafi mai jimloli biyar yana ƙunshe da:", options: ["Sunanku kawai", "Lambobin wayar masu aikin sa-kai", "Buƙata, shiri, wanda zai amfana, buri da adadin kuɗi", "Jerin ƙorafe-ƙorafe"], answer: 2, why: "Waɗannan sassa suna faɗa wa mai ba da tallafi abin da yake buƙatar sani." },
      { objective: "O5", q: "Kafin ku aika taƙaitaccen bayanin tallafi da AI ya taimaka rubutawa, ku:", options: ["Aika shi ba tare da karantawa ba", "Ƙara manyan lambobi", "Cire wa'adin", "Tabbatar da kowane bayani ku bi dokokin mai ba da tallafin"], answer: 3, why: "Gaskiya da bin dokoki suna kare ƙungiyarku." },
      { objective: "O6", q: "Kuna son raba labarin wani iyali a takardar labarai (newsletter). Kuna buƙatar:", options: ["Rubutaccen izininsu", "Babu komai", "Izinin AI", "Ra'ayin mai aikin sa-kai kawai"], answer: 0, why: "Ana raba labarai ne kawai da izini." },
      { objective: "O6", q: "Wace ce dokar AI mai kyau?", options: ["Saka bayanan shige da fice a AI", "Kada a taɓa saka sunaye, adireshi ko bayanan lafiya na mutanen da muke yi wa hidima a AI", "Bari AI ya yanke wanda zai sami abinci", "Kada a taɓa duba rubutun AI"], answer: 1, why: "Bayanan sirri suna zama a wajen kayan AI." },
      { objective: "O6", q: "Ya kamata AI ya yanke shawarar wanda zai sami taimako daga shirinku?", options: ["Eh, koyaushe", "Eh, idan kyauta ne", "A'a; mutane ne ke yanke waɗannan shawarwari", "A ƙarshen mako kawai"], answer: 2, why: "Shawarwari game da taimakon mutane suna buƙatar hikimar ɗan Adam da adalci." },
      { objective: "O6", q: "Sau nawa ya kamata ƙungiyarku ta sake duba dokokinta na AI?", options: ["Ba sau ɗaya ba", "Kowace shekara goma", "Sai bayan matsala ta faru kawai", "Kusan sau ɗaya a shekara"], answer: 3, why: "Kayan aiki suna canjawa, don haka ku sake duba dokokinku akai-akai." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Manufa da buri",
        objective: "O2",
        notYet: "Babu manufa, ko ba za a iya ƙirga burin ba.",
        meets: "Manufa a jimla ɗaya mai su wa, me da dalili, da buri ɗaya mai lamba da rana.",
        exceeds: "An gyara su tare da ƙungiya ta yadda suke kama da al'umma."
      },
      {
        name: "Jadawali",
        objective: "O3",
        notYet: "Babu jadawali, ko akwai ayyuka marasa suna ko rana.",
        meets: "Jadawali mai sauƙi mai suna da rana a gefen kowane aiki.",
        exceeds: "Ya haɗa da abin da AI ya manta, kamar izini, fassara ko abin hawa."
      },
      {
        name: "Ayyukan masu aikin sa-kai da tsaro",
        objective: "O4",
        notYet: "Ayyuka ƙasa da uku, ko babu matakan tsaro idan akwai yara.",
        meets: "Ayyuka uku a sarari, tare da matakan tsaro na ƙungiyar inda ake buƙata.",
        exceeds: "Ayyukan suna faɗin tsawon lokacin aikin da wanda za a tambaya don taimako."
      },
      {
        name: "Taƙaitaccen bayanin tallafi",
        objective: "O5",
        notYet: "Akwai sassan da suka ɓace, ko bayanan da ba su yi daidai da bayanan ƙungiya ba.",
        meets: "Jimloli biyar: buƙata, shiri, wanda zai amfana, buri da adadi, duka an tabbatar da su.",
        exceeds: "Ya dace da iyakar kalmomi da tambayoyin wani mai ba da tallafi na gaske."
      },
      {
        name: "Dokokin AI da sirri",
        objective: "O6",
        notYet: "Dokoki ƙasa da biyar, ko an bar bayanan sirri a cikin shirin.",
        meets: "Dokoki biyar na AI a sarari, kuma babu bayanan sirri a cikin shirin.",
        exceeds: "Dokokin sun haɗa da sake dubawa kowace shekara kuma sun shirya don rabawa da masu aikin sa-kai."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka ɗauki rubutattun dokokin AI cikin kwanaki 30 (binciken biyo baya)",
      "Ƙungiyoyin da suka nemi aƙalla tallafi ɗaya cikin kwanaki 90, da tallafin da suka samu",
      "Ƙungiyoyin da suka ce sun sami ƙarin masu aikin sa-kai ko mutanen da aka yi wa hidima bayan amfani da shirinsu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani, ko kwamfutar ɗakin karatu ko ta ofis",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Bayanai game da shiri na gaske ko na atisaye: wanda yake yi wa hidima, sakamako da bayanan ƙungiya",
      "Takarda ko kayan aikin rubuta takardu kyauta don shirin shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku sa mutanen ƙungiya ɗaya su yi aiki tare don shirin da dokokin AI su zama nasu duka.",
      "Ku duba kowane prompt don sunaye, lambobin waya, bayanan lafiya ko na shige da fice na mutanen da ake yi wa hidima.",
      "Don shirye-shiryen da ke da yara, ku nuna musu dokar tsaro ta ƙungiyar da kanta; wannan kwas ba ya maye gurbinta.",
      "Ku kawo jerin gidauniyoyin al'umma na yanki da taimakon neman tallafi a ɗakin karatu.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
