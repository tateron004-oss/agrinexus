"use strict";

// Koach Learn course, Hausa (ha) translation of shared/insurance-license-prep.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const SRC = {
  naicDepts: { name: "NAIC: Nemo ofishin inshora na jiharku", url: "https://content.naic.org/state-insurance-departments" },
  nipr: { name: "NIPR: National Insurance Producer Registry (neman lasisin wakilin inshora da sabunta shi)", url: "https://nipr.com/" },
  tdiAgent: { name: "Texas Department of Insurance: Lasisin wakilan inshora", url: "https://www.tdi.texas.gov/agent/index.html" },
  tdiLifeApply: { name: "Texas Department of Insurance: Yadda ake neman lasisin general lines na rai, haɗari, lafiya da HMO", url: "https://www.tdi.texas.gov/agent/general-life-apply.html" },
  usc1033: { name: "18 U.S.C. 1033 (Cornell Legal Information Institute)", url: "https://www.law.cornell.edu/uscode/text/18/1033" },
  naicUtpa: { name: "NAIC Model Law 880: Dokar Hana Rashin Gaskiya a Kasuwanci (Unfair Trade Practices Act)", url: "https://content.naic.org/sites/default/files/model-law-880.pdf" }
};

module.exports = {
  id: "insurance-license-prep-ha",
  lang: "ha",
  translationOf: "insurance-license-prep",
  category: "Workforce Development",
  name: "Shirin Jarabawar Lasisin Wakilin Inshora",
  skills: "Zaɓar nau'in lasisi, Nemo matakan lasisi na jiharku, Bayanin kalmomin inshora, Lissafin da'awar gwaji, Gane rashin gaskiya wajen sayarwa, Shirin jarabawa",
  outcome: "shirya wa jarabawar lasisin wakilin inshora ta jiharku: zaɓar nau'in lasisin da ya dace, nemo matakan hukuma da jadawalin abin da jarabawar ta ƙunsa, bayanin manyan kalmomi, lissafin da'awar gwaji, gane rashin gaskiya wajen sayarwa, da bin shirin karatu da jarabawa mai ranaku.",
  about: [
    "Wannan kwas ɗin na manya ne da ke son sayar da inshora a matsayin wakili mai lasisi, wanda doka ke kira producer: masu neman aiki, masu canja sana'a, masu dawowa gida daga gidan yari, tsofaffin sojoji da masu son buɗe nasu ofishin inshora. Kowace jihar Amurka ce ke ba wakilan inshora lasisi, ba gwamnatin tarayya ba.",
    "Za ku koyi manyan nau'o'in lasisi, yadda ake nemo matakan jiharku da jadawalin abin da jarabawar ta ƙunsa, manyan kalmomi da ra'ayoyin da jarabawa ke gwadawa, yadda ake lissafin da'awar gwaji da deductible da iyaka, da dokokin gaskiya da ke kare abokan ciniki. A ƙarshe za ku rubuta naku shirin karatu da jarabawa mai ranaku na gaske.",
    "Wannan kwas yana SHIRYA ku don jarabawar. Ba ya ba da lasisi, kuma ba ya maye gurbin kwas ɗin kafin lasisi (prelicensing) da jiharku za ta iya nema. Ofishin inshora na jiharku ne ke sa sharuɗɗa, kuɗaɗe da bayanan jarabawa, kuma suna canjawa, don haka kowane darasi yana nuna muku shafin hukuma. Babu wani abu a nan da ke shawara kan sayen inshora ko zuba jari."
  ],
  finalTask: "Ku rubuta Shirin Karatu da Jarabawar Lasisin Inshora na shafi ɗaya don jiharku: (1) nau'in lasisin da za ku nema da dalili; (2) matakan hukuma na jiharku bi da bi (kwas ɗin kafin lasisi idan ana buƙata, jarabawa da kamfanin jarabawa, ɗaukar zanen yatsa ko binciken tarihi, takardar nema, appointment), kowanne da adireshin shafin hukuma; (3) batutuwa da nauyinsu daga jadawalin abin da jarabawar jiharku ta ƙunsa; (4) jadawalin karatu na kowane mako mai ranaku, ranar jarabawa da kuke nufi, da aƙalla ranaku biyu na jarabawar gwaji tare da makin da kuke son samu; (5) da'awar gwaji uku da kuka lissafa daidai da dokokin gaskiya uku da kalmominku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a Amurka da ke son aikin wakilin inshora (producer) a cibiyar kira, banki, ofishin inshora ko kamfanin inshora, ko masu son buɗe nasu ofishin inshora. Rukuni ne mai haɗaka: masu neman aiki, masu canja sana'a, tsofaffin sojoji, masu dawowa gida daga gidan yari, baƙi da masu ƙananan kasuwanci.",
    startingPoint: "Sun taɓa sayen inshorar mota, ta gidan haya ko ta lafiya amma ba sa yawan karanta takardar inshora (policy). Ba su san yadda lasisi ke aiki ba, wane lasisi za su nema, ko kalmomin da ake amfani da su a jarabawa. Suna iya lissafin kaso (percent) mai sauƙi da ɗan taimako.",
    gap: "Mutane da yawa suna biyan kuɗin kwas ɗin kafin lasisi ko jarabawa ba tare da sanin wane lasisi ya dace da aikin ba, abin da jiharsu ke nema, ko yadda aka gina jarabawar, sai su faɗi ko su haƙura. Sanin hanyar, manyan kalmomi, lissafin da'awa da dokokin gaskiya yana mayar da tsari mai ruɗani zuwa shiri mai ranaku, kuma yana kai wa ga aikin da sau da yawa ba ya buƙatar digiri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 8); ana bayanin kowace kalmar jarabawa",
      "Na'urori: waya ko kwamfutar ɗakin karatu; takarda, alƙalami da na'urar lissafi mai sauƙi sun isa ga kowane aiki",
      "Lokaci: darussa na minti 4 zuwa 6",
      "Lasisi na kowace jiha ne: matakai, sa'o'in kwas ɗin kafin lasisi, kuɗaɗe, kamfanin jarabawa da makin cin jarabawa sun bambanta, don haka masu koyo suna duba shafin hukuma na jiharsu",
      "Binciken tarihi: wasu masu koyo suna da tarihin laifi; kwas ɗin yana bayanin dokar da gaskiya kuma yana tura su ga ofishin jiharsu",
      "Babu shawara kan wace inshora ko zuba jari ya kamata wani ya saya; atisaye yana amfani da lambobin ƙirƙira"
    ],
    prerequisites: "Babu. Masu koyo da ke son taimako da lissafin kaso za su iya fara ɗaukar kwas ɗin \"Everyday Math\" (Lissafin Yau da Kullum)."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku aikin inshora ko wani nau'in inshora", action: "gane wane nau'in lasisi da wane matsayi ne ya dace da shi", standard: "kuna samun aƙalla misalai 5 cikin 6 daidai" },
    { id: "O2", condition: "Don jiharku", action: "nemo matakan lasisi na hukuma, kamfanin jarabawa da jadawalin abin da jarabawar ta ƙunsa", standard: "kuna rubuta kowane mataki da adireshin shafinsa na hukuma" },
    { id: "O3", condition: "Idan aka ba ku jerin kalmomi da ra'ayoyin jarabawa", action: "bayanin manyan kalmomin inshora da ƙa'idojin kwangila da kalmomi masu sauƙi", standard: "da ma'ana daidai ga aƙalla 8 cikin 10" },
    { id: "O4", condition: "Idan aka ba ku da'awar gwaji mai deductible, coinsurance ko iyakar inshora", action: "lissafin nawa kamfanin inshora zai biya da nawa mai inshora zai biya", standard: "daidai har zuwa dala ɗaya a da'awar gwaji 3" },
    { id: "O5", condition: "Idan aka ba ku wani yanayi na sayarwa ko hidima", action: "gane ayyukan rashin gaskiya ko na saɓa wa doka da zaɓar abin da ke na gaskiya", standard: "kuna samun aƙalla yanayi 4 cikin 5 daidai" },
    { id: "O6", condition: "Ta amfani da matakan hukuma na jiharku da jadawalin jarabawa", action: "rubuta shirin karatu da jarabawa mai ranaku don jarabawar lasisinku", standard: "wanda ya ƙunshi kowane mataki na hukuma, kowane batu na jadawalin da aƙalla ranaku biyu na jarabawar gwaji" }
  ],
  chapters: [
    {
      name: "Babi na 1: Hanyarku zuwa lasisin inshora",
      lessons: [
        {
          title: "Aikin wakili da nau'in lasisin da kuke buƙata",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓi nau'in lasisin da ya dace da aikin inshorar da kuke so.",
          text: [
            "Wakilin inshora, wanda doka ke kira producer, yana sayarwa, nema ko tattaunawa kan inshora don abokan ciniki. Kowace jiha tana buƙatar lasisi don yin haka. Captive agent yana sayarwa ga kamfani ɗaya. Independent agent yana sayarwa ga kamfanoni da yawa kuma sau da yawa yana gudanar da ƙaramin kasuwanci. Dole ne kuma kowane kamfanin inshora da wakili ke sayarwa gare shi ya ba shi appointment (amincewa).",
            "Jihohi suna ba da lasisi bisa nau'in iko (line of authority). Manyan nau'o'i huɗu da aka fi sani su ne Life (rai), Accident and Health (haɗari da lafiya ko rashin lafiya), Property (dukiya) da Casualty (alhaki). Mutane da yawa suna farawa da Life da Health tare, ko da Property da Casualty tare. Wasu jihohi kuma suna da ƙaramin lasisin Personal Lines don inshorar gida da mota kaɗai.",
            "Life tana biya idan mutum ya mutu, da wasu inshorori na ajiya na dogon lokaci. Accident and Health tana biyan kuɗin asibiti, kuɗin shiga idan mutum ya kasa aiki saboda rashin lafiya ko rauni (disability), da makamantansu. Property tana biyan lalacewar abubuwan da kuka mallaka, kamar gida ko mota. Casualty tana biyan alhaki (liability), wato kuɗin da kuke bin wani idan kun ji masa rauni ko kun lalata masa kaya.",
            "Sauran ayyukan inshora suna amfani da wani lasisi daban. Adjuster yana bincike da sasanta da'awa. Sayar da wasu kayayyaki irin na zuba jari, kamar variable annuities, yana buƙatar lasisin securities ma. Ku duba jerin nau'o'in lasisi na jiharku kafin ku biya kuɗin kowane kwas."
          ],
          words: [["Producer", "kalmar doka ta wakili ko dillalin inshora mai lasisi da ke sayar da inshora."], ["Line of authority (nau'in iko)", "nau'in inshorar da lasisinku ya ba ku izinin sayarwa, kamar Life ko Property."], ["Appointment (amincewa)", "izinin hukuma daga kamfanin inshora don ku sayar da kayayyakinsa."], ["Liability (alhaki)", "kuɗin da doka ta ce kuna bin wani idan kun ji masa rauni ko kun lalata masa dukiya."], ["Adjuster", "mutumin da ke bincike da sasanta da'awar inshora; yawanci yana da lasisi daban."]],
          slides: [
            { title: "Wakilai su ne producers", bullets: ["Suna sayarwa, nema ko tattaunawa kan inshora", "Kowace jiha tana buƙatar lasisi", "Kowane kamfanin da kuke sayarwa gare shi dole ya ba ku appointment"] },
            { title: "Captive ko independent", bullets: ["Captive: yana sayarwa ga kamfani ɗaya", "Independent: yana sayarwa ga kamfanoni da yawa, sau da yawa yana da kasuwanci"] },
            { title: "Manyan nau'o'i huɗu", bullets: ["Life: tana biya idan wani ya mutu", "Accident and Health: kuɗin asibiti, rashin iya aiki", "Property: lalacewar kayanku", "Casualty: alhaki idan kun cutar da wasu"] },
            { title: "Ku duba kafin ku biya", bullets: ["Adjusters suna buƙatar lasisi daban", "Kayayyakin variable suna buƙatar lasisin securities ma", "Ku fara nemo jerin nau'o'in lasisi na jiharku"] }
          ],
          tryIt: "Ku rubuta ayyukan inshora uku da za ku iya nema (misali wakilin cibiyar kira da ke sayar da inshorar mota, ma'aikacin banki da ke sayar da inshorar rai, ko naku ofishin inshora). Kusa da kowanne, ku rubuta nau'in lasisi ko nau'o'in da yake buƙata.",
          youCanNow: "faɗin aikin producer na inshora da zaɓar nau'in lasisin da ya dace da wani aiki.",
          quickCheck: [
            { objective: "O1", q: "Tallar aiki ta ce za ku sayar da inshorar mota da ta masu gida. Wane nau'in lasisi ne ya dace?", options: ["Life da Health", "Property da Casualty", "Securities kaɗai", "Adjuster kaɗai"], answer: 1, why: "Inshorar mota da ta gida tana biyan lalacewar dukiya da alhaki ga wasu, wato Property da Casualty." },
            { objective: "O1", q: "Mene ne captive agent?", options: ["Wakilin da ke sayarwa ga kamfanin inshora ɗaya kaɗai", "Wakili marar lasisi", "Wakilin da ke sasanta da'awa kaɗai", "Wakilin da ke aiki ga jiha"], answer: 0, why: "Captive agent yana wakiltar kamfani ɗaya; independent agent yana wakiltar kamfanoni da yawa." }
          ]
        },
        {
          title: "Nemo matakan lasisi na hukuma na jiharku",
          objectives: ["O2"],
          minutes: 6,
          goal: "Nemo matakan lasisi na jiharku, kamfanin jarabawa da jadawalin jarabawa a shafukan hukuma.",
          text: [
            "Ofishin inshora na jiharku ne ke yin dokoki. Don ku nemo shi, ku yi amfani da shafin NAIC (National Association of Insurance Commissioners, ƙungiyar masu kula da inshora na jihohi) wanda ke da hanyar haɗi zuwa kowane ofishin jiha. Ku nemi shafukan da ake kira producer licensing, agent licensing ko how to apply.",
            "Yawancin jihohi suna bin hanya iri ɗaya: kwas ɗin kafin lasisi (ana buƙatarsa a jihohi da yawa, ba duka ba), jarabawar jiha da kamfanin jarabawa ke gudanarwa, ɗaukar zanen yatsa ko binciken tarihi, takardar nema, sannan appointment daga kamfanin inshora. Bayan kun sami lasisi, kuna sabunta shi kuma kuna ɗaukar ci gaba da karatu (continuing education). Misali, Texas, lokacin da muka duba a watan Oktoba 2026, tana gudanar da jarabawarta ta Pearson VUE, tana buƙatar zanen yatsa, kuma tana karɓar takardar nema ta Sircon ko NIPR ne kawai bayan kun ci jarabawar.",
            "Kamfanin jarabawa yana fitar da littafin jagora ga masu jarabawa (candidate handbook) da jadawalin abin da jarabawar ta ƙunsa (content outline) don jiharku. Jadawalin yana lissafa kowane batu da yawan tambayoyin da ke fitowa daga kowanne. Shi ne kayan karatu mafi amfani da kuke da shi, kuma kyauta ne.",
            "Idan kuna da tarihin laifi, ku faɗi gaskiya a takardar nema. Wata dokar tarayya (18 U.S.C. 1033) ta ce mutumin da aka yanke masa hukuncin babban laifi (felony) da ya shafi rashin gaskiya ko cin amana yana buƙatar rubutaccen izini daga mai kula da inshora kafin ya yi aikin inshora. Ofishin jiharku yana bayanin yadda ake nema. Kada ku bar mai sayar da kwas ya ce muku hakan ba komai ba ne."
          ],
          steps: ["Ku buɗe shafin ofisoshin inshora na jihohi na NAIC ku zaɓi jiharku.", "Ku nemo shafin lasisin producer ko agent da jerin nau'o'in lasisi.", "Ku rubuta kowane mataki: kwas ɗin kafin lasisi, jarabawa, zanen yatsa, takardar nema, appointment.", "Ku nemo sunan kamfanin jarabawa ku sauke littafin jagora da jadawalin jarabawa na kyauta.", "Ku rubuta adireshin shafin hukuma na kowane mataki da ranar da kuka duba shi."],
          words: [["NAIC", "National Association of Insurance Commissioners: ƙungiyar masu kula da inshora na jihohi."], ["Kwas ɗin kafin lasisi (prelicensing education)", "kwas da wasu jihohi ke buƙata kafin ku iya ɗaukar jarabawar lasisi."], ["Jadawalin jarabawa (content outline)", "jerin batutuwan jarabawa da yawan tambayoyin da ke fitowa daga kowanne."], ["NIPR", "National Insurance Producer Registry: shafin intanet da jihohi da yawa ke amfani da shi don neman lasisi da sabunta shi."], ["Ci gaba da karatu (continuing education)", "darussan da wakilai masu lasisi dole su ɗauka don sabunta lasisinsu."]],
          slides: [
            { title: "Ku fara daga majiyar hukuma", bullets: ["Ofishin inshora na jiharku ne ke yin dokoki", "Ku nemo shi daga shafin ofisoshin jihohi na NAIC", "Ku nemi lasisin producer ko agent"] },
            { title: "Hanyar da aka saba", bullets: ["Kwas ɗin kafin lasisi (jihohi da yawa)", "Jarabawar jiha tare da kamfanin jarabawa", "Zanen yatsa ko binciken tarihi", "Takardar nema, sannan appointment daga kamfanin inshora"] },
            { title: "Ku samo jadawalin kyauta", bullets: ["Kamfanin jarabawa yana fitar da littafin jagora", "Jadawalin yana lissafa batutuwa da yawan tambayoyi", "Ku yi karatu bisa jadawalin"] },
            { title: "Tarihin laifi ba ƙarshe ba ne", bullets: ["Ku faɗi gaskiya a takardar nema", "Wasu manyan laifuka suna buƙatar rubutaccen izinin mai kula", "Ku tambayi ofishin jiharku yadda ake nema"] }
          ],
          sources: [SRC.naicDepts, SRC.nipr, SRC.tdiAgent, SRC.tdiLifeApply, SRC.usc1033],
          tryIt: "Ku buɗe shafin NAIC, ku zaɓi jiharku ku nemo shafinta na lasisin producer. Ku rubuta kowane matakin lasisi bi da bi, sunan kamfanin jarabawa, da adireshin shafin jadawalin jarabawa.",
          youCanNow: "nemo matakan lasisi na hukuma na jiharku, kamfanin jarabawa da jadawalin abin da jarabawar ta ƙunsa.",
          quickCheck: [
            { objective: "O2", q: "A ina za ku sami ainihin matakan lasisi na jiharku?", options: ["Wani rubutu a kafofin sada zumunta", "Tallar kwas ɗin kafin lasisi", "Shafin hukuma na ofishin inshora na jiharku", "Wani abokinku mai lasisi a wata jiha"], answer: 2, why: "Ofishin inshora na kowace jiha ne ke sa dokokin lasisinsa kuma yake fitar da su." },
            { objective: "O2", q: "Wace takarda ta kyauta ce ke faɗa muku batutuwan da ke cikin jarabawar jiharku?", options: ["Takardar biyan inshorar mota", "Shafin declarations na inshora", "Takardar tallar mai ɗaukar ma'aikata", "Jadawalin jarabawa na kamfanin jarabawa"], answer: 3, why: "Jadawalin jarabawa yana lissafa kowane batu da yawan tambayoyin da ke fitowa daga kowanne." }
          ]
        },
        {
          title: "Manyan kalmomi da yadda kwangilar inshora ke aiki",
          objectives: ["O3"],
          minutes: 6,
          goal: "Bayyana manyan kalmomin inshora da ra'ayoyin kwangila da kalmominku.",
          text: [
            "Inshora tana ɗauke haɗari daga mutum zuwa kamfanin inshora. Mai inshora (insured) yana biyan premium. A madadin haka, kamfanin inshora (insurer) yana alƙawarin biyan wasu asara. Policy ita ce rubutacciyar kwangila, kuma shafin declarations yana lissafa wanda da abin da aka ba inshora, iyakokin biya da premium.",
            "Jarabawa tana gwada wasu manyan ra'ayoyi kaɗan. Insurable interest: dole ne ku yi asarar kuɗi idan abin ya faru. Indemnity: inshora tana mayar da ku inda kuke a da, ba ta sa ku fi yadda kuke ba. Utmost good faith (cikakken gaskiya): dole ɓangarorin biyu su faɗi gaskiya, don haka ƙarya a takardar nema (misrepresentation) za ta iya soke inshorar. Underwriting: kamfanin inshora yana nazarin haɗarin don ya yanke ko zai karɓa, kuma a wane farashi.",
            "Policy kwangila ce, don haka tana buƙatar tayi da karɓa (offer and acceptance), consideration (premium da alƙawari), ɓangarorin da suka cancanta, da manufa ta halal. Kuma kwangilar adhesion ce: kamfanin inshora ne ya rubuta ta, abokin ciniki kuma ya karɓe ta yadda take, don haka kalmomin da ba su fito sarari ba yawanci ana fassara su don amfanin abokin ciniki.",
            "Ku koyi waɗannan kalmomi da katunan tunawa (flash cards). Jarabawa sau da yawa tana ba da ɗan labari ta tambayi wane ra'ayi ne yake nunawa."
          ],
          words: [["Premium", "kuɗin da mai inshora ke biya don samun inshora."], ["Insurable interest", "samun asarar kuɗi ta gaske idan abin da aka yi wa inshora ya faru."], ["Indemnity", "biyan asara don ku koma inda kuke a da, ba don ku fi yadda kuke ba."], ["Underwriting", "nazarin haɗari don yanke ko za a ba shi inshora, kuma a wane farashi."], ["Shafin declarations", "shafin policy da ke lissafa wanda aka ba inshora, abin da aka ba inshora, iyakoki da premium."], ["Kwangilar adhesion", "kwangilar da ɓangare ɗaya ya rubuta, ɗayan kuma ya karɓa yadda take."]],
          slides: [
            { title: "Inshora tana ɗauke haɗari", bullets: ["Mai inshora yana biyan premium", "Kamfanin inshora yana alƙawarin biyan asarar da aka ba inshora", "Policy ita ce kwangila"] },
            { title: "Manyan ra'ayoyi a jarabawa", bullets: ["Insurable interest: za ku yi asarar kuɗi", "Indemnity: komawa inda kuke a da", "Utmost good faith: ɓangarorin biyu suna faɗin gaskiya", "Underwriting: yanke ko za a karɓa, kuma a wane farashi"] },
            { title: "Policy kwangila ce", bullets: ["Tayi da karɓa, consideration", "Ɓangarorin da suka cancanta, manufa ta halal", "Adhesion: kalmomin da ba su fito sarari ba suna amfanin abokin ciniki"] }
          ],
          tryIt: "Ku yi katunan tunawa 10 a takarda ko a waya: gefe ɗaya kalmar (premium, insurable interest, indemnity, underwriting, declarations page, consideration, adhesion, misrepresentation, insured, insurer), ɗayan gefen ma'anarta da kalmominku a layi ɗaya. Ku gwada kanku har ku sami 8 cikin 10.",
          youCanNow: "bayanin manyan kalmomin inshora da sassan kwangilar inshora da kalmomi masu sauƙi.",
          quickCheck: [
            { objective: "O3", q: "Wani mutum yana son sayen inshorar gobara a gidan wani baƙo. Wane ra'ayi ne ya hana shi?", options: ["Indemnity", "Underwriting", "Consideration", "Insurable interest"], answer: 3, why: "Ba zai yi asarar kuɗi ba idan gidan baƙon ya ƙone, don haka ba shi da insurable interest." },
            { objective: "O3", q: "Bayan satar da inshora ta rufe, kamfanin inshora ya biya kuɗin TV ɗin da aka sace, ba babban TV ba. Wane ra'ayi ne wannan?", options: ["Indemnity", "Adhesion", "Appointment", "Liability"], answer: 0, why: "Indemnity tana mayar da mai inshora inda yake a da, ba ta sa ya fi yadda yake ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Hanyarku zuwa lasisin inshora",
        questions: [
          { objective: "O1", q: "Za ku sayar da inshorar rai ta term da inshorar kuɗin shiga idan an kasa aiki (disability income). Wane nau'in lasisi ne ya dace?", options: ["Property da Casualty", "Life da Accident and Health", "Personal Lines kaɗai", "Adjuster"], answer: 1, why: "Inshorar rai tana buƙatar nau'in Life, kuma disability income na Accident and Health ne." },
          { objective: "O1", q: "Me appointment daga kamfanin inshora ke yi?", options: ["Yana maye gurbin jarabawar jiha", "Yana ba da lasisin securities", "Yana amince muku a hukumance ku sayar da kayayyakin wannan kamfani", "Yana sa kuɗin lasisi na jiharku"], answer: 2, why: "Lasisi daga jiha yake; sannan kowane kamfanin inshora yana ba ku appointment don ku sayar masa." },
          { objective: "O2", q: "Wane ne ke ba da lasisin wakilin inshora a Amurka?", options: ["Ofishin inshora na kowace jiha", "Gwamnatin tarayya", "Kamfanin inshorar da kuke yi wa aiki", "Kamfanin jarabawa"], answer: 0, why: "Ana ba producers na inshora lasisi jiha bayan jiha." },
          { objective: "O2", q: "An taɓa yanke muku hukuncin babban laifi na zamba (fraud). Mene ne matakin farko na gaskiya?", options: ["Ku bar shi daga takardar nema", "Ku haƙura da aikin inshora", "Ku yi amfani da sunan aboki", "Ku tambayi ofishin jiharku yadda ake neman rubutaccen izinin mai kula"], answer: 3, why: "Dokar tarayya tana buƙatar rubutaccen izini don wasu hukunce-hukunce, kuma ofishin jiha yana bayanin yadda ake nema." },
          { objective: "O3", q: "A takardar nema, mai saye ya ɓoye wata babbar matsalar lafiya. Wace ƙa'ida ce ya karya?", options: ["Indemnity", "Insurable interest", "Utmost good faith", "Adhesion"], answer: 2, why: "Dole ɓangarorin biyu su faɗi gaskiya; babbar ƙarya za ta iya soke inshorar." }
        ]
      }
    },
    {
      name: "Babi na 2: Abin da jarabawa ta ƙunsa da shirin jarabawa",
      lessons: [
        {
          title: "Tushen inshorar rai da lafiya da lissafin da'awar lafiya",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Lissafa wanda zai biya nawa a da'awar lafiya ta gwaji mai deductible da coinsurance.",
          text: [
            "Inshorar rai: term life tana rufe wasu shekaru ƙayyadaddu kuma ba ta da cash value. Inshorar rai ta dindindin (permanent), kamar whole life, za ta iya ɗorewa har ƙarshen rayuwa kuma tana tara cash value. Beneficiary shi ne mutumin da ke karɓar kuɗin mutuwa (death benefit); contingent beneficiary yana karɓa idan na farkon ya riga ya mutu. Mai policy (policyowner) ne ke da iko a kanta, kuma yana iya zama wani daban da wanda aka yi wa inshorar.",
            "Inshorar lafiya tana da nata kalmomi. Deductible shi ne abin da kuke biya kowace shekara kafin inshorar ta fara raba kuɗin da ku. Coinsurance shi ne kason da kuke rabawa bayan haka, kamar 80/20: inshorar tana biyan 80%, ku kuma ku biya 20%. Copay ƙayyadadden adadin dala ne na kowace ziyara. Out-of-pocket maximum shi ne mafi yawan abin da za ku biya a shekara don kulawar da inshora ta rufe.",
            "Don atisaye kawai, lambobin ƙirƙira: kuɗin asibiti $3,000 da inshora ta rufe, deductible $1,000 da ba a biya ba tukuna, coinsurance 80/20. Ku ne kuke biyan $1,000 na farko. Sauran $2,000 ana raba su: inshorar tana biyan 80% ($1,600), ku kuma ku biya 20% ($400). Gaba ɗaya kuna biyan $1,400; inshorar tana biyan $1,600. Dubawa: $1,400 + $1,600 = $3,000."
          ],
          steps: ["Ku rubuta adadin kuɗin da inshora ta rufe.", "Ku cire sashen deductible da har yanzu ba a biya ba; mai inshora ne ke biyan wannan sashe.", "Ku raba abin da ya rage bisa kason coinsurance.", "Ku haɗa deductible da coinsurance na mai inshora; ku tsaya a out-of-pocket maximum.", "Ku duba cewa kasonsu biyu sun kai jimillar kuɗin."],
          words: [["Beneficiary", "mutumin da ke karɓar kuɗi idan wanda aka yi wa inshora ya mutu."], ["Cash value", "ajiyar kuɗi da ke taruwa a cikin inshorar rai ta dindindin."], ["Deductible", "adadin da kuke biya kafin inshora ta fara biya."], ["Coinsurance", "kason kuɗin da kuke rabawa da inshora bayan deductible."], ["Out-of-pocket maximum", "mafi yawan abin da kuke biya a shekarar inshora don kulawar da aka rufe."]],
          slides: [
            { title: "Kalmomin inshorar rai", bullets: ["Term: shekaru ƙayyadaddu, babu cash value", "Whole life: har ƙarshen rayuwa, tana tara cash value", "Beneficiary da contingent beneficiary"] },
            { title: "Kalmomin inshorar lafiya", bullets: ["Deductible: ku ne kuke fara biya", "Coinsurance: kason da ake rabawa, kamar 80/20", "Copay: ƙayyadadden kuɗi na kowace ziyara", "Out-of-pocket maximum: iyakar shekara"] },
            { title: "Da'awar gwaji (lambobin ƙirƙira)", bullets: ["Kuɗi $3,000, deductible $1,000, 80/20", "Ku: $1,000 + 20% na $2,000 = $1,400", "Inshora: 80% na $2,000 = $1,600"] }
          ],
          tryIt: "Don atisaye kawai: ku lissafa wannan da'awa a takarda. Kuɗin asibiti $5,000 da inshora ta rufe, deductible $500 da ba a biya ba tukuna, coinsurance 80/20. Nawa mai inshora zai biya, kuma nawa inshorar za ta biya? (Amsa: mai inshora $500 + $900 = $1,400; inshora $3,600.)",
          youCanNow: "bayanin manyan kalmomin inshorar rai da lafiya da lissafin da'awar lafiya mai deductible da coinsurance.",
          quickCheck: [
            { objective: "O4", q: "Don atisaye kawai: kuɗin asibiti $2,000 da inshora ta rufe, deductible $500 da ba a biya ba tukuna, coinsurance 80/20. Nawa mai inshora zai biya?", options: ["$400", "$500", "$800", "$1,500"], answer: 2, why: "Deductible $500 tare da 20% na sauran $1,500 ($300) ya zama $800." },
            { objective: "O3", q: "Wace inshorar rai ce ke tara cash value?", options: ["Whole life", "Term ta shekara goma", "Term ta shekara ashirin", "Inshorar haɗarin tafiya"], answer: 0, why: "Inshorar dindindin kamar whole life tana tara cash value; term ba ta tarawa." }
          ]
        },
        {
          title: "Tushen inshorar dukiya da alhaki da lissafin da'awar dukiya",
          objectives: ["O1", "O4"],
          minutes: 6,
          goal: "Lissafa abin da inshorar dukiya ko ta alhakin mota za ta biya a da'awar gwaji.",
          text: [
            "Inshorar dukiya tana biyan lalacewar abubuwan da kuka mallaka. Replacement cost tana biyan kuɗin maye gurbin abin da sabon irinsa. Actual cash value tana biyan replacement cost a cire depreciation (raguwar daraja saboda tsufa da amfani). Don atisaye kawai: kujera (sofa) tana kai $1,200 sabuwa kuma ta rage daraja $500, don haka actual cash value ɗinta $700 ne. Ana cire deductible daga kuɗin da za a biya.",
            "Inshorar Casualty (alhaki) tana biyan wasu idan doka ta ce ku ke da alhakin cutar da su. Ana yawan rubuta iyakokin alhakin mota da lambobi uku, kamar 25/50/25: har $25,000 don raunin mutum ɗaya, har $50,000 don duk raunuka a haɗari ɗaya, da har $25,000 don lalacewar dukiya. Jiharku ce ke sa mafi ƙarancin iyakoki; ku duba su.",
            "Don atisaye kawai: direba mai iyakokin 25/50/25 ya ji wa mutum ɗaya rauni, kuma kuɗin asibitinsa $40,000 ne. Inshorar tana biyan $25,000, iyakarta ta kowane mutum. Direban zai iya biyan sauran $15,000 da kansa. Shi yasa wakilai suke bayanin iyakoki a hankali."
          ],
          steps: ["Ku nemo adadin asarar da nau'in inshorar.", "Don actual cash value, ku cire depreciation daga replacement cost.", "Ku cire deductible.", "Ku kwatanta da iyakar inshora; kamfanin inshora ba ya taɓa biyan fiye da iyakar.", "Duk abin da ya wuce iyakar, mai inshora ne zai biya."],
          words: [["Replacement cost", "kuɗin maye gurbin abu da sabo mai irin nau'insa da ingancinsa."], ["Actual cash value", "replacement cost a cire depreciation."], ["Depreciation", "raguwar daraja saboda tsufa da amfani."], ["Iyakar inshora (policy limit)", "mafi yawan abin da kamfanin inshora zai biya don asarar da aka rufe."], ["Split limits", "iyakokin alhakin mota da aka rubuta da lambobi uku, kamar 25/50/25."]],
          slides: [
            { title: "Dukiya: hanyoyi biyu na biya", bullets: ["Replacement cost: sabon abu mai irin nau'insa", "Actual cash value: replacement cost a cire depreciation", "Ana cire deductible daga kuɗin da za a biya"] },
            { title: "Casualty: alhaki ga wasu", bullets: ["Tana biya idan doka ta ce kun cutar da wasu", "Iyakokin mota kamar 25/50/25", "Jiharku ce ke sa mafi ƙarancin iyakoki"] },
            { title: "Da'awar gwaji (lambobin ƙirƙira)", bullets: ["25/50/25, mutum ɗaya ya ji rauni, kuɗin asibiti $40,000", "Inshora tana biyan iyakar $25,000 ta kowane mutum", "Direban zai iya bin sauran $15,000"] }
          ],
          tryIt: "Don atisaye kawai: gobara a kicin ta jawo lalacewa ta $18,000 da inshora ta rufe. Inshorar gidan tana biyan replacement cost, deductible $1,000 ne, kuma iyakar gidan $250,000 ce. Ku rubuta abin da kamfanin inshora zai biya da abin da mai gidan zai biya. (Amsa: kamfanin inshora $17,000; mai gida $1,000.)",
          youCanNow: "bambance inshorar dukiya da ta alhaki, da lissafin da'awar gwaji mai depreciation, deductible da iyakoki.",
          quickCheck: [
            { objective: "O4", q: "Don atisaye kawai: TV yana kai $900 sabo kuma ya rage daraja $300. Nawa ne actual cash value ɗinsa?", options: ["$300", "$900", "$1,200", "$600"], answer: 3, why: "Actual cash value shi ne replacement cost a cire depreciation: $900 - $300 = $600." },
            { objective: "O1", q: "Wani abokin ciniki ya ji wa direban kawo kaya rauni a gida ba da gangan ba, kuma an kai shi ƙara. Wace inshora ce za ta biya?", options: ["Life", "Casualty (alhaki)", "Disability income", "Lalacewar dukiyar gidan"], answer: 1, why: "Inshorar alhaki tana biyan wasu idan doka ta ce mai inshora ne ke da alhakin cutar da su." }
          ]
        },
        {
          title: "Dokokin gaskiya da shirinku na karatu da jarabawa",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Gane rashin gaskiya wajen sayarwa da rubuta shirin karatu da jarabawa mai ranaku.",
          text: [
            "Jihohi suna da dokokin hana rashin gaskiya a kasuwanci (unfair trade practices), kuma kowace jarabawa tana gwada su. Misrepresentation ita ce yin ƙarya ko ɓoye abin da policy ke yi. Twisting shi ne lallashin abokin ciniki ya canja policy da ƙarya ko kwatanci mai ruɗi, har ya cutu. Churning shi ne canja policies akai-akai musamman don samun sabbin komishan. Rebating shi ne ba da wani sashe na komishan ɗinku ko kyauta don samun ciniki; ya saɓa wa doka a jihohi da yawa, don haka ku duba dokar jiharku. Premium da kuka karɓa na abokin ciniki da kamfanin inshora ne: wakili yana riƙe shi a matsayin amana (fiduciary duty) kuma kada ya haɗa shi da kuɗinsa na kansa (commingling).",
            "Abin da ke na gaskiya mai sauƙi ne: ku faɗi gaskiya game da abin da inshora ta rufe, ku sa bukatun abokin ciniki a gaba, ku kwatanta policies da adalci, ku rubuta abubuwa, kuma ku ware kuɗin premium. Idan ba ku tabbata ba, ku tambayi manajanku ko ofishin jiha.",
            "Yanzu ku yi shiri. Ku yi amfani da jadawalin jarabawa na jiharku don lissafa kowane batu da yawan tambayoyinsa. Ku ba batutuwa masu nauyi ƙarin kwanakin karatu. Ku sa ranar jarabawa da kuke nufi, ranaku biyu ko fiye na jarabawar gwaji da makin da kuke son samu. Ku gama duk kwas ɗin kafin lasisi da ake buƙata kafin ku yi rajistar jarabawa. Ku karanta kowace tambayar jarabawa sau biyu kuma ku lura da kalmomi kamar EXCEPT (sai dai) da NOT (ba).",
            "Aikin ƙarshe: ku rubuta Shirinku na Karatu da Jarabawa na shafi ɗaya mai nau'in lasisinku, matakan hukuma na jiharku da adireshin shafukansu, batutuwan jadawalin da nauyinsu, jadawalin mako-mako mai ranaku, ranakun jarabawar gwaji, da'awar gwaji uku da dokokin gaskiya uku."
          ],
          steps: ["Ku lissafa matakan hukuma na jiharku bi da bi da adireshin shafukansu.", "Ku kwafi kowane batu na jadawalin da yawan tambayoyinsa.", "Ku ba batutuwan da ke da tambayoyi mafi yawa ƙarin kwanakin karatu.", "Ku zaɓi ranar jarabawa da kuke nufi da aƙalla ranaku biyu na jarabawar gwaji tare da makin da kuke son samu.", "Ku ƙara da'awar gwaji uku da dokokin gaskiya uku da kalmominku."],
          words: [["Misrepresentation", "yin ƙarya ko ɓoye abin da policy ke yi ko kuɗinta."], ["Twisting", "amfani da ƙarya ko kwatanci mai ruɗi don sa abokin ciniki ya canja policy."], ["Churning", "canja policies akai-akai musamman don samun komishan."], ["Rebating", "mayar da wani sashe na komishan ko ba da kyauta don samun ciniki; ya saɓa wa doka a jihohi da yawa."], ["Fiduciary (mai amana)", "mutumin da aka amince masa ya kula da kuɗin wani da gaskiya."], ["Commingling", "haɗa kuɗin premium na abokin ciniki da kuɗinku na kanku."]],
          slides: [
            { title: "Ayyukan da jarabawa ke gwadawa", bullets: ["Misrepresentation: ƙarya game da policy", "Twisting: ruɗar abokin ciniki ya canja policy", "Churning: canjawa don samun komishan", "Rebating: ya saɓa wa doka a jihohi da yawa, ku duba taku"] },
            { title: "Kuɗin premium", bullets: ["Kuna riƙe shi a matsayin amana: fiduciary duty", "Kada ku taɓa haɗa shi da kuɗinku"] },
            { title: "Ku gina shirinku", bullets: ["Matakai da adireshin shafuka daga jiharku", "Batutuwan jadawalin da nauyinsu", "Jadawalin mako-mako mai ranaku da jarabawar gwaji"] },
            { title: "A ranar jarabawa", bullets: ["Ku karanta kowace tambaya sau biyu", "Ku lura da EXCEPT da NOT", "Ku kawo katin shaidar da littafin jagora ya nema"] }
          ],
          sources: [SRC.naicUtpa, SRC.naicDepts],
          tryIt: "Aikin ƙarshe: ku rubuta Shirinku na Karatu da Jarabawar Lasisin Inshora a shafi ɗaya, ta amfani da matakan hukuma da jadawalin jarabawa na jiharku, da ranaku na gaske ga kowane makon karatu, jarabawar gwaji biyu da ranar jarabawa da kuke nufi.",
          youCanNow: "gane rashin gaskiya wajen sayarwa, zaɓar abin da ke na gaskiya, da bin shirin karatu da jarabawa mai ranaku don jarabawar lasisinku.",
          quickCheck: [
            { objective: "O5", q: "Wani wakili ya faɗa wa wata tsohuwa cewa tsohuwar policy ɗinta \"ba ta da amfani\" don ta sayi sabuwa da ke ba wakilin ƙarin kuɗi. Mene ne wannan?", options: ["Underwriting", "Indemnity", "Twisting", "Appointment"], answer: 2, why: "Amfani da magana mai ruɗi don sa abokin ciniki ya canja policy shi ne twisting." },
            { objective: "O6", q: "Jadawalin jarabawa na jiharku ya ba wani batu tambayoyi fiye da sauran sosai. Me za ku yi a shirinku?", options: ["Ku ba wannan batu ƙarin kwanakin karatu", "Ku tsallake shi domin yana da tsawo", "Ku karanta ƙananan batutuwa kaɗai", "Ku yi watsi da jadawalin"], answer: 0, why: "Batutuwan da ke da tambayoyi da yawa sun cancanci ƙarin lokacin karatu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Abin da jarabawa ta ƙunsa da shirin jarabawa",
        questions: [
          { objective: "O4", q: "Don atisaye kawai: kuɗin asibiti $4,000 da inshora ta rufe, an riga an biya deductible, coinsurance 80/20. Nawa inshorar za ta biya?", options: ["$800", "$4,000", "$3,000", "$3,200"], answer: 3, why: "Tunda an biya deductible, inshorar tana biyan 80% na $4,000, wato $3,200." },
          { objective: "O4", q: "Don atisaye kawai: lalacewar guguwa ta $12,000 da inshora ta rufe, replacement cost, deductible $2,000. Nawa kamfanin inshora zai biya?", options: ["$10,000", "$12,000", "$14,000", "$2,000"], answer: 0, why: "Ana cire deductible daga asarar: $12,000 - $2,000 = $10,000." },
          { objective: "O3", q: "Wane ne ke karɓar kuɗin mutuwa idan beneficiary na farko ya riga ya mutu?", options: ["Wakilin", "Contingent beneficiary", "Kamfanin inshora", "Jiha"], answer: 1, why: "Contingent beneficiary shi ne na gaba idan beneficiary na farko ya mutu." },
          { objective: "O5", q: "Wani abokin ciniki ya biya ku premium da tsabar kuɗi. Me za ku yi da shi?", options: ["Ku saka shi a asusunku na kanku zuwa wani lokaci", "Ku kashe shi ku mayar daga baya", "Ku riƙe shi a matsayin kuɗin amana, a ware kamar yadda ofishinku da jiharku suka buƙata", "Ku mayar wa abokin ciniki wani sashe a matsayin godiya"], answer: 2, why: "Ana riƙe premium a matsayin amana; haɗa shi da kuɗinku shi ne commingling." },
          { objective: "O6", q: "Me ya kamata ya kasance a cikin shirin karatu da jarabawa mai kyau?", options: ["Ranar jarabawa kaɗai", "Matakan hukuma, batutuwan jadawalin, makonnin karatu masu ranaku da jarabawar gwaji", "Jerin komishan na wakilin", "Amsoshin da aka kwafo daga wani shafin intanet"], answer: 1, why: "Cikakken shiri yana ƙunshe da matakan hukuma, batutuwan jadawalin da ranaku na gaske na karatu da atisaye." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirin Jarabawar Lasisin Wakilin Inshora",
    questions: [
      { objective: "O1", q: "Mene ne kalmar doka ta wakilin inshora mai lasisi da ke sayar da inshora?", options: ["Producer", "Underwriter", "Adjuster", "Actuary"], answer: 0, why: "Dokokin jihohi suna kiran wakilai da dillalai masu lasisi producers." },
      { objective: "O1", q: "Wani banki ya ɗauke ku aiki don sayar da inshorar rai da inshorar rashin iya aiki na dogon lokaci. Wane nau'in lasisi kuke buƙata?", options: ["Property da Casualty", "Personal Lines", "Life da Accident and Health", "Adjuster"], answer: 2, why: "Inshorar rai tana buƙatar Life, kuma inshorar rashin iya aiki (disability) ta Accident and Health ce." },
      { objective: "O1", q: "Wane aiki ne yawanci ke buƙatar lasisi daban da na wakili?", options: ["Sayar da inshorar gidan haya", "Sayar da term life", "Sayar da inshorar mota", "Bincike da sasanta da'awa a matsayin adjuster"], answer: 3, why: "Adjusters suna bincike da sasanta da'awa kuma yawanci suna buƙatar nasu lasisi." },
      { objective: "O2", q: "Wane shafin intanet ne ke taimaka muku nemo ofishin inshora na kowace jiha?", options: ["Shafin ofisoshin inshora na jihohi na NAIC", "Shafin rubutu (blog) na mai sayar da kwas", "Rukunin kafofin sada zumunta", "Dandalin tattaunawa a intanet"], answer: 0, why: "NAIC, ƙungiyar masu kula da inshora na jihohi, tana da hanyar haɗi zuwa kowane ofishin jiha." },
      { objective: "O2", q: "A Texas, lokacin da muka duba, yaushe za ku iya neman lasisin general lines?", options: ["Kafin ɗaukar kowace jarabawa", "Bayan cin jarabawar jiha", "Sai bayan shekaru biyar na aiki", "Ta kamfanin inshora kaɗai"], answer: 1, why: "TDI ta ce a fara cin jarabawar sannan a nema ta Sircon ko NIPR." },
      { objective: "O2", q: "Abokinku ya ce ana buƙatar kwas na sa'o'i 20 a ko'ina. Me za ku yi?", options: ["Ku yarda", "Ku biya kwas mafi tsawo da za ku samu", "Ku duba shafin ofishin jiharku", "Ku tsallake duk wani kwas"], answer: 2, why: "Dokokin kwas ɗin kafin lasisi sun bambanta tsakanin jihohi, don haka ku duba shafin hukuma." },
      { objective: "O3", q: "Mene ne premium?", options: ["Adadin da kamfanin inshora ke biya a da'awa", "Kuɗin da mai inshora ke biya don samun inshora", "Lasisin wakili", "Iyakar inshora"], answer: 1, why: "Premium shi ne abin da mai inshora ke biya don sayen inshora." },
      { objective: "O3", q: "Wane shafi na policy ne ke lissafa wanda aka ba inshora, iyakoki da premium?", options: ["Wasiƙar rakiya", "Takardar da'awa", "Takardar nema", "Shafin declarations"], answer: 3, why: "Shafin declarations yana taƙaita wanda da abin da aka ba inshora, iyakoki da premium." },
      { objective: "O3", q: "Me yasa yawanci ake fassara kalmomin policy da ba su fito sarari ba don amfanin abokin ciniki?", options: ["Domin policy kwangilar adhesion ce da kamfanin inshora ya rubuta", "Domin wakilin ne ya rubuta ta", "Domin abokin ciniki koyaushe yana da gaskiya", "Saboda indemnity"], answer: 0, why: "Kamfanin inshora ne ya rubuta kwangilar, abokin ciniki kuma ya karɓe ta yadda take, don haka kalmomin da ba su fito sarari ba suna amfanin abokin ciniki." },
      { objective: "O3", q: "Wace inshorar rai ce ke rufe wasu shekaru ƙayyadaddu kuma ba ta da cash value?", options: ["Whole life", "Universal life", "Term life", "Permanent life"], answer: 2, why: "Term life tana rufe ƙayyadadden lokaci kuma ba ta tara cash value." },
      { objective: "O4", q: "Don atisaye kawai: kuɗin asibiti $6,000 da inshora ta rufe, deductible $1,000 da ba a biya ba tukuna, coinsurance 80/20. Nawa mai inshora zai biya?", options: ["$1,200", "$2,000", "$1,000", "$5,000"], answer: 1, why: "Deductible $1,000 tare da 20% na sauran $5,000 ($1,000) ya zama $2,000." },
      { objective: "O4", q: "Don atisaye kawai: direba mai iyakokin 25/50/25 ya ji wa mutum ɗaya rauni, kuɗin asibitinsa $30,000. Nawa inshorar za ta biya don wannan mutum?", options: ["$30,000", "$50,000", "$5,000", "$25,000"], answer: 3, why: "Iyakar rauni ta kowane mutum $25,000 ce; direban zai iya bin sauran $5,000." },
      { objective: "O4", q: "Don atisaye kawai: kwamfutar tafi-da-gidanka (laptop) tana kai $1,000 sabuwa kuma ta rage daraja $400; deductible $100 ne. Nawa inshorar actual cash value za ta biya?", options: ["$500", "$600", "$900", "$1,000"], answer: 0, why: "Actual cash value shi ne $1,000 - $400 = $600, a cire deductible $100, ya zama $500." },
      { objective: "O4", q: "Wane adadi ne ke iyakance abin da mutum zai biya don kulawar lafiya da aka rufe a shekara?", options: ["Copay", "Premium", "Out-of-pocket maximum", "Deductible"], answer: 2, why: "Out-of-pocket maximum shi ne mafi yawan abin da mai inshora zai biya a shekarar inshora don kulawar da aka rufe." },
      { objective: "O5", q: "Wani wakili ya ba abokin ciniki katin kyauta (gift card) na $100 don ya sayi policy. Me ake kiran wannan?", options: ["Twisting", "Rebating", "Underwriting", "Indemnity"], answer: 1, why: "Ba da wani abu mai daraja don samun ciniki shi ne rebating, wanda ya saɓa wa doka a jihohi da yawa." },
      { objective: "O5", q: "Wani wakili yana canja policy ta abokin ciniki kowace shekara musamman don samun sabbin komishan. Mene ne wannan?", options: ["Churning", "Coinsurance", "Appointment", "Utmost good faith"], answer: 0, why: "Canjawa akai-akai musamman don komishan shi ne churning." },
      { objective: "O5", q: "Abokin ciniki ya tambaya ko wata policy mai arha tana rufe lalacewar ambaliyar ruwa, kuma ba ku tabbata ba. Me za ku yi?", options: ["Ku ce eh don ku kammala ciniki", "Ku canja magana", "Ku ce ambaliya koyaushe ana rufe ta", "Ku duba kalmomin policy ko ku tambayi kamfanin kafin ku amsa"], answer: 3, why: "Yin hasashe game da abin da aka rufe yana jawo haɗarin misrepresentation; ku fara dubawa ku faɗi gaskiya." },
      { objective: "O6", q: "Mene ne mataki na farko mafi kyau wajen gina shirin karatun jarabawarku?", options: ["Ku yi rajistar jarabawa gobe", "Ku sayi kwas mafi tsada", "Ku samo matakan hukuma na jiharku da jadawalin jarabawa", "Ku haddace tambayoyin atisaye barkatai"], answer: 2, why: "Matakan hukuma da jadawalin suna nuna abin da za ku yi da abin da za ku karanta." },
      { objective: "O6", q: "Makinku na jarabawar gwaji ta farko ya gaza abin da kuke so. Me za ku canja a shirinku?", options: ["Ku ƙara kwanakin karatu ga batutuwan jadawalin da kuka fi rauni, ku sa wata jarabawar gwaji", "Ku soke shirin", "Ku ɗauki ainihin jarabawar nan take", "Ku karanta batutuwan da kuka riga kuka sani kaɗai"], answer: 0, why: "Jarabawar gwaji tana nuna batutuwa masu rauni; ku ƙara lokaci a nan ku sake gwadawa kafin ainihin jarabawar." },
      { objective: "O6", q: "A jarabawar, wata tambaya ta tambayi wane abu ne aka rufe \"EXCEPT\" (sai dai). Me ya kamata ku yi?", options: ["Ku zaɓi magana ta farko da ke gaskiya", "Ku tsallake ta", "Ku yi hasashe da sauri", "Ku karanta ta sau biyu ku zaɓi abin da BA a rufe ba"], answer: 3, why: "EXCEPT tana neman zaɓi ɗaya da bai dace ba; karantawa sau biyu yana hana kuskuren rashin kulawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 6, 8, 10, 12, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Nau'in lasisi daidai", objective: "O1", notYet: "Ba a ambaci nau'in lasisi ba, ko an ambaci wanda bai dace da aikin ba.", meets: "Ya ambaci nau'in lasisin da ya dace da aikin kuma ya faɗi dalili.", exceeds: "Ya kuma ambaci nau'i na biyu ko wani lasisi da mai koyo zai iya buƙata daga baya da dalili." },
      { name: "Matakan hukuma", objective: "O2", notYet: "Matakai sun ɓace ko sun fito daga talla ko abokai.", meets: "Kowane mataki daga shafin hukuma na jihar, bi da bi, da adireshin shafuka.", exceeds: "Ya ƙara ranar da aka duba, littafin jagora na kamfanin jarabawa da duk wani matakin binciken tarihi." },
      { name: "Batutuwan jadawali da kalmomi", objective: "O3", notYet: "Babu batutuwan jadawali, ko an yi bayanin manyan kalmomi ba daidai ba.", meets: "Ya lissafa kowane batu na jadawalin da nauyinsa kuma ya yi bayanin manyan kalmomi daidai.", exceeds: "Ya nuna batutuwan da mai koyo ya fi rauni a kai kuma ya ƙara katunan tunawa don su." },
      { name: "Da'awar gwaji", objective: "O4", notYet: "Da'awa ƙasa da uku, ko amsoshi ba daidai ba.", meets: "Da'awar gwaji uku da aka lissafa daidai, ana nuna kowane mataki.", exceeds: "Da'awar sun haɗa da deductible, coinsurance da iyakar inshora, kowanne da dubawar lissafin." },
      { name: "Dokokin gaskiya", objective: "O5", notYet: "Dokoki sun ɓace ko ba daidai ba.", meets: "Dokokin gaskiya uku da aka yi bayani daidai da kalmomin mai koyo.", exceeds: "Kowace doka tana da ɗan misali na abin da ke na gaskiya." },
      { name: "Shiri mai ranaku", objective: "O6", notYet: "Babu ranaku, ko babu jarabawar gwaji.", meets: "Jadawalin mako-mako mai ranaku, ranar jarabawa da ake nufi da jarabawar gwaji biyu tare da makin da ake son samu.", exceeds: "Ƙarin kwanakin karatu sun tafi ga batutuwan jadawalin mafi nauyi, tare da ranar jarabawa ta ajiya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajistar jarabawar lasisi ta jiharsu cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka ce sun ci jarabawar jiha kuma sun sami lasisi (binciken biyo baya)",
      "Masu koyo da suka ce sun sami tayin aiki ko appointment a matsayin wakilin inshora, ko suka buɗe nasu ofishin inshora"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don buɗe shafukan hukuma na jiha",
      "Takarda, alƙalami da na'urar lissafi mai sauƙi",
      "Jadawalin jarabawa na jihar mai koyo da littafin jagora ga masu jarabawa (kyauta daga kamfanin jarabawa)",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama, da ƙarin lokaci don shirin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku haɗa masu koyo bisa jiharsu idan za ku iya, ku buɗe shafin lasisi na kowace jiha tare; kada ku ba da dokokin jiha ɗaya kamar sun shafi ko'ina.",
      "Ku bayyana sarai cewa kwas ɗin yana shirya masu koyo ne, ba ya maye gurbin kwas ɗin kafin lasisi da jiha ke buƙata, kuma ba ya ba da lasisi.",
      "Ga masu koyo da ke da tarihin laifi, ku yi bayanin dokar rubutaccen izini da gaskiya ku tura su ga ofishin jiharsu; kada ku yi hasashe game da shari'arsu.",
      "Duk lissafin da'awa yana amfani da lambobin ƙirƙira; kada ku ba da shawara kan wace policy ya kamata wani ya saya.",
      "Ku ba da maki ga shirin ƙarshe da ma'aunin rubric, kuma ku duba cewa kowane mataki yana da adireshin shafin hukuma."
    ]
  }
};
