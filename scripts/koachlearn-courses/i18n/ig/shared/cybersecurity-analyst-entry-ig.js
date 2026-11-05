"use strict";

// Koach Learn course (Igbo translation of shared/cybersecurity-analyst-entry.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const SEC = { name: "Asambodo CompTIA Security+ (peeji gọọmentị ya)", url: "https://www.comptia.org/en-us/certifications/security/" };
const V7 = { name: "Nkọwa ule CompTIA Security+ V7 (SY0-701)", url: "https://www.comptia.org/en-us/certifications/security/v7/" };
const V8 = { name: "Nkọwa ule CompTIA Security+ V8 (SY0-801)", url: "https://www.comptia.org/en-us/certifications/security/v8/" };
const CISA = { name: "CISA: Omume kacha mma maka nchekwa ịntanetị", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" };

module.exports = {
  id: "cybersecurity-analyst-entry-ig",
  lang: "ig",
  translationOf: "cybersecurity-analyst-entry",
  category: "Workforce Development",
  name: "Nchekwa Ịntanetị Maka Ọrụ Mbido (Nkwadebe CompTIA Security+)",
  skills: "Iji CIA triad, Ịtụ ọkwa ihe egwu, Ịhọrọ ihe nchekwa (control), Ime ka kọmputa sie ike (hardening), Ịgụ log, Ịgbaso nzọụkwụ nzaghachi ihe mberede",
  outcome: "iche echiche ma rụọ ọrụ dị ka onye nyocha nchekwa mbido: kewaa nsogbu site na CIA triad, tụọ ọkwa ihe egwu ma họrọ ihe nchekwa, mee ka kọmputa gị sie ike, hụ ihe ịdọ aka na ntị n'ime log mbanye, gbasoo nzọụkwụ nzaghachi ihe mberede, ma gbasoo atụmatụ gị nwere ụbọchị maka ule CompTIA Security+.",
  about: [
    "Ndị nyocha nchekwa (security analysts) na-echebe kọmputa, akaụntụ na ozi nke otu ụlọ ọrụ. Ha na-ele anya maka ihe ịdọ aka na ntị, na-elele ntọala, ma na-aza mgbe ihe mebiri. CompTIA Security+ bụ otu n'ime asambodo a kacha mara amara maka ịmalite ọrụ a.",
    "Ihe ọmụmụ a na-akwadebe gị maka Security+. Ọ naghị enye gị asambodo ahụ; CompTIA na-enye ya mgbe i gafere ule ahụ. Ule ahụ na-agbanwe na ngwụcha 2026, ya mere Nkuzi 1 na-egosi gị otu esi ahọrọ ụdị ule ziri ezi na ebe ị ga-elele ozi ọhụrụ.",
    "Ihe niile ebe a bụ maka ichebe (defensive). Ị na-eme omume naanị na kọmputa na akaụntụ nke gị na n'ime log e chepụtara echepụta n'ime nkuzi. Anwala, nyochaa (scan) ma ọ bụ banye na sistemụ na-abụghị nke gị ma ọ bụ nke e nyeghị gị ikike ederede iji: nke ahụ nwere ike ịbụ mpụ.",
    "Ọ bụrụ na nchekwa dị gị ọhụrụ, buru ụzọ were \"Mmalite Nchekwa Ịntanetị (Cybersecurity)\". Ọ na-akụzi okwuntughe, nkwenye ọtụtụ ụzọ (MFA) na phishing maka akaụntụ nke gị; ihe ọmụmụ a na-ewulite na ya maka ọrụ."
  ],
  finalTask: "Mee pọtfọliyo mbido nchekwa gị: (1) ndepụta hardening maka kọmputa nke gị nke na-egosi ntọala ọ bụla i lelere na ihe i hụrụ; (2) obere ndetu ihe mberede banyere log mbanye omume nke Nkuzi 5: ihe ị hụrụ, ihe mere o ji enyo enyo, mmetụta CIA ya na ọkwa ihe egwu ya, na nzọụkwụ nzaghachi ihe mberede ị ga-eme; na (3) atụmatụ ọmụmụ na ule Security+ gị: ụdị ule ị ga-ewe na ihe kpatara ya, ụbọchị ebumnuche, ngalaba (domain) ọ bụla na ibu ya, na awa ọmụmụ gị kwa izu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa na-achọ ọrụ nchekwa mbụ ha: ndị na-achọ ọrụ, ndị agha mbụ (veterans; ọtụtụ nwere ikike nchekwa ma ọ bụ rụrụ ọrụ IT), ndị na-agbanwe ọrụ na ndị nọ n'enyemaka IT chọrọ ịrị elu. Ndabere ha dị iche iche; ọtụtụ na-eji kọmputa kwa ụbọchị mana ha arụbeghị ọrụ nchekwa.",
    startingPoint: "Ha maara nchekwa onwe onye dị mfe (okwuntughe, MFA, phishing) ma ọ bụ nwere ike inweta ya site na \"Mmalite Nchekwa Ịntanetị (Cybersecurity)\". Ha agụbeghị log, tụbeghị ọkwa ihe egwu ma ọ bụ gbasoo usoro ihe mberede. Ole na ole maara otu e si hazie ule Security+ ma ọ bụ na ọ na-agbanwe.",
    gap: "Ọrụ nchekwa mbido na-atụ anya omume onye nyocha: ikewa nsogbu, ikpe ikpe ihe egwu, ilele ntọala, ịgụ log na ịgbaso nzọụkwụ ihe mberede n'obi dị jụụ. Ndị na-amụ ihe chọkwara atụmatụ doro anya nwere ụbọchị maka ụdị Security+ ziri ezi ka ha ghara ịmụ maka ule a na-akwụsị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla",
      "Naanị ichebe: mee omume na ngwaọrụ nke gị na ozi e chepụtara; enweghị nyocha (scan) ma ọ bụ nnwale sistemụ ndị ọzọ",
      "Ngwaọrụ: otu kọmputa Windows ma ọ bụ Mac; ụfọdụ ntọala chọrọ akaụntụ admin, ya mere kọmputa ọba akwụkwọ nwere ike ọ gaghị egosi ha",
      "Oge: nkuzi nkeji 4 ruo 6",
      "Ule ahụ na-agbanwe na ngwụcha 2026: ndị na-amụ ihe ga-elele comptia.org maka ụdị ule, ụbọchị na ọnụ ahịa"
    ],
    prerequisites: "Ịma iji kọmputa na nchekwa akaụntụ dị mfe. \"Mmalite Nchekwa Ịntanetị (Cybersecurity)\" na \"Ntọala Enyemaka IT (Nkwadebe maka CompTIA A+)\" dị mma iburu ụzọ were."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị obere ihe merenụ gbasara nchekwa", action: "ikewa akụkụ CIA triad (nzuzo, izi ezi ma ọ bụ ịdị njikere) ọ na-emebi", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ihe iyi egwu nye otu ụlọ ọrụ", action: "ịtụ ọkwa ihe egwu ya site na ohere ọ ga-eme na mmetụta ya, ma họrọ ụdị ihe nchekwa ga-ebelata ya", standard: "nwere ihe kpatara ọkwa ahụ na ihe nchekwa ahụ" },
    { id: "O3", condition: "Site n'iji kọmputa Windows ma ọ bụ Mac nke gị", action: "ilele na ide ntọala mmelite, firewall, antivirus, ụdị akaụntụ, mkpọchi ihuenyo na nzuzo diski (disk encryption)", standard: "ma lelee ihe niile ma dee oghere ọ bụla" },
    { id: "O4", condition: "Mgbe e nyere gị obere log mbanye", action: "ịkara ahịrị ndị na-enyo enyo ma kọwaa ihe mere nke ọ bụla ji enyo enyo", standard: "ma chọta mbanye ọ bụla dara ugboro ugboro na mbanye gara nke ọma n'ụzọ dị iche mgbe ha gasịrị" },
    { id: "O5", condition: "Mgbe e nyere gị ihe mberede nchekwa", action: "idepụta nzọụkwụ nzaghachi ihe mberede n'usoro ma dee otu omume maka nke ọ bụla", standard: "n'enweghị nzọụkwụ fọdụrụ, ma chekwaa ihe akaebe" },
    { id: "O6", condition: "Site n'iji peeji gọọmentị CompTIA Security+", action: "ide atụmatụ ọmụmụ na ule nke na-akpọ aha ụdị ule na ụbọchị ebumnuche", standard: "na-ekpuchi ngalaba ọ bụla na ibu ya na oge ọmụmụ kwa izu" }
  ],
  chapters: [
    {
      name: "Isi 1: Iche echiche dị ka onye nyocha nchekwa",
      lessons: [
        {
          title: "Ọrụ onye nyocha na ule Security+",
          objectives: ["O6"],
          minutes: 6,
          goal: "Họrọ ụdị ule Security+ ziri ezi maka ụbọchị ule gị ma depụta ngalaba ya.",
          text: [
            "Ọrụ nchekwa mbido gụnyere onye nyocha nchekwa, onye nyocha SOC (security operations center: ebe ọrụ nchekwa), na onye nlekọta nchekwa ma ọ bụ sistemụ. Ndị nyocha na-ele mkpu ịdọ aka na ntị na log, na-elele na e hiwere sistemụ n'ụzọ dị nchebe, ma na-enyere aka n'ịza ihe mberede. Ọtụtụ na-amalite n'enyemaka IT wee rị elu.",
            "CompTIA na-enye asambodo Security+ mgbe i gafere otu ule. Mgbe anyị lelere na Ọktoba 2026, ule ahụ nwere ruo ajụjụ 90 n'ime nkeji 90, ajụjụ nhọrọ na ajụjụ ime ihe (performance-based). CompTIA na-atụ aro Network+ na ihe dị ka afọ abụọ ahụmịhe na nchekwa ma ọ bụ nlekọta sistemụ, mana ọ na-akpọ ha ahụmịhe a na-atụ aro.",
            "Ule ahụ na-agbanwe. Ụdị 7 (SY0-701) dị ugbu a; e debere na ule bekee ya ga-akwụsị na 11 June 2027. A tụrụ anya ụdị 8 (SY0-801) na ma ọ bụ gburugburu 17 November 2026. Ọ bụrụ na ụbọchị ule gị dị anya n'ime 2027, mụọ maka V8. Ọ bụrụ na ị ga-ewe ule n'oge na-adịghị anya, V7 nwere ike ịdaba. Lelee peeji gọọmentị: ụbọchị nwere ike ịgbanwe.",
            "Ụdị ọ bụla nwere ngalaba (domain) ise nwere ibu ha. N'ime ha abụọ, ọrụ nchekwa (security operations) kacha ibu (ihe dị ka pasentị 27 ruo 28). Oge ọmụmụ gị kwesịrị ịgbaso ibu ndị a."
          ],
          steps: ["Meghee peeji gọọmentị Security+ na peeji ule V7 na V8.", "Họrọ ụbọchị ule ebumnuche gị.", "Họrọ ụdị ule ga-adị n'ụbọchị ahụ.", "Dee koodu ule ya, ngalaba ise ya na ibu ha.", "Lelee ọnụ ahịa na ụzọ iwe ule ugbu a na saịtị gọọmentị."],
          words: [["SOC", "security operations center: otu ndị ọrụ na-ele sistemụ otu ụlọ ọrụ anya maka mwakpo."], ["Onye nyocha nchekwa (security analyst)", "onye na-ele anya, na-elele ma na-aza nsogbu nchekwa."], ["Ụdị ule (exam version)", "ụdị ule nwere koodu na isiokwu nke ya; ụdị ochie na-akwụsị."], ["Ịkwụsị (retire)", "mgbe a naghịzi enye otu ụdị ule."]],
          slides: [
            { title: "Ọrụ nchekwa mbido", bullets: ["Onye nyocha nchekwa ma ọ bụ SOC", "Onye nlekọta nchekwa ma ọ bụ sistemụ", "Ọtụtụ na-amalite n'enyemaka IT"] },
            { title: "Isi ihe Security+ (e lelere Ọkt 2026)", bullets: ["Otu ule, ruo ajụjụ 90, nkeji 90", "Ajụjụ nhọrọ na ajụjụ ime ihe", "CompTIA na-enye ya; ihe ọmụmụ a na-akwadebe gị"] },
            { title: "Họrọ ụdị gị", bullets: ["V7 = SY0-701: e debere na nke bekee ga-akwụsị na 11 June 2027", "V8 = SY0-801: a na-atụ anya ya gburugburu 17 November 2026", "Hazie ụdị ahụ ka ọ dabara ụbọchị ule gị"] },
            { title: "Mụọ site n'ibu", bullets: ["Ngalaba ise n'ụdị ọ bụla", "Ọrụ nchekwa (security operations) kacha ibu", "Lelee comptia.org tupu i debanye aha"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Họrọ ọnwa ule ebumnuche. Site na peeji gọọmentị, kpebie V7 ma ọ bụ V8 ma dee otu ahịrịokwu na-ekwu ihe kpatara ya. Wee depụta ngalaba ise nke ụdị ahụ na ibu ha, ma gbaa nke kacha ibu gburugburu.",
          youCanNow: "ikwu ihe onye nyocha nchekwa mbido na-arụ, ịhọrọ ụdị Security+ ziri ezi maka ụbọchị ule gị, na idepụta ngalaba ya.",
          quickCheck: [
            { objective: "O6", q: "Ị na-eme atụmatụ iwe ule na ngwụcha 2027. Kedu ụdị ị ga-amụ maka ya?", options: ["V7 (SY0-701), n'ihi na ọ ka ochie", "Ụdị ọ bụla; ha bụ otu", "V8 (SY0-801), n'ihi na e debere na V7 bekee ga-akwụsị na June 2027", "Ọ dịghị ụdị; naanị were A+"], answer: 2, why: "Mụọ maka ụdị a ga-akanye enye n'ụbọchị ule gị; lelee peeji gọọmentị." },
            { objective: "O6", q: "Onye na-enye asambodo Security+?", options: ["CompTIA, mgbe i gafere ule ahụ", "Ihe ọmụmụ a", "Onye were gị n'ọrụ", "Weebụsaịtị nchekwa ọ bụla"], answer: 0, why: "CompTIA na-enye Security+; ihe ọmụmụ a na-akwadebe gị maka ule ahụ." }
          ]
        },
        {
          title: "CIA triad, ihe iyi egwu, adịghị ike na ihe egwu",
          objectives: ["O1", "O2"],
          minutes: 6,
          goal: "Kewaa nsogbu nchekwa site na CIA triad ma tụọ ọkwa ihe egwu ya.",
          text: [
            "Nchekwa na-echebe ihe atọ, a na-akpọ ha CIA triad. Nzuzo (confidentiality): naanị ndị kwesịrị ekwesị nwere ike ịhụ ozi. Izi ezi (integrity): ozi ziri ezi ma a naghị agbanwe ya n'enweghị ikike. Ịdị njikere (availability): sistemụ na ozi na-arụ ọrụ mgbe ndị mmadụ chọrọ ha.",
            "Ọmụmaatụ: laptọọpụ e zuru nwere faịlụ ndị ahịa na-emebi nzuzo. Onye na-agbanwe nọmba ụgwọ ọnwa ndị ọrụ (payroll) na-emebi izi ezi. Ransomware na-akpọchi faịlụ niile, ma ọ bụ weebụsaịtị a kwụsịrị ka ọ ghara ịrụ ọrụ, na-emebi ịdị njikere.",
            "Ihe iyi egwu (threat) bụ ihe nwere ike imebi ihe (onye ohi, onye aghụghọ, oké ifufe). Adịghị ike (vulnerability) bụ ntụpọ ọ nwere ike iji (kọmputa e meleghị, okwuntughe na-adịghị ike, ọnụ ụzọ a kpọchighị). Ihe egwu (risk) bụ ohere ihe ọjọọ ahụ ga-eme, mụbaa na otu ọ ga-esi njọ (mmetụta ya).",
            "Ndị nyocha na-atụkarị ọkwa ihe egwu na tebụl dị mfe: ohere dị ala, n'etiti ma ọ bụ elu, na mmetụta dị ala, n'etiti ma ọ bụ elu. Ohere dị elu na mmetụta dị elu na-aga n'elu ndepụta."
          ],
          steps: ["Kpọọ aha ihe nwere ike imebi.", "Jụọ: ọ na-emebi nzuzo, izi ezi ma ọ bụ ịdị njikere?", "Kpọọ aha ihe iyi egwu na adịghị ike ahụ.", "Tụọ ohere: dị ala, n'etiti ma ọ bụ elu.", "Tụọ mmetụta: dị ala, n'etiti ma ọ bụ elu.", "Tinye ihe egwu elu-elu n'ihu."],
          words: [["CIA triad", "nzuzo (confidentiality), izi ezi (integrity) na ịdị njikere (availability): ebumnuche atọ nke nchekwa."], ["Ihe iyi egwu (threat)", "ihe ma ọ bụ onye nwere ike imebi ihe."], ["Adịghị ike (vulnerability)", "ntụpọ ihe iyi egwu nwere ike iji."], ["Ihe egwu (risk)", "ohere ihe ọjọọ ga-eme na otu ọ ga-esi njọ."], ["Ransomware", "malware na-akpọchi faịlụ ma na-arịọ ka a kwụọ ụgwọ."]],
          slides: [
            { title: "CIA triad", bullets: ["Nzuzo: naanị ndị kwesịrị ekwesị na-ahụ ya", "Izi ezi: ọ na-anọgide na-ezi ezi", "Ịdị njikere: ọ na-arụ ọrụ mgbe a chọrọ ya"] },
            { title: "Ọmụmaatụ", bullets: ["Laptọọpụ e zuru nwere faịlụ: nzuzo", "Nọmba payroll a gbanwere: izi ezi", "Ransomware, saịtị anaghị arụ ọrụ: ịdị njikere"] },
            { title: "Ihe iyi egwu, adịghị ike, ihe egwu", bullets: ["Ihe iyi egwu: ihe nwere ike imebi", "Adịghị ike: ntụpọ ahụ", "Ihe egwu: ohere na mmetụta ọnụ"] },
            { title: "Tụọ ọkwa ya", bullets: ["Ohere: dị ala, n'etiti, elu", "Mmetụta: dị ala, n'etiti, elu", "Elu na elu na-aga n'ihu"] }
          ],
          tryIt: "Maka obere azụmahịa ị maara (ụlọ ahịa nta, ọfịs ụka, ebe nnabata ụlọ ọgwụ), depụta ihe atọ nwere ike ịga njọ. Maka nke ọ bụla, dee akụkụ CIA ọ na-emebi, ihe iyi egwu, adịghị ike, na ọkwa ohere na mmetụta.",
          youCanNow: "ikewa nsogbu nchekwa site na CIA triad na ịtụ ọkwa ihe egwu ya site n'ohere na mmetụta.",
          quickCheck: [
            { objective: "O1", q: "Mmadụ na-agbanwe ego dị n'akwụkwọ ụgwọ (invoice) n'enweghị ikike. Kedu akụkụ CIA triad e mebiri?", options: ["Nzuzo", "Ịdị njikere", "Ọ dịghị nke ọ bụla", "Izi ezi"], answer: 3, why: "Izi ezi pụtara na ozi na-anọgide na-ezi ezi; mgbanwe n'enweghị ikike na-emebi ya." },
            { objective: "O2", q: "E meleghị kọmputa ọfịs otu afọ. N'okwu ihe egwu, mmelite ndị na-adịghị ya bụ:", options: ["Ihe iyi egwu", "Adịghị ike", "Ihe nchekwa", "Ihe mberede"], answer: 1, why: "Mmelite na-adịghị bụ ntụpọ ihe iyi egwu nwere ike iji." }
          ]
        },
        {
          title: "Ihe nchekwa (controls) na ikike pere mpe (least privilege)",
          objectives: ["O2"],
          minutes: 5,
          goal: "Họrọ ụdị ihe nchekwa ga-ebelata otu ihe egwu.",
          text: [
            "Ihe nchekwa (control) bụ ihe ọ bụla na-ebelata ihe egwu. Security+ na-ekewa ihe nchekwa n'ụzọ abụọ. Site n'ụdị: teknụzụ (firewall, nzuzo ozi/encryption, MFA), njikwa (iwu ụlọ ọrụ, nyocha ihe egwu), ọrụ (ọzụzụ, ndị nche, usoro ndị mmadụ na-agbaso) na nke anụ ahụ (mkpọchi, kaadị njirimara, igwefoto).",
            "Site n'ihe ha na-eme: ihe nchekwa mgbochi (preventive) na-akwụsị mwakpo (mkpọchi, MFA). Ihe nchekwa nchọpụta (detective) na-ahụ ya (igwefoto, mkpu sitere na log). Ihe nchekwa mmezi (corrective) na-edozi ihe mgbe e mesịrị (iweghachi site na ndabere/backup). Ihe nchekwa ime ka ụjọ tụọ (deterrent) na-akụda mmụọ (akara ịdọ aka na ntị). Ihe nchekwa nnọchi (compensating) na-anọchi mgbe ihe nchekwa bụ isi agaghị ekwe omume.",
            "Iwu dị mkpa bụ ikike pere mpe (least privilege): nye onye ọ bụla naanị ohere ọ chọrọ maka ọrụ ya, ọ dịghị karịa. Onye na-anara ego anaghị achọ ohere na payroll. Ọ bụrụ na e weghara otu akaụntụ, least privilege na-ebelata mmebi ahụ.",
            "Ezigbo nchekwa na-eji ọtụtụ ọkwa, ka ọ bụrụ na otu dara, nke ọzọ ka na-echebe (defense in depth)."
          ],
          words: [["Ihe nchekwa (control)", "ihe ọ bụla na-ebelata ihe egwu."], ["Mgbochi / nchọpụta / mmezi", "ihe nchekwa na-akwụsị, na-ahụ, ma ọ bụ na-edozi nsogbu nchekwa (preventive / detective / corrective)."], ["Ikike pere mpe (least privilege)", "inye onye ọ bụla naanị ohere ọrụ ya chọrọ."], ["Defense in depth", "iji ọtụtụ ọkwa nchekwa."], ["Firewall", "ngwa na-ekwe ma ọ bụ na-egbochi okporo ụzọ netwọk site n'iwu."]],
          slides: [
            { title: "Ụdị ihe nchekwa", bullets: ["Teknụzụ: firewall, encryption, MFA", "Njikwa: iwu ụlọ ọrụ, nyocha ihe egwu", "Ọrụ: ọzụzụ, usoro", "Anụ ahụ: mkpọchi, kaadị njirimara, igwefoto"] },
            { title: "Ihe ihe nchekwa na-eme", bullets: ["Mgbochi: na-akwụsị ya", "Nchọpụta: na-ahụ ya", "Mmezi: na-edozi ya mgbe e mesịrị", "Ime ka ụjọ tụọ na nnọchi"] },
            { title: "Ikike pere mpe", bullets: ["Naanị ohere ọrụ ahụ chọrọ", "Na-ebelata mmebi ma e weghara akaụntụ"] },
            { title: "Defense in depth", bullets: ["Ọtụtụ ọkwa", "Ọ bụrụ na otu dara, nke ọzọ ka na-echebe"] }
          ],
          sources: [V7, V8],
          tryIt: "Were ihe egwu atọ ahụ si na Nkuzi 2. Maka nke ọ bụla, họrọ otu ihe nchekwa. Dee ụdị ya (teknụzụ, njikwa, ọrụ ma ọ bụ anụ ahụ) na ihe ọ na-eme (mgbochi, nchọpụta ma ọ bụ mmezi). Wee dee otu iwu least privilege maka azụmahịa ahụ.",
          youCanNow: "ịhọrọ ihe nchekwa maka ihe egwu, ịkpọ aha ụdị ya na ihe ọ na-eme, na iji least privilege.",
          quickCheck: [
            { objective: "O2", q: "Igwefoto nchekwa na-edekọ onye na-abata bụ isi kedu ụdị ihe nchekwa?", options: ["Nchọpụta (detective)", "Mmezi (corrective)", "Njikwa (managerial)", "Nnọchi (compensating)"], answer: 0, why: "Igwefoto na-ahụ ma na-edekọ ihe na-eme, nke na-eme ha ihe nchekwa nchọpụta (na nke anụ ahụ)." },
            { objective: "O2", q: "Onye na-anara ego ọhụrụ na-arịọ ohere na sistemụ payroll. Site na least privilege, ị ga-:", options: ["Nye ya ohere admin zuru ezu ka o wee dị mma", "Kesaa okwuntughe nke gị", "Nye ya ohere naanị ma ọ bụrụ na ọrụ ya chọrọ ya n'ezie", "Nye onye ọ bụla ohere n'ihe niile"], answer: 2, why: "Least privilege na-enye naanị ohere ọrụ chọrọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iche echiche dị ka onye nyocha nchekwa",
        questions: [
          { objective: "O1", q: "Weebụsaịtị nhazi oge ụlọ ọgwụ akwụsịrị ịrụ ọrụ otu ụbọchị. Kedu akụkụ CIA e mebiri?", options: ["Nzuzo", "Izi ezi", "Ịdị njikere", "Ọ dịghị nke ọ bụla"], answer: 2, why: "Ndị mmadụ enweghị ike iji sistemụ ahụ mgbe ha chọrọ ya: ịdị njikere." },
          { objective: "O1", q: "Onye ọrụ zigaara ndepụta ndị ahịa onye na-ezighi ezi nọ n'èzí ụlọ ọrụ ahụ. Kedu akụkụ CIA e mebiri?", options: ["Nzuzo", "Ịdị njikere", "Izi ezi", "Ikike pere mpe"], answer: 0, why: "Onye na-ekwesịghị ịhụ ozi ahụ hụrụ ya." },
          { objective: "O2", q: "Kedu ihe egwu a na-ebukarị ụzọ dozie?", options: ["Ohere dị ala, mmetụta dị ala", "Ohere dị ala, mmetụta n'etiti", "Ohere n'etiti, mmetụta dị ala", "Ohere dị elu, mmetụta dị elu"], answer: 3, why: "Ohere dị elu na mmetụta dị elu bụ ihe egwu kacha njọ." },
          { objective: "O2", q: "Iweghachi faịlụ site na ndabere (backup) mgbe ransomware gasịrị bụ kedu ụdị ihe nchekwa?", options: ["Ime ka ụjọ tụọ (deterrent)", "Mmezi (corrective)", "Mgbochi (preventive)", "Njikwa (managerial)"], answer: 1, why: "Ihe nchekwa mmezi na-edozi ihe mgbe ihe mere." },
          { objective: "O6", q: "N'ụdị Security+ abụọ ahụ, kedu ngalaba kacha ibu?", options: ["General security concepts", "Security program management", "Security operations", "Security architecture"], answer: 2, why: "Security operations dị ihe dị ka pasentị 27 ruo 28 n'ụdị abụọ ahụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ọrụ nchekwa n'omume",
      lessons: [
        {
          title: "Ime ka kọmputa nke gị sie ike (hardening)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lelee ma dee isi ntọala nchekwa na kọmputa nke gị.",
          text: [
            "Hardening pụtara ime ka sistemụ sie ike ịwakpo site n'ịgbanye ihe nchekwa na ịgbanyụ ihe a na-achọghị. Ndị nyocha na-elele nke a na kọmputa ụlọ ọrụ kwa ụbọchị. Mee omume naanị na kọmputa nke gị.",
            "Lelee ihe isii. Mmelite: e tinyere ha? Firewall: ọ gbanyere? Antivirus: ọ gbanyere ma dị ọhụrụ (Microsoft Defender dị n'ime Windows; Mac nwere nchekwa malware dị n'ime ya)? Ụdị akaụntụ: ị na-eji akaụntụ nkịtị (standard) maka ọrụ kwa ụbọchị, na admin naanị mgbe ọ dị mkpa? Mkpọchi ihuenyo: ọ na-akpọchi mgbe nkeji ole na ole gachara ma chọọ okwuntughe ma ọ bụ PIN? Nzuzo diski: ọ gbanyere (BitLocker ma ọ bụ Device Encryption n'ọtụtụ kọmputa Windows, FileVault na Mac)?",
            "Na Windows, lee na Settings maka Windows Update na Accounts, ma meghee Windows Security maka firewall na nchekwa nje (virus). Na Mac, lee na System Settings maka Software Update, Network > Firewall, Users & Groups, Lock Screen, na Privacy & Security > FileVault. Aha menu nwere ike ịgbanwe n'etiti ụdị; chọọ na Settings ma ọ bụrụ na ịchọtaghị otu.",
            "Ọ bụrụ na ị gbanye nzuzo diski, buru ụzọ chekwaa recovery key n'ebe dị nchebe na-anọghị n'ịntanetị. Na-enweghị ya ị nwere ike tufuo faịlụ gị. Ọ bụrụ na o doghị gị anya, dee ya dị ka oghere ma rịọ enyemaka kama."
          ],
          steps: ["Mmelite: lelee ma tinye ha.", "Firewall: hụ na ọ gbanyere.", "Antivirus: hụ na ọ gbanyere ma dị ọhụrụ.", "Akaụntụ: dee ma akaụntụ kwa ụbọchị gị bụ standard ma ọ bụ admin.", "Mkpọchi ihuenyo: hazie ya ka ọ kpọchie mgbe nkeji ole na ole gachara.", "Nzuzo diski: lelee ma ọ gbanyere; chekwaa recovery key tupu ị gbanye ya.", "Dee ihe ọ bụla ị hụrụ na oghere ọ bụla."],
          words: [["Hardening", "ime ka sistemụ sie ike ịwakpo site n'ịgbanye ihe nchekwa na iwepụ ihe a na-achọghị."], ["Nzuzo diski (disk encryption)", "ịgbagwoju ihe niile dị na draịvụ ka onye ohi ghara ịgụ ya na-enweghị igodo."], ["Recovery key", "koodu ogologo na-emeghe draịvụ e zochiri (encrypted) ma ọ bụrụ na ịnweghị ike ịbanye."], ["Baseline", "ntọala nchekwa a kwadoro nke kọmputa ọ bụla n'ụlọ ọrụ kwesịrị inwe."]],
          slides: [
            { title: "Hardening", bullets: ["Gbanye ihe nchekwa", "Gbanyụọ ihe a na-achọghị", "Naanị na kọmputa nke gị"] },
            { title: "Lelee ihe isii", bullets: ["Mmelite, firewall, antivirus", "Akaụntụ standard maka ojiji kwa ụbọchị", "Mkpọchi ihuenyo na nzuzo diski"] },
            { title: "Ebe ị ga-ele", bullets: ["Windows: Settings na Windows Security", "Mac: System Settings, Privacy & Security", "Aha menu na-agbanwe: jiri search"] },
            { title: "Kpachara anya na encryption", bullets: ["Buru ụzọ chekwaa recovery key, n'ebe na-anọghị n'ịntanetị", "O doghị gị anya? Dee ya dị ka oghere ma jụọ"] }
          ],
          sources: [CISA],
          tryIt: "Na kọmputa nke gị, lelee ihe isii ahụ niile. Mee tebụl nwere kọlụm atọ: ntọala, ihe ị hụrụ, na ihe a ga-edozi. Nke a bụ akụkụ 1 nke ọrụ ikpeazụ gị.",
          youCanNow: "ilele isi ntọala nchekwa kọmputa ma dee oghere ndị ahụ, otu onye nyocha si elele baseline.",
          quickCheck: [
            { objective: "O3", q: "Tupu ị gbanye nzuzo diski, gịnị ka ị ga-eme?", options: ["Gbanyụọ firewall", "Chekwaa recovery key n'ebe dị nchebe na-anọghị n'ịntanetị", "Hichapụ faịlụ gị", "Kesaa okwuntughe gị"], answer: 1, why: "Na-enweghị recovery key ị nwere ike ịghara inwe ike ịbanye na faịlụ nke gị." },
            { objective: "O3", q: "Kedu akaụntụ ị ga-eji maka ọrụ kwa ụbọchị?", options: ["Akaụntụ admin", "Akaụntụ a na-ekerịta na-enweghị okwuntughe", "Akaụntụ ọbịa (guest) nwere faịlụ gị", "Akaụntụ standard"], answer: 3, why: "Akaụntụ standard na-egbochi ihe malware ma ọ bụ mperi nwere ike ịgbanwe." }
          ]
        },
        {
          title: "Ịgụ log na ịhụ ihe na-enyo enyo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kaa ahịrị ndị na-enyo enyo n'ime log mbanye ma kwuo ihe kpatara ya.",
          text: [
            "Log bụ ndepụta ihe omume sistemụ na-edekọ, nke ọ bụla nwere oge. Ndị nyocha na-agụ log mbanye iji hụ mwakpo. Na Windows, Event Viewer na-edebe Security log (ịhụ ya chọrọ akaụntụ admin); mbanye dara na-apụta dị ka event 4625, ndị gara nke ọma dị ka 4624. Ebe a anyị na-eji log e chepụtara echepụta kama.",
            "Log omume (e chepụtara echepụta): 02:14:01 FAILED user=jlopez from 203.0.113.50. 02:14:03 FAILED user=jlopez from 203.0.113.50. 02:14:05 FAILED user=jlopez from 203.0.113.50. 02:14:07 FAILED user=jlopez from 203.0.113.50. 02:14:09 SUCCESS user=jlopez from 203.0.113.50. 08:02:30 SUCCESS user=mchen from 10.0.0.12.",
            "Ihe ịdọ aka na ntị: ọtụtụ mbanye dara n'ime sekọnd ole na ole (mmadụ na-akọ okwuntughe), wee mbanye gara nke ọma site n'otu adreesị ahụ (ha nwere ike ịkọ ya nke ọma). Ọzọkwa oge dị iche (elekere 2 nke abalị maka onye na-arụ ọrụ site n'elekere 9 ruo 5), mbanye site n'ebe a na-ahụghị mgbe niile, na otu akaụntụ na-abanye site n'ebe abụọ dị anya n'oge dị nso.",
            "Ọrụ gị bụ ịhụ, idekọ na ịkọ, ọ bụghị ịlụghachi ọgụ. Dee ihe ị hụrụ, oge ndị ahụ, akaụntụ na adreesị, ma nyefee ya site n'usoro otu gị."
          ],
          steps: ["Gụọ ahịrị ọ bụla: oge, nsonaazụ, akaụntụ, adreesị.", "Chọọ ọtụtụ ndada n'obere oge.", "Chọọ mbanye gara nke ọma ozugbo ndada gasịrị site n'otu adreesị ahụ.", "Chọọ oge ma ọ bụ ebe dị iche.", "Dee ahịrị ọ bụla na-enyo enyo na ihe kpatara ya.", "Kọọ ya; anwala mgbe ọ bụla ịbanye na sistemụ nke ọzọ n'onwe gị."],
          words: [["Log", "ndepụta ihe omume nwere oge sistemụ na-edekọ."], ["Event Viewer", "ngwa Windows maka ịgụ log sistemụ na nchekwa."], ["Brute force", "ịkọ okwuntughe site n'ịnwale ọtụtụ nhọrọ ngwa ngwa."], ["Ihe ngosi (indicator)", "akara n'ime ozi na-egosi na ihe ọjọọ nwere ike na-eme."]],
          slides: [
            { title: "Log na-akọ akụkọ ahụ", bullets: ["Ahịrị ọ bụla: oge, ihe omume, akaụntụ, adreesị", "Windows: Event Viewer, Security log", "4625 = mbanye dara, 4624 = gara nke ọma"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Ọtụtụ ndada n'ime sekọnd", "Wee mbanye gara nke ọma site n'otu adreesị", "Oge ma ọ bụ ebe dị iche"] },
            { title: "N'ime log omume", bullets: ["Ndada 4 maka jlopez n'ime sekọnd 8 n'elekere 2:14 nke abalị", "Wee mbanye gara nke ọma site n'otu adreesị ahụ", "mchen n'elekere 8:02 nke ụtụtụ dị ka ihe nkịtị"] },
            { title: "Ọrụ gị", bullets: ["Hụ, dekọọ, kọọ", "Alụghachila ọgụ ma ọ bụ banye n'ike"] }
          ],
          tryIt: "Detuo log omume ahụ n'akwụkwọ. Gbaa ahịrị ọ bụla na-enyo enyo gburugburu ma dee ihe kpatara ya. Tụọ ọkwa ihe egwu (ohere na mmetụta) na akụkụ CIA nọ n'ihe egwu. Debe nke a maka akụkụ 2 nke ọrụ ikpeazụ gị.",
          youCanNow: "ịgụ log mbanye, ịkara ahịrị ndị na-enyo enyo, na ịkọwa ihe mere ha ji dị mkpa.",
          quickCheck: [
            { objective: "O4", q: "N'ime log omume ahụ, kedu ahịrị kacha na-echegbu onwe?", options: ["Mbanye gara nke ọma 02:14:09 maka jlopez ozugbo ndada anọ gasịrị", "Mbanye gara nke ọma 08:02:30 maka mchen", "Naanị mbanye mbụ dara", "Ọ dịghị; mbanye dara bụ ihe nkịtị mgbe niile"], answer: 0, why: "Mbanye gara nke ọma ozugbo ndada ngwa ngwa site n'otu adreesị na-egosi na a kọrọ okwuntughe." },
            { objective: "O4", q: "Ị hụrụ ihe ịrịba ama nke mwakpo n'ime log. Gịnị ka ị ga-eme?", options: ["Wakpoghachi kọmputa onye wakporo", "Leghara ya anya ruo ụtụtụ", "Hichapụ log ahụ", "Dekọọ ihe niile ma kọọ ha site n'usoro otu gị"], answer: 3, why: "Ndị nyocha na-edekọ ma na-akọ; ịlụghachi ọgụ megidere iwu, ihichapụ log na-ebibi ihe akaebe." }
          ]
        },
        {
          title: "Nzaghachi ihe mberede, na atụmatụ Security+ gị",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Depụta nzọụkwụ nzaghachi ihe mberede maka otu ihe merenụ ma dee atụmatụ ọmụmụ Security+ nwere ụbọchị.",
          text: [
            "Ihe mberede (incident) bụ ihe omume nchekwa na-akpata ma ọ bụ na-eyi mmebi egwu. Ụlọ ọrụ na-agbaso nzọụkwụ a kwadoro ka ndị mmadụ nọrọ jụụ. Security+ na-eji: nkwadebe (preparation), nchọpụta (detection), nyocha (analysis), njide (containment), mkpochapụ (eradication), mgbake (recovery), na ihe mmụta (lessons learned).",
            "Maka mbanye jlopez: nkwadebe (otu ahụ nweburu atụmatụ na ndị a ga-akpọ); nchọpụta (ị hụrụ ahịrị log ndị ahụ); nyocha (kwado na ọ bụ eziokwu: jlopez ọ banyere n'elekere 2 nke abalị?); njide (kpọchie akaụntụ ahụ ma kwụsị nnọkọ ya niile); mkpochapụ (gbanwee okwuntughe, gbanye MFA, wepụ ihe ọ bụla onye wakporo hiwere); mgbake (nyeghachi jlopez ohere dị nchebe ma na-ele akaụntụ ahụ anya); ihe mmụta (gịnị gaara egbochi nke a?).",
            "Chekwaa ihe akaebe: ehichapụla log ma ọ bụ hichapụ kọmputa tupu otu gị ekwuo. Dee oge na omume ka ị na-aga. Kọọrọ onye usoro gị kpọrọ aha.",
            "Ugbu a, mee atụmatụ ule gị. Jiri ụdị i họọrọ na Nkuzi 1. Họrọ ụbọchị ebumnuche. Nye ngalaba ndị buru ibu izu ndị ọzọ. Mee omume site na ebumnuche ule gọọmentị (exam objectives), ndetu hardening na log nke gị, na nnwale ndị dị ebe a. Họrọ awa kwa izu dabara ndụ gị. Tupu i debanye aha, lelee ọnụ ahịa na ụzọ iwe ule na peeji gọọmentị, ma jụọ mmemme ọrụ (workforce), ndị agha mbụ (veterans) ma ọ bụ re-entry maka enyemaka n'ụgwọ."
          ],
          steps: ["Nkwadebe: mara atụmatụ ahụ na onye a ga-akpọ.", "Nchọpụta: hụ ihe ịdọ aka na ntị.", "Nyocha: kwado na ọ bụ eziokwu na otu o si dị njọ.", "Njide: kwụsị ya ịgbasa.", "Mkpochapụ: wepụ ihe kpatara ya.", "Mgbake: laghachi n'ọnọdụ nkịtị ma na-ele anya.", "Ihe mmụta: dee ihe a ga-agbanwe.", "Atụmatụ: ụdị ule, ụbọchị ebumnuche, ngalaba na ibu ha, awa kwa izu."],
          words: [["Ihe mberede (incident)", "ihe omume nchekwa na-akpata ma ọ bụ na-eyi mmebi egwu."], ["Njide (containment)", "ịkwụsị ihe mberede ka ọ ghara ịgbasa."], ["Mkpochapụ (eradication)", "iwepụ ihe kpatara ihe mberede."], ["Ihe akaebe (evidence)", "log, faịlụ na ndetu na-egosi ihe mere; a ga-echekwa ha."]],
          slides: [
            { title: "Nzọụkwụ nzaghachi ihe mberede", bullets: ["Nkwadebe, nchọpụta, nyocha", "Njide, mkpochapụ, mgbake", "Ihe mmụta"] },
            { title: "Okwu jlopez", bullets: ["Kwado ya na onye ọrụ ahụ", "Kpọchie akaụntụ; gbanwee okwuntughe; gbanye MFA", "Nyeghachi ohere ma na-ele akaụntụ anya"] },
            { title: "Chekwaa ihe akaebe", bullets: ["Ehichapụla log ma ọ bụ ngwaọrụ n'oge", "Dee oge na omume ka ị na-aga"] },
            { title: "Atụmatụ Security+ gị", bullets: ["Ụdị ule na ụbọchị ebumnuche", "Ngalaba na ibu ha; izu ndị ọzọ maka ndị buru ibu", "Awa kwa izu; lelee ọnụ ahịa na comptia.org"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Ọrụ ikpeazụ: chịkọta tebụl hardening gị (Nkuzi 4), ndetu ihe mberede maka log jlopez nwere mmetụta CIA ya, ọkwa ihe egwu na otu omume maka nzọụkwụ nzaghachi ọ bụla, na atụmatụ Security+ gị nwere ụdị ule, ụbọchị ebumnuche, ngalaba na ibu ha, na awa kwa izu.",
          youCanNow: "ịgbaso nzọụkwụ nzaghachi ihe mberede maka okwu dị ka ezi ihe na ịgbaso atụmatụ gị nwere ụbọchị gaa na Security+.",
          quickCheck: [
            { objective: "O5", q: "Ị kwadoro na e weghara otu akaụntụ. Gịnị bụ nzọụkwụ na-esote?", options: ["Ihe mmụta", "Njide: kpọchie akaụntụ ahụ ma kwụsị nnọkọ ya", "Mgbake", "Nkwadebe"], answer: 1, why: "Mgbe nchọpụta na nyocha gasịrị, ị na-ejide ihe mberede ahụ ka ọ ghara ịgbasa." },
            { objective: "O6", q: "Kedu nke kwesịrị ịdị n'atụmatụ ọmụmụ Security+?", options: ["Naanị okwu \"Security+\"", "Ndepụta ngwa hacking ị ga-anwale n'ahụ ndị ọzọ", "Ụdị ule, ụbọchị ebumnuche, ngalaba na ibu ha na awa kwa izu", "Okwuntughe gị"], answer: 2, why: "Atụmatụ na-akpọ aha ụdị ziri ezi, ụbọchị, ihe a ga-amụ na mgbe." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ọrụ nchekwa n'omume",
        questions: [
          { objective: "O3", q: "Kedu nke bụ akụkụ nke hardening kọmputa?", options: ["Ịgbanyụ mmelite", "Ịgbanye firewall na mkpọchi ihuenyo", "Iji akaụntụ admin maka ihe niile", "Ikesa recovery key n'ịntanetị"], answer: 1, why: "Hardening na-agbanye ihe nchekwa dị ka firewall na mkpọchi ihuenyo." },
          { objective: "O4", q: "Mbanye iri dara maka otu akaụntụ n'ime sekọnd ise site n'otu adreesị nwere ike ịpụta:", options: ["Onye ọrụ ahụ chefuru ịchaji ekwentị", "Okporo ụzọ nkịtị", "Nsogbu igwe mbipụta", "Mmadụ na-akọ okwuntughe ahụ"], answer: 3, why: "Ọtụtụ ndada ngwa ngwa bụ akara mwakpo brute force (ịkọ okwuntughe)." },
          { objective: "O4", q: "Na Windows, kedu ngwa na-ekwe ka ị gụọ Security log?", options: ["Event Viewer", "Paint", "Naanị Notepad", "Igwe mgbakọ"], answer: 0, why: "Event Viewer na-egosi log Windows, gụnyere Security log." },
          { objective: "O5", q: "Kedu nzọụkwụ na-abịa ozugbo njide gasịrị?", options: ["Nchọpụta", "Nkwadebe", "Mkpochapụ", "Nyocha"], answer: 2, why: "Mgbe ị kwụsịrị ịgbasa ya, ị na-ewepụ ihe kpatara ya: mkpochapụ." },
          { objective: "O5", q: "N'oge ihe mberede, gịnị mere i ji kwesị idebe log ma ghara ihichapụ kọmputa ozugbo?", options: ["Log bụ ihe akaebe nke ihe mere", "Ihichapụ na-emegide iwu mgbe niile", "Log na-eme ka kọmputa gaa ngwa ngwa", "Ọ dịghị mkpa"], answer: 0, why: "Log na ngwaọrụ bụ ihe akaebe; otu ahụ na-ekpebi mgbe ọ dị mma ihicha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nchekwa Ịntanetị Maka Ọrụ Mbido (Nkwadebe CompTIA Security+)",
    questions: [
      { objective: "O6", q: "Gịnị bụ koodu ule Security+ V8?", options: ["SY0-701", "220-1201", "SY0-801", "DA0-002"], answer: 2, why: "V8 bụ SY0-801; V7 bụ SY0-701." },
      { objective: "O6", q: "Gịnị mere ị ga-eji lelee peeji gọọmentị CompTIA tupu i debanye aha?", options: ["Ụdị ule, ụbọchị na ọnụ ahịa nwere ike ịgbanwe", "Ọ bụ naanị ebe nwere ngwa hacking omume", "Ọ na-enye asambodo n'efu", "Ọ dịghị mkpa"], answer: 0, why: "Ụdị ule na-akwụsị, ọnụ ahịa na-agbanwe; peeji gọọmentị dị ọhụrụ." },
      { objective: "O6", q: "Kedu ngalaba kwesịrị inweta oge ọmụmụ kacha n'atụmatụ Security+?", options: ["Nke kacha nta", "Security operations, nke kacha ibu", "Ọ dịghị; mụọ ka o si dabara", "Naanị ngalaba masịrị gị"], answer: 1, why: "Ngalaba kacha ibu nwere ajụjụ kacha ọtụtụ." },
      { objective: "O1", q: "Ransomware kpọchiri faịlụ niile n'otu ọfịs. Kedu akụkụ CIA kacha metụta?", options: ["Nzuzo", "Izi ezi", "Ikike pere mpe", "Ịdị njikere"], answer: 3, why: "Ndị mmadụ enweghị ike iji faịlụ ha: ịdị njikere." },
      { objective: "O1", q: "Nzuzo (confidentiality) pụtara:", options: ["Sistemụ na-arụ ọrụ mgbe a chọrọ ha", "Naanị ndị kwesịrị ekwesị nwere ike ịhụ ozi ahụ", "E nwere ndabere ozi", "E bipụtara ozi ahụ"], answer: 1, why: "Nzuzo na-edebe ozi pụọ n'aka ndị na-ekwesịghị ịhụ ya." },
      { objective: "O1", q: "Nwa akwụkwọ gbanwere akara ule ya na sistemụ ụlọ akwụkwọ. Kedu akụkụ CIA e mebiri?", options: ["Izi ezi", "Ịdị njikere", "Nzuzo", "Ime ka ụjọ tụọ"], answer: 0, why: "A gbanwere ozi ahụ n'enweghị ikike, ya mere ọ dịghịzi ezi ezi." },
      { objective: "O2", q: "Okwuntughe na-adịghị ike n'akaụntụ admin bụ:", options: ["Ihe iyi egwu", "Ihe nchekwa", "Adịghị ike", "Recovery key"], answer: 2, why: "Ọ bụ ntụpọ onye mwakpo nwere ike iji." },
      { objective: "O2", q: "MFA mgbe a na-abanye bụ isi:", options: ["Ihe nchekwa mmezi", "Ihe nchekwa nchọpụta", "Akara ime ka ụjọ tụọ", "Ihe nchekwa mgbochi nke teknụzụ"], answer: 3, why: "Ọ na-akwụsị ọtụtụ nweghara akaụntụ tupu ha emee, site na teknụzụ." },
      { objective: "O2", q: "A na-ekpe ihe egwu ikpe site na:", options: ["Ohere na mmetụta", "Nha ihuenyo", "Ọnụ ọgụgụ kọmputa", "Otu ọfịs ahụ si dị ọhụrụ"], answer: 0, why: "Ihe egwu na-ejikọta ohere ihe ọjọọ ga-eme na otu ọ ga-esi njọ." },
      { objective: "O2", q: "Iwu e dere ede na-ekwu onye nwere ike ịbanye na faịlụ ndị ahịa bụ kedu ụdị ihe nchekwa?", options: ["Anụ ahụ", "Njikwa", "Teknụzụ", "Mmezi"], answer: 1, why: "Iwu ụlọ ọrụ na mkpebi ihe egwu bụ ihe nchekwa njikwa." },
      { objective: "O3", q: "Kedu ngwa dị n'ime Windows maka nchekwa nje (virus)?", options: ["Microsoft Defender na Windows Security", "Event Viewer", "Paint", "Naanị Task Scheduler"], answer: 0, why: "Microsoft Defender bụ antivirus dị n'ime Windows Security." },
      { objective: "O3", q: "A na-eji FileVault na Mac maka:", options: ["Ịkpọ egwu", "Iziga email", "Nzuzo diski", "Ibipụta akwụkwọ"], answer: 2, why: "FileVault na-ezochi (encrypt) draịvụ Mac." },
      { objective: "O3", q: "Ebee ka ị ga-eme omume hardening?", options: ["Na kọmputa onye agbata obi", "Na kọmputa nke gị", "Na sava ebe ọrụ ochie gị", "Na netwọk Wi-Fi ọha ọ bụla"], answer: 1, why: "Mee omume naanị na ngwaọrụ nke gị ma ọ bụ nke e nyere gị ikike ederede iji." },
      { objective: "O4", q: "Gịnị bụ log?", options: ["Ndepụta okwuntughe", "Ụdị nje (virus)", "Iwu firewall", "Ndepụta ihe omume nwere oge sistemụ na-edekọ"], answer: 3, why: "Log na-edekọ ihe omume na oge ha ka ndị nyocha hụ ihe mere." },
      { objective: "O4", q: "Kedu mbanye kacha dị iche maka onye ọrụ ọfịs na-arụ site n'elekere 9 ruo 5?", options: ["8:55 nke ụtụtụ site na netwọk ọfịs", "12:30 nke ehihie site na netwọk ọfịs", "3:10 nke abalị site na mba ọzọ", "4:45 nke mgbede site na netwọk ọfịs"], answer: 2, why: "Oge na ebe dị iche bụ ihe ịdọ aka na ntị." },
      { objective: "O4", q: "Event Windows 4625 pụtara:", options: ["Mbanye dara", "Mbanye gara nke ọma", "Ọrụ igwe mbipụta", "Mmelite sọftwụia"], answer: 0, why: "4625 bụ mbanye dara; 4624 bụ nke gara nke ọma." },
      { objective: "O5", q: "Gịnị bụ nzọụkwụ MBỤ nke nzaghachi ihe mberede?", options: ["Mgbake", "Nkwadebe", "Mkpochapụ", "Ihe mmụta"], answer: 1, why: "Nkwadebe na-ebu ụzọ: atụmatụ na ndị a ga-akpọ dị njikere tupu ihe mberede." },
      { objective: "O5", q: "Ịgbanwe okwuntughe na iwepụ ihe onye wakporo hiwere bụ:", options: ["Nchọpụta", "Nkwadebe", "Ihe mmụta", "Mkpochapụ"], answer: 3, why: "Mkpochapụ na-ewepụ ihe kpatara ihe mberede ahụ." },
      { objective: "O5", q: "Mgbe akaụntụ ahụ dịghachiri nchebe, otu ahụ zukọrọ ịjụ ihe gaara egbochi ya. Nke a bụ:", options: ["Ihe mmụta", "Njide", "Nchọpụta", "Nyocha"], answer: 0, why: "Ihe mmụta bụ nzọụkwụ ikpeazụ: meziwanye ka ọ ghara ime ọzọ." },
      { objective: "O5", q: "Ị hụrụ mwakpo si n'adreesị dị n'èzí. Gịnị ka I KWESỊGHỊ ime?", options: ["Dee oge ndị ahụ", "Kọọrọ otu gị ya", "Gbalịa ịbanye na kọmputa onye wakporo", "Debe log ndị ahụ"], answer: 2, why: "Ịlụghachi ọgụ megidere iwu ma ọ bụghị ọrụ onye nyocha; dekọọ ma kọọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 6, 8, 10, 13, 14, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Tebụl hardening", objective: "O3", notYet: "E lelebeghị ụfọdụ n'ime ntọala isii ahụ.", meets: "E lelere ntọala isii niile na kọmputa nke gị, ya na ihe a hụrụ na oghere.", exceeds: "Oghere ọ bụla nwere mmezi na ihe kpatara ya, e dekwara atụmatụ recovery key." },
      { name: "Nyocha log", objective: "O4", notYet: "Ahụghị ndada ngwa ngwa ma ọ bụ mbanye gara nke ọma mgbe ha gasịrị.", meets: "Kara ahịrị ọ bụla na-enyo enyo ma kwuo ihe kpatara ya.", exceeds: "Kọwakwara otu ihe nkịtị si dị na ozi ọzọ ga-akwado ya." },
      { name: "CIA na ihe egwu", objective: "O1", notYet: "Akpọghị aha akụkụ CIA ọ bụla, ma ọ bụ kpọọ nke na-ezighi ezi.", meets: "Kpọrọ aha akụkụ CIA nọ n'ihe egwu ma nye ọkwa ohere na mmetụta nwere ihe kpatara ya.", exceeds: "Kọwara otu ihe egwu ahụ ga-esi gbanwee ma ọ bụrụ na a gbakwunye ihe nchekwa." },
      { name: "Ihe nchekwa", objective: "O2", notYet: "Enweghị ihe nchekwa, ma ọ bụ ihe nchekwa adabaghị ihe egwu ahụ.", meets: "Kpọrọ aha opekata mpe otu ihe nchekwa dabara adaba ya na ụdị ya na ihe ọ na-eme.", exceeds: "Jiri ihe nchekwa nwere ọtụtụ ọkwa na iwu least privilege." },
      { name: "Nzọụkwụ ihe mberede", objective: "O5", notYet: "Nzọụkwụ fọdụrụ ma ọ bụ adịghị n'usoro, ma ọ bụ e bibiri ihe akaebe.", meets: "Nzọụkwụ asaa niile n'usoro, nke ọ bụla nwere otu omume, e chekwakwara ihe akaebe.", exceeds: "Kpọrọ aha onye a na-agwa na nzọụkwụ ọ bụla na otu ihe mmụta ga-esi gbanwee usoro ahụ." },
      { name: "Atụmatụ ọmụmụ na ule", objective: "O6", notYet: "Enweghị ụdị ule ma ọ bụ ụbọchị, ma ọ bụ ngalaba fọdụrụ.", meets: "Kpọrọ aha V7 ma ọ bụ V8 ya na ihe kpatara ya, ụbọchị ebumnuche, ngalaba ọ bụla na ibu ya na awa kwa izu.", exceeds: "Nyere ngalaba ndị buru ibu izu ndị ọzọ ma kpọọ aha ebe a ga-elele ọnụ ahịa na inweta enyemaka n'ụgwọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha ma ọ bụ gafee Security+ n'ime ọnwa 6 (nnyocha nsochi)",
      "Ndị na-amụ ihe rịọrọ ma ọ bụ malite ọrụ nchekwa, SOC ma ọ bụ IT n'ime ọnwa 6",
      "Ndị na-amụ ihe kwuru na ha dozie opekata mpe otu oghere nchekwa n'ụlọ ma ọ bụ n'ọrụ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Otu kọmputa Windows ma ọ bụ Mac nke onye na-amụ ihe nwere ma ọ bụ nwere ike ịgbanwe (ụfọdụ ntọala chọrọ akaụntụ admin)",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ akwụkwọ dijitalụ, maka tebụl, ndetu ihe mberede na atụmatụ",
      "Peeji gọọmentị CompTIA Security+ V7 na V8",
      "Ihe dị ka nkeji 90 n'ozuzu, n'oge nkenke, gbakwunyere oge ọmụmụ na-aga n'ihu maka ule ahụ"
    ],
    facilitatorNotes: [
      "Kwuo iwu ahụ na mmalite nnọkọ ọ bụla: naanị ichebe, naanị ngwaọrụ nke onwe na ozi e chepụtara; ịnwale sistemụ ndị ọzọ n'enweghị ikike ederede nwere ike ịbụ mpụ.",
      "Lelee peeji gọọmentị Security+ tupu otu ndị na-amụ ihe ọ bụla amalite; ụbọchị V7 ịkwụsị na V8 ịmalite nwere ike ịgbanwe.",
      "Na kọmputa ụlọ nyocha a na-ekerịta, ndị na-amụ ihe nwere ike ọ gaghị ahụ ụfọdụ ntọala; ka ha mee Nkuzi 4 n'ụlọ ma ọ bụ dị ka ngosipụta.",
      "Mee Nkuzi 6 dị ka omume n'elu tebụl (tabletop): otu onye na-agụ log ahụ, otu ahụ na-agafe nzọụkwụ nzaghachi ọ bụla n'olu dị elu.",
      "Chetara ndị na-amụ ihe na ihe ọmụmụ a na-akwadebe ha ma ọ naghị enye Security+; zipu ha na mmemme mpaghara na-enyere aka n'ụgwọ ule.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
