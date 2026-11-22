"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-consulting.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "veterans-ai-consulting-ha",
  lang: "ha",
  translationOf: "veterans-ai-consulting",
  category: "Veterans (military)",
  name: "Damar Aikin Mai Ba da Shawara (Consulting) da AI",
  skills: "Mayar da ƙwarewa zuwa tayin aiki, Nemo taimakon kasuwanci kyauta ga tsofaffin sojoji, Rubuta saƙon tuntuɓa, Rubuta shawarar aiki (proposal) da AI, Kare bayanan abokin ciniki",
  outcome: "mayar da ƙwarewarku ta soja zuwa tayin aikin mai ba da shawara a sarari, da rubuta shawarar aiki (proposal) ta shafi ɗaya ga abokin ciniki tare da mataimakin AI, kuna sane da inda za ku sami taimakon hukuma kyauta don kafa kasuwancin.",
  about: [
    "Mai ba da shawara (consultant) ana biyansa ne don ya warware wata matsala ta musamman ga abokin ciniki. Tsofaffin sojoji suna da ƙwarewar da ƙananan kasuwanci, ƙungiyoyin sa-kai da 'yan kwangila da yawa ba su da ita: tsari, tsaro a wurin aiki, jigilar kaya da kayan aiki (logistics), horarwa, tsaro da jagorancin ƙungiya. Kayan AI yanzu suna taimaka wa masu ba da shawara su yi bincike, rubutu da aiki da sauri.",
    "A wannan kwas ɗin za ku zaɓi tayin aiki bisa abin da kuka sani, ku koyi inda tsofaffin sojoji ke samun taimakon kasuwanci na hukuma kyauta, ku rubuta saƙon tuntuɓa na farko, sannan ku yi amfani da mataimakin AI don rubuta daftarin shawarar aiki ta shafi ɗaya. Za ku kuma koyi dokokin da ke kiyaye bayanan abokin ciniki.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Wannan kwas ba ya ba da shawarar shari'a ko ta haraji: don kafa kasuwanci, ku yi amfani da ofisoshin hukuma da aka ambata a nan ko ƙwararren mai sana'a."
  ],
  finalTask: "Ku rubuta shawarar aiki (proposal) ta shafi ɗaya ga wani abokin ciniki na gida, na ƙirƙira ko na gaske: matsalar, abin da za ku yi, abin da za su samu, lokacin aikin, farashinku (ku ne kuka sa shi, ba AI ba), da yadda za ku kare bayanansu. Ku rubuta daftarin da mataimakin AI, sannan ku gyara shi har kowace magana ta zama gaskiya, kuma ku rubuta ofishin kasuwanci na hukuma ɗaya mai kyauta da za ku tuntuɓa a gaba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da ke son samun kuɗi a matsayin masu ba da shawara, ta amfani da ƙwarewa kamar tsari, tsaro a wurin aiki, logistics, horarwa, tsaro da jagorancin ƙungiya, ga ƙananan kasuwanci, ƙungiyoyin sa-kai da 'yan kwangila.",
    startingPoint: "Suna da zurfin ƙwarewa, kuma sun saba da yin bayani (briefing) da rubuta umarni, kuma suna iya amfani da kwamfuta. Yawancinsu ba su fayyace tayin aiki ba, ba su tuntuɓi abokan ciniki ba, ba su sa farashin aiki ba, ko rubuta shawarar aiki ba, kuma kaɗan ne suka yi amfani da AI don rubutun kasuwanci.",
    gap: "Ƙwarewa tana kawo kuɗi ne kawai idan an gabatar da ita a sarari ga abokin ciniki da ke buƙatarta. Masu koyo suna buƙatar mayar da ƙwarewarsu zuwa tayi a sarari, kai wa abokan ciniki na farko da gaskiya, rubuta shawarar aiki da AI da su kansu suka sa farashinta suka duba ta, kare bayanan abokin ciniki, da amfani da taimakon kasuwanci na hukuma kyauta.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ba a ɗauka cewa suna da ilimin kasuwanci ba",
      "Na'urori: kwamfuta ko wayar zamani mai intanet da mataimakin AI kyauta",
      "Sirri: babu bayanan sirri na abokin ciniki a kayan AI na jama'a sai abokin ciniki ya yarda kuma an amince da kayan; ana amfani da madadi a atisaye",
      "Gaskiya: kowace magana a saƙonni da shawarwarin aiki dole ta zama gaskiya; mai koyo ne ke sa farashi, ba AI ba",
      "Lasisi, haraji da rajista: ofishin kasuwanci na jiha, irs.gov ko mai ba da shawara na VBOC"
    ],
    prerequisites: "Babu. Kwas ɗin \"AI don Ƙara Yawan Aiki da Shugabanci\" zai taimaka a tare da shi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku misalan aikin mai ba da shawara", action: "bayyana abin da mai ba da shawara ke yi da hanyoyi uku da AI ke taimaka masa", standard: "kuna ambaton aƙalla matsaloli biyu na abokan ciniki da suka dace da ƙwarewarku ta soja" },
    { id: "O2", condition: "Ta amfani da ƙwarewarku ta soja", action: "rubuta tayin aiki na jimla ɗaya da ke faɗin wanda kuke taimaka wa, matsalar da sakamakon", standard: "kuma an gwada shi ta tambayar aƙalla mutum ɗaya a wannan fanni" },
    { id: "O3", condition: "Idan kuna tsara kasuwancinku", action: "gane taimakon kasuwanci na hukuma kyauta ga tsofaffin sojoji kusa da ku da abin da kowane ofishi ke yi", standard: "tare da lambar tuntuɓar Veterans Business Outreach Center mafi kusa da tambaya ɗaya da za ku yi" },
    { id: "O4", condition: "Don tayinku", action: "rubuta gajeren saƙon tuntuɓa na gaskiya da ke neman wanda zai iya zama abokin ciniki ya yi kira na minti 15", standard: "kowace magana gaskiya ce, kuma akwai mutane uku da za a aika wa" },
    { id: "O5", condition: "Idan kuna da tayinku da matsalar abokin ciniki", action: "rubuta daftarin shawarar aiki ta shafi ɗaya da AI, da gyara ta har ta zama daidai", standard: "da iyakar aiki (scope) a sarari, lokacin aiki da farashin da ku kanku kuka sa" },
    { id: "O6", condition: "Idan kuna amfani da AI a aikin abokin ciniki", action: "rubuta dokokin da ke kare bayanan abokin ciniki, da duba aikin AI kafin ku miƙa shi", standard: "da layin bayanin amfani da AI a cikin shawarar aiki, kuma babu bayanan abokin ciniki a kayan jama'a ba tare da izini ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gina tayinku na mai ba da shawara",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da masu ba da shawara ke yi da inda AI ya shigo",
          minutes: 4,
          goal: "Bayyana abin da mai ba da shawara ke yi da hanyoyi uku da AI ke taimaka masa.",
          text: [
            "Mai ba da shawara ƙwararre ne daga waje da abokin ciniki ke ɗauka don wani aiki na musamman, na wani ƙayyadadden lokaci. Misalai: kafa tsarin tsaro a wurin aiki ga kamfanin gine-gine, gina shirin horarwa ga masu aikin sa-kai na wata ƙungiya, ko tsara yadda za a jera kaya a rumbun ajiya.",
            "AI yana taimaka wa masu ba da shawara su yi bincike kan wani batu da sauri, su rubuta daftarin takardu kamar shawarwarin aiki da rahotanni, kuma su mayar da bayanan rubutu zuwa jerin abubuwan dubawa (checklist) ko hotunan bayani (slides). Ba ya maye gurbin ƙwarewarku: abokan ciniki suna biyan ku ne don hukuncinku da basirarku.",
            "Aikin mai ba da shawara kan AI kuma ya haɗa da taimaka wa ƙananan ƙungiyoyi su fara amfani da kayan AI lafiya, misali rubuta sauƙaƙƙen tsarin amfani da AI ko horar da ma'aikata. Al'adunku na soja na bin ƙa'idojin aiki da bayyanannen horo suna dacewa sosai."
          ],
          words: [["Mai ba da shawara (consultant)", "ƙwararre daga waje da ake biya don ya warware wata matsala ta musamman ga abokin ciniki."], ["Abokin ciniki (client)", "mutum ko ƙungiyar da ke biyan kuɗin hidimarku."], ["Abin da za a miƙa (deliverable)", "abin da kuke bayarwa a ƙarshe, kamar tsari, rahoto ko horo."]],
          slides: [
            { title: "Mai ba da shawara shi ne...", bullets: ["Ƙwararre daga waje", "Ana ɗaukarsa don wani aiki na musamman, na ƙayyadadden lokaci", "Ana biyansa don hukuncinsa da sakamako"] },
            { title: "Yadda AI ke taimakawa", bullets: ["Bincike da sauri", "Rubuta daftarin shawarwarin aiki da rahotanni", "Mayar da bayanan rubutu zuwa checklist ko slides"] },
            { title: "Aikin mai ba da shawara kan AI", bullets: ["Taimaka wa ƙananan ƙungiyoyi su yi amfani da AI lafiya", "Rubuta sauƙaƙƙun tsare-tsaren amfani da AI", "Horar da ma'aikata"] }
          ],
          tryIt: "Ku tambayi mataimakin AI: \"Waɗanne matsaloli ne ƙananan kasuwanci kusa da ni suke yawan ɗaukar masu ba da shawara a kai?\" Ku zagaye guda biyu da suka dace da abin da kuka yi a soja.",
          youCanNow: "bayyana abin da mai ba da shawara ke yi da yadda AI ke tallafa wa aikin.",
          quickCheck: [
            { objective: "O1", q: "Mene ne deliverable (abin da za a miƙa)?", options: ["Abin da kuke bayarwa a ƙarshe, kamar tsari ko rahoto", "Kuɗin da abokin ciniki ya biya", "Katin kasuwancinku", "Kiran waya na farko"], answer: 0, why: "Deliverable shi ne cikakken aikin da abokin ciniki ke karɓa." },
            { objective: "O1", q: "AI ya ba ku jerin matsalolin da ƙananan kasuwanci ke ɗaukar masu ba da shawara a kai. Me za ku yi?", options: ["Ku yi tayin gyara dukkansu", "Ku yi watsi da jerin", "Ku zagaye waɗanda suka dace da abin da kuka yi a soja", "Ku zaɓi wanda ya fi biyan kuɗi, ko da ba ku da ƙwarewa a kai"], answer: 2, why: "Tayinku ya kamata ya haɗa matsaloli na gaske da ƙwarewar da kuka riga kuke da ita." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mayar da ƙwarewarku zuwa tayin aiki",
          minutes: 5,
          goal: "Rubuta tayin aiki na jimla ɗaya: wanda kuke taimaka wa, matsalar, da sakamakon.",
          text: [
            "Tayi a sarari yana da sassa uku: wanda kuke taimaka wa, matsalar da kuke gyarawa, da sakamakon da suke samu. Misali: \"Ina taimaka wa ƙananan kamfanonin gine-gine su gina rubutaccen tsarin tsaro a wurin aiki don su ci binciken hukuma kuma su rage raunuka.\"",
            "Ku fara da abin da kuka yi sau da yawa kuma da kyau a lokacin aikin soja, sannan ku nemo ƙungiyoyin farar hula da ke da matsala iri ɗaya. Tsohon jami'in logistics (NCO) zai iya taimaka wa ƙananan masu rarraba kaya su tsara kayan ajiyarsu. Tsohon mai horarwa zai iya taimaka wa ƙungiyoyin sa-kai su karɓi sababbin masu aikin sa-kai su kuma koya musu aiki.",
            "Ku yi amfani da mataimakin AI don tattara ra'ayoyi, sannan ku gwada tayin ta tambayar mutane biyu ko uku na gaske a wannan fanni: \"Wannan matsala ce da za ku biya kuɗi don a gyara ta?\""
          ],
          steps: ["Ku rubuta abubuwa uku da kuka yi sau da yawa kuma da kyau a aikin soja.", "Ku tambayi mataimakin AI: \"Waɗanne kasuwancin farar hula ne ke da wannan matsalar?\"", "Ku rubuta: \"Ina taimaka wa [su wane] [su gyara me] don su [sakamako].\"", "Ku tambayi mutane biyu ko uku a wannan fanni ko za su biya kuɗi don shi."],
          words: [["Tayi (offer)", "bayani a sarari na wanda kuke taimaka wa, da me, da sakamakon."], ["Rukuni na musamman (niche)", "ƙaramin rukuni na musamman na abokan ciniki da kuka mai da hankali a kai."]],
          slides: [
            { title: "Sassa uku na tayi", bullets: ["Wanda kuke taimaka wa", "Matsalar da kuke gyarawa", "Sakamakon da suke samu"] },
            { title: "Ku fara daga aikinku na soja", bullets: ["Abin da kuka yi sau da yawa kuma da kyau", "Waɗanne farar hula ne ke da matsala iri ɗaya?"] },
            { title: "Ku gwada shi da mutane na gaske", bullets: ["\"Wannan matsala ce da za ku biya kuɗi don a gyara ta?\"", "Ku tambayi mutane biyu ko uku a wannan fanni"] }
          ],
          tryIt: "Ku rubuta tayinku na jimla ɗaya ta amfani da \"Ina taimaka wa [su wane] [su gyara me] don su [sakamako].\" Ku nemi mataimakin AI ya ƙara masa sarari, sannan ku karanta shi ga mutum ɗaya a wannan fanni.",
          youCanNow: "rubuta tayin aikin mai ba da shawara a sarari bisa ƙwarewarku ta soja.",
          quickCheck: [
            { objective: "O2", q: "Mene ne niche?", options: ["Dukkan abokan ciniki da za a iya samu", "Wani nau'in kwangila", "Shirin gwamnati kyauta", "Ƙaramin rukuni na musamman na abokan ciniki da kuka mai da hankali a kai"], answer: 3, why: "Niche shi ne rukunin musamman da kuke yi wa hidima, kuma yana sa tayinku ya fito a sarari." },
            { objective: "O2", q: "Kun rubuta \"Ina taimaka wa kasuwanci da abubuwa.\" Me za ku yi?", options: ["Ku yi amfani da shi kamar yadda yake", "Ku sake rubuta shi a matsayin \"Ina taimaka wa [su wane] [su gyara me] don su [sakamako]\"", "Ku tsawaita shi da kalmomin zamani masu yawa", "Ku cire sakamakon"], answer: 1, why: "Tayi a sarari yana faɗin wanda kuke taimaka wa, matsalar da sakamakon." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Taimakon hukuma kyauta ga tsofaffin sojoji masu kasuwanci",
          minutes: 5,
          goal: "Nemo taimakon kasuwanci kyauta ga tsofaffin sojoji kusa da ku, da sanin abin da kowane ofishi ke yi.",
          text: [
            "Hukumar Ƙananan Kasuwanci ta Amurka (SBA) tana gudanar da Boots to Business, wani ɓangare na shirin taimakon sauyawa daga soja (Transition Assistance Program, TAP), da Boots to Business Reboot ga tsofaffin sojoji na kowane zamani. Veterans Business Outreach Centers (VBOCs) suna ba da tarukan bita kan tsarin kasuwanci, jagoranci (mentoring) da horo.",
            "Idan kuna son kwangilolin gwamnati, SBA tana ba da takardar shaida ga ƙananan kasuwancin da tsofaffin sojoji suka mallaka, da waɗanda tsofaffin sojoji masu nakasa daga aiki suka mallaka, ta shirinta na Veteran Small Business Certification, wanda ake kira VetCert, a certifications.sba.gov. Lokacin da muka duba a Oktoba 2026, VA (Ma'aikatar Tsofaffin Sojoji) ta ce kasuwancin da ke aiki da VA dole ne su yi rajista ta SBA.",
            "VA kuma ta lissafa horon kafa kasuwanci a matsayin hanyar amfani da wasu fa'idodin GI Bill. Sunayen kasuwanci, lasisi da haraji jiharku da IRS (hukumar haraji ta Amurka) ne ke sa dokokinsu, don haka ku duba ofishin kasuwanci na jiharku da irs.gov, ko ku tambayi mai ba da shawara na VBOC."
          ],
          steps: ["Ku buɗe shafin SBA na kasuwancin da tsofaffin sojoji suka mallaka.", "Ku nemo Veterans Business Outreach Center mafi kusa da ku.", "Ku duba ranakun Boots to Business ko Reboot.", "Idan kuna son aikin gwamnati, ku karanta game da VetCert a certifications.sba.gov.", "Ku duba ofishin kasuwanci na jiharku don lasisi da rajista."],
          words: [["SBA", "U.S. Small Business Administration, hukumar tarayya ta Amurka da ke taimaka wa ƙananan kasuwanci."], ["VBOC", "Veterans Business Outreach Center: cibiyoyi da SBA ke ba da kuɗinsu, masu taimaka wa tsofaffin sojoji masu kasuwanci."], ["VetCert", "takardar shaidar SBA ga ƙananan kasuwancin da tsofaffin sojoji, ko tsofaffin sojoji masu nakasa daga aiki, suka mallaka."]],
          slides: [
            { title: "Taimakon SBA kyauta ga tsofaffin sojoji", bullets: ["Boots to Business (ɓangare na TAP)", "Boots to Business Reboot, kowane zamani", "Veterans Business Outreach Centers"] },
            { title: "Kwangilolin gwamnati", bullets: ["VetCert a certifications.sba.gov", "Ga kasuwancin tsofaffin sojoji da na masu nakasa daga aiki", "Aiki da VA yana buƙatar rajista ta SBA"] },
            { title: "Dokokin kafa kasuwanci", bullets: ["Sunaye, lasisi da haraji: jiharku da IRS", "Ku tambayi mai ba da shawara na VBOC", "Kada ku dogara da AI kaɗai don shawarar shari'a ko haraji"] }
          ],
          sources: [
            { name: "SBA: Kasuwancin da tsofaffin sojoji suka mallaka (Veteran-owned businesses)", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "SBA: Taimakon kwangila ga tsofaffin sojoji (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "VA: Tallafi ga ƙananan kasuwancin tsofaffin sojoji", url: "https://www.va.gov/careers-employment/veteran-owned-business-support/" },
            { name: "VA: Yadda ake amfani da fa'idodin GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" }
          ],
          tryIt: "Ku nemo Veterans Business Outreach Center mafi kusa da ku a sba.gov. Ku rubuta sunansa, yadda ake tuntuɓarsa, da tambaya ɗaya da za ku yi game da fara kasuwancin mai ba da shawara.",
          youCanNow: "nemo taimakon hukuma kyauta don fara kasuwancin mai ba da shawara mallakar tsohon soja.",
          quickCheck: [
            { objective: "O3", q: "Me Veterans Business Outreach Center ke bayarwa?", options: ["Bashi ba tare da takardu ba", "Tallace-tallace da ake biya don kasuwancinku", "Taimakon tsarin kasuwanci da jagoranci kyauta ga tsofaffin sojoji", "Tabbacin samun abokin ciniki na farko"], answer: 2, why: "VBOCs suna ba tsofaffin sojoji taimakon tsara kasuwanci da jagoranci kyauta." },
            { objective: "O3", q: "Kuna da tambaya game da lasisin kasuwanci da kuke buƙata. Ina za ku kai ta?", options: ["Ofishin kasuwanci na jiharku, irs.gov ko mai ba da shawara na VBOC", "Mataimakin AI kaɗai", "Wata ƙungiya a kafofin sada zumunta", "Wani mai gasa da ku"], answer: 0, why: "Tambayoyin lasisi da haraji ana kai su ga ofisoshin hukuma ko masu ba da shawara, ba AI ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gina tayinku na mai ba da shawara",
        questions: [
          { objective: "O1", q: "Wane ne mai ba da shawara (consultant)?", options: ["Mai binciken gwamnati", "Ma'aikaci na cikakken lokaci har abada", "Ƙwararre daga waje da ake biya don warware wata matsala ta musamman", "Mai sayar da kaya guda ɗaya"], answer: 2, why: "Ana ɗaukar masu ba da shawara don wani aiki na musamman da wani lokaci." },
          { objective: "O1", q: "Me abokan ciniki suka fi biyan mai ba da shawara a kai?", options: ["Hukuncinsa da sakamako", "Kuɗin rajistar AI ɗinsa", "Kayan sojansa", "Saurin rubutunsa"], answer: 0, why: "AI yana taimakawa, amma abokan ciniki suna biyan kuɗi don ƙwarewa." },
          { objective: "O2", q: "Wanne ne tayi a sarari?", options: ["\"Ku kira ni.\"", "\"Ina yin abubuwa.\"", "\"Ni tsohon soja ne.\"", "\"Ina taimaka wa ƙananan kamfanonin gine-gine su gina tsarin tsaro don su ci binciken hukuma.\""], answer: 3, why: "Yana faɗin su wane, matsalar da sakamakon." },
          { objective: "O2", q: "Ta yaya za ku gwada ko tayinku na gaske ne?", options: ["Ku tambayi AI kaɗai", "Ku tambayi mutane a wannan fanni ko za su biya don a gyara matsalar", "Ku yi tsammani", "Ku fara buga katin kasuwanci"], answer: 1, why: "Masu saye na gaske ne za su faɗa muku ko matsalar ta cancanci a biya." },
          { objective: "O3", q: "A ina tsofaffin sojoji za su sami taimakon tsarin kasuwanci da jagoranci kyauta?", options: ["Wurin sayar da motoci", "Veterans Business Outreach Center", "Tallar kafofin sada zumunta", "Ƙungiyar kuɗin crypto"], answer: 1, why: "VBOCs cibiyoyi ne da SBA ke ba da kuɗinsu don tsofaffin sojoji masu kasuwanci." }
        ]
      }
    },
    {
      name: "Babi na 2: Samun aiki da yin sa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta saƙon tuntuɓa na farko",
          minutes: 5,
          goal: "Rubuta gajeren saƙo na gaskiya da ke neman wanda zai iya zama abokin ciniki ya yi kira na minti 15.",
          text: [
            "Abokan cinikinku na farko sau da yawa suna fitowa ne daga mutanen da suka riga suka san ku: tsofaffin shugabanninku, ƙungiyoyin tsofaffin sojoji, ƙungiyoyin kasuwanci na gida da ƙungiyoyin sa-kai da kuke aikin sa-kai da su.",
            "Saƙon tuntuɓa mai kyau gajere ne: ko ku wane ne, matsalar da kuke taimakawa da ita, shaida ɗaya (sakamako daga aikin soja ko aikin baya), da ƙaramar buƙata, kamar kira na minti 15.",
            "AI zai iya rubuta daftarin, amma ku sa ya yi kama da yadda kuke magana, kuma ku cire duk abin da ba gaskiya ba. Kada ku taɓa da'awar takardar shaida, izinin tsaro (clearance) ko sakamakon da ba ku da shi."
          ],
          steps: ["Ku rubuta mutane ko ƙungiyoyi goma da suka san ku ko suke a fanninku.", "Ku nemi mataimakin AI ya rubuta saƙo na jimloli 5: ko ku wane ne, matsalar, shaida ɗaya, kira na minti 15.", "Ku gyara shi ya yi kama da ku.", "Ku duba cewa kowace magana gaskiya ce.", "Ku aika shi ga mutane uku."],
          words: [["Tuntuɓa (outreach)", "kai wa waɗanda za su iya zama abokan ciniki don fara tattaunawa."], ["Shaida (proof)", "sakamako na gaske da ke nuna cewa za ku iya yin aikin."]],
          slides: [
            { title: "Ku fara da mutanen da suka san ku", bullets: ["Tsofaffin shugabanni da ƙungiyoyin tsofaffin sojoji", "Ƙungiyoyin kasuwanci na gida", "Ƙungiyoyin sa-kai da kuke aiki da su"] },
            { title: "Gajeren saƙo", bullets: ["Ko ku wane ne da matsalar da kuke gyarawa", "Shaida ɗaya ta gaske", "Ƙaramar buƙata: kira na minti 15"] },
            { title: "Ku riƙe gaskiya", bullets: ["Ku sa ya yi kama da ku", "Babu da'awar da ba za ku iya tabbatarwa ba"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya rubuta daftarin saƙon tuntuɓa na jimloli biyar don tayinku. Ku gyara shi ya yi kama da ku kuma kowace magana ta zama gaskiya, sannan ku rubuta sunayen mutane uku da za ku aika wa.",
          youCanNow: "rubuta saƙon tuntuɓa na gaskiya da ke neman wanda zai iya zama abokin ciniki ya yi gajeren kira.",
          quickCheck: [
            { objective: "O4", q: "Mece ce ƙaramar buƙata mai kyau a saƙon tuntuɓa?", options: ["Sa hannu a kwangilar shekara ɗaya yau", "Kira na minti 15", "Biyan kuɗin ajiya yanzu", "Raba bayanan kuɗinsu"], answer: 1, why: "Ƙaramar buƙata mai sauƙi kamar gajeren kira tana ƙara yiwuwar samun \"eh\" na farko." },
            { objective: "O4", q: "Daftarin saƙon AI ya ce kuna da \"shekaru 20 na ƙwarewar mai ba da shawara\". Ba ku da ko ɗaya. Me za ku yi?", options: ["Ku bar shi; yana da daɗin ji", "Ku canja shi zuwa shekaru 10", "Ku aika shi ga ƙarin mutane", "Ku cire shi ku faɗi ƙwarewarku ta soja ta gaske"], answer: 3, why: "Kowace magana dole ta zama gaskiya; ƙwarewarku ta gaske ita ce shaidarku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubuta shawarar aiki (proposal) da AI",
          minutes: 6,
          goal: "Rubuta daftarin shawarar aiki ta shafi ɗaya da AI, da gyara ta har ta zama daidai.",
          text: [
            "Shawarar aiki (proposal) ita ce tsarinku don matsalar abokin ciniki. Tana aiki kamar umarnin aiki na soja (operations order): halin da ake ciki (matsalar), manufa (abin da za ku yi), aiwatarwa (matakai da lokaci), da abin da abokin ciniki zai samu (deliverables).",
            "Ku ba AI bayanan da kuka rubuta daga kiran da kuka yi da abokin ciniki, ba tare da bayanan sirri na abokin ciniki ba, ku nemi shawarar aiki ta shafi ɗaya da waɗannan kanun. Sannan ku gyara sosai: ku cire duk abin da bai fito fili ba, ku gyara ranaku, kuma ku sa iyakar aikin (scope) ta fito a sarari don kada aikin ya ci gaba da girma.",
            "Ku ne kuke sa farashi, ba AI ba. Ku yi tunani game da awoyinku, kuɗaɗenku da darajar sakamakon ga abokin ciniki. Ku tambayi mai ba da shawara na VBOC ko wasu masu ba da shawara a fanninku abin da aka saba."
          ],
          steps: ["Ku rubuta bayanai daga tattaunawa da abokin ciniki (babu bayanan sirri).", "Ku nemi mataimakin AI ya rubuta shawarar aiki ta shafi ɗaya: matsala, abin da zan yi, lokaci, deliverables, farashi.", "Ku sa iyakar aikin ta zama takamaimai: abin da ke ciki da abin da ba ya ciki.", "Ku ƙara farashinku na kanku.", "Ku karanta ta kamar ku ne abokin ciniki: akwai wani abu da bai fito fili ba?"],
          words: [["Shawarar aiki (proposal)", "rubutaccen tsari da farashi don warware matsalar abokin ciniki."], ["Iyakar aiki (scope)", "ainihin aikin da ke ciki da wanda ba ya ciki."], ["Girman aiki fiye da yarjejeniya (scope creep)", "lokacin da aiki ke ci gaba da girma fiye da abin da aka amince da shi."]],
          slides: [
            { title: "Shawarar aiki = umarnin aiki na soja", bullets: ["Halin da ake ciki: matsalar", "Manufa: abin da za ku yi", "Aiwatarwa: matakai da lokaci", "Deliverables: abin da za su samu"] },
            { title: "AI yana rubuta daftari, ku kuna gyarawa", bullets: ["Ku ba shi bayanai, babu bayanan sirri na abokin ciniki", "Ku cire kalmomin da ba su fito fili ba, ku gyara ranaku", "Iyakar aiki a sarari tana hana scope creep"] },
            { title: "Ku ne kuke sa farashi", bullets: ["Awoyinku da kuɗaɗenku", "Darajar sakamakon", "Ku tambayi mai ba da shawara na VBOC abin da aka saba"] }
          ],
          tryIt: "Ku yi amfani da tayinku da abokin ciniki na ƙirƙira. Ku nemi mataimakin AI ya rubuta shawarar aiki ta shafi ɗaya da kanun biyar, sannan ku gyara iyakar aikin ku ƙara farashinku na kanku.",
          youCanNow: "rubuta da gyara shawarar aiki ta shafi ɗaya a sarari tare da taimakon AI.",
          quickCheck: [
            { objective: "O5", q: "Mece ce ma'anar scope (iyakar aiki) a shawarar aiki?", options: ["Ainihin aikin da ke ciki da wanda ba ya ciki", "Adireshin abokin ciniki", "Nau'in rubutun da kuke amfani da shi", "Farashinku na kowace awa kawai"], answer: 0, why: "Scope tana sa iyakoki a sarari ga aikin, kuma tana hana scope creep." },
            { objective: "O5", q: "AI ya ba da shawarar farashi don shawarar aikinku. Me za ku yi?", options: ["Ku yi amfani da farashin AI", "Ku bar farashin", "Ku sa farashinku bisa awoyinku, kuɗaɗenku da darajar aikin", "Ku nemi abokin ciniki ya zaɓi kowane farashi"], answer: 2, why: "Ku ne kuke sa farashi; AI bai san kuɗaɗenku ko darajar aikinku ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Miƙa aikin da kare abokin ciniki",
          minutes: 5,
          goal: "Sa dokokin amfani da AI a aikin abokin ciniki da ke kare bayanansa.",
          text: [
            "Abokan ciniki suna amincewa da ku da bayanansu: sunayen ma'aikata, kuɗi, tsare-tsare da matsaloli. Kada ku liƙa bayanan sirri na abokin ciniki a kayan AI na jama'a sai abokin ciniki ya yarda kuma an amince da kayan don haka.",
            "Ku duba duk abin da AI ya fitar kafin abokin ciniki ya gani: bayanai na gaskiya, lambobi, sunaye da dokoki. Ku ne ke da alhakin aikin, ba AI ba.",
            "Ku bayyana yadda kuke amfani da AI. Layi mai sauƙi a cikin shawarar aikinku ya isa: \"Ina amfani da kayan AI don rubuta daftarin takardu; ina duba dukkan aikin kuma ba na raba bayananku na sirri da su.\""
          ],
          steps: ["Ku hana bayanan sirri na abokin ciniki shiga kayan AI na jama'a.", "Ku yi amfani da madadi kamar [sunan abokin ciniki] lokacin rubuta daftari.", "Ku duba kowane bayani, lamba da doka kafin ku miƙa aikin.", "Ku ƙara layi ɗaya a shawarar aikinku game da yadda kuke amfani da AI."],
          words: [["Sirri (confidential)", "bayanan da abokin ciniki ke son a kiyaye su a ɓoye."], ["Kayan da aka amince da shi (approved tool)", "kayan AI da abokin ciniki ya yarda ku yi amfani da shi da bayanansa."]],
          slides: [
            { title: "Ku kare bayanan abokin ciniki", bullets: ["Babu bayanan sirri na abokin ciniki a kayan AI na jama'a", "Ku yi amfani da madadi kamar [sunan abokin ciniki]"] },
            { title: "Aikin naku ne", bullets: ["Ku duba bayanai, lambobi, sunaye da dokoki", "AI ba shi da alhaki; ku ne ke da shi"] },
            { title: "Ku bayyana amfani da AI", bullets: ["Ku faɗi yadda kuke amfani da shi a shawarar aiki", "\"Ina duba dukkan aiki kuma ina kare bayananku\""] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala shawarar aikinku ta shafi ɗaya. Ku ƙara layin amfani da AI, ku duba cewa kowace magana gaskiya ce, kuma ku rubuta sunan ofishin kasuwanci na hukuma mai kyauta da za ku tuntuɓa a gaba.",
          youCanNow: "ba da hidimar mai ba da shawara bisa ƙwarewarku ta soja, rubuta shawarar aiki da AI, da kare bayanan abokin cinikinku.",
          quickCheck: [
            { objective: "O6", q: "Me madadi kamar [sunan abokin ciniki] yake yi?", options: ["Yana ɓoye sunanku", "Yana tsawaita shawarar aiki", "Yana aika shawarar aiki da kansa", "Yana bar ku rubuta daftari da AI ba tare da raba bayanan sirri ba"], answer: 3, why: "Madadi yana hana bayanan abokin ciniki shiga AI yayin da kuke rubuta daftari." },
            { objective: "O6", q: "Abokin ciniki ya turo tsare-tsarensa na sirri kuma kuna son taimakon AI. Me za ku fara yi?", options: ["Ku liƙa su a kowane AI na jama'a", "Ku tabbatar abokin ciniki ya yarda kuma an amince da kayan don haka", "Ku saka su a intanet don jin ra'ayoyi", "Ku raba su da wani abokin ciniki"], answer: 1, why: "Bayanan sirri na abokin ciniki suna shiga kayan AI ne kawai da yardar abokin ciniki da kayan da aka amince da shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Samun aiki da yin sa",
        questions: [
          { objective: "O4", q: "Daga ina abokan ciniki na farko na mai ba da shawara suke yawan fitowa?", options: ["Babu inda", "Tallace-tallacen da ke tasowa (pop-up) barkatai", "Kiran baƙi kai tsaye kawai", "Mutane da ƙungiyoyin da suka riga suka san ku"], answer: 3, why: "Amincewar mutanen da suka san ku ce ke buɗe ƙofofi da sauri." },
          { objective: "O4", q: "Mece ce ƙaramar buƙata mai kyau a saƙon tuntuɓa?", options: ["Kira na minti 15", "Kwangilar shekara ɗaya", "Bayanan bankinsu", "Babban biyan kuɗi tun farko"], answer: 0, why: "Gajeren kira yana da sauƙin a ce masa \"eh\"." },
          { objective: "O5", q: "Wane ne ya kamata ya sa farashinku?", options: ["Wani shafin intanet barkatai", "AI", "Ku, bisa awoyi, kuɗaɗe da daraja", "Abokin ciniki shi kaɗai"], answer: 2, why: "Sa farashi shawarar kasuwancinku ce." },
          { objective: "O5", q: "Mene ne scope creep?", options: ["Miƙa aiki da sauri", "Wani nau'in AI", "Takardar shari'a", "Lokacin da aiki ke ci gaba da girma fiye da abin da aka amince da shi"], answer: 3, why: "Iyakar aiki a sarari tana hana aiki girma ba tare da biya ba." },
          { objective: "O6", q: "Kuna iya liƙa tsare-tsaren sirri na abokin ciniki a kayan AI na jama'a?", options: ["Eh, idan zai rage lokaci", "Koyaushe", "Sai dai idan abokin ciniki ya yarda kuma an amince da kayan don haka", "Eh, idan za ku goge su daga baya"], answer: 2, why: "Bayanan abokin ciniki suna buƙatar yardarsa da kayan da aka amince da shi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Damar Aikin Mai Ba da Shawara (Consulting) da AI",
    questions: [
      { objective: "O1", q: "Deliverable (abin da za a miƙa) shi ne:", options: ["Motarku", "Abin da kuke bayarwa a ƙarshe, kamar tsari ko rahoto", "Lambar takardar kuɗinku (invoice)", "Kayan AI"], answer: 1, why: "Deliverables su ne sakamakon da abokin ciniki ke karɓa." },
      { objective: "O1", q: "Wace ce hanya ɗaya da AI ke taimaka wa masu ba da shawara?", options: ["Rubuta daftarin shawarwarin aiki da rahotanni", "Maye gurbin dukkan hukunci", "Sa hannu a kwangiloli", "Riƙe izinin tsaro (clearance)"], answer: 0, why: "AI yana hanzarta rubuta daftari; ku ne har yanzu kuke yanke shawara." },
      { objective: "O1", q: "Aikin mai ba da shawara kan AI zai iya haɗawa da:", options: ["Sayar da bayanan abokan ciniki", "Kutsawa cikin kwamfutocin masu gasa", "Taimaka wa ƙaramar ƙungiya ta rubuta sauƙaƙƙen tsarin amfani da AI", "Ba da tabbacin riba"], answer: 2, why: "Fara amfani da AI lafiya buƙata ce ta gaske da ake neman masu ba da shawara a kai." },
      { objective: "O2", q: "Sassa uku na tayi su ne:", options: ["Wanda kuke taimaka wa, matsalar, da sakamakon", "Tambari, launi da nau'in rubutu", "Muƙami, runduna da sansani", "Farashi, haraji da kuɗaɗe"], answer: 0, why: "Waɗannan suna sa tayin ya fito a sarari ga mai saye." },
      { objective: "O2", q: "Niche shi ne:", options: ["Manhajar AI", "Wani nau'in haraji", "Lambar yabo ta soja", "Ƙaramin rukuni na musamman na abokan ciniki da kuka mai da hankali a kai"], answer: 3, why: "Mai da hankali yana sa tayinku ya fi sauƙin sayarwa." },
      { objective: "O2", q: "Tsohon mai horarwa zai iya yin tayin:", options: ["Tuƙa jirgin sama ba tare da lasisi ba", "Taimaka wa ƙungiyoyin sa-kai su karɓi sababbin masu aikin sa-kai su koya musu aiki", "Ba da shawarar shari'a", "Sayar da kuɗin crypto"], answer: 1, why: "Ƙwarewar horarwa tana dacewa kai tsaye." },
      { objective: "O3", q: "Wane ne ke gudanar da Boots to Business?", options: ["Wani banki mai zaman kansa", "SBA, a matsayin ɓangare na Transition Assistance Program", "Wani dandalin sada zumunta", "IRS"], answer: 1, why: "SBA ce ke gudanar da shi a cikin TAP." },
      { objective: "O3", q: "Boots to Business Reboot na su wane ne?", options: ["Ɗalibai kaɗai", "Hafsoshi da ke kan aiki kaɗai", "Farar hula kaɗai", "Tsofaffin sojoji na kowane zamani, har da Guard da Reserve"], answer: 3, why: "SBA ta ce Reboot yana yi wa tsofaffin sojoji na kowane zamani hidima." },
      { objective: "O3", q: "VetCert shi ne:", options: ["Takardar shaidar SBA ga ƙananan kasuwancin da tsofaffin sojoji, ko tsofaffin sojoji masu nakasa daga aiki, suka mallaka", "Takardar haraji", "Dandalin neman aiki", "Biyan kuɗin GI Bill"], answer: 0, why: "SBA ce ke gudanar da VetCert don kwangilolin gwamnati." },
      { objective: "O3", q: "A ina ake neman VetCert?", options: ["Kowace hirar AI", "Hanyar haɗi a cikin saƙon tes", "certifications.sba.gov", "Shafin kafofin sada zumunta"], answer: 2, why: "Shafin takardar shaida na SBA ne ke karɓar buƙatun." },
      { objective: "O3", q: "Tambayoyi game da lasisin kasuwanci da haraji sun fi dacewa a kai su ga:", options: ["Babu kowa", "Hirar AI kaɗai", "Wani dandalin tattaunawa barkatai", "Ofishin kasuwanci na jiharku, irs.gov ko mai ba da shawara na VBOC"], answer: 3, why: "Ofisoshin hukuma da masu ba da shawara ne ke ba da dokokin yanzu." },
      { objective: "O4", q: "Saƙon tuntuɓa mai kyau ya haɗa da:", options: ["Lambar Social Security ɗinku", "Dukkan labarin rayuwarku", "Ko ku wane ne, matsalar, shaida ɗaya da ƙaramar buƙata", "Neman a biya ku"], answer: 2, why: "Gajere kuma takamaimai yana samun amsa." },
      { objective: "O4", q: "Daftarin AI ya ce kuna da takardar shaidar da ba ku da ita. Ya kamata ku:", options: ["Ku bar ta", "Ku cire ta", "Ku ƙara wasu biyu", "Ku nemi abokin ciniki kada ya duba"], answer: 1, why: "Kowace magana dole ta zama gaskiya." },
      { objective: "O5", q: "Shawarar aiki tana kama da wace takardar soja?", options: ["Umarnin aiki (operations order)", "Takardar neman hutu", "Binciken kayan soja", "Takardar albashi"], answer: 0, why: "Dukkansu suna bayyana halin da ake ciki, manufa da aiwatarwa." },
      { objective: "O5", q: "Scope a shawarar aiki tana nufin:", options: ["Farashi kaɗai", "Madubin hangen bindiga", "Ainihin aikin da ke ciki da wanda ba ya ciki", "Adireshin abokin ciniki"], answer: 2, why: "Iyakar aiki a sarari tana hana jayayya." },
      { objective: "O5", q: "Idan kuna neman AI ya rubuta daftarin shawarar aiki, ku ba shi:", options: ["Bayananku ba tare da bayanan sirri na abokin ciniki ba", "Bayanan bankin abokin ciniki", "Adireshin gidajen ma'aikata", "Kalmomin sirri (password)"], answer: 0, why: "Ku hana bayanan sirri na abokin ciniki shiga." },
      { objective: "O6", q: "Wane ne ke da alhakin kurakurai a aikin abokin ciniki da AI ya rubuta daftarinsa?", options: ["Abokin ciniki", "Kamfanin AI", "Babu kowa", "Ku"], answer: 3, why: "Ku ne kuke miƙa aikin, don haka naku ne." },
      { objective: "O6", q: "Me ya kamata ku duba kafin ku miƙa aikin da AI ya rubuta daftarinsa?", options: ["Nau'in rubutu kaɗai", "Bayanai, lambobi, sunaye da dokoki", "Babu komai", "Rubutun kalmomi kaɗai"], answer: 1, why: "AI yana iya yin kuskure kan bayanai." },
      { objective: "O6", q: "Ta yaya ya kamata ku faɗa wa abokan ciniki game da amfani da AI?", options: ["Ku ɓoye shi", "Layi a sarari a shawarar aiki kan yadda kuke amfani da shi da yadda kuke kare bayanansu", "Ku ce AI ne ya yi komai", "Kada ku taɓa ambatonsa"], answer: 1, why: "Bayyana gaskiya yana gina amincewa." },
      { objective: "O6", q: "Madadi kamar [sunan abokin ciniki] yana taimaka muku:", options: ["Samun takardar shaida", "Karɓar kuɗi da sauri", "Tsallake shawarar aiki", "Rubuta daftari da AI ba tare da raba bayanan sirri ba"], answer: 3, why: "Madadi yana hana sunaye na gaske shiga kayan AI." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      6,
      8,
      11,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Matsala da tayi",
        objective: "O2",
        notYet: "Matsalar abokin ciniki ko abin da za ku yi bai fito fili ba.",
        meets: "Yana faɗin matsalar abokin ciniki da abin da za ku yi, kuma ya dace da tayinku.",
        exceeds: "Yana amfani da kalmomin abokin ciniki da kansa wajen bayyana matsalar."
      },
      {
        name: "Iyakar aiki, deliverables da lokaci",
        objective: "O5",
        notYet: "Babu iyakar aiki, deliverables ko lokaci a sarari.",
        meets: "Iyakar aiki a sarari (abin da ke ciki da wanda ba ya ciki), abin da abokin ciniki zai samu da lokacin aiki.",
        exceeds: "Yana faɗin yadda za a magance canje-canje ga iyakar aikin."
      },
      {
        name: "Farashinku",
        objective: "O5",
        notYet: "Babu farashi, ko an yi amfani da farashin AI kamar yadda yake.",
        meets: "Farashin da mai koyo ya sa da kansa.",
        exceeds: "Mai koyo zai iya bayyana farashin daga awoyi, kuɗaɗe da daraja."
      },
      {
        name: "An kare bayanan abokin ciniki",
        objective: "O6",
        notYet: "Babu layin amfani da AI, ko an liƙa bayanan abokin ciniki a AI na jama'a.",
        meets: "Layi a sarari kan yadda ake amfani da AI da yadda ake kare bayanan abokin ciniki.",
        exceeds: "An yi amfani da madadi a dukkan rubutun daftari da AI."
      },
      {
        name: "Maganganu na gaskiya da mataki na gaba",
        objective: "O3",
        notYet: "Wata magana ba gaskiya ba ce, ko ba a ambaci ofishi ba.",
        meets: "Kowace magana gaskiya ce, kuma an rubuta ofishin kasuwanci na hukuma ɗaya mai kyauta a matsayin wanda za a tuntuɓa a gaba.",
        exceeds: "Mai koyo yana da tambaya a shirye ga wannan ofishin."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka aika aƙalla saƙonnin tuntuɓa uku cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka tuntuɓi VBOC ko suka shiga Boots to Business cikin kwanaki 60",
      "Masu koyo da suka sami abokin ciniki na farko mai biyan kuɗi cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko wayar zamani mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Shafin sba.gov kyauta don nemo Veterans Business Outreach Center",
      "Shirin rubutu (word processor) don shawarar aiki ta shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku sa masu koyo su gwada faɗin tayinsu na jimla ɗaya da babbar murya tare da abokin atisaye, su inganta shi sau ɗaya.",
      "Ku yi amfani da abokan ciniki na ƙirƙira a aji, kuma ku buƙaci madadi ga duk wani bayanin abokin ciniki.",
      "Kada ku ba da shawarar farashi; ku nemi kowane mai koyo ya bayyana yadda ya sa nasa.",
      "Ku gayyaci mai ba da shawara na VBOC ko SBA zuwa zama na ƙarshe don amsa tambayoyi kan kafa kasuwanci.",
      "Ku ba da maki ga shawarar aiki da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
