"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-california-setup.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const SOS_LLC = { name: "California Secretary of State: Kamfanonin LLC (fom da kuɗaɗe, da Turanci)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/limited-liability-companies-california-domestic" };
const SOS_CORP = { name: "California Secretary of State: Kamfanonin corporation (fom da kuɗaɗe, da Turanci)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const BIZFILE = { name: "California Secretary of State: bizfile Online", url: "https://bizfileonline.sos.ca.gov/" };
const FTB_LLC = { name: "Franchise Tax Board: Kamfanin LLC (da Turanci)", url: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html" };
const FTB_CORP = { name: "Franchise Tax Board: Kamfanonin corporation (da Turanci)", url: "https://www.ftb.ca.gov/file/business/types/corporations/index.html" };
const FTB_FORMS = { name: "Franchise Tax Board: Jagorar nau'o'in mallakar kasuwanci (FTB 1123, da Turanci)", url: "https://www.ftb.ca.gov/forms/misc/1123.html" };
const CDTFA = { name: "CDTFA: Izini da lasisi (da Turanci)", url: "https://www.cdtfa.ca.gov/services/permits-licenses.htm" };
const CDTFA_FAQ = { name: "CDTFA: Samun izinin sayarwa (seller's permit), tambayoyi da amsoshi (da Turanci)", url: "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm" };
const IRS_EIN = { name: "IRS: Samun lambar EIN (Employer Identification Number, da Turanci)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const CALGOLD = { name: "CalGold: Taimakon neman izini a California (da Turanci)", url: "https://www.calgold.ca.gov/" };
const EDD = { name: "EDD: Mataki na 1, yin rajista a matsayin mai ɗaukar ma'aikata (da Turanci)", url: "https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/" };
const LA_FBN = { name: "Los Angeles County Clerk: Sharuɗɗan sunan kasuwanci (FBN) (misalin county, da Turanci)", url: "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing/requirements" };
const CALOSBA = { name: "Ofishin Mai Kare Ƙananan Kasuwanci na California: Kafa kasuwancinku (da Turanci)", url: "https://calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/" };

module.exports = {
  id: "smallbiz-california-setup-ha",
  lang: "ha",
  translationOf: "smallbiz-california-setup",
  category: "Small Business",
  name: "Kafa Ƙaramin Kasuwanci a California, Har da Kuɗaɗensa",
  skills: "Zaɓar tsarin kasuwanci, Yin rajista da jiha da county, Samun EIN da izinin sayarwa, Nemo izinin yanki, Shirya takardar kuɗin farawa da ranakun ƙarshe",
  outcome: "shirya tsarin kafa kasuwancinku na California a shafi ɗaya: tsarin da za ku yi amfani da shi, kowace rajista da izini da kuke buƙata bisa tsari, ofishin hukuma na kowanne, kuɗin kowanne (ko inda za a duba kuɗin), da ranakun ƙarshe da kada ku wuce.",
  about: [
    "Wannan kwas na mutanen da ke fara ƙaramin kasuwanci a California ne: motar sayar da abinci (food truck), shagon gyaran gashi, aikin share-share, ƙaramin shago, shagon intanet ko gidan toya burodi a gida. Da yawa daga cikin ɗalibanmu suna fara kasuwanci a karon farko, da yawa daga ƙananan al'ummomi ne, kuma da yawa suna yin hakan ba tare da lauya ba.",
    "Za ku koyi matakan kafa kasuwanci bisa tsari: zaɓar tsari, yin rajistar suna, samun lambar haraji ta tarayya kyauta, samun izinin sayarwa idan kuna sayar da kaya, nemo izinin birni da county, da shirya harajin jiha da rahotanni na kowace shekara. An tabbatar da kowane kuɗin jiha a wannan kwas a shafin gwamnati na hukuma, kuma kowane darasi yana lissafa waɗannan shafuka.",
    "Kuɗaɗe da dokoki suna canjawa. Kafin ku biya komai, ku buɗe shafin hukuma da aka lissafa a darasin ku duba kuɗin na yanzu. Kuɗin birni da na county sun bambanta a kowane wuri, don haka wannan kwas yana nuna muku inda za ku duba su maimakon yin tsammani. Don halin da kuke ciki, mai ba da shawara na SCORE kyauta, Cibiyar Bunƙasa Ƙananan Kasuwanci (SBDC) ko ƙwararren haraji zai iya taimakawa.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Ayyukan suna haɗuwa su zama tsarin kafa kasuwancinku."
  ],
  finalTask: "Ku shirya tsarin kafa kasuwancinku a shafi ɗaya mai layuka (columns) biyar: Mataki, Ofis (da shafin intanet na hukuma), Kuɗi (ko \"a duba a ...\"), Ranar ƙarshe, An gama. Ku saka tsarin kasuwancinku, rajistar suna, EIN, izinin sayarwa (ko dalilin da yasa ba ku buƙata), lasisin kasuwanci na birni, duk wani izini na musamman da CalGold ya lissafa don irin kasuwancinku, da harajin $800 na shekara da Statement of Information idan kun kafa LLC ko corporation.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke fara ƙaramin kasuwanci a California, kamar motar sayar da abinci, shagon gyaran gashi, aikin share-share, ƙaramin shago, shagon intanet ko gidan toya burodi a gida. Da yawa masu kasuwanci ne a karon farko kuma daga ƙananan al'ummomi, kuma suna yin hakan ba tare da lauya ba.",
    startingPoint: "Suna da ra'ayin kasuwanci kuma suna iya amfani da waya ko kwamfuta don ziyartar shafukan intanet. Yawancinsu ba su san matakan kafa kasuwanci ba, ko ofishin da ke kula da kowanne, ko kuɗaɗen jiha, ko rahotanni da harajin shekara da ke tare da kowane tsari.",
    gap: "Rashin yin rajista, izini ko rahoton shekara na iya kawo tara da hukunci, kuma shafukan kuɗi masu kama da na hukuma suna karɓar kuɗi mai yawa don ayyukan kyauta. Masu koyo suna buƙatar tsari mai kowane mataki bisa tsari, da ofishin hukuma, da kuɗi da ranar ƙarshe, don su fara bisa doka kuma su tsara kasafin kuɗi daidai.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta mai intanet don buɗe shafukan .gov na hukuma",
      "Lokaci: darussa na kusan minti 5 da suka dace da gudanarwa ko shirin kasuwanci",
      "Kuɗaɗe da dokoki suna canjawa, kuma kuɗin birni da county sun bambanta; masu koyo suna duba kowane shafin hukuma kafin su biya",
      "Ba shawarar shari'a ko haraji ba ne; sirri: lambar Social Security tana shiga fom ɗin IRS na hukuma kaɗai"
    ],
    prerequisites: "Babu. Kwas ɗin \"Introduction to AI for Small Business\" (Gabatarwa ga AI don Ƙananan Kasuwanci) yana taimakawa idan masu koyo suna son amfani da AI don tsara shirin."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ra'ayin kasuwancinku, masu shi da haɗarinsa", action: "zaɓar tsarin kasuwanci da lissafa kuɗin kafa shi", standard: "da dalili ɗaya na zaɓin, da kuɗin da aka duba a shafin Secretary of State" },
    { id: "O2", condition: "Idan kuna da sunan kasuwancinku da tsarinsa", action: "gano yadda ake yin rajistar sunan kasuwancinku", standard: "da ofishin da ya dace, shafin kuɗinsa da dokar wallafawa a rubuce a cikin shirinku" },
    { id: "O3", condition: "Idan kun san irin kasuwancinku", action: "yanke shawara ko kuna buƙatar izinin sayarwa da lissafa yadda ake samun EIN kyauta", standard: "kuna ambaton IRS da CDTFA a matsayin ofisoshin, ba tare da amfani da wani sabis na EIN mai kuɗi ba" },
    { id: "O4", condition: "Ta amfani da CalGold da shafin intanet na birninku", action: "lissafa izinin yanki da kasuwancinku yake buƙata", standard: "da shafin intanet na kowace hukuma, da kuɗin ko inda za a duba shi" },
    { id: "O5", condition: "Idan kun san tsarinku da shirin ɗaukar ma'aikata", action: "lissafa kuɗaɗen jiha na shekara da ranakun ƙarshe", standard: "har da harajin $800, Statement of Information da rajistar EDD idan sun shafe ku, kowanne an duba shi a shafin hukuma" },
    { id: "O6", condition: "Idan kuna da dukkan matakan kwas ɗin", action: "shirya tsarin kafa kasuwanci a shafi ɗaya da matakai bisa tsari, ofisoshi, kuɗaɗe da ranakun ƙarshe", standard: "kowane kuɗi an duba shi a shafin hukuma ko an rubuta \"a duba a\" da inda" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓa da yin rajistar kasuwancinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓar tsarin kasuwanci",
          minutes: 6,
          goal: "Zaɓi tsarin kasuwanci da ya dace da kasuwancinku a yau, kuma ku san kuɗin kafa shi.",
          text: [
            "Tsarin kasuwancinku shi ne yanayin kasuwancinku a gaban doka. Zaɓuɓɓukan da aka fi sani ga ƙananan kasuwanci su ne: kasuwancin mutum ɗaya (sole proprietorship), haɗin gwiwa (general partnership), kamfani mai iyakantaccen nauyi (LLC) da corporation.",
            "Kasuwancin mutum ɗaya mutum ɗaya ne yake yin kasuwanci. Ba ku cike takardun kafawa a ofishin California Secretary of State, don haka babu kuɗin kafawa na jiha. Amma a gaban doka ku da kasuwancin abu ɗaya ne: idan kasuwancin yana bin bashi ko an kai shi ƙara, kayanku na kanku suna iya shiga haɗari. Haɗin gwiwa ra'ayi ɗaya ne amma da masu shi biyu ko fiye.",
            "LLC ko corporation wani jiki ne na daban a gaban doka. Kuna kafa shi ta hanyar cike takarda a ofishin California Secretary of State. Secretary of State ya lissafa kuɗin LLC Articles of Organization (Fom LLC-1) a $70, da na general stock corporation Articles of Incorporation (Fom ARTS-GS) a $100. LLC ko corporation zai iya taimakawa wajen kare kayanku na kanku daga bashin kasuwanci, amma kuɗinsa ya fi yawa kowace shekara (Darasi na 6).",
            "Babu amsa ɗaya tak da ta dace da kowa. Aikin share-share na mutum ɗaya da ke farawa zai iya farawa a matsayin kasuwancin mutum ɗaya; gidan abinci mai haya, ma'aikata da ƙarin haɗari sau da yawa yana kafa LLC ko corporation. Ku tattauna da mai ba da shawara na SBDC kyauta, mai ba da shawara na SCORE ko ƙwararren haraji kafin ku yanke shawara."
          ],
          steps: ["Ku rubuta wane ne ya mallaki kasuwancin da yawan haɗarinsa (haya, ma'aikata, abokan ciniki a wurin, bashi).", "Ku karanta jagorar FTB ta nau'o'in mallakar kasuwanci (Guide to Common Forms of Ownership).", "Ku kwatanta kuɗin kowace shekara, ba kuɗin kafawa kaɗai ba.", "Ku zaɓi tsari, kuma ku tambayi mai ba da shawara idan ba ku tabbata ba."],
          words: [["Tsarin kasuwanci (business structure)", "yanayin kasuwanci a gaban doka, kamar kasuwancin mutum ɗaya, LLC ko corporation."], ["Kasuwancin mutum ɗaya (sole proprietorship)", "kasuwancin da mutum ɗaya ya mallaka, wanda ba ya rabe da mai shi a gaban doka."], ["LLC", "limited liability company (kamfani mai iyakantaccen nauyi): kasuwancin da aka yi wa rajista da jiha, wanda ya rabe da masu shi."], ["Nauyi (liability)", "kasancewa mai alhakin bashi ko wata cuta a gaban doka."]],
          slides: [
            { title: "Tsare-tsare huɗu da aka fi sani", bullets: ["Kasuwancin mutum ɗaya (mai shi ɗaya)", "Haɗin gwiwa (masu shi biyu ko fiye)", "Kamfani mai iyakantaccen nauyi (LLC)", "Corporation"] },
            { title: "Kasuwancin mutum ɗaya ko haɗin gwiwa", bullets: ["Babu takardar kafawa a ofishin Secretary of State", "Ku da kasuwancin abu ɗaya ne a gaban doka", "Kayanku na kanku suna iya shiga haɗari"] },
            { title: "LLC ko corporation", bullets: ["Ana kafa shi da takarda a ofishin Secretary of State", "LLC-1: $70. ARTS-GS stock corporation: $100", "Ya rabe da ku, amma kuɗinsa ya fi yawa kowace shekara"] },
            { title: "Zaɓi", bullets: ["Ku yi tunani kan haɗari: haya, ma'aikata, abokan ciniki, bashi", "Ku kwatanta kuɗin shekara, ba na kafawa kaɗai ba", "Ku tambayi mai ba da shawara na SBDC ko SCORE kyauta"] }
          ],
          sources: [SOS_LLC, SOS_CORP, FTB_FORMS],
          tryIt: "Ku fara shirinku. A sama ku rubuta ra'ayin kasuwancinku, wane ne ya mallake shi, da manyan haɗarurrukansa. Sannan ku rubuta tsarin da za ku zaɓa a yau da dalili ɗaya.",
          youCanNow: "ambaton tsare-tsaren kasuwanci da aka fi sani, faɗin kuɗin kafa LLC ko corporation a jiha, da zaɓar ɗaya don kasuwancinku.",
          quickCheck: [
            { objective: "O1", q: "Wane tsari ne ba ya buƙatar takardar kafawa a ofishin California Secretary of State?", options: ["LLC", "Corporation", "Kasuwancin mutum ɗaya", "Corporation marar riba (nonprofit)"], answer: 2, why: "Kasuwancin mutum ɗaya ba ya cike takardun kafawa a ofishin Secretary of State." },
            { objective: "O1", q: "Kuna son kafa LLC kuma kun ga wani kuɗi a intanet. Me za ku yi kafin ku biya?", options: ["Ku duba kuɗin na yanzu a shafin hukuma na Secretary of State", "Ku biya shafin farko da ya bayyana", "Ku tambayi aboki abin da ya biya shekarun baya", "Ku yi amfani da duk abin da AI ya faɗa"], answer: 0, why: "Kuɗaɗe suna canjawa, don haka kuna duba shafin hukuma kafin ku biya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sanya suna da yin rajistar kasuwancinku",
          minutes: 5,
          goal: "Ku yi rajistar sunan kasuwancinku ta hanyar da ta dace da tsarinku.",
          text: [
            "LLC ko corporation yana yin rajistar sunansa lokacin da ya cike takardun kafawa a ofishin Secretary of State. Kuna iya cikewa ta intanet a bizfile Online (bizfileonline.sos.ca.gov). Ku fara bincika sunan a can don ganin ko wani kasuwanci yana amfani da shi.",
            "Idan kuna kasuwanci da sunan da ba sunanku na doka ba, kuna cike takardar Fictitious Business Name (FBN), wadda ake kira DBA (\"doing business as\", wato \"yana kasuwanci da sunan\"), a ofishin county clerk na county inda kasuwancinku yake. Misali, idan Maria Lopez tana gudanar da \"Sunrise Tamales\", za ta cike FBN. LLC da ke amfani da suna dabam da wanda aka yi wa rajista ita ma tana cike FBN.",
            "Kowane county ne yake saita kuɗin FBN, don haka ku duba shi a shafin intanet na county clerk ɗinku. Counties kuma suna buƙatar ku wallafa FBN a jaridar yanki sau ɗaya a mako har makonni huɗu, yawanci farawa cikin kwanaki 30 bayan cikewa, sannan ku cike shaidar wallafawa. Ku duba ainihin dokokin county ɗinku."
          ],
          steps: ["Ku bincika sunan da kuke tunani a bizfile Online.", "LLC ko corporation: ku cike takardun kafawa a bizfile Online.", "Idan kuna amfani da sunan da ba sunanku na doka ba: ku cike FBN a ofishin county clerk ɗinku.", "Ku wallafa FBN a jarida kamar yadda county ɗinku ya buƙata, ku cike shaidar.", "Ku rubuta kowane mataki, ofishinsa da kuɗinsa a cikin shirinku."],
          words: [["Fictitious Business Name (FBN)", "sunan kasuwanci da ba sunan mai shi na doka ba; ana kuma kiransa DBA."], ["DBA", "\"doing business as\": sunan da kasuwanci yake amfani da shi a gaban jama'a."], ["County clerk", "ofishin county da ke karɓar takardun FBN da sauran bayanan jama'a."]],
          slides: [
            { title: "LLC ko corporation", bullets: ["Ana yin rajistar sunan lokacin da kuka kafa shi", "Ku cike ta intanet a bizfileonline.sos.ca.gov", "Ku fara bincika sunan"] },
            { title: "Fictitious Business Name (DBA)", bullets: ["Don sunan da ba sunanku na doka ba", "Ana cike shi a ofishin county clerk ɗinku", "Misali: Maria Lopez tana kasuwanci da sunan Sunrise Tamales"] },
            { title: "Kuɗin FBN da wallafawa", bullets: ["Kowane county ne yake saita kuɗin: ku duba shafinsa", "Ku wallafa a jaridar yanki sau ɗaya a mako har makonni 4", "Sannan ku cike shaida; ku duba ranakun ƙarshe na county ɗinku"] }
          ],
          sources: [BIZFILE, LA_FBN, CALOSBA],
          tryIt: "Ku bincika sunan kasuwancinku a bizfile Online. Sannan ku nemo shafin FBN na county clerk ɗinku, ku rubuta kuɗin cikewa da dokar wallafawa a cikin shirinku.",
          youCanNow: "duba ko sunan kasuwanci yana nan ba a ɗauka ba, da faɗin lokacin da kuke buƙatar Fictitious Business Name da inda ake cike shi.",
          quickCheck: [
            { objective: "O2", q: "Mene ne DBA?", options: ["Fom ɗin haraji", "Lasisin kasuwanci", "Wani nau'in LLC", "Sunan da kasuwanci yake amfani da shi a gaban jama'a, idan ba sunan mai shi na doka ba ne"], answer: 3, why: "DBA shi ne sunan kasuwanci a gaban jama'a da ya bambanta da sunan mai shi na doka." },
            { objective: "O2", q: "Kun cike Fictitious Business Name a county ɗinku. Me za ku fi yiwuwa ku yi a gaba?", options: ["Babu wani abu", "Ku wallafa shi a jaridar yanki kamar yadda county ɗinku ya buƙata", "Ku sake cike shi a IRS", "Ku jira shekara biyar"], answer: 1, why: "Yawancin counties na California suna buƙatar ku wallafa FBN a jaridar yanki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Samun EIN kyauta da izinin sayarwa",
          minutes: 5,
          goal: "Ku nemi EIN daga IRS kuma ku yanke shawara ko kuna buƙatar izinin sayarwa na California.",
          text: [
            "EIN (Employer Identification Number) ita ce lambar haraji ta tarayya ta kasuwancinku. LLC, corporation, haɗin gwiwa da duk kasuwancin da ke da ma'aikata suna buƙatarta; kasuwancin mutum ɗaya marar ma'aikata zai iya amfani da lambarsa ta kansa, amma sau da yawa yana samun EIN don raba kasuwanci da al'amuran kansa. IRS ta ce ba dole ne ku taɓa biyan kuɗi don EIN ba. Ku nema a irs.gov, kuma ku yi hankali da shafukan da ke karɓar kuɗi a kanta.",
            "Izinin sayarwa (seller's permit) yana fitowa daga California Department of Tax and Fee Administration (CDTFA). Idan kuna sayarwa ko ba da hayar kayan da yawanci ake biyan haraji a kansu a California, kuna buƙatar ɗaya, kuma dole ku nuna shi a wurin kasuwancinku. Shago, shagon tufafi, motar sayar da abinci da gidan abinci yawanci suna buƙatar ɗaya. Aikin hidima kaɗai, kamar share gida ko koyarwa, sau da yawa ba ya buƙata, amma ku duba.",
            "CDTFA ta ce babu kuɗi don izinin sayarwa, amma za ta iya neman ajiyar tsaro (security deposit), kuma tana yanke adadin lokacin da kuka nema. Idan kuna sayarwa a wuri ɗaya na kwanaki 90 ko ƙasa da haka, kamar rumfar lokaci-lokaci, kuna iya buƙatar izinin sayarwa na wucin gadi maimakon haka. Ku yi rajista ta intanet ta hanyar CDTFA."
          ],
          steps: ["Ku je irs.gov ku bincika \"apply for an EIN\".", "Ku nema ta intanet a zama ɗaya, ku ajiye wasiƙar tabbatarwa.", "Ku yanke shawara ko kuna sayar da kayan da ake biyan haraji a kansu.", "Idan haka ne, ku yi rajistar izinin sayarwa a cdtfa.ca.gov.", "Ku nuna izinin a wurin da kuke kasuwanci."],
          words: [["EIN", "Employer Identification Number: lambar haraji ta tarayya kyauta ga kasuwanci, daga IRS."], ["Izinin sayarwa (seller's permit)", "izinin California, daga CDTFA, don sayar da kayan da ake biyan haraji a kansu da karɓar harajin sayarwa."], ["CDTFA", "California Department of Tax and Fee Administration (Hukumar Haraji da Kuɗaɗe ta California)."], ["Ajiyar tsaro (security deposit)", "kuɗin da CDTFA za ta iya riƙewa idan ba a biya harajin sayarwa daga baya ba."]],
          slides: [
            { title: "EIN: lambar harajin kasuwancinku", bullets: ["Daga IRS, a irs.gov", "Kyauta koyaushe: IRS ba ta taɓa karɓar kuɗi don EIN", "Ku yi hankali da shafukan da ke karɓar kuɗi"] },
            { title: "Izinin sayarwa: wa yake buƙata", bullets: ["Masu sayarwa ko ba da hayar kayan da ake biyan haraji a California", "Shaguna, motocin abinci, gidajen abinci yawanci suna buƙata", "Ayyukan hidima kaɗai sau da yawa ba sa buƙata: ku duba"] },
            { title: "Izinin sayarwa: kuɗi", bullets: ["Babu kuɗin nema (CDTFA)", "CDTFA za ta iya neman ajiyar tsaro", "Kuna sayarwa kwanaki 90 ko ƙasa? Ku tambayi izinin wucin gadi"] }
          ],
          sources: [IRS_EIN, CDTFA, CDTFA_FAQ],
          tryIt: "Ku ƙara layuka biyu a shirinku: EIN (IRS, kyauta, a nema a irs.gov) da izinin sayarwa (CDTFA, babu kuɗi, mai yiwuwa ajiya) ko bayanin dalilin da yasa ba ku buƙata. Kada ku rubuta lambar Social Security ɗinku a ko'ina sai a fom ɗin IRS na hukuma.",
          youCanNow: "neman EIN kyauta a shafin IRS na hukuma da yanke shawara ko kasuwancinku yana buƙatar izinin sayarwa.",
          quickCheck: [
            { objective: "O3", q: "Wace hukuma ce ke ba da izinin sayarwa na California?", options: ["IRS", "County clerk ɗinku", "CDTFA", "Secretary of State"], answer: 2, why: "California Department of Tax and Fee Administration ce ke ba da izinin sayarwa." },
            { objective: "O3", q: "Kuna shirin sayar da kaya a kasuwar biki kawai na 'yan makonni. Me za ku yi?", options: ["Ku tambayi CDTFA game da izinin sayarwa na wucin gadi", "Ku ƙyale izini domin lokacin gajere ne", "Ku samu EIN a maimakonsa", "Ku biya wani shafi mai zaman kansa don izini"], answer: 0, why: "Masu sayarwa na ɗan lokaci za su iya tambayar CDTFA game da izinin sayarwa na wucin gadi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓa da yin rajistar kasuwancinku",
        questions: [
          { objective: "O1", q: "Mene ne kuɗin da Secretary of State ya lissafa don LLC Articles of Organization (Fom LLC-1)?", options: ["$800", "$70", "$20", "Kyauta"], answer: 1, why: "Shafin fom na LLC na Secretary of State ya lissafa Fom LLC-1 a $70." },
          { objective: "O1", q: "Kevin yana gudanar da kasuwancin kula da ciyawa a matsayin kasuwancin mutum ɗaya. Wanne ne gaskiya?", options: ["Dole ya biya $100 ga Secretary of State don kafa shi", "Ba zai iya amfani da sunan kasuwanci ba", "Dole ya fara kafa corporation", "Ba ya cike takardun kafawa a ofishin Secretary of State"], answer: 3, why: "Kasuwancin mutum ɗaya ba ya cike takardun kafawa a ofishin Secretary of State." },
          { objective: "O2", q: "Maria Lopez tana sayar da abinci da sunan \"Sunrise Tamales\". A ina za ta cike Fictitious Business Name ɗinta?", options: ["Ofishin county clerk ɗinta", "CDTFA", "IRS", "Franchise Tax Board"], answer: 0, why: "Ana cike takardun FBN a ofishin county clerk inda kasuwancin yake." },
          { objective: "O3", q: "Wani shafin intanet yana neman $150 don samo muku EIN. Me za ku yi?", options: ["Ku biya; ya fi sauri", "Ku yi amfani da EIN na aboki", "Ku nema kyauta a irs.gov maimakon haka", "Ku bar EIN har abada"], answer: 2, why: "IRS ta ce ba dole ne ku taɓa biyan kuɗi don EIN ba." },
          { objective: "O3", q: "Wane kasuwanci ne ya fi yiwuwa ya buƙaci izinin sayarwa na California?", options: ["Aikin share gida", "Aikin koyarwa", "Shagon da ke sayar da tufafi", "Aikin ajiyar lissafi (bookkeeping)"], answer: 2, why: "Sayar da kayan da ake biyan haraji a kansu, kamar tufafi, yana buƙatar izinin sayarwa." }
        ]
      }
    },
    {
      name: "Babi na 2: Izinin yanki, kuɗaɗen shekara da shirinku",
      lessons: [
        {
          objectives: ["O4","O6"],
          title: "Nemo izinin birni da county ɗinku",
          minutes: 5,
          goal: "Ku yi amfani da CalGold da shafin intanet na birninku don lissafa izinin yanki da kasuwancinku yake buƙata.",
          text: [
            "Yawancin birane suna buƙatar lasisin kasuwanci ko takardar shaidar harajin kasuwanci (business tax certificate), har ma don kasuwancin gida. Kowane birni (ko county, idan kuna wajen birni) ne yake saita kuɗin, kuma sau da yawa ya dogara da irin kasuwancinku ko kuɗin shigarku. Ku duba shi a shafin intanet na birninku ko ku kira ofishin birni (city hall).",
            "Wasu kasuwanci suna buƙatar izini na musamman. Gidan abinci ko motar sayar da abinci yana buƙatar izinin lafiya daga sashen kula da muhalli da lafiya (environmental health) na county. Gidan toya burodi a gida yana iya buƙatar rajista ko izinin cottage food (abincin gida) daga county. Shagon gyaran gashi yana buƙatar lasisin hukumar jiha (state board) ga ma'aikata. Wurare da yawa kuma suna buƙatar binciken zoning, binciken kashe gobara ko izinin allon talla.",
            "CalGold (calgold.ca.gov) kayan aikin jiha ne na kyauta da ke taimaka muku nemo bayanan izini. Kuna zaɓar birninku ko county ɗinku da irin kasuwancinku, kuma yana lissafa hukumomin da yadda za a same su. CalGold ba ya ba da izini, kuma ya ce har yanzu ana gina shi, don haka ku kira hukumar don tabbatarwa."
          ],
          steps: ["Ku buɗe calgold.ca.gov.", "Ku zaɓi birninku ko county ɗinku.", "Ku zaɓi irin kasuwancinku (ko \"General Business Information\").", "Ku rubuta kowane izini da hukumar da ke ba da shi.", "Ku ziyarci ko ku kira kowace hukuma don tabbatar da kuɗin da yadda ake nema."],
          words: [["Lasisin kasuwanci (business license)", "izinin birni ko county don gudanar da kasuwanci a can; wani lokaci ana kiransa business tax certificate."], ["Zoning", "dokokin yanki game da irin kasuwancin da zai iya aiki a wani adireshi."], ["CalGold", "shafin intanet na California kyauta da ke lissafa bayanan izini bisa wuri da irin kasuwanci."]],
          slides: [
            { title: "Lasisin kasuwanci na birni", bullets: ["Yawancin birane suna buƙatarsa, har a gida", "Kowane birni ko county ne yake saita kuɗin", "Ku duba shafin birninku ko ku kira city hall"] },
            { title: "Izini na musamman", bullets: ["Abinci: izinin environmental health na county", "Toya burodi a gida: dokokin cottage food na county", "Zoning, binciken kashe gobara da izinin allon talla"] },
            { title: "Ku yi amfani da CalGold", bullets: ["calgold.ca.gov: ku zaɓi birni da irin kasuwanci", "Yana lissafa hukumomi; ba ya ba da izini", "Ku kira kowace hukuma don tabbatar da kuɗin"] }
          ],
          sources: [CALGOLD, CALOSBA],
          tryIt: "Ku yi amfani da CalGold don birninku da irin kasuwancinku. Ku ƙara kowane izinin da ya lissafa a shirinku, da shafin intanet na hukumar. Don kowanne, ku rubuta kuɗin ko \"a duba a\" da inda.",
          youCanNow: "nemo izinin birni da county da kasuwancinku yake buƙata da ofishin da ke ba da kowanne.",
          quickCheck: [
            { objective: "O4", q: "Me CalGold yake yi?", options: ["Yana ba da duk izinin da kuke buƙata", "Yana karɓar harajinku", "Yana kafa LLC ɗinku", "Yana lissafa bayanan izini da hukumomi don birninku da irin kasuwancinku"], answer: 3, why: "CalGold yana lissafa izini da hukumomi, amma ba ya ba da su." },
            { objective: "O4", q: "CalGold ya lissafa izini don motar abincinku. Me za ku yi a gaba?", options: ["Ku ɗauka cewa kun riga kun samu", "Ku tuntuɓi hukumar da aka lissafa don tabbatar da kuɗin ku nema", "Ku nemi AI ya nema a madadinku", "Ku jira har mai bincike ya zo"], answer: 1, why: "CalGold ba ya ba da izini, don haka kuna tuntuɓar kowace hukuma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuɗaɗen shekara: harajin $800, rahotanni da albashi",
          minutes: 6,
          goal: "Ku lissafa kuɗaɗen jiha na shekara da ranakun ƙarshe da ke tare da tsarinku.",
          text: [
            "LLC: Franchise Tax Board (FTB) ta ce kowane LLC da ke kasuwanci ko aka kafa a California dole ya biya harajin shekara na $800, kowace shekara, har sai an soke LLC ɗin, ko da bai yi wani kasuwanci ba. Biyan farko yana da ranar ƙarshe a rana ta 15 ga wata na 4 bayan kun cike a ofishin Secretary of State. LLC da ke samun fiye da $250,000 kuma suna biyan kuɗin LLC (LLC fee). Keɓancewar shekarar farko da ta kasance daga 2021 zuwa 2023 ba ta aiki yanzu.",
            "Corporation: FTB ta ce corporation suna biyan mafi ƙarancin harajin franchise na $800, amma sababbin corporation da aka kafa ba dole su biya mafi ƙarancin a shekarar haraji ta farko ba. Har yanzu suna iya biyan haraji kan kuɗin shiga, kuma dole su yi biyan haraji na hasashe (estimated payments).",
            "Statement of Information (takardar bayani): LLC da corporation suna cike ɗaya a ofishin Secretary of State. Statement of Information na LLC (LLC-12) $20 ne, ranar ƙarshe cikin kwanaki 90 bayan kafawa, sannan kowace shekara biyu bayan haka. Na stock corporation (SI-550) $25 ne. Rashin cikewa na iya kawo hukunci.",
            "Ɗaukar ma'aikata: ku yi rajista da Employment Development Department (EDD) cikin kwanaki 15 bayan kun biya fiye da $100 na albashi a cikin kwata (wata uku). Dokokin albashi suna da cikakkun bayanai, don haka masu kasuwanci da yawa suna amfani da sabis na biyan albashi ko ƙwararren haraji."
          ],
          words: [["Franchise Tax Board (FTB)", "hukumar harajin jihar California don harajin kuɗin shiga da na franchise."], ["Harajin shekara (annual tax)", "harajin $800 na shekara da kowane LLC na California yake biya."], ["Statement of Information", "gajeren fom da LLC da corporation suke cikewa a ofishin Secretary of State don sabunta bayanansu."], ["EDD", "Employment Development Department: ofishin jiha na harajin albashi da masu ɗaukar ma'aikata."]],
          slides: [
            { title: "LLC: $800 kowace shekara", bullets: ["Ranar ƙarshe: rana ta 15 ga wata na 4 bayan kafawa", "Ana bin sa ko babu ciniki, har sai kun soke", "Kuɗin shiga fiye da $250,000: akwai kuma kuɗin LLC"] },
            { title: "Corporation: mafi ƙanƙanta $800", bullets: ["Mafi ƙarancin harajin franchise: $800", "Ba dole ba a shekarar haraji ta farko", "Biyan haraji na hasashe na iya zama dole"] },
            { title: "Statement of Information", bullets: ["LLC (LLC-12): $20, cikin kwanaki 90, sannan kowace shekara 2", "Stock corporation (SI-550): $25", "Rashin cikewa na iya kawo hukunci"] },
            { title: "Ɗaukar ma'aikata", bullets: ["Ku yi rajista da EDD cikin kwanaki 15", "Bayan biyan fiye da $100 na albashi a cikin kwata", "Ku yi la'akari da sabis na albashi ko ƙwararren haraji"] }
          ],
          sources: [FTB_LLC, FTB_CORP, SOS_LLC, SOS_CORP, EDD],
          tryIt: "Ku ƙara layukan shekara a shirinku da suka dace da tsarinku: harajin $800 da ranar ƙarshensa, Statement of Information da kuɗinsa, da rajistar EDD idan za ku ɗauki ma'aikata. Ku buɗe kowane shafin hukuma ku duba lambar kafin ku rubuta ta.",
          youCanNow: "lissafa kuɗaɗen jiha na shekara da ranakun ƙarshe na tsarinku, da faɗin ofishin da ke karɓar kowanne.",
          quickCheck: [
            { objective: "O5", q: "Sau nawa LLC yake cike Statement of Information bayan na farko?", options: ["Kowane wata", "Kowace shekara biyar", "Sau ɗaya kawai", "Kowace shekara biyu"], answer: 3, why: "Bayan na farko, LLC yana cike Statement of Information kowace shekara biyu." },
            { objective: "O5", q: "LLC ɗinku bai samu kuɗi ba a wannan shekara. Me za ku shirya?", options: ["Babu komai, tunda babu kasuwanci", "Ku soke shirin haraji", "Har yanzu ana bin harajin shekara na $800 har sai an soke LLC ɗin", "Harajin tarayya kaɗai"], answer: 2, why: "LLC yana bin harajin shekara na $800 har sai an soke shi, ko da babu kasuwanci." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Haɗa komai: tsarin kafawa da kasafin kuɗinku",
          minutes: 5,
          goal: "Ku shirya tsarin kafa kasuwanci a shafi ɗaya da matakai bisa tsari, ofisoshi, kuɗaɗe da ranakun ƙarshe.",
          text: [
            "Yanzu ku sa komai a shafi ɗaya. Tsari yana da muhimmanci: ku zaɓi tsarin kasuwanci, ku kafa LLC ko corporation (idan akwai), ku samu EIN, ku cike FBN (idan ana buƙata), ku samu izinin sayarwa (idan ana buƙata), sannan ku samu izinin birni da county. Izini da yawa suna neman EIN ɗinku ko lambar kamfaninku (entity number), don haka ku fara yin waɗannan.",
            "Ku haɗa kuɗaɗen da kuka sani, kuma ku yi alama a kan waɗanda har yanzu kuke buƙatar dubawa. Misali don motar abinci ta LLC: LLC-1 $70, Statement of Information $20, EIN kyauta, izinin sayarwa babu kuɗi (ajiya mai yiwuwa), harajin shekara $800, da kuɗin izinin lafiya na county, lasisin birni da FBN da za ku duba a yankinku.",
            "Mataimakin AI zai iya taimaka muku tsara tebur da yin jerin abubuwan yi, amma yana iya yin kuskure game da kuɗaɗe da ranaku. Koyaushe ku yi amfani da shafin hukuma don lambar. Kada ku rubuta lambar Social Security ɗinku, bayanan banki ko kalmomin sirri a kayan aikin AI. Idan kun gama, ku nuna shirin ga mai ba da shawara na SBDC kyauta ko ƙwararren haraji."
          ],
          steps: ["Ku lissafa matakan bisa tsari.", "Ku ƙara ofis da shafin intanet na hukuma na kowanne.", "Ku ƙara kuɗin daga shafin hukuma, ko \"a duba a ...\".", "Ku ƙara ranar ƙarshe ta kowane abu na shekara.", "Ku haɗa kuɗaɗen da kuka sani ku nuna shirin ga mai ba da shawara."],
          words: [["Kuɗin farawa (startup costs)", "kuɗin da kuke kashewa sau ɗaya don buɗe kasuwancin."], ["Kuɗaɗe masu maimaituwa (recurring costs)", "kuɗaɗen da kuke sake biya kowace shekara, kamar harajin $800."]],
          slides: [
            { title: "Tsarin matakai", bullets: ["1. Tsarin kasuwanci  2. Kafa LLC ko corporation", "3. EIN  4. FBN idan ana buƙata  5. Izinin sayarwa", "6. Izinin birni da county"] },
            { title: "Misali: motar abinci ta LLC", bullets: ["LLC-1 $70; Statement of Information $20", "EIN kyauta; izinin sayarwa babu kuɗi", "Harajin shekara $800; kuɗin yanki: ku duba su"] },
            { title: "Amfani da AI lafiya a nan", bullets: ["AI zai iya tsara teburinku da jerin abubuwan yi", "Ku samo kowane kuɗi da rana daga shafin hukuma", "Kada ku taɓa rubuta SSN, bayanan banki ko kalmomin sirri"] }
          ],
          sources: [SOS_LLC, FTB_LLC, CDTFA, IRS_EIN, CALGOLD],
          tryIt: "Aikin ƙarshe: ku kammala shirinku na shafi ɗaya mai layuka biyar: Mataki, Ofis (shafin intanet), Kuɗi, Ranar ƙarshe, An gama. Ku cike kowane layi daga wannan kwas, ku haɗa kuɗaɗen da kuka sani, kuma ku yi alama a kan kowane kuɗin yanki da har yanzu kuke buƙatar dubawa.",
          youCanNow: "shirya da amfani da cikakken tsarin kafa kasuwanci a California.",
          quickCheck: [
            { objective: "O6", q: "Da wane tsari ya kamata ku yawan yin waɗannan matakan?", options: ["Zaɓar tsari, kafa shi, samun EIN, sannan izinin yanki", "Izinin yanki, sannan zaɓar tsari", "Samun EIN kafin zaɓar suna ko tsari, sannan kafa shi a ƙarshe", "Kowane tsari daidai yake"], answer: 0, why: "Kowane mataki ya dogara da wanda ke gabansa, farawa da tsarin kasuwanci." },
            { objective: "O6", q: "Har yanzu ba ku san kuɗin lasisin kasuwanci na birninku ba. Me za ku rubuta a shirinku?", options: ["Tsammani", "Sifili", "\"A duba a\" da shafin intanet na hukuma na birnin", "Kuɗin wani birni"], answer: 2, why: "Kuɗin yanki sun bambanta, don haka kuna rubuta inda za a duba su maimakon yin tsammani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Izinin yanki, kuɗaɗen shekara da shirinku",
        questions: [
          { objective: "O4", q: "Me CalGold yake yi?", options: ["Yana lissafa bayanan izini da hukumomi don birninku da irin kasuwancinku", "Yana ba da lasisin kasuwancinku", "Yana karɓar harajin $800", "Yana ba ku EIN"], answer: 0, why: "CalGold yana nemo bayanan izini; ba ya ba da izini." },
          { objective: "O4", q: "Wane ne yake saita kuɗin lasisin kasuwanci na birni?", options: ["IRS", "Secretary of State", "CDTFA", "Kowane birni ko county"], answer: 3, why: "Kowane birni ko county ne yake saita kuɗin lasisi na yanki." },
          { objective: "O5", q: "Wani LLC bai yi kasuwanci ba a wannan shekara. Shin yana bin harajin shekara na $800?", options: ["A'a, sai idan ya samu kuɗi", "Eh, har sai an soke LLC ɗin", "A shekarar farko kaɗai", "Sai idan yana da ma'aikata"], answer: 1, why: "FTB ta ce ana bin harajin shekara ko da LLC ba ya kasuwanci, har sai an soke shi." },
          { objective: "O5", q: "Yaushe ne ranar ƙarshe ta Statement of Information na farko na LLC?", options: ["Cikin kwanaki 90 bayan kafawa", "Kowane wata", "Sai lokacin da aka rufe shi", "Cikin shekara 10"], answer: 0, why: "Secretary of State ya ce ranar ƙarshe cikin kwanaki 90 bayan rajista ne, sannan kowace shekara biyu bayan haka." },
          { objective: "O5", q: "Za ku ɗauki ma'aikacinku na farko. Da wane ofis za ku yi rajista?", options: ["CalGold", "County clerk", "EDD", "DMV"], answer: 2, why: "Masu ɗaukar ma'aikata suna rajista da EDD cikin kwanaki 15 bayan biyan fiye da $100 na albashi a cikin kwata." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kafa Ƙaramin Kasuwanci a California, Har da Kuɗaɗensa",
    questions: [
      { objective: "O1", q: "Wane tsari ne ba ya buƙatar takardar kafawa a ofishin California Secretary of State?", options: ["LLC", "Kasuwancin mutum ɗaya", "Corporation", "Corporation marar riba (nonprofit)"], answer: 1, why: "Kasuwancin mutum ɗaya ba ya cike takardun kafawa a ofishin Secretary of State." },
      { objective: "O1", q: "Mene ne babban dalilin da masu kasuwanci suke kafa LLC?", options: ["Kyauta ne koyaushe", "Yana maye gurbin duk izini", "Yana cire duk haraji", "Zai iya taimakawa wajen raba kayan kai da bashin kasuwanci"], answer: 3, why: "LLC wani jiki ne na daban a gaban doka da zai iya taimakawa wajen kare mai shi." },
      { objective: "O1", q: "Kuɗin Secretary of State don general stock corporation Articles of Incorporation (ARTS-GS) shi ne:", options: ["$20", "$70", "$100", "$800"], answer: 2, why: "Secretary of State ya lissafa ARTS-GS a $100." },
      { objective: "O1", q: "A ina kuke cike takardun kafa LLC ta intanet?", options: ["irs.gov", "bizfileonline.sos.ca.gov", "calgold.ca.gov", "edd.ca.gov"], answer: 1, why: "bizfile Online shi ne shafin cikewa na Secretary of State." },
      { objective: "O2", q: "Mene ne DBA?", options: ["Fom ɗin haraji", "Wani nau'in izinin abinci", "Sunan da kasuwanci yake amfani da shi a gaban jama'a, idan ba sunan mai shi na doka ba ne", "Asusun banki"], answer: 2, why: "DBA na nufin \"doing business as\"; ana cike shi a matsayin Fictitious Business Name." },
      { objective: "O2", q: "Bayan cike FBN, yawancin counties na California kuma suna buƙatar ku:", options: ["Wallafa shi a jaridar yanki har makonni huɗu", "Biyan IRS", "Samun izinin sayarwa", "Kafa LLC"], answer: 0, why: "Counties suna buƙatar a wallafa FBN sau ɗaya a mako har makonni huɗu." },
      { objective: "O2", q: "A ina ya kamata ku duba kuɗin FBN na county ɗinku?", options: ["Mataimakin AI", "IRS", "Shafin intanet na county clerk ɗinku", "Wani saƙo a kafofin sada zumunta"], answer: 2, why: "Kowane county yana saita kuɗin FBN ɗinsa." },
      { objective: "O3", q: "Nawa IRS take karɓa don EIN?", options: ["Babu komai", "$70", "$50", "$800"], answer: 0, why: "IRS ta ce ba dole ne ku taɓa biyan kuɗi don EIN ba." },
      { objective: "O3", q: "Wace hukuma ce ke ba da izinin sayarwa na California?", options: ["FTB", "CDTFA", "EDD", "County clerk"], answer: 1, why: "California Department of Tax and Fee Administration ce ke ba da izinin sayarwa." },
      { objective: "O3", q: "Me CDTFA za ta iya nema lokacin da kuke samun izinin sayarwa, ko da babu kuɗi?", options: ["Takardar corporation", "Kalmar sirrin bankinku", "Sanarwa a jarida", "Ajiyar tsaro (security deposit)"], answer: 3, why: "CDTFA ta ce za ta iya buƙatar ajiyar tsaro." },
      { objective: "O3", q: "Rumfar sayar da kabewa ta lokaci-lokaci tana sayarwa a wuri ɗaya na makonni shida. Me mai ita zai tambayi CDTFA?", options: ["Izinin sayarwa na wucin gadi", "EIN", "FBN", "Statement of Information"], answer: 0, why: "Sayarwa a wuri ɗaya na kwanaki 90 ko ƙasa na iya buƙatar izinin sayarwa na wucin gadi." },
      { objective: "O4", q: "Motar sayar da abinci yawanci tana buƙatar izinin lafiya daga:", options: ["IRS", "EDD", "Secretary of State", "Sashen environmental health na county"], answer: 3, why: "Kasuwancin abinci suna samun izinin lafiya daga sashen environmental health na county." },
      { objective: "O6", q: "CalGold ya ce ba ya ba da izini. Don haka bayan amfani da shi ya kamata ku:", options: ["Ƙyale jerin", "Biyan CalGold", "Tuntuɓar kowace hukuma da aka lissafa don tabbatar da kuɗin da nema", "Neman AI ya nema a madadinku"], answer: 2, why: "CalGold yana lissafa hukumomin; kuna nema a kowace ɗaya." },
      { objective: "O4", q: "Kasuwancin koyarwa na gida har yanzu yana iya buƙatar:", options: ["Izinin sayarwa", "Lasisin kasuwanci na birni ko takardar shaidar haraji", "Izinin lafiya", "Lasisin giya"], answer: 1, why: "Yawancin birane suna buƙatar lasisin kasuwanci, har don kasuwancin gida." },
      { objective: "O5", q: "Nawa ne harajin shekara na LLC na California?", options: ["$20", "$70", "$250", "$800"], answer: 3, why: "FTB ta ce kowane LLC dole ya biya harajin shekara na $800." },
      { objective: "O5", q: "Yaushe ne ranar ƙarshe ta harajin shekara na $800 na farko na LLC?", options: ["Sai lokacin da ya samu $250,000", "Ba a shekarar farko ba", "Rana ta 15 ga wata na 4 bayan cikewa a ofishin Secretary of State", "Ranar 31 ga Disamba"], answer: 2, why: "FTB ta ba da rana ta 15 ga wata na 4 bayan cikewa." },
      { objective: "O5", q: "Sabuwar corporation a shekarar haraji ta farko:", options: ["Ba dole ta biya mafi ƙarancin harajin franchise na $800 ba", "Tana biyan $1,600", "Ba ta taɓa biyan haraji", "Dole ta biya kuɗin LLC"], answer: 0, why: "FTB ta ce sababbin corporation ba dole su biya mafi ƙarancin a shekarar haraji ta farko ba." },
      { objective: "O5", q: "Sau nawa LLC yake cike Statement of Information bayan na farko?", options: ["Kowane wata", "Kowace shekara biyu", "Kowace shekara goma", "Ba taɓa ba"], answer: 1, why: "Secretary of State ya ce kowace shekara biyu bayan na farko." },
      { objective: "O6", q: "Da wane tsari ya kamata ku yawan yin waɗannan?", options: ["Lasisin birni, sannan kafa LLC, sannan zaɓar tsari", "Zaɓar tsari, kafa shi, samun EIN, sannan izinin yanki", "Izinin sayarwa, sannan EIN, sannan tsari", "Kowane tsari ya yi"], answer: 1, why: "Izini da yawa suna neman EIN ɗinku da lambar kamfaninku, don haka ku fara kafawa da samun EIN." },
      { objective: "O6", q: "Mataimakin AI ya faɗa muku kuɗin FBN a county ɗinku. Me za ku yi?", options: ["Ku fara duba shi a shafin hukuma na county clerk ɗinku", "Ku saka shi a shirin ba tare da dubawa ba", "Ku biya kayan aikin AI", "Ku rubuta SSN ɗinku don samun amsa mafi kyau"], answer: 0, why: "AI yana iya yin kuskure; kuɗaɗe daga shafin hukuma suke." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      4,
      7,
      8,
      11,
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
        name: "Tsari da suna",
        objective: "O1",
        notYet: "Ba a zaɓi tsari ba, ko babu rajistar suna.",
        meets: "Tsari da dalili, da rajistar suna da ta dace da ofishinta.",
        exceeds: "Ya kuma rubuta dokar wallafa FBN idan ta shafe shi."
      },
      {
        name: "EIN da izinin sayarwa",
        objective: "O3",
        notYet: "Babu su, ko an yi amfani da sabis na EIN mai kuɗi.",
        meets: "EIN daga irs.gov kyauta, da layin izinin sayarwa ko dalilin da yasa ba a buƙata.",
        exceeds: "Ya rubuta yiwuwar ajiyar tsaro ta CDTFA."
      },
      {
        name: "Izinin yanki",
        objective: "O4",
        notYet: "Babu lasisin birni ko izinin CalGold a jeri.",
        meets: "Lasisin kasuwanci na birni da kowane izinin CalGold, kowanne da shafin intanet na hukumar.",
        exceeds: "An cike kowane kuɗin yanki daga shafin hukuma."
      },
      {
        name: "Kuɗaɗen shekara da ranakun ƙarshe",
        objective: "O5",
        notYet: "Babu harajin $800 ko Statement of Information ga LLC ko corporation.",
        meets: "Layukan shekara da suka dace da tsarin, da ranakun ƙarshe.",
        exceeds: "Har da rajistar EDD idan za a ɗauki ma'aikata, kuma kowace lamba an duba ta a shafin hukuma."
      },
      {
        name: "Shiri bisa tsari da kuɗaɗe",
        objective: "O6",
        notYet: "Matakai ba bisa tsari ba, ko kuɗaɗe na tsammani.",
        meets: "Layuka biyar an cike su bisa tsari, an haɗa kuɗaɗen da aka sani, kuma an rubuta \"a duba a\" kan kuɗaɗen da ba a sani ba.",
        exceeds: "An lissafa kowane shafin hukuma kuma ana amfani da layin \"An gama\"."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka kammala aƙalla rajista ko izini ɗaya cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka buɗe kasuwancinsu bisa doka cikin watanni 6",
      "Masu koyo da suka gana da mai ba da shawara na SCORE ko SBDC cikin kwanaki 60"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Takarda, ko spreadsheet kyauta, don tsarin kafawa mai layuka biyar",
      "Shafukan hukuma da aka lissafa a kowane darasi: bizfile Online, irs.gov, CDTFA, CalGold, FTB da EDD",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kafin kowane zama, ku buɗe shafukan hukuma ku duba cewa kuɗaɗen jiha a kwas ɗin har yanzu na yanzu ne.",
      "Ku nemo shafukan county clerk da lasisin kasuwanci na birnin yankinku don ku nuna wa masu koyo ainihin shafukan yanki.",
      "Kada ku taɓa neman masu koyo su rubuta lambar Social Security a allon da ake rabawa; ana neman EIN a irs.gov kaɗai, a sirri.",
      "Wannan kwas ba shawarar shari'a ko haraji ba ne; ku gayyaci mai ba da shawara na SCORE, na SBDC ko ƙwararren haraji don tambayoyi game da halin kowane mai koyo.",
      "Ku ba da maki ga tsarin kafawa da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
