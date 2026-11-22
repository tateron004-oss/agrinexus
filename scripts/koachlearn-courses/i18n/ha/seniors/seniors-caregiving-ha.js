"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-caregiving.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-caregiving-ha",
  lang: "ha",
  translationOf: "seniors-caregiving",
  category: "Seniors and Technology",
  name: "Kula da Mara Lafiya: Kula da Wanda Kuke So",
  skills: "Fahimtar buƙatun wanda kuke kula da shi, Shirya littafin kulawa, Sarrafa magunguna da ganawa da likita, Neman taimakon masu kulawa a yankinku, Raba aiki da iyali, Kula da kanku a matsayin mai kulawa",
  outcome: "shirya kulawar wanda kuke so da littafin kulawa da jerin magunguna, sarrafa ganawa da likita da magunguna lafiya tare da likitansa da mai sayar da magani (pharmacist), samun taimako a yankinku ta Eldercare Locator, raba ayyuka da iyali, da kare lafiyarku da shirin kula da kai.",
  about: [
    "Mutane da yawa suna zama masu kulawa ba tare da shiri ba: mata da ke taimakon mijinta bayan bugun jini (stroke), namiji da ke kai mahaifiyarsa wurin likita, kaka da ke renon jikoki tana kuma kula da 'yar'uwarta, maƙwabci da ke ziyara kowace rana. Kulawa tana iya zama abu mai daraja, amma kuma tana iya gajiyarwa da sa kaɗaici.",
    "Wannan kwas ɗin na tsofaffi ne da ke kula da mata ko miji, abokin rayuwa, aboki ko dangi, da kuma 'ya'ya da jikoki manya da ke kula da wani babba a iyali. Za ku tsara abubuwa, ku sarrafa magunguna da ganawa da likita lafiya, ku sami taimako a yankinku, ku raba aikin, kuma ku kula da kanku.",
    "Wannan kwas yana koyar da dabaru ne, ba shawarar likita ko ta shari'a ba. Ku tambayi likita, ma'aikaciyar jinya (nurse) ko mai sayar da magani na wanda kuke kula da shi game da lafiya, kuma ku tambayi ƙwararre game da doka ko kuɗi. Kowane darasi yana ɗaukar kusan minti biyar tare da aikin \"Gwada yanzu\", ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi littafin kulawa na farko don wanda kuke so (na gaske ko na atisaye): muhimman lambobin tuntuɓa, jerin magunguna, ganawa da likita masu zuwa, da tambayoyin ganawa ta gaba. Sannan ku ƙara shirin taimako na shafi ɗaya: wuri ɗaya a yankinku da kuka tuntuɓa ko za ku tuntuɓa (kamar Eldercare Locator), ayyuka biyu takamaimai da za ku roƙi iyali ko abokai su ɗauka, da shirin kula da kanku mai hutu ɗaya kowane mako.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a Amurka da ke kula da iyaye da suka tsufa, mata ko miji, ko dangi. Sau da yawa su ma tsofaffi ne, wasu kuma kakanni ne ko 'yan iyali da ke raba kulawar. Da yawa suna aiki ko suna da nasu matsalolin lafiya.",
    startingPoint: "Sun riga suna taimakawa da kai mutum wurare, abinci ko magunguna, sau da yawa ba tare da shiri ba. Da yawa suna riƙe bayanai a kansu ko a ƙananan takardu, ba su san hidimomin masu kulawa a yankinsu ba, kuma suna yin yawancin aikin su kaɗai.",
    gap: "Masu kulawa da ba su da tsari ko da ke su kaɗai suna fuskantar haɗarin kuskure a magunguna, rasa ganawa da likita, da gajiya mai tsanani (burnout). Littafin kulawa, kyawawan halaye game da magunguna da ganawa, hidimomin yanki, raba ayyuka da shirin kula da kai suna sa kulawa ta fi aminci ga wanda ake kula da shi, kuma mai kulawa zai iya ci gaba da ita.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da matakai manya masu sauƙi",
      "Na'urori: takarda da fayil sun isa; waya ko kwamfuta tana taimakawa don kalanda na tare da neman hidimomi",
      "Lokaci: masu kulawa suna da aiki sosai; kusan minti 5 a kowane darasi, a lokacin da ya dace da kulawa",
      "Lafiya: canja magani sai ta likita ko mai sayar da magani kaɗai; ana buƙatar izinin wanda ake kula da shi kafin a raba bayanan lafiyarsa",
      "Sirri da walwala: babu cikakkun lambobin Medicare, Social Security ko na banki a AI ko imel; taimakon gaggawa ta 988"
    ],
    prerequisites: "Babu. Kwas ɗin \"Tushen Ilimin Medicare\" zai taimaka a tare da wannan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka duba rana ta yau da kullum tare da wanda kuke so", action: "jera abin da zai iya yi da kansa da inda yake buƙatar taimako, cikin rukunai uku: kulawar yau da kullum, kulawar lafiya, da kuɗi da takardu", standard: "bayan kun tambaye shi abin da ya fi muhimmanci a gare shi" },
    { id: "O2", condition: "Ta amfani da fayil ko takarda ta sirri a wayarku ko kwamfutarku", action: "fara littafin kulawa mai lambobin tuntuɓa, cututtuka, abubuwan da ba sa jituwa da jiki (allergies), inshora da inda ake ajiye takardun shari'a", standard: "ba tare da rubuta cikakkun lambobin sirri a kayan AI ko imel ba" },
    { id: "O3", condition: "Idan kuna da magungunan wanda kuke so da ganawarsa ta gaba da likita", action: "riƙe cikakken jerin magunguna da rubuta tambayoyi ga likita ko mai sayar da magani", standard: "ba tare da taɓa dakatarwa, farawa ko canja magani ba sai kun tambaye su" },
    { id: "O4", condition: "Idan kuna buƙatar taimako a yankinku", action: "tuntuɓar Eldercare Locator ko wata hidima don samun tallafin masu kulawa kusa da ku", standard: "kuna rubuta abin da kuka koya a littafin kulawa" },
    { id: "O5", condition: "Idan kuna da jerin buƙatunku", action: "roƙon iyali da abokai su ɗauki ayyuka takamaimai masu lokaci, da saka su a kalanda na tare", standard: "wasu sun ɗauki aƙalla ayyuka biyu" },
    { id: "O6", condition: "A matsayinku na mai kulawa", action: "duba kanku don alamun damuwar mai kulawa da shirya hutu na yau da kullum", standard: "da hutu ɗaya kowane mako da wanda zai maye gurbinku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara abubuwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fahimtar buƙatun wanda kuke so",
          minutes: 5,
          goal: "Jera abin da wanda kuke so zai iya yi da kansa da inda yake buƙatar taimako.",
          text: [
            "Masu kulawa suna taimakawa da abubuwa da yawa. MedlinePlus (shafin lafiya na gwamnatin Amurka) ya lissafa wanka, abinci da magunguna; aikin gida, girki da aike; kai mutum wurin ganawa; zama tare da shi da tallafin zuciya; daidaita kulawar likita; da taimako wajen yanke shawara kan lafiya da kuɗi.",
            "Ku fara da duba rana ta yau da kullum. Me wanda kuke so zai iya yi da kansa? Me yake ganin yana da wuya: wanka, sa tufafi, girki, tuna magunguna, biyan kuɗaɗe, zuwa wurin likita? Ku tambaye shi, ku saurara. Mutane suna son su riƙe 'yancin kansu da ikon faɗin ra'ayinsu kan rayuwarsu gwargwadon yadda za su iya.",
            "Ku rubuta buƙatun cikin rukunai uku: kulawar yau da kullum, kulawar lafiya, da kuɗi da takardu. Wannan jeri yana nuna muku inda aka fi buƙatar taimako da abin da za ku roƙi wasu su yi. Buƙatu suna canjawa da lokaci, don haka ku sake duba jerin bayan 'yan watanni ko bayan an kwanta a asibiti."
          ],
          steps: ["Ku bi rana ta yau da kullum tare da wanda kuke so.", "Ku jera abin da zai iya yi da kansa.", "Ku jera inda yake buƙatar taimako: kulawar yau da kullum, kulawar lafiya, kuɗi da takardu.", "Ku tambaye shi abin da ya fi muhimmanci a gare shi.", "Ku sake duba jerin bayan 'yan watanni ko bayan an kwanta a asibiti."],
          words: [["Mai kulawa (caregiver)", "mutumin da ke taimakon wanda yake buƙatar tallafi saboda tsufa, rashin lafiya ko nakasa; sau da yawa ɗan iyali ne ko aboki."], ["'Yancin kai", "iya yin abubuwa da yanke shawara da kanku."]],
          slides: [
            { title: "Abin da masu kulawa suke taimakawa da shi", bullets: ["Wanka, abinci da magunguna", "Aikin gida, aike da kai mutum wurare", "Zama tare, daidaita kulawa da yanke shawara"] },
            { title: "Ku duba rana ta yau da kullum", bullets: ["Me zai iya yi da kansa?", "Me yake da wuya a gare shi?", "Ku tambaye shi ku saurara"] },
            { title: "Rukunai uku na buƙatu", bullets: ["Kulawar yau da kullum", "Kulawar lafiya", "Kuɗi da takardu"] }
          ],
          sources: [{ name: "MedlinePlus: Caregivers", url: "https://medlineplus.gov/caregivers.html" }],
          tryIt: "Ku rubuta jerin buƙatun wanda kuke so (ko wanda za ku iya kula da shi wata rana) a layuka uku: kulawar yau da kullum, kulawar lafiya, kuɗi da takardu. Ku zagaye buƙatu biyu mafi girma.",
          youCanNow: "jera buƙatun wanda kuke so a kulawar yau da kullum, kulawar lafiya da takardu, tare da girmama 'yancin kansa.",
          quickCheck: [
            { objective: "O1", q: "Wadanne rukunai uku kwas ɗin yake amfani da su don raba buƙatun wanda ake so?", options: ["Safe, rana da dare", "Kulawar yau da kullum, kulawar lafiya, da kuɗi da takardu", "Iyali, abokai da maƙwabta", "Abinci, tufafi da gida"], answer: 1, why: "Raba buƙatu zuwa kulawar yau da kullum, kulawar lafiya, da kuɗi da takardu yana nuna inda aka fi buƙatar taimako." },
            { objective: "O1", q: "Mahaifinku har yanzu yana iya dafa abinci mai sauƙi amma yana mantawa da ƙwayoyin magani. Yaya za ku tsara taimako?", options: ["Ku karɓe dukkan girkinsa ma", "Kada ku yi komai sai matsala ta faru", "Ku taimaka da magunguna, ku bar shi ya ci gaba da girki, kamar yadda yake so", "Ku fitar da shi daga gidansa nan take"], answer: 2, why: "Mutane suna son su riƙe 'yancin kansu gwargwadon yadda za su iya, don haka ku mai da hankali kan taimako inda ake buƙata." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shirya littafin kulawa",
          minutes: 5,
          goal: "Fara littafin kulawa da ke riƙe muhimman bayanai a wuri ɗaya.",
          text: [
            "CDC (hukumar kare cututtuka ta Amurka) ta ce shirin kulawa zai iya taimakawa masu kulawa su riƙe muhimman bayanai a wuri ɗaya. Ku kira shi littafin kulawa: fayil, jaka ko takarda a wayarku ko kwamfutarku da ku, 'yan iyali masu taimako da mai kulawa na madadi za su iya amfani da shi.",
            "Abin da ke cikinsa: lambobin tuntuɓa (likitoci, kantin magani, iyali, maƙwabta, lambobin gaggawa); jerin magunguna; cututtuka da abubuwan da ba sa jituwa da jiki (allergies); bayanan inshora (Medicare, Medicaid, VA ko inshora mai zaman kansa); kalandar ganawa da likita; da bayanin kowace ziyara. Ku ƙara kwafin duk wata takardar shari'a da yake da ita, kamar power of attorney (takardar wakilci) ko advance directive (takardar burin kulawa), da inda ake ajiye na asali.",
            "Ku kiyaye shi lafiya kuma a sirri. Idan kuna ajiye shi a kwamfuta ko waya, ku yi amfani da kalmar sirri (password). Kada ku rubuta cikakkun lambobin Medicare, Social Security ko na banki a kayan AI ko imel. Jika da ya iya fasaha zai iya taimakawa wajen shirya kalanda na tare ko takarda mai sauƙi, da izinin wanda kuke kula da shi."
          ],
          steps: ["Ku zaɓi takarda (fayil) ko na zamani (takarda a waya ko kwamfuta).", "Ku ƙara lambobin tuntuɓa, cututtuka, allergies da inshora.", "Ku ƙara jerin magunguna da kalandar ganawa.", "Ku rubuta inda ake ajiye takardun shari'a.", "Ku nuna wa mutum ɗaya na madadi inda yake."],
          words: [["Shirin kulawa (care plan)", "rubutaccen bayanin buƙatun mutum, kulawarsa da muhimman bayanansa."], ["Power of attorney (takardar wakilci)", "takardar shari'a da ke bar wani ya yi aiki a madadin wani, misali kan kuɗi ko shawarwarin lafiya."], ["Advance directive (takardar burin kulawa)", "takardar shari'a da ke faɗin irin kulawar likita da mutum yake so idan ba zai iya magana da kansa ba."]],
          slides: [
            { title: "Wuri ɗaya don komai", bullets: ["Fayil, jaka ko takarda a waya", "Mai sauƙi ga masu taimako da masu kulawa na madadi"] },
            { title: "Abin da ke cikinsa", bullets: ["Lambobin tuntuɓa da na gaggawa", "Cututtuka, allergies, inshora", "Jerin magunguna da ganawa", "Inda ake ajiye takardun shari'a"] },
            { title: "Ku kiyaye shi lafiya", bullets: ["Kalmar sirri a kan kwafin zamani", "Babu cikakkun lambobin shaida ko banki a AI ko imel", "Ku nuna wa mutum ɗaya na madadi inda yake"] }
          ],
          sources: [{ name: "CDC: Caregiving", url: "https://www.cdc.gov/caregiving/index.html" }],
          tryIt: "Ku fara littafin kulawarku yau: a takarda ko a wayarku, ku rubuta shafin lambobin tuntuɓa (likita, kantin magani, 'yan iyali biyu, lambar gaggawa) da shafin allergies da cututtuka.",
          youCanNow: "shirya littafin kulawa da ke riƙe lambobin tuntuɓa, bayanan lafiya da ganawa a wuri ɗaya.",
          quickCheck: [
            { objective: "O2", q: "Mene ne littafin kulawa?", options: ["Littafin da kuke rubuta yadda kuke ji", "Littafin karatun likitanci", "Takardar kuɗi daga likita", "Wuri ɗaya na muhimman bayanan kulawa da ku da masu taimako za ku iya amfani da shi"], answer: 3, why: "Littafin kulawa yana riƙe lambobin tuntuɓa, magunguna, inshora da ganawa a wuri ɗaya." },
            { objective: "O2", q: "Kuna ajiye littafin kulawa a wayarku. Me za ku yi don kiyaye sirrinsa?", options: ["Ku yi amfani da kalmar sirri, kuma kada ku saka cikakkun lambobin Medicare da banki a AI ko imel", "Ku saka shi a kafofin sada zumunta don iyali", "Ku tura shi ta imel ga duk wanda kuka sani", "Ku liƙa dukkansa a mataimakin AI"], answer: 0, why: "Ku kiyaye shi da kalmar sirri, kuma kada ku rubuta cikakkun lambobin sirri a kayan AI ko imel." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sarrafa magunguna da ganawa da likita",
          minutes: 6,
          goal: "Riƙe jerin magunguna da shirya tambayoyi don ganawar wanda kuke so ta gaba.",
          text: [
            "Kuskure a magunguna yana yawan faruwa idan mutum yana shan magunguna da yawa. MedlinePlus ya ba da shawarar riƙe jerin kowane magani da yawan da ake sha (dose) da lokacin shansa, har da magungunan da ake saya ba tare da takardar likita ba, bitamin, ƙarin abinci (supplements) da magungunan ganye, tare da allergies, da kai shi kowace ziyara. Ku karanta takardar jikin magani kafin kowane sha. Akwatin raba ƙwayoyin magani na mako (pill organizer) zai iya taimakawa. Kada ku taɓa dakatarwa, farawa ko canja magani ba tare da tambayar likita ko mai sayar da magani ba.",
            "Mai sayar da magani (pharmacist) ƙwararre ne kyauta. Ku tambaya: Me yasa ake buƙatar wannan? Wadanne illoli (side effects) zan lura da su? Yana da aminci tare da sauran magunguna? Akwai abinci ko barasa da za a guje wa? Amfani da kantin magani ɗaya don komai yana taimaka musu su gano matsaloli.",
            "Don ganawa da likita, ku kai littafin kulawa, ku rubuta tambayoyi kafin lokaci, ku rubuta bayani, sannan ku maimaita shirin don ku tabbata kun fahimta. Ofisoshin likitoci yawanci suna buƙatar izinin wanda kuke kula da shi kafin su raba bayanan lafiyarsa da ku; ku tambayi ofishin wace takarda suke amfani da ita. Don tambayoyin Medicare, ku kira 1-800-MEDICARE (1-800-633-4227) ku tambayi yadda wanda kuke so zai bar ku ku yi magana a madadinsa, ko ku sami taimako kyauta fuska da fuska daga SHIP na jiharku (shiphelp.org)."
          ],
          steps: ["Ku sabunta jerin magunguna: suna, yawan sha, lokaci, abin da yake magani.", "Ku yi amfani da kantin magani ɗaya, ku tambayi mai sayar da magani tambayoyinku.", "Ku yi amfani da akwatin ƙwayoyi idan yana taimakawa; ku karanta takardar jiki kowane lokaci.", "Kafin ziyara, ku rubuta tambayoyi; a lokacinta, ku rubuta bayani ku maimaita shirin.", "Ku tambayi ofishin wace takardar izini ce za ta bar ku ku sami bayanai."],
          words: [["Akwatin ƙwayoyin magani (pill organizer)", "akwati mai wurare na kowace rana (da lokaci) don raba ƙwayoyi kafin lokaci."], ["SHIP", "State Health Insurance Assistance Program (shirin taimakon inshorar lafiya na jiha): taimako kyauta a yankinku kan tambayoyin Medicare."]],
          slides: [
            { title: "Jerin magunguna", bullets: ["Kowane magani, bitamin, supplement, ganye", "Yawan sha, lokaci da abin da yake magani", "Allergies; ku kai shi kowace ziyara"] },
            { title: "Kyawawan halaye", bullets: ["Ku karanta takardar jiki kowane lokaci", "Akwatin ƙwayoyi idan yana taimakawa", "Kada ku taɓa canja magani ba tare da tambaya ba"] },
            { title: "Ku tambayi mai sayar da magani", bullets: ["Me yasa ake buƙatarsa? Illoli?", "Yana da aminci tare da sauran magunguna?", "Ku yi amfani da kantin magani ɗaya don komai"] },
            { title: "Ganawa da likita", bullets: ["Ku kai littafin da tambayoyi", "Ku rubuta bayani, ku maimaita shirin", "Ku tambayi wace takardar izini ofishin yake amfani da ita"] }
          ],
          sources: [
            { name: "MedlinePlus: Medication Errors", url: "https://medlineplus.gov/medicationerrors.html" },
            { name: "Medicare.gov: Talk to Someone", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" }
          ],
          tryIt: "Ku ƙara jerin magunguna a littafin kulawarku: suna, yawan sha, lokaci, abin da yake magani. Sannan ku rubuta tambayoyi uku don ganawar wanda kuke so ta gaba ko don mai sayar da magani.",
          youCanNow: "riƙe ingantaccen jerin magunguna, aiki tare da mai sayar da magani, da shiryawa don ganawa da likita a matsayin mai kulawa.",
          quickCheck: [
            { objective: "O3", q: "Me ya kamata ya kasance a jerin magunguna?", options: ["Ƙwayoyin da likita ya rubuta kawai", "Magungunan da ake sha da safe kawai", "Kowane magani, bitamin, supplement da ganye, da yawan sha da lokaci, tare da allergies", "Mafi tsada kawai"], answer: 2, why: "Cikakken jeri yana taimakawa likita da mai sayar da magani su gano matsaloli." },
            { objective: "O3", q: "Likita ya yi bayanin sabon shiri cikin sauri. Yaya za ku tabbata kun fahimta?", options: ["Ku gyaɗa kai ku tafi", "Ku maimaita shirin da kalmominku ku rubuta bayani", "Ku tambayi AI daga baya a maimakon haka", "Ku yi tsammani a gida"], answer: 1, why: "Maimaita shirin yana tabbatar da cewa kun fahimce shi daidai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara abubuwa",
        questions: [
          { objective: "O1", q: "Mene ne mataki na farko mai kyau don fahimtar buƙatun wanda kuke so?", options: ["Ku karɓe komai nan take", "Ku yanke shawara ba tare da tambayarsa ba", "Ku bi rana ta yau da kullum ku tambaye shi abin da ke da wuya", "Ku jira sai matsala ta faru"], answer: 2, why: "Duba rana ta yau da kullum da sauraro suna nuna inda ake buƙatar taimako da gaske." },
          { objective: "O2", q: "Littafin kulawa don me ne?", options: ["Riƙe muhimman bayanai a wuri ɗaya", "Rubuta labarin rayuwa da ku kaɗai za ku karanta", "Ajiye kalmomin sirri na kowane asusu", "Rabawa a kafofin sada zumunta"], answer: 0, why: "Shirin kulawa ko littafin kulawa yana haɗa lambobin tuntuɓa, magunguna da ganawa tare." },
          { objective: "O2", q: "Wanne ya kamata ya kasance a littafin kulawa?", options: ["Lambobin PIN na banki", "Jerin magunguna da lambobin likitoci", "Kowace rasidin da aka taɓa samu", "Babu komai na zamani ko na takarda"], answer: 1, why: "Lambobin tuntuɓa, magunguna, cututtuka, inshora da ganawa ne ke cikinsa." },
          { objective: "O3", q: "Wanda kuke so yana son ya daina wani magani domin yana ɓata masa ciki. Me za ku yi?", options: ["Ku dakatar da shi nan take", "Ku ninka sha na gaba", "Ku ba wani rabinsa", "Ku tambayi likita ko mai sayar da magani tukuna"], answer: 3, why: "Kada ku taɓa dakatarwa ko canja magani ba tare da tambaya tukuna ba." },
          { objective: "O3", q: "Ofishin likita ba zai raba bayanai da ku ba. Me ya kamata ku tambaya?", options: ["Wace takardar izini wanda kuke so zai iya sa hannu", "Adireshin gidan likitan", "Ganin fayilolin sauran marasa lafiya", "Babu komai; ku haƙura"], answer: 0, why: "Ofisoshi yawanci suna buƙatar izinin mara lafiyar; ku tambayi wace takarda suke amfani da ita." }
        ]
      }
    },
    {
      name: "Babi na 2: Samun taimako da kula da kanku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Neman taimako a yankinku",
          minutes: 5,
          goal: "Nemo hidimomin masu kulawa a yankinku ta amfani da Eldercare Locator.",
          text: [
            "Ba dole ne ku nemo komai da kanku ba. Eldercare Locator, hidimar jama'a ta Administration for Community Living (ACL), tana haɗa tsofaffi da masu kulawa da hidimomi a yankinsu. Ku kira ko ku tura tes zuwa 1-800-677-1116, ku yi hira ta intanet, ko ku nema bisa wurinku a eldercare.acl.gov. Za ta iya haɗa ku da Area Agency on Aging (ofishin tsofaffi) na yankinku.",
            "Ta National Family Caregiver Support Program (shirin ƙasa na tallafawa masu kulawa na iyali), jihohi da ofisoshin yanki suna bayar da: bayani game da hidimomi, taimako wajen samun waɗannan hidimomin, shawarwari (counseling), ƙungiyoyin tallafi da horon masu kulawa, respite care (hutu gare ku), da wasu ƙarin hidimomi. Yana ɗaukar manyan masu kulawa na iyali da ke kula da mutane masu shekara 60 zuwa sama, mutane na kowane shekaru masu cutar Alzheimer ko makamantanta, da wasu tsofaffin dangi da ke renon yara ko kula da manya masu nakasa. Ku tambayi abin da ake da shi kusa da ku.",
            "Kuna kula da tsohon soja (veteran)? Shirin VA Caregiver Support Program yana taimakon masu kula da tsofaffin sojoji da suka yi rajista a kulawar lafiya ta VA. Ku kira layin Caregiver Support Line a 1-855-260-3274, Litinin zuwa Juma'a, ƙarfe 8 na safe zuwa 8 na dare agogon Eastern. Don tambayoyin Medicare, SHIP na jiharku yana bayar da taimako kyauta a yankinku."
          ],
          steps: ["Ku kira ko ku tura tes zuwa Eldercare Locator: 1-800-677-1116, ko ku nema a eldercare.acl.gov.", "Ku nemi Area Agency on Aging na yankinku.", "Ku tambayi game da horon masu kulawa, ƙungiyoyin tallafi, respite care da abinci.", "Idan kuna kula da tsohon soja: ku kira 1-855-260-3274.", "Ku rubuta abin da kuka koya a littafin kulawarku."],
          words: [["Area Agency on Aging", "ofishi a yankinku da ke taimakon tsofaffi da masu kulawa su sami hidimomi."], ["Respite care (kulawar hutu)", "kulawa na ɗan lokaci ga wanda kuke so don ku sami hutu."], ["ACL", "Administration for Community Living, wani ɓangare na ma'aikatar lafiya da hidimomin jama'a ta Amurka (HHS)."]],
          slides: [
            { title: "Eldercare Locator", bullets: ["Ku kira ko ku tura tes zuwa 1-800-677-1116", "Ko ku nema a eldercare.acl.gov", "Tana haɗa ku da Area Agency on Aging na yankinku"] },
            { title: "Taimako ga masu kulawa na iyali", bullets: ["Bayani da taimako wajen samun hidimomi", "Shawarwari, ƙungiyoyin tallafi, horo", "Respite care: hutu gare ku"] },
            { title: "Kula da tsohon soja", bullets: ["VA Caregiver Support Line: 1-855-260-3274", "Litinin zuwa Juma'a, ƙarfe 8 na safe zuwa 8 na dare (Eastern)"] }
          ],
          sources: [
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" },
            { name: "ACL: National Family Caregiver Support Program", url: "https://www.acl.gov/programs/support-caregivers/national-family-caregiver-support-program" },
            { name: "VA Caregiver Support Program", url: "https://www.caregiver.va.gov/" }
          ],
          tryIt: "Ku je eldercare.acl.gov (ko ku kira ko ku tura tes zuwa 1-800-677-1116) ku nemo Area Agency on Aging na yankinku. Ku rubuta sunansa, lambar wayarsa da hidima ɗaya da kuke son tambaya a kai a littafin kulawarku.",
          youCanNow: "samun taimakon masu kulawa a yankinku ta Eldercare Locator da Area Agency on Aging na yankinku, da sanin inda masu kula da tsofaffin sojoji za su kira.",
          quickCheck: [
            { objective: "O4", q: "Mene ne respite care?", options: ["Kulawa na ɗan lokaci don mai kulawa ya sami hutu", "Wani nau'in magani", "Kwanciya a asibiti", "Takardar shari'a"], answer: 0, why: "Respite care tana ba mai kulawa hutu, kuma ofisoshin yanki na iya bayar da ita." },
            { objective: "O4", q: "Kuna buƙatar abinci da ƙungiyar tallafi kusa da ku amma ba ku san inda za ku fara ba. Me za ku yi?", options: ["Ku nema a kafofin sada zumunta", "Ku jira sai matsala ta faru", "Ku roƙi likita ya nemo komai", "Ku kira ko ku tura tes zuwa Eldercare Locator a 1-800-677-1116"], answer: 3, why: "Eldercare Locator tana haɗa ku da hidimomin yankinku, har da Area Agency on Aging na yankinku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Raba nauyin da iyali da abokai",
          minutes: 5,
          goal: "Roƙi iyali da abokai taimako takamaimai da shirya jadawali na tare.",
          text: [
            "Masu kulawa da yawa suna yin komai su kaɗai domin ba sa son su dami kowa. Mutane sau da yawa suna son taimakawa amma ba su san yadda ba. \"Ku faɗa mini idan kuna buƙatar wani abu\" ba kasafai yake zama taimako ba; roƙo takamaimai ne yake zama taimako.",
            "CDC ta ba da shawarar ku faɗi aiki takamaimai ko wani lokaci da kuke son a taimaka, da amfani da kalanda na tare a intanet don taimakon yau da kullum. MedlinePlus ya ba da shawarar ku bar masu taimako su zaɓi ayyukan da suka ji daɗin yi. Misalai: \"Za ka iya kai Mama ganawarta ta ranar Alhamis?\" \"Za ki iya kiran Baba kowace Lahadi da yamma?\" \"Za ka iya sayo kayan abinci kowace Asabar?\" 'Yan iyali da ke nesa za su iya kula da biyan kuɗaɗe, kiran kamfanin inshora, bincike ko kiran bidiyo.",
            "Ɗan taron iyali, fuska da fuska ko ta bidiyo, yana taimakawa kowa ya ga jerin buƙatun ya zaɓi ayyuka. Ku saka wanda kuke so idan zai iya. Idan kuna aiki, ku tambayi ofishin ma'aikata (human resources) na wurin aikinku game da hutu: a ƙarƙashin dokar tarayya ta Family and Medical Leave Act, ma'aikatan da suka cancanta za su iya ɗaukar har zuwa makonni 12 na hutu ba tare da albashi ba a shekara don kula da wasu 'yan iyali."
          ],
          steps: ["Ku ɗauki jerin buƙatunku daga Darasi na 1.", "Ku mayar da buƙatu zuwa ayyuka takamaimai masu lokaci.", "Ku yi ɗan taron iyali (fuska da fuska ko ta bidiyo).", "Ku bar kowane mai taimako ya zaɓi ayyuka; ku saka su a kalanda na tare.", "Kuna aiki? Ku tambayi HR game da hutun iyali."],
          words: [["Kalanda na tare (shared calendar)", "kalanda a intanet da mutane da yawa za su iya gani su ƙara abubuwa a ciki."], ["FMLA", "dokar tarayya ta Family and Medical Leave Act, da ke bar ma'aikatan da suka cancanta su ɗauki hutu ba tare da albashi ba don kula da iyali."]],
          slides: [
            { title: "Ku roƙi abu takamaimai", bullets: ["Ba \"ku faɗa mini idan kuna buƙatar wani abu\" ba", "\"Za ka iya kai Mama ranar Alhamis?\""] },
            { title: "Hanyoyin da mutane za su iya taimakawa", bullets: ["Kai mutum wurare, abinci, cefane, ziyara", "Daga nesa: kuɗaɗe, kiran waya, bincike, kiran bidiyo"] },
            { title: "Ku haɗa kowa tare", bullets: ["Ɗan taron iyali, fuska da fuska ko ta bidiyo", "Masu taimako suna zaɓar ayyuka", "Ku saka su a kalanda na tare"] },
            { title: "Idan kuna aiki", bullets: ["Ku tambayi HR game da hutun iyali (FMLA)", "Har zuwa makonni 12 ba tare da albashi ba ga ma'aikatan da suka cancanta"] }
          ],
          sources: [
            { name: "CDC: Caring for Yourself When Caring for Another", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "MedlinePlus: Caregiver Health", url: "https://medlineplus.gov/caregiverhealth.html" }
          ],
          tryIt: "Ku rubuta roƙo biyu takamaimai (aiki, rana da lokaci) ku tura su ga mutane biyu, ko ku rubuta wanda za ku roƙa. Misali: \"Za ka iya kai Baba ganawarsa ta ido ranar 14 ga wata da ƙarfe 10 na safe?\"",
          youCanNow: "mayar da buƙatu zuwa roƙo takamaimai da raba ayyukan kulawa da iyali da abokai.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za a yi amfani da kalanda na tare don taimakon iyali?", options: ["Kowa zai iya gani ya yi rajista don ayyuka", "Yana maye gurbin littafin kulawa", "Yana biyan masu taimako", "Yana tura magunguna"], answer: 0, why: "Kalanda na tare yana bar masu taimako su ga buƙatu su zaɓi ayyuka." },
            { objective: "O5", q: "Ɗan'uwanku ya ce, \"Ka faɗa mini idan kana buƙatar wani abu.\" Wace amsa ce mafi kyau?", options: ["\"Lafiya lau nake.\"", "\"Komai.\"", "\"Za ka iya kai Mama cefane kowace Asabar da safe?\"", "Kada ku ce komai"], answer: 2, why: "Aiki takamaimai mai lokaci yana da yiwuwar zama taimako na gaske sosai." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kula da kanku a matsayin mai kulawa",
          minutes: 5,
          goal: "Gane alamun damuwar mai kulawa da shirya hutu na yau da kullum.",
          text: [
            "CDC ta faɗa a sauƙaƙe: don ku zama mai kulawa nagari, dole ne ku kula da kanku. MedlinePlus ya lissafa alamun damuwar mai kulawa: jin nauyi ya yi yawa ko jin kaɗaici, yin barci da yawa ko kaɗan, babban canjin nauyin jiki, gajiya kullum, rashin sha'awar abubuwan da kuke jin daɗinsu a da, saurin fushi ko haushi, yawan damuwa ko baƙin ciki, yawan ciwon kai ko ciwon jiki, da ƙara shan taba ko barasa.",
            "Abin da ke taimakawa: hutu na yau da kullum (ko da 'yan sa'o'i na respite a mako zai iya taimakawa), roƙon wasu taimako, ƙungiyar tallafin masu kulawa (fuska da fuska ko ta intanet), ci gaba da hulɗa da abokai, da kula da lafiyarku da motsa jiki, abinci mai kyau, barci da duba lafiyarku. Ku faɗa wa likitanku cewa ku mai kulawa ne; yana iya sanin ƙungiyoyin tallafi.",
            "Idan kuna jin babu fata ko nauyi ya yi yawa kuma bai sauƙaƙa ba, ku yi magana da likitanku ko mai ba da shawara (counselor). A lokacin gaggawa a Amurka, ku kira ko ku tura tes zuwa 988; tsofaffin sojoji da iyalansu za su iya danna 1. Yanzu kun shirya don kammala littafin kulawarku da shirin taimako."
          ],
          steps: ["Ku duba kanku da alamun damuwar mai kulawa.", "Ku shirya hutu ɗaya na yau da kullum kowane mako, da wanda zai maye gurbinku.", "Ku nemo ƙungiyar tallafin masu kulawa (ku tambayi Area Agency on Aging na yankinku).", "Ku ci gaba da ziyartar likitanku, ku faɗa masa cewa ku mai kulawa ne.", "Gaggawa: ku kira ko ku tura tes zuwa 988."],
          words: [["Damuwar mai kulawa (caregiver stress)", "wahalar jiki da ta zuciya da ke zuwa daga kula da wani."], ["Ƙungiyar tallafi (support group)", "taron mutane masu irin wannan hali da ke haɗuwa don raba abubuwan da suka fuskanta da shawarwari."]],
          slides: [
            { title: "Alamun damuwar mai kulawa", bullets: ["Nauyi ya yi yawa, kaɗaici, gajiya kullum", "Canjin barci ko nauyin jiki", "Saurin fushi, baƙin ciki, damuwa, ciwon jiki", "Rashin sha'awa; ƙara shan taba ko barasa"] },
            { title: "Abin da ke taimakawa", bullets: ["Hutu na yau da kullum; ko da 'yan sa'o'i a mako", "Ku roƙi taimako; ku shiga ƙungiyar tallafi", "Barcinku, abincinku, motsa jiki, duba lafiya"] },
            { title: "Ku sami tallafi", bullets: ["Ku faɗa wa likitanku cewa ku mai kulawa ne", "Gaggawa: ku kira ko ku tura tes zuwa 988; tsofaffin sojoji su danna 1"] }
          ],
          sources: [
            { name: "MedlinePlus: Caregiver Health", url: "https://medlineplus.gov/caregiverhealth.html" },
            { name: "CDC: Caring for Yourself When Caring for Another", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Aikin ƙarshe: ku kammala littafin kulawarku na farko (lambobin tuntuɓa, jerin magunguna, ganawa da tambayoyi) ku ƙara shirin taimako na shafi ɗaya: wuri ɗaya a yankinku da kuka tuntuɓa ko za ku tuntuɓa, ayyuka biyu takamaimai don iyali ko abokai, da shirin kula da kanku mai hutu ɗaya kowane mako.",
          youCanNow: "gane damuwar mai kulawa, shirya hutu na yau da kullum, da ci gaba da kula da wanda kuke so ba tare da rasa lafiyarku ba.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne alamar damuwar mai kulawa?", options: ["Barci mai kyau da jin hutu", "Jin nauyi ya yi yawa, kaɗaici ko gajiya kullum", "Jin daɗin abubuwan sha'awarku", "Ganin abokai sau da yawa"], answer: 1, why: "Jin nauyi ya yi yawa ko kaɗaici da gajiya kullum alamun damuwar mai kulawa ne." },
            { objective: "O6", q: "Ba ku sami hutu ba tsawon watanni. Mene ne mataki na farko mai kyau?", options: ["Ku ci gaba har sai kun kamu da rashin lafiya", "Ku daina kula da wanda kuke so", "Ku ɓoye yadda kuke ji", "Ku shirya hutu ɗaya na yau da kullum kowane mako ku roƙi wani ya maye gurbinku"], answer: 3, why: "Ko da 'yan sa'o'i na respite a mako zai iya taimakawa, tare da wani da zai maye gurbinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Samun taimako da kula da kanku",
        questions: [
          { objective: "O4", q: "Mene ne lambar wayar Eldercare Locator (kira ko tes)?", options: ["911", "1-800-677-1116", "411", "988"], answer: 1, why: "Eldercare Locator tana haɗa ku da hidimomin yankinku a 1-800-677-1116." },
          { objective: "O4", q: "Mene ne respite care?", options: ["Wani nau'in magani", "Takardar kuɗin asibiti", "Kulawa na ɗan lokaci don mai kulawa ya sami hutu", "Takardar shari'a"], answer: 2, why: "Respite care tana ba mai kulawa lokacin hutu." },
          { objective: "O5", q: "Wane roƙo ne ya fi yiwuwar samun taimako na gaske?", options: ["\"Ku faɗa mini idan kuna buƙatar wani abu.\"", "\"Ku taimaka wani lokaci.\"", "Rashin cewa komai", "\"Za ka iya kai Mama ganawarta ta ranar Alhamis ƙarfe 2 na rana?\""], answer: 3, why: "Ayyuka takamaimai masu lokaci suna da sauƙin amincewa da su." },
          { objective: "O6", q: "Wanne ne alamar damuwar mai kulawa?", options: ["Gajiya kullum da rashin sha'awar abubuwan da kuke jin daɗinsu a da", "Barci mai kyau", "Dariya tare da abokai", "Ci gaba da duba lafiyarku"], answer: 0, why: "MedlinePlus ya lissafa gajiya da rashin sha'awa a matsayin alamomi." },
          { objective: "O4", q: "Wa mai kula da tsohon soja zai iya kira don tallafi?", options: ["Layin VA Caregiver Support Line a 1-855-260-3274", "Wata tallar intanet ta kowane iri", "Ofishin biyan kuɗin asibiti kawai", "Babu kowa"], answer: 0, why: "Layin VA Caregiver Support Line yana taimakon masu kula da tsofaffin sojoji da suka yi rajista." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kula da Mara Lafiya: Kula da Wanda Kuke So",
    questions: [
      { objective: "O1", q: "Wanne ne aikin kulawa da aka saba yi?", options: ["Rubuta takardar magani ta likita", "Canja dokoki", "Kai mutum wurin ganawa da taimako da abinci", "Gudanar da asibiti"], answer: 2, why: "Kai mutum wurare, abinci, magunguna da zama tare ayyuka ne da aka saba yi." },
      { objective: "O1", q: "Me yasa za ku tambayi wanda kuke so abin da ke da wuya a gare shi?", options: ["Don girmama 'yancin kansa da mai da hankali kan taimako inda ake buƙata", "Don kunyata shi", "Domin doka ta tilasta", "Ba shi da muhimmanci"], answer: 0, why: "Sauraro yana bar shi ya ci gaba da iko kan rayuwarsa kuma yana nuna buƙatu na gaske." },
      { objective: "O1", q: "Rukunai uku na buƙatu a wannan kwas su ne:", options: ["Abinci, talabijin da waya", "Kulawar yau da kullum, kulawar lafiya, da kuɗi da takardu", "Safe, rana da dare", "Iyali, abokai da maƙwabta"], answer: 1, why: "Raba buƙatu ta wannan hanya yana nuna inda aka fi buƙatar taimako." },
      { objective: "O1", q: "Yaushe ya kamata ku sake duba jerin buƙatu?", options: ["Ba sau ɗaya ba", "Sau ɗaya kawai", "Sai idan ya tambaya kawai", "Bayan 'yan watanni ko bayan an kwanta a asibiti"], answer: 3, why: "Buƙatu suna canjawa da lokaci." },
      { objective: "O2", q: "Littafin kulawa zai iya zama:", options: ["Fayil na takarda kawai", "Fayil, jaka ko takarda a waya ko kwamfuta", "Rubutu a kafofin sada zumunta kawai", "A kanku kawai"], answer: 1, why: "Kowane irin tsari yana aiki idan ya riƙe bayanai a wuri ɗaya." },
      { objective: "O2", q: "Mene ne advance directive?", options: ["Jadawalin motar bas", "Rasidin kantin magani", "Takardar shari'a da ke faɗin irin kulawar likita da mutum yake so idan ba zai iya magana ba", "Takardar jikin magani"], answer: 2, why: "Tana rubuta burin mutum game da kulawar likita." },
      { objective: "O2", q: "Wanne ne kada ku rubuta a kayan AI ko imel?", options: ["Cikakkun lambobin Medicare, Social Security ko na banki", "Jerin kayan cefane", "Tambaya game da akwatin ƙwayoyin magani", "Lokacin ganawa da likita"], answer: 0, why: "Lambobin sirri su kasance a waje da kayan AI da imel." },
      { objective: "O3", q: "Me ya kamata ya kasance a jerin magunguna?", options: ["Sabon maganin da likita ya rubuta kawai", "Ƙwayoyin da ake sha da safe kawai", "Magunguna masu tsada kawai", "Kowane magani, bitamin, supplement da ganye, da yawan sha da lokaci"], answer: 3, why: "Duk abin da ake sha zai iya cakuɗuwa da wani, don haka ku jera komai." },
      { objective: "O3", q: "Me yasa za a yi amfani da kantin magani ɗaya don dukkan magunguna?", options: ["Koyaushe ya fi arha", "Doka ta tilasta", "Mai sayar da magani zai iya gano matsaloli tsakanin magunguna", "Yana da wurin ajiye mota mafi kyau"], answer: 2, why: "Kantin magani ɗaya yana ganin cikakken jerin kuma zai iya gano matsaloli." },
      { objective: "O3", q: "A ganawa da likita, hanya mai kyau ta tabbatar kun fahimta ita ce:", options: ["Gyaɗa kai ku tafi", "Maimaita shirin da kalmominku", "Tambaya game da yanayi", "Ƙin rubuta bayani"], answer: 1, why: "Maimaita shirin yana gano kurakurai da wuri." },
      { objective: "O3", q: "Don taimako kyauta fuska da fuska a yankinku kan tambayoyin Medicare, kuna iya tuntuɓar:", options: ["SHIP na jiharku (shiphelp.org)", "Tallar da ke tasowa (pop-up)", "Baƙo a intanet", "Banki"], answer: 0, why: "SHIP suna bayar da shawarwarin Medicare kyauta a yankinku." },
      { objective: "O4", q: "Wace hukuma ce ke gudanar da Eldercare Locator?", options: ["IRS (hukumar haraji)", "Wani kamfanin inshora mai zaman kansa", "Gidan waya", "Administration for Community Living (ACL)"], answer: 3, why: "Eldercare Locator hidimar jama'a ce ta ACL." },
      { objective: "O4", q: "Area Agency on Aging na yankinku zai iya taimaka muku:", options: ["Samun hidimomin masu kulawa kamar horo, ƙungiyoyin tallafi da respite", "Sayen hannun jari", "Gyaran motarku", "Samun fasfo"], answer: 0, why: "Area Agencies on Aging suna haɗa tsofaffi da masu kulawa da hidimomi." },
      { objective: "O4", q: "Layin VA Caregiver Support Line yana buɗe:", options: ["Ranakun ƙarshen mako kawai", "Litinin zuwa Juma'a, ƙarfe 8 na safe zuwa 8 na dare agogon Eastern", "Tsakar dare kawai", "Rana ɗaya a shekara"], answer: 1, why: "VA ta lissafa Litinin zuwa Juma'a, ƙarfe 8 na safe zuwa 8 na dare (ET)." },
      { objective: "O5", q: "Wace hanya ce mai kyau ga 'yan iyali da ke nesa su taimaka?", options: ["Kada su yi komai domin suna nesa", "Su tura shawara kawai", "Su kula da kuɗaɗe, kiran inshora ko kiran bidiyo na yau da kullum", "Su ziyarta sau ɗaya a kowace shekara goma"], answer: 2, why: "Masu taimako daga nesa za su iya ɗaukar kiran waya, kuɗaɗe da duba lafiya ta waya." },
      { objective: "O5", q: "Kalanda na tare yana taimakawa domin:", options: ["Yana maye gurbin likita", "Medicare ta tilasta shi", "Yana ɓoye ayyuka daga iyali", "Kowa zai iya gani ya yi rajista don ayyuka"], answer: 3, why: "Masu taimako za su iya ganin abin da ake buƙata da lokacinsa." },
      { objective: "O5", q: "A ƙarƙashin dokar tarayya ta FMLA, ma'aikatan da suka cancanta za su iya ɗaukar har zuwa:", options: ["Rana 1 na hutu da albashi", "Makonni 12 na hutu ba tare da albashi ba a shekara don kula da wasu 'yan iyali", "Shekara 1 na hutu da albashi", "Babu hutu ko kaɗan"], answer: 1, why: "MedlinePlus ya ambaci har zuwa makonni 12 na hutu ba tare da albashi ba ga ma'aikatan da suka cancanta; ku tambayi HR." },
      { objective: "O6", q: "A cewar CDC, me yasa masu kulawa za su kula da kansu?", options: ["Don su zama masu kulawa nagari", "Domin rashin yin haka son kai ne", "Don guje wa dukkan iyali", "Ba shi da muhimmanci"], answer: 0, why: "CDC ta ce dole ne ku kula da kanku don ku zama mai kulawa nagari." },
      { objective: "O6", q: "Wanne mataki ne mai taimako ga damuwar mai kulawa?", options: ["Kada ku taɓa yin hutu", "Ku daina ganin likitanku", "Ku ɓoye yadda kuke ji daga kowa", "Ku shiga ƙungiyar tallafin masu kulawa"], answer: 3, why: "Ƙungiyoyin tallafi suna raba abubuwan da aka fuskanta da shawarwari." },
      { objective: "O6", q: "Wani mai kulawa yana jin babu fata kuma nauyi ya yi masa yawa. A Amurka, a lokacin gaggawa zai iya:", options: ["Jira shi kaɗai har ya wuce", "Rubuta game da shi a intanet sannan ya fita", "Kira ko tura tes zuwa 988", "Kira 411"], answer: 2, why: "988 kyauta ne kuma a buɗe yake 24/7; tsofaffin sojoji da iyalansu za su iya danna 1." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      7,
      9,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Littafin kulawa",
        objective: "O2",
        notYet: "Babu muhimman lambobin tuntuɓa, ko an rubuta cikakkun lambobin sirri inda wasu za su gani.",
        meets: "Muhimman lambobin tuntuɓa, ganawa masu zuwa da inda ake ajiye takardun shari'a, duk a wuri ɗaya.",
        exceeds: "Mutum na madadi ya san inda littafin yake da yadda ake amfani da shi."
      },
      {
        name: "Magunguna da ziyara ta gaba",
        objective: "O3",
        notYet: "Jerin magunguna bai cika ba, ko babu tambayoyi don ziyara ta gaba.",
        meets: "Cikakken jerin magunguna da yawan sha da lokaci, da rubutattun tambayoyi don ganawa ta gaba.",
        exceeds: "Ya haɗa da bitamin, supplements da allergies, da tambayoyi ga mai sayar da magani."
      },
      {
        name: "Taimako a yanki",
        objective: "O4",
        notYet: "Ba a ambaci wani wuri na taimako a yanki ba.",
        meets: "An tuntuɓi ko an shirya tuntuɓar wuri ɗaya a yanki, kamar Eldercare Locator.",
        exceeds: "An rubuta a littafin hidimomin da ake da su da matakai na gaba."
      },
      {
        name: "Ayyukan da aka raba",
        objective: "O5",
        notYet: "Ayyukan ba su da sarari, kamar \"ku taimaka\", ko ƙasa da biyu ne.",
        meets: "Ayyuka biyu takamaimai masu lokaci, da za a roƙi iyali ko abokai su ɗauka.",
        exceeds: "Masu taimako sun amince kuma ayyukan suna a kalanda na tare."
      },
      {
        name: "Shirin kula da kai",
        objective: "O6",
        notYet: "Ba a shirya hutu ba.",
        meets: "Shirin kula da kai mai hutu ɗaya kowane mako da wanda zai maye gurbi.",
        exceeds: "Ya kuma ambaci ƙungiyar tallafi ko ya faɗa wa likitansa cewa shi mai kulawa ne."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka tuntuɓi Eldercare Locator, Area Agency on Aging ko VA Caregiver Support Program cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce iyali ko abokai suna ɗaukar ayyukan kulawa na yau da kullum",
      "Masu koyo da suka ce suna ɗaukar hutu na yau da kullum ko sun shiga ƙungiyar tallafin masu kulawa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fayil ko jaka, ko takarda ta sirri a waya ko kwamfuta, don littafin kulawa",
      "Kwalaben magungunan wanda ake kula da shi ko jerinsa na yanzu, da wasiƙun ganawa (a ajiye su a sirri)",
      "Waya don kira ko tura tes zuwa Eldercare Locator",
      "Kusan minti 60 gaba ɗaya, a gajerun zama da suka dace da lokacin kulawa, da ƙarin lokacin cike littafin"
    ],
    facilitatorNotes: [
      "Masu kulawa sau da yawa sun gaji sosai; ku ba da gajerun zama, ku bar su su yi ayyukan atisaye a gida.",
      "Kada ku ba da shawarar likita; ku tura tambayoyin magani ga likita ko mai sayar da magani na wanda ake kula da shi.",
      "Ku shirya lambobin Area Agency on Aging na yanki da na ƙungiyoyin tallafi don rabawa.",
      "Ku lura da alamun damuwar mai kulawa a cikin rukunin, ku raba lambar 988 ga duk wanda ke cikin gaggawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
