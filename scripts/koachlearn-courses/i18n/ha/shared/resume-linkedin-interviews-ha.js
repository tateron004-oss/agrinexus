"use strict";

// Koach Learn course, Hausa (ha) translation of shared/resume-linkedin-interviews.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "resume-linkedin-interviews-ha",
  lang: "ha",
  translationOf: "resume-linkedin-interviews",
  category: "Athletes",
  name: "Takardar Bayanin Aiki (Resume), LinkedIn da Hirar Neman Aiki",
  skills: "Rubuta resume mai shafi ɗaya, Rubuta layukan nasarori, Gina bayananku a LinkedIn, Amsa da hanyar STAR, Amsa da gaskiya game da gibi ko tarihin laifi, Bin diddigi bayan hira",
  outcome: "rubuta resume mai shafi ɗaya mai layukan nasarori masu ƙarfi, kafa bayananku a LinkedIn a sauƙaƙe, da amsa tambayoyin hirar aiki da aka saba yi da babbar murya ta hanyar STAR, har da gajerar amsa ta gaskiya game da gibi a aiki ko tarihin laifi.",
  about: [
    "Wannan kwas ɗin na duk mai shirin neman aiki ne: ɗalibin da ke neman aikinsa na farko, ɗan wasa da ke shiga sana'a bayan wasanni, tsohon soja da ke shiga aikin farar hula, mutumin da ke dawowa gida daga gidan yari, ko wanda ke canja aiki bayan shekaru a wuri ɗaya.",
    "Za ku gina abubuwa uku da za ku iya amfani da su nan take: resume mai shafi ɗaya, bayananku a LinkedIn, da amsoshin hirar aiki da kuka gwada da babbar murya. Za ku kuma koyi abin da za ku tambayi mai ɗaukar aiki da yadda ake bin diddigi.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Kayan AI kamar ChatGPT ko Microsoft Copilot za su iya taimaka muku da kalmomi, amma bayanan gaskiya da salon magana dole su zama naku."
  ],
  finalTask: "Ku zaɓi tallar aiki ɗaya ta gaske. Ku rubuta resume mai shafi ɗaya don ita mai aƙalla layukan nasarori huɗu, ku sabunta kanun bayananku (headline) da sashen About a LinkedIn don su dace da ita, sannan ku naɗi muryarku kuna amsa tambayoyin hira uku da babbar murya ta hanyar STAR, har da amsa ɗaya ta gaskiya game da gibi ko tarihin laifi idan hakan ya shafe ku. Ku ƙare da rubuta gajeren saƙon godiya da za ku iya aikawa bayan hirar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Duk mai shirin neman aiki: ɗalibai masu neman aikinsu na farko, 'yan wasa da ke shiga sana'a bayan wasanni, tsofaffin sojoji da ke shiga aikin farar hula, mutanen da ke dawowa gida daga gidan yari, da mutanen da ke canja aiki bayan shekaru a wuri ɗaya.",
    startingPoint: "Suna da ƙwarewa daga aiki, makaranta, wasanni, aikin soja ko rayuwa, kuma suna iya amfani da waya ko kwamfuta. Da yawa suna da tsohon resume ko ba su da shi kwata-kwata, ba su da bayanai a LinkedIn, kuma ba su gwada amsoshin hira da babbar murya ba, musamman game da gibi ko tarihin laifi.",
    gap: "Masu ɗaukar aiki suna yanke shawara da sauri daga resume, bayanai a intanet da gajeriyar hira. Masu koyo suna buƙatar resume mai shafi ɗaya a sarari, bayanai masu sauƙi a LinkedIn, da amsoshi na gaskiya da suka gwada, don a ga ƙwarewarsu ta gaske, su sami gayyatar hira da tayin aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta mai kayan rubutu kyauta da mai naɗar murya",
      "Gaskiya: duk abin da ke cikin resume, bayanai ko gyaran AI dole ya zama gaskiya",
      "Sirri: babu adireshin gida ko lambobin katin shaida a LinkedIn ko a kayan AI",
      "Dokokin tarihin laifi da na ba da dama ta gaskiya (fair chance) sun bambanta daga wuri zuwa wuri; masu koyo suna duba dokokin yankinsu"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tallar aiki ta gaske", action: "tsara resume mai shafi ɗaya mai bayanan tuntuɓa, taƙaitaccen bayani, ƙwarewa da suka dace da aikin, da ƙwarewar aiki mai ranaku", standard: "a shafi ɗaya, kuma ya dace da tallar aikin" },
    { id: "O2", condition: "Idan aka ba ku jerin ayyukan da kuka yi a sauƙaƙe", action: "rubuta layukan nasarori da ke amfani da kalmar aiki, abin da kuka yi, da sakamako ko lamba", standard: "da aƙalla layuka huɗu, dukkansu gaskiya" },
    { id: "O3", condition: "Ta amfani da resume ɗinku", action: "kafa bayananku a LinkedIn masu hoto, kanun bayanai (headline), sashen About da ƙwarewar aiki", standard: "ba tare da adireshin gida ko lambobin katin shaida ba, kuma an aika buƙatun haɗi uku" },
    { id: "O4", condition: "Idan aka yi muku tambayar hira game da halaye", action: "amsa da labarin STAR: Situation (halin da ake ciki), Task (aikin da za a yi), Action (abin da kuka yi) da Result (sakamako)", standard: "cikin minti ɗaya zuwa biyu, kuma mafi yawan lokacin kan Action" },
    { id: "O5", condition: "Idan aka yi muku tambaya mai wuya game da gibi ko tarihin laifi", action: "ba da gajeriyar amsa ta gaskiya da babbar murya, wadda ke faɗin abin da kuka yi tun daga lokacin", standard: "an naɗa ta, an saurara, kuma an inganta ta aƙalla sau ɗaya" },
    { id: "O6", condition: "A ƙarshen hirar aiki", action: "yin tambayoyi masu kyau da rubuta saƙon godiya", standard: "kuma an aika saƙon cikin awa 24" }
  ],
  chapters: [
    {
      name: "Babi na 1: Resume ɗinku da LinkedIn",
      lessons: [
        {
          objectives: ["O1"],
          title: "Gina resume mai shafi ɗaya",
          minutes: 5,
          goal: "Tsara resume mai tsabta, mai shafi ɗaya, mai sassan da suka dace a jerin da ya dace.",
          text: [
            "Resume taƙaitaccen bayani ne mai shafi ɗaya na abin da za ku iya yi wa mai ɗaukar aiki. Yawancin masu ɗaukar ma'aikata suna kashe ƙasa da minti ɗaya a kallon farko, don haka dole shafin ya zama mai sauƙin dubawa: kanun rubutu a sarari, fili mai yawa, da nau'in rubutu (font) ɗaya mai sauƙi kamar Calibri ko Arial a girman 10 zuwa 12.",
            "Ku yi amfani da waɗannan sassa, daga sama zuwa ƙasa: sunanku da bayanan tuntuɓa (waya, email na ƙwararru, birni da jiha, da hanyar haɗin LinkedIn ɗinku idan kuna da shi); taƙaitaccen bayani na layi biyu; ƙwarewa; ƙwarewar aiki, sabon aiki a farko; sannan ilimi, horo da takardun shaida.",
            "Ƙwarewar aiki ta wuce ayyukan da aka biya ku. Ku ƙidaya aikin sa-kai, aikin soja, zama kyaftin ko koci a ƙungiya, aiki a coci, masallaci ko a al'umma, da ayyuka ko horon da kuka yi a gidan yari, kamar kicin, gyare-gyare ko shirin koyon sana'a. Idan kun fi so, ku bayyana abin da kuka yi, ba wurin da kuka yi shi ba.",
            "Ku ɗan canja resume ɗinku don kowane aiki. Ku karanta tallar aikin, ku nemo ƙwarewar da take nema, kuma ku tabbata kalmomin da kuke amfani da su sun dace da ƙwarewar da kuke da ita da gaske. Masu ɗaukar aiki da yawa suna amfani da manhajar da ke bincika resume don neman waɗannan kalmomi."
          ],
          steps: ["Ku buɗe kayan rubutu kyauta kamar Google Docs ko Microsoft Word, ko ku yi amfani da samfurin resume mai sauƙi.", "Ku saka sunanku da bayanan tuntuɓa a sama. Ku yi amfani da email na ƙwararru, kamar wanda aka yi da sunanku na farko da na ƙarshe.", "Ku rubuta taƙaitaccen bayani na layi biyu: ko wane ne ku da abin da kuke bayarwa.", "Ku jera ƙwarewa 6 zuwa 10 da suka dace da tallar aikin.", "Ku jera ƙwarewar aiki, sabo a farko: sunan matsayi, ƙungiya, birni, ranaku da layuka 3 zuwa 4 a kowanne.", "Ku saka ilimi, horo da takardun shaida. Ku bar komai a shafi ɗaya."],
          words: [["Resume", "takarda mai shafi ɗaya da ke taƙaita ƙwarewarku, aikin da kuka yi da horonku, wadda kuke aikawa idan kuna neman aiki."], ["Tallar aiki (job posting)", "sanarwar da ke bayyana wani aiki da abin da mai ɗaukar aiki yake nema."], ["Applicant tracking system", "manhajar da masu ɗaukar aiki da yawa ke amfani da ita don tara resume da bincika su don neman muhimman kalmomi."]],
          slides: [
            { title: "Resume shi ne gabatarwarku a shafi ɗaya", bullets: ["Mai sauƙin dubawa cikin ƙasa da minti ɗaya", "Nau'in rubutu ɗaya mai sauƙi, girma 10 zuwa 12", "Kanun rubutu a sarari da fili"] },
            { title: "Sassa, daga sama zuwa ƙasa", bullets: ["Suna da bayanan tuntuɓa", "Taƙaitaccen bayani na layi biyu da ƙwarewa", "Ƙwarewar aiki, sabo a farko", "Ilimi, horo da takardun shaida"] },
            { title: "Duk ƙwarewa tana da daraja", bullets: ["Aikin sa-kai da aikin soja", "Kyaftin na ƙungiya, koci, ayyukan al'umma", "Ayyuka da shirye-shiryen horo a gidan yari"] },
            { title: "Ku dace da kowace talla", bullets: ["Ku nemo ƙwarewar da tallar ke nema", "Ku yi amfani da kalmomi iri ɗaya don ƙwarewar da kuke da ita da gaske"] }
          ],
          tryIt: "Ku nemo tallar aiki ɗaya ta gaske da za ku nema. Ku fara sabuwar takarda ku gina tsarin resume don ita: bayanan tuntuɓarku, taƙaitaccen bayani na layi biyu, ƙwarewa shida da suka dace da tallar, da ƙwarewar aikinku da ranaku. Ku bar layukan nasarori don darasi na gaba.",
          youCanNow: "tsara resume mai shafi ɗaya mai sassan da suka dace, da daidaita shi da tallar aiki.",
          quickCheck: [
            { objective: "O1", q: "Mene ne taƙaitaccen bayani a resume?", options: ["Layi biyu a sama da ke faɗin ko wane ne ku da abin da kuke bayarwa", "Jerin kowane aikin da kuka taɓa yi", "Lambobin wayar mutanen da za su ba da shaida game da ku", "Tarihin albashinku"], answer: 0, why: "Gajeren taƙaitaccen bayani yana faɗa wa mai ɗaukar aiki da sauri abin da kuke kawowa." },
            { objective: "O1", q: "Tallar aiki tana neman ƙwarewar tuƙa forklift da kula da kaya, kuma kuna da su. Me za ku yi da resume ɗinku?", options: ["Ku bar shi iri ɗaya don kowane aiki", "Ku ƙara dukkan labarin rayuwarku", "Ku ƙara waɗannan ƙwarewa a sashen ƙwarewa da ƙwarewar aiki", "Ku mai da shi shafi uku"], answer: 2, why: "Daidaita resume da tallar aiki yana nuna cewa kun dace da aikin." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta layukan nasarori",
          minutes: 5,
          goal: "Mayar da ayyuka na yau da kullum zuwa layukan da ke nuna abin da kuka cimma.",
          text: [
            "Layuka marasa ƙarfi suna jera ayyuka ne kawai: \"Ina da alhakin tsaftacewa.\" Layuka masu ƙarfi suna nuna sakamako: \"Na tsaftace kuma na cika kayan ɗakuna 12 a kowace shiga aiki, kuma na ci kowane bincike na mako-mako.\" Mai ɗaukar aiki zai iya hango ku kuna yin aikin da kyau.",
            "Dabara mai sauƙi: kalmar aiki + abin da kuka yi + sakamako ko lamba. Ku fara da kalma mai ƙarfi kamar na jagoranci, na gina, na horar, na gyara, na yi hidima, na tsara, na rage ko na inganta. Sannan ku ƙara lamba idan za ku iya: mutane nawa, kuɗi nawa, sau nawa, ko sauri nawa.",
            "Misalai daga rayuwa daban-daban: \"Na horar da sababbin ma'aikata 4 kan jerin ayyukan buɗe shago.\" (shago) \"Na jagoranci sojoji 9 a binciken kayan aiki na kullum ba tare da asarar komai ba.\" (soja) \"Na zama kyaftin na ƙungiyar makaranta mai mutum 22, kuma na shirya kallon bidiyon wasa na mako-mako.\" (ɗan wasa) \"Na dafa abinci ga mutane 300 a rana a kicin na wata cibiya, kuma na cika kowane binciken tsaftar abinci.\" (masu dawowa gida)",
            "Ku faɗi gaskiya. Kada ku taɓa ƙirƙirar lambobi ko sunayen matsayi. Idan ba ku tabbata da lamba ba, ku yi amfani da kimanin gaskiya da kalmar \"kusan\", ko ku bayyana sakamakon da kalmomi."
          ],
          steps: ["Ku rubuta aiki ɗaya da kuka yi a wurin aiki, ƙungiya ko shiri.", "Ku fara da kalmar aiki.", "Ku ƙara abin da kuka yi da kuma wa kuka yi wa.", "Ku ƙara lamba ko sakamako.", "Ku karanta shi da babbar murya: yana kama da abin da kuka yi da gaske?"],
          words: [["Layin nasara (accomplishment bullet)", "gajeren layi ɗaya a resume da ke nuna sakamakon da kuka cimma, ba aiki kawai ba."], ["Kalmar aiki (action verb)", "kalma da ke nuna aiki kamar na jagoranci, na gina, na horar ko na gyara."]],
          slides: [
            { title: "Ayyuka da sakamako", bullets: ["Mara ƙarfi: \"Ina da alhakin tsaftacewa\"", "Mai ƙarfi: \"Na tsaftace ɗakuna 12 a kowace shiga aiki kuma na ci kowane bincike\""] },
            { title: "Dabarar rubuta layi", bullets: ["Kalmar aiki", "+ abin da kuka yi", "+ lamba ko sakamako"] },
            { title: "Misalai daga rayuwa daban-daban", bullets: ["\"Na horar da sababbin ma'aikata 4 kan binciken buɗe shago\"", "\"Na zama kyaftin na ƙungiya mai mutum 22 kuma na shirya kallon bidiyon wasa\"", "\"Na dafa abinci 300 a rana, kuma na cika kowane binciken tsafta\""] },
            { title: "Ku tsaya kan gaskiya", bullets: ["Kada ku taɓa ƙirƙirar lambobi ko sunayen matsayi", "Ku yi amfani da \"kusan\" don kimanin gaskiya", "Ku bayyana sakamakon da kalmomi idan ba ku da lamba"] }
          ],
          tryIt: "Ku rubuta layukan nasarori huɗu don resume ɗinku ta amfani da dabarar. Kuna iya tambayar mataimakin AI: \"Ka ƙara ƙarfin wannan layin resume ba tare da ƙara wani abu da ba gaskiya ba: [layinku].\" Ku duba cewa kowace kalmar da ya ba ku gaskiya ce kafin ku ajiye ta.",
          youCanNow: "rubuta layukan nasarori da ke farawa da kalmar aiki kuma suna nuna sakamako.",
          quickCheck: [
            { objective: "O2", q: "Wace ce kalmar aiki da ke fara layi mai ƙarfi?", options: ["Ina da alhakin", "Na horar", "Ayyukan sun haɗa da", "Ni ne mai kula"], answer: 1, why: "Layuka suna farawa da kalmar aiki da ke nuna abin da kuka yi." },
            { objective: "O2", q: "Layinku yana cewa \"Na yi hidimar abokan ciniki.\" Me za ku rubuta a maimakon haka?", options: ["\"Na yi hidimar abokan ciniki da yawa\"", "\"Hidimar abokan ciniki, kuɗi, waya\"", "\"Ni ne mafi iya hidimar abokan ciniki\"", "\"Na taimaki kusan abokan ciniki 50 a rana kuma na karɓi kayan da aka dawo da su cikin natsuwa\""], answer: 3, why: "Layuka masu ƙarfi suna nuna abin da kuka yi tare da sakamako ko lamba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gina bayananku a LinkedIn",
          minutes: 5,
          goal: "Kafa bayananku a LinkedIn masu hoto, kanun bayanai (headline), sashen About da ƙwarewar aiki.",
          text: [
            "LinkedIn shafin intanet ne da manhaja kyauta don haɗuwa da mutane a fannin aiki. Masu ɗaukar aiki da masu neman ma'aikata (recruiters) suna bincika shi don neman mutanen da za su ɗauka, kuma ana sanar da ayyuka da yawa a can. Bayananku a can suna aiki kamar resume a intanet da mutane za su iya samu.",
            "Sassa mafi muhimmanci: hoton fuskarku a sarari da bango mara ado; kanun bayanai (layin da ke ƙarƙashin sunanku) da ke faɗin abin da kuke yi ko kuke son yi, kamar \"Mai tuƙa forklift | OSHA 10 | Amintacce a aikin safe\"; sashen About na jimloli uku zuwa biyar da salon maganarku; da ƙwarewar aikinku, ta amfani da layukan resume ɗinku.",
            "Sannan ku gina hanyar sadarwarku (network). Ku haɗu da mutanen da kuka sani: tsofaffin koci, shugabannin aiki, malamai, masu kula da shari'arku (case managers), waɗanda kuka yi aikin soja tare, abokan makaranta. Ku aika gajeren saƙo idan kuna haɗuwa. Ku bi kamfanonin da kuke son yin aiki a cikinsu don ku ga tallace-tallacen ayyukansu.",
            "Ku bar shi na ƙwararru kuma lafiya. Kada ku saka adireshin gidanku, ranar haihuwarku ko lambobin katin shaida. Bayananku ba dole su ambaci tarihin laifi ko gibi ba; suna nuna ƙwarewarku."
          ],
          steps: ["Ku je linkedin.com ko ku saka manhajar LinkedIn ta hukuma, sannan ku buɗe asusu kyauta da email na ƙwararru.", "Ku saka hoto mai sarari, mai fara'a.", "Ku rubuta kanun bayanai da ke faɗin abin da kuke yi ko aikin da kuke so.", "Ku rubuta sashen About na jimloli uku zuwa biyar.", "Ku saka ƙwarewar aikinku da ƙwarewarku daga resume ɗinku.", "Ku haɗu da mutane biyar da kuka sani, tare da gajeren saƙo."],
          words: [["LinkedIn", "shafin intanet da manhaja kyauta na sadarwar aiki, inda mutane ke nuna tarihin aikinsu kuma masu ɗaukar aiki ke sanar da ayyuka."], ["Kanun bayanai (headline)", "gajeren layin da ke ƙarƙashin sunanku a LinkedIn da ke faɗin abin da kuke yi."], ["Hanyar sadarwa (network)", "mutanen da kuka sani waɗanda za su iya ba ku labarin ayyuka ko su yi magana kan aikinku."]],
          slides: [
            { title: "Me yasa LinkedIn", bullets: ["Masu neman ma'aikata suna bincika shi don neman mutane", "Ana sanar da ayyuka da yawa a can", "Resume ɗinku a intanet da mutane za su iya samu"] },
            { title: "Muhimman sassa", bullets: ["Hoto mai sarari da bango mara ado", "Kanun bayanai: abin da kuke yi ko kuke son yi", "About: jimloli 3 zuwa 5 da salon maganarku", "Layukan ƙwarewar aiki daga resume ɗinku"] },
            { title: "Ku gina hanyar sadarwarku", bullets: ["Koci, shugabannin aiki, malamai, masu kula da shari'a", "Ku aika gajeren saƙo da kowace buƙatar haɗi", "Ku bi kamfanonin da kuke son yin aiki a cikinsu"] },
            { title: "Ku zauna lafiya", bullets: ["Babu adireshin gida, ranar haihuwa ko lambobin katin shaida", "Ku nuna ƙwarewarku; ku ne kuke zaɓar abin da za ku raba"] }
          ],
          tryIt: "Ku buɗe ko ku sabunta bayananku a LinkedIn. Ku rubuta kanun bayananku da sashen About, ku saka aiki ɗaya da sababbin layukanku, kuma ku aika buƙatun haɗi tare da gajeren saƙo ga mutane uku da kuka sani.",
          youCanNow: "kafa bayananku a LinkedIn masu hoto, kanun bayanai, sashen About da ƙwarewar aiki, da fara gina hanyar sadarwarku.",
          quickCheck: [
            { objective: "O3", q: "Me sashen About a LinkedIn yake yi?", options: ["Yana jera adireshin gidanku", "Yana faɗin labarin aikinku da abin da kuke nema a cikin 'yan gajerun layuka", "Yana nuna kalmomin sirrinku", "Yana jera abokanku na kafofin sada zumunta"], answer: 1, why: "Sashen About gajeren labari ne na ƙwarewarku da burinku." },
            { objective: "O3", q: "Kuna son haɗuwa da tsohon shugaban aikinku a LinkedIn. Me za ku yi?", options: ["Ku aika buƙata tare da gajeren saƙo mai fara'a", "Ku aika buƙata ba tare da saƙo ba, tare da lambar wayarku", "Ku tura masa saƙo kuna neman aiki nan take", "Ku jira shi ya nemo ku"], answer: 0, why: "Gajeren saƙo yana tunatar da shi ko wane ne ku kuma yana fara kyakkyawar alaƙa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Resume ɗinku da LinkedIn",
        questions: [
          { objective: "O1", q: "Tsawon resume don yawancin ayyukan farko da na matsakaicin mataki ya kamata ya zama nawa?", options: ["Shafi uku", "Shafi ɗaya", "Rabin shafi", "Tsawon da zai yiwu"], answer: 1, why: "Shafi ɗaya yana da sauƙin dubawa kuma shi ne ƙa'idar yawancin ayyuka." },
          { objective: "O2", q: "Wane layi ne ya fi ƙarfi?", options: ["\"Ina da alhakin ɗakin ajiyar kaya\"", "\"Na yi ayyuka iri-iri\"", "\"Mai ƙwazo\"", "\"Na tsara ɗakin ajiyar kaya kuma na rage lokacin neman kayan gyara da kusan rabi\""], answer: 3, why: "Yana farawa da kalmar aiki kuma yana nuna sakamako." },
          { objective: "O1", q: "Kun gudanar da layin girki a shirin wata cibiya lokacin da kuke gidan yari. Ya kamata ya shiga resume ɗinku?", options: ["Eh, a matsayin ƙwarewar aiki, kuna bayyana ƙwarewar da kuka yi amfani da ita", "A'a, ba ya taɓa da daraja", "Sai idan an biya ku kuɗi mai yawa", "A LinkedIn kawai"], answer: 0, why: "Ayyuka da shirye-shiryen horo ƙwarewa ce ta gaske; ku bayyana abin da kuka yi." },
          { objective: "O3", q: "Wane ne kanun bayanai mai kyau a LinkedIn?", options: ["\"Ina nema\"", "Adireshin gidanku", "\"Mai walda mai takardar shaida | Tsaro farko | A shirye don koyon sana'a\"", "Ranar haihuwarku"], answer: 2, why: "Kanun bayanai yana faɗin abin da kuke yi ko kuke son yi kuma yana nuna ƙarfinku." },
          { objective: "O2", q: "Wani kayan AI ya sake rubuta layinku kuma ya ƙara matsayin manaja da ba ku taɓa riƙewa ba. Me za ku yi?", options: ["Ku bar shi, yana da kyau a ji", "Ku cire shi, domin duk abin da ke cikin resume dole ya zama gaskiya", "Ku ƙara wani matsayi", "Ku saka shi a LinkedIn kawai"], answer: 1, why: "Dole resume ya zama gaskiya; ku duba kowace kalma da AI ya rubuta." }
        ]
      }
    },
    {
      name: "Babi na 2: Hirar aiki da bin diddigi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Amsa da hanyar STAR",
          minutes: 5,
          goal: "Amsa tambayar hira game da halaye da gajeren labarin STAR.",
          text: [
            "Tambayoyin hira da yawa suna farawa da \"Ba ni labarin wani lokaci da...\". Mai ɗaukar aiki yana son misali na gaske na yadda kuke aikatawa. Hanyar STAR tana sa amsarku ta zama a sarari kuma gajeriya.",
            "S ita ce Situation (halin da ake ciki): inda kuke da abin da ke faruwa. T ita ce Task (aikin da za a yi): abin da dole ku yi. A ita ce Action (abin da kuka yi): abin da KU kuka yi, mataki-mataki. R ita ce Result (sakamako): yadda abin ya ƙare, da lamba idan za ku iya, da abin da kuka koya.",
            "Misali: \"Ba ni labarin wani lokaci da kuka magance matsala.\" S: \"A aikina na rumbun ajiyar kaya, kaya sun iso da jinkirin awa biyu a rana mai cunkoso.\" T: \"Dole na jera su a kan shelf kafin a buɗe shagon.\" A: \"Na tambayi shugabana ko zan iya raba ƙungiyar, na kafa layukan sauke kaya biyu, kuma na duba alamomin kayan da kaina.\" R: \"Mun gama minti 15 kafin buɗewa, kuma babu abin da ya ɓace.\"",
            "Ku shirya labarai biyar kafin kowace hira: lokacin da kuka magance matsala, kuka yi aiki a ƙungiya, kuka gyara kuskure, kuka yi mu'amala da mutum mai wuya, da kuka koyi wani abu da sauri. Wasanni, aikin soja, makaranta, iyali da shirye-shirye duk suna ba da labarai masu kyau."
          ],
          steps: ["Ku karanta tambayar ku zaɓi labari na gaske.", "Situation: jimla ɗaya kan inda da yaushe.", "Task: jimla ɗaya kan abin da dole ku yi.", "Action: jimloli biyu ko uku kan abin da kuka yi.", "Result: jimla ɗaya kan yadda abin ya ƙare da abin da kuka koya.", "Ku bar dukkan amsar kusan minti ɗaya zuwa biyu."],
          words: [["Tambaya game da halaye (behavior question)", "tambayar hira da ke neman labarin wani lokaci da kuka yi wani abu, don ganin yadda kuke aikatawa a wurin aiki."], ["Hanyar STAR", "hanyar amsa: Situation, Task, Action, Result (halin da ake ciki, aikin da za a yi, abin da kuka yi, sakamako)."]],
          slides: [
            { title: "\"Ba ni labarin wani lokaci da...\"", bullets: ["Mai ɗaukar aiki yana son misali na gaske", "STAR tana sa ta zama a sarari kuma gajeriya"] },
            { title: "STAR", bullets: ["Situation: inda da yaushe", "Task: abin da dole ku yi", "Action: abin da KU kuka yi", "Result: yadda ya ƙare da abin da kuka koya"] },
            { title: "Ku shirya labarai biyar", bullets: ["Kun magance matsala; kun yi aiki a ƙungiya", "Kun gyara kuskure; kun yi mu'amala da mutum mai wuya", "Kun koyi wani abu da sauri"] },
            { title: "Ku taƙaita ta", bullets: ["Kusan minti ɗaya zuwa biyu", "Ku ce \"Ni\" ko \"Na\" don ayyukanku", "Ku ƙare da sakamako"] }
          ],
          tryIt: "Ku rubuta labarin STAR ɗaya don \"Ba ni labarin wani lokaci da kuka yi aiki a ƙungiya.\" Ku yi amfani da jimla ɗaya kowanne don Situation da Task, biyu ko uku don Action, da ɗaya don Result.",
          youCanNow: "amsa tambayar \"ba ni labarin wani lokaci\" da labarin STAR a sarari.",
          quickCheck: [
            { objective: "O4", q: "Me harafin S a STAR yake nufi?", options: ["Skill (ƙwarewa)", "Strength (ƙarfi)", "Situation (halin da ake ciki)", "Summary (taƙaitaccen bayani)"], answer: 2, why: "STAR ita ce Situation, Task, Action da Result." },
            { objective: "O4", q: "An tambaye ku, \"Ba ni labarin wani lokaci da kuka magance matsala.\" Me za ku yi?", options: ["Ku ce \"Na iya magance matsaloli\" ku tsaya", "Ku yi magana na minti goma kan matsaloli da yawa", "Ku ce ba ku taɓa samun matsala ba", "Ku ba da gajeren labari ɗaya: halin da ake ciki, aikin, abin da kuka yi da sakamakon"], answer: 3, why: "Gajeren labarin STAR ɗaya yana tabbatar da ƙwarewarku da misali na gaske." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gwadawa da babbar murya da amsa da gaskiya game da gibi ko tarihin laifi",
          minutes: 6,
          goal: "Gwada amsoshi da babbar murya, har da gajeriyar amsa ta gaskiya game da gibi ko tarihin hukuncin laifi.",
          text: [
            "Amsoshin da kuka karanta a zuciyarku kawai suna fitowa a rikice. Ku faɗe su da babbar murya, ku naɗi muryarku a waya, sannan ku saurara. Ku gwada tambayoyin da aka saba yi: \"Ba ni labarin kanku\", \"Me yasa kuke son wannan aikin?\", \"Mene ne ƙarfinku?\", da \"Ba ni labarin wani lokaci da...\". Kuna iya neman mataimakin AI ya yi kamar mai yin hirar ya yi muku tambaya ɗaya bayan ɗaya.",
            "Gibi a tarihin aiki abu ne da aka saba gani: makaranta, wasanni, aikin soja, kula da iyali, rashin lafiya, ko zaman gidan yari. Ku taƙaita amsar ku ci gaba gaba: mene ne gibin, me kuka yi ko kuka koya, da me yasa kuke a shirye yanzu. Misali: \"Na yi shekara biyu ina kula da mahaifiyata. Na ci gaba da ƙwarewata da wani kwas a intanet, kuma ina a shirye in yi aiki na cikakken lokaci.\"",
            "Idan kuna da tarihin hukuncin laifi, kada ku yi ƙarya a takardar neman aiki ko a hira. Idan aka tambaye ku, ku ba da gajeriyar amsa ta gaskiya: ku yarda da shi, ku faɗi abin da kuka yi tun daga lokacin, sannan ku koma kan aikin. Misali: \"Na yi babban kuskure a 2019 kuma na cika hukuncina. Tun daga lokacin na gama takardar shaidar tuƙa forklift kuma na yi aiki wata 18 ba tare da rasa ko da shiga aiki ɗaya ba. A shirye nake in kawo wannan amincin nan.\" Kada ku ba da cikakken bayani mai tsawo sai idan an tambaya.",
            "Ku san haƙƙoƙinku. Bisa jagorancin EEOC (hukumar Amurka da ke kare daidaito a aiki), kama mutum kaɗai ba hujja ce ta laifi ba, kuma ya kamata masu ɗaukar aiki su duba laifin, tsawon lokacin da ya wuce da kuma aikin. Jihohi da birane da yawa suna da dokokin \"ban the box\" ko na ba da dama ta gaskiya (fair chance) da ke jinkirta tambayoyi game da tarihin laifi. Ana iya rufe ko share wasu bayanan laifi; ku tambayi ofishin taimakon shari'a kyauta (legal aid) ko shirinku na masu dawowa gida. Ku duba shafukan hukuma da ke ƙasa."
          ],
          steps: ["Ku rubuta amsarku ga \"Ba ni labarin kanku\" a jimloli huɗu: yanzu, baya, ƙarfinku, me yasa wannan aikin.", "Ku naɗi muryarku a waya kuna amsa tambayoyi uku, sannan ku saurara.", "Ku rubuta amsa mai sassa uku don kowane gibi: mene ne, me kuka yi, me yasa kuke a shirye.", "Idan kuna da tarihin laifi: ku yarda da shi, ku nuna abin da kuka yi tun daga lokacin, ku koma kan aikin.", "Ku gwada amsar mai wuya da babbar murya har ta yi kama da natsuwa da gajarta."],
          words: [["Gibi a aiki (employment gap)", "lokacin da ba ku yi aiki ba, wanda ranakun da suka ɓace a resume ke nunawa."], ["Ban the box", "dokoki a jihohi da birane da yawa na Amurka da ke hana masu ɗaukar aiki tambaya game da tarihin laifi a takardar neman aiki ta farko."], ["Expungement (share tarihin laifi)", "hanyar kotu da za ta iya share ko rufe wasu bayanan laifi; dokoki sun bambanta daga jiha zuwa jiha."]],
          slides: [
            { title: "Ku gwada da babbar murya", bullets: ["Ku naɗi muryarku a wayarku", "Ku saurara ku taƙaita amsar", "Ku nemi mataimakin AI ya yi kamar mai yin hira"] },
            { title: "Amsa game da gibi", bullets: ["Mene ne gibin", "Me kuka yi ko kuka koya", "Me yasa kuke a shirye yanzu"] },
            { title: "Amsa game da tarihin laifi", bullets: ["Kada ku taɓa yin ƙarya a takardar neman aiki", "Ku yarda da shi a jimla ɗaya", "Ku nuna abin da kuka yi tun daga lokacin", "Ku koma kan aikin"] },
            { title: "Ku san haƙƙoƙinku", bullets: ["Kama mutum kaɗai ba hujja ce ta laifi ba", "Wurare da yawa suna da dokokin ban-the-box ko fair chance", "Ku tambayi legal aid game da rufewa ko share tarihin laifi"] }
          ],
          sources: [
            { name: "EEOC: Bayanan kama mutum da hukuncin laifi, abin da masu neman aiki da ma'aikata ya kamata su sani (Turanci)", url: "https://www.eeoc.gov/arrestandconviction" }
          ],
          tryIt: "Ku naɗi muryarku kuna amsa \"Ba ni labarin kanku\" da tambaya ɗaya mai wuya (gibi, tarihin laifi, ko \"Me yasa kuka bar aikinku na ƙarshe?\"). Ku saurara. Ku cire duk abin da ba a buƙata ba, sannan ku sake naɗawa.",
          youCanNow: "gwada amsoshi da babbar murya da ba da gajeriyar amsa ta gaskiya mai duba gaba game da gibi ko tarihin laifi.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku naɗi muryarku kuna amsa tambayoyin hira?", options: ["Don ku ji abin da za ku cire ku inganta", "Don ku saka shi a intanet", "Don ku aika wa mai ɗaukar aiki", "Domin ana naɗar kowace hira koyaushe"], answer: 0, why: "Sauraron muryarku yana nuna muku abin da za ku taƙaita da gyarawa." },
            { objective: "O5", q: "Mai yin hira ya tambaye ku game da gibi na shekara biyu lokacin da kuke gidan yari. Me za ku ce?", options: ["Ku ƙirƙiri wani aiki daban", "Ku ƙi amsawa ku tafi", "Ku ba da dogon labari game da shari'ar", "Ku ba da gajeriyar amsa ta gaskiya ku faɗi abin da kuka yi tun daga lokacin"], answer: 3, why: "Gajeriya da gaskiya, sannan ku mai da hankali kan abin da kuka yi tun daga lokacin." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yin tambayoyi da bin diddigi",
          minutes: 4,
          goal: "Yin tambayoyi masu kyau a ƙarshen hira da aika saƙon godiya.",
          text: [
            "Kusa da ƙarshe, yawancin masu yin hira suna tambaya, \"Kuna da wata tambaya a gare mu?\" Koyaushe ku shirya biyu ko uku. Hakan yana nuna sha'awa. Tambayoyi masu kyau: \"Yaya wata na farko mai kyau yake a wannan aikin?\", \"Me mafiya ƙwazo a wannan ƙungiya suke yi daban?\", \"Mene ne matakai na gaba, kuma yaushe zan sa ran jin daga gare ku?\"",
            "Ku bar tambayoyi game da albashi da alawus har sai sun kawo maganar ko sun ba da tayin aiki, sai dai idan tallar aikin ba ta faɗi albashi ba kuma kuna buƙatar sani. Ku tambaya cikin ladabi.",
            "Cikin awa 24, ku aika gajeren saƙon godiya ta email (ko kati idan ƙaramin kasuwanci ne na yankinku). Ku gode musu saboda lokacinsu, ku ambaci abu ɗaya da kuka tattauna, sannan ku sake faɗin dalilin da yasa kuke son aikin. Ku bar shi jimloli huɗu ko biyar.",
            "Idan ba ku ji daga gare su ba zuwa ranar da suka faɗa, ku aika saƙon bin diddigi ɗaya cikin ladabi bayan 'yan kwanaki. Ku ci gaba da neman wasu ayyuka a halin yanzu."
          ],
          steps: ["Ku shirya tambayoyi biyu ko uku kafin hirar.", "Ku tambaya game da matakai na gaba da lokacinsu.", "Ku rubuta sunan mai yin hirar da email ɗinsa.", "Ku aika gajeren saƙon godiya cikin awa 24.", "Ku bi diddigi sau ɗaya idan ranar da suka faɗa ta wuce."],
          words: [["Bin diddigi (follow-up)", "gajeren saƙo mai ladabi bayan hira don gode wa mai ɗaukar aiki ko tambaya game da matakai na gaba."]],
          slides: [
            { title: "Koyaushe ku shirya tambayoyi", bullets: ["\"Yaya wata na farko mai kyau yake?\"", "\"Me mafiya ƙwazo a nan suke yi daban?\"", "\"Mene ne matakai na gaba?\""] },
            { title: "Albashi da alawus", bullets: ["Yawanci ku jira har sai sun kawo maganar ko sun ba da tayi", "Ku tambaya cikin ladabi idan ba a faɗi albashi ba"] },
            { title: "Saƙon godiya", bullets: ["Ku aika cikin awa 24", "Ku ambaci abu ɗaya da kuka tattauna", "Jimloli huɗu ko biyar"] },
            { title: "Ba amsa har yanzu?", bullets: ["Ku bi diddigi sau ɗaya bayan ranarsu ta wuce", "Ku ci gaba da neman aiki a wasu wurare"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta gajeren saƙon godiya don hirar da kuka shirya mata. Sannan ku haɗa komai: resume ɗinku mai shafi ɗaya, sabunta kanun bayanai da sashen About a LinkedIn, da amsoshin STAR uku da kuka naɗa.",
          youCanNow: "yin tambayoyi masu kyau a ƙarshen hira da bin diddigi da gajeren saƙon godiya.",
          quickCheck: [
            { objective: "O6", q: "Me saƙon godiya mai kyau ya ƙunsa?", options: ["Godiya, abu ɗaya da kuka tattauna da dalilin da yasa kuke son aikin", "Kalmar godiya kawai", "Neman ƙarin albashi", "Dukkan resume ɗinku kuma"], answer: 0, why: "Ambaton abin da kuka tattauna yana nuna sha'awa ta gaske." },
            { objective: "O6", q: "A ƙarshen hirar sun tambaye ku ko kuna da tambayoyi. Me za ku tambaya?", options: ["\"Yaushe zan iya ɗaukar hutu?\"", "\"A'a, babu.\"", "\"Mene ne matakai na gaba, kuma yaushe zan sa ran jin daga gare ku?\"", "\"Na sami aikin?\""], answer: 2, why: "Tambaya game da matakai na gaba tana nuna sha'awa kuma tana faɗa muku lokacin bin diddigi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Hirar aiki da bin diddigi",
        questions: [
          { objective: "O4", q: "Me harafin A a STAR yake nufi?", options: ["Answer (amsa)", "Attitude (hali)", "Action (abin da kuka yi)", "Award (kyauta)"], answer: 2, why: "STAR ita ce Situation, Task, Action, Result." },
          { objective: "O5", q: "Mene ne hanya mafi kyau ta gwada amsoshin hira?", options: ["Ku karanta su a zuciya sau ɗaya", "Ku haddace rubutu kalma-kalma kuma kada ku taɓa faɗinsa da murya", "Ku ƙi gwadawa don ku yi kama da na halitta", "Ku faɗe su da babbar murya ku naɗi muryarku"], answer: 3, why: "Faɗi da sauraron muryarku yana nuna muku abin da za ku gyara." },
          { objective: "O5", q: "Kun yi shekara ɗaya ba aiki saboda kula da mahaifi ko mahaifiya. Wace amsa ce mafi kyau?", options: ["\"Na kula da mahaifiyata na shekara ɗaya, na ci gaba da ƙwarewata da wani kwas, kuma ina a shirye in yi aiki na cikakken lokaci.\"", "\"Na fi so kada in faɗa.\"", "Ku ƙirƙiri aiki don cike gibin", "Labari na minti goma game da matsalolin iyali"], answer: 0, why: "Gajeriya ce, gaskiya ce, kuma tana ci gaba zuwa dalilin da yasa kuke a shirye." },
          { objective: "O5", q: "Mai yin hira ya tambaye ku game da tarihin hukuncin laifinku. Me ya kamata ku yi?", options: ["Ku musanta", "Ku ba da gajeriyar amsa ta gaskiya ku faɗi abin da kuka yi tun daga lokacin", "Ku fita", "Ku faɗi kowane bayani na minti goma"], answer: 1, why: "Gaskiya tare da abin da kuka yi tun daga lokacin suna gina amana; ƙarya za ta iya sa ku rasa aikin daga baya." },
          { objective: "O6", q: "Yaushe ya kamata ku aika saƙon godiya?", options: ["Cikin awa 24", "Bayan wata ɗaya", "Sai idan kun sami aikin", "Kada ku taɓa"], answer: 0, why: "Saƙo mai sauri yana nuna sha'awa yayin da har yanzu suna tuna ku sosai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Takardar Bayanin Aiki (Resume), LinkedIn da Hirar Neman Aiki",
    questions: [
      { objective: "O1", q: "Me ya kamata ya kasance a saman resume gaba ɗaya?", options: ["Abubuwan sha'awarku", "Mutanen da za su ba da shaida game da ku", "Sunanku da bayanan tuntuɓa", "Ranar haihuwarku"], answer: 2, why: "Suna da bayanan tuntuɓa suna zuwa farko don mai ɗaukar aiki ya iya samun ku." },
      { objective: "O1", q: "Me yasa za ku ɗan canja resume ɗinku don kowane aiki?", options: ["Don ya dace da ƙwarewar da tallar ke nema", "Domin doka ta tilasta", "Don ya ƙara tsawo", "Don ku ƙara ayyukan da ba ku yi ba"], answer: 0, why: "Daidaita ƙwarewarku ta gaske da tallar yana taimaka wa mutane da manhaja su same ku." },
      { objective: "O1", q: "Wane adireshin email ne ya fi kyau a resume?", options: ["partyking99@example.com", "jordan.smith@example.com", "Babu email kwata-kwata", "Tsohon email ɗinku na makaranta da ba za ku iya buɗewa ba"], answer: 1, why: "Adireshi mai sauƙi na ƙwararru da kuke dubawa akai-akai shi ne mafi kyau." },
      { objective: "O2", q: "Wani tsohon soja ya jagoranci ƙungiyar mutum 9 a binciken kayan aiki na kullum. Wane layi ne ya fi ƙarfi?", options: ["\"Na kasance a soja\"", "\"Na yi bincike\"", "\"Ayyuka iri-iri\"", "\"Na jagoranci sojoji 9 a binciken kayan aiki na kullum ba tare da asarar komai ba\""], answer: 3, why: "Kalmar aiki, abin da aka yi, da sakamako." },
      { objective: "O2", q: "Mene ne dabarar rubuta layi?", options: ["Sunan matsayi + albashi", "Kalmar aiki + abin da kuka yi + sakamako ko lamba", "Siffa + siffa + siffa", "Rana + wuri"], answer: 1, why: "Wannan dabara tana mayar da ayyuka zuwa nasarori." },
      { objective: "O2", q: "Ba ku tabbata da ainihin lamba don wani layi ba. Me za ku yi?", options: ["Ku yi amfani da kimanin gaskiya da \"kusan\" ko ku bayyana sakamakon da kalmomi", "Ku ƙirƙiri babbar lamba", "Ku cire dukkan aikin", "Ku kwafi lamba daga resume na aboki"], answer: 0, why: "Ku tsaya kan gaskiya; dole kimani ya zama na gaskiya kuma a nuna cewa kimani ne." },
      { objective: "O3", q: "Mene ne kanun bayanai (headline) a LinkedIn?", options: ["Adireshin gidanku", "Labarin jarida", "Gajeren layin da ke ƙarƙashin sunanku da ke faɗin abin da kuke yi", "Kalmar sirrinku"], answer: 2, why: "Kanun bayanai yana faɗa wa masu neman ma'aikata abin da kuke yi ko kuke son yi." },
      { objective: "O3", q: "Wane hoto ne ya fi kyau a LinkedIn?", options: ["Hoton gungun mutane a biki", "Hoton motarku", "Babu fuska, tambari kawai", "Hoton fuskarku a sarari da bango mara ado"], answer: 3, why: "Hoton fuska mai sarari, mai fara'a yana nuna ƙwarewa." },
      { objective: "O3", q: "Wanne ne kada ku saka a bayananku na LinkedIn?", options: ["Ƙwarewarku", "Adireshin gidanku da lambobin katin shaida", "Ƙwarewar aikinku", "Takardun shaidarku"], answer: 1, why: "Ana iya amfani da bayanan sirri ba daidai ba; ku cire su." },
      { objective: "O3", q: "Wane ne mutum mai kyau da za ku fara haɗuwa da shi a LinkedIn?", options: ["Tsohon koci ko shugaban aiki da ya san aikinku", "Wani shahararren mutum kawai", "Babu kowa", "Mutanen da ba ku taɓa haɗuwa da su ba kawai"], answer: 0, why: "Mutanen da suka san aikinku za su iya ba ku labarin ayyuka su yi magana a madadinku." },
      { objective: "O4", q: "\"Ba ni labarin wani lokaci da kuka yi kuskure.\" Wace irin tambaya ce wannan?", options: ["Tambayar yaudara da za a tsallake", "Tambaya game da albashi", "Tambaya game da halaye, mai kyau don amsar STAR", "Tambayar eh ko a'a"], answer: 2, why: "Tana neman misali na gaske, wanda STAR ke amsawa da kyau." },
      { objective: "O4", q: "A amsar STAR, wane sashe ne ya kamata ya ɗauki mafi yawan lokaci?", options: ["Situation", "Task", "Result", "Action: abin da kuka yi"], answer: 3, why: "Mai ɗaukar aiki ya fi son jin abin da kuka yi." },
      { objective: "O4", q: "Kusan tsawon amsar STAR ya kamata ya zama nawa?", options: ["Minti ɗaya zuwa biyu", "Daƙiƙa goma", "Minti goma", "Rabin awa"], answer: 0, why: "Gajeriya kuma a sarari tana sa mai yin hira ya ci gaba da bin ku." },
      { objective: "O5", q: "Ta yaya mataimakin AI zai iya taimaka muku gwadawa?", options: ["Ta zuwa hirar a madadinku", "Ta yin kamar mai yin hira da yin tambaya ɗaya bayan ɗaya", "Ta ƙirƙirar tarihin aikinku", "Ta ajiye lambar katin shaidarku"], answer: 1, why: "AI zai iya gudanar da tambayoyin gwaji; amma amsoshin dole su zama naku." },
      { objective: "O5", q: "Wace ce amsa mai ƙarfi ta gaskiya game da tarihin laifi?", options: ["\"Ba ni da shi\" alhali kuna da shi", "\"Wannan ba ruwanku\"", "\"Na yi kuskure a 2019 kuma na cika hukuncina. Tun daga lokacin na sami takardar shaida kuma ban taɓa rasa zuwa aiki ko sau ɗaya ba.\"", "Dogon labari da ke ɗora laifi kan wasu"], answer: 2, why: "Ku yarda da shi, ku nuna abin da kuka yi tun daga lokacin, sannan ku koma kan aikin." },
      { objective: "O5", q: "Bisa jagorancin EEOC, kama mutum shi kaɗai:", options: ["Hujja ce ta laifi", "Ba hujja ce ta laifi ba", "Dole a jera shi a kowane resume", "Ba za a taɓa tambaya game da shi ba"], answer: 1, why: "Kama mutum kaɗai ba ya tabbatar da cewa ya aikata laifi." },
      { objective: "O5", q: "Mene ne dokokin \"ban the box\" ko na fair chance?", options: ["Dokoki game da aika akwatuna", "Dokokin da ke hana duk binciken baya har abada", "Dokokin da ke hana resume", "Dokoki a wurare da yawa da ke jinkirta tambayoyi game da tarihin laifi a takardar neman aiki ta farko"], answer: 3, why: "Suna ba masu neman aiki damar a fara auna su da ƙwarewarsu; dokoki sun bambanta daga wuri zuwa wuri." },
      { objective: "O6", q: "A ƙarshen hirar sun tambaya, \"Kuna da wata tambaya a gare mu?\" Za ku ce:", options: ["\"Mene ne matakai na gaba, kuma yaushe zan sa ran jin daga gare ku?\"", "\"A'a.\"", "\"Yaushe zan iya ɗaukar hutu?\"", "\"Me wannan kamfanin yake yi?\""], answer: 0, why: "Tambaya mai amfani da aka shirya tana nuna sha'awa." },
      { objective: "O6", q: "Saƙon godiya mai kyau:", options: ["Yana da shafi uku", "Yana sake neman ƙarin albashi", "Yana gode musu, yana ambaton abu ɗaya da kuka tattauna, kuma yana faɗin dalilin da yasa kuke son aikin", "Ana aika shi bayan wata ɗaya"], answer: 2, why: "Gajere, takamaimai kuma da sauri shi ne ya fi aiki." },
      { objective: "O6", q: "Mai ɗaukar aiki ya ce zai kira kafin Juma'a. Yanzu Laraba ce ta mako na gaba. Ku:", options: ["Ku kira sau goma a rana", "Ku aika saƙon bin diddigi ɗaya cikin ladabi ku ci gaba da neman aiki a wasu wurare", "Ku daina neman aiki gaba ɗaya", "Ku riƙa zuwa ofishinsu kowace rana ba tare da gayyata ba"], answer: 1, why: "Saƙon bin diddigi ɗaya cikin ladabi ƙwarewa ce; ku ci gaba da neman aiki." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      6,
      8,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Resume mai shafi ɗaya",
        objective: "O1",
        notYet: "Ya wuce shafi ɗaya, akwai sassan da suka ɓace, ko bai dace da tallar aikin ba.",
        meets: "Shafi ɗaya mai bayanan tuntuɓa, taƙaitaccen bayani, ƙwarewa da suka dace da ƙwarewar aiki mai ranaku.",
        exceeds: "Ƙwarewa da taƙaitaccen bayani suna amfani da kalmomi daga tallar aikin."
      },
      {
        name: "Layukan nasarori",
        objective: "O2",
        notYet: "Layukan suna jera ayyuka ne kawai, ko akwai wani abu da ba gaskiya ba.",
        meets: "Aƙalla layuka huɗu na gaskiya masu kalmar aiki da sakamako ko lamba.",
        exceeds: "Kowane layi yana nuna sakamako a sarari."
      },
      {
        name: "Bayanai a LinkedIn",
        objective: "O3",
        notYet: "Babu kanun bayanai ko sashen About, ko an nuna bayanan sirri.",
        meets: "Kanun bayanai da sashen About sun dace da resume, ba tare da bayanan sirri ba.",
        exceeds: "An saka hoto kuma an aika buƙatun haɗi uku tare da saƙonni."
      },
      {
        name: "Amsoshin STAR",
        objective: "O4",
        notYet: "Amsoshin ba su da sarari ko akwai sashen STAR da ya ɓace.",
        meets: "Amsoshin STAR uku da aka naɗa masu dukkan sassa huɗu, kowanne minti ɗaya zuwa biyu.",
        exceeds: "Amsoshin suna ƙarewa da sakamako a sarari, kuma mafi yawan lokaci yana kan Action."
      },
      {
        name: "Amsa mai wuya ta gaskiya",
        objective: "O5",
        notYet: "Ba a shirya amsa ba, ko tana da tsawo, ta kariyar kai ce, ko ba gaskiya ba ce.",
        meets: "Gajeriyar amsa ta gaskiya game da gibi ko tarihin laifi da ke komawa kan abin da mai koyo ya yi tun daga lokacin.",
        exceeds: "An naɗa ta, an inganta ta, kuma an faɗe ta cikin natsuwa."
      },
      {
        name: "Saƙon godiya",
        objective: "O6",
        notYet: "Babu saƙo, ko saƙon kalma ɗaya na gama-gari.",
        meets: "Gajeren saƙo mai godiya, abu ɗaya da aka tattauna, da dalilin da yasa mai koyo yake son aikin.",
        exceeds: "A shirye yake a aika cikin awa 24 kuma akwai shirin bin diddigi cikin ladabi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka nemi aƙalla aiki ɗaya da sabon resume cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka sami gayyatar hira cikin kwanaki 60",
      "Masu koyo da suka sami tayin aiki cikin kwanaki 90",
      "Masu koyo da suka fara wani kwas na sana'a na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai kayan rubutu kyauta kamar Google Docs ko Microsoft Word",
      "Asusun LinkedIn kyauta",
      "Mai naɗar murya ko bidiyo a waya",
      "Tallar aiki ɗaya ta gaske",
      "Kusan minti 60 don darussa da gwaje-gwaje, tare da lokacin kammala resume da naɗe-naɗe"
    ],
    facilitatorNotes: [
      "Ku gudanar da hirarrakin gwaji bibbiyu don kowane mai koyo ya amsa da babbar murya aƙalla sau uku.",
      "Ku taimaki masu koyo su mayar da wasanni, aikin soja, kula da iyali da aikin da aka yi a gidan yari zuwa ƙwarewar aiki ta gaskiya a resume.",
      "Ku duba cewa duk gyaran AI ya tsaya kan gaskiya; ku cire duk abin da mai koyo bai yi ba.",
      "Ku tunatar da masu koyo kada su saka adireshin gida ko lambobin katin shaida a LinkedIn ko a kayan AI.",
      "Ku ba da maki ga dukkan aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
