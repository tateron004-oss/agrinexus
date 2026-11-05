"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-mobile-money-safety.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Fees and help numbers change: learners read them on their own provider's official channels. No investment advice. Figures are examples only.

const SAF_FRAUD = { name: "The Star, Kenya (27 March 2025): ụdị aghụghọ a na-emekarị ndị na-eji M-Pesa; kọọ ya na 333, Zuri ma ọ bụ n'app; Safaricom anaghị arịọ PIN gị mgbe ọ bụla", url: "https://www.the-star.co.ke/news/infographics/2025-03-27-common-fraud-schemes-targeting-m-pesa-users" };
const SAF_REV = { name: "Citizen Digital, Kenya: otu esi alọghachi ego M-Pesa (zigaa ozi SMS nkwenye na 456; till ma ọ bụ Paybill ezighi ezi: kpọọ 100)", url: "https://citizen.digital/news/how-to-easily-reverse-money-on-m-pesa-n295204" };
const MTN_GH = { name: "Ghana News Agency (October 2026): MTN na-adọ ndị ahịa ya aka na ntị ka ha ghara ikesa PIN MoMo ha", url: "https://gna.org.gh/2026/10/mtn-cautions-customers-not-to-share-momo-pin/" };
const CBK = { name: "Central Bank of Kenya (ụlọ akụ etiti Kenya: ọ na-achịkwa mobile money ma depụta ndị nwere ikike inye ọrụ ịkwụ ụgwọ)", url: "https://www.centralbank.go.ke" };
const CBN_CP = { name: "Central Bank of Nigeria (CBN): nchekwa ndị ahịa", url: "https://www.cbn.gov.ng/supervision/cpd.html" };
const BOG = { name: "Bank of Ghana: usoro mkpesa na ndepụta ụlọ ọrụ nwere ikike", url: "https://www.bog.gov.gh" };
const BCEAO_EME = { name: "BCEAO, ụlọ akụ etiti nke steeti West Africa: ụlọ ọrụ ego elektrọnik (mba XOF dị ka Senegal na Côte d'Ivoire)", url: "https://www.bceao.int/fr/content/monnaie-electronique" };

