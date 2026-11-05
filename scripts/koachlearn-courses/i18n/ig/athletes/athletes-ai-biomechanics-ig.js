"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-ai-biomechanics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-biomechanics-ig",
  lang: "ig",
  translationOf: "athletes-ai-biomechanics",
  category: "Athletes",
  name: "AI na Biomechanics (Otu Ahụ Si Emegharị)",
  skills: "Ịkọwa okwu biomechanics ndị bụ isi, Ịse vidiyo mmegharị ahụ maka nyocha, Ikewa nka n'akụkụ (phases), Iji ngwa pose estimation na nlele foto n'otu n'otu, Iji onye nkuzi gị tụnyere usoro gị tupu na mgbe e mesịrị",
  outcome: "ịse vidiyo otu mmegharị egwuregwu site n'akụkụ ziri ezi, kewaa ya n'akụkụ, jiri nlele foto n'otu n'otu (na, ọ bụrụ na i họrọ, ngwa pose estimation n'efu) kọwaa otu ihe gbasara usoro (technique), ma mee ntụnyere tupu na mgbe e mesịrị ka gị na onye nkuzi gị lelee.",
  about: [
    "Biomechanics bụ ọmụmụ otu ahụ mmadụ si emegharị. Ihe ọmụmụ a bụ maka ndị egwuregwu na ndị nkuzi egwuregwu (coach) chọrọ ịghọta usoro ka mma site n'iji igwefoto ekwentị na ngwa AI, n'egwuregwu dị ka ịgba ọsọ, ịwụ elu, ịtụ ihe, ịtụ bọọlụ n'ime nkata, ịkụ ihe na ịgba bọọlụ.",
    "Ị ga-amụta okwu ole na ole dị mkpa, se vidiyo mmegharị nke ọma, kewaa ya n'akụkụ, ma jiri slow motion, nlele foto n'otu n'otu na ngwa AI na-achọta ọnọdụ ahụ iji hụ ihe na-eme. Mgbe ahụ gị na onye nkuzi gị ga-atụnyere tupu na mgbe e mesịrị.",
    "Nke a bụ agụmakwụkwọ n'ozuzu. Mgbanwe n'usoro kwesịrị isi n'aka onye nkuzi gị, ajụjụ gbasara mgbu, mmerụ ahụ ma ọ bụ ịlaghachi n'egwuregwu na-aga n'aka onye na-elekọta ahụ ndị egwuregwu (athletic trainer), physical therapist ma ọ bụ dọkịta. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\"; e nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ otu mmegharị site n'egwuregwu gị. Se ya vidiyo site n'akụkụ na site n'ihu, kewaa ya n'akụkụ, jiri nlele foto n'otu n'otu kọwaa otu ihe gbasara usoro ya na screenshot, gị na onye nkuzi gị kwekọrịta n'otu cue, mee ya, ma se vidiyo ọzọ mgbe izu abụọ gachara maka ntụnyere tupu na mgbe e mesịrị n'akụkụ n'akụkụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu na ndị nkuzi egwuregwu n'egwuregwu dị ka ịgba ọsọ, ịwụ elu, ịtụ ihe, ịtụ bọọlụ n'ime nkata, ịkụ ihe na ịgba bọọlụ, ndị chọrọ ịhụ usoro nke ọma site n'iji igwefoto ekwentị na ngwa AI n'efu.",
    startingPoint: "Ha nwere ike ịse vidiyo n'ekwentị ma lee ya ọzọ. Ọtụtụ esebeghị vidiyo maka nyocha, kewabeghị nka n'akụkụ, ma ọ bụ jirighị ngwa pose estimation.",
    gap: "Ọ na-esi ike ịhụ usoro mgbe ọ na-aga ọsọ ọsọ, vidiyo a sereghị nke ọma ma ọ bụ ịtụkwasị ọnụọgụ app obi karịa na-eduga n'echiche ezighi ezi. Ndị na-amụ ihe kwesịrị ịse vidiyo nke ọma, kọwaa otu ihe nwere ihe akaebe, ma gị na onye nkuzi ha lelee mgbanwe, ka oge mmega ahụ gaa n'ezi ndozi.",
    constraints: [
      "Okwu dị mfe; a na-akọwa okwu teknụzụ ole na ole mgbe mbụ e jiri ha",
      "Ngwaọrụ: ekwentị nwere slow motion; app pose n'efu bụ nhọrọ",
      "Oge: ihe dị ka nkeji ise kwa nkuzi, gbakwunye ịse vidiyo n'oge mmega ahụ",
      "A chọrọ ikike tupu ịse ndị otu gị ma ọ bụ ụmụaka vidiyo, ma a ga-elele iwu nzuzo nke app pose",
      "Agụmakwụkwọ n'ozuzu: mgbanwe usoro na-esi n'aka onye nkuzi, mgbu ma ọ bụ mmerụ ahụ na-aga n'aka athletic trainer, physical therapist ma ọ bụ dọkịta"
    ],
    prerequisites: "Ọ dịghị. Ndị na-ejibeghị ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị otu mmegharị site n'egwuregwu gị", action: "ịkọwa okwu biomechanics ndị bụ isi dị ka kinetic chain, range of motion na center of mass", standard: "jiri ezi ọmụmaatụ maka okwu ọ bụla" },
    { id: "O2", condition: "Site n'iji ekwentị n'oge mmega ahụ", action: "ịse vidiyo mmegharị site n'akụkụ na site n'ihu, n'ebe igwefoto akaara akara, na slow motion", standard: "opekata mpe ugboro atọ kwa akụkụ, na ikike onye ọ bụla e sere" },
    { id: "O3", condition: "Mgbe e nyere gị vidiyo mmegharị gị", action: "ikewa nka ahụ n'akụkụ ma were foto dị mkpa (key frame) nwere aha maka akụkụ ọ bụla", standard: "ka onye nkuzi gị kwadoro akụkụ ndị ahụ" },
    { id: "O4", condition: "Mgbe e nyere gị ngwa pose estimation ma ọ bụ ihe ọ rụpụtara", action: "ịkọwa ihe pose estimation na-egosi ma kpọọ aha ihe nwere ike ime ka ọ mehie", standard: "were akụkụ (angle) ya dị ka atụmatụ, ọ bụghị ntụle ụlọ nyocha" },
    { id: "O5", condition: "Mgbe e nyere gị foto ndị dị mkpa gị", action: "ịkọwa otu ihe gbasara usoro n'okwu na-ekpeghị ikpe, ya na screenshot, ma mee ya ajụjụ maka onye nkuzi gị", standard: "na-arụ naanị otu ihe n'otu oge" },
    { id: "O6", condition: "Mgbe i mesịrị cue onye nkuzi gị ihe dị ka izu abụọ", action: "ime ntụnyere tupu na mgbe e mesịrị n'akụkụ n'akụkụ, nke e sere n'otu ụzọ ahụ", standard: "kwụsị ma chọọ enyemaka ma ọ bụrụ na mgbanwe ahụ na-eweta mgbu" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhụ mmegharị ahụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Biomechanics n'okwu dị mfe",
          minutes: 5,
          goal: "Kọwaa okwu biomechanics ise bụ isi site n'iji ọmụmaatụ sitere n'egwuregwu gị.",
          text: [
            "Biomechanics na-ele otu ike (force) na ọnọdụ ahụ si emepụta mmegharị. Ndị nkuzi na-eji ya eme ka usoro dị mma karịa ma belata ihe egwu mmerụ ahụ.",
            "Okwu ise bara uru: Joint angle (akụkụ dị n'ikpere, n'úkwù ma ọ bụ n'ikpere aka). Range of motion (otú nkwonkwo si aga tere aka). Center of mass (ebe ahụ gị na-edozi onwe ya). Kinetic chain (otu ike si n'ala gafere ụkwụ, úkwù, ahụ na aka). Ground reaction force (nkwagide ala na-enyeghachi gị mgbe ị kwagidere ya).",
            "Ọmụmaatụ: n'ịtụ bọọlụ n'ime nkata (jump shot), ike na-amalite n'ụkwụ gị, gafere úkwù na ahụ gị, wee kwụsị n'aka na n'nkwonkwo aka gị. Nke ahụ bụ kinetic chain. Ngwa enyemaka AI nwere ike ịkọwa okwu ọ bụla na ọmụmaatụ sitere n'egwuregwu gị."
          ],
          words: [["Biomechanics", "ọmụmụ otu ike na ọnọdụ ahụ si emepụta mmegharị."], ["Kinetic chain", "otu ike si n'otu akụkụ ahụ gafere na nke ọzọ, dị ka ụkwụ gaa n'úkwù gaa n'aka."], ["Center of mass", "ebe ahụ gị na-edozi onwe ya (ebe nguzozi ya)."]],
          slides: [
            { title: "Biomechanics", bullets: ["Otu ike na ọnọdụ ahụ si emepụta mmegharị", "Usoro na-arụ ọrụ nke ọma karịa", "Ihe egwu mmerụ ahụ dị ala"] },
            { title: "Okwu ise dị mkpa", bullets: ["Joint angle, range of motion", "Center of mass", "Kinetic chain, ground reaction force"] },
            { title: "Ọmụmaatụ jump shot", bullets: ["Ụkwụ -> úkwù -> ahụ -> aka -> nkwonkwo aka", "Nke ahụ bụ kinetic chain"] }
          ],
          tryIt: "Họrọ otu mmegharị site n'egwuregwu gị. Rịọ ngwa enyemaka AI ka ọ kọwaa kinetic chain dị na ya n'okwu dị mfe. Dee ya n'okwu nke gị n'ahịrịokwu atọ.",
          youCanNow: "ịkọwa okwu biomechanics ndị bụ isi na ọmụmaatụ sitere n'egwuregwu gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka range of motion na-akọwa?", options: ["Otú nkwonkwo si aga tere aka", "Otú ị na-agba ọsọ ọsọ", "Otú i si dị arọ", "Otú ị na-eme mmega ahụ ogologo oge"], answer: 0, why: "Range of motion bụ otú nkwonkwo nwere ike isi aga tere aka." },
            { objective: "O1", q: "Ị chọrọ ịkọwa kinetic chain dị na jump shot gị. Gịnị ka ị ga-akọwa?", options: ["Naanị mmegharị nkwonkwo aka", "Otu ike si n'ụkwụ gafere n'ahụ ruo na bọọlụ", "Agba bọọlụ ahụ", "Otú mkpọtụ ndị na-ekiri si dị"], answer: 1, why: "Kinetic chain bụ otu ike si n'otu akụkụ ahụ gafere na nke ọzọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịse vidiyo mmegharị maka nyocha",
          minutes: 5,
          goal: "Se vidiyo mmegharị site n'akụkụ ziri ezi ka e nwee ike inyocha ya.",
          text: [
            "Nyocha chọrọ ezigbo vidiyo. Se site n'akụkụ (iji hụ joint angle n'ihu na azụ) na site n'ihu ma ọ bụ azụ (iji hụ ikpere na-agbada n'ime, úkwù na-ada ma ọ bụ aka na-agafe ibe ha). Debe igwefoto ihe dị ka n'ogo úkwù, kwụsie ike, ma tere aka nke ọma ka ahụ niile pụta.",
            "Jiri ọnọdụ slow motion nke ekwentị gị na ezigbo ìhè. Yiri uwe na-egosi ọdịdị ahụ gị, ma tinye akara tep n'ala ka i nwee ike ịse site n'otu ebe ahụ oge ọzọ.",
            "Se ọtụtụ ugboro (reps), ọ bụghị naanị otu, ma se mgbe ahụ gị kpọrọ ọkụ (warm up). Nweta ikike tupu ịse ndị ọzọ, ma soro iwu otu egwuregwu gị."
          ],
          steps: ["Debe ekwentị n'ogo úkwù n'elu tripod ma ọ bụ ihe njide.", "Se site n'akụkụ.", "Se site n'ihu ma ọ bụ azụ.", "Jiri slow motion na ezigbo ìhè.", "Kaa akara ebe igwefoto na onye egwuregwu ga-anọ maka oge ọzọ.", "Se ugboro atọ ruo ise."],
          words: [["Sagittal view", "nlele site n'akụkụ, na-egosi mmegharị n'ihu na azụ."], ["Frontal view", "nlele site n'ihu ma ọ bụ azụ, na-egosi mmegharị n'aka nri na aka ekpe."]],
          slides: [
            { title: "Akụkụ abụọ", bullets: ["Akụkụ: joint angle", "Ihu ma ọ bụ azụ: ikpere, úkwù, aka"] },
            { title: "Ndozi igwefoto", bullets: ["N'ogo úkwù, kwụsiri ike", "Ahụ niile n'ime foto", "Slow motion, ezigbo ìhè"] },
            { title: "Nke a ga-emeghachi", bullets: ["Kaa akara ebe igwefoto na onye egwuregwu", "Ugboro atọ ruo ise mgbe ahụ kpọrọ ọkụ"] }
          ],
          tryIt: "Se otu mmegharị vidiyo site n'akụkụ na site n'ihu, ugboro atọ n'otu n'otu, ekwentị gị n'ogo úkwù, slow motion gbanyere. Kaa akara ebe ndị ahụ.",
          youCanNow: "ịse vidiyo mmegharị nke ọma maka nyocha biomechanics.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka nlele site n'akụkụ na-egosi nke ọma?", options: ["Ikpere na-agbada n'ime", "Ndị na-ekiri", "Mmegharị n'ihu na azụ na joint angle", "Aha akpụkpọ ụkwụ gị"], answer: 2, why: "Nlele site n'akụkụ na-egosi mmegharị n'ihu na azụ na joint angle nke ọma." },
            { objective: "O2", q: "Ị chọrọ ịse mmalite ọsọ onye otu gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Se ya n'ajụghị ya", "Tinye ya n'ịntanetị ozugbo", "Jiri zoom site n'ebe dị anya", "Rịọ ya ikike"], answer: 3, why: "Nweta ikike mgbe niile tupu ịse ndị ọzọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ikewa nka n'akụkụ",
          minutes: 5,
          goal: "Kewaa mmegharị gị n'akụkụ ma chọta ọnọdụ ndị dị mkpa.",
          text: [
            "Ọtụtụ nka egwuregwu nwere akụkụ (phases). Ịtụ ihe: ịkwado aka (wind-up), nzọụkwụ, ịdọghachi aka, ime ka ọ gaa ọsọ, ịhapụ ya (release), ịga n'ihu mgbe ọ hapụrụ (follow-through). Mmalite ọsọ: njikere (set), ịkwapụ, ịkwanye, mgbanwe. Ịwụ elu: ịbịaru nso, ịkwụsị ụkwụ, ịwụli elu, ịnọ n'ikuku, ịda n'ala.",
            "N'akụkụ ọ bụla, e nwere ọnọdụ dị mkpa ndị nkuzi na-ele: ebe ụkwụ dara, akụkụ ikpere mgbe ị na-awụli elu, akụkụ ahụ mgbe ị na-ahapụ ihe. Onye nkuzi gị nwere ike ịgwa gị ndị kacha mkpa maka gị.",
            "Jiri nlele foto n'otu n'otu n'app vidiyo nke ekwentị gị ma ọ bụ ngwa vidiyo n'efu. Kwụsịtụ na foto dị mkpa maka akụkụ ọ bụla ma were screenshot. Rịọ ngwa enyemaka AI ka o depụta akụkụ a na-ahụkarị na nka gị, wee jiri onye nkuzi gị kwado ha."
          ],
          steps: ["Rịọ AI maka akụkụ a na-ahụkarị na nka gị.", "Jiri onye nkuzi gị kwado akụkụ ndị ahụ.", "Gaa n'ime vidiyo gị foto n'otu n'otu.", "Were screenshot nke foto dị mkpa maka akụkụ ọ bụla.", "Dee aha na screenshot ọ bụla."],
          words: [["Akụkụ (phase)", "otu akụkụ nke mmegharị, dị ka ịkwado aka ma ọ bụ ịhapụ ihe."], ["Ọnọdụ dị mkpa (key position)", "ọnọdụ ahụ dị mkpa n'otu oge."], ["Foto n'otu n'otu (frame by frame)", "ịgafe vidiyo otu foto n'otu oge."]],
          slides: [
            { title: "Nka nwere akụkụ", bullets: ["Ịtụ ihe: site na wind-up ruo follow-through", "Mmalite ọsọ: site na set ruo mgbanwe", "Ịwụ elu: site n'ịbịaru nso ruo ịda n'ala"] },
            { title: "Ọnọdụ dị mkpa", bullets: ["Ebe ụkwụ dara", "Akụkụ ikpere mgbe ị na-awụli elu", "Akụkụ ahụ mgbe ị na-ahapụ ihe"] },
            { title: "Foto n'otu n'otu", bullets: ["Kwụsịtụ na foto dị mkpa ọ bụla", "Were screenshot ma dee aha", "Jiri onye nkuzi gị kwado akụkụ ndị ahụ"] }
          ],
          tryIt: "Kewaa mmegharị i sere n'akụkụ. Were screenshot ma dee aha n'otu foto dị mkpa maka akụkụ ọ bụla.",
          youCanNow: "ikewa nka n'akụkụ ma were ọnọdụ ya ndị dị mkpa.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ key frame (foto dị mkpa)?", options: ["Otu foto na-egosi ọnọdụ dị mkpa n'otu akụkụ", "Sekọnd mbụ nke vidiyo ọ bụla", "Ihe nzacha vidiyo (filter)", "Atụmatụ mmega ahụ"], answer: 0, why: "Key frame na-ejide ọnọdụ dị mkpa nke otu akụkụ." },
            { objective: "O3", q: "AI tụrụ aro akụkụ anọ maka ịtụ ihe gị. Gịnị ka ị ga-eme ọzọ?", options: ["Jiri ha n'eleleghị ha", "Jiri onye nkuzi gị kwado ha", "Hichapụ vidiyo gị", "Gbakwunye akụkụ iri ọzọ"], answer: 1, why: "Onye nkuzi gị na-akwado akụkụ na ọnọdụ dị mkpa maka egwuregwu gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhụ mmegharị ahụ",
        questions: [
          { objective: "O1", q: "Gịnị bụ kinetic chain?", options: ["Akụkụ igwe kwụ otu ebe", "Igwe ibu arọ", "Otu ike si n'otu akụkụ ahụ gafere na nke ọzọ", "Ụdị akpụkpọ ụkwụ"], answer: 2, why: "Ike na-esi n'ụkwụ gaa n'úkwù gaa n'ahụ gaa n'aka." },
          { objective: "O2", q: "Kedu nlele igwefoto kacha egosi ikpere na-agbada n'ime?", options: ["Nlele site n'ihu ma ọ bụ azụ", "Naanị nlele site n'akụkụ", "Naanị site n'elu", "Foto nso nke ihu"], answer: 0, why: "Mmegharị n'aka nri na aka ekpe na-egosi nke ọma site n'ihu ma ọ bụ azụ." },
          { objective: "O2", q: "N'ogo ole ka igwefoto kwesịrị ịdị?", options: ["N'ala", "N'elu isi gị", "Ebe ọ bụla", "Ihe dị ka n'ogo úkwù"], answer: 3, why: "Ogo úkwù na-ebelata ka ahụ si gbagọọ na foto." },
          { objective: "O2", q: "Gịnị mere a ga-eji se ọtụtụ ugboro?", options: ["Iji mejupụta ebe nchekwa", "Otu ugboro nwere ike ọ gaghị abụ ka ọ na-adịkarị", "Ọ bụ iwu", "Iji mee ka ọ dị ogologo"], answer: 1, why: "Ọtụtụ ugboro na-egosi ezi ụdị mmegharị gị." },
          { objective: "O3", q: "Onye kwesịrị ịkwado akụkụ na ọnọdụ dị mkpa maka gị?", options: ["Vidiyo ọ bụla", "Onye nkuzi gị", "Onye na-akwado otu gị (fan)", "Ọ dịghị onye"], answer: 1, why: "Onye nkuzi gị maara ihe dị mkpa n'usoro gị." }
        ]
      }
    },
    {
      name: "Isi 2: Ngwa AI na ezi mgbanwe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pose estimation: AI na-achọta nkwonkwo gị",
          minutes: 5,
          goal: "Kọwaa ihe pose estimation na-eme na oke ya.",
          text: [
            "Pose estimation bụ AI na-achọta ebe dị n'ahụ, dị ka ubu, ikpere aka, úkwù, ikpere na nkwonkwo ụkwụ, na foto ma ọ bụ vidiyo, wee jikọọ ha ka ọ bụrụ ihe osise mkpịsị (stick figure). Ụfọdụ app na-atụkwa atụmatụ joint angle.",
            "Ngwa ndị a bara uru maka ịhụ ọnọdụ na ịtụnyere ugboro dị iche iche, mana ha na-emehie: uwe sara mbara, mmegharị ọsọ ọsọ, foto gbara ọchịchịrị (blur), ìhè na-adịghị mma, ndị ọzọ nọ na foto ma ọ bụ akụkụ ahụ zoro n'azụ nke ọzọ nwere ike ime ka ha mehie. Akụkụ (angle) sitere na vidiyo 2D nke ekwentị bụ atụmatụ, ọ bụghị ntụle ụlọ nyocha.",
            "Ọ bụrụ na i nwalee app pose, lelee iwu nzuzo ya (privacy policy), n'ihi na vidiyo ahụ gị bụ ozi nke onwe gị. Maka ụmụaka, nne ma ọ bụ nna kwesịrị ikwado ya. Lelee mgbe niile stick figure ahụ na ezi vidiyo tupu ị tụkwasị ọnụọgụ obi."
          ],
          steps: ["Họrọ vidiyo doro anya nwere ezigbo ìhè.", "Ọ bụrụ na ị na-eji app pose, buru ụzọ lelee iwu nzuzo ya.", "Gbaa vidiyo ahụ ma lee stick figure ahụ.", "Lelee na ọ dabara ezi ahụ na foto dị mkpa ọ bụla.", "Were akụkụ (angle) dị ka atụmatụ."],
          words: [["Pose estimation", "AI na-achọta ebe dị n'ahụ na vidiyo ma see stick figure."], ["Vidiyo 2D", "vidiyo dị larịị site n'otu igwefoto; ọ pụghị ịtụ omimi (depth) nke ọma."]],
          slides: [
            { title: "Pose estimation", bullets: ["AI na-achọta ubu, úkwù, ikpere, nkwonkwo ụkwụ", "Ọ na-ese stick figure", "Ụfọdụ app na-atụ atụmatụ angle"] },
            { title: "Oke ya", bullets: ["Blur, uwe sara mbara, ìhè na-adịghị mma", "Akụkụ ahụ zoro ezo", "Angle 2D bụ atụmatụ"] },
            { title: "Jiri ya n'enweghị nsogbu", bullets: ["Lelee iwu nzuzo ya", "Ụmụaka: nne ma ọ bụ nna na-akwado", "Lelee ya na ezi vidiyo"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka ọ kọwaa otu pose estimation si arụ ọrụ na ụzọ atọ o nwere ike isi mehie. Mgbe ahụ lee foto ndị dị mkpa gị ma dee ebe ngwa pose nwere ike inwe nsogbu.",
          youCanNow: "ịkọwa ihe pose estimation na-eme na ihe mere a ga-eji lelee ọnụọgụ ya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ngwa pose estimation na-ese na vidiyo?", options: ["Eserese ọkụkụ obi", "Maapụ ihu igwe", "Stick figure n'elu nkwonkwo ahụ", "Akara egwuregwu"], answer: 2, why: "Pose estimation na-achọta ebe dị n'ahụ ma jikọọ ha ka stick figure." },
            { objective: "O4", q: "App pose kwuru na akụkụ ikpere gị bụ ogo 143 na vidiyo gbara blur. Gịnị ka ị ga-eme?", options: ["Kwere ya kpọmkwem", "Kesaa ya dị ka nsonaazụ ụlọ nyocha", "Gbanwee usoro gị ozugbo", "Were ya dị ka atụmatụ ma lelee foto ahụ n'onwe gị"], answer: 3, why: "Blur na vidiyo otu ekwentị na-eme ka angle bụrụ atụmatụ, ọ bụghị ntụle." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịkọwa otu ihe gbasara usoro",
          minutes: 5,
          goal: "Kọwaa otu ihe gbasara usoro nke ọma site n'iji screenshot gị.",
          text: [
            "Họrọ otu ihe ị ga-ele, ọ bụghị iri. Dịka ọmụmaatụ: \"Mgbe m na-awụli elu, ikpere m na-ehulata obere karịa n'ụkwụ aka ekpe m karịa n'aka nri.\" ma ọ bụ \"Mgbe m na-ahapụ ihe, ikpere aka m dị n'okpuru ubu m.\"",
            "Kọwaa ya na ihe akaebe: akụkụ (phase), screenshot, na ihe ị hụrụ ma e jiri ya tụnyere ugboro ọzọ ma ọ bụ ihe nlereanya onye nkuzi gị nyere gị. Ngwa enyemaka AI nwere ike inyere gị aka dee nkọwa doro anya na-ekpeghị ikpe: \"Nyere m aka kọwaa ihe m hụrụ na foto abụọ ndị a n'okwu dị mfe na-ekpeghị ikpe.\" Arịọla ya ka ọ chọpụta ọrịa ma ọ bụ nye ọgwụgwọ maka mgbu.",
            "Weta ya n'aka onye nkuzi gị dị ka ajụjụ: \"Ahụrụ m nke a. Ọ bụ ihe anyị kwesịrị ịrụ ọrụ na ya? Kedu cue m ga-eji?\""
          ],
          steps: ["Họrọ otu ihe gbasara usoro.", "Họrọ screenshot ndị na-egosi ya.", "Dee nkọwa na-ekpeghị ikpe ya na akụkụ ya.", "Jụọ onye nkuzi gị ma ọ dị mkpa na cue ị ga-eji."],
          words: [["Cue", "ntụziaka dị mkpụmkpụ na-enyere gị aka ịgbanwe mmegharị, dị ka \"tall chest\" (bulie obi gị elu)."], ["Nkọwa na-ekpeghị ikpe", "ịkọwa ihe ị hụrụ n'ekpeghị ikpe ma ọ bụ ịchọpụta ọrịa."]],
          slides: [
            { title: "Otu ihe, ọ bụghị iri", bullets: ["Ọmụmaatụ: ikpere aka ekpe na-ehulata obere mgbe a na-awụli elu"] },
            { title: "Gosi ihe akaebe", bullets: ["Akụkụ na screenshot", "E jiri ya tụnyere ugboro ọzọ ma ọ bụ ihe nlereanya", "Okwu na-ekpeghị ikpe; enweghị nchọpụta ọrịa"] },
            { title: "Jụọ onye nkuzi gị", bullets: ["\"Anyị kwesịrị ịrụ ọrụ na nke a?\"", "\"Kedu cue m ga-eji?\""] }
          ],
          tryIt: "Dee otu ihe gbasara usoro n'ahịrịokwu abụọ na-ekpeghị ikpe, ya na akụkụ ya na screenshot. Jiri AI mee ka o doo anya karịa, wee buru ya gaa n'aka onye nkuzi gị.",
          youCanNow: "ịkọwa otu ihe gbasara usoro na ihe akaebe ma mee ya ajụjụ maka onye nkuzi gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ nkọwa usoro na-ekpeghị ikpe?", options: ["Ikwu ihe ị hụrụ n'achọpụtaghị ọrịa", "Ịkpọ aha mmerụ ahụ", "Ikwu na onye egwuregwu ahụ adịghị mma", "Ịkọ ihe kpatara mgbu"], answer: 0, why: "Nkọwa na-ekpeghị ikpe na-akọ ihe a na-ahụ anya ma hapụ nchọpụta ọrịa." },
            { objective: "O5", q: "Ị hụrụ ihe atọ ị chọrọ idozi. Gịnị ka ị ga-ebuga n'aka onye nkuzi gị?", options: ["Ha atọ n'otu oge", "Otu ihe ya na akụkụ ya na screenshot", "Ọ dịghị ihe ruo mgbe oge egwuregwu gwụrụ", "Atụmatụ mmega ahụ ọhụrụ sitere n'AI"], answer: 1, why: "Ịrụ ọrụ n'otu ihe gbasara usoro n'otu oge na-eme ka mgbanwe doo anya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tupu na mgbe e mesịrị: ọ gbanwere?",
          minutes: 5,
          goal: "Mee ntụnyere n'akụkụ n'akụkụ iji hụ ma usoro ọ gbanwere.",
          text: [
            "Mgbe i mesịrị cue onye nkuzi gị izu ole na ole, se vidiyo ọzọ site n'otu ebe ahụ e kaara akara, otu akụkụ ahụ, otu ìhè ahụ. Tinye foto dị mkpa nke tupu na nke mgbe e mesịrị n'akụkụ n'akụkụ na slaịdị ma ọ bụ na Canva.",
            "Lee otu ọnọdụ dị mkpa ahụ na nke ọ bụla. Mgbanwe ahụ ọ dị ebe ahụ? Ọ dị n'ugboro niile ka ọ bụ naanị n'ụfọdụ? Mgbanwe na-ewe ọtụtụ ugboro; obere ọganihu ka bụ ọganihu.",
            "Ọ bụrụ na mgbanwe na-eweta mgbu, ma ọ bụ mmegharị na-ewute gị, kwụsị ma gwa athletic trainer, physical therapist ma ọ bụ dọkịta gị. Ọrụ usoro ekwesịghị ịga n'ihu mgbe mgbu dị."
          ],
          steps: ["Se ọzọ site n'otu ebe na otu akụkụ ahụ.", "Họrọ otu foto dị mkpa ahụ.", "Tinye tupu na mgbe e mesịrị n'akụkụ n'akụkụ.", "Dee ihe gbanwere na n'ugboro ole.", "Gị na onye nkuzi gị lelee ya; kọọ mgbu ọ bụla."],
          words: [["N'akụkụ n'akụkụ (side-by-side)", "foto ma ọ bụ vidiyo abụọ e debere n'akụkụ ibe ha iji tụnyere ha."], ["Physical therapist", "onye ọkachamara nwere ikikere na-enyere ndị mmadụ aka inwetaghachi mmegharị mgbe mmerụ ahụ gasịrị."]],
          slides: [
            { title: "Otu ndozi ahụ", bullets: ["Otu ebe ahụ e kaara akara", "Otu akụkụ na otu ìhè ahụ"] },
            { title: "Tụnyere", bullets: ["Otu foto dị mkpa ahụ, n'akụkụ n'akụkụ", "N'ugboro niile ka ọ bụ naanị n'ụfọdụ?", "Obere ọganihu dị mkpa"] },
            { title: "Nchekwa", bullets: ["Mgbu? Kwụsị", "Gwa athletic trainer, PT ma ọ bụ dọkịta gị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee cue onye nkuzi gị, se vidiyo ọzọ n'ime izu abụọ site n'otu ebe ahụ, ma mee ntụnyere tupu na mgbe e mesịrị n'akụkụ n'akụkụ ka gị na onye nkuzi gị lelee.",
          youCanNow: "ịtụnyere usoro tupu na mgbe e mesịrị n'ụzọ ziri ezi ma mara mgbe ị ga-akwụsị n'ihi mgbu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị na-eme ka ntụnyere tupu na mgbe e mesịrị ziri ezi?", options: ["Ịse site n'akụkụ ọhụrụ oge ọ bụla", "Iji ìhè dị iche", "Ịse site n'otu ebe, otu akụkụ na otu ìhè ahụ", "Iji naanị ugboro kacha mma"], answer: 2, why: "Naanị usoro kwesịrị ịgbanwe n'etiti vidiyo abụọ ahụ." },
            { objective: "O6", q: "Cue ọhụrụ ahụ amalite na-ewute ubu gị. Gịnị ka ị ga-eme?", options: ["Gaa n'ihu n'agbanyeghị ya", "Rịọ AI ka ọ chọpụta ihe na-eme gị", "Mee ya ugboro abụọ karịa", "Kwụsị ma gwa athletic trainer, physical therapist ma ọ bụ dọkịta gị"], answer: 3, why: "Mgbu bụ ihe kpatara ị ga-akwụsị ma hụ onye ọkachamara a zụrụ azụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ngwa AI na ezi mgbanwe",
        questions: [
          { objective: "O4", q: "Gịnị ka pose estimation na-eme?", options: ["Na-achọpụta mmerụ ahụ", "Na-ede atụmatụ mmega ahụ", "Na-agụ ndị na-eso gị (followers)", "Na-achọta ebe dị n'ahụ na vidiyo ma see stick figure"], answer: 3, why: "Ọ na-achọta nkwonkwo na foto." },
          { objective: "O4", q: "Kedu nke nwere ike ime ka ngwa pose mehie?", options: ["Blur na uwe sara mbara", "Ezigbo ìhè", "Uwe dị warara", "Azụ foto doro anya"], answer: 0, why: "Blur na uwe sara mbara na-ezo ebe nkwonkwo dị." },
          { objective: "O4", q: "Akụkụ (angle) sitere na vidiyo otu ekwentị bụ:", options: ["Zuru oke", "Nchọpụta ọrịa", "Atụmatụ, ọ bụghị ntụle ụlọ nyocha", "Enweghị uru"], answer: 2, why: "Vidiyo 2D apụghị ịtụ omimi nke ọma." },
          { objective: "O5", q: "Gịnị ka ị kwesịrị ịrịọ AI mgbe ị na-akọwa usoro gị?", options: ["Ka ọ chọpụta ihe kpatara mgbu ikpere gị", "Ka o nye ọgwụgwọ", "Ka ọ kagbuo okwu onye nkuzi gị", "Enyemaka ịkọwa ihe ị hụrụ n'okwu na-ekpeghị ikpe"], answer: 3, why: "Nchọpụta ọrịa na ọgwụgwọ bụ ọrụ ndị ọkachamara." },
          { objective: "O6", q: "Usoro ọhụrụ na-eweta mgbu. Ị ga:", options: ["Gaa n'ihu n'agbanyeghị ya", "Kwụsị ma gwa athletic trainer, PT ma ọ bụ dọkịta gị", "Leghara ya anya", "Rịọ AI ọgwụ mgbu"], answer: 1, why: "Agala n'ihu mgbe ọ bụla mgbu dị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI na Biomechanics",
    questions: [
      { objective: "O1", q: "Biomechanics na-amụ:", options: ["Ego otu egwuregwu", "Soshal midia", "Otu ike na ọnọdụ ahụ si emepụta mmegharị", "Nhazi ámá egwuregwu"], answer: 2, why: "Ọ bụ sayensị mmegharị." },
      { objective: "O1", q: "Range of motion bụ:", options: ["Otú nkwonkwo si aga tere aka", "Otú ị na-agba ọsọ tere aka", "Bọọdụ akara", "Ụdị mmega ahụ"], answer: 0, why: "Ọ na-akọwa mmegharị nkwonkwo." },
      { objective: "O1", q: "Center of mass bụ:", options: ["Ebe ahụ gị na-edozi onwe ya", "Etiti ámá egwuregwu", "Ụlọ mmega ahụ", "Akwara"], answer: 0, why: "Ọ bụ ebe ibu arọ gị na-edozi onwe ya." },
      { objective: "O1", q: "Ground reaction force bụ:", options: ["Ifufe", "Ntaramahụhụ", "Nkwagide ala na-enyeghachi", "Iwu otu egwuregwu"], answer: 2, why: "Ị kwagide ala, ọ kwagidekwa gị." },
      { objective: "O1", q: "Na jump shot, ike na-amalite na:", options: ["Nkwonkwo aka", "Ụkwụ", "Anya", "Bọọlụ"], answer: 1, why: "Kinetic chain na-amalite site n'ala gbagoo elu." },
      { objective: "O2", q: "Nlele site n'akụkụ na-egosi:", options: ["Naanị ihu", "Ọ dịghị ihe bara uru", "Naanị ndị na-ekiri", "Mmegharị n'ihu na azụ na joint angle"], answer: 3, why: "Nke ahụ bụ sagittal view." },
      { objective: "O2", q: "Gịnị mere a ga-eji kaa akara ebe igwefoto n'ala?", options: ["Maka ịchọ mma", "Ọ bụ iwu", "Iji se n'otu ụzọ ahụ oge ọzọ", "Iji mee ndị ọzọ mgbagwoju anya"], answer: 2, why: "Otu ndozi ahụ na-eme ka ntụnyere ziri ezi." },
      { objective: "O2", q: "Slow motion na-enyere gị aka:", options: ["Ichekwa batrị", "Izo mperi", "Itinye egwu", "Ịhụ mmegharị ọsọ ọsọ nke ọma"], answer: 3, why: "Ọ na-egosi nkọwa nta nta." },
      { objective: "O2", q: "Tupu ịse ndị otu gị vidiyo, ị kwesịrị:", options: ["Inweta ikike", "Ibu ụzọ tinye ya n'ịntanetị", "Ịse ha na nzuzo", "Ịhapụ ya"], answer: 0, why: "Kwanyere nzuzo na iwu otu egwuregwu ugwu." },
      { objective: "O3", q: "Akụkụ (phase) bụ:", options: ["Oge egwuregwu", "Otu akụkụ nke mmegharị", "Otu egwuregwu", "Ekwentị"], answer: 1, why: "Nka na-ekewa n'akụkụ." },
      { objective: "O3", q: "Kedu nke bụ akụkụ nke ịtụ ihe?", options: ["Ezumike etiti egwuregwu", "Timeout", "Ịhapụ ihe (release)", "Ịgba ọsọ ikpeazụ iji mee ka ahụ dajụọ"], answer: 2, why: "Release bụ akụkụ nke ịtụ ihe." },
      { objective: "O3", q: "Nlele foto n'otu n'otu pụtara:", options: ["Ịgafe vidiyo otu foto n'otu oge", "Ikiri ya ọsọ okpukpu abụọ", "Ịwụfe ruo na njedebe", "Ihichapụ foto"], answer: 0, why: "Ọ na-enyere gị aka ịchọta ọnọdụ dị mkpa." },
      { objective: "O3", q: "AI depụtara akụkụ nka gị. Ihe ọzọ ị ga-eme bụ:", options: ["Ịtụkwasị ha obi kpamkpam", "Itinye ha n'ịntanetị", "Ịleghara onye nkuzi gị anya", "Iji onye nkuzi gị kwado ha"], answer: 3, why: "Ndị nkuzi na-akwado ihe dị mkpa." },
      { objective: "O4", q: "Pose estimation na-ese:", options: ["Akara ụlọ ọrụ (logo)", "Stick figure n'elu ahụ gị", "Maapụ", "Eserese ndị na-eso gị"], answer: 1, why: "Ọ na-ejikọ ebe dị n'ahụ ọ chọtara." },
      { objective: "O4", q: "Tupu iji app pose, lelee:", options: ["Agba ya", "Iwu nzuzo ya", "Logo ya", "Ọ dịghị ihe"], answer: 1, why: "Vidiyo ahụ gị bụ ozi nke onwe gị." },
      { objective: "O5", q: "Ihe ole gbasara usoro ka ị kwesịrị ịrụ ọrụ na ha n'otu oge?", options: ["Otu", "Iri", "Ha niile", "Ọ dịghị nke ọ bụla"], answer: 0, why: "Otu ihe a na-elekwasị anya dị mfe ịgbanwe." },
      { objective: "O5", q: "Cue bụ:", options: ["Ntụziaka dị mkpụmkpụ iji gbanwee mmegharị", "Osisi egwuregwu pool", "Akara egwuregwu", "App vidiyo"], answer: 0, why: "Cue na-eduzi mgbanwe usoro." },
      { objective: "O5", q: "Nkọwa na-ekpeghị ikpe:", options: ["Na-ekpe ikpe n'ike", "Na-achọpụta mmerụ ahụ", "Na-akọwa ihe ị hụrụ n'achọpụtaghị ọrịa", "Na-eleghara ihe akaebe anya"], answer: 2, why: "Jide naanị ihe ị hụrụ." },
      { objective: "O6", q: "Vidiyo tupu na mgbe e mesịrị kwesịrị iji:", options: ["Akụkụ dị iche oge ọ bụla", "Ndozi ọ bụla", "Enweghị vidiyo", "Otu ebe, otu akụkụ na otu ìhè ahụ"], answer: 3, why: "Otu ndozi ahụ na-eme ka ntụnyere ziri ezi." },
      { objective: "O6", q: "Onye na-enyere ndị mmadụ aka inwetaghachi mmegharị mgbe mmerụ ahụ gasịrị?", options: ["Onye na-akwado otu (fan)", "Physical therapist", "App AI", "Onye ọkaikpe egwuregwu (referee)"], answer: 1, why: "Physical therapist nwere ikikere maka nke a." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 3, 5, 8, 9, 11, 13, 15, 17, 18]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ịse vidiyo",
        objective: "O2",
        notYet: "Naanị otu nlele, ma ọ bụ igwefoto megharịrị, ma ọ bụ ọ dị oke elu ma ọ bụ oke ala.",
        meets: "Nlele site n'akụkụ na site n'ihu n'ogo úkwù, site n'ebe e kaara akara, ugboro atọ n'otu n'otu.",
        exceeds: "Na-edekwa ebe ndị ahụ, ntọala slow motion na ìhè ka onye ọ bụla nwee ike imeghachi ya."
      },
      {
        name: "Akụkụ na foto dị mkpa",
        objective: "O3",
        notYet: "Akụkụ ndị ahụ adịghị ma ọ bụ enweghị aha.",
        meets: "Akụkụ ọ bụla nwere foto dị mkpa nwere aha, nke onye nkuzi kwadoro.",
        exceeds: "Foto dị mkpa sitere n'ọtụtụ ugboro na-egosi otu ọnọdụ ahụ oge ọ bụla."
      },
      {
        name: "Ihe gbasara usoro",
        objective: "O5",
        notYet: "Ọtụtụ ihe n'otu oge, ma ọ bụ okwu na-achọpụta ọrịa ma ọ bụ na-ekpe ikpe.",
        meets: "Otu ihe n'ahịrịokwu abụọ na-ekpeghị ikpe, ya na akụkụ ya na screenshot.",
        exceeds: "Mekwara ya ajụjụ doro anya nke onye nkuzi zara na otu cue."
      },
      {
        name: "Iji ngwa",
        objective: "O4",
        notYet: "E weere ọnụọgụ app dị ka ntụle kpọmkwem.",
        meets: "A na-akpọ angle ọ bụla sitere na ngwa pose atụmatụ ma lelee ya na foto ahụ.",
        exceeds: "Nwere ike ịkpọ aha ihe dị na vidiyo nwere ike ime ka ngwa ahụ mehie."
      },
      {
        name: "Tupu na mgbe e mesịrị",
        objective: "O6",
        notYet: "E sere vidiyo nke abụọ n'ụzọ dị iche, ma ọ bụ e meghị ntụnyere ọ bụla.",
        meets: "Ntụnyere n'akụkụ n'akụkụ site n'otu ebe, otu akụkụ na otu ìhè ahụ.",
        exceeds: "Na-edekwa ihe gbanwere, ihe na-agbanweghị, na mgbu ọ bụla a kọọrọ onye kwesịrị ekwesị."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị egwuregwu mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị egwuregwu gosiri onye nkuzi ha ntụnyere tupu na mgbe e mesịrị n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị nkuzi kwuru na mkparịta ụka usoro ha na ndị egwuregwu were ihe ọmụmụ a doro anya karịa",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị egwuregwu n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nwere igwefoto na slow motion",
      "Tep ma ọ bụ kon iji kaa akara ebe igwefoto",
      "Ngwa enyemaka AI n'efu; app pose estimation n'efu bụ nhọrọ",
      "Ihe dị ka nkeji 60 maka nkuzi, nnwale na ule, gbakwunye oge ịse vidiyo abụọ nwere izu abụọ n'etiti ha"
    ],
    facilitatorNotes: [
      "Mee ịse vidiyo dị ka mmega ahụ otu: otu onye egwuregwu na-emegharị, otu na-ese, otu na-elele ogo na ebe igwefoto.",
      "Nweta ikike e dere ede tupu ịse ụmụaka vidiyo, ma ewepụla vidiyo ha n'app ọha.",
      "Ka onye nkuzi kwado akụkụ na cue; ihe ọmụmụ a anaghị anọchi nkuzi egwuregwu.",
      "Onye egwuregwu ọ bụla kwuru na ọ na-enwe mgbu na-akwụsị mmega ahụ ma a na-ezigara ya athletic trainer, physical therapist ma ọ bụ dọkịta.",
      "Jiri rubric tụọ akara ntụnyere ikpeazụ, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
