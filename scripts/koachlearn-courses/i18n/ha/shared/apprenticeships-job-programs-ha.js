"use strict";

// Koach Learn course, Hausa (ha) translation of shared/apprenticeships-job-programs.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// US-specific course: US agency, program and site names are kept as written, with a short explanation.

module.exports = {
  id: "apprenticeships-job-programs-ha",
  lang: "ha",
  translationOf: "apprenticeships-job-programs",
  category: "Workforce Development",
  name: "Neman Koyon Sana'a Mai Albashi (Apprenticeship) da Shirye-shiryen Horon Aiki",
  skills: "Bambance nau'o'in shirye-shirye, Bincike a apprenticeship.gov, Amfani da American Job Center, Tabbatar da cewa shiri na gaske ne, Tattara takardun neman shiga, Yin tsarin neman shiga",
  outcome: "samun koyon sana'a mai albashi (apprenticeship) na gaske da shirye-shiryen horon aiki kyauta ko masu araha kusa da ku, tabbatar da cewa na gaske ne kuma sun dace da ku, tattara abin da kuke buƙata don neman shiga, da yin tsari mai ranaku don neman shiga biyu daga cikinsu.",
  about: [
    "Wannan kwas ɗin na duk wanda yake son a biya shi yayin da yake koyon sana'a, ko samun horo kyauta don aiki mafi kyau: matasa masu barin makaranta, manyan da ke sauya sana'a, tsofaffin sojoji (veterans), da masu dawowa gida daga gidan yari.",
    "Za ku koyi bambanci tsakanin koyon sana'a mai albashi (apprenticeship), shirin kafin koyon sana'a (pre-apprenticeship) da shirin horon aiki; yin bincike a Job Finder na hukuma a apprenticeship.gov; amfani da American Job Center na yankinku; gane shirye-shiryen ƙarya da zamba ta aiki; da tattara takardun da shirye-shirye ke nema.",
    "Wannan kwas ɗin yana SHIRYA ku ne don ku nema ku kuma nemi shiga. Ba ya sa ku a wani shiri, kuma ba ya yi muku alƙawarin samun gurbi. Ƙa'idoji, shekaru da guraben da ake da su suna sauyawa, don haka kowane darasi yana nuna muku shafin hukuma da za ku duba.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta, ku duba hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" a takarda ko a waya. Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi \"Tsarin Neman Shiga Shiri\" a shafi ɗaya: aikin da kuke so; shirye-shirye biyu na gaske da kuka samu (daga apprenticeship.gov, American Job Center, Job Corps, YouthBuild, ƙungiyar ma'aikata ko kwaleji), da mai ɗaukar nauyin kowanne, wurinsa, abubuwan da yake buƙata da yadda ake neman shiga; binciken da kuka yi don tabbatar da cewa kowanne na gaske ne; jerin takardun da kuke da su da waɗanda har yanzu kuke buƙata; da matakai biyar na gaba, kowanne da rana.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu neman aiki masu shekara 16 zuwa sama a Amurka: matasa masu barin sakandare ko waɗanda ba su da shaidar kammalawa (diploma), manyan da ke sauya sana'a, tsofaffin sojoji da masu dawowa gida daga gidan yari. Da yawa suna zaune a unguwanni masu ƙaramin kuɗin shiga ko a karkara, kuma suna buƙatar samun kuɗi yayin da suke horo.",
    startingPoint: "Suna iya amfani da waya ko kwamfutar ɗakin karatu don bincike a intanet. Yawancinsu sun ji labarin koyon sana'a ko horo, amma ba su san yadda za su sami shiri na gaske ba, wa ke biyan kuɗinsa, ko me suke buƙata don neman shiga. An taɓa yi wa wasu zamba ta \"biya don a horar da ku\".",
    gap: "Akwai koyon sana'a mai albashi da horo kyauta a kowace jiha, amma mutane suna rasa su saboda ba su san inda za su duba ko abin da za su tambaya ba. Masu koyo suna buƙatar samun shirye-shirye na gaske a shafukan hukuma, su duba su, kuma su nemi shiga a kan lokaci, don su koma aiki mai albashi mafi kyau ba tare da bashi ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6)",
      "Na'urori: waya, ko kwamfutar ɗakin karatu ko ta cibiyar aiki mai iyakataccen lokaci",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da makaranta",
      "Shirye-shirye, shekaru da ƙa'idoji sun bambanta bisa jiha kuma suna sauyawa; masu koyo suna duba shafukan hukuma (apprenticeship.gov, dol.gov, jobcorps.gov, va.gov)",
      "Haɗarin zamba: kada ku taɓa biyan kuɗi don samun aiki, kuma kada ku taɓa rubuta lambobi na sirri a ayyukan atisaye"
    ],
    prerequisites: "Babu. Masu koyo da ba su zaɓi fanni ba tukuna za su iya fara ɗaukar \"Skilled Trades Careers\" (Sana'o'in Hannu); masu koyo da ke buƙatar takardar bayanin aiki (résumé) za su iya ɗaukar \"Résumé, LinkedIn and Interviews\"."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku gajeren bayanin shirye-shirye biyar", action: "gane kowanne a matsayin koyon sana'a mai albashi, shirin kafin koyon sana'a ko shirin horon aiki", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Ta amfani da Job Finder na apprenticeship.gov a waya ko kwamfuta", action: "neman koyon sana'a a fanninku da yankinku da rubuta tallace-tallace biyu", standard: "da mai ɗaukar nauyi, wuri da yadda ake neman shiga ga kowanne" },
    { id: "O3", condition: "Ta amfani da CareerOneStop ko layin wayar DOL", action: "gano American Job Center mafi kusa da ku da rubuta tambayoyin da za ku yi game da horo kyauta", standard: "da aƙalla tambayoyi huɗu, ciki har da ɗaya game da kuɗin taimakon horo" },
    { id: "O4", condition: "Idan aka ba ku tallan wani shiri ko tayi", action: "duba ko shirin na gaske ne kuma ya cancanci lokacinku", standard: "ta amfani da aƙalla bincike uku, ciki har da alamun gargaɗi na zamba ta \"biya don samun aiki\"" },
    { id: "O5", condition: "Ga shiri ɗaya da kuke so", action: "rubuta abubuwan da yake buƙata da takardun da kuke buƙata don neman shiga", standard: "kuna nuna waɗanda kuke da su riga da inda za ku sami sauran" },
    { id: "O6", condition: "Ga shirye-shirye biyu da kuka samu", action: "rubuta tsarin neman shiga mai matakai na gaba masu ranaku", standard: "da aƙalla matakai biyar, ranakun ƙarshe da ranar bibiya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ku san zaɓuɓɓukanku da inda za ku same su",
      lessons: [
        {
          title: "Koyon sana'a, kafin koyon sana'a ko shirin horo?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gane manyan nau'o'in shirye-shirye uku da wanda ya dace da ku yanzu.",
          text: [
            "Koyon sana'a mai rajista (Registered Apprenticeship) aiki ne. Shafin apprenticeship.gov na Ma'aikatar Kwadago ta Amurka (US Department of Labor) ya ce masu koyon sana'a suna samun albashi tun daga rana ta farko, ana ƙara musu albashi yayin da ƙwarewarsu ke ƙaruwa, suna koyo a wurin aiki tare da karatu a aji, kuma suna gamawa da takardar shaida da ake amincewa da ita a duk fannin. Kuna neman shiga ne wajen mai ɗaukar aiki ko mai ɗaukar nauyin shirin, kamar yadda ake neman aiki.",
            "Shirin kafin koyon sana'a (pre-apprenticeship) yana shirya ku don shiga koyon sana'a. Apprenticeship.gov ya ce zai iya ɗaukar 'yan makonni zuwa 'yan watanni, kuma albashi ko ɗan alawus ba dole ba ne. Sau da yawa yana koyar da lissafi na asali, tsaro da shirin shiga aiki. YouthBuild misali ɗaya ne na matasa.",
            "Shirin horon aiki yana koyar da ƙwarewa don wani aiki, sau da yawa a aji, kuma yana taimaka muku samun aiki a ƙarshe. Misalai su ne Job Corps, takardun shaida na kwalejin al'umma (community college), da horon da American Job Center na yankinku ke biyan kuɗinsa. Wasu kyauta ne; wasu suna taimakawa da kuɗi; yawanci ba a biyan ku albashi yayin da kuke koyo.",
            "Ku tambayi kanku: shin ina buƙatar samun kuɗi yanzu (koyon sana'a), ina buƙatar shiryawa da farko (kafin koyon sana'a), ko ina buƙatar gajeren kwas don in cancanci wani aiki (shirin horo)?"
          ],
          words: [["Koyon sana'a mai rajista (Registered Apprenticeship)", "aiki mai albashi tare da horo, wanda Ma'aikatar Kwadago ko wata jiha ta amince da shi, kuma yana ƙarewa da takardar shaida da ake amincewa da ita."], ["Kafin koyon sana'a (pre-apprenticeship)", "gajeren shiri da ke shirya ku don shiga koyon sana'a."], ["Mai ɗaukar nauyi (sponsor)", "mai ɗaukar aiki, ƙungiyar ma'aikata ko ƙungiyar da ke gudanar da koyon sana'a kuma take ɗaukar masu koyo aiki."], ["Alawus (stipend)", "ɗan kuɗi don taimakawa da kashe-kashe yayin horo; ba cikakken albashi ba ne."], ["Takardar shaida (credential)", "shaidar wata ƙwarewa, kamar satifiket ko lasisi."]],
          slides: [
            { title: "Koyon sana'a mai rajista", bullets: ["Aiki mai albashi tare da horo", "Albashi tun rana ta farko, ƙari yayin da ƙwarewa ke ƙaruwa", "Yana ƙarewa da takardar shaida da fannin ke amincewa da ita"] },
            { title: "Kafin koyon sana'a", bullets: ["Yana shirya ku don koyon sana'a", "'Yan makonni zuwa 'yan watanni", "Albashi ko alawus ba dole ba ne"] },
            { title: "Shirin horon aiki", bullets: ["Yana koyar da ƙwarewar aiki, sau da yawa a aji", "Misalai: Job Corps, satifiket na kwaleji, horon AJC", "Yawanci babu albashi yayin koyo"] },
            { title: "Wanne ya dace da ku yanzu?", bullets: ["Kuna buƙatar samun kuɗi yanzu: koyon sana'a", "Kuna buƙatar shiryawa: kafin koyon sana'a", "Kuna buƙatar gajeren kwas: shirin horo"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Masu neman aiki (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov: Menene shirin kafin koyon sana'a?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "Ma'aikatar Kwadago ta Amurka: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" }
          ],
          tryIt: "A takarda, ku yi layuka uku a tsaye: Koyon sana'a, Kafin koyon sana'a, Shirin horo. Ku rubuta abubuwa biyu masu kyau da abu ɗaya mai wuya game da kowanne ga RAYUWARKU a yanzu. Ku zagaye wanda ya fi dacewa da ku a yau.",
          youCanNow: "bambance koyon sana'a mai albashi, shirin kafin koyon sana'a da shirin horon aiki, da zaɓar nau'in da ya dace da ku yanzu.",
          quickCheck: [
            { objective: "O1", q: "Wane shiri ne ke biyan ku albashi yayin da kuke koyo a wurin aiki?", options: ["Kwas na bidiyo kyauta a intanet", "Koyon sana'a mai rajista (Registered Apprenticeship)", "Taron koyarwa a ɗakin karatu", "Shafin intanet na gwajin atisaye"], answer: 1, why: "Koyon sana'a mai rajista aiki ne mai albashi tare da horo." },
            { objective: "O1", q: "Wani shiri na makonni 10 yana koyar da lissafin gini da tsaro don taimaka muku shiga koyon sana'a. Menene shi?", options: ["Shirin kafin koyon sana'a", "Digiri na kwaleji", "Koyon sana'a mai rajista", "Aikin wucin gadi"], answer: 0, why: "Shirin kafin koyon sana'a yana shirya ku don shiga koyon sana'a, kuma zai iya ɗaukar makonni zuwa watanni." }
          ]
        },
        {
          title: "Bincike a Job Finder na apprenticeship.gov",
          objectives: ["O2"],
          minutes: 5,
          goal: "Yin bincike a Job Finder na hukuma da rubuta tallace-tallacen koyon sana'a biyu kusa da ku.",
          text: [
            "Apprenticeship.gov shi ne shafin hukuma na koyon sana'a na Ma'aikatar Kwadago ta Amurka. Apprenticeship Job Finder ɗinsa yana ba ku damar rubuta hanyar sana'a ko wuri don samun guraben aiki kusa da ku.",
            "Job Finder yana tattara tallace-tallace daga wurare da dama. Kowane talla yana da alama kamar \"Registered Occupation\" ko \"Registered Partner\". Kuna neman shiga kai tsaye wajen mai ɗaukar aiki ko mai ɗaukar nauyi, ba ta hanyar apprenticeship.gov ba.",
            "Ku gwada kalma fiye da ɗaya: \"electrician\" (mai wutar lantarki), \"plumber\" (mai famfo), \"IT support\" (tallafin kwamfuta), \"medical assistant\" (mataimakin likita), \"truck driver\" (direban babbar mota). Koyon sana'a ba a gine-gine kaɗai yake ba; akwai shi a kiwon lafiya, kwamfuta (IT), masana'antu da sauransu. Idan ba ku sami komai kusa ba, ku gwada babban birni kusa da ku ko wani sunan aiki daban.",
            "Ku rubuta abin da kuka samu kafin ku rufe shafin. Tallace-tallace suna sauyawa, don haka ranar da kuka gan shi tana da muhimmanci."
          ],
          steps: ["Ku je apprenticeship.gov ku buɗe Apprenticeship Job Finder.", "Ku rubuta hanyar sana'a, birninku ko lambar ZIP, ko duka biyun.", "Ku buɗe talla ɗaya ku karanta wane ne mai ɗaukar nauyi, ina yake da yadda ake neman shiga.", "Ku rubuta mai ɗaukar nauyi, sunan aiki, wuri, yadda ake neman shiga da ranar yau.", "Ku maimaita da wani sunan aiki har sai kun sami tallace-tallace biyu."],
          words: [["Talla (listing)", "gurbin aiki ko shiri ɗaya da aka sanya a shafin intanet."], ["Hanyar sana'a (career path)", "irin aikin da kuke son yi a tsawon lokaci, kamar mai wutar lantarki ko tallafin kwamfuta."], ["Lambar ZIP (ZIP code)", "lamba mai haruffa biyar ta yankinku a adireshin Amurka."]],
          slides: [
            { title: "Wurin hukuma na bincike", bullets: ["apprenticeship.gov, daga Ma'aikatar Kwadago ta Amurka", "Ku yi amfani da Apprenticeship Job Finder", "Ku nema ta hanyar sana'a, wuri ko duka biyun"] },
            { title: "Karanta talla", bullets: ["Wane ne mai ɗaukar nauyi ko mai ɗaukar aiki", "Ina aikin yake", "Yadda ake neman shiga: kuna nema kai tsaye wajen mai ɗaukar nauyi"] },
            { title: "Dabarun bincike", bullets: ["Ku gwada sunayen aiki da dama", "Ba gine-gine kaɗai ba: kiwon lafiya, IT, masana'antu", "Babu komai kusa? Ku gwada babban birni kusa da ku"] },
            { title: "Ku rubuta shi", bullets: ["Mai ɗaukar nauyi, sunan aiki, wuri", "Yadda ake neman shiga da ranar da kuka gan shi"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Mai nemo ayyukan koyon sana'a (Job Finder)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov: Masu neman aiki (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" }
          ],
          tryIt: "Ku buɗe Apprenticeship Job Finder. Ku nemi wata sana'a ɗaya da kuke so kusa da lambar ZIP ɗinku. Ku rubuta tallace-tallace biyu: mai ɗaukar nauyi, sunan aiki, wuri, yadda ake neman shiga da ranar yau. Idan ba ku sami ko ɗaya ba, ku gwada wasu sunayen aiki biyu ko wani birni na kusa.",
          youCanNow: "yin bincike a Job Finder na apprenticeship.gov da rubuta tallace-tallace biyu na gaske da yadda ake neman shiga.",
          quickCheck: [
            { objective: "O2", q: "Kun sami koyon sana'a a Job Finder. Wajen wa kuke neman shiga?", options: ["Fadar White House", "Ma'aikatan apprenticeship.gov", "Duk shafin da ya kwafi tallan", "Mai ɗaukar aiki ko mai ɗaukar nauyi da ke cikin tallan"], answer: 3, why: "Apprenticeship.gov ya ce kuna neman shiga kai tsaye wajen mai ɗaukar aiki ko mai ɗaukar nauyi." },
            { objective: "O2", q: "Binciken ku na \"electrician\" a ƙaramin garinku bai nuna komai ba. Wane mataki na gaba ne mai kyau?", options: ["Ku daina neman koyon sana'a", "Ku biya wani shafi ya nemo muku", "Ku gwada babban birni na kusa ko wani sunan aiki", "Ku yi bincike sau ɗaya kawai a shekara"], answer: 2, why: "Gwada yanki mafi faɗi ko wasu sunaye sau da yawa yana nuna tallace-tallacen da binciken farko bai gani ba." }
          ]
        },
        {
          title: "American Job Center ɗinku da shirye-shiryen horo kyauta",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gano American Job Center mafi kusa da ku da rubuta tambayoyin da za ku yi game da horo kyauta.",
          text: [
            "American Job Centers (AJCs) ofisoshin gwamnati ne kyauta, da ake gudanarwa da kuɗin Ma'aikatar Kwadago ta Amurka (DOL), waɗanda ke taimaka wa mutane samun aiki da horo. Ku nemo ɗaya a CareerOneStop.org (daga Ma'aikatar Kwadago) ko ku kira layin DOL a 1-877-US-2JOBS (1-877-872-5627). Wasu jihohi suna kiran su da sunan yanki, kamar WorkSource ko cibiyar sana'a (career center).",
            "Ta hanyar dokar Workforce Innovation and Opportunity Act (WIOA), ma'aikatan AJC za su iya ba da ayyukan shawarar sana'a da taimakon biyan kuɗin horo idan kun cancanta. Ma'aikatar Kwadago ta ce ana fifita masu karɓar tallafin gwamnati, sauran masu ƙaramin kuɗin shiga da masu buƙatar taimakon ƙwarewa na asali, kuma tsofaffin sojoji ana fifita su a duk shirye-shiryen aiki da DOL ke ɗaukar nauyinsu. Ayyuka sun bambanta bisa jiha, don haka ku tambaya.",
            "Sauran shirye-shiryen da za ku tambaya game da su: Job Corps (horo da masauki kyauta ga matasa, yawanci masu shekara 16 zuwa 24; ku duba jobcorps.gov ko ku kira 800-733-5627 don guraben da ake da su yanzu); YouthBuild (masu shekara 16 zuwa 24 da suka bar makaranta ba tare da diploma ba: gine-gine da wasu ƙwarewa yayin kammala karatu); Reentry Employment Opportunities ga masu dawowa gida daga gidan yari; kuma, ga tsofaffin sojoji, GI Bill, wanda VA (hukumar tsofaffin sojoji) ta ce za a iya amfani da shi a koyon sana'a da yawa da horo a wurin aiki.",
            "Ku je da tambayoyinku a rubuce. Za ku fi amfana da ziyara ɗaya."
          ],
          steps: ["Ku nemi American Job Center da lambar ZIP ɗinku a CareerOneStop, ko ku kira 1-877-US-2JOBS.", "Ku rubuta adireshin cibiyar, lokutan aiki da lambar waya.", "Ku rubuta tambayoyinku: kuɗin horo, shirye-shirye kusa da ku, koyon sana'a, taimako ga yanayinku.", "Ku kira ko ku ziyarta ku rubuta bayanai, har da sunan mutumin da kuka yi magana da shi."],
          words: [["American Job Center (AJC)", "ofishin gwamnati kyauta da ke taimaka wa mutane samun aiki da horo."], ["WIOA", "Workforce Innovation and Opportunity Act, dokar Amurka da ke ɗaukar nauyin cibiyoyin aiki da taimakon horo."], ["Cancanta (eligible)", "cika ƙa'idojin samun wani taimako."], ["Fifiko a samun taimako (priority of service)", "a fara yi muku hidima; tsofaffin sojoji suna da shi a shirye-shiryen aiki da DOL ke ɗaukar nauyinsu."], ["GI Bill", "tallafin karatu na VA ga tsofaffin sojoji da wasu 'yan iyalinsu."]],
          slides: [
            { title: "American Job Centers", bullets: ["Ofisoshin gwamnati kyauta na aiki da horo", "Ku nemo ɗaya: CareerOneStop.org ko 1-877-US-2JOBS", "Zai iya samun sunan yanki a jiharku"] },
            { title: "Taimakon biyan kuɗin horo (WIOA)", bullets: ["Shawarar sana'a da kuɗin horo idan kun cancanta", "Fifiko: masu tallafin gwamnati, ƙaramin kuɗin shiga, ƙwarewa na asali", "Tsofaffin sojoji suna da fifiko a samun taimako"] },
            { title: "Ƙarin shirye-shiryen da za ku tambaya", bullets: ["Job Corps: yawanci shekara 16-24, kyauta, ku duba matsayinsa", "YouthBuild: shekara 16-24 ba tare da diploma ba", "Shirye-shiryen masu dawowa gida; GI Bill don koyon sana'ar tsofaffin sojoji"] },
            { title: "Ku je a shirye", bullets: ["Ku rubuta tambayoyinku da farko", "Ku rubuta bayanai da sunan ma'aikacin"] }
          ],
          sources: [
            { name: "Ma'aikatar Kwadago ta Amurka: Shirin WIOA na manya", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" },
            { name: "CareerOneStop: Nemo American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "Job Corps", url: "https://www.jobcorps.gov/" },
            { name: "Ma'aikatar Kwadago ta Amurka: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" },
            { name: "Ma'aikatar Kwadago ta Amurka: Shirye-shiryen matasa da masu dawowa gida", url: "https://www.dol.gov/agencies/eta/youth" },
            { name: "VA: Horo a wurin aiki da koyon sana'a", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Ku nemo American Job Center mafi kusa da ku ku rubuta adireshinsa, lokutan aiki da wayarsa. Sannan ku rubuta tambayoyi huɗu da za ku yi, misali: \"Shin WIOA zai iya taimakawa wajen biyan kuɗin horo a fannina?\", \"Waɗanne shirye-shiryen koyon sana'a ko kafin koyon sana'a ne ke kusa da nan?\", \"Akwai taimako ga matasa, tsofaffin sojoji ko masu tarihin laifi?\", \"Me zan kawo a ziyarata ta farko?\"",
          youCanNow: "gano American Job Center ɗinku da zuwa da tambayoyi game da horo kyauta da shirye-shirye.",
          quickCheck: [
            { objective: "O3", q: "A ina za ku sami taimako kyauta wajen neman kuɗin horo da shirye-shirye kusa da ku?", options: ["American Job Center", "Saƙon wani baƙo a kafofin sada zumunta", "Kamfanin da ke karɓar kuɗi don sama muku aiki", "Kwalejin kuɗi kawai"], answer: 0, why: "American Job Centers ofisoshin gwamnati ne kyauta da ke taimakawa da aiki da horo, har da kuɗin WIOA." },
            { objective: "O3", q: "Wace tambaya ce mafi kyau da za ku yi a American Job Center?", options: ["\"Za ku iya yi mini aikina?\"", "\"Kuna sayar da katin kyauta (gift card)?\"", "\"Menene adireshin gidanku?\"", "\"Shin WIOA zai iya taimakawa wajen biyan kuɗin horo a fannina?\""], answer: 3, why: "Tambaya game da kuɗin horon WIOA zai iya buɗe muku horo kyauta idan kun cancanta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ku san zaɓuɓɓukanku da inda za ku same su",
        questions: [
          { objective: "O1", q: "Me ke gaskiya game da koyon sana'a mai rajista?", options: ["Kuna biyan kuɗi mai yawa don shiga", "Kuna samun albashi kuma kuna koyo a wurin aiki", "Kwas ne na aji kaɗai", "Ba ya taɓa ƙarewa da takardar shaida"], answer: 1, why: "Masu koyon sana'a suna samun albashi tun rana ta farko kuma suna gamawa da takardar shaida da ake amincewa da ita." },
          { objective: "O1", q: "Maya, mai shekara 19, ba ta da diploma kuma tana son ƙwarewar gine-gine yayin da take kammala karatu. Wane shiri ya dace?", options: ["Jami'a ta shekara huɗu", "Bashin kamfani mai zaman kansa", "YouthBuild", "Aikin koyo ba albashi a ƙasar waje"], answer: 2, why: "YouthBuild yana hidima ga masu shekara 16-24 da suka bar makaranta ba tare da diploma ba, yana haɗa ƙwarewar aiki da karatu." },
          { objective: "O2", q: "Wane ne shafin hukuma na Amurka don neman koyon sana'a?", options: ["apprenticeship.gov", "Duk shafin da ke da \"jobs\" a sunansa", "Wani rukuni a kafofin sada zumunta", "Hanyar haɗi (link) a saƙon waya"], answer: 0, why: "Apprenticeship.gov shi ne shafin hukuma na koyon sana'a na Ma'aikatar Kwadago ta Amurka, mai Job Finder." },
          { objective: "O2", q: "Me ya kamata ku rubuta daga kowane talla?", options: ["Launin tambarin kawai", "Ba komai; za ku iya samunsa daga baya", "Kalmar sirrinku ta shafin", "Mai ɗaukar nauyi, sunan aiki, wuri, yadda ake neman shiga da rana"], answer: 3, why: "Tallace-tallace suna sauyawa, don haka kuna rubuta muhimman bayanai da ranar da kuka gan su." },
          { objective: "O3", q: "Darnell tsohon soja ne. Me Ma'aikatar Kwadago ta ce yake samu a shirye-shiryen aiki da DOL ke ɗaukar nauyinsu?", options: ["Babu wani ƙari", "Mota kyauta", "Fifiko a samun taimako (priority of service)", "Tabbacin samun aiki"], answer: 2, why: "Tsofaffin sojoji suna da fifiko a samun taimako a duk shirye-shiryen aiki da DOL ke ɗaukar nauyinsu." }
        ]
      }
    },
    {
      name: "Babi na 2: Ku zaɓa da kyau ku nemi shiga",
      lessons: [
        {
          title: "Shirin na gaske ne kuma ya cancanta?",
          objectives: ["O4"],
          minutes: 5,
          goal: "Duba tallan shiri don alamun cewa na gaske ne, da alamun zamba.",
          text: [
            "Wasu tallace-tallace suna alƙawarin \"aiki tabbatacce\" idan kun biya kuɗin horo ko satifiket. FTC (hukumar Amurka da ke yaƙi da zamba) ta ce masu ɗaukar aiki masu gaskiya, har da gwamnatin tarayya, ba za su taɓa tambayar ku ku biya kuɗi don samun aiki ba, kuma biyan kuɗin \"horo\" ko satifiket marasa amfani zamba ce da aka saba.",
            "Sauran alamun gargaɗi na FTC: cak (check) da dole ku saka a banki sannan ku mayar da wani ɓangare na kuɗin, kuɗin farko ga kamfanin sama aiki, baƙo da ya tuntuɓe ku kwatsam da aiki, da albashi mai yawa don ɗan aiki kaɗan.",
            "Alamun shiri na gaske: an jera shi a apprenticeship.gov, American Job Center ɗinku, shafin .gov na jiha, ƙungiyar ma'aikata ko kwalejin al'umma; za ku iya samun adireshinsa da wayarsa da kanku; kuma yana faɗa muku a fili nawa yake ci, tsawon lokacinsa, wace takardar shaida za ku samu, da mutane nawa ke kammalawa su sami aiki.",
            "Shiri na gaske zai iya rashin dacewa da ku. Ku duba jadawalin lokaci, wurin da tafiya, da ko takardar shaidar ita ce wadda masu ɗaukar aiki a yankinku ke nema."
          ],
          steps: ["Ku nemi shirin a shafin hukuma (apprenticeship.gov, AJC ɗinku, shafin .gov na jiha, ƙungiyar ma'aikata ko kwaleji).", "Ku nemo adireshinsa da wayarsa da kanku; kada ku yi amfani da lambar da ke cikin tallan kaɗai.", "Ku duba alamun zamba: biya don samun aiki, kuɗin farko, cak-ku-mayar, albashin da ya yi kyau fiye da kima.", "Ku tambaya: kuɗi, tsawon lokaci, takardar shaida, jadawali, da mutane nawa ke kammalawa su sami aiki.", "Ba ku tabbata ba? Ku tambayi American Job Center ɗinku kafin ku sa hannu ko ku biya komai."],
          words: [["Zamba (scam)", "dabara don karɓe kuɗinku ko bayananku na sirri."], ["Kuɗin farko (upfront fee)", "kuɗin da dole ku biya kafin ku sami komai."], ["FTC", "Federal Trade Commission, hukumar Amurka da ke gargaɗi game da zamba kuma take yaƙi da ita."], ["Yawan kammalawa (completion rate)", "mutane nawa daga cikin waɗanda suka fara shiri ke kammala shi."]],
          slides: [
            { title: "Kada ku taɓa biyan kuɗi don samun aiki", bullets: ["FTC: masu ɗaukar aiki masu gaskiya ba sa neman kuɗi don ɗaukar ku", "Ku kula da \"horo\" na kuɗi da ke alƙawarin aiki"] },
            { title: "Alamun gargaɗi na zamba", bullets: ["Kuɗin farko don sama muku aiki", "Ku saka cak a banki, ku mayar da kuɗi", "Baƙo yana ba ku aiki; albashi mai yawa don ɗan aiki"] },
            { title: "Alamun cewa na gaske ne", bullets: ["An jera shi a apprenticeship.gov, AJC, .gov, ƙungiyar ma'aikata ko kwaleji", "Za ku iya samun adireshinsa da wayarsa da kanku", "Kuɗi, tsawon lokaci, takardar shaida da sakamakon aiki a fili"] },
            { title: "Na gaske ne, amma ya dace da ku?", bullets: ["Jadawalin lokaci da tafiya", "Takardar shaida da masu ɗaukar aiki na yankinku ke so"] }
          ],
          sources: [
            { name: "FTC: Zamba ta aiki (Job scams)", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "Apprenticeship.gov: Mai nemo ayyukan koyon sana'a (Job Finder)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Ku ɗauki shiri ɗaya da kuka samu a Darasi na 2 ko na 3. Ku yi bincike uku: shin yana cikin jerin hukuma, za ku iya samun adireshinsa da wayarsa da kanku, kuma yana nuna wata alamar zamba? Ku rubuta \"na gaske\", \"ban tabbata ba\" ko \"zamba\" da dalili. Sannan ku karanta wannan tallan ƙirƙira ku rubuta alamun gargaɗinsa: \"Ku sami aiki tabbatacce na $40/awa! Ku biya $300 yau don satifiket ɗinku. Ku tura mana saƙo yanzu.\"",
          youCanNow: "duba ko shiri na gaske ne kuma ya cancanci lokacinku, da gane alamun zamba ta \"biya don samun aiki\".",
          quickCheck: [
            { objective: "O4", q: "Wani talla ya ce: \"Ku biya $250 don satifiket ɗinku ku sami aiki tabbatacce.\" Me za ku yi?", options: ["Ku biya da sauri kafin ya cika", "Ku tura bayanan bankinku don riƙe gurbi", "Ku ɗauke shi a matsayin zamba mai yiwuwa ku tambayi AJC ɗinku", "Ku tura wa abokai don su ma su biya"], answer: 2, why: "FTC ta ce masu ɗaukar aiki masu gaskiya ba sa taɓa tambayar ku ku biya kuɗi don samun aiki." },
            { objective: "O4", q: "Wanne ne alamar cewa shiri na gaske ne?", options: ["An jera shi a apprenticeship.gov ko shafin .gov na jiha", "Lambar waya kawai yake da ita a cikin saƙo", "Yana tambayar ku ku saka cak ku mayar da kuɗi", "Ba zai faɗa muku nawa yake ci ba"], answer: 0, why: "Kasancewa a jerin shafin hukuma da bayyana kuɗi a fili alamun shiri na gaske ne." }
          ]
        },
        {
          title: "Abubuwan da ake buƙata da takardu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Rubuta abubuwan da shiri ke buƙata da takardun da kuke buƙata, da nuna waɗanda kuke da su.",
          text: [
            "Kowane shiri yana tsara abubuwan da yake buƙata, kuma suna cikin tallan ko a shafin mai ɗaukar nauyi. Na yau da kullum su ne mafi ƙarancin shekaru, diploma na sakandare ko makamancinsa (GED ko HiSET), gwajin lissafi ko karatu na asali, iya yin aikin ƙarfi, ingantaccen lasisin tuƙi ga wasu sana'o'i, da gwajin ƙwayoyi (drug test).",
            "Takardun da aka saba: katin shaida mai hoto, shaidar diploma ko makamancinsa, takardun sakamakon makaranta (transcripts), takardar bayanin aiki (résumé), kuma wani lokaci katin Social Security ko shaidar cewa za ku iya aiki a Amurka. Tsofaffin sojoji za su iya buƙatar DD-214 ɗinsu don nuna aikin soja, kuma masu amfani da GI Bill suna neman tallafin karatu na VA.",
            "Ba ku da ɗaya tukuna? Har yanzu za ku iya tsarawa. Katin shaida na jiha yana fitowa daga DMV na jiharku (ofishin lasisi da motoci). Kwafin diploma yana fitowa daga tsohuwar makarantarku ko ofishin ilimi na jiha. American Job Center zai iya taimakawa da yawancin waɗannan, kuma shirye-shiryen masu dawowa gida sau da yawa suna taimaka musu samun katin shaida.",
            "Ku ajiye kwafi, ba na asali ba, a fayil ɗaya. Kada ku taɓa tura lambobi na sirri ga wanda ba ku tabbatar cewa na gaske ne ba."
          ],
          steps: ["Ku buɗe tallan ko shafin mai ɗaukar nauyi ku nemo abubuwan da ake buƙata.", "Ku rubuta kowane abin da ake buƙata da kowace takarda a jerin dubawa.", "Ku nuna kowanne: Ina da shi, Ina buƙatarsa, ko Ban tabbata ba.", "Kusa da kowane Ina buƙatarsa, ku rubuta inda za ku same shi.", "Ku sa kwafi a fayil ɗaya ko wuri mai aminci a wayarku."],
          words: [["Abin da ake buƙata (requirement)", "abin da dole ku kasance da shi ko ku yi don neman shiga, kamar mafi ƙarancin shekaru ko diploma."], ["Makamancin diploma (equivalency)", "jarabawa kamar GED ko HiSET da ake ƙidaya kamar diploma na sakandare."], ["Takardar sakamako (transcript)", "jerin darussa da maki na hukuma daga makaranta."], ["DD-214", "takardar soja da ke nuna aikin tsohon soja da yadda ya bar aikin."]],
          slides: [
            { title: "Abubuwan da aka saba buƙata", bullets: ["Mafi ƙarancin shekaru; diploma, GED ko HiSET", "Gwajin lissafi ko karatu na asali", "Lasisin tuƙi ko gwajin ƙwayoyi ga wasu sana'o'i"] },
            { title: "Takardun da aka saba", bullets: ["Katin shaida mai hoto; diploma ko makamancinsa; transcripts", "Résumé; shaidar cewa za ku iya aiki a Amurka", "Tsofaffin sojoji: DD-214"] },
            { title: "Akwai abin da ya rage?", bullets: ["Katin shaida na jiha: DMV na jiharku", "Kwafin diploma: tsohuwar makarantarku ko ofishin jiha", "Ku nemi taimako a AJC ko shirin masu dawowa gida"] },
            { title: "Ku ajiye su lafiya", bullets: ["Kwafi, ba na asali ba, a fayil ɗaya", "Ku tura lambobi na sirri ga shirye-shiryen da kuka tabbatar kaɗai"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Masu neman aiki (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "VA: Horo a wurin aiki da koyon sana'a", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Ga shiri ɗaya da kuke so, ku yi jerin dubawa na kowane abin da ake buƙata da kowace takarda daga tallansa. Ku nuna kowanne Ina da shi, Ina buƙatarsa ko Ban tabbata ba, kuma ku rubuta inda za ku sami kowane Ina buƙatarsa. Kada ku rubuta wata lambar shaida ta gaske a jerin.",
          youCanNow: "rubuta abubuwan da shiri ke buƙata da takardunsa, ganin abin da ya rage muku da sanin inda za ku same shi.",
          quickCheck: [
            { objective: "O5", q: "A ina za ku sami ainihin abubuwan da shiri ke buƙata?", options: ["Hasashen aboki", "Tallan shirin ko shafin mai ɗaukar nauyi na kansa", "Duk wani sharhi a kafofin sada zumunta", "Iri ɗaya ne ga kowane shiri"], answer: 1, why: "Kowane shiri yana tsara abubuwan da yake buƙata, don haka kuna karanta tallansa ko shafinsa na hukuma." },
            { objective: "O5", q: "Luis, tsohon soja, yana son amfani da GI Bill don koyon sana'a. Wace takarda ce za ta iya taimakawa wajen nuna aikin sojansa?", options: ["Katin wurin motsa jiki", "Katin ɗakin karatu", "Rasidin shago", "DD-214 ɗinsa"], answer: 3, why: "DD-214 yana nuna aikin tsohon soja da yadda ya bar aikin." }
          ]
        },
        {
          title: "Yin tsarin neman shigarku",
          objectives: ["O6"],
          minutes: 5,
          goal: "Rubuta tsarin neman shiga na shirye-shirye biyu da matakai masu ranaku da ranar bibiya.",
          text: [
            "Koyon sana'a da shirye-shiryen horo sau da yawa suna buɗe neman shiga a wasu lokuta kaɗai, kuma wasu suna cika da sauri. Tsari a rubuce mai ranaku yana hana ku rasa lokacin.",
            "Ga kowane shiri, ku rubuta ranar ƙarshe ko ranar buɗewa ta gaba, yadda ake neman shiga (a intanet, da kanku, ko a taron bayani), da duk wata ranar jarabawa. Idan ba ku sami rana ba, matakinku na farko shi ne ku kira ko ku aika imel ku tambaya.",
            "Sannan ku rubuta matakanku na gaba, kowanne da rana: samun takardar da ta rage, sabunta résumé ɗinku, atisaye don gwajin lissafi, zuwa taron bayani, tura takardar neman shiga, bibiya. Bibiya mai kyau ita ce gajeren kira ko imel mai ladabi kusan mako ɗaya zuwa biyu bayan kun nemi shiga, sai dai idan shirin ya faɗa muku wani lokaci daban.",
            "Ku nemi shiga shiri fiye da ɗaya. Idan ɗaya ya ce a'a ko ya sa ku a jerin jira, har yanzu kuna da wata hanya, kuma za ku iya tambayar me zai sa ku zama mai nema mafi ƙarfi a gaba."
          ],
          steps: ["Ku zaɓi shirye-shirye biyu da kuka tabbatar cewa na gaske ne.", "Ku rubuta ranar ƙarshe ko ranar buɗewa ta gaba ta kowanne da yadda ake neman shiga.", "Ku rubuta matakanku na gaba, da rana ga kowanne.", "Ku sa ranakun a kalandar wayarku ko a takardar da kuke gani kowace rana.", "Ku sanya ranar bibiya bayan kun nemi shiga."],
          words: [["Ranar ƙarshe (deadline)", "rana ta ƙarshe da za ku iya neman shiga."], ["Taron bayani (information session)", "taro inda shiri ke bayanin yadda yake aiki da yadda ake neman shiga."], ["Jerin jira (waiting list)", "jerin mutanen da za su sami gurbi idan wani ya buɗe."], ["Bibiya (follow up)", "tuntuɓar shiri bayan kun nemi shiga don jin halin takardarku."]],
          slides: [
            { title: "Dalilin tsari mai ranaku", bullets: ["Shirye-shirye da yawa suna buɗewa a wasu lokuta kaɗai", "Wasu suna cika da sauri", "Ranaku suna hana ku rasa lokacin"] },
            { title: "Ga kowane shiri, ku rubuta", bullets: ["Ranar ƙarshe ko ranar buɗewa ta gaba", "Yadda ake neman shiga da duk wata ranar jarabawa", "Ba ku sami rana ba? Ku kira ko ku aika imel ku tambaya"] },
            { title: "Matakai, kowanne da rana", bullets: ["Samun takardu; sabunta résumé ɗinku", "Atisaye don gwaji; zuwa taron bayani", "Neman shiga, sannan bibiya"] },
            { title: "Koyaushe ku sami hanya ta biyu", bullets: ["Ku nemi shiga shirye-shirye biyu", "A'a ko jerin jira ba ƙarshe ba ne", "Ku tambayi yadda za ku fi ƙarfi a gaba"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Mai nemo ayyukan koyon sana'a (Job Finder)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Ma'aikatar Kwadago ta Amurka: Shirin WIOA na manya", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" }
          ],
          tryIt: "Ku yi Tsarin Neman Shiga Shirinku: aikin da kuke so, shirye-shirye biyu da kuka duba da ranakun ƙarshensu da yadda ake neman shiga, jerin dubawar takardunku, da matakai biyar na gaba masu ranaku, wanda na ƙarshe ranar bibiya ce. Ku sa ranar mataki na farko a wayarku ko kalanda yau.",
          youCanNow: "rubuta tsarin neman shiga mai matakai masu ranaku na shirye-shirye biyu da bibiya bayan kun nemi shiga.",
          quickCheck: [
            { objective: "O6", q: "Ba ku sami ranar ƙarshe ta neman shiga wani shiri ba. Menene matakinku na farko?", options: ["Ku kira ko ku aika wa shirin imel ku tambaya", "Ku ɗauka babu ranar ƙarshe", "Ku jira sai shekara mai zuwa", "Ku nemi shiga wani shiri kawai ba tare da tunani ba"], answer: 0, why: "Tambayar shirin kai tsaye tana ba ku ainihin ranar don tsarinku." },
            { objective: "O6", q: "Me yasa za ku nemi shiga shirye-shirye biyu maimakon ɗaya?", options: ["Shirye-shirye suna buƙatar haka", "Ya fi araha", "Don har yanzu ku sami hanya idan ɗaya ya ce a'a ko ya sa ku a jerin jira", "Don ku tsallake ranakun ƙarshe"], answer: 2, why: "Shiri na biyu yana sa ku ci gaba idan na farko bai yi nasara ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ku zaɓa da kyau ku nemi shiga",
        questions: [
          { objective: "O4", q: "Wanne ne alamar gargaɗi ta zamba ta aiki, a cewar FTC?", options: ["Shirin yana a apprenticeship.gov", "Dole ku biya kuɗi don samun aikin", "Shirin yana nuna adireshinsa", "Shirin yana bayanin tsawon lokacinsa"], answer: 1, why: "FTC ta ce masu ɗaukar aiki masu gaskiya ba sa taɓa tambayar ku ku biya kuɗi don samun aiki." },
          { objective: "O4", q: "Kun karɓi cak daga \"sabon mai ɗaukar aiki\" kuma dole ku mayar da wani ɓangare ta katin kyauta (gift card). Menene wannan?", options: ["Matakin ɗaukar aiki na yau da kullum", "Kyautar horo", "Zamba mai yiwuwa", "Mayar da kuɗin haraji"], answer: 2, why: "FTC ta ce babu mai ɗaukar aiki mai gaskiya da zai aiko da cak ya tambaye ku ku mayar da wani ɓangare." },
          { objective: "O5", q: "Wani talla yana buƙatar diploma na sakandare, kuma Tasha ta ci GED. Me ke gaskiya?", options: ["Ana yawan karɓar GED a matsayin makamancin diploma na sakandare; ta duba tallan", "Ba za ta taɓa iya neman shiga ba", "Dole ta biya kuɗi don maye gurbinsa", "Kada ta rubuta shi"], answer: 0, why: "GED makamancin diploma na sakandare ne da shirye-shirye da yawa ke karɓa; tallan yana faɗin abin da ake buƙata." },
          { objective: "O5", q: "Kuna buƙatar katin shaida na jiha don neman shiga. A ina ake yawan samunsa?", options: ["Wani rukuni a kafofin sada zumunta", "DMV na jiharku", "Mai ɗaukar nauyin koyon sana'ar", "Duk shafin da ke sayar da katin shaida"], answer: 1, why: "Katin shaida na jiha yana fitowa daga DMV na jiharku; AJC ko shirin masu dawowa gida zai iya taimakawa." },
          { objective: "O6", q: "Wane matakin tsari ne aka fi rubutawa da kyau?", options: ["\"Ku nemi shiga wani lokaci\"", "\"Ku yi tunani a kai\"", "\"Wataƙila wata mai zuwa\"", "\"Ku tura takardar neman shiga ta ACME electrical a intanet kafin 3 ga Maris\""], answer: 3, why: "Mataki mai kyau yana faɗin me, ta yaya da yaushe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Neman Koyon Sana'a Mai Albashi da Shirye-shiryen Horon Aiki",
    questions: [
      { objective: "O1", q: "Menene koyon sana'a mai rajista (Registered Apprenticeship)?", options: ["Aiki mai albashi tare da horo wanda ke ƙarewa da takardar shaida da ake amincewa da ita", "Kwas na bidiyo kyauta", "Baje kolin aiki na kwana ɗaya", "Bashin kwaleji"], answer: 0, why: "Masu koyon sana'a suna samun albashi, suna koyo a wurin aiki da a aji, kuma suna gamawa da takardar shaida." },
      { objective: "O1", q: "Menene amfanin shirin kafin koyon sana'a?", options: ["Maye gurbin diploma na sakandare", "Shirya ku don shiga koyon sana'a", "Biyan bashi", "Kammala digiri na shekara huɗu"], answer: 1, why: "Shirin kafin koyon sana'a yana shirya mutane don shiga koyon sana'a mai rajista." },
      { objective: "O1", q: "Jamal yana buƙatar samun kuɗi nan da nan kuma yana son koyon sana'a. Wanne ya fi dacewa?", options: ["Kwas na intanet ba albashi", "Shirin jami'a na dogon lokaci", "Koyon sana'a mai rajista", "Jira shekara ɗaya"], answer: 2, why: "Koyon sana'a yana biyan albashi yayin da kuke koyo." },
      { objective: "O2", q: "Me za ku iya rubutawa a Job Finder na apprenticeship.gov?", options: ["Lambar Social Security ɗinku", "Lambar sirrin bankinku (PIN)", "Kalmar sirrinku", "Hanyar sana'a ko wuri"], answer: 3, why: "Job Finder yana bincike ta hanyar sana'a, wuri ko duka biyun." },
      { objective: "O2", q: "A waɗanne fannoni ake samun koyon sana'a?", options: ["Gine-gine kaɗai", "Fannoni da yawa, har da kiwon lafiya, IT da masana'antu", "Aikin soja kaɗai", "Noma kaɗai"], answer: 1, why: "Akwai koyon sana'a a fannonin masana'antu da yawa, ba gine-gine kaɗai ba." },
      { objective: "O2", q: "Me yasa za ku rubuta ranar da kuka ga talla?", options: ["Tallace-tallace suna sauyawa, don haka ranar tana nuna yadda yake sabo", "Shafin yana buƙatar haka", "Don samun ragin farashi", "Ba shi da amfani"], answer: 0, why: "Guraben aiki suna sauyawa, don haka rubuta ranar yana taimaka muku sanin lokacin aiki ko sake dubawa." },
      { objective: "O3", q: "Ta yaya za ku gano American Job Center mafi kusa da ku?", options: ["Ku tambayi baƙo a intanet", "Ku biya kamfanin sama aiki", "Ku nema a CareerOneStop ko ku kira 1-877-US-2JOBS", "Ku jira wasiƙa"], answer: 2, why: "CareerOneStop da layin kyauta na DOL suna taimaka muku gano AJC na yankinku." },
      { objective: "O3", q: "Wace dokar Amurka ce ke ɗaukar nauyin cibiyoyin aiki kuma za ta iya taimaka wa waɗanda suka cancanta biyan kuɗin horo?", options: ["WIOA", "HIPAA", "OSHA", "FAFSA"], answer: 0, why: "Workforce Innovation and Opportunity Act tana ɗaukar nauyin American Job Centers da taimakon horo." },
      { objective: "O3", q: "Kayla mai shekara 20 ce kuma tana son horon sana'a kyauta tare da masauki. Wane shiri ya kamata ta duba, har da matsayinsa na yanzu?", options: ["Bashin ranar albashi (payday loan)", "Tallan sansanin horo mai zaman kansa", "Tayin katin kyauta", "Job Corps"], answer: 3, why: "Job Corps shiri ne kyauta ga matasa, yawanci masu shekara 16-24; tana duba jobcorps.gov don guraben da ake da su yanzu." },
      { objective: "O3", q: "Wane tallafin tsofaffin sojoji ne VA ta ce za a iya amfani da shi a koyon sana'a da yawa da horo a wurin aiki?", options: ["Medicare", "GI Bill", "Inshorar rashin aikin yi", "Social Security"], answer: 1, why: "VA ta ce za a iya amfani da tallafin GI Bill a koyon sana'a da yawa da horo a wurin aiki." },
      { objective: "O4", q: "Wani shafi yana neman kuɗi don ba ku takardar neman \"aikin gwamnatin tarayya\". Me ke gaskiya?", options: ["Dole ku biya don neman shiga", "Ragin farashi ne", "Takardun neman aikin gwamnatin tarayya kyauta ne, don haka wannan alamar gargaɗi ce", "Tsofaffin sojoji kaɗai ke biya"], answer: 2, why: "FTC ta ce takardun neman aikin gwamnatin tarayya da na gidan waya na hukuma koyaushe kyauta ne." },
      { objective: "O4", q: "Ta yaya ya kamata ku sami lambar wayar shiri don duba shi?", options: ["Ku nemo ta da kanku a shafin hukuma", "Ku yi amfani da lambar da ke cikin tallan kaɗai", "Ku tambayi mutumin da ya tura muku saƙo", "Ba sai kun duba ba"], answer: 0, why: "Samun bayanan tuntuɓa da kanku yana kare ku daga lambar ƙarya ta ɗan zamba." },
      { objective: "O4", q: "Wani shiri na gaske ne amma yana taro ne a lokacin aikinku kaɗai, sa'o'i biyu daga gida. Me za ku yi?", options: ["Ku shiga ko ta yaya ku bar aikinku", "Ku biya ƙari don riƙe kujera", "Ku yi watsi da jadawalin", "Ku auna dacewarsa ku nemi shiri mafi kusa ko mai lokaci mafi dacewa"], answer: 3, why: "Shiri na gaske dole ne ya dace da jadawalinku da tafiyarku." },
      { objective: "O4", q: "Wanne BA alamar zamba ta aiki ba ce?", options: ["Baƙo yana ba da albashi mai yawa don ɗan aiki", "An jera shirin a shafin .gov na jiharku", "Kuɗin farko don sama muku aiki", "Cak da dole ku mayar da wani ɓangarensa"], answer: 1, why: "Kasancewa a jerin shafin .gov na hukuma alamar shiri na gaske ce." },
      { objective: "O5", q: "Me ya kamata ku yi da takardun da kuke buƙata don neman shiga?", options: ["Ku ajiye kwafi a fayil ɗaya mai aminci", "Ku sanya su a kafofin sada zumunta", "Ku tura na asali ga duk wanda ya tambaya", "Ku jefar da su bayan amfani ɗaya"], answer: 0, why: "Kwafi a wuri ɗaya mai aminci yana sa ku kasance a shirye kuma yana kare na asali." },
      { objective: "O5", q: "Jerin dubawarku ya nuna \"Transcript: Ina buƙatarsa\". Me za ku rubuta kusa da shi?", options: ["Ba komai", "\"Ku bar wannan shirin\"", "Inda za ku same shi, kamar tsohuwar makarantarku", "Kalmar sirrinku"], answer: 2, why: "Rubuta inda za ku sami kowane abin da ya rage yana mayar da jerin dubawa ya zama tsari." },
      { objective: "O5", q: "Wanne ne abin da aka saba buƙata don koyon sana'a?", options: ["Mallakar gida", "Digiri na kwaleji ga kowace sana'a", "Zama memba na kuɗi a wani shafin intanet", "Diploma ko makamancinsa da gwajin lissafi na asali"], answer: 3, why: "Shirye-shirye da yawa suna neman diploma ko makamancinsa da gwajin ƙwarewa na asali; tallan yana faɗin wanne." },
      { objective: "O6", q: "Yaushe ne lokaci mai kyau na bibiya bayan kun nemi shiga, sai dai idan shirin ya faɗi wani abu daban?", options: ["A cikin awa ɗaya", "Kusan mako ɗaya zuwa biyu daga baya", "Ba taɓa ba", "Kowace rana"], answer: 1, why: "Gajeriyar bibiya mai ladabi bayan mako ɗaya zuwa biyu tana nuna sha'awa ba tare da matsi ba." },
      { objective: "O6", q: "Me ke sa mataki na gaba ya zama mai amfani a tsarinku?", options: ["Yana da aiki da rana", "Yana da tsawo sosai", "Ba shi da rana don ya zama mai sassauci", "Ana ajiye shi a kai kaɗai"], answer: 0, why: "Matakai masu aiki da rana su ne waɗanda kuke yi a zahiri." },
      { objective: "O6", q: "Wani shiri ya sa ku a jerin jira. Menene mafi kyawun abin da za ku yi?", options: ["Ku daina neman shirye-shirye", "Ku biya don ku hau gaba a jerin", "Kada ku sake tuntuɓar su", "Ku ci gaba da ɗayan neman shigarku ku tambayi yadda za ku fi ƙarfi"], answer: 3, why: "Hanya ta biyu da neman shawara suna sa ku ci gaba." }
    ]
  },
  // ---- ADDIE: Evaluation (pre-test) ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 3, 6, 7, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Nau'in shiri da ya dace", objective: "O1", notYet: "Tsarin bai faɗi ko kowane shiri koyon sana'a ne, kafin koyon sana'a ko shirin horo ba.", meets: "An faɗi nau'in kowane shiri daidai, kuma mai koyo zai iya faɗin dalilin da yasa ya dace yanzu.", exceeds: "Tsarin yana kuma faɗin abin da mai koyo zai yi bayan kammalawa (misali, kafin koyon sana'a sannan koyon sana'a)." },
      { name: "Shirye-shirye biyu na gaske", objective: "O2", notYet: "Shirye-shirye ƙasa da biyu, ko shiri ba tare da mai ɗaukar nauyi, wuri ko hanyar neman shiga ba.", meets: "Shirye-shirye biyu da mai ɗaukar nauyi, wuri da yadda ake neman shiga, daga apprenticeship.gov, AJC ko wata majiya ta hukuma.", exceeds: "Yana kuma rubuta ranar da aka sami kowanne da shirin ajiya." },
      { name: "Tambayoyin cibiyar aiki", objective: "O3", notYet: "Babu American Job Center ko tambayoyi a rubuce.", meets: "AJC mafi kusa da aƙalla tambayoyi huɗu, ciki har da ɗaya game da kuɗin horo.", exceeds: "Mai koyo ya kira ko ya ziyarta kuma ya rubuta amsoshin da sunan ma'aikacin." },
      { name: "An duba shirye-shirye", objective: "O4", notYet: "Babu binciken da aka nuna, ko shiri da ke neman kuɗi don samun aikin.", meets: "Aƙalla bincike uku ga kowane shiri, ciki har da alamun gargaɗi na zamba, da sakamako.", exceeds: "Yana kuma kwatanta kuɗi, tsawon lokaci, takardar shaida da sakamakon aiki na shirye-shiryen biyu." },
      { name: "Takardu a shirye", objective: "O5", notYet: "Babu jerin takardu, ko an rubuta lambobin shaida na gaske a cikinsa.", meets: "An nuna abubuwan da ake buƙata da takardu da Ina da shi / Ina buƙatarsa, da inda za a sami kowane abin da ya rage.", exceeds: "Duk abubuwan da suka rage suna da ranar samun su." },
      { name: "Tsari mai ranaku", objective: "O6", notYet: "Matakai ba su da ranaku, ko ba su kai biyar ba.", meets: "Matakai biyar ko fiye masu ranaku, ranakun ƙarshe da ranar bibiya.", exceeds: "An riga an yi mataki na farko ko yana cikin kalandar mai koyo." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka tura aƙalla takardar neman shiga koyon sana'a ko horo ɗaya cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ziyarci ko suka kira American Job Center cikin kwanaki 30",
      "Masu koyo da aka karɓa a koyon sana'a, kafin koyon sana'a ko shirin horo cikin watanni 6, bisa faɗin masu koyo ko shirye-shiryen abokan aiki",
      "Masu koyo da suka ce sun guji tayin \"biya don samun aiki\""
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet (kwamfutar ɗakin karatu ko ta American Job Center ma ta isa)",
      "Shafuka kyauta: apprenticeship.gov, careeronestop.org, dol.gov, jobcorps.gov, va.gov",
      "Takarda da alƙalami, ko manhajar rubutu, don jerin dubawa da tsari",
      "Kalanda (ta waya ko ta takarda)",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuna yin binciken \"Gwada yanzu\" kai tsaye; ku haɗa masu koyo da ba su da ƙarfin gwiwa a intanet da abokai.",
      "Kafin zaman, ku nemo American Job Center, YouthBuild da shirye-shiryen kafin koyon sana'a na yankinku don ku nuna zaɓuɓɓuka na gaske na kusa.",
      "Matsayin shirye-shirye yana sauyawa: ku duba jobcorps.gov da apprenticeship.gov a makon da kuke koyarwa ku gyara duk abin da ya tsufa.",
      "Kada ku taɓa tambayar masu koyo su rubuta lambobin shaida, Social Security ko na banki na gaske a takardun atisaye.",
      "Ga masu dawowa gida daga gidan yari, ku shirya bayanan tuntuɓar shirye-shiryen masu dawowa gida da na taimakon katin shaida na yanki; ga tsofaffin sojoji, shafin GI Bill na VA da GI Bill Comparison Tool.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
