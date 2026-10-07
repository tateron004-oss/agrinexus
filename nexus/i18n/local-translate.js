"use strict";

// The offline translator Kyro falls back on when no real translation provider answers (no OpenAI key, a provider error, a stand-in service).
// It used to live in server.js. It is a small keyword dictionary for a few tool-completion sentences ("Telehealth intake opened ..."), and that is all it
// is allowed to be: a keyword dictionary cannot tell "Telehealth intake is ready" from "I couldn't do that one, nothing was saved, try 'Telehealth start
// intake'", so it used to turn the second into "your health registration is open and a record was created" -- a false success, in the person's own
// language, for a request that did nothing. Three rules now keep that from happening:
//   1. Fixed sentences the app says when it did NOT do something have a real, whole-sentence Kiswahili version that is returned verbatim.
//   2. The keyword dictionary (which only ever says "done") is never used on text that is negative, a question, long, or a display label.
//   3. Text that cannot be translated is never prefixed with a language tag in Kiswahili and never replaced by internal wording: a "not understood" reply
//      gets a short plain Kiswahili question, anything else stays readable English.

// Said by the older command route and the voice floor when nothing real handled the request. Nothing is saved.
const AGENT_NOT_HANDLED_RESPONSE = `I couldn't do that one just now, and nothing was saved. Try saying it another way, or name a module and action, like "AgriTrade prepare buyer update" or "Telehealth start intake."`;

// The short plain question asked when Kyro did not understand and has nothing real to offer. Never internal wording, never a claim of any action.
const NOT_UNDERSTOOD_QUESTION = {
  en: "Sorry, I did not understand that well. Can you say it again in a few words? For example: health, farm, work, money.",
  sw: "Samahani, sikuelewa vizuri. Unaweza kusema tena kwa maneno machache? Kwa mfano: afya, shamba, kazi, pesa."
};

// NEEDS REVIEW BY A FLUENT KISWAHILI SPEAKER. English sentence (exactly as the app says it) -> Kiswahili sentence. Only sentences that say "I did not do it" belong here.
const SW_FIXED_REPLIES = Object.freeze({
  [AGENT_NOT_HANDLED_RESPONSE]: `Samahani, sikuweza kufanya hilo sasa hivi, na hakuna kilichohifadhiwa. Jaribu kusema kwa njia nyingine, au taja sehemu na kitendo, kwa mfano "AgriTrade prepare buyer update" au "Telehealth start intake".`,
  "I could not find the pending workflow details. Please ask again.": "Sikuweza kupata maelezo ya kazi inayosubiri. Tafadhali uliza tena.",
  "I could not complete the checklist request right now.": "Sikuweza kukamilisha ombi la orodha sasa hivi."
});

const normalise = text => String(text || "").replace(/\s+/g, " ").trim();

// The exact fixed sentences, for tests and for callers that want to know whether a sentence is one of them.
const FIXED_HONEST_SENTENCES = Object.freeze(Object.keys(SW_FIXED_REPLIES));

function fixedReply(text, language) {
  if (language !== "sw") return null;
  return SW_FIXED_REPLIES[normalise(text)] || null;
}

