"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-ai-side-hustles.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-ai-side-hustles-ha",
  lang: "ha",
  translationOf: "youth-ai-side-hustles",
  category: "Youth",
  name: "AI don Kasuwanci da Ƙananan Sana'o'in Gefe (Matasa)",
  skills: "Nemo sana'ar gefe da ta dace da ku, Duba dokokin aikin matasa da samun izinin iyaye, Sanya farashin hidima, Yin takardar talla mai sauƙi da AI, Bin diddigin kuɗin da ke shigowa da fita, Kyautata wa abokan ciniki",
  outcome: "tsara ƙaramar sana'ar gefe mai aminci tare da izinin iyayenku ko mai kula da ku: zaɓar ra'ayi da ya dace da ƙwarewarku, sanya farashi mai adalci, yin takardar talla mai sauƙi da taimakon AI, da bin diddigin kowace dala da kuka samu da kuka kashe.",
  about: [
    "Wannan kwas ɗin na matasa ne masu shekaru kusan 13 zuwa 18 da ke son samun kuɗin kansu: kula da dabbobin gida, koyar da ƙananan yara, gyaran ciyawa, yin zane na musamman, gyaran bidiyo don ƙungiyoyin unguwa, ko sayar da kayan hannu.",
    "Za ku nemo ra'ayi da ya dace da ƙwarewarku da lokacinku, ku duba dokokin matasa masu aiki, ku sanya farashi, ku yi takardar talla, ku bi diddigin kuɗinku, ku kuma koyi yadda ake kyautata wa abokan ciniki don su dawo. AI zai zama abokin tsara muku a duk hanyar.",
    "Muhimmi: ku yi magana da iyayenku ko mai kula da ku kafin ku fara, kuma ku bar su su kula da duk manhajojin kuɗi, kwangiloli ko asusun sayarwa ta intanet da ke buƙatar babban mutum. Ku duba ƙa'idar shekaru ta kowane kayan AI, kuma makaranta ta zo farko. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\"."
  ],
  finalTask: "Ku yi tsarin sana'ar gefe mai shafi ɗaya ku nuna wa iyayenku ko mai kula da ku: hidimarku da wanda take gare shi, farashinku da dalilinsa, takardar talla da aka yi da taimakon AI (ba tare da adireshin gida ba), jadawalin kuɗi mai sauƙi mai layuka don kwanan wata, kuɗin shiga, kuɗin fita da bayani, da dokokin tsaro biyu da za ku bi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa masu shekaru kusan 13 zuwa 18 a Amurka da ke son samun kuɗin kansu ta hanyar kula da dabbobin gida, koyarwa, gyaran ciyawa, zane na musamman, gyaran bidiyo don ƙungiyoyin unguwa ko sayar da kayan hannu.",
    startingPoint: "Suna da ƙwarewa da abubuwan sha'awa da wasu za su iya biya a kansu, kuma wataƙila sun yi ƙananan ayyuka ga iyali ko maƙwabta. Kaɗan ne suka taɓa sanya farashi, yin takardar talla, bin diddigin kuɗin shiga da fita, ko duba dokokin aikin matasa, haraji da tsaro.",
    gap: "Matasan da suka fara sana'ar gefe ba tare da tsari ba suna iya sanya farashi ƙasa da yadda ya kamata, su rasa lissafin kuɗi, su manta da dokokin haraji da na aikin matasa, ko su jefa kansu cikin haɗari tare da baƙi. Tsari mai sauƙi da aka yi tare da iyaye ko mai kula da su yana taimaka musu su sami kuɗi lafiya, su koyi ƙwarewar kasuwanci ta gaske, kuma su ƙara ƙarfin gwiwa.",
    constraints: [
      "Iyaye ko mai kula da su suna amincewa da tsarin, kuma suna kula da manhajojin biyan kuɗi, kwangiloli da asusun sayarwa da ke buƙatar babban mutum",
      "Dokokin aikin matasa da na haraji sun bambanta a kowace jiha kuma suna canjawa; masu koyo suna duba ofishin ƙwadago na jiharsu da irs.gov",
      "Tsaro: babu adireshin gida a intanet ko a takardun talla; ana haɗuwa da sababbin abokan ciniki tare da babban mutum",
      "Sirri: babu lambobin banki ko kati a cikin kayan AI",
      "Makaranta ta zo farko; sa'o'i kaɗan ne kawai a kowane mako"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka yi la'akari da ƙwarewarku da sa'o'in da kuke da su da gaske", action: "zaɓar ra'ayin sana'ar gefe mai aminci da ya dace da jadawalinku, da tabbatar da cewa mutane za su biya kuɗi a kansa", standard: "ta hanyar tambayar aƙalla mutane uku" },
    { id: "O2", condition: "Tare da iyayenku ko mai kula da ku", action: "duba dokokin aikin matasa na tarayya da na jiha da dokar IRS kan harajin masu aiki da kansu, da yarda da dokokin tsaro", standard: "da aƙalla dokokin tsaro biyu da ku duka kuka yarda da su" },
    { id: "O3", condition: "Don hidima ɗaya", action: "sanya farashi mai adalci da ke biyan kuɗin da kuka kashe da lokacinku, kuma ya dace da farashin unguwa", standard: "an tabbatar da shi da mutane na gaske, ba da AI kaɗai ba" },
    { id: "O4", condition: "Ta amfani da AI da kayan zane kyauta", action: "yin takardar talla mai babban take, gajerun bayanai uku, farashi da kiran aiki", standard: "ba tare da adireshin gida ba, kuma da hanyar tuntuɓa da iyayenku ko mai kula da ku suka amince da ita" },
    { id: "O5", condition: "Don kowane aiki da kowane sayayya", action: "bin diddigin kuɗin shiga da kuɗin fita a jadawali mai layuka huɗu, da lissafa ribarku", standard: "kuna rubuta kowane abu a ranar da ya faru, kuma kuna duba shi kowane mako" },
    { id: "O6", condition: "Tare da kowane abokin ciniki", action: "tabbatar da bayanan kowane aiki a cikin saƙo mai ladabi, da magance matsaloli", standard: "kuna faɗa wa iyayenku ko mai kula da ku duk wani abu marar aminci ko wanda ba a biya ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓa da tsara sana'arku ta gefe",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nemo ra'ayin da ya dace da ku",
          minutes: 5,
          goal: "Zaɓi ra'ayin sana'ar gefe da ya dace da ƙwarewarku, lokacinku da unguwarku.",
          text: [
            "Sana'ar gefe mafi kyau tana amfani da abin da kuka riga kuka iya sosai, kuma tana magance matsalar wani da ke kusa da ku. Kun iya lissafi? Ku koyar da ƙananan yara. Kuna son dabbobi? Ku kula da dabbobin gida ko ku yawata da karnuka. Kun iya bidiyo? Ku gyara bidiyo don ƙungiyar wasanni ko coci na unguwa.",
            "Ku tambayi AI: \"Ina da shekaru 15, ina da sa'o'i 5 a mako, na iya zane da wasannin bidiyo, kuma ina zaune kusa da wurin shaƙatawa. Ka ba ni ra'ayoyin sana'ar gefe 10 masu aminci ga matashi.\" Sannan ku zaɓi ra'ayoyin da suka dace da lokacinku na gaske da jadawalin makaranta.",
            "Ku tabbatar akwai mutanen da ke son abin. Ku tambayi maƙwabta, abokan iyali ko abokan aji uku: \"Za ka biya kuɗi a kan wannan?\""
          ],
          steps: ["Ku rubuta ƙwarewarku da sa'o'in da kuke da su da gaske.", "Ku tambayi AI ra'ayoyi 10 masu aminci da suka dace.", "Ku goge ra'ayoyin da ba su dace da makaranta ko jadawalinku ba.", "Ku tambayi mutane uku ko za su biya kuɗi a kan ra'ayinku na farko."],
          words: [["Sana'ar gefe (side hustle)", "ƙaramar hanyar samun kuɗi a wajen makaranta ko babban aiki."], ["Abokin ciniki", "mutumin da ke biyan kuɗi a kan abin da kuke bayarwa."]],
          slides: [
            { title: "Ku fara da abin da kuka iya sosai", bullets: ["Lissafi: koyarwa", "Dabbobi: kula da dabbobin gida", "Bidiyo: gyara don ƙungiyoyin unguwa"] },
            { title: "Ku tambayi AI ra'ayoyi", bullets: ["Shekarunku, ƙwarewarku da sa'o'inku", "\"Mai aminci ga matashi\"", "Ku goge abin da ya ci karo da makaranta"] },
            { title: "Ku tabbatar mutane suna son sa", bullets: ["Ku tambayi mutane uku", "\"Za ka biya kuɗi a kan wannan?\""] }
          ],
          tryIt: "Ku rubuta ƙwarewarku da sa'o'in da kuke da su da gaske kowane mako. Ku tambayi AI ra'ayoyin sana'ar gefe 10 masu aminci, ku zaɓi na farko, sannan ku tambayi mutane uku ko za su biya kuɗi a kansa.",
          youCanNow: "zaɓar ra'ayin sana'ar gefe da ya dace da ku, kuma mutane suke so.",
          quickCheck: [
            { objective: "O1", q: "Me ke sa ra'ayin sana'ar gefe ya yi ƙarfi?", options: ["Ra'ayin da ya fi burgewa a intanet", "Yana amfani da ƙwarewar da kuke da ita kuma yana magance matsalar wani da ke kusa", "Wanda ke buƙatar sa'o'i mafi yawa", "Duk abin da aboki yake yi"], answer: 1, why: "Sana'ar gefe mafi kyau tana amfani da abin da kuka riga kuka iya kuma tana magance matsala ta kusa." },
            { objective: "O1", q: "Kuna son ra'ayinku, amma babu wanda kuka tambaya da zai biya kuɗi a kansa. Me za ku yi?", options: ["Ku fara duk da haka ku yi fata", "Ku ƙara farashi", "Ku ci gaba da tambaya har wani ya ce eh", "Ku gwada wani ra'ayi daga jerinku"], answer: 3, why: "Tambayar mutane tana nuna ko ana buƙatar abin; idan babu mai biya, ku zaɓi wani ra'ayi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dokoki, tsaro da iyayenku ko mai kula da ku",
          minutes: 5,
          goal: "Duba dokokin aikin matasa kuma ku yarda da dokokin tsaro tare da iyayenku ko mai kula da ku.",
          text: [
            "Wasu ayyuka suna da dokokin shekaru. A dokar tarayya (federal), kula da yara lokaci-lokaci (babysitting) da ƙananan ayyukan gida a gidajen mutane ba sa ƙarƙashin dokokin aikin yara, kuma aiki a kasuwancin da iyayenku suka mallaka gaba ɗaya yana da dokoki na musamman. Yawancin sauran ayyuka suna buƙatar ku kai shekaru 14 ko fiye, kuma babu wanda bai kai 18 ba da zai yi aiki mai haɗari. Jihohi suna iya samun dokoki masu tsauri fiye da haka, don haka ku duba ofishin ƙwadago na jiharku.",
            "Dokokin kuɗi: idan ribar ku ta aiki da kanku (net earnings) ta kai $400 ko fiye a shekara, IRS (hukumar haraji ta Amurka) ta ce dole ku cike takardar haraji ku biya harajin masu aiki da kansu, ko shekarunku nawa ne. Ku nemi iyayenku ko mai kula da ku su taimaka muku ajiye bayanan kuɗi, kuma ku duba irs.gov.",
            "Dokokin tsaro su ne mafi muhimmanci: iyayenku ko mai kula da ku su san inda kuke da wanda kuke yi wa aiki, ku haɗu da sababbin abokan ciniki tare da babban mutum, kada ku taɓa shiga gidan baƙo ku kaɗai, kuma kada ku taɓa saka adireshin gidanku a intanet. Yawancin manhajojin biyan kuɗi da shafukan sayarwa suna buƙatar babban mutum, don haka ku bar iyayenku ko mai kula da ku su kula da su."
          ],
          steps: ["Ku duba dokokin aikin matasa na tarayya da na jiharku.", "Ku nuna tsarinku ga iyayenku ko mai kula da ku.", "Ku yarda da dokokin tsaro tare.", "Ku bar babban mutum ya kula da manhajojin biyan kuɗi da asusun sayarwa."],
          words: [["Mai aiki da kansa (self-employed)", "wanda ke yi wa kansa aiki maimakon ya yi wa shugaba."], ["Riba ta gaske (net earnings)", "kuɗin da kuka samu, bayan an cire abin da kuka kashe don samun sa."]],
          sources: [
            { name: "Ma'aikatar Ƙwadago ta Amurka (U.S. Department of Labor), Fact Sheet #43: Dokokin aikin yara don ayyukan da ba na noma ba", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
            { name: "IRS: Harajin masu aiki da kansu (harajin Social Security da Medicare)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" }
          ],
          slides: [
            { title: "Dokokin aikin matasa", bullets: ["Kula da yara lokaci-lokaci da ayyukan gida: ba sa ƙarƙashin dokokin aikin yara na tarayya", "Yawancin sauran ayyuka: daga shekaru 14", "Babu aiki mai haɗari ƙasa da shekaru 18", "Ku duba dokokin jiharku"] },
            { title: "Dokokin kuɗi", bullets: ["IRS: ribar aiki da kai ta $400 ko fiye tana nufin cike takardar haraji", "Shekaru ba su da tasiri", "Ku ajiye bayanan kuɗi da taimakon iyaye"] },
            { title: "Tsaro farko", bullets: ["Babban mutum ya san inda kuke", "Ku haɗu da sababbin abokan ciniki tare da babban mutum", "Kada ku taɓa saka adireshin gidanku"] }
          ],
          tryIt: "Ku nemo dokokin aikin matasa na jiharku, kuma ku karanta shafin IRS kan harajin masu aiki da kansu tare da iyayenku ko mai kula da ku. Ku rubuta dokokin tsaro uku da ku duka kuka yarda da su.",
          youCanNow: "duba dokokin sana'arku ta gefe da kafa dokokin tsaro tare da iyayenku ko mai kula da ku.",
          quickCheck: [
            { objective: "O2", q: "A dokar tarayya, wane irin aiki ne babu wanda bai kai shekaru 18 ba da zai yi?", options: ["Koyarwa", "Kula da dabbobin gida", "Aiki mai haɗari", "Yin zane"], answer: 2, why: "Dokar tarayya ta hana duk wanda bai kai 18 ba yin aiki mai haɗari." },
            { objective: "O2", q: "Wani sabon abokin ciniki ya ce ku zo gidansa ku kaɗai don ku haɗu. Me za ku yi?", options: ["Ku haɗu da shi tare da iyayenku ko mai kula da ku, wanda ya san inda kuke", "Ku tafi ku kaɗai don ladabi", "Ku tura masa adireshin gidanku", "Ku ce ya fara biya"], answer: 0, why: "Ku haɗu da sababbin abokan ciniki tare da babban mutum, kuma kada ku taɓa shiga gidan baƙo ku kaɗai." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sanya farashi mai adalci",
          minutes: 5,
          goal: "Sanya farashi da ke biyan kuɗin da kuka kashe, ya biya ku yadda ya kamata, kuma ya dace da abokan cinikinku.",
          text: [
            "Don sanya farashi, ku duba abubuwa uku: abin da aikin yake kashe muku (kayan aiki, sufuri), abin da matasa irinku ko hidimomin unguwa ke karɓa, da darajar lokacinku.",
            "Ku nemi AI ya taimaka muku tunani, ba ya yanke shawara ba: \"Ina yawata da karnuka na minti 30. Ka taimake ni in yi tunani kan farashi mai adalci ga matashi a ƙaramin gari. Waɗanne tambayoyi ya kamata in yi?\" Sannan ku tambayi mutane na gaske abin da suke biya a unguwarku, domin AI bai san unguwarku ba.",
            "Ku rubuta farashinku a sarari, misali \"Yawata da kare, minti 30\" tare da adadin kuɗin. Ku sa shi mai sauƙi, kuma iri ɗaya ga kowa."
          ],
          steps: ["Ku haɗa kuɗin da kuke kashewa a kowane aiki.", "Ku tambayi mutane nawa irin wannan hidima ke kai wa a unguwarku.", "Ku yanke darajar lokacinku.", "Ku rubuta farashi ɗaya a sarari don kowace hidima."],
          words: [["Kuɗin da aka kashe (cost)", "abin da kuke kashewa don yin aikin."], ["Riba", "kuɗin da ya rage bayan kun biya kuɗin da kuka kashe."]],
          slides: [
            { title: "Abubuwa uku ke sanya farashinku", bullets: ["Kuɗin da kuke kashewa", "Abin da wasu ke karɓa a unguwa", "Darajar lokacinku"] },
            { title: "AI yana taimaka muku tunani", bullets: ["Ku tambayi waɗanne tambayoyi za ku yi la'akari da su", "Ku tambayi mutane na gaske farashin unguwa", "AI bai san unguwarku ba"] },
            { title: "Ku sa shi a sarari", bullets: ["Farashi ɗaya don kowace hidima", "Iri ɗaya ga kowa"] }
          ],
          tryIt: "Ku rubuta kuɗin da kuke kashewa a aiki ɗaya, ku tambayi mutane biyu nawa suke biya don abu makamancin haka, sannan ku rubuta farashi ɗaya a sarari don hidimarku.",
          youCanNow: "sanya farashi mai adalci kuma a sarari don sana'arku ta gefe.",
          quickCheck: [
            { objective: "O3", q: "Waɗanne abubuwa uku ne ke taimaka muku sanya farashi?", options: ["Kuɗin da kuke kashewa, farashin unguwa da darajar lokacinku", "Hasashen abokinku kaɗai", "Farashi mafi tsada da kuka samu a intanet", "Duk abin da AI ya faɗa"], answer: 0, why: "Farashi mai adalci yana biyan kuɗin da kuka kashe, ya dace da farashin unguwa, kuma ya biya ku lokacinku." },
            { objective: "O3", q: "AI ya ba da shawarar farashin yanke ciyawa. Me za ku yi kafin ku yi amfani da shi?", options: ["Ku yi amfani da shi nan take", "Ku ninka shi biyu", "Ku karɓi farashi daban daga kowane abokin ciniki", "Ku tambayi mutane na gaske abin da suke biya a unguwa"], answer: 3, why: "AI bai san unguwarku ba, don haka ku tabbatar da farashin unguwa da mutane na gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓa da tsara sana'arku ta gefe",
        questions: [
          { objective: "O1", q: "Ra'ayin sana'ar gefe mafi kyau yawanci:", options: ["Yana cinye dukkan lokacin makarantarku", "Duk abin da ya shahara a intanet ne", "Yana amfani da ƙwarewar da kuke da ita kuma yana magance matsala ta kusa", "Yana buƙatar kayan aiki masu tsada"], answer: 2, why: "Ƙwarewa tare da buƙata ta gaske suna kawo ra'ayi mai kyau." },
          { objective: "O1", q: "Ta yaya za ku tabbatar mutane suna son ra'ayinku?", options: ["Ku tambayi mutane kaɗan ko za su biya kuɗi a kansa", "Ku ɗauka cewa suna so", "Ku tambayi AI kaɗai", "Ku saka adireshinku a intanet"], answer: 0, why: "Amsoshin mutane na gaske suna nuna buƙata ta gaske." },
          { objective: "O2", q: "A cewar IRS, dokokin harajin masu aiki da kansu:", options: ["Suna aiki a lokacin rani kaɗai", "Suna aiki ga manya kaɗai", "Ba sa taɓa aiki ga matasa", "Suna aiki ko shekarunku nawa ne"], answer: 3, why: "IRS ta ce dokokin suna aiki ba tare da la'akari da shekaru ba." },
          { objective: "O2", q: "Wace ce dokar tsaro mai kyau?", options: ["Ku je gidan baƙo ku kaɗai", "Ku haɗu da sababbin abokan ciniki tare da babban mutum", "Ku saka adireshin gidanku a takardar talla", "Ku ɓoye shirye-shiryenku"], answer: 1, why: "Kasancewar babban mutum tare da ku yana kiyaye ku." },
          { objective: "O3", q: "Me yasa za ku tambayi mutane na gaske game da farashin unguwa?", options: ["AI koyaushe daidai yake", "AI bai san unguwarku ba", "Farashi iri ɗaya ne ko'ina", "Doka ce ta tilasta"], answer: 1, why: "Mutanen unguwa sun san farashin unguwa." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanar da sana'arku ta gefe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yin takardar talla mai sauƙi da AI",
          minutes: 5,
          goal: "Rubuta kuma ku tsara takardar talla mai sarari don hidimarku.",
          text: [
            "Takardar talla (flyer) tana faɗa wa mutane abin da kuke yi, nawa ne, da yadda za su tuntuɓe ku. AI zai iya taimakawa da kalmomin: \"Ka rubuta gajeriyar takardar talla mai fara'a don hidimar yawata da karnuka ta matashi. Ka haɗa babban take, gajerun bayanai 3 da kiran aiki.\"",
            "Ku tsara ta a kayan aiki kyauta kamar Canva, Google Docs ko Google Slides. Ku yi amfani da babban take ɗaya, gajerun layuka da launuka masu sauƙin karantawa.",
            "Tsaro: kada ku taɓa saka adireshin gidanku a takardar talla. Ku yi amfani da lambar waya ko imel na iyayenku ko mai kula da ku, ko hanyar tuntuɓa da suka amince da ita. Ku nemi izini kafin ku liƙa takardun talla a allunan shaguna, ɗakunan karatu ko cibiyoyin al'umma."
          ],
          steps: ["Ku tambayi AI babban take, gajerun bayanai 3 da kiran aiki.", "Ku gyara kalmomin don su yi kama da ku.", "Ku tsara ta a kayan aiki kyauta.", "Ku yi amfani da hanyar tuntuɓa da iyayenku ko mai kula da ku suka amince da ita, ba adireshinku ba."],
          words: [["Kiran aiki (call to action)", "layi da ke faɗa wa mutane abin da za su yi na gaba, kamar \"Ku tura tes don ɗaukar yawon kare\"."], ["Babban take (headline)", "babban rubutu a saman takardar."]],
          slides: [
            { title: "Takardar talla tana faɗin", bullets: ["Abin da kuke yi", "Nawa ne kuɗinsa", "Yadda za a tuntuɓe ku"] },
            { title: "AI yana rubutu, ku kuna gyarawa", bullets: ["Babban take, gajerun bayanai 3, kiran aiki", "Ku sa ta yi kama da ku", "Ku tsara ta a Canva ko Google Docs"] },
            { title: "Ku zauna lafiya", bullets: ["Babu adireshin gida", "Ku yi amfani da hanyar tuntuɓa da iyayenku suka amince da ita", "Ku nemi izini kafin ku liƙa takardun talla"] }
          ],
          tryIt: "Ku nemi AI ya rubuta kalmomin takardar talla don hidimarku. Ku gyara su don su yi kama da ku, ku tsara ta a kayan aiki kyauta, sannan ku ƙara hanyar tuntuɓa da iyayenku ko mai kula da ku suka amince da ita.",
          youCanNow: "yin takardar talla mai sarari kuma mai aminci don sana'arku ta gefe.",
          quickCheck: [
            { objective: "O4", q: "Mene ne babban take a takardar talla?", options: ["Lambar tuntuɓa", "Babban layi a sama da ke faɗin abin da kuke bayarwa", "Ƙaramin rubutu a ƙasa", "Jerin farashi"], answer: 1, why: "Takardar talla tana amfani da babban take ɗaya don mutane su ga abin da kuke bayarwa da sauri." },
            { objective: "O4", q: "Kalmomin takardar talla da AI ya rubuta suna da titin gidanku. Me za ku yi?", options: ["Ku bar shi don mutane su same ku", "Ku rage girman sunan titin", "Ku cire shi ku yi amfani da hanyar tuntuɓa da iyayenku ko mai kula da ku suka amince da ita", "Ku saka takardar a intanet kaɗai"], answer: 2, why: "Kada ku taɓa saka adireshin gidanku a takardar talla; ku yi amfani da hanyar tuntuɓa da aka amince da ita." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Bin diddigin kuɗin shiga da kuɗin fita",
          minutes: 5,
          goal: "Kafa jadawalin kuɗi mai sauƙi kuma ku yi amfani da shi don kowane aiki.",
          text: [
            "Masu kasuwanci suna bin diddigin kowace dala. Jadawalin kuɗi mai sauƙi yana da layuka huɗu: kwanan wata, kuɗin shiga, kuɗin fita, da bayani (wanda ya biya, abin da kuka saya).",
            "Ku yi shi a Google Sheets, Microsoft Excel, ko littafin rubutu na takarda. AI zai iya taimakawa: \"Ka yi tebur mai sauƙi na bin kuɗi don sana'ar kula da dabbobin gida ta matashi, tare da jimla a ƙasa.\" Kada ku taɓa rubuta lambobin banki ko kati a cikin AI.",
            "Ku duba shi kowane mako. Kuɗin shiga ban da kuɗin fita shi ne ribarku. Bayanan ku kuma suna taimaka wa iyayenku ko mai kula da ku da duk wata tambaya ta haraji."
          ],
          steps: ["Ku yi layuka huɗu: kwanan wata, kuɗin shiga, kuɗin fita, bayani.", "Ku rubuta kowane aiki da kowane sayayya a ranar da ya faru.", "Ku ƙara layin jimla.", "Ku duba shi kowane mako: kuɗin shiga ban da kuɗin fita shi ne riba."],
          words: [["Spreadsheet (takardar lissafi)", "tebur a kwamfuta, kamar Google Sheets ko Excel."], ["Riba", "kuɗin shiga ban da kuɗin fita."]],
          slides: [
            { title: "Ku bi diddigin kowace dala", bullets: ["Kwanan wata", "Kuɗin shiga", "Kuɗin fita", "Bayani"] },
            { title: "Kayan aiki kyauta", bullets: ["Google Sheets ko Excel", "Littafin rubutu na takarda ma yana aiki", "Kada ku taɓa saka lambobin banki a AI"] },
            { title: "Ku duba kowane mako", bullets: ["Kuɗin shiga ban da kuɗin fita = riba", "Bayanan kuɗi suna taimakawa da tambayoyin haraji"] }
          ],
          tryIt: "Ku yi jadawalin kuɗi mai layuka huɗu. Ku ƙara ayyuka biyu na gwaji ko na gaske da sayayya ɗaya, sannan ku lissafa ribarku.",
          youCanNow: "bin diddigin kuɗin sana'arku ta gefe da sanin ribarku.",
          quickCheck: [
            { objective: "O5", q: "Me ake rubutawa a layin \"kuɗin fita\"?", options: ["Kyautar kuɗin da aka ba ku (tip)", "Biyan kuɗi daga abokan ciniki", "Ribarku", "Abin da kuka kashe, kamar kayan aiki ko sufuri"], answer: 3, why: "Kuɗin fita shi ne abin da kuke kashewa; kuɗin shiga shi ne abin da abokan ciniki suke biyan ku." },
            { objective: "O5", q: "Kuna son AI ya taimaka muku gina jadawalinku. Me za ku bari a waje?", options: ["Lambobin bankinku ko katinku", "Sunayen layukan", "Kalmar \"jimla\"", "Irin kasuwancinku"], answer: 0, why: "Kada ku taɓa rubuta lambobin banki ko kati a cikin kayan AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kyautata wa abokan ciniki",
          minutes: 5,
          goal: "Rubuta saƙonni masu sarari da ladabi, kuma ku magance matsala da abokin ciniki.",
          text: [
            "Abokan ciniki suna dawowa, kuma suna faɗa wa abokansu, idan kuna zuwa a kan lokaci, kuna da ladabi da gaskiya. Ku tabbatar da kowane aiki: rana, lokaci, farashi da abin da za ku yi.",
            "AI zai iya taimaka muku rubuta saƙonni, tare da sanya iyayenku ko mai kula da ku a ciki: \"Ka rubuta saƙo mai ladabi da ke tabbatar da yawata da kare ranar Asabar ƙarfe 10 na safe a farashin da aka amince da shi.\" Idan wani abu ya lalace, ku ce kuyi haƙuri, ku bayyana abin da za ku yi don gyarawa, kuma ku cika alƙawarinku.",
            "Idan abokin ciniki ya yi rashin kunya, ya nemi ku yi abin da ba shi da aminci, ko bai biya ba, ku tsaya ku faɗa wa iyayenku ko mai kula da ku. Ba dole ne ku magance shi ku kaɗai ba."
          ],
          steps: ["Ku tabbatar da rana, lokaci, farashi da aiki kafin kowane aiki.", "Ku zo a kan lokaci kuma ku yi abin da kuka alƙawarta.", "Idan wani abu ya lalace: ku ce kuyi haƙuri, ku faɗi gyaranku, ku yi shi.", "Babu aminci ko ba a biya ba? Ku faɗa wa iyayenku ko mai kula da ku."],
          words: [["Tabbatarwa", "duba bayanai da yarda a kansu kafin aikin."], ["Ra'ayin abokin ciniki (review)", "abin da abokin ciniki ya faɗa game da aikinku."]],
          slides: [
            { title: "Abokan ciniki suna dawowa idan kuna", bullets: ["Zuwa a kan lokaci", "Da ladabi", "Da gaskiya"] },
            { title: "Ku tabbatar da kowane aiki", bullets: ["Rana da lokaci", "Farashi", "Abin da za ku yi"] },
            { title: "Idan abubuwa suka lalace", bullets: ["Ku ce kuyi haƙuri ku faɗi gyaranku", "Babu aminci ko ba a biya ba? Ku faɗa wa iyayenku ko mai kula da ku"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi tsarin sana'arku ta gefe mai shafi ɗaya: hidima da abokin ciniki, farashi da dalilinsa, takardar tallarku, jadawalin kuɗinku, da dokokin tsaro biyu. Ku nuna shi ga iyayenku ko mai kula da ku, ku tambaye su abin da za su canja.",
          youCanNow: "tsarawa da gudanar da ƙaramar sana'ar gefe mai aminci tare da AI a matsayin mataimaki.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata saƙon tabbatar da aiki ya ƙunsa?", options: ["Adireshin gidanku", "Rana, lokaci, farashi da aikin", "Jadawalin makarantarku", "Bayanan bankinku"], answer: 1, why: "Tabbatar da rana, lokaci, farashi da aiki yana hana ruɗani." },
            { objective: "O6", q: "Kun manta ku cika kwanon ruwan wata dabba. Me za ku yi?", options: ["Ku ɓoye shi", "Ku ɗora laifi a kan dabbar", "Ku ce kuyi haƙuri, ku bayyana gyaranku ku yi shi", "Ku daina amsa saƙonni"], answer: 2, why: "Amincewa da kuskure da gyara shi yana kiyaye amincewar abokan ciniki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanar da sana'arku ta gefe",
        questions: [
          { objective: "O4", q: "Me bai kamata ya kasance a takardar tallarku ba?", options: ["Farashinku", "Kiran aiki", "Abin da kuke yi", "Adireshin gidanku"], answer: 3, why: "Adireshin gidanku yana jefa lafiyarku cikin haɗari." },
          { objective: "O4", q: "Mene ne kiran aiki?", options: ["Layi da ke faɗa wa mutane abin da za su yi na gaba", "Ƙarar kiran waya", "Wani irin farashi", "Dokar makaranta"], answer: 0, why: "Yana faɗa wa abokan ciniki yadda za su ɗauke ku aiki." },
          { objective: "O5", q: "Jadawalin kuɗi mai sauƙi yana da layuka don:", options: ["Kalmomin sirri", "Waƙoƙin da kuka fi so kaɗai", "Kwanan wata, kuɗin shiga, kuɗin fita da bayani", "Sunayen abokai kaɗai"], answer: 2, why: "Waɗannan layuka huɗu suna bin diddigin kowace dala." },
          { objective: "O5", q: "Riba ita ce:", options: ["Farashinku", "Duk kuɗin da kuka karɓa", "Kuɗin da kuka kashe", "Kuɗin shiga ban da kuɗin fita"], answer: 3, why: "Riba ita ce abin da ya rage bayan kuɗin da aka kashe." },
          { objective: "O6", q: "Abokin ciniki ya nemi ku yi abin da ba shi da aminci. Ku:", options: ["Yi shi don ku riƙe abokin cinikin", "Yi gardama a intanet", "Tsaya ku faɗa wa iyayenku ko mai kula da ku", "Yi watsi da shi ku ci gaba da aiki"], answer: 2, why: "Lafiyarku ta fi kowane aiki muhimmanci." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Kasuwanci da Ƙananan Sana'o'in Gefe (Matasa)",
    questions: [
      { objective: "O1", q: "Sana'ar gefe ita ce:", options: ["Wani salon rawa", "Ƙaramar hanyar samun kuɗi a wajen makaranta ko babban aiki", "Ƙungiyar makaranta", "Wani irin jarabawa"], answer: 1, why: "Ƙarin aiki ne da kuke yi a lokacinku." },
      { objective: "O1", q: "Prompt mai kyau ga AI don ra'ayoyin sana'ar gefe ya haɗa da:", options: ["Shekarunku, ƙwarewarku da sa'o'inku, da \"mai aminci ga matashi\"", "Adireshin gidanku", "Lambar bankinku", "Babu komai"], answer: 0, why: "Waɗannan bayanai suna kawo ra'ayoyin da suka dace da ku." },
      { objective: "O1", q: "Wani ra'ayi ya ci karo da jadawalin makarantarku. Ya kamata ku:", options: ["Yi shi duk da haka", "Ƙi zuwa makaranta", "Goge shi ku zaɓi wani", "Nemi AI ya yi muku aikin gida"], answer: 2, why: "Makaranta ta zo farko." },
      { objective: "O2", q: "A dokar tarayya, kula da yara lokaci-lokaci (babysitting):", options: ["Ba ya ƙarƙashin dokokin aikin yara", "Yana buƙatar ku kai shekaru 18", "An hana matasa yin sa", "Yana buƙatar lasisi"], answer: 0, why: "Ma'aikatar Ƙwadago ta ce kula da yara lokaci-lokaci ba ya ƙarƙashin dokokin tarayya." },
      { objective: "O2", q: "Dokar aikin matasa ta jiharku ta fi dokar tarayya tsauri. Kuna bin:", options: ["Dokar abokinku", "Dokar da ta fi sauƙi", "Babu doka", "Dokar da ta fi tsauri"], answer: 3, why: "Idan duka biyun suna aiki, mai tsauri ce ake bi." },
      { objective: "O2", q: "IRS ta ce dole ku cike harajin masu aiki da kansu idan ribarku ta gaske ta kai:", options: ["Fiye da $1 miliyan", "$400 ko fiye", "Kowane adadi fiye da $1", "Ba taɓa ba, ga matasa"], answer: 1, why: "Iyakar IRS ita ce $400 na riba ta gaske, a kowane shekaru." },
      { objective: "O2", q: "Wane ne ya kamata ya kula da manhajojin biyan kuɗi da asusun sayarwa da ke buƙatar babban mutum?", options: ["Baƙo", "Iyayenku ko mai kula da ku", "Babban ɗan uwan abokinku", "Babu kowa"], answer: 1, why: "Da yawa suna buƙatar babban mutum, kuma iyayenku ko mai kula da ku ya kamata su san game da kuɗinku." },
      { objective: "O3", q: "Farashinku ya kamata ya biya:", options: ["Kuɗin da abokinku ya kashe", "Abin da AI ya faɗa kaɗai", "Babu komai", "Kuɗin da kuka kashe da lokacinku"], answer: 3, why: "Farashi mai adalci yana biyan kuɗin da kuka kashe da lokacinku." },
      { objective: "O5", q: "Riba tana nufin:", options: ["Kuɗin da ya rage bayan kuɗin da aka kashe", "Duk kuɗin da kuka karɓa", "Kuɗaɗen da kuka kashe", "Kyautar kuɗi (tip)"], answer: 0, why: "Riba = kuɗin shiga ban da kuɗin fita." },
      { objective: "O3", q: "Me yasa za ku riƙe farashi ɗaya a sarari don kowace hidima?", options: ["Saɓa doka ne idan ba haka ba", "Yana ruɗa abokan ciniki", "Yana da sauƙi kuma adalci ne ga kowa", "AI ya tilasta haka"], answer: 2, why: "Farashi a sarari kuma iri ɗaya yana gina amincewa." },
      { objective: "O4", q: "Idan AI ya rubuta takardar tallarku, ya kamata ku:", options: ["Bar AI ya zaɓi farashinku", "Saka ta ba tare da karantawa ba", "Ƙara adireshin gidanku", "Gyara ta don ta yi kama da ku"], answer: 3, why: "Muryarku ce ke sa takardar talla ta zama taku." },
      { objective: "O4", q: "Wace hanyar tuntuɓa ce ta dace a takardar tallar matashi?", options: ["Jadawalin makarantarku", "Adireshin gidanku", "Hanyar tuntuɓa da iyayenku ko mai kula da ku suka amince da ita", "Lambar buɗe akwatin ajiyarku na makaranta"], answer: 2, why: "Hanyoyin tuntuɓa da aka amince da su suna kiyaye ku." },
      { objective: "O4", q: "Kafin ku liƙa takardun talla a shago ko ɗakin karatu ya kamata ku:", options: ["Liƙa su ko'ina", "Nemi izini", "Rufe sauran takardun talla", "Ƙi neman izini"], answer: 1, why: "Wurare suna da dokoki game da allunansu." },
      { objective: "O5", q: "Wane kayan aiki kyauta ne zai iya ɗaukar jadawalin kuɗi?", options: ["Google Sheets", "Manhajar waƙa", "Na'urar wasan bidiyo", "Matatar hoto (photo filter)"], answer: 0, why: "Takardun lissafi kamar Google Sheets kyauta ne." },
      { objective: "O5", q: "Me bai kamata ku taɓa rubutawa a cikin kayan AI ba?", options: ["\"Ka rubuta takardar talla\"", "\"Ka yi tebur na bin kuɗi\"", "Lambobin banki ko kati", "\"Ka ba ni ra'ayoyi\""], answer: 2, why: "Lambobin banki da kati na sirri ne." },
      { objective: "O5", q: "Sau nawa ya kamata ku duba jadawalinku?", options: ["Kowane mako", "Sau ɗaya a shekara", "Ba taɓa ba", "Sai lokacin da kuka yi asarar kuɗi kaɗai"], answer: 0, why: "Duba kowane mako yana nuna yadda kuke tafiya." },
      { objective: "O6", q: "Kafin kowane aiki ya kamata ku tabbatar da:", options: ["Abincin ciye-ciyen da kuka fi so", "Farashi kaɗai", "Babu komai", "Rana, lokaci, farashi da aiki"], answer: 3, why: "Tabbatarwa tana hana abubuwan ba-zata." },
      { objective: "O6", q: "Kun makara zuwa wani aiki. Amsa mafi kyau ita ce:", options: ["Ɗora laifi a kan abokin cinikin", "Ku ce kuyi haƙuri, ku bayyana gyaranku, ku cika alƙawarinku", "Yin watsi da shi", "Ƙara farashi"], answer: 1, why: "Amincewa da kuskure yana riƙe abokan ciniki." },
      { objective: "O6", q: "Abokin ciniki bai biya ba. Ya kamata ku:", options: ["Je gidansa ku kaɗai don neman kuɗi", "Faɗa wa iyayenku ko mai kula da ku", "Rubuta game da shi a intanet", "Ci gaba da aiki kyauta"], answer: 1, why: "Babban mutum zai iya taimakawa a magance shi lafiya." },
      { objective: "O2", q: "Wane ne ya kamata ya ga tsarin sana'arku ta gefe kafin ku fara?", options: ["AI kaɗai", "Babu kowa", "Baƙi a intanet kaɗai", "Iyayenku ko mai kula da ku"], answer: 3, why: "Iyaye ko mai kula da ku suna taimakawa da tsaro, dokoki da kuɗi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 3, 5, 7, 8, 11, 13, 16, 17, 19]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Hidima da abokin ciniki", objective: "O1", notYet: "Hidimar ko abokin cinikin ba su da sarari.", meets: "Yana faɗin mece ce hidimar, wa take gare shi, kuma aƙalla mutane uku sun ce za su biya.", exceeds: "Yana kuma nuna cewa ra'ayin ya dace da sa'o'in mai koyo na gaske a mako." },
      { name: "Farashi", objective: "O3", notYet: "Babu farashi, ko babu dalilinsa.", meets: "Farashi ɗaya a sarari da ke biyan kuɗin da aka kashe da lokaci, an tabbatar da shi da mutanen unguwa.", exceeds: "Yana nuna kuɗin da ake kashewa a kowane aiki da yadda farashin ya yi daidai da zaɓuɓɓukan unguwa." },
      { name: "Takardar talla", objective: "O4", notYet: "Takardar tana da adireshin gida, ko babu farashi ko hanyar tuntuɓa.", meets: "Babban take, gajerun bayanai, farashi da hanyar tuntuɓa da aka amince da ita, ba tare da adireshin gida ba.", exceeds: "An gyara kalmomin don su yi kama da mai koyo, kuma zanen yana da sauƙin karantawa." },
      { name: "Jadawalin kuɗi", objective: "O5", notYet: "Akwai layukan da suka ɓace, ko babu hanyar ganin riba.", meets: "Kwanan wata, kuɗin shiga, kuɗin fita da bayani, tare da jimla da ke nuna riba.", exceeds: "Yana da abubuwa na gaske ko na atisaye, da bayani kan lokacin da za a duba shi kowane mako." },
      { name: "Dokokin tsaro", objective: "O2", notYet: "Dokokin tsaro ƙasa da biyu, ko iyaye ko mai kula ba su duba ba.", meets: "Dokokin tsaro biyu da aka yarda da su tare da iyaye ko mai kula, wanda ya ga tsarin.", exceeds: "Yana kuma ambaton dokokin aikin matasa da na haraji da suka shafe shi, an duba su a shafukan hukuma." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka fara sana'arsu ta gefe tare da izinin iyaye ko mai kula cikin kwanaki 60",
      "Masu koyo da suka riƙe jadawalin kuɗi aƙalla na makonni huɗu",
      "Masu koyo da suka ba da rahoton samun kuɗi da abokan ciniki masu dawowa a binciken biyo baya na kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, kwamfutar makaranta ko kwamfutar ɗakin karatu mai intanet",
      "Mataimakin AI kyauta da aka yarda mai koyo ya yi amfani da shi, da Canva, Google Docs ko Google Slides",
      "Google Sheets, Excel ko littafin rubutu na takarda don jadawalin kuɗi",
      "Iyaye ko mai kula da za su duba tsarin",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku aika takarda gida don iyaye da masu kula su san cewa kwas ɗin yana neman su duba tsarin kuma su kula da duk asusun da ke buƙatar babban mutum.",
      "Ku duba takardun talla kafin masu koyo su liƙa ko su buga su, don tabbatar da cewa babu adireshin gida ko hanyar tuntuɓa ta sirri a ciki.",
      "Ku tunatar da masu koyo cewa dokokin aikin matasa da na haraji suna canjawa; ku sa su duba ofishin ƙwadago na jiharsu da irs.gov tare da babban mutum.",
      "Kada ku taɓa neman masu koyo su rubuta lambobin banki ko kati a cikin kayan AI; jadawalan atisaye za su iya amfani da adadin kuɗi na ƙirƙira.",
      "Ku yi ɗan bikin nuna tsare-tsare, ku ba da maki ga kowane tsari da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
