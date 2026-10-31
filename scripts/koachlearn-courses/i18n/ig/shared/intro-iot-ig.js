"use strict";

// Koach Learn course (Igbo translation of shared/intro-iot.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FTC = { name: "FTC Consumer Advice: Ichebe ngwaọrụ jikọrọ na ịntanetị n'ụlọ gị", url: "https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home" };
const CISA = { name: "CISA: Secure Our World (Chebe ụwa anyị)", url: "https://www.cisa.gov/secure-our-world" };
const WOKWI = { name: "Wokwi: igwe nṅomi ngwa eletrọnịkị n'ịntanetị", url: "https://wokwi.com/" };

module.exports = {
  id: "intro-iot-ig",
  lang: "ig",
  translationOf: "intro-iot",
  category: "Veterans (military)",
  name: "Mmalite Internet of Things (IoT)",
  skills: "Ịkọwa otu usoro IoT si arụ ọrụ, Ịhọrọ sensọ na actuator, Ịtụnyere ụzọ ngwaọrụ si ejikọ, Ide iwu mkpu dị mfe, Ichebe ngwaọrụ jikọrọ ọnụ, Ịhazi ọrụ IoT",
  outcome: "ịhazi obere ọrụ nlekọta IoT site na sensọ ruo mkpu: ịhọrọ sensọ, ngwaọrụ, njikọ na app, ide iwu mkpu ahụ dị ka obere koodu, na ide nzọụkwụ ndị na-echebe ngwaọrụ ndị ahụ.",
  about: [
    "Internet of Things (IoT) bụ ihe ndị a na-eji kwa ụbọchị nwere sensọ na njikọ ịntanetị: thermostat nwere ọgụgụ isi, igwefoto dị n'ọnụ ụzọ, ihe na-agụ nzọụkwụ, sensọ ala n'ugbo, na ihe nchọpụta ebe (tracker) dị n'ụgbọala na igbe mbupu. A na-eji nka IoT n'ọrụ ụlọ na ngwa ọrụ, mbugharị ngwaahịa, ike ọkụ, ọrụ ugbo na nchekwa, ọtụtụ ndị agha ochie (veterans) maralarịkwa echiche ndị a site na sensọ, redio na nlekọta ngwa ọrụ.",
    "Ihe ọmụmụ a na-akọwa otu usoro IoT si arụ ọrụ, otu ọkwa n'otu oge, otu ngwaọrụ si akparịta ụka, otu iwu dị mfe si eme ka ihe a gụrụ ghọọ omume, na otu esi egbochi ngwaọrụ jikọrọ ọnụ ka ha ghara ịbụ ụzọ ndị omekome ga-esi abanye. Ọ dịghị mkpa ka ị zụta ngwa ọ bụla. Otu nkuzi na-egosi otu esi anwale ngwaọrụ e ṅomiri n'ime web browser gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ a."
  ],
  finalTask: "Dee atụmatụ peeji otu maka ọrụ nlekọta IoT, dị ka mkpu okpomọkụ maka ọnụ ụlọ server, friza n'ebe a na-enye nri n'efu (food pantry), ma ọ bụ ubi chọrọ mmiri: kpọọ aha sensọ, ngwaọrụ, otu o si ejikọ na ebe data na-aga, see ụzọ data si na sensọ ruo mkpu, dee iwu mkpu ahụ dị ka obere if-statement na Python, ma depụta nzọụkwụ ise ị ga-eme iji chebe ngwaọrụ ndị ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha ochie (veterans) na ndị agha na-apụ n'ọrụ agha na-achọ ọrụ teknụzụ dị ka enyemaka IT, teknụzụ ụlọ na ngwa ọrụ, nchọpụta mbugharị ngwaahịa ma ọ bụ nchekwa kọmputa (cybersecurity). Ọtụtụ n'ime ha jiri redio, sensọ, ụgbọala ma ọ bụ ngwa ọrụ rụọ ọrụ n'ọrụ agha.",
    startingPoint: "Ha nwere ike ịgbaso usoro, iji kọmputa na smartphone, ọtụtụ ma kwa nlele ngwa ọrụ na nkwurịta okwu. Ọtụtụ edebeghị koodu mgbe ọ bụla ma ọ bụ hazie ngwaọrụ jikọrọ ọnụ.",
    gap: "Ndị were mmadụ n'ọrụ n'ụlọ na ngwa ọrụ, mbugharị ngwaahịa, ụlọ nrụpụta na IT na-eji sensọ jikọrọ ọnụ karịa ka oge na-aga, ma na-atụ anya ka ndị ọrụ ghọta otu ha si arụ ọrụ, otu esi edozi mkpu dị mfe na otu esi echebe ha. Ndị na-amụ ihe kwesịrị ịhazi obere ọrụ nlekọta site na mmalite ruo njedebe iji gosi nka a, ma tụgharịa ahụmahụ agha ha gaa n'ọrụ teknụzụ nkịtị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu teknụzụ na nke mbụ",
      "Ngwaọrụ: kọmputa nwere web browser maka igwe nṅomi ahụ; ọ dịghị mkpa ịzụta ngwa",
      "Oge: nkuzi nkeji 5, ihe dị ka nkeji 60 n'ozuzu",
      "Ihe igwe nṅomi na-enye na akaụntụ ya nwere ike ịgbanwe; ndị na-amụ ihe na-elele iwu saịtị ahụ ugbu a",
      "Netwọk ọrụ: ejikọla ngwaọrụ ọ bụla n'enweghị nkwado ndị IT ma ọ bụ ndị nchekwa"
    ],
    prerequisites: "Ọ dịghị. Ihe ọmụmụ mbụ na Python na-enyere aka mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọmụmaatụ site n'ụlọ, ọrụ na mpaghara ọrụ", action: "ịmata ngwaọrụ IoT ma kọwaa uru na ihe egwu nke ọ bụla", standard: "na-akpọ aha opekata mpe ngwaọrụ atọ n'ụzọ ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ IoT dị ka mkpu friza", action: "ịgbaso data site na sensọ gafee ngwaọrụ na njikọ ruo cloud na omume ahụ", standard: "na-akpọ aha ọkwa anọ ahụ niile n'usoro ziri ezi" },
    { id: "O3", condition: "Mgbe e nyere gị ebe ngwaọrụ dị, ike ọkụ ya na otu data ọ na-ezipu si buo", action: "ịhọrọ njikọ dabara adaba ma kọwaa otu protocol dị ka MQTT si ebu ozi ya", standard: "ya na ihe kpatara ya dabara n'ogologo ebe, ike ọkụ na data" },
    { id: "O4", condition: "Mgbe e nyere gị ihe sensọ gụrụ na oke dị mma", action: "ide iwu mkpu dị ka if-statement na Python nke na-egbochi mkpu ụgha", standard: "nke mere na iwu ahụ na-enye azịza ziri ezi maka ihe nnwale a gụrụ" },
    { id: "O5", condition: "Site n'iji igwe nṅomi n'efu n'ịntanetị", action: "ịgba microcontroller e ṅomiri nwere sensọ okpomọkụ ma nwalee iwu mkpu gị", standard: "na-ahụ mkpu ahụ ka ọ na-ada mgbe ị gbanwere ihe a gụrụ" },
    { id: "O6", condition: "Maka ngwaọrụ jikọrọ ọnụ ọ bụla dị n'atụmatụ gị", action: "ide nzọụkwụ ndị na-echebe ngwaọrụ ndị ahụ", standard: "ya na opekata mpe nzọụkwụ ise ziri ezi" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu usoro IoT si arụ ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe Internet of Things bụ",
          minutes: 4,
          goal: "Kọwaa IoT ma chọpụta ngwaọrụ IoT gbara gị gburugburu.",
          text: [
            "Internet of Things (IoT) pụtara ihe ndị a na-emetụ aka nke na-achọpụta ihe na-eme n'ụwa, na-ejikọ na netwọk ma na-ekesa data, ọtụtụ mgbe n'enweghị onye na-ede ihe ọ bụla. Thermostat nwere ọgụgụ isi na-atụ okpomọkụ ọnụ ụlọ ma gbanye ọkụ. Ihe na-agụ nzọụkwụ na-agụ nzọụkwụ gị ma ziga ha n'ekwentị gị.",
            "A na-eji IoT n'ụlọ (igwefoto ọnụ ụzọ, plọg nwere ọgụgụ isi, igwe okwu olu), n'ọrụ (igwe na-akọ mgbe ha chọrọ mmezi, a na-akpọ predictive maintenance), na mbugharị ngwaahịa (GPS tracker n'ụgbọala na igbe mbupu), n'ọrụ ugbo (sensọ mmiri dị n'ala), n'ahụike (ihe na-atụ ọkụkụ obi) na n'obodo (ọkụ okporo ụzọ nwere ọgụgụ isi).",
            "Uru ya dị n'ihe data ahụ na-enyere gị aka ime: ịhụ nsogbu n'oge, ichekwa ike ọkụ, ma ọ bụ ime ihe site n'ebe dị anya. Ihe egwu ya bụ na ngwaọrụ ọ bụla jikọrọ ọnụ bụ otu ihe ọzọ a pụrụ ịgbaba (hack) ma ọ bụ nke nwere ike ikpughe ozi nzuzo, ya mere nchekwa bụ akụkụ nke ọrụ IoT ọ bụla."
          ],
          words: [["Internet of Things (IoT)", "ihe a na-emetụ aka nwere sensọ na njikọ netwọk nke na-ekesa data."], ["Ngwaọrụ nwere ọgụgụ isi (smart device)", "ihe a na-eji kwa ụbọchị nke nwere ike ijikọ ma mee ihe site na data."], ["Predictive maintenance", "iji data sensọ edozi igwe tupu ọ mebie."]],
          slides: [
            { title: "IoT bụ", bullets: ["Ihe a na-emetụ aka na-achọpụta ihe na-eme n'ụwa", "Jikọrọ na netwọk", "Na-ekesa data, ọtụtụ mgbe n'onwe ha"] },
            { title: "Ebe ị na-ahụ ya", bullets: ["Ụlọ: igwefoto ọnụ ụzọ, plọg nwere ọgụgụ isi, igwe okwu", "Ọrụ: igwe na-akọ nsogbu", "Mbugharị ngwaahịa, ọrụ ugbo, ahụike, obodo"] },
            { title: "Uru na ihe egwu", bullets: ["Ịhụ nsogbu n'oge, ichekwa ike ọkụ", "Ime ihe site n'ebe dị anya", "Ngwaọrụ ọ bụla nwere ike ịbụ ụzọ e si abanye"] }
          ],
          tryIt: "Gagharịa n'ụlọ gị, ebe ọrụ gị ma ọ bụ ụlọ ahịa, ma depụta ngwaọrụ ise jikọrọ ọnụ ị hụrụ ma ọ bụ na-eji. Maka nke ọ bụla, dee ihe ọ na-achọpụta na ihe ọ na-eji data ahụ eme.",
          youCanNow: "ịkọwa ihe IoT bụ ma kpọọ aha ngwaọrụ IoT na ndụ kwa ụbọchị na n'ọrụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị na-eme ka ngwaọrụ bụrụ akụkụ nke Internet of Things?", options: ["O nwere ihuenyo buru ibu", "Ọ dị oke ọnụ karịa ngwaọrụ nkịtị", "Ọ na-achọpụta ihe, na-ejikọ na netwọk ma na-ekesa data", "Ọ na-arụ ọrụ naanị na keyboard"], answer: 2, why: "Ngwaọrụ IoT na-achọpụta ihe na-eme n'ụwa, na-ejikọ ma na-ekesa data, ọtụtụ mgbe n'enweghị onye na-ede ihe." },
            { objective: "O1", q: "Ebe ụgbọala ndị agha gị (motor pool) chọrọ ka ụgbọala na-akọ nsogbu tupu ha emebie. Gịnị ka a na-akpọ ụdị iji IoT a?", options: ["Predictive maintenance", "Edge computing", "Guest network", "Firmware"], answer: 0, why: "Igwe na-akọ mgbe ha chọrọ mmezi tupu ha emebie bụ predictive maintenance." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ọkwa anọ: sensọ, ngwaọrụ, njikọ na cloud",
          minutes: 5,
          goal: "Gbasoo data n'usoro IoT site na sensọ ruo omume.",
          text: [
            "Ọtụtụ usoro IoT nwere ọkwa anọ. 1) Sensọ na-atụ ihe: okpomọkụ, mmegharị, ìhè, ebe ihe dị, mmiri. 2) Ngwaọrụ (ọtụtụ mgbe obere kọmputa dị ọnụ ala a na-akpọ microcontroller, dị ka ESP32 ma ọ bụ Arduino) na-agụ sensọ ahụ ma ziga data. 3) Njikọ na-ebu data ahụ: Wi-Fi, Bluetooth, netwọk ekwentị (cellular) ma ọ bụ redio na-eru ebe dị anya. 4) Ọrụ cloud ma ọ bụ app na-echekwa data ahụ, na-egosi ya na dashboard ma na-ezipu mkpu.",
            "Ụfọdụ ngwaọrụ nwekwara actuator: akụkụ na-eme ihe n'ezi ụwa, dị ka moto na-emeghe valvụ, relay na-agbanye fan, ma ọ bụ buzzer.",
            "Mgbe ụfọdụ, ngwaọrụ ahụ n'onwe ya na-eme mkpebi kama ichere cloud. Nke a bụ edge computing. Ọ na-adị ngwa karị, na-arụ ọrụ mgbe ịntanetị adịghị, ma na-ezipu obere data."
          ],
          steps: ["Kpọọ aha ihe a na-atụ (sensọ).", "Kpọọ aha ngwaọrụ na-agụ ya.", "Kpọọ aha otu data si aga (njikọ).", "Kpọọ aha ebe ọ na-aga na onye na-ahụ ya (cloud, app, dashboard).", "Kpọọ aha omume ahụ, nke mmadụ ma ọ bụ actuator na-eme."],
          words: [["Sensọ", "akụkụ na-atụ ihe n'ezi ụwa."], ["Microcontroller", "obere kọmputa dị ọnụ ala dị n'otu chip, na-agba otu mmemme."], ["Actuator", "akụkụ na-eme ihe n'ezi ụwa, dị ka moto, relay ma ọ bụ buzzer."], ["Dashboard", "ihuenyo na-egosi data ugbu a na chaatị na nọmba."], ["Edge computing", "ịrụ ọrụ na data n'ime ngwaọrụ ahụ ma ọ bụ n'akụkụ ya kama na cloud."]],
          slides: [
            { title: "Ọkwa anọ ahụ", bullets: ["1. Sensọ na-atụ", "2. Ngwaọrụ na-agụ ma na-ezipu", "3. Njikọ na-ebu", "4. Cloud ma ọ bụ app na-echekwa, na-egosi, na-ezipu mkpu"] },
            { title: "Actuator na-eme ihe", bullets: ["Moto na-emeghe valvụ", "Relay na-agbanye fan", "Buzzer na-eme mkpu"] },
            { title: "Edge computing", bullets: ["Mee mkpebi n'ime ngwaọrụ ahụ n'onwe ya", "Ọ dị ngwa karị, na-arụ ọrụ n'enweghị ịntanetị", "Na-ezipu obere data"] }
          ],
          tryIt: "Họrọ otu ngwaọrụ site na ndepụta gị na Nkuzi 1. See igbe maka ọkwa anọ ya (sensọ, ngwaọrụ, njikọ, cloud ma ọ bụ app) ya na akụ (arrow) n'etiti ha, ma tinye omume ahụ na njedebe.",
          youCanNow: "ịgbaso data gafee ọkwa anọ nke usoro IoT ma kpọọ aha sensọ na actuator.",
          quickCheck: [
            { objective: "O2", q: "N'usoro IoT, gịnị bụ ọrụ microcontroller?", options: ["Ịtụ okpomọkụ n'onwe ya", "Ichekwa data na cloud", "Ịgbanye fan", "Ịgụ sensọ ahụ ma ziga data ahụ"], answer: 3, why: "Ngwaọrụ ahụ, ọtụtụ mgbe microcontroller, na-agụ sensọ ahụ ma ziga data ahụ n'ihu." },
            { objective: "O2", q: "Sensọ ọnụ ụzọ ama dị n'ebe dị anya ga-arụrịrị ọrụ mgbe ịntanetị kwụsịrị. Kedu nhazi na-enyere aka?", options: ["Ziga ihe ọ bụla a gụrụ na cloud mbụ", "Hapụ ngwaọrụ ahụ ka o mee mkpebi n'onwe ya (edge computing)", "Jiri ihuenyo buru ibu", "Wepụ sensọ ahụ"], answer: 1, why: "Edge computing na-ekwe ka ngwaọrụ ahụ mee mkpebi n'onwe ya, ya mere ọ na-arụ ọrụ n'enweghị ịntanetị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Otu ngwaọrụ si ejikọ ma na-akparịta ụka",
          minutes: 5,
          goal: "Họrọ njikọ dabara adaba maka ngwaọrụ IoT.",
          text: [
            "Ọ dịghị otu njikọ kacha mma; nke ọ bụla na-atụnyere ogologo ebe ọ na-eru, ike ọkụ na data. Wi-Fi dị ngwa ma a na-ahụkarị ya n'ụlọ na n'ọrụ, mana ọ na-eri ọtụtụ ike ọkụ. Bluetooth Low Energy (BLE) na-eri obere ike ọkụ ma ọ na-eru naanị ebe dị nso, ọ dị mma maka ihe a na-eyi n'ahụ na ekwentị. Netwọk ekwentị (cellular: 4G, 5G na ụdị ndị na-eri obere ike ọkụ) na-arụ ọrụ fọrọ nke nta n'ebe ọ bụla nwere signal, ọ dị mma maka ụgbọala na ebe dị anya, mana ọ chọrọ data plan. LoRaWAN bụ redio na-eri obere ike ọkụ, na-eru ebe dị anya, maka obere data, a na-eji ya maka sensọ ugbo na obodo.",
            "Ngwaọrụ chọkwara asụsụ ha niile ghọtara, a na-akpọ protocol, iji ziga ozi. MQTT bụ protocol dị mfe a ma ama: ngwaọrụ na-ebipụta (publish) ihe ọ gụrụ n'otu isiokwu (topic), dị ka pantry/freezer/temp, app ọ bụla debanyere aha n'isiokwu ahụ (subscribe) na-anata ya. HTTP, otu protocol ahụ weebụsaịtị na-eji, a na-ahụkwa ya nke ukwuu.",
            "Ngwaọrụ na-eji batrị na-echekwa ike ọkụ site n'ịrahụ ụra ọtụtụ oge ma na-eteta naanị ịgụ na iziga."
          ],
          steps: ["Ole ebe data ahụ ga-aga?", "Enwere ọkụ eletrik, ka ọ bụ naanị batrị?", "Ole data, na ugboro ole?", "Enwere Wi-Fi ma ọ bụ signal ekwentị n'ebe ọ ga-anọ?", "Họrọ njikọ dabara azịza anọ ahụ niile."],
          words: [["Wi-Fi", "netwọk na-enweghị waya dị ngwa maka ụlọ na ọfịs; ọ na-eri ike ọkụ karị."], ["Bluetooth Low Energy (BLE)", "njikọ na-enweghị waya na-eri obere ike ọkụ, na-eru naanị ebe dị nso."], ["Cellular", "njikọ site na netwọk ekwentị."], ["LoRaWAN", "netwọk redio na-eru ebe dị anya, na-eri obere ike ọkụ, maka obere data."], ["Protocol", "iwu a kwekọrịtara maka iziga ozi."], ["MQTT", "protocol ozi dị mfe ebe ngwaọrụ na-ebipụta n'isiokwu, app na-edebanyekwa aha na ha."]],
          slides: [
            { title: "Họrọ site n'ogologo ebe, ike ọkụ na data", bullets: ["Wi-Fi: dị ngwa, na-eri ike ọkụ karị", "BLE: obere ike ọkụ, ebe dị nso", "Cellular: fọrọ nke nta ebe niile, chọrọ data plan", "LoRaWAN: ebe dị anya, obere data"] },
            { title: "Protocol", bullets: ["MQTT: bipụta n'isiokwu, app na-edebanye aha", "Ọmụmaatụ isiokwu: pantry/freezer/temp", "HTTP: asụsụ weebụsaịtị"] },
            { title: "Chekwaa batrị", bullets: ["Rahụ ụra ọtụtụ oge", "Teta, gụọ, ziga, rahụkwa ụra"] }
          ],
          tryIt: "Họrọ njikọ kacha mma maka nke ọ bụla ma dee otu ihe kpatara ya: ihe na-agụ nzọụkwụ dị n'aka gị, sensọ ala n'ubi dị 5 km site n'ụlọ ọ bụla, GPS tracker n'ụgbọala na-ebuga ngwaahịa, na plọg nwere ọgụgụ isi n'ime ime ụlọ.",
          youCanNow: "ịhọrọ njikọ dabara adaba ma kọwaa otu ngwaọrụ IoT si ezipu ozi.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ MQTT?", options: ["Protocol dị mfe ebe ngwaọrụ na-ebipụta ihe ha gụrụ n'isiokwu", "Ụdị batrị", "Redio na-eru ebe dị anya", "Aha ụdị sensọ"], answer: 0, why: "MQTT bụ protocol dị mfe: ngwaọrụ na-ebipụta n'isiokwu, app debanyere aha na-anata ya." },
            { objective: "O3", q: "Sensọ batrị dị n'ogige nchekwa ihe na-enweghị Wi-Fi na-ezipu otu obere ihe ọ gụrụ kwa elekere. Kedu nke ị ga-ahọrọ?", options: ["Wi-Fi", "Bluetooth Low Energy", "LoRaWAN", "Keyboard nwere waya"], answer: 2, why: "LoRaWAN na-eri obere ike ọkụ ma na-eru ebe dị anya maka obere data." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu usoro IoT si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ngwaọrụ IoT?", options: ["Kalịnda akwụkwọ", "Map e biri ebi", "Thermostat nwere ọgụgụ isi na-edozi okpomọkụ n'onwe ya", "Oche osisi"], answer: 2, why: "Ọ na-achọpụta ihe, na-ejikọ ma na-eme ihe site na data." },
          { objective: "O2", q: "N'usoro IoT, gịnị ka sensọ na-eme?", options: ["Ọ na-atụ ihe n'ezi ụwa", "Ọ na-echekwa data na cloud", "Ọ na-akwụ ụgwọ ịntanetị", "Ọ na-egosi dashboard"], answer: 0, why: "Sensọ na-atụ ihe dị ka okpomọkụ ma ọ bụ mmegharị." },
          { objective: "O2", q: "Relay na-agbanye fan bụ:", options: ["Sensọ", "Protocol", "Dashboard", "Actuator"], answer: 3, why: "Actuator na-eme ihe n'ụwa a na-emetụ aka." },
          { objective: "O3", q: "Sensọ ala dị n'ubi dị anya site na Wi-Fi ma na-eji batrị. Kedu njikọ kacha dabara?", options: ["Wi-Fi", "LoRaWAN", "Waya USB", "Bluetooth gaa n'ekwentị dị n'akpa gị"], answer: 1, why: "LoRaWAN na-eru ebe dị anya ma na-eri obere ike ọkụ maka obere data." },
          { objective: "O3", q: "Na MQTT, kedu otu app si enweta ihe friza gụrụ?", options: ["Ọ na-akpọ friza ahụ n'ekwentị", "Ọ na-edebanye aha n'isiokwu friza ahụ na-ebipụta na ya", "Ọ na-ebipụta ha n'akwụkwọ", "Ọ na-eche ha"], answer: 1, why: "App MQTT na-edebanye aha n'isiokwu ngwaọrụ na-ebipụta na ya." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu na ichebe ọrụ IoT",
      lessons: [
        {
          objectives: ["O4"],
          title: "Site n'ihe a gụrụ ruo omume: ide iwu mkpu",
          minutes: 6,
          goal: "Dee iwu dị mfe na Python nke na-eme ka ihe sensọ gụrụ ghọọ mkpu.",
          text: [
            "Obi ọtụtụ ọrụ IoT bụ iwu: ọ bụrụ na ihe a gụrụ gafere oke, mee ihe. Ọ bụrụ na friza ebe a na-enye nri ekpo ọkụ karịa -15 degrees C ruo nkeji 10, ziga onye njikwa ozi. Ọ bụrụ na mmiri dị n'ala daa n'okpuru 30 pasent, meghee valvụ mmiri.",
            "Na Python, iwu bụ if-statement. Dịka ọmụmaatụ: temp = 28.5, wee if temp > 27: print(\"ALERT: server closet too hot\") else: print(\"OK\"). N'ezi ngwaọrụ, ihe a gụrụ na-esi na sensọ, omume ahụ nwere ike ịbụ ịgbanye LED, ịgbanye relay ma ọ bụ iziga ozi.",
            "Iwu dị mma na-egbochi mkpu ụgha. Otu mbili nwere ike ịbụ ọnụ ụzọ e meghere nwa oge, ya mere ọtụtụ usoro na-echere ọtụtụ ihe a gụrụ n'usoro tupu ha eme mkpu. Họrọ oke ahụ ya na ndị maara ngwa ọrụ ahụ, ma kpebie onye ga-anata mkpu ahụ na ihe ọ ga-eme."
          ],
          steps: ["Kpebie ihe ị na-atụ na oke ya dị mma.", "Họrọ oke na-egosi nsogbu.", "Dee ya dị ka if reading > limit: (ma ọ bụ < limit).", "Kpebie omume ahụ: ozi, ìhè ma ọ bụ relay.", "Tinye iwu na-egbochi mkpu ụgha, dị ka ọtụtụ ihe a gụrụ n'usoro."],
          words: [["Iwu (rule)", "ntụziaka ọ bụrụ na-wee: ọ bụrụ na nke a mee, mee nke ahụ."], ["Threshold", "oke na-akpalite omume."], ["Mkpu ụgha (false alarm)", "mkpu mgbe ọ dịghị ihe na-adịghị mma n'ezie."], ["Ihe a gụrụ (reading)", "otu ntụ sitere na sensọ."]],
          slides: [
            { title: "IoT na-arụ ọrụ site n'iwu", bullets: ["Ọ bụrụ na ihe a gụrụ gafere oke", "Mee ihe", "Friza ekpoo ọkụ nke ukwuu: ziga onye njikwa ozi"] },
            { title: "Iwu na Python", bullets: ["if temp > 27:", "    print(\"ALERT: too hot\")", "else: print(\"OK\")"] },
            { title: "Gbochie mkpu ụgha", bullets: ["Chere ọtụtụ ihe a gụrụ n'usoro", "Họrọ oke ya na ndị ọkachamara", "Kpebie onye ga-eme ihe, na otu o si eme ya"] }
          ],
          tryIt: "Meghee Google Colab (colab.research.google.com) ma ọ bụ ebe ọ bụla a na-ede Python. Mee ndepụta ihe okpomọkụ isii a gụrụ, dị ka [22, 23, 29, 30, 31, 24]. Gafee ha otu otu ma bipụta \"ALERT\" maka nke ọ bụla karịrị 27 na \"OK\" maka ndị fọdụrụ. Ihe mgbakwunye: mee mkpu naanị mgbe ihe abụọ a gụrụ n'usoro karịrị 27.",
          youCanNow: "ide iwu mkpu dị mfe na Python nke na-eme ka ihe sensọ gụrụ ghọọ omume.",
          quickCheck: [
            { objective: "O4", q: "Iwu ahụ bụ: if temp > 27: print(\"ALERT\"). Ihe a gụrụ bụ 25. Gịnị ka ọ na-ebipụta?", options: ["ALERT", "Ọ dịghị ihe", "Njehie (error)", "27"], answer: 1, why: "25 akaghị 27, ya mere if-statement ahụ anaghị arụ ọrụ." },
            { objective: "O4", q: "Mkpu ọnụ ụlọ server na-ada mgbe ọ bụla e meghere ọnụ ụzọ nwa sekọnd. Gịnị ka ị ga-agbanwe?", options: ["Gbanyụọ mkpu ahụ kpamkpam", "Bulie oke ahụ ruo 100 degrees", "Wepụ sensọ ahụ", "Mee mkpu naanị mgbe ọtụtụ ihe a gụrụ n'usoro dị elu"], answer: 3, why: "Ichere ọtụtụ ihe a gụrụ n'usoro na-akwụsị mkpu ụgha sitere na mbili nwa oge." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịnwale ngwaọrụ e ṅomiri n'ime browser gị",
          minutes: 6,
          goal: "Gbaa microcontroller e ṅomiri nwere sensọ ma hụ ka ihe a gụrụ na-agbanwe.",
          text: [
            "Ị nwere ike ime omume IoT n'azụtaghị akụkụ ọ bụla. Igwe nṅomi (simulator) n'ịntanetị dị ka Wokwi na-ekwe ka ị tinye bọọdụ e ṅomiri dị ka ESP32, tinye sensọ dị ka DHT22 na-atụ okpomọkụ na iru mmiri n'ikuku, ma gbaa koodu n'ime web browser gị. Lelee saịtị ahụ maka ihe ndị dị n'efu na ma ị chọrọ akaụntụ.",
            "Ụzọ kacha mfe ịmalite bụ imeghe otu n'ime ọrụ ọmụmaatụ igwe nṅomi ahụ dị njikere maka ESP32 nwere DHT22, wee gụọ koodu ahụ ma gbaa ya. Na MicroPython, ụdị Python maka obere ngwaọrụ, ahịrị ndị bụ isi dị otu a: sensor = dht.DHT22(machine.Pin(15)), wee sensor.measure() na t = sensor.temperature(). Nọmba pin ahụ ga-adabarịrị pin e jikọrọ sensọ ahụ na ya na eserese ahụ.",
            "Mgbe nṅomi ahụ na-agba, ị nwere ike ịpị sensọ e ṅomiri ahụ ma gbanwee okpomọkụ ya, wee lee ihe a gụrụ ị bipụtara na iwu mkpu gị ka ha na-aza. Ọ bụ kpọmkwem otu a ka esi anwale ezi ngwaọrụ tupu etinye ya."
          ],
          steps: ["Meghee weebụsaịtị igwe nṅomi ahụ na browser gị.", "Chọta ọrụ ọmụmaatụ maka ESP32 nwere sensọ DHT22.", "Gụọ koodu ahụ: chọta ebe ọ na-agụ sensọ na ebe ọ na-ebipụta.", "Malite nṅomi ahụ ma lee ihe a na-agụ.", "Gbanwee okpomọkụ sensọ e ṅomiri ahụ ma tinye iwu mkpu gị site na Nkuzi 4."],
          words: [["Igwe nṅomi (simulator)", "sọftwia na-eme ka ezi ngwa ka i wee nwalee n'azụtaghị ya."], ["ESP32", "microcontroller dị ọnụ ala nwere Wi-Fi na Bluetooth n'ime ya."], ["DHT22", "sensọ a na-ahụkarị, dị ọnụ ala, na-atụ okpomọkụ na iru mmiri n'ikuku."], ["MicroPython", "obere ụdị Python na-arụ ọrụ na microcontroller."], ["Pin", "ebe njikọ igwe dị na bọọdụ ebe a na-ejikọ akụkụ."]],
          slides: [
            { title: "Mee omume n'enweghị akụkụ", bullets: ["Igwe nṅomi n'ịntanetị na-arụ ọrụ na browser", "Bọọdụ ESP32 e ṅomiri na sensọ DHT22", "Lelee ihe ndị dị n'efu"] },
            { title: "Ahịrị MicroPython ndị bụ isi", bullets: ["sensor = dht.DHT22(machine.Pin(15))", "sensor.measure()", "t = sensor.temperature()"] },
            { title: "Nwalee dị ka ezi ihe", bullets: ["Gbanwee okpomọkụ e ṅomiri", "Lee ka iwu mkpu gị si aza", "Pin dị na koodu ga-adabarịrị njikọ waya"] }
          ],
          sources: [WOKWI],
          tryIt: "Meghee ọmụmaatụ ESP32 na DHT22 n'igwe nṅomi n'ịntanetị ma gbaa ya. Gbanwee okpomọkụ sensọ e ṅomiri ahụ opekata mpe ugboro abụọ ma dee ihe a gụrụ. Ọ bụrụ na ị nwere ike, tinye if-statement na-ebipụta \"ALERT\" karịa 27 degrees C. Ọ bụrụ na ị pụghị iji igwe nṅomi ahụ, gbasoo koodu ọmụmaatụ ahụ n'akwụkwọ: kaa akara n'ahịrị na-agụ sensọ na ahịrị na-ebipụta.",
          youCanNow: "ịgba ma nwalee ngwaọrụ IoT e ṅomiri ma jikọọ ihe ọ gụrụ na iwu mkpu.",
          quickCheck: [
            { objective: "O5", q: "Na MicroPython, kedu ahịrị na-agụ okpomọkụ mgbe sensor.measure() gasịrị?", options: ["print(15)", "if temp > 27:", "t = sensor.temperature()", "machine.Pin()"], answer: 2, why: "sensor.temperature() na-eweghachi ihe a gụrụ mgbe sensor.measure() gasịrị." },
            { objective: "O5", q: "Iwu mkpu gị e ṅomiri anaghị ada ma ọlị. Kedu otu ị ga-esi nwalee ya?", options: ["Pịa sensọ e ṅomiri ma bulie okpomọkụ ya karịa oke ahụ", "Buru ụzọ zụta ezi sensọ", "Hichapụ koodu ahụ ma malitegharịa", "Gbanwee nọmba pin ahụ n'enweghị usoro"], answer: 0, why: "Ịgbanwe ihe sensọ e ṅomiri gụrụ na-ekwe ka ị hụ ka iwu ahụ si aza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichebe ngwaọrụ IoT na ịhazi ọrụ gị",
          minutes: 6,
          goal: "Mee nzọụkwụ nchekwa ndị bụ isi na ngwaọrụ jikọrọ ọnụ ma mechaa atụmatụ ọrụ gị.",
          text: [
            "Ngwaọrụ jikọrọ ọnụ bụ ihe ndị omekome kacha achọ ịwakpo n'ihi na ọtụtụ na-abịa ya na okwuntughe mbụ (default) na-esighi ike, a naghịkwa emelite ha. Igwefoto ma ọ bụ plọg nwere ọgụgụ isi a gbabara (hack) nwere ike ịnyụ ndị mmadụ anya ma ọ bụ bụrụ ihe e ji awakpo ndị ọzọ.",
            "Ndụmọdụ US Federal Trade Commission (FTC, ụlọ ọrụ gọọmentị US na-echebe ndị na-azụ ahịa) maka ngwaọrụ ụlọ: gbanwee aha njirimara na okwuntughe mbụ ma ejikwala otu okwuntughe ugboro abụọ; gbanye two-factor authentication ebe e nyere ya; mee ka firmware na app ya dịrị ọhụrụ; gbanyụọ ihe ndị ị na-adịghị eji, dị ka nlekọta site n'ebe dị anya (remote management); ma kwụpụ ngwaọrụ ochie. Maka router: gbanwee ntọala mbụ ya, gbanye encryption ma lelee mmelite. Guest network na-edebe ngwaọrụ nwere ọgụgụ isi iche na kọmputa nwere faịlụ nzuzo.",
            "N'ọrụ, debekwa ndepụta ngwaọrụ ọ bụla jikọrọ ọnụ, tinye ngwaọrụ IoT na netwọk nke ha, ma nakọta naanị data ị chọrọ, karịsịa mgbe igwefoto ma ọ bụ igwe okwu (microphone) so na ya. Jụọ ndị IT ma ọ bụ ndị nchekwa nke ụlọ ọrụ ahụ tupu i jikọọ ihe ọ bụla na netwọk ọrụ."
          ],
          steps: ["Gbanwee okwuntughe mbụ ọ bụla; jiri nke siri ike, nke dị iche.", "Gbanye two-factor authentication ebe e nyere ya.", "Melite firmware na app ndị so ya.", "Gbanyụọ ihe ndị ị na-adịghị eji; kwụpụ ngwaọrụ ochie.", "Tinye ngwaọrụ nwere ọgụgụ isi na netwọk dị iche ma ọ bụ guest network, ma debe ndepụta ngwaọrụ."],
          words: [["Okwuntughe mbụ (default password)", "okwuntughe ngwaọrụ na-abịa ya; ndị omekome maara ndepụta ndị a."], ["Firmware", "sọftwia dị n'ime ngwaọrụ na-agba ya."], ["Two-factor authentication", "ịbanye site n'okwuntughe na ihe akaebe nke abụọ, dị ka koodu."], ["Guest network", "netwọk Wi-Fi dị iche na-edebe ngwaọrụ anya na kọmputa gị ndị bụ isi."], ["Ndepụta ngwaọrụ (device inventory)", "ndepụta ngwaọrụ ọ bụla jikọrọ ọnụ ị na-ahụ maka ya."]],
          slides: [
            { title: "Ihe mere a na-awakpo IoT", bullets: ["Okwuntughe mbụ na-esighi ike", "Ngwaọrụ a naghị emelite", "Igwefoto na microphone nwere ike ikpughe ozi nzuzo"] },
            { title: "Chebe ngwaọrụ ọ bụla", bullets: ["Gbanwee okwuntughe mbụ; ejikwala otu ugboro abụọ", "Two-factor ebe e nyere ya", "Melite firmware na app", "Gbanyụọ ihe ndị ị na-adịghị eji"] },
            { title: "Chebe netwọk", bullets: ["Gbanwee ntọala mbụ router, gbanye encryption", "Ngwaọrụ nwere ọgụgụ isi na guest network", "Debe ndepụta ngwaọrụ; jụọ IT n'ọrụ"] }
          ],
          sources: [FTC, CISA],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ IoT gị peeji otu (dịka ọmụmaatụ ọnụ ụlọ server, friza ebe a na-enye nri ma ọ bụ ubi). Kpọọ aha sensọ, ngwaọrụ, njikọ na ebe data na-aga, see ụzọ si na sensọ ruo mkpu, dee iwu mkpu ahụ dị ka if-statement na Python, ma depụta nzọụkwụ nchekwa ise ị ga-eme.",
          youCanNow: "ichebe ngwaọrụ jikọrọ ọnụ ma hazie ọrụ nlekọta IoT zuru ezu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ndị omekome ji achọkarị ịwakpo ngwaọrụ IoT?", options: ["A na-agbanyụ ha mgbe niile", "Ha na-eri ike ọkụ nke ukwuu", "Ha enweghị njikọ netwọk", "Ọtụtụ na-abịa ya na okwuntughe mbụ na-esighi ike, a naghịkwa emelite ha"], answer: 3, why: "Okwuntughe mbụ na-esighi ike na enweghị mmelite na-eme ka ọ dị mfe ịbanye n'ọtụtụ ngwaọrụ." },
            { objective: "O6", q: "Igwefoto ọnụ ụzọ ọhụrụ nwere ihe nlekọta site n'ebe dị anya ị na-agaghị eji. Gịnị ka ị ga-eme?", options: ["Hapụ ya ka ọ dị n'ọkụ ma eleghị anya", "Gbanyụọ ya", "Kesaa okwuntughe ya na ndị otu gị", "Jiri okwuntughe email gị na ya"], answer: 1, why: "Ịgbanyụ ihe ndị ị na-adịghị eji na-ewepụ ụzọ ndị omekome ga-esi abanye." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu na ichebe ọrụ IoT",
        questions: [
          { objective: "O4", q: "Kedu ahịrị bụ iwu mkpu Python ziri ezi?", options: ["temp > 27 then alert", "alert if temp", "print if temp > 27", "if temp > 27: print(\"ALERT\")"], answer: 3, why: "Python na-eji if, ọnọdụ na kọlọn (:)." },
          { objective: "O4", q: "Gịnị mere a ga-eji chere ọtụtụ ihe dị elu a gụrụ n'usoro tupu e mee mkpu?", options: ["Iji gbochie mkpu ụgha sitere na mbili nwa oge", "Ichekwa akwụkwọ", "N'ihi na sensọ na-ehie ụzọ mgbe niile", "Ime ka ngwaọrụ ahụ ghara ịdị ngwa"], answer: 0, why: "Otu mbili, dị ka ọnụ ụzọ e meghere, nwere ike ọ bụghị ezi nsogbu." },
          { objective: "O5", q: "N'igwe nṅomi, koodu gị na-agụ pin 15 mana e jikọrọ sensọ ahụ na pin 4. Gịnị na-eme?", options: ["Ọ na-arụ ọrụ n'agbanyeghị", "Bọọdụ ahụ na-agba ọkụ", "Koodu ahụ agaghị enweta ihe a gụrụ site na sensọ ahụ", "Okpomọkụ ahụ na-amụba okpukpu abụọ"], answer: 2, why: "Pin dị na koodu ga-adabarịrị njikọ waya." },
          { objective: "O6", q: "Gịnị bụ ihe MBỤ ị ga-eme na igwefoto ọhụrụ nwere ọgụgụ isi?", options: ["Debe okwuntughe mbụ ya", "Kesaa nbanye ya na ndị enyi gị", "Gbanyụọ mmelite", "Gbanwee okwuntughe mbụ ka ọ bụrụ nke siri ike, nke dị iche"], answer: 3, why: "Ndị omekome maara okwuntughe mbụ nke ọma." },
          { objective: "O6", q: "Gịnị mere a ga-eji tinye ngwaọrụ nwere ọgụgụ isi na guest network?", options: ["Ime ka ha dị ngwa", "N'ihi na ha achọghị okwuntughe", "Idebe ha iche na kọmputa nwere faịlụ nzuzo", "Ịgbanyụ encryption"], answer: 2, why: "Ikewapụ ha na-ebelata ihe ngwaọrụ a gbabara nwere ike iru." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Internet of Things (IoT)",
    questions: [
      { objective: "O1", q: "Internet of Things bụ:", options: ["Naanị mgbasa ozi mmekọrịta (social media)", "Ihe a na-emetụ aka nwere sensọ na-ejikọ ma na-ekesa data", "Ụdị akwụkwọ igwe mbipụta", "Egwuregwu kọmputa"], answer: 1, why: "IoT bụ ihe jikọrọ ọnụ na-achọpụta ihe ma na-ekesa." },
      { objective: "O1", q: "Iji data sensọ edozi igwe tupu ọ mebie ka a na-akpọ:", options: ["Predictive maintenance", "Phishing", "Edge storage", "Firmware"], answer: 0, why: "Predictive maintenance na-ahụ nsogbu n'oge." },
      { objective: "O1", q: "Gịnị mere nchekwa ji bụrụ akụkụ nke ọrụ IoT ọ bụla?", options: ["A pụghị ịgbaba ngwaọrụ IoT", "Ọ dị mkpa naanị maka ekwentị", "Ngwaọrụ ọ bụla jikọrọ ọnụ nwere ike ịbụ ụzọ ndị omekome ga-esi abanye", "Ọ na-eme ka ngwaọrụ dị ọnụ ala"], answer: 2, why: "Ngwaọrụ ka ukwuu pụtara ụzọ e si abanye ka ukwuu." },
      { objective: "O2", q: "Kedu ọkwa anọ nke usoro IoT?", options: ["Sensọ, ngwaọrụ, njikọ, cloud ma ọ bụ app", "Keyboard, mouse, ihuenyo, igwe mbipụta", "Email, ozi ederede, oku, akwụkwọ ozi", "Ọkụ, oyi ntakịrị, oyi, ebe nchekwa ochie"], answer: 0, why: "Data na-esi na sensọ gaa na ngwaọrụ, na njikọ, ruo cloud ma ọ bụ app." },
      { objective: "O2", q: "Obere kọmputa dị ọnụ ala dị n'otu chip na-agba otu mmemme bụ:", options: ["Ugbo server", "Router", "Dashboard", "Microcontroller"], answer: 3, why: "Bọọdụ dị ka ESP32 na Arduino bụ microcontroller." },
      { objective: "O2", q: "Moto na-emeghe valvụ mmiri bụ:", options: ["Sensọ", "Actuator", "Protocol", "Isiokwu (topic)"], answer: 1, why: "Actuator na-eme ihe n'ụwa a na-emetụ aka." },
      { objective: "O2", q: "Ime mkpebi n'ime ngwaọrụ kama na cloud bụ:", options: ["Ịkwụ ụgwọ cloud", "Edge computing", "Bluetooth", "Mkpu ụgha"], answer: 1, why: "Edge computing na-arụ ọrụ na data n'akụkụ ebe a nakọtara ya." },
      { objective: "O3", q: "Kedu njikọ kacha mma maka eriri aka mmega ahụ (fitness band) na-akparịta ụka na ekwentị gị?", options: ["LoRaWAN", "Waya", "TV satịlaịtị", "Bluetooth Low Energy"], answer: 3, why: "BLE na-eri obere ike ọkụ ma na-eru ebe dị nso." },
      { objective: "O3", q: "Kedu njikọ dabara GPS tracker n'ụgbọala na-ebuga ngwaahịa?", options: ["Cellular", "Wi-Fi ụlọ", "Waya USB", "Naanị Bluetooth"], answer: 0, why: "Cellular na-arụ ọrụ fọrọ nke nta ebe ọ bụla nwere signal." },
      { objective: "O3", q: "Na MQTT, friza na-ezipu ihe ọ gụrụ site n'ịme:", options: ["Ibipụta ya n'akwụkwọ", "Ịkpọ onye njikwa oku", "Ibipụta (publish) n'isiokwu", "Ichekwa ya na USB"], answer: 2, why: "Ngwaọrụ na-ebipụta; app na-edebanye aha." },
      { objective: "O3", q: "Kedu otu ngwaọrụ IoT na-eji batrị si adị ogologo oge?", options: ["Ha anaghị agbanye mgbe ọ bụla", "Ha na-eji Wi-Fi kacha ngwa", "Ha na-ezipu vidiyo ụbọchị niile", "Ha na-arahụ ụra ọtụtụ oge ma na-eteta ịgụ na iziga"], answer: 3, why: "Ịrahụ ụra na-echekwa ike ọkụ." },
      { objective: "O4", q: "Iwu na IoT na-apụtakarị:", options: ["Rula e ji atụ ihe", "Iwu okwuntughe", "Ọ bụrụ na ihe a gụrụ gafere oke, mee ihe", "Waya"], answer: 2, why: "Iwu na-eme ka ihe a gụrụ ghọọ omume." },
      { objective: "O4", q: "readings = [20, 28, 22]. Site n'iwu \"alert over 27\", mkpu ole?", options: ["0", "1", "2", "3"], answer: 1, why: "Naanị 28 karịrị 27." },
      { objective: "O4", q: "Mkpu dara mgbe mmadụ meghere ọnụ ụzọ friza nwa sekọnd. Nke a bụ:", options: ["Mkpu ụgha", "Edge computing", "Mmelite firmware", "Encryption"], answer: 0, why: "Mbili nwa oge na-abụghị ezi nsogbu bụ mkpu ụgha." },
      { objective: "O5", q: "Gịnị mere a ga-eji jiri igwe nṅomi tupu ịzụta akụkụ?", options: ["N'ihi na ezi ngwaọrụ anaghị arụ ọrụ mgbe ọ bụla", "Iji zere ịmụ koodu", "Iji buru ụzọ nwalee nhazi na koodu n'efu ma ọ bụ n'ọnụ ala", "Iwu chọrọ igwe nṅomi"], answer: 2, why: "Igwe nṅomi na-ekwe ka ị nwalee n'enweghị ngwa." },
      { objective: "O5", q: "MicroPython bụ:", options: ["Obere ụdị Python maka microcontroller", "Agwọ", "Ụdị sensọ", "Aha ụdị Wi-Fi"], answer: 0, why: "Ọ na-agba koodu Python na obere bọọdụ." },
      { objective: "O5", q: "DHT22 na-atụ:", options: ["Ebe GPS", "Ọkụkụ obi", "Vidiyo", "Okpomọkụ na iru mmiri n'ikuku"], answer: 3, why: "Ọ bụ sensọ okpomọkụ na iru mmiri n'ikuku." },
      { objective: "O6", q: "Kedu nhọrọ kacha enweghị nsogbu maka okwuntughe plọg ọhụrụ nwere ọgụgụ isi?", options: ["Hapụ nke mbụ", "Okwuntughe siri ike, nke dị iche", "Jiri otu okwuntughe ahụ dị ka email gị", "\"password123\""], answer: 1, why: "Okwuntughe siri ike, nke dị iche na-egbochi ịbanye n'ụzọ dị mfe." },
      { objective: "O6", q: "Gịnị ka ị ga-eme na firmware dị na ngwaọrụ IoT?", options: ["Emelitela ya mgbe ọ bụla", "Na-emelite ya mgbe niile", "Hichapụ ya", "Kesaa ya n'ịntanetị"], answer: 1, why: "Mmelite na-edozi oghere nchekwa." },
      { objective: "O6", q: "Ị chọrọ ijikọ sensọ na netwọk ebe ọrụ gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Jikọọ ya na nzuzo", "Gbanyụọ firewall", "Kesaa okwuntughe Wi-Fi n'ịntanetị", "Jụọ ndị IT ma ọ bụ ndị nchekwa"], answer: 3, why: "Netwọk ọrụ nwere iwu; ndị IT ga-akwado ngwaọrụ ọhụrụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      3,
      6,
      7,
      9,
      11,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Akụkụ usoro ahụ",
        objective: "O2",
        notYet: "Sensọ, ngwaọrụ ma ọ bụ ebe data na-aga adịghị.",
        meets: "Na-akpọ aha sensọ, ngwaọrụ, njikọ na ebe data na-aga.",
        exceeds: "Na-akpọkwa aha actuator ma ọ bụ mkpebi edge ma kwuo ihe mere o ji enyere aka."
      },
      {
        name: "Eserese ụzọ data",
        objective: "O2",
        notYet: "Enweghị eserese, ma ọ bụ nzọụkwụ ndị ahụ adịghị n'usoro.",
        meets: "Eserese ahụ na-egosi sensọ, ngwaọrụ, njikọ, cloud ma ọ bụ app, na mkpu n'usoro.",
        exceeds: "Eserese ahụ na-egosikwa onye na-anata mkpu ahụ na ihe ọ na-eme."
      },
      {
        name: "Nhọrọ njikọ",
        objective: "O3",
        notYet: "Njikọ ahụ adabaghị ebe ahụ ma ọ bụ ike ọkụ, dị ka Wi-Fi n'ubi na-enweghị Wi-Fi.",
        meets: "Njikọ ahụ dabara ogologo ebe, ike ọkụ na data nke ọrụ ahụ.",
        exceeds: "Na-akọwa ihe mere otu njikọ ọzọ agaghị adaba nke ọma."
      },
      {
        name: "Iwu mkpu",
        objective: "O4",
        notYet: "Iwu ahụ adịghị ma ọ bụ ọ gaghị arụ ọrụ, dị ka ntụnyere ezighi ezi.",
        meets: "If-statement Python ziri ezi nwere oke ezi uche dị na ya na omume.",
        exceeds: "Na-egbochikwa mkpu ụgha, dị ka ichere ọtụtụ ihe a gụrụ, ma e nwalere ya n'igwe nṅomi."
      },
      {
        name: "Nzọụkwụ nchekwa",
        objective: "O6",
        notYet: "Nzọụkwụ erughị ise, ma ọ bụ nzọụkwụ na-adịghị echebe ngwaọrụ ndị ahụ.",
        meets: "Nzọụkwụ ise ziri ezi, dị ka okwuntughe dị iche, mmelite na netwọk dị iche.",
        exceeds: "Gụnyekwara ndepụta ngwaọrụ na ịjụ IT tupu ijikọ n'ọrụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tinyere nka IoT ma ọ bụ sensọ na résumé ma ọ bụ rịọ ọrụ n'ụlọ na ngwa ọrụ, mbugharị ngwaahịa ma ọ bụ IT n'ime ụbọchị 60",
      "Ndị na-amụ ihe kwuru na ha gbanwere okwuntughe mbụ ma ọ bụ melite ngwaọrụ nwere ọgụgụ isi n'ụlọ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Python, netwọk ma ọ bụ cybersecurity ọzọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere web browser na ịntanetị",
      "Igwe nṅomi IoT n'efu n'ịntanetị, dị ka Wokwi (lelee ihe ndị dị n'efu ugbu a)",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ akwụkwọ dijitalụ, maka atụmatụ peeji otu na eserese ụzọ data",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume n'igwe nṅomi, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; gosi igwe nṅomi ahụ n'ihuenyo niile na-ahụ tupu ndị na-amụ ihe anwale ya.",
      "Kpọọ ndị agha ochie ka ha tụnyere IoT na nlele ngwa ọrụ agha, njikọ redio na usoro mkpu ha maralarị.",
      "Nye onye na-amụ ihe ọ bụla ma ọ bụ ndị abụọ ọrụ dị iche (ọnụ ụlọ server, friza ebe a na-enye nri, ubi) ka e wee tụnyere atụmatụ.",
      "Ejikọla ezi ngwaọrụ ọ bụla na netwọk mmemme ma ọ bụ nke ọrụ n'enweghị nkwado ndị IT ma ọ bụ ndị nchekwa.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
