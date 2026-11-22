"use strict";

// Koach Learn course, Hausa (ha) translation of shared/early-childhood-cda-prep.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Prepares learners for the US CDA Credential; it does not grant it. US names (CDA, Council, Pearson VUE, 911, Childhelp) kept.

module.exports = {
  id: "early-childhood-cda-prep-ha",
  lang: "ha",
  translationOf: "early-childhood-cda-prep",
  category: "Workforce Development",
  name: "Ilimin Yara Ƙanana da Shiri don Takardar Shaidar CDA",
  skills: "Fahimtar sharuɗɗan CDA, Kiyaye lafiyar yara da tsaronsu, Kai rahoton zargin cin zarafin yara, Rubuta bayanan lura, Shirya aikin koyo, Yin tsarin CDA mai ranaku",
  outcome: "fara hanyarku zuwa takardar shaidar Child Development Associate (CDA): lissafa abin da Council ke buƙata a wurin aikinku, kiyaye lafiyar yara, rubuta bayanan lura na gaskiya, shirya aikin koyo, da mayar da duka zuwa tsari mai ranaku don horo, ƙwarewar aiki, portfolio, jarabawa da ziyara.",
  about: [
    "Cibiyoyin kula da yara, shirye-shiryen Head Start, makarantun renon yara (preschool) da gidajen kula da yara suna buƙatar manya masu kulawa da horo. Takardar shaidar Child Development Associate (CDA), wadda Council for Professional Recognition ke bayarwa, ita ce takardar shaida ta farko mafi shahara a ilimin yara ƙanana a Amurka.",
    "Wannan kwas na masu neman aiki ne, iyaye, matasa, mutanen da ke dawowa gida daga gidan yari, da duk wanda yake son yin aiki da yara ƙanana. Yana shirya ku don hanyar CDA. Ba ya ba ku takardar shaidar, kuma ba a ƙirga shi a matsayin sa'o'in horo na hukuma sai idan wani shiri ya gaya muku haka.",
    "Za ku koyi matakan CDA, tushen kiyaye lafiyar yara da wajibcin kai rahoto, yadda ake lura da abin da yaro yake yi da rubuta shi, da yadda ake shirya aiki mai sauƙi. Za ku gama da tsarinku na CDA mai ranaku na gaske.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\" da tambayoyi biyu masu sauri. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi tsarinku na shirin CDA a takarda ko a wata takardar kwamfuta kyauta: wurin aikinku, inda za ku sami sa'o'in horo 120 (aƙalla 10 a kowanne daga cikin fannoni takwas), yadda za ku rubuta sa'o'in aikinku, ranar fara portfolio, ranakun da kuke nufi don jarabawa da Verification Visit, da tsarin aiki ɗaya a rubuce don yaro ɗan preschool wanda zai iya shiga portfolio ɗinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da manyan matasa da ke son yin aiki a kula da yara, preschool, Head Start ko kula da yara a gida a Amurka: iyaye, masu neman aiki, masu sauya sana'a, baƙi 'yan ci-rani, matan ko mazan tsofaffin sojoji, da mutanen da ke dawowa gida daga gidan yari. Da yawa sun riga sun kula da yara a gida amma ba su da horo na hukuma.",
    startingPoint: "Suna iya kula da yara kullum kuma suna iya karanta umarni masu sauƙi. Yawancinsu ba su ji labarin fannonin CDA, portfolio ko Verification Visit ba, kuma ba su taɓa rubuta bayanan lura ko tsarin darasi ba.",
    gap: "Ayyukan kula da yara da dama da dokokin lasisi na jihohi suna neman horo ko takardar shaida kamar CDA. Masu koyo suna buƙatar sanin ainihin matakan, kiyaye lafiyar yara tun ranar farko, da yin atisayen rubutun da portfolio da jarabawa ke buƙata. Ba tare da tsari ba, mutane suna ɗaukar horon da bai dace ba, suna rasa lissafin sa'o'i, ko su bar lokacin shekara 3 na ƙwarewa da lokacin wata 6 na portfolio ya wuce.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8)",
      "Na'urori: waya ko kwamfutar ɗakin karatu; kowane aiki kuma yana yiwuwa a takarda",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da iyali",
      "Dokoki suna canjawa: ana duba sharuɗɗan CDA da kuɗaɗensu a cdacouncil.org; dokokin lasisi da na wajibcin kai rahoto sun bambanta daga jiha zuwa jiha",
      "Sirrin yara: bayanan atisaye suna amfani da sunayen ƙirƙira ko harafin farko na suna kawai, ba hotuna ko bayanan gaske na yaro ba",
      "Binciken tarihin mutum (background check) yana cikin aikin kula da yara; masu koyo da ke da tarihin laifi su duba dokokin jiharsu"
    ],
    prerequisites: "Babu. Ana buƙatar takardar kammala sakandare (high school diploma) ko GED (jarabawar da ke daidai da sakandare a Amurka) kafin a nemi CDA (ko kasancewa ɗalibin aji na 11 ko 12 a shirin sana'ar ilimin yara ƙanana na sakandare)."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin Council for Professional Recognition na wurin aikinku", action: "lissafa matakan ilimi, ƙwarewar aiki, portfolio, jarabawa da Verification Visit na CDA", standard: "tare da sa'o'i da lokutan da suka dace" },
    { id: "O2", condition: "Idan aka ba ku ɗakin kula da yara ko bayaninsa", action: "duba ɗakin don matsalolin sa ido, wanke hannu, barcin jarirai lafiya da abubuwan haɗari", standard: "kuna gano aƙalla 4 cikin matsaloli 5 da aka ɓoye" },
    { id: "O3", condition: "Idan aka ba ku labarin da wataƙila ana cutar da yaro", action: "bayyana matakan kai rahoton zargin cin zarafi ko sakaci", standard: "kuna kiran 911 da farko idan yaro yana cikin haɗari, kuma kuna bin dokar jiha da ƙa'idar shirin" },
    { id: "O4", condition: "Bayan kun kalli yaro yana wasa na minti biyar", action: "rubuta bayanin lura da ke ɗauke da abin da kuka gani da kuka ji kawai", standard: "ba tare da laƙabi ko zato ba, kuma da kwanan wata, lokaci da wurin" },
    { id: "O5", condition: "Idan aka ba ku shekarun yaro da abin da yake so", action: "rubuta gajeren tsarin aiki mai manufa, kayan aiki, matakai da bayanin tsaro", standard: "wanda ya dace da shekarunsa kuma ya ambaci fanni ɗaya na CDA" },
    { id: "O6", condition: "Ta amfani da kalandarku", action: "yin tsarin shirin CDA mai ranaku daga horo zuwa Verification Visit", standard: "wanda ke ajiye ƙwarewar aiki cikin shekara 3, da portfolio cikin wata 6 kafin neman CDA" }
  ],
  chapters: [
    {
      name: "Babi na 1: Hanyar CDA da kiyaye lafiyar yara",
      lessons: [
        {
          title: "Mene ne CDA da matakan samun ta",
          objectives: ["O1"],
          minutes: 6,
          goal: "Lissafa matakan samun CDA a wurin aikinku.",
          text: [
            "Takardar shaidar Child Development Associate (CDA) Council for Professional Recognition ce ke bayar da ita. Tana nuna cewa kuna iya aiwatar da ƙa'idojin ƙwarewa na CDA (CDA Competency Standards) tare da yara ƙanana. Akwai hanyoyi don wurare huɗu: Preschool (renon yara masu shekara 3 zuwa 5), Infant-Toddler (jarirai da yara masu fara tafiya), Family Child Care (kula da yara a gida) da Home Visitor (mai ziyartar gidaje). Kowanne yana da shafin sharuɗɗansa.",
            "Don wurin Preschool (yara masu shekara 3 zuwa 5 a cibiya), shafin Council ya lissafa: takardar kammala sakandare ko GED (ko kasancewa ɗalibin aji na 11 ko 12 a shirin sana'ar ilimin yara ƙanana na sakandare); sa'o'i 120 na horo na hukuma a ilimin yara ƙanana, tare da aƙalla sa'o'i 10 a kowanne daga cikin fannonin CDA takwas; da sa'o'i 480 na aiki tare da yara masu shekara 3 zuwa 5 cikin shekara 3 kafin ku nema.",
            "Haka kuma za ku haɗa portfolio na sana'a cikin wata 6 kafin ku nema, kuma ku zaɓi CDA Professional Development (PD) Specialist. Bayan an amince da buƙatarku, za ku yi jarabawar CDA: kusan tambayoyi 65 a kwamfuta a cibiyar jarabawa ta Pearson VUE. Sannan PD Specialist zai yi Verification Visit: zai duba portfolio ɗinku, ya kalle ku kuna aiki da yara, kuma ya tattauna da ku game da ƙarfinku da inda kuke girma. Council kuma yana ba da yanke shawara cikin sauri ba tare da ziyara ba ga wasu sakamakon jarabawa; ku duba shafinsa na sabbin canje-canje.",
            "Kuɗaɗe, tallafin karatu (scholarship) da dokoki suna canjawa. Ku duba adadin yanzu a cdacouncil.org, kuma ku tambayi mai ɗaukar ku aiki ko jiharku game da tallafi kafin ku biya. Takardar shaidar tana ɗaukar shekara 3, sannan a sabunta ta."
          ],
          steps: ["Ku zaɓi wurin aikinku: Preschool, Infant-Toddler, Family Child Care ko Home Visitor.", "Ku buɗe shafin wannan wurin a cdacouncil.org kuma ku rubuta sharuɗɗansa.", "Ku nemo horon da ya ƙunshi duk fannoni takwas.", "Ku fara rubuta sa'o'in aikinku tare da yara.", "Ku haɗa portfolio, ku nema, ku yi jarabawa, sannan a yi muku Verification Visit."],
          words: [["CDA", "Child Development Associate: takardar shaida ta ƙasar Amurka ga masu aiki da yara ƙanana."], ["Council for Professional Recognition", "ƙungiyar da ke bayar da CDA."], ["Portfolio", "tarin rubuce-rubucenku da kayan aikinku da ke nuna aikinku tare da yara da iyalai."], ["Verification Visit", "ziyarar da PD Specialist zai kalle ku kuna aiki, ya duba portfolio ɗinku, ya kuma tattauna da ku."], ["PD Specialist", "Professional Development Specialist: ƙwararren da Council ya amince da shi don yin ziyararku."]],
          slides: [
            { title: "CDA a layi ɗaya", bullets: ["Council for Professional Recognition ce ke bayarwa", "Wurare: Preschool, Infant-Toddler, Family Child Care, Home Visitor"] },
            { title: "Preschool: kafin ku nema", bullets: ["Takardar sakandare ko GED (ko shirin yara ƙanana na sakandare)", "Sa'o'in horo 120, 10+ a kowane fanni cikin 8", "Sa'o'in aiki 480 da yara masu shekara 3-5 cikin shekara 3"] },
            { title: "Sannan", bullets: ["Gama portfolio cikin wata 6 kafin neman", "Jarabawar CDA a cibiyar Pearson VUE", "Verification Visit daga PD Specialist"] },
            { title: "Ku duba kafin ku biya", bullets: ["Kuɗaɗe da dokoki suna canjawa: cdacouncil.org", "Ku tambayi game da tallafin karatu", "A sabunta bayan kowace shekara 3"] }
          ],
          sources: [
            { name: "CDA Council: Hanyar Preschool", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: Koyi game da CDA", url: "https://www.cdacouncil.org/en/about/learn-about-the-cda/" },
            { name: "CDA Council: Sabbin canje-canje a tsari", url: "https://www.cdacouncil.org/en/cda-process-updates/" },
            { name: "CDA Council: Nemo tallafin karatu na CDA", url: "https://www.cdacouncil.org/en/find-cda-scholarships/" },
            { name: "CDA Council: Sabunta CDA", url: "https://www.cdacouncil.org/en/renew-cda/" }
          ],
          tryIt: "Ku buɗe shafin CDA Council na wurin da kuke so (ko ku yi amfani da lambobin wannan darasi don Preschool). A takarda, ku rubuta matakai biyar bisa tsari, da sa'o'i ko lokacin kowanne a gefensa.",
          youCanNow: "lissafa matakan CDA na wurin aikinku, tare da sa'o'in horo, sa'o'in aiki da lokutan da aka ƙayyade.",
          quickCheck: [
            { objective: "O1", q: "Don CDA na Preschool, yaya ake raba sa'o'in horo 120?", options: ["Duk sa'o'i 120 a fanni ɗaya da kuke so", "Aƙalla sa'o'i 10 a kowanne daga cikin fannoni takwas", "Sa'o'in aiki da yara kawai", "Kowace sa'a 120 ta bidiyo a intanet"], answer: 1, why: "Council yana neman sa'o'in horo 120, ba ƙasa da 10 a kowanne daga cikin fannoni takwas ba." },
            { objective: "O1", q: "Wa ke bayar da takardar shaidar CDA?", options: ["Ofishin motoci na jiharku", "Makarantar da yaronku ke zuwa", "Kowace cibiyar kula da yara", "Council for Professional Recognition"], answer: 3, why: "Council for Professional Recognition ce ke bayar da CDA; kwas ko mai ɗaukar aiki yana taimaka muku shiryawa ne kawai." }
          ]
        },
        {
          title: "Ɗaki mai tsaro da lafiya: lasisi, sa ido, wanke hannu, barci lafiya",
          objectives: ["O2"],
          minutes: 6,
          goal: "Duba ɗakin kula da yara don matsalolin tsaro da lafiya na yau da kullum.",
          text: [
            "Kowace jiha ko yanki (territory) a Amurka ce ke ba da lasisin kula da yara. Lasisi yana kafa mafi ƙarancin dokokin lafiya da tsaro da shiri dole ne ya cika, kamar binciken tarihin ma'aikata, horon lafiya da tsaro, cancantar ma'aikata da bincike daga hukuma. Adadin yara ga kowane babba (ratio) da dokokin horo sun bambanta daga jiha zuwa jiha, don haka ku nemo naku a childcare.gov.",
            "Sa ido shi ne na farko: kuna iya gani da jin kowane yaro, kuna ƙirga yara akai-akai (musamman lokacin canja ɗaki ko fita waje), kuma ba ku taɓa barin yara su kaɗai ba.",
            "Wanke hannu yana hana ƙwayoyin cuta: ku wanke da sabulu da ruwa, kuna goge hannu aƙalla daƙiƙa 20, bayan bayan gida ko canja kunzugu (diaper), kafin cin abinci ko taɓa abinci, da bayan wasa a waje. Ku taimaki yara su wanke hannu su ma.",
            "Barci lafiya ga jarirai: ku kwantar da jariri a bayansa a kowane ɗan barci da kuma da dare, a kan wuri mai tauri, faɗi kuma daidai, da zanin gado mai matsewa (fitted sheet) kawai. Kada a sa matashin kai, bargo, kariyar gefen gado (bumper) ko 'yan tsana a cikin gadon jariri. Haka kuma ku nemi abubuwan haɗari: soket na wuta, igiyoyi, ƙananan abubuwa da yaro zai iya shaƙe da su, kayan wanke-wanke da ke kusa da hannu, da hanyoyin fita da aka toshe."
          ],
          steps: ["Ku ƙirga yaran kuma ku tabbata kuna gani da jin dukansu.", "Ku nemi abubuwan haɗari: igiyoyi, soket, ƙananan abubuwa, sinadarai, hanyoyin fita da aka toshe.", "Ku duba wurin wanke hannu yana da sabulu da tawul, kuma manya suna amfani da shi.", "A ɗakin jarirai: barci a baya, wuri mai tauri da faɗi, babu komai a gadon sai zanin gado mai matsewa.", "Ku gyara abin da za ku iya yanzu, kuma ku gaya wa shugabanku sauran."],
          words: [["Lasisi", "mafi ƙarancin dokokin lafiya da tsaro na jiha da shiri dole ne ya cika don yin aiki bisa doka."], ["Ratio", "yawan yaran da babba ɗaya zai iya kula da su; jiha ce ke kafa shi kuma ya bambanta da shekarun yara."], ["Sa ido", "kasancewa koyaushe kuna iya gani da jin yaran da ke hannunku."], ["Abin shaƙewa", "ƙaramin abu da yaro ƙarami zai iya sa a baki ya shaƙe da shi."]],
          slides: [
            { title: "Lasisi daga jiha yake", bullets: ["Mafi ƙarancin dokokin lafiya da tsaro", "Binciken tarihi, horo, bincike daga hukuma", "Ku nemo jiharku a childcare.gov"] },
            { title: "Sa ido da ƙirga", bullets: ["Ku gani ku ji kowane yaro", "Ku ƙirga a kowane motsi", "Kada ku taɓa barin yara su kaɗai"] },
            { title: "Wanke hannu", bullets: ["Sabulu da ruwa, goge daƙiƙa 20", "Bayan bayan gida ko diaper, kafin abinci, bayan waje"] },
            { title: "Barci lafiya ga jarirai", bullets: ["A baya, a kowane barci", "Wuri mai tauri, faɗi, daidai, zanin gado mai matsewa kawai", "Babu matashin kai, bargo, bumper ko 'yan tsana"] }
          ],
          sources: [
            { name: "Childcare.gov: Yaya ake tsara dokokin kula da yara?", url: "https://childcare.gov/consumer-education/how-is-child-care-regulated" },
            { name: "Childcare.gov: Bayanan jihohi da yankuna", url: "https://childcare.gov/state-resources" },
            { name: "Safe to Sleep (NIH): Wurin barci lafiya", url: "https://safetosleep.nichd.nih.gov/reduce-risk/safe-sleep-environment" }
          ],
          tryIt: "Ku zagaya ɗaki ɗaya a gida (ko ku yi tunanin aji). Ku lissafa abubuwa biyar da za ku duba don tsaro da lafiya, kuma ku rubuta gyara ɗaya ga kowanne. Sannan ku nemo shafin kula da yara na jiharku a childcare.gov kuma ku rubuta wanda ke ba da lasisin kula da yara a can.",
          youCanNow: "duba ɗaki don matsalolin sa ido, wanke hannu, barci lafiya da abubuwan haɗari, da faɗin wanda ke ba da lasisin kula da yara a jiharku.",
          quickCheck: [
            { objective: "O2", q: "Jariri ya yi barci a gadonsa. Wane yanayi ne lafiya?", options: ["A cikinsa da bargo mai laushi", "A gefensa da matashin kai don tallafi", "A bayansa, katifa mai tauri, zanin gado mai matsewa kawai", "A bayansa da 'yan tsana don jin daɗi"], answer: 2, why: "Safe to Sleep ya ce barci a baya a kan wuri mai tauri da faɗi, da zanin gado mai matsewa kawai." },
            { objective: "O2", q: "Rukuninku sun shigo daga filin wasa. Me za ku fara yi?", options: ["Ku ƙirga yaran", "Ku fara aiki na gaba nan take", "Ku duba wayarku", "Ku bar su su je bayan gida su kaɗai"], answer: 0, why: "Ƙirga a kowane motsi yana tabbatar da cewa ba a bar wani yaro a baya ba." }
          ]
        },
        {
          title: "Kare yara: wajibcin kai rahoto",
          objectives: ["O3"],
          minutes: 5,
          goal: "Bayyana matakan kai rahoton zargin cin zarafin yaro ko sakaci.",
          text: [
            "A yawancin jihohi, ma'aikatan kula da yara masu wajibcin kai rahoto ne (mandated reporters). Wato doka tana buƙatar ku kai rahoto idan kuna da dalilin zargin ana cin zarafin yaro ko ana sakaci da shi. Ba ku buƙatar hujja. Dokar kowace jiha tana faɗin wanda dole ne ya kai rahoto da yadda zai yi, kuma shirinku zai sami ƙa'ida a rubuce. Ku koyi duka biyun kafin ranarku ta farko.",
            "Idan yaro yana cikin haɗari nan take, ku kira 911 da farko. Idan ba haka ba, ku bi tsarin jiharku (yawanci layin waya na jiha don cin zarafin yara) da ƙa'idar shirinku. Idan ba ku san inda za ku kira ba, layin Childhelp National Child Abuse Hotline (1-800-422-4453) zai iya taimakawa.",
            "Aikinku shi ne kai rahoto, ba bincike ba. Kada ku yi wa yaron tambaya akai-akai ko ku tunkari iyalinsa. Idan yaro ya gaya muku wani abu, ku natsu, ku saurara, kada ku yi alƙawarin ɓoye sirri, kuma ku rubuta ainihin kalmominsa, kwanan wata da lokaci. Ku ajiye shi a sirri: ku gaya wa mutanen da doka da ƙa'idarku suka ce kawai."
          ],
          steps: ["Idan yaro yana cikin haɗari yanzu, ku kira 911.", "Ku saurara cikin natsuwa; kada ku yi alƙawarin ɓoye sirri.", "Ku rubuta abin da kuka gani ko kuka ji, kalma da kalma, da kwanan wata da lokaci.", "Ku kai rahoto yadda dokar jiharku da ƙa'idar shirinku suka buƙata.", "Ku ajiye shi a sirri kuma kada ku yi bincike da kanku."],
          words: [["Mai wajibcin kai rahoto", "mutumin da doka ta wajabta masa kai rahoton zargin cin zarafin yaro ko sakaci."], ["Sakaci", "rashin ba yaro kulawar da yake buƙata, kamar abinci, tsaro, sa ido ko magani."], ["Zargi", "samun dalilin tunanin cewa wani abu yana faruwa, ba tare da hujja ba."]],
          slides: [
            { title: "Wataƙila kuna da wajibcin kai rahoto", bullets: ["Yawancin jihohi sun haɗa da ma'aikatan kula da yara", "Kuna kai rahoton dalilin zargi, ba hujja ba", "Ku koyi dokar jiharku da ƙa'idar shirinku"] },
            { title: "Haɗari yanzu? Ku kira 911", bullets: ["Sannan ku bi tsarin kai rahoto na jiharku", "Ba ku tabbata ba? Childhelp: 1-800-422-4453"] },
            { title: "Kai rahoto, ba bincike ba", bullets: ["Ku saurara a natse; babu alƙawarin ɓoye sirri", "Ku rubuta ainihin kalmomi, kwanan wata da lokaci", "Ku gaya wa wanda doka da ƙa'ida suka ce kawai"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: Yadda ake kai rahoton cin zarafin yara da sakaci", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Childcare.gov: Kai rahoton damuwa game da kula da yara", url: "https://childcare.gov/health-and-safety-reporting" }
          ],
          tryIt: "Ku nemo yadda ake kai rahoton zargin cin zarafin yara a jiharku (ku bincika sunan jiharku tare da \"report child abuse\" kuma ku yi amfani da shafin .gov). Ku rubuta lambar waya ko shafin a kati, da matakai biyar na wannan darasi a bayansa.",
          youCanNow: "bayyana matakan kai rahoton zargin cin zarafi ko sakaci, da nemo inda ake kai rahoto a jiharku.",
          quickCheck: [
            { objective: "O3", q: "Yaro ya gaya muku sirri cewa ana cutar da shi a gida, kuma ya ce kada ku gaya wa kowa. Me za ku ce?", options: ["\"Na yi alƙawari ba zan gaya wa kowa ba.\"", "\"Ka tabbata? Sake gaya mini.\"", "\"Lallai kana ƙirƙira ne.\"", "\"Na gode da ka gaya mini. Dole ne in gaya wa mutanen da za su iya taimakawa a kiyaye ka.\""], answer: 3, why: "Kuna natsuwa kuma ba ku taɓa yin alƙawarin ɓoye sirri ba, domin dole ne ku kai rahoto." },
            { objective: "O3", q: "Kun ga alamomi da suka dame ku, amma ba ku da hujja. Me mai wajibcin kai rahoto zai yi?", options: ["Ya jira har sai an sami hujja", "Ya kai rahoto yadda dokar jiha da ƙa'idar shiri suka buƙata", "Ya kira iyaye ya tambaye su abin da ya faru", "Ya ɗauki hotuna ya saka su a intanet don gargaɗi"], answer: 1, why: "Doka tana neman ku kai rahoton dalilin zargi; bincike aikin hukuma ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Hanyar CDA da kiyaye lafiyar yara",
        questions: [
          { objective: "O1", q: "Don CDA na Preschool, sa'o'i nawa na aiki da yara masu shekara 3 zuwa 5 kuke buƙata, kuma cikin wane lokaci?", options: ["Sa'o'i 480 cikin shekara 3 kafin neman", "Sa'o'i 120 cikin shekara 1", "Sa'o'i 1,000 a kowane lokaci", "Ba a buƙatar sa'o'in aiki"], answer: 0, why: "Shafin Preschool na Council ya lissafa sa'o'i 480 cikin shekara 3 kafin ku aika buƙatarku." },
          { objective: "O1", q: "Ta wane tsari jarabawa da Verification Visit suke faruwa?", options: ["Ziyarar koyaushe tana zuwa kafin ku nema", "Duka biyun a rana ɗaya suke", "Jarabawa ce ta farko, sannan ziyara", "Babu ɗayansu a cikin CDA"], answer: 2, why: "Bayan an amince, kuna tsara ranar jarabawa; ana tsara ziyara bayan jarabawa." },
          { objective: "O2", q: "Wa ke kafa dokokin lasisin kula da yara kamar ratio da horo?", options: ["Iyayen kowane yaro", "Kowace jiha ko yanki", "CDA Council", "Kowane malami"], answer: 1, why: "Jihohi da yankuna ne ke ba da lasisi, don haka dokoki sun bambanta daga wuri zuwa wuri." },
          { objective: "O2", q: "Wane abin haɗari ne ya kamata ku gyara a ɗakin yara masu fara tafiya?", options: ["Kwandaloli da duwatsun ado a kan ƙaramin shiryayye", "Sabulu a wurin wanke hannu", "Zanin gado mai matsewa a kan katifar gadon jariri", "Jerin lambobin gaggawa kusa da ƙofa"], answer: 0, why: "Ƙananan abubuwa abin shaƙewa ne ga yara ƙanana." },
          { objective: "O3", q: "Yaro ya iso da mummunan rauni kuma yana cikin haɗari yanzu. Me za ku fara yi?", options: ["Ku rubuta shi a bayananku don mako mai zuwa", "Ku tambayi abokan yaron abin da ya faru", "Ku jira shugabanku ya dawo daga cin abincin rana", "Ku kira 911"], answer: 3, why: "Haɗari nan take yana nufin ku kira 911 da farko, sannan ku bi tsarin kai rahoto." }
        ]
      }
    },
    {
      name: "Babi na 2: Koyarwa, lura da tsarinku na CDA",
      lessons: [
        {
          title: "Lura da rubutu: bayanan lura",
          objectives: ["O4"],
          minutes: 5,
          goal: "Rubuta bayanin lura da ke ɗauke da abin da kuka gani da kuka ji kawai.",
          text: [
            "Lura da halayen yara da rubuta su yana ɗaya daga cikin fannonin CDA takwas. Malamai suna lura da yara don sanin abin da kowane yaro zai iya yi, abin da yake so da abin da yake buƙata a gaba. Bayanai masu kyau kuma suna taimakawa idan kuna magana da iyalai.",
            "Bayani mai kyau na gaskiya ne (objective): yana faɗin abin da kuka gani da kuka ji, ba abin da kuke tunanin yana nufi ba. Ku rubuta \"M. ya jera bulo shida, sannan ya rushe su ya yi dariya\" maimakon \"M. yaro ne mai farin ciki da wayo\". Laƙabi kamar malalaci, mugu, mai kunya ko mai taurin kai ba su da wuri a cikin bayanai.",
            "Ku saka kwanan wata, lokaci, wurin, da harafin farko na sunan yaron. Ku rubuta ainihin kalmomin yaron. Ku ajiye bayanai a sirri: game da yaro na gaske suke, kuma mallakar shirin ne."
          ],
          steps: ["Ku rubuta kwanan wata, lokaci, wuri da harafin farko na sunan yaron.", "Ku yi lura na 'yan mintuna.", "Ku rubuta ayyuka da ainihin kalmomi kawai.", "Ku goge duk wani laƙabi ko zato.", "Ku ƙara tambaya ɗaya ko mataki na gaba ga yaron, kuma ku nuna cewa ra'ayinku ne."],
          words: [["Lura", "kallon yaro sosai don sanin abin da zai iya yi."], ["Na gaskiya (objective)", "gaskiyar abin da za ku iya gani ko ji kawai, ba ra'ayi ba."], ["Anecdotal record", "gajeren bayani a rubuce game da abu ɗaya da yaro ya yi ko ya faɗa."]],
          slides: [
            { title: "Dalilin da yasa muke lura", bullets: ["Sanin abin da kowane yaro zai iya yi", "Shirya abin da zai biyo baya", "Gaya wa iyalai gaskiyar abin da ya faru"] },
            { title: "Gaskiya, ba laƙabi ba", bullets: ["E: \"ya jera bulo 6, ya yi dariya\"", "A'a: \"mai wayo\", \"mai kunya\", \"mugu\"", "Ku rubuta ainihin kalmomin yaron"] },
            { title: "Kowane bayani yana da", bullets: ["Kwanan wata, lokaci, wuri", "Harafin farko na suna kawai", "Ana ajiye shi a sirri"] }
          ],
          tryIt: "Ku kalli wani yaro da kuka sani (da izinin iyayensa), ko bidiyon yara, na minti biyar. Ku rubuta bayanin lura da kwanan wata, lokaci da wuri. Sannan ku zagaye duk kalmar da take laƙabi ko zato, kuma ku sake rubuta ta a matsayin gaskiyar abin da ya faru.",
          youCanNow: "rubuta bayanin lura na adalci da gaskiya ba tare da laƙabi ba.",
          quickCheck: [
            { objective: "O4", q: "Wace jimla ce ta dace a bayanin lura?", options: ["\"J. ɗan rigima ne.\"", "\"J. kamar yana baƙin ciki yau.\"", "\"J. ya fi sauran wayo.\"", "\"J. ya ce 'nawa ne yanzu' ya karɓi babbar mota ja daga hannun T.\""], answer: 3, why: "Tana ɗauke da abin da aka gani da aka ji kawai, tare da ainihin kalmomin yaron." },
            { objective: "O4", q: "Me ya kamata kowane bayanin lura ya ƙunsa?", options: ["Kwanan wata, lokaci, wuri da harafin farko na sunan yaron", "Cikakken sunan yaron da adireshin gidansa", "Ra'ayinku game da iyayensa", "Hoton yaron da aka saka a intanet"], answer: 0, why: "Kwanan wata, lokaci, wuri da harafin farko suna ba da bayanin yanayi, tare da kare sirrin yaron." }
          ]
        },
        {
          title: "Shirya aikin koyo",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rubuta gajeren tsarin aiki da ya dace da shekarun yaro.",
          text: [
            "Yara ƙanana suna koyo ta hanyar wasa. Aiki mai kyau yana farawa daga abin da yara ke so da abin da suka kusa iya yi, don haka ɗan ƙalubale ne mai daɗi. Ƙara girman jiki da tunanin yara yana ɗaya daga cikin fannonin CDA takwas, haka kuma girman zamantakewa da ji (social and emotional), da gina dangantaka da iyalai.",
            "Gajeren tsarin aiki yana da sassa shida: rukunin shekaru, manufa (abin da yara za su yi), kayan aiki, matakai, bayanin tsaro, da yadda za ku san ya yi nasara. Misali ga yara masu shekara 3 da 4: Manufa: rarraba ganyaye bisa girma. Kayan aiki: ganyayen da aka tattara a waje, kwanduna uku. Matakai: nuna babban ganye, matsakaici da ƙarami; yara su rarraba; ku tambaya \"Wanne ne mafi girma?\" Tsaro: a wanke hannu bayan haka, a duba ko akwai sanduna masu kaifi. Yadda za ku sani: yara sun saka yawancin ganyaye a kwandon da ya dace, kuma suna amfani da kalmomin babba da ƙarami.",
            "Ku shirya don kowane yaro: ku ba da hanya mafi sauƙi da hanya mafi wuya ta yin aikin, ku yi amfani da kalmomi da hotuna, kuma ku gayyaci iyalai su aiko da ra'ayoyi daga gida. Ku tabbata kayan aiki manya ne ta yadda ba za su zama abin shaƙewa ga yara masu wannan shekaru ba."
          ],
          steps: ["Ku zaɓi rukunin shekaru da abu ɗaya da yara ke so.", "Ku rubuta manufa ɗaya da yara za su yi.", "Ku lissafa kayan aiki masu lafiya, na kyauta ko masu araha.", "Ku rubuta matakai 3 zuwa 5.", "Ku ƙara bayanin tsaro da yadda za ku san ya yi nasara.", "Ku ambaci fannin CDA da yake taimakawa."],
          words: [["Wanda ya dace da girma", "ya dace da abin da yaran wannan shekaru suka saba iya yi, da ɗan ƙalubale."], ["Fine motor", "ƙananan motsin hannaye da yatsu, kamar ɗauka ko yanka."], ["Gross motor", "manyan motsin jiki, kamar gudu, tsalle ko hawa."]],
          slides: [
            { title: "Yara suna koyo ta wasa", bullets: ["Ku fara daga abin da suke so", "Ɗan ƙalubale mai daɗi"] },
            { title: "Sassa shida na tsari", bullets: ["Shekaru, manufa, kayan aiki", "Matakai, bayanin tsaro", "Yadda za ku san ya yi nasara"] },
            { title: "Ku shirya don kowane yaro", bullets: ["Hanya mafi sauƙi da mafi wuya", "Kalmomi da hotuna", "Ra'ayoyi daga iyalai"] }
          ],
          tryIt: "Ku rubuta tsarin aiki na shafi ɗaya ga yara masu shekara 3 zuwa 5 ta amfani da abubuwan da kuke da su a gida (kofuna, safa, takarda, ganyaye). Ku saka duk sassa shida kuma ku ambaci fannin CDA da yake taimakawa.",
          youCanNow: "rubuta gajeren tsarin aiki mai lafiya da ya dace da shekarun yara kuma ya ambaci fannin CDA.",
          quickCheck: [
            { objective: "O5", q: "Wace manufa ce ta fi dacewa da yara masu shekara 3 da 4?", options: ["Rubuta cikakken sakin layi game da ganyaye", "Rarraba ganyaye zuwa manya da ƙanana", "Yin rabon lissafi mai tsawo da ganyaye", "Karanta littafin kimiyya shi kaɗai"], answer: 1, why: "Rarrabawa bisa girma ɗan ƙalubale ne na wasa ga yaran preschool." },
            { objective: "O5", q: "Tsarinku na yara masu shekara 3 yana amfani da ƙananan duwatsun ado (beads). Me ya ɓace a tsarin?", options: ["Jerin matakai mafi tsawo", "Manufa mafi wuya", "Bayanin tsaro: beads abin shaƙewa ne, don haka a yi amfani da manyan abubuwa", "Ƙarin beads"], answer: 2, why: "Kowane tsari yana buƙatar bayanin tsaro, kuma ƙananan abubuwa haɗarin shaƙewa ne ga yara ƙanana." }
          ]
        },
        {
          title: "Portfolio ɗinku, jarabawa, ziyara da tsarinku",
          objectives: ["O6"],
          minutes: 6,
          goal: "Yin tsarin shirin CDA mai ranaku daga horo zuwa Verification Visit.",
          text: [
            "Portfolio yana ɗauke da rubuce-rubucenku da kayan aikinku game da aikinku tare da yara da iyalai. Littafin Competency Standards na Council don wurin aikinku (don Preschool, bugu mai launin kore) yana bayyana daidai abin da ke shiga cikinsa. Ku sami littafin da wuri kuma ku cika portfolio a hankali yayin da kuke tafiya; dole ne a gama shi cikin wata 6 kafin ku nema.",
            "Ku yi tsari daga baya zuwa gaba, farawa daga ranakun da suke da muhimmanci. Sa'o'in aiki suna ƙirguwa ne kawai idan suna cikin shekara 3 kafin ku nema, don haka ku fara rajista mai sauƙi yanzu: kwanan wata, wuri, shekarun yara da sa'o'i, tare da sa hannun shugaba idan shirinku ya yarda. Ku zaɓi horon da ya ƙunshi duk fannoni takwas, kuma ku ajiye kowace takardar shaidar horo.",
            "Ku shirya don jarabawa ta hanyar maimaita fannoni takwas, yin atisayen tambayoyin yanayi kamar waɗanda ke cikin wannan kwas, da tsara cibiyar jarabawa ta Pearson VUE bayan kun sami sanarwar Ready to Schedule. Kafin Verification Visit, ku yi atisayen magana game da ƙarfinku da fanni ɗaya da kuke girma a ciki. Ku duba kowane kuɗi da mataki a cdacouncil.org, kuma ku tambayi game da tallafin karatu."
          ],
          steps: ["Ku rubuta kwanan watan yau da wurin aikinku.", "Ku zaɓi shirin horo da ranar da kuke nufi don gama sa'o'i 120.", "Ku fara rajistar sa'o'in aiki kuma ku sa ranar kai sa'o'in da wurin aikinku ke buƙata.", "Ku sa ranar fara portfolio da ranar nema cikin wata 6 daga gare ta.", "Ku ƙara watannin da kuke nufi don jarabawa da Verification Visit.", "Ku saka ranakun a kalandar wayarku ko a kalandar takarda."],
          words: [["Littafin Competency Standards", "littafin Council na wurin aikinku da ke bayyana portfolio da ƙa'idoji."], ["Sanarwar Ready to Schedule", "saƙon Council da ke cewa yanzu kuna iya tsara ranar jarabawa ko ziyara."], ["Rajistar sa'o'in aiki", "rubutun kwanaki da sa'o'in da kuka yi aiki tare da yara."]],
          slides: [
            { title: "Portfolio ɗinku", bullets: ["Ku sami littafin Competency Standards na wurin aikinku", "Ku cika shi a hankali yayin da kuke tafiya", "Ku gama cikin wata 6 kafin neman"] },
            { title: "Tsari daga baya zuwa gaba", bullets: ["Sa'o'in aiki: cikin shekara 3 kafin neman", "Horo: duk fannoni 8, ku ajiye takardun shaida", "Ku rubuta sa'o'i tun ranar farko"] },
            { title: "Jarabawa da ziyara", bullets: ["Ku maimaita fannoni 8", "Ku tsara Pearson VUE bayan Ready to Schedule", "Ku yi atisayen magana game da ƙarfinku"] }
          ],
          sources: [
            { name: "CDA Council: Hanyar Preschool", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: Hanyoyin malamai (duk wurare)", url: "https://www.cdacouncil.org/en/educator-pathways/" },
            { name: "Pearson VUE: Jarabawar CDA", url: "https://home.pearsonvue.com/cdaexam" }
          ],
          tryIt: "Aikin ƙarshe: ku yi tsarinku na shirin CDA da ranaku na gaske don horo, sa'o'in aiki, portfolio, nema, jarabawa da Verification Visit. Ku haɗa tsarin aikinku daga Darasi na 5 a matsayin abu na farko irin na portfolio.",
          youCanNow: "mayar da matakan CDA zuwa tsarinku mai ranaku, a shirye don farawa.",
          quickCheck: [
            { objective: "O6", q: "Kun yi aiki a preschool shekaru huɗu da suka wuce kuma kuna son nema wata mai zuwa. Me ya kamata ku duba?", options: ["Babu komai; duk tsofaffin sa'o'i suna ƙirguwa har abada", "Ko har yanzu kuna buƙatar takardar sakandare", "Ko jarabawa ba dole ba ce", "Ko sa'o'inku suna cikin shekara 3 kafin ku nema"], answer: 3, why: "Sa'o'in ƙwarewa dole ne su kasance cikin shekara 3 kafin ku aika buƙatarku." },
            { objective: "O6", q: "Yaushe ya kamata ku fara rajistar sa'o'in aikinku?", options: ["Yanzu, daga ranarku ta farko tare da yara", "Bayan kun ci jarabawa", "Sai bayan Verification Visit", "Ba sai ba; Council zai ƙirga muku"], answer: 0, why: "Rajista tun ranar farko tana sa sa'o'inku da ranakunku su bayyana sarai lokacin da kuka nema." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Koyarwa, lura da tsarinku na CDA",
        questions: [
          { objective: "O4", q: "Wanne ne bayanin lura na gaskiya (objective)?", options: ["\"A. malalaci ne wajen tattarawa.\"", "\"A. ya zauna a kan tabarma yana kallo yayin da wasu ke ajiye bulo.\"", "\"A. ba ya taɓa taimakawa.\"", "\"A. shi ne mafi rashin saurare.\""], answer: 1, why: "Yana bayyana abin da aka gani kawai, ba tare da laƙabi ba." },
          { objective: "O4", q: "Yaya za ku kare sirrin yaro a bayananku?", options: ["Ku saka bayanan a rukunin hira na iyaye", "Ku yi amfani da cikakken sunan yaron da adireshinsa", "Ku yi amfani da harafin farko kuma ku ajiye bayanai a cikin shirin", "Ku ba duk wanda ya tambaya"], answer: 2, why: "Harafin farko da ajiye bayanai a cikin shirin suna kare yaron." },
          { objective: "O5", q: "Wane sashe ne ke gaya muku ko aiki ya yi nasara?", options: ["Yadda za ku san ya yi nasara", "Jerin kayan aiki", "Rukunin shekaru", "Taken aikin"], answer: 0, why: "Faɗin yadda za ku san ya yi nasara yana ba ku damar duba manufar." },
          { objective: "O5", q: "Yaya za ku shirya ga yara masu ƙwarewa daban-daban a aiki ɗaya?", options: ["Ku ba kowa hanya mafi wuya", "Ku bar yaran da ke fama a waje", "Ku yi aikin sau ɗaya kawai a shekara", "Ku ba da hanya mafi sauƙi da mafi wuya ta yin aikin"], answer: 3, why: "Hanyoyi masu sauƙi da masu wuya suna bar kowane yaro ya shiga ya kuma ɗan ƙara ƙoƙari." },
          { objective: "O6", q: "Dole ne a shirya portfolio na CDA na Preschool cikin wane lokaci kafin nema?", options: ["Shekara 3", "Wata 6", "Mako 1", "Shekara 10"], answer: 1, why: "Shafin Council ya ce a shirya portfolio cikin wata 6 kafin ku aika buƙatarku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ilimin Yara Ƙanana da Shiri don Takardar Shaidar CDA",
    questions: [
      { objective: "O1", q: "Me wannan kwas yake yi muku game da CDA?", options: ["Yana ba ku CDA", "Yana maye gurbin jarabawa", "Yana shirya ku; Council ce ke bayar da takardar shaidar", "Ana ƙirga shi a matsayin Verification Visit ɗinku"], answer: 2, why: "Council for Professional Recognition ce ke bayar da CDA; wannan kwas yana shirya ku." },
      { objective: "O1", q: "Fannonin CDA nawa ne sa'o'in horonku 120 dole su ƙunsa?", options: ["Takwas, da aƙalla sa'o'i 10 kowanne", "Biyu", "Ɗaya kawai da kuka zaɓa", "Goma sha biyu, da sa'o'i 5 kowanne"], answer: 0, why: "Council yana neman aƙalla sa'o'i 10 a kowanne daga cikin fannoni takwas." },
      { objective: "O1", q: "A ina ake yin jarabawar CDA?", options: ["A cibiyar kula da yara ɗinku", "A cibiyar jarabawa ta Pearson VUE", "A ofishin motoci (DMV)", "Ta waya"], answer: 1, why: "Jarabawar CDA ana yin ta a kwamfuta a cibiyar jarabawa ta Pearson VUE." },
      { objective: "O1", q: "Me ke faruwa a lokacin Verification Visit?", options: ["Kuna biyan kuɗinku da tsabar kuɗi", "Kuna yin jarabawar rubutu", "Wani mahaifi yana ba da maki kan koyarwarku", "PD Specialist yana duba portfolio ɗinku, yana kallon ku kuna aiki, kuma yana tattaunawa da ku"], answer: 3, why: "PD Specialist yana duba portfolio, yana lura da ku tare da yara, kuma yana yin tattaunawa ta tunani." },
      { objective: "O2", q: "A ina za ku sami bayanan tuntuɓar hukumar lasisin kula da yara ta jiharku?", options: ["Rukunin kafofin sada zumunta", "Bayanan jihohi a childcare.gov", "Wani shafin blog kawai", "Jarabawar CDA"], answer: 1, why: "Childcare.gov yana haɗa ku da bayanan kowace jiha da yanki." },
      { objective: "O2", q: "Har tsawon wane lokaci ya kamata ku goge hannu da sabulu?", options: ["Aƙalla daƙiƙa 20", "Daƙiƙa 2", "Sai idan sun yi datti a gani", "Ku kurkura da ruwa kawai"], answer: 0, why: "Goge hannu da sabulu aƙalla daƙiƙa 20 yana cire ƙwayoyin cuta." },
      { objective: "O2", q: "Me ya dace a cikin gadon jariri don barci?", options: ["Matashin kai da bargo", "'Yan tsana", "Kariyar gefen gado (bumpers)", "Zanin gado mai matsewa kawai a kan katifa mai tauri da faɗi"], answer: 3, why: "Safe to Sleep ya ce babu komai a gadon jariri sai zanin gado mai matsewa a kan wuri mai tauri, faɗi kuma daidai." },
      { objective: "O2", q: "Ratio (yawan yara ga kowane babba) shi ne:", options: ["Iri ɗaya a ko'ina", "Kowane malami ne ke zaɓa", "Dokokin lasisin kowace jiha ne ke kafawa", "Iyaye ne ke kafawa"], answer: 2, why: "Jihohi ne ke kafa ratio, kuma ya bambanta da jiha da shekarun yara." },
      { objective: "O3", q: "Mai wajibcin kai rahoto dole ne ya kai rahoto idan:", options: ["Yana da hujja", "Yana da dalilin zargin cin zarafi ko sakaci", "Ya sami izini daga iyalin", "Ya gama bincike"], answer: 1, why: "Doka tana neman rahoto bisa zargi mai ma'ana; ba ku buƙatar hujja." },
      { objective: "O3", q: "Wanne ne daga cikin AIKINKU bayan yaro ya gaya muku an cutar da shi?", options: ["Ku rubuta ainihin kalmominsa, kwanan wata da lokaci", "Ku yi wa yaron tambaya sau da yawa", "Ku tunkari iyayensa", "Ku yi alƙawarin ɓoye sirri"], answer: 0, why: "Kuna rubuta gaskiyar abin da ya faru kuma ku kai rahoto; hukuma ce ke bincike." },
      { objective: "O3", q: "Ba ku san inda za ku kai rahoto a jiharku ba. Wa zai iya taimakawa?", options: ["Maƙwabci", "Abokan ajin yaron", "Childhelp National Child Abuse Hotline", "Babu kowa, don haka ku jira"], answer: 2, why: "Childhelp (1-800-422-4453) yana taimaka muku kai wa wurin da ya dace; ku kira 911 idan yaro yana cikin haɗari." },
      { objective: "O4", q: "Wace kalma BA ta dace a bayanin lura ba?", options: ["\"ya yi tafiya\"", "\"ya ce\"", "\"ya jera\"", "\"mai taurin kai\""], answer: 3, why: "\"Mai taurin kai\" laƙabi ne; bayanai suna ɗauke da ayyuka da kalmomi." },
      { objective: "O4", q: "Me yasa malamai suke rubuta bayanan lura?", options: ["Don hukunta yara", "Don sanin abin da kowane yaro zai iya yi da shirya matakai na gaba", "Don saka su a intanet", "Don kwatanta iyalan yara"], answer: 1, why: "Bayanai suna taimaka muku yin shiri da gaya wa iyalai gaskiyar abin da ya faru." },
      { objective: "O4", q: "Yaro ya ce, \"Na yi roket!\" Yaya za ku rubuta shi?", options: ["Ku rubuta ainihin kalmomin a cikin alamar zance", "Ku rubuta \"yaron yana da basirar ƙirƙira\"", "Ku tsallake shi", "Ku rubuta abin da kuke tunanin yana nufi"], answer: 0, why: "Rubuta ainihin kalmomi yana sa bayanin ya zama na gaskiya." },
      { objective: "O5", q: "Yara ƙanana sun fi koyo ta hanyar:", options: ["Dogon lacca", "Takardun aiki dukan yini", "Wasa da ɗan ƙalubale mai daɗi", "Zama shiru suna jira"], answer: 2, why: "Wasan da ke ɗan ƙalubalantar yara shi ne yadda yara ƙanana ke koyo." },
      { objective: "O5", q: "Wanne ne cikakken tsarin aiki?", options: ["\"A yi zane.\"", "\"Ganyaye.\"", "\"A ji daɗi.\"", "Shekaru, manufa, kayan aiki, matakai, bayanin tsaro, da yadda za ku san ya yi nasara"], answer: 3, why: "Duk sassa shida suna sa tsari ya zama wanda wani zai iya amfani da shi." },
      { objective: "O5", q: "Gudu, tsalle da hawa su ne:", options: ["Ƙwarewar gross motor (manyan motsi)", "Ƙwarewar fine motor (ƙananan motsi)", "Ƙwarewar karatu", "Ƙwarewar lissafi"], answer: 0, why: "Ƙwarewar gross motor tana amfani da manyan tsokokin jiki." },
      { objective: "O6", q: "Sa'o'in ƙwarewarku suna ƙirguwa ne kawai idan suna cikin:", options: ["Shekara 10 kafin neman", "Shekara 3 kafin neman", "Wata 1 kafin neman", "Kowane lokaci a rayuwarku"], answer: 1, why: "Shafin Council ya ce cikin shekara 3 kafin ku aika buƙatarku." },
      { objective: "O6", q: "Wane littafi ne ke bayyana abin da ke shiga portfolio ɗinku?", options: ["Kowace mujallar renon yara", "Littafin dokokin tuƙi na jiharku", "Littafin Competency Standards na Council don wurin aikinku", "Littafin girke-girke"], answer: 2, why: "Littafin Competency Standards na wurin aikinku yana da umarnin portfolio." },
      { objective: "O6", q: "Mene ne mataki na farko mafi kyau don tsarinku na CDA?", options: ["Ku tsara Verification Visit yau", "Ku biya kowane kuɗi kafin ku duba", "Ku jira har sai kun sami sa'o'i 480, sannan ku yi tunani", "Ku zaɓi wurin aikinku kuma ku rubuta ranaku don horo, sa'o'i, portfolio, jarabawa da ziyara"], answer: 3, why: "Tsari mai ranaku da ya fara da wurin aikinku yana ajiye ku cikin lokutan da aka ƙayyade." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      { name: "Sharuɗɗa daidai", objective: "O1", notYet: "Wasu matakai sun ɓace, ko sa'o'i da lokutan da aka ƙayyade ba daidai ba ne.", meets: "Ya lissafa wurin aiki, sa'o'in horo 120 a duk fannoni takwas, sa'o'in aiki, portfolio, jarabawa da ziyara daidai.", exceeds: "Ya kuma rubuta kuɗin yanzu, tallafin karatu da zai nema da ranar sabuntawa, duka an duba su a cdacouncil.org." },
      { name: "Tsari mai ranaku", objective: "O6", notYet: "Babu ranaku, ko ranakun da suka karya lokacin shekara 3 ko wata 6.", meets: "Ranaku na gaske ga kowane mataki da ke ajiye ƙwarewa cikin shekara 3, da portfolio cikin wata 6 kafin neman.", exceeds: "Ya haɗa da rajistar sa'o'in aiki da aka fara yau da tunatarwa a kalanda." },
      { name: "Tsarin aiki", objective: "O5", notYet: "Babu manufa, bayanin tsaro ko hanyar duba ko ya yi nasara.", meets: "Shekaru, manufa, kayan aiki, matakai, bayanin tsaro, yadda za a san ya yi nasara da fannin CDA.", exceeds: "Ya ƙara hanya mafi sauƙi da mafi wuya da hanya ɗaya ta sa iyalai su shiga." },
      { name: "Tunanin tsaro", objective: "O2", notYet: "Aikin ko tsarin bai kula da sa ido, wanke hannu ko abubuwan shaƙewa ba.", meets: "Bayanin tsaro ya ƙunshi sa ido da duk wani haɗari a cikin kayan aiki.", exceeds: "Ya ambaci wanda ke ba da lasisin kula da yara a jiharsa da horo ɗaya da yake buƙata." },
      { name: "A shirye don lura da kai rahoto", objective: "O4", notYet: "Bayanin misali yana amfani da laƙabi, ko ba a rubuta lambar kai rahoto ta jiha ba.", meets: "Ya haɗa da bayanin lura na gaskiya ɗaya da katin lambar kai rahoto na jiha.", exceeds: "Bayanin ya kai ga mataki na gaba bayyananne ga yaron, da aka nuna cewa ra'ayin mai koyo ne." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka gama kwas ɗin kuma suka ci aikin ƙarshe (rubric)",
      "Masu koyo da suka yi rajista a horon CDA da ya ƙunshi fannoni takwas cikin kwana 60",
      "Masu koyo da suka nemi CDA, da waɗanda aka ba su, cikin wata 12 zuwa 18 (binciken biyo baya)",
      "Masu koyo da aka ɗauka aiki ko aka yi wa ƙarin girma a aikin kula da yara, Head Start ko preschool cikin wata 6",
      "Shirye-shiryen abokan hulɗa sun ba da rahoton sabbin ma'aikata da suka san barci lafiya, sa ido da wajibcin kai rahoto tun ranar farko"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don buɗe cdacouncil.org da childcare.gov, ko kwafin waɗannan shafuka a takarda",
      "Takarda, alƙalami da kalanda ta takarda ko ta waya",
      "Abubuwan yau da kullum don tsarin aiki (kofuna, safa, takarda, ganyaye)",
      "Na zaɓi: littafin Competency Standards na Council don wurin aikin mai koyo",
      "Kusan minti 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Wannan kwas yana shirya masu koyo ne; ba a ƙirga shi a matsayin sa'o'in horon CDA sai idan an tsara shirinku don ba da su. Ku nuna wa masu koyo horon da aka amince da shi don sa'o'i 120.",
      "Kafin koyarwa, ku duba sharuɗɗan CDA na yanzu, kuɗaɗe da tallafin karatu a cdacouncil.org, da dokokin lasisi da na wajibcin kai rahoto na jiharku; suna canjawa.",
      "Atisayen lura: ku yi amfani da bidiyon yara ko yaron mai koyo da kansa da izinin iyaye. Kada ku taɓa tattara hotuna ko sunayen gaske na yaran wasu.",
      "Wajibcin kai rahoto yana iya tayar da tunani mai zafi. Ku ba da gargaɗi game da abin da ke ciki kafin Darasi na 3, ku ba da damar hutu, kuma ku raba bayanan wuraren tallafi na yankin.",
      "Masu koyo da ke da tarihin laifi: binciken tarihi yana cikin aikin kula da yara. Ku taimaka musu su nemo dokokin jiharsu kuma ku haɗa su da taimakon shari'a kyauta maimakon yin zato.",
      "Ku ba da maki ga aikin ƙarshe da rubric, kuma ku ba da ra'ayi kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci guda."
    ]
  }
};
