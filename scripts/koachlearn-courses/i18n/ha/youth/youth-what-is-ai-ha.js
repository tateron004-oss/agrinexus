"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-what-is-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-what-is-ai-ha",
  lang: "ha",
  translationOf: "youth-what-is-ai",
  category: "Youth",
  name: "Mene ne AI? (don Matasa)",
  skills: "Bayanin mene ne AI, Gane AI a manhajojin yau da kullum, Bin ƙa'idar shekaru da dokokin makaranta, Yin tambaya a sarari ga mataimakin AI, Tabbatar da amsar AI",
  outcome: "bayyana mene ne AI da kalmominku, gane shi a manhajojin da kuke amfani da su, da amfani da mataimakin AI kyauta yadda ya dace: cikin ƙa'idar shekarunsa da dokokin makarantarku, da tambaya a sarari, da kuma tabbatar da amsar kafin ku amince da ita.",
  about: [
    "AI yana cikin wayarku, wasanninku, manhajar waƙoƙinku da kayan makarantarku. Wannan kwas ɗin na matasa ne masu shekaru kusan 13 zuwa 18 da ke son fahimtar ainihin abin da yake da yadda ake amfani da shi da kyau.",
    "Za ku koyi mene ne AI da abin da ba shi ba, inda yake ɓoye a manhajojin da kuke amfani da su kowace rana, yadda ake bin ƙa'idar shekaru da dokokin AI na makarantarku, yadda ake yin tambaya a sarari, da yadda ake tabbatar da amsa kafin ku yarda da ita.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi \"takardar bayanin AI\" mai shafi ɗaya don ƙaramin ɗalibi ko aboki: ku faɗi mene ne AI cikin jimloli biyu, ku ambaci manhajoji uku da kuke amfani da su da ke da AI a cikinsu, ku kuma saka tambaya ɗaya da kuka yi wa mataimakin AI, amsar da ya bayar, da yadda kuka tabbatar da ita.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa masu shekaru kusan 13 zuwa 18, a makaranta ko ba a makaranta ba, waɗanda suke amfani da waya, wasanni da manhajoji, kuma suna son fahimtar ainihin abin da AI yake da yadda ake amfani da shi da kyau.",
    startingPoint: "Suna amfani da manhajojin waƙa, bidiyo, wasa da saƙonni kowace rana, wataƙila sun taɓa gwada mataimakin hira. Yawancinsu ba za su iya bayyana yadda AI yake aiki ba, inda yake ɓoye a manhajojinsu, ko yadda ake tabbatar da abin da ya faɗa.",
    gap: "AI yana cikin kayan da matasa ke amfani da su don makaranta da nishaɗi, amma da yawa suna amfani da shi ba tare da sanin ƙa'idar shekarunsa ba, dokokin makarantarsu, ko cewa yana iya yin kuskure. Koyon yin tambaya a sarari, tabbatar da amsoshi da kasancewa lafiya yana taimaka musu su ƙara koyo, su guji matsalar satar amsa (cheating), su kuma kare kansu da wasu.",
    constraints: [
      "Ƙa'idar shekaru: kayan AI da yawa suna buƙatar mai amfani ya kai shekara 13 ko fiye, wasu kuma suna buƙatar izinin iyaye ko mai kula idan bai kai 18 ba",
      "Dokokin makaranta game da AI sun bambanta daga makaranta zuwa makaranta, da daga malami zuwa malami",
      "Na'urori: waya ko kwamfutar makaranta; wasu ba su da isasshen intanet a gida",
      "Sirri da tsaro: babu bayanan sirri ko hotunan mutane na gaske a kayan AI",
      "Kalmomi masu sauƙi da gajerun darussa don matakan karatu daban-daban"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Da kalmominku", action: "bayyana mene ne AI, yadda yake koyo daga misalai, da dalilin da yasa yake iya yin kuskure", standard: "cikin jimloli biyu da ƙaramin ɗalibi zai fahimta" },
    { id: "O2", condition: "Ta amfani da manhajojin wayarku ko kwamfutar makaranta", action: "gane inda AI yake ba da shawara, tsarawa, hasashe ko ƙirƙirar wani abu, har da AI mai ƙirƙira (generative AI)", standard: "kuna ambaton aƙalla manhajoji uku da abin da AI yake yi a kowace" },
    { id: "O3", condition: "Kafin ku yi amfani da sabon kayan AI a gida ko a makaranta", action: "duba ƙa'idar shekarun kayan da dokokin AI na makarantarku, da nuna manhajar ga iyaye ko mai kula", standard: "ta amfani da shafin taimako ko na sharuɗɗan kayan na hukuma" },
    { id: "O4", condition: "Idan akwai wani abu da kuke son koyo", action: "rubuta prompt da ke faɗin abin da kuke so, ɗan bayani, da yadda kuke son amsar", standard: "ta yadda amsar farko za ta yi amfani" },
    { id: "O5", condition: "Idan amsar AI tana da bayanan gaskiya a cikinta", action: "tabbatar da sunaye, ranaku da lambobi a majiya amintacciya", standard: "kuna rubuta inda kuka tabbatar da kowane bayani" },
    { id: "O6", condition: "Idan kuna rubuta prompt ko kun ga abin da AI ya yi", action: "kiyaye bayanan sirri daga ciki, ƙin yin abubuwan bogi na mutane na gaske, da tambayar amsoshi marasa adalci", standard: "ba tare da bayyana bayanan sirri ba, kuma kuna faɗa wa babban mutum amintacce game da abubuwan bogi masu cutarwa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Mene ne AI da inda kuke haɗuwa da shi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne AI, da kalmomi masu sauƙi",
          minutes: 4,
          goal: "Bayyana cikin jimloli biyu mene ne AI da abin da ba shi ba.",
          text: [
            "AI gajartawa ce ta artificial intelligence (basirar na'ura). Ma'anarsa shirye-shiryen kwamfuta da ke yin abubuwan da yawanci sai mutum ya yi tunani, kamar gane fuska, fahimtar magana, ba da shawarar waƙa ko rubuta amsa.",
            "Yawancin AI yana koyo daga misalai masu yawan gaske. Shirin da ya ga hotunan kyanwa miliyoyi zai iya hasashen ko sabon hoto yana da kyanwa a ciki. Shirin da ya karanta rubuce-rubuce masu yawan gaske zai iya rubuta jimlolin da suke kama da na mutum.",
            "AI ba mai rai ba ne, ba shi da ji a zuciya, kuma ba ya fahimtar duniya da gaske kamar yadda ku kuke fahimta. Yana nemo tsari (pattern) ne, sannan ya yi hasashe mafi kyau. Shi yasa yake iya zama mai amfani sosai, amma kuma ya yi kuskure."
          ],
          words: [["AI", "artificial intelligence (basirar na'ura): shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum ya yi tunani."], ["Tsari (pattern)", "wani abu da ke maimaituwa ta yadda shiri zai iya koyon sa ya yi amfani da shi wajen hasashe."]],
          slides: [
            { title: "AI = basirar na'ura (artificial intelligence)", bullets: ["Shirye-shiryen da ke yin ayyuka irin na tunani", "Gane fuska, fahimtar magana, rubuta amsoshi"] },
            { title: "Yadda yake koyo", bullets: ["Yana nazarin misalai masu yawan gaske", "Yana nemo tsari (pattern)", "Yana yin hasashe mafi kyau"] },
            { title: "Abin da AI BA shi ba", bullets: ["Ba mai rai ba ne, ba shi da ji a zuciya", "Ba ya fahimta kamar yadda kuke fahimta", "Yana iya yin kuskure, ko da yana magana kamar ya tabbata"] }
          ],
          tryIt: "Ku rubuta jimloli biyu da ke bayyana AI ga yaro mai shekara goma. Kada ku yi amfani da kalmar da ba zai sani ba. Ku karanta wa wani, ku tambaye shi ko ya fahimta.",
          youCanNow: "bayyana mene ne AI da abin da ba shi ba cikin jimloli biyu masu sauƙi.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ma'anar cewa AI yana \"nemo tsari\"?", options: ["Yana jin abin da kuke ji", "Ya san komai game da duniya", "Yana koyo daga misalai da yawa kuma yana yin hasashe mafi kyau", "Yana karanta tunaninku"], answer: 2, why: "AI yana koyo daga misalai masu yawan gaske kuma yana hasashe bisa tsarin da ya samu." },
            { objective: "O1", q: "Abokinku ya ce, \"AI mai rai ne kuma yana fahimtata.\" Me za ku faɗa masa?", options: ["AI ba mai rai ba ne kuma ba shi da ji; yana hasashe daga tsari", "Eh, yana da ji kamar mutum", "AI na kuɗi ne kaɗai mai rai", "AI yana aiki a waya kaɗai"], answer: 0, why: "AI shiri ne da ke nemo tsari; ba mai rai ba ne kuma ba ya fahimta da gaske." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gane AI a manhajojin da kuke amfani da su",
          minutes: 5,
          goal: "Ambaci aƙalla wurare uku da AI yake bayyana a manhajojinku na yau da kullum.",
          text: [
            "Wataƙila kuna amfani da AI kowace rana ba tare da kun kira shi da wannan suna ba. Manhajojin waƙa da bidiyo suna ba da shawarar abin da za a kunna na gaba bisa abin da kuka so a baya. Wannan AI ne yake neman tsari a zaɓinku.",
            "Kyamarorin waya suna amfani da AI don gyara hotuna da ɓata bayan hoto (blur). Allon rubutu (keyboard) yana hasashen kalmarku ta gaba. Taswira tana hasashen cunkoson hanya. Wasanni suna amfani da AI don sarrafa 'yan wasan da kuke karawa da su. Manhajojin imel da saƙonni suna tace saƙonnin banza (spam).",
            "Mataimakan hira, kamar ChatGPT, Microsoft Copilot da Google Gemini, sabon nau'i ne da ake kira AI mai ƙirƙira (generative AI). Maimakon tsarawa ko ba da shawara kawai, suna ƙirƙirar sabon rubutu, hotuna ko sauti."
          ],
          steps: ["Ku buɗe manhajar da kuke yawan amfani da ita.", "Ku tambayi kanku: shin tana ba ni shawara, tana tsarawa, tana hasashe ko tana ƙirƙirar wani abu?", "Idan eh, wataƙila AI ne yake aiki.", "Ku rubuta sunan manhajar da abin da AI yake yi."],
          words: [["Shawara (recommendation)", "abin da manhaja ke ba da shawara bisa abin da kuka yi a baya."], ["AI mai ƙirƙira (generative AI)", "AI da ke ƙirƙirar sababbin abubuwa, kamar rubutu, hotuna ko waƙa."]],
          slides: [
            { title: "AI da kuke riga kuke amfani da shi", bullets: ["Shawarwarin waƙa da bidiyo", "Gyaran hoto a kyamarar waya", "Hasashen kalma ta gaba a allon rubutu", "'Yan wasa a wasanni da tace saƙonnin banza"] },
            { title: "Ku tambayi kanku", bullets: ["Shin manhajar tana ba da shawara, tsarawa, hasashe ko ƙirƙira?", "Idan eh, wataƙila AI ne"] },
            { title: "AI mai ƙirƙira (generative AI)", bullets: ["Yana ƙirƙirar sabon rubutu, hotuna ko sauti", "Misalai: ChatGPT, Copilot, Gemini"] }
          ],
          tryIt: "Ku duba manhajojin da ke wayarku ko kwamfutar makaranta. Ku rubuta guda uku da ke amfani da AI, da layi ɗaya ga kowace da ke faɗin abin da AI yake yi, misali \"Manhajar waƙa: tana ba da shawarar waƙoƙin da zan iya so\".",
          youCanNow: "gane AI a manhajojin yau da kullum da faɗin abin da yake yi.",
          quickCheck: [
            { objective: "O2", q: "Me ya bambanta AI mai ƙirƙira da shawarwarin waƙa na manhajar waƙa?", options: ["Yana tsara imel kawai", "Yana ƙirƙirar sabon rubutu, hotuna ko sauti", "Yana aiki ba tare da intanet ba kawai", "Ba ya taɓa amfani da tsari"], answer: 1, why: "AI mai ƙirƙira yana ƙirƙirar sabon abu maimakon tsarawa ko ba da shawara kawai." },
            { objective: "O2", q: "Kuna son sanin ko wata manhaja tana amfani da AI. Wace tambaya ce ta fi taimakawa?", options: ["Shin manhajar kyauta ce?", "Shin alamarta shuɗi ce?", "Shekarun manhajar nawa ne?", "Shin tana ba ni shawara, tana tsarawa, tana hasashe ko tana ƙirƙirar wani abu?"], answer: 3, why: "Idan manhaja tana ba ku shawara, tsarawa, hasashe ko ƙirƙira, wataƙila AI ne yake aiki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ƙa'idar shekaru, dokokin makaranta da iyayenku ko mai kula",
          minutes: 5,
          goal: "Duba ko an yarda ku yi amfani da kayan AI, a gida da a makaranta, kafin ku yi rajista.",
          text: [
            "Kowane kayan AI yana da ƙa'idoji game da wanda zai iya amfani da shi. Da yawa suna buƙatar ku kai aƙalla shekara 13, wasu kuma suna neman izinin iyaye ko mai kula idan ba ku kai 18 ba. Misali, Google ya ce dole ku kai shekara 13 ko fiye (ko shekarun da suka shafi ƙasarku) don amfani da Gemini da asusun kanku ko na makaranta. Ƙa'idoji suna canjawa, don haka ku karanta shafin sharuɗɗa ko na taimako na kayan da kansa.",
            "Makarantarku ma tana da dokoki. Wasu darussa suna yarda da AI don tunanin ra'ayoyi amma ba don rubuta aikinku ba. Wasu sun hana shi a jarabawa. Amfani da shi saɓanin dokokin zai iya zama satar amsa (cheating), ko da ba ku yi niyya ba. Idan kuna shakka, ku tambayi malaminku kafin ku yi amfani da shi.",
            "Kafin ku buɗe asusu a kowace sabuwar manhaja, ku yi magana da iyayenku ko mai kula. Ku nuna musu manhajar, ƙa'idar shekarunta da bayanan da take nema. Makarantu da yawa kuma suna ba ku asusun makaranta don kayan da aka amince da su; ku yi amfani da shi don aikin makaranta."
          ],
          steps: ["Ku nemo ƙa'idar shekarun kayan a shafinsa na taimako ko na sharuɗɗa na hukuma.", "Ku duba dokokin AI na makarantarku da na malaminku.", "Ku nuna manhajar ga iyaye ko mai kula kafin ku yi rajista.", "Ku yi amfani da asusun makaranta don kayan makaranta da aka amince da su."],
          words: [["Sharuɗɗan amfani (terms of use)", "ƙa'idojin da kamfani ya kafa don amfani da manhajarsa ko shafinsa."], ["Gaskiya a karatu (academic integrity)", "faɗin gaskiya game da aikin makarantarku: aikin da kuka miƙa yana nuna abin da ku kuka yi."]],
          sources: [{ name: "Google Gemini Apps Help: abin da kuke buƙata don shiga (ƙa'idar shekaru)", url: "https://support.google.com/gemini/answer/13278668" }],
          slides: [
            { title: "Ku fara duba ƙa'idar shekaru", bullets: ["Kayan AI da yawa suna buƙatar ku kai shekara 13 ko fiye", "Wasu suna buƙatar izinin iyaye idan ba ku kai 18 ba", "Ku karanta shafin taimako ko na sharuɗɗa na kayan da kansa"] },
            { title: "Ku san dokokin makarantarku", bullets: ["Wasu darussa suna yarda da AI don ra'ayoyi kawai", "Wasu sun hana shi a jarabawa", "Ba ku tabbata ba? Ku fara tambayar malaminku"] },
            { title: "Ku sa iyaye ko mai kula a ciki", bullets: ["Ku nuna musu manhajar kafin ku yi rajista", "Ku duba bayanan da take nema", "Ku yi amfani da asusun makaranta don kayan makaranta"] }
          ],
          tryIt: "Ku zaɓi mataimakin AI ɗaya. Ku nemo ƙa'idar shekarunsa a shafin taimako ko na sharuɗɗa na kamfanin da kansa. Sannan ku rubuta dokar makarantarku ko ta wani malami game da AI. Ku nuna duka biyun ga iyayenku ko mai kula.",
          youCanNow: "duba ƙa'idar shekarun kayan AI da dokokin AI na makarantarku, da sa iyaye ko mai kula a ciki kafin ku yi rajista.",
          quickCheck: [
            { objective: "O3", q: "A ina ne wuri mafi kyau don nemo ƙa'idar shekarun kayan AI?", options: ["Shafin taimako ko na sharuɗɗa na kayan da kansa", "Hasashen aboki", "Wani sharhi a ƙarƙashin bidiyo", "Taurarin da aka ba manhajar"], answer: 0, why: "Ƙa'idoji suna canjawa, don haka ku karanta su a shafin taimako ko na sharuɗɗa na kamfanin da kansa." },
            { objective: "O3", q: "Ba ku tabbata ko an yarda da AI a wani aikin aji ba. Me za ku yi?", options: ["Ku yi amfani da shi ku yi fatan babu matsala", "Ku tambayi aboki a wata makaranta", "Ku yi amfani da shi amma kada ku faɗa wa kowa", "Ku tambayi malaminku kafin ku yi amfani da shi"], answer: 3, why: "Dokokin makaranta sun bambanta, kuma amfani da AI saɓanin su zai iya zama satar amsa, don haka ku fara tambaya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Mene ne AI da inda kuke haɗuwa da shi",
        questions: [
          { objective: "O1", q: "Wace jimla ce ta fi bayyana AI?", options: ["Mutum-mutumin na'ura (robot) mai ji a zuciya", "Shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum ya yi tunani", "Wani nau'in cajar waya", "Shafin intanet da ke daidai koyaushe"], answer: 1, why: "AI yana nufin shirye-shiryen da ke yin ayyuka irin na tunani kamar gane abu, ba da shawara da rubutu." },
          { objective: "O1", q: "Ta yaya yawancin AI yake koyo?", options: ["Ta zuwa makaranta", "Ta karanta tunaninku", "Ba ya taɓa koyo", "Ta nazarin misalai masu yawan gaske da nemo tsari"], answer: 3, why: "AI yana nemo tsari a cikin misalai masu yawa kuma yana amfani da su wajen hasashe." },
          { objective: "O2", q: "Manhajar waƙarku ta ba da shawarar sabuwar waƙa da za ku iya so. Wannan:", options: ["AI ne yake ba da shawara", "Ƙwayar cutar kwamfuta (virus) ce", "Dokar malami ce", "Kiran waya ne"], answer: 0, why: "Shawarwari bisa zaɓinku na baya amfani ne na AI da aka saba gani." },
          { objective: "O3", q: "Kuna son gwada sabuwar manhajar AI. Me ya kamata ku fara yi?", options: ["Ku yi rajista da kowace ranar haihuwa", "Ku ba ta kalmar sirrin makarantarku", "Ku duba ƙa'idar shekarunta ku nuna wa iyaye ko mai kula", "Ku saukar da ita daga tallar da ke tasowa (pop-up)"], answer: 2, why: "Ƙa'idar shekaru da izinin iyaye ko mai kula suna zuwa kafin rajista." },
          { objective: "O3", q: "Malaminku ya ce AI ya yi daidai don tunanin ra'ayoyi amma ba don rubuta makalarku ba. Ku:", options: ["Ku sa AI ya rubuta makalar duk da haka", "Ku yi watsi da dokar", "Ku yi amfani da AI don ra'ayoyi kawai, sannan ku rubuta makalar da kanku", "Ku kwafi makalar aboki"], answer: 2, why: "Bin dokar malaminku yana sa aikinku ya zama na gaskiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da mataimakin AI da hikima",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yin tambaya a sarari",
          minutes: 5,
          goal: "Rubuta prompt mai sarari da zai kawo amsa mai amfani tun farko.",
          text: [
            "Abin da kuke rubutawa mataimakin AI ana kiransa prompt (umarni). Prompt mai sarari yana kawo amsa mafi kyau.",
            "Prompt mai kyau yana da sassa uku: abin da kuke so, ɗan bayani, da yadda kuke son amsar. Misali: \"Ina aji na 9 kuma muna fara darasi kan zagayowar ruwa (water cycle). Ka bayyana shi cikin gajerun matakai 5 da misali ɗaya na yau da kullum.\"",
            "Prompt mai rauni kamar \"zagayowar ruwa\" yana sa mataimakin ya yi hasashen abin da kuke buƙata. Yawanci za ku sami amsa mai tsawo ta gama-gari."
          ],
          steps: ["Ku faɗi abin da kuke so.", "Ku ƙara ɗan bayani (ajinku, batun, abin da kuka riga kuka sani).", "Ku faɗi yadda kuke son ta: matakai, jeri, gajeriya, kalmomi masu sauƙi ko misali."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI."]],
          slides: [
            { title: "Prompt ita ce buƙatarku", bullets: ["Prompt mai sarari = amsa mafi kyau", "Prompt marar sarari = amsa ta gama-gari"] },
            { title: "Sassa uku", bullets: ["1. Abin da kuke so", "2. Ɗan bayani", "3. Yadda kuke son amsar"] },
            { title: "Mai rauni da mai sarari", bullets: ["Mai rauni: \"zagayowar ruwa\"", "Mai sarari: \"Ina aji na 9. Ka bayyana zagayowar ruwa cikin gajerun matakai 5 da misali.\""] }
          ],
          tryIt: "Ku zaɓi wani abu da kuke son sani, kamar yadda injin wasan bidiyo yake aiki ko dalilin da yasa sama take shuɗi. Ku rubuta prompt mai dukkan sassa uku, ku aika wa mataimakin AI da aka yarda ku yi amfani da shi, sannan ku karanta amsar.",
          youCanNow: "rubuta prompt mai sarari mai sassa uku.",
          quickCheck: [
            { objective: "O4", q: "Mene ne sashen \"ɗan bayani\" na prompt?", options: ["Launin allo", "Ɗan bayani game da ku da batun, kamar ajinku ko abin da kuka riga kuka sani", "Kalmar sirrinku", "Saitunan manhajar"], answer: 1, why: "Bayani kamar ajinku da batun yana taimaka wa mataimakin ya daidaita amsar da ku." },
            { objective: "O4", q: "Kun rubuta \"dutsen wuta\" kuma kun sami amsa mai tsawo ta gama-gari. Me za ku aika a gaba?", options: ["\"dutsen wuta\" kuma", "Babu komai; ku haƙura", "\"Ina aji na 8. Ka bayyana yadda dutsen wuta (volcano) yake fashewa cikin gajerun matakai 4.\"", "Adireshin gidanku"], answer: 2, why: "Ƙara abin da kuke so, ɗan bayani da tsarin amsa yana sa prompt ya zama a sarari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tabbatar da amsa kafin ku amince da ita",
          minutes: 5,
          goal: "Tabbatar da amsar AI a aƙalla majiya amintacciya ɗaya.",
          text: [
            "Mataimakan AI wani lokaci suna ƙirƙirar abubuwa. Suna iya ƙirƙirar rana, maganar wani (quote), littafin da babu shi, ko bayanin da yake kama da gaskiya amma ba daidai ba ne. Ana kiran wannan hallucination (hasashen ƙarya).",
            "Ku tabbatar da duk wani abu mai muhimmanci, musamman bayanai don makaranta, lafiya, kuɗi da labarai. Ku duba littafin karatunku, ku tambayi malaminku ko ma'aikacin ɗakin karatu, ko ku nemo shafi amintacce, kamar gidan tarihi (museum), hukumar kimiyya, kundin ilimi (encyclopedia) da makarantarku ke amfani da shi, ko shafin da ke ƙarewa da .gov ko .edu.",
            "Kyakkyawar al'ada: ku kwatanta majiyoyi biyu. Idan AI da majiya amintacciya ba su yi daidai ba, ku amince da majiyar, kuma wataƙila ku faɗa wa malaminku abin da AI ya yi kuskure a kai."
          ],
          steps: ["Ku nemo bayanan gaskiya a cikin amsar: sunaye, ranaku, lambobi.", "Ku duba kowanne a majiya amintacciya.", "Idan ba su yi daidai ba, ku bi majiya amintacciyar.", "Ku rubuta inda kuka tabbatar."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Majiya (source)", "inda bayani ya fito."]],
          slides: [
            { title: "AI yana iya ƙirƙirar abubuwa", bullets: ["Ranaku da lambobi marasa daidai", "Maganganu ko littattafan bogi", "Bayanan da suke kama da gaskiya amma ba haka ba ne"] },
            { title: "Ku tabbatar a majiyoyi amintattu", bullets: ["Littafin karatunku, malaminku ko ma'aikacin ɗakin karatu", "Gidajen tarihi, hukumomin kimiyya, shafukan .gov ko .edu"] },
            { title: "Idan ba su yi daidai ba", bullets: ["Ku amince da majiya amintacciya", "Ku rubuta inda kuka tabbatar"] }
          ],
          tryIt: "Ku ɗauki amsar prompt ɗinku na ƙarshe. Ku zaɓi bayanai biyu a cikinta, ku tabbatar da kowanne a majiya amintacciya. Ku rubuta ko kowanne daidai ne da inda kuka tabbatar.",
          youCanNow: "gane bayanan da ke buƙatar tabbatarwa da tabbatar da su a majiya amintacciya.",
          quickCheck: [
            { objective: "O5", q: "Wace ce majiya amintacciya don tabbatar da bayanin makaranta?", options: ["Wani sharhi a intanet", "AI ɗin nan da aka sake tambaya", "Hoton barkwanci (meme)", "Littafin karatunku ko shafin da ke ƙarewa da .edu ko .gov"], answer: 3, why: "Littattafan karatu, malamai, ma'aikatan ɗakin karatu da shafuka amintattu wurare ne masu kyau don tabbatar da bayanai." },
            { objective: "O5", q: "AI ya ambaci wani littafi don rahotonku, amma ba ku iya samunsa ko'ina ba. Me za ku yi?", options: ["Ku ɗauke shi a matsayin hasashen ƙarya mai yiwuwa ku yi amfani da majiyar da za ku iya samu", "Ku saka shi a rahotonku duk da haka", "Ku ƙirƙiri lambar shafi", "Ku nemi AI ya yi alƙawarin cewa gaskiya ne"], answer: 0, why: "AI yana iya ƙirƙirar littattafai da bayanai; ku amince da majiyoyin da za ku iya dubawa da gaske." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kasancewa lafiya da yin adalci da AI",
          minutes: 5,
          goal: "Yi amfani da AI ba tare da bayyana bayanan sirri ba, kuma ba tare da cutar da kowa ba.",
          text: [
            "Kada ku rubuta bayanan sirri a kayan AI: cikakken sunanku tare da adireshinku, makarantarku da jadawalinku, lambobin waya, kalmomin sirri (password), ko hotunan abokai ba tare da kun tambaye su ba. Abin da kuka rubuta yana iya kasancewa an ajiye shi.",
            "AI zai iya yin hotunan bogi, muryoyin bogi da bidiyon bogi, wani lokaci ana kiransu deepfakes. Kada ku taɓa amfani da AI don yin hotunan bogi ko masu kunyatarwa na mutane na gaske. Yana iya cutar da su, ya saɓa dokokin makaranta, har ma ya saɓa doka. Idan wani ya yi muku haka ko ga abokinku, ku faɗa wa babban mutum amintacce.",
            "AI kuma yana iya rashin adalci. Ya koya daga rubuce-rubucen mutane, don haka yana iya maimaita ra'ayoyin wariya (stereotypes). Idan wata amsa ta yi kama da rashin adalci ga wani rukunin mutane, ku tambaye ta."
          ],
          steps: ["Ku karanta prompt ɗinku kafin ku aika ku cire bayanan sirri.", "Kada ku taɓa yin hotuna ko muryoyin bogi na mutane na gaske.", "Idan kun ga deepfake mai cutarwa, ku faɗa wa babban mutum amintacce.", "Ku tambayi amsoshin da suke kama da rashin adalci."],
          words: [["Deepfake", "hoto, murya ko bidiyon bogi da aka yi da AI don ya yi kama da na gaske."], ["Son kai (bias)", "lokacin da sakamako ba shi da adalci ga wasu mutane, sau da yawa saboda abin da AI ya koya daga gare shi."]],
          slides: [
            { title: "Ku riƙe shi a sirri", bullets: ["Babu adireshi, jadawali ko lambar waya", "Babu kalmomin sirri", "Babu hotunan abokai ba tare da tambaya ba"] },
            { title: "Deepfakes suna cutarwa", bullets: ["Kada ku taɓa yin bogin mutane na gaske", "Yana iya saɓa dokokin makaranta da doka", "Ku faɗa wa babban mutum amintacce idan kun ga ɗaya"] },
            { title: "Ku lura da son kai (bias)", bullets: ["AI yana iya maimaita ra'ayoyin wariya", "Ku tambayi amsoshin da suke kama da rashin adalci"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi \"takardar bayanin AI\" ɗinku mai shafi ɗaya: mene ne AI cikin jimloli biyu, manhajoji uku da kuke amfani da su da ke da AI, da tambaya ɗaya da kuka yi wa mataimakin AI tare da amsar da yadda kuka tabbatar da ita. Ku tabbata babu bayanan sirri a cikinta.",
          youCanNow: "amfani da AI lafiya da adalci, da bayyana AI ga wani.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku kiyaye bayanan sirri daga kayan AI?", options: ["Kayan AI suna da jinkiri", "Abin da kuka rubuta yana iya kasancewa an ajiye shi", "Yana gajarta amsoshi", "Bayanan sirri suna ƙara wa AI wayo"], answer: 1, why: "Abin da kuka rubuta yana iya kasancewa an ajiye shi, don haka bayanan sirri kamar adireshinku da jadawalinku su kasance a waje." },
            { objective: "O6", q: "Wani abokinku yana son amfani da AI don yin hoton bogi na barkwanci na wani ɗan ajinku. Me za ku yi?", options: ["Ku taimaka a yi shi amma kada ku raba shi", "Ku saka shi a intanet, tunda barkwanci ne", "Ku ce a'a, domin bogin mutane na gaske yana iya cutar da su ya kuma saɓa dokoki", "Ku tura shi ga abokai na kusa kawai"], answer: 2, why: "Hotunan bogi na mutane na gaske suna iya cutar da su, su saɓa dokokin makaranta, har ma su saɓa doka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da mataimakin AI da hikima",
        questions: [
          { objective: "O4", q: "Wane prompt ne ya fi sarari?", options: ["\"Ina aji na 9. Ka bayyana zagayowar ruwa cikin gajerun matakai 5 da misali.\"", "\"kimiyya\"", "\"taimako\"", "\"faɗa mini wani abu\""], answer: 0, why: "Yana faɗin abin da kuke so, yana ba da ɗan bayani, kuma yana faɗin yadda kuke son amsar." },
          { objective: "O5", q: "Mene ne \"hallucination\" na AI?", options: ["Wani mataki a wasan bidiyo", "Wani nau'in allon waya", "Dokar makaranta", "Lokacin da AI ya ƙirƙiri abin da yake kama da gaskiya"], answer: 3, why: "Hallucination amsa ce ƙirƙirarriya da take kama da ta gaske." },
          { objective: "O5", q: "AI ya ba ku wata rana don aikin tarihi. Ya kamata ku:", options: ["Ku kwafe ta nan take", "Ku tabbatar da ita a littafin karatunku ko wata majiya amintacciya", "Ku sake tambayar AI ku amince da amsa ta biyu", "Ku tsallake ranar"], answer: 1, why: "Ana tabbatar da muhimman bayanai a majiya amintacciya." },
          { objective: "O6", q: "Wanne ne BAI kamata ku rubuta wa mataimakin AI ba?", options: ["Adireshin gidanku da jadawalin makarantarku", "\"Ka bayyana photosynthesis a sauƙaƙe\"", "\"Ka ba ni ra'ayoyi 3 don hoton tallar ƙungiyarmu\"", "\"Ka gajarta ta\""], answer: 0, why: "Adireshi da jadawali bayanan sirri ne." },
          { objective: "O6", q: "Wani ɗan ajinku ya yi hoton bogi da AI na wani ɗalibi. Me ya kamata ku yi?", options: ["Ku raba shi", "Ku yi wani", "Ku faɗa wa babban mutum amintacce", "Ku rubuta sharhi"], answer: 2, why: "Deepfakes na mutane na gaske suna iya cutar da su; babban mutum amintacce zai iya taimakawa a dakatar da shi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Mene ne AI? (don Matasa)",
    questions: [
      { objective: "O1", q: "AI yana nufin:", options: ["Intanet mai aiki da kansa", "Artificial intelligence (basirar na'ura)", "Bayanai na zamani", "Mai saka manhaja"], answer: 1, why: "AI gajartawa ce ta artificial intelligence." },
      { objective: "O1", q: "Wanne ne gaskiya game da AI?", options: ["Yana da ji a zuciya", "Koyaushe daidai yake", "Mai rai ne", "Yana nemo tsari kuma yana yin hasashe mafi kyau"], answer: 3, why: "AI yana hasashe daga tsari; ba mai rai ba ne kuma yana iya yin kuskure." },
      { objective: "O1", q: "Me yasa AI zai iya yin kuskure ko da yana magana kamar ya tabbata?", options: ["Malalaci ne", "Yana son yaudarar ku", "Wayoyi suna da jinkiri", "Yana hasashe ne daga tsari, ba fahimta ta gaske ba"], answer: 3, why: "Yana hasashe daga tsari, don haka amsa mai ƙarfin gwiwa tana iya zama ba daidai ba." },
      { objective: "O2", q: "Allon rubutun wayarku yana hasashen kalmarku ta gaba. Wannan:", options: ["Ƙwayar cutar kwamfuta (virus) ce", "AI ne yake aiki", "Malami ne", "Kalmar sirri ce"], answer: 1, why: "Hasashen kalma ta gaba aikin AI ne da aka saba gani." },
      { objective: "O2", q: "Wanne ne misalin AI mai ƙirƙira (generative AI)?", options: ["Na'urar lissafi (calculator)", "Makunnin wuta", "Mataimakin hira da ke rubuta labari", "Taswirar takarda"], answer: 2, why: "AI mai ƙirƙira yana ƙirƙirar sabon rubutu, hotuna ko sauti." },
      { objective: "O2", q: "Manhajar bidiyo tana nuna \"Saboda kun kalli...\". Wannan:", options: ["Shawara ce da AI ya bayar", "Saƙon tes ne", "Dokar makaranta ce", "Na'urar sarrafa wasa ce"], answer: 0, why: "Tana ba da shawarar bidiyo bisa zaɓinku na baya." },
      { objective: "O3", q: "A ina ya kamata ku nemo ƙa'idar shekarun kayan AI?", options: ["Hasashen aboki", "Shafin taimako ko na sharuɗɗa na kayan da kansa", "Tallar da ke tasowa (pop-up)", "Babu inda, babu ƙa'idoji"], answer: 1, why: "Shafukan kamfanin da kansa suna ba da ƙa'idar da ake amfani da ita yanzu." },
      { objective: "O3", q: "Me shafin taimako na Google ya ce game da amfani da Gemini da asusun kanku ko na makaranta?", options: ["Kowace shekaru ta yi daidai", "Dole ku kai shekara 21", "Malamai ne kaɗai za su iya amfani da shi", "Dole ku kai shekara 13 ko fiye, ko shekarun da suka shafi ƙasarku"], answer: 3, why: "Shafin taimako na Google ya sa shekara 13 ko fiye, ko shekarun ƙasarku." },
      { objective: "O3", q: "Kafin ku yi rajista a sabuwar manhaja ya kamata ku:", options: ["Yi magana da iyayenku ko mai kula", "Yi amfani da ranar haihuwa ta bogi", "Raba kalmar sirrinku da aboki", "Danna kowace talla"], answer: 0, why: "Ya kamata iyaye ko mai kula su san game da sababbin asusu." },
      { objective: "O3", q: "Amfani da AI don rubuta aikin da malaminku ya ce ku rubuta da kanku:", options: ["Ya yi daidai idan babu wanda ya lura", "Wajibi ne", "Saɓa dokoki ne, kuma yana iya zama satar amsa", "Kyakkyawar al'adar karatu ce"], answer: 2, why: "Dokokin makaranta ne ke yanke yadda za a yi amfani da AI; saɓa musu rashin gaskiya ne." },
      { objective: "O4", q: "Mene ne prompt?", options: ["Na'urar sarrafa wasa", "Wani nau'in kalmar sirri", "Abin da kuke rubutawa ko faɗa wa mataimakin AI", "Shagon manhajoji"], answer: 2, why: "Prompt ita ce buƙatarku ga AI." },
      { objective: "O4", q: "Wane sashe ne ke sa prompt ya fi sarari?", options: ["Faɗin yadda kuke son amsar, kamar gajerun matakai 5", "Rubuta kalma ɗaya kawai", "Ƙara adireshinku", "Amfani da manyan haruffa kawai"], answer: 0, why: "Faɗin tsarin amsa yana taimaka wa AI ya ba da amsa mai amfani." },
      { objective: "O4", q: "Prompt mai rauni kamar \"zagayowar ruwa\" yawanci yana kawo:", options: ["Amsa cikakkiya", "Babu amsa har abada", "Ƙwayar cutar kwamfuta (virus)", "Amsa mai tsawo ta gama-gari"], answer: 3, why: "AI dole ya yi hasashe, don haka amsar ta zama ta gama-gari." },
      { objective: "O5", q: "Wace majiya ce ta fi aminci don tabbatar da bayanin kimiyya?", options: ["Wani sharhi a intanet", "Hukumar kimiyya ko littafin karatunku", "Hoton barkwanci (meme)", "Tallar da ke tasowa (pop-up)"], answer: 1, why: "Littattafan karatu da shafukan kimiyya na hukuma amintattu ne." },
      { objective: "O5", q: "AI da littafin karatunku ba su yi daidai ba. Ya kamata ku:", options: ["Amince da littafin karatun ko majiya amintacciya", "Amince da AI", "Jefa tsabar kuɗi", "Yi amfani da amsoshin biyu"], answer: 0, why: "Majiya amintacciya ta fi amsar AI da ba a tabbatar da ita ba." },
      { objective: "O5", q: "Waɗanne bayanai ne suka fi buƙatar tabbatarwa?", options: ["Ra'ayinku na kanku", "Barkwancin da kuka nema", "Ranaku, lambobi da sunaye", "Waƙar da kuka nema"], answer: 2, why: "Bayanai kamar ranaku da lambobi wurare ne da AI yakan yi kuskure." },
      { objective: "O6", q: "Wanne ne bayanin sirri da ya kamata ku kiyaye daga AI?", options: ["\"Ka bayyana ɓangarori (fractions)\"", "Kalmar sirrinku", "\"Ka gajarta ta\"", "Launin da kuka fi so"], answer: 1, why: "Kada a taɓa raba kalmomin sirri." },
      { objective: "O6", q: "Deepfake shi ne:", options: ["Wurin ninkaya mai zurfi", "Wani nau'in wasa", "Jagorar karatu", "Hoto, murya ko bidiyon bogi da aka yi da AI"], answer: 3, why: "Deepfakes abubuwan bogi ne da AI ya yi waɗanda suke kama da na gaske." },
      { objective: "O6", q: "AI ya ba da amsar da take kama da rashin adalci ga wani rukunin mutane. Ya kamata ku:", options: ["Raba ta", "Yarda da ita", "Daina amfani da kowane AI har abada", "Tambaye ta, domin AI yana iya maimaita ra'ayoyin wariya"], answer: 3, why: "AI yana iya ɗaukar son kai daga abin da ya koya." },
      { objective: "O6", q: "Idan wani ya yi muku bogi mai cutarwa da AI, mataki mafi kyau shi ne:", options: ["Ɓoye shi", "Faɗa wa babban mutum amintacce", "Ku ma ku yi masa ɗaya", "Ƙara raba shi"], answer: 1, why: "Babban mutum amintacce zai iya taimakawa a kai rahoto a dakatar da shi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Mene ne AI",
        objective: "O1",
        notYet: "Bayanin babu shi, ba daidai ba ne, ko ya yi wuya ga ƙaramin ɗalibi.",
        meets: "Jimloli biyu masu sarari da ke faɗin mene ne AI da cewa yana iya yin kuskure.",
        exceeds: "Yana kuma faɗin yadda AI yake koyo daga misalai, da kalmomin da yaro mai shekara goma zai sani."
      },
      {
        name: "AI a manhajojina",
        objective: "O2",
        notYet: "Manhajoji ƙasa da uku, ko babu layin da ke faɗin abin da AI yake yi.",
        meets: "Manhajoji uku, kowace da layi ɗaya kan abin da AI yake yi.",
        exceeds: "Yana kuma nuna wacce ce AI mai ƙirƙira (generative AI)."
      },
      {
        name: "Tambaya a sarari",
        objective: "O4",
        notYet: "Prompt ɗin kalma ɗaya ne ko biyu.",
        meets: "Prompt ɗin yana faɗin abin da ake so, ɗan bayani da yadda ake son amsar.",
        exceeds: "Amsar ta yi amfani tun farko, ko tambayar biyo baya ɗaya ta inganta ta."
      },
      {
        name: "An tabbatar da amsar",
        objective: "O5",
        notYet: "An yi amfani da amsar ba tare da tabbatarwa ba.",
        meets: "Aƙalla bayani ɗaya an tabbatar da shi a majiya amintacciya, kuma an ambaci majiyar.",
        exceeds: "Bayanai biyu an tabbatar da su a majiyoyi biyu, da bayani kan duk abin da AI ya yi kuskure a kai."
      },
      {
        name: "Lafiya kuma an yarda",
        objective: "O6",
        notYet: "Takardar bayanin tana da bayanan sirri, ko an yi amfani da kayan saɓanin ƙa'idar shekarunsa ko dokokin makaranta.",
        meets: "Babu bayanan sirri, kuma kayan da aka yi amfani da shi ya dace da ƙa'idar shekarunsa da dokokin makaranta.",
        exceeds: "Yana ƙara shawara ga ƙaramin mai karatu game da kasancewa lafiya da AI."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka fara wani kwas na matasa na Koach Learn cikin kwanaki 30",
      "Masu koyo da suka ce suna tabbatar da amsoshin AI don aikin makaranta a binciken biyo baya na kwanaki 30",
      "Malamai ko shirye-shiryen matasa da suka ce matsalolin dokokin AI sun ragu tsakanin masu koyo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfutar makaranta mai intanet",
      "Mataimakin AI kyauta da mai koyo ya kai shekarun amfani da shi kuma an yarda ya yi amfani da shi, kamar kayan da makaranta ta amince da shi",
      "Takarda ko wani daftari don takardar bayani mai shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku duba ƙa'idar shekarun kowane kayan AI kafin aji, kuma ku yi amfani da asusun da makaranta ta amince da su idan akwai.",
      "Ku raba dokokin AI na makarantarku ko shirinku a farko don masu koyo su san abin da aka yarda da shi.",
      "Kada ku taɓa neman masu koyo su rubuta bayanan sirri ko su saka hotunan mutane na gaske.",
      "Masu koyo da ba su kai shekarun ba za su iya yin ayyukan a takarda, ko malami ya nuna musu yadda kayan yake aiki.",
      "Ku sa masu koyo su raba takardun bayaninsu da ƙaramin ɗalibi ko abokin aiki, su ba da maki da ma'aunin rubric."
    ]
  }
};