module.exports = {
  id: "afr-mobile-money-safety-ig",
  lang: "ig",
  translationOf: "afr-mobile-money-safety",
  category: "Africa: Life and Work",
  name: "Iji Mobile Money n'Enweghị Nsogbu (M-Pesa, MTN MoMo, Orange Money, Wave)",
  skills: "Ichebe PIN gị na ekwentị gị, Ilele aha tupu i zipu ego, Iji ndị agent na ụgwọ ọrụ n'enweghị nsogbu, Ịmata aghụghọ mobile money, Ime ngwa ngwa mgbe i zigara ego n'ebe ezighi ezi ma ọ bụ e mere gị aghụghọ, Ide atụmatụ nchekwa nke gị",
  outcome: "iziga ego, ịnata ego na ịkwụ ụgwọ site na mobile money n'enweghị nsogbu: ichebe PIN gị, ilele aha tupu i kwenye, ịmata aghụghọ ndị a na-ahụkarị, ime ngwa ngwa mgbe i zigara ego n'ebe ezighi ezi ma ọ bụ e mere gị aghụghọ, na idebe atụmatụ nchekwa nke otu peeji maka gị na ezinụlọ gị.",
  about: [
    "Mobile money (ego ekwentị) bụ otu ọtụtụ nde mmadụ n'Africa si eziga ego, chekwaa ego ma kwụọ ụgwọ kwa ụbọchị: M-Pesa na Kenya, MTN MoMo na Ghana na Nigeria, Orange Money na Côte d'Ivoire na Cameroon, Wave na Senegal, na akpa ego ekwentị na Egypt na Morocco. Ọ dị ngwa ma baa uru, ndị aghụghọ makwaara nke a.",
    "Ihe ọmụmụ a bụ maka ndị ahịa, ndị nne na nna, ụmụ akwụkwọ, ndị ọrụ na onye ọ bụla na-eji ekwentị nkịtị ma ọ bụ smartphone maka ego. Ị ga-amụta otu akpa ego gị, PIN gị na agent si arụ ọrụ, otu esi elele ịkwụ ụgwọ ọ bụla tupu i kwenye, aghụghọ ndị aghụghọ na-eji, na kpọmkwem ihe ị ga-eme ma ọ bụrụ na ego gara n'aka onye na-ezighi ezi.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ ya, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\" n'ekwentị gị, n'etinyeghị ezi PIN gị mgbe ọ bụla maka omume. E nwere obere nnwale mgbe nkuzi na isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ụgwọ ọrụ, oke na nọmba enyemaka na-agbanwe, ya mere ị ga-amụta ịgụ ha n'ụzọ gọọmentị nke ụlọ ọrụ gị (provider)."
  ],
  finalTask: "Dee atụmatụ nchekwa mobile money nke otu peeji maka onwe gị ma ọ bụ ezinụlọ gị: iwu PIN gị na mkpọchi ekwentị, otu ị na-esi elele aha tupu i zipu ego, ụzọ enyemaka na ụzọ ịkọ aghụghọ nke ụlọ ọrụ gị (e detuuru site na weebụsaịtị, app ma ọ bụ akpa SIM nke ụlọ ọrụ ahụ n'onwe ya), ihe ịdọ aka na ntị isii nke aghụghọ, ihe ị ga-eme n'ime awa mbụ mgbe i zigara ego n'ebe ezighi ezi ma ọ bụ e mere gị aghụghọ, na ilele ndekọ akaụntụ (statement) gị kwa ọnwa.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa n'Africa niile, n'obodo mepere emepe na n'ime obodo: ndị na-ere ahịa, ndị na-agba boda boda na okada, ndị nne na nna, ụmụ akwụkwọ, ndị ọrụ na ndị nwe obere azụmahịa na-eziga, na-anata ma na-akwụ ụgwọ site na mobile money. Ọmụmaatụ sitere na Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Egypt na Morocco.",
    startingPoint: "Ọtụtụ na-eziga ma na-anata ego site na menu USSD (*xxx#) ma ọ bụ app. Ọtụtụ agụbeghị tebụl ụgwọ ọrụ mgbe ọ bụla, amaghị otu esi alọghachi ego e zigara n'ebe ezighi ezi, na-ekerịta ekwentị ma ọ bụ PIN ha na ezinụlọ, ma ọ bụ ndị aghụghọ akpọọla ha oku ma ọ bụ zitere ha SMS.",
    gap: "Ndị mmadụ na-atụfu ego site n'ozi nlọghachi ego adịgboroja, arịrịọ PIN na koodu, agent adịgboroja na aghụghọ \"ezigara m na nọmba ezighi ezi\", ọtụtụ amaghịkwa nzọụkwụ gọọmentị ngwa ngwa mgbe ha zigara ego n'ebe ezighi ezi. Ndị na-amụ ihe chọrọ omume na atụmatụ e dere ede nke na-echebe ego ha na nke ezinụlọ ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a sụgharịrị ya gaa n'asụsụ French na Arabic",
      "Ngwaọrụ: ọtụtụ na-eji ekwentị nkịtị nwere menu USSD; data dị oke ọnụ",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ na ụbọchị ahịa",
      "Ụgwọ ọrụ, oke na nọmba enyemaka dị iche site na mba ruo mba ma na-agbanwe: gụọ ha mgbe niile n'ụzọ gọọmentị nke ụlọ ọrụ ahụ",
      "Etinyela ezi PIN, okwuntughe ma ọ bụ koodu otu oge (one-time code) n'ọrụ omume ọ bụla"
    ],
    prerequisites: "Akaụntụ mobile money, ma ọ bụ ekwentị onye ezinụlọ ka unu lee menu ahụ ọnụ (n'enweghị PIN)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ekwentị gị na akaụntụ mobile money gị", action: "ịhọrọ PIN siri ike ịkọ, ịkpọchi ekwentị gị na idebe PIN ahụ naanị n'onwe gị", standard: "n'ekesaghị PIN ahụ na onye ọ bụla, ọbụlagodi ezinụlọ ma ọ bụ onye kwuru na ọ bụ onye ọrụ ụlọ ọrụ ahụ" },
    { id: "O2", condition: "Mgbe ị na-eziga ego, na-akwụ ụgwọ n'ụlọ ahịa ma ọ bụ na-eji agent", action: "ilele aha onye ị na-ezigara, nọmba ya na ego ahụ n'ihuenyo nkwenye tupu i tinye PIN gị, ma debe ozi nkwenye ahụ", standard: "oge ọ bụla, na ịkwụsị ma ọ bụrụ na ihe ọ bụla adabaghị" },
    { id: "O3", condition: "Mgbe e nyere gị oku ma ọ bụ ozi isii gbasara mobile money", action: "ịmata ndị bụ aghụghọ na ịkpọ aha ihe ịdọ aka na ntị dị na nke ọ bụla", standard: "ma nweta opekata mpe 5 n'ime 6 ziri ezi" },
    { id: "O4", condition: "Mgbe ego gara na nọmba ezighi ezi ma ọ bụ ị chere na e mere gị aghụghọ", action: "ịkọ ya site n'ụzọ gọọmentị nke ụlọ ọrụ gị ma soro nzọụkwụ nlọghachi ego", standard: "n'otu ụbọchị ahụ, na-edebe ozi nkwenye mbụ ahụ ma n'ejighị nọmba ọ bụla onye ị na-amaghị nyere gị" },
    { id: "O5", condition: "Site n'iji ihe ị mụtara na weebụsaịtị gọọmentị ma ọ bụ akpa SIM nke ụlọ ọrụ gị", action: "ide atụmatụ nchekwa mobile money nke otu peeji maka gị ma ọ bụ ezinụlọ gị", standard: "nke gụnyere iwu PIN, ilele aha, ụzọ enyemaka gọọmentị, ihe ịrịba ama aghụghọ, nzọụkwụ awa mbụ na ilele ndekọ akaụntụ kwa ọnwa" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu mobile money si arụ ọrụ, na iji ya n'enweghị nsogbu",
      lessons: [
        {
          title: "Akpa ego gị, PIN gị na ekwentị gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ PIN siri ike, kpọchie ekwentị gị ma kpọọ aha ndị a na-agaghị enye PIN gị mgbe ọ bụla.",
          text: [
            "Akpa ego mobile money (wallet) bụ akaụntụ e jikọrọ na kaadị SIM gị. Ị na-etinye ego n'aka agent, zipu ya, jiri ya kwụọ ụgwọ, ma wepụtakwa ya ọzọ. PIN gị (nọmba nzuzo) bụ mkpịsị ugodi akpa ego ahụ. Onye ọ bụla nwere ekwentị gị na PIN gị nwere ike ịkpochapụ ya.",
            "Họrọ PIN siri ike ịkọ: ọ bụghị afọ a mụrụ gị, ọ bụghị 1234 ma ọ bụ 0000, ọ bụghị nọmba ikpeazụ nke nọmba ekwentị gị. Kpuchie bọtịnụ mgbe ị na-etinye ya n'ihu agent ma ọ bụ n'ime matatu ma ọ bụ ahịa jupụtara na mmadụ. Kpọchie ekwentị n'onwe ya site na PIN, pattern ma ọ bụ mkpịsị aka, ma ọ bụrụ na ekwentị gị kwere, tinyekwa SIM PIN, ka onye ohi ghara inwe ike itinye SIM gị n'ekwentị ọzọ.",
            "Ekesala PIN mobile money gị ma ọ bụ koodu otu oge na onye ọ bụla: ọ bụghị enyi, ọ bụghị nwa, ọ bụghị agent, ọ bụghịkwa onye kpọrọ oku sị na ọ si Safaricom, MTN, Orange ma ọ bụ Wave. Ụlọ ọrụ ndị a na-ekwu n'ụzọ doro anya na ndị ọrụ ha agaghị arịọ PIN gị mgbe ọ bụla. Ọ bụrụ na mmadụ arịọ ya, ọ bụ aghụghọ.",
            "Ọ bụrụ na ekwentị gị furu efu ma ọ bụ e zuru ya, ma ọ bụ na ahịrị gị kwụsịrị ịrụ ọrụ na mberede, jiri ekwentị ọzọ kpọọ ụlọ ọrụ gị ozugbo ka ha gbochie SIM na akpa ego ahụ. Ahịrị kwụsịrị n'enweghị ihe kpatara ya nwere ike ịbụ SIM swap, ebe onye omempụ bufere nọmba gị na SIM nke ya."
          ],
          steps: ["Gbanwee PIN gị site na menu ma ọ bụrụ na ọ dị mfe ịkọ (afọ ọmụmụ, 1234, nọmba a na-ekwughachi).", "Tinye mkpọchi ihuenyo n'ekwentị gị.", "Gbanye SIM PIN ma ọ bụrụ na ekwentị gị nwere ya.", "Kpuchie bọtịnụ mgbe ị na-etinye PIN gị.", "Dee nọmba enyemaka gọọmentị nke ụlọ ọrụ gị n'akwụkwọ, ọ bụghị site n'ozi onye ị na-amaghị.", "Ọ bụrụ na ekwentị furu efu ma ọ bụ ahịrị nwụrụ, jiri ekwentị ọzọ kpọọ ụlọ ọrụ ahụ ka ha gbochie ya."],
          words: [["Akpa ego (wallet)", "akaụntụ mobile money gị, e jikọrọ na kaadị SIM gị."], ["PIN", "personal identification number: nọmba nzuzo na-ekwe ka i jiri akpa ego gị."], ["SIM swap", "mgbe e bufere nọmba ekwentị gị na kaadị SIM ọhụrụ; ndị omempụ na-anwa nke a iji weghara akpa ego gị."]],
          slides: [
            { title: "PIN gị bụ mkpịsị ugodi", bullets: ["Ekwentị + PIN = ụzọ ịbanye n'ego gị niile", "Ọ bụghị afọ ọmụmụ gị, 1234 ma ọ bụ 0000", "Kpuchie bọtịnụ mgbe ị na-etinye ya"] },
            { title: "Kpọchie ekwentị na SIM", bullets: ["Mkpọchi ihuenyo: PIN, pattern ma ọ bụ mkpịsị aka", "SIM PIN ma ọ bụrụ na ekwentị gị nwere ya", "Ndị ohi agaghị enwe ike iji SIM gị ebe ọzọ"] },
            { title: "Ekesala ya mgbe ọ bụla", bullets: ["Ọ bụghị ndị enyi, ụmụaka, agent ma ọ bụ ndị kpọrọ oku", "Ezi ndị ọrụ anaghị arịọ PIN gị", "Onye ọ bụla rịọrọ ya bụ onye aghụghọ"] },
            { title: "Ekwentị furu efu ma ọ bụ ahịrị nwụrụ?", bullets: ["Jiri ekwentị ọzọ kpọọ ụlọ ọrụ ahụ ozugbo", "Gbochie SIM na akpa ego", "Ahịrị nwụrụ n'enweghị ihe kpatara ya nwere ike ịbụ SIM swap"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Chee echiche banyere PIN gị n'isi gị (edela ya ede, agwakwala onye ọ bụla). Ọ bụ afọ ọmụmụ gị, 1234 ma ọ bụ nọmba a na-ekwughachi? Ọ bụrụ ee, gbanwee ya site na menu taa. Wee lelee na ekwentị gị nwere mkpọchi ihuenyo.",
          youCanNow: "ịhọrọ PIN siri ike ịkọ, ịkpọchi ekwentị gị na SIM gị, na ịjụ onye ọ bụla rịọrọ PIN gị.",
          quickCheck: [
            { objective: "O1", q: "Kedu PIN kacha enweghị nsogbu?", options: ["1990, afọ a mụrụ gị", "1234", "Nọmba na-enweghị njikọ na ụbọchị ọmụmụ gị ma ọ bụ nọmba ekwentị gị", "Nọmba anọ ikpeazụ nke nọmba ekwentị gị"], answer: 2, why: "PIN na-enweghị njikọ na ihe gbasara gị siri ike ka ndị ọzọ kọọ." },
            { objective: "O1", q: "Onye kpọrọ oku sị na ọ si n'ụlọ ọrụ mobile money gị, ọ chọkwara PIN gị iji dozie akaụntụ gị. Gịnị ka ị ga-eme?", options: ["Kwụsị oku ahụ; ezi ndị ọrụ anaghị arịọ PIN gị", "Nye ya PIN ahụ, gbanwee ya emesịa", "Nye naanị nọmba abụọ mbụ", "Zitere ya koodu dị n'ekwentị gị kama"], answer: 0, why: "Ụlọ ọrụ anaghị arịọ PIN gị ma ọ bụ koodu; onye ọ bụla na-arịọ ya bụ onye aghụghọ." }
          ]
        },
        {
          title: "Iziga ego na ịkwụ ụgwọ: lelee aha tupu PIN",
          objectives: ["O2"],
          minutes: 5,
          goal: "Lelee aha, nọmba na ego ahụ n'ihuenyo nkwenye tupu i tinye PIN gị.",
          text: [
            "E nwere ike ịkwụsị ọtụtụ mperi na ọtụtụ aghụghọ n'otu ebe: ihuenyo nkwenye. Tupu i tinye PIN gị, ekwentị gị na-egosi onye ị na-akwụ ụgwọ na ego ole. Na Kenya, M-Pesa na-egosi aha maka nọmba, till ma ọ bụ Paybill; ụlọ ọrụ ndị ọzọ na-egosikwa aha ma ọ bụ aha ụlọ ahịa.",
            "Gụọ ya nwayọọ. Ọ bụ ezi onye ahụ ma ọ bụ ụlọ ahịa ahụ? Ego ahụ ziri ezi? 5,000 abụghị 50,000. Mgbe ị na-akwụ ụgwọ n'ụlọ ahịa, were nọmba till, merchant ma ọ bụ Paybill site n'akara ma ọ bụ akwụkwọ nnata (receipt) dị n'ụlọ ahịa ahụ, ọ bụghị site na nọmba mmadụ zitere gị.",
            "Ọ bụrụ na aha ahụ ezighi ezi ma ọ bụ dị ịtụnanya, kagbuo ya. Etinyela PIN gị \"ka ị hụ ihe ga-eme\". Mgbe i kwụchara ụgwọ, debe ozi nkwenye (SMS) ruo mgbe i ji n'aka na onye ahụ ma ọ bụ ụlọ ahịa ahụ natara ego ahụ. Ọ bụ ihe akaebe gị.",
            "Ọmụmaatụ: Ama nọ na Kumasi na-akwụ onye na-ere ya ngwaahịa GHS 600 site na MTN MoMo. Ihuenyo na-egosi aha dị iche na aha onye ahụ. Ọ kagbuo ya, kpọọ onye ahụ na nọmba o nweburu, wee chọpụta na o tinyere otu nọmba n'ụzọ na-ezighi ezi."
          ],
          steps: ["Tinye nọmba ahụ, koodu merchant ma ọ bụ till.", "Tinye ego ahụ ma gụọ ya ugboro abụọ.", "N'ihuenyo nkwenye, gụọ aha, nọmba na ego ahụ.", "Ọ bụrụ na ihe ọ bụla adabaghị, kagbuo ya.", "Ọ bụrụ na ihe niile dabara, kpuchie bọtịnụ ma tinye PIN gị.", "Debe SMS nkwenye ahụ dị ka ihe akaebe."],
          words: [["Ihuenyo nkwenye", "ihuenyo na-egosi onye ị na-akwụ ụgwọ na ego ole, tupu i tinye PIN gị."], ["Till / koodu merchant / Paybill", "nọmba ndị ụlọ ahịa na ụlọ ọrụ na-eji anata ego."], ["SMS nkwenye", "ozi ụlọ ọrụ gị na-ezitere gị mgbe i kwụchara ụgwọ; ihe akaebe gị."]],
          slides: [
            { title: "Kwụsị n'ihuenyo nkwenye", bullets: ["Ọ na-egosi aha, nọmba na ego ahụ", "Gụọ ya nwayọọ, tupu PIN", "5,000 abụghị 50,000"] },
            { title: "Ịkwụ ụgwọ n'ụlọ ahịa", bullets: ["Were till ma ọ bụ koodu merchant site n'akara ụlọ ahịa ahụ", "Ọ bụghị site na nọmba mmadụ zitere gị", "Lelee aha ụlọ ahịa ahụ n'ihuenyo"] },
            { title: "Ihe adịghị mma? Kagbuo ya", bullets: ["Etinyela PIN ka ị hụ ihe ga-eme", "Kpọọ onye ahụ na nọmba i nweburu", "Wee nwaa ọzọ nke ọma"] },
            { title: "Debe ihe akaebe gị", bullets: ["Chekwaa SMS nkwenye ahụ", "Ruo mgbe ego ahụ ruru n'aka n'enweghị nsogbu", "Ị chọrọ ya maka nlọghachi ego ọ bụla"] }
          ],
          sources: [SAF_REV],
          tryIt: "Oge ọzọ ị na-eziga ego ma ọ bụ na-akwụ ụgwọ, kwụsị n'ihuenyo nkwenye ma kwuo aha, nọmba na ego ahụ n'olu dị elu tupu i tinye PIN gị. Wee chọta SMS nkwenye ahụ ma ehichapụla ya.",
          youCanNow: "ilele aha, nọmba na ego ahụ tupu i tinye PIN gị, na idebe ozi nkwenye dị ka ihe akaebe.",
          quickCheck: [
            { objective: "O2", q: "Ihuenyo nkwenye na-egosi aha ị na-amaghị. Gịnị ka ị ga-eme?", options: ["Tinye PIN; aha na-ezighi ezi ọtụtụ oge", "Tinye PIN ma jụọ emesịa", "Buru ụzọ zipu obere ego", "Kagbuo ya ma lelee nọmba ahụ n'aka onye ahụ"], answer: 3, why: "Aha dị ịtụnanya pụtara nọmba ezighi ezi ma ọ bụ aghụghọ; kagbuo ya tupu PIN." },
            { objective: "O2", q: "Gịnị mere ị ga-eji debe SMS nkwenye mgbe i kwụchara ụgwọ?", options: ["Ọ bụ ihe akaebe gị ma ọ bụrụ na ihe agaghị nke ọma", "Ọ na-enye gị akara (points)", "Iwu sị hichapụ ya", "Ọ na-eme ka ịkwụ ụgwọ ọzọ dị ọnụ ala"], answer: 0, why: "Ozi nkwenye na-egosi na i kwụrụ ụgwọ, a chọkwara ya maka nlọghachi ego ma ọ bụ mkpesa." }
          ]
        },
        {
          title: "Ndị agent, ụgwọ ọrụ na ndekọ gị",
          objectives: ["O2", "O5"],
          minutes: 5,
          goal: "Gụọ ụgwọ ọrụ maka azụmahịa site na tebụl ụgwọ gọọmentị nke ụlọ ọrụ gị ma wepụta ego n'aka agent n'enweghị nsogbu.",
          text: [
            "Agent bụ ụlọ ahịa ebe ị na-etinye ego n'akpa ego gị (cash in, ma ọ bụ deposit) ma ọ bụ wepụta ego (withdraw). Jiri agent e debanyere aha nwere akara ụlọ ọrụ ahụ na nọmba agent. Mee azụmahịa ahụ n'onwe gị n'ekwentị gị mgbe ị nwere ike, ma gụọ ego ahụ tupu ị pụọ.",
            "Ụgwọ ọrụ dabere n'ụlọ ọrụ ahụ, mba ahụ, ego ole na ụdị azụmahịa. Echela echiche, atụkwasịla obi n'ụgwọ ọrụ mmadụ gwara gị. Gụọ tebụl ụgwọ gọọmentị (tariff) na weebụsaịtị ma ọ bụ app nke ụlọ ọrụ ahụ, n'ụlọ ahịa, ma ọ bụ site n'ịkpọ menu. Ọtụtụ app na-egosikwa ụgwọ ọrụ tupu i kwenye. Iziga onye nọ na netwọk ọzọ ma ọ bụ n'ụlọ akụ nwere ike ịdị oke ọnụ karịa.",
            "Agent adịgboroja nwere ike ịsị \"nye m ekwentị gị, m ga-emere gị ya\", ma ọ bụ rịọ PIN gị. Enyela mmadụ ekwentị gị na PIN gị mgbe ọ bụla. Ezi agent anaghị achọ ya.",
            "Otu ugboro n'ọnwa, gụọ mini statement ma ọ bụ ndekọ akaụntụ zuru ezu site na menu ma ọ bụ app. Chọọ ịkwụ ụgwọ ndị ị na-amaghị. Ọmụmaatụ: Moussa, onye na-akwa akwa na Dakar, na-elele akụkọ Wave ya na njedebe ọnwa ọ bụla ma dee ego niile o zigara na ego niile ọ natara n'akwụkwọ. Ọnụ ọgụgụ dị n'ihe ọmụmụ a bụ naanị ọmụmaatụ."
          ],
          steps: ["Chọta tebụl ụgwọ ọrụ gọọmentị na weebụsaịtị, app ma ọ bụ akwụkwọ mgbasa ozi dị n'ụlọ ahịa ụlọ ọrụ ahụ.", "Chọọ ụgwọ ọrụ maka ego ị chọrọ iziga ma ọ bụ iwepụta.", "N'aka agent, lelee akara na nọmba agent.", "Malite iwepụta ego n'ekwentị gị; lelee aha agent ahụ n'ihuenyo.", "Gụọ ego ahụ tupu ị pụọ.", "Gụọ ndekọ akaụntụ gị otu ugboro n'ọnwa."],
          words: [["Agent", "ụlọ ahịa e debanyere aha nke na-etinye ma na-ewepụta ego maka ụlọ ọrụ mobile money."], ["Tariff", "tebụl ụgwọ ọrụ gọọmentị maka ụdị na nha azụmahịa ọ bụla."], ["Mini statement", "obere ndepụta nke azụmahịa ole na ole ikpeazụ gị, site na menu ma ọ bụ app."]],
          slides: [
            { title: "Iji agent", bullets: ["Agent e debanyere aha: akara ụlọ ọrụ na nọmba agent", "Malite ya n'ekwentị gị; lelee aha", "Gụọ ego ahụ tupu ị pụọ"] },
            { title: "Ụgwọ ọrụ: gụọ ya, echela echiche", bullets: ["Ọ dabere n'ụlọ ọrụ, mba, ego ole na ụdị", "Tariff gọọmentị: weebụsaịtị, app, akwụkwọ dị n'ụlọ ahịa", "Netwọk ndị ọzọ ma ọ bụ ụlọ akụ nwere ike ịdị oke ọnụ"] },
            { title: "Ihe ịrịba ama agent adịgboroja", bullets: ["\"Nye m ekwentị gị, m ga-eme ya\"", "Ọ na-arịọ PIN gị", "Enweghị akara ma ọ bụ nọmba agent"] },
            { title: "Ilele kwa ọnwa", bullets: ["Gụọ ndekọ akaụntụ gị site na menu ma ọ bụ app", "Chọọ ịkwụ ụgwọ ndị ị na-amaghị", "Dee ego niile e zigara na nke a natara"] }
          ],
          sources: [CBK, BCEAO_EME],
          tryIt: "Chọta tebụl ụgwọ ọrụ gọọmentị nke ụlọ ọrụ gị (weebụsaịtị, app ma ọ bụ akwụkwọ dị n'ụlọ ahịa). Dee ụgwọ ọrụ maka iziga otu ego ị na-ezigakarị, dịka ọmụmaatụ KES 1,000, NGN 5,000, GHS 100 ma ọ bụ XOF 10,000. Wee meghee mini statement gị ma lelee ahịrị ọ bụla.",
          youCanNow: "ịgụ ezi ụgwọ ọrụ site na tariff gọọmentị, iji agent n'enweghị nsogbu na ilele ndekọ akaụntụ gị maka ịkwụ ụgwọ dị ịtụnanya.",
          quickCheck: [
            { objective: "O2", q: "N'aka agent, agent ahụ rịọrọ ekwentị gị na PIN gị \"ka o mee ngwa ngwa\". Gịnị ka ị ga-eme?", options: ["Nye ya ha; a tụkwasịrị ndị agent obi", "Nye ekwentị ma ọ bụghị PIN", "Mee ya n'onwe gị ma debe PIN gị na nzuzo", "Dee PIN ahụ n'akwụkwọ nye agent"], answer: 2, why: "Ezi agent anaghị achọ PIN gị mgbe ọ bụla; gị n'onwe gị na-amalite ma kwenye azụmahịa ahụ." },
            { objective: "O5", q: "Ebee ka ị ga-ahụ ezi ụgwọ ọrụ maka iziga ego?", options: ["Ihe onye ị na-amaghị gwara gị", "Tariff gọọmentị, app ma ọ bụ akwụkwọ dị n'ụlọ ahịa ụlọ ọrụ ahụ", "Ozi WhatsApp e zigaghachiri", "Ihe onye agbata obi gị chere"], answer: 1, why: "Ụgwọ ọrụ na-agbanwe ma dị iche site na mba ruo mba, ya mere gụọ ha n'ụzọ gọọmentị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu mobile money si arụ ọrụ, na iji ya n'enweghị nsogbu",
        questions: [
          { objective: "O1", q: "Onye kwesịrị ịma PIN mobile money gị?", options: ["Gị na agent", "Ezinụlọ gị niile", "Naanị gị", "Gị na ndị na-elekọta ndị ahịa (customer care)"], answer: 2, why: "Naanị gị; ndị ọrụ, ndị agent na ezinụlọ anaghị achọ ya." },
          { objective: "O1", q: "Ahịrị gị kwụsịrị ịrụ ọrụ na mberede, ị gbanwekwaghị ihe ọ bụla. Gịnị ka ọ nwere ike ịbụ, gịnịkwa ka ị ga-eme?", options: ["SIM swap; jiri ekwentị ọzọ kpọọ ụlọ ọrụ ahụ ka ha gbochie ya", "Batrị dị ala; chaja ekwentị", "Ezumike; chere otu izu", "Ọ dịghị ihe; ọ ga-alọghachi"], answer: 0, why: "Ahịrị nwụrụ nwere ike ịpụta na onye omempụ bufere nọmba gị; igbochi ya ngwa ngwa na-echebe akpa ego gị." },
          { objective: "O2", q: "Olee oge kwesịrị ekwesị ilele onye ị na-akwụ ụgwọ?", options: ["Mgbe i tinyechara PIN", "N'ihuenyo nkwenye, tupu PIN", "N'echi ya", "Naanị maka nnukwu ego"], answer: 1, why: "Ozugbo i tinyere PIN, ego ahụ na-aga; ilele ga-ebu ụzọ." },
          { objective: "O2", q: "Ị na-akwụ ụgwọ n'ụlọ ahịa. Ebee ka till ma ọ bụ koodu merchant kwesịrị isi?", options: ["Ozi sitere na nọmba ị na-amaghị", "Onye kpọrọ oku sị na ụlọ ahịa ahụ gbanwere nọmba ya", "WhatsApp status", "Akara ma ọ bụ akwụkwọ nnata dị n'ụlọ ahịa ahụ"], answer: 3, why: "Ndị aghụghọ na-ezipu nọmba ịkwụ ụgwọ adịgboroja; were ya n'ụlọ ahịa ahụ n'onwe ya ma lelee aha n'ihuenyo." },
          { objective: "O5", q: "Gịnị mere ị ga-eji gụọ ndekọ akaụntụ gị otu ugboro n'ọnwa?", options: ["Ịchọta ịkwụ ụgwọ ndị ị na-amaghị", "Ibelata ụgwọ ọrụ gị", "Ịgbanwe nọmba gị", "N'ihi na ụlọ ọrụ ahụ na-akwụ gị ụgwọ maka ya"], answer: 0, why: "Ilele kwa ọnwa na-ahụ aghụghọ na mperi n'oge." }
        ]
      }
    },
    {
      name: "Isi 2: Aghụghọ, mperi na atụmatụ nchekwa gị",
      lessons: [
        {
          title: "Ịmata aghụghọ mobile money",
          objectives: ["O3"],
          minutes: 6,
          goal: "Mata aghụghọ mobile money isii a na-ahụkarị na ihe ịdọ aka na ntị dị na nke ọ bụla.",
          text: [
            "Ndị aghụghọ na-eji oku, SMS, WhatsApp na soshal midia. Ha na-eme ka ha bụ ụlọ ọrụ gị, onye ikwu, agent, onye na-azụ ahịa ma ọ bụ ụlọ ọrụ nwere ọrụ. Aghụghọ ha na-agbanwe, mana ihe ịdọ aka na ntị na-adị otu.",
            "1. Nlọghachi ego adịgboroja: ị natara SMS dị ka a kwụrụ gị ego, wee nweta oku: \"Ezigara m gị ego na mperi, biko zighachi ya.\" Buru ụzọ lelee ezi ego dị n'akpa gị. Ọtụtụ oge, ọ dịghị ego bịara; SMS ahụ si na nọmba ekwentị nkịtị, ọ bụghị ụlọ ọrụ ahụ. 2. Arịrịọ PIN ma ọ bụ koodu: onye ọ bụla na-arịọ PIN gị ma ọ bụ koodu otu oge. 3. Ndị ọrụ adịgboroja: \"A ga-akpọchi akaụntụ gị ma ọ bụrụ na ị kpọghị koodu a ma ọ bụ gwa anyị ozi gị.\" 4. Onyinye ma ọ bụ promo: \"I meriri, zipu ụgwọ ka i nweta onyinye gị.\" 5. Ọrụ ma ọ bụ mbinye ego adịgboroja: ihe a na-enye gị nke na-arịọ ka i buru ụzọ kwụọ ụgwọ. 6. Ozi ngwa ngwa sitere n'ezinụlọ: \"Mama, anọ m na nsogbu, zipu ego na nọmba ọhụrụ a.\"",
            "Ezi ozi sitere n'ụlọ ọrụ ahụ na-esi n'aha gọọmentị ya ma ọ bụ short code ya, ọ bụghị nọmba ekwentị nkịtị. Ụlọ ọrụ anaghị arịọ gị ka ị kpọọ koodu iji dozie akaụntụ gị ma ọ bụ merie onyinye. Ọ bụrụ na ihe dị ka ọ dị ngwa ngwa, kwụsị. Kpọghachi onye ahụ ma ọ bụ ụlọ ọrụ ahụ na nọmba ị maralarị.",
            "Ọmụmaatụ: Chinedu nọ na Enugu natara SMS na-ekwu na NGN 20,000 bịara, wee nweta oku na-arịọ ya ka o zighachi ya. Ọ lelere ego dị n'akpa ya n'app: ọ dịghị ihe bịara. Ọ kwụsịrị oku ahụ ma kọọ nọmba ahụ."
          ],
          steps: ["Lelee onye zitere ya: aha gọọmentị ma ọ bụ short code, ka ọ bụ nọmba nkịtị?", "Lelee ezi ego dị n'akpa gị na menu ma ọ bụ app.", "Jụọ: ha na-arịọ PIN m, koodu, ụgwọ, ka ha na-eme ka m mee ngwa ngwa?", "Kwụsị ma kpọghachi na nọmba ị maralarị.", "Kọọ nọmba onye aghụghọ ahụ n'ụlọ ọrụ gị."],
          words: [["Nlọghachi ego adịgboroja (fake reversal)", "aghụghọ ebe mmadụ na-eme ka ọ zitere gị ego na mperi ma rịọ ka i zighachi ya."], ["Koodu otu oge (OTP)", "obere koodu e zitere n'ekwentị gị iji kwenye ihe; ekesala ya mgbe ọ bụla."], ["Short code", "obere nọmba gọọmentị ụlọ ọrụ na-esi na ya ezipu ozi."]],
          slides: [
            { title: "Aghụghọ isii a na-ahụkarị", bullets: ["Nlọghachi ego adịgboroja; arịrịọ PIN ma ọ bụ koodu; ndị ọrụ adịgboroja", "Onyinye chọrọ ụgwọ; ọrụ ma ọ bụ mbinye ego chọrọ ụgwọ", "Ozi ngwa ngwa sitere n'ezinụlọ na nọmba ọhụrụ"] },
            { title: "Nlọghachi ego adịgboroja", bullets: ["SMS dị ka ego bịara", "Oku: \"Ezigara m na mperi, zighachi ya\"", "Lelee ezi ego dị n'akpa gị: ọtụtụ oge ọ dịghị ihe bịara"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Ọ na-arịọ PIN ma ọ bụ koodu", "Ọ na-arịọ ka i buru ụzọ kwụọ ụgwọ", "Ọ na-eme ka ị mee ngwa ngwa; ọ si na nọmba nkịtị"] },
            { title: "Ihe ị ga-eme", bullets: ["Kwụsị. Lelee ego dị n'akpa gị", "Kpọghachi na nọmba ị maralarị", "Kọọ nọmba ahụ n'ụlọ ọrụ gị"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Lelee ozi SMS gị maka ozi gbasara ego. Maka nke ọ bụla, kpebie: short code gọọmentị ka ọ bụ nọmba nkịtị? Ọ na-arịọ PIN, koodu, ụgwọ ka ọ na-eme ka ị mee ngwa ngwa? Dee ihe ịrịba ama aghụghọ ọ bụla ị hụrụ.",
          youCanNow: "ịmata aghụghọ mobile money isii a na-ahụkarị na ikwu ihe ịdọ aka na ntị dị na nke ọ bụla.",
          quickCheck: [
            { objective: "O3", q: "SMS sitere na nọmba ekwentị nkịtị kwuru na i natara XAF 25,000. Wee onye kpọrọ oku rịọ gị ka i zighachi ya. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Zighachi ya ngwa ngwa ka ị bụrụ onye eziokwu", "Lelee ezi ego dị n'akpa gị na menu ma ọ bụ app", "Nye onye kpọrọ oku PIN gị ka ọ lọghachi ya", "Zigara ndị enyi gị SMS ahụ"], answer: 1, why: "SMS nlọghachi ego adịgboroja na-esi na nọmba nkịtị; ezi ego dị n'akpa gị na-egosi eziokwu." },
            { objective: "O3", q: "Ozi kwuru na i meriri ekwentị ma ị ga-ebu ụzọ kwụọ ụgwọ mbuga. Gịnị bụ ihe ịdọ aka na ntị?", options: ["Ọ kwuru maka ekwentị", "Ọ bịara n'anyasị", "Ọ na-arịọ ka i kwụọ ụgwọ iji nweta onyinye", "Ọ na-eji aha mbụ gị"], answer: 2, why: "Ezi onyinye anaghị achọ ụgwọ mbụ; ịkwụ ụgwọ iji nata ihe bụ aghụghọ a ma ama." }
          ]
        },
        {
          title: "Ego e zigara n'ebe ezighi ezi ma ọ bụ aghụghọ: awa mbụ",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kọọ ego e zigara n'ebe ezighi ezi ma ọ bụ aghụghọ site n'ụzọ gọọmentị nke ụlọ ọrụ gị n'otu ụbọchị ahụ.",
          text: [
            "Mee ngwa ngwa. Nlọghachi ego dị mfe karịa mgbe ego ahụ ka nọ n'akpa ego onye nke ọzọ. Debe SMS nkwenye mbụ ahụ; ehichapụla ya, agbanwekwala ya.",
            "Jiri naanị ụzọ gọọmentị: nọmba enyemaka e biri n'akpa SIM gị ma ọ bụ na weebụsaịtị ụlọ ọrụ ahụ, app gọọmentị, short code gọọmentị, ma ọ bụ ụlọ ahịa ụlọ ọrụ ahụ. Ejila nọmba sitere n'aka onye ị na-amaghị ma ọ bụ n'okwu e dere na soshal midia, akwụkwala onye ọ bụla na-enye aka \"ịchọta\" ego gị ma ị kwụọ ụgwọ.",
            "Ọmụmaatụ sitere na Kenya: ụzọ Safaricom bipụtara gụnyere iziga SMS nkwenye M-Pesa na 456 iji rịọ nlọghachi ego e zigara onye na-ezighi ezi, ịkpọ 100 maka till ma ọ bụ Paybill ezighi ezi, na iziga nọmba ma ọ bụ ozi aghụghọ na 333. Ụlọ ọrụ ndị ọzọ nwere nzọụkwụ nke ha; gụọ ha na weebụsaịtị ma ọ bụ app gọọmentị nke ụlọ ọrụ ahụ, n'ihi na nọmba na nzọụkwụ na-agbanwe.",
            "Nlọghachi ego abụghị ihe e kwere nkwa ya. Ọ bụrụ na onye ahụ ewepụtala ego ahụ ma jụ ịlọghachi ya, ụlọ ọrụ ahụ nwere ike ịgwa gị ka ị gaa ndị uwe ojii. Ọ bụrụ na e zuru PIN gị ma ọ bụ ahịrị gị, buru ụzọ kọọ ya n'ụlọ ọrụ ahụ, wee gaa ndị uwe ojii. Ọ bụrụ na ụlọ ọrụ ahụ edozighị ya, ụlọ akụ etiti (central bank) nwere usoro mkpesa ndị ahịa (dịka ọmụmaatụ Central Bank of Nigeria ma ọ bụ Bank of Ghana)."
          ],
          steps: ["Ehichapụla SMS nkwenye ahụ.", "N'ime otu awa, jiri ụzọ gọọmentị nke ụlọ ọrụ gị maka nlọghachi ego ma ọ bụ aghụghọ.", "Dee ụbọchị, oge, ego ole, transaction ID na onye unu kwurula okwu.", "Ọ bụrụ na e zuru PIN ma ọ bụ ahịrị, buru ụzọ gbochie SIM na akpa ego.", "Ọ bụrụ na ọ dị mkpa, kọọ ya ndị uwe ojii na SMS ahụ.", "Ọ bụrụ na ụlọ ọrụ ahụ edozighị ya, jiri usoro mkpesa nke ụlọ akụ etiti."],
          words: [["Nlọghachi ego (reversal)", "mgbe ụlọ ọrụ ahụ weghachiri ego e zigara na nọmba ezighi ezi, ma ọ bụrụ na ọ ka nọ ebe ahụ."], ["Transaction ID", "koodu dị na SMS nkwenye nke na-egosi otu ịkwụ ụgwọ."], ["Aghụghọ ịchọta ego (recovery scam)", "ihe adịgboroja a na-enye gị iji weghachi ego gị furu efu ma ọ bụrụ na ị kwụọ ụgwọ."]],
          slides: [
            { title: "Mee ihe n'ime awa mbụ", bullets: ["Nlọghachi ego dị mfe karịa mgbe ego ka nọ ebe ahụ", "Debe SMS nkwenye mbụ ahụ", "Dee ụbọchị, oge, ego ole, transaction ID"] },
            { title: "Naanị ụzọ gọọmentị", bullets: ["Nọmba enyemaka n'akpa SIM ma ọ bụ na weebụsaịtị gọọmentị", "App gọọmentị, short code ma ọ bụ ụlọ ahịa ụlọ ọrụ ahụ", "Ọ bụghị nọmba sitere n'aka onye ị na-amaghị"] },
            { title: "Ọmụmaatụ: Kenya (Safaricom)", bullets: ["Onye na-ezighi ezi: zigaa SMS ahụ na 456", "Till ma ọ bụ Paybill ezighi ezi: kpọọ 100", "Nọmba ma ọ bụ ozi aghụghọ: zigaa ya na 333"] },
            { title: "Ọ bụrụ na e dozighị ya", bullets: ["Kọọ ndị uwe ojii na SMS ahụ", "Usoro mkpesa nke ụlọ akụ etiti", "Akwụla ụgwọ \"ịchọta ego\" mgbe ọ bụla"] }
          ],
          sources: [SAF_REV, SAF_FRAUD, CBN_CP, BOG],
          tryIt: "Chọta nzọụkwụ gọọmentị maka nlọghachi ego na ịkọ aghụghọ nke ụlọ ọrụ gị na weebụsaịtị ya, app ya ma ọ bụ akpa SIM. Dee ha n'akwụkwọ: nọmba ma ọ bụ koodu, na ihe ị ga-ezipu. Edetula ha site n'ozi WhatsApp e zigaghachiri.",
          youCanNow: "ime ihe n'ime awa mbụ mgbe i zigara ego n'ebe ezighi ezi ma ọ bụ e mere gị aghụghọ, na-eji naanị ụzọ gọọmentị nke ụlọ ọrụ gị.",
          quickCheck: [
            { objective: "O4", q: "I zigara ego na nọmba ezighi ezi. Gịnị ka ị ga-edebe?", options: ["Ọ dịghị ihe; hichapụ SMS ahụ", "Naanị ego ole n'isi gị", "Screenshot sitere n'aka onye ị na-amaghị", "SMS nkwenye mbụ ahụ"], answer: 3, why: "Ozi nkwenye mbụ ahụ nwere transaction ID ụlọ ọrụ ahụ chọrọ." },
            { objective: "O4", q: "Mmadụ na Facebook na-enye aka ịchọta ego gị furu efu maka obere ụgwọ. Gịnị bụ nke a?", options: ["Aghụghọ ịchọta ego; jiri naanị ụzọ gọọmentị", "Ọrụ na-enye aka", "Usoro ụlọ akụ etiti", "Ụlọ ahịa ụlọ ọrụ ahụ"], answer: 0, why: "Ịkwụ onye ị na-amaghị ụgwọ ka ọ chọta ego bụ aghụghọ nke abụọ; ụzọ gọọmentị bụ n'efu." }
          ]
        },
        {
          title: "Atụmatụ nchekwa mobile money gị",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dee atụmatụ nchekwa mobile money nke otu peeji maka gị ma ọ bụ ezinụlọ gị.",
          text: [
            "Atụmatụ nchekwa na-etinye ihe niile dị n'ihe ọmụmụ a n'otu peeji, ka gị na ezinụlọ gị mara ihe unu ga-eme tupu ihe ọ bụla emebie. Debe ya n'akwụkwọ n'ụlọ, ọ bụghị naanị n'ekwentị.",
            "O nwere akụkụ isii: 1. Iwu PIN na ekwentị (PIN siri ike, mkpọchi ihuenyo, SIM PIN, ekesala ya mgbe ọ bụla). 2. Ilele aha tupu PIN ọ bụla. 3. Ụzọ enyemaka na ụzọ ịkọ aghụghọ nke ụlọ ọrụ gị, e detuuru site na weebụsaịtị, app ma ọ bụ akpa SIM ya. 4. Ihe ịdọ aka na ntị isii nke aghụghọ. 5. Nzọụkwụ awa mbụ mgbe i zigara ego n'ebe ezighi ezi ma ọ bụ e mere gị aghụghọ. 6. Ilele ndekọ akaụntụ kwa ọnwa, na ụbọchị ya.",
            "Kọwaara ndị nne na nna mere agadi na ụmụaka nọ n'afọ iri na ụma ya, n'ihi na a na-achụkarị ha. Kwekọrịta n'otu iwu ezinụlọ: \"Anyị anaghị eziga ego mgbe ọ bụla na nọmba ọhụrụ n'ihi ozi ngwa ngwa. Anyị na-ebu ụzọ kpọghachi na nọmba ochie.\"",
            "Ọmụmaatụ: Fatima, onye na-ere ahịa na Casablanca, na-edebe atụmatụ ya n'ime akwụkwọ ndekọ ego ya. Na njedebe ọnwa ọ bụla, ọ na-elele akụkọ akpa ego ya ma tinye akara n'ụbọchị ahụ n'atụmatụ ahụ."
          ],
          steps: ["Dee iwu PIN gị na mkpọchi ekwentị.", "Dee iwu ilele aha.", "Detuo ụzọ enyemaka na ụzọ ịkọ aghụghọ nke ụlọ ọrụ gị site n'ebe gọọmentị.", "Depụta ihe ịdọ aka na ntị isii nke aghụghọ.", "Dee nzọụkwụ awa mbụ gị.", "Họrọ otu ụbọchị kwa ọnwa ilele ndekọ akaụntụ gị.", "Gụọ ya na ezinụlọ gị."],
          words: [["Atụmatụ nchekwa", "obere ndepụta e dere ede nke iwu na nzọụkwụ na-echebe ego gị."]],
          slides: [
            { title: "Otu peeji, akụkụ isii", bullets: ["Iwu PIN na ekwentị; ilele aha", "Ụzọ enyemaka na ụzọ ịkọ aghụghọ gọọmentị", "Ihe ịrịba ama aghụghọ; nzọụkwụ awa mbụ; ilele kwa ọnwa"] },
            { title: "Naanị ụzọ gọọmentị", bullets: ["Detuo ha site na weebụsaịtị, app ma ọ bụ akpa SIM", "Ọ bụghị site n'ozi e zigaghachiri ma ọ bụ onye ị na-amaghị"] },
            { title: "Kesaa ya n'ụlọ", bullets: ["A na-achụkarị ndị nne na nna na ụmụaka iri na ụma", "Iwu ezinụlọ: buru ụzọ kpọghachi na nọmba ochie", "Debe atụmatụ ahụ n'akwụkwọ"] }
          ],
          sources: [CBK, BOG, BCEAO_EME],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nchekwa mobile money gị nke otu peeji nwere akụkụ isii ahụ niile. Detuo ụzọ enyemaka na ụzọ ịkọ aghụghọ nke ụlọ ọrụ gị site na weebụsaịtị, app ma ọ bụ akpa SIM ya. Gụọ ya na otu onye ezinụlọ gị.",
          youCanNow: "ide na ikesa atụmatụ nchekwa mobile money na-echebe gị na ezinụlọ gị.",
          quickCheck: [
            { objective: "O5", q: "Ebee ka nọmba enyemaka dị n'atụmatụ gị kwesịrị isi?", options: ["Ozi WhatsApp e zigaghachiri", "Weebụsaịtị, app ma ọ bụ akpa SIM gọọmentị nke ụlọ ọrụ ahụ", "Onye kpọrọ oku sị na ọ bụ onye ọrụ", "Okwu e dere na soshal midia"], answer: 1, why: "Ndị aghụghọ na-agbasa nọmba enyemaka adịgboroja; detuo ha naanị site n'ebe gọọmentị." },
            { objective: "O5", q: "Kedu iwu ezinụlọ na-echebe gị pụọ n'aghụghọ ozi ngwa ngwa?", options: ["Ziga ngwa ngwa mgbe niile n'oge nsogbu", "Kerịta otu PIN maka ezinụlọ niile", "Zaghachi na PIN gị iji gosi na ọ bụ gị", "Kpọghachi onye ahụ na nọmba ochie ya tupu i zipu"], answer: 3, why: "Ịkpọghachi na nọmba ị maara na-egosi ma ozi ngwa ngwa ahụ ọ bụ eziokwu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Aghụghọ, mperi na atụmatụ nchekwa gị",
        questions: [
          { objective: "O3", q: "\"A ga-akpọchi akaụntụ gị taa. Kpọọ koodu a ma tinye PIN gị ka i debe ya.\" Nke a bụ:", options: ["Ozi nkịtị sitere n'ụlọ ọrụ", "Aghụghọ: ọ na-eme ka ị mee ngwa ngwa ma rịọ PIN gị", "Nlọghachi ego", "Promo"], answer: 1, why: "Ụlọ ọrụ anaghị arịọ gị ka ị kpọọ koodu na PIN gị; ime ka ị mee ngwa ngwa bụ ihe ịdọ aka na ntị." },
          { objective: "O3", q: "Kedu ozi nwere ike ịbụ eziokwu karịa?", options: ["Site na nọmba nkịtị: \"Zighachi ego m zigara gị na mperi\"", "\"I meriri! Kwụọ ụgwọ ka i were ya\"", "Ozi nkwenye ịkwụ ụgwọ sitere n'aha gọọmentị nke ụlọ ọrụ ahụ, dabara n'ego dị n'akpa gị", "\"Mama, nọmba ọhụrụ, zipu ego ugbu a\""], answer: 2, why: "Ezi ozi nkwenye na-esi n'aha gọọmentị ma ọ bụ short code ma dabara n'ezi ego dị n'akpa gị." },
          { objective: "O4", q: "Olee mgbe ị ga-akọ ego e zigara n'ebe ezighi ezi?", options: ["N'ọnwa ọzọ", "Naanị ma ọ bụrụ nnukwu ego", "Mgbe onye nke ọzọ mefuchara ya", "N'otu ụbọchị ahụ, ngwa ngwa o kwere mee"], answer: 3, why: "Nlọghachi ego dị mfe karịa mgbe ego ahụ ka nọ n'akpa ego onye nke ọzọ." },
          { objective: "O4", q: "Onye natara ego gị na mperi ewepụtala ya ma jụ ịlọghachi ya. Gịnị ọzọ?", options: ["Soro ndụmọdụ ụlọ ọrụ ahụ ma kọọ ndị uwe ojii na SMS gị", "Kwụọ onye ị na-amaghị ụgwọ ka o weghachi ya", "Hichapụ SMS ahụ", "Zitere ha ego ọzọ"], answer: 0, why: "Ozugbo e wepụtara ya, ọ nwere ike ịghọ okwu ndị uwe ojii; SMS gị bụ ihe akaebe gị." },
          { objective: "O5", q: "Ugboro ole ka atụmatụ nchekwa kwuru ka ị lelee ndekọ akaụntụ gị?", options: ["Ọ dịghị mgbe", "Otu ugboro n'ọnwa", "Otu ugboro n'afọ ise ọ bụla", "Naanị mgbe ekwentị furu efu"], answer: 1, why: "Ilele kwa ọnwa na-ahụ ịkwụ ụgwọ dị ịtụnanya n'oge." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iji Mobile Money n'Enweghị Nsogbu (M-Pesa, MTN MoMo, Orange Money, Wave)",
    questions: [
      { objective: "O1", q: "Kedu PIN kacha adịghị ike?", options: ["Nọmba anọ a họọrọ n'enweghị usoro", "Nọmba naanị gị maara", "PIN i gbanwere n'oge na-adịbeghị anya", "Afọ a mụrụ gị"], answer: 3, why: "Afọ a mụrụ gị dị mfe ka ndị ọzọ chọta ma kọọ." },
      { objective: "O1", q: "Onye nwere ike ịrịọ PIN mobile money gị n'enweghị nsogbu?", options: ["Ọ dịghị onye", "Ndị na-elekọta ndị ahịa", "Agent e debanyere aha", "Ụlọ akụ gị"], answer: 0, why: "Ọ dịghị onye chọrọ PIN gị; ezi ndị ọrụ na ndị agent anaghị arịọ ya." },
      { objective: "O1", q: "E zuru ekwentị gị. Gịnị bụ nzọụkwụ mbụ?", options: ["Zụta ekwentị ọhụrụ n'ọnwa ọzọ", "Jiri ekwentị ọzọ kpọọ ụlọ ọrụ ahụ ka ha gbochie SIM na akpa ego", "Zitere onye ohi ahụ ozi", "Chere ka ị hụ ma ọ ga-alọghachi"], answer: 1, why: "Igbochi ya ngwa ngwa na-egbochi onye ohi iji akpa ego gị." },
      { objective: "O1", q: "Gịnị mere ị ga-eji tinye mkpọchi ihuenyo na SIM PIN?", options: ["Ime ka ekwentị dị ngwa", "Ibelata ụgwọ ọrụ", "Ka onye ohi ghara inwe ike iji ekwentị ma ọ bụ SIM gị ngwa ngwa", "N'ihi na ndị agent chọrọ ya"], answer: 2, why: "Mkpọchi na-egbu oge onye ọ bụla nwetara ekwentị ma ọ bụ SIM gị." },
      { objective: "O2", q: "Kedu ihe atọ ị na-elele n'ihuenyo nkwenye?", options: ["Oge, ihu igwe na batrị", "Aha, nọmba na ego ole", "Agent, agba na ụbọchị", "Ụgwọ ọrụ, netwọk na signal"], answer: 1, why: "Aha, nọmba na ego ole na-egosi gị na ego ahụ na-aga ebe ziri ezi." },
      { objective: "O2", q: "I chọrọ iziga GHS 50 ma ihuenyo na-egosi GHS 500. Gịnị ka ị ga-eme?", options: ["Kagbuo ya ma tinye ya ọzọ", "Tinye PIN ma rịọ ka e nyeghachi gị ego fọdụrụ", "Zipu ya ma lọghachi ya emesịa", "Tinye ọkara PIN"], answer: 0, why: "Kagbuo ya tupu PIN; idozi ya emesịa siri ike." },
      { objective: "O2", q: "Ozi kwuru na onye na-ere gị ngwaahịa nwere \"nọmba ịkwụ ụgwọ ọhụrụ\". Gịnị ka ị ga-eme?", options: ["Kwụọ nọmba ọhụrụ ahụ ozugbo", "Zigara ndị ahịa ndị ọzọ ya", "Kpọọ onye ahụ na nọmba i nweburu ka i lelee", "Kwụọ nọmba nke ọ bụla ọkara"], answer: 2, why: "Nọmba ịkwụ ụgwọ adịgboroja bụ aghụghọ a na-ahụkarị; lelee ya n'aka onye ahụ na nọmba ị maara." },
      { objective: "O2", q: "N'aka agent, kedu nke enweghị nsogbu?", options: ["Inye agent ekwentị gị na PIN gị", "Ịpụ tupu ị gụọ ego ahụ", "Iji agent na-enweghị akara", "Ịmalite iwepụta ego n'ekwentị gị na ịgụ ego ahụ"], answer: 3, why: "Ị na-achịkwa PIN gị ma lelee ego ahụ tupu ị pụọ." },
      { objective: "O3", q: "N'aghụghọ nlọghachi ego adịgboroja, gịnị na-emekarị?", options: ["Ezi ego bịara na mperi", "SMS adịgboroja sitere na nọmba nkịtị mere ka ego bịara", "Ụlọ ọrụ ahụ mehiere", "Agent ahụ tụfuru ego ahụ"], answer: 1, why: "SMS adịgboroja ahụ dị ka ịkwụ ụgwọ, mana ezi ego dị n'akpa gị na-egosi na ọ dịghị ihe bịara." },
      { objective: "O3", q: "Kedu nke bụ ihe ịdọ aka na ntị nke aghụghọ?", options: ["Ha na-arịọ ụgwọ tupu ha enye onyinye, ọrụ ma ọ bụ mbinye ego", "Ozi ahụ si na short code gọọmentị", "Ego ahụ dabara n'ego dị n'akpa gị", "Gị n'onwe gị malitere ịkwụ ụgwọ ahụ"], answer: 0, why: "Ịkwụ ụgwọ mbụ iji nata ihe bụ ihe ịrịba ama aghụghọ a ma ama." },
      { objective: "O3", q: "Ozi WhatsApp sitere na nọmba ọhụrụ: \"Papa, ekwentị m furu efu, zipu XOF 30,000 na nọmba a ugbu a.\" Gịnị ka ị ga-eme?", options: ["Zipu ya ngwa ngwa", "Zipu ọkara", "Buru ụzọ kpọọ nwa gị na nọmba ochie", "Zaghachi na PIN gị"], answer: 2, why: "Ịkpọ nọmba ochie na-egosi ma ozi ngwa ngwa ahụ ọ bụ eziokwu." },
      { objective: "O3", q: "Olee otu ezi ozi ụlọ ọrụ si abịakarị?", options: ["Site na nọmba ekwentị nkịtị", "Site n'aha gọọmentị ma ọ bụ short code nke ụlọ ọrụ ahụ", "Site na WhatsApp onye ị na-amaghị", "Site na peeji soshal midia na-arịọ PIN gị"], answer: 1, why: "Ụlọ ọrụ na-ezipu site n'aha gọọmentị ma ọ bụ short code; nọmba nkịtị bụ ihe ịdọ aka na ntị." },
      { objective: "O4", q: "Na Kenya, nzọụkwụ Safaricom bipụtara iji rịọ nlọghachi ego e zigara onye na-ezighi ezi bụ:", options: ["Itinye ya na Facebook", "Ịkpọ nọmba ọ bụla dị n'ịntanetị", "Iziga SMS nkwenye ahụ na 456", "Iziga PIN gị na 100"], answer: 2, why: "Iziga nkwenye M-Pesa mbụ ahụ na 456 na-amalite arịrịọ nlọghachi ego (lelee saịtị Safaricom maka nzọụkwụ ugbu a)." },
      { objective: "O4", q: "Kedu ihe ị na-ede mgbe ị na-akọ nsogbu?", options: ["Ụbọchị, oge, ego ole na transaction ID", "PIN gị", "Koodu otu oge gị", "Okwuntughe gị"], answer: 0, why: "Ihe ndị a na-enyere ụlọ ọrụ ahụ aka ịchọta ịkwụ ụgwọ ahụ; ekesala PIN gị ma ọ bụ koodu mgbe ọ bụla." },
      { objective: "O4", q: "Ebee ka ị ga-ahụ nọmba enyemaka gọọmentị nke ụlọ ọrụ gị?", options: ["Okwu e dere n'okpuru post Facebook", "Onye kpọrọ oku sị na ọ bụ onye ọrụ", "Ozi sitere na nọmba nkịtị", "Akpa SIM, weebụsaịtị gọọmentị ma ọ bụ app gọọmentị"], answer: 3, why: "Ebe gọọmentị na-enye ezi nọmba; ndị aghụghọ na-agbasa nọmba adịgboroja." },
      { objective: "O4", q: "Ụlọ ọrụ ahụ edozighị mkpesa gị. Gịnị ọzọ ka ị nwere ike iji?", options: ["Onye ị na-amaghị na-ana ụgwọ ịchọta ego", "Usoro mkpesa ndị ahịa nke ụlọ akụ etiti", "Ọ dịghị ihe ọzọ", "PIN ọhụrụ maka onye nke ọzọ"], answer: 1, why: "Ụlọ akụ etiti dị ka CBN na Bank of Ghana nwere usoro mkpesa." },
      { objective: "O5", q: "Kedu nke kwesịrị ịdị n'atụmatụ nchekwa mobile money gị?", options: ["PIN gị e dere n'ozuzu ya", "Koodu otu oge gị", "Ụzọ gọọmentị nke ụlọ ọrụ gị maka ịkọ aghụghọ", "PIN onye agbata obi gị"], answer: 2, why: "Atụmatụ ahụ na-edepụta iwu na ụzọ gọọmentị, ọ bụghị nọmba nzuzo mgbe ọ bụla." },
      { objective: "O5", q: "Gịnị mere ị ga-eji debe atụmatụ nchekwa n'akwụkwọ n'ụlọ?", options: ["Ka ezinụlọ nwee ike iji ya ọbụlagodi ma ekwentị furu efu", "N'ihi na ekwentị enweghị ike ichekwa ndetu", "Iji gosi ndị agent", "Itinye ya n'ịntanetị"], answer: 0, why: "Ọ bụrụ na e zuru ekwentị, atụmatụ dị n'akwụkwọ ka na-agwa gị ihe ị ga-eme." },
      { objective: "O5", q: "Onye ka ị ga-eso gụọ atụmatụ nchekwa ahụ?", options: ["Ndị ị na-amaghị n'ahịa", "Onye kpọrọ oku sị na ọ si n'ụlọ ọrụ ahụ", "Ọ dịghị onye", "Ndị ezinụlọ dị ka ndị nne na nna mere agadi na ụmụaka iri na ụma"], answer: 3, why: "A na-achụkarị ndị ezinụlọ; ikesa atụmatụ ahụ na-echebekwa ha." },
      { objective: "O5", q: "Ebee ka ị na-agụ ezi ụgwọ ọrụ maka azụmahịa?", options: ["Ozi WhatsApp e zigaghachiri", "Tariff gọọmentị, app ma ọ bụ akwụkwọ dị n'ụlọ ahịa ụlọ ọrụ ahụ", "Ihe enyi gị chere", "Okwu e dere na soshal midia"], answer: 1, why: "Ụgwọ ọrụ dị iche site na mba ruo mba ma na-agbanwe; ụzọ gọọmentị na-egosi ụgwọ ugbu a." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Iwu PIN na ekwentị", objective: "O1", notYet: "Enweghị iwu PIN, ma ọ bụ atụmatụ ahụ nwere ezi PIN ma ọ bụ koodu.", meets: "Ọ na-ekwu: PIN siri ike ịkọ, mkpọchi ihuenyo, ekesala PIN ma ọ bụ koodu mgbe ọ bụla, gbochie ya ozugbo ma ekwentị furu efu.", exceeds: "Ọ gụnyekwara SIM PIN na ihe ị ga-eme ma ahịrị nwụọ na mberede (o nwere ike ịbụ SIM swap)." },
      { name: "Ilele aha", objective: "O2", notYet: "Enweghị nzọụkwụ ilele tupu PIN.", meets: "Ọ na-ekwu ka i lelee aha, nọmba na ego ole n'ihuenyo nkwenye ma debe SMS nkwenye.", exceeds: "Ọ na-agbakwụnye iwere till ma ọ bụ koodu merchant naanị n'ụlọ ahịa ahụ n'onwe ya na ịkpọghachi na nọmba a maara maka nọmba ịkwụ ụgwọ \"ọhụrụ\"." },
      { name: "Ihe ịdọ aka na ntị nke aghụghọ", objective: "O3", notYet: "Ihe ịrịba ama aghụghọ erughị anọ, ma ọ bụ ndị edoghị anya.", meets: "Ọ na-edepụta aghụghọ isii a na-ahụkarị na ihe ịdọ aka na ntị maka nke ọ bụla.", exceeds: "Ọ na-agbakwụnye ezi ọmụmaatụ onye na-amụ ihe ma ọ bụ ezinụlọ ya hụrụ na otu ha si mata ya." },
      { name: "Ụzọ gọọmentị na awa mbụ", objective: "O4", notYet: "Nọmba enyemaka adịghị ya, ma ọ bụ e detuuru ha site n'ebe na-abụghị nke gọọmentị.", meets: "Ọ na-enye ụzọ enyemaka, nlọghachi ego na ịkọ aghụghọ gọọmentị nke ụlọ ọrụ ahụ (site na weebụsaịtị, app ma ọ bụ akpa SIM) na nzọụkwụ awa mbụ.", exceeds: "Ọ na-akpọkwa aha ụzọ mkpesa ụlọ akụ etiti na nzọụkwụ ndị uwe ojii, ma kwuo ebe e detuuru ụzọ ọ bụla." },
      { name: "Ilele kwa ọnwa na ikesa", objective: "O5", notYet: "Enweghị ilele mgbe niile, a kesaghịkwa atụmatụ ahụ.", meets: "Ọ na-ahazi ilele ndekọ akaụntụ kwa ọnwa, e soro otu onye ezinụlọ gụọ atụmatụ ahụ.", exceeds: "Ọ gụnyere iwu ezinụlọ ịkpọghachi na ilele mbụ e meelarị ma dee ụbọchị ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru, mgbe ụbọchị 30 gachara, na ha na-elele aha tupu PIN ọ bụla ma na-agụ ndekọ akaụntụ ha kwa ọnwa",
      "Ndị na-amụ ihe kwuru na ha matara ma jụ oku ma ọ bụ ozi aghụghọ n'ime ụbọchị 30",
      "Mbelata n'ego mobile money furu efu nke ndị otu nchekwa ego, otu ndị ahịa ma ọ bụ otu obodo mmekọ kọrọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nwere akaụntụ mobile money (ekwentị nkịtị ma ọ bụ smartphone)",
      "Tebụl ụgwọ ọrụ gọọmentị na ụzọ enyemaka nke ụlọ ọrụ ahụ (weebụsaịtị, app, akwụkwọ dị n'ụlọ ahịa ma ọ bụ akpa SIM)",
      "Akwụkwọ na mkpịsị ode maka atụmatụ nchekwa",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Ọ dị mma maka otu ndị ahịa, otu nchekwa ego, ụka, ụlọ alakụba, otu ndị ntorobịa na otu ụmụnwaanyị: meenụ ule mbido ọnụ, ma mee otu isi n'otu nzukọ.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha tinye ma ọ bụ kwuo ezi PIN ma ọ bụ koodu n'omume. Gosi menu n'ekwentị ngosi ma ọ bụ site n'ise ihuenyo ndị ahụ.",
      "Tupu nnọkọ ahụ, chọọ nzọụkwụ gọọmentị maka nlọghachi ego na ịkọ aghụghọ nke ụlọ ọrụ ndị otu gị na-eji na mba gị, site na weebụsaịtị ma ọ bụ ụlọ ahịa ụlọ ọrụ ndị ahụ n'onwe ha, ma lelee na ha ka dị ugbu a.",
      "Kpọọ ndị otu ka ha kesaa ozi aghụghọ ha natara (e zoro nọmba onwe ha) ma hazie ha site n'ihe ịdọ aka na ntị.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ; anakọtala atụmatụ ndị ahụ mgbe ọ bụla ma ọ bụrụ na ndị na-amụ ihe tinyere ozi gbasara onwe ha."
    ]
  }
};
