"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-cybersecurity-careers.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-ai-cybersecurity-careers-ha",
  lang: "ha",
  translationOf: "veterans-ai-cybersecurity-careers",
  category: "Veterans (military)",
  name: "Ayyukan AI da Tsaron Intanet (Cybersecurity)",
  skills: "Faɗin ayyukan tsaron intanet na farko, Fassara ƙwarewar tsaro ta soja, Nemo horon tsaron intanet na hukuma, Karatun tsaro da AI, Duba imel mai shakku",
  outcome: "zaɓar aikin tsaron intanet na farko da ya dace da ƙwarewarku ta soja, amfani da mataimakin AI lafiya don karatu da duba imel mai shakku, da rubuta gajeren rahoton abin da ya faru da layukan CV da ke tabbatar da hakan.",
  about: [
    "Tsofaffin sojoji da yawa sun riga sun yi tunani kamar ƙwararrun tsaro: kun kare bayanai, kun bi dokokin shiga, kun yi gadi, kuma kun ba da rahoton duk abin da ba daidai ba. Masu ɗaukar aiki a tsaron intanet suna buƙatar irin wannan tunani.",
    "A wannan kwas za ku koyi manyan ayyukan tsaron intanet na farko, yadda AI ke canja su, yadda ake fassara aikinku na soja zuwa kalmomin tsaron intanet, inda za ku sami horo na hukuma, da yadda ake amfani da AI a matsayin abokin karatu. A ƙarshe za ku duba imel mai shakku kamar yadda ƙaramin mai bincike (analyst) zai yi.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Babu kutse (hacking) a ciki: kuna atisaye ne kawai da misalai na ƙirƙira masu aminci."
  ],
  finalTask: "Ku ɗauki imel mai shakku (na gaske daga akwatin spam ɗinku bayan kun cire bayanan sirri, ko misali na ƙirƙira), ku yi amfani da mataimakin AI don taimaka muku jera alamun gargaɗinsa ba tare da danna komai ba, sannan ku rubuta rahoto mai layi biyar: abin da ya zo, alamun gargaɗi, haɗarin, abin da kuka yi, da abin da kuke ba da shawara. Sannan ku rubuta layukan CV guda biyu da ke haɗa ƙwarewarku ta soja da aikin tsaron intanet.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da sojojin da ke barin aiki waɗanda suke son aikin tsaron intanet na farko. Da yawa sun kare bayanai, sun bi dokokin shiga, sun yi gadi, ko sun yi aiki a sadarwa ko IT lokacin da suke aikin soja.",
    startingPoint: "Suna zuwa da tunanin tsaro (OPSEC, ikon shiga, ba da rahoto) kuma suna iya amfani da kwamfuta da imel. Yawancinsu ba su san sunayen ayyukan tsaron intanet na farar hula ba, hanyoyin horo, ko yadda ake bayanin aikinsu da kalmomin tsaron intanet, kuma kaɗan ne suka yi amfani da AI a matsayin abokin karatu.",
    gap: "Masu ɗaukar aiki a tsaron intanet suna buƙatar mutanen da za su iya kare bayanai da kuma auna amsoshin AI, yayin da maharan yanzu suke amfani da AI don rubuta zamba masu kama da gaskiya. Masu koyo suna buƙatar zaɓar aikin farko, nemo horon hukuma, yin karatu lafiya da AI, duba imel mai shakku ba tare da danna komai ba, da nuna ƙwarewarsu a rahoton abin da ya faru da layukan CV.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomin tsaron intanet",
      "Na'urori: kwamfuta ta fi kyau don ɗora linzami (mouse) kan hanyar haɗi; waya ta zamani tana aiki don yawancin darussa",
      "Tsaro: kada a taɓa danna hanyar haɗi mai shakku; kada a taɓa saka bayanan kamfani na gaske (logs), kalmomin sirri ko bayanan sirri a kayan AI na jama'a",
      "Ana jera izinin tsaro (security clearance) ne kawai yadda ofishin tsaro ya yarda",
      "Adadin tallafi da jerin shirye-shirye suna canjawa, don haka masu koyo suna dubawa a va.gov da NICCS kai tsaye"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gabatarwa ga AI da Makomar Ma'aikata\" yana taimakon masu koyo da ba su saba da mataimakan AI ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tallace-tallacen aiki na gaske a yankinku", action: "bayanin ayyukan tsaron intanet na farko guda uku da yadda AI ke canja su", standard: "da jimla ɗaya ga kowanne, ta amfani da tallace-tallacen" },
    { id: "O2", condition: "Idan aka ba ku ayyukan tsaro daga aikinku na soja", action: "rubuta ƙwarewar tsaron intanet guda uku da kuke da su da kalmomin farar hula, da daidaita su da wani aiki a NICCS Cyber Career Pathways", standard: "tare da jera bayanan izinin tsaro ne kawai yadda ofishin tsaronku ya yarda" },
    { id: "O3", condition: "Don aikin tsaron intanet da kuke so", action: "nemo hanyar horo ɗaya da duba a shafukan hukuma abin da VA zai iya biya", standard: "kuna tabbatar da cewa shirin ya cancanta kafin ku fara" },
    { id: "O4", condition: "Idan aka ba ku wani ra'ayin tsaro kamar CIA triad", action: "amfani da mataimakin AI don koyon ra'ayin da sake bayaninsa da kalmominku", standard: "ta amfani da misalai na ƙirƙira kawai, AI kuma ya tabbatar da bayaninku" },
    { id: "O5", condition: "Idan aka ba ku imel mai shakku", action: "jera alamun gargaɗinsa da zaɓar matakin da ya fi aminci", standard: "ba tare da danna komai ba, kuma an maye gurbin bayanan sirri da madadi kafin amfani da AI" },
    { id: "O6", condition: "Don imel ɗin da kuka duba da aikinku na soja", action: "rubuta rahoto mai layi biyar da layukan CV guda biyu da ke haɗa aikinku na soja da aikin tsaron intanet", standard: "gajere, a sarari kuma na gaskiya, yana ƙarewa da abin da kuke ba da shawara" }
  ],
  chapters: [
    {
      name: "Babi na 1: Hanyarku zuwa tsaron intanet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ayyukan tsaron intanet da yadda AI ke canja su",
          minutes: 5,
          goal: "Faɗin ayyukan tsaron intanet na farko guda uku da abin da kowanne ke yi a kullum.",
          text: [
            "Tsaron intanet (cybersecurity) yana nufin kare kwamfutoci, hanyoyin sadarwa (networks) da bayanai daga mutanen da suke son sata, canjawa ko lalata su.",
            "Ayyukan farko da aka saba sun haɗa da: mai bincike a cibiyar ayyukan tsaro (SOC analyst), wanda ke kallon faɗakarwa (alerts) yana duba ko hare-hare ne na gaske; ma'aikacin taimakon IT mai ayyukan tsaro, wanda ke buɗe asusu yana gyara matsalolin shiga; da mai bincike a GRC (governance, risk and compliance), wanda ke duba cewa ƙungiya tana bin dokokinta na tsaro.",
            "Yanzu AI yana taimakawa wajen tace faɗakarwa, taƙaita bayanan rajista (logs) da gano abubuwan da ba a saba gani ba. Maharan ma suna amfani da AI, misali don rubuta imel na zamba masu kama da gaskiya. Saboda haka masu ɗaukar aiki suna son mutanen da za su iya amfani da kayan AI kuma su iya gane abin da yake gaskiya."
          ],
          words: [["SOC", "security operations center (cibiyar ayyukan tsaro): ƙungiyar da ke kallon hare-hare da mayar da martani."], ["Faɗakarwa (alert)", "gargaɗin da kayan tsaro ke bayarwa idan ya ga wani abu da ba a saba gani ba."], ["GRC", "governance, risk and compliance: tabbatar da cewa ƙungiya tana bin dokokinta na tsaro da dokokin ƙasa."]],
          slides: [
            { title: "Mene ne tsaron intanet", bullets: ["Kare kwamfutoci, hanyoyin sadarwa da bayanai", "Daga masu sata, canjawa ko lalata su"] },
            { title: "Ayyukan farko guda uku", bullets: ["SOC analyst: yana duba faɗakarwa", "Taimakon IT mai ayyukan tsaro: asusu da shiga", "GRC analyst: yana duba ana bin dokoki"] },
            { title: "AI a ɓangarorin biyu", bullets: ["Masu kariya: tace faɗakarwa, taƙaita logs", "Maharan: rubuta imel na zamba masu kama da gaskiya", "Masu ɗaukar aiki suna son masu amfani da AI kuma su auna shi"] }
          ],
          tryIt: "Ku nemi \"SOC analyst\", \"IT support\" da \"GRC analyst\" a shafin neman aiki a yankinku. Ga kowanne, ku rubuta jimla ɗaya game da abin da aikin yake yi, ta amfani da tallace-tallacen.",
          youCanNow: "faɗin ayyukan tsaron intanet na farko guda uku da bayanin abin da kowanne ke yi.",
          quickCheck: [
            { objective: "O1", q: "Mene ne tsaron intanet?", options: ["Gina wasannin bidiyo", "Sayar da kwamfutoci", "Gyara firinta kawai", "Kare kwamfutoci, hanyoyin sadarwa da bayanai"], answer: 3, why: "Tsaron intanet yana kare kwamfutoci, hanyoyin sadarwa da bayanai daga hare-hare da kuskure." },
            { objective: "O1", q: "Kun karanta tallace-tallacen aikin SOC analyst guda uku. Me za ku rubuta?", options: ["Albashi mafi girma kawai", "Jimla ɗaya game da abin da aikin ke yi a kullum, daga tallace-tallacen", "Sunayen masu ɗaukar ma'aikata", "Babu komai; duk tallace-tallacen iri ɗaya ne"], answer: 1, why: "Bayanin aikin yau da kullum daga tallace-tallace na gaske yana nuna muku ainihin aikin." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fassara aikinku na soja zuwa ƙwarewar tsaron intanet",
          minutes: 5,
          goal: "Rubuta ƙwarewar tsaron intanet guda uku da kuke da su daga aikin soja, da kalmomin farar hula.",
          text: [
            "Wataƙila ba ku yi aiki a tsaron intanet ba, amma da alama kun yi tushensa. OPSEC (tsaron ayyuka) shi ne kare bayanai daga abokan gaba. Yin gadi shi ne sa ido (monitoring). Ba da rahoton matsalar tsaro ga shugabanni shi ne mayar da martani ga abin da ya faru (incident response). Sarrafa wanda ke shiga gini shi ne ikon shiga (access control).",
            "Idan kuna da izinin tsaro (security clearance), ku faɗi haka a CV ɗinku yadda ofishin tsaronku ya yarda (yawanci matakinsa da ko yana aiki har yanzu). Masu ɗaukar aiki da yawa a tsaron intanet suna daraja shi.",
            "Shafin NICCS na hukumar Cybersecurity and Infrastructure Security Agency (CISA, hukumar tsaron intanet ta Amurka) yana da sashe don tsofaffin sojoji da kayan Cyber Career Pathways Tool da ke nuna ayyukan tsaron intanet da ƙwarewar da kowanne ke buƙata. Ku yi amfani da shi tare da My Next Move for Veterans don daidaita lambar aikinku na soja."
          ],
          steps: ["Ku jera halaye uku na tsaro daga aikinku na soja (OPSEC, gadi, ikon shiga, ba da rahoto).", "Ku tambayi mataimakin AI: \"Ka fassara waɗannan ayyukan tsaro na soja zuwa ƙwarewar tsaron intanet da masu ɗaukar aiki ke amfani da su.\"", "Ku kwatanta da ayyukan da ke cikin NICCS Cyber Career Pathways Tool.", "Ku riƙe ƙwarewa uku da suke gaskiya kuma masu sauƙin bayani."],
          words: [["OPSEC", "operations security (tsaron ayyuka): hana abokin hamayya samun bayanai masu amfani."], ["Ikon shiga (access control)", "yanke wanda aka yarda ya shiga wuri, tsari ko fayil."], ["Incident response", "abin da ƙungiya ke yi idan wani mummunan abu ko abin shakku ya faru."], ["NICCS", "National Initiative for Cybersecurity Careers and Studies, shafin ayyuka da horon tsaron intanet na CISA."]],
          slides: [
            { title: "Kun riga kun yi tushen", bullets: ["OPSEC = kare bayanai", "Yin gadi = sa ido (monitoring)", "Ba da rahoto ga shugabanni = incident response"] },
            { title: "Izinin tsaro (security clearance)", bullets: ["Masu ɗaukar aiki da yawa suna daraja shi", "Ku jera shi yadda ofishin tsaronku ya yarda"] },
            { title: "Taimakon hukuma: NICCS (CISA)", bullets: ["Sashe don tsofaffin sojoji", "Cyber Career Pathways Tool", "Ku haɗa shi da My Next Move for Veterans"] }
          ],
          sources: [{ name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }, { name: "My Next Move for Veterans (U.S. Department of Labor)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Ku rubuta ayyukan tsaro uku daga aikinku na soja. Ku nemi mataimakin AI ya sa su a kalmomin tsaron intanet, sannan ku duba su da wani aiki ɗaya a NICCS Cyber Career Pathways Tool.",
          youCanNow: "bayanin ƙwarewarku ta tsaro ta soja a matsayin ƙwarewar tsaron intanet da mai ɗaukar aiki zai gane.",
          quickCheck: [
            { objective: "O2", q: "Yin gadi a aikin soja ya fi kama da wane aikin tsaron intanet?", options: ["Sa ido (monitoring)", "Sayar da manhaja", "Zane-zane", "Rubuta tallace-tallace"], answer: 0, why: "Kallon duk abin da ba a saba gani ba da ba da rahotonsa shi ne aikin sa ido a tsaron intanet." },
            { objective: "O2", q: "Kuna son saka izinin tsaronku a CV. Me za ku yi?", options: ["Ku bayyana shirye-shiryen sirri da kuka yi aiki a kansu", "Ku cire duk aikinku na soja", "Ku jera shi kawai yadda ofishin tsaronku ya yarda, yawanci matakinsa da matsayinsa", "Ku nemi AI ya yi hasashen yadda za a jera shi"], answer: 2, why: "Ana jera izinin tsaro ne kawai yadda ofishin tsaro ya yarda, ba tare da bayanan sirri ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nemo horon hukuma da taimakon biyan kuɗinsa",
          minutes: 5,
          goal: "Nemo hanyar horo ɗaya kuma ku duba a shafukan hukuma abin da VA zai iya biya.",
          text: [
            "NICCS yana da Education and Training Catalog (kundin ilimi da horo) inda za ku iya neman kwasa-kwasan tsaron intanet. Tallace-tallacen aiki za su faɗa muku wace takardar shaidar ƙwarewa (certification) ta farko masu ɗaukar aiki ke so; CompTIA Security+ tana yawan bayyana a tallace-tallacen ayyukan farko, amma ku karanta tallace-tallace a yankinku.",
            "VA (hukumar tsofaffin sojoji ta Amurka) za ta iya mayar da kuɗin jarabawar lasisi da takardar shaidar ƙwarewa idan kuna da tallafin GI Bill da ya cancanta. Lokacin da muka duba va.gov a October 2026, iyakar ita ce ba fiye da $2,000 a kowace jarabawa ba, kuma tana ɗaukar wani ɓangare na haƙƙinku (entitlement). Shirin VET TEC 2.0 na VA yana biyan horon fasahar zamani da ba na digiri ba, kamar rubuta shirye-shiryen kwamfuta, manhaja da ilimin bayanai (information sciences), da iyakataccen adadin gurabe kowace shekara. Shafin VET TEC bai ambaci tsaron intanet da suna ba, don haka ku duba ko shirin ya cancanta.",
            "Ofishin Veterans' Employment and Training Service (VETS) na Ma'aikatar Ƙwadago ta Amurka yana gudanar da Transition Assistance Program (shirin taimakon sauyawa) kuma yana nuna wa tsofaffin sojoji inda za su sami taimakon aiki da koyon sana'a (apprenticeship)."
          ],
          steps: ["Ku nemi kwas na farko a NICCS Education and Training Catalog.", "Ku duba tallace-tallacen aiki biyar don takardar shaidar ƙwarewa da aka fi nema.", "Ku karanta shafin kuɗin jarabawa na va.gov da shafin VET TEC 2.0.", "Ku duba dol.gov/agencies/vets don taimakon aiki da koyon sana'a."],
          words: [["Aikin farko (entry-level)", "aiki ga mutanen da ke farawa a wani fanni."], ["Koyon sana'a (apprenticeship)", "aikin da ake biyan ku inda kuke koyo yayin da kuke aiki."]],
          slides: [
            { title: "Nemo horo", bullets: ["NICCS Education and Training Catalog", "Tallace-tallacen aiki suna nuna takardar shaidar da ake so"] },
            { title: "Taimakon biya (ku duba va.gov)", bullets: ["Kuɗin jarabawa: har $2,000 a kowace jarabawa (Oct 2026)", "VET TEC 2.0: horon fasahar zamani, gurabe kaɗan", "Ku duba shirin ya cancanta kafin ku fara"] },
            { title: "Taimakon aiki", bullets: ["VETS na Ma'aikatar Ƙwadago", "Transition Assistance Program", "Koyon sana'a (apprenticeship)"] }
          ],
          sources: [
            { name: "VA: Licensing and certification test fees", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }
          ],
          tryIt: "Ku nemo kwas ɗaya na farko a tsaron intanet a kundin NICCS da takardar shaidar ƙwarewa da aka fi nema a tallace-tallacen aiki na yankinku. Sannan ku buɗe shafin kuɗin jarabawa na va.gov ku rubuta ko tallafinku ya cancanta.",
          youCanNow: "nemo hanyar horon tsaron intanet ta hukuma da duba abin da VA zai iya taimakawa ya biya.",
          quickCheck: [
            { objective: "O3", q: "Mene ne NICCS?", options: ["Makarantar horo mai kuɗi", "Shafin horo da ayyukan tsaron intanet kyauta da CISA ke gudanarwa", "Zamba ta neman aiki", "Fom na VA"], answer: 1, why: "NICCS shafin CISA ne mai kundin horo da kayan hanyoyin ayyuka." },
            { objective: "O3", q: "Kun sami kwas na tsaron intanet da kuke so. Me za ku duba kafin ku dogara da VA ta biya?", options: ["Babu komai; VA tana biyan komai", "Abin da AI ya faɗa kawai", "Abin da aboki ya faɗa kawai", "Ko shirin ya cancanta, a shafin va.gov na hukuma"], answer: 3, why: "Cancanta da jerin shirye-shirye suna canjawa, don haka ku tabbatar a va.gov kafin ku fara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Hanyarku zuwa tsaron intanet",
        questions: [
          { objective: "O1", q: "Me SOC analyst ke yi musamman?", options: ["Yana sayar da kwamfutoci", "Yana rubuta dokoki", "Yana duba faɗakarwar tsaro don ganin ko hare-hare ne na gaske", "Yana gyara firinta kawai"], answer: 2, why: "SOC tana kallon hare-hare kuma tana mayar da martani." },
          { objective: "O1", q: "Ta yaya maharan ke amfani da AI?", options: ["Don rubuta imel na zamba masu kama da gaskiya", "Ba sa amfani da shi", "Don yin wasanni kawai", "Don gyara hanyar sadarwarku kyauta"], answer: 0, why: "AI yana taimakon maharan rubuta zamba masu kama da gaskiya." },
          { objective: "O2", q: "OPSEC a aikin soja ya fi kusa da wace ƙwarewar tsaron intanet?", options: ["Fenti", "Girki", "Tuƙi", "Kare bayanai"], answer: 3, why: "OPSEC shi ne hana abokan hamayya samun bayanai." },
          { objective: "O2", q: "Wane shafin hukuma ne ke da Cyber Career Pathways Tool?", options: ["Dandalin wasanni", "NICCS na CISA", "Shafin sayayya", "Manhajar waƙa"], answer: 1, why: "NICCS shafin ayyuka da horon tsaron intanet na CISA ne." },
          { objective: "O3", q: "Shafin VET TEC 2.0 bai ambaci tsaron intanet da suna ba. Me ya kamata ku yi?", options: ["Ku ɗauka cewa yana ciki", "Ku duba ko shirin ya cancanta kafin ku fara", "Ku haƙura da tsaron intanet", "Ku tambayi baƙo a intanet"], answer: 1, why: "Koyaushe ku tabbatar cewa shiri ya cancanta a shafin hukuma." }
        ]
      }
    },
    {
      name: "Babi na 2: Atisaye kamar mai bincike (analyst)",
      lessons: [
        {
          objectives: ["O4"],
          title: "Amfani da AI a matsayin abokin karatun tsaro",
          minutes: 5,
          goal: "Amfani da mataimakin AI don koyon ra'ayin tsaro ɗaya da sake bayaninsa da kalmominku.",
          text: [
            "Babban ra'ayi a tsaro shi ne CIA triad (ginshiƙai uku): confidentiality, wato sirri (mutanen da suka dace ne kawai ke ganin bayanai), integrity, wato ingancin bayanai (ba a canja bayanai ba tare da izini ba) da availability, wato samuwa (tsarin yana aiki lokacin da mutane ke buƙatarsa).",
            "Ku nemi mataimakin AI ya bayyana ra'ayi ɗaya da misali na soja, sannan ku sake bayaninsa da kalmominku ku nemi AI ya duba ku. Wannan \"sake koyarwa\" (teach-back) ita ce hanyar sanin cewa kun fahimta da gaske.",
            "Kada ku taɓa saka kalmomin sirri, bayanan rajista (logs) na kamfani na gaske, bayanan abokan ciniki ko wani abu daga tsarin wurin aiki a kayan AI na jama'a. Ku yi amfani da misalai na ƙirƙira ko waɗanda aka tsabtace. Masu ɗaukar aiki da yawa suna da dokoki game da kayan AI da aka yarda a yi amfani da su."
          ],
          steps: ["Ku zaɓi ra'ayi ɗaya, kamar CIA triad.", "Ku tambaya: \"Ka bayyana wannan da kalmomi masu sauƙi da misali na soja.\"", "Ku sake bayaninsa da kalmominku.", "Ku tambayi AI: \"Bayanina daidai ne? Me na manta?\"", "Ku yi amfani da misalai na ƙirƙira kawai, ba bayanai na gaske ba."],
          words: [["CIA triad", "confidentiality, integrity da availability: manufofi uku na tsaro (sirri, inganci, samuwa)."], ["Sake koyarwa (teach-back)", "sake bayanin wani abu da kalmominku don tabbatar da cewa kun fahimta."], ["Log", "rajistar kwamfuta ta abin da ya faru da lokacin da ya faru."]],
          slides: [
            { title: "CIA triad", bullets: ["Sirri (confidentiality): mutanen da suka dace ne kawai ke gani", "Inganci (integrity): ba a canja ba tare da izini ba", "Samuwa (availability): yana aiki lokacin da ake buƙata"] },
            { title: "Sake koyarwa (teach-back)", bullets: ["AI yana bayani da misali na soja", "Ku sake bayaninsa", "AI yana duba abin da kuka manta"] },
            { title: "Ku hana bayanai na gaske shiga", bullets: ["Babu kalmomin sirri, logs na gaske ko bayanan abokan ciniki", "Ku yi amfani da misalai na ƙirƙira", "Ku bi dokokin AI na wurin aikinku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya bayyana CIA triad da misali na soja. Sannan ku rubuta bayaninku mai jimla biyu ku nemi ya duba ku.",
          youCanNow: "amfani da AI don koyon ra'ayin tsaro da tabbatar da cewa kun fahimta ta hanyar sake koyarwa.",
          quickCheck: [
            { objective: "O4", q: "A CIA triad, mece ce ma'anar confidentiality (sirri)?", options: ["Tsarin yana kunne koyaushe", "Ba za a iya canja bayanai ba", "Mutanen da suka dace ne kawai za su iya ganin bayanan", "Kowa zai iya ganin bayanan"], answer: 2, why: "Sirri yana nufin mutanen da aka yarda su gani ne kawai ke ganin bayanai." },
            { objective: "O4", q: "Kuna son yin atisayen ra'ayin tsaro da AI. Wane misali za ku yi amfani da shi?", options: ["Misali na ƙirƙira", "Log na gaske daga aikinku", "Kalmar sirrinku ta aiki", "Imel na abokin ciniki na gaske"], answer: 0, why: "Misalai na ƙirƙira suna ba ku damar atisaye ba tare da raba bayanan kamfani ko na sirri na gaske ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Duba imel mai shakku",
          minutes: 6,
          goal: "Jera alamun gargaɗi a imel mai shakku da yanke abin da za a yi, ba tare da danna komai ba.",
          text: [
            "Phishing (zamba ta saƙo) saƙo ne na bogi da ke ƙoƙarin sa ku danna hanyar haɗi, buɗe fayil, ko ba da kalmar sirri ko kuɗi. Duba imel ɗin da aka ba da rahotonsu aiki ne na farko da aka saba ba ƙananan masu bincike.",
            "Alamun gargaɗi: adireshin mai aikawa bai yi daidai da kamfanin ba, saƙon yana gaggauta ku ko yana tsoratar da ku, yana neman kalmar sirri, lambar tabbatarwa (code), biya ko katin kyauta (gift card), rubutun hanyar haɗi da ainihin adireshinta sun bambanta, ko akwai haɗe-haɗen fayil (attachment) da ba ku zata ba.",
            "Don amfani da AI lafiya, ku kwafi rubutun saƙon kawai, kuma ku maye gurbin sunaye, adireshin imel da lambobin asusu da madadi kamar [suna]. Ku nemi AI ya jera alamun gargaɗi. Kada ku danna hanyoyin haɗi ko buɗe haɗe-haɗen fayil. Ku ɗora linzami (mouse) kan hanyar haɗi (a kwamfuta) don ganin ainihin adireshinta."
          ],
          steps: ["Kada ku danna hanyoyin haɗi ko buɗe haɗe-haɗen fayil.", "Ku duba ainihin adireshin mai aikawa da adireshin hanyoyin haɗi.", "Ku kwafi rubutun saƙon kawai ku maye gurbin bayanan sirri da madadi.", "Ku tambayi mataimakin AI: \"Ka jera alamun gargaɗin phishing a wannan imel.\"", "Ku yanke shawara: ku ba da rahotonsa, ku goge shi, ko ku tabbatar da kamfanin ta lambar da kuka sani gaskiya ce."],
          words: [["Phishing", "saƙo na bogi da ke ƙoƙarin yaudarar ku ku danna, ku ba da kalmar sirri ko ku aika kuɗi."], ["Haɗe-haɗen fayil (attachment)", "fayil da aka aiko tare da imel."], ["Madadi (placeholder)", "abin maye gurbi kamar [suna] da ake amfani da shi a maimakon bayanan sirri na gaske."]],
          slides: [
            { title: "Phishing", bullets: ["Saƙo na bogi da ke yaudarar ku", "Yana son danna, kalmar sirri ko kuɗi"] },
            { title: "Alamun gargaɗi", bullets: ["Adireshin mai aikawa bai yi daidai ba", "Yana gaggauta ku ko yana tsoratar da ku", "Yana neman kalmar sirri, code ko biya", "Hanyar haɗi mai ban mamaki ko fayil da ba a zata ba"] },
            { title: "Duba lafiya da AI", bullets: ["Kada ku taɓa danna hanyar haɗi ko buɗe fayil", "Ku saka rubutu kawai, da madadi", "Ku nemi AI ya jera alamun gargaɗi"] }
          ],
          tryIt: "Ku nemo imel mai shakku a akwatin spam ɗinku (ko ku nemi AI ya rubuta na ƙirƙira). Ba tare da danna komai ba, ku jera alamun gargaɗinsa da kanku, sannan ku tambayi AI ku kwatanta jerin biyu.",
          youCanNow: "gane alamun gargaɗin imel na phishing da duba shi lafiya da taimakon AI.",
          quickCheck: [
            { objective: "O5", q: "Mene ne phishing?", options: ["Hanya mai aminci ta raba fayiloli", "Wani nau'in maganin ƙwayoyin kwamfuta (antivirus)", "Sabuntawar tsaro", "Saƙo na bogi da ke yaudarar ku ku danna ko ku raba bayanai"], answer: 3, why: "Saƙonnin phishing suna yin kamar na gaske ne don sa ku danna ko ku raba bayanai." },
            { objective: "O5", q: "Wani imel ya ce \"An kulle asusunku, ku danna nan yanzu\". Mene ne matakin farko mai aminci?", options: ["Ku danna don ganin ko gaskiya ne", "Kada ku danna; ku duba mai aikawa ku ɗora linzami don ganin ainihin adireshin", "Ku mayar da amsa da kalmar sirrinku", "Ku tura shi ga kowa"], answer: 1, why: "Kuna dubawa ba tare da danna ba: mai aikawa, ainihin adireshin hanyar haɗi da matsin lamba na yin gaggawa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta rahoton abin da ya faru da ba da labarinku",
          minutes: 5,
          goal: "Rubuta rahoto mai layi biyar da layukan CV guda biyu da ke haɗa aikinku na soja da aikin tsaron intanet.",
          text: [
            "Masu bincike suna rubuta gajerun rahotanni don wasu su ɗauki mataki. Rahoto mai sauƙi na layi biyar ya ƙunshi: abin da ya zo, alamun gargaɗi, haɗarin, abin da kuka yi, da abin da kuke ba da shawara. Yana kama da rahoton SALUTE ko spot report na soja: a sarari, gajere kuma na gaskiya.",
            "CV ɗinku ya kamata ya haɗa aikinku na soja da aikin tsaron intanet ta hanyar ayyuka da sakamako, misali: \"Enforced OPSEC and access control for a 120-person unit; completed [course] in network security, 2026.\" (Na tabbatar da OPSEC da ikon shiga ga rundunar mutum 120; na kammala [kwas] a tsaron hanyar sadarwa, 2026.)",
            "Ku yi amfani da AI don gyara kalmominku, amma kowane layi dole ya zama gaskiya. A hirar neman aiki, ku ba da gajeren labari ɗaya game da lokacin da kuka lura da wani abu ba daidai ba kuka ba da rahotonsa."
          ],
          steps: ["Ku rubuta layi biyar: abin da ya zo, alamun gargaɗi, haɗari, mataki, shawara.", "Ku sa kowane layi ya zama gajere kuma na gaskiya.", "Ku rubuta layukan CV guda biyu da ke haɗa aikinku na soja da ƙwarewar tsaron intanet.", "Ku nemi mataimakin AI ya sa su fi sarari, sannan ku duba kowace kalma gaskiya ce."],
          words: [["Rahoton abin da ya faru (incident note)", "gajeren rahoto a rubuce na wani lamarin tsaro da abin da aka yi."], ["Shawara (recommendation)", "abin da kuke ganin ya kamata ya faru a gaba."]],
          slides: [
            { title: "Rahoto mai layi biyar", bullets: ["Abin da ya zo", "Alamun gargaɗi da haɗari", "Abin da kuka yi", "Abin da kuke ba da shawara"] },
            { title: "Kamar spot report na soja", bullets: ["A sarari, gajere, na gaskiya", "Wasu za su iya ɗaukar mataki a kai"] },
            { title: "Labarin CV ɗinku", bullets: ["Aikin soja + ƙwarewar tsaron intanet + sakamako", "AI zai iya gyara shi; kowace kalma dole gaskiya ce"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta rahoto mai layi biyar game da imel ɗin da kuka duba a Darasi na 5, sannan ku rubuta layukan CV guda biyu da ke haɗa ƙwarewarku ta soja da aikin tsaron intanet.",
          youCanNow: "duba imel mai shakku kamar ƙaramin mai bincike, ba da rahotonsa a sarari, da gabatar da aikinku na soja a matsayin ƙwarewar tsaron intanet.",
          quickCheck: [
            { objective: "O6", q: "Rahoto mai layi biyar yana ƙarewa da me?", options: ["Abin da kuke ba da shawara", "Ra'ayinku game da mai aikawa", "Barkwanci", "Cikakken rubutun imel ɗin"], answer: 0, why: "Rahoton yana ƙarewa da shawararku don mai karatu ya san abin da zai yi a gaba." },
            { objective: "O6", q: "Wane layin CV ne ya fi haɗa aikin soja da aikin tsaron intanet?", options: ["\"Na yi abubuwan tsaro a soja\"", "\"Na yi aiki tuƙuru\"", "\"Na tabbatar da ikon shiga ga rundunar mutum 90; na kammala kwas na tsaron hanyar sadarwa, 2026\"", "\"Ina da izinin tsaro; ku tambaye ni game da ayyukan soja\""], answer: 2, why: "Yana nuna ainihin aikin tsaro, girman rundunar da horo, da kalmomin farar hula." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Atisaye kamar mai bincike (analyst)",
        questions: [
          { objective: "O4", q: "A CIA triad, \"integrity\" (inganci) tana nufin:", options: ["Bayanai kyauta ne", "Tsarin yana da sauri koyaushe", "Manajoji ne kawai za su iya shiga", "Ba a canja bayanai ba tare da izini ba"], answer: 3, why: "Inganci yana nufin bayanai su kasance daidai kuma ba a canja su ba." },
          { objective: "O5", q: "Me ya kamata ku KADA KU TAƁA saka a kayan AI na jama'a?", options: ["Log na kamfani na gaske ko kalmar sirri", "Misali na ƙirƙira", "Tambaya ta gama-gari", "Kalmomin \"CIA triad\""], answer: 0, why: "Bayanai na gaske da kalmomin sirri dole su kasance a sirri." },
          { objective: "O5", q: "Wani imel yana gaggauta ku kuma yana neman code da aka turo wayarku. Wannan:", options: ["Abu ne na yau da kullum", "Tayin aiki ne", "Alamar gargaɗin phishing ce", "Sabuntawar tsari ce"], answer: 2, why: "Gaggautawa da neman code alamun phishing ne da aka saba gani." },
          { objective: "O5", q: "Mene ne matakin farko mai aminci game da hanyar haɗi mai shakku?", options: ["Ku danna ta don gani", "Ku mayar da amsa ku tambaya", "Ku tura ta ga kowa", "Kada ku danna; ku duba ainihin adireshin"], answer: 3, why: "Dannawa na iya sa ƙwayar cuta a na'urar ko ya saci bayanai." },
          { objective: "O6", q: "Rahoto mai kyau na abin da ya faru shi ne:", options: ["Mai tsawo kuma mai cike da motsin rai", "Hasashe kawai", "Gajere, a sarari kuma na gaskiya", "Wanda aka aika wa maharin"], answer: 2, why: "Wasu suna buƙatar bayanai na gaskiya a sarari don ɗaukar mataki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ayyukan AI da Tsaron Intanet (Cybersecurity)",
    questions: [
      { objective: "O1", q: "Tsaron intanet yana game da:", options: ["Gina wasannin bidiyo", "Kare kwamfutoci, hanyoyin sadarwa da bayanai", "Sayar da wayoyi", "Zana tambari (logo)"], answer: 1, why: "Yana kare tsare-tsare da bayanai daga maharan." },
      { objective: "O1", q: "GRC analyst musamman yana:", options: ["Duba cewa ƙungiya tana bin dokokinta na tsaro", "Gyara motoci", "Rubuta waƙoƙi", "Kai kayayyaki"], answer: 0, why: "Governance, risk and compliance yana game da bin dokoki." },
      { objective: "O1", q: "Ta yaya masu kariya ke amfani da AI?", options: ["Don maye gurbin dukkan mutane", "Don aika imel na zamba", "Don tace faɗakarwa da taƙaita logs", "Ba sa taɓa amfani da shi"], answer: 2, why: "AI yana taimakon masu kariya sarrafa bayanai masu yawa." },
      { objective: "O1", q: "Me yasa masu ɗaukar aiki ke son mutanen da za su iya auna amsoshin AI?", options: ["AI yana iya yin kuskure kuma maharan ma suna amfani da shi", "AI ba ya taɓa yin kuskure", "Doka ce", "AI ba ya iya karatu"], answer: 0, why: "Hankalin ɗan adam yana kama kuskuren AI da zamba da AI ya yi." },
      { objective: "O2", q: "Yin gadi a aikin soja ya fi kama da wane aikin tsaron intanet?", options: ["Rubuta lambobin wasanni", "Sayarwa", "Fenti", "Sa ido (monitoring)"], answer: 3, why: "Kallon duk abin da ba a saba gani ba shi ne sa ido." },
      { objective: "O2", q: "Ba da rahoton matsala ga shugabanni a soja yana kama da:", options: ["Tallace-tallace", "Incident response (mayar da martani ga abin da ya faru)", "Jigilar kaya", "Ɗaukar ma'aikata"], answer: 1, why: "Incident response yana farawa da ba da rahoton abin da ya faru." },
      { objective: "O2", q: "Yaya ya kamata ku jera izinin tsaro a CV?", options: ["Ku saka dukkan bayanan a intanet", "Yadda ofishin tsaronku ya yarda, yawanci matakinsa da matsayinsa", "Kada ku taɓa ambatonsa", "Ku ƙirƙiri ɗaya"], answer: 1, why: "Ku bi jagorancin ofishin tsaronku." },
      { objective: "O3", q: "Wa ke gudanar da NICCS?", options: ["Kamfanin waya", "Kamfanin wasannin bidiyo", "Banki", "CISA, Cybersecurity and Infrastructure Security Agency"], answer: 3, why: "NICCS shafin ayyuka da horon tsaron intanet na CISA ne." },
      { objective: "O3", q: "A ina za ku sami takardar shaidar ƙwarewa ta farko da masu ɗaukar aiki suka fi so?", options: ["Tallace-tallacen aiki na gaske a yankinku", "Wata talla kawai", "Jefa tsabar kuɗi", "Tsohon littafin karatu"], answer: 0, why: "Tallace-tallacen aiki suna jera abin da masu ɗaukar aiki ke nema." },
      { objective: "O3", q: "Bisa ga va.gov a October 2026, VA tana mayar da kuɗin jarabawa har zuwa:", options: ["Babu iyaka", "$50 a kowace jarabawa", "$2,000 a kowace jarabawa", "$10,000 a kowace jarabawa"], answer: 2, why: "Shafin ya ce ba fiye da $2,000 a kowace jarabawa ba." },
      { objective: "O3", q: "Wane ofishi na Ma'aikatar Ƙwadago ta Amurka ne ke taimakon tsofaffin sojoji da aiki?", options: ["Ofishin ƙidaya (Census)", "Ofishin gidan waya (Postal Service)", "NASA", "VETS, Veterans' Employment and Training Service"], answer: 3, why: "VETS tana gudanar da shirye-shiryen aiki na tsofaffin sojoji, har da TAP." },
      { objective: "O4", q: "A CIA triad, \"availability\" (samuwa) tana nufin:", options: ["Ana yawan canja bayanai", "Bayanai sirri ne", "Tsarin yana aiki lokacin da mutane ke buƙatarsa", "Kowa zai iya shiga"], answer: 2, why: "Samuwa tana nufin tsarin yana aiki lokacin da ake buƙata." },
      { objective: "O4", q: "Mece ce sake koyarwa (teach-back)?", options: ["Kwafin amsa", "Bayanin ra'ayi da kalmominku don tabbatar da cewa kun fahimta", "Neman wani ya yi karatu", "Tsallake darasi"], answer: 1, why: "Sake bayani yana nuna fahimta ta gaske." },
      { objective: "O4", q: "Wanne ne ba shi da haɗari a yi amfani da shi wajen atisaye da AI?", options: ["Misali na ƙirƙira", "Logs na gaske na wurin aikinku", "Bayanan abokan ciniki", "Kalmar sirrinku"], answer: 0, why: "Misalai na ƙirƙira suna kare bayanai na gaske." },
      { objective: "O5", q: "Phishing shi ne:", options: ["Wani nau'in katangar kariya (firewall)", "Kayan tsaro", "Saƙo na bogi da ke yaudarar ku ku danna ko ku raba bayanai", "Sunan aiki"], answer: 2, why: "Phishing yana yaudarar mutane su ba da damar shiga ko kuɗi." },
      { objective: "O5", q: "Wanne ne alamar gargaɗin phishing?", options: ["Adireshin mai aikawa bai yi daidai da kamfanin ba", "Saƙo daga abokin aikinku da kuka sani game da abincin rana", "Wasiƙar labarai da kuka yi rajista", "Tunatarwar kalanda da kuka saita"], answer: 0, why: "Adireshin mai aikawa da bai yi daidai ba alama ce da aka saba gani." },
      { objective: "O5", q: "Kafin ku saka imel a AI, ya kamata ku:", options: ["Buɗe haɗe-haɗen fayil", "Ƙara kalmar sirrinku", "Danna dukkan hanyoyin haɗi", "Maye gurbin sunaye, adireshin imel da lambobi da madadi"], answer: 3, why: "Madadi yana hana bayanan sirri shiga AI." },
      { objective: "O5", q: "Ta yaya za ku ga inda hanyar haɗi ke zuwa da gaske a kwamfuta?", options: ["Ku danna ta", "Ku ɗora linzami a kanta ba tare da dannawa ba", "Ku mayar da amsa ga mai aikawa", "Ku buga imel ɗin a takarda"], answer: 1, why: "Ɗora linzami yana nuna ainihin adireshin lafiya." },
      { objective: "O6", q: "Rahoto mai layi biyar yana ƙarewa da:", options: ["Barkwanci", "Abin da kuke ba da shawara", "Kalmar sirrinku", "Hanyar haɗi da za a danna"], answer: 1, why: "Shawarar tana faɗa wa wasu abin da za su yi a gaba." },
      { objective: "O6", q: "Wane layin CV ne ya fi ƙarfi?", options: ["\"Ma'aikaci mai ƙwazo.\"", "\"Na iya kwamfuta.\"", "\"Ina son tsaron intanet.\"", "\"Na tabbatar da OPSEC da ikon shiga ga rundunar mutum 120; na kammala kwas na tsaron hanyar sadarwa, 2026.\""], answer: 3, why: "Yana nuna aiki, girma da horo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
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
        name: "An gano alamun gargaɗi",
        objective: "O5",
        notYet: "Alamun gargaɗi ƙasa da uku, ko mai koyo ya danna hanyar haɗin.",
        meets: "An jera aƙalla alamun gargaɗi uku ba tare da danna komai ba.",
        exceeds: "Mai koyo ya gano alamar da AI ya manta, ko AI ya gano wadda mai koyo ya manta, kuma zai iya bayaninta."
      },
      {
        name: "Amfani da AI lafiya",
        objective: "O4",
        notYet: "An saka sunaye, adireshin imel ko lambobi na gaske a AI.",
        meets: "An maye gurbin bayanan sirri da madadi, ko an yi amfani da misali na ƙirƙira.",
        exceeds: "Mai koyo ya bayyana waɗanne bayanai ya cire da dalilin hakan."
      },
      {
        name: "Rahoton abin da ya faru",
        objective: "O6",
        notYet: "Akwai layukan da suka ɓace, ko ra'ayi a maimakon gaskiya.",
        meets: "Layi biyar gajeru na gaskiya: abin da ya zo, alamun gargaɗi, haɗari, abin da aka yi, shawara.",
        exceeds: "Shawarar ta faɗi mataki na gaba a sarari ga ƙungiyar, kamar ba da rahoto ko toshe mai aikawa."
      },
      {
        name: "Layukan CV",
        objective: "O2",
        notYet: "Layukan ba su da sarari ko suna da bayanan sirrin soja.",
        meets: "Layi biyu da ke haɗa ainihin aikin tsaro na soja da aikin tsaron intanet da kalmomin farar hula.",
        exceeds: "Layukan suna amfani da kalmomi daga aikin hanyar NICCS ko tallace-tallacen aiki na gaske."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajista a kwas ko takardar shaidar tsaron intanet cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka nemi aikin tsaron intanet ko taimakon IT na farko cikin kwanaki 90",
      "Masu koyo da suka ce sun gano kuma sun ba da rahoton imel na phishing a gida ko a wurin aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet (don ɗora linzami kan hanyoyin haɗi), ko waya ta zamani",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Shafukan NICCS (CISA) da va.gov kyauta, da tallace-tallacen ayyukan tsaron intanet na yankin",
      "Imel mai shakku na ƙirƙira, ko ɗaya daga akwatin spam na mai koyo bayan an cire bayanan sirri",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku samar da imel na phishing na ƙirƙira don aji, don kada kowa ya buƙaci buɗe saƙonni masu shakku na gaske.",
      "Ku maimaita doka: kada a taɓa danna hanyar haɗi mai shakku, kuma kada a taɓa saka logs na gaske, kalmomin sirri ko bayanan sirri a AI na jama'a.",
      "Ku tunatar da masu koyo da ke da izinin tsaro su bi jagorancin ofishin tsaronsu kan yadda za su jera shi.",
      "Ku ba da maki ga rahoton da layukan CV da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku nuna wa masu koyo VETS, American Job Centers da NICCS don matakai na gaba."
    ]
  }
};
