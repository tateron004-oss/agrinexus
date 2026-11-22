"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-afcfta-cross-border-trade.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const AFCFTA = { name: "Sakatariyar AfCFTA: Game da AfCFTA (ƙasashe 55 na AU, kasuwanci tun 1 ga Janairu 2021, Sakatariya a Accra)", url: "https://au-afcfta.org/about/" };
const GTI = { name: "Sakatariyar AfCFTA: Shirin Kasuwanci mai Jagora (Guided Trade Initiative, an ƙaddamar 7 ga Oktoba 2022)", url: "https://au-afcfta.org/operational-instruments/guided-trade-initiative/" };
const ROO = { name: "Sakatariyar AfCFTA: Ƙa'idodin Asalin Kaya (Rules of Origin: Annex 2 da littafin jagorarsu)", url: "https://au-afcfta.org/operational-instruments/rules-of-origin/" };
const NTB = { name: "AfCFTA: Tsarin kai rahoto, bibiya da kawar da shingayen kasuwanci ban da haraji (NTB)", url: "https://www.tradebarriers.africa/" };
const PAPSS = { name: "Tsarin Biyan Kuɗi da Daidaitawa na Afirka (PAPSS)", url: "https://papss.com/" };
const ETLS = { name: "Shirin Sauƙaƙa Kasuwanci na ECOWAS (ETLS), Hukumar ECOWAS", url: "https://etls.ecowas.int/" };
const COMESA = { name: "COMESA: Kasuwanci da Kwastam (har da Tsarin Kasuwanci Mai Sauƙi na ƙananan 'yan kasuwa)", url: "https://www.comesa.int/trade-customs-division-2/" };

