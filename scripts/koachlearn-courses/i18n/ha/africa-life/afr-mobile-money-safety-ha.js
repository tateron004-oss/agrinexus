"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-mobile-money-safety.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const SAF_FRAUD = { name: "The Star, Kenya (27 March 2025): nau'o'in zamba da ake yi wa masu amfani da M-Pesa; ku kai rahoto ta 333, Zuri ko manhajar; Safaricom ba ta taɓa neman PIN ɗinku", url: "https://www.the-star.co.ke/news/infographics/2025-03-27-common-fraud-schemes-targeting-m-pesa-users" };
const SAF_REV = { name: "Citizen Digital, Kenya: yadda ake dawo da kuɗin M-Pesa (ku tura SMS ɗin tabbatarwa zuwa 456; till ko Paybill da ba daidai ba: ku kira 100)", url: "https://citizen.digital/news/how-to-easily-reverse-money-on-m-pesa-n295204" };
const MTN_GH = { name: "Ghana News Agency (October 2026): MTN ta gargaɗi abokan hulɗa kada su raba PIN ɗinsu na MoMo", url: "https://gna.org.gh/2026/10/mtn-cautions-customers-not-to-share-momo-pin/" };
const CBK = { name: "Babban Bankin Kenya (Central Bank of Kenya): yana kula da kuɗin waya kuma yana jera kamfanonin biyan kuɗi masu lasisi", url: "https://www.centralbank.go.ke" };
const CBN_CP = { name: "Babban Bankin Najeriya (CBN): kare masu amfani", url: "https://www.cbn.gov.ng/supervision/cpd.html" };
const BOG = { name: "Babban Bankin Ghana (Bank of Ghana): hanyoyin kai ƙara da jerin cibiyoyi masu lasisi", url: "https://www.bog.gov.gh" };
const BCEAO_EME = { name: "BCEAO, Babban Bankin Ƙasashen Yammacin Afirka: cibiyoyin kuɗin lantarki (ƙasashen XOF kamar Senegal da Côte d'Ivoire)", url: "https://www.bceao.int/fr/content/monnaie-electronique" };

