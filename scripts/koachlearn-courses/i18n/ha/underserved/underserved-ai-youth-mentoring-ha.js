"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-youth-mentoring.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-youth-mentoring-ha",
  lang: "ha",
  translationOf: "underserved-ai-youth-mentoring",
  category: "Undeserved Community",
  name: "AI don Jagorancin Matasa (Mentoring)",
  skills: "Bin dokokin tsaro wajen jagorantar yara ƙanana, Shirya zaman jagoranci da AI, Yin tambayoyi masu kyau da sauraro, Koyar da amfani da AI cikin gaskiya don makaranta, Binciken sana'o'i tare, Bibiyar ci gaban matashi",
  outcome: "shirya da jagorantar zaman jagoranci mai aminci na minti 45 tare da matashi, ta amfani da mataimakin AI kyauta don shirya aiki da tambayoyi, da nuna wa matashin yadda ake amfani da AI cikin gaskiya don makaranta da burin sana'a.",
  about: [
    "Matasa a kowace unguwa suna samun ci gaba idan akwai babban mutum mai kula da su a gefensu. Wannan kwas ɗin na masu jagoranci (mentors) ne masu aikin sa-kai a coci-coci, cibiyoyin al'umma, makarantu, ƙungiyoyin wasanni da shirye-shiryen matasa, har da waɗanda sababbi ne a fasaha.",
    "Za ku koyi dokokin tsaro da ke kare matasa da ku kanku, yadda ake shirya zama da mataimakin AI kyauta, yadda ake yin tambayoyin da ke buɗe hira ta gaske, yadda ake taimakon matashi ya yi amfani da AI cikin gaskiya don makaranta, da yadda ake binciken sana'o'i da bibiyar ci gaba tare.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" da ke gina shirin zama na gaske. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Koyaushe ku bi dokokin shirin jagorancinku; su ne a gaba da duk abin da ke cikin wannan kwas."
  ],
  finalTask: "Ku rubuta kuma ku jagoranci (ko ku yi wasan kwaikwayo da wani babban mutum) shirin zaman jagoranci na minti 45 da aka yi da taimakon mataimakin AI kyauta: buri, tambayar buɗe zama, aiki ɗaya, tambayoyi uku a buɗe, ɗan nuni na amfani da AI cikin gaskiya don aikin gida ko sana'a, da bayanin ci gaba na layi ɗaya. Dole shirin ya bi dokokin tsaro na shirinku, kuma kada ya ƙunshi bayanan sirri game da matashin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu jagoranci masu aikin sa-kai a al'ummomin da ba a ba su isasshen tallafi ba, a coci-coci, cibiyoyin al'umma, makarantu, ƙungiyoyin wasanni da shirye-shiryen matasa, har da waɗanda sababbi ne a fasaha.",
    startingPoint: "Suna kula da matasa, kuma wataƙila sun yi renon yara ko horar da wasanni, amma ba a horar da su kan tsaron jagoranci, tambayoyi a buɗe ko shirya zama ba. Da yawa ba su yi amfani da AI sosai ba, kuma ba su da tabbas kan yadda ya kamata matasa su yi amfani da shi don makaranta.",
    gap: "Matasa suna samun ci gaba idan akwai babban mutum mai kula da su, amma masu jagoranci suna buƙatar ɗabi'u masu aminci, shiri don kowane zama, da hanyar jagorantar amfani da AI cikin gaskiya don makaranta da sana'a. Idan babu wannan, zama yana ɓacewa ba tare da manufa ba, sirri yana cikin haɗari, kuma matasa za su iya yin amfani da AI ba daidai ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 7)",
      "Na'urori: wayar zamani (smartphone) ko kwamfutar shirin",
      "Dokokin shirin su ne a gaba: binciken tarihi, haɗuwa a fili, hanyoyin tuntuɓa da aka amince da su, da matakan kai rahoto",
      "Sirri: babu sunan matashi, makarantarsa, hotunansa ko labaransa na sirri a AI ko a takardun da ba a ajiye su lafiya ba",
      "Makarantu da kayan AI suna da nasu dokoki da iyakar shekaru, a duba su tare da malami da mahaifi ko mai kula"
    ],
    prerequisites: "Binciken tarihi da horon shirin jagorancinku. Masu koyo da sababbi ne ga mataimakan AI za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Empowerment\" (Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Duk lokacin da kuka haɗu da matashi", action: "bin dokokin tsaro na shirinku da matakan da za a ɗauka idan matashi ya gaya muku ana cutar da shi", standard: "kuna faɗin aƙalla dokoki biyar da matakan kai rahoto ba tare da taimako ba" },
    { id: "O2", condition: "Ta amfani da mataimakin AI kyauta", action: "shirya zama na minti 45 mai buɗe zama, aiki, tattaunawa da matakai na gaba", standard: "kuna ba AI bayanai na gama-gari kawai, kuma kuna duba shirin don tsaro, kuɗi da dacewa" },
    { id: "O3", condition: "A cikin hira da matashi", action: "yin tambayoyi a buɗe da maimaita abin da kuka ji kafin ku ba da shawara", standard: "kuna amfani da aƙalla tambayoyi uku a buɗe da kalmominku" },
    { id: "O4", condition: "Idan matashi yana amfani da AI don makaranta", action: "nuna amfani da AI cikin gaskiya don bayani, gwaji da ra'ayi kan aiki, da tabbatar da amsoshinsa", standard: "kuna bin dokokin makarantar da na kayan AI, kuma ba ku taɓa miƙa aikin AI a matsayin naku ba" },
    { id: "O5", condition: "Idan aka ba ku abubuwan da matashi yake so", action: "binciken sana'o'i da AI da tabbatar da ɗaya a bls.gov/ooh", standard: "kuna ƙarewa da ƙaramin mataki ɗaya na gaba da kwanan wata" },
    { id: "O6", condition: "Bayan kowane zama", action: "rubuta gajeren bayanin ci gaba na sirri da murnar wata nasara", standard: "kuna amfani da baƙaƙen farko na suna kawai, kuma ba ku taɓa saka bayanan a AI ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Jagoranci mai aminci da ƙarfi tare da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Aikin mai jagoranci da dokokin tsaro",
          minutes: 5,
          goal: "Faɗin dokokin tsaro da za ku bi duk lokacin da kuka haɗu da matashi.",
          text: [
            "Mai jagoranci (mentor) babban mutum ne amintacce da ke sauraro, ƙarfafawa, da taimakon matashi ya kafa buri ya kai gare shi. Ku ba iyayensa ba ne, ba malaminsa ba ne, kuma ba likitan tunani (therapist) ba ne; ku jagora ne mai kula da tsayayye.",
            "Shirye-shirye suna kare matasa da masu jagoranci da dokoki. Waɗanda aka saba gani: binciken tarihi (background check) kafin ku fara, haɗuwa a fili ko a wuraren da aka amince da su, wani babban mutum a kusa maimakon ku kaɗai da matashi, tuntuɓa ta hanyoyin da aka amince da su kaɗai, da rashin ba da abin hawa, kyauta ko kuɗi sai dai idan shirinku ya yarda. Dokar shirinku ita ce wadda za a bi.",
            "Idan matashi ya gaya muku ana cutar da shi ko yana cikin haɗari, ku natsu, ku saurara, kada ku yi alƙawarin ɓoye maganar, kuma ku bi matakan kai rahoto na shirinku nan take. A lokacin gaggawa ku kira 911. Layin waya na Childhelp National Child Abuse Hotline (layin taimako kan cin zarafin yara a Amurka) shi ne (800) 422-4453."
          ],
          steps: ["Ku kammala binciken tarihi da horon shirinku.", "Ku haɗu a fili ko a wuraren da aka amince da su kaɗai, tare da wani babban mutum a kusa.", "Ku yi amfani da hanyoyin tuntuɓa da aka amince da su kaɗai.", "Idan matashi ya gaya muku ana cutar da shi: ku saurara, kada ku yi alƙawarin ɓoyewa, ku bi matakan kai rahoto."],
          words: [["Mai jagoranci (mentor)", "babban mutum amintacce da ke jagora da ƙarfafa matashi."], ["Matashin da ake jagoranta (mentee)", "matashin da ake ba shi jagoranci."], ["Binciken tarihi (background check)", "duba bayanan mutum kafin ya yi aiki da matasa."]],
          sources: [{ name: "Childhelp National Child Abuse Hotline (layin taimako kan cin zarafin yara)", url: "https://www.childhelphotline.org/" }, { name: "MENTOR: Elements of Effective Practice for Mentoring (ka'idojin jagoranci nagari)", url: "https://www.mentoring.org/resource/elements-of-effective-practice-for-mentoring/" }],
          slides: [
            { title: "Mai jagoranci shi ne", bullets: ["Babban mutum amintacce mai kula", "Mai sauraro da ƙarfafawa", "Ba iyaye ba, ba malami ba, ba likitan tunani ba"] },
            { title: "Dokokin tsaro da aka saba", bullets: ["Binciken tarihi da farko", "Wuraren fili ko da aka amince, wani babban mutum a kusa", "Tuntuɓa da aka amince kaɗai; babu abin hawa ko kyauta sai an yarda"] },
            { title: "Idan matashi ya faɗi ana cutar da shi", bullets: ["Ku natsu ku saurara", "Kada ku yi alƙawarin ɓoyewa", "Ku bi matakan kai rahoto; gaggawa: 911"] },
            { title: "Dokar shirinku ita ce a gaba", bullets: ["Layin Childhelp: (800) 422-4453"] }
          ],
          tryIt: "Ku nemo dokar jagoranci ta shirinku (ko ku tambayi mai kula da shirin). Ku rubuta dokoki biyar da za ku bi duk lokacin da kuka haɗu da matashin da kuke jagoranta.",
          youCanNow: "bayyana aikin mai jagoranci da dokokin tsaro da kuke bi.",
          quickCheck: [
            { objective: "O1", q: "Mene ne aikin mai jagoranci?", options: ["Jagora mai kula da tsayayye da ke sauraro da ƙarfafawa", "Wanda ke maye gurbin iyaye", "Likitan tunani", "Malamin da ke ba da maki"], answer: 0, why: "Mai jagoranci babban mutum ne amintacce mai ba da jagora, ba iyaye ba, ba malami ba, ba likitan tunani ba." },
            { objective: "O1", q: "Matashin da kuke jagoranta ya nemi ku kai shi gida bayan zama. Me za ku yi?", options: ["Ku kai shi; alheri ne", "Ku bi dokar shirinku game da kai mutane a mota", "Ku ce masa ya ɓoye maganar", "Ku bar shi ya yi tafiya shi kaɗai da dare"], answer: 1, why: "Kada ku taɓa kai shi a mota sai dai idan shirinku ya yarda; dokar shirin ita ce ƙa'ida." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shirya zama da AI",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI kyauta don shirya zama na minti 45 mai buri a sarari.",
          text: [
            "Zama mai kyau yana da sassa huɗu: buɗe zama (minti 5), aiki (minti 20), tattaunawa kan abin da aka koya (minti 15) da shiri don lokaci na gaba (minti 5).",
            "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini zai iya ba da shawarar ayyuka. Ku bayyana matashin da bayanai na gama-gari kawai: rukunin shekaru, abubuwan da yake so da burinsa. Misali: \"Ka shirya zaman jagoranci na minti 45 ga ɗan shekara 14 da yake son ƙwallon kwando kuma yana son ƙara makinsa a lissafi. Ka haɗa da buɗe zama, aiki mai arha, da tambayoyi uku.\"",
            "Kada ku taɓa ba AI sunan matashi, makarantarsa, adireshinsa, hotunansa, matsalolin iyalinsa ko duk abin da ya gaya muku a amince. Sannan ku duba shirin: Yana da aminci? Kyauta ne ko mai arha? Ya dace da wannan matashin?"
          ],
          steps: ["Ku zaɓi buri ɗaya don zaman.", "Ku bayyana matashin da bayanai na gama-gari kawai: shekaru, abubuwan da yake so, buri.", "Ku nemi AI ya ba da buɗe zama, aiki da tambayoyi.", "Ku duba shirin don tsaro, kuɗi da dacewa, ku canja abin da bai dace ba."],
          words: [["Zama (session)", "haɗuwa ɗaya tsakanin mai jagoranci da matashin da yake jagoranta."], ["Buɗe zama (warm-up)", "farawa gajere mai sauƙi da ke taimakon mutane su sake jiki."]],
          slides: [
            { title: "Zama na minti 45", bullets: ["Buɗe zama: minti 5", "Aiki: minti 20", "Tattaunawa: minti 15; matakai na gaba: 5"] },
            { title: "Ku tambayi AI da bayanai na gama-gari", bullets: ["Rukunin shekaru, abubuwan da yake so, buri", "Ku nemi buɗe zama, aiki, tambayoyi"] },
            { title: "Kada ku taɓa ba AI", bullets: ["Suna, makaranta, adireshi ko hotuna", "Matsalolin iyali ko abin da aka faɗa a amince"] },
            { title: "Ku duba shirin", bullets: ["Yana da aminci?", "Kyauta ne ko mai arha?", "Ya dace da wannan matashin?"] }
          ],
          tryIt: "Ku nemi AI ya shirya zama na minti 45 ga matashin da kuke jagoranta ko wanda za ku iya jagoranta, da bayanai na gama-gari kawai. Ku canja sashe ɗaya don ya fi dacewa.",
          youCanNow: "shirya zaman jagoranci da AI yayin da kuke kiyaye sirrin matashin.",
          quickCheck: [
            { objective: "O2", q: "Minti nawa ne aikin yake ɗauka a shirin zama na minti 45?", options: ["Minti 5", "Minti 10", "Minti 20", "Minti 40"], answer: 2, why: "Shirin shi ne buɗe zama na minti 5, aiki na minti 20, tattaunawa na minti 15 da matakai na gaba na minti 5." },
            { objective: "O2", q: "AI ya ba da shawarar tafiya mai tsada zuwa wurin shaƙatawa (theme park) don zamanku. Me za ku yi?", options: ["Ku yi rajista", "Ku nemi iyalin matashin su biya", "Ku yi amfani da shi yadda yake", "Ku canja shi zuwa aiki na kyauta ko mai arha da ya dace"], answer: 3, why: "Kuna duba shirin AI don tsaro, kuɗi da dacewa, kuma kuna canja abin da bai dace ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin tambayoyi masu kyau da sauraro na gaske",
          minutes: 5,
          goal: "Rubuta tambayoyi uku a buɗe da yin atisayen sauraro ba tare da gaggawar gyarawa ba.",
          text: [
            "Tambayoyi a rufe suna kawo amsar kalma ɗaya: \"Makaranta ta yi kyau?\" \"E.\" Tambayoyi a buɗe suna gayyatar amsa ta gaske: \"Mene ne mafi kyau a makon nan?\" \"Wane abu kake son ka ƙware a kai?\"",
            "Sauraro ya fi magana muhimmanci. Ku dube shi, ku ajiye wayarku, ku gyaɗa kai, kuma ku maimaita abin da kuka ji: \"Wato jarabawar lissafi ba ta yi maka adalci ba saboda ka karanta babin da ba daidai ba?\" Kada ku yi gaggawar gyara komai; ku tambaye shi me yake ganin zai iya gwadawa.",
            "AI zai iya ba da shawarar hanyoyin fara hira don yanayi da abubuwan sha'awa daban-daban. Ku nemi ya ba ku tambayoyi goma a buɗe ga matashin da yake son waƙa, sannan ku zaɓi uku da suka fi kama da yadda kuke magana."
          ],
          steps: ["Ku mayar da tambayoyi a rufe zuwa tambayoyi a buɗe.", "Ku ajiye wayarku ku ba da cikakkiyar kulawa.", "Ku maimaita abin da kuka ji.", "Ku tambaye shi me yake ganin zai iya gwadawa kafin ku ba da shawara."],
          words: [["Tambaya a buɗe", "tambayar da ba za a iya amsa ta da e ko a'a ba."], ["Sauraro da kulawa (active listening)", "sauraro sosai da maimaita abin da kuka ji."]],
          slides: [
            { title: "A rufe da a buɗe", bullets: ["A rufe: \"Makaranta ta yi kyau?\"", "A buɗe: \"Mene ne mafi kyau a makon nan?\""] },
            { title: "Ku saurara da gaske", bullets: ["Ajiye waya, ido a kansa", "Ku gyaɗa kai ku maimaita", "Ku tambayi me zai iya gwadawa kafin shawara"] },
            { title: "AI don fara hira", bullets: ["Ku nemi tambayoyi goma a buɗe", "Ku zaɓi uku da suka yi kama da ku"] }
          ],
          tryIt: "Ku nemi AI ya ba ku tambayoyi goma a buɗe ga matashin da ke da wani abin sha'awa da kuka sani. Ku zaɓi uku, ku sake rubuta su da kalmominku.",
          youCanNow: "yin tambayoyi a buɗe da sauraro ta hanyar da ke taimakon matasa su yi magana.",
          quickCheck: [
            { objective: "O3", q: "Mece ce tambaya a buɗe?", options: ["Wadda ke gayyatar amsa ta gaske, ba e ko a'a kawai ba", "Tambaya mai amsa ɗaya kawai daidai", "Tambaya game da maki kawai", "Tambayar da aka yi da babbar murya"], answer: 0, why: "Tambayoyi a buɗe suna gayyatar matasa su faɗi fiye da kalma ɗaya." },
            { objective: "O3", q: "Matashin da kuke jagoranta ya ce atisayen wasa ya yi muni sosai. Me za ku fara faɗa?", options: ["\"Ka bar ƙungiyar kawai.\"", "\"Wato atisayen yau ya yi maka wuya sosai. Me ya faru?\"", "\"Ni na sha fiye da haka.\"", "\"Mu yi magana kan wani abu daban.\""], answer: 1, why: "Maimaita abin da kuka ji da ƙara tambaya suna nuna kuna sauraro." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Jagoranci mai aminci da ƙarfi tare da AI",
        questions: [
          { objective: "O1", q: "Wace ce dokar tsaro da aka saba a jagoranci?", options: ["Ku haɗu ku kaɗai a motarku", "Ku haɗu a fili ko a wuraren da aka amince, tare da wani babban mutum a kusa", "Ku tura saƙon sirri da tsakar dare", "Ku ba da kuɗi idan an nema"], answer: 1, why: "Wuraren fili ko da aka amince da su tare da wani babban mutum a kusa suna kare kowa." },
          { objective: "O1", q: "Matashin da kuke jagoranta ya gaya muku wani a gida yana cutar da shi, kuma ya roƙe ku ku ɓoye. Ku:", options: ["Ku yi alƙawarin ɓoyewa", "Ku yi watsi da maganar", "Ku saurara, kada ku yi alƙawarin ɓoyewa, ku bi matakan kai rahoto na shirinku", "Ku saka maganar a intanet"], answer: 2, why: "Tsaro ne a gaba; ku bi matakan kai rahoto nan take." },
          { objective: "O2", q: "Wane bayani ne ba laifi a ba AI lokacin shirya zama?", options: ["Cikakken sunan matashin", "Makarantarsa da adireshinsa", "Labarin da ya gaya muku a amince", "\"Ɗan shekara 14 da yake son ƙwallon kwando\""], answer: 3, why: "Bayanai na gama-gari kamar shekaru da abubuwan sha'awa sun isa." },
          { objective: "O3", q: "Wace ce tambaya a buɗe?", options: ["\"Wane abu kake son ka ƙware a kai?\"", "\"Makaranta ta yi kyau?\"", "\"Ka gaji?\"", "\"Ka ci abinci?\""], answer: 0, why: "Ba za a iya amsa ta da e ko a'a ba." },
          { objective: "O3", q: "Matashin da kuke jagoranta ya damu da wani maki. Mataki na farko mai kyau shi ne:", options: ["Ku gaya masa ainihin abin da zai yi", "Ku saurara ku maimaita abin da kuka ji", "Ku duba wayarku", "Ku canja magana"], answer: 1, why: "Sauraro da farko yana sa ya ji an saurare shi, kuma ya yi tunani kan maganar." }
        ]
      }
    },
    {
      name: "Babi na 2: Taimakon matasa su yi amfani da AI yadda ya kamata",
      lessons: [
        {
          objectives: ["O4"],
          title: "Amfani da AI cikin gaskiya don makaranta",
          minutes: 5,
          goal: "Nuna wa matashi yadda ake amfani da AI a matsayin mai koyarwa, ba don ya yi masa aiki ba.",
          text: [
            "Ɗalibai da yawa sun riga sun fara amfani da AI. Makarantu suna da dokoki daban-daban: wasu suna yarda da shi don wasu ayyuka, wasu ba sa yarda. Koyaushe ku fara duba dokokin makarantar da na malamin. Kayan AI da yawa kuma suna da dokar mafi ƙarancin shekaru, kuma suna iya buƙatar izinin mahaifi ko mai kula ga matasa; ku duba sharuɗɗan kowane kayan aiki tare da mahaifi ko mai kula.",
            "Amfani cikin gaskiya yana nufin AI yana taimaka muku ku koya, ba wai ya yi muku aikin ba. Amfani masu kyau: \"Ka bayyana mini juzu'i (fractions) kamar ina ɗan shekara 12.\" \"Ka yi mini gwaji kan waɗannan kalmomi.\" \"Ka ba ni ra'ayi kan sakin layina, amma kada ka sake rubuta shi.\" Kwafar amsoshin AI da miƙa su a matsayin naku magudi ne.",
            "Ku koya musu su tabbatar da AI ma. Yana iya yin kuskure. Ku kwatanta da littafin karatu, rubutun aji ko malamin."
          ],
          steps: ["Ku duba dokokin AI na makarantar da na malamin.", "Ku duba dokar shekaru ta kayan aikin tare da mahaifi ko mai kula.", "Ku yi amfani da AI don bayani, gwaji ko ra'ayi kan aiki.", "Kada ku taɓa miƙa aikin AI a matsayin naku.", "Ku tabbatar da amsoshi da kayan karatun aji."],
          words: [["Mai koyarwa (tutor)", "wani ko wani abu da ke taimaka muku ku koya, ba wai ya yi muku aikin ba."], ["Magudi (cheating)", "miƙa aikin da ba naku ba kamar naku ne."]],
          slides: [
            { title: "Dokoki da farko", bullets: ["Dokokin AI na makaranta da malami", "Iyakar shekaru ta kayan aiki da izinin iyaye"] },
            { title: "AI a matsayin mai koyarwa", bullets: ["\"Ka bayyana juzu'i kamar ina ɗan shekara 12\"", "\"Ka yi mini gwaji kan waɗannan kalmomi\"", "\"Ka ba da ra'ayi, kada ka sake rubutawa\""] },
            { title: "Ba daidai ba", bullets: ["Kwafar amsoshin AI a matsayin naku", "Amincewa da AI ba tare da tabbatarwa ba"] }
          ],
          tryIt: "Tare da matashin da kuke jagoranta (ko ku kaɗai don atisaye), ku nemi AI ya bayyana wani darasi na makaranta da kalmomi masu sauƙi, sannan ya yi muku gwaji da tambayoyi uku. Ku tabbatar da amsa ɗaya da littafin karatu ko rubutun aji.",
          youCanNow: "nuna wa matashi yadda ake amfani da AI cikin gaskiya a matsayin mai taimakon karatu.",
          quickCheck: [
            { objective: "O4", q: "Wace ce buƙata mai kyau ga AI don makaranta?", options: ["\"Ka rubuta mini maƙala.\"", "\"Ka yi mini aikin gida na lissafi.\"", "\"Ka ba ni ra'ayi kan sakin layina, amma kada ka sake rubuta shi.\"", "\"Ka amsa tambayoyin jarabawa.\""], answer: 2, why: "Neman ra'ayi yana taimakon ɗalibi ya koya yayin da yake yin aikinsa da kansa." },
            { objective: "O4", q: "Matashinku ɗan shekara 12 yana son yin rajista a wani kayan AI. Me za ku fara yi?", options: ["Ku yi masa rajista da imel ɗinku", "Ku ce masa ya yi ƙarya game da shekarunsa", "Ku tsallake dokokin makaranta", "Ku duba dokar shekaru ta kayan aikin tare da mahaifi ko mai kula"], answer: 3, why: "Kayan AI da yawa suna da dokokin shekaru da ke buƙatar mahaifi ko mai kula ya duba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Binciken sana'o'i da buri tare",
          minutes: 5,
          goal: "Yi amfani da AI da shafin hukuma don binciken sana'a ɗaya tare da matashin da kuke jagoranta.",
          text: [
            "Matasa sau da yawa suna sanin ayyukan da suke gani a kusa da su kaɗai. Binciken sana'o'i yana buɗe ƙofofi. Ku fara da abin da suke so: wasannin bidiyo, waƙa, wasanni, gyaran abubuwa, taimakon mutane, zane.",
            "Ku tambayi AI: \"Ka jera sana'o'i biyar ga matashin da yake son wasannin bidiyo da zane. Ga kowace, ka faɗi mene ne aikin a jimla ɗaya da abin da za a karanta.\" Sannan ku duba aiki ɗaya tare a Occupational Outlook Handbook a bls.gov/ooh, jagorar kyauta ta gwamnatin Amurka, don tabbatar da albashinsa, horonsa da yadda ake sa ran aikin zai ƙaru.",
            "Ku mayar da sha'awa zuwa ƙaramin buri: shiga ƙungiya (club), ɗaukar darasi kyauta a ɗakin karatu, magana da wanda ke yin wannan aikin, ko gwada darasi kyauta a intanet."
          ],
          steps: ["Ku tambayi abin da yake so.", "Ku nemi AI ya ba da sana'o'i biyar masu alaƙa.", "Ku duba ɗaya a bls.gov/ooh tare.", "Ku kafa ƙaramin mataki ɗaya na gaba da kwanan wata."],
          words: [["Sana'a (career)", "irin aikin da mutum yake yi tsawon shekaru da yawa."], ["Hasashen aiki (job outlook)", "yadda ake sa ran wani aiki zai ƙaru da sauri."]],
          sources: [{ name: "U.S. Bureau of Labor Statistics: Occupational Outlook Handbook (jagorar sana'o'i ta gwamnatin Amurka)", url: "https://www.bls.gov/ooh/" }],
          slides: [
            { title: "Ku fara da abin da suke so", bullets: ["Wasannin bidiyo, waƙa, wasanni", "Gyaran abubuwa, taimakon mutane, zane"] },
            { title: "Ku bincika da AI, ku tabbatar a hukumance", bullets: ["Ku nemi AI ya ba da sana'o'i biyar masu alaƙa", "Ku duba ɗaya a bls.gov/ooh: albashi, horo, hasashe"] },
            { title: "Ƙaramin mataki ɗaya na gaba", bullets: ["Shiga ƙungiya ko darasi kyauta", "Magana da wanda ke wannan aikin", "Ku sa kwanan wata"] }
          ],
          tryIt: "Ku zaɓi wani abin sha'awa (naku ko na matashin da kuke jagoranta). Ku nemi AI ya ba da sana'o'i biyar masu alaƙa, ku duba ɗaya a bls.gov/ooh, kuma ku rubuta ƙaramin mataki ɗaya na gaba da kwanan wata.",
          youCanNow: "taimakon matashi ya binciki sana'o'i ya kuma kafa ƙaramin mataki na gaske na gaba.",
          quickCheck: [
            { objective: "O5", q: "Me Occupational Outlook Handbook yake nunawa game da aiki?", options: ["Albashi, horo da hasashen aiki", "Guraben aiki na kusa da ku kaɗai", "Sana'o'in shahararrun mutane", "Makin makaranta"], answer: 0, why: "Jagorar a bls.gov/ooh tana nuna albashin aiki, horonsa da hasashensa." },
            { objective: "O5", q: "Matashinku yana son zane, kuma AI ya jera mai zanen hotuna (graphic designer). Mene ne mataki mai kyau na gaba?", options: ["Ku gaya masa ba aiki ne na gaske ba", "Ku kafa ƙaramin mataki ɗaya, kamar darasi kyauta a ɗakin karatu, da kwanan wata", "Ku zaɓa masa wata sana'a daban", "Ku jira har ya gama makaranta"], answer: 1, why: "Mayar da sha'awa zuwa ƙaramin mataki mai kwanan wata yana gina ci gaba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bibiyar ci gaba da haɗa komai tare",
          minutes: 5,
          goal: "Ajiye bayanan ci gaba masu sauƙi na sirri, kuma ku kammala shirin zamanku.",
          text: [
            "Gajerun bayanai suna taimaka muku ku tuna buri ku kuma yi murnar nasarori. Bayan kowane zama, ku rubuta layi ɗaya ko biyu: burin, abin da kuka yi, nasara ɗaya da mataki na gaba. Ku yi amfani da sunan farko ko baƙaƙen farko kawai, kuma ku ajiye bayanan inda shirinku ya ce a ajiye su.",
            "Ku yi murnar ci gaba, har da ƙananan matakai: maki da ya ƙaru, takardar neman da aka cike, zuwa a kan lokaci. Matasa suna tunawa idan wani babban mutum ya lura.",
            "Kada ku saka bayanai game da matashi a AI. Idan kuna son taimako, ku tambaya ta hanyar gama-gari: \"Waɗanne hanyoyi masu daɗi ne za a yi murna idan matashi ya ƙara makinsa?\""
          ],
          steps: ["Bayan kowane zama, ku rubuta burin, abin da kuka yi, nasara ɗaya da mataki na gaba.", "Ku yi amfani da baƙaƙen farko kawai, ku ajiye bayanai inda shirinku ya ce.", "Ku yi murnar ƙananan nasarori.", "Ku yi wa AI tambayoyi na gama-gari kawai, ba game da wani takamaiman matashi ba."],
          words: [["Bayanin ci gaba (progress note)", "gajeren rubutu na abin da ya faru da abin da zai biyo baya."]],
          slides: [
            { title: "Bayanan ci gaba masu sauƙi", bullets: ["Buri da abin da kuka yi", "Nasara ɗaya da mataki na gaba", "Baƙaƙen farko kawai; ajiya yadda shirinku ya ce"] },
            { title: "Ku yi murnar ƙananan nasarori", bullets: ["Maki da ya ƙaru", "Takardar neman da aka cike", "Zuwa a kan lokaci"] },
            { title: "Ku hana bayanai shiga AI", bullets: ["Tambayoyi na gama-gari kawai", "Ba game da wani takamaiman matashi ba"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirin zamanku na minti 45 da taimakon AI: buri, buɗe zama, aiki, tambayoyi uku a buɗe, nuni na amfani da AI cikin gaskiya don makaranta ko sana'a, da bayanin ci gaba na layi ɗaya. Ku duba shi da dokokin tsaro na shirinku, sannan ku jagorance shi ko ku yi wasan kwaikwayonsa da wani babban mutum.",
          youCanNow: "shirya, jagoranci da bibiyar zaman jagoranci masu aminci da ke taimakon matasa su yi amfani da AI yadda ya kamata.",
          quickCheck: [
            { objective: "O6", q: "Ta yaya ya kamata ku ambaci matashin da kuke jagoranta a bayanan ci gaba?", options: ["Cikakken suna da makaranta", "Cikakken suna da adireshi", "Baƙaƙen farko ko sunan farko kawai", "Lambar wayarsa"], answer: 2, why: "Baƙaƙen farko ko sunan farko kawai suna kiyaye bayanan matashin a sirri." },
            { objective: "O6", q: "Kuna son shawarwarin yin murnar ƙaruwar makin matashinku. Me za ku tambayi AI?", options: ["Ku saka dukkan bayanan zamanku", "Ku haɗa da sunansa da makarantarsa", "Ku saka takardar sakamakonsa (report card)", "Ku yi tambaya ta gama-gari game da murnar ƙaruwar makin matashi"], answer: 3, why: "Ku yi wa AI tambayoyi na gama-gari kawai, ba game da wani takamaiman matashi ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Taimakon matasa su yi amfani da AI yadda ya kamata",
        questions: [
          { objective: "O4", q: "Kafin matashinku ya yi amfani da AI don aikin gida, ku duba:", options: ["Babu komai", "Yanayin sararin samaniya kawai", "Dokokin AI na makarantar da na malamin", "Shafukansa na sada zumunta"], answer: 2, why: "Makarantu suna da dokokin AI daban-daban; ku fara duba su." },
          { objective: "O4", q: "Wanne ne amfani da AI cikin gaskiya don makaranta?", options: ["Kwafar maƙalar AI", "Sa AI ya yi aikin gida na lissafi", "Miƙa aikin AI a matsayin naku", "\"Ka yi mini gwaji kan waɗannan kalmomi\""], answer: 3, why: "Amfani da AI don atisaye yana taimaka muku ku koya." },
          { objective: "O5", q: "AI ya jera sana'o'i ga matashinku. Ta yaya za ku tabbatar da albashi da horo?", options: ["Ku duba a bls.gov/ooh", "Ku amince da AI", "Ku tambayi baƙo a intanet", "Ku tsallake"], answer: 0, why: "Occupational Outlook Handbook ita ce majiyar hukuma." },
          { objective: "O6", q: "Wane bayanin ci gaba ne ya fi kyau?", options: ["Cikakken suna, makaranta da matsalolin iyali", "\"J.: buri ƙara makin lissafi; an yi atisayen juzu'i; nasara: B a gwaji; gaba: shirin karatu.\"", "Babu komai", "Hoto da aka saka a intanet"], answer: 1, why: "Gajere ne, yana amfani da baƙaƙen farko, kuma yana rubuta burin, nasara da mataki na gaba." },
          { objective: "O6", q: "Za ku iya saka bayananku game da matashi a AI don neman shawara?", options: ["E, koyaushe", "Sai idan gajere ne", "A'a; ku yi tambayoyi na gama-gari kawai", "E, tare da hotonsa"], answer: 2, why: "Bayanai game da matashi suna zama a sirri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Jagorancin Matasa (Mentoring)",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin mai jagoranci shi ne:", options: ["Babban mutum amintacce da ke sauraro da ƙarfafawa", "Maigidan matashi", "Likitan tunani", "Malamin da ke ba da maki"], answer: 0, why: "Masu jagoranci jagorori ne masu kula, ba iyaye ba, ba malamai ba, ba likitocin tunani ba." },
      { objective: "O1", q: "Dokokin wa ne a gaba idan kuna jagoranci?", options: ["Na AI", "Dokar shirin jagorancinku", "Na abokanku", "Na shafukan sada zumunta"], answer: 1, why: "Koyaushe ku bi dokar shirinku." },
      { objective: "O1", q: "Me ake yawan buƙata kafin ku jagoranci matasa?", options: ["Kyauta ga matashin", "Mota", "Binciken tarihi", "Asusun sada zumunta"], answer: 2, why: "Shirye-shirye sau da yawa suna buƙatar binciken tarihi." },
      { objective: "O1", q: "A lokacin gaggawa da ya shafi tsaron matashi, ku:", options: ["Ku jira har mako mai zuwa", "Ku saka a intanet", "Ku tambayi AI", "Ku kira 911"], answer: 3, why: "Gaggawa tana buƙatar taimako nan take." },
      { objective: "O1", q: "Wace lamba ce ke kai ku ga Childhelp National Child Abuse Hotline?", options: ["(800) 422-4453", "(800) 555-0000", "411", "0"], answer: 0, why: "Layin Childhelp shi ne (800) 422-4453." },
      { objective: "O2", q: "Zaman jagoranci mai kyau yana da:", options: ["Lokacin waya kawai", "Buɗe zama, aiki, tattaunawa da matakai na gaba", "Babu shiri", "Jarabawa"], answer: 1, why: "Waɗannan sassa huɗu suna ba zaman tsari." },
      { objective: "O2", q: "Me ba laifi a gaya wa AI lokacin shiryawa?", options: ["Adireshin matashin", "Sunan makarantarsa", "Rukunin shekaru, abubuwan da yake so da buri", "Abin da ya gaya muku a amince"], answer: 2, why: "Bayanai na gama-gari sun isa don shiryawa." },
      { objective: "O2", q: "Bayan AI ya ba da shawarar shirin zama, ya kamata ku:", options: ["Yi amfani da shi ba tare da karantawa ba", "Raba shi a shafukan sada zumunta", "Ƙara sunan matashin", "Duba cewa yana da aminci, mai arha, kuma ya dace da matashin"], answer: 3, why: "Ku kuka san matashin; AI bai san shi ba." },
      { objective: "O3", q: "Wace ce tambaya a rufe?", options: ["\"Makaranta ta yi kyau?\"", "\"Me ya sa ka dariya a makon nan?\"", "\"Me za ka canja a ranarka?\"", "\"Me kake son ka koya a gaba?\""], answer: 0, why: "Ana iya amsa ta da e ko a'a." },
      { objective: "O3", q: "Sauraro da kulawa yana nufin:", options: ["Duba wayarku yayin da yake magana", "Sauraro sosai da maimaita abin da kuka ji", "Yin magana fiye da shi", "Gyara kowace matsala nan take"], answer: 1, why: "Maimaitawa tana nuna kun fahimta." },
      { objective: "O3", q: "Kafin ku ba da shawara, yana da amfani ku:", options: ["Ƙare zaman", "Canja magana", "Tambaye shi me yake ganin zai iya gwadawa", "Tambayi AI game da shi da sunansa"], answer: 2, why: "Ra'ayoyinsa na kansa suna gina masa ƙarfin gwiwa." },
      { objective: "O3", q: "Me AI zai iya taimakon mai jagoranci da shi?", options: ["Ɓoye asirai", "Yanke shawarwarin tsaro", "Maye gurbin mai jagoranci", "Ba da shawarar hanyoyin fara hira"], answer: 3, why: "AI zai iya ba da shawarar tambayoyi; ku ne kuke zaɓa kuma kuke jagoranci." },
      { objective: "O4", q: "Kafin matashi ya yi rajista a kayan AI, ku duba:", options: ["Dokokin shekaru na kayan aikin, tare da mahaifi ko mai kula", "Babu komai", "Launukansa kawai", "Abokai nawa ne ke amfani da shi"], answer: 0, why: "Kayan aiki da yawa suna da iyakar shekaru kuma suna buƙatar izinin iyaye ga matasa." },
      { objective: "O4", q: "Miƙa maƙalar AI a matsayin taku shi ne:", options: ["Ba laifi", "Magudi", "Dole", "Karatu"], answer: 1, why: "Dole aiki ya zama naku." },
      { objective: "O4", q: "Wane prompt ne mai kyau don karatu da AI?", options: ["\"Ka rubuta maƙalata\"", "\"Ka yi dukkan aikin gidana\"", "\"Ka bayyana juzu'i kamar ina ɗan shekara 12, sannan ka yi mini gwaji\"", "\"Ka amsa jarabawata\""], answer: 2, why: "Yana amfani da AI a matsayin mai koyarwa." },
      { objective: "O4", q: "AI ya ba matashinku amsar da ta saɓa da littafin karatu. Ya kamata ya:", options: ["Amince da AI", "Yi watsi da duka biyun", "Canja littafin karatun", "Tabbatar da rubutun aji ko malamin"], answer: 3, why: "AI yana iya yin kuskure; ku tabbatar da kayan karatun aji." },
      { objective: "O5", q: "Hanya mai kyau ta fara binciken sana'o'i ita ce:", options: ["Tambayar abin da matashin yake so", "Zaɓa masa aiki", "Zaɓar aikin da ya fi albashi kawai", "Tsallakewa"], answer: 0, why: "Abubuwan da yake so suna nuna sana'o'in da zai damu da su." },
      { objective: "O5", q: "Jagorar hukuma ta kyauta kan albashi da horon ayyuka ita ce:", options: ["Tallar da ke tasowa (pop-up)", "Occupational Outlook Handbook a bls.gov/ooh", "Bidiyo a shafukan sada zumunta", "Saƙon tes daga baƙo"], answer: 1, why: "U.S. Bureau of Labor Statistics (hukumar ƙididdigar ayyuka ta Amurka) ce ke gudanar da ita." },
      { objective: "O6", q: "Bayanin ci gaba ya kamata ya yi amfani da:", options: ["Cikakkun sunaye da adireshi", "Hotuna", "Baƙaƙen farko da buri, nasara da mataki na gaba", "Asiran iyali"], answer: 2, why: "Gajerun bayanai masu baƙaƙen farko suna kiyaye sirri." },
      { objective: "O6", q: "Me yasa za a yi murnar ƙananan nasarori?", options: ["Doka ta tilasta", "Don a saka a intanet", "Yana maye gurbin buri", "Matasa suna tunawa idan wani babban mutum ya lura"], answer: 3, why: "Lura da ci gaba yana gina ƙwazo da amana." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 1, 5, 6, 8, 9, 13, 14, 16, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Shirin zama", objective: "O2", notYet: "Babu buri, buɗe zama ko aiki, ko bai dace da minti 45 ba.", meets: "Buri, buɗe zama, aiki, tattaunawa da matakai na gaba da suka dace da minti 45.", exceeds: "An canja shirin AI don ya dace da abubuwan da matashin yake so kuma ya kasance mai arha." },
      { name: "Tambayoyi a buɗe", objective: "O3", notYet: "Tambayoyi ƙasa da uku, ko tambayoyin e ko a'a.", meets: "Tambayoyi uku a buɗe da kalmomin mai jagoranci.", exceeds: "Ya haɗa da shirin maimaita abin da matashin ya faɗa." },
      { name: "Nunin AI cikin gaskiya", objective: "O4", notYet: "A nunin, AI ne ke yin aikin, ko an tsallake dokokin makaranta.", meets: "Yana nuna AI yana bayani ko yin gwaji, da tabbatar da amsa ɗaya da kayan karatun aji.", exceeds: "Ya kuma ambaci dokokin shekaru na kayan aikin da dokokin AI na makarantar." },
      { name: "Bayanin ci gaba", objective: "O6", notYet: "Babu bayani, ko yana amfani da cikakken suna ko bayanan sirri.", meets: "Layi ɗaya mai baƙaƙen farko, buri, nasara da mataki na gaba.", exceeds: "Ya faɗi inda za a ajiye bayanin bisa dokokin shirin." },
      { name: "Tsaro da sirri", objective: "O1", notYet: "Shirin ya karya wata dokar tsaro ta shirin ko yana da bayanan sirri game da matashin.", meets: "Yana bin dokokin tsaro na shirin kuma ba shi da bayanan sirri.", exceeds: "Ya jera matakan kai rahoto da mai jagoranci zai bi idan matashi ya faɗi ana cutar da shi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu jagoranci da suka jagoranci aƙalla zama huɗu da aka shirya cikin kwanaki 60 (binciken biyo baya)",
      "Matasan da suka kafa kuma suka kai wani mataki na makaranta ko sana'a, kamar yadda shirin ya ruwaito",
      "Shirye-shiryen da suka ruwaito babu matsalar tsaro ko sirri tsakanin masu jagoranci da aka horar"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfutar shirin",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Dokar jagoranci da tsaro ta shirin",
      "Takarda don shirin zama da bayanan ci gaba",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara da dokar tsaro da matakan kai rahoto na shirinku; wannan kwas ba ya maye gurbinsu.",
      "Ku sa masu jagoranci su yi wasan kwaikwayon zaman da wani babban mutum, ba da matashi ba, a lokacin horo.",
      "Ku duba cewa babu prompt ko bayani da ke ɗauke da sunan matashi, makarantarsa, hotunansa ko labaransa na sirri.",
      "Ku raba lambobin tuntuɓa na yankinku don kai rahoto da layin Childhelp, kuma ku tunatar da masu jagoranci su kira 911 a lokacin gaggawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
