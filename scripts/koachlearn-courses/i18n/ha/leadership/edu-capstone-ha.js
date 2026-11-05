"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-capstone.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-capstone-ha",
  lang: "ha",
  translationOf: "edu-capstone",
  category: "Leadership Development",
  name: "AI ga Shugabannin Makarantu da na Ilimi 8: Aikin Ƙarshe (Capstone)",
  skills: "Zaɓar matsalar da ta shafi ɗalibai, Tsara ƙaramin gwajin AI, Binciken sirri da adalci, Tsara horon ma'aikata, Sanar da iyaye, Saita ma'aunan nasara da gabatarwa ga shugabanni",
  outcome: "tsara cikakken shirin gwajin AI (pilot) da ya shirya don gabatarwa a makarantarku ko gundumarku: matsala ta gaske, ƙaramin gwaji da kayan aikin da aka bincika, binciken sirri da adalci, shirin horon ma'aikata, wasiƙa ga iyaye, ma'aunan nasara da ƙa'idar yanke shawara, kuma ku gabatar da shi cikin minti goma ga ƙungiyar shugabanni ko hukumar makaranta.",
  about: [
    "Wannan shi ne kwas na ƙarshe na AI ga Shugabannin Makarantu da na Ilimi. Za ku haɗa duk abin da kuka koya a kwas na 1 zuwa na 7 (tushe, kayan aiki, tsarawa, auna ilimi, ilimin AI na ɗalibai, ƙara yawan aiki da amfani da AI cikin gaskiya) zuwa shiri ɗaya da za ku iya aiwatarwa da gaske.",
    "Babi na 1 yana tsara gwajin: matsalar da ta cancanci warwarewa, girman gwajin da kayan aikin, da binciken sirri da adalci. Babi na 2 yana shirya mutane da hujja: horon ma'aikata, sanar da iyaye, ma'aunan nasara, da gabatarwa.",
    "Ku zaɓi gwajin da kuke da ikon gabatarwa, ko wanda za ku gabatar wa wanda ke da wannan iko. Ku yi amfani da ƙa'idojin da kuka rubuta a kwas na 7. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku kammala kuma ku gabatar da shirin gwajin AI ɗinku (kusan shafuka huɗu): matsalar da waɗanda take shafa, tare da hujja; girman gwajin (su wa, me, tsawon lokaci) da kayan aikin, tare da binciken mai sayarwa (vendor review); binciken sirri da adalci (FERPA, COPPA idan ɗalibai ba su kai shekara 13 ba, sauƙin amfani ga masu nakasa, da samun dama); shirin horon ma'aikata; wasiƙa ga iyaye da gajeren FAQ; ma'aunan nasara uku zuwa biyar tare da ma'aunin farko (baseline); da ƙa'idar ci gaba, gyara ko tsayawa. Ku gabatar da shi cikin minti goma ga ƙungiyar shugabanni, ƙungiyar abokan aiki ko hukumar makaranta, kuma ku rubuta tambayoyin da amsoshinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabannin makarantu (principals), shugabannin gundumomi, masu horar da malamai, ma'aikatan fasaha da shugabannin malamai da ke kammala AI ga Shugabannin Makarantu da na Ilimi, waɗanda za su gabatar da gwajin AI a makarantarsu ko gundumarsu.",
    startingPoint: "Sun kammala kwas na 1 zuwa na 7: tushen AI, binciken kayan aiki, tsarawa, auna ilimi, ilimin AI na ɗalibai, ƙara yawan aiki da rubutattun ƙa'idojin amfani da AI cikin gaskiya. Ba su riga sun tsara cikakken gwaji mai ma'auni, horo da sanar da iyaye ba.",
    gap: "Yawancin ayyukan AI a makarantu suna farawa da kayan aiki maimakon matsala, suna tsallake binciken sirri da adalci, kuma ba su da hanyar sanin ko sun yi aiki. Shugabanni suna buƙatar cikakken shirin gwaji na gaskiya da za su iya gabatarwa da aiwatarwa, don a yi amfani da AI ne kawai inda yake taimaka wa ɗalibai.",
    constraints: [
      "Dole gwajin ya zama wanda mai koyo ke da ikon gabatarwa, ko wanda zai gabatar wa wanda ke da wannan iko",
      "FERPA, COPPA ga ɗaliban da ba su kai shekara 13 ba, manufofin gunduma da dokar jiha suna aiki; jami'in kare sirri ne ke amincewa",
      "Babu bayanan ɗalibai na gaske a cikin takardun shirin; a yi amfani da taƙaitacciyar hujja",
      "Ƙa'idojin kuɗin tarayya suna canjawa, don haka masu koyo suna tambayar ofishin shirye-shiryen tarayya",
      "Lokaci: gajerun darussa, kuma shirin da gabatarwar suna ɗaukar zama da dama"
    ],
    prerequisites: "Kwas na 1 zuwa na 7 na AI ga Shugabannin Makarantu da na Ilimi, musamman kwas na 7 (\"Ethics, Safety and Responsible AI\", wato ɗabi'a, tsaro da amfani da AI cikin gaskiya)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da wata matsala a makarantarku", action: "rubuta bayanin matsala da ya shafi ɗalibai, tare da hujja", standard: "kuna faɗin abin da ba daidai ba, ga su wa, da girmansa, da ko AI ne amsar da ta dace" },
    { id: "O2", condition: "Idan kun gane matsalarku", action: "saita girman ƙaramin gwaji da zaɓar kayan aikin da ya wuce binciken mai sayarwa", standard: "kuna faɗin su wa, me zai canja da tsawon lokaci, kuma an zaɓi kayan aikin bayan an saita girman" },
    { id: "O3", condition: "Kafin gwajin ya fara", action: "yin binciken sirri da adalci, tare da kariya da mai kula da kowane haɗari", standard: "ya ƙunshi FERPA, COPPA idan ɗalibai ba su kai shekara 13 ba, sauƙin amfani da samun dama, kuma jami'in kare sirri ya amince" },
    { id: "O4", condition: "Ga ma'aikatan da ke cikin gwajin", action: "tsara horo na aiki da hannu, ƙa'idoji da tallafi", standard: "tare da jadawalin horo na minti 60, sunan wanda za a tuntuɓa da bayanan da malamai za su riƙa rubutawa" },
    { id: "O5", condition: "Ga iyayen ɗaliban da ke cikin gwajin", action: "rubuta wasiƙa ta gaskiya ga iyaye da FAQ mai tambayoyi biyar", standard: "ƙasa da shafi ɗaya, iyaye ko jami'in hulɗa da iyaye ya duba ta, kuma ƙwararrun masu jin harshen sun duba fassarorin" },
    { id: "O6", condition: "Ga cikakken shirin gwajin ku", action: "saita ma'aunan nasara uku zuwa biyar tare da ma'aunin farko da ƙa'idar ci gaba, gyara ko tsayawa, da gabatar da shirin", standard: "cikin minti goma, an rubuta ƙa'idar kafin farawa, kuma an rubuta tambayoyi da amsoshi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara gwajin",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fara da matsalar da ta shafi ɗalibai",
          minutes: 5,
          goal: "Bayyana matsalar da gwajinku zai warware, tare da hujja da ɗaliban da yake yi wa hidima.",
          text: [
            "Gwaji mai ƙarfi yana farawa da matsala, ba da kaya ba. Ku tambaya: me ke hana ɗalibai koyo ko jin daɗin rayuwa, ko kuma ke rage lokacin malamai da ɗalibai? Misalai: malamai suna ɓata awanni kowane mako wajen fassara wa iyaye; ɗaliban aji 9 a algebra suna buƙatar ƙarin atisaye tare da ra'ayi (feedback); sababbin malamai suna fama da koyar da kowane ɗalibi gwargwadon buƙatarsa.",
            "Ku tara hujja: bayanan da kuke da su (tare da kariyar sirri), binciken ra'ayoyin malamai da ɗalibai (survey), da tattaunawa. Ku rubuta matsalar a jimla ɗaya, tare da waɗanda abin ya shafa da girmansa: \"Malaman algebra na aji 9 sun ce suna da ƙasa da minti 10 a mako ga kowane ɗalibi don ra'ayi na musamman, kuma kashi 40 cikin 100 na ɗalibai sun faɗi a jarabawar sashe na farko.\"",
            "Sannan ku tambaya ko AI ne amsar da ta dace kwata-kwata. Wani lokaci canjin jadawali, samfuri (template) ko ƙarin lokacin ma'aikata ya fi warware ta. Idan AI ya dace, ku faɗi daidai abin da zai yi."
          ],
          steps: ["Ku jera matsalolin da ke hana koyo, jin daɗi ko lokacin malamai.", "Ku tara hujja: bayanai, binciken ra'ayoyi, tattaunawa.", "Ku rubuta matsalar a jimla ɗaya: su wa, me, girmansa.", "Ku tambaya ko AI ne amsar da ta dace.", "Idan haka ne, ku faɗi daidai abin da AI zai yi."],
          words: [["Bayanin matsala (problem statement)", "jimla ɗaya da ke faɗin abin da ba daidai ba, ga su wa, da girmansa."], ["Hujja (evidence)", "bayanai da abubuwan da aka gani da ke nuna cewa matsala ta gaske ce."]],
          slides: [
            { title: "Matsala da farko, kaya daga baya", bullets: ["Me ke hana koyo, jin daɗi ko lokacin malamai?", "Fassara, atisaye, koyarwa gwargwadon buƙata"] },
            { title: "Ku nuna hujja", bullets: ["Bayanan da kuke da su, tare da kariyar sirri", "Binciken ra'ayoyi da tattaunawa", "Jimla ɗaya: su wa, me, girmansa"] },
            { title: "AI ne amsar?", bullets: ["Wani lokaci jadawali ko samfuri ya fi kyau", "Idan AI ya dace, ku faɗi daidai abin da zai yi"] }
          ],
          tryIt: "Ku rubuta bayanin matsalarku a jimla ɗaya tare da hujja, da jimla ɗaya kan daidai abin da AI zai yi game da ita, ko dalilin da yasa wani abu daban zai fi aiki.",
          youCanNow: "bayyana matsalar da ta shafi ɗalibai tare da hujja kafin ku zaɓi kowane kayan aikin AI.",
          quickCheck: [
            { objective: "O1", q: "Me bayanin matsala yake faɗi?", options: ["Wane kayan aikin AI kuke son saya", "Abin da ba daidai ba, ga su wa, da girmansa", "Nawa gwajin zai ci", "Wa zai gabatar da shirin"], answer: 1, why: "Bayanin matsala mai sarari yana sa gwajin ya mai da hankali kan ɗalibai, ba kan kayan aiki ba." },
            { objective: "O1", q: "Wani mai sayarwa ya ba makarantarku kayan aikin AI kyauta. Me za ku fara yi?", options: ["Ku fara amfani da shi, tun da kyauta ne", "Ku zaɓi matsalar da zai iya warwarewa daga baya", "Ku bayyana matsalar ɗalibai, ku tambaya ko AI ne amsar da ta dace kwata-kwata", "Ku nemi ɗalibai su gwada shi a gida"], answer: 2, why: "Gwaji mai ƙarfi yana farawa da matsalar da ta shafi ɗalibai, ba da kayan aiki ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Saita girman gwajin da zaɓar kayan aikin",
          minutes: 6,
          goal: "Saita ƙaramin girman gwaji mai sarari da zaɓar kayan aikin da ya wuce binciken mai sayarwa.",
          text: [
            "Ku sa shi ƙarami: malamai kaɗan ko aji ɗaya ko darasi ɗaya, na mako shida zuwa goma sha biyu. Ƙaramin gwaji ya fi sauƙin tallafawa, aunawa da dakatarwa idan ya zama dole. Ku rubuta su wa za su shiga, me za su yi daban, da yaushe.",
            "Ku zaɓi kayan aikin a ƙarshe. Ku fi son kayan aikin da gundumarku ta riga ta amince da su, ko waɗanda suka wuce binciken mai sayarwa daga kwas na 7 (jerin binciken Model Terms of Service, tare da tambayoyin AI kan daidaito, son kai (bias), sauƙin amfani ga masu nakasa da ikon malami na canja sakamako). Ku duba ƙa'idojin shekaru na kayan aikin idan ɗalibai za su yi amfani da shi.",
            "Ku yi tunani kan kuɗi. Wasiƙar Dear Colleague ta Ma'aikatar Ilimi ta Amurka ta Yuli 2025, kamar yadda K-12 Dive ya ruwaito, ta ce kuɗaɗen tallafin tarayya da ake da su na iya tallafa wa AI don kayan manhajar karatu masu inganci, koyarwa ta musamman mai tasiri (tutoring), da shawarwari kan hanyar jami'a da sana'a, idan an cika sharuɗɗan doka. Ku duba wasiƙar a ed.gov kuma ku tambayi ofishin shirye-shiryen tarayya kafin ku dogara kan kowane kuɗi."
          ],
          steps: ["Ku zaɓi ƙaramin rukuni da mako shida zuwa goma sha biyu.", "Ku rubuta su wa, me zai canja, da yaushe.", "Ku fi son kayan aikin da aka amince da su; in ba haka ba, ku yi binciken mai sayarwa.", "Ku duba ƙa'idojin shekaru idan ɗalibai za su yi amfani da shi.", "Ku duba kuɗi tare da ofishin shirye-shiryen tarayya."],
          words: [["Girman aiki (scope)", "girma da iyakokin aiki: su wa, me, da tsawon lokaci."], ["Ofishin shirye-shiryen tarayya (federal programs office)", "ofishin gunduma da ke kula da tallafin tarayya kamar Title I."]],
          slides: [
            { title: "Ku sa shi ƙarami", bullets: ["Malamai kaɗan, aji ɗaya ko darasi ɗaya", "Mako shida zuwa goma sha biyu", "Mai sauƙin tallafawa, aunawa da dakatarwa"] },
            { title: "Ku zaɓi kayan aikin a ƙarshe", bullets: ["Ku fi son kayan aikin da gunduma ta amince da su", "In ba haka ba, ku yi binciken mai sayarwa", "Ku duba ƙa'idojin shekaru idan ɗalibai za su yi amfani"] },
            { title: "Kuɗi", bullets: ["Wasiƙar tarayya ta Yuli 2025: ana iya biyan wasu amfanin AI", "Kayan manhajar karatu, koyarwa ta musamman, shawarwarin hanya", "Ku tabbatar da ofishin shirye-shiryen tarayya"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (July 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacy and Education Technology: Model Terms of Service checklist", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Ku rubuta girman gwajinku (su wa, me zai canja, tsawon lokaci) kuma ku ambaci kayan aikin, tare da matsayin amincewarsa ko binciken mai sayarwa da kuka yi.",
          youCanNow: "saita girman ƙaramin gwajin AI da zaɓar kayan aikin da aka bincika yadda ya kamata.",
          quickCheck: [
            { objective: "O2", q: "Mene ne girman gwaji mai kyau?", options: ["Duk makarantun gunduma na shekara uku", "Malamai kaɗan a darasi ɗaya na mako shida zuwa goma sha biyu", "Ɗalibi ɗaya na kwana ɗaya", "Babu ƙayyadadden tsawon lokaci"], answer: 1, why: "Ƙarami kuma mai sarari yana ba ku damar koyo da sauri da rage haɗari." },
            { objective: "O2", q: "Kayan aikin da kuke so gundumar ba ta riga ta amince da shi ba. Me za ku yi?", options: ["Ku yi binciken mai sayarwa kafin gwajin", "Ku yi amfani da shi duk da haka don gajeren gwaji", "Ku nemi malamai su saya da kansu", "Ku zaɓi kayan aiki ba tare da tunani ba"], answer: 0, why: "Dole kayan aiki su wuce binciken mai sayarwa kafin ɗalibai ko ma'aikata su yi amfani da su." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Binciken sirri da adalci",
          minutes: 6,
          goal: "Yi binciken sirri da adalci kan gwajinku kafin ya fara.",
          text: [
            "Sirri: ku jera daidai waɗanne bayanan ɗalibai gwajin zai yi amfani da su da inda za su je. A ƙarƙashin FERPA (dokar Amurka ta kare bayanan karatun ɗalibai), raba bayanan da ke gane ɗalibi (PII) daga bayanan karatu da mai sayarwa yawanci yana buƙatar izini sai dai idan wani keɓancewa ya shafa, kamar mai sayarwa da ke aiki a matsayin jami'in makaranta ƙarƙashin ikon makarantar kai tsaye, tare da iyaka kan sake raba bayanan. Idan ɗalibai ba su kai shekara 13 ba, COPPA (dokar Amurka ta kare sirrin yara a intanet) tana aiki; izinin makaranta yana aiki ne kawai don amfanin makaranta ba tare da wata manufar kasuwanci ba. Ku sami amincewar jami'in kare sirri.",
            "Adalci: su wa za a iya barin su a baya ko a cutar da su? Ku duba samun dama (na'urori, intanet, sauƙin amfani ga ɗalibai masu nakasa, harsunan iyaye), ko sakamako zai iya bambanta tsakanin rukunonin ɗalibai, da ko wani sakamakon AI zai iya shafar maki, sanya ɗalibi a aji ko horo (discipline); idan haka ne, ku ƙara binciken mutum.",
            "Ku rubuta binciken a shafi ɗaya tare da kowane haɗari, kariyarsa da mai kula da shi. Gwajin da bai wuce wannan binciken ba bai shirya farawa ba."
          ],
          steps: ["Ku jera bayanan ɗalibai, inda suke zuwa da dalili.", "Ku duba FERPA, da COPPA idan ɗalibai ba su kai shekara 13 ba.", "Ku sami amincewar jami'in kare sirri.", "Ku duba samun dama, sauƙin amfani, harsuna da bambancin rukunoni.", "Ku rubuta kowane haɗari tare da kariyarsa da mai kula da shi."],
          words: [["Amincewa (sign-off)", "izini na hukuma daga wanda ke da alhaki."], ["Sauƙin amfani ga masu nakasa (accessibility)", "ko mutanen da ke da nakasa za su iya amfani da kayan aiki gaba ɗaya."]],
          slides: [
            { title: "Sirri", bullets: ["Waɗanne bayanai, inda suke zuwa, me yasa", "FERPA; COPPA idan ba su kai 13 ba", "Jami'in kare sirri ne ke amincewa"] },
            { title: "Adalci", bullets: ["Na'urori, intanet, sauƙin amfani, harsuna", "Sakamako daban tsakanin rukunoni?", "Binciken mutum ga duk abu mai muhimmanci sosai"] },
            { title: "Shafi ɗaya", bullets: ["Haɗari, kariya, mai kula", "Bai wuce ba = bai shirya ba"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Ku rubuta binciken sirri da adalci na shafi ɗaya tare da aƙalla haɗarin sirri uku da haɗarin adalci uku, kowanne da kariyarsa da mai kula da shi.",
          youCanNow: "duba gwajin AI don haɗarin sirri da adalci kafin ya fara.",
          quickCheck: [
            { objective: "O3", q: "Wace ce tambayar adalci ga gwaji?", options: ["Kayan aikin ya shahara?", "Kayan aikin ne mafi sabo?", "Kayan aikin yana da kyakkyawan zane?", "Ɗalibai masu nakasa za su iya amfani da kayan aikin gaba ɗaya?"], answer: 3, why: "Sauƙin amfani da samun dama suna cikin binciken adalci." },
            { objective: "O3", q: "Binciken sirri da adalcinku bai ƙare ba, amma gobe ne ranar farawa. Me za ku yi?", options: ["Ku fara duk da haka, ku gama binciken daga baya", "Ku jinkirta farawa har sai an gama binciken kuma an amince", "Ku tsallake sashen adalci", "Ku fara da rabin ɗalibai kawai"], answer: 1, why: "Gwajin da bai wuce binciken sirri da adalci ba bai shirya farawa ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara gwajin",
        questions: [
          { objective: "O1", q: "Da me gwaji mai ƙarfi ya kamata ya fara?", options: ["Nunin kaya", "Rangwamen mai sayarwa", "Matsalar da ta shafi ɗalibai tare da hujja", "Sanarwa ga 'yan jarida"], answer: 2, why: "Matsala da farko, kaya daga baya." },
          { objective: "O2", q: "Wane girman gwaji ne ya fi kyau?", options: ["Malamai kaɗan a darasi ɗaya na mako 6-12", "Duk makarantun gunduma na shekara uku", "Babu ƙayyadadden rukuni", "Shugaban makaranta kaɗai"], answer: 0, why: "Ƙananan gwaje-gwaje sun fi sauƙin tallafawa, aunawa da dakatarwa." },
          { objective: "O2", q: "Yaushe ya kamata ku zaɓi kayan aikin?", options: ["Da farko", "Bayan gwajin ya ƙare", "Ba za a taɓa ba", "Bayan bayyana matsalar da girman gwajin"], answer: 3, why: "Dole kayan aikin ya dace da matsalar." },
          { objective: "O3", q: "Ɗaliban da ke cikin gwajin 'yan shekara 10 ne. Wace doka ce ke aiki kan hidimar intanet ɗin?", options: ["Babu doka", "COPPA", "Dokar zirga-zirgar jiha kawai", "Haƙƙin mallaka kawai"], answer: 1, why: "COPPA tana kare yaran da ba su kai shekara 13 ba." },
          { objective: "O3", q: "Sakamakon AI a gwajinku zai iya shafar sanya ɗalibi a aji. Me dole ku ƙara?", options: ["Babu komai", "Samfurin AI mafi sauri", "Ƙarin AI", "Binciken mutum kafin kowane shawarar sanya ɗalibi a aji"], answer: 3, why: "Shawarwari masu muhimmanci sosai suna buƙatar binciken mutum." }
        ]
      }
    },
    {
      name: "Babi na 2: Mutane, hujja da gabatarwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Shirya ma'aikata",
          minutes: 5,
          goal: "Tsara horo da tallafin da ma'aikatan gwajin ke buƙata.",
          text: [
            "Malaman da ke cikin gwajin suna buƙatar fiye da shiga asusu. Ku tsara abubuwa uku. Ƙwarewa: yadda ake amfani da kayan aikin da kyau, prompts ko saitunan da ke aiki, da yadda ake duba sakamakonsa. Ƙa'idoji: sirri, matakan amfani da AI ga ɗalibai, da abin da za a yi idan wani abu ya lalace. Tallafi: sunan wanda za a tuntuɓa, ganawa ta kowane mako, da lokacin gwada abubuwa.",
            "Ku sa horon ya zama na aiki da hannu. Malamai su yi amfani da kayan aikin kan nasu kayan koyarwa na gaske (marasa bayanan sirri) a lokacin zaman, ba kallon nuni kawai ba. Ku haɗa masu saurin karɓar sabon abu da abokan aiki masu taka-tsantsan.",
            "Ku nemi malaman gwajin su riƙa rubuta gajerun bayanai: lokacin da suka ɓata, abin da ya yi aiki, abin da bai yi aiki ba, da yadda ɗalibai suka ji. Bayanansu suna cikin hujjarku kuma za su tsara shawarar da za a yanke a ƙarshe."
          ],
          steps: ["Ku tsara ƙwarewa: amfani, prompts, duba sakamako.", "Ku tsara ƙa'idoji: sirri, matakan amfanin ɗalibai, matsaloli.", "Ku tsara tallafi: wanda za a tuntuɓa, ganawa ta mako-mako, lokaci.", "Ku sa zaman ya zama na aiki da hannu da kayan gaske.", "Ku nemi malamai su riƙa rubuta gajerun bayanai."],
          words: [["Horon ƙwarewa (professional development, PD)", "horo da koyo ga malamai da ma'aikata."], ["Mai saurin karɓar sabon abu (early adopter)", "wanda ke gwada sababbin kayan aiki da wuri kuma zai iya taimaka wa wasu."]],
          slides: [
            { title: "Ƙwarewa, ƙa'idoji, tallafi", bullets: ["Ƙwarewa: amfani, prompts, dubawa", "Ƙa'idoji: sirri, matakan ɗalibai, matsaloli", "Tallafi: wanda za a tuntuɓa, ganawa, lokaci"] },
            { title: "Horo na aiki da hannu", bullets: ["Amfani da kayan aikin kan kayan gaske marasa bayanan sirri", "Haɗa masu saurin karɓar sabon abu da masu taka-tsantsan"] },
            { title: "Bayanan malamai hujja ne", bullets: ["Lokacin da aka ɓata, abin da ya yi aiki, abin da bai yi ba", "Yadda ɗalibai suka ji"] }
          ],
          tryIt: "Ku rubuta shirin ma'aikata na shafi ɗaya: jadawalin horo na aiki da hannu na minti 60, ƙa'idojin da malamai dole su bi, tallafin da za su samu, da bayanan da za ku nemi su riƙa rubutawa.",
          youCanNow: "shirya da tallafa wa ma'aikata don gwajin AI.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata tallafin ma'aikata a lokacin gwajin ya ƙunsa?", options: ["Sunan wanda za a tuntuɓa da ganawa ta kowane mako", "Imel ɗaya kawai", "Chatbot na AI kawai", "Babu komai; malamai za su gane da kansu"], answer: 0, why: "Tallafi mai suna da ganawa akai-akai suna hana matsaloli girma." },
            { objective: "O4", q: "Malamai sun tambaya me yasa dole su riƙa rubuta bayanai a lokacin gwajin. Me za ku ce?", options: ["Ƙa'ida ce daga mai sayarwa", "Don a yi wa koyarwarsu hukunci", "Bayanansu suna cikin hujjar da za a yi amfani da ita don yanke abin da zai biyo baya", "Aiki ne na zaɓi marar amfani"], answer: 2, why: "Bayanan malamai hujja ne don shawarar ci gaba, gyara ko tsayawa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sanar da iyaye",
          minutes: 5,
          goal: "Rubuta wasiƙa ga iyaye da FAQ da ke bayanin gwajin cikin gaskiya.",
          text: [
            "Iyaye suna amincewa da abin da suka fahimta. Ku sanar da su kafin gwajin ya fara: wace matsala kuke aiki a kai, me kayan aikin AI ke yi, me ba ya yi (ba ya ba da maki ko yanke shawarar sanya ɗalibi a aji), waɗanne bayanan ɗalibai ake amfani da su da yadda ake kare su, da wanda za a tuntuɓa da tambayoyi.",
            "Ku ƙara gajeren FAQ (tambayoyin da ake yawan yi): Za a yi amfani da bayanan ɗana don horar da AI? (Ku amsa daga yarjejeniyarku da mai sayarwa.) Ɗana zai iya ƙin shiga, kuma mene ne madadin? Ta yaya za ku san ko yana aiki? FTC (hukumar kasuwanci ta tarayyar Amurka) tana ba makarantu shawara su sanar da iyaye waɗanne hidimomin intanet suka amince da su; FERPA tana ba iyaye haƙƙin duba bayanan karatun ɗansu.",
            "Ku rubuta da harshe mai sauƙi kuma ku samar da fassarori da ƙwararrun masu jin harshen suka duba ga iyayen da ke buƙatarsu. Ku ba da gajeren zaman bayani ko lokacin yin tambayoyi."
          ],
          steps: ["Ku bayyana matsalar da abin da kayan aikin ke yi da wanda ba ya yi.", "Ku bayyana amfani da bayanai da kariyarsu.", "Ku ƙara FAQ: horar da AI, ƙin shiga, ma'auni.", "Ku fassara, tare da duba daga ƙwararrun masu jin harshen.", "Ku ba da lokacin yin tambayoyi."],
          words: [["FAQ", "frequently asked questions: gajeren jerin tambayoyin da ake yawan yi tare da amsoshi."], ["Ƙin shiga (opt out)", "zaɓin rashin shiga cikin wani abu."]],
          slides: [
            { title: "Ku sanar da iyaye da farko", bullets: ["Matsalar da abin da kayan aikin ke yi", "Abin da ba ya yi", "Bayanan da ake amfani da su da yadda ake kare su"] },
            { title: "Gajeren FAQ", bullets: ["Ana amfani da bayanai don horar da AI?", "Ɗana zai iya ƙin shiga? Madadin fa?", "Ta yaya za ku san yana aiki?"] },
            { title: "Ku kai ga kowane iyali", bullets: ["Harshe mai sauƙi", "Fassarori da aka duba", "Lokacin yin tambayoyi"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Ku rubuta wasiƙa ga iyaye (ƙasa da shafi ɗaya) da FAQ mai tambayoyi biyar don gwajinku. Ku nemi iyaye ko jami'in hulɗa da iyaye ya karanta ta ya faɗa muku abin da bai bayyana ba.",
          youCanNow: "bayyana gwajin AI ga iyaye a sarari kuma cikin gaskiya.",
          quickCheck: [
            { objective: "O5", q: "Me wasiƙar iyaye ya kamata ta ce kayan aikin BA ya yi?", options: ["Taimaka wa ɗalibai yin atisaye", "Ba da maki ko yanke shawarar sanya ɗalibi a aji", "Aiki a kwamfutocin makaranta", "Amfani da intanet"], answer: 1, why: "Iyaye suna buƙatar sanin cewa mutane ne, ba AI ba, ke yanke shawara game da 'ya'yansu." },
            { objective: "O5", q: "Jami'in hulɗa da iyaye ya ce wasiƙarku tana da wuyar fahimta. Me za ku yi?", options: ["Ku aika ta duk da haka", "Ku ƙara bayanai da kalmomin shari'a", "Ku aika ta da Turanci kawai", "Ku sake rubuta ta da kalmomi masu sauƙi ku nemi ya sake karanta ta"], answer: 3, why: "Wasiƙar tana aiki ne kawai idan iyaye za su iya fahimtar ta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Auna nasara da gabatar da shirinku",
          minutes: 6,
          goal: "Saita ma'auni da ƙa'idar yanke shawara, kuma ku gabatar da shirin cikin minti goma.",
          text: [
            "Ku zaɓi ma'auni uku zuwa biyar da suka dace da matsalarku, tare da ma'aunin farko (baseline) daga kafin gwajin: sakamakon ɗalibai (sakamakon jarabawar sashe, atisayen da aka kammala), ma'aunin malamai (lokacin da aka tanada, ƙarfin gwiwa), ma'aunin yadda ɗalibai ko iyaye suka ji (gajeren binciken ra'ayoyi), da ma'aunin tsaro (matsalolin da suka faru, matsalolin sirri). Ku ba da rahoton sakamako bisa rukunonin ɗalibai inda sirri ya ba da dama, don gano tasirin da bai daidaita ba.",
            "Ku rubuta ƙa'idar yanke shawara tun da wuri: ci gaba (faɗaɗa), gyara (canja da sake gwadawa) ko tsayawa. Misali: \"Mu faɗaɗa idan sakamakon jarabawa ya inganta kuma malamai sun tanadi lokaci, ba tare da wata babbar matsala ba kuma babu rukunin da ya yi baya.\"",
            "Ku gabatar cikin minti goma: matsalar da hujja, gwajin da kayan aikin, binciken sirri da adalci, shirin mutane, ma'aunan da ƙa'idar yanke shawara. Ku gayyaci tambayoyi masu wuya; suna ƙarfafa shirin."
          ],
          steps: ["Ku zaɓi ma'auni 3-5: ɗalibai, malamai, yadda aka ji, tsaro.", "Ku tara ma'aunin farko.", "Ku shirya duba sakamako bisa rukunoni inda sirri ya ba da dama.", "Ku rubuta ƙa'idar ci gaba, gyara ko tsayawa.", "Ku gabatar cikin minti goma ku rubuta tambayoyin."],
          words: [["Ma'auni (measure)", "abin da kuke ƙirgawa ko kimantawa don ganin ko canji ya yi aiki."], ["Ƙa'idar yanke shawara (decision rule)", "ƙa'idar da aka rubuta tun da wuri kan ko za a faɗaɗa, a gyara ko a tsaya."]],
          slides: [
            { title: "Ma'auni tare da ma'aunin farko", bullets: ["Sakamakon ɗalibai", "Lokaci da ƙarfin gwiwar malamai", "Binciken yadda aka ji da tsaro"] },
            { title: "Ku yanke ƙa'idar da farko", bullets: ["Ci gaba, gyara ko tsayawa", "Babu rukunin da ya yi baya", "Babu wata babbar matsala"] },
            { title: "Gabatarwa ta minti goma", bullets: ["Matsala da hujja; gwaji da kayan aiki", "Sirri da adalci; shirin mutane", "Ma'auni da ƙa'idar yanke shawara"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa cikakken shirin gwajinku (matsala, girman gwaji da kayan aiki, binciken sirri da adalci, shirin ma'aikata, wasiƙar iyaye da FAQ, ma'auni tare da ma'aunin farko, ƙa'idar yanke shawara), ku gabatar da shi cikin minti goma ga ƙungiyar shugabanni, ƙungiyar abokan aiki ko hukumar makaranta, kuma ku rubuta tambayoyin da amsoshinku.",
          youCanNow: "tsarawa, kare da jagorantar gwajin AI na gaskiya a makarantarku ko gundumarku.",
          quickCheck: [
            { objective: "O6", q: "Yaushe ake tara ma'aunin farko?", options: ["Kafin gwajin", "A tsakiyar gwajin", "Bayan gwajin ya ƙare", "Idan gwajin ya gaza kawai"], answer: 0, why: "Ma'aunin farko kafin gwajin yana nuna ko wani abu ya canja." },
            { objective: "O6", q: "Sakamako gaba ɗaya ya yi kyau, amma wani rukunin ɗalibai ya yi baya. Me shirinku zai yi?", options: ["Ba da rahoton sakamakon gaba ɗaya kawai", "Ci gaba, tun da yawancin ɗalibai sun yi kyau", "Duba sakamako bisa rukunoni da zaɓar gyara ko tsayawa kamar yadda ƙa'idar yanke shawara ta ce", "Cire wannan rukunin daga bayanan"], answer: 2, why: "Duba bisa rukunoni yana gano tasirin da bai daidaita ba, kuma ƙa'idar yanke shawara tana jagorantar abin da za a yi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Mutane, hujja da gabatarwa",
        questions: [
          { objective: "O4", q: "Me ke sa horon AI ga malamai ya fi tasiri?", options: ["Kallon dogon nuni", "Karanta tallar mai sayarwa", "Amfani da hannu kan nasu kayan da ba su da bayanan sirri", "Babu horo"], answer: 2, why: "Mutane suna koyon kayan aiki ta hanyar amfani da su kan aiki na gaske." },
          { objective: "O5", q: "Me wasiƙar iyaye ya kamata ta ce kayan aikin BA ya yi?", options: ["Ba da maki ko yanke shawarar sanya ɗalibi a aji", "Taimaka wa atisaye", "Tanadin lokacin malamai", "Ba da ra'ayi (feedback)"], answer: 0, why: "Iyaye suna buƙatar sanin cewa shawarwari suna hannun malamai." },
          { objective: "O6", q: "Me yasa za a duba sakamakon gwaji bisa rukunonin ɗalibai?", options: ["Don jera ɗalibai a gaban jama'a", "Don gano tasirin da bai daidaita ba", "Ba shi da amfani", "Don tanadin lokaci"], answer: 1, why: "Gwaji zai iya taimaka wa wasu ɗalibai ya cutar da wasu." },
          { objective: "O6", q: "Yaushe ya kamata a rubuta ƙa'idar ci gaba, gyara ko tsayawa?", options: ["Kafin gwajin ya fara", "Bayan sakamako ya fito", "Ba za a taɓa ba", "Idan ya gaza kawai"], answer: 0, why: "Yanke shawara tun da wuri yana sa shawarar ta kasance ta gaskiya." },
          { objective: "O6", q: "A lokacin gabatarwarku, wani memba na hukuma ya yi tambaya mai wuya game da sirri. Mene ne amsa mafi kyau?", options: ["Ku guje mata", "Ku yi alƙawarin cewa babu haɗari", "Ku dakatar da gabatarwar", "Ku karɓe ta da farin ciki ku amsa daga binciken sirrinku"], answer: 3, why: "Tambayoyi masu wuya suna ƙarfafa shirin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Shugabannin Makarantu da na Ilimi 8: Aikin Ƙarshe (Capstone)",
    questions: [
      { objective: "O1", q: "Bayanin matsala yana faɗi:", options: ["Wane kaya za a saya", "Abin da ba daidai ba, ga su wa, da girmansa", "Kasafin kuɗi kawai", "Jerin ma'aikata"], answer: 1, why: "Yana bayyana matsalar tare da hujja." },
      { objective: "O1", q: "Hujjar matsala na iya haɗawa da:", options: ["Tallace-tallacen mai sayarwa", "Jita-jita", "Bayanan da ake da su, binciken ra'ayoyi da tattaunawa", "Hasashe"], answer: 2, why: "Hujja ta gaske tana nuna cewa matsalar ta gaske ce." },
      { objective: "O1", q: "Kafin zaɓar AI, ku tambaya:", options: ["Wanne ne mafi arha?", "Wane AI ne ya fi shahara?", "AI ne amsar da ta dace kwata-kwata?", "Wanne ne ke da tambari mafi kyau?"], answer: 2, why: "Wani lokaci gyara ba tare da AI ba ya fi kyau." },
      { objective: "O2", q: "Tsawon gwaji mai kyau yana kusan:", options: ["Mako shida zuwa goma sha biyu", "Kwana ɗaya", "Shekara biyar", "Babu ƙayyadadden tsawon lokaci"], answer: 0, why: "Ya isa a koyi abu, kuma gajere ne da za a iya sarrafa shi." },
      { objective: "O2", q: "Ya kamata a zaɓi kayan aikin:", options: ["Ɗalibai kaɗai", "Kafin komai", "Mai sayarwa", "Bayan matsalar da girman gwajin sun bayyana"], answer: 3, why: "Dole kayan aikin ya dace da matsalar." },
      { objective: "O2", q: "Idan ba a riga an amince da kayan aiki ba, ya kamata ku:", options: ["Yi amfani da shi duk da haka", "Yi binciken mai sayarwa", "Nemi ɗalibai su yi rajista", "Tsallake sirri"], answer: 1, why: "Amincewa tana zuwa kafin amfani." },
      { objective: "O2", q: "Wasiƙar tarayya ta Yuli 2025 ta ce kuɗaɗen tallafi na iya tallafa wa AI don:", options: ["Kayan wasanni", "Kowane irin saye", "Maye gurbin malamai", "Kayan manhajar karatu, koyarwa ta musamman mai tasiri da shawarwarin hanya"], answer: 3, why: "An ambaci waɗannan amfani a cikin wasiƙar, kamar yadda aka ruwaito." },
      { objective: "O2", q: "Kafin ku dogara kan kuɗin tarayya, ku tambayi:", options: ["Ɗalibi", "Mai sayarwa", "Ofishin shirye-shiryen tarayya", "Kafofin sada zumunta"], answer: 2, why: "Su ne ke kula da ƙa'idojin tallafin tarayya." },
      { objective: "O3", q: "A ƙarƙashin FERPA, raba PII na ɗalibi da mai sayarwa yawanci yana buƙatar:", options: ["Izini, sai dai idan wani keɓancewa ya shafa", "Babu komai", "Kiran waya kawai", "Izinin mai sayarwa"], answer: 0, why: "Keɓancewa sun haɗa da jami'an makaranta da ke ƙarƙashin iko." },
      { objective: "O3", q: "Wa ke amincewa da binciken sirri?", options: ["Mai sayarwa", "Jami'in kare sirri na gunduma", "Ɗalibi", "Babu kowa"], answer: 1, why: "Wanda ke da alhaki ne ke amincewa." },
      { objective: "O3", q: "Wace ce tambayar adalci?", options: ["Ɗalibai masu nakasa za su iya amfani da kayan aikin gaba ɗaya?", "Wane launi manhajar take da shi?", "Yana kan gaba a yayi?", "Sabo ne?"], answer: 0, why: "Sauƙin amfani ga masu nakasa yana cikin adalci." },
      { objective: "O3", q: "Gwajin da bai wuce binciken sirri da adalci ba:", options: ["Ya ƙare", "Ya shirya duk da haka", "An amince da shi", "Bai shirya farawa ba"], answer: 3, why: "Binciken ƙofa ce da dole a wuce." },
      { objective: "O4", q: "Tallafin ma'aikata ya kamata ya haɗa da:", options: ["Babu komai bayan shiga asusu", "Sunan wanda za a tuntuɓa da ganawa ta kowane mako", "Imel kawai", "Layin taimako na mai sayarwa kawai"], answer: 1, why: "Tallafi yana sa gwaje-gwaje su tafi daidai." },
      { objective: "O4", q: "Bayanan malaman gwajin:", options: ["Ba su da amfani", "Littattafan sirri ne", "Suna cikin hujjarku", "Na mai sayarwa ne kawai"], answer: 2, why: "Suna nuna abin da ya yi aiki da wanda bai yi ba." },
      { objective: "O5", q: "FAQ na iyaye ya kamata ya amsa:", options: ["Wane malami ne ya fi shahara?", "Nawa ne farashin hannun jarin mai sayarwa?", "Ana amfani da bayanan ɗana don horar da AI?", "Babu komai"], answer: 2, why: "Amfani da bayanai babban abin damuwa ne ga iyaye." },
      { objective: "O5", q: "Fassarori ga iyaye ya kamata su zama:", options: ["Waɗanda ƙwararrun masu jin harshen suka duba", "Sakamakon AI da ba a duba ba", "A tsallake su", "Ɗalibai ne suka yi su"], answer: 0, why: "Iyaye suna buƙatar ingantattun bayanai." },
      { objective: "O6", q: "Wanne ne ma'aunin tsaro?", options: ["Kuɗin shigar mai sayarwa", "Yawan shiga asusu", "Yawan hotunan bayani (slides)", "Yawan matsalolin da suka faru ko matsalolin sirri"], answer: 3, why: "Dole a auna tsaro ma." },
      { objective: "O6", q: "Ana tara ma'aunin farko:", options: ["Bayan gwajin", "Kafin gwajin", "Ba a taɓa ba", "Idan sakamako bai yi kyau ba kawai"], answer: 1, why: "Yana nuna abin da ya canja." },
      { objective: "O6", q: "Ƙa'idar yanke shawara tana ba da waɗanne zaɓuɓɓuka?", options: ["Jira har abada", "Saya ko sayarwa", "Eh kawai", "Ci gaba, gyara ko tsayawa"], answer: 3, why: "Gwajin yana ƙarewa da shawara mai sarari." },
      { objective: "O6", q: "Gabatarwar aikin ƙarshe ya kamata ta ɗauki kusan:", options: ["Minti ɗaya", "Awa biyu", "Minti goma", "Yini guda"], answer: 2, why: "Gajeriya kuma mai mai da hankali, tare da lokacin tambayoyi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      3,
      5,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Matsala da hujja",
        objective: "O1",
        notYet: "Yana farawa da kayan aiki, ko babu hujja.",
        meets: "Yana faɗin matsalar da waɗanda take shafa, tare da hujja.",
        exceeds: "Yana bayyana dalilin da yasa AI ne amsar da ta dace, ko wasu hanyoyin da aka yi tunani a kai."
      },
      {
        name: "Girman gwaji da kayan aiki",
        objective: "O2",
        notYet: "Babu bayani a sarari na su wa, me ko tsawon lokaci, ko kayan aikin ba shi da binciken mai sayarwa.",
        meets: "Girman gwaji (su wa, me, tsawon lokaci) da kayan aikin, tare da binciken mai sayarwa.",
        exceeds: "Girman gwajin ƙarami ne da za a iya aiwatarwa cikin mako shida zuwa goma sha biyu."
      },
      {
        name: "Binciken sirri da adalci",
        objective: "O3",
        notYet: "FERPA, COPPA (idan ba su kai 13 ba), sauƙin amfani ko samun dama ya ɓace.",
        meets: "Ya ƙunshi FERPA, COPPA idan ba su kai 13 ba, sauƙin amfani da samun dama.",
        exceeds: "Kowane haɗari yana da kariya da mai kula da shi, kuma jami'in kare sirri ya duba shi."
      },
      {
        name: "Ma'aikata da iyaye",
        objective: "O5",
        notYet: "Babu shirin horon ma'aikata, ko babu wasiƙar iyaye da FAQ.",
        meets: "Shirin horon ma'aikata, da wasiƙar iyaye tare da gajeren FAQ.",
        exceeds: "Iyaye ko jami'in hulɗa da iyaye ya karanta wasiƙar, kuma an inganta ta."
      },
      {
        name: "Ma'auni da ƙa'idar yanke shawara",
        objective: "O6",
        notYet: "Ma'auni ƙasa da uku, babu ma'aunin farko, ko babu ƙa'idar yanke shawara.",
        meets: "Ma'aunan nasara uku zuwa biyar tare da ma'aunin farko, da ƙa'idar ci gaba, gyara ko tsayawa.",
        exceeds: "Ya haɗa da ma'aunin tsaro da shirin duba sakamako bisa rukunonin ɗalibai."
      },
      {
        name: "Gabatarwa",
        objective: "O6",
        notYet: "Ba a gabatar ba, ko ba a rubuta tambayoyi ba.",
        meets: "An gabatar cikin minti goma, kuma an rubuta tambayoyi da amsoshi.",
        exceeds: "An karɓi tambayoyi masu wuya da farin ciki kuma an amsa su daga hujjar shirin."
      }
    ]
  },
  evaluation: {
    results: [
      "Shugabannin da suka kammala shirin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Shirye-shiryen gwaji da aka gabatar ga ƙungiyar shugabanni ko hukuma cikin kwanaki 60 (binciken biyo baya)",
      "Gwaje-gwajen da suka fara da binciken sirri da adalci da aka amince da shi da rubutacciyar ƙa'idar yanke shawara (binciken biyo baya)",
      "Gwaje-gwajen da suka kai ga shawarar ci gaba, gyara ko tsayawa ta amfani da ma'aunin farko da ma'aunansu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Ƙa'idojinku na amfani da AI cikin gaskiya daga kwas na 7 da manufofin gundumarku",
      "Taƙaitattun bayanai ko sakamakon binciken ra'ayoyi kan matsalar (babu bayanan kowane ɗalibi)",
      "Samfurin shiri na kusan shafuka huɗu",
      "Kusan minti 90 don darussa da gwaje-gwaje, da ƙarin lokacin rubutawa da gabatar da shirin"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku sa shugabanni su raba bayanan matsalolinsu a ƙananan rukunoni kafin su zaɓi kayan aiki.",
      "Ku gayyaci jami'in kare sirri na gunduma ya duba binciken sirri da adalci kafin gabatarwa.",
      "Ku nemi iyaye ko jami'in hulɗa da iyaye ya karanta daftarin wasiƙun iyaye.",
      "Ku tsara zaman gabatarwa tare da ƙungiyar shugabanni ta gaske ko ƙungiyar abokan aiki da ke taka rawar hukuma.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku tattara rubutattun tambayoyi da amsoshi."
    ]
  }
};