module.exports = {
  id: "afr-mobile-money-safety-ha",
  lang: "ha",
  translationOf: "afr-mobile-money-safety",
  category: "Africa: Life and Work",
  name: "Amfani da Kuɗin Waya Lafiya (M-Pesa, MTN MoMo, Orange Money, Wave)",
  skills: "Kare PIN ɗinku da wayarku, Duba suna kafin ku aika, Amfani da wakilai da kuɗin caji lafiya, Gane zambar kuɗin waya, Gaggauta ɗaukar mataki bayan kuskuren aikawa ko zamba, Rubuta tsarin tsaro na kanku",
  outcome: "aikawa, karɓa da biyan kuɗi ta kuɗin waya lafiya: kare PIN ɗinku, duba suna kafin ku tabbatar, gane zambar da aka saba, gaggauta ɗaukar mataki bayan kuskuren aikawa ko zamba, da ajiye tsarin tsaro mai shafi ɗaya don ku da iyalinku.",
  about: [
    "Kuɗin waya (mobile money) shi ne hanyar da miliyoyin mutane a faɗin Afirka suke aikawa, ajiya da biyan kuɗi kowace rana: M-Pesa a Kenya, MTN MoMo a Ghana da Najeriya, Orange Money a Côte d'Ivoire da Kamaru, Wave a Senegal, da walat ɗin waya a Masar da Moroko. Yana da sauri kuma yana da amfani, kuma 'yan damfara ma sun san haka.",
    "Wannan kwas ɗin na 'yan kasuwa ne, iyaye, ɗalibai, ma'aikata da duk wanda ke amfani da waya mai sauƙi ko wayar zamani don kuɗi. Za ku koyi yadda walat ɗinku, PIN ɗinku da wakilinku suke aiki, yadda ake duba kowane biya kafin ku tabbatar, dabarun da 'yan damfara ke amfani da su, da ainihin abin da za ku yi idan kuɗi ya tafi ga wanda ba shi ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" a wayarku, ba tare da taɓa rubuta PIN ɗinku na gaske don atisaye ba. Akwai ɗan gwaji bayan kowane darasi da babi, da jarabawa mai tambayoyi 20 a ƙarshe. Kuɗin caji, iyaka da lambobin taimako suna canjawa, don haka za ku koyi karanta su a hanyoyin hukuma na kamfaninku."
  ],
  finalTask: "Ku rubuta tsarin tsaron kuɗin waya mai shafi ɗaya don kanku ko iyalinku: dokokinku na PIN da kulle waya, yadda kuke duba suna kafin ku aika, hanyoyin taimako da na kai rahoton zamba na hukuma na kamfaninku (da aka kwafo daga shafin intanet ɗinsa na hukuma, manhajarsa ko kwalin SIM), alamun gargaɗin zamba guda shida, abin da za ku yi a awa ta farko bayan kuskuren aikawa ko zamba, da duba bayanin asusunku (statement) kowane wata.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa a faɗin Afirka, a birane da ƙauyuka: 'yan kasuwa a kasuwa, masu acaɓa (boda boda da okada), iyaye, ɗalibai, ma'aikata da masu ƙananan sana'o'i da ke aikawa, karɓa da biyan kuɗi ta kuɗin waya. Misalai daga Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Kamaru, Masar da Moroko.",
    startingPoint: "Yawancinsu sun riga suna aikawa da karɓar kuɗi ta menu na USSD (*xxx#) ko manhaja. Da yawa ba su taɓa karanta teburin kuɗin caji ba, ba su san yadda ake dawo da kuɗin da aka aika bisa kuskure ba, suna raba waya ko PIN da iyali, ko kuma an taɓa yi musu kiran zamba ko SMS.",
    gap: "Mutane suna rasa kuɗi saboda saƙonnin dawo da kuɗi na bogi, neman PIN da code, wakilai na bogi da dabarar \"na yi kuskuren lamba\", kuma da yawa ba su san matakan hukuma masu sauri bayan kuskuren aikawa ba. Masu koyo suna buƙatar ɗabi'u da tsari a rubuce da zai kare kuɗinsu da na iyalinsu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; an fassara zuwa Faransanci da Larabci",
      "Na'urori: da yawa suna amfani da waya mai sauƙi da menu na USSD; data tana da tsada",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da ranakun kasuwa",
      "Kuɗin caji, iyaka da lambobin taimako sun bambanta tsakanin ƙasashe kuma suna canjawa: koyaushe ku karanta su a hanyoyin hukuma na kamfanin",
      "Kada ku taɓa rubuta PIN, kalmar sirri ko code na lokaci ɗaya na gaske a kowane aikin atisaye"
    ],
    prerequisites: "Asusun kuɗin waya, ko wayar wani a iyali don ku duba menu tare (ba tare da PIN ba)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da wayarku da asusunku na kuɗin waya", action: "saita PIN mai wuyar tsammani, kulle wayarku da riƙe PIN ɗin a wurinku kaɗai", standard: "ba tare da raba PIN ɗin da kowa ba, ko da iyali ne ko wanda ya ce shi ma'aikacin kamfanin ne" },
    { id: "O2", condition: "Idan kuna aika kuɗi, biyan wani shago ko amfani da wakili", action: "duba sunan wanda zai karɓa, lambar da adadin kuɗin a allon tabbatarwa kafin ku rubuta PIN ɗinku, da ajiye saƙon tabbatarwa", standard: "kowane lokaci, kuma ku tsaya idan wani abu bai yi daidai ba" },
    { id: "O3", condition: "Idan aka ba ku kira ko saƙonni shida game da kuɗin waya", action: "gane waɗanne ne zamba da faɗin alamar gargaɗi a kowanne", standard: "kuna samun aƙalla 5 cikin 6 daidai" },
    { id: "O4", condition: "Bayan kuɗi ya tafi lambar da ba daidai ba ko kuna zargin zamba", action: "kai rahoto ta hanyoyin hukuma na kamfaninku da bin matakan dawo da kuɗi", standard: "a rana ɗaya, kuna ajiye ainihin saƙon tabbatarwa, ba tare da amfani da lambar da baƙo ya ba ku ba" },
    { id: "O5", condition: "Ta amfani da abin da kuka koya da shafin intanet na hukuma na kamfaninku ko kwalin SIM", action: "rubuta tsarin tsaron kuɗin waya mai shafi ɗaya don kanku ko iyalinku", standard: "wanda ya ƙunshi dokokin PIN, duba suna, hanyoyin taimako na hukuma, alamun zamba, matakan awa ta farko da duba bayanin asusu kowane wata" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda kuɗin waya ke aiki, da amfani da shi lafiya",
      lessons: [
        {
          title: "Walat ɗinku, PIN ɗinku da wayarku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Saita PIN mai ƙarfi, kulle wayarku da faɗin mutanen da kada su taɓa samun PIN ɗinku.",
          text: [
            "Walat na kuɗin waya asusu ne da ke haɗe da katin SIM ɗinku. Kuna saka kuɗi a wurin wakili, ku aika, ku biya da shi, sannan ku sake cire shi. PIN ɗinku (lambar sirri ta kanku) shi ne mabuɗin walat ɗin. Duk wanda ke da wayarku da PIN ɗinku zai iya kwashe shi gaba ɗaya.",
            "Ku zaɓi PIN mai wuyar tsammani: ba shekarar haihuwarku ba, ba 1234 ko 0000 ba, ba lambobin ƙarshe na lambar wayarku ba. Ku rufe madannan idan kuna rubuta shi a wurin wakili ko a cikin motar haya (matatu) ko kasuwa mai cunkoso. Ku kulle wayar kanta da PIN, zane (pattern) ko yatsa, kuma idan wayarku ta yarda, ku saita PIN na SIM ma, don ɓarawo ba zai iya saka SIM ɗinku a wata waya ba.",
            "Kada ku taɓa raba PIN ɗinku na kuɗin waya ko code na lokaci ɗaya da kowa: ba aboki ba, ba yaro ba, ba wakili ba, kuma ba wanda ya kira ya ce daga Safaricom, MTN, Orange ko Wave yake ba. Kamfanonin sun faɗa a sarari cewa ma'aikatansu ba za su taɓa neman PIN ɗinku ba. Idan wani ya nema, zamba ce.",
            "Idan wayarku ta ɓace ko an sace ta, ko layinku ya daina aiki farat ɗaya, ku kira kamfaninku nan take daga wata waya don a toshe SIM da walat. Layin da ya mutu ba dalili yana iya zama SIM swap (sauya SIM), inda mai laifi ya mayar da lambarku zuwa SIM ɗinsa."
          ],
          steps: ["Ku canja PIN ɗinku daga menu idan yana da sauƙin tsammani (shekarar haihuwa, 1234, lambobi masu maimaituwa).", "Ku saita makullin allo a wayarku.", "Ku kunna PIN na SIM idan wayarku tana da shi.", "Ku rufe madannan idan kuna rubuta PIN ɗinku.", "Ku rubuta lambar taimako ta hukuma ta kamfaninku a takarda, ba daga saƙon baƙo ba.", "Idan wayar ta ɓace ko layin ya mutu, ku kira kamfanin daga wata waya don a toshe shi."],
          words: [["Walat (wallet)", "asusunku na kuɗin waya, da ke haɗe da katin SIM ɗinku."], ["PIN", "lambar sirri ta kanku (personal identification number): lambar sirrin da ke ba ku damar amfani da walat ɗinku."], ["SIM swap (sauya SIM)", "lokacin da aka mayar da lambar wayarku zuwa sabon katin SIM; masu laifi suna ƙoƙarin yin haka don su ƙwace walat ɗinku."]],
          slides: [
            { title: "PIN ɗinku shi ne mabuɗi", bullets: ["Waya + PIN = shiga duk kuɗinku", "Ba shekarar haihuwarku, 1234 ko 0000 ba", "Ku rufe madannan idan kuna rubuta shi"] },
            { title: "Ku kulle waya da SIM", bullets: ["Makullin allo: PIN, zane ko yatsa", "PIN na SIM idan wayarku tana da shi", "Sai ɓarawo ba zai iya amfani da SIM ɗinku a wani wuri ba"] },
            { title: "Kada ku taɓa raba shi", bullets: ["Ba abokai, yara, wakilai ko masu kira ba", "Ma'aikatan gaske ba sa neman PIN ɗinku", "Duk wanda ya nema ɗan damfara ne"] },
            { title: "Waya ta ɓace ko layi ya mutu?", bullets: ["Ku kira kamfanin daga wata waya nan take", "A toshe SIM da walat", "Layin da ya mutu ba dalili yana iya zama SIM swap"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Ku yi tunanin PIN ɗinku a zuciyarku (kada ku rubuta shi ko ku faɗa wa kowa). Shekarar haihuwarku ne, 1234 ko lamba mai maimaituwa? Idan haka ne, ku canja shi daga menu yau. Sannan ku duba cewa wayarku tana da makullin allo.",
          youCanNow: "saita PIN mai wuyar tsammani, kulle wayarku da SIM, da ƙin bai wa duk wanda ya nemi PIN ɗinku.",
          quickCheck: [
            { objective: "O1", q: "Wane PIN ne ya fi aminci?", options: ["1990, shekarar haihuwarku", "1234", "Lambar da ba ta da alaƙa da ranar haihuwarku ko lambar wayarku", "Lambobi huɗu na ƙarshe na lambar wayarku"], answer: 2, why: "PIN da ba shi da alaƙa da bayananku yana da wuya wasu su yi tsammaninsa." },
            { objective: "O1", q: "Wani ya kira ya ce daga kamfanin kuɗin wayarku yake kuma yana buƙatar PIN ɗinku don gyara asusunku. Me za ku yi?", options: ["Ku katse wayar; ma'aikatan gaske ba sa neman PIN ɗinku", "Ku ba shi PIN ɗin, sannan ku canja shi daga baya", "Ku ba shi lambobi biyu na farko kawai", "Ku tura masa code ɗin da ke wayarku a maimakon haka"], answer: 0, why: "Kamfanoni ba sa taɓa neman PIN ko code ɗinku; duk wanda ya nema ɗan damfara ne." }
          ]
        },
        {
          title: "Aikawa da biya: ku duba suna kafin PIN",
          objectives: ["O2"],
          minutes: 5,
          goal: "Duba suna, lamba da adadin kuɗi a allon tabbatarwa kafin ku rubuta PIN ɗinku.",
          text: [
            "Yawancin kurakurai da zamba da yawa ana iya hana su a wuri ɗaya: allon tabbatarwa. Kafin ku rubuta PIN ɗinku, wayarku tana nuna wanda kuke biya da adadin kuɗin. A Kenya, M-Pesa tana nuna sunan mai lamba, till ko Paybill; sauran kamfanoni ma suna nuna suna ko sunan shago.",
            "Ku karanta shi a hankali. Shin mutumin ne ko shagon da ya dace? Adadin kuɗin daidai ne? 5,000 ba 50,000 ba ne. Idan kuna biyan shago, ku ɗauki lambar till, ta shago ko ta Paybill daga allon sanarwa ko rasit a cikin shagon, ba daga lambar da wani ya turo muku ba.",
            "Idan sunan ba daidai ba ne ko baƙo ne, ku soke. Kada ku rubuta PIN ɗinku \"don ganin abin da zai faru\". Bayan kun biya, ku ajiye saƙon tabbatarwa (SMS) har sai kun tabbata mutumin ko shagon ya karɓi kuɗin. Shi ne shaidarku.",
            "Misali: Ama a Kumasi tana biyan wanda ke kawo mata kaya GHS 600 ta MTN MoMo. Allon yana nuna suna daban da na mai kawo kayan. Ta soke, ta kira shi ta lambar da ta riga ta sani, sai ta gano ta rubuta lamba ɗaya ba daidai ba."
          ],
          steps: ["Ku rubuta lambar waya, lambar shago ko till.", "Ku rubuta adadin kuɗin ku karanta shi sau biyu.", "A allon tabbatarwa, ku karanta suna, lamba da adadin kuɗi.", "Idan wani abu bai yi daidai ba, ku soke.", "Idan duka sun yi daidai, ku rufe madannan ku rubuta PIN ɗinku.", "Ku ajiye SMS ɗin tabbatarwa a matsayin shaida."],
          words: [["Allon tabbatarwa", "allon da ke nuna wanda kuke biya da adadin kuɗin, kafin ku rubuta PIN ɗinku."], ["Till / lambar shago / Paybill", "lambobin da shaguna da kamfanoni ke amfani da su don karɓar kuɗi."], ["SMS ɗin tabbatarwa", "saƙon da kamfaninku ke turowa bayan biya; shaidarku."]],
          slides: [
            { title: "Ku tsaya a allon tabbatarwa", bullets: ["Yana nuna suna, lamba da adadin kuɗi", "Ku karanta shi a hankali, kafin PIN", "5,000 ba 50,000 ba ne"] },
            { title: "Biyan shago", bullets: ["Ku ɗauki lambar till ko ta shago daga allon sanarwar shagon", "Ba daga lambar da wani ya turo muku ba", "Ku duba sunan shagon a allo"] },
            { title: "Wani abu ba daidai ba? Ku soke", bullets: ["Kada ku rubuta PIN don ganin abin da zai faru", "Ku kira mutumin ta lambar da kuka riga kuka sani", "Sannan ku sake gwadawa a hankali"] },
            { title: "Ku ajiye shaidarku", bullets: ["Ku ajiye SMS ɗin tabbatarwa", "Har sai an karɓi kuɗin lafiya", "Kuna buƙatarsa don kowane dawo da kuɗi"] }
          ],
          sources: [SAF_REV],
          tryIt: "A gaba idan kuna aika kuɗi ko biya, ku tsaya a allon tabbatarwa ku faɗi suna, lamba da adadin kuɗin da babbar murya kafin ku rubuta PIN ɗinku. Sannan ku nemo SMS ɗin tabbatarwa kada ku goge shi.",
          youCanNow: "duba suna, lamba da adadin kuɗi kafin ku rubuta PIN ɗinku, da ajiye saƙon tabbatarwa a matsayin shaida.",
          quickCheck: [
            { objective: "O2", q: "Allon tabbatarwa yana nuna sunan da ba ku sani ba. Me za ku yi?", options: ["Ku rubuta PIN; sunaye sau da yawa ba daidai ba ne", "Ku rubuta PIN ku tambaya daga baya", "Ku fara aika ɗan kuɗi kaɗan", "Ku soke ku duba lambar tare da mutumin"], answer: 3, why: "Sunan baƙo yana nufin lambar da ba daidai ba ko dabara; ku soke kafin PIN." },
            { objective: "O2", q: "Me yasa za ku ajiye SMS ɗin tabbatarwa bayan kun biya?", options: ["Shi ne shaidarku idan wani abu ya lalace", "Yana ba ku maki", "Doka ta ce ku goge shi", "Yana rage kuɗin biya na gaba"], answer: 0, why: "Saƙon tabbatarwa yana tabbatar da biyan, kuma ana buƙatarsa don dawo da kuɗi ko kai ƙara." }
          ]
        },
        {
          title: "Wakilai, kuɗin caji da bayananku",
          objectives: ["O2", "O5"],
          minutes: 5,
          goal: "Karanta kuɗin cajin wani aiki daga teburin kuɗin caji na hukuma na kamfaninku, da cire kuɗi lafiya a wurin wakili.",
          text: [
            "Wakili (agent) shago ne da kuke saka kuɗi a walat ɗinku (cash in, ko ajiya) ko cire kuɗi (cash out). Ku yi amfani da wakili mai rajista da ke da allon kamfanin da lambar wakili. Ku yi aikin da kanku a wayarku idan za ku iya, kuma ku ƙirga kuɗin kafin ku tafi.",
            "Kuɗin caji ya dangana da kamfanin, ƙasar, adadin kuɗin da nau'in aikin. Kada ku yi tsammani kuma kada ku amince da kuɗin cajin da wani ya faɗa muku. Ku karanta teburin kuɗin caji na hukuma (tariff) a shafin intanet ko manhajar kamfanin, a shago, ko ta menu. Manhajoji da yawa ma suna nuna kuɗin cajin kafin ku tabbatar. Aika wa wani a wani layin waya (network) ko zuwa banki yana iya fi tsada.",
            "Wakilin bogi yana iya cewa \"ba ni wayarka, zan yi maka\", ko ya nemi PIN ɗinku. Kada ku taɓa bayar da wayarku tare da PIN. Wakilai na gaske ba sa buƙatarsa.",
            "Sau ɗaya a wata, ku karanta ƙaramin bayanin asusu (mini statement) ko cikakken bayanin asusu daga menu ko manhaja. Ku nemi biyan kuɗin da ba ku gane ba. Misali: Moussa, tela a Dakar, yana duba tarihin Wave ɗinsa a ƙarshen kowane wata kuma yana rubuta jimillar abin da ya aika da jimillar abin da ya karɓa a littafi. Alƙaluman da ke cikin wannan kwas misalai ne kawai."
          ],
          steps: ["Ku nemo teburin kuɗin caji na hukuma a shafin intanet, manhaja ko allon sanarwa a shagon kamfanin.", "Ku duba kuɗin cajin adadin da kuke son aikawa ko cirewa.", "A wurin wakili, ku duba allon kamfanin da lambar wakili.", "Ku fara cire kuɗin a wayarku; ku duba sunan wakilin a allo.", "Ku ƙirga kuɗin kafin ku tafi.", "Ku karanta bayanin asusunku sau ɗaya a wata."],
          words: [["Wakili (agent)", "shago mai rajista da ke saka da cire kuɗi don kamfanin kuɗin waya."], ["Teburin kuɗin caji (tariff)", "teburin hukuma na kuɗin caji na kowane nau'i da girman aiki."], ["Ƙaramin bayanin asusu (mini statement)", "gajeren jerin ayyukanku na ƙarshe kaɗan, daga menu ko manhaja."]],
          slides: [
            { title: "Amfani da wakili", bullets: ["Wakili mai rajista: allon kamfani da lambar wakili", "Ku fara a wayarku; ku duba sunan", "Ku ƙirga kuɗin kafin ku tafi"] },
            { title: "Kuɗin caji: ku karanta, kada ku yi tsammani", bullets: ["Ya dangana da kamfani, ƙasa, adadi da nau'in aiki", "Teburin hukuma: shafin intanet, manhaja, allon sanarwa a shago", "Wasu layukan waya ko bankuna na iya fi tsada"] },
            { title: "Alamun wakilin bogi", bullets: ["\"Ba ni wayarka, zan yi maka\"", "Yana neman PIN ɗinku", "Babu allo ko lambar wakili"] },
            { title: "Dubawa kowane wata", bullets: ["Ku karanta bayanin asusunku daga menu ko manhaja", "Ku nemi biyan kuɗin da ba ku sani ba", "Ku rubuta jimillar abin da aka aika da wanda aka karɓa"] }
          ],
          sources: [CBK, BCEAO_EME],
          tryIt: "Ku nemo teburin kuɗin caji na hukuma na kamfaninku (shafin intanet, manhaja ko allon sanarwa a shago). Ku rubuta kuɗin cajin aika wani adadi da kuke yawan aikawa, misali KES 1,000, NGN 5,000, GHS 100 ko XOF 10,000. Sannan ku buɗe ƙaramin bayanin asusunku ku duba kowane layi.",
          youCanNow: "karanta ainihin kuɗin caji daga teburin hukuma, amfani da wakili lafiya da duba bayanin asusunku don biyan kuɗin da ba a saba ba.",
          quickCheck: [
            { objective: "O2", q: "A wurin wakili, wakilin yana neman wayarku da PIN ɗinku don \"ya yi sauri\". Me za ku yi?", options: ["Ku ba shi; ana amincewa da wakilai", "Ku ba shi wayar amma ba PIN ba", "Ku yi da kanku ku riƙe PIN ɗinku a sirri", "Ku rubuta PIN ɗin a takarda don wakilin"], answer: 2, why: "Wakilai na gaske ba sa taɓa buƙatar PIN ɗinku; ku ne kuke farawa da tabbatar da aikin da kanku." },
            { objective: "O5", q: "A ina kuke samun ainihin kuɗin cajin aika kuɗi?", options: ["Abin da baƙo ya faɗa muku", "Teburin kuɗin caji na hukuma na kamfanin, manhaja ko allon sanarwa a shago", "Saƙon WhatsApp da aka tura", "Tsammanin maƙwabcinku"], answer: 1, why: "Kuɗin caji yana canjawa kuma ya bambanta tsakanin ƙasashe, don haka ku karanta shi a hanyoyin hukuma." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda kuɗin waya ke aiki, da amfani da shi lafiya",
        questions: [
          { objective: "O1", q: "Wane ne ya kamata ya san PIN ɗinku na kuɗin waya?", options: ["Ku da wakili", "Duk iyalinku", "Ku kaɗai", "Ku da masu kula da abokan hulɗa (customer care)"], answer: 2, why: "Ku kaɗai; ma'aikata, wakilai da iyali ba sa taɓa buƙatarsa." },
          { objective: "O1", q: "Layinku ya daina aiki farat ɗaya kuma ba ku canja komai ba. Me zai iya zama, kuma me za ku yi?", options: ["SIM swap ne; ku kira kamfanin daga wata waya don a toshe shi", "Batir ya yi ƙasa; ku yi caji", "Hutu ne; ku jira mako ɗaya", "Ba komai; zai dawo"], answer: 0, why: "Layin da ya mutu yana iya nufin mai laifi ya ɗauke lambarku; toshewa da sauri yana kare walat ɗinku." },
          { objective: "O2", q: "Yaushe ne lokacin da ya dace ku duba wanda kuke biya?", options: ["Bayan kun rubuta PIN", "A allon tabbatarwa, kafin PIN", "Washegari", "Sai don manyan kuɗaɗe kawai"], answer: 1, why: "Da zarar an rubuta PIN kuɗin yana tafiya; dole a fara dubawa." },
          { objective: "O2", q: "Kuna biyan shago. Daga ina lambar till ko ta shago za ta fito?", options: ["Tes daga lambar da ba a sani ba", "Wanda ya kira ya ce shagon ya canja lambarsa", "Status na WhatsApp", "Allon sanarwa ko rasit a cikin shagon"], answer: 3, why: "'Yan damfara suna turo lambobin biya na bogi; ku ɗauke ta daga shagon kansa ku duba sunan a allo." },
          { objective: "O5", q: "Me yasa za ku karanta bayanin asusunku sau ɗaya a wata?", options: ["Don nemo biyan kuɗin da ba ku gane ba", "Don rage kuɗin caji", "Don canja lambarku", "Domin kamfanin yana biyan ku don haka"], answer: 0, why: "Dubawa kowane wata yana gano zamba da kurakurai da wuri." }
        ]
      }
    },
    {
      name: "Babi na 2: Zamba, kurakurai da tsarin tsaronku",
      lessons: [
        {
          title: "Gane zambar kuɗin waya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gane zambar kuɗin waya guda shida da aka saba da alamar gargaɗi a kowanne.",
          text: [
            "'Yan damfara suna amfani da kira, SMS, WhatsApp da kafofin sada zumunta. Suna yin kamar su ne kamfaninku, ɗan uwa, wakili, mai saye ko kamfanin da ke ba da aiki. Dabarun suna canjawa, amma alamun gargaɗi iri ɗaya ne.",
            "1. Dawo da kuɗi na bogi: kun sami SMS da ke kama da an biya ku, sannan kira: \"Na turo maka kuɗi bisa kuskure, don Allah ka mayar.\" Ku fara duba ainihin kuɗin da ke asusunku. Sau da yawa babu kuɗin da ya iso; SMS ɗin ya fito ne daga lambar waya ta yau da kullum, ba daga kamfanin ba. 2. Neman PIN ko code: duk wanda ya nemi PIN ɗinku ko code na lokaci ɗaya. 3. Ma'aikatan bogi: \"Za a toshe asusunka sai dai idan ka danna wannan code ko ka faɗa mana bayananka.\" 4. Kyauta ko tallatawa: \"Ka ci kyauta, ka turo kuɗi don karɓar kyautarka.\" 5. Aikin bogi ko bashi: tayin da ke neman ku fara biyan kuɗi. 6. Saƙon gaggawa na iyali: \"Mama, ina cikin matsala, ki turo kuɗi zuwa wannan sabuwar lamba.\"",
            "Saƙonnin gaske daga kamfanin suna zuwa daga sunansa na hukuma ko gajeriyar lamba (short code), ba daga lambar waya ta yau da kullum ba. Kamfanoni ba sa neman ku danna code don gyara asusunku ko cin kyauta. Idan wani abu yana kama da gaggawa, ku tsaya. Ku sake kiran mutumin ko kamfanin ta lambar da kuka riga kuka sani.",
            "Misali: Chinedu a Enugu ya sami SMS da ke cewa NGN 20,000 ya iso, sannan kira yana neman ya mayar. Ya duba kuɗin da ke asusunsa a manhaja: babu abin da ya iso. Ya katse wayar ya kai rahoton lambar."
          ],
          steps: ["Ku duba mai aikawa: sunan hukuma ko gajeriyar lamba, ko lambar waya ta yau da kullum?", "Ku duba ainihin kuɗin da ke asusunku a menu ko manhaja.", "Ku tambayi kanku: shin suna neman PIN ɗina, code, kuɗi, ko suna gaggauta ni?", "Ku tsaya ku sake kira ta lambar da kuka riga kuka sani.", "Ku kai rahoton lambar zamba ga kamfaninku."],
          words: [["Dawo da kuɗi na bogi", "dabarar da wani yake yin kamar ya turo muku kuɗi bisa kuskure kuma yana neman ku mayar."], ["Code na lokaci ɗaya (OTP)", "gajeriyar lambar da ake turo wayarku don tabbatar da wani aiki; kada ku taɓa raba ta."], ["Gajeriyar lamba (short code)", "gajeriyar lambar hukuma da kamfani ke turo saƙonni daga ita."]],
          slides: [
            { title: "Zamba shida da aka saba", bullets: ["Dawo da kuɗi na bogi; neman PIN ko code; ma'aikatan bogi", "Kyautar da ke neman kuɗi; aiki ko bashi da ke neman kuɗi", "Saƙon gaggawa na iyali daga sabuwar lamba"] },
            { title: "Dawo da kuɗi na bogi", bullets: ["SMS yana kama da kuɗi ya iso", "Kira: \"Na turo bisa kuskure, ka mayar\"", "Ku duba ainihin kuɗinku: sau da yawa babu abin da ya zo"] },
            { title: "Alamun gargaɗi", bullets: ["Suna neman PIN ko code", "Suna neman a fara biyan kuɗi", "Suna gaggauta ku; daga lambar waya ta yau da kullum"] },
            { title: "Abin da za ku yi", bullets: ["Ku tsaya. Ku duba kuɗinku", "Ku sake kira ta lambar da kuka riga kuka sani", "Ku kai rahoton lambar ga kamfaninku"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Ku duba akwatin SMS ɗinku don saƙonni game da kuɗi. Ga kowanne, ku yanke: gajeriyar lambar hukuma ce ko lambar waya ta yau da kullum? Yana neman PIN, code, kuɗi ko gaggawa? Ku rubuta duk alamun zamba da kuka gani.",
          youCanNow: "gane zambar kuɗin waya guda shida da aka saba da faɗin alamar gargaɗi a kowanne.",
          quickCheck: [
            { objective: "O3", q: "SMS daga lambar waya ta yau da kullum ya ce kun karɓi XAF 25,000. Sannan wani ya kira yana neman ku mayar. Me za ku fara yi?", options: ["Ku mayar da sauri don ku zama masu gaskiya", "Ku duba ainihin kuɗinku a menu ko manhaja", "Ku ba mai kiran PIN ɗinku don ya dawo da shi", "Ku tura SMS ɗin ga abokai"], answer: 1, why: "SMS na dawo da kuɗi na bogi suna fitowa daga lambobin yau da kullum; ainihin kuɗinku yana nuna gaskiya." },
            { objective: "O3", q: "Wani saƙo ya ce kun ci waya kuma dole ku fara biyan kuɗin kawowa. Mene ne alamar gargaɗi?", options: ["Ya ambaci waya", "Ya zo da yamma", "Yana neman ku biya kuɗi don karɓar kyauta", "Yana amfani da sunanku na farko"], answer: 2, why: "Kyaututtuka na gaske ba sa neman a fara biyan kuɗi; biya don karɓa zamba ce da aka sani." }
          ]
        },
        {
          title: "Kuskuren aikawa ko zamba: awa ta farko",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kai rahoton kuskuren aikawa ko zamba ta hanyoyin hukuma na kamfaninku a rana ɗaya.",
          text: [
            "Ku yi sauri. Dawo da kuɗi ya fi sauƙi lokacin da kuɗin yana nan a ɗayan walat ɗin. Ku ajiye ainihin SMS ɗin tabbatarwa; kada ku goge ko ku canja shi.",
            "Ku yi amfani da hanyoyin hukuma kaɗai: lambar taimako da aka buga a kwalin SIM ko a shafin intanet na kamfanin, manhajar hukuma, gajeriyar lambar hukuma, ko shagon kamfanin. Kada ku taɓa amfani da lambar da baƙo ya bayar ko wadda ke cikin sharhi a kafofin sada zumunta, kuma kada ku taɓa biyan duk wanda ya ce zai \"dawo muku\" da kuɗinku idan kun biya shi.",
            "Misali daga Kenya: hanyoyin da Safaricom ta wallafa sun haɗa da tura SMS ɗin tabbatarwa na M-Pesa zuwa 456 don neman a dawo da kuɗin da aka aika wa wanda ba shi ba, kiran 100 don till ko Paybill da ba daidai ba, da tura lambar zamba ko saƙo zuwa 333. Sauran kamfanoni suna da nasu matakan; ku karanta su a shafin intanet ko manhajar hukuma ta kamfanin, domin lambobi da matakai suna canjawa.",
            "Ba tabbas ne za a dawo da kuɗin ba. Idan mutumin ya riga ya cire kuɗin kuma ya ƙi mayarwa, kamfanin yana iya ce ku je wurin 'yan sanda. Idan an sace PIN ɗinku ko layinku, ku fara kai rahoto ga kamfanin, sannan 'yan sanda. Idan kamfanin bai warware shi ba, babban bankin ƙasa yana da hanyar kai ƙarar masu amfani (misali Babban Bankin Najeriya ko Bank of Ghana)."
          ],
          steps: ["Kada ku goge SMS ɗin tabbatarwa.", "Cikin awa ɗaya, ku yi amfani da hanyar hukuma ta kamfaninku don dawo da kuɗi ko kai rahoton zamba.", "Ku rubuta rana, lokaci, adadin kuɗi, lambar aiki (transaction ID) da wanda kuka yi magana da shi.", "Idan an sace PIN ko layi, ku fara toshe SIM da walat.", "Idan ya zama dole, ku kai rahoto ga 'yan sanda tare da SMS ɗin.", "Idan kamfanin bai warware shi ba, ku yi amfani da hanyar kai ƙara ta babban bankin ƙasa."],
          words: [["Dawo da kuɗi (reversal)", "lokacin da kamfanin ya mayar da kuɗin da aka aika zuwa lambar da ba daidai ba, idan yana nan har yanzu."], ["Lambar aiki (transaction ID)", "lambar da ke cikin SMS ɗin tabbatarwa da ke gane biya ɗaya."], ["Zambar dawo da kuɗi", "tayin bogi na dawo muku da kuɗinku da suka ɓace idan kun biya kuɗi."]],
          slides: [
            { title: "Ku yi aiki a awa ta farko", bullets: ["Dawo da kuɗi ya fi sauƙi lokacin da kuɗin yana nan", "Ku ajiye ainihin SMS ɗin tabbatarwa", "Ku rubuta rana, lokaci, adadi, lambar aiki"] },
            { title: "Hanyoyin hukuma kaɗai", bullets: ["Lambar taimako a kwalin SIM ko shafin intanet na hukuma", "Manhajar hukuma, gajeriyar lamba ko shagon kamfanin", "Ba lambar da baƙo ya bayar ba"] },
            { title: "Misali: Kenya (Safaricom)", bullets: ["Wanda ba shi ba: ku tura SMS ɗin zuwa 456", "Till ko Paybill da ba daidai ba: ku kira 100", "Lambar zamba ko saƙo: ku tura zuwa 333"] },
            { title: "Idan ba a warware shi ba", bullets: ["Rahoto ga 'yan sanda tare da SMS ɗin", "Hanyar kai ƙara ta babban bankin ƙasa", "Kada ku taɓa biyan kuɗin \"dawo da kuɗi\""] }
          ],
          sources: [SAF_REV, SAF_FRAUD, CBN_CP, BOG],
          tryIt: "Ku nemo matakan hukuma na kamfaninku na dawo da kuɗi da kai rahoton zamba a shafin intanet ɗinsa, manhaja ko kwalin SIM. Ku rubuta su a takarda: lamba ko code, da abin da za ku aika. Kada ku kwafo su daga saƙon WhatsApp da aka tura.",
          youCanNow: "ɗaukar mataki cikin awa ta farko bayan kuskuren aikawa ko zamba, ta amfani da hanyoyin hukuma na kamfaninku kaɗai.",
          quickCheck: [
            { objective: "O4", q: "Kun aika kuɗi zuwa lambar da ba daidai ba. Me za ku ajiye?", options: ["Babu komai; ku goge SMS ɗin", "Adadin kuɗin a kanku kawai", "Hoton allo (screenshot) daga baƙo", "Ainihin SMS ɗin tabbatarwa"], answer: 3, why: "Ainihin saƙon tabbatarwa yana da lambar aiki da kamfanin ke buƙata." },
            { objective: "O4", q: "Wani a Facebook yana tayin dawo muku da kuɗinku da suka ɓace idan kun biya ɗan kuɗi. Mene ne wannan?", options: ["Zambar dawo da kuɗi ce; ku yi amfani da hanyoyin hukuma kaɗai", "Hidima ce mai taimako", "Hanyar babban bankin ƙasa ce", "Shagon kamfani ne"], answer: 0, why: "Biyan baƙo don dawo da kuɗi zamba ta biyu ce; hanyoyin hukuma kyauta ne." }
          ]
        },
        {
          title: "Tsarin tsaron kuɗin wayarku",
          objectives: ["O5"],
          minutes: 5,
          goal: "Rubuta tsarin tsaron kuɗin waya mai shafi ɗaya don kanku ko iyalinku.",
          text: [
            "Tsarin tsaro yana tara duk abin da ke cikin wannan kwas a shafi ɗaya, don ku da iyalinku ku san abin da za ku yi kafin wani abu ya lalace. Ku ajiye shi a takarda a gida, ba a waya kawai ba.",
            "Yana da sassa shida: 1. Dokokin PIN da waya (PIN mai wuya, makullin allo, PIN na SIM, kada a taɓa raba shi). 2. Duba suna kafin kowane PIN. 3. Hanyoyin taimako da na kai rahoton zamba na hukuma na kamfaninku, da aka kwafo daga shafin intanet, manhaja ko kwalin SIM. 4. Alamun gargaɗin zamba guda shida. 5. Matakan awa ta farko bayan kuskuren aikawa ko zamba. 6. Duba bayanin asusu kowane wata, tare da rana.",
            "Ku tattauna shi da iyaye tsofaffi da matasa, waɗanda ake yawan kai wa hari. Ku yarda da dokar iyali: \"Ba ma taɓa aika kuɗi zuwa sabuwar lamba saboda saƙon gaggawa. Muna fara sake kira ta tsohuwar lamba.\"",
            "Misali: Fatima, 'yar kasuwa a Casablanca, tana ajiye tsarinta a cikin littafin kuɗinta. A ƙarshen kowane wata tana duba tarihin walat ɗinta kuma tana yiwa ranar alama a kan tsarin."
          ],
          steps: ["Ku rubuta dokokinku na PIN da kulle waya.", "Ku rubuta dokar duba suna.", "Ku kwafo hanyoyin taimako da na kai rahoton zamba na hukuma na kamfaninku daga majiyar hukuma.", "Ku jera alamun gargaɗin zamba guda shida.", "Ku rubuta matakanku na awa ta farko.", "Ku sa rana kowane wata don duba bayanin asusunku.", "Ku karanta shi tare da iyalinku."],
          words: [["Tsarin tsaro", "gajeren jerin dokoki da matakai a rubuce da ke kare kuɗinku."]],
          slides: [
            { title: "Shafi ɗaya, sassa shida", bullets: ["Dokokin PIN da waya; duba suna", "Hanyoyin taimako da na kai rahoton zamba na hukuma", "Alamun zamba; matakan awa ta farko; dubawa kowane wata"] },
            { title: "Hanyoyin hukuma kaɗai", bullets: ["Ku kwafo su daga shafin intanet, manhaja ko kwalin SIM", "Ba daga saƙon da aka tura ko baƙo ba"] },
            { title: "Ku raba shi a gida", bullets: ["Ana yawan kai wa iyaye da matasa hari", "Dokar iyali: a fara sake kira ta tsohuwar lamba", "Ku ajiye tsarin a takarda"] }
          ],
          sources: [CBK, BOG, BCEAO_EME],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin tsaron kuɗin wayarku mai shafi ɗaya da dukkan sassa shida. Ku kwafo hanyoyin taimako da na kai rahoton zamba na kamfaninku daga shafin intanet ɗinsa na hukuma, manhaja ko kwalin SIM. Ku karanta shi tare da mutum ɗaya a iyalinku.",
          youCanNow: "rubuta da raba tsarin tsaron kuɗin waya da ke kare ku da iyalinku.",
          quickCheck: [
            { objective: "O5", q: "Daga ina lambobin taimako da ke cikin tsarinku za su fito?", options: ["Saƙon WhatsApp da aka tura", "Shafin intanet na hukuma na kamfanin, manhaja ko kwalin SIM", "Wanda ya kira ya ce shi ma'aikaci ne", "Sharhi a kafofin sada zumunta"], answer: 1, why: "'Yan damfara suna yaɗa lambobin taimako na bogi; ku kwafo su daga majiyoyin hukuma kaɗai." },
            { objective: "O5", q: "Wace dokar iyali ce ke kare ku daga zambar saƙon gaggawa?", options: ["Koyaushe ku aika da sauri a lokacin gaggawa", "Ku raba PIN ɗaya ga dukan iyali", "Ku amsa da PIN ɗinku don tabbatar cewa ku ne", "Ku sake kiran mutumin ta tsohuwar lambarsa kafin ku aika"], answer: 3, why: "Sake kira ta lambar da aka sani yana nuna ko saƙon gaggawan gaskiya ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Zamba, kurakurai da tsarin tsaronku",
        questions: [
          { objective: "O3", q: "\"Za a toshe asusunka yau. Ka danna wannan code ka rubuta PIN ɗinka don ka riƙe shi.\" Wannan:", options: ["Saƙo ne na yau da kullum daga kamfani", "Zamba ce: yana gaggauta ku kuma yana neman PIN ɗinku", "Dawo da kuɗi ne", "Tallatawa ce"], answer: 1, why: "Kamfanoni ba sa taɓa neman ku danna code tare da PIN ɗinku; gaggawa alamar gargaɗi ce." },
          { objective: "O3", q: "Wane saƙo ne ya fi yiwuwa ya zama na gaske?", options: ["Daga lambar waya ta yau da kullum: \"Ka mayar da kuɗin da na turo bisa kuskure\"", "\"Ka ci kyauta! Ka biya kuɗi don karɓa\"", "Saƙon tabbatar da biya daga sunan hukuma na kamfanin, wanda ya yi daidai da kuɗin da ke asusunku", "\"Mama, sabuwar lamba ce, ki turo kuɗi yanzu\""], answer: 2, why: "Saƙonnin tabbatarwa na gaske suna fitowa daga sunan hukuma ko gajeriyar lamba kuma suna daidai da ainihin kuɗinku." },
          { objective: "O4", q: "Yaushe ya kamata ku kai rahoton kuskuren aikawa?", options: ["Wata mai zuwa", "Sai idan kuɗi ne mai yawa", "Bayan ɗayan mutumin ya kashe shi", "A rana ɗaya, da sauri yadda za ku iya"], answer: 3, why: "Dawo da kuɗi ya fi sauƙi lokacin da kuɗin yana nan a ɗayan walat ɗin." },
          { objective: "O4", q: "Mutumin da ya karɓi kuɗinku bisa kuskure ya cire shi kuma ya ƙi mayarwa. Me za ku yi a gaba?", options: ["Ku bi shawarar kamfanin ku kai rahoto ga 'yan sanda tare da SMS ɗinku", "Ku biya baƙo don ya dawo da shi", "Ku goge SMS ɗin", "Ku ƙara musu kuɗi"], answer: 0, why: "Da zarar an cire shi, yana iya zama maganar 'yan sanda; SMS ɗinku shi ne shaidarku." },
          { objective: "O5", q: "Sau nawa tsarin tsaro ya ce ku duba bayanin asusunku?", options: ["Ba taɓa ba", "Sau ɗaya a wata", "Sau ɗaya a kowace shekara biyar", "Sai idan waya ta ɓace kawai"], answer: 1, why: "Dubawa akai-akai kowane wata yana gano biyan kuɗin da ba a saba ba da wuri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Amfani da Kuɗin Waya Lafiya (M-Pesa, MTN MoMo, Orange Money, Wave)",
    questions: [
      { objective: "O1", q: "Wane PIN ne ya fi rauni?", options: ["Lambobi huɗu na bazata", "Lambar da ku kaɗai kuka sani", "PIN da kuka canja kwanan nan", "Shekarar haihuwarku"], answer: 3, why: "Shekarar haihuwarku tana da sauƙi ga wasu su nemo su yi tsammani." },
      { objective: "O1", q: "Wane ne zai iya neman PIN ɗinku na kuɗin waya lafiya?", options: ["Babu kowa", "Masu kula da abokan hulɗa (customer care)", "Wakili mai rajista", "Bankinku"], answer: 0, why: "Babu wanda ke buƙatar PIN ɗinku; ma'aikata da wakilai na gaske ba sa taɓa nema." },
      { objective: "O1", q: "An sace wayarku. Mene ne mataki na farko?", options: ["Ku sayi sabuwar waya wata mai zuwa", "Ku kira kamfanin daga wata waya don a toshe SIM da walat", "Ku aika wa ɓarawon saƙo", "Ku jira ku gani ko za ta dawo"], answer: 1, why: "Toshewa da sauri yana hana ɓarawo amfani da walat ɗinku." },
      { objective: "O1", q: "Me yasa za ku saita makullin allo da PIN na SIM?", options: ["Don wayar ta yi sauri", "Don rage kuɗin caji", "Don ɓarawo ba zai iya amfani da wayarku ko SIM ɗinku cikin sauƙi ba", "Domin wakilai suna buƙatarsa"], answer: 2, why: "Makullai suna hana duk wanda ya sami wayarku ko SIM ɗinku saurin amfani da su." },
      { objective: "O2", q: "Wane abubuwa uku kuke dubawa a allon tabbatarwa?", options: ["Lokaci, yanayi da batir", "Suna, lamba da adadin kuɗi", "Wakili, launi da rana", "Kuɗin caji, layin waya da sigina"], answer: 1, why: "Suna, lamba da adadin kuɗi suna nuna muku cewa kuɗin yana tafiya wurin da ya dace." },
      { objective: "O2", q: "Kun yi niyyar aika GHS 50 amma allon yana nuna GHS 500. Me za ku yi?", options: ["Ku soke ku sake rubutawa", "Ku rubuta PIN ku nemi a mayar muku da canji", "Ku aika ku dawo da shi daga baya", "Ku rubuta rabin PIN"], answer: 0, why: "Ku soke kafin PIN; gyarawa daga baya yana da wuya." },
      { objective: "O2", q: "Wani saƙo ya ce wanda ke kawo muku kaya yana da \"sabuwar lambar biya\". Me za ku yi?", options: ["Ku biya sabuwar lambar nan take", "Ku tura saƙon ga sauran abokan ciniki", "Ku kira mai kawo kayan ta lambar da kuka riga kuka sani don ku tabbatar", "Ku biya rabi ga kowace lamba"], answer: 2, why: "Lambobin biya na bogi dabara ce da aka saba; ku tabbatar da mutumin ta lambar da kuka sani." },
      { objective: "O2", q: "A wurin wakili, wanne ne lafiya?", options: ["Ba wakilin wayarku da PIN ɗinku", "Tafiya kafin ƙirga kuɗin", "Amfani da wakili marar allo", "Fara cire kuɗin a wayarku da ƙirga kuɗin"], answer: 3, why: "Kuna riƙe ikon PIN ɗinku kuma kuna duba kuɗin kafin ku tafi." },
      { objective: "O3", q: "A zambar dawo da kuɗi na bogi, me yawanci ya faru?", options: ["Kuɗi na gaske ya iso bisa kuskure", "SMS na bogi daga lambar waya ta yau da kullum ya yi kamar kuɗi ya iso", "Kamfanin ya yi kuskure", "Wakilin ya rasa kuɗin"], answer: 1, why: "SMS ɗin bogi yana kama da biya, amma ainihin kuɗinku yana nuna babu abin da ya zo." },
      { objective: "O3", q: "Wanne ne alamar gargaɗin zamba?", options: ["Suna neman kuɗi kafin su ba da kyauta, aiki ko bashi", "Saƙon ya fito daga gajeriyar lambar hukuma", "Adadin kuɗin ya yi daidai da kuɗin da ke asusunku", "Ku da kanku kuka fara biyan"], answer: 0, why: "Biya da farko don karɓa alamar zamba ce da aka sani." },
      { objective: "O3", q: "Saƙon WhatsApp daga sabuwar lamba: \"Baba, wayata ta ɓace, ka turo XOF 30,000 zuwa wannan lamba yanzu.\" Me za ku yi?", options: ["Ku aika da sauri", "Ku aika rabi", "Ku fara kiran ɗanku ko 'yarku ta tsohuwar lamba", "Ku amsa da PIN ɗinku"], answer: 2, why: "Kiran tsohuwar lamba yana tabbatar ko saƙon gaggawan gaskiya ne." },
      { objective: "O3", q: "Ta yaya saƙonnin gaske na kamfani suke yawan zuwa?", options: ["Daga lambar waya ta yau da kullum", "Daga sunan hukuma na kamfanin ko gajeriyar lamba", "Ta WhatsApp na baƙo", "Daga shafin kafofin sada zumunta da ke neman PIN ɗinku"], answer: 1, why: "Kamfanoni suna aikawa daga sunaye na hukuma ko gajerun lambobi; lambobin yau da kullum alamar gargaɗi ne." },
      { objective: "O4", q: "A Kenya, matakin da Safaricom ta wallafa don neman a dawo da kuɗin da aka aika wa wanda ba shi ba shi ne:", options: ["Rubutu a Facebook", "Kiran kowace lamba a intanet", "Tura SMS ɗin tabbatarwa zuwa 456", "Aika PIN ɗinku zuwa 100"], answer: 2, why: "Tura ainihin saƙon tabbatarwa na M-Pesa zuwa 456 yana fara neman dawo da kuɗi (ku duba shafin Safaricom don matakan yanzu)." },
      { objective: "O4", q: "Wane bayani kuke rubutawa idan kuna kai rahoton matsala?", options: ["Rana, lokaci, adadin kuɗi da lambar aiki", "PIN ɗinku", "Code ɗinku na lokaci ɗaya", "Kalmar sirrinku"], answer: 0, why: "Waɗannan bayanai suna taimaka wa kamfanin nemo biyan; kada ku taɓa raba PIN ko code ɗinku." },
      { objective: "O4", q: "A ina kuke samun lambar taimako ta hukuma ta kamfaninku?", options: ["Sharhi a ƙarƙashin rubutun Facebook", "Wanda ya kira ya ce shi ma'aikaci ne", "Tes daga lambar waya ta yau da kullum", "Kwalin SIM, shafin intanet na hukuma ko manhajar hukuma"], answer: 3, why: "Majiyoyin hukuma suna ba da lambobi na gaske; 'yan damfara suna yaɗa na bogi." },
      { objective: "O4", q: "Kamfanin bai warware ƙararku ba. Me kuma za ku iya amfani da shi?", options: ["Baƙon da ke karɓar kuɗin dawo da kuɗi", "Hanyar kai ƙarar masu amfani ta babban bankin ƙasa", "Babu komai kuma", "Sabon PIN ga ɗayan mutumin"], answer: 1, why: "Manyan bankunan ƙasa kamar CBN da Bank of Ghana suna da hanyoyin kai ƙara." },
      { objective: "O5", q: "Wanne ne ya dace a cikin tsarin tsaron kuɗin wayarku?", options: ["PIN ɗinku a rubuce gaba ɗaya", "Code ɗinku na lokaci ɗaya", "Hanyar hukuma ta kamfaninku don kai rahoton zamba", "PIN na maƙwabcinku"], answer: 2, why: "Tsarin yana jera dokoki da hanyoyin hukuma, ba lambobin sirri ba." },
      { objective: "O5", q: "Me yasa za ku ajiye tsarin tsaro a takarda a gida?", options: ["Don iyali su iya amfani da shi ko da wayar ta ɓace", "Domin waya ba za ta iya ajiye rubutu ba", "Don nuna wa wakilai", "Don saka shi a intanet"], answer: 0, why: "Idan an sace wayar, tsarin da ke takarda har yanzu yana faɗa muku abin da za ku yi." },
      { objective: "O5", q: "Da wa ya kamata ku tattauna tsarin tsaron?", options: ["Baƙi a kasuwa", "Wanda ya kira ya ce daga kamfanin yake", "Babu kowa", "'Yan iyali kamar iyaye tsofaffi da matasa"], answer: 3, why: "Ana yawan kai wa 'yan iyali hari; raba tsarin yana kare su ma." },
      { objective: "O5", q: "A ina kuke karanta ainihin kuɗin cajin wani aiki?", options: ["Saƙon WhatsApp da aka tura", "Teburin kuɗin caji na hukuma na kamfanin, manhaja ko allon sanarwa a shago", "Tsammanin aboki", "Sharhi a kafofin sada zumunta"], answer: 1, why: "Kuɗin caji ya bambanta tsakanin ƙasashe kuma yana canjawa; hanyoyin hukuma suna nuna kuɗin cajin yanzu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Dokokin PIN da waya", objective: "O1", notYet: "Babu dokokin PIN, ko tsarin yana da PIN ko code na gaske.", meets: "Yana cewa: PIN mai wuyar tsammani, makullin allo, kada a taɓa raba PIN ko code, a toshe nan take idan waya ta ɓace.", exceeds: "Yana kuma da PIN na SIM da abin da za a yi idan layi ya mutu farat ɗaya (wataƙila SIM swap)." },
      { name: "Duba suna", objective: "O2", notYet: "Babu matakin dubawa kafin PIN.", meets: "Yana cewa a duba suna, lamba da adadin kuɗi a allon tabbatarwa kuma a ajiye SMS ɗin tabbatarwa.", exceeds: "Yana ƙara ɗaukar lambar till ko ta shago daga shagon kansa kawai, da sake kira ta lambar da aka sani game da \"sababbin\" lambobin biya." },
      { name: "Alamun gargaɗin zamba", objective: "O3", notYet: "Alamun zamba ƙasa da huɗu, ko marasa sarari.", meets: "Yana jera zamba shida da aka saba tare da alamar gargaɗi ga kowanne.", exceeds: "Yana ƙara misali na gaske da mai koyo ko iyalinsa suka gani da yadda suka gane shi." },
      { name: "Hanyoyin hukuma da awa ta farko", objective: "O4", notYet: "Babu lambobin taimako, ko an kwafo su daga majiyar da ba ta hukuma ba.", meets: "Yana ba da hanyoyin hukuma na kamfanin na taimako, dawo da kuɗi da kai rahoton zamba (daga shafin intanet, manhaja ko kwalin SIM) da matakan awa ta farko.", exceeds: "Yana kuma ambaton hanyar kai ƙara ta babban bankin ƙasa da matakin 'yan sanda, kuma yana faɗin daga inda aka kwafo kowace hanya." },
      { name: "Dubawa kowane wata da rabawa", objective: "O5", notYet: "Babu dubawa akai-akai, kuma ba a raba tsarin ba.", meets: "Yana sa dubawar bayanin asusu kowane wata kuma an karanta tsarin tare da mutum ɗaya a iyali.", exceeds: "Yana da dokar iyali ta sake kira da dubawa ta farko da aka riga aka yi kuma aka rubuta ranarta." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce, bayan kwana 30, suna duba suna kafin kowane PIN kuma suna karanta bayanin asusunsu kowane wata",
      "Masu koyo da suka ce sun gane kuma sun ƙi kira ko saƙon zamba cikin kwanaki 30",
      "Raguwar asarar kuɗin waya da membobin ƙungiyar ajiya, ƙungiyar 'yan kasuwa ko ƙungiyar al'umma abokiyar hulɗa suka ruwaito"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai asusun kuɗin waya (waya mai sauƙi ko wayar zamani)",
      "Teburin kuɗin caji na hukuma da hanyoyin taimako na kamfanin (shafin intanet, manhaja, allon sanarwa a shago ko kwalin SIM)",
      "Takarda da alƙalami don tsarin tsaro",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ya dace da ƙungiyoyin 'yan kasuwa, ƙungiyoyin ajiya (adashe), coci-coci, masallatai, ƙungiyoyin matasa da na mata: ku yi gwajin farko tare, sannan babi ɗaya a kowane taro.",
      "Kada ku taɓa neman masu koyo su rubuta ko su faɗi PIN ko code na gaske a atisaye. Ku nuna menu a wayar nuni ko ta zana allunan.",
      "Kafin zaman, ku duba matakan hukuma na dawo da kuɗi da kai rahoton zamba na kamfanonin da ƙungiyarku ke amfani da su a ƙasarku, daga shafukan intanet ko shagunan kamfanonin da kansu, kuma ku tabbatar cewa na yanzu ne.",
      "Ku gayyaci membobi su raba saƙonnin zamba da suka karɓa (an ɓoye lambobin sirri) ku tsara su bisa alamar gargaɗi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric; kada ku taɓa karɓar tsare-tsaren idan masu koyo sun saka bayanan kansu."
    ]
  }
};
