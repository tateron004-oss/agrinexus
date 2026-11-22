"use strict";

// Koach Learn course, Hausa (ha) translation of shared/youth-first-job.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const SRC = {
  youthRules: { name: "Ma'aikatar Ƙwadago ta Amurka (US Department of Labor): YouthRules!", url: "https://www.dol.gov/agencies/whd/youthrules" },
  fs43: { name: "Ma'aikatar Ƙwadago ta Amurka: Fact Sheet 43, dokokin aikin yara a ayyukan da ba na gona ba", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
  childLabor: { name: "Ma'aikatar Ƙwadago ta Amurka: Aikin yara (Child labor)", url: "https://www.dol.gov/agencies/whd/child-labor" },
  stateChildLabor: { name: "Ma'aikatar Ƙwadago ta Amurka: Dokokin aikin yara na jihohi", url: "https://www.dol.gov/agencies/whd/state/child-labor" },
  minWage: { name: "Ma'aikatar Ƙwadago ta Amurka: Mafi ƙarancin albashi (Minimum wage)", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
  stateMinWage: { name: "Ma'aikatar Ƙwadago ta Amurka: Dokokin mafi ƙarancin albashi na jihohi", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
  i9: { name: "USCIS: Form I-9, Tabbatar da Izinin Aiki", url: "https://www.uscis.gov/i-9" },
  w4: { name: "IRS: Game da Form W-4", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  irs751: { name: "IRS: Topic 751, adadin harajin Social Security da Medicare da ake cirewa", url: "https://www.irs.gov/taxtopics/tc751" },
  oshaYoung: { name: "OSHA: Matasa ma'aikata (Young workers)", url: "https://www.osha.gov/young-workers" },
  ftcJobScams: { name: "FTC: Zambar aiki (Job scams)", url: "https://consumer.ftc.gov/articles/job-scams" }
};

module.exports = {
  id: "youth-first-job-ha",
  lang: "ha",
  translationOf: "youth-first-job",
  category: "Workforce Development",
  name: "Aikinku na Farko: Izinin Aiki, Albashi da Abin da Shugabanni ke Tsammani",
  skills: "Duba dokokin aikin matasa, Shirya takardun aiki, Karanta takardar albashi (paystub), Rubuta sa'o'in aikinku, Biyan bukatun shugaba, Magana idan akwai haɗari",
  outcome: "fara aikinku na farko a shirye: duba cewa aikin da sa'o'in sun halatta ga shekarunku, tara takardun aikinku, karanta da duba takardar albashinku, yin abin da shugaba ke tsammani, da yin magana idan wani abu yana da haɗari ko ba daidai ba.",
  about: [
    "Wannan kwas ɗin na matasa ne da ke shirin fara aikin farko, kamar a shago, gidan abinci, sansanin bazara (summer camp), gidan sinima ko ofis. Yana kuma taimakon iyaye, masu ba da shawara da shirye-shiryen aikin matasa.",
    "Za ku duba dokokin da suka shafi shekarunku, ku shirya takardunku, ku karanta takardar albashi ku kwatanta ta da sa'o'inku, ku koyi abin da shugabanni ke tsammani a makonnin farko, ku kuma koyi haƙƙoƙinku da abin da za ku yi idan aiki yana da haɗari.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" a takarda ko a waya. A ƙarshe za ku yi naku Takardar Shirin Aikin Farko. Wannan kwas yana koyar da dokoki ne; ba ya maye gurbin ofishin ƙwadago na jiharku. Koyaushe ku duba shafin jiharku da kanta."
  ],
  finalTask: "Ku yi Takardar Shirin Aikin Farko a shafi ɗaya don wani aiki na gaske ko wanda kuke shirin nema: (1) shekarunku, aikin, da sa'o'in da aka yarda ku yi bisa dokokin tarayya da na jiharku, tare da shafin hukuma da kuka duba; (2) jerin takardun da kuke buƙata (izinin aiki idan jiharku na buƙata, takardun shaida don Form I-9, Form W-4) da inda za a samo kowanne; (3) atisayen duba takardar albashi: daga takardar albashi ta ƙirƙira, ku rubuta albashi kafin cirewa (gross pay), kowane abin da aka cire, da albashin da ya rage (net pay), ku kuma tabbatar da lissafin; (4) ɗabi'u uku da za ku nuna wa shugabanku a makonni biyu na farko; (5) shirinku idan wani abu yana da haɗari: wa za ku fara gaya wa, da lambar wayar hukuma da za ku kira.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa (kusan shekara 14 zuwa 19) da samari da 'yan mata da ke neman aikin farko, ciki har da ɗalibai a shirye-shiryen aikin bazara na matasa, matasan da ke hannun renon wasu (foster youth) da matasa a shirye-shiryen koyon sana'a. Wasu su ne na farko a iyalinsu da suka yi aiki a wurin aiki a Amurka.",
    startingPoint: "Suna iya amfani da waya da cike fom masu sauƙi. Yawancinsu ba su taɓa ganin takardar albashi (paystub), Form W-4 ko izinin aiki ba, kuma ba su san dokokin aikin yara ko haƙƙoƙinsu a wurin aiki ba.",
    gap: "Sau da yawa ana sa matasa ma'aikata su yi sa'o'i ko ayyukan da doka ba ta yarda da su ga shekarunsu ba, ba su da tabbas kan takardun da suke buƙata, ba za su iya gane ko albashinsu daidai ne ba, kuma suna tsoron yin magana game da haɗari. Sanin dokoki da ɗabi'un da shugabanni ke tsammani yana taimaka musu su sami aiki, su riƙe shi, kuma su zauna lafiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8)",
      "Na'urori: waya ko kwamfutar makaranta ko ɗakin karatu; takarda da alƙalami sun isa ga kowane aiki",
      "Lokaci: darussa na minti 4 zuwa 6",
      "Dokoki sun bambanta daga jiha zuwa jiha; dokar tarayya ita ce mafi ƙarancin kariya kuma doka mafi tsauri ce ke aiki, don haka kowane darasi yana nuna shafin hukuma",
      "Sirri: ba a raba lambobin Social Security na gaske, bayanan banki ko takardun albashi na gaske a aji; atisaye yana amfani da lambobin ƙirƙira"
    ],
    prerequisites: "Babu. Masu koyo da ke son taimako kan takardar bayanin aiki (résumé) da ganawar ɗaukar aiki za su iya ɗaukar kwas ɗin \"Resumes, LinkedIn and Interviews\" (Résumé, LinkedIn da Ganawar Aiki)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da shekarunku da tayin aiki tare da jadawali", action: "duba ko ayyukan da sa'o'in aikin sun halatta ga shekarunku bisa dokokin tarayya da na jiha", standard: "kuna ambaton shafin hukuma da kuka yi amfani da shi" },
    { id: "O2", condition: "Don wani aiki a jiharku", action: "lissafa takardun da kuke buƙata don fara aiki da inda za a samo kowanne", standard: "ciki har da izinin aiki idan jiharku na buƙata, katin shaida don Form I-9 da Form W-4" },
    { id: "O3", condition: "Idan kuna da takardar albashi da rubutun sa'o'inku na kanku", action: "nemo albashi kafin cirewa, kowane abin da aka cire da albashin da ya rage, da kwatanta su da sa'o'inku", standard: "lissafin ya yi daidai har zuwa sulalla (cent)" },
    { id: "O4", condition: "Idan aka ba ku wani yanayi a wurin aiki a makonninku na farko", action: "zaɓa da bayyana matakin ƙwarewa da shugaba ke tsammani", standard: "kuna samun aƙalla yanayi 4 cikin 5 daidai" },
    { id: "O5", condition: "Idan aka ba ku wani yanayi mai haɗari ko na rashin adalci a wurin aiki", action: "bayyana matakan yin magana da kai ƙara", standard: "kuna ambaton wanda za ku fara gaya wa da hukumar gwamnati da za ku kira idan ba a gyara ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirin fara aiki",
      lessons: [
        {
          title: "Waɗanne ayyuka da sa'o'i ne suka halatta a shekarunku",
          objectives: ["O1"],
          minutes: 6,
          goal: "Duba ko ayyuka da sa'o'in wani aiki sun halatta ga shekarunku.",
          text: [
            "A Amurka, dokar tarayya game da aikin yara ita ce Fair Labor Standards Act (FLSA). Jihohi ma suna da nasu dokokin aikin yara. Idan dokokin biyu sun bambanta, doka mafi tsauri ce ke aiki.",
            "Bisa dokokin tarayya ga yawancin ayyukan da ba na gona ba: idan shekarunku ba su kai 14 ba, gaba ɗaya ba za ku iya aiki ba (akwai 'yan kaɗan da aka ware a shafin hukuma). A shekara 14 da 15 za ku iya aiki a waje da lokacin makaranta, amma har sa'o'i 3 ne kawai a ranar makaranta (har da Juma'a), sa'o'i 18 a makon makaranta, sa'o'i 8 a ranar da babu makaranta, da sa'o'i 40 a makon da babu makaranta, kuma tsakanin ƙarfe 7 na safe zuwa ƙarfe 7 na yamma kawai. Daga 1 ga Yuni zuwa Labor Day (ranar hutun ma'aikata a farkon Satumba), iyakar yamma tana komawa ƙarfe 9 na dare.",
            "A shekara 16 da 17, dokar tarayya ba ta iyakance sa'o'inku, amma ba za ku iya yin ayyukan da Ma'aikatar Ƙwadago ta kira masu haɗari ba. Misalai: tuƙi a titunan jama'a a matsayin wani ɓangare na aiki (akwai ɗan keɓancewa ga masu shekara 17), tuƙa forklift ko wasu injunan ɗaga kaya masu amfani da wuta, da yawancin injunan aikin katako masu amfani da wuta. Jiharku na iya ƙara wasu iyakoki.",
            "Idan ba ku kai shekara 18 ba, kuma jadawali ko wani aiki ya yi kama da ya saɓa wa waɗannan dokokin, ba ku da laifi: dokokin suna nan don kare ku ne, kuma mai ɗaukar aiki ne dole ya bi su."
          ],
          steps: ["Ku rubuta shekarunku, da ayyukan aikin da sa'o'insa.", "Ku karanta dokokin tarayya a YouthRules ko Fact Sheet 43 na Ma'aikatar Ƙwadago.", "Ku buɗe shafin dokokin aikin yara na jiharku (Ma'aikatar Ƙwadago tana da jerin kowace jiha).", "Ku yi amfani da doka mafi tsauri. Ku zagaye duk sa'a ko aikin da ba a yarda da shi ba."],
          words: [["FLSA", "Fair Labor Standards Act, dokar tarayya game da mafi ƙarancin albashi, ƙarin sa'o'i (overtime) da aikin yara."], ["Dokar aikin yara", "dokoki game da ayyuka da sa'o'in da aka yarda ma'aikata 'yan ƙasa da shekara 18 su yi."], ["Aiki mai haɗari", "aikin da Ma'aikatar Ƙwadago ta ce yana da haɗari sosai ga ma'aikata 'yan ƙasa da shekara 18, kamar tuƙi ko tuƙa forklift."], ["Makon makaranta", "makon da ake makaranta aƙalla rana ɗaya."]],
          slides: [
            { title: "Dokoki iri biyu", bullets: ["Dokar tarayya (FLSA) da dokar jiharku", "Idan sun bambanta, doka mafi tsauri ce ke aiki"] },
            { title: "Shekara 14 da 15 (tarayya)", bullets: ["Sa'o'i 3 a ranar makaranta, sa'o'i 18 a makon makaranta", "Sa'o'i 8 a ranar da babu makaranta, 40 a makon da babu makaranta", "Ƙarfe 7 na safe zuwa 7 na yamma; 9 na dare daga 1 ga Yuni zuwa Labor Day"] },
            { title: "Shekara 16 da 17 (tarayya)", bullets: ["Babu iyakar sa'o'i a dokar tarayya", "Babu ayyuka masu haɗari: tuƙi, forklift, injuna da yawa masu wuta", "Jiharku na iya ƙara iyakoki"] },
            { title: "Yadda ake dubawa", bullets: ["Ku rubuta shekarunku, ayyuka da sa'o'i", "Ku karanta YouthRules da shafin jiharku", "Ku zagaye duk abin da ba a yarda da shi ba"] }
          ],
          sources: [SRC.youthRules, SRC.fs43, SRC.stateChildLabor],
          tryIt: "An ba wani mai shekara 15 aiki a shagon kayan abinci ranar Talata da Alhamis daga ƙarfe 4 zuwa 8 na yamma a watan Oktoba, da ranar Asabar daga ƙarfe 9 na safe zuwa 3 na rana. A takarda, ku duba kowane lokacin aiki da dokokin tarayya. Sannan ku buɗe shafin dokokin aikin yara na jiharku ku rubuta doka ɗaya da ta ƙara.",
          youCanNow: "duba ko ayyuka da sa'o'in wani aiki sun halatta ga shekarunku, ta amfani da dokokin tarayya da shafin jiharku.",
          quickCheck: [
            { objective: "O1", q: "Kuna da shekara 15. Watan Oktoba ne. Shugabanku ya sa ku aiki har ƙarfe 8 na dare a ranar makaranta. Mene ne gaskiya bisa dokokin tarayya?", options: ["Babu laifi domin bai kai sa'o'i 3 ba", "Ya yi dare sosai: masu shekara 14 da 15 suna tsayawa ƙarfe 7 na yamma a waje da lokacin bazara", "Babu laifi idan iyayenku sun yarda", "Jiha ce kaɗai za ta iya yanke hukunci"], answer: 1, why: "A waje da 1 ga Yuni zuwa Labor Day, masu shekara 14 da 15 suna iya aiki ne tsakanin ƙarfe 7 na safe zuwa 7 na yamma kawai." },
            { objective: "O1", q: "Dokar jiharku ta fi dokar tarayya tsauri. Wacce za ku bi?", options: ["Dokar tarayya, koyaushe", "Duk wadda shugabanku ya zaɓa", "Babu ko ɗaya; suna soke juna", "Dokar jiha mafi tsauri"], answer: 3, why: "Idan dokokin aikin yara na tarayya da na jiha sun bambanta, doka mafi tsauri ce ke aiki." }
          ]
        },
        {
          title: "Izinin aiki da takardun ranar farko",
          objectives: ["O2"],
          minutes: 5,
          goal: "Lissafa takardun da kuke buƙata don fara aikinku da inda za a samo kowanne.",
          text: [
            "Dokar tarayya ba ta buƙatar izinin aiki (work permit), amma jihohi da yawa suna buƙata ga ma'aikata 'yan ƙasa da shekara 18. Wani lokaci ana kiran izinin aiki working papers ko employment certificate. Ya danganta da jihar, za ku iya samun sa daga makarantarku, ofishin ƙwadago na jiha ko ta intanet, kuma yana iya buƙatar sa hannun mahaifi ko mahaifiya. Ku duba shafin jiharku don ganin ko kuna buƙata da yadda ake samun sa.",
            "A ranar farko ko kafin ta, kowane mai ɗaukar aiki a Amurka zai sa ku cike Form I-9. Yana nuna cewa an yarda ku yi aiki a Amurka. Za ku nuna ainihin takardun shaida daga jerin da ke kan fom ɗin, misali fasfo na Amurka, ko katin makaranta ko katin shaida na jiha tare da katin Social Security ko takardar shaidar haihuwa.",
            "Za ku kuma cike Form W-4. Yana gaya wa mai ɗaukar aikinku nawa za a cire na harajin kuɗin shiga na tarayya daga kowane albashi. Jiharku ma na iya samun nata fom na haraji. Ku tambayi shugabanku ko mahaifi ko mahaifiya idan wata tambaya ta rikitar da ku.",
            "Ku kiyaye: ku ba da lambar Social Security ɗinku a takardun ɗaukar aiki na gaske kawai, bayan an ɗauke ku. Mai ɗaukar aiki na gaske ba zai taɓa neman ku biya kuɗi don samun aiki ko ku sayi katin kyauta (gift card) ba. Wannan zamba ce."
          ],
          steps: ["Ku duba shafin dokokin aikin yara na jiharku: kuna buƙatar izinin aiki? Wa ke bayarwa?", "Ku nemo ainihin takardun shaidarku don Form I-9 (ku duba jerin da ke kan fom ɗin).", "Ku karanta Form W-4 kafin ranarku ta farko don ku san abin da yake tambaya.", "Ku sa kwafin takardunku a fayil ɗaya. Ku ajiye ainihin takardun lafiya a gida."],
          words: [["Izinin aiki (work permit)", "takardar da wasu jihohi ke buƙata kafin mai ƙasa da shekara 18 ya yi aiki; ana kuma kiran ta working papers ko employment certificate."], ["Form I-9", "fom na tarayya da ke nuna an yarda ku yi aiki a Amurka; kuna nuna takardun shaida don shi."], ["Form W-4", "fom na tarayya da ke gaya wa mai ɗaukar aikinku nawa za a riƙe na harajin kuɗin shiga daga albashinku."], ["Ainihin takarda", "takarda ko kati na gaske, ba hoto ko kwafi ba."]],
          slides: [
            { title: "Izinin aiki", bullets: ["Dokar tarayya ba ta buƙata", "Jihohi da yawa suna buƙata ga 'yan ƙasa da shekara 18", "Shafin jiharku yana faɗin wa ke bayarwa"] },
            { title: "Form I-9", bullets: ["Yana nuna za ku iya aiki a Amurka", "Ku kawo ainihin takardun shaida daga jerin fom ɗin"] },
            { title: "Form W-4", bullets: ["Yana gaya wa mai ɗaukar aiki nawa za a riƙe na haraji", "Jiharku na iya samun nata fom"] },
            { title: "Ku zauna lafiya", bullets: ["Ku ba da lambar Social Security a takardun ɗaukar aiki na gaske kawai", "Kada ku taɓa biyan kuɗi don samun aiki"] }
          ],
          sources: [SRC.fs43, SRC.stateChildLabor, SRC.i9, SRC.w4, SRC.ftcJobScams],
          tryIt: "Ku yi jerin \"Takardun Ranar Farko\" a takarda. Don jiharku, ku rubuta: ina buƙatar izinin aiki, kuma ina zan samo shi? Waɗanne takardun shaida biyu zan kawo don Form I-9? Wa zai iya taimaka min da Form W-4?",
          youCanNow: "lissafa takardun da kuke buƙata don fara aiki, inda za a samo kowanne, da yadda za ku kiyaye lambobinku na sirri.",
          quickCheck: [
            { objective: "O2", q: "Wane fom ne ke nuna wa mai ɗaukar aikinku cewa an yarda ku yi aiki a Amurka?", options: ["Form I-9", "Form W-4", "Takardar sakamakon makaranta", "Takardar albashi"], answer: 0, why: "Form I-9 yana tabbatar da cewa an yarda ku yi aiki a Amurka; kuna nuna ainihin takardun shaida don shi." },
            { objective: "O2", q: "Wani ya ce zai ba ku aiki idan kun fara biyan $50 don \"kayan horo\". Mene ne wannan mafi yiwuwa?", options: ["Kuɗin ranar farko na yau da kullum", "Kuɗin Form W-4", "Zamba: masu ɗaukar aiki na gaske ba sa karɓar kuɗi don ba ku aiki", "Kuɗin izinin aiki na jiharku"], answer: 2, why: "Neman ku biya kuɗi don samun aiki alama ce ta zambar aiki da aka saba gani." }
          ]
        },
        {
          title: "Abin da shugabanni ke tsammani a makonninku na farko",
          objectives: ["O4"],
          minutes: 5,
          goal: "Zaɓi matakin ƙwarewa da shugaba ke tsammani a yanayin da aka saba gani a aikin farko.",
          text: [
            "Yawancin shugabannin aikin farko ba su damu da ƙwarewa sosai ba; sun fi damuwa da ɗabi'a: zuwa a kan lokaci, kasancewa a shirye don aiki, bin umarni, ladabi ga masu saye da abokan aiki, da gaya musu da wuri idan wani abu ya taso.",
            "Zuwa a kan lokaci yana nufin kasancewa a shirye don aiki lokacin da aikinku (shift) ya fara, ba shigowa ta ƙofa a lokacin ba. Idan kuna rashin lafiya ko za ku makara, ku gaya wa shugabanku da wuri yadda za ku iya, ta hanyar da wurin aikinku ya ce (sau da yawa kira, ba saƙon tes kaɗai ba). Kada ku ƙi zuwa kawai ba tare da sanarwa ba.",
            "Ku ajiye wayarku yayin aiki sai dai idan aikinku ya yarda. Idan ba ku san yadda ake yin wani abu ba, ku tambaya. Ku maimaita umarni don ku tabbata kun fahimta. Ku karɓi gyara (feedback) cikin natsuwa ku ce na gode; yana nufin shugabanku yana son ku yi nasara.",
            "Ku karanta jadawalinku kowane mako, kuma ku nemi hutu da wuri. Kasancewa mai amana shi ne ke kawo muku ƙarin sa'o'i, shaida mai kyau (reference) da aikinku na gaba."
          ],
          steps: ["Ku iso 'yan mintuna da wuri, a shirye don aiki.", "Idan za ku makara ko kuna rashin lafiya, ku gaya wa shugabanku da wuri, ta hanyar da ya ce.", "Ku ajiye wayarku sai dai idan aikin ya yarda.", "Ku tambaya idan ba ku da tabbas; ku maimaita umarni.", "Ku karɓi gyara cikin natsuwa ku yi amfani da shi."],
          words: [["Shift", "lokacin da aka tsara muku aiki."], ["Call out (sanar da rashin zuwa)", "gaya wa shugabanku tun da wuri cewa ba za ku iya zuwa wani lokacin aiki ba."], ["Reference (shaida)", "mutum, sau da yawa tsohon shugaba, da ke gaya wa sabon mai ɗaukar aiki irin ma'aikacin da kuke."], ["Feedback (gyara)", "bayani kan yadda kuke aiki da yadda za ku inganta."]],
          slides: [
            { title: "Ɗabi'un da shugabanni ke nema", bullets: ["Zuwa a kan lokaci a shirye don aiki", "Bin umarni", "Ladabi ga masu saye da abokan aiki"] },
            { title: "Za ku makara ko kuna rashin lafiya?", bullets: ["Ku gaya wa shugabanku da wuri yadda za ku iya", "Ku yi amfani da hanyar da wurin aikinku ya ce", "Kada ku taɓa ƙin zuwa kawai ba tare da sanarwa ba"] },
            { title: "A wurin aiki", bullets: ["Ajiye waya sai dai idan an yarda", "Ku tambaya idan ba ku da tabbas; ku maimaita umarni", "Ku karɓi gyara cikin natsuwa"] },
            { title: "Dalilin da yasa yake da muhimmanci", bullets: ["Ƙarin sa'o'i", "Shaida mai kyau", "Aikinku na gaba"] }
          ],
          tryIt: "Ku rubuta abin da za ku faɗa a yanayi biyu: (1) kun tashi da rashin lafiya sa'o'i biyu kafin aikinku ya fara; (2) manajanku ya gaya muku cewa kun jera kaya a kan shiryayye ba daidai ba. Ku faɗi duka biyun da babbar murya kamar kuna magana da shugabanku.",
          youCanNow: "zaɓa da bayyana abin da shugaba ke tsammani idan za ku makara ko kuna rashin lafiya, ba ku san abin da za ku yi ba, ko ana muku gyara.",
          quickCheck: [
            { objective: "O4", q: "Aikinku yana farawa ƙarfe 4 na yamma. Mene ne ma'anar \"a kan lokaci\"?", options: ["Shigowa ta ƙofa a ƙarfe 4:00", "Isowa kafin ƙarfe 4:15", "Kasancewa a shirye don aiki a ƙarfe 4:00, don haka isowa 'yan mintuna da wuri", "Kowane lokaci kafin hutunku"], answer: 2, why: "A kan lokaci yana nufin a shirye ku fara aiki lokacin da aikin ya fara." },
            { objective: "O4", q: "Ba ku da tabbas kan yadda ake amfani da na'urar karɓar kuɗi. Mene ne mataki mafi kyau?", options: ["Ku yi zato ku yi fatan zai yi aiki", "Ku jira har sai mai saye ya yi ƙorafi", "Ku nema a wayarku yayin aiki", "Ku roƙi mai kula da ku ya nuna muku, sannan ku maimaita"], answer: 3, why: "Tambaya da maimaita umarni yana nuna kulawa kuma yana hana kurakurai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirin fara aiki",
        questions: [
          { objective: "O1", q: "Kuna da shekara 14. Makon makaranta ne. Sa'o'i nawa gaba ɗaya aka yarda ku yi aiki a wannan makon bisa dokokin tarayya?", options: ["18", "40", "Babu iyaka", "8"], answer: 0, why: "Dokokin tarayya sun yarda masu shekara 14 da 15 su yi aiki har sa'o'i 18 a makon da ake makaranta." },
          { objective: "O1", q: "Kuna da shekara 16. Shugabanku ya ce ku tuƙa motar shagon don kai kaya. Mene ne gaskiya bisa dokokin tarayya?", options: ["Duk wanda ke da lasisi zai iya", "Tuƙi a titunan jama'a a matsayin aiki aiki ne mai haɗari da aka hana ga 'yan ƙasa da 17, tare da ɗan keɓancewa kawai a shekara 17", "Babu laifi a ƙarshen mako", "Babu laifi idan an ƙara muku albashi"], answer: 1, why: "Dokokin tarayya na ayyuka masu haɗari sun hana tuƙi a aiki ga 'yan ƙasa da 17, kuma suna yarda da ɗan tuƙi kaɗan ne kawai a shekara 17." },
          { objective: "O2", q: "Shin dokar tarayya tana buƙatar izinin aiki ga mai shekara 15?", options: ["E, koyaushe", "A lokacin bazara kawai", "A'a, amma jihohi da yawa suna buƙata, don haka ku duba shafin jiharku", "A ayyukan gidan abinci kawai"], answer: 2, why: "Dokokin tarayya ba sa buƙatar izinin aiki, amma jihohi da yawa suna buƙata." },
          { objective: "O2", q: "Me Form W-4 ke yi?", options: ["Yana nuna an yarda ku yi aiki a Amurka", "Yana ba ku izinin aiki", "Yana lissafa sa'o'inku", "Yana gaya wa mai ɗaukar aikinku nawa za a riƙe na harajin kuɗin shiga na tarayya"], answer: 3, why: "Form W-4 yana tsara nawa za a cire na harajin kuɗin shiga na tarayya daga albashinku." },
          { objective: "O4", q: "Za ku makara minti 20 saboda bas ya lalace. Me za ku yi?", options: ["Ku gaya wa shugabanku nan da nan, ta hanyar da wurin aikinku ya ce", "Ku yi shiru ku shigo a makare", "Ku ƙi zuwa aikin", "Ku rubuta game da shi a intanet"], answer: 0, why: "Gaya wa shugabanku da wuri, ta hanyar da ya ce, yana nuna ku masu amana ne." }
        ]
      }
    },
    {
      name: "Babi na 2: Albashinku, haƙƙoƙinku da lafiyarku",
      lessons: [
        {
          title: "Karanta takardar albashinku ta farko",
          objectives: ["O3"],
          minutes: 6,
          goal: "Nemo albashi kafin cirewa, kowane abin da aka cire da albashin da ya rage a takardar albashi.",
          text: [
            "Takardar albashi (paystub ko pay statement) tana zuwa tare da kowane albashi ko kuɗin da aka tura kai tsaye zuwa banki (direct deposit). Tana nuna lokacin albashin (pay period), sa'o'inku, adadin albashinku a sa'a, albashi kafin cirewa, kowane abin da aka cire, da albashin da ya rage.",
            "Albashi kafin cirewa (gross pay) shi ne sa'o'i sau adadin albashinku a sa'a, kafin a cire komai. Abubuwan da aka cire (deductions) su ne kuɗin da aka fitar. Waɗanda aka saba gani: harajin kuɗin shiga na tarayya (bisa Form W-4 ɗinku), Social Security (kashi 6.2 cikin ɗari na albashinku) da Medicare (kashi 1.45), da ake nunawa tare a matsayin FICA sau da yawa, kuma a jihohi da yawa harajin kuɗin shiga na jiha. Albashin da ya rage (net pay ko take-home pay) shi ne abin da ya saura.",
            "Don atisaye kawai, lambobin ƙirƙira: sa'o'i 20 a $12.00 a sa'a = $240.00 kafin cirewa. Social Security: 240 x 0.062 = $14.88. Medicare: 240 x 0.0145 = $3.48. Harajin kuɗin shiga na tarayya: $6.00. Harajin jiha: $3.00. Jimillar abubuwan da aka cire $27.36, don haka albashin da ya rage = $240.00 - $27.36 = $212.64.",
            "Mafi ƙarancin albashi na tarayya shi ne $7.25 a sa'a. Jihohi da birane da yawa sun sa nasu mafi girma, kuma mafi girman ne ke aiki a kanku. Ku duba shafin jiharku don ku san cewa albashinku ya halatta."
          ],
          steps: ["Ku nemo kwanakin lokacin albashin da sa'o'inku.", "Ku duba albashi kafin cirewa: sa'o'i x adadin albashi.", "Ku lissafa kowane abin da aka cire ku haɗa su.", "Ku duba albashin da ya rage: albashi kafin cirewa a rage jimillar abubuwan da aka cire.", "Idan wani abu bai yi daidai ba, ku tambayi sashen biyan albashi (payroll) ko shugabanku cikin ladabi."],
          words: [["Gross pay (albashi kafin cirewa)", "albashinku kafin a cire komai: sa'o'i x adadin albashi."], ["Deduction (abin da aka cire)", "kuɗin da aka fitar daga albashinku, kamar haraji."], ["Net pay (albashin da ya rage)", "kuɗin da kuke ɗauka gida: albashi kafin cirewa a rage abubuwan da aka cire."], ["FICA", "harajin Social Security da Medicare da ake cirewa daga albashinku."], ["Pay period (lokacin albashi)", "kwanakin aikin da wani albashi ya ƙunsa."]],
          slides: [
            { title: "Abin da ke kan takardar albashi", bullets: ["Lokacin albashi, sa'o'i da adadin albashi", "Albashi kafin cirewa da kowane abin da aka cire", "Albashin da ya rage (abin da kuke ɗauka gida)"] },
            { title: "Abubuwan da aka saba cirewa", bullets: ["Harajin kuɗin shiga na tarayya (daga W-4 ɗinku)", "Social Security 6.2% da Medicare 1.45% (FICA)", "Harajin kuɗin shiga na jiha a jihohi da yawa"] },
            { title: "Atisaye: lambobin ƙirƙira", bullets: ["Sa'o'i 20 x $12.00 = $240.00 kafin cirewa", "Abubuwan da aka cire: $14.88 + $3.48 + $6.00 + $3.00 = $27.36", "Albashin da ya rage: $240.00 - $27.36 = $212.64"] },
            { title: "Mafi ƙarancin albashi", bullets: ["Tarayya: $7.25 a sa'a", "Jihohi da birane da yawa suna biya fiye; mafi girman ne ke aiki"] }
          ],
          sources: [SRC.irs751, SRC.minWage, SRC.stateMinWage, SRC.w4],
          tryIt: "Don atisaye kawai: kun yi aiki sa'o'i 15 a $13.00 a sa'a. Harajin kuɗin shiga na tarayya $5.00 ne, harajin jiha kuma $2.00. A takarda, ku lissafa albashi kafin cirewa, Social Security, Medicare, jimillar abubuwan da aka cire da albashin da ya rage. (Amsa: $195.00 kafin cirewa, $12.09, $2.83, jimilla $21.92, $173.08 albashin da ya rage.)",
          youCanNow: "karanta takardar albashi, nemo albashi kafin cirewa, kowane abin da aka cire da albashin da ya rage, da duba lissafin.",
          quickCheck: [
            { objective: "O3", q: "Kun yi aiki sa'o'i 10 a $14.00 a sa'a. Nawa ne albashinku kafin cirewa?", options: ["$14.00", "$124.00", "$104.00", "$140.00"], answer: 3, why: "Albashi kafin cirewa shi ne sa'o'i sau adadin albashi: 10 x $14.00 = $140.00." },
            { objective: "O3", q: "Albashi kafin cirewa $300.00 ne kuma jimillar abubuwan da aka cire $35.00. Nawa ne albashin da ya rage?", options: ["$265.00", "$335.00", "$300.00", "$35.00"], answer: 0, why: "Albashin da ya rage shi ne albashi kafin cirewa a rage abubuwan da aka cire: $300.00 - $35.00 = $265.00." }
          ]
        },
        {
          title: "Rubuta sa'o'inku don albashinku ya yi daidai",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ajiye rubutun sa'o'inku na kanku ku kwatanta shi da takardar albashinku.",
          text: [
            "Ana yin kuskure a albashi. Kariya mafi kyau ita ce rubutunku na kanku. A kowane lokacin aiki, ku rubuta kwanan wata, lokacin da kuka fara, lokacin da hutunku ya fara da ya ƙare, da lokacin da kuka gama. Ma'aikatar Ƙwadago tana da manhajar rubuta sa'o'i (timesheet) kyauta, ko kuma ku yi amfani da littafin rubutu ko wurin rubutu (notes) a wayarku.",
            "Ku haɗa sa'o'in lokacin albashin. Ku tuna ku cire hutun cin abinci da ba a biya. Sannan ku kwatanta jimillarku da sa'o'in da ke kan takardar albashinku.",
            "Idan lambobin ba su yi daidai ba, kada ku firgita kuma kada ku zargi kowa. Ku kai rubutunku ga shugabanku ko sashen biyan albashi ku tambaya: \"Rubutuna ya nuna sa'o'i 22, takardar albashina kuma ta nuna 19. Za ku iya taimaka min mu duba?\" Ana gyara yawancin kurakurai ta haka.",
            "Idan ba a biya ku sa'o'in da kuka yi aiki ba kuma ba a gyara ba, Sashen Albashi da Sa'o'i (Wage and Hour Division) na Ma'aikatar Ƙwadago yana karɓar ƙorafi. Kyauta ne kuma a asirce."
          ],
          steps: ["A kowane lokacin aiki: ku rubuta kwanan wata, lokacin farawa, lokacin hutu da lokacin gamawa.", "A ƙarshen lokacin albashi, ku haɗa sa'o'inku (a cire hutun da ba a biya).", "Ku kwatanta jimillarku da sa'o'in da ke kan takardar albashinku.", "Idan sun bambanta, ku kawo rubutunku ku tambaya cikin ladabi a duba.", "Idan ba a gyara ba, ku tuntuɓi Wage and Hour Division."],
          words: [["Timesheet (rubutun sa'o'i)", "rubutun kwanaki da sa'o'in da kuka yi aiki."], ["Hutun da ba a biya", "hutun cin abinci da ba ku cikin aiki gaba ɗaya kuma ba a biyan ku."], ["Payroll (sashen biyan albashi)", "mutum ko ƙungiyar da ke biyan ma'aikata."], ["Wage and Hour Division", "sashen Ma'aikatar Ƙwadago ta Amurka da ke tabbatar da bin dokokin albashi da aikin yara."]],
          slides: [
            { title: "Ku ajiye rubutunku na kanku", bullets: ["Kwanan wata, lokacin farawa, hutu da gamawa", "Littafin rubutu, wayarku ko manhajar timesheet ta DOL kyauta"] },
            { title: "Ku kwatanta a kowane lokacin albashi", bullets: ["Ku haɗa sa'o'inku, a cire hutun da ba a biya", "Ku kwatanta da takardar albashi"] },
            { title: "Idan bai yi daidai ba", bullets: ["Ku kawo rubutunku ku tambaya cikin ladabi", "\"Za ku iya taimaka min mu duba?\""] },
            { title: "Har yanzu ba a gyara ba?", bullets: ["Wage and Hour Division: kyauta kuma a asirce", "1-866-487-9243 (1-866-4-US-WAGE)"] }
          ],
          sources: [SRC.youthRules, SRC.childLabor],
          tryIt: "Don atisaye kawai: Litinin ƙarfe 3:30 zuwa 7:00 na yamma, Laraba ƙarfe 3:30 zuwa 7:00 na yamma, Asabar ƙarfe 9:00 na safe zuwa 3:00 na rana tare da hutun cin abinci na minti 30 da ba a biya. Ku haɗa sa'o'in. Takardar albashinku ta ce sa'o'i 11. Ku rubuta abin da za ku faɗa wa shugabanku. (Amsa: 3.5 + 3.5 + 5.5 = sa'o'i 12.5.)",
          youCanNow: "ajiye rubutun sa'o'inku, kwatanta shi da takardar albashinku, da tambaya cikin ladabi a gyara kuskure.",
          quickCheck: [
            { objective: "O3", q: "Kun yi aiki daga ƙarfe 9 na safe zuwa 2 na rana tare da hutun cin abinci na minti 30 da ba a biya. Sa'o'i nawa ne za a biya?", options: ["5", "5.5", "4.5", "4"], answer: 2, why: "Ƙarfe 9 na safe zuwa 2 na rana sa'o'i 5 ne; a cire hutun minti 30 da ba a biya, ya zama sa'o'i 4.5." },
            { objective: "O3", q: "Rubutunku ya nuna sa'o'i 22, amma takardar albashinku ta nuna 19. Me za ku fara yi?", options: ["Ku bar aikin nan da nan", "Ku kai rubutunku ga shugabanku ko sashen biyan albashi ku tambaya cikin ladabi a duba", "Ku yi shiru", "Ku saka takardar albashin a intanet"], answer: 1, why: "Ana gyara yawancin kurakuran albashi ta nuna rubutunku da tambaya cikin ladabi." }
          ]
        },
        {
          title: "Haƙƙoƙinku da lafiyarku: yin magana",
          objectives: ["O5"],
          minutes: 6,
          goal: "Bayyana matakan yin magana da kai ƙara game da yanayi mai haɗari ko na rashin adalci.",
          text: [
            "Kowane ma'aikaci, har da matasa, yana da haƙƙoƙi. Dole mai ɗaukar aikinku ya ba ku wurin aiki mai lafiya kuma ya biya ku aƙalla mafi ƙarancin albashi na doka a kowace sa'ar da kuka yi aiki. Ya kamata a horar da ku kafin ku yi wani aiki, kuma kuna iya yin tambayoyi. Mai ɗaukar aikinku ba zai iya hukunta ku don tambaya game da haƙƙoƙinku ko don kai ƙara ba.",
            "Matasa ma'aikata sun fi samun rauni idan sababbi ne, ana gaggauta su ko ba a horar da su ba. Alamun gargaɗi: a ce ku yi amfani da injin da ba a horar da ku a kansa ba, aikin da aka hana ga shekarunku, babu kayan kariya, ƙasa mai santsi, mai mai zafi, ko a bar ku ku kaɗai da dare.",
            "Matakan yin magana: ku tsaya idan kuna cikin haɗari. Ku gaya wa mai kula da ku cikin natsuwa menene matsalar. Idan bai gyara ba, ku gaya wa wani manaja da mahaifi ko mahaifiya, malami ko ma'aikacin shirin aiki. Idan har yanzu ba a gyara ba, ku tuntuɓi gwamnati: OSHA (1-800-321-6742) don lafiya da tsaro, ko Wage and Hour Division (1-866-487-9243) don matsalolin albashi, sa'o'i ko aikin yara.",
            "Idan wani ya ji rauni sosai, ku fara kiran 911 (ko lambar gaggawa ta yankinku)."
          ],
          steps: ["Idan kuna cikin haɗari, ku tsaya ku matsa nesa.", "Ku gaya wa mai kula da ku cikin natsuwa abin da ba daidai ba.", "Idan ba a gyara ba, ku gaya wa wani manaja da babban mutum da kuka amince da shi.", "Har yanzu ba a gyara ba: ku kira OSHA don lafiya da tsaro ko Wage and Hour Division don albashi, sa'o'i ko aikin yara.", "Gaggawa: ku fara kiran 911."],
          words: [["OSHA", "Occupational Safety and Health Administration, hukumar tarayya da ke kula da lafiya da tsaro a wurin aiki."], ["Retaliation (ramuwar gayya)", "hukunta ma'aikaci don ya yi magana ko ya kai ƙara; ba a yarda da shi ba."], ["Kayan kariya", "abubuwa kamar safar hannu, gilashin kariyar ido ko takalma marasa santsi da ke kare ku."]],
          slides: [
            { title: "Haƙƙoƙinku", bullets: ["Wurin aiki mai lafiya", "Aƙalla mafi ƙarancin albashi na doka a kowace sa'a", "Horo, tambayoyi, kuma babu hukunci don yin magana"] },
            { title: "Alamun gargaɗi", bullets: ["Injin da ba a horar da ku a kansa ba", "Aikin da aka hana ga shekarunku", "Babu kayan kariya, mai mai zafi, ƙasa mai santsi"] },
            { title: "Ku yi magana mataki-mataki", bullets: ["Ku tsaya idan akwai haɗari", "Ku gaya wa mai kula da ku, sannan wani manaja da babban mutum amintacce", "Ba a gyara ba: OSHA ko Wage and Hour Division"] },
            { title: "Lambobin da ya kamata ku sani", bullets: ["Gaggawa: ku fara kiran 911", "OSHA: 1-800-321-6742", "Wage and Hour: 1-866-487-9243"] }
          ],
          sources: [SRC.oshaYoung, SRC.youthRules, SRC.fs43],
          tryIt: "Kuna da shekara 16. Manajanku ya ce ku yi amfani da injin yanka nama a shagon nama (deli), kuma ba a horar da ku ba. Ku rubuta kalmomin da za ku faɗa wa manajanku, da wanda za ku gaya wa na gaba idan ya nace. Ku ajiye lambobin OSHA da Wage and Hour a wayarku.",
          youCanNow: "gane yanayi mai haɗari ko na rashin adalci da yin magana mataki-mataki: mai kula da ku, babban mutum amintacce, sannan hukumar gwamnati.",
          quickCheck: [
            { objective: "O5", q: "Shugabanku ya ce ku wanke tukunyar soya mai ɗauke da mai mai zafi, ba tare da safar hannu ko horo ba. Me za ku fara yi?", options: ["Ku gaya wa mai kula da ku cikin natsuwa cewa kuna buƙatar horo da kayan kariya kafin ku yi", "Ku yi da sauri don kada ku shiga matsala", "Ku kira 911", "Ku bar aikin ba tare da faɗin dalili ba"], answer: 0, why: "Yin magana da mai kula da ku shi ne matakin farko da aka saba idan babu wanda ya ji rauni tukuna." },
            { objective: "O5", q: "Kun gaya wa manajoji biyu game da matsalar albashi kuma babu abin da ya canja. Wa za ku iya tuntuɓa?", options: ["Babu kowa; dole ku yarda", "Wani baƙo a intanet", "Wage and Hour Division na Ma'aikatar Ƙwadago ta Amurka", "Kocin wasanni na makarantarku kawai"], answer: 2, why: "Wage and Hour Division yana karɓar ƙorafe-ƙorafe kyauta kuma a asirce game da albashi, sa'o'i da aikin yara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Albashinku, haƙƙoƙinku da lafiyarku",
        questions: [
          { objective: "O3", q: "A takardar albashi, mene ne albashin da ya rage (net pay)?", options: ["Albashi kafin haraji", "Adadin albashinku a sa'a", "Kuɗin da kuke ɗauka gida bayan an cire abubuwa", "Jimillar harajin da aka cire"], answer: 2, why: "Albashin da ya rage shi ne abin da ya saura bayan an cire duk abubuwa daga albashi kafin cirewa." },
          { objective: "O3", q: "Don atisaye kawai: albashi kafin cirewa $200.00 ne. Nawa ne abin da za a cire na Social Security a kashi 6.2 cikin ɗari?", options: ["$6.20", "$2.90", "$15.30", "$12.40"], answer: 3, why: "$200.00 x 0.062 = $12.40." },
          { objective: "O3", q: "Me yasa za ku ajiye rubutun sa'o'inku na kanku?", options: ["Don ku kwatanta shi da takardar albashinku ku gano kurakurai", "Domin doka ta ce ku kaɗai ne za ku rubuta sa'o'i", "Don ku tsallake hutu", "Don kada ku buƙaci takardar albashi"], answer: 0, why: "Rubutunku na kanku yana ba ku damar dubawa cewa an biya ku kowace sa'ar da kuka yi aiki." },
          { objective: "O5", q: "Wani abokin aiki ya ƙone sosai. Me za ku fara yi?", options: ["Ku gama aikinku", "Ku kira 911 (ko lambar gaggawa ta yankinku)", "Ku kira OSHA", "Ku tura wa abokanku saƙo"], answer: 1, why: "A lokacin gaggawa, ku fara kiran 911; kai rahoto ga hukumomi daga baya ne." },
          { objective: "O5", q: "Shin mai ɗaukar aikinku zai iya hukunta ku don kun kai ƙara game da lafiya ko albashi?", options: ["E, idan ba ku kai shekara 18 ba", "E, idan ƙarar ba daidai ba ce", "A'a, ba a yarda da ramuwar gayya don yin magana ba", "A watanku na farko kawai"], answer: 2, why: "Doka tana kare ma'aikata daga ramuwar gayya don tambaya game da haƙƙoƙinsu ko kai ƙara." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Aikinku na Farko: Izinin Aiki, Albashi da Abin da Shugabanni ke Tsammani",
    questions: [
      { objective: "O1", q: "Kuna da shekara 15 kuma an rufe makaranta don bazara a watan Yuli. Har wane lokaci aka yarda ku yi aiki bisa dokokin tarayya?", options: ["Ƙarfe 7 na yamma", "Ƙarfe 9 na dare", "Ƙarfe 11 na dare", "Kowane lokaci"], answer: 1, why: "Daga 1 ga Yuni zuwa Labor Day, iyakar yamma ga masu shekara 14 da 15 tana komawa ƙarfe 9 na dare." },
      { objective: "O2", q: "Waɗanne takardu ne kowane sabon ma'aikaci ke cikewa, a kowace shekaru?", options: ["Form I-9 da Form W-4", "Izinin aiki da takardar sakamakon makaranta", "Takardar albashi da rubutun sa'o'i", "Jarabawar lasisin tuƙi"], answer: 0, why: "Kowane sabon ma'aikaci yana cike Form I-9 da Form W-4; izinin aiki ya danganta da shekaru da jiha." },
      { objective: "O3", q: "Don atisaye kawai: sa'o'i 18 a $12.50 a sa'a. Nawa ne albashi kafin cirewa?", options: ["$215.00", "$250.00", "$225.00", "$180.00"], answer: 2, why: "18 x $12.50 = $225.00." },
      { objective: "O4", q: "Kun tashi da rashin lafiya sa'o'i biyu kafin aikinku ya fara. Mene ne matakin ƙwarewa?", options: ["Ku je da rashin lafiyar ba tare da faɗin komai ba", "Ku ƙi zuwa ku yi bayani a mako mai zuwa", "Ku roƙi aboki ya je a madadinku ba tare da gaya wa kowa ba", "Ku gaya wa shugabanku nan da nan, ta hanyar da wurin aikinku ya ce"], answer: 3, why: "Gaya wa shugabanku da wuri, ta hanyar da ya ce, yana ba shi damar samun wanda zai maye gurbinku kuma yana nuna ku masu amana ne." },
      { objective: "O5", q: "Wace hukuma ce ke kula da ƙorafe-ƙorafe game da lafiya da tsaro a wurin aiki?", options: ["IRS", "OSHA", "Gidan waya", "Hukumar makarantun yankinku"], answer: 1, why: "OSHA ita ce hukumar tarayya ta lafiya da tsaro a wurin aiki." },
      { objective: "O1", q: "Kuna da shekara 14. A ranar makaranta, sa'o'i nawa aka yarda ku yi aiki bisa dokokin tarayya?", options: ["3", "5", "8", "Babu iyaka"], answer: 0, why: "Masu shekara 14 da 15 suna iya aiki har sa'o'i 3 a ranar makaranta, har da Juma'a." },
      { objective: "O1", q: "Kuna da shekara 17. Wane aiki aka hana muku bisa dokokin tarayya na ayyuka masu haɗari?", options: ["Sa kayan abinci a jaka", "Amsa waya", "Jera kaya a kan shiryayye da hannu", "Tuƙa forklift"], answer: 3, why: "Tuƙa injunan ɗaga kaya masu wuta kamar forklift aiki ne mai haɗari da aka hana ga 'yan ƙasa da 18." },
      { objective: "O2", q: "A ina za ku gano ko jiharku tana buƙatar izinin aiki?", options: ["Shafin hukuma na dokokin aikin yara na jiharku (Ma'aikatar Ƙwadago tana da jerinsu)", "Wani rubutu a kafofin sada zumunta", "Kowane shafin neman aiki", "Bayan takardar albashi"], answer: 0, why: "Izinin aiki dokar jiha ce, don haka shafin hukuma na jihar shi ne wurin dubawa." },
      { objective: "O2", q: "Wani sabon shugaba ya tura muku saƙo kafin kowace ganawa yana neman bayanan shiga bankinku \"don tsara albashi\". Mene ne wannan?", options: ["Al'ada ce don direct deposit", "Wani ɓangare ne na Form W-4", "Alamar gargaɗi ta zamba; kada ku taɓa ba da bayanan shiga", "Wani ɓangare ne na Form I-9"], answer: 2, why: "Masu ɗaukar aiki na gaske ba sa taɓa buƙatar bayanan shiga bankinku; neman su alamar zamba ce." },
      { objective: "O3", q: "Wane abin da ake cirewa ne ya dogara da abin da kuka rubuta a Form W-4?", options: ["Medicare", "Social Security", "Adadin albashinku a sa'a", "Harajin kuɗin shiga na tarayya"], answer: 3, why: "Form W-4 yana gaya wa mai ɗaukar aikinku nawa za a riƙe na harajin kuɗin shiga na tarayya." },
      { objective: "O3", q: "Don atisaye kawai: albashi kafin cirewa $240.00, abubuwan da aka cire $27.36. Nawa ne albashin da ya rage?", options: ["$212.64", "$267.36", "$222.64", "$213.64"], answer: 0, why: "$240.00 - $27.36 = $212.64." },
      { objective: "O3", q: "Mafi ƙarancin albashi na tarayya $7.25 ne, amma na birninku ya fi haka. Wanne ne ke aiki a kanku?", options: ["Na tarayya $7.25", "Duk wanda shugabanku ya zaɓa", "Mafi girman", "Mafi ƙanƙantar"], answer: 2, why: "Idan mafi ƙarancin albashi na jiha ko birni ya fi na tarayya, mafi girman ne ke aiki." },
      { objective: "O4", q: "Manajanku ya ce kun jera kaya a kan shiryayye ba daidai ba. Mene ne amsa mafi kyau?", options: ["Ku yi gardama cewa babu laifi", "Ku ce \"Na gode da kuka gaya min. Za ku iya nuna min hanyar da ta dace?\"", "Ku yi watsi da shi", "Ku yi ƙorafi ga masu saye"], answer: 1, why: "Karɓar gyara cikin natsuwa da tambayar yadda za a gyara shi ne abin da shugabanni ke tsammani." },
      { objective: "O4", q: "Yaushe ya dace ku yi amfani da wayarku yayin aiki?", options: ["Duk lokacin da babu aiki sosai", "Sai lokacin da aikin ya yarda kawai", "Duk lokacin da masu saye ba sa kallo", "Kowane lokaci idan kuna ci gaba da aiki"], answer: 1, why: "Ku ajiye wayarku yayin aiki sai dai idan wurin aikinku ya yarda." },
      { objective: "O4", q: "Kuna buƙatar hutun ranar Asabar don wani taron iyali a wata mai zuwa. Me za ku yi?", options: ["Ku tambayi shugabanku da wuri, ta hanyar da wurin aikinku ya ce", "Ku ƙi zuwa kawai", "Ku gaya wa abokin aiki kawai", "Ku tambaya a daren da ya gabata"], answer: 0, why: "Neman hutu da wuri yana ba shugabanku lokacin tsarawa." },
      { objective: "O5", q: "Kuna da shekara 16 kuma an ce ku yi amfani da injin yanka nama. Me ya kamata ku sani?", options: ["Babu laifi bayan gwadawa sau ɗaya", "Babu laifi idan masu saye ba su gani ba", "Zaɓinku ne", "Injunan yanka nama masu wuta aiki ne mai haɗari da aka hana ga 'yan ƙasa da 18, don haka ku yi magana"], answer: 3, why: "Dokokin tarayya na ayyuka masu haɗari sun hana ma'aikata 'yan ƙasa da 18 tuƙa injunan yanka nama masu wuta." },
      { objective: "O5", q: "Mene ne matakin farko da aka saba idan wani abu a wurin aiki yana da haɗari amma babu wanda ya ji rauni?", options: ["Kiran 'yan jarida", "Saka shi a intanet", "Gaya wa mai kula da ku cikin natsuwa", "Barin aikin ba tare da faɗin komai ba"], answer: 2, why: "Gaya wa mai kula da ku yana ba shi damar gyarawa; sannan ku haura sama idan ba a gyara ba." },
      { objective: "O1", q: "Kuna da shekara 16. Sa'o'i nawa a mako aka yarda ku yi aiki bisa dokar tarayya?", options: ["18", "40", "Babu iyaka a dokar tarayya, amma ku duba jiharku", "8"], answer: 2, why: "Dokar tarayya ba ta iyakance sa'o'i a shekara 16 da 17 ba, amma jiharku na iya iyakancewa." },
      { objective: "O4", q: "Mene ne shugaba ya fi damuwa da shi a ma'aikacin aikin farko?", options: ["Tufafi masu tsada", "Shekarun ƙwarewa", "Sanin mai kamfanin", "Zuwa a kan lokaci da kasancewa mai amana"], answer: 3, why: "Shugabannin aikin farko sun fi neman ɗabi'un amana kamar zuwa a kan lokaci da bin umarni." },
      { objective: "O5", q: "Albashinku ba daidai ba ne kuma manajoji biyu ba su gyara ba. Wace lamba za ku iya kira?", options: ["Wage and Hour Division, 1-866-487-9243", "OSHA kawai", "911", "IRS"], answer: 0, why: "Wage and Hour Division yana kula da ƙorafe-ƙorafe game da albashi, sa'o'i da aikin yara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 2, 3, 4, 6, 9, 15] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An duba sa'o'i da ayyuka", objective: "O1", notYet: "Ba a rubuta dokokin shekaru ba, ko ba a lura da lokacin aiki ko aikin da ya saɓa wa dokokin ba.", meets: "An duba kowane lokacin aiki da aiki da dokokin tarayya da na jiha, tare da ambaton shafin hukuma.", exceeds: "An kuma lura da dokar jiha da ta fi ta tarayya tsauri da yadda take canja jadawalin." },
      { name: "Takardu a shirye", objective: "O2", notYet: "Jerin bai ƙunshi Form I-9, Form W-4 ko tambayar izinin aiki na jiha ba.", meets: "Ya lissafa izinin aiki (idan ana buƙata), katin shaida don Form I-9 da Form W-4, da inda za a samo kowanne.", exceeds: "Ya kuma lissafa yadda za a kiyaye lambobin sirri da alama ɗaya ta zambar aiki." },
      { name: "An duba takardar albashi", objective: "O3", notYet: "Babu albashi kafin cirewa, abubuwan da aka cire ko albashin da ya rage, ko lissafin ba daidai ba ne.", meets: "An rubuta albashi kafin cirewa, kowane abin da aka cire da albashin da ya rage, kuma lissafin ya yi daidai har zuwa sulalla.", exceeds: "Ya kuma kwatanta sa'o'in takardar albashi da rubutun sa'o'i, kuma ya faɗi abin da za a yi idan sun bambanta." },
      { name: "Abin da shugaba ke tsammani", objective: "O4", notYet: "Ɗabi'un ba su da sarari, kamar \"ku zama nagari\".", meets: "Ɗabi'u uku a sarari, kamar isowa da wuri, sanar da rashin zuwa da wuri, da tambaya idan ba a da tabbas.", exceeds: "Kowane ɗabi'a yana da gajeren rubutun abin da mai koyo zai faɗa." },
      { name: "Shirin tsaro", objective: "O5", notYet: "Babu shiri, ko shirin ya tsallake gaya wa mai kula ko ambaton hukuma.", meets: "Ya ambaci wanda za a fara gaya wa, babban mutum amintacce, da OSHA ko Wage and Hour Division tare da lambar waya.", exceeds: "Ya kuma faɗi cewa a fara kiran 911 a lokacin gaggawa kuma ya lissafa alamun gargaɗi na aikin mai koyo." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka fara aiki, horon aiki (internship) ko aikin bazara na matasa cikin kwanaki 90 (binciken biyo baya ko bayanan shirin)",
      "Masu koyo da har yanzu suke a wannan aikin bayan kwanaki 60, da yawan waɗanda suka sami shaida mai kyau",
      "Masu koyo da suka ce sun kwatanta takardar albashi da sa'o'insu aƙalla sau ɗaya (binciken biyo baya na kwanaki 30)",
      "Shirye-shiryen matasa da masu ɗaukar aiki sun ce an rage matsalolin jadawali ko ayyukan da suka saɓa wa dokokin aikin yara"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don buɗe shafukan Ma'aikatar Ƙwadago da na jiha, ko kwafin shafin dokokin aikin yara na jihar da aka buga",
      "Takarda, alƙalami da na'urar lissafi (na'urar lissafi ta waya ma tana aiki)",
      "Form W-4 da Form I-9 marasa rubutu da aka buga daga irs.gov da uscis.gov don a duba (kada a rubuta lambobi na gaske a aji)",
      "Takardar albashi ta ƙirƙira don atisaye",
      "Kusan minti 60 zuwa 75 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kafin kwas ɗin, ku nemo shafukan dokokin aikin yara da mafi ƙarancin albashi na jiharku ku buga muhimman dokokin; sun bambanta daga jiha zuwa jiha kuma suna canjawa.",
      "A shirin aikin bazara na matasa: ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, ana yin ayyukan \"Gwada yanzu\" bibbiyu.",
      "Kada ku taɓa karɓar lambobin Social Security na gaske, kwafin katin shaida ko takardun albashi na gaske; ku yi amfani da misalan ƙirƙira.",
      "Ku yi wasan kwaikwayo na rubutun sanar da rashin zuwa da karɓar gyara a Darasi na 3, da matakan yin magana a Darasi na 6.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Idan mai koyo ya bayyana wani aiki na gaske mai haɗari ko wanda ya saɓa wa doka, ku taimaka masa ya bi matakan Darasi na 6 kuma ku sa mahaifi, mahaifiya ko mai kula da shi a ciki."
    ]
  }
};
