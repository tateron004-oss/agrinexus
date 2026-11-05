"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-digital-marketing.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-digital-marketing-ha",
  lang: "ha",
  translationOf: "ai-digital-marketing",
  category: "Veterans (military)",
  name: "Tallace-tallace ta Intanet da AI",
  skills: "Zaɓar ainihin abokin ciniki, Rubuta saƙonnin kafofin sada zumunta da AI, Yin hotunan talla a Canva, Rubuta imel na talla da ya bi doka, Bayyana talla da gaskiya, Karanta sakamako",
  outcome: "tsarawa da yin tallace-tallacen intanet na mako ɗaya ga ƙaramin kasuwanci tare da taimakon AI: bayanin ainihin abokin ciniki, saƙonni biyar na kafofin sada zumunta tare da hotuna, imel ɗaya na talla da ya bi dokokin CAN-SPAM, da hanya mai sauƙi ta auna abin da ya yi aiki.",
  about: [
    "Tallace-tallace ta intanet (digital marketing) na nufin isa ga abokan ciniki ta intanet: kafofin sada zumunta (social media), imel, shafukan intanet da bincike. Kayan AI za su iya rubuta daftarin saƙonni, ba da shawarwari, da taimakawa wajen yin hotuna cikin mintuna, don haka kasuwancin mutum ɗaya zai iya yin talla kamar babban kamfani.",
    "Wannan kwas ɗin na tsofaffin sojoji (veterans) ne da ke fara kasuwanci ko neman aikin talla, masu neman aiki da ke gina ƙwarewa mai amfani, da 'yan al'umma da ke tallata shago, rumfar abinci, coci ko wata hidima ta unguwa. Kuna buƙatar waya ko kwamfuta da kayan aiki kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini, da Canva.",
    "Za ku gina tsarin talla na gaske na mako ɗaya ga kasuwancin da kuka zaɓa. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ga ƙaramin kasuwanci na gaske ko na gwaji, ku haɗa kayan talla na mako ɗaya: sakin layi ɗaya na bayanin ainihin abokin ciniki, saƙonni biyar na kafofin sada zumunta tare da rubutun bayani (caption) da hotunan Canva da aka duba ko daidai ne, imel ɗaya na talla mai taken imel a sarari, adireshin wuri na zahiri da hanyar daina karɓar imel (unsubscribe), da takardar bibiya da ke jera lambar da za ku kalla ga kowane saƙo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da matan ko mazajen sojoji da suka mallaki ko suke fara ƙaramin kasuwanci, kamar hidima, sana'a, abinci ko shagon intanet, kuma suna son ƙarin abokan ciniki ba tare da ɗaukar kamfanin talla ba.",
    startingPoint: "Suna amfani da kafofin sada zumunta da imel don kansu, kuma wataƙila suna da shafin kasuwanci. Yawancinsu suna saka saƙonni ba tare da tsari ba, ba su taɓa amfani da AI ko Canva don talla ba, kuma ba su san dokokin imel da talla ba.",
    gap: "Ƙananan kasuwanci suna rayuwa ne da abokan ciniki masu dawwama, kuma tallar intanet tana ɗaukar lokacin da masu kasuwanci ba su da shi. Masu koyo suna buƙatar tsarawa da yin tallar mako ɗaya mai gaskiya kuma mai nufin abokin ciniki daidai tare da taimakon AI, bin dokokin CAN-SPAM da na FTC, da auna sakamako don ƙoƙarinsu ya zama ajiyar aiki (booking) da sayarwa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kalmomin talla a karon farko",
      "Na'urori: waya ko kwamfuta; kwamfuta ta fi sauƙi don Canva da takardun lissafi (spreadsheet)",
      "Kuɗi: kayan aiki kyauta kawai (mataimakin AI, tsarin kyauta na Canva, Google Sheets ko Excel)",
      "Dokoki: dokar CAN-SPAM ta Amurka da jagororin FTC suna aiki; masu koyo a wajen Amurka su duba dokokin ƙasarsu",
      "Sirri: kada a saka sunaye ko bayanan tuntuɓar abokan ciniki a cikin kayan AI"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ga ƙaramin kasuwanci na gaske ko na gwaji", action: "rubuta bayanin ainihin abokin ciniki da saƙon talla mai jimla ɗaya", standard: "da ke faɗin wane ne abokin ciniki, me yake buƙata, da abin da kuke bayarwa, ga wa, da dalilin zaɓar ku" },
    { id: "O2", condition: "Ta amfani da mataimakin AI da bayanin abokin cinikinku", action: "rubuta saƙonni biyar na kafofin sada zumunta na nau'o'i daban-daban, kowanne da kiran yin aiki", standard: "an duba kowane bayani, farashi da rana, kuma babu iƙirarin da ba za ku iya tabbatarwa ba" },
    { id: "O3", condition: "Ta amfani da tsarin kyauta na Canva", action: "yin hoto mai kamannin kasuwancinku ga kowane saƙo", standard: "da launuka da salon rubutu iri ɗaya, kalmomi kaɗan, da hotunan da kuke da izinin amfani da su kawai" },
    { id: "O4", condition: "Idan kuna da tayi ga tsofaffin abokan ciniki", action: "rubuta imel na talla da ya cika manyan sharuɗɗan CAN-SPAM", standard: "da taken imel mai gaskiya, adireshin wuri na zahiri, da hanyar daina karɓar imel a sarari" },
    { id: "O5", condition: "Idan aka ba ku talla, sharhin abokin ciniki ko abin da AI ya yi", action: "gane lokacin da ake buƙatar bayyana alaƙa, da kiyaye gaskiyar sharhi da shaidar abokan ciniki", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O6", condition: "Bayan mako ɗaya na saƙonni", action: "zaɓar lamba ɗaya da za ku bibiya ga kowane saƙo, da amfani da sakamakon don tsara mako na gaba", standard: "da takardar bibiya mai lambar buri da sakamako ga kowane saƙo" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsarawa da yin abubuwan talla",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sanin abokin cinikinku da saƙonku",
          minutes: 5,
          goal: "Rubuta bayanin ainihin abokin ciniki da saƙo ɗaya a sarari ga wani kasuwanci.",
          text: [
            "Talla tana aiki idan tana magana da wani takamaiman mutum. Bayanin ainihin abokin ciniki yana kwatanta abokin cinikinku mafi kyau: wane ne shi, me yake buƙata, me ke damunsa, da inda yake ɓata lokaci a intanet.",
            "Sannan ku rubuta saƙo ɗaya a sarari: abin da kuke bayarwa, ga wa yake, da dalilin da zai sa su zaɓe ku. Misali: \"Wankin mota na tsohon soja da ke zuwa ƙofar gidanku a Fayetteville. Ku yi ajiya cikin minti biyu.\"",
            "AI zai iya taimaka muku wajen tunanin ra'ayoyi. Ku tambaya: \"Ina da kasuwancin wanke mota mai zuwa wurin mutane. Ka kwatanta nau'o'i uku na abokan cinikin da za su iya zuwa, da abin da kowanne ya damu da shi.\" Ku zaɓi wanda ya yi daidai da abokan cinikin da kuke da su ko kuke so, sannan ku gyara shi da abin da kuka sani."
          ],
          steps: ["Ku faɗi sunan kasuwancin da abin da yake sayarwa.", "Ku tambayi mataimakin AI ya ba da nau'o'i uku na abokan ciniki.", "Ku zaɓi ɗaya ku rubuta gajeren bayani: wane ne, buƙatunsa, damuwarsa, inda yake a intanet.", "Ku rubuta saƙo mai jimla ɗaya: me, ga wa, me yasa ku."],
          words: [["Ainihin abokin ciniki (target customer)", "takamaiman irin mutumin da tallarku ke nufi."], ["Bayani (profile)", "gajeren kwatancin mutum ko ƙungiya."], ["Saƙo (message)", "babban abin da kuke son abokan ciniki su sani kuma su tuna."]],
          slides: [
            { title: "Ku yi magana da mutum ɗaya", bullets: ["Wane ne shi da me yake buƙata", "Me ke damunsa", "Inda yake ɓata lokaci a intanet"] },
            { title: "Saƙo ɗaya a sarari", bullets: ["Abin da kuke bayarwa", "Ga wa yake", "Me yasa za a zaɓe ku"] },
            { title: "Ku yi amfani da AI don tunanin ra'ayoyi", bullets: ["Ku nemi nau'o'i uku na abokan ciniki", "Ku zaɓi ɗaya, sannan ku gyara shi da abin da kuka sani"] }
          ],
          tryIt: "Ku zaɓi kasuwanci na gaske ko na gwaji. Ku yi amfani da mataimakin AI don tunanin nau'o'in abokan ciniki, sannan ku rubuta sakin layi ɗaya na bayanin ainihin abokin ciniki da saƙo mai jimla ɗaya.",
          youCanNow: "rubuta bayanin ainihin abokin ciniki da saƙon talla a sarari.",
          quickCheck: [
            { objective: "O1", q: "Me bayanin ainihin abokin ciniki yake kwatantawa?", options: ["Duk mutumin da ke amfani da intanet", "Abokin cinikinku mafi kyau: wane ne shi, me yake buƙata, me ke damunsa da inda yake a intanet", "Farashinku na shekara", "Tambarin (logo) masu gasa da ku"], answer: 1, why: "Bayanin yana kwatanta takamaiman irin abokin ciniki ɗaya don tallarku ta yi magana da shi." },
            { objective: "O1", q: "AI ya ba da nau'o'i uku na abokan ciniki don kasuwancinku na gyaran lambu. Ɗaya kawai ya yi daidai da masu kiran ku a zahiri. Me za ku yi?", options: ["Ku yi amfani da duka ukun a kowane saƙo", "Ku zaɓi wanda ya fi burgewa", "Ku ƙyale AI kada ku saka komai", "Ku zaɓi wanda ya yi daidai da abokan ciniki na gaske ku gyara shi da abin da kuka sani"], answer: 3, why: "Ku zaɓi nau'in da ya yi daidai da abokan cinikinku na gaske ko waɗanda kuke so, ku ƙara abin da kuka sani." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta saƙonnin kafofin sada zumunta da AI",
          minutes: 5,
          goal: "Yi amfani da AI don rubuta daftarin saƙonni biyar, sannan ku gyara su don su yi daidai kuma su yi kama da ku.",
          text: [
            "Saƙonni masu kyau suna koyarwa, nunawa ko gayyata. Ku haɗa su: shawara (\"Hanyoyi 3 na tsabtace cikin motarku\"), hoton yadda ake aiki a bayan fage, labarin abokin ciniki (da izininsa), tayi, da tambayar da ke gayyatar sharhi.",
            "Ku ba AI bayanin abokin cinikinku da saƙonku, sannan ku tambaya: \"Ka rubuta gajerun saƙonni biyar na Instagram da Facebook don wannan abokin ciniki. Shawara ɗaya, bayan fage ɗaya, labarin abokin ciniki ɗaya, tayi ɗaya, tambaya ɗaya. Salo na abokantaka, ƙasa da kalmomi 60 kowanne, da kiran yin aiki.\"",
            "Koyaushe ku gyara. Ku duba kowane bayani, farashi da rana. Ku cire iƙirarin da ba za ku iya tabbatarwa ba, kamar \"mafi kyau a jihar\". Ku sa ya yi kama da ku, kuma kada ku taɓa saka sharhi ko sakamakon da bai faru ba."
          ],
          steps: ["Ku liƙa bayanin abokin cinikinku da saƙonku a cikin mataimakin AI.", "Ku nemi saƙonni biyar na nau'o'i daban-daban da kiran yin aiki.", "Ku duba kowane bayani, farashi da rana.", "Ku cire iƙirarin da ba za ku iya tabbatarwa ba.", "Ku sake rubuta su da muryarku."],
          words: [["Kiran yin aiki (call to action)", "matakin da kuke son mai karatu ya ɗauka, kamar \"Ku yi ajiya yanzu\" ko \"Ku kira yau\"."], ["Rubutun bayani (caption)", "rubutun da ke tare da hoto ko bidiyo a kafofin sada zumunta."]],
          slides: [
            { title: "Ku haɗa saƙonninku", bullets: ["Shawara da hoton bayan fage", "Labarin abokin ciniki (da izininsa)", "Tayi da tambaya"] },
            { title: "Buƙata mai ƙarfi ga AI", bullets: ["Ku haɗa bayanin abokin ciniki da saƙonku", "Ku nemi nau'o'i biyar, ƙasa da kalmomi 60", "Ku nemi kiran yin aiki"] },
            { title: "Koyaushe ku gyara", bullets: ["Ku duba bayanai, farashi da ranaku", "Ku cire iƙirarin da ba za ku iya tabbatarwa ba", "Ku sa ya yi kama da ku"] }
          ],
          tryIt: "Ku tambayi mataimakin AI ya rubuta daftarin saƙonni biyar don kasuwancinku ta amfani da tsarin prompt ɗin da ke sama. Ku gyara kowanne don bayanai da murya, ku yi alama kan abin da kuka canja.",
          youCanNow: "rubuta daftarin saƙonnin kafofin sada zumunta da AI, da gyara su don su yi daidai, su zama na gaskiya, kuma da muryarku.",
          quickCheck: [
            { objective: "O2", q: "Wane saƙo ne na \"bayan fage\"?", options: ["Hoton ma'aikatanku suna shirin wani aiki", "Takardar rangwamen kashi 20%", "Tambayar da ke neman mabiya su faɗi launin da suka fi so", "Sharhin abokin ciniki"], answer: 0, why: "Saƙonnin bayan fage suna nuna yadda aikinku ke gudana." },
            { objective: "O2", q: "Saƙon da AI ya rubuta yana da farashin da kuka canja a watan da ya gabata. Me za ku yi?", options: ["Ku saka shi; abokan ciniki za su tambaya", "Ku goge saƙon gaba ɗaya", "Ku gyara farashin kafin ku saka shi", "Ku ƙara \"farashi na iya canjawa\" ku saka shi"], answer: 2, why: "Koyaushe ku duba ku gyara kowane bayani, farashi da rana kafin ku saka saƙo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin hotunan talla da Canva da AI",
          minutes: 5,
          goal: "Yi hoto mai tsabta mai kamannin kasuwancinku ga kowane saƙo da kayan zane kyauta.",
          text: [
            "Canva yana da tsarin kyauta mai samfurori (templates) masu girman da ya dace da kowane shafin sada zumunta. Ku nemi irin saƙon da kuke buƙata, kamar \"Instagram post\", ku zaɓi samfuri, sannan ku canja kalmomi da hotuna.",
            "Ku riƙe kamanni mai sauƙi: launuka biyu ko uku iri ɗaya, salon rubutu ɗaya ko biyu, da tambarinku ko sunan kasuwancinku a kowane hoto. Ku sa kalmomi kaɗan a kan hoton; rubutun bayani (caption) ne ke ɗaukar cikakken bayani.",
            "Ku yi amfani da hotunanku idan kuna iya; hotunan gaske na aikinku suna gina amincewa. Idan kun yi amfani da hotunan da AI ya yi, kada ku sa su yi kama da abokan ciniki na gaske ko sakamakon da ba ku bayar ba, kuma ku yi amfani da hotunan da kuke da izinin amfani da su kawai."
          ],
          steps: ["Ku buɗe Canva ku nemi girman samfurin da kuke buƙata.", "Ku zaɓi samfuri ku canja launuka zuwa launukan kasuwancinku.", "Ku maye gurbin rubutun da gajeren kanun labari.", "Ku ƙara hotonku ko hoton da kuke da lasisinsa.", "Ku sauke shi ku ajiye shi da sunan saƙon."],
          words: [["Samfuri (template)", "zane da aka riga aka shirya wanda kuke canjawa don ya dace da buƙatarku."], ["Kamanni (brand)", "siffa da yanayin da ke sa a gane kasuwancinku."], ["Lasisi (license)", "izinin amfani da hoto ko wani aiki."]],
          slides: [
            { title: "Muhimman abubuwan Canva", bullets: ["Tsarin kyauta mai samfurori masu girman shafukan sada zumunta", "Ku zaɓi samfuri, ku canja kalmomi da hotuna"] },
            { title: "Kamanni mai sauƙi", bullets: ["Launuka biyu ko uku iri ɗaya", "Salon rubutu ɗaya ko biyu", "Sunanku ko tambarinku a kowane hoto"] },
            { title: "Hotuna masu gaskiya", bullets: ["Hotunanku suna gina amincewa", "Babu abokan ciniki ko sakamako na bogi", "Hotunan da kuke da izinin amfani da su kawai"] }
          ],
          sources: [{ name: "Canva", url: "https://www.canva.com/" }],
          tryIt: "Ku yi hoton Canva ga kowane ɗaya daga cikin saƙonninku biyar da launuka da salon rubutu iri ɗaya. Ku yi amfani da aƙalla hoto ɗaya na gaske na aikinku ko kayanku.",
          youCanNow: "yin hotuna masu kamanni ɗaya kuma masu gaskiya don saƙonnin kafofin sada zumunta da kayan zane kyauta.",
          quickCheck: [
            { objective: "O3", q: "A ina ya kamata yawancin bayanan saƙo su kasance?", options: ["An cunkusa su a kan hoton", "Da ƙananan haruffa a ƙasan hoton", "A hoto na biyu", "A rubutun bayani (caption), da kalmomi kaɗan a kan hoton"], answer: 3, why: "Ku sa kalmomi kaɗan a kan hoton; rubutun bayani ne ke ɗaukar cikakken bayani." },
            { objective: "O3", q: "Kuna son hoton abokin ciniki mai farin ciki, amma ba ku da shi. Mene ne zaɓi na gaskiya?", options: ["Ku yi amfani da hoton AI da aka yi don ya yi kama da abokin ciniki na gaske", "Ku yi amfani da hoton aikinku ko hoton da kuke da lasisinsa", "Ku kwafi hoto daga shafin wani kamfani", "Ku yi amfani da hoton baƙo daga kafofin sada zumunta"], answer: 1, why: "Ku yi amfani da hotunanku ko waɗanda kuke da izinin amfani da su, kuma kada ku ƙirƙiri abokan ciniki na bogi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsarawa da yin abubuwan talla",
        questions: [
          { objective: "O1", q: "Mene ne bayanin ainihin abokin ciniki?", options: ["Takardar asusun bankinku", "Jerin masu gasa da ku", "Kwatancin takamaiman irin mutumin da tallarku ke nufi", "Kalmar sirri ta kafofin sada zumunta"], answer: 2, why: "Talla tana aiki sosai idan tana magana da takamaiman mutum." },
          { objective: "O1", q: "Wane ne saƙon talla mafi sarari?", options: ["\"Wankin mota na tsohon soja da ke zuwa ƙofar gidanku a Fayetteville. Ku yi ajiya cikin minti biyu.\"", "\"Muna yin abubuwa.\"", "\"Mafi kyau har abada!!!\"", "\"Ku kira mu ko?\""], answer: 0, why: "Yana faɗin me, ga wa, da me yasa, tare da mataki na gaba." },
          { objective: "O2", q: "AI ya rubuta \"An zaɓe mu mafi kyawun masu wanke mota a jihar\" amma hakan bai taɓa faruwa ba. Me za ku yi?", options: ["Ku saka shi duk da haka", "Ku ƙara girmansa", "Ku ƙara hoton kyautar bogi", "Ku cire iƙirarin"], answer: 3, why: "Kada ku taɓa wallafa iƙirarin da ba za ku iya tabbatarwa ba." },
          { objective: "O2", q: "Mene ne kiran yin aiki?", options: ["Ƙarar kiran waya", "Matakin da kuke son mai karatu ya ɗauka, kamar \"Ku yi ajiya yanzu\"", "Sanarwar shari'a", "Wani nau'in salon rubutu"], answer: 1, why: "Yana faɗa wa mai karatu abin da zai yi a gaba." },
          { objective: "O3", q: "Me ke gina amincewa mafi yawa a kan hoton talla?", options: ["Hotunan AI na abokan ciniki masu farin ciki na bogi", "Hotunan gaske na aikinku", "Hotunan da aka kwafo daga mai gasa", "Babu hoto kwata-kwata"], answer: 1, why: "Hotunan gaske na aiki na gaske suna da gaskiya kuma suna gamsarwa." }
        ]
      }
    },
    {
      name: "Babi na 2: Imel, dokokin gaskiya da sakamako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta imel na talla da ya bi doka",
          minutes: 6,
          goal: "Rubuta daftarin imel na talla da AI wanda ya cika manyan sharuɗɗan CAN-SPAM na Amurka.",
          text: [
            "Imel yana isa ga mutanen da suka riga suka zaɓi su ji daga gare ku, don haka sau da yawa yana sayarwa fiye da kafofin sada zumunta. Ku aika imel ga mutanen da suka ba ku adireshinsu kuma suka yarda su ji daga gare ku kawai.",
            "A Amurka, dokar CAN-SPAM tana kafa dokoki ga imel na kasuwanci. A cewar Hukumar Kasuwanci ta Tarayya (FTC), kada ku yi amfani da bayanan mai aikawa ko taken imel na ƙarya ko masu ruɗarwa, dole ku nuna cewa saƙon talla ne, ku saka ingantaccen adireshin wurinku na zahiri, ku ba da hanya a sarari ta daina karɓar imel, kuma ku cika buƙatun daina karɓa cikin kwanakin aiki 10. Alhakin yana kanku ko da wani ne ya aika muku.",
            "Ku nemi AI ya rubuta daftari: \"Ka rubuta gajeren imel na talla don [kasuwanci] mai ba da [tayi] ga tsofaffin abokan ciniki. Taken imel mai gaskiya, salo na abokantaka, kiran yin aiki ɗaya.\" Sannan ku ƙara adireshinku da hanyar haɗin daina karɓa (unsubscribe), ku duba bayanan. A wajen Amurka, ku duba dokokin imel da sirri na ƙasarku."
          ],
          steps: ["Ku nemi AI ya rubuta gajeren imel mai taken gaskiya da kiran yin aiki ɗaya.", "Ku duba kowane bayani, farashi da rana.", "Ku nuna a sarari cewa wannan talla ce ko tayi.", "Ku ƙara ingantaccen adireshin wurinku na zahiri.", "Ku ƙara hanyar daina karɓa a sarari, ku cika buƙatun cikin kwanakin aiki 10."],
          words: [["Dokar CAN-SPAM", "dokar Amurka da ke kafa dokoki ga imel na kasuwanci."], ["Daina karɓa (opt out / unsubscribe)", "hanyar da mutane ke daina samun imel ɗinku."], ["Taken imel (subject line)", "gajeren take da mutane ke gani kafin su buɗe imel."]],
          slides: [
            { title: "Ku aika imel ga mutanen da suka dace", bullets: ["Mutanen da suka yarda su ji daga gare ku kawai"] },
            { title: "Muhimman abubuwan CAN-SPAM (FTC)", bullets: ["Bayanan mai aikawa da taken imel na gaskiya", "Ku nuna cewa talla ce", "Ku saka adireshin wurinku na zahiri"] },
            { title: "Dokokin daina karɓa", bullets: ["Hanya a sarari ta daina karɓa", "Ku cika ta cikin kwanakin aiki 10", "Alhakin yana kanku ko da wani kamfani ne ya aika"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Ku yi amfani da AI don rubuta daftarin imel na talla don kasuwancinku. Ku gyara shi, sannan ku duba shi da jerin CAN-SPAM: taken imel na gaskiya, an nuna cewa talla ce, adireshin wuri na zahiri, hanyar daina karɓa.",
          youCanNow: "rubuta imel na talla tare da taimakon AI wanda ya cika manyan dokokin CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Su wa ya kamata su kasance a jerin imel ɗinku na talla?", options: ["Duk wanda za ku iya samun imel ɗinsa", "Adireshin imel da kuka saya a intanet", "Mutanen da suka ba ku adireshinsu kuma suka yarda su ji daga gare ku", "Kowane kasuwanci a garinku"], answer: 2, why: "Ku aika imel ga mutanen da suka ba ku adireshinsu kuma suka yarda su ji daga gare ku kawai." },
            { objective: "O4", q: "Daftarin AI ɗinku yana da tayi mai kyau amma babu adireshi ko hanyar daina karɓa. Me za ku yi kafin ku aika?", options: ["Ku ƙara ingantaccen adireshin wurinku na zahiri da hanyar daina karɓa a sarari", "Ku aika; waɗannan ba dole ba ne", "Ku ƙara lambar wayarku kawai", "Ku aika daga asusun aboki a maimakon haka"], answer: 0, why: "CAN-SPAM tana buƙatar ingantaccen adireshin wuri na zahiri da hanya a sarari ta daina karɓa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Talla mai gaskiya: bayyana alaƙa, sharhi da AI",
          minutes: 5,
          goal: "Gane lokacin da talla ke buƙatar bayyana alaƙa, da kiyaye gaskiyar sharhi da abubuwan AI.",
          text: [
            "Jagororin FTC kan yabon kaya (Endorsement Guides) sun ce idan wanda ke tallata kaya yana da alaƙa da kamfanin, kamar an biya shi ko an ba shi kaya kyauta, dole a bayyana hakan a sarari. FTC ta ba da shawarar kalmomi masu sauƙi kamar \"Ad:\" ko \"#ad\" a farko, ko \"Paid post by [brand]\" (saƙon da [kamfani] ya biya).",
            "Sharhin bogi yaudara ne. Kada ku taɓa rubuta sharhi ga kasuwancinku, ko biyan kuɗi don sharhin bogi, ko sa AI ya ƙirƙira su. A maimakon haka, ku nemi abokan ciniki na gaske su ba da sharhi na gaskiya.",
            "Ku yi hankali da abubuwan da AI ya yi: kada ku yi amfani da AI don kwaikwayon wani mutum na gaske, ƙirƙirar shaidar abokan ciniki, ko yin iƙirari game da sakamakon da ba za ku iya tabbatarwa ba. Dokoki suna canjawa, don haka ku duba shafukan jagorar kasuwanci na FTC don sabbin bayanai."
          ],
          words: [["Yabon kaya (endorsement)", "saƙon da wani ke cewa yana son wani kaya ko yana amfani da shi."], ["Bayyana alaƙa (disclosure)", "bayani a sarari game da alaƙa, kamar \"#ad\" ko \"Paid post\"."], ["Shaidar abokin ciniki (testimonial)", "maganar abokin ciniki game da abin da ya fuskanta."]],
          slides: [
            { title: "Ku bayyana alaƙa", bullets: ["An biya ku ko an ba ku kaya kyauta? Ku faɗa", "\"Ad:\" ko \"#ad\" a farko", "\"Paid post by [brand]\""] },
            { title: "Dole sharhi ya zama na gaske", bullets: ["Babu sharhin bogi ko wanda AI ya rubuta", "Ku nemi abokan ciniki na gaske su ba da sharhi na gaskiya"] },
            { title: "Ƙa'idodin abubuwan AI", bullets: ["Babu kwaikwayon mutane na gaske", "Babu ƙirƙirar shaida ko sakamako", "Ku duba jagorar FTC don sabuntawa"] }
          ],
          sources: [{ name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Ku duba saƙonninku biyar da imel ɗinku. Ku yi alama kan duk wanda zai buƙaci bayyana alaƙa (misali, abokin kasuwanci ya biya ku, ko aboki yana tallatawa saboda kaya kyauta), kuma ku cire duk iƙirari ko sharhin da ba na gaske ba.",
          youCanNow: "gane lokacin da talla ke buƙatar bayyana alaƙa, da kiyaye gaskiyar sharhi da abubuwan AI.",
          quickCheck: [
            { objective: "O5", q: "Yaushe dole ne wanda ke tallata kayanku ya bayyana hakan?", options: ["Sai idan yana da mabiya fiye da 10,000", "Idan yana da alaƙa da kamfaninku, kamar an biya shi ko an ba shi kayan kyauta", "Ba sai ya bayyana ba, idan sharhin mai kyau ne", "A imel kawai"], answer: 1, why: "FTC ta ce alaƙa kamar biya ko kaya kyauta dole a bayyana ta a sarari." },
            { objective: "O5", q: "Shagonku yana da sharhi kaɗan. Wani aboki ya ce zai sa AI ya rubuta sharhi ashirin masu tauraro biyar. Me za ku yi?", options: ["Ku yarda, tunda AI ne ya rubuta su, ba ku ba", "Ku saka goma kawai daga cikinsu", "Ku biya wani kamfani ya saka su a maimakon haka", "Ku ƙi, ku nemi abokan ciniki na gaske su ba da sharhi na gaskiya"], answer: 3, why: "Sharhin bogi yaudara ne; ku nemi abokan ciniki na gaske a maimakon haka." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Auna abin da ke aiki da ingantawa",
          minutes: 5,
          goal: "Zaɓi lambar da za ku bibiya ga kowane saƙo, da amfani da sakamakon don tsara mako na gaba.",
          text: [
            "Kowane shafin sada zumunta da kayan imel yana nuna lambobi na asali. Isa (reach) shi ne mutane nawa suka gani. Mu'amala (engagement) ita ce so (likes), sharhi, rabawa da ajiyewa. Dannawa (clicks) suna nuna wanda ya je hanyar haɗinku. Juyawa (conversions) su ne ainihin buri: ajiyar aiki, kira, sayarwa ko yin rajista.",
            "Ku zaɓi babbar lamba ɗaya ga kowane saƙo bisa aikinsa: saƙon shawara yana neman ajiyewa da rabawa, saƙon tayi yana neman dannawa da ajiyar aiki. Ku rubuta su a takardar bibiya mai sauƙi a Google Sheets ko Excel.",
            "Bayan mako ɗaya, ku duba abin da ya fi yin kyau ku ƙara yin irinsa. Kuna iya liƙa lambobinku (ba tare da sunayen abokan ciniki ba) a cikin mataimakin AI ku tambaya: \"Waɗanne saƙonni ne suka fi yin kyau, kuma me zan gwada a mako mai zuwa?\" Ku ne ke yanke shawarar ƙarshe."
          ],
          steps: ["Ku yi takarda mai ginshiƙai: rana, saƙo, nau'i, lambar buri, sakamako.", "Ku zaɓi lambar buri ɗaya ga kowane saƙo.", "Bayan mako ɗaya, ku cike sakamakon daga bayanan shafin (insights).", "Ku nemi AI ya gano yanayi, ta amfani da lambobi kawai.", "Ku tsara mako na gaba: ƙarin abin da ya yi aiki."],
          words: [["Isa (reach)", "mutane nawa suka ga saƙonku."], ["Mu'amala (engagement)", "so (likes), sharhi, rabawa da ajiyewa."], ["Juyawa (conversion)", "lokacin da wani ya ɗauki matakin da kuke so, kamar yin ajiya ko saye."]],
          slides: [
            { title: "Lambobin da ya kamata ku sani", bullets: ["Isa: mutane nawa suka gani", "Mu'amala: so, sharhi, rabawa", "Dannawa da juyawa"] },
            { title: "Buri ɗaya ga kowane saƙo", bullets: ["Saƙon shawara: ajiyewa da rabawa", "Saƙon tayi: dannawa da ajiyar aiki"] },
            { title: "Ku koya ku daidaita", bullets: ["Ku bibiya a takarda mai sauƙi", "Ku nemi AI ya gano yanayi, lambobi kawai", "Ku ƙara yin abin da ya yi aiki"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina takardar bibiya don saƙonninku biyar da imel ɗinku, da lambar buri ɗaya kowanne. Tare da bayanin abokin ciniki, saƙonni, hotuna da imel ɗinku, wannan ya cika kayan tallarku na mako ɗaya.",
          youCanNow: "tsarawa, yi, dubawa da auna tallace-tallacen intanet na mako ɗaya tare da taimakon AI.",
          quickCheck: [
            { objective: "O6", q: "Mece ce mu'amala (engagement)?", options: ["So, sharhi, rabawa da ajiyewa", "Mutane nawa suka ga saƙon", "Kuɗin saƙon", "Yawan mabiyan da kuka fara da su"], answer: 0, why: "Mu'amala tana ƙirga yadda mutane suke hulɗa da saƙo; isa ita ce mutane nawa suka gani." },
            { objective: "O6", q: "Saƙonninku na shawara sun fi samun ajiyewa a wannan makon, amma tayi sun sami dannawa kaɗan. Mene ne mataki mai hankali na gaba?", options: ["Ku daina saka saƙonni na wata ɗaya", "Ku goge saƙonnin shawara", "Ku tsara ƙarin saƙonnin shawara ku gwada sabon tayi a mako mai zuwa", "Ku saka tayi ɗaya sau biyar"], answer: 2, why: "Ku ƙara yin abin da ya yi aiki, ku daidaita abin da bai yi ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Imel, dokokin gaskiya da sakamako",
        questions: [
          { objective: "O4", q: "A ƙarƙashin CAN-SPAM, me dole imel na talla na Amurka ya ƙunsa?", options: ["Lambar Social Security ta abokin ciniki", "Taken imel na gaggawa na bogi", "Babu sunan mai aikawa", "Ingantaccen adireshin wuri na zahiri da hanyar daina karɓa"], answer: 3, why: "FTC ta jera adireshin wuri na zahiri da hanyar daina karɓa cikin sharuɗɗan." },
          { objective: "O4", q: "Cikin wane lokaci dole ku cika buƙatar daina karɓa a ƙarƙashin CAN-SPAM, a cewar FTC?", options: ["Cikin kwanakin aiki 10", "Cikin shekara ɗaya", "Ba sai kun cika ba", "Sai idan sun kira ku"], answer: 0, why: "Jagorar FTC ta ce dole a cika buƙatun daina karɓa cikin kwanakin aiki 10." },
          { objective: "O5", q: "Wani aboki ya sami kaya kyauta daga gare ku kuma ya saka saƙo game da shi. Me ya kamata saƙonsa ya ƙunsa?", options: ["Babu komai", "Sharhi na bogi mai tauraro biyar", "Bayyana alaƙa a sarari kamar \"#ad\" ko \"Gifted\" (kyauta ce)", "Bayanan bankinku"], answer: 2, why: "Alaƙa kamar kaya kyauta dole a bayyana ta." },
          { objective: "O5", q: "Wanne ne talla mai gaskiya?", options: ["Sa AI ya rubuta sharhi", "Biyan kuɗi don sharhin bogi", "Rubuta sharhi ga kasuwancinku da sunayen bogi", "Neman abokan ciniki na gaske su ba da sharhi na gaskiya"], answer: 3, why: "Sharhi na gaske daga abokan ciniki na gaske ne kawai na gaskiya." },
          { objective: "O6", q: "Mece ce juyawa (conversion)?", options: ["Canja girman hoto", "Wani nau'in salon rubutu", "Lokacin da wani ya ɗauki matakin da kuke so, kamar yin ajiya", "Kashe sharhi"], answer: 2, why: "Juyawa su ne ainihin burin kasuwanci." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tallace-tallace ta Intanet da AI",
    questions: [
      { objective: "O1", q: "Tallace-tallace ta intanet na nufin:", options: ["Buga takardun talla (flyers) kawai", "Isa ga abokan ciniki ta intanet", "Sayarwa gida-gida", "Aiki a injin karɓar kuɗi"], answer: 1, why: "Tana amfani da kafofin sada zumunta, imel, shafukan intanet da bincike." },
      { objective: "O1", q: "Me yasa za ku rubuta bayanin ainihin abokin ciniki?", options: ["Don tallarku ta yi magana da takamaiman mutum", "Don ɓata lokaci", "Saboda AI yana buƙata", "Don raba bayanan sirri"], answer: 0, why: "Talla mai nufin takamaiman mutum tana aiki fiye da ta gama-gari." },
      { objective: "O1", q: "Saƙo a sarari yana faɗin:", options: ["Lambar wayarku kawai", "Labarin rayuwarku", "Abin da kuke bayarwa, ga wa yake, da me yasa za a zaɓe ku", "Babu wani takamaiman abu"], answer: 2, why: "Waɗannan sassa uku ne ke sa saƙo ya zama a sarari." },
      { objective: "O1", q: "AI ya ba da nau'o'i uku na abokan ciniki. Ya kamata ku:", options: ["Zaɓi wanda ya dace da abokan ciniki na gaske ku gyara shi", "Yi amfani da duka ukun ba tare da karantawa ba", "Ƙyale abin da kuka sani", "Saka su a matsayin tallace-tallace"], answer: 0, why: "AI yana ba da ra'ayoyi; ku ne ke yanke shawara da abin da kuka sani." },
      { objective: "O2", q: "Wanne ne kyakkyawan haɗin saƙonni na mako ɗaya?", options: ["Tayi biyar iri ɗaya", "Hotunan barkwanci (memes) kawai", "Tambarinku kawai", "Shawara, bayan fage, labarin abokin ciniki, tayi da tambaya"], answer: 3, why: "Bambanci yana sa mutane su ci gaba da sha'awa." },
      { objective: "O2", q: "\"Ku yi ajiya yanzu\" a ƙarshen saƙo shi ne:", options: ["Bayyana alaƙa", "Kiran yin aiki", "Samfuri", "Juyawa"], answer: 1, why: "Yana faɗa wa mai karatu mataki na gaba." },
      { objective: "O2", q: "Kafin ku saka saƙon da AI ya rubuta, ku duba:", options: ["Alamomin emoji kawai", "Bayanai, farashi, ranaku da iƙirari", "Babu komai", "Kalmar sirrinku"], answer: 1, why: "AI yana iya yin kuskure a bayanai ko ya zuguguta abubuwa." },
      { objective: "O3", q: "A Canva, samfuri (template) shi ne:", options: ["Takardar shari'a", "Tallar da aka biya", "Jerin abokan ciniki", "Zane da aka riga aka shirya wanda kuke canjawa"], answer: 3, why: "Samfurori suna adana lokaci kuma suna da girman da ya dace da kowane shafi." },
      { objective: "O3", q: "Kamanni mai sauƙi yana amfani da:", options: ["Launuka da salon rubutu kaɗan iri ɗaya da sunanku a kowane hoto", "Sababbin launuka kowace rana", "Babu suna kwata-kwata", "Tambarin da aka kwafo"], answer: 0, why: "Kasancewa iri ɗaya yana sa a gane ku." },
      { objective: "O3", q: "Wane hoto ne BA daidai ba a yi amfani da shi?", options: ["Hotonku na aikinku", "Hoton da kuke da lasisinsa", "Hoton da kuka kwafo daga shafin wani kamfani", "Wani abu na samfurin Canva da aka ba ku izinin amfani da shi"], answer: 2, why: "Ku yi amfani da hotunan da kuke da izinin amfani da su kawai." },
      { objective: "O4", q: "Su wa ya kamata su sami imel ɗinku na talla?", options: ["Kowane adireshi da za ku iya samu", "Jerin imel da aka saya", "Baƙi kawai", "Mutanen da suka yarda su ji daga gare ku"], answer: 3, why: "Ku aika imel ga mutanen da suka zaɓi su ji daga gare ku." },
      { objective: "O4", q: "Jagorar wace hukumar Amurka ce ke bayanin CAN-SPAM ga kasuwanci?", options: ["Ma'aikatar Sufuri (Department of Transportation)", "NASA", "Hukumar Kasuwanci ta Tarayya (FTC)", "Hukumar Gidan Waya kawai"], answer: 2, why: "FTC ce ke wallafa jagorar bin dokar CAN-SPAM." },
      { objective: "O4", q: "Taken imel ya ce \"An dakatar da asusunku\" a imel na rangwamen sayarwa. Wannan:", options: ["Talla ce mai kyau", "Yana ruɗarwa kuma ya saɓa wa CAN-SPAM", "Dole ne", "Bayyana alaƙa ne"], answer: 1, why: "Dole taken imel ya nuna ainihin abin da saƙon ya ƙunsa." },
      { objective: "O4", q: "Idan wani kamfani ne ke aika imel ɗinku na talla, wane ne ke da alhakin bin CAN-SPAM?", options: ["Har yanzu ku ne", "Kamfanin kawai", "Babu kowa", "Abokin ciniki"], answer: 0, why: "FTC ta ce alhakin yana kanku har yanzu." },
      { objective: "O5", q: "\"#ad\" a farkon saƙo misali ne na:", options: ["Kiran yin aiki", "Samfuri", "Bayyana alaƙa", "Isa"], answer: 2, why: "Yana faɗa wa masu karatu cewa akwai alaƙa ta biya." },
      { objective: "O5", q: "Amfani da AI don rubuta sharhi masu tauraro biyar ga shagonku:", options: ["Yaudara ce kuma ba a yarda ba", "Talla ce mai wayo", "Dole ne", "Ba laifi idan sun yi kama da na gaske"], answer: 0, why: "Sharhin bogi yana yaudarar abokan ciniki." },
      { objective: "O5", q: "A ina ya kamata ku duba sabbin dokokin talla na Amurka?", options: ["Wani zaren sharhi kawai", "Hirar AI kawai", "Mai gasa da ku", "Shafukan jagorar kasuwanci na FTC"], answer: 3, why: "Dokoki suna canjawa; FTC ce majiyar hukuma." },
      { objective: "O6", q: "Isa (reach) tana auna:", options: ["Mutane nawa suka saya", "Mutane nawa suka ga saƙonku", "Ribarku", "Shekarun mabiyanku"], answer: 1, why: "Isa ita ce mutane nawa suka gani." },
      { objective: "O6", q: "Babbar lambar buri ta saƙon tayi yawanci ita ce:", options: ["Ajiyewa kawai", "Dannawa ko ajiyar aiki", "Girman haruffa", "Yawan hashtag"], answer: 1, why: "Tayi suna nufin sa mutane su ɗauki mataki." },
      { objective: "O6", q: "Idan kuna neman AI ya nazarci sakamakonku, ya kamata ku raba:", options: ["Sunaye da lambobin wayar abokan ciniki", "Kalmomin sirrinku", "Lambobin kati", "Lambobi kawai, ba tare da sunayen abokan ciniki ba"], answer: 3, why: "Ku kiyaye bayanan sirri daga kayan AI." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      2,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bayanin abokin ciniki",
        objective: "O1",
        notYet: "Babu bayanin, ko yana kwatanta \"kowa da kowa\".",
        meets: "Sakin layi ɗaya kan wane ne abokin ciniki, buƙatunsa, damuwarsa da inda yake a intanet.",
        exceeds: "Kowane saƙo da imel suna magana da wannan abokin ciniki ɗaya a sarari."
      },
      {
        name: "Saƙonni biyar",
        objective: "O2",
        notYet: "Saƙonni ƙasa da biyar, ko wani saƙo yana da bayanin da ba a duba ba ko iƙirarin da ba za a iya tabbatarwa ba.",
        meets: "Saƙonni biyar na nau'o'i daban-daban, kowanne da kiran yin aiki, an duba bayanai.",
        exceeds: "Saƙonnin suna kama da muryar mai kasuwancin, ba kamar daftarin AI na gama-gari ba."
      },
      {
        name: "Hotuna",
        objective: "O3",
        notYet: "Babu hotuna, ko sun cika da kalmomi, ko suna amfani da hotunan da ba ku da izinin amfani da su.",
        meets: "Hoto mai tsabta ga kowane saƙo da launuka da salon rubutu iri ɗaya na kasuwancin.",
        exceeds: "Yana amfani da hotunan gaske na aikin kasuwancin da kansa."
      },
      {
        name: "Imel na talla",
        objective: "O4",
        notYet: "Taken imel yana ruɗarwa, ko babu adireshi ko hanyar daina karɓa.",
        meets: "Taken imel na gaskiya, a sarari cewa tayi ne, adireshin wuri na zahiri da hanyar daina karɓa.",
        exceeds: "Yana kuma faɗin yadda za a cika buƙatun daina karɓa cikin kwanakin aiki 10."
      },
      {
        name: "Takardar bibiya",
        objective: "O6",
        notYet: "Babu takardar bibiya, ko babu lambar buri ga kowane saƙo.",
        meets: "Takarda da ke jera lambar buri ɗaya ga kowane saƙo da inda za a samo sakamakon.",
        exceeds: "An cike sakamako, kuma tsarin mako na gaba ya ginu a kansu."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Kasuwancin da ke ci gaba da saka saƙonni kowane mako aƙalla makonni huɗu bayan kwas ɗin (binciken biyo baya)",
      "Masu kasuwanci da suka ce sun sami ƙarin ajiyar aiki, kira ko sayarwa daga tallar intanet cikin kwanaki 60",
      "Kasuwancin da suka ƙara sashen ƙasa (footer) da ya bi CAN-SPAM ga kowane imel na talla"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini) da tsarin kyauta na Canva",
      "Google Sheets ko Excel don takardar bibiya",
      "Wasu hotunan gaske na aikin kasuwancin, idan akwai",
      "Kusan minti 60 don darussa da gwaje-gwaje, da mako ɗaya don saka saƙonni da bibiya"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku nuna misalin prompt da samfurin Canva a allon da kowa ke gani.",
      "Ku sa masu koyo su yi amfani da kasuwancinsu, ko kasuwancin gwaji, don kayan tallar su kasance a shirye don amfani.",
      "Ku duba kowane imel don taken gaskiya, adireshi da hanyar daina karɓa kafin kowa ya aika.",
      "Ku tunatar da masu koyo kada su taɓa liƙa sunaye ko bayanan tuntuɓar abokan ciniki a cikin kayan AI.",
      "Ku ba da maki ga kayan ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
