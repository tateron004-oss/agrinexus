"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-sales-cx.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-sales-cx-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-sales-cx",
  category: "Entrepreneurs",
  name: "AI don Tallace-tallace da Kula da Abokan Ciniki",
  skills: "Tantance masu yiwuwar saye, Rubuta saƙon farko na musamman, Shiryawa don tattaunawar sayarwa, Gina FAQ na abokan ciniki, Amsa ƙorafi, Koyo daga ra'ayoyin abokan ciniki",
  outcome: "amfani da AI don nemo da tantance masu yiwuwar saye, rubuta saƙon farko na musamman da ke bin ƙa'idoji, shiryawa don tattaunawar sayarwa, da gina FAQ na abokan ciniki da jagorar amsa ƙorafi da ke sa abokan ciniki farin ciki.",
  about: [
    "Sayarwa da kula da abokan ciniki su ne ke yanke ko kasuwanci zai bunƙasa. Wannan kwas ɗin na masu kasuwanci ne da ke yin sayarwa da taimakon abokan ciniki da kansu, kuma suke son su yi duka biyun da kyau da sauri da AI.",
    "A Babi na 1 za ku yi amfani da AI don bayyana wanda za ku sayar wa, ku jera masu yiwuwar saye, ku rubuta saƙonni na musamman (ba saƙon banza ba), ku kuma shirya kiran sayarwa da amsoshin ƙin yarda da aka saba ji. A Babi na 2 za ku gina FAQ na abokan ciniki, ku koyi hanyar amsa ƙorafi a nutse, ku kuma yi amfani da AI don gano abubuwan da ke maimaituwa a ra'ayoyin abokan ciniki.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aiki don kasuwancinku na gaske. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. An bayyana ƙa'idojin kira, tes da imel da kalmomi masu sauƙi; wannan ba shawarar shari'a ba ce."
  ],
  finalTask: "Ku gina kayan sayarwa da kula da abokan ciniki don kasuwancinku: gajeren jerin mutane ko kamfanoni 10 da suka cancanta da dalili ga kowanne, saƙonnin farko na musamman guda biyu, jagorar kira mai shafi ɗaya da amsoshin ƙin yarda guda uku da kuka fi ji, FAQ na abokan ciniki mai tambayoyi 10, da samfurin amsa ƙorafi. Ku tabbatar da duk bayanai, kuma kada ku saka bayanan sirri na abokan ciniki a kowane kayan AI.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci a Amurka da ke yin sayarwa da taimakon abokan ciniki da kansu, kamar masu ba da hidima, masu shaguna da masu sayar wa wasu kamfanoni (B2B).",
    startingPoint: "Suna magana da abokan ciniki kowace rana kuma suna amsa tambayoyi ta waya, imel ko tes. Kaɗan ne ke da jerin masu yiwuwar saye, jagorar kira, FAQ ko tsayayyiyar hanyar amsa ƙorafi, kuma da yawa ba su da tabbas game da ƙa'idojin tuntuɓar mutane.",
    gap: "Masu kasuwanci suna ɓata lokaci kan mutanen da ba za su saya ba, suna aika saƙonni na gama-gari da ke karya ƙa'idojin imel, kira ko tes, kuma suna amsa ƙorafi ta hanyoyin da ke sa a rasa abokan ciniki. Suna buƙatar amfani da AI don mayar da hankali a sayarwarsu, tuntuɓar mutane da kansu bisa doka, da amsa abokan ciniki a nutse kuma a kai a kai.",
    constraints: [
      "Kalmomi masu sauƙi; an bayyana ƙa'idoji a sauƙaƙe, ba a matsayin shawarar shari'a ba",
      "Na'urori: waya ko kwamfuta mai mataimakin AI kyauta da imel",
      "Lokaci: kusan minti biyar kowane darasi, da ayyuka kan abokan cinikin mai kasuwanci na gaske",
      "Ƙa'idojin imel, kira da tes suna aiki (CAN-SPAM, izinin TCPA), har ma da muryoyin AI",
      "Babu sunayen abokan ciniki, bayanan tuntuɓarsu ko bayanan sirri a kowane kayan AI"
    ],
    prerequisites: "\"Gabatarwa ga AI don 'Yan Kasuwa\". \"Tallace-tallace da Ƙirƙirar Abubuwan Bugawa da AI\" yana taimakawa wajen bayanin abokin ciniki mafi dacewa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku masu yiwuwar saye 15 daga bayanan jama'a da abokan hulɗarku", action: "ba su maki kan matsala, kuɗi, ikon yanke shawara da lokaci, da zaɓar mafi kyau guda 10", standard: "tare da dalilin da aka rubuta ga kowanne" },
    { id: "O2", condition: "Idan aka ba ku masu yiwuwar saye biyu daga jerinku", action: "rubuta gajerun saƙonnin farko na musamman da ke bin ƙa'idojin imel, kira da tes na Amurka", standard: "kowanne da bayani na gaske game da mutumin, adireshinku da layin daina karɓa" },
    { id: "O3", condition: "Kafin tattaunawar sayarwa", action: "yin jagorar kira mai shafi ɗaya da tambayoyi buɗaɗɗu biyar da amsoshin ƙin yarda guda uku da kuka fi ji", standard: "kowace amsa gaskiya ce, kuma an gwada ta sau ɗaya a wasan kwaikwayo da AI" },
    { id: "O4", condition: "Idan aka ba ku aƙalla tambayoyi goma na gaske daga abokan ciniki ba tare da sunaye ba", action: "yin FAQ mai tambayoyi 10 da amsoshin da aka rubuta daga bayananku na gaskiya", standard: "an tabbatar da kowace amsa" },
    { id: "O5", condition: "Idan aka ba ku ƙorafi na gaske ko na misali", action: "zaɓar gyara mai adalci da rubuta amsa a nutse da godiya, neman gafara, gyaran da kuma lokacinsa", standard: "ku ne kuka yanke gyaran, ba AI ba" },
    { id: "O6", condition: "Idan aka ba ku aƙalla ra'ayoyi 20 na abokan ciniki", action: "amfani da AI don gano manyan abubuwan da ke maimaituwa da zaɓar abu ɗaya da za a inganta", standard: "bayan kun duba ƙidayar AI da kanku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sayarwa da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nemo da tantance masu yiwuwar saye",
          minutes: 5,
          goal: "Yin gajeren jerin masu yiwuwar saye da yanke waɗanda suka fi yiwuwar su saya.",
          text: [
            "Mai yiwuwar saye (lead) mutum ne ko kamfani da zai iya saya daga gare ku. Tantancewa (qualifying) na nufin yanke waɗanne ne suka cancanci lokacinku. Gwaji mai sauƙi: Suna da matsalar da kuke magancewa? Za su iya biya? Za su iya yanke shawara? Suna buƙatar ta nan ba da daɗewa ba?",
            "AI zai iya taimaka muku tunanin inda masu yiwuwar saye suke (\"A ina ƙananan wuraren motsa jiki a garina suke neman masu hidimar tsaftacewa?\") kuma ya ba da maki ga jerin da kuke da shi. Ku bayyana kowanne da kalmomi na gama-gari, ku nemi AI ya jera su bisa tambayoyin huɗu.",
            "Ku yi amfani da bayanan kasuwanci na jama'a, ba bayanan sirri na mutane ba. Kada ku sayi jerin lambobin tuntuɓa ko ku kwashe bayanan mutane daga intanet; sau da yawa sun tsufa kuma suna iya karya ƙa'idojin sirri da tallace-tallace."
          ],
          steps: ["Ku rubuta su wane ne mafi kyawun abokan cinikinku na baya.", "Ku tambayi AI inda za a iya samun kamfanoni ko mutane masu kama da su.", "Ku jera masu yiwuwar saye 15 zuwa 20 daga majiyoyin jama'a da abokan hulɗarku.", "Ku ba kowanne maki kan matsala, kuɗi, ikon yanke shawara da lokaci.", "Ku ajiye mafi kyau 10 da dalili mai layi ɗaya ga kowanne."],
          words: [["Mai yiwuwar saye (lead)", "mutum ko kamfani da zai iya saya daga gare ku."], ["Tantancewa (qualify)", "yanke ko mai yiwuwar saye zai iya saya kuma ya cancanci lokacinku."]],
          slides: [
            { title: "Mai yiwuwar saye zai iya saya", bullets: ["Tantancewa = ya cancanci lokacinku?", "Matsala, kuɗi, ikon yanke shawara, lokaci"] },
            { title: "Yadda AI ke taimakawa", bullets: ["Tunanin inda masu yiwuwar saye suke", "Jera jerinku bisa tambayoyin huɗu"] },
            { title: "Ku yi aiki da tsabta", bullets: ["Ku yi amfani da bayanan kasuwanci na jama'a", "Babu jerin da aka saya ko bayanan sirri da aka kwashe"] }
          ],
          tryIt: "Ku jera masu yiwuwar saye 15, ku ba su maki kan matsala, kuɗi, ikon yanke shawara da lokaci da taimakon AI, sannan ku ajiye mafi kyau 10 da dalili ga kowanne.",
          youCanNow: "nemo masu yiwuwar saye da mayar da hankali kan waɗanda suka fi yiwuwar su saya.",
          quickCheck: [
            { objective: "O1", q: "Mene ne mai yiwuwar saye da ya cancanta?", options: ["Wanda ke da matsalar, kuɗin, ikon yanke shawara da buƙata nan ba da daɗewa ba", "Duk wanda za ku iya samun imel ɗinsa", "Aboki da ke son abin da kuke sakawa a intanet", "Kamfani a wani fanni daban"], answer: 0, why: "Wanda ya cancanta yana cika tambayoyin huɗu: matsala, kuɗi, ikon yanke shawara da lokaci." },
            { objective: "O1", q: "Wani yana son ra'ayinku sosai amma ba shi da kasafin kuɗi sai shekara mai zuwa. Me za ku yi?", options: ["Ku sa shi a saman jerinku", "Ku rage masa maki kan kuɗi da lokaci, ku sake tuntuɓarsa daga baya", "Ku goge shi har abada", "Ku aika masa saƙonni goma"], answer: 1, why: "Ba da maki yana taimaka muku mayar da hankali kan wanda zai iya saya yanzu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta saƙon farko na musamman, ba saƙon banza ba",
          minutes: 5,
          goal: "Rubuta gajeren saƙon farko na musamman da ke bin ƙa'idojin imel, kira da tes na Amurka.",
          text: [
            "Saƙon farko mai kyau gajere ne kuma game da su ne: abin da kuka lura game da kasuwancinsu, matsalar da za ku iya taimakawa da ita, da mataki ɗaya mai sauƙi na gaba. Ku tambayi AI: \"Write a 70-word first email to a small gym owner. Mention that their reviews talk about clean locker rooms being important. Offer a free 15-minute walkthrough. No hype.\" (Ka rubuta imel na farko mai kalmomi 70 ga mai ƙaramin wurin motsa jiki. Ka ambaci cewa sharhin abokan cinikinsu na cewa tsaftar ɗakin canja kaya na da muhimmanci. Ka ba da zagayen duba kyauta na minti 15. Babu zuƙi.) Sannan ku ƙara bayani ɗaya da ku kaɗai kuka sani.",
            "Don imel na kasuwanci, dokar CAN-SPAM Act tana buƙatar layin From (daga wa) da layin batu na gaskiya, adireshinku na zahiri, da hanya bayyananna ta daina karɓa (opt out), kuma dole a bi buƙatar daina karɓa cikin kwanakin aiki 10.",
            "Kira da tes suna da ƙa'idoji masu tsauri. Tes na tallace-tallace da kiran na'ura (robocall) yawanci suna buƙatar izinin mutumin tukuna, kuma a 2024 hukumar FCC ta yanke cewa muryoyin da AI ya ƙirƙira ana ɗaukarsu muryoyin \"artificial\" (na wucin gadi) a ƙarƙashin dokar Telephone Consumer Protection Act. Kada ku yi kiran murya na AI ko tes ga mutane da yawa ba tare da izini ba, kuma ku duba fcc.gov ko ku tambayi lauya kafin ku fara."
          ],
          steps: ["Ku lura da bayani ɗaya na gaske game da mutumin daga bayanan jama'a.", "Ku nemi AI ya rubuta gajeren saƙo: halin da suke ciki, taimakonku, mataki ɗaya na gaba.", "Ku ƙara bayani na musamman, ku tabbatar da kowane bayani.", "Don imel, ku saka adireshinku da layin daina karɓa.", "Kada ku tura tes ko kiran AI ga kowa ba tare da izininsa ba."],
          words: [["Saƙon farko (outreach)", "tuntuɓar wanda zai iya zama abokin ciniki a karon farko."], ["CAN-SPAM Act", "dokar Amurka mai ƙa'idoji kan imel na kasuwanci."], ["TCPA", "Telephone Consumer Protection Act: dokar Amurka da ke iyakance kira da tes na tallace-tallace ba tare da izini ba."]],
          slides: [
            { title: "Gajere kuma game da su", bullets: ["Abin da kuka lura", "Matsalar da kuke magancewa", "Mataki ɗaya mai sauƙi na gaba"] },
            { title: "Ƙa'idojin imel (CAN-SPAM)", bullets: ["Layin From da layin batu na gaskiya", "Adireshinku na zahiri", "A bi buƙatar daina karɓa cikin kwanakin aiki 10"] },
            { title: "Kira da tes", bullets: ["Tes na tallace-tallace da robocall yawanci suna buƙatar izini", "Muryoyin AI muryoyin wucin gadi ne (FCC 2024)", "Ku duba fcc.gov ko ku tambayi lauya tukuna"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FCC: AI-generated voices in robocalls ruling (2024)", url: "https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal" }],
          tryIt: "Ku rubuta imel ɗin farko na musamman guda biyu ga mutane daga jerinku da taimakon AI. Ku ƙara bayani na gaske ga kowanne, ku kuma duba cewa suna da adireshinku da layin daina karɓa.",
          youCanNow: "rubuta saƙon farko na musamman da ke mutunta ƙa'idojin imel, kira da tes.",
          quickCheck: [
            { objective: "O2", q: "Me dole imel na kasuwanci ya ƙunsa a ƙarƙashin CAN-SPAM?", options: ["Ragin farashi", "Hotonku", "Hanyar daina karɓa", "Lambar wayar gidanku"], answer: 2, why: "Dole imel na kasuwanci ya ba da hanyar daina karɓa." },
            { objective: "O2", q: "AI ya rubuta imel da za a iya aika wa kowa. Me za ku yi?", options: ["Ku aika wa kowa", "Ku tsawaita shi", "Ku ƙara kalmomin sayarwa", "Ku ƙara wani abu na gaske da kuka lura game da mutumin"], answer: 3, why: "Bayani na gaske yana sa saƙon ya zama na musamman, ba saƙon banza ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Shiryawa don tattaunawar sayarwa",
          minutes: 5,
          goal: "Yin jagorar kira mai shafi ɗaya da tambayoyi da amsoshin ƙin yarda da aka saba ji.",
          text: [
            "Tattaunawar sayarwa galibi sauraro ce. Ku shirya tambayoyi biyar masu kyau game da halin da abokin ciniki yake ciki, matsalarsa da burinsa, sannan ku bayyana yadda kuke taimakawa da kalmominsa.",
            "Ƙin yarda (objection) dalilai ne da mutane ke bayarwa na rashin saye: \"Ya yi tsada sosai.\" \"Ina buƙatar in yi tunani.\" \"Muna da wanda ke yi mana.\" Ku tambayi AI: \"List the five most common objections for [service] and give a calm, honest answer to each.\" (Ka jera ƙin yarda guda biyar da aka fi ji game da [hidima] ka ba da amsa a nutse ta gaskiya ga kowanne.) Ku gyara su don su yi kama da ku kuma su zama gaskiya.",
            "Ku yi wasan kwaikwayo da AI: \"Pretend you are a busy gym owner who is not sure about hiring a cleaning service. Ask me hard questions.\" (Ka yi kamar kai mai wurin motsa jiki ne mai yawan aiki da bai tabbata ba ko zai ɗauki masu tsaftacewa. Ka yi mini tambayoyi masu wuya.) Ku yi atisaye har ku iya amsawa ba tare da karantawa ba."
          ],
          steps: ["Ku rubuta tambayoyi buɗaɗɗu biyar game da halin abokin ciniki da burinsa.", "Ku tambayi AI ƙin yarda da aka saba ji da amsoshin gaskiya.", "Ku gyara amsoshin don su zama gaskiya kuma su yi kama da ku.", "Ku yi wasan kwaikwayon tattaunawar da AI.", "Ku sa duka a shafi ɗaya."],
          words: [["Ƙin yarda (objection)", "dalilin da abokin ciniki ke bayarwa na rashin saye tukuna."], ["Wasan kwaikwayo (role-play)", "atisayen tattaunawa ta hanyar yin ta kamar a zahiri."], ["Tambaya buɗaɗɗiya (open question)", "tambayar da ba za a iya amsawa da \"eh\" ko \"a'a\" kawai ba."]],
          slides: [
            { title: "Galibi sauraro ne", bullets: ["Tambayoyi buɗaɗɗu biyar", "Halin da suke ciki, matsalarsu, burinsu", "Ku bayyana taimakonku da kalmominsu"] },
            { title: "Ku shirya don ƙin yarda", bullets: ["\"Ya yi tsada\"", "\"Ina buƙatar in yi tunani\"", "\"Muna da wanda ke yi mana\""] },
            { title: "Ku yi atisaye da AI", bullets: ["Ku nemi AI ya yi kamar abokin ciniki mai shakka", "Ku amsa da babbar murya", "Ku maimaita har ya zama kamar na yau da kullum"] }
          ],
          tryIt: "Ku gina jagorar kiranku mai shafi ɗaya: tambayoyi buɗaɗɗu biyar da amsoshin gaskiya ga ƙin yarda guda uku da kuka fi ji. Ku yi wasan kwaikwayo sau ɗaya da AI.",
          youCanNow: "shiryawa da yin atisayen tattaunawar sayarwa da AI.",
          quickCheck: [
            { objective: "O3", q: "Mece ce tambaya buɗaɗɗiya?", options: ["Wadda ba za a iya amsawa da eh ko a'a kawai ba", "Tambaya game da farashi kawai", "Tambayar da kuke yi wa AI", "Tambayar da ba ta da amsa"], answer: 0, why: "Tambayoyi buɗaɗɗu suna sa abokin ciniki ya yi magana game da buƙatunsa." },
            { objective: "O3", q: "Amsar AI ga ƙin yarda \"Ina buƙatar in yi tunani\" tana kama da matsi. Me za ku yi?", options: ["Ku yi amfani da ita yadda take", "Ku gyara ta don ta zama gaskiya kuma ta yi kama da ku", "Ku watsar da jagorar kiran", "Ku karanta ta kalma da kalma da sauri"], answer: 1, why: "Kuna gyara amsoshin AI don su zama gaskiya kuma da muryarku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sayarwa da AI",
        questions: [
          { objective: "O1", q: "Wane mai yiwuwar saye ne ya fi cancanta?", options: ["Wanda ba ya buƙatar hidimarku", "Kamfani mai matsalar, kasafin kuɗi, mai yanke shawara da buƙata nan ba da daɗewa ba", "Adireshin imel na kowa", "Mai gasa da ku"], answer: 1, why: "Yana cika dukkan tambayoyin tantancewa huɗu." },
          { objective: "O1", q: "Daga ina ya kamata bayanan masu yiwuwar sayenku su fito?", options: ["Fayilolin sirri na abokan ciniki", "Bayanan sirri da aka kwashe daga intanet", "Jerin baƙi da aka saya", "Bayanan kasuwanci na jama'a da abokan hulɗarku"], answer: 3, why: "Bayanan jama'a suna hana matsalolin sirri da tallace-tallace." },
          { objective: "O2", q: "Saƙon farko mai kyau shi ne:", options: ["Gajere, game da su, da mataki ɗaya mai sauƙi na gaba", "Mai tsawo kuma duka game da ku", "An kwafa shi ga mutane 1,000 ba tare da canji ba", "Cike da alƙawuran \"an tabbatar\""], answer: 0, why: "Saƙo na musamman kuma gajere yana samun amsa." },
          { objective: "O2", q: "Za ku iya yin robocall da muryar AI ga mutanen da ba su taɓa ba da izini ba?", options: ["Eh, a ƙarshen mako", "Eh, muryoyin AI an keɓe su", "A'a, ƙa'idojin izini suna aiki kan muryoyin AI ma", "Sai ga kamfanoni a wasu jihohi"], answer: 2, why: "FCC tana ɗaukar muryoyin AI a matsayin muryoyin wucin gadi a ƙarƙashin TCPA." },
          { objective: "O3", q: "Abokin ciniki ya ce \"Ya yi tsada sosai.\" Ana kiran wannan:", options: ["Abin da ke jawowa (trigger)", "Mai yiwuwar saye", "Ƙin yarda", "Mayar da kuɗi"], answer: 2, why: "Ƙin yarda dalilai ne na rashin saye tukuna." }
        ]
      }
    },
    {
      name: "Babi na 2: Sa abokan ciniki farin ciki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina FAQ na abokan ciniki",
          minutes: 5,
          goal: "Yin FAQ mai tambayoyi 10 daga tambayoyin da abokan ciniki ke yi a zahiri.",
          text: [
            "Abokan ciniki suna yin tambayoyi iri ɗaya akai-akai. Shafi ko takardar tambayoyin da aka fi yi (FAQ) tana ceton lokacinku kuma tana taimaka wa abokan ciniki su yanke shawara da sauri.",
            "Ku tattara tambayoyi na gaske daga imel, saƙonni da kira na makonni biyu (ku cire sunaye da bayanan tuntuɓa). Ku nemi AI ya haɗa su rukuni-rukuni ya rubuta amsoshi bayyanannu, gajeru, ta amfani da bayanan da kuka ba shi kaɗai: farashi, lokutan aiki, yanki, da manufofi.",
            "Ku tabbatar da kowace amsa. Sannan ku yi amfani da FAQ ɗin a shafinku na intanet, a amsoshinku da aka ajiye, kuma a matsayin bayanai ga kowane chatbot. Idan kuna amfani da chatbot, ku faɗa wa abokan ciniki cewa na'ura ce, ku kuma ba da hanya mai sauƙi ta samun mutum."
          ],
          steps: ["Ku tattara tambayoyin abokan ciniki na makonni biyu, ba tare da sunaye ko bayanan tuntuɓa ba.", "Ku nemi AI ya haɗa su rukuni-rukuni ya zaɓi manyan 10.", "Ku ba AI bayananku na gaske ku nemi gajerun amsoshi.", "Ku tabbatar da kowace amsa.", "Ku wallafa FAQ ɗin ku yi amfani da shi a amsoshi."],
          words: [["FAQ", "frequently asked questions (tambayoyin da aka fi yi): jerin tambayoyin da aka saba yi da amsoshinsu."], ["Chatbot", "shirin na'ura da ke amsa saƙonnin abokan ciniki da kansa."]],
          slides: [
            { title: "Tambayoyi iri ɗaya, kowane mako", bullets: ["FAQ yana ceton lokacinku", "Yana taimaka wa abokan ciniki su yanke shawara da sauri"] },
            { title: "Ku gina shi daga tambayoyi na gaske", bullets: ["Ku tattara na makonni biyu, babu sunaye", "AI yana haɗa su rukuni kuma ya rubuta daftarin amsoshi", "Daga bayanan da kuka ba shi kaɗai"] },
            { title: "Ku yi amfani da shi ko'ina", bullets: ["Shafin intanet da amsoshin da aka ajiye", "Bayanai ga kowane chatbot", "Ku faɗi idan na'ura ce; ku ba da damar samun mutum"] }
          ],
          tryIt: "Ku tattara aƙalla tambayoyi goma na gaske daga abokan ciniki (babu sunaye), ku yi amfani da AI don haɗa su rukuni da rubuta daftarin amsoshi daga bayananku, ku tabbatar da kowanne, sannan ku ajiye FAQ ɗinku.",
          youCanNow: "mayar da tambayoyin abokan ciniki na gaske zuwa FAQ da aka tabbatar.",
          quickCheck: [
            { objective: "O4", q: "Daga ina ya kamata tambayoyin FAQ su fito?", options: ["Hasashen AI", "Shafin intanet na mai gasa da ku", "Tambayoyin da abokan ciniki na gaske ke yi", "Tambayoyin da kuke fata mutane su yi"], answer: 2, why: "Tambayoyi na gaske suna yin FAQ da ke taimakawa a zahiri." },
            { objective: "O4", q: "Amsar FAQ ta AI ta ba da lokacin isar da kaya da ba ku bayarwa. Me za ku yi?", options: ["Ku wallafa ta", "Ku canja lokacin isar da kayanku", "Ku cire FAQ ɗin gaba ɗaya", "Ku gyara ta daga bayananku na gaske"], answer: 3, why: "Dole amsoshin FAQ su dogara kan bayananku na gaskiya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Amsa ƙorafi a nutse",
          minutes: 5,
          goal: "Amfani da AI don rubuta daftarin amsa mai adalci a nutse ga ƙorafi, da yanke yadda za a gyara.",
          text: [
            "Ƙorafin da aka kula da shi da kyau zai iya sa abokin ciniki ya zauna da ku har abada. Hanya mai sauƙi: ku gode musu, ku nemi gafara game da abin da ya same su, ku faɗi abin da za ku yi, ku kuma faɗi yaushe. Kada ku yi jayayya a gaban jama'a; ku nemi ci gaba da magana a ɓoye.",
            "Idan ranku ya ɓaci, AI yana taimaka muku ku natsu. Ku taƙaita ƙorafin da kalmominku (babu sunaye ko lambobin oda) ku tambaya: \"Draft a calm, short reply that thanks them, apologizes, offers [fix], and invites them to message us privately.\" (Ka rubuta gajeriyar amsa a nutse da ke gode musu, neman gafara, ba da [gyara], da gayyatarsu su tura mana saƙo a ɓoye.)",
            "Ku ne kuke yanke gyaran. Kada ku bar AI ya yi alƙawarin mayar da kuɗi ko ragi da ba ku amince da su ba, kuma kada ku yi amfani da AI don rubuta sharhi masu kyau na bogi don ɓoye mummunan sharhi; hukumar FTC ta haramta sharhi na bogi, har da waɗanda AI ya rubuta."
          ],
          steps: ["Ku karanta ƙorafin ku jira 'yan mintuna kafin ku amsa.", "Ku yanke gyara mai adalci da kanku.", "Ku taƙaita ƙorafin ga AI ba tare da sunaye ko lambobin oda ba.", "Ku nemi amsa a nutse: godiya, neman gafara, gyaran, lokaci, komawa a ɓoye.", "Ku gyara, ku tabbatar, sannan ku aika."],
          words: [["Ƙorafi", "abokin ciniki yana faɗa muku cewa wani abu ya lalace."], ["Gyara", "abin da za ku yi don daidaita al'amarin, kamar sake yin aikin ko mayar da kuɗi."]],
          slides: [
            { title: "Tsarin amsa", bullets: ["Ku gode musu", "Ku nemi gafara game da abin da ya same su", "Ku faɗi abin da za ku yi da yaushe"] },
            { title: "AI yana taimaka muku ku natsu", bullets: ["Ku taƙaita ba tare da sunaye ko lambobin oda ba", "Ku nemi gajeren daftari a nutse", "Ku mayar da tattaunawar a ɓoye"] },
            { title: "Ku ne kuke yanke shawara", bullets: ["Gyaran zaɓinku ne", "Babu alƙawuran da ba ku amince da su ba", "Kada ku taɓa yin sharhi na bogi don ɓoye mummuna"] }
          ],
          sources: [{ name: "FTC: Final rule banning fake reviews and testimonials (press release)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Ku ɗauki ƙorafi na gaske ko na misali, ku yanke gyara mai adalci, sannan ku yi amfani da AI don rubuta daftarin amsa a nutse ta amfani da tsarin sassa huɗu. Ku ajiye shi a matsayin samfurin amsa ƙorafi.",
          youCanNow: "amsa ƙorafi a nutse kuma da adalci da taimakon AI, da yanke gyaran da kanku.",
          quickCheck: [
            { objective: "O5", q: "Mene ne sassa huɗu na amsar ƙorafi a nutse?", options: ["Godiya, neman gafara, gyaran, lokaci", "Musantawa, jinkiri, kare kai, gogewa", "Farashi, kaya, wuri, talla", "Sannu, sai anjima, sa hannu, aika"], answer: 0, why: "Wannan tsarin yana sa amsoshi su zama a nutse, masu adalci kuma bayyanannu." },
            { objective: "O5", q: "Daftarin amsar AI ya yi alƙawarin mayar da dukkan kuɗi da ba ku amince da shi ba. Me za ku yi?", options: ["Ku aika shi", "Ku yanke gyara mai adalci da kanku ku canja daftarin", "Ku bar AI ya yanke", "Ku yi watsi da ƙorafin"], answer: 1, why: "Ku ne kuke yanke gyaran; AI yana rubuta kalmomin ne kawai." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Koyo daga ra'ayoyin abokan ciniki",
          minutes: 5,
          goal: "Amfani da AI don gano abubuwan da ke maimaituwa a sharhi da ra'ayoyi, da zaɓar abu ɗaya da za a inganta.",
          text: [
            "Sharhi, amsoshin bincike da saƙonni suna faɗa muku abin da za ku gyara da abin da za ku riƙe. Idan kuna karanta su ɗaya bayan ɗaya, ba za ku ga abubuwan da ke maimaituwa ba. AI yana da kyau wajen haɗa su rukuni-rukuni.",
            "Ku kwafi sharhi ko ra'ayoyi 20 zuwa 50 (ku cire sunaye) ku tambaya: \"Group this feedback into themes. For each theme, say how many comments mention it and give one example. List the top three things customers love and the top three problems.\" (Ka haɗa waɗannan ra'ayoyi zuwa jigogi. Ga kowane jigo, ka faɗi ra'ayoyi nawa suka ambace shi ka ba da misali ɗaya. Ka jera abubuwa uku da abokan ciniki suka fi so da matsaloli uku mafi girma.)",
            "Ku duba ƙidayar ta hanyar karantawa da sauri da kanku, domin AI yana iya kuskure wajen ƙirga. Sannan ku zaɓi matsala ɗaya da za ku gyara a wannan watan, ku gyara ta, ku kuma faɗa wa abokan ciniki cewa kun saurare su."
          ],
          steps: ["Ku tattara sharhi ko ra'ayoyi 20 zuwa 50 ku cire sunaye.", "Ku nemi AI ya haɗa su zuwa jigogi da ƙidaya da misalai.", "Ku karanta da sauri don duba jigogin da ƙidayar.", "Ku zaɓi matsala ɗaya da za ku gyara a wannan watan.", "Ku faɗa wa abokan ciniki abin da kuka canja."],
          words: [["Jigo (theme)", "batun da ke dawowa akai-akai a ra'ayoyin abokan ciniki."], ["Bincike (survey)", "gajeren jerin tambayoyin da kuke yi wa abokan ciniki."]],
          slides: [
            { title: "Ra'ayoyi suna nuna hanya", bullets: ["Sharhi, bincike, saƙonni", "Ɗaya bayan ɗaya, ba za ku ga abin da ke maimaituwa ba"] },
            { title: "AI yana haɗa su rukuni", bullets: ["Ku fara cire sunaye", "Jigogi, ƙidaya da misalai", "Abubuwa uku da aka fi so da matsaloli uku mafi girma"] },
            { title: "Ku ɗauki mataki", bullets: ["Ku duba ƙidayar da kanku", "Ku gyara matsala ɗaya a wannan watan", "Ku faɗa wa abokan ciniki cewa kun saurare su"] }
          ],
          tryIt: "Aikin ƙarshe: ku bincika aƙalla ra'ayoyi 20 da AI, ku zaɓi gyara ɗaya, sannan ku haɗa kayan sayarwa da kula da abokan cinikinku: masu yiwuwar saye 10 da suka cancanta, saƙonnin farko biyu, jagorar kira, FAQ da samfurin amsa ƙorafi.",
          youCanNow: "amfani da AI a sayarwa da kula da abokan ciniki: nemo masu yiwuwar saye, tuntuɓar su yadda ya kamata, shiryawa, amsa abokan ciniki da ci gaba da ingantawa.",
          quickCheck: [
            { objective: "O6", q: "Mene ne jigo a ra'ayoyin abokan ciniki?", options: ["Sharhi ɗaya na fushi", "Launin shafinku na intanet", "Batun da ke dawowa akai-akai", "Sharhi mai taurari biyar"], answer: 2, why: "Jigogi suna nuna matsalolin da abokan ciniki da yawa ke fuskanta." },
            { objective: "O6", q: "AI ya ce yawancin ra'ayoyi game da farashi ne, amma kun tuna ra'ayoyi da yawa game da jiran lokaci. Me za ku yi?", options: ["Ku amince da AI", "Ku rage farashi nan take", "Ku nemi AI ya yarda da ku", "Ku karanta ra'ayoyin da sauri da kanku don dubawa"], answer: 3, why: "Ku duba ƙidayar AI da kanku kafin ku ɗauki mataki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sa abokan ciniki farin ciki",
        questions: [
          { objective: "O4", q: "Daga ina ya kamata tambayoyin FAQ su fito?", options: ["Tambayoyin gaske da abokan ciniki ke yi", "Tambayoyin da AI ya ƙirƙira", "Shafin mai gasa da ku", "Hasashe kawai"], answer: 0, why: "Tambayoyi na gaske suna yin FAQ mai amfani." },
          { objective: "O4", q: "Idan kuna amfani da chatbot, ya kamata ku:", options: ["Ɓoye bayanan tuntuɓarku", "Yi kamar mutum ne", "Bar shi ya yi alƙawarin mayar da kuɗi", "Faɗa wa abokan ciniki cewa na'ura ce, ku ba da hanyar samun mutum"], answer: 3, why: "Gaskiya da hanya mai sauƙi ta samun mutum suna riƙe amincewa." },
          { objective: "O5", q: "Wane ne ke yanke gyaran ƙorafi?", options: ["AI", "Ku", "Abokan abokin ciniki", "Babu kowa"], answer: 1, why: "AI yana rubuta kalmomin; ku ne kuke yanke gyaran." },
          { objective: "O5", q: "Mummunan sharhi ya bayyana. Wace amsa ce ta saɓa wa doka a ƙarƙashin ƙa'idojin FTC?", options: ["Sanya sharhi masu kyau na bogi don ɓoye shi", "Amsawa a nutse", "Gyara matsalar", "Gayyatar abokin ciniki su yi magana a ɓoye"], answer: 0, why: "FTC ta haramta sharhi na bogi, har da waɗanda AI ya rubuta." },
          { objective: "O6", q: "AI ya ce ra'ayoyi 30 sun ambaci jinkirin isar da kaya. Me ya kamata ku yi?", options: ["Ku goge ra'ayoyin", "Ku amince da shi gaba ɗaya", "Ku karanta da sauri don duba ƙidayar da kanku", "Ku yi watsi da shi"], answer: 2, why: "AI yana iya kuskure wajen ƙirga; ku duba kafin ku ɗauki mataki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Tallace-tallace da Kula da Abokan Ciniki",
    questions: [
      { objective: "O1", q: "Mai yiwuwar saye (lead) shi ne:", options: ["Abokin ciniki da ya riga ya biya", "Mutum ko kamfani da zai iya saya daga gare ku", "Ƙorafi", "Kaya"], answer: 1, why: "Wannan ne ma'anarsa." },
      { objective: "O1", q: "Tambayoyin tantancewa huɗu suna game da:", options: ["Tambari, rubutu, shafin intanet da manhaja", "Launi, girma, nauyi da sifa", "Suna, shekaru, adireshi da waya", "Matsala, kuɗi, ikon yanke shawara da lokaci"], answer: 3, why: "Suna nuna wanda zai fi yiwuwar ya saya." },
      { objective: "O1", q: "Wace majiyar masu yiwuwar saye ce ta dace a yi amfani da ita?", options: ["Fayil ɗin abokan ciniki na mai gasa da ku", "Jerin lambobin wayar mutane da aka saya", "Bayanan sirri da aka kwashe", "Jerin kamfanoni na jama'a"], answer: 3, why: "Bayanan kasuwanci na jama'a suna hana matsalolin sirri." },
      { objective: "O2", q: "Saƙon farko mai kyau yana ambaton:", options: ["Kyaututtukanku kawai", "Wani abu na gaske da kuka lura game da su", "Wa'adin ƙarya", "Adireshin gidansu"], answer: 1, why: "Bayanai na musamman suna nuna kun yi bincike." },
      { objective: "O2", q: "CAN-SPAM tana buƙatar imel na kasuwanci ya ƙunshi:", options: ["Ragin farashi", "Bayanan bankinku", "Hanyar daina karɓa", "Hoto"], answer: 2, why: "Daina karɓa yana ɗaya daga cikin buƙatu na asali." },
      { objective: "O2", q: "Dole a bi buƙatar daina karɓa cikin:", options: ["Kwanakin aiki 10", "Shekara 1", "Awa 1", "Ba za a taɓa ba"], answer: 0, why: "Jagorar FTC ta ce kwanakin aiki 10." },
      { objective: "O2", q: "A ƙarƙashin hukuncin FCC na 2024, muryoyin da AI ya ƙirƙira a kira ana ɗaukarsu:", options: ["An keɓe su daga dukkan ƙa'idoji", "Muryoyin mutane", "Muryoyin wucin gadi a ƙarƙashin TCPA", "Imel"], answer: 2, why: "Don haka ƙa'idojin izini suna aiki." },
      { objective: "O2", q: "Kafin ku aika tes na tallace-tallace, ya kamata ku:", options: ["Samu izinin mutumin ku duba ƙa'idojin", "Tura tes ga kowa a wayarku", "Yi amfani da muryar AI a maimakon haka", "Ɓoye sunan kasuwancinku"], answer: 0, why: "Tes na tallace-tallace yawanci suna buƙatar izini." },
      { objective: "O3", q: "Tattaunawar sayarwa ya kamata galibi ta zama:", options: ["Magana game da kanku", "Sauraro", "Karanta rubutaccen jawabi da sauri", "Ragin farashi"], answer: 1, why: "Sauraro yana faɗa muku abin da abokin ciniki yake buƙata." },
      { objective: "O3", q: "Tambaya buɗaɗɗiya ita ce wadda:", options: ["Ba ta da amsa", "Ba ta da ladabi", "Game da farashi ce kawai", "Ba za a iya amsawa da eh ko a'a kawai ba"], answer: 3, why: "Tambayoyi buɗaɗɗu suna sa abokan ciniki su yi magana." },
      { objective: "O3", q: "Wasan kwaikwayo da AI yana taimaka muku:", options: ["Yin atisayen amsa tambayoyi masu wuya", "Sa hannu a kwangiloli", "Tsallake shiryawa", "Rubuta sharhi na bogi"], answer: 0, why: "Atisaye yana gina ƙarfin gwiwa." },
      { objective: "O3", q: "Idan AI ya rubuta amsoshin ƙin yarda, ya kamata ku:", options: ["Kada ku taɓa amfani da su", "Karanta su kalma da kalma", "Ƙara alƙawuran ƙarya", "Gyara su don su zama gaskiya kuma su yi kama da ku"], answer: 3, why: "Amsoshin gaskiya da muryarku suna gina amincewa." },
      { objective: "O4", q: "FAQ yana taimakawa domin:", options: ["Yana ɓoye farashi", "Yana maye gurbin dukkan tuntuɓar abokan ciniki", "Yana amsa tambayoyin da aka saba yi da sauri", "Doka ce ta buƙace shi"], answer: 2, why: "Yana ceton lokaci gare ku da abokan ciniki." },
      { objective: "O4", q: "Kafin ku ba AI tambayoyin abokan ciniki, ya kamata ku:", options: ["Ƙara lambobin katinsu", "Cire sunaye da bayanan tuntuɓa", "Neman kalmomin sirrinsu", "Sanya su a gaban jama'a"], answer: 1, why: "Ku hana bayanan sirri shiga kayan AI." },
      { objective: "O4", q: "Amsoshin FAQ ya kamata su dogara kan:", options: ["Tsofaffin jita-jita", "Duk abin da AI ya yi hasashe", "Farashin mai gasa da ku", "Bayanan da kuka ba AI"], answer: 3, why: "AI yana iya ƙirƙirar bayanai idan ba ku ba shi ba." },
      { objective: "O5", q: "Amsar ƙorafi mai sassa huɗu ita ce:", options: ["Ragi, ragi, ragi, ragi", "Musantawa, jayayya, toshewa, gogewa", "Godiya, neman gafara, gyaran, lokaci", "Yin watsi da shi"], answer: 2, why: "Tana a nutse, mai adalci kuma bayyananna." },
      { objective: "O5", q: "Idan ƙorafi a gaban jama'a yake, mataki mai kyau shi ne:", options: ["Amsawa a nutse da neman ci gaba a ɓoye", "Jayayya a cikin sharhi", "Sanya bayanan abokin ciniki", "Goge asusunku"], answer: 0, why: "Komawa a ɓoye yana hana jayayya a gaban jama'a." },
      { objective: "O5", q: "AI zai iya yin alƙawarin mayar da kuɗi a amsarku ba tare da amincewarku ba?", options: ["Eh, koyaushe", "A'a, ku ne kuke yanke gyaran", "Sai a ƙarshen mako", "Sai don manyan oda"], answer: 1, why: "Shawarwarin kuɗi suna hannunku." },
      { objective: "O6", q: "Jigo a ra'ayoyin abokan ciniki shi ne:", options: ["Zanen shafin intanet", "Batun da ke dawowa akai-akai", "Sharhi guda ɗaya", "Salon rubutu (font)"], answer: 1, why: "Jigogi suna nuna abubuwan da ke maimaituwa." },
      { objective: "O6", q: "Bayan gano babbar matsala a ra'ayoyin abokan ciniki, ya kamata ku:", options: ["Gyara ta ku faɗa wa abokan ciniki cewa kun saurare su", "Yi watsi da ita", "Ɓoye sharhin", "Sayi sababbin sharhi"], answer: 0, why: "Ɗaukar mataki kan ra'ayoyi yana gina amincin abokan ciniki." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      4,
      8,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Masu yiwuwar saye da suka cancanta",
        objective: "O1",
        notYet: "Ƙasa da mutane 10, babu dalilai, ko daga majiyoyin da ba a amince da su ba.",
        meets: "Mutane 10 daga bayanan jama'a ko abokan hulɗarku, kowanne da dalili.",
        exceeds: "Kowanne yana nuna makinsa kan matsala, kuɗi, ikon yanke shawara da lokaci."
      },
      {
        name: "Saƙonnin farko",
        objective: "O2",
        notYet: "Na gama-gari ne, ko babu adireshi ko layin daina karɓa.",
        meets: "Gajerun saƙonni biyu na musamman da bayani na gaske, adireshi da layin daina karɓa.",
        exceeds: "Kowanne yana ƙarewa da mataki ɗaya mai sauƙi na gaba, kuma an karanta shi da babbar murya kafin aikawa."
      },
      {
        name: "Jagorar kira",
        objective: "O3",
        notYet: "Babu tambayoyi ko amsoshin ƙin yarda, ko amsoshin sun yi alƙawari fiye da kima.",
        meets: "Tambayoyi buɗaɗɗu biyar da amsoshin gaskiya ga ƙin yarda uku, an yi atisaye sau ɗaya.",
        exceeds: "Ya rubuta abin da aka canja bayan wasan kwaikwayon."
      },
      {
        name: "FAQ da samfurin amsa ƙorafi",
        objective: "O5",
        notYet: "Ba a tabbatar da amsoshin FAQ ba, ko amsar ƙorafi ta yi alƙawarin gyaran da ba a yanke ba.",
        meets: "Amsoshin FAQ 10 da aka tabbatar da samfurin amsa ƙorafi mai sassa huɗu da gyaran mai kasuwanci.",
        exceeds: "An wallafa FAQ ɗin ko ana amfani da shi, kuma samfurin yana da layin neman ci gaba a ɓoye."
      },
      {
        name: "Bayanan sirri",
        objective: "O4",
        notYet: "Sunayen abokan ciniki ko bayanan tuntuɓarsu sun shiga kayan AI.",
        meets: "An cire sunaye da bayanan tuntuɓa daga dukkan tambayoyi da ra'ayoyi.",
        exceeds: "Ya rubuta saitin bayanan kayan AI da aka duba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu kasuwanci da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Tattaunawar sayarwa ko sababbin abokan ciniki daga jerin masu yiwuwar saye cikin kwanaki 30 (binciken biyo baya)",
      "Masu kasuwanci da suka wallafa FAQ ɗinsu kuma suka ce an rage maimaita tambayoyi",
      "Masu koyo da suka fara wani kwas na Koach Learn na 'yan kasuwa cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai mataimakin AI kyauta da imel",
      "Takardar lissafi (spreadsheet) don jerin masu yiwuwar saye",
      "Tambayoyi da ra'ayoyin abokan ciniki na gaske da aka cire sunaye da bayanan tuntuɓa",
      "Kusan minti 60 zuwa 75 gaba ɗaya don darussa, ayyuka, gwaje-gwaje da kayan"
    ],
    facilitatorNotes: [
      "Ku haɗa masu koyo bibbiyu don wasan kwaikwayon sayarwa bayan sun yi atisaye da AI.",
      "Ku nuna yadda ake cire sunaye da bayanan tuntuɓa daga tambayoyin abokan ciniki kafin amfani da AI.",
      "Ku bayyana cewa an ba da ƙa'idojin kira, tes da imel da kalmomi masu sauƙi, kuma ba shawarar shari'a ba ce.",
      "Ku jaddada cewa mai kasuwanci ne ke yanke kowane gyaran ƙorafi da mayar da kuɗi, ba AI ba.",
      "Ku ba da maki ga kayan sayarwa da kula da abokan ciniki da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
