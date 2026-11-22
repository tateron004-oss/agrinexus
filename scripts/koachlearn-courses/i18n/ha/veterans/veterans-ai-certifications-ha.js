"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-certifications.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-ai-certifications-ha",
  lang: "ha",
  translationOf: "veterans-ai-certifications",
  category: "Veterans (military)",
  name: "Takardun Shaidar Ƙwarewa da AI ga Tsofaffin Sojoji",
  skills: "Mayar da aikin soja zuwa sunayen ayyukan farar hula, Nemo takardar shaidar ƙwarewa da masu ɗaukar aiki ke nema, Duba abin da GI Bill ke biya, Yin tsarin karatu da AI, Nuna takardar shaida a CV",
  outcome: "zaɓar aikin farar hula da ya dace da ƙwarewarku ta soja, nemo takardar shaidar ƙwarewa (certification) da masu ɗaukar aiki ke nema, duba ko VA za ta iya biyan kuɗin jarrabawar, da yin tsarin karatu na mako-mako da mataimakin AI.",
  about: [
    "Kun riga kun sami ƙwarewa a cikin aikin soja: makarantu, lambobin yabo (badges), lasisi da horo a bakin aiki. Masu ɗaukar aiki na farar hula sau da yawa suna son ganin waɗannan ƙwarewar a matsayin takardar shaida mai suna. Wannan kwas ɗin yana taimaka muku zaɓar wadda ta dace da shirya yadda za ku same ta.",
    "Za ku mayar da aikinku na soja zuwa sunayen ayyukan farar hula, ku karanta tallace-tallacen ayyuka na gaske don ganin wace takardar shaida suke nema, ku duba shafukan VA na hukuma kan abin da GI Bill zai iya biya, ku kuma yi amfani da mataimakin AI don yin tsarin karatu da tambayoyin atisaye.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Dokokin tallafi suna canjawa, don haka kowane bayani game da kuɗi yana nuna shafin VA na hukuma don ku duba."
  ],
  finalTask: "Ku yi Tsarin Takardar Shaida a shafi ɗaya: aikinku na soja da sunayen ayyukan farar hula biyu da suka dace da shi, takardar shaida ɗaya da ta fi fitowa a tallace-tallacen ayyuka na gaske, ko VA za ta iya biyan kuɗin jarrabawar (tare da shafin hukuma da kuka duba), tsarin karatu na mako-mako da kuka yi da mataimakin AI, da layin CV da za ku ƙara idan kun ci jarrabawar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji (veterans) da sojojin da ke barin aiki, waɗanda ke son takardar shaida ta farar hula don nuna ƙwarewar da suka samu a aikin soja, sau da yawa a fannin IT (fasahar kwamfuta), jigilar kaya, gyaran injuna, lafiya ko tsaro.",
    startingPoint: "Suna da makarantun soja, lambobin yabo, lasisi da horo a bakin aiki, kuma suna iya amfani da kwamfuta ko wayar zamani. Yawancinsu ba su san wace takardar shaida masu ɗaukar aiki ke so ba, ko VA za ta iya biyan kuɗin jarrabawa, ko yadda za su tsara karatu tare da aiki da iyali.",
    gap: "Masu ɗaukar aiki na farar hula sau da yawa suna tace masu nema ta takardun shaida masu suna, kuma zaɓi mara kyau yana ɓata lokaci da tallafi. Masu koyo suna buƙatar zaɓar takardar shaidar da tallace-tallacen ayyuka na gaske ke nema, su duba dokokin biyan VA a shafukan hukuma, su kuma bi tsarin karatu na gaskiya da aka yi da AI, ba tare da hanyoyin magudi ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: kwamfuta ko wayar zamani mai intanet da mataimakin AI kyauta",
      "Adadin tallafi, fom da dokokin jarrabawa suna canjawa, don haka masu koyo suna tabbatar da su a va.gov da shafin hukumar da ke ba da takardar shaidar",
      "OPSEC (tsaron bayanan aiki): babu bayanan sirri na soja ko bayanan rukunin soja a kowane prompt na AI",
      "Lokaci: darussa na kusan minti 5; tsarin karatun kansa yana ci gaba na makonni bayan kwas ɗin"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gabatarwa ga AI da Makomar Ma'aikata\" yana taimaka wa masu koyo su fara mayar da ayyukansu zuwa kalmomin farar hula."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da lambar aikinku na soja", action: "gane sunayen ayyukan farar hula biyu ko uku da suka dace da aikinku na soja", standard: "ta amfani da My Next Move for Veterans, ba tare da bayanan sirri na soja a kowane prompt ba" },
    { id: "O2", condition: "Idan kuna da aƙalla tallace-tallacen ayyuka na gaske guda biyar don aikin da kuke so", action: "gane takardar shaidar da masu ɗaukar aiki suka fi nema, da tabbatar da dokokinta a shafin hukumar da ke ba da ita", standard: "ta amfani da ƙidayar tallace-tallacen" },
    { id: "O3", condition: "Don takardar shaidar da kuke so", action: "duba a va.gov ko VA za ta iya mayar muku da kuɗin jarrabawa, da yadda ake nema", standard: "kuna rubuta iyakar kuɗin, tallafin da suka cancanta da fom ɗin daga shafin hukuma" },
    { id: "O4", condition: "Idan kuna da jerin batutuwan jarrabawa na hukuma, makonninku da sa'o'inku", action: "yin tsarin karatu na mako-mako da mataimakin AI", standard: "mai buri a kowane mako, makon bita da jarrabawar gwaji" },
    { id: "O5", condition: "Idan kuna atisayen jarrabawa", action: "amfani da AI don ya yi muku tambayoyi ya kuma bayyana kurakuranku, kuna kwatanta shi da kayan karatu na hukuma", standard: "ba tare da amfani da brain dumps ko tambayoyin jarrabawa da aka fallasa ba" },
    { id: "O6", condition: "Idan kun sami takardar shaidar ko kuna kan neman ta", action: "rubuta layin CV da ke nuna takardar shaidar da aikinku na soja tare", standard: "da cikakken suna, hukumar da ke ba da ita, da shekara ko ranar jarrabawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓar takardar shaidar da ta dace",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mayar da aikinku na soja zuwa sunayen ayyukan farar hula",
          minutes: 5,
          goal: "Mayar da lambar aikinku na soja zuwa sunayen ayyukan farar hula biyu ko uku.",
          text: [
            "Manajojin ɗaukar aiki na farar hula ba safai suke sanin ma'anar MOS, rating ko AFSC ba. Aikinku na farko shi ne ku mayar da ita zuwa sunayen ayyukan da suke amfani da su, kamar \"IT support specialist\" (ma'aikacin taimakon kwamfuta), \"logistics coordinator\" (mai shirya jigilar kaya) ko \"maintenance technician\" (ma'aikacin gyara).",
            "My Next Move for Veterans (mynextmove.org/vets), wanda ake gudanarwa don Ma'aikatar Ƙwadago ta Amurka (U.S. Department of Labor), yana bar ku ku rubuta rundunarku da lambar aikinku na soja ko sunansa, ku ga ayyukan farar hula masu irin wannan aiki.",
            "Mataimakin AI ma zai iya taimakawa. Ku nemi ya bayyana ayyukanku da kalmomin farar hula, sannan ku kwatanta amsarsa da My Next Move. Kada ku saka bayanan sirri na soja, sunayen rukunin soja ko duk abin da aka ce kada ku bayyana."
          ],
          steps: ["Ku buɗe mynextmove.org/vets.", "A sashen soja, ku zaɓi rundunarku ku rubuta lambar aikinku ko sunansa.", "Ku rubuta ayyukan farar hula biyu ko uku da ya ba da shawara.", "Ku tambayi mataimakin AI: \"Na kasance Army 25B (IT specialist). Ka bayyana ayyukana da kalmomin farar hula don tallar aiki.\"", "Ku riƙe sunayen ayyukan da suka fito a wurare biyun."],
          words: [["MOS / rating / AFSC", "lambobin da rundunonin soja ke amfani da su don ayyukan soja (MOS a Army da Marine Corps, rating a Navy da Coast Guard, AFSC a Air Force)."], ["Sunan aiki (job title)", "sunan da mai ɗaukar aiki ya ba wa aiki a tallar aiki."]],
          slides: [
            { title: "Masu ɗaukar aiki ba sa jin harshen MOS", bullets: ["Ku mayar da lambar aikinku zuwa sunayen ayyukan farar hula", "Ku yi amfani da kalmomin da tallar aiki za ta yi amfani da su"] },
            { title: "My Next Move for Veterans", bullets: ["mynextmove.org/vets, don Ma'aikatar Ƙwadago ta Amurka", "Ku saka rundunarku da lambar aikinku", "Ku ga ayyukan farar hula masu irin wannan aiki"] },
            { title: "Ku nemi AI ya fassara", bullets: ["\"Ka bayyana ayyukana na 25B da kalmomin farar hula\"", "Ku kwatanta da My Next Move", "Kada ku taɓa saka bayanan sirri ko na rukunin soja"] }
          ],
          sources: [{ name: "My Next Move for Veterans (Ma'aikatar Ƙwadago ta Amurka)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Ku nemi aikinku na soja a mynextmove.org/vets, ku kuma nemi mataimakin AI ya bayyana ayyukanku da kalmomin farar hula. Ku rubuta sunayen ayyukan farar hula biyu da suka fito a duka wuraren biyu.",
          youCanNow: "mayar da lambar aikinku na soja zuwa sunayen ayyukan farar hula da mai ɗaukar aiki zai gane.",
          quickCheck: [
            { objective: "O1", q: "Me My Next Move for Veterans yake yi?", options: ["Yana nuna ayyukan farar hula masu kama da aikinku na soja", "Yana biyan kuɗin takardar shaidarku", "Yana rubuta muku CV ɗinku", "Yana yi muku rajistar jarrabawa"], answer: 0, why: "Kuna saka aikinku na soja, shi kuma yana nuna ayyukan farar hula masu kama da shi." },
            { objective: "O1", q: "Kuna neman AI ya bayyana ayyukanku da kalmomin farar hula. Me za ku bari a waje daga prompt ɗin?", options: ["Sunan aikinku", "Yawan mutanen da kuka jagoranta", "Irin kayan aikin da kuka kula da su", "Bayanan sirri na soja da bayanan rukunin soja"], answer: 3, why: "Ayyuka na gama-gari ba laifi, amma bayanan sirri na soja da bayanan rukuni ba sa shiga AI na jama'a." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nemo takardar shaidar da masu ɗaukar aiki ke nema",
          minutes: 5,
          goal: "Nemo takardar shaida ɗaya da ta fi fitowa a tallace-tallacen ayyuka na gaske don aikin da kuke so.",
          text: [
            "Takardar shaidar ƙwarewa (certification) shaida ce daga wata ƙungiya ta waje cewa kun ci jarrabawa kan wata ƙwarewa. Masu ɗaukar aiki suna rubuta waɗanda suke so a tallace-tallacen ayyukansu, don haka tallace-tallacen ayyuka su ne mafi kyawun jagora.",
            "Ku bincika shafin neman aiki da sunan aikin da kuke so da yankinku. Ku karanta tallace-tallace biyar zuwa goma ku ƙirga kowace takardar shaida da aka ambata. Wadda ta fi fitowa yawanci ita ce burinku na farko.",
            "Kowace runduna tana da shafin Credentialing Opportunities On-Line (COOL) da ke haɗa ayyukan soja da takardun shaida masu alaƙa. Ku tambayi ofishin ilimi ko ku bincika \"COOL\" tare da sunan rundunarku. Koyaushe ku duba shafin hukumar da ke ba da takardar shaidar don jarrabawa, dokoki da farashi na yanzu.",
            "AI zai iya taimaka muku kwatanta takardun shaida biyu, amma bayanansa na iya zama tsofaffi. Ku yi amfani da shi don bayani, ba don yanke farashi ko dokoki ba."
          ],
          steps: ["Ku bincika shafin neman aiki da sunan aikin da kuke so.", "Ku karanta tallace-tallace biyar zuwa goma ku rubuta kowace takardar shaida da aka ambata.", "Ku ƙirga su; ku zagaye wadda ta fi yawa.", "Ku duba shafin COOL na rundunarku don ganin yadda take da alaƙa da aikinku na soja.", "Ku buɗe shafin hukumar da ke ba da takardar shaidar don bayanan jarrabawa na yanzu."],
          words: [["Takardar shaidar ƙwarewa (certification)", "shaida daga wata ƙungiya ta waje cewa kun ci jarrabawa kan wata ƙwarewa."], ["Hukumar takardar shaida (certification body)", "ƙungiyar da ke rubuta jarrabawar kuma take ba da takardar shaidar."], ["COOL", "Credentialing Opportunities On-Line, shafukan rundunonin soja da ke haɗa ayyukan soja da takardun shaida na farar hula."]],
          slides: [
            { title: "Ku bar tallace-tallacen ayyuka su yanke", bullets: ["Ku karanta tallace-tallace 5-10 don aikin da kuke so", "Ku ƙirga kowace takardar shaida da aka ambata", "Wadda ta fi yawa ita ce burinku na farko"] },
            { title: "Ku yi amfani da shafin COOL na rundunarku", bullets: ["Yana haɗa aikinku na soja da takardun shaida masu alaƙa", "Ku nemi hanyar haɗin daga ofishin ilimi"] },
            { title: "Ku duba majiyar", bullets: ["Shafin hukumar takardar shaidar yana da jarrabawa ta yanzu", "AI zai iya bayani, amma bayanansa na iya zama tsofaffi"] }
          ],
          tryIt: "Ku karanta aƙalla tallace-tallacen ayyuka na gaske guda biyar don ɗaya daga cikin sunayen ayyukan farar hula da kuka samu. Ku ƙirga takardun shaidar da suka ambata ku zagaye wadda ta fi yawa.",
          youCanNow: "amfani da tallace-tallacen ayyuka na gaske don zaɓar takardar shaidar da masu ɗaukar aiki suka fi so.",
          quickCheck: [
            { objective: "O2", q: "Mene ne takardar shaidar ƙwarewa (certification)?", options: ["Digirin jami'a", "Wasiƙa daga aboki", "Shaida daga wata ƙungiya ta waje cewa kun ci jarrabawar ƙwarewa", "Sunan aiki"], answer: 2, why: "Ana samun takardar shaida ta hanyar cin jarrabawar da wata hukuma ta waje ta shirya." },
            { objective: "O2", q: "Uku daga cikin tallace-tallacen ayyukanku biyar sun ambaci takardar shaida ɗaya. Me za ku yi?", options: ["Ku zaɓi wata daban da take kama da ta fi wuya", "Ku zagaye ta a matsayin burinku ku duba dokokinta a shafin hukumar", "Ku yi watsi da tallace-tallacen ku tambayi AI", "Ku nemi dukkan takardun shaida a lokaci ɗaya"], answer: 1, why: "Takardar shaidar da ta fi fitowa a tallace-tallace na gaske ita ce masu ɗaukar aiki ke so; dokokinta na yanzu daga hukumar suke." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Duba abin da GI Bill zai iya biya",
          minutes: 5,
          goal: "Duba a va.gov ko VA za ta iya mayar muku da kuɗin jarrabawar takardar shaida, da yadda ake nema.",
          text: [
            "VA (Ma'aikatar Tsofaffin Sojoji ta Amurka) za ta iya mayar muku da kuɗin jarrabawar lasisi da takardar shaida, har da kuɗin rajista da na gudanarwa. Lokacin da muka duba va.gov a watan Oktoba 2026, iyakar ita ce ba fiye da $2,000 a kowace jarrabawa ba, kuma VA tana cire adadin da ta mayar daga haƙƙinku na GI Bill (entitlement). Ba ta biyan kuɗin takardar shaidar kanta.",
            "Dole ne kun riga kun sami ɗaya daga cikin waɗannan tallafin: Post-9/11 GI Bill, Montgomery GI Bill Active Duty ko Selected Reserve, ko Survivors' and Dependents' Educational Assistance. Don neman kuɗin, ku aika VA Form 22-0803 tare da rasidin kuɗin da sakamakon jarrabawarku ko takardar shaidar.",
            "VA kuma tana lissafa wasu hanyoyin amfani da tallafi, kamar kwasa-kwasan shiri, shirye-shiryen da ba na jami'a ba, da shirin horon fasahar zamani VET TEC 2.0, wanda ke da ƙayyadaddun gurabe kowace shekara. Dokoki da adadi suna canjawa, don haka ku buɗe shafin hukuma kafin ku kashe kuɗi."
          ],
          steps: ["Ku buɗe va.gov ku nemo shafin kuɗin jarrabawar lasisi da takardar shaida.", "Ku duba cewa kuna da ɗaya daga cikin tallafin GI Bill da aka lissafa.", "Ku rubuta iyakar yanzu, da cewa tana amfani da wani ɓangare na haƙƙinku.", "Ku ajiye rasidin jarrabawarku da sakamakonku.", "Ku aika VA Form 22-0803 kamar yadda shafin ya bayyana."],
          words: [["Haƙƙi (entitlement)", "adadin tallafin GI Bill da ya rage muku don amfani."], ["Mayar da kuɗi (reimbursement)", "biyan ku kuɗin da kuka riga kuka kashe."]],
          slides: [
            { title: "VA za ta iya mayar da kuɗin jarrabawa", bullets: ["Kuɗin jarrabawar lasisi da takardar shaida", "Ba fiye da $2,000 a kowace jarrabawa ba (va.gov, Oct 2026)", "Ana cire shi daga haƙƙinku na GI Bill"] },
            { title: "Yadda ake nema", bullets: ["Ku ajiye rasidin kuɗin da sakamakonku", "Ku aika VA Form 22-0803", "Ku duba va.gov don inda za ku aika"] },
            { title: "Wasu zaɓuɓɓuka", bullets: ["Kwasa-kwasan shiri da shirye-shiryen da ba na jami'a ba", "VET TEC 2.0 don horon fasahar zamani (gurabe kaɗan)", "Koyaushe ku fara duba shafin hukuma"] }
          ],
          sources: [
            { name: "VA: Kuɗin jarrabawar lasisi da takardar shaida", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: Yadda ake amfani da tallafin GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" }
          ],
          tryIt: "Ku buɗe shafin kuɗin jarrabawa na va.gov. Ku rubuta iyakar yanzu, tallafin da suka cancanta, da lambar fom ɗin. Sannan ku duba ko kuna da ɗaya daga cikin waɗannan tallafin.",
          youCanNow: "duba a va.gov ko VA za ta iya mayar da kuɗin jarrabawar takardar shaida, da abin da kuke buƙatar aikawa.",
          quickCheck: [
            { objective: "O3", q: "Me yake faruwa da GI Bill ɗinku idan VA ta mayar da kuɗin jarrabawa?", options: ["Babu abin da ke canjawa", "Kuna samun ƙarin haƙƙi", "Ana soke GI Bill ɗinku", "Ana cire adadin daga haƙƙinku"], answer: 3, why: "Mayar da kuɗin jarrabawa yana amfani da wani ɓangare na haƙƙinku na GI Bill." },
            { objective: "O3", q: "Wani rubutu a dandalin intanet ya ce VA tana biyan kowane kuɗin jarrabawa gaba ɗaya. Me za ku yi?", options: ["Ku duba dokokin yanzu a shafin kuɗin jarrabawa na hukuma a va.gov", "Ku yi rajistar jarrabawa mafi tsada", "Ku yarda da rubutun domin mutane da yawa sun so shi", "Ku nemi AI ya tabbatar da shi"], answer: 0, why: "Dokokin tallafi da iyakoki suna canjawa, don haka kuna tabbatar da su a shafin hukuma na va.gov." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓar takardar shaidar da ta dace",
        questions: [
          { objective: "O1", q: "Manajan ɗaukar aiki bai san ma'anar MOS ɗinku ba. Me ya kamata ku yi?", options: ["Ku rubuta lambar da manyan haruffa", "Ku cire aikin daga CV ɗinku", "Ku mayar da ita zuwa sunayen ayyukan farar hula da ayyuka", "Ku nemi shi ya bincika da kansa"], answer: 2, why: "Sunayen ayyukan farar hula da ayyuka kalmomi ne da mai ɗaukar aiki ya riga ya fahimta." },
          { objective: "O1", q: "Wane shafi kyauta ne ke bar ku ku saka lambar aikin soja ku ga ayyukan farar hula?", options: ["My Next Move for Veterans", "Manhajar sada zumunta", "Shagon wasannin bidiyo", "Shafin yanayi"], answer: 0, why: "mynextmove.org/vets kayan aiki ne na Ma'aikatar Ƙwadago don wannan." },
          { objective: "O2", q: "Ta yaya za ku gane wace takardar shaida masu ɗaukar aiki suka fi so?", options: ["Ku zaɓi mafi tsada", "Ku tambayi kowane aboki", "Ku yi dukkan jarrabawa a lokaci ɗaya", "Ku ƙirga takardun shaidar da aka ambata a tallace-tallacen ayyuka na gaske"], answer: 3, why: "Tallace-tallacen ayyuka suna nuna abin da masu ɗaukar aiki ke nema." },
          { objective: "O2", q: "A ina za ku duba dokokin jarrabawa da farashin takardar shaida na yanzu?", options: ["A hirar AI kawai", "A shafin hukumar da ke ba da takardar shaidar", "A tsohon rubutu na dandalin intanet", "A tallar da ke tasowa (pop-up)"], answer: 1, why: "Ƙungiyar da ke ba da jarrabawar tana da bayanai na yanzu." },
          { objective: "O3", q: "Bisa ga va.gov a watan Oktoba 2026, mene ne gaskiya game da VA tana biyan kuɗin jarrabawar takardar shaida?", options: ["VA tana biyan kuɗin takardar shaidar kanta", "VA za ta iya mayar da har $2,000 a kowace jarrabawa, kuma tana amfani da haƙƙi", "Babu iyaka", "Kowa zai iya nema ba tare da tallafin GI Bill ba"], answer: 1, why: "Shafin ya ce ba fiye da $2,000 a kowace jarrabawa ba, ana cirewa daga haƙƙi." }
        ]
      }
    },
    {
      name: "Babi na 2: Samun takardar shaidar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yin tsarin karatu da AI",
          minutes: 5,
          goal: "Amfani da mataimakin AI don mayar da jerin batutuwan jarrabawa na hukuma zuwa tsarin karatu na mako-mako.",
          text: [
            "Yawancin hukumomin takardar shaida suna wallafa jerin batutuwan jarrabawa (exam outline), wani lokaci ana kiransa exam objectives. Yana lissafa kowane batu da jarrabawar ta ƙunsa. Wannan shi ne bayanin aikinku (mission brief).",
            "Ku kwafi manyan batutuwa (ba dukkan takardar ba idan tana da tsawo) zuwa mataimakin AI, ku kuma faɗa masa halin da kuke ciki: makonni nawa kuke da su, sa'o'i nawa a mako, da abin da kuka riga kuka sani daga aikin soja.",
            "Ku nemi tsari mai buri a kowane mako, makon bita kafin jarrabawa, da ranar jarrabawar gwaji. Sannan ku saka lokutan karatu a kalandarku kamar lokutan aiki (duty)."
          ],
          steps: ["Ku sauke jerin batutuwan jarrabawa na hukuma daga hukumar takardar shaidar.", "Ku faɗa wa AI makonninku, sa'o'inku a mako da abin da kuka riga kuka sani.", "Ku liƙa manyan batutuwa ku nemi tsari na mako-mako.", "Ku nemi ya ƙara makon bita da jarrabawar gwaji.", "Ku saka kowane lokacin karatu a kalandarku."],
          words: [["Jerin batutuwan jarrabawa (exam outline / objectives)", "jerin hukuma na batutuwan da jarrabawar takardar shaida ta ƙunsa."], ["Tsarin karatu", "jadawali da ke faɗin abin da za ku karanta da lokacin da za ku karanta shi."]],
          slides: [
            { title: "Jerin batutuwan jarrabawa shi ne bayanin aikinku", bullets: ["Yana lissafa kowane batu da jarrabawar ta ƙunsa", "Ku samo shi daga hukumar takardar shaidar"] },
            { title: "Ku faɗa wa AI halin da kuke ciki", bullets: ["Makonni kafin jarrabawa", "Sa'o'in da za ku iya karatu a kowane mako", "Abin da kuka riga kuka sani daga aikin soja"] },
            { title: "Ku nemi tsari na gaske", bullets: ["Buri a kowane mako", "Makon bita da jarrabawar gwaji", "Sannan ku saka shi a kalandarku"] }
          ],
          tryIt: "Ku samo jerin batutuwan jarrabawa don takardar shaidar da kuke so. Ku tambayi mataimakin AI: \"Ina da makonni 8 da sa'o'i 6 a mako. Na riga na san [abin da kuka sani]. Ka yi mini tsarin karatu na mako-mako don waɗannan batutuwa: [batutuwa].\"",
          youCanNow: "mayar da jerin batutuwan jarrabawa na hukuma zuwa tsarin karatu na mako-mako da mataimakin AI.",
          quickCheck: [
            { objective: "O4", q: "Mene ne jerin batutuwan jarrabawa (exam outline)?", options: ["Jarrabawar gwaji daga wani shafi", "Jerin hukuma na batutuwan da jarrabawar ta ƙunsa", "Jadawalin ƙungiyar karatu", "Jerin amsoshin jarrabawar da ta wuce"], answer: 1, why: "Jerin batutuwan jarrabawa daga hukumar takardar shaida yana lissafa daidai abin da jarrabawar ta ƙunsa." },
            { objective: "O4", q: "Kuna da makonni 10 da sa'o'i 5 a mako. Me za ku ba AI don tsarin karatunku?", options: ["Kawai \"taimake ni in ci\"", "Bayanan shiga asusunku na shafin jarrabawa", "Batutuwan jarrabawa, makonni 10, sa'o'i 5 a mako da abin da kuka riga kuka sani", "Tsarin karatun wani aboki"], answer: 2, why: "Batutuwa, lokaci da abin da kuka sani suna bar AI ya yi tsari na mako-mako na gaskiya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin atisaye da AI ta hanyar da ta dace",
          minutes: 5,
          goal: "Amfani da AI don ya yi muku tambayoyi ya bayyana kurakurai, yayin da kuke kwatanta shi da kayan karatu na hukuma.",
          text: [
            "AI abokin karatu ne mai kyau. Zai iya yi muku tambayoyi kan batu ɗaya, ya bayyana amsar da ba daidai ba da kalmomi masu sauƙi, ko ya ba ku misali na gaske daga aikinku na soja.",
            "Yana kuma iya yin kuskure ko bayanansa su zama tsofaffi. Idan amsarsa ba ta yi daidai da littafin karatu na hukuma ko jerin batutuwan jarrabawa ba, ku amince da kayan hukuma.",
            "Kada ku taɓa amfani da \"brain dumps\" (kwafin tambayoyin jarrabawa na gaske). Suna karya dokokin hukumar takardar shaida kuma suna iya sa ku rasa takardar shaidar. Ku yi atisaye don fahimta, ba don haddace amsoshi ba."
          ],
          steps: ["Ku tambaya: \"Ka yi mini tambayoyi 5 kan [batu ɗaya]. Ka jira amsata kowane lokaci.\"", "Idan kun yi kuskure a ɗaya, ku nemi ya bayyana da kalmomi masu sauƙi.", "Ku nemi misali daga aikinku na soja.", "Ku duba kowace amsa da kuke shakka a littafin karatu na hukuma.", "Ku rubuta batutuwan da kuke da rauni a ciki ku sake karanta su."],
          words: [["Brain dump", "kwafin tambayoyin jarrabawa na gaske da aka raba saɓanin doka; amfani da shi zai iya sa ku rasa takardar shaidar."], ["Jarrabawar gwaji (practice test)", "jarrabawa da aka yi don atisaye wadda ke kama da ta gaske amma ba a kwafo ta daga gare ta ba."]],
          slides: [
            { title: "AI a matsayin abokin karatu", bullets: ["Yana yi muku tambayoyi kan batu ɗaya", "Yana bayyana amsoshin da ba daidai ba a sauƙaƙe", "Yana ba da misalai daga aikinku na soja"] },
            { title: "Ku kwatanta da kayan hukuma", bullets: ["AI yana iya yin kuskure ko bayanansa su tsufa", "Littafin karatu na hukuma shi ne mai rinjaye"] },
            { title: "Babu brain dumps", bullets: ["Kwafin tambayoyin jarrabawa suna karya doka", "Suna iya sa ku rasa takardar shaidar", "Ku yi atisaye don fahimta"] }
          ],
          tryIt: "Ku zaɓi batu na farko a tsarin karatunku. Ku nemi mataimakin AI ya yi muku tambayoyi biyar, ɗaya bayan ɗaya. Duk inda kuka yi kuskure, ku nemi bayani mai sauƙi ku duba shi a kayan hukuma.",
          youCanNow: "amfani da AI don yi wa kanku tambayoyi da bayyana kurakurai, yayin da kuke kwatanta shi da kayan hukuma.",
          quickCheck: [
            { objective: "O5", q: "Mene ne brain dump?", options: ["Tambayoyin jarrabawa na gaske da aka fallasa aka raba saɓanin doka", "Tsarin karatu da AI ya yi", "Jarrabawar gwaji ta hukuma kyauta", "Jerin batutuwan jarrabawa"], answer: 0, why: "Brain dumps suna raba tambayoyin jarrabawa na gaske, wanda ke karya doka kuma zai iya sa ku rasa takardar shaidar." },
            { objective: "O5", q: "Kun yi kuskure a tambayar atisaye daga AI. Me za ku yi a gaba?", options: ["Ku tsallake wannan batu", "Ku haddace amsar AI ba tare da dubawa ba", "Ku nemi brain dump", "Ku nemi AI ya bayyana ta a sauƙaƙe ku duba ta a littafin hukuma"], answer: 3, why: "Bayanin AI yana taimakawa, amma littafin hukuma shi ne magana ta ƙarshe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nuna takardar shaidarku ga masu ɗaukar aiki",
          minutes: 4,
          goal: "Rubuta layin CV da gajeren labari da ke nuna takardar shaidarku da aikinku na soja tare.",
          text: [
            "Da zarar kun ci jarrabawar, ku saka takardar shaidar inda masu ɗaukar aiki ke dubawa: sashen \"Certifications\" (Takardun shaida) a CV ɗinku tare da cikakken suna, hukumar da ta ba da ita da shekara, da kuma bayananku na intanet (profile).",
            "Ku haɗa ta da aikinku na soja. Misali: \"Na kula da shiga hanyar sadarwar kwamfuta (network) ga masu amfani 300 a matsayin IT specialist na Army; na sami [sunan takardar shaida] a 2026.\" Takardar shaidar tana tabbatar da ƙwarewar; aikinku na soja yana nuna kun yi amfani da ita cikin matsin lamba.",
            "Har yanzu kuna karatu? Kuna iya rubuta \"[sunan takardar shaida], ana kan nema, ranar jarrabawa [wata shekara]\". Ku nemi mataimakin AI ya taimaka da kalmomi, sannan ku tabbata kowace kalma gaskiya ce."
          ],
          steps: ["Ku ƙara sashen Certifications (Takardun shaida) a CV ɗinku.", "Ku rubuta cikakken sunan takardar shaidar, hukumar da shekarar.", "Ku ƙara layin CV ɗaya da ke haɗa ta da wani abu da kuka yi a aikin soja.", "Idan har yanzu kuna karatu, ku rubuta \"ana kan nema\" tare da watan jarrabawarku.", "Ku karanta shi da babbar murya ku duba cewa kowace kalma gaskiya ce."],
          words: [["CV (résumé)", "takaitaccen bayani na shafi ɗaya ko biyu game da aikinku, horonku da ƙwarewarku don masu ɗaukar aiki."]],
          slides: [
            { title: "Ku saka ta inda masu ɗaukar aiki ke dubawa", bullets: ["Sashen Certifications (Takardun shaida) a CV ɗinku", "Cikakken suna, hukumar takardar shaidar, shekara"] },
            { title: "Ku haɗa ta da aikinku na soja", bullets: ["Takardar shaida tana tabbatar da ƙwarewa", "Aikin soja yana nuna kun yi amfani da ita cikin matsin lamba"] },
            { title: "Har yanzu kuna karatu?", bullets: ["\"[Suna], ana kan nema, ranar jarrabawa [wata shekara]\"", "Dole kowace kalma ta zama gaskiya"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi Tsarin Takardar Shaida na shafi ɗaya da sunayen ayyukanku, takardar shaidar da kuke so, shafin VA da kuka duba, tsarin karatunku na AI, da layin CV da za ku ƙara idan kun ci jarrabawar.",
          youCanNow: "shiryawa, samun kuɗi, karatu da nuna takardar shaida da ta dace da ƙwarewarku ta soja.",
          quickCheck: [
            { objective: "O6", q: "Me ke shiga sashen Certifications (Takardun shaida) na CV ɗinku?", options: ["Gajeren suna kawai", "Makin jarrabawarku", "Cikakken suna, hukumar takardar shaidar da shekara", "Kuɗin da kuka biya"], answer: 2, why: "Masu ɗaukar aiki suna buƙatar cikakken suna, wanda ya ba da ita da lokacin." },
            { objective: "O6", q: "Jarrabawarku a watan Maris ce kuma ba ku ci ba tukuna. Yaya za ku rubuta ta?", options: ["Ku rubuta cewa kun ci", "\"[Suna], ana kan nema, ranar jarrabawa Maris 2027\"", "Ku ɓoye cewa kuna karatu", "Ku rubuta \"kusan na sami takardar shaida\""], answer: 1, why: "Rubuta ta a matsayin ana kan nema tare da ranar jarrabawa gaskiya ne kuma yana nuna tsarinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Samun takardar shaidar",
        questions: [
          { objective: "O4", q: "Me ya kamata ku ba mataimakin AI don yin tsarin karatu mai kyau?", options: ["Lambar Social Security ɗinku", "Bayanan bankinku", "Sunan takardar shaidar kawai", "Batutuwan jarrabawa, makonninku da sa'o'inku a mako"], answer: 3, why: "Batutuwa tare da lokacinku suna ba AI abin da yake buƙata don tsarawa." },
          { objective: "O4", q: "Mene ne jerin batutuwan jarrabawa (exam outline)?", options: ["Jerin hukuma na batutuwan da jarrabawar ta ƙunsa", "Jerin amsoshi", "Jarrabawar gwaji", "Tallar aiki"], answer: 0, why: "Hukumar takardar shaida tana wallafa shi don ku san abin da za ku karanta." },
          { objective: "O5", q: "Bayanin AI bai yi daidai da littafin karatu na hukuma ba. Me za ku yi?", options: ["Ku amince da AI", "Ku tsallake batun", "Ku amince da littafin karatu na hukuma", "Ku nemi AI ya yi muhawara"], answer: 2, why: "Kayan hukuma su ne ma'aunin da jarrabawar ke amfani da shi." },
          { objective: "O5", q: "Wani ya ba ku \"brain dump\" na tambayoyin jarrabawa na gaske. Me ya kamata ku yi?", options: ["Ku yi amfani da shi a daren kafin jarrabawa", "Ku raba shi da abokai", "Ku biya ƙarin kuɗi don sabo", "Ku ƙi shi: yana karya doka kuma zai iya sa ku rasa takardar shaidar"], answer: 3, why: "Brain dumps suna karya dokokin takardar shaida." },
          { objective: "O6", q: "Wane layin CV ne ya fi haɗa takardar shaida da aikinku na soja?", options: ["\"Ina da takardar shaida.\"", "\"Na iya kwamfuta.\"", "\"Na kula da shiga hanyar sadarwar kwamfuta ga masu amfani 300 a matsayin IT specialist na Army; na sami [takardar shaida] a 2026.\"", "\"Duba abin da aka haɗa.\""], answer: 2, why: "Yana nuna ƙwarewar a aikace tare da shaidar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Takardun Shaidar Ƙwarewa da AI ga Tsofaffin Sojoji",
    questions: [
      { objective: "O1", q: "Me yasa za ku mayar da aikinku na soja zuwa sunayen ayyukan farar hula?", options: ["Don ɓoye aikinku na soja", "Don masu ɗaukar aiki su fahimci ƙwarewarku", "Domin lambobin sirri ne", "Don CV ɗinku ya yi tsawo"], answer: 1, why: "Sunayen ayyukan farar hula suna amfani da kalmomin da masu ɗaukar aiki suka sani." },
      { objective: "O1", q: "A My Next Move for Veterans kuna iya:", options: ["Saka aikinku na soja ku ga ayyukan farar hula masu kama da shi", "Neman tallafin nakasa na VA", "Sayen takardun biyan jarrabawa (vouchers)", "Sauke DD-214 ɗinku"], answer: 0, why: "Yana haɗa ayyukan soja da ayyukan farar hula." },
      { objective: "O1", q: "Me bai kamata ku liƙa a mataimakin AI ba yayin da kuke fassara ayyukanku?", options: ["Sunan aikinku", "Ayyuka na gama-gari", "Bayanan sirri na soja ko bayanan rukunin soja", "Kalmar \"jagoranci\""], answer: 2, why: "Bayanan sirri da na rukunin soja dole su kasance a ɓoye." },
      { objective: "O2", q: "Takardar shaidar ƙwarewa ita ce:", options: ["Shaida daga wata ƙungiya ta waje cewa kun ci jarrabawar ƙwarewa", "Digirin jami'a", "Muƙamin soja", "Tayin aiki"], answer: 0, why: "Tana tabbatar da cewa kun ci jarrabawar ƙwarewa." },
      { objective: "O2", q: "Mafi kyawun jagora na farko kan wace takardar shaida za ku nema shi ne:", options: ["Jarrabawa mafi tsawo", "Jarrabawa mafi araha", "Wani bidiyo na kowa", "Tallace-tallacen ayyuka na gaske don aikin da kuke so"], answer: 3, why: "Masu ɗaukar aiki suna ambaton abin da suke so a tallace-tallacen ayyuka." },
      { objective: "O2", q: "Mene ne ma'anar COOL?", options: ["Civilian Office of Online Learning", "Credentialing Opportunities On-Line", "Certified Officer Operations List", "Career Options Over Lunch"], answer: 1, why: "COOL yana haɗa ayyukan soja da takardun shaida na farar hula." },
      { objective: "O2", q: "A ina ya kamata ku tabbatar da farashi da dokokin jarrabawa na yanzu?", options: ["A hirar AI", "A shafin hukumar takardar shaidar", "A tunanin wani aboki", "A sharhin sada zumunta"], answer: 1, why: "Hukumar takardar shaidar tana da bayanai na yanzu." },
      { objective: "O3", q: "Bisa ga va.gov a watan Oktoba 2026, mayar da kuɗin jarrabawa na VA yana da iyakar:", options: ["$200 a kowace jarrabawa", "$20,000 a shekara", "Babu iyaka", "$2,000 a kowace jarrabawa"], answer: 3, why: "Shafin ya ce ba fiye da $2,000 a kowace jarrabawa ba." },
      { objective: "O3", q: "Idan VA ta mayar da kuɗin jarrabawa, me ke faruwa da GI Bill ɗinku?", options: ["Ana cire adadin daga haƙƙinku", "Babu komai", "Yana ninkawa", "Yana ƙarewa"], answer: 0, why: "VA tana cire adadin da ta mayar daga haƙƙinku." },
      { objective: "O3", q: "Wane fom kuke aikawa don neman VA ta mayar da kuɗin jarrabawa?", options: ["W-2", "DD-214", "VA Form 22-0803", "SF-86"], answer: 2, why: "va.gov ya ambaci VA Form 22-0803 don mayar da kuɗin jarrabawa." },
      { objective: "O3", q: "Mayar da kuɗin jarrabawa na VA ya ƙunshi:", options: ["Kuɗin takardar shaidar kanta", "Kayan ciye-ciyenku na karatu", "Kuɗin tafiyarku zuwa jarrabawa", "Kuɗin jarrabawa, har da kuɗin rajista da na gudanarwa"], answer: 3, why: "Ya ƙunshi kuɗin jarrabawa, ba takardar shaidar kanta ba." },
      { objective: "O3", q: "Mafi kyawun bayanin VET TEC 2.0 shi ne:", options: ["Neman tallafin nakasa", "Bashin gida", "Shirin VA na horon fasahar zamani mai ƙayyadaddun gurabe", "Muƙamin soja"], answer: 2, why: "Yana ɗaukar nauyin horon fasahar zamani wanda ba na jami'a ba, tare da iyaka a kowace shekara." },
      { objective: "O3", q: "Adadin tallafi na iya canjawa. Kafin ku kashe kuɗi ya kamata ku:", options: ["Amince da tsohon rubutun blog", "Duba shafin hukuma na va.gov", "Tambayi AI kawai", "Yi hasashe"], answer: 1, why: "Shafin hukuma yana da dokokin yanzu." },
      { objective: "O4", q: "Abu na farko da za ku tara don tsarin karatu na AI shi ne:", options: ["Jerin batutuwan jarrabawa na hukuma", "Brain dump", "Kalmar sirrinku", "Rubuce-rubucen wani"], answer: 0, why: "Jerin batutuwan yana lissafa abin da jarrabawar ta ƙunsa." },
      { objective: "O4", q: "Tsarin karatu mai kyau ya ƙunshi:", options: ["Ranar jarrabawa kawai", "Karanta komai a daren kafin jarrabawa", "Buri a kowane mako, makon bita da jarrabawar gwaji", "Babu kalanda"], answer: 2, why: "Buri na mako-mako da bita suna kai ku ga shiri." },
      { objective: "O5", q: "Wane prompt ne ya fi kyau don atisaye?", options: ["\"Ka yi mini tambayoyi 5 kan wannan batu, ɗaya bayan ɗaya.\"", "\"Ka ba ni amsoshin jarrabawa na gaske.\"", "\"Ka ci jarrabawar a madadina.\"", "\"Ka ba ni barkwanci.\""], answer: 0, why: "Yana sa ku yi atisaye kuma ya jira amsarku." },
      { objective: "O5", q: "Me yasa za ku guji brain dumps?", options: ["Sun yi tsawo sosai", "Suna da ban gajiya", "Kyauta ne", "Suna karya doka kuma suna iya sa ku rasa takardar shaidar"], answer: 3, why: "Hukumomin takardar shaida sun haramta su." },
      { objective: "O5", q: "Kun yi kuskure a tambayar atisaye. Mataki mai kyau na gaba shi ne:", options: ["Daina karatu", "Neman AI ya bayyana ta a sauƙaƙe ku duba littafin hukuma", "Tsallake dukkan batun", "Mayar da ranar jarrabawarku zuwa gobe"], answer: 1, why: "Fahimtar kuskuren yana gyara wurin da kuke da rauni." },
      { objective: "O6", q: "Sashen Certifications (Takardun shaida) na CV ɗinku ya kamata ya nuna:", options: ["Tambari (logo) kawai", "Cikakken suna, hukumar takardar shaidar da shekara", "Takardar makin jarrabawarku", "Sa'o'in karatunku"], answer: 1, why: "Cikakken suna, hukuma da shekara su ne masu ɗaukar aiki ke dubawa." },
      { objective: "O6", q: "Ba ku ci jarrabawar ba tukuna. Yaya za ku rubuta takardar shaidar?", options: ["Ku ce kun ci", "Ku rubuta wata daban", "Ku bar layi a buɗe", "\"[Suna], ana kan nema, ranar jarrabawa [wata shekara]\""], answer: 3, why: "\"Ana kan nema\" tare da rana gaskiya ne kuma yana da amfani." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 6, 8, 12, 13, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Sunayen ayyukan farar hula", objective: "O1", notYet: "Babu sunayen ayyukan farar hula, ko sunayen da ba su dace da aikin soja ba.", meets: "Aikin soja da sunayen ayyukan farar hula biyu da suka dace da shi.", exceeds: "Sunayen sun fito a duka My Next Move for Veterans da bayanin AI." },
      { name: "Takardar shaidar da ake so", objective: "O2", notYet: "An yi hasashen takardar shaidar ko an zaɓe ta daga talla.", meets: "Takardar shaidar da ta fi fitowa a aƙalla tallace-tallacen ayyuka na gaske guda biyar.", exceeds: "Yana nuna ƙidayar da shafin hukumar takardar shaidar da aka duba don dokokin yanzu." },
      { name: "An duba biyan VA", objective: "O3", notYet: "Ba a duba VA ba, ko bayani daga dandalin intanet ko AI kawai.", meets: "Ko VA za ta iya biyan kuɗin jarrabawar, tare da sunan shafin hukuma na va.gov.", exceeds: "Yana kuma ambaton fom ɗin da cewa mayar da kuɗin yana amfani da haƙƙi." },
      { name: "Tsarin karatu", objective: "O4", notYet: "Babu tsari, ko tsari ba tare da makonni ko batutuwa ba.", meets: "Tsari na mako-mako daga jerin batutuwan jarrabawa na hukuma, tare da makon bita da jarrabawar gwaji.", exceeds: "Tsarin ya dace da ainihin sa'o'in mai koyo kuma yana da ƙayyadadden ranar jarrabawa." },
      { name: "Layin CV", objective: "O6", notYet: "Babu layin CV, ko layin da ke iƙirarin takardar shaida da ba a samu ba tukuna.", meets: "Layin CV na gaskiya mai cikakken suna, hukuma da shekara ko ranar jarrabawa, wanda aka haɗa da aikin soja.", exceeds: "Ya haɗa da gajeren labarin wani sakamako daga aikin soja da takardar shaidar ke goyon baya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajistar jarrabawar takardar shaidarsu cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka ci jarrabawar takardar shaidarsu cikin watanni 6",
      "Masu koyo da suka nemi aikin da ke buƙatar takardar shaidar cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko wayar zamani mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Shafukan kyauta na My Next Move for Veterans, va.gov da na hukumomin takardar shaida, da tallace-tallacen ayyuka na gaske guda biyar",
      "Takarda ko takardar kwamfuta don Tsarin Takardar Shaida na shafi ɗaya",
      "Kusan minti 60 gaba ɗaya don kwas ɗin; tsarin karatun yana ci gaba bayan haka"
    ],
    facilitatorNotes: [
      "Ku haɗa masu koyo bisa fannin da suke so (IT, jigilar kaya, gyaran injuna, lafiya) don su raba tallace-tallacen ayyuka da jerin batutuwan jarrabawa.",
      "Ku sa masu koyo su tabbatar da kowane adadi da fom a va.gov a lokacin zaman, maimakon amincewa da rubuce-rubuce ko AI.",
      "Ku yi gargaɗi a sarari game da brain dumps; suna iya sa masu koyo su rasa takardar shaidar.",
      "Ku ba da maki ga Tsarin Takardar Shaida da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku shirya ganawa bayan kwanaki 30 don masu koyo su faɗi ci gaban karatunsu da ranar jarrabawarsu."
    ]
  }
};