// Anything that says a thing was NOT done, asks something, or is more than one short sentence is not a "done" statement, so the keyword dictionary must not touch it.
const NEGATIVE_WORDS = /\b(not|no|never|nothing|none|without|cannot|can't|couldn't|could not|won't|wouldn't|shouldn't|didn't|did not|doesn't|isn't|wasn't|aren't|weren't|haven't|hasn't|unable|fail|fails|failed|failing|unavailable|missing|blocked|sorry|instead|try|if)\b/i;
// The English itself has to claim that something is done or ready, so the Kiswahili sentence is never a bigger claim than the source ("Here are the providers near you" is not "provider systems were tested").
const COMPLETION_WORDS = /\b(opened|ready|created|completed|complete|finished|done|saved|captured|issued|scheduled|tested|recorded|prepared|generated|started|updated|added|sent|set)\b/i;
function isDoneStatement(text) {
  const value = normalise(text);
  if (!value || value.includes("?")) return false;
  if (value.split(" ").length > 24) return false;
  if (!COMPLETION_WORDS.test(value)) return false;
  return !NEGATIVE_WORDS.test(value.replace(/[’]/g, "'"));
}

const READINESS = {
  fr: "Jusqu'a l'arrivee des vrais fournisseurs, Nexus peut executer les workflows guides d'apprentissage, de main-d'oeuvre, de telesante, de commerce agricole, de drones, de cartes, de voix, de memoire et d'audit avec les donnees de la plateforme et le contexte local. Je dirai clairement ce qui est en direct, ce qui est local et ce qui exige des identifiants.",
  sw: "Mpaka watoa huduma wa moja kwa moja waunganishwe, Nexus inaweza kuendesha mtiririko wa kujifunza, kazi, afya kwa mbali, biashara ya mazao, droni, ramani, sauti, kumbukumbu na ukaguzi kwa kutumia rekodi za jukwaa na muktadha wa ndani. Nitasema wazi kilicho hai, kilicho cha ndani, na kinachohitaji nywila au funguo za huduma.",
  ar: "حتى وصول مزودي الخدمة الحقيقيين، يستطيع نكسس تشغيل مسارات التعلم والعمل والصحة عن بعد والتجارة الزراعية والطائرات بدون طيار والخرائط والصوت والذاكرة والتدقيق باستخدام سجلات المنصة والسياق المحلي. سأوضح ما هو مباشر، وما هو محلي، وما يحتاج إلى بيانات اعتماد.",
  es: "Hasta que lleguen los proveedores reales, Nexus puede ejecutar flujos guiados de aprendizaje, fuerza laboral, telesalud, comercio agricola, drones, mapas, voz, memoria y auditoria con registros de la plataforma y contexto local. Dire claramente que esta en vivo, que es local y que necesita credenciales."
};

// Each entry: every key word must appear in the (lower-cased) English. These sentences all claim that something was done, which is why they are only used for short, positive tool-completion text.
const VOICE_PHRASES = {
  fr: [
    [["telehealth", "intake"], "Votre admission de telesante est ouverte. AgriNexus a cree le dossier et le prochain suivi."],
    [["vitals"], "Les signes vitaux ont ete captures et ajoutes au dossier de telesante."],
    [["consent"], "Le consentement de telesante a ete enregistre."],
    [["referral"], "La reference de soins a ete creee."],
    [["follow-up"], "Le suivi a ete planifie."],
    [["buyer"], "Le contact acheteur est pret avec un message prepare pour votre produit."],
    [["application"], "AgriNexus a examine la candidature et a enregistre la prochaine etape de main-d'oeuvre."],
    [["lesson"], "La lecon suivante est terminee et la progression a ete mise a jour."],
    [["certificate"], "Le certificat a ete emis et ajoute au profil."],
    [["drone"], "Le flux drone est termine et les preuves terrain sont enregistrees."],
    [["provider"], "Les moteurs fournisseurs ont ete testes et les resultats sont enregistres."],
    [["profile"], "Le profil unifie est pret avec les informations principales."],
    [["opened"], "Espace ouvert. Vous pouvez continuer ici."]
  ],
  sw: [
    [["farmer", "inspect", "maize", "leaves"], "Mkulima anapaswa kukagua majani ya mahindi."],
    [["telehealth", "intake"], "Usajili wa afya kwa mbali umefunguliwa. AgriNexus imeunda rekodi na hatua inayofuata."],
    [["vitals"], "Vipimo muhimu vimechukuliwa na kuongezwa kwenye rekodi ya afya."],
    [["consent"], "Ridhaa ya huduma ya afya kwa mbali imerekodiwa."],
    [["referral"], "Rufaa ya huduma imeundwa."],
    [["follow-up"], "Ufuatiliaji umepangwa."],
    [["buyer"], "Mawasiliano na mnunuzi yako tayari pamoja na ujumbe wa bidhaa yako."],
    [["application"], "AgriNexus imekagua ombi la kazi na kurekodi hatua inayofuata."],
    [["lesson"], "Somo linalofuata limekamilika na maendeleo yamesasishwa."],
    [["certificate"], "Cheti kimetolewa na kuongezwa kwenye wasifu."],
    [["drone"], "Mtiririko wa droni umekamilika na ushahidi wa shamba umehifadhiwa."],
    [["provider"], "Mifumo ya watoa huduma imejaribiwa na matokeo yamehifadhiwa."],
    [["profile"], "Wasifu wa pamoja uko tayari na taarifa muhimu."],
    [["opened"], "Sehemu imefunguliwa. Unaweza kuendelea hapa."]
  ],
  ar: [
    [["telehealth", "intake"], "تم فتح إدخال الصحة عن بعد. أنشأ أجري نكسس السجل والخطوة التالية."],
    [["vitals"], "تم تسجيل العلامات الحيوية وإضافتها إلى ملف الصحة."],
    [["consent"], "تم تسجيل موافقة الصحة عن بعد."],
    [["referral"], "تم إنشاء الإحالة الصحية."],
    [["follow-up"], "تم جدولة المتابعة."],
    [["buyer"], "تم تجهيز التواصل مع المشتري ورسالة المنتج."],
    [["application"], "راجع أجري نكسس طلب العمل وسجل الخطوة التالية."],
    [["lesson"], "تم إكمال الدرس التالي وتحديث التقدم."],
    [["certificate"], "تم إصدار الشهادة وإضافتها إلى الملف."],
    [["drone"], "اكتمل مسار الدرون وتم حفظ أدلة الحقل."],
    [["provider"], "تم اختبار محركات الخدمة وحفظ النتائج."],
    [["profile"], "الملف الموحد جاهز مع المعلومات الأساسية."],
    [["opened"], "تم فتح القسم. يمكنك المتابعة هنا."]
  ],
  es: [
    [["language", "spanish"], "Listo. Cambie el idioma a espanol. Las frases y respuestas de AgriTrade ahora usaran espanol."],
    [["agritrade", "helps"], "AgriTrade ayuda a agricultores y equipos comerciales a pasar del cultivo al comprador y al pago. Puedo ayudar con cultivos, compradores, pedidos, pagos, logistica, calidad, exportacion e inteligencia de drones."],
    [["telehealth", "intake"], "La admision de telesalud esta lista con apoyo por voz."],
    [["vitals"], "Los signos vitales fueron capturados y agregados al registro de salud."],
    [["buyer"], "El contacto con el comprador esta listo con un mensaje preparado para su producto."],
    [["application"], "AgriNexus reviso la solicitud y guardo el siguiente paso de trabajo."],
    [["lesson"], "La leccion se completo y el progreso fue actualizado."],
    [["certificate"], "El certificado fue emitido y agregado al perfil."],
    [["drone"], "El flujo de dron se completo y la evidencia del campo fue guardada."],
    [["provider"], "Los motores de proveedores fueron probados y los resultados fueron guardados."],
    [["opened"], "Espacio abierto. Puede continuar aqui."]
  ]
};

const LANGUAGE_TAGS = { fr: "[FR]", sw: "[SW]", ar: "[AR]", es: "[ES]" };

// options.intent: the intent of the agent reply being translated (so a "not understood" reply gets the plain question rather than a mangled copy).
// options.context: the translation context; strings translated for display (buttons, suggested replies) never use the "done" dictionary.
function localTranslateText(text, targetLanguage, options = {}) {
  const value = String(text || "");
  const language = targetLanguage || "en";
  if (language === "en") return value;
  const lower = value.toLowerCase();
  const fixed = fixedReply(value, language);
  if (fixed) return fixed;
  if (language === "sw") {
    if (options.intent === "conversation.not_handled") return SW_FIXED_REPLIES[AGENT_NOT_HANDLED_RESPONSE];
    if (options.intent === "conversation.open_reasoning") return NOT_UNDERSTOOD_QUESTION.sw;
  }
  if (/\b(until real providers arrive|pre-provider|without providers|provider-ready|provider ready|platform records and local context)\b/.test(lower) && READINESS[language]) return READINESS[language];
  const displayOnly = /^agent-display/.test(String(options.context || ""));
  if (!displayOnly && isDoneStatement(value)) {
    const match = (VOICE_PHRASES[language] || []).find(([keys]) => keys.every(key => lower.includes(key)));
    if (match) return match[1];
  }
  // Kiswahili: no "[SW]" tag on English text. Plain English is more honest and more useful than a tag a listener hears read aloud.
  // (Display labels -- pillar titles, suggested-reply buttons -- keep the tag: it is the only mark that they were localised, and scripts/utility-assistant-smoke.js relies on it. They are not spoken replies.)
  if (language === "sw" && !displayOnly) return value;
  return `${LANGUAGE_TAGS[language] || `[${language.toUpperCase()}]`} ${value}`;
}

module.exports = Object.freeze({ localTranslateText, isDoneStatement, fixedReply, AGENT_NOT_HANDLED_RESPONSE, NOT_UNDERSTOOD_QUESTION, FIXED_HONEST_SENTENCES });
