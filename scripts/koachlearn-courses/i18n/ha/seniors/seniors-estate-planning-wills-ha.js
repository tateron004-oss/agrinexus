"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-estate-planning-wills.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-estate-planning-wills-ha",
  lang: "ha",
  translationOf: "seniors-estate-planning-wills",
  category: "Seniors and Technology",
  name: "Shirin Gado da Wasiyya",
  skills: "Sanin abin da wasiyya take yi, Duba magadan asusunku, Fahimtar wakilci na shari'a da takardun umarnin kiwon lafiya, Jera abin da kuka mallaka da bashin da ke kanku, Shiryawa don ganin lauya ko taimakon shari'a, Tsarawa da ajiye takardunku",
  outcome: "shirya da tsara shirin gadonku: jerin abin da kuka mallaka da bashin da ke kanku, duba magadan asusunku, mutanen da kuke son naɗawa, tambayoyinku ga lauya ko taimakon shari'a, da takarda mai sarari da ke faɗa wa iyalinku inda muhimman takardunku suke.",
  about: [
    "Wannan kwas ɗin na tsofaffi ne da ke son su sauƙaƙa wa iyalinsu abubuwa, da kuma 'ya'ya da jikoki manya da ke taimaka musu. Ba sai kuna da arziki ba: duk wanda ke da asusun banki, gida, mota, fansho, dabbar gida ko jikoki ƙanana da yake kula da su zai iya amfana da shiri.",
    "Za ku koyi abin da wasiyya, magada (beneficiaries), wakilci na shari'a (power of attorney) da takardar umarnin kiwon lafiya suke yi, sannan ku yi jerin abubuwa da zaɓuɓɓukan da lauya zai tambaye ku, ku kuma tsara komai don mutanen da suka dace su same shi.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Dokokin wasiyya da waɗannan takardu sun bambanta a kowace jiha ta Amurka da kowace ƙasa. Wannan kwas ɗin yana taimaka muku ku shirya; don takardun su zama na doka, ku ga lauya ko taimakon shari'a kyauta a inda kuke zaune."
  ],
  finalTask: "Ku haɗa fayil ɗin shirin gadonku: (1) jerin abin da kuka mallaka da bashin da ke kanku; (2) duba magada ga kowane asusu ko inshora da ke da shi; (3) mutanen da za ku naɗa a matsayin mai aiwatar da wasiyya (executor), wakilin kuɗi da wakilin kiwon lafiya, da madadi ga kowanne; (4) aƙalla tambayoyi biyar ga lauya ko taimakon shari'a; (5) takarda shafi ɗaya mai taken \"inda takarduna suke\" don iyalinku. Sannan ku nemo wuri ɗaya kusa da ku da ke ba da taimakon shari'a.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffi, da 'yan iyalin da ke taimaka musu, waɗanda ba su yi shirin gado ba ko suna da wanda ya tsufa. Wasu suna rainon jikoki; da yawa suna da inshorar rai, asusun ritaya ko gida.",
    startingPoint: "Sun san akwai wasiyya, amma da yawa ba su da wasiyya, ba su taɓa duba takardun magada ba, kuma ba su san abin da wakilci na shari'a ko takardar umarnin kiwon lafiya take yi ba. Takardu sau da yawa a warwatse suke a cikin gida.",
    gap: "Idan babu shiri, doka ce ke yanke wanda zai gaji, tsofaffin takardun magada na iya kai kuɗi ga wanda bai dace ba, kuma iyali na iya zuwa kotu idan mutum ba zai iya yanke shawara da kansa ba. Shirya jerin abubuwa, mutane da tambayoyi, da tsara takardu, yana rage wa iyali damuwa da kuɗi, kuma yana sa ganawa da lauya ta fi sauri da araha.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: takarda da fayil sun isa; waya ko kwamfuta na taimakawa wajen neman taimakon shari'a",
      "Lokaci: kusan minti 5 a kowane darasi a hankali, da lokacin tattara takardu",
      "Dokoki sun bambanta a kowace jiha da ƙasa; kwas ɗin yana shiryawa, lauya ko taimakon shari'a ne ke mayar da takardu na doka",
      "Sirri: lambobi huɗu na ƙarshe kaɗai na lambobin asusu, babu kalmomin sirri (password), kuma babu bayanan sirri a kayan AI"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku kalmomin farko na shirin gado", action: "bayyana abin da wasiyya take yi, abin da mai aiwatar da wasiyya yake yi, da abin da zai iya faruwa idan babu wasiyya", standard: "da kalmominku, kuna samun aƙalla tambayoyi 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku inshorar rai, asusun ritaya da asusun banki", action: "duba wanda aka sa a matsayin magaji da madadinsa a kowanne", standard: "kuna yi wa kowace takarda da ta tsufa alama" },
    { id: "O3", condition: "Idan aka ba ku mutanen da ke rayuwarku", action: "zaɓar mai aiwatar da wasiyya, wakilin kuɗi da wakilin kiwon lafiya, da madadi ga kowanne", standard: "kuna zaɓar mutanen da za a amince da su, da za a iya samu, kuma za su bi burinku" },
    { id: "O4", condition: "Ta amfani da takarda ko fayil na sirri", action: "jera abin da kuka mallaka da bashin da ke kanku", standard: "kuna nuna lambobi huɗu na ƙarshe kaɗai na kowace lamba, babu kalmar sirri" },
    { id: "O5", condition: "Kafin ku gana da lauya ko taimakon shari'a", action: "nemo wurin samun taimakon shari'a kusa da ku da rubuta aƙalla tambayoyi biyar masu sarari", standard: "har da nawa zai ci da abin da ya ƙunsa" },
    { id: "O6", condition: "Idan aka ba ku muhimman takardunku", action: "tsara su a fayil ɗaya da rubuta takardar \"inda takarduna suke\" don iyalinku", standard: "kuma an ba mutanen da kuka naɗa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sanin takardun",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne shirin gado, da abin da wasiyya take yi",
          minutes: 5,
          goal: "Bayyana abin da wasiyya take yi da abin da zai iya faruwa idan babu ita.",
          text: [
            "Shirin gado yana nufin yanke shawara tun kafin lokaci game da abin da zai faru da kuɗinku da kayanku idan kun rasu, da wanda zai yanke muku shawara idan kun yi rashin lafiya sosai har ba za ku iya yanke shawara ba. Gadonku (estate) shi ne duk abin da kuka mallaka, a cire bashin da ke kanku.",
            "Wasiyya takarda ce ta doka da ke faɗin wanda zai sami kayanku, kuma tana naɗa mai aiwatar da wasiyya (executor): mutumin da zai aiwatar da burinku, ya biya bashin ƙarshe, ya kuma raba abin da ya rage. A wurare da yawa wasiyya tana iya naɗa mai riƙo (guardian) ga yara 'yan ƙasa da shekara 18 da kuke kula da su, kamar jikokin da kuke rainonsu.",
            "Idan kun rasu ba tare da wasiyya ba, dokar wurin da kuke zaune ce ke yanke wanda zai gaji, kuma kotu ce ke zaɓar wanda zai kula da gadonku. Sakamakon na iya zama ba abin da kuke so ba.",
            "Kowace jiha da ƙasa tana da nata dokoki don wasiyya ta yi aiki, kamar yadda ake sa mata hannu da shaidu. Wasiyyar da ba ta bi waɗannan dokoki ba ƙila ba za a karɓe ta ba. Shi ya sa wannan kwas ɗin yake taimaka muku ku shirya, lauya ko taimakon shari'a kuma ke taimaka muku ku mayar da ita ta doka."
          ],
          words: [["Gado (estate)", "duk abin da kuka mallaka, kamar kuɗi, gida, mota da kaya, a cire bashin da ke kanku."], ["Wasiyya (will)", "takardar doka da ke faɗin wanda zai sami kayanku bayan kun rasu da wanda zai aiwatar da burinku."], ["Mai aiwatar da wasiyya (executor)", "mutumin da aka naɗa a wasiyya don aiwatar da burinku da kammala sha'anin gadonku."], ["Mai riƙo (guardian)", "mutumin da aka naɗa don kula da yaro ɗan ƙasa da shekara 18."]],
          slides: [
            { title: "Shirin gado shi ne yanke shawara tun da wuri", bullets: ["Abin da zai faru da kayanku idan kun rasu", "Wanda zai yanke muku shawara idan kun yi rashin lafiya sosai"] },
            { title: "Wasiyya", bullets: ["Tana faɗin wanda zai sami kayanku", "Tana naɗa mai aiwatar da wasiyya (executor)", "Tana iya naɗa mai riƙo ga yaran da kuke kula da su"] },
            { title: "Idan babu wasiyya", bullets: ["Dokar wurin da kuke zaune ce ke yanke hukunci", "Kotu ce ke zaɓar wanda zai kula da shi", "Ƙila ba abin da kuke so ba ne"] },
            { title: "Dokoki sun bambanta da wuri", bullets: ["Kowace jiha da ƙasa tana da nata dokoki", "Ku shirya a nan; ku mayar da ita ta doka da lauya ko taimakon shari'a"] }
          ],
          sources: [{ name: "LawHelp.org: nemo taimakon shari'a kyauta da bayanai a jiharku", url: "https://www.lawhelp.org/" }],
          tryIt: "Ku rubuta abubuwa uku da suka fi muhimmanci a gare ku ku bari, kamar gida, ajiyar kuɗi, Littafi Mai Tsarki ko Alƙur'ani na iyali, mota ko kula da dabbar gida, da wanda kuke son ya sami kowanne. Wannan jeri ne na sirri a gare ku, ba takardar doka ba.",
          youCanNow: "bayyana mene ne wasiyya da mai aiwatar da wasiyya, da dalilin da yasa dole wasiyya ta bi dokokin wurin da kuke zaune.",
          quickCheck: [
            { objective: "O1", q: "Wane ne mai aiwatar da wasiyya (executor)?", options: ["Mutumin da ke aiwatar da burinku da ke cikin wasiyyarku", "Alƙali", "Asusun banki", "Likitanku"], answer: 0, why: "Mai aiwatar da wasiyya yana aiwatar da burinku, yana biyan bashin ƙarshe, kuma yana raba abin da ya rage." },
            { objective: "O1", q: "Abokinku ya ce, \"Ba na buƙatar wasiyya; iyalina za su warware shi.\" Me zai iya faruwa idan babu ita?", options: ["Babu abin da zai canja", "Iyalin za su yi ƙuri'a", "Dokar wurin da yake zaune ce za ta yanke wanda zai gaji, wanda ƙila bai dace da burinsa ba", "Banki zai riƙe komai"], answer: 2, why: "Idan babu wasiyya, doka ce ke yanke wanda zai gaji, kuma kotu ce ke zaɓar wanda zai kula da gadon." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Duba magadan asusunku",
          minutes: 5,
          goal: "Nemo kowane asusu ko inshora da ke da magaji ku duba wanda aka sa.",
          text: [
            "Wasu kuɗaɗe ba sa bi ta wasiyyarku kwata-kwata. Inshorar rai, yawancin asusun ritaya da fansho, da wasu asusun banki suna ba ku damar naɗa magaji (beneficiary): mutumin da zai sami kuɗin idan kun rasu. Waɗannan takardu yawanci su ne ke yanke wanda zai sami kuɗin, ko da wasiyyarku ta faɗi wani abu daban.",
            "Shi ya sa tsofaffin takardu ke kawo matsala. Takardar inshorar rai na iya har yanzu tana ɗauke da sunan tsohuwar mata ko tsohon miji, ko iyayen da suka rasu, ko ɗa tun kafin a haifi jikoki.",
            "Ku yi jerin kowane asusu da inshorar da kuke da su. Ga kowanne, ku tambayi kamfanin ko ku duba asusunku a intanet don ganin wanda aka sa a matsayin magaji da madadinsa (ana yawan kiransa contingent beneficiary). Ku gyara duk wanda ba daidai ba ta amfani da takardar kamfanin da kansa.",
            "Ku sake duba magadanku bayan manyan abubuwan rayuwa: aure, saki, mutuwa, haihuwa ko sabon jika. Ku tambayi lauya kafin ku naɗa ƙaramin yaro ko mutumin da ke karɓar tallafin nakasa, domin ana iya samun dokoki na musamman."
          ],
          steps: ["Ku jera kowace inshorar rai, asusun ritaya, fansho da asusun banki.", "Ga kowanne, ku gano wanda aka sa a matsayin magaji da madadi.", "Ku yi wa waɗanda suka tsufa alama.", "Ku gyara su da takardar kamfanin da kansa.", "Ku sake duba bayan aure, saki, mutuwa ko haihuwa."],
          words: [["Magaji (beneficiary)", "mutumin da kuka naɗa don ya karɓi kuɗi daga asusu ko inshora idan kun rasu."], ["Madadin magaji (contingent beneficiary)", "wanda zai karɓi kuɗin idan magaji na farko ya rasu."], ["Babban abin rayuwa (life event)", "babban canji kamar aure, saki, mutuwa ko haihuwa."]],
          slides: [
            { title: "Wasu kuɗaɗe ba sa bi ta wasiyya", bullets: ["Inshorar rai, yawancin asusun ritaya", "Wasu asusun banki", "Takardar magaji ce yawanci ke yanke hukunci"] },
            { title: "Tsofaffin takardu suna kawo matsala", bullets: ["Har yanzu da sunan tsohuwar mata ko tsohon miji", "Mutumin da ya rasu", "Ba a sa sababbin jikoki ba"] },
            { title: "Ku duba kowanne", bullets: ["Ku jera asusunku da inshorarku", "Ku nemo magaji da madadinsa", "Ku gyara da takardar kamfanin"] },
            { title: "Ku sake duba bayan abubuwan rayuwa", bullets: ["Aure, saki, mutuwa, haihuwa", "Ku tambayi lauya game da ƙananan yara ko tallafin nakasa"] }
          ],
          sources: [{ name: "CFPB: Kula da kuɗin wani (jagorori ga iyalai)", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }],
          tryIt: "Ku jera kowane asusu ko inshorar da kuke da ita da za ta iya samun magaji. Ku zaɓi ɗaya, ku duba wanda aka sa (a intanet, a takardunku ko ta kiran kamfanin), ku rubuta ko har yanzu daidai ne.",
          youCanNow: "nemo asusunku da ke da magada, duba wanda aka sa, da sanin lokacin da za ku gyara su.",
          quickCheck: [
            { objective: "O2", q: "Wane ne magaji (beneficiary)?", options: ["Mutumin da ke rubuta wasiyyarku", "Mutumin da aka naɗa don ya sami kuɗin asusu ko inshora idan kun rasu", "Lauyanku", "Manajan bankinku"], answer: 1, why: "Magaji shi ne mutumin da aka sa a asusu ko inshora don ya karɓi wannan kuɗin." },
            { objective: "O2", q: "Takardar fanshonku har yanzu tana ɗauke da sunan marigayi mijinku a matsayin magaji. Me za ku yi?", options: ["Ku bar ta; wasiyya ta rufe shi", "Ku goge sunansa a kwafinku", "Ku faɗa wa aboki", "Ku gyara ta da takardar kamfanin da kansa"], answer: 3, why: "Takardun magada yawanci su ne ke yanke wanda zai sami kuɗin, don haka ku gyara su da takardar kamfanin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wakilci na shari'a da takardun umarnin kiwon lafiya",
          minutes: 6,
          goal: "Bayyana wanda zai yanke muku shawara game da kuɗi da kiwon lafiya idan ba za ku iya ba.",
          text: [
            "Wasiyya tana aiki ne bayan kun rasu kawai. Wasu takardu suna kare ku yayin da kuke raye, idan rashin lafiya ko haɗari ya hana ku yanke shawara da kanku.",
            "Wakilci na shari'a na kuɗi (financial power of attorney) yana naɗa wakili (agent): mutumin da kuka amince da shi don ya kula da kuɗi da dukiya a madadinku, kamar biyan kuɗaɗe ko magana da banki. Hukumar Kare Masu Amfani da Hidimomin Kuɗi ta Amurka (CFPB) tana da jagorori kyauta ga mutanen da aka naɗa a matsayin wakilai. Idan babu shi, iyalinku na iya zuwa kotu don a naɗa mai riƙo ko mai kula da dukiya (conservator), wanda ke ɗaukar lokaci da kuɗi.",
            "Takardar umarnin kiwon lafiya (health care directive), wadda ake kira advance directive, tana magana kan shawarwarin magani. Wakilci na shari'a na kiwon lafiya (ko health care proxy) yana naɗa mutumin da kuka amince da shi don ya yanke shawarwarin lafiya idan ba za ku iya ba. Living will (wasiyyar magani) tana rubuta irin maganin da za ku so ko ba za ku so ba idan kuna mutuwa ko kun suma har abada, kamar injin numfashi ko ciyarwa ta bututu.",
            "Ku zaɓi mutanen da za a amince da su, da ke zaune kusa ko za a iya samu, kuma za su bi burinku, ba nasu ba. Ku naɗa madadi ga kowanne. Sannan ku yi magana da su, da likitanku, game da abin da kuke so. Takardun da dokokin sun bambanta a kowace jiha da ƙasa, don haka ku samo su daga lauya, taimakon shari'a, ofishin likitanku ko asibiti, ku tambayi yadda ake sa musu hannu daidai."
          ],
          words: [["Wakilci na shari'a (power of attorney)", "takardar doka da ke bar mutumin da kuka zaɓa ya yi aiki a madadinku."], ["Wakili (agent)", "mutumin da kuka naɗa a takardar wakilci na shari'a."], ["Advance directive", "takardun da ke faɗa wa likitoci da iyali burinku game da kiwon lafiya da wanda zai yanke muku shawara."], ["Living will (wasiyyar magani)", "takardar da ke faɗin maganin da kuke so ko ba ku so kusa da ƙarshen rayuwa."], ["Health care proxy", "mutumin da kuka naɗa don ya yanke shawarwarin lafiya idan ba za ku iya ba."]],
          slides: [
            { title: "Shirye-shirye don lokacin da kuke raye", bullets: ["Wasiyya tana aiki ne bayan mutuwa kawai", "Waɗannan suna rufe rashin lafiya ko haɗari"] },
            { title: "Wakilci na shari'a na kuɗi", bullets: ["Yana naɗa wakili don kuɗi da dukiya", "Yana biyan kuɗaɗe, yana magana da banki", "Idan babu shi, iyali na iya buƙatar kotu"] },
            { title: "Takardun umarnin kiwon lafiya", bullets: ["Health care proxy: wanda zai yanke shawara", "Living will: irin maganin da kuke so", "Ku yi magana da likitanku game da su"] },
            { title: "Ku zaɓa da kyau", bullets: ["Wanda za a amince da shi, kuma za a iya samu", "Zai bi burinku", "Ku naɗa madadi; takardu sun bambanta da jiha"] }
          ],
          sources: [
            { name: "MedlinePlus: Takardun umarnin kiwon lafiya (advance directives)", url: "https://medlineplus.gov/advancedirectives.html" },
            { name: "CFPB: Kula da kuɗin wani", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }
          ],
          tryIt: "Ku rubuta sunan mutumin da za ku zaɓa a matsayin wakilin kuɗinku da wakilin kiwon lafiyarku (health care proxy), da madadi ga kowanne. Kusa da kowane suna, ku rubuta dalili ɗaya da yasa kuka amince da shi.",
          youCanNow: "bayyana wakilci na shari'a na kuɗi, health care proxy da living will, da zaɓar wanda kuka amince da shi ga kowanne.",
          quickCheck: [
            { objective: "O3", q: "Me wakilci na shari'a na kuɗi yake yi?", options: ["Yana naɗa wani don ya kula da kuɗinku da dukiyarku idan ba za ku iya ba", "Yana faɗin wanda zai sami gidanku idan kun rasu", "Yana jera magungunanku", "Yana rufe asusun bankinku"], answer: 0, why: "Wakilci na shari'a na kuɗi yana naɗa wakili don ya kula da kuɗi a madadinku yayin da kuke raye." },
            { objective: "O3", q: "Kuna zaɓar wakilin kiwon lafiya. Wane ne zaɓi mafi kyau?", options: ["Ɗan uwan da ya fi yawan jayayya", "Wanda ba ku gani ba tsawon shekaru", "Mutumin da kuka amince da shi, za ku iya samunsa, kuma zai bi burinku, da madadi", "Duk wanda ya fara tambaya"], answer: 2, why: "Ku zaɓi wanda za a amince da shi, za a iya samu, kuma yana son bin burinku, ku naɗa madadi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sanin takardun",
        questions: [
          { objective: "O1", q: "Me mai aiwatar da wasiyya yake yi?", options: ["Yana aiwatar da burinku da ke cikin wasiyya kuma yana kammala sha'anin gadonku", "Yana rubuta bayanan lafiyarku", "Yana sayar muku da inshora", "Yana zaɓar shirin Medicare ɗinku"], answer: 0, why: "Ana naɗa mai aiwatar da wasiyya a cikin wasiyya don ya aiwatar da burinku." },
          { objective: "O1", q: "Me zai iya faruwa idan kun rasu ba tare da wasiyya ba?", options: ["Babu abin da zai faru da kayanku", "Bankinku zai riƙe komai", "Dokar wurin da kuke zaune ce za ta yanke wanda zai gaji", "Maƙwabcinku zai zaɓa"], answer: 2, why: "Idan babu wasiyya, dokar jiha ko ta ƙasa da kotu ne ke yanke hukunci." },
          { objective: "O2", q: "Wasiyyarku ta bar komai ga 'yarku, amma takardar inshorar ranku har yanzu tana ɗauke da sunan tsohon mijinku. Wa yawanci zai sami inshorar?", options: ["'Yarku", "Kotu", "Wakilin inshora", "Mutumin da aka sa a takardar magaji"], answer: 3, why: "Takardun magada yawanci su ne ke yanke wanda zai sami wannan kuɗin, ko da wasiyya ta faɗi wani abu daban." },
          { objective: "O3", q: "Wace takarda ce ke naɗa wani don ya yanke shawarwarin magani idan ba za ku iya ba?", options: ["Bayanin asusun banki", "Health care proxy ko wakilci na shari'a na kiwon lafiya", "Takardar magaji", "Jerin kayan cefane"], answer: 1, why: "Health care proxy shi ne mutumin da kuka naɗa don shawarwarin lafiya." },
          { objective: "O1", q: "Me yasa kuke buƙatar lauya ko taimakon shari'a don kammala waɗannan takardu?", options: ["Domin ba a yarda kayan AI su karanta su ba", "Domin dole a buga su da na'ura", "Domin dokokin mayar da su na doka sun bambanta a kowace jiha da ƙasa", "Domin lauyoyi kaɗai ke iya mallakar gida"], answer: 2, why: "Takardar da ba ta bi dokokin wurin ba ƙila ba za a karɓe ta ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Shirya da tsarawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jera abin da kuka mallaka da bashin da ke kanku",
          minutes: 5,
          goal: "Yi jeri mai sauƙi na dukiyarku da bashinku da lauya da iyalinku za su iya amfani da shi.",
          text: [
            "Kafin ku gana da lauya, ku yi jerin abin da kuka mallaka da bashin da ke kanku. Wannan jeri yana taimaka wa lauya ya ba da shawara mai kyau, kuma daga baya yana taimaka wa mai aiwatar da wasiyyarku ya nemo komai.",
            "Abin da kuka mallaka (dukiya): asusun banki da na ƙungiyar ajiya (credit union), asusun ritaya da fansho, inshorar rai, gidanku ko filinku, motoci, kaya masu daraja, da abubuwa masu darajar iyali kamar kayan ado ko hotuna. Ku kuma jera asusun intanet kamar imel da ajiyar hotuna, da duk dabbar gida da ke buƙatar sabon gida.",
            "Bashin da ke kanku: bashin gida (mortgage), bashin mota, katunan bashi (credit card), kuɗin asibiti da duk wani bashi na mutum.",
            "Ga kowane abu, ku rubuta sunan kamfanin da irin asusun, amma ba cikakkun lambobin asusu ko kalmomin sirri ba. Ku rubuta \"ya ƙare da 1234\" a maimakon haka. Ku ajiye wannan jeri a wuri mai aminci. Kada ku rubuta shi a mataimakin AI ko ku tura shi ta imel ga wanda ba a zaɓa don ya taimake ku ba."
          ],
          steps: ["Ku rubuta take: Abin da na mallaka. Ku jera asusu, inshora, dukiya, motoci da kaya masu daraja.", "Ku ƙara asusun intanet da dabbobin gida.", "Ku rubuta take: Bashin da ke kaina. Ku jera kowane bashi da wanda ke bin ku.", "Ku yi amfani da lambobi huɗu na ƙarshe kaɗai na kowace lamba, kuma kada ku taɓa rubuta kalmar sirri a wannan jeri.", "Ku ajiye shi a wuri mai aminci."],
          words: [["Dukiya (asset)", "abin da kuka mallaka mai daraja, kamar kuɗi, gida ko mota."], ["Bashi (debt)", "kuɗin da kuke bi, kamar bashin gida ko katin bashi."], ["Ƙididdigar kaya (inventory)", "cikakken jerin abin da kuke da shi."]],
          slides: [
            { title: "Me yasa za a yi jerin", bullets: ["Yana taimaka wa lauyanku ya ba ku shawara", "Yana taimaka wa mai aiwatar da wasiyya ya nemo komai"] },
            { title: "Abin da kuka mallaka", bullets: ["Asusu, fansho, inshorar rai", "Gida, fili, motoci, kaya masu daraja", "Asusun intanet da dabbobin gida"] },
            { title: "Bashin da ke kanku", bullets: ["Bashin gida, bashin mota, katunan bashi", "Kuɗin asibiti, bashin mutum"] },
            { title: "Ku riƙe shi a sirri", bullets: ["Lambobi huɗu na ƙarshe kaɗai", "Babu kalmar sirri a jerin", "Kada ku taɓa liƙa shi a kayan AI"] }
          ],
          tryIt: "Ku fara jerinku yanzu a takarda: ku rubuta aƙalla abubuwa biyar da kuka mallaka da kowane bashin da ke kanku, da sunan kamfanin da lambobi huɗu na ƙarshe kaɗai na kowace lamba.",
          youCanNow: "yin jeri na sirri, tsararre na abin da kuka mallaka da bashin da ke kanku don lauyanku da iyalinku.",
          quickCheck: [
            { objective: "O4", q: "Mene ne dukiyarku (assets)?", options: ["Bashinku", "Likitocinku", "Tambayoyinku ga lauya", "Abin da kuka mallaka, kamar asusu, dukiya da kaya masu daraja"], answer: 3, why: "Dukiya ita ce abin da kuka mallaka; bashi kuma shi ne abin da kuke bi." },
            { objective: "O4", q: "Kuna rubuta asusun ajiyarku a jerinku. Yaya za ku rubuta lambar?", options: ["Cikakkiyar lambar da kalmar sirri", "\"Ya ƙare da 1234\"", "Cikakkiyar lambar kawai", "Kada ku sa asusun"], answer: 1, why: "Ku rubuta lambobi huɗu na ƙarshe kaɗai, kuma kada ku taɓa rubuta kalmar sirri a jerin." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Shiryawa don ganin lauya ko taimakon shari'a",
          minutes: 5,
          goal: "Nemo taimakon shari'a kusa da ku ku shirya zaɓuɓɓuka da tambayoyin da za ku kawo.",
          text: [
            "Taimakon shirin gado ba sai ya yi tsada ba. Taimako kyauta ko mai araha na iya fitowa daga ƙungiyoyin taimakon shari'a, hidimomin shari'a na tsofaffi, asibitocin shari'a na makarantun lauyoyi, da shirye-shiryen lauyoyi masu sa kai. LawHelp.org yana bar ku zaɓi jiharku don nemo taimakon shari'a kyauta daga ƙungiyoyin taimakon shari'a marasa riba. Eldercare Locator (1-800-677-1116) yana haɗa tsofaffi da iyalai da hidimomin yankinsu; ku tambaye su game da taimakon shari'a ga tsofaffi kusa da ku. Ƙungiyar lauyoyi ta jiharku ko yankinku (bar association) ma na iya samun hidimar haɗa ku da lauya.",
            "Akwai takardun wasiyya da kayan rubuta wasiyya a intanet, amma takardar da ba ta dace da dokokin jiharku ba, ko da halin iyalinku, na iya kasa aiki. Lauya ko taimakon shari'a zai iya faɗa muku ko takarda mai sauƙi ta isa gare ku ko a'a.",
            "Ku kawo abin da kuka shirya: jerin abin da kuka mallaka da bashin da ke kanku, duba magadanku, da mutanen da kuka zaɓa a matsayin mai aiwatar da wasiyya, mai riƙo, wakilin kuɗi da health care proxy, da madadansu. Ku kuma kawo tambayoyi.",
            "Tambayoyi masu kyau: Ina buƙatar wasiyya, amana (trust), ko duka biyun? Yaya za a sa wa wasiyyata hannu da shaidu a nan? Me zai faru da gidana? Me zan yi game da jikan da nake kula da shi? Nawa wannan zai ci, kuma me ya ƙunsa? Mataimakin AI zai iya taimaka muku rubuta tambayoyinku da kalmomi masu sarari, amma ku cire sunaye da lambobi, ku bar lauya ya ba da amsoshin shari'a."
          ],
          steps: ["Ku je LawHelp.org ku zaɓi jiharku, ko ku kira Eldercare Locator.", "Ku tambayi game da shirin gado kyauta ko mai araha ga tsofaffi.", "Ku tattara jerinku da mutanen da kuka zaɓa.", "Ku rubuta aƙalla tambayoyi biyar.", "Ku tambayi nawa zai ci da abin da ya ƙunsa kafin ku fara."],
          words: [["Taimakon shari'a (legal aid)", "taimakon shari'a kyauta daga ƙungiyoyi marasa riba ga mutanen da suka cancanta."], ["Hidimar haɗa ku da lauya (lawyer referral service)", "hidima, sau da yawa daga ƙungiyar lauyoyi, da ke haɗa ku da lauya."], ["Amana (trust)", "tsarin doka inda wani mutum ke kula da dukiya don wasu; lauya zai iya faɗa ko kuna buƙatar sa."]],
          slides: [
            { title: "Inda za a nemo taimako", bullets: ["LawHelp.org: ku zaɓi jiharku", "Eldercare Locator: 1-800-677-1116", "Hidimar haɗa ku da lauya ta ƙungiyar lauyoyi"] },
            { title: "Ku yi hankali da kayan rubuta wasiyya", bullets: ["Dole takarda ta dace da dokokin jiharku", "Ku tambayi lauya ko takarda mai sauƙi ta isa"] },
            { title: "Ku kawo shirinku", bullets: ["Abin da kuka mallaka da bashin da ke kanku", "Duba magada", "Mutanen da kuka zaɓa, da madadansu"] },
            { title: "Ku kawo tambayoyi", bullets: ["Wasiyya, amana ko duka biyun?", "Yaya ake sa hannu da shaidu a nan?", "Nawa zai ci?"] }
          ],
          sources: [
            { name: "LawHelp.org: Nemo taimakon shari'a kyauta", url: "https://www.lawhelp.org/" },
            { name: "Eldercare Locator (Hukumar Administration for Community Living)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Ku je LawHelp.org, ku zaɓi jiharku ku nemo ƙungiyar taimakon shari'a ɗaya ko hidimar shari'a ta tsofaffi kusa da ku. Ku rubuta sunanta da lambar wayarta, ku kuma rubuta tambayoyi biyar da za ku yi mata.",
          youCanNow: "nemo taimakon shari'a kyauta ko mai araha kusa da ku da zuwa ganawar a shirye.",
          quickCheck: [
            { objective: "O5", q: "Mene ne LawHelp.org?", options: ["Shafin intanet don nemo taimakon shari'a kyauta daga ƙungiyoyin taimakon shari'a marasa riba a jiharku", "Kayan rubuta wasiyya a intanet", "Banki", "Ofishin tallafin gwamnati"], answer: 0, why: "LawHelp.org yana bar ku zaɓi jiharku don nemo taimakon shari'a kyauta." },
            { objective: "O5", q: "Kuna son AI ya taimaka muku rubuta tambayoyinku ga lauya. Me za ku cire?", options: ["Kalmar \"wasiyya\"", "Tambayoyinku", "Sunaye da lambobin asusu", "Kalmar \"kuɗi\""], answer: 2, why: "AI zai iya taimakawa da kalmomi masu sarari, amma ku cire sunaye da lambobi ku bar lauya ya amsa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tsarawa da ajiye muhimman takardunku",
          minutes: 5,
          goal: "Sa takardunku a wuri ɗaya mai aminci ku faɗa wa mutanen da suka dace inda suke.",
          text: [
            "Shiri yana taimakawa ne kawai idan mutane za su iya samunsa. Iyalai da yawa suna neman wasiyya, takardar inshora ko takardar mallakar gida tsawon kwanaki. Kuna iya hana su wannan wahala.",
            "Ku yi fayil ko littafin ajiye takardu ɗaya. Ku sa a ciki, ko ku rubuta inda za a same su: wasiyyarku da sauran takardun doka, wakilci na shari'a da takardar umarnin kiwon lafiya, jerin abin da kuka mallaka da bashin da ke kanku, takardun inshora, takardun mallakar gida da na mota, katin Medicare ko wasu katunan lafiya (kwafi), da jerin lambobin sadarwa: lauyanku, likitanku, bankinku da mutanen da kuka naɗa.",
            "Ku tambayi lauyanku inda ya kamata a ajiye ainihin wasiyyarku da aka sa wa hannu, domin dokoki da zaɓuɓɓuka sun bambanta. Ku ba wakilin kiwon lafiyarku da likitanku kwafin takardar umarnin kiwon lafiyarku, don ta kasance a wurin idan an sami gaggawa. Ku ajiye fayil ɗin a wuri mai aminci a gida da mai aiwatar da wasiyyarku ya sani.",
            "Ku rubuta takarda shafi ɗaya mai taken \"inda takarduna suke\" ku ba mutanen da kuka naɗa. Ku sake duba komai bayan 'yan shekaru da kuma bayan manyan abubuwan rayuwa. Idan kun canja wani abu, ku faɗa wa iyalinku, ku cire tsofaffin kwafi don kada wani ya yi amfani da wanda bai dace ba."
          ],
          steps: ["Ku yi fayil ko littafin ajiye takardu ɗaya don muhimman takardu.", "Ku ƙara kowace takarda, ko takardar da ke faɗin inda take.", "Ku tambayi lauyanku inda za a ajiye ainihin wasiyya.", "Ku ba wakilin kiwon lafiyarku da likitanku takardar umarnin kiwon lafiyarku.", "Ku rubuta takardar \"inda takarduna suke\" ku raba ta da mutanen da kuka naɗa.", "Ku sake duba bayan manyan abubuwan rayuwa, ku cire tsofaffin kwafi."],
          words: [["Ainihi (original)", "takardar da aka sa wa hannu da kanta, ba kwafi ba."], ["Takardar mallakar gida (deed)", "takardar doka da ke nuna wanda ya mallaki gida ko fili."], ["Takardar mallakar mota (title)", "takardar da ke nuna wanda ya mallaki mota."]],
          slides: [
            { title: "Dole mutane su iya samunsa", bullets: ["Iyalai na iya neman takardu tsawon kwanaki", "Fayil ɗaya yana hana su wahala"] },
            { title: "Abin da ke shiga fayil ɗin", bullets: ["Wasiyya, wakilci na shari'a, umarnin lafiya", "Jerin abin da kuka mallaka da bashinku", "Inshora, takardun mallaka, lambobin sadarwa"] },
            { title: "Inda za a ajiye abubuwa", bullets: ["Ku tambayi lauyanku game da ainihin wasiyya", "Umarnin lafiya: ga wakilinku da likitanku", "Fayil: wuri mai aminci da mai aiwatarwa ya sani"] },
            { title: "Ku faɗa ku sake dubawa", bullets: ["Ku raba takardar \"inda takarduna suke\"", "Ku sake duba bayan abubuwan rayuwa", "Ku cire tsofaffin kwafi"] }
          ],
          sources: [{ name: "MedlinePlus: Takardun umarnin kiwon lafiya (advance directives)", url: "https://medlineplus.gov/advancedirectives.html" }],
          tryIt: "Aikin ƙarshe: ku haɗa fayil ɗin shirin gadonku da jerin abin da kuka mallaka da bashin da ke kanku, duba magadanku, mutanen da za ku naɗa da madadansu, aƙalla tambayoyi biyar ga lauya ko taimakon shari'a, da takarda shafi ɗaya mai taken \"inda takarduna suke\". Sannan ku nemo ofishin taimakon shari'a ɗaya kusa da ku ku rubuta yadda za a tuntuɓe shi.",
          youCanNow: "tsara muhimman takardunku, ajiye su lafiya, da faɗa wa mutanen da suka dace inda suke.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku ba likitanku kwafin takardar umarnin kiwon lafiyarku?", options: ["Don ta kasance a wurin idan an sami gaggawa", "Don likitan ya canja ta", "Don ku biya ƙasa da haka don magani", "Ba a buƙata"], answer: 0, why: "Wakilinku da likitanku suna buƙatar kwafi don ta kasance a hannu lokacin da ake buƙata." },
            { objective: "O6", q: "Kun gyara wasiyyarku. Me za ku yi da tsohuwar?", options: ["Ku ajiye duka biyun a fayil ɗin", "Ku aika tsohuwar ga ɗan uwa ta gidan waya", "Ku ɓoye sabuwar", "Ku bi shawarar lauyanku ku tabbata babu wanda zai yi amfani da tsohuwar"], answer: 3, why: "Ku cire tsofaffin kwafi don kada wani ya yi amfani da wanda bai dace ba, ku faɗa wa iyalinku game da canjin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Shirya da tsarawa",
        questions: [
          { objective: "O4", q: "Yaya lambobin asusu za su bayyana a jerin abin da kuka mallaka?", options: ["Cikakkiyar lamba da kalmar sirri", "Lambobi huɗu na ƙarshe kaɗai, babu kalmar sirri", "A rubuce a wajen fayil ɗin", "A saka a intanet don iyalinku"], answer: 1, why: "Lambobi huɗu na ƙarshe suna nuna asusun ba tare da bayyana shi ba." },
          { objective: "O4", q: "Wanne ne bashi?", options: ["Asusun ajiyarku", "Motarku", "Takardar inshorar rai", "Kuɗin da kuke bi a katin bashi"], answer: 3, why: "Bashi shi ne kuɗin da kuke bi." },
          { objective: "O5", q: "A ina za ku iya neman taimakon shari'a kyauta a jiharku?", options: ["LawHelp.org", "Wata talla a intanet da ba a sani ba", "Hanyar haɗi (link) a saƙon tes", "Sharhi a kafar sada zumunta"], answer: 0, why: "LawHelp.org yana jera ƙungiyoyin taimakon shari'a marasa riba a kowace jiha." },
          { objective: "O6", q: "Wa ya kamata ya sami kwafin takardar umarnin kiwon lafiyarku?", options: ["Babu kowa", "Ma'aikacin bankinku", "Wakilin kiwon lafiyarku da likitanku", "Baƙo a intanet"], answer: 2, why: "Suna buƙatar ta don su bi burinku idan an sami gaggawa." },
          { objective: "O6", q: "Kun canja wasiyyarku. Me ya kamata ku yi da tsohuwar?", options: ["Ku ajiye duka biyun a fayil ɗin ba tare da bayani ba", "Ku ba maƙwabci", "Ku ɓoye ta a wani ɗaki", "Ku bi shawarar lauyanku ku tabbata babu wanda zai yi amfani da tsohuwar"], answer: 3, why: "Tsofaffin kwafi na iya ruɗar iyalinku; lauyanku zai iya faɗin yadda za a yi da su." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirin Gado da Wasiyya",
    questions: [
      { objective: "O1", q: "Gadonku (estate) shi ne:", options: ["Gidanku kaɗai", "Asusun bankinku kaɗai", "Lambunku", "Duk abin da kuka mallaka, a cire bashin da ke kanku"], answer: 3, why: "Gado ya haɗa da duk dukiyarku, a cire bashi." },
      { objective: "O1", q: "Wasiyya galibi tana faɗin:", options: ["Likitan da kuke gani", "Wanda zai sami kayanku da wanda zai aiwatar da burinku", "Kasafin kuɗinku na wata", "Shirin Medicare ɗinku"], answer: 1, why: "Wasiyya tana faɗin wanda zai gaji kuma tana naɗa mai aiwatar da wasiyya." },
      { objective: "O1", q: "Wata kaka tana rainon jikokinta biyu. Me wasiyya ke iya yi musu sau da yawa?", options: ["Babu komai", "Biyan kuɗin makarantarsu kai tsaye", "Naɗa musu mai riƙo", "Canja takardun haihuwarsu"], answer: 2, why: "A wurare da yawa wasiyya tana iya naɗa mai riƙo ga yara 'yan ƙasa da shekara 18." },
      { objective: "O1", q: "Me yasa wasiyyar da aka rubuta a takarda ta kyauta ke iya kasa aiki?", options: ["Ƙila ba ta bi dokokin sa hannu da shaidu na wurin da kuke zaune ba", "Takardun kyauta koyaushe haramtattu ne", "Dole wasiyya ta zama mai launi", "Ta yi gajarta sosai"], answer: 0, why: "Kowace jiha da ƙasa tana da nata dokoki don wasiyya ta yi aiki." },
      { objective: "O2", q: "Kuɗin inshorar rai yawanci yana zuwa ga:", options: ["Duk wanda wasiyya ta ambata", "Mai aiwatar da wasiyya", "Mutumin da aka sa a takardar magaji", "Gwamnati"], answer: 2, why: "Takardun magada yawanci su ne ke yanke wanda zai sami wannan kuɗin." },
      { objective: "O2", q: "Yaushe ya kamata ku sake duba magadanku?", options: ["Ba sai ba", "Sau ɗaya kawai lokacin buɗe asusun", "Sai idan kamfanin ya kira kawai", "Bayan aure, saki, mutuwa ko haihuwa"], answer: 3, why: "Abubuwan rayuwa ne lokacin da takardu ke tsufa." },
      { objective: "O2", q: "Madadin magaji (contingent beneficiary) shi ne:", options: ["Madadi idan magaji na farko ya rasu", "Lauyanku", "Likitanku", "Manajan banki"], answer: 0, why: "Madadin magaji shi ne wanda ke maye gurbin na farko." },
      { objective: "O3", q: "Wakilci na shari'a na kuɗi yana naɗa wani don ya:", options: ["Yanke shawarwarin magani", "Kula da kuɗinku da dukiyarku idan ba za ku iya ba", "Karanta wasiyyarku da babbar murya", "Zaɓar wurin ibadarku"], answer: 1, why: "Wakilin yana aiki a madadinku kan sha'anin kuɗi." },
      { objective: "O3", q: "Idan babu wakilci na shari'a na kuɗi, kuma ba za ku iya kula da kuɗi ba, iyalinku na iya buƙatar:", options: ["Yin komai ba", "Zuwa kotu don a naɗa mai riƙo ko mai kula da dukiya", "Kiran gidan rediyo", "Rufe dukkan asusunku"], answer: 1, why: "Kotu na iya ɗaukar lokaci da tsada; wakilci na shari'a yana hana hakan." },
      { objective: "O3", q: "Living will tana faɗin:", options: ["Wanda zai sami gidanku", "Kuɗin da ke asusun bankinku", "Irin maganin da kuke so ko ba ku so kusa da ƙarshen rayuwa", "Jerin kayan cefanenku"], answer: 2, why: "Living will tana rubuta burinku game da magani." },
      { objective: "O3", q: "Wane ne zaɓi mai kyau a matsayin health care proxy?", options: ["Wanda zai bi nasa burin", "Baƙon da ya kira ku", "Duk wanda ya tambaya", "Mutumin da kuka amince da shi, za a iya samunsa, kuma zai bi burinku"], answer: 3, why: "Wakilinku dole ya yi magana a madadinku, ba don kansa ba." },
      { objective: "O3", q: "Bayan lauyanku, da wa ya kamata ku yi magana game da burinku na kiwon lafiya?", options: ["Likitanku da health care proxy ɗinku", "Mai kiran tallace-tallace", "Babu kowa", "Ƙungiya a kafar sada zumunta"], answer: 0, why: "Su ne za su yi aiki bisa burinku." },
      { objective: "O4", q: "Wanne ne ya kamata ya kasance a jerin abin da kuka mallaka?", options: ["Cikakkiyar kalmar sirrinku", "Motar maƙwabcinku", "Lambar PIN ɗinku", "Gidanku, asusunku, motoci da kaya masu daraja"], answer: 3, why: "Ku jera dukiya da sunan kamfani da lambobi huɗu na ƙarshe, ba kalmomin sirri ba." },
      { objective: "O4", q: "Ya kamata ku liƙa cikakken jerin asusunku a mataimakin AI?", options: ["Eh, don ajiye lokaci", "A'a; ku riƙe bayanan sirri daga kayan AI", "Eh, idan AI ya tambaya", "Sai a kwamfutar ɗakin karatu kawai"], answer: 1, why: "Kada ku taɓa rubuta lambobin sirri ko bayanan asusu a kayan AI." },
      { objective: "O5", q: "Wace lambar waya ce ke kai ku ga Eldercare Locator?", options: ["1-800-677-1116", "911", "1-800-MEDICARE", "411"], answer: 0, why: "Eldercare Locator yana haɗa tsofaffi da hidimomin yankinsu." },
      { objective: "O5", q: "Kafin ku ɗauki lauya, tambaya mai hikima ita ce:", options: ["Wane launi kuka fi so?", "Za ku iya hasashen burina?", "Nawa wannan zai ci, kuma me ya ƙunsa?", "Zan iya tsallake sa hannu?"], answer: 2, why: "Sanin kuɗin tun farko yana hana ba-zata." },
      { objective: "O5", q: "Mene ne amfani mai kyau na mataimakin AI a shirin gado?", options: ["Rubuta wasiyyarku ta doka shi kaɗai", "Taimaka muku rubuta tambayoyinku da kalmomi masu sarari, ba tare da sunaye ko lambobi ba", "Ajiye kalmomin sirrinku", "Yanke wanda zai gaji"], answer: 1, why: "AI zai iya taimakawa da kalmomi, amma amsoshin shari'a daga lauya suke." },
      { objective: "O6", q: "A ina ya kamata a ajiye ainihin wasiyyar da aka sa wa hannu?", options: ["Ko'ina, ba komai", "A cikin mota", "A jefar da ita bayan an yi kwafi", "Inda lauyanku ya ba da shawara, kuma mai aiwatar da wasiyyarku ya sani"], answer: 3, why: "Dokoki da zaɓuɓɓuka sun bambanta; ku tambayi lauyanku." },
      { objective: "O6", q: "Takardar \"inda takarduna suke\" ya kamata ta tafi ga:", options: ["Kowa a intanet", "Babu kowa", "Mutanen da kuka naɗa a shirinku", "Mai kiran tallace-tallace"], answer: 2, why: "Mutanen da za su yi aiki a madadinku suna buƙatar samun takardunku." },
      { objective: "O1", q: "Dokokin shirin gado:", options: ["Sun bambanta a kowace jiha da ƙasa", "Iri ɗaya ne a ko'ina a duniya", "Ba sa canjawa", "Na masu arziki ne kawai"], answer: 0, why: "Dokoki sun bambanta da wuri, don haka ku ga lauya ko taimakon shari'a a inda kuke zaune." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      4,
      7,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Abin da na mallaka da bashin da ke kaina",
        objective: "O4",
        notYet: "Jerin ya rasa manyan abubuwa, ko yana nuna cikakkun lambobin asusu ko kalmomin sirri.",
        meets: "Jerin dukiya da bashi da sunan kamfani da irin asusun, ta amfani da lambobi huɗu na ƙarshe kaɗai.",
        exceeds: "Yana kuma jera asusun intanet da dabbobin gida, kuma an ajiye shi a wuri mai aminci."
      },
      {
        name: "Duba magada",
        objective: "O2",
        notYet: "Ba a duba wasu asusu ko inshora ba.",
        meets: "An jera kowane asusu ko inshora mai magaji, da mutumin da aka sa da madadinsa.",
        exceeds: "An yi wa takardun da suka tsufa alama kuma an nemi takardar gyara."
      },
      {
        name: "Mutanen da aka naɗa",
        objective: "O3",
        notYet: "Matsayi ɗaya ko fiye ya ɓace, ko babu madadi.",
        meets: "Mai aiwatar da wasiyya, wakilin kuɗi da wakilin kiwon lafiya, kowanne da madadi.",
        exceeds: "An yi magana da mutanen da aka zaɓa game da aikinsu da burinku."
      },
      {
        name: "Tambayoyi ga lauya",
        objective: "O5",
        notYet: "Tambayoyi ƙasa da biyar, ko babu wurin samun taimakon shari'a.",
        meets: "Aƙalla tambayoyi biyar masu sarari, har da kuɗi, da wuri ɗaya kusa da ku da ke ba da taimakon shari'a.",
        exceeds: "An tuntuɓi wurin taimakon shari'a ko an sa ranar ganawa."
      },
      {
        name: "Inda takarduna suke",
        objective: "O6",
        notYet: "Babu takarda, ko ba ta faɗi inda muhimman takardu suke ba.",
        meets: "Takarda shafi ɗaya da ke faɗin inda kowace muhimmiyar takarda take.",
        exceeds: "An ba mutanen da aka naɗa a shirin takardar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka gyara aƙalla takardar magaji ɗaya cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka gana da lauya ko taimakon shari'a kuma suka sa hannu a wasiyya, wakilci na shari'a ko takardar umarnin kiwon lafiya",
      "Masu koyo da suka raba takardar \"inda takarduna suke\" da iyalinsu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fayil ko littafin ajiye takardu, takarda da alƙalami",
      "Takardun inshora, bayanan asusu da duk wata wasiyya ko takardar umarni da mai koyo yake da ita (a riƙe su a sirri)",
      "Waya ko kwamfuta don nemo taimakon shari'a a LawHelp.org ko kiran Eldercare Locator",
      "Kusan minti 60 gaba ɗaya, a gajerun zama masu natsuwa, da lokaci a gida don tattara takardu"
    ],
    facilitatorNotes: [
      "Kada ku ba da shawarar shari'a ko ku taimaka wajen rubuta wasiyya; kwas ɗin yana shirya masu koyo don ganin lauya ko taimakon shari'a.",
      "Masu koyo suna riƙe takardunsu a sirri; kada ku taɓa tattara lambobin asusu ko takardu.",
      "Wasu masu koyo na iya kasancewa cikin baƙin ciki ko ba sa jin daɗin magana game da mutuwa; ku riƙe magana mai taushi kuma mai amfani.",
      "Ku nemo taimakon shari'a na yanki ko hidimomin shari'a na tsofaffi kafin zaman, don masu koyo su tafi da lamba ta gaske.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
