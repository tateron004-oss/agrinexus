"use strict";

// Koach Learn course, Hausa (ha) translation of veterans/veterans-ai-fintech.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Explains how financial technology works and its risks; it gives no investment advice (README rule 6).

module.exports = {
  id: "veterans-ai-fintech-ha",
  lang: "ha",
  translationOf: "veterans-ai-fintech",
  category: "Veterans (military)",
  name: "Fasahar Kuɗi da AI (Fintech)",
  skills: "Bayanin yadda manhajojin kuɗi ke aiki, Sanin abin da ke da inshora da wanda ba shi da shi, Duba manhaja kafin ku amince da ita, Saita tsaron asusu, Gane da kai rahoton zambar fintech",
  outcome: "bayanin yadda manhajar kuɗi ke amfani da AI, duba ko ta gaskiya ce kuma ko kuɗinku suna da inshora, saita tsaronta, da gane da kai rahoton zambar fintech da ake yi wa tsofaffin sojoji.",
  about: [
    "Fasahar kuɗi, ko fintech, ita ce manhajoji (apps) da shafukan intanet da mutane ke amfani da su don ajiya a banki, biya, rance, tsara kasafin kuɗi da zuba jari. Yawancinsu yanzu suna amfani da AI a ɓoye. Ana yawan kai wa tsofaffin sojoji hari da zamba saboda albashi da tallafi na yau da kullum, don haka sanin yadda waɗannan kayan aiki ke aiki yana kare ku da iyalinku.",
    "A wannan kwas za ku koyi yadda manhajojin biya, bankunan intanet, robo-advisor da crypto ke aiki, abin da inshorar ajiya ke rufewa da wanda ba ta rufewa, yadda ake duba manhaja kafin ku amince da ita, yadda ake kulle asusunku, da yadda ake gane da kai rahoton zamba. Waɗannan ƙwarewa kuma suna taimakawa idan kuna son aiki a banki ko fintech.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Wannan kwas yana bayanin yadda abubuwa ke aiki da haɗarinsu; ba ya faɗa muku abin da za ku saya ko ku zuba jari a ciki. Don shawarwarin kuɗinku na kanku, ku yi magana da ƙwararre mai zaman kansa da ya cancanta, ko mai ba da shawarar kuɗi kyauta na soja ko na VA (hukumar tsofaffin sojojin Amurka)."
  ],
  finalTask: "Ku yi Katin Tsaron Fintech mai shafi ɗaya don manhajar kuɗi ɗaya da kuke amfani da ita ko kuke tunani a kai: abin da take yi da yadda take amfani da AI, ko kuɗinku a cikinta suna da inshorar FDIC (da yadda kuka duba), saitin tsaro da kuka kunna, alamun zamba uku, da inda za ku kai rahoton matsala.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji, sojoji masu aiki da iyalansu da ke amfani da manhajojin kuɗi, ko suke tunanin amfani da su, don ajiya a banki, biya, rance, kasafin kuɗi ko zuba jari. Ana yawan kai wa tsofaffin sojoji hari da zamba saboda albashi da tallafi na yau da kullum.",
    startingPoint: "Suna amfani da wayar zamani da aƙalla manhajar kuɗi ko ta biya ɗaya. Yawancinsu ba su san inda manhaja ke ajiye kuɗinsu ba, ko suna da inshora, ko yadda manhajar ke amfani da AI, kuma kaɗan ne suka kunna dukkan saitin tsaro.",
    gap: "Manhajojin kuɗi suna iya kama da banki ba tare da sun zama banki ba, kuma 'yan damfara suna kwaikwayon bankuna, hukumomi da tayin zuba jari. Masu koyo suna buƙatar duba gaskiyar manhaja da inshorarta a majiyoyin hukuma, su kulle asusunsu, kuma su gane da kai rahoton zambar fintech kafin su yi asarar kuɗi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ba a ɗauka cewa suna da ilimin kuɗi ba",
      "Na'urori: wayar zamani mai manhajar kuɗin mai koyo da kansa",
      "Sirri: babu kalmar sirri, code ko cikakkiyar lambar asusu a kowane prompt na AI ko atisaye",
      "Babu shawarar zuba jari: ana bayanin crypto da robo-advisor tare da haɗarinsu, kuma shawarwari suna zuwa ga ƙwararre mai zaman kansa da ya cancanta",
      "Dokokin inshora da iyakokinsu suna canjawa, don haka masu koyo suna duba fdic.gov, CFPB da FTC kai tsaye"
    ],
    prerequisites: "Babu. Kwas ɗin \"AI don Nasara a Harkar Kuɗi da Rayuwa\" kwas na farko ne mai amfani game da kasafin kuɗi da zamba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku manhajojin kuɗin da ke wayarku", action: "gane nau'o'in fintech guda huɗu da hanya ɗaya da kowanne ke amfani da AI", standard: "kuma ku faɗi abin da za ku iya yi idan shawarar AI game da kuɗinku ba daidai ba ce" },
    { id: "O2", condition: "Don manhajar kuɗi ɗaya da kuke amfani da ita", action: "duba ko kuɗin da ke cikin manhajar suna da kariyar inshorar ajiya ta FDIC", standard: "ta hanyar nemo bankin abokin hulɗarta da tabbatar da shi a FDIC BankFind" },
    { id: "O3", condition: "Idan kun ji labarin robo-advisor ko crypto", action: "bayanin yadda kowanne ke aiki da jera manyan haɗarinsa", standard: "kuna kwatanta jerin haɗarin da majiyar hukuma kamar FTC" },
    { id: "O4", condition: "Kafin ku saka kuɗi a manhaja", action: "yin binciken abubuwa biyar a kan manhajar", standard: "kuna rubuta i ko a'a ga kowane abu" },
    { id: "O5", condition: "A manhajar kuɗi ɗaya", action: "kunna tabbatarwa mai matakai biyu da sanarwar biya, da cire na'urorin da ba ku sani ba", standard: "ba tare da bayyana kowace kalmar sirri ko code ba" },
    { id: "O6", condition: "Idan aka ba ku saƙo, kira ko tayi game da kuɗi", action: "gane alamun gargaɗin zambar fintech da kai rahotonta inda ya dace", standard: "ba tare da bayar da kowane code ko biyan komai ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda fintech ke aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne fintech, kuma ina AI yake shiga",
          minutes: 4,
          goal: "Ambaci nau'o'in fintech guda huɗu da hanya ɗaya da kowanne ke amfani da AI.",
          text: [
            "Fintech na nufin fasahar kuɗi: manhajoji da shafukan intanet na kuɗi. Nau'o'in da aka saba gani su ne bankin waya, manhajojin biya don tura kuɗi ga mutane, manhajojin kasafin kuɗi, masu ba da rance ta intanet da manhajojin zuba jari.",
            "Ana amfani da AI a ɓoye: don gane zamba (kati da aka yi amfani da shi a ƙasashe biyu cikin awa ɗaya), don amsa tambayoyi a chatbot, don raba kashe kuɗinku zuwa rukuni-rukuni, da don taimakawa wajen yanke wa ake ba rance.",
            "Shawarwarin AI suna iya zama ba daidai ba. Ana iya hana sayayya ta gaske, ko a ƙi ba da rance saboda bayanai marasa kyau. Kuna da haƙƙin tambayar dalili da ƙalubalantar kuskure; Consumer Financial Protection Bureau (CFPB, hukumar kare masu amfani da hidimomin kuɗi ta Amurka) tana bayanin waɗannan haƙƙoƙi."
          ],
          words: [["Fintech", "fasahar kuɗi: manhajoji da shafukan intanet na ajiya a banki, biya, rance, kasafin kuɗi da zuba jari."], ["Gane zamba (fraud detection)", "kayan aiki da ke sa ido kan biyan kuɗi da ke kama da na sata ko na bogi."], ["Chatbot", "shirin AI da ke amsa tambayoyi ta hira."]],
          slides: [
            { title: "Fintech = manhajojin kuɗi", bullets: ["Bankin waya da manhajojin biya", "Manhajojin kasafin kuɗi da masu ba da rance ta intanet", "Manhajojin zuba jari"] },
            { title: "AI a ɓoye", bullets: ["Yana gane zamba", "Yana amsa tambayoyi a chatbot", "Yana raba kashe kuɗi kuma yana taimakawa wajen ba da rance"] },
            { title: "AI yana iya yin kuskure", bullets: ["Ana hana sayayya ta gaske", "Ana ƙin ba da rance saboda bayanai marasa kyau", "Kuna iya tambayar dalili ku ƙalubalanci kuskure"] }
          ],
          sources: [{ name: "CFPB: Rayuwar kuɗi ta soja (sojoji masu aiki da tsofaffin sojoji)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Ku jera kowace manhajar kuɗi da ke wayarku. A gefen kowacce, ku rubuta wane nau'in fintech ce da hanya ɗaya da za ta iya amfani da AI.",
          youCanNow: "bayanin manyan nau'o'in fintech da yadda suke amfani da AI.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne nau'in fintech?", options: ["Littafin cak na takarda", "Tulun ajiyar kuɗi a gida", "Manhajar biya a wayarku", "Bayanin asusun banki da aka buga a takarda"], answer: 2, why: "Fintech na nufin manhajoji da shafukan intanet na kuɗi, kamar manhajojin biya, banki, kasafin kuɗi da zuba jari." },
            { objective: "O1", q: "AI na manhajar kuɗinku ya ɗauki biyan kuɗin hayarku na yau da kullum a matsayin zamba ya hana shi. Me za ku yi?", options: ["Ku tuntuɓi kamfanin, ku tambayi dalili ku ƙalubalanci kuskuren", "Ku goge manhajar kada ku sake biyan haya ta intanet", "Ku ba su kalmar sirrinku don su gyara", "Ku jira ku yi fatan zai wuce"], answer: 0, why: "Idan shawarar AI game da kuɗinku ba daidai ba ce, kuna iya tambayar dalili ku ƙalubalance ta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Inda kuɗinku suke da gaske: bankuna, manhajoji da inshora",
          minutes: 5,
          goal: "Duba ko kuɗin da ke cikin manhaja suna da kariyar inshorar ajiya ta FDIC.",
          text: [
            "Inshorar ajiya ta FDIC tana kare kuɗi a asusun ajiya (checking, savings, money market deposit account da CD) a bankin da ke da inshorar FDIC. Lokacin da muka duba fdic.gov a watan Oktoba 2026, adadin da aka saba shi ne aƙalla $250,000 ga kowane mai ajiya a kowane banki mai inshora.",
            "Inshorar FDIC ba ta rufe hannayen jari (stocks), bonds, mutual funds, annuities, inshorar rai ko kadarorin crypto. Manhajojin biya da yawa ba bankuna ba ne. Kuɗin da aka bar a cikin manhaja bazai da inshora ba sai idan manhajar ta saka shi a asusun banki mai inshora a madadinku.",
            "Don dubawa: ku karanta shafin taimako na manhajar don sunan bankin abokin hulɗarta, sannan ku nemi bankin da kayan aikin BankFind na FDIC a fdic.gov."
          ],
          steps: ["Ku buɗe shafin taimako ko na doka na manhajar ku nemi \"FDIC\" da sunan banki.", "Ku nemi sunan bankin da FDIC BankFind a fdic.gov.", "Ku duba ko irin kuɗinku (ajiya, hannun jari, crypto) yana da inshora.", "Idan ba ku tabbata ba, ku mayar da kuɗin kashewa zuwa asusun banki mai inshora."],
          words: [["FDIC", "Federal Deposit Insurance Corporation: tana kare ajiya a bankuna masu inshora idan bankin ya rushe."], ["Asusun ajiya (deposit account)", "asusun checking, savings, money market deposit account ko CD a banki."], ["BankFind", "kayan aikin FDIC kyauta don duba ko banki yana da inshorar FDIC."]],
          slides: [
            { title: "FDIC tana rufe ajiya", bullets: ["Checking, savings, money market deposit, CD", "Aƙalla $250,000 ga kowane mai ajiya, a kowane banki (Oktoba 2026)"] },
            { title: "FDIC BA ta rufe", bullets: ["Hannayen jari, bonds da mutual funds", "Annuities da inshorar rai", "Kadarorin crypto"] },
            { title: "Ku duba manhajarku", bullets: ["Ku nemo bankin abokin hulɗarta a shafukan taimako", "Ku nemi bankin da FDIC BankFind", "Ba ku tabbata ba? Ku ajiye kuɗi a banki mai inshora"] }
          ],
          sources: [{ name: "FDIC: Inshorar ajiya", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Ku zaɓi manhajar kuɗi ɗaya da kuke amfani da ita. Ku nemo bankin abokin hulɗarta a shafukan taimako na manhajar, ku duba bankin a FDIC BankFind. Ku rubuta ko kuɗinku suna da inshora.",
          youCanNow: "duba ko kuɗin da ke cikin manhaja suna da kariyar inshorar ajiya ta FDIC.",
          quickCheck: [
            { objective: "O2", q: "Mene ne FDIC BankFind?", options: ["Manhajar rance", "Kasuwar crypto", "Kayan aikin maki na bashi (credit score)", "Kayan aikin FDIC don duba ko banki yana da inshora"], answer: 3, why: "BankFind yana bar ku tabbatar da cewa banki yana da inshorar FDIC." },
            { objective: "O2", q: "Wata manhajar biya ta ce kuɗinku \"suna lafiya\". Yaya za ku duba ko suna da inshora?", options: ["Ku amince da tallar manhajar", "Ku nemo bankin abokin hulɗarta a shafukan taimako ku neme shi a BankFind", "Ku tambayi mataimakin AI", "Ku ɗauka cewa dukkan manhajoji bankuna ne"], answer: 1, why: "Inshora ya dogara ne kan ko manhajar tana ajiye kuɗinku a banki mai inshora, wanda kuke tabbatarwa a BankFind." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yadda robo-advisor da crypto ke aiki, da haɗarinsu",
          minutes: 5,
          goal: "Bayyana yadda robo-advisor da crypto ke aiki da faɗin manyan haɗarinsu.",
          text: [
            "Robo-advisor manhaja ce da ke amfani da dokokin kwamfuta don saka kuɗinku a jari bisa amsoshin da kuka bayar, kamar burinku da tsawon lokacin kafin ku buƙaci kuɗin. Tana karɓar kuɗin hidima. Jari yana iya rasa daraja, kuma ba shi da inshorar FDIC.",
            "Crypto (cryptocurrency) kuɗin intanet ne da ake rubutawa a wani babban littafin bayanai na intanet da ake rabawa, mai suna blockchain. Farashinsa yana iya hawa ya sauka sosai. FTC (hukumar kasuwanci ta Amurka) ta yi gargaɗin cewa biyan kuɗi da crypto yawanci ba ya juyuwa, kuma gwamnati ba ta ba crypto inshora kamar yadda take yi wa ajiyar banki.",
            "Wannan kwas ba ya faɗa muku ko ku yi amfani da ɗayansu. Kafin kowace shawarar zuba jari, ku koyi kuɗaɗen hidima da haɗari a shafukan hukuma, ku yi magana da ƙwararre mai zaman kansa da ya cancanta, ko mai ba da shawarar kuɗi kyauta na soja ko na VA."
          ],
          words: [["Robo-advisor", "manhajar da ke zuba kuɗi a jari da dokokin kwamfuta bisa amsoshinku."], ["Cryptocurrency", "kuɗin intanet da ake rubutawa a blockchain."], ["Blockchain", "rubutaccen bayanin ciniki na intanet da ake rabawa, mai wuyar canjawa sosai."], ["Mai sauyi sosai (volatile)", "farashin da ke iya hawa da sauka sosai, da sauri."]],
          slides: [
            { title: "Robo-advisor", bullets: ["Suna zuba jari da dokokin kwamfuta da amsoshinku", "Suna karɓar kuɗin hidima", "Jari yana iya rasa daraja; babu inshorar FDIC"] },
            { title: "Crypto", bullets: ["Kuɗin intanet a blockchain", "Farashi yana iya hawa da sauka sosai", "Biya yawanci ba ya juyuwa"] },
            { title: "Kafin kowace shawara", bullets: ["Ku koyi kuɗaɗen hidima da haɗari a shafukan hukuma", "Ku yi magana da ƙwararre mai zaman kansa da ya cancanta", "Wannan kwas ba ya ba da shawarar zuba jari"] }
          ],
          sources: [{ name: "FTC: Abin da ya kamata ku sani game da cryptocurrency da zamba", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "FDIC: Inshorar ajiya", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Ku tambayi mataimakin AI: \"Ka bayyana yadda robo-advisor ke aiki da yadda crypto ke aiki, da kalmomi masu sauƙi, tare da manyan haɗarin kowanne.\" Ku kwatanta jerin haɗarinsa da shafin crypto na FTC, ku rubuta duk abin da ya rasa.",
          youCanNow: "bayanin yadda robo-advisor da crypto ke aiki da faɗin manyan haɗarinsu.",
          quickCheck: [
            { objective: "O3", q: "Yaya robo-advisor ke aiki?", options: ["Yana zuba jari da dokokin kwamfuta bisa amsoshinku", "Wani mutum a banki yana zaɓar hannayen jari kyauta", "Yana tabbatar da cewa kuɗinku za su ƙaru", "Daidai yake da asusun savings"], answer: 0, why: "Robo-advisor yana amfani da dokokin kwamfuta da amsoshinku don zuba jari; yana da haɗarin kasuwa." },
            { objective: "O3", q: "Wani aboki ya ce crypto \"yana da inshora kamar asusun banki\". Me za ku faɗa masa?", options: ["Haka ne", "Sai a ƙarshen mako kawai", "Crypto ba shi da inshora kamar ajiyar banki, kuma farashinsa yana iya hawa da sauka sosai", "Ana iya juyar da biyan crypto koyaushe"], answer: 2, why: "Crypto ba shi da inshora kamar ajiyar banki, farashinsa yana iya canjawa sosai, kuma biya yawanci ba ya juyuwa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda fintech ke aiki",
        questions: [
          { objective: "O1", q: "Wanne ne misalin AI a fintech?", options: ["Ƙofar gaban banki", "Buga cak na takarda", "Gane katin da aka yi amfani da shi a ƙasashe biyu cikin awa ɗaya", "Rasiti na takarda"], answer: 2, why: "Gane zamba amfani ne na AI da aka saba gani." },
          { objective: "O1", q: "AI ya hana sayayyarku ta gaske bisa kuskure. Me za ku iya yi?", options: ["Ku tambayi dalili ku ƙalubalanci kuskuren", "Babu komai, AI ne ƙarshe", "Ku rufe dukkan asusunku", "Ku saka lambar katinku a intanet"], answer: 0, why: "Kuna da haƙƙin tambaya da ƙalubalantar kuskure." },
          { objective: "O2", q: "Bisa fdic.gov a watan Oktoba 2026, wanne ne ke da inshorar FDIC a banki mai inshora?", options: ["Mutual fund", "Crypto", "Hannayen jari", "Asusun savings"], answer: 3, why: "Asusun ajiya kamar savings suna da inshora." },
          { objective: "O2", q: "Yaya za ku duba ko bankin abokin hulɗar manhaja yana da inshorar FDIC?", options: ["Ku amince da tallace-tallacen manhajar", "Ku nemi bankin da FDIC BankFind", "Ku tambayi baƙo", "Ku duba kafofin sada zumunta"], answer: 1, why: "BankFind kayan aikin FDIC ne na hukuma." },
          { objective: "O3", q: "Me FTC ta ce game da biyan kuɗi da crypto?", options: ["Koyaushe suna da inshora", "Yawanci ba sa juyuwa", "Bankuna suna tabbatar da su", "Ba su da haɗari ko kaɗan"], answer: 1, why: "FTC ta yi gargaɗin cewa biyan crypto yawanci ba ya juyuwa." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da fintech lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Duba manhaja kafin ku amince da ita",
          minutes: 5,
          goal: "Yi binciken abubuwa biyar a kan manhajar kuɗi kafin ku saka kuɗi a ciki.",
          text: [
            "'Yan damfara suna gina manhajoji da shafukan kuɗi na bogi da suke kama da na gaske. Kafin ku sauke manhaja ko ku saka kuɗi, ku duba wane ne ke gudanar da manhajar da ko ta gaske ce.",
            "Ku sauke manhaja daga shagon manhajoji na hukuma kaɗai, ku duba cewa sunan mai ƙirƙira (developer) ya yi daidai da ainihin kamfanin. Ku karanta shafin intanet na kamfanin da kansa don cikakken sunansa da bankin abokin hulɗarsa. Ku duba bankin a FDIC BankFind. Ku nemi sunan kamfanin tare da \"complaints\" (ƙorafe-ƙorafe), ku kuma duba bayanan ƙorafi na CFPB.",
            "Kuna iya neman mataimakin AI ya bayyana ma'anar sharuɗɗan manhaja, amma kada ku amince da AI ya faɗa muku cewa manhaja tana da lafiya. Ku duba majiyoyin hukuma da kanku."
          ],
          steps: ["Ku sauke daga shagon manhajoji na hukuma kaɗai.", "Ku duba cewa sunan mai ƙirƙira ya yi daidai da ainihin kamfanin.", "Ku nemo cikakken sunan kamfanin da bankin abokin hulɗarsa a shafin intanet nasa.", "Ku duba bankin a FDIC BankFind.", "Ku nemi ƙorafe-ƙorafe, har da a consumerfinance.gov."],
          words: [["Mai ƙirƙira (developer)", "kamfanin da ya yi manhaja, wanda ake nunawa a shafin manhajar a shagon manhajoji."], ["Sharuɗɗan hidima (terms of service)", "dokoki da kuɗaɗen da kuke yarda da su idan kuna amfani da manhaja."]],
          slides: [
            { title: "Manhajojin bogi suna kama da na gaske", bullets: ["Ku duba kafin ku sauke ko ku saka kuɗi"] },
            { title: "Binciken abubuwa biyar", bullets: ["Shagon manhajoji na hukuma, mai ƙirƙira na gaske", "Cikakken sunan kamfani da bankin abokin hulɗarsa", "FDIC BankFind don bankin", "Ku nemi ƙorafe-ƙorafe"] },
            { title: "AI yana bayani, ba ya amincewa", bullets: ["Ku tambayi AI ma'anar sharuɗɗan", "Ku duba lafiya a majiyoyin hukuma da kanku"] }
          ],
          sources: [{ name: "CFPB: Rayuwar kuɗi ta soja (ƙorafe-ƙorafe da haƙƙoƙi)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }, { name: "FDIC: Inshorar ajiya (BankFind)", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Ku yi binciken abubuwa biyar a kan manhajar kuɗi ɗaya da kuke amfani da ita ko kuke tunani a kai. Ku rubuta i ko a'a a gefen kowane abu.",
          youCanNow: "duba ko manhajar kuɗi ta gaske ce kafin ku amince mata da kuɗi.",
          quickCheck: [
            { objective: "O4", q: "Mene ne abu na farko a binciken manhaja na abubuwa biyar?", options: ["Karanta sharhin mutane a intanet kawai", "Sauke daga shagon manhajoji na hukuma kaɗai, daga mai ƙirƙira na gaske", "Duba yadda manhajar take da kyau", "Tambayar chatbot na manhajar ko tana da lafiya"], answer: 1, why: "Manhajojin bogi suna kwaikwayon na gaske, don haka kuna farawa da samun manhajar gaske daga shagon hukuma." },
            { objective: "O4", q: "Mataimakin AI ya ce sabuwar manhajar kuɗi \"tana da lafiya babu shakka\". Me za ku yi?", options: ["Ku saka dukkan ajiyarku a ciki", "Ku raba manhajar da abokai", "Ku tsallake sauran binciken", "Ku yi binciken abubuwa biyar da kanku a majiyoyin hukuma"], answer: 3, why: "AI ba zai iya tabbatar da cewa manhaja tana da lafiya ba; ku ne kuke duba majiyoyin hukuma da kanku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kulle asusunku na kuɗi",
          minutes: 5,
          goal: "Kunna manyan saitin tsaro a manhajar kuɗi.",
          text: [
            "Ku ɗauki asusunku na kuɗi kamar wurin da ake tsare: kariya mai matakai da yawa. Ku yi amfani da kalmar sirri mai ƙarfi, ta daban, ga kowane asusun kuɗi, kuma ku kunna tabbatarwa mai matakai biyu (two-step verification) ta yadda sai an sami code ko manhaja kafin a shiga.",
            "Ku kunna sanarwa (alerts) ta yadda manhajar za ta faɗa muku kowane biya, kowane shiga, ko kowane canji ga bayananku. Sanarwa mai sauri tana bar ku dakatar da zamba da wuri.",
            "Kada ku taɓa bayar da code na shiga ga kowa, ko da wanda ya ce daga banki, VA ko manhajar yake. Kamfanoni na gaske ba sa neman sa. Kada ku taɓa rubuta kalmomin sirri ko cikakkun lambobin asusu a mataimakin AI."
          ],
          steps: ["Ku saita kalmar sirri mai ƙarfi, ta daban.", "Ku kunna tabbatarwa mai matakai biyu a saitin tsaro na manhajar.", "Ku kunna sanarwa don biya, shiga da canje-canje.", "Ku duba na'urorin da aka haɗa ku cire duk wadda ba ku sani ba.", "Ku yi wa kanku alƙawari: ba zan taɓa bayar da code na shiga ba."],
          words: [["Tabbatarwa mai matakai biyu (two-step verification)", "bincike na biyu, kamar code ko amincewa a manhaja, da ake buƙata kafin a shiga."], ["Sanarwa (alert)", "saƙon da manhaja ke aikawa idan wani abu ya faru a asusunku."]],
          slides: [
            { title: "Kariya mai matakai da yawa", bullets: ["Kalmar sirri mai ƙarfi, ta daban", "Tabbatarwa mai matakai biyu a kunne"] },
            { title: "Ku kunna sanarwa", bullets: ["Kowane biya", "Kowane shiga", "Kowane canji ga bayananku"] },
            { title: "Kada ku taɓa bayarwa", bullets: ["Code na shiga, ga kowa", "Kalmomin sirri ko lambobin asusu ga kayan AI"] }
          ],
          tryIt: "Ku buɗe saitin tsaro a manhajar kuɗi ɗaya. Ku kunna tabbatarwa mai matakai biyu da sanarwar biya, ku cire duk na'urar da ba ku gane ba.",
          youCanNow: "saita manyan saitin tsaro da ke kare asusun kuɗi.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku kunna sanarwar biya?", options: ["Don samun tallace-tallace", "Don raba ragowar kuɗinku da abokai", "Don gane da dakatar da zamba da wuri", "Don manhajar ta fi sauri"], answer: 2, why: "Sanarwa tana faɗa muku kowane biya ta yadda za ku kama zamba da sauri." },
            { objective: "O5", q: "A saitin tsaro na manhajarku kun ga na'urar da ba ku gane ba. Me za ku yi?", options: ["Ku cire ta ku canja kalmar sirrinku", "Ku bar ta; wataƙila babu matsala", "Ku kashe tabbatarwa mai matakai biyu", "Ku saka hoton allon a intanet"], answer: 0, why: "Na'urar da ba a sani ba tana iya zama wani ne a cikin asusunku, don haka ku cire ta ku kare asusun." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gane da kai rahoton zambar fintech",
          minutes: 5,
          goal: "Gane alamun gargaɗin zambar fintech da sanin inda za ku kai rahotonta.",
          text: [
            "FTC ta yi gargaɗin cewa 'yan damfara ne kaɗai ke neman a biya su da crypto, 'yan damfara ne kaɗai ke tabbatar da riba ko babbar riba, kuma aikin da ke neman ku biya kuɗin crypto tun farko zamba ne. Abokan soyayya na intanet da ke ba da shawarar zuba jari su ma alamar gargaɗi ne.",
            "'Yan damfara kuma suna yin kamar su banki ne, hukumar gwamnati ko VA, kuma su ce kuɗinku suna cikin haɗari. AI yana bar su rubuta saƙonni marasa kuskure har ma su kwaikwayi murya. Kada ku danna hanyoyin haɗinsu (links) ko ku sake kiran lambobin da suka ba ku; ku yi amfani da lambar da ke shafin intanet na hukuma ko a katinku.",
            "Don kai rahoto: ku shigar da ƙorafi game da wata hidimar kuɗi ga CFPB a consumerfinance.gov ko ta waya, ku kuma kai rahoton zamba ga FTC a ReportFraud.ftc.gov. Ku sanar da bankinku nan take idan kuɗi sun fita daga asusunku."
          ],
          steps: ["Ku lura da: neman biya da crypto, tabbatar da riba, kuɗi tun farko, kiran gaggawa na \"kuɗinku suna cikin haɗari\".", "Ku tsaya. Kada ku danna, ku biya ko ku bayar da code.", "Ku kira kamfanin ta lambar da ke shafin intanet nasa na hukuma ko a katinku.", "Ku sanar da bankinku nan take idan kuɗi sun motsa.", "Ku kai rahoto ga CFPB ko ReportFraud.ftc.gov."],
          words: [["Zambar yin kamar wani (impostor scam)", "lokacin da ɗan damfara ya yi kamar shi kamfani ne, hukuma ko mutumin da kuka amince da shi."], ["Tabbataccen riba (guaranteed returns)", "alƙawarin riba ba tare da haɗari ba; jari na gaske ba ya taɓa yin irin wannan alƙawari."]],
          slides: [
            { title: "Alamun gargaɗi na FTC", bullets: ["Neman biya da crypto", "Tabbatar da riba ko babbar riba", "Kuɗin crypto tun farko don samun aiki"] },
            { title: "Masu yin kamar wani suna amfani da AI", bullets: ["Saƙonni marasa kuskure da muryoyin da aka kwaikwaya", "Kada ku danna links ɗinsu ko ku kira lambobinsu", "Ku yi amfani da lambar hukuma"] },
            { title: "Ku kai rahoto", bullets: ["Ku sanar da bankinku nan take", "Ƙorafi ga CFPB: consumerfinance.gov", "FTC: ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Abin da ya kamata ku sani game da cryptocurrency da zamba", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "CFPB: Rayuwar kuɗi ta soja (shigar da ƙorafi)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Aikin ƙarshe: ku yi Katin Tsaron Fintech mai shafi ɗaya don manhaja ɗaya: abin da take yi da yadda take amfani da AI, ko kuɗinku suna da inshora da yadda kuka duba, saitin tsaro da kuka kunna, alamun zamba uku, da inda za ku kai rahoton matsala.",
          youCanNow: "fahimtar yadda manhajar kuɗi ke aiki, duba ta da kare ta, da gane da kai rahoton zambar fintech.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne alamar gargaɗin zambar fintech?", options: ["Bayanin asusu na wata-wata da kuke jira", "Lokutan aiki da reshen banki ya liƙa", "Rasitin abin da kuka saya", "Matsin lamba ku motsa kuɗinku da sauri zuwa asusun \"lafiya\""], answer: 3, why: "Gaggauta ku motsa kuɗi zuwa asusun \"lafiya\" sanannen zambar yin kamar wani ne." },
            { objective: "O6", q: "Kun sami tes daga \"bankinku\" da link don gyara wata matsala. Me za ku yi?", options: ["Ku danna link ɗin ku shiga asusu", "Kada ku danna; ku kira bankin ta lambar da ke shafin intanet nasa na hukuma ko a katinku", "Ku mayar da amsa da lambar asusunku", "Ku tura shi ga abokai"], answer: 1, why: "Ku ne kuke tuntuɓar kamfanin da kanku ta lambar da kuka amince da ita, ba wadda ke cikin saƙon ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da fintech lafiya",
        questions: [
          { objective: "O4", q: "Daga ina ya kamata ku sauke manhajar kuɗi?", options: ["Daga kowane shafin intanet", "Daga link a cikin tes daga baƙo", "Daga tallar da ke tasowa (pop-up)", "Daga shagon manhajoji na hukuma, daga ainihin kamfanin"], answer: 3, why: "Shagunan hukuma da mai ƙirƙira na gaske suna rage manhajojin bogi." },
          { objective: "O4", q: "Mataimakin AI zai iya faɗa muku da tabbas cewa manhaja tana da lafiya?", options: ["A'a; ku duba majiyoyin hukuma da kanku", "I, koyaushe", "Sai a ƙarshen mako kawai", "Sai don manhajojin crypto kawai"], answer: 0, why: "AI yana iya bayyana sharuɗɗa amma ba zai iya tabbatar da lafiya ba." },
          { objective: "O5", q: "Me tabbatarwa mai matakai biyu ke yi?", options: ["Tana cire kalmar sirrinku", "Tana ninka kuɗinku", "Tana buƙatar bincike na biyu, kamar code, kafin a shiga", "Tana raba asusunku"], answer: 2, why: "Bincike na biyu yana hana mutanen da suka saci kalmar sirrinku." },
          { objective: "O6", q: "Wani ya ce daga bankinku yake kuma ya nemi code na shiga da aka turo wayarku. Ku:", options: ["Saka shi a intanet", "Karanta masa shi", "Tura masa shi ta tes", "Kada ku taɓa bayarwa; ku kira bankin ta lambar hukuma"], answer: 3, why: "Kamfanoni na gaske ba sa taɓa neman code na shigarku." },
          { objective: "O6", q: "A cewar FTC, wanne ne alamar zamba?", options: ["Rasiti daga shago", "Bayanin asusun banki na wata-wata", "Alƙawarin tabbataccen babbar riba", "Sanarwar da kuka saita"], answer: 2, why: "'Yan damfara ne kaɗai ke tabbatar da riba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Fasahar Kuɗi da AI (Fintech)",
    questions: [
      { objective: "O1", q: "Fintech na nufin:", options: ["Fasaha mai kyau", "Fasahar kuɗi: manhajoji da shafukan intanet na kuɗi", "Fasahar motsa jiki", "Wani nau'in ma'ajiyar kuɗi ta banki"], answer: 1, why: "Ya haɗa da fasahar ajiya a banki, biya, rance, kasafin kuɗi da zuba jari." },
      { objective: "O1", q: "Wanne ne amfanin AI da aka saba gani a manhajojin kuɗi?", options: ["Raba kashe kuɗinku zuwa rukuni-rukuni", "Buga kuɗi", "Buɗe ƙofofin banki", "Aika bayanin asusu ta gidan waya"], answer: 0, why: "AI yana raba kashe kuɗi zuwa rukuni a manhajojin kasafin kuɗi." },
      { objective: "O1", q: "An ƙi ba ku rance saboda bayanai marasa daidai. Kuna iya:", options: ["Biyan baƙo ya gyara", "Kada ku yi komai", "Tambayar dalili ku ƙalubalanci kuskuren", "Ba chatbot kalmar sirrinku"], answer: 2, why: "Kuna da haƙƙin ƙalubalantar kurakurai." },
      { objective: "O1", q: "Wace hukuma ce ke bayanin haƙƙoƙinku game da hidimomin kuɗi kuma take karɓar ƙorafi?", options: ["Consumer Financial Protection Bureau (CFPB)", "Hukumar gidan waya (Postal Service)", "NASA", "Hukumar wuraren shakatawa ta ƙasa (National Park Service)"], answer: 0, why: "CFPB ce ke kula da ƙorafe-ƙorafen masu amfani da hidimomin kuɗi." },
      { objective: "O2", q: "Inshorar FDIC tana kare:", options: ["Kowane kuɗi a manhaja", "Dukkan crypto", "Dukkan hannayen jari", "Ajiya a bankuna masu inshorar FDIC"], answer: 3, why: "Tana rufe asusun ajiya a bankuna masu inshora." },
      { objective: "O2", q: "Bisa fdic.gov a watan Oktoba 2026, adadin inshora da aka saba shi ne aƙalla:", options: ["$2,500", "$250,000 ga kowane mai ajiya, a kowane banki mai inshora", "$25,000", "Babu iyaka"], answer: 1, why: "Shafin FDIC ya ce aƙalla $250,000 a kowane banki mai inshora." },
      { objective: "O2", q: "Shin kuɗin da ke cikin manhajar biya koyaushe yana da inshorar FDIC?", options: ["I, koyaushe", "A'a; ya dogara ne kan ko manhajar tana ajiye shi a banki mai inshora", "Sai ranar Juma'a kawai", "Sai idan crypto ne"], answer: 1, why: "Manhajojin biya da yawa ba bankuna ba ne." },
      { objective: "O2", q: "BankFind shi ne:", options: ["Allon neman aiki", "Jakar crypto (wallet)", "Manhajar rance", "Kayan aikin FDIC don duba ko banki yana da inshora"], answer: 3, why: "BankFind yana a fdic.gov." },
      { objective: "O3", q: "Robo-advisor shi ne:", options: ["Manhajar da ke zuba jari da dokokin kwamfuta bisa amsoshinku", "Mutum-mutumin banki da ke ba da kuɗi", "Rancen gwamnati kyauta", "Takardar inshora"], answer: 0, why: "Yana zuba jari ta atomatik don kuɗin hidima." },
      { objective: "O3", q: "Wanne ne gaskiya game da crypto?", options: ["FDIC tana ba shi inshora", "Tabbas zai ƙaru", "Farashinsa yana iya hawa da sauka sosai kuma ba shi da inshora kamar ajiyar banki", "Biya yana da sauƙin juyarwa"], answer: 2, why: "Crypto yana sauyi sosai kuma ba shi da inshorar ajiya." },
      { objective: "O3", q: "Kafin kowace shawarar zuba jari, wannan kwas ya ce ku:", options: ["Zuba komai lokaci ɗaya", "Yi abin da AI ya faɗa", "Bi shawarar kafofin sada zumunta", "Koyi kuɗaɗen hidima da haɗari ku yi magana da ƙwararre mai zaman kansa da ya cancanta"], answer: 3, why: "Kwas ɗin yana bayani ne, ba ya ba da shawara." },
      { objective: "O4", q: "Abu na farko a binciken manhaja shi ne:", options: ["Raba ta da abokai", "Saka kuɗi tukuna", "Sauke daga shagon manhajoji na hukuma kaɗai, daga mai ƙirƙira na gaske", "Kashe sanarwa"], answer: 2, why: "Manhajojin bogi sun yawaita a wajen shagunan hukuma." },
      { objective: "O4", q: "A ina za ku nemo bankin abokin hulɗar manhaja?", options: ["Wata talla kawai", "Shafin intanet ko shafukan taimako na kamfanin da kansa", "Saƙon tes", "Hasashen AI"], answer: 1, why: "Shafukan hukuma na kamfani suna faɗin sunan bankin." },
      { objective: "O5", q: "Wanne ne mataki mai ƙarfi na tsaro?", options: ["Kunna tabbatarwa mai matakai biyu", "Amfani da kalmar sirri ɗaya a ko'ina", "Bayar da code ga ma'aikatan taimako", "Kashe sanarwa"], answer: 0, why: "Mataki na biyu yana hana shiga da kalmar sirrin da aka sata." },
      { objective: "O5", q: "Me yasa za ku kunna sanarwar biya?", options: ["Don rage saurin wayarku", "Don samun ƙarin tallace-tallace", "Don gane da dakatar da zamba da wuri", "Don raba ragowar kuɗinku"], answer: 2, why: "Sanarwa mai sauri tana bar ku ɗauki mataki da sauri." },
      { objective: "O5", q: "Me bai kamata ku TAƁA rubutawa mataimakin AI ba?", options: ["Kalmar sirrinku ko cikakkiyar lambar asusunku", "\"Ka bayyana inshorar FDIC\"", "\"Mene ne robo-advisor?\"", "\"Ka jera alamun gargaɗin zamba\""], answer: 0, why: "Bayanan kuɗi na sirri dole su kasance a waje da kayan AI." },
      { objective: "O6", q: "Wani mai kira ya ce kuɗinku suna cikin haɗari kuma dole ku motsa su zuwa asusun crypto mai \"lafiya\". Wannan:", options: ["Sabunta tsaro ne", "Hanyar banki ta yau da kullum ce", "Tallafin VA ne", "Zambar yin kamar wani ce"], answer: 3, why: "FTC ta yi gargaɗin cewa waɗannan zamba ne." },
      { objective: "O6", q: "Wani aiki yana neman ku biya kuɗin crypto tun farko. Wannan:", options: ["Mataki ne na yau da kullum na ɗaukar aiki", "Zamba ce, a cewar FTC", "Kuɗin horo ne da VA ke biya", "Haraji ne"], answer: 1, why: "FTC ta ce kuɗin crypto tun farko don samun aiki zamba ne." },
      { objective: "O6", q: "Yaya ya kamata ku sake kiran kamfani game da saƙon da ake shakka?", options: ["Ku yi amfani da lambar da ke cikin saƙon", "Ku yi amfani da lambar da ke shafin intanet nasa na hukuma ko a katinku", "Ku mayar da amsa ga tes ɗin", "Ku tambayi mai kiran lamba"], answer: 1, why: "'Yan damfara suna ba da lambobin bogi." },
      { objective: "O6", q: "A ina za ku iya kai rahoton zamba ga FTC?", options: ["Chatbot na AI", "Sharhi a kafofin sada zumunta", "Shafin intanet na ɗan damfarar", "ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov shi ne shafin FTC na kai rahoto." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      6,
      7,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Abin da take yi da yadda take amfani da AI",
        objective: "O1",
        notYet: "Katin bai faɗi abin da manhajar take yi ko yadda take amfani da AI ba.",
        meets: "Katin ya ambaci nau'in fintech da hanya ɗaya da manhajar ke amfani da AI.",
        exceeds: "Ya kuma faɗi abin da za a yi idan AI na manhajar ya yanke shawarar da ba daidai ba."
      },
      {
        name: "An duba inshora",
        objective: "O2",
        notYet: "Ya ce kuɗin suna da inshora ba tare da dubawa ba, ko ya yi hasashe.",
        meets: "Ya ambaci bankin abokin hulɗa da ko yana da inshorar FDIC, an duba a BankFind.",
        exceeds: "Ya lura da waɗanne sassan kuɗin ke da inshora ko ba su da shi, da inda aka tabbatar da haka."
      },
      {
        name: "Saitin tsaro",
        objective: "O5",
        notYet: "Ba a kunna kowane saitin tsaro ba.",
        meets: "Tabbatarwa mai matakai biyu da sanarwar biya a kunne, kuma an cire na'urorin da ba a sani ba.",
        exceeds: "Ya kuma jera ƙarin saiti ɗaya da aka kunna, kamar kulle kati ko iyakar kashe kuɗi."
      },
      {
        name: "Alamun zamba da kai rahoto",
        objective: "O6",
        notYet: "Alamun gargaɗi ƙasa da uku, ko babu wurin kai rahoto.",
        meets: "Alamun gargaɗin zamba uku da inda za a kai rahoton matsala.",
        exceeds: "Ya haɗa da yadda ake sake kiran kamfanin ta lambar da aka amince da ita."
      },
      {
        name: "An duba manhaja",
        objective: "O4",
        notYet: "Ba a duba manhajar kafin amfani ba.",
        meets: "An yi binciken abubuwa biyar da i ko a'a ga kowane abu.",
        exceeds: "Mai koyo ya bayyana abin da zai yi idan wani abu ya zama a'a."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun kunna tabbatarwa mai matakai biyu da sanarwa a manhajojinsu na kuɗi cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun gane kuma sun guje wa zambar fintech",
      "Masu koyo da suka fara wani kwas na Koach Learn game da kuɗi ko tsaro cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai manhajar kuɗin mai koyo da kansa",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Shafukan intanet kyauta na FDIC BankFind, CFPB da FTC",
      "Takarda ko daftarin kwamfuta don Katin Tsaron Fintech mai shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Masu koyo suna canja saiti a wayoyinsu da kansu; kada ku taɓa neman ganin ragowar kuɗi, kalmomin sirri ko code.",
      "Kada ku ba da shawarar manhajoji, jari ko crypto; ku tura tambayoyin zuba jari ga ƙwararre mai zaman kansa da ya cancanta.",
      "Ku nuna saƙon zamba da aka ƙirƙira a aji, sannan ku yi atisayen sake kira ta lambar hukuma.",
      "Ku ba da maki ga Katin Tsaron Fintech da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "'Yan iyali suna iya shiga, domin zamba sau da yawa tana kai hari ga ma'aurata da iyaye ma."
    ]
  }
};
