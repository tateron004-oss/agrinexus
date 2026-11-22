"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-brand-campaigns.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-brand-campaigns-ha",
  lang: "ha",
  translationOf: "athletes-brand-campaigns",
  category: "Athletes",
  name: "Kamfen na Ilimantarwa tare da Kamfanoni",
  skills: "Gane kamfen na ilimantarwa, Zaɓar manufar da ta dace da ku, Tabbatar da bayanai daga majiyoyi amintattu, Tsara kamfen na rubutu 3 da AI, Neman haɗin gwiwa da kamfani ko ƙungiyar sa-kai tare da bayyana tallafi a sarari",
  outcome: "tsara kamfen na ilimantarwa mai rubutu uku kan wata manufa da kuke damuwa da ita (misali kare kai a ruwa, karatu, sanin raunin kai (concussion) ko ilimin kuɗi), da bayanan da aka tabbatar daga majiyoyin hukuma, wasiƙar neman haɗin gwiwa, da bayyana duk wani tallafin kamfani a sarari.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne da masu horarwa da ke son amfani da shahararsu don koyar da wani abu mai amfani, su kaɗai ko tare da kamfani ko ƙungiyar sa-kai. Kamfanoni sukan yi kamfen na ilimantarwa tare da 'yan wasa kan lafiya, tsaro, karatu, ilimin kuɗi da al'umma.",
    "Kamfen na ilimantarwa yana koyarwa da farko, sayarwa kuma daga baya, idan ma akwai. Za ku koyi abin da ke sa kamfen ya yi kyau, ku zaɓi manufar da ta dace da ku, ku tabbatar da bayanai daga majiyoyin hukuma, ku tsara rubutu uku da AI, kuma ku nemi abokin haɗin gwiwa da gaskiya.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Duk aikin kamfani da aka biya ku ko aka ba ku kyauta yana buƙatar bayyanawa a sarari, kuma ɗalibai su duba dokokin NIL na makarantarsu da jiharsu."
  ],
  finalTask: "Ku tsara kamfen na ilimantarwa mai rubutu uku kan manufa ɗaya: maƙasudin koyo ɗaya a sarari, tsare-tsaren rubutu uku da AI ya taimaka rubutawa, kowane bayani da hanyar haɗi (link) zuwa majiyar hukuma ko ta ƙwararru, kira zuwa ga aiki, da gajeriyar wasiƙar neman haɗin gwiwa ga kamfani ko ƙungiyar sa-kai ɗaya. Ku haɗa da yadda za ku bayyana duk wani tallafin kamfani, da wanda kuka tambaya game da dokokin NIL a makarantarku ko jiharku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa da masu horarwa na sakandare, jami'a da farkon sana'a da ke son amfani da shahararsu don koyar da wani abu mai amfani, su kaɗai ko tare da kamfani ko ƙungiyar sa-kai.",
    startingPoint: "Suna da masu bin su a kafofin sada zumunta (social media) da wata manufa da suke damuwa da ita daga rayuwarsu. Kaɗan ne suka taɓa tsara kamfen, tabbatar da bayanai daga majiyoyin hukuma, neman abokin haɗin gwiwa, ko auna ko mutane sun koyi wani abu.",
    gap: "Rubutu da aka yi da kyakkyawar niyya amma da bayanai marasa gaskiya yana iya cutar da mutane, ya kuma ɓata sunan ɗan wasa da na abokin haɗin gwiwa; kuma tallafin da ba a bayyana ba yana karya dokokin talla. Ƙaramin kamfen da aka tabbatar da bayanansa kuma aka bayyana tallafinsa da gaskiya yana bar 'yan wasa su taimaki al'ummarsu su kuma gina haɗin gwiwa amintacce.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 8",
      "Waya mai kafofin sada zumunta da mataimakin AI kyauta",
      "Kusan minti 60 gaba ɗaya",
      "Kowane bayani daga majiyar hukuma ko ta ƙwararru; wayar da kai ta gama-gari kawai, shawarar kai-da-kai a bar wa ƙwararru",
      "Dokokin bayyanawa na FTC da dokokin NIL na makaranta da jiha; 'yan wasa 'yan ƙasa da shekara 18 su sa iyaye ko masu kula da su"
    ],
    prerequisites: "Babu. Kwas ɗin \"Ƙirƙirar Abun Ciki ga 'Yan Wasa\" yana taimakawa wajen yin rubuce-rubucen."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku misalan rubuce-rubuce", action: "bayyana yadda kamfen na ilimantarwa ya bambanta da talla na yau da kullum", standard: "kuna ambaton sassa huɗu na kamfen mai kyau: maƙasudin koyo ɗaya, bayanai na gaskiya, mataki mai sauƙi, da gaskiya game da wanda ke biya" },
    { id: "O2", condition: "Idan aka ba ku manufofin da suka shafi rayuwarku", action: "zaɓar manufa ɗaya da rubuta maƙasudin koyo ɗaya ga masu bin ku", standard: "tare da labarin dangantaka mai jimloli biyu, da maƙasudin da ke faɗin wa zai san ko ya yi me" },
    { id: "O3", condition: "Idan aka ba ku bayanan da kuke son rabawa", action: "tabbatar da kowane bayani daga majiyar hukuma ko ta ƙwararru da rubuta shi a takardar bayanai", standard: "tare da hanyar haɗi da kwanan wata ga kowane bayani, kuma an cire duk bayanin da ba za ku iya tabbatarwa ba" },
    { id: "O4", condition: "Ta amfani da takardar bayananku da mataimakin AI", action: "ƙirƙirar tsarin rubutu uku: dalilin da yake da muhimmanci, abin da za a sani, da ɗaukar mataki", standard: "tare da jan hankali, manyan bayanai da kira zuwa ga aiki a kowane rubutu, bayanai daga takardar bayananku kaɗai, da salo mai ba da fata" },
    { id: "O5", condition: "Idan aka ba ku abokan haɗin gwiwa da suka riga suka damu da manufarku", action: "rubuta gajeriyar wasiƙar neman haɗin gwiwa ga kamfani ko ƙungiyar sa-kai ɗaya", standard: "ƙasa da kalmomi 150, da manufarku, labarinku, maƙasudi, tsari, masu bin ku da buƙata a sarari, kuma an duba dokokin NIL" },
    { id: "O6", condition: "Don kamfen da ke da kowane tallafin kamfani", action: "rubuta bayyanawa a sarari ga kowane rubutu da zaɓar hanyoyi biyu na auna koyo", standard: "da bayyanawar kusa da farko, babu iƙirari fiye da takardar bayananku, kuma an raba sakamako da abokin haɗin gwiwa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abin da ke sa kamfen na ilimantarwa ya yi kyau",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne kamfen na ilimantarwa",
          minutes: 4,
          goal: "Bambanta kamfen na ilimantarwa da talla na yau da kullum.",
          text: [
            "Talla na yau da kullum yana cewa \"ku saya wannan\". Kamfen na ilimantarwa yana cewa \"ga wani abu mai amfani da za ku sani ko ku yi\". Kamfanoni suna amfani da 'yan wasa a irin waɗannan kamfen domin matasa da iyalai suna amincewa da 'yan wasa.",
            "Misalan batutuwan kamfen: koyon iyo da kare kai a ruwa, gane alamun raunin kai (concussion), karatu kowace rana, shan ruwa isasshe, tara kuɗi, tsaro a intanet, ko wayar da kai game da lafiyar ƙwaƙwalwa.",
            "Kamfen mai kyau yana da maƙasudin koyo ɗaya, bayanai na gaskiya daga majiyoyi amintattu, mataki mai sauƙi da mutane za su iya ɗauka, da gaskiya game da wanda ke biyan kuɗinsa."
          ],
          words: [["Kamfen na ilimantarwa", "jerin saƙonni da ke koya wa mutane wani abu mai amfani, sau da yawa da tallafin kamfani ko ƙungiyar sa-kai."], ["Maƙasudin koyo", "abu ɗaya da kuke son masu bin ku su sani ko su yi bayan kamfen ɗin."]],
          slides: [
            { title: "Talla da kamfen na ilimantarwa", bullets: ["Talla: \"ku saya wannan\"", "Kamfen: \"ga abu mai amfani da za ku sani ko ku yi\""] },
            { title: "Misalan batutuwa", bullets: ["Kare kai a ruwa, alamun raunin kai", "Karatu, ilimin kuɗi", "Tsaro a intanet, lafiyar ƙwaƙwalwa"] },
            { title: "Kamfen mai kyau yana da", bullets: ["Maƙasudin koyo ɗaya", "Bayanai na gaskiya masu majiya", "Mataki mai sauƙi", "Gaskiya game da wanda ke biya"] }
          ],
          tryIt: "Ku nemo kamfen na ilimantarwa ɗaya da kuka gani tare da ɗan wasa ko kamfani. Ku rubuta maƙasudin koyonsa, matakin da ya nema, da ko ya faɗi wanda ya biya.",
          youCanNow: "bambanta kamfen na ilimantarwa da talla na yau da kullum da faɗin abin da ke sa shi ya yi kyau.",
          quickCheck: [
            { objective: "O1", q: "Me kamfen na ilimantarwa yake cewa?", options: ["\"Ku saya wannan yanzu\"", "\"Ga wani abu mai amfani da za ku sani ko ku yi\"", "\"Ku bi ni don kyaututtuka\"", "\"Ƙungiyarmu ce mafi kyau\""], answer: 1, why: "Talla na yau da kullum yana cewa ku saya; kamfen na ilimantarwa yana koyar da wani abu mai amfani." },
            { objective: "O1", q: "Wani kamfani ya ba ku \"kamfen\" da ke da lambobin rangwame kawai, babu darasi. Mene ne shi?", options: ["Kamfen na ilimantarwa", "Takardar bayanai", "Talla na yau da kullum", "Haɗin gwiwa da ƙungiyar sa-kai"], answer: 2, why: "Idan babu maƙasudin koyo ko mataki mai amfani, talla ne na yau da kullum." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Zaɓar manufarku",
          minutes: 5,
          goal: "Zaɓi manufa ɗaya da ta dace da labarinku da masu bin ku.",
          text: [
            "Kamfen mafi ƙarfi suna fitowa daga rayuwa ta gaske. Shin mai horarwa ya koya muku game da raunin kai bayan abokin wasa ya ji rauni? Shin karatu ya taimaka muku ku ci gaba da cancantar wasa? Shin koyon tsara kuɗin NIL ɗinku ya canja abubuwa? Labarinku yana sa mutane su saurara.",
            "Ku zaɓi manufar da ta kuma dace da masu bin ku. Ƙananan masoya da iyayensu suna iya damuwa da tsaro da karatu; abokan karatu a jami'a suna iya damuwa da ilimin kuɗi da lafiyar ƙwaƙwalwa.",
            "Ku rubuta maƙasudin koyo ɗaya: \"Bayan kamfen ɗina, 'yan wasan ƙaramar sakandare za su san alamomi uku na raunin kai, kuma su faɗa wa mai horarwa nan take.\""
          ],
          steps: ["Ku jera manufofi uku da suka shafi rayuwarku.", "Ku yi alama a wadda ta fi dacewa da masu bin ku.", "Ku rubuta dangantakarku da ita a jimloli biyu.", "Ku rubuta maƙasudin koyo ɗaya."],
          words: [["Manufa", "wani batu ko buri da kuke damuwa da shi kuma kuke son taimakawa a kai."], ["Na gaske (authentic)", "abin da yake gaskiya kuma ya dace da ainihin ko wane ne ku."]],
          slides: [
            { title: "Ku fara da labarinku", bullets: ["Me ya faru da ku?", "Me yasa kuke damuwa?"] },
            { title: "Ku dace da masu bin ku", bullets: ["Ƙananan masoya: tsaro, karatu", "Abokan jami'a: kuɗi, lafiyar ƙwaƙwalwa"] },
            { title: "Maƙasudin koyo ɗaya", bullets: ["Wa zai koyi me", "Da abin da za su yi"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya taimaka muku jera manufofin da suka shafi wasanku da rayuwarku. Ku zaɓi ɗaya, ku rubuta labarinku mai jimloli biyu da maƙasudin koyo ɗaya.",
          youCanNow: "zaɓar manufa ta gaske da rubuta maƙasudin koyo a sarari.",
          quickCheck: [
            { objective: "O2", q: "Daga ina manufofin kamfen mafi ƙarfi suke fitowa?", options: ["Rayuwarku ta gaske", "Duk abin da ke tashe a intanet", "Abin da kamfani ya faɗa muku", "Batutuwa barkatai daga AI"], answer: 0, why: "Labarinku yana sa mutane su saurara." },
            { objective: "O2", q: "Yawancin masu bin ku 'yan wasan ƙaramar sakandare ne da iyayensu. Wace manufa ta fi dacewa?", options: ["Zuba jari don ritaya", "Inshorar mota", "Takardun haraji na jami'a", "Gane alamun raunin kai"], answer: 3, why: "Ƙananan masoya da iyayensu suna iya damuwa da batutuwan tsaro kamar raunin kai." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Samun bayanai daidai",
          minutes: 5,
          goal: "Tabbatar da kowane bayani a kamfen ɗinku daga majiyar hukuma ko ta ƙwararru.",
          text: [
            "Idan kun koyar da abin da ba daidai ba, mutane suna iya cutuwa, kuma sunanku da na abokin haɗin gwiwarku suna lalacewa. Kowane bayani yana buƙatar majiya amintacciya.",
            "Ku yi amfani da majiyoyin hukuma da na ƙwararru: hukumomin gwamnati na lafiya da tsaro (misali shafukan HEADS UP na CDC game da raunin kai; CDC hukumar lafiya ce ta Amurka), ƙungiyoyi na ƙasa, da ƙwararru kamar masu kula da lafiyar 'yan wasa (athletic trainers), likitoci, malamai ko masu ba da shawara kan kuɗi. Ku nemi mataimakin AI ya bayyana batu da sauƙi, sannan ku tabbatar da kowane bayani a majiyar da kanta.",
            "Ku riƙe takardar bayanai: kowane bayani, hanyar haɗin majiyarsa, da ranar da kuka duba shi. Ku koyar da wayar da kai ta gama-gari, kuma ku tura mutane wurin ƙwararru don shawarar kai-da-kai."
          ],
          steps: ["Ku jera bayanan da kuke son rabawa.", "Ku nemo majiyar hukuma ko ta ƙwararru ga kowanne.", "Ku rubuta hanyar haɗin da ranar da kuka duba.", "Ku cire duk bayanin da ba za ku iya tabbatarwa ba.", "Ku tura mutane wurin ƙwararru don shawarar kai-da-kai."],
          words: [["Majiyar hukuma", "bayani daga hukumar gwamnati ko ƙungiyar da ke da alhakin batun."], ["Takardar bayanai (fact sheet)", "jerin bayananku tare da majiyoyinsu da ranakun da aka duba su."]],
          slides: [
            { title: "Bayanai marasa gaskiya suna cutarwa", bullets: ["Mutane suna iya cutuwa", "Sunanku da na abokin haɗin gwiwa suna lalacewa"] },
            { title: "Majiyoyi amintattu", bullets: ["Hukumomin gwamnati, kamar CDC HEADS UP", "Ƙungiyoyi na ƙasa", "Ƙwararru: masu kula da 'yan wasa, likitoci, malamai"] },
            { title: "Takardar bayananku", bullets: ["Bayani, hanyar haɗin majiya, ranar dubawa", "Ba za ku iya tabbatarwa ba? Ku cire shi"] }
          ],
          sources: [{ name: "CDC: HEADS UP (wayar da kai game da raunin kai)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Ku rubuta bayanai uku don kamfen ɗinku. Ku nemo majiyar hukuma ko ta ƙwararru ga kowanne, ku gina takardar bayananku da hanyoyin haɗi da ranaku.",
          youCanNow: "tabbatar da bayanan kamfen daga majiyoyin hukuma da riƙe takardar bayanai.",
          quickCheck: [
            { objective: "O3", q: "Me ake sakawa a takardar bayanai?", options: ["Yawan masu bin ku", "Kowane bayani, hanyar haɗin majiyarsa da ranar da kuka duba shi", "Amsar AI kawai", "Farashin abokin haɗin gwiwarku"], answer: 1, why: "Takardar bayanai tana riƙe kowane bayani tare da majiyarsa da ranar da aka duba shi." },
            { objective: "O3", q: "Wani mai bin ku ya tambaye ku abin da zai yi game da raunin da ya ji. Me za ku yi?", options: ["Ku ba shi tsarin magani", "Ku tambayi AI ku sake wallafa amsar", "Ku tura shi wurin likita ko mai kula da lafiyar 'yan wasa", "Ku ƙyale shi"], answer: 2, why: "Ku koyar da wayar da kai ta gama-gari, kuma ku tura mutane wurin ƙwararru don shawarar kai-da-kai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abin da ke sa kamfen na ilimantarwa ya yi kyau",
        questions: [
          { objective: "O1", q: "Ta yaya kamfen na ilimantarwa ya bambanta da talla na yau da kullum?", options: ["Koyaushe ya fi tsawo", "Babu 'yan wasa a ciki", "Yana koyar da abu mai amfani da farko", "Ba ya taɓa samun kamfanoni"], answer: 2, why: "Kamfen yana koyarwa; talla yawanci yana sayarwa." },
          { objective: "O2", q: "Wane ne maƙasudin koyo a sarari?", options: ["\"'Yan wasan ƙaramar sakandare za su san alamomi uku na raunin kai, su faɗa wa mai horarwa\"", "\"Ku yi hankali\"", "\"Ku yaɗa labarin\"", "\"Ku yi fice a intanet\""], answer: 0, why: "Yana faɗin wa zai koyi me, da abin da za su yi." },
          { objective: "O2", q: "Me yasa za ku fara da labarinku?", options: ["Doka ce ta tilasta", "Yana tsawaita rubutu", "Yana ɓoye kamfanin", "Yana sa kamfen ya zama na gaske, mutane kuma su saurara"], answer: 3, why: "Labarai na gaske suna gina amincewa." },
          { objective: "O3", q: "AI ya ba ku wani bayani game da lafiya. Me za ku yi?", options: ["Ku wallafa shi nan take", "Ku tabbatar da shi daga majiyar hukuma ko ta ƙwararru", "Ku sa shi ya fi ban tsoro", "Ku tambayi wani masoyi"], answer: 1, why: "AI yana iya yin kuskure; ku tabbatar a majiyar." },
          { objective: "O3", q: "Ba ku sami majiyar wani bayani ba. Za ku:", options: ["Wallafa shi duk da haka", "Cire shi", "Ƙirƙiri majiya", "Canja lambobin"], answer: 1, why: "Ku raba abin da za ku iya tabbatarwa kawai." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsarawa da haɗin gwiwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsara rubutu uku da AI",
          minutes: 5,
          goal: "Rubuta daftarin tsarin kamfen mai rubutu uku da AI kuma ku gyara shi.",
          text: [
            "Rubutu uku sun isa ga kamfen mai mayar da hankali: 1. Dalilin da yake da muhimmanci (labarinku). 2. Abin da za a sani ko a yi (babban darasi). 3. Ɗaukar mataki (mataki mai sauƙi, kamar \"ku raba wannan da ƙungiyarku\" ko \"ku ɗauki horon kyauta\").",
            "Ku tambayi mataimakin AI: \"Ga manufata, maƙasudin koyo, labarina da takardar bayanaina. Ka tsara gajerun rubutu uku: dalilin da yake da muhimmanci, abin da za a sani, ɗaukar mataki. Ka ba da jan hankali, manyan bayanai da kira zuwa ga aiki ga kowanne. Ka yi amfani da bayanai daga takardar bayanaina kaɗai.\"",
            "Ku gyara shi don ya yi kama da muryarku, kuma ku sake duba kowane bayani da takardar bayananku. Ku sa ya ba da fata kuma ya yi amfani, ba ya tsoratarwa ba."
          ],
          steps: ["Ku liƙa manufarku, maƙasudi, labari da takardar bayanai.", "Ku nemi rubutu uku: me yasa, me, mataki.", "Ku duba kowane bayani da takardar bayananku.", "Ku gyara shi zuwa muryarku.", "Ku sa salon ya ba da fata kuma ya yi amfani."],
          words: [["Kira zuwa ga aiki (call to action)", "mataki mai sauƙi da kuke neman mutane su ɗauka."], ["Salo (tone)", "irin jin da saƙonku yake bayarwa, kamar mai ba da fata ko mai tsanani."]],
          slides: [
            { title: "Rubutu uku", bullets: ["1. Me yasa yake da muhimmanci: labarinku", "2. Abin da za a sani ko a yi", "3. Ɗaukar mataki"] },
            { title: "Ku ba AI", bullets: ["Manufa, maƙasudi, labari", "Takardar bayananku kaɗai"] },
            { title: "Sannan ku gyara", bullets: ["Bayanai sun yi daidai da takardarku", "Muryarku", "Mai ba da fata, ba mai tsoratarwa ba"] }
          ],
          tryIt: "Ku yi amfani da AI don rubuta daftarin tsarinku na rubutu uku daga takardar bayananku. Ku gyara shi kuma ku sake duba kowane bayani.",
          youCanNow: "tsara kamfen mai rubutu uku da AI tare da kiyaye gaskiyar bayanai.",
          quickCheck: [
            { objective: "O4", q: "Rubutu na 2 na kamfen game da me ne?", options: ["Labarinku", "Farashin abokin haɗin gwiwa", "Godiya", "Abin da za a sani ko a yi: babban darasi"], answer: 3, why: "Rubutu ukun su ne: dalilin da yake da muhimmanci, abin da za a sani, da ɗaukar mataki." },
            { objective: "O4", q: "Daftarin AI ya ƙara wata ƙididdiga da ba ta cikin takardar bayananku. Me za ku yi?", options: ["Ku cire ta, ko ku fara tabbatar da ita a majiyar hukuma", "Ku bar ta; tana da daɗin ji", "Ku ƙara mata yawa", "Ku ce AI ne majiyar"], answer: 0, why: "Ku yi amfani da bayanai daga takardar bayananku kaɗai." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Neman haɗin gwiwa da kamfani ko ƙungiyar sa-kai",
          minutes: 5,
          goal: "Rubuta gajeriyar wasiƙar neman haɗin gwiwa ga kamfani ko ƙungiyar sa-kai da ta dace da manufarku.",
          text: [
            "Abokan haɗin gwiwa suna iya ƙara yawan masu gani, kuɗi ko kayan aiki. Ku nemi waɗanda suka riga suka damu da manufarku: makarantar koyon iyo don kare kai a ruwa, ɗakin karatu ko shagon littattafai don karatu, ƙungiyar ajiya da bayar da lamuni (credit union) ta yankinku don ilimin kuɗi, asibitin lafiyar wasanni don sanin rauni. Ƙungiyoyin sa-kai suna iya maraba da haɗin gwiwa na sa-kai.",
            "Wasiƙar neman haɗin gwiwa tana nuna manufarku, labarinku, maƙasudin koyo, tsarinku na rubutu uku da masu bin ku. Ku nemi abu a sarari: raba rubuce-rubucen, ba da kayan koyarwa, ko ɗaukar nauyin kamfen ɗin.",
            "Ku yi amfani da AI don rubuta daftari, sannan ku sa ta zama taku. Kuna ƙasa da shekara 18? Ku sa iyaye ko mai kula da ku. 'Yan wasa ɗalibai: ku duba dokokin NIL na makarantarku da jiharku kafin ku karɓi kowane kuɗi ko kaya."
          ],
          steps: ["Ku jera abokan haɗin gwiwa uku da suka riga suka damu da manufarku.", "Ku rubuta abin da za ku nema.", "Ku yi amfani da AI don rubuta daftarin wasiƙa ƙasa da kalmomi 150.", "Ku sa ta zama taku.", "Ku duba dokokin NIL kafin ku karɓi kuɗi ko kaya."],
          words: [["Abokin haɗin gwiwa", "kamfani ko ƙungiyar sa-kai da ke aiki tare da ku a kamfen ɗin."], ["Ƙungiyar sa-kai (nonprofit)", "ƙungiya da ke aiki don wata manufa, ba don riba ba."]],
          slides: [
            { title: "Abokan haɗin gwiwa masu kyau", bullets: ["Sun riga sun damu da manufarku", "Makarantar iyo, ɗakin karatu, credit union, asibiti"] },
            { title: "Wasiƙarku tana nuna", bullets: ["Manufa, labari, maƙasudin koyo", "Tsarin rubutu uku da masu bin ku", "Buƙata a sarari"] },
            { title: "Kafin ku amince", bullets: ["Ƙasa da shekara 18: ku sa iyaye", "Ku duba dokokin NIL na makaranta da jiha"] }
          ],
          sources: [{ name: "NCAA: Name, Image and Likeness (suna, hoto da kamanni)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Ku zaɓi abokin haɗin gwiwa ɗaya ku rubuta wasiƙa ƙasa da kalmomi 150 da taimakon AI. Ku sa mai horarwa ko iyaye su karanta ta.",
          youCanNow: "neman haɗin gwiwa da kamfani ko ƙungiyar sa-kai don kamfen ɗinku.",
          quickCheck: [
            { objective: "O5", q: "Wane abokin haɗin gwiwa ya dace da kamfen na kare kai a ruwa?", options: ["Mai sayar da motoci", "Makarantar koyon iyo", "Shagon wasannin bidiyo", "Shagon pizza"], answer: 1, why: "Ku nemi abokan haɗin gwiwa da suka riga suka damu da manufarku." },
            { objective: "O5", q: "Wani abokin haɗin gwiwa ya ba ku kayan wasa kyauta don kamfen ɗinku, kuma ku ɗan wasa ɗalibi ne. Me za ku fara yi?", options: ["Ku karɓa nan take", "Ku wallafa game da shi ba tare da faɗa wa kowa ba", "Ku duba dokokin NIL na makarantarku da jiharku", "Ku sayar da kayan"], answer: 2, why: "Ku duba dokokin NIL kafin ku karɓi kowane kuɗi ko kaya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bayyanawa, gaskiya da auna tasiri",
          minutes: 5,
          goal: "Bayyana tallafin kamfani a sarari kuma ku auna ko mutane sun koyi wani abu.",
          text: [
            "Idan kamfani ya biya ku ko ya ba ku wani abu don kamfen ɗin, FTC (hukumar kare masu sayayya ta Amurka) ta ce ku bayyana shi a sarari a kowane rubutu, kusa da farko: \"Paid partnership with [brand]\" (haɗin gwiwa da aka biya tare da [kamfani]) ko \"Thanks to [brand] for supporting this campaign\" (godiya ga [kamfani] da ya tallafa wa wannan kamfen). A bidiyo, ku faɗe shi kuma ku nuna shi.",
            "Ku faɗi abin da kuka yarda da shi kawai, da abin da takardar bayananku ta goyi baya. Kada ku bar abokin haɗin gwiwa ya ƙara iƙirarin da ba za ku iya tabbatarwa ba, musamman iƙirari game da lafiya.",
            "Ku auna koyo, ba so (likes) kawai ba: ku ƙirga rabawa, ajiyewa, sharhohi masu tambayoyi, mutanen da suka ɗauki matakin (kamar yin rajistar horo), ko ku yi ƙuri'ar tambayoyi biyu a ƙarshe. Ku raba sakamakon da abokin haɗin gwiwarku."
          ],
          steps: ["Ku ƙara bayyanawa a sarari a kowane rubutu da aka tallafa.", "Ku duba kowane iƙirari da takardar bayananku.", "Ku zaɓi hanyoyi biyu na auna tasiri.", "Ku yi gajeriyar ƙuri'a bayan rubutu na 3.", "Ku aika sakamakon ga abokin haɗin gwiwarku."],
          words: [["Bayyanawa (disclosure)", "bayani a sarari cewa kamfani ya biya ku ko ya tallafa muku."], ["Tasiri (impact)", "ainihin canjin da kamfen ɗinku ya kawo, kamar mutane su koyi ko su ɗauki mataki."]],
          slides: [
            { title: "Ku bayyana a sarari", bullets: ["A kowane rubutu da aka tallafa, kusa da farko", "\"Paid partnership with [brand]\"", "Bidiyo: ku faɗe shi kuma ku nuna shi"] },
            { title: "Ku riƙe gaskiya", bullets: ["Iƙirarin da takardar bayananku ta goyi baya kaɗai", "Babu iƙirarin lafiya da ba a tabbatar ba"] },
            { title: "Ku auna koyo", bullets: ["Rabawa, ajiyewa, tambayoyi", "Mutanen da suka ɗauki matakin", "Ƙuri'a mai tambayoyi biyu"] }
          ],
          sources: [{ name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Aikin ƙarshe: ku haɗa tsarin kamfen ɗinku tare da maƙasudin koyo, rubutu uku, takardar bayanai, kira zuwa ga aiki, wasiƙar neman haɗin gwiwa, kalmomin bayyanawa, da wanda kuka tambaya game da dokokin NIL.",
          youCanNow: "gudanar da kamfen na ilimantarwa na gaskiya tare da bayyanawa a sarari, da auna tasirinsa.",
          quickCheck: [
            { objective: "O6", q: "A ina bayyanawa za ta kasance a rubutun kamfen da aka tallafa?", options: ["Kusa da farkon kowane rubutu", "A rubutu na ƙarshe kawai", "A bayanin shafinku (bio) kawai", "A ƙarshen hashtag masu yawa"], answer: 0, why: "FTC ta ce ku bayyana a sarari a kowane rubutu, kusa da farko." },
            { objective: "O6", q: "Kamfen ɗinku ya sami so (likes) masu yawa. Ta yaya za ku san ko mutane sun koyi wani abu?", options: ["So yana tabbatar da shi", "Ku tambayi kamfanin", "Ku ƙirga masu bin ku", "Ku yi gajeriyar ƙuri'a ku ƙirga mutanen da suka ɗauki matakin"], answer: 3, why: "Ku auna koyo, ba so kawai ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsarawa da haɗin gwiwa",
        questions: [
          { objective: "O4", q: "Rubutu na 1 na kamfen game da me ne?", options: ["Sayen kayan", "Ƙididdigar wasanku", "Kyauta", "Me yasa yake da muhimmanci: labarinku"], answer: 3, why: "Labarinku yana sa mutane su damu." },
          { objective: "O5", q: "Wane abokin haɗin gwiwa ya dace da kamfen na karatu?", options: ["Ɗakin karatu ko shagon littattafai na yankinku", "Manhajar caca", "Abin sha mai ƙara kuzari", "Mai sayar da motoci"], answer: 0, why: "Sun riga sun damu da karatu." },
          { objective: "O6", q: "Wani kamfani ya tallafa wa kamfen ɗinku da kuɗi. Kowane rubutu ya kamata ya haɗa da:", options: ["Babu komai", "Hashtag da aka ɓoye", "Bayyanawa a sarari kusa da farko", "Sunan ƙarya"], answer: 2, why: "FTC tana buƙatar bayyanawa a sarari." },
          { objective: "O6", q: "Wani abokin haɗin gwiwa yana son ku ce abin shansa yana hana raunin kai. Za ku:", options: ["Faɗa", "Faɗa a ɓoye", "Faɗa ba tare da bayyanawa ba", "Ƙi; iƙirarin lafiya ne da ba a tabbatar ba"], answer: 3, why: "Kada ku yi iƙirarin da ba za ku iya tabbatarwa ba." },
          { objective: "O6", q: "Wanne ne ya fi auna koyo?", options: ["So (likes) kaɗai", "Mutanen da suka ɗauki matakin da sakamakon ƙuri'a", "Yawan masu bin ku", "Yawan emoji"], answer: 1, why: "Tasiri yana game da koyo da ɗaukar mataki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kamfen na Ilimantarwa tare da Kamfanoni",
    questions: [
      { objective: "O1", q: "Kamfen na ilimantarwa yawanci:", options: ["Yana sayar da takalma", "Yana nuna fitattun lokutan wasa", "Yana koyar da abu mai amfani", "Yana jera ƙididdiga"], answer: 2, why: "Koyarwa ita ce babban maƙasudi." },
      { objective: "O1", q: "Me yasa kamfanoni suke amfani da 'yan wasa a kamfen?", options: ["Matasa da iyalai suna amincewa da 'yan wasa", "'Yan wasa suna aiki kyauta", "Dole ne", "'Yan wasa likitoci ne"], answer: 0, why: "Amincewa tana sa saƙon ya isa." },
      { objective: "O1", q: "Wanne ne misalin batun kamfen?", options: ["Kare kai a ruwa", "Gulmar abokan hamayya", "Shawarwarin caca", "Abincin rage nauyi na bogi"], answer: 0, why: "Yana da amfani kuma yana da aminci a koyar." },
      { objective: "O2", q: "Maƙasudin koyo nawa ya kamata kamfen ya kasance da su?", options: ["Goma", "Babu", "Ɗaya", "Gwargwadon iko"], answer: 2, why: "Maƙasudi ɗaya yana sa a mayar da hankali." },
      { objective: "O2", q: "Manufofi mafi ƙarfi suna fitowa daga:", options: ["Duk abin da ke tashe", "Rayuwarku ta gaske", "Jeri barkatai", "Abokin hamayya"], answer: 1, why: "Labarai na gaske na gaskiya ne." },
      { objective: "O2", q: "Na gaske (authentic) yana nufin:", options: ["Mai tsada", "Mai yaɗuwa a intanet", "Mai tsawo", "Gaskiya kuma ya dace da ku"], answer: 3, why: "Kasancewa na gaske yana gina amincewa." },
      { objective: "O3", q: "Wace ce majiyar hukuma game da raunin kai?", options: ["Shafin barkwanci (meme)", "Talla", "CDC HEADS UP", "Wurin sharhohi"], answer: 2, why: "Daga hukumar lafiya ta gwamnati ne." },
      { objective: "O3", q: "Takardar bayanai tana ƙunshe da:", options: ["Kalmar sirrinku", "Ra'ayoyi kawai", "Ƙididdigar abokan hamayya", "Kowane bayani, majiyarsa da ranar da aka duba shi"], answer: 3, why: "Tana tabbatar da bayananku." },
      { objective: "O3", q: "Don shawarar kai-da-kai, kamfen ɗinku ya kamata ya:", options: ["Tura mutane wurin ƙwararru", "Gano cutar mutane", "Ba da yawan magani", "Ƙyale shi"], answer: 0, why: "Ku kuna wayar da kai; ƙwararru ne ke ba da shawara." },
      { objective: "O4", q: "Rubutu na 3 na kamfen shi ne:", options: ["Hoton kai barkatai (selfie)", "Ɗaukar mataki", "Ƙorafi", "Kyauta"], answer: 1, why: "Mataki yana mayar da koyo zuwa canji." },
      { objective: "O4", q: "Idan kuna ba AI umarni (prompt) don rubuce-rubuce, ku gaya masa ya:", options: ["Ƙirƙiri ƙididdiga", "Ƙara labarai masu ban tsoro", "Yi amfani da bayanai daga takardar bayananku kaɗai", "Kwafi wasu 'yan wasa"], answer: 2, why: "Wannan yana kiyaye gaskiyar bayanai." },
      { objective: "O4", q: "Salo mafi kyau ga batutuwan tsaro shi ne:", options: ["Mai ba da fata kuma mai amfani", "Mai ban tsoro", "Mai fushi", "Barkwanci game da rauni"], answer: 0, why: "Mutane suna ɗaukar mataki kan saƙonni masu amfani da ke ba da fata." },
      { objective: "O5", q: "Credit union (ƙungiyar ajiya da lamuni) abokin haɗin gwiwa ne mai kyau don:", options: ["Sanin raunin kai", "Iyo", "Karatu", "Ilimin kuɗi"], answer: 3, why: "Ta riga ta damu da ilimin kuɗi." },
      { objective: "O5", q: "Wasiƙar neman haɗin gwiwa ya kamata ta haɗa da:", options: ["Farashi kawai", "Manufarku, labari, maƙasudi, tsari, masu bin ku da buƙata a sarari", "Ƙididdigarku kawai", "Tilastawa"], answer: 1, why: "Abokan haɗin gwiwa suna buƙatar cikakken hoto." },
      { objective: "O5", q: "Kafin karɓar kayan abokin haɗin gwiwa, ɗan wasa ɗalibi ya kamata ya:", options: ["Wallafa nan take", "Duba dokokin NIL na makaranta da jiha", "Ɓoye shi", "Tambayi abokin hamayya"], answer: 1, why: "Dokokin NIL sun bambanta." },
      { objective: "O5", q: "Idan kuna ƙasa da shekara 18 kuma kuna neman abokin haɗin gwiwa:", options: ["Ku yi amfani da shekarun ƙarya", "Ku ɓoye shi", "Ku bar neman", "Ku sa iyaye ko mai kula da ku"], answer: 3, why: "Manya suna taimakawa wajen kare yara." },
      { objective: "O6", q: "Wace bayyanawa ce a sarari?", options: ["\"Paid partnership with [brand]\" kusa da farko", "\"#sp\" a ƙarshe", "Babu komai", "A bayanin shafinku (bio) kawai"], answer: 0, why: "A sarari take kuma ba za a rasa ganin ta ba." },
      { objective: "O6", q: "A bidiyon da aka tallafa, bayyanawa ya kamata ta kasance:", options: ["A bayanin bidiyo kawai", "A cikin sharhi", "An faɗe ta kuma an nuna ta", "An bar ta"], answer: 2, why: "Bayyanawar bidiyo tana cikin bidiyon da kansa." },
      { objective: "O6", q: "Tasiri yana nufin:", options: ["Yawan masu bin ku", "So (likes) kawai", "Tsawon bidiyon", "Ainihin canjin da kamfen ɗinku ya kawo"], answer: 3, why: "Tasiri shi ne koyo da ɗaukar mataki." },
      { objective: "O6", q: "Bayan kamfen ɗin, ya kamata ku:", options: ["Goge komai", "Raba sakamako da abokin haɗin gwiwarku", "Ɓoye lambobin", "Nemi ƙarin kuɗi ba tare da sakamako ba"], answer: 1, why: "Bayar da rahoton sakamako yana gina haɗin gwiwa mai ɗorewa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 3, 6, 9, 13, 16, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Manufa da maƙasudin koyo", objective: "O2", notYet: "Babu maƙasudi a sarari, ko manufar ba ta dace da masu bin ku ba.", meets: "Manufa ɗaya tare da labarin dangantaka, da maƙasudin koyo ɗaya da ke faɗin wa zai san ko ya yi me.", exceeds: "Ana iya auna maƙasudin, kuma ya yi daidai da hanyoyin auna tasirin da aka zaɓa." },
      { name: "Takardar bayanai", objective: "O3", notYet: "Bayanai marasa majiya, ko an bar bayanan da ba a iya tabbatarwa ba.", meets: "Kowane bayani yana da hanyar haɗin majiyar hukuma ko ta ƙwararru da ranar dubawa.", exceeds: "Wani ƙwararre kamar mai kula da lafiyar 'yan wasa ko malami ya duba bayanan." },
      { name: "Tsarin rubutu uku", objective: "O4", notYet: "Rubutu ƙasa da uku, ko rubutu da ba shi da jan hankali ko kira zuwa ga aiki.", meets: "Rubutun me yasa, me da mataki, kowanne da jan hankali, manyan bayanai da kira zuwa ga aiki, da bayanai daga takardar bayanai kaɗai.", exceeds: "Salon yana ba da fata kuma yana da amfani, kuma kowane rubutu yana tura mutane wurin ƙwararre ko kayan taimako kyauta." },
      { name: "Wasiƙar neman haɗin gwiwa", objective: "O5", notYet: "Babu buƙata a sarari, ko abokin haɗin gwiwar bai dace da manufar ba.", meets: "Ƙasa da kalmomi 150 ga abokin haɗin gwiwa da ya dace, da manufa, labari, maƙasudi, tsari, masu bin ku da buƙata a sarari.", exceeds: "An sa ta zama taku da dalili na gaskiya na zaɓar wannan abokin haɗin gwiwa, kuma an sa iyaye inda ake buƙata." },
      { name: "Bayyanawa da dokoki", objective: "O6", notYet: "Babu tsarin bayyanawa, ko ba a duba dokokin NIL ba.", meets: "Bayyanawa a sarari ga kowane rubutu, da wanda ya tabbatar da dokokin NIL a makaranta ko jiha.", exceeds: "Ya kuma ambaci hanyoyi biyu na auna tasiri, da yadda za a raba sakamako da abokin haɗin gwiwa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala tsarin kamfen kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da suka gudanar da kamfen ɗinsu na rubutu uku cikin kwanaki 30 (binciken biyo baya)",
      "Mutanen da suka ɗauki matakin kamfen, kamar yin rajistar horo, ko sakamakon ƙuri'a da ke nuna koyo",
      "Haɗin gwiwar da aka ƙulla da kamfani ko ƙungiyar sa-kai, da abokan haɗin gwiwa da suka amince da kamfen na biyu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai kafofin sada zumunta",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Samun majiyoyin hukuma na manufarku, kamar shafukan CDC HEADS UP",
      "Ƙa'idar NIL ta makarantarku ko dokokin ƙungiyar wasanni ta jiharku",
      "Kusan minti 60"
    ],
    facilitatorNotes: [
      "Ku taimaki masu koyo su zaɓi manufofin da za su iya koyarwa lafiya; kamfen na lafiya da lafiyar ƙwaƙwalwa su tura mutane wurin ƙwararru, ba su ba da shawarar kai-da-kai ba.",
      "Ku nemi wani ƙwararre na yankin, kamar mai kula da lafiyar 'yan wasa, ma'aikacin ɗakin karatu ko mai ba da shawara kan kuɗi, ya duba takardun bayanai.",
      "Ku sa iyaye ko masu kula da 'yan wasa 'yan ƙasa da shekara 18 kafin a tuntuɓi abokan haɗin gwiwa.",
      "Ku tura tambayoyin NIL zuwa ofishin bin ƙa'ida (compliance) ko ƙungiyar wasanni ta jiha kafin a karɓi kowane kuɗi ko kaya.",
      "Ku duba cewa kowane rubutu da aka tallafa yana da bayyanawa a sarari, kuma babu iƙirari fiye da takardar bayanai."
    ]
  }
};
