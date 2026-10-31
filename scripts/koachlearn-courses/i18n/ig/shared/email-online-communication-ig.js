"use strict";

// Koach Learn course (Igbo translation of shared/email-online-communication.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "email-online-communication-ig",
  lang: "ig",
  translationOf: "email-online-communication",
  category: "Seniors and Technology",
  name: "Email na Mkparịta Ụka n'Ịntanetị",
  skills: "Imeghe akaụntụ email n'efu, Ide email doro anya, Ịza email na itinye faịlụ, Ịmata email aghụghọ (phishing), Ịbanye n'oku vidiyo",
  outcome: "imeghe akaụntụ email n'efu, ide ma zipu email doro anya nwere nkwanye ugwu na faịlụ e tinyere n'ime ya, ịza ozi, ịmata email adịgboroja (phishing), na ịbanye n'oku vidiyo site na njikọ (link).",
  about: [
    "Ugbu a, ọfịs dọkịta, ndị were mmadụ n'ọrụ, ndị nwe ụlọ, ụlọ akwụkwọ na ezinụlọ na-eji email na oku vidiyo achọta gị. Ihe ọmụmụ a na-egosi gị otu esi eji ha, otu obere nzọụkwụ n'otu oge.",
    "Ị ga-emeghe akaụntụ email n'efu, dee ozi doro anya, zaa ozi, tinye faịlụ, chebe igbe ozi gị pụọ n'aka ndị aghụghọ, ma banye n'oku vidiyo.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Zipu email doro anya nwere nkwanye ugwu nye enyi gị, onye ezinụlọ gị ma ọ bụ onwe gị. O kwesịrị inwe isiokwu (subject line), ekele, ahịrịokwu mkpụmkpụ abụọ ma ọ bụ atọ, okwu mmechi na otu faịlụ e tinyere (foto ma ọ bụ akwụkwọ). Wee zaa otu email i nwetara, ma dee ihe ịdọ aka na ntị abụọ ị ga-elele tupu ị pịa njikọ ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye chọrọ email na oku vidiyo maka ndụ kwa ụbọchị: ndị agadi na-akpakọrịta na ezinụlọ ha, ndị na-achọ ọrụ, ndị ọrịa, ndị nne na nna na-akpakọrịta na ụlọ akwụkwọ, ndị ọrụ afọ ofufo na ndị na-alọta n'obodo.",
    startingPoint: "Ha nwere ike iji ekwentị ma ọ bụ kọmputa meghee app ma dee obere ozi. Ọtụtụ enweghị akaụntụ email, ma ọ bụ nwee nke ha anaghị eji. Mmadụ ole na ole ji n'aka otu esi etinye faịlụ, ide isiokwu doro anya, ịmata email phishing ma ọ bụ ịbanye n'oku vidiyo site na njikọ.",
    gap: "Ndị were mmadụ n'ọrụ, ndị dọkịta, ụlọ akwụkwọ na ọfịs gọọmentị na-ezipu email ma na-atụ anya ya, a na-emekwa ọtụtụ ọhụhụ na ajụjụ ọnụ site n'oku vidiyo. Na-enweghị nka ndị a, ndị mmadụ na-atụfu ozi, na-ezipu email na-edoghị anya ma ọ bụ na-enweghị nkwanye ugwu, na-adaba n'email aghụghọ, ma ọ bụ enweghị ike ịbanye n'ọhụhụ ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu dị ka isiokwu, faịlụ e tinyere (attachment) na phishing",
      "Ngwaọrụ: ekwentị, tablet ma ọ bụ kọmputa nwere ịntanetị",
      "Oge: ihe dị ka nkeji 5 n'otu nkuzi, ihe dị ka nkeji 60 n'ozuzu",
      "Ego: email n'efu (Gmail, Outlook.com ma ọ bụ Yahoo Mail) na app oku vidiyo n'efu",
      "Nzuzo: ndị na-amụ ihe anaghị etinye nọmba Social Security, nọmba ụlọ akụ ma ọ bụ okwuntughe n'email ma ọ bụ n'ozi chat mgbe ọ bụla"
    ],
    prerequisites: "Ọ dịghị. \"Ihe Ndabere Ịntanetị\" (Internet Basics) na-enyere ndị na-ejibeghị web browser aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji weebụsaịtị ma ọ bụ app nke ezi ụlọ ọrụ email n'efu", action: "imeghe akaụntụ email nwere adreesị dị mma maka ọrụ na okwuntughe siri ike, ma banye n'ime ya", standard: "ma tinye nọmba ekwentị ma ọ bụ email ndabere ka i wee nwee ike ịbanyeghachi" },
    { id: "O2", condition: "Mgbe i nwere ihe mere ị ga-eji dee", action: "ide ma zipu email nwere isiokwu, ekele, obere ozi na okwu mmechi", standard: "ma akụkụ niile dị n'ime ya, i lelekwara adreesị \"To\" tupu i zipu ya" },
    { id: "O3", condition: "Mgbe e nyere gị email ndị i nwetara", action: "ịza, ibufe (forward) na itinye faịlụ, na-ahọrọ Reply ma ọ bụ Reply all nke ọma", standard: "ma faịlụ ahụ dị n'ime ya, azịza ahụ ga-erukwa naanị ndị chọrọ ya" },
    { id: "O4", condition: "Mgbe e nyere gị email na-enye obi abụọ", action: "ịmata ihe ịdọ aka na ntị nke phishing dị n'ime ya ma họrọ nzọụkwụ ọzọ na-enweghị nsogbu", standard: "na-akpọ aha opekata mpe ihe ịdọ aka na ntị abụọ, n'ịpịaghị njikọ ahụ ma ọ bụ ịkwụ ụgwọ mgbe ọ bụla" },
    { id: "O5", condition: "Mgbe ị na-edegara onye ọ bụla ihe n'ịntanetị", action: "ide ozi doro anya nwere nkwanye ugwu nke na-adịghị ozi nzuzo n'ime ya", standard: "nwere ekele, n'enweghị mkpụrụedemede ukwu niile (ALL CAPS), n'enweghị nọmba nzuzo ma ọ bụ okwuntughe" },
    { id: "O6", condition: "Mgbe e nyere gị njikọ oku vidiyo", action: "ịbanye n'oku ahụ ma jiri bọtịnụ mute na bọtịnụ igwefoto", standard: "na-abanye n'oge ma na-eme mute mgbe ị na-adịghị ekwu okwu" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe ndabere email",
      lessons: [
        {
          objectives: ["O1"],
          title: "Inweta akaụntụ email n'efu",
          minutes: 5,
          goal: "Meghee akaụntụ email n'efu ma banye n'ime ya.",
          text: [
            "Adreesị email dị ka adreesị ụlọ maka ozi. Ọ dị ka name@gmail.com: aha ị họọrọ, akara @, wee aha ụlọ ọrụ na-elekọta ya.",
            "Ọrụ email n'efu gụnyere Gmail nke Google, Outlook.com nke Microsoft na Yahoo Mail. Iji debanye aha, gaa na weebụsaịtị ụlọ ọrụ ahụ n'onwe ya ma ọ bụ wụnye ezi app ya, ma họrọ \"Create account\" (meghee akaụntụ).",
            "Họrọ adreesị dị mma maka ọrụ, dị ka aha mbụ gị na aha nna gị, n'ihi na ndị were mmadụ n'ọrụ na ndị dọkịta ga-ahụ ya. Họrọ okwuntughe siri ike nke ị na-ejighị ebe ọzọ, ma tinye nọmba ekwentị ma ọ bụ email ndabere ka i wee banyeghachi ma ọ bụrụ na i chefuo ya."
          ],
          steps: ["Gaa na gmail.com, outlook.com ma ọ bụ ezi app email.", "Họrọ \"Create account\".", "Họrọ adreesị dị mma maka ọrụ, dị ka aha.aha-nna.", "Mee okwuntughe ogologo nke ị na-ejighị ebe ọzọ.", "Tinye nọmba ekwentị ma ọ bụ email ndabere maka iweghachi akaụntụ.", "Dee adreesị ọhụrụ gị ma debe okwuntughe ahụ n'ebe dị nchebe."],
          words: [["Adreesị email", "adreesị gị maka ịnata ozi, dị ka name@gmail.com."], ["Okwuntughe (password)", "okwu nzuzo ma ọ bụ ahịrịokwu na-ekwe naanị gị ịbanye n'akaụntụ gị."], ["Iweghachi akaụntụ (account recovery)", "ụzọ isi banyeghachi n'akaụntụ gị ma ọ bụrụ na i chefuo okwuntughe gị, na-abụkarị koodu e zitere n'ekwentị gị."]],
          slides: [
            { title: "Adreesị email", bullets: ["Ọ dị ka name@gmail.com", "Aha gị, akara @, wee ụlọ ọrụ email ahụ"] },
            { title: "Ọrụ email n'efu", bullets: ["Gmail nke Google", "Outlook.com nke Microsoft", "Yahoo Mail"] },
            { title: "Idebanye aha nke ọma", bullets: ["Họrọ adreesị dị mma maka ọrụ: aha mbụ gị na aha nna gị", "Jiri okwuntughe ogologo nke ị na-ejighị ebe ọzọ", "Tinye nọmba ekwentị maka iweghachi akaụntụ"] }
          ],
          tryIt: "Meghee akaụntụ email n'efu (ma ọ bụ meghee nke i nweburu). Pụọ (sign out), wee banyeghachi (sign in), ka ị mara na ị nwere ike ịbanye n'onwe gị.",
          youCanNow: "imeghe akaụntụ email n'efu nwere adreesị dị mma maka ọrụ ma banye n'ime ya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka akara @ na-eme n'adreesị email?", options: ["Ọ na-ekewa aha ị họọrọ na ụlọ ọrụ na-elekọta email ahụ", "Ọ na-eme ka adreesị ahụ bụrụ nzuzo", "Ọ pụtara na email ahụ dị ngwa ngwa", "Ọ na-egosi okwuntughe"], answer: 0, why: "Adreesị bụ aha ị họọrọ, akara @, wee ụlọ ọrụ ahụ, dị ka name@gmail.com." },
            { objective: "O1", q: "Ị na-emeghe akaụntụ email iji rịọ ọrụ. Kedu adreesị ị ga-ahọrọ?", options: ["partyking99@...", "coolcat2000@...", "xxlovexx@...", "Aha mbụ gị na aha nna gị, dị ka james.carter@..."], answer: 3, why: "Ndị were mmadụ n'ọrụ ga-ahụ adreesị gị, ya mere adreesị nwere aha gị dị mma maka ọrụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide email doro anya",
          minutes: 5,
          goal: "Dee ma zipu email nwere isiokwu, ekele, obere ozi na okwu mmechi.",
          text: [
            "Ezigbo email nwere akụkụ ise: onye ọ na-aga, isiokwu (subject line), ekele, obere ozi, na okwu mmechi nwere aha gị.",
            "Isiokwu na-agwa onye na-agụ ya ihe email ahụ gbasara tupu o meghee ya, dịka ọmụmaatụ \"Ajụjụ gbasara ọhụhụ m na Tuzde\" ma ọ bụ \"Arịrịọ maka ọrụ onye na-anara ego (cashier)\".",
            "Mee ka ozi ahụ dị mkpụmkpụ: kwuo ihe mere i ji ede, ihe ị chọrọ, na mgbe ị chọrọ ya. Gụọ ya otu ugboro tupu ị pịa Send, ma lelee adreesị \"To\" nke ọma, n'ihi na ị pụghị ịnaghachi email ozugbo i zipụrụ ya."
          ],
          steps: ["Pịa Compose ma ọ bụ New message.", "Dee adreesị onye ahụ n'igbe \"To\".", "Dee obere isiokwu.", "Malite n'ekele, dị ka \"Ndewo Ms. Lee,\".", "Dee ahịrịokwu mkpụmkpụ abụọ ma ọ bụ atọ: ihe mere, ihe ị chọrọ, mgbe ị chọrọ ya.", "Mechie na \"Daalụ,\" na aha gị.", "Gụọ ya otu ugboro, lelee adreesị, wee pịa Send."],
          words: [["Isiokwu (subject line)", "okwu ole na ole na-agwa onye na-agụ ya ihe email ahụ gbasara."], ["Compose", "bọtịnụ na-amalite email ọhụrụ."], ["Okwu mmechi (sign-off)", "okwu ikpeazụ, dị ka \"Daalụ,\" na aha gị n'azụ ya."]],
          slides: [
            { title: "Akụkụ ise nke email", bullets: ["To: adreesị ahụ, wee isiokwu", "Ekele", "Obere ozi", "Okwu mmechi nwere aha gị"] },
            { title: "Ezigbo isiokwu", bullets: ["\"Ajụjụ gbasara ọhụhụ m na Tuzde\"", "\"Arịrịọ maka ọrụ onye na-anara ego (cashier)\""] },
            { title: "Tupu ị pịa Send", bullets: ["Gụọ ya otu ugboro", "Lelee adreesị \"To\"", "Ị pụghị ịnaghachi ya mgbe i zipụrụ ya"] }
          ],
          tryIt: "Dee ma zipu email nwere akụkụ ise ahụ nye onwe gị ma ọ bụ onye ezinụlọ gị. Isiokwu: \"Email omume\". Meghee ya n'akụkụ nke ọzọ ma lee otu o si dị.",
          youCanNow: "ide email doro anya nwere isiokwu, ekele, obere ozi na okwu mmechi, ma zipu ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka akụkụ obere ozi nke email kwesịrị ikwu?", options: ["Okwuntughe gị", "Ihe niile mere n'izu gị", "Ihe mere i ji ede, ihe ị chọrọ na mgbe ị chọrọ ya", "Naanị okwu \"Ndewo\""], answer: 2, why: "Obere ozi na-ekwu ihe mere i ji ede, ihe ị chọrọ na mgbe ị chọrọ ya." },
            { objective: "O2", q: "Ị na-achọ iziga email n'ọfịs dọkịta gị. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Agba ihuenyo", "Adreesị \"To\", ma gụọ email ahụ otu ugboro", "Ọnụ ọgụgụ email dị n'igbe ozi gị", "Ma isiokwu ahụ ọ dị na ALL CAPS"], answer: 1, why: "Ị pụghị ịnaghachi email, ya mere lelee adreesị ma gụọ ya tupu i zipu ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịza, ibufe na itinye faịlụ",
          minutes: 5,
          goal: "Zaa email ma zipu otu nwere faịlụ e tinyere n'ime ya.",
          text: [
            "Reply na-eziga azịza gị naanị nye onye degaara gị. Reply all na-eziga ya nye onye ọ bụla nọ n'ozi ahụ, ya mere jiri ya naanị mgbe onye ọ bụla chọrọ azịza gị. Forward na-ebufe email ahụ nye onye ọhụrụ.",
            "Faịlụ e tinyere (attachment) bụ faịlụ ị na-eziga ya na email, dị ka foto, résumé ma ọ bụ fọm. Chọọ akara ntụtụ akwụkwọ (paper clip). Họrọ faịlụ ahụ site n'ekwentị ma ọ bụ kọmputa gị, chere ruo mgbe o bulitere zuru oke, wee zipu ya.",
            "Meghee naanị faịlụ ndị ị na-atụ anya ha site n'aka ndị ị maara. Faịlụ ndị ị na-amaghị zitere nwere ike iburu mmemme na-emebi ihe."
          ],
          steps: ["Meghee email ị chọrọ ịza.", "Pịa Reply (ọ bụghị Reply all, ma ọ bụrụ na onye ọ bụla achọghị ya).", "Dee azịza gị ma pịa Send.", "Iji tinye faịlụ: n'email ọhụrụ, pịa akara ntụtụ akwụkwọ (paper clip).", "Họrọ foto ma ọ bụ akwụkwọ ahụ ma chere ka o bulite.", "Kwuo maka faịlụ ahụ n'ozi gị, wee pịa Send."],
          words: [["Reply all", "na-aza onye ọ bụla nwetara email ahụ, ọ bụghị naanị onye zitere ya."], ["Forward", "na-ebufe email i nwetara nye onye ọzọ."], ["Faịlụ e tinyere (attachment)", "faịlụ e zitere ya na email."]],
          slides: [
            { title: "Reply, Reply all, Forward", bullets: ["Reply: naanị onye zitere ya", "Reply all: onye ọ bụla nọ n'email ahụ", "Forward: zigara ya onye ọhụrụ"] },
            { title: "Itinye faịlụ", bullets: ["Pịa akara ntụtụ akwụkwọ (paper clip)", "Họrọ foto ma ọ bụ akwụkwọ ahụ", "Chere ka o bulite zuru oke, wee zipu ya"] },
            { title: "Kpachara anya", bullets: ["Meghee naanị faịlụ ndị ị na-atụ anya ha", "Faịlụ ndị ị na-amaghị zitere nwere ike iburu mmemme na-emebi ihe"] }
          ],
          tryIt: "Zaa email omume si na Nkuzi 2. Wee dee email ọhụrụ nye onwe gị, tinye otu foto ma ọ bụ akwụkwọ, ma zipu ya. Meghee ya ma lelee na faịlụ ahụ rutere.",
          youCanNow: "ịza email, ibufe otu, na iziga faịlụ dị ka attachment.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ faịlụ e tinyere (attachment)?", options: ["Isiokwu", "Faịlụ ị na-eziga ya na email, dị ka foto ma ọ bụ fọm", "Adreesị onye zitere ya", "Bọtịnụ na-ehichapụ email"], answer: 1, why: "Attachment bụ faịlụ e zitere ya na email." },
            { objective: "O3", q: "I tinyere résumé gị, mana ọ ka na-ebulite. Gịnị ka ị ga-eme?", options: ["Chere ruo mgbe o bulitere zuru oke, wee zipu ya", "Pịa Send ozugbo", "Mechie app ahụ", "Bufee email ahụ nye onye ọ bụla"], answer: 0, why: "Chere ka faịlụ ahụ bulite zuru oke, ma ọ bụghị ya, o nwere ike ịghara iso email ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe ndabere email",
        questions: [
          { objective: "O1", q: "Kedu adreesị email kacha mma iji rịọ ọrụ?", options: ["coolcat99@gmail.com", "maria.lopez@gmail.com", "partytime@yahoo.com", "xx123xx@outlook.com"], answer: 1, why: "Adreesị nwere aha mbụ gị na aha nna gị dị mma maka ọrụ." },
          { objective: "O1", q: "Gịnị mere ị ga-eji tinye nọmba ekwentị n'akaụntụ email gị?", options: ["Ka ụlọ ọrụ ahụ kpọọ gị kwa ụbọchị", "Ka i wee banyeghachi ma ọ bụrụ na i chefuo okwuntughe gị", "Ọ na-eme ka email gaa ngwa ngwa", "A chọrọ ya iji zipu foto"], answer: 1, why: "Nọmba ekwentị maka iweghachi akaụntụ na-ekwe ka i nweta koodu iji banyeghachi." },
          { objective: "O2", q: "Gịnị ka isiokwu (subject line) na-eme?", options: ["Ọ na-agwa onye na-agụ ya ihe email ahụ gbasara", "Ọ na-ejide faịlụ e tinyere", "Ọ na-egosi okwuntughe gị", "Ọ na-ehichapụ email ochie"], answer: 0, why: "Ọ na-agwa onye na-agụ ya isi okwu tupu o meghee email ahụ." },
          { objective: "O3", q: "I nwetara email e zigaara mmadụ 30. Naanị onye zitere ya chọrọ azịza gị. Kedu bọtịnụ ị ga-apịa?", options: ["Forward", "Reply all", "Delete", "Reply"], answer: 3, why: "Reply na-eziga azịza gị naanị nye onye dere ya." },
          { objective: "O3", q: "Kedu otu ị ga-esi zipu foto na email?", options: ["Dee aha foto ahụ n'isiokwu", "Pịa akara ntụtụ akwụkwọ (paper clip) ma họrọ foto ahụ", "Tinye okwuntughe gị", "Pịa Reply all"], answer: 1, why: "Akara ntụtụ akwụkwọ na-etinye attachment." }
        ]
      }
    },
    {
      name: "Isi 2: Ịnọ na nchebe na ikwurịta okwu n'ịntanetị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịmata email phishing na email aghụghọ",
          minutes: 5,
          goal: "Lelee email maka ihe ịdọ aka na ntị tupu ị pịa ihe ọ bụla.",
          text: [
            "Phishing bụ ozi adịgboroja na-eme ka ọ si n'ụlọ akụ, ụlọ ahịa, ụlọ ọrụ na-ebuga ngwongwo ma ọ bụ ọfịs gọọmentị, iji ghọgbuo gị ka ị pịa njikọ ma ọ bụ nye ozi nzuzo.",
            "Federal Trade Commission (FTC), ọfịs gọọmentị US, na-akpọ aha ihe ịrịba ama a na-ahụkarị: ozi ahụ na-eme ka ọ si n'otu nzukọ ị maara, na-ekwu na e nwere nsogbu ma ọ bụ onyinye, na-akpali gị ime ihe ozugbo, ma na-arịọ ka ị kwụọ ụgwọ n'ụzọ a na-ahụghị anya dị ka gift card, wire transfer, app ịkwụ ụgwọ ma ọ bụ cryptocurrency.",
            "Lelekwa ezi adreesị onye zitere ya: \"support@amaz0n-help.win\" abụghị Amazon. Mgbe obi abụọ dị, apịala. Gaa na weebụsaịtị ụlọ ọrụ ahụ n'onwe gị, ma ọ bụ kpọọ nọmba ị maralarị na ọ bụ ezi nọmba. Na United States, ị nwere ike ịkọ aghụghọ na reportfraud.ftc.gov."
          ],
          steps: ["Lee adreesị zuru ezu nke onye zitere ya, ọ bụghị naanị aha ya.", "Jụọ: Ọ na-eme ka ọ bụ onye m maara? E nwere nsogbu ma ọ bụ onyinye? A na-eme ka m mee ngwa ngwa? Ha chọrọ gift card ma ọ bụ wire transfer?", "Ọ bụrụ na azịza bụ ee n'otu n'ime ha, apịala njikọ ma ọ bụ meghee faịlụ.", "Lelee site n'ịga n'ezi weebụsaịtị n'onwe gị ma ọ bụ ịkpọ nọmba ị maara.", "Hichapụ ya ma ọ bụ kaa ya akara dị ka spam. Na US, kọọ ya na reportfraud.ftc.gov."],
          words: [["Phishing", "ozi adịgboroja e mere iji ghọgbuo gị ka ị pịa njikọ ma ọ bụ nye ozi nzuzo."], ["Spam", "email efu ị na-achọghị."], ["FTC", "Federal Trade Commission, ọfịs gọọmentị US na-ahụ maka akụkọ aghụghọ."]],
          slides: [
            { title: "Ihe phishing bụ", bullets: ["Email adịgboroja na-eme ka ọ bụ ụlọ akụ, ụlọ ahịa ma ọ bụ ọfịs", "Ọ chọrọ ka ị pịa, kwụọ ụgwọ ma ọ bụ kesaa ozi nzuzo"] },
            { title: "Ihe ịdọ aka na ntị anọ (FTC)", bullets: ["Ọ na-eme ka ọ bụ onye ị maara", "Nsogbu ma ọ bụ onyinye", "Mkpali ime ihe ugbu a", "Kwụọ site na gift card, wire, app ịkwụ ụgwọ ma ọ bụ crypto"] },
            { title: "Lelee onye zitere ya", bullets: ["Lee adreesị zuru ezu", "\"amaz0n-help.win\" abụghị Amazon"] },
            { title: "Mgbe obi abụọ dị", bullets: ["Apịala", "Gaa n'ezi weebụsaịtị ma ọ bụ kpọọ nọmba ị maara", "Kọọ ya na reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Otu esi ezere aghụghọ", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Kọọ aghụghọ", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Meghee igbe spam ma ọ bụ junk gị ma họrọ otu ozi. Chọta opekata mpe ihe ịdọ aka na ntị abụọ n'ime ya. Apịala njikọ ọ bụla. Wee hichapụ ya.",
          youCanNow: "ilele email maka ihe ịdọ aka na ntị anọ ahụ na ezi adreesị onye zitere ya tupu ị pịa ihe ọ bụla.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ phishing?", options: ["Ọrụ email n'efu", "Ụzọ isi tinye nnukwu faịlụ", "Ụzọ nwere nkwanye ugwu isi zaa ozi", "Ozi adịgboroja na-eme ka ọ si n'ụlọ ọrụ ma ọ bụ ọfịs iji ghọgbuo gị"], answer: 3, why: "Phishing na-eme ka ọ si n'aha a tụkwasịrị obi ka ị pịa ma ọ bụ kesaa ozi." },
            { objective: "O4", q: "Email kwuru na i nwetara onyinye, na ị ga-akwụ obere ụgwọ site na gift card taa. Gịnị ka ị ga-eme?", options: ["Zụta gift card ngwa ngwa", "Zaa ya na nọmba ụlọ akụ gị", "Apịala ma ọ bụ kwụọ ụgwọ; o nwere ihe ịrịba ama aghụghọ", "Bufee ya nye ndị enyi gị ka ha meriekwa"], answer: 2, why: "Onyinye, mkpali ime ihe ugbu a na ịkwụ ụgwọ site na gift card bụ ihe ịrịba ama aghụghọ FTC kpọrọ aha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ezigbo omume n'ịntanetị",
          minutes: 4,
          goal: "Dee ozi doro anya nwere nkwanye ugwu nke ga-enweta ezigbo azịza.",
          text: [
            "Ndị mmadụ anaghị anụ olu gị n'ozi e dere ede, ya mere okwu nwere ike ịda ka ọ dị njọ karịa ihe ị pụtara. MKPỤRỤEDEMEDE UKWU NIILE (ALL CAPS) na-adị ka mkpu.",
            "Nwee nkwanye ugwu ma mee ka ọ dị mkpụmkpụ. Jiri ekele, \"biko\" na \"daalụ\". Zaa email ndị dị mkpa n'ime otu ụbọchị ma ọ bụ abụọ, ọbụlagodi naanị ikwu \"Anatala m nke a, aga m aza ya tupu Fraịde\".",
            "Mgbe iwe na-ewe gị, chere ntakịrị ma gụọ ozi ahụ ọzọ tupu i zipu ya. Etinyela ozi nzuzo dị ka nọmba Social Security gị, nọmba ụlọ akụ ma ọ bụ okwuntughe n'email ma ọ bụ n'ozi chat."
          ],
          steps: ["Malite n'ekele.", "Kwuo ihe ị chọrọ n'ahịrịokwu dị mkpụmkpụ.", "Jiri mkpụrụedemede ukwu nkịtị, ọ bụghị ALL CAPS.", "Kwuo biko na daalụ.", "Ọ bụrụ na iwe na-ewe gị, chere ma gụọ ya ọzọ tupu i zipu ya.", "Wepụ nọmba nzuzo na okwuntughe."],
          words: [["Netiquette", "ezigbo omume maka ozi na ihe e dere n'ịntanetị."], ["ALL CAPS", "ide naanị na mkpụrụedemede ukwu, nke na-adị ka mkpu."]],
          slides: [
            { title: "Okwu na-enweghị olu", bullets: ["Ozi nwere ike ịda ka ọ dị njọ karịa ihe ị pụtara", "ALL CAPS na-adị ka mkpu"] },
            { title: "Nkwanye ugwu na idoanya", bullets: ["Ekele, biko na daalụ", "Ahịrịokwu dị mkpụmkpụ", "Zaa n'ime otu ụbọchị ma ọ bụ abụọ"] },
            { title: "Tupu i zipu ya", bullets: ["Iwe na-ewe gị? Chere ma gụọ ya ọzọ", "Enweghị nọmba nzuzo ma ọ bụ okwuntughe"] }
          ],
          tryIt: "Dee obere email nwere nkwanye ugwu nye onye nwe ụlọ, ụlọ akwụkwọ, ụlọ ọgwụ ma ọ bụ onye were gị n'ọrụ (ọ dịghị mkpa ka i zipu ya) na-ajụ otu ajụjụ. Gụpụta ya n'olu dị elu: ọ dị ka ozi enyi na nke doro anya?",
          youCanNow: "ide ozi doro anya nwere nkwanye ugwu ma zere omume ndị na-akpata nsogbu n'ịntanetị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere okwu e dere ede ji nwee ike ịda ka ọ dị njọ karịa ihe ị pụtara?", options: ["Ndị mmadụ anaghị anụ olu gị n'ozi e dere ede", "Email na-agbanwe okwu gị mgbe niile", "Ekwentị na-eme ka mkpụrụedemede buo ibu", "Email mkpụmkpụ enweghị nkwanye ugwu"], answer: 0, why: "Na-enweghị olu gị, onye na-agụ ya nwere naanị okwu gị." },
            { objective: "O5", q: "Email dị mkpa rutere, mana ị chọrọ ụbọchị ole na ole iji zaa ya. Gịnị ka ị ga-eme?", options: ["Leghara ya anya ruo mgbe ị dị njikere", "Zaa ya na ALL CAPS", "Zaa n'ime otu ụbọchị ma ọ bụ abụọ ikwu mgbe ị ga-aza ya", "Bufee ya nye onye ọzọ"], answer: 2, why: "Obere azịza dị ka \"Anatala m nke a, aga m aza ya tupu Fraịde\" bụ ezigbo omume." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịbanye n'oku vidiyo",
          minutes: 5,
          goal: "Banye n'oku vidiyo site na njikọ ma jiri bọtịnụ mute na igwefoto.",
          text: [
            "Ọtụtụ ndị dọkịta, ndị were mmadụ n'ọrụ, ụlọ akwụkwọ na ezinụlọ na-eji oku vidiyo. Ndị a na-ahụkarị n'efu bụ Zoom, Google Meet, Microsoft Teams, na FaceTime na ngwaọrụ Apple. Ọ na-abụkarị na mmadụ na-ezitere gị njikọ (link) site n'email ma ọ bụ ozi ederede.",
            "Pịa njikọ ahụ nkeji ole na ole tupu oge eruo. Na ekwentị, ọ nwere ike ịrịọ gị ka ị wụnye app ahụ site n'ezi ụlọ ahịa app. Mgbe ọ jụrụ, kwe ka o jiri igwe okwu (microphone) na igwefoto.",
            "Mụta bọtịnụ abụọ: igwe okwu (mute na unmute) na igwefoto (gbanye na gbanyụọ). Nọdụ ihu gị chere ìhè, n'ebe dị jụụ, ma mee mute mgbe ị na-adịghị ekwu okwu."
          ],
          steps: ["Chọta njikọ ahụ n'email ma ọ bụ ozi ederede site n'aka onye ị maara.", "Banye nkeji ise tupu oge eruo.", "Ọ bụrụ na a jụọ, wụnye ezi app ahụ ma ọ bụ meghee ya na browser.", "Kwe ka o jiri igwe okwu na igwefoto.", "Chọta bọtịnụ mute na bọtịnụ igwefoto.", "Chee ìhè ihu, chọta ebe dị jụụ, ma mee mute mgbe ị na-adịghị ekwu okwu.", "Pịa Leave ma ọ bụ bọtịnụ uhie iji kwụsị oku ahụ."],
          words: [["Oku vidiyo", "oku ebe unu na-ahụ ma na-anụ ibe unu na ihuenyo."], ["Mute", "na-agbanyụ igwe okwu gị ka ndị ọzọ ghara ịnụ gị."], ["Njikọ nzukọ (meeting link)", "adreesị weebụ na-akpọbanye gị ozugbo n'oku vidiyo."]],
          slides: [
            { title: "App oku vidiyo a na-ahụkarị", bullets: ["Zoom, Google Meet, Microsoft Teams", "FaceTime na ngwaọrụ Apple", "Ị na-enwetakarị njikọ site n'email ma ọ bụ ozi ederede"] },
            { title: "Ịbanye", bullets: ["Pịa njikọ ahụ nkeji ole na ole tupu oge eruo", "Kwe ka o jiri igwe okwu na igwefoto"] },
            { title: "Bọtịnụ abụọ ị ga-amata", bullets: ["Igwe okwu: mute na unmute", "Igwefoto: gbanye na gbanyụọ", "Bọtịnụ uhie ma ọ bụ Leave: kwụsị oku"] },
            { title: "Ka a hụ gị ma nụ gị nke ọma", bullets: ["Chee ìhè ihu", "Ebe dị jụụ", "Mee mute mgbe ị na-adịghị ekwu okwu"] }
          ],
          tryIt: "Omume maka ọrụ ikpeazụ: rịọ enyi gị ma ọ bụ onye ezinụlọ gị ka o zitere gị njikọ oku vidiyo (ma ọ bụ malite oku Google Meet ma ọ bụ Zoom n'onwe gị). Banye n'ime ya, mee mute na unmute, gbanyụọ igwefoto ma gbanye ya ọzọ, wee pụọ n'oku ahụ.",
          youCanNow: "ịbanye n'oku vidiyo site na njikọ, iji bọtịnụ mute na igwefoto, na ịpụ n'oku ahụ.",
          quickCheck: [
            { objective: "O6", q: "Kedu otu ị na-esikarị abanye n'oku vidiyo?", options: ["Site n'ịkpọ nọmba ekwentị si na mgbasa ozi na-apụta na mberede", "Site n'ịpịa njikọ mmadụ zitere gị", "Site n'iziga email nye app ahụ", "Site n'ịgbanyụ igwefoto"], answer: 1, why: "Ọ na-abụkarị na mmadụ na-ezitere gị njikọ site n'email ma ọ bụ ozi ederede, ị pịa ya ịbanye." },
            { objective: "O6", q: "Ajụjụ ọnụ vidiyo gị na-amalite n'elekere 10:00. Gịnị ka ị ga-eme?", options: ["Banye n'elekere 10:15", "Banye site n'ime ụlọ nwere mkpọtụ, ìhè dị n'azụ gị", "Hapụ igwe okwu gị ka ọ gbanye oge niile mgbe ndị ọzọ na-ekwu okwu", "Banye nkeji ole na ole tupu oge eruo n'ebe dị jụụ, ihu gị chere ìhè"], answer: 3, why: "Ịbanye n'oge na-enye gị ohere ịwụnye app ahụ ma kwe ka o jiri igwe okwu na igwefoto n'oge." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịnọ na nchebe na ikwurịta okwu n'ịntanetị",
        questions: [
          { objective: "O4", q: "Email kwuru na akaụntụ ụlọ akụ gị akpọchiri, na ị ga-apịa njikọ n'ime otu awa. Gịnị ka ị ga-eme?", options: ["Pịa njikọ ahụ ngwa ngwa", "Zaa ya na nọmba akaụntụ gị", "Gaa n'ezi weebụsaịtị ụlọ akụ ahụ n'onwe gị ma ọ bụ kpọọ nọmba ị maara", "Bufee ya nye ndị enyi gị niile"], answer: 2, why: "Mkpali na nsogbu bụ ihe ịrịba ama aghụghọ; lelee site n'ụzọ ị tụkwasịrị obi." },
          { objective: "O4", q: "Kedu arịrịọ ịkwụ ụgwọ bụ ihe ịdọ aka na ntị nke aghụghọ?", options: ["Ịkwụ ụgwọ na weebụsaịtị ụlọ akụ gị n'onwe ya", "Ịkwụ ụgwọ site na gift card", "Ịkwụ ụlọ ahịa ụgwọ n'ebe a na-akwụ ụgwọ", "Ịkwụ dọkịta ụgwọ n'ihu ọfịs"], answer: 1, why: "FTC kpọrọ gift card aha dị ka ụzọ ịkwụ ụgwọ a na-ahụghị anya nke ndị aghụghọ na-arịọ." },
          { objective: "O5", q: "Gịnị ka ide na ALL CAPS na-adị ka nye onye na-agụ ya?", options: ["Mkpu", "Nkwanye ugwu", "Ịnọ jụụ", "Ihe ọchị"], answer: 0, why: "Mkpụrụedemede ukwu niile na-adị ka mkpu." },
          { objective: "O6", q: "N'oku vidiyo, ị naghị ekwu okwu, e nwekwara mkpọtụ n'ụlọ. Gịnị ka ị kwesịrị ime?", options: ["Pụọ n'oku ahụ", "Mee ka olu dị elu", "Gbanyụọ naanị igwefoto", "Mee mute n'igwe okwu gị"], answer: 3, why: "Mute na-egbochi ndị ọzọ ịnụ mkpọtụ dị n'azụ." },
          { objective: "O4", q: "Ebee ka ndị nọ na US nwere ike ịkọ aghụghọ?", options: ["reportfraud.ftc.gov", "Email onye aghụghọ ahụ", "Okwu e dere na social media", "freehelp.win"], answer: 0, why: "FTC na-anabata akụkọ aghụghọ na reportfraud.ftc.gov." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Email na Mkparịta Ụka n'Ịntanetị",
    questions: [
      { objective: "O1", q: "N'adreesị maria@gmail.com, gịnị ka gmail.com na-agwa gị?", options: ["Okwuntughe Maria", "Ụlọ ọrụ na-elekọta email ahụ", "Nọmba ekwentị Maria", "Obodo Maria"], answer: 1, why: "Akụkụ dị n'azụ @ bụ ụlọ ọrụ email ahụ." },
      { objective: "O1", q: "Kedu nke bụ ọrụ email n'efu?", options: ["Outlook.com", "Igwe mbipụta", "Ozi ederede", "Web browser"], answer: 0, why: "Outlook.com, Gmail na Yahoo Mail bụ ọrụ email n'efu." },
      { objective: "O1", q: "Okwuntughe email siri ike bụ:", options: ["Ụbọchị ọmụmụ gị", "\"password\"", "Otu ahụ ị na-eji ebe niile", "Ogologo, ị na-ejighịkwa ya ebe ọzọ"], answer: 3, why: "Okwuntughe ogologo nke dị iche na-esi ike ịkọ ma ọ bụ izu." },
      { objective: "O2", q: "Kedu bọtịnụ na-amalite email ọhụrụ?", options: ["Compose ma ọ bụ New message", "Delete", "Spam", "Archive"], answer: 0, why: "Compose na-amalite email ọhụrụ." },
      { objective: "O2", q: "Kedu isiokwu kacha mma maka ịjụ maka ọrụ?", options: ["\"hi\"", "Enweghị isiokwu", "\"gụọ nke a\"", "\"Arịrịọ maka ọrụ onye na-anara ego (cashier)\""], answer: 3, why: "Ọ na-agwa onye na-agụ ya kpọmkwem ihe email ahụ gbasara." },
      { objective: "O2", q: "Tupu ị pịa Send, ị kwesịrị:", options: ["Itinye nọmba ụlọ akụ gị", "Iwepụ ekele", "Ide ya na ALL CAPS", "Ilele adreesị \"To\" ma gụọ email ahụ otu ugboro"], answer: 3, why: "Ị pụghị ịnaghachi email, ya mere bụrụ ụzọ lelee ya." },
      { objective: "O2", q: "Kedu akụkụ na-abịa na njedebe email?", options: ["Isiokwu", "Adreesị \"To\"", "Okwu mmechi nwere aha gị", "Akara ntụtụ akwụkwọ"], answer: 2, why: "Okwu mmechi dị ka \"Daalụ, Ana\" na-emechi email ahụ." },
      { objective: "O3", q: "Forward pụtara:", options: ["Ịza naanị onye zitere ya", "Ihichapụ email ahụ", "Ibufe email ahụ nye onye ọhụrụ", "Ịka ya akara dị ka spam"], answer: 2, why: "Forward na-eziga email i nwetara nye onye ọzọ." },
      { objective: "O3", q: "A na-eji akara ntụtụ akwụkwọ (paper clip):", options: ["Itinye faịlụ", "Ịgbanwe ụdị mkpụrụedemede", "Igbochi onye na-ezipu ozi", "Ibipụta email ahụ"], answer: 0, why: "Akara ntụtụ akwụkwọ na-etinye attachment." },
      { objective: "O3", q: "Onye ị na-amaghị zitere gị faịlụ ị na-atụghị anya ya. Ị kwesịrị:", options: ["Imeghe ya ozugbo", "Ibufe ya nye ndị enyi gị", "Ịghara imeghe ya", "Ịza ya na okwuntughe gị"], answer: 2, why: "Faịlụ ị na-atụghị anya ya site n'aka ndị ị na-amaghị nwere ike iburu mmemme na-emebi ihe." },
      { objective: "O3", q: "A ga-eji Reply all:", options: ["Mgbe niile", "Naanị mgbe onye ọ bụla nọ n'email ahụ chọrọ azịza gị", "Ọ dịghị mgbe ọ bụla", "Iziga spam"], answer: 1, why: "Reply all na-eru onye ọ bụla, ya mere jiri ya naanị mgbe ha niile chọrọ ya." },
      { objective: "O4", q: "Phishing bụ:", options: ["Ozi adịgboroja na-achọ ịghọgbu gị", "Otu ụdị faịlụ e tinyere", "App oku vidiyo", "Okwuntughe siri ike"], answer: 0, why: "Ozi phishing na-eme ka ha bụ ezi ozi iji zuo ozi ma ọ bụ ego." },
      { objective: "O4", q: "Aha onye zitere ya kwuru \"Amazon\" mana adreesị ya bụ support@amaz0n-help.win. Nke a bụ:", options: ["Ihe nkịtị", "Njikọ oku vidiyo", "Adreesị isi Amazon", "Ihe ịdọ aka na ntị"], answer: 3, why: "Ezi adreesị onye zitere ya adabaghị n'ụlọ ọrụ ahụ." },
      { objective: "O4", q: "Kedu nke bụ otu n'ime ihe ịrịba ama aghụghọ anọ FTC kpọrọ aha?", options: ["Ozi ahụ dị mkpụmkpụ", "Mkpali ime ihe ozugbo", "O nwere ekele", "O si n'aka enyi ị kpọrọ"], answer: 1, why: "Ndị aghụghọ na-eme ka ị mee ngwa ngwa ka ị ghara ịkwụsị chee echiche." },
      { objective: "O4", q: "Ị maghị ma email si n'ụlọ akụ gị bụ eziokwu. Nzọụkwụ kacha enweghị nsogbu bụ:", options: ["Ịpịa njikọ ya iji lelee", "Ịza ya ma jụọ", "Ịga na weebụsaịtị ụlọ akụ ahụ n'onwe gị ma ọ bụ ịkpọ nọmba dị na kaadị gị", "Iziga nọmba akaụntụ gị"], answer: 2, why: "Jiri ụzọ ị maralarị na ọ bụ eziokwu, ọ bụghị njikọ dị n'email ahụ." },
      { objective: "O5", q: "Iwe na-ewe gị, i dekwala email iwe. Ezigbo omume na-ekwu:", options: ["Zipu ya na ALL CAPS", "Chere ma gụọ ya ọzọ tupu i zipu ya", "Zipu ya nye onye ọ bụla", "Tinye nọmba ụlọ akụ gị"], answer: 1, why: "Ichere na-enyere gị aka iziga ozi dị jụụ ma doo anya karị." },
      { objective: "O5", q: "Kedu nke ị na-ekwesịghị itinye n'email MGBE Ọ BỤLA?", options: ["\"Daalụ\"", "Ekele", "Nọmba Social Security gị", "Isiokwu"], answer: 2, why: "Enwere ike izu nọmba nzuzo dị n'email." },
      { objective: "O6", q: "Kedu nke bụ app oku vidiyo a na-ahụkarị?", options: ["Zoom", "Igwe mgbakọ", "Notepad", "Ebe foto dị (camera roll)"], answer: 0, why: "Zoom, Google Meet, Teams na FaceTime bụ app oku vidiyo." },
      { objective: "O6", q: "Mgbe ị na-abanye n'oku vidiyo, ezigbo omume bụ:", options: ["Ịbanye nkeji 20 n'azụ oge", "Ịnọdụ ala, windo na-enwu ọkụ n'azụ gị", "Ịbanye nkeji ole na ole tupu oge eruo ma chee ìhè ihu", "Ịhapụ TV ka ọ na-eme mkpọtụ"], answer: 2, why: "Ịbanye n'oge na iche ìhè ihu na-enyere oku ahụ aka ịga nke ọma." },
      { objective: "O6", q: "N'oku vidiyo, bọtịnụ igwe okwu na-ekwe ka ị:", options: ["See foto", "Zipu faịlụ", "Kwụsị ịntanetị", "Mee mute ma ọ bụ unmute onwe gị"], answer: 3, why: "Bọtịnụ igwe okwu na-agbanyụ ma na-agbanye olu gị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      4,
      5,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Email doro anya",
        objective: "O2",
        notYet: "Isiokwu, ekele, ozi ma ọ bụ okwu mmechi adịghị.",
        meets: "Isiokwu, ekele, ahịrịokwu mkpụmkpụ abụọ ma ọ bụ atọ na okwu mmechi nwere aha gị.",
        exceeds: "Isiokwu ahụ na-ekwu kpọmkwem ihe email ahụ gbasara, ozi ahụ na-ekwukwa ihe ị chọrọ na mgbe ị chọrọ ya."
      },
      {
        name: "Faịlụ e tinyere",
        objective: "O3",
        notYet: "E tinyeghị faịlụ ọ bụla, ma ọ bụ na o bulitechaghị.",
        meets: "E tinyere otu foto ma ọ bụ akwụkwọ, o sokwa email ahụ rute.",
        exceeds: "Faịlụ ahụ nwere aha doro anya, email ahụ na-ekwukwa ihe e tinyere n'ime ya."
      },
      {
        name: "Azịza",
        objective: "O3",
        notYet: "E zipughị azịza ọ bụla, ma ọ bụ e jiri Reply all mgbe naanị otu onye chọrọ ya.",
        meets: "E zigara azịza nye onye kwesịrị ịnata ya.",
        exceeds: "Azịza ahụ nwere nkwanye ugwu ma zaa ajụjụ ọ bụla dị n'email ahụ."
      },
      {
        name: "Nkwanye ugwu na nzuzo",
        objective: "O5",
        notYet: "Email ahụ dị na ALL CAPS, na-ada ka ọ enweghị nkwanye ugwu, ma ọ bụ nwee nọmba nzuzo ma ọ bụ okwuntughe.",
        meets: "Email ahụ nwere nkwanye ugwu, na-eji mkpụrụedemede ukwu nkịtị, enweghịkwa ozi nzuzo.",
        exceeds: "Ọ na-eji biko na daalụ, a na-aghọtakwa ya nke ọma na mgbe mbụ a gụrụ ya."
      },
      {
        name: "Ihe ịrịba ama phishing",
        objective: "O4",
        notYet: "Ihe ịdọ aka na ntị erughị abụọ, ma ọ bụ otu n'ime ha ezighi ezi.",
        meets: "Ihe ịdọ aka na ntị abụọ ziri ezi a ga-elele tupu ịpịa njikọ ọ bụla.",
        exceeds: "Ọ na-ekwukwa ihe a ga-eme kama ịpịa ya, na ebe a ga-akọ aghụghọ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ọrụ ikpeazụ",
      "Ndị na-amụ ihe kwuru na ha zigara ezi email nye onye were mmadụ n'ọrụ, dọkịta, ụlọ akwụkwọ ma ọ bụ ọfịs n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gwụrụ (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha banyere n'oku vidiyo ma ọ bụ ọhụhụ dọkịta n'ịntanetị (telehealth) n'onwe ha",
      "Ndị na-amụ ihe kwuru na ha matara email phishing ma ghara ịpịa ya"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị, tablet ma ọ bụ kọmputa nwere ịntanetị",
      "Akaụntụ email n'efu (Gmail, Outlook.com ma ọ bụ Yahoo Mail), ma ọ bụ oge iji meghee otu",
      "Foto ma ọ bụ akwụkwọ a ga-etinye, nke na-enweghị ihe nzuzo n'ime ya",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Idebanye aha akaụntụ nwere ike ịrịọ nọmba ekwentị iji kwado ya; hapụ onye ọ bụla na-amụ ihe ka o kpebie ihe ọ ga-ekesa, ma nye oge ọzọ na nnọkọ mbụ.",
      "Kee ndị na-amụ ihe abụọ abụọ ka ha zigara ibe ha email maka omume ịza na itinye faịlụ.",
      "Jiri ihe atụ phishing e bipụtara ma ọ bụ screenshot; emeghela ezi email ma ọ bụ njikọ na-enye obi abụọ na klas mgbe ọ bụla.",
      "Mee otu obere oku vidiyo omume na otu ahụ ka onye ọ bụla nwaa bọtịnụ mute na igwefoto.",
      "Chetara ndị na-amụ ihe ka ha ghara ikesa okwuntughe email ha na onye ọ bụla mgbe ọ bụla, tinyere onye nkuzi."
    ]
  }
};
