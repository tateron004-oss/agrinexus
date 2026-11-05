"use strict";

// Koach Learn course, Hausa (ha) translation of shared/social-media-apps.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "social-media-apps-ha",
  lang: "ha",
  translationOf: "social-media-apps",
  category: "Seniors and Technology",
  name: "Manhajojin Sada Zumunta da Yadda Ake Amfani da Su",
  skills: "Zaɓar manhajar sada zumunta, Shirya bayanan kai (profile) lafiya, Rubuta post da sharhi, Saitunan sirri, Gane asusun bogi da zamba",
  outcome: "buɗe asusun sada zumunta da saitunan sirri masu aminci, bin mutane da ƙungiyoyin da kuke so, rubuta post da sharhi cikin ladabi, da gane asusun bogi da zamba ku kai rahotonsu.",
  about: [
    "Manhajojin sada zumunta (social media) kamar Facebook, Instagram, WhatsApp, YouTube, TikTok da LinkedIn su ne wuraren da iyalai da yawa ke raba hotuna, inda ƙungiyoyin al'umma ke sanya labarai, kuma inda masu ɗaukar aiki ke neman ma'aikata.",
    "Wannan kwas ɗin yana nuna muku yadda ake zaɓar manhaja, yadda ake shirya bayanan kai (profile) da ke kiyaye rayuwarku ta sirri, yadda ake rubuta post da sharhi, da yadda za ku kasance lafiya daga asusun bogi da zamba.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "A manhajar sada zumunta ɗaya: ku saita profile ɗinku ta yadda abokai ko mabiya da kuka amince da su kaɗai za su ga post ɗinku, ku bi ɗan iyali ko aboki ɗaya da ƙungiya ko shafi ɗaya na yankinku, ku rubuta sharhi mai kyau a kan wani post, sannan ku nemo maɓallin Report (kai rahoto) a kan post ko asusu don ku san inda yake.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke son amfani da sada zumunta don ci gaba da hulɗa da iyali, abokai, coci ko masallaci, ƙungiyoyin unguwa ko neman aiki: tsofaffi, kakanni, masu dawowa cikin al'umma, sababbin shigowa da iyayen matasa.",
    startingPoint: "Suna iya amfani da wayar zamani ko kwamfuta don buɗe manhajoji da rubutu. Wasu suna da asusun da wani ɗan uwa ya buɗe musu; kaɗan ne suka duba saitunan sirrinsu, suka kunna tabbatarwa mataki biyu, ko suka san yadda ake gane asusun bogi, kai rahoton post ko toshe wani.",
    gap: "Sada zumunta ita ce wurin da iyalai da yawa ke raba labarai, kuma inda ake sanya labarin ƙungiyoyi, taruka da ayyuka, amma kuma wurin da 'yan damfara ke samun mutane. Ba tare da saitunan aminci da kyawawan halaye ba, mutane suna bayyana abubuwa da yawa, suna karɓar buƙatun abota na bogi, suna faɗawa zambar soyayya da ta kyauta, ko suna jin baƙin ciki daga kallon post ba tsayawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar feed, profile da saitunan sirri",
      "Na'urori: wayar zamani, tablet ko kwamfuta mai intanet",
      "Lokaci: kusan minti 5 kowane darasi, kusan minti 60 gaba ɗaya",
      "Kuɗi: manhajoji kyauta kaɗai, daga shagon manhajoji na hukuma",
      "Sirri da shekaru: masu koyo ba sa sanya adireshi, shekarar haihuwa ko shirin tafiya, kuma suna duba ƙaramin shekarun kowace manhaja kafin yaro ko matashi ya buɗe asusu"
    ],
    prerequisites: "Babu. Kwas ɗin \"Using a Smartphone and Tablet\" (Amfani da Wayar Zamani da Tablet) yana taimaka wa masu koyo da ba su saba da manhajoji ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani abu da kuke son yi, kamar ganin hotunan iyali ko neman aiki", action: "zaɓar manhajar sada zumunta da ta dace da shi", standard: "kuna zaɓar manhajar da ta dace kowane lokaci" },
    { id: "O2", condition: "Ta amfani da manhajar sada zumunta daga shagon hukuma", action: "buɗe asusu da profile mai aminci da kunna tabbatarwa mataki biyu", standard: "ba tare da adireshin gida, shekarar haihuwa ko lambar waya a profile ba, kuma tabbatarwa mataki biyu a kunne" },
    { id: "O3", condition: "A asusunku na sada zumunta", action: "bin mutane da ƙungiyoyin da kuka tabbatar da su, rubuta post da barin sharhi mai kyau", standard: "kuna duba wanda zai ga kowane post kafin ku raba shi" },
    { id: "O4", condition: "A cikin saitunan sirri na manhajar", action: "saita wanda zai iya ganin post ɗinku, ya nemo ku, ya kuma tura muku saƙo", standard: "post a saita ga abokai ko mabiya da aka amince da su, kuma wurin da kuke a cikin post a kashe" },
    { id: "O5", condition: "Idan aka turo muku buƙatar abota ko saƙo", action: "gane alamun asusun bogi ko zamba da ƙin amincewa da shi", standard: "kuna ambaton aƙalla alamun gargaɗi biyu, kuma ba za ku taɓa aika kuɗi, katin kyauta ko code ba" },
    { id: "O6", condition: "Idan akwai post, asusu ko ɗabi'a da ba ku so", action: "toshe shi, kai rahotonsa ko rufe shi (mute), da saita iyakar lokaci ga manhajar", standard: "kuna zaɓar kayan aikin da ya dace da kowane hali" }
  ],
  chapters: [
    {
      name: "Babi na 1: Fara amfani da sada zumunta",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne sada zumunta, kuma wace manhaja ke yin me",
          minutes: 4,
          goal: "Zaɓi manhajar sada zumunta da ta dace da abin da kuke son yi.",
          text: [
            "Manhajojin sada zumunta suna bar mutane su raba kalmomi, hotuna da bidiyo, kuma su yi magana da juna. Kowace tana da kyau don abubuwa daban-daban.",
            "Facebook: iyali, abokai, ƙungiyoyin yanki da taruka. Instagram: hotuna da gajerun bidiyo. WhatsApp: saƙonni da kira kyauta da iyali, har zuwa wasu ƙasashe. YouTube: bidiyo don kallo da koyo. TikTok: gajerun bidiyo. LinkedIn: ayyuka da abokan hulɗar aiki. Nextdoor: labarai daga unguwarku.",
            "Ba sai kuna da dukkansu ba. Ku fara da ɗaya da ta dace da abin da kuke so, kamar ganin hotunan iyali ko neman aiki. Kowace manhaja tana da ƙaramin shekaru a cikin dokokinta; ku duba su kafin yaro ko matashi ya buɗe asusu."
          ],
          words: [["Sada zumunta (social media)", "manhajoji da shafukan intanet da mutane ke raba post da magana da juna."], ["Post", "abin da kuke rabawa: kalmomi, hoto ko bidiyo."], ["Feed", "jerin post ɗin da kuke gungurawa (scroll) don gani."]],
          slides: [
            { title: "Mene ne sada zumunta", bullets: ["Manhajojin da mutane ke raba kalmomi, hotuna da bidiyo", "Kuma suna magana da juna"] },
            { title: "Wace manhaja ke yin me", bullets: ["Facebook: iyali, abokai, ƙungiyoyin yanki", "Instagram da TikTok: hotuna da gajerun bidiyo", "WhatsApp: saƙonni da kira", "YouTube: bidiyo; LinkedIn: ayyuka"] },
            { title: "Ku fara da ɗaya", bullets: ["Ku zaɓi manhajar da ta dace da burinku", "Ku duba dokokin shekaru na kowace manhaja don yara"] }
          ],
          tryIt: "Ku rubuta abu ɗaya da kuke so daga sada zumunta (misali: ganin hotunan jikoki, shiga ƙungiyar coci, masallaci ko al'umma, ko neman aiki). A gefensa, ku rubuta manhajar wannan darasin da ta fi dacewa.",
          youCanNow: "faɗin abin da manyan manhajojin sada zumunta ke yi, da zaɓar ɗaya da ta dace da burinku.",
          quickCheck: [
            { objective: "O1", q: "Wace manhaja ce galibi don labarai daga unguwarku?", options: ["LinkedIn", "TikTok", "Nextdoor", "Instagram"], answer: 2, why: "Nextdoor don labarai ne daga unguwarku." },
            { objective: "O1", q: "Kuna son ganin hotunan jikokinku da shiga ƙungiyar coci ta yankinku. Da wace manhaja za ku fara?", options: ["LinkedIn", "Facebook", "Shafin neman aiki", "Dukkansu a lokaci ɗaya"], answer: 1, why: "Facebook don iyali, abokai, ƙungiyoyin yanki da taruka ne; ku fara da manhaja ɗaya da ta dace." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shirya profile mai aminci",
          minutes: 5,
          goal: "Buɗe asusu ku cike profile ba tare da bayyana abubuwa da yawa ba.",
          text: [
            "Ku saka manhajar daga shagon manhajoji na hukuma kaɗai, ko ku je ainihin shafin intanet na kamfanin. Ku yi rajista da imel ko lambar wayarku da kalmar sirri (password) mai ƙarfi da ba ku amfani da ita a wani wuri.",
            "Profile ɗinku shi ne shafin da ke faɗa wa mutane ko ku wane ne. Ku sa sunanku da hoto mai fara'a. Kada ku sa shekarar haihuwarku, adireshin gida, lambar waya da lokacin da ba ku gida. 'Yan damfara suna tattara waɗannan bayanai.",
            "Ku kunna tabbatarwa mataki biyu (two-step verification, wani lokaci ana ce da ita two-factor authentication) a saitunan tsaro na manhajar. Sannan, ko da wani ya saci kalmar sirrinku, zai kuma buƙaci code daga wayarku."
          ],
          steps: ["Ku saka manhajar daga shagon manhajoji na hukuma.", "Ku yi rajista da imel ko waya da sabuwar kalmar sirri mai ƙarfi.", "Ku sa sunanku da hoto mai fara'a.", "Kada ku sa adireshinku, lambar waya, cikakkiyar ranar haihuwa da shirin tafiya.", "Ku buɗe saitunan tsaro ku kunna tabbatarwa mataki biyu."],
          words: [["Profile (bayanan kai)", "shafinku da ke nuna ko ku wane ne a manhajar."], ["Tabbatarwa mataki biyu (two-step verification)", "bincike na biyu, yawanci code da ake turo wayarku, lokacin da kuke shiga asusu."]],
          slides: [
            { title: "Ku yi rajista lafiya", bullets: ["Shagon manhajoji na hukuma ko ainihin shafin kamfani", "Kalmar sirri mai ƙarfi da ba a amfani da ita a wani wuri"] },
            { title: "Abin da za ku sa a profile", bullets: ["Sunanku", "Hoto mai fara'a"] },
            { title: "Abin da ba za ku sa ba", bullets: ["Adireshin gida da lambar waya", "Cikakkiyar ranar haihuwa", "Lokacin da ba ku gida"] },
            { title: "Ku kunna tabbatarwa mataki biyu", bullets: ["Ku nemo ta a saitunan tsaro", "Ɓarawo zai kuma buƙaci code daga wayarku"] }
          ],
          tryIt: "Ku buɗe asusu a manhajar da kuka zaɓa (ko ku buɗe wadda kuke da ita). Ku duba profile ɗinku: ku cire duk abin da ke cikin jerin \"abin da ba za ku sa ba\", sannan ku kunna tabbatarwa mataki biyu.",
          youCanNow: "shirya profile na sada zumunta da ke nuna ko ku wane ne ba tare da bayyana bayanan sirri ba.",
          quickCheck: [
            { objective: "O2", q: "Mene ne profile ɗinku?", options: ["Shafin da ke faɗa wa mutane ko ku wane ne", "Jerin post daga wasu", "Kalmar sirrinku", "Saitin da ke ɓoye ku"], answer: 0, why: "Profile ɗinku shafinku ne, mai sunanku da hotonku." },
            { objective: "O2", q: "Rajistar tana neman cikakkiyar ranar haihuwarku, adireshi da waya don nunawa a profile. Me za ku yi?", options: ["Ku nuna dukkansu don mutane su same ku", "Ku nuna adireshinku kaɗai", "Ku sa ranakun tafiyarku ma", "Kada ku sa su a profile, domin 'yan damfara suna tattara waɗannan bayanai"], answer: 3, why: "Rashin sa shekarar haihuwa, adireshi da lambar waya yana kare ku daga 'yan damfara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bin mutane, rubuta post da sharhi",
          minutes: 5,
          goal: "Ku bi mutane da ƙungiyoyi, ku rubuta post, ku bar sharhi mai kyau.",
          text: [
            "Don ganin post ɗin wani, ku tura buƙatar abota (friend request) ko ku bi shi (follow). Ku nemi sunansa, ku duba hoton da abokan da kuke tarayya da su don ku tabbata shi ne da gaske, sannan ku taɓa Add friend ko Follow. Kuna kuma iya shiga ƙungiyoyi (groups): na coci ko masallaci, na unguwa, na sha'awa ko na aiki.",
            "Don rubuta post, ku taɓa akwatin da ke tambayar abin da ke zuciyarku, ko maɓallin +. Ku rubuta 'yan kalmomi, ku ƙara hoto idan kuna so, ku duba wanda zai iya gani, sannan ku taɓa Post ko Share.",
            "Amsawa da alama (reaction, kamar babban yatsa ko zuciya) tana nuna kun ga post. Sharhi (comment) yana ƙara kalmominku a ƙarƙashinsa. Ku yi ladabi: ku rubuta kamar mutumin yana cikin ɗakin. Ku tuna cewa ana iya kwafe abin da kuka sanya kuma a gan shi na dogon lokaci."
          ],
          steps: ["Ku nemi mutum ko ƙungiya da suna.", "Ku tabbata shi ne ainihin: hoto, abokan tarayya, post.", "Ku taɓa Add friend, Follow ko Join.", "Don post: ku taɓa akwatin post ko +, ku rubuta, ku ƙara hoto, ku duba wanda zai gani, sannan Post.", "Don sharhi: ku taɓa Comment a ƙarƙashin post, ku rubuta abu mai kyau, ku aika."],
          words: [["Follow (bi)", "zaɓar ganin post ɗin wani a feed ɗinku."], ["Group (ƙungiya)", "wuri a manhajar na mutane masu sha'awa iri ɗaya."], ["Comment (sharhi)", "kalmomin da kuke rubutawa a ƙarƙashin post ɗin wani."], ["React (amsawa da alama)", "taɓa alamar like, zuciya ko wata alama a kan post."]],
          slides: [
            { title: "Ku bi kuma ku shiga", bullets: ["Ku nemi sunan", "Ku tabbata shi ne da gaske", "Ku taɓa Add friend, Follow ko Join"] },
            { title: "Rubuta post", bullets: ["Ku taɓa akwatin post ko +", "Ku rubuta ku ƙara hoto", "Ku duba wanda zai gani, sannan Post"] },
            { title: "Amsawa da alama da sharhi", bullets: ["Alama: like ko zuciya", "Sharhi: kalmominku a ƙarƙashin post", "Ku yi ladabi; post na iya daɗewa sosai"] }
          ],
          tryIt: "Ku bi ɗan iyali ko aboki ɗaya, ku shiga ko ku bi ƙungiya ko shafi ɗaya na yankinku. Sannan ku bar sharhi mai kyau a kan ɗaya daga cikin post ɗinsu.",
          youCanNow: "bin mutane da ƙungiyoyi, rubuta post, da amsawa da alama da sharhi cikin ladabi.",
          quickCheck: [
            { objective: "O3", q: "Me alama (reaction), kamar babban yatsa ko zuciya, take nunawa?", options: ["Cewa kuna son toshe mutumin", "Cewa kun kai rahoton post ɗin", "Cewa kun raba post ɗin ga kowa", "Cewa kun ga post ɗin"], answer: 3, why: "Alama tana nuna kun ga post; sharhi yana ƙara kalmominku." },
            { objective: "O3", q: "Ba ku yarda da post ɗin ɗan uwanku ba. Me za ku yi?", options: ["Ku rubuta cikin ladabi, kamar mutumin yana cikin ɗakin, ko ku yi shiru", "Ku rubuta sharhi mai fushi da manyan haruffa", "Ku sanya lambar wayarsa", "Ku raba post ɗin tare da zagi"], answer: 0, why: "Ku yi ladabi; ana iya kwafe abin da kuka sanya kuma a gan shi na dogon lokaci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Fara amfani da sada zumunta",
        questions: [
          { objective: "O1", q: "Kuna son kira da saƙonni kyauta da iyali a wata ƙasa. Wace manhaja ta fi dacewa?", options: ["LinkedIn", "WhatsApp", "Nextdoor", "TikTok"], answer: 1, why: "WhatsApp don saƙonni da kira ne, har zuwa wasu ƙasashe." },
          { objective: "O2", q: "Wane bayani ya kamata KADA ku sa a profile ɗinku?", options: ["Sunanku na farko", "Hoto mai fara'a", "Adireshin gidanku", "Abin da kuke son yi a lokacin hutu"], answer: 2, why: "Adireshin gida yana bar baƙi su same ku." },
          { objective: "O2", q: "Me tabbatarwa mataki biyu ke yi?", options: ["Tana neman code daga wayarku tare da kalmar sirrinku", "Tana ƙara girman post", "Tana ƙara muku abokai", "Tana goge asusunku"], answer: 0, why: "Ɓarawo zai kuma buƙaci code ɗin wayarku." },
          { objective: "O3", q: "Kun nemi 'yar ƙanwarku kuka sami asusu biyu masu sunanta. Me za ku yi?", options: ["Ku ƙara duka biyun", "Ku aika kuɗi ga duka biyun", "Ku ba duka biyun kalmar sirrinku", "Ku fara duba hoto, abokan tarayya da post"], answer: 3, why: "Dubawa yana taimaka muku guje wa asusun bogi da aka kwafa." },
          { objective: "O3", q: "Mene ne sharhi (comment)?", options: ["Kalmar sirrinku", "Saƙon banki na sirri", "Kalmomin da kuke rubutawa a ƙarƙashin post ɗin wani", "Sabunta manhaja"], answer: 2, why: "Sharhi amsarku ce da aka rubuta a ƙarƙashin post." }
        ]
      }
    },
    {
      name: "Babi na 2: Kiyaye sirri da aminci",
      lessons: [
        {
          objectives: ["O4"],
          title: "Saitunan sirri: zaɓar wanda zai ga me",
          minutes: 5,
          goal: "Ku saita post da profile ɗinku ta yadda mutanen da kuka zaɓa kaɗai za su gan su.",
          text: [
            "Kowace manhaja tana da saitunan sirri (privacy settings). Su ne ke yanke wanda zai iya ganin post ɗinku, wanda zai iya nemo ku, da wanda zai iya tura muku saƙo. Public yana nufin kowa a duniya. Abokai ko mabiya da kuka amince da su yana nufin mutanen da kuka ce musu e kaɗai.",
            "Ku nemi Settings, sannan Privacy (a wasu manhajoji yana cikin menu mai layuka uku ko a hoton profile ɗinku). Manhajoji da yawa kuma suna da privacy check-up (binciken sirri) da ke bi da ku ta kowane zaɓi.",
            "Farawa mai kyau: ku sa post su bayyana ga abokai kaɗai, ku amince da sababbin mabiya da kanku, ku kuma iyakance wanda zai iya tura muku saƙo. Ku kashe raba wurin da kuke (location) a cikin post idan ba ku son mutane su san inda kuke."
          ],
          steps: ["Ku buɗe menu na manhajar ko hoton profile ɗinku.", "Ku zaɓi Settings, sannan Privacy (ko privacy check-up).", "Ku saita wanda zai ga post ɗinku zuwa abokai ko mabiya da aka amince da su.", "Ku saita wanda zai iya tura muku saƙo da wanda zai iya nemo ku.", "Ku kashe location a cikin post idan ba ku buƙata."],
          words: [["Public (na kowa)", "kowa, har da baƙi, zai iya gani."], ["Saitunan sirri (privacy settings)", "zaɓuɓɓukan da ke iko da wanda ke ganin post da profile ɗinku."], ["Raba wuri (location sharing)", "nuna inda kuke lokacin da kuke sanya post."]],
          slides: [
            { title: "Wa zai iya gani?", bullets: ["Public: kowa a duniya", "Abokai ko mabiya da aka amince: mutanen da kuka ce musu e kaɗai"] },
            { title: "Nemo saitunan sirri", bullets: ["Menu ko hoton profile, sannan Settings", "Ku nemi Privacy ko privacy check-up"] },
            { title: "Farawa mai kyau", bullets: ["Post: abokai kaɗai", "Ku amince da mabiya da kanku", "Ku iyakance wanda zai tura muku saƙo", "Location a kashe a cikin post"] }
          ],
          tryIt: "Ku buɗe saitunan sirri na manhajarku. Ku saita post ɗinku ga abokai ko mabiya da aka amince da su kaɗai, ku kashe location a cikin post. Sannan ku kalli profile ɗinku kamar yadda baƙo zai gan shi, idan manhajar ta bari.",
          youCanNow: "saita sirrinku ta yadda mutanen da kuka zaɓa kaɗai za su ga post da bayananku.",
          quickCheck: [
            { objective: "O4", q: "Mene ne privacy check-up?", options: ["Ziyarar likita", "Kayan aiki a manhajoji da yawa da ke bi da ku ta kowane zaɓin sirri", "Hanyar sanya post ga kowa", "Saƙon zamba"], answer: 1, why: "Manhajoji da yawa suna da privacy check-up da ke bi da ku ta kowane zaɓi." },
            { objective: "O4", q: "Ba ku son baƙi su ga inda kuke lokacin da kuke sanya post. Me za ku yi?", options: ["Ku sa duk post su zama public", "Ku sanya adireshinku a maimakon haka", "Ku kashe raba wuri (location) a cikin post", "Ku karɓi kowace buƙatar abota"], answer: 2, why: "Kashe location a cikin post yana hana mutane sanin inda kuke." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gane asusun bogi da zamba",
          minutes: 5,
          goal: "Ku gane asusun bogi ko saƙon zamba ku ƙi shi.",
          text: [
            "'Yan damfara suna buɗe asusun bogi, wani lokaci suna kwafe suna da hoton ainihin abokinku. Buƙatar abota ta biyu daga wanda kuke abota da shi tun tuni alamar gargaɗi ce. Ku tambayi ainihin mutumin ta waya kafin ku amince.",
            "Federal Trade Commission (FTC, hukumar kare masu saye ta Amurka) ta lissafa alamun zamba: yin kamar wani da kuka sani ko kuka amince da shi, wata matsala ko kyauta, matsa muku ku yi abu nan take, da neman biya ta katin kyauta (gift card), tura kuɗi ta banki (wire), manhajar biya ko kuɗin intanet (cryptocurrency). A sada zumunta wannan yana kama da \"Kun ci kyauta! Ku biya ɗan kuɗi\", saƙonnin soyayya da ba da daɗewa ba suke neman kuɗi, da tayin aiki ko zuba jari da ya yi kyau fiye da gaskiya.",
            "Kada ku taɓa aika kuɗi, katin kyauta ko code ga wanda kuka haɗu da shi a intanet kaɗai. A Amurka kuna iya kai rahoton zamba a reportfraud.ftc.gov."
          ],
          steps: ["Ku yi hankali da sababbin buƙatun abota, musamman daga mutanen da kuka riga kuka sani.", "Ku tabbatar ta waya ko ido da ido kafin ku amince.", "Ku lura da: kyauta, gaggawa, neman kuɗi ko katin kyauta, da tayin soyayya ko aiki da ya koma kuɗi.", "Kada ku danna hanyoyin haɗinsu (links) ko ku aika kuɗi ko code.", "Ku kai rahoton asusun a manhajar, kuma a Amurka a reportfraud.ftc.gov."],
          words: [["Asusun bogi (fake account)", "profile da ɗan damfara ya buɗe, sau da yawa yana kwaikwayon ainihin mutum."], ["Zambar soyayya (romance scam)", "ɗan damfara yana yin kamar yana son ku a intanet, sannan ya nemi kuɗi."]],
          slides: [
            { title: "Asusun bogi", bullets: ["Buƙata ta biyu daga abokin da kuke da shi tun tuni", "Sabon profile, post kaɗan, abokai kaɗan", "Ku fara tambayar ainihin mutumin"] },
            { title: "Alamun zamba na FTC", bullets: ["Yin kamar wanda kuka amince da shi", "Wata matsala ko kyauta", "Matsa muku ku yi abu yanzu", "Biya ta katin kyauta, wire, manhajar biya ko crypto"] },
            { title: "Kada ku taɓa aikawa", bullets: ["Kuɗi ko katin kyauta ga wanda kuka sani a intanet kaɗai", "Code daga wayarku"] },
            { title: "Ku kai rahoto", bullets: ["Ku yi amfani da maɓallin Report na manhajar", "Amurka: reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Yadda ake guje wa zamba", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Kai rahoton zamba", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Ku duba buƙatun abota ko mabiyanku. Duk wanda ba ku da tabbas game da shi, ku duba profile ɗinsa don alamun gargaɗi. Ku ƙi duk wanda ba za ku iya tabbatar da cewa na gaske ne ba.",
          youCanNow: "gane asusun bogi ko zamba a sada zumunta da ƙin amincewa da shi.",
          quickCheck: [
            { objective: "O5", q: "Wanne a cikin waɗannan alamar gargaɗin zamba ce a sada zumunta?", options: ["Matsa muku ku yi abu nan take ku biya da katin kyauta", "Abokin da kuka sani yana raba hoton ranar haihuwa", "Ƙungiyar yanki tana sanya lokacin taro", "Bidiyo game da girki"], answer: 0, why: "Matsa muku ku yi abu yanzu da biya ta katin kyauta alamomi ne da FTC ta lissafa." },
            { objective: "O5", q: "Wani da kuka haɗu da shi a intanet yana ba ku aiki idan kun fara aika masa code daga wayarku. Me za ku yi?", options: ["Ku aika code ɗin da sauri", "Ku aika kuɗi a maimakon code ɗin", "Ku ba shi kalmar sirrinku", "Ku ƙi, kuma kada ku taɓa aika code ga wanda kuka sani a intanet kaɗai"], answer: 3, why: "Kada ku taɓa aika kuɗi, katin kyauta ko code ga wanda kuka haɗu da shi a intanet kaɗai." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kai rahoto, toshewa da ɗaukar hutu",
          minutes: 4,
          goal: "Ku toshe ko ku kai rahoton asusu, ku kuma iyakance lokacin da kuke ɓatarwa.",
          text: [
            "Block (toshewa) yana hana mutum ganin post ɗinku ko tuntuɓar ku. Report (kai rahoto) yana faɗa wa manhajar cewa asusu ko post yana karya dokokinta, kamar zamba, asusun bogi ko cin zarafi. Unfollow ko Mute suna ɓoye post ɗin wani ba tare da an faɗa masa ba.",
            "Waɗannan maɓallai yawanci suna cikin menu mai ɗigo uku a kan post ko a profile na mutum. Manhajar ba ta faɗa wa mutumin cewa kun kai rahotonsa ba.",
            "An yi sada zumunta ne don ta riƙe ku kuna gungurawa. Wayoyi da manhajoji da yawa suna da saitin screen time (lokacin allo) ko iyakar lokaci. Ku zaɓi lokutan dubawa, kuma ku tashi idan post suna sa ku fushi ko baƙin ciki."
          ],
          steps: ["Ku taɓa ɗigo uku a kan post ko profile.", "Ku zaɓi Report ku zaɓi dalili, ko Block.", "Ku yi amfani da Mute ko Unfollow don ɓoye post a hankali.", "A Settings, ku nemi screen time ko iyakar lokaci na kowace rana."],
          words: [["Block (toshewa)", "yana hana mutum ganin ku ko tuntuɓar ku."], ["Report (kai rahoto)", "yana faɗa wa manhajar cewa asusu ko post yana karya dokokinta."], ["Mute (rufe murya)", "yana ɓoye post ɗin wani ba tare da an faɗa masa ba."]],
          slides: [
            { title: "Kayan aikinku", bullets: ["Block: ba za su iya tuntuɓar ku ba", "Report: ku faɗa wa manhajar game da matsala", "Mute ko Unfollow: ɓoye post a hankali"] },
            { title: "Inda za ku same su", bullets: ["Menu mai ɗigo uku a kan post ko profile", "Ba a faɗa wa mutumin cewa kun kai rahotonsa ba"] },
            { title: "Ku ɗauki hutu", bullets: ["Ku yi amfani da saitin screen time ko iyakar lokaci", "Ku tashi idan post suna ɓata muku rai"] }
          ],
          tryIt: "Atisayen aikin ƙarshe: a kan kowane post, ku taɓa ɗigo uku ku nemo Report, Block da Mute (kada ku danna su sai idan kuna buƙata). Sannan ku duba cewa saitin sirrinku har yanzu abokai kaɗai ne.",
          youCanNow: "toshewa, kai rahoto ko rufe asusu (mute), da saita iyaka ga lokacinku.",
          quickCheck: [
            { objective: "O6", q: "Me Report ke yi?", options: ["Yana tura wa mutumin adireshinku", "Yana goge asusunku", "Yana faɗa wa manhajar cewa post ko asusu yana karya dokokinta", "Yana sa post ɗinku su zama public"], answer: 2, why: "Report yana faɗa wa manhajar game da zamba, asusun bogi ko cin zarafi." },
            { objective: "O6", q: "Wani ɗan uwa yana sanya post da yawa har kuna son ganin kaɗan, ba tare da ɓata masa rai ba. Me za ku yi?", options: ["Ku kai rahotonsa a matsayin zamba", "Ku yi Mute ko Unfollow", "Ku toshe shi ku faɗa wa kowa", "Ku goge asusunku"], answer: 1, why: "Mute ko Unfollow suna ɓoye post ɗinsa ba tare da an faɗa masa ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kiyaye sirri da aminci",
        questions: [
          { objective: "O4", q: "Me \"public\" ke nufi ga post?", options: ["Ku kaɗai za ku iya gani", "Kowa, har da baƙi, zai iya gani", "Iyalinku kaɗai za su iya gani", "An goge shi"], answer: 1, why: "Kowa zai iya ganin post na public." },
          { objective: "O5", q: "Abokin da kuke abota da shi tun tuni ya turo sabuwar buƙatar abota. Mene ne mataki mafi aminci?", options: ["Ku amince nan take", "Ku aika masa kuɗi", "Ku kira ainihin abokin don ku tabbatar kafin ku amince", "Ku ba shi code ɗin wayarku"], answer: 2, why: "'Yan damfara suna kwafe asusun ainihin abokai." },
          { objective: "O5", q: "Wani da kuka haɗu da shi a intanet watan jiya ya ce yana son ku kuma yana buƙatar kuɗin tikitin jirgin sama. Wannan ya fi yiwuwa ya zama:", options: ["Zambar soyayya", "Buƙata ta yau da kullum", "Tayin aiki", "Saitin sirri"], answer: 0, why: "Soyayyar intanet da ta koma neman kuɗi zamba ce da aka saba gani." },
          { objective: "O6", q: "Wane maɓalli ne ke hana mutum tuntuɓar ku?", options: ["Like", "Share", "Comment", "Block"], answer: 3, why: "Block yana hana shi ganin ku ko tuntuɓar ku." },
          { objective: "O6", q: "A ina ake yawan samun Report da Block?", options: ["A cikin kyamara", "A menu mai ɗigo uku a kan post ko profile", "A cikin lambobin wayarku", "A shagon manhajoji"], answer: 1, why: "Menu mai ɗigo uku yana ɗauke da waɗannan zaɓuɓɓuka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Manhajojin Sada Zumunta da Yadda Ake Amfani da Su",
    questions: [
      { objective: "O1", q: "Wace manhaja ce galibi don ayyuka da abokan hulɗar aiki?", options: ["TikTok", "LinkedIn", "Instagram", "YouTube"], answer: 1, why: "An gina LinkedIn don aiki da neman aiki." },
      { objective: "O1", q: "Wace manhaja ce galibi don kallo da koyo daga bidiyo?", options: ["YouTube", "WhatsApp", "Nextdoor", "LinkedIn"], answer: 0, why: "YouTube manhajar bidiyo ce." },
      { objective: "O3", q: "\"Feed\" shi ne:", options: ["Kalmar sirrinku", "Saitin sirri", "Jerin post ɗin da kuke gungurawa don gani", "Wani nau'in sharhi"], answer: 2, why: "Feed ɗinku yana nuna post daga mutane da ƙungiyoyin da kuke bi." },
      { objective: "O2", q: "Daga ina ya kamata ku saka manhajar sada zumunta?", options: ["Daga hanyar haɗi da baƙo ya turo", "Daga tallar da ke tasowa (pop-up)", "Daga kowane shafin intanet", "Daga shagon manhajoji na hukuma"], answer: 3, why: "Shagunan hukuma suna da ainihin manhajoji." },
      { objective: "O2", q: "Wanne ya dace a profile mai aminci?", options: ["Sunanku da hoto mai fara'a", "Cikakkiyar ranar haihuwarku da adireshi", "Bayanan bankinku", "Ranakun tafiyarku"], answer: 0, why: "Suna da hoto ba matsala; bayanan sirri kuwa matsala ne." },
      { objective: "O2", q: "Me yasa ba za ku sanya cewa kun tafi hutu ba?", options: ["Yana sa manhajar ta yi jinkiri", "Yana faɗa wa baƙi cewa gidanku na iya zama babu kowa", "Ya saɓa wa dukkan dokoki", "Yana amfani da kuɗin data ɗinku"], answer: 1, why: "Post na tafiya na iya faɗa wa ɓarayi lokacin da babu kowa a gida." },
      { objective: "O2", q: "Tabbatarwa mataki biyu tana buƙatar:", options: ["Kalmar sirrinku kaɗai", "Kalmar sirrin aboki", "Lambar bankinku", "Kalmar sirrinku da code daga wayarku"], answer: 3, why: "Tana ƙara bincike na biyu daga wayarku." },
      { objective: "O3", q: "Kafin ku bi wani, ku duba:", options: ["Hotonsa, abokan tarayya da post ɗinsa", "Kuɗin da ke bankinsa", "Kalmar sirrinsa", "Babu komai"], answer: 0, why: "Wannan yana taimakawa a tabbata shi ne ainihin mutumin." },
      { objective: "O3", q: "Ƙungiya (group) a sada zumunta ita ce:", options: ["Ƙwayar cutar kwamfuta (virus)", "Kalmar sirri", "Wuri na mutane masu sha'awa iri ɗaya", "Wani nau'in talla"], answer: 2, why: "Ƙungiyoyi suna tara mutane a kan sha'awa ɗaya." },
      { objective: "O3", q: "Kafin ku taɓa Post, ya kamata ku duba:", options: ["Batirinku", "Yanayi", "Asusun bankinku", "Wanda zai iya gani"], answer: 3, why: "Duba masu kallo yana kare sirrinku." },
      { objective: "O3", q: "Wane sharhi ne mai kyau kuma ya dace?", options: ["Hanyar haɗi daga baƙo", "Zagi", "Lambar wayarku", "\"Hoto mai kyau, yaran suna farin ciki sosai!\""], answer: 3, why: "Ku rubuta kamar mutumin yana cikin ɗakin." },
      { objective: "O4", q: "Saitunan sirri suna iko da:", options: ["Batirin wayarku", "Launukan manhajar", "Wanda zai iya ganin post ɗinku ya tuntuɓe ku", "Saurin intanet ɗinku"], answer: 2, why: "Su ne ke yanke wanda zai gan ku ya kuma kai gare ku." },
      { objective: "O4", q: "Zaɓin sirri na farko mai kyau shi ne:", options: ["Post a saita ga public", "Barin kowa ya tura muku saƙo", "Raba wurin da kuke a kowane post", "Post a saita ga abokai ko mabiya da aka amince da su"], answer: 3, why: "Abokai kaɗai yana hana baƙi shiga." },
      { objective: "O4", q: "Kashe location a cikin post:", options: ["Yana toshe abokanku", "Yana goge asusunku", "Yana hana mutane sanin inda kuke", "Yana sa hotuna su dushe"], answer: 2, why: "Ba a ƙara nuna wurin da kuke a kan post." },
      { objective: "O5", q: "Wani saƙo ya ce kun ci kyauta amma sai kun fara biyan ɗan kuɗi. Wannan:", options: ["Kyauta ce ta yau da kullum", "Saitin sirri ne", "Buƙatar abota ce", "Alamar zamba ce"], answer: 3, why: "FTC ta lissafa kyauta mai kuɗin biya a matsayin alamar zamba." },
      { objective: "O5", q: "Wace buƙatar biya ce alamar gargaɗi?", options: ["Katin kyauta (gift card)", "Biyan shago a teburin biya", "Biyan kuɗin waya a shafin kamfanin", "Biyan likita a teburin karɓar baƙi"], answer: 0, why: "'Yan damfara suna neman katin kyauta domin yana da wuyar bin diddigi." },
      { objective: "O5", q: "A Amurka, kuna iya kai rahoton zambar sada zumunta zuwa:", options: ["Wurin sharhi", "Ɗan damfarar", "reportfraud.ftc.gov", "Feed ɗinku"], answer: 2, why: "FTC tana karɓar rahotannin zamba a can." },
      { objective: "O6", q: "Me Mute ke yi?", options: ["Yana kai rahoton laifi", "Yana goge asusunsa", "Yana kiran 'yan sanda", "Yana ɓoye post ɗin wani ba tare da an faɗa masa ba"], answer: 3, why: "Mute yana ɓoye post a hankali." },
      { objective: "O6", q: "Idan kun kai rahoton asusu, manhajar:", options: ["Tana faɗa masa sunanku", "Tana goge profile ɗinku", "Ba ta faɗa masa cewa kun kai rahotonsa ba", "Tana karɓar kuɗi"], answer: 2, why: "Ana ɓoye rahotanni daga mutumin." },
      { objective: "O6", q: "Post suna ci gaba da sa ku fushi. Mataki mai kyau ga lafiyarku shi ne:", options: ["Ku ƙara gungurawa", "Ku yi amfani da iyakar lokaci ku tashi", "Ku sanya adireshinku", "Ku karɓi kowace buƙata"], answer: 1, why: "Iyakar lokaci da hutu suna kare lafiyar zuciyarku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 4, 5, 7, 9, 11, 12, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Saitunan sirri", objective: "O4", notYet: "Post har yanzu public ne, ko kowa zai iya bin mai koyo ba tare da amincewa ba.", meets: "Post suna bayyana ga abokai ko mabiya da aka amince da su kaɗai.", exceeds: "Ya kuma iyakance wanda zai iya tura masa saƙo, kuma ya kashe location a cikin post." },
      { name: "Bin mutane lafiya", objective: "O3", notYet: "Bai bi kowa ba, ko ya bi asusu ba tare da tabbatar da cewa na gaske ne ba.", meets: "Yana bin ɗan iyali ko aboki ɗaya da aka tabbatar da shi, da ƙungiya ko shafi ɗaya na yanki.", exceeds: "Yana bayyana yadda ya duba hoton, abokan tarayya da post." },
      { name: "Sharhi mai kyau", objective: "O3", notYet: "Babu sharhi, ko sharhin ba shi da ladabi ko yana bayyana bayanan sirri.", meets: "Sharhi ɗaya mai kyau kuma ya dace a kan post.", exceeds: "Sharhin yana da fara'a kuma ya shafi post ɗin kai tsaye." },
      { name: "Maɓallin Report", objective: "O6", notYet: "Ba zai iya nemo Report a kan post ko asusu ba.", meets: "Yana nemo Report a menu mai ɗigo uku a kan post ko asusu.", exceeds: "Yana kuma nemo Block da Mute kuma yana faɗin lokacin amfani da kowanne." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric na aikin ƙarshe",
      "Masu koyo da suka ce post ɗinsu har yanzu na sirri ne kuma tabbatarwa mataki biyu a kunne bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun ƙi ko sun kai rahoton buƙatar abota ta bogi ko saƙon zamba",
      "Masu koyo da suka ce sun shiga ƙungiyar yanki, ta coci ko masallaci, ta aiki ko ta iyali da suke amfani da ita"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani, tablet ko kwamfuta mai intanet",
      "Manhajar sada zumunta ɗaya daga shagon hukuma, da imel ko lambar waya don rajista",
      "Hotunan allo (screenshots) na misalan saƙonnin zamba da buƙatun abota na bogi don atisaye",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku bar kowane mai koyo ya zaɓi manhaja ɗaya da ta dace da burinsa; kada ku tilasta wa kowa ya shiga manhaja ɗaya.",
      "Ku yi saitunan sirri tare, mataki-mataki, a allon kowane mai koyo; kada ku taɓa shiga asusun mai koyo da kanku.",
      "Ku yi amfani da hotunan allo don atisayen zamba don kada wani ya tuntuɓi ainihin ɗan damfara.",
      "Ku yi magana game da ƙaramin shekaru idan masu koyo suna buɗe wa jikoki ko yara asusu.",
      "Wataƙila an taɓa damfarar wasu masu koyo a intanet; ku yi magana ba tare da ɗora laifi ba, kuma ku nuna inda ake kai rahoto."
    ]
  }
};
