"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-health-wellness-accessibility.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-health-wellness-accessibility-ig",
  lang: "ig",
  translationOf: "seniors-health-wellness-accessibility",
  category: "Seniors and Technology",
  name: "Ahụike, Ọdịmma na Ịdị Mfe Iji Teknụzụ",
  skills: "Ime ka mkpụrụ okwu buo ibu, Iji ihe mbuli anya na ịgụpụta n'olu, Ịgbanye captions, Ịtọ ncheta ọgwụ, Iji AI kwadebe ajụjụ maka dọkịta, Ịchọta ozi ahụike a pụrụ ịtụkwasị obi",
  outcome: "ịhazi ekwentị ma ọ bụ tablet gị ka ọ dị mfe ịhụ na ịnụ, ịtọ ncheta ọgwụ kwa ụbọchị, na iji ngwa enyemaka AI kwadebe ndepụta ajụjụ doro anya maka oge ọzọ ị ga-ahụ dọkịta.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye chọrọ ka teknụzụ nyere anya ha, ntị ha na ahụike ha aka, ọ bụghị ka o megide ha. Ọ dịghị mkpa ka ị zụta ihe ọhụrụ; ọtụtụ ngwa ndị a dịlarị n'ekwentị ma ọ bụ tablet gị.",
    "N'Isi 1, ị ga-eme ka mkpụrụ okwu buo ibu, jiri ekwentị gị dị ka iko mbuli anya, mee ka ọ gụpụta ihe n'olu, ma gbanye captions. N'Isi 2, ị ga-atọ ncheta ọgwụ, jiri AI kwadebe maka ịhụ dọkịta, ma mụta ebe ị ga-ahụ ozi ahụike a pụrụ ịtụkwasị obi.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Onye ezinụlọ nwere ike inyere aka na ntọala na nke mbụ. Ihe ọmụmụ a anaghị enye ndụmọdụ ọgwụ: gbasoo ntụziaka dọkịta gị na onye na-ere ọgwụ (pharmacist) mgbe niile. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Mee ka ekwentị gị dị mfe iji site n'ịgbanwe otu ntọala maka ịhụ ihe ma ọ bụ ịnụ ihe, tọọ ncheta kwa ụbọchị maka ọgwụ ma ọ bụ obere ije, ma jiri ngwa enyemaka AI mee ka nchegbu ahụike gị ghọọ ndepụta ajụjụ dị mkpụmkpụ ma doo anya i ga-ebuga n'oge ọzọ ị ga-ahụ dọkịta, n'enweghị nọmba nzuzo ọ bụla n'ime ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-elekọta ahụike na ọgwụ nke ha, ndị anya ma ọ bụ ntị ha nwere ike na-agbanwe. Ọtụtụ na-ahụ ihe karịrị otu dọkịta ma na-aṅụ ọtụtụ ọgwụ.",
    startingPoint: "Ha nwere smartphone ma ọ bụ tablet, na-ejikwa ya akpọ oku na izipu ozi. Ọtụtụ na-ahụ na mkpụrụ okwu dị obere ma ọ bụ na olu na-esi ike ịnụ, ha alebabeghịkwa ntọala enyemaka (accessibility), ncheta na-emegharị onwe ya ma ọ bụ ngwa enyemaka AI.",
    gap: "Mkpụrụ okwu dị obere na olu na-esi ike ịnụ na-eme ka ndị mmadụ hapụ ekwentị nwere ike inyere ha aka ịnọ n'ezigbo ahụike. Ime ka ekwentị dị mfe ịhụ na ịnụ, iji ncheta maka ọgwụ, ịkwadebe ajụjụ doro anya maka dọkịta na ịlele eziokwu ahụike na saịtị a pụrụ ịtụkwasị obi na-enyere aka ịnọ n'onwe gị na inwe nleta ka mma, n'ekweghị ka AI nọchie anya dọkịta.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu ma dị mfe",
      "Ngwaọrụ: iPhone, ekwentị Android na tablet; aha menu dị iche iche, ya mere ndị na-amụ ihe na-achọ n'ime Settings",
      "Oge: ihe dị ka nkeji 5 kwa nkuzi, nwayọọ nwayọọ",
      "Ahụike: AI bụ maka ịkwadebe, ọ bụghị maka ịchọpụta ọrịa; ọgwụ na-agbaso dọkịta na onye na-ere ọgwụ",
      "Nzuzo: enweghị aha, ụbọchị ọmụmụ ma ọ bụ nọmba insurance n'ime prompt AI"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji app Settings dị n'ekwentị ma ọ bụ tablet gị", action: "ime ka mkpụrụ okwu buo ibu ma sie ike, na ịbawanye ihe dị n'ihuenyo (zoom)", standard: "ruo mgbe ọ dị mfe ịgụ" },
    { id: "O2", condition: "Mgbe e nyere gị mkpụrụ okwu dị obere dị ka akara dị n'ọgwụ", action: "iji ekwentị dị ka iko mbuli anya na ịgbanye ịgụpụta n'olu", standard: "ka i wee nwee ike ịgụ ma ọ bụ ịnụ ihe e dere" },
    { id: "O3", condition: "Mgbe olu dị na vidiyo ma ọ bụ n'oku na-esi ike ịnụ", action: "ịgbanye captions na ịchọta nhọrọ ịnụ ihe dị n'ekwentị gị", standard: "ka okwu ndị ahụ pụta n'ihuenyo" },
    { id: "O4", condition: "Mgbe e nyere gị ọgwụ ma ọ bụ omume ahụike", action: "ịtọ ncheta na-emegharị kwa ụbọchị n'ekwentị gị", standard: "n'oge dọkịta ma ọ bụ onye na-ere ọgwụ gị kwuru, ma lelee na a tọrọ ya" },
    { id: "O5", condition: "Tupu ị gaa ịhụ dọkịta", action: "iji ngwa enyemaka AI mee ka nchegbu gị ghọọ obere ndepụta ajụjụ doro anya", standard: "n'enweghị nọmba nzuzo, na-agbanweghịkwa ọgwụ n'ihi AI" },
    { id: "O6", condition: "Mgbe e nyere gị ozi ahụike site n'AI ma ọ bụ weebụsaịtị", action: "ịlele ya n'isi iyi a pụrụ ịtụkwasị obi dị ka MedlinePlus, dọkịta gị ma ọ bụ onye na-ere ọgwụ gị", standard: "tupu i mee ihe ọ bụla n'ihi ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ime ka ngwaọrụ gị dị mfe ịhụ na ịnụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ime ka mkpụrụ okwu buo ibu ma dị mfe ịgụ",
          minutes: 5,
          goal: "Mee ka mkpụrụ okwu dị n'ekwentị ma ọ bụ tablet gị buo ibu ma sie ike.",
          text: [
            "Mkpụrụ okwu dị obere bụ otu n'ime ihe na-emekarị ka ndị mmadụ hapụ ekwentị. Ozi ọma: smartphone na tablet ọ bụla na-ekwe ka ị mee ka mkpụrụ okwu buo ibu, ọtụtụ na-ekwekwa ka ị mee ka o sie ike (bold).",
            "Aha menu dị iche n'ekwentị dị iche iche, ya mere ụzọ kacha dị mfe bụ ịchọ. Meghee app Settings (ọ na-abụkarị gia isi awọ), pịa igbe ọchụchọ dị n'elu, ma dee \"text size\" ma ọ bụ \"font size\". Pịa ihe pụtara, ma kpụgharịa ogwe ahụ gaa n'aka nri ruo mgbe mkpụrụ okwu dị mfe ịgụ. Chọọkwa mgba ọkụ \"bold text\" dị nso ebe ahụ.",
            "Ụfọdụ app na-ekwekwa ka ị bawanye ihe site n'itinye mkpịsị aka abụọ n'ihuenyo ma gbasaa ha. Chịkọta ha ọnụ iji mee ka ọ laghachi obere."
          ],
          steps: ["Meghee app Settings.", "Pịa igbe ọchụchọ dị n'elu.", "Dee \"text size\" ma ọ bụ \"font size\".", "Kpụgharịa ogwe ahụ gaa n'aka nri ruo mgbe mkpụrụ okwu dị mfe ịgụ.", "Gbanye \"bold text\" ma ọ bụrụ na ị chọrọ."],
          words: [["Settings", "app ebe ị na-agbanwe otu ekwentị gị si adị na otu o si arụ ọrụ, ọ na-abụkarị foto gia."], ["Font", "ụdị na nha mkpụrụ akwụkwọ dị n'ihuenyo."], ["Zoom", "ime ka ihe dị n'ihuenyo dị ka ọ buru ibu."]],
          slides: [
            { title: "Mkpụrụ okwu dị obere? Ị nwere ike idozi ya", bullets: ["Ekwentị na tablet ọ bụla nwere ike ime ka mkpụrụ okwu buo ibu", "Ọtụtụ nwekwara ike ime ka o sie ike"] },
            { title: "Chọọ n'ime Settings", bullets: ["Meghee Settings (gia ahụ)", "Chọọ \"text size\" ma ọ bụ \"font size\"", "Kpụgharịa ogwe ahụ gaa n'aka nri"] },
            { title: "Jiri mkpịsị aka abụọ bawanye ya", bullets: ["Gbasaa mkpịsị aka abụọ iji bawanye ya", "Chịkọta ha ọnụ iji mee ka ọ laghachi obere"] }
          ],
          tryIt: "Meghee Settings, chọọ \"text size\", ma mee ka mkpụrụ okwu gị buo ibu otu ma ọ bụ nzọụkwụ abụọ. Meghee ozi ma ọ bụ email gị ka ị hụ ọdịiche ya.",
          youCanNow: "ime ka mkpụrụ okwu dị na ngwaọrụ gị buo ibu ma sie ike.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ịgbasa mkpịsị aka abụọ n'ihuenyo na-eme n'ọtụtụ app?", options: ["Ọ na-abawanye ihe (zoom in)", "Ọ na-agbanyụ ekwentị", "Ọ na-akpọ oku", "Ọ na-ehichapụ peeji ahụ"], answer: 0, why: "Ịgbasa mkpịsị aka abụọ na-abawanye ihe; ịchịkọta ha ọnụ na-eme ka ọ laghachi obere." },
            { objective: "O1", q: "Ị pụghị ịchọta menu nha mkpụrụ okwu n'ekwentị ọhụrụ gị. Gịnị ka ị ga-eme?", options: ["Zụta ekwentị ọhụrụ", "Kwụsị ime ya", "Meghee Settings, pịa igbe ọchụchọ ma dee \"text size\"", "Gbanyụọ ekwentị ma gbanye ya ọzọ"], answer: 2, why: "Aha menu dị iche iche, ya mere ịchọ n'ime Settings bụ ụzọ kacha dị mfe isi chọta ntọala ahụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ekwentị gị dị ka iko mbuli anya na onye na-agụ ihe",
          minutes: 5,
          goal: "Jiri ekwentị gị mee ka mkpụrụ okwu dị obere buo ibu ma gụpụta ihe n'olu.",
          text: [
            "Igwefoto ekwentị gị nwere ike ịrụ ọrụ dị ka iko mbuli anya maka akara dị n'ọgwụ, menu nri na risiit. iPhone nwere app a na-akpọ Magnifier. N'ọtụtụ ekwentị Android, ị nwere ike iji zoom nke app Camera, ma ọ bụ chọọ \"magnif\" n'ime Settings.",
            "Ekwentị nwekwara ike ịgụpụta ihe e dere n'olu. Chọọ \"spoken content\" ma ọ bụ \"select to speak\" n'ime Settings, ma gbanye ya. Mgbe ahụ ị nwere ike ịhọrọ ihe e dere ma pịa Speak. Google Lens na ụfọdụ ngwa enyemaka AI nwekwara ike ịgụpụta peeji i sere foto ya n'olu.",
            "Gbanye ọkụ ekwentị (flashlight) ma ọ bụrụ na ìhè adịghị ike, ma jide ekwentị ahụ n'otu ebe, sentimita ole na ole n'elu peeji ahụ."
          ],
          steps: ["Meghee Magnifier, ma ọ bụ app Camera ma bawanye ya.", "Jide ekwentị ahụ ntakịrị n'elu mkpụrụ okwu dị obere ahụ.", "Gbanye ọkụ ma ọ bụrụ na ọ dị mkpa.", "Iji nụ ihe e dere, chọọ \"spoken content\" ma ọ bụ \"select to speak\" n'ime Settings ma gbanye ya.", "Họrọ ihe e dere ma pịa Speak."],
          words: [["Magnifier (iko mbuli anya)", "ngwa na-eme ka obere ihe dị ka ha buru ibu n'ihuenyo gị."], ["Ịgụpụta n'olu", "mgbe ekwentị na-ekwupụta okwu e dere n'olu dị elu."]],
          slides: [
            { title: "Iko mbuli anya n'akpa gị", bullets: ["Akara ọgwụ, menu nri, risiit", "iPhone: app Magnifier", "Android: zoom nke Camera ma ọ bụ chọọ \"magnif\""] },
            { title: "Mee ka ekwentị gụọrọ gị ihe", bullets: ["Chọọ \"spoken content\" ma ọ bụ \"select to speak\"", "Họrọ ihe e dere, wee pịa Speak"] },
            { title: "Ndụmọdụ", bullets: ["Gbanye ọkụ n'ime ụlọ ìhè na-adịghị ike", "Jide ekwentị n'otu ebe n'elu peeji ahụ"] }
          ],
          tryIt: "Jiri ekwentị gị mee ka mkpụrụ okwu dị obere dị n'akara nri ma ọ bụ ọgwụ buo ibu. Wee gbanye ntọala ịgụpụta n'olu ma mee ka ekwentị gị gụọrọ gị otu ozi.",
          youCanNow: "ime ka mkpụrụ okwu dị obere buo ibu na ime ka ekwentị gị gụpụta ihe e dere n'olu.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka app Magnifier dị na iPhone bụ maka ya?", options: ["Ịse foto onwe gị (selfie)", "Ime ka oku daa ụda karịa", "Iziga foto", "Iji igwefoto dị ka iko mbuli anya"], answer: 3, why: "Magnifier na-eme ka igwefoto ghọọ iko mbuli anya maka mkpụrụ okwu dị obere." },
            { objective: "O2", q: "Ị chọrọ ka ekwentị gị gụpụta ogologo akụkọ n'olu. Gịnị ka ị ga-achọ n'ime Settings?", options: ["\"Wallpaper\"", "\"Spoken content\" ma ọ bụ \"select to speak\"", "\"Battery\"", "\"Ringtone\""], answer: 1, why: "Ịgbanye spoken content ma ọ bụ select to speak na-ekwe ka ị họrọ ihe e dere ma pịa Speak." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Captions na enyemaka ịnụ ihe",
          minutes: 5,
          goal: "Gbanye captions ka i wee nwee ike ịgụ ihe a na-ekwu.",
          text: [
            "Ọ bụrụ na olu dị na vidiyo ma ọ bụ n'oku na-esi ike ịnụ, captions na-egosi okwu ndị ahụ n'ihuenyo ka a na-ekwu ha.",
            "Ọtụtụ ekwentị nwere ihe na-etinye captions n'ihe fọrọ nke nta ka ọ bụrụ vidiyo ma ọ bụ olu ọ bụla, a na-akpọ ya Live Captions. Chọọ \"caption\" n'ime Settings iji chọta ya ma gbanye ya. Na YouTube, pịa bọtịnụ CC dị na vidiyo. Ọtụtụ app oku vidiyo nwekwara bọtịnụ captions.",
            "Ekwentị nwekwara ike ijikọ n'ọtụtụ ihe enyemaka ịnụ ihe (hearing aids) ọgbara ọhụrụ site na Bluetooth. Chọọ \"hearing\" n'ime Settings ka ị hụ ihe ekwentị gị nwere, ma jụọ onye ọkachamara na-elekọta ntị gị ntọala dabara ihe enyemaka ịnụ ihe gị."
          ],
          steps: ["Meghee Settings ma chọọ \"caption\".", "Gbanye Live Captions ma ọ bụ captions.", "Na YouTube, pịa CC na vidiyo ahụ.", "N'oku vidiyo, chọọ bọtịnụ captions.", "Chọọ \"hearing\" n'ime Settings maka nhọrọ ihe enyemaka ịnụ ihe."],
          words: [["Captions", "okwu na-apụta n'ihuenyo ka ndị mmadụ na-ekwu okwu."], ["Bluetooth", "ụzọ na-enweghị waya isi jikọọ ekwentị gị n'ihe dị ka ihe enyemaka ịnụ ihe ma ọ bụ igwe okwu (speaker)."]],
          slides: [
            { title: "Gụọ ihe a na-ekwu", bullets: ["Captions na-egosi okwu a na-ekwu n'ihuenyo"] },
            { title: "Gbanye captions", bullets: ["Chọọ \"caption\" n'ime Settings", "YouTube: pịa CC", "Oku vidiyo: chọọ bọtịnụ captions"] },
            { title: "Ihe enyemaka ịnụ ihe", bullets: ["Ọtụtụ na-ejikọ site na Bluetooth", "Chọọ \"hearing\" n'ime Settings", "Jụọ onye ọkachamara na-elekọta ntị gị"] }
          ],
          tryIt: "Chọọ \"caption\" n'ime Settings gị ma gbanye captions, ma ọ bụ meghee vidiyo YouTube ọ bụla ma pịa CC. Lee otu nkeji ya na captions.",
          youCanNow: "ịgbanye captions na ngwaọrụ gị na ịchọta ntọala ịnụ ihe.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka Live Captions na-eme?", options: ["Ọ na-etinye captions n'ihe fọrọ nke nta ka ọ bụrụ vidiyo ma ọ bụ olu ọ bụla dị n'ekwentị", "Ọ na-edekọ oku gị", "Ọ na-ese foto", "Ọ na-eme ka ụda bawanye"], answer: 0, why: "Live Captions na-egosi okwu vidiyo na olu n'ihuenyo." },
            { objective: "O3", q: "Ị chọrọ ijikọ ihe enyemaka ịnụ ihe gị n'ekwentị gị. Gịnị bụ ezigbo nzọụkwụ mbụ?", options: ["Gbanyụọ Bluetooth", "Zụta ihe enyemaka ịnụ ihe ọhụrụ", "Chọọ \"hearing\" n'ime Settings ma jụọ onye ọkachamara na-elekọta ntị gị", "Gbanyụọ mgbịrịgba ekwentị"], answer: 2, why: "Settings na-egosi nhọrọ ịnụ ihe, onye ọkachamara na-elekọta ntị gị makwa nke dabara ihe enyemaka gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ime ka ngwaọrụ gị dị mfe ịhụ na ịnụ",
        questions: [
          { objective: "O1", q: "Aha menu dị iche n'ekwentị dị iche iche. Gịnị bụ ụzọ kacha dị mfe isi chọta ntọala nha mkpụrụ okwu?", options: ["Malitegharịa ekwentị", "Zụta ekwentị ọhụrụ", "Meghee Settings ma chọọ \"text size\"", "Kpọọ onye ị na-amaghị"], answer: 2, why: "Igbe ọchụchọ dị n'ime Settings na-achọta ya n'ekwentị ọ bụla." },
          { objective: "O1", q: "Kedu otu ị na-esi abawanye ihe n'ọtụtụ ihuenyo?", options: ["Gbasaa mkpịsị aka abụọ n'ihuenyo", "Kpaa ekwentị", "Pịa bọtịnụ ike (power)", "Tụgharịa ekwentị"], answer: 0, why: "Ịgbasa mkpịsị aka abụọ na-eme ka ihe buo ibu." },
          { objective: "O2", q: "Ị pụghị ịgụ obere mkpụrụ okwu dị na karama ọgwụ. Gịnị nwere ike inyere aka?", options: ["App egwu", "Igwe mgbakọ", "Elekere", "Magnifier ma ọ bụ zoom igwefoto ekwentị"], answer: 3, why: "Magnifier na-eme ka mkpụrụ okwu dị obere buo ibu." },
          { objective: "O3", q: "Gịnị bụ captions?", options: ["Foto nri", "Okwu na-apụta n'ihuenyo ka ndị mmadụ na-ekwu okwu", "Ụdị mkpu ncheta", "Nọmba ekwentị"], answer: 1, why: "Captions na-enyere aka mgbe olu na-esi ike ịnụ." },
          { objective: "O3", q: "Na YouTube, kedu bọtịnụ na-agbanye captions?", options: ["Share", "CC", "Like", "Subscribe"], answer: 1, why: "CC pụtara closed captions." }
        ]
      }
    },
    {
      name: "Isi 2: Teknụzụ maka ahụike gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịtọ ncheta ọgwụ na ahụike",
          minutes: 5,
          goal: "Tọọ ncheta na-emegharị kwa ụbọchị maka ọgwụ ma ọ bụ omume ahụike.",
          text: [
            "Ncheta kwa ụbọchị n'ekwentị gị nwere ike inyere gị aka ịṅụ ọgwụ n'oge, ịṅụ mmiri, ma ọ bụ ime obere ije.",
            "Ụzọ kacha dị mfe bụ ịgwa onye enyemaka olu (voice assistant) ekwentị gị: \"Remind me to take my morning pill every day at 8 am.\" (Chetara m ịṅụ ọgwụ ụtụtụ m kwa ụbọchị n'elekere 8 nke ụtụtụ.) Ị nwekwara ike imeghe app Clock ma ọ bụ Reminders, tinye mkpu ma ọ bụ ncheta, ma họrọ ka ọ na-emegharị kwa ụbọchị.",
            "Ncheta na-enyere gị aka icheta naanị; ọ naghị agwa gị ọgwụ ị ga-aṅụ. Gbasoo ntụziaka dọkịta gị na onye na-ere ọgwụ mgbe niile, ma jụọ onye na-ere ọgwụ ma ọ bụrụ na ị maghị oge kwesịrị ekwesị. Ụfọdụ ụlọ ahịa ọgwụ na-enyekwa ncheta n'efu maka ịzụkwu ọgwụ (refill) site n'ozi ederede ma ọ bụ app."
          ],
          steps: ["Gwa onye enyemaka olu gị, ma ọ bụ meghee app Clock ma ọ bụ Reminders.", "Kwuo ma ọ bụ dee ihe ị ga-echeta na oge ya.", "Họrọ ka ọ na-emegharị kwa ụbọchị.", "Lelee na a tọrọ ya.", "Gbasoo ntụziaka dọkịta gị na onye na-ere ọgwụ."],
          words: [["Ncheta na-emegharị", "ncheta na-alọghachi kwa ụbọchị ma ọ bụ kwa izu n'atọghị ya ọzọ."], ["Refill", "inweta ọzọ ọgwụ ị na-aṅụlarị."]],
          slides: [
            { title: "Ncheta kwa ụbọchị na-enyere aka", bullets: ["Ọgwụ n'oge", "Ịṅụ mmiri", "Obere ije"] },
            { title: "Tọọ otu", bullets: ["\"Remind me to take my pill every day at 8 am.\"", "Ma ọ bụ jiri app Clock ma ọ bụ Reminders", "Họrọ \"every day\" (kwa ụbọchị)"] },
            { title: "Cheta", bullets: ["Ncheta anaghị agwa gị ọgwụ ị ga-aṅụ", "Gbasoo dọkịta gị na onye na-ere ọgwụ", "Jụọ ụlọ ahịa ọgwụ gị maka ncheta refill"] }
          ],
          tryIt: "Tọọ otu ncheta na-emegharị kwa ụbọchị maka ọgwụ ị na-aṅụlarị, ma ọ bụ maka omume ahụike dị ka ije nkeji 10.",
          youCanNow: "ịtọ ncheta na-emegharị kwa ụbọchị maka ọgwụ ma ọ bụ omume ahụike.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ncheta na-emegharị na-eme?", options: ["Ọ na-ada naanị otu ugboro", "Ọ na-agwa gị ọgwụ ị ga-aṅụ", "Ọ na-azụ refill gị", "Ọ na-alọghachi kwa ụbọchị n'oge ị họrọ"], answer: 3, why: "Ncheta na-emegharị na-alọghachi kwa ụbọchị; ọ na-enyere gị aka icheta mana ọ naghị agwa gị ihe ị ga-aṅụ." },
            { objective: "O4", q: "Ị maghị ma ị ga-aṅụ ọgwụ tupu ma ọ bụ mgbe nri ụtụtụ gasịrị. Onye ka ị ga-ajụ?", options: ["App ncheta", "Onye na-ere ọgwụ gị (pharmacist)", "Enyi gị", "Weebụsaịtị na-ere vitamin"], answer: 1, why: "Gbasoo ntụziaka dọkịta gị na onye na-ere ọgwụ, ma jụọ onye na-ere ọgwụ gị maka oge." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iji AI kwadebe maka ịhụ dọkịta",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI mee ka nchegbu gị ghọọ ndepụta ajụjụ doro anya maka dọkịta gị.",
          text: [
            "Oge ịhụ dọkịta nwere ike ịdị ka ọ na-agba ọsọ, ọ dịkwa mfe ichefu ihe i bu n'obi ịjụ. Ngwa enyemaka AI nwere ike inyere gị aka ịhazi echiche gị tupu ị gaa.",
            "Kọwaa nchegbu gị n'okwu izugbe, n'etinyeghị aha gị, ụbọchị ọmụmụ gị ma ọ bụ nọmba insurance gị: \"Enwere m nleta dọkịta n'izu na-abịa. Ike na-agwụ m karịa ka ọ na-adị, ikpere m na-afụ ụfụ n'steepụ, achọkwara m ịjụ maka ọgwụ ọbara mgbali m. Nyere m aka mee obere ndepụta ajụjụ doro anya m ga-ajụ dọkịta m.\"",
            "AI bụ maka ịkwadebe, ọ bụghị maka ịchọpụta ọrịa. Agbanwela ma ọ bụ kwụsị ọgwụ ọ bụla n'ihi ihe AI kwuru. Buru ndepụta gị gaa nleta ahụ, dee azịza dọkịta, ma ọ bụ kpọrọ onye ezinụlọ ka o nyere gị aka."
          ],
          steps: ["Dee nchegbu gị n'okwu izugbe, n'enweghị nọmba nzuzo.", "Rịọ AI maka obere ndepụta ajụjụ doro anya.", "Tinye ajụjụ kacha mkpa na mbụ.", "Buru ndepụta ahụ, ma dee azịza ndị ahụ.", "Agbanwela ọgwụ mgbe ọ bụla n'ihi AI; jụọ dọkịta gị."],
          words: [["Ịchọpụta ọrịa (diagnose)", "ikpebi ọrịa ma ọ bụ nsogbu mmadụ nwere; naanị onye ọkachamara ahụike nwere ike ime nke a."]],
          slides: [
            { title: "Nleta na-adị ka ọ na-agba ọsọ", bullets: ["Ọ dị mfe ichefu ajụjụ", "AI nwere ike inyere gị aka ịkwadebe"] },
            { title: "Rịọ maka ndepụta ajụjụ", bullets: ["Kọwaa nchegbu n'okwu izugbe", "Enweghị aha, ụbọchị ọmụmụ ma ọ bụ nọmba insurance", "Ajụjụ kacha mkpa na mbụ"] },
            { title: "Kwadebe, achọpụtala ọrịa", bullets: ["AI anaghị anọchi anya dọkịta gị", "Agbanwela ọgwụ mgbe ọ bụla n'ihi AI", "Dee azịza dọkịta"] }
          ],
          tryIt: "Chee echiche maka oge ọzọ ị ga-ahụ dọkịta. Rịọ ngwa enyemaka AI ka o mee ka nchegbu gị abụọ ma ọ bụ atọ ghọọ obere ndepụta ajụjụ. Lelee na o nweghị nọmba nzuzo, wee chekwaa ya ma ọ bụ bipụta ya.",
          youCanNow: "iji AI kwadebe ndepụta ajụjụ doro anya maka dọkịta gị n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka AI bara uru maka ya tupu nleta dọkịta?", options: ["Ịchọpụta ọrịa gị", "Ịgbanwe ọgwụ gị", "Ịhazi nchegbu gị ka ọ ghọọ ajụjụ doro anya", "Ịtọ oge ịwa ahụ"], answer: 2, why: "AI bụ maka ịkwadebe ajụjụ gị, ọ bụghị maka ịchọpụta ọrịa." },
            { objective: "O5", q: "Ị na-ede nchegbu gị maka AI. Gịnị ka ị ga-ahapụ?", options: ["Otu ahụ dị gị", "Aha gị, ụbọchị ọmụmụ gị na nọmba insurance gị", "Na ị nwere nleta n'izu na-abịa", "Na ikpere gị na-afụ ụfụ"], answer: 1, why: "Kọwaa nchegbu n'okwu izugbe, n'enweghị nọmba nzuzo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịchọta ozi ahụike a pụrụ ịtụkwasị obi",
          minutes: 5,
          goal: "Lelee ozi ahụike n'isi iyi n'efu a pụrụ ịtụkwasị obi.",
          text: [
            "Ozi ahụike dị n'ịntanetị sitere n'ihe dị mma nke ukwuu ruo n'ihe dị egwu. Ngwa enyemaka AI nwekwara ike ihie ụzọ banyere ahụike. Ya mere lelee ihe ị gụrụ n'isi iyi a pụrụ ịtụkwasị obi.",
            "MedlinePlus (medlineplus.gov) bụ saịtị ozi ahụike n'efu sitere na National Library of Medicine (ọba akwụkwọ ọgwụ nke mba), otu akụkụ nke National Institutes of Health nke US. O nweghị mgbasa ozi, ọ na-akọwakwa ọrịa, ule na ọgwụ n'okwu dị mfe. Ọfịs dọkịta gị na onye na-ere ọgwụ gị bụkwa isi iyi a pụrụ ịtụkwasị obi.",
            "Kpachara anya maka saịtị na-ere ọgwụgwọ (cure), na-ekwe nkwa ihe ebube, ma ọ bụ na-agwa gị ka ị kwụsị ọgwụ gị. Mgbe ihe ị gụrụ na-echegbu gị, dee ya ma jụọ dọkịta gị ma ọ bụ onye na-ere ọgwụ."
          ],
          steps: ["Hụ okwu ahụike sitere n'AI ma ọ bụ weebụsaịtị.", "Chọọ ha na medlineplus.gov.", "Jụọ dọkịta gị ma ọ bụ onye na-ere ọgwụ maka ihe ọ bụla na-echegbu gị.", "Zere saịtị na-ere ọgwụgwọ ma ọ bụ na-ekwe nkwa ihe ebube."],
          words: [["Isi iyi a pụrụ ịtụkwasị obi", "ebe a pụrụ ịdabere na ya maka ozi, dị ka saịtị ahụike gọọmentị ma ọ bụ dọkịta gị n'onwe gị."], ["MedlinePlus", "weebụsaịtị ozi ahụike n'efu, na-enweghị mgbasa ozi, sitere na National Library of Medicine nke US."]],
          slides: [
            { title: "Ọ bụghị ozi ahụike niile dị mma", bullets: ["Weebụsaịtị nwere ike ihie ụzọ", "AI nwekwara ike ihie ụzọ"] },
            { title: "MedlinePlus: medlineplus.gov", bullets: ["N'efu, na-enweghị mgbasa ozi", "Sitere na National Library of Medicine", "Nkọwa n'okwu dị mfe"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Na-ere ọgwụgwọ", "Nkwa ihe ebube", "\"Kwụsị ọgwụ gị\""] }
          ],
          sources: [{ name: "Banyere MedlinePlus (National Library of Medicine)", url: "https://medlineplus.gov/about/general/aboutmedlineplus/" }],
          tryIt: "Ọrụ ikpeazụ: gbanwee otu ntọala ka ekwentị gị dị mfe ịhụ ma ọ bụ ịnụ, tọọ ncheta kwa ụbọchị maka ọgwụ ma ọ bụ ije, ma jiri AI mee obere ndepụta ajụjụ na-enweghị nọmba nzuzo maka oge ọzọ ị ga-ahụ dọkịta. Chọọ otu isiokwu sitere na ndepụta gị na medlineplus.gov.",
          youCanNow: "ime ka ngwaọrụ gị dị mfe iji, ịnọgide na-eme omume ahụike kwa ụbọchị, ịkwadebe maka nleta dọkịta, na ịchọta ozi ahụike a pụrụ ịtụkwasị obi.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ MedlinePlus?", options: ["Ụlọ ahịa na-ere ọgwụ", "App ahụike a na-akwụ ụgwọ", "Ngwa enyemaka AI", "Saịtị ozi ahụike n'efu, na-enweghị mgbasa ozi, sitere na National Library of Medicine"], answer: 3, why: "MedlinePlus na-akọwa ọrịa, ule na ọgwụ n'okwu dị mfe, n'enweghị mgbasa ozi." },
            { objective: "O6", q: "Weebụsaịtị kwuru na otu tii ga-agwọ ọbara mgbali gị, ị nwekwara ike ịkwụsị ọgwụ gị. Gịnị ka ị ga-eme?", options: ["Were ya dị ka ihe ịdọ aka na ntị, dee ya ma jụọ dọkịta gị", "Kwụsị ọgwụ gị ma nwaa tii ahụ", "Zụta nke ga-ezu otu afọ", "Kesaa ya ndị enyi gị"], answer: 0, why: "Saịtị na-ekwe nkwa ọgwụgwọ ma ọ bụ na-asị kwụsị ọgwụ bụ ihe ịdọ aka na ntị; jụọ dọkịta gị ma ọ bụ onye na-ere ọgwụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Teknụzụ maka ahụike gị",
        questions: [
          { objective: "O4", q: "Kedu otu ị ga-esi mee ka ncheta lọghachi kwa ụbọchị?", options: ["Hichapụ app ahụ", "Tọọ ya otu ugboro ma tụọ anya", "Gbanyụọ ekwentị", "Họrọ ka ọ na-emegharị kwa ụbọchị"], answer: 3, why: "Ncheta na-emegharị na-alọghachi kwa ụbọchị." },
          { objective: "O4", q: "Ncheta ekwentị ọ na-agwa gị ọgwụ ị ga-aṅụ?", options: ["Mba, gbasoo dọkịta gị na onye na-ere ọgwụ", "Ee, mgbe niile", "Naanị na ngwụcha izu", "Ee, ma ọ bụrụ na ụda ya dị elu"], answer: 0, why: "Ọ na-enyere gị aka icheta naanị." },
          { objective: "O5", q: "Gịnị ka ị kwesịrị ịhapụ mgbe ị na-arịọ AI ka o nyere gị aka ịkwadebe maka nleta?", options: ["Nchegbu gị", "Okwu \"dọkịta\"", "Aha gị, ụbọchị ọmụmụ gị na nọmba insurance gị", "Ụbọchị nleta ahụ"], answer: 2, why: "Nọmba nzuzo ekwesịghị ịbanye n'AI mgbe ọ bụla." },
          { objective: "O5", q: "AI kwuru na ọ ga-abụ na ị chọghị otu ọgwụ. Gịnị ka ị ga-eme?", options: ["Kwụsị ịṅụ ya", "Jụọ onye ị na-amaghị", "Ṅụọ ya okpukpu abụọ", "Jụọ dọkịta gị; agbanwela ọgwụ mgbe ọ bụla n'ihi AI"], answer: 3, why: "Naanị dọkịta gị kwesịrị ịgbanwe ọgwụ gị." },
          { objective: "O6", q: "Kedu nke bụ saịtị ozi ahụike n'efu, na-enweghị mgbasa ozi, sitere na gọọmentị US?", options: ["Mgbasa ozi na-apụta na mberede", "Saịtị na-ere ọgwụgwọ ebube", "MedlinePlus", "Ozi na soshal midia"], answer: 2, why: "MedlinePlus sitere na National Library of Medicine." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ahụike, Ọdịmma na Ịdị Mfe Iji Teknụzụ",
    questions: [
      { objective: "O1", q: "A na-egosikarị app Settings dị ka:", options: ["Igwefoto", "Gia", "Ekwentị", "Elekere"], answer: 1, why: "Settings na-ejikarị foto gia." },
      { objective: "O1", q: "Iji chọta ntọala nha mkpụrụ okwu ngwa ngwa, ị na:", options: ["Achọ \"text size\" n'ime Settings", "Amalitegharị ekwentị", "Emeghe igwefoto", "Akpọ ụlọ akụ gị"], answer: 0, why: "Ịchọ na-arụ ọrụ n'ekwentị ọ bụla." },
      { objective: "O1", q: "Ịkpụgharị ogwe nha mkpụrụ okwu gaa n'aka nri na-eme ka mkpụrụ okwu:", options: ["Buo ibu", "Dị obere", "Pụọ n'anya", "Bụrụ uhie"], answer: 0, why: "Aka nri na-eme ka ọ buo ibu." },
      { objective: "O1", q: "Ịchịkọta mkpịsị aka abụọ ọnụ n'ihuenyo:", options: ["Na-abawanye ihe", "Na-eme ka ihe laghachi obere", "Na-agbanyụ ekwentị", "Na-ese foto"], answer: 1, why: "Chịkọta ọnụ iji mee ka ọ laghachi obere; gbasaa iji bawanye ya." },
      { objective: "O2", q: "App iPhone na-eme ka igwefoto ghọọ iko mbuli anya bụ:", options: ["Weather", "Calculator", "Magnifier", "Music"], answer: 2, why: "Magnifier na-eme ka mkpụrụ okwu dị obere buo ibu." },
      { objective: "O2", q: "N'ime ụlọ ìhè na-adịghị ike, mbuli anya na-arụ ọrụ nke ọma ma ọ bụrụ na ị:", options: ["Kpaa ekwentị", "Kpuchie igwefoto", "Bupụ ekwentị ebe dị anya", "Gbanye ọkụ"], answer: 3, why: "Ìhè na-enyere igwefoto aka ịhụ ihe nke ọma." },
      { objective: "O2", q: "A na-achọta ime ka ekwentị gụpụta ihe n'olu site n'ịchọ n'ime Settings:", options: ["\"ringtone\"", "\"wallpaper\"", "\"spoken content\" ma ọ bụ \"select to speak\"", "\"battery\""], answer: 2, why: "Ndị ahụ bụ aha ntọala ịgụpụta n'olu a na-ahụkarị." },
      { objective: "O3", q: "Captions bụ:", options: ["Okwu na-apụta n'ihuenyo ka ndị mmadụ na-ekwu okwu", "Foto", "Nọmba ekwentị", "Okwuntughe"], answer: 0, why: "Captions na-egosi okwu a na-ekwu." },
      { objective: "O3", q: "A pụrụ ịchọta Live Captions site n'ịchọ n'ime Settings:", options: ["\"contacts\"", "\"camera\"", "\"clock\"", "\"caption\""], answer: 3, why: "Ịchọ \"caption\" na-achọta ntọala captions." },
      { objective: "O3", q: "Ọtụtụ ihe enyemaka ịnụ ihe ọgbara ọhụrụ na-ejikọ n'ekwentị site na:", options: ["Mkpịsị waya", "Bluetooth", "Ekwentị ụlọ", "Chaja"], answer: 1, why: "Bluetooth bụ njikọ na-enweghị waya." },
      { objective: "O3", q: "Onye kwesịrị inyere gị aka ịhọrọ ntọala ihe enyemaka ịnụ ihe?", options: ["Mgbasa ozi na-apụta na mberede", "Onye ọkachamara na-elekọta ntị gị", "Onye ị na-amaghị n'ịntanetị", "Ọ dịghị onye"], answer: 1, why: "Ha maara ihe enyemaka ịnụ ihe gị na ntị gị." },
      { objective: "O4", q: "Kedu arịrịọ n'olu na-atọ ncheta ọgwụ kwa ụbọchị?", options: ["\"Medicine?\"", "\"Pill.\"", "\"Hello.\"", "\"Remind me to take my pill every day at 8 am.\""], answer: 3, why: "Ọ na-ekwu ihe, oge na ugboro ole." },
      { objective: "O4", q: "Ọ bụrụ na ị maghị mgbe ị ga-aṅụ ọgwụ, jụọ:", options: ["Onye na-ere ọgwụ gị", "Naanị AI", "Onye agbata obi", "Mgbasa ozi na-apụta"], answer: 0, why: "Ndị na-ere ọgwụ bụ ndị ọkachamara n'ọgwụ." },
      { objective: "O5", q: "AI bara uru tupu nleta dọkịta maka:", options: ["Ịgbanwe ọgwụ gị", "Ịchọpụta ọrịa gị", "Ịhazi ajụjụ gị", "Ide akwụkwọ ọgwụ"], answer: 2, why: "AI na-enyere gị aka ịkwadebe, ọ bụghị ịchọpụta ọrịa." },
      { objective: "O5", q: "\"Ịchọpụta ọrịa\" (diagnose) pụtara:", options: ["Ime ka mkpụrụ okwu buo ibu", "Ide ndepụta", "Ịtọ ncheta", "Ikpebi ọrịa mmadụ nwere"], answer: 3, why: "Naanị onye ọkachamara ahụike nwere ike ịchọpụta ọrịa." },
      { objective: "O5", q: "Kedu nke EKWESỊGHỊ ịdị na prompt AI gị gbasara ahụike?", options: ["\"Ikpere m na-afụ ụfụ\"", "\"Ike na-agwụ m\"", "Nọmba insurance gị", "\"Enwere m nleta dọkịta n'izu na-abịa\""], answer: 2, why: "Nọmba insurance bụ ozi nzuzo." },
      { objective: "O5", q: "N'oge nleta, ezigbo omume bụ:", options: ["Ịhapụ ndepụta gị n'ụlọ", "Ide azịza dọkịta", "Ịjụghị ihe ọ bụla", "Ịdabere naanị na ncheta gị"], answer: 1, why: "Ide azịza na-enyere gị aka icheta ha." },
      { objective: "O6", q: "Onye na-elekọta MedlinePlus?", options: ["National Library of Medicine", "Ụlọ ọrụ na-ere ọgwụ mgbakwunye (supplement)", "Saịtị soshal midia", "Ụlọ ọrụ ekwentị"], answer: 0, why: "Ọ bụ ọrụ NLM dị n'ime NIH." },
      { objective: "O6", q: "Weebụsaịtị na-ekwe nkwa ọgwụgwọ ebube bụ:", options: ["Ihe ịdọ aka na ntị", "Ihe a pụrụ ịtụkwasị obi mgbe niile", "Nke dọkịta gị na-elekọta", "Ọgwụgwọ n'efu"], answer: 0, why: "Nkwa ihe ebube bụ ihe ịdọ aka na ntị." },
      { objective: "O6", q: "Ihe ị gụrụ gbasara ahụike gị na-echegbu gị. Gịnị bụ nzọụkwụ kacha mma?", options: ["Kwụsị ọgwụ niile", "Dee ya ma jụọ dọkịta gị ma ọ bụ onye na-ere ọgwụ", "Leghara dọkịta gị anya", "Zụta ihe ahụ"], answer: 1, why: "Dọkịta gị ma ọ bụ onye na-ere ọgwụ nwere ike ịkọwa ya n'enweghị nsogbu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [1, 4, 7, 11, 13, 15, 17, 18]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ọ dị mfe ịhụ ma ọ bụ ịnụ", objective: "O1", notYet: "Ọ dịghị ntọala a gbanwere.", meets: "Gbanwere otu ntọala maka ịhụ ihe ma ọ bụ ịnụ ihe, dị ka mkpụrụ okwu buru ibu ma ọ bụ captions.", exceeds: "Gbanwere ntọala abụọ ma ọ bụ karịa, ma nwee ike igosi onye ọzọ otu esi eme ya." },
      { name: "Ncheta kwa ụbọchị", objective: "O4", notYet: "Enweghị ncheta, ma ọ bụ na ọ naghị emegharị.", meets: "Ncheta na-emegharị kwa ụbọchị maka ọgwụ ma ọ bụ ije, e lelere na a tọrọ ya.", exceeds: "Oge ya dabara ihe dọkịta ma ọ bụ onye na-ere ọgwụ kwuru." },
      { name: "Ajụjụ doro anya", objective: "O5", notYet: "Enweghị ndepụta, ma ọ bụ na ajụjụ ndị ahụ edoghị anya.", meets: "Obere ndepụta ajụjụ doro anya e ji enyemaka AI mee, nke kacha mkpa na mbụ.", exceeds: "O nwere ohere ide azịza dọkịta." },
      { name: "Nọmba nzuzo adịghị n'ime ya", objective: "O5", notYet: "Prompt ma ọ bụ ndepụta ahụ nwere aha, ụbọchị ọmụmụ ma ọ bụ nọmba insurance.", meets: "Ọ dịghị nọmba nzuzo na prompt ma ọ bụ na ndepụta ahụ.", exceeds: "A kọwara nchegbu n'okwu izugbe nke ka na-enye dọkịta foto doro anya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe ka na-eji ncheta ọgwụ ma ọ bụ ahụike ha n'oge nsochi ụbọchị 30",
      "Ndị na-amụ ihe bugara ndepụta ajụjụ e dere ede na nleta dọkịta n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Seniors and Technology ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ tablet nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Ihe nwere mkpụrụ okwu dị obere iji mee omume, dị ka menu nri ma ọ bụ igbe ọgwụ tọgbọrọ chakoo",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke na nwayọọ: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Kekọọ ndị na-amụ ihe site n'ụdị ekwentị ha ka ntọala dị n'ihuenyo dabara, ma nyere onye ọ bụla aka ịchọ n'ime Settings.",
      "Enyela ndụmọdụ ọgwụ mgbe ọ bụla; zigara ajụjụ gbasara ọgwụ na ahụike na dọkịta ma ọ bụ onye na-ere ọgwụ nke onye na-amụ ihe ahụ.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye aha, ụbọchị ọmụmụ na nọmba insurance n'ime prompt AI.",
      "Ihere nwere ike ime ụfọdụ ndị na-amụ ihe gbasara anya ma ọ bụ ntị ha; mee ka okwu dị n'ụzọ bara uru na nzuzo.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
