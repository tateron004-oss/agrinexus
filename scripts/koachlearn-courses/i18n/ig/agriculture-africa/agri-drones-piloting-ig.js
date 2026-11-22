"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-piloting.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_UTO = { name: "KCAA: Unmanned Aircraft Systems Training Organizations (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_PORTAL = { name: "KCAA drone (RPAS) online system", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-piloting-ig",
  lang: "ig",
  translationOf: "agri-drones-piloting",
  category: "Agriculture (Africa)",
  name: "Drone maka Nlekọta Ugbo 6: Ihe Ọmụmụ Ịnya Drone n'Ịntanetị",
  skills: "Iji osisi njikwa (sticks), Ime omume ịnya drone na simulator, Ịhọrọ na ịgbanwe ọnọdụ ịnya, Ijikwa ihe mberede (njikọ efuola, batrị dị ala, GPS efuola), Idebe akwụkwọ ndekọ onye na-anya drone, Ịhazi ụzọ gị iji nweta akwụkwọ ikike onye na-anya drone",
  outcome: "ịnya otu usoro omume ọkọlọtọ nke ọma na simulator drone, ijikwa ihe mberede ndị bụ isi n'obi dị jụụ, idebe ezi akwụkwọ ndekọ, na ịgbaso atụmatụ gị doro anya iji nweta akwụkwọ ikike onye na-anya drone n'aka ụlọ ọrụ na-ahụ maka ụgbọelu na mba gị.",
  about: [
    "Nke a bụ ihe ọmụmụ ikpeazụ nke usoro nlekọta site na drone, maka onye ọ bụla nọ na Kenya, Nigeria ma ọ bụ ebe ọzọ n'Afrịka chọrọ ịbụ onye na-anya drone maka ọrụ ugbo nwere nka na akwụkwọ ikike. E mere ya ka e mee ya n'ịntanetị: ọtụtụ omume na-eme na simulator drone (mmemme na-eṅomi ịnya drone) n'efu ma ọ bụ dị ọnụ ala na kọmputa ma ọ bụ ekwentị, ka i wee mehie ihe n'atụghị ezi drone n'ala ma ọ bụ mebie iwu ọ bụla.",
    "Isi 1 na-akụzi njikwa, otu usoro omume, na ọnọdụ ịnya drone gị nwere ike inwe. Isi 2 na-akụzi usoro ihe mberede, otu esi edebe akwụkwọ ndekọ, na nzọụkwụ iji nweta akwụkwọ ikike onye na-anya drone.",
    "Ihe dị mkpa: ihe ọmụmụ a anaghị enye gị akwụkwọ ikike, ọ naghịkwa ekwe ka ị nya drone. Na Kenya na Nigeria, dị ka n'ọtụtụ mba, akwụkwọ ikike onye na-anya drone na-esi n'ụlọ ọrụ gọọmentị na-ahụ maka ụgbọelu mgbe i mechara ọzụzụ n'ụlọ ọrụ a kwadoro ma gafee ule ya. Anyala ezi drone mgbe ọ bụla n'enweghị ndebanye aha, akwụkwọ ikike na ikike ndị mba gị chọrọ."
  ],
  finalTask: "Na simulator drone, mee omume ise dị n'ihe ọmụmụ a (hover, box, figure eight, orbit na lawnmower grid) ruo mgbe ị nwere ike ịnya nke ọ bụla nke ọma ugboro atọ n'usoro, mee omume ihe mberede atọ ahụ, dee nnọkọ ọ bụla n'akwụkwọ ndekọ, ma dee atụmatụ akwụkwọ ikike gị nke otu peeji: ụlọ ọrụ na-ahụ maka ụgbọelu na mba gị, ụlọ ọrụ ọzụzụ a kwadoro ị chọtara, akwụkwọ ikike ị chọrọ, nzọụkwụ, akwụkwọ ndị a chọrọ, ọnụ ahịa a tụrụ anya site n'isi iyi gọọmentị, na ụbọchị ị chọrọ imezu ha.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Onye ọ bụla nọ na Kenya, Nigeria ma ọ bụ ebe ọzọ n'Afrịka chọrọ ịbụ onye na-anya drone maka ọrụ ugbo nwere nka na akwụkwọ ikike, na-amụ ihe ọmụmụ ikpeazụ nke usoro nlekọta drone n'ịntanetị.",
    startingPoint: "Ndị na-amụ ihe maara ihe drone na-eme n'ugbo, iwu ndị bụ isi na otu e si eme maapụ (Ihe ọmụmụ 1 ruo 5). Ọtụtụ enweghị oge zuru ezu ji osisi njikwa, emebeghị omume ihe mberede, anaghị edebe ndekọ ịnya, amaghịkwa nzọụkwụ, akwụkwọ na ụlọ akwụkwọ a kwadoro maka akwụkwọ ikike onye na-anya drone.",
    gap: "Ndị ọhụrụ na-anya drone na-atụ ya n'ala mgbe ụjọ jidere ha n'ihe mberede, mgbe GPS furu efu ma ọ bụ mgbe ha na-anya ya ihu ya chere ha (nose-in); ụfọdụ na-akwụ ụgwọ n'ụlọ akwụkwọ a na-akwadoghị ma ọ bụ na-anya n'enweghị akwụkwọ ikike. Ime omume na omume ihe mberede na simulator, idebe akwụkwọ ndekọ na ịgbaso atụmatụ akwụkwọ ikike doro anya na-eme ka ndị na-amụ ihe bịa n'ọzụzụ a kwadoro dị njikere ịmụta ngwa ngwa ma nya drone n'ụzọ iwu kwadoro.",
    constraints: [
      "Ngwaọrụ: kọmputa ma ọ bụ ekwentị nwere ike ịgba simulator drone n'efu ma ọ bụ dị ọnụ ala; njikwa (controller) na-enye aka",
      "Ihe ọmụmụ a anaghị enye akwụkwọ ikike ma ọ bụ ikike ịnya; akwụkwọ ikike na-esi n'ụlọ ọrụ na-ahụ maka ụgbọelu mgbe ọzụzụ a kwadoro na ule gasịrị",
      "Anyala ezi drone mgbe ọ bụla n'enweghị ndebanye aha, akwụkwọ ikike na ikike ndị mba ahụ chọrọ",
      "Oge: obere nnọkọ omume kwa ụbọchị nke nkeji 15 ruo 20",
      "Ụgwọ na nzọụkwụ na-agbanwe: ndị na-amụ ihe na-elele peeji gọọmentị nke ụlọ ọrụ ahụ"
    ],
    prerequisites: "\"Drone maka Nlekọta Ugbo 1: Mmalite, Iwu na Nchekwa\"; Ihe ọmụmụ 2 ruo 5 na-enye aka mana a chọghị ha n'ike."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji njikwa drone ma ọ bụ simulator", action: "ịkpọ aha ihe mmegharị osisi njikwa ọ bụla na-eme ma gụọ ihe ndị bụ isi dị n'ihuenyo ịnya", standard: "ma chọta bọtịnụ return-to-home na nke nkwụsịtụ n'eleghị anya" },
    { id: "O2", condition: "Na simulator drone", action: "ịnya omume hover, box, figure eight, orbit na lawnmower ma dee nnọkọ ọ bụla n'akwụkwọ ndekọ", standard: "na-anya omume ọ bụla nke ọma ugboro atọ n'usoro" },
    { id: "O3", condition: "Mgbe GPS siri ike ma ọ bụ adịghị ike", action: "ịkọwa ọnọdụ ịnya ndị bụ isi ma nya n'obi dị jụụ mgbe drone dabara n'ọnọdụ attitude", standard: "na-ahụ drone ahụ anya mgbe niile ma rute ya n'ala n'enweghị nsogbu" },
    { id: "O4", condition: "N'oge njikọ efuola, batrị dị ala ma ọ bụ GPS efuola e ṅomiri eṅomi", action: "ịgbaso nzọụkwụ ihe mberede ziri ezi", standard: "n'obi dị jụụ na n'usoro ziri ezi, wee dee ihe ahụ mere" },
    { id: "O5", condition: "Maka mba gị", action: "ide atụmatụ nke gị iji nweta akwụkwọ ikike onye na-anya drone", standard: "nwere ụlọ ọrụ gọọmentị ahụ, ụlọ akwụkwọ a kwadoro, nzọụkwụ, akwụkwọ, ọnụ ahịa site n'isi iyi gọọmentị na ụbọchị a tụrụ anya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmụta ịnya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Njikwa: osisi njikwa, bọtịnụ na ihuenyo",
          minutes: 5,
          goal: "Kpọọ aha ihe mmegharị osisi njikwa ọ bụla na-eme ma gụọ ihe ndị bụ isi dị n'ihuenyo ịnya.",
          text: [
            "Ọtụtụ njikwa drone nwere osisi njikwa (sticks) abụọ. Na Mode 2, nhazi a na-ejikarị, osisi aka ekpe na-achịkwa ịdị elu (throttle: bulie elu ka ọ rigoo, wedata ka ọ gbadata) na ịtụgharị n'otu ebe (yaw: aka ekpe na aka nri). Osisi aka nri na-eme ka drone gaa n'ihu na azụ (pitch) na n'akụkụ (roll). Ụfọdụ ndị na-anya drone na-eji mode ndị ọzọ; lelee nke gị na ntọala app.",
            "Obere mmegharị dị nwayọọ na-eme ka ịnya dị mma. Ndị mbido na-akwagharị ya nke ukwuu na ngwa ngwa. Mee omume ịkwagharị osisi njikwa nwayọọ, wee hapụ ha ka ha laghachi n'etiti, ebe ọtụtụ drone na-eguzo n'otu ebe.",
            "Ihuenyo ịnya na-egosi ọkwa batrị, ike signal, satịlaịtị GPS, ịdị elu, anya site n'ụlọ (home) na ihe igwefoto na-ahụ. Mụta ilegharị ya anya ngwa ngwa, wee lee drone ahụ ọzọ. Mara ebe bọtịnụ return-to-home (ịlọta n'ụlọ) na bọtịnụ nkwụsịtụ ma ọ bụ breeki dị n'eleghị anya."
          ],
          words: [["Throttle", "mmegharị elu na ala (ịrịgo ma ọ bụ ịgbadata)."], ["Yaw", "ịtụgharị drone n'aka ekpe ma ọ bụ aka nri n'otu ebe."], ["Pitch", "ịga n'ihu ma ọ bụ azụ."], ["Roll", "ịga n'akụkụ aka ekpe ma ọ bụ aka nri."], ["Mode 2", "nhazi osisi njikwa a na-ejikarị: osisi aka ekpe bụ throttle na yaw, osisi aka nri bụ pitch na roll."]],
          slides: [
            { title: "Osisi njikwa Mode 2", bullets: ["Osisi aka ekpe: elu/ala (throttle), ịtụgharị (yaw)", "Osisi aka nri: n'ihu/azụ (pitch), n'akụkụ (roll)", "Lelee mode gị n'app"] },
            { title: "Aka dị nwayọọ", bullets: ["Obere mmegharị dị nwayọọ", "Hapụ osisi njikwa ka ha laghachi n'etiti", "Ọtụtụ drone na-eguzo n'otu ebe mgbe ahụ"] },
            { title: "Ihuenyo ịnya", bullets: ["Batrị, signal, satịlaịtị GPS", "Ịdị elu, anya site n'ụlọ, ihe igwefoto na-ahụ", "Legharịa ya anya, wee lee drone ọzọ"] },
            { title: "Mara bọtịnụ gị", bullets: ["Return-to-home (ịlọta n'ụlọ)", "Nkwụsịtụ ma ọ bụ breeki", "Chọta ha n'eleghị anya"] }
          ],
          tryIt: "Wụnye simulator drone na kọmputa ma ọ bụ ekwentị (chọọ simulator ịnya drone n'ụlọ ahịa app gị ma ọ bụ na kọmputa gị; ụfọdụ ndị na-emepụta drone na-enye otu n'app ha). Chọta ntọala mode osisi njikwa, họrọ Mode 2, ma kwagharịa osisi njikwa ọ bụla nwayọọ ka ị hụ ihe ọ na-eme.",
          youCanNow: "ikwu ihe osisi njikwa ọ bụla na-eme na Mode 2, ịgụ ihuenyo ịnya, na ịchọta bọtịnụ ihe mberede.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ pitch?", options: ["Ịtụgharị n'otu ebe", "Ime ka drone gaa n'ihu na azụ", "Ịrịgo elu", "Ịlọta n'ụlọ"], answer: 1, why: "Pitch na-eme ka drone gaa n'ihu na azụ; na Mode 2 ọ dị n'osisi aka nri." },
            { objective: "O1", q: "Drone gị na-aga n'akụkụ osisi, ị ga-akwụsị ya ngwa ngwa. Gịnị ka ị kwesịrị ịmaraworị?", options: ["Ọnụ ahịa drone ahụ", "Nọmba ekwentị onye ọrụ ugbo", "Otu esi agbanwe agba igwefoto", "Ebe bọtịnụ nkwụsịtụ ma ọ bụ breeki dị, n'eleghị anya"], answer: 3, why: "Ndị na-anya drone na-amụta ebe bọtịnụ nkwụsịtụ ma ọ bụ breeki na return-to-home dị ka ha wee mee ihe n'eleghị anya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Omume ịnya na simulator",
          minutes: 6,
          goal: "Nya omume ọkọlọtọ ise nke ọma na simulator.",
          text: [
            "Ndị na-anya drone nke ọma na-ewuli nka site n'otu omume ahụ, ọtụtụ ugboro. Mee omume ọ bụla ruo mgbe ị nwere ike ịnya ya nke ọma ugboro atọ n'usoro, wee gaa n'ihu. Obere nnọkọ kwa ụbọchị nke nkeji 15 ruo 20 ka mma karịa otu nnọkọ ogologo n'izu.",
            "Omume 1, hover: fepụ ruo ịdị elu anya gị ma mee ka drone ahụ guzoro otu ebe otu nkeji. Omume 2, box: nya akụkụ anọ (square) ka ihu drone na-elegide n'ihu mgbe niile, wee mee ya ọzọ ka ihu ya na-atụgharị n'akụkụ ọ bụla. Omume 3, figure eight: nya ọnụọgụ asatọ (8) dị nwayọọ. Omume 4, orbit: gbaa otu ebe gburugburu (dị ka osisi) ka igwefoto na-ele ya. Omume 5, lawnmower: nya ahịrị kwụ ọtọ dị n'akụkụ ibe ha n'ofe ugbo, dị ka ịnya maka ime maapụ, site n'aka.",
            "Mekwa omume mgbe ihu drone chere gị (nose-in), mgbe aka ekpe na aka nri dị ka ha agbanweela. Ebe a ka ọtụtụ ndị mbido na-atụ drone n'ala. Mgbe nnọkọ ọ bụla gasịrị, dee ihe gara nke ọma na ihe ị ga-eme ka ọ ka mma."
          ],
          steps: ["Hover n'ịdị elu anya gị otu nkeji.", "Box: ihu n'ihu, wee ihu na-atụgharị n'akụkụ.", "Figure eight, dị nwayọọ ma dị larịị.", "Orbit gburugburu osisi ka igwefoto na-ele ya.", "Ahịrị lawnmower n'ofe ugbo.", "Megharịa nke ọ bụla nose-in."],
          words: [["Omume (drill)", "obere mmega a na-emegharị iji wuo nka."], ["Nose-in", "ịnya mgbe ihu drone chere gị, nke na-eme ka njikwa dị ka ha agbanweela."], ["Orbit", "ịnya gburugburu otu ebe."]],
          slides: [
            { title: "Otu esi eme omume", bullets: ["Otu omume ahụ, ọtụtụ ugboro", "Ugboro atọ nke ọma n'usoro, wee gaa n'ihu", "Nkeji 15-20 kwa ụbọchị ka mma karịa otu nnọkọ ogologo"] },
            { title: "Omume ise", bullets: ["1 Hover  2 Box  3 Figure eight", "4 Orbit gburugburu osisi  5 Ahịrị lawnmower"] },
            { title: "Nke siri ike: nose-in", bullets: ["Aka ekpe na aka nri dị ka ha agbanweela", "Ebe ọtụtụ ndị mbido na-atụ drone n'ala", "Mee omume ọ bụla nose-in kwa"] }
          ],
          tryIt: "Na simulator gị, nya omume 1 na 2 taa. Dee n'akwụkwọ ndetu: ụbọchị, nkeji, omume ndị ị mere, ugboro ole ọ gara nke ọma, otu ihe ị ga-eme ka ọ ka mma.",
          youCanNow: "ime omume ọkọlọtọ ise na simulator ma soro ka ị na-aga n'ihu.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ omume box?", options: ["Ịnya akụkụ anọ, nke mbụ ka ihu na-ele n'ihu, wee ka ihu na-atụgharị n'akụkụ ọ bụla", "Iguzo n'otu ebe n'ikuku", "Ịgba osisi gburugburu", "Ịnya ọnụọgụ asatọ"], answer: 0, why: "Omume box na-anya akụkụ anọ ka ihu drone na-ele n'ihu, wee ka ihu ya na-atụgharị n'akụkụ ọ bụla." },
            { objective: "O2", q: "I nyala omume hover nke ọma otu ugboro. Gịnị ka ị ga-eme ọzọ?", options: ["Gaa ozugbo n'ezi ịnya", "Kwụsị omume hover ruo mgbe ebighị ebi", "Gaa n'ihu na-eme ya ruo mgbe ọ dị mma ugboro atọ n'usoro, wee gaa n'ihu", "Wụfee gaa n'omume kacha sie ike"], answer: 2, why: "Mee omume ọ bụla ruo mgbe ị nwere ike ịnya ya nke ọma ugboro atọ n'usoro." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ọnọdụ ịnya na mgbe a ga-eji ha",
          minutes: 5,
          goal: "Kọwaa ọnọdụ ịnya ndị bụ isi ma gbanwee n'enweghị nsogbu mgbe GPS adịghị ike.",
          text: [
            "Ọtụtụ drone nwere igwefoto na-anya n'ọnọdụ positioning ma ọ bụ GPS. Drone ahụ na-eji satịlaịtị na sensọ eguzo n'otu ebe mgbe ị hapụrụ osisi njikwa, nke na-eme ka ịnya dị mfe ma na-enye ohere maka return-to-home na ime maapụ n'onwe ya.",
            "Ụfọdụ drone nwekwara ọnọdụ attitude (ụfọdụ ụlọ ọrụ na-akpọ ya ATTI). Drone ahụ na-ejide ịdị elu ya mana ọ naghị eguzo n'otu ebe, ya mere ikuku na-ebuga ya dị ka ụgbọ mmiri n'osimiri. Drone nwere ike ịdaba n'ọnọdụ a n'onwe ya mgbe GPS adịghị ike, dịka ọmụmaatụ n'akụkụ ihe ígwè toro ogologo, n'okpuru osisi gbara ọkpụrụkpụ, ma ọ bụ na ndagwurugwu dị omimi. Ndị mere omume ya na-anọ jụụ; ndị na-emeghị ya na-atụkarị drone n'ala.",
            "Ọnọdụ ndị ọzọ gụnyere sport (ọsọ ọsọ, nchekwa dị ntakịrị), tripod ma ọ bụ cine (nwayọọ na dị nro maka ise vidiyo), na ọrụ akpaaka (automatic missions). Ọtụtụ simulator na-ekwe ka ị nya n'enweghị enyemaka GPS. Mee omume ya ka ịkpafu ghara iju gị anya."
          ],
          words: [["Ọnọdụ GPS (GPS mode)", "ọnọdụ ịnya ebe drone na-eji satịlaịtị eguzo n'otu ebe."], ["Ọnọdụ attitude (ATTI)", "ọnọdụ ebe drone na-ejide ịdị elu mana ikuku na-ebuga ya."], ["Ịkpafu (drift)", "drone na-apụ n'onwe ya, na-abụkarị site n'ikuku."]],
          slides: [
            { title: "Ọnọdụ GPS / positioning", bullets: ["Na-eguzo n'otu ebe mgbe ị hapụrụ ya", "Na-enye ohere maka return-to-home na ime maapụ", "Ọnọdụ nkịtị maka ọrụ ugbo"] },
            { title: "Ọnọdụ attitude (ATTI)", bullets: ["Na-ejide ịdị elu, ọ bụghị ebe", "Ikuku na-ebuga ya", "Nwere ike ịmalite n'onwe ya mgbe GPS adịghị ike"] },
            { title: "Ọnọdụ ndị ọzọ", bullets: ["Sport: ọsọ ọsọ, nchekwa dị ntakịrị", "Tripod / cine: nwayọọ na dị nro", "Mee omume ịnya n'enweghị enyemaka GPS"] }
          ],
          tryIt: "Na simulator gị, gbanyụọ enyemaka GPS ma ọ bụ họrọ ọnọdụ attitude, tinye ntakịrị ikuku, ma mee hover sekọnd 30 site n'idozi ịkpafu. Wee nya omume box n'ọnọdụ a.",
          youCanNow: "ịkọwa ọnọdụ ịnya ndị bụ isi ma jide njikwa mgbe drone na-akpafu n'enweghị GPS.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ọnọdụ tripod ma ọ bụ cine na-eme?", options: ["Na-anya ọsọ ọsọ dịka o kwere mee", "Na-agbanyụ moto", "Na-eme maapụ n'onwe ya", "Na-anya nwayọọ ma dị nro maka ise vidiyo"], answer: 3, why: "Ọnọdụ tripod ma ọ bụ cine dị nwayọọ ma dị nro, maka ise vidiyo." },
            { objective: "O3", q: "Ị ga-eme maapụ ugbo dị n'akụkụ ebe nchekwa ọka (silo) ígwè toro ogologo. Gịnị ka ị ga-akwado maka ya?", options: ["Ọ dịghị ihe; GPS na-arụ ọrụ mgbe niile", "Drone ịdaba n'ọnọdụ attitude ma kpafuo, ya mere ị na-eme omume ịnya n'enweghị enyemaka GPS", "Ịnya n'ọnọdụ sport", "Ịnya naanị nose-in"], answer: 1, why: "N'akụkụ ihe ígwè toro ogologo GPS nwere ike ọ gaghị adị ike, drone nwekwara ike ịkpafu n'ọnọdụ attitude." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmụta ịnya",
        questions: [
          { objective: "O1", q: "Na Mode 2, gịnị ka ịkwali osisi aka ekpe elu na-eme?", options: ["Ọ na-aga n'ihu", "Ọ na-atụgharị n'aka nri", "Ọ na-arịgo elu", "Ọ na-aga n'akụkụ"], answer: 2, why: "Osisi aka ekpe na-achịkwa throttle (ịdị elu) na yaw na Mode 2." },
          { objective: "O1", q: "Gịnị bụ yaw?", options: ["Ịtụgharị drone n'aka ekpe ma ọ bụ aka nri n'otu ebe", "Ịrịgo elu", "Ịrute n'ala", "Ise foto"], answer: 0, why: "Yaw na-atụgharị drone gburugburu etiti ya." },
          { objective: "O2", q: "Kedu atụmatụ omume na-ewuli nka kacha mma?", options: ["Otu nnọkọ awa atọ n'ọnwa", "Obere nnọkọ kwa ụbọchị nke otu omume ahụ", "Naanị ikiri vidiyo", "Ịnya ezi drone n'enweghị ọzụzụ"], answer: 1, why: "Obere ikwughachi mgbe niile na-ewuli njikwa dị nro." },
          { objective: "O2", q: "Gịnị mere a ga-eji mee omume ịnya nose-in?", options: ["Ọ dị ọsọ ọsọ", "Ọ na-echekwa batrị", "Simulator chọrọ ya", "Njikwa dị ka ha agbanweela, ọtụtụ ndị mbido na-atụkwa drone n'ala ebe ahụ"], answer: 3, why: "Ime omume ya na-eme ka ọ mara gị ahụ mgbe njikwa dị ka ha agbanweela." },
          { objective: "O3", q: "N'ọnọdụ attitude (ATTI), drone ahụ:", options: ["Na-ejide ịdị elu mana ikuku na-ebuga ya", "Na-erute n'ala n'onwe ya", "Na-eguzo n'otu ebe nke ọma", "Enweghị ike ịkwaga"], answer: 0, why: "N'enweghị GPS positioning, ọ na-ejide ịdị elu mana ọ naghị eguzo n'otu ebe." }
        ]
      }
    },
    {
      name: "Isi 2: Ịbụ onye na-anya drone nwere akwụkwọ ikike",
      lessons: [
        {
          objectives: ["O4"],
          title: "Omume ihe mberede: njikọ efuola, batrị dị ala, GPS efuola",
          minutes: 6,
          goal: "Gbasoo nzọụkwụ ziri ezi n'ihe mberede atọ a na-ahụkarị.",
          text: [
            "Ihe mberede anaghị adịkarị mana ha na-eme ngwa ngwa. Ndị na-anya drone na-ejikwa ha nke ọma n'ihi na ha emeela omume nzọụkwụ ruo mgbe ha na-eme ha n'echeghị echiche. Tupu ezi ịnya ọ bụla, lelee na ịdị elu return-to-home na ihe drone ga-eme mgbe signal furu efu ka a tọọrọ nke ọma.",
            "Njikọ efuola (njikwa enweghị signal): nọrọ jụụ, tụzie antenna njikwa n'ebe drone dị, gaa n'ebe dị elu ma ọ bụrụ na o nweghị nsogbu. Ọtụtụ drone na-amalite return-to-home mgbe sekọnd ole na ole gachara; lee mbara igwe anya ma dị njikere ijide njikwa mgbe njikọ ahụ laghachiri. Batrị dị ala: kwụsị ọrụ ahụ ma nya ozugbo laa n'ụlọ, ma ọ bụ rute n'ala n'ebe kacha nso nke o nweghị nsogbu; anwala ịmecha otu ahịrị ọzọ mgbe ọ bụla.",
            "GPS efuola ma ọ bụ ịkpafu na mberede: gbanwee uche gị gaa n'ịnya attitude, hụ drone ahụ anya mgbe niile, nya ya nwayọọ laghachi n'ebe ị nọ megide ikuku, ma rute n'ala ozugbo o nweghị nsogbu. Mgbe ihe mberede ọ bụla ma ọ bụ ọdịda gasịrị, mee ka ebe ahụ dị nchebe, lelee mmebi, dee ya n'akwụkwọ ndekọ gị, ma kọọrọ ụlọ ọrụ gọọmentị ma ọ bụrụ na iwu gị chọrọ ya."
          ],
          steps: ["Njikọ efuola: nọrọ jụụ, tụzie antenna, gaa n'elu ma o nweghị nsogbu, lee return-to-home.", "Batrị dị ala: kwụsị ọrụ ahụ, laa n'ụlọ ma ọ bụ rute n'ala n'ebe kacha nso nke o nweghị nsogbu.", "GPS efuola: nya nwayọọ site n'aka, megide ikuku, rute n'ala n'oge na-adịghị anya.", "Mgbe ihe ọ bụla mere: mee ka ọ dị nchebe, lelee mmebi, dee ya, kọọ ya ma ọ dị mkpa."],
          words: [["Njikọ efuola (lost link)", "mgbe drone na njikwa tụfuru njikọ redio ha."], ["Fly-away", "mgbe drone fepụrụ, onye na-anya ya enweghịzi ike ịchịkwa ya."], ["Ihe mere (incident)", "ihe a na-atụghị anya ya nke mere ka mmerụ ma ọ bụ mmebi mee, ma ọ bụ nwere ike ime ya."]],
          slides: [
            { title: "Mee omume ruo mgbe ọ bụ n'echeghị echiche", bullets: ["Ihe mberede adịghị ọtụtụ mana ha na-eme ngwa ngwa", "Buru ụzọ lelee ịdị elu RTH na ihe a ga-eme mgbe signal furu"] },
            { title: "Njikọ efuola", bullets: ["Nọrọ jụụ, tụzie antenna", "Gaa n'elu ma o nweghị nsogbu", "Lee return-to-home"] },
            { title: "Batrị dị ala na GPS efuola", bullets: ["Batrị dị ala: kwụsị, laa n'ụlọ ma ọ bụ rute n'ala ugbu a", "GPS efuola: nya site n'aka, megide ikuku, rute n'ala n'oge"] },
            { title: "Mgbe ihe ọ bụla mere", bullets: ["Mee ka ebe ahụ dị nchebe", "Lelee mmebi, dee ya", "Kọọ ya ma iwu gị chọrọ ya"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Na simulator gị, mee omume ihe mberede ọ bụla: tọọ ịdọ aka na ntị batrị dị ala ma nya laa n'ụlọ, gbanyụọ GPS n'etiti ịnya ma rute n'ala site n'aka, ma (ọ bụrụ na simulator ahụ kwere) mee ka signal fuo ma lee return-to-home. Mgbe nke ahụ gasịrị, dee nzọụkwụ ndị ahụ site n'isi gị.",
          youCanNow: "ịgbaso nzọụkwụ ziri ezi maka njikọ efuola, batrị dị ala na GPS efuola.",
          quickCheck: [
            { objective: "O4", q: "Tupu ezi ịnya ọ bụla, gịnị ka ị ga-elele iji kwadebe maka njikọ efuola?", options: ["Ntọala agba igwefoto", "Adreesị onye ọrụ ugbo", "Na ịdị elu return-to-home na ihe a ga-eme mgbe signal furu ka a tọọrọ nke ọma", "Peeji ikpeazụ nke akwụkwọ ndekọ"], answer: 2, why: "Ịdị elu return-to-home na ihe a ga-eme mgbe signal furu ziri ezi na-eme ka drone lọta n'enweghị nsogbu ma njikọ fuo." },
            { objective: "O4", q: "Mgbe ezi drone rutere n'ala ike, ọ dị ka ọ dị mma. Gịnị ka ị ga-eme?", options: ["Lelee ya maka mmebi ma dee ya n'akwụkwọ ndekọ", "Nya ya ọzọ ozugbo n'eleleghị ya", "Chefuo ya", "Zoo ya n'anya onye nkuzi gị"], answer: 0, why: "Mgbe ihe mberede ma ọ bụ ọdịda ọ bụla gasịrị, lelee mmebi ma dee ya; kọọ ya ma iwu chọrọ ya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Idebe akwụkwọ ndekọ onye na-anya drone",
          minutes: 4,
          goal: "Dee ịnya ọ bụla na simulator na nke ezi drone n'akwụkwọ ndekọ.",
          text: [
            "Akwụkwọ ndekọ (log book) bụ ndekọ ịnya gị. Ụlọ ọrụ ọzụzụ na ụlọ ọrụ na-ahụ maka ụgbọelu na-eji ndekọ ịnya elele ahụmahụ, ndị were mmadụ n'ọrụ na ndị ahịa na-atụkwasịkwa ndị na-anya drone na-edebe ha obi. Debe oge simulator na oge ezi ịnya n'ogidi dị iche iche.",
            "Maka nnọkọ ọ bụla dee: ụbọchị, ebe (ma ọ bụ simulator), aha drone ma ọ bụ simulator, nkeji niile, ụdị ịnya (omume, ime maapụ, nlele), ọnọdụ (ikuku, ìhè), nsogbu ma ọ bụ ihe ọ bụla mere, na ihe ị mụtara. Maka ezi ịnya, dekwa nọmba ndebanye aha drone ahụ na ikike ọ bụla ị jiri.",
            "Jiri akwụkwọ ndetu, spreadsheet ma ọ bụ app ndekọ, mana debe ya oge ọ bụla ma chekwaa otu n'ebe ọzọ (back up). Jụọ ụlọ ọrụ ọzụzụ gị ụdị ọ na-anabata maka arịrịọ akwụkwọ ikike."
          ],
          steps: ["Họrọ akwụkwọ, spreadsheet ma ọ bụ app, ma chekwaa otu n'ebe ọzọ.", "Ogidi dị iche iche maka simulator na ezi ịnya.", "Dee ụbọchị, ebe, ụgbọ, nkeji, ụdị, ọnọdụ, nsogbu, ihe a mụtara.", "Maka ezi ịnya, tinye ndebanye aha na ikike e jiri.", "Jụọ ụlọ ọrụ ọzụzụ gị ụdị ọ na-anabata."],
          words: [["Akwụkwọ ndekọ (log book)", "ndekọ ịnya ọ bụla onye na-anya drone mere."], ["Oge ịnya (flight time)", "nkeji ma ọ bụ awa onye na-anya drone jiri nya ya."]],
          slides: [
            { title: "Ihe mere a ga-eji debe ndekọ", bullets: ["Ọ na-egosi ahụmahụ gị", "Ụlọ ọrụ ọzụzụ na ụlọ ọrụ gọọmentị na-eji ya", "Ọ na-ewuli ntụkwasị obi ndị ahịa"] },
            { title: "Ihe a ga-ede", bullets: ["Ụbọchị, ebe, drone ma ọ bụ simulator", "Nkeji, ụdị ịnya, ọnọdụ", "Nsogbu, ihe mere, ihe a mụtara"] },
            { title: "Debe ya nke ọma", bullets: ["Nnọkọ ọ bụla, chekwaa otu n'ebe ọzọ", "Oge simulator na ezi oge dị iche", "Jiri ụdị onye nkuzi gị na-anabata"] }
          ],
          tryIt: "Malite akwụkwọ ndekọ gị ugbu a dị ka spreadsheet nwere ogidi ndị dị na nkuzi a, ma tinye nnọkọ simulator ọ bụla i meworo n'ihe ọmụmụ a ruo ugbu a.",
          youCanNow: "idebe akwụkwọ ndekọ zuru ezu maka ịnya na simulator na ezi ịnya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere ụlọ ọrụ ọzụzụ na ụlọ ọrụ gọọmentị ji ele ndekọ ịnya?", options: ["Iji kpebie ọnụ ahịa drone", "Iji lelee ahụmahụ onye na-anya drone", "Iji họrọ ihu igwe", "Iji gbanwee mode osisi njikwa"], answer: 1, why: "Ndekọ ịnya na-egosi ahụmahụ onye na-anya drone nye ụlọ akwụkwọ, ụlọ ọrụ gọọmentị, ndị were mmadụ n'ọrụ na ndị ahịa." },
            { objective: "O2", q: "I nyara ezi drone taa n'okpuru otu ikike. Gịnị ka ị ga-agbakwunye na ndekọ ahụ?", options: ["Ọ dịghị ihe karịa ụbọchị", "Ihu igwe izu na-abịa", "Ozi ụlọ akụ gị", "Nọmba ndebanye aha drone ahụ na ikike e jiri"], answer: 3, why: "Maka ezi ịnya, dekwa nọmba ndebanye aha drone ahụ na ikike ọ bụla e jiri." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ụzọ gị iji nweta akwụkwọ ikike onye na-anya drone",
          minutes: 6,
          goal: "Dee atụmatụ nke gị iji nweta akwụkwọ ikike onye na-anya drone na mba gị.",
          text: [
            "Mba ọ bụla na-ekpebi otu a ga-esi enye ndị na-anya drone akwụkwọ ikike. Na Kenya, KCAA (ụlọ ọrụ gọọmentị Kenya na-ahụ maka ụgbọelu) na-akwado Unmanned Aircraft Systems Training Organizations (UTOs) ma depụta ha na weebụsaịtị ya; ndepụta ụgwọ ya gụnyere akwụkwọ ikike nwata akwụkwọ na-anya drone, akwụkwọ ikike onye na-anya drone (RPL) na ikike ndị ọzọ dị ka ịnya karịa ebe anya ruru (beyond visual line of sight). A na-eme arịrịọ site na sistemụ drone KCAA dị n'ịntanetị. Na Nigeria, Part 21 nke NCAA (ụlọ ọrụ gọọmentị Nigeria na-ahụ maka ụgbọelu) na-akọwa akwụkwọ ikike onye na-anya drone na ihe ndị ọzọ RPAS chọrọ. Mba ndị ọzọ nwere iwu nke ha.",
            "Ụzọ a na-agakarị: họrọ ụlọ ọrụ ọzụzụ a kwadoro; mụọ tiori (iwu ikuku, mbara ikuku na maapụ, ihu igwe, ụgbọ ahụ, ihe gbasara mmadụ, usoro ihe mberede); were nkuzi ịnya na ule omume; mezue ihe ụlọ ọrụ gọọmentị chọrọ; rịọ maka akwụkwọ ikike; ma mee ka ọ dịgide site n'imegharị ya dị ka a chọrọ.",
            "Lelee nzọụkwụ ọ bụla, akwụkwọ ọ bụla na ụgwọ ọ bụla na peeji gọọmentị nke ụlọ ọrụ ahụ ma ọ bụ site n'ịkpọ ha, ma lelee na ụlọ akwụkwọ dị na ndepụta a kwadoro nke ụlọ ọrụ ahụ tupu ị kwụọ ụgwọ. Ndekọ simulator gị na-egosi na ị dị njikere ịmụta ngwa ngwa, mana ọ naghị anọchi ọzụzụ a kwadoro."
          ],
          steps: ["Chọta peeji drone nke ụlọ ọrụ gọọmentị na-ahụ maka ụgbọelu na mba gị.", "Chọta ndepụta ụlọ ọrụ ọzụzụ a kwadoro ya; họrọ abụọ ị ga-akpọtụrụ.", "Jụọ nke ọ bụla: ogologo ihe ọmụmụ, ihe tiori na omume, ọnụ ahịa, ule, akwụkwọ a chọrọ.", "Lelee ụgwọ akwụkwọ ikike na ndepụta ụgwọ gọọmentị.", "Dee ụbọchị a tụrụ anya maka ọzụzụ, ule na arịrịọ."],
          words: [["Ụlọ ọrụ ọzụzụ a kwadoro", "ụlọ akwụkwọ drone nke ụlọ ọrụ gọọmentị na-ahụ maka ụgbọelu kwadoro ka ọ zụọ ndị na-anya drone maka akwụkwọ ikike (KCAA na-akpọ ha UTOs)."], ["Rating", "ikike ọzọ dị n'akwụkwọ ikike maka otu ụdị ịnya, dị ka ịnya karịa ebe anya ruru."], ["Iwu ikuku (air law)", "iwu gbasara ịnya na mbara ikuku."]],
          slides: [
            { title: "Mba ọ bụla na-enye ndị na-anya ya ikike", bullets: ["Kenya: KCAA na-akwado UTOs; RPL site na sistemụ n'ịntanetị", "Nigeria: NCAA Part 21 na-ekpuchi akwụkwọ ikike onye na-anya drone", "Ndị ọzọ: ụlọ ọrụ gọọmentị nke ha"] },
            { title: "Ụzọ a na-agakarị", bullets: ["Ụlọ akwụkwọ a kwadoro", "Tiori: iwu ikuku, mbara ikuku, ihu igwe, ụgbọ ahụ", "Ọzụzụ omume na ule", "Rịọ, wee megharịa ya"] },
            { title: "Lelee tupu ị kwụọ ụgwọ", bullets: ["Ụlọ akwụkwọ ahụ ọ dị na ndepụta a kwadoro?", "Ụgwọ site na ndepụta gọọmentị", "Oge simulator na-enye aka, mana ọ bụghị akwụkwọ ikike"] }
          ],
          sources: [KCAA_UTO, KCAA_PORTAL, KCAA_UAS, NCAA_P21],
          tryIt: "Ọrụ ikpeazụ: mezue omume ise na omume ihe mberede atọ na simulator gị, dee nnọkọ ọ bụla n'akwụkwọ ndekọ gị, ma dee atụmatụ akwụkwọ ikike gị nke otu peeji: ụlọ ọrụ gọọmentị, ụlọ akwụkwọ a kwadoro ị chọtara, akwụkwọ ikike ị chọrọ, nzọụkwụ, akwụkwọ, ọnụ ahịa site n'isi iyi gọọmentị, na ụbọchị a tụrụ anya.",
          youCanNow: "ịnya omume ọkọlọtọ na usoro ihe mberede na simulator, idebe akwụkwọ ndekọ, na ịgbaso atụmatụ doro anya iji nweta akwụkwọ ikike onye na-anya drone n'aka gọọmentị.",
          quickCheck: [
            { objective: "O5", q: "Kedu nzọụkwụ a na-emekarị n'ụzọ inweta akwụkwọ ikike onye na-anya drone?", options: ["Ọzụzụ n'ụlọ ọrụ a kwadoro, wee ule omume", "Ịzụta drone kacha ibu", "Ịmecha naanị ihe ọmụmụ n'ịntanetị", "Ibu ụzọ nyere onye ahịa drone"], answer: 0, why: "Ụzọ a na-agakarị bụ ọzụzụ a kwadoro, tiori, nkuzi ịnya na ule, wee arịrịọ akwụkwọ ikike." },
            { objective: "O5", q: "Weebụsaịtị na-enye akwụkwọ ikike onye na-anya drone n'ịntanetị n'otu ụbọchị n'enweghị ule, maka ụgwọ. Gịnị ka ị ga-eme?", options: ["Kwụọ ụgwọ ngwa ngwa tupu onyinye ahụ agwụ", "Kwụọ ọkara ugbu a", "Lelee peeji gọọmentị nke ụlọ ọrụ ahụ na ndepụta a kwadoro tupu ị kwụọ ihe ọ bụla", "Kesaa ya ndị enyi gị"], answer: 2, why: "Akwụkwọ ikike na-esi n'ụlọ ọrụ gọọmentị na-ahụ maka ụgbọelu; lelee na ụlọ akwụkwọ dị na ndepụta a kwadoro tupu ị kwụọ ụgwọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịbụ onye na-anya drone nwere akwụkwọ ikike",
        questions: [
          { objective: "O4", q: "Njikwa tụfuru signal ya na drone. Ezigbo nzọụkwụ mbụ bụ:", options: ["Gbanyụọ njikwa", "Gbaa ọsọ soro drone", "Nọrọ jụụ, tụzie antenna n'ebe drone dị ma lee return-to-home", "Gbanyụọ moto drone"], answer: 2, why: "Ọtụtụ drone na-alọta n'ụlọ mgbe njikọ furu efu; idozi antenna nwere ike iweghachi ya." },
          { objective: "O4", q: "Ịdọ aka na ntị batrị dị ala dara mgbe otu ahịrị maapụ fọdụrụ. Ị kwesịrị:", options: ["Nya ahịrị ikpeazụ ngwa ngwa", "Kwụsị ọrụ ahụ ma laa n'ụlọ ma ọ bụ rute n'ala n'enweghị nsogbu", "Rịgo elu karịa", "Leghara ya anya"], answer: 1, why: "Agbala batrị dị ala n'ike; rute n'ala n'enweghị nsogbu ma mechaa ya emesịa." },
          { objective: "O2", q: "Gịnị ka akwụkwọ ndekọ onye na-anya drone kwesịrị ide?", options: ["Ụbọchị, ebe, ụgbọ, nkeji, ụdị, ọnọdụ, nsogbu, ihe a mụtara", "Naanị ọdịda", "Naanị ọnụ ahịa drone", "Ọ dịghị ihe; ọ bụ nhọrọ"], answer: 0, why: "Ndekọ zuru ezu na-egosi ahụmahụ ma na-egosi usoro ihe na-eme." },
          { objective: "O5", q: "Ịmecha ihe ọmụmụ a n'ịntanetị ọ na-enye gị akwụkwọ ikike?", options: ["Ee, ozugbo", "Ee, mgbe ule gasịrị", "Naanị na Nigeria", "Mba; akwụkwọ ikike na-esi n'ụlọ ọrụ gọọmentị na-ahụ maka ụgbọelu mgbe ọzụzụ a kwadoro na ule gasịrị"], answer: 3, why: "Ọ bụ naanị ụlọ ọrụ gọọmentị nke mba na-enye akwụkwọ ikike onye na-anya drone." },
          { objective: "O5", q: "Tupu ị kwụọ ụlọ akwụkwọ drone ụgwọ, ị kwesịrị:", options: ["Lelee na ọ dị na ndepụta a kwadoro nke ụlọ ọrụ gọọmentị na-ahụ maka ụgbọelu", "Tụkwasị mgbasa ozi ya obi", "Jụọ naanị enyi gị", "Kwụọ ego n'aka ka oge ghara ịla n'iyi"], answer: 0, why: "Ọ bụ naanị ọzụzụ a kwadoro na-agụ maka akwụkwọ ikike." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drone maka Nlekọta Ugbo 6: Ihe Ọmụmụ Ịnya Drone n'Ịntanetị",
    questions: [
      { objective: "O1", q: "Na Mode 2, osisi aka nri na-achịkwa:", options: ["Ịdị elu na ịtụgharị", "N'ihu/azụ na n'akụkụ", "Ịbawanye ihe igwefoto na-ahụ (zoom)", "Return-to-home"], answer: 1, why: "Osisi aka nri na-achịkwa pitch na roll na Mode 2." },
      { objective: "O1", q: "Throttle na-achịkwa:", options: ["Ịtụgharị", "Ịga n'akụkụ", "Ịrịgo na ịgbadata", "Igwefoto"], answer: 2, why: "Throttle na-eme ka drone gaa elu na ala." },
      { objective: "O1", q: "Ịnya nke ọma na-esite na:", options: ["Obere mmegharị osisi njikwa dị nwayọọ", "Ịkwali osisi njikwa ruo n'isi ya oge ọ bụla", "Ịnya ọsọ ọsọ", "Ịnya n'abalị"], answer: 0, why: "Mmegharị dị nwayọọ na-enye ịnya dị nro, a na-achịkwa achịkwa." },
      { objective: "O1", q: "Kedu nke anaghị adịkarị n'ihuenyo ịnya?", options: ["Ọkwa batrị", "Satịlaịtị GPS", "Ịdị elu", "Ego onye ọrụ ugbo nwere n'ụlọ akụ"], answer: 3, why: "Ihuenyo na-egosi data ịnya, ọ bụghị ego onwe onye." },
      { objective: "O2", q: "Gịnị mere a ga-eji buru ụzọ mee omume na simulator?", options: ["Ọ bụ iwu n'ebe niile", "Mmehie anaghị efu ihe ọ bụla, ọ naghịkwa emebi iwu", "Ọ na-enye gị akwụkwọ ikike", "Ezi drone enweghị ike iguzo n'otu ebe n'ikuku"], answer: 1, why: "Simulator na-ekwe ka ị mụta n'enweghị nsogbu tupu ezi ịnya." },
      { objective: "O2", q: "Ogologo oge ole ka ezigbo nnọkọ omume kwa ụbọchị kwesịrị ịdị?", options: ["Ihe dị ka nkeji 15 ruo 20", "Awa ise", "Otu nkeji", "Naanị otu ugboro n'afọ"], answer: 0, why: "Obere nnọkọ mgbe niile na-ewuli nka kacha mma." },
      { objective: "O2", q: "Omume lawnmower na-akụzi:", options: ["Ịkpụ ahịhịa", "Ịrute n'ala", "Ahịrị kwụ ọtọ dị n'akụkụ ibe ha dị ka ịnya maka ime maapụ", "Ise foto onwe gị (selfie)"], answer: 2, why: "Ọ na-ewuli njikwa a na-eji n'usoro ime maapụ." },
      { objective: "O2", q: "Omume orbit pụtara:", options: ["Ịnya kwụ ọtọ gaa elu", "Iguzo n'otu ebe n'ikuku", "Ịrute n'elu osisi", "Ịgba otu ebe gburugburu ka igwefoto na-ele ya"], answer: 3, why: "Orbit na-eme ka igwefoto na-ele otu ihe mgbe a na-agba ya gburugburu." },
      { objective: "O2", q: "Mgbe ị na-anya nose-in, njikwa na-adị ka:", options: ["Aka ekpe na aka nri agbanweela", "Otu ihe ahụ kpọmkwem", "Ọ dị nwayọọ karị", "E kpọchiri ha"], answer: 0, why: "Drone chere gị ihu, ya mere aka ekpe na aka nri agbanweela n'anya gị." },
      { objective: "O3", q: "N'ọnọdụ GPS, mgbe ị hapụrụ osisi njikwa, drone ahụ:", options: ["Na-ada", "Na-eguzo n'otu ebe", "Na-alọta n'ụlọ", "Na-agba gburugburu"], answer: 1, why: "Positioning satịlaịtị na-eme ka drone guzoro n'otu ebe." },
      { objective: "O3", q: "Drone nwere ike ịdaba n'ọnọdụ attitude mgbe:", options: ["Batrị juru eju", "Mbara igwe doro anya", "GPS adịghị ike, dịka ọmụmaatụ n'okpuru osisi gbara ọkpụrụkpụ ma ọ bụ n'akụkụ ihe ígwè", "Ị na-ese foto"], answer: 2, why: "Signal satịlaịtị na-adịghị ike na-ewepụ iguzo n'otu ebe." },
      { objective: "O3", q: "N'ọnọdụ attitude mgbe ikuku na-efe, drone ahụ ga-:", options: ["Eguzo n'otu ebe nke ọma", "Erute n'ala n'onwe ya", "Arịgo elu ruo mgbe ebighị ebi", "Akpafu soro ikuku"], answer: 3, why: "Ọ na-ejide ịdị elu mana ọ naghị eguzo n'otu ebe." },
      { objective: "O3", q: "Ọnọdụ sport na-apụtakarị:", options: ["Ịnya ọsọ ọsọ nwere nchekwa dị ntakịrị", "Ise vidiyo nwayọọ na dị nro", "Ịrute n'ala n'onwe ya", "Enweghị igwefoto"], answer: 0, why: "Ọnọdụ sport na-ahapụ ihe nchekwa maka ọsọ." },
      { objective: "O4", q: "Mgbe ọdịda ma ọ bụ ihe mberede dị njọ ọ bụla gasịrị, ị kwesịrị:", options: ["Zoo ya", "Mee ka ebe ahụ dị nchebe, lelee mmebi, dee ya, ma kọọ ya ma ọ dị mkpa", "Nya ọzọ ozugbo n'eleleghị ya", "Hichapụ ndekọ ahụ"], answer: 1, why: "Nchekwa bụ ụzọ, wee ndekọ na akụkọ ọ bụla a chọrọ." },
      { objective: "O4", q: "Mgbe GPS furu efu, atụmatụ kacha enweghị nsogbu bụ:", options: ["Nya ya gaa ebe dị anya karịa", "Rịgo elu dịka o kwere mee", "Nya ya nwayọọ laghachi site n'aka megide ikuku ma rute n'ala n'oge", "Hapụ osisi njikwa ma chere"], answer: 2, why: "Njikwa site n'aka na ịrute n'ala n'oge na-egbochi fly-away." },
      { objective: "O4", q: "Fly-away bụ:", options: ["Ịnya nkịtị maka ime maapụ", "Ụdị nku ifufe (propeller)", "Ebe a na-erute drone n'ala", "Drone na-efepụ, onye na-anya ya enweghịzi ike ịchịkwa ya"], answer: 3, why: "Ọ bụ ịtụfu njikwa, na-esokarị nsogbu GPS ma ọ bụ njikọ." },
      { objective: "O2", q: "N'akwụkwọ ndekọ, oge simulator na oge ezi ịnya kwesịrị ịbụ:", options: ["N'ogidi dị iche iche", "A gbakọtara ha n'enweghị aha", "A dekwaghị ha", "A na-ede ha naanị ma ọ karịrị otu awa"], answer: 0, why: "Ụlọ ọrụ gọọmentị na ndị nkuzi kwesịrị ịhụ ụdị ọ bụla iche." },
      { objective: "O5", q: "Na Kenya, a na-akpọ ụlọ akwụkwọ drone a kwadoro:", options: ["Otu ndị na-anya drone", "Unmanned Aircraft Systems Training Organizations (UTOs)", "Ụlọ ahịa ọgwụ anụmanụ na ihe ọkụkụ (agrovets)", "Ụlọ ọgwụ ihe ọkụkụ"], answer: 1, why: "KCAA na-akwado ma depụta UTOs." },
      { objective: "O5", q: "Kedu isiokwu bụ akụkụ nke ọzụzụ tiori onye na-anya drone?", options: ["Isi nri", "Iwu egwuregwu bọọlụ", "Iwu ikuku, mbara ikuku na ihu igwe", "Egwu"], answer: 2, why: "Ndị na-anya drone ga-amarịrị iwu ikuku, mbara ikuku, ihu igwe na ụgbọ ha." },
      { objective: "O5", q: "Ebee ka ị ga-elele ụgwọ akwụkwọ ikike?", options: ["Ozi na soshal midia", "Mgbasa ozi onye na-ere ahịa", "Ihe enyi ochie chetara", "Ndepụta ụgwọ gọọmentị nke ụlọ ọrụ na-ahụ maka ụgbọelu"], answer: 3, why: "Ụgwọ na-agbanwe; ọ bụ naanị ndepụta gọọmentị ka a pụrụ ịtụkwasị obi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 4, 8, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, mee omume ma ọ bụ dozie akụkụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Omume ise", objective: "O2", notYet: "Otu omume ma ọ bụ karịa adịbeghị mma ugboro atọ n'usoro.", meets: "Hover, box, figure eight, orbit na lawnmower, a nyara nke ọ bụla nke ọma ugboro atọ n'usoro.", exceeds: "Na-anyakwa box na figure eight nke ọma nose-in." },
      { name: "Omume ihe mberede", objective: "O4", notYet: "Ụjọ na-ejide ya ma ọ bụ ọ na-awụfe nzọụkwụ n'omume ihe mberede.", meets: "Na-agbaso nzọụkwụ ziri ezi maka njikọ efuola, batrị dị ala na GPS efuola.", exceeds: "Na-erute n'ala n'enweghị nsogbu site n'ọnọdụ attitude megide ikuku n'enweghị onye nyere aka." },
      { name: "Akwụkwọ ndekọ", objective: "O2", notYet: "Nnọkọ ụfọdụ adịghị ma ọ bụ ndekọ enweghị ihe ndị bụ isi.", meets: "E dere nnọkọ ọ bụla nwere ụbọchị, simulator, nkeji, ụdị, ọnọdụ, nsogbu na ihe a mụtara.", exceeds: "Oge simulator na ezi oge dị n'ogidi dị iche iche, e chekwakwara ndekọ ahụ n'ebe ọzọ." },
      { name: "Atụmatụ akwụkwọ ikike", objective: "O5", notYet: "Ụlọ ọrụ gọọmentị, akwụkwọ ikike ma ọ bụ nzọụkwụ adịghị, ma ọ bụ e chepụtara ọnụ ahịa n'echiche.", meets: "Ụlọ ọrụ gọọmentị, ụlọ akwụkwọ a kwadoro a chọtara, akwụkwọ ikike a chọrọ, nzọụkwụ, akwụkwọ, ọnụ ahịa site n'isi iyi gọọmentị na ụbọchị a tụrụ anya.", exceeds: "Akpọtụrụla otu ụlọ akwụkwọ dị na ndepụta a kwadoro ma dee ụbọchị o lelere ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe debanyere aha n'ụlọ ọrụ ọzụzụ a kwadoro n'ime ụbọchị 90 (nnyocha nsochi)",
      "Ndị na-amụ ihe nwetara akwụkwọ ikike onye na-anya drone n'ime otu afọ",
      "Ndị na-amụ ihe kwuru na ha na-anya naanị mgbe ha nwere ndebanye aha, akwụkwọ ikike na ikike ndị mba ha chọrọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ ekwentị nwere simulator drone n'efu ma ọ bụ dị ọnụ ala; njikwa (controller) ma ọ bụrụ na e nwere",
      "Akwụkwọ ndekọ e ji akwụkwọ mee, spreadsheet ma ọ bụ app ndekọ",
      "Ịntanetị iji gaa na peeji ụlọ ọrụ gọọmentị na-ahụ maka ụgbọelu na ndepụta ụlọ akwụkwọ a kwadoro",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere obere nnọkọ simulator kwa ụbọchị nke nkeji 15 ruo 20 n'ime izu ole na ole"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee omume mbụ n'ihuenyo a na-ekerịta ka ndị na-amụ ihe hụ mmegharị osisi njikwa.",
      "Mee ka o doo anya na ihe ọmụmụ a anaghị enye akwụkwọ ikike ma ọ bụ ikike ịnya ezi drone.",
      "Nwee obere nnọkọ nlele omume ebe ndị na-amụ ihe na-egosi omume ọ bụla ugboro atọ n'usoro.",
      "Lelee ndepụta ụlọ ọrụ ọzụzụ a kwadoro na ndị na-amụ ihe ma dọọ ha aka na ntị ka ha ghara ịkwụ ụgwọ n'ụlọ akwụkwọ na-adịghị na ndepụta.",
      "Jiri rubric tụọ akara omume, akwụkwọ ndekọ na atụmatụ akwụkwọ ikike, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
