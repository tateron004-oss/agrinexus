"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-california-setup.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const SOS_ARTICLES = { name: "Sakataren Gwamnatin California (Secretary of State): fom da kuɗin rajistar kamfanonin California (da Turanci)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const SOS_SI = { name: "Sakataren Gwamnatin California: Statement of Information (SI-100 na ƙungiyoyi marasa riba, da Turanci)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-statement-information" };
const BIZFILE = { name: "Sakataren Gwamnatin California: bizfile Online (da Turanci)", url: "https://bizfileonline.sos.ca.gov" };
const IRS_EIN = { name: "IRS: Samun lambar EIN (Employer Identification Number, da Turanci)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const IRS_FEE = { name: "IRS: Kuɗin fom 1023 da 1023-EZ (da Turanci)", url: "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee" };
const IRS_1023 = { name: "IRS: Game da fom 1023 (da Turanci)", url: "https://www.irs.gov/forms-pubs/about-form-1023" };
const IRS_1023EZ = { name: "IRS: Game da fom 1023-EZ (takardar duba cancanta tana cikin umarnin, da Turanci)", url: "https://www.irs.gov/forms-pubs/about-form-1023-ez" };
const IRS_990N = { name: "IRS: Fom 990-N (e-Postcard) na ƙananan ƙungiyoyin da aka keɓe daga haraji (da Turanci)", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" };
const IRS_CHURCH = { name: "IRS Publication 1828: Jagorar haraji ga coci-coci da ƙungiyoyin addini (da Turanci)", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" };
const FTB = { name: "Franchise Tax Board na California: ƙungiyoyin agaji da marasa riba (fom 3500 / 3500A, da Turanci)", url: "https://www.ftb.ca.gov/file/business/types/charities-and-nonprofits/index.html" };
const AG_INITIAL = { name: "Babban Lauyan Gwamnatin California (Attorney General): Registry of Charities, rajistar farko (CT-1, da Turanci)", url: "https://oag.ca.gov/charities/initial-reg" };
const AG_RENEW = { name: "Babban Lauyan Gwamnatin California: Registry of Charities, sabunta rajista ta shekara (RRF-1, da Turanci)", url: "https://oag.ca.gov/charities/renewals" };

module.exports = {
  id: "nonprofit-california-setup-ha",
  lang: "ha",
  translationOf: "nonprofit-california-setup",
  category: "Non Profits",
  name: "Kafa Ƙungiya Marar Riba a California, Har da Kuɗaɗen da Ake Kashewa",
  skills: "Zaɓar irin ƙungiya marar riba da ta dace, Shigar da takardar kafa kamfani wurin Sakataren Gwamnati, Samun lambar EIN kyauta, Neman keɓewa daga harajin tarayya da na jiha, Rajista wurin Babban Lauyan Gwamnati, Yin kasafin kuɗi da kalandar kafawa",
  outcome: "yin cikakken shirin kafa ƙungiya marar riba ta amfanin jama'a a California, mai ranaku: kowace takarda a jerin da ya dace, ofishin da ke karɓarta, sunan fom, kuɗin hukuma, da takardun shekara-shekara da ke riƙe ƙungiyar a kyakkyawan matsayi.",
  about: [
    "Wannan kwas na mutanen da ke kafa ƙungiyar agaji, hidimar addini, ƙungiyar al'umma ko wani shiri a California ne: masu kafawa, fastoci, membobin kwamitin gudanarwa da masu aikin sa-kai da ke son yin sa daidai tun farko.",
    "Za ku koyi matakan a jere: zaɓar irin ƙungiyarku da kwamitin gudanarwa, shigar da takardar kafa kamfani (articles of incorporation) wurin Sakataren Gwamnati (Secretary of State), samun lambar EIN kyauta daga IRS (hukumar harajin tarayyar Amurka), neman matsayin 501(c)(3), samun keɓewa daga harajin California daga Franchise Tax Board (hukumar harajin jihar), da yin rajista a Registry of Charities na Babban Lauyan Gwamnati (Attorney General). Sannan za ku koyi takardun shekara-shekara, ku kuma yi kasafin kuɗi.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". An duba kowane kuɗi a wannan kwas a shafin gwamnati na hukuma ranar 27 ga Oktoba 2026, kuma an sa hanyar haɗin (link) don ku sake dubawa. Kuɗaɗe suna canjawa, don haka koyaushe ku tabbatar a shafin hukuma kafin ku biya. Wannan kwas ilimi ne, ba shawarar shari'a ko ta haraji ba: don halin da kuke ciki, ku yi magana da lauyan ƙungiyoyi marasa riba, akanta, ko cibiyar taimakon ƙungiyoyi marasa riba ta kyauta."
  ],
  finalTask: "Ku yi shirin kafa ƙungiyarku a shafi ɗaya (ta gaske ko ta atisaye): tebur mai kowace takarda a jere, ofishin, sunan fom, kuɗin daga shafin hukuma, ranar da kuke shirin shigar da ita, da takardun shekara-shekara tare da ranakun ƙarshensu. Ku ƙara jimillar kuɗin farawa da hanyar haɗin kowane shafin hukuma.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke kafa ƙungiyar agaji, hidimar addini, ƙungiyar al'umma ko wani shiri a California: masu kafawa, fastoci, membobin kwamitin gudanarwa da masu aikin sa-kai da ke son yin sa daidai tun farko.",
    startingPoint: "Suna da manufa, kuma sau da yawa suna da mutanen da ke taimaka musu. Yawancinsu ba su taɓa shigar da takarda wurin Sakataren Gwamnati, IRS, Franchise Tax Board ko Babban Lauyan Gwamnati ba, kuma ba su san jerin matakan ko kuɗaɗen ba.",
    gap: "Masu kafawa suna shigar da takardu ba a jere ba, suna biyan shafukan intanet kuɗi don ayyukan da suke kyauta, ko suna mantawa da takardun shekara-shekara har su rasa keɓewa daga haraji. Masu koyo suna buƙatar shiri ɗaya mai ranaku da ke da kowace takarda, ofis, fom, kuɗin hukuma da ranar ƙarshe ta shekara, don ƙungiyar ta fara daidai kuma ta ci gaba a kyakkyawan matsayi.",
    constraints: [
      "Kuɗaɗe da fom suna canjawa; ana duba kowane kuɗi a shafin hukuma kafin a shigar da takarda",
      "Ba shawarar shari'a ko ta haraji ba ce: idan masu koyo ba su tabbata ba, su tambayi lauyan ƙungiyoyi marasa riba, cibiyar taimako ko ƙwararre",
      "Sirri: lambar Social Security ko ITIN tana shiga shafin IRS na hukuma kaɗai, ba a kayan AI ko imel ba",
      "Coci-coci da ƙungiyoyin addini suna da dokoki na musamman da za a duba",
      "Kalmomi masu sauƙi ga waɗanda ke kafa ƙungiya a karon farko; kusan minti 60 gaba ɗaya"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku matakan kafa ƙungiyar agaji a California", action: "jera manyan takardun kafawa a jere da ofishin da ke kula da kowacce", standard: "kowace takarda a jerin da ya dace" },
    { id: "O2", condition: "Idan aka ba ku manufar ƙungiyarku", action: "zaɓar fom ɗin takardar kafa kamfani da ya dace da shirya Statement of Information", standard: "da wurin shigarwa da ranakun ƙarshe daidai" },
    { id: "O3", condition: "Bayan an karɓi takardar kafa kamfaninku", action: "samun lambar EIN kyauta a irs.gov da shirya taron farko na kwamitin gudanarwa", standard: "lambobin sirri a shafin IRS na hukuma kaɗai, kuma an jera kowane hukunci na taron farko" },
    { id: "O4", condition: "Ta amfani da takardar duba cancanta ta IRS", action: "zaɓi tsakanin fom 1023 da fom 1023-EZ da faɗin inda ake shigar da shi", standard: "da kuɗin da aka ɗauko daga shafin hukuma" },
    { id: "O5", condition: "Bayan amincewar tarayya ko gudummawarku ta farko", action: "shirya keɓewa daga Franchise Tax Board da rajista a Registry na Babban Lauyan Gwamnati", standard: "da fom ɗin da ya dace da wa'adin kwana 30 na Registry" },
    { id: "O6", condition: "Idan aka ba ku kuɗaɗe da ranakun ƙarshe da aka duba", action: "yin kasafin kuɗin farawa da kalandar takardun shekara-shekara", standard: "kowane kuɗi da ranar ƙarshe an duba su a shafin hukuma" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kafa kamfanin",
      lessons: [
        {
          objectives: ["O1"],
          title: "Taswirar hanya: abin da ƙungiya marar riba ke buƙata a California",
          minutes: 5,
          goal: "Jera manyan takardun kafawa a jere da ofishin da ke kula da kowacce.",
          text: [
            "A California, ƙungiyar agaji yawanci tana zama nonprofit public benefit corporation (kamfani marar riba na amfanin jama'a). Zama kamfani marar riba al'amari ne na jiha. Keɓewa daga haraji wani mataki ne daban: sau ɗaya wurin IRS (tarayya), sau ɗaya kuma wurin Franchise Tax Board (jiha). Ƙungiyoyin agaji da ke tara kuɗi kuma suna yin rajista wurin Babban Lauyan Gwamnati.",
            "Jerin da aka saba shi ne: 1) zaɓar manufarku, sunanku da kwamitin gudanarwa na farko; 2) shigar da takardar kafa kamfani wurin Sakataren Gwamnati; 3) samun lambar EIN daga IRS; 4) amincewa da dokokin cikin gida (bylaws) da yin taron farko na kwamiti; 5) shigar da Statement of Information; 6) neman matsayin 501(c)(3) na tarayya; 7) neman keɓewar California wurin Franchise Tax Board; 8) yin rajista a Registry of Charities na Babban Lauyan Gwamnati.",
            "Bin wannan jeri yana da muhimmanci. Misali, IRS tana gaya wa kamfanoni su yi rajista da jiha kafin su nemi EIN, kuma Babban Lauyan Gwamnati yana neman takardar kafa kamfaninku da dokokin cikin gida idan kuna rajista."
          ],
          steps: ["Ku rubuta manufarku cikin jimla ɗaya ko biyu.", "Ku zaɓi mutum uku ko fiye don kwamitin gudanarwa na farko, idan za ku iya.", "Ku rubuta matakai takwas ɗin a jere a shafi ɗaya.", "Kusa da kowane mataki, ku rubuta ofishin: Sakataren Gwamnati, IRS, Franchise Tax Board ko Babban Lauyan Gwamnati."],
          words: [["Nonprofit public benefit corporation", "irin kamfanin California da yawancin ƙungiyoyin agaji ke amfani da shi; yana hidimar jama'a, ba masu shi ba."], ["501(c)(3)", "sashen dokar harajin tarayya na ƙungiyoyin agaji; gudummawa gare su yawanci ana iya cire ta daga haraji."], ["Keɓewa daga haraji (tax-exempt)", "rashin wajabcin biyan harajin kuɗin shiga, bayan wata hukuma ta amince."]],
          slides: [
            { title: "Ofisoshi huɗu da za ku yi hulɗa da su", bullets: ["Sakataren Gwamnati: yana kafa kamfanin", "IRS: EIN da matsayin 501(c)(3) na tarayya", "Franchise Tax Board: keɓewa daga harajin California", "Babban Lauyan Gwamnati: Registry of Charities"] },
            { title: "Jerin matakai, kashi na 1", bullets: ["1. Manufa, suna, kwamiti na farko", "2. Takardar kafa kamfani (Sakataren Gwamnati)", "3. EIN (IRS, kyauta)", "4. Dokokin cikin gida da taron farko na kwamiti"] },
            { title: "Jerin matakai, kashi na 2", bullets: ["5. Statement of Information (Sakataren Gwamnati)", "6. Neman 501(c)(3) (IRS)", "7. Fom 3500 ko 3500A (Franchise Tax Board)", "8. Rajista wurin Babban Lauyan Gwamnati (CT-1)"] },
            { title: "Matsayi iri biyu", bullets: ["Kamfani marar riba: al'amarin jiha", "Keɓewa daga haraji: amincewa daban ta tarayya da ta jiha"] }
          ],
          sources: [SOS_ARTICLES, IRS_EIN, FTB, AG_INITIAL],
          tryIt: "Ku rubuta manufar ƙungiyarku cikin jimla ɗaya ko biyu. Sannan ku rubuta matakai takwas na kafawa a jere da ofishin kowanne. Ku ajiye wannan shafi: shi ne zai zama shirin kafawarku na ƙarshe.",
          youCanNow: "jera takardun kafa ƙungiya marar riba a California a jere da faɗin ofishin da ke kula da kowacce.",
          quickCheck: [
            { objective: "O1", q: "Wane ofishi ne ke kula da keɓewa daga harajin California?", options: ["Franchise Tax Board", "Sakataren Gwamnati", "Babban Lauyan Gwamnati", "Majalisar birni"], answer: 0, why: "Keɓewa daga haraji tana wurin IRS (tarayya) da Franchise Tax Board (jiha)." },
            { objective: "O1", q: "Wani mai kafawa yana son neman EIN kafin ya shigar da takardar kafa kamfani. Me za ku gaya masa?", options: ["Kowane jeri ya yi", "Ya fara shigar da takardar kafa kamfani wurin Sakataren Gwamnati, kamar yadda IRS ke gaya wa kamfanoni", "Ya tsallake takardar kafa kamfani", "Ya fara rajista wurin Babban Lauyan Gwamnati"], answer: 1, why: "IRS tana gaya wa kamfanoni su yi rajista da jiha kafin su nemi EIN." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shigar da takardar kafa kamfani",
          minutes: 5,
          goal: "Zaɓar fom ɗin takardar kafa kamfani da ya dace da shigar da shi wurin Sakataren Gwamnati.",
          text: [
            "Takardar kafa kamfani (articles of incorporation) ita ce ke kafa kamfaninku. Sakataren Gwamnatin California yana da nau'i uku na ƙungiyoyi marasa riba: fom ARTS-PB (amfanin jama'a), fom ARTS-RE (addini) da fom ARTS-MU (amfanin membobi). Kuɗin shigar da kowanne $30 ne lokacin da muka duba.",
            "Yawancin ƙungiyoyin agaji suna amfani da na amfanin jama'a. Coci ko hidimar addini na iya amfani da fom na addini. Na amfanin membobi na ƙungiyoyin da ke hidimar membobinsu ne, kamar wasu kulob-kulob, kuma bai dace da yawancin ƙungiyoyin agaji ba. Idan kuna shirin neman matsayin 501(c)(3), IRS tana buƙatar wasu kalmomi a takardar kafa kamfaninku game da manufarku da abin da zai faru da kadarorinku idan kun rufe. Ku karanta umarnin fom ɗin, kuma ku nemi lauyan ƙungiyoyi marasa riba ko cibiyar taimako ya duba shi.",
            "Kuna iya shigar da shi ta intanet a bizfile Online (bizfileonline.sos.ca.gov), ko ta wasiƙa, ko da kanku a ofis. Ku fara bincika sunan don ku tabbata ba wanda ke amfani da shi. Cikin kwana 90, kuna kuma shigar da Statement of Information (fom SI-100, $20), sannan kuma bayan kowace shekara biyu."
          ],
          steps: ["Ku bincika sunanku a bizfile Online.", "Ku zaɓi fom: ARTS-PB ga yawancin ƙungiyoyin agaji, ARTS-RE ga ƙungiyoyin addini.", "Ku cike shi da sunanku, manufarku da wakilin karɓar takardun shari'a.", "Ku shigar da shi ta intanet ku biya kuɗin da ke shafin hukuma.", "Ku sa Statement of Information (SI-100) a kalandarku: cikin kwana 90, sannan bayan kowace shekara biyu."],
          words: [["Takardar kafa kamfani (articles of incorporation)", "gajeriyar takarda da ke kafa kamfaninku a shari'ance."], ["Wakilin karɓar takardun shari'a (agent for service of process)", "mutum ko kamfanin da ya yarda ya karɓi takardun shari'a a madadin ƙungiyar."], ["Statement of Information", "fom da ke gaya wa jiha adireshinku da shugabanninku; ƙungiyoyi marasa riba suna shigar da SI-100."]],
          slides: [
            { title: "Fom uku na takardar kafa ƙungiya marar riba", bullets: ["ARTS-PB: amfanin jama'a (yawancin ƙungiyoyin agaji)", "ARTS-RE: addini", "ARTS-MU: amfanin membobi (yana hidimar membobi)"] },
            { title: "Kuɗaɗe lokacin da aka duba (27 Oktoba 2026)", bullets: ["Takardar kafa kamfani: $30", "Statement of Information SI-100: $20", "Koyaushe ku tabbatar a sos.ca.gov kafin ku biya"] },
            { title: "Yadda ake shigarwa", bullets: ["Ku fara bincika sunan", "Ku shigar ta intanet a bizfileonline.sos.ca.gov", "Ko ta wasiƙa, ko da kanku a ofis"] },
            { title: "Kada ku manta", bullets: ["SI-100 cikin kwana 90 bayan shigarwa", "Sannan bayan kowace shekara biyu", "Kalmomin 501(c)(3): a sa wani ya duba takardar kafa kamfani"] }
          ],
          sources: [SOS_ARTICLES, SOS_SI, BIZFILE],
          tryIt: "Ku buɗe shafin fom na Sakataren Gwamnati. Ku nemo fom ɗin takardar kafa kamfani da ya dace da ƙungiyarku, ku rubuta sunan fom ɗin da kuɗinsa na yanzu. Sannan ku nemo kuɗin SI-100 ku ƙara dukkansu a shirinku tare da ranar ƙarshe ta SI-100.",
          youCanNow: "zaɓar fom ɗin takardar kafa kamfani da ya dace, nemo kuɗinsa a shafin hukuma, da sa Statement of Information a kalanda.",
          quickCheck: [
            { objective: "O2", q: "Wane fom na takardar kafa kamfani ne bai dace da yawancin ƙungiyoyin agaji ba?", options: ["ARTS-PB", "ARTS-RE", "ARTS-MU (amfanin membobi)", "Babu ɗayansu da ya dace"], answer: 2, why: "Na amfanin membobi na ƙungiyoyin da ke hidimar membobinsu ne, kuma bai dace da yawancin ƙungiyoyin agaji ba." },
            { objective: "O2", q: "Kuna son sa wa ƙungiyarku suna \"Hope Kitchen.\" Me za ku yi kafin ku shigar da takarda?", options: ["Ku shigar nan take", "Ku tambayi AI ko sunan ba a amfani da shi", "Ku biya wani shafin intanet ya ajiye muku shi", "Ku fara bincika sunan don ku tabbata ba wanda ke amfani da shi"], answer: 3, why: "Ku fara bincika sunan don ku tabbata ba wanda ke amfani da shi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Samun EIN, dokokin cikin gida da taron farko na kwamiti",
          minutes: 5,
          goal: "Samun EIN kyauta lafiya da shirya taron farko na kwamitin gudanarwa.",
          text: [
            "EIN (Employer Identification Number) ita ce lambar harajin tarayya ta ƙungiyar. Kuna buƙatar ta don asusun banki, biyan albashi da takardun neman keɓewa daga haraji. IRS ta ce ba dole ne ku taɓa biyan kuɗi don EIN ba. Wasu shafukan intanet suna karɓar kuɗi a kanta: ku guje su, ku nema a irs.gov.",
            "Kayan aikin IRS na intanet yana buƙatar lambar Social Security ko ITIN ta mutumin da ke da alhaki (responsible party), kuma dole a gama shi a zama ɗaya. Ku rubuta waɗannan lambobin sirri a shafin IRS na hukuma kaɗai, ba a kayan AI, imel ko wani shafi kawai ba. Ku buga ko ajiye wasiƙar tabbatarwa.",
            "Dokokin cikin gida (bylaws) su ne ƙa'idodinku: yawan daraktoci, yadda ake zaɓensu, yadda tarurruka ke tafiya, da wanda ke sa hannu a cak. A taron farko na kwamiti, kwamitin yana amincewa da dokokin cikin gida, yana zaɓar shugabanni, yana amincewa da buɗe asusun banki, kuma yana amincewa da ƙa'idar rikicin muradu (conflict-of-interest policy). Ku rubuta bayanin taron (minutes) ku ajiye shi."
          ],
          steps: ["Ku jira har Sakataren Gwamnati ya karɓi takardar kafa kamfaninku.", "Ku je irs.gov ku nemi EIN da kayan aikin intanet na kyauta.", "Ku ajiye wasiƙar tabbatar da EIN a fayil ɗin takardunku.", "Ku rubuta daftarin dokokin cikin gida da ƙa'idar rikicin muradu.", "Ku yi taron farko na kwamiti ku rubuta bayanin taron."],
          words: [["EIN", "Employer Identification Number: lambar harajin tarayya ta kyauta ga ƙungiya."], ["Dokokin cikin gida (bylaws)", "rubutattun ƙa'idodin yadda ƙungiyar da kwamitinta ke gudana."], ["Bayanin taro (minutes)", "rubutaccen tarihin abin da kwamiti ya yanke a taro."], ["Ƙa'idar rikicin muradu (conflict-of-interest policy)", "ƙa'idodin abin da memban kwamiti dole ya yi idan wani hukunci zai iya amfanar shi da kansa."]],
          slides: [
            { title: "Lambar EIN ɗinku", bullets: ["Lambar harajin tarayya ta ƙungiyar", "Kyauta a irs.gov: kada ku taɓa biyan wani shafi a kanta", "Ana buƙatar ta don banki da fom ɗin keɓewa daga haraji"] },
            { title: "Ku kiyaye lambobin sirri", bullets: ["SSN ko ITIN tana shiga shafin IRS na hukuma kaɗai", "Ba a kayan AI, imel ko wasu shafuka ba", "Ku ajiye wasiƙar tabbatarwa"] },
            { title: "Taron farko na kwamiti", bullets: ["Amincewa da dokokin cikin gida", "Zaɓar shugabanni", "Amincewa da asusun banki", "Amincewa da ƙa'idar rikicin muradu"] }
          ],
          sources: [IRS_EIN],
          tryIt: "Ku yi ajandar taron farko mai abubuwa biyar: amincewa da dokokin cikin gida, zaɓar shugabanni, amincewa da asusun banki, amincewa da ƙa'idar rikicin muradu, da sa ranar taro na gaba. Ku ƙara \"Neman EIN a irs.gov (kyauta)\" a shirinku tare da rana bayan an karɓi takardar kafa kamfaninku.",
          youCanNow: "samun EIN lafiya kuma kyauta, da gudanar da taron farko na kwamiti da hukunce-hukuncen da suka dace a ajanda.",
          quickCheck: [
            { objective: "O3", q: "Don me kuke buƙatar EIN?", options: ["Asusun banki, biyan albashi da takardun neman keɓewa daga haraji", "Don sayen gini kaɗai", "Ga coci-coci kaɗai", "Babu komai; ado ne kawai"], answer: 0, why: "EIN ita ce lambar harajin tarayya ta ƙungiyar don banki, albashi da neman keɓewa." },
            { objective: "O3", q: "Kuna cike kayan aikin EIN na IRS a intanet kuma kuna buƙatar tsayawa a tsakiya. Me ya kamata ku sani?", options: ["Kuna iya ajiyewa ku gama mako mai zuwa", "Dole a gama shi a zama ɗaya", "AI zai iya gama muku shi", "Kuna iya aika sauran ga IRS ta imel"], answer: 1, why: "Dole a gama kayan aikin IRS na intanet a zama ɗaya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kafa kamfanin",
        questions: [
          { objective: "O1", q: "Wane ofishi ne ke kafa kamfani marar riba a California?", options: ["IRS", "Sakataren Gwamnatin California", "Babban Lauyan Gwamnati", "Magatakardar gunduma (county clerk)"], answer: 1, why: "Ana shigar da takardar kafa kamfani wurin Sakataren Gwamnati." },
          { objective: "O2", q: "Rumbun abinci (food pantry) da ke hidimar dukkan al'umma zai fi yiwuwa ya shigar da wane fom na takardar kafa kamfani?", options: ["ARTS-MU (amfanin membobi)", "ARTS-RE (addini)", "ARTS-PB (amfanin jama'a)", "Fom na kamfanin kasuwanci LLC"], answer: 2, why: "Ƙungiyoyin agaji da ke hidimar jama'a yawanci suna shigar da takardar amfanin jama'a." },
          { objective: "O3", q: "Wani shafin intanet ya ce zai samo muku EIN a $79. Me ya kamata ku yi?", options: ["Ku biya, ya fi sauri", "Ku nema kyauta a irs.gov", "Ku nemi Babban Lauyan Gwamnati ya biya", "Ku tsallake EIN"], answer: 1, why: "IRS ta ce EIN ba ta taɓa kashe kuɗi ba; ku nema a irs.gov." },
          { objective: "O2", q: "Yaushe ne ranar ƙarshe ta Statement of Information (SI-100) na farko?", options: ["Cikin kwana 90 bayan shigar da takardar kafa kamfani", "Sai lokacin da kuka rufe", "Bayan kowace shekara goma", "Ba a taɓa yi ga ƙungiyoyi marasa riba ba"], answer: 0, why: "Sakataren Gwamnati ya ce cikin kwana 90, sannan bayan kowace shekara biyu." },
          { objective: "O3", q: "Wanne ne aikin taron farko na kwamiti?", options: ["Shigar da 990-N", "Amincewa da dokokin cikin gida da zaɓar shugabanni", "Biyan kuɗin IRS", "Sabunta rajista wurin Babban Lauyan Gwamnati"], answer: 1, why: "Taron farko yana amincewa da dokokin cikin gida, yana zaɓar shugabanni, kuma yana amincewa da abubuwan farko kamar asusun banki." }
        ]
      }
    },
    {
      name: "Babi na 2: Keɓewa daga haraji, rajista da kuɗaɗe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Neman matsayin 501(c)(3) na tarayya",
          minutes: 6,
          goal: "Zaɓi tsakanin fom 1023 da fom 1023-EZ da sanin kuɗin.",
          text: [
            "Don zama ƙungiyar agaji ta 501(c)(3), yawancin ƙungiyoyi suna nema wurin IRS. Akwai fom biyu. Fom 1023 shi ne cikakken takardar nema; kuɗinsa $600 ne lokacin da muka duba. Fom 1023-EZ gajeren fom ne na ƙananan ƙungiyoyi; kuɗinsa $275 ne. Ana shigar da dukkansu ta intanet a Pay.gov, kuma ana biyan kuɗin a can lokacin da kuke shigarwa.",
            "Ba kowa ne zai iya amfani da 1023-EZ ba. IRS tana da takardar duba cancanta (eligibility worksheet) a ƙarshen umarnin fom 1023-EZ. Tana duba abubuwa kamar yawan kuɗin da kuke sa ran tarawa da kadarorinku. Ku cike takardar da gaskiya kafin ku zaɓa.",
            "Coci-coci suna da dokoki na musamman: IRS tana ɗaukar coci-coci daban da sauran ƙungiyoyin agaji, kuma da yawa ba dole ne su nema ba, ko da yake wasu suna zaɓar nema. Ku karanta IRS Publication 1828 ko ku tambayi ƙwararre. Idan IRS ta amince da ku, tana aiko da wasiƙar amincewa (determination letter). Ku ajiye ta har abada: masu ba da gudummawa, masu ba da tallafi (grant) da jiha za su nema."
          ],
          steps: ["Ku buɗe umarnin fom 1023-EZ a irs.gov ku cike takardar duba cancanta.", "Idan kun cancanta kuma ya dace, ku shirya 1023-EZ; idan ba haka ba, ku shirya fom 1023.", "Ku buɗe asusu a Pay.gov ku cike fom ɗin a can.", "Ku biya kuɗin da ke shafin kuɗaɗen IRS.", "Ku ajiye wasiƙar amincewa idan ta iso."],
          words: [["Fom 1023", "cikakken takardar neman matsayin 501(c)(3) na IRS."], ["Fom 1023-EZ", "gajeriyar takardar nema ta IRS ga ƙananan ƙungiyoyin da suka ci takardar duba cancanta."], ["Kuɗin nema (user fee)", "kuɗin da IRS ke karɓa don duba takardar nema."], ["Wasiƙar amincewa (determination letter)", "wasiƙar IRS da ke cewa an keɓe ƙungiyarku daga haraji."]],
          slides: [
            { title: "Fom biyu na tarayya", bullets: ["Fom 1023: cikakken nema, kuɗi $600", "Fom 1023-EZ: gajeren fom, kuɗi $275", "Kuɗaɗe lokacin da aka duba, 27 Oktoba 2026: ku tabbatar a irs.gov"] },
            { title: "Wanne?", bullets: ["Ku cike takardar duba cancanta a umarnin 1023-EZ", "Kun cancanta kuma ya dace: 1023-EZ", "Ba ku cancanta ba: fom 1023"] },
            { title: "Yadda ake shigarwa", bullets: ["Ta intanet a Pay.gov", "Ku biya kuɗin lokacin da kuke shigarwa"] },
            { title: "Coci-coci da wasiƙar", bullets: ["Coci-coci suna da dokoki na musamman: duba IRS Publication 1828", "Ku ajiye wasiƙar amincewa har abada"] }
          ],
          sources: [IRS_FEE, IRS_1023, IRS_1023EZ, IRS_CHURCH],
          tryIt: "Ku buɗe umarnin fom 1023-EZ a irs.gov ku karanta takardar duba cancanta. Ku yanke wane fom ne ƙungiyarku za ta shigar, sannan ku ƙara wannan fom, kuɗin daga shafin kuɗaɗen IRS, da ranar da kuke nufi a shirinku.",
          youCanNow: "zaɓi tsakanin fom 1023 da 1023-EZ, nemo kuɗin na yanzu, da sanin inda ake shigar da shi.",
          quickCheck: [
            { objective: "O4", q: "Yaushe ake biyan kuɗin IRS na fom 1023 ko 1023-EZ?", options: ["Shekara ɗaya bayan amincewa", "Da cak ga Sakataren Gwamnati", "A Pay.gov lokacin da kuke shigarwa", "Ba a taɓa biya ba"], answer: 2, why: "Ana shigar da dukkan fom biyun ta intanet a Pay.gov, kuma ana biyan kuɗin a can lokacin shigarwa." },
            { objective: "O4", q: "IRS ta aiko da wasiƙar amincewarku. Me za ku yi da ita?", options: ["Ku jefar da ita bayan shekara ɗaya", "Ku ba wani mai gudummawa kwafin da kuke da shi kaɗai", "Ku liƙa ta a AI", "Ku ajiye ta har abada, domin masu gudummawa, masu ba da tallafi da jiha za su nema"], answer: 3, why: "Ku ajiye wasiƙar amincewa har abada; mutane da yawa za su nema." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Keɓewar California da Registry of Charities",
          minutes: 5,
          goal: "Shirya keɓewa daga Franchise Tax Board da rajista wurin Babban Lauyan Gwamnati.",
          text: [
            "Amincewar tarayya kaɗai ba ta keɓe ku daga harajin California ba. Kuna kuma nema wurin Franchise Tax Board (FTB). Fom 3500 shi ne cikakken takardar nema ta California. Fom 3500A gajeren fom ne ga ƙungiyoyin da suka riga suka sami wasiƙar amincewa ta IRS. Ku duba ftb.ca.gov don fom na yanzu, umarni da kowane kuɗi kafin ku shigar, domin ba mu iya tabbatar da kuɗin a shafin FTB don wannan kwas ba.",
            "Ƙungiyoyin agaji da ke riƙe ko tara kuɗi don ayyukan agaji a California suna kuma yin rajista a Registry of Charities na Babban Lauyan Gwamnati. Kuna yin rajista ta intanet da fom CT-1 cikin kwana 30 bayan kun fara karɓar kadarorin agaji, kamar gudummawarku ta farko. Kuɗin $50 ne lokacin da muka duba. Kuna loda takardar kafa kamfaninku, dokokin cikin gida, wasiƙar amincewa ta IRS (ko EIN ɗinku idan ba ku da wasiƙar tukuna) da fom 1023 ko 1023-EZ idan kun shigar da ɗaya.",
            "Wasu ƙungiyoyi na iya zama an keɓe su daga rajistar Registry. Idan kuna tsammanin naku yana cikinsu (misali, ƙungiyar addini), ku karanta shafukan Registry ko ku tambayi Registry kafin ku tsallake shi."
          ],
          steps: ["Bayan wasiƙar IRS ta iso, ku shirya fom 3500A a ftb.ca.gov (ko fom 3500 idan kuna nema ba tare da ita ba).", "Ku rubuta ranar da kuka fara karɓar gudummawa ko wata kadarar agaji.", "Cikin kwana 30 daga wannan rana, ku yi rajista ta intanet da fom CT-1.", "Ku loda takardar kafa kamfani, dokokin cikin gida, wasiƙar IRS ko EIN, da 1023 ko 1023-EZ ɗinku.", "Ku biya kuɗin Registry da ke oag.ca.gov."],
          words: [["Franchise Tax Board (FTB)", "hukumar harajin jihar California."], ["Fom 3500A", "gajeren fom na keɓewar California ga ƙungiyoyin da suka riga suka sami wasiƙar 501(c)(3) ta tarayya."], ["Registry of Charities", "ofishin Babban Lauyan Gwamnati da ke yi wa ƙungiyoyin agaji rajista kuma yana sa ido a kansu a California."], ["CT-1", "fom ɗin rajistar farko na ƙungiyoyin agaji na Babban Lauyan Gwamnati."]],
          slides: [
            { title: "Keɓewa daga harajin California (FTB)", bullets: ["Daban da amincewar IRS", "Fom 3500: cikakken nema", "Fom 3500A: idan kun riga kun sami wasiƙar IRS", "Ku duba ftb.ca.gov don kuɗin na yanzu"] },
            { title: "Registry of Charities (Babban Lauyan Gwamnati)", bullets: ["Fom CT-1, ta intanet", "Cikin kwana 30 bayan kun fara karɓar kadarorin agaji", "Kuɗi: $50 lokacin da aka duba, 27 Oktoba 2026"] },
            { title: "Ku shirya waɗannan don CT-1", bullets: ["Takardar kafa kamfani da dokokin cikin gida", "Wasiƙar amincewa ta IRS, ko EIN idan babu ita tukuna", "Fom 1023 ko 1023-EZ ɗinku, idan kun shigar"] }
          ],
          sources: [FTB, AG_INITIAL],
          tryIt: "Ku ƙara layuka biyu a shirinku: keɓewar FTB (sunan fom, \"duba kuɗi a ftb.ca.gov\", ranar da kuke nufi bayan wasiƙar IRS) da CT-1 na Babban Lauyan Gwamnati ($50, cikin kwana 30 bayan gudummawarku ta farko). Ku yi jerin takardu huɗu da za ku loda.",
          youCanNow: "shirya keɓewarku daga harajin California da rajistarku a Registry of Charities da fom, lokaci da takardun da suka dace.",
          quickCheck: [
            { objective: "O5", q: "Wane fom ne cikakken takardar neman keɓewar California?", options: ["Fom 3500", "Fom CT-1", "Fom SI-100", "Fom RRF-1"], answer: 0, why: "Fom 3500 shi ne cikakken nema na California; 3500A shi ne gajere." },
            { objective: "O5", q: "Hidimar addininku tana tsammanin an keɓe ta daga rajistar Registry. Me za ku yi?", options: ["Ku tsallake ba tare da dubawa ba", "Ku karanta shafukan Registry ko ku tambayi Registry kafin ku tsallake", "Ku tambayi aboki", "Ku yi rajista wurin IRS a maimakon haka"], answer: 1, why: "Ku duba shafukan Registry ko ku tambayi Registry kafin ku tsallake rajista." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ci gaba a kyakkyawan matsayi da kasafin kuɗin kafawa",
          minutes: 6,
          goal: "Yin kasafin kuɗin farawa da kalandar takardun shekara-shekara.",
          text: [
            "Farawa ba shi ne ƙarshe ba. Kowace shekara kuna shigar da takarda wurin IRS: ƙananan ƙungiyoyin da kuɗin shigarsu (gross receipts) yawanci $50,000 ko ƙasa da haka suna iya shigar da fom 990-N e-Postcard; manya kuma suna shigar da fom 990-EZ ko 990. Idan kun rasa shekara uku a jere, IRS tana cire keɓewarku daga haraji kai tsaye.",
            "Kowace shekara kuma kuna sabunta rajista wurin Babban Lauyan Gwamnati da fom RRF-1. Kuɗin ya dogara da jimillar kuɗin shiga: lokacin da muka duba, $25 ne ƙasa da $50,000, $50 daga $50,000 zuwa $100,000, $75 kuma daga $100,001 zuwa $250,000, yana ƙaruwa ga manyan ƙungiyoyi. Ranar ƙarshensa wata 4 da kwana 15 ne bayan shekarar kuɗinku ta ƙare (15 ga Mayu idan shekararku ta ƙare 31 ga Disamba). Kuna kuma da Statement of Information bayan kowace shekara biyu, da takardun shekara-shekara na California wurin FTB: ku duba ftb.ca.gov don fom ɗin da ya dace da ku.",
            "Kuɗaɗen gwamnati na farawa, kamar yadda aka duba: takardar kafa kamfani $30, Statement of Information $20, EIN kyauta, IRS $275 (1023-EZ) ko $600 (1023), Registry $50, da kowane kuɗin FTB. Wannan kusan $375 ne da 1023-EZ ko $700 da fom 1023, kafin kowane kuɗin FTB, sabis na wakili mai rajista (registered agent) ko lauya. Ku yi amfani da AI don taimakon rubuta teburin kasafi ko jerin tunatarwa, amma ku duba kowace lamba a shafin hukuma."
          ],
          steps: ["Ku jera kowane kuɗin farawa daga shafukan hukuma.", "Ku haɗa su bisa zaɓin fom ɗinku (1023-EZ ko 1023).", "Ku ƙara takardun shekara-shekara: jerin 990 na IRS, RRF-1 na Babban Lauyan Gwamnati, takardar shekara ta FTB.", "Ku ƙara Statement of Information bayan kowace shekara biyu.", "Ku sa kowace ranar ƙarshe a kalandar da ake rabawa tare da tunatarwa biyu."],
          words: [["Fom 990-N", "e-Postcard na IRS: gajeren sanarwa ta intanet ta shekara-shekara ga ƙananan ƙungiyoyin da aka keɓe."], ["RRF-1", "fom ɗin sabunta rajista na shekara-shekara na ƙungiyoyin agaji wurin Babban Lauyan Gwamnati."], ["Shekarar kuɗi (fiscal year)", "lokacin wata 12 da ƙungiyarku ke amfani da shi don littattafan kuɗinta, sau da yawa daga Janairu zuwa Disamba."], ["Kyakkyawan matsayi (good standing)", "kasancewa a kan lokaci da dukkan takardu da kuɗaɗen da ake buƙata."]],
          slides: [
            { title: "Kowace shekara", bullets: ["IRS: 990-N, 990-EZ ko 990", "Babban Lauyan Gwamnati: RRF-1, kuɗi bisa kuɗin shiga", "FTB: ku duba ftb.ca.gov don fom ɗinku na shekara"] },
            { title: "Ku yi hankali", bullets: ["Rasa takardar IRS shekara 3 a jere: kuna rasa keɓewa", "RRF-1: wata 4 da kwana 15 bayan ƙarshen shekara", "SI-100 bayan kowace shekara biyu"] },
            { title: "Kuɗaɗen farawa (an duba 27 Oktoba 2026)", bullets: ["Takardar kafa kamfani $30 + SI-100 $20 + EIN kyauta", "IRS: $275 (1023-EZ) ko $600 (1023)", "Registry CT-1 $50, da kowane kuɗin FTB"] },
            { title: "Jimillarku", bullets: ["Kusan $375 da 1023-EZ, $700 da 1023", "Kafin kuɗin FTB, sabis na wakili ko lauya", "Ku tabbatar da kowane kuɗi a shafin hukuma"] }
          ],
          sources: [IRS_990N, AG_RENEW, SOS_SI, IRS_FEE, SOS_ARTICLES, AG_INITIAL, FTB],
          tryIt: "Aikin ƙarshe: ku kammala shirin kafawarku na shafi ɗaya. Ku yi tebur mai kowace takarda a jere, ofishin, fom ɗin, kuɗin daga shafin hukuma, da ranar da kuke nufi. Ku ƙara takardun shekara-shekara da ranakun ƙarshensu, jimillar kuɗin farawa, da hanyar haɗin hukuma ta kowane layi.",
          youCanNow: "yin cikakken shirin kafa ƙungiya marar riba a California mai kuɗaɗe da kalandar shekara da ke riƙe ƙungiyar a kyakkyawan matsayi.",
          quickCheck: [
            { objective: "O6", q: "Wace takardar shekara-shekara ce ke zuwa wurin Babban Lauyan Gwamnati?", options: ["Fom 990-N", "Fom 1023", "Fom RRF-1", "Fom ARTS-PB"], answer: 2, why: "Kowace shekara kuna sabunta rajista wurin Babban Lauyan Gwamnati da fom RRF-1." },
            { objective: "O6", q: "AI ya rubuta daftarin teburin kasafin kuɗin farawarku. Me za ku yi da kuɗaɗen da ke ciki?", options: ["Ku amince da su; AI yana da sabon bayani", "Ku ƙara musu", "Ku bar su babu komai", "Ku duba kowace lamba a shafin hukuma"], answer: 3, why: "Ku yi amfani da AI don rubuta teburin, amma ku duba kowace lamba a shafin hukuma." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Keɓewa daga haraji, rajista da kuɗaɗe",
        questions: [
          { objective: "O4", q: "Nawa ne kuɗin IRS na fom 1023 da fom 1023-EZ lokacin da aka duba?", options: ["$100 da $50", "$600 da $275", "Kyauta ga dukkansu", "$1,000 da $500"], answer: 1, why: "Shafin kuɗaɗen IRS ya nuna $600 na fom 1023 da $275 na fom 1023-EZ." },
          { objective: "O5", q: "Ƙungiyarku ta riga ta sami wasiƙar amincewa ta IRS. Wane fom na California aka yi saboda ku?", options: ["Fom 3500A", "Fom CT-1", "Fom SI-100", "Fom 990-N"], answer: 0, why: "Fom 3500A gajeren fom na FTB ne ga ƙungiyoyin da suka riga suka sami wasiƙar tarayya." },
          { objective: "O5", q: "Kun sami gudummawarku ta farko ranar 1 ga Maris. Yaushe dole ku yi rajista a Registry of Charities?", options: ["Cikin kwana 30", "Cikin shekara 2", "Sai bayan kun tara $50,000", "Ba a taɓa yi ba"], answer: 0, why: "Babban Lauyan Gwamnati ya ce ku yi rajista cikin kwana 30 bayan kun fara karɓar kadarorin agaji." },
          { objective: "O6", q: "Me zai faru idan kun rasa takardar shekara-shekara ta IRS shekara uku a jere?", options: ["Babu komai", "Tarar $10", "Rasa keɓewa daga haraji kai tsaye", "EIN ɗinku zai canja"], answer: 2, why: "IRS tana cire keɓewa kai tsaye bayan shekara uku a jere ba tare da shigar da takarda ba." },
          { objective: "O6", q: "Ƙungiyar agaji mai jimillar kuɗin shiga $40,000 tana sabunta rajista wurin Babban Lauyan Gwamnati. Nawa ne kuɗin RRF-1 lokacin da aka duba?", options: ["$200", "$100", "$75", "$25"], answer: 3, why: "Jadawalin RRF-1 ya nuna $25 ga jimillar kuɗin shiga ƙasa da $50,000." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kafa Ƙungiya Marar Riba a California, Har da Kuɗaɗen da Ake Kashewa",
    questions: [
      { objective: "O1", q: "Zama kamfani marar riba da samun keɓewa daga haraji:", options: ["Mataki ɗaya ne", "Al'amuran tarayya ne kaɗai", "Ana buƙatar su ga coci-coci kaɗai", "Matakai ne daban-daban a ofisoshi daban-daban"], answer: 3, why: "Jiha ce ke kafa kamfanin; IRS da FTB kuma suna ba da keɓewa daban." },
      { objective: "O1", q: "Wanne ne ke zuwa farko?", options: ["Rajista wurin Babban Lauyan Gwamnati", "Shigar da takardar kafa kamfani wurin Sakataren Gwamnati", "Shigar da fom 3500A", "Shigar da RRF-1"], answer: 1, why: "Dole kamfanin ya kasance kafin sauran takardu." },
      { objective: "O1", q: "Wane ofishi ne ke kula da Registry of Charities?", options: ["IRS", "Franchise Tax Board", "Babban Lauyan Gwamnatin California", "Sakataren Gwamnati"], answer: 2, why: "Registry of Charities wani ɓangare ne na ofishin Babban Lauyan Gwamnati." },
      { objective: "O2", q: "Yawancin ƙungiyoyin agaji a California suna shigar da wane irin takardar kafa kamfani?", options: ["Amfanin membobi", "Kamfanin hannun jari na gama-gari", "LLC", "Amfanin jama'a"], answer: 3, why: "Kamfanonin amfanin jama'a suna hidimar jama'a, wanda ya dace da yawancin ƙungiyoyin agaji." },
      { objective: "O2", q: "Nawa ne kuɗin Sakataren Gwamnati na takardar kafa ƙungiya marar riba lokacin da aka duba?", options: ["$30", "$300", "$600", "Kyauta"], answer: 0, why: "Shafin fom ya nuna $30 na ARTS-PB, ARTS-RE da ARTS-MU." },
      { objective: "O2", q: "A ina za ku iya shigar da takardar kafa kamfani ta intanet?", options: ["Pay.gov", "irs.gov", "Kowane kayan AI", "bizfileonline.sos.ca.gov"], answer: 3, why: "bizfile Online shi ne shafin shigar da takardu ta intanet na Sakataren Gwamnati." },
      { objective: "O2", q: "Bayan na farko, sau nawa ake shigar da Statement of Information (SI-100) na ƙungiya marar riba?", options: ["Kowane wata", "Kowace shekara", "Bayan kowace shekara biyu", "Ba za a sake ba"], answer: 2, why: "Sakataren Gwamnati ya ce bayan kowace shekara biyu." },
      { objective: "O3", q: "Nawa IRS ke karɓa don EIN?", options: ["$50", "$25", "Ya dogara da jiharku", "Babu komai"], answer: 3, why: "IRS ta ce ba dole ne ku taɓa biyan kuɗi don EIN ba." },
      { objective: "O3", q: "A ina ya kamata ku rubuta lambar Social Security ta mutumin da ke da alhaki don EIN?", options: ["A shafin IRS na hukuma kaɗai", "A mataimakin AI don ya duba ta", "A imel na rukuni ga kwamiti", "A kowane shafi da ke cewa zai taimaka"], answer: 0, why: "Lambobin sirri suna shiga shafin hukumar na hukuma kaɗai." },
      { objective: "O3", q: "Wane hukunci ne na taron farko na kwamiti?", options: ["Shigar da 990-N", "Amincewa da ƙa'idar rikicin muradu", "Biyan RRF-1", "Samun wasiƙar IRS"], answer: 1, why: "Taron farko yana amincewa da dokokin cikin gida da ƙa'idoji, kuma yana zaɓar shugabanni." },
      { objective: "O4", q: "Yaya za ku yanke ko za ku iya amfani da fom 1023-EZ?", options: ["Ku tambayi kowane shafin intanet", "Ku zaɓi wanda ya fi araha", "Babban Lauyan Gwamnati ne ke yanke shawara", "Ku cike takardar duba cancanta ta IRS a umarnin 1023-EZ"], answer: 3, why: "Takardar duba cancanta ta IRS ce ke yanke wanda zai iya amfani da gajeren fom." },
      { objective: "O4", q: "A ina ake shigar da fom 1023 da 1023-EZ?", options: ["Ta fax zuwa Sacramento", "A ofishin gunduma", "Ta intanet a Pay.gov", "A bizfile Online"], answer: 2, why: "IRS ta ce ana cike dukkansu kuma a biya a Pay.gov." },
      { objective: "O4", q: "Me wasiƙar amincewa ta IRS ke nunawa?", options: ["An amince da sunan kamfaninku", "An keɓe ƙungiyarku daga haraji a dokar tarayya", "Kun biya kuɗin Registry", "Lambar EIN ɗinku"], answer: 1, why: "Wasiƙar amincewa tana tabbatar da keɓewa daga harajin tarayya." },
      { objective: "O4", q: "Wata coci tana son sanin ko dole ta shigar da fom 1023. A ina ya kamata ta fara dubawa?", options: ["IRS Publication 1828 ko ƙwararre", "Wani rubutu a kafar sada zumunta", "Ofishin motoci (DMV)", "Fom SI-100"], answer: 0, why: "Coci-coci suna da dokoki na musamman na IRS da aka bayyana a Publication 1828." },
      { objective: "O5", q: "Bayan amincewar tarayya, ƙungiya marar riba ta California tana keɓe daga harajin jiha:", options: ["Kai tsaye", "Sai bayan FTB ta amince (fom 3500 ko 3500A)", "Sai idan coci ce", "Ba za ta taɓa keɓewa ba"], answer: 1, why: "Keɓewar California wata takardar nema ce daban wurin Franchise Tax Board." },
      { objective: "O5", q: "Wadanne takardu kuke lodawa don CT-1 na Babban Lauyan Gwamnati?", options: ["Takardar kafa kamfani, dokokin cikin gida, wasiƙar IRS ko EIN, da 1023 ɗinku idan kun shigar", "Hoton katin shaida kaɗai", "Sunaye da adireshin masu gudummawa", "Kalmar sirrin bankinku"], answer: 0, why: "Registry yana neman takardun kafawa, dokokin cikin gida, wasiƙar IRS ko EIN da takardar neman keɓewa." },
      { objective: "O5", q: "Nawa ne kuɗin rajistar farko ta Registry lokacin da aka duba?", options: ["$25", "$50", "$275", "$600"], answer: 1, why: "Shafin rajistar farko ya nuna kuɗi $50." },
      { objective: "O6", q: "Kuɗin shigar wata ƙaramar ƙungiyar agaji (gross receipts) yawanci $50,000 ne ko ƙasa da haka. Wace takardar shekara ta IRS za ta iya amfani da ita yawanci?", options: ["Fom 1023", "Fom 990-N e-Postcard", "Fom CT-1", "Fom ARTS-PB"], answer: 1, why: "IRS tana barin yawancin ƙananan ƙungiyoyi ƙasa da wannan adadi su shigar da 990-N." },
      { objective: "O6", q: "Shekarar kuɗinku tana ƙarewa 31 ga Disamba. Yaushe ne ranar ƙarshe ta RRF-1 yawanci?", options: ["1 ga Janairu", "1 ga Maris", "15 ga Mayu", "31 ga Disamba"], answer: 2, why: "Ranar ƙarshensa wata 4 da kwana 15 ne bayan ƙarshen shekara, wato 15 ga Mayu." },
      { objective: "O6", q: "Bisa kuɗaɗen da aka duba, kusan nawa ne kuɗaɗen gwamnati na farawa da fom 1023-EZ, kafin kowane kuɗin FTB?", options: ["Kusan $375", "Kusan $50", "Kusan $1,500", "Babu komai"], answer: 0, why: "$30 takardar kafa kamfani + $20 SI-100 + $275 1023-EZ + $50 CT-1 = $375, EIN kuma kyauta." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      7,
      10,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Takardu a jere",
        objective: "O1",
        notYet: "Wata takarda ta ɓace ko ba ta cikin jerin da ya dace.",
        meets: "An jera kowace takardar kafawa a jerin da ya dace tare da ofishinta.",
        exceeds: "An rubuta dalilin da yasa jerin yake da muhimmanci a aƙalla matakai biyu."
      },
      {
        name: "Fom ɗin da suka dace",
        objective: "O2",
        notYet: "An ambaci fom ɗin da bai dace ba, kamar takardar amfanin membobi ga ƙungiyar agaji.",
        meets: "Kowace takarda tana da sunan fom ɗin da ya dace, har da takardar kafa kamfani, SI-100, 1023 ko 1023-EZ, 3500 ko 3500A, da CT-1.",
        exceeds: "An bayyana zaɓin tsakanin 1023 da 1023-EZ ta amfani da takardar duba cancanta."
      },
      {
        name: "Kuɗaɗen hukuma da hanyoyin haɗi",
        objective: "O6",
        notYet: "An yi hasashen wani kuɗi ko babu hanyar haɗi.",
        meets: "Kowane kuɗi ya fito daga shafin hukuma, da hanyar haɗi, kuma an haɗa jimillar kuɗin farawa.",
        exceeds: "An rubuta ranar da aka duba kowane kuɗi."
      },
      {
        name: "Ranakun da aka shirya",
        objective: "O5",
        notYet: "Babu ranakun shigarwa da aka shirya, ko an rasa wa'adin kwana 30 na Registry da kwana 90 na SI-100.",
        meets: "Akwai ranar da aka shirya ga kowace takarda da ta cika kowane wa'adi.",
        exceeds: "An ambaci wanda ke cikin kwamiti da ke da alhakin kowace takarda."
      },
      {
        name: "Kalandar shekara",
        objective: "O6",
        notYet: "Takardun shekara-shekara sun ɓace.",
        meets: "Takardar shekara ta IRS, RRF-1, Statement of Information na kowace shekara biyu da takardun FTB, tare da ranakun ƙarshe.",
        exceeds: "An sa ranakun ƙarshe a matsayin tunatarwar kalanda ga kwamiti."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kafawa da suka shigar da takardar kafa kamfani cikin kwana 90 (binciken biyo baya)",
      "Ƙungiyoyin da suka sami wasiƙar amincewa ta IRS kuma suka yi rajista a Registry of Charities",
      "Ƙungiyoyin da har yanzu suke a kyakkyawan matsayi bayan shekara ɗaya, da takardun shekara-shekara a kan lokaci"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Hanyoyin haɗi zuwa shafukan hukuma: Sakataren Gwamnati, IRS, Pay.gov, Franchise Tax Board da Registry of Charities na Babban Lauyan Gwamnati",
      "Spreadsheet ko takarda don teburin shirin kafawa",
      "Kusan minti 60 gaba ɗaya, da lokacin duba kuɗaɗe a shafukan hukuma"
    ],
    facilitatorNotes: [
      "Ku sa masu koyo su duba kowane kuɗi a shafin hukuma a lokacin zaman, domin kuɗaɗe suna canjawa.",
      "Ku gayyaci lauyan ƙungiyoyi marasa riba ko mai aikin sa-kai na cibiyar taimako don amsa tambayoyi game da kalmomin takardar kafa kamfani da dokokin coci-coci.",
      "Ku tunatar da masu koyo kada su taɓa rubuta lambobin Social Security ko ITIN a kayan AI ko imel.",
      "Masu koyo da ba su da ƙungiya ta gaske za su iya yin shirin atisaye na wata ƙungiyar agaji ta misali.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
