"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-ai-gaming-esports.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-ai-gaming-esports-ha",
  lang: "ha",
  translationOf: "youth-ai-gaming-esports",
  category: "Youth",
  name: "AI don Wasannin Bidiyo da Esports",
  skills: "Saita burin atisaye, Gina shirin atisaye da AI, Duba wasan da aka buga, Sadarwa a ƙungiya, Wasa lafiya da adalci, Binciken ayyukan esports",
  outcome: "amfani da mataimakin AI kyauta a matsayin kocin atisaye: saita buri ɗaya a sarari don wasan da kuke bugawa, gina shirin atisaye na mako ɗaya, duba wasan da kuka buga da rubutattun bayanai, da kiyaye wasanku lafiya, da adalci, kuma daidai da makaranta da barci.",
  about: [
    "Wannan kwas ɗin na matasa ne da ke buga wasannin bidiyo (video games), daga masu wasa don nishaɗi har zuwa membobin ƙungiyar esports ta makaranta ko ta kulob. Ba ku buƙatar kayan aiki masu tsada. Kuna buƙatar wasan da kuke bugawa da mataimakin AI kyauta.",
    "Za ku koyi yadda AI ke cikin wasanni tun da daɗewa, sannan yadda ake amfani da mataimakin AI kamar koci: don saita buri, tsara atisaye, da gane abubuwan da ke maimaituwa a wasanninku. Za ku kuma koyi yadda ake magana da kyau da ƙungiya, yadda ake zama lafiya da adalci a intanet, da ayyukan da ke akwai a fannin esports.",
    "Ku duba dokokin makarantarku game da AI, matakin shekarun wasanninku (age rating), da mafi ƙarancin shekarun kowace manhaja, kuma ku sanar da iyaye ko mai kula da ku kafin ku yi rajista a ko'ina. Kowane darasi yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku zaɓi wasa ɗaya da kuke bugawa da ƙwarewa ɗaya da kuke son ingantawa. Ku yi amfani da mataimakin AI don gina shirin atisaye na mako ɗaya da ya dace da makaranta, aikin gida da barci. Ku buga wasa ɗaya ku duba shi da rubutattun bayanai uku, ku nemi AI ya gano abin da ke maimaituwa ya ba da shawarar atisaye ɗaya, sannan ku rubuta gajeren saƙo ga ƙungiyarku ko kulob game da abin da za ku yi aiki a kai a gaba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da ke buga wasannin bidiyo, daga masu wasa don nishaɗi har zuwa membobin ƙungiyoyin esports na makaranta ko kulob.",
    startingPoint: "Suna buga aƙalla wasa ɗaya akai-akai kuma suna hira da sauran 'yan wasa a intanet. Kaɗan ne ke atisaye da shiri, ke duba wasannin da suka buga, ko suka san yadda ake gane zambar asusu da hirarraki marasa aminci.",
    gap: "Matasa da yawa suna wasa sosai ba tare da sun ƙware ba, kuma wasa yana iya rage lokacin makaranta da barci. Wasannin intanet kuma suna kawo zamba, satar wasa (cheats) da baƙi. Amfani da AI a matsayin kocin atisaye, tare da buri a sarari da halayen kiyaye lafiya, yana taimaka wa matasa su inganta, su daidaita rayuwarsu, kuma su ga ayyukan gaske a fannin esports.",
    constraints: [
      "Matakan shekarun wasanni, mafi ƙarancin shekarun manhajoji da dokokin makaranta game da AI; ana sanar da iyaye ko mai kula kafin rajista",
      "Ba a buƙatar kayan aiki masu tsada; kowane wasa da mataimakin AI kyauta",
      "Makaranta, aikin gida da barci su ne farko a kowane shiri",
      "Sirri da tsaro: babu sunaye na gaske, makarantu, bayanan shiga asusu ko bayanan sauran 'yan wasa a hira ko kayan AI",
      "Gajerun darussa da kalmomi masu sauƙi"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna tunani game da wasan da kuke bugawa", action: "gane hanyoyin da ake amfani da AI a cikin wasanni, da abin da mataimakin AI zai iya da wanda ba zai iya yi ba don taimaka muku atisaye", standard: "kuna samun aƙalla 3 cikin 4 daidai" },
    { id: "O2", condition: "Idan aka ba ku ƙwarewa ɗaya don ingantawa da ainihin jadawalinku", action: "gina shirin atisaye na mako ɗaya da AI ta amfani da ƙaramin buri da ake iya aunawa da gajerun atisaye", standard: "ta yadda zai dace da makaranta, aikin gida da barci" },
    { id: "O3", condition: "Bayan kun buga ko kun kalli wani wasa", action: "rubuta bayanai uku game da wasan da neman AI ya gano abin da ke maimaituwa ya ba da shawarar atisaye ɗaya", standard: "ba tare da sunayen sauran 'yan wasa ko saƙonninsu na sirri ba" },
    { id: "O4", condition: "Don ƙungiyarku ko kulob ɗinku", action: "yin jerin gajerun kiraye-kiraye (callouts) da saƙo mai daɗi ga ƙungiya da muryarku", standard: "kiraye-kirayen gajeru ne kuma cikin natsuwa, saƙon kuma bai kai kalmomi 80 ba" },
    { id: "O5", condition: "Idan kun haɗu da cheats, zamba ko hira marar aminci", action: "ƙin cheats da zamba, ɓoye bayanan sirri a hira, da toshewa, kai rahoto da sanar da babba da kuka amince da shi", standard: "ba tare da bayar da bayanan shiga asusu, code ko bayananku na sirri ba" },
    { id: "O6", condition: "Ta amfani da AI da majiya amintacciya", action: "jera ayyukan esports ban da ɗan wasa ƙwararre, da tabbatar da ɗaya da mai ba da shawara a makaranta ko tallar aiki ta gaske", standard: "kuna ambaton ƙwarewar da aikin ke buƙata" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yin atisaye da hikima tare da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Inda AI yake a cikin wasanni, da yadda zai iya koyar da ku",
          minutes: 4,
          goal: "Ambaci hanyoyin da ake amfani da AI a wasanni da hanyoyin da mataimakin AI zai taimaka muku atisaye.",
          text: [
            "Wasanni sun daɗe suna amfani da AI. Haruffan da kwamfuta ke sarrafawa da kuke wasa da su, tsarin da ke haɗa ku da 'yan wasa masu kusan ƙwarewarku, da kayan da ke kama masu cheats duk suna iya amfani da AI.",
            "Mataimakin AI kamar ChatGPT, Microsoft Copilot ko Google Gemini ya bambanta. Ba zai iya ganin allonku ko ya yi wasa a madadinku ba, amma zai iya taimaka muku tunani: saita buri, tsara atisaye, bayanin dabarun wasa, da gano abubuwan da ke maimaituwa a bayanan da kuka ba shi.",
            "Bai san kowane sabuntawar wasa (patch) ba, kuma yana iya yin kuskure. Ku tabbatar da shawarwarin dabarunsa da sanarwar hukuma ta wasan, kyaftin ko kocin ƙungiyarku, da sakamakonku na gaske."
          ],
          words: [["AI", "gajartawar artificial intelligence (basirar na'ura): shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum."], ["Matchmaking (haɗa 'yan wasa)", "tsarin da ke zaɓar waɗanda za ku yi wasa tare da su ko gaba da su."], ["Patch (sabuntawa)", "sabuntawar da ke canja wani wasa."]],
          slides: [
            { title: "AI a cikin wasanni", bullets: ["Haruffan da kwamfuta ke sarrafawa", "Haɗa 'yan wasa bisa ƙwarewa (matchmaking)", "Kayan da ke kama masu cheats"] },
            { title: "Mataimakin AI a matsayin koci", bullets: ["Yana taimakawa saita buri da tsara atisaye", "Yana bayanin dabarun wasa", "Yana gano abubuwan da ke maimaituwa a bayananku"] },
            { title: "Iyakarsa", bullets: ["Ba ya ganin allonku kuma ba ya yi muku wasa", "Wataƙila bai san sabon patch ba", "Ku tabbatar da shawarwari da sakamako na gaske"] }
          ],
          tryIt: "Ku rubuta wasan da kuka fi bugawa da abubuwa uku a cikinsa da kuke son ƙwarewa a kai. Ku zana da'ira kan wanda ya fi muhimmanci gare ku yanzu.",
          youCanNow: "ambaton hanyoyin da ake amfani da AI a wasanni, da bayanin abin da mataimakin AI zai iya da wanda ba zai iya yi ba a matsayin kocin atisaye.",
          quickCheck: [
            { objective: "O1", q: "Wanne a cikin waɗannan zai iya amfani da AI a cikin wasa?", options: ["Hoton kwalin wasan", "Batirin kontirolar ku", "Matakin shekarun wasan", "Kayan da ke kama masu cheats"], answer: 3, why: "'Yan wasan kwamfuta, matchmaking da kayan hana cheats duk suna iya amfani da AI." },
            { objective: "O1", q: "AI ya faɗa muku wata dabara da ba ta yi daidai ba bayan sabon sabuntawa. Me za ku yi?", options: ["Ku yi amfani da ita a wasan gasa na gaba ba tare da dubawa ba", "Ku tabbatar da ita da sanarwar hukuma ta wasan ko kocinku", "Ku daina buga wasan", "Ku nemi baƙo bayanan shigarku"], answer: 1, why: "Wataƙila AI bai san sabon patch ba, don haka ku tabbatar da shawarwarinsa da sanarwar hukuma da sakamakonku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Saita buri da gina shirin atisaye",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI don mayar da buri ɗaya zuwa shirin atisaye na mako da ya dace da rayuwarku.",
          text: [
            "Ƙwarewa tana zuwa ne daga yin atisaye kan abu ɗaya da gangan, ba wai yawan wasa kawai ba. Buri mai kyau ƙarami ne kuma ana iya auna shi: \"Ƙara harbin da ke kaiwa a yanayin atisaye\" ko \"Faɗin inda abokan gaba suke a kowane zagaye\", ba \"in ƙware\" kawai ba.",
            "Ku ba AI sunan wasanku, burinku, matakinku na yanzu da ainihin jadawalinku. Misali: \"Ina buga Rocket League. Ina son in inganta bugun ƙwallo a sama. Zan iya yin atisaye minti 30 a darare 4 na makaranta bayan aikin gida. Ka yi shirin mako ɗaya mai sauƙi da gajerun atisaye da hanyar bin diddigin ci gaba.\"",
            "Ku fara saka makaranta, aikin gida, barci da lokacin iyali. 'Yan wasan esports a kowane mataki suna hutawa, suna miƙe jiki, kuma suna hutar da idanunsu. Shirin da za ku iya bi ya fi babban shirin da za ku bari."
          ],
          steps: ["Ku zaɓi buri ɗaya ƙarami da ake iya aunawa.", "Ku faɗa wa AI wasanku, burinku, matakinku da ainihin lokacinku na hutu.", "Ku nemi shirin mako ɗaya mai gajerun atisaye da hanyar bin diddigin ci gaba.", "Ku duba cewa ya bar lokaci don makaranta, aikin gida da barci.", "Ku nemi canji ɗaya idan ya yi yawa."],
          words: [["Buri da ake iya aunawa", "burin da za ku iya duba shi da lamba, ko da eh ko a'a."], ["Atisaye (drill)", "gajeren aiki da ke koyar da ƙwarewa ɗaya."]],
          slides: [
            { title: "Yin atisaye da gangan", bullets: ["Ƙwarewa ɗaya a lokaci ɗaya", "Ƙarami kuma ana iya auna shi", "Ba wai \"in ƙware\" kawai ba"] },
            { title: "Abin da za ku faɗa wa AI", bullets: ["Wasanku da burinku", "Matakinku", "Ainihin lokacinku na hutu"] },
            { title: "Shirin da za ku iya bi", bullets: ["Makaranta, aikin gida da barci farko", "Gajerun atisaye, gajerun hutu", "Ku bi diddigin ci gaba kowace rana"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi muku shirin atisaye na mako ɗaya don ƙwarewar da kuka zana wa da'ira a Darasi na 1, ta amfani da ainihin jadawalinku. Ku nemi ya gajarta shirin idan ya wuce minti 30 zuwa 45 a rana.",
          youCanNow: "mayar da buri ɗaya na wasa zuwa shirin atisaye na mako da za a iya bi, tare da mataimakin AI.",
          quickCheck: [
            { objective: "O2", q: "Me ya fi taimaka muku ku inganta?", options: ["Yin atisaye kan ƙwarewa ɗaya da gangan", "Ƙara sa'o'in wasa ba tare da buri ba", "Sayen sababbin kayan aiki", "Canja wasa kowace rana"], answer: 0, why: "Ƙwarewa tana zuwa ne daga yin atisaye kan abu ɗaya da gangan." },
            { objective: "O2", q: "Kuna son ku \"ƙware.\" Ta yaya za ku mayar da wannan buri mafi kyau?", options: ["Ku bar shi a matsayin \"in ƙware\"", "Ku mayar da shi \"in yi wasa duk ƙarshen mako\"", "Ku sa shi ƙarami kuma ana iya auna shi, kamar ƙara harbin da ke kaiwa a yanayin atisaye", "Ku mayar da shi \"in ci kowane wasa\""], answer: 2, why: "Ƙaramin buri da ake iya aunawa yana bar ku ku ga ci gaba na gaske." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Duba wasan da aka buga tare da AI",
          minutes: 5,
          goal: "Rubuta bayanai daga wasa ku yi amfani da AI don gano abin da ke maimaituwa da shawarar atisaye.",
          text: [
            "Manyan 'yan wasa suna duba wasannin da suka buga. Bayan wasa, ko yayin kallon maimaicin wasan (replay) idan wasanku yana da shi, ku rubuta gajerun bayanai uku: abu ɗaya da ya tafi da kyau, kuskure ɗaya, da lokacin da ya faru.",
            "Ku liƙa bayanan a mataimakin AI ku tambaya: \"Ga bayanaina daga wasanni uku. Waɗanne abubuwa ne ke maimaituwa, kuma wane atisaye ɗaya ne zai taimaka?\" AI yana da kyau wajen gano maimaicin da wataƙila ba ku lura da shi ba.",
            "Ku sa bayanan su kasance game da wasan, ba game da wasu mutane ba. Kada ku liƙa sunayen sauran 'yan wasa (usernames), saƙonninsu na sirri ko wani abu na kansu. Kuma ku yi wa kanku sauƙi: burin shi ne koyo, ba jin baƙin ciki ba."
          ],
          steps: ["Ku buga wasa ɗaya ko ku kalli replay ɗinsa.", "Ku rubuta bayanai uku: abu mai kyau, kuskure, da lokacin da ya faru.", "Ku tattara bayanai daga wasanni biyu ko uku.", "Ku nemi AI ya gano abin da ke maimaituwa ya ba da atisaye ɗaya.", "Ku ƙara atisayen a shirin atisayenku."],
          words: [["Replay (maimaicin wasa)", "rikodin wasa da za ku iya sake kallonsa."], ["Abin da ke maimaituwa (pattern)", "abin da ke faruwa sau da yawa."]],
          slides: [
            { title: "Bayanai uku a kowane wasa", bullets: ["Abu ɗaya da ya tafi da kyau", "Kuskure ɗaya", "Lokacin da ya faru"] },
            { title: "Ku nemi AI ya gano maimaici", bullets: ["Ku liƙa bayanai daga wasanni 2-3", "\"Waɗanne abubuwa ne ke maimaituwa?\"", "\"Wane atisaye ɗaya ne zai taimaka?\""] },
            { title: "Ku sa shi game da wasan", bullets: ["Babu sunaye ko saƙonnin sauran 'yan wasa", "Ku koya, kada ku ɗora wa kanku laifi"] }
          ],
          tryIt: "Ku buga wasa ɗaya, ku rubuta bayanai uku, sannan ku tambayi mataimakin AI abin da ya lura da shi da atisaye ɗaya da yake ba da shawara. Ku ƙara atisayen a shirinku.",
          youCanNow: "duba wasa da rubutattun bayanai, da amfani da AI don gano abin da ke maimaituwa da zaɓar atisaye.",
          quickCheck: [
            { objective: "O3", q: "Mene ne amfanin duba wasan da aka buga?", options: ["Don ɗora wa abokan ƙungiya laifi", "Don jin baƙin cikin rashin nasara", "Don saka sunayen sauran 'yan wasa a intanet", "Don koyo daga abin da ya tafi da kyau da wanda bai tafi da kyau ba"], answer: 3, why: "Dubawa yana taimaka muku koyo; burin ba jin baƙin ciki ba ne." },
            { objective: "O3", q: "Bayananku suna da sunan abokin ƙungiya (username) da hirarsa. Me za ku yi kafin ku liƙa su a AI?", options: ["Ku cire sunan da hirar, ku bar bayanan game da wasan", "Ku liƙa su duka", "Ku ƙara sunansa na gaske ma", "Ku daina rubuta bayanai"], answer: 0, why: "Ku sa bayanan su kasance game da wasan, ba game da wasu mutane ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yin atisaye da hikima tare da AI",
        questions: [
          { objective: "O1", q: "Wanne ne misalin AI a cikin wasa?", options: ["Wayar caji", "Haruffan da kwamfuta ke sarrafawa da kuke wasa da su", "Kwalin wasan", "Headset ɗinku (abin sauraro)"], answer: 1, why: "Haruffan da kwamfuta ke sarrafawa sau da yawa suna amfani da AI." },
          { objective: "O2", q: "Wanne ne burin atisaye mafi kyau?", options: ["\"In ƙware\"", "\"In yi wasa duk dare\"", "\"In faɗi inda abokan gaba suke a kowane zagaye a wannan makon\"", "\"In ci komai\""], answer: 2, why: "Ƙarami ne kuma ana iya auna shi." },
          { objective: "O2", q: "Me ya kamata ku faɗa wa AI don samun shirin atisaye mai amfani?", options: ["Wasanku, burinku, matakinku da ainihin lokacinku na hutu", "Kalmar sirrinku", "Kalmar \"shiri\" kawai", "Adireshin gidanku"], answer: 0, why: "Waɗannan bayanai suna bar shi ya gina shirin da ya dace da ku." },
          { objective: "O2", q: "Shirin AI ɗinku yana ɗaukar sa'o'i 3 kowane daren makaranta. Me za ku yi?", options: ["Ku bar aikin gida", "Ku kwana a farke har dare", "Ku nemi AI ya gajarta shi ya dace da makaranta da barci", "Ku bi shi duk da haka"], answer: 2, why: "Shirin da za ku iya bi yana sa makaranta da barci farko." },
          { objective: "O3", q: "Me ya kamata ku cire daga bayanan wasa da kuke ba AI?", options: ["Lokacin da kuskure ya faru", "Abin da ya tafi da kyau", "Sunayen sauran 'yan wasa da saƙonninsu na sirri", "Sunan wasan"], answer: 2, why: "Ku sa bayanan su kasance game da wasan, ba bayanan sirri na wasu mutane ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Ƙungiyoyi, tsaro da makomar esports",
      lessons: [
        {
          objectives: ["O4"],
          title: "Magana da kyau da ƙungiyarku",
          minutes: 5,
          goal: "Yi amfani da AI don taimakawa rubuta gajerun callouts da saƙo a sarari ga kulob ko ƙungiya.",
          text: [
            "Ƙungiyoyi masu kyau suna magana a sarari kuma cikin kirki. Callouts (kiraye-kiraye) gajerun kalmomi ne da ƙungiya ta amince da su, kamar \"biyu a hagu\" ko \"zuwa tsakiya\". Gajerun callouts cikin natsuwa sun fi masu tsawo ko na fushi.",
            "Mataimakin AI zai iya taimaka muku yin jerin callouts don wasanku, ko rubuta saƙo ga kulob ɗin makarantarku: lokutan atisaye, abin da za ku yi aiki a kai, da tunatarwa don girmama juna. Ku tambaya: \"Ka rubuta gajeren saƙo mai daɗi ga kulob ɗin esports na makarantata game da atisayen ranar Alhamis. Kada ya kai kalmomi 80.\"",
            "Idan abokin ƙungiya ya yi kuskure, ku mai da hankali kan wasa na gaba, ba ɗora laifi ba. Ƙungiyoyin da ke zama masu kyakkyawan fata suna wasa da kyau kuma suna more wasan."
          ],
          steps: ["Ku jera lokutan da suka fi faruwa a wasanku da ke buƙatar callout.", "Ku nemi AI ya ba da gajerun kalmomi a sarari don kowanne.", "Ku amince da jerin tare da ƙungiyarku.", "Ku yi amfani da AI don rubuta gajeren saƙo mai daɗi ga ƙungiya ko kulob.", "Ku karanta shi, ku canja shi ya yi kama da ku, sannan ku raba shi."],
          words: [["Callout (kira)", "gajeriyar kalma ko jimla da ke faɗa wa abokan ƙungiya abin da ke faruwa."], ["Esports", "gasar wasannin bidiyo da aka tsara, sau da yawa da ƙungiyoyi da lig-lig."]],
          slides: [
            { title: "Callouts a sarari", bullets: ["Gajerun kalmomi da ƙungiya ta amince da su", "Natsuwa ta fi ihu", "Misali: \"biyu a hagu\""] },
            { title: "AI don saƙonnin ƙungiya", bullets: ["Lokaci da wurin atisaye", "Abin da za ku yi aiki a kai", "Tunatarwa don girmama juna"] },
            { title: "Ku zama masu kyakkyawan fata", bullets: ["Ku mai da hankali kan wasa na gaba", "Babu ɗora laifi", "Ku sa ya yi kama da ku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya taimaka muku yin jerin callouts biyar don wasanku. Sannan ku sa ya rubuta gajeren saƙo ga ƙungiyarku ko kulob game da atisaye na gaba, ku sake rubuta shi da muryarku.",
          youCanNow: "yin callouts a sarari ga ƙungiya da saƙo mai daɗi ga ƙungiya tare da taimakon AI.",
          quickCheck: [
            { objective: "O4", q: "Mene ne callout?", options: ["Dogon jawabi bayan wasa", "Saƙon fushi", "Gajeriyar jimla da ke faɗa wa abokan ƙungiya abin da ke faruwa", "Lambar cheat"], answer: 2, why: "Callouts gajerun kalmomi ne da ƙungiya ta amince da su, kamar \"biyu a hagu\"." },
            { objective: "O4", q: "AI ya rubuta saƙon kulob ɗinku, amma yana da tsauri. Me za ku yi?", options: ["Ku aika shi duk da haka", "Ku sake rubuta shi ya yi kama da ku kafin ku raba shi", "Ku ƙara tsawonsa sosai", "Ku ƙara lambobin wayar abokan ƙungiya"], answer: 1, why: "Ku karanta ku canja abin da AI ya rubuta don ya yi kama da ku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Wasa lafiya da adalci",
          minutes: 5,
          goal: "Gane cheats, zamba da hirarraki marasa aminci, da sanin abin da za ku yi.",
          text: [
            "Cheats kamar aimbots ko fayilolin da aka yi wa kutse suna karya dokokin wasa kuma suna iya sa a hana asusunku (ban). Shafukan da ke alƙawarin kuɗin wasa kyauta, skins ko \"AI cheats\" sau da yawa suna satar asusu ko saka manhajoji masu cutarwa. Kada ku taɓa sauke su ko ku ba kowa bayanan shigarku (login).",
            "Ku yi hankali a hira. Kada ku raba sunanku na gaske, makarantarku, adireshinku, lambar wayarku ko hotunanku da mutanen da kuka san su a intanet kawai. Idan wani yana matsa muku, yana neman sirri, ko yana sa ku ji ba daɗi, ku toshe shi, ku kai rahotonsa a cikin wasan, kuma ku sanar da iyaye, mai kula da ku ko babba da kuka amince da shi.",
            "Wasanni suna da matakan shekaru. A Amurka ESRB ce ke ba wasanni matakai, misali T (Teen) don kusan shekaru 13 zuwa sama, da M (Mature) don shekaru 17 zuwa sama. Ku tattauna da iyalinku game da wasannin da kuma yawan lokacin allo da ya dace da ku."
          ],
          steps: ["Kada ku taɓa amfani da cheats ko sauke kayan \"kuɗin wasa kyauta\".", "Kada ku taɓa ba kowa login ɗinku ko code ɗin da aka turo wayarku.", "Ku cire sunanku na gaske, makarantarku da adireshinku daga hira.", "Ku toshe, ku kai rahoto, ku sanar da babba da kuka amince da shi idan wani abu bai yi daidai ba.", "Ku duba matakin shekarun wasa tare da iyalinku."],
          words: [["Aimbot", "cheat da ke yi muku nuni (aiming); yana karya dokokin wasa."], ["Ban (hani)", "lokacin da wasa ya toshe asusunku saboda karya dokoki."], ["Matakin shekaru (age rating)", "alamar da ke faɗin shekarun da aka yi wasa domin su."]],
          slides: [
            { title: "Ku yi wasa da adalci", bullets: ["Cheats suna iya sa a hana asusunku", "Shafukan \"kuɗin wasa kyauta\" suna satar asusu", "Kada ku taɓa raba login ko code ɗin wayarku"] },
            { title: "Tsaro a hira", bullets: ["Babu suna na gaske, makaranta ko adireshi", "Babu hotuna ga baƙi", "Ku toshe, ku kai rahoto, ku sanar da babba amintacce"] },
            { title: "Matakan shekaru", bullets: ["ESRB T: gabaɗaya shekaru 13 zuwa sama", "ESRB M: gabaɗaya shekaru 17 zuwa sama", "Ku tattauna da iyalinku game da wasanni da lokaci"] }
          ],
          sources: [{ name: "ESRB: Jagorar matakan shekaru", url: "https://www.esrb.org/ratings-guide/" }],
          tryIt: "Ku buɗe saitunan (settings) wani wasa ko dandali da kuke amfani da shi ku nemo inda ake toshe ɗan wasa da kai rahotonsa. Sannan ku duba matakin shekarun wasan da kuka fi so a shafin ESRB.",
          youCanNow: "gane cheats, zambar asusu da hirarraki marasa aminci, da sanin yadda ake toshewa, kai rahoto da neman taimako.",
          quickCheck: [
            { objective: "O5", q: "Me yakan faru a shafukan da ke alƙawarin kuɗin wasa ko skins kyauta?", options: ["Kuna samun kaya kyauta lafiya", "Wasanku yana ƙara sauri", "Babu abin da ke faruwa", "Sau da yawa suna satar asusu ko saka manhajoji masu cutarwa"], answer: 3, why: "Shafukan kuɗin wasa kyauta da na cheats sau da yawa suna satar asusu ko saka manhajoji masu cutarwa." },
            { objective: "O5", q: "Wani ɗan wasa a intanet yana ta neman hotonku kuma yana cewa ku ɓoye wannan. Me za ku yi?", options: ["Ku aika hoto ɗaya", "Ku toshe shi, ku kai rahoto, ku sanar da iyaye, mai kula ko babba amintacce", "Ku ɓoye sirrin", "Ku faɗa masa makarantarku a maimakon haka"], answer: 1, why: "Matsi da neman sirri alamun gargaɗi ne; ku toshe, ku kai rahoto, ku sanar da babba amintacce." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ayyukan esports da haɗa komai tare",
          minutes: 6,
          goal: "Bincika ayyuka a fannin esports, ku kammala shirin atisayenku da duba wasanku.",
          text: [
            "Mutane kaɗan ne kawai ke zama ƙwararrun 'yan wasa, amma esports yana buƙatar mutane da yawa: koci, manajojin ƙungiya, shoutcasters masu sharhin wasanni, masu gyaran bidiyo, masu zanen hotuna (graphic designers), masu shirya gasa, da mutanen da ke ƙirƙirar wasanni da gwada su.",
            "Ku tambayi mataimakin AI: \"Waɗanne ayyuka ne ke akwai a esports ban da zama ƙwararren ɗan wasa? Waɗanne darussan makaranta da kulob ne ke taimakawa ga kowanne?\" Sannan ku tabbatar da amsoshin da mai ba da shawara a makaranta ko tallar aiki ta gaske, domin bayanan AI na iya zama tsofaffi.",
            "Makarantu da yawa suna da kulob ko ƙungiyar esports. Idan naku ba shi da ita, mai ba da shawara na kulob ko malami zai iya taimaka muku fara ɗaya. Yanzu ku haɗa komai tare: buri, shiri, duba wasa da saƙon ƙungiya."
          ],
          steps: ["Ku nemi AI ya jera ayyukan esports da ƙwarewar da kowanne ke buƙata.", "Ku zaɓi aiki ɗaya da ke burge ku.", "Ku tabbatar da shi da mai ba da shawara ko tallar aiki ta gaske.", "Ku kammala burinku, shirinku, duba wasanku da saƙon ƙungiyarku."],
          words: [["Shoutcaster", "mutumin da ke yin sharhin wasannin esports kai tsaye."], ["Mai shirya gasa (event organizer)", "mutumin da ke tsarawa da gudanar da gasanni."]],
          slides: [
            { title: "Fiye da ƙwararrun 'yan wasa", bullets: ["Koci da manajojin ƙungiya", "Shoutcasters da masu gyaran bidiyo", "Masu zane, masu gwaji, masu shirya gasa"] },
            { title: "Ku bincika da AI, sannan ku tabbatar", bullets: ["Ku tambayi ƙwarewar da kowane aiki ke buƙata", "Ku tabbatar da mai ba da shawara ko tallar aiki"] },
            { title: "Aikinku na ƙarshe", bullets: ["Buri ɗaya da shirin mako ɗaya", "Wasa ɗaya da aka duba da bayanai uku", "Atisaye ɗaya da saƙon ƙungiya"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina shirin atisaye na mako ɗaya da AI da ya dace da makaranta da barci, ku duba wasa ɗaya da bayanai uku, ku nemi AI ya gano abin da ke maimaituwa da atisaye ɗaya, sannan ku rubuta gajeren saƙo ga ƙungiya ko kulob game da abin da za ku yi aiki a kai a gaba.",
          youCanNow: "amfani da AI a matsayin kocin atisaye, yin wasa lafiya da adalci, da ambaton ayyukan esports ban da zama ƙwararren ɗan wasa.",
          quickCheck: [
            { objective: "O6", q: "Wanne a cikin waɗannan aikin esports ne ban da ƙwararren ɗan wasa?", options: ["Manajan ƙungiya", "Mai sayar da aimbot", "Mai sayen asusu", "Mai ba da skins kyauta"], answer: 0, why: "Esports yana buƙatar koci, manajoji, shoutcasters, masu gyaran bidiyo, masu zane da masu shirya gasa." },
            { objective: "O6", q: "AI ya jera ayyukan esports da ƙwarewar da suke buƙata. Me za ku yi a gaba?", options: ["Ku amince da kowane bayani", "Ku zaɓi aiki kawai ba tare da tunani ba", "Ku yi watsi da jerin", "Ku tabbatar da aiki ɗaya da mai ba da shawara a makaranta ko tallar aiki ta gaske"], answer: 3, why: "Bayanan AI na iya zama tsofaffi, don haka ku tabbatar da mai ba da shawara ko tallar aiki ta gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ƙungiyoyi, tsaro da makomar esports",
        questions: [
          { objective: "O4", q: "Me ke sa callout ya yi kyau?", options: ["Tsawo da cikakken bayani", "Gajere, cikin natsuwa, kuma ƙungiya ta amince da shi", "Ihu da fushi", "Ya bambanta kowane lokaci"], answer: 1, why: "Gajerun callouts da aka amince da su suna da sauri kuma a sarari." },
          { objective: "O5", q: "Wani shafi yana ba da kuɗin wasa kyauta idan kun saka login ɗinku. Me za ku yi?", options: ["Ku saka shi da sauri", "Ku raba hanyar haɗin (link) da abokai", "Ku ba su code ɗin wayarku", "Kada ku saka shi; wataƙila zamba ce"], answer: 3, why: "Shafukan kuɗin wasa kyauta sau da yawa suna satar asusu." },
          { objective: "O5", q: "Wani da kuka san shi a intanet kawai yana tambayar makarantar da kuke zuwa. Me za ku yi?", options: ["Ku faɗa masa", "Ku aika hoton kayan makarantarku", "Kada ku faɗa; ku toshe shi ku sanar da babba amintacce idan ya matsa muku", "Ku ba shi adireshinku a maimakon haka"], answer: 2, why: "Ku kiyaye bayananku na sirri a intanet." },
          { objective: "O5", q: "Matakin ESRB na M yana nufin wasa gabaɗaya na shekaru:", options: ["17 zuwa sama", "6 zuwa sama", "10 zuwa sama", "Kowa da kowa"], answer: 0, why: "M (Mature) gabaɗaya na shekaru 17 zuwa sama ne." },
          { objective: "O6", q: "Wanne ne aikin esports ban da ƙwararren ɗan wasa?", options: ["Shoutcaster", "Mai yin aimbot", "Mai sayar da asusu", "Mai gwajin cheats"], answer: 0, why: "Shoutcasters suna sharhin wasanni; sauran suna karya dokoki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Wasannin Bidiyo da Esports",
    questions: [
      { objective: "O1", q: "Matchmaking a cikin wasa shi ne:", options: ["Hanyar sayen skins", "Tsarin da ke zaɓar waɗanda za ku yi wasa tare da su ko gaba da su", "Cheat", "Wani nau'in kontirola"], answer: 1, why: "Matchmaking yana haɗa 'yan wasa, sau da yawa bisa ƙwarewa." },
      { objective: "O1", q: "Me mataimakin AI BA zai iya yi muku a wasa ba?", options: ["Taimakawa tsara atisaye", "Bayanin dabarun wasa", "Ganin allonku da yin wasa a madadinku", "Gano abubuwan da ke maimaituwa a bayananku"], answer: 2, why: "Mataimakin hira yana taimaka muku tunani; ba ya yi muku wasa." },
      { objective: "O1", q: "Me yasa za ku tabbatar da shawarwarin dabarun AI da sanarwar hukuma ta wasa?", options: ["Wataƙila AI bai san sabon patch ba", "AI koyaushe daidai yake", "Sanarwar hukuma haramtacciya ce", "Dokar makaranta ce"], answer: 0, why: "Wasanni suna canjawa da patches, kuma bayanan AI na iya zama tsofaffi." },
      { objective: "O2", q: "Buri da ake iya aunawa shi ne wanda za ku iya:", options: ["Ba za ku taɓa gamawa ba", "Ji kawai", "Duba shi da lamba, ko da eh ko a'a", "Mantawa"], answer: 2, why: "Ana iya aunawa yana nufin za ku iya duba shi." },
      { objective: "O2", q: "Me ya kamata ya fara shiga shirin atisayenku?", options: ["Zaman wasa cikin dare", "Makaranta, aikin gida da barci", "Sayen sababbin kayan aiki", "Buga wasu wasanni"], answer: 1, why: "Shiri mai kyau yana dacewa da makaranta da hutu." },
      { objective: "O2", q: "Atisaye (drill) shi ne:", options: ["Gajeren aiki da ke koyar da ƙwarewa ɗaya", "Lambar cheat", "Sunan ƙungiya", "Matakin shekarun wasa"], answer: 0, why: "Atisaye yana koyar da ƙwarewa ɗaya a lokaci ɗaya." },
      { objective: "O2", q: "Shirinku yana jin kamar ya yi yawa. Me za ku yi?", options: ["Ku daina wasa", "Ku nemi AI ya gajarta shi", "Ku bar barci", "Ku yi watsi da shi"], answer: 1, why: "Buƙatun biyo baya suna daidaita shirin." },
      { objective: "O3", q: "Waɗanne bayanai uku ya kamata ku rubuta bayan wasa?", options: ["Maki, yanayi, abin ciye-ciye", "Sunaye da saƙonnin sauran 'yan wasa", "Abu mai kyau, kuskure, da lokacin da ya faru", "Babu komai"], answer: 2, why: "Waɗannan bayanai suna taimaka muku koyo daga wasan." },
      { objective: "O3", q: "Me yasa za ku ba AI bayanai daga wasanni da yawa?", options: ["Don ya gano abubuwan da ke maimaituwa", "Don ya yi jinkiri", "Don ya shiga asusunku a madadinku", "Yana buƙatar kalmar sirrinku"], answer: 0, why: "Abubuwan da ke maimaituwa suna bayyana a wasanni da yawa." },
      { objective: "O3", q: "Me ya kamata ku yi da atisayen da AI ya ba da shawara?", options: ["Ku yi watsi da shi", "Ku saka shi a intanet ga kowa", "Ku goge bayananku", "Ku ƙara shi a shirin atisayenku"], answer: 3, why: "Atisaye yana taimakawa ne kawai idan kun yi shi." },
      { objective: "O4", q: "Callout shi ne:", options: ["Gajeriyar jimla da ke faɗa wa abokan ƙungiya abin da ke faruwa", "Cheat", "Ban (hani)", "Matakin shekaru"], answer: 0, why: "Callouts suna taimaka wa ƙungiyoyi su yi magana da sauri." },
      { objective: "O4", q: "Abokin ƙungiya ya yi kuskure. Mafi kyawun abin yi shi ne:", options: ["Ku ɗora masa laifi a hira", "Ku fita daga wasan", "Ku mai da hankali kan wasa na gaba", "Ku kai rahotonsa"], answer: 2, why: "Ƙungiyoyi masu kyakkyawan fata suna wasa da kyau." },
      { objective: "O4", q: "Kafin ku raba saƙon kulob da AI ya rubuta, ya kamata ku:", options: ["Aika shi ba tare da karantawa ba", "Karanta shi ku sa ya yi kama da ku", "Ƙara kalmar sirrinku", "Ƙara tsawonsa"], answer: 1, why: "Ku ne ke da alhakin abin da kuka aika." },
      { objective: "O5", q: "Amfani da aimbot zai iya:", options: ["Sa a hana asusunku (ban)", "Taimaka muku koyo da sauri", "Ƙara matakin shekarunku", "Mayar da ku koci"], answer: 0, why: "Cheats suna karya dokoki kuma suna iya kai ga ban." },
      { objective: "O5", q: "Wani yana neman code ɗin da aka turo wayarku yanzu. Ku:", options: ["Karanta masa shi", "Kada ku taɓa raba shi", "Saka shi a hira", "Aika shi ga ƙungiyarku"], answer: 1, why: "Wannan code yana kare asusunku." },
      { objective: "O5", q: "Wani ɗan wasa a intanet yana sa ku ji ba daɗi. Me za ku yi?", options: ["Ku ci gaba da hira", "Ku ba shi lambarku", "Ku toshe shi, ku kai rahoto, ku sanar da babba amintacce", "Ku aika hoto"], answer: 2, why: "Toshewa, kai rahoto da sanar da babba suna kiyaye ku." },
      { objective: "O5", q: "ESRB T (Teen) gabaɗaya na shekaru:", options: ["3 zuwa sama", "13 zuwa sama", "18 zuwa sama kawai", "Ƙasa da 10"], answer: 1, why: "T gabaɗaya ya dace da shekaru 13 zuwa sama." },
      { objective: "O5", q: "Kafin matashi ya yi rajista a sabuwar manhajar wasa ko AI, ya kamata:", options: ["Ya yi amfani da ranar haihuwa ta ƙarya", "Ya tsallake sharuɗɗa", "Ya yi amfani da kalmar sirrin iyaye", "Ya duba mafi ƙarancin shekaru ya sanar da iyaye ko mai kula"], answer: 3, why: "Iyakar shekaru da sa hannun iyaye suna kiyaye ku kuma suna sa ku bi dokoki." },
      { objective: "O6", q: "Shoutcaster:", options: ["Yana sharhin wasannin esports", "Yana yin cheats", "Yana hana 'yan wasa", "Yana ba wasanni matakai"], answer: 0, why: "Shoutcasters su ne muryoyin watsa shirye-shiryen esports." },
      { objective: "O6", q: "AI ya jera muku ayyukan esports. Me za ku yi a gaba?", options: ["Ku amince da kowane bayani", "Ku bar makaranta", "Ku tabbatar da mai ba da shawara ko tallar aiki ta gaske", "Ku biya kuɗin kwas nan take"], answer: 2, why: "Bayanan AI na iya zama tsofaffi; ku tabbatar da majiyoyi na gaske." }
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
      7,
      8,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Buri da shiri",
        objective: "O2",
        notYet: "Burin bai da sarari, kamar \"in ƙware\", ko babu shiri.",
        meets: "Buri ɗaya ƙarami da ake iya aunawa da shirin mako ɗaya mai gajerun atisaye.",
        exceeds: "Shirin yana da hanyar bin diddigin ci gaba kowace rana."
      },
      {
        name: "Daidai da rayuwa",
        objective: "O2",
        notYet: "Shirin yana cin lokacin makaranta, aikin gida ko barci.",
        meets: "Makaranta, aikin gida da barci su ne farko, kuma atisaye ya dace da su.",
        exceeds: "Yana kuma da hutu, miƙe jiki ko hutar da idanu."
      },
      {
        name: "Duba wasa",
        objective: "O3",
        notYet: "Bayanai ƙasa da uku, ko bayanai game da wasu mutane.",
        meets: "Bayanai uku (abu mai kyau, kuskure, lokaci) da atisaye ɗaya da AI ya ba da shawara aka ƙara a shirin.",
        exceeds: "Bayanai daga wasanni biyu ko fiye, kuma mai koyo ya bayyana abin da AI ya gano da kalmominsa."
      },
      {
        name: "Saƙon ƙungiya",
        objective: "O4",
        notYet: "Babu saƙo, ko yana da tsawo, ko babu kirki a ciki.",
        meets: "Gajeren saƙo mai daɗi game da abin da ƙungiya za ta yi aiki a kai, da muryar mai koyo.",
        exceeds: "Yana kuma da jerin callouts da aka amince da su."
      },
      {
        name: "Lafiya da adalci",
        objective: "O5",
        notYet: "Shirin ko bayanan suna da bayanan sirri, ko suna ambaton cheats.",
        meets: "Babu bayanan sirri a ko'ina, kuma babu cheats ko kayan aiki marasa aminci.",
        exceeds: "Mai koyo zai iya nuna inda ake toshewa da kai rahoto a wasansa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka bi shirin atisayensu har tsawon mako guda kuma suka ba da rahoton ci gaba kan burinsu (binciken biyo baya)",
      "Masu koyo da suka shiga ko suka fara ƙungiyar esports ta makaranta ko kulob cikin kwanaki 90",
      "Masu koyo da suka ce sun toshe kuma sun kai rahoton ɗan wasa marar aminci, ko sun guje wa zamba, a binciken biyo baya na kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wasan da mai koyo ya riga ya buga kuma aka yarda ya buga, a kowace na'ura",
      "Mataimakin AI kyauta da aka yarda mai koyo ya yi amfani da shi",
      "Takarda ko manhajar rubutu don bayanan wasa da shirin atisaye",
      "Kusan minti 60 gaba ɗaya, tare da mako ɗaya na atisaye don shirin"
    ],
    facilitatorNotes: [
      "Ku gudanar da shi tare da ƙungiyar esports ta makaranta ko kulob don masu koyo su tsara kuma su duba wasanni tare.",
      "Ku duba matakan shekarun wasannin da ake amfani da su a shirinku ku sanar da iyalai.",
      "Ku tabbatar cewa kowane shirin atisaye ya bar lokaci don makaranta, aikin gida da barci kafin ku amince da shi.",
      "Ku nuna wa masu koyo inda ake toshewa da kai rahoto a wasannin da ƙungiyarku ke bugawa, kuma ku ambaci babba amintacce da za su iya sanar da shi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
