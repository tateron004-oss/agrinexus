"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-careers-opportunities.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-ai-careers-opportunities-ha",
  lang: "ha",
  translationOf: "veterans-ai-careers-opportunities",
  category: "Veterans (military)",
  name: "Sana'o'in Gaba da Damarmakin AI",
  skills: "Haɗa aikin soja da sana'o'in farar hula, Gane sana'o'in AI masu bunƙasa, Kwatanta sana'o'i da bayanan hukuma, Nemo horo da tallafi, Rubuta tsarin sana'a na kwana 90",
  outcome: "yin gajeren jerin sana'o'in farar hula uku da suka dace da ƙwarewarku ta soja, kwatanta albashinsu, bunƙasarsu da horonsu da bayanan hukuma, da rubuta tsarin kwana 90 don fara mafi kyau daga cikinsu.",
  about: [
    "Wannan kwas ɗin na tsoffin sojoji (veterans) ne da sojojin da ke barin aiki, waɗanda ke zaɓar abin da za su yi gaba. Sana'o'i da yawa suna bunƙasa saboda AI, kuma da yawansu suna buƙatar ainihin abin da kuka koya a aikin soja: ladabi, ƙwarewar fasaha, shugabanci da aiki cikin matsi.",
    "Za ku haɗa aikinku na soja da sana'o'in farar hula ta amfani da kayan aikin hukuma na Ma'aikatar Ƙwadago ta Amurka (Department of Labor), ku yi amfani da mataimakin AI don bincike da kwatanta su, ku tabbatar da kowace lamba da bayanan hukuma, sannan ku nemo horon da tallafinku zai iya biya.",
    "Kowane darasi yana ɗaukar kusan minti biyar: ku karanta, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta tsarin sana'a mai shafi ɗaya: sana'o'in farar hula uku da suka dace da aikinku na soja (daga O*NET Military Crosswalk ko CareerOneStop), kowanne da matsakaicin albashinsa (median pay) da hasashen ayyukansa daga Occupational Outlook Handbook, da gibin ƙwarewar da kuke buƙatar cikewa. Sannan ku zaɓi sana'a ɗaya ku rubuta matakai uku masu kwanan wata na kwana 90 masu zuwa, har da zaɓin horo ko tallafi ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsoffin sojoji da sojojin da ke barin aiki, waɗanda ke yanke shawarar wace sana'ar farar hula za su bi. Da yawa suna da ƙwarewar fasaha, jigilar kaya (logistics) ko shugabanci, amma ba su tabbata waɗanne sana'o'i ke bunƙasa ba, da yadda aikinsu na soja ya dace da su.",
    startingPoint: "Suna iya amfani da wayar zamani ko kwamfuta da bincike a intanet. Wataƙila sun gwada mataimakin AI. Ba su taɓa kwatanta sana'o'i da bayanan hukuma ba, ko rubuta tsari mai kwanan wata.",
    gap: "Zaɓar sana'a daga hasashe ko amsoshin AI kaɗai na iya ɓata watanni da tallafi. Masu koyo suna buƙatar haɗa aikinsu na soja da sana'o'in farar hula da kayan aikin hukuma, kwatanta albashi, hasashen ayyuka da horo da bayanan hukuma, da ɗaukar alƙawarin gajeren tsari mai kwanan wata.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ba a ɗauka suna da ilimin fasaha ba",
      "Na'urori: wayar zamani ko kwamfuta mai intanet, wani lokaci kwamfutar sansani ko ta ɗakin karatu da ake rabawa",
      "Lokaci: darussa na kusan minti 5 da suka dace da ganawar barin aiki da aiki",
      "Albashi, cancanta da ƙa'idojin shirye-shirye suna canjawa, don haka masu koyo suna duba bls.gov/ooh, va.gov da dol.gov maimakon amincewa da lambobin AI",
      "Sirri: babu lambar Social Security, ta fayil ɗin VA ko ta aikin soja a kowane prompt na AI"
    ],
    prerequisites: "Babu. Masu koyo da suke sababbi ga mataimakan AI za su iya fara ɗaukar kwas ɗin \"Gabatarwa ga AI da Makomar Ma'aikata\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku fannonin da ke bunƙasa saboda AI", action: "gane waɗanne fannoni masu bunƙasa suka dace da ƙwarewarku ta soja", standard: "kuna ambaton aƙalla biyu tare da dalili daga aikinku na soja" },
    { id: "O2", condition: "Idan kuna da MOS, rating ko AFSC ɗinku", action: "amfani da O*NET Military Crosswalk da CareerOneStop don jera ayyukan farar hula da suka dace da aikinku na soja", standard: "da aƙalla ayyuka biyar da suka dace" },
    { id: "O3", condition: "Idan aka ba ku sana'a ɗaya daga jerinku", action: "amfani da mataimakin AI don bayyana aikin yau da kullum na sana'ar, ƙwarewarta da hanyar shiga ta, da yi wa kowane bayanin da ke buƙatar tabbatarwa alama", standard: "kuna yi wa kowace lamba, takardar shaida da sharaɗi alama" },
    { id: "O4", condition: "Idan aka ba ku sana'o'i uku", action: "kwatanta matsakaicin albashinsu, hasashen ayyukansu da ilimin shiga ta amfani da Occupational Outlook Handbook", standard: "kowace lamba daga bls.gov/ooh, ba daga AI ba" },
    { id: "O5", condition: "Don sana'ar da kuka zaɓa", action: "nemo zaɓin horo ɗaya da shirin hukuma ɗaya da zai iya taimakawa wajen biyan kuɗinsa", standard: "tare da sharaɗin cancanta ɗaya da aka kwafo daga shafin hukuma na shirin" },
    { id: "O6", condition: "Ta amfani da kwatancenku da zaɓin horonku", action: "rubuta tsarin sana'a na kwana 90 mai matakai uku masu kwanan wata", standard: "kowane mataki a sarari, da kwanan wata, kuma da zaɓin horo ko tallafi ɗaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Inda damarmakin suke",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sana'o'in da ke bunƙasa saboda AI",
          minutes: 5,
          goal: "Ambaci nau'o'in sana'o'i huɗu da ke bunƙasa saboda AI, ku faɗi waɗanda suka dace da ƙwarewarku.",
          text: [
            "AI ba ya samar da ayyuka ga masu rubuta shirin kwamfuta (programmers) kaɗai ba. Yana canja aiki a fannoni da yawa, kuma yana sa ana buƙatar mutanen da za su iya tafiyar da tsarin da ke kewaye da shi, kare shi, gyara shi da kula da shi.",
            "Fannonin da tsoffin sojoji sukan dace da su: tsaron intanet (cybersecurity, kare hanyoyin sadarwa da bayanai), taimakon bayanai da IT (tabbatar da tsarin da bayanai suna aiki), jigilar kaya da sarkar samarwa (tsarawa, hasashe, motsa kaya), aikin gyara da masu fasaha (kayan aiki, makamashi, jiragen sama, lantarki), da shugabancin ayyuka da gudanarwa (jagorantar mutane da tsare-tsare).",
            "Da yawa daga cikin waɗannan ayyuka har yanzu suna buƙatar hannu, hikima da amana. Ƙwararren jigilar kaya da ke iya karanta hasashen AI sannan ya yanke abin da za a yi oda ya fi daraja fiye da wanda ba zai iya ba."
          ],
          words: [["Cybersecurity (tsaron intanet)", "kare kwamfutoci, hanyoyin sadarwa da bayanai daga hare-hare."], ["Supply chain (sarkar samarwa)", "dukkan matakan da ke kai kaya daga mai yinsa zuwa mai amfani."]],
          slides: [
            { title: "AI yana sa ana buƙatar fiye da programmers", bullets: ["Mutanen da ke tafiyarwa, karewa, gyarawa da kula da tsarin", "Mutanen da ke amfani da AI kuma har yanzu suna yanke shawara"] },
            { title: "Fannonin da tsoffin sojoji suka dace", bullets: ["Tsaron intanet da taimakon IT", "Jigilar kaya da sarkar samarwa", "Aikin gyara da masu fasaha", "Shugabancin ayyuka da gudanarwa"] },
            { title: "Abin da ya fifita ku", bullets: ["Ladabi da ƙwarewar fasaha", "Shugabanci cikin matsi", "Hikima: karanta bayanai, sannan yanke shawara"] }
          ],
          tryIt: "Ku rubuta fannoni biyar na wannan darasi. Kusa da kowanne, ku rubuta abu ɗaya da kuka yi a aikin soja da ya dace da shi, ko \"babu tukuna\".",
          youCanNow: "ambaton sana'o'in da ke bunƙasa saboda AI da faɗin waɗanda suka dace da ƙwarewarku ta soja.",
          quickCheck: [
            { objective: "O1", q: "Me yasa AI yake sa ana buƙatar mutane a wasu fannoni?", options: ["AI yana tafiyar da kansa, ba ya buƙatar kowa", "Mutum-mutumi (robots) ne kaɗai ke aiki a waɗannan fannoni yanzu", "Dole wani ya tafiyar, ya kare, ya gyara kuma ya kula da tsarin AI", "AI ya maye gurbin dukkan ayyukan fasaha"], answer: 2, why: "Yayin da AI ke yaɗuwa, ana buƙatar mutane su tafiyar, su kare, su gyara kuma su kula da tsarin." },
            { objective: "O1", q: "Kun kula da rediyo da kayan sadarwa a aikin soja. Wane fanni mai bunƙasa za ku rubuta kusa da shi?", options: ["Tsaron intanet ko taimakon IT", "Babu, domin ƙwarewar rediyo ba ta canjawa", "Noma kaɗai", "Ayyukan da ba sa buƙatar ƙwarewa kaɗai"], answer: 0, why: "Ƙwarewar hanyoyin sadarwa da kayan aiki ta dace da fannoni masu bunƙasa kamar taimakon IT da tsaron intanet." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Haɗa MOS, rating ko AFSC ɗinku da ayyukan farar hula",
          minutes: 5,
          goal: "Yi amfani da kayan aikin hukuma na haɗawa (crosswalk) don jera ayyukan farar hula da suka dace da aikinku na soja.",
          text: [
            "Kada ku fara da hasashe. Ku fara da haɗin hukuma. O*NET OnLine na Ma'aikatar Ƙwadago tana da Military Crosswalk Search: ku zaɓi rundunarku, ku rubuta lambar aikinku ko sunansa (misali MOS na Army ko Marine, rating na Navy ko Coast Guard, AFSC na Air Force ko SFSC na Space Force), sannan ku ga ayyukan farar hula da suka dace.",
            "Shafin Find a Job (Nemo Aiki) na Ma'aikatar Ƙwadago don tsoffin sojoji yana kuma da hanyar haɗi zuwa Veterans Job Matcher na CareerOneStop, wanda ke haɗa ayyukan soja da sana'o'in farar hula. Ku yi amfani da duka biyun, ku riƙe ayyukan da suka bayyana fiye da sau ɗaya.",
            "Sannan ku yi amfani da mataimakin AI don fahimtar jerin: \"Ka bayyana waɗannan ayyuka uku da kalmomi masu sauƙi, yadda rana ta yau da kullum take, da waɗanne ƙwarewata ne za su canja. Na yi shekaru 8 ina ƙwararren jigilar kaya a Navy.\""
          ],
          steps: ["Ku buɗe O*NET Military Crosswalk Search.", "Ku zaɓi rundunarku ku rubuta lambar aikinku ko sunansa.", "Ku rubuta ayyukan farar hula da suka dace.", "Ku maimaita a Veterans Job Matcher na CareerOneStop.", "Ku nemi mataimakin AI ya bayyana ayyukan da suka bayyana a jeri biyun."],
          words: [["Crosswalk (haɗawa)", "kayan aikin da ke haɗa aikin soja da ayyukan farar hula."], ["Occupation (sana'a)", "nau'in aiki, kamar mai tsara jigilar kaya (logistician) ko mai kula da hanyar sadarwa."]],
          slides: [
            { title: "Ku fara da haɗin hukuma", bullets: ["O*NET Military Crosswalk Search", "Ku zaɓi runduna, ku rubuta lamba ko suna", "Ku ga sana'o'in farar hula da suka dace"] },
            { title: "Ku kwatanta", bullets: ["Veterans Job Matcher na CareerOneStop", "Ku riƙe ayyukan da ke cikin jeri biyun"] },
            { title: "Sannan ku nemi AI ya bayyana", bullets: ["Mene ne aikin, da kalmomi masu sauƙi", "Yadda rana ta yau da kullum take", "Waɗanne ƙwarewarku ne za su canja"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Ku nemi aikinku na soja a O*NET Military Crosswalk. Ku zaɓi ayyukan farar hula biyar da suka dace, sannan ku nemi mataimakin AI ya bayyana kowanne a jimloli biyu masu sauƙi.",
          youCanNow: "amfani da kayan aikin haɗawa na hukuma da mataimakin AI don jera da fahimtar ayyukan farar hula da suka dace da aikinku na soja.",
          quickCheck: [
            { objective: "O2", q: "Me O*NET Military Crosswalk ke ba ku?", options: ["Matakin nakasarku na VA", "Ayyukan farar hula da suka dace da lambar aikinku na soja ko sunansa", "Jerin tallace-tallacen aiki da ke kusa da ku", "Ragowar kuɗin GI Bill ɗinku"], answer: 1, why: "Crosswalk yana haɗa lambobin aikin soja da sunayensu da sana'o'in farar hula." },
            { objective: "O2", q: "Kun sami ayyuka biyar da suka dace amma wasu sunayen ba su da sarari. Me za ku yi?", options: ["Ku cire kowane aiki mai suna marar sarari", "Ku zaɓi wanda sunansa ya fi tsawo", "Ku yi hasashen abin da kowane aiki yake", "Ku nemi mataimakin AI ya bayyana kowanne a jimloli biyu masu sauƙi"], answer: 3, why: "AI yana da kyau wajen bayyana aiki da kalmomi masu sauƙi bayan kayan aikin hukuma sun ba ku jerin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Binciken sana'a da mataimakin AI",
          minutes: 5,
          goal: "Yi amfani da AI don bayyana aikin yau da kullum na sana'a, ƙwarewarta da hanyar shiga ta, ku yi wa abin da ke buƙatar tabbatarwa alama.",
          text: [
            "Mataimakin AI abokin bincike ne mai kyau don dubawar farko. Ku nemi ya bayyana rana ɗaya a aikin, manyan ƙwarewa, kayan aikin da aka saba amfani da su, sunayen ayyukan farko da aka saba gani, da tambayoyin da ya kamata ku yi wa wanda ke yin aikin.",
            "Ku yi amfani da prompt mai sarari. Misali: \"Ni tsohon sojan Air Force ne, na yi shekaru 6 ina gyaran jiragen sama. Ka bayyana aikin mai gyaran injinan iska (wind turbine technician): rana ta yau da kullum, manyan ƙwarewa 5, waɗanne ƙwarewata ne za su canja, da hanyar shiga da aka saba. Ka yi amfani da gajerun layuka.\"",
            "Ku sa alamar tambaya (?) kusa da kowane bayanin da zai iya canjawa, kamar albashi, sunayen takardun shaida da sharuɗɗa. Za ku tabbatar da su a babi na gaba."
          ],
          steps: ["Ku zaɓi aiki ɗaya daga jerinku.", "Ku nemi rana ta yau da kullum, manyan ƙwarewa, ƙwarewar da za ta canja da hanyar shiga.", "Ku tambaya: \"Waɗanne tambayoyi ya kamata in yi wa wanda ke yin wannan aiki?\"", "Ku sa alamar tambaya kusa da albashi, takardun shaida da sharuɗɗa."],
          words: [["Hanyar shiga (entry path)", "hanyar da mutane suka saba bi don shiga aiki: horo, takardar shaida (certification), koyon sana'a (apprenticeship) ko digiri."], ["Ƙwarewar da ke canjawa (transferable skill)", "ƙwarewa daga wani aiki da take da amfani a wani aikin."]],
          slides: [
            { title: "Ku nemi AI don dubawar farko", bullets: ["Rana ta yau da kullum", "Manyan ƙwarewa da kayan aiki", "Waɗanne ƙwarewarku ne za su canja", "Hanyar shiga da aka saba"] },
            { title: "Misalin prompt", bullets: ["Gyaran jiragen sama a Air Force, shekaru 6", "Ka bayyana aikin wind turbine technician", "Rana, manyan ƙwarewa 5, abin da zai canja, hanyar shiga"] },
            { title: "Ku yi wa abin da zai iya canjawa alama", bullets: ["Albashi", "Sunayen takardun shaida da ƙa'idojinsu", "Ku sa ? kusa da su don ku duba daga baya"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya bayyana sana'a ɗaya daga jerinku ta amfani da misalin prompt ɗin. Ku sa alamar tambaya kusa da kowace lamba, takardar shaida ko sharaɗi a cikin amsar.",
          youCanNow: "amfani da mataimakin AI don binciken sana'a da yi wa bayanan da dole ku tabbatar alama.",
          quickCheck: [
            { objective: "O3", q: "Mece ce hanyar shiga (entry path)?", options: ["Hanyar da mutane suka saba bi don shiga aiki", "Ƙofar gaban kamfani", "Albashin ma'aikaci a shekararsa ta farko", "Mataki na ƙarshe kafin ritaya"], answer: 0, why: "Hanyar shiga ita ce hanyar da aka saba bi zuwa aiki, kamar horo, takardar shaida ko koyon sana'a." },
            { objective: "O3", q: "AI ya ce wata sana'a \"tana buƙatar takardar shaida ta Security+\". Me za ku yi?", options: ["Ku yi rajistar jarabawar nan take", "Ku yi watsi da dukkan amsar", "Ku sa alamar tambaya kusa da ita ku tabbatar da ita da majiyar hukuma", "Ku kwafe ta cikin tsarinku a matsayin gaskiya"], answer: 2, why: "Takardun shaida da sharuɗɗa bayanai ne da ake tabbatarwa, ba a amincewa da su daga AI kawai ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Inda damarmakin suke",
        questions: [
          { objective: "O1", q: "Wanne daga cikin waɗannan fanni ne da AI ke ƙara buƙatar mutane a cikinsa?", options: ["Tsaron intanet (cybersecurity)", "Wasannin bidiyo kaɗai", "Rubuta shirin kwamfuta kaɗai", "Babu, AI yana cire dukkan ayyuka"], answer: 0, why: "AI yana sa ana buƙatar mutanen da ke karewa, tafiyarwa da kula da tsarin, kamar a tsaron intanet." },
          { objective: "O2", q: "Ina ne wuri mafi kyau don FARA haɗa MOS ɗinku da ayyukan farar hula?", options: ["Hasashen aboki", "O*NET Military Crosswalk", "Tallar aiki kawai", "Rubutu a kafar sada zumunta"], answer: 1, why: "Crosswalk na hukuma yana haɗa lambar aikinku na soja da sana'o'in farar hula." },
          { objective: "O2", q: "Kun sami jeri daban-daban daga O*NET da CareerOneStop. Mene ne mataki mai hikima?", options: ["Ku yi watsi da duka biyun", "Ku zaɓi jerin da ya fi gajarta", "Ku riƙe ayyukan da ke cikin duka biyun", "Ku nemi AI ya zaɓa muku ɗaya"], answer: 2, why: "Ayyukan da ke cikin jerin hukuma biyun duka sun fi dacewa." },
          { objective: "O3", q: "Amsar AI ta ce wani aiki yana biyan $95,000. Me za ku yi?", options: ["Ku daina nema; kun samu", "Ku saka ta a intanet", "Ku amince da ita domin tana da cikakken bayani", "Ku sa alamar tambaya kusa da ita ku tabbatar da ita da bayanan hukuma"], answer: 3, why: "Albashi na iya zama ba daidai ba ko ya tsufa, don haka dole a tabbatar da shi." },
          { objective: "O3", q: "Mece ce ƙwarewar da ke canjawa (transferable skill)?", options: ["Ƙwarewa daga wani aiki da take da amfani a wani aikin", "Ƙwarewar da za ku iya sayarwa", "Ƙwarewa ta manyan hafsoshi kaɗai", "Ƙwarewar da AI ke yi muku"], answer: 0, why: "Ƙwarewar da ke canjawa tana tafiya tare da ku, kamar jagorantar ƙungiya ko kula da kayan ajiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Zaɓa da tsara hanyarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kwatanta sana'o'i da bayanan hukuma",
          minutes: 5,
          goal: "Kwatanta albashi, hasashen ayyuka da ilimin shiga na sana'o'i uku ta amfani da Occupational Outlook Handbook.",
          text: [
            "Occupational Outlook Handbook (bls.gov/ooh) na Hukumar Ƙididdigar Ƙwadago ta Amurka (Bureau of Labor Statistics) kyauta ne kuma na hukuma. Ga kowace sana'a yana ba da matsakaicin albashi, ilimin da aka saba buƙata don shiga, horo a wurin aiki, da hasashen ayyuka: yadda ake sa ran yawan ayyukan zai ƙaru ko ya ragu.",
            "Ku yi tebur mai sauƙi: sana'o'inku uku a layuka, da waɗannan ginshiƙai: matsakaicin albashi, ilimin shiga, horo, hasashen ayyuka, da gibin ƙwarewarku. Mataimakin AI zai iya gina muku tebur ɗin babu komai a ciki; ku ne za ku cike lambobin daga Handbook.",
            "Matsakaicin albashi (median pay) shi ne tsakiya: rabin ma'aikata suna samun fiye da shi, rabi kuma ƙasa da shi. Albashi kuma yana canjawa bisa wuri, don haka ku yi amfani da shi don kwatanta sana'o'i, ba a matsayin alƙawari ba."
          ],
          steps: ["Ku je bls.gov/ooh ku nemi kowace sana'a.", "Ku rubuta matsakaicin albashi, ilimin shiga, horo da hasashen ayyuka.", "Ku rubuta gibin ƙwarewarku: abin da har yanzu kuke buƙata.", "Ku sa duka a tebur ɗaya."],
          words: [["Matsakaicin albashi (median pay)", "albashin tsakiya: rabin ma'aikata suna samun fiye da shi, rabi kuma ƙasa da shi."], ["Hasashen ayyuka (job outlook)", "yadda ake sa ran yawan ayyuka zai ƙaru ko ya ragu."], ["Gibin ƙwarewa (skill gap)", "ƙwarewa ko takardun shaida da har yanzu kuke buƙata don wani aiki."]],
          slides: [
            { title: "Majiyar hukuma", bullets: ["Occupational Outlook Handbook: bls.gov/ooh", "Kyauta, daga Bureau of Labor Statistics"] },
            { title: "Abin da za ku rubuta", bullets: ["Matsakaicin albashi", "Ilimin shiga da horo", "Hasashen ayyuka", "Gibin ƙwarewarku"] },
            { title: "Ku karanta shi daidai", bullets: ["Median = tsakiya", "Albashi yana canjawa bisa wuri", "Ku yi amfani da shi don kwatanta, ba a matsayin alƙawari ba"] }
          ],
          sources: [{ name: "Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Ku nemi mataimakin AI ya ba ku teburin kwatance marar komai da sana'o'inku uku da ginshiƙan wannan darasi. Ku cike lambobin da kanku daga bls.gov/ooh.",
          youCanNow: "kwatanta sana'o'i ta amfani da bayanan hukuma na albashi, ilimi da hasashen ayyuka.",
          quickCheck: [
            { objective: "O4", q: "Daga ina lambobin da ke teburin kwatancenku suke fitowa?", options: ["Amsar mataimakin AI", "Hasashen aboki", "Tallar aiki daga kamfani ɗaya", "Occupational Outlook Handbook a bls.gov/ooh"], answer: 3, why: "AI zai iya gina tebur marar komai, amma lambobin albashi da hasashen ayyuka daga bayanan hukuma suke." },
            { objective: "O4", q: "Wata sana'a tana biyan fiye amma bunƙasarta a hankali take; wata tana biyan ɗan ƙasa da haka amma tana bunƙasa da sauri. Me za ku yi?", options: ["Koyaushe ku zaɓi mafi girman albashi", "Ku kwatanta albashi, hasashen ayyuka da horo tare, da yadda suka dace da ku", "Ku zaɓi wadda sunanta ya fi gajarta", "Ku bar AI ya zaɓa muku"], answer: 1, why: "Kwatanta ginshiƙai da yawa tare, da yadda suka dace da ku, yana ba da zaɓi mafi kyau fiye da lamba ɗaya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nemo horo da tallafin da zai biya kuɗinsa",
          minutes: 5,
          goal: "Nemo zaɓin horo ɗaya don sana'ar da kuka zaɓa da shirin hukuma ɗaya da zai iya taimakawa wajen biyan kuɗinsa.",
          text: [
            "Shirye-shiryen hukuma da yawa za su iya taimakawa. GI Bill zai iya biyan makarantu da shirye-shiryen horo da yawa; GI Bill Comparison Tool na VA yana taimaka muku kwatanta su. VET TEC 2.0 yana biyan wasu horon fasahar zamani marasa digiri (programming, bayanai, kimiyyar bayanai) ga tsoffin sojoji da sojojin da suka cancanta, da iyakantattun gurabe a kowace shekara.",
            "Har yanzu kuna cikin soja? DoD SkillBridge yana bar sojoji su yi horo tare da abokin aikin masana'antu a kwanakinsu 180 na ƙarshe a aiki, da izinin shugabanninsu. Koyon sana'a (apprenticeship) yana bar ku ku sami kuɗi yayin da kuke koyo. Cibiyoyin American Job Centers na Ma'aikatar Ƙwadago (ku nemo ɗaya a CareerOneStop) suna ba tsoffin sojoji fifiko (priority of service) a horon aiki.",
            "Ƙa'idojin cancanta suna canjawa. Ku nemi AI ya jera zaɓuɓɓuka, sannan ku tabbatar da kowanne a va.gov, dol.gov ko wajen mai ba da shawara kafin ku dogara da shi. Shirin Personalized Career Planning and Guidance na VA yana ba da shawarwari kyauta ga tsoffin sojojin da suka cancanta."
          ],
          steps: ["Ku faɗi horon da sana'arku ke buƙata (takardar shaida, kwas, koyon sana'a).", "Ku duba zaɓuɓɓukan GI Bill da GI Bill Comparison Tool.", "Idan sana'ar fasaha ce, ku karanta shafin VET TEC 2.0.", "Har yanzu kuna aiki? Ku tambayi ofishin barin aikinku game da SkillBridge.", "Ku tabbatar da cancanta a va.gov ko wajen mai ba da shawara."],
          words: [["GI Bill", "tallafin ilimi na VA ga tsoffin sojoji da sojoji."], ["SkillBridge", "shirin DoD na yin horo tare da abokin aikin masana'antu a kwanakinku 180 na ƙarshe a aikin soja."], ["Koyon sana'a (apprenticeship)", "aiki mai albashi da horo mai tsari, don ku sami kuɗi yayin da kuke koyo."]],
          slides: [
            { title: "Shirye-shiryen da za su iya taimakawa", bullets: ["GI Bill da GI Bill Comparison Tool", "VET TEC 2.0 don horon fasahar zamani", "Koyon sana'a: ku sami kuɗi yayin da kuke koyo"] },
            { title: "Har yanzu kuna aiki?", bullets: ["DoD SkillBridge: kwanaki 180 na ƙarshe a aiki", "Yana buƙatar izinin shugabanni"] },
            { title: "Ku tabbatar kafin ku dogara da shi", bullets: ["Ƙa'idoji da gurabe suna canjawa", "Ku duba va.gov da dol.gov", "Shawarwarin sana'a kyauta na VA za su iya taimakawa"] }
          ],
          sources: [
            { name: "VA: About GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor VETS: Find a job (SkillBridge, American Job Centers)", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Don sana'arku ta farko, ku rubuta zaɓin horo ɗaya da shiri ɗaya da zai iya taimakawa wajen biyan kuɗinsa. Ku buɗe shafin hukuma na shirin ku rubuta sharaɗin cancanta ɗaya.",
          youCanNow: "nemo horo don sana'a da shirin hukuma da zai iya taimakawa wajen biyan kuɗinsa, da tabbatar da ƙa'idojinsa.",
          quickCheck: [
            { objective: "O5", q: "Mene ne koyon sana'a (apprenticeship)?", options: ["Makarantar da ke koyarwa ta intanet kaɗai", "Bashin da dole ku biya", "Aiki mai albashi inda kuke horo da samun kuɗi a lokaci ɗaya", "Jarabawar da kuke yi sau ɗaya"], answer: 2, why: "Koyon sana'a yana bar ku ku sami kuɗi yayin da kuke koyo." },
            { objective: "O5", q: "Kun sami shirin da zai iya biyan horonku. Me za ku duba kafin ku dogara da shi?", options: ["Sharaɗin cancanta ɗaya a shafin hukuma na shirin", "Ko aboki ya yi amfani da shi", "Ko AI ya ce kun cancanta", "Babu komai; dukkan tsoffin sojoji sun cancanta"], answer: 0, why: "Ƙa'idojin cancanta suna a shafin hukuma; AI da abokai na iya yin kuskure." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta tsarin sana'arku na kwana 90",
          minutes: 5,
          goal: "Rubuta tsarin kwana 90 mai matakai uku masu kwanan wata zuwa sana'a ɗaya da kuka zaɓa.",
          text: [
            "Kun san yadda ake tsara aiki (mission) daga baya zuwa gaba, farawa daga manufar. Ku yi haka nan a nan. Ku zaɓi sana'a ɗaya daga teburinku, sannan ku tsara daga baya: me dole ya kasance gaskiya a kwana 90, kwana 60 da kwana 30?",
            "Matakai masu kyau suna a sarari kuma suna da kwanan wata: \"Kafin 15 Nuwamba: in yi magana da mutum ɗaya da ke aiki a matsayin logistician.\" \"Kafin 1 Disamba: in nemi shiga shirin horon.\" \"Kafin 15 Janairu: in nemi ayyuka biyar.\" Matakai marasa sarari kamar \"zan duba shi\" ba sa kammaluwa.",
            "Mataimakin AI zai iya mayar da rubuce-rubucenku zuwa tsari mai tsabta kuma ya ba da shawarar matakan da kuka manta. Ku ne kuke yanke kwanakin, kuma tsarin naku ne. Ku raba shi da jagora (mentor), mai ba da shawara, ko ma'aikacin TAP ko na American Job Center wanda zai bibiye ku."
          ],
          steps: ["Ku zaɓi sana'a ɗaya daga teburin kwatancenku.", "Ku rubuta abin da dole ya kasance gaskiya a kwana 90.", "Ku tsara daga baya: matakan kwana 60 da kwana 30.", "Ku sa kowane mataki ya kasance a sarari kuma da kwanan wata.", "Ku nemi AI ya tsara shi kuma ya ba da shawarar abin da ya rage.", "Ku raba shi da wanda zai riƙa bibiyar ku."],
          words: [["Tsarawa daga baya (backward planning)", "farawa daga manufa da komawa baya zuwa yau."], ["Matakin ci gaba (milestone)", "wurin dubawa da ke nuna kuna kan hanya."]],
          slides: [
            { title: "Ku tsara daga baya, farawa daga manufa", bullets: ["Kwana 90: manufa", "Kwana 60 da 30: matakan ci gaba", "Yau: mataki na farko"] },
            { title: "A sarari kuma da kwanan wata", bullets: ["\"Kafin 15 Nuw: in yi magana da logistician ɗaya\"", "\"Kafin 1 Dis: in nemi horo\"", "Ba: \"zan duba shi\" ba"] },
            { title: "Tsarin naku ne", bullets: ["AI yana tsarawa yana ba da shawara", "Ku ne kuke yanke kwanakin", "Ku raba shi da jagora ko mai ba da shawara"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin sana'arku mai shafi ɗaya da sana'o'i uku, albashinsu da hasashen ayyukansu daga bls.gov/ooh, gibin ƙwarewarku, sana'ar da kuka zaɓa, da matakai uku masu kwanan wata na kwana 90 masu zuwa, har da zaɓin horo ko tallafi ɗaya.",
          youCanNow: "mayar da binciken sana'a zuwa tsarin kwana 90 mai kwanan wata da za ku iya aiwatarwa.",
          quickCheck: [
            { objective: "O6", q: "Mene ne ma'anar tsarawa daga baya (backward planning)?", options: ["Yin matakanku ba tare da tsari ba", "Farawa daga manufarku da komawa baya zuwa yau", "Tsarawa don abin da ya wuce kaɗai", "Barin wani ya yanke muku kwanaki"], answer: 1, why: "Tsarawa daga baya yana farawa da manufa sannan ya koma baya zuwa matakan da kuke ɗauka yanzu." },
            { objective: "O6", q: "Wane ne mataki mafi kyau don tsarinku na kwana 90?", options: ["\"In yi tunanin IT wata rana\"", "\"In duba abubuwa\"", "\"In sami aiki mai kyau\"", "\"Kafin 15 Jan: in gama sashe na 1 na kwas ɗin taimakon IT kyauta\""], answer: 3, why: "Mataki mai kyau yana a sarari kuma yana da kwanan wata da ku kuka sa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Zaɓa da tsara hanyarku",
        questions: [
          { objective: "O4", q: "Wace majiyar hukuma ce ke ba da matsakaicin albashi da hasashen ayyuka na sana'o'in farar hula?", options: ["Tallar aiki", "Occupational Outlook Handbook", "Amsar farko ta AI ɗinku", "Kanun labarai"], answer: 1, why: "Occupational Outlook Handbook na Bureau of Labor Statistics yana ba da albashi da hasashen ayyuka na hukuma." },
          { objective: "O4", q: "Mene ne ma'anar matsakaicin albashi (median pay)?", options: ["Albashi mafi girma", "Albashin farko", "Tsakiya: rabi suna samun fiye, rabi suna samun ƙasa", "Albashi bayan cire haraji"], answer: 2, why: "Median shi ne tsakiyar albashin dukkan ma'aikata." },
          { objective: "O5", q: "Har yanzu kuna cikin soja, saura watanni 5. Wane shiri ne zai iya bar ku ku yi horo tare da wani kamfani?", options: ["Occupational Outlook Handbook", "Military Crosswalk", "Google Gemini", "DoD SkillBridge"], answer: 3, why: "SkillBridge yana bar sojoji su yi horo tare da abokin aikin masana'antu a kwanakinsu 180 na ƙarshe." },
          { objective: "O5", q: "AI ya ce kun cancanci wani tallafin horo. Me ya kamata ku yi?", options: ["Ku tabbatar da shi a va.gov ko wajen mai ba da shawara", "Ku yi rajista nan take", "Ku yi watsi da dukkan tallafi", "Ku biya wani shafin intanet ya duba"], answer: 0, why: "Ƙa'idojin cancanta suna canjawa; ku tabbatar da majiyar hukuma." },
          { objective: "O6", q: "Wane ne mataki mafi kyau na tsarin kwana 90?", options: ["\"In duba ayyuka\"", "\"In yi tunanin horo\"", "\"Kafin 1 Dis: in nemi shiga shirin horon taimakon IT\"", "\"Wata rana in sami takardar shaida\""], answer: 2, why: "Matakai masu kyau suna a sarari kuma suna da kwanan wata." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sana'o'in Gaba da Damarmakin AI",
    questions: [
      { objective: "O1", q: "AI yana ƙara buƙatar mutanen da za su iya:", options: ["Tafiyarwa, karewa, gyarawa da kula da tsarin", "Guje wa kwamfutoci", "Rubuta code kaɗai", "Rashin yin komai"], answer: 0, why: "Ayyukan AI da yawa suna buƙatar mutane a kewayen tsarin, ba programmers kaɗai ba." },
      { objective: "O1", q: "Wane fanni ne ke kare hanyoyin sadarwa da bayanai daga hare-hare?", options: ["Sarkar samarwa", "Tsaron intanet (cybersecurity)", "Sayar da kaya", "Hidimar abinci"], answer: 1, why: "Tsaron intanet yana kare kwamfutoci, hanyoyin sadarwa da bayanai." },
      { objective: "O1", q: "Ƙwararren jigilar kaya da ke iya karanta hasashen AI sannan ya yanke shawara:", options: ["Ba a buƙatar sa kuma", "Hasashen ya maye gurbinsa", "Ya fi daraja", "Yana da amfani a soja kaɗai"], answer: 2, why: "Hikima a kan sakamakon AI ita ce abin da masu ɗaukar aiki ke so." },
      { objective: "O2", q: "O*NET Military Crosswalk yana bar ku ku yi bincike ta:", options: ["Lambar Social Security ɗinku", "Bankinku", "Adireshin gidanku", "Runduna da lambar aikin soja ko sunansa"], answer: 3, why: "Kuna zaɓar rundunarku sannan ku rubuta MOS, rating, AFSC ko SFSC ɗinku." },
      { objective: "O2", q: "Ana samun hanyar haɗi zuwa Veterans Job Matcher na CareerOneStop daga:", options: ["Shafin Find a Job na Ma'aikatar Ƙwadago don tsoffin sojoji", "Tallar da ke tasowa (pop-up)", "Ƙungiya a kafar sada zumunta", "Jaridar tsohuwar rundunarku"], answer: 0, why: "Shafin Find a Job na DOL VETS yana da hanyar haɗi zuwa gare shi." },
      { objective: "O2", q: "Idan jerin hukuma biyu ba su yi daidai ba, zaɓi mai kyau shi ne:", options: ["Rashin amfani da ko ɗaya", "Riƙe ayyukan da ke cikin duka biyun", "Zaɓar aiki na farko bisa jerin haruffa", "Tambayar baƙo"], answer: 1, why: "Ayyukan da ke cikin duka biyun suna nuna dacewa mai ƙarfi." },
      { objective: "O3", q: "Prompt mai kyau don binciken sana'a yana neman:", options: ["Kalmar sirrinku", "Albashi kaɗai", "Rana ta yau da kullum, manyan ƙwarewa, ƙwarewar da ke canjawa da hanyar shiga", "Kalma ɗaya"], answer: 2, why: "Waɗannan bayanai suna taimaka muku ku yanke ko sana'ar ta dace da ku." },
      { objective: "O3", q: "Waɗanne bayanai a amsar AI game da sana'a ya kamata ku yi wa alama don tabbatarwa?", options: ["Sunan aikin kaɗai", "Gaisuwa", "Babu komai", "Albashi, takardun shaida da sharuɗɗa"], answer: 3, why: "Waɗannan bayanai suna canjawa kuma AI na iya yin kuskure a kansu." },
      { objective: "O3", q: "\"Hanyar shiga\" (entry path) ita ce:", options: ["Hanyar da mutane suka saba bi don shiga aiki", "Ƙofar gini", "Shiga shafin intanet", "Muƙamin soja"], answer: 0, why: "Ita ce hanyar horo, takardar shaida, koyon sana'a ko digiri zuwa aiki." },
      { objective: "O4", q: "Wa ke wallafa Occupational Outlook Handbook?", options: ["Kamfanin AI", "Bureau of Labor Statistics", "Shafin ayyuka na kamfani mai zaman kansa", "VA"], answer: 1, why: "Littafi ne na Bureau of Labor Statistics." },
      { objective: "O4", q: "Hasashen ayyuka (job outlook) yana faɗa muku:", options: ["Ainihin albashinku", "Inda ofishin yake", "Yadda ake sa ran yawan ayyuka zai ƙaru ko ya ragu", "Wanda zai ɗauke ku aiki"], answer: 2, why: "Hasashen ayyuka shi ne canjin da ake sa ran samu a yawan ayyuka." },
      { objective: "O4", q: "Me yasa ake amfani da matsakaicin albashi don kwatanta, ba a matsayin alƙawari ba?", options: ["Koyaushe ya yi yawa sosai", "Ƙirƙirarre ne", "Yana ƙidaya manyan hafsoshi kaɗai", "Albashi yana canjawa bisa wuri da mutum"], answer: 3, why: "Median tsakiya ne; albashinku ya dogara da wuri da ƙwarewa." },
      { objective: "O5", q: "Gibin ƙwarewa (skill gap) shi ne:", options: ["Ƙwarewa ko takardun shaida da har yanzu kuke buƙata don wani aiki", "Gibi a kwanakin takardar bayanin aikinku (CV)", "Hutu tsakanin ayyuka", "Muƙamin soja"], answer: 0, why: "Yana nuna abin da har yanzu kuke buƙatar koyo ko samu." },
      { objective: "O5", q: "Wane kayan aiki na VA ne ke taimaka muku kwatanta makarantu da shirye-shirye don amfani da GI Bill?", options: ["O*NET Crosswalk", "GI Bill Comparison Tool", "SkillBridge", "TAP"], answer: 1, why: "GI Bill Comparison Tool na VA yana taimakawa wajen kwatanta zaɓuɓɓuka." },
      { objective: "O5", q: "VET TEC 2.0 yana biyan:", options: ["Gyaran gida", "Bashin mota", "Wasu horon fasahar zamani marasa digiri ga tsoffin sojojin da suka cancanta", "Kowane digirin jami'a"], answer: 2, why: "VET TEC 2.0 yana ɗaukar wasu shirye-shiryen fasaha marasa digiri." },
      { objective: "O5", q: "Koyon sana'a (apprenticeship) yana bar ku ku:", options: ["Tsallake dukkan horo", "Guje wa aiki", "Samu digiri cikin dare ɗaya", "Sami kuɗi yayin da kuke koyo"], answer: 3, why: "Masu koyon sana'a suna samun albashi yayin da suke horo." },
      { objective: "O5", q: "A ina tsoffin sojoji za su sami fifiko (priority of service) a horon aiki?", options: ["American Job Centers", "Kafar sada zumunta", "Shagon sayar da motoci", "Shagon wasannin bidiyo"], answer: 0, why: "Ma'aikatar Ƙwadago tana ba tsoffin sojoji fifiko a American Job Centers." },
      { objective: "O6", q: "Tsarawa daga baya (backward planning) yana nufin:", options: ["Yin ayyuka ba tare da tsari ba", "Farawa daga manufa da komawa baya zuwa yau", "Tsarawa don yau kaɗai", "Rashin sa kwanan wata har abada"], answer: 1, why: "Kuna tsarawa daga manufa zuwa baya, kamar yadda ake tsara aikin soja (mission)." },
      { objective: "O6", q: "A tsarinku na kwana 90, wa ke yanke kwanakin?", options: ["AI", "Mai ɗaukar aiki", "Ku", "Babu kowa"], answer: 2, why: "AI zai iya tsarawa da ba da shawara; tsarin naku ne." },
      { objective: "O6", q: "Me yasa za ku raba tsarinku da jagora ko mai ba da shawara?", options: ["Don su yi muku shi", "Don samun kuɗi", "Doka ta buƙaci haka", "Don wani ya riƙa bibiyar ku ya riƙe ku a kan hanya"], answer: 3, why: "Samun wanda ke bibiyar ku yana taimaka muku ku gama abin da kuka tsara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 7, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Sana'o'in da suka dace", objective: "O2", notYet: "An yi hasashen sana'o'in ko sun fito daga amsar AI kaɗai.", meets: "Sana'o'i uku da suka dace da aikin soja, an same su a O*NET Military Crosswalk ko CareerOneStop.", exceeds: "Mai koyo zai iya faɗin wace ƙwarewa daga aikin soja ta dace da kowace sana'a." },
      { name: "Bayanan hukuma", objective: "O4", notYet: "Babu albashi ko hasashen ayyuka, ko an kwafo su daga AI.", meets: "Kowace sana'a tana da matsakaicin albashi da hasashen ayyuka daga bls.gov/ooh.", exceeds: "An kuma rubuta ilimin shiga, kuma mai koyo ya bayyana wace sana'a ta fi kyau da dalili." },
      { name: "Gibin ƙwarewa", objective: "O3", notYet: "Babu gibin ƙwarewa da aka rubuta, ko bai da sarari.", meets: "Kowace sana'a tana da ƙwarewa ko takardar shaida da har yanzu ake buƙata.", exceeds: "An tabbatar da kowane gibi da majiyar hukuma ko ta mai ɗaukar aiki." },
      { name: "Horo ko tallafi", objective: "O5", notYet: "Babu zaɓin horo ko tallafi, ko an ɗauko shi daga AI kaɗai.", meets: "Zaɓin horo ɗaya da shiri ɗaya da zai iya taimakawa wajen biya, da sharaɗin cancanta ɗaya daga shafin hukumarsa.", exceeds: "Mai koyo ya kuma ambaci wanda zai tambaya don tabbatar da cancanta, kamar mai ba da shawara na VA." },
      { name: "Tsarin kwana 90", objective: "O6", notYet: "Matakan ba su da sarari ko ba su da kwanan wata.", meets: "Matakai uku a sarari, masu kwanan wata, zuwa sana'a ɗaya da aka zaɓa.", exceeds: "Tsarin ya ambaci jagora ko mai ba da shawara da zai bibiyi ci gaba." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka kammala aƙalla mataki ɗaya na tsarinsu na kwana 90 cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka yi rajistar horo, koyon sana'a ko SkillBridge cikin kwanaki 90",
      "Masu koyo da suka fara wani kwas na Koach Learn na tsoffin sojoji cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Shafukan intanet kyauta na O*NET Military Crosswalk, CareerOneStop, bls.gov/ooh da va.gov",
      "Takarda, manhajar rubutu (notes) ko spreadsheet don teburin kwatance da tsari mai shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A ajin barin aikin soja ko cibiyar tsoffin sojoji: ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuna yin ayyukan \"Gwada yanzu\" a lokacin.",
      "Ku sa masu koyo su cike lambobin teburin kwatance da kansu daga bls.gov/ooh; kada ku karɓi lambobin AI.",
      "Ku gayyaci mai ba da shawara na VA, American Job Center ko TAP zuwa zama na ƙarshe don duba tsare-tsare da tambayoyin cancanta.",
      "Ku ba da maki ga tsarin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku tunatar da masu koyo su cire lambobin Social Security, na fayil ɗin VA da na aikin soja daga kowane prompt na AI."
    ]
  }
};