module.exports = {
  id: "afr-afcfta-cross-border-trade-ha",
  lang: "ha",
  translationOf: "afr-afcfta-cross-border-trade",
  category: "Africa: Life and Work",
  name: "Sayarwa Ƙetare Iyaka: Ƙananan 'Yan Kasuwa da AfCFTA",
  skills: "Bayanin AfCFTA da shirye-shiryen kasuwanci na yanki, Shirya takardu don ƙetare iyaka ta hanyar hukuma, Lissafin kuɗin kaya da kuɗaɗe biyu, Karɓar kuɗi lafiya daga wata ƙasa, Kai rahoton kuɗin da ba na hukuma ba da shingayen kasuwanci",
  outcome: "tsara sayarwa ƙetare iyaka wadda ta halatta, lafiya kuma mai riba: duba ƙa'idodin da suka shafi kayanku, shirya takardun da suka dace, lissafa cikakken kuɗi da farashi a kuɗaɗen ƙasashen biyu, zaɓar hanyar karɓar kuɗi lafiya, da sanin abin da za ku yi idan wani ya nemi kuɗi ba bisa hukuma ba.",
  about: [
    "Wannan kwas na ƙananan 'yan kasuwa ne, matan kasuwa, masu sana'ar hannu da ƙananan masana'antu a faɗin Afirka da ke sayarwa, ko suke son sayarwa, a ƙasa maƙwabciya: man kaɗe daga Tamale zuwa Ouagadougou, yadi daga Lagos zuwa Cotonou, takalma daga Nairobi zuwa Kampala, ko kayan kwalliya daga Dakar zuwa Bamako.",
    "Babi na 1 yana bayanin Yankin Kasuwanci Maras Shinge na Nahiyar Afirka (AfCFTA) da shirye-shiryen yanki da suke taimakon ƙananan 'yan kasuwa tun yanzu, da takardun da kuke buƙata a hanyar ƙetare iyaka ta hukuma. Babi na 2 game da kuɗi ne: cikakken kuɗin kaya, karɓar kuɗi lafiya, da abin da za ku yi game da kuɗin da ba na hukuma ba da jinkiri.",
    "Haraji, kuɗaɗe, fom da iyakoki sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa. Wannan kwas ba ya ba da adadin haraji ko kuɗaɗe. Yana gaya muku ofishin da za ku tambaya, ku kuma ku duba kafin ku yi tafiya. Duk lambobin kuɗi misali ne kawai. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki. Akwai ƙananan tambayoyi bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin kasuwanci ƙetare iyaka mai shafi ɗaya don kaya ɗaya da hanya ɗaya (naku, ko misali kamar man kaɗe daga Tamale, Ghana, zuwa Ouagadougou, Burkina Faso): kayan da hanyar ƙetare iyaka ta hukuma, ƙa'idodin da kuka duba da inda kuka duba su, jerin takardun da za ku ɗauka, cikakken kuɗi da farashin sayarwarku a kuɗaɗen ƙasashen biyu, yadda za a biya ku da yadda za ku kiyaye kanku daga zamba, da abin da za ku yi da wanda za ku kai wa rahoto idan wani ya nemi kuɗi ba bisa hukuma ba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan 'yan kasuwa, matan kasuwa, masu sana'ar hannu da ƙananan masana'antu a garuruwa da yankunan iyaka a faɗin Afirka (Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Burkina Faso, Kamaru da sauransu) da ke sayarwa ko suke son sayarwa a ƙasa maƙwabciya.",
    startingPoint: "Da yawa sun riga sun yi kasuwanci ƙetare iyaka, sau da yawa ba bisa tsari ba, suna ɗaukar kaya ta hanyoyin ƙetarewa ko suna amfani da masu jigilar kaya. Kaɗan ne suka san AfCFTA ko shirin yankinsu, waɗanne takardu ke ba su ragin haraji, yadda ake lissafin kuɗin kaya da kuɗaɗe biyu, ko inda ake kai rahoton kuɗin da ba na hukuma ba.",
    gap: "'Yan kasuwa da ba sa bin tsari sau da yawa suna biyan kuɗin da ba na hukuma ba, suna rasa kaya a iyaka, suna sayarwa da asara bayan kuɗin canji da na jigila, kuma suna faɗawa tarkon zambar biyan kuɗi. Sanin ƙa'idodi, ɗaukar takardun da suka dace, lissafi daidai da kai rahoton shingaye suna ba su damar yin kasuwanci bisa doka, su riƙe ƙarin riba, kuma su bunƙasa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar kasuwanci",
      "Na'urori: wayar Android mai sauƙi da data mai tsada; na'urar lissafi da littafin rubutu",
      "Ƙa'idodi, haraji, kuɗaɗe da iyakoki sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa: masu koyo suna dubawa a ofisoshin kwastam da na kasuwanci; kwas ɗin ba ya ba da adadin haraji ko kuɗaɗe",
      "Tsaron kuɗi: babu raba lambar PIN ko kalmar sirri; babu shawarar zuba jari",
      "An kuma fassara kwas ɗin zuwa Faransanci da Larabci, don haka misalan sun haɗa da 'yan kasuwa masu jin Faransanci da na Arewacin Afirka"
    ],
    prerequisites: "Karatu na asali da amfani da waya. Kwas ɗin \"Using Mobile Money Safely\" (Amfani da Kuɗin Waya Lafiya) da \"Registering and Running a Small Business in Africa\" (Yin Rajista da Gudanar da Ƙaramin Kasuwanci a Afirka) suna taimakawa, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da kayanku da ƙasar da kuke son sayarwa a ciki", action: "bayyana abin da AfCFTA da shirin kasuwanci na yankinku za su iya yi wa ƙaramin ɗan kasuwa, da ambaton ofisoshin da za ku duba ƙa'idodin yanzu a wurinsu", standard: "kuna ambaton aƙalla ofisoshi biyu ko shafukan intanet na hukuma biyu" },
    { id: "O2", condition: "Kafin ku ɗauki kaya ta hanyar ƙetare iyaka ta hukuma", action: "jera takardu da matakan da kayanku ke buƙata, kamar rasit, takardar kuɗi (invoice), takardar bayyana kaya ga kwastam da takardar shaidar asalin kaya", standard: "an tabbatar da kowace takarda a jerin a wurin kwastam ko teburin bayanin kasuwanci" },
    { id: "O3", condition: "Idan kuna da kuɗaɗen kaya na kaso ɗaya da farashin canjin kuɗi", action: "lissafa cikakken kuɗin kowane abu da farashin sayarwa a kuɗaɗen ƙasashen biyu", standard: "tare da kowane kuɗi da riba, kuma lissafin ya yi daidai" },
    { id: "O4", condition: "Idan mai saye a wata ƙasa yana biyan ku", action: "zaɓar hanyar karɓar kuɗin lafiya da gane alamun gargaɗin zambar biyan kuɗi", standard: "ba tare da raba lambar PIN ko aika kaya kafin a tabbatar da kuɗin ba" },
    { id: "O5", condition: "Idan wani a iyaka ko kusa da ita ya nemi kuɗi ba bisa hukuma ba ko ya riƙe kayanku", action: "bayyana matakai masu aminci da za ku ɗauka da kai rahoton matsalar a matsayin shingen kasuwanci ban da haraji (NTB)", standard: "kuna ambaton hanyar kai rahoto ta hukuma da bayanan da za ku rubuta" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ƙa'idodi da takardu",
      lessons: [
        {
          title: "Abin da AfCFTA ke nufi ga ƙaramin ɗan kasuwa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Bayyana da kalmominku mene ne AfCFTA da yadda zai iya taimakon kasuwancinku.",
          text: [
            "Yankin Kasuwanci Maras Shinge na Nahiyar Afirka (AfCFTA) yarjejeniya ce tsakanin ƙasashe 55 na Tarayyar Afirka (AU) don yin babbar kasuwa ɗaya ta kusan mutane biliyan 1.3. Kasuwanci a ƙarƙashinsa ya fara ranar 1 ga Janairu 2021. Sakatariyarsa tana Accra, Ghana.",
            "Babban ra'ayin shi ne: a hankali, ƙasashen da suka shiga za su rage ko cire harajin shigo da kaya kan kayan da aka yi a sauran ƙasashe mambobi, kuma su yi aiki don cire sauran shingaye, kamar dogon jinkiri da ƙarin takardu. Don samun ragin harajin, dole ne kayanku su \"fito\" daga ƙasa mamba bisa ƙa'idodin asalin kaya. Kayan da aka saya daga wajen Afirka kawai aka sake sayarwa ba sa cancanta.",
            "Ba kowace ƙasa ce ke aiwatar da shi ta hanya ɗaya ko da sauri ɗaya ba, kuma ba kowane kaya ne ya shiga ciki tukuna ba. Shirin Kasuwanci mai Jagora (Guided Trade Initiative), wanda aka ƙaddamar ranar 7 ga Oktoba 2022, ya fara kasuwanci na gaske bisa ƙa'idodin AfCFTA a wasu ƙasashe. Don haka kafin ku dogara da ragin haraji, ku duba a hukumar kwastam ɗinku, ma'aikatar kasuwanci ko ƙungiyar 'yan kasuwa (chamber of commerce), da shafin intanet na AfCFTA.",
            "Ko da AfCFTA bai fara aiki ga kayanku ba tukuna, shirye-shiryen yanki za su iya taimakon ku tun yanzu. Wannan shi ne darasi na gaba."
          ],
          words: [["AfCFTA", "Yankin Kasuwanci Maras Shinge na Nahiyar Afirka: yarjejeniya don mayar da Afirka babbar kasuwa ɗaya mai ƙarancin haraji da shingaye."], ["Harajin shigo da kaya (tariff)", "harajin da ƙasa ke karɓa kan kayan da suka shigo daga wata ƙasa."], ["Ƙa'idodin asalin kaya (rules of origin)", "ƙa'idodin da ke yanke wace ƙasa kaya suka \"fito\", don su sami ragin haraji."]],
          slides: [
            { title: "Mene ne AfCFTA", bullets: ["Ƙasashe 55 na Tarayyar Afirka, babbar kasuwa ɗaya", "Kusan mutane biliyan 1.3", "Kasuwanci ya fara 1 ga Janairu 2021; Sakatariya a Accra"] },
            { title: "Abin da zai iya yi muku", bullets: ["Rage ko cire harajin shigo da kaya kan kayan ƙasashe mambobi", "Rage jinkiri da ƙarin takardu a hankali", "Manyan kasuwanni a maƙwabtanku"] },
            { title: "Abin da ya kamata ku sani", bullets: ["Dole kaya su cika ƙa'idodin asalin kaya", "Ƙasashe suna aiwatar da shi da sauri daban-daban", "Ba kowane kaya ne ya shiga ciki tukuna ba"] },
            { title: "Ku duba kafin ku dogara da shi", bullets: ["Hukumar kwastam ɗinku", "Ma'aikatar kasuwanci ko ƙungiyar 'yan kasuwa", "au-afcfta.org"] }
          ],
          sources: [AFCFTA, GTI, ROO],
          tryIt: "Ku rubuta kaya ɗaya da kuke sayarwa ko za ku iya sayarwa, da ƙasa maƙwabciya ɗaya da za ku iya sayar musu. Sannan ku rubuta wurare biyu da za ku duba ko AfCFTA yana rage harajin wannan kaya.",
          youCanNow: "faɗin mene ne AfCFTA, yadda zai iya taimakon ƙaramin ɗan kasuwa, da inda za ku duba ko ya shafi kayanku.",
          quickCheck: [
            { objective: "O1", q: "Mene ne babban abin da AfCFTA ke son yi wa 'yan kasuwa?", options: ["Ƙayyade farashin dukkan kaya a Afirka", "Rage haraji da shingaye kan kayan da aka yi a ƙasashe mambobi", "Yin kuɗi ɗaya ga dukkan Afirka", "Dakatar da dukkan bincike a iyaka"], answer: 1, why: "AfCFTA yana son rage haraji da shingaye kan kayan da suka fito daga ƙasashe mambobi; ba ya ƙayyade farashi, ba ya yin kuɗi ɗaya, kuma ba ya dakatar da bincike." },
            { objective: "O1", q: "Wani ɗan kasuwa yana sayen murfin waya da aka yi a wajen Afirka kuma yana son ya sake sayar da su a maƙwabta ta AfCFTA. Mene ne gaskiya?", options: ["Koyaushe ba zai biya haraji ba", "AfCFTA abinci kawai ya shafa", "Wataƙila ba zai cancanta ba, domin ba a yi kayan a ƙasa mamba ba", "Ba ya buƙatar wata takarda ko kaɗan"], answer: 2, why: "Bisa ƙa'idodin asalin kaya, kayan da aka saya daga wajen Afirka kawai aka sake sayarwa ba su fito daga ƙasa mamba ba." }
          ]
        },
        {
          title: "Shirye-shiryen yanki da ke taimakon ƙananan 'yan kasuwa tun yanzu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nemo shirin kasuwanci na yanki don hanyarku da teburi ko ofishin da ke bayanin sa.",
          text: [
            "Kafin AfCFTA, ƙungiyoyin tattalin arziki na yankunan Afirka sun riga sun sauƙaƙa kasuwanci. A Yammacin Afirka, Shirin Sauƙaƙa Kasuwanci na ECOWAS (ETLS) yana bar kayan da aka amince da su daga ƙasashen ECOWAS su wuce tsakanin ƙasashe mambobi da ragin haraji ko ba haraji. Senegal, Mali, Côte d'Ivoire, Ghana da Najeriya duk mambobin ECOWAS ne.",
            "A Gabashi da Kudancin Afirka, Ƙungiyar Ƙasashen Gabashin Afirka (EAC) da COMESA suna da Tsarin Kasuwanci Mai Sauƙi (Simplified Trade Regime) na ƙananan 'yan kasuwa. Suna bar ƙananan kaya na wasu kayan da ke cikin jeri su wuce da takardu masu sauƙi, kamar takardar shaidar asalin kaya mai sauƙi. Wasu wuraren iyaka suna da teburin bayanin kasuwanci inda jami'ai ke bayanin ƙa'idodi ga ƙananan 'yan kasuwa, kyauta.",
            "Iyakar darajar kaya, jerin kayan da fom duk kowane shiri ne ke ƙayyade su, kuma suna iya canjawa. Ku tambayi ofishin kwastam a wurin ƙetarewarku, teburin bayanin kasuwanci, ko ƙungiyar 'yan kasuwar ƙetare iyaka. Ku rubuta abin da suka gaya muku, tare da kwanan wata da sunan jami'in.",
            "Tsakiyar Afirka (misali Kamaru) da Arewacin Afirka (misali Morocco, Masar da Tunisia) ma suna da nasu yarjejeniyoyin yanki. Ku tambayi hukumar kwastam ɗinku waɗanne ne suka shafi hanyarku."
          ],
          steps: ["Ku rubuta hanyarku: daga wace ƙasa, ta wace hanyar ƙetare iyaka, zuwa wace ƙasa.", "Ku nemo ƙungiyar yanki da ƙasashen biyu suke ciki (misali ECOWAS, EAC ko COMESA).", "Ku tambayi ofishin kwastam, teburin bayanin kasuwanci ko ƙungiyar 'yan kasuwa wane shiri kayanku za su iya amfani da shi.", "Ku tambaya: waɗanne kaya ne suka cancanta, wace iyakar daraja ce, kuma wane fom ko takardar shaida kuke buƙata.", "Ku rubuta amsoshin tare da kwanan wata da sunan jami'in."],
          words: [["Ƙungiyar tattalin arziki ta yanki", "ƙungiyar ƙasashe maƙwabta da ke aiki tare kan kasuwanci, misali ECOWAS, EAC ko COMESA."], ["Tsarin Kasuwanci Mai Sauƙi (Simplified Trade Regime)", "tsarin EAC ko COMESA da ke bar ƙananan 'yan kasuwa su wuce da ƙananan kaya na kayan da ke cikin jeri da takardu masu sauƙi."], ["Kaya na kaso ɗaya (consignment)", "kaya guda ɗaya ko rukuni guda da kuke aikawa ko ɗauka."]],
          slides: [
            { title: "Shirye-shiryen yanki suna taimako yanzu", bullets: ["Yammacin Afirka: Shirin Sauƙaƙa Kasuwanci na ECOWAS (ETLS)", "Gabashi da Kudancin Afirka: Tsarin Kasuwanci Mai Sauƙi na EAC da COMESA", "Tsakiya da Arewacin Afirka: nasu yarjejeniyoyin"] },
            { title: "Ƙa'idodi masu sauƙi ga ƙananan 'yan kasuwa", bullets: ["Ƙananan kaya na kayan da ke cikin jeri", "Takardu masu sauƙi, kamar takardar shaidar asali mai sauƙi", "Teburin bayanin kasuwanci a wasu wuraren iyaka"] },
            { title: "Ku tambaya, ku rubuta", bullets: ["Waɗanne kaya ne suka cancanta? Wace iyakar daraja?", "Wane fom ko takardar shaida?", "Ku rubuta kwanan wata da sunan jami'in"] }
          ],
          sources: [ETLS, COMESA],
          tryIt: "Don hanyarku daga Darasi na 1, ku rubuta ƙungiyar yanki da ƙasashen biyu suke ciki, da tambayoyi uku da za ku yi a ofishin kwastam ko teburin bayanin kasuwanci.",
          youCanNow: "nemo shirin yanki na hanyarku da yin tambayoyin da suka dace a ofishin da ya dace.",
          quickCheck: [
            { objective: "O1", q: "Wane shiri ne ya fi yiwuwa ya shafi ɗan kasuwa da ke kai man kaɗe daga Ghana zuwa Burkina Faso?", options: ["Tsarin Kasuwanci Mai Sauƙi na COMESA", "Ƙungiyar Kwastam ta EAC", "Babu wani shiri ko kaɗan", "Shirin Sauƙaƙa Kasuwanci na ECOWAS"], answer: 3, why: "Ghana da Burkina Faso duk suna yankin ECOWAS na Yammacin Afirka, don haka ETLS ne shirin da za a tambaya game da shi." },
            { objective: "O1", q: "Kuna son sanin iyakar darajar takardar shaida mai sauƙi a hanyarku. Me za ku yi?", options: ["Ku tambayi ofishin kwastam ko teburin bayanin kasuwanci a wurin ƙetarewa ku rubuta amsar", "Ku yi hasashe, domin iri ɗaya ne a ko'ina", "Ku tambayi direban mota", "Ku yi amfani da adadin da abokinku ya samu a wurin ƙetarewarsa a bara"], answer: 0, why: "Iyakoki sun bambanta daga shiri zuwa shiri kuma suna canjawa, don haka ofishin kwastam ko teburin bayanin kasuwanci ne wurin tambaya." }
          ]
        },
        {
          title: "Takardun da kuke ɗauka a hanyar ƙetare iyaka ta hukuma",
          objectives: ["O2"],
          minutes: 5,
          goal: "Jera takardu da matakan ɗaukar kayanku ta hanyar ƙetare iyaka ta hukuma.",
          text: [
            "Amfani da hanyar ƙetare iyaka ta hukuma yana kare ku. Ana rubuta kayanku, kuna iya neman ragin haraji a ƙarƙashin shirye-shiryen, kuma kuna da shaida idan wani abu ya lalace. Kayan da aka yi fasa-ƙwaurinsu ta hanyoyin da ba na hukuma ba za a iya ƙwace su, kuma ba ku da kariya.",
            "Takardun da aka saba buƙata sun haɗa da: katin shaidarku ko fasfo; rasit ko takardar kuɗi (invoice) da ke nuna abin da kuka saya ko kuka yi da darajarsa; jerin kayanku (packing list); takardar bayyana kaya ga kwastam (customs declaration), wadda jami'i ko wakilin share kaya (clearing agent) ke taimakon ku cike ta; da takardar shaidar asalin kaya idan kuna son ragin haraji. Abinci, tsirrai, dabbobi, magunguna da kayan kwalliya suna iya buƙatar takardar shaidar lafiya, ta tsirrai (phytosanitary) ko ta amincewa da kaya.",
            "Wasu kaya an hana su ko an iyakance su. Ku tambaya kafin ku sayi kaya. Wakilin share kaya zai iya taimakawa da manyan kaya, amma koyaushe ku karɓi rasit na kowane kuɗin hukuma da kuka biya, kuma ku ajiye kwafin dukkan takardu a wayarku da kuma a takarda.",
            "Misali: Awa tana sayar da sabulun hannu daga Dakar zuwa Bamako. Tana tambayar ofishin kwastam takardun da take buƙata, tana samun takardar kuɗinta da takardar shaidar asalin kaya, kuma tana ajiye hoton kowace takarda. A iyaka tana biyan abin da ke kan rasit na hukuma kawai."
          ],
          steps: ["Ku tambayi kwastam waɗanne takardu kayanku ke buƙata, da ko akwai wanda aka iyakance.", "Ku sami rasit ko takardar kuɗi na kayanku, ku yi jerin kaya.", "Ku sami takardar shaidar asalin kaya idan kuna son ragin haraji a ƙarƙashin wani shiri.", "Ku tambaya game da takardun shaidar lafiya, ta tsirrai ko ta kaya don abinci, tsirrai, dabbobi da kayan kwalliya.", "Ku yi amfani da hanyar ƙetare iyaka ta hukuma, ku cike takardar bayyana kaya ga kwastam, kuma ku ajiye rasit na kowane kuɗi.", "Ku ajiye kwafin kowace takarda a takarda da kuma hoto a wayarku."],
          words: [["Takardar bayyana kaya ga kwastam (customs declaration)", "fom da ke gaya wa kwastam kayan da kuke ɗauke da su da darajarsu."], ["Takardar shaidar asalin kaya (certificate of origin)", "takardar da ke nuna ƙasar da kayanku suka fito, don ku sami ragin haraji."], ["Wakilin share kaya (clearing agent)", "mutum ko kamfani mai lasisi da ke taimakon 'yan kasuwa cike takardun kwastam, da kuɗi."], ["Takardar shaidar lafiyar tsirrai (phytosanitary certificate)", "takardar shaidar lafiyar tsirrai, iri, hatsi, 'ya'yan itace da kayan lambu."]],
          slides: [
            { title: "Me yasa za ku bi hanyar hukuma", bullets: ["Ana rubuta kaya; kuna iya neman ragin haraji", "Shaida idan wani abu ya lalace", "Kayan fasa-ƙwauri za a iya ƙwace su"] },
            { title: "Takardun da aka saba buƙata", bullets: ["Katin shaida ko fasfo; rasit ko takardar kuɗi", "Jerin kaya; takardar bayyana kaya ga kwastam", "Takardar shaidar asalin kaya don ragin haraji"] },
            { title: "Ƙarin takardu ga wasu kaya", bullets: ["Abinci, tsirrai, dabbobi: takardar shaidar lafiya ko ta tsirrai", "Kayan kwalliya da magunguna: takardar amincewa da kaya", "Wasu kaya an iyakance su: ku tambaya kafin ku sayi kaya"] },
            { title: "Ku kare kanku", bullets: ["Rasit na kowane kuɗin hukuma", "Kwafi a takarda da hotuna a wayarku", "Wakilin share kaya don manyan kaya"] }
          ],
          sources: [ROO, ETLS],
          tryIt: "Ku yi jerin takardu don kayanku da hanyarku: kowace takarda da kuke tsammani kuna buƙata, da akwati da za ku yi alama bayan kwastam ko teburin bayanin kasuwanci ya tabbatar da ita.",
          youCanNow: "jera takardu da matakan da kuke buƙata don ɗaukar kayanku ta hanyar ƙetare iyaka ta hukuma, da ajiye shaidar kowane kuɗi da kuka biya.",
          quickCheck: [
            { objective: "O2", q: "Wace takarda ce ke taimakon ku neman ragin haraji a ƙarƙashin shirin kasuwanci?", options: ["Tikitin mota", "Takardar shaidar asalin kaya", "Rasit na waya", "Takardar shaidar makaranta"], answer: 1, why: "Takardar shaidar asalin kaya tana nuna cewa kayan sun fito daga ƙasa mamba, kuma a kan haka ne ragin haraji ya dogara." },
            { objective: "O2", q: "Kun biya kuɗi a kwastam. Me ya kamata ku karɓa?", options: ["Babu komai; kuɗaɗe koyaushe ba na hukuma ba ne", "Gaisuwa ta hannu", "Rasit na hukuma, wanda za ku ajiye", "Alƙawarin sake ganin ku a gaba"], answer: 2, why: "Rasit na hukuma shaida ce ta kuɗin gaske kuma yana kare ku idan wani abu ya lalace." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ƙa'idodi da takardu",
        questions: [
          { objective: "O1", q: "A ina ya kamata ku duba ko AfCFTA yana rage harajin kayanku?", options: ["Wani rubutu a kafofin sada zumunta", "Ɗan uwan mai saye", "Hukumar kwastam ɗinku da shafin intanet na AfCFTA", "Kowane ɗan kasuwa a kasuwa"], answer: 2, why: "Kwastam da Sakatariyar AfCFTA ne ke ba da amsar hukuma ta yanzu." },
          { objective: "O1", q: "Wata 'yar kasuwa tana kai takalma daga Nairobi zuwa Kampala. Wane shiri mai sauƙi ya kamata ta tambaya game da shi?", options: ["Shirin Sauƙaƙa Kasuwanci na ECOWAS", "Babu wani a Gabashin Afirka", "Wani shiri na Turai", "Tsarin Kasuwanci Mai Sauƙi na EAC ko COMESA"], answer: 3, why: "Kenya da Uganda suna Gabashin Afirka, inda EAC da COMESA suke da tsare-tsare masu sauƙi ga ƙananan 'yan kasuwa." },
          { objective: "O2", q: "Me yasa hanyar ƙetare iyaka ta hukuma ta fi hanyar daji?", options: ["Ana rubuta kayanku kuma kuna iya neman ragin haraji da kariya", "Koyaushe ta fi sauri", "Babu wanda ke duba komai", "Koyaushe kyauta ce"], answer: 0, why: "Hanyoyin hukuma suna rubuta kaya, suna bar ku amfani da shirye-shiryen kasuwanci, kuma suna ba ku shaida da kariya." },
          { objective: "O2", q: "Kofi zai kai busasshen kifi zuwa Togo. Wace ƙarin takarda zai iya buƙata?", options: ["Lasisin tuƙa babbar motar da ba shi ke tuƙa ta ba", "Takardar shaidar lafiya don abinci", "Rahoton makaranta", "Babu ƙarin komai don abinci"], answer: 1, why: "Kayan abinci, na dabbobi da na tsirrai sau da yawa suna buƙatar takardar shaidar lafiya ko ta tsirrai; ya kamata ya tambayi kwastam." },
          { objective: "O2", q: "Mene ne hanya mafi kyau ta ajiye takardunku?", options: ["A kanku kawai (a tunani)", "Ku ba mai jigilar kaya", "Ku jefar da su bayan iyaka", "A takarda da kuma hotuna a wayarku"], answer: 3, why: "Ajiye kwafi biyu yana nufin har yanzu kuna da shaida idan ɗaya ya ɓace." }
        ]
      }
    },
    {
      name: "Babi na 2: Kuɗi, biyan kuɗi da matsaloli a iyaka",
      lessons: [
        {
          title: "Lissafin kuɗin kaya ƙetare iyaka da kuɗaɗe biyu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lissafa cikakken kuɗin kowane abu da farashin sayarwa a kuɗaɗen ƙasashen biyu.",
          text: [
            "'Yan kasuwa da yawa suna asara ƙetare iyaka domin kuɗin kayan kawai suke lissafawa. Ku lissafa komai: kayan, ƙunshewa, jigila zuwa iyaka da gaba, lodi, haraji da kuɗaɗen hukuma (da kuka tabbatar a kwastam), wakilin share kaya, ajiya, wayarku da data, abincinku da masaukinku a tafiyar, da ɗan ƙari don asara.",
            "Ku haɗa dukkan kuɗaɗen ku raba da adadin abubuwan da za ku iya sayarwa da gaske. Wannan shi ne kuɗin kowane abu. Ku ƙara ribarku don samun farashin sayarwa. Sannan ku canja shi zuwa kuɗin mai saye ta amfani da farashin canji na yau, kuma ku duba farashin irin wannan kaya a wannan kasuwa.",
            "Misali (lambobin misali ne kawai): Ama tana saye da ƙunshe kwanon man kaɗe 100 a Tamale akan GHS 2,000 gaba ɗaya. Jigila, lodi da masauki sun ci GHS 600. Kuɗaɗen hukuma da ta tabbatar a kwastam: GHS 200. Jimla GHS 2,800, wato GHS 28 kowane kwano. Ta ƙara ribar GHS 7: GHS 35. Idan farashin canji na ranar ya kasance 1 GHS = 40 XOF, wannan 1,400 XOF ne kowane kwano. Ta duba cewa shaguna a Ouagadougou suna sayar da irin waɗannan kwanoni kusan a wannan farashi.",
            "Farashin canjin kuɗi yana motsawa kowace rana. Ku duba farashin a ranar da kuke sayarwa da ranar da kuke canja kuɗi, kuma ku yarda da mai saye a wane kuɗi ne farashin yake."
          ],
          steps: ["Ku jera kowane kuɗin kayan, daga saye har zuwa sayarwa.", "Ku haɗa su don samun jimlar kuɗi.", "Ku raba da adadin abubuwan da za ku iya sayarwa da gaske: kuɗin kowane abu.", "Ku ƙara ribarku: farashin sayarwa a kuɗinku.", "Ku canja shi zuwa kuɗin mai saye a farashin canji na yau, ku kwatanta da farashin kasuwar can."],
          words: [["Farashin canjin kuɗi (exchange rate)", "adadin wani kuɗi da kuke samu a kan raka'a ɗaya ta wani kuɗi, misali XOF nawa a kan 1 GHS."], ["Kuɗin kowane abu", "jimlar kuɗin kaya an raba da adadin abubuwan da za ku iya sayarwa."], ["Cikakken kuɗin kaya a kasuwa (landed cost)", "dukkan kuɗin kaya idan sun isa kasuwar mai saye, har da jigila da haraji."]],
          slides: [
            { title: "Ku lissafa kowane kuɗi", bullets: ["Kaya, ƙunshewa, jigila, lodi", "Haraji da kuɗaɗen hukuma, wakili, ajiya", "Waya, abinci, masauki, da ɗan ƙari don asara"] },
            { title: "Daga kuɗi zuwa farashi", bullets: ["Jimlar kuɗi / abubuwan da za ku iya sayarwa = kuɗin kowane abu", "Kuɗin kowane abu + riba = farashin sayarwa", "Sannan ku canja shi zuwa kuɗin mai saye"] },
            { title: "Misali (lambobin misali ne kawai)", bullets: ["Kwanoni 100: GHS 2,800 gaba ɗaya = GHS 28 kowanne", "Ƙara ribar GHS 7 = GHS 35", "A 1 GHS = 40 XOF: 1,400 XOF kowane kwano"] },
            { title: "Ku kula da farashin canji", bullets: ["Farashin canji yana canjawa kowace rana", "Ku duba a ranar da kuke sayarwa da canja kuɗi", "Ku yarda da mai saye a wane kuɗi"] }
          ],
          tryIt: "Ku lissafa kuɗin kaya na kaso ɗaya na kayanku don hanyarku: ku jera kowane kuɗi, ku nemo kuɗin kowane abu, ku ƙara ribarku, kuma ku rubuta farashin a kuɗaɗen biyu ta amfani da farashin canji na yau.",
          youCanNow: "lissafa cikakken kuɗin kowane abu na kayan ƙetare iyaka da farashin sayarwa a kuɗaɗen ƙasashen biyu.",
          quickCheck: [
            { objective: "O3", q: "Kaya na buhu 50 sun ci NGN 250,000 gaba ɗaya, har da jigila da kuɗaɗe. Nawa ne kuɗin kowane buhu?", options: ["NGN 500", "NGN 50,000", "NGN 2,500", "NGN 5,000"], answer: 3, why: "250,000 an raba da buhu 50 shi ne 5,000 kowane buhu." },
            { objective: "O3", q: "Wane kuɗi ne 'yan kasuwa suka fi mantawa da shi?", options: ["Masaukinsu, abincinsu da asara a tafiyar", "Farashin kayan", "Farashin sayarwa", "Adadin abubuwan"], answer: 0, why: "Kuɗaɗen tafiya kamar masauki, abinci da asara suna da sauƙin mantawa, kuma suna cinye riba." }
          ]
        },
        {
          title: "Karɓar kuɗi lafiya ƙetare iyaka",
          objectives: ["O4"],
          minutes: 5,
          goal: "Zaɓar hanyar karɓar kuɗi lafiya daga mai saye a wata ƙasa da gane zambar biyan kuɗi.",
          text: [
            "Tsabar kuɗi a iyaka yana da haɗari: ana iya yi muku fashi, kuma canja kuɗi a titi yana iya ba ku mummunan farashi ko kuɗin jabu. Hanyoyi mafi aminci sun haɗa da tura kuɗi ta banki, sabis ɗin kuɗin waya (mobile money) da ke aikawa ƙetare iyaka a hanyarku, da tsarin biyan kuɗi kamar PAPSS (Tsarin Biyan Kuɗi da Daidaitawa na Afirka), wanda ke bar mai biya a wata ƙasar Afirka ya biya da kuɗin ƙasarsa, mai karɓa kuma ya sami kuɗin ƙasarsa, ta bankuna da kamfanonin biyan kuɗi da suka shiga ciki. Ku tambayi bankinku ko kamfanin kuɗin wayarku abin da ke aiki a hanyarku da nawa yake ci.",
            "Don sabon mai saye, ku nemi kuɗin gaba (deposit) kafin ku aika, ko cikakken kuɗi kafin ku miƙa kayan. Ku tabbatar cewa kuɗin ya shigo asusunku da gaske, ta hanyar duba ma'auni (balance) da kanku, ba ta amincewa da saƙon da mai saye ya turo muku ba.",
            "Alamun gargaɗin zamba: mai saye da ke turo saƙon \"an karɓi kuɗi\" na ƙarya ko hoton allo (screenshot); wanda ya ce ya aiko da yawa bisa kuskure kuma yana neman ku mayar da ragowar; duk wanda ya nemi lambar PIN ɗinku, kalmar sirri ko code da aka turo wayarku; da mai saye da ke gaggauta ku ku saki kaya kafin ku duba. Banki ko kamfanin kuɗin waya na gaske ba ya taɓa neman PIN ɗinku."
          ],
          steps: ["Ku yarda kan farashi, kuɗi da hanyar biya a rubuce.", "Ku nemi kuɗin gaba ko cikakken kuɗi daga sabon mai saye tukuna.", "Ku duba ma'auninku da kanku don tabbatar da kuɗin ya shigo.", "Sai a lokacin ku saki kayan, kuma ku ba da rasit.", "Kada ku taɓa raba PIN, kalmar sirri ko code da aka turo wayarku."],
          words: [["PAPSS", "Tsarin Biyan Kuɗi da Daidaitawa na Afirka: yana bar a yi biyan kuɗi tsakanin ƙasashen Afirka da kuɗaɗen ƙasashensu, ta bankuna da kamfanonin biyan kuɗi da suka shiga ciki."], ["Kuɗin gaba (deposit)", "wani sashe na farashi da ake biya kafin ku aika kayan."], ["PIN", "lambar sirri ta katin bankinku ko asusun kuɗin wayarku. Kada ku taɓa raba ta."]],
          slides: [
            { title: "Mafi aminci fiye da tsabar kuɗi a iyaka", bullets: ["Tura kuɗi ta banki", "Kuɗin waya ƙetare iyaka a hanyarku", "PAPSS: biya da karɓa da kuɗaɗen ƙasashe ta bankuna"] },
            { title: "Ku karɓi kuɗi kafin ku miƙa kaya", bullets: ["Sabon mai saye: kuɗin gaba ko cikakken kuɗi tukuna", "Ku duba ma'auninku da kanku", "Sannan ku saki kayan ku ba da rasit"] },
            { title: "Alamun gargaɗin zamba", bullets: ["Saƙon \"an karɓi kuɗi\" ko hoton allo na ƙarya", "\"Na aiko da yawa, ku mayar\"", "Yana neman PIN ko code ɗinku; yana gaggauta ku"] },
            { title: "Ku tuna", bullets: ["Kamfani na gaske ba ya taɓa neman PIN ɗinku", "Kada ku taɓa raba code da aka turo wayarku"] }
          ],
          sources: [PAPSS],
          tryIt: "Ku rubuta ƙa'idar biyan kuɗi ta kasuwancinku a layi uku: wace hanya kuke karɓa, yaushe kuke sakin kaya, da yadda kuke tabbatar kuɗin ya shigo. Ku tambayi bankinku ko kamfanin kuɗin wayarku wane sabis na ƙetare iyaka ke aiki a hanyarku.",
          youCanNow: "zaɓar hanya mai aminci ta karɓar kuɗi daga mai saye a wata ƙasa da gane alamun zambar biyan kuɗi.",
          quickCheck: [
            { objective: "O4", q: "Sabon mai saye a Abidjan ya turo hoton allo da ke cewa ya biya. Me za ku yi kafin ku aika kaya?", options: ["Ku aika kayan nan take", "Ku duba ma'auninku don tabbatar da kuɗin ya shigo", "Ku nemi ya sake turo wani hoton allo", "Ku aika masa PIN ɗinku don ya duba"], answer: 1, why: "Hoton allo yana iya zama na ƙarya; ma'auninku kaɗai ne ke tabbatar da kuɗin ya shigo." },
            { objective: "O4", q: "Mai saye ya ce ya aiko da yawa kuma yana neman ku mayar da ragowar. Mene ne wannan mafi yiwuwa?", options: ["Mayar da kuɗi na yau da kullum", "Kuskuren banki da dole ku gyara da sauri", "Zamba da aka saba gani: ku duba ma'auninku ku yi magana da kamfaninku", "Haraji"], answer: 2, why: "\"Na aiko da yawa, ku mayar\" zamba ce sananniya; ku duba ma'auninku ku kira lambar hukuma ta kamfaninku." }
          ]
        },
        {
          title: "Kuɗin da ba na hukuma ba, jinkiri da tsarin kasuwancinku",
          objectives: ["O5"],
          minutes: 6,
          goal: "Bayyana matakai masu aminci idan aka nemi kuɗi ba bisa hukuma ba, da kai rahoton sa a matsayin shingen kasuwanci ban da haraji.",
          text: [
            "Shingen kasuwanci ban da haraji (NTB) shi ne duk wani abu ban da haraji da ke wahalar da kasuwanci: kuɗin da ba na hukuma ba a shingayen hanya, dogon jinkiri, takardun da ba sa cikin ƙa'idodi, ko riƙe kaya ba tare da dalili ba. AfCFTA yana da tsari a intanet, tradebarriers.africa, inda kowane ɗan kasuwa, har da 'yan kasuwa da ba sa bin tsari, mata da matasa, zai iya kai rahoton NTB. Rahotanni suna zuwa wakilan ƙasa (focal points) da Sakatariyar AfCFTA don a bibiye su.",
            "Idan wani ya nemi kuɗi ba tare da rasit ba: ku natsu ku yi ladabi, kuma ku sa lafiyarku a gaba. Ku nemi kuɗin hukuma da rasit. Ku nemi yin magana da babban jami'in da ke kula, ko da teburin bayanin kasuwanci. Kada ku yi gardama ta hanyar da za ta jefa ku cikin haɗari.",
            "Bayan haka, ku rubuta bayanan gaskiya: kwanan wata, lokaci, wuri, abin da aka nema, adadin kuɗin, da duk wani suna ko lambar alama (badge) da kuka gani. Ku kai rahoto a tradebarriers.africa (a intanet ko ta zaɓin wayar hannu), a layin ƙorafi na hukumar kwastam ɗinku, ko ta ƙungiyar 'yan kasuwarku. Matan kasuwa da ake cin zarafinsu za su iya neman tallafi daga ƙungiyarsu ko ƙungiyar matan kasuwa.",
            "Yanzu ku haɗa komai tare. Tsarin kasuwancinku na ƙetare iyaka yana da: kayan da hanyar ƙetarewa, ƙa'idodin da kuka duba, takardunku, kuɗinku da farashinku a kuɗaɗe biyu, yadda ake biyan ku, da abin da za ku yi game da kuɗin da ba na hukuma ba."
          ],
          steps: ["Ku natsu ku yi ladabi; lafiyarku ce a gaba.", "Ku nemi kuɗin hukuma da rasit, ko babban jami'in da ke kula ko teburin bayanin kasuwanci.", "Ku rubuta bayanan gaskiya: kwanan wata, lokaci, wuri, adadin kuɗi, suna ko lambar alama.", "Ku kai rahoto a tradebarriers.africa, a kwastam, ko ta ƙungiyar 'yan kasuwarku.", "Ku ƙara waɗannan matakai a tsarin kasuwancinku na ƙetare iyaka."],
          words: [["Shingen kasuwanci ban da haraji (NTB)", "duk wani abu ban da haraji da ke wahalar da kasuwanci, kamar kuɗin da ba na hukuma ba, dogon jinkiri ko ƙarin takardu."], ["Wakilin ƙasa (focal point)", "mutum ko ofishi a kowace ƙasa da ke bibiyar rahotannin NTB."]],
          slides: [
            { title: "Mene ne shingen kasuwanci ban da haraji?", bullets: ["Kuɗin da ba na hukuma ba a shingayen hanya ko iyaka", "Dogon jinkiri; takardun da ba sa cikin ƙa'idodi", "Riƙe kaya ba tare da dalili ba"] },
            { title: "Idan aka nemi kuɗi ba tare da rasit ba", bullets: ["Ku natsu ku yi ladabi: lafiya a gaba", "Ku nemi kuɗin hukuma da rasit", "Ku nemi babban jami'i ko teburin bayanin kasuwanci"] },
            { title: "Ku rubuta, sannan ku kai rahoto", bullets: ["Kwanan wata, lokaci, wuri, adadi, suna ko lambar alama", "tradebarriers.africa: a intanet ko ta waya", "Layin ƙorafi na kwastam ko ƙungiyar 'yan kasuwa"] },
            { title: "Tsarin kasuwancinku na ƙetare iyaka", bullets: ["Kaya, hanya, ƙa'idodin da aka duba; takardu", "Kuɗi da farashi a kuɗaɗe biyu", "Hanyar biya; abin da za ku yi game da kuɗin da ba na hukuma ba"] }
          ],
          sources: [NTB, AFCFTA],
          tryIt: "Ku rubuta tsarin kasuwancinku na ƙetare iyaka mai shafi ɗaya, kamar yadda aka bayyana a aikin ƙarshe. Ku ƙara bayanan da za ku rubuta da inda za ku kai rahoton kuɗin da ba na hukuma ba.",
          youCanNow: "magance kuɗin da ba na hukuma ba lafiya, kai rahoton sa a matsayin shingen kasuwanci ban da haraji, da rubuta cikakken tsarin kasuwanci na ƙetare iyaka.",
          quickCheck: [
            { objective: "O5", q: "A ina ƙaramin ɗan kasuwa zai iya kai rahoton kuɗin da ba na hukuma ba a iyakar ƙasashen Afirka?", options: ["tradebarriers.africa, kwastam ko ƙungiyar 'yan kasuwa", "A kafofin sada zumunta kawai", "Babu inda; ba za a iya kai rahoto ba", "Ga mutumin da ya nemi kuɗin"], answer: 0, why: "Tsarin NTB na AfCFTA, layukan ƙorafi na kwastam da ƙungiyoyin 'yan kasuwa su ne hanyoyin hukuma." },
            { objective: "O5", q: "Me ya kamata ku rubuta bayan an nemi kuɗi ba bisa hukuma ba?", options: ["Yadda kuka ji kawai", "Kwanan wata, lokaci, wuri, adadin kuɗi da duk wani suna ko lambar alama", "Babu komai; ku manta", "Farashin kayanku kawai"], answer: 1, why: "Bayanan gaskiya a sarari suna yin rahoton da za a iya bibiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kuɗi, biyan kuɗi da matsaloli",
        questions: [
          { objective: "O3", q: "Jimlar kuɗin kaya XAF 300,000 ne na abubuwa 60. Kun ƙara ribar XAF 1,000 kowane abu. Nawa ne farashin sayarwa?", options: ["XAF 6,000", "XAF 5,000", "XAF 1,000", "XAF 7,000"], answer: 0, why: "300,000 / 60 = 5,000 kuɗin kowane abu; da riba 1,000 = 6,000." },
          { objective: "O3", q: "Me yasa za ku duba farashin canji a ranar da kuke sayarwa?", options: ["Farashin canji ba ya canjawa", "Mai saye ne ke ƙayyade shi", "Farashin canji yana canjawa kowace rana kuma zai iya shafe ribarku", "Na bankuna ne kawai"], answer: 2, why: "Farashin canji yana motsawa kowace rana, don haka tsohon farashi zai iya mayar da riba asara." },
          { objective: "O4", q: "Wace buƙata ce ya kamata ta sa ku tsaya nan take?", options: ["\"Zan iya biya ta tura kuɗi a banki?\"", "\"Ku turo mini rasit.\"", "\"Nawa ne farashinku a XOF?\"", "\"Ku faɗa mini code ɗin da muka turo wayarku yanzu.\""], answer: 3, why: "Babu mai saye ko kamfani na gaske da ke buƙatar code ko PIN ɗinku; neman sa alamar zamba ce." },
          { objective: "O4", q: "Mene ne PAPSS?", options: ["Fom na kwastam", "Tsarin biyan kuɗi tsakanin ƙasashen Afirka da kuɗaɗen ƙasashensu ta bankuna da kamfanoni", "Wani nau'in wayar hannu", "Wurin iyaka"], answer: 1, why: "PAPSS yana bar mai biya ya biya da kuɗin ƙasarsa, mai karɓa kuma ya sami kuɗin ƙasarsa, ƙetare iyakokin Afirka." },
          { objective: "O5", q: "Wani jami'i ya nemi kuɗi ba tare da rasit ba. Mene ne mataki na farko mafi aminci?", options: ["Ku natsu, ku nemi kuɗin hukuma da rasit ko babban jami'in da ke kula", "Ku yi ihu ku ƙi motsawa", "Ku gudu ku ƙetare iyaka", "Ku biya ninki biyu don ya fi sauri"], answer: 0, why: "Natsuwa tana kiyaye lafiyarku, kuma neman rasit ko babban jami'i yana bin hanyar hukuma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sayarwa Ƙetare Iyaka: Ƙananan 'Yan Kasuwa da AfCFTA",
    questions: [
      { objective: "O1", q: "Ƙasashe nawa na Tarayyar Afirka ne ke cikin AfCFTA?", options: ["15", "55", "8", "100"], answer: 1, why: "AfCFTA yana haɗa ƙasashe 55 na Tarayyar Afirka." },
      { objective: "O1", q: "Yaushe kasuwanci a ƙarƙashin AfCFTA ya fara?", options: ["1 ga Janairu 2021", "1 ga Janairu 2000", "Bai fara ba", "1 ga Janairu 2030"], answer: 0, why: "Kasuwanci a ƙarƙashin AfCFTA ya fara ranar 1 ga Janairu 2021." },
      { objective: "O1", q: "Mene ne ke yanke ko kayanku za su sami ragin harajin AfCFTA?", options: ["Launin ƙunshin kayan", "Nisan tafiyarku", "Ƙa'idodin asalin kaya", "Ranar mako"], answer: 2, why: "Dole kaya su cika ƙa'idodin asalin kaya, wato su nuna sun fito daga ƙasa mamba." },
      { objective: "O1", q: "Moussa yana sayar da kayan kwalliya daga Dakar zuwa Bamako. Wane shiri ya kamata ya fara tambaya game da shi?", options: ["Tsarin Kasuwanci Mai Sauƙi na EAC", "Tsarin Kasuwanci Mai Sauƙi na COMESA", "Wani shiri a Asiya", "Shirin Sauƙaƙa Kasuwanci na ECOWAS"], answer: 3, why: "Senegal da Mali mambobin ECOWAS ne, don haka ETLS ne shirin da za a tambaya game da shi." },
      { objective: "O1", q: "Wane ne zai iya bayanin ƙa'idodi masu sauƙi ga ƙananan 'yan kasuwa a wasu wuraren iyaka?", options: ["Jami'in teburin bayanin kasuwanci", "Kowane mai canjin kuɗi", "Kwandastan mota", "Baƙo a waya"], answer: 0, why: "Teburan bayanin kasuwanci a wasu wuraren iyaka suna bayanin ƙa'idodi ga ƙananan 'yan kasuwa." },
      { objective: "O2", q: "Wane jeri ne ke nuna takardun da aka saba buƙata a hanyar ƙetare iyaka ta hukuma?", options: ["Hotunan aure da littafin tarihin rayuwa", "Lambar waya kawai", "Katin shaida, takardar kuɗi ko rasit, jerin kaya, takardar bayyana kaya ga kwastam", "Wasiƙa daga aboki"], answer: 2, why: "Katin shaida, takardar kuɗi ko rasit, jerin kaya da takardar bayyana kaya ga kwastam su ne takardun da aka saba buƙata." },
      { objective: "O2", q: "Kafin ku sayi kayan da za ku ƙetare da su, me ya kamata ku tambayi kwastam?", options: ["Wane launi ya kamata kayan su kasance", "Ko an iyakance kayanku da waɗanne takardu suke buƙata", "Ko suna son sayen wasu", "Babu komai"], answer: 1, why: "Wasu kaya an iyakance su, kuma takardu sun bambanta daga kaya zuwa kaya, don haka ku tambaya tukuna." },
      { objective: "O2", q: "Grace tana kai sabbin tumatir daga Kenya zuwa Tanzania. Wace takardar shaida za ta iya buƙata?", options: ["Digirin jami'a", "Takardar shaidar aure", "Lasisin tuƙi", "Takardar shaidar lafiyar tsirrai (phytosanitary)"], answer: 3, why: "Sabbin kayan tsirrai sau da yawa suna buƙatar takardar shaidar lafiyar tsirrai; ya kamata ta tambayi kwastam." },
      { objective: "O2", q: "Me wakilin share kaya ke yi?", options: ["Yana taimakon ku cike takardun kwastam, da kuɗi", "Yana sayar muku da kayanku", "Yana canja kuɗi a titi", "Yana ƙayyade adadin haraji"], answer: 0, why: "Wakilin share kaya yana da lasisin taimakawa da takardun kwastam da kuɗi." },
      { objective: "O3", q: "Mene ne mataki na farko a lissafin kuɗin kaya?", options: ["Zaɓar farashin da kuke so", "Jera kowane kuɗi daga saye har zuwa sayarwa", "Kwafar farashin maƙwabci", "Canja kuɗi"], answer: 1, why: "Ba za ku iya sa farashi mai adalci ba sai kun san kowane kuɗi." },
      { objective: "O3", q: "Jimlar kuɗi KES 36,000 na takalma (sandal) biyu-biyu 120. Nawa ne kuɗin kowane biyu?", options: ["KES 30", "KES 3,000", "KES 300", "KES 120"], answer: 2, why: "36,000 an raba da 120 shi ne 300." },
      { objective: "O3", q: "Kuɗin kowane abu GHS 20 ne kuma riba GHS 5 ce. A farashin canji na misali 1 GHS = 40 XOF, nawa ne farashin a XOF?", options: ["800 XOF", "200 XOF", "1,000 XOF", "25 XOF"], answer: 2, why: "GHS 20 + GHS 5 = GHS 25; 25 x 40 = 1,000 XOF." },
      { objective: "O3", q: "Bayan kun lissafa farashinku, me kuma ya kamata ku duba?", options: ["Yanayi", "Farashin irin wannan kaya a kasuwar mai saye", "Babu komai", "Wayar maƙwabcinku"], answer: 1, why: "Kwatanta da kasuwa yana nuna ko masu saye za su biya farashinku." },
      { objective: "O4", q: "Sabon mai saye yana son kaya yanzu kuma ya yi alƙawarin biya mako mai zuwa. Mene ne mafi aminci?", options: ["Ku nemi kuɗin gaba ko cikakken kuɗi tukuna", "Ku aika komai yanzu", "Ku ba da PIN ɗinku a matsayin amana", "Ku aika ninki biyu"], answer: 0, why: "Da sabon mai saye, kuɗin gaba ko cikakken kuɗi tukuna yana kare kayanku." },
      { objective: "O4", q: "Ta yaya za ku san cewa kuɗi ya shigo da gaske?", options: ["Mai saye ya faɗa", "Hoton allo", "Saƙon tes daga lambar da ba ku sani ba", "Kun duba ma'auninku da kanku"], answer: 3, why: "Ma'auninku kaɗai ne ke tabbatar da kuɗin yana nan da gaske." },
      { objective: "O4", q: "Wane ne zai nemi PIN ɗin kuɗin wayarku?", options: ["Kamfanin kuɗin wayarku", "Bankinku", "Babu kamfani na gaske: 'yan damfara kaɗai", "Kwastam"], answer: 2, why: "Kamfani na gaske ba ya taɓa neman PIN ɗinku; duk wanda ya nema ɗan damfara ne." },
      { objective: "O4", q: "Me yasa ɗaukar tsabar kuɗi mai yawa ƙetare iyaka yake da haɗari?", options: ["Tsabar kuɗi koyaushe haramun ne", "Fashi, mummunan farashin canji a titi da kuɗin jabu", "Ba za a iya ƙirga tsabar kuɗi ba", "Bankuna sun hana shi"], answer: 1, why: "Ana iya sace tsabar kuɗi, kuma masu canji a titi suna iya ba da mummunan farashi ko kuɗin jabu." },
      { objective: "O5", q: "Wanne ne shingen kasuwanci ban da haraji?", options: ["Harajin shigo da kaya na hukuma", "Kuɗin da ba na hukuma ba a shingen hanya", "Farashin kayanku", "Ribarku"], answer: 1, why: "NTB shi ne duk wani abu ban da haraji da ke wahalar da kasuwanci, kamar kuɗin da ba na hukuma ba." },
      { objective: "O5", q: "Wane ne zai iya kai rahoto a tradebarriers.africa?", options: ["Manyan kamfanoni kaɗai", "Gwamnatoci kaɗai", "Maza kaɗai", "Kowane ɗan kasuwa, har da 'yan kasuwa da ba sa bin tsari, mata da matasa"], answer: 3, why: "Tsarin a buɗe yake ga kasuwanci na kowane girma, 'yan kasuwa da ba sa bin tsari, mata da matasa." },
      { objective: "O5", q: "Wani jami'i ya riƙe kayanku kuma yana neman tsabar kuɗi ba tare da rasit ba. Mene ne tsari mafi kyau?", options: ["Ku natsu, ku nemi rasit ko babban jami'i, ku rubuta bayanan gaskiya, kuma ku kai rahoto", "Ku bar kayanku ku koma gida", "Ku yi gardama da ƙarfi har ya haƙura", "Ku biya kuma kada ku taɓa faɗa wa kowa"], answer: 0, why: "Kiyaye lafiyarku, neman hanyar hukuma, rubuta bayanan gaskiya da kai rahoto su ne tsari mai kyau." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarinku ku sake gwadawa.",
    criteria: [
      { name: "An duba ƙa'idodi", objective: "O1", notYet: "Tsarin bai faɗi komai game da ƙa'idodin da suka shafa ba, ko yana dogara da jita-jita.", meets: "Tsarin yana ambaton shirin yanki ko ƙa'idar AfCFTA ta hanyar, da aƙalla ofisoshi ko shafukan intanet biyu da za a duba.", exceeds: "Yana kuma rubuta abin da wani ofishi ya faɗa, tare da kwanan wata da sunan jami'in." },
      { name: "An jera takardu", objective: "O2", notYet: "Babu jerin takardu, ko katin shaida kawai.", meets: "Jerin takardun wannan kaya da hanya, har da takardar kuɗi da takardar bayyana kaya ga kwastam, da takardar shaidar asalin kaya inda ake son ragin haraji.", exceeds: "Yana kuma ambaton duk wata takardar shaidar lafiya, ta tsirrai ko ta kaya, da yadda ake ajiye kwafi." },
      { name: "Cikakken kuɗi da farashi", objective: "O3", notYet: "Kuɗin kayan kawai aka lissafa, ko lissafin bai yi daidai ba.", meets: "An jera kowane kuɗi, kuɗin kowane abu da farashin sayarwa sun yi daidai, kuma an nuna farashin a kuɗaɗen biyu.", exceeds: "Yana kuma kwatanta farashin da kasuwar mai saye kuma ya bar gurbin canjin farashin canji." },
      { name: "Biyan kuɗi lafiya", objective: "O4", notYet: "An saki kaya kafin a duba biyan kuɗi, ko tsarin yana raba PIN.", meets: "An ambaci hanya mai aminci, ana sakin kaya ne kawai bayan an duba ma'auni, kuma ba a taɓa raba PIN ba.", exceeds: "Yana kuma jera alamun gargaɗin zamba da ɗan kasuwar zai kula da su." },
      { name: "Kuɗin da ba na hukuma ba", objective: "O5", notYet: "Babu tsari, ko tsarin shi ne a biya kuma a yi shiru.", meets: "An ambaci matakai masu aminci, bayanan da za a rubuta da hanyar kai rahoto ta hukuma.", exceeds: "Yana ambaton hanyoyin kai rahoto biyu da ƙungiyar 'yan kasuwa don tallafi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da hanyar ƙetare iyaka ta hukuma da takardun da suka dace cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun rage biyan kuɗin da ba na hukuma ba, ko suka kai rahoton NTB, cikin kwanaki 90",
      "Masu koyo da suka ce sun yi sayarwa ƙetare iyaka da ribar da suka tsara cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai sauƙi mai na'urar lissafi; intanet don au-afcfta.org da tradebarriers.africa idan zai yiwu",
      "Takarda da alƙalami don jerin takardu, lissafin kuɗi da tsarin kasuwanci",
      "Farashin canjin kuɗi na yau don hanyar mai koyo (daga banki ko babban banki)",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Kafin zaman, ku tambayi ofishin kwastam na yankinku ko teburin bayanin kasuwanci waɗanne shirye-shirye da takardu ne suka shafi hanyoyin da masu koyonku ke bi, don ku iya amsa tambayoyi; kada ku taɓa faɗin adadin haraji daga ka.",
      "A ƙungiyar 'yan kasuwa ko ƙungiyar kasuwa: ku yi gwajin farko tare, sannan babi ɗaya a kowane zama, masu koyo suna lissafin kuɗin kayansu na gaske.",
      "Ku girmama 'yan kasuwa da ba sa bin tsari: manufar ita ce kasuwanci mafi aminci, bisa doka kuma mai riba, ba zargi ba.",
      "Kada ku taɓa neman masu koyo su raba PIN, kalmomin sirri ko lambobin asusu a aji.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
