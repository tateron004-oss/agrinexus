"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-small-business.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-small-business-ha",
  lang: "ha",
  translationOf: "underserved-ai-small-business",
  category: "Undeserved Community",
  name: "AI don Kasuwanci da Ƙananan Sana'o'i",
  skills: "Mayar da ƙwarewa zuwa tayin kasuwanci, Sanya farashi bisa ainihin kuɗaɗen aiki, Neman taimakon kasuwanci kyauta, Rubuta bayanin kasuwanci da saƙon kafar sada zumunta, Ajiye bayanan kuɗi masu sauƙi, Amsa abokan ciniki",
  outcome: "amfani da mataimakin AI kyauta don tsara ƙaramar sana'a a shafi ɗaya: tayi a sarari, farashin da ke biyan kuɗaɗen aikinku, gajeren bayanin kasuwanci da saƙo, bayanan kuɗi masu sauƙi, da mai ba da shawara kyauta da za ku tattauna da shi a gaba.",
  about: [
    "Mutane da yawa sun riga sun fara ƙananan sana'o'i: kitso, dafa abinci don biki, share gidaje, gyaran lambu, koyarwa, gyaran waya ko sayar da kayan hannu. Wasu kuma suna da ƙwarewa kuma suna son farawa. Wannan kwas ɗin na duka biyun ne.",
    "Za ku yi amfani da mataimakin AI kyauta don mayar da ƙwarewarku zuwa tayi a sarari, ku lissafa farashin da ke biyan kuɗaɗen aikinku, ku nemo taimakon kasuwanci kyauta, ku rubuta gajeren bayani da saƙon kafar sada zumunta, ku ajiye bayanan kuɗi masu sauƙi, kuma ku amsa abokan ciniki da kyau.",
    "AI yana taimaka muku tunani da rubutu. Ba ya maye gurbin shawarar gaskiya game da haraji, lasisi ko doka. Kowane darasi yana nuna muku taimakon hukuma kyauta. Kowane darasi yana ɗaukar kusan minti biyar, akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi tsarin shafi ɗaya don ƙaramar sana'ar da kuke yi ko kuke son farawa: tayinku da waɗanda yake domin su, farashin da ke biyan kuɗaɗen aikinku (kun duba lissafin da kanku), bayanin kasuwanci mai jimloli uku, saƙo ɗaya na kafar sada zumunta, da suna da hanyar tuntuɓar mai ba da shawarar kasuwanci kyauta kusa da ku (SCORE, Small Business Development Center ko Women's Business Center).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutane a al'ummomin da ba a kula da su sosai ba, waɗanda ke da ƙaramar sana'a ko suke son farawa: masu kitso, masu dafa abinci don biki, masu share gidaje, masu gyaran lambu, malaman koyarwa, masu gyaran waya da masu sayar da kayan hannu. Da yawa suna karɓar kuɗi hannu da hannu ko suna aiki na ɗan lokaci.",
    startingPoint: "Suna da ƙwarewar da mutane ke biyan kuɗi a kanta, wasu kuma sun riga suna da abokan ciniki. Kaɗan ne ke da rubutaccen tayi, farashi bisa kuɗaɗen aiki, bayanan kuɗi ko mai ba da shawarar kasuwanci, kuma yawancinsu ba su taɓa amfani da AI don ayyukan kasuwanci ba.",
    gap: "Ƙananan sana'o'i da yawa suna karɓar kuɗi kaɗan fiye da yadda ya kamata, ba sa ajiye bayanai, kuma ba sa samun shawara kyauta, don haka suna asara ko su tsaya a wuri ɗaya. Masu koyo suna buƙatar tsari mai sauƙi na shafi ɗaya, lissafin da aka duba, da mai ba da shawara kyauta don su bunƙasa lafiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6)",
      "Na'urori: wayar zamani (smartphone) ko kwamfutar ɗakin karatu",
      "Kuɗi: kayan aiki kyauta da masu ba da shawara kyauta ko masu araha kaɗai",
      "AI bai san farashin wurinku, haraji ko dokokin lasisi ba: masu koyo suna duba lissafin kuma suna tambayar majiyoyin hukuma ko mai ba da shawara",
      "Sirri: babu lambar asusun banki a cikin AI, kuma babu adireshin gida a saƙonnin da jama'a ke gani"
    ],
    prerequisites: "Babu. Masu koyo da suke sababbi ga mataimakan AI za su iya fara ɗaukar kwas ɗin \"Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ƙwarewar da mutane suka riga suke roƙonku da ita", action: "rubuta tayi mai jimla ɗaya da ke faɗin abin da kuke yi, waɗanda yake domin su, da abin da ya bambanta ku", standard: "da kalmomin da suke kama da ku" },
    { id: "O2", condition: "Idan kuna da kuɗaɗe da awoyin aiki ɗaya", action: "lissafa farashin da ke biyan kuɗaɗen aikinku kuma ya biya ku lokacinku", standard: "kuna duba lissafin AI da kanku da na'urar lissafi (calculator) kuma kuna kwatanta farashin wurinku" },
    { id: "O3", condition: "Ta amfani da shafin abokan aikin SBA (resource partners)", action: "nemo mai ba da shawarar kasuwanci kyauta kusa da ku da shirya abin da za ku tambaya", standard: "kuna rubuta sunansa, hanyar tuntuɓarsa da tambayoyi uku" },
    { id: "O4", condition: "Idan kuna da tayinku", action: "rubuta bayanin kasuwanci mai jimloli uku da saƙo ɗaya na kafar sada zumunta tare da mataimakin AI", standard: "kowane alƙawari gaskiya ne, kuma da bayanan tuntuɓa masu aminci kaɗai" },
    { id: "O5", condition: "Ta amfani da Google Sheets ko Excel a intanet", action: "ƙirƙirar takardar kuɗi mai sauƙi da rubuta sayarwa da kashe kuɗi", standard: "da dukkan layuka biyar (columns), jimloli, da rubutun da aka yi a ranar da abin ya faru" },
    { id: "O6", condition: "Idan kun sami saƙo ko ƙorafi daga abokin ciniki", action: "rubuta amsa mai ladabi da haɗa aikinku zuwa tsarin kasuwanci na shafi ɗaya", standard: "kuna tayin abin da za ku iya ɗauka kaɗai, kuma kuna sa kowane sashe na tsarin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Daga ƙwarewa zuwa kasuwanci",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mayar da ƙwarewa zuwa tayi a sarari",
          minutes: 5,
          goal: "Rubuta tayi mai jimla ɗaya da ke faɗin abin da kuke sayarwa, ga wa, da dalilin da zai sa su zaɓe ku.",
          text: [
            "Kasuwanci yana farawa da abin da mutane ke buƙata kuma za su biya kuɗi a kansa. Ku yi tunanin abin da maƙwabta suka riga suke roƙonku ku yi: dafa abinci don biki, kitso, gyaran abubuwa, kula da yara, yanke ciyawa.",
            "Tayi a sarari yana faɗin abin da kuke yi, waɗanda yake domin su, da abin da ya bambanta ku. Misali: \"Shirya abincin ƙarshen mako ga iyalai masu aiki a gabashin gari, abinci irin na gida a farashi mai adalci.\"",
            "Ku nemi AI ya taimaka: \"Na iya dafa abincin Caribbean sosai, kuma mutane suna roƙona in dafa musu abinci a bukukuwa. Ka taimake ni in rubuta tayi uku masu jimla ɗaya don ƙaramar sana'ar dafa abinci, kowanne don nau'in abokin ciniki daban.\" Sannan ku zaɓi wanda ya fi kama da ku."
          ],
          steps: ["Ku rubuta abubuwan da mutane suka riga suke roƙonku ku yi.", "Ku zaɓi ƙwarewa ɗaya da mutane za su biya kuɗi a kanta.", "Ku nemi AI tayi uku masu jimla ɗaya don abokan ciniki daban-daban.", "Ku zaɓi wanda ya fi dacewa da ku ku gyara shi."],
          words: [["Tayi (offer)", "gajeren bayanin abin da kuke sayarwa da waɗanda yake domin su."], ["Abokin ciniki (customer)", "mutumin da ke biyan kuɗi don abin da kuke sayarwa."]],
          slides: [
            { title: "Ku fara da abin da mutane ke roƙonku", bullets: ["Dafa abinci, kitso, shara, gyare-gyare", "Kula da yara, koyarwa, gyaran lambu"] },
            { title: "Tayi a sarari yana faɗin", bullets: ["Abin da kuke yi", "Waɗanda yake domin su", "Abin da ya bambanta ku"] },
            { title: "Ku nemi zaɓuɓɓuka daga AI", bullets: ["Tayi uku don nau'o'in abokan ciniki uku", "Ku zaɓi wanda ya fi kama da ku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya rubuta tayi uku masu jimla ɗaya don wata ƙwarewa da kuke da ita. Ku zaɓi ɗaya ku canja shi don ya yi kama da ku.",
          youCanNow: "mayar da ƙwarewa zuwa tayin kasuwanci a sarari mai jimla ɗaya.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne tayi a sarari?", options: ["Shirya abincin ƙarshen mako ga iyalai masu aiki a gabashin gari, irin na gida a farashi mai adalci", "Ina dafa abubuwa", "Abinci na sayarwa", "Kasuwanci mafi kyau a duniya"], answer: 0, why: "Yana faɗin abin da kuke yi, waɗanda yake domin su da abin da ya bambanta ku." },
            { objective: "O1", q: "AI ya ba ku tayi uku, amma babu wanda ya yi kama da ku. Me za ku yi?", options: ["Ku yi amfani da na farko duk da haka", "Ku zaɓi ɗaya ku canja kalmominsa don ya yi kama da ku", "Ku haƙura da kasuwancin", "Ku kwafi tayin wani mai gasa da ku"], answer: 1, why: "Tayin ya kamata ya zama naku, don haka ku gyara mafi kyau ya dace da ku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sanya farashi don kada ku yi asara",
          minutes: 6,
          goal: "Lissafa farashin da ke biyan kuɗaɗen aikinku kuma ya biya ku lokacinku.",
          text: [
            "Ƙananan sana'o'i da yawa suna karɓar kuɗi kaɗan fiye da yadda ya kamata. Don sanya farashi mai adalci, ku haɗa kuɗaɗen aikinku: kayan aiki, mai ko kuɗin mota, duk wani kuɗin biya (fees), da lokacinku.",
            "Ku nemi AI ya shirya lissafin tare da ku, da lambobinku na gaske: \"Zan dafa abinci don biki na mutane 20. Abinci yana kashe $120, kwanuka $15, mai $10, kuma yana ɗaukar ni awa 8. Ina son samun $18 a kowace awa. Wane farashi ne zai biya duka?\" Sannan ku duba lissafin da kanku da na'urar lissafi.",
            "AI bai san farashin wurinku ba. Ku duba abin da wasu kusa da ku ke karɓa, kuma ku tambayi mai ba da shawarar kasuwanci kyauta. Haraji da lasisi ma kuɗaɗe ne na gaske: ku tambayi birninku ko gundumarku (county), jiharku, da IRS (hukumar haraji ta Amurka, irs.gov) game da abin da ya shafe ku."
          ],
          steps: ["Ku rubuta kowane kuɗin aiki ɗaya: kayan aiki, tafiya, kuɗin biya.", "Ku yanke nawa kuke son samu a kowace awa, kuma ku ƙirga awoyinku.", "Ku nemi AI ya haɗa su da lambobinku.", "Ku duba lissafin da kanku da na'urar lissafi.", "Ku kwatanta da farashin wurinku kuma ku tambayi mai ba da shawara."],
          words: [["Kuɗin aiki (cost)", "kuɗin da kuke kashewa don yin aikin."], ["Riba (profit)", "kuɗin da ya rage bayan kun biya dukkan kuɗaɗen aikinku."]],
          slides: [
            { title: "Ƙananan sana'o'i da yawa suna karɓar kuɗi kaɗan", bullets: ["Ku ƙirga kowane kuɗin aiki", "Ku ƙirga lokacinku"] },
            { title: "Kuɗaɗen da za ku haɗa", bullets: ["Kayan aiki", "Mai ko kuɗin mota", "Kuɗin biya (fees)", "Awoyinku"] },
            { title: "Ku yi amfani da AI, sannan ku duba", bullets: ["Ku ba shi lambobinku na gaske", "Ku duba lissafin da na'urar lissafi", "Ku kwatanta farashin wurinku ku tambayi mai ba da shawara"] }
          ],
          sources: [{ name: "IRS: Ƙananan sana'o'i da masu aikin kansu", url: "https://www.irs.gov/businesses/small-businesses-self-employed" }],
          tryIt: "Ku zaɓi aiki ɗaya da kasuwancinku zai yi. Ku rubuta kuɗaɗe da awoyi, ku nemi mataimakin AI ya lissafa farashin da zai biya su, sannan ku duba lissafin da kanku.",
          youCanNow: "sanya farashin da ke biyan kuɗaɗen aikinku da lokacinku, da duba lissafin da kanku.",
          quickCheck: [
            { objective: "O2", q: "Wane kuɗin aiki ne masu ƙananan sana'o'i da yawa ke mantawa su ƙirga?", options: ["Kayan aiki", "Kuɗin biya", "Lokacinsu", "Mai"], answer: 2, why: "Lokacinku ma kuɗin aiki ne, don haka farashin dole ya biya ku awoyinku." },
            { objective: "O2", q: "AI ya ce farashinku ya zama $150, amma kuɗaɗen aikinku sun kai $160. Me za ku yi?", options: ["Ku karɓi $150", "Ku rage farashi don samun abokan ciniki", "Ku manta da kuɗaɗen aikinku", "Ku sake duba lissafin da na'urar lissafi ku gyara farashin"], answer: 3, why: "AI yana iya yin kuskure a lissafi, kuma farashin da ke ƙasa da kuɗaɗen aikinku yana kawo asara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Neman taimakon kasuwanci kyauta",
          minutes: 4,
          goal: "Nemo mai ba da shawarar kasuwanci kyauta kusa da ku.",
          text: [
            "Ba sai kun gane komai ku kaɗai ba. Hukumar Ƙananan Sana'o'i ta Amurka (SBA) tana aiki da abokan aiki (resource partners) da ke taimaka wa mutane farawa da bunƙasa kasuwanci.",
            "SCORE ƙungiya ce ta masu ba da shawarar kasuwanci na sa-kai da ke ba da shawara ba tare da biya ba. Small Business Development Centers (SBDCs) suna ba da shawarwari da horo. Women's Business Centers suna ba da taimako kyauta ko mai araha ga mata da ke farawa ko bunƙasa kasuwanci. Veterans Business Outreach Centers suna hidima ga tsofaffin sojoji da iyalan sojoji.",
            "Waɗannan masu ba da shawara za su iya taimakawa game da lasisi, haraji, rance da tsare-tsare na wurinku. Ku zo da tambayoyinku da tsarinku na shafi ɗaya."
          ],
          steps: ["Ku buɗe shafin abokan aikin SBA (resource partners).", "Ku nemo SCORE, SBDC ko Women's Business Center kusa da ku.", "Ku rubuta sunan da yadda za ku tuntuɓe su.", "Ku rubuta tambayoyi uku da za ku yi, kamar waɗanne lasisi kuke buƙata."],
          words: [["Mai ba da shawara (mentor)", "gogaggen mutum da ke ba ku shawara."], ["SBA", "U.S. Small Business Administration, hukumar gwamnatin tarayyar Amurka da ke taimaka wa ƙananan sana'o'i."]],
          sources: [{ name: "SBA: Abokan aiki (resource partners)", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          slides: [
            { title: "Ba ku kaɗai ba ne", bullets: ["SBA tana aiki da masu taimako kyauta da masu araha"] },
            { title: "Waɗanda za su iya taimakawa", bullets: ["SCORE: masu ba da shawara na sa-kai ba tare da biya ba", "SBDCs: shawarwari da horo", "Women's Business Centers: kyauta ko mai araha"] },
            { title: "Ku zo a shirye", bullets: ["Ku zo da tsarinku na shafi ɗaya", "Ku tambaya game da lasisi, haraji da rance na wurinku"] }
          ],
          tryIt: "Ku nemo mai ba da shawarar kasuwanci kyauta ɗaya kusa da ku ta shafin abokan aikin SBA. Ku rubuta sunansa, hanyar tuntuɓarsa da tambayoyi uku da za ku yi.",
          youCanNow: "nemo taimakon kasuwanci na hukuma kyauta kusa da ku.",
          quickCheck: [
            { objective: "O3", q: "Mene ne SCORE?", options: ["Ƙungiyar masu ba da shawarar kasuwanci na sa-kai da ke ba da shawara ba tare da biya ba", "Kamfanin maki na bashi (credit score)", "Hidimar rance da ake biya", "Ofishin haraji na jiha"], answer: 0, why: "SCORE abokin aikin SBA ne mai masu ba da shawara na sa-kai ba tare da biya ba." },
            { objective: "O3", q: "Ba ku tabbata waɗanne lasisi sana'ar dafa abincinku ke buƙata ba. Me za ku yi?", options: ["Ku ƙyale lasisi", "Ku tambayi mai ba da shawarar kasuwanci kyauta kuma ku duba birninku, gundumarku da jiharku", "Ku amince da amsar AI ta farko", "Ku tambayi abokin ciniki"], answer: 1, why: "Masu ba da shawara da ofisoshin wurinku da na jiharku sun san dokokin wurinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Daga ƙwarewa zuwa kasuwanci",
        questions: [
          { objective: "O1", q: "Me tayi a sarari yake faɗi?", options: ["Labarin rayuwarku", "Abin da kuke yi, waɗanda yake domin su, da abin da ya bambanta ku", "Farashinku kaɗai", "Adireshin gidanku"], answer: 1, why: "Waɗannan sassa uku suna faɗa wa abokan ciniki dalilin da zai sa su zaɓe ku." },
          { objective: "O2", q: "Me ya kamata ku ƙirga lokacin da kuke sanya farashi?", options: ["Kayan aiki kaɗai", "Lokacinku kaɗai", "Kayan aiki, tafiya, kuɗin biya da lokacinku", "Babu komai; ku yi tsammani"], answer: 2, why: "Dole a biya dukkan kuɗaɗen aiki, har da lokacinku." },
          { objective: "O2", q: "AI ya lissafa muku farashi. Me za ku yi a gaba?", options: ["Ku duba lissafin da kanku ku kwatanta farashin wurinku", "Ku yi amfani da shi ba tare da dubawa ba", "Ku ninka shi biyu", "Kada ku taɓa karɓar kuɗi"], answer: 0, why: "AI yana iya yin kuskure a lissafi kuma bai san farashin wurinku ba." },
          { objective: "O3", q: "SCORE tana bayar da:", options: ["Rance da ake biya kaɗai", "Cike takardun haraji", "Lasisi", "Masu ba da shawarar kasuwanci na sa-kai ba tare da biya ba"], answer: 3, why: "SBA tana bayyana SCORE a matsayin masu ba da shawara na sa-kai da ke ba da shawara ba tare da biya ba." },
          { objective: "O3", q: "A ina ya kamata ku duba waɗanne lasisi kuke buƙata?", options: ["AI kaɗai", "Birninku ko gundumarku, jiharku, ko mai ba da shawarar kasuwanci kyauta", "Wani saƙo a kafar sada zumunta", "Aboki a wata jiha"], answer: 1, why: "Lasisi ya dogara da inda kuke; majiyoyin hukuma da masu ba da shawara sun sani." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanarwa da bunƙasa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta bayanin kasuwancinku da saƙo",
          minutes: 5,
          goal: "Rubuta bayanin kasuwanci mai jimloli uku da saƙo ɗaya na kafar sada zumunta.",
          text: [
            "Gajeren bayani yana faɗa wa mutane ko ku wane ne, abin da kuke yi da yadda za su same ku. Kuna iya amfani da shi a takardar talla (flyer), katin kasuwanci, ko shafin kasuwanci kyauta.",
            "Ku tambayi AI: \"Ka rubuta bayani mai daɗi mai jimloli uku don sana'ata ta shirya abincin ƙarshen mako ga iyalai masu aiki. Sannan ka rubuta gajeren saƙo ɗaya na Facebook da ke sanar da jerin abincina na farko.\" Ku nemi wani nau'i a wani harshe idan abokan cinikinku suna buƙata.",
            "Ku gyara shi don ya yi kama da ku. Ku yi alƙawarin abin da za ku iya cikawa kaɗai. Ku yi amfani da lambar wayar kasuwanci ko imel da ba ku damu da raba wa jama'a ba, ba adireshin gidanku ba."
          ],
          steps: ["Ku nemi AI bayani mai jimloli uku ta amfani da tayinku.", "Ku nemi gajeren saƙo ɗaya na kafar sada zumunta.", "Ku gyara duka biyun don su yi kama da ku.", "Ku duba cewa kowane alƙawari gaskiya ne kuma bayanan tuntuɓa suna da aminci a raba su."],
          words: [["Saƙon kafar sada zumunta (social media post)", "gajeren saƙo mai kalmomi da wataƙila hoto, da ake rabawa a manhajoji kamar Facebook ko Instagram."]],
          slides: [
            { title: "Gajeren bayani", bullets: ["Ko ku wane ne", "Abin da kuke yi", "Yadda za a same ku"] },
            { title: "Ku nemi duka biyun daga AI", bullets: ["Bayani mai jimloli uku", "Gajeren saƙo ɗaya", "Wani harshe idan ana buƙata"] },
            { title: "Kafin ku raba", bullets: ["Ku sa ya yi kama da ku", "Ku yi alƙawarin abin da za ku iya cikawa kaɗai", "Babu adireshin gida"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya rubuta bayanin kasuwancinku mai jimloli uku da gajeren saƙo ɗaya na kafar sada zumunta. Ku gyara duka biyun don su yi kama da ku.",
          youCanNow: "rubuta gajeren bayanin kasuwanci da saƙo da suke kama da ku.",
          quickCheck: [
            { objective: "O4", q: "Waɗanne abubuwa uku ne gajeren bayanin kasuwanci yake faɗa wa mutane?", options: ["Farashinku, bankinku da shekarunku", "Masu gasa da ku, tsoronku da burinku", "Ko ku wane ne, abin da kuke yi da yadda za a same ku", "Adireshin gidanku, lokutan aikinku da iyalinku"], answer: 2, why: "Bayani yana faɗin ko ku wane ne, abin da kuke yi da yadda za a same ku." },
            { objective: "O4", q: "Saƙon da AI ya rubuta ya yi alƙawarin \"kai kaya a rana ɗaya\" amma ba za ku iya ba. Me za ku yi?", options: ["Ku saka shi; yana da daɗin ji", "Ku ƙara shi a kowane saƙo", "Ku saka shi ku yi fata", "Ku cire alƙawarin kafin ku saka saƙon"], answer: 3, why: "Ku yi alƙawarin abin da za ku iya cikawa kaɗai." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ajiye bayanan kuɗi masu sauƙi",
          minutes: 5,
          goal: "Shirya takarda mai sauƙi kyauta don bin diddigin kuɗin da ke shigowa da wanda ke fita.",
          text: [
            "Ajiye bayanai yana taimaka muku ganin ko kuna samun riba, kuma za ku buƙace su lokacin haraji. Kuna iya farawa da takardar lissafi (spreadsheet) kyauta kamar Google Sheets ko Excel a intanet.",
            "Ku tambayi AI: \"Ka taimake ni in shirya takarda mai sauƙi don ƙaramar sana'ata da layuka (columns) na kwanan wata, mene ne, kuɗin shiga, kuɗin fita, da bayani. Ka nuna mini yadda ake haɗa kowane layi.\" Sannan ku yi ta da kanku.",
            "Ku rubuta kowace sayarwa da kowane kashe kuɗi a ranar da ya faru, kuma ku ajiye rasit (hoto ma ya isa). Ku tambayi mai ba da shawarar kasuwanci kyauta ko ƙwararren haraji waɗanne bayanai kuke buƙata don haraji. Kada ku rubuta lambobin asusun banki a cikin AI."
          ],
          steps: ["Ku buɗe Google Sheets ko Excel a intanet.", "Ku yi layuka: kwanan wata, mene ne, kuɗin shiga, kuɗin fita, bayani.", "Ku tambayi AI yadda ake haɗa kowane layi.", "Ku rubuta kowace sayarwa da kashe kuɗi a ranar da ya faru.", "Ku ajiye hoton kowane rasit."],
          words: [["Takardar lissafi (spreadsheet)", "tebur mai layuka da ginshiƙai don lambobi da jeri."], ["Kashe kuɗi (expense)", "kuɗin da kuke kashewa don kasuwancin."], ["Rasit (receipt)", "shaidar saye ko biyan kuɗi."]],
          slides: [
            { title: "Me yasa za ku ajiye bayanai", bullets: ["Don ganin ko kuna samun riba", "Kuna buƙatar su lokacin haraji"] },
            { title: "Takarda mai sauƙi", bullets: ["Kwanan wata, mene ne", "Kuɗin shiga, kuɗin fita", "Bayani"] },
            { title: "Kyawawan al'adu", bullets: ["Ku rubuta shi a ranar da ya faru", "Hoton kowane rasit", "Babu lambobin banki a cikin AI"] }
          ],
          tryIt: "Ku yi takarda mai sauƙi a Google Sheets ko Excel a intanet da layuka biyar ɗin. Ku ƙara sayarwa uku na gwaji da kashe kuɗi biyu, sannan ku haɗa kuɗin shiga da kuɗin fita.",
          youCanNow: "ajiye bayanan kuɗi masu sauƙi na ƙaramar sana'a a takardar lissafi kyauta.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku ajiye bayanan kuɗi masu sauƙi?", options: ["Don ganin ko kuna samun riba da kasancewa a shirye lokacin haraji", "Domin AI yana buƙatar su", "Don raba wa abokan ciniki", "Don saka su a intanet"], answer: 0, why: "Bayanai suna nuna ko kuna samun riba, kuma kuna buƙatar su don haraji." },
            { objective: "O5", q: "Kun sayi kayan aiki na $30 amma rasit ɗin takarda ya ɓace. Me za ku iya yi a da?", options: ["Babu komai; rasit ba shi da muhimmanci", "Ɗaukar hoton rasit ɗin a ranar", "Rubuta lambar bankinku a cikin AI", "Yin tsammanin adadin lokacin haraji"], answer: 1, why: "Hoton kowane rasit yana ajiye bayani ko da takardar ta ɓace." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Amsa abokan ciniki da haɗa komai wuri ɗaya",
          minutes: 5,
          goal: "Rubuta amsoshi masu ladabi ga abokan ciniki da kammala tsarin kasuwancinku na shafi ɗaya.",
          text: [
            "Kyakkyawar hidima tana dawo da abokan ciniki. AI zai iya taimaka muku rubuta amsoshi masu ladabi da sauri: tabbatar da oda, faɗin cewa babu sauran wuri, ko magance ƙorafi cikin natsuwa.",
            "Don ƙorafi, ku tambaya: \"Ka rubuta amsa mai natsuwa da kirki ga abokin cinikin da ya ce abinci ya iso a makare. Ka nemi gafara, ka bayyana cewa za mu gyara, kuma ka yi tayin ɗan ragi a gaba.\" Ku karanta shi ku tabbata tayin wanda za ku iya ɗauka ne.",
            "Yanzu ku haɗa aikinku a shafi ɗaya: tayinku, farashinku da kuɗaɗen aiki, bayaninku da saƙonku, bayani game da bayanan kuɗinku, da mai ba da shawara kyauta da kuka samo. Wannan shafin shi ne farkon tsarin kasuwancinku."
          ],
          steps: ["Ku nemi AI amsa mai ladabi ga saƙon abokin ciniki da aka saba samu.", "Ku duba kowane alƙawari kafin ku aika.", "Ku sa tayinku, farashi, bayani, saƙo, bayanin bayanan kuɗi da mai ba da shawara a shafi ɗaya.", "Ku kai shafin zuwa ganawarku da mai ba da shawara kyauta."],
          words: [["Tsarin kasuwanci (business plan)", "rubutaccen tsari na abin da kasuwancinku ke sayarwa, ga wa, da yadda zai samu kuɗi."]],
          slides: [
            { title: "Kyakkyawar hidima tana dawo da abokan ciniki", bullets: ["Ku tabbatar da oda", "Ku faɗi \"babu sauran wuri\" cikin kirki", "Ku magance ƙorafi cikin natsuwa"] },
            { title: "Amsoshin ƙorafi", bullets: ["Ku nemi gafara", "Ku faɗi yadda za ku gyara", "Ku yi tayin abin da za ku iya ɗauka kaɗai"] },
            { title: "Tsarinku na shafi ɗaya", bullets: ["Tayi da farashi", "Bayani da saƙo", "Bayanan kuɗi da mai ba da shawara kyauta"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi tsarin shafi ɗaya da tayinku, farashin da kuka duba wanda ke biyan kuɗaɗen aikinku, bayani mai jimloli uku, saƙo ɗaya na kafar sada zumunta, da hanyar tuntuɓar mai ba da shawarar kasuwanci kyauta kusa da ku.",
          youCanNow: "tsarawa, sanya farashi da tallata ƙaramar sana'a, da sanin inda za ku sami taimakon ƙwararru kyauta.",
          quickCheck: [
            { objective: "O6", q: "Me ke shiga tsarin kasuwancinku na shafi ɗaya?", options: ["Farashinku kaɗai", "Saƙonku na kafar sada zumunta kaɗai", "Tayi, farashi da kuɗaɗen aiki, bayani da saƙo, bayanin bayanan kuɗi da mai ba da shawara kyauta", "Lambobin wayar abokan cinikinku"], answer: 2, why: "Tsarin shafi ɗaya yana haɗa dukkan aikinku a wuri ɗaya." },
            { objective: "O6", q: "Babu sauran wuri a wannan ƙarshen mako, kuma wani abokin ciniki yana neman oda. Me za ku aika?", options: ["Babu amsa", "Ku ce eh, sannan ku soke daga baya", "Amsa marar ladabi", "Amsa mai ladabi cewa babu wuri, da tayin wata rana"], answer: 3, why: "Amsa mai ladabi da gaskiya tana sa abokin ciniki ya dawo." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanarwa da bunƙasa",
        questions: [
          { objective: "O4", q: "Me ya kamata gajeren bayanin kasuwanci ya ƙunsa?", options: ["Lambar Social Security ɗinku", "Ko ku wane ne, abin da kuke yi, da yadda za a same ku", "Adireshin gidanku", "Kuɗin da ke asusun bankinku"], answer: 1, why: "Wannan yana faɗa wa abokan ciniki abin da suke buƙatar sani." },
          { objective: "O4", q: "Wane bayanin tuntuɓa ne ya fi aminci a raba wa jama'a?", options: ["Adireshin gidanku", "Asusun bankinku", "Lambar wayar kasuwanci ko imel da ba ku damu da raba ba", "Lambar katin shaidarku"], answer: 2, why: "Ku kiyaye bayanan sirri a sirri." },
          { objective: "O5", q: "Waɗanne layuka ne suka dace da takardar kuɗi mai sauƙi?", options: ["Kwanan wata, mene ne, kuɗin shiga, kuɗin fita, bayani", "Sunanku kaɗai", "Kalmar sirrinku", "Lambobin Social Security na abokan ciniki"], answer: 0, why: "Waɗannan layuka suna bin diddigin kuɗin shiga da na fita." },
          { objective: "O5", q: "Yaushe ya kamata ku rubuta sayarwa?", options: ["A ƙarshen shekara", "Ba sai an rubuta ba", "Manyan sayarwa kaɗai", "A ranar da ta faru"], answer: 3, why: "Bayanan da aka rubuta a ranar suna da inganci." },
          { objective: "O6", q: "Abokin ciniki ya yi ƙorafin cewa abinci ya makara. Amsa mai kyau:", options: ["Tana ɗora laifi a kan abokin ciniki", "Tana neman gafara, tana faɗin yadda za ku gyara, kuma tana tayin abin da za ku iya ɗauka kaɗai", "Tana ƙyale shi", "Tana alƙawarin abinci kyauta har abada"], answer: 1, why: "Amsoshi masu natsuwa da gaskiya suna riƙe abokan ciniki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Kasuwanci da Ƙananan Sana'o'i",
    questions: [
      { objective: "O1", q: "Wuri mai kyau don fara tunanin kasuwanci shi ne:", options: ["Abin da mutane suka riga suke roƙonku ku yi", "Duk abin da ya shahara a intanet", "Wani tunani kawai daga AI", "Kwafin wani babban kamfani"], answer: 0, why: "Abubuwan da mutane suka riga suke roƙonku suna nuna buƙata ta gaske." },
      { objective: "O1", q: "Abokin ciniki shi ne:", options: ["Mai kawo muku kaya", "Mutumin da ke biyan kuɗi don abin da kuke sayarwa", "Mai ba ku shawara", "Banki"], answer: 1, why: "Abokan ciniki suna saya daga gare ku." },
      { objective: "O1", q: "Me yasa za ku nemi AI tayi uku maimakon ɗaya?", options: ["Ya fi araha", "Dole ne", "Don ku zaɓi wanda ya fi dacewa da ku", "Don rikitar da abokan ciniki"], answer: 2, why: "Zaɓuɓɓuka suna taimaka muku samun wanda ya fi dacewa." },
      { objective: "O2", q: "Ƙananan sana'o'i da yawa suna yin wane kuskure wajen farashi?", options: ["Karɓar kuɗi mai yawa", "Rashin karɓar kuɗi kwata-kwata", "Karɓar kuɗi da wasu kuɗaɗen ƙasashe", "Karɓar kuɗi kaɗan"], answer: 3, why: "Mantawa da kuɗaɗen aiki da lokaci yana kawo farashi mai ƙaranci." },
      { objective: "O2", q: "Riba ita ce:", options: ["Kuɗin da ya rage bayan kun biya dukkan kuɗaɗen aikinku", "Dukkan kuɗin da kuka karɓa", "Kayan aikinku", "Rance"], answer: 0, why: "Riba ita ce abin da ya rage." },
      { objective: "O2", q: "Idan AI ya lissafa farashinku, ya kamata ku:", options: ["Amince da shi gaba ɗaya", "Duba lissafin da kanku", "Manta da kuɗaɗen aikinku", "Tambayi baƙo"], answer: 1, why: "AI yana iya yin kuskure a lissafi." },
      { objective: "O2", q: "A ina za ku koyi game da harajin kasuwanci?", options: ["Tallar da ke tasowa (pop-up)", "Wasan bidiyo", "irs.gov, mai ba da shawara kyauta ko ƙwararren haraji", "AI kaɗai"], answer: 2, why: "Majiyoyin hukuma da ƙwararru sun san dokokin haraji." },
      { objective: "O3", q: "SBA ita ce:", options: ["Banki", "Manhajar kafar sada zumunta", "Ƙungiya mai zaman kanta", "U.S. Small Business Administration (Hukumar Ƙananan Sana'o'i ta Amurka)"], answer: 3, why: "Ita ce hukumar gwamnatin tarayya da ke taimaka wa ƙananan sana'o'i." },
      { objective: "O3", q: "Small Business Development Centers suna bayar da:", options: ["Shawarwari da horo", "Kaya kyauta", "Gine-gine kyauta", "Tallace-tallace da ake biya"], answer: 0, why: "SBDCs suna taimaka wa mutane farawa da bunƙasa kasuwanci." },
      { objective: "O3", q: "Women's Business Centers suna bayar da hidimomin da suke:", options: ["Masu tsada koyaushe", "Kyauta ko masu araha", "Don manyan kamfanoni kaɗai", "A intanet kaɗai"], answer: 1, why: "SBA tana bayyana su a matsayin kyauta ko masu araha." },
      { objective: "O3", q: "Me ya kamata ku kai ganawa da mai ba da shawara kyauta?", options: ["Babu komai", "Lambar PIN ta bankinku", "Tsarinku na shafi ɗaya da tambayoyi", "Kalmomin sirrinku"], answer: 2, why: "Tsari da tambayoyi suna sa ganawar ta yi amfani." },
      { objective: "O4", q: "Bayanin kasuwanci ya kamata ya:", options: ["Yi alƙawarin abubuwan da ba za ku iya yi ba", "Ƙunshi adireshin gidanku", "Kai shafi goma", "Yi kama da ku kuma ya zama gaskiya"], answer: 3, why: "Gaskiya da salonku suna gina amana." },
      { objective: "O4", q: "Yawancin abokan cinikinku suna magana da Spanish. Kuna iya:", options: ["Neman AI ya ba ku saƙonku da Spanish", "Saka saƙo da Turanci kaɗai", "Kada ku saka saƙo kwata-kwata", "Amfani da hotuna kaɗai"], answer: 0, why: "Harshe na biyu yana kai ku ga abokan cinikinku." },
      { objective: "O4", q: "Kafin ku raba saƙo, ku duba cewa:", options: ["Ya yi tsawo iyakar yadda zai yiwu", "Kowane alƙawari gaskiya ne kuma bayanan tuntuɓa suna da aminci", "Yana da lambar Social Security ɗinku", "Ya ambaci kowane mai gasa da ku"], answer: 1, why: "Alƙawura dole su zama na gaske, bayanan tuntuɓa kuma masu aminci." },
      { objective: "O5", q: "Takardar lissafi (spreadsheet) ita ce:", options: ["Zanin gado", "Takardar haraji", "Tebur mai layuka da ginshiƙai", "Lasisin kasuwanci"], answer: 2, why: "Takardun lissafi suna tsara lambobi da jeri." },
      { objective: "O5", q: "Waɗanne kayan aiki kyauta ne za su iya riƙe bayanan kuɗinku?", options: ["Kamfanin akanta da ake biya kaɗai", "Saƙon tes", "Kundin hotuna", "Google Sheets ko Excel a intanet"], answer: 3, why: "Duka biyun kayan takardar lissafi ne kyauta." },
      { objective: "O5", q: "Me ya kamata ku ajiye don kowane kashe kuɗi?", options: ["Rasit, hoto ma ya isa", "Babu komai", "Tunawa a ka", "Tsammanin AI"], answer: 0, why: "Rasit suna tabbatar da abin da kuka kashe." },
      { objective: "O5", q: "Wanne ne kada ku taɓa rubutawa a cikin AI?", options: ["\"Ka taimake ni in shirya layuka\"", "Lambar asusun bankinku", "\"Ka rubuta saƙo mai daɗi\"", "Sunan kasuwancinku"], answer: 1, why: "Lambobin banki bayanan sirri ne." },
      { objective: "O6", q: "Idan kuna tayin ragi bayan ƙorafi, ku tabbata:", options: ["Ya yi girma iyakar yadda zai yiwu", "Kun yi alƙawarin hidima kyauta har abada", "Ragi ne da za ku iya ɗauka", "Ba ku taɓa neman gafara ba"], answer: 2, why: "Ku yi tayin abin da kasuwancinku zai iya ɗauka kaɗai." },
      { objective: "O6", q: "Tsarinku na shafi ɗaya ya ƙunshi:", options: ["Tambarin kasuwancinku (logo) kaɗai", "Adireshin gidanku", "Kalmomin sirrinku", "Tayi, farashi, bayani, saƙo, bayanan kuɗi da mai ba da shawara kyauta"], answer: 3, why: "Waɗannan sassan ne ke cika aikin ƙarshe." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      7,
      10,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tayi",
        objective: "O1",
        notYet: "Babu tayi, ko bai faɗi mene ne, ga wa, ko me yasa ku ba.",
        meets: "Jimla ɗaya da ke faɗin abin da kuke yi, waɗanda yake domin su da abin da ya bambanta ku.",
        exceeds: "An gyara shi har ya yi kama da mai koyo a fili."
      },
      {
        name: "Farashi yana biyan kuɗaɗen aiki",
        objective: "O2",
        notYet: "Farashi yana ƙasa da kuɗaɗen aiki, ko ba a duba lissafin ba.",
        meets: "Ya jera kuɗaɗe da awoyi, kuma farashin yana biyan su, da lissafin da aka duba da hannu.",
        exceeds: "An kwatanta shi da farashin wurin, kuma an rubuta haraji da lasisin da za a tambaya game da su."
      },
      {
        name: "Bayani da saƙo",
        objective: "O4",
        notYet: "Babu su, ko suna da alƙawuran da kasuwancin ba zai iya cikawa ba.",
        meets: "Bayani mai jimloli uku da saƙo ɗaya, na gaskiya kuma da bayanan tuntuɓa masu aminci.",
        exceeds: "Akwai nau'i a harshe na biyu don abokan cinikin da ke buƙata."
      },
      {
        name: "Mai ba da shawara kyauta",
        objective: "O3",
        notYet: "Ba a ambaci mai ba da shawara ba.",
        meets: "Ya ambaci mai ba da shawara na SCORE, SBDC ko Women's Business Center da hanyar tuntuɓarsa.",
        exceeds: "Ya jera tambayoyi uku da za a yi a ganawar."
      },
      {
        name: "Tsarin shafi ɗaya",
        objective: "O6",
        notYet: "Wasu sassa ba su nan ko sun warwatsu a shafuka da yawa.",
        meets: "Dukkan sassa suna kan shafi ɗaya, har da bayani game da bayanan kuɗi.",
        exceeds: "A shirye yake a kai shi ganawa da mai ba da shawara, tare da misalin amsa ga abokin ciniki."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka gana da mai ba da shawarar kasuwanci kyauta cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka ƙara farashi don biyan kuɗaɗen aiki ko suka fara ajiye bayanan kuɗi",
      "Masu koyo da suka fara ko suka yi rajistar ƙaramar sana'a cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Google Sheets ko Excel a intanet (kyauta) da na'urar lissafi",
      "Takarda don tsarin shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi kowane mai koyo ya yi amfani da kasuwancinsa na gaske ko wanda yake shiryawa a kowane aiki.",
      "Ku yi lissafin farashi tare da na'urorin lissafi; masu koyo da yawa suna gano cewa sun daɗe suna karɓar kuɗi kaɗan.",
      "Ku gayyaci mai ba da shawara na SCORE ko SBDC zuwa zama na ƙarshe idan zai yiwu.",
      "Ku tunatar da masu koyo cewa haraji da lasisi sun bambanta daga wuri zuwa wuri, kuma su duba majiyoyin hukuma ko mai ba da shawara; kada ku ba da shawarar haraji.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
