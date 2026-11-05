"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-ai-faith-based.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-ai-faith-based-ha",
  lang: "ha",
  translationOf: "nonprofit-ai-faith-based",
  category: "Non Profits",
  name: "AI ga Ƙungiyoyin Addini",
  skills: "Kafa ƙa'idoji don AI a hidimar addini, Rubuta sanarwa da takardun sanarwa, Tsara jadawalin masu sa kai da taruka, Kiyaye sirrin mambobi, Duba daftarin AI don imani da salo",
  outcome: "amfani da mataimakin AI kyauta don rubuta daftarin sanarwar mako da jadawalin masu sa kai na jama'arku ko shirinku na addini, kiyaye bayanan mambobi a sirri, da duba kowane daftari don ya dace da addininku da salon maganarku.",
  about: [
    "Wannan kwas ɗin na fastoci ne, limamai, rabbai, shugabannin hidimar addini, ma'aikatan ofishin coci da masu sa kai a coci-coci, masallatai, haikali, majami'un Yahudawa da ƙungiyoyin agaji na addini.",
    "Za ku koyi inda AI zai iya rage muku lokaci a aikin ofis na hidimar addini (sanarwa, takardun sanarwa, jadawali, wasiƙun labarai, daftarin neman tallafi) da inda bai kamata a yi amfani da shi ba: kulawar ruhaniya, tattaunawar sirri da shawarwari game da mutane.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta takarda shafi ɗaya mai taken \"Yadda muke amfani da AI\" ga shugabannin jama'arku, sannan ku yi amfani da mataimakin AI don rubuta daftarin sanarwar wannan makon da jadawalin masu sa kai da madadi a maimakon sunaye. Ku duba daftarorin biyu don gaskiya, imani da salo, ku kuma yi alama kan abin da kuka canja.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Fastoci, limamai, rabbai, shugabannin hidimar addini, ma'aikatan ofishin coci da masu sa kai a coci-coci, masallatai, haikali, majami'un Yahudawa da ƙungiyoyin agaji na addini.",
    startingPoint: "Suna rubuta sanarwa, takardun sanarwa da jadawalin masu sa kai da hannu kowane mako. Da yawa sun ji labarin AI amma ba su yi amfani da shi ba, wasu kuma suna damuwa game da sirri da kuma cewa AI zai iya kuskure game da addininsu.",
    gap: "Rubuce-rubucen ofis suna ɗaukar sa'o'i da shugabanni za su fi so su ba mutane. Masu koyo suna buƙatar amfani da AI don daftari da tsare-tsare yayin da suke kiyaye roƙon addu'a da bayanan mambobi a sirri, kuma suna tabbatar da cewa kowane daftari ya dace da addininsu, gaskiyar bayanai da salon maganarsu.",
    constraints: [
      "Sirri: sunaye, roƙon addu'a, bayanan gudummawa, lafiya, bayanan yara da lambobin tuntuɓa ba sa shiga AI kwata-kwata",
      "Kulawar ruhaniya, ba da shawara da shawarwari game da mutane suna zama a hannun mutanen da aka amince da su",
      "Ana duba nassosi da koyarwa a cikin littattafan addini na jama'ar kanta",
      "Dokokin harajin ƙungiyoyin da ba sa biyan haraji game da harkokin siyasa suna aiki (IRS Publication 1828)",
      "Kalmomi masu sauƙi; masu sa kai da yawa sababbi ne a fasaha"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan hidimar addini", action: "raba su zuwa \"AI zai iya rubuta daftarin wannan\" da \"mutane kaɗai\"", standard: "kuna barin kulawar ruhaniya, roƙon addu'a da shawarwari game da mutane a hannun mutane" },
    { id: "O2", condition: "Ga shugabannin jama'arku", action: "rubuta takarda shafi ɗaya mai taken \"Yadda muke amfani da AI\" da ke amsa tambayoyin ƙa'idoji guda huɗu", standard: "da kalmomi masu sauƙi, a shirye don kwamitinku, dattawa ko majalisa su amince da ita" },
    { id: "O3", condition: "Idan aka ba ku buƙata da ke ɗauke da bayanan mambobi", action: "sake rubuta ta a matsayin prompt mai aminci da madadi", standard: "ba tare da sunaye, roƙon addu'a, bayanan gudummawa, lafiya ko lambobin tuntuɓa ba" },
    { id: "O4", condition: "Idan aka ba ku abubuwan da za su faru a wannan makon", action: "rubuta prompt mai sarari da daftarin sanarwar mako da salon maganar jama'arku", standard: "kowace rana, lokaci da wuri ku da kanku kuka tabbatar da su" },
    { id: "O5", condition: "Idan aka ba ku ayyuka, ranaku da yawan mutanen da kowanne ke buƙata", action: "yin jadawalin masu sa kai da AI ta amfani da madadi a maimakon sunaye", standard: "ana ƙara sunaye na gaske a takardarku kaɗai" },
    { id: "O6", condition: "Idan aka ba ku daftarin AI", action: "duba shi don imani, gaskiya da salo, da gyara abin da bai dace ba", standard: "kuna duba nassosi a littattafan addininku kafin wani mai dubawa da aka ambaci sunansa ya amince da shi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Amfani da AI da hikima a hidimar addini",
      lessons: [
        {
          objectives: ["O1"],
          title: "Inda AI ke taimakon jama'a, da inda ba ya taimako",
          minutes: 4,
          goal: "Raba ayyukan hidimar addini zuwa \"AI zai iya rubuta daftarin wannan\" da \"mutane kaɗai\".",
          text: [
            "Mataimakin AI, kamar ChatGPT, Microsoft Copilot ko Google Gemini, shiri ne na kwamfuta da kuke hira da shi da kalmomin yau da kullum. Yana rubuta daftari, jerin abubuwa da tsare-tsare cikin daƙiƙoƙi.",
            "A cikin jama'a, yana da amfani wajen aikin ofis: sanarwar mako, rubutun takardar sanarwa, wasiƙun labarai, tsare-tsaren taruka, saƙonnin neman masu sa kai, wasiƙun godiya ga masu ba da gudummawa da daftarin farko na neman tallafi.",
            "Bai kamata ya maye gurbin mutane a kulawar ruhaniya, roƙon addu'a, ba da shawara, ikirari, rikici tsakanin mambobi, ko shawarar wanda zai yi hidima ko wanda zai sami taimako ba. Waɗannan suna buƙatar mutumin da aka amince da shi, ba shirin kwamfuta ba."
          ],
          words: [["Mataimakin AI", "shirin kwamfuta da kuke hira da shi ta rubutu ko magana; yana rubuta amsoshi."], ["Kulawar ruhaniya (pastoral care)", "kulawar da shugaban addini ke ba mambobi: ziyara, shawara, ta'aziyya da addu'a."]],
          slides: [
            { title: "AI zai iya rubuta daftarin", bullets: ["Sanarwa da takardun sanarwa", "Wasiƙun labarai da tsare-tsaren taruka", "Saƙonnin neman masu sa kai da wasiƙun godiya"] },
            { title: "Mutane kaɗai", bullets: ["Kulawar ruhaniya da ba da shawara", "Roƙon addu'a da tattaunawar sirri", "Shawarwari game da mambobi da wanda zai sami taimako"] },
            { title: "Ƙa'idar gama-gari", bullets: ["AI yana taimakawa da kalmomi da tsare-tsare", "Mutane suna kula da zukata da shawarwari"] }
          ],
          tryIt: "Ku rubuta ayyuka goma da ofishin jama'arku ke yi a wata ɗaya. Ku yi wa kowanne alama \"AI zai iya rubuta daftari\" ko \"mutane kaɗai\".",
          youCanNow: "ambaton ayyukan hidimar addini da AI zai iya taimakawa da su, da waɗanda dole su zauna a hannun mutane.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne aikin ofis mai kyau ga AI a cikin jama'a?", options: ["Rubuta daftarin saƙon neman masu sa kai", "Sauraron ikirari", "Yanke shawarar wanda zai sami taimako", "Sasanta rikici tsakanin mambobi"], answer: 0, why: "AI yana taimakawa da rubutun ofis; kulawar ruhaniya da shawarwari suna buƙatar mutumin da aka amince da shi." },
            { objective: "O1", q: "Wani mamba ya tambaya ko AI zai iya ba shi shawara game da baƙin cikinsa. Me za ku ce?", options: ["Ee, AI yana nan koyaushe", "A'a; wannan yana buƙatar mutumin da aka amince da shi, ba shirin kwamfuta ba", "Ee, idan ya kawo nassi", "Da dare kaɗai"], answer: 1, why: "Ba da shawara da kulawar ruhaniya suna buƙatar mutumin da aka amince da shi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta ƙa'idoji masu sauƙi don AI",
          minutes: 5,
          goal: "Rubuta gajeriyar takarda \"Yadda muke amfani da AI\" da shugabanninku za su iya amincewa da ita.",
          text: [
            "Kafin ma'aikata da masu sa kai su yi amfani da AI, ku amince kan 'yan ƙa'idoji masu sauƙi. Wannan yana kiyaye kowa kuma yana hana abubuwan ba-zata.",
            "Takarda mai kyau tana amsa tambayoyi huɗu: Me za mu iya amfani da AI don shi? Me bai kamata ya shiga AI kwata-kwata ba (sunaye, roƙon addu'a, bayanan gudummawa, bayanan lafiya ko na iyali)? Wane ne yake duba daftarin AI kafin a raba shi? Shin muna faɗa wa mutane idan AI ya taimaka wajen rubuta wani abu?",
            "Ku bar ta a shafi ɗaya da kalmomi masu sauƙi. Ku raba ta da kwamitinku, dattawa ko majalisar hidima, ku kuma sake duba ta sau ɗaya a shekara."
          ],
          steps: ["Ku rubuta ayyukan da AI zai iya taimakawa da su.", "Ku rubuta abin da bai kamata a taɓa rubutawa a AI ba.", "Ku ambaci wanda zai duba kowane daftarin AI kafin a raba shi.", "Ku yanke ko kuma yadda za ku faɗi cewa AI ya taimaka.", "Ku sa shugabanninku su amince, ku sa ranar sake dubawa ta kowace shekara."],
          words: [["Ƙa'idoji", "gajeren jerin dokokin da aka amince da su da kowa ke bi."], ["Dubawa (review)", "karanta daftari a hankali da gyara shi kafin a raba shi."]],
          slides: [
            { title: "Dalilin ƙa'idoji", bullets: ["Kowa ya san abin da aka yarda da shi", "Amincewar mambobi tana nan lafiya"] },
            { title: "Tambayoyi huɗu da za a amsa", bullets: ["Me za mu iya amfani da AI don shi?", "Me ba ya taɓa shiga AI?", "Wane ne yake duba daftari?", "Shin muna cewa AI ya taimaka?"] },
            { title: "Ku bar ta mai sauƙi", bullets: ["Shafi ɗaya, kalmomi masu sauƙi", "Shugabanninku sun amince da ita", "Ana sake duba ta sau ɗaya a shekara"] }
          ],
          tryIt: "Ku rubuta daftarin takardar \"Yadda muke amfani da AI\" ta jama'arku mai shafi ɗaya ta hanyar amsa tambayoyin huɗu. Kuna iya neman mataimakin AI ya sa daftarinku ya fi sarari, amma ku ne za ku rubuta ƙa'idojin da kanku.",
          youCanNow: "rubuta gajerun ƙa'idojin AI ga jama'a ko shirin addini.",
          quickCheck: [
            { objective: "O2", q: "Wace tambaya ce takardar \"Yadda muke amfani da AI\" ke amsawa?", options: ["Nawa fasto yake samu", "Waɗanne mambobi ne suka fi ba da gudummawa", "Wane ne yake duba daftarin AI kafin a raba shi", "Wane kamfanin AI ne ya fi kyau"], answer: 2, why: "Takardar tana amsa abin da AI yake don shi, abin da ba ya shiga, wanda yake dubawa da ko kuna faɗa wa mutane." },
            { objective: "O2", q: "Ƙungiyar hidimarku ta rubuta ƙa'idojin AI. Me za ku yi a gaba?", options: ["Ku ɓoye su", "Ku sa su zama shafi goma", "Ku bar kowane mai sa kai ya canja su", "Ku raba su da kwamitinku, dattawa ko majalisa, ku sake duba su kowace shekara"], answer: 3, why: "Shugabanni suna amincewa da takardar, kuma ana sake duba ta sau ɗaya a shekara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kiyaye bayanan mambobi a sirri",
          minutes: 5,
          goal: "Mayar da buƙata mai bayanan sirri zuwa prompt mai aminci da madadi.",
          text: [
            "Mambobi suna amincewa da ku da abubuwan sirri: roƙon addu'a, rashin lafiya, matsalolin iyali, yawan gudummawa, adireshi da lambobin waya. Kayan AI da yawa suna iya ajiye abin da kuka rubuta, don haka ku ɗauki prompt kamar katin gaisuwa (postcard) da kowa zai iya karantawa.",
            "Kada ku taɓa rubuta sunaye, roƙon addu'a, bayanan gudummawa, bayanan lafiya, bayanan yara ko lambobin tuntuɓa a mataimakin AI. Ku yi amfani da madadi kamar [sunan mamba] ko [adadi], sannan ku cike su da kanku daga baya, a takardarku.",
            "Idan ƙungiyarku tana biyan kuɗin sigar kasuwanci ko ta ilimi ta wani kayan AI, ku tambayi mai kula da shi yadda saitunan sirrinsa suke. Ko da haka, ku bar al'amuran kulawar ruhaniya na sirri a waje."
          ],
          steps: ["Ku rubuta abin da kuke son AI ya taimaka da shi.", "Ku karanta shi don neman sunaye, adadin kuɗi, lafiya, iyali da lambobin tuntuɓa.", "Ku maye kowanne da madadi kamar [sunan mamba].", "Ku aika prompt ɗin, sannan ku cike bayanai na gaske da kanku a wajen kayan AI."],
          words: [["Madadi (placeholder)", "abin da ke tsaye a wuri, kamar [sunan mamba], da za ku maye da ainihin bayani daga baya."], ["Na sirri (confidential)", "bayanin sirri da aka faɗa cikin amana, da bai kamata a yaɗa shi ba."]],
          slides: [
            { title: "Ku ɗauki prompt kamar katin gaisuwa", bullets: ["Ku ɗauka cewa wani zai iya karanta shi", "Ku kiyaye amincewar mambobinku"] },
            { title: "Kada ku taɓa rubutawa AI", bullets: ["Sunaye da lambobin tuntuɓa", "Roƙon addu'a, lafiya ko matsalolin iyali", "Bayanan gudummawa da adadinsu", "Bayanan yara"] },
            { title: "Ku yi amfani da madadi", bullets: ["[sunan mamba], [adadi], [rana]", "Ku cike bayanai na gaske da kanku daga baya"] }
          ],
          tryIt: "Ku ɗauki wannan buƙatar: \"Ka rubuta katin fatan samun lafiya ga 'Yar'uwa Mary Jones, wadda aka yi wa tiyatar zuciya a County Hospital.\" Ku sake rubuta ta da madadi don kada wani bayanin sirri ya shiga AI, sannan ku aika ta.",
          youCanNow: "cire bayanan sirri na mambobi daga prompt da amfani da madadi a maimakonsu.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za ku ɗauki prompt kamar katin gaisuwa?", options: ["Kayan AI da yawa suna iya ajiye abin da kuka rubuta", "Katin gaisuwa ya fi gajarta", "AI yana buga prompt ɗinku", "Yana sa amsar ta fi daɗi"], answer: 0, why: "Kayan AI da yawa suna iya ajiye abin da kuka rubuta, don haka ku ɗauka cewa wani zai iya karanta shi." },
            { objective: "O3", q: "Kuna son AI ya taimaka wajen rubuta katin fatan samun lafiya ga wani mamba da ke asibiti. Me za ku rubuta?", options: ["Sunan mamban da cutarsa", "\"Ka rubuta gajeren katin fatan samun lafiya ga [sunan mamba] daga jama'armu.\"", "Ɗakinsa a asibiti da lambar wayarsa", "Roƙon addu'ar iyalinsa"], answer: 1, why: "Ku yi amfani da madadi, ku cike ainihin bayanai da kanku daga baya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Amfani da AI da hikima a hidimar addini",
        questions: [
          { objective: "O1", q: "Wane aiki ne ya dace da mataimakin AI a ofishin coci?", options: ["Rubuta daftarin sanarwar mako", "Ba da shawara ga mamba mai baƙin ciki", "Yanke shawarar wanda zai sami kuɗin taimako", "Amsa roƙon addu'a na sirri"], answer: 0, why: "Sanarwa rubutun ofis ce; sauran suna buƙatar mutumin da aka amince da shi." },
          { objective: "O2", q: "Me ya kamata takardar \"Yadda muke amfani da AI\" ta ƙunsa?", options: ["Lambar wayar kowane mamba", "Jerin farashin kamfanonin AI", "Abin da za a iya amfani da AI don shi da abin da ba ya taɓa shiga cikinsa", "Kalmomin sirrin fasto"], answer: 2, why: "Ƙa'idoji suna faɗin abin da aka yarda da shi da abin da dole ya zauna a waje." },
          { objective: "O3", q: "Wani mai sa kai yana son ya liƙa jerin addu'o'i a AI don \"ya gyara shi\". Me za ku ce?", options: ["Ci gaba, yana rage lokaci", "Ka liƙa rabinsa kawai", "Ka liƙa shi amma ka goge hirar daga baya", "A'a. Roƙon addu'a na sirri ne kuma yana zama a wajen AI"], answer: 3, why: "Roƙon addu'a na sirri ne, kuma bai kamata a rubuta su a kayan AI ba." },
          { objective: "O3", q: "Mene ne madadi (placeholder)?", options: ["Kujerar da aka ajiye a wurin ibada", "Abin da ke tsaye a wuri kamar [sunan mamba] da za ku cike daga baya", "Wani nau'in manhajar AI", "Kalmar sirri"], answer: 1, why: "Madadi yana bar ku samun taimako ba tare da raba bayanan sirri ba." },
          { objective: "O2", q: "Wane ne ya kamata ya duba daftarin AI kafin a raba shi da jama'a?", options: ["Babu kowa, AI koyaushe daidai yake", "AI da kansa", "Mutumin da aka ambaci sunansa wanda shugabanninku suka amince da shi", "Kowane baƙo"], answer: 2, why: "Ƙa'idojinku suna ambaton wanda zai duba daftari don a kama kurakurai." }
        ]
      }
    },
    {
      name: "Babi na 2: Sa AI ya yi aiki ga jama'arku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta daftarin sanarwa da takardun sanarwa",
          minutes: 5,
          goal: "Yi amfani da prompt mai sarari don rubuta daftarin sanarwar mako da salon maganar jama'arku.",
          text: [
            "Prompt mai sarari yana kawo daftari mafi kyau. Ku faɗa wa AI abin da kuke buƙata, ɗan bayani game da jama'arku (ba tare da bayanan sirri ba), da yadda kuke son a rubuta shi.",
            "Misali: \"Ka rubuta gajeriyar sanarwa mai daɗi don takardar sanarwarmu ta Lahadi. Abubuwa: rumbun abinci ranar Asabar ƙarfe 9 na safe zuwa ƙarfe 12 na rana, taron matasa ranar Laraba ƙarfe 6 na yamma, ƙungiyar mawaƙa tana buƙatar ƙarin murya biyu. Salo mai fara'a da maraba, ƙasa da kalmomi 120.\"",
            "Sannan ku nemi canje-canje: \"Ka gajarta ta.\" \"Ka ƙara layi da ke maraba da baƙi.\" \"Ka yi amfani da kalmomi masu sauƙi.\" Ku duba kowace rana, lokaci da wuri da kanku kafin a fitar da ita."
          ],
          steps: ["Ku rubuta abubuwan da za su faru da ranaku, lokuta da wurare.", "Ku faɗi salon da kuke so da tsawon rubutun.", "Ku nemi AI ya rubuta daftari.", "Ku nemi canji ɗaya ko biyu.", "Ku duba kowace rana, lokaci da wuri da kalandarku."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI don neman wani abu."], ["Salo (tone)", "yadda rubutu yake sauti: mai daɗi, na girmamawa, mai farin ciki, mai nutsuwa."]],
          slides: [
            { title: "Prompt mai sarari yana da", bullets: ["Abin da kuke buƙata", "Abubuwan da za su faru, ranaku da wurare", "Salo da tsawo"] },
            { title: "Sannan ku inganta shi", bullets: ["\"Ka gajarta ta.\"", "\"Ka ƙara maraba ga baƙi.\"", "\"Ka yi amfani da kalmomi masu sauƙi.\""] },
            { title: "Kafin a fitar da ita", bullets: ["Ku duba kowace rana da lokaci", "Ku duba kowane wuri da lambar tuntuɓa", "Ku tabbata tana kama da maganarku"] }
          ],
          tryIt: "Ku rubuta prompt don sanarwar gaske ta wannan makon a jama'arku ko shirinku. Ku sami daftari, ku nemi canji ɗaya, sannan ku duba kowace rana da lokaci da kalandarku.",
          youCanNow: "rubuta daftarin sanarwar jama'a da AI da duba ta kafin a raba ta.",
          quickCheck: [
            { objective: "O4", q: "Waɗanne abubuwa uku ne prompt mai sarari na sanarwa ke faɗa wa AI?", options: ["Sunayen mambobi, wayoyinsu da adireshinsu", "Kalmar \"sanarwa\" kawai", "Abin da kuke buƙata, ɗan bayani game da jama'arku, da yadda kuke son a rubuta shi", "Kalmar sirrinku da bayanan shiga asusu"], answer: 2, why: "Ku faɗa wa AI abin da kuke buƙata, game da jama'arku (ba tare da bayanan sirri ba) da yadda za a rubuta shi." },
            { objective: "O4", q: "Daftarin yana da kyau amma ya yi tsawo ga takardar sanarwa. Me za ku nema?", options: ["\"Ka ƙara abubuwa.\"", "\"Ka yi amfani da kalmomi masu wuya.\"", "\"Ka rubuta shi da wani harshe.\"", "\"Ka gajarta ta.\""], answer: 3, why: "Ku nemi canje-canje kamar \"Ka gajarta ta\" har ta dace." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsara jadawalin masu sa kai da taruka",
          minutes: 5,
          goal: "Yi amfani da AI don gina jadawalin masu sa kai da ayyuka da madadi, ba sunaye ba.",
          text: [
            "Masu kula da zama, masu tarbar baƙi, masu taimako a ɗakin yara, ƙungiyoyin rumbun abinci da direbobi duk suna buƙatar jadawali. AI zai iya mayar da jerin ayyuka da ranaku zuwa tebur mai sarari cikin daƙiƙoƙi.",
            "Ku ba shi ayyuka, ranaku da yawan mutanen da kowane aiki ke buƙata, ku kuma yi amfani da [Mai sa kai 1], [Mai sa kai 2] a maimakon sunaye na gaske. Sannan ku kwafi teburin zuwa takardarku ko spreadsheet (takardar lissafi) ɗinku, ku ƙara sunaye a can.",
            "AI zai iya kuma yin jerin abubuwan yi don taruka, misali don taron farfaɗo, liyafar tara kuɗi ko bikin lafiyar al'umma: abin da za a yi makonni shida, makonni biyu da kwana ɗaya kafin taron."
          ],
          steps: ["Ku rubuta ayyukan da yawan mutanen da kowanne ke buƙata.", "Ku rubuta ranakun.", "Ku nemi AI ya yi tebur ta amfani da madadi [Mai sa kai 1], [Mai sa kai 2].", "Ku kwafi shi zuwa takardarku, ku ƙara sunaye na gaske a can.", "Ku nemi jerin abubuwan yi idan kuna shirya wani taro."],
          words: [["Tebur (table)", "bayanan da aka jera a layuka da ginshiƙai."], ["Jerin abubuwan yi (checklist)", "jerin ayyukan da kuke yi wa alama idan an gama su."]],
          slides: [
            { title: "AI zai iya gina", bullets: ["Jadawalin masu sa kai a tebur", "Jerin abubuwan yi na taro bisa makonni", "Saƙonnin tunatarwa ga masu sa kai"] },
            { title: "Ku bar sunaye a waje", bullets: ["Ku yi amfani da [Mai sa kai 1], [Mai sa kai 2]", "Ku ƙara sunaye na gaske a fayil ɗinku"] },
            { title: "Jerin abubuwan yi na taro", bullets: ["Makonni shida kafin", "Makonni biyu kafin", "Kwana ɗaya kafin da ranar taron"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi jadawali na makonni huɗu don ayyuka uku (misali mai tarbar baƙi, mai kula da zama, ɗakin yara) da mutane biyu a kowanne, ta amfani da madadi. Ku kwafi shi zuwa takardarku.",
          youCanNow: "yin jadawalin masu sa kai da jerin abubuwan yi na taro da AI yayin da kuke kiyaye sunaye a sirri.",
          quickCheck: [
            { objective: "O5", q: "Me za ku ba AI don ya gina jadawalin masu sa kai?", options: ["Ayyuka, ranaku da yawan mutanen da kowane aiki ke buƙata", "Lambar wayar kowane mai sa kai", "Bayanan gudummawar mambobi", "Adireshin coci kawai"], answer: 0, why: "Ku ba da ayyuka, ranaku da yawan da ake buƙata, da madadi a maimakon sunaye." },
            { objective: "O5", q: "Kuna shirya liyafar tara kuɗi. Me AI zai iya yi muku?", options: ["Jerin baƙi na ƙarshe da sunaye", "Jerin abin da za a yi makonni shida, makonni biyu da kwana ɗaya kafin taron", "Yawan gudummawar masu bayarwa", "Shawarwarin wanda zai yi hidima"], answer: 1, why: "AI zai iya yin jerin abubuwan yi na taro bisa lokacin da ya rage kafin taron." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Duba daftari don imani, gaskiya da salo",
          minutes: 5,
          goal: "Duba daftarin AI da gyara duk abin da bai dace da addininku, gaskiyar bayanai ko salon maganarku ba.",
          text: [
            "AI yana iya yin kuskure. Yana iya kawo nassi ba daidai ba, ya yi amfani da kalmomin wani addini daban, ya yi kuskure game da ranar idi ko ranar ibada, ko ya yi sauti mai tsauri. Yana iya kuma ƙirƙirar bayanai da suke kama da gaskiya.",
            "Ku karanta kowane daftari don abubuwa uku: imani (ya dace da abin da muka yi imani da shi da kalmominmu?), gaskiya (nassosi, ranaku da bayanai sun yi daidai?), da salo (yana kama da maganarmu kuma yana girmama kowa?). Ku duba nassosi da koyarwa a littattafan addininku, ba a cikin AI ba.",
            "Idan ƙungiyarku ƙungiyar agaji ce da ba ta biyan haraji, daftarin AI bai kamata ya goyi bayan ko ya yi adawa da 'yan takarar siyasa ba. IRS (hukumar harajin Amurka) tana bayanin dokokin coci-coci da ƙungiyoyin addini a Publication 1828; ku tambayi shugabanninku ko mai ba da shawara idan ba ku tabbata ba."
          ],
          steps: ["Ku karanta don imani: ya dace da abin da muka yi imani da shi da kalmominmu?", "Ku duba kowane abin da aka ambato, nassi da rana a majiyoyinku.", "Ku karanta shi da babbar murya don salo.", "Ku gyara abin da ba daidai ba, ku rubuta abin da kuka canja.", "Ku sa mai dubawa da aka amince da shi ya amince da shi."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Ba ta biyan haraji (tax-exempt)", "ƙungiyar da IRS ta amince ba ta biyan harajin kuɗin shiga na gwamnatin tarayya, tare da dokokin da dole ta bi."]],
          sources: [{ name: "IRS Publication 1828, Tax Guide for Churches and Religious Organizations (jagorar haraji ga coci-coci da ƙungiyoyin addini)", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" }],
          slides: [
            { title: "AI yana iya kuskure game da addini", bullets: ["Nassin da aka kawo ba daidai ba", "Kalmomi daga wani addini daban", "Ranakun ibada marasa daidai ko bayanan ƙarya"] },
            { title: "Dubawa uku", bullets: ["Imani: ya dace da abin da muka yi imani da shi", "Gaskiya: nassosi, ranaku, bayanai", "Salo: yana kama da mu, yana da girmamawa"] },
            { title: "Ku zauna cikin dokoki", bullets: ["Babu goyon bayan 'yan takarar siyasa", "Ku duba IRS Publication 1828", "Ku tambayi shugabanninku idan kuna shakka"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta daftarin takardar \"Yadda muke amfani da AI\", sannan ku yi amfani da AI don rubuta sanarwar wannan makon da jadawalin masu sa kai da madadi. Ku duba su biyun don imani, gaskiya da salo, ku yi alama kan abin da kuka canja.",
          youCanNow: "duba daftarin AI don imani, gaskiya da salo kafin ya isa ga jama'arku.",
          quickCheck: [
            { objective: "O6", q: "Waɗanne dubawa uku ne ke cikin wannan kwas?", options: ["Tsawo, rubutun haruffa da launi", "Farashi, rana da wuri", "Imani, gaskiya da salo", "Rubutu daidai, nahawu da sauri"], answer: 2, why: "Ku karanta kowane daftari don imani, gaskiya da salo." },
            { objective: "O6", q: "Daftarin AI ya yi kuskure game da ranar wani idi. Me za ku yi?", options: ["Ku bar shi; AI ya san ranaku", "Ku tambayi AI ko ya tabbata", "Ku cire idin daga kalanda", "Ku duba shi da kalandar addininku ku gyara shi"], answer: 3, why: "AI yana iya kuskure game da ranar idi, don haka ku duba ku gyara da kanku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sa AI ya yi aiki ga jama'arku",
        questions: [
          { objective: "O4", q: "Wane prompt ne zai kawo mafi kyawun daftarin takardar sanarwa?", options: ["\"Ka rubuta sanarwa mai daɗi ta kalmomi 100: rumbun abinci Asabar 9-12, matasa Laraba 6 na yamma, mawaƙa suna buƙatar murya.\"", "\"takardar sanarwa\"", "\"abubuwan coci\"", "\"rubuta komai\""], answer: 0, why: "Yana ba da abubuwan da za su faru, salo da tsawo." },
          { objective: "O5", q: "Ta yaya sunaye za su bayyana a jadawalin masu sa kai da AI ya yi?", options: ["A matsayin madadi kamar [Mai sa kai 1]", "Cikakkun sunaye da lambobin waya", "Sunayen farko da adireshi kawai", "Sunaye da adireshin imel"], answer: 0, why: "Madadi yana hana bayanan masu sa kai shiga kayan AI." },
          { objective: "O6", q: "AI ya kawo wani nassi a cikin sanarwarku. Me za ku yi?", options: ["Ku amince da shi", "Ku tambayi AI ko ya tabbata", "Ku duba nassin a littafin addininku", "Ku goge sanarwar gaba ɗaya"], answer: 2, why: "AI yana iya kawo nassi ba daidai ba; ku duba majiyoyinku." },
          { objective: "O6", q: "Wanne ne ɗaya daga cikin dubawa uku a wannan kwas?", options: ["Sauri", "Salo", "Farashi", "Girman haruffa"], answer: 1, why: "Imani, gaskiya da salo su ne dubawa uku." },
          { objective: "O6", q: "A ina coci zai iya koyon dokokin IRS ga ƙungiyoyin addini?", options: ["Wani rubutu a kafofin sada zumunta", "Mataimakin AI kaɗai", "Wani shafin intanet na bazata", "IRS Publication 1828"], answer: 3, why: "Publication 1828 ita ce jagorar harajin IRS ga coci-coci da ƙungiyoyin addini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Ƙungiyoyin Addini",
    questions: [
      { objective: "O1", q: "Wane aiki ne ya kamata ya zauna a hannun mutane, ba AI ba?", options: ["Rubuta daftarin jerin abubuwan yi na taro", "Ba da shawara ga mamba da ke cikin matsala mai tsanani", "Rubuta daftarin wasiƙar labarai", "Yin teburin masu sa kai"], answer: 1, why: "Kulawar ruhaniya tana buƙatar mutumin da aka amince da shi." },
      { objective: "O1", q: "AI ya fi taimakawa a hidimar addini wajen:", options: ["Rubutun ofis da tsare-tsare", "Sauraron ikirari", "Yanke shawarar wanda zai sami taimako", "Riƙe sirrin addu'o'i"], answer: 0, why: "AI yana rubuta daftarin kalmomi da tsare-tsare; mutane suna kula da kulawa da shawarwari." },
      { objective: "O1", q: "Ƙa'idar gama-gari mai kyau ita ce:", options: ["AI yana yanke shawara, mutane suna bi", "AI yana yin komai", "Kada ku taɓa karanta daftarin AI", "AI yana taimakawa da kalmomi da tsare-tsare; mutane suna kula da zukata da shawarwari"], answer: 3, why: "Wannan yana barin kulawa da hukunci a hannun mutane." },
      { objective: "O2", q: "Yaya tsawon takardar \"Yadda muke amfani da AI\" ya kamata ya kasance?", options: ["Shafi hamsin", "Kalma ɗaya", "Kusan shafi ɗaya da kalmomi masu sauƙi", "Duk tsawon da AI yake so"], answer: 2, why: "Gajeriya kuma mai sauƙi tana sa mutane su karanta su bi ta." },
      { objective: "O2", q: "Wane ne ya kamata ya amince da ƙa'idojin AI?", options: ["Kamfanin AI kaɗai", "Baƙo ɗaya", "Kwamitinku, dattawa ko majalisar hidima", "Babu kowa"], answer: 2, why: "Amincewar shugabanni tana ba ƙa'idojin iko." },
      { objective: "O2", q: "Sau nawa ya kamata ku sake duba ƙa'idojin AI ɗinku?", options: ["Kusan sau ɗaya a shekara", "Ba sau ɗaya ba", "Kowace sa'a", "Sai idan AI ya nema"], answer: 0, why: "Kayan aiki suna canjawa, don haka sake dubawa kowace shekara yana sa ƙa'idoji su zama na zamani." },
      { objective: "O3", q: "Wanne ne kada a TAƁA rubutawa mataimakin AI?", options: ["\"Ka gajarta ta\"", "Jerin ranakun taruka", "\"Ka yi amfani da salo mai daɗi\"", "Roƙon addu'ar wani mamba tare da sunansa"], answer: 3, why: "Roƙon addu'a da sunaye na sirri ne." },
      { objective: "O3", q: "Me yasa za ku ɗauki prompt kamar katin gaisuwa?", options: ["Katin gaisuwa gajere ne", "Wani zai iya karanta abin da kuka rubuta", "AI yana karanta katin gaisuwa kaɗai", "Ya fi sauri"], answer: 1, why: "Kayan AI suna iya ajiye abin da kuka rubuta." },
      { objective: "O3", q: "Kuna buƙatar wasiƙar godiya don gudummawar wani. Ta yaya za ku rubuta prompt lafiya?", options: ["Ku saka sunansa da adadin kuɗin", "Ku yi amfani da [sunan mai bayarwa] da [adadi], ku cike su da kanku", "Ku liƙa bayanan gudummawarsa", "Ku saka adireshinsa"], answer: 1, why: "Madadi yana kiyaye bayanan gudummawa a sirri." },
      { objective: "O3", q: "Cocinku yana biyan kuɗin tsarin AI na kasuwanci. Ya kamata ku rubuta al'amuran kulawar ruhaniya na sirri a ciki?", options: ["Ee, an biya shi", "Ranakun Lahadi kaɗai", "Sai idan gajere ne", "A'a, ku bar al'amuran kulawar ruhaniya na sirri a waje"], answer: 3, why: "Kulawar sirri tana zama a wajen AI ko a tsare-tsaren da aka biya." },
      { objective: "O4", q: "Prompt mai sarari na sanarwa ya ƙunshi:", options: ["Abubuwan da za su faru, ranaku, salo da tsawo", "Kalmar \"sanarwa\" kawai", "Lambobin wayar mambobi", "Kalmar sirrin fasto"], answer: 0, why: "Waɗannan bayanai suna bar AI ya rubuta daftari mai amfani." },
      { objective: "O4", q: "Bayan kun sami daftari, wace tambayar biyo baya ce mai amfani?", options: ["\"Ga jerin mambobinmu.\"", "\"Ka yanke kasafin kuɗinmu.\"", "\"Ka ƙara layi da ke maraba da baƙi.\"", "\"Ka aika shi ga kowa yanzu.\""], answer: 2, why: "Tana neman ingantawa mai sarari." },
      { objective: "O4", q: "Kafin sanarwa ta fita, dole ku:", options: ["Ƙara wani rubutun AI", "Cire dukkan ranaku", "Ƙi karanta ta", "Duba kowace rana, lokaci da wuri"], answer: 3, why: "AI yana iya yin kuskure a bayanai." },
      { objective: "O5", q: "A ina za ku ƙara sunayen masu sa kai na gaske?", options: ["A cikin prompt na AI", "A takardarku bayan kun kwafi teburin", "A wani rubutu na jama'a a intanet", "Ba ko'ina"], answer: 1, why: "Sunaye suna zama a fayil ɗinku, ba a kayan AI ba." },
      { objective: "O5", q: "Jerin abubuwan yi na taro yawanci yana jera ayyuka:", options: ["Bisa kuɗin shigar mambobi", "Ba tare da tsari ba", "Bisa lokacin da ya rage kafin taron, kamar makonni shida da makonni biyu", "Bayan taron kaɗai"], answer: 2, why: "Aiki daga ranar taron zuwa baya yana sa shiri ya tafi daidai." },
      { objective: "O6", q: "AI ya yi amfani da kalmomi daga wani addini daban a daftarinku. Ya kamata ku:", options: ["Gyara shi don ya dace da addininku", "Bar shi", "Neman mambobi su jefa ƙuri'a", "Saka shi a haka"], answer: 0, why: "Dubawar imani tana tabbatar da cewa ya dace da abin da kuka yi imani da shi da kalmominku." },
      { objective: "O6", q: "Mene ne hallucination a AI?", options: ["Wani abu da AI ya rubuta da yake kama da gaskiya amma ƙirƙirarre ne", "Wahayi lokacin addu'a", "Intanet mai jinkiri", "Wani nau'in manhaja"], answer: 0, why: "AI yana iya ƙirƙirar bayanai da suke kama da na gaske." },
      { objective: "O6", q: "Karanta daftari da babbar murya yana taimaka muku duba:", options: ["Saurin intanet", "Farashin AI", "Salo", "Yanayi"], answer: 2, why: "Jin sa yana nuna ko yana kama da maganarku." },
      { objective: "O6", q: "Daftarin AI na wani coci da ba ya biyan haraji yana goyon bayan wani ɗan takarar siyasa. Ya kamata ku:", options: ["Wallafa shi", "Cire shi ku duba IRS Publication 1828 ko ku tambayi shugabanninku", "Ƙara ɗan takara na biyu", "Ku yi watsi da shi"], answer: 1, why: "Ƙungiyoyin agaji da ba sa biyan haraji suna da dokokin IRS game da yaƙin neman zaɓe." },
      { objective: "O6", q: "Wane ne yake ba da amincewa ta ƙarshe kafin a raba daftarin AI?", options: ["AI", "Duk wanda ke kusa", "Babu kowa", "Mai dubawa da shugabanninku suka amince da shi"], answer: 3, why: "Mai dubawa da aka ambaci sunansa yana kama kurakurai kuma yana kiyaye amincewa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      6,
      10,
      13,
      15
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Takardar \"Yadda muke amfani da AI\"",
        objective: "O2",
        notYet: "Takardar ba ta faɗi abin da bai kamata ya taɓa shiga AI ba, ko wanda yake dubawa.",
        meets: "Shafi ɗaya da kalmomi masu sauƙi da ke amsa dukkan tambayoyi huɗu.",
        exceeds: "Ta jera shugabannin da za su amince da ita da ranar sake dubawa ta kowace shekara."
      },
      {
        name: "Sanarwa mai sarari",
        objective: "O4",
        notYet: "Wata rana, lokaci ko wuri ba daidai ba ne ko ba ya nan.",
        meets: "An rubuta daftarin sanarwar wannan makon daga prompt mai sarari, an duba kowane bayani.",
        exceeds: "Mai daɗi da maraba, kuma tana kama da maganar jama'ar."
      },
      {
        name: "Jadawalin masu sa kai mai sirri",
        objective: "O5",
        notYet: "Sunaye na gaske ko lambobin tuntuɓa sun shiga AI.",
        meets: "Jadawali mai ayyuka, ranaku da madadi; an ƙara sunaye a takardar mai koyo.",
        exceeds: "Yana kuma da jerin abubuwan yi na taro bisa lokacin da ya rage kafin taron."
      },
      {
        name: "Dubawar imani, gaskiya da salo",
        objective: "O6",
        notYet: "An bar nassi, rana ko kalmar wani addini da ba daidai ba.",
        meets: "An duba daftarorin biyu don imani, gaskiya da salo, kuma an yi alama kan canje-canje.",
        exceeds: "An duba nassi a littafin addinin mai koyo, kuma an rubuta inda aka samo shi."
      },
      {
        name: "Sirrin mambobi",
        objective: "O3",
        notYet: "An rubuta wani roƙon addu'a, bayanan gudummawa ko bayanan mamba a AI.",
        meets: "Madadi kaɗai aka yi amfani da shi a kowane prompt.",
        exceeds: "Zai iya nuna prompt mai aminci kusa da ainihin buƙatar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Jama'o'in da shugabanninsu suka amince da takardar \"Yadda muke amfani da AI\" cikin kwanaki 60 (binciken biyo baya)",
      "Sa'o'in ofis da aka rage kowane mako kan sanarwa da jadawali, kamar yadda ma'aikata suka faɗa",
      "Masu koyo da suka fara wani kwas na Koach Learn game da ƙungiyoyin agaji cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Bayanan abubuwan da za su faru a wannan makon da jerin ayyukan masu sa kai, ba tare da sunaye ba",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi zaman tare da fasto, limami, rabbai ko shugaban hidimar addini a wurin, don a amince da ƙa'idojin tare.",
      "Kada ku taɓa amfani da roƙon addu'a na gaske, bayanan gudummawa ko bayanan mambobi a atisaye; ku yi amfani da madadi.",
      "Ku zo da littafin addininku don masu koyo su duba duk wani nassi da AI ya kawo.",
      "Ku tunatar da jama'o'in da ba sa biyan haraji game da dokokin harkokin siyasa a IRS Publication 1828.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
